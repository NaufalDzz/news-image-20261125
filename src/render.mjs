// Offline headless Chromium CDP renderer & automated DOM/geometry/content verifier.
// Renders src/template.mjs to entry.png (1024x1024) and asserts zero overflow,
// zero text clipping, zero map-pin collisions, zero excluded-date leaks, and <1 MiB PNG.

import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { buildHtml } from './template.mjs';
import { DATE_CHECK, getAllStories, getStats } from './stories.mjs';

const REPO_DIR = resolve(new URL('..', import.meta.url).pathname);
const OUT_PNG = join(REPO_DIR, 'entry.png');
const BUILD_DIR = join(REPO_DIR, '.build');

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    join(process.env.HOME ?? '', '.cache/ms-playwright/chromium-1255/chrome-linux-arm64/chrome'),
    join(process.env.HOME ?? '', '.cache/ms-playwright/chromium_headless_shell-1255/chrome-headless-shell-linux-arm64/chrome-headless-shell'),
    '/usr/bin/chromium',
    '/usr/bin/google-chrome',
  ].filter(Boolean);
  for (const p of candidates) {
    if (existsSync(p)) return p;
  }
  throw new Error(`No usable Chromium binary found. Checked: ${candidates.join(', ')}`);
}

async function waitForWsUrl(port, timeoutMs = 15000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/list`);
      if (res.ok) {
        const list = await res.json();
        const pageTarget = list.find((t) => t.type === 'page' && t.webSocketDebuggerUrl);
        if (pageTarget) return pageTarget.webSocketDebuggerUrl;
      }
    } catch {}
    await delay(100);
  }
  throw new Error('Timed out waiting for Chromium CDP endpoint');
}

class CdpClient {
  constructor(ws) {
    this.ws = ws;
    this.seq = 0;
    this.pending = new Map();
    this.consoleErrors = [];
    this.pageErrors = [];
    ws.addEventListener('message', (ev) => {
      const msg = JSON.parse(String(ev.data));
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve: res, reject: rej } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        if (msg.error) rej(new Error(msg.error.message));
        else res(msg.result);
      } else if (msg.method === 'Runtime.consoleAPICalled' && msg.params.type === 'error') {
        this.consoleErrors.push(msg.params.args.map((a) => a.value ?? a.description).join(' '));
      } else if (msg.method === 'Runtime.exceptionThrown') {
        this.pageErrors.push(msg.params.exceptionDetails?.text ?? 'Uncaught exception');
      }
    });
  }
  send(method, params = {}) {
    const id = ++this.seq;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
}

function runContentAudit() {
  const stories = getAllStories();
  const stats = getStats();
  const issues = [];

  if (stories.length !== 50) issues.push(`Expected 50 stories, got ${stories.length}`);
  if (stats.totalRegions !== 10) issues.push(`Expected 10 regions, got ${stats.totalRegions}`);
  if (stats.totalFields < 20) issues.push(`Expected >=20 fields, got ${stats.totalFields}`);
  const nums = stories.map((s) => s.num);
  for (let i = 1; i <= stories.length; i++) {
    if (nums[i - 1] !== i) issues.push(`Story numbering gap/mismatch at index ${i - 1}: got ${nums[i - 1]}`);
  }
  const regionSum = Object.values(stats.regionCounts).reduce((a, b) => a + b, 0);
  if (regionSum !== stats.totalStories) issues.push(`Region sum ${regionSum} != total ${stats.totalStories}`);

  // Check zero forbidden excluded-day tokens inside active story text
  for (const s of stories) {
    const blob = [s.place, s.headline, s.deck, s.why, s.summary, s.text].filter(Boolean).join(' ').toLowerCase();
    for (const tok of DATE_CHECK.forbiddenTokens) {
      if (blob.includes(tok)) {
        issues.push(`Story #${s.num} contains excluded-day token "${tok}"`);
      }
    }
  }
  return { stats, issues };
}

async function main() {
  const { stats, issues: contentIssues } = runContentAudit();
  mkdirSync(BUILD_DIR, { recursive: true });
  const htmlPath = join(BUILD_DIR, 'broadsheet.html');
  writeFileSync(htmlPath, buildHtml(), 'utf8');

  const chromeBin = findChrome();
  const port = 9321 + Math.floor(Math.random() * 400);
  const profileDir = mkdtempSync(join(tmpdir(), 'mf-news-chrome-'));
  const proc = spawn(
    chromeBin,
    [
      '--headless=new',
      '--no-sandbox',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      `--remote-debugging-port=${port}`,
      `--user-data-dir=${profileDir}`,
      '--window-size=1024,1024',
      'about:blank',
    ],
    { stdio: 'ignore' }
  );

  try {
    const wsUrl = await waitForWsUrl(port);
    const ws = new WebSocket(wsUrl);
    await new Promise((res, rej) => {
      ws.addEventListener('open', res, { once: true });
      ws.addEventListener('error', rej, { once: true });
    });
    const cdp = new CdpClient(ws);
    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: 1024,
      height: 1024,
      deviceScaleFactor: 1,
      mobile: false,
    });
    await cdp.send('Page.navigate', { url: `file://${htmlPath}` });
    await delay(500);
    await cdp.send('Runtime.evaluate', { expression: 'document.fonts.ready', awaitPromise: true });
    await delay(150);

    // Run comprehensive in-page DOM overflow, clipping & map-pin spacing audit
    const domAuditRes = await cdp.send('Runtime.evaluate', {
      returnByValue: true,
      expression: `(() => {
        const page = document.querySelector('.page');
        const pageRect = page.getBoundingClientRect();
        const overflows = [];
        const selectors = [
          '.kicker-bar', '.masthead', '.standfirst', '.reg-seg', '.fields-line', '.kn-desc', '.utc-strip',
          '.lead-hl', '.lead-deck', '.lead-foot', '.sec-place', '.sec-hl', '.sec-sum',
          '.b-body', '.date-check', '.sources-foot'
        ];
        for (const sel of selectors) {
          for (const el of document.querySelectorAll(sel)) {
            const r = el.getBoundingClientRect();
            const dx = el.scrollWidth - el.clientWidth;
            const dy = el.scrollHeight - el.clientHeight;
            if (dx > 1 || dy > 1) {
              overflows.push({
                sel,
                text: el.textContent.trim().slice(0, 65),
                dx: Math.round(dx * 10) / 10,
                dy: Math.round(dy * 10) / 10,
                w: Math.round(r.width),
                h: Math.round(r.height),
              });
            }
          }
        }
        const pageDx = page.scrollWidth - page.clientWidth;
        const pageDy = page.scrollHeight - page.clientHeight;
        const footerRect = document.querySelector('.footer-wrap').getBoundingClientRect();
        const lowerRect = document.querySelector('.lower-section').getBoundingClientRect();
        const briefs = [...document.querySelectorAll('.brief-row')];
        const minBriefGap = briefs.length ? Math.round((footerRect.top - Math.max(...briefs.map(b => b.getBoundingClientRect().bottom))) * 10) / 10 : 0;

        // Map pin pairwise distance check
        const pins = [...document.querySelectorAll('.map-pin')].map(g => ({
          num: Number(g.dataset.num),
          x: Number(g.dataset.x),
          y: Number(g.dataset.y),
        }));
        const pinCollisions = [];
        let minPinDist = Infinity;
        for (let i = 0; i < pins.length; i++) {
          for (let j = i + 1; j < pins.length; j++) {
            const d = Math.hypot(pins[i].x - pins[j].x, pins[i].y - pins[j].y);
            if (d < minPinDist) minPinDist = d;
            if (d < 15.5) {
              pinCollisions.push({ a: pins[i].num, b: pins[j].num, dist: Math.round(d * 10) / 10 });
            }
          }
        }
        return {
          pageDx,
          pageDy,
          footerBottom: Math.round(footerRect.bottom * 10) / 10,
          lowerBottom: Math.round(lowerRect.bottom * 10) / 10,
          minBriefGap,
          minPinDist: Math.round(minPinDist * 10) / 10,
          pinCollisions,
          overflowCount: overflows.length,
          overflows,
        };
      })()`,
    });

    const audit = domAuditRes.result.value;
    const shot = await cdp.send('Page.captureScreenshot', {
      format: 'png',
      fromSurface: true,
      clip: { x: 0, y: 0, width: 1024, height: 1024, scale: 1 },
    });
    const pngBuf = Buffer.from(shot.data, 'base64');
    writeFileSync(OUT_PNG, pngBuf);

    ws.close();
    console.log(
      JSON.stringify(
        {
          ok:
            contentIssues.length === 0 &&
            cdp.consoleErrors.length === 0 &&
            cdp.pageErrors.length === 0 &&
            audit.pageDx <= 0 &&
            audit.pageDy <= 0 &&
            audit.overflowCount === 0 &&
            audit.pinCollisions.length === 0 &&
            pngBuf.length <= 1_048_576,
          stats,
          pngBytes: pngBuf.length,
          consoleErrors: cdp.consoleErrors,
          pageErrors: cdp.pageErrors,
          contentIssues,
          domAudit: audit,
        },
        null,
        2
      )
    );
  } finally {
    proc.kill('SIGKILL');
    rmSync(profileDir, { recursive: true, force: true });
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
