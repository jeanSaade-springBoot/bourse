# Yield layout correction v3.1

Apply over the installed v3.0 performance overlay. Extract at the project root, rebuild/restart normally, then hard-refresh the browser.

Runtime change: src/main/resources/static/js/chart.js only.

The daily single-series Yield adapter now applies consistent rotated-date label space on initial rendering, date navigation and formatting updates. It sets matching minimum and maximum label heights based on the configured font, keeps the existing outer chart height and places the non-floating legend at the bottom with zero vertical offset. Date mapping, weekend compression, markers, numeric formatting and padding observations are preserved.

Confirm `window.bourseChartPerformanceVersion` returns `3.1`.

Passed: JavaScript syntax and the included regression suite (`node tools/chart-performance-regression.cjs` from the project root). New checks cover navigation, font changes, label-height consistency, outer height and legend placement. These are option-level tests with a chart mock; visual verification in the running application is still required. Try navigating backward/forward several times and changing the font size, then check that dates and legend no longer overlap.

This overlay does not change the scope of the performance logging: `bourseChartLastPerformance` still reports batched updates, not every navigation update.
