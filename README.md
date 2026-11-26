# news-image-20261125

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/NaufalDzz/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/NaufalDzz/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

One-page editorial world-news broadsheet summing up **Wednesday 25 November 2026** in a single `1024×1024` PNG: **50 date-verified stories across 10 regions and 21 fields** (North America, Latin America, Europe, Middle East, North Africa, Sub-Saharan Africa, South Asia, East & SE Asia, Oceania, and Global), engineered for instant 300px thumbnail legibility and full-resolution editorial depth — 3 full-width hero leads (`18.6px` serif headlines), 10 crisp `2×5` illustrated feature cards (`13.4px` serif headlines with high-contrast data callouts), 5 large tabular key numbers, a proportional 10-region bar + 21-field index, a slim UTC chronology (`00:18–21:00 UTC`), a collision-free world map with 13 numbered pins and 10-region legend, 37 crisp single-line briefs (`19+18`) flagging unverified single-side claims (`CLAIM`), and a strict `DATE CHECK` footer excluding adjacent days' news.

## Highlights
- **3 full-width hero leads (verified 25 Nov 2026 UTC):** USTR proposes Section 301 excess-capacity tariffs of up to `20%` on China, `15%` cap on the EU, Japan & South Korea, and 10 more economies (`14` total; hearings Jan 2027); renewed AI-spending doubts sink Asian semiconductor stocks (KOSPI `−6.16%` to `4,697.51`, SK hynix `−11.1%`, Samsung `−9.9%`, Taiex `−4.8%`, Nikkei `−2.8%`, SoftBank `~−15%`); and Pakistan Air Force pilot Muhammad Zeeshan Ali launches on Shenzhou-24 (`00:18 UTC`) and docks at China's Tiangong space station (`03:56 UTC`) as its first foreign astronaut.
- **10 `2×5` illustrated feature cards & 37 verified briefs across 10 regions and 21 fields:** Russian strikes killing `5` and cutting power across `5` Ukrainian regions (putting Zaporizhzhia nuclear plant on diesel backup); Saudi-led coalition downing `4` Houthi drones over Ras Tanura after Hodeidah strikes; UK Ofgem `+26%` energy price cap hike (`£1,723 → £2,166/yr` from 1 Jan); Solomon Islands & Australia signing an `A$740m` 10-year security pact barring foreign bases; Bangladesh raising entry-level garment wages `+36%` to `17,000 taka`; flooded West Java gold mine in Bogor leaving `9` dead and `17` trapped; Israeli strike in Gaza's Shati camp killing Hamas security chief Mohammed Abu al-Awf; Western Cape High Court voiding South Africa's `2022` 'Farmgate' panel report on President Ramaphosa; Jerusalem District Court judges urging prosecutors to drop bribery Case 4000 against PM Netanyahu; Cairo Ring Road fuel tanker fire killing at least `31` in Giza; plus `37` verified briefs spanning Samara Volga refineries, EU's Quantum Act & `€50bn` tech equity fund, Poundland entering administration (`11,000` jobs at risk), Met Police review, Eurostar & Athens strikes, Poland's planned Ukraine-border no-fly zone, Champions League `Sporting 2–2 Man Utd`, Ukraine's `CLAIM` on Savasleyka jets, Zelensky's `€115bn` 2027 aid request, Iran's unverified Hormuz tankers `CLAIM`, Knesset Oct 7 inquiry bill, Gaza winter shelter floods, Houthi Red Sea `CLAIM`, Benghazi naval strike aftermath, Nigeria's `$227m` `1.5t` Enugu meth bust, Sudan Blue Nile RSF drone strike, Ethiopia/WHO `11.3m`-child polio drive, Zimbabwe El Niño cattle drought, Karachi 6-storey collapse, India Supreme Court Rahul Gandhi ruling, Malaysia RM600m Google suit, Hong Kong `1.3m` URBTIX breach, FCC clearing SpaceX's `1m` orbital AI data-center satellites, US Q3 GDP `4.3%` & Dow `50,183` rebound, Iowa Army lead azide disposal, Ottawa defence-spending row, Cartagena Éxito hostage rescue, Brazil slamming US Embraer/sugar tariffs, Paraná floods, Brazil fiscal control law, Australian `4.9%` October CPI, Australia's `5%`-revenue online safety law, ESA Hera's Dimorphos DART crater imagery, `34` states + EU urging Russia at the OPCW to halt CS gas use, and the UN 16 Days of Activism launch (`47,000` women killed by partners or kin in 2025).
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
