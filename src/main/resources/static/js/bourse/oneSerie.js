  var serieValue = $("#serieValue").val();
  serieValue = parseInt(serieValue);
	if (serieValue === 1) {
  var graphService = "metals";	    
  var allitems=["#jqxCheckBoxUSA-30",
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
	  "#jqxCheckBoxeurozonebtobbbEurozoneatoaaa"
];

	
	} else if (serieValue === 2) {
		  graphService = "metals";
	     var allitems=["#jqxCheckBoxGold",
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
		     		"#jqxCheckBoxContainer"];
	}else if (serieValue === 3) {
		 graphService = "liquidity";
	     var allitems=["#jqxCheckBoxavgUsatoaaaUsa",
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
				"#jqxCheckBoxM3"
     			   ];

	}else if (serieValue === 4) {
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

	}
else if (serieValue === 5) {
		 graphService = "fxcds";
	   var allitems= [ "#jqxCheckBoxusdeur",
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
				"#jqxCheckBoxegypt"
				    ];	

	}
	else if (serieValue === 6) {
		 graphService = "skews";
		var allitems = ['#jqxCheckBox-25-DP15_ATM-10'
			, '#jqxCheckBox-25-DP15_ATM-11'
			, '#jqxCheckBox-25-DP25_ATM-10'
			, '#jqxCheckBox-25-DP25_ATM-11'
			, '#jqxCheckBox-25-DC15_ATM-10'
			, '#jqxCheckBox-25-DC15_ATM-11'
			, '#jqxCheckBox-25-DC25_ATM-10'
			, '#jqxCheckBox-25-DC25_ATM-11'
			, '#jqxCheckBox-25-DP25_DC25-10'
			, '#jqxCheckBox-25-DP25_DC25-11'
			, '#jqxCheckBox-25-DP15_DC15-10'
			, '#jqxCheckBox-25-DP15_DC15-11'
			, '#jqxCheckBox-26-DP15_ATM-10'
			, '#jqxCheckBox-26-DP25_ATM-10'
			, '#jqxCheckBox-26-DC25_ATM-10'
			, '#jqxCheckBox-26-DC15_ATM-10'
			, '#jqxCheckBox-26-DP25_DC25-10'
			, '#jqxCheckBox-26-DP15_DC15-10'
			, '#jqxCheckBox-26-DP15_ATM-11'
			, '#jqxCheckBox-26-DP25_ATM-11'
			, '#jqxCheckBox-26-DC25_ATM-11'
			, '#jqxCheckBox-26-DC15_ATM-11'
			, '#jqxCheckBox-26-DP25_DC25-11'
			, '#jqxCheckBox-26-DP15_DC15-11'
			, '#jqxCheckBox-27-DP15_ATM-10'
			, '#jqxCheckBox-27-DP25_ATM-10'
			, '#jqxCheckBox-27-DC25_ATM-10'
			, '#jqxCheckBox-27-DC15_ATM-10'
			, '#jqxCheckBox-27-DP25_DC25-10'
			, '#jqxCheckBox-27-DP15_DC15-10'
			, '#jqxCheckBox-27-DP15_ATM-11'
			, '#jqxCheckBox-27-DP25_ATM-11'
			, '#jqxCheckBox-27-DC25_ATM-11'
			, '#jqxCheckBox-27-DC15_ATM-11'
			, '#jqxCheckBox-27-DP25_DC25-11'
			, '#jqxCheckBox-27-DP15_DC15-11'
			, '#jqxCheckBox-28-DP15_ATM-10'
			, '#jqxCheckBox-28-DP25_ATM-10'
			, '#jqxCheckBox-28-DC25_ATM-10'
			, '#jqxCheckBox-28-DC15_ATM-10'
			, '#jqxCheckBox-28-DP25_DC25-10'
			, '#jqxCheckBox-28-DP15_DC15-10'
			, '#jqxCheckBox-28-DP15_ATM-11'
			, '#jqxCheckBox-28-DP25_ATM-11'
			, '#jqxCheckBox-28-DC25_ATM-11'
			, '#jqxCheckBox-28-DC15_ATM-11'
			, '#jqxCheckBox-28-DP25_DC25-11'
			, '#jqxCheckBox-28-DP15_DC15-11'
			, '#jqxCheckBox-29-DP15_ATM-10'
			, '#jqxCheckBox-29-DP25_ATM-10'
			, '#jqxCheckBox-29-DC25_ATM-10'
			, '#jqxCheckBox-29-DC15_ATM-10'
			, '#jqxCheckBox-29-DP25_DC25-10'
			, '#jqxCheckBox-29-DP15_DC15-10'
			, '#jqxCheckBox-29-DP15_ATM-11'
			, '#jqxCheckBox-29-DP25_ATM-11'
			, '#jqxCheckBox-29-DC25_ATM-11'
			, '#jqxCheckBox-29-DC15_ATM-11'
			, '#jqxCheckBox-29-DP25_DC25-11'
			, '#jqxCheckBox-29-DP15_DC15-11',
			'#jqxCheckBox-30-DP15_ATM-12'
			, '#jqxCheckBox-30-DP25_ATM-12'
			, '#jqxCheckBox-30-DC25_ATM-12'
			, '#jqxCheckBox-30-DC15_ATM-12'
			, '#jqxCheckBox-30-DP25_DC25-12'
			, '#jqxCheckBox-30-DP15_DC15-12'
			, '#jqxCheckBox-30-DP15_ATM-13'
			, '#jqxCheckBox-30-DP25_ATM-13'
			, '#jqxCheckBox-30-DC25_ATM-13'
			, '#jqxCheckBox-30-DC15_ATM-13'
			, '#jqxCheckBox-30-DP25_DC25-13'
			, '#jqxCheckBox-30-DP15_DC15-13'
			, '#jqxCheckBox-31-DP15_ATM-12'
			, '#jqxCheckBox-31-DP25_ATM-12'
			, '#jqxCheckBox-31-DC25_ATM-12'
			, '#jqxCheckBox-31-DC15_ATM-12'
			, '#jqxCheckBox-31-DP25_DC25-12'
			, '#jqxCheckBox-31-DP15_DC15-12'
			, '#jqxCheckBox-31-DP15_ATM-13'
			, '#jqxCheckBox-31-DP25_ATM-13'
			, '#jqxCheckBox-31-DC25_ATM-13'
			, '#jqxCheckBox-31-DC15_ATM-13'
			, '#jqxCheckBox-31-DP25_DC25-13'
			, '#jqxCheckBox-31-DP15_DC15-13',
			'#jqxCheckBox-30-DP15_ATM-10'
			, '#jqxCheckBox-30-DP25_ATM-10'
			, '#jqxCheckBox-30-DC25_ATM-10'
			, '#jqxCheckBox-30-DC15_ATM-10'
			, '#jqxCheckBox-30-DP25_DC25-10'
			, '#jqxCheckBox-30-DP15_DC15-10'
			, '#jqxCheckBox-31-DP15_ATM-10'
			, '#jqxCheckBox-31-DP25_ATM-10'
			, '#jqxCheckBox-31-DC25_ATM-10'
			, '#jqxCheckBox-31-DC15_ATM-10'
			, '#jqxCheckBox-31-DP25_DC25-10'
			, '#jqxCheckBox-31-DP15_DC15-10'
		];	

	}
		else if (serieValue === 7) {
		 graphService = "sti";

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
			    
		 }	else if (serieValue === 8) {
		 graphService = "skews";

	 var allitems= [ 
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
		];	

var mainContainer='';
var mainGroupContainer='';
var groupContainer='';
var subgroupContainer='';
var factorIner='';
var factorInerItem='';
var factorContainer='';

		 }
		 else if (serieValue === 9) {
		 graphService = "rates";

		var allitems = ["#jqxCheckBoxFed-17",
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
		];	
			    
		 }	else if (serieValue === 10) {
		 graphService = "longEnds";

	 var allitems =[ 
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
		];

var mainContainer='';
var mainGroupContainer='';
var groupContainer='';
var subgroupContainer='';
var factorIner='';
var factorInerItem='';
var factorContainer='';

		 }
const graphName=""; 
			   
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	 
	  if (serieValue === 8) {
		  
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
	 initializeFunctions();
	 
	 initializeNavigationButtons();
	 initialiazeItem(allitems,1);
	 initialiazeClearFilterButton();
	 initializeShowFilterButton();
	 
     $("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });
			},
	        error: function (e) {
	        	
					  console.log("ERROR : ", e);

	        }
	    }); 
	 }
     else 	 
	  if (serieValue === 10) {
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
			 initializeFunctions();
			 
			 initializeNavigationButtons();
			 initialiazeItem(allitems,1);
			 initialiazeClearFilterButton();
			 initializeShowFilterButton();
			 
		     $("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });  
		
		    	
			},
	        error: function (e) {
	        	
					  console.log("ERROR : ", e);

	        }
	    }); 
	  
	 }
     else{
		 
	 initializeNewsBanner();
	 initializeFunctions();
	 
	 initializeNavigationButtons();
	 initialiazeItem(allitems,1);
	 initialiazeClearFilterButton();
	 initializeShowFilterButton();
	 
     $("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });
   	}
});

function drawGraph() {
	const removeEmpty = true;
	const key = ['yield', 'curve', 'cross'];
	
	 for(i=0; i<checkedItemid.length; i++)
	   {
  		 if(checkedItemid[i]!=null)
  		  {const groupId = itemValue[checkedItemid[i]].GroupId;
  		  if (key.includes(groupId)) {
			   var itemsDataParam;
			   getGraphDataSovereign(graphName,itemsDataParam);
			} else if(graphService==="rates") {
				if(groupId==48||groupId==49)
				  getGraphDataWithFactor(graphService,graphName,removeEmpty,false);
				else 
				getGraphData(graphService,graphName,removeEmpty,false);
				
			}
			else if(graphService==="skews") {
				  getGraphDataWithFactor(graphService,graphName,removeEmpty,false);
			}
				else {
				    getGraphData(graphService,graphName,removeEmpty,false);
				}
			}
       }
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
