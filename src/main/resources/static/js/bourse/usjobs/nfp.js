var allitems=[
	"#jqxCheckBoxfinal-79",
	"#jqxCheckBoxrev1-79",
	"#jqxCheckBoxinitial-79",
	"#jqxCheckBoxsurv-79",];

const graphName="nfp"; 

var graphService = "usjobs";
			   
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
const groupId=79;
$(document).ready(function() {
	
     initializeNewsBanner();
	 initializePeriods();
	 initializeTypes();
	 initializeFunctions(79);
	 
	 initializeNavigationButtons();
	 initialiazeItems(allitems,4);
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
	var isChecked = $("#jqxCheckBoxCurrentfinal-79").is(":checked");
       $("#reset").click();
 		if(isChecked)
 			currentUsJobsFunction(groupId)
 		else 
 			{
 			drawGraph();
 			}
 		
 }


