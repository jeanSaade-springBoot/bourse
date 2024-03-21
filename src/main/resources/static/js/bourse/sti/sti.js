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
     
    $("#draw").jqxButton({ theme: 'dark', height: 30, width: 74 });
	
	$("#draw").click(function() { 
		 var result = findThirdPoint(x1, y1, x2, y2, x3);
		
		  chart.updateSeries([{
            name: "1",
            data: chartResponse
          },{
		    name: '2',
		    data: result
		  }]);
		 
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
	getGraphDataWithTrendLine(graphService,graphName,removeEmpty,true);
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
