  var allitems=[ "#jqxCheckBoxBaltic",
         		 "#jqxCheckBoxContainer"]; 	
         		 
const graphName="transportation"; 
			   
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
	const graphService = "metals";
	const removeEmpty = true;
	getGraphData(graphService,graphName,removeEmpty,true);
}



