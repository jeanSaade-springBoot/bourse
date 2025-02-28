var allitems=[
	"#jqxCheckBoxcivilian_Lab_Force-81",
	"#jqxCheckBoxcivilian_Lab_Force_Chg-81",
	"#jqxCheckBoxemployed_Lab_Force-81",
	"#jqxCheckBoxemployed_Lab_Force_Chg-81",
	"#jqxCheckBoxunemployed-81"];

const graphName="householdssurv"; 
			   
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



