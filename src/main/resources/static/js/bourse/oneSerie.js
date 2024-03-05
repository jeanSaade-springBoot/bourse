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
			"#jqxCheckBoxBitcoin",
			"#jqxCheckBoxEtherium",
			"#jqxCheckBoxSolana",
			"#jqxCheckBoxCardano",
			"#jqxCheckBoxShiba",
		];	
			    
		 }
const graphName=""; 
			   
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	
     initializeNewsBanner();
	 initializeFunctions();
	 
	 initializeNavigationButtons();
	 initialiazeItem(allitems,1);
	 initialiazeClearFilterButton();
	 initializeShowFilterButton();
	 
     $("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });

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
			} else if(graphService==="skews") {
				  getGraphDataWithFactor(graphService,graphName,removeEmpty,false);
			}
				else {
				    getGraphData(graphService,graphName,removeEmpty,false);
				}
			}
       }
}



