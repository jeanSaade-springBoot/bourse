 graphService = "volume";
 var allitems= [ "#jqxCheckBoxBund1",
				 "#jqxCheckBoxBund2",
			 	 "#jqxCheckBoxBund1_Bund2",
				 "#jqxCheckBoxBund1_Bund2_cp",
				 "#jqxCheckBoxBobl1",
         		 "#jqxCheckBoxBobl2",
         		 "#jqxCheckBoxBobl1_Bobl2",		
				 "#jqxCheckBoxBuxl1",
         		 "#jqxCheckBoxBuxl2",
         		 "#jqxCheckBoxBuxl1_Buxl2", 		
                 "#jqxCheckBoxShatz1",
         		 "#jqxCheckBoxShatz2",
         		 "#jqxCheckBoxShatz1_Shatz2",
                 "#jqxCheckBoxEuribor1",
				 "#jqxCheckBoxEuribor2",
				 "#jqxCheckBoxEuribor3",
				 "#jqxCheckBoxEuribor4",
				 "#jqxCheckBoxEuribor5",
				 "#jqxCheckBoxEuribor1_Euribor2_Euribor3_Euribor4_Euribor5"];	


const graphName="wmqyVolume"; 
			   
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	
     initializeNewsBanner();
	
	$("#groupOfPeriodVolume").jqxButtonGroup({theme: 'dark', mode: 'radio' });

	 initializeNavigationButtons();
	 initialiazeItems(allitems,3);
	 initialiazeClearFilterButton();
	 initializeShowFilterButton();
	 
	 getGraphHistory(graphName);
    
});

function drawGraph() {
	 const removeEmpty = true;
 	 initiateBarGraph(graphService,graphName,removeEmpty,true);		
  
}
function getGraphHistory(screenName)
{
	$.ajax({
		contentType: "application/json",
		url: "/bourse/findgraphhistorybyscreenname/"+screenName,
		dataType: 'json',
		async: true,
		cache: false,
		timeout: 600000,
		success: function(data) {

			checkedItemId = JSON.parse(data.parameter)[0];
			for (j = 0; j < checkedItemId.length; j++) {
				$(checkedItemId[j]).jqxCheckBox({ checked: true });
			}
			checkedItem = checkedItemId.length;
			$("#collapseFilter").removeClass('show');
			$('#grid-content').css('display', 'block');
			($('#groupOfPeriodVolume').length)?$('#groupOfPeriodVolume').jqxButtonGroup('setSelection', getChartPeriodIndex(JSON.parse(data.parameter)[1][0])):null;
		
			if (JSON.parse(data.parameter)[2] != null)
			Items = JSON.parse(data.parameter)[2][0];
			
			
			drawGraph();

		},
		error: function(e) {

			console.log("ERROR : ", e);

		}
	});

}
