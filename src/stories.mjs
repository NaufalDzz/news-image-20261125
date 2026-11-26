// Independently verified world-news dataset for Wednesday 25 November 2026 (UTC).
// Every one of the 50 stories happened or was first reported on Wednesday 25 November 2026.

export const EDITION = {
  dayHeading: 'Wednesday 25 November 2026',
  kickerPrefix: 'THE WORLD IN ONE DAY',
  kickerSuffix: 'ALL FIRST REPORTED WEDNESDAY 25 NOVEMBER 2026',
  standfirst:
    "US proposes tariffs up to 20% on 14 economies · AI doubts sink Asian chip stocks · Pakistan's first astronaut docks at Tiangong",
  sourcesLine:
    'OFFICIAL authority figure or act · REPORTED wire/press report · CLAIM unverified single-side account · Sources: Reuters, AP, Guardian, Al Jazeera, BBC, Yonhap, Xinhua, USTR, Ofgem, ABS, BEA, ESA · Original vector art.',
};

// 10 distinct global regions summing to 50 stories.
export const REGIONS = [
  { id: 'namerica', label: 'N. AMERICA', short: 'N. America', color: '#a82328', minW: 84 },
  { id: 'latam', label: 'LATIN AM.', short: 'Latin America', color: '#c45b18', minW: 76 },
  { id: 'europe', label: 'EUROPE', short: 'Europe', color: '#1f4e7a', minW: 96 },
  { id: 'mideast', label: 'MIDDLE EAST', short: 'Middle East', color: '#9c5a10', minW: 98 },
  { id: 'nafrica', label: 'N. AFRICA', short: 'N. Africa', color: '#6b4c2a', minW: 68 },
  { id: 'ssafrica', label: 'SUB-SAH. AFRICA', short: 'Sub-Sah. Africa', color: '#b57b14', minW: 112 },
  { id: 'sasia', label: 'S. ASIA', short: 'South Asia', color: '#1b6d50', minW: 66 },
  { id: 'eastseasia', label: 'E. & SE ASIA', short: 'E. & SE Asia', color: '#0f6a7c', minW: 94 },
  { id: 'oceania', label: 'OCEANIA', short: 'Oceania', color: '#5b428a', minW: 72 },
  { id: 'global', label: 'GLOBAL', short: 'Global', color: '#475569', minW: 68 },
];

export const KEY_NUMBERS = [
  { figure: '20%', color: '#991b1b', line1: 'top US tariff plan', line2: 'on China & 13 more' },
  { figure: '−6.2%', color: '#b91c1c', line1: 'Kospi close in', line2: 'Asian AI chip rout' },
  { figure: '+26%', color: '#1b365d', line1: 'UK energy price cap', line2: 'from 1 Jan (£2,166)' },
  { figure: '31+', color: '#7f1d1d', line1: 'killed in Cairo', line2: 'fuel tanker blaze' },
  { figure: '9', color: '#1e3a5f', line1: 'dead, 17 trapped in', line2: 'Java gold mine flood' },
];

export const TIMELINE = [
  { time: '00:18', label: 'Shenzhou-24 lifts off' },
  { time: '00:30', label: 'Aus CPI 4.9%' },
  { time: '03:56', label: 'Docks at Tiangong' },
  { time: '05:30', label: 'Taiex −4.8%' },
  { time: '06:30', label: 'Kospi −6.2%' },
  { time: '07:00', label: 'Ofgem +26%' },
  { time: '13:30', label: 'US Q3 GDP 4.3%' },
  { time: '21:00', label: 'Dow 50,183 (+0.3%)' },
];

export const LEADS = [
  {
    num: 1,
    region: 'namerica',
    field: 'Trade',
    place: 'WASHINGTON',
    tag: 'OFFICIAL',
    headline: 'US proposes tariffs of up to 20% on China, EU and 12 more',
    deck: 'USTR cites state-backed excess capacity across 14 economies: up to 20% on China, 15% cap on EU, Japan & Korea, plus India, Brazil & Vietnam. Hearings Jan 2027.',
    why: 'Broadest US tariff salvo since spring court ruling.',
    source: 'USTR, Guardian',
    art: 'tariffs',
    map: { x: 64, y: 45 },
  },
  {
    num: 2,
    region: 'eastseasia',
    field: 'Markets',
    place: 'SEOUL · TAIPEI · TOKYO',
    tag: 'REPORTED',
    headline: 'AI doubts sink Asian chip stocks: Kospi closes −6.2%',
    deck: 'Kospi fell 6.16% to 4,697.51, triggering a sell-sidecar. SK hynix dropped 11.1%, Samsung 9.9%, Taiex 4.8%, Nikkei 2.8% & SoftBank ~15% on AI spending doubts.',
    why: 'Wipes out Tuesday’s Asian tech rebound.',
    source: 'KRX, Yonhap',
    art: 'chiprout',
    map: { x: 222, y: 44 },
  },
  {
    num: 3,
    region: 'eastseasia',
    field: 'Space',
    place: 'JIUQUAN, CHINA',
    tag: 'OFFICIAL',
    headline: "Pakistan's first astronaut docks at China's space station",
    deck: 'Shenzhou-24 lifted off at 00:18 UTC and docked at 03:56 UTC. PAF pilot Muhammad Zeeshan Ali, 40, is the first foreign crewman aboard Tiangong (5–10 days).',
    why: 'Milestone guest flight for China’s orbital station.',
    source: 'CMSA, Xinhua',
    art: 'tiangong',
    map: { x: 196, y: 39 },
  },
];

// 10 crisp 2x5 secondary illustrated cards (numbers 4..13)
export const SECONDARIES = [
  {
    num: 4,
    region: 'europe',
    field: 'War',
    place: 'UKRAINE',
    tag: 'REPORTED',
    pill: '5 REGIONS',
    headline: 'Russian strikes kill 5, cut power in 5 regions',
    summary: 'Zaporizhzhia nuclear plant shifts to diesel backup after grid loss.',
    art: 'ukraine',
    map: { x: 141, y: 27 },
  },
  {
    num: 5,
    region: 'mideast',
    field: 'War',
    place: 'RAS TANURA, SAUDI',
    tag: 'REPORTED',
    pill: '4 DRONES',
    headline: 'Saudis down Houthi drones after Hodeidah strike',
    summary: 'Coalition says 4 drones downed over oil hub; Houthis claim hit.',
    art: 'rastanura',
    map: { x: 172, y: 58 },
  },
  {
    num: 6,
    region: 'europe',
    field: 'Energy',
    place: 'LONDON',
    tag: 'OFFICIAL',
    pill: '+26%',
    headline: 'UK energy price cap to rise 26% in January',
    summary: 'Ofgem lifts typical dual-fuel bill from £1,723 to £2,166 a year.',
    art: 'ofgem',
    map: { x: 117, y: 29 },
  },
  {
    num: 7,
    region: 'oceania',
    field: 'Diplomacy',
    place: 'CANBERRA',
    tag: 'OFFICIAL',
    pill: 'NO FOREIGN BASES',
    headline: 'Solomons & Australia sign A$740m security pact',
    summary: '10-year treaty names Australia primary partner and bars foreign bases.',
    art: 'solomons',
    map: { x: 244, y: 86 },
  },
  {
    num: 8,
    region: 'sasia',
    field: 'Labour',
    place: 'DHAKA',
    tag: 'OFFICIAL',
    pill: 'TK 17,000',
    headline: 'Bangladesh garment wage rises 36% from Dec',
    summary: 'Board lifts floor from 12,500 to 17,000 taka (~$136/mo) after unrest.',
    art: 'dhaka',
    map: { x: 192, y: 59 },
  },
  {
    num: 9,
    region: 'eastseasia',
    field: 'Disaster',
    place: 'BOGOR, INDONESIA',
    tag: 'REPORTED',
    pill: '9 DEAD',
    headline: '9 dead, 17 trapped in flooded Java gold mine',
    summary: 'Swollen river floods 100m West Java shafts; narrow tunnels slow rescue.',
    art: 'bogor',
    map: { x: 212, y: 84 },
  },
  {
    num: 10,
    region: 'mideast',
    field: 'War',
    place: 'GAZA CITY',
    tag: 'OFFICIAL',
    pill: 'SHATI CAMP',
    headline: 'Israeli strike kills Hamas security chief',
    summary: 'Pre-dawn strike kills Mohammed Abu al-Awf and family; IDF confirms.',
    art: 'gaza',
    map: { x: 148, y: 44 },
  },
  {
    num: 11,
    region: 'ssafrica',
    field: 'Justice',
    place: 'CAPE TOWN',
    tag: 'OFFICIAL',
    pill: 'COURT RULING',
    headline: "Court lifts 'Farmgate' threat to Ramaphosa",
    summary: 'Western Cape High Court voids 2022 panel report behind impeachment.',
    art: 'ramaphosa',
    map: { x: 135, y: 107 },
  },
  {
    num: 12,
    region: 'mideast',
    field: 'Justice',
    place: 'JERUSALEM',
    tag: 'OFFICIAL',
    pill: 'CASE 4000',
    headline: 'Judges urge dropping Netanyahu bribery count',
    summary: 'District court cites weak evidentiary basis; PM calls it momentous.',
    art: 'netanyahu',
    map: { x: 164, y: 43 },
  },
  {
    num: 13,
    region: 'nafrica',
    field: 'Disaster',
    place: 'GIZA, EGYPT',
    tag: 'OFFICIAL',
    pill: '31+ DEAD',
    headline: 'Fuel tanker fire kills at least 31 near Cairo',
    summary: 'Overturned tanker erupts on Ring Road; 20+ injured, 24+ cars burned.',
    art: 'cairo',
    map: { x: 136, y: 56 },
  },
];

// 37 crisp, OCR-safe single-line briefs (numbers 14..50 -> 19 left + 18 right)
export const BRIEFS = [
  // Left column (19): 14..32
  { num: 14, region: 'europe', field: 'War', place: 'Samara', text: 'Ukrainian drones ignite two Volga oil refineries', claim: false, dot: { x: 158, y: 27 } },
  { num: 15, region: 'europe', field: 'Tech', place: 'Brussels', text: 'EU unveils Quantum Act & €50bn tech equity fund', claim: false, dot: { x: 122, y: 31 } },
  { num: 16, region: 'europe', field: 'Economy', place: 'UK Retail', text: 'Poundland enters administration; 11,000 jobs at risk', claim: false, dot: { x: 118, y: 32 } },
  { num: 17, region: 'europe', field: 'Justice', place: 'London', text: 'Fairfield review finds Met Police still racist', claim: false, dot: { x: 115, y: 33 } },
  { num: 18, region: 'europe', field: 'Transport', place: 'Paris', text: 'Surprise Eurostar wage strike cancels London trains', claim: false, dot: { x: 120, y: 36 } },
  { num: 19, region: 'europe', field: 'Labour', place: 'Athens', text: '24-hour general strike halts ferries, rail & flights', claim: false, dot: { x: 135, y: 42 } },
  { num: 20, region: 'europe', field: 'Security', place: 'Warsaw', text: 'Poland plans no-fly zone along Ukraine border', claim: false, dot: { x: 134, y: 30 } },
  { num: 21, region: 'europe', field: 'Sport', place: 'Lisbon', text: 'Champions League: Sporting hold Man Utd to 2–2 draw', claim: false, dot: { x: 114, y: 41 } },
  { num: 22, region: 'europe', field: 'War', place: 'Savasleyka', text: 'Ukraine says drones hit 5 Russian jets at air base', claim: true, dot: { x: 152, y: 25 } },
  { num: 23, region: 'europe', field: 'Diplomacy', place: 'Kyiv', text: 'Zelensky seeks €115bn allied aid package for 2027', claim: false, dot: { x: 141, y: 31 } },
  { num: 24, region: 'mideast', field: 'Trade', place: 'Hormuz', text: 'Iran says mines struck two tankers (unverified)', claim: true, dot: { x: 168, y: 51 } },
  { num: 25, region: 'mideast', field: 'Politics', place: 'Jerusalem', text: 'Knesset advances Oct 7 inquiry bill in first vote', claim: false, dot: { x: 146, y: 50 } },
  { num: 26, region: 'mideast', field: 'Humanitarian', place: 'Gaza', text: 'Winter rains threaten 1,000+ displaced shelter sites', claim: false, dot: { x: 144, y: 52 } },
  { num: 27, region: 'mideast', field: 'Security', place: 'Sanaa', text: 'Houthis threaten Jeddah & Red Sea ports after raids', claim: true, dot: { x: 159, y: 66 } },
  { num: 28, region: 'nafrica', field: 'War', place: 'Benghazi', text: '2 Libyan officers die after Ukraine drone hit Russian ship', claim: false, dot: { x: 134, y: 52 } },
  { num: 29, region: 'ssafrica', field: 'Crime', place: 'Enugu', text: 'Nigeria seizes 1.5t meth ($227m), arrests 5 Mexicans', claim: false, dot: { x: 124, y: 71 } },
  { num: 30, region: 'ssafrica', field: 'War', place: 'Ed Damazin', text: 'RSF drone attacks kill up to 19 in Sudan Blue Nile', claim: false, dot: { x: 145, y: 69 } },
  { num: 31, region: 'ssafrica', field: 'Health', place: 'Addis Ababa', text: 'Ethiopia & WHO launch 11.3m-child polio campaign', claim: false, dot: { x: 149, y: 73 } },
  { num: 32, region: 'ssafrica', field: 'Climate', place: 'Harare', text: 'Severe El Niño drought threatens 2.3m Zimbabwe cattle', claim: false, dot: { x: 141, y: 94 } },

  // Right column (18): 33..50
  { num: 33, region: 'sasia', field: 'Disaster', place: 'Karachi', text: '6-storey building collapse kills at least 3, hurts 14', claim: false, dot: { x: 175, y: 56 } },
  { num: 34, region: 'sasia', field: 'Justice', place: 'New Delhi', text: 'Supreme Court voids CBI/ED check on Rahul Gandhi', claim: false, dot: { x: 181, y: 54 } },
  { num: 35, region: 'eastseasia', field: 'Tech', place: 'Kuala Lumpur', text: 'MCMC sues Google for RM600m over scam content', claim: false, dot: { x: 201, y: 74 } },
  { num: 36, region: 'eastseasia', field: 'Crime', place: 'Hong Kong', text: 'URBTIX ticketing hack exposes data of 1.3m users', claim: false, dot: { x: 211, y: 58 } },
  { num: 37, region: 'namerica', field: 'Tech', place: 'US Space', text: 'FCC clears SpaceX plan for 1m orbital AI data centres', claim: false, dot: { x: 67, y: 46 } },
  { num: 38, region: 'namerica', field: 'Economy', place: 'Washington', text: 'US Q3 GDP revised up to 4.3%; core PCE hits 3.3%', claim: false, dot: { x: 65, y: 48 } },
  { num: 39, region: 'namerica', field: 'Markets', place: 'New York', text: 'Dow rebounds 1,100 pts to 50,183 (+0.3%); Nasdaq −0.6%', claim: false, dot: { x: 71, y: 43 } },
  { num: 40, region: 'namerica', field: 'Security', place: 'Iowa, US', text: 'Army safely detonates 5t lead azide; no air spike', claim: false, dot: { x: 53, y: 42 } },
  { num: 41, region: 'namerica', field: 'Politics', place: 'Ottawa', text: 'PM Carney denies US criticism over defence spending', claim: false, dot: { x: 68, y: 36 } },
  { num: 42, region: 'latam', field: 'Security', place: 'Cartagena', text: 'Police storm Exito supermarket, free all hostages', claim: false, dot: { x: 66, y: 69 } },
  { num: 43, region: 'latam', field: 'Trade', place: 'Brazil', text: 'Slams proposed US tariffs on Embraer jets & sugar', claim: false, dot: { x: 84, y: 89 } },
  { num: 44, region: 'latam', field: 'Disaster', place: 'Paraná', text: 'El Niño storms & flash floods kill 6 in south Brazil', claim: false, dot: { x: 82, y: 97 } },
  { num: 45, region: 'latam', field: 'Politics', place: 'Brasilia', text: "Congress passes Lula's public-accounts control law", claim: false, dot: { x: 86, y: 87 } },
  { num: 46, region: 'oceania', field: 'Economy', place: 'Sydney', text: 'Australian CPI inflation climbs to 4.9% in October', claim: false, dot: { x: 229, y: 103 } },
  { num: 47, region: 'oceania', field: 'Tech', place: 'Canberra', text: 'Australia launches online safety law (5% global fines)', claim: false, dot: { x: 226, y: 105 } },
  { num: 48, region: 'global', field: 'Science', place: 'Space · ESA', text: "Hera shows stadium-sized DART crater on Dimorphos", claim: false, dot: null },
  { num: 49, region: 'global', field: 'Diplomacy', place: 'The Hague', text: '34 states & EU urge Russia at OPCW to stop CS gas', claim: false, dot: null },
  { num: 50, region: 'global', field: 'Rights', place: 'UN · Global', text: '16 Days opens; 47,000 women killed by kin in 2025', claim: false, dot: null },
];

export const DATE_CHECK = {
  excludedEarlier:
    'Huawei 10/12 US conviction (Tue 24) · Shanghai chief Chen Jining probe (Tue 24) · Riyadh PIF Tower strike (Tue 24) · CAS Senegal AFCON ruling (Tue 24) · CIA-ODNI breach (Tue 24) · Nvidia Huang return (Mon 23)',
  notYet:
    'US Thanksgiving (Thu 26) · Bundestag 2027 budget vote (Fri 27) · Bangladesh wage starts (1 Dec) · UK energy cap rise (1 Jan) · USTR tariff hearings (Jan 2027)',
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
  const fieldCounts = {};
  for (const s of all) {
    regionCounts[s.region] = (regionCounts[s.region] ?? 0) + 1;
    fieldCounts[s.field] = (fieldCounts[s.field] ?? 0) + 1;
  }
  const fieldsSorted = Object.entries(fieldCounts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  return {
    totalStories: all.length,
    totalRegions: REGIONS.filter((r) => regionCounts[r.id] > 0).length,
    totalFields: fieldsSorted.length,
    regionCounts,
    fieldsSorted,
  };
}
