var checkedItem = 0;
var gridIdIncrement = 0;
var checkedItemid = [];
var Items = [];
var monthDate = new Date();
monthDate.setMonth(monthDate.getMonth() - 6);
var allitems = ['#jqxCheckBox-71-1', '#jqxCheckBox-71-3', '#jqxCheckBox-71-4', '#jqxCheckBox-71-2', '#jqxCheckBox-71-5', '#jqxCheckBox-71-6', '#jqxCheckBox-71-7', '#jqxCheckBox-71-8', '#jqxCheckBox-72-1', '#jqxCheckBox-72-3', '#jqxCheckBox-72-4', '#jqxCheckBox-72-2', '#jqxCheckBox-72-5', '#jqxCheckBox-72-6', '#jqxCheckBox-72-7', '#jqxCheckBox-72-8', '#jqxCheckBox-73-1', '#jqxCheckBox-73-3', '#jqxCheckBox-73-4', '#jqxCheckBox-73-2', '#jqxCheckBox-73-5', '#jqxCheckBox-73-6', '#jqxCheckBox-73-7', '#jqxCheckBox-73-8', '#jqxCheckBox-74-1', '#jqxCheckBox-74-3', '#jqxCheckBox-74-4', '#jqxCheckBox-74-2', '#jqxCheckBox-74-5', '#jqxCheckBox-74-6', '#jqxCheckBox-74-7', '#jqxCheckBox-74-8', '#jqxCheckBox-75-1', '#jqxCheckBox-75-3', '#jqxCheckBox-75-4', '#jqxCheckBox-75-2', '#jqxCheckBox-75-5', '#jqxCheckBox-75-6', '#jqxCheckBox-75-7', '#jqxCheckBox-75-8', '#jqxCheckBox-76-1', '#jqxCheckBox-76-3', '#jqxCheckBox-76-4', '#jqxCheckBox-76-2', '#jqxCheckBox-76-5', '#jqxCheckBox-76-6', '#jqxCheckBox-76-7', '#jqxCheckBox-76-8', ];
var functionDefinitions = [{
    selector: "#jqxDailyChangeInPercentage",
    code: "DCP",
    description: "Daily Change In %"
}, {
    selector: "#jqxDailyChangeIncrement",
    code: "DCI",
    description: "Daily Change Increment"
}, {
    selector: "#jqxWeeklyChangeInPercentage",
    code: "WCP",
    description: "Weekly Change In %"
}, {
    selector: "#jqxWeeklyChangeIncrement",
    code: "WCI",
    description: "Weekly Change Increment"
}, {
    selector: "#jqx10yrPercentile",
    code: "10YP",
    description: "10 Yr Percentile"
}, {
    selector: "#jqx20yrPercentile",
    code: "20YP",
    description: "20 Yr Percentile"
}, {
    selector: "#jqxCenturyPercentile",
    code: "CP",
    description: "Century Percentile"
}, {
    selector: "#jqx50dMovAvg",
    code: "50D",
    description: "50d MovAvg"
}, {
    selector: "#jqx100dMovAvg",
    code: "100D",
    description: "100d MovAvg"
}, {
    selector: "#jqx200dMovAvg",
    code: "200D",
    description: "200d MovAvg"
}];
var funcionFilter = functionDefinitions.map(function(item) {
    return item.selector;
});
$(window).on('load', function() {
    $('#overlay').fadeOut();
    $('#nav-tabContent').show();
});
$(document).ready(function() {
    $("#viewall").jqxButton({
        theme: 'dark',
        width: 110,
        height: 35,
        template: "primary"
    });
    $("#viewall").css("display", "block");
    $("#viewall").click(function() {
        popupWindow('/bourse/allnews', 'Libvol - View All News', window, 1300, 600);
    });
    var RestrictDate = new Date();
    RestrictDate.setMonth(RestrictDate.getMonth() - 6);
    $("#dateInputFrom").jqxDateTimeInput({
        min: new Date(RestrictDate.getFullYear(), RestrictDate.getMonth(), RestrictDate.getDate()),
        theme: 'dark',
        width: '200px',
        height: '25px'
    });
    $("#dateInputFrom").jqxDateTimeInput('setDate', monthDate);
    $("#dateInputTo").jqxDateTimeInput({
        theme: 'dark',
        width: '200px',
        height: '25px'
    });
    $('[data-toggle="tooltip"]').tooltip();
    for (i = 0; i < allitems.length; i++) {
        $(allitems[i]).jqxCheckBox({
            theme: 'dark',
            width: 50,
            height: 25
        });
    }
    for (i = 0; i < funcionFilter.length; i++) {
        $(funcionFilter[i]).jqxCheckBox({
            theme: 'dark',
            width: 120,
            height: 25
        });
    }
    $("#Clearfilter").jqxButton({
        theme: 'dark',
        height: 30,
        width: 74
    });
    $("#show").jqxButton({
        theme: 'dark',
        height: 30,
        width: 74
    });
    $("#Clearfilter").click(function() {
        for (var i = 0; i < allitems.length; i++) {
            $(allitems[i]).jqxCheckBox({
                checked: false
            });
        }
        for (var i = 0; i < functionDefinitions.length; i++) {
            $(functionDefinitions[i].selector).jqxCheckBox({
                checked: false
            });
        }
        for (i = 0; i < allitems.length; i++) {
            $(allitems[i]).jqxCheckBox({
                disabled: false
            });
        }
        checkedItem = 0;
    });
    $("#show").click(function() {
        Items = [];
        gridIdIncrement = 0;
        if (checkedItem > 0) {
            $("#collapseFilter").removeClass('show');
            $('#grid-content').css('display', 'block');
            drawGrids();
        } else {
            $('#alertFiltter-modal').modal('show');
            $("#collapseFilter").addClass('show');
        }
    });
    $('.jqx-checkbox-items').on('change', function(event) {
        var $checkbox = $(this);
        var checked = event.args.checked;
        var checkboxId = $checkbox.attr('id');
        Items = "";
        if (checked) {
            checkedItem = checkedItem + 1;
            checkedItemid.push("#" + checkboxId);
        } else {
            checkedItem = checkedItem - 1;
            checkedItemid = checkedItemid.filter(function(id) {
                return id !== "#" + checkboxId;
            });
        }
        if (checkedItem >= 4) {
            for (i = 0; i < allitems.length; i++) {
                $(allitems[i]).jqxCheckBox({
                    disabled: true
                });
            }
            for (i = 0; i < checkedItemid.length; i++) {
                if (checkedItemid[i] != null) {
                    $(checkedItemid[i]).jqxCheckBox({
                        disabled: false
                    });
                }
            }
            enableDisableDropDowns(true);
        } else {
            for (i = 0; i < allitems.length; i++) {
                $(allitems[i]).jqxCheckBox({
                    disabled: false
                });
            }
            enableDisableDropDowns(false);
        }
    });
});
async function drawGrids() {
    $('#overlayChart').show();
    $("#grids-container").empty();
    for (i = 0; i < checkedItemid.length; i++) {
        $('#overlay').show();
        if (checkedItemid[i] != null) {
            Items.push(checkedItemid[i]);
            await getgridData(checkedItemid[i], getSelectedFunction());
        }
    }
    $('#overlay').fadeOut();
}

function getgridData(item, functions) {
    console.log("[DATA-FUNCTION] selected functions =", functions);
    dataParam = {
        "fromdate": $.jqx.dataFormat.formatdate($("#dateInputFrom").jqxDateTimeInput('getDate'), 'yyyy-MM-dd'),
        "todate": $.jqx.dataFormat.formatdate($("#dateInputTo").jqxDateTimeInput('getDate'), 'yyyy-MM-dd'),
        "subgroupId": itemValue[item].subGroupId,
        "groupId": itemValue[item].GroupId,
        "functions": functions,
        "factor": itemValue[item].factor
    };
    console.log("[DATA-FUNCTION] request =", dataParam);
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/skews/getgriddatafunction",
            data: JSON.stringify(dataParam),
            dataType: 'json',
            timeout: 600000,
            success: function(response) {
                resolve(response);
                addDataGrid(dataParam, response, response.gridTitle);
            },
            error: function(error) {
                console.log("[DATA-FUNCTION] request error =", error);
                reject(error);
            }
        });
    });
}

function addDataGrid(dataParam, data, title) {
    var source = {
        datatype: "json",
        datafields: [{
            name: 'referDate',
            type: 'string'
        }, {
            name: 'dailyInput',
            type: 'string'
        }, {
            name: 'value1',
            type: 'string'
        }, {
            name: 'value2',
            type: 'string'
        }, {
            name: 'value3',
            type: 'string'
        }, {
            name: 'WCI',
            type: 'string'
        }, {
            name: '10YP',
            type: 'string'
        }, {
            name: '20YP',
            type: 'string'
        }, {
            name: '50D',
            type: 'string'
        }, {
            name: '100D',
            type: 'string'
        }, {
            name: '200D',
            type: 'string'
        }, {
            name: 'CP',
            type: 'string'
        }],
        id: 'id',
        localdata: data
    };
    dataArray = ['value1', 'value2', 'value3'];
    var dataAdapter = new $.jqx.dataAdapter(source);
    var gridId = "grid_" + gridIdIncrement;
    $("#grids-container").append('<div id="' + gridId + '" class="item m-2 align-items-top"></div>');
    dynamicColumns = getColumns(dataParam);
    $('#' + gridId).jqxGrid({
        width: (dataParam.functions.length == 0) ? 2 * 110 : (2 + dataParam.functions.length) * 110,
        height: 710,
        theme: 'dark',
        pageable: true,
        pagesize: 100,
        pagesizeoptions: ['50', '100', '200'],
        source: dataAdapter,
        showfilterrow: true,
        filterable: true,
        columnsresize: false,
        columns: dynamicColumns,
        selectionmode: 'none',
        columngroups: [{
            text: title,
            align: 'center',
            name: 'country'
        }]
    });
    gridIdIncrement++;
}

function getColumns(dataParam) {
    if (dataParam.functions.length == 0) {
        return [{
            text: ' DATE',
            columngroup: 'country',
            datafield: 'referDate',
            width: '50%'
        }, {
            text: 'DAILY INPUT',
            columngroup: 'country',
            datafield: 'dailyInput',
            cellclassname: 'factorBold',
            width: '50%'
        }];
    } else {
        columnWidth = 100 / (dataParam.functions.length + 2);
        columns = [{
            text: ' DATE',
            columngroup: 'country',
            datafield: 'referDate',
            width: columnWidth + '%'
        }, {
            text: 'DAILY INPUT',
            columngroup: 'country',
            datafield: 'dailyInput',
            cellclassname: 'factorBold',
            width: columnWidth + '%'
        }];
        for (j = 0; j < dataParam.functions.length; j++) {
            columns.push({
                text: getFunctionDesc(dataParam.functions[j]),
                columngroup: 'country',
                datafield: dataArray[j],
                width: columnWidth + '%'
            });
        }
        return columns;
    }
}

function getSelectedFunction() {
    var selectedFunctions = [];
    for (var i = 0; i < functionDefinitions.length; i++) {
        if ($(functionDefinitions[i].selector).jqxCheckBox('val')) {
            selectedFunctions.push(functionDefinitions[i].code);
        }
    }
    console.log("[DATA-FUNCTION] getSelectedFunction =", selectedFunctions);
    return selectedFunctions;
}

function getFunctionDesc(functionCode) {
    var functionDefinition = functionDefinitions.find(function(item) {
        return item.code === functionCode;
    });
    if (functionDefinition) {
        return functionDefinition.description.toUpperCase();
    }
    return '';
}