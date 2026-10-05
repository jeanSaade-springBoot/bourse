# ChartManager v3.6.1 — bounded navigation waits
Apply over v3.6; copy src into the project, rebuild/restart and hard-refresh.
Console banner: BOURSE CHART MANAGER v3.6.1 loaded.

v3.6 could leave the loading overlay active indefinitely when a preceding fetch or
ApexCharts update promise failed to settle. v3.6.1 adds cancellable 30-second waits
for previous loads, previous redraws and the current load/render operation. Timed-out
requests are invalidated and aborted; loading counters and the overlay are released.
The underlying operation remains a serialization barrier to prevent overlapping
renders. If it never settles, refresh the page before retrying. Browser timers cannot
interrupt synchronous JavaScript; this does not solve a long synchronous SVG render.

Logs: BOURSE CHART NAVIGATION includes waiting stages, timeout, fetch, response and
render start/complete. Copy the last entries if the screen still freezes.

Retains v3.6 latest-selection checks, parameter snapshots and navigation debounce.
Legacy chart2 loader unchanged. No changes to chart data, markers or calendar mapping.

Tests passed: navigation cancellation, stale responses, never-settling operations,
overlay cleanup, preserved serialization after timeout, recovery after settlement,
manager rendering/style regression and live-update regression. Live browser behavior
has not been verified. The cause of the user's particular freeze is not yet confirmed.

Run from project root:
node tools/chart-navigation-regression.cjs
node tools/chart-manager-performance-regression.cjs
node tools/chart-live-performance-regression.cjs
