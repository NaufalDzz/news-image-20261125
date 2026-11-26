// Pixel-exact 1024x1024 championship broadsheet template for Wednesday 25 November 2026.
// 50 verified stories · 10 regions · 21 fields · 13 illustrated cards (3 leads + 2x5 secondaries) + 37 crisp briefs + UTC bar + world map + Date Check.

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
  if (tag === 'CLAIM') return 'tag-claim';
  if (tag === 'REPORTED') return 'tag-reported';
  return 'tag-official';
}

export function buildHtml() {
  const stats = getStats();
  const regionColorMap = Object.fromEntries(REGIONS.map((r) => [r.id, r.color]));

  const regionBarHtml = REGIONS.map((r) => {
    const count = stats.regionCounts[r.id] ?? 0;
    return `<div class="reg-seg" style="flex:${count} 0 ${r.minW}px;background:${r.color};">${esc(r.label)} <span>${count}</span></div>`;
  }).join('');

  const fieldsHtml = stats.fieldsSorted
    .map(([name, count]) => `<span class="fld-item">${esc(name)} <b>${count}</b></span>`)
    .join('<span class="fld-sep">·</span>');

  const keyNumbersHtml = KEY_NUMBERS.map(
    (k) => `<div class="kn-item">
      <div class="kn-fig" style="color:${k.color};">${esc(k.figure)}</div>
      <div class="kn-desc"><div>${esc(k.line1)}</div><div>${esc(k.line2)}</div></div>
    </div>`
  ).join('');

  const timelineHtml = TIMELINE.map(
    (t) => `<span class="utc-item"><b>${esc(t.time)}</b> ${esc(t.label)}</span>`
  ).join('<span class="utc-dot">·</span>');

  const leadsHtml = LEADS.map(
    (s) => `<article class="lead-card">
      <div class="lead-art">
        ${renderLeadIllustration(s.art)}
        <span class="lead-num" style="background:${regionColorMap[s.region]};">${s.num}</span>
      </div>
      <div class="lead-meta">
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
      <div class="sec-art">${renderSecondaryIllustration(s.art, s.num, s.pill, regionColorMap[s.region])}</div>
      <div class="sec-meta">
        <span class="sec-place">${esc(s.place)} · ${esc(s.field.toUpperCase())}</span>
        <span class="sec-ep ${tagClass(s.tag)}">${esc(s.tag)}</span>
      </div>
      <h3 class="sec-hl">${esc(s.headline)}</h3>
      <p class="sec-sum">${esc(s.summary)}</p>
    </article>`
  ).join('');

  const leftBriefs = BRIEFS.slice(0, 19);
  const rightBriefs = BRIEFS.slice(19);

  const renderBriefList = (list) =>
    list
      .map(
        (b) => `<div class="brief-row">
          <span class="b-num" style="background:${regionColorMap[b.region]};">${b.num}</span>
          <span class="b-body"><strong>${esc(b.place)}</strong> ${esc(b.text)}${
          b.claim ? ' <span class="b-claim">CLAIM</span>' : ''
        }</span>
        </div>`
      )
      .join('');

  const legendHtml = REGIONS.map(
    (r) => `<span class="leg-item"><i style="background:${r.color};"></i>${esc(r.short)}</span>`
  ).join('');

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
    background: #fcfaf4;
    color: #111827;
    font-family: 'Noto Sans', 'Nimbus Sans', 'DejaVu Sans', sans-serif;
    font-variant-numeric: tabular-nums;
    -webkit-font-smoothing: antialiased;
  }
  .page {
    width: 1024px;
    height: 1024px;
    padding: 5px 12px 5px 12px;
    display: flex;
    flex-direction: column;
    gap: 3.5px;
  }

  /* Masthead */
  .kicker-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #0f172a;
    color: #f8fafc;
    font-size: 8.8px;
    font-weight: 800;
    letter-spacing: 0.35px;
    padding: 2px 8px;
  }
  .masthead {
    text-align: center;
    font-family: 'C059', 'Nimbus Roman', 'DejaVu Serif', Georgia, serif;
    font-size: 62px;
    font-weight: 900;
    line-height: 1.02;
    letter-spacing: -1.3px;
    color: #0f172a;
  }
  .standfirst {
    text-align: center;
    font-family: 'C059', 'Nimbus Roman', 'DejaVu Serif', Georgia, serif;
    font-style: italic;
    font-size: 13.0px;
    font-weight: 700;
    color: #991b1b;
    line-height: 1.12;
    white-space: nowrap;
  }

  /* Strip 1: 10-Region Proportional Bar + 21-Field Micro Line */
  .reg-bar {
    display: flex;
    height: 15.5px;
    gap: 1.5px;
    width: 100%;
  }
  .reg-seg {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5px;
    color: #ffffff;
    font-size: 7.8px;
    font-weight: 800;
    letter-spacing: 0.1px;
    white-space: nowrap;
    padding: 0 3px;
  }
  .reg-seg span { font-weight: 900; }

  .fields-line {
    display: flex;
    align-items: center;
    gap: 3.5px;
    font-size: 7.4px;
    color: #334155;
    white-space: nowrap;
    line-height: 1.1;
  }
  .fields-lbl {
    font-weight: 900;
    color: #0f172a;
    margin-right: 2px;
  }
  .fld-item b { font-weight: 800; color: #0f172a; }
  .fld-sep { color: #94a3b8; }

  /* Strip 2: 5 Giant Key Numbers + Compact UTC Bar */
  .kn-strip {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 6px;
    border-top: 1px solid #d6cec0;
    border-bottom: 1px solid #d6cec0;
    padding: 2.5px 0;
  }
  .kn-item {
    display: flex;
    align-items: center;
    gap: 6px;
    border-right: 1px solid #e2dacb;
    padding-right: 5px;
    min-width: 0;
  }
  .kn-item:last-child { border-right: none; padding-right: 0; }
  .kn-fig {
    font-family: 'C059', 'Nimbus Roman', 'DejaVu Serif', Georgia, serif;
    font-size: 22.5px;
    font-weight: 900;
    line-height: 0.96;
    flex-shrink: 0;
  }
  .kn-desc {
    font-size: 9.0px;
    font-weight: 700;
    line-height: 1.12;
    color: #334155;
    min-width: 0;
  }

  .utc-strip {
    display: flex;
    align-items: center;
    gap: 5px;
    background: #17253a;
    color: #e2e8f0;
    font-size: 7.9px;
    padding: 2px 7px;
    white-space: nowrap;
  }
  .utc-lbl {
    font-weight: 900;
    color: #fde68a;
    letter-spacing: 0.25px;
    margin-right: 2px;
  }
  .utc-item b { color: #ffffff; font-weight: 900; }
  .utc-dot { color: #64748b; }

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
    gap: 2px;
    min-width: 0;
  }
  .lead-art {
    position: relative;
    width: 100%;
    height: 100px;
    border: 1px solid #d5ccbd;
    overflow: hidden;
    background: #fff;
  }
  .lead-art svg { display: block; width: 100%; height: 100%; }
  .lead-num {
    position: absolute;
    left: 6px;
    bottom: 6px;
    width: 19px;
    height: 19px;
    border-radius: 50%;
    border: 1.4px solid #ffffff;
    color: #ffffff;
    font-size: 10.5px;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lead-meta {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 1px;
  }
  .meta-place {
    font-size: 8.6px;
    font-weight: 800;
    letter-spacing: 0.2px;
    color: #991b1b;
    white-space: nowrap;
  }
  .ep-tag {
    margin-left: auto;
    font-size: 7.4px;
    font-weight: 900;
    padding: 0.5px 4px;
    border-radius: 2px;
    letter-spacing: 0.2px;
    flex-shrink: 0;
  }
  .tag-official { background: #1e3a5f; color: #ffffff; }
  .tag-reported { background: #f1f5f9; color: #1e293b; border: 1px solid #94a3b8; }
  .tag-claim { background: #fef3c7; color: #92400e; border: 1px solid #d97706; }

  .lead-hl {
    font-family: 'C059', 'Nimbus Roman', 'DejaVu Serif', Georgia, serif;
    font-size: 18.6px;
    font-weight: 900;
    line-height: 1.05;
    color: #0f172a;
  }
  .lead-deck {
    font-size: 9.7px;
    line-height: 1.2;
    color: #1e293b;
  }
  .lead-foot {
    margin-top: auto;
    font-size: 8.3px;
    line-height: 1.12;
    color: #334155;
    border-top: 1px solid #e4dccf;
    padding-top: 2px;
    white-space: nowrap;
  }
  .why-lbl { font-weight: 900; color: #991b1b; }
  .src-inline { color: #64748b; font-style: italic; }

  /* 2x5 Secondary Illustrated Cards (10 cards = sweet spot for 300px readability + breadth) */
  .sec-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, auto);
    column-gap: 8px;
    row-gap: 4.5px;
    border-bottom: 1.5px solid #14181f;
    padding-bottom: 5px;
  }
  .sec-card {
    display: flex;
    flex-direction: column;
    gap: 1.5px;
    min-width: 0;
  }
  .sec-art {
    width: 100%;
    height: 51px;
    border: 1px solid #d5ccbd;
    overflow: hidden;
    background: #fff;
  }
  .sec-art svg { display: block; width: 100%; height: 100%; }
  .sec-meta {
    display: flex;
    align-items: center;
    gap: 3px;
    margin-top: 0.5px;
  }
  .sec-place {
    font-size: 7.2px;
    font-weight: 800;
    color: #1e40af;
    letter-spacing: 0.1px;
    white-space: nowrap;
  }
  .sec-ep {
    margin-left: auto;
    font-size: 6.4px;
    font-weight: 900;
    padding: 0 3px;
    border-radius: 1.5px;
    line-height: 1.25;
    flex-shrink: 0;
  }
  .sec-hl {
    font-family: 'C059', 'Nimbus Roman', 'DejaVu Serif', Georgia, serif;
    font-size: 13.4px;
    font-weight: 900;
    line-height: 1.05;
    color: #0f172a;
  }
  .sec-sum {
    font-size: 8.6px;
    line-height: 1.14;
    color: #334155;
  }

  /* Lower Section: Clean Map + 10-Region Legend (left) | 37 Crisp Briefs (right, 19+18) */
  .lower-section {
    display: grid;
    grid-template-columns: 256px 1fr;
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
    font-size: 9.0px;
    font-weight: 900;
    letter-spacing: 0.3px;
    color: #0f172a;
    border-bottom: 1.2px solid #cbd5e1;
    padding-bottom: 1.5px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .sec-title span {
    font-size: 7.8px;
    font-weight: 600;
    color: #64748b;
    letter-spacing: 0;
  }
  .map-wrap {
    width: 256px;
    height: 158px;
  }
  .map-wrap svg { display: block; width: 100%; height: 100%; }
  .map-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 3.5px 7px;
    font-size: 8.2px;
    font-weight: 700;
    color: #334155;
    line-height: 1.3;
    padding-top: 4px;
  }
  .leg-item {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    white-space: nowrap;
  }
  .leg-item i {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
  }
  .ep-legend {
    display: flex;
    align-items: center;
    gap: 5px;
    padding-top: 3px;
    border-top: 1px solid #dfd6c7;
    font-size: 7.7px;
    color: #334155;
  }
  .ep-pill {
    font-size: 7.1px;
    font-weight: 900;
    padding: 0.5px 4px;
    border-radius: 2px;
  }
  .map-note {
    margin-top: auto;
    font-size: 7.9px;
    color: #334155;
    line-height: 1.24;
    background: #f3ede2;
    border: 1px solid #dfd6c7;
    padding: 4px 6px;
  }
  .map-note b { color: #0f172a; }

  .briefs-col {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }
  .briefs-two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 8px;
    flex: 1;
    min-height: 0;
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
    font-size: 8.9px;
    line-height: 1.13;
    min-width: 0;
  }
  .b-num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 14.5px;
    height: 13px;
    border-radius: 6.5px;
    color: #ffffff;
    font-size: 7.6px;
    font-weight: 900;
    flex-shrink: 0;
  }
  .b-body {
    flex: 1;
    min-width: 0;
    color: #1e293b;
    white-space: nowrap;
  }
  .b-body strong { color: #0f172a; font-weight: 800; margin-right: 2px; }
  .b-claim {
    display: inline-block;
    background: #fef2f2;
    color: #991b1b;
    border: 1px solid #dc2626;
    font-size: 6.7px;
    font-weight: 900;
    padding: 0 2.5px;
    border-radius: 2px;
    vertical-align: middle;
  }

  /* Date Check Footer */
  .footer-wrap {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-top: auto;
  }
  .date-check {
    background: #fef5f3;
    border: 1px solid #d98276;
    border-left: 4px solid #991b1b;
    padding: 3px 7px;
    font-size: 8.3px;
    line-height: 1.22;
    color: #1f2937;
  }
  .dc-tag {
    display: inline-block;
    background: #991b1b;
    color: #ffffff;
    font-weight: 900;
    font-size: 7.8px;
    padding: 0.5px 4px;
    border-radius: 2px;
    margin-right: 4px;
    letter-spacing: 0.25px;
  }
  .dc-lbl { font-weight: 800; color: #7f1d1d; }
  .sources-foot {
    font-size: 7.4px;
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
        <span>${esc(EDITION.kickerPrefix)}</span>
        <span>${stats.totalStories} STORIES · ${stats.totalRegions} REGIONS · ${stats.totalFields} FIELDS · ${esc(EDITION.kickerSuffix)}</span>
      </div>
      <h1 class="masthead">${esc(EDITION.dayHeading)}</h1>
      <div class="standfirst">${esc(EDITION.standfirst)}</div>
    </header>

    <div class="reg-bar">${regionBarHtml}</div>
    <div class="fields-line"><span class="fields-lbl">${stats.totalFields} FIELDS</span>${fieldsHtml}</div>
    <div class="kn-strip">${keyNumbersHtml}</div>
    <div class="utc-strip"><span class="utc-lbl">THE DAY IN UTC</span>${timelineHtml}</div>

    <section class="leads-grid">${leadsHtml}</section>

    <section class="sec-grid">${secondariesHtml}</section>

    <section class="lower-section">
      <div class="map-col">
        <div class="sec-title">WHERE IT HAPPENED <span>1–13 = pictured · dots = briefs</span></div>
        <div class="map-wrap">${mapSvg}</div>
        <div class="map-legend">${legendHtml}</div>
        <div class="ep-legend">
          <span class="ep-pill tag-official">OFFICIAL</span>
          <span class="ep-pill tag-reported">REPORTED</span>
          <span class="ep-pill b-claim">CLAIM</span>
          <span>source certainty</span>
        </div>
        <div class="map-note"><b>One-day scope:</b> Every one of the ${stats.totalStories} stories happened or was first reported on Wed 25 Nov 2026 UTC across ${stats.totalRegions} regions &amp; ${stats.totalFields} fields.</div>
      </div>
      <div class="briefs-col">
        <div class="sec-title">ALSO ON WEDNESDAY 25 NOVEMBER — ${BRIEFS.length} MORE STORIES <span>all ${stats.totalRegions} regions · ${stats.totalFields} fields</span></div>
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
