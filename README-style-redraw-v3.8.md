# Shared style redraw cleanup v3.8

Apply over v3.7. Copy src/ into your project root, rebuild/restart, hard-refresh.
Confirm BOURSE SHARED RENDERER v3.8 loaded or window.bourseRendererVersion.
Only production change: src/main/resources/static/js/apexcharts.js.

## Correction
The old killSVG cleanup visited descendants to remove listeners and stop animations,
then called ungroup() before clearing the SVG. Ungroup recursively calls toParent(),
which reads source/destination screenCTM matrices, reparents each element and applies
transforms. All of those elements are immediately discarded afterward.
The patch retains listener/animation cleanup, removes only the redundant ungroup,
and clears the existing tree directly. This applies to shared-renderer style updates,
chart-type changes, navigation, scale changes and live redraws.

Markers remain enabled according to user settings. No direct appearance shortcuts,
marker removal, sampling, detached-marker rewrite, data or calendar changes are included.
Normal ApexCharts configuration, tooltip, selection and export paths remain in use.
The earlier v3.7 label fix is included in this replacement vendor file.

Coverage: the 81 project templates loading /js/apexcharts.js, including main loaders,
Yield, Any2, ChartManager and legacy chart2. The CDN graphtest.html page is excluded.
Manager/chart.js version banners remain unchanged.

## Verification
node --check src/main/resources/static/js/apexcharts.js
node tools/chart-cleanup-regression.cjs
node tools/chart-shared-renderer-regression.cjs
Cleanup tests cover 0, 1, 100, 3268 and 10000 descendants. They verify listener cleanup,
animation stopping, one clear and zero ungroup operations. 144 previous axis cases pass.
Browser timing/visual verification is still required; no measured speedup is claimed.

Test marker-enabled chart3 on the same long range. Change line/area/bar, color,
transparency and marker size; verify tooltips and zoom/reset. Copy:
copy(JSON.stringify(window.bourseSharedRendererPerformance))
Each shared-renderer report includes cleanupMs (last SVG teardown) and total
renderCompleteMs. Initial renders generally have no teardown. Remaining render work
may still be expensive; these timings distinguish teardown from the complete update.

Rollback: restore /js/apexcharts.js from v3.7 and rebuild/hard-refresh.
