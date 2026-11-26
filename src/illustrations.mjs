// Original high-contrast editorial vector illustrations & world map for Wednesday 25 November 2026.
// Designed specifically for 300px thumbnail punch and 1024px editorial craft:
// - 3 vivid hero lead plates (US tariffs cargo ship, dark AI chip-rout terminal, deep-space Tiangong docking)
// - 10 crisp 2x5 secondary plates on warm, distinct palettes with integrated number/status callouts
// - Collision-free world map with 13 numbered pins + brief dots

export function renderLeadIllustration(art) {
  switch (art) {
    case 'tariffs':
      return `<svg viewBox="0 0 324 106" width="324" height="106" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="US proposed Section 301 tariffs up to 20 percent on 14 economies">
        <defs>
          <linearGradient id="tarSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#dceaf6"/>
            <stop offset="100%" stop-color="#f2f7fb"/>
          </linearGradient>
        </defs>
        <rect width="324" height="106" fill="url(#tarSky)"/>
        <rect x="0" y="79" width="324" height="27" fill="#3b6e98"/>
        <path d="M0 87 Q24 83 48 87 T96 87 T144 87 T192 87 T240 87 T288 87 T324 87" fill="none" stroke="#bae6fd" stroke-width="1.6" opacity="0.7"/>
        <!-- Ship hull -->
        <polygon points="10,64 256,64 242,88 26,88" fill="#182b44"/>
        <polygon points="20,79 248,79 242,88 26,88" fill="#b91c1c"/>
        <!-- Deckhouse / bridge -->
        <rect x="206" y="34" width="30" height="30" fill="#ffffff" stroke="#1e293b" stroke-width="1.3"/>
        <rect x="212" y="40" width="18" height="7" fill="#0284c7"/>
        <rect x="218" y="23" width="7" height="11" fill="#475569"/>
        <!-- Crisp container stacks -->
        <rect x="24" y="45" width="44" height="19" rx="1.5" fill="#1e40af" stroke="#ffffff" stroke-width="1.1"/>
        <rect x="70" y="45" width="44" height="19" rx="1.5" fill="#0f766e" stroke="#ffffff" stroke-width="1.1"/>
        <rect x="116" y="45" width="44" height="19" rx="1.5" fill="#b45309" stroke="#ffffff" stroke-width="1.1"/>
        <rect x="162" y="45" width="38" height="19" rx="1.5" fill="#6d28d9" stroke="#ffffff" stroke-width="1.1"/>
        <rect x="34" y="25" width="54" height="19" rx="1.5" fill="#244c75" stroke="#ffffff" stroke-width="1.1"/>
        <text x="61" y="38.5" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="11.5" font-weight="900" fill="#ffffff">EU 15%</text>
        <rect x="91" y="25" width="68" height="19" rx="1.5" fill="#991b1b" stroke="#ffffff" stroke-width="1.1"/>
        <text x="125" y="38.5" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="11.5" font-weight="900" fill="#ffffff">CHINA 20%</text>
        <rect x="162" y="25" width="38" height="19" rx="1.5" fill="#0e7490" stroke="#ffffff" stroke-width="1.1"/>
        <text x="181" y="38" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="9.5" font-weight="900" fill="#ffffff">+12</text>
        <!-- Giant crisp circular tariff stamp on right -->
        <circle cx="282" cy="48" r="35" fill="#ffffff" stroke="#b91c1c" stroke-width="3.0"/>
        <circle cx="282" cy="48" r="30.5" fill="none" stroke="#fca5a5" stroke-width="1.1" stroke-dasharray="3,2"/>
        <text x="282" y="34" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="9.0" font-weight="900" fill="#991b1b">UP TO</text>
        <text x="282" y="57" text-anchor="middle" font-family="'C059', Georgia, serif" font-size="23.5" font-weight="900" fill="#b91c1c">20%</text>
        <text x="282" y="69" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="7.2" font-weight="900" fill="#334155">14 NATIONS</text>
        <!-- Clean kicker inside sky -->
        <text x="12" y="16" font-family="'Noto Sans', sans-serif" font-size="9.8" font-weight="900" fill="#1e293b">SECTION 301 · USTR PROPOSAL</text>
      </svg>`;

    case 'chiprout':
      return `<svg viewBox="0 0 324 106" width="324" height="106" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Asian chip stocks plunge trading board">
        <rect width="324" height="106" fill="#131f33"/>
        <!-- Subtle grid lines -->
        <line x1="12" y1="26" x2="170" y2="26" stroke="#243552" stroke-width="1"/>
        <line x1="12" y1="50" x2="170" y2="50" stroke="#243552" stroke-width="1"/>
        <line x1="12" y1="74" x2="170" y2="74" stroke="#243552" stroke-width="1"/>
        <!-- Microchip motif subtle in top-left -->
        <rect x="18" y="36" width="34" height="34" rx="4" fill="#1e2f4a" stroke="#ef4444" stroke-width="1.8"/>
        <path d="M26 30 V36 M35 30 V36 M44 30 V36 M26 70 V76 M35 70 V76 M44 70 V76 M12 44 H18 M12 53 H18 M12 62 H18 M52 44 H58 M52 53 H58 M52 62 H58" stroke="#f87171" stroke-width="1.6"/>
        <text x="35" y="57" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="13" font-weight="900" fill="#fca5a5">AI</text>
        <!-- Steep downward plunge line -->
        <polygon points="14,18 46,24 72,22 100,45 128,59 166,83 166,94 14,94" fill="#dc2626" opacity="0.22"/>
        <polyline points="14,18 46,24 72,22 100,45 128,59 166,83" fill="none" stroke="#ef4444" stroke-width="4" stroke-linejoin="round"/>
        <polygon points="168,85 154,82 162,72" fill="#ef4444"/>
        <text x="14" y="14" font-family="'Noto Sans', sans-serif" font-size="9.5" font-weight="900" fill="#93c5fd">SELL-SIDECAR · 4,697.51</text>
        <!-- Crisp vertical divider -->
        <line x1="170" y1="9" x2="170" y2="97" stroke="#334155" stroke-width="1.2"/>
        <!-- Giant high-contrast ticker table readable at 300px -->
        <g font-family="'Noto Sans', sans-serif" font-weight="900">
          <text x="178" y="25" font-size="11.2" fill="#cbd5e1">KOSPI</text>
          <text x="315" y="26" text-anchor="end" font-size="16" fill="#ff6b6b">−6.2%</text>
          <line x1="178" y1="33" x2="315" y2="33" stroke="#283a56" stroke-width="1"/>
          <text x="178" y="51" font-size="11.0" fill="#cbd5e1">SK HYNIX</text>
          <text x="315" y="52" text-anchor="end" font-size="15.5" fill="#ff6b6b">−11.1%</text>
          <line x1="178" y1="59" x2="315" y2="59" stroke="#283a56" stroke-width="1"/>
          <text x="178" y="77" font-size="11.0" fill="#cbd5e1">SAMSUNG</text>
          <text x="315" y="78" text-anchor="end" font-size="15.5" fill="#ff6b6b">−9.9%</text>
          <line x1="178" y1="84" x2="315" y2="84" stroke="#283a56" stroke-width="1"/>
          <text x="178" y="99" font-size="9.0" fill="#93c5fd">TAIEX −4.8%</text>
          <text x="315" y="99" text-anchor="end" font-size="9.0" fill="#93c5fd">NIKKEI −2.8%</text>
        </g>
      </svg>`;

    case 'tiangong':
      return `<svg viewBox="0 0 324 106" width="324" height="106" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Shenzhou-24 docking at China Tiangong space station with Pakistani astronaut">
        <defs>
          <linearGradient id="spaceDeep" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#0b1836"/>
            <stop offset="100%" stop-color="#19345e"/>
          </linearGradient>
        </defs>
        <rect width="324" height="106" fill="url(#spaceDeep)"/>
        <!-- Stars -->
        <circle cx="24" cy="24" r="1.4" fill="#ffffff" opacity="0.85"/>
        <circle cx="72" cy="15" r="1.2" fill="#ffffff" opacity="0.7"/>
        <circle cx="154" cy="16" r="1.3" fill="#ffffff" opacity="0.8"/>
        <circle cx="242" cy="22" r="1.2" fill="#ffffff" opacity="0.75"/>
        <circle cx="304" cy="18" r="1.4" fill="#ffffff" opacity="0.85"/>
        <!-- Luminous Earth limb -->
        <path d="M0 88 Q162 60 324 90 L324 106 L0 106 Z" fill="#1d4ed8" opacity="0.55"/>
        <path d="M0 91 Q162 64 324 93" fill="none" stroke="#93c5fd" stroke-width="2.6"/>
        <!-- Giant crisp Tiangong solar wings -->
        <rect x="20" y="34" width="84" height="14" rx="1.5" fill="#38bdf8" stroke="#e0f2fe" stroke-width="1.2"/>
        <rect x="20" y="58" width="84" height="14" rx="1.5" fill="#38bdf8" stroke="#e0f2fe" stroke-width="1.2"/>
        <rect x="220" y="34" width="84" height="14" rx="1.5" fill="#38bdf8" stroke="#e0f2fe" stroke-width="1.2"/>
        <rect x="220" y="58" width="84" height="14" rx="1.5" fill="#38bdf8" stroke="#e0f2fe" stroke-width="1.2"/>
        <path d="M48 34 V48 M76 34 V48 M48 58 V72 M76 58 V72 M248 34 V48 M276 34 V48 M248 58 V72 M276 58 V72" stroke="#0c4a6e" stroke-width="1.2"/>
        <!-- Core T-module + docked Shenzhou-24 -->
        <rect x="104" y="42" width="116" height="22" rx="4" fill="#f8fafc" stroke="#0f172a" stroke-width="1.6"/>
        <rect x="148" y="25" width="28" height="56" rx="4" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.5"/>
        <circle cx="162" cy="53" r="6" fill="#0f172a"/>
        <rect x="150" y="75" width="24" height="16" rx="5" fill="#fde68a" stroke="#0f172a" stroke-width="1.3"/>
        <!-- Crisp Pakistan & China flags top-left -->
        <g transform="translate(12, 8)">
          <rect x="0" y="0" width="32" height="19" rx="1.5" fill="#046a38" stroke="#ffffff" stroke-width="1"/>
          <rect x="0" y="0" width="8.5" height="19" fill="#ffffff"/>
          <circle cx="20.5" cy="9.5" r="4.6" fill="#ffffff"/>
          <circle cx="22.3" cy="8.7" r="3.9" fill="#046a38"/>
          <rect x="38" y="0" width="32" height="19" rx="1.5" fill="#dc2626" stroke="#ffffff" stroke-width="1"/>
          <circle cx="46" cy="6.6" r="2.7" fill="#facc15"/>
          <circle cx="53" cy="4.6" r="1" fill="#facc15"/>
          <circle cx="55" cy="7.8" r="1" fill="#facc15"/>
          <circle cx="53.5" cy="11.2" r="1" fill="#facc15"/>
        </g>
        <!-- Crisp bright labels -->
        <text x="314" y="21" text-anchor="end" font-family="'Noto Sans', sans-serif" font-size="11.5" font-weight="900" fill="#ffffff">SHENZHOU-24</text>
        <text x="14" y="100" font-family="'Noto Sans', sans-serif" font-size="10.2" font-weight="900" fill="#e0f2fe">03:56 UTC DOCKING</text>
        <text x="312" y="100" text-anchor="end" font-family="'Noto Sans', sans-serif" font-size="11" font-weight="900" fill="#fef08a">TIANGONG</text>
      </svg>`;

    default:
      return '';
  }
}

export function renderSecondaryIllustration(art, num, pill, regionColor) {
  // Crisp 192x56 full-bleed vector scenes with integrated bottom-left number + bold high-contrast stat pill
  let scene = '';
  switch (art) {
    case 'ukraine':
      scene = `
        <rect width="192" height="56" fill="#1e2d42"/>
        <rect x="0" y="46" width="192" height="10" fill="#334155"/>
        <path d="M10 46 Q14 28 12 12 L34 12 Q32 28 36 46 Z" fill="#64748b" stroke="#94a3b8" stroke-width="1.2"/>
        <path d="M126 46 L140 8 L154 46 M122 20 L158 20 M126 32 L154 32" fill="none" stroke="#cbd5e1" stroke-width="2.1"/>
        <polygon points="172,7 161,24 171,24 164,41 184,20 173,20" fill="#facc15"/>
        <circle cx="72" cy="14" r="1.4" fill="#fbbf24"/>
        <circle cx="96" cy="20" r="1.4" fill="#fbbf24"/>
      `;
      break;

    case 'rastanura':
      scene = `
        <rect width="192" height="56" fill="#f7e6cf"/>
        <rect x="0" y="42" width="192" height="14" fill="#c89e6b"/>
        <!-- Oil refinery storage tanks + flare -->
        <rect x="114" y="25" width="26" height="17" rx="2" fill="#e2e8f0" stroke="#475569" stroke-width="1.2"/>
        <rect x="146" y="25" width="26" height="17" rx="2" fill="#e2e8f0" stroke="#475569" stroke-width="1.2"/>
        <rect x="176" y="13" width="4" height="29" fill="#475569"/>
        <polygon points="174,13 178,5 182,13" fill="#ea580c"/>
        <!-- Intercepted drones bursts -->
        <g stroke="#b91c1c" stroke-width="2">
          <line x1="36" y1="15" x2="48" y2="15"/><line x1="42" y1="9" x2="42" y2="21"/>
          <line x1="74" y1="12" x2="86" y2="12"/><line x1="80" y1="6" x2="80" y2="18"/>
          <line x1="108" y1="16" x2="118" y2="16"/><line x1="113" y1="11" x2="113" y2="21"/>
        </g>
        <path d="M126 42 Q98 28 82 14" fill="none" stroke="#991b1b" stroke-width="1.4" stroke-dasharray="3,2"/>
      `;
      break;

    case 'ofgem':
      scene = `
        <rect width="192" height="56" fill="#f4efe4"/>
        <!-- Blue gas flame -->
        <path d="M28 5 C36 14 39 23 28 32 C17 23 20 14 28 5 Z" fill="#2563eb"/>
        <path d="M28 15 C31.5 19 32.5 24 28 28 C23.5 24 24.5 19 28 15 Z" fill="#93c5fd"/>
        <!-- Crisp energy bill card cleanly clear of bottom-left pill -->
        <rect x="74" y="5" width="112" height="46" rx="3" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.3"/>
        <text x="81" y="16" font-family="'Noto Sans', sans-serif" font-size="7.8" font-weight="800" fill="#64748b">ENERGY BILL</text>
        <text x="180" y="16" text-anchor="end" font-family="'Noto Sans', sans-serif" font-size="8.0" font-weight="800" fill="#94a3b8" text-decoration="line-through">£1,723</text>
        <text x="130" y="42" text-anchor="middle" font-family="'C059', Georgia, serif" font-size="22.5" font-weight="900" fill="#b91c1c">£2,166</text>
      `;
      break;

    case 'solomons':
      scene = `
        <rect width="192" height="56" fill="#d9eef5"/>
        <rect x="0" y="38" width="192" height="18" fill="#1d5f78"/>
        <!-- Australia & Solomon Islands flags -->
        <rect x="16" y="7" width="48" height="24" rx="2" fill="#1e3a8a" stroke="#ffffff" stroke-width="1"/>
        <circle cx="50" cy="19" r="3.4" fill="#ffffff"/>
        <circle cx="28" cy="22" r="2.2" fill="#ffffff"/>
        <rect x="74" y="7" width="48" height="24" rx="2" fill="#0369a1" stroke="#ffffff" stroke-width="1"/>
        <polygon points="74,31 122,7 122,31" fill="#15803d"/>
        <line x1="74" y1="31" x2="122" y2="7" stroke="#facc15" stroke-width="2.6"/>
        <!-- Treaty seal on right -->
        <rect x="134" y="7" width="48" height="36" rx="3" fill="#ffffff" stroke="#1e3a5f" stroke-width="1.3"/>
        <line x1="141" y1="15" x2="175" y2="15" stroke="#94a3b8" stroke-width="1.6"/>
        <line x1="141" y1="22" x2="170" y2="22" stroke="#94a3b8" stroke-width="1.6"/>
        <circle cx="166" cy="33" r="6" fill="#0f766e"/>
        <path d="M163 33 L165.2 35.3 L169.5 30.8" fill="none" stroke="#ffffff" stroke-width="1.6"/>
      `;
      break;

    case 'dhaka':
      scene = `
        <rect width="192" height="56" fill="#ebf6ee"/>
        <!-- Sewing machine silhouette above pill -->
        <rect x="14" y="25" width="54" height="6.5" rx="1.5" fill="#1b634b"/>
        <path d="M58 25 V11 H25 V19 H33" fill="none" stroke="#1b634b" stroke-width="4.8" stroke-linejoin="round"/>
        <!-- Wage jump bars cleanly clear of TK 17,000 pill -->
        <rect x="104" y="28" width="32" height="20" rx="2" fill="#d97706"/>
        <text x="120" y="24" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="8.4" font-weight="900" fill="#92400e">12.5k</text>
        <rect x="142" y="14" width="44" height="34" rx="2" fill="#15803d"/>
        <text x="164" y="11" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="9.2" font-weight="900" fill="#15803d">+36%</text>
        <text x="164" y="35" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="11" font-weight="900" fill="#ffffff">17k</text>
      `;
      break;

    case 'bogor':
      scene = `
        <rect width="192" height="56" fill="#dde7f0"/>
        <path d="M22 4 L18 14 M48 4 L44 14 M74 4 L70 14 M100 4 L96 14" stroke="#2563eb" stroke-width="1.8"/>
        <rect x="0" y="19" width="192" height="37" fill="#7c5d3d"/>
        <rect x="0" y="16" width="192" height="5" fill="#4d7c0f"/>
        <rect x="30" y="19" width="22" height="37" fill="#1d4ed8"/>
        <rect x="86" y="19" width="22" height="37" fill="#1d4ed8"/>
        <rect x="30" y="34" width="78" height="14" fill="#2563eb"/>
        <text x="184" y="32" text-anchor="end" font-family="'Noto Sans', sans-serif" font-size="11.5" font-weight="900" fill="#fef08a">17 TRAPPED</text>
        <text x="184" y="45" text-anchor="end" font-family="'Noto Sans', sans-serif" font-size="9.2" font-weight="800" fill="#e2e8f0">100m SHAFTS</text>
      `;
      break;

    case 'gaza':
      scene = `
        <rect width="192" height="56" fill="#ebe3d5"/>
        <rect x="0" y="45" width="192" height="11" fill="#3b6e94"/>
        <rect x="14" y="25" width="20" height="20" fill="#cbd5e1" stroke="#64748b" stroke-width="1"/>
        <rect x="38" y="19" width="24" height="26" fill="#d6d3d1" stroke="#64748b" stroke-width="1"/>
        <rect x="128" y="22" width="24" height="23" fill="#d6d3d1" stroke="#64748b" stroke-width="1"/>
        <rect x="156" y="28" width="22" height="17" fill="#cbd5e1" stroke="#64748b" stroke-width="1"/>
        <circle cx="94" cy="20" r="14" fill="#475569" opacity="0.72"/>
        <circle cx="106" cy="12" r="11" fill="#64748b" opacity="0.62"/>
        <polygon points="84,45 94,25 106,45" fill="#ea580c"/>
        <polygon points="89,45 95,32 101,45" fill="#facc15"/>
      `;
      break;

    case 'ramaphosa':
      scene = `
        <rect width="192" height="56" fill="#f2ece0"/>
        <!-- High Court facade & columns sitting cleanly above pill -->
        <polygon points="14,16 68,4 122,16" fill="#8b6b42"/>
        <rect x="20" y="16" width="96" height="18" fill="#ffffff" stroke="#8b6b42" stroke-width="1.2"/>
        <path d="M35 16 V34 M52 16 V34 M68 16 V34 M84 16 V34 M101 16 V34" stroke="#c8b392" stroke-width="3"/>
        <!-- Bold VOIDED stamp on right -->
        <rect x="122" y="9" width="62" height="24" rx="3" fill="#15803d" stroke="#ffffff" stroke-width="1.3"/>
        <text x="153" y="25" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="10.8" font-weight="900" fill="#ffffff">VOIDED</text>
      `;
      break;

    case 'netanyahu':
      scene = `
        <rect width="192" height="56" fill="#ede9df"/>
        <!-- 3 case folders: 1000, 2000, 4000 -->
        <rect x="20" y="12" width="44" height="28" rx="2" fill="#cbd5e1" stroke="#475569" stroke-width="1.2"/>
        <text x="42" y="29" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="10" font-weight="900" fill="#334155">1000</text>
        <rect x="74" y="12" width="44" height="28" rx="2" fill="#cbd5e1" stroke="#475569" stroke-width="1.2"/>
        <text x="96" y="29" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="10" font-weight="900" fill="#334155">2000</text>
        <rect x="128" y="8" width="52" height="32" rx="2" fill="#991b1b" stroke="#ffffff" stroke-width="1.4"/>
        <text x="154" y="23" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="11" font-weight="900" fill="#ffffff">4000</text>
        <text x="154" y="34" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="7.8" font-weight="900" fill="#fef08a">DROP?</text>
      `;
      break;

    case 'cairo':
      scene = `
        <rect width="192" height="56" fill="#2d1f1b"/>
        <!-- Ring road + tanker truck engulfed in bright flames -->
        <rect x="0" y="42" width="192" height="14" fill="#475569"/>
        <line x1="8" y1="49" x2="184" y2="49" stroke="#f8fafc" stroke-width="1.3" stroke-dasharray="10,7"/>
        <rect x="24" y="28" width="60" height="13" rx="5" fill="#dc2626" stroke="#fca5a5" stroke-width="1.1"/>
        <rect x="84" y="31" width="16" height="10" rx="2" fill="#94a3b8"/>
        <path d="M98 42 Q112 4 128 32 Q142 6 156 34 Q168 12 180 42 Z" fill="#f97316"/>
        <path d="M108 42 Q122 16 136 42 Q150 18 166 42 Z" fill="#fef08a"/>
      `;
      break;
  }

  // Clean bottom-left number circle + high-contrast stat pill (crisp at 300px, never muddy)
  const pillW = Math.max(46, Math.min(118, pill.length * 6.4 + 12));
  const badgeOverlay = `
    <circle cx="13" cy="43" r="9.2" fill="${regionColor}" stroke="#ffffff" stroke-width="1.3"/>
    <text x="13" y="46.4" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="9.5" font-weight="900" fill="#ffffff">${num}</text>
    <rect x="25" y="35" width="${pillW}" height="15.5" rx="2.5" fill="#0f172a" opacity="0.90"/>
    <text x="${25 + pillW / 2}" y="45.6" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="8.6" font-weight="900" fill="#ffffff">${pill}</text>
  `;

  return `<svg viewBox="0 0 192 56" width="192" height="56" xmlns="http://www.w3.org/2000/svg">${scene}${badgeOverlay}</svg>`;
}

export function renderWorldMap(leads, secondaries, briefs, regionColorMap) {
  // Clean editorial world map (262x128) with 13 collision-free pins + brief dots
  const continents = `
    <path d="M12,20 L28,14 L50,13 L72,16 L82,23 L77,30 L83,36 L74,45 L67,53 L58,56 L54,63 L49,64 L44,56 L37,49 L31,40 L20,33 Z" fill="#dad2c3" stroke="#bfb5a3" stroke-width="0.7"/>
    <path d="M84,8 L104,8 L107,16 L97,22 L87,18 Z" fill="#dad2c3" stroke="#bfb5a3" stroke-width="0.7"/>
    <path d="M62,60 L71,60 L72,63 L63,63 Z" fill="#dad2c3"/>
    <path d="M62,67 L74,66 L86,74 L97,83 L95,94 L86,104 L78,114 L71,121 L67,114 L67,99 L62,84 L58,75 Z" fill="#dad2c3" stroke="#bfb5a3" stroke-width="0.7"/>
    <path d="M115,27 L120,26 L121,33 L116,34 Z" fill="#dad2c3" stroke="#bfb5a3" stroke-width="0.6"/>
    <path d="M126,14 L140,13 L147,19 L141,26 L155,22 L161,30 L156,40 L145,44 L138,46 L131,41 L123,44 L117,43 L118,36 L124,33 L127,24 Z" fill="#dad2c3" stroke="#bfb5a3" stroke-width="0.7"/>
    <path d="M115,50 L130,47 L144,50 L152,60 L159,70 L156,82 L148,100 L140,113 L133,110 L129,91 L125,76 L114,69 L111,59 Z" fill="#dad2c3" stroke="#bfb5a3" stroke-width="0.7"/>
    <path d="M156,92 L160,90 L159,101 L155,101 Z" fill="#dad2c3" stroke="#bfb5a3" stroke-width="0.5"/>
    <path d="M155,18 L185,14 L218,16 L242,24 L239,35 L228,40 L225,50 L218,60 L207,67 L200,73 L194,68 L187,62 L181,70 L175,63 L167,58 L158,67 L150,64 L147,53 L154,46 L158,34 Z" fill="#dad2c3" stroke="#bfb5a3" stroke-width="0.7"/>
    <path d="M231,40 L236,39 L234,49 L229,50 Z" fill="#dad2c3" stroke="#bfb5a3" stroke-width="0.6"/>
    <path d="M200,79 L219,83 L218,87 L199,83 Z" fill="#dad2c3" stroke="#bfb5a3" stroke-width="0.6"/>
    <path d="M220,66 L225,67 L224,75 L219,74 Z" fill="#dad2c3"/>
    <path d="M206,94 L224,91 L236,98 L236,110 L224,114 L209,110 L204,102 Z" fill="#dad2c3" stroke="#bfb5a3" stroke-width="0.7"/>
    <path d="M244,109 L250,106 L251,116 L245,118 Z" fill="#dad2c3" stroke="#bfb5a3" stroke-width="0.6"/>
    <circle cx="243" cy="84" r="3" fill="#dad2c3" stroke="#bfb5a3" stroke-width="0.5"/>
  `;

  const dots = briefs
    .filter((b) => b.dot)
    .map(
      (b) =>
        `<circle cx="${b.dot.x}" cy="${b.dot.y}" r="2.2" fill="${regionColorMap[b.region]}" opacity="0.68" stroke="#fbf8f2" stroke-width="0.5"/>`
    )
    .join('');

  const featured = [...leads, ...secondaries];
  const pins = featured
    .map((s) => {
      const col = regionColorMap[s.region];
      return `<g class="map-pin" data-num="${s.num}" data-x="${s.map.x}" data-y="${s.map.y}">
        <circle cx="${s.map.x}" cy="${s.map.y}" r="7.0" fill="${col}" stroke="#ffffff" stroke-width="1.2"/>
        <text x="${s.map.x}" y="${s.map.y + 2.9}" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="7.8" font-weight="900" fill="#ffffff">${s.num}</text>
      </g>`;
    })
    .join('');

  return `<svg id="world-map" viewBox="0 0 262 128" width="262" height="128" xmlns="http://www.w3.org/2000/svg">
    <rect width="262" height="128" rx="3" fill="#eef2f6" stroke="#d9d1c3" stroke-width="1"/>
    <line x1="0" y1="64" x2="262" y2="64" stroke="#d5dfe8" stroke-width="0.7" stroke-dasharray="2,3"/>
    ${continents}
    ${dots}
    ${pins}
  </svg>`;
}
