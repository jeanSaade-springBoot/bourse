  var allitems=["#jqxCheckBoxM0",
 			   "#jqxCheckBoxM1",
 			   "#jqxCheckBoxM2",
 			   "#jqxCheckBoxM3"]; 

const graphName="ezmmLiquidity"; 
			   
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
	 
	 getGraphHistoryByScreenName(graphName);
	 
     $("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });

});

function drawGraph() {
	
	var graphService = "liquidity";
	const removeEmpty = false;
	getGraphData(graphService,graphName,removeEmpty,true);
}



