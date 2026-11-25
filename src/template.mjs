// Pixel-exact 1024x1024 HTML/CSS template for the Wednesday 25 November 2026 world-news broadsheet.

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
    (t) => `<div class="tl-item"><span class="tl-time">${esc(t.time)}</span><span class="tl-lbl">${esc(t.label)}</span></div>`
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
      <div class="sec-art">${renderSecondaryIllustration(s.art, s.badge)}</div>
      <div class="sec-meta">
        <span class="num-pill sm" style="background:${regionColorMap[s.region]};">${s.num}</span>
        <span class="sec-place">${esc(s.place)}</span>
        <span class="ep-tag sm ${tagClass(s.tag)}">${esc(s.tag)}</span>
      </div>
      <h3 class="sec-hl">${esc(s.headline)}</h3>
      <p class="sec-sum">${esc(s.summary)}</p>
    </article>`
  ).join('');

  const leftBriefs = BRIEFS.slice(0, 13);
  const rightBriefs = BRIEFS.slice(13);

  const regionKeyHtml = REGIONS.filter((r) => r.id !== 'global')
    .map(
      (r) =>
        `<span class="reg-key-item"><i class="rk-dot" style="background:${r.color};"></i>${esc(r.label)}</span>`
    )
    .join('');

  const renderBriefList = (list) =>
    list
      .map(
        (b) => `<div class="brief-row">
          <span class="b-num" style="background:${regionColorMap[b.region]};">${b.num}</span>
          <span class="b-body"><strong>${esc(b.place)}</strong> · ${esc(b.text)}</span>
          <span class="ep-tag xs ${tagClass(b.tag)}">${esc(b.tag)}</span>
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
    background: #fbf8f2;
    color: #14181f;
    font-family: 'Noto Sans', 'Nimbus Sans', 'DejaVu Sans', sans-serif;
    font-variant-numeric: tabular-nums;
    -webkit-font-smoothing: antialiased;
  }
  .page {
    width: 1024px;
    height: 1024px;
    padding: 7px 12px 6px 12px;
    display: flex;
    flex-direction: column;
    gap: 4.5px;
  }

  /* Masthead */
  .kicker-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 9.2px;
    font-weight: 800;
    letter-spacing: 0.45px;
    color: #334155;
    border-bottom: 1.5px solid #14181f;
    padding-bottom: 2px;
  }
  .masthead {
    text-align: center;
    font-family: 'C059', 'Nimbus Roman', 'DejaVu Serif', Georgia, serif;
    font-size: 62px;
    font-weight: 900;
    line-height: 0.95;
    letter-spacing: -1.2px;
    color: #0f172a;
    margin-top: 1px;
  }
  .standfirst {
    text-align: center;
    font-family: 'C059', 'Nimbus Roman', 'DejaVu Serif', Georgia, serif;
    font-style: italic;
    font-size: 13px;
    font-weight: 700;
    color: #991b1b;
    line-height: 1.15;
    white-space: nowrap;
  }

  /* Proportional 9-region bar (guaranteed zero clipping) */
  .reg-bar {
    display: flex;
    height: 16px;
    gap: 2px;
    width: 100%;
  }
  .reg-seg {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    color: #ffffff;
    font-size: 8.2px;
    font-weight: 800;
    letter-spacing: 0.15px;
    white-space: nowrap;
    padding: 0 4px;
  }
  .reg-seg span {
    opacity: 0.95;
    font-weight: 900;
  }

  /* Key numbers + UTC strip */
  .kn-strip {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 6px;
    border-top: 1px solid #d6cec0;
    border-bottom: 1px solid #d6cec0;
    padding: 2.5px 0;
  }
  .kn-item {
    display: flex;
    align-items: center;
    gap: 5px;
    border-right: 1px solid #e2dacb;
    padding-right: 4px;
    min-width: 0;
  }
  .kn-item:last-child { border-right: none; padding-right: 0; }
  .kn-fig {
    font-family: 'C059', 'Nimbus Roman', 'DejaVu Serif', Georgia, serif;
    font-size: 20px;
    font-weight: 900;
    line-height: 1;
    flex-shrink: 0;
  }
  .kn-desc {
    font-size: 8.5px;
    font-weight: 600;
    line-height: 1.14;
    color: #334155;
    min-width: 0;
  }

  .tl-strip {
    display: flex;
    align-items: center;
    gap: 6px;
    background: #f2ece1;
    border: 1px solid #dfd6c7;
    padding: 2px 6px;
    height: 21px;
  }
  .tl-head {
    font-size: 8px;
    font-weight: 900;
    color: #0f172a;
    line-height: 1.05;
    letter-spacing: 0.3px;
    padding-right: 6px;
    border-right: 1.5px solid #991b1b;
    flex-shrink: 0;
    white-space: nowrap;
  }
  .tl-items {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 4px;
    flex: 1;
    min-width: 0;
  }
  .tl-item {
    display: flex;
    flex-direction: column;
    line-height: 1.06;
    min-width: 0;
  }
  .tl-time {
    font-size: 8.2px;
    font-weight: 900;
    color: #991b1b;
  }
  .tl-lbl {
    font-size: 7.7px;
    font-weight: 600;
    color: #1e293b;
    white-space: nowrap;
  }

  /* 3 Hero Leads */
  .leads-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    border-bottom: 1.5px solid #14181f;
    padding-bottom: 5px;
  }
  .lead-card {
    display: flex;
    flex-direction: column;
    gap: 2.5px;
    min-width: 0;
  }
  .lead-art {
    width: 100%;
    height: 102px;
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
    width: 16px;
    height: 16px;
    border-radius: 50%;
    color: #fff;
    font-size: 9px;
    font-weight: 900;
    flex-shrink: 0;
  }
  .num-pill.sm { width: 14px; height: 14px; font-size: 8px; }
  .meta-place {
    font-size: 8.8px;
    font-weight: 800;
    letter-spacing: 0.25px;
    color: #475569;
    white-space: nowrap;
  }
  .ep-tag {
    margin-left: auto;
    font-size: 7.7px;
    font-weight: 900;
    padding: 1px 4px;
    border-radius: 2px;
    letter-spacing: 0.2px;
    flex-shrink: 0;
  }
  .ep-tag.sm { font-size: 7.4px; padding: 0.5px 3.5px; }
  .ep-tag.xs { font-size: 7.0px; padding: 0.5px 3px; margin-left: 3px; }
  .tag-confirmed { background: #1e3a5f; color: #ffffff; }
  .tag-official { background: #0f766e; color: #ffffff; }
  .tag-reported { background: #e2e8f0; color: #1e293b; border: 1px solid #94a3b8; }
  .tag-claim { background: #fef3c7; color: #92400e; border: 1px solid #d97706; }

  .lead-hl {
    font-family: 'C059', 'Nimbus Roman', 'DejaVu Serif', Georgia, serif;
    font-size: 18px;
    font-weight: 900;
    line-height: 1.07;
    color: #0f172a;
  }
  .lead-deck {
    font-size: 10.1px;
    line-height: 1.23;
    color: #1e293b;
  }
  .lead-foot {
    font-size: 8.5px;
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

  /* 2x5 Secondary Cards */
  .sec-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, auto);
    column-gap: 7px;
    row-gap: 5px;
    border-bottom: 1.5px solid #14181f;
    padding-bottom: 5px;
  }
  .sec-card {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }
  .sec-art {
    width: 100%;
    height: 50px;
    border: 1px solid #d5ccbd;
    overflow: hidden;
    background: #fff;
  }
  .sec-art svg { display: block; width: 100%; height: 100%; }
  .sec-meta {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 1px;
  }
  .sec-place {
    font-size: 8.3px;
    font-weight: 800;
    color: #475569;
    letter-spacing: 0.2px;
    white-space: nowrap;
  }
  .sec-hl {
    font-family: 'C059', 'Nimbus Roman', 'DejaVu Serif', Georgia, serif;
    font-size: 13.4px;
    font-weight: 900;
    line-height: 1.07;
    color: #0f172a;
  }
  .sec-sum {
    font-size: 9.1px;
    line-height: 1.17;
    color: #273242;
  }

  /* Bottom Map + 25 Briefs */
  .lower-section {
    display: grid;
    grid-template-columns: 262px 1fr;
    gap: 9px;
    flex: 1;
    min-height: 0;
  }
  .map-col {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .sec-title {
    font-size: 9.2px;
    font-weight: 900;
    letter-spacing: 0.35px;
    color: #0f172a;
    border-bottom: 1px solid #cbd5e1;
    padding-bottom: 1.5px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .sec-title span {
    font-size: 8.1px;
    font-weight: 600;
    color: #64748b;
    letter-spacing: 0;
  }
  .map-wrap {
    width: 262px;
    height: 134px;
  }
  .map-legend {
    font-size: 8.2px;
    line-height: 1.24;
    color: #334155;
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 2px;
  }
  .reg-key {
    display: flex;
    flex-wrap: wrap;
    gap: 3px 7px;
    padding-bottom: 3px;
    border-bottom: 1px solid #e4dccf;
  }
  .reg-key-item {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    font-size: 7.4px;
    font-weight: 700;
    color: #334155;
  }
  .rk-dot {
    width: 6.5px;
    height: 6.5px;
    border-radius: 50%;
    display: inline-block;
  }
  .legend-pills {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 3px;
    column-gap: 4px;
  }
  .legend-item {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    font-size: 8.0px;
    font-weight: 600;
    color: #1e293b;
  }

  .briefs-col {
    display: flex;
    flex-direction: column;
    gap: 2.5px;
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
    align-items: center;
    gap: 3.5px;
    font-size: 9.2px;
    line-height: 1.12;
    padding: 0.8px 0;
    border-bottom: 1px solid #ede6da;
    min-width: 0;
  }
  .brief-row:last-child { border-bottom: none; }
  .b-num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 14.5px;
    height: 13px;
    border-radius: 2px;
    color: #ffffff;
    font-size: 7.8px;
    font-weight: 800;
    flex-shrink: 0;
  }
  .b-body {
    flex: 1;
    min-width: 0;
    color: #1e293b;
    white-space: nowrap;
  }
  .b-body strong { color: #0f172a; font-weight: 800; }

  /* Date Check Footer */
  .footer-wrap {
    display: flex;
    flex-direction: column;
    gap: 2.5px;
    margin-top: auto;
  }
  .date-check {
    background: #fef6f4;
    border: 1px solid #d98276;
    border-left: 4px solid #991b1b;
    padding: 3.5px 7px;
    font-size: 8.8px;
    line-height: 1.24;
    color: #1f2937;
  }
  .dc-tag {
    display: inline-block;
    background: #991b1b;
    color: #ffffff;
    font-weight: 900;
    font-size: 8.2px;
    padding: 0.5px 4px;
    border-radius: 2px;
    margin-right: 4px;
    letter-spacing: 0.3px;
  }
  .dc-lbl { font-weight: 800; color: #7f1d1d; }
  .sources-foot {
    font-size: 7.9px;
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

    <div class="tl-strip">
      <div class="tl-head">THE DAY IN UTC</div>
      <div class="tl-items">${timelineHtml}</div>
    </div>

    <section class="leads-grid">${leadsHtml}</section>

    <section class="sec-grid">${secondariesHtml}</section>

    <section class="lower-section">
      <div class="map-col">
        <div class="sec-title">WHERE IT HAPPENED <span>1–13 = illustrated · dots = briefs</span></div>
        <div class="map-wrap">${mapSvg}</div>
        <div class="map-legend">
          <div class="reg-key">${regionKeyHtml}</div>
          <div class="legend-pills">
            <span class="legend-item"><span class="ep-tag xs tag-confirmed" style="margin:0;">C</span> Confirmed (2+ outlets)</span>
            <span class="legend-item"><span class="ep-tag xs tag-official" style="margin:0;">O</span> Official record</span>
            <span class="legend-item"><span class="ep-tag xs tag-reported" style="margin:0;">R</span> Wire/local report</span>
            <span class="legend-item"><span class="ep-tag xs tag-claim" style="margin:0;">CL</span> One side's claim</span>
          </div>
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
