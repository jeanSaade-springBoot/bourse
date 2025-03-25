var allitems = [
	'#jqxCheckBox-73-1',
	'#jqxCheckBox-73-3',
	'#jqxCheckBox-73-4',
	'#jqxCheckBox-73-2',
	'#jqxCheckBox-73-5',
	'#jqxCheckBox-73-6',
	'#jqxCheckBox-73-7',
	'#jqxCheckBox-73-8',
];

const graphName = "solana";
const candleGroupIdSubgroups = [[73, 8], [73, 2]];
const showGroupOfOptions = true;
const candleGraphTitle = "SOLANA";

const graphService = "cryptos";

$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {

   if(timeRange =="Daily")
		{ 
		
		monthDate = new Date();
		monthDate.setMonth(monthDate.getMonth() - 6);
		monthDate.setHours(0, 0, 0, 0);
		
		 $('#DailyData-btn').addClass('active');
         $('#4HoursData-btn').removeClass('active');
         $('#weeklyData-btn').removeClass('active');
		
		 $('#functionOptionsMenu').addClass("d-flex");
		 $('#functionOptionsMenu').removeClass("d-none");
		 $('#euroTime').addClass("d-flex");
         $('#euroTime').removeClass("d-none");
		}
		else 
		if(timeRange=="4h")
		{
		 monthDate = new Date();
		 monthDate.setDate(monthDate.getDate() - 21);
	 	 // monthDate.setFullYear((new Date).getFullYear() - 3);
	 	 monthDate.setHours(0, 0, 0, 0);
		
		  $('#4HoursData-btn').addClass('active');
          $('#DailyData-btn').removeClass('active');
          $('#weeklyData-btn').removeClass('active');
          
          $('#functionOptionsMenu').removeClass("d-flex");
          $('#functionOptionsMenu').addClass("d-none");
          $('#euroTime').addClass("d-none");
          $('#euroTime').removeClass("d-flex");
		 
		}else 
		if(timeRange=="1w")
		{
		
		 monthDate = new Date();
		 monthDate.setMonth(monthDate.getMonth() - 6);
	 	 // monthDate.setFullYear((new Date).getFullYear() - 3);
	 	 monthDate.setHours(0, 0, 0, 0);
		
		  $('#4HoursData-btn').removeClass('active');
          $('#DailyData-btn').removeClass('active');
          $('#weeklyData-btn').addClass('active');
          
          $('#functionOptionsMenu').removeClass("d-flex");
          $('#functionOptionsMenu').addClass("d-none");
          $('#euroTime').addClass("d-none");
          $('#euroTime').removeClass("d-flex");
		
		}
	initializeNewsBanner();
	initializePeriods();
	initializeTypes();
	initializeFunctions(73);

	initializeNavigationButtons();
	initialiazeItems(allitems, 2);
	initialiazeClearFilterButton();
	initializeShowFilterButton();

	getGraphHistoryByScreenName(graphName);

	$("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });
	$("#groupOfOptions").hide();
	$("#groupOfOptions").jqxButtonGroup({ theme: 'dark', mode: 'radio' });
	$('#groupOfOptions').jqxButtonGroup('setSelection', 0);
	  
	$('#euroTime').addClass("d-none");
    $('#euroTime').removeClass("d-flex");
          

	$(document).on('graphTypeChange', function(event, type) {
		$("#groupOfOptions").hide();
	});

	$("#groupOfOptions").on('buttonclick', function(event) {
		candleStick(graphName, true);

	});

});

function drawGraph() {

	const removeEmpty = true;
	const chartType=typeof($("#chartTypes").find(".active")[0]) !='undefined'?$("#chartTypes").find(".active")[0].id:null;
	if(chartType=="candle")
		{    $("#functionOptionsMenu").show(); //hide
			candleStick(graphName,true);
		}
	else
	{   
		$("#functionOptionsMenu").show();
	 	$("#groupOfOptions").hide();
		getGraphDataCrypto(graphService, graphName, removeEmpty, true);
	}
}
function toggleGraphData(time) {
    if(time==1)
		{ 
		timeRange = "Daily";
		
			monthDate = new Date();
		monthDate.setMonth(monthDate.getMonth() - 4);
			monthDate.setHours(0, 0, 0, 0);
		
			 $('#DailyData-btn').addClass('active');
	         $('#4HoursData-btn').removeClass('active');
         $('#weeklyData-btn').removeClass('active');
			 drawGraph();
			 $('#functionOptionsMenu').addClass("d-flex");
			 $('#functionOptionsMenu').removeClass("d-none");
			 $('#euroTime').addClass("d-flex");
             $('#euroTime').removeClass("d-none");
		}
		else if(time==2)
		{timeRange = "4h";
		
		 monthDate = new Date();
		 monthDate.setDate(monthDate.getDate() - 21);
	 	 // monthDate.setFullYear((new Date).getFullYear() - 3);
	 	 monthDate.setHours(0, 0, 0, 0);
	 	 
		  $('#4HoursData-btn').addClass('active');
          $('#DailyData-btn').removeClass('active');
          $('#weeklyData-btn').removeClass('active');
          
          $('#functionOptionsMenu').removeClass("d-flex");
          $('#functionOptionsMenu').addClass("d-none");
          $('#euroTime').addClass("d-none");
          $('#euroTime').removeClass("d-flex");
		 drawGraph();
		}else 
		{timeRange = "1w";
		
		 monthDate = new Date();
		 monthDate.setMonth(monthDate.getMonth() - 6);
	 	 // monthDate.setFullYear((new Date).getFullYear() - 3);
	 	 monthDate.setHours(0, 0, 0, 0);
		
		  $('#4HoursData-btn').removeClass('active');
          $('#DailyData-btn').removeClass('active');
          $('#weeklyData-btn').addClass('active');
          
          $('#functionOptionsMenu').removeClass("d-flex");
          $('#functionOptionsMenu').addClass("d-none");
          $('#euroTime').addClass("d-none");
          $('#euroTime').removeClass("d-flex");
		 drawGraph();
		}
}
document.addEventListener('DOMContentLoaded', function () {
    connectWebSocket();

    // Subscribe to chart updates
    addSubscription('/all/chart', function (message) {
        
        // Parse and handle the message
        try {
			var graphService = "cryptos";
            updateChart(graphService);
        } catch (e) {
            console.error('Error parsing message:', e);
        }
    });
    addSubscription('/all/chart/SOL', function (message) {

    try {
        const data = JSON.parse(message.body); // Parse incoming data
        const checkedItemValues = [];

        // Extract checked items
        for (let i = 0; i < checkedItemid.length; i++) {
            if (checkedItemid[i] !== null) {
                checkedItemValues.push(checkedItemid[i]);
            }
        }

        // Format date for x-axis
        let formattedDate = formatDate(data.startTime);
        let newDataPoint = null;

        // Loop through selected items and find the correct y-axis value
        for (let i = 0; i < checkedItemValues.length; i++) {
            let selectedMetric = checkedItemValues[i];

            if (itemValue[selectedMetric].description.includes("open")) {
                newDataPoint = { x: formattedDate, y: data.open };
            }
            if (itemValue[selectedMetric].description.includes("high")) {
                newDataPoint = { x: formattedDate, y: data.high };
            }
            if (itemValue[selectedMetric].description.includes("low")) {
                newDataPoint = { x: formattedDate, y: data.low };
            }
            if (itemValue[selectedMetric].description.includes("close")) {
                newDataPoint = { x: formattedDate, y: data.close };
            }
            if (itemValue[selectedMetric].description.includes("volume")) {
                newDataPoint = { x: formattedDate, y: data.volume };
            }
            if (itemValue[selectedMetric].description.includes("marketcap")) {
                newDataPoint = { x: formattedDate, y: data.marketcap };
            }
            if (newDataPoint) {
            // **Remove existing entry with the same x (date)**
            chart.w.config.series[i].data = chart.w.config.series[i].data.filter(point => point.x !== formattedDate);

            // **Append new data point**
            chart.w.config.series[i].data.push(newDataPoint);
 			}
        }

        if (newDataPoint) {
           // **Update the chart**
            chart.updateOptions({
                series: chart.w.config.series
            });

        }

    } catch (e) {
        console.error("Error processing SOL message:", e);
    }
});

addSubscription('/all/chart/candle/SOL', function (message) {

    try {
        const data = JSON.parse(message.body); // Parse incoming data
  		data[0].graphResponseDTOLst.forEach(item => {
				item.x = item.x.split(" ")[0];
				item.y = JSON.parse(item.y).map(yValue => parseFloat(yValue));
			});
	        let liveData = data[0].graphResponseDTOLst[0];
	        var yAxisFormat = getFormat(data[0].config.yAxisFormat);

	        const chartType=typeof($("#chartTypes").find(".active")[0]) !='undefined'?$("#chartTypes").find(".active")[0].id:null;
		    let formattedDate = liveData.x;
	        if(timeRange == "Daily" && chartType=="candle")
	        {
				chart.w.config.series[0].data = chart.w.config.series[0].data.filter(
			        point => point.x !== formattedDate && point.y.length !== 0
			    );
			
			    // Append new data point
			    chart.w.config.series[0].data.push(liveData);
			
				processDataAndAddNewEndDateForExtraSpaceInGraph(chart.w.config.series[0].data ,0.05,true)
						    .then(({ response }) => {
									chart.w.config.series[0].data = response;
						    })
						    .catch(error => {
						        console.error('Error processing data:', error);
						    });	
				const allValues =chart.w.config.series[0].data.flatMap(item => item.y ? item.y.map(Number) : []);
			    
			// Find the minimum and maximum values
			const min = Math.min(...allValues);
			const max = Math.max(...allValues);


			const values = addMarginToMinMax(min, max, 5);

			var valueMin = values;
			var valueMax = values;
			 calculatedMinValue = Math.sign(min) == -1 ? -Math.abs(min) - valueMin : Math.abs(min) - valueMin;
			 calculatedMaxValue = Math.sign(max) == -1 ? -Math.abs(max) + valueMax : Math.abs(max) + valueMax;
			
			 let yaxisConfig =[{
					tooltip: {
						enabled: true
					},
					labels: {
						minWidth: 75, maxWidth: 75,
						style: {
							fontSize: fontsize,
						},
						formatter: function(val, index) {
						 // Ensure val is a valid number before calling toFixed()
					    if (typeof val === "number" && !isNaN(val)) {
					        if (yAxisFormat[1])
					            return val.toFixed(yAxisFormat[0]);
					        else
					            return val.toFixed(yAxisFormat[0]) + "%";
					    }
					    return ""; 
											}
					},
					tickAmount: 6,
					min: calculatedMinValue,
					max: Math.sign(max) == -1 ? -Math.abs(max) + valueMax : Math.abs(max) + valueMax,
					axisBorder: {
						width: 3,
						show: true,
						color: '#ffffff',
						offsetX: 0,
						offsetY: 0
					},
				}];
			    // Update the chart
			    chart.updateOptions({
			        series: chart.w.config.series,
			        yaxis: yaxisConfig,
			    });
			}
	    } catch (e) {
	        console.error("Error processing SOL message:", e);
	    }
	});
});