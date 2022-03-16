/*
jQWidgets v10.1.5 (2020-Sep)
Copyright (c) 2011-2020 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */
(function(b) {
    b.jqx.jqxWidget("jqxGrid", "", {});
    b.extend(b.jqx._jqxGrid.prototype, {
        defineInstance: function() {
            var d = {
                adaptive: false,
                adaptivewidth: 600,
                disabled: false,
                width: 600,
                height: 500,
                pagerheight: 40,
                groupsheaderheight: 34,
                pagesize: 10,
                pagesizeoptions: ["5", "10", "20"],
                rowsheight: 32,
                columnsheight: 36,
                filterrowheight: 36,
                groupindentwidth: 30,
                rowdetails: false,
                enablerowdetailsindent: true,
                enablemousewheel: true,
                initrowdetails: null,
                layoutrowdetails: null,
                editable: false,
                editmode: "selectedcell",
                pageable: false,
                pagermode: "default",
                pagerbuttonscount: 5,
                groupable: false,
                sortable: false,
                sortmode: "one",
                filterable: false,
                filtermode: "default",
                filterbarmode: "default",
                autoshowfiltericon: true,
                showfiltercolumnbackground: true,
                showpinnedcolumnbackground: true,
                showsortcolumnbackground: true,
                altrows: false,
                altstart: 1,
                altstep: 1,
                showrowdetailscolumn: true,
                showrowlines: true,
                showcolumnlines: true,
                showcolumnheaderlines: true,
                showtoolbar: false,
                showfilterbar: false,
                toolbarheight: 36,
                showstatusbar: false,
                statusbarheight: 36,
                enableellipsis: true,
                groups: [],
                groupsrenderer: null,
                groupcolumnrenderer: null,
                groupsexpandedbydefault: false,
                pagerrenderer: null,
                touchmode: "auto",
                columns: [],
                selectedrowindex: -1,
                selectedrowindexes: new Array(),
                selectedcells: new Array(),
                autobind: true,
                selectedcell: null,
                tableZIndex: 79,
                headerZIndex: 29,
                updatefilterconditions: null,
                showgroupaggregates: false,
                showaggregates: false,
                showfilterrow: false,
                showeverpresentrow: false,
                everpresentrowposition: "top",
                everpresentrowactions: "add reset",
                everpresentrowactionsmode: "buttons",
                everpresentrowheight: 30,
                autorowheight: false,
                autokoupdates: true,
                handlekeyboardnavigation: null,
                showsortmenuitems: true,
                showfiltermenuitems: true,
                showgroupmenuitems: true,
                enablebrowserselection: false,
                enablekeyboarddelete: true,
                clipboard: true,
                clipboardbegin: null,
                clipboardend: null,
                copytoclipboardwithheaders: false,
                copytoclipboardhiddencolumns: false,
                ready: null,
                updatefilterpanel: null,
                autogeneratecolumns: false,
                rowdetailstemplate: null,
                scrollfeedback: null,
                rendertoolbar: null,
                renderstatusbar: null,
                rendered: null,
                multipleselectionbegins: null,
                columngroups: null,
                cellhover: null,
                source: {
                    beforeprocessing: null,
                    beforesend: null,
                    loaderror: null,
                    localdata: null,
                    data: null,
                    datatype: "array",
                    datafields: [],
                    url: "",
                    root: "",
                    record: "",
                    id: "",
                    totalrecords: 0,
                    recordstartindex: 0,
                    recordendindex: 0,
                    loadallrecords: true,
                    sortcolumn: null,
                    sortdirection: null,
                    sort: null,
                    filter: null,
                    sortcomparer: null
                },
                filter: null,
                dataview: null,
                updatedelay: null,
                autoheight: false,
                autowidth: false,
                showheader: true,
                showgroupsheader: true,
                closeablegroups: true,
                scrollbarsize: b.jqx.utilities.scrollBarSize,
                touchscrollbarsize: b.jqx.utilities.touchScrollBarSize,
                scrollbarautoshow: b.jqx.utilities.scrollBarAutoShow,
                virtualmode: false,
                sort: null,
                columnsmenu: true,
                columnsresize: false,
                columnsautoresize: true,
                columnsreorder: false,
                columnsmenuwidth: 16,
                autoshowcolumnsmenubutton: true,
                showcolumnsactionbutton: false,
                popupwidth: "auto",
                popupheight: "auto",
                columnmenuopening: null,
                columnmenuclosing: null,
                sorttogglestates: 2,
                rendergridrows: null,
                enableanimations: true,
                enablecolumnsvirtualization: true,
                enabletooltips: false,
                selectionmode: "singlerow",
                autofill: false,
                enableoptimization: true,
                enablehover: true,
                loadingerrormessage: "The data is still loading. When the data binding is completed, the Grid raises the 'bindingcomplete' event. Call this function in the 'bindingcomplete' event handler.",
                verticalscrollbarstep: 30,
                verticalscrollbarlargestep: 400,
                horizontalscrollbarstep: 10,
                horizontalscrollbarlargestep: 50,
                keyboardnavigation: true,
                keyboardmenunavigation: true,
                touchModeStyle: "auto",
                autoshowloadelement: true,
                showdefaultloadelement: true,
                showemptyrow: true,
                autosavestate: false,
                autoloadstate: false,
                _updating: false,
                _pagescache: new Array(),
                _pageviews: new Array(),
                _cellscache: new Array(),
                _rowdetailscache: new Array(),
                _rowdetailselementscache: new Array(),
                _requiresupdate: false,
                _hasOpenedMenu: false,
                scrollmode: "physical",
                deferreddatafields: null,
                localization: null,
                rtl: false,
                menuitemsarray: [],
                charting: {
                    appendTo: null,
                    colorScheme: "scheme02",
                    dialog: {
                        header: "Data Visualization",
                        height: 500,
                        width: 400,
                        position: "center",
                        enabled: true
                    },
                    ready: null,
                    formatSettings: {}
                },
                events: ["initialized", "rowClick", "rowSelect", "rowUnselect", "groupExpand", "groupCollapse", "sort", "columnClick", "cellClick", "pageChanged", "pageSizeChanged", "bindingComplete", "groupsChanged", "filter", "columnResized", "cellSelect", "cellUnselect", "cellBeginEdit", "cellEndEdit", "cellValueChanged", "rowExpand", "rowCollapse", "rowDoubleClick", "cellDoubleClick", "columnReordered", "pageChanging"]
            };
            if (this === b.jqx._jqxGrid.prototype) {
                return d
            }
            b.extend(true, this, d);
            return d
        },
        _applyThemeSettings: function() {
            var g = this;
            if (!g.isMaterialized()) {
                return
            }
            var j = window.getComputedStyle(g.element);
            var f = j.getPropertyValue("--jqx-grid-row-height");
            var i = j.getPropertyValue("--jqx-grid-column-height");
            var d = j.getPropertyValue("--jqx-grid-show-column-lines");
            var h = j.getPropertyValue("--jqx-grid-filter-menu-items-height");
            var e = j.getPropertyValue("--jqx-scrollbar-size");
            if (f && this.rowsheight === 32) {
                g.rowsheight = parseInt(f)
            }
            if (i && this.columnsheight === 36) {
                g.columnsheight = parseInt(i)
            }
            if (d) {
                g.showcolumnlines = g.showcolumnheaderlines = parseInt(d)
            }
            if (h) {
                g.filterMenuItemsHeight = parseInt(h)
            } else {
                g.filterMenuItemsHeight = 23
            }
            if (e) {
                g.scrollbarsize = e;
                b.jqx.utilities.scrollBarSize = e
            }
        },
        createInstance: function(i) {
            this.that = this;
            var h = this;
            h.pagesize = parseInt(h.pagesize);
            h.toolbarheight = parseInt(h.toolbarheight);
            h.columnsheight = parseInt(h.columnsheight);
            h.filterrowheight = parseInt(h.filterrowheight);
            h.statusbarheight = parseInt(h.statusbarheight);
            h.groupsheaderheight = parseInt(h.groupsheaderheight);
            h._undoRedo = [];
            h._undoRedoIndex = -1;
            h._applyThemeSettings();
            h.detailsVisibility = new Array();
            h.savedArgs = i && i.length > 0 ? i[0] : null;
            var g = "<div class='jqx-clear jqx-border-reset jqx-overflow-hidden jqx-max-size jqx-position-relative'><div tabindex='1' class='jqx-clear jqx-max-size jqx-position-relative jqx-overflow-hidden jqx-background-reset' id='wrapper" + h.element.id + "'><div class='jqx-clear jqx-position-absolute' id='toolbar' style='visibility: hidden;'></div><div class='jqx-clear jqx-position-absolute' id='groupsheader' style='visibility: hidden;'></div><div class='jqx-clear jqx-position-absolute' id='filter' style='visibility: hidden;'></div><div class='jqx-clear jqx-overflow-hidden jqx-position-absolute jqx-border-reset jqx-background-reset' id='content" + h.element.id + "'></div><div class='jqx-clear jqx-position-absolute' id='verticalScrollBar" + h.element.id + "'></div><div class='jqx-clear jqx-position-absolute' id='horizontalScrollBar" + h.element.id + "'></div><div class='jqx-clear jqx-position-absolute jqx-border-reset' id='bottomRight'></div><div class='jqx-clear jqx-position-absolute' id='addrow'></div><div class='jqx-clear jqx-position-absolute' id='statusbar'></div><div class='jqx-clear jqx-position-absolute' id='pager' style='z-index: 20;'></div></div></div>";
            h.element.innerHTML = "";
            if (h.source) {
                if (!h.source.dataBind) {
                    if (!b.jqx.dataAdapter) {
                        throw new Error("jqxGrid: Missing reference to jqxdata.js")
                    }
                    h.source = new b.jqx.dataAdapter(h.source)
                }
                var e = h.source._source.datafields;
                if (e && e.length > 0) {
                    h.editmode = h.editmode.toLowerCase();
                    h.selectionmode = h.selectionmode.toLowerCase()
                }
            }
            h.host.attr("role", "grid");
            h.host.attr("align", "left");
            h.element.innerHTML = g;
            h.host.addClass(h.toTP("jqx-grid"));
            h.host.addClass(h.toTP("jqx-reset"));
            h.host.addClass(h.toTP("jqx-rc-all"));
            h.host.addClass(h.toTP("jqx-widget"));
            h.host.addClass(h.toTP("jqx-widget-content"));
            h.wrapper = h.host.find("#wrapper" + h.element.id);
            h.content = h.host.find("#content" + h.element.id);
            h.content.addClass(h.toTP("jqx-reset"));
            this.filterbar = this.host.find("#filter");
            this.filterbar[0].id = "filter" + this.element.id;
            this.filterbar.addClass(this.toTP("jqx-widget-header"));
            this.filterbar.addClass(this.toTP("jqx-grid-toolbar"));
            var n = h.host.find("#verticalScrollBar" + h.element.id);
            var r = h.host.find("#horizontalScrollBar" + h.element.id);
            h.bottomRight = h.host.find("#bottomRight").addClass(h.toTP("jqx-grid-bottomright jqx-scrollbar-state-normal"));
            if (!n.jqxScrollBar) {
                throw new Error("jqxGrid: Missing reference to jqxscrollbar.js");
                return
            }
            h.editors = new Array();
            h.vScrollBar = n.jqxScrollBar({
                vertical: true,
                rtl: h.rtl,
                touchMode: h.touchmode,
                step: h.verticalscrollbarstep,
                largestep: h.verticalscrollbarlargestep,
                theme: h.theme,
                _triggervaluechanged: false
            });
            h.hScrollBar = r.jqxScrollBar({
                vertical: false,
                rtl: h.rtl,
                touchMode: h.touchmode,
                step: h.horizontalscrollbarstep,
                largestep: h.horizontalscrollbarlargestep,
                theme: h.theme,
                _triggervaluechanged: false
            });
            h.addnewrow = h.host.find("#addrow");
            h.addnewrow[0].id = "addrow" + h.element.id;
            h.addnewrow.addClass(h.toTP("jqx-widget-header"));
            h.pager = h.host.find("#pager");
            h.pager[0].id = "pager" + h.element.id;
            h.toolbar = h.host.find("#toolbar");
            h.toolbar[0].id = "toolbar" + h.element.id;
            h.toolbar.addClass(h.toTP("jqx-grid-toolbar"));
            h.toolbar.addClass(h.toTP("jqx-widget-header"));
            h.statusbar = h.host.find("#statusbar");
            h.statusbar[0].id = "statusbar" + h.element.id;
            h.statusbar.addClass(h.toTP("jqx-grid-statusbar"));
            h.statusbar.addClass(h.toTP("jqx-widget-header"));
            h.pager.addClass(h.toTP("jqx-grid-pager"));
            h.pager.addClass(h.toTP("jqx-widget-header"));
            h.groupsheader = h.host.find("#groupsheader");
            h.groupsheader.addClass(h.toTP("jqx-grid-groups-header"));
            h.groupsheader.addClass(h.toTP("jqx-widget-header"));
            h.groupsheader[0].id = "groupsheader" + h.element.id;
            h.vScrollBar.css("visibility", "hidden");
            h.hScrollBar.css("visibility", "hidden");
            h.vScrollInstance = b.data(h.vScrollBar[0], "jqxScrollBar").instance;
            h.hScrollInstance = b.data(h.hScrollBar[0], "jqxScrollBar").instance;
            h.gridtable = null;
            h.isNestedGrid = h.host.parent() ? h.host.parent().css("z-index") == 299 : false;
            h.touchdevice = h.isTouchDevice();
            if (h.localizestrings) {
                h.localizestrings();
                if (h.localization != null) {
                    h.localizestrings(h.localization, false)
                }
            }
            if (h.rowdetailstemplate && typeof h.rowdetailstemplate !== "function") {
                if (undefined == h.rowdetailstemplate.rowdetails) {
                    h.rowdetailstemplate.rowdetails = "<div></div>"
                }
                if (undefined == h.rowdetailstemplate.rowdetailsheight) {
                    h.rowdetailstemplate.rowdetailsheight = 200
                }
                if (undefined == h.rowdetailstemplate.rowdetailshidden) {
                    h.rowdetailstemplate.rowdetailshidden = true
                }
            }
            if (h.showfilterrow && !h.filterable) {
                throw new Error('jqxGrid: "showfilterrow" requires setting the "filterable" property to true!');
                h.host.remove();
                return
            }
            if (h.autorowheight && !h.autoheight && !h.pageable) {
                throw new Error('jqxGrid: "autorowheight" requires setting the "autoheight" or "pageable" property to true!');
                h.host.remove();
                return
            }
            if (h.virtualmode && h.rendergridrows == null) {
                throw new Error('jqxGrid: "virtualmode" requires setting the "rendergridrows"!');
                h.host.remove();
                return
            }
            if (h.virtualmode && !h.pageable && h.groupable) {
                throw new Error('jqxGrid: "grouping" in "virtualmode" without paging is not supported!');
                h.host.remove();
                return
            }
            if (h._testmodules()) {
                return
            }
            h._builddataloadelement();
            h._cachedcolumns = h.columns;
            if (h.columns && h.columns.length > h.headerZIndex) {
                h.headerZIndex = h.columns.length + 100
            }
            if (h.theme && h.theme.indexOf("material") >= 0) {
                var o = b("<span>Test</span>");
                var f = b("<span>Test</span>");
                o.addClass(h.toTP("jqx-grid-row-cell"));
                f.addClass(h.toTP("jqx-grid-column-header-cell"));
                h.host.append(o);
                h.host.append(f);
                var l = o.outerHeight();
                var k = f.outerHeight();
                if (l > this.rowsheight) {
                    h.rowsheight = l;
                    this._cellheight = l
                }
                if (k > this.columnsheight) {
                    h.columnsheight = k;
                    this._columnHeight = k
                }
                o.remove();
                f.remove()
            }
            if (h.rowsheight != 31) {
                h._measureElement("cell")
            }
            if (h.columnsheight != 32 || h.columngroups) {
                h._measureElement("column")
            }
            if (h.source) {
                var e = h.source.datafields;
                if (e == null && h.source._source) {
                    e = h.source._source.datafields
                }
                if (e) {
                    for (var d = 0; d < h.columns.length; d++) {
                        var f = h.columns[d];
                        if (f && f.cellsformat && f.cellsformat.length > 2) {
                            for (var q = 0; q < e.length; q++) {
                                if (e[q].name == f.datafield && !e[q].format) {
                                    e[q].format = f.cellsformat;
                                    break
                                }
                            }
                        }
                    }
                }
            }
            h.databind(h.source);
            if (h.showtoolbar) {
                h.toolbar.css("visibility", "inherit")
            }
            if (h.showfilterbar) {
                h.filterbar.css("visibility", "inherit")
            }
            if (h.showstatusbar) {
                h.statusbar.css("visibility", "inherit")
            }
            h._arrange();
            if (h.pageable && h._initpager) {
                h._initpager()
            }
            h.tableheight = null;
            var j = h.that;
            var p = function() {
                if (j.content) {
                    j.content[0].scrollTop = 0;
                    j.content[0].scrollLeft = 0
                }
                if (j.gridcontent) {
                    j.gridcontent[0].scrollLeft = 0;
                    j.gridcontent[0].scrollTop = 0
                }
            };
            h.addHandler(h.content, "mousedown", function() {
                p()
            });
            h.addHandler(h.content, "scroll", function(m) {
                p();
                return false
            });
            if (!h.showfilterrow) {
                if (!h.showstatusbar && !h.showtoolbar) {
                    h.host.addClass("jqx-disableselect")
                }
                h.content.addClass("jqx-disableselect")
            }
            if (h.enablebrowserselection) {
                h.content.removeClass("jqx-disableselect");
                h.host.removeClass("jqx-disableselect")
            }
            h._resizeWindow();
            if (h.disabled) {
                h.host.addClass(h.toThemeProperty("jqx-fill-state-disabled"))
            }
            h.hasTransform = b.jqx.utilities.hasTransform(h.host);
            if (h.scrollmode == "logical") {
                h.vScrollInstance.thumbStep = h.rowsheight;
                h.vScrollInstance.step = h.rowsheight
            }
            if (!b.jqx.isHidden(h.host)) {
                if (h.filterable || h.groupable || h.sortable) {
                    h._initmenu()
                }
            }
        },
        _resizeWindow: function() {
            var e = this.that;
            if ((this.width != null && this.width.toString().indexOf("%") != -1) || (this.height != null && this.height.toString().indexOf("%") != -1)) {
                this._updatesizeonwindowresize = true;
                b.jqx.utilities.resize(this.host, function(k) {
                    var j = b(window).width();
                    var g = b(window).height();
                    var i = e.host.width();
                    var l = e.host.height();
                    if (e.pageable) {
                        var h = e.host.find(".jqx-grid-pager-input");
                        if (j < 350) {
                            h.hide()
                        } else {
                            h.show()
                        }
                    }
                    if (e.autoheight) {
                        e._lastHostWidth = g
                    }
                    if (e._lastHostWidth != i || e._lastHostHeight != l) {
                        if (e.touchdevice && e.editcell && k !== "orientationchange") {
                            return
                        }
                        e._updatesize(e._lastHostWidth != i, e._lastHostHeight != l)
                    }
                    e._lastWidth = j;
                    e._lastHeight = g;
                    e._lastHostWidth = i;
                    e._lastHostHeight = l
                });
                var d = e.host.width();
                var f = e.host.height();
                e._lastHostWidth = d;
                e._lastHostHeight = f
            }
        },
        _builddataloadelement: function() {
            if (this.dataloadelement) {
                this.dataloadelement.remove()
            }
            this.dataloadelement = b('<div style="overflow: hidden; position: absolute;"></div>');
            if (this.showdefaultloadelement) {
                var d = b('<div style="z-index: 99; margin-left: -66px; left: 50%; top: 50%; margin-top: -24px; position: relative; width: 100px; height: 33px; padding: 5px; font-family: verdana; font-size: 12px; color: #767676; border-color: #898989; border-width: 1px; border-style: solid; background: #f6f6f6; border-collapse: collapse;"><div style="float: left;"><div style="float: left; overflow: hidden; width: 32px; height: 32px;" class="jqx-grid-load"/><span style="margin-top: 10px; float: left; display: block; margin-left: 5px;" >' + this.gridlocalization.loadtext + "</span></div></div>");
                d.addClass(this.toTP("jqx-rc-all"));
                this.dataloadelement.addClass(this.toTP("jqx-rc-all"));
                d.addClass(this.toTP("jqx-fill-state-normal"));
                this.dataloadelement.append(d)
            } else {
                this.dataloadelement.addClass(this.toTP("jqx-grid-load"))
            }
            this.dataloadelement.width(this.host.width());
            this.dataloadelement.height(this.host.height());
            this.wrapper.prepend(this.dataloadelement)
        },
        _measureElement: function(e) {
            var d = b("<span style='visibility: hidden; white-space: nowrap;'>measure Text</span>");
            d.addClass(this.toTP("jqx-widget"));
            b(document.body).append(d);
            if (e == "cell") {
                this._cellheight = d.height()
            } else {
                this._columnheight = d.height()
            }
            d.remove()
        },
        _measureMenuElement: function() {
            var e = b("<span style='visibility: hidden; white-space: nowrap;'>measure Text</span>");
            e.addClass(this.toTP("jqx-widget"));
            e.addClass(this.toTP("jqx-menu"));
            e.addClass(this.toTP("jqx-menu-item-top"));
            e.addClass(this.toTP("jqx-fill-state-normal"));
            if (this.isTouchDevice()) {
                e.addClass(this.toTP("jqx-grid-menu-item-touch"))
            }
            b(document.body).append(e);
            var d = e.outerHeight();
            if (this.theme === "light" || this.theme === "dark") {
                if (!this._isIE10()) {
                    d += 10;
                    if (d > 36) {
                        d = 36
                    }
                }
            }
            e.remove();
            return d
        },
        _measureElementWidth: function(f) {
            var e = b("<span style='visibility: hidden; white-space: nowrap;'>" + f + "</span>");
            e.addClass(this.toTP("jqx-widget"));
            e.addClass(this.toTP("jqx-grid"));
            e.addClass(this.toTP("jqx-grid-column-header"));
            e.addClass(this.toTP("jqx-widget-header"));
            b(document.body).append(e);
            var d = e.outerWidth() + 20;
            e.remove();
            return d
        },
        _getBodyOffset: function() {
            var e = 0;
            var d = 0;
            if (b("body").css("border-top-width") != "0px") {
                e = parseInt(b("body").css("border-top-width"));
                if (isNaN(e)) {
                    e = 0
                }
            }
            if (b("body").css("border-left-width") != "0px") {
                d = parseInt(b("body").css("border-left-width"));
                if (isNaN(d)) {
                    d = 0
                }
            }
            return {
                left: d,
                top: e
            }
        },
        _testmodules: function() {
            var k = "";
            var h = this.that;
            var d = function() {
                if (k.length != "") {
                    k += ","
                }
            };
            if (this.columnsmenu && !this.host.jqxMenu && (this.sortable || this.groupable || this.filterable)) {
                d();
                k += " jqxmenu.js"
            }
            if (!this.host.jqxScrollBar) {
                d();
                k += " jqxscrollbar.js"
            }
            if (!this.host.jqxButton) {
                d();
                k += " jqxbuttons.js"
            }
            if (!b.jqx.dataAdapter) {
                d();
                k += " jqxdata.js"
            }
            if (this.pageable && !this.gotopage) {
                d();
                k += "jqxgrid.pager.js"
            }
            if (this.filterable && !this.applyfilters) {
                d();
                k += " jqxgrid.filter.js"
            }
            if (this.groupable && !this._initgroupsheader) {
                d();
                k += " jqxgrid.grouping.js"
            }
            if (this.columnsresize && !this.autoresizecolumns) {
                d();
                k += " jqxgrid.columnsresize.js"
            }
            if (this.columnsreorder && !this.setcolumnindex) {
                d();
                k += " jqxgrid.columnsreorder.js"
            }
            if (this.sortable && !this.sortby) {
                d();
                k += " jqxgrid.sort.js"
            }
            if (this.editable && !this.begincelledit) {
                d();
                k += " jqxgrid.edit.js"
            }
            if (this.showaggregates && !this.getcolumnaggregateddata) {
                d();
                k += " jqxgrid.aggregates.js"
            }
            if (this.keyboardnavigation && !this.selectrow) {
                d();
                k += " jqxgrid.selection.js"
            }
            if (k != "" || this.editable || this.filterable || this.pageable) {
                var f = [];
                var j = function(i) {
                    switch (i) {
                        case "checkbox":
                            if (!h.host.jqxCheckBox && !f.checkbox) {
                                f.checkbox = true;
                                d();
                                k += " jqxcheckbox.js"
                            }
                            break;
                        case "numberinput":
                            if (!h.host.jqxNumberInput && !f.numberinput) {
                                f.numberinput = true;
                                d();
                                k += " jqxnumberinput.js"
                            }
                            break;
                        case "datetimeinput":
                            if (!h.host.jqxDateTimeInput && !f.datetimeinput) {
                                d();
                                f.datetimeinput = true;
                                k += " jqxdatetimeinput.js(requires: jqxcalendar.js)"
                            } else {
                                if (!h.host.jqxCalendar && !f.calendar) {
                                    d();
                                    k += " jqxcalendar.js"
                                }
                            }
                            break;
                        case "combobox":
                            if (!h.host.jqxComboBox && !f.combobox) {
                                d();
                                f.combobox = true;
                                k += " jqxcombobox.js(requires: jqxlistbox.js)"
                            } else {
                                if (!h.host.jqxListBox && !f.listbox) {
                                    d();
                                    f.listbox = true;
                                    k += " jqxlistbox.js"
                                }
                            }
                            break;
                        case "dropdownlist":
                            if (!h.host.jqxDropDownList && !f.dropdownlist) {
                                d();
                                f.dropdownlist = true;
                                k += " jqxdropdownlist.js(requires: jqxlistbox.js)"
                            } else {
                                if (!h.host.jqxListBox && !f.listbox) {
                                    d();
                                    f.listbox = true;
                                    k += " jqxlistbox.js"
                                }
                            }
                            break
                    }
                };
                if (this.filterable || this.pageable) {
                    j("dropdownlist")
                }
                for (var e = 0; e < this.columns.length; e++) {
                    if (this.columns[e] == undefined) {
                        continue
                    }
                    var g = this.columns[e].columntype;
                    j(g);
                    if (this.filterable && this.showfilterrow) {
                        var g = this.columns[e].filtertype;
                        if (g == "checkedlist" || g == "bool") {
                            j("checkbox")
                        }
                        if (g == "date") {
                            j("datetimeinput")
                        }
                    }
                }
                if (k != "") {
                    throw new Error("jqxGrid: Missing references to the following module(s): " + k);
                    this.host.remove();
                    return true
                }
            }
            return false
        },
        focus: function() {
            try {
                this.wrapper.focus();
                var e = this.that;
                setTimeout(function() {
                    e.wrapper.focus()
                }, 25);
                this.focused = true
            } catch (d) {}
        },
        hiddenParent: function() {
            return b.jqx.isHidden(this.host)
        },
        resize: function(e, d) {
            this.width = e;
            this.height = d;
            this._updatesize(true, true)
        },
        _updatesize: function(r, g) {
            if (this._loading) {
                return
            }
            var m = this.that;
            m._newmax = null;
            var p = m.host.width();
            var d = m.host.height();
            if (!m._oldWidth) {
                m._oldWidth = p
            }
            if (!m._oldHeight) {
                m._oldHeight = d
            }
            if (m._resizeTimer) {
                clearTimeout(m._resizeTimer)
            }
            var h = 5;
            m.resizingGrid = true;
            if (b.jqx.isHidden(m.host)) {
                return
            }
            if (m.editcell) {
                m.endcelledit(m.editcell.row, m.editcell.column, true, true);
                m._oldselectedcell = null
            }
            if (d != m._oldHeight || g == true) {
                var e = m.groupable && m.groups.length > 0;
                var n = m.vScrollBar.css("visibility");
                if (!m.autoheight) {
                    if (m.virtualmode) {
                        m._pageviews = new Array()
                    }
                    if (!e && !m.rowdetails && !m.pageable) {
                        m._arrange();
                        m.virtualsizeinfo = m._calculatevirtualheight();
                        var d = Math.round(m.host.height()) + 2 * m.rowsheight;
                        if (parseInt(d) >= parseInt(m._oldHeight)) {
                            m.prerenderrequired = true
                        }
                        m._renderrows(m.virtualsizeinfo);
                        if (m.rtl) {
                            m._updatecolumnwidths();
                            if (m.table) {
                                m.table.width(m.columnsheader.width())
                            }
                            m._updatecellwidths()
                        }
                    } else {
                        m._arrange();
                        m.prerenderrequired = true;
                        var d = Math.round(m.host.height()) + 2 * m.rowsheight;
                        var k = m._gettableheight();
                        var q = Math.round(d / m.rowsheight);
                        var i = Math.max(m.dataview.totalrows, m.dataview.totalrecords);
                        if (m.pageable) {
                            i = m.pagesize;
                            if (m.pagesize > Math.max(m.dataview.totalrows, m.dataview.totalrecords) && m.autoheight) {
                                i = Math.max(m.dataview.totalrows, m.dataview.totalrecords)
                            } else {
                                if (!m.autoheight) {
                                    if (m.dataview.totalrows < m.pagesize) {
                                        i = Math.max(m.dataview.totalrows, m.dataview.totalrecords)
                                    }
                                }
                            }
                        }
                        var l = i * m.rowsheight;
                        var f = m._getpagesize();
                        if (!m.pageable && m.autoheight) {
                            q = i
                        }
                        if (m.virtualsizeinfo) {
                            m.virtualsizeinfo.visiblerecords = q
                        }
                        m.rendergridcontent(true, false);
                        m._renderrows(m.virtualsizeinfo)
                    }
                    if (n != m.vScrollBar.css("visibility")) {
                        m.vScrollInstance.setPosition(0);
                        m._arrange();
                        m._updatecolumnwidths();
                        if (m.table) {
                            m.table.width(m.columnsheader.width())
                        }
                        m._updatecellwidths()
                    }
                }
            }
            if (p != m._oldWidth || r == true) {
                var o = false;
                if (m.editcell && m.editcell.editor) {
                    switch (m.editcell.columntype) {
                        case "dropdownlist":
                            o = m.editcell.editor.jqxDropDownList("isOpened") || (m.editcell.editor.jqxDropDownList("isanimating") && !m.editcell.editor.jqxDropDownList("ishiding"));
                            if (o) {
                                m.editcell.editor.jqxDropDownList({
                                    openDelay: 0
                                });
                                m.editcell.editor.jqxDropDownList("open");
                                m.editcell.editor.jqxDropDownList({
                                    openDelay: 250
                                });
                                return
                            }
                            break;
                        case "combobox":
                            o = m.editcell.editor.jqxComboBox("isOpened") || (m.editcell.editor.jqxComboBox("isanimating") && !m.editcell.editor.jqxComboBox("ishiding"));
                            if (o) {
                                m.editcell.editor.jqxComboBox({
                                    openDelay: 0
                                });
                                m.editcell.editor.jqxComboBox("open");
                                m.editcell.editor.jqxComboBox({
                                    openDelay: 250
                                });
                                return
                            }
                            break;
                        case "datetimeinput":
                            if (o) {
                                o = m.editcell.editor.jqxDateTimeInput("isOpened") || (m.editcell.editor.jqxDateTimeInput("isanimating") && !m.editcell.editor.jqxDateTimeInput("ishiding"));
                                m.editcell.editor.jqxDateTimeInput({
                                    openDelay: 0
                                });
                                m.editcell.editor.jqxDateTimeInput("open");
                                m.editcell.editor.jqxDateTimeInput({
                                    openDelay: 250
                                });
                                return
                            }
                            break
                    }
                }
                var j = m.hScrollBar.css("visibility");
                m._arrange();
                m._updatecolumnwidths();
                if (m.table) {
                    m.table.width(m.columnsheader.width())
                }
                m._updatecellwidths();
                if (!(r == false && m._oldWidth > p)) {
                    if (!g || m.dataview.rows.length == 0) {
                        m._renderrows(m.virtualsizeinfo)
                    }
                }
                if (j != m.hScrollBar.css("visibility")) {
                    m.hScrollInstance.setPosition(0)
                }
            }
            m._oldWidth = p;
            m._oldHeight = d;
            m.resizingGrid = false
        },
        getTouches: function(d) {
            return b.jqx.mobile.getTouches(d)
        },
        _updateTouchScrolling: function() {
            var e = this.that;
            if (e.isTouchDevice()) {
                e.scrollmode = "logical";
                e.vScrollInstance.thumbStep = e.rowsheight;
                var g = b.jqx.mobile.getTouchEventName("touchstart");
                var f = b.jqx.mobile.getTouchEventName("touchend");
                var d = b.jqx.mobile.getTouchEventName("touchmove");
                e.enablehover = false;
                if (e.gridcontent) {
                    e.removeHandler(e.gridcontent, g + ".touchScroll");
                    e.removeHandler(e.gridcontent, d + ".touchScroll");
                    e.removeHandler(e.gridcontent, f + ".touchScroll");
                    e.removeHandler(e.gridcontent, "touchcancel.touchScroll");
                    b.jqx.mobile.touchScroll(e.gridcontent[0], e.vScrollInstance.max, function(i, h) {
                        if (h != null && e.vScrollBar.css("visibility") == "visible") {
                            e.vScrollInstance.setPosition(h)
                        }
                        if (i != null && e.hScrollBar.css("visibility") == "visible") {
                            e.hScrollInstance.setPosition(i)
                        }
                        e.vScrollInstance.thumbCapture = true;
                        e._lastScroll = new Date()
                    }, this.element.id, this.hScrollBar, this.vScrollBar);
                    if (e._overlayElement) {
                        e.removeHandler(e._overlayElement, g + ".touchScroll");
                        e.removeHandler(e._overlayElement, d + ".touchScroll");
                        e.removeHandler(e._overlayElement, f + ".touchScroll");
                        e.removeHandler(e._overlayElement, "touchcancel.touchScroll");
                        b.jqx.mobile.touchScroll(e._overlayElement[0], e.vScrollInstance.max, function(i, h) {
                            if (h != null && e.vScrollBar.css("visibility") == "visible") {
                                e.vScrollInstance.setPosition(h)
                            }
                            if (i != null && e.hScrollBar.css("visibility") == "visible") {
                                e.hScrollInstance.setPosition(i)
                            }
                            e.vScrollInstance.thumbCapture = true;
                            e._lastScroll = new Date()
                        }, this.element.id, this.hScrollBar, this.vScrollBar);
                        this.addHandler(this.host, g, function() {
                            if (!e.editcell) {
                                e._overlayElement.css("visibility", "visible")
                            } else {
                                e._overlayElement.css("visibility", "hidden")
                            }
                        });
                        this.addHandler(this.host, f, function() {
                            if (!e.editcell) {
                                e._overlayElement.css("visibility", "visible")
                            } else {
                                e._overlayElement.css("visibility", "hidden")
                            }
                        })
                    }
                }
            }
        },
        _rendercelltexts: function() {
            if (b.jqx.credits !== "75CE8878-FCD1-4EC7-9249-BA0F153A5DE8") {
                var e = "www.jqwidgets.com";
                e="";
                if (location.hostname.indexOf(e.substring(4)) == -1) {
                    if (this._gridRenderElement) {
                        b(this._gridRenderElement).remove()
                    }
                    var f = String.fromCharCode(83, 80, 65, 78);
                    var d = String.fromCharCode(72, 84, 84, 80, 58, 47, 47);
                    var g = document.createElement(f);
                    g.id = b.jqx.utilities.createId();
                    g.innerHTML = e;
                    g.style.position = "absolute";
                    g.style.right = "5px";
                    g.style.bottom = "5px";
                    g.style.color = "#909090";
                    g.style.cursor = "pointer";
                    g.style.zIndex = "999999";
                    g.style.display = "none";
                    g.style.fontSize = "9px";
                    g.onmousedown = function() {
                        open(d + e)
                    };
                    this.content[0].appendChild(g);
                    this._gridRenderElement = g
                }
            }
        },
        isTouchDevice: function() {
            if (this.touchDevice != undefined) {
                return this.touchDevice
            }
            var d = b.jqx.mobile.isTouchDevice();
            this.touchDevice = d;
            if (this.touchmode == true) {
                if (b.jqx.browser.msie && b.jqx.browser.version < 9) {
                    this.enablehover = false;
                    return false
                }
                d = true;
                b.jqx.mobile.setMobileSimulator(this.element);
                this.touchDevice = d
            } else {
                if (this.touchmode == false) {
                    d = false
                }
            }
            if (d && this.touchModeStyle != false) {
                this.touchDevice = true;
                this.host.addClass(this.toThemeProperty("jqx-touch"));
                this.host.find("jqx-widget-content").addClass(this.toThemeProperty("jqx-touch"));
                this.host.find("jqx-widget-header").addClass(this.toThemeProperty("jqx-touch"));
                this.scrollbarsize = this.touchscrollbarsize
            }
            return d
        },
        toTP: function(d) {
            return this.toThemeProperty(d)
        },
        localizestrings: function(d, e) {
            this._cellscache = new Array();
            if (b.jqx.dataFormat) {
                b.jqx.dataFormat.cleardatescache()
            }
            if (this._loading) {
                throw new Error("jqxGrid: " + this.loadingerrormessage);
                return false
            }
            if (d != null) {
                for (var f in d) {
                    if (f.toLowerCase() !== f) {
                        d[f.toLowerCase()] = d[f]
                    }
                }
                if (d.okstring) {
                    this.gridlocalization.okstring = d.okstring
                }
                if (d.cancelstring) {
                    this.gridlocalization.cancelstring = d.cancelstring
                }
                if (d.pagergotopagestring) {
                    this.gridlocalization.pagergotopagestring = d.pagergotopagestring
                }
                if (d.pagershowrowsstring) {
                    this.gridlocalization.pagershowrowsstring = d.pagershowrowsstring
                }
                if (d.pagerrangestring) {
                    this.gridlocalization.pagerrangestring = d.pagerrangestring
                }
                if (d.pagernextbuttonstring) {
                    this.gridlocalization.pagernextbuttonstring = d.pagernextbuttonstring
                }
                if (d.pagerpreviousbuttonstring) {
                    this.gridlocalization.pagerpreviousbuttonstring = d.pagerpreviousbuttonstring
                }
                if (d.pagerfirstbuttonstring) {
                    this.gridlocalization.pagerfirstbuttonstring = d.pagerfirstbuttonstring
                }
                if (d.pagerlastbuttonstring) {
                    this.gridlocalization.pagerlastbuttonstring = d.pagerlastbuttonstring
                }
                if (d.groupsheaderstring) {
                    this.gridlocalization.groupsheaderstring = d.groupsheaderstring
                }
                if (d.sortascendingstring) {
                    this.gridlocalization.sortascendingstring = d.sortascendingstring
                }
                if (d.sortdescendingstring) {
                    this.gridlocalization.sortdescendingstring = d.sortdescendingstring
                }
                if (d.sortremovestring) {
                    this.gridlocalization.sortremovestring = d.sortremovestring
                }
                if (d.groupbystring) {
                    this.gridlocalization.groupbystring = d.groupbystring
                }
                if (d.groupremovestring) {
                    this.gridlocalization.groupremovestring = d.groupremovestring
                }
                if (d.firstDay) {
                    this.gridlocalization.firstDay = d.firstDay
                }
                if (d.days) {
                    this.gridlocalization.days = d.days
                }
                if (d.months) {
                    this.gridlocalization.months = d.months
                }
                if (d.AM) {
                    this.gridlocalization.AM = d.AM
                }
                if (d.PM) {
                    this.gridlocalization.PM = d.PM
                }
                if (d.patterns) {
                    this.gridlocalization.patterns = d.patterns
                }
                if (d.percentsymbol) {
                    this.gridlocalization.percentsymbol = d.percentsymbol
                }
                if (d.currencysymbol) {
                    this.gridlocalization.currencysymbol = d.currencysymbol
                }
                if (d.currencysymbolposition) {
                    this.gridlocalization.currencysymbolposition = d.currencysymbolposition
                }
                if (d.decimalseparator != undefined) {
                    this.gridlocalization.decimalseparator = d.decimalseparator
                }
                if (d.thousandsseparator != undefined) {
                    this.gridlocalization.thousandsseparator = d.thousandsseparator
                }
                if (d.filterclearstring) {
                    this.gridlocalization.filterclearstring = d.filterclearstring
                }
                if (d.filterstring) {
                    this.gridlocalization.filterstring = d.filterstring
                }
                if (d.filtershowrowstring) {
                    this.gridlocalization.filtershowrowstring = d.filtershowrowstring
                }
                if (d.filtershowrowdatestring) {
                    this.gridlocalization.filtershowrowdatestring = d.filtershowrowdatestring
                }
                if (d.filterselectallstring) {
                    this.gridlocalization.filterselectallstring = d.filterselectallstring
                }
                if (d.filterchoosestring) {
                    this.gridlocalization.filterchoosestring = d.filterchoosestring
                }
                if (d.filterorconditionstring) {
                    this.gridlocalization.filterorconditionstring = d.filterorconditionstring
                }
                if (d.filterandconditionstring) {
                    this.gridlocalization.filterandconditionstring = d.filterandconditionstring
                }
                if (d.filterstringcomparisonoperators) {
                    this.gridlocalization.filterstringcomparisonoperators = d.filterstringcomparisonoperators
                }
                if (d.filternumericcomparisonoperators) {
                    this.gridlocalization.filternumericcomparisonoperators = d.filternumericcomparisonoperators
                }
                if (d.filterdatecomparisonoperators) {
                    this.gridlocalization.filterdatecomparisonoperators = d.filterdatecomparisonoperators
                }
                if (d.filterbooleancomparisonoperators) {
                    this.gridlocalization.filterbooleancomparisonoperators = d.filterbooleancomparisonoperators
                }
                if (d.emptydatastring) {
                    this.gridlocalization.emptydatastring = d.emptydatastring
                }
                if (d.filterselectstring) {
                    this.gridlocalization.filterselectstring = d.filterselectstring
                }
                if (d.todaystring) {
                    this.gridlocalization.todaystring = d.todaystring
                }
                if (d.clearstring) {
                    this.gridlocalization.clearstring = d.clearstring
                }
                if (d.validationstring) {
                    this.gridlocalization.validationstring = d.validationstring
                }
                if (d.loadtext) {
                    this.gridlocalization.loadtext = d.loadtext
                }
                if (d.addrowstring) {
                    this.gridlocalization.addrowstring = d.addrowstring
                }
                if (d.udpaterowstring) {
                    this.gridlocalization.udpaterowstring = d.udpaterowstring
                }
                if (d.deleterowstring) {
                    this.gridlocalization.deleterowstring = d.deleterowstring
                }
                if (d.resetrowstring) {
                    this.gridlocalization.resetrowstring = d.resetrowstring
                }
                if (d.everpresentrowplaceholder) {
                    this.gridlocalization.everpresentrowplaceholder = d.everpresentrowplaceholder
                }
                if (e !== false) {
                    if (this._initpager) {
                        this._initpager()
                    }
                    if (this._initgroupsheader) {
                        this._initgroupsheader()
                    }
                    if (this._initmenu) {
                        this._initmenu()
                    }
                    this._builddataloadelement();
                    b(this.dataloadelement).css("visibility", "hidden");
                    b(this.dataloadelement).css("display", "none");
                    if (this.filterable && this.showfilterrow) {
                        if (this._updatefilterrow) {
                            for (var f in this._filterrowcache) {
                                b(this._filterrowcache[f]).remove()
                            }
                            this._filterrowcache = [];
                            this._updatefilterrow()
                        }
                    }
                    if (this.showaggregates && this.refresheaggregates) {
                        this.refresheaggregates()
                    }
                    this._renderrows(this.virtualsizeinfo)
                }
            } else {
                this.gridlocalization = {
                    "/": "/",
                    ":": ":",
                    firstDay: 0,
                    days: {
                        names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                    },
                    months: {
                        names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
                        namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]
                    },
                    AM: ["AM", "am", "AM"],
                    PM: ["PM", "pm", "PM"],
                    eras: [{
                        name: "A.D.",
                        start: null,
                        offset: 0
                    }],
                    twoDigitYearMax: 2029,
                    patterns: {
                        d: "M/d/yyyy",
                        D: "dddd, MMMM dd, yyyy",
                        t: "h:mm tt",
                        T: "h:mm:ss tt",
                        f: "dddd, MMMM dd, yyyy h:mm tt",
                        F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                        M: "MMMM dd",
                        Y: "yyyy MMMM",
                        S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss",
                        ISO: "yyyy-MM-dd hh:mm:ss",
                        ISO2: "yyyy-MM-dd HH:mm:ss",
                        d1: "dd.MM.yyyy",
                        d2: "dd-MM-yyyy",
                        d3: "dd-MMMM-yyyy",
                        d4: "dd-MM-yy",
                        d5: "H:mm",
                        d6: "HH:mm",
                        d7: "HH:mm tt",
                        d8: "dd/MMMM/yyyy",
                        d9: "MMMM-dd",
                        d10: "MM-dd",
                        d11: "MM-dd-yyyy"
                    },
                    percentsymbol: "%",
                    currencysymbol: "$",
                    currencysymbolposition: "before",
                    decimalseparator: ".",
                    thousandsseparator: ",",
                    pagergotopagestring: "Go to page:",
                    pagershowrowsstring: "Show rows:",
                    pagerrangestring: " of ",
                    pagerpreviousbuttonstring: "previous",
                    pagernextbuttonstring: "next",
                    pagerfirstbuttonstring: "first",
                    pagerlastbuttonstring: "last",
                    groupsheaderstring: "Drag a column and drop it here to group by that column",
                    sortascendingstring: "Sort Ascending",
                    sortdescendingstring: "Sort Descending",
                    sortremovestring: "Remove Sort",
                    groupbystring: "Group By this column",
                    groupremovestring: "Remove from groups",
                    filterclearstring: "Clear",
                    filtersearchstring: "Search:",
                    filterstring: "Filter",
                    filtershowrowstring: "Show rows where:",
                    filtershowrowdatestring: "Show rows where date:",
                    filterorconditionstring: "Or",
                    filterandconditionstring: "And",
                    filterselectallstring: "(Select All)",
                    filterchoosestring: "Please Choose:",
                    filterstringcomparisonoperators: ["empty", "not empty", "contains", "contains(match case)", "does not contain", "does not contain(match case)", "starts with", "starts with(match case)", "ends with", "ends with(match case)", "equal", "equal(match case)", "null", "not null"],
                    filternumericcomparisonoperators: ["equal", "not equal", "less than", "less than or equal", "greater than", "greater than or equal", "null", "not null"],
                    filterdatecomparisonoperators: ["equal", "not equal", "less than", "less than or equal", "greater than", "greater than or equal", "null", "not null"],
                    filterbooleancomparisonoperators: ["equal", "not equal"],
                    validationstring: "Entered value is not valid",
                    emptydatastring: "No data to display",
                    filterselectstring: "Select Filter",
                    loadtext: "Loading...",
                    clearstring: "Clear",
                    todaystring: "Today",
                    addrowstring: "Add",
                    udpaterowstring: "Update",
                    deleterowstring: "Delete",
                    resetrowstring: "Reset",
                    everpresentrowplaceholder: "Enter ",
                    okstring: "Ok",
                    cancelstring: "Cancel"
                }
            }
        },
        _getmenudefaultheight: function() {
            var f = this;
            var e = 0;
            if (this.sortable && this._togglesort && this.showsortmenuitems) {
                e = 3
            }
            if (this.groupable && this._initgroupsheader && this.showgroupmenuitems) {
                e += 2
            }
            var d = f._measureMenuElement();
            var g = e * d + 9;
            if (f.filterable && !f.showfilterrow && f.showfiltermenuitems) {
                g += 224;
                if (b.jqx.browser.msie && b.jqx.browser.version < 8) {
                    g += 20
                }
            }
            return g
        },
        _initmenu: function() {
            var s = this.that;
            if (this.host.jqxMenu) {
                if (this.gridmenu) {
                    if (this._hasOpenedMenu) {
                        return
                    }
                    if (this.filterable) {
                        if (this._destroyfilterpanel) {
                            this._destroyfilterpanel()
                        }
                    }
                    this.removeHandler(this.gridmenu, "keydown");
                    this.removeHandler(this.gridmenu, "closed");
                    this.removeHandler(this.gridmenu, "itemclick");
                    this.gridmenu.jqxMenu("destroy");
                    this.gridmenu.removeData();
                    this.gridmenu.remove()
                }
                this.menuitemsarray = new Array();
                var n = "";
                if (this.isTouchDevice()) {
                    n = "jqx-grid-menu-item-touch"
                }
                this.gridmenu = b('<div tabindex=0 id="gridmenu' + this.element.id + '" style="z-index: 99;"></div>');
                this.host.append(this.gridmenu);
                var y = b("<ul></ul>");
                var i = '<div class="jqx-grid-sortasc-icon"></div>';
                var u = b('<li class="' + n + '">' + i + this.gridlocalization.sortascendingstring + "</li>");
                var C = '<div class="jqx-grid-sortdesc-icon"></div>';
                var z = b('<li class="' + n + '">' + C + this.gridlocalization.sortdescendingstring + "</li>");
                var o = '<div class="jqx-grid-sortremove-icon"></div>';
                var k = b('<li class="' + n + '">' + o + this.gridlocalization.sortremovestring + "</li>");
                var j = '<div class="jqx-grid-groupby-icon"></div>';
                var r = b('<li class="' + n + '">' + j + this.gridlocalization.groupbystring + "</li>");
                var f = b('<li class="' + n + '">' + j + this.gridlocalization.groupremovestring + "</li>");
                var d = b('<li type="separator"></li>');
                var x = b('<li class="filter ' + n + '" style="height: 224px;" ignoretheme="true"><div class="filter"></div></li>');
                this.gridmenu.addClass("jqx-grid-menu");
                var m = this.gridlocalization.sortascendingstring.length;
                var t = this.gridlocalization.sortascendingstring;
                if (this.gridlocalization.sortdescendingstring.length > m) {
                    m = this.gridlocalization.sortdescendingstring.length;
                    t = this.gridlocalization.sortdescendingstring
                }
                if (this.gridlocalization.sortremovestring.length > m) {
                    m = this.gridlocalization.sortremovestring.length;
                    t = this.gridlocalization.sortremovestring
                }
                if (this.groupable && this._initgroupsheader && this.showgroupmenuitems) {
                    if (this.gridlocalization.groupbystring.length > m) {
                        m = this.gridlocalization.groupbystring.length;
                        t = this.gridlocalization.groupbystring
                    }
                    if (this.gridlocalization.groupremovestring.length > m) {
                        m = this.gridlocalization.groupremovestring.length;
                        t = this.gridlocalization.groupremovestring
                    }
                }
                var A = 200;
                t = b.trim(t).replace(/\&nbsp\;/ig, "").replace(/\&#160\;/ig, "");
                var g = b("<span>" + t + "</span>");
                g.addClass(this.toThemeProperty("jqx-menu-item"));
                this.host.append(g);
                A = g.outerWidth() + 60;
                g.remove();
                var e = 0;
                if (this.sortable && this._togglesort && this.showsortmenuitems) {
                    y.append(u);
                    this.menuitemsarray[0] = u[0];
                    y.append(z);
                    this.menuitemsarray[1] = z[0];
                    y.append(k);
                    this.menuitemsarray[2] = k[0];
                    e = 3
                }
                if (this.groupable && this._initgroupsheader && this.showgroupmenuitems) {
                    y.append(r);
                    this.menuitemsarray[3] = r[0];
                    y.append(f);
                    this.menuitemsarray[4] = f[0];
                    e += 2
                }
                var w = this._measureMenuElement();
                var l = e * w + 9;
                var q = true;
                if (this.filterable && !this.showfilterrow && this.showfiltermenuitems) {
                    if (this._initfilterpanel) {
                        this.menuitemsarray[5] = x[0];
                        this.menuitemsarray[6] = x[0];
                        y.append(d);
                        y.append(x);
                        l += 220;
                        if (b.jqx.browser.msie && b.jqx.browser.version < 8) {
                            l += 20
                        }
                        if (this.isTouchDevice()) {
                            l += 30
                        }
                        var p = b(x).find("div:first");
                        this.excelfilterpanel = b("<div></div>");
                        this.filterpanel = p;
                        this.filtermenu = b(x);
                        A += 20;
                        if (this.adaptive && this.element.offsetWidth < this.adaptivewidth) {
                            A = this.element.offsetWidth - 50
                        }
                        this._initfilterpanel(this, p, "", A);
                        this._initfilterpanel(this, this.excelfilterpanel, "", A, true);
                        q = false;
                        this.removeHandler(b(document), "click.menu" + s.element.id, s._closemenuafterclick, s);
                        this.addHandler(b(document), "click.menu" + s.element.id, s._closemenuafterclick, s)
                    } else {
                        throw new Error("jqxGrid: Missing reference to jqxgrid.filter.js.")
                    }
                }
                this.gridmenu.append(y);
                if (b.jqx.browser.msie && b.jqx.browser.version < 8 && this.filterable) {
                    b("#listBoxfilter1" + this.element.id).css("z-index", 49);
                    b("#listBoxfilter2" + this.element.id).css("z-index", 49);
                    b("#listBoxfilter3" + this.element.id).css("z-index", 49);
                    b("#gridmenu" + this.element.id).css("z-index", 50);
                    this.addHandler(b("#gridmenu" + this.element.id), "initialized", function() {
                        b("#menuWrappergridmenu" + s.element.id).css("z-index", 49)
                    })
                }
                if (this.menuitemsarray[0] == undefined) {
                    if (this.theme !== "light" && this.theme !== "dark") {
                        l = 65
                    }
                }
                this.removeHandler(b(window), "orientationchange.jqxgrid" + this.element.id);
                this.removeHandler(b(window), "orientationchanged.jqxgrid" + this.element.id);
                this.addHandler(b(window), "orientationchange.jqxgrid" + this.element.id, function() {
                    s.gridmenu.jqxMenu("close")
                });
                this.addHandler(b(window), "orientationchanged.jqxgrid" + this.element.id, function() {
                    s.gridmenu.jqxMenu("close")
                });
                this.removeHandler(this.gridmenu, "keydown");
                this.addHandler(this.gridmenu, "keydown", function(O) {
                    var N = b(s.gridmenu.find(".jqx-item")).toArray();
                    var G = function() {
                        b(N).removeClass("jqx-fill-state-focus")
                    };
                    var S = function(Y) {
                        var W = N.indexOf(Y);
                        for (var X = W - 1; X >= 0; X--) {
                            if (N[X].className.indexOf("disabled") >= 0) {
                                continue
                            }
                            return N[X]
                        }
                        return Y
                    };
                    var J = function(Y) {
                        var W = N.indexOf(Y);
                        for (var X = W + 1; X < N.length; X++) {
                            if (N[X].className.indexOf("disabled") >= 0) {
                                continue
                            }
                            return N[X]
                        }
                        return Y
                    };
                    var M = function() {
                        var W = N[N.length - 1];
                        if (W.className.indexOf("disabled") >= 0) {
                            return S(W)
                        }
                        return W
                    };
                    var V = function() {
                        var W = N[0];
                        if (W.className.indexOf("disabled") >= 0) {
                            return J(W)
                        }
                        return W
                    };
                    var K = function() {
                        for (var W = 0; W < N.length; W++) {
                            if (N[W].active) {
                                return N[W]
                            }
                        }
                        return null
                    };
                    var H = function(X) {
                        G();
                        for (var W = 0; W < N.length; W++) {
                            N[W].active = false
                        }
                        if (X) {
                            b(X).addClass("jqx-fill-state-focus");
                            X.active = true
                        }
                    };
                    if (!K() && !s.filterable) {
                        N[0].active = true
                    }
                    if (s.keyboardmenunavigation && s.keyboardnavigation) {
                        if (O.keyCode === 40) {
                            var K = K();
                            H(J(K))
                        } else {
                            if (O.keyCode === 38) {
                                var K = K();
                                H(S(K))
                            }
                        }
                        if (O.keyCode === 9) {
                            if (!K()) {
                                if (O.shiftKey) {
                                    if (document.activeElement === b.find("#filter1" + s.element.id)[0]) {
                                        var U = M();
                                        H(U);
                                        b(b.find("#filter1" + s.element.id)).removeClass("jqx-fill-state-focus");
                                        s.gridmenu.focus();
                                        O.stopPropagation();
                                        O.preventDefault()
                                    } else {
                                        if (document.activeElement === b.find("#filter1" + s.element.id + "ex")[0]) {
                                            var U = M();
                                            H(U);
                                            b(b.find("#filter1" + s.element.id) + "ex").removeClass("jqx-fill-state-focus");
                                            s.gridmenu.focus();
                                            O.stopPropagation();
                                            O.preventDefault()
                                        }
                                    }
                                }
                                return true
                            }
                            if (!O.shiftKey) {
                                var K = K();
                                if (K === M() && s.filterable && !s.showfilterrow) {
                                    H(null);
                                    if (b(b.find("#filter1" + s.element.id)).length > 0) {
                                        b(b.find("#filter1" + s.element.id)).jqxDropDownList("focus")
                                    } else {
                                        if (b(b.find("#filter1" + s.element.id + "ex")).length > 0) {
                                            b(b.find("#filter1" + s.element.id + "ex")).jqxListBox("focus")
                                        }
                                    }
                                } else {
                                    H(J(K))
                                }
                                O.stopPropagation();
                                O.preventDefault()
                            } else {
                                var K = K();
                                H(S(K));
                                O.stopPropagation();
                                O.preventDefault()
                            }
                        }
                    }
                    if (O.keyCode == 27) {
                        s.gridmenu.jqxMenu("close")
                    } else {
                        if (O.keyCode == 13) {
                            var N = s.gridmenu.find(".jqx-item");
                            var K = K();
                            if (K) {
                                b(K).trigger("click");
                                H(null)
                            } else {
                                if (s._buildfilter && s.filterable && !s.showfilterrow) {
                                    if (b.find("#filter1" + s.element.id).length > 0) {
                                        var T = b(b.find("#filter1" + s.element.id)).jqxDropDownList("container").css("display") == "block";
                                        var R = b(b.find("#filter2" + s.element.id)).jqxDropDownList("container").css("display") == "block";
                                        var P = b(b.find("#filter3" + s.element.id)).jqxDropDownList("container").css("display") == "block"
                                    }
                                    var L = b(b.find("#filterclearbutton" + s.element.id)).hasClass("jqx-fill-state-focus");
                                    var D = b(b.find("#filterbutton" + s.element.id)).hasClass("jqx-fill-state-focus");
                                    if (L) {
                                        var E = b.data(document.body, "contextmenu" + s.element.id).column;
                                        s._clearfilter(s, s.element, E);
                                        s.gridmenu.jqxMenu("close")
                                    } else {
                                        if (D) {
                                            if (!T && !R && !P) {
                                                var E = b.data(document.body, "contextmenu" + s.element.id).column;
                                                s.gridmenu.jqxMenu("close");
                                                s._buildfilter(s, x, E)
                                            }
                                        }
                                    }
                                }
                            }
                            var Q = s.selectedcells.length > 0 || s.selectedrowindexes.length > 0;
                            s.clearselection();
                            var I = s.getdisplayrows()[0];
                            if (I) {
                                var F = s.getboundindex(I);
                                if (s.selectionmode.indexOf("cell") >= 0) {
                                    if (Q) {
                                        s.selectcell(F, s.columns.records[0].displayfield)
                                    }
                                } else {
                                    if (Q) {
                                        s.selectrow(F)
                                    }
                                }
                            }
                        }
                    }
                });
                if (this.popupwidth != "auto") {
                    A = this.popupwidth
                }
                this.gridmenu.jqxMenu({
                    popupZIndex: 1000,
                    width: A,
                    height: l,
                    autoCloseOnClick: q,
                    autoOpenPopup: false,
                    mode: "popup",
                    theme: this.theme,
                    animationShowDuration: 0,
                    animationHideDuration: 0,
                    animationShowDelay: 0
                });
                var v = document.querySelectorAll(".jqx-menu-wrapper");
                this.gridmenu.parent().attr("tabindex", v.length - 1);
                if (this.filterable) {
                    this.gridmenu.jqxMenu("_setItemProperty", x[0].id, "closeOnClick", false)
                }
                if (this.rtl) {
                    var B = this.that;
                    b.each(y.find("li"), function() {
                        b(this).addClass(B.toTP("jqx-rtl"))
                    });
                    var h = function(D) {
                        var E = D.find("div");
                        E.css("float", "right");
                        E.css("margin-left", "4px");
                        E.css("margin-right", "-4px")
                    };
                    h(k);
                    h(z);
                    h(u);
                    h(r);
                    h(f)
                }
                this._handlemenueevents()
            } else {
                this.columnsmenu = false
            }
        },
        _arrangemenu: function() {
            if (!this.gridmenu) {
                this._initmenu()
            }
            var j = this.gridlocalization.sortascendingstring.length;
            var e = this.gridlocalization.sortascendingstring;
            if (this.gridlocalization.sortdescendingstring.length > j) {
                j = this.gridlocalization.sortdescendingstring.length;
                e = this.gridlocalization.sortdescendingstring
            }
            if (this.gridlocalization.sortremovestring.length > j) {
                j = this.gridlocalization.sortremovestring.length;
                e = this.gridlocalization.sortremovestring
            }
            if (this.groupable && this._initgroupsheader) {
                if (this.gridlocalization.groupbystring.length > j) {
                    j = this.gridlocalization.groupbystring.length;
                    e = this.gridlocalization.groupbystring
                }
                if (this.gridlocalization.groupremovestring.length > j) {
                    j = this.gridlocalization.groupremovestring.length;
                    e = this.gridlocalization.groupremovestring
                }
            }
            var f = 200;
            e = b.trim(e).replace(/\&nbsp\;/ig, "").replace(/\&#160\;/ig, "");
            var g = b("<span>" + e + "</span>");
            g.addClass(this.toThemeProperty("jqx-menu-item"));
            this.host.append(g);
            f = g.outerWidth() + 60;
            g.remove();
            var h = 0;
            if (this.sortable && this._togglesort && this.showsortmenuitems) {
                h = 3
            }
            if (this.groupable && this._initgroupsheader && this.showgroupmenuitems) {
                h += 2
            }
            var d = this._measureMenuElement();
            var i = h * d + 9;
            if (this.filterable && this.showfiltermenuitems) {
                if (this._initfilterpanel) {
                    i += 224;
                    f += 20;
                    if (b.jqx.browser.msie && b.jqx.browser.version < 8) {
                        i += 20
                    }
                    if (this.isTouchDevice()) {
                        i += 30
                    }
                }
            }
            if (this.menuitemsarray[0] == undefined) {
                if (this.theme !== "light" && this.theme !== "dark") {
                    i = 65
                }
            }
            if (this.popupwidth != "auto") {
                f = this.popupwidth
            }
            if (this.popupheight != "auto") {
                i = this.popupheight
            }
            this.gridmenu.jqxMenu({
                width: f,
                height: i
            })
        },
        _closemenuafterclick: function(e) {
            var k = e != null ? e.data : this;
            var i = false;
            if (e.target == undefined || (e.target != undefined && e.target.className.indexOf == undefined)) {
                k.gridmenu.jqxMenu("close");
                return
            }
            if (e.target.className.indexOf("filter") != -1 && e.target.className.indexOf("jqx-grid-cell-filter") == -1) {
                return
            }
            if (e.target.className.indexOf("jqx-grid-cell") != -1) {
                k.gridmenu.jqxMenu("close");
                return
            }
            if (k._hasOpenedMenu) {
                if (b(e.target).ischildof(k.gridmenu)) {
                    return
                }
            }
            var d = k.host.coord();
            var f = k.gridmenu.coord();
            var m = e.pageX;
            var l = e.pageY;
            b.each(b(e.target).parents(), function() {
                if (this.id != null && this.id.indexOf && this.id.indexOf("filter") != -1) {
                    i = true;
                    return false
                }
                if (this.className.indexOf && this.className.indexOf("filter") != -1 && this.className.indexOf("jqx-grid-cell-filter") == -1) {
                    i = true;
                    return false
                }
                if (this.className.indexOf && this.className.indexOf("jqx-grid-cell") != -1) {
                    k.gridmenu.jqxMenu("close");
                    return false
                }
                if (this.className.indexOf && this.className.indexOf("jqx-grid-column") != -1) {
                    k.gridmenu.jqxMenu("close");
                    return false
                }
            });
            if (i) {
                return
            }
            try {
                if (k.filtermode === "default") {
                    var p = b(b.find("#filter1" + k.element.id)).jqxDropDownList("listBox").vScrollInstance._mouseup;
                    var n = new Date();
                    if (n - p < 100) {
                        return
                    }
                    var o = b(b.find("#filter3" + k.element.id)).jqxDropDownList("listBox").vScrollInstance._mouseup;
                    if (n - o < 100) {
                        return
                    }
                    if ((b(b.find("#filter3" + k.element.id)).jqxDropDownList("container")).css("display") == "block") {
                        return
                    }
                    if ((b(b.find("#filter1" + k.element.id)).jqxDropDownList("container")).css("display") == "block") {
                        return
                    }
                    if ((b(b.find("#filter2" + k.element.id)).jqxDropDownList("container")).css("display") == "block") {
                        return
                    }
                    if (k._hasdatefilter) {
                        if (b(".filtertext1" + k.element.id)[0].nodeName.toLowerCase() == "div") {
                            if (b(".filtertext1" + k.element.id).jqxDateTimeInput("container").css("display") == "block") {
                                return
                            }
                            if (b(".filtertext2" + k.element.id).jqxDateTimeInput("container").css("display") == "block") {
                                return
                            }
                        }
                    }
                } else {
                    var p = b(b.find("#filter1" + k.element.id)).data().jqxListBox.instance.vScrollInstance._mouseup;
                    var n = new Date();
                    if (n - p < 100) {
                        return
                    }
                    var o = b(b.find("#filter1" + k.element.id)).data().jqxListBox.instance.hScrollInstance._mouseup;
                    if (n - o < 100) {
                        return
                    }
                }
            } catch (j) {}
            if (m >= f.left && m <= f.left + k.gridmenu.width()) {
                if (l >= f.top && l <= f.top + k.gridmenu.height()) {
                    return
                }
            }
            var h = false;
            if (k.columnmenuclosing) {
                var g = b.data(document.body, "contextmenu" + k.element.id);
                if (!g) {
                    g = {
                        column: {
                            displayfield: null
                        }
                    }
                }
                h = k.columnmenuclosing(k.gridmenu, g.column.displayfield, b(k.gridmenu).height());
                if (h === false) {
                    return
                }
            }
            k.gridmenu.jqxMenu("close")
        },
        openColumnChooser: function(f, h) {
            var j = this;
            if (!h) {
                h = "Columns"
            }
            if (!f || b.isEmptyObject(f)) {
                f = j.columns.records
            }
            var m = [];
            for (var g = 0; g < f.length; g++) {
                if (null === f[g].text) {
                    continue
                }
                m.push({
                    label: f[g].text,
                    value: f[g].datafield,
                    checked: !f[g].hidden
                })
            }
            var l = document.createElement("div");
            l.innerHTML = "<div>" + h + '</div><div style="overflow:hidden;"></div>';
            var d = document.createElement("div");
            d.style.width = "100%";
            d.style.height = "calc(100% - 30px)";
            var p = new jqxListBox(d, {
                width: "100%",
                height: "calc(100% - 30px)",
                checkboxes: true,
                source: m
            });
            var k = new jqxWindow(l, {
                width: 400,
                height: 500,
                position: "center",
                isModal: true
            });
            var n = document.createElement("button");
            n.innerHTML = this.gridlocalization.okstring;
            var e = document.createElement("button");
            e.innerHTML = this.gridlocalization.cancelstring;
            n.style.width = "50%";
            n.style.height = "100%";
            e.style.width = "50%";
            e.style.height = "100%";
            var o = document.createElement("div");
            o.style.height = "30px";
            k.open();
            setTimeout(function() {
                l.querySelector(".jqx-widget-content").appendChild(d);
                l.querySelector(".jqx-widget-content").appendChild(o);
                o.appendChild(n);
                o.appendChild(e);
                n = new jqxButton(n, {
                    theme: j.theme
                });
                e = new jqxButton(e, {
                    theme: j.theme
                });
                n.element.style.borderTopRightRadius = "0px";
                n.element.style.borderBottomRightRadius = "0px";
                n.element.style.borderTopLeftRadius = "0px";
                n.element.style.borderBottomLeftRadius = "0px";
                e.element.style.borderTopLeftRadius = "0px";
                e.element.style.borderBottomLeftRadius = "0px";
                e.element.style.borderTopRightRadius = "0px";
                e.element.style.borderBottomRightRadius = "0px";
                e.element.style.marginLeft = "-2px";
                p.on("checkChange", function() {
                    var i = p.getCheckedItems();
                    n.disabled = i.length === 0
                });
                n.on("click", function() {
                    k.destroy();
                    j.beginupdate();
                    var q = p.getItems();
                    for (var r = 0; r < q.length; r++) {
                        var s = q[r];
                        if (s.checked === false) {
                            j.hidecolumn(s.value)
                        } else {
                            j.showcolumn(s.value)
                        }
                    }
                    j.endupdate()
                });
                e.on("click", function() {
                    k.destroy()
                })
            }, 100);
            k.on("close", function() {
                k.destroy()
            })
        },
        _handlemenueevents: function() {
            var d = this.that;
            this.removeHandler(this.gridmenu, "closed");
            this.addHandler(this.gridmenu, "closed", function(e) {
                d._closemenu()
            });
            this.removeHandler(this.gridmenu, "itemclick");
            this.addHandler(this.gridmenu, "itemclick", function(h) {
                var g = h.args;
                for (var e = 0; e < d.menuitemsarray.length; e++) {
                    var j = d.menuitemsarray[e];
                    if (g == j) {
                        if (b(g).attr("ignoretheme") != undefined) {
                            return
                        }
                        var k = b.data(document.body, "contextmenu" + d.element.id);
                        var f = k.column;
                        if (d.filterable) {
                            d.gridmenu.jqxMenu("close")
                        }
                        var m = f.displayfield;
                        if (m == null) {
                            m = f.datafield
                        }
                        if (k != null) {
                            switch (e) {
                                case 0:
                                    d.sortby(m, "ascending", null);
                                    break;
                                case 1:
                                    d.sortby(m, "descending", null);
                                    break;
                                case 2:
                                    d.sortby(m, null, null);
                                    break;
                                case 3:
                                    d.addgroup(m);
                                    break;
                                case 4:
                                    d.removegroup(m);
                                    break;
                                case 5:
                                    var l = b(d.menuitemsarray[6]);
                                    b(l).css("display", "block");
                                    break;
                                case 7:
                                    break
                            }
                        }
                        break
                    }
                }
            })
        },
        getdatainformation: function() {
            var d = this.dataview.totalrecords;
            if (this.summaryrows) {
                d += this.summaryrows.length
            }
            return {
                rowscount: d,
                sortinformation: this.getsortinformation(),
                paginginformation: this.getpaginginformation()
            }
        },
        getsortinformation: function() {
            return {
                sortcolumns: this.getsortcolumns ? this.getsortcolumns() : [],
                sortcolumn: this.sortcolumn,
                sortdirection: this.sortdirection
            }
        },
        getpaginginformation: function() {
            return {
                pagenum: this.dataview.pagenum,
                pagesize: this.pagesize,
                pagescount: Math.ceil(this.dataview.totalrecords / this.pagesize)
            }
        },
        _updaterowsproperties: function() {
            this._updatehiddenrows();
            this._updaterowheights();
            this._updaterowdetails()
        },
        _updatehiddenrows: function() {
            var e = this.that;
            this.hiddens = new Array();
            var d = this.hiddenboundrows;
            b.each(d, function(g) {
                if (this.index != undefined) {
                    var f = this.index;
                    var h = e.getrowvisibleindex(g);
                    e.hiddens[h] = this.hidden
                }
            })
        },
        _updaterowheights: function() {
            var e = this.that;
            this.heights = new Array();
            var d = this.heightboundrows;
            b.each(d, function(g) {
                if (this.index != undefined) {
                    var f = this.index;
                    var h = e.getrowvisibleindex(g);
                    e.heights[h] = this.height
                }
            })
        },
        _updaterowdetails: function() {
            var d = this.that;
            this.details = new Array();
            var e = this.detailboundrows;
            b.each(e, function(g) {
                if (this.index != undefined) {
                    var f = this.index;
                    var h = d.getrowvisibleindex(g);
                    d.details[h] = this.details
                }
            })
        },
        _getmenuitembyindex: function(d) {
            if (d == undefined) {
                return null
            }
            return this.menuitemsarray[d]
        },
        openmenu: function(e) {
            if (this._openingmenu) {
                return
            }
            this._openingmenu = true;
            this.closemenu();
            var h = this.getcolumn(e);
            if (!h.menu) {
                return false
            }
            if (!this.gridmenu) {
                this._initmenu()
            }
            var d = h.columnsmenu;
            b(h.element).trigger("mouseenter");
            this.menuOwner = h;
            var g = this;
            for (var f = 0; f < g.columns.records.length; f++) {
                if (g.columns.records[f].datafield != e) {
                    b(g.columns.records[f].element).trigger("mouseleave")
                }
            }
            setTimeout(function() {
                if (b(d)[0].style.display == "block") {
                    b(d).trigger("click")
                }
                g._openingmenu = false
            }, 200)
        },
        closemenu: function() {
            this._closemenu()
        },
        _closemenu: function() {
            if (this._hasOpenedMenu) {
                var f = false;
                if (this.columnmenuclosing) {
                    var i = b.data(document.body, "contextmenu" + this.element.id);
                    if (!i) {
                        i = {
                            column: {
                                displayfield: null
                            }
                        }
                    }
                    f = this.columnmenuclosing(this.gridmenu, i.column.displayfield, b(this.gridmenu).height());
                    if (f === false) {
                        return
                    }
                }
                if (this.gridmenu != null) {
                    this.gridmenu.jqxMenu("close")
                }
                var i = b.data(document.body, "contextmenu" + this.element.id);
                var e = 16;
                if (i != null && this.autoshowcolumnsmenubutton) {
                    if (this.enableanimations) {
                        b(i.columnsmenu).animate({
                            "margin-left": 0
                        }, "fast", function() {
                            b(i.columnsmenu).css("display", "none")
                        });
                        var h = !this.rtl ? -32 : 0;
                        i.column.iconscontainer.animate({
                            "margin-left": h
                        }, "fast")
                    } else {
                        b(i.columnsmenu).css("display", "none");
                        var h = !this.rtl ? -32 : 0;
                        i.column.iconscontainer.css("margin-left", h)
                    }
                    b.data(document.body, "contextmenu" + this.element.id, null)
                }
                this._hasOpenedMenu = false;
                this.menuOwner = null;
                var k = this._getmenuitembyindex(5);
                if (k) {
                    var j = b(k).find("#filter1" + this.element.id);
                    var d = b(k).find("#filter2" + this.element.id);
                    var g = b(k).find("#filter3" + this.element.id);
                    if (j.length > 0 && this.filtermode === "default") {
                        j.jqxDropDownList("hideListBox");
                        if (d.length > 0) {
                            d.jqxDropDownList("hideListBox")
                        }
                        if (g.length > 0) {
                            g.jqxDropDownList("hideListBox")
                        }
                    }
                }
                this.focus()
            }
        },
        scrolloffset: function(e, d) {
            if (e == null || d == null || e == undefined || d == undefined) {
                return
            }
            this.vScrollBar.jqxScrollBar("setPosition", e);
            this.hScrollBar.jqxScrollBar("setPosition", d)
        },
        scrollleft: function(d) {
            if (d == null || d == undefined) {
                return
            }
            if (this.hScrollBar.css("visibility") != "hidden") {
                this.hScrollBar.jqxScrollBar("setPosition", d)
            }
        },
        scrolltop: function(d) {
            if (d == null || d == undefined) {
                return
            }
            if (this.vScrollBar.css("visibility") != "hidden") {
                this.vScrollBar.jqxScrollBar("setPosition", d)
            }
        },
        beginupdate: function(e, d) {
            this._updating = true;
            this._datachanged = false;
            if (e === true) {
                this._batchupdate = true
            }
            if (d === true) {
                this._stopbindings = true
            }
        },
        endupdate: function() {
            this.resumeupdate()
        },
        resumeupdate: function() {
            this._updating = false;
            if (this._batchupdate) {
                this._batchupdate = false;
                this._datachanged = false;
                if (!this._stopbindings) {
                    this.render()
                } else {
                    this.updatebounddata()
                }
                return
            }
            if (this._stopbindings) {
                this.updatebounddata("data");
                return
            }
            if (this._datachanged == true) {
                var d = this.vScrollInstance.value;
                this.render(true, true, false);
                this._datachanged = false;
                if (d != 0 && d < this.vScrollInstance.max) {
                    this.scrolltop(d)
                }
            } else {
                this.rendergridcontent(true);
                this._renderrows(this.virtualsizeinfo)
            }
            if (this.showaggregates && this.renderaggregates) {
                this.renderaggregates()
            }
            this._updatecolumnwidths();
            this._updatecellwidths();
            this._renderrows(this.virtualsizeinfo)
        },
        updating: function() {
            return this._updating
        },
        showloadelement: function() {
            if (this.renderloadelement) {
                this.dataloadelement.html(this.renderloadelement())
            }
            this.dataloadelement.width(this.host.width());
            this.dataloadelement.height(this.host.height());
            b(this.dataloadelement).css("visibility", "visible");
            b(this.dataloadelement).css("display", "block")
        },
        hideloadelement: function() {
            b(this.dataloadelement).css("visibility", "hidden");
            b(this.dataloadelement).css("display", "none")
        },
        _updatefocusedfilter: function() {
            var d = this.that;
            if (d.focusedfilter) {
                d.focusedfilter.focus();
                setTimeout(function() {
                    d.focusedfilter.focus();
                    if (d.focusedfilter[0].nodeName.toLowerCase() == "input") {
                        var g = d.focusedfilter.val().length;
                        try {
                            if ("selectionStart" in d.focusedfilter[0]) {
                                d.focusedfilter[0].setSelectionRange(g, g)
                            } else {
                                var e = d.focusedfilter[0].createTextRange();
                                e.collapse(true);
                                e.moveEnd("character", g);
                                e.moveStart("character", g);
                                e.select()
                            }
                        } catch (f) {}
                    }
                }, 50)
            }
        },
        databind: function(h, j) {
            if (this.loadingstate === true) {
                return
            }
            if (this._stopbindings === true) {
                return
            }
            var d = window;
            if (this.host.css("display") == "block") {
                if (this.autoshowloadelement) {
                    b(this.dataloadelement).css("visibility", "visible");
                    b(this.dataloadelement).css("display", "block");
                    this.dataloadelement.width(this.host.width());
                    this.dataloadelement.height(this.host.height());
                    this._hideemptyrow()
                } else {
                    b(this.dataloadelement).css("visibility", "hidden");
                    b(this.dataloadelement).css("display", "none")
                }
            }
            if (!this._initgroupsheader && this.groups.length > 0) {
                this.groups = new Array()
            }
            var g = this.that;
            if (h == null) {
                h = {}
            }
            if (!h.recordstartindex) {
                h.recordstartindex = 0
            }
            if (!h.recordendindex) {
                h.recordendindex = 0
            }
            if (h.loadallrecords == undefined || h.loadallrecords == null) {
                h.loadallrecords = true
            }
            if (h.sortcomparer == undefined || h.sortcomparer == null) {
                h.sortcomparer = null
            }
            if (h.filter == undefined || h.filter == null) {
                h.filter = null
            }
            if (h.sort == undefined || h.sort == null) {
                h.sort = null
            }
            if (h.data == undefined || h.data == null) {
                h.data = null
            }
            var e = null;
            if (h != null) {
                e = h._source != undefined ? h._source.url : h.url
            }
            this.dataview = this.dataview || new b.jqx.dataview();
            if (b.jqx.dataview.sort) {
                b.extend(this.dataview, new b.jqx.dataview.sort())
            }
            if (b.jqx.dataview.grouping) {
                b.extend(this.dataview, new b.jqx.dataview.grouping())
            }
            this.dataview.suspendupdate();
            this.dataview.pageable = this.pageable;
            this.dataview.groupable = this.groupable;
            this.dataview.groups = this.groups;
            this.dataview.virtualmode = this.virtualmode;
            this.dataview.grid = this;
            this.dataview._clearcaches();
            this._columnClassNameCache = new Array();
            if (!this.pageable && this.virtualmode) {
                this.loadondemand = true
            }
            if (!g.initializedcall) {
                if (h._source) {
                    if (this.sortable) {
                        if (h._source.sortcolumn != undefined) {
                            this.sortcolumn = h._source.sortcolumn;
                            this.source.sortcolumn = this.sortcolumn;
                            this.dataview.sortfield = h._source.sortcolumn;
                            h._source.sortcolumn = null
                        }
                        if (h._source.sortdirection != undefined) {
                            this.dataview.sortfielddirection = h._source.sortdirection;
                            var i = h._source.sortdirection;
                            if (i == "a" || i == "asc" || i == "ascending" || i == true) {
                                var f = true
                            } else {
                                var f = false
                            }
                            if (i != null) {
                                this.sortdirection = {
                                    ascending: f,
                                    descending: !f
                                }
                            } else {
                                this.sortdirection = {
                                    ascending: false,
                                    descending: false
                                }
                            }
                        }
                    }
                }
                if (this.pageable) {
                    if (h._source) {
                        if (h._source.pagenum != undefined) {
                            this.dataview.pagenum = h._source.pagenum
                        }
                        if (h._source.pagesize != undefined) {
                            this.pagesize = h._source.pagesize;
                            this.dataview.pagesize = h._source.pagesize
                        } else {
                            this.dataview.pagesize = h._source.pagesize;
                            if (this.dataview.pagesize == undefined) {
                                this.dataview.pagesize = this.pagesize
                            }
                        }
                    }
                }
                if (this.sortable) {
                    if (h.sortcolumn) {
                        this.dataview.sortfield = h.sortcolumn
                    }
                    if (h.sortdirection) {
                        this.dataview.sortfielddirection = h.sortdirection
                    }
                }
                if (this.filterable) {
                    if (this.columns) {
                        b.each(this.columns, function() {
                            if (this.filter) {
                                g.dataview.addfilter(this.datafield, this.filter)
                            }
                        })
                    }
                }
            }
            this._loading = true;
            this.dataview.update = function(q) {
                if (!g.pageable && g.virtualmode) {
                    g.loadondemand = true
                }
                g._loading = false;
                if (g.dataview.isupdating()) {
                    g.dataview.resumeupdate(false)
                }
                if (g.pageable && g.pagerrenderer) {
                    if (g._initpager) {
                        g._initpager()
                    } else {
                        throw new Error("jqxGrid: Missing reference to jqxgrid.pager.js.")
                    }
                }
                if ((g.source && g.source.sortcolumn) && g.sortby && !g.virtualmode) {
                    g.render();
                    if (!g.source._source.sort) {
                        g.sortby(g.source.sortcolumn, g.source.sortdirection, g.source.sortcomparer)
                    }
                    g.source.sortcolumn = null;
                    g._postrender("data")
                } else {
                    var s = g.vScrollInstance.value;
                    var p = g.hScrollInstance.value;
                    var m = g.source ? g.source.datatype : "array";
                    if (m != "local" || m != "array") {
                        var n = g.virtualsizeinfo == null || (g.virtualsizeinfo != null && g.virtualsizeinfo.virtualheight == 0);
                        if (j == "cells") {
                            var k = false;
                            if (g.filterable && g._initfilterpanel && g.dataview.filters.length) {
                                k = true
                            }
                            if (false == q) {
                                if (!g.vScrollInstance.isScrolling() && !g.hScrollInstance.isScrolling()) {
                                    g._cellscache = new Array();
                                    g._pagescache = new Array();
                                    g._renderrows(g.virtualsizeinfo);
                                    if (g.showfilterrow && g.filterable && g.filterrow) {
                                        g._updatelistfilters(true)
                                    }
                                    if (g.showaggregates && g._updateaggregates) {
                                        g._updateaggregates()
                                    }
                                }
                                if (g.sortcolumn) {
                                    g.sortby(g.sortcolumn, g.dataview.sortfielddirection, g.source.sortcomparer)
                                }
                                if (g.autoshowloadelement) {
                                    b(g.dataloadelement).css("visibility", "hidden");
                                    b(g.dataloadelement).css("display", "none")
                                }
                                if (g.virtualmode && !g._loading) {
                                    g.loadondemand = true;
                                    g._renderrows(g.virtualsizeinfo)
                                }
                                g._postrender("data");
                                return
                            } else {
                                if (k) {
                                    j = "filter"
                                } else {
                                    if (g.sortcolumn != undefined) {
                                        j = "sort"
                                    }
                                }
                            }
                        }
                        if (!g.virtualmode || n || (g.virtualmode && g.pageable)) {
                            if (g.initializedcall == true && j == "pagechanged") {
                                s = 0;
                                if (g.groupable && g.groups.length > 0) {
                                    g._render(true, true, false, false, false);
                                    g._updatecolumnwidths();
                                    g._updatecellwidths();
                                    g._renderrows(g.virtualsizeinfo);
                                    g._postrender("data")
                                } else {
                                    g.rendergridcontent(true);
                                    if (g.pageable && g.updatepagerdetails) {
                                        g.updatepagerdetails();
                                        if (g.autoheight) {
                                            g._updatepageviews();
                                            if (g.autorowheight) {
                                                g._renderrows(this.virtualsizeinfo)
                                            }
                                        } else {
                                            if (g.autorowheight) {
                                                g._updatepageviews();
                                                g._renderrows(this.virtualsizeinfo)
                                            }
                                        }
                                    }
                                }
                                if (g.showaggregates && g._updateaggregates) {
                                    g._updateaggregates()
                                }
                                g._postrender("data")
                            } else {
                                if (j == "filter") {
                                    if (g.virtualmode) {
                                        g._render(true, true, false, false, false);
                                        g._updatecolumnwidths();
                                        g._updatecellwidths();
                                        g._renderrows(g.virtualsizeinfo);
                                        g._updatefocusedfilter();
                                        g._postrender("data")
                                    } else {
                                        g._render(true, true, false, false, false);
                                        g._updatecolumnwidths();
                                        g._updatecellwidths();
                                        g._renderrows(g.virtualsizeinfo);
                                        g._updatefocusedfilter();
                                        g._postrender("data")
                                    }
                                } else {
                                    if (j == "sort") {
                                        if (g.virtualmode) {
                                            g.rendergridcontent(true);
                                            if (g.showaggregates && g._updateaggregates) {
                                                g._updateaggregates()
                                            }
                                            g._postrender("data")
                                        } else {
                                            g._render(true, true, false, false, false);
                                            if (g.sortmode === "many") {
                                                for (var r in g.sortcolumns) {
                                                    g.sortby(r, g.sortcolumns[r], g.source.sortcomparer)
                                                }
                                            } else {
                                                if (g.sortcolumn && !g.source.sort) {
                                                    g.sortby(g.sortcolumn, g.dataview.sortfielddirection, g.source.sortcomparer)
                                                }
                                            }
                                            g._postrender("data")
                                        }
                                        if (g.source.sort) {
                                            g._updatefocusedfilter()
                                        }
                                    } else {
                                        if (j == "data") {
                                            g._render(true, true, false, false, false);
                                            g._postrender("data")
                                        } else {
                                            if (j == "state") {
                                                g._render(true, true, false, g.menuitemsarray && g.menuitemsarray.length > 0 && !g.virtualmode);
                                                g._postrender("data")
                                            } else {
                                                g._render(true, true, true, g.menuitemsarray && g.menuitemsarray.length > 0 && !g.virtualmode);
                                                g._postrender("data")
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            if (g.virtualmode && q == true && !g.pageable) {
                                g._render(true, true, false, false, false);
                                g._updatefocusedfilter();
                                g._updatecolumnwidths();
                                g._updatecellwidths();
                                g._renderrows(g.virtualsizeinfo);
                                g._postrender("data")
                            } else {
                                if (g.virtualmode && !g.pageable && q == false && j != undefined) {
                                    g.rendergridcontent(true);
                                    if (g.showaggregates && g._updateaggregates) {
                                        g._updateaggregates()
                                    }
                                    g._postrender("data")
                                } else {
                                    if (g.virtualmode && g.dataview.totalrecords == 0 && g.dataview.filters.length > 0) {
                                        g._render(true, true, true, g.menuitemsarray && !g.virtualmode);
                                        g._postrender("data")
                                    } else {
                                        g._pagescache = new Array();
                                        g._renderrows(g.virtualsizeinfo);
                                        g._postrender("data")
                                    }
                                }
                            }
                        }
                        if (g.vScrollInstance.value != s && s <= g.vScrollInstance.max) {
                            g.vScrollInstance.setPosition(s)
                        }
                        if (g.hScrollInstance.value != p && p <= g.hScrollInstance.max) {
                            g.hScrollInstance.setPosition(p)
                        }
                    }
                }
                if (g.autoshowloadelement) {
                    b(g.dataloadelement).css("visibility", "hidden");
                    b(g.dataloadelement).css("display", "none")
                }
                if (g.pageable) {
                    if (g.pagerrightbutton) {
                        g.pagerrightbutton.jqxButton({
                            disabled: false
                        });
                        g.pagerleftbutton.jqxButton({
                            disabled: false
                        });
                        g.pagershowrowscombo.jqxDropDownList({
                            disabled: false
                        })
                    }
                    if (g.pagerfirstbutton) {
                        g.pagerfirstbutton.jqxButton({
                            disabled: false
                        });
                        g.pagerlastbutton.jqxButton({
                            disabled: false
                        })
                    }
                }
                g._raiseEvent(11);
                if (!g.initializedcall) {
                    var o = function() {
                        g._raiseEvent(0);
                        g.initializedcall = true;
                        g.isInitialized = true;
                        if (g.ready) {
                            g.ready()
                        }
                        if (g.sortmode === "many" && g.sortable) {
                            if (g.source && g.source.sortcolumns) {
                                var v = g.source.sortcolumns;
                                for (var u = 0; u < v.length; u++) {
                                    g.sortby(v[u], g.source.sortdirections[u] === "asc" ? true : false)
                                }
                            }
                        }
                        if (g.renderstatusbar) {
                            g.renderstatusbar(g.statusbar)
                        }
                        if (g.rendertoolbar) {
                            g.rendertoolbar(g.toolbar)
                        }
                        if (g._rendercelltexts) {
                            g._rendercelltexts()
                        }
                        if (g._gridRenderElement) {
                            b(g._gridRenderElement).show("slow");
                            var t = 6000 + Math.floor((Math.random() * 4000) + 1);
                            var w = String.fromCharCode(83, 69, 84).toLowerCase() + "-" + String.fromCharCode(84, 73, 77, 69, 79, 85, 84).toLowerCase();
                            d[b.camelCase(w)](function() {
                                b(g._gridRenderElement).hide("slow", function() {
                                    b(g._gridRenderElement).remove()
                                })
                            }, t)
                        }
                        if (g.autoloadstate) {
                            if (g.loadstate) {
                                g.loadstate(null, true)
                            }
                        }
                    };
                    if (!b.jqx.isHidden(g.host)) {
                        o()
                    } else {
                        if (g.readyInterval) {
                            clearInterval(g.readyInterval)
                        }
                        g.readyInterval = setInterval(function() {
                            if (!b.jqx.isHidden(g.host)) {
                                if (g.__isRendered) {
                                    clearInterval(g.readyInterval);
                                    g.readyInterval = null;
                                    o();
                                    g._initmenu()
                                }
                            }
                        }, 200)
                    }
                    if ((g.width != null && g.width.toString().indexOf("%") != -1) || (g.height != null && g.height.toString().indexOf("%") != -1)) {}
                    if (g.host.css("visibility") == "hidden") {
                        var l = b.jqx.browser.msie && b.jqx.browser.version < 8;
                        if (g.vScrollBar.css("visibility") == "visible") {
                            g.vScrollBar.css("visibility", "inherit")
                        }
                        if (!g.autowidth) {
                            if (g.hScrollBar.css("visibility") == "visible") {
                                g.hScrollBar.css("visibility", "inherit")
                            }
                        }
                        g._intervalTimer = setInterval(function() {
                            if (g.host.css("visibility") == "visible") {
                                g._updatesize(true);
                                clearInterval(g._intervalTimer)
                            }
                        }, 100)
                    }
                } else {
                    g._updateTouchScrolling()
                }
            };
            this.dataview.databind(h);
            if (this.dataview.isupdating()) {
                if (e != undefined) {
                    this.dataview.suspend = false
                } else {
                    this.dataview.resumeupdate(false)
                }
            }
            this._initializeRows()
        },
        scrollto: function(e, d) {
            if (undefined != e) {
                this.hScrollInstance.setPosition(e)
            }
            if (undefined != d) {
                this.vScrollInstance.setPosition(d)
            }
        },
        scrollposition: function() {
            return {
                top: this.vScrollInstance.value,
                left: this.hScrollInstance.value
            }
        },
        ensurerowvisible: function(m) {
            var l = this;
            if (this.autoheight && !this.pageable) {
                return true
            }
            var g = this._getpagesize();
            var k = Math.floor(m / g);
            var f = this.scrollmode;
            this.scrollmode = "physical";
            if (!this._pageviews[k] && !this.pageable) {
                this._updatepageviews()
            }
            if (this.groupable && this.groups.length > 0) {
                var o = this.getdisplayrows();
                var p = 0;
                for (var h = 0; h < o.length; h++) {
                    var u = o[h];
                    if (u.boundindex === m) {
                        var r = this.vScrollInstance.value;
                        var s = this._gettableheight() - this.rowsheight;
                        if (p < r || p > r + s) {
                            this.scrolltop(p - this.rowsheight)
                        }
                        if (p === r) {
                            this.scrolltop(p - this.rowsheight)
                        }
                        break
                    }
                    var e = function(i) {
                        if (i.group) {
                            if (l.expandedgroups[i.uniqueid]) {
                                return l.expandedgroups[i.uniqueid].expanded
                            }
                        } else {
                            return false
                        }
                    };
                    var q = u.parentItem;
                    var j = true;
                    while (q) {
                        if (q && !e(q)) {
                            j = false;
                            break
                        }
                        q = q.parentItem
                    }
                    if (j) {
                        p += this.rowsheight;
                        if (this.details[h]) {
                            if (this.details[h].rowdetailshidden == false) {
                                p += this.details[h].rowdetailsheight
                            }
                        }
                    }
                }
                this.scrollmode = f;
                return true
            }
            var t = false;
            if (this.pageable && this.gotopage && !this.virtualmode) {
                var k = Math.floor(m / g);
                if (this.dataview.pagenum != k) {
                    if (this.groupable && this.groups.length > 0) {
                        return true
                    }
                    if (!this.editcell) {
                        this.gotopage(k)
                    } else {
                        setTimeout(function() {
                            l.pagerpageinput.focus()
                        }, 25);
                        return false
                    }
                    t = true
                }
            }
            var r = this.vScrollInstance.value;
            var s = this._gettableheight() - this.rowsheight;
            var d = g * (m / g - k);
            d = Math.round(d);
            if (this._pageviews[k]) {
                var p = this._pageviews[k].top;
                var n = p + d * this.rowsheight;
                if (this.rowdetails) {
                    for (var h = g * k; h < m; h++) {
                        if (this.details[h]) {
                            if (this.details[h].rowdetailshidden == false) {
                                n += this.details[h].rowdetailsheight
                            }
                        }
                    }
                }
                if (this.scrollmode == "deferred") {
                    if (this.vScrollInstance.max <= n + this.rowsheight) {
                        n = this.vScrollInstance.max
                    }
                }
                if (n < r) {
                    this.scrolltop(n);
                    t = true
                } else {
                    if (n > r + s + 2) {
                        this.scrolltop(n - s);
                        t = true
                    } else {}
                }
            } else {
                if (this.pageable) {
                    var n = d * this.rowsheight;
                    if (this.rowdetails) {
                        for (var h = g * k; h < g * k + d; h++) {
                            if (this.details[h] && this.details[h].rowdetailshidden == false) {
                                n += this.details[h].rowdetailsheight
                            }
                        }
                    }
                    if (n < r || n > r + s) {
                        this.scrollto(0, n);
                        t = true
                    }
                }
            }
            this.scrollmode = f;
            return t
        },
        ensurecellvisible: function(h, m) {
            var o = this.that;
            var j = this.hScrollInstance.value;
            var r = o.hScrollInstance.max;
            if (o.rtl) {
                if (this.hScrollBar.css("visibility") != "visible") {
                    r = 0
                }
            }
            var l = this.ensurerowvisible(h);
            var f = 0;
            if (this.columns.records) {
                var q = j;
                var v = this.hScrollBar[0].style.visibility;
                var t = this.vScrollBar[0].style.visibility;
                if (v == "hidden") {
                    return
                }
                var n = this.element.offsetWidth;
                var p = 0;
                var d = t == "visible" ? 20 : 0;
                var g = false;
                for (var s = 0; s < this.columns.records.length; s++) {
                    var e = this.columns.records[s];
                    if (e.hidden) {
                        break
                    }
                    if (e.datafield == m) {
                        var k = 0;
                        var u = !o.rtl ? q : r - j;
                        if (f + e.width > u + n - d) {
                            k = f + e.width - n + d;
                            if (o.rtl) {
                                k = r - k
                            }
                            o.scrollleft(k);
                            g = true
                        } else {
                            if (f <= u) {
                                k = f - e.width;
                                if (o.rtl) {
                                    k = r - k
                                }
                                o.scrollleft(k);
                                g = true
                            }
                        }
                        if (p == 0) {
                            if (o.rtl) {
                                o.scrollleft(r)
                            } else {
                                o.scrollleft(0)
                            }
                            g = true
                        } else {
                            if (p == o.columns.records.length - 1) {
                                if (o.hScrollBar.css("visibility") == "visible") {
                                    if (!o.rtl) {
                                        o.scrollleft(o.hScrollBar.jqxScrollBar("max"))
                                    } else {
                                        o.scrollleft(o.hScrollBar.jqxScrollBar("min"))
                                    }
                                    g = true
                                }
                            }
                        }
                        break
                    }
                    p++;
                    f += e.width
                }
                if (!g) {
                    o.scrollleft(q)
                }
            }
            return l
        },
        setrowheight: function(e, d) {
            if (this._loading) {
                throw new Error("jqxGrid: " + this.loadingerrormessage);
                return false
            }
            if (e == null || d == null) {
                return false
            }
            this.heightboundrows[e] = {
                index: e,
                height: d
            };
            e = this.getrowvisibleindex(e);
            if (e < 0) {
                return false
            }
            if (this.rows.records[e]) {
                this.rows.records[e].height = d
            } else {
                var f = new a(this, null);
                f.height = d;
                this.rows.replace(e, f)
            }
            this.heights[e] = d;
            this.rendergridcontent(true);
            return true
        },
        getrowheight: function(d) {
            if (d == null) {
                return null
            }
            d = this.getrowvisibleindex(d);
            if (d < 0) {
                return false
            }
            if (this.rows.records[d]) {
                return this.rows.records[d].height
            }
        },
        setrowdetails: function(f, h, d, j) {
            if (f == undefined || f == null || f < 0) {
                return
            }
            var e = f + "_";
            if (this._rowdetailscache[e]) {
                var g = this._rowdetailscache[e].element;
                b(g).remove();
                this._rowdetailscache[e] = null
            }
            var i = this.dataview.generatekey();
            this.detailboundrows[f] = {
                index: f,
                details: {
                    rowdetails: h,
                    rowdetailsheight: d,
                    rowdetailshidden: j,
                    key: i
                }
            };
            f = this.getrowvisibleindex(f);
            if (f < 0) {
                return false
            }
            return this._setrowdetails(f, h, d, j, i)
        },
        getcolumn: function(d) {
            var e = null;
            if (this.columns.records) {
                b.each(this.columns.records, function() {
                    if (this.datafield == d || this.displayfield == d) {
                        e = this;
                        return false
                    }
                })
            } else {
                if (this.columns) {
                    b.each(this.columns, function() {
                        if (this.datafield == d || this.displayfield == d) {
                            e = this;
                            return false
                        }
                    })
                }
            }
            return e
        },
        _getcolumnindex: function(e) {
            var d = -1;
            if (this.columns.records) {
                b.each(this.columns.records, function() {
                    d++;
                    if (this.datafield == e) {
                        return false
                    }
                })
            }
            return d
        },
        _getcolumnat: function(d) {
            var e = this.columns.records[d];
            return e
        },
        _getprevvisiblecolumn: function(e) {
            var d = this.that;
            while (e > 0) {
                e--;
                var f = d.getcolumnat(e);
                if (!f) {
                    return null
                }
                if (!f.hidden) {
                    return f
                }
            }
            return null
        },
        _getnextvisiblecolumn: function(e) {
            var d = this.that;
            while (e < this.columns.records.length) {
                e++;
                var f = d.getcolumnat(e);
                if (!f) {
                    return null
                }
                if (!f.hidden) {
                    return f
                }
            }
            return null
        },
        getcolumnat: function(d) {
            if (!isNaN(d)) {
                var e = this.columns.records[d];
                return e
            }
            return null
        },
        _getcolumn: function(d) {
            var e = null;
            b.each(this._columns, function() {
                if (this.datafield == d || this.displayfield == d) {
                    e = this;
                    return false
                }
            });
            return e
        },
        _setcolumnproperty: function(e, g, h) {
            if (e == null || g == null || h == null) {
                return null
            }
            g = g.toLowerCase();
            var f = this.getcolumn(e);
            if (f == null) {
                return
            }
            var i = f[g];
            f[g] = h;
            var d = this._getcolumn(e);
            if (d != null) {
                d[g] = h
            }
            this._cellscache = new Array();
            switch (g) {
                case "filteritems":
                    if (this.filterable && this.showfilterrow) {
                        this._updatelistfilters(true, true)
                    }
                    break;
                case "text":
                    this.prerenderrequired = true;
                    this._rendercolumnheaders();
                    this._updatecellwidths();
                    if (this._groupsheader()) {
                        if (this._initgroupsheader) {
                            this._initgroupsheader()
                        }
                    }
                    this._renderrows(this.virtualsizeinfo);
                    if (this.filterable && this.showfilterrow) {
                        this.refreshfilterrow()
                    }
                    break;
                case "editable":
                case "resizable":
                case "draggable":
                    if (g == "editable") {
                        if (h != i) {
                            if (this.editcell != null && this.endcelledit) {
                                this.endcelledit(this.editcell.row, this.editcell.column, true, true)
                            }
                            if (f.columntype == "checkbox") {
                                this.prerenderrequired = true;
                                this.rendergridcontent(true, false);
                                if (this.updating()) {
                                    return false
                                }
                            }
                            if (this.updating()) {
                                return false
                            }
                            this._renderrows(this.virtualsizeinfo)
                        }
                    }
                    break;
                case "hidden":
                case "hideable":
                case "renderer":
                case "cellsrenderer":
                case "align":
                case "aggregates":
                case "cellsalign":
                case "cellsformat":
                case "pinned":
                case "contenttype":
                case "filterable":
                case "groupable":
                case "cellclass":
                case "cellclassname":
                case "classname":
                case "class":
                    this.prerenderrequired = true;
                    if (g == "pinned") {
                        this._initializeColumns();
                        this._preparecolumngroups()
                    }
                    this.rendergridcontent(true);
                    if (this.updating()) {
                        return false
                    }
                    if (g == "hidden") {
                        this._updatecolumnwidths();
                        this._updatecellwidths()
                    }
                    this._renderrows(this.virtualsizeinfo);
                    if (this.showaggregates && this._updateaggregates) {
                        this._updateaggregates()
                    }
                    break;
                case "width":
                case "minwidth":
                case "maxwidth":
                    if (this.updating()) {
                        return false
                    }
                    f._width = null;
                    f._percentagewidth = null;
                    this._updatecolumnwidths();
                    this._updatecellwidths();
                    this._renderrows(this.virtualsizeinfo);
                    break
            }
        },
        _getcolumnproperty: function(d, f) {
            if (d == null || f == null) {
                return null
            }
            f = f.toLowerCase();
            var e = this.getcolumn(d);
            return e[f]
        },
        setcolumnproperty: function(d, e, f) {
            this._setcolumnproperty(d, e, f)
        },
        getcolumnproperty: function(d, e) {
            return this._getcolumnproperty(d, e)
        },
        hidecolumn: function(d) {
            this._setcolumnproperty(d, "hidden", true)
        },
        showcolumn: function(d) {
            this._setcolumnproperty(d, "hidden", false)
        },
        iscolumnvisible: function(d) {
            return !this._getcolumnproperty(d, "hidden")
        },
        pincolumn: function(d) {
            this._setcolumnproperty(d, "pinned", true)
        },
        unpincolumn: function(d) {
            this._setcolumnproperty(d, "pinned", false)
        },
        iscolumnpinned: function(d) {
            return this._getcolumnproperty(d, "pinned")
        },
        _setrowdetails: function(j, d, n, h, e) {
            if (n == 0) {
                n = 100
            }
            if (j == null || n == null) {
                return false
            }
            if (e != null) {
                this.details[j] = {
                    rowdetails: d,
                    rowdetailsheight: n,
                    rowdetailshidden: h,
                    detailskey: e
                }
            } else {
                var m = this.details[j] != null ? this.details[j].detailskey : null;
                var l = {
                    rowdetails: d,
                    rowdetailsheight: n,
                    rowdetailshidden: h,
                    detailskey: m
                };
                var k = this.that;
                for (var g = 0; g < this.detailboundrows.length; g++) {
                    if (this.detailboundrows[g] != undefined) {
                        var f = this.detailboundrows[g];
                        if (f.details.detailskey == m) {
                            f.details.rowdetailsheight = l.rowdetailsheight;
                            f.details.rowdetailshidden = l.rowdetailshidden;
                            f.details.rowdetails = l.rowdetails;
                            break
                        }
                    }
                }
                this.details[j] = l
            }
            if (this._detailsUpdate) {
                return
            }
            this.rendergridcontent(true);
            this._updatecolumnwidths();
            this._updatecellwidths();
            this._renderrows(this.virtualsizeinfo);
            return true
        },
        getrowdetails: function(d) {
            if (d == null) {
                return false
            }
            d = this.getrowvisibleindex(d);
            return this._getrowdetails(d)
        },
        _getrowdetails: function(d) {
            if (d == null) {
                return false
            }
            if (d < 0) {
                return false
            }
            if (this.details[d]) {
                return this.details[d]
            }
            if (this.rowdetailstemplate) {
                if (typeof this.rowdetailstemplate === "function") {
                    var e = this.rowdetailstemplate(d);
                    if (e.rowdetailshidden === undefined) {
                        e.rowdetailshidden = true
                    }
                    if (e.rowdetailsheight === undefined) {
                        e.rowdetailsheight = 200
                    }
                    if (e.rowdetails === undefined) {
                        e.rowdetails = "<div></div>"
                    }
                    return e
                }
                return this.rowdetailstemplate
            }
        },
        getrecordscount: function() {
            return this.dataview.totalrecords
        },
        showrowdetails: function(d) {
            if (this._loading) {
                throw new Error("jqxGrid: " + this.loadingerrormessage);
                return false
            }
            if (d == null) {
                return false
            }
            if (!this.detailsVisibility) {
                this.detailsVisibility = new Array()
            }
            this.detailsVisibility[d] = false;
            d = this.getrowvisibleindex(d);
            if (d < 0) {
                return false
            }
            var e = this._getrowdetails(d);
            return this._setrowdetailsvisibility(d, e, false)
        },
        hiderowdetails: function(d) {
            if (this._loading) {
                throw new Error("jqxGrid: " + this.loadingerrormessage);
                return false
            }
            if (!this.detailsVisibility) {
                this.detailsVisibility = new Array()
            }
            this.detailsVisibility[d] = true;
            d = this.getrowvisibleindex(d);
            if (d < 0) {
                return false
            }
            var e = this._getrowdetails(d);
            return this._setrowdetailsvisibility(d, e, true)
        },
        _togglerowdetails: function(j) {
            if (!this.detailsVisibility) {
                this.detailsVisibility = new Array()
            }
            var f = j.visibleindex;
            var g = this._getrowdetails(f);
            if (g != null) {
                var e = this.vScrollInstance.value;
                var i = !g.rowdetailshidden;
                var h = this.getboundindex(j);
                if (h != undefined) {
                    this.detailsVisibility[h] = i
                }
                var d = this._setrowdetailsvisibility(f, g, i);
                if (e !== 0 && this.vScrollBar.css("visibility") !== "hidden") {
                    if (e <= this.vScrollInstance.max) {
                        this.vScrollInstance.setPosition(e)
                    } else {
                        this.vScrollInstance.setPosition(this.vScrollInstance.max)
                    }
                }
                return d
            }
            return false
        },
        _setrowdetailsvisibility: function(e, f, i) {
            if (this.rowdetailstemplate) {
                if (!this.details) {
                    this.details = new Array()
                }
                if (!this.details[e]) {
                    var g = typeof this.rowdetailstemplate === "function" ? this.rowdetailstemplate(e) : this.rowdetailstemplate;
                    if (undefined === g.rowdetailshidden) {
                        g.rowdetailshidden = true
                    }
                    if (undefined === g.rowdetailsheight) {
                        g.rowdetailsheight = 200
                    }
                    if (undefined === g.rowdetails) {
                        g.rowdetails = "<div></div>"
                    }
                    this.details[e] = {
                        rowdetailshidden: g.rowdetailshidden,
                        rowdetailsheight: g.rowdetailsheight,
                        rowdetails: g.rowdetails
                    };
                    var h = this.dataview.generatekey();
                    this.details[e].detailskey = h;
                    this.detailboundrows[e] = {
                        index: e,
                        details: this.details[e]
                    }
                }
            }
            if (f != null) {
                this.details[e].rowdetailshidden = i
            } else {
                return false
            }
            var d = this.details[e];
            if (i) {
                this._raiseEvent(21, {
                    rowindex: e,
                    details: d.rowdetails,
                    height: d.rowdetailsheight
                })
            } else {
                this._raiseEvent(20, {
                    rowindex: e,
                    details: d.rowdetails,
                    height: d.rowdetailsheight
                })
            }
            return this._setrowdetails(e, d.rowdetails, d.rowdetailsheight, d.rowdetailshidden)
        },
        getrowvisibleindex: function(d) {
            if (d == undefined || d == null || d < 0) {
                return false
            }
            if (this.virtualmode) {
                var e = this.dataview.loadedrecords[d];
                if (e == undefined) {
                    return -1
                }
                return e.visibleindex
            }
            return this.getrowdisplayindex(d)
        },
        hiderow: function(d) {
            if (this._loading) {
                throw new Error("jqxGrid: " + this.loadingerrormessage);
                return false
            }
            if (d == undefined || d == null || d < 0) {
                return false
            }
            if (d == null) {
                return false
            }
            this.hiddenboundrows[d] = {
                index: d,
                hidden: true
            };
            d = this.getrowvisibleindex(d);
            return this._setrowvisibility(d, true)
        },
        showrow: function(d) {
            if (this._loading) {
                throw new Error("jqxGrid: " + this.loadingerrormessage);
                return false
            }
            if (d == undefined || d == null || d < 0) {
                return false
            }
            if (d == null) {
                return false
            }
            this.hiddenboundrows[d] = {
                index: d,
                hidden: false
            };
            d = this.getrowvisibleindex(d);
            return this._setrowvisibility(d, false)
        },
        isrowhiddenat: function(d) {
            if (d == null) {
                return null
            }
            d = this.getrowvisibleindex(d);
            if (this.rows.records[d]) {
                return this.rows.records[d].hidden
            }
        },
        _setrowvisibility: function(d, f, e) {
            if (d == null) {
                return false
            }
            this.hiddens[d] = f;
            if (e == undefined || e) {
                this.rendergridcontent(true);
                return true
            }
            return false
        },
        _loadrows: function() {
            if (!this._pageviews[this.dataview.pagenum] && !this.pageable) {
                return
            }
            var k = !this.pageable ? this._pageviews[this.dataview.pagenum].top : 0;
            if (!this.pageable && this._pagescache[this.dataview.pagenum] != undefined) {
                return null
            }
            if (!this.virtualsizeinfo) {
                return
            }
            var l = this.that;
            var s = new Array();
            var j = new Array();
            var u = l.groupable && l.groups.length > 0;
            var d = this.dataview.totalrecords;
            var m = this.virtualsizeinfo.virtualheight;
            var e = 0;
            this.rows.beginupdate();
            var n = this.dataview.pagesize;
            if (this.pageable && u) {
                n = this.dataview.rows.length
            }
            for (var o = 0; o < n; o++) {
                if (o >= this.dataview.rows.length) {
                    break
                }
                var f = this.dataview.rows[o];
                var g = null;
                if (!l.rows.records[f.visibleindex]) {
                    g = new a(l, f)
                } else {
                    g = l.rows.records[f.visibleindex];
                    g.setdata(f)
                }
                g.hidden = this.hiddens[g.visibleindex];
                if (this.rowdetailstemplate) {
                    var v = typeof this.rowdetailstemplate === "function" ? this.rowdetailstemplate(g.boundindex) : this.rowdetailstemplate;
                    g.rowdetails = v.rowdetails;
                    g.rowdetailsheight = v.rowdetailsheight;
                    g.rowdetailshidden = v.rowdetailshidden;
                    if (g.rowdetailshidden === undefined) {
                        g.rowdetailshidden = true
                    }
                    if (g.rowdetailsheight === undefined) {
                        g.rowdetailsheight = 200
                    }
                    if (g.rowdetails === undefined) {
                        g.rowdetails = "<div></div>"
                    }
                }
                var r = this.details[g.visibleindex];
                if (r) {
                    g.rowdetails = r.rowdetails;
                    g.rowdetailsheight = r.rowdetailsheight;
                    g.rowdetailshidden = r.rowdetailshidden;
                    if (g.rowdetailshidden === undefined) {
                        g.rowdetailshidden = true
                    }
                    if (g.rowdetailsheight === undefined) {
                        g.rowdetailsheight = 200
                    }
                    if (g.rowdetails === undefined) {
                        g.rowdetails = "<div></div>"
                    }
                } else {
                    if (!this.rowdetailstemplate) {
                        g.rowdetails = null
                    }
                }
                if (u && this.pageable && g.parentbounddata != null) {
                    var p = s[g.parentbounddata.uniqueid];
                    if (p != null) {
                        var q = this._findgroupstate(p.uniqueid);
                        if (this._setsubgroupsvisibility) {
                            this._setsubgroupsvisibility(this, g.parentbounddata, !q, false)
                        }
                        g.hidden = this.hiddens[g.visibleindex]
                    }
                    if (p != null && p != undefined) {
                        g.parentrow = p;
                        p.subrows[p.subrows.length++] = g
                    }
                }
                if (g.hidden) {
                    continue
                }
                var h = f.visibleindex;
                if (!this.heights[h]) {
                    this.heights[h] = this.rowsheight
                }
                g.height = this.heights[h];
                if (this.rowdetails) {
                    if (g.rowdetails && !g.rowdetailshidden) {
                        g.height += g.rowdetailsheight
                    }
                }
                s[g.uniqueid] = g;
                j[e++] = g;
                g.top = k;
                k += g.height;
                var t = h;
                l.rows.replace(t, g)
            }
            if ((this.autoheight || this.pageable) && this.autorowheight) {
                if (this._pageviews && this._pageviews.length > 0) {
                    this._pageviews[0].height = k
                }
            }
            this.rows.resumeupdate();
            if (j.length > 0) {
                this._pagescache[this.dataview.pagenum] = j
            }
        },
        escape_HTML: function(d) {
            return d.replace(/[&<>"]/g, function(f) {
                var e = {
                    "&": "&",
                    "<": "<",
                    ">": ">",
                    '"': '"'
                };
                return e[f] || f
            })
        },
        _updateaddnewrowui: function(g) {
            var m = this;
            var k = m.everpresentrowposition != "bottom" ? m.addnewrowtop : m.addnewrowbottom;
            var o = m.columns.records.length;
            var f = 0;
            for (var l = 0; l < o; l++) {
                var h = m.columns.records[l];
                if (h.addnewrowwidget) {
                    b(h.addnewrowwidget).detach()
                }
            }
            for (var l = 0; l < o; l++) {
                var h = m.columns.records[l];
                var e = h.width;
                if (e < h.minwidth) {
                    e = h.minwidth
                }
                if (e > h.maxwidth) {
                    e = h.maxwidth
                }
                var n = b(k[0].cells[l]);
                n.css("left", f);
                var i = true;
                if (n.width() == e) {
                    i = false
                }
                if (g) {
                    i = true
                }
                n.width(e);
                n[0].left = f;
                if (h.addnewrowwidget) {
                    n.html("");
                    n.append(h.addnewrowwidget)
                }
                if (!(h.hidden && h.hideable) && !h.adaptivehidden) {
                    f += e
                } else {
                    n.css("display", "none")
                }
                if (!i) {
                    continue
                }
            }
            var p = m.everpresentrowactions.split(" ");
            m.addnewrowbutton.show();
            m.addnewrowupdatebutton.show();
            m.addnewrowresetbutton.show();
            m.addnewrowdeletebutton.show();
            if (p.indexOf("add") == -1 && p.indexOf("addBottom") == -1) {
                m.addnewrowbutton.hide()
            }
            if (p.indexOf("update") == -1) {
                m.addnewrowupdatebutton.hide()
            }
            if (p.indexOf("reset") == -1) {
                m.addnewrowresetbutton.hide()
            }
            if (p.indexOf("delete") == -1) {
                m.addnewrowdeletebutton.hide()
            }
            var d = b(k.children()[0]);
            d.width(parseInt(f) + 2);
            d.height(m.everpresentrowheight);
            d.css("max-height", m.everpresentrowheight + "px")
        },
        _removeaddnewrow: function() {
            var g = this;
            var d = g.columns.records.length;
            for (var f = 0; f < d; f++) {
                var e = g.columns.records[f];
                if (e.addnewrowwidget) {
                    if (e.destroyeverpresentrowwidget) {
                        e.destroyeverpresentrowwidget(e.addnewrowwidget)
                    } else {
                        e.addnewrowwidget.remove()
                    }
                    e.addnewrowwidget = null
                }
            }
            if (g.addnewrowbutton) {
                g.addnewrowbutton.remove()
            }
            if (g.addnewrowupdatebutton) {
                g.addnewrowupdatebutton.remove()
            }
            if (g.addnewrowdeletebutton) {
                g.addnewrowdeletebutton.remove()
            }
            if (g.addnewrowresetbutton) {
                g.addnewrowresetbutton.remove()
            }
            if (g.addnewrowpopup) {
                g.addnewrowpopup.remove();
                g.addnewrowpopup = null
            }
            if (g.addnewrowtop) {
                g.addnewrowtop.remove();
                g.addnewrowtop = null
            }
            if (g.addnewrowbottom) {
                g.addnewrowbottom.remove();
                g.addnewrowbottom = null
            }
        },
        _updateaddnewrow: function() {
            var o = this;
            var f = o.everpresentrowposition != "bottom" ? o.addnewrowtop : o.addnewrowbottom;
            var t = b('<div style="position: relative;" id="row000' + o.element.id + '"></div>');
            var i = 0;
            var z = o.columns.records.length;
            var n = o.toThemeProperty("jqx-grid-cell");
            n += " " + o.toThemeProperty("jqx-grid-cell-add-new-row");
            n += " " + o.toThemeProperty("jqx-grid-cell-filter-row");
            var m = z + 10;
            var h = new Array();
            var D = o.that;
            f[0].cells = h;
            t.height(o.everpresentrowheight);
            if (!o.showfilterrow && o.everpresentrowposition != "bottom") {
                f.css("max-height", (o.everpresentrowheight - 1) + "px")
            } else {
                if (o.showfilterrow && o.everpresentrowposition != "bottom") {
                    f.css("max-height", (o.everpresentrowheight - 3) + "px")
                }
            }
            t.css("max-height", o.everpresentrowheight + "px");
            f.append(t);
            var C = b("<div style='border-width: 1px; border-style: solid; padding: 5px; z-index: 99; display: none; position: absolute;'><div>").appendTo(b(document.body));
            var d = b("<button style='position: relative; float: left; margin: 2px; border-radius: 0px; padding: 4px 8px;'>" + o.gridlocalization.addrowstring + "</button>");
            var q = b("<button style='position: relative; float: left; margin: 2px; border-radius: 0px; padding: 4px 8px;'>" + o.gridlocalization.udpaterowstring + "</button>");
            var k = b("<button style='position: relative; float: left; margin: 2px; border-radius: 0px; padding: 4px 8px;'>" + o.gridlocalization.deleterowstring + "</button>");
            var p = b("<button style='position: relative; float: left; margin: 2px; border-radius: 0px; padding: 4px 8px;'>" + o.gridlocalization.resetrowstring + "</button>");
            C.addClass(o.toThemeProperty("jqx-popup"));
            C.addClass(o.toThemeProperty("jqx-rc-all"));
            C.addClass(o.toThemeProperty("jqx-fill-state-normal"));
            C.addClass(o.toThemeProperty("jqx-shadow"));
            C.append(d);
            C.append(q);
            C.append(k);
            C.append(p);
            var g = o.everpresentrowactions.split(" ");
            if (g.indexOf("add") == -1 && g.indexOf("addBottom") == -1) {
                d.hide()
            }
            if (g.indexOf("update") == -1) {
                q.hide()
            }
            if (g.indexOf("reset") == -1) {
                p.hide()
            }
            if (g.indexOf("delete") == -1) {
                k.hide()
            }
            o.addnewrowpopup = C;
            o.addnewrowbutton = d;
            o.addnewrowupdatebutton = q;
            o.addnewrowdeletebutton = k;
            o.addnewrowresetbutton = p;
            d.jqxButton({
                template: "success",
                theme: o.theme
            });
            k.jqxButton({
                template: "danger",
                theme: o.theme
            });
            q.jqxButton({
                template: "primary",
                theme: o.theme
            });
            p.jqxButton({
                template: "warning",
                theme: o.theme
            });
            q.mousedown(function(E) {
                var Q = {};
                var J = {};
                for (var H = 0; H < z; H++) {
                    var F = o.columns.records[H];
                    if (!F.geteverpresentrowwidgetvalue) {
                        continue
                    }
                    var M = F.geteverpresentrowwidgetvalue(F.displayfield, F.addnewrowwidget);
                    J[F.datafield] = M;
                    if (F.datafield != F.displayfield) {
                        J[F.datafield] = M.value;
                        J[F.displayfield] = M.label
                    }
                }
                var L = false;
                for (var H = 0; H < z; H++) {
                    var F = o.columns.records[H];
                    if (!F.geteverpresentrowwidgetvalue) {
                        continue
                    }
                    var M = F.geteverpresentrowwidgetvalue(F.displayfield, F.addnewrowwidget);
                    if (F.createeverpresentrowwidget && F.validateeverpresentrowwidgetvalue) {
                        var K = F.validateeverpresentrowwidgetvalue(F.displayfield, M, J);
                        var P = K;
                        var I = o.gridlocalization.validationstring;
                        if (P.message != undefined) {
                            I = P.message
                        }
                        var O = typeof P == "boolean" ? P : P.result;
                        if (!O) {
                            M = "invalid editor state";
                            F.addnewrowwidget.attr("title", I);
                            F.addnewrowwidget.addClass(o.toThemeProperty("jqx-input-invalid"))
                        } else {
                            F.addnewrowwidget.attr("title", "");
                            F.addnewrowwidget.removeClass(o.toThemeProperty("jqx-input-invalid"))
                        }
                    }
                    if (M === "invalid editor state") {
                        E.preventDefault();
                        E.stopPropagation();
                        L = true;
                        continue
                    }
                    if (L) {
                        continue
                    }
                }
                if (L) {
                    C.hide();
                    o.focus();
                    return
                }
                for (var H = 0; H < z; H++) {
                    var F = o.columns.records[H];
                    if (!F.geteverpresentrowwidgetvalue) {
                        continue
                    }
                    var M = F.geteverpresentrowwidgetvalue(F.displayfield, F.addnewrowwidget);
                    Q[F.datafield] = M;
                    if (F.datafield != F.displayfield) {
                        Q[F.datafield] = M.value;
                        Q[F.displayfield] = M.label
                    }
                    if (F.reseteverpresentrowwidgetvalue) {
                        F.reseteverpresentrowwidgetvalue(F.displayfield, F.addnewrowwidget)
                    }
                }
                if (o.selectedcells.length > 0 || o.selectedrowindexes.length > 0) {
                    if (o.selectionmode.indexOf("cell") >= 0) {
                        var N = o.getselectedcells()[0].rowindex
                    } else {
                        var N = o.selectedrowindexes[0]
                    }
                    var G = o.getrowdata(N);
                    if (G) {
                        o.updaterow(G.uid, Q)
                    }
                }
                C.hide();
                o.focus()
            });
            k.mousedown(function(G) {
                if (o.selectedcells.length > 0 || o.selectedrowindexes.length > 0) {
                    if (o.selectionmode.indexOf("cell") >= 0) {
                        var I = o.getselectedcells()[0].rowindex
                    } else {
                        var I = o.selectedrowindexes[0]
                    }
                    var H = o.getrowdata(I);
                    if (H) {
                        o.deleterow(H.uid)
                    }
                }
                for (var F = 0; F < z; F++) {
                    var E = o.columns.records[F];
                    if (E.reseteverpresentrowwidgetvalue) {
                        E.reseteverpresentrowwidgetvalue(E.displayfield, E.addnewrowwidget)
                    }
                }
                C.hide();
                o.focus();
                o.updateeverpresentrow()
            });
            d.mousedown(function(F) {
                var P = {};
                var J = {};
                for (var H = 0; H < z; H++) {
                    var G = o.columns.records[H];
                    if (!G.geteverpresentrowwidgetvalue) {
                        continue
                    }
                    var M = G.geteverpresentrowwidgetvalue(G.displayfield, G.addnewrowwidget);
                    J[G.datafield] = M;
                    if (G.datafield != G.displayfield) {
                        J[G.datafield] = M.value;
                        J[G.displayfield] = M.label
                    }
                    if (G.datafield != G.displayfield) {
                        J[G.datafield] = M.label;
                        J[G.displayfield] = M.value
                    }
                }
                var L = false;
                for (var H = 0; H < z; H++) {
                    var G = o.columns.records[H];
                    if (!G.geteverpresentrowwidgetvalue) {
                        continue
                    }
                    var M = G.geteverpresentrowwidgetvalue(G.displayfield, G.addnewrowwidget);
                    if (G.createeverpresentrowwidget && G.validateeverpresentrowwidgetvalue) {
                        var K = G.validateeverpresentrowwidgetvalue(G.displayfield, M, J);
                        var O = K;
                        var I = o.gridlocalization.validationstring;
                        if (O.message != undefined) {
                            I = O.message
                        }
                        var N = typeof O == "boolean" ? O : O.result;
                        if (!N) {
                            M = "invalid editor state";
                            G.addnewrowwidget.attr("title", I);
                            G.addnewrowwidget.addClass(o.toThemeProperty("jqx-input-invalid"))
                        } else {
                            G.addnewrowwidget.attr("title", "");
                            G.addnewrowwidget.removeClass(o.toThemeProperty("jqx-input-invalid"))
                        }
                    }
                    if (M === "invalid editor state") {
                        F.preventDefault();
                        F.stopPropagation();
                        L = true;
                        continue
                    }
                    if (L) {
                        continue
                    }
                }
                if (L) {
                    C.hide();
                    o.focus();
                    return
                }
                for (var H = 0; H < z; H++) {
                    var G = o.columns.records[H];
                    if (!G.geteverpresentrowwidgetvalue) {
                        continue
                    }
                    var M = G.geteverpresentrowwidgetvalue(G.displayfield, G.addnewrowwidget);
                    P[G.datafield] = M;
                    if (G.datafield != G.displayfield) {
                        J[G.datafield] = M.label;
                        J[G.displayfield] = M.value
                    }
                    if (G.reseteverpresentrowwidgetvalue) {
                        G.reseteverpresentrowwidgetvalue(G.displayfield, G.addnewrowwidget)
                    }
                }
                var E = o.everpresentrowactions.indexOf("addBottom") >= 0 ? "last" : "first";
                o.addrow(null, P, E);
                C.hide();
                o.focus()
            });
            p.mousedown(function(G) {
                var H = {};
                for (var F = 0; F < z; F++) {
                    var E = o.columns.records[F];
                    if (E.reseteverpresentrowwidgetvalue) {
                        E.reseteverpresentrowwidgetvalue(E.displayfield, E.addnewrowwidget)
                    }
                    if (E.addnewrowwidget) {
                        E.addnewrowwidget.attr("title", "");
                        E.addnewrowwidget.removeClass(o.toThemeProperty("jqx-input-invalid"))
                    }
                }
                C.hide();
                o.focus()
            });
            for (var w = 0; w < z; w++) {
                var x = o.columns.records[w];
                var u = x.width;
                if (u < x.minwidth) {
                    u = x.minwidth
                }
                if (u > x.maxwidth) {
                    u = x.maxwidth
                }
                var e = b('<div style="overflow: hidden; position: absolute; height: 100%;" class="' + n + '"></div>');
                t.append(e);
                e.css("left", i);
                if (o.rtl) {
                    e.css("z-index", m++);
                    e.css("border-left-width", "1px")
                } else {
                    e.css("z-index", m--)
                }
                if (u == "auto") {
                    u = 0
                }
                e[0].style.width = parseFloat(u) + "px";
                e[0].left = i;
                if (!(x.hidden && x.hideable) && !x.adaptivehidden) {
                    i += u
                } else {
                    e.css("display", "none")
                }
                h[h.length] = e[0];
                if (x.checkboxcolumn) {
                    var B = o.toThemeProperty("jqx-grid-cell");
                    B += " " + o.toThemeProperty("jqx-grid-cell-filter-row");
                    B += " " + o.toThemeProperty("jqx-grid-cell-pinned");
                    e.removeClass().addClass(B);
                    continue
                }
                var s = true;
                if (!o.rtl) {
                    if (o.groupable) {
                        var y = (o.showrowdetailscolumn && o.rowdetails) ? 1 : 0;
                        if (o.groups.length + y > w) {
                            s = false
                        }
                    }
                    if (o.showrowdetailscolumn && o.rowdetails && w == 0) {
                        s = false
                    }
                } else {
                    if (o.groupable) {
                        var y = (o.showrowdetailscolumn && o.rowdetails) ? 1 : 0;
                        if (o.groups.length + y + w > z - 1) {
                            s = false
                        }
                    }
                    if (o.showrowdetailscolumn && o.rowdetails && w == z - 1) {
                        s = false
                    }
                }
                o.updateeverpresentrow = function() {
                    var G = null;
                    if (o.selectedcells.length > 0 || o.selectedrowindexes.length > 0) {
                        if (o.selectionmode.indexOf("cell") >= 0) {
                            var H = o.getselectedcells()[0].rowindex
                        } else {
                            var H = o.selectedrowindexes[0]
                        }
                        G = o.getrowdata(H)
                    }
                    if (!G) {
                        return
                    }
                    for (var F = 0; F < o.columns.records.length; F++) {
                        var j = o.columns.records[F];
                        if (j.seteverpresentrowwidgetvalue) {
                            var E = o.getcelltext(H, j.displayfield);
                            j.seteverpresentrowwidgetvalue(j.addnewrowwidget, E)
                        }
                    }
                };
                if (s) {
                    if (x.createeverpresentrowwidget) {
                        var v = function() {
                            d.trigger("mousedown")
                        };
                        x.addnewrowwidget = x.createeverpresentrowwidget(x.datafield, e, C, v);
                        if (x.initeverpresentrowwidget) {
                            x.initeverpresentrowwidget(x.datafield, e, C)
                        }
                    } else {
                        o._measureElement("column");
                        var r = (o.everpresentrowheight / 2 - o._columnheight / 2);
                        if (r < 0) {
                            r = 6
                        }
                        r += "px";
                        if (x.datafield === "addButtonColumn") {
                            var l = b('<div style="padding-bottom: 2px; text-align: center; margin-top: ' + r + ';"><a href="#">' + o.gridlocalization.addrowstring + "</a></div>");
                            e.append(l);
                            l.mousedown(function() {
                                d.trigger("mousedown")
                            });
                            continue
                        } else {
                            if (x.datafield === "resetButtonColumn") {
                                var l = b('<div style="padding-bottom: 2px; text-align: center; margin-top: ' + r + ';"><a href="#">' + o.gridlocalization.resetrowstring + "</a></div>");
                                e.append(l);
                                l.mousedown(function() {
                                    p.trigger("mousedown")
                                });
                                continue
                            }
                        }
                        var A = function(F, H, j) {
                            var E = b('<input style="box-sizing: border-box; padding-right: 4px; padding-left: 4px; border:none;" autocomplete="off" type="textarea"/>');
                            E[0].id = b.jqx.utilities.createId();
                            E.addClass(F.toThemeProperty("jqx-widget"));
                            E.addClass(F.toThemeProperty("jqx-input"));
                            E.addClass(F.toThemeProperty("jqx-widget-content"));
                            E.addClass(F.toThemeProperty("jqx-enableselect"));
                            E.addClass(F.toThemeProperty("jqx-grid-cell-add-new-row"));
                            E.css("text-align", j.cellsalign);
                            if (F.rtl) {
                                E.css("direction", "rtl")
                            }
                            if (F.disabled) {
                                E.attr("disabled", true)
                            }
                            E.attr("disabled", false);
                            E.attr("placeholder", F.gridlocalization.everpresentrowplaceholder + j.text);
                            E.appendTo(H);
                            E.css("width", "100%");
                            E.css("height", F.everpresentrowheight + "px");
                            E.css("line-height", F.everpresentrowheight + "px");
                            E.css("max-height", F.everpresentrowheight + "px");
                            E.css("margin", "0px");
                            E.focus(function() {
                                if (o.selectedcells.length > 0 || o.selectedrowindexes.length > 0) {
                                    if (o.selectionmode.indexOf("cell") >= 0) {
                                        var K = o.getselectedcells()[0].rowindex
                                    } else {
                                        var K = o.selectedrowindexes[0]
                                    }
                                }
                                E.addClass(F.toThemeProperty("jqx-fill-state-focus"));
                                var I = F.columns.records.indexOf(j);
                                if (F.everpresentrowactionsmode !== "columns") {
                                    C.css({
                                        display: "block",
                                        top: E.coord().top + F.everpresentrowheight - 1,
                                        left: I > 0 ? E.coord().left : E.coord().left - 1
                                    })
                                }
                                var J = C.children().width();
                                if (j.cellsalign === "right") {
                                    var J = d.width() + p.width();
                                    C.children().css("left", J - J + "px")
                                } else {
                                    C.children().css("left", "0px")
                                }
                                F.content[0].scrollLeft = 0;
                                F.content[0].scrollTop = 0;
                                setTimeout(function() {
                                    F.content[0].scrollLeft = 0;
                                    F.content[0].scrollTop = 0
                                }, 50);
                                return false
                            });
                            j.addnewrowwidget = E;
                            if (!j.reseteverpresentrowwidgetvalue) {
                                j.reseteverpresentrowwidgetvalue = function(J, I) {
                                    I.val("");
                                    I.focus();
                                    I.blur();
                                    I.removeClass(o.toThemeProperty("jqx-input-invalid"));
                                    I.attr("title", "")
                                }
                            }
                            if (!j.seteverpresentrowwidgetvalue) {
                                j.seteverpresentrowwidgetvalue = function(J, I) {
                                    J.val(I)
                                }
                            }
                            if (!j.geteverpresentrowwidgetvalue) {
                                var G = j;
                                j.geteverpresentrowwidgetvalue = function(I, P, R) {
                                    var U = P.val();
                                    if (R !== false && G.validateeverpresentrowwidgetvalue) {
                                        var Y = {};
                                        var O = {};
                                        for (var M = 0; M < z; M++) {
                                            var K = o.columns.records[M];
                                            if (!K.geteverpresentrowwidgetvalue) {
                                                continue
                                            }
                                            var Q = K.geteverpresentrowwidgetvalue(K.displayfield, K.addnewrowwidget, false);
                                            O[K.datafield] = Q;
                                            if (K.datafield != K.displayfield) {
                                                O[K.datafield] = Q.value;
                                                O[K.displayfield] = Q.label
                                            }
                                        }
                                        var T = G.validateeverpresentrowwidgetvalue(G.displayfield, U, O);
                                        var X = T;
                                        var N = o.gridlocalization.validationstring;
                                        if (X.message != undefined) {
                                            N = X.message
                                        }
                                        var W = typeof X == "boolean" ? X : X.result;
                                        if (!W) {
                                            E.addClass(o.toThemeProperty("jqx-input-invalid"));
                                            E.attr("title", N);
                                            return "invalid editor state"
                                        } else {
                                            E.removeClass(o.toThemeProperty("jqx-input-invalid"));
                                            E.attr("title", "")
                                        }
                                    }
                                    var S = "string";
                                    var J = o.source.datafields || ((o.source._source) ? o.source._source.datafields : null);
                                    if (J) {
                                        var V = "";
                                        b.each(J, function() {
                                            if (this.name == G.displayfield) {
                                                if (this.type) {
                                                    V = this.type
                                                }
                                                return false
                                            }
                                        });
                                        if (V) {
                                            S = V
                                        }
                                    }
                                    if (S === "number") {
                                        var L = parseFloat(U);
                                        if (isNaN(L)) {
                                            return null
                                        }
                                    }
                                    if (S === "date") {
                                        return b.jqx.dataFormat.tryparsedate(U, o.gridlocalization)
                                    }
                                    if (S === "bool" || S === "boolean") {
                                        if (U === "true") {
                                            return true
                                        }
                                        if (U == "1") {
                                            return true
                                        }
                                        if (U === "false") {
                                            return false
                                        }
                                        if (U == "0") {
                                            return false
                                        }
                                        if (U === true) {
                                            return U
                                        }
                                        if (U === false) {
                                            return U
                                        }
                                        return false
                                    }
                                    return U
                                }
                            }
                            E.keydown(function(I) {
                                if (I.keyCode === 13) {
                                    if (o.everpresentrowactions.indexOf("add") >= 0) {
                                        d.trigger("mousedown")
                                    } else {
                                        if (o.everpresentrowactions.indexOf("update") >= 0) {
                                            q.trigger("mousedown")
                                        } else {
                                            if (o.everpresentrowactions.indexOf("delete") >= 0) {
                                                k.trigger("mousedown")
                                            }
                                        }
                                    }
                                }
                            });
                            E.blur(function() {
                                E.removeClass(F.toThemeProperty("jqx-fill-state-focus"));
                                C.css("display", "none")
                            });
                            if (j.initeverpresentrowwidget) {
                                j.initeverpresentrowwidget(j.datafield, H, C)
                            }
                        };
                        A(this, e, x)
                    }
                }
            }
            if (b.jqx.browser.msie && b.jqx.browser.version < 8) {
                t.css("z-index", m--)
            }
            t.width(parseFloat(i) + 2);
            f.addClass(n);
            f.css("border-bottom-width", "0px");
            if (o.showfilterrow) {
                f.css("border-top-width", "0px")
            } else {
                f.css("border-top-width", "1px")
            }
            f.css("box-sizing", "border-box");
            f.css("border-right-width", "0px")
        },
        _gettableheight: function() {
            if (this.tableheight != undefined) {
                return this.tableheight
            }
            var e = this.host.height();
            if (this.columnsheader) {
                var d = this.columnsheader.outerHeight();
                if (!this.showheader) {
                    d = 0
                }
            }
            e -= d;
            if (this.hScrollBar[0].style.visibility == "visible") {
                e -= this.hScrollBar.outerHeight()
            }
            if (this.pageable) {
                e -= this.pager.outerHeight()
            }
            if (this._groupsheader()) {
                e -= this.groupsheader.outerHeight()
            }
            if (this.showtoolbar) {
                e -= this.toolbarheight
            }
            if (this.showfilterbar) {
                e -= this.toolbarheight
            }
            if (this.showstatusbar) {
                e -= this.statusbarheight
            }
            if (this.showeverpresentrow && this.everpresentrowposition === "bottom") {
                e -= this.everpresentrowheight
            }
            if (e > 0) {
                this.tableheight = e;
                return e
            }
            return this.host.height()
        },
        _getpagesize: function() {
            if (this.pageable) {
                return this.pagesize
            }
            if (this.virtualmode) {
                var e = Math.round(this.host.height()) + 2 * this.rowsheight;
                var d = Math.round(e / this.rowsheight);
                return d
            }
            if (this.autoheight || this.autorowheight) {
                if (this.dataview.totalrows == 0) {
                    return 1
                }
                return this.dataview.totalrows
            }
            if (this.dataview.totalrows < 100 && this.dataview.totalrecords < 100 && this.dataview.totalrows > 0) {
                return this.dataview.totalrows
            }
            return 100
        },
        _calculatevirtualheight: function() {
            var p = this.that;
            var e = Math.round(this.host.height()) + 2 * this.rowsheight;
            var k = this._gettableheight();
            var r = Math.round(e / this.rowsheight);
            this.heights = new Array();
            this.hiddens = new Array();
            this.details = new Array();
            this.expandedgroups = new Array();
            this.hiddenboundrows = new Array();
            this.heightboundrows = new Array();
            this.detailboundrows = new Array();
            var h = Math.max(this.dataview.totalrows, this.dataview.totalrecords);
            if (this.pageable) {
                h = this.pagesize;
                if (this.pagesize > Math.max(this.dataview.totalrows, this.dataview.totalrecords) && this.autoheight) {
                    h = Math.max(this.dataview.totalrows, this.dataview.totalrecords)
                } else {
                    if (!this.autoheight) {
                        if (this.dataview.totalrows < this.pagesize) {
                            h = Math.max(this.dataview.totalrows, this.dataview.totalrecords)
                        }
                    }
                }
            }
            var m = h * this.rowsheight;
            var n = 0;
            var j = 0;
            var l = 0;
            var f = this._getpagesize();
            var d = f * this.rowsheight;
            var g = 0;
            if (!this.pageable && this.autoheight) {
                r = h
            }
            if (h + f > 0) {
                while (g <= h + f) {
                    n += d;
                    if (g - f < h && g >= h) {
                        var q = g - h;
                        if (q > 0) {
                            l -= d;
                            this._pageviews[j - 1] = {
                                top: l,
                                height: d - q * this.rowsheight
                            }
                        }
                        break
                    } else {
                        this._pageviews[j++] = {
                            top: l,
                            height: d
                        }
                    }
                    l = n;
                    g += f
                }
            }
            if (this.resizingGrid != true) {
                this.vScrollBar.jqxScrollBar({
                    value: 0
                })
            }
            if (this.hScrollBar.css("visibility") == "hidden") {
                var o = 0;
                if (this.columns && this.columns.records) {
                    for (var g = 0; g < this.columns.records.length; g++) {
                        o += !isNaN(this.columns.records[g].width) ? this.columns.records[g].width : this.columns.records[g].minwidth
                    }
                    if (!isNaN(o) && parseInt(o) > this.host.width()) {
                        k -= 30
                    }
                }
            }
            if (m > k && !this.autoheight) {
                this.vScrollBar.css("visibility", "visible");
                if (this.scrollmode == "deferred") {
                    this.vScrollBar.jqxScrollBar({
                        max: m
                    })
                } else {
                    this.vScrollBar.jqxScrollBar({
                        max: m - k
                    })
                }
            } else {
                this.vScrollBar.css("visibility", "hidden")
            }
            this.dataview.pagesize = f;
            this.dataview.updateview();
            return {
                visiblerecords: r,
                virtualheight: m
            }
        },
        _updatepageviews: function() {
            if (this.updating()) {
                return
            }
            this._pagescache = new Array();
            this._pageviews = new Array();
            this.tableheight = null;
            var m = this.that;
            var h = Math.round(this.host.height()) + 2 * this.rowsheight;
            var w = Math.round(h / this.rowsheight);
            var f = Math.max(this.dataview.totalrows, this.dataview.totalrecords);
            var n = f * this.rowsheight;
            var l = 0;
            var q = 0;
            var g = 0;
            var p = 0;
            var r = 0;
            var o = this._getpagesize();
            if (!this.pageable) {
                for (var t = 0; t < f; t++) {
                    var d = {
                        index: t,
                        height: this.heights[t],
                        hidden: this.hiddens[t],
                        details: this.details[t]
                    };
                    if (this.heights[t] == undefined) {
                        this.heights[t] = this.rowsheight;
                        d.height = this.rowsheight
                    }
                    if (this.hiddens[t] == undefined) {
                        this.hiddens[t] = false;
                        d.hidden = false
                    }
                    if (this.details[t] == undefined) {
                        this.details[t] = null
                    }
                    if (d.height != m.rowsheight) {
                        n -= m.rowsheight;
                        n += d.height
                    }
                    if (d.hidden) {
                        n -= d.height
                    } else {
                        q += d.height;
                        var e = 0;
                        if (this.rowdetails) {
                            if (this.rowdetailstemplate) {
                                if (!d.details) {
                                    var v = typeof this.rowdetailstemplate === "function" ? this.rowdetailstemplate() : this.rowdetailstemplate;
                                    if (v.rowdetailshidden === undefined) {
                                        v.rowdetailshidden = true
                                    }
                                    if (v.rowdetailsheight === undefined) {
                                        v.rowdetailsheight = 200
                                    }
                                    if (v.rowdetails === undefined) {
                                        v.rowdetails = "<div></div>"
                                    }
                                    d.details = v
                                }
                            }
                            if (d.details && d.details.rowdetails && !d.details.rowdetailshidden) {
                                e = d.details.rowdetailsheight;
                                q += e;
                                n += e
                            }
                        }
                        l += d.height + e
                    }
                    r++;
                    if (r >= o || t == f - 1) {
                        this._pageviews[g++] = {
                            top: p,
                            height: q
                        };
                        q = 0;
                        p = l;
                        r = 0
                    }
                }
            } else {
                if (this._updatepagedview) {
                    n = this._updatepagedview(f, n, 0)
                }
                if (this.autoheight) {
                    this._arrange()
                }
            }
            var j = this._gettableheight();
            if (n > j) {
                if (this.pageable && this.gotopage) {
                    n = this._pageviews[0].height;
                    if (n < 0) {
                        n = this._pageviews[0].height
                    }
                }
                if (this.vScrollBar.css("visibility") != "visible") {
                    this.vScrollBar.css("visibility", "visible")
                }
                if (n <= j || this.autoheight) {
                    this.vScrollBar.css("visibility", "hidden")
                }
                if (n - j > 0) {
                    if (this.scrollmode != "deferred") {
                        var s = n - j;
                        var u = this.vScrollInstance.max;
                        this.vScrollBar.jqxScrollBar({
                            max: s
                        });
                        if (s != u) {
                            this.vScrollBar.jqxScrollBar({
                                value: 0
                            })
                        }
                    } else {
                        this.vScrollBar.jqxScrollBar({
                            value: 0,
                            max: n
                        })
                    }
                } else {
                    this.vScrollBar.jqxScrollBar({
                        value: 0,
                        max: n
                    })
                }
            } else {
                if (!this._loading) {
                    this.vScrollBar.css("visibility", "hidden")
                }
                this.vScrollBar.jqxScrollBar({
                    value: 0
                })
            }
            this._arrange();
            if (this.autoheight) {
                w = Math.round(this.host.height() / this.rowsheight)
            }
            this.virtualsizeinfo = {
                visiblerecords: w,
                virtualheight: n
            }
        },
        updatebounddata: function(f) {
            if (f != "data" && f != "sort" && f != "filter" && f != "cells" && f != "pagechanged" && f != "pagesizechanged" && !this.virtualmode) {
                this.virtualsizeinfo = null;
                if (this.columns && this.columns.records) {
                    for (var d = 0; d < this.columns.records.length; d++) {
                        var e = this.columns.records[d];
                        if (e.destroywidget && e.widget) {
                            if (e.destroywidget) {
                                e.destroywidget(e.widget)
                            }
                        }
                    }
                }
                if (this.showfilterrow && this.filterable && this.filterrow) {
                    if (this.clearfilters) {
                        this.clearfilters(false)
                    }
                    if (this.filterable && this._destroyedfilters && this.showfilterrow) {
                        this._destroyedfilters()
                    }
                    this.filterrow.remove();
                    this._filterrowcache = new Array();
                    this.filterrow = null
                } else {
                    if (this.filterable) {
                        if (this.clearfilters) {
                            this.clearfilters(false)
                        }
                    }
                }
                if (this.showeverpresentrow) {
                    this._removeaddnewrow()
                }
                this.detailsVisibility = new Array();
                this.groupsVisibility = new Array();
                if (this.groupable) {
                    this.dataview.groups = [];
                    this.groups = []
                }
                if (this.pageable) {
                    this.pagenum = 0;
                    this.dataview.pagenum = 0
                }
                if (this.sortable) {
                    this.sortcolumn = null;
                    this.sortdirection = "";
                    this.dataview.sortfielddirection = "";
                    this.dataview.clearsortdata()
                }
            }
            this.databind(this.source, f)
        },
        refreshdata: function() {
            this._refreshdataview();
            this.render()
        },
        _updatevscrollbarmax: function() {
            if (this._pageviews && this._pageviews.length > 0) {
                var f = this._pageviews[0].height;
                if (this.virtualmode || !this.pageable) {
                    f = this.virtualsizeinfo.virtualheight
                }
                var e = this._gettableheight();
                if (f > e) {
                    if (this.pageable && this.gotopage) {
                        f = this._pageviews[0].height;
                        if (f < 0) {
                            f = this._pageviews[0].height
                        }
                    }
                    if (this.vScrollBar.css("visibility") != "visible") {
                        this.vScrollBar.css("visibility", "visible")
                    }
                    if (f <= e || this.autoheight) {
                        this.vScrollBar.css("visibility", "hidden")
                    }
                    if (f - e > 0) {
                        var d = f - e;
                        this.vScrollBar.jqxScrollBar({
                            max: d
                        })
                    } else {
                        this.vScrollBar.jqxScrollBar({
                            value: 0,
                            max: f
                        })
                    }
                } else {
                    this.vScrollBar.css("visibility", "hidden");
                    this.vScrollBar.jqxScrollBar({
                        value: 0
                    })
                }
            }
        },
        _refreshdataview: function() {
            this.dataview.refresh()
        },
        refresh: function(d) {
            if (d != true) {
                if (b.jqx.isHidden(this.host)) {
                    return
                }
                if (this.virtualsizeinfo != null) {
                    this._cellscache = new Array();
                    this._renderrows(this.virtualsizeinfo);
                    this._updatesize()
                }
            }
        },
        render: function() {
            this._render(true, true, true, true)
        },
        invalidate: function() {
            if (this.virtualsizeinfo) {
                this._updatecolumnwidths();
                this._updatecellwidths();
                this._renderrows(this.virtualsizeinfo)
            }
        },
        clear: function() {
            this.databind(null);
            this.render()
        },
        _preparecolumngroups: function() {
            var o = this.columnsheight;
            if (this.columngroups) {
                this.columnshierarchy = new Array();
                if (this.columngroups.length) {
                    var n = this;
                    for (var h = 0; h < this.columngroups.length; h++) {
                        this.columngroups[h].parent = null;
                        this.columngroups[h].groups = null
                    }
                    for (var h = 0; h < this.columns.records.length; h++) {
                        this.columns.records[h].parent = null;
                        this.columns.records[h].groups = null
                    }
                    var p = function(j) {
                        for (var u = 0; u < n.columngroups.length; u++) {
                            var v = n.columngroups[u];
                            if (v.name === j) {
                                return v
                            }
                        }
                        return null
                    };
                    for (var h = 0; h < this.columngroups.length; h++) {
                        var q = this.columngroups[h];
                        if (!q.groups) {
                            q.groups = null
                        }
                        if (q.parentgroup) {
                            var s = p(q.parentgroup);
                            if (s) {
                                q.parent = s;
                                if (!s.groups) {
                                    s.groups = new Array()
                                }
                                if (s.groups.indexOf(q) === -1) {
                                    s.groups.push(q)
                                }
                            }
                        }
                    }
                    for (var h = 0; h < this.columns.records.length; h++) {
                        var q = this.columns.records[h];
                        if (q.columngroup) {
                            var s = p(q.columngroup);
                            if (s) {
                                if (!s.groups) {
                                    s.groups = new Array()
                                }
                                q.parent = s;
                                if (s.groups.indexOf(q) === -1) {
                                    s.groups.push(q)
                                }
                            }
                        }
                    }
                    var r = 0;
                    for (var h = 0; h < this.columns.records.length; h++) {
                        var q = this.columns.records[h];
                        var e = q;
                        q.level = 0;
                        while (e.parent) {
                            e = e.parent;
                            q.level++
                        }
                        var e = q;
                        var d = q.level;
                        r = Math.max(r, q.level);
                        while (e.parent) {
                            e = e.parent;
                            if (e) {
                                e.level = --d
                            }
                        }
                    }
                    var m = function(y) {
                        var x = new Array();
                        if (y.columngroup) {
                            x.push(y)
                        }
                        if (y.groups) {
                            for (var w = 0; w < y.groups.length; w++) {
                                if (y.groups[w].columngroup) {
                                    x.push(y.groups[w])
                                } else {
                                    if (y.groups[w].groups) {
                                        var v = m(y.groups[w]);
                                        for (var u = 0; u < v.length; u++) {
                                            x.push(v[u])
                                        }
                                    }
                                }
                            }
                        }
                        return x
                    };
                    for (var h = 0; h < this.columngroups.length; h++) {
                        var q = this.columngroups[h];
                        var f = m(q);
                        q.columns = f;
                        var k = new Array();
                        var t = 0;
                        for (var g = 0; g < f.length; g++) {
                            k.push(this.columns.records.indexOf(f[g]));
                            if (f[g].pinned) {
                                t++
                            }
                        }
                        if (t != 0) {
                            throw new Error("jqxGrid: Column Groups initialization Error. Please, check the initialization of the jqxGrid's columns array. The columns in a column group cannot be pinned.")
                        }
                        k.sort(function(j, i) {
                            j = parseInt(j);
                            i = parseInt(i);
                            if (j < i) {
                                return -1
                            }
                            if (j > i) {
                                return 1
                            }
                            return 0
                        });
                        for (var l = 1; l < k.length; l++) {
                            if (k[l] != k[l - 1] + 1) {
                                throw new Error("jqxGrid: Column Groups initialization Error. Please, check the initialization of the jqxGrid's columns array. The columns in a column group are expected to be siblings in the columns array.");
                                this.host.remove()
                            }
                        }
                    }
                }
                this.columngroupslevel = 1 + r;
                o = this.columngroupslevel * this.columnsheight
            }
            return o
        },
        _render: function(k, j, l, e, f) {
            if (this.dataview == null) {
                return
            }
            if (this._loading) {
                return
            }
            if (this._batchupdate) {
                return
            }
            if (b.jqx.isHidden(this.host)) {
                var g = this;
                if (g.___hiddenTimer) {
                    clearInterval(g.___hiddenTimer);
                    g.___hiddenTimer = null
                }
                this.___hiddenTimer = setInterval(function() {
                    if (!b.jqx.isHidden(g.host)) {
                        clearInterval(g.___hiddenTimer);
                        g.render()
                    }
                }, 300);
                return
            }
            if (this.editcell != null && this.endcelledit) {
                this.endcelledit(this.editcell.row, this.editcell.column, true, false)
            }
            this.validationpopup = null;
            this._removeHandlers();
            this._addHandlers();
            this._initializeRows();
            this._requiresupdate = j != undefined ? j : true;
            this._newmax = null;
            if (l) {
                if (!this._requiresupdate) {
                    if (e != false) {
                        this._initmenu()
                    }
                }
                if (this.columns == null) {
                    this.columns = new b.jqx.collection(this.element)
                } else {
                    var i = this;
                    if (this.columns && this.columns.name === "observableArray") {
                        this.columns.notifier = function(p) {
                            var n = function() {
                                i.columns = i._columns;
                                i.render()
                            };
                            switch (p.type) {
                                case "add":
                                    n();
                                    break;
                                case "update":
                                    if (p.name === "index") {
                                        i.beginupdate();
                                        for (var o in p.newValue) {
                                            i.setcolumnproperty(p.newValue.datafield, o, p.newValue[o])
                                        }
                                        i.endupdate()
                                    } else {
                                        var m = p.path.split(".");
                                        i.setcolumnproperty(i.columns[m[0]].datafield, p.name, p.newValue)
                                    }
                                    break;
                                case "delete":
                                    n();
                                    break
                            }
                        }
                    }
                    if (this.columngroups && this.columngroups.name === "observableArray") {
                        this.columngroups.notifier = function(m) {
                            i.render()
                        }
                    }
                    this._initializeColumns()
                }
            }
            this.tableheight = null;
            this._pagescache = new Array();
            this._pageviews = new Array();
            this.visiblerows = new Array();
            this.hittestinfo = new Array();
            if (this._requiresupdate) {
                this._clearcaches();
                if (e == true) {
                    this._initmenu()
                }
            }
            this.virtualsizeinfo = null;
            this.prerenderrequired = true;
            if ((this.groupable && this.groups.length > 0 && this.rowdetails) || (this.rowdetails)) {
                if (this.gridcontent) {
                    this._rowdetailscache = new Array();
                    this._rowdetailselementscache = new Array();
                    this.detailboundrows = new Array();
                    this.details = new Array();
                    b.jqx.utilities.html(this.gridcontent, "");
                    this.gridcontent = null
                }
            }
            if (this.gridcontent) {
                if (this.editable && this._destroyeditors) {
                    this._destroyeditors()
                }
            }
            if (l) {
                if (this.filterrow) {
                    this.filterrow.detach()
                }
                b.jqx.utilities.html(this.content, "");
                this.columnsheader = this.columnsheader || b('<div style="overflow: hidden;"></div>');
                this.columnsheader.remove();
                this.columnsheader.addClass(this.toTP("jqx-widget-header"));
                this.columnsheader.addClass(this.toTP("jqx-grid-header"))
            } else {
                if (this.gridcontent) {
                    b.jqx.utilities.html(this.gridcontent, "")
                }
            }
            if (!this.showheader) {
                this.columnsheader.css("display", "none")
            } else {
                if (this.columnsheader) {
                    this.columnsheader.css("display", "block")
                }
            }
            this.gridcontent = this.gridcontent || b('<div style="width: 100%; overflow: hidden; position: absolute;"></div>');
            this.gridcontent.remove();
            var h = this.columnsheight;
            h = this._preparecolumngroups();
            if (this.showfilterrow && this.filterable) {
                this.columnsheader.height(h + this.filterrowheight);
                if (this.showeverpresentrow && this.everpresentrowposition !== "bottom") {
                    this.columnsheader.height(h + this.filterrowheight + this.everpresentrowheight)
                }
            } else {
                if (this.showeverpresentrow && this.everpresentrowposition !== "bottom") {
                    this.columnsheader.height(h + this.everpresentrowheight)
                } else {
                    this.columnsheader.height(h)
                }
            }
            this.content.append(this.columnsheader);
            this.content.append(this.gridcontent);
            this._arrange();
            if (this._initgroupsheader) {
                this._initgroupsheader()
            }
            this.selectionarea = this.selectionarea || b("<div style='z-index: 99; visibility: hidden; position: absolute;'></div>");
            this.selectionarea.addClass(this.toThemeProperty("jqx-grid-selectionarea"));
            this.selectionarea.addClass(this.toThemeProperty("jqx-fill-state-pressed"));
            this.content.append(this.selectionarea);
            this.tableheight = null;
            this.rendergridcontent(false, l);
            if (this.groups.length > 0 && this.groupable) {
                var d = this.vScrollBar[0].style.visibility;
                this.suspendgroupevents = true;
                if (this.collapseallgroups) {
                    if (!this.groupsexpandedbydefault) {
                        this.collapseallgroups(false);
                        this._updatescrollbarsafterrowsprerender()
                    } else {
                        this.expandallgroups(false)
                    }
                }
                if (this.vScrollBar[0].style.visibility != d) {
                    this._updatecolumnwidths();
                    this._updatecellwidths()
                }
                this.suspendgroupevents = false
            }
            if (this.pageable && this.updatepagerdetails) {
                this.updatepagerdetails();
                if (this.autoheight) {
                    this._updatepageviews()
                }
                if (this.autorowheight) {
                    if (!this.autoheight) {
                        this._updatepageviews()
                    }
                    this._renderrows(this.virtualsizeinfo)
                }
            }
            if (this.showaggregates && this._updateaggregates) {
                this._updateaggregates()
            }
            this._addoverlayelement();
            if (this.scrollmode == "deferred") {
                this._addscrollelement()
            }
            if (this.showfilterrow && this.filterable && this.filterrow && (f == undefined || f == true)) {
                this._updatelistfilters(!l)
            }
            if (this.filterable && this.filtermode === "simple" || this.filtermode === "default" && this.showfilterbar) {
                this._renderfilter()
            }
            if (this.rendered) {
                this.rendered("full")
            }
            this.__isRendered = true
        },
        _addoverlayelement: function() {
            var d = b.jqx.utilities.getBrowser();
            if ((d.browser == "msie" && parseInt(d.version) < 9) || this.isTouchDevice()) {
                if (this._overlayElement) {
                    this._overlayElement.remove()
                }
                this._overlayElement = b("<div class='jqxgrid-overlay' style='visibility: hidden; position: absolute; width: 100%; height: 100%;'></div>");
                this._overlayElement.css("background", "white");
                this._overlayElement.css("z-index", 180);
                this._overlayElement.css("opacity", 0.001);
                if (this.isTouchDevice()) {
                    if (this.vScrollBar.css("visibility") !== "hidden" || this.hScrollBar.css("visibility") !== "hidden") {
                        var e = 0;
                        if (this.selectionmode == "checkbox") {
                            e += 30
                        }
                        if (this.groupable || this.rowdetails) {
                            this._overlayElement.css("left", 30 * (this.groups.length + (this.rowdetails ? 1 : 0)))
                        }
                        var f = this._overlayElement.css("left");
                        this._overlayElement.css("left", f + e)
                    } else {
                        if (this._overlayElement) {
                            this._overlayElement.remove()
                        }
                    }
                } else {
                    this.content.prepend(this._overlayElement)
                }
            }
            this._updateTouchScrolling()
        },
        _addscrollelement: function() {
            if (this._scrollelement) {
                this._scrollelement.remove()
            }
            if (this._scrollelementoverlay) {
                this._scrollelementoverlay.remove()
            }
            this._scrollelementoverlay = b("<div style='visibility: hidden; position: absolute; width: 100%; height: 100%;'></div>");
            this._scrollelementoverlay.css("background", "black");
            this._scrollelementoverlay.css("z-index", 1800);
            this._scrollelementoverlay.css("opacity", 0.1);
            this._scrollelement = b("<span style='visibility: hidden; top: 50%; right: 10px; position: absolute;'></span>");
            this._scrollelement.css("z-index", 1900);
            this._scrollelement.addClass(this.toThemeProperty("jqx-button"));
            this._scrollelement.addClass(this.toThemeProperty("jqx-fill-state-normal"));
            this._scrollelement.addClass(this.toThemeProperty("jqx-rc-all"));
            this._scrollelement.addClass(this.toThemeProperty("jqx-shadow"));
            this.content.prepend(this._scrollelement);
            this.content.prepend(this._scrollelementoverlay)
        },
        _postrender: function(f) {
            if (f == "filter" || f == "sort" || f == "group") {
                if (this.rowdetails && this.detailsVisibility && this.detailsVisibility.length > 0) {
                    this._detailsUpdate = true;
                    for (var e = 0; e < this.details.length; e++) {
                        if (this.details[e]) {
                            this.details[e].rowdetailshidden = true
                        }
                    }
                    if (!this._loading) {
                        for (var e = 0; e < this.detailsVisibility.length; e++) {
                            if (false === this.detailsVisibility[e]) {
                                this.showrowdetails(e)
                            } else {
                                if (true === this.detailsVisibility[e]) {
                                    this.hiderowdetails(e)
                                }
                            }
                        }
                    }
                    this._detailsUpdate = false;
                    this.rendergridcontent(true);
                    this._updatecolumnwidths();
                    this._updatecellwidths();
                    this._renderrows(this.virtualsizeinfo)
                }
            }
            if (this.groupable && this.groups.length > 0) {
                if (f == "filter" || f == "sort") {
                    for (var e = 0; e < this.dataview.loadedgroups.length; e++) {
                        var h = this.dataview.loadedgroups[e];
                        var d = 0;
                        var k;
                        for (var g in this.groupsVisibility) {
                            if (g == h.group && this.groupsVisibility[g]) {
                                k = true;
                                this._setgroupstate(h, true, false);
                                d++
                            }
                        }
                        if (d > 0) {
                            k = false;
                            var j = this.vScrollBar[0].style.visibility;
                            this.rendergridcontent(true, false);
                            if (j != this.vScrollBar[0].style.visibility || this._hiddencolumns) {
                                this._updatecolumnwidths();
                                this._updatecellwidths();
                                this._renderrows(this.virtualsizeinfo)
                            }
                        }
                    }
                } else {
                    if (f == "group") {
                        this.groupsVisibility = new Array()
                    }
                }
            }
        },
        rendergridcontent: function(e, g) {
            if (this.updating()) {
                return false
            }
            if (e == undefined || e == null) {
                e = false
            }
            this._requiresupdate = e;
            var i = this.prerenderrequired;
            if (this.prerenderrequired) {
                this._arrange()
            }
            var h = this.that;
            var g = g;
            if (g == null || g == undefined) {
                g = true
            }
            this.tableheight = null;
            h.virtualsizeinfo = h.virtualsizeinfo || h._calculatevirtualheight();
            if (h.pageable && !h.autoheight) {
                if (h.dataview.totalrows < h.pagesize) {
                    h._requiresupdate = true
                }
            }
            if (g) {
                h._rendercolumnheaders()
            } else {
                if (this._rendersortcolumn) {
                    this._rendersortcolumn()
                }
                if (this._renderfiltercolumn) {
                    this._renderfiltercolumn()
                }
            }
            h._renderrows(h.virtualsizeinfo);
            if (this.gridcontent) {
                if (this.gridcontent[0].scrollTop != 0) {
                    this.gridcontent[0].scrollTop = 0
                }
                if (this.gridcontent[0].scrollLeft != 0) {
                    this.gridcontent[0].scrollLeft = 0
                }
            }
            if (i) {
                var f = this.tableheight;
                this._arrange();
                if (f != this.tableheight && this.autoheight) {
                    h._renderrows(h.virtualsizeinfo)
                }
            }
            if (this.rtl) {
                this._renderhorizontalscroll()
            }
            if (this.autosavestate) {
                if (this.initializedcall != null) {
                    if (this.savestate) {
                        this.savestate()
                    }
                }
            }
            if (this.adaptive && this.element.offsetWidth <= this.adaptivewidth) {
                var d = 0;
                var j = h.element.offsetWidth - 2;
                b.each(this.columns.records, function(k, l) {
                    d += this.width;
                    if (this.columntype === "adaptive") {
                        return true
                    }
                    if (d >= j) {
                        this.adaptivehidden = true
                    }
                });
                this._updatecolumnwidths();
                this._updatecellwidths();
                this._renderrows(this.virtualsizeinfo)
            }
            return true
        },
        _updatecolumnwidths: function() {
            var p = this.host.width();
            var f = p;
            var n = "";
            if (this.columns == undefined || this.columns.records == undefined) {
                return
            }
            var u = this.that;
            var h = this.rowdetails && this.showrowdetailscolumn ? (1 + this.groups.length) * this.groupindentwidth : (this.groups.length) * this.groupindentwidth;
            var m = this.adaptive && this.element.offsetWidth <= this.adaptivewidth;
            var e = 0;
            if (m) {
                var t = 1;
                b.each(this.columns.records, function(q, v) {
                    if (this.adaptivehidden) {
                        t++
                    }
                });
                var l = this.vScrollBar[0].offsetWidth > 0 ? this.vScrollBar[0].offsetWidth + 4 : 0;
                if (this.vScrollBar.css("visibility") == "hidden") {
                    l = 0
                }
                var k = this.columns.records.length - t;
                e = (this.element.offsetWidth - 32 - l) / k
            }
            b.each(this.columns.records, function(v, x) {
                if (!(this.hidden && this.hideable) && !this.adaptivehidden) {
                    if (this.width.toString().indexOf("%") != -1 || this._percentagewidth != undefined) {
                        var x = 0;
                        var y = u.vScrollBar[0].style.visibility == "hidden" ? 0 : u.scrollbarsize + 5;
                        if (u.scrollbarautoshow || u.scrollbarsize == 0) {
                            y = 0
                        }
                        var q = f;
                        x = parseFloat(this.width) * q / 100;
                        y += h;
                        if (this._percentagewidth != undefined) {
                            x = parseFloat(this._percentagewidth) * (q - y) / 100
                        }
                        if (x < this.minwidth && this.minwidth != "auto") {
                            x = this.minwidth
                        }
                        if (x > this.maxwidth && this.maxwidth != "auto") {
                            x = this.maxwidth
                        }
                        p -= x
                    } else {
                        if (this.width != "auto" && !this._width) {
                            p -= this.width
                        } else {
                            n += this.text
                        }
                    }
                }
            });
            var g = this._gettableheight();
            if (!this.autoheight) {
                if (this.virtualsizeinfo && this.virtualsizeinfo.virtualheight > g) {
                    if (this.groupable && this.groups.length > 0) {
                        if (this.dataview && this.dataview.loadedrootgroups && !this.groupsexpandedbydefault) {
                            var s = this.dataview.loadedrootgroups.length * this.rowsheight;
                            if (this.pageable) {
                                for (var d = 0; d < this.dataview.rows.length; d++) {
                                    if (this.dataview.rows[d].group && this.dataview.rows[d].level === 0) {
                                        s += this.rowsheight
                                    }
                                }
                            }
                            if (s > g) {
                                p -= this.scrollbarsize + 5;
                                f -= this.scrollbarsize + 5
                            } else {
                                if (this.vScrollBar.css("visibility") == "visible") {
                                    p -= this.scrollbarsize + 5;
                                    f -= this.scrollbarsize + 5
                                }
                            }
                        } else {
                            p -= this.scrollbarsize + 5;
                            f -= this.scrollbarsize + 5
                        }
                    } else {
                        if (this.vScrollBar.css("visibility") != "hidden" && this.scrollbarsize > 0) {
                            p -= this.scrollbarsize + 5;
                            f -= this.scrollbarsize + 5
                        }
                    }
                }
            }
            var h = this.rowdetails && this.showrowdetailscolumn ? (1 + this.groups.length) * this.groupindentwidth : (this.groups.length) * this.groupindentwidth;
            f -= h;
            if (!this.columnsheader) {
                return
            }
            var j = this.columnsheader.find("#columntable" + this.element.id);
            if (j.length == 0) {
                return
            }
            var i = 0;
            var o = this;
            var r = 0;
            b.each(this.columns.records, function(w, A) {
                var y = b(this.element);
                if (!this.hidden && !this.adaptivehidden && this.element.style.display === "none") {
                    this.element.style.display = "block"
                }
                if (this.adaptivehidden) {
                    this.element.style.display = "none"
                }
                var v = false;
                var z = this.width;
                if (this.width.toString().indexOf("%") != -1 || this._percentagewidth != undefined) {
                    if (this._percentagewidth != undefined) {
                        z = parseFloat(this._percentagewidth) * f / 100
                    } else {
                        z = parseFloat(this.width) * f / 100
                    }
                    v = true
                }
                if (e > 0 && this.columntype !== "adaptive") {
                    y.width(e);
                    this.adaptivewidth = e
                } else {
                    if (this.width != "auto" && !this._width && !v) {
                        if (parseInt(y[0].style.width) != this.width) {
                            y.width(this.width)
                        }
                    } else {
                        if (v) {
                            if (z < this.minwidth && this.minwidth != "auto") {
                                z = this.minwidth;
                                this.width = z
                            }
                            if (z > this.maxwidth && this.maxwidth != "auto") {
                                z = this.maxwidth;
                                this.width = z
                            }
                            if (parseInt(y[0].style.width) != z) {
                                y.width(z);
                                this.width = z
                            }
                        } else {
                            var x = Math.floor(p * (this.text.length / n.length));
                            r += x;
                            if (p - r < 3 && p != r && p - r > 0.01) {
                                if (p - r === 1) {
                                    x++
                                } else {
                                    x += 2
                                }
                            } else {
                                if (w == u.columns.records.length - 1) {
                                    if (r < p) {
                                        x += (p - r)
                                    }
                                }
                            }
                            if (isNaN(x)) {
                                x = this.minwidth
                            }
                            if (isNaN(x)) {
                                x = this.minwidth
                            }
                            if (x == Infinity) {
                                x = 0
                            }
                            if (x < 0) {
                                var q = b("<span>" + o.escape_HTML(this.text) + "</span>");
                                b(document.body).append(q);
                                x = 10 + q.width();
                                q.remove()
                            }
                            if (x < this.minwidth) {
                                x = this.minwidth
                            }
                            if (x > this.maxwidth) {
                                x = this.maxwidth
                            }
                            this._width = "auto";
                            this.width = x;
                            y.width(this.width)
                        }
                    }
                }
                if (parseInt(y[0].style.left) != i) {
                    y.css("left", i)
                }
                if (!(this.hidden && this.hideable) && !this.adaptivehidden) {
                    if (e > 0 && this.columntype !== "adaptive") {
                        i += e
                    } else {
                        i += this.width
                    }
                }
                this._requirewidthupdate = true
            });
            this.columnsheader.width(2 + i);
            j.width(this.columnsheader.width());
            if (i == 0) {
                this.columnsheader[0].style.visibility = "hidden"
            } else {
                this.columnsheader[0].style.visibility = "inherit"
            }
            this._resizecolumngroups();
            if (this.showfilterrow && this.filterrow) {
                this.filterrow.width(this.columnsheader.width());
                this._updatefilterrowui()
            }
            if (this.showeverpresentrow) {
                if (this.everpresentrowposition !== "bottom") {
                    this.addnewrowtop.width(this.columnsheader.width())
                } else {
                    this.addnewrowbottom.width(this.columnsheader.width())
                }
                this._updateaddnewrowui()
            }
            if (this.autowidth) {
                this._arrange()
            }
        },
        _rendercolumnheaders: function() {
            var x = this.that;
            if (!this.prerenderrequired) {
                if (this._rendersortcolumn) {
                    this._rendersortcolumn()
                }
                if (this._renderfiltercolumn) {
                    this._renderfiltercolumn()
                }
                if (this.showfilterrow && this.filterrow) {
                    this.filterrow.width(this.columnsheader.width());
                    this._updatefilterrowui()
                }
                if (this.showeverpresentrow) {
                    if (this.everpresentrowposition !== "bottom") {
                        this.addnewrowtop.width(this.columnsheader.width())
                    } else {
                        this.addnewrowbottom.width(this.columnsheader.width())
                    }
                    this._updateaddnewrowui()
                }
                return
            }
            this._columnsbydatafield = new Array();
            this.columnsheader.find("#columntable" + this.element.id).remove();
            var o = b('<div id="columntable' + this.element.id + '" style="height: 100%; position: relative;"></div>');
            o[0].cells = new Array();
            var B = 0;
            var h = 0;
            var u = "";
            var G = this.host.width();
            var s = G;
            var g = new Array();
            var A = new Array();
            var t = this.rowdetails && this.showrowdetailscolumn ? (1 + this.groups.length) * this.groupindentwidth : (this.groups.length) * this.groupindentwidth;
            b.each(this.columns.records, function(j, k) {
                if (!(this.hidden && this.hideable) && !this.adaptivehidden) {
                    if (this.width != "auto" && !this._width) {
                        if (this.width < this.minwidth && this.minwidth != "auto") {
                            G -= this.minwidth
                        } else {
                            if (this.width > this.maxwidth && this.maxwidth != "auto") {
                                G -= this.maxwidth
                            } else {
                                if (this.width.toString().indexOf("%") != -1) {
                                    var k = 0;
                                    var p = x.vScrollBar[0].style.visibility == "hidden" ? 0 : x.scrollbarsize + 5;
                                    p += t;
                                    k = parseFloat(this.width) * (s - p) / 100;
                                    if (k < this.minwidth && this.minwidth != "auto") {
                                        k = this.minwidth
                                    }
                                    if (k > this.maxwidth && this.maxwidth != "auto") {
                                        k = this.maxwidth
                                    }
                                    G -= k
                                } else {
                                    if (typeof this.width == "string") {
                                        this.width = parseInt(this.width)
                                    }
                                    G -= this.width
                                }
                            }
                        }
                    } else {
                        u += this.text
                    }
                }
                if (this.pinned || this.grouped || this.checkboxcolumn) {
                    if (x._haspinned) {
                        this.pinned = true
                    }
                    g[g.length] = this
                } else {
                    A[A.length] = this
                }
            });
            if (!this.rtl) {
                for (var D = 0; D < g.length; D++) {
                    this.columns.replace(D, g[D])
                }
                for (var C = 0; C < A.length; C++) {
                    this.columns.replace(g.length + C, A[C])
                }
            } else {
                var y = 0;
                g.reverse();
                for (var D = this.columns.records.length - 1; D >= this.columns.records.length - g.length; D--) {
                    this.columns.replace(D, g[y++])
                }
                for (var C = 0; C < A.length; C++) {
                    this.columns.replace(C, A[C])
                }
            }
            var n = this.headerZIndex;
            var r = x.groupable ? x.groups.length : 0;
            if (this.rowdetails && this.showrowdetailscolumn) {
                r++
            }
            var l = x.columnsheader.height();
            if (this.showfilterrow) {
                if (!this.columngroups) {
                    l = this.columnsheight
                } else {
                    l -= this.filterrowheight
                }
            }
            if (this.showeverpresentrow && this.everpresentrowposition !== "bottom") {
                if (!this.columngroups) {
                    l = this.columnsheight
                } else {
                    l -= this.everpresentrowheight
                }
            }
            var v = this._gettableheight();
            if (this.virtualsizeinfo && this.virtualsizeinfo.virtualheight > v && !this.scrollbarautoshow) {
                if (this.groupable && this.groups.length > 0) {
                    if (this.dataview && this.dataview.loadedrootgroups && !this.groupsexpandedbydefault) {
                        var E = 0;
                        if (!this.pageable) {
                            var E = this.dataview.loadedrootgroups.length * this.rowsheight
                        } else {
                            if (this.pageable) {
                                for (var w = 0; w < this.dataview.rows.length; w++) {
                                    if (this.dataview.rows[w].group && this.dataview.rows[w].level === 0) {
                                        E += this.rowsheight
                                    }
                                }
                            }
                        }
                        if (E > v) {
                            G -= this.scrollbarsize + 5;
                            s -= this.scrollbarsize + 5
                        }
                    } else {
                        G -= this.scrollbarsize + 5;
                        s -= this.scrollbarsize + 5
                    }
                } else {
                    if (!this.autoheight && this.scrollbarsize > 0) {
                        G -= this.scrollbarsize + 5;
                        s -= this.scrollbarsize + 5
                    }
                }
            }
            s -= t;
            var d = function(j, k) {
                var i = x.columngroupslevel * x.columnsheight;
                i = i - (k.level * x.columnsheight);
                return i
            };
            var f = document.createDocumentFragment();
            var z = 0;
            b.each(this.columns.records, function(X, V) {
                this.height = x.columnsheight;
                if (x.columngroups) {
                    if (x.columngroups.length) {
                        this.height = d(this.datafield, this);
                        l = this.height
                    }
                }
                var ab = x.toTP("jqx-grid-column-header") + " " + x.toTP("jqx-widget-header");
                if (x.rtl) {
                    ab += " " + x.toTP("jqx-grid-column-header-rtl")
                }
                var Z = !x.rtl ? 150 + n - 1 : 150 + n + 1;
                var T = !x.rtl ? n-- : n++;
                var H = b('<div role="columnheader" style="z-index: ' + T + ';position: absolute; height: 100%;" class="' + ab + '"><div style="height: 100%; width: 100%;"></div></div>');
                if (x.columngroups) {
                    H[0].style.height = l + "px";
                    H[0].style.bottom = "0px";
                    if (this.pinned) {
                        H[0].style.zIndex = Z
                    }
                }
                this.uielement = H;
                if (this.classname != "" && this.classname) {
                    H.addClass(this.classname)
                }
                var P = this.width;
                var Q = false;
                if (this.width === null) {
                    this.width = "auto"
                }
                if (this.width.toString().indexOf("%") != -1 || this._percentagewidth != undefined) {
                    if (this._percentagewidth != undefined) {
                        P = parseFloat(this._percentagewidth) * s / 100
                    } else {
                        P = parseFloat(this.width) * s / 100
                    }
                    Q = true
                }
                if (this.width != "auto" && !this._width && !Q) {
                    if (P < this.minwidth && this.minwidth != "auto") {
                        P = this.minwidth;
                        this.width = P
                    }
                    if (P > this.maxwidth && this.maxwidth != "auto") {
                        P = this.maxwidth;
                        this.width = P
                    }
                    H[0].style.width = parseInt(P) + "px"
                } else {
                    if (Q) {
                        if (P < this.minwidth && this.minwidth != "auto") {
                            P = this.minwidth
                        }
                        if (P > this.maxwidth && this.maxwidth != "auto") {
                            P = this.maxwidth
                        }
                        if (this._percentagewidth == undefined || this.width.toString().indexOf("%") != -1) {
                            this._percentagewidth = this.width
                        }
                        H.width(P);
                        this.width = P
                    } else {
                        if (!this.hidden && !this.adaptivehidden) {
                            var U = Math.floor(G * (this.text.length / u.length));
                            z += U;
                            if (G - z < 3 && G != z && G - z > 0.01) {
                                if (G - z === 1) {
                                    U++
                                } else {
                                    U += 2
                                }
                            } else {
                                if (X == x.columns.records.length - 1) {
                                    if (z < G) {
                                        U += (G - z)
                                    }
                                }
                            }
                            if (isNaN(U)) {
                                U = this.minwidth
                            }
                            if (U < 0) {
                                var S = b("<span>" + this.text + "</span>");
                                b(document.body).append(S);
                                U = 10 + S.width();
                                S.remove()
                            }
                            if (U < this.minwidth) {
                                U = this.minwidth
                            }
                            if (U > this.maxwidth) {
                                U = this.maxwidth
                            }
                            this._width = "auto";
                            this.width = U;
                            P = this.width;
                            H.width(this.width)
                        }
                    }
                }
                if ((this.hidden && this.hideable) || this.adaptivehidden) {
                    H.css("display", "none")
                }
                var p = b(H.children()[0]);
                var Y = x.rtl ? x.toTP("jqx-grid-column-menubutton") + " " + x.toTP("jqx-grid-column-menubutton-rtl") : x.toTP("jqx-grid-column-menubutton");
                Y += " " + x.toTP("jqx-icon-arrow-down");
                var K = b('<div style="height: ' + l + 'px; display: none; left: 100%; top: 0%; position: absolute;"><div class="' + Y + '" style="width: 100%; height:100%;"></div></div>');
                if (!x.enableanimations) {
                    K.css("margin-left", -16)
                }
                if (x.rtl) {
                    K.css("left", "0px")
                }
                this.columnsmenu = K[0];
                o[0].cells[X] = H[0];
                K[0].style.width = parseInt(x.columnsmenuwidth) + "px";
                var J = x.columnsmenu;
                var q = false;
                var W = false;
                var R = (x.groupable && r > 0 && B < r) || (x.rowdetails && B < r);
                if (x.rtl) {
                    R = (x.groupable && r > 0 && B < r) || (x.rowdetails && B < r);
                    R &= X > x.columns.records.length - 1 - r
                }
                if (R) {
                    B++;
                    J &= false;
                    this.sortable = false;
                    this.editable = false;
                    W = true
                } else {
                    var M = this.renderer != null ? this.renderer(this.text, this.align, l) : x._rendercolumnheader(this.text, this.align, l, x);
                    if (M == null) {
                        M = x._rendercolumnheader(this.text, this.align, l, x)
                    }
                    if (this.renderer != null) {
                        M = b(M)
                    }
                    J &= true;
                    q = true
                }
                if (x.WinJS) {
                    MSApp.execUnsafeLocalFunction(function() {
                        p.append(b(M))
                    })
                } else {
                    if (this.renderer) {
                        p.append(b(M))
                    } else {
                        if (M) {
                            p[0].innerHTML = M
                        }
                    }
                }
                if (M != null) {
                    var O = b('<div class="iconscontainer" style="height: ' + l + 'px; margin-left: -32px; display: block; position: absolute; left: 100%; top: 0%; width: 32px;"><div class="filtericon ' + x.toTP("jqx-widget-header") + '" style="height: ' + l + 'px; float: right; display: none; width: 16px;"><div class="' + x.toTP("jqx-grid-column-filterbutton") + '" style="width: 100%; height:100%;"></div></div><div class="sortasc ' + x.toTP("jqx-widget-header") + '" style="height: ' + l + 'px; float: right; display: none; width: 16px;"><div class="' + x.toTP("jqx-grid-column-sortascbutton") + " " + x.toTP("jqx-icon-arrow-up") + '" style="width: 100%; height:100%;"></div></div><div class="sortdesc ' + x.toTP("jqx-widget-header") + '" style="height: ' + l + 'px; float: right; display: none; width: 16px;"><div class="' + x.toTP("jqx-grid-column-sortdescbutton") + " " + x.toTP("jqx-icon-arrow-down") + '" style="width: 100%; height:100%;"></div></div><div class="sorticon ' + x.toTP("jqx-widget-header") + '" style="height: ' + l + 'px; float: right; visibility: hidden; width: 16px;"><div class="' + x.toTP("jqx-grid-column-sorticon") + " " + x.toTP("jqx-icon-arrow-down") + '" style="width: 100%; height:100%;"></div></div></div>');
                    K.addClass(x.toTP("jqx-widget-header"));
                    p.append(O);
                    var ad = O.children();
                    this.sorticon = ad[3];
                    this.sortasc = ad[1];
                    this.sortdesc = ad[2];
                    this.filtericon = ad[0];
                    this.iconscontainer = O;
                    if (x.rtl) {
                        O.css("margin-left", "0px");
                        O.css("left", "0px");
                        b(this.sorticon).css("float", "left");
                        b(this.sortasc).css("float", "left");
                        b(this.filtericon).css("float", "left");
                        b(this.sortdesc).css("float", "left")
                    }
                    if (!x.autoshowfiltericon && this.filterable) {
                        b(this.filtericon).css("display", "block")
                    }
                }
                this.element = H[0];
                if (J) {
                    x._handlecolumnsmenu(x, p, H, K, this);
                    if (!this.menu) {
                        K.hide()
                    }
                }
                f.appendChild(H[0]);
                if (x.groupable && q) {
                    H[0].id = x.dataview.generatekey();
                    if (x._handlecolumnstogroupsdragdrop) {
                        x._handlecolumnstogroupsdragdrop(this, H)
                    } else {
                        throw new Error("jqxGrid: Missing reference to jqxgrid.grouping.js.")
                    }
                }
                if (x.columnsreorder && this.draggable && x._handlecolumnsdragreorder) {
                    x._handlecolumnsdragreorder(this, H)
                }
                var aa = this;
                aa._applyStyle();
                x.addHandler(H, "mouseenter", function(i) {
                    aa.hovered = true;
                    aa._applyStyle()
                });
                x.addHandler(H, "mouseleave", function(i) {
                    aa.hovered = false;
                    aa._applyStyle()
                });
                var ac = function(aj, ae, ak) {
                    if (aj.selectable) {
                        var am = x.getrows();
                        if (aj.selected === undefined) {
                            aj.selected = false
                        }
                        if (!ae.shiftKey || x._clickedcolumn === undefined) {
                            x._clickedcolumn = aj
                        }
                        if (ae.shiftKey && x._clickedcolumn && ak === undefined) {
                            var al = x.columns.records.indexOf(x._clickedcolumn);
                            var ai = x.columns.records.indexOf(aj);
                            var af = Math.min(al, ai);
                            var ag = Math.max(al, ai);
                            x.clearselection();
                            for (var ah = af; ah <= ag; ah++) {
                                ac(x.columns.records[ah], ae, true)
                            }
                            x._renderrows(this.virtualsizeinfo);
                            return
                        }
                        if (ak) {
                            aj.selected = true
                        } else {
                            if (!ae.ctrlKey) {
                                x.clearselection()
                            }
                            aj.selected = !aj.selected
                        }
                        for (var ah = 0; ah < am.length; ah++) {
                            x._applycellselection(am[ah].boundindex, aj.displayfield, aj.selected, false, false)
                        }
                        if (aj.selected) {
                            aj.element.setAttribute("selected", "")
                        } else {
                            aj.element.removeAttribute("selected")
                        }
                        aj._applyStyle();
                        if (ak === undefined) {
                            x.virtualsizeinfo = x._calculatevirtualheight();
                            x._renderrows(x.virtualsizeinfo)
                        }
                    }
                };
                x.addHandler(H, "click", function(i) {
                    if (aa.checkboxcolumn) {
                        return true
                    }
                    if (x.sorttogglestates > 0 && x._togglesort) {
                        if (!x._loading) {
                            if (x.suspendClick) {
                                return true
                            }
                            x._togglesort(aa)
                        }
                    }
                    ac(aa, i);
                    i.preventDefault();
                    x._raiseEvent(7, {
                        column: aa.getcolumnproperties(),
                        datafield: aa.datafield,
                        originalEvent: i
                    })
                });
                aa.toggleSelection = ac;
                if (aa.resizable && x.columnsresize && !W) {
                    var I = false;
                    var j = "mousemove";
                    if (x.isTouchDevice() && x.touchmode !== true) {
                        I = true;
                        j = b.jqx.mobile.getTouchEventName("touchstart")
                    }
                    x.addHandler(H, j, function(ae) {
                        var i = parseInt(ae.pageX);
                        var ag = 5;
                        var aj = parseInt(H.coord().left);
                        if (x.hasTransform) {
                            aj = b.jqx.utilities.getOffset(H).left
                        }
                        if (x.resizing) {
                            return true
                        }
                        if (x._handlecolumnsresize) {
                            if (I) {
                                var af = x.getTouches(ae);
                                var ai = af[0];
                                i = ai.pageX;
                                ag = 40;
                                if (i >= aj + aa.width - ag) {
                                    x.resizablecolumn = {
                                        columnelement: H,
                                        column: aa
                                    };
                                    H.css("cursor", "col-resize")
                                } else {
                                    H.css("cursor", "");
                                    x.resizablecolumn = null
                                }
                                return true
                            }
                            var ah = aa.width;
                            if (x.rtl) {
                                ah = 0
                            }
                            if (i >= aj + ah - ag) {
                                if (i <= aj + ah + ag) {
                                    x.resizablecolumn = {
                                        columnelement: H,
                                        column: aa
                                    };
                                    H.css("cursor", "col-resize");
                                    return false
                                } else {
                                    H.css("cursor", "");
                                    x.resizablecolumn = null
                                }
                            } else {
                                H.css("cursor", "");
                                if (i < aj + ah - ag) {
                                    if (!aa._animating && !aa._menuvisible) {
                                        H.mouseenter()
                                    }
                                }
                                x.resizablecolumn = null
                            }
                        }
                    })
                }
                H.css("left", h);
                if (!(this.hidden && this.hideable) && !this.adaptivehidden) {
                    h += P
                }
                if (aa.rendered) {
                    var N = aa.rendered(b(p[0].firstChild), aa.align, l);
                    if (N && O != null) {
                        O.hide()
                    }
                }
                if (aa.checkboxcolumn) {
                    if (O) {
                        O.hide()
                    }
                    if (!x.host.jqxCheckBox) {
                        throw new Error("jqxGrid: Missing reference to jqxcheckbox.js")
                    }
                    p.html('<div style="cursor: pointer; margin-left: 3px; top: 50%; margin-top: -9px; position: relative;"></div>');
                    var k = p.find("div:first");
                    k.jqxCheckBox({
                        _canFocus: false,
                        disabled: x.disabled,
                        disabledContainer: true,
                        theme: x.theme,
                        enableContainerClick: false,
                        animationShowDelay: 0,
                        animationHideDelay: 0
                    });
                    k.addClass(x.toThemeProperty("jqx-checkbox"));
                    aa.checkboxelement = k;
                    var L = k.data().jqxCheckBox.instance;
                    x._checkboxcolumn = aa;
                    L.updated = function(ae, i, af) {
                        x._checkboxcolumnupdating = true;
                        if (x.disabled) {
                            k.jqxCheckBox({
                                disabled: x.disabled
                            });
                            i = af
                        }
                        if (i) {
                            x.selectallrows()
                        } else {
                            x.unselectallrows()
                        }
                        x._checkboxcolumnupdating = false
                    }
                }
            });
            if (h > 0) {
                this.columnsheader.width(2 + h)
            } else {
                this.columnsheader.width(h)
            }
            o[0].appendChild(f);
            this.columnsrow = o;
            x.columnsheader.append(o);
            if (this.showfilterrow && this._updatefilterrow) {
                if (!this.columngroups) {
                    o.height(this.columnsheight)
                } else {
                    o.height(this.columngroupslevel * this.columnsheight)
                }
                if (!this.filterrow) {
                    var F = b("<div style='position: relative !important; '></div>");
                    F[0].id = "filterrow." + this.element.id;
                    F.height(this.filterrowheight);
                    this.filterrow = F
                }
                this.filterrow.width(2 + h);
                this.columnsheader.append(this.filterrow);
                this._updatefilterrow()
            }
            if (this.showeverpresentrow && this.everpresentrowposition !== "bottom") {
                if (!this.columngroups) {
                    o.height(this.columnsheight)
                } else {
                    o.height(this.columngroupslevel * this.columnsheight)
                }
                if (!this.addnewrowtop) {
                    var m = b("<div style='position: relative !important; z-index:" + this.headerZIndex + ";'></div>");
                    m[0].id = "addnewrowtop." + this.element.id;
                    m.height(this.everpresentrowheight);
                    this.addnewrowtop = m
                }
                this.addnewrowtop.width(2 + h);
                if (this.everpresentrowposition == "topAboveFilterRow") {
                    if (this.filterrow) {
                        this.addnewrowtop.insertBefore(this.filterrow)
                    } else {
                        this.columnsheader.append(this.addnewrowtop)
                    }
                } else {
                    this.columnsheader.append(this.addnewrowtop)
                }
                this._updateaddnewrow()
            } else {
                if (this.showeverpresentrow && this.everpresentrowposition === "bottom") {
                    if (!this.addnewrowbottom) {
                        var e = b("<div style='position: relative !important; z-index:" + this.headerZIndex + ";'></div>");
                        e[0].id = "addnewrowbottom." + this.element.id;
                        e.height(this.everpresentrowheight);
                        this.addnewrowbottom = e
                    }
                    this.addnewrowbottom.width(2 + h);
                    this.addnewrow.append(this.addnewrowbottom);
                    this._updateaddnewrow()
                }
            }
            if (h == 0) {
                o[0].style.visibility = "hidden"
            } else {
                o[0].style.visibility = "inherit"
            }
            o.width(h);
            if (this._handlecolumnsdragdrop) {
                this._handlecolumnsdragdrop()
            }
            if (this._handlecolumnsreorder) {
                this._handlecolumnsreorder()
            }
            if (this._rendersortcolumn) {
                this._rendersortcolumn()
            }
            if (this._renderfiltercolumn) {
                this._renderfiltercolumn()
            }
            if (this._handlecolumnsresize) {
                this._handlecolumnsresize()
            }
            if (this.columngroups) {
                this._rendercolumngroups()
            }
            if (this._updatecheckboxselection) {
                this._updatecheckboxselection()
            }
        },
        _rendercolumngroups: function() {
            if (!this.columngroups) {
                return
            }
            var p = 0;
            for (var m = 0; m < this.columns.records.length; m++) {
                if (this.columns.records[m].pinned) {
                    p++
                }
            }
            var u = this.headerZIndex - p + this.columns.records.length;
            var v = this.that;
            var h = v.toTP("jqx-grid-column-header") + " " + v.toTP("jqx-grid-columngroup-header") + " " + v.toTP("jqx-widget-header");
            if (v.rtl) {
                h += " " + v.toTP("jqx-grid-columngroup-header-rtl")
            }
            var f = this.columnsheader.find("#columntable" + this.element.id);
            f.find("jqx-grid-columngroup-header").remove();
            for (var k = 0; k < this.columngroupslevel - 1; k++) {
                for (var m = 0; m < this.columngroups.length; m++) {
                    var r = this.columngroups[m];
                    var d = r.level;
                    if (d !== k) {
                        continue
                    }
                    var q = d * this.columnsheight;
                    var e = 99999;
                    if (r.groups) {
                        var t = function(y) {
                            var x = 0;
                            for (var w = 0; w < y.groups.length; w++) {
                                var i = y.groups[w];
                                if (!i.groups) {
                                    if (!i.hidden) {
                                        x += i.width;
                                        e = Math.min(parseFloat(i.element.style.left), e)
                                    }
                                } else {
                                    x += t(i)
                                }
                            }
                            return x
                        };
                        r.width = t(r);
                        r.left = e;
                        var s = this.columnsheight;
                        var n = u--;
                        var g = b('<div role="columnheader" style="z-index: ' + n + ';position: absolute;" class="' + h + '"></div>');
                        var l = b(this._rendercolumnheader(r.text, r.align, this.columnsheight, this));
                        if (r.renderer) {
                            var l = b("<div style='height: 100%; width: 100%;'></div>");
                            var o = r.renderer(r.text, r.align, s);
                            l.html(o)
                        }
                        g.append(l);
                        g[0].style.left = e + "px";
                        if (e === 0) {
                            g[0].style.borderLeftColor = "transparent"
                        }
                        if (!this.showcolumnheaderlines) {
                            g[0].style.borderRightColor = "transparent";
                            g[0].style.borderBottomColor = "transparent";
                            g[0].style.boxShadow = "none"
                        }
                        g[0].style.top = q + "px";
                        g[0].style.height = s + "px";
                        g[0].style.width = -1 + r.width + "px";
                        f.append(g);
                        r.element = g;
                        if (r.rendered) {
                            r.rendered(l, r.align, s)
                        }
                    }
                }
            }
        },
        _resizecolumngroups: function() {
            if (!this.columngroups) {
                return
            }
            for (var e = 0; e < this.columngroups.length; e++) {
                var k = this.columngroups[e];
                var l = k.level;
                var j = l * this.columnsheight;
                var h = 99999;
                if (k.groups) {
                    var g = function(o) {
                        var n = 0;
                        for (var m = 0; m < o.groups.length; m++) {
                            var i = o.groups[m];
                            if (!i.groups) {
                                if (!i.hidden) {
                                    n += i.width;
                                    h = Math.min(parseFloat(i.element.style.left), h)
                                }
                            } else {
                                n += g(i)
                            }
                        }
                        return n
                    };
                    k.width = g(k);
                    k.left = h;
                    var d = this.columnsheight;
                    var f = k.element;
                    f[0].style.left = h + "px";
                    f[0].style.top = j + "px";
                    f[0].style.height = d + "px";
                    f[0].style.width = -1 + k.width + "px"
                }
            }
        },
        _handlecolumnsmenu: function(p, g, h, k, m) {
            p.dragmousedown = null;
            k[0].id = p.dataview.generatekey();
            g.append(k);
            h[0].columnsmenu = k[0];
            m.element = h[0];
            var l = this.columnsmenuwidth + 1;
            var o = function() {
                if (!m.menu) {
                    return false
                }
                if (!p.resizing) {
                    if (m._menuvisible && p._hasOpenedMenu) {
                        return false
                    }
                    m._animating = true;
                    if (p.menuitemsarray && p.menuitemsarray.length > 0) {
                        if (!p.enableanimations) {
                            k.css("display", "block");
                            var q = !p.rtl ? -48 : 16;
                            m.iconscontainer.css("margin-left", q + "px");
                            m._animating = false;
                            m._menuvisible = true
                        } else {
                            k.css("display", "block");
                            k.stop();
                            m.iconscontainer.stop();
                            if (!p.rtl) {
                                k.css("margin-left", "0px");
                                k.animate({
                                    "margin-left": -l
                                }, "fast", function() {
                                    k.css("display", "block");
                                    m._animating = false;
                                    m._menuvisible = true
                                })
                            } else {
                                k.css("margin-left", -l);
                                k.animate({
                                    "margin-left": "0px"
                                }, "fast", function() {
                                    k.css("display", "block");
                                    m._animating = false;
                                    m._menuvisible = true
                                })
                            }
                            var q = !p.rtl ? -(32 + l) : l;
                            m.iconscontainer.animate({
                                "margin-left": q
                            }, "fast")
                        }
                    }
                }
            };
            var f = "mouseenter";
            if (p.isTouchDevice()) {
                f = "touchstart"
            }
            p.addHandler(h, f, function(r) {
                var q = parseInt(r.pageX);
                var t = p.columnsresize && m.resizable ? 3 : 0;
                var v = parseInt(h.coord().left);
                if (p.hasTransform) {
                    v = b.jqx.utilities.getOffset(h).left
                }
                var u = m.width;
                if (p.rtl) {
                    u = 0
                }
                if (t != 0) {
                    if (q >= v + u - t) {
                        if (q <= v + u + t) {
                            return false
                        }
                    }
                }
                var s = p.vScrollInstance.isScrolling();
                if (m.menu && p.autoshowcolumnsmenubutton && !s && !p.disabled) {
                    o()
                }
            });
            if (!p.autoshowcolumnsmenubutton) {
                k.css("display", "block");
                var e = !p.rtl ? -48 : 16;
                m.iconscontainer.css("margin-left", e + "px");
                if (!p.rtl) {
                    k.css({
                        "margin-left": -l
                    })
                } else {
                    k.css({
                        "margin-left": "0px"
                    })
                }
            }
            p.addHandler(h, "mouseleave", function(q) {
                if (p.menuitemsarray && p.menuitemsarray.length > 0 && m.menu) {
                    var s = b.data(document.body, "contextmenu" + p.element.id);
                    if (s != undefined && k[0].id == s.columnsmenu.id) {
                        return
                    }
                    if (p.autoshowcolumnsmenubutton) {
                        if (!p.enableanimations) {
                            k.css("display", "none");
                            var r = !p.rtl ? -32 : 0;
                            m.iconscontainer.css("margin-left", r + "px");
                            m._menuvisible = false
                        } else {
                            if (!p.rtl) {
                                k.css("margin-left", -l)
                            } else {
                                k.css("margin-left", "0px")
                            }
                            k.stop();
                            m.iconscontainer.stop();
                            if (!p.rtl) {
                                k.animate({
                                    "margin-left": 0
                                }, "fast", function() {
                                    k.css("display", "none");
                                    m._menuvisible = false
                                })
                            } else {
                                k.animate({
                                    "margin-left": -l
                                }, "fast", function() {
                                    k.css("display", "none");
                                    m._menuvisible = false
                                })
                            }
                            var r = !p.rtl ? -32 : 0;
                            m.iconscontainer.animate({
                                "margin-left": r
                            }, "fast")
                        }
                    }
                }
            });
            var j = true;
            var d = "";
            var i = b(m.filtericon);
            p.addHandler(k, "mousedown", function(q) {
                if (!p.gridmenu) {
                    p._initmenu()
                }
                j = !b.data(p.gridmenu[0], "contextMenuOpened" + p.gridmenu[0].id);
                d = b.data(document.body, "contextmenu" + p.element.id);
                if (d != null) {
                    d = d.column.datafield
                }
            });
            p.addHandler(i, "mousedown", function(q) {
                if (!p.gridmenu) {
                    p._initmenu()
                }
                j = !b.data(p.gridmenu[0], "contextMenuOpened" + p.gridmenu[0].id);
                d = b.data(document.body, "contextmenu" + p.element.id);
                if (d != null) {
                    d = d.column.datafield
                }
            });
            var n = function() {
                if (!m.menu) {
                    return false
                }
                if (!p.gridmenu) {
                    p._initmenu()
                }
                if (p.disabled) {
                    return false
                }
                for (var I = 0; I < p.columns.records.length; I++) {
                    if (p.columns.records[I].datafield != m.datafield) {
                        p.columns.records[I]._menuvisible = false
                    }
                }
                var w = k.coord(true);
                var C = k.height();
                if (!j) {
                    j = true;
                    if (d == m.datafield) {
                        p._closemenu();
                        return false
                    }
                }
                var r = p.host.coord(true);
                if (p.hasTransform) {
                    r = b.jqx.utilities.getOffset(p.host);
                    w = b.jqx.utilities.getOffset(k)
                }
                if (r.left + p.host.width() > parseInt(w.left) + p.gridmenu.width()) {
                    p.gridmenu.jqxMenu("open", w.left, w.top + C)
                } else {
                    p.gridmenu.jqxMenu("open", k.width() + w.left - p.gridmenu.width(), w.top + C)
                }
                if (p.gridmenu.width() < 100) {
                    p._arrangemenu()
                }
                if (p.adaptive && p.element.offsetWidth < p.adaptivewidth) {
                    p.gridmenu.jqxMenu("close");
                    p.gridmenu.jqxMenu("open", r.left, w.top + C);
                    var E = 0;
                    for (var I = 0; I < p.columns.records.length; I++) {
                        var v = p.columns.records[I];
                        if (v.hidden || v.adaptivehidden || v.columntype === "adaptive") {
                            continue
                        }
                        E += v.adaptivewidth
                    }
                    p.gridmenu.width(E);
                    p.gridmenu.height(p.content.height())
                }
                if (!p.filterable || (p.filterable && p.showfilterrow)) {
                    setTimeout(function() {
                        p.gridmenu.focus();
                        var J = p.gridmenu.find(".jqx-item");
                        for (var K = 0; K < J.length; K++) {
                            if (J[K].active) {
                                J[K].active = false
                            }
                        }
                        var L = J[0];
                        if (J[0].className.indexOf("disabled") >= 0) {
                            L = J[1]
                        }
                        b(J).removeClass("jqx-fill-state-focus");
                        b(L).addClass("jqx-fill-state-focus");
                        L.active = true
                    }, 225)
                }
                p._hasOpenedMenu = true;
                var z = p._getmenuitembyindex(0);
                var x = p._getmenuitembyindex(1);
                var q = p._getmenuitembyindex(2);
                var y = p._getmenuitembyindex(3);
                var t = p._getmenuitembyindex(4);
                var H = p._getmenuitembyindex(5);
                if (z != null && x != null && q != null) {
                    var u = m.sortable && p.sortable;
                    p.gridmenu.jqxMenu("disable", z.id, !u);
                    p.gridmenu.jqxMenu("disable", x.id, !u);
                    p.gridmenu.jqxMenu("disable", q.id, !u);
                    if (m.displayfield != undefined) {
                        var G = p.getsortinformation();
                        var B = (G && G.sortcolumns && G.sortcolumns.find(function(J) {
                            return J.dataField === m.displayfield
                        }));
                        if (p.sortcolumn == m.displayfield || B) {
                            var G = p.getsortinformation();
                            if (u) {
                                if (G.sortdirection.ascending) {
                                    p.gridmenu.jqxMenu("disable", z.id, true)
                                } else {
                                    p.gridmenu.jqxMenu("disable", x.id, true)
                                }
                            }
                        } else {
                            p.gridmenu.jqxMenu("disable", q.id, true)
                        }
                    }
                }
                if (y != null && t != null) {
                    if (!p.groupable || !m.groupable) {
                        p.gridmenu.jqxMenu("disable", t.id, true);
                        p.gridmenu.jqxMenu("disable", y.id, true)
                    } else {
                        if (p.groups && p.groups.indexOf(m.datafield) != -1) {
                            p.gridmenu.jqxMenu("disable", y.id, true);
                            p.gridmenu.jqxMenu("disable", t.id, false)
                        } else {
                            p.gridmenu.jqxMenu("disable", y.id, false);
                            p.gridmenu.jqxMenu("disable", t.id, true)
                        }
                    }
                }
                if (H != null) {
                    p.menuOwner = m;
                    p._updatefilterpanel(p, H, m);
                    var s = 0;
                    if (p.sortable && p._togglesort && p.showsortmenuitems) {
                        s += 3
                    }
                    if (p.groupable && p.addgroup && p.showgroupmenuitems) {
                        s += 2
                    }
                    var D = s * 36 + 6;
                    var F = p._measureMenuElement();
                    var D = s * F + 20;
                    if (b.jqx.browser.msie && b.jqx.browser.version < 8) {
                        D += 20;
                        b(H).height(220)
                    }
                    if (p.isTouchDevice()) {
                        D += 10
                    }
                    if (p.filterable && p.showfiltermenuitems) {
                        if (!m.filterable) {
                            p.gridmenu.height(D);
                            b(H).css("display", "none")
                        } else {
                            p.gridmenu.height(D + 230);
                            b(H).css("display", "block")
                        }
                    }
                }
                if (p.columnmenuopening) {
                    var A = p.columnmenuopening(p.gridmenu, m.displayfield, p.gridmenu.height());
                    if (false === A) {
                        setTimeout(function() {
                            p._closemenu()
                        })
                    }
                }
                b.data(document.body, "contextmenu" + p.element.id, {
                    column: m,
                    columnsmenu: k[0]
                })
            };
            p.addHandler(i, "click", function(q) {
                if (!m.menu) {
                    return false
                }
                if (!p.showfilterrow) {
                    if (k[0].style.display != "block") {
                        h.trigger("mouseenter")
                    }
                    setTimeout(function() {
                        if (k[0].style.display != "block") {
                            h.trigger("mouseenter")
                        }
                        n()
                    }, 200)
                }
                return false
            });
            p.addHandler(k, "click", function(q) {
                if (!m.menu) {
                    return false
                }
                n();
                return false
            });
            if (p.isTouchDevice()) {
                p.addHandler(k, b.jqx.mobile.getTouchEventName("touchstart"), function(q) {
                    if (!m.menu) {
                        return false
                    }
                    if (!p._hasOpenedMenu) {
                        n()
                    } else {
                        p._closemenu()
                    }
                    return false
                })
            }
        },
        _removecolumnhandlers: function(h) {
            var e = this.that;
            var f = b(h.element);
            if (f.length > 0) {
                e.removeHandler(f, "mouseenter");
                e.removeHandler(f, "mouseleave");
                var g = b(h.filtericon);
                e.removeHandler(g, "mousedown");
                e.removeHandler(g, "click");
                e.removeHandler(f, "click");
                e.removeHandler(f, "mousemove");
                if (e.columnsreorder) {
                    e.removeHandler(f, "mousedown.drag");
                    e.removeHandler(f, "mousemove.drag")
                }
                e.removeHandler(f, "dragstart");
                if (f[0].columnsmenu) {
                    var d = b(f[0].columnsmenu);
                    e.removeHandler(d, "click");
                    e.removeHandler(d, "mousedown");
                    e.removeHandler(d, b.jqx.mobile.getTouchEventName("touchstart"))
                }
            }
        },
        _rendercolumnheader: function(h, i, e, d) {
            var g = "8px";
            if (d.columngroups) {
                g = (e / 2 - this._columnheight / 2);
                if (g < 0) {
                    g = 6
                }
                g += "px"
            } else {
                if (this.columnsheight != 32) {
                    g = (this.columnsheight / 2 - this._columnheight / 2);
                    if (g < 0) {
                        g = 6
                    }
                    g += "px"
                }
            }
            if (this.enableellipsis) {
                if (i == "left") {
                    return '<div style="padding-bottom: 2px; overflow: hidden; text-overflow: ellipsis; text-align: ' + i + "; margin-left: 4px; margin-right: 2px; line-height: " + e + 'px;"><span style="text-overflow: ellipsis; cursor: default;">' + h + "</span></div>"
                } else {
                    return '<div style="padding-bottom: 2px; overflow: hidden; text-overflow: ellipsis; text-align: ' + i + "; margin-left: 2px; margin-right: 4px; line-height: " + e + 'px;"><span style="text-overflow: ellipsis; cursor: default;">' + h + "</span></div>"
                }
            }
            if (i == "center" || i == "middle") {
                return '<div style="padding-bottom: 2px; text-align: center; line-height: ' + e + 'px;"><a href="#">' + h + "</a></div>"
            }
            var f = '<a style="line-height: ' + e + "px; float: " + i + ';" href="#">' + h + "</a>";
            return f
        },
        _renderrows: function(m, p, t) {
            var o = this.that;
            if ((this.pageable || this.groupable) && (this.autoheight || this.autorowheight)) {
                if (this.table != null && this.table[0].rows != null && this.table[0].rows.length < this.dataview.rows.length) {
                    o.prerenderrequired = true
                }
            }
            if (!this.pageable && (this.autoheight || this.autorowheight) && (this.virtualmode || this.unboundmode)) {
                var f = this.source.totalrecords;
                if (!isNaN(f)) {
                    if (this.table != null && this.table[0].rows != null && this.table[0].rows.length != f) {
                        o.prerenderrequired = true
                    }
                }
            }
            if ((this.autoheight || this.autorowheight) && !o.prerenderrequired) {
                if (this.table && this.table[0].rows) {
                    if (this.table[0].rows.length < this.dataview.records.length) {
                        if (this.pageable && this.table[0].rows.length < this.dataview.pagesize) {
                            o.prerenderrequired = true
                        } else {
                            if (!this.pageable) {
                                o.prerenderrequired = true
                            }
                        }
                    }
                    if (this.table[0].rows.length < this.dataview.cachedrecords.length) {
                        if (this.pageable && this.table[0].rows.length < this.dataview.pagesize) {
                            o.prerenderrequired = true
                        } else {
                            if (!this.pageable) {
                                o.prerenderrequired = true
                            }
                        }
                    }
                }
            }
            o._prerenderrows(m);
            if (o._requiresupdate) {
                o._requiresupdate = false;
                o._updatepageviews()
            }
            var l = function() {
                if (o._loading) {
                    return
                }
                if (o.WinJS) {
                    MSApp.execUnsafeLocalFunction(function() {
                        o._rendervisualrows()
                    })
                } else {
                    o._rendervisualrows()
                }
                if (o.virtualmode && o.showaggregates && o._updateaggregates) {
                    o.refreshaggregates()
                }
            };
            var k = b.jqx.browser.msie && b.jqx.browser.version < 10;
            if (this.virtualmode) {
                var e = function() {
                    if (o.rendergridrows) {
                        var y = o._startboundindex;
                        if (y == undefined) {
                            y = 0
                        }
                        var w = y + 1 + o.dataview.pagesize;
                        if (y != null && w != null) {
                            var x = o.source._source ? true : false;
                            var z = !x ? o.source.recordstartindex : o.source._source.recordstartindex;
                            if (z != y || p == true) {
                                if (!x) {
                                    o.source.recordstartindex = y;
                                    o.source.recordendindex = w
                                } else {
                                    if (w >= o.source._source.totalrecords) {
                                        w = o.source._source.totalrecords;
                                        y = w - o.dataview.pagesize - 1;
                                        if (y < 0) {
                                            y = 0
                                        }
                                        if (o.source._source.recordendindex == w && o.source._source.recordstartindex == y) {
                                            return
                                        }
                                    }
                                    o.source._source.recordstartindex = y;
                                    o.source._source.recordendindex = w
                                }
                                o.updatebounddata("cells")
                            }
                        }
                    }
                };
                if (this.loadondemand) {
                    l();
                    e();
                    this.loadondemand = false
                }
                var d = this._browser == undefined ? this._isIE10() : this._browser;
                if (this.editable && this.editcell && !this.vScrollInstance.isScrolling() && !this.hScrollInstance.isScrolling()) {
                    l()
                } else {
                    if (this.autoheight) {
                        l()
                    } else {
                        if (d || k || (navigator && navigator.userAgent.indexOf("Safari") != -1)) {
                            if (this._scrolltimer != null) {
                                clearTimeout(this._scrolltimer)
                            }
                            this._scrolltimer = setTimeout(function() {
                                l()
                            }, 5)
                        } else {
                            l()
                        }
                    }
                }
            } else {
                if (this.scrollmode == "deferred" && (this.hScrollInstance.isScrolling() || this.vScrollInstance.isScrolling())) {
                    if (this._scrolltimer != null) {
                        clearInterval(this._scrolltimer)
                    }
                    var g = this._getfirstvisualrow();
                    if (g != null) {
                        var r = function(B) {
                            if (g == null) {
                                return ""
                            }
                            var A = "<table>";
                            var y = o.deferreddatafields;
                            if (y == null) {
                                if (o.columns.records.length > 0) {
                                    y = new Array();
                                    y.push(o.columns.records[0].displayfield)
                                }
                            }
                            for (var x = 0; x < y.length; x++) {
                                var C = y[x];
                                var z = o._getcolumnbydatafield(C);
                                if (z) {
                                    var w = o._getcellvalue(z, g);
                                    if (z.cellsformat != "") {
                                        if (b.jqx.dataFormat) {
                                            if (b.jqx.dataFormat.isDate(w)) {
                                                w = b.jqx.dataFormat.formatdate(w, z.cellsformat, o.gridlocalization)
                                            } else {
                                                if (b.jqx.dataFormat.isNumber(w)) {
                                                    w = b.jqx.dataFormat.formatnumber(w, z.cellsformat, o.gridlocalization)
                                                }
                                            }
                                        }
                                    }
                                    A += "<tr><td>" + w + "</td></tr>"
                                }
                            }
                            A += "</table>";
                            return A
                        };
                        var i = this.scrollfeedback ? this.scrollfeedback(g.bounddata) : r(g.bounddata);
                        if (i != this._scrollelementcontent) {
                            this._scrollelement[0].innerHTML = i;
                            this._scrollelementcontent = i
                        }
                    }
                    this._scrollelement.css("visibility", "visible");
                    this._scrollelementoverlay.css("visibility", "visible");
                    this._scrollelement.css("margin-top", -this._scrollelement.height() / 2);
                    this._scrolltimer = setInterval(function() {
                        if (!o.hScrollInstance.isScrolling() && !o.vScrollInstance.isScrolling()) {
                            l();
                            o._scrollelement.css("visibility", "hidden");
                            o._scrollelementoverlay.css("visibility", "hidden");
                            clearInterval(o._scrolltimer);
                            if (g) {
                                o.ensurerowvisible(g.visibleindex)
                            }
                        }
                    }, 100);
                    return
                }
                if (navigator && navigator.userAgent.indexOf("Chrome") == -1 && navigator.userAgent.indexOf("Safari") != -1) {
                    this._updatedelay = 1
                }
                if (this.touchDevice != undefined && this.touchDevice == true) {
                    this._updatedelay = 5
                }
                var d = this._browser == undefined ? this._isIE10() : this._browser;
                if (d || k) {
                    this._updatedelay = 5
                }
                if ((d) && this.hScrollInstance.isScrolling()) {
                    l();
                    return
                }
                if (b.jqx.browser.mozilla && this._updatedelay == 0 && (this.vScrollInstance.isScrolling() || this.hScrollInstance.isScrolling())) {
                    this._updatedelay = 0
                }
                var h = this.isTouchDevice();
                if (h) {
                    this._updatedelay = 0
                }
                if (this.updatedelay != null) {
                    this._updatedelay = this.updatedelay
                }
                if (this._updatedelay == 0) {
                    l()
                } else {
                    var j = this._jqxgridrendertimer;
                    if (j != null) {
                        clearTimeout(j)
                    }
                    if (this.vScrollInstance.isScrolling() || this.hScrollInstance.isScrolling()) {
                        if (this._updatedelay) {
                            j = setTimeout(function() {
                                l()
                            }, this._updatedelay)
                        } else {
                            j = null;
                            l()
                        }
                        this._jqxgridrendertimer = j
                    } else {
                        this._jqxgridrendertimer = j;
                        l()
                    }
                }
            }
            if (o.autorowheight && !o.autoheight) {
                if (this._pageviews.length > 0) {
                    var n = this._gettableheight();
                    var q = this._pageviews[0].height;
                    if (q > n) {
                        if (this.pageable && this.gotopage) {
                            q = this._pageviews[0].height;
                            if (q < 0) {
                                q = this._pageviews[0].height
                            }
                        }
                        if (this.vScrollBar.css("visibility") != "visible") {
                            this.vScrollBar.css("visibility", "visible")
                        }
                        if (q <= n || this.autoheight) {
                            this.vScrollBar.css("visibility", "hidden")
                        }
                        if (q - n > 0) {
                            if (this.scrollmode != "deferred") {
                                var s = q - n;
                                var u = this.vScrollInstance.max;
                                this.vScrollBar.jqxScrollBar({
                                    max: s
                                });
                                if (Math.round(s) != Math.round(u)) {
                                    var v = this.vScrollBar.jqxScrollBar("value");
                                    if (v > s) {
                                        this.vScrollBar.jqxScrollBar({
                                            value: 0
                                        })
                                    }
                                }
                            }
                        } else {
                            this.vScrollBar.jqxScrollBar({
                                value: 0,
                                max: q
                            })
                        }
                    } else {
                        if (!this._loading) {
                            this.vScrollBar.css("visibility", "hidden")
                        }
                        this.vScrollBar.jqxScrollBar({
                            value: 0
                        })
                    }
                    this._arrange();
                    if (this.virtualsizeinfo) {
                        this.virtualsizeinfo.virtualheight = q
                    }
                }
            }
        },
        scrolling: function() {
            var e = this.vScrollInstance.isScrolling();
            var d = this.hScrollInstance.isScrolling();
            return {
                vertical: e,
                horizontal: d
            }
        },
        _renderhorizontalscroll: function() {
            var t = this.hScrollInstance;
            var u = t.value;
            if (this.hScrollBar.css("visibility") === "hidden") {
                t.value = 0;
                u = 0
            }
            var k = parseInt(u);
            if (this.table == null) {
                return
            }
            var q = this.table[0].rows.length;
            var p = this.columnsrow;
            var r = this.groupable && this.groups.length > 0 ? this.groups.length : 0;
            var l = this.columns.records.length - r;
            var f = this.columns.records;
            var n = this.dataview.rows.length == 0;
            if (this.rtl) {
                if (this.hScrollBar.css("visibility") != "hidden") {
                    k = t.max - k
                }
            }
            if (n && !this._haspinned) {
                for (var w = 0; w < q; w++) {
                    var s = this.table[0].rows[w];
                    for (var v = 0; v < r + l; v++) {
                        var d = s.cells[v];
                        if (d != undefined) {
                            var g = f[v];
                            if (g.pinned) {
                                d.style.marginLeft = k + "px";
                                if (w == 0) {
                                    var e = p[0].cells[v];
                                    e.style.marginLeft = k + "px"
                                }
                            }
                        }
                    }
                }
                this.table[0].style.marginLeft = -k + "px";
                p[0].style.marginLeft = -k + "px"
            } else {
                if (this._haspinned || this._haspinned == undefined) {
                    for (var w = 0; w < q; w++) {
                        var s = this.table[0].rows[w];
                        for (var v = 0; v < r + l; v++) {
                            var d = s.cells[v];
                            if (d != undefined) {
                                var g = f[v];
                                if (g.pinned) {
                                    if (k == 0 && d.style.marginLeft == "") {
                                        continue
                                    }
                                    var h = null;
                                    var x = null;
                                    var o = null;
                                    if (this.showeverpresentrow && this.addnewrowtop) {
                                        if (this.addnewrowtop[0].cells) {
                                            o = this.addnewrowtop[0].cells[v]
                                        }
                                    }
                                    if (this.showfilterrow && this.filterrow) {
                                        if (this.filterrow[0].cells) {
                                            x = this.filterrow[0].cells[v]
                                        }
                                    }
                                    if (this.showaggregates) {
                                        if (this.statusbar[0].cells) {
                                            h = this.statusbar[0].cells[v]
                                        }
                                    }
                                    if (!this.rtl) {
                                        d.style.marginLeft = k + "px";
                                        if (w == 0) {
                                            var e = p[0].cells[v];
                                            e.style.marginLeft = k + "px";
                                            if (h) {
                                                h.style.marginLeft = k + "px"
                                            }
                                            if (x) {
                                                x.style.marginLeft = k + "px"
                                            }
                                            if (o) {
                                                o.style.marginLeft = k + "px"
                                            }
                                        }
                                    } else {
                                        d.style.marginLeft = -parseInt(u) + "px";
                                        if (w == 0) {
                                            var e = p[0].cells[v];
                                            e.style.marginLeft = -parseInt(u) + "px";
                                            if (h) {
                                                h.style.marginLeft = -parseInt(u) + "px"
                                            }
                                            if (x) {
                                                x.style.marginLeft = -parseInt(u) + "px"
                                            }
                                            if (o) {
                                                o.style.marginLeft = -parseInt(u) + "px"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    this.table[0].style.marginLeft = -k + "px";
                    p[0].style.marginLeft = -k + "px"
                } else {
                    if (this._haspinned == false) {
                        this.table[0].style.marginLeft = -k + "px";
                        p[0].style.marginLeft = -k + "px"
                    }
                }
            }
            if (this.showaggregates) {
                if (this.statusbar[0].cells) {
                    var m = 0;
                    if (this.rtl) {
                        if (this.vScrollBar.css("visibility") != "hidden") {
                            if (this.hScrollBar.css("visibility") != "hidden") {
                                m = 2 + parseInt(this.hScrollBar.css("left"))
                            }
                        }
                    }
                    this.statusbar[0].style.marginLeft = -k + m + "px"
                }
            }
            if (this.showfilterrow && this.filterrow) {
                if (this.filterrow[0].cells) {
                    this.filterrow[0].style.marginLeft = -k + "px"
                }
            }
            if (this.showeverpresentrow && this.addnewrowtop) {
                if (this.addnewrowtop[0].cells) {
                    this.addnewrowtop[0].style.marginLeft = -k + "px"
                }
            }
        },
        _updaterowdetailsvisibility: function() {
            if (this.rowdetails) {
                for (var d = 0; d < this._rowdetailselementscache.length; d++) {
                    b(this._rowdetailselementscache[d]).css("display", "none")
                }
            }
        },
        _getvisualcolumnsindexes: function(f, p, k, o, e, n, l) {
            var m = this.vScrollInstance.isScrolling() || this.hScrollInstance.isScrolling() || this._keydown;
            if (this.rowdetails || this.rtl || (this.editcell && m) || (this.width && this.width.toString().indexOf("%") >= 0 && !m && !this.editcell) || this.exporting) {
                if (!l) {
                    return {
                        start: 0,
                        end: k + o
                    }
                }
            }
            var d = 0;
            var i = -1;
            var g = k + o;
            var q = false;
            if (this.autorowheight) {
                return {
                    start: 0,
                    end: k + o
                }
            }
            if (!e) {
                for (var h = 0; h < k + o; h++) {
                    var r = h;
                    if (!q) {
                        if (this.columns.records[h].pinned && n) {
                            q = true
                        }
                    }
                    if (!this.columns.records[h].hidden && !this.columns.records[h].adaptivehidden) {
                        d += this.columns.records[h].width
                    }
                    if (d >= f && i == -1) {
                        i = h
                    }
                    if (d > p + f) {
                        g = h;
                        break
                    }
                }
            }
            g++;
            if (g > k + o) {
                g = k + o
            }
            if (i == -1 || q) {
                i = 0
            }
            return {
                start: i,
                end: g
            }
        },
        _getvirtualcolumnsindexes: function(e, n, i, m, d) {
            var l = this.vScrollInstance.isScrolling() || this.hScrollInstance.isScrolling() || this._keydown;
            if (this.enableoptimization) {
                if (this.rowdetails || this.rtl || (this.editcell && l) || (this.width && this.width.toString().indexOf("%") >= 0 && !l && !this.editcell) || this.exporting) {
                    return {
                        start: 0,
                        end: i + m
                    }
                }
            }
            if (this.rtl || this.editcell || this.exporting) {
                return {
                    start: 0,
                    end: i + m
                }
            }
            var f = 0;
            var k = -1;
            var g = i + m;
            if (this.autorowheight) {
                return {
                    start: 0,
                    end: i + m
                }
            }
            if (!d) {
                for (var h = 0; h < i + m; h++) {
                    var o = h;
                    if (!this.columns.records[h].hidden && !this.columns.records[h].adaptivehidden) {
                        f += this.columns.records[h].width
                    }
                    if (f >= e && k == -1) {
                        k = h
                    }
                    if (f > n + e) {
                        g = h;
                        break
                    }
                }
            }
            g++;
            if (g > i + m) {
                g = i + m
            }
            if (k == -1) {
                k = 0
            }
            return {
                start: k,
                end: g
            }
        },
        _getfirstvisualrow: function() {
            var e = this.vScrollInstance;
            var g = e.value;
            var f = parseInt(g);
            if (this._pagescache.length == 0) {
                this.dataview.updateview();
                this._loadrows()
            }
            if (this.vScrollBar[0].style.visibility != "visible") {
                f = 0
            }
            if (!this.pageable) {
                var d = this._findvisiblerow(f, this._pageviews);
                if (d == -1) {
                    return null
                }
                if (d != this.dataview.pagenum) {
                    this.dataview.pagenum = d;
                    this.dataview.updateview();
                    this._loadrows()
                } else {
                    if (!this._pagescache[this.dataview.pagenum]) {
                        this._loadrows()
                    }
                }
            }
            var h = this._findvisiblerow(f, this._pagescache[this.dataview.pagenum]);
            var i = this._pagescache[this.dataview.pagenum];
            if (i && i[0]) {
                return i[h]
            }
        },
        _rendervisualrows: function() {
            if (!this.virtualsizeinfo) {
                return
            }
            var Y = this.vScrollInstance;
            var p = this.hScrollInstance;
            var j = Y.value;
            var C = p.value;
            var o = parseInt(j);
            var l = parseInt(C);
            var x = this._gettableheight();
            var J = this._hostwidth != undefined ? this._hostwidth : this.host.width();
            if (this.hScrollBar[0].style.visibility == "visible") {
                x += 29
            }
            if (this.scrollmode == "deferred" && this._newmax != 0) {
                if (o > this._newmax && this._newmax != null) {
                    o = this._newmax
                }
            }
            var al = Y.isScrolling() || p.isScrolling() || this._keydown;
            var D = this.groupable && this.groups.length > 0;
            this.visiblerows = new Array();
            this.hittestinfo = new Array();
            if (this.editcell && this.editrow == undefined) {
                this._hidecelleditor(false)
            }
            if (this.editrow != undefined) {
                this._hideeditors()
            }
            if (this.virtualmode && !this.pageable) {
                this._pagescache = new Array()
            }
            if (this._pagescache.length == 0) {
                this.dataview.updateview();
                this._loadrows()
            }
            if (this.vScrollBar[0].style.visibility == "hidden") {
                o = 0
            }
            if (!this.pageable) {
                var L = this._findvisiblerow(o, this._pageviews);
                if (L == -1) {
                    this._clearvisualrows();
                    this._renderemptyrow();
                    this._updaterowdetailsvisibility()
                }
                if (L != this.dataview.pagenum) {
                    this.dataview.pagenum = L;
                    this.dataview.updateview();
                    this._loadrows()
                } else {
                    if (!this._pagescache[this.dataview.pagenum]) {
                        this._loadrows()
                    }
                }
            }
            var an = this.groupable && this.groups.length > 0 ? this.groups.length : 0;
            if (!this.columns.records) {
                return
            }
            var r = this.columns.records.length - an;
            var ad = this._findvisiblerow(o, this._pagescache[this.dataview.pagenum]);
            var M = this._pagescache[this.dataview.pagenum];
            var S = ad;
            if (S < 0) {
                S = 0
            }
            var ag = 0;
            var ac = 0;
            var Q = 0;
            var e = 0;
            var U = this.virtualsizeinfo.visiblerecords;
            var P = this.groupable ? this.groups.length : 0;
            var B = this.toTP("jqx-grid-cell") + " " + this.toTP("jqx-item");
            if (this.rtl) {
                B += " " + this.toTP("jqx-grid-cell-rtl")
            }
            if ((this.autoheight || this.autorowheight) && this.pageable) {
                if (!this.groupable || (this.groupable && this.groups.length === 0)) {
                    U = this.dataview.pagesize
                }
            }
            if (D) {
                B = " " + this.toTP("jqx-grid-group-cell")
            }
            if (this.isTouchDevice()) {
                B += " " + this.toTP("jqx-touch")
            }
            if (this.autorowheight) {
                B += " jqx-grid-cell-wrap"
            }
            var O = this.rowsheight;
            var G = S;
            var am = this._rendercell;
            var u = true;
            var q = this._getvisualcolumnsindexes(l, J, an, r, D, true);
            var d = q.start;
            var ab = q.end;
            var t = this._getvirtualcolumnsindexes(l, J, an, r, D);
            var I = t.start;
            var h = t.end;
            var af = b.jqx.browser.msie && b.jqx.browser.version < 9;
            if ((this.autoheight || this.pageable) && this.autorowheight) {
                if (this._pageviews[0]) {
                    this._oldpageviewheight = this._pageviews[0].height
                }
            }
            if (this.autorowheight) {
                S = 0
            }
            if (S >= 0) {
                this._updaterowdetailsvisibility();
                this._startboundindex = M != null ? M[S].bounddata.boundindex : 0;
                this._startvisibleindex = M != null ? M[S].bounddata.visibleindex : 0;
                var A = this.table[0].rows;
                if (this.columns.records.length > 10 && this.enablecolumnsvirtualization) {
                    var H = function(i) {
                        if (i && i.parentNode && i.parentNode.nodeName != "#document-fragment") {
                            return true
                        }
                        return false
                    };
                    for (var ah = 0; ah < A.length; ah++) {
                        var k = A[ah];
                        for (var V = 0; V < I; V++) {
                            var aj = V;
                            if (this.columns.records[aj].pinned) {
                                continue
                            }
                            if (this.columns.records[aj].datafield == null) {
                                continue
                            }
                            var ai = k.cells[aj];
                            if (H(ai)) {
                                ai.parentNode.removeChild(ai)
                            }
                            var R = this.columns.records[aj].element;
                            this.columns.records[aj]._rendered = false;
                            if (H(R)) {
                                this.columnsrow[0].removeChild(R)
                            }
                            if (this.filterrow) {
                                if (H(this.filterrow[0].cells[aj]) && this.columns.records[aj].filterable) {
                                    this.filterrow[0].cells[aj].parentNode.removeChild(this.filterrow[0].cells[aj])
                                }
                            }
                        }
                        for (var V = h; V < this.columns.records.length; V++) {
                            var aj = V;
                            if (this.columns.records[aj].pinned) {
                                continue
                            }
                            if (this.columns.records[aj].datafield == null) {
                                continue
                            }
                            var ai = k.cells[aj];
                            if (H(ai)) {
                                ai.parentNode.removeChild(ai)
                            }
                            var R = this.columns.records[aj].element;
                            this.columns.records[aj]._rendered = false;
                            if (H(R)) {
                                this.columnsrow[0].removeChild(R)
                            }
                            if (this.filterrow) {
                                if (H(this.filterrow[0].cells[aj]) && this.columns.records[aj].filterable) {
                                    this.filterrow[0].cells[aj].parentNode.removeChild(this.filterrow[0].cells[aj])
                                }
                            }
                        }
                        for (var V = I; V < h; V++) {
                            var aj = V;
                            var ai = k.cells[aj];
                            if (!H(ai)) {
                                k.appendChild(ai)
                            }
                            var R = this.columns.records[aj].element;
                            this.columns.records[aj]._rendered = true;
                            if (R.selectable) {
                                ai.removeAttribute("selected");
                                if (R.selected) {
                                    ai.setAttribute("selected", "")
                                }
                            }
                            if (!H(R)) {
                                this.columnsrow[0].appendChild(R)
                            }
                            if (this.filterrow && this.showfilterrow && !H(this.filterrow[0].cells[aj]) && this.columns.records[aj].filterable) {
                                this.filterrow[0].firstChild.appendChild(this.filterrow[0].cells[aj])
                            }
                        }
                    }
                }
                for (var n = 0; n < U && ac < U; n++) {
                    var ae = M != undefined ? M[S + n] : null;
                    if (this.virtualmode && n >= this.source.totalrecords) {
                        ae = null
                    }
                    if (ae == null) {
                        S = -n;
                        if (this._pagescache[this.dataview.pagenum + 1]) {
                            M = this._pagescache[this.dataview.pagenum + 1];
                            this.dataview.pagenum++
                        } else {
                            var s = this._pageviews.length;
                            do {
                                if (this.dataview.pagenum < this._pageviews.length - 1) {
                                    this.dataview.pagenum++;
                                    M = undefined;
                                    if (this._pageviews[this.dataview.pagenum].height > 0) {
                                        this.dataview.updateview();
                                        this._loadrows();
                                        M = this._pagescache[this.dataview.pagenum]
                                    }
                                } else {
                                    M = undefined;
                                    break
                                }
                            } while (M == undefined && this.dataview.pagenum < s)
                        }
                        if (M != undefined) {
                            ae = M[S + n]
                        }
                    }
                    if (ae != null) {
                        if (ae.hidden) {
                            continue
                        }
                        this._endboundindex = this._startboundindex + n;
                        this._endvisibleindex = this._startvisibleindex + n;
                        if (n == 0) {
                            var m = Math.abs(o - ae.top);
                            this.table[0].style.top = -m + "px";
                            e = -m
                        }
                        var k = this.table[0].rows[ac];
                        if (!k) {
                            continue
                        }
                        if (parseInt(k.style.height) != ae.height) {
                            k.style.height = parseInt(ae.height) + "px"
                        }
                        Q += ae.height;
                        var X = this.rowdetails && ae.rowdetails;
                        var w = !ae.rowdetailshidden;
                        if (X && w) {
                            k.style.height = parseInt(ae.height - ae.rowdetailsheight) + "px";
                            U++
                        }
                        var K = this._isrowselected(u, ae);
                        for (var V = d; V < ab; V++) {
                            var aj = V;
                            this._rendervisualcell(am, B, K, X, w, D, P, k, ae, aj, ac, al)
                        }
                        if (ae.group != undefined && this._rendergroup) {
                            this._rendergroup(P, k, ae, an, r, ac, J)
                        }
                        if (this.autorowheight && (this.autoheight || this.pageable)) {
                            var O = this.rowsheight;
                            for (var V = d; V < ab; V++) {
                                if (this.editable && this.editcell && this.editcell.column == this.columns.records[V].datafield && this.editcell.row == this.getboundindex(ae)) {
                                    if (this.editcell.editor) {
                                        O = Math.max(O, this.editcell.editor.height());
                                        continue
                                    }
                                }
                                if (k.cells[V].firstChild) {
                                    O = Math.max(O, 8 + parseInt(k.cells[V].firstChild.offsetHeight))
                                }
                            }
                            k.style.height = parseInt(O) + "px";
                            this.heights[this._startboundindex + n] = O;
                            if (X && w) {
                                O += ae.rowdetailsheight
                            }
                            ae.height = O
                        }
                        this.visiblerows[this.visiblerows.length] = ae;
                        this.hittestinfo[this.hittestinfo.length] = {
                            row: ae,
                            visualrow: k,
                            details: false
                        };
                        if (X && w) {
                            ac++;
                            var k = this.table[0].rows[ac];
                            this._renderrowdetails(B, k, ae, an, r, ac);
                            this.visiblerows[this.visiblerows.length] = ae;
                            this.hittestinfo[this.hittestinfo.length] = {
                                row: ae,
                                visualrow: k,
                                details: true
                            }
                        }
                        if (!this.autorowheight) {
                            if (Q + e >= x) {
                                break
                            }
                        }
                    } else {
                        var aa = true;
                        this._clearvisualrow(l, D, ac, an, r);
                        if (Q + ag + e <= x) {
                            ag += O
                        }
                    }
                    ac++
                }
                this._horizontalvalue = l;
                if (ag > 0) {
                    if (this.vScrollBar[0].style.visibility == "visible") {
                        var ak = parseInt(this.table.css("top"));
                        var F = this._pageviews[this._pageviews.length - 1];
                        var v = Y.max;
                        var E = F.top + F.height - x;
                        if (this.hScrollBar.css("visibility") == "visible") {
                            E += this.scrollbarsize + 22
                        }
                        if (v != E && !this.autorowheight) {
                            if (E >= 0) {
                                if (this.scrollmode != "deferred") {
                                    Y.max = E;
                                    Y.setPosition(Y.max)
                                } else {
                                    if (this._newmax != E) {
                                        this._newmax = E;
                                        this._rendervisualrows()
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if ((this.autoheight || this.pageable) && this.autorowheight) {
                this._pagescache = new Array();
                var W = 0;
                var g = 0;
                for (var ah = 0; ah < this.visiblerows.length; ah++) {
                    var z = this.visiblerows[ah];
                    z.top = W;
                    W += z.height;
                    g += z.height;
                    var X = this.rowdetails && z.rowdetails;
                    var w = !z.rowdetailshidden;
                    var k = this.table[0].rows[ah];
                    if (X && w) {
                        ah++
                    }
                    for (var V = d; V < ab; V++) {
                        var Z = this.columns.records[V];
                        if (!Z.hidden && !Z.adaptivehidden) {
                            if (!Z.cellsrenderer) {
                                var N = k.cells[V];
                                var f = 0;
                                if (N.firstChild) {
                                    var f = (z.height - parseInt(N.firstChild.offsetHeight) - 8) / 2;
                                    if (X && w) {
                                        var f = (z.height - z.rowdetailsheight - b(N.firstChild).height() - 8) / 2
                                    }
                                } else {
                                    var f = (z.height - parseInt(b(N).height()) - 8) / 2
                                }
                                if (f >= 0) {
                                    f = parseInt(f) + 4;
                                    if (N.firstChild) {
                                        if (N.firstChild.className.indexOf("jqx-grid-groups-row") == -1) {
                                            if (Z.columntype != "checkbox" && Z.columntype != "button") {
                                                if (this.editable && this.editcell && this.editcell.column == Z.datafield && this.editcell.row == this.getboundindex(z)) {
                                                    continue
                                                }
                                                N.firstChild.style.marginTop = f + "px"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (this._pageviews[0]) {
                    this._pageviews[0].height = g
                }
                this._arrange()
            }
            this._renderemptyrow();
            if (this.toCompile && this.toCompile.length > 0) {
                var T = this;
                b.each(T.toCompile, function(y, ao) {
                    if (this.compiled) {
                        return true
                    }
                    var i = this.cell;
                    if (!i) {
                        return true
                    }
                    if (b.jqx.angularCompile) {
                        b.jqx.angularCompile(i, "<div>" + this.value + "</div>")
                    }
                    this.compiled = true
                })
            }
        },
        _hideemptyrow: function() {
            if (!this.showemptyrow) {
                return
            }
            if (!this.table) {
                return
            }
            if (!this.table[0].rows) {
                return
            }
            var f = this.table[0].rows[0];
            if (!f) {
                return
            }
            var g = false;
            for (var e = 0; e < f.cells.length; e++) {
                var d = b(f.cells[e]);
                if (d.css("display") != "none" && !g) {
                    if (d.width() == this.host.width() || d.text() == this.gridlocalization.emptydatastring) {
                        d[0].checkbox = null;
                        d[0].button = null;
                        g = true;
                        d[0].innerHTML = ""
                    }
                }
            }
        },
        _renderemptyrow: function() {
            if (this._loading) {
                return
            }
            if (this.dataview.records.length == 0 && this.showemptyrow) {
                var l = false;
                var e = this.toTP("jqx-grid-cell");
                if (this.table && this.table.length > 0 && this.table[0].rows && this.table[0].rows.length > 0) {
                    var k = this.table[0].rows[0];
                    this.table[0].style.top = "0px";
                    for (var f = 0; f < k.cells.length; f++) {
                        var d = b(k.cells[f]);
                        if (d.css("display") != "none" && !l) {
                            d[0].checkbox = null;
                            d[0].button = null;
                            d[0].className = e;
                            l = true;
                            d[0].innerHTML = "";
                            var g = b("<span style='white-space: nowrap; float: left; margin-left: 50%; position: relative;'></span>");
                            g.text(this.gridlocalization.emptydatastring);
                            d.append(g);
                            var j = 0;
                            if (!this.oldhscroll) {
                                j = parseInt(this.table[0].style.marginLeft);
                                if (this.rtl) {
                                    d.css("z-index", 999);
                                    d.css("overflow", "visible")
                                }
                            }
                            g.css("left", -j - (g.width() / 2));
                            g.css("top", this._gettableheight() / 2 - g.height() / 2);
                            if (b.jqx.browser.msie && b.jqx.browser.version < 8) {
                                g.css("margin-left", "0px");
                                g.css("left", this.host.width() / 2 - g.width() / 2)
                            }
                            var h = Math.abs(parseInt(this.table[0].style.top));
                            if (isNaN(h)) {
                                h = 0
                            }
                            b(k).height(this._gettableheight() + h);
                            d.css("margin-left", "0px");
                            d.width(this.host.width());
                            if (this.table.width() < this.host.width()) {
                                this.table.width(this.host.width())
                            }
                        }
                        d.addClass(this.toThemeProperty("jqx-grid-empty-cell"))
                    }
                }
            }
        },
        _clearvisualrows: function() {
            var e = this.virtualsizeinfo.visiblerecords;
            var f = this.hScrollInstance;
            var d = f.value;
            var g = parseInt(d);
            var i = this.groupable && this.groups.length > 0;
            if (!this.columns.records) {
                return
            }
            for (var h = 0; h < e; h++) {
                this._clearvisualrow(g, i, h, 0, this.columns.records.length)
            }
        },
        _iscellselected: function(j, i, g) {
            var f = false;
            var e = 0;
            if (this.virtualmode && this.pageable && this.groupable) {
                if (this.groups.length > 0) {
                    e = this.dataview.pagesize * this.dataview.pagenum
                }
            }
            if (this.groups.length > 0 && this.pageable && this.groupable) {
                var d = this.getrowboundindexbyid(i.bounddata.uid);
                if (d != -1) {
                    for (var h in this.selectedcells) {
                        if (h == d + "_" + g) {
                            f = true
                        }
                    }
                    return f
                }
                return false
            }
            if (j && i.bounddata != null) {
                if (this.selectionmode != "singlerow") {
                    if (this.dataview.filters.length > 0) {
                        if (!this.virtualmode && i.bounddata.dataindex != undefined) {
                            for (var h in this.selectedcells) {
                                if (h == e + i.bounddata.dataindex + "_" + g) {
                                    f = true
                                }
                            }
                        } else {
                            for (var h in this.selectedcells) {
                                if (h == e + i.bounddata.boundindex + "_" + g) {
                                    f = true
                                }
                            }
                        }
                    } else {
                        for (var h in this.selectedcells) {
                            if (h == e + i.bounddata.boundindex + "_" + g) {
                                f = true;
                                break
                            }
                        }
                    }
                } else {
                    if (this.dataview.filters.length > 0) {
                        if (!this.virtualmode && i.bounddata.dataindex != undefined) {
                            for (var h in this.selectedcells) {
                                if (h == e + i.bounddata.dataindex + "_" + g) {
                                    f = true;
                                    break
                                }
                            }
                        } else {
                            for (var h in this.selectedcells) {
                                if (h == e + i.bounddata.boundindex + "_" + g) {
                                    f = true;
                                    break
                                }
                            }
                        }
                    } else {
                        for (var h in this.selectedcells) {
                            if (h == e + i.bounddata.boundindex == this.selectedrowindex) {
                                f = true;
                                break
                            }
                        }
                    }
                }
            }
            return f
        },
        _isrowselected: function(h, g) {
            var f = false;
            var e = 0;
            if (this.virtualmode && this.pageable && this.groupable) {
                if (this.groups.length > 0) {
                    e = this.dataview.pagesize * this.dataview.pagenum
                }
            }
            if (this.groupable && this.groups.length > 0 && this.pageable) {
                var d = this.getrowboundindexbyid(g.bounddata.uid);
                if (d == undefined || d == -1) {
                    return false
                }
                if (this.selectedrowindexes.indexOf(d) != -1) {
                    f = true
                }
                if (!f) {
                    f = d == this.selectedrowindex && this.selectedrowindex != -1
                }
                return f
            }
            if (h && g.bounddata != null) {
                if (this.selectionmode != "singlerow") {
                    if (this.dataview.filters.length > 0) {
                        if (!this.virtualmode && g.bounddata.dataindex != undefined) {
                            if (this.selectedrowindexes.indexOf(e + g.bounddata.dataindex) != -1) {
                                f = true
                            }
                        } else {
                            if (this.selectedrowindexes.indexOf(e + g.bounddata.boundindex) != -1) {
                                f = true
                            }
                        }
                    } else {
                        if (this.selectedrowindexes.indexOf(e + g.bounddata.boundindex) != -1) {
                            f = true
                        }
                    }
                } else {
                    if (this.dataview.filters.length > 0) {
                        if (!this.virtualmode && g.bounddata.dataindex != undefined) {
                            if (this.selectedrowindexes.indexOf(e + g.bounddata.dataindex) != -1) {
                                f = true
                            }
                        } else {
                            if (this.selectedrowindexes.indexOf(e + g.bounddata.boundindex) != -1) {
                                f = true
                            }
                        }
                    } else {
                        if (e + g.bounddata.boundindex == this.selectedrowindex) {
                            f = true
                        }
                    }
                }
            }
            return f
        },
        _rendervisualcell: function(E, k, t, n, y, C, l, u, d, j, x, r) {
            var f = null;
            var g = this.columns.records[j];
            if (g.hidden || g.adaptivehidden) {
                var e = u.cells[j];
                e.innerHTML = "";
                return
            }
            var p = this._getcellvalue(g, d);
            var e = u.cells[j];
            var B = k;
            if (this.selectionmode.indexOf("cell") != -1) {
                if (this.dataview.filters.length > 0) {
                    if (this.selectedcells[d.bounddata.dataindex + "_" + g.datafield]) {
                        t = true
                    } else {
                        t = false
                    }
                } else {
                    if (this.selectedcells[d.boundindex + "_" + g.datafield]) {
                        t = true
                    } else {
                        t = false
                    }
                }
                if (this.editcell) {
                    if (this.editcell.row === d.boundindex && this.editcell.column === g.datafield) {
                        if (g.columntype !== "checkbox") {
                            t = false
                        }
                    }
                }
                if (this.virtualmode || (this.groupable && this.groups.length > 0 && this.pageable)) {
                    t = this._iscellselected(true, d, g.datafield)
                }
            }
            if (g.cellclassname != "" && g.cellclassname) {
                if (typeof g.cellclassname == "string") {
                    B += " " + g.cellclassname
                } else {
                    if (!this._columnClassNameCache) {
                        this._columnClassNameCache = []
                    }
                    var i = this.getboundindex(d);
                    if (this._columnClassNameCache[i + "_" + g.datafield + "_" + p] !== undefined && this.enableoptimization) {
                        var q = this._columnClassNameCache[i + "_" + g.datafield + "_" + p];
                        if (q) {
                            B += " " + q
                        }
                    } else {
                        var q = g.cellclassname(i, g.datafield, p, d.bounddata);
                        if (q) {
                            B += " " + q
                        }
                        this._columnClassNameCache[i + "_" + g.datafield + "_" + p] = q
                    }
                }
            }
            var s = this.showsortcolumnbackground && this.sortcolumn && g.displayfield == this.sortcolumn;
            if (this.sortmode === "many" && this.showsortcolumnbackground) {
                var h = this.getsortcolumns();
                for (var w = 0; w < h.length; w++) {
                    if (g.displayfield === h[w].dataField) {
                        s = true
                    }
                }
            }
            if (s) {
                B += " " + this.toTP("jqx-grid-cell-sort")
            }
            if (g.filter && this.showfiltercolumnbackground) {
                B += " " + this.toTP("jqx-grid-cell-filter")
            }
            if (d.bounddata.totalsrow) {
                B += " " + this.toTP("jqx-grid-cell-pinned")
            }
            if ((g.pinned && this.showpinnedcolumnbackground) || g.grouped) {
                if (C) {
                    if (!d.bounddata.totalsrow) {
                        B += " " + this.toTP("jqx-grid-cell-pinned")
                    } else {}
                } else {
                    B += " " + this.toTP("jqx-grid-cell-pinned")
                }
            }
            if (this.altrows && d.group == undefined) {
                var D = d.visibleindex;
                if (D >= this.altstart) {
                    if ((this.altstart + D) % (1 + this.altstep) == 0) {
                        if (!s) {
                            B += " " + this.toTP("jqx-grid-cell-alt")
                        } else {
                            B += " " + this.toTP("jqx-grid-cell-sort-alt")
                        }
                        if (g.filter && this.showfiltercolumnbackground) {
                            B += " " + this.toTP("jqx-grid-cell-filter-alt")
                        }
                        if (g.pinned && this.showpinnedcolumnbackground) {
                            B += " " + this.toTP("jqx-grid-cell-pinned-alt")
                        }
                    }
                }
            }
            if (j <= l) {
                if (C || this.rowdetails || (this.pageable && this.virtualmode)) {
                    var z = b(e);
                    var o = this.columns.records[j].width;
                    if (e.style.width != parseInt(o) + "px") {
                        z.width(o)
                    }
                }
            } else {
                if (C || this.rowdetails) {
                    if (this._hiddencolumns) {
                        var z = b(e);
                        var o = this.columns.records[j].width;
                        if (parseInt(e.style.width) != o) {
                            z.width(o)
                        }
                    }
                }
            }
            var A = true;
            if (this.rowdetails && n) {
                if (y && !C) {
                    B += " " + this.toTP("jqx-grid-details-cell")
                } else {
                    if (C) {
                        B += " " + this.toTP("jqx-grid-group-details-cell")
                    }
                }
                if (this.showrowdetailscolumn) {
                    if (!this.rtl) {
                        if (d.group == undefined && j == l && !d.bounddata.totalsrow) {
                            var v = this.toThemeProperty("jqx-icon-arrow-down");
                            if (y) {
                                B += " " + this.toTP("jqx-grid-group-expand");
                                B += " " + v
                            } else {
                                B += " " + this.toTP("jqx-grid-group-collapse");
                                var v = this.toThemeProperty("jqx-icon-arrow-right");
                                B += " " + v
                            }
                            A = false;
                            e.title = "";
                            e.innerHTML = "";
                            if (e.className != B) {
                                e.className = B
                            }
                            return
                        }
                    } else {
                        if (d.group == undefined && j == u.cells.length - l - 1) {
                            var v = this.toThemeProperty("jqx-icon-arrow-down");
                            if (y) {
                                B += " " + this.toTP("jqx-grid-group-expand-rtl");
                                B += " " + v
                            } else {
                                B += " " + this.toTP("jqx-grid-group-collapse-rtl");
                                var v = this.toThemeProperty("jqx-icon-arrow-left");
                                B += " " + v
                            }
                            A = false;
                            e.title = "";
                            e.innerHTML = "";
                            if (e.className != B) {
                                e.className = B
                            }
                            return
                        }
                    }
                }
            }
            if (t && A && j >= l) {
                B += " " + this.toTP("jqx-grid-cell-selected");
                B += " " + this.toTP("jqx-fill-state-pressed")
            }
            if (e.className != B) {
                e.className = B
            }
            g._applyCellStyle(e);
            if (d.group != undefined) {
                p = "";
                e.title = "";
                e.innerHTML = "";
                return
            }
            E(this, g, d, p, e, r)
        },
        _rendercell: function(w, f, k, u, d, s) {
            var g = u + "_" + f.visibleindex;
            if (f.columntype == "number" || f.cellsrenderer != null) {
                var g = k.uniqueid + "_" + f.visibleindex
            }
            if (f.columntype == "number") {
                u = k.visibleindex
            }
            if (f.columntype === "adaptive") {
                u = "..."
            }
            f._applyCellStyle(d);
            if (w.showrowlines) {
                d.style.borderBottomColor = ""
            } else {
                d.style.borderBottomColor = "transparent"
            }
            if (w.showcolumnheaderlines) {
                f.element.style.borderRightColor = "";
                f.element.style.boxShadow = ""
            } else {
                f.element.style.borderRightColor = "transparent";
                f.element.style.boxShadow = "none"
            }
            if (w.showcolumnlines) {
                d.style.borderRightColor = ""
            } else {
                d.style.borderRightColor = "transparent"
            }
            if (w.editcell && w.editrow == undefined) {
                if (w.editmode == "selectedrow" && f.editable && w.editable) {
                    if (w.editcell.row == w.getboundindex(k)) {
                        if (w._showcelleditor) {
                            if (!w.hScrollInstance.isScrolling() && !w.vScrollInstance.isScrolling()) {
                                w._showcelleditor(w.editcell.row, f, d, w.editcell.init)
                            } else {
                                w._showcelleditor(w.editcell.row, f, d, false, false)
                            }
                            d.className += " " + w.toTP("jqx-grid-cell-edit");
                            return
                        }
                    }
                } else {
                    if (w.editcell.row == w.getboundindex(k) && w.editcell.column == f.datafield) {
                        w.editcell.element = d;
                        if (w.editcell.editing) {
                            if (w._showcelleditor) {
                                if (!w.hScrollInstance.isScrolling() && !w.vScrollInstance.isScrolling()) {
                                    w._showcelleditor(w.editcell.row, f, w.editcell.element, w.editcell.init)
                                } else {
                                    w._showcelleditor(w.editcell.row, f, w.editcell.element, w.editcell.init, false)
                                }
                                d.className += " " + w.toTP("jqx-grid-cell-edit");
                                return
                            }
                        }
                    }
                }
            }
            var t = w._defaultcellsrenderer(u, f);
            var p = w._cellscache[g];
            if (p) {
                if (f.columntype == "checkbox") {
                    if (w.host.jqxCheckBox) {
                        if (u === "") {
                            u = null
                        }
                        var o = d.innerHTML.toString().length == 0;
                        if (d.checkbox && !w.groupable && !o) {
                            d.checkboxrow = w.getboundindex(k);
                            if (u == "") {
                                u = false
                            }
                            if (u == "1") {
                                u = true
                            }
                            if (u == "0") {
                                u = false
                            }
                            if (u == 1) {
                                u = true
                            }
                            if (u == 0) {
                                u = false
                            }
                            if (u == "true") {
                                u = true
                            }
                            if (u == "false") {
                                u = false
                            }
                            if (u == null && !f.threestatecheckbox) {
                                u = false
                            }
                            if (f.checkboxcolumn) {
                                u = false;
                                if (w.dataview.filters.length > 0 && !w.virtualmode && k.bounddata.dataindex != undefined) {
                                    if (w.selectedrowindexes.indexOf(k.bounddata.dataindex) != -1) {
                                        u = true
                                    }
                                } else {
                                    if (w.selectedrowindexes.indexOf(k.bounddata.boundindex) != -1) {
                                        u = true
                                    }
                                }
                            }
                            if (!w.disabled) {
                                if (d.checkboxinstance) {
                                    d.checkboxinstance._setState(u)
                                } else {
                                    d.checkbox.jqxCheckBox("_setState", u)
                                }
                            }
                        } else {
                            w._rendercheckboxcell(w, d, f, k, u)
                        }
                        if (f.cellsrenderer != null) {
                            var h = f.cellsrenderer(w.getboundindex(k), f.datafield, u, t, f.getcolumnproperties(), k.bounddata);
                            if (h != undefined) {
                                d.innerHTML = h
                            }
                        }
                        return
                    }
                } else {
                    if (f.columntype == "button") {
                        if (w.host.jqxButton) {
                            if (u == "") {
                                u = false
                            }
                            if (f.cellsrenderer != null) {
                                u = f.cellsrenderer(w.getboundindex(k), f.datafield, u, t, f.getcolumnproperties(), k.bounddata)
                            }
                            if (d.innerHTML == "") {
                                d.buttonrow = w.getboundindex(k);
                                d.button = null;
                                w._renderbuttoncell(w, d, f, k, u)
                            }
                            if (d.button && !w.groupable) {
                                d.buttonrow = w.getboundindex(k);
                                d.button.val(u)
                            } else {
                                w._renderbuttoncell(w, d, f, k, u)
                            }
                            return
                        }
                    } else {
                        if (f.columntype == "progressbar" || f.columntype === "rating") {
                            if (w.host.jqxButton) {
                                if (u == "") {
                                    u = false
                                }
                                if (f.cellsrenderer != null) {
                                    u = f.cellsrenderer(w.getboundindex(k), f.datafield, u, t, f.getcolumnproperties(), k.bounddata)
                                }
                                if (d.innerHTML == "") {
                                    d.progressrow = w.getboundindex(k);
                                    d.progress = null;
                                    w._renderprogresscell(w, d, f, k, u)
                                }
                                if (d.progress && !w.groupable) {
                                    d.progressrow = w.getboundindex(k);
                                    d.progress.val(u)
                                } else {
                                    w._renderprogresscell(w, d, f, k, u)
                                }
                                return
                            }
                        }
                    }
                }
                if (f.createwidget) {
                    if (d.innerHTML == "") {
                        d.widgetrow = w.getboundindex(k);
                        d.widget = null;
                        f.widget = null;
                        w._renderwidgetcell(w, d, f, k, u)
                    }
                    if (d.widget && !w.groupable) {
                        d.widgetrow = w.getboundindex(k);
                        if (f.initwidget) {
                            f.initwidget(w.getboundindex(k), f.datafield, u, d.firstChild)
                        } else {
                            throw new Error("jqxGrid: 'initwidget' column function is not implemented. Please, implement 'initwidget'")
                        }
                    } else {
                        w._renderwidgetcell(w, d, f, k, u)
                    }
                    return
                }
                var v = p.element;
                if (f.cellsrenderer != null || (d.childNodes && d.childNodes.length == 0) || w.groupable || w.rowdetails) {
                    if (d.innerHTML != v) {
                        d.innerHTML = v
                    }
                } else {
                    if (d.innerHTML.indexOf("editor") >= 0) {
                        d.innerHTML = v
                    } else {
                        if (s) {
                            var q = v.indexOf(">");
                            var n = v.indexOf("</");
                            var r = v.substring(q + 1, n);
                            var i = d.childNodes[0];
                            if (r.indexOf(">") >= 0) {
                                d.innerHTML = v
                            } else {
                                if (i.childNodes[0]) {
                                    if (r != i.childNodes[0].nodeValue) {
                                        if (r.indexOf("&") >= 0) {
                                            d.innerHTML = v
                                        } else {
                                            i.childNodes[0].nodeValue = r
                                        }
                                    }
                                } else {
                                    var e = document.createTextNode(r);
                                    i.appendChild(e)
                                }
                            }
                        } else {
                            if (d.innerHTML != v) {
                                d.innerHTML = v
                            }
                        }
                    }
                }
                if (w.enabletooltips && f.enabletooltips) {
                    d.title = p.title
                }
                return
            }
            if (f.columntype == "checkbox") {
                w._rendercheckboxcell(w, d, f, k, u);
                w._cellscache[g] = {
                    element: "",
                    title: u
                };
                if (w.enabletooltips && f.enabletooltips) {
                    d.title = "" + u
                }
                return
            } else {
                if (f.columntype == "button") {
                    if (f.cellsrenderer != null) {
                        u = f.cellsrenderer(w.getboundindex(k), f.datafield, u, t, f.getcolumnproperties(), k.bounddata)
                    }
                    w._renderbuttoncell(w, d, f, k, u);
                    w._cellscache[g] = {
                        element: "",
                        title: u
                    };
                    if (w.enabletooltips && f.enabletooltips) {
                        d.title = "" + u
                    }
                    return
                } else {
                    if (f.columntype == "progressbar" || f.columntype === "rating") {
                        if (f.cellsrenderer != null) {
                            u = f.cellsrenderer(w.getboundindex(k), f.datafield, u, t, f.getcolumnproperties(), k.bounddata)
                        }
                        w._renderprogresscell(w, d, f, k, u);
                        w._cellscache[g] = {
                            element: "",
                            title: u
                        };
                        if (w.enabletooltips && f.enabletooltips) {
                            d.title = "" + u
                        }
                        return
                    } else {
                        if (f.columntype == "number") {
                            u = k.visibleindex
                        }
                    }
                }
            }
            if (f.createwidget) {
                if (f.cellsrenderer != null) {
                    u = f.cellsrenderer(w.getboundindex(k), f.datafield, u, t, f.getcolumnproperties(), k.bounddata)
                }
                w._renderwidgetcell(w, d, f, k, u);
                w._cellscache[g] = {
                    element: "",
                    title: u
                };
                if (w.enabletooltips && f.enabletooltips) {
                    d.title = u
                }
                return
            }
            var v = null;
            if (f.cellsrenderer != null) {
                if (!w._columnCellsRenderCache) {
                    w._columnCellsRenderCache = []
                }
                var l = w.getboundindex(k);
                if (w._columnCellsRenderCache[l + "_" + f.datafield + "_" + u] !== undefined && w.enableoptimization) {
                    v = w._columnCellsRenderCache[l + "_" + f.datafield + "_" + u]
                } else {
                    v = f.cellsrenderer(w.getboundindex(k), f.datafield, u, t, f.getcolumnproperties(), k.bounddata);
                    w._columnCellsRenderCache[l + "_" + f.datafield + "_" + u] = v
                }
                if (v && (v.indexOf("<jqx-") >= 0 || v.indexOf(" ng-") >= 0)) {
                    if (w.toCompile) {
                        w.toCompile.push({
                            cell: d,
                            value: v,
                            row: w.getboundindex(k)
                        })
                    }
                    return
                }
            } else {
                v = t
            }
            if (v == null) {
                v = t
            }
            var m = u;
            if (w.enabletooltips && f.enabletooltips) {
                if (f.cellsformat != "") {
                    if (b.jqx.dataFormat) {
                        if (b.jqx.dataFormat.isDate(u)) {
                            m = b.jqx.dataFormat.formatdate(m, f.cellsformat, w.gridlocalization)
                        } else {
                            if (b.jqx.dataFormat.isNumber(u)) {
                                m = b.jqx.dataFormat.formatnumber(m, f.cellsformat, w.gridlocalization)
                            }
                        }
                    }
                }
                d.title = m
            }
            if (w.WinJS) {
                b(d).html(v)
            } else {
                var j = d.innerHTML;
                if (j.indexOf("editor") >= 0 || f.cellsrenderer != null || w.groupable || w.virtualmode) {
                    d.innerHTML = v
                } else {
                    if (j.length > 0) {
                        var q = v.indexOf(">");
                        var n = v.indexOf("</");
                        var r = v.substring(q + 1, n);
                        var i = d.childNodes[0];
                        if (r.indexOf(">") >= 0) {
                            d.innerHTML = v
                        } else {
                            if (i.childNodes[0]) {
                                if (r != i.childNodes[0].nodeValue) {
                                    if (r.indexOf("&") >= 0 || j.indexOf("span") >= 0) {
                                        d.innerHTML = v
                                    } else {
                                        i.childNodes[0].nodeValue = r
                                    }
                                }
                            } else {
                                var e = document.createTextNode(r);
                                i.appendChild(e)
                            }
                        }
                    } else {
                        if (j != v) {
                            d.innerHTML = v
                        }
                    }
                }
            }
            w._cellscache[g] = {
                element: d.innerHTML,
                title: m
            };
            return true
        },
        _isIE10: function() {
            if (this._browser == undefined) {
                var e = b.jqx.utilities.getBrowser();
                if (e.browser == "msie" && parseInt(e.version) > 9) {
                    this._browser = true
                } else {
                    this._browser = false;
                    if (e.browser == "msie") {
                        var d = "Browser CodeName: " + navigator.appCodeName + "";
                        d += "Browser Name: " + navigator.appName + "";
                        d += "Browser Version: " + navigator.appVersion + "";
                        d += "Platform: " + navigator.platform + "";
                        d += "User-agent header: " + navigator.userAgent + "";
                        if (d.indexOf("Zune 4.7") != -1) {
                            this._browser = true
                        }
                    }
                }
            }
            return this._browser
        },
        _renderinlinecell: function(f, d, e, i, g) {
            var h = b(d);
            d.innerHTML = '<div style="position: absolute;"></div>'
        },
        _rendercheckboxcell: function(g, e, f, k, h) {
            if (g.host.jqxCheckBox) {
                var j = b(e);
                if (h === "") {
                    if (f.threestatecheckbox) {
                        h = null
                    } else {
                        h = false
                    }
                }
                if (h === null && !f.threestatecheckbox) {
                    h = false
                }
                if (h == "1") {
                    h = true
                }
                if (h == "0") {
                    h = false
                }
                if (h == 1) {
                    h = true
                }
                if (h == 0) {
                    h = false
                }
                if (h == "true") {
                    h = true
                }
                if (h == "false") {
                    h = false
                }
                if (f.checkboxcolumn) {
                    h = false;
                    var d = this.getboundindex(k);
                    if (this.selectedrowindexes.indexOf(d) != -1) {
                        h = true
                    }
                }
                if (j.find(".jqx-checkbox").length == 0) {
                    e.innerHTML = '<div style="position: absolute; top: 50%; left: 10%; margin-top: -9px; margin-left: -12px;"></div>';
                    b(e.firstChild).jqxCheckBox({
                        disabled: g.disabled,
                        _canFocus: false,
                        hasInput: false,
                        hasThreeStates: f.threestatecheckbox,
                        enableContainerClick: false,
                        animationShowDelay: 0,
                        animationHideDelay: 0,
                        locked: true,
                        theme: g.theme,
                        checked: h
                    });
                    if (this.enabletooltips && f.enabletooltips) {
                        e.title = "" + h
                    }
                    if (this.editable && f.editable) {
                        b(e.firstChild).jqxCheckBox({
                            locked: false
                        })
                    }
                    if (f.checkboxcolumn) {
                        b(e.firstChild).jqxCheckBox({
                            locked: false
                        })
                    }
                    e.checkbox = b(e.firstChild);
                    e.checkboxinstance = e.checkbox.data().jqxCheckBox.instance;
                    e.checkboxrow = this.getboundindex(k);
                    var i = b.data(e.firstChild, "jqxCheckBox").instance;
                    i.updated = function(l, s, m) {
                        if (g.disabled) {
                            s = m;
                            var p = g.table[0].rows.length;
                            var r = g._getcolumnindex(f.datafield);
                            for (var o = 0; o < p; o++) {
                                var n = g.table[0].rows[o].cells[r].firstChild;
                                if (n) {
                                    b(n).jqxCheckBox({
                                        disabled: g.disabled
                                    })
                                }
                            }
                        }
                        if (f.editable && !g.disabled) {
                            var p = g.table[0].rows.length;
                            var r = g._getcolumnindex(f.datafield);
                            if (g.editrow == undefined) {
                                if (f.cellbeginedit) {
                                    var u = f.cellbeginedit(e.checkboxrow, f.datafield, f.columntype, !s);
                                    if (u == false) {
                                        g.setcellvalue(e.checkboxrow, f.datafield, !s, true);
                                        return
                                    }
                                }
                                if (f.cellvaluechanging) {
                                    var t = f.cellvaluechanging(e.checkboxrow, f.datafield, f.columntype, m, s);
                                    if (t != undefined) {
                                        s = t
                                    }
                                }
                                if (g.editmode !== "selectedrow") {
                                    for (var o = 0; o < p; o++) {
                                        var n = g.table[0].rows[o].cells[r].firstChild;
                                        if (n) {
                                            b(n).jqxCheckBox("destroy")
                                        }
                                    }
                                }
                                if (g.editcell && g.editcell.validated == false) {
                                    g.setcellvalue(e.checkboxrow, f.datafield, !s, true)
                                } else {
                                    if (g.editmode !== "selectedrow" || g.editcell == null) {
                                        var q = g.getrowdata(e.checkboxrow);
                                        g._raiseEvent(17, {
                                            rowindex: e.checkboxrow,
                                            row: q,
                                            datafield: f.datafield,
                                            value: m,
                                            columntype: f.columntype
                                        });
                                        g.pushToHistory = true;
                                        g.setcellvalue(e.checkboxrow, f.datafield, s, true);
                                        g.pushToHistory = false;
                                        g._raiseEvent(18, {
                                            rowindex: e.checkboxrow,
                                            row: q,
                                            datafield: f.datafield,
                                            oldvalue: m,
                                            value: s,
                                            columntype: f.columntype
                                        })
                                    } else {
                                        g.pushToHistory = true;
                                        g.setcellvalue(e.checkboxrow, f.datafield, s, false, false);
                                        g.pushToHistory = false
                                    }
                                }
                                if (f.cellendedit) {
                                    f.cellendedit(e.checkboxrow, f.datafield, f.columntype, s)
                                }
                            }
                        } else {
                            if (f.checkboxcolumn) {
                                if (g.editcell) {
                                    g.endcelledit(g.editcell.row, g.editcell.column, false, true)
                                }
                                if (!g.disabled) {
                                    if (s) {
                                        g.selectrow(e.checkboxrow)
                                    } else {
                                        g.unselectrow(e.checkboxrow)
                                    }
                                    if (g.autosavestate) {
                                        if (g.savestate) {
                                            g.savestate()
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    e.checkboxrow = this.getboundindex(k);
                    b(e.firstChild).jqxCheckBox("_setState", h, !(this.editable && f.editable) && !f.checkboxcolumn)
                }
            }
        },
        _renderwidgetcell: function(f, d, e, i, g) {
            var h = b(d);
            if (h.find(".jqx-grid-widget").length == 0) {
                var j = '<div class="jqx-grid-widget" style="opacity: 0.99; position: absolute; width: 100%; height:100%; top: 0%; left: 0%; padding: 0px;"></div>';
                d.innerHTML = j;
                e.createwidget(i, e.datafield, g, d.firstChild);
                b(d.firstChild).attr("hideFocus", "true");
                b(d.firstChild).children().addClass("jqx-grid-widget");
                d.widget = b(d.firstChild);
                d.widgetrow = f.getboundindex(i);
                e.widget = b(d.firstChild)
            } else {
                e.initwidget(f.getboundindex(i), e.datafield, g, d.firstChild);
                d.widgetrow = f.getboundindex(i);
                b(d.firstChild).val(g)
            }
        },
        _renderprogresscell: function(h, d, e, n, k) {
            var l = b(d);
            if (e.columntype === "rating") {
                if (!h._linkadded) {
                    var j = document.createElement("link");
                    j.rel = "stylesheet";
                    j.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
                    document.head.appendChild(j);
                    h._linkadded = true
                }
                if (!e.ratingmax) {
                    e.ratingmax = 5
                }
                var m = "";
                for (var f = 0; f < e.ratingmax; f++) {
                    if (k >= f + 1) {
                        m += '<span style="color: rgba(255, 165, 0, 1);" class="fa fa-star checked"></span>'
                    } else {
                        m += '<span style="color: rgba(255, 165, 0, .3);" class="fa fa-star"></span>'
                    }
                }
                var g = e.cellsalign;
                if (g === "right") {
                    g = "flex-end"
                }
                d.innerHTML = '<div style="display: flex; width: 100%; height: 100%; justify-content: ' + g + '; padding: 5px; box-sizing: border-box; font-size: 16px; align-items: center;">' + m + "</div>";
                return
            }
            if (k == "") {
                k = false
            }
            if (l.find(".jqx-progress").length == 0) {
                d.innerHTML = '<progress class="jqx-progress" max="100" style="opacity: 0.99; position: absolute; top: 10%; left: 10%; width:80%; height:80%; padding: 0px;"/>';
                b(d.firstChild).val(k);
                d.progress = b(d.firstChild);
                d.progressrow = h.getboundindex(n)
            } else {
                d.progressrow = h.getboundindex(n);
                b(d.firstChild).val(k)
            }
        },
        _renderbuttoncell: function(h, e, g, k, i) {
            if (h.host.jqxButton) {
                var j = b(e);
                if (i == "") {
                    i = false
                }
                if (j.find(".jqx-button").length == 0) {
                    e.innerHTML = '<input type="button" style="opacity: 0.99; position: absolute; top: 0%; left: 0%; padding: 0px; margin-top: 2px; margin-left: 2px;"/>';
                    b(e.firstChild).val(i);
                    b(e.firstChild).attr("hideFocus", "true");
                    b(e.firstChild).jqxButton({
                        disabled: h.disabled,
                        theme: h.theme,
                        height: h.rowsheight - 4,
                        width: g.width - 4
                    });
                    e.button = b(e.firstChild);
                    e.buttonrow = h.getboundindex(k);
                    var d = this.isTouchDevice();
                    if (d) {
                        var f = b.jqx.mobile.getTouchEventName("touchend");
                        h.addHandler(b(e.firstChild), f, function(l) {
                            if (g.buttonclick) {
                                g.buttonclick(e.buttonrow, l)
                            }
                        })
                    } else {
                        h.addHandler(b(e.firstChild), "click", function(l) {
                            if (g.buttonclick) {
                                g.buttonclick(e.buttonrow, l)
                            }
                        })
                    }
                } else {
                    e.buttonrow = h.getboundindex(k);
                    b(e.firstChild).val(i)
                }
            }
        },
        _clearvisualrow: function(g, f, o, i, n) {
            var m = this.toTP("jqx-grid-cell");
            if (f) {
                m = " " + this.toTP("jqx-grid-group-cell")
            }
            m += " " + this.toTP("jqx-grid-cleared-cell");
            var p = this.table[0].rows;
            for (var k = 0; k < i + n; k++) {
                if (p[o]) {
                    var e = p[o].cells[k];
                    if (e.className != m) {
                        e.className = m
                    }
                    var d = this.columns.records[k];
                    if (this._horizontalvalue != g && !d.pinned) {
                        if (this.oldhscroll == true) {
                            var h = -g;
                            e.style.marginLeft = -g + "px"
                        }
                    }
                    var l = d.width;
                    if (d.adaptivewidth) {
                        l = d.adaptivewidth
                    }
                    if (l < d.minwidth) {
                        l = d.minwidth
                    }
                    if (l > d.maxwidth) {
                        l = d.maxwidth
                    }
                    if (parseInt(e.style.width) != l) {
                        if (l != "auto") {
                            b(e)[0].style.width = l + "px"
                        } else {
                            b(e)[0].style.width = l
                        }
                    }
                    if (e.title != "") {
                        e.title = ""
                    }
                    if (e.innerHTML != "") {
                        e.innerHTML = ""
                    }
                }
            }
            if (p[o]) {
                if (parseInt(p[o].style.height) != this.rowsheight) {
                    p[o].style.height = parseInt(this.rowsheight) + "px"
                }
            }
        },
        _findgroupstate: function(e) {
            var d = this._findgroup(e);
            if (d == null) {
                return false
            }
            return d.expanded
        },
        _findgroup: function(e) {
            var d = null;
            if (this.expandedgroups[e]) {
                return this.expandedgroups[e]
            }
            return d
        },
        _clearcaches: function() {
            this._columnsbydatafield = new Array();
            this._pagescache = new Array();
            this._pageviews = new Array();
            this._cellscache = new Array();
            this._columnClassNameCache = new Array();
            this._columnCellsRenderCache = new Array();
            this.heights = new Array();
            this.hiddens = new Array();
            this.hiddenboundrows = new Array();
            this.heightboundrows = new Array();
            this.detailboundrows = new Array();
            this.details = new Array();
            this.expandedgroups = new Array();
            this._rowdetailscache = new Array();
            this._rowdetailselementscache = new Array();
            if (b.jqx.dataFormat) {
                b.jqx.dataFormat.cleardatescache()
            }
            this.tableheight = null
        },
        _getColumnText: function(d) {
            if (this._columnsbydatafield == undefined) {
                this._columnsbydatafield = new Array()
            }
            if (this._columnsbydatafield[d]) {
                return this._columnsbydatafield[d]
            }
            var f = d;
            var e = null;
            b.each(this.columns.records, function() {
                if (this.datafield == d || this.displayfield == d) {
                    f = this.text;
                    e = this;
                    return false
                }
            });
            this._columnsbydatafield[d] = {
                label: f,
                column: e
            };
            return this._columnsbydatafield[d]
        },
        _getcolumnbydatafield: function(d) {
            if (this.__columnsbydatafield == undefined) {
                this.__columnsbydatafield = new Array()
            }
            if (this.__columnsbydatafield[d]) {
                return this.__columnsbydatafield[d]
            }
            var f = d;
            var e = null;
            b.each(this.columns.records, function() {
                if (this.datafield == d || this.displayfield == d) {
                    f = this.text;
                    e = this;
                    return false
                }
            });
            this.__columnsbydatafield[d] = e;
            return this.__columnsbydatafield[d]
        },
        isscrollingvertically: function() {
            var d = (this.vScrollBar.jqxScrollBar("isScrolling"));
            return d
        },
        _renderrowdetails: function(q, y, d, x, n, A) {
            if (y == undefined) {
                return
            }
            var E = b(y);
            var g = 0;
            var t = this.rowdetails && this.showrowdetailscolumn ? (1 + this.groups.length) * this.groupindentwidth : (this.groups.length) * this.groupindentwidth;
            if (this.groupable && this.groups.length > 0) {
                for (var r = 0; r <= n; r++) {
                    var e = b(y.cells[r]);
                    e[0].innerHTML = "";
                    e[0].className = "jqx-grid-details-cell"
                }
            }
            var e = b(y.cells[g]);
            if (e[0].style.display == "none") {
                var o = y.cells[g];
                var B = 2;
                var l = g;
                while (o != undefined && o.style.display == "none" && B < 10) {
                    o = y.cells[l + B - 1];
                    B++
                }
                e = b(o)
            }
            if (this.rtl) {
                for (var v = x; v < n; v++) {
                    y.cells[v].innerHTML = "";
                    y.cells[v].className = "jqx-grid-details-cell"
                }
            }
            e.css("width", "100%");
            E.height(d.rowdetailsheight);
            e[0].className = q;
            var p = this.getboundindex(d);
            var j = p + "_";
            if (this._rowdetailscache[j]) {
                var u = this._rowdetailscache[j];
                var C = u.html;
                if (this.initrowdetails) {
                    if (this._rowdetailscache[j].element) {
                        var f = this._rowdetailscache[j].element;
                        var i = e.coord();
                        var z = this.gridcontent.coord();
                        var w = parseInt(i.top) - parseInt(z.top);
                        var k = parseInt(i.left) - parseInt(z.left);
                        if (this.rtl) {
                            k = 0
                        }
                        b(f).css("top", w);
                        b(f).css("left", k);
                        b(f).css("display", "block");
                        b(f).width(this.host.width() - t);
                        if (this.layoutrowdetails) {
                            this.layoutrowdetails(p, f, this.element, this.getrowdata(p))
                        }
                    }
                } else {
                    e[0].innerHTML = C
                }
                return
            }
            e[0].innerHTML = "";
            if (!this.enablerowdetailsindent) {
                t = 0
            }
            var h = '<div class="jqx-enableselect" role="rowgroup" style="border: none; overflow: hidden; width: 100%; height: 100%; margin-left: ' + t + 'px;">' + d.rowdetails + "</div>";
            if (this.rtl) {
                var h = '<div class="jqx-enableselect" role="rowgroup" style="border: none; overflow: hidden; width: 100%; height: 100%; margin-left: ' + 0 + "px; margin-right: " + t + 'px;">' + d.rowdetails + "</div>"
            }
            this._rowdetailscache[j] = {
                id: y.id,
                html: h
            };
            if (this.initrowdetails) {
                var f = b(h)[0];
                b(this.gridcontent).prepend(b(f));
                b(f).css("position", "absolute");
                b(f).width(this.host.width() - t);
                b(f).height(e.height());
                var i = e.coord();
                b(f).css("z-index", 1799);
                if (this.isTouchDevice()) {
                    b(f).css("z-index", 1999)
                }
                b(f).addClass(this.toThemeProperty("jqx-widget-content"));
                var i = e.coord();
                var z = this.gridcontent.coord();
                var w = parseInt(i.top) - parseInt(z.top);
                var k = parseInt(i.left) - parseInt(z.left);
                b(f).css("top", w);
                b(f).css("left", k);
                this.content[0].scrollTop = 0;
                this.content[0].scrollLeft = 0;
                var D = b(b(f).children()[0]);
                if (D[0].id != "") {
                    D[0].id = D[0].id + p
                }
                this.initrowdetails(p, f, this.element, this.getrowdata(p));
                this._rowdetailscache[j].element = f;
                this._rowdetailselementscache[p] = f
            } else {
                e[0].innerHTML = h
            }
        },
        _defaultcellsrenderer: function(f, d) {
            if (d.cellsformat != "") {
                if (b.jqx.dataFormat) {
                    if (b.jqx.dataFormat.isDate(f)) {
                        f = b.jqx.dataFormat.formatdate(f, d.cellsformat, this.gridlocalization)
                    } else {
                        if (b.jqx.dataFormat.isNumber(f)) {
                            f = b.jqx.dataFormat.formatnumber(f, d.cellsformat, this.gridlocalization)
                        }
                    }
                }
            }
            var e = "8px";
            if (this.rowsheight != 31) {
                e = (this.rowsheight / 2 - this._cellheight / 2);
                if (e < 0) {
                    e = 4
                }
                e += "px"
            }
            if (this.enableellipsis) {
                if (d.cellsalign == "center" || d.cellsalign == "middle") {
                    return '<div class="jqx-grid-cell-middle-align" style="margin-top: ' + e + ';">' + f + "</div>"
                }
                if (d.cellsalign == "left") {
                    return '<div class="jqx-grid-cell-left-align" style="margin-top: ' + e + ';">' + f + "</div>"
                }
                if (d.cellsalign == "right") {
                    return '<div class="jqx-grid-cell-right-align" style="margin-top: ' + e + ';">' + f + "</div>"
                }
            }
            if (d.cellsalign == "center" || d.cellsalign == "middle") {
                return '<div style="text-align: center; margin-top: ' + e + ';">' + f + "</div>"
            }
            return '<span style="margin-left: 4px; margin-right: 2px; margin-top: ' + e + "; float: " + d.cellsalign + ';">' + f + "</span>"
        },
        getcelltext: function(g, e) {
            if (g == null || e == null) {
                return null
            }
            var d = this.getcellvalue(g, e);
            var f = this.getcolumn(e);
            if (f && f.cellsformat != "") {
                if (b.jqx.dataFormat) {
                    if (b.jqx.dataFormat.isDate(d)) {
                        d = b.jqx.dataFormat.formatdate(d, f.cellsformat, this.gridlocalization)
                    } else {
                        if (b.jqx.dataFormat.isNumber(d)) {
                            d = b.jqx.dataFormat.formatnumber(d, f.cellsformat, this.gridlocalization)
                        }
                    }
                }
            }
            return d
        },
        getcelltextbyid: function(g, e) {
            if (g == null || e == null) {
                return null
            }
            var d = this.getcellvaluebyid(g, e);
            var f = this.getcolumn(e);
            if (f && f.cellsformat != "") {
                if (b.jqx.dataFormat) {
                    if (b.jqx.dataFormat.isDate(d)) {
                        d = b.jqx.dataFormat.formatdate(d, f.cellsformat, this.gridlocalization)
                    } else {
                        if (b.jqx.dataFormat.isNumber(d)) {
                            d = b.jqx.dataFormat.formatnumber(d, f.cellsformat, this.gridlocalization)
                        }
                    }
                }
            }
            return d
        },
        _getcellvalue: function(d, f) {
            var e = null;
            e = f.bounddata[d.datafield];
            if (d.displayfield != null) {
                e = f.bounddata[d.displayfield]
            }
            if (e == null) {
                e = ""
            }
            return e
        },
        getcell: function(h, d) {
            if (h == null || d == null) {
                return null
            }
            var e = parseInt(h);
            var g = h;
            var f = "";
            if (!isNaN(e)) {
                g = this.getrowdata(e)
            }
            if (g != null) {
                f = g[d]
            }
            return this._getcellresult(f, h, d)
        },
        getrenderedcell: function(h, d) {
            if (h == null || d == null) {
                return null
            }
            var e = parseInt(h);
            var g = h;
            var f = "";
            if (!isNaN(e)) {
                g = this.getrenderedrowdata(e)
            }
            if (g != null) {
                f = g[d]
            }
            return this._getcellresult(f, h, d)
        },
        _getcellresult: function(k, n, e) {
            var f = this.getcolumn(e);
            if (f == null || f == undefined) {
                return null
            }
            var i = f.getcolumnproperties();
            var g = i.hidden;
            var d = i.width;
            var m = i.pinned;
            var h = i.cellsalign;
            var j = i.cellsformat;
            var l = this.getrowheight(n);
            if (l == false) {
                return null
            }
            return {
                value: k,
                row: n,
                column: e,
                datafield: e,
                width: d,
                height: l,
                hidden: g,
                pinned: m,
                align: h,
                format: j
            }
        },
        setcellvaluebyid: function(i, d, h, f, g) {
            var e = this.getrowboundindexbyid(i);
            return this.setcellvalue(e, d, h, f, g)
        },
        getcellvaluebyid: function(f, d) {
            var e = this.getrowboundindexbyid(f);
            return this.getcellvalue(e, d)
        },
        setcellvalue: function(o, F, H, Q, j) {
            if (o == null || F == null) {
                return false
            }
            var h = parseInt(o);
            var t = h;
            var C = o;
            if (!isNaN(h)) {
                C = this.getrowdata(h)
            }
            var N = false;
            if (this.filterable && this._initfilterpanel && this.dataview.filters.length) {
                N = true
            }
            if (this.virtualmode) {
                this._pagescache = new Array()
            }
            if (this.sortcache) {
                this.sortcache = {}
            }
            var q = "";
            var d = "";
            if (C != null && C[F] !== H) {
                if (C[F] === null && H === "") {
                    return
                }
                var I = this._getcolumnbydatafield(F);
                var R = "string";
                if (!this.source) {
                    this.source = new b.jqx.dataAdapter({})
                }
                var v = this.source.datafields || ((this.source._source) ? this.source._source.datafields : null);
                if (v) {
                    var D = "";
                    b.each(v, function() {
                        if (this.name == I.displayfield) {
                            if (this.type) {
                                D = this.type
                            }
                            return false
                        }
                    });
                    if (D) {
                        R = D
                    }
                    d = C[I.displayfield]
                }
                q = C[F];
                if (this.pushToHistory) {
                    this._undoRedoIndex = -1;
                    this._undoRedo.push({
                        action: "setcellvalue",
                        data: {
                            oldvalue: q,
                            value: H,
                            datafield: F,
                            row: o
                        }
                    })
                }
                if (!I.nullable || (H != null && H !== "" && I.nullable && H.label === undefined)) {
                    if (b.jqx.dataFormat.isNumber(q) || R == "number" || R == "float" || R == "int" || R == "decimal" && R != "date") {
                        if (this.gridlocalization && this.gridlocalization.decimalseparator == ",") {
                            if (H && H.indexOf && H.indexOf(",") >= 0) {
                                H = H.replace(",", ".")
                            }
                        }
                        H = new Number(H);
                        H = parseFloat(H);
                        if (isNaN(H)) {
                            H = 0
                        }
                    } else {
                        if (b.jqx.dataFormat.isDate(q) || R == "date") {
                            if (H != "") {
                                var L = H;
                                L = new Date(L);
                                if (L != "Invalid Date" && L != null) {
                                    H = L
                                } else {
                                    if (L == "Invalid Date") {
                                        L = b.jqx.dataFormat.parsedate(H, I.cellsformat);
                                        H = L
                                    }
                                }
                            }
                        }
                    }
                    if (C[F] === H) {
                        if (!this._updating && Q != false) {
                            this._renderrows(this.virtualsizeinfo)
                        }
                        return
                    }
                }
                var A = this.source && this.source._source.localdata && this.source._source.localdata.name === "observableArray";
                C[F] = H;
                if (A) {
                    var P = this.source._source.localdata;
                    if (!P._updating) {
                        P._updating = true;
                        P[o][F] = H;
                        P._updating = false
                    }
                }
                var l = this.getrenderedrowdata(h, true);
                if (!l) {
                    return
                }
                l[F] = H;
                if (H != null && H.label != null) {
                    var I = this._getcolumnbydatafield(F);
                    C[I.displayfield] = H.label;
                    l[I.displayfield] = H.label;
                    C[F] = H.value;
                    l[F] = H.value;
                    if (A && !P._updating) {
                        P._updating = true;
                        P[o][F] = H.value;
                        P[o][I.displayfield] = H.label;
                        P._updating = false
                    }
                }
                if (N) {
                    if (C.dataindex != undefined) {
                        t = C.dataindex;
                        this.dataview.cachedrecords[C.dataindex][F] = H;
                        if (H != null && H.label != undefined) {
                            this.dataview.cachedrecords[C.dataindex][F] = H.value;
                            this.dataview.cachedrecords[C.dataindex][I.displayfield] = H.label
                        }
                    }
                }
            } else {
                if (!this._updating && Q != false) {
                    this._renderrows(this.virtualsizeinfo)
                }
                return false
            }
            if (this.source && this.source._knockoutdatasource && !this._updateFromAdapter && this.autokoupdates) {
                if (this.source._source._localdata) {
                    var E = h;
                    if (N) {
                        if (C.dataindex != undefined) {
                            E = C.dataindex
                        }
                    }
                    var g = this.source._source._localdata()[E];
                    this.source.suspendKO = true;
                    var G = g;
                    if (G[F] && G[F].subscribe) {
                        if (H != null && H.label != null) {
                            G[I.displayfield](H.label);
                            G[F](H.value)
                        } else {
                            G[F](H)
                        }
                    } else {
                        var v = this.source._source.datafields;
                        var B = null;
                        var x = null;
                        if (v) {
                            b.each(v, function() {
                                if (this.name == F) {
                                    x = this.map;
                                    return false
                                }
                            })
                        }
                        if (x == null) {
                            if (H != null && H.label != null) {
                                G[F] = H.value;
                                G[I.displayfield] = H.label
                            } else {
                                G[F] = H
                            }
                        } else {
                            var f = x.split(this.source.mapChar);
                            if (f.length > 0) {
                                var n = G;
                                for (var M = 0; M < f.length - 1; M++) {
                                    n = n[f[M]]
                                }
                                n[f[f.length - 1]] = H
                            }
                        }
                        this.source._source._localdata.replace(g, b.extend({}, G))
                    }
                    this.source.suspendKO = false
                }
            }
            if (this.sortcolumn && this.dataview.sortby && !this._updating) {
                var z = this.getsortinformation();
                if (this.sortcolumn == F && this.sortmode !== "many") {
                    this.dataview.clearsortdata();
                    this.dataview.sortby(z.sortcolumn, z.sortdirection.ascending)
                } else {
                    if (this.sortmode === "many") {
                        var m = this.getsortcolumns();
                        this.dataview.clearsortdata();
                        this.sortby(null);
                        for (var O = 0; O < m.length; O++) {
                            this.sortby(m[O].dataField, m[O].ascending)
                        }
                    }
                }
            } else {
                if (!this._updating) {
                    if (this.dataview.sortby) {
                        if (this.dataview.sortcache[F]) {
                            this.dataview.sortcache[F] = null
                        }
                    }
                }
            }
            this._cellscache = new Array();
            this._pagescache = new Array();
            if (this.source.updaterow && (j == undefined || j == true)) {
                var J = false;
                var r = this.that;
                var s = function(i) {
                    if (false == i) {
                        r.setcellvalue(o, F, q, true, false);
                        if (q != d) {
                            r.setcellvalue(o, r.getcolumn(F).displayfield, d, true, false)
                        }
                    }
                };
                try {
                    var k = this.getrowid(h);
                    J = this.source.updaterow(k, C, s);
                    if (J == undefined) {
                        J = true
                    }
                } catch (w) {
                    J = false;
                    r.setcellvalue(o, F, q, true, false);
                    if (q != d) {
                        r.setcellvalue(o, r.getcolumn(F).displayfield, d, true, false)
                    }
                    return
                }
            }
            var K = this.vScrollInstance.value;
            if (this._updating && Q != true) {
                Q = false
            }
            if (Q == true || Q == undefined) {
                var r = this.that;
                var e = function() {
                    if (r.pageable && r.updatepagerdetails) {
                        r.updatepagerdetails();
                        if (r.autoheight || r.autorowheight) {
                            r._updatepageviews()
                        }
                    }
                };
                var u = this.groupable && this.groups.length > 0;
                if (N && !u) {
                    if (this.autoheight || this.autorowheight) {
                        this.prerenderrequired = true
                    }
                    this.dataview.refresh();
                    this.rendergridcontent(true, false);
                    e();
                    this._renderrows(this.virtualsizeinfo)
                } else {
                    if (this.sortcolumn && !u) {
                        if (this.autoheight || this.autorowheight) {
                            this.prerenderrequired = true
                        }
                        this.dataview.reloaddata();
                        this.rendergridcontent(true, false);
                        e();
                        this._renderrows(this.virtualsizeinfo)
                    } else {
                        if (this.groupable && this.groups.length > 0) {
                            if (this.autoheight || this.autorowheight) {
                                this.prerenderrequired = true
                            }
                            if (this.pageable) {
                                if (this.groups.indexOf(F) != -1) {
                                    this._pagescache = new Array();
                                    this._cellscache = new Array();
                                    this.dataview.refresh();
                                    this._render(true, true, false, false)
                                } else {
                                    this._pagescache = new Array();
                                    this._cellscache = new Array();
                                    this.dataview.updateview();
                                    this._renderrows(this.virtualsizeinfo)
                                }
                            } else {
                                this._pagescache = new Array();
                                this._cellscache = new Array();
                                this.dataview.updateview();
                                this._renderrows(this.virtualsizeinfo)
                            }
                        } else {
                            this.dataview.updateview();
                            this._renderrows(this.virtualsizeinfo)
                        }
                    }
                }
            }
            this.vScrollInstance.setPosition(K);
            if (this.showaggregates && this._updatecolumnsaggregates) {
                this._updatecolumnsaggregates()
            }
            if (this.showfilterrow && this.filterable && this.filterrow) {
                var y = this.getcolumn(F).filtertype;
                if (y == "list" || y == "checkedlist") {
                    this._updatelistfilters(true)
                }
            }
            this._raiseEvent(19, {
                rowindex: o,
                datafield: F,
                newvalue: H,
                value: H,
                oldvalue: q
            });
            return true
        },
        getcellvalue: function(h, d) {
            if (h == null || d == null) {
                return null
            }
            var e = parseInt(h);
            var g = h;
            if (!isNaN(e)) {
                g = this.getrowdata(e)
            }
            if (g != null) {
                var f = g[d];
                return f
            }
            return null
        },
        getrows: function() {
            var h = this.dataview.records.length;
            if (this.virtualmode) {
                var j = new Array();
                for (var e = 0; e < this.dataview.records.length; e++) {
                    var d = this.dataview.records[e];
                    if (d) {
                        j.push(d)
                    }
                }
                if (this.dataview.records.length === undefined) {
                    b.each(this.dataview.records, function() {
                        var i = this;
                        if (i) {
                            j.push(i)
                        }
                    })
                }
                var g = 0;
                if (this.pageable) {
                    g = this.dataview.pagenum * this.dataview.pagesize
                }
                if (j.length > this.source._source.totalrecords - g) {
                    return j.slice(0, this.source._source.totalrecords - g)
                }
                return j
            }
            if (this.dataview.sortdata) {
                var j = new Array();
                for (var e = 0; e < h; e++) {
                    var f = {};
                    f = b.extend({}, this.dataview.sortdata[e].value);
                    j[e] = f
                }
                return j
            } else {
                return this.dataview.records
            }
        },
        getrowboundindexbyid: function(g) {
            var f = this.dataview.recordsbyid["id" + g];
            if (f) {
                if (f.boundindex) {
                    return this.getboundindex(f)
                }
            }
            var e = this.getboundrows();
            for (var d = 0; d < e.length; d++) {
                if (e[d]) {
                    if (e[d].uid == g) {
                        return d
                    }
                }
            }
            return -1
        },
        getrowdatabyid: function(f) {
            var e = this.dataview.recordsbyid["id" + f];
            if (e) {
                return e
            } else {
                var d = this.getrowboundindexbyid(f);
                return this.getboundrows()[d]
            }
            return null
        },
        getrowdata: function(d) {
            if (d == undefined) {
                d = 0
            }
            if (this.virtualmode) {
                var e = this.dataview.records[d];
                return e
            } else {
                var e = this.getboundrows()[d];
                return e
            }
            return null
        },
        getrenderedrowdata: function(d, f) {
            if (d == undefined) {
                d = 0
            }
            if (this.virtualmode) {
                var g = this.getrowvisibleindex(d);
                var e = this.dataview.loadedrecords[g];
                return e
            }
            var g = this.getrowvisibleindex(d);
            if (g >= 0) {
                if (this.groupable && this.groups.length > 0) {
                    var e = this.dataview.loadedrecords[g]
                } else {
                    var e = this.dataview.loadedrecords[g];
                    if (this.pageable && (f == undefined || f == false)) {
                        var e = this.dataview.loadedrecords[this.dataview.pagesize * this.dataview.pagenum + d]
                    }
                }
                return e
            }
            return null
        },
        getboundrows: function() {
            return this.dataview.cachedrecords
        },
        getrowdisplayindex: function(d) {
            var f = this.getdisplayrows();
            for (var e = 0; e < f.length; e++) {
                if (!f[e]) {
                    continue
                }
                if (f[e].dataindex !== undefined) {
                    if (f[e].dataindex == d) {
                        return f[e].visibleindex
                    }
                } else {
                    if (f[e].boundindex == d) {
                        return f[e].visibleindex
                    }
                }
            }
            return -1
        },
        getboundindex: function(e) {
            var d = e.boundindex;
            if (this.groupable && this.groups.length > 0 && this.pageable) {
                if (e.bounddata) {
                    d = this.getrowboundindexbyid(e.bounddata.uid)
                }
            }
            if (this.dataview.filters.length > 0) {
                if (e.bounddata) {
                    if (e.bounddata.dataindex !== undefined) {
                        d = e.bounddata.dataindex
                    }
                } else {
                    if (e.dataindex !== undefined) {
                        d = e.dataindex
                    }
                }
            }
            return d
        },
        getrowboundindex: function(d) {
            var e = this.getdisplayrows()[d];
            if (e) {
                if (e.dataindex !== undefined) {
                    return e.dataindex
                }
                return e.boundindex
            }
            return -1
        },
        getdisplayrows: function() {
            return this.dataview.loadedrecords
        },
        getloadedrows: function() {
            return this.getdisplayrows()
        },
        getvisiblerowdata: function(e) {
            var d = this.getvisiblerows();
            if (d) {
                return d[e]
            }
            return null
        },
        getloadedrowdata: function(e) {
            var d = this.getloadedrows();
            if (d) {
                return d[e]
            }
            return null
        },
        getvisiblerows: function() {
            if (this.virtualmode) {
                return this.dataview.loadedrecords
            }
            if (this.pageable) {
                var f = [];
                for (var e = 0; e < this.dataview.pagesize; e++) {
                    var d = this.dataview.loadedrecords[e + (this.dataview.pagesize * this.dataview.pagenum)];
                    if (d == undefined) {
                        break
                    }
                    f.push(d)
                }
                return f
            } else {
                if (this._startboundindex != undefined && this._endboundindex != undefined) {
                    var f = [];
                    for (var e = this._startvisibleindex; e <= this._endvisibleindex; e++) {
                        var d = this.dataview.loadedrecords[e];
                        if (d == undefined) {
                            break
                        }
                        f.push(d)
                    }
                    return f
                }
            }
            return this.dataview.loadedrecords
        },
        getrowid: function(d) {
            if (d == undefined) {
                d = 0
            }
            if (this.virtualmode) {
                var g = this.getrowvisibleindex(d);
                var f = this.dataview.loadedrecords[g];
                if (f) {
                    return f.uid
                }
            } else {
                var f = null;
                var e = this.dataview.filters.length > 0;
                if (d >= 0 && d < this.dataview.bounditems.length && !e) {
                    if (this.groupable && this.groups.length > 0) {
                        var g = this.getrowvisibleindex(d);
                        var f = this.dataview.loadedrecords[g]
                    } else {
                        var g = this.getrowvisibleindex(d);
                        var f = this.dataview.loadedrecords[g]
                    }
                    if (f) {
                        return f.uid
                    }
                }
                if (this.dataview.filters.length > 0) {
                    var f = this.getboundrows()[d];
                    if (f) {
                        if (f.uid != null) {
                            return f.uid
                        }
                    }
                    return null
                }
            }
            return null
        },
        _updateGridData: function(e) {
            var d = false;
            if (this.filterable && this._initfilterpanel && this.dataview.filters.length) {
                d = true
            }
            if (d) {
                this.dataview.refresh();
                if (e == "updaterow") {
                    this._render(true, true, false, false, false);
                    this.invalidate()
                } else {
                    this.render()
                }
            } else {
                if (this.sortcolumn || (this.groupable && this.groups.length > 0)) {
                    this.dataview.reloaddata();
                    this.render()
                } else {
                    if (e === "updaterow") {
                        this.dataview.refresh();
                        if (!this.virtualmode) {
                            this._render(true, true, false, false, false)
                        }
                    }
                    this._cellscache = new Array();
                    this._pagescache = new Array();
                    this._renderrows(this.virtualsizeinfo)
                }
            }
            if (this.showfilterrow && this.filterable && this.filterrow) {
                this._updatelistfilters(true)
            }
        },
        updaterow: function(d, l, g) {
            if (d != undefined && l != undefined) {
                var i = this.that;
                var k = false;
                i._datachanged = true;
                if (this.pushToHistory) {
                    var j = this.getrowdatabyid(d);
                    this._undoRedoIndex = -1;
                    this._undoRedo.push({
                        action: "updaterow",
                        data: {
                            id: d,
                            rowdata: l,
                            oldrowdata: j
                        }
                    })
                }
                var e = function(r, m, v) {
                    if (r._loading) {
                        throw new Error("jqxGrid: " + r.loadingerrormessage);
                        return false
                    }
                    var t = false;
                    if (!b.isArray(m)) {
                        t = r.dataview.updaterow(m, v)
                    } else {
                        b.each(m, function(w, x) {
                            t = r.dataview.updaterow(this, v[w], false)
                        });
                        r._cellscache = new Array();
                        r._pagescache = new Array();
                        r.dataview.refresh()
                    }
                    var n = r.vScrollInstance.value;
                    if (g == undefined || g == true) {
                        if (r._updating == undefined || r._updating == false) {
                            r._updateGridData("updaterow")
                        }
                    }
                    if (r.showaggregates && r._updatecolumnsaggregates) {
                        r._updatecolumnsaggregates()
                    }
                    if (r.source && r.source._knockoutdatasource && !r._updateFromAdapter && r.autokoupdates) {
                        if (r.source._source._localdata) {
                            var o = r.dataview.recordsbyid["id" + m];
                            var p = r.dataview.records.indexOf(o);
                            var q = r.source._source._localdata()[p];
                            r.source.suspendKO = true;
                            r.source._source._localdata.replace(q, b.extend({}, o));
                            r.source.suspendKO = false
                        }
                    }
                    var s = r.source && r.source._source.localdata && r.source._source.localdata.name === "observableArray";
                    if (s) {
                        if (!r.source._source.localdata._updating) {
                            r.source._source.localdata._updating = true;
                            var u = r.getrowboundindexbyid(m);
                            r.source._source.localdata.set(u, v);
                            r.source._source.localdata._updating = false
                        }
                    }
                    r.vScrollInstance.setPosition(n);
                    return t
                };
                if (this.source.updaterow) {
                    var f = function(m) {
                        if (m == true || m == undefined) {
                            e(i, d, l)
                        } else {
                            k = false
                        }
                    };
                    try {
                        k = this.source.updaterow(d, l, f);
                        if (k == undefined) {
                            k = true
                        }
                    } catch (h) {
                        k = false
                    }
                } else {
                    k = e(i, d, l)
                }
                return k
            }
            return false
        },
        deleterow: function(d, k) {
            if (d != undefined) {
                this._datachanged = true;
                var o = false;
                var m = this.that;
                var p = this.getrowboundindexbyid(d);
                var e = new Array();
                var j = new Array();
                if (p != undefined) {
                    if (this.selectedrowindexes.indexOf(p) >= 0) {
                        this.selectedrowindexes.splice(this.selectedrowindexes.indexOf(p), 1)
                    }
                    if (this.selectedrowindex == p) {
                        this.selectedrowindex = -1
                    }
                    if (!this.virtualmode) {
                        if (m.selectionmode.indexOf("row") >= 0) {
                            b.each(this.selectedrowindexes, function() {
                                var q = m.getrowid(this);
                                e.push(q)
                            });
                            this.selectedrowindexes = new Array();
                            this.selectedrowindex = -1
                        } else {
                            if (m.selectionmode.indexOf("cell") >= 0) {
                                for (var i in m.selectedcells) {
                                    var n = m.selectedcells[i];
                                    var h = m.getrowid(n.rowindex);
                                    n.rowid = h
                                }
                            }
                        }
                        this._rendervisualrows()
                    }
                }
                var f = function(w, r) {
                    if (w._loading) {
                        throw new Error("jqxGrid: " + w.loadingerrormessage);
                        return false
                    }
                    var z = false;
                    var t = w.vScrollInstance.value;
                    if (!b.isArray(r)) {
                        var z = w.dataview.deleterow(r)
                    } else {
                        b.each(r, function() {
                            z = w.dataview.deleterow(this, false)
                        });
                        w._cellscache = new Array();
                        w._pagescache = new Array();
                        w.dataview.refresh()
                    }
                    if (!w.virtualmode) {
                        if (w.selectionmode.indexOf("row") >= 0) {
                            b.each(e, function() {
                                var B = w.getrowboundindexbyid(this);
                                if (B != -1) {
                                    w.selectrow(B, false)
                                }
                            })
                        } else {
                            var A = new Array();
                            for (var v in w.selectedcells) {
                                var y = w.selectedcells[v];
                                var u = y.rowid;
                                var s = w.getrowboundindexbyid(u);
                                if (s != -1) {
                                    y.rowindex = s;
                                    A[s + "_" + y.datafield] = y
                                }
                            }
                            w.selectedcells = A
                        }
                    }
                    if (w._updating == undefined || w._updating == false) {
                        if (k == undefined || k == true) {
                            setTimeout(function() {
                                w._render(true, true, false, false);
                                if (w.vScrollBar.css("visibility") != "visible") {
                                    w._arrange();
                                    w._updatecolumnwidths();
                                    w._updatecellwidths();
                                    w._renderrows(w.virtualsizeinfo)
                                }
                            })
                        }
                    }
                    if (w.source && w.source._knockoutdatasource && !w._updateFromAdapter && w.autokoupdates) {
                        if (w.source._source._localdata) {
                            w.source.suspendKO = true;
                            w.source._source._localdata.pop();
                            w.source.suspendKO = false
                        }
                    }
                    var x = w.source && w.source._source.localdata && w.source._source.localdata.name === "observableArray";
                    if (x) {
                        if (!w.source._source.localdata._updating) {
                            w.source._source.localdata._updating = true;
                            w.source._source.localdata.splice(p, 1);
                            w.source._source.localdata._updating = false
                        }
                    }
                    if (w.dataview.sortby && w.sortmode !== "many") {
                        var q = w.getsortinformation();
                        if (q.sortcolumn) {
                            w.dataview.clearsortdata();
                            w.dataview.sortby(q.sortcolumn, q.sortdirection ? q.sortdirection.ascending : null)
                        }
                    }
                    w.vScrollInstance.setPosition(t);
                    return z
                };
                if (this.source.deleterow) {
                    var g = function(q) {
                        if (q == true || q == undefined) {
                            f(m, d)
                        }
                    };
                    try {
                        this.source.deleterow(d, g);
                        if (o == undefined) {
                            o = true
                        }
                    } catch (l) {
                        o = false
                    }
                } else {
                    o = f(m, d)
                }
                return o
            }
            return false
        },
        addrow: function(f, o, j) {
            if (o != undefined) {
                this._datachanged = true;
                if (j == undefined) {
                    j = "last"
                }
                var n = false;
                var m = this.that;
                if (f == null) {
                    var g = this.dataview.filters && this.dataview.filters.length > 0;
                    var l = !g ? this.dataview.totalrecords : this.dataview.cachedrecords.length;
                    if (!b.isArray(o)) {
                        f = this.dataview.getid(this.dataview.source.id, o, l);
                        while (null != this.dataview.recordsbyid["id" + f]) {
                            f++
                        }
                    } else {
                        var d = new Array();
                        b.each(o, function(e, p) {
                            var q = m.dataview.getid(m.dataview.source.id, o[e], l + e);
                            d.push(q)
                        });
                        f = d
                    }
                }
                var h = function(s, r, v, e) {
                    if (s._loading) {
                        throw new Error("jqxGrid: " + s.loadingerrormessage);
                        return false
                    }
                    var u = s.vScrollInstance.value;
                    var t = false;
                    if (!b.isArray(v)) {
                        if (v != undefined && v.dataindex != undefined) {
                            delete v.dataindex
                        }
                        t = s.dataview.addrow(r, v, e)
                    } else {
                        b.each(v, function(w, x) {
                            if (this.dataindex != undefined) {
                                delete this.dataindex
                            }
                            var y = null;
                            if (r != null && r[w] != null) {
                                y = r[w]
                            }
                            t = s.dataview.addrow(y, this, e, false)
                        });
                        s._cellscache = new Array();
                        s._pagescache = new Array();
                        s.dataview.refresh()
                    }
                    if (s._updating == undefined || s._updating == false) {
                        s._render(true, true, false, false);
                        s.invalidate()
                    }
                    if (s.source && s.source._knockoutdatasource && !s._updateFromAdapter && s.autokoupdates) {
                        if (s.source._source._localdata) {
                            s.source.suspendKO = true;
                            s.source._source._localdata.push(v);
                            s.source.suspendKO = false
                        }
                    }
                    var p = s.source && s.source._source.localdata && s.source._source.localdata.name === "observableArray";
                    if (p) {
                        if (!s.source._source.localdata._updating) {
                            s.source._source.localdata._updating = true;
                            var q = s.getrowboundindexbyid(r);
                            s.source._source.localdata.set(q, v);
                            s.source._source.localdata._updating = false
                        }
                    }
                    if (s.scrollmode != "deferred") {
                        s.vScrollInstance.setPosition(u)
                    } else {
                        s.vScrollInstance.setPosition(0)
                    }
                    return t
                };
                if (this.source && this.source.addrow) {
                    var i = function(e, p) {
                        if (e == true || e == undefined) {
                            if (p != undefined) {
                                f = p
                            }
                            h(m, f, o, j)
                        }
                    };
                    try {
                        n = this.source.addrow(f, o, j, i);
                        if (n == undefined) {
                            n = true
                        }
                    } catch (k) {
                        n = false
                    }
                    if (n == false) {
                        return false
                    }
                } else {
                    h(this, f, o, j)
                }
                return n
            }
            return false
        },
        _findvisiblerow: function(h, i) {
            if (h == undefined) {
                h = parseInt(this.vScrollInstance.value)
            }
            var f = 0;
            if (i == undefined || i == null) {
                i = this.rows.records
            }
            var d = i.length;
            while (f <= d) {
                var e = parseInt((f + d) / 2);
                var g = i[e];
                if (g == undefined) {
                    break
                }
                if (g.top > h && g.top + g.height > h) {
                    d = e - 1
                } else {
                    if (g.top < h && g.top + g.height < h) {
                        f = e + 1
                    } else {
                        return e;
                        break
                    }
                }
            }
            return -1
        },
        _updatecellwidths: function() {
            var f = this.virtualsizeinfo;
            if (!f) {
                return
            }
            var p = this.that;
            if (p.gridcontent == undefined) {
                return
            }
            if (p.table == undefined) {
                p.table = p.gridcontent.find("#contenttable" + p.element.id)
            }
            var k = p.groupable && p.groups.length > 0;
            var q = 0;
            var l = f.visiblerecords;
            if (p.pageable && (p.autoheight || p.autorowheight)) {
                l = p.dataview.pagesize;
                if (p.groupable) {
                    p.dataview.updateview();
                    l = p.dataview.rows.length
                }
            }
            if (!p.groupable && !p.pageable && (p.autoheight || p.autorowheight)) {
                l = p.dataview.totalrecords
            }
            if (p.rowdetails) {
                l += p.dataview.pagesize
            }
            if (!p.columns.records) {
                return
            }
            var r = p.columns.records.length;
            var t = p.table[0].rows;
            for (var n = 0; n < l; n++) {
                var d = t[n];
                if (!d) {
                    break
                }
                var s = d.cells;
                var h = 0;
                for (var m = 0; m < r; m++) {
                    var g = p.columns.records[m];
                    var e = g.width;
                    if (g.adaptivewidth) {
                        e = g.adaptivewidth
                    }
                    var o = s[m];
                    if (parseInt(o.style.left) != h) {
                        o.style.left = h + "px"
                    }
                    if (parseInt(o.style.width) != e) {
                        o.style.width = e + "px"
                    }
                    if (!(g.hidden && g.hideable) && !g.adaptivehidden) {
                        h += parseFloat(e)
                    } else {
                        o.style.display = "none"
                    }
                }
                if (q == 0) {
                    p.table.width(parseFloat(h) + 2);
                    q = h
                }
            }
            if (p.showaggregates && p._updateaggregates) {
                p._updateaggregates()
            }
            if (p.showfilterrow && p.filterable && p._updatefilterrowui) {
                p._updatefilterrowui()
            }
            if (p.showeverpresentrow) {
                p._updateaddnewrowui()
            }
            p._updatescrollbarsafterrowsprerender();
            if (k) {
                p._renderrows(p.virtualsizeinfo)
            }
        },
        _updatescrollbarsafterrowsprerender: function() {
            var g = this.that;
            var f = g.hScrollBar[0].style.visibility;
            var i = 0;
            var d = g.vScrollBar[0].style.visibility;
            if (d == "visible") {
                i = g.scrollbarsize + 3
            }
            if (g.scrollbarsize == 0) {
                i = 0
            }
            if (g.scrollbarautoshow) {
                i = 0
            }
            var e = g.element.style.width;
            if (e.toString().indexOf("%") >= 0) {
                e = g.host.width()
            } else {
                e = parseInt(e)
            }
            if (parseInt(g.table[0].style.width) - 2 > e - i) {
                if (f != "visible") {
                    if (!g.autowidth) {
                        g.hScrollBar[0].style.visibility = "visible"
                    }
                    g._arrange()
                }
                if (d == "visible") {
                    if (g.scrollmode != "deferred" && !g.virtualmode) {
                        if (g.virtualsizeinfo) {
                            var h = g.virtualsizeinfo.virtualheight - g._gettableheight();
                            if (!isNaN(h) && h > 0) {
                                if (f != "hidden") {
                                    g.vScrollBar.jqxScrollBar("max", h + g.scrollbarsize + 4)
                                } else {
                                    g.vScrollBar.jqxScrollBar("max", h)
                                }
                            }
                        }
                    } else {
                        g._updatevscrollbarmax()
                    }
                } else {
                    i = -2
                }
                g.hScrollBar.jqxScrollBar("max", i + g.table.width() - g.host.width())
            } else {
                if (f != "hidden") {
                    g.hScrollBar.css("visibility", "hidden");
                    g._arrange()
                }
            }
            g._renderhorizontalscroll()
        },
        _hascolumnstyle: function() {
            if (undefined !== this._hascolumnstyles) {
                return this._hascolumnstyles
            }
            this._hascolumnstyles = false;
            for (var d = 0; d < this.columns.records.length; d++) {
                var e = this.columns.records[d];
                if (e.style.headerBackgroundColor || e.style.headerColor || e.style.headerBackgroundHoveredColor || e.style.headerHoveredColor || e.style.headerBackgroundSelectedColor || e.style.headerSelectedColor || e.style.backgroundColor || e.style.color || e.style.backgroundHoveredColor || e.style.hoveredColor || e.style.backgroundSelectedColor || e.style.selectedColor) {
                    this._hascolumnstyles = true;
                    return true
                }
            }
            return false
        },
        _prerenderrows: function(o) {
            var C = this.that;
            if (C.prerenderrequired == true) {
                C.prerenderrequired = false;
                if (C.editable && C._destroyeditors) {
                    C._destroyeditors()
                }
                if (C.gridcontent == undefined) {
                    return
                }
                C.gridcontent.find("#contenttable" + C.element.id).remove();
                if (C.table != null) {
                    C.table.remove();
                    C.table = null
                }
                C.table = b('<div id="contenttable' + C.element.id + '" style="overflow: hidden; position: relative;"></div>');
                C.gridcontent.addClass(C.toTP("jqx-grid-content"));
                C.gridcontent.addClass(C.toTP("jqx-widget-content"));
                C.gridcontent.append(C.table);
                var B = C.groupable && C.groups.length > 0;
                var p = 0;
                C.table[0].rows = new Array();
                var l = C.toTP("jqx-grid-cell");
                if (B) {
                    l = " " + C.toTP("jqx-grid-group-cell")
                }
                var u = o.visiblerecords;
                if (C.pageable && (C.autoheight || C.autorowheight)) {
                    u = C.dataview.pagesize;
                    if (C.groupable) {
                        C.dataview.updateview();
                        u = C.dataview.rows.length;
                        if (u < C.dataview.pagesize) {
                            u = C.dataview.pagesize
                        }
                    }
                }
                if (!C.pageable && (C.autoheight || C.autorowheight)) {
                    u = C.dataview.totalrecords
                }
                if (C.groupable && C.groups.length > 0 && (C.autoheight || C.autorowheight) && !C.pageable) {
                    u = C.dataview.rows.length
                }
                if (C.rowdetails) {
                    if (C.autoheight || C.autorowheight) {
                        u += C.dataview.pagesize
                    } else {
                        u += u
                    }
                }
                if (!C.columns.records) {
                    return
                }
                var A = C.columns.records.length;
                if (b.jqx.browser.msie && b.jqx.browser.version > 8) {
                    C.table.css("opacity", "0.99")
                }
                if (b.jqx.browser.mozilla) {}
                if (navigator.userAgent.indexOf("Safari") != -1) {
                    C.table.css("opacity", "0.99")
                }
                var r = b.jqx.browser.msie && b.jqx.browser.version < 8;
                if (r) {
                    C.host.attr("hideFocus", "true")
                }
                var k = C.tableZIndex;
                if (u * A > k) {
                    k = u * A
                }
                var g = C.dataview.records.length == 0;
                var n = C.isTouchDevice();
                var v = "";
                C._hiddencolumns = false;
                var D = 5 + C.columns.records.length;
                for (var z = 0; z < u; z++) {
                    var s = '<div role="row" style="position: relative; height:' + C.rowsheight + 'px;" id="row' + z + C.element.id + '">';
                    if (r) {
                        var s = '<div role="row" style="position: relative; z-index: ' + k + "; height:" + C.rowsheight + 'px;" id="row' + z + C.element.id + '">';
                        k--
                    }
                    var f = 0;
                    for (var x = 0; x < A; x++) {
                        var w = C.columns.records[x];
                        var t = w.width;
                        if (t < w.minwidth) {
                            t = w.minwidth
                        }
                        if (t > w.maxwidth) {
                            t = w.maxwidth
                        }
                        if (C.rtl) {
                            var q = k - A + 2 * x;
                            var d = '<div columnindex="' + x + '" role="gridcell" style="left: ' + f + "px; z-index: " + q + "; width:" + t + "px;";
                            k--
                        } else {
                            var d = '<div columnindex="' + x + '" role="gridcell" style="left: ' + f + "px; z-index: " + k-- + "; width:" + t + "px;"
                        }
                        if (!(w.hidden && w.hideable) && !w.adaptivehidden) {
                            f += t
                        } else {
                            d += "display: none;";
                            C._hiddencolumns = true;
                            k++
                        }
                        if (z === 0 && x === 0) {
                            d += '" tabindex="' + D + '"'
                        }
                        d += '" class="' + l + '">';
                        var y = this._defaultcellsrenderer("", w);
                        d += y;
                        d += "</div>";
                        s += d
                    }
                    if (p == 0) {
                        C.table.width(parseInt(f) + 2);
                        p = f
                    }
                    s += "</div>";
                    v += s
                }
                if (C.WinJS) {
                    MSApp.execUnsafeLocalFunction(function() {
                        C.table.html(v)
                    })
                } else {
                    C.table[0].innerHTML = v
                }
                C.table[0].rows = new Array();
                var m = C.table.children();
                for (var z = 0; z < u; z++) {
                    var h = m[z];
                    C.table[0].rows.push(h);
                    h.cells = new Array();
                    var e = b(h).children();
                    for (var x = 0; x < A; x++) {
                        h.cells.push(e[x])
                    }
                }
                if (u == 0) {
                    var f = 0;
                    if (C.showemptyrow) {
                        var s = b('<div style="position: relative;" id="row0' + C.element.id + '"></div>');
                        C.table.append(s);
                        s.height(C.rowsheight);
                        C.table[0].rows[0] = s[0];
                        C.table[0].rows[0].cells = new Array()
                    }
                    for (var x = 0; x < A; x++) {
                        var w = C.columns.records[x];
                        var t = w.width;
                        if (C.showemptyrow) {
                            var d = b('<div style="position: absolute; height: 100%; left: ' + f + "px; z-index: " + k-- + "; width:" + t + 'px;" class="' + l + '"></div>');
                            d.height(C.rowsheight);
                            s.append(d);
                            C.table[0].rows[0].cells[x] = d[0]
                        }
                        if (t < w.minwidth) {
                            t = w.minwidth
                        }
                        if (t > w.maxwidth) {
                            t = w.maxwidth
                        }
                        if (!(w.hidden && w.hideable) && !w.adaptivehidden) {
                            f += t
                        }
                    }
                    C.table.width(parseInt(f) + 2);
                    p = f
                }
                C._updatescrollbarsafterrowsprerender();
                if (C.rendered) {
                    C.rendered("rows")
                }
                C.toCompile = new Array();
                C._addoverlayelement()
            }
        },
        _groupsheader: function() {
            return this.groupable && this.showgroupsheader
        },
        _arrange: function() {
            var A = null;
            var x = null;
            this.tableheight = null;
            var F = this.that;
            var n = false;
            var m = false;
            if (F.width != null && F.width.toString().indexOf("px") != -1) {
                A = F.width
            } else {
                if (F.width != undefined && !isNaN(F.width)) {
                    A = F.width
                }
            }
            if (F.width != null && F.width.toString().indexOf("%") != -1) {
                A = F.width;
                n = true
            }
            if (F.scrollbarautoshow) {
                F.vScrollBar[0].style.display = "none";
                F.hScrollBar[0].style.display = "none";
                F.vScrollBar[0].style.zIndex = F.tableZIndex + F.headerZIndex;
                F.hScrollBar[0].style.zIndex = F.tableZIndex + F.headerZIndex
            }
            if (F.autowidth) {
                var p = 0;
                for (var B = 0; B < F.columns.records.length; B++) {
                    var e = F.columns.records[B].width;
                    if (e == "auto") {
                        e = F._measureElementWidth(F.columns.records[B].text);
                        p += e
                    } else {
                        p += e
                    }
                }
                if (F.vScrollBar.css("visibility") != "hidden") {
                    p += F.scrollbarsize + 4
                }
                A = p;
                F.width = A
            }
            if (F.height != null && F.height.toString().indexOf("px") != -1) {
                x = F.height
            } else {
                if (F.height != undefined && !isNaN(F.height)) {
                    x = F.height
                }
            }
            if (F.height != null && F.height.toString().indexOf("%") != -1) {
                x = F.height;
                m = true
            }
            var k = function() {
                var i = 0;
                var w = F.showheader ? F.columnsheader != null ? F.columnsheader.height() + 2 : 0 : 0;
                i += w;
                if (F.pageable) {
                    i += F.pagerheight
                }
                if (F._groupsheader()) {
                    i += F.groupsheaderheight
                }
                if (F.showtoolbar) {
                    i += F.toolbarheight
                }
                if (F.showfilterbar) {
                    i += F.toolbarheight
                }
                if (F.showstatusbar) {
                    i += F.statusbarheight
                }
                if (F.showeverpresentrow && F.everpresentrowposition === "bottom") {
                    i += F.everpresentrowheight
                }
                if (F.hScrollBar[0].style.visibility == "visible") {
                    i += 15
                }
                return i
            };
            if (F.autoheight && F.virtualsizeinfo) {
                if (F.pageable && F.gotopage) {
                    var C = 0;
                    x = C + (F._pageviews[0] ? F._pageviews[0].height : 0);
                    x += k();
                    if (F.showemptyrow && F.dataview.totalrecords == 0) {
                        x += F.rowsheight
                    }
                } else {
                    var C = F.host.height() - F._gettableheight();
                    if (F._pageviews.length > 0) {
                        x = C + F._pageviews[F._pageviews.length - 1].height + F._pageviews[F._pageviews.length - 1].top;
                        F.vScrollBar[0].style.visibility = "hidden"
                    } else {
                        x = k();
                        if (F.showemptyrow) {
                            x += F.rowsheight
                        }
                    }
                }
            } else {
                if (F.autoheight) {
                    x = F.dataview.totalrecords * F.rowsheight;
                    if (F.pageable && F.gotopage) {
                        x = F.pagesize * F.rowsheight
                    }
                    if (F._loading) {
                        x = 250;
                        F.dataloadelement.height(x)
                    }
                    x += k();
                    if (x > 10000) {
                        x = 10000
                    }
                }
            }
            if (A != null) {
                A = parseInt(A);
                if (!n) {
                    if (F.element.style.width != parseInt(F.width) + "px") {
                        F.element.style.width = parseInt(F.width) + "px"
                    }
                } else {
                    F.element.style.width = F.width
                }
                if (n) {
                    A = F.host.width();
                    if (A <= 2) {
                        A = 600;
                        F.host.width(A)
                    }
                    if (!F._oldWidth) {
                        F._oldWidth = A
                    }
                }
            } else {
                F.host.width(250)
            }
            if (x != null) {
                if (this.autoheight) {
                    x += 2
                }
                if (!m) {
                    x = parseInt(x)
                }
                if (!m) {
                    if (F.element.style.height != parseInt(x) + "px") {
                        F.element.style.height = parseInt(x) + "px"
                    }
                } else {
                    F.element.style.height = F.height
                }
                if (m && !F.autoheight) {
                    x = F.host.height();
                    if (x == 0) {
                        x = 400;
                        F.host.height(x)
                    }
                    if (!F._oldHeight) {
                        F._oldHeight = x
                    }
                }
            } else {
                F.host.height(250)
            }
            if (F.autoheight) {
                F.tableheight = null;
                F._gettableheight()
            }
            var v = 0;
            if (F.showtoolbar) {
                F.toolbar.width(A);
                F.toolbar.height(F.toolbarheight - 1);
                F.toolbar.css("top", 0);
                v += F.toolbarheight;
                x -= parseInt(F.toolbarheight)
            } else {
                F.toolbar[0].style.height = "0px"
            }
            if (F.showfilterbar) {
                F.filterbar.width(A);
                F.filterbar.height(F.toolbarheight - 1);
                F.filterbar.css("top", v);
                v += F.toolbarheight;
                x -= parseInt(F.toolbarheight)
            } else {
                F.filterbar[0].style.height = "0px"
            }
            if (F.showstatusbar) {
                if (F.showaggregates) {
                    F.statusbar.width(!F.table ? A : Math.max(A, F.table.width()))
                } else {
                    F.statusbar.width(A)
                }
                F.statusbar.height(F.statusbarheight)
            } else {
                F.statusbar[0].style.height = "0px"
            }
            if (F.showeverpresentrow && F.everpresentrowposition === "bottom") {
                F.addnewrow.width(A);
                F.addnewrow.height(F.everpresentrowheight)
            } else {
                F.addnewrow[0].style.height = "0px"
            }
            if (F._groupsheader()) {
                F.groupsheader.width(A);
                F.groupsheader.height(F.groupsheaderheight);
                F.groupsheader.css("top", v);
                var y = F.groupsheader.height() + 1;
                v += y;
                if (x > y) {
                    x -= parseInt(y)
                }
            } else {
                if (F.groupsheader[0].style.width != A + "px") {
                    F.groupsheader[0].style.width = parseInt(A) + "px"
                }
                F.groupsheader[0].style.height = "0px";
                if (F.groupsheader[0].style.top != v + "px") {
                    F.groupsheader.css("top", v)
                }
                var y = F.showgroupsheader && F.groupable ? F.groupsheaderheight : 0;
                var f = v + y + "px";
                if (F.content[0].style.top != f) {
                    F.content.css("top", v + F.groupsheaderheight)
                }
            }
            var d = F.scrollbarsize;
            if (isNaN(d)) {
                d = parseInt(d);
                if (isNaN(d)) {
                    d = "17px"
                } else {
                    d = d + "px"
                }
            }
            d = parseInt(d);
            var s = 4;
            var h = 2;
            var j = 0;
            if (F.vScrollBar[0].style.visibility == "visible") {
                j = d + s
            }
            if (F.hScrollBar[0].style.visibility == "visible") {
                h = d + s + 2
            }
            if (d == 0) {
                j = 0;
                h = 0
            }
            var r = 0;
            if (F.pageable) {
                r = F.pagerheight;
                h += F.pagerheight
            }
            if (F.showstatusbar) {
                h += F.statusbarheight;
                r += F.statusbarheight
            }
            if (F.showeverpresentrow && F.everpresentrowposition === "bottom") {
                h += F.everpresentrowheight;
                r += F.everpresentrowheight
            }
            if (F.hScrollBar[0].style.height != d + "px") {
                F.hScrollBar[0].style.height = parseInt(d) + "px"
            }
            if (F.hScrollBar[0].style.top != v + x - s - d - r + "px" || F.hScrollBar[0].style.left != "0px") {
                F.hScrollBar.css({
                    top: v + x - s - d - r + "px",
                    left: "0px"
                })
            }
            var q = F.hScrollBar[0].style.width;
            var l = false;
            var D = false;
            if (j == 0) {
                if (q != (A - 2) + "px") {
                    F.hScrollBar.width(A - 2);
                    l = true
                }
            } else {
                if (q != (A - d - s) + "px") {
                    F.hScrollBar.width(A - d - s + "px");
                    l = true
                }
            }
            if (!F.autoheight) {
                if (F.vScrollBar[0].style.width != d + "px") {
                    F.vScrollBar.width(d);
                    D = true
                }
                if (F.vScrollBar[0].style.height != parseInt(x) - h + "px") {
                    F.vScrollBar.height(parseInt(x) - h + "px");
                    D = true
                }
                if (F.vScrollBar[0].style.left != parseInt(A) - parseInt(d) - s + "px" || F.vScrollBar[0].style.top != v + "px") {
                    F.vScrollBar.css({
                        left: parseInt(A) - parseInt(d) - s + "px",
                        top: v
                    })
                }
            }
            if (F.rtl) {
                F.vScrollBar.css({
                    left: "0px",
                    top: v
                });
                if (F.vScrollBar.css("visibility") != "hidden") {
                    F.hScrollBar.css({
                        left: d + 2
                    })
                }
            }
            var o = F.vScrollInstance;
            o.disabled = F.disabled;
            if (!F.autoheight) {
                if (D) {
                    o.refresh()
                }
            }
            var z = F.hScrollInstance;
            z.disabled = F.disabled;
            if (l) {
                z.refresh()
            }
            if (F.autowidth) {
                F.hScrollBar[0].style.visibility = "hidden"
            }
            F.statusbarheight = parseInt(F.statusbarheight);
            F.toolbarheight = parseInt(F.toolbarheight);
            var t = function(w) {
                if ((w.vScrollBar[0].style.visibility == "visible") && (w.hScrollBar[0].style.visibility == "visible")) {
                    w.bottomRight[0].style.visibility = "visible";
                    w.bottomRight.css({
                        left: 1 + parseInt(w.vScrollBar.css("left")),
                        top: parseInt(w.hScrollBar.css("top"))
                    });
                    if (w.rtl) {
                        w.bottomRight.css("left", "0px")
                    }
                    w.bottomRight.width(parseInt(d) + 3);
                    w.bottomRight.height(parseInt(d) + 4);
                    var G = w.showeverpresentrow && w.everpresentrowposition == "bottom";
                    var i = G ? w.everpresentrowheight : 0;
                    if (i > 0 && !w.showaggregates) {
                        w.bottomRight.css("z-index", 99);
                        w.bottomRight.height(parseInt(d) + 4 + i);
                        w.bottomRight.css({
                            top: parseInt(w.hScrollBar.css("top")) - i
                        })
                    }
                    if (w.showaggregates) {
                        w.bottomRight.css("z-index", 99);
                        w.bottomRight.height(parseInt(d) + 4 + w.statusbarheight + i);
                        w.bottomRight.css({
                            top: parseInt(w.hScrollBar.css("top")) - w.statusbarheight - i
                        })
                    }
                } else {
                    w.bottomRight[0].style.visibility = "hidden"
                }
            };
            t(this);
            if (F.content[0].style.width != A - j + "px") {
                F.content.width(A - j)
            }
            if (F.content[0].style.height != x - h + 3 + "px") {
                F.content.height(x - h + 3)
            }
            if (F.scrollbarautoshow) {
                if (F.content[0].style.width != A + "px") {
                    F.content.width(A)
                }
                if (F.content[0].style.height != x + "px") {
                    F.content.height(x)
                }
            }
            if (F.content[0].style.top != v + "px") {
                F.content.css("top", v)
            }
            if (F.rtl) {
                F.content.css("left", j);
                if (F.scrollbarautoshow) {
                    F.content.css("left", "0px")
                }
                if (F.table) {
                    var u = F.table.width();
                    if (u < A - j) {
                        F.content.css("left", A - u)
                    }
                }
            }
            if (F.showstatusbar) {
                F.statusbar.css("top", v + x - F.statusbarheight - (F.pageable ? F.pagerheight : 0));
                if (F.showaggregates) {
                    if (F.hScrollBar.css("visibility") == "visible") {
                        F.hScrollBar.css({
                            top: v + x - s - d - r + F.statusbarheight + "px"
                        });
                        F.statusbar.css("top", 1 + v + x - d - 5 - F.statusbarheight - (F.pageable ? F.pagerheight : 0))
                    }
                    t(this)
                }
                if (F.rtl) {
                    if (F.hScrollBar.css("visibility") != "visible") {
                        F.statusbar.css("left", F.content.css("left"))
                    } else {
                        F.statusbar.css("left", "0px")
                    }
                }
            }
            if (F.showeverpresentrow && F.everpresentrowposition === "bottom") {
                F.addnewrow.css("top", v + x - (F.showstatusbar ? F.statusbarheight : 0) - (F.pageable ? F.pagerheight : 0) - F.everpresentrowheight);
                if (F.rtl) {
                    if (F.hScrollBar.css("visibility") != "visible") {
                        F.addnewrow.css("left", F.content.css("left"))
                    } else {
                        F.addnewrow.css("left", "0px")
                    }
                }
            }
            if (F.pageable) {
                F.pager.width(A);
                F.pager.height(F.pagerheight);
                F.pager.css("top", v + x - F.pagerheight - 1)
            } else {
                F.pager[0].style.height = "0px"
            }
            if (F.table != null) {
                var g = -2;
                if (F.vScrollBar[0].style.visibility == "visible") {
                    g = F.scrollbarsize + 3
                }
                if (F.hScrollBar[0].style.visibility == "visible") {
                    var E = g + F.table.width() - F.host.width();
                    if (E >= 0) {
                        F.hScrollBar.jqxScrollBar("max", E)
                    }
                    if (F.hScrollBar[0].style.visibility == "visible" && E == 0) {
                        F.hScrollBar[0].style.visibility = "hidden";
                        F._arrange()
                    }
                }
            }
            if (A != parseInt(F.dataloadelement[0].style.width)) {
                F.dataloadelement[0].style.width = F.element.style.width
            }
            if (x != parseInt(F.dataloadelement[0].style.height)) {
                F.dataloadelement[0].style.height = F.element.style.height
            }
            if (this.pagergotoinput) {
                if (this.pagergotoinput.offset().top !== this.pagergoto.offset().top) {
                    this.pagergotoinput.css("visibility", "hidden");
                    this.pagergoto.css("visibility", "hidden")
                } else {
                    this.pagergotoinput.css("visibility", "inherit");
                    this.pagergoto.css("visibility", "inherit")
                }
            }
            F._hostwidth = A
        },
        destroy: function() {
            delete b.jqx.dataFormat.datescache;
            delete this.gridlocalization;
            delete this._undoRedo;
            b.jqx.utilities.resize(this.host, null, true);
            if (document.referrer != "" || window.frameElement) {
                if (window.top != null && window.top != window.self) {
                    this.removeHandler(b(window.top.document), "mouseup.grid" + this.element.id)
                }
            }
            if (this.table && this.table[0]) {
                var m = this.table[0].rows.length;
                for (var k = 0; k < m; k++) {
                    var q = this.table[0].rows[k];
                    var p = q.cells;
                    var f = p.length;
                    for (var h = 0; h < f; h++) {
                        b(q.cells[h]).remove();
                        q.cells[h] = null;
                        delete q.cells[h]
                    }
                    q.cells = null;
                    if (q.cells) {
                        delete q.cells
                    }
                    b(this.table[0].rows[k]).remove();
                    this.table[0].rows[k] = null
                }
                try {
                    delete this.table[0].rows
                } catch (n) {}
                this.table.remove();
                delete this.table
            }
            if (this.columns && this.columns.records) {
                for (var k = 0; k < this.columns.records.length; k++) {
                    var e = this.columns.records[k];
                    if (e.addnewrowwidget) {
                        if (e.destroyeverpresentrowwidget) {
                            e.destroyeverpresentrowwidget(e.addnewrowwidget)
                        }
                    }
                    if (e.destroywidget) {
                        if (e.destroywidget) {
                            e.destroywidget(e.widget)
                        }
                    }
                    this._removecolumnhandlers(this.columns.records[k]);
                    if (e.element) {
                        b(e.element).remove();
                        b(e.sortasc).remove();
                        b(e.sortdesc).remove();
                        b(e.filtericon).remove();
                        b(e.menu).remove();
                        e.element = null;
                        e.uielement = null;
                        e.sortasc = null;
                        e.sortdesc = null;
                        e.filtericon = null;
                        e.menu = null;
                        delete e.element;
                        delete e.uielement;
                        delete e.sortasc;
                        delete e.sortdesc;
                        delete e.filtericon;
                        delete e.menu;
                        delete this.columnsrow[0].cells[k]
                    }
                }
                try {
                    delete this.columnsrow[0].cells
                } catch (n) {}
                delete this.columnsrow
            }
            b.removeData(document.body, "contextmenu" + this.element.id);
            if (this.host.jqxDropDownList) {
                if (this._destroyfilterpanel) {
                    this._destroyfilterpanel()
                }
            }
            if (this.editable && this._destroyeditors) {
                this._destroyeditors()
            }
            if (this.filterable && this._destroyedfilters && this.showfilterrow) {
                this._destroyedfilters()
            }
            if (this.host.jqxMenu) {
                if (this.gridmenu) {
                    this.removeHandler(b(document), "click.menu" + this.element.id);
                    this.removeHandler(this.gridmenu, "keydown");
                    this.removeHandler(this.gridmenu, "closed");
                    this.removeHandler(this.gridmenu, "itemclick");
                    this.gridmenu.jqxMenu("destroy");
                    this.gridmenu = null
                }
            }
            if (this.pagershowrowscombo) {
                this.pagershowrowscombo.jqxDropDownList("destroy");
                this.pagershowrowscombo = null
            }
            if (this.pagerrightbutton) {
                this.removeHandler(this.pagerrightbutton, "mousedown");
                this.removeHandler(this.pagerrightbutton, "mouseup");
                this.removeHandler(this.pagerrightbutton, "click");
                this.pagerrightbutton.jqxButton("destroy");
                this.pagerrightbutton = null
            }
            if (this.pagerleftbutton) {
                this.removeHandler(this.pagerleftbutton, "mousedown");
                this.removeHandler(this.pagerleftbutton, "mouseup");
                this.removeHandler(this.pagerleftbutton, "click");
                this.pagerleftbutton.jqxButton("destroy");
                this.removeHandler(b(document), "mouseup.pagerbuttons" + this.element.id);
                this.pagerleftbutton = null
            }
            this.removeHandler(b(document), "selectstart." + this.element.id);
            this.removeHandler(b(document), "mousedown.resize" + this.element.id);
            this.removeHandler(b(document), "mouseup.resize" + this.element.id);
            this.removeHandler(b(document), "mousemove.resize" + this.element.id);
            if (this.isTouchDevice()) {
                var l = b.jqx.mobile.getTouchEventName("touchmove") + ".resize" + this.element.id;
                var d = b.jqx.mobile.getTouchEventName("touchstart") + ".resize" + this.element.id;
                var g = b.jqx.mobile.getTouchEventName("touchend") + ".resize" + this.element.id;
                this.removeHandler(b(document), l);
                this.removeHandler(b(document), d);
                this.removeHandler(b(document), g)
            }
            this.removeHandler(b(document), "mousedown.reorder" + this.element.id);
            this.removeHandler(b(document), "mouseup.reorder" + this.element.id);
            this.removeHandler(b(document), "mousemove.reorder" + this.element.id);
            if (this.isTouchDevice()) {
                var l = b.jqx.mobile.getTouchEventName("touchmove") + ".reorder" + this.element.id;
                var d = b.jqx.mobile.getTouchEventName("touchstart") + ".reorder" + this.element.id;
                var g = b.jqx.mobile.getTouchEventName("touchend") + ".reorder" + this.element.id;
                this.removeHandler(b(document), l);
                this.removeHandler(b(document), d);
                this.removeHandler(b(document), g)
            }
            this.removeHandler(b(window), "resize." + this.element.id);
            if (this.resizeline) {
                this.resizeline.remove()
            }
            if (this.resizestartline) {
                this.resizestartline.remove()
            }
            if (this.groupable) {
                var l = "mousemove.grouping" + this.element.id;
                var d = "mousedown.grouping" + this.element.id;
                var g = "mouseup.grouping" + this.element.id;
                this.removeHandler(b(document), l);
                this.removeHandler(b(document), d);
                this.removeHandler(b(document), g)
            }
            if (this.columnsreorder) {
                var l = "mousemove.reorder" + this.element.id;
                var d = "mousedown.reorder" + this.element.id;
                var g = "mouseup.reorder" + this.element.id;
                this.removeHandler(b(document), l);
                this.removeHandler(b(document), d);
                this.removeHandler(b(document), g);
                delete this.columnsbounds
            }
            if (this.content) {
                this.removeHandler(this.content, "mousedown");
                this.removeHandler(this.content, "scroll")
            }
            this._removeHandlers();
            this.hScrollInstance.destroy();
            this.vScrollInstance.destroy();
            this.hScrollBar.remove();
            this.vScrollBar.remove();
            this._clearcaches();
            delete this.hScrollInstance;
            delete this.vScrollInstance;
            delete this.visiblerows;
            delete this.hittestinfo;
            delete this.rows;
            delete this.columns;
            delete this.columnsbydatafield;
            delete this.pagescache;
            delete this.pageviews;
            delete this.cellscache;
            delete this.heights;
            delete this.hiddens;
            delete this.hiddenboundrows;
            delete this.heightboundrows;
            delete this.detailboundrows;
            delete this.details;
            delete this.expandedgroups;
            delete this._rowdetailscache;
            delete this._rowdetailselementscache;
            delete this.columnsmenu;
            if (this.columnsheader) {
                this.columnsheader.remove();
                delete this.columnsheader
            }
            if (this.selectionarea) {
                this.selectionarea.remove();
                delete this.selectionarea
            }
            if (this.menuitemsarray && this.menuitemsarray.length) {
                var o = this.menuitemsarray.length;
                for (var k = 0; k < o; k++) {
                    b(this.menuitemsarray[k]).remove()
                }
            }
            delete this.menuitemsarray;
            this.dataview._clearcaches();
            this.content.removeClass();
            this.content.remove();
            this.content = null;
            delete this.content;
            this.vScrollBar = null;
            this.hScrollBar = null;
            delete this.hScrollBar;
            delete this.hScrollBar;
            if (this.gridcontent) {
                this.gridcontent.remove();
                delete this.gridcontent
            }
            if (this.gridmenu) {
                this.gridmenu = null;
                delete this.gridmenu
            }
            delete this._mousemovefunc;
            delete this._mousewheelfunc;
            this.dataview.destroy();
            delete this.dataview;
            this.bottomRight.remove();
            delete this.bottomRight;
            this.wrapper.remove();
            delete this.wrapper;
            if (this.pagerdiv) {
                this.pagerdiv.remove();
                delete this.pagerdiv
            }
            if (this.pagerpageinput) {
                this.pagerpageinput.remove();
                delete this.pagerpageinput
            }
            if (this.pagergoto) {
                this.pagergoto.remove();
                delete this.pagergoto
            }
            if (this.pagershowrows) {
                this.pagershowrows.remove();
                delete this.pagershowrows
            }
            if (this.pagerfirstbutton) {
                this.pagerfirstbutton.remove();
                delete this.pagerfirstbutton
            }
            if (this.pagerlastbutton) {
                this.pagerlastbutton.remove();
                delete this.pagerlastbutton
            }
            if (this.pagerbuttons) {
                this.pagerbuttons.remove();
                delete this.pagerbuttons
            }
            if (this.pagerdetails) {
                this.pagerdetails.remove();
                delete this.pagerdetails
            }
            if (this.pagergotoinput) {
                this.pagergotoinput.remove();
                delete this.pagergotoinput
            }
            this.pager.remove();
            delete this.pager;
            this.groupsheader.remove();
            delete this.groupsheader;
            this.dataloadelement.remove();
            delete this.dataloadelement;
            this.toolbar.remove();
            delete this.toolbar;
            this.statusbar.remove();
            delete this.statusbar;
            this.host.removeData();
            this.host.removeClass();
            this.host.remove();
            this.host = null;
            delete this.host;
            delete this.element;
            delete this.set;
            delete this.get;
            delete this.that;
            delete this.call
        },
        _initializeColumns: function() {
            var f = this.source ? this.source.datafields : null;
            if (f == null && this.source && this.source._source) {
                f = this.source._source.datafields
            }
            var k = f ? f.length > 0 : false;
            if (this.autogeneratecolumns) {
                var m = new Array();
                if (f) {
                    b.each(f, function() {
                        var i = {
                            datafield: this.name,
                            text: this.text || this.name,
                            cellsformat: this.format || ""
                        };
                        m.push(i)
                    })
                } else {
                    if (this.source.records.length > 0) {
                        var o = this.source.records[0];
                        for (var h in o) {
                            if (h != "uid") {
                                var g = {
                                    width: 100,
                                    datafield: h,
                                    text: h
                                };
                                m.push(g)
                            }
                        }
                    }
                }
                this.columns = m
            }
            if (this.columns && this.columns.records) {
                for (var j = 0; j < this.columns.records.length; j++) {
                    this._removecolumnhandlers(this.columns.records[j])
                }
            }
            var l = this.that;
            var e = new b.jqx.collection(this.element);
            var d = 0;
            this._haspinned = false;
            if (!this._columns) {
                this._columns = this.columns
            } else {
                this.columns = this._columns
            }
            if (this.groupable) {
                b.each(this.groups, function(i) {
                    var p = new c(l, this);
                    p.visibleindex = d++;
                    p.width = l.groupindentwidth;
                    e.add(p);
                    p.grouped = true;
                    p.filterable = false;
                    p.sortable = false;
                    p.editable = false;
                    p.resizable = false;
                    p.draggable = false
                })
            }
            if (this.rowdetails && this.showrowdetailscolumn) {
                var g = new c(l, this);
                g.visibleindex = d++;
                g.width = l.groupindentwidth;
                g.pinned = true;
                g.editable = false;
                g.filterable = false;
                g.draggable = false;
                g.groupable = false;
                g.resizable = false;
                e.add(g);
                l._haspinned = true
            }
            if (this.selectionmode == "checkbox") {
                var g = new c(l, null);
                g.visibleindex = d++;
                g.width = l.groupindentwidth;
                g.checkboxcolumn = true;
                g.editable = false;
                g.columntype = "checkbox";
                g.groupable = false;
                g.draggable = false;
                g.filterable = false;
                g.resizable = false;
                g.datafield = "_checkboxcolumn";
                e.add(g)
            }
            var n = new Array();
            b.each(this.columns, function(i) {
                if (l.columns[i] != undefined) {
                    var p = new c(l, this);
                    p.visibleindex = d++;
                    if (this.dataField != undefined) {
                        this.datafield = this.dataField
                    }
                    if (this.pinned) {
                        l._haspinned = true
                    }
                    if (l.showeverpresentrow) {
                        if (this.datafield === "addButtonColumn" || this.datafield === "resetButtonColumn" || this.datafield === "updateButtonColumn" || this.datafield === "deleteButtonColumn") {
                            p.editable = false;
                            p.groupable = false;
                            p.draggable = false;
                            p.filterable = false;
                            p.resizable = false;
                            p.menu = false
                        }
                    }
                    if (this.datafield == null) {
                        if (l.source && l.source._source && (l.source._source.datatype == "array")) {
                            if (!k) {
                                if (!l.source._source.datafields) {
                                    l.source._source.datafields = new Array();
                                    l.source._source.datafields.push({
                                        name: i.toString()
                                    })
                                } else {
                                    l.source._source.datafields.push({
                                        name: i.toString()
                                    })
                                }
                            }
                            this.datafield = i.toString();
                            this.displayfield = i.toString();
                            p.datafield = this.datafield;
                            p.displayfield = this.displayfield
                        }
                    } else {
                        if (n[this.datafield]) {
                            throw new Error("jqxGrid: Invalid column 'datafield' setting. jqxGrid's columns should be initialized with unique data fields.");
                            l.host.remove();
                            return false
                        } else {
                            n[this.datafield] = true
                        }
                    }
                    e.add(p)
                }
            });
            if (this.adaptive) {
                var g = new c(l, null);
                g.visibleindex = d++;
                g.width = l.groupindentwidth;
                g.editable = false;
                g.columntype = "adaptive";
                g.cellsalign = "center";
                g.groupable = false;
                g.draggable = false;
                g.menu = false;
                g.sortable = false;
                g.filterable = false;
                g.resizable = false;
                g.datafield = "_adaptivecolumn";
                e.add(g)
            }
            if (this.rtl) {
                e.records.reverse()
            }
            this.columns = e
        },
        _initializeRows: function() {
            var d = new b.jqx.collection(this.element);
            if (this.rows) {
                this.rows.clear()
            }
            this.rows = d
        },
        _raiseEvent: function(j, e) {
            if (e == undefined) {
                e = {
                    owner: null
                }
            }
            if (this._trigger === false) {
                return
            }
            var f = this.events[j];
            if (!this._camelCase) {
                f = f.toLowerCase()
            }
            if (j == 2 || j == 15) {
                if (this.showeverpresentrow && (this.everpresentrowactions.indexOf("delete") >= 0 || this.everpresentrowactions.indexOf("update") >= 0)) {
                    if (this.updateeverpresentrow) {
                        var i = this
                    }
                    setTimeout(function() {
                        i.updateeverpresentrow()
                    }, 50)
                }
            }
            var g = e;
            g.owner = this;
            var h = new b.Event(f);
            h.owner = this;
            h.args = g;
            var d = this.host.trigger(h);
            e = h.args;
            return d
        },
        wheel: function(f, e) {
            if (e.autoheight && e.hScrollBar.css("visibility") != "visible") {
                f.returnValue = true;
                return true
            }
            var g = 0;
            if (!f) {
                f = window.event
            }
            if (f.originalEvent && f.originalEvent.wheelDelta) {
                f.wheelDelta = f.originalEvent.wheelDelta
            }
            if (f.wheelDelta) {
                g = f.wheelDelta / 120
            } else {
                if (f.detail) {
                    g = -f.detail / 3
                }
            }
            if (g) {
                var d = e._handleDelta(g);
                if (d) {
                    if (f.preventDefault) {
                        f.preventDefault()
                    }
                    if (f.originalEvent != null) {
                        f.originalEvent.mouseHandled = true
                    }
                    if (f.stopPropagation != undefined) {
                        f.stopPropagation()
                    }
                }
                if (d) {
                    d = false;
                    f.returnValue = d;
                    return d
                } else {
                    return false
                }
            }
            if (f.preventDefault) {
                f.preventDefault()
            }
            f.returnValue = false
        },
        _handleDelta: function(f) {
            if (this.vScrollBar.css("visibility") != "hidden") {
                var e = this.vScrollInstance.value;
                if (f < 0) {
                    this.scrollDown()
                } else {
                    this.scrollUp()
                }
                var d = this.vScrollInstance.value;
                if (e != d) {
                    return true
                }
            } else {
                if (this.hScrollBar.css("visibility") != "hidden") {
                    var e = this.hScrollInstance.value;
                    if (f > 0) {
                        if (this.hScrollInstance.value > 2 * this.horizontalscrollbarstep) {
                            this.hScrollInstance.setPosition(this.hScrollInstance.value - 2 * this.horizontalscrollbarstep)
                        } else {
                            this.hScrollInstance.setPosition(0)
                        }
                    } else {
                        if (this.hScrollInstance.value < this.hScrollInstance.max) {
                            this.hScrollInstance.setPosition(this.hScrollInstance.value + 2 * this.horizontalscrollbarstep)
                        } else {
                            this.hScrollInstance.setPosition(this.hScrollInstance.max)
                        }
                    }
                    var d = this.hScrollInstance.value;
                    if (e != d) {
                        if (this._activeFilterElement) {
                            this._activeFilterElement.jqxDropDownList("close")
                        }
                        return true
                    }
                }
            }
            return false
        },
        scrollDown: function() {
            if (this.vScrollBar.css("visibility") == "hidden") {
                return
            }
            var d = this.vScrollInstance;
            if (d.value + this.rowsheight <= d.max) {
                d.setPosition(parseInt(d.value) + this.rowsheight)
            } else {
                d.setPosition(d.max)
            }
        },
        scrollUp: function() {
            if (this.vScrollBar.css("visibility") == "hidden") {
                return
            }
            var d = this.vScrollInstance;
            if (d.value - this.rowsheight >= d.min) {
                d.setPosition(parseInt(d.value) - this.rowsheight)
            } else {
                d.setPosition(d.min)
            }
        },
        _removeHandlers: function() {
            var d = this.that;
            d.removeHandler(b(window), "orientationchange.jqxgrid" + d.element.id);
            d.removeHandler(b(window), "orientationchanged.jqxgrid" + d.element.id);
            d.removeHandler(d.vScrollBar, "valueChanged");
            d.removeHandler(d.hScrollBar, "valueChanged");
            d.vScrollInstance.valueChanged = null;
            d.hScrollInstance.valueChanged = null;
            var e = "mousedown.jqxgrid";
            if (d.isTouchDevice()) {
                e = b.jqx.mobile.getTouchEventName("touchend")
            }
            d.removeHandler(d.host, "dblclick.jqxgrid");
            d.removeHandler(d.host, e);
            d.removeHandler(d.content, "mousemove", d._mousemovefunc);
            d.removeHandler(d.host, "mouseleave.jqxgrid");
            d.removeHandler(d.content, "mouseenter");
            d.removeHandler(d.content, "mouseleave");
            d.removeHandler(d.content, "mousedown");
            d.removeHandler(d.content, "scroll");
            d.removeHandler(d.content, "selectstart." + d.element.id);
            d.removeHandler(d.host, "dragstart." + d.element.id);
            d.removeHandler(d.host, "keydown.edit" + d.element.id);
            d.removeHandler(b(document), "keydown.edit" + d.element.id);
            d.removeHandler(b(document), "keyup.edit" + d.element.id);
            if (d._mousemovedocumentfunc) {
                d.removeHandler(b(document), "mousemove.selection" + d.element.id, d._mousemovedocumentfunc)
            }
            d.removeHandler(b(document), "mouseup.selection" + d.element.id);
            if (d._mousewheelfunc) {
                d.removeHandler(d.host, "mousewheel", d._mousewheelfunc)
            }
            if (d.editable) {
                d.removeHandler(b(document), "mousedown.gridedit" + d.element.id)
            }
            if (d.host.off) {
                d.content.off("mousemove");
                d.host.off("mousewheel")
            }
        },
        _addHandlers: function() {
            var e = this.that;
            var d = e.isTouchDevice();
            if (!d) {
                e.addHandler(e.host, "dragstart." + e.element.id, function(j) {
                    return false
                })
            }
            if (e.scrollbarautoshow) {
                e.addHandler(e.host, "mouseenter.gridscroll" + e.element.id, function(j) {
                    e.vScrollBar.fadeIn("fast");
                    e.hScrollBar.fadeIn("fast")
                });
                e.addHandler(e.host, "mouseleave.gridscroll" + e.element.id, function(j) {
                    if (!e.vScrollInstance.isScrolling() && !e.hScrollInstance.isScrolling()) {
                        e.vScrollBar.fadeOut("fast");
                        e.hScrollBar.fadeOut("fast")
                    }
                })
            }
            if (e.editable) {
                e.addHandler(b(document), "mousedown.gridedit" + e.element.id, function(m) {
                    if (e.editable && e.begincelledit) {
                        if (e.editcell) {
                            if (!e.vScrollInstance.isScrolling() && !e.vScrollInstance.isScrolling()) {
                                var r = e.host.coord();
                                var q = e.host.width();
                                var n = e.host.height();
                                var v = false;
                                var k = false;
                                var t = false;
                                if (m.pageY < r.top || m.pageY > r.top + n) {
                                    v = true;
                                    k = true
                                }
                                if (m.pageX < r.left || m.pageX > r.left + q) {
                                    v = true;
                                    t = true
                                }
                                if (v) {
                                    var u = false;
                                    if (e.editcell && e.editcell.editor) {
                                        switch (e.editcell.columntype) {
                                            case "datetimeinput":
                                                if (e.editcell.editor.jqxDateTimeInput && e.editcell.editor.jqxDateTimeInput("container") && e.editcell.editor.jqxDateTimeInput("container")[0].style.display == "block") {
                                                    var s = e.editcell.editor.jqxDateTimeInput("container").coord().top;
                                                    var j = e.editcell.editor.jqxDateTimeInput("container").coord().top + e.editcell.editor.jqxDateTimeInput("container").height();
                                                    if (k && (m.pageY < s || m.pageY > j)) {
                                                        v = true;
                                                        e.editcell.editor.jqxDateTimeInput("close")
                                                    } else {
                                                        return
                                                    }
                                                }
                                                break;
                                            case "combobox":
                                                if (e.editcell.editor.jqxComboBox && e.editcell.editor.jqxComboBox("container") && e.editcell.editor.jqxComboBox("container")[0].style.display == "block") {
                                                    var s = e.editcell.editor.jqxComboBox("container").coord().top;
                                                    var j = e.editcell.editor.jqxComboBox("container").coord().top + e.editcell.editor.jqxComboBox("container").height();
                                                    if (k && (m.pageY < s || m.pageY > j)) {
                                                        v = true;
                                                        e.editcell.editor.jqxComboBox("close")
                                                    } else {
                                                        return
                                                    }
                                                }
                                                break;
                                            case "dropdownlist":
                                                if (e.editcell.editor.jqxDropDownList && e.editcell.editor.jqxDropDownList("container") && e.editcell.editor.jqxDropDownList("container")[0].style.display == "block") {
                                                    var s = e.editcell.editor.jqxDropDownList("container").coord().top;
                                                    var j = e.editcell.editor.jqxDropDownList("container").coord().top + e.editcell.editor.jqxDropDownList("container").height();
                                                    if (k && (m.pageY < s || m.pageY > j)) {
                                                        v = true;
                                                        e.editcell.editor.jqxDropDownList("close")
                                                    } else {
                                                        return
                                                    }
                                                }
                                                break;
                                            case "template":
                                            case "custom":
                                                var l = ["jqxDropDownList", "jqxComboBox", "jqxDropDownButton", "jqxDateTimeInput"];
                                                var p = function(A) {
                                                    var z = e.editcell.editor.data();
                                                    if (z[A] && z[A].instance.container && z[A].instance.container[0].style.display == "block") {
                                                        var x = z[A].instance;
                                                        var B = x.container.coord().top;
                                                        var y = x.container.coord().top + x.container.height();
                                                        if (k && (m.pageY < B || m.pageY > y)) {
                                                            v = true;
                                                            x.close();
                                                            return true
                                                        } else {
                                                            return false
                                                        }
                                                    }
                                                };
                                                for (var o = 0; o < l.length; o++) {
                                                    var w = p(l[o]);
                                                    if (w == false) {
                                                        return
                                                    }
                                                }
                                                break
                                        }
                                    }
                                    e.endcelledit(e.editcell.row, e.editcell.column, false, true);
                                    e._oldselectedcell = null
                                }
                            }
                        }
                    }
                })
            }
            e.vScrollInstance.valueChanged = function(j) {
                if (e.virtualsizeinfo) {
                    e._closemenu();
                    if (e.scrollmode != "physical") {
                        e._renderrows(e.virtualsizeinfo);
                        e.currentScrollValue = j.currentValue
                    } else {
                        if (e.currentScrollValue != undefined && Math.abs(e.currentScrollValue - j.currentValue) >= 5) {
                            e._renderrows(e.virtualsizeinfo);
                            e.currentScrollValue = j.currentValue
                        } else {
                            e._renderrows(e.virtualsizeinfo);
                            e.currentScrollValue = j.currentValue
                        }
                    }
                    if (!e.pageable && !e.groupable && e.dataview.virtualmode) {
                        if (e.loadondemandupdate) {
                            clearTimeout(e.loadondemandupdate)
                        }
                        e.loadondemandupdate = setTimeout(function() {
                            e.loadondemand = true;
                            e._renderrows(e.virtualsizeinfo)
                        }, 100)
                    }
                    if (d) {
                        e._lastScroll = new Date()
                    }
                }
            };
            e.hScrollInstance.valueChanged = function(l) {
                if (e.virtualsizeinfo) {
                    e._closemenu();
                    var k = function() {
                        e._renderhorizontalscroll();
                        e._renderrows(e.virtualsizeinfo);
                        if (e.editcell && !e.editrow) {
                            if (e._showcelleditor && e.editcell.editing) {
                                if (!e.hScrollInstance.isScrolling()) {
                                    e._showcelleditor(e.editcell.row, e.getcolumn(e.editcell.column), e.editcell.element, e.editcell.init)
                                }
                            }
                        }
                    };
                    if (d) {
                        k()
                    } else {
                        var j = e._browser == undefined ? e._isIE10() : e._browser;
                        if (navigator && navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1) {
                            if (e._hScrollTimer) {
                                clearTimeout(e._hScrollTimer)
                            }
                            e._hScrollTimer = setTimeout(function() {
                                k()
                            }, 1)
                        } else {
                            if (b.jqx.browser.msie) {
                                if (e._hScrollTimer) {
                                    clearTimeout(e._hScrollTimer)
                                }
                                e._hScrollTimer = setTimeout(function() {
                                    k()
                                }, 0.01)
                            } else {
                                k()
                            }
                        }
                    }
                    if (d) {
                        e._lastScroll = new Date()
                    }
                }
            };
            e._mousewheelfunc = e._mousewheelfunc || function(j) {
                if (!e.editcell && e.enablemousewheel) {
                    e.wheel(j, e);
                    return false
                }
            };
            e.removeHandler(e.host, "mousewheel", e._mousewheelfunc);
            e.addHandler(e.host, "mousewheel", e._mousewheelfunc);
            var h = "mousedown.jqxgrid";
            if (d) {
                h = b.jqx.mobile.getTouchEventName("touchend")
            }
            e.addHandler(e.host, h, function(k) {
                if (e.isTouchDevice()) {
                    e._newScroll = new Date();
                    if (e._newScroll - e._lastScroll < 500) {
                        return false
                    }
                    if (b(k.target).ischildof(e.vScrollBar)) {
                        return false
                    }
                    if (b(k.target).ischildof(e.hScrollBar)) {
                        return false
                    }
                }
                e._mousedown = new Date();
                var j = e._handlemousedown(k, e);
                if (e.isNestedGrid) {
                    if (!e.resizablecolumn && !e.columnsreorder) {
                        k.stopPropagation()
                    }
                }
                e._lastmousedown = new Date();
                return j
            });
            if (!d) {
                e.addHandler(e.host, "dblclick.jqxgrid", function(k) {
                    if (e.editable && e.begincelledit && e.editmode == "dblclick") {
                        e._handledblclick(k, e)
                    } else {
                        if (b.jqx.browser.msie && b.jqx.browser.version < 9) {
                            var j = e._handlemousedown(k, e)
                        }
                    }
                    e.mousecaptured = false;
                    e._lastmousedown = new Date();
                    return true
                });
                e._mousemovefunc = function(j) {
                    if (e._handlemousemove) {
                        return e._handlemousemove(j, e)
                    }
                };
                e.addHandler(e.content, "mousemove", e._mousemovefunc);
                if (e._handlemousemoveselection) {
                    e._mousemovedocumentfunc = function(j) {
                        if (e._handlemousemoveselection) {
                            return e._handlemousemoveselection(j, e)
                        }
                    };
                    e.addHandler(b(document), "mousemove.selection" + e.element.id, e._mousemovedocumentfunc)
                }
                e.addHandler(b(document), "mouseup.selection" + e.element.id, function(k) {
                    if (e._handlemouseupselection) {
                        if (k.shiftKey) {
                            var j = e.editable;
                            e.editable = false;
                            e._handlemousedown(k, e);
                            e.mousecaptured = true;
                            e.editable = j
                        }
                        e._handlemouseupselection(k, e)
                    }
                })
            }
            try {
                if (document.referrer != "" || window.frameElement) {
                    if (window.top != null && window.top != window.self) {
                        var i = null;
                        if (window.parent && document.referrer) {
                            i = document.referrer
                        }
                        if (i && i.indexOf(document.location.host) != -1) {
                            var g = function(k) {
                                if (e._handlemouseupselection) {
                                    try {
                                        e._handlemouseupselection(k, e)
                                    } catch (j) {}
                                }
                            };
                            e.addHandler(b(window.top.document), "mouseup.grid" + e.element.id, g)
                        }
                    }
                }
            } catch (f) {}
            e.focused = false;
            if (!d) {
                e.addHandler(e.content, "mouseenter", function(j) {
                    e.focused = true;
                    if (e.wrapper) {
                        e.wrapper.attr("tabindex", 1);
                        e.content.attr("tabindex", 2)
                    }
                    if (e._overlayElement) {
                        if (e.vScrollInstance.isScrolling() || e.hScrollInstance.isScrolling()) {
                            e._overlayElement[0].style.visibility = "visible"
                        } else {
                            e._overlayElement[0].style.visibility = "hidden"
                        }
                    }
                });
                e.addHandler(e.content, "mouseleave", function(j) {
                    if (e._handlemousemove) {
                        if (e.enablehover) {
                            e._clearhoverstyle()
                        }
                    }
                    if (e._overlayElement) {
                        e._overlayElement[0].style.visibility = "hidden"
                    }
                    e.focused = false
                });
                if (e.groupable || e.columnsreorder) {
                    e.addHandler(b(document), "selectstart." + e.element.id, function(j) {
                        if (e.__drag === true) {
                            return false
                        }
                    })
                }
                e.addHandler(e.content, "selectstart." + e.element.id, function(j) {
                    if (e.enablebrowserselection) {
                        return true
                    }
                    if (e.showfilterrow) {
                        if (b(j.target).ischildof(e.filterrow)) {
                            return true
                        }
                    }
                    if (e.showeverpresentrow) {
                        if (b(j.target).ischildof(e.addnewrow)) {
                            return true
                        }
                        if (e.addnewrowtop) {
                            if (b(j.target).ischildof(e.addnewrowtop)) {
                                return true
                            }
                        }
                    }
                    if (j.target.className && j.target.className.indexOf("jqx-grid-widget") >= 0) {
                        return true
                    }
                    if (!e.editcell) {
                        return false
                    }
                    if (j.stopPropagation) {
                        j.stopPropagation()
                    }
                });
                e.addHandler(b(document), "keyup.edit" + e.element.id, function(j) {
                    e._keydown = false
                });
                e.addHandler(b(document), "keydown.edit" + e.element.id, function(l) {
                    if (e.adaptiveview) {
                        return true
                    }
                    e._keydown = true && !e.editcell;
                    var k = l.charCode ? l.charCode : l.keyCode ? l.keyCode : 0;
                    if (k === 20) {
                        if (!e._capsLock) {
                            e._capsLock = true
                        } else {
                            e._capsLock = false
                        }
                    }
                    if (e.handlekeyboardnavigation) {
                        if (e.focused || (l.target === e.element || b(l.target).ischildof(e.host))) {
                            var m = e.handlekeyboardnavigation(l);
                            if (m == true) {
                                return false
                            }
                        }
                    }
                    if (e.editable && e.editcell) {
                        if (k == 13 || k == 27 || k == 9 || k == 32) {
                            if (e._handleeditkeydown) {
                                j = e._handleeditkeydown(l, e)
                            }
                        }
                    }
                    if (k == 27) {
                        e.mousecaptured = false;
                        if (e.selectionarea.css("visibility") == "visible") {
                            e.selectionarea.css("visibility", "hidden")
                        }
                    }
                    if (b.jqx.browser.msie && b.jqx.browser.version < 12 && e.focused && !e.isNestedGrid) {
                        if (k == 13 && j == false) {
                            return j
                        }
                        var j = true;
                        var k = l.charCode ? l.charCode : l.keyCode ? l.keyCode : 0;
                        if (!e.editcell && e.editable && e.editmode != "programmatic") {
                            if (e._handleeditkeydown) {
                                j = e._handleeditkeydown(l, e)
                            }
                        }
                        if (j && e.keyboardnavigation && e._handlekeydown) {
                            j = e._handlekeydown(l, e);
                            if (!j) {
                                if (l.preventDefault) {
                                    l.preventDefault()
                                }
                                if (l.stopPropagation != undefined) {
                                    l.stopPropagation()
                                }
                            }
                            return j
                        }
                    }
                    return true
                });
                e.addHandler(e.host, "keyup.edit" + e.element.id, function(k) {
                    if (e.adaptiveview) {
                        return true
                    }
                    if (k.keyCode === 9) {
                        if (!b(document.activeElement).ischildof(e.filterrow)) {
                            if (!b(document.activeElement).ischildof(e.pager)) {
                                switch (e.selectionmode) {
                                    case "singlecell":
                                    case "multiplecells":
                                    case "multiplecellsextended":
                                    case "multiplecellsadvanced":
                                        var j = e.getselectedcell();
                                        if (j === null) {}
                                        break;
                                    default:
                                        var l = e.getselectedrowindex();
                                        if (l === -1) {}
                                        break
                                }
                            }
                        }
                    }
                });
                e.addHandler(e.host, "keydown.edit" + e.element.id, function(l) {
                    var j = true;
                    if (e.adaptiveview) {
                        return true
                    }
                    if (e.handlekeyboardnavigation) {
                        var m = e.handlekeyboardnavigation(l);
                        if (m == true) {
                            return false
                        }
                    }
                    if (e.editable && e.editmode != "programmatic") {
                        if (e._handleeditkeydown) {
                            j = e._handleeditkeydown(l, e);
                            if (e.isNestedGrid) {
                                l.stopPropagation()
                            }
                        }
                    }
                    if (!e.editcell && l.altKey) {
                        if (!b(document.activeElement).ischildof(e.filterrow)) {
                            if (!b(document.activeElement).ischildof(e.pager)) {
                                if (l.keyCode === 40) {
                                    var k = e.getselectedcell();
                                    if (k) {
                                        e.openmenu(k.column)
                                    }
                                } else {
                                    if (l.keyCode === 38) {
                                        e._closemenu()
                                    }
                                }
                            }
                        }
                    }
                    if (!(b.jqx.browser.msie && b.jqx.browser.version < 8)) {
                        if (j && e.keyboardnavigation && e._handlekeydown) {
                            j = e._handlekeydown(l, e);
                            if (e.isNestedGrid) {
                                l.stopPropagation()
                            }
                        }
                    } else {
                        if (e.isNestedGrid) {
                            if (j && e.keyboardnavigation && e._handlekeydown) {
                                j = e._handlekeydown(l, e);
                                l.stopPropagation()
                            }
                        }
                    }
                    if (!j) {
                        if (l.preventDefault) {
                            l.preventDefault()
                        }
                        if (l.stopPropagation != undefined) {
                            l.stopPropagation()
                        }
                    }
                    if (j && e.selectedcells && e.selectedcells.length > 0) {
                        if (l.keyCode === 9 && l.shiftKey && e.table && e.table[0].rows && e.table[0].rows.length > 0) {
                            if (!b(document.activeElement).ischildof(e.filterrow)) {
                                if (!b(document.activeElement).ischildof(e.pager)) {
                                    e.table[0].rows[0].cells[0].focus()
                                }
                            }
                        }
                    }
                    return j
                })
            }
        },
        _hittestrow: function(s, q) {
            if (this.vScrollInstance == null || this.hScrollInstance == null) {
                return
            }
            if (s == undefined) {
                s = 0
            }
            if (q == undefined) {
                q == 0
            }
            var l = this.vScrollInstance;
            var k = this.hScrollInstance;
            var f = l.value;
            if (this.vScrollBar.css("visibility") != "visible") {
                f = 0
            }
            var m = k.value;
            if (this.hScrollBar.css("visibility") != "visible") {
                m = 0
            }
            if (this.scrollmode == "deferred" && this._newmax != null) {
                if (f > this._newmax) {
                    f = this._newmax
                }
            }
            var r = parseInt(f) + q;
            var j = parseInt(m) + s;
            if (this.visiblerows == null) {
                return
            }
            if (this.visiblerows.length == 0) {
                return
            }
            var e = false;
            var i = this._findvisiblerow(r, this.visiblerows);
            if (i >= 0) {
                var o = this.visiblerows[i];
                var d = this.rowdetails && o.rowdetails;
                var n = !o.rowdetailshidden;
                if (d) {
                    var g = this.visiblerows[i - 1];
                    if (g == o) {
                        o = g;
                        i--
                    }
                    if (n) {
                        var h = b(this.hittestinfo[i].visualrow).position().top + parseInt(this.table.css("top"));
                        var p = b(this.hittestinfo[i].visualrow).height();
                        if (!(q >= h && q <= h + p)) {
                            i++;
                            o = this.visiblerows[i];
                            e = true
                        }
                    }
                }
            }
            return {
                index: i,
                row: o,
                details: e
            }
        },
        getcellatposition: function(j, q) {
            var r = this.that;
            var z = this.showheader ? this.columnsheader.height() + 2 : 0;
            var s = this._groupsheader() ? this.groupsheader.height() : 0;
            var C = this.showtoolbar ? this.toolbarheight : 0;
            var A = this.showfilterbar ? this.toolbarheight : 0;
            s += C;
            s += A;
            var g = this.host.coord();
            if (this.hasTransform) {
                g = b.jqx.utilities.getOffset(this.host)
            }
            var p = j - g.left;
            var n = q - z - g.top - s;
            var d = this._hittestrow(p, n);
            var k = d.row;
            var l = d.index;
            var t = this.table[0].rows[l];
            if (this.dataview && this.dataview.records.length == 0) {
                var o = this.table[0].rows;
                var D = 0;
                for (var w = 0; w < o.length; w++) {
                    if (n >= D && n < D + this.rowsheight) {
                        t = o[w];
                        break
                    }
                    D += this.rowsheight
                }
                k = {
                    boundindex: w
                }
            }
            if (t == null) {
                return true
            }
            var u = this.hScrollInstance;
            var v = u.value;
            var f = 0;
            var m = this.groupable ? this.groups.length : 0;
            for (var w = 0; w < t.cells.length; w++) {
                var h = parseInt(b(this.columnsrow[0].cells[w]).css("left"));
                var j = h - v;
                if (r.columns.records[w].pinned) {
                    j = h
                }
                if (r.columns.records[w].hidden || r.columns.records[w].adaptivehidden) {
                    continue
                }
                var B = j + b(this.columnsrow[0].cells[w]).width();
                if (B >= p && p >= j) {
                    f = w;
                    break
                }
            }
            if (k != null) {
                var e = this._getcolumnat(f);
                return {
                    row: this.getboundindex(k),
                    column: e.datafield,
                    value: this.getcellvalue(this.getboundindex(k), e.datafield)
                }
            }
            return null
        },
        _handlemousedown: function(Z, n) {
            if (Z.target == null) {
                return true
            }
            if (n.disabled) {
                return true
            }
            if (b(Z.target).ischildof(this.columnsheader) || b(Z.target).ischildof(this.hScrollBar) || b(Z.target).ischildof(this.vScrollBar)) {
                return true
            }
            if (Z.target === n.bottomRight[0]) {
                return true
            }
            var o;
            if (Z.which) {
                o = (Z.which == 3)
            } else {
                if (Z.button) {
                    o = (Z.button == 2)
                }
            }
            var R;
            if (Z.which) {
                R = (Z.which == 2)
            } else {
                if (Z.button) {
                    R = (Z.button == 1)
                }
            }
            if (R) {
                return true
            }
            if (this.adaptiveview) {
                if (b(Z.target).ischildof(b(this.adaptiveview))) {
                    return true
                }
                if (Z.target == this.adaptiveview) {
                    return true
                }
            }
            if (this.showstatusbar) {
                if (b(Z.target).ischildof(this.statusbar)) {
                    return true
                }
                if (Z.target == this.statusbar[0]) {
                    return true
                }
            }
            if (this.showtoolbar) {
                if (b(Z.target).ischildof(this.toolbar)) {
                    return true
                }
                if (Z.target == this.toolbar[0]) {
                    return true
                }
            }
            if (this.showfilterbar) {
                if (b(Z.target).ischildof(this.filterbar)) {
                    return true
                }
                if (Z.target == this.filterbar[0]) {
                    return true
                }
            }
            if (this.pageable) {
                if (b(Z.target).ischildof(this.pager)) {
                    return true
                }
                if (Z.target == this.pager[0]) {
                    return true
                }
            }
            if (!this.columnsheader) {
                return true
            }
            if (!this.editcell) {
                if (this.pageable) {
                    if (b(Z.target).ischildof(this.pager)) {
                        return true
                    }
                }
            }
            var X = this.showheader ? this.columnsheader.height() + 2 : 0;
            var C = this._groupsheader() ? this.groupsheader.height() : 0;
            var F = this.showtoolbar ? this.toolbarheight : 0;
            var U = this.showfilterbar ? this.toolbarheight : 0;
            C += F;
            C += U;
            var V = this.host.coord();
            if (this.hasTransform) {
                V = b.jqx.utilities.getOffset(this.host);
                var ac = this._getBodyOffset();
                V.left -= ac.left;
                V.top -= ac.top
            }
            var k = parseInt(Z.pageX);
            var l = parseInt(Z.pageY);
            if (this.isTouchDevice()) {
                var aa = n.getTouches(Z);
                var Q = aa[0];
                k = parseInt(Q.pageX);
                l = parseInt(Q.pageY);
                if (n.touchmode == true) {
                    if (Q._pageX != undefined) {
                        k = parseInt(Q._pageX);
                        l = parseInt(Q._pageY)
                    }
                }
            }
            var J = k - V.left;
            var I = l - X - V.top - C;
            if (this.pageable && !this.autoheight && this.gotopage) {
                var d = this.pager.coord().top - V.top - C - X;
                if (I > d) {
                    return
                }
            }
            var W = this._hittestrow(J, I);
            if (!W) {
                return
            }
            if (W.details) {
                return
            }
            var r = W.row;
            var E = W.index;
            var s = Z.target.className;
            var j = this.table[0].rows[E];
            if (j == null) {
                if (n.editable && n.begincelledit) {
                    if (n.editcell) {
                        n.endcelledit(n.editcell.row, n.editcell.column, false, true)
                    }
                }
                return true
            }
            n.mousecaptured = true;
            n.mousecaptureposition = {
                left: Z.pageX,
                top: Z.pageY - C,
                clickedrow: j
            };
            var m = this.hScrollInstance;
            var u = m.value;
            if (this.rtl) {
                if (this.hScrollBar.css("visibility") != "hidden") {
                    u = m.max - m.value
                }
            }
            var G = -1;
            var D = this.groupable ? this.groups.length : 0;
            if (this.rtl) {
                if (this.vScrollBar[0].style.visibility != "hidden") {
                    u -= this.scrollbarsize + 4
                }
                if (this.hScrollBar[0].style.visibility == "hidden") {
                    u = -parseInt(this.content.css("left"))
                }
            }
            for (var S = 0; S < j.cells.length; S++) {
                var T = parseInt(b(this.columnsrow[0].cells[S]).css("left"));
                var k = T - u;
                if (n.columns.records[S].pinned && !n.rtl) {
                    k = T
                }
                var L = this._getcolumnat(S);
                if (L != null && L.hidden) {
                    continue
                }
                if (L != null && L.adaptivehidden) {
                    continue
                }
                var N = k + b(this.columnsrow[0].cells[S]).width();
                if (N >= J && J >= k) {
                    G = S;
                    n.mousecaptureposition.clickedcell = S;
                    break
                }
            }
            if (this.rtl && this._haspinned) {
                for (var S = j.cells.length - 1; S >= 0; S--) {
                    if (!n.columns.records[S].pinned) {
                        break
                    }
                    var T = b(this.columnsrow[0].cells[S]).coord().left - this.host.coord().left;
                    var k = T;
                    var L = this._getcolumnat(S);
                    if (L != null && L.hidden) {
                        continue
                    }
                    if (L != null && L.adaptivehidden) {
                        continue
                    }
                    var N = k + b(this.columnsrow[0].cells[S]).width();
                    if (N >= J && J >= k) {
                        G = S;
                        n.mousecaptureposition.clickedcell = S;
                        break
                    }
                }
            }
            if (r != null && G >= 0) {
                this._raiseEvent(1, {
                    rowindex: this.getboundindex(r),
                    visibleindex: r.visibleindex,
                    row: r,
                    group: r.group,
                    rightclick: o,
                    originalEvent: Z
                });
                var L = this._getcolumnat(G);
                var O = this.getcellvalue(this.getboundindex(r), L.datafield);
                if (this.editable && this.editcell) {
                    this._currentEditableColumn = G;
                    if (L.datafield == this.editcell.column) {
                        if (this.getboundindex(r) == this.editcell.row) {
                            this.mousecaptured = false
                        }
                    }
                }
                if (L.columntype === "adaptive") {
                    var K = document.createElement("div");
                    var ab = document.createElement("div");
                    var A = document.createElement("a");
                    var w = document.createElement("a");
                    var f = document.createElement("div");
                    var M = this.getrowdata(this.getboundindex(r));
                    A.href = "#";
                    w.href = "#";
                    K.style.zIndex = 99999;
                    K.style.position = "absolute";
                    K.style.left = "0px";
                    K.style.top = "0px";
                    K.style.width = "100%";
                    K.style.height = "100%";
                    K.className = "jqx-adaptive-view jqx-widget-content";
                    f.style.position = "relative";
                    f.style.top = "100%";
                    f.style.textAlign = "center";
                    f.style.marginTop = "-40px";
                    ab.style.position = "absolute";
                    ab.style.left = "0px";
                    ab.style.top = "0px";
                    ab.style.width = "100%";
                    ab.style.height = "100%";
                    if (this.theme) {
                        K.className = "jqx-widget-content jqx-widget-content-" + this.theme
                    }
                    var e = document.createElement("span");
                    e.className = "jqx-icon-close";
                    if (this.theme) {
                        e.className = "jqx-icon-close jqx-widget-close-" + this.theme
                    }
                    e.style.zIndex = 99;
                    e.style.position = "absolute";
                    e.style.right = "10px";
                    e.style.top = "10px";
                    e.style.width = "16px";
                    e.style.height = "16px";
                    K.appendChild(ab);
                    K.appendChild(e);
                    A.innerHTML = this.gridlocalization.okstring;
                    w.innerHTML = this.gridlocalization.cancelstring;
                    A.addEventListener("mousedown", function(ae) {
                        var ag = {};
                        var x = n.adaptiveview.querySelectorAll("input");
                        for (var y = 0; y < x.length; y++) {
                            var af = n.escape_HTML(x[y].value);
                            var ad = x[y].getAttribute("data-column");
                            ag[ad] = af
                        }
                        n.updaterow(M.uid, ag);
                        K.parentNode.removeChild(K);
                        n.adaptiveview = null;
                        ae.stopPropagation();
                        return false
                    });
                    w.addEventListener("mousedown", function() {
                        K.parentNode.removeChild(K);
                        n.adaptiveview = null;
                        Z.stopPropagation();
                        return false
                    });
                    if (this.editable) {
                        f.appendChild(A);
                        f.appendChild(w);
                        K.appendChild(f)
                    }
                    var v = "<table class='jqx-adaptive-table'><tr>";
                    var E = 0;
                    for (var S = 0; S < this.columns.records.length; S++) {
                        var L = this.columns.records[S];
                        if (L.columntype === "adaptive") {
                            continue
                        }
                        if (S > 0 && E % 2 === 0) {
                            v += "</tr><tr>"
                        }
                        var B = M[L.displayfield];
                        if (L.cellsformat != "") {
                            if (b.jqx.dataFormat) {
                                if (b.jqx.dataFormat.isDate(B)) {
                                    B = b.jqx.dataFormat.formatdate(B, L.cellsformat, this.gridlocalization)
                                } else {
                                    if (b.jqx.dataFormat.isNumber(B)) {
                                        B = b.jqx.dataFormat.formatnumber(B, L.cellsformat, this.gridlocalization)
                                    }
                                }
                            }
                        }
                        var H = this.filterable ? '<div datafield="' + L.datafield + '" class="' + n.toTP("jqx-grid-column-filterbutton") + '" style="position: relative; top: 4px; display: inline-block; width: 16px; height:16px;"></div>' : "";
                        if (this.editable) {
                            if (L.editable) {
                                v += "<td>" + H + this.escape_HTML(L.text) + ": <input data-column='" + L.displayfield + "' value='" + B + "'/></td>"
                            } else {
                                v += "<td>" + H + this.escape_HTML(L.text) + ": <input data-column='" + L.displayfield + "' readonly value='" + B + "'/></td>"
                            }
                        } else {
                            v += "<td>" + H + this.escape_HTML(L.text) + ": " + B + "</td>"
                        }
                        E++
                    }
                    v += "</tr></table>";
                    ab.innerHTML = v;
                    e.addEventListener("mousedown", function(i) {
                        K.parentNode.removeChild(K);
                        n.adaptiveview = null
                    });
                    this.wrapper[0].appendChild(K);
                    this.adaptiveview = K;
                    b(this.adaptiveview).find(".jqx-grid-column-filterbutton").on("click", function() {
                        var i = this.getAttribute("datafield");
                        var x = this.offsetTop;
                        n.openmenu(i);
                        setTimeout(function() {
                            n.gridmenu.css("top", 30 + x);
                            n.gridmenu.css("left", 25);
                            n.gridmenu.css("z-index", 99999);
                            n.gridmenu.parent().css("z-index", 99999)
                        }, 300)
                    });
                    return
                }
                this._raiseEvent(8, {
                    rowindex: this.getboundindex(r),
                    column: L ? L.getcolumnproperties() : null,
                    row: r,
                    visibleindex: r.visibleindex,
                    datafield: L ? L.datafield : null,
                    columnindex: G,
                    value: O,
                    rightclick: o,
                    originalEvent: Z
                });
                if (L.createwidget) {
                    return true
                }
                if (this.isTouchDevice()) {
                    if (L.columntype == "checkbox" && this.editable && this._overlayElement) {
                        if (!this.editcell) {
                            this._overlayElement.css("visibility", "hidden");
                            this.editcell = this.getcell(E, L.datafield);
                            return true
                        }
                    } else {
                        if (L.columntype == "button" && this._overlayElement) {
                            if (L.buttonclick) {
                                L.buttonclick(j.cells[G].buttonrow, Z)
                            }
                            return true
                        }
                    }
                }
                var h = false;
                if (this._lastmousedown != null) {
                    if (this._mousedown - this._lastmousedown < 300) {
                        if (this._clickedrowindex == this.getboundindex(r)) {
                            this._raiseEvent(22, {
                                rowindex: this.getboundindex(r),
                                row: r,
                                visibleindex: r.visibleindex,
                                group: r.group,
                                rightclick: o,
                                originalEvent: Z
                            });
                            if (this._clickedcolumn == L.datafield) {
                                this._raiseEvent(23, {
                                    rowindex: this.getboundindex(r),
                                    row: r,
                                    visibleindex: r.visibleindex,
                                    column: L ? L.getcolumnproperties() : null,
                                    datafield: L ? L.datafield : null,
                                    columnindex: G,
                                    value: O,
                                    rightclick: o,
                                    originalEvent: Z
                                })
                            }
                            h = true;
                            this._clickedrowindex = -1;
                            this._clickedcolumn = null;
                            if (Z.isPropagationStopped && Z.isPropagationStopped()) {
                                return false
                            }
                        }
                    }
                }
                if (o) {
                    return true
                }
                if (!h) {
                    this._clickedrowindex = this.getboundindex(r);
                    this._clickedcolumn = L.datafield
                }
                var g = b.jqx.utilities.getBrowser();
                if (g.browser == "msie" && parseInt(g.version) <= 7) {
                    if (G == 0 && this.rowdetails) {
                        s = "jqx-grid-group-collapse"
                    }
                    if (D > 0) {
                        if (G <= D) {
                            s = "jqx-grid-group-collapse"
                        }
                    }
                }
                if (s.indexOf("jqx-grid-group-expand") != -1 || s.indexOf("jqx-grid-group-collapse") != -1) {
                    if (!this.rtl) {
                        if (D > 0 && G < D && this._togglegroupstate) {
                            this._togglegroupstate(r.bounddata, true)
                        } else {
                            if (G == D && this.rowdetails && this.showrowdetailscolumn) {
                                this._togglerowdetails(r.bounddata, true);
                                this.gridcontent[0].scrollTop = 0;
                                this.gridcontent[0].scrollLeft = 0
                            }
                        }
                    } else {
                        if (D > 0 && G > j.cells.length - D - 1 && this._togglegroupstate) {
                            this._togglegroupstate(r.bounddata, true)
                        } else {
                            if (G == j.cells.length - 1 - D && this.rowdetails && this.showrowdetailscolumn) {
                                this._togglerowdetails(r.bounddata, true);
                                this.gridcontent[0].scrollTop = 0;
                                this.gridcontent[0].scrollLeft = 0
                            }
                        }
                    }
                } else {
                    if (r.boundindex != -1) {
                        var p = this.selectedrowindexes.slice(0);
                        var Y = false;
                        if (n.selectionmode != "none" && n.selectionmode != "checkbox" && this._selectrowwithmouse) {
                            if (n.selectionmode == "multiplecellsadvanced" || n.selectionmode == "multiplecellsextended" || n.selectionmode == "multiplerowsextended" || n.selectionmode == "multiplerowsadvanced") {
                                if (!Z.ctrlKey && !Z.shiftKey && !Z.metaKey) {
                                    n.selectedrowindexes = new Array();
                                    n.selectedcells = new Array()
                                }
                            }
                            var z = false;
                            var q = this.getboundindex(r);
                            if (n._oldselectedrow === q || n.selectionmode === "none") {
                                z = true
                            }
                            if (n.selectionmode.indexOf("cell") == -1) {
                                if ((n.selectionmode != "singlerow") || (n.selectedrowindex != q && n.selectionmode == "singlerow")) {
                                    this._applyrowselection(q, true, false, null, L.datafield);
                                    this._selectrowwithmouse(n, W, p, L.datafield, Z.ctrlKey || Z.metaKey, Z.shiftKey)
                                }
                            } else {
                                if (L.datafield != null) {
                                    this._selectrowwithmouse(n, W, p, L.datafield, Z.ctrlKey || Z.metaKey, Z.shiftKey);
                                    if (!Z.shiftKey) {
                                        this._applycellselection(q, L.datafield, true, false)
                                    }
                                }
                            }
                            if (n._oldselectedcell) {
                                if (n._oldselectedcell.datafield == n.selectedcell.datafield && n._oldselectedcell.rowindex == n.selectedcell.rowindex) {
                                    Y = true
                                }
                            }
                            n._oldselectedcell = n.selectedcell;
                            n._oldselectedrow = q
                        }
                        if (n.autosavestate) {
                            if (n.savestate) {
                                n.savestate()
                            }
                        }
                        if (n.editable && n.begincelledit && n.editmode != "programmatic") {
                            if (Z.isPropagationStopped && Z.isPropagationStopped()) {
                                return false
                            }
                            if (n.editmode == "selectedrow") {
                                if (z && !n.editcell) {
                                    if (L.columntype !== "checkbox") {
                                        this._currentEditableColumn = G;
                                        var t = n.beginrowedit(this.getboundindex(r))
                                    }
                                } else {
                                    if (n.editcell && !z && n.selectionmode != "none") {
                                        var t = n.endrowedit(n.editcell.row)
                                    }
                                }
                            } else {
                                var q = this.getboundindex(r);
                                var P = n.editmode == "click" || (Y && n.editmode == "selectedcell");
                                if (n.selectionmode.indexOf("cell") == -1) {
                                    if (n.editmode != "dblclick") {
                                        P = true
                                    }
                                }
                                if (P) {
                                    if (r.boundindex != undefined && L.editable) {
                                        var t = n.begincelledit(this.getboundindex(r), L.datafield, L.defaulteditorvalue, false);
                                        if (n.selectionmode.indexOf("cell") != -1) {
                                            n._applycellselection(q, L.datafield, false, false)
                                        }
                                    }
                                }
                                if (n.selectionmode.indexOf("cell") != -1) {
                                    if (n.editmode == "selectedcell" && !Y && n.editcell) {
                                        n.endcelledit(n.editcell.row, n.editcell.column, false, true)
                                    }
                                }
                                if (n.editmode == "dblclick" && !Y && n.editcell && !(n.editcell.row == q && L.datafield == n.editcell.column)) {
                                    n.endcelledit(n.editcell.row, n.editcell.column, false, true)
                                }
                            }
                            return true
                        }
                    }
                }
            }
            return true
        },
        _columnPropertyChanged: function(e, d, g, f) {},
        _rowPropertyChanged: function(g, d, f, e) {},
        _serializeObject: function(d) {
            if (d == null) {
                return ""
            }
            var e = "";
            b.each(d, function(g) {
                var i = this;
                if (g > 0) {
                    e += ", "
                }
                e += "[";
                var f = 0;
                for (var h in i) {
                    if (f > 0) {
                        e += ", "
                    }
                    e += "{" + h + ":" + i[h] + "}";
                    f++
                }
                e += "]"
            });
            return e
        },
        isbindingcompleted: function() {
            return !this._loading
        },
        propertiesChangedHandler: function(d, e, f) {
            if (f.width && f.height && Object.keys(f).length == 2) {
                d._updatesize(true, true);
                d._resizeWindow();
                if (d.virtualmode && !d._loading) {
                    d.vScrollInstance.setPosition(0)
                } else {
                    setTimeout(function() {
                        d._renderrows(d.virtualsizeinfo)
                    }, 100)
                }
            }
        },
        propertyChangedHandler: function(e, f, i, h) {
            if (this.isInitialized == undefined || this.isInitialized == false) {
                return
            }
            if (e.batchUpdate && e.batchUpdate.width && e.batchUpdate.height && Object.keys(e.batchUpdate).length == 2) {
                return
            }
            f = f.toLowerCase();
            switch (f) {
                case "editable":
                case "showcolumnheaderlines":
                case "showcolumnlines":
                case "showrowlines":
                    e.refresh();
                    break;
                case "everpresentrowactionsmode":
                    if (i != h) {
                        e._removeaddnewrow();
                        e.render()
                    }
                    break;
                case "everpresentrowactions":
                    e._updateaddnewrowui();
                    break;
                case "showeverpresentrow":
                case "everpresentrowposition":
                case "everpresentrowheight":
                    if (i != h) {
                        e._removeaddnewrow();
                        e.render()
                    }
                    break;
                case "rtl":
                    e.content.css("left", "");
                    e.columns = e._columns;
                    e._filterrowcache = [];
                    e.vScrollBar.jqxScrollBar({
                        rtl: h
                    });
                    e.hScrollBar.jqxScrollBar({
                        rtl: h
                    });
                    if (e._initpager) {
                        e._initpager()
                    }
                    if (e._initgroupsheader) {
                        e._initgroupsheader()
                    }
                    e.render();
                    break;
                case "enablebrowserselection":
                    if (!e.showfilterrow) {
                        if (!e.showstatusbar && !e.showtoolbar) {
                            e.host.addClass("jqx-disableselect")
                        }
                        e.content.addClass("jqx-disableselect")
                    }
                    if (e.enablebrowserselection) {
                        e.content.removeClass("jqx-disableselect");
                        e.host.removeClass("jqx-disableselect")
                    }
                    break;
                case "columnsheight":
                    if (e.columnsheight != 32 || e.columngroups) {
                        e._measureElement("column")
                    }
                    e._render(true, true, true, false, false);
                    break;
                case "rowsheight":
                    if (h != i) {
                        if (e.rowsheight != 31) {
                            e._measureElement("cell")
                        }
                        e.virtualsizeinfo = null;
                        e.rendergridcontent(true, false);
                        e.refresh()
                    }
                    break;
                case "scrollMode":
                    e.vScrollInstance.thumbStep = e.rowsheight;
                    break;
                case "showdefaultloadelement":
                    e._builddataloadelement();
                    break;
                case "showfiltermenuitems":
                case "showsortmenuitems":
                case "showgroupmenuitems":
                case "filtermode":
                    e._initmenu();
                    break;
                case "touchmode":
                    if (i != h) {
                        e._removeHandlers();
                        e.touchDevice = null;
                        e.vScrollBar.jqxScrollBar({
                            touchMode: h
                        });
                        e.hScrollBar.jqxScrollBar({
                            touchMode: h
                        });
                        e._updateTouchScrolling();
                        e._arrange();
                        e._updatecolumnwidths();
                        e._updatecellwidths();
                        e._addHandlers()
                    }
                    break;
                case "autoshowcolumnsmenubutton":
                    if (i != h) {
                        e._rendercolumnheaders()
                    }
                    break;
                case "rendergridrows":
                    if (i != h) {
                        e.updatebounddata()
                    }
                    break;
                case "editmode":
                    if (i != h) {
                        e._removeHandlers();
                        e._addHandlers()
                    }
                    break;
                case "source":
                    e.updatebounddata();
                    if (e.virtualmode && !e._loading) {
                        e.loadondemand = true;
                        e._renderrows(e.virtualsizeinfo)
                    }
                    break;
                case "horizontalscrollbarstep":
                case "verticalscrollbarstep":
                case "horizontalscrollbarlargestep":
                case "verticalscrollbarlargestep":
                    this.vScrollBar.jqxScrollBar({
                        step: this.verticalscrollbarstep,
                        largestep: this.verticalscrollbarlargestep
                    });
                    this.hScrollBar.jqxScrollBar({
                        step: this.horizontalscrollbarstep,
                        largestep: this.horizontalscrollbarlargestep
                    });
                    break;
                case "closeablegroups":
                    if (e._initgroupsheader) {
                        e._initgroupsheader()
                    }
                    break;
                case "showgroupsheader":
                    if (i != h) {
                        e._arrange();
                        if (e._initgroupsheader) {
                            e._initgroupsheader()
                        }
                        e._renderrows(e.virtualsizeinfo)
                    }
                    break;
                case "theme":
                    if (h != i) {
                        b.jqx.utilities.setTheme(i, h, e.host);
                        if (e.gridmenu) {
                            e.gridmenu.jqxMenu({
                                theme: h
                            })
                        }
                        if (e.pageable) {
                            e._updatepagertheme()
                        }
                        if (e.filterable) {
                            e._updatefilterrowui(true)
                        }
                        if (e.showeverpresentrow) {
                            e._updateaddnewrowui(true)
                        }
                        e._applyThemeSettings()
                    }
                    break;
                case "showtoolbar":
                case "showfilterbar":
                case "toolbarheight":
                    if (i != h) {
                        e._arrange();
                        e.refresh()
                    }
                    break;
                case "showstatusbar":
                    if (i != h) {
                        if (e.statusbar) {
                            if (h) {
                                e.statusbar.show()
                            } else {
                                e.statusbar.hide()
                            }
                        }
                        e._arrange();
                        e.refresh()
                    }
                    break;
                case "statusbarheight":
                    if (i != h) {
                        e._arrange();
                        e.refresh()
                    }
                    break;
                case "filterable":
                case "showfilterrow":
                    if (i != h) {
                        e.render()
                    }
                    break;
                case "autoshowfiltericon":
                case "showfiltercolumnbackground":
                case "showpinnedcolumnbackground":
                case "showsortcolumnbackground":
                    if (i != h) {
                        e.rendergridcontent()
                    }
                    break;
                case "showrowdetailscolumn":
                    if (i != h) {
                        e.render()
                    }
                    break;
                case "scrollbarsize":
                    if (i != h) {
                        b.jqx.utilities.scrollBarSize = h;
                        e._arrange()
                    }
                    break;
                case "width":
                case "height":
                    if (i != h) {
                        e._updatesize(true, true);
                        e._resizeWindow();
                        if (e.virtualmode && !e._loading) {
                            e.vScrollInstance.setPosition(0)
                        } else {
                            setTimeout(function() {
                                e._renderrows(e.virtualsizeinfo)
                            }, 100)
                        }
                    }
                    break;
                case "altrows":
                case "altstart":
                case "altstep":
                    if (i != h) {
                        e._renderrows(e.virtualsizeinfo)
                    }
                    break;
                case "groupsheaderheight":
                    if (i != h) {
                        e._arrange();
                        if (e._initgroupsheader) {
                            e._initgroupsheader()
                        }
                    }
                    break;
                case "pagerheight":
                    if (i != h) {
                        e._initpager()
                    }
                    break;
                case "selectedrowindex":
                    e.selectrow(h);
                    break;
                case "selectionmode":
                    if (i != h) {
                        if (h == "none") {
                            e.selectedrowindexes = new Array();
                            e.selectedcells = new Array();
                            e.selectedrowindex = -1
                        }
                        e._renderrows(e.virtualsizeinfo);
                        if (h == "checkbox") {
                            e._render(false, false, true, false, false)
                        }
                    }
                    break;
                case "showheader":
                    if (h) {
                        e.columnsheader.css("display", "block")
                    } else {
                        e.columnsheader.css("display", "none")
                    }
                    break;
                case "virtualmode":
                    if (i != h) {
                        e.dataview.virtualmode = e.virtualmode;
                        e.dataview.refresh(false);
                        e._render(false, false, false)
                    }
                    break;
                case "columnsmenu":
                    if (i != h) {
                        e.render()
                    }
                    break;
                case "columngroups":
                    e._render(true, true, true, false, false);
                    break;
                case "columns":
                    if (e.columns && e.columns.length > e.headerZIndex) {
                        e.headerZIndex = e.columns.length + 100
                    }
                    if (e._serializeObject(e._cachedcolumns) !== e._serializeObject(h)) {
                        var d = false;
                        if (e.filterable) {
                            if (i && i.records) {
                                b.each(i.records, function() {
                                    if (this.filter) {
                                        d = true
                                    }
                                    e.dataview.removefilter(this.displayfield, this.filter)
                                })
                            }
                        }
                        e._columns = null;
                        e._filterrowcache = [];
                        e.render();
                        if (d) {
                            e.applyfilters()
                        }
                        e._cachedcolumns = e.columns;
                        if (e.removesort) {
                            e.removesort()
                        }
                    } else {
                        e[f] = i
                    }
                    break;
                case "autoheight":
                    if (i != h) {
                        e._render(false, false, true)
                    }
                    break;
                case "pagermode":
                case "pagerbuttonscount":
                    if (i != h) {
                        if (e._initpager) {
                            if (e.pagershowrowscombo) {
                                e.pagershowrowscombo.jqxDropDownList("destroy");
                                e.pagershowrowscombo = null
                            }
                            if (e.pagerrightbutton) {
                                e.removeHandler(e.pagerrightbutton, "mousedown");
                                e.removeHandler(e.pagerrightbutton, "mouseup");
                                e.removeHandler(e.pagerrightbutton, "click");
                                e.pagerrightbutton.jqxButton("destroy");
                                e.pagerrightbutton = null
                            }
                            if (e.pagerleftbutton) {
                                e.removeHandler(e.pagerleftbutton, "mousedown");
                                e.removeHandler(e.pagerleftbutton, "mouseup");
                                e.removeHandler(e.pagerleftbutton, "click");
                                e.pagerleftbutton.jqxButton("destroy");
                                e.removeHandler(b(document), "mouseup.pagerbuttons" + e.element.id);
                                e.pagerleftbutton = null
                            }
                            e.pagerdiv.remove();
                            e._initpager()
                        }
                    }
                    break;
                case "pagesizeoptions":
                case "pageable":
                case "pagesize":
                    if (i != h) {
                        if (e._loading) {
                            throw new Error("jqxGrid: " + e.loadingerrormessage);
                            return
                        }
                        if (!e.host.jqxDropDownList || !e.host.jqxListBox) {
                            e._testmodules();
                            return
                        }
                        if (e._initpager) {
                            if (f != "pageable" && f != "pagermode") {
                                if (typeof(h) == "string") {
                                    var g = "The expected value type is: Int.";
                                    if (f != "pagesize") {
                                        var g = "The expected value type is: Array of Int values."
                                    }
                                    throw new Error("Invalid Value for: " + f + ". " + g)
                                }
                            }
                            e.dataview.pageable = e.pageable;
                            e.dataview.pagenum = 0;
                            e.dataview.pagesize = e._getpagesize();
                            if (e.virtualmode) {
                                e.updatebounddata()
                            }
                            e.dataview.refresh(true);
                            e._initpager();
                            if (f == "pagesizeoptions") {
                                if (h != null && h.length > 0) {
                                    e.pagesize = parseInt(h[0]);
                                    e.dataview.pagesize = parseInt(h[0]);
                                    e.prerenderrequired = true;
                                    e._requiresupdate = true;
                                    e.dataview.pagenum = -1;
                                    e.gotopage(0)
                                }
                            }
                        }
                        e._render(false, false, false)
                    }
                    break;
                case "groups":
                    if (e._serializeObject(i) !== e._serializeObject(h)) {
                        e.dataview.groups = h;
                        e._refreshdataview();
                        e._render(true, true, true, false)
                    }
                    break;
                case "groupable":
                    if (i != h) {
                        e.dataview.groupable = e.groupable;
                        e.dataview.pagenum = 0;
                        e.dataview.refresh(false);
                        e._render(false, false, true)
                    }
                    break;
                case "renderstatusbar":
                    if (h != null) {
                        e.renderstatusbar(e.statusbar)
                    }
                    break;
                case "rendertoolbar":
                    if (h != null) {
                        e.rendertoolbar(e.toolbar)
                    }
                    break;
                case "disabled":
                    if (h) {
                        e.host.addClass(e.toThemeProperty("jqx-fill-state-disabled"))
                    } else {
                        e.host.removeClass(e.toThemeProperty("jqx-fill-state-disabled"))
                    }
                    b.jqx.aria(e, "aria-disabled", e.disabled);
                    if (e.pageable) {
                        if (e.pagerrightbutton) {
                            e.pagerrightbutton.jqxButton({
                                disabled: h
                            });
                            e.pagerleftbutton.jqxButton({
                                disabled: h
                            });
                            e.pagershowrowscombo.jqxDropDownList({
                                disabled: h
                            });
                            e.pagergotoinput.attr("disabled", h)
                        }
                        if (e.pagerfirstbutton) {
                            e.pagerfirstbutton.jqxButton({
                                disabled: h
                            });
                            e.pagerlastbutton.jqxButton({
                                disabled: h
                            })
                        }
                    }
                    e.vScrollBar.jqxScrollBar({
                        disabled: h
                    });
                    e.hScrollBar.jqxScrollBar({
                        disabled: h
                    });
                    if (e.filterable && e.showfilterrow) {
                        e._updatefilterrowui(true)
                    }
                    if (e.showeverpresentrow) {
                        e._updateaddnewrowui(true)
                    }
                    break
            }
        }
    });

    function c(d, e) {
        this.owner = d;
        this.datafield = null;
        this.displayfield = null;
        this.text = "";
        this.createfilterpanel = null;
        this.sortable = true;
        this.hideable = true;
        this.editable = true;
        this.hidden = false;
        this.adaptivehidden = false;
        this.groupable = true;
        this.renderer = null;
        this.cellsrenderer = null;
        this.checkchange = null, this.threestatecheckbox = false;
        this.buttonclick = null, this.columntype = null;
        this.cellsformat = "";
        this.align = "left";
        this.cellsalign = "left";
        this.width = "auto";
        this.minwidth = 25;
        this.maxwidth = "auto";
        this.pinned = false;
        this.visibleindex = -1;
        this.filterable = true;
        this.filter = null;
        this.filteritems = [];
        this.resizable = true;
        this.initeditor = null;
        this.createeditor = null;
        this.createwidget = null;
        this.initwidget = null;
        this.destroywidget = null;
        this.destroyeditor = null;
        this.geteditorvalue = null;
        this.validation = null;
        this.classname = "";
        this.cellclassname = "";
        this.cellendedit = null;
        this.cellbeginedit = null;
        this.cellvaluechanging = null;
        this.aggregates = null;
        this.aggregatesrenderer = null;
        this.menu = true;
        this.createfilterwidget = null;
        this.filtertype = "default";
        this.filtercondition = null;
        this.rendered = null;
        this.exportable = true;
        this.exporting = false;
        this.draggable = true;
        this.nullable = true;
        this.clipboard = true;
        this.selectable = false;
        this.autofill = true;
        this._applyStyle = function() {
            var f = this;
            if (f.hovered) {
                if (f.style.headerBackgroundHoveredColor) {
                    f.element.style.backgroundColor = f.style.headerBackgroundHoveredColor
                }
                if (f.style.headerHoveredColor) {
                    f.element.style.color = f.style.headerHoveredColor
                }
                return
            }
            if (f.selected) {
                if (f.style.headerBackgroundSelectedColor) {
                    f.element.style.backgroundColor = f.style.headerBackgroundSelectedColor
                }
                if (f.style.headerSelectedColor) {
                    f.element.style.color = f.style.headerSelectedColor
                }
                return
            }
            if (f.style.headerBackgroundColor) {
                f.element.style.backgroundColor = f.style.headerBackgroundColor
            } else {
                f.element.style.backgroundColor = ""
            }
            if (f.style.headerColor) {
                f.element.style.color = f.style.headerColor
            } else {
                f.element.style.color = ""
            }
        };
        this._applyCellStyle = function(f) {
            var j = this;
            var g = false;
            if (f.length) {
                for (var h = 0; h < f.length; h++) {
                    this._applyCellStyle(f[h])
                }
                return
            }
            if (j.style.backgroundColor || j.style.color || j.style.hoveredColor || j.style.hoveredColor || j.style.backgroundSelectedColor || j.style.selectedColor) {
                g = true
            }
            if (!g) {
                return
            }
            if (f.className.indexOf("hover") >= 0) {
                if (j.style.backgroundHoveredColor) {
                    f.style.backgroundColor = j.style.backgroundHoveredColor
                }
                if (j.style.hoveredColor) {
                    f.style.color = j.style.hoveredColor
                }
                return
            }
            if (f.className.indexOf("selected") >= 0) {
                if (j.style.backgroundSelectedColor) {
                    f.style.backgroundColor = j.style.backgroundSelectedColor
                }
                if (j.style.selectedColor) {
                    f.style.color = j.style.selectedColor
                }
                return
            }
            if (j.style.backgroundColor) {
                f.style.backgroundColor = j.style.backgroundColor
            }
            if (j.style.color) {
                f.style.color = j.style.color
            }
        };
        this.style = {
            headerBackgroundColor: "",
            headerColor: "",
            headerBackgroundHoveredColor: "",
            headerHoveredColor: "",
            headerBackgroundSelectedColor: "",
            headerSelectedColor: "",
            backgroundColor: "",
            color: "",
            backgroundHoveredColor: "",
            hoveredColor: "",
            backgroundSelectedColor: "",
            selectedColor: ""
        };
        this.enabletooltips = true;
        this.columngroup = null;
        this.filterdelay = 800;
        this.reseteverpresentrowwidgetvalue = null;
        this.geteverpresentrowwidgetvalue = null;
        this.createeverpresentrowwidget = null;
        this.initeverpresentrowwidget = null;
        this.validateeverpresentrowwidgetvalue = null;
        this.destroyeverpresentrowwidget = null;
        this.getcolumnproperties = function() {
            return {
                nullable: this.nullable,
                sortable: this.sortable,
                hideable: this.hideable,
                hidden: this.hidden,
                groupable: this.groupable,
                width: this.width,
                align: this.align,
                editable: this.editable,
                minwidth: this.minwidth,
                maxwidth: this.maxwidth,
                resizable: this.resizable,
                datafield: this.datafield,
                text: this.text,
                exportable: this.exportable,
                cellsalign: this.cellsalign,
                pinned: this.pinned,
                cellsformat: this.cellsformat,
                columntype: this.columntype,
                classname: this.classname,
                cellclassname: this.cellclassname,
                menu: this.menu
            }
        }, this.setproperty = function(f, g) {
            if (this[f]) {
                var h = this[f];
                this[f] = g;
                this.owner._columnPropertyChanged(this, f, g, h)
            } else {
                if (this[f.toLowerCase()]) {
                    var h = this[f.toLowerCase()];
                    this[f.toLowerCase()] = g;
                    this.owner._columnPropertyChanged(this, f.toLowerCase(), g, h)
                }
            }
        };
        this._initfields = function(g) {
            if (g != null) {
                var f = this.that;
                if (b.jqx.hasProperty(g, "dataField")) {
                    this.datafield = b.jqx.get(g, "dataField")
                }
                if (b.jqx.hasProperty(g, "selectable")) {
                    this.selectable = b.jqx.get(g, "selectable")
                }
                if (b.jqx.hasProperty(g, "displayField")) {
                    this.displayfield = b.jqx.get(g, "displayField")
                } else {
                    this.displayfield = this.datafield
                }
                if (b.jqx.hasProperty(g, "enableTooltips")) {
                    this.enabletooltips = b.jqx.get(g, "enableTooltips")
                }
                if (b.jqx.hasProperty(g, "text")) {
                    this.text = b.jqx.get(g, "text")
                } else {
                    this.text = this.displayfield
                }
                if (b.jqx.hasProperty(g, "style")) {
                    this.style = b.jqx.get(g, "style")
                }
                if (b.jqx.hasProperty(g, "createfilterpanel")) {
                    this.createfilterpanel = b.jqx.get(g, "createfilterpanel")
                }
                if (b.jqx.hasProperty(g, "sortable")) {
                    this.sortable = b.jqx.get(g, "sortable")
                }
                if (b.jqx.hasProperty(g, "hideable")) {
                    this.hideable = b.jqx.get(g, "hideable")
                }
                if (b.jqx.hasProperty(g, "hidden")) {
                    this.hidden = b.jqx.get(g, "hidden")
                }
                if (b.jqx.hasProperty(g, "adaptivehidden")) {
                    this.adaptivehidden = b.jqx.get(g, "adaptivehidden")
                }
                if (b.jqx.hasProperty(g, "groupable")) {
                    this.groupable = b.jqx.get(g, "groupable")
                }
                if (b.jqx.hasProperty(g, "renderer")) {
                    this.renderer = b.jqx.get(g, "renderer")
                }
                if (b.jqx.hasProperty(g, "align")) {
                    this.align = b.jqx.get(g, "align")
                }
                if (b.jqx.hasProperty(g, "cellsAlign")) {
                    this.cellsalign = b.jqx.get(g, "cellsAlign")
                }
                if (b.jqx.hasProperty(g, "clipboard")) {
                    this.clipboard = b.jqx.get(g, "clipboard")
                }
                if (b.jqx.hasProperty(g, "cellsFormat")) {
                    this.cellsformat = b.jqx.get(g, "cellsFormat")
                }
                if (b.jqx.hasProperty(g, "width")) {
                    this.width = b.jqx.get(g, "width")
                }
                if (b.jqx.hasProperty(g, "autofill")) {
                    this.autofill = b.jqx.get(g, "autofill")
                }
                if (b.jqx.hasProperty(g, "minWidth")) {
                    this.minwidth = parseInt(b.jqx.get(g, "minWidth"));
                    if (isNaN(this.minwidth)) {
                        this.minwidth = 25
                    }
                }
                if (b.jqx.hasProperty(g, "maxWidth")) {
                    this.maxwidth = parseInt(b.jqx.get(g, "maxWidth"));
                    if (isNaN(this.maxwidth)) {
                        this.maxwidth = "auto"
                    }
                }
                if (b.jqx.hasProperty(g, "cellsRenderer")) {
                    this.cellsrenderer = b.jqx.get(g, "cellsRenderer")
                } else {
                    if (g.cellsRenderer) {
                        this.cellsrenderer = g.cellsRenderer
                    }
                }
                if (b.jqx.hasProperty(g, "columnType")) {
                    this.columntype = b.jqx.get(g, "columnType")
                }
                if (b.jqx.hasProperty(g, "checkChange")) {
                    this.checkchange = b.jqx.get(g, "checkChange")
                }
                if (b.jqx.hasProperty(g, "buttonClick")) {
                    this.buttonclick = b.jqx.get(g, "buttonClick")
                } else {
                    if (g.buttonClick) {
                        this.buttonclick = g.buttonClick
                    }
                }
                if (b.jqx.hasProperty(g, "pinned")) {
                    this.pinned = b.jqx.get(g, "pinned")
                }
                if (b.jqx.hasProperty(g, "visibleIndex")) {
                    this.visibleindex = b.jqx.get(g, "visibleIndex")
                }
                if (b.jqx.hasProperty(g, "filterable")) {
                    this.filterable = b.jqx.get(g, "filterable")
                }
                if (b.jqx.hasProperty(g, "filter")) {
                    this.filter = b.jqx.get(g, "filter")
                }
                if (b.jqx.hasProperty(g, "resizable")) {
                    this.resizable = b.jqx.get(g, "resizable")
                }
                if (b.jqx.hasProperty(g, "editable")) {
                    this.editable = b.jqx.get(g, "editable")
                }
                if (b.jqx.hasProperty(g, "initEditor")) {
                    this.initeditor = b.jqx.get(g, "initEditor")
                } else {
                    if (g.initEditor) {
                        this.initeditor = g.initEditor
                    }
                }
                if (b.jqx.hasProperty(g, "createEditor")) {
                    this.createeditor = b.jqx.get(g, "createEditor")
                } else {
                    if (g.createEditor) {
                        this.createeditor = g.createEditor
                    }
                }
                if (b.jqx.hasProperty(g, "initWidget")) {
                    this.initwidget = b.jqx.get(g, "initWidget")
                } else {
                    if (g.initWidget) {
                        this.initwidget = g.initWidget
                    }
                }
                if (b.jqx.hasProperty(g, "createWidget")) {
                    this.createwidget = b.jqx.get(g, "createWidget")
                } else {
                    if (g.createWidget) {
                        this.createwidget = g.createWidget
                    }
                }
                if (b.jqx.hasProperty(g, "destroyWidget")) {
                    this.destroywidget = b.jqx.get(g, "destroyWidget")
                } else {
                    if (g.destroyWidget) {
                        this.destroywidget = g.destroyWidget
                    }
                }
                if (b.jqx.hasProperty(g, "reseteverpresentrowwidgetvalue") || b.jqx.hasFunction(g, "reseteverpresentrowwidgetvalue")) {
                    this.reseteverpresentrowwidgetvalue = b.jqx.get(g, "reseteverpresentrowwidgetvalue")
                } else {
                    if (g.resetEverPresentRowWidgetValue) {
                        this.reseteverpresentrowwidgetvalue = g.resetEverPresentRowWidgetValue
                    }
                }
                if (b.jqx.hasProperty(g, "geteverpresentrowwidgetvalue") || b.jqx.hasFunction(g, "geteverpresentrowwidgetvalue")) {
                    this.geteverpresentrowwidgetvalue = b.jqx.get(g, "geteverpresentrowwidgetvalue")
                } else {
                    if (g.getEverPresentRowWidgetValue) {
                        this.geteverpresentrowwidgetvalue = g.getEverPresentRowWidgetValue
                    }
                }
                if (b.jqx.hasProperty(g, "createeverpresentrowwidget") || b.jqx.hasFunction(g, "createeverpresentrowwidget")) {
                    this.createeverpresentrowwidget = b.jqx.get(g, "createeverpresentrowwidget")
                } else {
                    if (g.createEverPresentRowWidget) {
                        this.createeverpresentrowwidget = g.createEverPresentRowWidget
                    }
                }
                if (b.jqx.hasProperty(g, "initeverpresentrowwidget") || b.jqx.hasFunction(g, "initeverpresentrowwidget")) {
                    this.initeverpresentrowwidget = b.jqx.get(g, "initeverpresentrowwidget")
                } else {
                    if (g.initEverPresentRowWidget) {
                        this.initeverpresentrowwidget = g.initEverPresentRowWidget
                    }
                }
                if (b.jqx.hasProperty(g, "validateeverpresentrowwidgetvalue")) {
                    this.validateeverpresentrowwidgetvalue = b.jqx.get(g, "validateeverpresentrowwidgetvalue")
                } else {
                    if (g.validateEverPresentRowWidgetValue) {
                        this.validateeverpresentrowwidgetvalue = g.validateEverPresentRowWidgetValue
                    }
                }
                if (b.jqx.hasProperty(g, "destroyeverpresentrowwidget") || b.jqx.hasFunction(g, "destroyeverpresentrowwidget")) {
                    this.destroyeverpresentrowwidget = b.jqx.get(g, "destroyeverpresentrowwidget")
                } else {
                    if (g.destroyEverPresentRowWidget) {
                        this.destroyEverPresentRowWidget = g.destroyEverPresentRowWidget
                    }
                }
                if (b.jqx.hasProperty(g, "destroyEditor")) {
                    this.destroyeditor = b.jqx.get(g, "destroyEditor")
                } else {
                    if (g.destroyEditor) {
                        this.destroyeditor = g.destroyEditor
                    }
                }
                if (b.jqx.hasProperty(g, "getEditorValue")) {
                    this.geteditorvalue = b.jqx.get(g, "getEditorValue")
                } else {
                    if (g.getEditorValue) {
                        this.geteditorvalue = g.getEditorValue
                    }
                }
                if (b.jqx.hasProperty(g, "validation")) {
                    this.validation = b.jqx.get(g, "validation")
                } else {
                    if (g.validation) {
                        this.validation = g.validation
                    }
                }
                if (b.jqx.hasProperty(g, "cellBeginEdit")) {
                    this.cellbeginedit = b.jqx.get(g, "cellBeginEdit")
                } else {
                    if (g.cellBeginEdit) {
                        this.cellbeginedit = g.cellBeginEdit
                    }
                }
                if (b.jqx.hasProperty(g, "cellEndEdit")) {
                    this.cellendedit = b.jqx.get(g, "cellEndEdit")
                } else {
                    if (g.cellEndEdit) {
                        this.cellendedit = g.cellEndEdit
                    }
                }
                if (b.jqx.hasProperty(g, "className")) {
                    this.classname = b.jqx.get(g, "className")
                }
                if (b.jqx.hasProperty(g, "cellClassName")) {
                    this.cellclassname = b.jqx.get(g, "cellClassName")
                } else {
                    if (g.cellClassName) {
                        this.cellclassname = g.cellClassName
                    }
                }
                if (b.jqx.hasProperty(g, "menu")) {
                    this.menu = b.jqx.get(g, "menu")
                }
                if (b.jqx.hasProperty(g, "aggregates")) {
                    this.aggregates = b.jqx.get(g, "aggregates")
                }
                if (b.jqx.hasProperty(g, "aggregatesRenderer")) {
                    this.aggregatesrenderer = b.jqx.get(g, "aggregatesRenderer")
                }
                if (b.jqx.hasProperty(g, "createFilterWidget")) {
                    this.createfilterwidget = b.jqx.get(g, "createFilterWidget")
                }
                if (b.jqx.hasProperty(g, "filterType")) {
                    this.filtertype = b.jqx.get(g, "filterType")
                }
                if (b.jqx.hasProperty(g, "filterDelay")) {
                    this.filterdelay = b.jqx.get(g, "filterDelay")
                }
                if (b.jqx.hasProperty(g, "rendered")) {
                    this.rendered = b.jqx.get(g, "rendered")
                }
                if (b.jqx.hasProperty(g, "exportable")) {
                    this.exportable = b.jqx.get(g, "exportable")
                }
                if (b.jqx.hasProperty(g, "filterItems")) {
                    this.filteritems = b.jqx.get(g, "filterItems")
                }
                if (b.jqx.hasProperty(g, "cellValueChanging")) {
                    this.cellvaluechanging = b.jqx.get(g, "cellValueChanging")
                }
                if (b.jqx.hasProperty(g, "draggable")) {
                    this.draggable = b.jqx.get(g, "draggable")
                }
                if (b.jqx.hasProperty(g, "filterCondition")) {
                    this.filtercondition = b.jqx.get(g, "filterCondition")
                }
                if (b.jqx.hasProperty(g, "threeStateCheckbox")) {
                    this.threestatecheckbox = b.jqx.get(g, "threeStateCheckbox")
                }
                if (b.jqx.hasProperty(g, "nullable")) {
                    this.nullable = b.jqx.get(g, "nullable")
                }
                if (b.jqx.hasProperty(g, "columnGroup")) {
                    this.columngroup = b.jqx.get(g, "columnGroup")
                }
                if (!g instanceof String && !(typeof g == "string")) {
                    for (var h in g) {
                        if (!f.hasOwnProperty(h)) {
                            if (!f.hasOwnProperty(h.toLowerCase())) {
                                d.host.remove();
                                throw new Error("jqxGrid: Invalid property name - " + h + ".")
                            }
                        }
                    }
                }
            }
        };
        this._initfields(e);
        return this
    }

    function a(d, e) {
        this.setdata = function(f) {
            if (f != null) {
                this.bounddata = f;
                this.boundindex = f.boundindex;
                this.visibleindex = f.visibleindex;
                this.group = f.group;
                this.parentbounddata = f.parentItem;
                this.uniqueid = f.uniqueid;
                this.level = f.level
            }
        };
        this.setdata(e);
        this.parentrow = null;
        this.subrows = new Array();
        this.owner = d;
        this.height = 25;
        this.hidden = false;
        this.rowdetails = null;
        this.rowdetailsheight = 100;
        this.rowdetailshidden = true;
        this.top = -1;
        this.setrowinfo = function(f) {
            this.hidden = f.hidden;
            this.rowdetails = f.rowdetails;
            this.rowdetailsheight = f.rowdetailsheight;
            this.rowdetailshidden = !f.showdetails;
            this.height = f.height
        };
        return this
    }
    b.jqx.collection = function(d) {
        this.records = new Array();
        this.owner = d;
        this.updating = false;
        this.beginupdate = function() {
            this.updating = true
        };
        this.resumeupdate = function() {
            this.updating = false
        };
        this._raiseEvent = function(e) {};
        this.clear = function() {
            this.records = new Array()
        };
        this.replace = function(f, e) {
            this.records[f] = e;
            if (!this.updating) {
                this._raiseEvent({
                    type: "replace",
                    element: e
                })
            }
        };
        this.isempty = function(e) {
            if (this.records[e] == undefined) {
                return true
            }
            return false
        };
        this.initialize = function(e) {
            if (e < 1) {
                e = 1
            }
            this.records[e - 1] = -1
        };
        this.length = function() {
            return this.records.length
        };
        this.indexOf = function(e) {
            return this.records.indexOf(e)
        };
        this.add = function(e) {
            if (e == null) {
                return false
            }
            this.records[this.records.length] = e;
            if (!this.updating) {
                this._raiseEvent({
                    type: "add",
                    element: e
                })
            }
            return true
        };
        this.insertAt = function(f, e) {
            if (f == null || f == undefined) {
                return false
            }
            if (e == null) {
                return false
            }
            if (f >= 0) {
                if (f < this.records.length) {
                    this.records.splice(f, 0, e);
                    if (!this.updating) {
                        this._raiseEvent({
                            type: "insert",
                            index: f,
                            element: e
                        })
                    }
                    return true
                } else {
                    return this.add(e)
                }
            }
            return false
        };
        this.remove = function(f) {
            if (f == null || f == undefined) {
                return false
            }
            var e = this.records.indexOf(f);
            if (e != -1) {
                this.records.splice(e, 1);
                if (!this.updating) {
                    this._raiseEvent({
                        type: "remove",
                        element: f
                    })
                }
                return true
            }
            return false
        };
        this.removeAt = function(f) {
            if (f == null || f == undefined) {
                return false
            }
            if (f < 0) {
                return false
            }
            if (f < this.records.length) {
                var e = this.records[f];
                this.records.splice(f, 1);
                if (!this.updating) {
                    this._raiseEvent({
                        type: "removeAt",
                        index: f,
                        element: e
                    })
                }
                return true
            }
            return false
        };
        return this
    };
    b.jqx.dataview = function() {
        this.self = this;
        this.aggregates = false;
        this.grid = null;
        this.uniqueId = "id";
        this.records = [];
        this.rows = [];
        this.columns = [];
        this.groups = [];
        this.filters = new Array();
        this.updated = null;
        this.update = null;
        this.suspend = false;
        this.pagesize = 0;
        this.pagenum = 0;
        this.totalrows = 0;
        this.totalrecords = 0;
        this.groupable = true;
        this.loadedrecords = [];
        this.loadedrootgroups = [];
        this.loadedgroups = [];
        this.loadedgroupsByKey = [];
        this.virtualmode = true;
        this._cachegrouppages = new Array();
        this.source = null;
        this.changedrecords = new Array();
        this.rowschangecallback = null;
        this.that = this;
        this.destroy = function() {
            delete this.self;
            delete this.grid;
            delete this.uniqueId;
            delete this.records;
            delete this.rows;
            delete this.columns;
            delete this.groups;
            delete this.filters;
            delete this.updated;
            delete this.update;
            delete this.suspend;
            delete this.pagesize;
            delete this.pagenum;
            delete this.totalrows;
            delete this.totalrecords;
            delete this.groupable;
            delete this.loadedrecords;
            delete this.loadedrootgroups;
            delete this.loadedgroups;
            delete this.loadedgroupsByKey;
            delete this.virtualmode;
            delete this._cachegrouppages;
            delete this.source;
            delete this.changedrecords;
            delete this.rowschangecallback;
            delete this.that
        }, this.suspendupdate = function() {
            this.suspend = true
        }, this.isupdating = function() {
            return this.suspend
        }, this.resumeupdate = function(d) {
            this.suspend = false;
            if (d == undefined) {
                d = true
            }
            this.refresh(d)
        }, this.getrecords = function() {
            return this.records
        }, this.clearrecords = function() {
            this.recordids = new Array()
        };
        this.databind = function(y, p) {
            var w = y._source ? true : false;
            var h = null;
            if (this.grid) {
                this.aggregates = this.grid.showgroupaggregates
            }
            if (w) {
                h = y;
                y = y._source
            } else {
                h = new b.jqx.dataAdapter(y, {
                    autoBind: false
                })
            }
            var f = function(m) {
                h.recordids = [];
                h.records = new Array();
                h.cachedrecords = new Array();
                h.originaldata = new Array();
                h._options.virtualmode = m.virtualmode;
                h._options.totalrecords = m.totalrecords;
                h._options.originaldata = m.originaldata;
                h._options.recordids = m.recordids;
                h._options.cachedrecords = new Array();
                h._options.pagenum = m.pagenum;
                h._options.pageable = m.pageable;
                if (y.type != undefined) {
                    h._options.type = y.type
                }
                if (y.formatdata != undefined) {
                    h._options.formatData = y.formatdata
                }
                if (y.contenttype != undefined) {
                    h._options.contentType = y.contenttype
                }
                if (y.async != undefined) {
                    h._options.async = y.async
                }
                if (y.updaterow != undefined) {
                    h._options.updaterow = y.updaterow
                }
                if (y.addrow != undefined) {
                    h._options.addrow = y.addrow
                }
                if (y.deleterow != undefined) {
                    h._options.deleterow = y.deleterow
                }
                if (m.pagesize == 0) {
                    m.pagesize = 10
                }
                h._options.pagesize = m.pagesize
            };
            var B = function(I) {
                I.totalrecords = h.totalrecords;
                if (!I.virtualmode) {
                    I.originaldata = h.originaldata;
                    I.records = h.records;
                    I.recordids = h.recordids;
                    I.cachedrecords = h.cachedrecords
                } else {
                    var m = {
                        startindex: I.pagenum * I.pagesize,
                        endindex: (I.pagenum * I.pagesize + I.pagesize)
                    };
                    if (y.recordstartindex != undefined) {
                        m.startindex = parseInt(y.recordstartindex)
                    }
                    if (y.recordendindex != undefined) {
                        m.endindex = parseInt(y.recordendindex)
                    } else {
                        if (!I.grid.pageable) {
                            m.endindex = m.startindex + 100;
                            if (I.grid.autoheight) {
                                m.endindex = m.startindex + I.totalrecords
                            }
                        }
                    }
                    if (!y.recordendindex) {
                        if (!I.grid.pageable) {
                            m.endindex = m.startindex + 100;
                            if (I.grid.autoheight) {
                                m.endindex = m.startindex + I.totalrecords
                            }
                        } else {
                            m = {
                                startindex: I.pagenum * I.pagesize,
                                endindex: (I.pagenum * I.pagesize + I.pagesize)
                            }
                        }
                    }
                    m.data = h.records;
                    if (I.grid.rendergridrows && I.totalrecords > 0) {
                        var J = 0;
                        y.records = I.grid.rendergridrows(m);
                        if (y.records.length) {
                            J = y.records.length
                        }
                        if (y.records && !y.records[m.startindex]) {
                            var K = new Array();
                            var H = m.startindex;
                            b.each(y.records, function() {
                                K[H] = this;
                                H++;
                                J++
                            });
                            y.records = K
                        }
                        if (J == 0) {
                            if (y.records) {
                                b.each(y.records, function() {
                                    J++
                                })
                            }
                        }
                        if (J > 0 && J < m.endindex - m.startindex && !I.grid.groupable) {
                            var x = y.records[0];
                            for (var q = 0; q < m.endindex - m.startindex - J; q++) {
                                var L = {};
                                for (var o in x) {
                                    L[o] = ""
                                }
                                if (y.records.push) {
                                    y.records.push(L)
                                }
                            }
                        }
                    }
                    if (!y.records || I.totalrecords == 0) {
                        y.records = new Array()
                    }
                    I.originaldata = y.records;
                    I.records = y.records;
                    I.cachedrecords = y.records
                }
            };
            f(this);
            this.source = y;
            if (p !== undefined) {
                var k = p
            }
            var G = this.that;
            switch (y.datatype) {
                case "local":
                case "array":
                default:
                    if (y.localdata == null) {
                        y.localdata = []
                    }
                    if (y.localdata != null) {
                        h.unbindBindingUpdate(G.grid.element.id);
                        if ((!G.grid.autobind && G.grid.isInitialized) || G.grid.autobind) {
                            h.dataBind()
                        }
                        var n = function(o) {
                            if (o != undefined && o != "") {
                                var q = h._changedrecords[0];
                                if (q) {
                                    var x = new Array();
                                    b.each(h._changedrecords, function(K) {
                                        var H = this.index;
                                        var I = this.record;
                                        G.grid._updateFromAdapter = true;
                                        switch (o) {
                                            case "update":
                                                var J = G.grid.getrowid(H);
                                                if (K == h._changedrecords.length - 1) {
                                                    G.grid.updaterow(J, I)
                                                } else {
                                                    G.grid.updaterow(J, I, false)
                                                }
                                                G.grid._updateFromAdapter = false;
                                                return;
                                            case "add":
                                                G.grid.addrow(null, I);
                                                G.grid._updateFromAdapter = false;
                                                return;
                                            case "remove":
                                                var J = G.grid.getrowid(H);
                                                x.push(J);
                                                return
                                        }
                                    });
                                    if (x.length > 0) {
                                        G.grid.deleterow(x, false);
                                        G.grid._updateFromAdapter = false
                                    }
                                }
                                if (o == "update") {
                                    return
                                }
                            }
                            var m = G.totalrecords;
                            B(G, o);
                            if (y.localdata.notifier === null && y.localdata.name == "observableArray") {
                                y.localdata.notifier = function(L) {
                                    if (G._updating) {
                                        return
                                    }
                                    G._updating = true;
                                    var K = G.grid.getrowid(L.index);
                                    switch (L.type) {
                                        case "add":
                                            var H = b.extend({}, L.object[L.index]);
                                            var J = h.getid(y.id, H, L.index);
                                            if (L.index === 0) {
                                                G.grid.addrow(J, H, "first")
                                            } else {
                                                G.grid.addrow(J, H)
                                            }
                                            break;
                                        case "delete":
                                            G.grid.deleterow(K);
                                            break;
                                        case "update":
                                            if (L.path && L.path.split(".").length > 1) {
                                                var I = L.path.split(".");
                                                G.grid.setcellvalue(L.index, I[I.length - 1], L.newValue)
                                            } else {
                                                var H = b.extend({}, L.object[L.index]);
                                                G.grid.updaterow(K, H)
                                            }
                                            break
                                    }
                                    G._updating = false
                                }
                            }
                            if (o == "updateData") {
                                G.refresh();
                                G.grid._updateGridData()
                            } else {
                                if (y.recordstartindex && G.virtualmode) {
                                    G.updateview(y.recordstartindex, y.recordstartindex + G.pagesize)
                                } else {
                                    G.refresh()
                                }
                                G.update(m != G.totalrecords)
                            }
                        };
                        n();
                        h.bindBindingUpdate(G.grid.element.id, n)
                    }
                    break;
                case "json":
                case "jsonp":
                case "xml":
                case "xhtml":
                case "script":
                case "text":
                case "csv":
                case "tab":
                    if (y.localdata != null) {
                        h.unbindBindingUpdate(G.grid.element.id);
                        if ((!G.grid.autobind && G.grid.isInitialized) || G.grid.autobind) {
                            h.dataBind()
                        }
                        var n = function(o) {
                            var m = G.totalrecords;
                            B(G);
                            if (o == "updateData") {
                                G.refresh();
                                G.grid._updateGridData()
                            } else {
                                if (y.recordstartindex && G.virtualmode) {
                                    G.updateview(y.recordstartindex, y.recordstartindex + G.pagesize)
                                } else {
                                    G.refresh()
                                }
                                G.update(m != G.totalrecords)
                            }
                        };
                        n();
                        h.bindBindingUpdate(G.grid.element.id, n);
                        return
                    }
                    var D = {};
                    var C = [];
                    var v = 0;
                    var E = {};
                    for (var j = 0; j < G.filters.length; j++) {
                        var g = G.filters[j].datafield;
                        var l = G.filters[j].filter;
                        if (!l.getfilters) {
                            continue
                        }
                        var i = l.getfilters();
                        E[g + "operator"] = l.operator;
                        for (var A = 0; A < i.length; A++) {
                            i[A].datafield = g;
                            var u = i[A].value;
                            if (i[A].type == "datefilter") {
                                if (i[A].value && i[A].value.toLocaleString) {
                                    var d = G.grid.getcolumn(i[A].datafield);
                                    if (d && d.cellsformat) {
                                        var z = G.grid.source.formatDate(i[A].value, d.cellsformat, G.grid.gridlocalization);
                                        if (z) {
                                            E["filtervalue" + v] = z
                                        } else {
                                            E["filtervalue" + v] = i[A].value.toLocaleString()
                                        }
                                    } else {
                                        E["filtervalue" + v] = u.toString()
                                    }
                                } else {
                                    E["filtervalue" + v] = u.toString()
                                }
                            } else {
                                E["filtervalue" + v] = u.toString();
                                if (i[A].data) {
                                    E["filterid" + v] = i[A].data.toString()
                                }
                                if (i[A].id) {
                                    E["filterid" + v] = i[A].id.toString()
                                }
                            }
                            E["filtercondition" + v] = i[A].condition;
                            E["filteroperator" + v] = i[A].operator;
                            E["filterdatafield" + v] = g;
                            var t = {
                                label: u.toString()
                            };
                            if (i[A].data) {
                                t.value = i[A].data.toString()
                            }
                            if (i[A].id) {
                                t.value = i[A].id.toString()
                            } else {
                                t.value = u.toString()
                            }
                            t.condition = i[A].condition;
                            t.operator = i[A].operator == 0 ? "and" : "or";
                            t.field = g;
                            t.type = i[A].type;
                            var e = false;
                            if (C.length > 0) {
                                for (var s = 0; s < C.length; s++) {
                                    var r = C[s];
                                    if (r.field == g) {
                                        r.filters.push(t);
                                        e = true;
                                        break
                                    }
                                }
                            }
                            if (!e) {
                                C.push({
                                    field: g,
                                    filters: []
                                });
                                C[C.length - 1].filters.push(t)
                            }
                            v++
                        }
                    }
                    E.filterGroups = C;
                    E.filterscount = v;
                    E.groupscount = G.groups.length;
                    for (var j = 0; j < G.groups.length; j++) {
                        E["group" + j] = G.groups[j]
                    }
                    if (y.recordstartindex == undefined) {
                        y.recordstartindex = 0
                    }
                    if (y.recordendindex == undefined || y.recordendindex == 0) {
                        if (G.grid.height && G.grid.height.toString().indexOf("%") == -1) {
                            y.recordendindex = parseInt(G.grid.height) / G.grid.rowsheight;
                            y.recordendindex += 2;
                            y.recordendindex = parseInt(y.recordendindex)
                        } else {
                            y.recordendindex = b(window).height() / G.grid.rowsheight;
                            y.recordendindex = parseInt(y.recordendindex)
                        }
                        if (G.pageable) {
                            y.recordendindex = G.pagesize
                        }
                    }
                    if (G.pageable) {
                        y.recordstartindex = (G.pagenum) * G.pagesize;
                        y.recordendindex = (G.pagenum + 1) * G.pagesize
                    }
                    b.extend(E, {
                        sortdatafield: G.sortfield,
                        sortorder: G.sortfielddirection,
                        pagenum: G.pagenum,
                        pagesize: G.grid.pagesize,
                        recordstartindex: y.recordstartindex,
                        recordendindex: y.recordendindex
                    });
                    var F = h._options.data;
                    if (h._options.data) {
                        b.extend(h._options.data, E)
                    } else {
                        if (y.data) {
                            b.extend(E, y.data)
                        }
                        h._options.data = E
                    }
                    var n = function() {
                        var o = b.jqx.browser.msie && b.jqx.browser.version < 9;
                        var q = function() {
                            var x = G.totalrecords;
                            B(G);
                            if (y.recordstartindex && G.virtualmode) {
                                G.updateview(y.recordstartindex, y.recordstartindex + G.pagesize)
                            } else {
                                G.refresh()
                            }
                            G.update(x != G.totalrecords)
                        };
                        if (o) {
                            try {
                                q()
                            } catch (m) {}
                        } else {
                            q()
                        }
                    };
                    h.unbindDownloadComplete(G.grid.element.id);
                    h.bindDownloadComplete(G.grid.element.id, n);
                    if ((!G.grid.autobind && G.grid.isInitialized) || G.grid.autobind) {
                        h.dataBind()
                    } else {
                        if (!G.grid.isInitialized && !G.grid.autobind) {
                            n()
                        }
                    }
                    h._options.data = F
            }
        };
        this.getid = function(g, e, f) {
            if (b(g, e).length > 0) {
                return b(g, e).text()
            }
            if (g) {
                if (g.toString().length > 0) {
                    var d = b(e).attr(g);
                    if (d != null && d.toString().length > 0) {
                        return d
                    }
                }
            }
            return f
        };
        this.getvaluebytype = function(g, d) {
            var e = g;
            if (d.type == "date") {
                var f = new Date(g);
                if (f.toString() == "NaN" || f.toString() == "Invalid Date") {
                    if (b.jqx.dataFormat) {
                        g = b.jqx.dataFormat.tryparsedate(g)
                    } else {
                        g = f
                    }
                } else {
                    g = f
                }
                if (g == null) {
                    g = e
                }
            } else {
                if (d.type == "float") {
                    var g = parseFloat(g);
                    if (isNaN(g)) {
                        g = e
                    }
                } else {
                    if (d.type == "int") {
                        var g = parseInt(g);
                        if (isNaN(g)) {
                            g = e
                        }
                    } else {
                        if (d.type == "bool") {
                            if (g != null) {
                                if (g.toLowerCase() == "false") {
                                    g = false
                                } else {
                                    if (g.toLowerCase() == "true") {
                                        g = true
                                    }
                                }
                            }
                            if (g == 1) {
                                g = true
                            } else {
                                if (g == 0) {
                                    g = false
                                } else {
                                    g = ""
                                }
                            }
                        }
                    }
                }
            }
            return g
        };
        this.setpaging = function(d) {
            if (d.pageSize != undefined) {
                this.pagesize = d.pageSize
            }
            if (d.pageNum != undefined) {
                this.pagenum = Math.min(d.pageNum, Math.ceil(this.totalrows / this.pagesize))
            }
            this.refresh()
        };
        this.getpagingdetails = function() {
            return {
                pageSize: this.pagesize,
                pageNum: this.pagenum,
                totalrows: this.totalrows
            }
        };
        this._clearcaches = function() {
            this.sortcache = {};
            this.sortdata = null;
            this.changedrecords = new Array();
            this.records = new Array();
            this.rows = new Array();
            this.cacheddata = new Array();
            this.originaldata = new Array();
            this.bounditems = new Array();
            this.loadedrecords = new Array();
            this.loadedrootgroups = new Array();
            this.loadedgroups = new Array();
            this.loadedgroupsByKey = new Array();
            this._cachegrouppages = new Array();
            this.recordsbyid = new Array();
            this.cachedrecords = new Array();
            this.recordids = new Array()
        };
        this.addfilter = function(g, f) {
            var e = -1;
            for (var d = 0; d < this.filters.length; d++) {
                if (this.filters[d].datafield == g) {
                    e = d;
                    break
                }
            }
            if (e == -1) {
                this.filters[this.filters.length] = {
                    filter: f,
                    datafield: g
                }
            } else {
                this.filters[e] = {
                    filter: f,
                    datafield: g
                }
            }
        };
        this.removefilter = function(e) {
            for (var d = 0; d < this.filters.length; d++) {
                if (this.filters[d].datafield == e) {
                    this.filters.splice(d, 1);
                    break
                }
            }
        };
        this.getItemFromIndex = function(d) {
            return this.records[d]
        };
        this.updaterow = function(d, n, l) {
            var e = this.filters && this.filters.length > 0 && !this.virtualmode;
            if (!e && n != undefined && d != undefined) {
                n.uid = d;
                if (!(n[this.source.id])) {
                    n[this.source.id] = n.uid
                }
                var j = this.recordsbyid["id" + d];
                var k = this.records.indexOf(j);
                if (k == -1) {
                    return false
                }
                this.records[k] = n;
                if (this.cachedrecords) {
                    this.cachedrecords[k] = n
                }
                if (l == true || l == undefined) {
                    this.refresh()
                }
                this.changedrecords[n.uid] = {
                    Type: "Update",
                    OldData: j,
                    Data: n
                };
                return true
            } else {
                if (this.filters && this.filters.length > 0) {
                    var f = this.cachedrecords;
                    var j = null;
                    var k = -1;
                    for (var h = 0; h < f.length; h++) {
                        if (f[h].uid == d) {
                            j = f[h];
                            k = h;
                            break
                        }
                    }
                    if (j) {
                        var m = this.that;
                        for (var g in n) {
                            m.cachedrecords[k][g] = n[g]
                        }
                        if (l == true || l == undefined) {
                            this.refresh()
                        }
                        return true
                    }
                }
            }
            return false
        };
        this.addrow = function(h, i, d, g) {
            if (i != undefined) {
                if (b.isEmptyObject(i)) {
                    if (this.source && this.source.datafields) {
                        b.each(this.source.datafields, function() {
                            var j = "";
                            if (this.type == "number") {
                                j = null
                            }
                            if (this.type == "date") {
                                j = null
                            }
                            if (this.type == "bool" || this.type == "boolean") {
                                j = false
                            }
                            i[this.name] = j
                        })
                    }
                }
                if (!h || this.recordsbyid["id" + h]) {
                    i.uid = this.getid(this.source.id, i, this.totalrecords);
                    var e = this.recordsbyid["id" + i.uid];
                    while (e != null) {
                        var f = Math.floor(Math.random() * 10000).toString();
                        i.uid = f;
                        e = this.recordsbyid["id" + f]
                    }
                } else {
                    i.uid = h
                }
                if (!(i[this.source.id])) {
                    if (this.source.id != undefined) {
                        i[this.source.id] = i.uid
                    }
                }
                i.boundindex = this.records.length;
                if (d == "last") {
                    this.records.push(i)
                } else {
                    if (typeof d === "number" && isFinite(d)) {
                        this.records.splice(d, 0, i)
                    } else {
                        this.records.splice(0, 0, i)
                    }
                }
                if (this.filters && this.filters.length > 0) {
                    if (d == "last") {
                        this.cachedrecords.push(i)
                    } else {
                        if (typeof d === "number" && isFinite(d)) {
                            this.cachedrecords.splice(d, 0, i)
                        } else {
                            this.cachedrecords.splice(0, 0, i)
                        }
                    }
                }
                this.totalrecords++;
                if (this.virtualmode) {
                    this.source.totalrecords = this.totalrecords
                }
                if (g == true || g == undefined) {
                    this.refresh()
                }
                this.changedrecords[i.uid] = {
                    Type: "New",
                    Data: i
                };
                return true
            }
            return false
        };
        this.deleterow = function(j, h) {
            if (j != undefined) {
                var d = this.filters && this.filters.length > 0;
                if (this.recordsbyid["id" + j] && !d) {
                    var e = this.recordsbyid["id" + j];
                    var k = this.records.indexOf(e);
                    if (this.grid && this.grid.sortable && this.grid.sortmode == "many") {
                        for (var g = 0; g < this.records.length; g++) {
                            if (this.records[g].boundindex === e.boundindex) {
                                k = g;
                                break
                            }
                        }
                    }
                    this.changedrecords[j] = {
                        Type: "Delete",
                        Data: this.records[k]
                    };
                    this.records.splice(k, 1);
                    this.totalrecords--;
                    if (this.virtualmode) {
                        this.source.totalrecords = this.totalrecords
                    }
                    if (h == true || h == undefined) {
                        this.refresh()
                    }
                    return true
                } else {
                    if (this.filters && this.filters.length > 0) {
                        var f = this.cachedrecords;
                        var e = null;
                        var k = -1;
                        for (var g = 0; g < f.length; g++) {
                            if (f[g].uid == j) {
                                e = f[g];
                                k = g;
                                break
                            }
                        }
                        if (e) {
                            this.cachedrecords.splice(k, 1);
                            if (h == true || h == undefined) {
                                this.totalrecords = 0;
                                this.records = this.cachedrecords;
                                this.refresh()
                            }
                            return true
                        }
                    }
                }
                return false
            }
            return false
        };
        this.reload = function(f, d, r, g, h, u, t) {
            var m = this.that;
            var l = new Array();
            var o = f;
            var i = d;
            var j = r;
            var p = g;
            var k = i.length;
            var w = 0;
            var e = 0;
            var s, n;
            this.columns = [];
            this.bounditems = new Array();
            this.loadedrecords = new Array();
            this.loadedrootgroups = new Array();
            this.loadedgroups = new Array();
            this.loadedgroupsByKey = new Array();
            this._cachegrouppages = new Array();
            this.recordsbyid = {};
            if (this.totalrecords == 0) {
                Object.size = function(z) {
                    var y = 0,
                        x;
                    for (x in z) {
                        if (z.hasOwnProperty(x)) {
                            y++
                        }
                    }
                    return y
                };
                var v = Object.size(o);
                this.totalrecords = v;
                b.each(this.records, function(y) {
                    var z = this;
                    var x = 0;
                    b.each(z, function(A, B) {
                        m.columns[x++] = A
                    });
                    return false
                })
            }
            if (this.virtualmode) {
                if (this.pageable) {
                    this.updateview();
                    return
                }
                var u = 0;
                if (!this.groupable) {
                    this.updateview();
                    return
                } else {
                    var t = this.totalrecords
                }
            } else {
                var u = 0;
                var t = this.totalrecords
            }
            if (this.groupable && this.groups.length > 0 && this.loadgrouprecords) {
                var q = u;
                q = this.loadgrouprecords(0, u, t, j, e, p, i, k, l)
            } else {
                w = this.loadflatrecords(u, t, j, e, p, i, k, l)
            }
            if (k > e) {
                i.splice(e, k - e)
            }
            if (this.groups.length > 0 && this.groupable) {
                this.totalrows = q
            } else {
                this.totalrows = w
            }
            return l
        };
        this.loadflatrecords = function(u, r, h, d, p, g, j, l) {
            var m = this.that;
            var o = u;
            var v = u;
            r = Math.min(r, this.totalrecords);
            var f = this.sortdata != null;
            var s = this.source.id && (this.source.datatype == "local" || this.source.datatype == "array" || this.source.datatype == "");
            var t = f ? this.sortdata : this.records;
            for (var k = u; k < r; k++) {
                var q = {};
                if (!f) {
                    q = new Object(t[k]);
                    var n = q[m.uniqueId];
                    q.boundindex = o;
                    m.loadedrecords[o] = q;
                    if (q.uid == undefined) {
                        q.uid = m.getid(m.source.id, q, o)
                    }
                    m.recordsbyid["id" + q.uid] = t[k];
                    q.uniqueid = m.generatekey();
                    m.bounditems[this.bounditems.length] = q
                } else {
                    q = b.extend({}, t[k].value);
                    var n = q[m.uniqueId];
                    q.boundindex = t[k].index;
                    if (q.uid == undefined) {
                        q.uid = m.getid(m.source.id, q, q.boundindex)
                    }
                    m.recordsbyid["id" + q.uid] = t[k].value;
                    m.loadedrecords[o] = q;
                    q.uniqueid = m.generatekey();
                    m.bounditems[q.boundindex] = q
                }
                if (d >= j || n != g[d][m.uniqueId] || (p && p[n])) {
                    l[l.length] = d
                }
                g[d] = q;
                d++;
                q.visibleindex = v;
                v++;
                o++
            }
            if (m.grid.summaryrows) {
                var e = o;
                b.each(m.grid.summaryrows, function() {
                    var i = b.extend({}, this);
                    i.boundindex = r++;
                    m.loadedrecords[e] = i;
                    i.uniqueid = m.generatekey();
                    m.bounditems[m.bounditems.length] = i;
                    g[d] = i;
                    d++;
                    i.visibleindex = v;
                    v++;
                    e++
                })
            }
            return v
        }, this.updateview = function(o, p) {
            var r = this.that;
            var k = this.pagesize * this.pagenum;
            var n = 0;
            var s = new Array();
            var e = this.filters;
            var j = this.updated;
            var l = s.length;
            if (this.pageable) {
                if (this.virtualmode) {
                    if (!this.groupable || this.groups.length == 0) {
                        this.loadflatrecords(this.pagesize * this.pagenum, this.pagesize * (1 + this.pagenum), e, n, j, s, l, []);
                        this.totalrows = s.length
                    } else {
                        if (this.groupable && this.groups.length > 0 && this.loadgrouprecords) {
                            if (this._cachegrouppages[this.pagenum + "_" + this.pagesize] != undefined) {
                                this.rows = this._cachegrouppages[this.pagenum + "_" + this.pagesize];
                                this.totalrows = this.rows.length;
                                return
                            }
                            var m = this.pagesize * (1 + this.pagenum);
                            if (m > this.totalrecords) {
                                m = this.totalrecords
                            }
                            this.loadgrouprecords(0, this.pagesize * this.pagenum, m, e, n, j, s, l, []);
                            this._cachegrouppages[this.pagenum + "_" + this.pagesize] = this.rows;
                            this.totalrows = this.rows.length;
                            return
                        }
                    }
                }
            } else {
                if (this.virtualmode && (!this.groupable || this.groups.length == 0)) {
                    var g = this.pagesize;
                    if (g == 0) {
                        g = Math.min(100, this.totalrecords)
                    }
                    var d = g * this.pagenum;
                    if (this.loadedrecords.length == 0) {
                        d = 0
                    }
                    if (o != null && p != null) {
                        this.loadflatrecords(o, p, e, n, j, s, l, [])
                    } else {
                        this.loadflatrecords(this.pagesize * this.pagenum, this.pagesize * (1 + this.pagenum), e, n, j, s, l, [])
                    }
                    this.totalrows = this.loadedrecords.length;
                    this.rows = s;
                    if (s.length >= g) {
                        return
                    }
                }
            }
            if (this.groupable && this.pageable && this.groups.length > 0 && this._updategroupsinpage) {
                s = this._updategroupsinpage(r, e, k, n, l, this.pagesize * this.pagenum, this.pagesize * (1 + this.pagenum))
            } else {
                for (var h = this.pagesize * this.pagenum; h < this.pagesize * (1 + this.pagenum); h++) {
                    var q = h < this.loadedrecords.length ? this.loadedrecords[h] : null;
                    if (q == null) {
                        continue
                    }
                    if (!this.pagesize || (k >= this.pagesize * this.pagenum && k <= this.pagesize * (this.pagenum + 1))) {
                        s[n] = q;
                        n++
                    }
                    k++
                }
            }
            if ((s.length == 0 || s.length < this.pagesize) && !this.pageable && this.virtualmode) {
                n = s.length;
                var f = s.length;
                for (var h = this.pagesize * this.pagenum; h < this.pagesize * (1 + this.pagenum) - f; h++) {
                    var q = {};
                    q.boundindex = h + f;
                    q.visibleindex = h + f;
                    q.uniqueid = r.generatekey();
                    q.empty = true;
                    r.bounditems[h + f] = q;
                    s[n] = q;
                    n++
                }
            }
            this.rows = s
        };
        this.generatekey = function() {
            var d = function() {
                return (((1 + Math.random()) * 16) | 0)
            };
            return ("" + d() + d() + "-" + d() + "-" + d() + "-" + d() + "-" + d() + d() + d())
        };
        this.reloaddata = function() {
            this.reload(this.records, this.rows, this.filter, this.updated, true)
        };
        this.refresh = function(m) {
            if (this.suspend) {
                return
            }
            if (m == undefined) {
                m = true
            }
            var g = this.rows.length;
            var C = this.totalrows;
            if (this.filters.length > 0 && !this.virtualmode) {
                var r = "";
                var f = this.cachedrecords.length;
                var k = new Array();
                this.totalrecords = 0;
                var B = this.cachedrecords;
                this._dataIndexToBoundIndex = new Array();
                var t = this.filters.length;
                if (this.source != null && this.source.filter != undefined && this.source.localdata != undefined) {
                    var n = this.source.filter(this.filters, B, f);
                    if (n == undefined) {
                        n = new Array()
                    }
                    for (var l = 0; l < f; l++) {
                        var h = B[l];
                        var x = n.indexOf(h) >= 0;
                        if (x) {
                            k[k.length] = b.extend({
                                dataindex: l
                            }, h);
                            this._dataIndexToBoundIndex[l] = {
                                boundindex: k.length - 1
                            }
                        } else {
                            this._dataIndexToBoundIndex[l] = null
                        }
                    }
                    this.records = k
                } else {
                    if (this.source.filter == null || this.source.filter == undefined) {
                        for (var l = 0; l < f; l++) {
                            var h = B[l];
                            var x = undefined;
                            for (var w = 0; w < t; w++) {
                                var r = this.filters[w].filter;
                                var u = h[this.filters[w].datafield];
                                var q = r.evaluate(u);
                                if (this.grid.filter) {
                                    var A = this.grid.filter(u, h, this.filters[w].datafield, r, q);
                                    if (A !== undefined) {
                                        q = A
                                    }
                                }
                                if (x == undefined) {
                                    x = q
                                } else {
                                    if (r.operator == "or") {
                                        x = x || q
                                    } else {
                                        x = x && q
                                    }
                                }
                            }
                            if (x) {
                                k[k.length] = b.extend({
                                    dataindex: l
                                }, h);
                                this._dataIndexToBoundIndex[l] = {
                                    boundindex: k.length - 1
                                }
                            } else {
                                this._dataIndexToBoundIndex[l] = null
                            }
                        }
                        this.records = k
                    }
                }
                if (this.sortdata) {
                    if (this.grid && this.grid.sortmode !== "many") {
                        var e = this.sortfield;
                        if (this.sortcache[e]) {
                            this.sortdata = null;
                            var z = this.sortcache[e].direction;
                            this.sortcache[e] = null;
                            this.sortby(this.sortfield, z);
                            return
                        }
                    } else {
                        var d = this.grid.getsortcolumns();
                        for (var y = 0; y < d.length; y++) {
                            var p = d[y];
                            var v = p.dataField;
                            this.grid.sortby(v, p.ascending, null)
                        }
                        return
                    }
                }
            } else {
                if (this.filters.length == 0 && !this.virtualmode) {
                    if (this.cachedrecords) {
                        this.totalrecords = 0;
                        var B = this.cachedrecords;
                        this.records = B;
                        if (this.sortdata) {
                            if (this.grid && this.grid.sortmode !== "many") {
                                var e = this.sortfield;
                                if (this.sortcache[e]) {
                                    this.sortdata = null;
                                    var z = this.sortcache[e].direction;
                                    this.sortcache[e] = null;
                                    this.sortby(this.sortfield, z);
                                    return
                                }
                            } else {
                                var d = this.grid.getsortcolumns();
                                for (var y = 0; y < d.length; y++) {
                                    var p = d[y];
                                    var v = p.dataField;
                                    this.grid.sortby(v, p.ascending, null)
                                }
                                return
                            }
                        }
                    }
                }
            }
            var s = this.reload(this.records, this.rows, this.filter, this.updated, m);
            this.updated = null;
            if (this.rowschangecallback != null) {
                var o = this.rows;
                if (C != this.totalrows) {
                    this.rowschangecallback({
                        type: "PagingChanged",
                        data: this.getpagingdetails()
                    })
                }
                if (g != o.length) {
                    this.rowschangecallback({
                        type: "RowsCountChanged",
                        data: {
                            previous: g,
                            current: o.length
                        }
                    })
                }
                if (s.length > 0 || g != o.length) {
                    this.rowschangecallback({
                        type: "RowsChanged",
                        data: {
                            previous: g,
                            current: o.length,
                            diff: s
                        }
                    })
                }
            }
        };
        return this
    }
})(jqxBaseFramework);