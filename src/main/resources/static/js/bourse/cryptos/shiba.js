var allitems = [
	'#jqxCheckBox-74-1',
	'#jqxCheckBox-74-3',
	'#jqxCheckBox-74-4',
	'#jqxCheckBox-74-2',
	'#jqxCheckBox-74-5',
	'#jqxCheckBox-74-6',
	'#jqxCheckBox-74-7',
	'#jqxCheckBox-74-8',
];

const graphName = "shiba";

const candleGroupIdSubgroups = [[74, 8], [74, 2]];
const showGroupOfOptions = true;
const candleGraphTitle = "Shiba Inu";


$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {

	initializeNewsBanner();
	initializePeriods();
	initializeTypes();
	initializeFunctions();

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
	{    $("#functionOptionsMenu").show();
	 	$("#groupOfOptions").hide();
		getGraphDataCrypto(graphService, graphName, removeEmpty, true);
	}
}
function toggleGraphData(time) {
    if(time==1)
		{timeRange = "Daily";
			 $('#DailyData-btn').addClass('active');
	         $('#4HoursData-btn').removeClass('active');
			 drawGraph();
			 $('#functionOptionsMenu').addClass("d-flex");
			 $('#functionOptionsMenu').removeClass("d-none");
			 $('#euroTime').addClass("d-flex");
             $('#euroTime').removeClass("d-none");
		}
		else 
		{timeRange = "FourHours";
		  $('#4HoursData-btn').addClass('active');
          $('#DailyData-btn').removeClass('active');
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
            const parsedMessage = JSON.parse(message.body);
            updateChart(parsedMessage);
        } catch (e) {
            console.error('Error parsing message:', e);
        }
    });
});

// Function to handle chart updates
function updateChart(data) {
   drawGraph();
    // Add your chart update logic here
}
