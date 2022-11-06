/*
jQWidgets v13.1.0 (2021-Nov)
Copyright (c) 2011-2021 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */
(function(a) {
    a.jqx.jqxWidget("jqxTreeGrid", "jqxDataTable", {});
    a.extend(a.jqx._jqxTreeGrid.prototype, {
        defineInstance: function() {
            if (this.base) {
                this.base.treeGrid = this;
                this.base.exportSettings = {
                    recordsInView: false,
                    columnsHeader: true,
                    hiddenColumns: false,
                    serverURL: null,
                    characterSet: null,
                    collapsedRecords: false,
                    fileName: "jqxTreeGrid"
                }
            }
            var b = {
                pageSizeMode: "default",
                checkboxes: false,
                hierarchicalCheckboxes: false,
                icons: false,
                showSubAggregates: false,
                aggregatesPosition: "top",
                rowDetailsRenderer: null,
                virtualModeCreateRecords: null,
                virtualModeRecordCreating: null,
                loadingFailed: false
            };
            if (this === a.jqx._jqxTreeGrid.prototype) {
                return b
            }
            a.extend(true, this, b);
            return b
        },
        createInstance: function(b) {
            this.theme = this.base.theme;
            var c = this
        },
        deleteRow: function(b) {
            var c = this.base;
            c.deleterowbykey(b)
        },
        updateRow: function(b, d) {
            var c = this.base;
            c.updaterowbykey(b, d)
        },
        setCellValue: function(c, b, e) {
            var d = this.base;
            d.setCellValueByKey(c, b, e)
        },
        getCellValue: function(c, b) {
            var d = this.base;
            return d.getCellValueByKey(c, b)
        },
        lockRow: function(b) {
            var c = this.base;
            c.lockrowbykey(b)
        },
        unlockRow: function(b) {
            var c = this.base;
            c.unlockrowbykey(b)
        },
        selectRow: function(b) {
            var c = this.base;
            c.selectrowbykey(b)
        },
        unselectRow: function(b) {
            var c = this.base;
            c.unselectrowbykey(b)
        },
        ensureRowVisible: function(b) {
            var c = this.base;
            c.ensurerowvisiblebykey(b)
        },
        beginCellEdit: function(c, b) {
            var e = this.base;
            var d = e.getColumn(b);
            e.beginroweditbykey(c, d)
        },
        beginRowEdit: function(b) {
            var c = this.base;
            c.beginroweditbykey(b)
        },
        endCellEdit: function(c, b, e) {
            var d = this.base;
            d.endroweditbykey(c, e)
        },
        endRowEdit: function(b, d) {
            var c = this.base;
            c.endroweditbykey(b, d)
        },
        _showLoadElement: function() {
            var b = this.base;
            if (b.host.css("display") == "block") {
                if (b.autoShowLoadElement) {
                    a(b.dataloadelement).css("visibility", "visible");
                    a(b.dataloadelement).css("display", "block");
                    b.dataloadelement.width(b.host.width());
                    b.dataloadelement.height(b.host.height())
                }
            }
        },
        _hideLoadElement: function() {
            var b = this.base;
            if (b.host.css("display") == "block") {
                if (b.autoShowLoadElement) {
                    a(b.dataloadelement).css("visibility", "hidden");
                    a(b.dataloadelement).css("display", "none");
                    b.dataloadelement.width(b.host.width());
                    b.dataloadelement.height(b.host.height())
                }
            }
        },
        getKey: function(b) {
            if (b) {
                return b.uid
            }
        },
        getRows: function() {
            var b = this.base;
            if (b.source.hierarchy) {
                if (b.source.hierarchy.length != 0) {
                    return b.source.hierarchy
                }
            }
            return b.source.records
        },
        getCheckedRows: function() {
            var c = this.base;
            var d = c._names();
            var e = new Array();
            var b = function(j, g) {
                if (!g) {
                    return
                }
                for (var h = 0; h < g.length; h++) {
                    if (!g[h]) {
                        continue
                    }
                    var f = a.extend({}, g[h]);
                    var k = c.rowinfo[g[h].uid];
                    if (k && k[d.checked]) {
                        j.push(f)
                    } else {
                        if (f[d.checked]) {
                            j.push(f)
                        }
                    }
                    b(e, g[h].records)
                }
            };
            b(e, c.dataViewRecords);
            return e
        },
        getRow: function(d) {
            var e = this.base;
            var b = e.source.records;
            if (e.source.hierarchy) {
                var f = function(h) {
                    for (var j = 0; j < h.length; j++) {
                        if (!h[j]) {
                            continue
                        }
                        if (h[j].uid == d) {
                            return h[j]
                        }
                        if (h[j].records) {
                            var k = f(h[j].records);
                            if (k) {
                                return k
                            }
                        }
                    }
                };
                var g = f(e.source.hierarchy);
                return g
            } else {
                for (var c = 0; c < b.length; c++) {
                    if (!b[c]) {
                        continue
                    }
                    if (b[c].uid == d) {
                        return b[c]
                    }
                }
            }
        },
        _renderrows: function() {
            var N = this.base;
            var at = this;
            if (N._loading) {
                return
            }
            if (N._updating) {
                return
            }
            var J = N._names();
            if (N.source.hierarchy.length === 0 && !N.loadingFailed) {
                if (this.virtualModeCreateRecords) {
                    var an = function(c) {
                        if (c === false || (c && c.length == 0)) {
                            N._loading = false;
                            N.loadingFailed = true;
                            N.source.hierarchy = new Array();
                            at._hideLoadElement();
                            N._renderrows();
                            N._updateScrollbars();
                            N._arrange();
                            return
                        }
                        for (var j = 0; j < c.length; j++) {
                            c[j].level = 0;
                            at.virtualModeRecordCreating(c[j]);
                            N.rowsByKey[c[j].uid] = c[j]
                        }
                        N.source.hierarchy = c;
                        if (!N.source._source.hierarchy) {
                            N.source._source.hierarchy = {}
                        }
                        N._loading = false;
                        at._hideLoadElement();
                        N._renderrows();
                        N._updateScrollbars();
                        N._arrange()
                    };
                    N._loading = true;
                    this.virtualModeCreateRecords(null, an);
                    this._showLoadElement()
                }
            }
            if (N.rendering) {
                N.rendering()
            }
            var az = 0;
            N.table[0].rows = new Array();
            var aJ = N.toTP("jqx-cell") + " " + N.toTP("jqx-widget-content") + " " + N.toTP("jqx-item");
            if (N.rtl) {
                aJ += " " + N.toTP("jqx-cell-rtl")
            }
            var b = N.columns.records.length;
            var P = a.jqx.browser.msie && a.jqx.browser.version < 8;
            if (P) {
                N.host.attr("hideFocus", "true")
            }
            var v = new Array();
            var aG = function(s, w) {
                for (var aK = 0; aK < s.length; aK++) {
                    var c = s[aK];
                    if (!c) {
                        continue
                    }
                    var j = !N.rowinfo[c.uid] ? c.expanded : N.rowinfo[c.uid].expanded;
                    if (N.dataview.filters.length == 0) {
                        c._visible = true
                    }
                    if (c._visible !== false) {
                        if (j || c[J.leaf]) {
                            w.push(c);
                            if (c.records && c.records.length > 0) {
                                var aL = aG(c.records, new Array());
                                for (var x = 0; x < aL.length; x++) {
                                    w.push(aL[x])
                                }
                            }
                        } else {
                            w.push(c)
                        }
                    }
                }
                return w
            };
            var ap = N.source.hierarchy.length === 0 ? N.source.records : N.source.hierarchy;
            ap = N.dataview.evaluate(ap);
            N.dataViewRecords = ap;
            if (this.showSubAggregates) {
                var p = function(s, c) {
                    if (s != 0) {
                        if (c.length > 0) {
                            if (c[c.length - 1]) {
                                if (!c[c.length - 1].aggregate) {
                                    c.push({
                                        _visible: true,
                                        level: s,
                                        siblings: c,
                                        aggregate: true,
                                        leaf: true
                                    })
                                }
                            } else {
                                if (a.jqx.browser.msie && a.jqx.browser.version < 9) {
                                    if (c[c.length - 2]) {
                                        if (!c[c.length - 2].aggregate) {
                                            c.push({
                                                _visible: true,
                                                level: s,
                                                siblings: c,
                                                aggregate: true,
                                                leaf: true
                                            })
                                        }
                                    }
                                }
                            }
                        }
                    }
                    for (var j = 0; j < c.length; j++) {
                        if (c[j] && c[j].records) {
                            p(s + 1, c[j].records)
                        }
                    }
                };
                p(0, ap)
            }
            var aq = function(s) {
                var w = 0;
                var i = new Array();
                for (var c = 0; c < s.length; c++) {
                    var j = s[c];
                    if (j[J.level] == 0) {
                        w++
                    }
                    if (w > N.dataview.pagesize * N.dataview.pagenum && w <= N.dataview.pagesize * N.dataview.pagenum + N.dataview.pagesize) {
                        i.push(j)
                    }
                    if (w > N.dataview.pagesize * N.dataview.pagenum + N.dataview.pagesize) {
                        break
                    }
                }
                return i
            };
            if (N.source.hierarchy.length === 0) {
                if (N.dataview.pagesize == "all" || !N.pageable || N.serverProcessing) {
                    var al = ap;
                    if (N.pageable && N.serverProcessing && ap.length > N.dataview.pagesize) {
                        var al = ap.slice(N.dataview.pagesize * N.dataview.pagenum, N.dataview.pagesize * N.dataview.pagenum + N.dataview.pagesize)
                    }
                } else {
                    var al = ap.slice(N.dataview.pagesize * N.dataview.pagenum, N.dataview.pagesize * N.dataview.pagenum + N.dataview.pagesize)
                }
                var v = al
            } else {
                var ap = aG.call(N, ap, new Array());
                if (N.dataview.pagesize == "all" || !N.pageable) {
                    var al = ap
                } else {
                    var al = ap.slice(N.dataview.pagesize * N.dataview.pagenum, N.dataview.pagesize * N.dataview.pagenum + N.dataview.pagesize);
                    if (this.pageSizeMode == "root") {
                        al = aq(ap)
                    }
                }
                var v = al;
                var I = N.dataview.pagenum;
                N.updatepagerdetails();
                if (N.dataview.pagenum != I) {
                    if (N.dataview.pagesize == "all" || !N.pageable) {
                        var al = ap
                    } else {
                        var al = ap.slice(N.dataview.pagesize * N.dataview.pagenum, N.dataview.pagesize * N.dataview.pagenum + N.dataview.pagesize);
                        if (this.pageSizeMode == "root") {
                            al = aq(ap)
                        }
                    }
                    var v = al
                }
            }
            N.renderedRecords = v;
            var D = v.length;
            var aH = N.tableZIndex;
            var k = 0;
            var ar = 0;
            if (P) {
                for (var Q = 0; Q < b; Q++) {
                    var U = N.columns.records[Q];
                    var ax = U.width;
                    if (ax < U.minwidth) {
                        ax = U.minwidth
                    }
                    if (ax > U.maxwidth) {
                        ax = U.maxwidth
                    }
                    var aw = a('<table><tr><td role="gridcell" style="max-width: ' + ax + "px; width:" + ax + 'px;" class="' + aJ + '"></td></tr></table>');
                    a(document.body).append(aw);
                    var ah = aw.find("td");
                    k = 1 + parseInt(ah.css("padding-left")) + parseInt(ah.css("padding-right"));
                    aw.remove();
                    break
                }
            }
            var B = N.rtl ? " " + N.toTP("jqx-grid-table-rtl") : "";
            var y = "<table cellspacing='0' class='" + N.toTP("jqx-grid-table") + B + "' id='table" + N.element.id + "'><colgroup>";
            var X = "<table cellspacing='0' class='" + N.toTP("jqx-grid-table") + B + "' id='pinnedtable" + N.element.id + "'><colgroup>";
            var ac = null;
            for (var Q = 0; Q < b; Q++) {
                var U = N.columns.records[Q];
                if (U.hidden) {
                    continue
                }
                ac = U;
                var ax = U.width;
                if (ax < U.minwidth) {
                    ax = U.minwidth
                }
                if (ax > U.maxwidth) {
                    ax = U.maxwidth
                }
                ax -= k;
                if (ax < 0) {
                    ax = 0
                }
                if (P) {
                    var H = ax;
                    if (Q == 0) {
                        H++
                    }
                    X += "<col style='max-width: " + ax + "px; width: " + H + "px;'>";
                    y += "<col style='max-width: " + ax + "px; width: " + H + "px;'>"
                } else {
                    X += "<col style='max-width: " + ax + "px; width: " + ax + "px;'>";
                    y += "<col style='max-width: " + ax + "px; width: " + ax + "px;'>"
                }
                ar += ax
            }
            y += "</colgroup>";
            X += "</colgroup>";
            N._hiddencolumns = false;
            var r = false;
            if (D === 0) {
                var n = '<tr role="row">';
                var q = N.host.height();
                if (N.pageable) {
                    q -= N.pagerHeight;
                    if (N.pagerPosition === "both") {
                        q -= N.pagerHeight
                    }
                }
                q -= N.columnsHeight;
                if (N.filterable) {
                    var aC = N.filter.find(".filterrow");
                    var A = N.filter.find(".filterrow-hidden");
                    var E = 1;
                    if (A.length > 0) {
                        E = 0
                    }
                    q -= N.filterHeight + N.filterHeight * aC.length * E
                }
                if (N.showstatusbar) {
                    q -= N.statusBarHeight
                }
                if (N.showAggregates) {
                    q -= N.aggregatesHeight
                }
                if (q < 25) {
                    q = 25
                }
                if (N.hScrollBar[0].style.visibility != "hidden") {
                    q -= N.hScrollBar.outerHeight()
                }
                if (N.height === "auto" || N.height === null || N.autoheight) {
                    q = 100
                }
                var ax = N.host.width() + 2;
                var aw = '<td colspan="' + N.columns.records.length + '" role="gridcell" style="border-right-color: transparent; min-height: ' + q + "px; height: " + q + "px;  min-width:" + ar + "px; max-width:" + ar + "px; width:" + ar + "px;";
                var aJ = N.toTP("jqx-cell") + " " + N.toTP("jqx-grid-cell") + " " + N.toTP("jqx-item");
                aJ += " " + N.toTP("jqx-center-align");
                aw += '" class="' + aJ + '">';
                if (!N._loading) {
                    aw += N.gridlocalization.emptydatastring
                }
                aw += "</td>";
                n += aw;
                y += n;
                X += n;
                N.table[0].style.width = ar + 2 + "px";
                az = ar
            }
            var m = N.source._source.hierarchy && N.source._source.hierarchy.groupingDataFields ? N.source._source.hierarchy.groupingDataFields.length : 0;
            for (var R = 0; R < v.length; R++) {
                var au = v[R];
                var ad = au.uid;
                if (m > 0) {
                    if (au[J.level] < m) {
                        ad = au.uid
                    }
                }
                if (au.uid === undefined) {
                    au.uid = N.dataview.generatekey()
                }
                var n = '<tr data-key="' + ad + '" role="row" id="row' + R + N.element.id + '">';
                var ao = '<tr data-key="' + ad + '" role="row" id="row' + R + N.element.id + '">';
                if (au.aggregate) {
                    var n = '<tr data-role="summaryrow" role="row" id="row' + R + N.element.id + '">';
                    var ao = '<tr data-role="summaryrow" role="row" id="row' + R + N.element.id + '">'
                }
                var V = 0;
                if (!N.rowinfo[ad]) {
                    var z = au[J.checked];
                    if (z === undefined) {
                        z = false
                    }
                    N.rowinfo[ad] = {
                        selected: au[J.selected],
                        checked: z,
                        icon: au[J.icon],
                        aggregate: au.aggregate,
                        row: au,
                        leaf: au[J.leaf],
                        expanded: au[J.expanded]
                    }
                } else {
                    if (N.rowinfo[ad].checked === undefined) {
                        N.rowinfo[ad].checked = au[J.checked]
                    }
                    if (N.rowinfo[ad].icon === undefined) {
                        N.rowinfo[ad].icon = au[J.icon]
                    }
                    if (N.rowinfo[ad].aggregate === undefined) {
                        N.rowinfo[ad].aggregate = au[J.aggregate]
                    }
                    if (N.rowinfo[ad].row === undefined) {
                        N.rowinfo[ad].row = au
                    }
                    if (N.rowinfo[ad].leaf === undefined) {
                        N.rowinfo[ad].leaf = au[J.leaf]
                    }
                    if (N.rowinfo[ad].expanded === undefined) {
                        N.rowinfo[ad].expanded = au[J.expanded]
                    }
                }
                var h = N.rowinfo[ad];
                h.row = au;
                if (au.originalRecord) {
                    h.originalRecord = au.originalRecord
                }
                var o = 0;
                for (var Q = 0; Q < b; Q++) {
                    var M = N.columns.records[Q];
                    if (M.pinned || (N.rtl && N.columns.records[b - 1].pinned)) {
                        r = true
                    }
                    var ax = M.width;
                    if (ax < M.minwidth) {
                        ax = M.minwidth
                    }
                    if (ax > M.maxwidth) {
                        ax = M.maxwidth
                    }
                    ax -= k;
                    if (ax < 0) {
                        ax = 0
                    }
                    var aJ = N.toTP("jqx-cell") + " " + N.toTP("jqx-grid-cell") + " " + N.toTP("jqx-item");
                    if (M.pinned) {
                        aJ += " " + N.toTP("jqx-grid-cell-pinned")
                    }
                    if (N.sortcolumn === M.displayfield) {
                        aJ += " " + N.toTP("jqx-grid-cell-sort")
                    }
                    if (N.altRows && R % 2 != 0) {
                        aJ += " " + N.toTP("jqx-grid-cell-alt")
                    }
                    if (N.rtl) {
                        aJ += " " + N.toTP("jqx-cell-rtl")
                    }
                    var S = "";
                    if (m > 0 && !P && !au.aggregate) {
                        if (au[J.level] < m) {
                            S += ' colspan="' + b + '"';
                            var H = 0;
                            for (var K = 0; K < b; K++) {
                                var T = N.columns.records[K];
                                if (T.hidden) {
                                    continue
                                }
                                var aa = T.width;
                                if (aa < T.minwidth) {
                                    ax = T.minwidth
                                }
                                if (aa > T.maxwidth) {
                                    ax = T.maxwidth
                                }
                                aa -= k;
                                if (aa < 0) {
                                    aa = 0
                                }
                                H += aa
                            }
                            ax = H
                        }
                    }
                    var aw = '<td role="gridcell"' + S + ' style="max-width:' + ax + "px; width:" + ax + "px;";
                    var ak = '<td role="gridcell"' + S + ' style="pointer-events: none; visibility: hidden; border-color: transparent; max-width:' + ax + "px; width:" + ax + "px;";
                    if (Q == b - 1 && b == 1) {
                        aw += "border-right-color: transparent;";
                        ak += "border-right-color: transparent;"
                    }
                    if (m > 0 && au[J.level] < m && !au.aggregate) {
                        if (N.rtl) {
                            aJ += " " + N.toTP("jqx-right-align")
                        }
                    } else {
                        if (M.cellsalign != "left") {
                            if (M.cellsalign === "right") {
                                aJ += " " + N.toTP("jqx-right-align")
                            } else {
                                aJ += " " + N.toTP("jqx-center-align")
                            }
                        }
                    }
                    if (h) {
                        if (h.selected) {
                            if (N.editKey !== ad) {
                                if (N.selectionMode !== "none") {
                                    aJ += " " + N.toTP("jqx-grid-cell-selected");
                                    aJ += " " + N.toTP("jqx-fill-state-pressed")
                                }
                            }
                        }
                        if (h.locked) {
                            aJ += " " + N.toTP("jqx-grid-cell-locked")
                        }
                        if (h.aggregate) {
                            aJ += " " + N.toTP("jqx-grid-cell-pinned")
                        }
                    }
                    if (!(M.hidden)) {
                        if (o == 0 && !N.rtl) {
                            aw += "border-left-width: 0px;";
                            ak += "border-left-width: 0px;"
                        } else {
                            aw += "border-right-width: 0px;";
                            ak += "border-right-width: 0px;"
                        }
                        o++;
                        V += k + ax
                    } else {
                        aw += "display: none;";
                        ak += "display: none;";
                        N._hiddencolumns = true
                    }
                    if (M.pinned) {
                        aw += "pointer-events: auto;";
                        ak += "pointer-events: auto;"
                    }
                    var u = "";
                    if ((N.source.hierarchy.length == 0 || (!au.records || (au.records && au.records.length === 0))) && !this.virtualModeCreateRecords) {
                        h.leaf = true
                    }
                    if (au.records && au.records.length > 0) {
                        h.leaf = false
                    }
                    if (N.dataview.filters.length > 0) {
                        if (au.records && au.records.length > 0) {
                            var ab = false;
                            for (var L = 0; L < au.records.length; L++) {
                                if (au.records[L]._visible !== false && au.records[L].aggregate == undefined) {
                                    ab = true;
                                    break
                                }
                            }
                            if (!ab) {
                                h.leaf = true
                            } else {
                                h.leaf = false
                            }
                        }
                    }
                    if (h && !h.leaf) {
                        if (h.expanded) {
                            u += N.toTP("jqx-tree-grid-expand-button") + " ";
                            if (!N.rtl) {
                                u += N.toTP("jqx-grid-group-expand")
                            } else {
                                u += N.toTP("jqx-grid-group-expand-rtl")
                            }
                            u += " " + N.toTP("jqx-icon-arrow-down")
                        } else {
                            u += N.toTP("jqx-tree-grid-collapse-button") + " ";
                            if (!N.rtl) {
                                u += N.toTP("jqx-grid-group-collapse");
                                u += " " + N.toTP("jqx-icon-arrow-right")
                            } else {
                                u += N.toTP("jqx-grid-group-collapse-rtl");
                                u += " " + N.toTP("jqx-icon-arrow-left")
                            }
                        }
                    }
                    if (!N.autoRowHeight || o === 1 || (N.autoRowHeight && !M.autoCellHeight)) {
                        aJ += " " + N.toTP("jqx-grid-cell-nowrap")
                    }
                    var W = N._getcellvalue(M, h.row);
                    if (m > 0 && !au.aggregate) {
                        if (au[J.level] < m) {
                            W = au.label
                        }
                    }
                    if (M.cellsFormat != "") {
                        if (a.jqx.dataFormat) {
                            if (a.jqx.dataFormat.isDate(W)) {
                                W = a.jqx.dataFormat.formatdate(W, M.cellsFormat, N.gridlocalization)
                            } else {
                                if (a.jqx.dataFormat.isNumber(W) || (!isNaN(parseFloat(W)) && isFinite(W))) {
                                    W = a.jqx.dataFormat.formatnumber(W, M.cellsFormat, N.gridlocalization)
                                }
                            }
                        }
                    }
                    if (M.cellclassname != "" && M.cellclassname) {
                        if (typeof M.cellclassname == "string") {
                            aJ += " " + M.cellclassname
                        } else {
                            var aI = M.cellclassname(R, M.datafield, N._getcellvalue(M, h.row), h.row, W);
                            if (aI) {
                                aJ += " " + aI
                            }
                        }
                    }
                    if (M.cellsRenderer != "" && M.cellsRenderer) {
                        var C = M.cellsRenderer(ad, M.datafield, N._getcellvalue(M, h.row), h.row, W);
                        if (C !== undefined) {
                            W = C
                        }
                    }
                    if (h.aggregate) {
                        if (M.aggregates) {
                            var av = au.siblings.slice(0, au.siblings.length - 1);
                            var Y = N._calculateaggregate(M, null, true, av);
                            au[M.displayfield] = "";
                            if (Y) {
                                if (M.aggregatesRenderer) {
                                    if (Y) {
                                        var G = M.aggregatesRenderer(Y[M.datafield], M, null, N.getcolumnaggregateddata(M.datafield, M.aggregates, false, av), "subAggregates");
                                        W = G;
                                        var O = Object.keys(Y[M.datafield]);
                                        au[M.displayfield] += name + ":" + Y[M.datafield][O[0]] + "\n"
                                    }
                                } else {
                                    W = "";
                                    au[M.displayfield] = "";
                                    a.each(Y, function() {
                                        var i = this;
                                        for (var s in i) {
                                            var c = s;
                                            c = N._getaggregatename(c);
                                            var j = '<div style="position: relative; margin: 0px; overflow: hidden;">' + c + ":" + i[s] + "</div>";
                                            W += j;
                                            au[M.displayfield] += c + ":" + i[s] + "\n"
                                        }
                                    })
                                }
                            } else {
                                W = ""
                            }
                        }
                    }
                    if ((o === 1 && !N.rtl) || (M == ac && N.rtl) || (m > 0 && au[J.level] < m)) {
                        var af = "";
                        var d = N.toThemeProperty("jqx-tree-grid-indent");
                        var Z = h.leaf ? 1 : 0;
                        for (var F = 0; F < au[J.level] + Z; F++) {
                            af += "<span class='" + d + "'></span>"
                        }
                        var am = "<span class='" + u + "'></span>";
                        var aA = "";
                        var e = "";
                        if (this.checkboxes && !au.aggregate) {
                            var aD = N.toThemeProperty("jqx-tree-grid-checkbox") + " " + d + " " + N.toThemeProperty("jqx-checkbox-default") + " " + N.toThemeProperty("jqx-fill-state-normal") + " " + N.toThemeProperty("jqx-rc-all");
                            var g = true;
                            if (a.isFunction(this.checkboxes)) {
                                g = this.checkboxes(ad, au);
                                if (g == undefined) {
                                    g = false
                                }
                            }
                            if (g) {
                                if (h) {
                                    var ay = h.checked;
                                    if (ay === undefined) {
                                        ay = false
                                    }
                                    if (this.hierarchicalCheckboxes == false && ay === null) {
                                        ay = false
                                    }
                                    if (ay) {
                                        aA += "<span checked='true' class='" + aD + "'><div class='" + N.toThemeProperty("jqx-tree-grid-checkbox-tick") + " " + N.toThemeProperty("jqx-checkbox-check-checked") + "'></div></span>"
                                    } else {
                                        if (ay === false) {
                                            aA += "<span checked='undefined' class='" + aD + "'></span>"
                                        } else {
                                            aA += "<span class='" + aD + "'><div class='" + N.toThemeProperty("jqx-tree-grid-checkbox-tick") + " " + N.toThemeProperty("jqx-checkbox-check-indeterminate") + "'></div></span>"
                                        }
                                    }
                                } else {
                                    aA += "<span class='" + aD + "'></span>"
                                }
                            }
                        }
                        if (this.icons && !au.aggregate) {
                            var ag = N.toThemeProperty("jqx-tree-grid-icon") + " " + d;
                            if (N.rtl) {
                                var ag = N.toThemeProperty("jqx-tree-grid-icon") + " " + N.toThemeProperty("jqx-tree-grid-icon-rtl") + " " + d
                            }
                            var aB = N.toThemeProperty("jqx-tree-grid-icon-size") + " " + d;
                            var f = h.icon;
                            if (a.isFunction(this.icons)) {
                                h.icon = this.icons(ad, au);
                                if (h.icon) {
                                    f = true
                                }
                            }
                            if (f) {
                                if (h.icon) {
                                    e += "<span class='" + ag + "'><img class='" + aB + "' src='" + h.icon + "'/></span>"
                                } else {
                                    e += "<span class='" + ag + "'></span>"
                                }
                            }
                        }
                        var ae = N.autoRowHeight && o === 1 && M.autoCellHeight ? " " + N.toTP("jqx-grid-cell-wrap") : "";
                        var aj = af + am + aA + e + "<span class='" + N.toThemeProperty("jqx-tree-grid-title") + ae + "'>" + W + "</span>";
                        if (!N.rtl) {
                            W = aj
                        } else {
                            W = "<span class='" + N.toThemeProperty("jqx-tree-grid-title") + ae + "'>" + W + "</span>" + e + aA + am + af
                        }
                    }
                    if (m > 0 && P && Q >= m) {
                        if (au[J.level] < m) {
                            aw += "padding-left: 5px; border-left-width: 0px;";
                            ak += "padding-left: 5px; border-left-width: 0px;";
                            W = "<span style='visibility: hidden;'>-</span>"
                        }
                    }
                    aw += '" class="' + aJ + '">';
                    aw += W;
                    aw += "</td>";
                    ak += '" class="' + aJ + '">';
                    ak += W;
                    ak += "</td>";
                    if (!M.pinned) {
                        n += aw;
                        if (r) {
                            ao += ak
                        }
                    } else {
                        ao += aw;
                        n += aw
                    }
                    if (m > 0 && !P) {
                        if (au[J.level] < m && !au.aggregate) {
                            break
                        }
                    }
                }
                if (az == 0) {
                    N.table[0].style.width = V + 2 + "px";
                    az = V
                }
                n += "</tr>";
                ao += "</tr>";
                y += n;
                X += ao;
                if (N.rowDetails && !au.aggregate && this.rowDetailsRenderer) {
                    var l = '<tr data-role="row-details"><td valign="top" align="left" style="pointer-events: auto; max-width:' + ax + "px; width:" + ax + 'px; overflow: hidden; border-left: none; border-right: none;" colspan="' + N.columns.records.length + '" role="gridcell"';
                    var aJ = N.toTP("jqx-cell") + " " + N.toTP("jqx-grid-cell") + " " + N.toTP("jqx-item");
                    aJ += " " + N.toTP("jqx-details");
                    aJ += " " + N.toTP("jqx-reset");
                    var ai = this.rowDetailsRenderer(ad, au);
                    if (ai) {
                        l += '" class="' + aJ + '"><div style="pointer-events: auto; overflow: hidden;"><div data-role="details">' + ai + "</div></div></td></tr>";
                        y += l;
                        X += l
                    }
                }
            }
            y += "</table>";
            X += "</table>";
            if (r) {
                if (N.WinJS) {
                    MSApp.execUnsafeLocalFunction(function() {
                        N.table.html(X + y)
                    })
                } else {
                    N.table[0].innerHTML = X + y
                }
                var aE = N.table.find("#table" + N.element.id);
                var aF = N.table.find("#pinnedtable" + N.element.id);
                aF.css("float", "left");
                aF.css("pointer-events", "none");
                aE.css("float", "left");
                aF[0].style.position = "absolute";
                aE[0].style.position = "relative";
                aE[0].style.zIndex = aH - 10;
                aF[0].style.zIndex = aH + 10;
                N._table = aE;
                N._table[0].style.left = "0px";
                N._pinnedTable = aF;
                if (P) {
                    aF[0].style.left = "0px"
                }
                N._table[0].style.width = az + "px";
                N._pinnedTable[0].style.width = az + "px";
                if (N.rtl && N._haspinned) {
                    N._pinnedTable[0].style.left = 3 - az + parseInt(N.element.style.width) + "px"
                }
            } else {
                if (N.WinJS) {
                    MSApp.execUnsafeLocalFunction(function() {
                        N.table.html(y)
                    })
                } else {
                    N.table[0].innerHTML = y
                }
                var K = N.table.find("#table" + N.element.id);
                N._table = K;
                if (a.jqx.browser.msie && a.jqx.browser.version < 10) {
                    N._table[0].style.width = az + "px"
                }
                if (D === 0) {
                    N._table[0].style.width = (2 + az) + "px"
                }
            }
            if (D === 0) {
                N._table[0].style.tableLayout = "auto";
                if (N._pinnedTable) {
                    N._pinnedTable[0].style.tableLayout = "auto"
                }
            }
            if (N.showAggregates) {
                N._updatecolumnsaggregates()
            }
            if (N._loading && D == 0) {
                N._arrange();
                this._showLoadElement()
            }
            if (N.rendered) {
                N.rendered()
            }
        },
        propertyChangedHandler: function(d, m, c, l) {
            if (d.isInitialized == undefined || d.isInitialized == false) {
                return
            }
            var g = d.base;
            if (m == "pageSizeMode" || m == "hierarchicalCheckboxes") {
                d._renderrows()
            } else {
                if (m == "filterable") {
                    g._render()
                } else {
                    if (m === "height") {
                        g.host.height(d.height);
                        g.host.width(d.width);
                        g._updatesize(false, true)
                    } else {
                        if (m === "width") {
                            g.host.height(d.height);
                            g.host.width(d.width);
                            g._updatesize(true, false)
                        } else {
                            if (m === "source") {
                                g.updateBoundData()
                            } else {
                                if (m === "columns" || m === "columnGroups") {
                                    g._columns = null;
                                    g._render()
                                } else {
                                    if (m === "rtl") {
                                        g.content.css("left", "");
                                        d.columns = d._columns;
                                        g.vScrollBar.jqxScrollBar({
                                            rtl: l
                                        });
                                        g.hScrollBar.jqxScrollBar({
                                            rtl: l
                                        });
                                        g._render()
                                    } else {
                                        if (m === "pagerMode") {
                                            d.pagerMode = l;
                                            g._initpager()
                                        } else {
                                            if (m == "pageSizeOptions") {
                                                g._initpager();
                                                var k = false;
                                                for (var f = 0; f < l.length; f++) {
                                                    if (parseInt(l[f]) == d.pageSize) {
                                                        k = true;
                                                        break
                                                    }
                                                }
                                                if (!k) {
                                                    a.jqx.set(d, [{
                                                        pageSize: l[0]
                                                    }])
                                                }
                                            } else {
                                                if (m == "pageSize") {
                                                    var h = g.dataview.pagenum * g.dataview.pagesize;
                                                    g.dataview.pagesize = g.pageSize;
                                                    var j = Math.floor(h / g.dataview.pagesize);
                                                    if (j !== g.dataview.pagenum || parseInt(l) !== parseInt(c)) {
                                                        d._raiseEvent("pageSizeChanged", {
                                                            pagenum: l,
                                                            oldpageSize: c,
                                                            pageSize: g.dataview.pagesize
                                                        });
                                                        var n = d.goToPage(j);
                                                        if (!n) {
                                                            g.refresh()
                                                        }
                                                    }
                                                } else {
                                                    if (m === "pagerPosition") {
                                                        g.refresh()
                                                    } else {
                                                        if (m === "selectionMode") {
                                                            g.selectionMode = l.toLowerCase()
                                                        } else {
                                                            if (m == "touchmode") {
                                                                g.touchDevice = null;
                                                                g._removeHandlers();
                                                                g.touchDevice = null;
                                                                g.vScrollBar.jqxScrollBar({
                                                                    touchMode: l
                                                                });
                                                                g.hScrollBar.jqxScrollBar({
                                                                    touchMode: l
                                                                });
                                                                g._updateTouchScrolling();
                                                                g._arrange();
                                                                g._updatecolumnwidths();
                                                                g._renderrows();
                                                                g._addHandlers()
                                                            } else {
                                                                if (m == "enableHover") {
                                                                    return
                                                                } else {
                                                                    if (m == "disabled") {
                                                                        if (l) {
                                                                            g.base.host.addClass(this.toThemeProperty("jqx-fill-state-disabled"))
                                                                        } else {
                                                                            g.base.host.removeClass(this.toThemeProperty("jqx-fill-state-disabled"))
                                                                        }
                                                                        if (g.pageable) {
                                                                            if (g.pagernexttop) {
                                                                                g.pagernexttop.jqxButton({
                                                                                    disabled: l
                                                                                });
                                                                                g.pagerprevioustop.jqxButton({
                                                                                    disabled: l
                                                                                });
                                                                                g.pagernextbottom.jqxButton({
                                                                                    disabled: l
                                                                                });
                                                                                g.pagerpreviousbottom.jqxButton({
                                                                                    disabled: l
                                                                                });
                                                                                g.pagerfirsttop.jqxButton({
                                                                                    disabled: l
                                                                                });
                                                                                g.pagerfirstbottom.jqxButton({
                                                                                    disabled: l
                                                                                });
                                                                                g.pagerlasttop.jqxButton({
                                                                                    disabled: l
                                                                                });
                                                                                g.pagerlastbottom.jqxButton({
                                                                                    disabled: l
                                                                                });
                                                                                if (g.pagershowrowscombotop.jqxDropDownList) {
                                                                                    if (g.pagerMode == "advanced") {
                                                                                        g.pagershowrowscombotop.jqxDropDownList({
                                                                                            disabled: false
                                                                                        });
                                                                                        g.pagershowrowscombobottom.jqxDropDownList({
                                                                                            disabled: false
                                                                                        })
                                                                                    }
                                                                                }
                                                                            }
                                                                            g.base.host.find(".jqx-grid-pager-number").css("cursor", l ? "default" : "pointer")
                                                                        }
                                                                        g.base.host.find(".jqx-grid-group-collapse").css("cursor", l ? "default" : "pointer");
                                                                        g.base.host.find(".jqx-grid-group-expand").css("cursor", l ? "default" : "pointer")
                                                                    } else {
                                                                        if (m == "columnsHeight") {
                                                                            g._render()
                                                                        } else {
                                                                            if (m == "theme") {
                                                                                var e = l;
                                                                                g.theme = l;
                                                                                a.jqx.utilities.setTheme(c, l, g.host);
                                                                                g.vScrollBar.jqxScrollBar({
                                                                                    theme: e
                                                                                });
                                                                                g.hScrollBar.jqxScrollBar({
                                                                                    theme: e
                                                                                });
                                                                                if (g.pageable && g.pagernexttop) {
                                                                                    g.pagernexttop.jqxButton({
                                                                                        theme: e
                                                                                    });
                                                                                    g.pagerprevioustop.jqxButton({
                                                                                        theme: e
                                                                                    });
                                                                                    g.pagernextbottom.jqxButton({
                                                                                        theme: e
                                                                                    });
                                                                                    g.pagerpreviousbottom.jqxButton({
                                                                                        theme: e
                                                                                    });
                                                                                    g.pagerfirsttop.jqxButton({
                                                                                        theme: e
                                                                                    });
                                                                                    g.pagerfirstbottom.jqxButton({
                                                                                        theme: e
                                                                                    });
                                                                                    g.pagerlasttop.jqxButton({
                                                                                        theme: e
                                                                                    });
                                                                                    g.pagerlastbottom.jqxButton({
                                                                                        theme: e
                                                                                    });
                                                                                    if (g.pagershowrowscombotop.jqxDropDownList) {
                                                                                        if (g.pagerMode == "advanced") {
                                                                                            g.pagershowrowscombotop.jqxDropDownList({
                                                                                                theme: e
                                                                                            });
                                                                                            g.pagershowrowscombobottom.jqxDropDownList({
                                                                                                theme: e
                                                                                            })
                                                                                        }
                                                                                    }
                                                                                }
                                                                                if (g.filterable) {
                                                                                    var b = a(".filterconditions");
                                                                                    if (b.length > 0) {
                                                                                        b.jqxDropDownList({
                                                                                            theme: e
                                                                                        })
                                                                                    }
                                                                                    if (g.filtercolumnsList) {
                                                                                        g.filtercolumnsList.jqxDropDownList({
                                                                                            theme: e
                                                                                        })
                                                                                    }
                                                                                }
                                                                                g.refresh()
                                                                            } else {
                                                                                g.refresh()
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        checkRow: function(c, d, b) {
            var e = this.base;
            var g = e._names();
            if (e._loading) {
                return
            }
            var f = e.rowinfo[c];
            if (f) {
                f.checked = true;
                f.row[g.checked] = true;
                if (f.originalRecord) {
                    f.originalRecord[g.checked] = true
                }
                if (b == undefined && this.hierarchicalCheckboxes) {
                    this.checkRows(f.row, f.row)
                }
                if (d !== false) {
                    e._renderrows();
                    e._renderhorizontalscroll()
                }
                e._raiseEvent("rowCheck", {
                    key: c,
                    row: f.row
                })
            } else {
                var h = this.getRow(c);
                if (h) {
                    e.rowinfo[c] = {
                        row: h,
                        checked: true
                    };
                    e.rowinfo[c].row[g.checked] = true;
                    if (h.originalRecord) {
                        e.rowinfo[c].originalRecord = h.originalRecord
                    }
                    e._raiseEvent("rowCheck", {
                        key: c,
                        row: h
                    });
                    if (b == undefined && this.hierarchicalCheckboxes) {
                        this.checkRows(h, h)
                    }
                    if (d !== false) {
                        e._renderrows();
                        e._renderhorizontalscroll()
                    }
                }
            }
        },
        checkRows: function(d, n) {
            var e = this.base;
            var j = this;
            var i = e._names();
            var l = function(o) {
                var p = new Array();
                var q = function(s) {
                    for (var r = 0; r < s.length; r++) {
                        p.push(s[r]);
                        if (!s[r]) {
                            continue
                        }
                        if (s[r].records) {
                            q(s[r].records)
                        }
                    }
                };
                if (o.records) {
                    q(o.records)
                }
                return p
            };
            if (d != null) {
                var f = 0;
                var c = false;
                var g = 0;
                var b = function(o) {
                    for (var p = 0; p < o.length; p++) {
                        if (!o[p]) {
                            continue
                        }
                        var q = o[p][i.checked];
                        if (q === undefined) {
                            q = false
                        }
                        if (q != false) {
                            if (o[p][i.checked] == null) {
                                c = true
                            }
                            if (o[p].records) {
                                b(o[p].records)
                            }
                            f++
                        }
                        g++
                    }
                };
                if (d.records) {
                    b(d.records)
                }
                if (d != n) {
                    if (f == g) {
                        this.checkRow(d.uid, false, "tree")
                    } else {
                        if (f > 0) {
                            this.indeterminateRow(d.uid, false, "tree")
                        } else {
                            this.uncheckRow(d.uid, false, "tree")
                        }
                    }
                } else {
                    var k = n[i.checked];
                    var h = l(n);
                    a.each(h, function() {
                        if (k === true) {
                            j.checkRow(this.uid, false, "tree")
                        } else {
                            if (k === false) {
                                j.uncheckRow(this.uid, false, "tree")
                            } else {
                                j.indeterminateRow(this.uid, false, "tree")
                            }
                        }
                    })
                }
                var m = d[i.parent] ? d[i.parent] : null;
                this.checkRows(m, n)
            } else {
                var k = n[i.checked];
                var h = l(n);
                a.each(h, function() {
                    if (k === true) {
                        j.checkRow(this.uid, false, "tree")
                    } else {
                        if (k === false) {
                            j.uncheckRow(this.uid, false, "tree")
                        } else {
                            j.indeterminateRow(this.uid, false, "tree")
                        }
                    }
                })
            }
        },
        indeterminateRow: function(c, d, b) {
            var f = this.base;
            var h = f._names();
            if (f._loading) {
                return
            }
            var e = this;
            var g = f.rowinfo[c];
            if (g) {
                g.checked = null;
                g.row[h.checked] = null;
                if (g.originalRecord) {
                    g.originalRecord[h.checked] = null
                }
                if (b == undefined && this.hierarchicalCheckboxes) {
                    this.checkRows(g.row, g.row)
                }
                if (d !== false) {
                    f._renderrows()
                }
            } else {
                var i = this.getRow(c);
                if (i) {
                    f.rowinfo[c] = {
                        row: i,
                        checked: null
                    };
                    f.rowinfo[c].row[h.checked] = null;
                    if (i.originalRecord) {
                        f.rowinfo[c].originalRecord = i.originalRecord
                    }
                    if (b == undefined && this.hierarchicalCheckboxes) {
                        this.checkRows(i, i)
                    }
                    if (d !== false) {
                        f._renderrows()
                    }
                }
            }
        },
        uncheckRow: function(c, d, b) {
            var f = this.base;
            var h = f._names();
            if (f._loading) {
                return
            }
            var e = this;
            var g = f.rowinfo[c];
            if (g) {
                g.checked = false;
                g.row[h.checked] = false;
                if (g.originalRecord) {
                    g.originalRecord[h.checked] = false
                }
                if (b == undefined && this.hierarchicalCheckboxes) {
                    this.checkRows(g.row, g.row)
                }
                if (d !== false) {
                    f._renderrows()
                }
                f._raiseEvent("rowUncheck", {
                    key: c,
                    row: g.row
                })
            } else {
                var i = this.getRow(c);
                if (i) {
                    f.rowinfo[c] = {
                        row: i,
                        checked: false
                    };
                    f.rowinfo[c].row[h.checked] = false;
                    if (i.originalRecord) {
                        f.rowinfo[c].originalRecord = i.originalRecord
                    }
                    f._raiseEvent("rowUncheck", {
                        key: c,
                        row: i
                    });
                    if (b == undefined && this.hierarchicalCheckboxes) {
                        this.checkRows(i, i)
                    }
                    if (d !== false) {
                        f._renderrows()
                    }
                }
            }
        },
        expandRows: function(c) {
            var e = this;
            if (!c) {
                return
            }
            if (e.virtualModeCreateRecords) {
                a.each(c, function() {
                    var f = this;
                    var g = function() {
                        e.base._loading = false;
                        e.expandRows(f.records)
                    };
                    e.base._loading = false;
                    e.expandRow(f.uid, g)
                })
            } else {
                for (var d = 0; d < c.length; d++) {
                    var b = c[d];
                    e.expandRow(b.uid);
                    e.expandRows(b.records)
                }
            }
        },
        collapseRows: function(b) {
            if (!b) {
                return
            }
            for (var c = 0; c < b.length; c++) {
                this.collapseRow(b[c].uid);
                this.collapseRows(b[c].records)
            }
        },
        expandAll: function() {
            var b = this.base;
            b.beginUpdate();
            this.expandRows(this.getRows());
            b.endUpdate()
        },
        collapseAll: function() {
            var b = this.base;
            b.beginUpdate();
            this.collapseRows(this.getRows());
            b.endUpdate()
        },
        expandRow: function(h, j) {
            var d = this.base;
            if (d._loading) {
                return
            }
            var e = d._names();
            var f = this;
            var b = d.rowinfo[h];
            if (!b) {
                var k = this.getRow(h);
                if (k) {
                    d.rowinfo[h] = {
                        row: k
                    };
                    if (k.originalRecord) {
                        d.rowinfo[h].originalRecord = k.originalRecord
                    }
                    b = d.rowinfo[h]
                }
            }
            if (b) {
                if (b.expanded) {
                    b.row[e.expanded] = true;
                    return
                }
                b.expanded = true;
                b.row[e.expanded] = true;
                if (b.originalRecord) {
                    b.originalRecord[e.expanded] = true
                }
                if (this.virtualModeCreateRecords && !b.row._loadedOnDemand) {
                    var c = function(m) {
                        b.row._loadedOnDemand = true;
                        if (m === false) {
                            d._loading = false;
                            f._hideLoadElement();
                            b.leaf = true;
                            b.row[e.leaf] = true;
                            d._renderrows();
                            if (j) {
                                j()
                            }
                            return
                        }
                        for (var n = 0; n < m.length; n++) {
                            m[n][e.level] = b.row[e.level] + 1;
                            m[n][e.parent] = b.row;
                            if (d.rowsByKey[m[n].uid]) {
                                d._loading = false;
                                f._hideLoadElement();
                                b.leaf = true;
                                b.row[e.leaf] = true;
                                d._renderrows();
                                if (j) {
                                    j()
                                }
                                throw new Error("Please, check whether you Add Records with unique ID/Key. ")
                            }
                            d.rowsByKey[m[n].uid] = m[n];
                            f.virtualModeRecordCreating(m[n])
                        }
                        if (!b.row.records) {
                            b.row.records = m
                        } else {
                            b.row.records = b.row.records.concat(m)
                        }
                        if ((!m) || (m && m.length == 0)) {
                            b.leaf = true;
                            b.row[e.leaf] = true
                        }
                        if (b.originalRecord) {
                            b.originalRecord.records = m;
                            b.originalRecord[e.expanded] = true;
                            if (m.length == 0) {
                                b.originalRecord[e.leaf] = true
                            }
                        }
                        d._loading = false;
                        f._hideLoadElement();
                        var l = d.vScrollBar.css("visibility");
                        d._renderrows();
                        d._updateScrollbars();
                        var o = l != d.vScrollBar.css("visibility");
                        if (d.height === "auto" || d.height === null || d.autoheight || o) {
                            d._arrange()
                        }
                        d._renderhorizontalscroll();
                        if (j) {
                            j()
                        }
                    };
                    if (!b.row[e.leaf]) {
                        d._loading = true;
                        this._showLoadElement();
                        this.virtualModeCreateRecords(b.row, c);
                        return
                    }
                }
                if (!d.updating()) {
                    var g = d.vScrollBar.css("visibility");
                    d._renderrows();
                    d._updateScrollbars();
                    var i = g != d.vScrollBar.css("visibility");
                    if (d.height === "auto" || d.height === null || d.autoheight || i) {
                        d._arrange()
                    }
                    d._renderhorizontalscroll();
                    d._raiseEvent("rowExpand", {
                        row: b.row,
                        key: h
                    })
                }
            }
        },
        collapseRow: function(c) {
            var d = this.base;
            var g = d._names();
            if (d._loading) {
                return
            }
            var f = d.rowinfo[c];
            if (!f) {
                var h = this.getRow(c);
                if (h) {
                    d.rowinfo[c] = {
                        row: h
                    };
                    if (h.originalRecord) {
                        d.rowinfo[c].originalRecord = h.originalRecord
                    }
                    f = d.rowinfo[c]
                }
            }
            if (f) {
                if (!f.expanded) {
                    f.row[g.expanded] = false;
                    return
                }
                f.expanded = false;
                f.row[g.expanded] = false;
                if (f.originalRecord) {
                    f.originalRecord[g.expanded] = false
                }
                if (!d.updating()) {
                    var b = d.vScrollBar.css("visibility");
                    d._renderrows();
                    d._updateScrollbars();
                    var e = b != d.vScrollBar.css("visibility");
                    if (d.height === "auto" || d.height === null || d.autoheight || e) {
                        d._arrange()
                    }
                    d._renderhorizontalscroll();
                    d._raiseEvent("rowCollapse", {
                        row: f.row,
                        key: c
                    })
                }
            }
        }
    })
})(jqxBaseFramework);