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
	  
	$('#euroTime').addClass("d-none");
    $('#euroTime').removeClass("d-flex");
          

	$(document).on('graphTypeChange', function(event, type) {
		$("#groupOfOptions").hide();
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
	{   
		$("#functionOptionsMenu").show();
	 	$("#groupOfOptions").hide();
		getGraphDataCrypto(graphService, graphName, removeEmpty, false);
	}
}

document.addEventListener('DOMContentLoaded', function () {
    connectWebSocket();

    
    addSubscription('/all/chart/BTC', function (message) {

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
           processDataAndAddNewEndDateForExtraSpaceInGraph( chart.w.config.series[0].data ,0.10,false)
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
	        var yAxisFormat = getFormat(data[0].config.yAxisFormat);

	        const chartType=typeof($("#chartTypes").find(".active")[0]) !='undefined'?$("#chartTypes").find(".active")[0].id:null;
		    let formattedDate = liveData.x;
	        if(timeRange == "Daily" && chartType=="candle")
	        {
				if (chart.w.config.series[0] && Array.isArray(chart.w.config.series[0].data)) {
				    chart.w.config.series[0].data = chart.w.config.series[0].data.filter(
				        point => point.x !== formattedDate && point.y.length !== 0
				    );
				} else {
				    console.error("Series[0] or its data is undefined");
				}

			
			    // Append new data point
			    chart.w.config.series[0].data.push(liveData);
			
			processDataAndAddNewEndDateForExtraSpaceInGraph(chart.w.config.series[0].data ,0.05,true)
						    .then(({ response }) => {
									chart.w.config.series[0].data = response;
						    })
						    .catch(error => {
						        console.error('Error processing data:', error);
						    });	
			let allValues=[];			    
			if (functionId == 0 || functionId == 1) {
				 allValues = [
				  ...chart.w.config.series[0].data.flatMap(item => item.y ? item.y.map(Number) : []),
				  ...chart.w.config.series[1].data.map(item =>  Number(item.y) )
				];
			}			    
			else 
			 allValues =chart.w.config.series[0].data.flatMap(item => item.y ? item.y.map(Number) : []);
			    
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
			}
			else if(timeRange == "4h" && chartType=="candle"){
				 updateChart(graphService);
			}
	    } catch (e) {
	        console.error("Error processing BTC message:", e);
	    }
	});
	
	addSubscription('/all/chart/order-book', function (message) {

    try {
        const data = JSON.parse(message.body); // Parse incoming data
        console.log(data);
  		 renderOrderBook(data);
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
				 ${Number(data.currencyPreviousPriceDTO.currentPrice).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
			    <span class="${color}" style=" margin-right: 5px;">${arrowIcon}</span>
			`)
			 
			
            const maxVolume = Math.max(
                ...data.orderBookDataBidAsk.ask.map(a => a.volume),
                ...data.orderBookDataBidAsk.bid.map(b => b.volume)
            );

          const createRow = (type, price, volume) => {
			    const widthPercent = (volume / maxVolume) * 100;
			    const colorClass = type === 'bids' ? 'red-text' : 'green-text';
			    
			    return `
			        <div class="order-book-entry">
			            <span class="d-flex ${colorClass}" style="flex: 1 1 0%; justify-content: flex-start;">${Number(price).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
			            <span class="d-flex white" style="flex: 1 1 0%; justify-content: flex-end;">${formatNumberShort((Number(price)*Number(volume)))}</span>
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

function formatNumberShort(num) {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(2) + 'B';
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(2) + 'M';
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(2) + 'K';
  } else {
    return num.toString(); // No formatting for small numbers
  }
}