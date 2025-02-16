var allitems=[
	"#jqxCheckBoxindex-80",
	"#jqxCheckBoxsurv-80",];

const graphName="unemp"; 
			   
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
	 initializeShowFilterButtonThreeYears();
	 monthDate.setMonth(monthDate.getMonth() - 6);
	 monthDate.setFullYear((new Date).getFullYear() - 3);
	 monthDate.setHours(0, 0, 0, 0);
	
	 getGraphHistoryByScreenName(graphName);
	 
     $("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });

});

function drawGraph() {
	
	var graphService = "usjobs";
	const removeEmpty = true;
	
	getGraphData(graphService,graphName,removeEmpty,true);
}



