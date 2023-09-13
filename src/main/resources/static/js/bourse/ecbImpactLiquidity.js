var allitems=["#jqxCheckBoxExcess1",
 			   "#jqxCheckBoxExcess2",
 			   "#jqxCheckBoxExcess3",
 			   "#jqxCheckBoxExcess4",
 			   "#jqxCheckBoxExcess1Excess2Excess3Excess4",
 			   "#jqxCheckBoxCumQe1",
 			   "#jqxCheckBoxCumQe2",
 			   "#jqxCheckBoxCumQe1Qe2"]; 
 			   
var allitemsLeft=[ "#jqxCheckBoxExcess1",
 			   "#jqxCheckBoxExcess2",
 			   "#jqxCheckBoxExcess3",
 			   "#jqxCheckBoxExcess4",
 			   "#jqxCheckBoxExcess1Excess2Excess3Excess4"];
 			   
var allitemsRight=[
 			   "#jqxCheckBoxCumQe1",
 			   "#jqxCheckBoxCumQe2",
 			   "#jqxCheckBoxCumQe1Qe2"]; 		
 			   
const graphName="ecbImpactLiquidity";

$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	
     initializeNewsBanner();
	 initializeNavigationButtons();
	 initialiazeItemsLeft(allitemsLeft,1);
	 initialiazeItemsRight(allitemsRight,1);
	 initialiazeClearFilterButton();
	 initializeShowFilterButton();
	 getGraphHistoryByScreenName(graphName);
     
});

function drawGraph() {
 	 isecbImpactSeries();
}



