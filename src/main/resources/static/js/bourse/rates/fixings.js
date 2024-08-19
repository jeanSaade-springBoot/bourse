var allitems=["#jqxCheckBoxEuribor_1",
	"#jqxCheckBoxSonia_1",
	"#jqxCheckBoxLibor_1",
	"#jqxCheckBoxEuribor_3",
	"#jqxCheckBoxSonia_3",
	"#jqxCheckBoxLibor_3"];

const graphName="fixings"; 
			   
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
	
	var graphService = "liquidity";
	const removeEmpty = false;
	getGraphData(graphService,graphName,removeEmpty,true);
}



