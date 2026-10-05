# Legacy chart2 rendering queue v3.9
Apply over v3.8. Copy src/ into the project root, rebuild/restart and hard-refresh.
Confirm BOURSE LEGACY RENDER QUEUE v3.9 loaded. Shared renderer remains v3.8;
ChartManager remains v3.6.1.

Changed production file: src/main/resources/static/js/graph/trendlineManager.js.
The legacy drawTechnicalGraph path recreated chart2 and its setup, retracement and
relevant-overlay helpers called updateOptions without waiting for prior renders.
The chart instance now merges option calls pending in a 16ms window, waits for its
initial render, and serializes subsequent updates. Arrays replace prior arrays;
functions and nulls are preserved. Calls arriving during a render combine into the
next batch. Animations and synchronized chart redraws are disabled for this path.
updateSeriesChart now returns the render promise for ChartManager/live coordination.
Queued work is cancelled when its chart is destroyed. Existing data calculations,
markers, dates and overlay composition remain unchanged.

Scope: legacy chart2 using graph/trendlineManager.js. Shared v3.7/v3.8 improvements
remain active on other charts. This is not a new optimization of every loader.
Chart recreation and backend requests are unchanged; an already-running update is
not interruptible. Direct updateSeries/appendData paths are not intercepted.

Regression: node tools/chart-legacy-queue-regression.cjs
Tests: four updates merge to one, initial render ordering, no update overlap,
latest series/settings, callbacks/nulls, error recovery and destroy cancellation.
Node syntax check passed. Browser timing/visual checks are still required.

Reproduce the same navigation/style action. Look for BOURSE LEGACY RENDER with
mergedCalls and renderMs, then copy:
copy(JSON.stringify({legacy:window.bourseLegacyRenderPerformance,charts:window.bourseSharedRendererPerformance}))

The earlier overlapping update timings should not be added together. A single
remaining marker-heavy render can still be slow; this patch removes redundant work.
Rollback: restore graph/trendlineManager.js from before this overlay.
