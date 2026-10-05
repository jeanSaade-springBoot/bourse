# ChartManager navigation v3.6

Apply over v3.5. Copy src/ into the project root, rebuild/restart and hard-refresh.
Confirm console: BOURSE CHART MANAGER v3.6 loaded.

Changes in ChartManager.loadData():
- 150 ms delay combines rapid selections before fetching.
- Aborts superseded requests and rejects stale responses even if abort is ignored.
- Serializes loads through their completed render; intermediate queued selections do not fetch or render.
- Copies request parameters so navigation cannot mutate in-flight request dates.
- Releases loading state on cancellation and errors. HTTP failures are reported.
- BOURSE CHART NAVIGATION logs request ID, selected dates and lifecycle.
- Rendering reports include the request ID and dates of the applied data.

Scope: standard ChartManager.loadData path, including chart1 in the supplied logs.
Legacy chart2 drawTechnicalGraph/loadDataWithOverlays is unchanged. An already-started
render is allowed to finish; the latest selection runs afterward. A single large
SVG render can still be slow. Markers, data history and calendar mapping are unchanged.

Validation: node syntax check; navigation, manager performance and live performance
regression scripts. Browser appearance and timing require the running application.

Run from project root:
node tools/chart-navigation-regression.cjs
node tools/chart-manager-performance-regression.cjs
node tools/chart-live-performance-regression.cjs

Browser check: click Year Back repeatedly, then stop. Only the latest queued range
should render. Look for superseded/cancelled entries and matching request IDs on
response/render records. Check final dates, scale toggles, markers and live updates.
copy(JSON.stringify({navigation:window.bourseChartNavigationPerformance,charts:window.bourseChartManagerPerformance}))
