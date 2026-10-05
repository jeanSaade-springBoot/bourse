Bourse square-marker fix 3.11

Replace src/main/resources/static/js/apexcharts.js, deploy, then Ctrl+F5.
Confirm: BOURSE MARKER FIX 3.11 loaded; stage diagnostics retained

Based on bourse(5).zip plus our 3.10 diagnostic overlay.
One behavioral implementation change: drawRectMarker now calls Paper.rect(0, 0)
instead of Paper.rect(). SVG.js rect() invokes size(); missing dimensions cause
size() to call bbox() on the just-inserted rectangle. Explicit dimensions avoid
this read. Existing attributes immediately assign the original dimensions,
position, rotation, stroke, opacity and radius exactly as before.
All charts using this shared square-marker method receive this correction.
No marker removal, sampling, data, date, event or scheduling changes.

Evidence: uploaded 20260930-151609 capture, largest update:
3628 points; create 2453.9 ms; drawRectMarker 1803.9 ms over 3950 calls;
marker event registration 47.8 ms; total updateOptions 2755.9 ms.
The profiler measured the rectangle method, not bbox separately; the bbox
fallback was identified by tracing the shipped SVG.js implementation.

Validation: JavaScript syntax and extracted-method checks for unchanged final
attributes and returned object across default, zero, positive, negative-size
and styled cases. Browser visual/performance validation remains outstanding.
Diagnostics remain enabled for comparison. Repeat the same date expansion
and send BOURSE RENDER STAGES plus the existing updateOptions timings.
The shared renderer banner stays 3.8 and phase reports stay 3.10-diagnostic;
the separate BOURSE MARKER FIX 3.11 banner confirms this correction is loaded.

Rollback: restore apexcharts.js from the 3.10 diagnostic overlay.
