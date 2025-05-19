 var allitems = ["#jqxCheckBoxNikkei",
			"#jqxCheckBoxNikkei_usdjpy",
			"#jqxCheckBoxCsi",
			"#jqxCheckBoxCsi_usdcny",
			"#jqxCheckBoxNifty",
			"#jqxCheckBoxNifty_usdinr",
			"#jqxCheckBoxKospi",
			"#jqxCheckBoxKospi_usdkrw",
			"#jqxCheckBoxHangseng",
			"#jqxCheckBoxHangseng_usdhkd",
			"#jqxCheckBoxHismbi",
			"#jqxCheckBoxHismbi_usdhkd",
			"#jqxCheckBoxHismpi",
			"#jqxCheckBoxHismpi_usdhkd",
			"#jqxCheckBoxDowjones",
			"#jqxCheckBoxSandp",
			"#jqxCheckBoxNasdaq",
			"#jqxCheckBoxRussell",
			"#jqxCheckBoxFang",
			"#jqxCheckBoxDjmajorbanks",
			"#jqxCheckBoxDjregionalbanks",
			"#jqxCheckBoxDax",
			"#jqxCheckBoxDax_Eurusd",
			"#jqxCheckBoxCac",
			"#jqxCheckBoxCac_Eurusd",
			"#jqxCheckBoxMib",
			"#jqxCheckBoxMib_Eurusd",
			"#jqxCheckBoxFtse",
			"#jqxCheckBoxFtse_Gbpusd",
			"#jqxCheckBoxStoxx50",
			"#jqxCheckBoxStoxx50_Eurusd",
			"#jqxCheckBoxStoxx600",
			"#jqxCheckBoxStoxx600_Eurusd",
			"#jqxCheckBoxEubanks",
			"#jqxCheckBoxEubanks_eurusd",
			"#jqxCheckBoxTadawul",
			"#jqxCheckBoxTadawul_usdsar",
			"#jqxCheckBoxEgx",
			"#jqxCheckBoxEgx_usdegp",
			"#jqxCheckBoxBist",
			"#jqxCheckBoxBist_usdtry",
			"#jqxCheckBoxMoex",
			"#jqxCheckBoxMoex_usdrub",
			"#jqxCheckBoxJsttop",
			"#jqxCheckBoxJsttop_usdzar",
			"#jqxCheckBoxBovespa",
			"#jqxCheckBoxBovespa_usdbrl",
			"#jqxCheckBoxMexbol",
			"#jqxCheckBoxMexbol_usdmxn",
		];	

const screenName='STI';
const graphName="stiGraph"; 
const isTrendlineScreen=true;
var graphService = "sti";
var chartHeight=625;		   
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
document.addEventListener('updateGraphConfiguration', () => {
  updateSeriesChart(chartConfigSettings);
      
});

$(document).ready(function() {
	
     initializeNewsBanner();
	 initializePeriods();
	 initializeTypes();
	 
	 initializeNavigationButtons();
	 initialiazeItems(allitems,1);
	 initialiazeClearFilterButton();
	 initializeShowFilterButton();
	 
	$("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });
     
	$("#addTrendLine").jqxButton({ theme: 'dark', height: 30, width: 140 });
	$("#addRetracement").jqxButton({ theme: 'dark', height: 30, width: 140 });
	$("#addRelevant").jqxButton({ theme: 'dark', height: 30, width: 140 });

	$("#addTrendLine").click(function() {
		  graph_trendlines = results.filter(obj => obj.graphId ===  checkedItemid[0]);
			if(graph_trendlines.length==0 || graph_trendlines[0].trendlines.length<3)
			{ initiateTrendLine();
			  
			 }else
			{
		$('#alertLimitation-modal').modal('show');
		$("#alertTextLimitation").empty();
		$("#alertTextLimitation").append("<p> Maximum reached: You cannot draw more than 3 trendlines. </p>");
		}
	});
	
	$("#addRetracement").click(function() {
	   
			if (retracement.length<2)
			initiateRetracement(true);
			else
			{
		$('#alertLimitation-modal').modal('show');
		$("#alertTextLimitation").empty();
		$("#alertTextLimitation").append("<p> Maximum reached: You cannot draw more than 2 retracement. </p>");
		}
		
	});
	
	$("#addRelevant").click(function() {
	   
			if (relevant.length<5)
			initiateRelevant(true);
			else
			{
			$('#alertLimitation-modal').modal('show');
			$("#alertTextLimitation").empty();
			$("#alertTextLimitation").append("<p> Maximum reached: You cannot draw more than 5 relevant. </p>");
		    }
		
	});
//getRetracementHistory();	
getTrendLinesHistory();

$('.jqx-checkbox').on('change', function (event) {
    updateSelectedCurrencies();
});


    });
initializeFunctions(32);
function drawGraph() {
	
	const removeEmpty = true;

	drawTechnicalGraph("#mainChart",graphService,graphName,removeEmpty,true);
	
}