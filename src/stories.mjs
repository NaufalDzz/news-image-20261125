// Verified world-news dataset for Wednesday 25 November 2026 (UTC).
// Every story happened or was first reported on 25 November 2026.

export const EDITION = {
  dayHeading: 'Wednesday 25 November 2026',
  kickerPrefix: 'THE WORLD IN ONE DAY',
  kickerSuffix: 'ALL STORIES FIRST REPORTED WEDNESDAY 25 NOVEMBER 2026',
  standfirst:
    "Pakistani astronaut docks at China's space station · AI doubts sink Asian chip stocks · US proposes Section 301 tariffs on 14 economies",
  sourcesLine:
    'All 35 stories happened or were first reported Wed 25 Nov 2026 (UTC) · Sources: Reuters, AP, BBC, Guardian, Al Jazeera, Xinhua, Yonhap, USTR, Ofgem, ABS, BEA · Original vector art & map.',
};

export const REGIONS = [
  { id: 'europe', label: 'EUROPE', color: '#244c75', minW: 84 },
  { id: 'eastseasia', label: 'E & SE ASIA', color: '#1b634b', minW: 102 },
  { id: 'mideast', label: 'MIDDLE EAST', color: '#b45309', minW: 112 },
  { id: 'africa', label: 'AFRICA', color: '#8f3f1b', minW: 80 },
  { id: 'namerica', label: 'N. AMERICA', color: '#613996', minW: 100 },
  { id: 'sasia', label: 'S. ASIA', color: '#0e7490', minW: 78 },
  { id: 'oceania', label: 'OCEANIA', color: '#256d85', minW: 84 },
  { id: 'latam', label: 'LATAM', color: '#3b731d', minW: 72 },
  { id: 'global', label: 'GLOBAL', color: '#475569', minW: 76 },
];

export const KEY_NUMBERS = [
  { figure: '1ST', color: '#1b365d', line1: 'foreign astronaut', line2: 'aboard Tiangong' },
  { figure: '−6.2%', color: '#b91c1c', line1: 'Kospi close on', line2: 'Asian AI chip rout' },
  { figure: '35%', color: '#1b365d', line1: 'top US tariff plan', line2: '(14 economies)' },
  { figure: '+26%', color: '#b45309', line1: 'UK energy cap', line2: 'from Jan (£2,166)' },
  { figure: '31+', color: '#991b1b', line1: 'killed in Cairo', line2: 'fuel tanker blaze' },
];

export const TIMELINE = [
  { time: '00:18', label: 'Shenzhou-24 lifts off' },
  { time: '00:30', label: 'Aus CPI hits 4.9%' },
  { time: '03:56', label: 'Docks at Tiangong' },
  { time: '05:30', label: 'Taiex closes −4.8%' },
  { time: '06:30', label: 'Kospi closes −6.2%' },
  { time: '07:00', label: 'Ofgem cap +26%' },
  { time: '13:30', label: 'US Q3 GDP 4.3%' },
  { time: '20:30', label: 'Dow >50.2k (+0.4%)' },
];

export const LEADS = [
  {
    num: 1,
    region: 'eastseasia',
    field: 'Space',
    place: 'JIUQUAN, CHINA',
    tag: 'OFFICIAL',
    headline: "Pakistan's first astronaut docks at Tiangong station",
    deck: 'Shenzhou-24 lifted off at 00:18 UTC and docked at 03:56 UTC. PAF pilot Muhammad Zeeshan Ali, 40, is the first foreigner aboard China’s station.',
    why: 'First foreign astronaut on Tiangong.',
    source: 'CMSA, Xinhua',
    art: 'tiangong',
    map: { x: 196, y: 42 },
  },
  {
    num: 2,
    region: 'eastseasia',
    field: 'Markets',
    place: 'SEOUL · TAIPEI · TOKYO',
    tag: 'CONFIRMED',
    headline: 'AI doubts sink Asian chip stocks: Kospi plunges 6.2%',
    deck: 'Kospi closed down 6.16% at 4,697.51, triggering a sell-sidecar. SK hynix sank 11.1%, Samsung 9.9%, Taiex 4.8%, Nikkei 2.8% & SoftBank ~15% on AI spending fears.',
    why: 'Wipes out Tuesday’s Asian chip rally.',
    source: 'KRX, Yonhap',
    art: 'chiprout',
    map: { x: 222, y: 47 },
  },
  {
    num: 3,
    region: 'namerica',
    field: 'Trade',
    place: 'WASHINGTON',
    tag: 'OFFICIAL',
    headline: 'US proposes Section 301 tariffs on 14 economies',
    deck: 'USTR cites state-backed excess capacity: up to 35% Vietnam, 25% India, 20% China & Singapore, 15% cap EU, Japan & Korea. Hearings Jan 2027.',
    why: 'Broadest US tariff plan since 2025 truces.',
    source: 'USTR, Reuters',
    art: 'tariffs',
    map: { x: 68, y: 46 },
  },
];

export const SECONDARIES = [
  {
    num: 4,
    region: 'africa',
    field: 'Disaster',
    place: 'CAIRO, EGYPT',
    tag: 'OFFICIAL',
    headline: 'Fuel tanker fire kills at least 31 on Cairo Ring Road',
    summary: 'Al-Warraq highway blaze injures 21 and chars 24+ vehicles; DNA ID checks begin.',
    art: 'cairo',
    map: { x: 139, y: 60 },
  },
  {
    num: 5,
    region: 'mideast',
    field: 'War',
    place: 'HODEIDAH, YEMEN',
    tag: 'OFFICIAL',
    headline: 'Saudi-led coalition strikes Houthi-held Hodeidah port',
    summary: 'Civilians warned first; Saada & Amran also hit as Houthis threaten Jeddah.',
    art: 'hodeidah',
    map: { x: 161, y: 71 },
  },
  {
    num: 6,
    region: 'europe',
    field: 'Energy',
    place: 'LONDON',
    tag: 'OFFICIAL',
    headline: 'UK energy price cap to rise 26% to £2,166 in January',
    summary: 'Ofgem lifts typical dual-fuel bill from £1,723/yr after wholesale gas surge.',
    art: 'ofgem',
    map: { x: 118, y: 32 },
  },
  {
    num: 7,
    region: 'eastseasia',
    field: 'Disaster',
    place: 'BOGOR, INDONESIA',
    tag: 'REPORTED',
    headline: 'Flooded Java gold mine leaves 9 dead, 17 trapped',
    summary: 'Swollen river floods 100m West Java shafts; narrow access slows rescue teams.',
    art: 'bogor',
    map: { x: 208, y: 84 },
  },
  {
    num: 8,
    region: 'mideast',
    field: 'War',
    place: 'GAZA CITY',
    tag: 'OFFICIAL',
    headline: 'Israeli strike kills Hamas security chief in Shati camp',
    summary: 'Pre-dawn strike kills Mohammed Abu al-Awf and family; IDF confirms target.',
    art: 'gaza',
    map: { x: 154, y: 49 },
  },
  {
    num: 9,
    region: 'oceania',
    field: 'Diplomacy',
    place: 'CANBERRA',
    tag: 'OFFICIAL',
    headline: 'Solomon Islands & Australia sign landmark security pact',
    summary: 'Treaty names Australia preferred defence partner and bars foreign bases.',
    art: 'solomons',
    map: { x: 244, y: 87 },
  },
  {
    num: 10,
    region: 'sasia',
    field: 'Labour',
    place: 'DHAKA',
    tag: 'OFFICIAL',
    headline: 'Bangladesh garment wage rises 36% to 17,000 taka',
    summary: 'Wage board lifts Tk 12,500 floor (~$136/mo) from 1 Dec after factory protests.',
    art: 'dhaka',
    map: { x: 191, y: 62 },
  },
  {
    num: 11,
    region: 'europe',
    field: 'War',
    place: 'ZAPORIZHZHIA',
    tag: 'CONFIRMED',
    headline: 'Russian strikes kill 5, cut power in 5 Ukraine regions',
    summary: 'Barrage forces nuclear plant onto diesel backup as Kyiv targets oil sites.',
    art: 'ukraine',
    map: { x: 145, y: 31 },
  },
];

// 24 crisp, OCR-safe single-line briefs (12 + 12) covering all 9 regions & verified 25 Nov 2026 UTC.
export const BRIEFS = [
  // Left column (12) — Europe (5), Middle East (3), East & SE Asia (3), South Asia (1)
  { num: 12, region: 'europe', field: 'War', place: 'Samara', text: 'Ukrainian drones set two Volga refineries ablaze', tag: 'R', dot: { x: 155, y: 29 } },
  { num: 13, region: 'europe', field: 'Justice', place: 'London', text: 'Fairfield review finds Met Police still institutionally racist', tag: 'O', dot: { x: 115, y: 35 } },
  { num: 14, region: 'europe', field: 'Diplomacy', place: 'Brussels', text: 'EU hosts Western Balkans summit on accession & aid', tag: 'O', dot: { x: 121, y: 34 } },
  { num: 15, region: 'europe', field: 'Transport', place: 'Paris', text: 'Surprise Eurostar wage strike halts London rail links', tag: 'C', dot: { x: 119, y: 38 } },
  { num: 16, region: 'europe', field: 'Labour', place: 'Athens', text: '24-hour general strike grounds ferries, transit & flights', tag: 'C', dot: { x: 134, y: 44 } },
  { num: 17, region: 'mideast', field: 'Trade', place: 'Hormuz', text: 'Iran says mines hit two tankers (unverified)', tag: 'CL', dot: { x: 160, y: 54 } },
  { num: 18, region: 'mideast', field: 'Justice', place: 'Jerusalem', text: 'Judges urge dropping Case 4000 vs Netanyahu', tag: 'O', dot: { x: 143, y: 51 } },
  { num: 19, region: 'mideast', field: 'War', place: 'Ras Tanura', text: 'Saudis down 4 Houthi drones; Houthis claim hit', tag: 'CL', dot: { x: 153, y: 55 } },
  { num: 20, region: 'eastseasia', field: 'Tech', place: 'Kuala Lumpur', text: 'MCMC sues Google for RM600m over scams', tag: 'O', dot: { x: 192, y: 72 } },
  { num: 21, region: 'eastseasia', field: 'Tech', place: 'Hong Kong', text: 'URBTIX ticketing hack exposes data of 1.3m users', tag: 'O', dot: { x: 203, y: 57 } },
  { num: 22, region: 'eastseasia', field: 'Diplomacy', place: 'Pyongyang', text: 'North Korea expels Swiss envoy within 48 hours', tag: 'O', dot: { x: 208, y: 41 } },
  { num: 23, region: 'sasia', field: 'Justice', place: 'New Delhi', text: 'Supreme Court voids Rahul Gandhi CBI/ED probe', tag: 'O', dot: { x: 173, y: 53 } },

  // Right column (12) — Africa (4), N. America (3), LatAm (2), Oceania (1), Global (2)
  { num: 24, region: 'africa', field: 'Justice', place: 'Cape Town', text: "Court voids Ramaphosa 'Farmgate' panel report", tag: 'O', dot: { x: 132, y: 103 } },
  { num: 25, region: 'africa', field: 'War', place: 'Ed Damazin', text: 'RSF drone strike kills up to 19 in Sudan Blue Nile', tag: 'R', dot: { x: 141, y: 68 } },
  { num: 26, region: 'africa', field: 'Health', place: 'Addis Ababa', text: 'Ethiopia & WHO launch 11.3m-child polio drive', tag: 'O', dot: { x: 145, y: 72 } },
  { num: 27, region: 'africa', field: 'War', place: 'Bunia', text: 'DR Congo CRP rebels halt advance after Uganda talks', tag: 'R', dot: { x: 138, y: 78 } },
  { num: 28, region: 'namerica', field: 'Economy', place: 'Washington', text: 'US Q3 GDP revised to 4.3% (was 3.4%); 189k claims', tag: 'O', dot: { x: 68, y: 47 } },
  { num: 29, region: 'namerica', field: 'Markets', place: 'New York', text: 'Dow tops 50,200 (+0.4%) as Nasdaq dips 1%', tag: 'C', dot: { x: 71, y: 43 } },
  { num: 30, region: 'namerica', field: 'Environment', place: 'Iowa, US', text: 'Army safely detonates 5t lead azide; EPA sees no spike', tag: 'O', dot: { x: 54, y: 43 } },
  { num: 31, region: 'latam', field: 'Security', place: 'Cartagena', text: 'Police storm Exito store, free all hostages', tag: 'O', dot: { x: 67, y: 68 } },
  { num: 32, region: 'latam', field: 'Politics', place: 'Brasilia', text: "Congress passes Lula's R$50bn 2027 fiscal package", tag: 'O', dot: { x: 85, y: 89 } },
  { num: 33, region: 'oceania', field: 'Economy', place: 'Sydney', text: 'Australian inflation jumps to 4.9% in Oct (was 4.3%)', tag: 'O', dot: { x: 219, y: 100 } },
  { num: 34, region: 'global', field: 'Climate', place: 'Global', text: 'Earth tops 2°C above pre-industrial for 6th straight day', tag: 'C', dot: null },
  { num: 35, region: 'global', field: 'Rights', place: 'UN · Global', text: '47,000 women killed by partners or kin in 2025', tag: 'O', dot: null },
];

export const DATE_CHECK = {
  excludedEarlier:
    'Huawei 10/12 US conviction (Tue 24) · Shanghai chief Chen Jining probe (Tue 24) · Riyadh PIF Tower strike (Tue 24) · CAS Senegal AFCON ruling (Tue 24) · CIA-ODNI breach (Tue 24) · Miss Universe (Tue 24) · Nvidia Huang return (Mon 23)',
  notYet:
    'US Thanksgiving (Thu 26) · Bundestag 2027 budget vote (Fri 27) · Bangladesh wage starts (1 Dec) · UK energy cap rise (1 Jan) · USTR tariff hearings (25 Jan 2027)',
  forbiddenTokens: [
    'huawei',
    'chen jining',
    'pif tower',
    'riyadh',
    'afcon',
    'senegal',
    'cia',
    'odni',
    'miss universe',
    'nvidia',
    'jensen huang',
    'femicide',
    'edochie',
  ],
};

export function getAllStories() {
  return [...LEADS, ...SECONDARIES, ...BRIEFS];
}

export function getStats() {
  const all = getAllStories();
  const regionCounts = Object.fromEntries(REGIONS.map((r) => [r.id, 0]));
  const fields = new Set();
  for (const s of all) {
    regionCounts[s.region] = (regionCounts[s.region] ?? 0) + 1;
    fields.add(s.field);
  }
  return {
    totalStories: all.length,
    totalRegions: REGIONS.filter((r) => regionCounts[r.id] > 0).length,
    totalFields: fields.size,
    regionCounts,
    fields: [...fields],
  };
}
