var allitems=["#jqxCheckBoxFed_liquidity", "#jqxCheckBoxUs_banks_reserve"]; 

const graphName="usBanksReserve"; 

var graphService = "liquidity";
const removeEmpty = false;

var usBanksReserveThresholdCache = null;
				   
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	
     initializeNewsBanner();
	 initializePeriods();
	 initializeTypes();
	 initializeFunctions(16);
	 
	 initializeNavigationButtons();
	 initialiazeItems(allitems,2);
	 initialiazeClearFilterButton();
	 initializeShowFilterButton();
	 
	  $("#toggleAbundantAnnotation, #toggleAmpleAnnotation").on("change", function () {
        applyUsBanksReserveThresholdAnnotations();
    });
    
	 getGraphHistoryByScreenName(graphName);
	 
     $("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });

});

function drawGraph() {
	getGraphData(graphService,graphName,removeEmpty,true);
}

