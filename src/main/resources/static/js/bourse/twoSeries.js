  var serieValue = $("#serieValue").val();
  serieValue = parseInt(serieValue);

var correlationChart;

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
		'#jqxCheckBox-47-4-16',
		 "#jqxCheckBoxFed-17",
		 "#jqxCheckBoxFed-18",
		 "#jqxCheckBoxEcb-17",
		 "#jqxCheckBoxEcb-18",
		 "#jqxCheckBoxBoe-17",
		 "#jqxCheckBoxBoe-18",
		 "#jqxCheckBoxEU5",
		 "#jqxCheckBoxUS5",
		 "#jqxCheckBoxUsa30",
		 "#jqxCheckBoxEuribor_1",
		 "#jqxCheckBoxSonia_1",
		 "#jqxCheckBoxLibor_1",
		 "#jqxCheckBoxEuribor_3",
		 "#jqxCheckBoxSonia_3",
		 "#jqxCheckBoxLibor_3",
		 '#jqxCheckBox-52-2',
			'#jqxCheckBox-52-3',
			'#jqxCheckBox-52-4',
			'#jqxCheckBox-52-5',
			'#jqxCheckBox-52-6',
			'#jqxCheckBox-53-2',
			'#jqxCheckBox-53-3',
			'#jqxCheckBox-53-4',
			'#jqxCheckBox-53-5',
			'#jqxCheckBox-53-6',
			'#jqxCheckBox-54-2',
			'#jqxCheckBox-54-3',
			'#jqxCheckBox-54-4',
			'#jqxCheckBox-54-5',
			'#jqxCheckBox-54-6',
			'#jqxCheckBox-55-2',
			'#jqxCheckBox-55-3',
			'#jqxCheckBox-55-4',
			'#jqxCheckBox-55-5',
			'#jqxCheckBox-55-6',
			'#jqxCheckBox-56-2',
			'#jqxCheckBox-56-3',
			'#jqxCheckBox-56-4',
			'#jqxCheckBox-56-5',
			'#jqxCheckBox-56-6',
			'#jqxCheckBox-57-2',
			'#jqxCheckBox-57-3',
			'#jqxCheckBox-57-4',
			'#jqxCheckBox-57-5',
			'#jqxCheckBox-57-6',
			'#jqxCheckBox-58-2',
			'#jqxCheckBox-58-3',
			'#jqxCheckBox-58-4',
			'#jqxCheckBox-58-5',
			'#jqxCheckBox-58-6',
			'#jqxCheckBox-59-2',
			'#jqxCheckBox-59-3',
			'#jqxCheckBox-59-4',
			'#jqxCheckBox-59-5',
			'#jqxCheckBox-59-6',
			'#jqxCheckBox-60-2',
			'#jqxCheckBox-60-3',
			'#jqxCheckBox-60-4',
			'#jqxCheckBox-60-5',
			'#jqxCheckBox-60-6',
			'#jqxCheckBox-61-2',
			'#jqxCheckBox-61-3',
			'#jqxCheckBox-61-4',
			'#jqxCheckBox-61-5',
			'#jqxCheckBox-61-6',
			'#jqxCheckBox-62-2',
			'#jqxCheckBox-62-3',
			'#jqxCheckBox-62-4',
			'#jqxCheckBox-62-5',
			'#jqxCheckBox-62-6',
			'#jqxCheckBox-63-2',
			'#jqxCheckBox-63-3',
			'#jqxCheckBox-63-4',
			'#jqxCheckBox-63-5',
			'#jqxCheckBox-63-6',
			'#jqxCheckBox-64-2',
			'#jqxCheckBox-64-3',
			'#jqxCheckBox-64-4',
			'#jqxCheckBox-64-5',
			'#jqxCheckBox-64-6',
			'#jqxCheckBox-65-2',
			'#jqxCheckBox-65-3',
			'#jqxCheckBox-65-4',
			'#jqxCheckBox-65-5',
			'#jqxCheckBox-65-6',
			'#jqxCheckBox-67-2',
			'#jqxCheckBox-67-3',
			'#jqxCheckBox-67-4',
			'#jqxCheckBox-67-5',
			'#jqxCheckBox-67-6',
			'#jqxCheckBox-68-2',
			'#jqxCheckBox-68-3',
			'#jqxCheckBox-68-4',
			'#jqxCheckBox-68-5',
			'#jqxCheckBox-68-6',
			'#jqxCheckBox-69-2',
			'#jqxCheckBox-69-3',
			'#jqxCheckBox-69-4',
			'#jqxCheckBox-69-5',
			'#jqxCheckBox-69-6',
			'#jqxCheckBox-70-2',
			'#jqxCheckBox-70-3',
			'#jqxCheckBox-70-4',
			'#jqxCheckBox-70-5',
			'#jqxCheckBox-70-6',
			'#jqxCheckBox-71-1',
	'#jqxCheckBox-71-3',
	'#jqxCheckBox-71-4',
	'#jqxCheckBox-71-2',
	'#jqxCheckBox-71-5',
	'#jqxCheckBox-71-6',
	'#jqxCheckBox-71-7',
	'#jqxCheckBox-71-8',
	'#jqxCheckBox-72-1',
	'#jqxCheckBox-72-3',
	'#jqxCheckBox-72-4',
	'#jqxCheckBox-72-2',
	'#jqxCheckBox-72-5',
	'#jqxCheckBox-72-6',
	'#jqxCheckBox-72-7',
	'#jqxCheckBox-72-8',
	'#jqxCheckBox-73-1',
	'#jqxCheckBox-73-3',
	'#jqxCheckBox-73-4',
	'#jqxCheckBox-73-2',
	'#jqxCheckBox-73-5',
	'#jqxCheckBox-73-6',
	'#jqxCheckBox-73-7',
	'#jqxCheckBox-73-8',
	'#jqxCheckBox-74-1',
	'#jqxCheckBox-74-3',
	'#jqxCheckBox-74-4',
	'#jqxCheckBox-74-2',
	'#jqxCheckBox-74-5',
	'#jqxCheckBox-74-6',
	'#jqxCheckBox-74-7',
	'#jqxCheckBox-74-8',
	'#jqxCheckBox-75-1',
	'#jqxCheckBox-75-3',
	'#jqxCheckBox-75-4',
	'#jqxCheckBox-75-2',
	'#jqxCheckBox-75-5',
	'#jqxCheckBox-75-6',
	'#jqxCheckBox-75-7',
	'#jqxCheckBox-75-8',
	'#jqxCheckBox-76-1',
	'#jqxCheckBox-76-3',
	'#jqxCheckBox-76-4',
	'#jqxCheckBox-76-2',
	'#jqxCheckBox-76-5',
	'#jqxCheckBox-76-6',
	'#jqxCheckBox-76-7',
	'#jqxCheckBox-76-8',
			];	

const graphName=""; 
var selectedYieldsCount=0;
var selectedCommoditiesCount=0;	
var selectedLiquidityCount=0;		
var selectedVolumeCount=0;		
var selectedFxCdsCount=0;		
var selectedSkewsCount=0;		
var	selectedStiCount=0;
var	selectedMacroCount=0;	
var	selectedRatesCount=0;	
var	selectedLongEndsCount=0;	
var	selectedCryptosCount=0;	

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
	 const groupId_Id =  [
                { Id: '1', groupId: 52, rollingGroupId: 61  ,name:'BUNDS'},
				{ Id: '2', groupId: 53, rollingGroupId: 62  ,name:'BOBLS'},
				{ Id: '3', groupId: 54, rollingGroupId: 63  ,name:'SHATZ'},
				{ Id: '4', groupId: 55, rollingGroupId: 64  ,name:'BUXL'},
				{ Id: '5', groupId: 56, rollingGroupId: 65  ,name:'OAT'},
				{ Id: '6', groupId: 57, rollingGroupId: 67  ,name:'BTP'},
				{ Id: '7', groupId: 58, rollingGroupId: 68  ,name:'GILTS'},
				{ Id: '8', groupId: 59, rollingGroupId: 69  ,name:'T-NOTES'},
				{ Id: '9', groupId: 60, rollingGroupId: 70  ,name:'T-BONDS'},
                ];
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

			 mainContainer='';
			 mainGroupContainer='';
			 groupContainer='';
			 subgroupContainer='';
			 factorIner='';
			 factorInerItem='';
			 factorContainer='';	
 
		 $.ajax({
	        contentType: "application/json",
	        url: "/longEnds/get-all-longends-display-settings",
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
				                 		+'<div class="col-12 d-flex"><div class="align-middle fw-bold">INITIALS</div><div class="align-middle fw-bold">ROLLING</div></div>'
										+'<div class="col-12 d-flex">'
											+'<div class="col-6 d-flex">'
												+'<div class="col d-flex"><div class="align-middle">OPEN</div></div>'
												+'<div class="col d-flex"><div class="align-middle">SETTLE</div></div>'
												+'<div class="col d-flex"><div class="align-middle">CLOSE</div></div>'
												+'<div class="col d-flex"><div class="align-middle">HIGH</div></div>'
												+'<div class="col d-flex"><div class="align-middle">LOW</div></div>'
											+'</div>'
											+'<div class="col-6 d-flex">'
												+'<div class="col d-flex"><div class="align-middle">OPEN</div></div>'
												+'<div class="col d-flex"><div class="align-middle">SETTLE</div></div>'
												+'<div class="col d-flex"><div class="align-middle">CLOSE</div></div>'
												+'<div class="col d-flex"><div class="align-middle">HIGH</div></div>'
												+'<div class="col d-flex"><div class="align-middle">LOW</div></div>'
											+'</div>'
										+'</div>'
									+'</div>'
							  +'</div>';
						
				// Iterate over each groupId
				Object.keys(groupedData).forEach(function (groupId, i) {
				    const groupName=groupId_Id.filter(value => value.groupId == groupId)[0].name;
				    classStyle=(i%2!=0)?'row-style':'';
				     mainGroupContainer+='<div class="col-12 d-flex">';
				     groupContainer+='<div class="col-2 '+classStyle+'">'
				     		+'<div class="">'+groupName+'</div>'
+'</div>';
					 subgroupContainer+='<div class="col-10 '+classStyle+' align-items-center d-flex">';
					 	
				    // Iterate over each subgroupId within the current groupId
				    Object.keys(groupedData[groupId]).forEach(function (subgroupId) {
				     
				        // Iterate over each item within the current subgroupId
				       factorContainer='<div class="col-6  d-flex">'
				       factorIner+='<div class="col d-flex">'
				        groupedData[groupId][subgroupId].forEach(function (item) {
				            checkBox="jqxCheckBox-"+item.groupId+'-'+item.subgroupId;
		    	  	        isVisible=item.isVisible?'d-block':'d-none';
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
				      factorIner='';
				      Object.keys(groupedData[groupId]).forEach(function (subgroupId) {
				   
				        // Iterate over each item within the current subgroupId
				       rollingContainer='<div class="col-6  d-flex">'
				       factorIner+='<div class="col d-flex">'
				        groupedData[groupId][subgroupId].forEach(function (item) {
							const rollingGroupId=groupId_Id.filter(value => value.groupId == groupId)[0].rollingGroupId;

				            checkBox="jqxCheckBox-"+rollingGroupId+'-'+item.subgroupId;
		    	  	        isVisible=item.isVisible?'d-block':'d-none';
				             factorInerItem+='<div class="align-middle" style="    min-width: 24px;">'
									+'<div id="'+checkBox+'" class="jqx-checkbox-items  align-middle '+isVisible+'"></div>'
								+'</div>';
				        });
				       factorIner+=factorInerItem
				     		     +'</div>';
				     		     factorInerItem='';
				       rollingContainer+=factorIner
				     		     +'</div>';  
				     		   
				    });
				    subgroupContainer+= factorContainer ;
				    subgroupContainer+=rollingContainer;
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
				  $('#longEndsContainer').append(mainContainer); 
				  
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
			   } else if (["49", "48", "50","51"].includes(itemValue["#" + checkboxId].GroupId))
			   {
				   selectedRatesCount = updateCount(checked,selectedRatesCount)
				   updateTabTitles(selectedRatesCount);
			   }
			   else if (["52", "53", "54","55","56","57","58","59","60","61","62","63","64","65","67","68","69","70"].includes(itemValue["#" + checkboxId].GroupId))
			   {
				   selectedLongEndsCount = updateCount(checked,selectedLongEndsCount)
				   updateTabTitles(selectedLongEndsCount);
			   }
			   else if (["71","72","73","74","75","76"].includes(itemValue["#" + checkboxId].GroupId))
			   {
				   selectedCryptosCount = updateCount(checked,selectedCryptosCount)
				   updateTabTitles(selectedCryptosCount);
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
			 selectedRatesCount=0;
			 selectedLongEndsCount=0;
			 selectedCryptosCount=0;
			 
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
	const longEndsGroups = ["52", "53", "54","55","56","57","58","59","60","61","62","63","64","65","67","68","69","70"];
	
	mode = "merge";
	$("#SubChart1").css("display","none");
	$("#SubChart2").css("display","none");
	$("#split").css("display","inline-block");
	$("#merge").css("display","none");
	$(".chart-option").show();
	graphService = "metals";
	
	if (checkedItem == 2) {
		if (graphName === "") {
		   $("#scaleManagement").removeClass("d-none");
			$("#scaleManagement").addClass("d-flex");
					 				
			isAny2Series();
			return;
		}
	}else {
			$("#scaleManagement").removeClass("d-flex");
					  $("#scaleManagement").addClass("d-none");
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
					else if(longEndsGroups.includes(groupId)){
						graphService = "longEnds";
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

	  function isAny2Series(){
				  $('#overlayChart').show(); 
				   $(".chart-option").show(); 
				mode="merge";
				var dataParam;
                var checkedItemValues = [];
				var title;
				var fontsize='12px';
				var fromdate = formatDate(monthDate);
				var todate = formatDate(date);
				$("#mainChart").html("");
				$("#mainChart").css("display","block");
				$("#SubChart1").css("display","none");
				$("#SubChart2").css("display","none");
				$("#split").css("display","inline-block");
				$("#merge").css("display","none");
				chartType1='line';
				chartType2='line';
				if   (checkDateMonth(monthDate,date))
				   {
					  $("#button-monthForward").prop('disabled', false);
					}
					else
					{
						$("#button-monthForward").prop('disabled', true);
					}
				
				if   (checkDateYear(monthDate,date))
				   {
					  $("#button-yearForward").prop('disabled', false);
					}
					else
					{
						$("#button-yearForward").prop('disabled', true);
					} 
				 if(chart!=null)
					   chart.destroy();
			     if(correlationChart!=null)
			     correlationChart.destroy();   			
				 
		    	  for(i=0; i<checkedItemid.length; i++)
				   		   {
				   	  		 if(checkedItemid[i]!=null)
				   	  		  checkedItemValues.push(checkedItemid[i]);
				   	       }
				        hasMissingDates = (missingDatesGroups.includes(itemValue[checkedItemValues[0]].GroupId)
				        					||missingDatesGroups.includes(itemValue[checkedItemValues[1]].GroupId)
				        					)?"true":false;
				        
				       
		 	     	      dataParam = { 
		 		        		"fromdate":fromdate,
		 		        	    "todate":todate,
		 		        	    "period":"d",
		 		        	    "factor1":itemValue[checkedItemValues[0]].factor,
		 		        	    "subGroupId1":itemValue[checkedItemValues[0]].subGroupId,
		 		        	    "groupId1": itemValue[checkedItemValues[0]].GroupId,
		 		        	    "factor2":itemValue[checkedItemValues[1]].factor,
		 		        	    "subGroupId2":itemValue[checkedItemValues[1]].subGroupId,
		 		        	    "groupId2": itemValue[checkedItemValues[1]].GroupId,
		 		        	    "removeEmpty1": hasMissingDates,
		 		        	    "removeEmpty2": hasMissingDates,
		 		        	    "isCorrelation":true,
		 		        	    "correlaltionNbrOfDays":"15"
		 	     			   };
							   
		 	     			 disableOptions(true);
					    if(checkedItemValues.length>1)
					        	title=itemValue[checkedItemValues[0]].title +" vs "+ itemValue[checkedItemValues[1]].title 
					        		else 
					        			title=itemValue[checkedItemValues[0]].title
					        	
					        	 var options = {
					     	  			          series: [],
					     	  			          chart: {
													id:'main',
												//	group: 'correlation',
					  		   	  			         toolbar: {
					  		   	  			        show: true,
					  		   	  			        offsetX: -50,
					  		   	  			        offsetY: 0,
					  		   	  			        tools: {
					  		   	  			          download: false,
					  		   	  			          selection: true,
					  		   	  			          zoom: true,
					  		   	  			          zoomin: true,
					  		   	  			          zoomout: true,
					  		   	  			          pan: true,
					  		   	  			          reset: true | '<img src="/static/icons/reset.png" width="20">',
					  		   	  			          customIcons: []
					  		   	  			        }},
					     	  			          height: 525,
					     	  			          type: 'line',
					     	  			     animations: { enabled: false }
					     	  			        },
					     	  			   grid: {
					     	  				   
					     	  			  show:false,
					     	  			  borderColor: '#f0e68c',
					     	  			  strokeDashArray:1,
					     	  		      opacity: 0.5,
					  		   	  		  padding: {
					  		   	  	        right: 60,
					  		   	  	    },  
					     	  			},
					     	         colors: ["#F0AB2E", "#0097FE","#44546a","#7e95d9","#FAD7A0","#a3a3a5"],
					     	  			        fill: {
					     	  			            type:'solid',
					     	  			            opacity: [1, 1],
					     	  			          },
					     	  			        stroke: {
					     	  			        	 curve: 'straight',
					     	  			        	   width: 2.25
					     	  			        },
					     	  			        markers: {
					     	  			       colors: '#ffffff',
					                          size: 2,
					                          shape:'square',
					     	  			        },
					     	  			        title: {
					     	  			          text: '',
					     	  			        align: 'center',
													margin: 0,
													offsetY: 20,
													style: {
														fontWeight: 'bold',
													},
					    	    				        },
					  						subtitle: {
					  							text: 'copyright LibVol.com',
					  							align: 'right',
					  							margin: 10,
					  							offsetX: -50,
					  							offsetY: 30,
					  							floating: false,
					  							style: {
					  							  fontSize:  '10px',
					  							  fontWeight:  'normal',
					  							  color:  '#9699a2'
					  							},
					  						},
					     	  			        dataLabels: {
					     	  			          enabled: false
					     	  			        },
					     	  			        xaxis: {
													  
					     	  			        	   labels:  {
															   show:false ,
					  					        		//  rotate: -45,
					  					                  rotateAlways: true,
					  					                  minHeight:60,
					  					        		  style: {
					  							        	  fontSize: fontsize,
					  							        	 },
					  					        	  },
					     	  			           type: (hasMissingDates)?'datetime':'category',
	   	  			          					   tickAmount: 19,
					     	  			      axisBorder: {
					     	  		          show: true,
					     	  		          color: '#ffffff',
					     	  		          height: 3,
					     	  		          width: '100%',
					     	  		          offsetX: 0,
					     	  		          offsetY: 0
					     	  		      },
					     	  			        },
					     	  			   legend: {
					  		   	  			   fontSize: fontsize,
					  			        	   showForSingleSeries: true,
					  				    	   labels: {
					  				    	          colors: 'White',
					  				    	          useSeriesColors: false
					  				    	   },
					  				    	      markers: {
					  				    	          width: 12,
					  				    	          height: 2
					  				    	      },
					  				    	    formatter: function(seriesName, opts) {
					  				    	    	img= getCountryFlag(seriesName);
					  				    	        return [img , seriesName]
					  				    	    }
					  				    	  },
					  			         yaxis: [{
					  			        	labels: {
					  			        		 style: {
					  					        	  fontSize: fontsize,
					  					        	 }
					  			        	  },
					  			        	  axisBorder: {
					  			        		  width: 3,
					  			                  show: true,
					  			                  color: '#ffffff',
					  			                  offsetX: 0,
					  			                  offsetY: 0
					  			              },
					  			        
					  			        }],
					  			        noData: {
					  			        	  text: '',
					  			        	  align: 'center',
					  			        	  verticalAlign: 'middle',
					  			        	  offsetX: 0,
					  			        	  offsetY: 0,
					  			        	  style: {
					  			        	    color: undefined,
					  			        	    fontSize: '14px',
					  			        	    fontFamily: undefined
					  			        	  }
					  			        	}
					     	  			        };	    	
			  	       	  $.ajax({
			  	       	        type: "POST",
		      	    	        contentType:  "application/json; charset=utf-8",
		      	    	        url: "/bourse/getgraphseriesdata",
		      	    	        data: JSON.stringify(dataParam),
		      	    	        dataType: 'json',
		      	    	        timeout: 600000,
		      	    	        success: function (response) {
		      	    	         
		      	    	        	startDateF1=response[0].config.startDate;
		      	    	        	startDateF2=response[1].config.startDate;
		      	    	        	 if (startDateF1!=null)
		      	    	        	startDateF1 = new Date(startDateF1.split("-")[1]+"-"+startDateF1.split("-")[0]+"-"+startDateF1.split("-")[2]);
		      	    	        	 if (startDateF2!=null)
		      	    	        	 startDateF2 = new Date(startDateF2.split("-")[1]+"-"+startDateF2.split("-")[0]+"-"+startDateF2.split("-")[2]);
		      	    	            var dates=[];
		      	    	
		      	    	        	T1=response[0].config.displayDescription==null?itemValue[checkedItemValues[0]].title:response[0].config.displayDescription;
		      	    	        	T2=response[1].config.displayDescription==null?itemValue[checkedItemValues[1]].title:response[1].config.displayDescription;
		      	    	        	title= T1 +" vs "+ T2;

		      	    	        	 if (response[0].config.yAxisFormat!=null && response[0].config.yAxisFormat!="")
			      	    	           { 
			      	    	        	 if (response[0].config.yAxisFormat.includes("%"))
				      	    	           { isdecimal= false;
				      	    	        	   if (typeof response[0].config.yAxisFormat.split(".")[1] != 'undefined')
				      	    	        		 yaxisformat=response[0].config.yAxisFormat.split("%")[0].split(".")[1].length;
					      	    	            	else
					      	    	            		yaxisformat=0;
				      	    	           }
			      	    	           else 
			      	    	            	{
			      	    	        	    if (typeof response[0].config.yAxisFormat.split(".")[1] != 'undefined')
			      	    	            	yaxisformat=response[0].config.yAxisFormat.split(".")[1].length
			      	    	            	else 
			      	    	            		yaxisformat=0
			      	    	            		
			      	    	            	 isdecimal= true;	
			      	    	            	}
			      	    	           }
			      	    	           else
			      	    	        	 yaxisformat=3;
		      	    	        	
		      	    	        	var getFormatResult0 = getFormat(response[0].config.dataFormat);
		      	    	        	var getFormatResult1 = getFormat(response[1].config.dataFormat);
		      	    	        	 
		      	    	       	    chartDbFontSize = response[0].config.chartSize;
		      	    	        	fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0],chartDbFontSize);
	    	    	          	    showLegend	= 'legendfalse';//checkActiveChartLegend($("#gridLegend").find(".active")[0], showLegend);
	    	    	          	    
									if(hasMissingDates)
		      	    	          	chart.updateOptions(getChartDailyOptionMissingDates(title,response[0].config.chartShowgrid,fontsize,response[0].config.chartshowMarkes));
		      	    	          	else
		      	    	            chart.updateOptions(getChartDailyOption(title,response[0].config.chartShowgrid,fontsize,response[0].config.chartshowMarkes));
		      	    	       
			      	    	        var dbchartType1=response[0].config.chartType;
			      	    	            chartType1 =(getChartType(dbchartType1)[0]!='area')?getChartType(dbchartType1)[0]:'line';
			      	    	          
			      	    	        var dbchartType2=response[1].config.chartType;
			      	    	            chartType2 =getChartType(dbchartType2)[0]!='area'?getChartType(dbchartType2)[0]:'line';
			      	    	            min1 = Math.min.apply(null, response[0].graphResponseDTOLst.map(function(item) {
				      	    	          return item.y;
				      	    	        })),
				      	    	        max1 = Math.max.apply(null, response[0].graphResponseDTOLst.map(function(item) {
				      	    	          return item.y;
				      	    	        }));
										min2 = Math.min.apply(null, response[1].graphResponseDTOLst.map(function(item) {
				      	    	          return item.y;
				      	    	        })),
				      	    	        max2 = Math.max.apply(null, response[1].graphResponseDTOLst.map(function(item) {
				      	    	          return item.y;
				      	    	        }));
		      	    	         
			      	    	            min=Math.min(min1,min2);
										max=Math.max(max1,max2);
									 // minvalue = parseFloat((Math.floor(min*20)/20).toFixed(2));
				      	    	    // maxvalue = parseFloat((Math.floor(max*20)/20).toFixed(2));
				      	    	     minvalue=min;
	      	    	  				 maxvalue=max;
	      	    	  				 	 
									 var yaxisformat = getFormat(response[0].config.yAxisFormat);
									 var yaxisformat1 = getFormat(response[1].config.yAxisFormat);
									 
				      	    	     notDecimal=yaxisformat[1];
									 nbrOfDigits=yaxisformat[0];
									 notDecimal1=yaxisformat1[1];
									 nbrOfDigits1=yaxisformat1[0];
									 chartType2=='column'? response[1].graphResponseDTOLst = updateSeriesValue(response[0].graphResponseDTOLst,response[1].graphResponseDTOLst):null;
							   /*    
							       let { data1: alignedData1, data2: alignedData2 } = alignMergeDataSets(response[0].graphResponseDTOLst, response[1].graphResponseDTOLst) ;
					 			   
					 			   response[0].graphResponseDTOLst = alignedData1;
							       response[1].graphResponseDTOLst = alignedData2;*/
							       
							         chartConfigSettings={
											 isDecimal:isdecimal,
											 yAxisFormat:yaxisformat,
											 yAxisFormat1:yaxisformat1,
											 fontSize:fontsize,
											 min1:min1,
											 max1:max1,
											 min2:min2,
											 max2:max2,
											 min:min,
											 max:max,
											 minvalue:minvalue,
											 maxvalue:maxvalue,
											 chartType1:chartType1,
											 chartType2:chartType2,
											 getFormatResult0:getFormatResult0,
											 getFormatResult1:getFormatResult1,
											 response:response,
											 chartColor:chartColor,
											 chartTransparency:chartTransparency,
											 checkedItem:checkedItem};
											 
											 processDataAndAddNewEndDateForExtraSpaceInGraph( chartConfigSettings.response[0].graphResponseDTOLst ,10,false)
												    .then(({ response }) => {
															 chartConfigSettings.response[0].graphResponseDTOLst = response;
												    })
												    .catch(error => {
												        console.error('Error processing data:', error);
												    });	
									
											 if(hasMissingDates)
											 	{
													     				    			 
					 const values1 = addMarginToMinMax(chartConfigSettings.min1, chartConfigSettings.max1, 5);
					 var valueMin1 = values1;
					 var valueMax1 = values1;
 					  graphService=typeof graphService!='undefined'?graphService:'';
 					 var calculatedMinValue1 = Math.sign(chartConfigSettings.min1)==-1 ? -Math.abs(chartConfigSettings.min1)-valueMin1 : Math.abs(chartConfigSettings.min1)-valueMin1;
				         //calculatedMinValue1 = PositiveGraphs.includes(graphService)?( Math.sign(calculatedMinValue1) == -1 ?0:calculatedMinValue1): calculatedMinValue1;
				    	 calculatedMinValue1 =  (Math.sign(calculatedMinValue1) == -1 && !(Math.sign(chartConfigSettings.min1)==-1)  )? 0: calculatedMinValue1;

					 const values2 = addMarginToMinMax(chartConfigSettings.min2, chartConfigSettings.max2, 5);
					 var valueMin2 = values2;
					 var valueMax2 = values2;
 				  	 var calculatedMinValue2 = Math.sign(chartConfigSettings.min2)==-1 ? -Math.abs(chartConfigSettings.min2)-valueMin2 : Math.abs(chartConfigSettings.min2)-valueMin2;
				       //  calculatedMinValue2 = PositiveGraphs.includes(graphService)?( Math.sign(calculatedMinValue2) == -1 ?0:calculatedMinValue2): calculatedMinValue2;
				         calculatedMinValue2 =  (Math.sign(calculatedMinValue2) == -1 && !(Math.sign(chartConfigSettings.min2)==-1) )? 0: calculatedMinValue2;
      	    	   
      	    	     let yAxis =  [{
									 labels: {
	     				    		 minWidth: 75,maxWidth: 75,
	 				        		 style: {
	 						        	  fontSize: chartConfigSettings.fontSize,
	 						        	 },
										 formatter: function(val, index) {
										 if (chartConfigSettings.yAxisFormat[1])
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]);
						  				else 
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]) + "%";
									      }
						 				        	  },
					     				          tickAmount: 6,
					     				    	  min:calculatedMinValue1,
					     				    	  max:Math.sign(chartConfigSettings.max1)==-1 ? -Math.abs(chartConfigSettings.max1)+valueMax1 : Math.abs(chartConfigSettings.max1)+valueMax1,
					     				    			  axisBorder: {
					     					                  width: 3,
					     					                  show: true,
					     					                  color: typeof chartConfigSettings.overideColors != 'undefined'? chartConfigSettings.overideColors[0] : "#FFFFFF",
					     					                  offsetX: 0,
					     					                  offsetY: 0
					     					              },
					     				    			 },
														{
 													  opposite: true,
						     				    	  labels: {
						     				    		 minWidth: 75,maxWidth: 75,
						 				        		 style: {
						 						        	  fontSize: chartConfigSettings.fontSize,
						 						        	  cssClass: typeof chartConfigSettings.overideColors != 'undefined'? 'apexcharts-yaxis-label-2y-gold' :'apexcharts-yaxis-label-2y',
						 						        	   fontWeight: 600,
						 						        	 },
						 						        	 formatter: function(val, index) {
															 if (chartConfigSettings.yAxisFormat1[1])
											  				  return  val.toFixed(chartConfigSettings.yAxisFormat1[0]);
											  				else 
											  				  return  val.toFixed(chartConfigSettings.yAxisFormat1[0]) + "%";
														      }
														      
						 				        	  },
					     				          tickAmount: 6,
					     				    	  min:calculatedMinValue2,
					     				    	  max:Math.sign(chartConfigSettings.max2)==-1 ? -Math.abs(chartConfigSettings.max2)+valueMax2 : Math.abs(chartConfigSettings.max2)+valueMax2,
					     				    			  axisBorder: {
					     					                  width: 3,
					     					                  show: true,
					     					                  color: typeof chartConfigSettings.overideColors != 'undefined'? chartConfigSettings.overideColors[1] :"#FFA500",
					     					                  offsetX: 0,
					     					                  offsetY: 0
					     					              },
					     				    			 }] ;
      	    	    	
      	    	     if(isOneScale)
      	    	     {	
						   let min = Math.min(chartConfigSettings.min1, chartConfigSettings.min2);
					       let max = Math.max(chartConfigSettings.max1, chartConfigSettings.max2);
						    const values1 = addMarginToMinMax(min, max, 5);
						 var valueMin1 = values1;
						 var valueMax1 = values1;
	 					  graphService=typeof graphService!='undefined'?graphService:'';
	 					 var calculatedMinValue1 = Math.sign(min)==-1 ? -Math.abs(min)-valueMin1 : Math.abs(min)-valueMin1;
					         //calculatedMinValue1 = PositiveGraphs.includes(graphService)?( Math.sign(calculatedMinValue1) == -1 ?0:calculatedMinValue1): calculatedMinValue1;
					    	 calculatedMinValue1 =  (Math.sign(calculatedMinValue1) == -1 && !(Math.sign(min)==-1)  )? 0: calculatedMinValue1;
	
						   yAxis =  [{
									 labels: {
	     				    		 minWidth: 75,maxWidth: 75,
	 				        		 style: {
	 						        	  fontSize: chartConfigSettings.fontSize,
	 						        	 },
										 formatter: function(val, index) {
										 if (chartConfigSettings.yAxisFormat[1])
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]);
						  				else 
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]) + "%";
									      }
						 				        	  },
				     				          tickAmount: 6,
				     				    	  min:calculatedMinValue1,
				     				    	  max:Math.sign(chartConfigSettings.max)==-1 ? -Math.abs(chartConfigSettings.max)+valueMax1 : Math.abs(chartConfigSettings.max)+valueMax1,
				     				    			  axisBorder: {
				     					                  width: 3,
				     					                  show: true,
				     					                  color: typeof chartConfigSettings.overideColors != 'undefined'? chartConfigSettings.overideColors[0] : "#FFFFFF",
				     					                  offsetX: 0,
				     					                  offsetY: 0
				     					              },
				     				    			 }] ;
							}
      	    	    	
      	    	    	chart.updateOptions({
						  series:[{
						          name: chartConfigSettings.response[0].config.displayDescription==null?itemValue[chartConfigSettings.checkedItemValues[0]].title:chartConfigSettings.response[0].config.displayDescription,
						          type: chartConfigSettings.chartType1,
						          data: chartConfigSettings.response[0].graphResponseDTOLst
						        },{
						          name: chartConfigSettings.response[1].config.displayDescription==null?itemValue[chartConfigSettings.checkedItemValues[1]].title:chartConfigSettings.response[1].config.displayDescription,
						          type: chartConfigSettings.chartType2,
						          data: chartConfigSettings.response[1].graphResponseDTOLst,
						          strokeWidth:getStrokeWidth()
						        }],
      	    	    	  extra:{
								isDecimal: chartConfigSettings.isdecimal,
								yAxisFormat:chartConfigSettings.yaxisformat,
							},
							 colors: typeof chartConfigSettings.overideColors != 'undefined'? chartConfigSettings.overideColors : ["#FFFFFF", "#FFA500"],
      	    	    		 markers: {
      	    	    		   colors: typeof chartConfigSettings.overideColors != 'undefined'? chartConfigSettings.overideColors : ["#FFFFFF", "#FFA500"],
      	    	    		   strokeColors: typeof chartConfigSettings.overideColors != 'undefined'? chartConfigSettings.overideColors : ["#FFFFFF", "#FFA500"]
      	    	    		 },
     				       yaxis: yAxis,
						  tooltip: {
							  x: {
						          show: false,
						      },
							  y: {
								  formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
									  if(seriesIndex == 0)
						  				{
						  				if (chartConfigSettings.getFormatResult1[1])
						  				  return  value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0]):'';
						  				else 
						  				  {  
												return  value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0])+ "%" :'' ;}
						  				}else 
						  					 if(seriesIndex == 1){
						  					  if (chartConfigSettings.getFormatResult1[1])
						  						  return  value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0]):'';
						  						else 
						  							 return  value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0])+ "%":'' ;
						  					 }
								    },
								    title: {
							              formatter: (seriesName) => '',
							          },
					      },
						}
    	    		});     
			      	    	           
				
												 }
											 else
												 {
													 
					 const values1 = addMarginToMinMax(chartConfigSettings.min1, chartConfigSettings.max1, 5);
				     var valueMin1 = values1;
				     var valueMax1 = values1; 	
				     
				     const values2 = addMarginToMinMax(chartConfigSettings.min2, chartConfigSettings.max2, 5);
				     var valueMin2 = values2;
				     var valueMax2 = values2; 	
				    
				     calculatedMinValue1 =  Math.sign(chartConfigSettings.min1)==-1 ? -Math.abs(chartConfigSettings.min1)-valueMin1 : Math.abs(chartConfigSettings.min1)-valueMin1;
				     calculatedMinValue1 =  (Math.sign(calculatedMinValue1) == -1 && !(Math.sign(chartConfigSettings.min1)==-1) )? 0: calculatedMinValue1;

				     calculatedMinValue2 =  Math.sign(chartConfigSettings.min2)==-1 ? -Math.abs(chartConfigSettings.min2)-valueMin2 : Math.abs(chartConfigSettings.min2)-valueMin2;
				     calculatedMinValue2 =  (Math.sign(calculatedMinValue2) == -1 && !(Math.sign(chartConfigSettings.min2)==-1) )? 0: calculatedMinValue2;


      	    	     let yAxis =   [{
									 labels: {
	     				    		 minWidth: 75,maxWidth: 75,
	 				        		 style: {
	 						        	  fontSize: chartConfigSettings.fontSize,
	 						        	 },
										 formatter: function(val, index) {
										 if (chartConfigSettings.yAxisFormat[1])
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]);
						  				else 
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]) + "%";
									      }
						 				        	  },
					     				          tickAmount: 6,
					     				    	  min:calculatedMinValue1,
					     				    	  max:Math.sign(chartConfigSettings.max1)==-1 ? -Math.abs(chartConfigSettings.max1)+valueMax1 : Math.abs(chartConfigSettings.max1)+valueMax1,
					     				    			  axisBorder: {
					     					                  width: 3,
					     					                  show: true,
					     					                  color: "#FFFFFF",
					     					                  offsetX: 0,
					     					                  offsetY: 0
					     					              },
					     				    			 },
														{
 													  opposite: true,
						     				    	  labels: {
						     				    		 minWidth: 75,maxWidth: 75,
						 				        		 style: {
						 						        	  fontSize: chartConfigSettings.fontSize,
						 						        	  cssClass: 'apexcharts-yaxis-label-2y',
						 						        	   fontWeight: 600,
						 						        	 },
						 						        	 formatter: function(val, index) {
															 if (chartConfigSettings.yAxisFormat1[1])
											  				  return  val.toFixed(chartConfigSettings.yAxisFormat1[0]);
											  				else 
											  				  return  val.toFixed(chartConfigSettings.yAxisFormat1[0]) + "%";
														      }
						 				        	  },
					     				          tickAmount: 6,
					     				    	  min:calculatedMinValue2,
					     				    	  max:Math.sign(chartConfigSettings.max2)==-1 ? -Math.abs(chartConfigSettings.max2)+valueMax2 : Math.abs(chartConfigSettings.max2)+valueMax2,
					     				    			  axisBorder: {
					     					                  width: 3,
					     					                  show: true,
					     					                  color: "#FFA500",
					     					                  offsetX: 0,
					     					                  offsetY: 0
					     					              },
					     				    			 }] ;
      	    	    	
      	    	     if(isOneScale)
      	    	     {	
						   let min = Math.min(chartConfigSettings.min1, chartConfigSettings.min2);
					       let max = Math.max(chartConfigSettings.max1, chartConfigSettings.max2);
						    const values1 = addMarginToMinMax(min, max, 5);
						 var valueMin1 = values1;
						 var valueMax1 = values1;
	 					  graphService=typeof graphService!='undefined'?graphService:'';
	 					 var calculatedMinValue1 = Math.sign(min)==-1 ? -Math.abs(min)-valueMin1 : Math.abs(min)-valueMin1;
					         //calculatedMinValue1 = PositiveGraphs.includes(graphService)?( Math.sign(calculatedMinValue1) == -1 ?0:calculatedMinValue1): calculatedMinValue1;
					    	 calculatedMinValue1 =  (Math.sign(calculatedMinValue1) == -1 && !(Math.sign(min)==-1)  )? 0: calculatedMinValue1;
	
						   yAxis =  [{
									 labels: {
	     				    		 minWidth: 75,maxWidth: 75,
	 				        		 style: {
	 						        	  fontSize: chartConfigSettings.fontSize,
	 						        	 },
										 formatter: function(val, index) {
										 if (chartConfigSettings.yAxisFormat[1])
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]);
						  				else 
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]) + "%";
									      }
						 				        	  },
				     				          tickAmount: 6,
				     				    	  min:calculatedMinValue1,
				     				    	  max:Math.sign(chartConfigSettings.max)==-1 ? -Math.abs(chartConfigSettings.max)+valueMax1 : Math.abs(chartConfigSettings.max)+valueMax1,
				     				    			  axisBorder: {
				     					                  width: 3,
				     					                  show: true,
				     					                  color: typeof chartConfigSettings.overideColors != 'undefined'? chartConfigSettings.overideColors[0] : "#FFFFFF",
				     					                  offsetX: 0,
				     					                  offsetY: 0
				     					              },
				     				    			 }] ;
							}
      	    	    	


						 chart.updateOptions({
							  series:[{
							          name: chartConfigSettings.response[0].config.displayDescription==null?itemValue[chartConfigSettings.checkedItemValues[0]].title:chartConfigSettings.response[0].config.displayDescription,
							          type: chartConfigSettings.chartType1,
							          data: chartConfigSettings.response[0].graphResponseDTOLst
							        },{
							          name: chartConfigSettings.response[1].config.displayDescription==null?itemValue[chartConfigSettings.checkedItemValues[1]].title:chartConfigSettings.response[1].config.displayDescription,
							          type: chartConfigSettings.chartType2,
							          data: chartConfigSettings.response[1].graphResponseDTOLst
							        }],
      	    	    	  extra:{
								isDecimal: chartConfigSettings.isdecimal,
								yAxisFormat:chartConfigSettings.yaxisformat,
							},
							 colors: ["#FFFFFF", "#FFA500"],
      	    	    		 markers: {
      	    	    		   colors: ["#FFFFFF", "#FFA500"],
      	    	    		   strokeColors:["#FFFFFF", "#FFA500"]
      	    	    		 },
     				       yaxis: yAxis,
												  tooltip: {
													  x: {
					    						          show: false,
					    						      },
					    							  y: {
					    								  formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
															  if(seriesIndex == 0)
												  				{
												  				if (chartConfigSettings.getFormatResult1[1])
												  				  return  value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0]):'';
												  				else 
												  				  {  
																		return  value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0])+ "%":'' ;}
												  				}else 
												  					 if(seriesIndex == 1){
												  					  if (chartConfigSettings.getFormatResult1[1])
												  						  return  value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0]):'';
												  						else 
												  							 return  value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0])+ "%":'' ;
												  					 }
					    								    },
					    								    title: {
					    							              formatter: (seriesName) => '',
					    							          },
					    					      },
					    						}
				      	    	    		},
				      	    	    		);     
			      	    	        
				
												 }
									
									
/*									
    var optionsCorrelation = {
					     	  			           series: [{
			          data: chartConfigSettings.response[2].graphResponseDTOLst
			        }],
					     	  			          chart: {
													id:'main-correlation',
													//group: 'correlation',
					  		   	  			        toolbar: {
					  		   	  			        show:false,
					  		   	  			        offsetX: -50,
					  		   	  			        offsetY: 0,
					  		   	  			        tools: {
					  		   	  			          download: false,s
					  		   	  			          selection: true,
					  		   	  			          zoom: true,
					  		   	  			          zoomin: true,
					  		   	  			          zoomout: true,
					  		   	  			          pan: true,
					  		   	  			          reset: true | '<img src="/static/icons/reset.png" width="20">',
					  		   	  			          customIcons: []
					  		   	  			        }},
					     	  			          height: 225,
					     	  			          type: 'line',
					     	  			     animations: { enabled: false }
					     	  			        },
					     	  			   grid: {
					     	  				   
					     	  			  show:false,
					     	  			  borderColor: '#f0e68c',
					     	  			  strokeDashArray:1,
					     	  		      opacity: 0.5,
					  		   	  		  padding: {
					  		   	  	        right: 60,
					  		   	  	    },  
					     	  			},
					     	         colors: ["#3786f4"],
					     	  			        fill: {
					     	  			            type:'solid',
					     	  			            opacity: [1, 1],
					     	  			          },
					     	  			        stroke: {
					     	  			        	 curve: 'straight',
					     	  			        	   width: 2.25
					     	  			        },
					     	  			        markers: {
					     	  			       colors: '#ffffff',
					                          size: 0,
					                          shape:'square',
					     	  			        },
					     	  			        title: {
					     	  			          text: '',
					     	  			        align: 'center',
													margin: 0,
													offsetY: 20,
													style: {
														fontWeight: 'bold',
													},
					    	    				        },
					     	  			        dataLabels: {
					     	  			          enabled: false
					     	  			        },
					     	  			        xaxis: {
					     	  			        	   labels:  {
					  					        		//  rotate: -45,
					  					                  rotateAlways: true,
					  					                  minHeight:60,
					  					        		  style: {
					  							        	  fontSize: fontsize,
					  							        	 },
					  					        	  },
					     	  			           type: (hasMissingDates)?'datetime':'category',
	   	  			          					   tickAmount: 19,
					     	  			      axisBorder: {
					     	  		          show: true,
					     	  		          color: '#ffffff',
					     	  		          height: 3,
					     	  		          width: '100%',
					     	  		          offsetX: 0,
					     	  		          offsetY: 0
					     	  		      },
					     	  			        },
					     	  			   legend: {
					  		   	  			   fontSize: fontsize,
					  			        	   showForSingleSeries: true,
					  				    	   labels: {
					  				    	          colors: 'White',
					  				    	          useSeriesColors: false
					  				    	   },
					  				    	      markers: {
					  				    	          width: 12,
					  				    	          height: 2
					  				    	      },
					  				    	    formatter: function(seriesName, opts) {
					  				    	    	img= getCountryFlag(seriesName);
					  				    	        return [img , seriesName]
					  				    	    }
					  				    	  },
					  			         yaxis: [{
					  			        	labels: {
					  			        		 style: {
					  					        	  fontSize: fontsize,
					  					        	 }
					  			        	  },
					  			        	  axisBorder: {
					  			        		  width: 3,
					  			                  show: true,
					  			                  color: '#ffffff',
					  			                  offsetX: 0,
					  			                  offsetY: 0
					  			              },
					  			        
					  			        }],
					  			        noData: {
					  			        	  text: '',
					  			        	  align: 'center',
					  			        	  verticalAlign: 'middle',
					  			        	  offsetX: 0,
					  			        	  offsetY: 0,
					  			        	  style: {
					  			        	    color: undefined,
					  			        	    fontSize: '14px',
					  			        	    fontFamily: undefined
					  			        	  }
					  			        	}
					     	  			        };	    	
   
	    correlationChart = new ApexCharts(document.querySelector("#mainChart-correlation"), optionsCorrelation);*/
       // correlationChart.render();
				
			   $('#overlayChart').hide();
		      	   },
		      	    	        error: function (e) {
		      	    	        	
		      						  console.log("ERROR : ", e);
		      	
		      	    	        }
		      	    	    });	
			  	       
			        chart = new ApexCharts(document.querySelector("#mainChart"), options);
			        chart.render();
			        
			        
       
      
				  // The global window.Apex variable below can be used to set common options for all charts on the page
 

			            $("#dateFrom-mainChart").val(fromdate);
	    	            $("#dateTo-mainChart").val(todate);
					inGraphNews(getSelectedFields((checkedItemValues.length==0?allItemsSelected(Items):checkedItemValues),itemValue));

			  }
