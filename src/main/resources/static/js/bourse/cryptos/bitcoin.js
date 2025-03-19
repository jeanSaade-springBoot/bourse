var allitems = [
	'#jqxCheckBox-71-1',
	'#jqxCheckBox-71-3',
	'#jqxCheckBox-71-4',
	'#jqxCheckBox-71-2',
	'#jqxCheckBox-71-5',
	'#jqxCheckBox-71-6',
	'#jqxCheckBox-71-7',
	'#jqxCheckBox-71-8',
];

const graphName = "bitcoin";
const candleGroupIdSubgroups = [[71, 8], [71, 2]];
const showGroupOfOptions = true;
const candleGraphTitle = "Bitcoin";

const graphService = "cryptos";


$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {

	initializeNewsBanner();
	initializePeriods();
	initializeTypes();
	initializeFunctions(71);

	initializeNavigationButtons();
	initialiazeItems(allitems, 2);
	initialiazeClearFilterButton();
	initializeShowFilterButton();

	getGraphHistoryByScreenName(graphName);

	$("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });
	$("#groupOfOptions").hide();
	$("#groupOfOptions").jqxButtonGroup({ theme: 'dark', mode: 'radio' });
	$('#groupOfOptions').jqxButtonGroup('setSelection', 0);

	$(document).on('graphTypeChange', function(event, type) {
		$("#groupOfOptions").hide();
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
		monthDate.setMonth(monthDate.getMonth() - 6);
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
		 monthDate.setMonth(monthDate.getMonth() - 1);
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
		 monthDate.setMonth(monthDate.getMonth() - 1);
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
        console.log('Chart update received:', message.body);
        
        // Parse and handle the message
        try {
			var graphService = "cryptos";
            updateChart(graphService);
        } catch (e) {
            console.error('Error parsing message:', e);
        }
    });
    addSubscription('/all/chart/BTC', function (message) {

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
        console.error("Error processing BTC message:", e);
    }
});

addSubscription('/all/chart/candle/BTC', function (message) {

    try {
        const data = JSON.parse(message.body); // Parse incoming data
  		data[0].graphResponseDTOLst.forEach(item => {
				item.x = item.x.split(" ")[0];
				item.y = JSON.parse(item.y).map(yValue => parseFloat(yValue));
			});
	        let liveData = data[0].graphResponseDTOLst[0];
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
			
			    // Update the chart
			    chart.updateOptions({
			        series: chart.w.config.series
			    });
			}
	    } catch (e) {
	        console.error("Error processing BTC message:", e);
	    }
	});
	
	addSubscription('/all/chart/order-book', function (message) {

    try {
        const data = JSON.parse(message.body); // Parse incoming data
  		 renderOrderBook(data);
			console.log(data)
	    } catch (e) {
	        console.error("Error processing BTC message:", e);
	    }
	});
	
});


        function calculateBuySellPercentage(asks, bids) {
            const totalBuyVolume = bids.reduce((sum, order) => Number(sum) + Number(order.volume), 0);
            const totalSellVolume = asks.reduce((sum, order) => Number(sum) + Number(order.volume), 0);
            const totalVolume = totalBuyVolume + totalSellVolume;

            if (totalVolume === 0) return { buyPercent: 50, sellPercent: 50 };

            return {
                buyPercent: ((totalBuyVolume / totalVolume) * 100).toFixed(2),
                sellPercent: ((totalSellVolume / totalVolume) * 100).toFixed(2)
            };
        }

        function renderOrderBook(data) {
            const asksContainer = $('#order-book .asks').empty();
            const bidsContainer = $('#order-book .bids').empty();
            if (Number(data.currencyPreviousPriceDTO.currentPrice) > Number(data.currencyPreviousPriceDTO.previousPrice)) {
			    arrowIcon = '<i class="fa-solid fa-arrow-up"></i>';
			    color = 'green-text';
			} else if (Number(data.currencyPreviousPriceDTO.currentPrice) < Number(data.currencyPreviousPriceDTO.previousPrice)) {
			    arrowIcon = '<i class="fa-solid fa-arrow-down"></i>';
			    color = 'red-text';
			} else {
			    arrowIcon = '';
			    color = 'white';
			}
			
			$('.mid-price').removeClass('green-text red-text');
			
			$('.mid-price').addClass(color)
			.html(`
				 ${data.currencyPreviousPriceDTO.currentPrice.toLocaleString()}
			    <span class="${color}" style=" margin-right: 5px;">${arrowIcon}</span>
			`);
			 
			
            const maxVolume = Math.max(
                ...data.orderBookDataBidAsk.ask.map(a => a.volume),
                ...data.orderBookDataBidAsk.bid.map(b => b.volume)
            );

          const createRow = (type, price, volume) => {
			    const widthPercent = (volume / maxVolume) * 100;
			    const colorClass = type === 'ask' ? 'red-text' : 'green-text';
			    
			    return `
			        <div class="order-book-entry">
			            <span class="d-flex ${colorClass}" style="flex: 1 1 0%; justify-content: flex-start;">${Number(price).toLocaleString()}</span>
			            <span class="d-flex white" style="flex: 1 1 0%; justify-content: flex-end;">${Number(volume).toFixed(2)}</span>
			            <span class="d-flex white" style="flex: 1 1 0%; justify-content: flex-end;">${(Number(price)*Number(volume)).toFixed(2)}</span>
			            <div class="volume-bar" style="width: ${widthPercent}%;"></div>
			        </div>
			    `;
			};

            data.orderBookDataBidAsk.ask.forEach(order => {
                asksContainer.append(createRow('ask',order.price, order.volume));
            });

            data.orderBookDataBidAsk.bid.forEach(order => {
                bidsContainer.append(createRow('bids',order.price, order.volume));
            });

            // Update Buy/Sell Percentage
            const { buyPercent, sellPercent } = calculateBuySellPercentage(data.orderBookDataBidAsk.ask, data.orderBookDataBidAsk.bid);
            $('.buy-percentage').css('width', `${buyPercent}%`)
            $('.sell-percentage').css('width', `${sellPercent}%`);
            $('.sell-percentage-text').text(`${sellPercent}%`);
            $('.buy-percentage-text').text(`${buyPercent}%`);
        }

