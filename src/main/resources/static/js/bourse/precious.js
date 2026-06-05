var allitems=["#jqxCheckBox-6-1",
		   		"#jqxCheckBoxPlatinum",
			    "#jqxCheckBox-6-2",
			    "#jqxCheckBoxPlatGold",
			    "#jqxCheckBoxGoldSilv"];

const graphName="precious"; 
var graphService = "metals";
const removeEmpty = false;
	
   
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
	getGraphData(graphService,graphName,removeEmpty,true);
}



