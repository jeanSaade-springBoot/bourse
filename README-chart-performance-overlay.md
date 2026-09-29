# Bourse chart performance overlay v3.0

Built against the supplied `bourse(1).zip`, retaining the Yield API diagnostic overlay.
Apply the files to the project root containing `pom.xml`. This archive contains changed/new files only.
The existing `/bourse/yield-performance-test` remains available if its previous overlay is installed.

## Changes

- Daily single-series, non-function Yield uses consecutive weekday slots, matching the working test's weekend compression. Original dates remain on each point and in X-axis labels/tooltips. Font/color/marker changes keep that axis; type changes retain the zoom range.
- The shared loaders assemble complete options before calling ApexCharts once. Six single-series branches replace three updates with one; fourteen compatible comparison/function branches replace two updates with one.
- Eighteen compatible branches across the Any2, FX/CDS, liquidity, metals, volume, crypto, long-end implied volatility, skews, STI and US jobs comparison scripts also batch their options.
- Standard and volume appearance controls combine type and formatting into one update.
- Configured markers remain enabled when requested. Color, transparency, chart type, grid, legend, Y-axis format and tooltip format are retained. The shared missing-date helper now respects the configured X-axis font instead of forcing 12px.
- The customized ApexCharts gradient destination remains a scalar color string. The bundled ApexCharts file is not replaced.
- New console measurements report rendering time, time through two animation frames, point count, marker size and SVG node count. Existing Yield API request/response capture remains in place.

## Scope

Only daily, non-function, single-series Yield receives the new numeric date mapping. Comparison/function/aggregated-period charts retain their existing date alignment and axis logic. Crypto retains its existing seven-day calendar. No downsampling or automatic marker removal is introduced.

Batching applies to the compatible branches described above, not every renderer in the application. Specialized threshold/annotation, trendline, split-chart, candle and other standalone paths keep their existing loading behavior. The Any2 mixed-frequency data alignment is unchanged; each series is not independently compressed.

## Install and confirm the version

1. Back up the corresponding files, then extract this overlay into the project root, allowing replacement.
2. Rebuild/restart using the application's normal deployment process so fingerprinted JavaScript URLs are regenerated.
3. Hard-refresh the browser. The console must show `BOURSE CHART PERFORMANCE v3.0 loaded`. You can also evaluate `window.bourseChartPerformanceVersion`; it must be `3.0`.
4. Open the production Yield page `/bourse/sovereignyieldsgraph`, not only the test route. Use the same USA 30Y dates and parameters as the benchmark. Keep the marker setting identical when comparing times.
5. After the data loads, copy `JSON.stringify(window.bourseChartLastPerformance)` or the `BOURSE CHART PERFORMANCE` console line. For the optimized Yield branch, `axis` must be `trading-day slots`.

`renderCompleteMs` measures the batched chart update, excluding the API request. `afterPaintMs` also includes two animation frames; it is not an end-to-end network measurement. The historic cumulative Yield timer is not comparable to a single new render. Markers can still materially increase rendering time.

## Verification

Run from the project root:

```sh
node tools/chart-performance-regression.cjs
```

Passed locally: JavaScript syntax checks for all 12 changed runtime files; regression checks for one-update rendering, marker/font/format preservation, scalar gradient configuration, weekend compression, original dates, weekday nulls, zero/negative values, reloads, type/zoom controls, unsupported-date fallback, unchanged non-Yield calendars, mixed comparisons and one/two Y axes.

These tests exercise option assembly and date mapping using an ApexCharts mock. A live application/browser visual and performance run was not available here. Check date navigation, zoom/reset, font/marker/type/color/transparency/grid/legend controls and representative comparison/function/crypto charts after applying the overlay. No new production timing is claimed before that run.

## Rollback

Restore the backed-up files, rebuild/restart, and hard-refresh.
