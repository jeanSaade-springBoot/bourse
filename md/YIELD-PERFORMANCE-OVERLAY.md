# v2.3 weekend compression

Apply beside pom.xml, rebuild/restart and Ctrl+F5. Test page heading: v2.3 — weekends compressed.

Replaces calendar-time X coordinates with consecutive observation slots, so Friday to Monday has the same width as adjacent weekdays. Original dates are retained in tradingDate and formatted on the axis. Weekend rows are excluded; missing weekdays without rows also occupy no space. Existing weekday null rows remain null. Right padding continues to use business days. Data values, markers, fonts, colors and numeric formats are unchanged. Zoom/pan operates on slot positions and the label formatter maps to original dates.

All modes use the compressed axis; A preserves string Y values and B/C/D use numeric Y values. Prior calendar-axis timings are not equivalent benchmarks. No production source or vendor changes.

Validation: syntax plus Friday/Monday spacing, weekend exclusion, original-date labels, null preservation, padding and equal A/B slot mapping. Full browser appearance, zoom/pan and performance require checking the deployed test. Compare identical From/To dates on both pages; the supplied screenshots appear to begin on different dates.
