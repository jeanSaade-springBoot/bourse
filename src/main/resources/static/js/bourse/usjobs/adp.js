var allitems=["#jqxCheckBoxfinal-78",
				"#jqxCheckBoxinitial-78",
				"#jqxCheckBoxsurv-78",];

const graphName="adp"; 

var graphService = "usjobs";
const removeEmpty = true;
					   
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
const groupId=78;
$(document).ready(function() {
	
     initializeNewsBanner();
	 initializePeriods();
	 initializeTypes();
	 initializeFunctions(78);
	 
	 initializeNavigationButtons();
	 initialiazeItems(allitems,3);
	 initialiazeClearFilterButton();
	 initializeShowFilterButtonTwoYears();
	 monthDate= new Date();
	 monthDate.setFullYear((new Date).getFullYear() - 2);
	 monthDate.setHours(0, 0, 0, 0);
	
	 getGraphHistoryByScreenName(graphName);
	 
     $("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });

});

function drawGraph() {
	
	renderFunction(groupId)
}

 function renderFunction(groupId) {
	 
	var isChecked = $("#jqxCheckBoxCurrentfinal-78").is(":checked");
 		if(isChecked)
 			currentUsJobsFunction(groupId);
 		else 
 			getGraphUsJobData(graphService,graphName,removeEmpty,true);
 		
 }
 
 function redirectFunction(groupId) {
	 
	var isChecked = $("#jqxCheckBoxCurrentfinal-78").is(":checked");
 
 		if(isChecked)
 			{
 			 enableDisableDropDowns(false);
				 currentUsJobsFunction(groupId);
 			 }
 		else 
 			{
 			getGraphUsJobData(graphService,graphName,removeEmpty,true);
 			}
 		
 }
	
	  // Function to clear the radio button selection.

