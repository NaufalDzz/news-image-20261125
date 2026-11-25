// Verified world-news dataset for Wednesday 25 November 2026 (UTC).
// Every story happened or was first reported on 25 November 2026.

export const EDITION = {
  dayHeading: 'Wednesday 25 November 2026',
  kickerPrefix: 'THE WORLD IN ONE DAY',
  kickerSuffix: 'EVERY STORY DATED WEDNESDAY 25 NOVEMBER 2026',
  standfirst:
    "Pakistani astronaut docks at China's space station · AI doubts sink Asian chip stocks · US proposes Section 301 tariffs on 14 economies",
  sourcesLine:
    'Every story happened or was first reported Wed 25 Nov 2026 (UTC) · Sources: Reuters, AP, BBC, Al Jazeera, Xinhua, Yonhap, USTR, Ofgem, ABS, BEA, Daily Maverick, Kyiv Independent · All art & map original vectors.',
};

export const REGIONS = [
  { id: 'europe', label: 'EUROPE', color: '#2b547e', minW: 86 },
  { id: 'mideast', label: 'MIDDLE EAST', color: '#b45309', minW: 112 },
  { id: 'eastseasia', label: 'E & SE ASIA', color: '#1e6b52', minW: 102 },
  { id: 'africa', label: 'AFRICA', color: '#8f3f1b', minW: 82 },
  { id: 'namerica', label: 'N. AMERICA', color: '#6b3fa0', minW: 100 },
  { id: 'sasia', label: 'S. ASIA', color: '#0e7490', minW: 78 },
  { id: 'oceania', label: 'OCEANIA', color: '#256d85', minW: 86 },
  { id: 'latam', label: 'LATAM', color: '#3f7d20', minW: 72 },
  { id: 'global', label: 'GLOBAL', color: '#475569', minW: 76 },
];

export const KEY_NUMBERS = [
  { figure: '1ST', color: '#1b365d', line1: 'foreign astronaut', line2: 'aboard Tiangong' },
  { figure: '−6.2%', color: '#b91c1c', line1: 'Seoul Kospi close', line2: '(4,697.51)' },
  { figure: '14', color: '#1b365d', line1: 'economies in US', line2: 'tariff plan (to 35%)' },
  { figure: '+26%', color: '#b45309', line1: 'UK energy cap', line2: 'from Jan (£2,166)' },
  { figure: '4.9%', color: '#256d85', line1: 'Australia inflation,', line2: 'October CPI' },
  { figure: '+36%', color: '#1e6b52', line1: 'Bangladesh garment', line2: 'wage (Tk 17,000)' },
];

export const TIMELINE = [
  { time: '00:18', label: 'Shenzhou-24 lifts off' },
  { time: '00:30', label: 'Aus CPI hits 4.9%' },
  { time: '03:56', label: 'Docks at Tiangong' },
  { time: '05:30', label: 'Taiex closes −4.8%' },
  { time: '06:30', label: 'Kospi closes −6.2%' },
  { time: '07:00', label: 'Ofgem cap +26%' },
  { time: '13:30', label: 'US Q3 GDP 4.3%' },
  { time: '20:30', label: 'Dow >50.2k · Tech −1%' },
];

export const LEADS = [
  {
    num: 1,
    region: 'eastseasia',
    field: 'Space',
    place: 'JIUQUAN, CHINA',
    tag: 'OFFICIAL',
    headline: "Pakistani becomes first foreigner aboard China's space station",
    deck: 'Shenzhou-24 lifted off at 00:18 UTC (08:18 BJT) and docked at 03:56 UTC. Pakistan Air Force pilot Muhammad Zeeshan Ali, 40, joins Tang Hongbo & Wu Yi on Tiangong for 5–10 days.',
    why: 'First foreign astronaut on Tiangong.',
    source: 'CMSA, Xinhua',
    art: 'tiangong',
    map: { x: 196, y: 46 },
  },
  {
    num: 2,
    region: 'eastseasia',
    field: 'Markets',
    place: 'SEOUL · TAIPEI · TOKYO',
    tag: 'CONFIRMED',
    headline: 'AI doubts return: Asian chip stocks plunge, Kospi −6.2%',
    deck: 'Kospi sank 6.16% to 4,697.51, triggering a sell-sidecar. SK hynix fell 11.05%, Samsung 9.87%, Taiex 4.80%, Nikkei 2.78%, and SoftBank ~15% on AI spending fears.',
    why: 'Wipes out Tuesday’s Asian chip rally.',
    source: 'KRX, Yonhap',
    art: 'chiprout',
    map: { x: 222, y: 49 },
  },
  {
    num: 3,
    region: 'namerica',
    field: 'Trade',
    place: 'WASHINGTON',
    tag: 'OFFICIAL',
    headline: 'US proposes Section 301 tariffs on 14 economies',
    deck: 'USTR cites state-backed excess capacity: up to 35% on Vietnam, 25% India, 20% China & Singapore, 18% ASEAN peers, 15% cap on EU, Japan & Korea. Hearings Jan 2027.',
    why: 'Broadest US tariff plan since 2025 truces.',
    source: 'USTR, Reuters',
    art: 'tariffs',
    map: { x: 69, y: 49 },
  },
];

export const SECONDARIES = [
  {
    num: 4,
    region: 'mideast',
    field: 'War',
    place: 'HODEIDAH',
    tag: 'O',
    badge: 'PORT STRUCK',
    headline: 'Saudi-led coalition strikes Houthi-held Hodeidah port',
    summary: 'Civilians warned first; Saada & Amran hit. Houthis threaten Jeddah.',
    art: 'hodeidah',
    map: { x: 151, y: 71 },
  },
  {
    num: 5,
    region: 'mideast',
    field: 'Trade',
    place: 'HORMUZ',
    tag: 'CL',
    badge: '2 TANKERS',
    headline: 'Iran says mines set two tankers ablaze in Hormuz',
    summary: 'IRGC cites "unauthorised route" & radar off; no independent proof.',
    art: 'hormuz',
    map: { x: 168, y: 58 },
  },
  {
    num: 6,
    region: 'europe',
    field: 'War',
    place: 'SAMARA, RUSSIA',
    tag: 'R',
    badge: '2 REFINERIES',
    headline: 'Ukrainian drones set two Volga oil refineries ablaze',
    summary: 'Syzran & Kuibyshev plants struck overnight; Putin vows retaliation.',
    art: 'refineries',
    map: { x: 158, y: 31 },
  },
  {
    num: 7,
    region: 'europe',
    field: 'Energy',
    place: 'LONDON',
    tag: 'O',
    badge: '+26%',
    headline: 'UK energy price cap to jump 26% in January',
    summary: 'Ofgem typical bill climbs £1,723 → £2,166/yr on gas surge.',
    art: 'ofgem',
    map: { x: 120, y: 34 },
  },
  {
    num: 8,
    region: 'oceania',
    field: 'Diplomacy',
    place: 'CANBERRA',
    tag: 'O',
    badge: 'TREATY',
    headline: 'Solomon Islands & Australia sign security pact',
    summary: 'Australia named preferred defence partner; bars foreign bases.',
    art: 'solomons',
    map: { x: 243, y: 89 },
  },
  {
    num: 9,
    region: 'oceania',
    field: 'Economy',
    place: 'SYDNEY',
    tag: 'O',
    badge: '4.9% CPI',
    headline: 'Australian inflation jumps to 4.9% in October',
    summary: 'Up from 4.3% in Sept on housing, fuel & power; above RBA band.',
    art: 'auscpi',
    map: { x: 229, y: 109 },
  },
  {
    num: 10,
    region: 'sasia',
    field: 'Labour',
    place: 'DHAKA',
    tag: 'O',
    badge: 'TK 17,000',
    headline: 'Garment minimum wage rises 36% to 17,000 taka',
    summary: 'Wage board lifts Tk 12,500 floor (~$136/mo) from 1 Dec; clashes.',
    art: 'dhaka',
    map: { x: 192, y: 63 },
  },
  {
    num: 11,
    region: 'eastseasia',
    field: 'Disaster',
    place: 'BOGOR, JAVA',
    tag: 'R',
    badge: '9 DEAD · 17 TRAPPED',
    headline: 'Flood hits illegal gold pit: 9 dead, 17 trapped',
    summary: 'Swollen river fills 100m West Java shafts; narrow access slows aid.',
    art: 'bogor',
    map: { x: 207, y: 86 },
  },
  {
    num: 12,
    region: 'africa',
    field: 'Justice',
    place: 'CAPE TOWN',
    tag: 'O',
    badge: 'VOIDED',
    headline: "Court voids Ramaphosa 'Farmgate' panel report",
    summary: 'Full bench sets aside 2022 Phala Phala panel, lifting impeachment.',
    art: 'capetown',
    map: { x: 138, y: 112 },
  },
  {
    num: 13,
    region: 'latam',
    field: 'Security',
    place: 'CARTAGENA',
    tag: 'O',
    badge: 'ALL FREED',
    headline: 'Police storm supermarket, free all hostages',
    summary: 'End day-long Éxito siege after botched heist; 1 captor killed, 4 held.',
    art: 'cartagena',
    map: { x: 70, y: 74 },
  },
];

// Concise, complete single-line briefs (verified 25 Nov 2026 UTC; zero right-edge clipping)
export const BRIEFS = [
  // Europe (6 more -> 8 total)
  { num: 14, region: 'europe', field: 'War', place: 'Zaporizhzhia', text: 'Strikes kill 5, cut power in 5 regions; plant on diesel', tag: 'C', dot: { x: 146, y: 39 } },
  { num: 15, region: 'europe', field: 'Justice', place: 'London', text: 'Fairfield review: Met Police still racist & misogynistic', tag: 'O', dot: { x: 123, y: 38 } },
  { num: 16, region: 'europe', field: 'Diplomacy', place: 'Brussels', text: 'EU hosts Western Balkans summit on accession & growth', tag: 'O', dot: { x: 127, y: 37 } },
  { num: 17, region: 'europe', field: 'Transport', place: 'Paris', text: 'Surprise Eurostar wage strike cancels London rail links', tag: 'C', dot: { x: 125, y: 41 } },
  { num: 18, region: 'europe', field: 'Labour', place: 'Athens', text: '24-hour general strike halts ferries, transit & flights', tag: 'C', dot: { x: 141, y: 47 } },
  { num: 19, region: 'europe', field: 'War', place: 'Savasleyka', text: 'Ukraine claims strike hit 3 MiG-31s & 2 Su-34s at base', tag: 'CL', dot: { x: 152, y: 33 } },
  // Middle East (4 more -> 6 total)
  { num: 20, region: 'mideast', field: 'War', place: 'Gaza City', text: 'Strike in Shati kills Hamas security chief Abu al-Awf', tag: 'O', dot: { x: 147, y: 54 } },
  { num: 21, region: 'mideast', field: 'Justice', place: 'Jerusalem', text: 'Judges urge dropping Case 4000 bribery vs Netanyahu', tag: 'O', dot: { x: 149, y: 55 } },
  { num: 22, region: 'mideast', field: 'Politics', place: 'Jerusalem', text: 'Knesset advances bill for Oct 7 state inquiry panel', tag: 'O', dot: { x: 148, y: 57 } },
  { num: 23, region: 'mideast', field: 'War', place: 'Ras Tanura', text: 'Saudis down 4 Houthi drones (0 hurt); Houthis claim hit', tag: 'CL', dot: { x: 160, y: 59 } },
  // East & SE Asia (3 more -> 6 total)
  { num: 24, region: 'eastseasia', field: 'Tech', place: 'Kuala Lumpur', text: 'Regulator MCMC sues Google for RM600m over scams', tag: 'O', dot: { x: 202, y: 79 } },
  { num: 25, region: 'eastseasia', field: 'Tech', place: 'Hong Kong', text: 'URBTIX ticketing hack exposes data of ~1.3m users', tag: 'O', dot: { x: 213, y: 62 } },
  { num: 26, region: 'eastseasia', field: 'Diplomacy', place: 'Pyongyang', text: 'North Korea expels Swiss envoy Astier within 48 hours', tag: 'O', dot: { x: 220, y: 45 } },
  // South Asia (2 more -> 3 total)
  { num: 27, region: 'sasia', field: 'Justice', place: 'New Delhi', text: 'Supreme Court voids CBI/ED probe into Rahul Gandhi', tag: 'O', dot: { x: 182, y: 57 } },
  { num: 28, region: 'sasia', field: 'Disaster', place: 'Karachi', text: 'Building collapse in Baloch Colony: 3+ dead, 12+ hurt', tag: 'R', dot: { x: 174, y: 60 } },
  // Africa (5 more -> 6 total across Southern, East, West & Central Africa)
  { num: 29, region: 'africa', field: 'War', place: 'Ed Damazin', text: 'RSF drone swarm kills up to 19 in Sudan’s Blue Nile', tag: 'R', dot: { x: 148, y: 73 } },
  { num: 30, region: 'africa', field: 'Sport', place: 'Centurion', text: 'Mulder takes 7/31 after a ton; Proteas sweep Bangladesh', tag: 'C', dot: { x: 144, y: 105 } },
  { num: 31, region: 'africa', field: 'Health', place: 'Addis Ababa', text: 'Ethiopia & WHO launch polio drive for 11.3m children', tag: 'O', dot: { x: 152, y: 76 } },
  { num: 32, region: 'africa', field: 'War', place: 'Bunia', text: 'DR Congo CRP rebels halt advance after Uganda talks', tag: 'R', dot: { x: 145, y: 83 } },
  { num: 33, region: 'africa', field: 'Culture', place: 'Enugu', text: 'Nollywood legend Pete Edochie dies at 79 after cancer', tag: 'C', dot: { x: 129, y: 78 } },
  // North America (3 more -> 4 total)
  { num: 34, region: 'namerica', field: 'Economy', place: 'Washington', text: 'US Q3 GDP revised up to 4.3% (was 3.4%); claims 189k', tag: 'O', dot: { x: 71, y: 50 } },
  { num: 35, region: 'namerica', field: 'Markets', place: 'New York', text: 'Dow holds >50,200 (+0.4%) as Nasdaq dips ~1% in trade', tag: 'C', dot: { x: 74, y: 46 } },
  { num: 36, region: 'namerica', field: 'Environment', place: 'Middletown, IA', text: 'US Army detonates ~5t lead azide; EPA sees no spike', tag: 'O', dot: { x: 56, y: 46 } },
  // Latin America (1 more -> 2 total)
  { num: 37, region: 'latam', field: 'Politics', place: 'Brasília', text: "Congress passes Lula's R$50bn 2027 fiscal bill", tag: 'O', dot: { x: 89, y: 96 } },
  // Oceania (1 more -> 3 total)
  { num: 38, region: 'oceania', field: 'Rights', place: 'Canberra', text: 'Parliament delivers formal apology to LGBTQ+ troops', tag: 'O', dot: { x: 232, y: 111 } },
  // Global (1 more -> 1 total)
  { num: 39, region: 'global', field: 'Rights', place: 'UN · Global', text: '25 Nov day: UN reports 47,000 femicides in 2025 (5/hr)', tag: 'O', dot: null },
];

export const DATE_CHECK = {
  excludedEarlier:
    'Huawei 10/12 US conviction (Tue 24) · Shanghai chief Chen Jining probe (Tue 24) · Houthi strike on Riyadh PIF Tower (Tue 24) · CAS restores Senegal AFCON title (Tue 24) · CIA–ODNI breach first reported (Tue 24) · Miss Universe crowned in San Juan (Tue 24 local) · Nvidia Huang return (Mon 23)',
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
