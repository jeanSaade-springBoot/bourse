  var allitems=[ "#jqxCheckBoxavgUsatoaaaUsa",
				  "#jqxCheckBoxavgUsbtobbbUsatoaaa",
				  "#jqxCheckBoxavgUsctocccUsbtobbb",
				  "#jqxCheckBoxavgEurozoneatoaaaGermany",
				  "#jqxCheckBoxavgEurozonebtobbbEurozoneatoaaa"]; 	

const graphName="corporateLiquidity"; 
			   
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	
     initializeNewsBanner();
	 initializePeriods();
	 initializeTypes();
	 initializeFunctions(13);
	 
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



