var allitems = [
	'#jqxCheckBox-75-1',
	'#jqxCheckBox-75-3',
	'#jqxCheckBox-75-4',
	'#jqxCheckBox-75-2',
	'#jqxCheckBox-75-5',
	'#jqxCheckBox-75-6',
	'#jqxCheckBox-75-7',
	'#jqxCheckBox-75-8',
];

const graphName = "binance";

const candleGroupIdSubgroups = [[75, 8], [75, 2]];
const showGroupOfOptions = true;
const candleGraphTitle = "Binance";

var graphService = "cryptos";

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
	initializeFunctions(75);

	initializeNavigationButtons();
	initialiazeItems(allitems, 2);
	initialiazeClearFilterButton();
	initializeShowFilterButtonCrypro();

	getGraphHistoryByScreenName(graphName);

	$("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });
	$("#groupOfOptions").hide();
	$("#groupOfOptions").jqxButtonGroup({ theme: 'dark', mode: 'radio' });
	$('#groupOfOptions').jqxButtonGroup('setSelection', 0);
	  
   

	$(document).on('graphTypeChange', function(event, type) {
		$("#groupOfOptions").hide();
	});

	$("#groupOfOptions").on('buttonclick', function(event) {
		candleStick(graphName, false);

	});
	 initializeCandleOptions(75);

});

function drawGraph() {

	const removeEmpty = true;
	const chartType=typeof($("#chartTypes").find(".active")[0]) !='undefined'?$("#chartTypes").find(".active")[0].id:null;
	if(chartType=="candle")
		{    $("#functionOptionsMenu").show(); //hide
			if(	timeRange == "4h")
			  $("#dropDownCandleOptionsContainer").removeClass("d-none").addClass("d-flex");
			else
		 	$("#dropDownCandleOptionsContainer").removeClass("d-flex").addClass("d-none");

			candleStick(graphName,false);
			
		}
	else
	{   
		$("#functionOptionsMenu").show();
	 	$("#groupOfOptions").hide();
	 	$("#dropDownCandleOptionsContainer").removeClass("d-flex").addClass("d-none");

		getGraphDataCrypto(graphService, graphName, removeEmpty, false);
	}
}

document.addEventListener('DOMContentLoaded', function () {
    connectWebSocket();

    addSubscription('/all/chart/BNB', function (message) {

    try {
            const returnedData = JSON.parse(message.body); // Parse incoming data
        const checkedItemValues = [];
		let data;
		if(timeRange == "Daily")
	  	 {
		 data = returnedData[0];
        // Extract checked items
        for (let i = 0; i < checkedItemid.length; i++) {
            if (checkedItemid[i] !== null) {
                checkedItemValues.push(checkedItemid[i]);
            }
        }
		}
		else 
		if(timeRange == "4h")
	  	 {
			  
		 data = returnedData[1];
		 
        // Extract checked items
        for (let i = 0; i < checkedItemid.length; i++) {
	            if (checkedItemid[i] !== null) {
	                checkedItemValues.push(checkedItemid[i]);
	            }
	        }
		}
		if(chartType!="candle")
		{ // Format date for x-axis
         let formattedDate = null;
         let volume = null;
		if(timeRange == "4h")
		{
			formattedDate = formatDateWithTime(data.startTime);
			volume = data.volume;
			}else
			{
				formattedDate = formatDateShort(data.startTime);
				volume =  data.totalVolume;
			}
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
                newDataPoint = { x: formattedDate, y: volume };
            }
            if (itemValue[selectedMetric].description.includes("marketcap")) {
                newDataPoint = { x: formattedDate, y: data.marketcap };
            }
            if (newDataPoint) {
            // **Remove existing entry with the same x (date)**
            if (chart.w.config.series[i] && chart.w.config.series[i].data) {
				    chart.w.config.series[i].data = chart.w.config.series[i].data.filter(point => point.x !== formattedDate && point.y !== null);
				} else {
				    console.error(`Series[${i}] or its data is undefined`);
				}
            // **Append new data point**
            chart.w.config.series[i].data.push(newDataPoint);
           
 			}
        }


        if (newDataPoint) {
           // **Update the chart**
           processDataAndAddNewEndDateForExtraSpaceInGraph( chart.w.config.series[0].data ,10,false)
							    .then(({ response }) => {
										 chart.w.config.series[0].data = response;
							    })
							    .catch(error => {
							        console.error('Error processing data:', error);
							    });	

           let allValues=[];			    
			if (chart.w.config.length>1) {
				 allValues = [
				  ...chart.w.config.series[0].data.map(item =>  Number(item.y) ),
				  ...chart.w.config.series[1].data.map(item =>  Number(item.y) )
				];
			}			    
			else 
            allValues =chart.w.config.series[0].data.map(item =>  Number(item.y) );
			    
			// Find the minimum and maximum values
			const min  = Math.min(...allValues.filter(value => value !== 0));

			const max = Math.max(...allValues.filter(value => value !== 0));

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
           
           /* chart.updateOptions({
                series: chart.w.config.series
            });*/
        }
	}
	else{
		
	    let date = null;
		if(timeRange == "4h")
			date = formatDateWithTime(data.startTime);
			else
			date = formatDateShort(data.startTime);
			
	    const liveData = {
	        x: date,
	        y: [data.open, data.high, data.low, data.close]
	    };

    const chartType = typeof($("#chartTypes").find(".active")[0]) !== 'undefined'
        ? $("#chartTypes").find(".active")[0].id
        : null;

    let seriesValue = globalCandleStickSeries;
    let yAxisFormat = chart.w.config.yaxis;
    let formattedDate = liveData.x;

    if (seriesValue[0] && Array.isArray(seriesValue[0].data)) {
        // Remove duplicate point
        seriesValue[0].data = seriesValue[0].data.filter(
            point => point.x !== formattedDate && point.y.length !== 0
        );
    } else {
        console.error("Series[0] or its data is undefined");
    }

    // Add new candlestick data point
    seriesValue[0].data.push(liveData);

    // Optional: stretch X-axis with dummy data point
    processDataAndAddNewEndDateForExtraSpaceInGraph(seriesValue[0].data, 10, true)
        .then(({ response }) => {
            seriesValue[0].data = response;
        })
        .catch(error => {
            console.error('Error processing data:', error);
        });

    // Compute min/max from OHLC (flattened)
    let allValues = seriesValue[0].data.flatMap(item => item.y ? item.y.map(Number) : []);
    if (functionId === 0 || functionId === 1) {
        allValues = allValues.concat(seriesValue[1].data.map(item => Number(item.y)));
        }

    const filtered = allValues.filter(value => value !== 0);
    const min = Math.min(...filtered);
    const max = Math.max(...filtered);
    const values = addMarginToMinMax(min, max, 5);

    let valueMin = values;
    let valueMax = values;

    const calculatedMinValue = Math.sign(min) === -1 ? -Math.abs(min) - valueMin : Math.abs(min) - valueMin;
    const calculatedMaxValue = Math.sign(max) === -1 ? -Math.abs(max) + valueMax : Math.abs(max) + valueMax;

    yAxisFormat[0].min = calculatedMinValue;
    yAxisFormat[0].max = calculatedMaxValue;

    chart.updateOptions({
        series: seriesValue,
        yaxis: yAxisFormat
    });
	}
    } catch (e) {
        console.error("Error processing BNB message:", e);
    }
});

});