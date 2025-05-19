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
	initializeShowFilterButtonCrypro();

	getGraphHistoryByScreenName(graphName);

	$("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });
	$("#groupOfOptions").hide();
	$("#groupOfOptions").jqxButtonGroup({ theme: 'dark', mode: 'radio' });
	$('#groupOfOptions').jqxButtonGroup('setSelection', 0);
	
	$(document).on('graphTypeChange', function(event, type) {
		$("#groupOfOptions").hide();
	});
   initializeCandleOptions(71);
});

function drawGraph() {

	const removeEmpty = true;
	const chartType=typeof($("#chartTypes").find(".active")[0]) !='undefined'?$("#chartTypes").find(".active")[0].id:null;
	$("#order-book").addClass("d-none");
	$("#order-book").removeClass("d-block");
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

    
    addSubscription('/all/chart/BTC', function (message) {

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
		{
        // Format date for x-axis
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
    seriesValue[0].data.push(liveData);
    
    if(globalCandleStickSeries.length>1)
    {
		if(dropDownCandleOptions.length!=0)
		 if($('#dropDownCandleOptions').val()=='5')
		 {
			  const liveVolumeData = {
		        x: date,
		        y: data.volume+''
		    };
	    
			 if (seriesValue[1] && Array.isArray(seriesValue[1].data)) {
		        // Remove duplicate point
		        seriesValue[1].data = seriesValue[1].data.filter(
		            point => point.x !== formattedDate && point.y.length !== 0
		        );
		    } else {
		        console.error("Series[1] or its data is undefined");
		    }
		     seriesValue[1].data.push(liveVolumeData);
		 }
		
	}

    // Add new candlestick data point
    

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
        console.error("Error processing BTC message:", e);
    }
});

	/*addSubscription('/all/chart/order-book', function (message) {

    try {
        const data = JSON.parse(message.body); // Parse incoming data
      
  		 renderOrderBook(data);
	    } catch (e) {
	        console.error("Error processing BTC message:", e);
	    }
	});*/
	
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
