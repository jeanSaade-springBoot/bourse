var allitems = [
	'#jqxCheckBox-76-1',
	'#jqxCheckBox-76-3',
	'#jqxCheckBox-76-4',
	'#jqxCheckBox-76-2',
	'#jqxCheckBox-76-5',
	'#jqxCheckBox-76-6',
	'#jqxCheckBox-76-7',
	'#jqxCheckBox-76-8',
];

const graphName = "xrp";
const candleGroupIdSubgroups = [[76, 7], [76, 1]];
const showGroupOfOptions = true;
const candleGraphTitle = "XRP";
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
		{    $("#functionOptionsMenu").hide();
			candleStick(graphName,true);
		}
	else
	{    $("#functionOptionsMenu").show();
	 	$("#groupOfOptions").hide();
		getGraphData(graphService, graphName, removeEmpty, true);
	}
}
