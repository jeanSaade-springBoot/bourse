var allitems = [
	'#jqxCheckBox-76-1',
	'#jqxCheckBox-76-3',
	'#jqxCheckBox-76-4',
	'#jqxCheckBox-76-2',
	'#jqxCheckBox-76-5',
	'#jqxCheckBox-76-6',
	'#jqxCheckBox-76-7',
	'#jqxCheckBox-76-8',
];

const graphName = "xrp";
const candleGroupIdSubgroups = [[76, 8], [76, 2]];
const showGroupOfOptions = true;
const candleGraphTitle = "XRP";

var  graphService = "cryptos";
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {

   if(timeRange =="Daily")
		{ 
		
		monthDate = new Date();
		monthDate.setMonth(monthDate.getMonth() - 4);
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
	initializeFunctions(76);

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
		candleStick(graphName, false);

	});

});

function drawGraph() {

	const removeEmpty = true;
	const chartType=typeof($("#chartTypes").find(".active")[0]) !='undefined'?$("#chartTypes").find(".active")[0].id:null;
	if(chartType=="candle")
		{    $("#functionOptionsMenu").show(); //hide
			candleStick(graphName,false);
		}
	else
	{    $("#functionOptionsMenu").show();
	 	$("#groupOfOptions").hide();
		getGraphDataCrypto(graphService, graphName, removeEmpty, false);
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
    addSubscription('/all/chart/XRP', function (message) {

    try {
        const data = JSON.parse(message.body); // Parse incoming data
        const checkedItemValues = [];
if(timeRange == "Daily")
  	 {
        // Extract checked items
        for (let i = 0; i < checkedItemid.length; i++) {
            if (checkedItemid[i] !== null) {
                checkedItemValues.push(checkedItemid[i]);
            }
        }

        // Format date for x-axis
        let formattedDate = formatDateShort(data.startTime);
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
           
            let min = Math.min.apply(null, chart.w.config.series[0].data.map(function(item) {
						return item.y;
					}));
			let max = Math.max.apply(null, chart.w.config.series[0].data.map(function(item) {
							return item.y;
						}));
			
			const values = addMarginToMinMax(min, max, 5);

			var valueMin = values;
			var valueMax = values;
			 calculatedMinValue = Math.sign(min) == -1 ? -Math.abs(min) - valueMin : Math.abs(min) - valueMin;
			 calculatedMaxValue = Math.sign(max) == -1 ? -Math.abs(max) + valueMax : Math.abs(max) + valueMax;
			 chart.w.config.yaxis[0].min=calculatedMinValue;
			 chart.w.config.yaxis[0].max=calculatedMaxValue;
			    // Update the chart
			    chart.updateOptions({
			        series: chart.w.config.series,
			        yaxis: chart.w.config.yaxis,
			    });
           

        }
}
    } catch (e) {
        console.error("Error processing XRP message:", e);
    }
});
addSubscription('/all/chart/candle/XRP', function (message) {

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
			
			
			 chart.w.config.yaxis[0].min=calculatedMinValue;
			 chart.w.config.yaxis[0].max=calculatedMaxValue;
			    // Update the chart
			    chart.updateOptions({
			        series: chart.w.config.series,
			        yaxis: chart.w.config.yaxis,
			    });
			}
	    } catch (e) {
	        console.error("Error processing XRP message:", e);
	    }
	});
});
