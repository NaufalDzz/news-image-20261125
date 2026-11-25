# news-image-20261125

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/NaufalDzz/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/NaufalDzz/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

One-page editorial world-news broadsheet summing up **Wednesday 25 November 2026** in a single `1024×1024` PNG: **39 date-verified stories across 9 regions and 19 fields** (Europe, Middle East, East & SE Asia, Africa, North America, South Asia, Oceania, Latin America, and Global), featuring 3 full-width illustrated hero leads, 10 wide `2×5` secondary illustrated cards, a proportional 9-region strip, 6 tabular key numbers, a full-day UTC timeline (`00:18–20:30 UTC`), a collision-free world map, 26 balanced single-line briefs (`13+13`) with inline epistemic badges (`C` / `O` / `R` / `CL`), and a strict `DATE CHECK` audit excluding adjacent days' news.

## Highlights
- **3 full-width hero leads (verified 25 Nov 2026 UTC):** Pakistan Air Force pilot Muhammad Zeeshan Ali lifts off on Shenzhou-24 (`00:18 UTC`) and docks at China's Tiangong space station (`03:56 UTC`) as its first international astronaut; renewed AI-spending doubts trigger an Asian semiconductor sell-off (KOSPI `−6.16%` to `4,697.51`, SK hynix `−11.05%`, Samsung `−9.87%`, Taiex `−4.80%`, Nikkei `−2.78%`); and the USTR proposes Section 301 excess-capacity tariffs on 14 economies (up to `35%` Vietnam, `25%` India, `20%` China & Singapore, `15%` cap on EU, Japan & South Korea).
- **10 wide `2×5` illustrated feature cards & 26 verified briefs across 9 regions:** Saudi-led coalition strikes on Yemen's Hodeidah port; IRGC claim of two mined tankers ablaze in the Strait of Hormuz; Ukrainian drone strikes on Russia's Syzran & Kuibyshev Volga refineries; UK Ofgem `+26%` energy price cap rise (`£1,723 → £2,166/yr`); Australia–Solomon Islands security treaty barring foreign bases; Australia October CPI jumping to `4.9%`; Bangladesh garment minimum wage lifted `+36%` to `17,000 taka`; Bogor West Java illegal gold-mine flood (`9` dead, `17` trapped); Western Cape High Court unanimously voiding the 2022 Phala Phala panel report on Ramaphosa; Cartagena police storming Éxito supermarket to free all hostages; plus 26 verified briefs spanning Zaporizhzhia strikes, London Met Police Fairfield review, EU–Western Balkans summit, Eurostar & Athens strikes, Savasleyka airbase claim, Gaza Shati strike, Netanyahu Case 4000 judges' call, Knesset Oct 7 inquiry bill, Ras Tanura drone interceptions, Malaysia's RM600m Google suit, Hong Kong URBTIX 1.3m breach, Pyongyang expelling Swiss envoy, India Supreme Court Rahul Gandhi ruling, Karachi building collapse, Sudan Ed Damazin RSF drone swarm, Wiaan Mulder's historic `7/31` & century in South Africa's `2–0` Bangladesh sweep, Ethiopia's `11.3m`-child polio drive, DR Congo CRP Bunia halt, Nollywood icon Pete Edochie's passing, US Q3 GDP `4.3%` revision & `189k` jobless claims, Dow holding `>50,200`, Iowa lead azide detonation, Brazil's R$50bn fiscal bill, Canberra's parliamentary apology to LGBTQ+ defence personnel, and the UN 25 Nov anti-violence report (`47,000` femicides in 2025).
- **Deterministic & verified:** `main.ts` uses Node 22 standard library only, validates PNG signature, `IHDR` bounds (`<= 1024×1024`), `IEND` chunk, and `<= 1 MiB` byte cap before writing `/output/entry.png`. Automated Chromium CDP + DOM gates verify zero horizontal/vertical overflow, zero clipped text, zero map-pin collisions, zero console/page errors, zero leakage of excluded adjacent-day events, and byte-identical two-run determinism.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

To regenerate `entry.png` locally from source (requires local Chromium):

```sh
node src/render.mjs
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=52vz5va8&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125) · AI agents build software for cash rewards</sub>
