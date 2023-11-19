 graphService = "volume";

const graphName="marketShareVolume"; 
			   
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	
     initializeNewsBanner();
     
	 $("#groupOfPeriodVolumes").jqxButtonGroup({theme: 'dark', mode: 'radio' });
     $('#groupOfPeriodVolumes').jqxButtonGroup('setSelection', 0);
    
	 initializeNavigationButtons();
	 $("input[name='options'][value='ALL']").prop('checked', true);
	initialiazeDropDowns();
	initializeYearlyDropDown();
	$("#show").jqxButton({ theme: 'dark', height: 30, width: 74 });
	
	$("#show").click(function() {
		drawGraph();
	});	
	// getGraphHistoryByScreenName(graphName);
	$("#groupOfPeriodVolumes").on('buttonclick', function (event) {
		initialiazeDropDowns()
	 });  
 
function initialiazeDropDowns(){
	
      initializeDropDownByPeriod()
        .then(success => {
               drawGraph();
	        })
        .catch(error => {
            console.error("Error getting current year:", error);
        });
}
               
 function initializeDropDownByPeriod() {
    return new Promise((resolve, reject) => {
        try {
          Period = getChartPeriodVolumes();
          initializeDropDown(Period);
          success=true;
          resolve(success);
        } catch (error) {
            reject(error);
        }
    });
}
 // drawGraph();
});

function drawGraph() {
	
	 var period = getChartPeriodVolumes();
	 var year = $("#dropDownYears").val();
	 var value = $("#dropDownPeriodSelection").val();
	 var datatype = $("input[name='options']:checked").val();
	 
	 var dataParam = { "period":period,
		        	    "year": year,
		        	    "dataType":datatype,
		        	    "value":(period=='q')?value+$("#dropDownYears").val() : value+$("#dropDownYears").val().slice(-2),
		        	    "type":'6',
	     			   };
	var checkedItemValues = [];
	if (datatype = 'ALL')
	 checkedItemValues = ['#jqxCheckBoxBund1_Bund2','#jqxCheckBoxBobl1_Bobl2','#jqxCheckBoxBuxl1_Buxl2','#jqxCheckBoxShatz1_Shatz2'];
    else if (datatype = 'CALL')
	 checkedItemValues = ['#jqxCheckBoxBund1','#jqxCheckBoxBobl1','#jqxCheckBoxBuxl1','#jqxCheckBoxShatz1'];
   else if (datatype = 'PUT')
	 checkedItemValues = ['#jqxCheckBoxBund2','#jqxCheckBoxBobl2','#jqxCheckBoxBuxl2','#jqxCheckBoxShatz2'];

    $.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "/volume/getgraphdatabyperiod",
				data: JSON.stringify(dataParam),
				dataType: 'json',
				timeout: 600000,
				success: function(response) {
		   if (response[0].graphResponseDTOLst[0].y != null)
		   result={
			   series: response[0].graphResponseDTOLst.map(item => (item.y==null)?0:parseFloat(item.y)), // Assuming 'y' values are numbers,
			   labels: response[0].graphResponseDTOLst.map(item => `${item.x.split(' ')[0]}`)
		   }
		   else 
		result={
			   series: [1],
               labels: ["No data to display!"],
		   }
	     getPieChart(result);
	 	},
				error: function(e) {

					console.log("ERROR : ", e);

				}
			});
  inGraphNews(getSelectedFields((checkedItemValues.length==0?allItemsSelected(Items):checkedItemValues),itemValue));

}
function getPieChart(result){
	
	   fontsize='12px';
	   fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], fontsize);
	   
	   showlegend='legendtrue';
	   showlegend=(result.labels.length==1)?false:checkActiveChartLegend($("#gridLegend").find(".active")[0], showlegend);
	  
	   title = $("input[name='options']:checked").val();
	   if (title=='ALL')
	     graphTitle = 'OPTIONS VOLUME';
	   else if (title=='CALL')
	     graphTitle = 'CALLS VOLUME';  
	     else if (title=='PUT')
	      graphTitle = 'PUTS VOLUME';  
	     
	  chartConfiguration={
		    title:graphTitle,
		    fontSize:fontsize,
		    showLegend:showlegend,
		    chartSeries :result.series,
		    chartLabels: result.labels
	   };
	   if (chart != null)
		chart.destroy();
		
        chart = new ApexCharts(document.querySelector("#mainChart"), (result.labels.length==1)?  getPieChartOptionEmptySeries(chartConfiguration): getPieChartOptionSeries(chartConfiguration));
        chart.render();
}

function getChartPeriodVolumes(){
	
	 period=($('#groupOfPeriodVolumes').length)?getChartPeriodCodeVolume($('#groupOfPeriodVolumes').jqxButtonGroup('getSelection')):'w';

 return period;
}