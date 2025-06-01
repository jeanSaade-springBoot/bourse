     
 var allitems= [     '#jqxCheckBox-71-1',
	'#jqxCheckBox-71-3',
	'#jqxCheckBox-71-4',
	'#jqxCheckBox-71-2',
	'#jqxCheckBox-71-5',
	'#jqxCheckBox-71-6',
	'#jqxCheckBox-71-7',
	'#jqxCheckBox-71-8',
	'#jqxCheckBox-72-1',
	'#jqxCheckBox-72-3',
	'#jqxCheckBox-72-4',
	'#jqxCheckBox-72-2',
	'#jqxCheckBox-72-5',
	'#jqxCheckBox-72-6',
	'#jqxCheckBox-72-7',
	'#jqxCheckBox-72-8',
	'#jqxCheckBox-73-1',
	'#jqxCheckBox-73-3',
	'#jqxCheckBox-73-4',
	'#jqxCheckBox-73-2',
	'#jqxCheckBox-73-5',
	'#jqxCheckBox-73-6',
	'#jqxCheckBox-73-7',
	'#jqxCheckBox-73-8',
	'#jqxCheckBox-74-1',
	'#jqxCheckBox-74-3',
	'#jqxCheckBox-74-4',
	'#jqxCheckBox-74-2',
	'#jqxCheckBox-74-5',
	'#jqxCheckBox-74-6',
	'#jqxCheckBox-74-7',
	'#jqxCheckBox-74-8',
	'#jqxCheckBox-75-1',
	'#jqxCheckBox-75-3',
	'#jqxCheckBox-75-4',
	'#jqxCheckBox-75-2',
	'#jqxCheckBox-75-5',
	'#jqxCheckBox-75-6',
	'#jqxCheckBox-75-7',
	'#jqxCheckBox-75-8',
	'#jqxCheckBox-76-1',
	'#jqxCheckBox-76-3',
	'#jqxCheckBox-76-4',
	'#jqxCheckBox-76-2',
	'#jqxCheckBox-76-5',
	'#jqxCheckBox-76-6',
	'#jqxCheckBox-76-7',
	'#jqxCheckBox-76-8',
	];	
			    

const screenName='CRYPTOS';
const graphName="bundsCryptos"; 
const isTrendlineScreen=true;
var graphService = "cryptos";
var chartHeight=625;		   
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
document.addEventListener('updateGraphConfiguration', () => {
  updateSeriesChart(chartConfigSettings);
      
});

$(document).ready(function() {
	
     initializeNewsBanner();
	 initializePeriods();
	 initializeTypes();
	 
	 initializeNavigationButtons();
	 initialiazeItems(allitems,1);
	 initialiazeClearFilterButton();
	 initializeShowFilterButton();
	 
	$("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });
     
	$("#addTrendLine").jqxButton({ theme: 'dark', height: 30, width: 140 });
	$("#addRetracement").jqxButton({ theme: 'dark', height: 30, width: 140 });
	$("#addRelevant").jqxButton({ theme: 'dark', height: 30, width: 140 });

	$("#addTrendLine").click(function() {
		  graph_trendlines = results.filter(obj => obj.graphId ===  checkedItemid[0]);
			if(graph_trendlines.length==0 || graph_trendlines[0].trendlines.length<3)
			{ initiateTrendLine(true);
			  
			 }else
			{
		$('#alertLimitation-modal').modal('show');
		$("#alertTextLimitation").empty();
		$("#alertTextLimitation").append("<p> Maximum reached: You cannot draw more than 3 trendlines. </p>");
		}
	});
	
	$("#addRetracement").click(function() {
	   
			if (retracement.length<2)
			initiateRetracement(true);
			else
			{
		$('#alertLimitation-modal').modal('show');
		$("#alertTextLimitation").empty();
		$("#alertTextLimitation").append("<p> Maximum reached: You cannot draw more than 2 retracement. </p>");
		}
		
	});
	
	$("#addRelevant").click(function() {
	   
			if (relevant.length<5)
			initiateRelevant(true);
			else
			{
			$('#alertLimitation-modal').modal('show');
			$("#alertTextLimitation").empty();
			$("#alertTextLimitation").append("<p> Maximum reached: You cannot draw more than 5 relevant. </p>");
		    }
		
	});
//getRetracementHistory();	
getTrendLinesHistory();

$('.jqx-checkbox').on('change', function (event) {
    updateSelectedCurrencies();
});


    });
    	
initializeFunctions(71);
function drawGraph() {
	
	const removeEmpty = true;

	drawTechnicalGraph("#mainChart",graphService,graphName,removeEmpty,true);
	
}
document.addEventListener('DOMContentLoaded', function () {
    connectWebSocket();
    const currencies = ['BTC', 'ETH', 'SOL', 'SHIB', 'BNB', 'XRP'];

    // Iterate over each currency and subscribe to the corresponding WebSocket channel
    currencies.forEach(currency => {
        const channel = `/all/chart/${currency}`;

        addSubscription(channel, function (message) {
            try {
                const returnedData = JSON.parse(message.body); // Parse incoming data
                // Only update the chart if this currency is selected
                if (!selectedCurrencies.has(currency)) {
                    return;
                }
                
                const checkedItemValues = [];

                // Extract checked items
                for (let i = 0; i < checkedItemid.length; i++) {
                    if (checkedItemid[i] !== null) {
                        checkedItemValues.push(checkedItemid[i]);
                    }
                }
                
                let data = returnedData[0];

                // Format date for x-axis
                let formattedDate = formatDateShort(data.startTime);
                let newDataPoint = null;

                // Loop through selected items and find the correct y-axis value
                for (let i = 0; i < checkedItemValues.length; i++) {
                    let selectedMetric = checkedItemValues[i];

                    // Determine the correct data point for each selected metric
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
                        // Get the series data dynamically based on the currency
                        let serieArray = getSerriesData();

                        // **Remove existing entry with the same x (date)**
                        serieArray[serieArray.length - 1].data = serieArray[serieArray.length - 1].data.filter(point => point.x !== formattedDate);

                        // **Append new data point**
                         
                      	 serieArray[serieArray.length - 1].data.splice(-1, 0, newDataPoint);
                    }
                }

                if (newDataPoint) {
                    // **Update the chart for the current currency**
                    chart.updateSeries(serieArray);
                }

            } catch (e) {
                console.error("Error processing message for " + currency + ":", e);
            }
        });
    });


});