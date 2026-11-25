// Original vector editorial illustrations & crisp world map for Wednesday 25 November 2026.
// Zero badge-over-art overlap; bright airy light-paper palette engineered for 300px & 1024px clarity.

export function renderLeadIllustration(art) {
  switch (art) {
    case 'tiangong':
      return `<svg viewBox="0 0 326 102" width="326" height="102" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Shenzhou-24 liftoff and Tiangong docking">
        <defs>
          <linearGradient id="skySpace" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#dbeafe"/>
            <stop offset="38%" stop-color="#c7dcf2"/>
            <stop offset="40%" stop-color="#28466e"/>
            <stop offset="100%" stop-color="#1b3558"/>
          </linearGradient>
        </defs>
        <rect width="326" height="102" fill="url(#skySpace)"/>
        <!-- Left launch pad -->
        <rect x="0" y="87" width="128" height="15" fill="#d8cbb8"/>
        <path d="M16 87 L22 36 L32 36 L32 87 Z" fill="none" stroke="#64748b" stroke-width="1.5"/>
        <path d="M16 50 L32 50 M16 64 L32 64 M16 77 L32 77 M22 36 L32 50 M32 36 L22 50 M18 50 L32 64 M32 50 L18 64" stroke="#64748b" stroke-width="1"/>
        <ellipse cx="64" cy="89" rx="34" ry="11" fill="#f8fafc" opacity="0.93"/>
        <ellipse cx="48" cy="91" rx="17" ry="7" fill="#fde68a" opacity="0.82"/>
        <ellipse cx="80" cy="91" rx="17" ry="7" fill="#fde68a" opacity="0.82"/>
        <polygon points="56,70 72,70 68,89 60,89" fill="#f97316"/>
        <polygon points="59,70 69,70 66,85 62,85" fill="#fef08a"/>
        <!-- Long March 2F -->
        <rect x="57" y="34" width="14" height="36" rx="2" fill="#ffffff" stroke="#334155" stroke-width="1.2"/>
        <polygon points="57,34 64,21 71,34" fill="#dc2626"/>
        <rect x="51" y="48" width="6" height="21" rx="2" fill="#f1f5f9" stroke="#475569" stroke-width="1"/>
        <rect x="71" y="48" width="6" height="21" rx="2" fill="#f1f5f9" stroke="#475569" stroke-width="1"/>
        <rect x="60" y="41" width="8" height="4" fill="#1d4ed8"/>
        <line x1="128" y1="0" x2="128" y2="102" stroke="#fbf8f2" stroke-width="2.5"/>

        <!-- Right orbital Tiangong docking -->
        <circle cx="152" cy="24" r="1.2" fill="#fff" opacity="0.85"/>
        <circle cx="188" cy="28" r="1.4" fill="#fff" opacity="0.9"/>
        <circle cx="298" cy="28" r="1.2" fill="#fff" opacity="0.8"/>
        <circle cx="314" cy="44" r="1.1" fill="#fff" opacity="0.7"/>
        <path d="M128 90 Q228 69 326 92 L326 102 L128 102 Z" fill="#3b82f6" opacity="0.45"/>
        <path d="M128 93 Q228 73 326 95" fill="none" stroke="#93c5fd" stroke-width="1.8"/>
        <!-- Solar wings -->
        <rect x="150" y="29" width="52" height="11" rx="1" fill="#60a5fa" stroke="#e0f2fe" stroke-width="1"/>
        <rect x="150" y="65" width="52" height="11" rx="1" fill="#60a5fa" stroke="#e0f2fe" stroke-width="1"/>
        <rect x="242" y="29" width="52" height="11" rx="1" fill="#60a5fa" stroke="#e0f2fe" stroke-width="1"/>
        <rect x="242" y="65" width="52" height="11" rx="1" fill="#60a5fa" stroke="#e0f2fe" stroke-width="1"/>
        <line x1="176" y1="29" x2="176" y2="40" stroke="#1e3a5f" stroke-width="1"/>
        <line x1="176" y1="65" x2="176" y2="76" stroke="#1e3a5f" stroke-width="1"/>
        <line x1="268" y1="29" x2="268" y2="40" stroke="#1e3a5f" stroke-width="1"/>
        <line x1="268" y1="65" x2="268" y2="76" stroke="#1e3a5f" stroke-width="1"/>
        <!-- Station core & capsule -->
        <rect x="198" y="42" width="48" height="21" rx="4" fill="#f8fafc" stroke="#1e293b" stroke-width="1.4"/>
        <rect x="212" y="36" width="20" height="33" rx="3" fill="#e2e8f0" stroke="#1e293b" stroke-width="1.2"/>
        <circle cx="222" cy="52.5" r="4.8" fill="#0f172a"/>
        <rect x="246" y="46" width="24" height="13" rx="5" fill="#fef3c7" stroke="#1e293b" stroke-width="1.2"/>
        <!-- Flags -->
        <g transform="translate(268, 5)">
          <rect x="0" y="0" width="24" height="14" rx="1.5" fill="#046a38" stroke="#fff" stroke-width="0.8"/>
          <rect x="0" y="0" width="6.5" height="14" fill="#ffffff"/>
          <circle cx="15.5" cy="7" r="3.4" fill="#ffffff"/>
          <circle cx="16.8" cy="6.4" r="2.9" fill="#046a38"/>
          <rect x="28" y="0" width="24" height="14" rx="1.5" fill="#dc2626" stroke="#fff" stroke-width="0.8"/>
          <circle cx="34" cy="4.8" r="2.1" fill="#facc15"/>
          <circle cx="39" cy="3.3" r="0.8" fill="#facc15"/>
          <circle cx="40.5" cy="5.8" r="0.8" fill="#facc15"/>
          <circle cx="39.5" cy="8.4" r="0.8" fill="#facc15"/>
        </g>
        <!-- Crisp ribbons -->
        <rect x="6" y="5" width="114" height="15" rx="2" fill="#fbf8f2" opacity="0.95"/>
        <text x="11" y="15.8" font-family="'Noto Sans', sans-serif" font-size="9.2" font-weight="800" fill="#0f172a">LIFT-OFF 00:18 UTC</text>
        <rect x="135" y="5" width="114" height="15" rx="2" fill="#fbf8f2" opacity="0.95"/>
        <text x="140" y="15.8" font-family="'Noto Sans', sans-serif" font-size="9.2" font-weight="800" fill="#0f172a">DOCKED 03:56 UTC</text>
        <rect x="135" y="83" width="184" height="14" rx="2" fill="#0f172a" opacity="0.9"/>
        <text x="141" y="93.2" font-family="'Noto Sans', sans-serif" font-size="8.8" font-weight="700" fill="#f8fafc">SHENZHOU-24 · FIRST FOREIGN CREW</text>
      </svg>`;

    case 'chiprout':
      return `<svg viewBox="0 0 326 102" width="326" height="102" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Asian chip sell-off chart and market closes">
        <rect width="326" height="102" fill="#f4efe6"/>
        <rect x="6" y="5" width="160" height="92" rx="3" fill="#ffffff" stroke="#d6cec2" stroke-width="1"/>
        <line x1="12" y1="24" x2="160" y2="24" stroke="#e5e0d5" stroke-width="1" stroke-dasharray="3,2"/>
        <line x1="12" y1="45" x2="160" y2="45" stroke="#e5e0d5" stroke-width="1" stroke-dasharray="3,2"/>
        <line x1="12" y1="66" x2="160" y2="66" stroke="#e5e0d5" stroke-width="1" stroke-dasharray="3,2"/>
        <polygon points="14,15 38,21 62,18 84,35 106,43 128,56 156,70 156,77 14,77" fill="#fee2e2"/>
        <polyline points="14,15 38,21 62,18 84,35 106,43 128,56 156,70" fill="none" stroke="#dc2626" stroke-width="3.2" stroke-linejoin="round"/>
        <circle cx="156" cy="70" r="3.8" fill="#b91c1c"/>
        <g transform="translate(22, 42)">
          <rect x="4" y="4" width="22" height="22" rx="3" fill="#1e293b"/>
          <rect x="8" y="8" width="14" height="14" rx="1.5" fill="#fee2e2"/>
          <text x="15" y="18.5" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="9" font-weight="800" fill="#b91c1c">AI</text>
          <path d="M9,0 V4 M15,0 V4 M21,0 V4 M9,26 V30 M15,26 V30 M21,26 V30 M0,9 H4 M0,15 H4 M0,21 H4 M26,9 H30 M26,15 H30 M26,21 H30" stroke="#475569" stroke-width="1.5"/>
        </g>
        <rect x="6" y="77" width="160" height="20" rx="2" fill="#1e293b"/>
        <text x="14" y="90.5" font-family="'Noto Sans', sans-serif" font-size="10.2" font-weight="800" fill="#fca5a5">KOSPI</text>
        <text x="158" y="90.5" text-anchor="end" font-family="'Noto Sans', sans-serif" font-size="11.2" font-weight="800" fill="#ffffff">4,697.51 (−6.16%)</text>

        <rect x="172" y="5" width="148" height="92" rx="3" fill="#ffffff" stroke="#d6cec2" stroke-width="1"/>
        <rect x="172" y="5" width="148" height="17" rx="2" fill="#991b1b"/>
        <text x="180" y="17" font-family="'Noto Sans', sans-serif" font-size="9.2" font-weight="800" fill="#ffffff">WED CLOSE · CHIP ROUT</text>
        <g font-family="'Noto Sans', sans-serif" font-size="10.6" font-weight="700">
          <text x="180" y="36" fill="#1e293b">SK HYNIX</text>
          <text x="313" y="36" text-anchor="end" fill="#b91c1c">−11.05%</text>
          <line x1="178" y1="41" x2="314" y2="41" stroke="#ede7dd" stroke-width="1"/>
          <text x="180" y="53" fill="#1e293b">SAMSUNG</text>
          <text x="313" y="53" text-anchor="end" fill="#b91c1c">−9.87%</text>
          <line x1="178" y1="58" x2="314" y2="58" stroke="#ede7dd" stroke-width="1"/>
          <text x="180" y="70" fill="#1e293b">TAIEX</text>
          <text x="313" y="70" text-anchor="end" fill="#b91c1c">−4.80%</text>
          <line x1="178" y1="75" x2="314" y2="75" stroke="#ede7dd" stroke-width="1"/>
          <text x="180" y="88" fill="#1e293b">NIKKEI 225</text>
          <text x="313" y="88" text-anchor="end" fill="#b91c1c">−2.78%</text>
        </g>
      </svg>`;

    case 'tariffs':
      return `<svg viewBox="0 0 326 102" width="326" height="102" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="US Section 301 proposed tariffs container ship">
        <rect width="326" height="102" fill="#e6f0f7"/>
        <rect x="0" y="79" width="326" height="23" fill="#93b7d2"/>
        <path d="M0 86 Q28 82 56 86 T112 86 T168 86 T224 86 T280 86 T326 86" fill="none" stroke="#dbeafe" stroke-width="1.5"/>
        <polygon points="18,65 296,65 282,86 34,86" fill="#2c4a6b"/>
        <polygon points="28,79 288,79 282,86 34,86" fill="#b91c1c"/>
        <rect x="248" y="33" width="28" height="32" fill="#f8fafc" stroke="#334155" stroke-width="1.2"/>
        <rect x="253" y="39" width="18" height="6.5" fill="#38bdf8"/>
        <rect x="260" y="24" width="6" height="9" fill="#475569"/>
        <rect x="30" y="45" width="102" height="20" rx="2" fill="#b45309" stroke="#ffffff" stroke-width="1"/>
        <text x="81" y="58.5" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="10.2" font-weight="800" fill="#ffffff">VIETNAM 35%</text>
        <rect x="134" y="45" width="106" height="20" rx="2" fill="#0e7490" stroke="#ffffff" stroke-width="1"/>
        <text x="187" y="58.5" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="10.2" font-weight="800" fill="#ffffff">INDIA 25%</text>
        <rect x="44" y="24" width="94" height="20" rx="2" fill="#991b1b" stroke="#ffffff" stroke-width="1"/>
        <text x="91" y="37.5" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="10.2" font-weight="800" fill="#ffffff">CHINA 20%</text>
        <rect x="140" y="24" width="100" height="20" rx="2" fill="#2b547e" stroke="#ffffff" stroke-width="1"/>
        <text x="190" y="37.5" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="9.8" font-weight="800" fill="#ffffff">EU · JP · KR 15%</text>
        <rect x="8" y="4" width="166" height="15" rx="2" fill="#1e293b"/>
        <text x="14" y="15" font-family="'Noto Sans', sans-serif" font-size="9.2" font-weight="800" fill="#ffffff">USTR SEC. 301 · 14 ECONOMIES</text>
        <rect x="218" y="4" width="100" height="15" rx="2" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
        <text x="268" y="15" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="8.8" font-weight="800" fill="#92400e">HEARINGS JAN 2027</text>
      </svg>`;

    default:
      return '';
  }
}

export function renderSecondaryIllustration(art, badge) {
  // Every scene leaves top-left (x:0..98, y:0..17) completely clear for the crisp badge pill!
  let inner = '';
  switch (art) {
    case 'hodeidah':
      inner = `
        <rect width="194" height="50" fill="#f7eadb"/>
        <rect x="0" y="39" width="194" height="11" fill="#4f7ea6"/>
        <rect x="8" y="32" width="136" height="7" fill="#b69f84"/>
        <!-- Port cranes positioned cleanly below top-left badge -->
        <path d="M22 32 V20 H50 M27 32 L40 20" fill="none" stroke="#991b1b" stroke-width="2.2"/>
        <path d="M68 32 V20 H96 M73 32 L86 20" fill="none" stroke="#991b1b" stroke-width="2.2"/>
        <circle cx="122" cy="22" r="9" fill="#64748b" opacity="0.72"/>
        <circle cx="134" cy="15" r="10" fill="#475569" opacity="0.68"/>
        <circle cx="118" cy="29" r="5.5" fill="#ea580c"/>
        <circle cx="125" cy="30" r="4.5" fill="#facc15"/>
        <polygon points="158,10 180,14 162,17 166,13" fill="#1e293b"/>
      `;
      break;
    case 'hormuz':
      inner = `
        <rect width="194" height="50" fill="#e9eff5"/>
        <rect x="0" y="36" width="194" height="14" fill="#2b5f8a"/>
        <!-- Tanker 1 with flame/smoke clear of top-left badge -->
        <polygon points="14,32 88,32 82,40 20,40" fill="#334155"/>
        <rect x="22" y="25" width="11" height="7" fill="#f8fafc"/>
        <circle cx="71" cy="27" r="5.5" fill="#ea580c"/>
        <circle cx="77" cy="20" r="6" fill="#64748b" opacity="0.7"/>
        <!-- Tanker 2 -->
        <polygon points="112,32 180,32 174,40 118,40" fill="#334155"/>
        <rect x="163" y="25" width="11" height="7" fill="#f8fafc"/>
        <circle cx="137" cy="25" r="6.5" fill="#dc2626"/>
        <circle cx="141" cy="16" r="7.5" fill="#475569" opacity="0.7"/>
        <circle cx="99" cy="42" r="3.6" fill="#0f172a"/>
        <path d="M99 37 V47 M94 42 H104" stroke="#0f172a" stroke-width="1.3"/>
      `;
      break;
    case 'refineries':
      inner = `
        <rect width="194" height="50" fill="#ebe7e0"/>
        <rect x="0" y="40" width="194" height="10" fill="#94a3b8"/>
        <!-- Left refinery shifted cleanly clear of 2 REFINERIES badge -->
        <rect x="16" y="26" width="26" height="14" rx="3" fill="#cbd5e1" stroke="#475569" stroke-width="1.2"/>
        <rect x="78" y="21" width="9" height="19" fill="#64748b"/>
        <polygon points="78,21 82.5,12 87,21" fill="#f97316"/>
        <circle cx="90" cy="17" r="6.5" fill="#475569" opacity="0.62"/>
        <!-- Right refinery -->
        <rect x="122" y="23" width="26" height="17" rx="3" fill="#cbd5e1" stroke="#475569" stroke-width="1.2"/>
        <rect x="155" y="14" width="9" height="26" fill="#64748b"/>
        <polygon points="154,14 159.5,4 165,14" fill="#dc2626"/>
        <circle cx="167" cy="13" r="8" fill="#475569" opacity="0.65"/>
        <!-- Drone -->
        <path d="M107 14 L123 14 M115 10 L115 18" stroke="#1e293b" stroke-width="2"/>
      `;
      break;
    case 'ofgem':
      inner = `
        <rect width="194" height="50" fill="#f4efe4"/>
        <!-- House shifted cleanly below top-left badge -->
        <polygon points="16,32 34,20 52,32" fill="#b45309"/>
        <rect x="20" y="32" width="28" height="15" fill="#ffffff" stroke="#b45309" stroke-width="1.3"/>
        <path d="M34 35 C36.5 38 38 41 34 44 C30 41 31.5 38 34 35 Z" fill="#ea580c"/>
        <!-- Bill card completely clear to the right -->
        <rect x="64" y="6" width="122" height="39" rx="4" fill="#ffffff" stroke="#d97706" stroke-width="1.4"/>
        <text x="72" y="18" font-family="'Noto Sans', sans-serif" font-size="8.6" font-weight="700" fill="#64748b" text-decoration="line-through">£1,723 / YR</text>
        <text x="72" y="37" font-family="'Noto Sans', sans-serif" font-size="16" font-weight="900" fill="#b91c1c">£2,166</text>
        <text x="136" y="36" font-family="'Noto Sans', sans-serif" font-size="9" font-weight="800" fill="#b45309">/YR</text>
      `;
      break;
    case 'solomons':
      inner = `
        <rect width="194" height="50" fill="#dff0f5"/>
        <rect x="0" y="36" width="194" height="14" fill="#256d85"/>
        <!-- Island below badge -->
        <ellipse cx="34" cy="38" rx="25" ry="5.5" fill="#65a30d"/>
        <path d="M27 35 Q24 26 29 20 M29 20 Q20 19 17 24 M29 20 Q38 18 42 24" fill="none" stroke="#15803d" stroke-width="2"/>
        <!-- Treaty sheet completely clear in center-right -->
        <rect x="74" y="6" width="66" height="38" rx="3" fill="#ffffff" stroke="#1e3a5f" stroke-width="1.3"/>
        <text x="80" y="15.5" font-family="'Noto Sans', sans-serif" font-size="7.5" font-weight="900" fill="#1e3a5f">NO BASES</text>
        <line x1="80" y1="21" x2="132" y2="21" stroke="#64748b" stroke-width="1.5"/>
        <line x1="80" y1="27" x2="128" y2="27" stroke="#94a3b8" stroke-width="1.3"/>
        <line x1="80" y1="33" x2="116" y2="33" stroke="#94a3b8" stroke-width="1.3"/>
        <circle cx="128" cy="34" r="5.5" fill="#0e7490"/>
        <path d="M125.5 34 L127.5 36 L131 32" fill="none" stroke="#ffffff" stroke-width="1.5"/>
        <!-- Flags right -->
        <rect x="150" y="8" width="34" height="15" rx="1.5" fill="#1e3a8a"/>
        <circle cx="174" cy="15.5" r="2.2" fill="#ffffff"/>
        <rect x="150" y="27" width="34" height="15" rx="1.5" fill="#0369a1"/>
        <polygon points="150,42 184,27 184,42" fill="#15803d"/>
        <line x1="150" y1="42" x2="184" y2="27" stroke="#facc15" stroke-width="2.2"/>
      `;
      break;
    case 'auscpi':
      inner = `
        <rect width="194" height="50" fill="#eef4f7"/>
        <rect x="92" y="30" width="24" height="15" rx="2" fill="#94a3b8"/>
        <text x="104" y="27" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="8.2" font-weight="700" fill="#475569">4.0%</text>
        <rect x="124" y="23" width="24" height="22" rx="2" fill="#64748b"/>
        <text x="136" y="20" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="8.2" font-weight="700" fill="#334155">4.3%</text>
        <rect x="156" y="12" width="26" height="33" rx="2" fill="#b91c1c"/>
        <text x="169" y="10" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="8.8" font-weight="900" fill="#b91c1c">4.9%</text>
        <line x1="88" y1="36" x2="186" y2="36" stroke="#0e7490" stroke-width="1.3" stroke-dasharray="3,2"/>
        <rect x="8" y="22" width="72" height="23" rx="3" fill="#ffffff" stroke="#256d85" stroke-width="1.3"/>
        <text x="44" y="37.5" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="13.5" font-weight="900" fill="#0f172a">A$ CPI</text>
      `;
      break;
    case 'dhaka':
      inner = `
        <rect width="194" height="50" fill="#edf5ef"/>
        <!-- Sewing machine cleanly below badge -->
        <rect x="14" y="38" width="66" height="8" rx="2" fill="#1e6b52"/>
        <path d="M66 38 V23 H28 V31 H38" fill="none" stroke="#1e6b52" stroke-width="5.5" stroke-linejoin="round"/>
        <line x1="28" y1="31" x2="28" y2="37" stroke="#0f172a" stroke-width="1.8"/>
        <!-- Wage bars right -->
        <rect x="98" y="35" width="32" height="11" rx="2" fill="#d97706"/>
        <rect x="98" y="27" width="32" height="7" rx="2" fill="#f59e0b"/>
        <text x="114" y="23" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="7.8" font-weight="700" fill="#92400e">12.5k</text>
        <rect x="140" y="35" width="38" height="11" rx="2" fill="#15803d"/>
        <rect x="140" y="26" width="38" height="8" rx="2" fill="#16a34a"/>
        <rect x="140" y="17" width="38" height="8" rx="2" fill="#22c55e"/>
        <text x="159" y="13.5" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="10.2" font-weight="900" fill="#15803d">+36%</text>
      `;
      break;
    case 'bogor':
      inner = `
        <rect width="194" height="50" fill="#ece6db"/>
        <rect x="0" y="22" width="194" height="28" fill="#8b6b4a"/>
        <rect x="0" y="19" width="194" height="5" fill="#4d7c0f"/>
        <rect x="44" y="22" width="22" height="28" fill="#2563eb"/>
        <rect x="108" y="22" width="22" height="28" fill="#2563eb"/>
        <rect x="44" y="36" width="86" height="11" fill="#1d4ed8"/>
        <path d="M138 6 L134 15 M156 6 L152 15 M174 6 L170 15" stroke="#3b82f6" stroke-width="1.6"/>
        <text x="163" y="39" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="9.5" font-weight="800" fill="#fef3c7">100 m</text>
      `;
      break;
    case 'capetown':
      inner = `
        <rect width="194" height="50" fill="#f5efe4"/>
        <!-- Courthouse centered right of compact VOIDED badge -->
        <polygon points="62,21 122,7 182,21" fill="#7c2d12"/>
        <rect x="72" y="21" width="10" height="21" fill="#ffffff" stroke="#7c2d12" stroke-width="1.2"/>
        <rect x="100" y="21" width="10" height="21" fill="#ffffff" stroke="#7c2d12" stroke-width="1.2"/>
        <rect x="134" y="21" width="10" height="21" fill="#ffffff" stroke="#7c2d12" stroke-width="1.2"/>
        <rect x="162" y="21" width="10" height="21" fill="#ffffff" stroke="#7c2d12" stroke-width="1.2"/>
        <rect x="58" y="42" width="128" height="6" fill="#7c2d12"/>
        <!-- Gavel cleanly on left below badge -->
        <rect x="18" y="27" width="20" height="8" rx="1.5" fill="#b45309"/>
        <line x1="28" y1="35" x2="28" y2="46" stroke="#78350f" stroke-width="2.8"/>
      `;
      break;
    case 'cartagena':
      inner = `
        <rect width="194" height="50" fill="#edf3ea"/>
        <!-- Supermarket shifted cleanly below badge -->
        <rect x="30" y="20" width="134" height="27" rx="2" fill="#ffffff" stroke="#334155" stroke-width="1.3"/>
        <rect x="30" y="20" width="134" height="10" fill="#eab308"/>
        <text x="97" y="27.8" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="8.2" font-weight="900" fill="#0f172a">ÉXITO MARKET</text>
        <rect x="42" y="33" width="26" height="14" fill="#bae6fd"/>
        <rect x="84" y="33" width="26" height="14" fill="#38bdf8"/>
        <rect x="126" y="33" width="26" height="14" fill="#bae6fd"/>
        <circle cx="15" cy="38" r="5.5" fill="#1d4ed8"/>
        <circle cx="179" cy="38" r="5.5" fill="#dc2626"/>
      `;
      break;
  }

  const badgeW = Math.min(130, Math.max(42, Math.round(badge.length * 6.0 + 11)));
  return `<svg viewBox="0 0 194 50" width="194" height="50" xmlns="http://www.w3.org/2000/svg">
    ${inner}
    <rect x="4" y="4" width="${badgeW}" height="13.5" rx="2" fill="#0f172a" opacity="0.9"/>
    <text x="9" y="13.5" font-family="'Noto Sans', sans-serif" font-size="8.3" font-weight="800" fill="#ffffff">${badge}</text>
  </svg>`;
}

export function renderWorldMap(leads, secondaries, briefs, regionColorMap) {
  // Recognizable editorial continent silhouettes in 262x134 equirectangular projection
  const continents = `
    <!-- North America -->
    <path d="M14,22 L28,16 L50,15 L72,18 L82,25 L77,32 L83,38 L74,47 L67,55 L58,58 L54,65 L49,66 L44,58 L37,51 L31,42 L20,35 Z" fill="#d8d0c2" stroke="#bfb5a3" stroke-width="0.7"/>
    <!-- Greenland -->
    <path d="M84,9 L104,9 L107,18 L97,24 L87,20 Z" fill="#d8d0c2" stroke="#bfb5a3" stroke-width="0.7"/>
    <!-- Cuba & Caribbean -->
    <path d="M62,62 L71,62 L72,65 L63,65 Z" fill="#d8d0c2"/>
    <!-- South America -->
    <path d="M62,70 L74,69 L86,77 L97,86 L95,97 L86,108 L78,120 L71,126 L67,120 L67,104 L62,88 L58,78 Z" fill="#d8d0c2" stroke="#bfb5a3" stroke-width="0.7"/>
    <!-- UK & Ireland -->
    <path d="M116,30 L121,29 L122,36 L117,37 Z" fill="#d8d0c2" stroke="#bfb5a3" stroke-width="0.6"/>
    <!-- Europe & Scandinavia -->
    <path d="M126,15 L140,14 L147,20 L141,28 L155,24 L161,32 L156,42 L145,46 L138,48 L131,43 L123,46 L117,45 L118,38 L124,35 L127,26 Z" fill="#d8d0c2" stroke="#bfb5a3" stroke-width="0.7"/>
    <!-- Africa -->
    <path d="M115,52 L130,49 L144,52 L152,62 L159,73 L156,85 L148,103 L140,115 L133,112 L129,94 L125,79 L114,72 L111,61 Z" fill="#d8d0c2" stroke="#bfb5a3" stroke-width="0.7"/>
    <!-- Madagascar -->
    <path d="M156,96 L160,94 L159,105 L155,105 Z" fill="#d8d0c2" stroke="#bfb5a3" stroke-width="0.5"/>
    <!-- Arabia & Asia -->
    <path d="M155,20 L185,16 L218,18 L242,26 L239,37 L228,42 L225,52 L218,62 L207,69 L200,76 L194,70 L187,64 L181,73 L175,65 L167,60 L158,69 L150,66 L147,55 L154,48 L158,36 Z" fill="#d8d0c2" stroke="#bfb5a3" stroke-width="0.7"/>
    <!-- Japan -->
    <path d="M231,42 L236,41 L234,51 L229,52 Z" fill="#d8d0c2" stroke="#bfb5a3" stroke-width="0.6"/>
    <!-- Indonesia & Philippines -->
    <path d="M200,82 L219,86 L218,90 L199,86 Z" fill="#d8d0c2" stroke="#bfb5a3" stroke-width="0.6"/>
    <path d="M220,69 L225,70 L224,78 L219,77 Z" fill="#d8d0c2"/>
    <!-- Australia -->
    <path d="M206,98 L224,95 L236,102 L236,115 L224,119 L209,115 L204,107 Z" fill="#d8d0c2" stroke="#bfb5a3" stroke-width="0.7"/>
    <!-- New Zealand & Solomons -->
    <path d="M244,114 L250,111 L251,122 L245,124 Z" fill="#d8d0c2" stroke="#bfb5a3" stroke-width="0.6"/>
    <circle cx="243" cy="89" r="3" fill="#d8d0c2" stroke="#bfb5a3" stroke-width="0.5"/>
  `;

  const dots = briefs
    .filter((b) => b.dot)
    .map(
      (b) =>
        `<circle cx="${b.dot.x}" cy="${b.dot.y}" r="2.0" fill="${regionColorMap[b.region]}" opacity="0.58" stroke="#fbf8f2" stroke-width="0.5"/>`
    )
    .join('');

  const featured = [...leads, ...secondaries];
  const pins = featured
    .map((s) => {
      const col = regionColorMap[s.region];
      return `<g class="map-pin" data-num="${s.num}" data-x="${s.map.x}" data-y="${s.map.y}">
        <circle cx="${s.map.x}" cy="${s.map.y}" r="7.0" fill="${col}" stroke="#ffffff" stroke-width="1.3"/>
        <text x="${s.map.x}" y="${s.map.y + 2.9}" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="8.0" font-weight="800" fill="#ffffff">${s.num}</text>
      </g>`;
    })
    .join('');

  return `<svg id="world-map" viewBox="0 0 262 134" width="262" height="134" xmlns="http://www.w3.org/2000/svg">
    <rect width="262" height="134" rx="3" fill="#edf2f6" stroke="#d9d1c3" stroke-width="1"/>
    <line x1="0" y1="67" x2="262" y2="67" stroke="#d5dfe8" stroke-width="0.7" stroke-dasharray="2,3"/>
    ${continents}
    ${dots}
    ${pins}
  </svg>`;
}
