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
			    
var  dropDownCryptosource =[{
									"name": "BITCOIN",
									"groupId": "71"
								},
								{
									"name": "ETHEREUM",
									"groupId": "72"
								},
								{
									"name": "SOLANA",
									"groupId": "73",
								},
								{   "name": "SHIBA INU",
									"groupId": "74"
								},
								{
									"name": "BINANCE COIN",
									"groupId": "75"
								},
								{
									"name": "XRP",
									"groupId": "76"
								}];

const screenName='CryptosAnalisys';
const graphName="bundsCryptos"; 
const isTrendlineScreen=true;
var graphService = "cryptos";
var chartHeight=585;		   
var candleStickChart;	

$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
document.addEventListener('updateGraphConfiguration', () => {
  updateSeriesChart(chartConfigSettings);
      
});

$(document).ready(function() {
	const screenWidth = screen.width;
const screenHeight = screen.height;
console.log(`Screen width: ${screenWidth}px, height: ${screenHeight}px`);
     initializeNewsBanner();
	 initializeTypes();
	 
	 initializeNavigationButtons();
	 initialiazeItems(allitems,1);
	 initialiazeClearFilterButton();
	 initializeShowFilterButton();
	 initializeCryptoOptions();
	 
	 $('#DailyData-btn').addClass('active');
     $('#4HoursData-btn').removeClass('active');
     $('#weeklyData-btn').removeClass('active');
         
	 initializeCandlesOptions(71);
	//$("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });
     
	$("#addTrendLine").jqxButton({ theme: 'dark', height: 30, width: 120 });
	$("#addRetracement").jqxButton({ theme: 'dark', height: 30, width: 120 });
	$("#addRelevant").jqxButton({ theme: 'dark', height: 30, width: 140 });

	$("#addTrendLine").click(function() {
		  graph_trendlines = results.filter(obj => obj.graphId ===  checkedItemid[0]);
			if(graph_trendlines.length==0 || graph_trendlines[0].trendlines.length<3)
			{ initiateTrendLine(false);
			  $('.drag-scroll').animate({
				  scrollLeft: $('#trendline-grid').position().left + $('.drag-scroll').scrollLeft()
				}, 'slow');
			 }else
			{
		$('#alertLimitation-modal').modal('show');
		$("#alertTextLimitation").empty();
		$("#alertTextLimitation").append("<p> Maximum reached: You cannot draw more than 3 trendlines. </p>");
		}
	});
	
	$("#addRetracement").click(function() {
	   
			if (retracement.length<2)
			{initiateRetracement(false);
			 $('.drag-scroll').animate({
				  scrollLeft: $('#retracement-grid').position().left + $('.drag-scroll').scrollLeft()
				}, 'slow');
			}else
			{
		$('#alertLimitation-modal').modal('show');
		$("#alertTextLimitation").empty();
		$("#alertTextLimitation").append("<p> Maximum reached: You cannot draw more than 2 retracement. </p>");
		}
		
	});
	
	$("#addRelevant").click(function() {
	   
			if (relevant.length<5)
			{initiateRelevant(false);
			$('.drag-scroll').animate({
				  scrollLeft: $('#relevant-grid').position().left + $('.drag-scroll').scrollLeft()
				}, 'slow');
			}else
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
  
function initializeCandlesOptions(groupId){
	
	var  dropDownOptionsource =[
							{"name":"VOLUME",
                            "value":"5"}, 
					        {"name":"FUNDING RATE",
                             "value":"funding_rate"}];
   var Optionsource =
     {
         datatype: "json",
         datafields: [
             { name: 'name' },
             { name: 'value' }
         ],
         localdata: dropDownOptionsource,
         async: true
     };
     
	  var functionDataAdapter = new $.jqx.dataAdapter(Optionsource);
	 $("#dropDownCandleOptions").jqxDropDownList({dropDownHeight: 80,  source: functionDataAdapter, placeHolder: "",  displayMember: "name",valueMember: "value", theme: 'dark' , width: 120, height: 40});
		$("#resetOptions").click(function () {
	    suppressDropDownChange = true;
	
	    $("#dropDownCandleOptions").jqxDropDownList({ selectedIndex: -1 });
	
	    // Reset the array manually without triggering the handler
	    dropDownCandleOptions = [];
	
	     candleStickTranding(graphName,false);
	
	    setTimeout(() => suppressDropDownChange = false, 50);
	});
	
	$('#dropDownCandleOptions').on('change', function (event) {
    if (suppressDropDownChange) {
        return; // Skip the handler if we're suppressing it
    }

    var args = event.args;
    if (args) {
        var index = args.index;
        const subGroupId = $('#dropDownCandleOptions').val();

        if (subGroupId === '')
            dropDownCandleOptions = [];
        else
            dropDownCandleOptions = [groupId, subGroupId];

         candleStickTranding(graphName,false);
    }
});
	
}  	
function initializeCryptoOptions(){
	
	
   var Optionsource =
     {
         datatype: "json",
         datafields: [
             { name: 'name' },
             { name: 'groupId' }
         ],
         localdata: dropDownCryptosource,
         async: true
     };
     
	  var functionDataAdapter = new $.jqx.dataAdapter(Optionsource);
	$("#dropDownCryptoOptions").jqxDropDownList({dropDownHeight: 200, selectedIndex:0, source: functionDataAdapter, placeHolder: "",  displayMember: "name",valueMember: "groupId", theme: 'dark' , width: 150, height: 25});
	
	
	$('#dropDownCryptoOptions').on('change', function (event) {
		const selectedCrypto=$('#dropDownCryptoOptions').val();
		initializeCandlesOptions(Number(selectedCrypto));
		if(selectedCrypto=='71')
			{
				$("#order-book").addClass("d-block").removeClass("d-none");
				$('#mainChart').css('max-width', '600px');
			}else
			{	$("#order-book").addClass("d-none").removeClass("d-block");
			 	$('#mainChart').css('max-width', '1100px');
			}
		// Hide all crypto sections
		dropDownCryptosource.forEach(c => {
		  $('#crypto-' + c.groupId.toUpperCase().replace(/\s/g, '')).removeClass("d-flex").addClass("d-none");
		});
		$("#Clearfilter").trigger('click');
		// Show the selected crypto section
		$('#crypto-' + selectedCrypto).addClass("d-flex").removeClass("d-none");
		candleStickTranding(graphName,false);
	});
	
}

function drawGraph() {
	
	 candleStickTranding(graphName,false);
	
	 const removeEmpty = true;
	 
	 drawTechnicalGraph("#technicalChart","cryptos",graphName,removeEmpty,true);
	
}

function toggleCandleGraphData(time) {
	 $("#dropDownCandleOptions").jqxDropDownList({ selectedIndex: -1 });
	 suppressDropDownChange = true;
	 setTimeout(() => suppressDropDownChange = false, 50);	 
	 
	 
    if(time==1)
		{
		$("#dropDownCandleOptionsContainer").removeClass("d-flex").addClass("d-none"); 
		
		timeRange = "Daily";
		
		monthDate = new Date();
		monthDate.setMonth(monthDate.getMonth() - 4);
		monthDate.setHours(0, 0, 0, 0);
		
		 $('#DailyData-btn').addClass('active');
         $('#4HoursData-btn').removeClass('active');
         $('#weeklyData-btn').removeClass('active');
		 candleStickTranding(graphName,false);
		 $('#functionOptionsMenu').addClass("d-flex");
		 $('#functionOptionsMenu').removeClass("d-none");
		 $('#euroTime').addClass("d-flex");
         $('#euroTime').removeClass("d-none");
		}
		else if(time==2)
		{
		$("#dropDownCandleOptionsContainer").removeClass("d-none").addClass("d-flex");
		timeRange = "4h";
		functionId=-1;	
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
		 candleStickTranding(graphName,false);
		}else 
		{
		$("#dropDownCandleOptionsContainer").removeClass("d-flex").addClass("d-none");
			
		functionId=-1;	
		timeRange = "1w";
		
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
		 candleStickTranding(graphName,false);
		}
}

 $('#myDraggableModal').on('shown.bs.modal', function () {
      $(this).find('.modal-dialog').draggable({
        handle: ".modal-header"
      });
        $('body').removeClass('modal-open').css('overflow', 'auto');
    });
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

/*
		
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
		    formattedDate = liveData.x;
		
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
		
		    candleStickChart.updateOptions({
		        series: seriesValue,
		        yaxis: yAxisFormat
		    });
				*/

            } catch (e) {
                console.error("Error processing message for " + currency + ":", e);
            }
        });
    });


});
const scrollContainer = document.querySelector('.drag-scroll');
let scrollInterval = null;

// Scroll function
function startScroll(direction = 'right') {
  stopScroll(); // safety clear any running interval
  scrollInterval = setInterval(() => {
    scrollContainer.scrollBy({
      left: direction === 'right' ? 10 : -10,
      behavior: 'auto'
    });
  }, 16); // ~60fps smooth scroll
}

// Stop function
function stopScroll() {
  if (scrollInterval) {
    clearInterval(scrollInterval);
    scrollInterval = null;
  }
}

// Attach events for Right button
const rightBtn = document.getElementById('scrollRightBtn');
rightBtn.addEventListener('mousedown', () => startScroll('right'));
rightBtn.addEventListener('mouseup', stopScroll);
rightBtn.addEventListener('mouseleave', stopScroll);

// Attach events for Left button
const leftBtn = document.getElementById('scrollLeftBtn');
leftBtn.addEventListener('mousedown', () => startScroll('left'));
leftBtn.addEventListener('mouseup', stopScroll);
leftBtn.addEventListener('mouseleave', stopScroll);
/*
  document.querySelectorAll('.drag-scroll').forEach(wrapper => {
    let isDown = false;
    let startX;
    let scrollLeft;

    wrapper.addEventListener('mousedown', (e) => {
      isDown = true;
      wrapper.classList.add('active');
      startX = e.pageX - wrapper.offsetLeft;
      scrollLeft = wrapper.scrollLeft;
    });

    wrapper.addEventListener('mouseleave', () => {
      isDown = false;
      wrapper.classList.remove('active');
    });

    wrapper.addEventListener('mouseup', () => {
      isDown = false;
      wrapper.classList.remove('active');
    });

    wrapper.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - wrapper.offsetLeft;
      const walk = (x - startX) * 1.5; // Adjust scroll speed if needed
      wrapper.scrollLeft = scrollLeft - walk;
    });
  });*/