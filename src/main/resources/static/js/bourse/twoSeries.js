  var serieValue = $("#serieValue").val();
  serieValue = parseInt(serieValue);

var graphService ;	    
var allitems = ["#jqxCheckBoxUSA-30",
				"#jqxCheckBoxUSA-10",
				"#jqxCheckBoxUSA-5",
				"#jqxCheckBoxUSA-2",
				"#jqxCheckBoxGermany-30",
				"#jqxCheckBoxGermany-10",
				"#jqxCheckBoxGermany-5",
				"#jqxCheckBoxGermany-2",
				"#jqxCheckBoxFrance-30",
				"#jqxCheckBoxFrance-10",
				"#jqxCheckBoxFrance-5",
				"#jqxCheckBoxFrance-2",
				"#jqxCheckBoxUk-30",
				"#jqxCheckBoxUk-10",
				"#jqxCheckBoxUk-5",
				"#jqxCheckBoxUk-2",
				"#jqxCheckBoxItaly-30",
				"#jqxCheckBoxItaly-10",
				"#jqxCheckBoxItaly-5",
				"#jqxCheckBoxItaly-2",
				"#jqxCheckBoxSpain-30",
				"#jqxCheckBoxSpain-10",
				"#jqxCheckBoxSpain-5",
				"#jqxCheckBoxSpain-2",
				"#jqxCheckBoxUSA-10over30",
				"#jqxCheckBoxUSA-5over30",
				"#jqxCheckBoxUSA-5over10",
				"#jqxCheckBoxUSA-2over10",
				"#jqxCheckBoxUSA-2over5",
				"#jqxCheckBoxGermany-10over30",
				"#jqxCheckBoxGermany-5over30",
				"#jqxCheckBoxGermany-5over10",
				"#jqxCheckBoxGermany-2over10",
				"#jqxCheckBoxGermany-2over5",
				"#jqxCheckBoxFrance-10over30",
				"#jqxCheckBoxFrance-5over30",
				"#jqxCheckBoxFrance-5over10",
				"#jqxCheckBoxFrance-2over10",
				"#jqxCheckBoxFrance-2over5",
				"#jqxCheckBoxUk-10over30",
				"#jqxCheckBoxUk-5over30",
				"#jqxCheckBoxUk-5over10",
				"#jqxCheckBoxUk-2over10",
				"#jqxCheckBoxUk-2over5",
				"#jqxCheckBoxItaly-10over30",
				"#jqxCheckBoxItaly-5over30",
				"#jqxCheckBoxItaly-5over10",
				"#jqxCheckBoxItaly-2over10",
				"#jqxCheckBoxItaly-2over5",
				"#jqxCheckBoxSpain-10over30",
				"#jqxCheckBoxSpain-5over30",
				"#jqxCheckBoxSpain-5over10",
				"#jqxCheckBoxSpain-2over10",
				"#jqxCheckBoxSpain-2over5",
				"#jqxCheckBoxfrc-ger-30",
				"#jqxCheckBoxfrc-ger-10",
				"#jqxCheckBoxfrc-ger-5",
				"#jqxCheckBoxfrc-ger-2",
				"#jqxCheckBoxita-ger-30",
				"#jqxCheckBoxita-ger-10",
				"#jqxCheckBoxita-ger-5",
				"#jqxCheckBoxita-ger-2",
				"#jqxCheckBoxspn-ger-30",
				"#jqxCheckBoxspn-ger-10",
				"#jqxCheckBoxspn-ger-5",
				"#jqxCheckBoxspn-ger-2",
				"#jqxCheckBoxuk-ger-30",
				"#jqxCheckBoxuk-ger-10",
				"#jqxCheckBoxuk-ger-5",
				"#jqxCheckBoxuk-ger-2",
				"#jqxCheckBoxusa-ger-30",
				"#jqxCheckBoxusa-ger-10",
				"#jqxCheckBoxusa-ger-5",
				"#jqxCheckBoxusa-ger-2",
				"#jqxCheckBoxusa-uk-30",
				"#jqxCheckBoxusa-uk-10",
				"#jqxCheckBoxusa-uk-5",
				"#jqxCheckBoxusa-uk-2",
				"#jqxCheckBoxita-frc-30",
				"#jqxCheckBoxita-frc-10",
				"#jqxCheckBoxita-frc-5",
				"#jqxCheckBoxita-frc-2",
				"#jqxCheckBoxita-spn-30",
				"#jqxCheckBoxita-spn-10",
				"#jqxCheckBoxita-spn-5",
				"#jqxCheckBoxita-spn-2",
				"#jqxCheckBoxusatoaaa",
				"#jqxCheckBoxusbtobbb",
				"#jqxCheckBoxusctoccc",
				"#jqxCheckBoxeurozoneatoaaa",
				"#jqxCheckBoxeurozonebtobbb",
				"#jqxCheckBoxusatoaaaUsa",
				"#jqxCheckBoxusbtobbbUsatoaaa",
				"#jqxCheckBoxusctocccUsbtobbb",
				"#jqxCheckBoxeurozoneatoaaaGermany",
				"#jqxCheckBoxeurozonebtobbbEurozoneatoaaa",
				"#jqxCheckBoxGold",
				"#jqxCheckBoxPlatinum",
				"#jqxCheckBoxSilver",
				"#jqxCheckBoxPlatGold",
				"#jqxCheckBoxGoldSilv",
				"#jqxCheckBoxCopper",
				"#jqxCheckBoxAluminum",
				"#jqxCheckBoxSteel",
				"#jqxCheckBoxLumber",
				"#jqxCheckBoxCorn",
				"#jqxCheckBoxSugar",
				"#jqxCheckBoxWheat",
				"#jqxCheckBoxOil",
				/*"#jqxCheckBoxGASOLINE_GALL",*/
				"#jqxCheckBoxGASOLINE_LITRE",
				/*"#jqxCheckBoxDIESEL_GALL",*/
				"#jqxCheckBoxDIESEL_TON",
				"#jqxCheckBoxNATGAS_USD",
				"#jqxCheckBoxNATGAS_EUR",
				"#jqxCheckBoxBaltic",
				"#jqxCheckBoxContainer",
				"#jqxCheckBoxavgUsatoaaaUsa",
				"#jqxCheckBoxavgUsbtobbbUsatoaaa",
				"#jqxCheckBoxavgUsctocccUsbtobbb",
				"#jqxCheckBoxavgEurozoneatoaaaGermany",
				"#jqxCheckBoxavgEurozonebtobbbEurozoneatoaaa",
				"#jqxCheckBoxExcess1",
				"#jqxCheckBoxExcess2",
				"#jqxCheckBoxExcess3",
				"#jqxCheckBoxExcess4",
				"#jqxCheckBoxExcess1Excess2Excess3Excess4",
				"#jqxCheckBoxQe1",
				"#jqxCheckBoxQe2",
				"#jqxCheckBoxQe1Qe2",
				"#jqxCheckBoxCumQe1",
				"#jqxCheckBoxCumQe2",
				"#jqxCheckBoxCumQe1Qe2",
				"#jqxCheckBoxM0",
				"#jqxCheckBoxM1",
				"#jqxCheckBoxM2",
				"#jqxCheckBoxM3",
				"#jqxCheckBoxBund1",
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
				"#jqxCheckBoxEuribor1_Euribor2_Euribor3_Euribor4_Euribor5",
				 "#jqxCheckBoxusdeur",
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
			    "#jqxCheckBoxeuregp",
			    "#jqxCheckBoxgermany",
				"#jqxCheckBoxfrance",
				"#jqxCheckBoxitaly",
				"#jqxCheckBoxspain",
				"#jqxCheckBoxuk",
				"#jqxCheckBoxswiss",
				"#jqxCheckBoxsweden",
				"#jqxCheckBoxusa",
				"#jqxCheckBoxcanada",
				"#jqxCheckBoxaustralia",
				"#jqxCheckBoxjapan",
				"#jqxCheckBoxchina",
				"#jqxCheckBoxhongkong",
				"#jqxCheckBoxsouthkorea",
				"#jqxCheckBoxindia",
				"#jqxCheckBoxbrazil",
			    "#jqxCheckBoxmexico",
				"#jqxCheckBoxsaudi",
				"#jqxCheckBoxturkey",
				"#jqxCheckBoxsouthafrica"];	

const graphName=""; 
var selectedYieldsCount=0;
var selectedCommoditiesCount=0;	
var selectedLiquidityCount=0;		
var selectedVolumeCount=0;		
var selectedFxCdsCount=0;				   
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	
	   $(".nav-link").click(function () {
                $(".nav-link").removeClass("active");
                $(this).addClass("active");
                $(".tab-pane").removeClass("show active");
                $($(this).attr("href")).addClass("show active");
                $($(this).data("bs-target")).addClass("show active");
                $("#collapseFilter").addClass("show");
            });
	
     initializeNewsBanner();
	 
	 initializeNavigationButtons();
	 initialiazeItems(allitems,2);
	 initialiazeClearFilterButton();
	 initializeShowFilterButton();
	 
     $("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });
   	 	 
    $('.jqx-checkbox').on('change', function (event) {
	    var $checkbox = $(this);
	    var checked = event.args.checked;
	    var checkboxId = $checkbox.attr('id');
	   
			if (["yield", "curve", "cross", "11", "12"].includes(itemValue["#" + checkboxId].GroupId)) 
			  {
				  selectedYieldsCount = updateCount(checked,selectedYieldsCount);
				  updateTabTitles(selectedYieldsCount);
			  }
			else 
			  if (["6", "7", "8", "9", "10"].includes(itemValue["#" + checkboxId].GroupId)) 
			  {
				  selectedCommoditiesCount = updateCount(checked,selectedCommoditiesCount)
				  updateTabTitles(selectedCommoditiesCount);
			  } 
			   else 
			  if (["13", "14", "15", "16"].includes(itemValue["#" + checkboxId].GroupId))
			   {  
				   selectedLiquidityCount = updateCount(checked,selectedLiquidityCount)
				   updateTabTitles(selectedLiquidityCount);
			   }
			    else 
			  if (["17", "18", "19", "20", "21"].includes(itemValue["#" + checkboxId].GroupId))
			   {
				   selectedVolumeCount = updateCount(checked,selectedVolumeCount)
				   updateTabTitles(selectedVolumeCount);
			   }
			   else if (["22", "23", "24"].includes(itemValue["#" + checkboxId].GroupId))
			   {
				   selectedFxCdsCount = updateCount(checked,selectedFxCdsCount)
				   updateTabTitles(selectedFxCdsCount);
			   }
	   
	    });
	    $("#Clearfilter").click(function() {
			 selectedYieldsCount=0;
			 selectedCommoditiesCount=0;	
			 selectedLiquidityCount=0;		
			 selectedVolumeCount=0;	
			 selectedFxCdsCount=0;
			  $(".tab-pane").each(function () {
                    var tabId = $(this).attr("id");
                    var tabTitle = $("#" + tabId + "-tab").text().split("(")[0]; // Extract tab title without count
                    $("#" + tabId + "-tab").text(tabTitle + " (0)");
                });
		});
	});

function drawGraph() {
	const removeEmpty = true;
	const key = ['yield', 'curve', 'cross'];
	
	mode = "merge";
	$("#SubChart1").css("display","none");
	$("#SubChart2").css("display","none");
	$("#split").css("display","inline-block");
	$("#merge").css("display","none");
	$(".chart-option").show();
	graphService = "metals";
	if (checkedItem == 2) {
		if (graphName === "") {
			isAny2Series();
			return;
		}
	}else {
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					{const groupId = itemValue[checkedItemid[i]].GroupId;
  		              if (key.includes(groupId)) {
						var itemsDataParam;
						getGraphDataSovereign(graphName, itemsDataParam);
					}
					else {
						getGraphData(graphService, graphName, removeEmpty, false);
					}
				}
			}
		}
}
function splitGraph(){
	splitGraphTwoSeries();
}
function updateTabTitles(count) {
      
        var activeTab= $(".nav.nav-tabs> .nav-link.active");
        var tabTitle = activeTab.text().split("(")[0]; // Extract tab title without count
        activeTab.text(tabTitle + " (" + count + ")");
}
function updateCount(checked,count){
	  if(checked)
			  count++;
			  else
			  count--;
			  
	 return count;
}
