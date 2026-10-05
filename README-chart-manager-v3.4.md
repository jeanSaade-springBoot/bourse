# ChartManager v3.4 overlay

Apply over your current v3.3 project, preserving ZIP paths. Rebuild/restart the application using your usual asset process, then hard-refresh. Confirm BOURSE CHART MANAGER v3.4 loaded in the browser console. chart.js remains v3.3; this version identifies chartManager.js only.

Changes:
- Standard ChartManager charts render populated/styled options once on initial load.
- Navigation reuses the existing ApexCharts instance instead of destroying, rendering, and styling it again.
- When only useDualYAxis changes followed by applyStyle(), update only yaxis without animations, series resubmission or X-axis changes. Calls that reload API data still use the data-update path.
- ChartManager updateOptions and updateSeries calls have per-instance timings and animations disabled.
- API requests log chart ID, URL, parameters and elapsed time through JSON parsing. Full responses are not logged.
- Existing dates, custom tooltips, markers, fonts, colors, annotations, candlestick arrays, intraday times and calendar rules are retained. No downsampling or weekday remapping is introduced here.
- Legacy chart2 delegation to updateSeriesChart remains; the delegated chart is instrumented. Its internal rendering is not rewritten.

Copy all latest chart reports after the slow operation:

copy(JSON.stringify(window.bourseChartManagerPerformance))

Reports include chartId, operation, series, points, nullPoints, marker, axis, svgNodes, apiMs, renderCompleteMs and afterPaintMs. apiMs is the most recent request for that instance; it is not an additional request during a scale/style update. afterPaintMs uses two animation frames and can include other charts/browser work.

Validation: node --check src/main/resources/static/js/graph/chartManager.js; node tools/chart-manager-performance-regression.cjs. Mock-based checks cover one initial render, navigation reuse, one/two-scale options, font changes, weekend/intraday dates, candlestick values and metrics. Live visual/performance validation remains necessary.

Check a long date range with two series, navigate backward, switch scales, change font and markers, then check candlestick/intraday and function charts. Send the logs with the chart/screen name. No measured speedup is claimed before these browser checks.
