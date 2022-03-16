  var checkedItem = 0;
  var checkedItemid = [];
  var monthDate=new Date(); 
  monthDate.setMonth(monthDate.getMonth() - 3);
  monthDate.setHours(0,0,0,0);
  var startdate=new Date();
  var date=new Date();
  var mode="merge";
  var chartType1 = 'area';
  var chart;
  var chart1;
  var chart2;
  var startDateF1;
  var startDateF2;
  var minvalue=0;
  var maxvalue=0;
  var chartColor=0;
  var chartTransparency=0;
  var fromNavigation = false;
  var isdecimal = false;
  var dataFormatIsDecimal=false;
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
];
  var itemValue={
		  "#jqxCheckBoxUSA-30":{
			  "factor":"30yr",
			  "country":"1",
			  "yieldCurveCross":"yield",
			  "title":"USA 30-yr Benchmark YIELD"
			 },
"#jqxCheckBoxUSA-10":{
			  "factor":"10yr",
			  "country":"1",
			  "yieldCurveCross":"yield",
			   "title":"USA 10-yr Benchmark YIELD"
			 },
"#jqxCheckBoxUSA-5":{
			  "factor":"5yr",
			  "country":"1",
			  "yieldCurveCross":"yield",
			  "title":"USA 5-yr Benchmark YIELD"
			 },
"#jqxCheckBoxUSA-2":{
			  "factor":"2yr",
			  "country":"1",
			  "yieldCurveCross":"yield",
			  "title":"USA 2-yr Benchmark YIELD"
			 },
"#jqxCheckBoxGermany-30":{
			  "factor":"30yr",
			  "country":"3",
			  "yieldCurveCross":"yield",
			  "title":"Germany 30-yr Benchmark YIELD"
			 },
"#jqxCheckBoxGermany-10":{
			  "factor":"10yr",
			  "country":"3",
			  "yieldCurveCross":"yield",
			  "title":"Germany 10-yr Benchmark YIELD"
			 },
"#jqxCheckBoxGermany-5":{
			  "factor":"5yr",
			  "country":"3",
			  "yieldCurveCross":"yield",
			  "title":"Germany 5-yr Benchmark YIELD"
			 },
"#jqxCheckBoxGermany-2":{
			  "factor":"2yr",
			  "country":"3",
			  "yieldCurveCross":"yield",
			  "title":"Germany 2-yr Benchmark YIELD"
			 },
"#jqxCheckBoxFrance-30":{
			  "factor":"30yr",
			  "country":"2",
			  "yieldCurveCross":"yield",
			  "title":"France 30-yr Benchmark YIELD"
			 },
"#jqxCheckBoxFrance-10":{
			  "factor":"10yr",
			  "country":"2",
			  "yieldCurveCross":"yield",
			  "title":"France 10-yr Benchmark YIELD"
			 },
"#jqxCheckBoxFrance-5":{
			  "factor":"5yr",
			  "country":"2",
			  "yieldCurveCross":"yield",
			  "title":"France 5-yr Benchmark YIELD"
			  
			 },
"#jqxCheckBoxFrance-2":{
			  "factor":"2yr",
			  "country":"2",
			  "yieldCurveCross":"yield",
			  "title":"France 2-yr Benchmark YIELD"
			 },	
"#jqxCheckBoxUk-30":{
			  "factor":"30yr",
			  "country":"4",
			  "yieldCurveCross":"yield",
			  "title":"Uk 30-yr Benchmark YIELD"
			 },
"#jqxCheckBoxUk-10":{
			  "factor":"10yr",
			  "country":"4",
			  "yieldCurveCross":"yield",
			  "title":"Uk 10-yr Benchmark YIELD"
			 },
"#jqxCheckBoxUk-5":{
			  "factor":"5yr",
			  "country":"4",
			  "yieldCurveCross":"yield",
			  "title":"Uk 5-yr Benchmark YIELD"
			 },
"#jqxCheckBoxUk-2":{
			  "factor":"2yr",
			  "country":"4",
			  "yieldCurveCross":"yield",
			  "title":"Uk 2-yr Benchmark YIELD"
			 },	
"#jqxCheckBoxItaly-30":{
			  "factor":"30yr",
			  "country":"5",
			  "yieldCurveCross":"yield",
			  "title":"Italy 30-yr Benchmark YIELD"
			 },
"#jqxCheckBoxItaly-10":{
			  "factor":"10yr",
			  "country":"5",
			  "yieldCurveCross":"yield",
			  "title":"Italy 10-yr Benchmark YIELD"
			 },
"#jqxCheckBoxItaly-5":{
			  "factor":"5yr",
			  "country":"5",
			  "yieldCurveCross":"yield",
			  "title":"Italy 5-yr Benchmark YIELD"
			 },
"#jqxCheckBoxItaly-2":{
			  "factor":"2yr",
			  "country":"5",
			  "yieldCurveCross":"yield",
			  "title":"Italy 2-yr Benchmark YIELD"
			 },		
"#jqxCheckBoxSpain-30":{
			  "factor":"30yr",
			  "country":"6",
			  "yieldCurveCross":"yield",
			  "title":"Spain 30-yr Benchmark YIELD"
			 },
"#jqxCheckBoxSpain-10":{
			  "factor":"10yr",
			  "country":"6",
			  "yieldCurveCross":"yield",
			  "title":"Spain 10-yr Benchmark YIELD"
			 },
"#jqxCheckBoxSpain-5":{
			  "factor":"5yr",
			  "country":"6",
			  "yieldCurveCross":"yield",
			  "title":"Spain 5-yr Benchmark YIELD"
			 },
"#jqxCheckBoxSpain-2":{
			  "factor":"2yr",
			  "country":"6",
			  "yieldCurveCross":"yield",
			  "title":"Spain 2-yr Benchmark YIELD"
			 },	
 "#jqxCheckBoxUSA-10over30":{
			  "factor":"10/30",
			  "country":"1",
			  "yieldCurveCross":"curve",
			  "title":"USA 10's/30's yield CURVE"
			 },
"#jqxCheckBoxUSA-5over30":{
			  "factor":"5/30",
			  "country":"1",
			  "yieldCurveCross":"curve",
			  "title":"USA 5's/30's yield CURVE"
			 },
"#jqxCheckBoxUSA-5over10":{
			  "factor":"5/10",
			  "country":"1",
			  "yieldCurveCross":"curve",
			  "title":"USA 5's/10's yield CURVE"
			 },
"#jqxCheckBoxUSA-2over10":{
			  "factor":"2/10",
			  "country":"1",
			  "yieldCurveCross":"curve",
			  "title":"USA 2's/10's yield CURVE"
			 },
"#jqxCheckBoxUSA-2over5":{
			  "factor":"2/5",
			  "country":"1",
			  "yieldCurveCross":"curve",
			  "title":"USA 2's/5's yield CURVE"
			 },
"#jqxCheckBoxGermany-10over30":{
			  "factor":"10/30",
			  "country":"2",
			  "yieldCurveCross":"curve",
			  "title":"Germany 10's/30's yield CURVE"
			 },
"#jqxCheckBoxGermany-5over30":{
			  "factor":"5/30",
			  "country":"2",
			  "yieldCurveCross":"curve",
			  "title":"Germany 5's/30's yield CURVE"
			 },
"#jqxCheckBoxGermany-5over10":{
			  "factor":"5/10",
			  "country":"2",
			  "yieldCurveCross":"curve",
			  "title":"Germany 5's/10's yield CURVE"
			 },
"#jqxCheckBoxGermany-2over10":{
			  "factor":"2/10",
			  "country":"2",
			  "yieldCurveCross":"curve",
			  "title":"Germany 2's/10's yield CURVE"
			 },
"#jqxCheckBoxGermany-2over5":{
			  "factor":"2/5",
			  "country":"2",
			  "yieldCurveCross":"curve",
			  "title":"Germany 2's/5's yield CURVE"
			 },
"#jqxCheckBoxFrance-10over30":{
			  "factor":"10/30",
			  "country":"3",
			  "yieldCurveCross":"curve",
			  "title":"France 10's/30's yield CURVE"
			 },
"#jqxCheckBoxFrance-5over30":{
			  "factor":"5/30",
			  "country":"3",
			  "yieldCurveCross":"curve",
			  "title":"France 5's/30's yield CURVE"
			 },
"#jqxCheckBoxFrance-5over10":{
			  "factor":"5/0",
			  "country":"3",
			  "yieldCurveCross":"curve",
			  "title":"France 5's/10's yield CURVE"
			 },
"#jqxCheckBoxFrance-2over10":{
			  "factor":"2/10",
			  "country":"3",
			  "yieldCurveCross":"curve",
			  "title":"France 2's/10's yield CURVE"
			 },
"#jqxCheckBoxFrance-2over5":{
			  "factor":"2/5",
			  "country":"3",
			  "yieldCurveCross":"curve",
			  "title":"France 2's/5's yield CURVE"
			 },	
"#jqxCheckBoxUk-10over30":{
			  "factor":"10/30",
			  "country":"4",
			  "yieldCurveCross":"curve",
			  "title":"Uk 10's/30's yield CURVE"
			 },
"#jqxCheckBoxUk-5over30":{
			  "factor":"5/30",
			  "country":"4",
			  "yieldCurveCross":"curve",
			  "title":"Uk 5's/30's yield CURVE"
			 },
"#jqxCheckBoxUk-5over10":{
			  "factor":"5/10",
			  "country":"4",
			  "yieldCurveCross":"curve",
			  "title":"Uk 5's/10's yield CURVE"
			 },
"#jqxCheckBoxUk-2over10":{
			  "factor":"2/10",
			  "country":"4",
			  "yieldCurveCross":"curve",
			  "title":"Uk 2's/10's yield CURVE"
			 },
"#jqxCheckBoxUk-2over5":{
			  "factor":"2/5",
			  "country":"4",
			  "yieldCurveCross":"curve",
			  "title":"Uk 2's/5's yield CURVE"
			 },	
"#jqxCheckBoxItaly-10over30":{
			  "factor":"10/30",
			  "country":"5",
			  "yieldCurveCross":"curve",
			  "title":"Italy 10's/30's yield CURVE"
			 },
"#jqxCheckBoxItaly-5over30":{
			  "factor":"5/30",
			  "country":"5",
			  "yieldCurveCross":"curve",
			  "title":"Italy 5's/30's yield CURVE"
			 },
"#jqxCheckBoxItaly-5over10":{
			  "factor":"5/10",
			  "country":"5",
			  "yieldCurveCross":"curve",
			  "title":"Italy 5's/10's yield CURVE"
			 },
"#jqxCheckBoxItaly-2over10":{
			  "factor":"2/10",
			  "country":"5",
			  "yieldCurveCross":"curve",
			  "title":"Italy 2's/10's yield CURVE"
			 },
"#jqxCheckBoxItaly-2over5":{
			  "factor":"2/5",
			  "country":"5",
			  "yieldCurveCross":"curve",
			  "title":"Italy 2's/5's yield CURVE"
			 },		
"#jqxCheckBoxSpain-10over30":{
			  "factor":"10/30",
			  "country":"6",
			  "yieldCurveCross":"curve",
			  "title":"Spain 10's/30's yield CURVE"
			 },
"#jqxCheckBoxSpain-5over30":{
			  "factor":"5/30",
			  "country":"6",
			  "yieldCurveCross":"curve",
			  "title":"Spain 5's/30's yield CURVE"
			 },					 
"#jqxCheckBoxSpain-5over10":{
			  "factor":"5/10",
			  "country":"6",
			  "yieldCurveCross":"curve",
			  "title":"Spain 5's/110's yield CURVE"
			 },
"#jqxCheckBoxSpain-2over10":{
			  "factor":"2/10",
			  "country":"6",
			  "yieldCurveCross":"curve",
			  "title":"Spain 2's/10's yield CURVE"
			 },
"#jqxCheckBoxSpain-2over5":{
			  "factor":"2/5",
			  "country":"6",
			  "yieldCurveCross":"curve",
			  "title":"Spain 2's/5's yield CURVE"
			 },					
"#jqxCheckBoxfrc-ger-30":{
			  "factor":"30",
			  "country":"1",
			  "yieldCurveCross":"cross",
			  "title":"FRA-GER 30-yr yield CROSS"
			 },
"#jqxCheckBoxfrc-ger-10":{
			  "factor":"10",
			  "country":"1",
			  "yieldCurveCross":"cross",
			  "title":"FRA-GER 10-yr yield CROSS"
			 },
"#jqxCheckBoxfrc-ger-5":{
			  "factor":"5",
			  "country":"1",
			  "yieldCurveCross":"cross",
			  "title":"FRA-GER 5-yr yield CROSS"
			 },
"#jqxCheckBoxfrc-ger-2":{
			  "factor":"2",
			  "country":"1",
			  "yieldCurveCross":"cross",
			  "title":"FRA-GER 2-yr yield CROSS"
			 },
"#jqxCheckBoxita-ger-30":{
			  "factor":"30",
			  "country":"2",
			  "yieldCurveCross":"cross",
			  "title":"ITA-GER 30-yr yield CROSS"
			 },
"#jqxCheckBoxita-ger-10":{
			  "factor":"10",
			  "country":"2",
			  "yieldCurveCross":"cross",
			  "title":"ITA-GER 10-yr yield CROSS"
			 },
"#jqxCheckBoxita-ger-5":{
			  "factor":"5",
			  "country":"2",
			  "yieldCurveCross":"cross",
			  "title":"ITA-GER 5-yr yield CROSS"
			 },
"#jqxCheckBoxita-ger-2":{
			  "factor":"2",
			  "country":"2",
			  "yieldCurveCross":"cross",
			  "title":"ITA-GER 2-yr yield CROSS"
			 },
"#jqxCheckBoxspn-ger-30":{
			  "factor":"30",
			  "country":"3",
			  "yieldCurveCross":"cross",
			  "title":"SPN-GER 30-yr yield CROSS"
			 },
"#jqxCheckBoxspn-ger-10":{
			  "factor":"10",
			  "country":"3",
			  "yieldCurveCross":"cross",
			  "title":"SPN-GER 10-yr yield CROSS"
			 },
"#jqxCheckBoxspn-ger-5":{
			  "factor":"5",
			  "country":"3",
			  "yieldCurveCross":"cross",
			  "title":"SPN-GER 5-yr yield CROSS"
			 },
"#jqxCheckBoxspn-ger-2":{
			  "factor":"2",
			  "country":"3",
			  "yieldCurveCross":"cross",
			  "title":"SPN-GER 2-yr yield CROSS"
			 },	
"#jqxCheckBoxuk-ger-30":{
			  "factor":"30",
			  "country":"4",
			  "yieldCurveCross":"cross",
			  "title":"UK-GER 30-yr yield CROSS"
			 },
"#jqxCheckBoxuk-ger-10":{
			  "factor":"10",
			  "country":"4",
			  "yieldCurveCross":"cross",
			  "title":"UK-GER 10-yr yield CROSS"
			 },
"#jqxCheckBoxuk-ger-5":{
			  "factor":"5",
			  "country":"4",
			  "yieldCurveCross":"cross",
			  "title":"UK-GER 5-yr yield CROSS"
			 },
"#jqxCheckBoxuk-ger-2":{
			  "factor":"2",
			  "country":"4",
			  "yieldCurveCross":"cross",
			  "title":"UK-GER 2-yr yield CROSS"
			 },	
"#jqxCheckBoxusa-ger-30":{
			  "factor":"30",
			  "country":"5",
			  "yieldCurveCross":"cross",
			  "title":"USA-GER 30-yr yield CROSS"
			 },
"#jqxCheckBoxusa-ger-10":{
			  "factor":"10",
			  "country":"5",
			  "yieldCurveCross":"cross",
			  "title":"USA-GER 10-yr yield CROSS"
			 },
"#jqxCheckBoxusa-ger-5":{
			  "factor":"5",
			  "country":"5",
			  "yieldCurveCross":"cross",
			  "title":"USA-GER 5-yr yield CROSS"
			 },
"#jqxCheckBoxusa-ger-2":{
			  "factor":"2",
			  "country":"5",
			  "yieldCurveCross":"cross",
			  "title":"USA-GER 2-yr yield CROSS"
			 },		
"#jqxCheckBoxusa-uk-30":{
			  "factor":"30",
			  "country":"6",
			  "yieldCurveCross":"cross",
			  "title":"USA-UK 30-yr yield CROSS"
			 },
"#jqxCheckBoxusa-uk-10":{
			  "factor":"10",
			  "country":"6",
			  "yieldCurveCross":"cross",
			  "title":"USA-UK 10-yr yield CROSS"
			 },
"#jqxCheckBoxusa-uk-5":{
			  "factor":"5",
			  "country":"6",
			  "yieldCurveCross":"cross",
			  "title":"USA-UK 5-yr yield CROSS"
			 },
"#jqxCheckBoxusa-uk-2":{
			  "factor":"2",
			  "country":"6",
			  "yieldCurveCross":"cross",
			  "title":"USA-UK 2-yr yield CROSS"
			 },	
"#jqxCheckBoxita-frc-30":{
			  "factor":"30",
			  "country":"7",
			  "yieldCurveCross":"cross",
			  "title":"ITA-FRA 30-yr yield CROSS"
			 },
"#jqxCheckBoxita-frc-10":{
			  "factor":"10",
			  "country":"7",
			  "yieldCurveCross":"cross",
			  "title":"ITA-FRA 10-yr yield CROSS"
			 },
"#jqxCheckBoxita-frc-5":{
			  "factor":"5",
			  "country":"7",
			  "yieldCurveCross":"cross",
			  "title":"ITA-FRA 5-yr yield CROSS"
			 },
"#jqxCheckBoxita-frc-2":{
			  "factor":"2",
			  "country":"7",
			  "yieldCurveCross":"cross",
			  "title":"ITA-FRA 2-yr yield CROSS"
			 },	
"#jqxCheckBoxita-spn-30":{
			  "factor":"30",
			  "country":"8",
			  "yieldCurveCross":"cross",
			  "title":"ITA-SPN 30-yr yield CROSS"
			 },
"#jqxCheckBoxita-spn-10":{
			  "factor":"10",
			  "country":"8",
			  "yieldCurveCross":"cross",
			  "title":"ITA-SPN 10-yr yield CROSS"
			 },
"#jqxCheckBoxita-spn-5":{
			  "factor":"5",
			  "country":"8",
			  "yieldCurveCross":"cross",
			  "title":"ITA-SPN 5-yr yield CROSS"
			 },
"#jqxCheckBoxita-spn-2":{
			  "factor":"2",
			  "country":"8",
			  "yieldCurveCross":"cross",
			  "title":"ITA-SPN 2-yr yield CROSS"
			 }					 
};
  var fromHistory=false;
  var historyDataParam;
  var T1;
  var T2;
  var chartType1='line';
  var chartType2='line'; 
  var yaxisformat=3;
  var dataFormat=3;
  $(window).on('load', function(){
	  $('#overlay').fadeOut();
	  $('#nav-tabContent').show();
  });
  $(document).ready(function () {
	  $("#viewall").jqxButton({  theme:'dark', width: 110, height: 35 ,template: "primary" });
	  $("#viewall").css("display","block");
	  $("#viewall").click(function () {
		popupWindow('/bourse/allnews', 'Liberty Options - View All News', window, 1300, 600);
	  });
	  $("div.btn-group-vertical button.btn").click(function(){
		    $("div.btn-group-vertical").find(".active").removeClass("active");
		    $(this).addClass("active");
		  });  
	   $.ajax({
	        contentType: "application/json",
	        url: "/bourse/findgraphhistorybyscreenname/any2",
	        dataType: 'json',
	        async:true,
	        cache: false,
	        timeout: 600000,
	        success: function (data) {
	        	
	        	     checkedItemId=JSON.parse(data.parameter);
	        	     for(j=0; j<checkedItemId.length; j++)
	    			   {
	    		    	$(checkedItemId[j]).jqxCheckBox({checked:true});
	    		       } 
	        	     checkedItem=checkedItemId.length;
	        		 $("#collapseFilter").removeClass('show');
	     	    	 $('#grid-content').css('display', 'block');
	        		 drawGraph();
	        		
},
	        error: function (e) {
	        	
					  console.log("ERROR : ", e);

	        }
	    });
	   
	  $("#button-yearForward").prop('disabled', true); 
	  $("#button-monthForward").prop('disabled', true); 

	 for(i=0; i<allitems.length; i++)
	   {
    	$(allitems[i]).jqxCheckBox({ theme:'dark', width: 120, height: 25});
       }
	  
	  $("#Clearfilter").jqxButton({ theme: 'dark',height:30,width:74  });
      $("#show").jqxButton({ theme: 'dark',height:30,width:74 });
      
      $("#Clearfilter").click(function () {
    	  
    	  $("#jqxCheckBoxUSA-30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxUSA-10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxUSA-5").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxUSA-2").jqxCheckBox({checked: false });
    	  
    	  $("#jqxCheckBoxGermany-30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxGermany-10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxGermany-5").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxGermany-2").jqxCheckBox({checked: false });
    	  
    	  $("#jqxCheckBoxFrance-30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxFrance-10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxFrance-5").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxFrance-2").jqxCheckBox({checked: false });
    	  
    	  $("#jqxCheckBoxUk-30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxUk-10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxUk-5").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxUk-2").jqxCheckBox({checked: false });
    	  
    	  $("#jqxCheckBoxItaly-30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxItaly-10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxItaly-5").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxItaly-2").jqxCheckBox({checked: false });
    	  
    	  $("#jqxCheckBoxSpain-30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxSpain-10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxSpain-5").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxSpain-2").jqxCheckBox({checked: false });
    	  
    	
    	  $("#jqxCheckBoxUSA-10over30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxUSA-5over30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxUSA-5over10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxUSA-2over10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxUSA-2over5").jqxCheckBox({checked: false });
    	  
    	  $("#jqxCheckBoxGermany-10over30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxGermany-5over30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxGermany-5over10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxGermany-2over10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxGermany-2over5").jqxCheckBox({checked: false });
    	  
    	  $("#jqxCheckBoxFrance-10over30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxFrance-5over30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxFrance-5over10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxFrance-2over10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxFrance-2over5").jqxCheckBox({checked: false });
    	  
    	  $("#jqxCheckBoxUk-10over30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxUk-5over30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxUk-5over10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxUk-2over10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxUk-2over5").jqxCheckBox({checked: false });
    	  
    	  $("#jqxCheckBoxItaly-10over30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxItaly-5over30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxItaly-5over10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxItaly-2over10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxItaly-2over5").jqxCheckBox({checked: false });
    	  
    	  $("#jqxCheckBoxSpain-10over30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxSpain-5over30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxSpain-5over10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxSpain-2over10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxSpain-2over5").jqxCheckBox({checked: false });
    	  
    	  
    	  $("#jqxCheckBoxfrc-ger-30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxfrc-ger-10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxfrc-ger-5").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxfrc-ger-2").jqxCheckBox({checked: false });
    	  
    	  $("#jqxCheckBoxita-ger-30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxita-ger-10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxita-ger-5").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxita-ger-2").jqxCheckBox({checked: false });
    	  
    	  $("#jqxCheckBoxspn-ger-30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxspn-ger-10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxspn-ger-5").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxspn-ger-2").jqxCheckBox({checked: false });
    	  
    	  $("#jqxCheckBoxuk-ger-30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxuk-ger-10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxuk-ger-5").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxuk-ger-2").jqxCheckBox({checked: false });
    	  
    	  $("#jqxCheckBoxusa-ger-30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxusa-ger-10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxusa-ger-5").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxusa-ger-2").jqxCheckBox({checked: false });
    	  
    	  $("#jqxCheckBoxusa-uk-30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxusa-uk-10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxusa-uk-5").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxusa-uk-2").jqxCheckBox({checked: false });
    	  
    	  $("#jqxCheckBoxita-frc-30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxita-frc-10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxita-frc-5").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxita-frc-2").jqxCheckBox({checked: false });
    	  
    	  $("#jqxCheckBoxita-spn-30").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxita-spn-10").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxita-spn-5").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxita-spn-2").jqxCheckBox({checked: false });
    	  
    	  for(i=0; i<allitems.length; i++)
		   {
	    	$(allitems[i]).jqxCheckBox({disabled: false});
	       }
    	  checkedItem=0;
     	 
      });
	
     $("#show").click(function () {
    	  monthDate=new Date(); 
    	  monthDate.setMonth(monthDate.getMonth() - 3);
    	  monthDate.setHours(0,0,0,0);
    	  resetActiveChartType();
    	  resetActiveFontSize();
		  resetActiveChartColor();
    	  $("#button-monthBackward").prop('disabled', false);
		  $("#button-yearBackward").prop('disabled', false);
    	 fromNavigation=false;
    	if(checkedItem>0)
    	{
    		 $("#collapseFilter").removeClass('show');
	    	$('#grid-content').css('display', 'block');
	    	 drawGraph();
    	}
    	else 
    		{	
    		$('#alertFiltter-modal').modal('show');
   		    $("#collapseFilter").addClass('show');
    		}
      });
	  
     $('#jqxCheckBoxUSA-30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxUSA-30");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxUSA-30")
  			 delete checkedItemid[i];
  		   }
  	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
				 $(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
				    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		  }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 

     
     $('#jqxCheckBoxUSA-10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxUSA-10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxUSA-10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     
     $('#jqxCheckBoxUSA-5').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxUSA-5");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxUSA-5")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     
     $('#jqxCheckBoxUSA-2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxUSA-2");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxUSA-2")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     
     $('#jqxCheckBoxGermany-30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxGermany-30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxGermany-30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxGermany-10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxGermany-10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxGermany-10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxGermany-5').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxGermany-5");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxGermany-5")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxGermany-2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxGermany-2");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxGermany-2")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxFrance-30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxFrance-30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxFrance-30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxFrance-10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxFrance-10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxFrance-10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxFrance-5').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxFrance-5");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxFrance-5")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxFrance-2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxFrance-2");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxFrance-2")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     
     $('#jqxCheckBoxUk-30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxUk-30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxUk-30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxUk-10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxUk-10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxUk-10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxUk-5').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxUk-5");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxUk-5")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxUk-2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxUk-2");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxUk-2")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxItaly-30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxItaly-30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxItaly-30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxItaly-10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxItaly-10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxItaly-10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxItaly-5').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxItaly-5");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxItaly-5")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxItaly-2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxItaly-2");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxItaly-2")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxSpain-30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxSpain-30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxSpain-30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxSpain-10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxSpain-10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxSpain-10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxSpain-5').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxSpain-5");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxSpain-5")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxSpain-2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxSpain-2");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxSpain-2")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     
     $('#jqxCheckBoxUSA-10over30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxUSA-10over30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxUSA-10over30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxUSA-5over30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxUSA-5over30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxUSA-5over30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxUSA-5over10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxUSA-5over10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxUSA-5over10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxUSA-2over10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxUSA-2over10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxUSA-2over10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
	      
     $('#jqxCheckBoxUSA-2over5').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxUSA-2over5");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxUSA-2over5")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxGermany-10over30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxGermany-10over30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxGermany-10over30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxGermany-5over30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxGermany-5over30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxGermany-5over30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxGermany-5over10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxGermany-5over10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxGermany-5over10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxGermany-2over10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxGermany-2over10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxGermany-2over10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
	      
     $('#jqxCheckBoxGermany-2over5').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxGermany-2over5");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxGermany-2over5")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     
     $('#jqxCheckBoxFrance-10over30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxFrance-10over30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxFrance-10over30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxFrance-5over30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxFrance-5over30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxFrance-5over30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxFrance-5over10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxFrance-5over10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxFrance-5over10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxFrance-2over10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxFrance-2over10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxFrance-2over10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
	      
     $('#jqxCheckBoxFrance-2over5').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxFrance-2over5");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxFrance-2over5")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxUk-10over30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxUk-10over30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxUk-10over30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxUk-5over30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxUk-5over30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxUk-5over30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxUk-5over10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxUk-5over10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxUk-5over10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxUk-2over10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxUk-2over10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxUk-2over10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
	      
     $('#jqxCheckBoxUk-2over5').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxUk-2over5");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxUk-2over5")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxItaly-10over30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxItaly-10over30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxItaly-10over30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxItaly-5over30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxItaly-5over30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxItaly-5over30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxItaly-5over10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxItaly-5over10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxItaly-5over10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxItaly-2over10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxItaly-2over10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxItaly-2over10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
	      
     $('#jqxCheckBoxItaly-2over5').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxItaly-2over5");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxItaly-2over5")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     
     $('#jqxCheckBoxSpain-10over30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxSpain-10over30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxSpain-10over30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxSpain-5over30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxSpain-5over30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxSpain-5over30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxSpain-5over10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxSpain-5over10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxSpain-5over10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxSpain-2over10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxSpain-2over10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxSpain-2over10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
	      
     $('#jqxCheckBoxSpain-2over5').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxSpain-2over5");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxSpain-2over5")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxfrc-ger-30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxfrc-ger-30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxfrc-ger-30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxfrc-ger-10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxfrc-ger-10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxfrc-ger-10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxfrc-ger-5').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxfrc-ger-5");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxfrc-ger-5")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxfrc-ger-2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxfrc-ger-2");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxfrc-ger-2")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxita-ger-30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxita-ger-30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxita-ger-30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxita-ger-10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxita-ger-10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxita-ger-10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxita-ger-5').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxita-ger-5");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxita-ger-5")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxita-ger-2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxita-ger-2");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxita-ger-2")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     
     $('#jqxCheckBoxspn-ger-30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxspn-ger-30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxspn-ger-30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxspn-ger-10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxspn-ger-10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxspn-ger-10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxspn-ger-5').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxspn-ger-5");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxspn-ger-5")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxspn-ger-2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxspn-ger-2");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxspn-ger-2")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxuk-ger-30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxuk-ger-30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxuk-ger-30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxuk-ger-10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxuk-ger-10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxuk-ger-10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxuk-ger-5').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxuk-ger-5");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxuk-ger-5")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxuk-ger-2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxuk-ger-2");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxuk-ger-2")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     
     $('#jqxCheckBoxusa-ger-30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxusa-ger-30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxusa-ger-30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxusa-ger-10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxusa-ger-10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxusa-ger-10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxusa-ger-5').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxusa-ger-5");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxusa-ger-5")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxusa-ger-2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxusa-ger-2");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxusa-ger-2")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     
     $('#jqxCheckBoxusa-uk-30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxusa-uk-30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxusa-uk-30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxusa-uk-10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxusa-uk-10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxusa-uk-10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxusa-uk-5').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxusa-uk-5");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxusa-uk-5")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxusa-uk-2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxusa-uk-2");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxusa-uk-2")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxita-frc-30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxita-frc-30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxita-frc-30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxita-frc-10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxita-frc-10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxita-frc-10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxita-frc-5').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxita-frc-5");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxita-frc-5")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxita-frc-2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxita-frc-2");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxita-frc-2")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
	  
     
     $('#jqxCheckBoxita-spn-30').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxita-spn-30");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxita-spn-30")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxita-spn-10').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxita-spn-10");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxita-spn-10")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxita-spn-5').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxita-spn-5");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxita-spn-5")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxita-spn-2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxita-spn-2");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxita-spn-2")
					 delete checkedItemid[i];
				   }
	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		       }
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
	  
     
	  
     
  });
			
	function navigationGraph(condition){
		fromNavigation=true;
		const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
			  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
			];
				if(condition=="yearBackward")
				{ 
					expectedmonthdate = new Date(monthDate.getMonth()+"-"+monthDate.getDay()+"-"+(monthDate.getFullYear()-1));
					if (startDateF1!=null)
					 {if (expectedmonthdate<=startDateF1)
						{
							$("#button-yearBackward").prop('disabled', true);
							$('#startdatetext').empty();
							$('#startdatetext').append("No data available before "+monthNames[startDateF1.getMonth()]+" "+startDateF1.getFullYear())
							$('#alertStartDate-modal').modal('show');
						return;
						}
					 }
					else
						if (startDateF2!=null)
						{ 
							if (expectedmonthdate<=startDateF2)
						   {
								$("#button-yearBackward").prop('disabled', true);
								$('#startdatetext').empty();
								$('#startdatetext').append("No data available before "+monthNames[startDateF2.getMonth()]+" "+startDateF2.getFullYear())
								$('#alertStartDate-modal').modal('show');
							return;
							}
						}
				monthDate.setFullYear(monthDate.getFullYear() - 1);
				if(mode=="merge") 
				  drawGraph();
					else
						splitGraph();
				}else
					if(condition=="monthBackward")
				  {   
					
					    expectedmonthdate = new Date(monthDate.getMonth()+"-"+monthDate.getDay()+"-"+monthDate.getFullYear());
					    if (startDateF1!=null)
					     {
					    	if (expectedmonthdate<=startDateF1)
					        {
							$("#button-monthBackward").prop('disabled', true);
							$("#button-yearBackward").prop('disabled', true);
							$('#startdatetext').empty();
							$('#startdatetext').append("No data available before "+monthNames[startDateF1.getMonth()]+" "+startDateF1.getFullYear())
							$('#alertStartDate-modal').modal('show');
							return;
							}
					     }
					    else
							if (startDateF2!=null)
							{ 
								if (expectedmonthdate<=startDateF2)
							   {
									$("#button-monthBackward").prop('disabled', true);
									$("#button-yearBackward").prop('disabled', true);
									$('#startdatetext').empty();
									$('#startdatetext').append("No data available before "+monthNames[startDateF2.getMonth()]+" "+startDateF2.getFullYear())
									$('#alertStartDate-modal').modal('show');
								return;
								}
							}
				    monthDate.setMonth(monthDate.getMonth() - 1);
				    if(mode=="merge") 
						  drawGraph();
							else
								splitGraph();
					}
					else
						if(condition=="monthForward")
					  {   
						$("#button-monthBackward").prop('disabled', false);
					    monthDate.setMonth(monthDate.getMonth() + 1);
					    if(mode=="merge") 
							  drawGraph();
								else
									splitGraph();
						}
						else
							if(condition=="yearForward")
						  {   
							$("#button-yearBackward").prop('disabled', false);
							monthDate.setFullYear(monthDate.getFullYear() + 1);
							if(mode=="merge") 
								  drawGraph();
									else
										splitGraph();
							}

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
			}
			  function formatDate(date) {
				    var d = new Date(date),
				        month = '' + (d.getMonth() + 1),
				        day = '' + d.getDate(),
				        year = d.getFullYear();
			
				    if (month.length < 2) 
				        month = '0' + month;
				    if (day.length < 2) 
				        day = '0' + day;
			
				    return [year, month, day].join('-');
				}
			  function checkDateMonth(monthDate,date)
			  {    var d = new Date(monthDate);
				   d.setMonth(monthDate.getMonth() + 1);
				   
				   if(d<date)
					   return true;
				   else
					   return false;
			  }
			function checkDateYear(monthDate,date)
			  {    var d = new Date(monthDate);
				   d.setFullYear(monthDate.getFullYear() + 1);
				   
				   if(d<date)
					   return true;
				   else
					   return false;
			  }
			function splitGraph()
			{
				
				$(".chart-option").hide();
				mode="split";
				var title1;
				var title2;
  				var checkedItemValues = [];
				var fromdate = formatDate(monthDate);
				var todate = formatDate(date);
				var fontsize='12px'
				$("#mainChart").css("display","none");
				$("#split").css("display","none");
				$("#merge").css("display","inline-block");
				$("#SubChart1").html("");
				$("#SubChart2").html("");
				$("#SubChart1").css("display","block");
				$("#SubChart2").css("display","block");
			
				  $('#overlayChart1').show(); 
				
				 if(chart1!=null)
					   chart1.destroy();
				 if(chart2!=null)
					   chart2.destroy();
				 
				for(i=0; i<checkedItemid.length; i++)
		   		   {
		   	  		 if(checkedItemid[i]!=null)
		   	  		  checkedItemValues.push(checkedItemid[i]);
		   	       }
				 if(checkedItemValues.length>1)
				  { 
					title1=T1;
				    title2=T2;
				  }
				  else
					 title1=T1;
				  var options1 = {
   	  			          series: [],
   	  			          chart: {
		   	  			         toolbar: {
		   	  			        show: true,
		   	  			        offsetX: 0,
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
   	  			          height: 500,
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
   	  			         margin: 10,
  	    				        style: {
  	    				          fontWeight:  'bold',
  	    				          color:  '#263238'
  	    				          },
  	    				        },
						subtitle: {
							text: 'copyright LibVol.com',
							align: 'right',
							margin: 10,
							offsetX: -10,
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
					        		  rotate: -45,
					                  rotateAlways: true,
					                  minHeight:60,
					        		  style: {
							        	  fontSize: fontsize,
							        	 },
					        	  },
   	  			           type: 'category',
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
					        	 },
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
			        	  text: 'No data In this date range',
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

 			    	   
 			    	    chart1 = new ApexCharts(document.querySelector("#SubChart1"), options1);
 				     
		    	   dataParam = { 
   		        		"fromdate":fromdate,
   		        	    "todate":todate,
   		        	    "dailyOrWeekly":"d",
   		        	    "factor1":itemValue[checkedItemValues[0]].factor,
   		        	    "country1":itemValue[checkedItemValues[0]].country,
   		        	    "yieldCurveCross1": itemValue[checkedItemValues[0]].yieldCurveCross
   	     			   };
			  	       	  $.ajax({
			  	       	        type: "POST",
		      	    	        contentType:  "application/json; charset=utf-8",
		      	    	        url: "/bourse/getgraphdata",
		      	    	        data: JSON.stringify(dataParam),
		      	    	        dataType: 'json',
		      	    	        timeout: 600000,
		      	    	        success: function (response) {
		      	    	        
		      	    	    var dbchartType1=response[0].config.chartType;
	      	    	           chartType1 = getChartType(dbchartType1)[0];
	      	    	         var getFormatResult = getFormat(response[0].config.dataFormat); 
	      	    	         var getYAxisFormatResult = getFormat(response[0].config.yAxisFormat);
	      	    	         var getDataFormatResult = getFormat(response[0].config.dataFormat);
	      	    		    chartDbFontSize = response[0].config.chartSize;
	      	    		    fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0],chartDbFontSize);
  	    	          	  
	      	    	       chart1.updateOptions(getChartDailyOption(response[0].config.displayDescription,response[0].config.chartShowgrid,fontsize,response[0].config.chartshowMarkes));
		      	    
	      	    	
	      	    	     if (chartType1=='area')
   	    	        	{
   	    	    		if (response[0].config.chartColor=='#44546a')
   	    	    			chart1.updateOptions({
	      	    	    			colors: ['#222a35'],
			      			        fill: {
	      	    		                type: 'gradient',
	      	    		                gradient: {
	      	    					    gradientToColors: '#2e75b6',
	      	    					      shadeIntensity: 0,
	      	    					      type: "vertical",
	      	    					     inverseColors: false,
									      stops: [30, 90, 100],
									      opacityFrom: 1,
									      opacityTo: eval(response[0].config.chartTransparency),
	      	    		                }
	      	    		              },	
	      	    		            stroke: {
			     				      	 colors: ["#ffffff"],
		     				        },
	      	    	    		});
   	    	    		else 
   	    	    			chart1.updateOptions({
   	    	        		colors: [response[0].config.chartColor],
   	    	        		fill: {
	      	    	        		  type: 'gradient',
	      	    	        		  gradient: {
	      	    	        		    shade: 'dark',
	      	    	        		    type: "vertical",
	      	    	        		    shadeIntensity: 0.2,
	      	    	        		    opacityFrom: 1,
								        opacityTo: eval(response[0].config.chartTransparency),
	      	    	        		    inverseColors: false,
	      	    	        		  },}
   	    	        		, stroke: {
		     				      	 colors: ["#ffffff"],
	     				        },
   							});
   	    	        	} else 	
   	    	        		if (response[0].config.chartColor=='#44546a')
   	    	        		{
   	    	        			chart1.updateOptions({
      	    	    				colors: ['#2e75b6'],
			      				       fill: {
			      			            type:'solid',
			      			            opacity: [1,1],
			      			          }, 
			      			        stroke: {
		      	    			      	 colors: ['#2e75b6'],
		      	    		        },
		      	    	         markers: {
		      	    				   colors: ['#2e75b6'],
		      	    				   strokeColors:['#2e75b6']
		      	    			     }
	      	    	    		});
   	    	        		}
   	    	        	else 
   	    	        		chart1.updateOptions({
  	    	    				colors: [response[0].config.chartColor],
		      				       fill: {
		      			            type:'solid',
		      			            opacity: [1,1],
		      			          }, 
		      			        stroke: {
	      	    			      	 colors: [response[0].config.chartColor],
	      	    		        },
	      	    	         markers: {
	      	    				   colors: [response[0].config.chartColor],
	      	    				   strokeColors:[response[0].config.chartColor]
	      	    			     }
      	    	    		});
	      	    	    min = Math.min.apply(null, response[0].graphResponseDTOLst.map(function(item) {
	      	    	          return item.y;
	      	    	        })),
	      	    	        max = Math.max.apply(null, response[0].graphResponseDTOLst.map(function(item) {
	      	    	          return item.y;
	      	    	        }));
	      	    	     minvalue = parseFloat((Math.floor(min*20)/20).toFixed(2));
	      	    	     maxvalue = parseFloat((Math.floor(max*20)/20).toFixed(2));
	      	    	    	chart1.updateOptions({
	      	    	    	  extra:{
									isDecimal: isdecimal,
									yAxisFormat:yaxisformat,
								},
	     				       yaxis: {
		     				    	  labels: {
		     				    		     minWidth: 75,maxWidth: 75,
			 				        		 style: {
			 						        	  fontSize: fontsize,
			 						        	 }
			 				        	  },
	     				          tickAmount: 6,
	     				    	  min:Math.sign(minvalue)==-1 ? -Math.abs(minvalue)-0.1 : Math.abs(minvalue)-0.1,
	     				    	  max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+0.1 : Math.abs(maxvalue)+0.1,
	     				    			  axisBorder: {
	     					                  width: 3,
	     					                  show: true,
	     					                  color: '#ffffff',
	     					                  offsetX: 0,
	     					                  offsetY: 0
	     					              },
	     				    	  },
  						  tooltip: {
  							  x: {
  						          show: false,
  						      },
  							  y: {
  								  formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
  									  if (getFormatResult[1])
							  				  return  value.toFixed(getFormatResult[0]);
							  				else 
							  				  return  value.toFixed(getFormatResult[0]) + "%";
  								    },
  								    title: {
  							              formatter: (seriesName) => '',
  							          },
  					      },
  						}
    	    	    		});
		      	    	   chart1.updateSeries([{
							          name: itemValue[checkedItemValues[0]].title,
							          type: chartType1,
							          data: response[0].graphResponseDTOLst
							        }]);
							    
		      	    	 $('#overlayChart1').hide();  
		      					    
		      	   },
		      	    	        error: function (e) {
		      	    	        	
		      						  console.log("ERROR : ", e);
		      	
		      	    	        }
		      	    	    });	
			  	        chart1.render();
			      
			  	      var options2 = {
	   	  			          series: [],
	   	  			          chart: {
			   	  			         toolbar: {
			   	  			        show: true,
			   	  			        offsetX: 0,
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
	   	  			          height: 500,
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
	   	  			         margin: 10,
	  	    				        style: {
	  	    				          fontWeight:  'bold',
	  	    				          color:  '#263238'
	  	    				          },
	  	    				        },
							subtitle: {
								text: 'copyright LibVol.com',
								align: 'right',
								margin: 10,
								offsetX: -10,
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
						        		 // rotate: -45,
						                  rotateAlways: true,
						                  minHeight:60,
						        		  style: {
								        	  fontSize: fontsize,
								        	 },
						        	  },
	   	  			           type: 'category',
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
				        	  text: 'No data In this date range',
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

	 			    	   
	      	    	   	if (checkedItem==2) {
	      	    	   	  $('#overlayChart2').show(); 
	     			    	    chart2 = new ApexCharts(document.querySelector("#SubChart2"), options2);
	     					      
	     			    	 
			    	    dataParam = { 
		   		        		"fromdate":fromdate,
		   		        	    "todate":todate,
		   		        	    "dailyOrWeekly":"d",
		   		        	    "factor1":itemValue[checkedItemValues[1]].factor,
		   		        	    "country1":itemValue[checkedItemValues[1]].country,
		   		        	    "yieldCurveCross1": itemValue[checkedItemValues[1]].yieldCurveCross
		   	     			   };
			    	          $.ajax({
				  	       	        type: "POST",
			      	    	        contentType:  "application/json; charset=utf-8",
			      	    	        url: "/bourse/getgraphdata",
			      	    	        data: JSON.stringify(dataParam),
			      	    	        dataType: 'json',
			      	    	        timeout: 600000,
			      	    	        success: function (response) {
			      	    	         var getFormatResult = getFormat(response[0].config.dataFormat);
			      	    	          var dbchartType2=response[0].config.chartType;
			      	    	           chartType2 = getChartType(dbchartType2)[0];
			      	    	         var getYAxisFormatResult = getFormat(response[0].config.yAxisFormat);
			      	    	         var getDataFormatResult = getFormat(response[0].config.dataFormat);
			      	    	         
			      	    		    chartDbFontSize = response[0].config.chartSize;
			      	    		    fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0],chartDbFontSize);
		    	    	          	
			      	    	       chart2.updateOptions(getChartDailyOption(response[0].config.displayDescription,response[0].config.chartShowgrid,fontsize,response[0].config.chartshowMarkes));
			   		      	    
			   	      	    	
				      	    	     if (chartType2=='area')
			   	    	        	{
			   	    	    		if (response[0].config.chartColor=='#44546a')
			   	    	    			chart2.updateOptions({
				      	    	    			colors: ['#222a35'],
						      			        fill: {
				      	    		                type: 'gradient',
				      	    		                gradient: {
				      	    					    gradientToColors: '#2e75b6',
				      	    					      shadeIntensity: 0,
				      	    					      type: "vertical",
				      	    					     inverseColors: false,
												      stops: [30, 90, 100],
												      opacityFrom: 1,
												      opacityTo: eval(response[0].config.chartTransparency),
				      	    		                }
				      	    		              },	
				      	    		            stroke: {
						     				      	 colors: ["#ffffff"],
					     				        },
				      	    	    		});
			   	    	    		else 
			   	    	    			chart2.updateOptions({
			   	    	        		colors: [response[0].config.chartColor],
			   	    	        		fill: {
				      	    	        		  type: 'gradient',
				      	    	        		  gradient: {
				      	    	        		    shade: 'dark',
				      	    	        		    type: "vertical",
				      	    	        		    shadeIntensity: 0.2,
				      	    	        		    opacityFrom: 1,
											        opacityTo: eval(response[0].config.chartTransparency),
				      	    	        		    inverseColors: false,
				      	    	        		  },}
			   	    	        		, stroke: {
					     				      	 colors: ["#ffffff"],
				     				        },
			   							});
			   	    	        	} else 	
			   	    	        		if (response[0].config.chartColor=='#44546a')
			   	    	        		{
			   	    	        			chart2.updateOptions({
			      	    	    				colors: ['#2e75b6'],
						      				       fill: {
						      			            type:'solid',
						      			            opacity: [1,1],
						      			          }, 
						      			        stroke: {
					      	    			      	 colors: ['#2e75b6'],
					      	    		        },
					      	    	         markers: {
					      	    				   colors: ['#2e75b6'],
					      	    				   strokeColors:['#2e75b6']
					      	    			     }
				      	    	    		});
			   	    	        		}
			   	    	        	else 
			   	    	        		chart2.updateOptions({
		      	    	    				colors: [response[0].config.chartColor],
					      				       fill: {
					      			            type:'solid',
					      			            opacity: [1,1],
					      			          }, 
					      			        stroke: {
				      	    			      	 colors: [response[0].config.chartColor],
				      	    		        },
				      	    	         markers: {
				      	    				   colors: [response[0].config.chartColor],
				      	    				   strokeColors:[response[0].config.chartColor]
				      	    			     }
			      	    	    		});
				      	    	    min = Math.min.apply(null, response[0].graphResponseDTOLst.map(function(item) {
				      	    	          return item.y;
				      	    	        })),
				      	    	        max = Math.max.apply(null, response[0].graphResponseDTOLst.map(function(item) {
				      	    	          return item.y;
				      	    	        }));
				      	    	     minvalue = parseFloat((Math.floor(min*20)/20).toFixed(2));
				      	    	     maxvalue = parseFloat((Math.floor(max*20)/20).toFixed(2));
				      	    	    	chart2.updateOptions({
				      	    	    	  extra:{
												isDecimal: isdecimal,
												yAxisFormat:yaxisformat,
											},
				     				       yaxis: {
					     				    	  labels: {
					     				    		     minWidth: 75,maxWidth: 75,
						 				        		 style: {
						 						        	  fontSize: fontsize,
						 						        	 }
						 				        	  },
				     				          tickAmount: 6,
				     				    	  min:Math.sign(minvalue)==-1 ? -Math.abs(minvalue)-0.1 : Math.abs(minvalue)-0.1,
				     				    	  max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+0.1 : Math.abs(maxvalue)+0.1,
				     				    			  axisBorder: {
				     					                  width: 3,
				     					                  show: true,
				     					                  color: '#ffffff',
				     					                  offsetX: 0,
				     					                  offsetY: 0
				     					              },
				     				    	  },
			    						  tooltip: {
			    							  x: {
			    						          show: false,
			    						      },
			    							  y: {
			    								  formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
			    									  if (getFormatResult[1])
										  				  return  value.toFixed(getFormatResult[0]);
										  				else 
										  				  return  value.toFixed(getFormatResult[0]) + "%";
			    								    },
			    								    title: {
			    							              formatter: (seriesName) => '',
			    							          },
			    					      },
			    						}
			      	    	    		});
			      	    	   chart2.updateSeries([{
								          name: itemValue[checkedItemValues[1]].title,
								          type: chartType2,
								          data: response[0].graphResponseDTOLst
								        }])
								        $('#overlayChart2').hide();
			      	   },
			      	    	        error: function (e) {
			      	    	        	
			      						  console.log("ERROR : ", e);
			      	
			      	    	        }
			      	    	    });	
				  	 
				  	        chart2.render();
	      	    	   	}
				        $("#dateFrom-mainChart").val(fromdate);
	    	            $("#dateTo-mainChart").val(todate);
			}
			function updateGraphFont(fontsize,minvalue,maxvalue){
				if(chart1!=null)
					chart1.updateOptions({
						xaxis: {
				        	labels: {
				        		 style: {
						        	  fontSize: fontsize,
						        	 }
				        	  },
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
					          yaxis: [
								     {  tickAmount: 6,
			 				    	    min:Math.sign(minvalue)==-1 ? -Math.abs(minvalue)-0.1 : Math.abs(minvalue)-0.1,
			 				    	    max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)-0.1 : Math.abs(maxvalue)+0.1,
							     	    labels: {
							        		 minWidth: 75,maxWidth: 75,
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
							        }]
						})
				 if(chart2!=null)
					   chart2.updateOptions({
							xaxis: {
					        	labels: {
					        		 style: {
							        	  fontSize: fontsize,
							        	 }
					        	  },
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
						          yaxis: [
									     {  tickAmount: 6,
				 				    	    min:Math.sign(minvalue)==-1 ? -Math.abs(minvalue)-0.1 : Math.abs(minvalue)-0.1,
				 				    	    max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+0.1 : Math.abs(maxvalue)+0.1,
								     	    labels: {
								        		 minWidth: 75,maxWidth: 75,
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
								        }]
							})
				if(chart!=null)
				chart.updateOptions({
					xaxis: {
			        	labels: {
			        		 style: {
					        	  fontSize: fontsize,
					        	 }
			        	  },
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
				          yaxis: [
							     {  tickAmount: 6,
		 				    	    min:Math.sign(minvalue)==-1 ? -Math.abs(minvalue)-0.1 : Math.abs(minvalue)-0.1,
		 				    	    max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+0.1 : Math.abs(maxvalue)+0.1,
						     	    labels: {
						        		 minWidth: 75,maxWidth: 75,
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
						        }]
					})
			}
			function drawGraph(){
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
			        			
		    	  if (checkedItem==2) {
		    	  for(i=0; i<checkedItemid.length; i++)
				   		   {
				   	  		 if(checkedItemid[i]!=null)
				   	  		  checkedItemValues.push(checkedItemid[i]);
				   	       }
				        dataParam = { 
		 		        		"fromdate":fromdate,
		 		        	    "todate":todate,
		 		        	    "dailyOrWeekly":"d",
		 		        	    "factor1":itemValue[checkedItemValues[0]].factor,
		 		        	    "country1":itemValue[checkedItemValues[0]].country,
		 		        	    "yieldCurveCross1": itemValue[checkedItemValues[0]].yieldCurveCross,
		 		        	    "factor2":itemValue[checkedItemValues[1]].factor,
		 		        	    "country2":itemValue[checkedItemValues[1]].country,
		 		        	    "yieldCurveCross2": itemValue[checkedItemValues[1]].yieldCurveCross
		 	     			   };
				         disableChartType(true);
						 disableChartColor(true);
					     disableChartColorTransparency(true);

						 if(checkedItemValues.length>1)
					        	title=itemValue[checkedItemValues[0]].title +" vs "+ itemValue[checkedItemValues[1]].title 
					        		else 
					        			title=itemValue[checkedItemValues[0]].title
					        			  var options = {
					     	  			          series: [],
					     	  			          chart: {
					  		   	  			         toolbar: {
					  		   	  			        show: true,
					  		   	  			        offsetX: 0,
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
					     	  			          height: 500,
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
					     	  			         margin: 10,
					    	    				        style: {
					    	    				          fontWeight:  'bold',
					    	    				          color:  '#263238'
					    	    				          },
					    	    				        },
					  						subtitle: {
					  							text: 'copyright LibVol.com',
					  							align: 'right',
					  							margin: 10,
					  							offsetX: -10,
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
					  					        		//  rotate: -45,
					  					                  rotateAlways: true,
					  					                  minHeight:60,
					  					        		  style: {
					  							        	  fontSize: fontsize,
					  							        	 },
					  					        	  },
					     	  			           type: 'category',
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
					  			        	  text: 'No data In this date range',
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
		      	    	        url: "/bourse/getgraphdata",
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
		      	    	        	 
		      	    	          
		      	    	       	    var getFormatResult = getFormat(response[0].config.dataFormat);
		      	    	       	    chartDbFontSize = response[0].config.chartSize;
		      	    	        	fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0],chartDbFontSize);
	    	    	          	
		      	    	  
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
										 minvalue = parseFloat((Math.floor(min*20)/20).toFixed(2));
					      	    	     maxvalue = parseFloat((Math.floor(max*20)/20).toFixed(2));
					      	    	    	chart.updateOptions({
					      	    	    	  extra:{
													isDecimal: isdecimal,
													yAxisFormat:yaxisformat,
												},
					      	    	    		 markers: {
					      	    	    		   colors: ["#F0AB2E", "#0097FE","#F9E79F","#7e95d9","#FAD7A0","#a3a3a5"],
					      	    	    		   strokeColors:["#F0AB2E", "#0097FE","#F9E79F","#7e95d9","#FAD7A0","#a3a3a5"]
					      	    	    		 },
					     				       yaxis: {

						     				    	  labels: {
						     				    		 minWidth: 75,maxWidth: 75,
						 				        		 style: {
						 						        	  fontSize: fontsize,
						 						        	 }
						 				        	  },
					     				          tickAmount: 6,
					     				    	  min:Math.sign(minvalue)==-1 ? -Math.abs(minvalue)-0.1 : Math.abs(minvalue)-0.1,
					     				    	  max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+0.1 : Math.abs(maxvalue)+0.1,
					     				    			  axisBorder: {
					     					                  width: 3,
					     					                  show: true,
					     					                  color: '#ffffff',
					     					                  offsetX: 0,
					     					                  offsetY: 0
					     					              },
					     				    	  },
												  tooltip: {
													  x: {
					    						          show: false,
					    						      },
					    							  y: {
					    								  formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
					    									  if(seriesIndex == 0)
												  				{
												  				if (getFormatResult0[1])
												  				  return  value.toFixed(getFormatResult0[0]);
												  				else 
												  				  return  value.toFixed(getFormatResult0[0]) + "%";
												  				}else 
												  					 if(seriesIndex == 1){
												  					  if (getFormatResult1[1])
												  						  return  value.toFixed(getFormatResult1[0]);
												  						else 
												  							 return  value.toFixed(getFormatResult1[0]) + "%";
												  					 }
					    								    },
					    								    title: {
					    							              formatter: (seriesName) => '',
					    							          },
					    					      },
					    						}
				      	    	    		});     
			      	    	           
		      	    	          chart.updateSeries([{
							          name: response[0].config.displayDescription==null?itemValue[checkedItemValues[0]].title:response[0].config.displayDescription,
							          type: chartType1,
							          data: response[0].graphResponseDTOLst
							        },{
							          name: response[1].config.displayDescription==null?itemValue[checkedItemValues[1]].title:response[1].config.displayDescription,
							          type: chartType2,
							          data:response[1].graphResponseDTOLst
							        }])
							        $('#overlayChart').hide();
		      	   },
		      	    	        error: function (e) {
		      	    	        	
		      						  console.log("ERROR : ", e);
		      	
		      	    	        }
		      	    	    });	
			  	        graphHistory = { 
		   		        		"screenName":"any2",
		   		        	    "parameter":JSON.stringify(checkedItemValues),
		   	     			   };
			    	   $.ajax({
		  	       	        type: "POST",
	     	    	        contentType:  "application/json; charset=utf-8",
	     	    	        url: "/bourse/savegraphhistory",
	     	    	        data: JSON.stringify(graphHistory),
	     	    	        dataType: 'json',
	     	    	        timeout: 600000,
	     	    	        success: function (response) {
	     	                  },
	     	    	        error: function (e) {
	     	    	        	
	     						  console.log("ERROR : ", e);
	     	
	     	    	        }
	     	    	    });		 
			        chart = new ApexCharts(document.querySelector("#mainChart"), options);
			        chart.render();
				}
				else{
						for(i=0; i<checkedItemid.length; i++)
			   		   {
			   	  		 if(checkedItemid[i]!=null)
			   	  		  checkedItemValues.push(checkedItemid[i]);
			   	       }
					   title=itemValue[checkedItemValues[0]].title;
					   
			        dataParam = { 
	   		        		"fromdate":fromdate,
	   		        	    "todate":todate,
	   		        	    "dailyOrWeekly":"d",
	   		        	    "factor1":itemValue[checkedItemValues[0]].factor,
	   		        	    "country1":itemValue[checkedItemValues[0]].country,
	   		        	    "yieldCurveCross1": itemValue[checkedItemValues[0]].yieldCurveCross,
	   		        	   };
					 
					  var options = {
	   	  			          series: [],
	   	  			          chart: {
			   	  			         toolbar: {
			   	  			        show: true,
			   	  			        offsetX: 0,
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
	   	  			          height: 500,
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
	   	  			         margin: 10,
	  	    				        style: {
	  	    				          fontWeight:  'bold',
	  	    				          color:  '#263238'
	  	    				          },
	  	    				        },
							subtitle: {
								text: 'copyright LibVol.com',
								align: 'right',
								margin: 10,
								offsetX: -10,
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
						        		//  rotate: -45,
						                  rotateAlways: true,
						                  minHeight:60,
						        		  style: {
								        	  fontSize: fontsize,
								        	 },
						        	  },
	   	  			           type: 'category',
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
						        	 },
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
				        	  text: 'No data In this date range',
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
			         chart = new ApexCharts(document.querySelector("#mainChart"), options);
			         disableChartType(false);
		  	       	 disableChartColor(false);
					 activateChartTrasnparency(chartType1);
						       	  $.ajax({
					  	       	        type: "POST",
				      	    	        contentType:  "application/json; charset=utf-8",
				      	    	        url: "/bourse/getgraphdata",
				      	    	        data: JSON.stringify(dataParam),
				      	    	        dataType: 'json',
				      	    	        timeout: 600000,
				      	    	        success: function (response) {
				      	    	       
				      	    	        var T1=response[0].config.displayDescription==null?itemValue[checkedItemValues[0]].title:response[0].config.displayDescription;
			      	    	        	title= T1;
			      	    	        	 var dbchartType1=response[0].config.chartType;
				      	    	           chartType1 = getChartType(dbchartType1)[0];
				      	    	           curve1 = getChartType(dbchartType1)[1];
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
			      	    	        	
			      	    	        	
			      	    	        	var getFormatResult = getFormat(response[0].config.dataFormat);
			      	    	        	dataFormat= getFormatResult[0];
			      	    	        	dataFormatIsDecimal=getFormatResult[1];
			      	    	       
				      	    	          
			      	    	        	
			      	    			  newstartdate=new Date();
				      	    	      startDateF1=response[0].config.startDate;
				      	    	    if (startDateF1!=null)
				      	    	      startDateF1 = new Date(startDateF1.split("-")[1]+"-"+startDateF1.split("-")[0]+"-"+startDateF1.split("-")[2]);
				      	    	
		      	    	        	 
		      	    	       	    var getFormatResult = getFormat(response[0].config.dataFormat);
		      	    	       	    chartDbFontSize = response[0].config.chartSize;
		      	    	       	  
		      	    	       	chartColor=checkActiveChartColor($("#chartColor").find(".active")[0],response[0].config.chartColor);
			      	    	    chartTransparency = checkActiveChartColorTransparency($("#chartColorTransparency").find(".active")[0],response[0].config.chartTransparency);
							    fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0],chartDbFontSize);
	      	    	         	chartType1 = checkActiveChartType($("#chartTypes").find(".active")[0],chartType1,true);
	      	    	       	    
		      	    	  
		      	    	          	chart.updateOptions(getChartDailyOption(title,response[0].config.chartShowgrid,fontsize,response[0].config.chartshowMarkes));
		      	    	            updateChartOption();
			      	    	    	
			      	    	        min = Math.min.apply(null, response[0].graphResponseDTOLst.map(function(item) {
				      	    	          return item.y;
				      	    	        })),
				      	    	        max = Math.max.apply(null, response[0].graphResponseDTOLst.map(function(item) {
				      	    	          return item.y;
				      	    	        }));
				      	    	     minvalue = parseFloat((Math.floor(min*20)/20).toFixed(2));
				      	    	     maxvalue = parseFloat((Math.floor(max*20)/20).toFixed(2));
				      	    	    	chart.updateOptions({
				      	    	    	  extra:{
												isDecimal: isdecimal,
												yAxisFormat:yaxisformat,
											},
				     				       yaxis: {
					     				    	  labels: {
					     				    		     minWidth: 75,maxWidth: 75,
						 				        		 style: {
						 						        	  fontSize: fontsize,
						 						        	 }
						 				        	  },
				     				          tickAmount: 6,
				     				    	  min:Math.sign(minvalue)==-1 ? -Math.abs(minvalue)-0.1 : Math.abs(minvalue)-0.1,
				     				    	  max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+0.1 : Math.abs(maxvalue)+0.1,
				     				    			  axisBorder: {
				     					                  width: 3,
				     					                  show: true,
				     					                  color: '#ffffff',
				     					                  offsetX: 0,
				     					                  offsetY: 0
				     					              },
				     				    	  },
			    						  tooltip: {
			    							  x: {
			    						          show: false,
			    						      },
			    							  y: {
			    								  formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
			    									  if (getFormatResult[1])
										  				  return  value.toFixed(getFormatResult[0]);
										  				else 
										  				  return  value.toFixed(getFormatResult[0]) + "%";
			    								    },
			    								    title: {
			    							              formatter: (seriesName) => '',
			    							          },
			    					      },
			    						}
			      	    	    		});
				      	    	        chart.updateSeries([{
									          name: response[0].config.displayDescription==null?itemValue[checkedItemValues[0]].title:response[0].config.displayDescription,
									          type: chartType1,
									          data: response[0].graphResponseDTOLst
									        }]);
				      	    	      $('#overlayChart').hide();
				      	   },
				      	    	        error: function (e) {
				      	    	        	
				      						  console.log("ERROR : ", e);
				      	
				      	    	        }
				      	    	    });	
					  	         chart.render();
					  	       graphHistory = { 
				   		        		"screenName":"any2",
				   		        	    "parameter":JSON.stringify(checkedItemValues),
				   	     			   };
					    	   $.ajax({
				  	       	        type: "POST",
			     	    	        contentType:  "application/json; charset=utf-8",
			     	    	        url: "/bourse/savegraphhistory",
			     	    	        data: JSON.stringify(graphHistory),
			     	    	        dataType: 'json',
			     	    	        timeout: 600000,
			     	    	        success: function (response) {
			     	                  },
			     	    	        error: function (e) {
			     	    	        	
			     						  console.log("ERROR : ", e);
			     	
			     	    	        }
			     	    	    });		 
				              }
		    	  updateGraphFont('12px');
		    	               $("#dateFrom-mainChart").val(fromdate);
		    	               $("#dateTo-mainChart").val(todate);
							}
		  	
			function graphfont(fontSize){
				
		    	 updateGraphFont(fontSize,minvalue,maxvalue);
		     }
