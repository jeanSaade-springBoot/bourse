
var allitems=[ "#jqxCheckBoxExcess1",
 			   "#jqxCheckBoxExcess2",
 			   "#jqxCheckBoxExcess3",
 			   "#jqxCheckBoxExcess4",
 			   "#jqxCheckBoxExcess1Excess2Excess3Excess4",]; 		
 			   
const graphName="ecbExcessLiquidity";

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
	 initialiazeItems(allitems,2);
	 initialiazeClearFilterButton();
	 initializeShowFilterButton();
	 
	 getGraphHistoryByScreenName(graphName);
	 
     $("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });

});

function drawGraph() {
	const graphService = "liquidity";
	const removeEmpty = false;
	getGraphData(graphService,graphName,removeEmpty,true);
}



