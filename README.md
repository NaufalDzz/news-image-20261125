# news-image-20261125

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/NaufalDzz/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/NaufalDzz/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

One-page editorial world-news broadsheet summing up **Wednesday 25 November 2026** in a single `1024×1024` PNG: **35 date-verified stories across 9 regions and 18 fields** (Europe, East & SE Asia, Middle East, Africa, North America, South Asia, Oceania, Latin America, and Global), engineered for instant 300px thumbnail legibility and full-resolution editorial depth — 3 full-width hero leads (`19.6px` serif headlines), 8 wide `2×4` illustrated feature cards (`15px` serif headlines, zero stamped corner stickers), 5 large tabular key numbers, a proportional 9-region strip, a collision-free world map paired with a UTC chronology (`00:18–20:30 UTC`), 24 crisp single-line briefs (`12+12`) with clean inline epistemic cues (`[C]` / `[O]` / `[R]` / `[CL]`), and a strict `DATE CHECK` footer excluding adjacent days' news.

## Highlights
- **3 full-width hero leads (verified 25 Nov 2026 UTC):** Pakistan Air Force pilot Muhammad Zeeshan Ali lifts off on Shenzhou-24 (`00:18 UTC`) and docks at China's Tiangong space station (`03:56 UTC`) as its first international astronaut; renewed AI-spending doubts trigger an Asian semiconductor sell-off (KOSPI `−6.16%` to `4,697.51`, SK hynix `−11.1%`, Samsung `−9.9%`, Taiex `−4.8%`, Nikkei `−2.8%`, SoftBank `~−15%`); and the USTR proposes Section 301 excess-capacity tariffs on 14 economies (up to `35%` Vietnam, `25%` India, `20%` China & Singapore, `15%` cap on EU, Japan & South Korea).
- **8 wide `2×4` illustrated feature cards & 24 verified briefs across 9 regions:** Cairo Ring Road fuel tanker fire killing at least `31` and injuring `21` in Al-Warraq, Giza; Saudi-led coalition strikes on Yemen's Hodeidah port; UK Ofgem `+26%` energy price cap rise (`£1,723 → £2,166/yr`); Bogor West Java flooded illegal gold mine (`9` dead, `17` trapped); Israeli pre-dawn strike in Gaza's Shati camp killing Hamas security chief Mohammed Abu al-Awf; Solomon Islands–Australia security treaty barring foreign bases; Bangladesh garment minimum wage lifted `+36%` to `17,000 taka`; Russian overnight strikes killing `5` and cutting power across `5` Ukrainian regions (putting Zaporizhzhia nuclear plant on diesel backup); plus 24 verified briefs spanning Samara Volga oil refinery drone strikes, London's Fairfield Met Police review, EU–Western Balkans summit, Eurostar & Athens strikes, Iran's unverified Hormuz mined-tankers claim, Jerusalem judges urging dropping Case 4000 bribery charges vs Netanyahu, Saudi Ras Tanura drone interceptions, Malaysia's RM600m Google suit, Hong Kong's 1.3m URBTIX hack, Pyongyang expelling the Swiss envoy, India Supreme Court voiding the Rahul Gandhi probe, Cape Town High Court voiding Ramaphosa's Phala Phala report, Sudan Ed Damazin RSF drone strike, Ethiopia & WHO's `11.3m`-child polio campaign, DR Congo CRP rebels halting their Bunia advance, US Q3 GDP `4.3%` revision & `189k` jobless claims, Dow topping `50,200`, Iowa Army lead azide detonation, Cartagena Éxito hostage rescue, Brazil's R$50bn fiscal package, Australia's `4.9%` October CPI, Earth topping `2°C` above pre-industrial levels for a 6th straight day, and the UN 25 Nov report on `47,000` women killed by partners or kin in 2025.
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
