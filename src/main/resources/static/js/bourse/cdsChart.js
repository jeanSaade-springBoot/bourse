 graphService = "fxcds";
 var allitems= [ "#jqxCheckBoxgermany",
				"#jqxCheckBoxfrance",
				"#jqxCheckBoxitaly",
				"#jqxCheckBoxspain",
				"#jqxCheckBoxuk",
				"#jqxCheckBoxswiss",
				"#jqxCheckBoxsweden",
				"#jqxCheckBoxusa",
				"#jqxCheckBoxcanada",
				"#jqxCheckBoxaustralia",
				"#jqxCheckBoxjapan",
				"#jqxCheckBoxchina",
				"#jqxCheckBoxhongkong",
				"#jqxCheckBoxsouthkorea",
				"#jqxCheckBoxindia",
				"#jqxCheckBoxbrazil",
			    "#jqxCheckBoxmexico",
				"#jqxCheckBoxsaudi",
				"#jqxCheckBoxturkey",
				"#jqxCheckBoxsouthafrica"];	


const graphName="cdsChart"; 
const overide=true;		
	   
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
	 const removeEmpty = false;
  	 getGraphData(graphService,graphName,removeEmpty,true);	
		
}



