var allitems=["#jqxCheckBoxDax",
			"#jqxCheckBoxDax_Eurusd",
			"#jqxCheckBoxCac",
			"#jqxCheckBoxCac_Eurusd",
			"#jqxCheckBoxMib",
			"#jqxCheckBoxMib_Eurusd",
			"#jqxCheckBoxFtse",
			"#jqxCheckBoxFtse_Gbpusd",
			"#jqxCheckBoxStoxx50",
			"#jqxCheckBoxStoxx50_Eurusd",
			"#jqxCheckBoxStoxx600",
			"#jqxCheckBoxStoxx600_Eurusd",
			"#jqxCheckBoxEubanks",
			"#jqxCheckBoxEubanks_eurusd",];

const graphName="europe"; 
			   
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	
     initializeNewsBanner();
	 initializePeriods();
	 initializeTypes();
	 initializeFunctions(34);
	 
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



