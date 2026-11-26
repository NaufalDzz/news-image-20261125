// Pixel-exact 1024x1024 broadsheet HTML/CSS template for Wednesday 25 November 2026.
// Optimized for 300px thumbnail legibility + 1024px editorial depth:
// - 64px serif masthead + only 2 compact top strips (9-region bar + 5 big key numbers)
// - 3 large hero leads (20px serif headlines) + 8 wide 2x4 illustrated secondaries (15px serif headlines)
// - 24 crisp, spacious briefs (12+12 @ 10.6px, zero spreadsheet badge clutter) + world map + UTC timeline + Date Check

import {
  BRIEFS,
  DATE_CHECK,
  EDITION,
  KEY_NUMBERS,
  LEADS,
  REGIONS,
  SECONDARIES,
  TIMELINE,
  getStats,
} from './stories.mjs';
import {
  renderLeadIllustration,
  renderSecondaryIllustration,
  renderWorldMap,
} from './illustrations.mjs';

function esc(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function tagClass(tag) {
  if (tag === 'CLAIM' || tag === 'CL') return 'tag-claim';
  if (tag === 'REPORTED' || tag === 'R') return 'tag-reported';
  if (tag === 'OFFICIAL' || tag === 'O') return 'tag-official';
  return 'tag-confirmed';
}

export function buildHtml() {
  const stats = getStats();
  const regionColorMap = Object.fromEntries(REGIONS.map((r) => [r.id, r.color]));

  const regionBarHtml = REGIONS.map((r) => {
    const count = stats.regionCounts[r.id] ?? 0;
    return `<div class="reg-seg" style="flex:${count} 0 ${r.minW}px;background:${r.color};">${esc(r.label)} <span>${count}</span></div>`;
  }).join('');

  const keyNumbersHtml = KEY_NUMBERS.map(
    (k) => `<div class="kn-item">
      <div class="kn-fig" style="color:${k.color};">${esc(k.figure)}</div>
      <div class="kn-desc"><div>${esc(k.line1)}</div><div>${esc(k.line2)}</div></div>
    </div>`
  ).join('');

  const timelineHtml = TIMELINE.map(
    (t) => `<div class="utc-row"><span class="utc-t">${esc(t.time)}</span><span class="utc-l">${esc(t.label)}</span></div>`
  ).join('');

  const leadsHtml = LEADS.map(
    (s) => `<article class="lead-card">
      <div class="lead-art">${renderLeadIllustration(s.art)}</div>
      <div class="lead-meta">
        <span class="num-pill" style="background:${regionColorMap[s.region]};">${s.num}</span>
        <span class="meta-place">${esc(s.place)} · ${esc(s.field.toUpperCase())}</span>
        <span class="ep-tag ${tagClass(s.tag)}">${esc(s.tag)}</span>
      </div>
      <h2 class="lead-hl">${esc(s.headline)}</h2>
      <p class="lead-deck">${esc(s.deck)}</p>
      <div class="lead-foot">
        <span class="why-lbl">WHY IT MATTERS</span> ${esc(s.why)} <span class="src-inline">(${esc(s.source)})</span>
      </div>
    </article>`
  ).join('');

  const secondariesHtml = SECONDARIES.map(
    (s) => `<article class="sec-card">
      <div class="sec-art">${renderSecondaryIllustration(s.art)}</div>
      <div class="sec-meta">
        <span class="num-pill sm" style="background:${regionColorMap[s.region]};">${s.num}</span>
        <span class="sec-place">${esc(s.place)}</span>
        <span class="ep-tag sm ${tagClass(s.tag)}">${esc(s.tag)}</span>
      </div>
      <h3 class="sec-hl">${esc(s.headline)}</h3>
      <p class="sec-sum">${esc(s.summary)}</p>
    </article>`
  ).join('');

  const leftBriefs = BRIEFS.slice(0, 12);
  const rightBriefs = BRIEFS.slice(12);

  const renderBriefList = (list) =>
    list
      .map(
        (b) => `<div class="brief-row">
          <span class="b-num" style="background:${regionColorMap[b.region]};">${b.num}</span>
          <span class="b-body"><strong>${esc(b.place)}</strong> — ${esc(b.text)} <span class="b-ep b-ep-${b.tag.toLowerCase()}">[${esc(b.tag)}]</span></span>
        </div>`
      )
      .join('');

  const mapSvg = renderWorldMap(LEADS, SECONDARIES, BRIEFS, regionColorMap);

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<title>${esc(EDITION.dayHeading)}</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: 1024px;
    height: 1024px;
    overflow: hidden;
    background: #fcfaf5;
    color: #111827;
    font-family: 'Noto Sans', 'Nimbus Sans', 'DejaVu Sans', sans-serif;
    font-variant-numeric: tabular-nums;
    -webkit-font-smoothing: antialiased;
  }
  .page {
    width: 1024px;
    height: 1024px;
    padding: 7px 14px 6px 14px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  /* Masthead */
  .kicker-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #111827;
    color: #f8fafc;
    font-size: 9.2px;
    font-weight: 800;
    letter-spacing: 0.4px;
    padding: 2.5px 8px;
  }
  .masthead {
    text-align: center;
    font-family: 'C059', 'Nimbus Roman', 'DejaVu Serif', Georgia, serif;
    font-size: 64px;
    font-weight: 900;
    line-height: 0.96;
    letter-spacing: -1.3px;
    color: #0f172a;
    margin-top: 2px;
  }
  .standfirst {
    text-align: center;
    font-family: 'C059', 'Nimbus Roman', 'DejaVu Serif', Georgia, serif;
    font-style: italic;
    font-size: 13.4px;
    font-weight: 700;
    color: #991b1b;
    line-height: 1.16;
    white-space: nowrap;
  }

  /* Strip 1: Proportional 9-region bar */
  .reg-bar {
    display: flex;
    height: 17px;
    gap: 2px;
    width: 100%;
  }
  .reg-seg {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    color: #ffffff;
    font-size: 8.5px;
    font-weight: 800;
    letter-spacing: 0.15px;
    white-space: nowrap;
    padding: 0 4px;
  }
  .reg-seg span { font-weight: 900; }

  /* Strip 2: 5 Big Key Numbers */
  .kn-strip {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
    border-top: 1px solid #d6cec0;
    border-bottom: 1.5px solid #14181f;
    padding: 3.5px 0;
  }
  .kn-item {
    display: flex;
    align-items: center;
    gap: 7px;
    border-right: 1px solid #e2dacb;
    padding-right: 6px;
    min-width: 0;
  }
  .kn-item:last-child { border-right: none; padding-right: 0; }
  .kn-fig {
    font-family: 'C059', 'Nimbus Roman', 'DejaVu Serif', Georgia, serif;
    font-size: 23px;
    font-weight: 900;
    line-height: 1;
    flex-shrink: 0;
  }
  .kn-desc {
    font-size: 9.6px;
    font-weight: 700;
    line-height: 1.15;
    color: #334155;
    min-width: 0;
  }

  /* 3 Hero Leads */
  .leads-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    border-bottom: 1.5px solid #14181f;
    padding-bottom: 6px;
  }
  .lead-card {
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
  }
  .lead-art {
    width: 100%;
    height: 108px;
    border: 1px solid #d5ccbd;
    overflow: hidden;
    background: #fff;
  }
  .lead-art svg { display: block; width: 100%; height: 100%; }
  .lead-meta {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 1px;
  }
  .num-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    color: #fff;
    font-size: 9.5px;
    font-weight: 900;
    flex-shrink: 0;
  }
  .num-pill.sm { width: 15px; height: 15px; font-size: 8.6px; }
  .meta-place {
    font-size: 9.2px;
    font-weight: 800;
    letter-spacing: 0.25px;
    color: #475569;
    white-space: nowrap;
  }
  .ep-tag {
    margin-left: auto;
    font-size: 7.8px;
    font-weight: 900;
    padding: 1px 4.5px;
    border-radius: 2px;
    letter-spacing: 0.2px;
    flex-shrink: 0;
  }
  .ep-tag.sm { font-size: 7.4px; padding: 0.5px 4px; }
  .tag-confirmed { background: #1e3a5f; color: #ffffff; }
  .tag-official { background: #0f766e; color: #ffffff; }
  .tag-reported { background: #e2e8f0; color: #1e293b; border: 1px solid #94a3b8; }
  .tag-claim { background: #fef3c7; color: #92400e; border: 1px solid #d97706; }

  .lead-hl {
    font-family: 'C059', 'Nimbus Roman', 'DejaVu Serif', Georgia, serif;
    font-size: 19.6px;
    font-weight: 900;
    line-height: 1.07;
    color: #0f172a;
  }
  .lead-deck {
    font-size: 10.6px;
    line-height: 1.24;
    color: #1e293b;
  }
  .lead-foot {
    margin-top: auto;
    font-size: 9.0px;
    line-height: 1.15;
    color: #334155;
    border-top: 1px solid #e4dccf;
    padding-top: 2px;
    white-space: nowrap;
  }
  .why-lbl {
    font-weight: 900;
    color: #991b1b;
    letter-spacing: 0.15px;
  }
  .src-inline { color: #64748b; font-style: italic; }

  /* 2x4 Wide Secondary Cards */
  .sec-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, auto);
    column-gap: 10px;
    row-gap: 6px;
    border-bottom: 1.5px solid #14181f;
    padding-bottom: 6px;
  }
  .sec-card {
    display: flex;
    flex-direction: column;
    gap: 2.5px;
    min-width: 0;
  }
  .sec-art {
    width: 100%;
    height: 56px;
    border: 1px solid #d5ccbd;
    overflow: hidden;
    background: #fff;
  }
  .sec-art svg { display: block; width: 100%; height: 100%; }
  .sec-meta {
    display: flex;
    align-items: center;
    gap: 4.5px;
    margin-top: 1px;
  }
  .sec-place {
    font-size: 8.8px;
    font-weight: 800;
    color: #475569;
    letter-spacing: 0.2px;
    white-space: nowrap;
  }
  .sec-hl {
    font-family: 'C059', 'Nimbus Roman', 'DejaVu Serif', Georgia, serif;
    font-size: 15.0px;
    font-weight: 900;
    line-height: 1.08;
    color: #0f172a;
  }
  .sec-sum {
    font-size: 10.0px;
    line-height: 1.19;
    color: #273242;
  }

  /* Lower Section: Map + UTC Timeline (left) | 24 Clean Spacious Briefs (right) */
  .lower-section {
    display: grid;
    grid-template-columns: 248px 1fr;
    gap: 10px;
    flex: 1;
    min-height: 0;
  }
  .map-col {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .sec-title {
    font-size: 9.5px;
    font-weight: 900;
    letter-spacing: 0.35px;
    color: #0f172a;
    border-bottom: 1.2px solid #cbd5e1;
    padding-bottom: 2px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .sec-title span {
    font-size: 8.3px;
    font-weight: 600;
    color: #64748b;
    letter-spacing: 0;
  }
  .map-wrap {
    width: 248px;
    height: 118px;
  }
  .map-wrap svg { display: block; width: 100%; height: 100%; }
  .utc-box {
    background: #f4eee4;
    border: 1px solid #dfd6c7;
    padding: 3.5px 5.5px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .utc-head {
    font-size: 8.2px;
    font-weight: 900;
    color: #991b1b;
    letter-spacing: 0.3px;
    border-bottom: 1px solid #e2d9ca;
    padding-bottom: 1px;
  }
  .utc-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5px 5px;
  }
  .utc-row {
    display: flex;
    gap: 3px;
    font-size: 7.9px;
    line-height: 1.15;
    white-space: nowrap;
  }
  .utc-t { font-weight: 900; color: #0f172a; }
  .utc-l { font-weight: 600; color: #334155; }

  .ep-key {
    font-size: 8.2px;
    font-weight: 600;
    color: #334155;
    display: flex;
    flex-wrap: wrap;
    gap: 2px 6px;
    line-height: 1.2;
  }
  .ep-key strong { font-weight: 900; }

  .briefs-col {
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
  }
  .briefs-two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 9px;
    flex: 1;
    padding-bottom: 2px;
  }
  .brief-col-stack {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
  }
  .brief-row {
    display: flex;
    align-items: baseline;
    gap: 4px;
    font-size: 9.8px;
    line-height: 1.16;
    padding: 1px 0;
    border-bottom: 1px solid #ede6da;
    min-width: 0;
  }
  .brief-row:last-child { border-bottom: none; }
  .b-num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 15.5px;
    height: 14px;
    border-radius: 2px;
    color: #ffffff;
    font-size: 8.2px;
    font-weight: 800;
    flex-shrink: 0;
    position: relative;
    top: -0.5px;
  }
  .b-body {
    flex: 1;
    min-width: 0;
    color: #1e293b;
    white-space: nowrap;
  }
  .b-body strong { color: #0f172a; font-weight: 800; }
  .b-ep {
    font-size: 8.2px;
    font-weight: 800;
  }
  .b-ep-c { color: #1e3a5f; }
  .b-ep-o { color: #0f766e; }
  .b-ep-r { color: #64748b; }
  .b-ep-cl { color: #b45309; }

  /* Date Check Footer */
  .footer-wrap {
    display: flex;
    flex-direction: column;
    gap: 2.5px;
    margin-top: auto;
  }
  .date-check {
    background: #fef5f3;
    border: 1px solid #d98276;
    border-left: 4px solid #991b1b;
    padding: 4px 8px;
    font-size: 9.2px;
    line-height: 1.24;
    color: #1f2937;
  }
  .dc-tag {
    display: inline-block;
    background: #991b1b;
    color: #ffffff;
    font-weight: 900;
    font-size: 8.5px;
    padding: 0.5px 4.5px;
    border-radius: 2px;
    margin-right: 5px;
    letter-spacing: 0.3px;
  }
  .dc-lbl { font-weight: 800; color: #7f1d1d; }
  .sources-foot {
    font-size: 8.2px;
    color: #475569;
    text-align: center;
    white-space: nowrap;
  }
</style>
</head>
<body>
  <main class="page">
    <header>
      <div class="kicker-bar">
        <span>${esc(EDITION.kickerPrefix)} · ${stats.totalStories} STORIES · ${stats.totalRegions} REGIONS · ${stats.totalFields} FIELDS</span>
        <span>${esc(EDITION.kickerSuffix)}</span>
      </div>
      <h1 class="masthead">${esc(EDITION.dayHeading)}</h1>
      <div class="standfirst">${esc(EDITION.standfirst)}</div>
    </header>

    <div class="reg-bar">${regionBarHtml}</div>
    <div class="kn-strip">${keyNumbersHtml}</div>

    <section class="leads-grid">${leadsHtml}</section>

    <section class="sec-grid">${secondariesHtml}</section>

    <section class="lower-section">
      <div class="map-col">
        <div class="sec-title">WHERE IT HAPPENED <span>1–11 = pictured · dots = briefs</span></div>
        <div class="map-wrap">${mapSvg}</div>
        <div class="utc-box">
          <div class="utc-head">THE DAY IN UTC — WEDNESDAY 25 NOV</div>
          <div class="utc-grid">${timelineHtml}</div>
        </div>
        <div class="ep-key">
          <span><strong style="color:#1e3a5f;">[C]</strong> Confirmed</span>
          <span><strong style="color:#0f766e;">[O]</strong> Official</span>
          <span><strong style="color:#64748b;">[R]</strong> Reported</span>
          <span><strong style="color:#b45309;">[CL]</strong> One-sided claim</span>
        </div>
      </div>
      <div class="briefs-col">
        <div class="sec-title">ALSO ON WEDNESDAY 25 NOVEMBER — ${BRIEFS.length} MORE STORIES <span>all 9 regions · verified 25 Nov UTC</span></div>
        <div class="briefs-two-col">
          <div class="brief-col-stack">${renderBriefList(leftBriefs)}</div>
          <div class="brief-col-stack">${renderBriefList(rightBriefs)}</div>
        </div>
      </div>
    </section>

    <footer class="footer-wrap">
      <div class="date-check">
        <div><span class="dc-tag">DATE CHECK</span><span class="dc-lbl">Left out (earlier days):</span> ${esc(DATE_CHECK.excludedEarlier)}</div>
        <div><span class="dc-lbl">Not yet:</span> ${esc(DATE_CHECK.notYet)}</div>
      </div>
      <div class="sources-foot">${esc(EDITION.sourcesLine)}</div>
    </footer>
  </main>
</body>
</html>`;
}
