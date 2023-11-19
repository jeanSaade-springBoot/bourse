 graphService = "fxcds";
 var allitems= ["#jqxCheckBoxusdeur",
			    "#jqxCheckBoxgbpusd",
			    "#jqxCheckBoxusdchf",
			    "#jqxCheckBoxusdjpy",
			    "#jqxCheckBoxusdcad",
			    "#jqxCheckBoxusdcny",
			    "#jqxCheckBoxusdsek",
			    "#jqxCheckBoxusdaud",
			    "#jqxCheckBoxusdrub",
			    "#jqxCheckBoxusdtry",
			    "#jqxCheckBoxusdinr",
			    "#jqxCheckBoxusdhkd",
			    "#jqxCheckBoxusdkrw",
			    "#jqxCheckBoxusdbrl",
			    "#jqxCheckBoxusdmxn",
			    "#jqxCheckBoxusdsar",
			    "#jqxCheckBoxusdzar",
			    "#jqxCheckBoxusdegp",
			    "#jqxCheckBoxeurusd",
			    "#jqxCheckBoxgbpeur",
			    "#jqxCheckBoxeurchf",
			    "#jqxCheckBoxeurjpy",
			    "#jqxCheckBoxeurcad",
			    "#jqxCheckBoxeurcny",
			    "#jqxCheckBoxeursek",
			    "#jqxCheckBoxeuraud",
			    "#jqxCheckBoxeurrub",
			    "#jqxCheckBoxeurtry",
			    "#jqxCheckBoxeurinr",
			    "#jqxCheckBoxeurhkd",
			    "#jqxCheckBoxeurkrw",
			    "#jqxCheckBoxeurbrl",
			    "#jqxCheckBoxeurmxn",
			    "#jqxCheckBoxeursar",
			    "#jqxCheckBoxeurzar",
			    "#jqxCheckBoxeuregp",];	


const graphName="fxChart"; 
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
