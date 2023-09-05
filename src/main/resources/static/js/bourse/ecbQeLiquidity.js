var allitems=["#jqxCheckBoxQe1",
 			   "#jqxCheckBoxQe2",
 			   "#jqxCheckBoxQe1Qe2",
 			   "#jqxCheckBoxCumQe1",
 			   "#jqxCheckBoxCumQe2",
 			   "#jqxCheckBoxCumQe1Qe2"];

const graphName="ecbQeLiquidity"; 
			   
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
	getGraphData(graphService,graphName,removeEmpty);
}



