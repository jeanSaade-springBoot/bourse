# ChartManager live-update correction v3.5

Apply over v3.4 using the ZIP paths, rebuild assets and hard-refresh. Confirm BOURSE CHART MANAGER v3.5 loaded. This replaces chartManager.js only; main chart.js remains v3.3.

Fixes:
- chart3 ignores messages outside its selected currency pair and unchanged ratios.
- Empty charts and unchanged selected OHLC/volume/market-cap values skip redraws.
- The live message queue waits for padding and ApexCharts update promises. Live redraws are processed sequentially, with a 100ms browser yield between messages.
- Pending snapshots for the same currency and daily/4h candle timestamps are combined, keeping the most recently received snapshot. Distinct candle keys are retained. This is display coalescing, not historical downsampling.
- API loading defers the live queue until loadData completes or fails.
- Existing markers, dates, history, formatting and Y-axis formulas remain. The bundled ApexCharts is unchanged.

Diagnostics:
copy(JSON.stringify({charts:window.bourseChartManagerPerformance,live:window.bourseChartLivePerformance}))

Live counters: received, coalesced, unchanged, unrelated, empty, batches and pending. Batches count processed messages, not individual redraws. BOURSE LIVE PERFORMANCE is printed when the queue drains; the window object is refreshed after each processed message. Existing API time includes browser scheduling and JSON parsing; it is not server-only time.

Validation:
node --check src/main/resources/static/js/graph/chartManager.js
node tools/chart-manager-performance-regression.cjs
node tools/chart-live-performance-regression.cjs

Tests use mocked rendering and controlled asynchronous completion. They cover unrelated currencies, unchanged ratios, empty charts, latest same-candle replacement, different-candle retention, serial live processing, initial rendering, scale switching and candle/date preservation. Live browser validation is still required.

Limitation: this removes redundant work and prevents live messages from starting overlapping redraws. It does not make a single 5,796-point redraw intrinsically cheap, or serialize every external page-specific chart operation. Test the same long range and leave live updates running, then send diagnostics. Do not disable markers for the comparison.
