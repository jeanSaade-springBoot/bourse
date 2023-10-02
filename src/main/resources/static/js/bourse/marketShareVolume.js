 graphService = "volume";

const graphName="marketShareVolume"; 
			   
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	
     initializeNewsBanner();
     
	 $("#groupOfPeriodVolume").jqxButtonGroup({theme: 'dark', mode: 'radio' });
     $('#groupOfPeriodVolume').jqxButtonGroup('setSelection', 0);
    
	 initializeNavigationButtons();
	 $("input[name='options'][value='0']").prop('checked', true);
	 
	 drawGraph()
	// getGraphHistoryByScreenName(graphName);
	 
});

function drawGraph() {
	 const removeEmpty = true;
  	// getGraphData(graphService,graphName,removeEmpty,true);	
	getPieChart();
}
function getPieChart(){
	
	   fontsize='12px';
	   fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], fontsize);
	   
	   showlegend='legendtrue';
	   showlegend= checkActiveChartLegend($("#gridLegend").find(".active")[0], showlegend);
	   
	   chartConfiguration={
		    fontSize:fontsize,
		    showLegend:showlegend,
	   };
        chart = new ApexCharts(document.querySelector("#mainChart"), getPieChartOption(chartConfiguration));
        chart.render();
}



