 var allitems = [
			'#jqxCheckBox-52-3',
			'#jqxCheckBox-52-4',
			'#jqxCheckBox-61-3',
			'#jqxCheckBox-61-4',
		];	

const screenName='BUNDS';
const graphName="bundsTech"; 
const isTrendlineScreen=true;
var graphService = "longEnds";
		   
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
			{ initiateTrendLine();
			  
			 }else
			{
		$('#alertLimitation-modal').modal('show');
		$("#alertTextLimitation").empty();
		$("#alertTextLimitation").append("<p> Maximum reached: You cannot draw more than 3 trendlines. </p>");
		}
	});
	
	$("#addRetracement").click(function() {
	   
			if (retracement.length<2)
			initiateRetracement();
			else
			{
		$('#alertLimitation-modal').modal('show');
		$("#alertTextLimitation").empty();
		$("#alertTextLimitation").append("<p> Maximum reached: You cannot draw more than 2 retracement. </p>");
		}
		
	});
	
	$("#addRelevant").click(function() {
	   
			if (relevant.length<5)
			initiateRelevant();
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
initializeFunctions(52);
