# Bourse shared renderer v3.7

Apply over the current v3.6.1 installation. Copy src/ into your project root,
rebuild/restart and hard-refresh. The only changed production file is
src/main/resources/static/js/apexcharts.js (the customized existing vendor file).
Do not replace it with an upstream ApexCharts release.

Confirm console: BOURSE SHARED RENDERER v3.7 loaded
or window.bourseRendererVersion === '3.7'. ChartManager's separate version remains
3.6.1 and chart.js remains 3.3; those files are deliberately not replaced.

## Cause and change
The existing renderer thinned visible X-axis labels to roughly 10 or 25 but still
measured every label and created empty SVG text/title nodes for omitted labels.
This patch skips those measurements and empty nodes. It retains existing label
selection, positions, formatter calls, rotation, label counts used by grid logic,
and original category coordinates for annotations. Horizontal-bar inverse-axis
rendering is unchanged. No points, markers, paths, calendar rules or scale options
are removed or changed. No sampling or data aggregation is introduced.

## Coverage
81 active ApexCharts templates use /js/apexcharts.js. The separate graphtest.html
test page loads a CDN build and is not covered;
see tools/chart-renderer-coverage.json. The shared correction therefore applies to
getGraphData, Yield, Any2, ChartManager and legacy chart2 when using the standard
X-axis renderer, including line/area/bar/candlestick and multiple series.
Non-ApexCharts charts, the CDN test page and the horizontal-bar inverse-axis renderer are not modified.
The unused alternate graph/apexcharts.js and backup file are not replaced.

## Diagnostics
BOURSE SHARED RENDERER logs chart ID, operation, elapsed render completion time and
SVG counts (total/text/path/marker/X-axis label/empty label). These cover render,
updateOptions and updateSeries independently of the loader. Existing logs remain.
copy(JSON.stringify(window.bourseSharedRendererPerformance))

## Verification and limits
node --check src/main/resources/static/js/apexcharts.js
node tools/chart-shared-renderer-regression.cjs
144 cases compare actual before/after vendor axis functions: category, numeric,
datetime, narrow/wide, rotated/unrotated, small/large ranges and tick modes. Visible
label text/positions and label counts match. At 2,558 labels, axis text nodes fall
from 2,558 to at most 25. Tests verify annotation coordinates at omitted labels.
The reference fixture preserves the pre-patch functions for comparison.

Browser executable was unavailable here: no live visual validation or render-time
speedup is claimed. Test the same chart3 range, navigation, scale switches, zoom,
annotations, tooltips, bars and candlesticks. Large paths/markers may remain costly;
this fixes the verified invisible-label work rather than every possible bottleneck.

Rollback: restore the prior src/main/resources/static/js/apexcharts.js, rebuild
and hard-refresh. Navigation/live patches from earlier overlays remain unchanged.
