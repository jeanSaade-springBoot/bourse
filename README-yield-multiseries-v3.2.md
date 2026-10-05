# Yield multi-series and scale performance — v3.2 overlay

Apply over the currently installed v3.1 performance/layout overlay. Extract into the project root, rebuild/restart using the usual deployment process, then hard-refresh.

Runtime files changed:
- src/main/resources/static/js/chart.js
- src/main/resources/static/js/bourse/graph/chartConfig.js

## Diagnosis

v3.1 installed the numeric trading-day axis only for a daily single-series Yield chart. Multiple-series charts still used the older axis. Unified navigation explicitly requested animation, and scale-only changes used the default animated update. The supplied log shows a 6,017 ms render for 4,316 points and repeated 4.7–7.5 second Y-axis updates.

## Changes

- Daily non-function Yield charts now use the optimized axis for all displayed series. All series share one sorted union of weekday dates. The same date always gets the same X position, even when countries have different holidays or missing observations.
- Missing observations are represented as null, not zero or carried-forward values. Existing point metadata, real values, series order, names, types, colors and marker settings are retained. No downsampling or automatic marker removal is introduced.
- The date arrays are aligned for shared tooltip lookup; configured tooltip formatting is guarded against null values. Duplicate/unsupported data falls back to the original axis instead of silently collapsing observations.
- Scale-only changes send only Y-axis options with redrawPaths=false, animate=false and updateSyncedCharts=false. The series, compressed date map, X range and layout are retained. ApexCharts still redraws the chart internally; this is not a zero-render shortcut.
- The second axis's formatter/settings are remembered per chart when entering one-scale mode, so they can be restored when switching back to two scales.
- Unified navigation/formatting updates are non-animated. The v3.1 font-aware label spacing and bottom legend layout remain in place.
- Yield navigation uses the shared date adapter for alignment, preserving the right-side all-null padding that the legacy aligner removed. Consequently the logged point/null counts can increase while real observation counts remain unchanged.
- Every Yield update now refreshes bourseChartLastPerformance, including navigation and scale-only updates. It includes sequence, operation, series count, point/null counts, marker setting, SVG node count, render time and time through two animation frames.

## Scope

The new date mapping applies to daily non-function Yield charts. Other asset calendars, mixed-frequency ECB comparisons and aggregated/function date mapping retain their existing logic. The shared unified update/scale handlers disable animation wherever those handlers are used. The actual Y-axis range calculations are unchanged.

## Verify the deployed version

In the browser console:

```javascript
window.bourseChartPerformanceVersion
```

It must return `3.2`.

Select the same two Yield series and date range used in the slow run. After navigation completes, then after switching 1 Scale / 2 Scales, copy the current report:

```javascript
copy(JSON.stringify(window.bourseChartLastPerformance))
```

For a daily Yield comparison, the report should identify `axis: "trading-day slots"` and `series: 2`. After a scale switch, `operation` should identify `scale-only update`. The console also prints each report as `BOURSE CHART PERFORMANCE ...`.

Compare renderCompleteMs for the same data/marker setting, rather than the cumulative timer. A larger point count can include alignment or padding nulls. No production speedup estimate is claimed before the new run.

## Validation completed

JavaScript syntax checks pass for both runtime files. Run the included regression suite from the project root:

```sh
node tools/chart-performance-regression.cjs
```

Passed checks cover single-series compatibility, two/six-series date alignment, differing holidays, missing/zero/negative values, right-side padding, input immutability, null-safe tooltips, mixed series types, configured markers/fonts/formats, zoom retention on cloned formatting updates, layout stability, duplicate fallback, the actual scale handler's flags and independent ranges, preservation of second-axis formatting, the actual navigation builder, and refreshed performance reports after navigation/scale changes.

The suite uses an ApexCharts mock to test data/options/call behavior. Live browser rendering, appearance and timing still need verification in the running application.

Rollback: restore the backed-up runtime files, rebuild/restart and hard-refresh.
