  var allitems=[ "#jqxCheckBoxOil",
 			   /*"#jqxCheckBoxGASOLINE_GALL",*/
 			   "#jqxCheckBoxGASOLINE_LITRE",
 			   /*"#jqxCheckBoxDIESEL_GALL",*/
 			   "#jqxCheckBoxDIESEL_TON",
 			   "#jqxCheckBoxNATGAS_USD",
 			   "#jqxCheckBoxNATGAS_EUR"]; 

const graphName="energy"; 
			   
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	
     initializeNewsBanner();
	 initializePeriods();
	 initializeTypes();
	 initializeFunctions(9);
	 
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



