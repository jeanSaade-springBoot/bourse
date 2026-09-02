
// COMBINED ECB VIEW:
// The ECB Balance Sheet uses the existing shared mapping (GroupId 84 / subGroupId 1).
// ECB Excess Liquidity uses GroupId 14. The shared getGraphData() method already
// supports comparing two different groups in one chart.
var allitems=[ "#jqxCheckBoxExcess1",
 			   "#jqxCheckBoxExcess2",
 			   "#jqxCheckBoxExcess3",
 			   "#jqxCheckBoxExcess4",
 			   "#jqxCheckBoxExcess1Excess2Excess3Excess4",
 			   "#jqxCheckBoxEcb_balance_sheet"]; 		
 			   
const graphName="ecbExcessLiquidity";
var graphService = "liquidity";
const removeEmpty = false;
	
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	
     initializeNewsBanner();
	 initializePeriods();
	 initializeTypes();
	 initializeFunctions(14);
	 
	 initializeNavigationButtons();
	 // Allow two selections so ECB Liquidity can be compared directly
	 // with the ECB Balance Sheet on the same chart.
	 initialiazeItems(allitems,2);
	 initialiazeClearFilterButton();
	 initializeShowFilterButton();
	 
	 getGraphHistoryByScreenName(graphName);
	 
     $("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });

});

function drawGraph() {
	
	getGraphData(graphService,graphName,removeEmpty,true);
}



