var allitems=["#jqxCheckBoxfinal-77",
				"#jqxCheckBoxinitial-77",
				"#jqxCheckBoxsurv-77", ];

const graphName="jolts"; 
const groupId=77;
var graphService = "usjobs";	
		   
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	
     initializeNewsBanner();
	 initializePeriods();
	 initializeTypes();
	 initializeFunctions(77);
	 
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
	
	const removeEmpty = true;
	
	getGraphUsJobData(graphService,graphName,removeEmpty,true);
}

 
 function redirectFunction(groupId) {
	var isChecked = $("#jqxCheckBoxCurrentfinal-77").is(":checked");
         $("#reset").click();

 		if(isChecked)
 			currentUsJobsFunction(groupId)
 		else 
 			{
 			drawGraph();
 			}
 		
 }
	
