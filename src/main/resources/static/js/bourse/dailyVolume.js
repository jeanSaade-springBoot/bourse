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


const graphName="DailyVolume"; 
			   
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	
     initializeNewsBanner();
	//  initializePeriods();
	// initializeTypes();
	 initializeFunctions();
	 
	 initializeNavigationButtons();
	 initialiazeItem(allitems,1);
	 initialiazeClearFilterButton();
	 initializeShowFilterButton();
	 
	 getGraphHistoryByScreenName(graphName);
	 $("input[name='options'][value='-1']").prop('checked', true);
     $("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });
     
     $("input[name='options']").change(function () {
	    var selectedValue = $("input[name='options']:checked").val();
	    $("#dropDownFunctions").jqxDropDownList({selectedIndex: selectedValue});
	   
	    if (selectedValue !== undefined) {
	        console.log("Selected value: " + selectedValue);
	    } else {
	        console.log("No radio button selected");
	    }
	});
	$("#Clearfilter").click(function() {
	$("input[name='options'][value='-1']").prop('checked', true);
	});
});

function drawGraph() {
	 const removeEmpty = true;
  	 getGraphData(graphService,graphName,removeEmpty,true);	
		
}



