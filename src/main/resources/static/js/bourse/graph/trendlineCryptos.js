     
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
	
initializeFunctions(71);

document.addEventListener('DOMContentLoaded', function () {
    connectWebSocket();
    const currencies = ['BTC', 'ETH', 'SOL', 'SHIB', 'BNB', 'XRP'];

    // Iterate over each currency and subscribe to the corresponding WebSocket channel
    currencies.forEach(currency => {
        const channel = `/all/chart/${currency}`;

        addSubscription(channel, function (message) {
            try {
                const data = JSON.parse(message.body); // Parse incoming data
                
                // Only update the chart if this currency is selected
                if (!selectedCurrencies.has(currency)) {
                    console.log(`Skipping update for ${currency} (not selected)`);
                    return;
                }
                
                const checkedItemValues = [];

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
                          if (selectedCurrencies.has('SHIB')) {
							 newDataPoint.y=newDataPoint.y*1000;
							 
		                    serieArray[serieArray.length - 1].data.splice(-1, 0, newDataPoint);
		                }
                		else
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