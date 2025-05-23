var allitems=["#jqxCheckBoxBitcoin",
			"#jqxCheckBoxEtherium",
			"#jqxCheckBoxSolana",
			"#jqxCheckBoxCardano",
			"#jqxCheckBoxShiba"];

const graphName="cryptos"; 
			   
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
	
	var graphService = "sti";
	const removeEmpty = true;
	getGraphData(graphService,graphName,removeEmpty,true);
}



