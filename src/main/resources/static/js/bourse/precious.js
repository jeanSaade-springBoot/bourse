var allitems=["#jqxCheckBoxGold",
		   		"#jqxCheckBoxPlatinum",
			    "#jqxCheckBoxSilver",
			    "#jqxCheckBoxPlatGold",
			    "#jqxCheckBoxGoldSilv"];

const graphName="precious"; 
			   
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	
     initializeNewsBanner();
	 initializePeriods();
	 initializeTypes();
	 initializeFunctions(6);
	 
	 initializeNavigationButtons();
	 initialiazeItems(allitems,2);
	 initialiazeClearFilterButton();
	 initializeShowFilterButton();
	 
	 getGraphHistoryByScreenName(graphName);
	 
     $("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });

});

function drawGraph() {
	
	var graphService = "metals";
	const removeEmpty = false;
	getGraphData(graphService,graphName,removeEmpty,true);
}



