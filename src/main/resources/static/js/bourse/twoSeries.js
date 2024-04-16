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
	"#jqxCheckBoxsouthafrica",
	"#jqxCheckBoxegypt",
	"#jqxCheckBox-25-DP15_ATM-10"
	, "#jqxCheckBox-25-DP15_ATM-11"
	, "#jqxCheckBox-25-DP25_ATM-10"
	, "#jqxCheckBox-25-DP25_ATM-11"
	, "#jqxCheckBox-25-DC15_ATM-10"
	, "#jqxCheckBox-25-DC15_ATM-11"
	, "#jqxCheckBox-25-DC25_ATM-10"
	, "#jqxCheckBox-25-DC25_ATM-11"
	, "#jqxCheckBox-25-DP25_DC25-10"
	, "#jqxCheckBox-25-DP25_DC25-11"
	, "#jqxCheckBox-25-DP15_DC15-10"
	, "#jqxCheckBox-25-DP15_DC15-11"
	, "#jqxCheckBox-26-DP15_ATM-10"
	, "#jqxCheckBox-26-DP25_ATM-10"
	, "#jqxCheckBox-26-DC25_ATM-10"
	, "#jqxCheckBox-26-DC15_ATM-10"
	, "#jqxCheckBox-26-DP25_DC25-10"
	, "#jqxCheckBox-26-DP15_DC15-10"
	, "#jqxCheckBox-26-DP15_ATM-11"
	, "#jqxCheckBox-26-DP25_ATM-11"
	, "#jqxCheckBox-26-DC25_ATM-11"
	, "#jqxCheckBox-26-DC15_ATM-11"
	, "#jqxCheckBox-26-DP25_DC25-11"
	, "#jqxCheckBox-26-DP15_DC15-11"
	, "#jqxCheckBox-27-DP15_ATM-10"
	, "#jqxCheckBox-27-DP25_ATM-10"
	, "#jqxCheckBox-27-DC25_ATM-10"
	, "#jqxCheckBox-27-DC15_ATM-10"
	, "#jqxCheckBox-27-DP25_DC25-10"
	, "#jqxCheckBox-27-DP15_DC15-10"
	, "#jqxCheckBox-27-DP15_ATM-11"
	, "#jqxCheckBox-27-DP25_ATM-11"
	, "#jqxCheckBox-27-DC25_ATM-11"
	, "#jqxCheckBox-27-DC15_ATM-11"
	, "#jqxCheckBox-27-DP25_DC25-11"
	, "#jqxCheckBox-27-DP15_DC15-11"
	, "#jqxCheckBox-28-DP15_ATM-10"
	, "#jqxCheckBox-28-DP25_ATM-10"
	, "#jqxCheckBox-28-DC25_ATM-10"
	, "#jqxCheckBox-28-DC15_ATM-10"
	, "#jqxCheckBox-28-DP25_DC25-10"
	, "#jqxCheckBox-28-DP15_DC15-10"
	, "#jqxCheckBox-28-DP15_ATM-11"
	, "#jqxCheckBox-28-DP25_ATM-11"
	, "#jqxCheckBox-28-DC25_ATM-11"
	, "#jqxCheckBox-28-DC15_ATM-11"
	, "#jqxCheckBox-28-DP25_DC25-11"
	, "#jqxCheckBox-28-DP15_DC15-11"
	, "#jqxCheckBox-29-DP15_ATM-10"
	, "#jqxCheckBox-29-DP25_ATM-10"
	, "#jqxCheckBox-29-DC25_ATM-10"
	, "#jqxCheckBox-29-DC15_ATM-10"
	, "#jqxCheckBox-29-DP25_DC25-10"
	, "#jqxCheckBox-29-DP15_DC15-10"
	, "#jqxCheckBox-29-DP15_ATM-11"
	, "#jqxCheckBox-29-DP25_ATM-11"
	, "#jqxCheckBox-29-DC25_ATM-11"
	, "#jqxCheckBox-29-DC15_ATM-11"
	, "#jqxCheckBox-29-DP25_DC25-11"
	, "#jqxCheckBox-29-DP15_DC15-11",
	"#jqxCheckBox-30-DP15_ATM-12"
	, "#jqxCheckBox-30-DP25_ATM-12"
	, "#jqxCheckBox-30-DC25_ATM-12"
	, "#jqxCheckBox-30-DC15_ATM-12"
	, "#jqxCheckBox-30-DP25_DC25-12"
	, "#jqxCheckBox-30-DP15_DC15-12"
	, "#jqxCheckBox-30-DP15_ATM-13"
	, "#jqxCheckBox-30-DP25_ATM-13"
	, "#jqxCheckBox-30-DC25_ATM-13"
	, "#jqxCheckBox-30-DC15_ATM-13"
	, "#jqxCheckBox-30-DP25_DC25-13"
	, "#jqxCheckBox-30-DP15_DC15-13"
	, "#jqxCheckBox-31-DP15_ATM-12"
	, "#jqxCheckBox-31-DP25_ATM-12"
	, "#jqxCheckBox-31-DC25_ATM-12"
	, "#jqxCheckBox-31-DC15_ATM-12"
	, "#jqxCheckBox-31-DP25_DC25-12"
	, "#jqxCheckBox-31-DP15_DC15-12"
	, "#jqxCheckBox-31-DP15_ATM-13"
	, "#jqxCheckBox-31-DP25_ATM-13"
	, "#jqxCheckBox-31-DC25_ATM-13"
	, "#jqxCheckBox-31-DC15_ATM-13"
	, "#jqxCheckBox-31-DP25_DC25-13"
	, "#jqxCheckBox-31-DP15_DC15-13",
	"#jqxCheckBox-30-DP15_ATM-10"
	, "#jqxCheckBox-30-DP25_ATM-10"
	, "#jqxCheckBox-30-DC25_ATM-10"
	, "#jqxCheckBox-30-DC15_ATM-10"
	, "#jqxCheckBox-30-DP25_DC25-10"
	, "#jqxCheckBox-30-DP15_DC15-10"
	, "#jqxCheckBox-31-DP15_ATM-10"
	, "#jqxCheckBox-31-DP25_ATM-10"
	, "#jqxCheckBox-31-DC25_ATM-10"
	, "#jqxCheckBox-31-DC15_ATM-10"
	, "#jqxCheckBox-31-DP25_DC25-10"
	, "#jqxCheckBox-31-DP15_DC15-10",
	"#jqxCheckBoxNikkei",
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
	"#jqxCheckBoxBitcoin",
	"#jqxCheckBoxEtherium",
	"#jqxCheckBoxSolana",
	"#jqxCheckBoxCardano",
	"#jqxCheckBoxShiba",
	'#jqxCheckBox-37-1-14',
		'#jqxCheckBox-37-1-15',
		'#jqxCheckBox-37-1-16',
		'#jqxCheckBox-37-2-14',
		'#jqxCheckBox-37-2-15',
		'#jqxCheckBox-37-2-16',
		'#jqxCheckBox-38-1-14',
		'#jqxCheckBox-38-1-15',
		'#jqxCheckBox-38-1-16',
		'#jqxCheckBox-38-2-14',
		'#jqxCheckBox-38-2-15',
		'#jqxCheckBox-38-2-16',
		'#jqxCheckBox-39-1-14',
		'#jqxCheckBox-39-1-15',
		'#jqxCheckBox-39-1-16',
		'#jqxCheckBox-39-2-14',
		'#jqxCheckBox-39-2-15',
		'#jqxCheckBox-39-2-16',
		'#jqxCheckBox-40-1-14',
		'#jqxCheckBox-40-1-15',
		'#jqxCheckBox-40-1-16',
		'#jqxCheckBox-40-2-14',
		'#jqxCheckBox-40-2-15',
		'#jqxCheckBox-40-2-16',
		'#jqxCheckBox-41-1-14',
		'#jqxCheckBox-41-1-15',
		'#jqxCheckBox-41-1-16',
		'#jqxCheckBox-41-2-14',
		'#jqxCheckBox-41-2-15',
		'#jqxCheckBox-41-2-16',
		'#jqxCheckBox-42-1-14',
		'#jqxCheckBox-42-1-15',
		'#jqxCheckBox-42-1-16',
		'#jqxCheckBox-42-2-14',
		'#jqxCheckBox-42-2-15',
		'#jqxCheckBox-42-2-16',
		'#jqxCheckBox-44-1-14',
		'#jqxCheckBox-44-1-15',
		'#jqxCheckBox-44-1-16',
		'#jqxCheckBox-44-2-14',
		'#jqxCheckBox-44-2-15',
		'#jqxCheckBox-44-2-16',
		'#jqxCheckBox-45-1-14',
		'#jqxCheckBox-45-1-15',
		'#jqxCheckBox-45-1-16',
		'#jqxCheckBox-45-2-14',
		'#jqxCheckBox-45-2-15',
		'#jqxCheckBox-45-2-16',
		'#jqxCheckBox-46-1-14',
		'#jqxCheckBox-46-1-15',
		'#jqxCheckBox-46-1-16',
		'#jqxCheckBox-46-2-14',
		'#jqxCheckBox-46-2-15',
		'#jqxCheckBox-46-2-16',
		'#jqxCheckBox-47-1-14',
		'#jqxCheckBox-47-1-15',
		'#jqxCheckBox-47-1-16',
		'#jqxCheckBox-47-2-14',
		'#jqxCheckBox-47-2-15',
		'#jqxCheckBox-47-2-16',
		'#jqxCheckBox-37-3-14',
		'#jqxCheckBox-37-3-15',
		'#jqxCheckBox-37-3-16',
		'#jqxCheckBox-38-3-14',
		'#jqxCheckBox-38-3-15',
		'#jqxCheckBox-38-3-16',
		'#jqxCheckBox-39-3-14',
		'#jqxCheckBox-39-3-15',
		'#jqxCheckBox-39-3-16',
		'#jqxCheckBox-40-3-14',
		'#jqxCheckBox-40-3-15',
		'#jqxCheckBox-40-3-16',
		'#jqxCheckBox-41-3-14',
		'#jqxCheckBox-41-3-15',
		'#jqxCheckBox-41-3-16',
		'#jqxCheckBox-42-3-14',
		'#jqxCheckBox-42-3-15',
		'#jqxCheckBox-42-3-16',
		'#jqxCheckBox-44-3-14',
		'#jqxCheckBox-44-3-15',
		'#jqxCheckBox-44-3-16',
		'#jqxCheckBox-45-3-14',
		'#jqxCheckBox-45-3-15',
		'#jqxCheckBox-45-3-16',
		'#jqxCheckBox-46-3-14',
		'#jqxCheckBox-46-3-15',
		'#jqxCheckBox-46-3-16',
		'#jqxCheckBox-47-3-14',
		'#jqxCheckBox-47-3-15',
		'#jqxCheckBox-47-3-16',
		'#jqxCheckBox-37-4-14',
		'#jqxCheckBox-37-4-15',
		'#jqxCheckBox-37-4-16',
		'#jqxCheckBox-38-4-14',
		'#jqxCheckBox-38-4-15',
		'#jqxCheckBox-38-4-16',
		'#jqxCheckBox-39-4-14',
		'#jqxCheckBox-39-4-15',
		'#jqxCheckBox-39-4-16',
		'#jqxCheckBox-40-4-14',
		'#jqxCheckBox-40-4-15',
		'#jqxCheckBox-40-4-16',
		'#jqxCheckBox-41-4-14',
		'#jqxCheckBox-41-4-15',
		'#jqxCheckBox-41-4-16',
		'#jqxCheckBox-42-4-14',
		'#jqxCheckBox-42-4-15',
		'#jqxCheckBox-42-4-16',
		'#jqxCheckBox-44-4-14',
		'#jqxCheckBox-44-4-15',
		'#jqxCheckBox-44-4-16',
		'#jqxCheckBox-45-4-14',
		'#jqxCheckBox-45-4-15',
		'#jqxCheckBox-45-4-16',
		'#jqxCheckBox-46-4-14',
		'#jqxCheckBox-46-4-15',
		'#jqxCheckBox-46-4-16',
		'#jqxCheckBox-47-4-14',
		'#jqxCheckBox-47-4-15',
		'#jqxCheckBox-47-4-16',];	

const graphName=""; 
var selectedYieldsCount=0;
var selectedCommoditiesCount=0;	
var selectedLiquidityCount=0;		
var selectedVolumeCount=0;		
var selectedFxCdsCount=0;		
var selectedSkewsCount=0;		
var	selectedStiCount=0;
var	selectedMacroCount=0;	
var mainContainer='';
var mainGroupContainer='';
var groupContainer='';
var subgroupContainer='';
var factorIner='';
var factorInerItem='';
var factorContainer='';
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
	
	   $.ajax({
	        contentType: "application/json",
	        url: "/macro/get-macro-display-settings",
	        dataType: 'json',
	        async:true,
	        cache: false,
	        timeout: 600000,
	        success: function (data) {
	        	var groupedData = groupByGroupIdAndSubgroupId(data);
                 mainContainer+='<div class="col-12">'
			                 +'<div class="col-12 d-flex">'
				                 +'<div class="col-2"></div>'
				                 +'<div class="col-10">'
										+'<div class="col-12 d-flex"><div class="align-middle fw-bold">MANUF PMI I</div><div class="align-middle fw-bold">SERVICES PMI I</div><div class="align-middle fw-bold">MANUF PMI II</div><div class="align-middle fw-bold">SERVICES PMI II</div></div>'
										+'<div class="col-12 d-flex">'
											+'<div class="col-3 d-flex"><div class="align-middle">FCST</div><div class="align-middle">FLASH</div><div class="align-middle">FINAL</div></div>'
											+'<div class="col-3 d-flex"><div class="align-middle">FCST</div><div class="align-middle">FLASH</div><div class="align-middle">FINAL</div></div>'
											+'<div class="col-3 d-flex"><div class="align-middle">FCST</div><div class="align-middle">FLASH</div><div class="align-middle">FINAL</div></div>'
											+'<div class="col-3 d-flex"><div class="align-middle">FCST</div><div class="align-middle">FLASH</div><div class="align-middle">FINAL</div></div>'
										+'</div>'
									+'</div>'
							  +'</div>';
						
				// Iterate over each groupId
				Object.keys(groupedData).forEach(function (groupId, i) {
				   country=getCountryImagePath(groupId);
				    classStyle=(i%2!=0)?'row-style':'';
				     mainGroupContainer+='<div class="col-12 d-flex">';
				     groupContainer+='<div class="col-2 '+classStyle+'">'
							+'<div class=""><img src='+country[0]+' alt="country-flag" width="30" class="pr-1">'+country[1]+'</div>'
						+'</div>';
					 subgroupContainer+='<div class="col-10 '+classStyle+' align-items-center d-flex">';
					 	
				    // Iterate over each subgroupId within the current groupId
				    Object.keys(groupedData[groupId]).forEach(function (subgroupId) {
				     
				        // Iterate over each item within the current subgroupId
				       factorContainer='<div class="col-12  d-flex">'
				       factorIner+='<div class="col-3 d-flex">'
				        groupedData[groupId][subgroupId].forEach(function (item) {
				            checkBox="jqxCheckBox-"+item.groupId+'-'+item.subgroupId+'-'+item.factor;
		    	  	        isVisible=item.isVisible?'d-block':'d-none';
		    	  	         factorName=((item.factor==14)?'FCST':(item.factor==15)?'FLASH':'FINAL')
				             factorInerItem+='<div class="align-middle" style="    min-width: 24px;">'
									+'<div id="'+checkBox+'" class="jqx-checkbox-items  align-middle '+isVisible+'"></div>'
								+'</div>';
				        });
				       factorIner+=factorInerItem
				     		     +'</div>';
				     		     factorInerItem='';
				       factorContainer+=factorIner
				     		     +'</div>';  
				     		   
				    });
				    subgroupContainer+= factorContainer ;
				    subgroupContainer+= '</div>';    
				    
				    mainGroupContainer+=groupContainer+subgroupContainer;
				    mainGroupContainer+='</div>';
				    
				    groupContainer='';
				    subgroupContainer='';
				    factorContainer='';
				    factorIner='';
				     mainContainer+=mainGroupContainer;
				     mainGroupContainer='';
				});
				 mainContainer+='</div>';
				  $('#macroContainer').append(mainContainer); 
	        	for (j = 0; j < data.length; j++) {
					items="#jqxCheckBox-"+data[j].groupId+'-'+data[j].subgroupId+'-'+data[j].factor;
		    	  	$(items).jqxCheckBox({ theme: 'dark', width: '100%', height: 26 });
				}
				
	  initializeNewsBanner();
	 
	 initializeNavigationButtons();
	 initialiazeItems(allitems,2);
	 initialiazeClearFilterButton();
	 initializeShowFilterButton();
	 
	 	 	 
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
			   	   else if (["25", "26", "27","28", "29", "30", "31"].includes(itemValue["#" + checkboxId].GroupId))
			   {
				   selectedSkewsCount = updateCount(checked,selectedSkewsCount)
				   updateTabTitles(selectedSkewsCount);
			   }
			     else if (["32", "33", "34","35", "36"].includes(itemValue["#" + checkboxId].GroupId))
			   {
				   selectedStiCount = updateCount(checked,selectedStiCount)
				   updateTabTitles(selectedStiCount);
			   } else if (["37", "38", "39","40", "41","42", "43", "44","45", "46", "47"].includes(itemValue["#" + checkboxId].GroupId))
			   {
				   selectedMacroCount = updateCount(checked,selectedMacroCount)
				   updateTabTitles(selectedMacroCount);
			   }
	   
	    });
	    
	    $("#Clearfilter").click(function() {
			 selectedYieldsCount=0;
			 selectedCommoditiesCount=0;	
			 selectedLiquidityCount=0;		
			 selectedVolumeCount=0;	
			 selectedFxCdsCount=0;
			 selectedSkewsCount=0;
			 selectedStiCount=0;	
			 selectedMacroCount=0;	
			  $(".tab-pane").each(function () {
                    var tabId = $(this).attr("id");
                    var tabTitle = $("#" + tabId + "-tab").text().split("(")[0]; // Extract tab title without count
                    $("#" + tabId + "-tab").text(tabTitle + " (0)");
                });
		});
	    
	},
	        error: function (e) {
	        	
					  console.log("ERROR : ", e);

	        }
	    }); 
	
   
	 
     $("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });
   
	});

function drawGraph() {
	const removeEmpty = true;
	const key = ['yield', 'curve', 'cross'];
	const groupWithFactor = ["25", "26", "27","28", "29", "30", "31","37", "38", "39","40", "41","42", "43", "44","45", "46", "47"];
	const stiGroups = ["32", "33", "34","35", "36"];
	const fxCdsGroups = ["22", "23", "24"];
	const liquidityGroups = ["13", "14", "15", "16"];
	const volumeGroups = ["17", "18", "19", "20", "21"];
	
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
					else if(groupWithFactor.includes(groupId)){
						 graphService = "skews";
						 getGraphDataWithFactor(graphService,graphName,removeEmpty,false);
					}
					else if(stiGroups.includes(groupId)){
						graphService = "sti";
						getGraphData(graphService, graphName, removeEmpty, false);
					}
					else if(fxCdsGroups.includes(groupId)){
						graphService = "fxcds";
						getGraphData(graphService, graphName, removeEmpty, false);
					}
					else if(liquidityGroups.includes(groupId)){
						graphService = "liquidity";
						getGraphData(graphService, graphName, removeEmpty, false);
					}
					else if(volumeGroups.includes(groupId)){
						graphService = "volume";
						getGraphData(graphService, graphName, removeEmpty, false);
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


 function groupByGroupIdAndSubgroupId(data) {
    var groupedData = {};

    // Iterate over each item in the data
    Object.keys(data).forEach(function (key) {
        var item = data[key];
        var groupId = item.groupId;
        var subgroupId = item.subgroupId;

        // If the groupId key doesn't exist in groupedData, create it
        if (!groupedData[groupId]) {
            groupedData[groupId] = {};
        }

        // If the subgroupId key doesn't exist in the groupId object, create it
        if (!groupedData[groupId][subgroupId]) {
            groupedData[groupId][subgroupId] = [];
        }

        // Add the item to the subgroupId array
        groupedData[groupId][subgroupId].push(item);
    });

    return groupedData;
}
