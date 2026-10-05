# Bourse chart performance v3.3 overlay

Apply over v3.2, preserving the paths in this ZIP. Rebuild/restart using your usual asset build so the fingerprinted chart JavaScript is regenerated, then hard-refresh. Console must say BOURSE CHART PERFORMANCE v3.3 loaded.

Changes:
- getGraphData installs the shared date-slot adapter for daily, non-function fxcds, metals, sti and volume charts (including two-series comparisons).
- All series share a date union; missing observations stay null. Market charts remove empty weekend placeholders but retain genuine weekend observations. The STI cryptos screen retains all weekend rows.
- Liquidity (including mixed daily/weekly ECB), aggregated and function charts retain their date semantics; their updateOptions calls are timed and run without animation.
- Yield v3.2 behavior is retained. Existing fonts, markers, colors, grid, legends and numeric formatters are retained; no sampling or automatic marker removal.
- Single-series/function padding completes before the getGraphData draw.
- Navigation and scale changes refresh window.bourseChartLastPerformance.

This ZIP contains chart.js and the regression script plus this README. chartConfig.js scale/navigation changes from v3.2 are required and remain unchanged. Other loaders such as getGraphDataCrypto and getGraphDataWithFactor are not newly adapted by this release.

Verification: node --check src/main/resources/static/js/chart.js and node tools/chart-performance-regression.cjs pass. Tests use mock charts, not a live browser; no new speed claim is made.

Client check: open a daily market chart with one then two series, navigate to a long range, switch one/two scales, change fonts/markers, and inspect date labels/tooltips and flags. Repeat crypto weekend dates and the ECB mixed-frequency comparison. After each operation, copy JSON.stringify(window.bourseChartLastPerformance) from the browser console. Keep markers enabled when comparing timings.
