// Original, bright, iconic editorial vector illustrations & world map for Wednesday 25 November 2026.
// Engineered for instant 300px thumbnail clarity: zero stamped dark corner stickers, crisp silhouettes, high-contrast figures.

export function renderLeadIllustration(art) {
  switch (art) {
    case 'tiangong':
      return `<svg viewBox="0 0 324 114" width="324" height="114" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Shenzhou-24 liftoff and Tiangong docking">
        <defs>
          <linearGradient id="launchSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#cfe3f8"/>
            <stop offset="100%" stop-color="#eef5fc"/>
          </linearGradient>
          <linearGradient id="orbitSky" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#1e3c68"/>
            <stop offset="100%" stop-color="#152a4a"/>
          </linearGradient>
        </defs>
        <!-- Left half: bright daytime launchpad -->
        <rect x="0" y="0" width="114" height="114" fill="url(#launchSky)"/>
        <rect x="0" y="96" width="114" height="18" fill="#d9ccb8"/>
        <path d="M14 96 L20 34 L32 34 L32 96 Z" fill="none" stroke="#64748b" stroke-width="1.6"/>
        <path d="M14 52 L32 52 M14 68 L32 68 M14 82 L32 82 M20 34 L32 52 M32 34 L20 52 M16 52 L32 68" stroke="#64748b" stroke-width="1"/>
        <!-- Exhaust clouds -->
        <ellipse cx="64" cy="99" rx="38" ry="13" fill="#ffffff" opacity="0.95"/>
        <ellipse cx="44" cy="100" rx="18" ry="8" fill="#fde68a" opacity="0.88"/>
        <ellipse cx="82" cy="100" rx="18" ry="8" fill="#fde68a" opacity="0.88"/>
        <polygon points="55,76 73,76 68,98 60,98" fill="#f97316"/>
        <polygon points="58,76 70,76 66,93 62,93" fill="#fef08a"/>
        <!-- Long March 2F rocket -->
        <rect x="58" y="38" width="16" height="39" rx="2" fill="#ffffff" stroke="#1e293b" stroke-width="1.4"/>
        <polygon points="58,38 66,22 74,38" fill="#dc2626"/>
        <rect x="51" y="53" width="7" height="23" rx="2" fill="#f1f5f9" stroke="#475569" stroke-width="1.1"/>
        <rect x="74" y="53" width="7" height="23" rx="2" fill="#f1f5f9" stroke="#475569" stroke-width="1.1"/>
        <rect x="61" y="45" width="10" height="5" fill="#1d4ed8"/>
        <text x="8" y="15" font-family="'Noto Sans', sans-serif" font-size="9.5" font-weight="900" fill="#1b365d">00:18 UTC</text>

        <!-- Clean cream divider -->
        <rect x="114" y="0" width="3" height="114" fill="#fbf8f2"/>

        <!-- Right half: Tiangong orbital docking -->
        <rect x="117" y="0" width="207" height="114" fill="url(#orbitSky)"/>
        <circle cx="136" cy="22" r="1.4" fill="#ffffff" opacity="0.85"/>
        <circle cx="176" cy="18" r="1.2" fill="#ffffff" opacity="0.75"/>
        <circle cx="298" cy="28" r="1.4" fill="#ffffff" opacity="0.85"/>
        <circle cx="310" cy="54" r="1.1" fill="#ffffff" opacity="0.7"/>
        <!-- Earth horizon curve -->
        <path d="M117 98 Q220 74 324 100 L324 114 L117 114 Z" fill="#3b82f6" opacity="0.52"/>
        <path d="M117 101 Q220 78 324 103" fill="none" stroke="#bae6fd" stroke-width="2.2"/>
        <!-- Big clear Tiangong solar wings -->
        <rect x="136" y="28" width="60" height="14" rx="1.5" fill="#60a5fa" stroke="#e0f2fe" stroke-width="1.1"/>
        <rect x="136" y="72" width="60" height="14" rx="1.5" fill="#60a5fa" stroke="#e0f2fe" stroke-width="1.1"/>
        <rect x="242" y="28" width="60" height="14" rx="1.5" fill="#60a5fa" stroke="#e0f2fe" stroke-width="1.1"/>
        <rect x="242" y="72" width="60" height="14" rx="1.5" fill="#60a5fa" stroke="#e0f2fe" stroke-width="1.1"/>
        <line x1="166" y1="28" x2="166" y2="42" stroke="#1e3a5f" stroke-width="1.1"/>
        <line x1="166" y1="72" x2="166" y2="86" stroke="#1e3a5f" stroke-width="1.1"/>
        <line x1="272" y1="28" x2="272" y2="42" stroke="#1e3a5f" stroke-width="1.1"/>
        <line x1="272" y1="72" x2="272" y2="86" stroke="#1e3a5f" stroke-width="1.1"/>
        <!-- Core module + docked Shenzhou-24 -->
        <rect x="192" y="45" width="54" height="24" rx="4" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
        <rect x="208" y="37" width="22" height="40" rx="3" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.3"/>
        <circle cx="219" cy="57" r="5.5" fill="#0f172a"/>
        <rect x="246" y="49" width="28" height="16" rx="6" fill="#fef3c7" stroke="#0f172a" stroke-width="1.3"/>
        <!-- Pakistan & China flags top-right -->
        <g transform="translate(254, 7)">
          <rect x="0" y="0" width="28" height="16" rx="1.5" fill="#046a38" stroke="#ffffff" stroke-width="0.9"/>
          <rect x="0" y="0" width="7.5" height="16" fill="#ffffff"/>
          <circle cx="18" cy="8" r="4" fill="#ffffff"/>
          <circle cx="19.5" cy="7.3" r="3.4" fill="#046a38"/>
          <rect x="33" y="0" width="28" height="16" rx="1.5" fill="#dc2626" stroke="#ffffff" stroke-width="0.9"/>
          <circle cx="40" cy="5.6" r="2.4" fill="#facc15"/>
          <circle cx="46" cy="4.0" r="0.9" fill="#facc15"/>
          <circle cx="47.8" cy="6.8" r="0.9" fill="#facc15"/>
          <circle cx="46.5" cy="9.8" r="0.9" fill="#facc15"/>
        </g>
        <text x="126" y="18" font-family="'Noto Sans', sans-serif" font-size="10.2" font-weight="900" fill="#e0f2fe">TIANGONG · 03:56 UTC</text>
      </svg>`;

    case 'chiprout':
      return `<svg viewBox="0 0 324 114" width="324" height="114" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Asian chip stocks plunge chart">
        <rect width="324" height="114" fill="#f7f1e8"/>
        <!-- Left clean chart card -->
        <rect x="6" y="6" width="166" height="102" rx="4" fill="#ffffff" stroke="#d6cec2" stroke-width="1.1"/>
        <line x1="14" y1="28" x2="164" y2="28" stroke="#ece6dc" stroke-width="1" stroke-dasharray="3,2"/>
        <line x1="14" y1="50" x2="164" y2="50" stroke="#ece6dc" stroke-width="1" stroke-dasharray="3,2"/>
        <line x1="14" y1="72" x2="164" y2="72" stroke="#ece6dc" stroke-width="1" stroke-dasharray="3,2"/>
        <polygon points="16,18 44,24 70,21 96,42 120,54 142,68 162,82 162,86 16,86" fill="#fee2e2"/>
        <polyline points="16,18 44,24 70,21 96,42 120,54 142,68 162,82" fill="none" stroke="#dc2626" stroke-width="4" stroke-linejoin="round"/>
        <polygon points="162,82 151,78 158,69" fill="#dc2626"/>
        <!-- Giant readable headline number inside chart -->
        <text x="18" y="64" font-family="'C059', Georgia, serif" font-size="24" font-weight="900" fill="#b91c1c">−6.2%</text>
        <text x="18" y="79" font-family="'Noto Sans', sans-serif" font-size="9.5" font-weight="800" fill="#334155">KOSPI 4,697.51</text>
        <text x="18" y="100" font-family="'Noto Sans', sans-serif" font-size="8.8" font-weight="800" fill="#991b1b">SELL-SIDECAR TRIGGERED</text>

        <!-- Right clean ticker table -->
        <rect x="178" y="6" width="140" height="102" rx="4" fill="#18273e"/>
        <g font-family="'Noto Sans', sans-serif" font-weight="800">
          <text x="188" y="25" font-size="11.2" fill="#e2e8f0">SK HYNIX</text>
          <text x="309" y="25" text-anchor="end" font-size="12.5" fill="#f87171">−11.1%</text>
          <line x1="186" y1="32" x2="310" y2="32" stroke="#334155" stroke-width="1"/>
          <text x="188" y="49" font-size="11.2" fill="#e2e8f0">SAMSUNG</text>
          <text x="309" y="49" text-anchor="end" font-size="12.5" fill="#f87171">−9.9%</text>
          <line x1="186" y1="56" x2="310" y2="56" stroke="#334155" stroke-width="1"/>
          <text x="188" y="73" font-size="11.2" fill="#e2e8f0">TAIEX</text>
          <text x="309" y="73" text-anchor="end" font-size="12.5" fill="#fca5a5">−4.8%</text>
          <line x1="186" y1="80" x2="310" y2="80" stroke="#334155" stroke-width="1"/>
          <text x="188" y="97" font-size="11.2" fill="#e2e8f0">NIKKEI</text>
          <text x="309" y="97" text-anchor="end" font-size="12.5" fill="#fca5a5">−2.8%</text>
        </g>
      </svg>`;

    case 'tariffs':
      return `<svg viewBox="0 0 324 114" width="324" height="114" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="US proposed Section 301 tariffs on 14 economies">
        <rect width="324" height="114" fill="#e5eff7"/>
        <rect x="0" y="88" width="324" height="26" fill="#7fa8c9"/>
        <path d="M0 96 Q28 91 56 96 T112 96 T168 96 T224 96 T280 96 T324 96" fill="none" stroke="#dbeafe" stroke-width="1.8"/>
        <!-- Ship hull -->
        <polygon points="14,72 302,72 286,96 30,96" fill="#233f5e"/>
        <polygon points="24,87 293,87 286,96 30,96" fill="#b91c1c"/>
        <!-- Bridge -->
        <rect x="256" y="34" width="32" height="38" fill="#ffffff" stroke="#1e293b" stroke-width="1.3"/>
        <rect x="262" y="42" width="20" height="8" fill="#38bdf8"/>
        <rect x="269" y="23" width="7" height="11" fill="#475569"/>
        <!-- Giant crisp tariff containers readable at 300px -->
        <rect x="24" y="46" width="110" height="25" rx="2.5" fill="#b45309" stroke="#ffffff" stroke-width="1.3"/>
        <text x="79" y="63" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="12" font-weight="900" fill="#ffffff">VIETNAM 35%</text>
        <rect x="137" y="46" width="112" height="25" rx="2.5" fill="#0e7490" stroke="#ffffff" stroke-width="1.3"/>
        <text x="193" y="63" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="12" font-weight="900" fill="#ffffff">INDIA 25%</text>
        <rect x="38" y="19" width="102" height="25" rx="2.5" fill="#991b1b" stroke="#ffffff" stroke-width="1.3"/>
        <text x="89" y="36" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="12" font-weight="900" fill="#ffffff">CHINA 20%</text>
        <rect x="143" y="19" width="106" height="25" rx="2.5" fill="#244c75" stroke="#ffffff" stroke-width="1.3"/>
        <text x="196" y="36" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="11.2" font-weight="900" fill="#ffffff">EU · JP · KR 15%</text>
        <!-- Crisp top-left callout -->
        <text x="12" y="14" font-family="'Noto Sans', sans-serif" font-size="10.2" font-weight="900" fill="#1e293b">14 ECONOMIES · SEC. 301</text>
      </svg>`;

    default:
      return '';
  }
}

export function renderSecondaryIllustration(art) {
  // Clean 242x60 full-bleed vector scenes on distinct bright pastel palettes — zero dark corner sticker clutter!
  let inner = '';
  switch (art) {
    case 'cairo':
      inner = `
        <rect width="242" height="60" fill="#f9ece3"/>
        <!-- Elevated Cairo Ring Road highway -->
        <rect x="0" y="42" width="242" height="10" fill="#64748b"/>
        <line x1="8" y1="47" x2="234" y2="47" stroke="#f8fafc" stroke-width="1.3" stroke-dasharray="10,8"/>
        <rect x="26" y="52" width="12" height="8" fill="#94a3b8"/>
        <rect x="118" y="52" width="12" height="8" fill="#94a3b8"/>
        <rect x="202" y="52" width="12" height="8" fill="#94a3b8"/>
        <!-- Tanker truck + blaze -->
        <rect x="34" y="26" width="66" height="15" rx="6" fill="#dc2626" stroke="#7f1d1d" stroke-width="1.2"/>
        <rect x="100" y="29" width="18" height="12" rx="2" fill="#334155"/>
        <circle cx="46" cy="42" r="4" fill="#0f172a"/>
        <circle cx="90" cy="42" r="4" fill="#0f172a"/>
        <circle cx="111" cy="42" r="4" fill="#0f172a"/>
        <!-- Flame & smoke plume -->
        <circle cx="76" cy="14" r="11" fill="#64748b" opacity="0.65"/>
        <circle cx="92" cy="10" r="12" fill="#475569" opacity="0.58"/>
        <path d="M58 27 Q66 8 76 24 Q84 10 92 27 Z" fill="#f97316"/>
        <path d="M64 27 Q71 15 78 27 Z" fill="#fef08a"/>
        <!-- Crisp integrated figure card -->
        <rect x="140" y="8" width="92" height="30" rx="4" fill="#ffffff" stroke="#b91c1c" stroke-width="1.5"/>
        <text x="186" y="25" text-anchor="middle" font-family="'C059', Georgia, serif" font-size="16" font-weight="900" fill="#991b1b">31+ DEAD</text>
        <text x="186" y="35" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="8.4" font-weight="800" fill="#475569">21 INJURED · GIZA</text>
      `;
      break;

    case 'hodeidah':
      inner = `
        <rect width="242" height="60" fill="#f7eadb"/>
        <rect x="0" y="45" width="242" height="15" fill="#477aa3"/>
        <rect x="10" y="36" width="160" height="9" fill="#b69f84"/>
        <!-- Red Sea port cranes -->
        <path d="M24 36 V14 H62 M30 36 L48 14" fill="none" stroke="#991b1b" stroke-width="2.6"/>
        <path d="M84 36 V14 H122 M90 36 L108 14" fill="none" stroke="#991b1b" stroke-width="2.6"/>
        <!-- Strike blast + plume -->
        <circle cx="152" cy="22" r="12" fill="#64748b" opacity="0.7"/>
        <circle cx="168" cy="13" r="13" fill="#475569" opacity="0.62"/>
        <circle cx="146" cy="31" r="7.5" fill="#ea580c"/>
        <circle cx="154" cy="32" r="5.5" fill="#facc15"/>
        <!-- Jet silhouette -->
        <polygon points="196,12 228,18 202,22 208,16" fill="#1e293b"/>
        <line x1="176" y1="22" x2="195" y2="17" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="3,2"/>
      `;
      break;

    case 'ofgem':
      inner = `
        <rect width="242" height="60" fill="#f5efe3"/>
        <!-- British terraced house + gas flame -->
        <polygon points="16,28 46,10 76,28" fill="#b45309"/>
        <rect x="22" y="28" width="48" height="26" fill="#ffffff" stroke="#b45309" stroke-width="1.5"/>
        <path d="M46 33 C51 38 53 44 46 49 C39 44 41 38 46 33 Z" fill="#ea580c"/>
        <path d="M46 39 C48.5 42 49 45 46 47 C43 45 43.5 42 46 39 Z" fill="#fef08a"/>
        <!-- Huge clear UK bill graphic -->
        <rect x="88" y="7" width="144" height="46" rx="4" fill="#ffffff" stroke="#d97706" stroke-width="1.5"/>
        <text x="98" y="21" font-family="'Noto Sans', sans-serif" font-size="9.5" font-weight="800" fill="#64748b" text-decoration="line-through">£1,723 / YR</text>
        <text x="224" y="21" text-anchor="end" font-family="'Noto Sans', sans-serif" font-size="11.5" font-weight="900" fill="#b45309">+26%</text>
        <text x="98" y="45" font-family="'C059', Georgia, serif" font-size="22" font-weight="900" fill="#b91c1c">£2,166</text>
        <text x="176" y="44" font-family="'Noto Sans', sans-serif" font-size="10.5" font-weight="800" fill="#475569">/ YR</text>
      `;
      break;

    case 'bogor':
      inner = `
        <rect width="242" height="60" fill="#e8eef3"/>
        <!-- Rain streaks -->
        <path d="M24 6 L19 18 M54 6 L49 18 M84 6 L79 18 M114 6 L109 18 M144 6 L139 18" stroke="#3b82f6" stroke-width="1.8"/>
        <!-- Earth cross-section + flooded mine shafts -->
        <rect x="0" y="24" width="242" height="36" fill="#8b6b4a"/>
        <rect x="0" y="20" width="242" height="6" fill="#4d7c0f"/>
        <rect x="34" y="24" width="26" height="36" fill="#2563eb"/>
        <rect x="100" y="24" width="26" height="36" fill="#2563eb"/>
        <rect x="34" y="42" width="92" height="14" fill="#1d4ed8"/>
        <!-- Clear rescue figure card -->
        <rect x="142" y="9" width="90" height="42" rx="4" fill="#ffffff" stroke="#1e3a5f" stroke-width="1.4"/>
        <text x="187" y="26" text-anchor="middle" font-family="'C059', Georgia, serif" font-size="15.5" font-weight="900" fill="#991b1b">9 DEAD</text>
        <text x="187" y="40" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="10" font-weight="900" fill="#1e3a5f">17 TRAPPED</text>
        <text x="187" y="49" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="7.6" font-weight="700" fill="#64748b">100m SHAFTS</text>
      `;
      break;

    case 'gaza':
      inner = `
        <rect width="242" height="60" fill="#f3ebe2"/>
        <!-- Coastal skyline & horizon -->
        <rect x="0" y="48" width="242" height="12" fill="#3b6e94"/>
        <rect x="18" y="28" width="24" height="20" fill="#cbd5e1" stroke="#64748b" stroke-width="1"/>
        <rect x="46" y="22" width="28" height="26" fill="#d6d3d1" stroke="#64748b" stroke-width="1"/>
        <rect x="78" y="30" width="24" height="18" fill="#cbd5e1" stroke="#64748b" stroke-width="1"/>
        <rect x="146" y="26" width="28" height="22" fill="#d6d3d1" stroke="#64748b" stroke-width="1"/>
        <rect x="180" y="32" width="26" height="16" fill="#cbd5e1" stroke="#64748b" stroke-width="1"/>
        <!-- Impact plume -->
        <circle cx="122" cy="24" r="13" fill="#475569" opacity="0.72"/>
        <circle cx="132" cy="14" r="11" fill="#64748b" opacity="0.62"/>
        <polygon points="112,48 122,28 134,48" fill="#ea580c"/>
        <polygon points="117,48 123,35 129,48" fill="#facc15"/>
        <text x="232" y="18" text-anchor="end" font-family="'Noto Sans', sans-serif" font-size="9.5" font-weight="900" fill="#7c2d12">SHATI CAMP</text>
      `;
      break;

    case 'solomons':
      inner = `
        <rect width="242" height="60" fill="#ddf0f5"/>
        <rect x="0" y="44" width="242" height="16" fill="#256d85"/>
        <!-- Pacific island + palm -->
        <ellipse cx="42" cy="46" rx="32" ry="7" fill="#65a30d"/>
        <path d="M36 43 Q32 28 38 18 M38 18 Q24 16 20 24 M38 18 Q50 15 56 23" fill="none" stroke="#15803d" stroke-width="2.4"/>
        <!-- Clean Treaty document -->
        <rect x="86" y="7" width="84" height="46" rx="3.5" fill="#ffffff" stroke="#1e3a5f" stroke-width="1.4"/>
        <text x="128" y="20" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="9.2" font-weight="900" fill="#1e3a5f">NO FOREIGN</text>
        <text x="128" y="31" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="9.2" font-weight="900" fill="#1e3a5f">BASES</text>
        <line x1="96" y1="38" x2="146" y2="38" stroke="#94a3b8" stroke-width="1.6"/>
        <circle cx="156" cy="41" r="6.5" fill="#0e7490"/>
        <path d="M153 41 L155.3 43.5 L159.5 38.5" fill="none" stroke="#ffffff" stroke-width="1.7"/>
        <!-- AU & SB flags -->
        <rect x="184" y="10" width="46" height="18" rx="2" fill="#1e3a8a" stroke="#ffffff" stroke-width="0.9"/>
        <circle cx="217" cy="19" r="3" fill="#ffffff"/>
        <rect x="184" y="33" width="46" height="18" rx="2" fill="#0369a1" stroke="#ffffff" stroke-width="0.9"/>
        <polygon points="184,51 230,33 230,51" fill="#15803d"/>
        <line x1="184" y1="51" x2="230" y2="33" stroke="#facc15" stroke-width="2.6"/>
      `;
      break;

    case 'dhaka':
      inner = `
        <rect width="242" height="60" fill="#ecf6ef"/>
        <!-- Sewing machine silhouette -->
        <rect x="16" y="45" width="76" height="9" rx="2" fill="#1b634b"/>
        <path d="M78 45 V24 H32 V35 H44" fill="none" stroke="#1b634b" stroke-width="6.5" stroke-linejoin="round"/>
        <line x1="32" y1="35" x2="32" y2="44" stroke="#0f172a" stroke-width="2"/>
        <!-- Clean wage jump bars -->
        <rect x="112" y="36" width="44" height="17" rx="2.5" fill="#d97706"/>
        <text x="134" y="32" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="9.5" font-weight="800" fill="#92400e">12.5k</text>
        <rect x="168" y="18" width="58" height="35" rx="2.5" fill="#15803d"/>
        <text x="197" y="14" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="11.5" font-weight="900" fill="#15803d">+36%</text>
        <text x="197" y="40" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="11" font-weight="900" fill="#ffffff">Tk 17k</text>
      `;
      break;

    case 'ukraine':
      inner = `
        <rect width="242" height="60" fill="#e9eef4"/>
        <rect x="0" y="50" width="242" height="10" fill="#94a3b8"/>
        <!-- Zaporizhzhia cooling tower silhouette -->
        <path d="M12 50 Q16 32 14 16 L36 16 Q34 32 38 50 Z" fill="#cbd5e1" stroke="#475569" stroke-width="1.3"/>
        <rect x="42" y="32" width="16" height="18" fill="#dbe3ec" stroke="#475569" stroke-width="1.1"/>
        <!-- Power grid pylon + severed line + outage lightning -->
        <path d="M68 50 L78 14 L88 50 M64 25 L92 25 M67 36 L89 36" fill="none" stroke="#334155" stroke-width="2.1"/>
        <path d="M92 25 Q110 34 128 25" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,2"/>
        <polygon points="113,11 103,28 113,28 106,45 124,24 114,24" fill="#dc2626"/>
        <!-- Clear regions callout -->
        <rect x="136" y="9" width="96" height="39" rx="4" fill="#ffffff" stroke="#244c75" stroke-width="1.4"/>
        <text x="184" y="27" text-anchor="middle" font-family="'C059', Georgia, serif" font-size="15.5" font-weight="900" fill="#991b1b">5 REGIONS</text>
        <text x="184" y="40" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="9.0" font-weight="800" fill="#244c75">5 KILLED · DIESEL</text>
      `;
      break;
  }

  return `<svg viewBox="0 0 242 60" width="242" height="60" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
}

export function renderWorldMap(leads, secondaries, briefs, regionColorMap) {
  // Crisp editorial world map (262x124) with 11 collision-free pins + brief dots
  const continents = `
    <path d="M14,20 L28,14 L50,13 L72,16 L82,23 L77,30 L83,36 L74,45 L67,53 L58,56 L54,63 L49,64 L44,56 L37,49 L31,40 L20,33 Z" fill="#dbd3c4" stroke="#bfb5a3" stroke-width="0.7"/>
    <path d="M84,8 L104,8 L107,16 L97,22 L87,18 Z" fill="#dbd3c4" stroke="#bfb5a3" stroke-width="0.7"/>
    <path d="M62,60 L71,60 L72,63 L63,63 Z" fill="#dbd3c4"/>
    <path d="M62,67 L74,66 L86,74 L97,83 L95,94 L86,104 L78,114 L71,120 L67,114 L67,99 L62,84 L58,75 Z" fill="#dbd3c4" stroke="#bfb5a3" stroke-width="0.7"/>
    <path d="M116,28 L121,27 L122,34 L117,35 Z" fill="#dbd3c4" stroke="#bfb5a3" stroke-width="0.6"/>
    <path d="M126,14 L140,13 L147,19 L141,26 L155,22 L161,30 L156,40 L145,44 L138,46 L131,41 L123,44 L117,43 L118,36 L124,33 L127,24 Z" fill="#dbd3c4" stroke="#bfb5a3" stroke-width="0.7"/>
    <path d="M115,50 L130,47 L144,50 L152,60 L159,70 L156,82 L148,99 L140,111 L133,108 L129,90 L125,76 L114,69 L111,59 Z" fill="#dbd3c4" stroke="#bfb5a3" stroke-width="0.7"/>
    <path d="M156,92 L160,90 L159,101 L155,101 Z" fill="#dbd3c4" stroke="#bfb5a3" stroke-width="0.5"/>
    <path d="M155,18 L185,14 L218,16 L242,24 L239,35 L228,40 L225,50 L218,60 L207,67 L200,73 L194,68 L187,62 L181,70 L175,63 L167,58 L158,67 L150,64 L147,53 L154,46 L158,34 Z" fill="#dbd3c4" stroke="#bfb5a3" stroke-width="0.7"/>
    <path d="M231,40 L236,39 L234,49 L229,50 Z" fill="#dbd3c4" stroke="#bfb5a3" stroke-width="0.6"/>
    <path d="M200,79 L219,83 L218,87 L199,83 Z" fill="#dbd3c4" stroke="#bfb5a3" stroke-width="0.6"/>
    <path d="M220,66 L225,67 L224,75 L219,74 Z" fill="#dbd3c4"/>
    <path d="M206,94 L224,91 L236,98 L236,110 L224,114 L209,110 L204,102 Z" fill="#dbd3c4" stroke="#bfb5a3" stroke-width="0.7"/>
    <path d="M244,109 L250,106 L251,116 L245,118 Z" fill="#dbd3c4" stroke="#bfb5a3" stroke-width="0.6"/>
    <circle cx="244" cy="87" r="3" fill="#dbd3c4" stroke="#bfb5a3" stroke-width="0.5"/>
  `;

  const dots = briefs
    .filter((b) => b.dot)
    .map(
      (b) =>
        `<circle cx="${b.dot.x}" cy="${b.dot.y}" r="2.2" fill="${regionColorMap[b.region]}" opacity="0.62" stroke="#fbf8f2" stroke-width="0.5"/>`
    )
    .join('');

  const featured = [...leads, ...secondaries];
  const pins = featured
    .map((s) => {
      const col = regionColorMap[s.region];
      return `<g class="map-pin" data-num="${s.num}" data-x="${s.map.x}" data-y="${s.map.y}">
        <circle cx="${s.map.x}" cy="${s.map.y}" r="7.2" fill="${col}" stroke="#ffffff" stroke-width="1.3"/>
        <text x="${s.map.x}" y="${s.map.y + 3.0}" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="8.2" font-weight="800" fill="#ffffff">${s.num}</text>
      </g>`;
    })
    .join('');

  return `<svg id="world-map" viewBox="0 0 262 124" width="262" height="124" xmlns="http://www.w3.org/2000/svg">
    <rect width="262" height="124" rx="3" fill="#edf2f6" stroke="#d9d1c3" stroke-width="1"/>
    <line x1="0" y1="62" x2="262" y2="62" stroke="#d5dfe8" stroke-width="0.7" stroke-dasharray="2,3"/>
    ${continents}
    ${dots}
    ${pins}
  </svg>`;
}
