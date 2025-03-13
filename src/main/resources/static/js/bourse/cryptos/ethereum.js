var allitems = [
	'#jqxCheckBox-72-1',
	'#jqxCheckBox-72-3',
	'#jqxCheckBox-72-4',
	'#jqxCheckBox-72-2',
	'#jqxCheckBox-72-5',
	'#jqxCheckBox-72-6',
	'#jqxCheckBox-72-7',
	'#jqxCheckBox-72-8',
];

const graphName = "ethereum";

const candleGroupIdSubgroups = [[72, 8], [72, 2]];
const showGroupOfOptions = true;
const candleGraphTitle = "Ethereum";

$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {

	initializeNewsBanner();
	initializePeriods();
	initializeTypes();
	initializeFunctions(72);

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

	$("#groupOfOptions").on('buttonclick', function(event) {
		candleStick(graphName, true);

	});

});

function drawGraph() {

	var graphService = "cryptos";
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
});