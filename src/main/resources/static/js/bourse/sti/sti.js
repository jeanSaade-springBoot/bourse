 var allitems = ["#jqxCheckBoxNikkei",
			"#jqxCheckBoxNikkei_usdjpy",
			"#jqxCheckBoxCsi",
			"#jqxCheckBoxCsi_usdcny",
			"#jqxCheckBoxNifty",
			"#jqxCheckBoxNifty_usdinr",
			"#jqxCheckBoxKospi",
			"#jqxCheckBoxKospi_usdkrw",
			"#jqxCheckBoxHangseng",
			"#jqxCheckBoxHangseng_usdhkd",
			"#jqxCheckBoxHismbi",
			"#jqxCheckBoxHismbi_usdhkd",
			"#jqxCheckBoxHismpi",
			"#jqxCheckBoxHismpi_usdhkd",
			"#jqxCheckBoxDowjones",
			"#jqxCheckBoxSandp",
			"#jqxCheckBoxNasdaq",
			"#jqxCheckBoxRussell",
			"#jqxCheckBoxFang",
			"#jqxCheckBoxDjmajorbanks",
			"#jqxCheckBoxDjregionalbanks",
			"#jqxCheckBoxDax",
			"#jqxCheckBoxDax_Eurusd",
			"#jqxCheckBoxCac",
			"#jqxCheckBoxCac_Eurusd",
			"#jqxCheckBoxMib",
			"#jqxCheckBoxMib_Eurusd",
			"#jqxCheckBoxFtse",
			"#jqxCheckBoxFtse_Gbpusd",
			"#jqxCheckBoxStoxx50",
			"#jqxCheckBoxStoxx50_Eurusd",
			"#jqxCheckBoxStoxx600",
			"#jqxCheckBoxStoxx600_Eurusd",
			"#jqxCheckBoxEubanks",
			"#jqxCheckBoxEubanks_eurusd",
			"#jqxCheckBoxTadawul",
			"#jqxCheckBoxTadawul_usdsar",
			"#jqxCheckBoxEgx",
			"#jqxCheckBoxEgx_usdegp",
			"#jqxCheckBoxBist",
			"#jqxCheckBoxBist_usdtry",
			"#jqxCheckBoxMoex",
			"#jqxCheckBoxMoex_usdrub",
			"#jqxCheckBoxJsttop",
			"#jqxCheckBoxJsttop_usdzar",
			"#jqxCheckBoxBovespa",
			"#jqxCheckBoxBovespa_usdbrl",
			"#jqxCheckBoxMexbol",
			"#jqxCheckBoxMexbol_usdmxn",
			"#jqxCheckBoxBitcoin",
			"#jqxCheckBoxEtherium",
			"#jqxCheckBoxSolana",
			"#jqxCheckBoxCardano",
			"#jqxCheckBoxShiba",
		];	
var chart;
var chartResponse;
var chartConfigSettings;
const graphName="stiGraph"; 
			   
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	
     initializeNewsBanner();
	 initializePeriods();
	 initializeTypes();
	 initializeFunctions();
	 
	 initializeNavigationButtons();
	 initialiazeItems(allitems,1);
	 initialiazeClearFilterButton();
	 initializeShowFilterButton();
	 
	 getGraphHistoryByScreenName(graphName);
	 
     $("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });
     
    $("#draw").jqxButton({ theme: 'dark', height: 30, width: 140 });
	
	$("#draw").click(function() { 
		 var result = findThirdPoint(x1, y1, x2, y2, x3);
		
			chart.updateOptions({
			 series:[ {
		    name: 'Trendline',
		    data: result,
		    type:'line'
		  },{
            name: chartConfigSettings.response[0].config.displayDescription==null?itemValue[chartConfigSettings.checkedItemValues[0]].title:chartConfigSettings.response[0].config.displayDescription,
			 data: chartResponse,
             type:'area'
          }, ],
           //colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
           fill: {
			  type: ['solid']
			},
			markers: {
			  size: [0, 1]
			},
			 stroke: {
			 colors: [ "#FF0000","#FFFFFF",],
				},
      	  });
          
          disableOptions(true);
		 
	});
	
	$('#jqxWidget').on('select', function (event) 
{
    var args = event.args;
    if (args) {
    // index represents the item's index.                       
    var index = args.index;
    var item = args.item;
    // get item's label and value.
  	 y1=args["item"].originalItem.y;
     x1=args["item"].originalItem.label;
     console.log(x1,y1)
}
}); 
$('#jqxWidget1').on('select', function (event) 
{
    var args = event.args;
    if (args) {
    // index represents the item's index.                       
    var index = args.index;
    var item = args.item;
    // get item's label and value.
  	 y2=args["item"].originalItem.y;
     x2=args["item"].originalItem.label;
     console.log(x2,y2)
}
}); 

    });

function drawGraph() {
	
	var graphService = "sti";
	const removeEmpty = true;
	//getGraphDataWithTrendLine(graphService,graphName,removeEmpty,true);
		drawTrendLine(graphService,graphName,removeEmpty,true);
}
function drawTrendLine(graphService,graphName,removeEmpty,saveHistory)
{
		
	mode = "merge";
	var dataParam;
	var checkedItemValues = [];
	$('#overlayChart').show();

	var fromdate = formatDate(monthDate);
	var todate = formatDate(date);
	$("#mainChart").html("");
	$("#mainChart").css("display", "block");
	
	if (checkDateMonth(monthDate, date)) {
		$("#button-monthForward").prop('disabled', false);
	}
	else {
		$("#button-monthForward").prop('disabled', true);
	}

	if (checkDateYear(monthDate, date)) {
		$("#button-yearForward").prop('disabled', false);
	}
	else {
		$("#button-yearForward").prop('disabled', true);
	}

	var Period = getChartPeriod();
	var type = getSelectedType();
	if (chart != null)
		chart.destroy();

	for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					checkedItemValues.push(checkedItemid[i]);
			}
			
	chart = new ApexCharts(document.querySelector("#mainChart"), options_missingDates);

	chart.render();
	
					title = itemValue[checkedItemValues[0]].title;

					dataParam = {
						"fromdate": fromdate,
						"todate": todate,
						"period":  Period,
						"type": type,
						"subGroupId1": itemValue[checkedItemValues[0]].subGroupId,
						"groupId1": itemValue[checkedItemValues[0]].GroupId,
						"isFunctionGraph":functionId=='-1'?false:true,
						"functionId":functionId,
						//"removeEmpty1":itemValue[checkedItemValues[0]].subGroupId==2?"true":false
						"removeEmpty1":removeEmpty
					};
					
					$.ajax({
						type: "POST",
						contentType: "application/json; charset=utf-8",
						url: "/"+graphService+"/getgraphdatabytype",
						data: JSON.stringify(dataParam),
						dataType: 'json',
						timeout: 600000,
						success: function(response) {
							
						   var source = transformData(response[0].graphResponseDTOLst);
				           chartResponse =  response[0].graphResponseDTOLst;
    	 
						    x3= getMaxDate(response[0].graphResponseDTOLst);
						    
							$("#jqxWidget").jqxComboBox({ theme: 'dark',  source: source, width: 200, height: 30,});
							$("#jqxWidget1").jqxComboBox({ theme: 'dark', source: source, width: 200, height: 30,});
							
							newstartdate = new Date();
							startDateF1 = response[0].config.startDate;
							if (startDateF1 != null)
								startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);


							T1 = response[0].config.displayDescription == null ? itemValue[checkedItemValues[0]].title : response[0].config.displayDescription;
							title = T1;
							if (response[0].config.yAxisFormat != null && response[0].config.yAxisFormat != "") {
								if (response[0].config.yAxisFormat.includes("%")) {
									isdecimal = false;
									if (typeof response[0].config.yAxisFormat.split(".")[1] != 'undefined')
										yaxisformat = response[0].config.yAxisFormat.split("%")[0].split(".")[1].length;
									else
										yaxisformat = 0;
								}
								else {
									if (typeof response[0].config.yAxisFormat.split(".")[1] != 'undefined')
										yaxisformat = response[0].config.yAxisFormat.split(".")[1].length
									else
										yaxisformat = 0

									isdecimal = true;
								}
							}
							else
								yaxisformat = 3;

							var dbchartType1 = response[0].config.chartType;
							chartType1 = getChartType(dbchartType1)[0];
							curve1 = getChartType(dbchartType1)[1];
							disableOptions(false);
							var getFormatResult = getFormat(response[0].config.dataFormat);
							chartDbFontSize = response[0].config.chartSize;
							chartTransparency = checkActiveChartColorTransparency($("#chartColorTransparency").find(".active")[0],response[0].config.chartTransparency);
							chartType1 = checkActiveChartType($("#chartTypes").find(".active")[0], chartType1, Period);
							chartColor = chartType1=='line'?"#ffffff":checkActiveChartColor($("#chartColor").find(".active")[0], response[0].config.chartColor);
							fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], chartDbFontSize);
							markerSize = checkActiveChartMarker($("#chartMarker").find(".active")[0], response[0].config.chartshowMarkes);
							showGrid = checkActiveChartGrid($("#gridOptions").find(".active")[0], response[0].config.chartShowgrid);
							showLegend	= checkActiveChartLegend($("#gridLegend").find(".active")[0], showLegend);
 
							chart.updateOptions(getChartDailyOption(title+getTitlePeriodAndType(), showGrid, fontsize, markerSize));
							updateChartOption();
							
							min = Math.min.apply(null, response[0].graphResponseDTOLst.map(function(item) {
								return item.y;
							}));
							max = Math.max.apply(null, response[0].graphResponseDTOLst.map(function(item) {
									return item.y;
								}));
							//minvalue = parseFloat((Math.floor(min * 20) / 20).toFixed(2));
							//maxvalue = parseFloat((Math.floor(max * 20) / 20).toFixed(2));
							minvalue = min;
							maxvalue = max;
							var yaxisformat = getFormat(response[0].config.yAxisFormat);
							
							notDecimal=yaxisformat[1];
					        nbrOfDigits=yaxisformat[0];
							
							
							var getFormatResult0 = getFormat(response[0].config.dataFormat);
					       
							 chartConfigSettings={functionId:functionId+1,
											 isDecimal:isdecimal,
											 yAxisFormat:yaxisformat,
											 fontSize:fontsize,
											 min:min,
											 max:max,
											 minvalue:minvalue,
											 maxvalue:maxvalue,
											 chartType1:chartType1,
											 getFormatResult0:getFormatResult0,
											 response:response,
											 Period:Period,
											 chartColor:chartColor,
											 chartTransparency:chartTransparency,
											 checkedItem:checkedItem};
							//if(Period=='d')
								updateChartSelectedItemMissingDates(chartConfigSettings);
							//else
							//	updateChartSelectedItem(chartConfigSettings);
						    checkIfRenderFlag(graphName,itemValue[checkedItemValues[0]]);
							$('#overlayChart').hide();

						},
						error: function(e) {

							console.log("ERROR : ", e);

						}
					});
					
		    (saveHistory)?saveGraphHistory(graphName,checkedItemValues,Period,type):null;
		    
	$("#dateFrom-mainChart").val(fromdate);
	$("#dateTo-mainChart").val(todate);
	
	inGraphNews(getSelectedFields((checkedItemValues.length==0?allItemsSelected(Items):checkedItemValues),itemValue));

}
function getGraphDataWithTrendLine(graphService,graphName,removeEmpty,saveHistory){
	
	mode = "merge";
	var dataParam;
	var checkedItemValues = [];
	$('#overlayChart').show();

	var fromdate = formatDate(monthDate);
	var todate = formatDate(date);
	$("#mainChart").html("");
	$("#mainChart").css("display", "block");
	
	if (checkDateMonth(monthDate, date)) {
		$("#button-monthForward").prop('disabled', false);
	}
	else {
		$("#button-monthForward").prop('disabled', true);
	}

	if (checkDateYear(monthDate, date)) {
		$("#button-yearForward").prop('disabled', false);
	}
	else {
		$("#button-yearForward").prop('disabled', true);
	}

	var Period = getChartPeriod();
	var type = getSelectedType();
	if (chart != null)
		chart.destroy();

	for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					checkedItemValues.push(checkedItemid[i]);
			}
				//enableDisableDropDowns(false);
					title = itemValue[checkedItemValues[0]].title;

					dataParam = {
						"fromdate": fromdate,
						"todate": todate,
						"period":  Period,
						"type": type,
						"subGroupId1": itemValue[checkedItemValues[0]].subGroupId,
						"groupId1": itemValue[checkedItemValues[0]].GroupId,
						"isFunctionGraph":functionId=='-1'?false:true,
						"functionId":functionId,
						//"removeEmpty1":itemValue[checkedItemValues[0]].subGroupId==2?"true":false
						"removeEmpty1":removeEmpty
					};
					
					$.ajax({
						type: "POST",
						contentType: "application/json; charset=utf-8",
						url: "/"+graphService+"/getgraphdatabytype",
						data: JSON.stringify(dataParam),
						dataType: 'json',
						timeout: 600000,
						success: function(response) {
							   var source = transformData(response[0].graphResponseDTOLst);
				               
							$("#jqxWidget").jqxComboBox({ selectedIndex: 0, source: source, width: 200, height: 30,});
							$("#jqxWidget1").jqxComboBox({ selectedIndex: 0, source: source, width: 200, height: 30,});
    	 chartResponse =  response[0].graphResponseDTOLst;
    	 
		 x3= getMaxDate(response[0].graphResponseDTOLst)
		 var options = {
          series: [{
            name: "1",
            data: response[0].graphResponseDTOLst
          },
        
        ],
          chart: {
          height: 525,
          type: 'line',
          zoom: {
            enabled: false
          },
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#FFFFFF", "#FF0000"],
        stroke: {
          width: [2, 3, 3],
          curve: 'straight',
          dashArray: [0, 0, 5]
        },
        title: {
          text: 'Graph TREND LINE',
          align: 'left'
        },
        legend: {
          tooltipHoverFormatter: function(val, opts) {
            return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
          }
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
			type: 'datetime',
			tickAmount: 19,
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val + " (mins)"
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val + " per session"
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                }
              }
            }
          ]
        },
        grid: {
          borderColor: '#f1f1f1',
        }
        };
if (chart != null)
		chart.destroy();
        chart = new ApexCharts(document.querySelector("#mainChart"), options);
        chart.render();
      
							
			
							$('#overlayChart').hide();

						},
						error: function(e) {

							console.log("ERROR : ", e);

						}
					});
					
				

		    (saveHistory)?saveGraphHistory(graphName,checkedItemValues,Period,type):null;
		    
	$("#dateFrom-mainChart").val(fromdate);
	$("#dateTo-mainChart").val(todate);
	
	inGraphNews(getSelectedFields((checkedItemValues.length==0?allItemsSelected(Items):checkedItemValues),itemValue));
}
function transformData(data) {
    var transformedData = [];
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        var label = item.x;
        var y = item.y;
        var html = "<div tabIndex=0 style='padding: 1px;'><div>Date: " + label + "</div><div>Value: " + y + "</div></div>";
        transformedData.push({ html: html, label: label, y: y });
    }
    return transformedData;
}

function parseDate(dateString) {
    var parts = dateString.split('-');
    var day = parseInt(parts[0]);
    var month = parts[1];
    var year = parseInt(parts[2]) + 2000; // Assuming the year is in the format yy and needs to be converted to yyyy
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var monthIndex = months.indexOf(month);
    return new Date(year, monthIndex, day);
}

function getMaxDate(data) {
    var maxDate = null;
    for (var i = 0; i < data.length; i++) {
        var dateString = data[i].x;
        var currentDate = parseDate(dateString);
        if (!maxDate || currentDate > maxDate) {
            maxDate = currentDate;
        }
    }
    return maxDate;
}
