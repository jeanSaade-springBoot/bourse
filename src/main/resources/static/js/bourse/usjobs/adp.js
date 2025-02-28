var allitems=["#jqxCheckBoxfinal-78",
				"#jqxCheckBoxinitial-78",
				"#jqxCheckBoxsurv-78",];

const graphName="adp"; 
			   
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
	 initializeShowFilterButtonTwoYears();
	 monthDate= new Date();
	 monthDate.setFullYear((new Date).getFullYear() - 2);
	 monthDate.setHours(0, 0, 0, 0);
	
	 getGraphHistoryByScreenName(graphName);
	 
     $("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });

});

function drawGraph() {
	
	var graphService = "usjobs";
	const removeEmpty = true;
	
	getGraphData(graphService,graphName,removeEmpty,true);
}



