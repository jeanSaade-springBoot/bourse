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
		getGraphData(graphService, graphName, removeEmpty, true);
	}
}

