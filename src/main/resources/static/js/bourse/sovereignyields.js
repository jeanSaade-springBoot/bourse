 var selectedRow=this;
         var auditGridSource;
         var isedit=false;
         var isupdate=false;
         var curvesGridSource;
         var crossesGridSource;  
         var date;
         var filterDate;
         var monthDate=new Date(); 
         monthDate.setMonth(monthDate.getMonth() - 1);
         var source;
         var date=new Date();
         var oldDataJson;
         var soverignYieldsItem=[
          "#jqxCheckBoxUSA-30",
       	  "#jqxCheckBoxUSA-10",
       	  "#jqxCheckBoxUSA-5",
       	  "#jqxCheckBoxUSA-2",
       	  "#jqxCheckBoxUSA-10over30",
	   	  "#jqxCheckBoxUSA-5over30",
	   	  "#jqxCheckBoxUSA-5over10",
	   	  "#jqxCheckBoxUSA-2over10",
	   	  "#jqxCheckBoxUSA-2over5",
       	  "#jqxCheckBoxGermany-30",
    	  "#jqxCheckBoxGermany-10",
    	  "#jqxCheckBoxGermany-5",
    	  "#jqxCheckBoxGermany-2",
    	  "#jqxCheckBoxGermany-10over30",
    	  "#jqxCheckBoxGermany-5over30",
    	  "#jqxCheckBoxGermany-5over10",
    	  "#jqxCheckBoxGermany-2over10",
    	  "#jqxCheckBoxGermany-2over5",
	      "#jqxCheckBoxFrance-30",
	  	  "#jqxCheckBoxFrance-10",
	  	  "#jqxCheckBoxFrance-5",
	  	  "#jqxCheckBoxFrance-2",
	   	  "#jqxCheckBoxFrance-10over30",
	  	  "#jqxCheckBoxFrance-5over30",
		  "#jqxCheckBoxFrance-5over10",
		  "#jqxCheckBoxFrance-2over10",
		  "#jqxCheckBoxFrance-2over5",
       	  "#jqxCheckBoxUk-30",
	   	  "#jqxCheckBoxUk-10",
	   	  "#jqxCheckBoxUk-5",
	   	  "#jqxCheckBoxUk-2",
	   	  "#jqxCheckBoxUk-10over30",
		  "#jqxCheckBoxUk-5over30",
		  "#jqxCheckBoxUk-5over10",
		  "#jqxCheckBoxUk-2over10",
		  "#jqxCheckBoxUk-2over5",
       	  "#jqxCheckBoxItaly-30",
    	  "#jqxCheckBoxItaly-10",
    	  "#jqxCheckBoxItaly-5",
    	  "#jqxCheckBoxItaly-2",
    	  "#jqxCheckBoxItaly-10over30",
    	  "#jqxCheckBoxItaly-5over30",
    	  "#jqxCheckBoxItaly-5over10",
    	  "#jqxCheckBoxItaly-2over10",
    	  "#jqxCheckBoxItaly-2over5",
    	  "#jqxCheckBoxSpain-30",
    	  "#jqxCheckBoxSpain-10",
    	  "#jqxCheckBoxSpain-5",
    	  "#jqxCheckBoxSpain-2",
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
       	  
       	  var corporateitems=[
				  "#jqxCheckBoxusatoaaa",
		    	  "#jqxCheckBoxusbtobbb",
		    	  "#jqxCheckBoxusctoccc",
		    	  "#jqxCheckBoxeurozoneatoaaa",
		    	  "#jqxCheckBoxeurozonebtobbb",
		    	  "#jqxCheckBoxusatoaaa_usa",
		    	  "#jqxCheckBoxusbtobbb_usatoaaa",
		    	  "#jqxCheckBoxusctoccc_usbtobbb",
		    	  "#jqxCheckBoxeurozoneatoaaa_germany",
		    	  "#jqxCheckBoxeurozonebtobbb_eurozoneatoaaa"
			 ];
		  var corporateYieldsItem=[
				 "#jqxCheckBoxusatoaaa",
		    	  "#jqxCheckBoxusbtobbb",
		    	  "#jqxCheckBoxusctoccc",
		    	  "#jqxCheckBoxeurozoneatoaaa",
		    	  "#jqxCheckBoxeurozonebtobbb",
			 ];
		   var creditSpreadItem=[
			 "#jqxCheckBoxusatoaaa_usa",
    	     "#jqxCheckBoxusbtobbb_usatoaaa",
    	     "#jqxCheckBoxusctoccc_usbtobbb",
    	     "#jqxCheckBoxeurozoneatoaaa_germany",
    	     "#jqxCheckBoxeurozonebtobbb_eurozoneatoaaa"
		 ];
     	  var yieldsUSAItem=[
     		"#jqxCheckBoxUSA-30",
     		"#jqxCheckBoxUSA-10",
     		"#jqxCheckBoxUSA-5",
     		"#jqxCheckBoxUSA-2",
     		];
     		var yieldsGermanyItem=[
     		"#jqxCheckBoxGermany-30",
     		"#jqxCheckBoxGermany-10",
     		"#jqxCheckBoxGermany-5",
     		"#jqxCheckBoxGermany-2",
     		];
     		var yieldsFranceItem=[
     		"#jqxCheckBoxFrance-30",
     		"#jqxCheckBoxFrance-10",
     		"#jqxCheckBoxFrance-5",
     		"#jqxCheckBoxFrance-2",
     		];
     		var yieldsUkItem=[
     		"#jqxCheckBoxUk-30",
     		"#jqxCheckBoxUk-10",
     		"#jqxCheckBoxUk-5",
     		"#jqxCheckBoxUk-2",
     		];
     		var yieldsItalyItem=[
     		"#jqxCheckBoxItaly-30",
     		"#jqxCheckBoxItaly-10",
     		"#jqxCheckBoxItaly-5",
     		"#jqxCheckBoxItaly-2",
     		 ];
     		var yieldsSpainItem=[
     		"#jqxCheckBoxSpain-30",
     		"#jqxCheckBoxSpain-10",
     		"#jqxCheckBoxSpain-5",
     		"#jqxCheckBoxSpain-2",
     		];
     		  var curvesUSAItems=[
     	       	  "#jqxCheckBoxUSA-10over30",
     	   	   	  "#jqxCheckBoxUSA-5over30",
     	   	   	  "#jqxCheckBoxUSA-5over10",
     	   	   	  "#jqxCheckBoxUSA-2over10",
     		      "#jqxCheckBoxUSA-2over5",
     	      ];
     		  
     		  var curvesGermanyItems=[
     	   		  "#jqxCheckBoxGermany-10over30",
     	       	  "#jqxCheckBoxGermany-5over30",
     	       	  "#jqxCheckBoxGermany-5over10",
     	       	  "#jqxCheckBoxGermany-2over10",
     	       	  "#jqxCheckBoxGermany-2over5",
     		  ];
     		  
     		  var curvesFranceItems=[
     		    "#jqxCheckBoxFrance-10over30",
     	   	  	  "#jqxCheckBoxFrance-5over30",
     	   		  "#jqxCheckBoxFrance-5over10",
     	   		  "#jqxCheckBoxFrance-2over10",
     	   		  "#jqxCheckBoxFrance-2over5",
     		  ]
     		  var curvesUkItems = [
     		  "#jqxCheckBoxUk-10over30",
     	   		  "#jqxCheckBoxUk-5over30",
     	   		  "#jqxCheckBoxUk-5over10",
     	   		  "#jqxCheckBoxUk-2over10",
     	   		  "#jqxCheckBoxUk-2over5",
     		  ];
     		  
     		   var curvesItalyItems = [
     			  "#jqxCheckBoxItaly-10over30",
     	       	  "#jqxCheckBoxItaly-5over30",
     	       	  "#jqxCheckBoxItaly-5over10",
     	       	  "#jqxCheckBoxItaly-2over10",
     	       	  "#jqxCheckBoxItaly-2over5",
     		  ];
     		  
     		  var curvesSpainItems=[
     	          "#jqxCheckBoxSpain-10over30",
     	       	  "#jqxCheckBoxSpain-5over30",
     	       	  "#jqxCheckBoxSpain-5over10",
     	       	  "#jqxCheckBoxSpain-2over10",
     	       	  "#jqxCheckBoxSpain-2over5"];
     		   var avgUSAItems=[
                   "#jqxCheckBoxUSA-weekavg",
               	  "#jqxCheckBoxUSA-100dmavg",
                	  "#jqxCheckBoxUSA-200dmavg",
              ];
     		    var avgGermanyItems=[
        		      "#jqxCheckBoxGermany-weekavg",
               	  "#jqxCheckBoxGermany-100dmavg",
               	  "#jqxCheckBoxGermany-200dmavg",
              ];
     		    var avgFranceItems=[
                   "#jqxCheckBoxFrance-weekavg",
               	  "#jqxCheckBoxFrance-100dmavg",
               	  "#jqxCheckBoxFrance-200dmavg",
              ];
     		    var avgUkItems=[
                   "#jqxCheckBoxUk-weekavg",
               	  "#jqxCheckBoxUk-100dmavg",
               	  "#jqxCheckBoxUk-200dmavg",
        		     
              ];
     		    var avgItalyItems=[
        		      "#jqxCheckBoxItaly-weekavg",
               	  "#jqxCheckBoxItaly-100dmavg",
               	  "#jqxCheckBoxItaly-200dmavg",
              ];
     		    var avgSpainItems=[
            	      "#jqxCheckBoxSpain-weekavg",
               	  "#jqxCheckBoxSpain-100dmavg",
               	  "#jqxCheckBoxSpain-200dmavg",
              ];
     		   var crossesfrcgerItems=[
     	          "#jqxCheckBoxfrc-ger-30",
     	       	  "#jqxCheckBoxfrc-ger-10",
     	       	  "#jqxCheckBoxfrc-ger-5",
     	       	  "#jqxCheckBoxfrc-ger-2",
     	   		  ];
     			   var crossesitagerItems=[
     	       	  "#jqxCheckBoxita-ger-30",
     	       	  "#jqxCheckBoxita-ger-10",
     	       	  "#jqxCheckBoxita-ger-5",
     	       	  "#jqxCheckBoxita-ger-2",
     	   		  ];
     			   var crossesspngerItems=[
     	       	  "#jqxCheckBoxspn-ger-30",
     	       	  "#jqxCheckBoxspn-ger-10",
     	       	  "#jqxCheckBoxspn-ger-5",
     	       	  "#jqxCheckBoxspn-ger-2",
     	   		  ];
     			   var crossesukgerItems=[
     	       	  "#jqxCheckBoxuk-ger-30",
     	       	  "#jqxCheckBoxuk-ger-10",
     	       	  "#jqxCheckBoxuk-ger-5",
     	       	  "#jqxCheckBoxuk-ger-2",
     	   		  ];
     			   var crossesusagerItems=[
     	       	  "#jqxCheckBoxusa-ger-30",
     	       	  "#jqxCheckBoxusa-ger-10",
     	       	  "#jqxCheckBoxusa-ger-5",
     	       	  "#jqxCheckBoxusa-ger-2",
     	   		  ];
     			   var crossesusaukItems=[
     	       	  "#jqxCheckBoxusa-uk-30",
     	       	  "#jqxCheckBoxusa-uk-10",
     	       	  "#jqxCheckBoxusa-uk-5",
     	       	  "#jqxCheckBoxusa-uk-2",
     	   		  ];
     			   var crossesitafrcItems=[
     	       	  "#jqxCheckBoxita-frc-30",
     	       	  "#jqxCheckBoxita-frc-10",
     	       	  "#jqxCheckBoxita-frc-5",
     	       	  "#jqxCheckBoxita-frc-2",
     	   		  ];
     			   var crossesitaspnItems=[
     	       	  "#jqxCheckBoxita-spn-30",
     	       	  "#jqxCheckBoxita-spn-10",
     	       	  "#jqxCheckBoxita-spn-5",
     	       	  "#jqxCheckBoxita-spn-2",
     	   		  ];
     			  
         var auditDefaultData=[{
             "factor": "30yr",
             "usa": "",
             "germany": "",
             "france": "",
             "uk": "",
             "italy": "",
             "spain": ""
           },{
                 "factor": "10yr",
                 "usa": "",
                 "germany": "",
                 "france": "",
                 "uk": "",
                 "italy": "",
                 "spain": ""
               },
               {
	                    "factor": "5yr",
	                    "usa": "",
	                    "germany": "",
	                    "france": "",
	                    "uk": "",
	                    "italy": "",
	                    "spain": ""
	                  },
	                  {
		                    "factor": "2yr",
		                    "usa": "",
		                    "germany": "",
		                    "france": "",
		                    "uk": "",
		                    "italy": "",
		                    "spain": ""
		                  }];
         
         curvesDefaultData=[{
             "factor": "10's/30's",
             "usa": "",
             "germany": "",
             "france": "",
             "uk": "",
             "italy": "",
             "spain": ""
           },{
                 "factor": "5's/30's",
                 "usa": "",
                 "germany": "",
                 "france": "",
                 "uk": "",
                 "italy": "",
                 "spain": ""
               },
               {
	                    "factor": "5's/10's",
	                    "usa": "",
	                    "germany": "",
	                    "france": "",
	                    "uk": "",
	                    "italy": "",
	                    "spain": ""
	                  },
	                  {
		                    "factor": "2's/10's",
		                    "usa": "",
		                    "germany": "",
		                    "france": "",
		                    "uk": "",
		                    "italy": "",
		                    "spain": ""
		                  } ,{
		                    "factor": "2's/5's",
		                    "usa": "",
		                    "germany": "",
		                    "france": "",
		                    "uk": "",
		                    "italy": "",
		                    "spain": ""
		                  }];
         crossesDefaultData=[
        	 {
        		 "id": 1,
        		 "factor": "30yr",
        		 "fra_GER": "",
        		 "ita_GER": "",
        		 "ita_FRA": "",
        		 "uk_GER": "",
        		 "ita_SPN": "",
        		 "usa_GER": "",
        		 "usa_UK": "",
        		 "spn_GER": ""
        		 },
        		 {
        		 "id": 2,
        		 "factor": "10yr",
        		 "fra_GER": "",
        		 "ita_GER": "",
        		 "ita_FRA": "",
        		 "uk_GER": "",
        		 "ita_SPN": "",
        		 "usa_GER": "",
        		 "usa_UK": "",
        		 "spn_GER": ""
        		 },
        		 {
        		 "id": 3,
        		 "factor": "5yr",
        		 "fra_GER": "",
        		 "ita_GER": "",
        		 "ita_FRA": "",
        		 "uk_GER": "",
        		 "ita_SPN": "",
        		 "usa_GER": "",
        		 "usa_UK": "",
        		 "spn_GER": ""
        		 },
        		 {
        		 "id": 4,
        		 "factor": "2yr",
        		 "fra_GER": "",
        		 "ita_GER": "",
        		 "ita_FRA": "",
        		 "uk_GER": "",
        		 "ita_SPN": "",
        		 "usa_GER": "",
        		 "usa_UK": "",
        		 "spn_GER": ""
        		 }
        		 ];
      	 
 		 var datatextarea = document.getElementById("data");
 		 var dataTextInput = document.getElementById("data-input");
 		 
		 const yieldValue = $("#yieldValue")[0].innerText;
		 
		 $(document).ready(function () {
			  $('#overlay').fadeOut();
			  $('#container-wrapper').show();
		 	    
			  $("#viewall").jqxButton({  theme:'dark', width: 110, height: 35,template: "primary" });
			  $("#viewall").css("display","block");
			  $("#viewall").click(function () {
					popupWindow('/bourse/allnews', 'Libvol - View All News', window, 1300, 600);
				  });
				  
			   $('[data-toggle="tooltip"]').tooltip(); 
			   if(yieldValue==1){
				 $("#sovereign-btn").addClass('active');
			  }else 
			   if(yieldValue==2){
			   $("#corporate-btn").addClass('active');
			   }
			  renderyieldSubGroup(yieldValue);
			   
			 $("#dateInput").jqxDateTimeInput({  theme:'dark', width: '195px', height: '25px' });
			 $("#dateInputAudit").jqxDateTimeInput({  theme:'dark', width: '195px', height: '25px' }); 
			 $("#deleteByDate").click(function () {
				$('#alertDeleteDataByDate-modal').modal('show'); 
		   		 date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				  $( "#alertTextDeleteDataByDate" ).empty();
		 		  $( "#alertTextDeleteDataByDate" ).append( "<p> Are you sure you want to Delete all record for the date '"+date+"'?</p>" );
				 });	 
	 	    $("#deleteCorporateByDate").click(function () {
				$('#alertDeleteCorporateDataByDate-modal').modal('show'); 
		   		 date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				  $( "#alertTextDeleteCorporateDataByDate" ).empty();
		 		  $( "#alertTextDeleteCorporateDataByDate" ).append( "<p> Are you sure you want to Delete all record for the date '"+date+"'?</p>" );
				 });	
				 
			 getFilterHistory(yieldValue);
			 $('#dateInputAudit').on('change', function (event) 
				 {   date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				    filterDate=date;
				   if(yieldValue==1)
				   { delete auditGridSource.localdata;
				     auditGridSource.url='/bourse/getauditdata/'+date;
					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
					 $('#auditGrid').jqxGrid({source:dataAdapter});
					 
				    delete curvesGridSource.localdata;
				     curvesGridSource.url='/bourse/getcurvedata/'+date;
					 dataAdapter = new $.jqx.dataAdapter(curvesGridSource);
					 $('#curvesGrid').jqxGrid({source:dataAdapter});
					 
					 delete crossesGridSource.localdata;
					 crossesGridSource.url='/bourse/getcrossauditdata/'+date;
					 dataAdapter = new $.jqx.dataAdapter(crossesGridSource);
					 $('#crossesGrid').jqxGrid({source:dataAdapter});
					 }
					 else {
						 
					     delete corporatesGridSource.localdata;
						 corporatesGridSource.url='/bourse/getcorporateauditdata/'+date;
						 dataAdapter = new $.jqx.dataAdapter(corporatesGridSource);
						 $('#corporatesGrid').jqxGrid({source:dataAdapter});
						 
						 delete creditGridSource.localdata;
						 creditGridSource.url='/bourse/getcreaditspreadauditdata/'+date;
						 dataAdapter = new $.jqx.dataAdapter(creditGridSource);
						 $('#creditAuditGrid').jqxGrid({source:dataAdapter});
					 }
				 }); 

			    $("#Cancel").jqxButton({ theme: 'dark',height:38,width:84  });
	            $("#Save").jqxButton({ theme: 'dark',height:38,width:93 });
	            $("#Clearfilter").jqxButton({ theme: 'dark',height:30,width:74  });
	            $("#filter").jqxButton({ theme: 'dark',height:30,width:74 });
	         
		            
			 var dropDownSource = [
                 "now",
                 "after 3 hours",
                 "after 6 hours"
		        ];
 	                // Create a jqxDropDownList
	                $("#recalculatedropDown").jqxDropDownList({ source: dropDownSource, theme:'dark',  width: '150', height: '40px',dropDownHeight:'100px'});
	                
// 		            // prepare the data
		          /*   var source =
		            {
		                datatype: "json",
		                datafields: [
		                    { name: 'referDate', type: 'string' },
		                    { name: 'thirteeYrFactor', type: 'string' },
		                    { name: 'tenYrFactor', type: 'string' },
		                    { name: 'fiveYrFactor', type: 'string' },
		                    { name: 'twoYrFactor', type: 'string' },
		                    { name: 'subgroupId', type: 'string' }
		                ],
		                id: 'id',
		                url: '/bourse/getsovereignyields'
		            };
		            var dataAdapter = new $.jqx.dataAdapter(source);
		             */
		             
		             // prepare the data
		           source =
		             {
		                 datatype: "json",
		                 datafields: [
	 		                    { name: 'refer_date', type: 'date' },
	 		                    { name: 'FRANCE_2/5', type: 'float' },
	 		                    { name: 'USA_30yr',  type: 'float'},
	 		                    { name: 'USA_10yr',  type: 'float'},
	 		                    { name: 'USA_5yr',  type: 'float'},
	 		                    { name: 'USA_2yr',  type: 'float'},
	 		                    { name: 'GERMANY_30yr',  type: 'float'},
	 		                    { name: 'GERMANY_10yr',  type: 'float'},
	 		                    { name: 'GERMANY_5yr',  type: 'float'},
	 		                    { name: 'GERMANY_2yr',  type: 'float'},
	 		                    { name: 'FRANCE_30yr',  type: 'float'},
	 		                    { name: 'FRANCE_10yr',  type: 'float'},
	 		                    { name: 'FRANCE_5yr',  type: 'float'},
	 		                    { name: 'FRANCE_2yr',  type: 'float'},
	 		                    { name: 'UK_30yr',  type: 'float'},
	 		                    { name: 'UK_10yr',  type: 'float'},
	 		                    { name: 'UK_5yr',  type: 'float'},
	 		                    { name: 'UK_2yr',  type: 'float'},
	 		                    { name: 'ITALY_30yr',  type: 'float'},
	 		                    { name: 'ITALY_10yr',  type: 'float'},
	 		                    { name: 'ITALY_5yr',  type: 'float'},
	 		                    { name: 'ITALY_2yr',  type: 'float'},
	 		                    { name: 'SPAIN_30yr',  type: 'float'},
	 		                    { name: 'SPAIN_10yr',  type: 'float'},
	 		                    { name: 'SPAIN_5yr',  type: 'float'},
	 		                    { name: 'SPAIN_2yr',  type: 'float'},
	 		                    { name: 'USA_2/5',  type: 'float'},
	 		                    { name: 'USA_2/10',  type: 'float'},
	 		                    { name: 'USA_5/10',  type: 'float'},
	 		                    { name: 'USA_5/30',  type: 'float'},
	 		                    { name: 'USA_10/30',  type: 'float'},
	 		                    { name: 'GERMANY_2/5',  type: 'float'},
	 		                    { name: 'GERMANY_2/10',  type: 'float'},
	 		                    { name: 'GERMANY_5/10',  type: 'float'},
	 		                    { name: 'GERMANY_5/30',  type: 'float'},
	 		                    { name: 'GERMANY_10/30',  type: 'float'}, 
		 		                { name: 'FRANCE_2/5',  type: 'float'},
		 		                { name: 'FRANCE_2/10',  type: 'float'},
		 		                { name: 'FRANCE_5/10',  type: 'float'},
		 		                { name: 'FRANCE_5/30',  type: 'float'},
		 		                { name: 'FRANCE_10/30',  type: 'float'},
		 		                { name: 'UK_2/5',  type: 'float'},
		 		                { name: 'UK_2/10',  type: 'float'},
		 		                { name: 'UK_5/10',  type: 'float'},
		 		                { name: 'UK_5/30',  type: 'float'},
		 		                { name: 'UK_10/30',  type: 'float'},
			 		            { name: 'ITALY_2/5',  type: 'float'},
			 		            { name: 'ITALY_2/10',  type: 'float'},
			 		            { name: 'ITALY_5/10',  type: 'float'},
			 		            { name: 'ITALY_5/30',  type: 'float'},
			 		            { name: 'ITALY_10/30',  type: 'float'},
			 		            { name: 'SPAIN_2/5',  type: 'float'},
			 		            { name: 'SPAIN_2/10',  type: 'float'},
			 		            { name: 'SPAIN_5/10',  type: 'float'},
			 		            { name: 'SPAIN_5/30',  type: 'float'},
			 		            { name: 'SPAIN_10/30',  type: 'float'},
	 		                    { name: 'subgroupId',  type: 'float'},
	 		                    { name: 'GERMANY_2/5',  type: 'float'},
	 		                    { name: 'FRA-GER_30',  type: 'float'},
	 		                    { name: 'FRA-GER_10',  type: 'float'},
	 		                    { name: 'FRA-GER_5',  type: 'float'},
	 		                    { name: 'FRA-GER_2',  type: 'float'},
	 		                    { name: 'ITA-GER_30',  type: 'float'},
	 		                    { name: 'ITA-GER_10',  type: 'float'},
	 		                    { name: 'ITA-GER_5',  type: 'float'},
	 		                    { name: 'ITA-GER_2',  type: 'float'},
		 		                { name: 'SPN-GER_30',  type: 'float'},
	 		                    { name: 'SPN-GER_10',  type: 'float'},
	 		                    { name: 'SPN-GER_5',  type: 'float'},
	 		                    { name: 'SPN-GER_2',  type: 'float'},
	 		                    { name: 'UK-GER_30',  type: 'float'},
	 		                    { name: 'UK-GER_10',  type: 'float'},
	 		                    { name: 'UK-GER_5',  type: 'float'},
	 		                    { name: 'UK-GER_2',  type: 'float'},
	 		                    { name: 'USA-GER_30',  type: 'float'},
		 		                { name: 'USA-GER_10',  type: 'float'},
		 		                { name: 'USA-GER_5',  type: 'float'},
		 		                { name: 'USA-GER_2',  type: 'float'},
		 		                { name: 'USA-UK_30',  type: 'float'},
		 		                { name: 'USA-UK_10',  type: 'float'},
		 		                { name: 'USA-UK_5',  type: 'float'},
		 		                { name: 'USA-UK_2',  type: 'float'},
		 		                { name: 'ITA-FRA_30',  type: 'float'},
		 		                { name: 'ITA-FRA_10',  type: 'float'},
		 		                { name: 'ITA-FRA_5',  type: 'float'},
		 		                { name: 'ITA-FRA_2',  type: 'float'},
		 		                { name: 'ITA-SPN_30',  type: 'float'},
		 		                { name: 'ITA-SPN_10',  type: 'float'},
		 		                { name: 'ITA-SPN_5',  type: 'float'},
		 		                { name: 'ITA-SPN_2', type: 'float' },
		 		                { name: 'usatoaaa', type: 'float' },
		 		                { name: 'usbtobbb', type: 'float' },
		 		                { name: 'usctoccc', type: 'float' },
		 		                { name: 'eurozoneatoaaa', type: 'float' },
		 		                { name: 'eurozonebtobbb', type: 'float' },
		 		                { name: 'usatoaaa_usa', type: 'float' },
		 		                { name: 'usbtobbb_usatoaaa', type: 'float' },
		 		                { name: 'usctoccc_usbtobbb', type: 'float' },
		 		                { name: 'eurozoneatoaaa_germany', type: 'float' },
		 		                { name: 'eurozonebtobbb_eurozoneatoaaa', type: 'float' },
	 		                 ],
	                         id: 'id',
	                         localdata: ''
		             };
		         
		             $("#dateInputFrom").jqxDateTimeInput({  theme:'dark', width: '200px', height: '25px'});
                     $("#dateInputFrom").jqxDateTimeInput('setDate', monthDate);
        			 $("#dateInputTo").jqxDateTimeInput({  theme:'dark', width: '200px', height: '25px' }); 
		             $("#grid").jqxGrid(
		                    {
		                    	width: '100%',
		  		                columnsresize: true,
		  		                theme:'dark',
		  		                pageable: true,
		  		                pagesize: 10,
		  		                showfilterrow: true,
		  		                filterable: true,
		  		                autoheight: true,
		                        columnsresize: true,
		                        pagesizeoptions: ['10', '20', '50']
		                    });
		             getFilterData(yieldValue);
		             $("#grid").jqxGrid('showloadelement');
		            
		            var imagerenderer = function (row, datafield, value) {
		                return '<img style="margin: .4rem; margin-left: 1rem;" height="24" width="24" src="/img/flag/' + value + '.png"/>';
		            }
		            
		            var subgroupSource = [
                        { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-right: .5rem;' src='/img/flag/1.png'/><span style='float: left; font-size: 13px;margin-top: 0.3rem; font-family: inherit;'>USA</span></div>", title: 'USA' },
	                    { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-right: .5rem;' src='/img/flag/2.png'/><span style='float: left; font-size: 13px;margin-top: 0.3rem; font-family: inherit;'>GER</span></div>", title: 'GER' },
	                    { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-right: .5rem;' src='/img/flag/3.png'/><span style='float: left; font-size: 13px;margin-top: 0.3rem; font-family: inherit;'>FRA</span></div>", title: 'FRA' },
 	                    { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-right: .5rem;' src='/img/flag/4.png'/><span style='float: left; font-size: 13px;margin-top: 0.3rem; font-family: inherit;'>UKK</span></div>", title: 'UKK' },
 	                    { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-right: .5rem;' src='/img/flag/5.png'/><span style='float: left; font-size: 13px; margin-top: 0.3rem;font-family: inherit;'>ITA</span></div>", title: 'ITA' },
 	                    { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-right: .5rem;' src='/img/flag/6.png'/><span style='float: left; font-size: 13px;margin-top: 0.3rem; font-family: inherit;'>SPN</span></div>", title: 'SPN' }
	                ];
 	                //Create a jqxDropDownList
 	                $("#subgroupdropDownSource").jqxDropDownList({ source: subgroupSource, theme:'dark', selectedIndex: 0, width: '100', height: '40px'});
	                
		             $("#thirteeYrFactor").jqxInput({ theme: 'dark' }); 
		             $("#thirteeYrFactor").width(150);
		             $("#fiveYrFactor").jqxInput({ theme: 'dark' }); 
		             $("#fiveYrFactor").width(150);
		             $("#twoYrFactor").jqxInput({ theme: 'dark' }); 
		             $("#twoYrFactor").width(150);
		             $("#tenYrFactor").jqxInput({ theme: 'dark' }); 
		             $("#tenYrFactor").width(150);
		          /*    
		            $("#grid").jqxGrid(
		            {
		                width: '100%',
		                columnsresize: true,
		                theme:'dark',
		                pageable: true,
		                pagesize: 10,
		                showfilterrow: true,
		                filterable: true,
		                autoheight: true,
		                source: dataAdapter,
		                columns: [
		                  { text: 'Sub-groups',filterable: false, datafield: 'subgroupId', width: '16.6%', cellsrenderer: imagerenderer },
		                  { text: 'Date', datafield: 'referDate', width: '16.6%' },
		                  { text: '30yr long', datafield: 'thirteeYrFactor', width: '16.6%' },
		                  { text: '10yr bench', datafield: 'tenYrFactor', width: '16.6%' },
		                  { text: '5yr', datafield: 'fiveYrFactor', width: '16.6%' },
		                  { text: '2yr', datafield: 'twoYrFactor', width: '16.6%' }
		                { text: '', datafield: 'Delete', width:'7%', columntype: 'button', cellsrenderer: function () {
		                      return "Delete";
		                   }, buttonclick: function (row) {
		                     
		                	   var selectedrowindex = $("#grid").jqxGrid('getselectedrowindex');
		                        var rowscount = $("#grid").jqxGrid('getdatainformation').rowscount;
		                        if (selectedrowindex >= 0 && selectedrowindex < rowscount) {
		                            var id = $("#grid").jqxGrid('getrowid', selectedrowindex);
		                            $.ajax({
		                                type : "DELETE",
		                                url : "/bourse/deletesovereignbyid/" + id,
		                                success: function (result) {       
		                                       console.log(result);                
		                                },
		                                error: function (e) {
		                                    console.log(e);
		                                }
		                            });
		                            var commit = $("#grid").jqxGrid('deleterow', id);
		                        }
		                  }
		                  }
		              ]
		            });
		            // initialize the popup window and buttons.
            $("#popupWindow").jqxWindow({
                width:900, theme:'dark', resizable: false,  isModal: true, autoOpen: false, cancelButton: $("#Cancel"), modalOpacity: 0.01           
            });
         
          */
            // update the edited row when the user clicks the 'Save' button.
            $("#Save").click(function () {
                if (editrow >= 0) {
                	 var rowID = $('#grid').jqxGrid('getrowid', editrow);
                      
                	var row = { id : rowID,
                    		    subgroupId:$("#subgroupdropDownSource").jqxDropDownList('getSelectedIndex')+1,
                    		    thirteeYrFactor: $("#thirteeYrFactor").val(),
                    			tenYrFactor: $("#tenYrFactor").val(),
                    			fiveYrFactor: $("#fiveYrFactor").val(),
                    			twoYrFactor: $("#twoYrFactor").val()
                    			};
                	
      	       	  $.ajax({
      	    	        type: "POST",
      	    	        contentType: "application/json",
      	    	        url: "/bourse/updatesovereignbyid",
      	    	        data: JSON.stringify(row),
      	    	        dataType: 'json',
      	    	        async:true,
      	    	        cache: false,
      	    	        timeout: 600000,
      	    	        success: function (data) {
      	    	        
                        $('#grid').jqxGrid('updaterow', rowID, data);
                        $("#popupWindow").jqxWindow('hide');
      	  			 },
      	    	        error: function (e) {
      	    	        	
      						  console.log("ERROR : ", e);
      	
      	    	        }
      	    	    });
                }
            });
        
            $("#CancelData").click(function () {
            	  datatextarea.value="";
            	  $("#dataformInput").css("display","block");
				  $("#dataInputButtons").css("display","none"); 
				  $("#dataInputGrid").css("display","none"); 
               });
            
            $("#filter").click(function () {
            	
            	getFilterData(yieldValue);
               });
            
            $("#Clearfilter").click(function () {
   		      if (yieldValue==1){
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
        	 }else{
        	      $("#jqxCheckBoxusatoaaa").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxusbtobbb").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxusctoccc").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxeurozoneatoaaa").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxeurozonebtobbb").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxusatoaaa_usa").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxusbtobbb_usatoaaa").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxusctoccc_usbtobbb").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxeurozoneatoaaa_germany").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxeurozonebtobbb_eurozoneatoaaa").jqxCheckBox({checked: false });
		    	  }
        	 /* for(i=0; i<soverignYieldsItem.length; i++)
    		   {
    	    	$(soverignYieldsItem[i]).jqxCheckBox({disabled: false});
    	       }*/
        	  checkedItem=0;
         	 
	   		  
            });
            $("#loadData").on('click', function(e) {
			 e.preventDefault();
			$("#loadData").prop('disabled',true);
			document.querySelector('#loadData').disabled = true;
			
            	var date = new Date();
            	var dataToBeInserted = [];
            	var usaObject=["1"];
            	var germanyObject=["3"];
            	var franceObject=["2"];
            	var ukObject=["4"];
            	var italyObject=["5"];
            	var spainObject=["6"];

            	var rows = $('#dataInputGrid').jqxGrid('getrows');
            	for (i = 0; i < rows.length; i++) {
            	   usaObject.push(rows[i].usa);
            	   germanyObject.push(rows[i].germany);
            	   franceObject.push(rows[i].france);
            	   ukObject.push(rows[i].uk);
            	   italyObject.push(rows[i].italy);
            	   spainObject.push(rows[i].spain);
            	}

            	var listObject=["usaObject","germanyObject","franceObject","ukObject","italyObject","spainObject"];
            	 
            	 for (i = 0; i < listObject.length; i++) {

            	     var value = eval(listObject[i]);
            		 	dataToBeInserted.push({
            			   "subgroupId":value[0],
            			   "thirteeYrFactor":value[1],
            			   "tenYrFactor":value[2],
            			   "fiveYrFactor":value[3],
            			   "twoYrFactor":value[4],
            			   "referDate": $.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
            			});
            	 }
            	 if($("#dateInput").jqxDateTimeInput('getDate')<date)
           	     {
            		 var today = $("#dateInput").jqxDateTimeInput('getDate');
            		 if(today.getDay() == 6 || today.getDay() == 0)
            		 { 
            			 $('#alert-modal-weekend').modal('show'); 
            			 return;
            		 }
            		 today=$.jqx.dataFormat.formatdate(today,  'dd-MM-yyyy')
            		 $.ajax({
	    	        contentType: "application/json",
	    	        url: "/bourse/checkifcansave/"+today,
	    	        dataType: 'json',
	    	        async:true,
	    	        cache: false,
	    	        timeout: 600000,
	    	        success: function (response) {
	    	        	if(response)
	    	        	{
							 $.ajax({
						        contentType: "application/json",
						        url: "/process/isrobottriggered/1",
						        dataType: 'text',
								async:true,
						        cache: false,
						        timeout: 600000,
						        success: function (data) {
				      
								if(data=='true')
								   $('#alert-modal-robot').modal('show'); 
								else{
									
		
						    	       	  $.ajax({
						    	    	        type: "POST",
						    	    	        contentType: "application/json",
						    	    	        url: "/bourse/savesovereigndata",
						    	    	        data: JSON.stringify(dataToBeInserted),
						    	    	        dataType: 'json',
						    	    	        async:true,
						    	    	        cache: false,
						    	    	        timeout: 600000,
						    	    	        success: function (data) {
						    	    	        
												 getFilterData(yieldValue);
						    	    	        	  
						  						 datatextarea.value="";
						  		            	  $("#dataformInput").css("display","block");
						  						  $("#dataInputButtons").css("display","none"); 
						  						  $("#dataInputGrid").css("display","none");
						  						
						  						$('#dateInputAudit').jqxDateTimeInput('setDate', $("#dateInput").jqxDateTimeInput('getDate'));
						    	        	    date=$.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
						    	        	    
						    				    filterDate=date;
						    				    delete auditGridSource.localdata;   
						    				     auditGridSource.url='/bourse/getauditdata/'+date;
						    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
						    					 $('#auditGrid').jqxGrid({source:dataAdapter});
						    					 
						    				    delete curvesGridSource.localdata;
						    				     curvesGridSource.url='/bourse/getcurvedata/'+date;
						    					 dataAdapter = new $.jqx.dataAdapter(curvesGridSource);
						    					 $('#curvesGrid').jqxGrid({source:dataAdapter});
						    					 
						    					 delete crossesGridSource.localdata;
						    					 crossesGridSource.url='/bourse/getcrossauditdata/'+date;
						    					 dataAdapter = new $.jqx.dataAdapter(crossesGridSource);
						    					 $('#crossesGrid').jqxGrid({source:dataAdapter}); 
						
						    	    	         triggerRobots();	
						    	    	         
						    	            },
						    	    	        error: function (e) {
						    	    	        	
						    						  console.log("ERROR : ", e);
						    	
						    	    	        }
						    	    	    });
										}
					
								},
						        error: function (e) {
						        	
										  console.log("ERROR : ", e);
					
						        }
						    });

	    	        	}
	    	        	else{
	    	        		$('#alert-modal').modal('show'); 
	    	        	}
	            },
	    	        error: function (e) {
	    	        	
						  console.log("ERROR : ", e);
	
	    	        }
	    	    });
           	     }
            	 else {
            		 $('#alertDate-modal').modal('show'); 
            	 }
             });
          
            
		        });
		 
		  function getFilterData(yieldValue)
		  {
			var jsonfilter=[];
          	var sovereignYiledCurveSearchDTOlst=[];
          	var sovereignCrossSearchDTOlst=[];
          	var selectedSearchDTOlst=[];
          	var allItems=0;
          	var checkedItem=[];
          	var json;
          	var gridColumns = [];
          	var yields=[];
          	var curves=[];
          	var corporate=[];
          	var credits=[];
            $('#grid').jqxGrid({ showdefaultloadelement: true}); 
          	var itemsUsa = 0;
        	var itemsGermany = 0;
          	var itemsFrance = 0;
          	var itemsUsa = 0;
          	var itemsUk = 0;
          	var itemsItaly = 0;
        	var itemsSpain = 0;
          	var itemsfrcger = 0; 
          	var itemsitager = 0;
         	var itemsspnger = 0;
         	var itemsukger = 0;
         	var itemsusager = 0;
         	var itemsusauk = 0;
         	var itemsitafrc = 0;
         	var itemsitaspn = 0;
            
            if (yieldValue==1)
	         {  
	         	for (i = 0; i < yieldsUSAItem.length; i++) {
	         		if($(yieldsUSAItem[i]).jqxCheckBox('checked'))
	         		{		
	         		   yields.push(yieldsUSAItem[i].split("-")[1]+"yr");	
	          			itemsUsa=1;
	          			allItems=allItems+1;
	          			checkedItem.push(yieldsUSAItem[i]);
	         		}
	          	}
	         	for (i = 0; i < curvesUSAItems.length; i++) {
	         		if($(curvesUSAItems[i]).jqxCheckBox('checked'))
	         		{	curves.push(curvesUSAItems[i].split("-")[1].replace("over", "/"));	
		      			itemsUsa=1;
		      			allItems=allItems+1;
		      			checkedItem.push(curvesUSAItems[i]);
	         		}
	         	}
	          	if(itemsUsa!=0)
	          	{
	          		sovereignYiledCurveSearchDTOlst.push({
	          		   "groupId":"1",
	       			   "yieldLst":yields,
	       			   "curveLst":curves
	       			});
	          		 yields=[];
	              	 curves=[];
	              	 
	          	}
	        	for (i = 0; i < yieldsGermanyItem.length; i++) {
	        		if($(yieldsGermanyItem[i]).jqxCheckBox('checked'))
	         		{	
	        		yields.push(yieldsGermanyItem[i].split("-")[1]+"yr");	
	      			itemsGermany=1;
	      			allItems=allItems+1;
	      			checkedItem.push(yieldsGermanyItem[i]);
	         		}
		      	}
		     	for (i = 0; i < curvesGermanyItems.length; i++) {
		     		if($(curvesGermanyItems[i]).jqxCheckBox('checked'))
	         		{	
		     		curves.push(curvesGermanyItems[i].split("-")[1].replace("over", "/"));	
		         		itemsGermany=1;
		         		allItems=allItems+1;
		         		checkedItem.push(curvesGermanyItems[i]);
	         		}
		     	}
	          	if(itemsGermany!=0)
	          	{
	          		sovereignYiledCurveSearchDTOlst.push({
	          		   "groupId":"3",
	       			   "yieldLst":yields,
	       			   "curveLst":curves
	       			});
	          		 yields=[];
	              	 curves=[];
	          	}
	          	for (i = 0; i < yieldsFranceItem.length; i++) {
	          		if($(yieldsFranceItem[i]).jqxCheckBox('checked'))
	         		{	
	          		yields.push(yieldsFranceItem[i].split("-")[1]+"yr");	
	      			itemsFrance=1;
	      			allItems=allItems+1;
	      			checkedItem.push(yieldsFranceItem[i]);
	         		}
		      	}
		     	for (i = 0; i < curvesFranceItems.length; i++) {
		     		if($(curvesFranceItems[i]).jqxCheckBox('checked'))
	         		{		
		     		curves.push(curvesFranceItems[i].split("-")[1].replace("over", "/"));	
		         		itemsFrance=1;
		         		allItems=allItems+1;
		         		checkedItem.push(curvesFranceItems[i]);
	         		}
		     	}
	          	if(itemsFrance!=0)
	          	{
	          		sovereignYiledCurveSearchDTOlst.push({
	          		   "groupId":"2",
	          		   "yieldLst":yields,
	       			   "curveLst":curves
	       			});
	          		 yields=[];
	              	 curves=[];
	          	}
	          	
	         	for (i = 0; i < yieldsUkItem.length; i++) {
	         		if($(yieldsUkItem[i]).jqxCheckBox('checked'))
	         		{		
	         		   yields.push(yieldsUkItem[i].split("-")[1]+"yr");	
	         		    itemsUk=1;
	          			allItems=allItems+1;
	          			checkedItem.push(yieldsUkItem[i]);
	         		}
	          	}
	         	for (i = 0; i < curvesUkItems.length; i++) {
	         		if($(curvesUkItems[i]).jqxCheckBox('checked'))
	         		{	curves.push(curvesUkItems[i].split("-")[1].replace("over", "/"));	
	         		    itemsUk=1;
		      			allItems=allItems+1;
		      			checkedItem.push(curvesUkItems[i]);
	         		}
	         	}
	          	if(itemsUk!=0)
	          	{
	          		sovereignYiledCurveSearchDTOlst.push({
	          		   "groupId":"4",
	       			   "yieldLst":yields,
	       			   "curveLst":curves
	       			});
	          		 yields=[];
	              	 curves=[];
	              	 
	          	}
	         	for (i = 0; i < yieldsItalyItem.length; i++) {
	         		if($(yieldsItalyItem[i]).jqxCheckBox('checked'))
	         		{		
	         		   yields.push(yieldsItalyItem[i].split("-")[1]+"yr");	
	         		    itemsItaly=1;
	          			allItems=allItems+1;
	          			checkedItem.push(yieldsItalyItem[i]);
	         		}
	          	}
	         	for (i = 0; i < curvesItalyItems.length; i++) {
	         		if($(curvesItalyItems[i]).jqxCheckBox('checked'))
	         		{	curves.push(curvesItalyItems[i].split("-")[1].replace("over", "/"));	
	         	    	itemsItaly=1;
		      			allItems=allItems+1;
		      			checkedItem.push(curvesItalyItems[i]);
	         		}
	         	}
	          	if(itemsItaly!=0)
	          	{
	          		sovereignYiledCurveSearchDTOlst.push({
	          		   "groupId":"5",
	       			   "yieldLst":yields,
	       			   "curveLst":curves
	       			});
	          		 yields=[];
	              	 curves=[];
	              	 
	          	}
	         	for (i = 0; i < yieldsSpainItem.length; i++) {
	         		if($(yieldsSpainItem[i]).jqxCheckBox('checked'))
	         		{		
	         		   yields.push(yieldsSpainItem[i].split("-")[1]+"yr");	
	         		    itemsSpain=1;
	          			allItems=allItems+1;
	          			checkedItem.push(yieldsSpainItem[i]);
	         		}
	          	}
	         	for (i = 0; i < curvesSpainItems.length; i++) {
	         		if($(curvesSpainItems[i]).jqxCheckBox('checked'))
	         		{	curves.push(curvesSpainItems[i].split("-")[1].replace("over", "/"));	
	         		    itemsSpain=1;
		      			allItems=allItems+1;
		      			checkedItem.push(curvesSpainItems[i]);
	         		}
	         	}
	          	if(itemsSpain!=0)
	          	{
	          		sovereignYiledCurveSearchDTOlst.push({
	          		   "groupId":"6",
	       			   "yieldLst":yields,
	       			   "curveLst":curves
	       			});
	          		 yields=[];
	              	 curves=[];
	              	 
	          	}
				for (i = 0; i < crossesfrcgerItems.length; i++) {
	         		if($(crossesfrcgerItems[i]).jqxCheckBox('checked'))
	         		{		
	         		   yields.push(crossesfrcgerItems[i].split("-")[2]);	
	          			itemsfrcger=1;
	          			allItems=allItems+1;
	          			checkedItem.push(crossesfrcgerItems[i]);
	         		}
	          	}
	         	
	          	if(itemsfrcger!=0)
	          	{
	          		 sovereignCrossSearchDTOlst.push({
		            			"crossGroupId":"1",
		            			"crossGroupValue":yields
		         			});
	          		 yields=[];	
	          	}
	        	for (i = 0; i < crossesitagerItems.length; i++) {
	        		if($(crossesitagerItems[i]).jqxCheckBox('checked'))
	         		{	
	        		yields.push(crossesitagerItems[i].split("-")[2]);	
	      			itemsitager=1;
	      			allItems=allItems+1;
	      			checkedItem.push(crossesitagerItems[i]);
	         		}
		      	}
	          	if(itemsitager!=0)
	          	{
	          		 sovereignCrossSearchDTOlst.push({
		            			"crossGroupId":"2",
		            			"crossGroupValue":yields
		         			});
	          		 yields=[];	
	          	}
	          	for (i = 0; i < crossesspngerItems.length; i++) {
	          		if($(crossesspngerItems[i]).jqxCheckBox('checked'))
	         		{	
	          		yields.push(crossesspngerItems[i].split("-")[2]);	
	      			itemsspnger=1;
	      			allItems=allItems+1;
	      			checkedItem.push(crossesspngerItems[i]);
	         		}
		      	}
	          	if(itemsspnger!=0)
	          	{
	          		 sovereignCrossSearchDTOlst.push({
		            			"crossGroupId":"3",
		            			"crossGroupValue":yields
		         			});
	          		 yields=[];	
	          	}
	          	
	           	for (i = 0; i < crossesukgerItems.length; i++) {
	          		if($(crossesukgerItems[i]).jqxCheckBox('checked'))
	         			{
	          			yields.push(crossesukgerItems[i].split("-")[2]);
	          			itemsukger=1;
	      			    allItems=allItems+1;
	      				checkedItem.push(crossesukgerItems[i]);
	         	  		}
	          	}
	          	if(itemsukger!=0)
	          	{
	          	 sovereignCrossSearchDTOlst.push({
		            			"crossGroupId":"4",
		            			"crossGroupValue":yields
		         			});
	          		 yields=[];	
	          	}
	         	for (i = 0; i < crossesusagerItems.length; i++) {
	         		if($(crossesusagerItems[i]).jqxCheckBox('checked'))
	         		{		
	         		   yields.push(crossesusagerItems[i].split("-")[2]);	
	         		    itemsusager=1;
	          			allItems=allItems+1;
	          			checkedItem.push(crossesusagerItems[i]);
	         		}
	          	}
	          	if(itemsusager!=0)
	          	{
	          		 sovereignCrossSearchDTOlst.push({
		            			"crossGroupId":"5",
		            			"crossGroupValue":yields
		         			});
	          		 yields=[];	
	          	}
	          	
	         	for (i = 0; i < crossesusaukItems.length; i++) {
	         		if($(crossesusaukItems[i]).jqxCheckBox('checked'))
	         		{		
	         		   yields.push(crossesusaukItems[i].split("-")[2]);	
	         		    itemsusauk=1;
	          			allItems=allItems+1;
	          			checkedItem.push(crossesusaukItems[i]);
	         		}
	          	}
	         	
	          	if(itemsusauk!=0)
	          	{
	          		 sovereignCrossSearchDTOlst.push({
		            			"crossGroupId":"6",
		            			"crossGroupValue":yields
		         			});
	          		 yields=[];	
	          	}
	         	for (i = 0; i < crossesitafrcItems.length; i++) {
	         		if($(crossesitafrcItems[i]).jqxCheckBox('checked'))
	         		{		
	         		   yields.push(crossesitafrcItems[i].split("-")[2]);	
	         		    itemsitafrc=1;
	          			allItems=allItems+1;
	          			checkedItem.push(crossesitafrcItems[i]);
	         		}
	          	}
	          	if(itemsitafrc!=0)
	          	{ sovereignCrossSearchDTOlst.push({
		            			"crossGroupId":"7",
		            			"crossGroupValue":yields
		         			});
	          		 yields=[];	
	          	}
	          		for (i = 0; i < crossesitaspnItems.length; i++) {
	         		if($(crossesitaspnItems[i]).jqxCheckBox('checked'))
	         		{		
	         		   yields.push(crossesitaspnItems[i].split("-")[2]);	
	         		    itemsitaspn=1;
	          			allItems=allItems+1;
	          			checkedItem.push(crossesitaspnItems[i]);
	         		}
	          	}
	          	if(itemsitaspn!=0)
	          	{ sovereignCrossSearchDTOlst.push({
		            			"crossGroupId":"8",
		            			"crossGroupValue":yields
		         			});
	          		 yields=[];	
	          	}
          	}else {
				  for (i = 0; i < corporateYieldsItem.length; i++) {
         		if($(corporateYieldsItem[i]).jqxCheckBox('checked'))
         		{		
         		    corporate.push(corporateYieldsItem[i].split("#jqxCheckBox")[1]);	
         		    itemcorporate=1;
          			allItems=allItems+1;
          			checkedItem.push(corporateYieldsItem[i]);
         		}
          	}
          	if(itemcorporate!=0)
          	{ selectedSearchDTOlst.push({
	            			"groupId":"11",
	            			"selectedValues":corporate
	         			});
          		 corporate=[];	
          	}
            for (i = 0; i < creditSpreadItem.length; i++) {
         		if($(creditSpreadItem[i]).jqxCheckBox('checked'))
         		{		
         		    credits.push(creditSpreadItem[i].split("#jqxCheckBox")[1]);	
         		    itemcredits=1;
          			allItems=allItems+1;
          			checkedItem.push(creditSpreadItem[i]);
         		}
          	}
          	if(itemcredits!=0)
          	{ selectedSearchDTOlst.push({
	            			"groupId":"12",
	            			"selectedValues":credits
	         			});
          		 credits=[];	
          	}
			  }
          	if(allItems!=0)
          	{
          	json={"sovereignYiledCurveSearchDTOlst":sovereignYiledCurveSearchDTOlst,
       		       "sovereignCrossSearchDTOlst":sovereignCrossSearchDTOlst,
       		       "selectedSearchDTOlst":selectedSearchDTOlst,
       		       "fromDate":$.jqx.dataFormat.formatdate($("#dateInputFrom").jqxDateTimeInput('getDate'),  'yyyy-MM-dd'),
       		       "toDate":$.jqx.dataFormat.formatdate($("#dateInputTo").jqxDateTimeInput('getDate'),  'yyyy-MM-dd')
       		       };
       		       
          	if (allItems <= 15)
        	{
            $.ajax({
    	    	        type: "POST",
    	    	        contentType: "application/json",
    	    	        url: "/bourse/getgriddata",
    	    	        data: JSON.stringify(json),
    	    	        dataType: 'json',
    	    	        async:true,
    	    	        cache: false,
    	    	        timeout: 600000,
    	    	        success: function (data) {
    	    	        	 delete source.url;
    	    	             source.localdata=data.rows;
	    	    	         dataAdapter = new $.jqx.dataAdapter(source);
	    	    	         $('#grid').jqxGrid('hideloadelement');
	    	    	         
	    	    	         for(i=0; i<data.columns.length;i++)
	    	    	         {  if(data.columns[i].datafield=="refer_date")
	    	    	           { 
	    	    	        	 data.columns[i].cellsformat='dd-MMM-yyyy'; 
	    	    	           break;
	    	    	           }
	    	    	         }
	  						 $('#grid').jqxGrid({source:dataAdapter,
	  							                 columns: data.columns});
	  						 
	  						
			   	     	   saveFilterHistory(yieldValue,checkedItem);
	  					
    	   },
    	    	        error: function (e) {
    	    	        	
    						  console.log("ERROR : ", e);
    	
    	    	        }
    	    	    });
        	    }
               	else {
               		$('#alertFiltterMax-modal').modal('show');
              	    $('#grid').jqxGrid('hideloadelement');
               	}
          	}
          	else
          	{
          		$('#alertFiltter-modal').modal('show');
          	    $('#grid').jqxGrid('hideloadelement');
          	}
		  }
			function submitData()
			{
			  var dataDTO = {}
			  dataDTO["excelData"] = $("#data").val();
	       	  $.ajax({
	    	        type: "POST",
	    	        contentType: "application/json",
	    	        url: "/bourse/savesovereigndata",
	    	        data: JSON.stringify(dataDTO),
	    	        dataType: 'json',
	    	        async:true,
	    	        cache: false,
	    	        timeout: 600000,
	    	        success: function (data) {
	    	        	
	    	        alert("success")
	   },
	    	        error: function (e) {
	    	        	
						  console.log("ERROR : ", e);
	
	    	        }
	    	    });
			}
			 function Edit(row, event) {
				
				     isedit=true;
					 var data=$("#auditGrid").jqxGrid('getrowdata', row);	
				     oldDataJson={
					   "factor":data.factor,
		               "france":data.france,
					   "germany":data.germany,
					   "italy":data.italy,
					   "spain":data.spain,
					   "uk":data.uk,
					   "usa":data.usa,
				     };
				     selectedRow.editrow = row;
				     date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				     if(auditGridSource.url=='' || date!=filterDate)
				     { 
				    	filterDate=date;
					    delete auditGridSource.localdata;
					     auditGridSource.url='/bourse/getauditdata/'+date;
						 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
						 $('#auditGrid').jqxGrid({source:dataAdapter});
						 
					    delete curvesGridSource.localdata;
					    curvesGridSource.url='/bourse/getcurvedata/'+date;
						 dataAdapter = new $.jqx.dataAdapter(curvesGridSource);
						 $('#curvesGrid').jqxGrid({source:dataAdapter});
						 
						 delete crossesGridSource.localdata;
						 crossesGridSource.url='/bourse/getcrossauditdata/'+date;
						 dataAdapter = new $.jqx.dataAdapter(crossesGridSource);
						 $('#crossesGrid').jqxGrid({source:dataAdapter});
				     } 
				     setTimeout(function(){
				    	  if(($('#auditGrid').jqxGrid('getrows')[0].usa!=null)&&
				    		 ($('#auditGrid').jqxGrid('getrows')[0].germany!=null)&&
				    		 ($('#auditGrid').jqxGrid('getrows')[0].france!=null)&&
				    		 ($('#auditGrid').jqxGrid('getrows')[0].uk!=null)&&
				    		 ($('#auditGrid').jqxGrid('getrows')[0].italy!=null)&&
				    		 ($('#auditGrid').jqxGrid('getrows')[0].spain!=null))
						{
					    	$("#auditGrid").jqxGrid('beginrowedit', row);
					    	$("#edit"+row).css("display","none");
							$("#actionButtons"+row).css("display","contents"); 
					    	if (event) {
					    		if (event.preventDefault) {
					    			event.preventDefault();
					    		}
					    	} 
						}
				    	
				    	return false;
				     }, 300);
			    }
			  	 function EditCorporate(row, event) { 
				 iseditCorporate=true;
				 var data=$("#corporatesGrid").jqxGrid('getrowdata', row);	
					     oldDataJson={
			               "usatoaaa":data.usatoaaa,
						   "usbtobbb":data.usbtobbb,
						   "usctoccc":data.usctoccc,
						   "eurozoneatoaaa":data.eurozoneatoaaa,
						   "eurozonebtobbb":data.eurozonebtobbb,
					     };
					     selectedRow.editrow = row;
					     date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
					     if(corporatesGridSource.url=='' || date!=filterDate)
					     { 
					    	filterDate=date;
						     delete corporatesGridSource.localdata;
							 corporatesGridSource.url='/bourse/getcorporateauditdata/'+date;
							 dataAdapter = new $.jqx.dataAdapter(corporatesGridSource);
							 $('#corporatesGrid').jqxGrid({source:dataAdapter});
					     } 
					     setTimeout(function(){
					    	  if(($('#corporatesGrid').jqxGrid('getrows')[0].usatoaaa!=null)&&
					    		 ($('#corporatesGrid').jqxGrid('getrows')[0].usbtobbb!=null)&&
					    		 ($('#corporatesGrid').jqxGrid('getrows')[0].usctoccc!=null)&&
					    		 ($('#corporatesGrid').jqxGrid('getrows')[0].eurozoneatoaaa!=null)&&
					    		 ($('#corporatesGrid').jqxGrid('getrows')[0].eurozonebtobbb!=null))
							{
						    	$("#corporatesGrid").jqxGrid('beginrowedit', row);
						    	$("#edit_corporate"+row).css("display","none");
								$("#actionButtons_corporate"+row).css("display","contents"); 
						    	if (event) {
						    		if (event.preventDefault) {
						    			event.preventDefault();
						    		}
						    	} 
							}
					    	
					    	return false;
					      }, 300);
			    }
			    
			  function Update(row, event) {
				   
				   isupdate=true;
				   var dataToBeUpdated = [];
				   var updatedData = $("#auditGrid").jqxGrid('getrowdata', row);
				   selectedRow.editrow = -1;
				    $("#auditGrid").jqxGrid('endrowedit', row);
				    var updatedData = $("#auditGrid").jqxGrid('getrowdata', row);
				    var updatedDataJson={
					   "factor":updatedData.factor,
		               "france":updatedData.france,
					   "germany":updatedData.germany,
					   "italy":updatedData.italy,
					   "spain":updatedData.spain,
					   "uk":updatedData.uk,
					   "usa":updatedData.usa,
				     };
                    var keys=["factor","france","germany","italy","spain","uk","usa"];
                    var updatedCountriesJson=[];
                    for (let i = 0; i < keys.length; i++) {
	                    if(updatedDataJson[keys[i]]!=oldDataJson[keys[i]])
                          updatedCountriesJson.push({"factor": updatedDataJson.factor.replace("yr",""),
													 "value" : getCountryDbDescription(keys[i]),
													 "assetId":1,
													  "groupId":0});
	                }
                    
					dataToBeUpdated.push({
	         			   "subgroupId":"1",
	         			   "value":updatedData.usa,
	         			   "factor":updatedData.factor,
	         			   "referdate": date
	         			});
						dataToBeUpdated.push({
		         			   "subgroupId":"3",
		         			   "value":updatedData.germany,
		         			   "factor":updatedData.factor,
		         			   "referdate": date
		         			});
						dataToBeUpdated.push({
		         			   "subgroupId":"2",
		         			   "value":updatedData.france,
		         			   "factor":updatedData.factor,
		         			   "referdate": date
		         			});
						dataToBeUpdated.push({
		         			   "subgroupId":"4",
		         			   "value":updatedData.uk,
		         			   "factor":updatedData.factor,
		         			   "referdate": date
		         			});
						dataToBeUpdated.push({
		         			   "subgroupId":"5",
		         			   "value":updatedData.italy,
		         			   "factor":updatedData.factor,
		         			   "referdate": date
		         			});
						dataToBeUpdated.push({
		         			   "subgroupId":"6",
		         			   "value":updatedData.spain,
		         			   "factor":updatedData.factor,
		         			   "referdate": date
		         			});
						
						
		      	       	  $.ajax({
		      	    	        type: "POST",
		      	    	        contentType: "application/json",
		      	    	        url: "/bourse/updateauditdata",
		      	    	        data: JSON.stringify(dataToBeUpdated),
		      	    	        dataType: 'json',
		      	    	        async:true,
		      	    	        cache: false,
		      	    	        timeout: 600000,
		      	    	        success: function (data) {
			  
		                            updateRobotNewsOnChangeColumns(updatedCountriesJson);
		      	    	        	 delete curvesGridSource.localdata;
		      					    curvesGridSource.url='/bourse/getcurvedata/'+date;
		      						 dataAdapter = new $.jqx.dataAdapter(curvesGridSource);
		      						 $('#curvesGrid').jqxGrid({source:dataAdapter});
		      						 
		      						 delete crossesGridSource.localdata;
		      						 crossesGridSource.url='/bourse/getcrossauditdata/'+date;
		      						 dataAdapter = new $.jqx.dataAdapter(crossesGridSource);
		      						 $('#crossesGrid').jqxGrid({source:dataAdapter});
		      						 
		      						getFilterData(yieldValue);
		      	   },
		      	    	        error: function (e) {
		      	    	        	
		      						  console.log("ERROR : ", e);
		      	
		      	    	        }
		      	    	    });

				    if (event) {
				    	if (event.preventDefault) {
				    		event.preventDefault();
				    	}
				    }
				    return false;
			    }
			   		    function UpdateCorporate(row, event) {
				   
				   isupdateCorporate=true;
				   var dataToBeUpdated = [];
				   var updatedData = $("#corporatesGrid").jqxGrid('getrowdata', row);
				   selectedRow.editrow = -1;
				    $("#corporatesGrid").jqxGrid('endrowedit', row);
				    var updatedData = $("#corporatesGrid").jqxGrid('getrowdata', row);
				    var updatedDataJson={ 
				       "usatoaaa":updatedData.usatoaaa,
					   "usbtobbb":updatedData.usbtobbb,
					   "usctoccc":updatedData.usctoccc,
					   "eurozoneatoaaa":updatedData.eurozoneatoaaa,
					   "eurozonebtobbb":updatedData.eurozonebtobbb,
				     };
                    var keys=["usatoaaa","usbtobbb","usctoccc","eurozoneatoaaa","eurozonebtobbb"];
                    var updatedCountriesJson=[];
                    for (let i = 0; i < keys.length; i++) {
	                    if(updatedDataJson[keys[i]]!=oldDataJson[keys[i]])
                          updatedCountriesJson.push({"value" : keys[i],
													 "assetId":1,
													 "groupId":0});
	                }
                    
						dataToBeUpdated.push({
		         			   "subgroupId":"1",
		         			   "value":updatedData.usatoaaa,
		         			   "referdate": date
		         			});
						dataToBeUpdated.push({
		         			   "subgroupId":"2",
		         			   "value":updatedData.usbtobbb,
		         			   "referdate": date
		         			});
						dataToBeUpdated.push({
		         			   "subgroupId":"3",
		         			   "value":updatedData.usctoccc,
		         			   "referdate": date
		         			});
						dataToBeUpdated.push({
		         			   "subgroupId":"4",
		         			   "value":updatedData.eurozoneatoaaa,
		         			   "referdate": date
		         			});
						dataToBeUpdated.push({
		         			   "subgroupId":"5",
		         			   "value":updatedData.eurozonebtobbb,
		         			   "referdate": date
		         			});
						
		      	       	  $.ajax({
		      	    	        type: "POST",
		      	    	        contentType: "application/json",
		      	    	        url: "/bourse/updatecorporateauditdata",
		      	    	        data: JSON.stringify(dataToBeUpdated),
		      	    	        dataType: 'json',
		      	    	        async:true,
		      	    	        cache: false,
		      	    	        timeout: 600000,
		      	    	        success: function (data) {
			  
		                             updateRobotNewsOnChangeColumns(updatedCountriesJson);
		      	    	        	 
		      	    	        	 delete corporatesGridSource.localdata;
									 corporatesGridSource.url='/bourse/getcorporateauditdata/'+date;
									 dataAdapter = new $.jqx.dataAdapter(corporatesGridSource);
									 $('#corporatesGrid').jqxGrid({source:dataAdapter});
									 
									 delete creditGridSource.localdata;
									 creditGridSource.url='/bourse/getcreaditspreadauditdata/'+date;
									 dataAdapter = new $.jqx.dataAdapter(creditGridSource);
									 $('#creditAuditGrid').jqxGrid({source:dataAdapter});
		      						 
		      						 getFilterData(yieldValue);
		      	   },
		      	    	        error: function (e) {
		      	    	        	
		      						  console.log("ERROR : ", e);
		      	
		      	    	        }
		      	    	    });

				    if (event) {
				    	if (event.preventDefault) {
				    		event.preventDefault();
				    	}
				    }
				    return false;
			    }
			  function Cancel(row, event) {
				  isedit=false;
				  isupdate=false;
				   selectedRow.editrow = row;
			    	$("#auditGrid").jqxGrid('endrowedit', row, true);
			 }
			 function CancelCorporate(row, event) {
				  iseditCorporate=false;
				  isupdateCorporate=false;
				   selectedRow.editrow = row;
			    	$("#corporatesGrid").jqxGrid('endrowedit', row, true);
			 }
			  $("#auditGrid").click(function(e) {
				  e.stopPropagation(); //stops click event from reaching document
				});
			 $("#corporatesGrid").click(function(e) {
				  e.stopPropagation(); //stops click event from reaching document
				});	
			  $(document).click(function() {
				if(isedit && !isupdate)
				{  filterDate=date;
				    delete auditGridSource.localdata;
				     auditGridSource.url='/bourse/getauditdata/'+date;
					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
					 $('#auditGrid').jqxGrid({source:dataAdapter});
					 
				    delete curvesGridSource.localdata;
				    curvesGridSource.url='/bourse/getcurvedata/'+date;
					 dataAdapter = new $.jqx.dataAdapter(curvesGridSource);
					 $('#curvesGrid').jqxGrid({source:dataAdapter});
					 
					 delete crossesGridSource.localdata;
					 crossesGridSource.url='/bourse/getcrossauditdata/'+date;
					 dataAdapter = new $.jqx.dataAdapter(crossesGridSource);
					 $('#crossesGrid').jqxGrid({source:dataAdapter});
				}
				});

			  function deleteDataByDate(type)
				{
					if (type=='yields')
				    	{
					$('#alertDeleteDataByDate-modal').modal('hide'); 
					date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				          url="/bourse/deletesovereignbyreferdate/" + date
				    	}
				    else
				     	{
							 $('#alertDeleteCorporateDataByDate-modal').modal('hide'); 
							 date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				             url="/bourse/deletecorporatebyreferdate/" + date
				     	}
			     $.ajax({
			             type : "DELETE",
			             url : url,
			             success: function (result) {   
				   
					getFilterData(yieldValue);  
			        if (type=='yields')
				    	{  getAuditGridSource(); 
				        $('#alertDeleteDataByDate-modal').modal('hide');
						}
				    else
				     	{getAuditCorporateGridSource();
						  $('#alertDeleteCorporateDataByDate-modal').modal('hide');
						 }
				     	
 					$( "#successDelete" ).empty();
		 		    $( "#successDelete" ).append( "<p> All record for the date '"+date+"' has been deleted</p>" );
				    $('#alertInfoDeleteDataByDate-modal').modal('show');  
			             },
			             error: function (e) {
			                 console.log(e);
			             }
			         });
				
				
				}
			function getAuditGridSource(){
				
					 $.ajax({
			    	        contentType: "application/json",
			    	        url: "/bourse/getlatestsovereignyields",
			    	        dataType: 'text',
			    	        async:true,
			    	        cache: false,
			    	        timeout: 600000,
			    	        success: function (response) {
			    	        	
			    	        	$('#dateInputAudit').jqxDateTimeInput('setDate', new Date(response.split("-")[1]+","+response.split("-")[2]+","+response.split("-")[0]));
			    	        	    date=$.jqx.dataFormat.formatdate(new Date(response),  'dd-MM-yyyy');
			    	        	  var dbDate=  new Date(response.split("-")[1]+","+response.split("-")[2]+","+response.split("-")[0]);
								  var systemDate=new Date();
			    	        	  systemDate.setHours(0,0,0,0);
			    				  
								if( dbDate.toDateString() == systemDate.toDateString())
								 {	     
			    				    filterDate=date;
			    				    delete auditGridSource.localdata;
			    				     auditGridSource.url='/bourse/getauditdata/'+date;
			    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
			    					 $('#auditGrid').jqxGrid({source:dataAdapter});
			    					 
			    				    delete curvesGridSource.localdata;
			    				     curvesGridSource.url='/bourse/getcurvedata/'+date;
			    					 dataAdapter = new $.jqx.dataAdapter(curvesGridSource);
			    					 $('#curvesGrid').jqxGrid({source:dataAdapter});
			    					 
			    					 delete crossesGridSource.localdata;
			    					 crossesGridSource.url='/bourse/getcrossauditdata/'+date;
			    					 dataAdapter = new $.jqx.dataAdapter(crossesGridSource);
			    					 $('#crossesGrid').jqxGrid({source:dataAdapter});
			    					}
			    	        },
			    	        error: function (e) {
			    	        	
								  console.log("ERROR : ", e);
			
			    	        }
			    	    });
			
			}
	function triggerRobots()
	{
		 $.ajax({
	       	        contentType:  "application/json; charset=utf-8",
	    	        url: "/robot/callrobotsasync/"+"1/0",
	    	        dataType: 'json',
	    	        timeout: 600000,
	    	        async:true,
	    	        success: function (response) {
	    	        	
	                  },
	    	        error: function (e) {
	    	        	
						  console.log("ERROR : ", e);
	
	    	        }
	    	    });	
	}	
	
	function updateRobotNewsOnChangeColumns(ArrayOfColumns)
	{	
		 $.ajax({
       	            type: "POST",
  	    	        contentType: "application/json",
  	    	        url: "/robot/updaterobotnewsonchangecolumns",
  	    	        data: JSON.stringify(ArrayOfColumns),
	    	        dataType: 'json',
	    	        timeout: 600000,
	    	        async:true,
	    	        success: function (response) {
	    	        	
	                  },
	    	        error: function (e) {
	    	        	
						  console.log("ERROR : ", e);
	
	    	        }
	    	    });	
	}
		
 	function getCountryDbDescription(country)
	{
	  var fullName='';	
		switch(country) {
		  
		 case 'france': 
		   fullName='FRA'
		        break;
		 case 'germany': 
		   fullName='GER'
		        break;
		 case 'italy': 
		   fullName='ITA'
			    break;
		 case 'spain': 
	       fullName='SP'
			    break;
		 case 'uk': 
		   fullName='UK'
			    break;
		case 'usa': 
		   fullName='USA'
			    break;
		}
	return fullName;
	}	
	
		function toggleDivVisibility(divNum) {
		    
			location.href = "/bourse/sovereignyields?yield=" + divNum;
		}
		
		function  renderyieldSubGroup(yieldValue){	
		
		if(yieldValue==1)
		{
			$("#deleteByDate").jqxButton({  theme:'dark', width: 90, height: 30,template: "danger" });
		    $("#CancelData").jqxButton({ theme: 'dark',height:30,width:74  });
	        $("#loadData").jqxButton({ theme: 'dark',height:30,width:74 });
	          
		     for(i=0; i<soverignYieldsItem.length; i++)
			   {
		    	$(soverignYieldsItem[i]).jqxCheckBox({ theme:'dark', width: 60, height: 25, boxSize:"0px" });
		       }
		         datatextarea.addEventListener("blur", function() {
				  if($("#data").val()!="")
					  {
					  $("#dataformInput").css("display","none");
					  $("#dataInputGrid").css("display","block"); 
					  $("#dataInputButtons").css("display","block"); 
			
					  var localdata = [];

					  var dataIput =$("#data").val()
					  var dataInputRows = dataIput.split(/\r?\n/);
					  for (i = 0; i < dataInputRows.length; i++) {
					    if(dataInputRows[i]!="")
					    {
					      var rowData = dataInputRows[i].split(/\r?\t/);
					  	if(i == 0)
					  		localdata.push({
					  			"factor": "30yr",
					  			"usa": rowData[0],
					  			"germany":  rowData[1],
					  			"france": rowData[2],
					  			"uk": rowData[3],
					  			"italy":  rowData[4],
					  			"spain": rowData[5]
					  		});
					      if(i == 1)
					  		localdata.push({
					  			"factor": "10yr",
					  			"usa": rowData[0],
					  			"germany":  rowData[1],
					  			"france": rowData[2],
					  			"uk": rowData[3],
					  			"italy":  rowData[4],
					  			"spain": rowData[5]
					  		});
					  	if(i == 2)
					  		localdata.push({
					  			"factor": "5yr",
					  			"usa": rowData[0],
					  			"germany":  rowData[1],
					  			"france": rowData[2],
					  			"uk": rowData[3],
					  			"italy":  rowData[4],
					  			"spain": rowData[5]
					  		});
					  	if(i == 3)
					  		localdata.push({
					  			"factor": "2yr",
					  			"usa": rowData[0],
					  			"germany":  rowData[1],
					  			"france": rowData[2],
					  			"uk": rowData[3],
					  			"italy":  rowData[4],
					  			"spain": rowData[5]
					  		});
					    }
					  }
					  
					  var dataInputGridSource =
			            {
			                datatype: "json",
			                datafields: [
			                	{ name: 'factor', type: 'string' },
			                    { name: 'usa', type: 'string' },
			                    { name: 'germany', type: 'string' },
			                    { name: 'france', type: 'string' },
			                    { name: 'uk', type: 'string' },
			                    { name: 'italy', type: 'string' },
			                    { name: 'spain', type: 'string' }
			                ],
			                localData:localdata
			            };
			             var dataAdapter = new $.jqx.dataAdapter(dataInputGridSource);
			            // initialize jqxGrid
			            $("#dataInputGrid").jqxGrid(
			            {
			                width: '100%',
			                source: dataAdapter,  
			                theme:'dark',
			                enabletooltips: true,
			                selectionmode: 'none',
			                autoheight: true,
			                columns: [ 
			                	  { text: '', datafield: 'factor',cellclassname: 'factorBold', width: '10%'},
				                  { text: '<img height="48" width="48" src="/img/flag/united-states.png">', datafield: 'usa', width: '15%' },
				                  { text: '<img height="48" width="48" src="/img/flag/germany.png">', datafield: 'germany', width: '15%' },
				                  { text: '<img height="48" width="48" src="/img/flag/france.png">', datafield: 'france', width: '15%' },
				                  { text: '<img height="48" width="48" src="/img/flag/united-kingdom.png">', datafield: 'uk', width: '15%' },
				                  { text: '<img height="48" width="48" src="/img/flag/italy.png">', datafield: 'italy', width: '15%' },
				                  { text: '<img height="48" width="48" src="/img/flag/spain.png">', datafield: 'spain', width: '15%' }
			                ]
			            });
					  
					  }
				});
				
		        auditGridSource =
	            {    
	            localdata:auditDefaultData,
	            datatype: "json",
                datafields: [
                	{name:'factor', type: 'string' },
                    { name: 'usa', type: 'string' },
                    { name: 'germany', type: 'string' },
                    { name: 'france', type: 'string' },
                    { name: 'uk', type: 'string' },
                    { name: 'italy', type: 'string' },
                    { name: 'spain', type: 'string' }
                ],
                url:''
	            };
	             var dataAdapter = new $.jqx.dataAdapter(auditGridSource);
	           
	            $("#auditGrid").jqxGrid(
	            {
	                width: '100%',
	                source: dataAdapter,  
	                theme:'dark',
	                autoheight: true,
	                rowsheight: 32,
	                editable: true,
	                selectionmode: 'none',
	                editmode: 'selectedrow',
	                columns: [ 
	                	   { text: '',editable:false, datafield: 'Edit',width:'22%',cellsrenderer: function (row) {
		                	     // open the popup window when the user clicks a button.
		                	     
		   					return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons"+row+"\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ", event)' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
		                   }
		                  },  
	                	  { text: '',editable:false,  datafield: 'factor', width: '8%'},
		                  { text: 'USA', datafield: 'usa', width: '11.6%' },
		                  { text: 'Germany', datafield: 'germany', width: '11.6%' },
		                  { text: 'France', datafield: 'france', width: '11.6%' },
		                  { text: 'UK', datafield: 'uk', width: '11.6%' },
		                  { text: 'Italy', datafield: 'italy', width: '11.6%' },
		                  { text: 'Spain', datafield: 'spain', width: '11.6%' }
	                ]
	            });
	            
	            curvesGridSource =
		            {    
		            localdata:curvesDefaultData,
		            datatype: "json",
	                datafields: [
	                	{name:'factor', type: 'string' },
	                    { name: 'usa', type: 'string' },
	                    { name: 'germany', type: 'string' },
	                    { name: 'france', type: 'string' },
	                    { name: 'uk', type: 'string' },
	                    { name: 'italy', type: 'string' },
	                    { name: 'spain', type: 'string' }
	                ],
	                url:''
		            };
		             var dataAdapter = new $.jqx.dataAdapter(curvesGridSource);
		            // initialize jqxGrid
		            
		            $("#curvesGrid").jqxGrid(
		            {
		                width: '100%',
		                source: dataAdapter,  
		                theme:'dark',
		                autoheight: true,
		                rowsheight: 32,
		                editable: true,
		                selectionmode: 'none',
		                editmode: 'selectedrow',
		                columns: [
		                	  { text: '',editable:false,  datafield: 'factor', width: '14.28%'},
			                  { text: 'USA', datafield: 'usa', width: '14.28%' },
			                  { text: 'Germany', datafield: 'germany', width: '14.28%' },
			                  { text: 'France', datafield: 'france', width: '14.28%' },
			                  { text: 'UK', datafield: 'uk', width: '14.28%' },
			                  { text: 'Italy', datafield: 'italy', width: '14.28%' },
			                  { text: 'Spain', datafield: 'spain', width: '14.28%' }
		                ]
		            });
		            
		            crossesGridSource =
		            {    
		            localdata:crossesDefaultData,
		            datatype: "json",
	                datafields: [
	                	{name:'factor', type: 'string' },
	                    { name: 'fra_GER', type: 'string' },
	                    { name: 'ita_GER', type: 'string' },
	                    { name: 'ita_FRA', type: 'string' },
	                    { name: 'uk_GER', type: 'string' },
	                    { name: 'ita_SPN', type: 'string' },
	                    { name: 'usa_GER', type: 'string' },
	                    { name: 'usa_UK', type: 'string' },
	                    { name: 'spn_GER', type: 'string' }
	                ],
	                url:''
		            };
		             var dataAdapter = new $.jqx.dataAdapter(crossesGridSource);
		            // initialize jqxGrid
		           
		            $("#crossesGrid").jqxGrid(
		            {
		                width: '100%',
		                source: dataAdapter,  
		                theme:'dark',
		                autoheight: true,
		                rowsheight: 32,
		                editable: true,
		                selectionmode: 'none',
		                editmode: 'selectedrow',
		                columns: [
		                	  { text: '',editable:false,  datafield: 'factor', width: '11.11%'},
			                  { text: '<img height="28" width="28" src="/img/flag/fra-ger.png">', datafield: 'fra_GER', width: '11.11%' },
			                  { text: '<img height="28" width="28" src="/img/flag/ita-ger.png">', datafield: 'ita_GER', width: '11.11%' },
			                  { text: '<img height="28" width="28" src="/img/flag/ita-fra.png">', datafield: 'ita_FRA', width: '11.11%' },
			                  { text: '<img height="28" width="28" src="/img/flag/uk-ger.png">', datafield: 'uk_GER', width: '11.11%' },
			                  { text: '<img height="28" width="28" src="/img/flag/ita-spn.png">', datafield: 'ita_SPN', width: '11.11%' },
			                  { text: '<img height="28" width="28" src="/img/flag/usa-ger.png">', datafield: 'usa_GER', width: '11.11%' },
			                  { text: '<img height="28" width="28" src="/img/flag/usa-uk.png">', datafield: 'usa_UK', width: '11.11%' },
			                  { text: '<img height="28" width="28" src="/img/flag/spn-ger.png">', datafield: 'spn_GER', width: '11.11%' }
		                ]
		            });
		            
             getAuditGridSource();;
		}
		else
			if (yieldValue==2)
			{
				
		     $("#deleteCorporateByDate").jqxButton({  theme:'dark', width: 90, height: 30,template: "danger" });
			
	 	    for(i=0; i<corporateitems.length; i++)
			   {
		    	$(corporateitems[i]).jqxCheckBox({ theme:'dark', width: 60, height: 25, boxSize:"0px" });
		       }
		       
		     $("#CancelDataCorporate").jqxButton({ theme: 'dark',height:30,width:74  });
	         $("#loadDataCorporate").jqxButton({ theme: 'dark',height:30,width:74 });
	          var corporatesAuditDefaultData=[{
	             "usatoaaa": "",
	             "usbtobbb": "",
	             "usctoccc": "",
	             "eurozoneatoaaa":"",
	             "eurozonebtobbb":""
	           }];
	           
	          var creditAuditDefaultData=[{
	             "usatoaaaUsa": "",
	             "usbtobbbUsatoaaa": "",
	             "usctocccUsbtobbb": "",
	             "eurozoneatoaaaGermany":"",
	             "eurozonebtobbbEurozoneatoaaa":""
	           }];
			  			dataTextInput.addEventListener("blur", function() {
				  if($("#data-input").val()!="")
					  {
					  $("#dataformInputCorporate").css("display","none");
					  $("#dataInputGridCorporate").css("display","block"); 
					  $("#dataInputButtonsCorporate").css("display","block"); 
			
					  var localdata = [];

					  var dataIput =$("#data-input").val()
					  var dataInputRows = dataIput.split('\t');
					  
					  localdata.push({
					  			"us_atoaaa": dataInputRows[0],
					  			"us_btobbb":  dataInputRows[1],
					  			"us_ctoccc": dataInputRows[2],
					  			"eurozone_atoaaa": dataInputRows[3],
					  			"eurozone_btobbb":  dataInputRows[4]
					  		});
					      
					  
					  var dataInputGridSource =
			            {
			                datatype: "json",
			                datafields: [
			                    { name: 'us_atoaaa', type: 'string' },
			                    { name: 'us_btobbb', type: 'string' },
			                    { name: 'us_ctoccc', type: 'string' },
			                    { name: 'eurozone_atoaaa', type: 'string' },
			                    { name: 'eurozone_btobbb', type: 'string' }
			                ],
			                localData:localdata
			            };
			            
			             var dataAdapter = new $.jqx.dataAdapter(dataInputGridSource);
			            // initialize jqxGrid
			            $("#dataInputGridCorporate").jqxGrid(
			            {
			                width: '100%',
			                source: dataAdapter,  
			                theme:'dark',
			                enabletooltips: true,
			                selectionmode: 'none',
			                autoheight: true,
			                columns: [ 
			                	  { text: 'US AtoAAA "BLUECHIP"', datafield: 'us_atoaaa', width: '20%', renderer: function(text, align, height) {
						          return '<div style="margin-left: 5px;"><div>US AtoAAA</div><div>"BLUECHIP"</div></div>';
						        } },
				                  { text: 'US BtoBBB "HIGHYIELD"', datafield: 'us_btobbb', width: '20%', renderer: function(text, align, height) {
						          return '<div style="margin-left: 5px;"><div>US BtoBBB</div><div>"HIGHYIELD"</div></div>';
						        } },
				                  { text: 'US CtoCCC "JUNKBOND"', datafield: 'us_ctoccc', width: '20%', renderer: function(text, align, height) {
						          return '<div style="margin-left: 5px;"><div>US CtoCCC</div><div>"JUNKBOND"</div></div>';
						        } },
				                  { text: 'EZ AtoAAA "BLUECHIP"', datafield: 'eurozone_atoaaa', width: '20%', renderer: function(text, align, height) {
						          return '<div style="margin-left: 5px;"><div>EZ AtoAAA</div><div>"BLUECHIP"</div></div>';
						        } },
				                  { text: 'EZ BtoBBB "HIGH YIELD"', datafield: 'eurozone_btobbb', width: '20%', renderer: function(text, align, height) {
						          return '<div style="margin-left: 5px;"><div>EZ BtoBBB</div><div>"HIGH YIELD"</div></div>';
						        } }
			                ]
			            });
					  
					  }
				});
				 $("#loadDataCorporate").on('click', function(e) {
			 e.preventDefault();
			$("#loadDataCorporate").prop('disabled',true);
			document.querySelector('#loadDataCorporate').disabled = true;
			
            	var date = new Date();
            	var dataToBeInserted = [];
            	
            	var us_atoaaaObject=["1"];
            	var us_btobbbObject=["2"];
            	var us_ctocccObject=["3"];
            	var eurozone_atoaaaObject=["4"];
            	var eurozone_btobbbObject=["5"];

            	var rows = $('#dataInputGridCorporate').jqxGrid('getrows');
            	for (i = 0; i < rows.length; i++) {
            	   us_atoaaaObject.push(rows[i].us_atoaaa);
            	   us_btobbbObject.push(rows[i].us_btobbb);
            	   us_ctocccObject.push(rows[i].us_ctoccc);
            	   eurozone_atoaaaObject.push(rows[i].eurozone_atoaaa);
            	   eurozone_btobbbObject.push(rows[i].eurozone_btobbb);
            	}

            	var listObject=["us_atoaaaObject","us_btobbbObject","us_ctocccObject","eurozone_atoaaaObject","eurozone_btobbbObject"];
            	 
            	 for (i = 0; i < listObject.length; i++) {

            	     var value = eval(listObject[i]);
            		 	dataToBeInserted.push({
            			   "subgroupId":value[0],
            			   "value":value[1],
            			   "referDate": $.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
            			});
            	 }
            	 if($("#dateInput").jqxDateTimeInput('getDate')<date)
           	     {
            		 var today = $("#dateInput").jqxDateTimeInput('getDate');
            		 if(today.getDay() == 6 || today.getDay() == 0)
            		 { 
            			 $('#alert-modal-weekend').modal('show'); 
            			 return;
            		 }
            		 today=$.jqx.dataFormat.formatdate(today,  'dd-MM-yyyy')
            		 $.ajax({
	    	        contentType: "application/json",
	    	        url: "/bourse/checkifcansavecorporate/"+today,
	    	        dataType: 'json',
	    	        async:true,
	    	        cache: false,
	    	        timeout: 600000,
	    	        success: function (response) {
	    	        	if(response)
	    	        	{
							 $.ajax({
						        contentType: "application/json",
						        url: "/process/isrobottriggered/111213",
						        dataType: 'text',
								async:true,
						        cache: false,
						        timeout: 600000,
						        success: function (data) {
				      
								if(data=='true')
								   $('#alert-modal-robot').modal('show'); 
								else{
									 	  $.ajax({
						    	    	        type: "POST",
						    	    	        contentType: "application/json",
						    	    	        url: "/bourse/savecorporatedata",
						    	    	        data: JSON.stringify(dataToBeInserted),
						    	    	        dataType: 'json',
						    	    	        async:true,
						    	    	        cache: false,
						    	    	        timeout: 600000,
						    	    	        success: function (data) {
						    	    	        
												 getFilterData(yieldValue);
						    	    	        	  
						  						 dataTextInput.value="";
						  		            	  $("#dataformInputCorporate").css("display","block");
						  						  $("#dataInputButtonsCorporate").css("display","none"); 
						  						  $("#dataInputGridCorporate").css("display","none");
						  						
						  						$('#dateInputAudit').jqxDateTimeInput('setDate', $("#dateInput").jqxDateTimeInput('getDate'));
						    	        	    date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
						    	        	    
						    				     filterDate=date;
						    				     delete corporatesGridSource.localdata;
												 corporatesGridSource.url='/bourse/getcorporateauditdata/'+date;
												 dataAdapter = new $.jqx.dataAdapter(corporatesGridSource);
												 $('#corporatesGrid').jqxGrid({source:dataAdapter});
						
												
												 delete creditGridSource.localdata;
												 creditGridSource.url='/bourse/getcreaditspreadauditdata/'+date;
												 dataAdapter = new $.jqx.dataAdapter(creditGridSource);
												 $('#creditAuditGrid').jqxGrid({source:dataAdapter});
						    	    	         triggerRobotsCorporates();	
						    	    	       
						    	            },
						    	    	        error: function (e) {
						    	    	        	
						    						  console.log("ERROR : ", e);
						    	
						    	    	        }
						    	    	    });
										}
					
								},
						        error: function (e) {
						        	
										  console.log("ERROR : ", e);
					
						        }
						    });

	    	        	}
	    	        	else{
	    	        		$('#alert-modal').modal('show'); 
	    	        	}
	            },
	    	        error: function (e) {
	    	        	
						  console.log("ERROR : ", e);
	
	    	        }
	    	    });
           	     }
            	 else {
            		 $('#alertDate-modal').modal('show'); 
            	 }
             });
            
	           corporatesGridSource =
	            {    
	            localdata:corporatesAuditDefaultData,
	            datatype: "json",
                datafields: [
                    { name: 'usatoaaa', type: 'string' },
                    { name: 'usbtobbb', type: 'string' },
                    { name: 'usctoccc', type: 'string' },
                    { name: 'eurozoneatoaaa', type: 'string' },
                    { name: 'eurozonebtobbb', type: 'string' }
                ],
                url:''
	            };
	            var dataAdapter = new $.jqx.dataAdapter(corporatesGridSource);
	            
	            $("#corporatesGrid").jqxGrid(
	            {
	                width: '100%',
	                source: dataAdapter,  
	                theme:'dark',
	                autoheight: true,
	                editable: true,
	                selectionmode: 'none',
	                editmode: 'selectedrow',
	                columns: [ 
	                	   { text: '',editable:false, datafield: 'Edit',width:'22%',cellsrenderer: function (row) {
		                	return "<input class=\"edit\" type=\"button\" onclick='EditCorporate(" + row + ", event)' id=\"edit_corporate"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons_corporate"+row+"\" style=\"display:none\"><input  onclick='UpdateCorporate(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='CancelCorporate(" + row + ", event)' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
		                   }
		                  },  
		                  { text: 'US AtoAAA "BLUECHIP"', datafield: 'usatoaaa', width: '15.6%' ,  renderer: function(text, align, height) {
						          return '<div style="margin-left: 5px;"><div>US AtoAAA</div><div>"BLUECHIP"</div></div>';
						        }
						        },
		                  { text: 'US BtoBBB "HIGHYIELD"', datafield: 'usbtobbb', width: '15.6%' ,renderer: function(text, align, height) {
						          return '<div style="margin-left: 5px;"><div>US BtoBBB</div><div>"HIGHYIELD"</div></div>';
						        } },
		                  { text: 'US CtoCCC "JUNKBOND"', datafield: 'usctoccc', width: '15.6%', renderer: function(text, align, height) {
						          return '<div style="margin-left: 5px;"><div>US CtoCCC</div><div>"JUNKBOND"</div></div>';
						        }},
		                  { text: 'EZ AtoAAA "BLUECHIP"', datafield: 'eurozoneatoaaa', width: '15.6%', renderer: function(text, align, height) {
						          return '<div style="margin-left: 5px;"><div>EZ AtoAAA</div><div>"BLUECHIP"</div></div>';
						        } },
		                  { text: 'EZ BtoBBB "HIGH YIELD"', datafield: 'eurozonebtobbb', width: '15.6%', renderer: function(text, align, height) {
						          return '<div style="margin-left: 5px;"><div>EZ BtoBBB</div><div>"HIGH YIELD"</div></div>';
						        } }
	                ]
	            });
	            creditGridSource =
	            {    
	            localdata:creditAuditDefaultData,
	            datatype: "json",
                datafields: [
                    { name: 'usatoaaaUsa', type: 'string' },
                    { name: 'usbtobbbUsatoaaa', type: 'string' },
                    { name: 'usctocccUsbtobbb', type: 'string' },
                    { name: 'eurozoneatoaaaGermany', type: 'string' },
                    { name: 'eurozonebtobbbEurozoneatoaaa', type: 'string' }
                ],
                url:''
	            };
	            var dataAdapter = new $.jqx.dataAdapter(creditGridSource);
	            
	            $("#creditAuditGrid").jqxGrid(
	            {
	                width: '100%',
	                source: dataAdapter,  
	                theme:'dark',
	                autoheight: true,
	                editable: true,
	                selectionmode: 'none',
	                editmode: 'selectedrow',
	                columns: [ 
		                  { text: 'US BLUECHIP AtoAAA vs 10yr TSYS', datafield: 'usatoaaaUsa', width: '20%' , renderer: function(text, align, height) {
						          return '<div style="margin-left: 5px; font-size: .75rem;"><div>US BLUECHIP</div><div>AtoAAA vs</div><div>10yr TSYS</div></div>';
						        } },
		                  { text: 'US HIGHYIELD BtoBBB vs BLUECHIP', datafield: 'usbtobbbUsatoaaa', width: '20%' , renderer: function(text, align, height) {
						          return '<div style="margin-left: 5px; font-size: .75rem;"><div>US HIGHYIELD</div><div>BtoBBB vs</div><div>BLUECHIP</div></div>';
						        } },
		                  { text: 'US JUNKBOND CtoCCC vs HIGHYIELD', datafield: 'usctocccUsbtobbb', width: '20%', renderer: function(text, align, height) {
						          return '<div style="margin-left: 5px; font-size: .75rem;"><div>US JUNKBOND</div><div>CtoCCC vs</div><div>HIGHYIELD</div></div>';
						        } },
		                  { text: 'EZ BLUECHIP AtoAAA vs 10Y GERMANY', datafield: 'eurozoneatoaaaGermany', width: '20%' , renderer: function(text, align, height) {
						          return '<div style="margin-left: 5px; font-size: .75rem;"><div>EZ BLUECHIP</div><div>AtoAAA vs</div><div>10Y GERMANY</div></div>';
						        } },
		                  { text: 'EZ HIGHYIELD BtoBBB vs BLUECHIP AtoAAA', datafield: 'eurozonebtobbbEurozoneatoaaa', width: '20%' , renderer: function(text, align, height) {
						          return '<div style="margin-left: 5px; font-size: .75rem;"><div>EZ HIGHYIELD</div><div>BtoBBB vs</div><div>BLUECHIP AtoAAA</div></div>';
						        } }
	                ]
	            }); 
	           
				getAuditCorporateGridSource();
			}
	}
			function getAuditCorporateGridSource()
			{    
				 $.ajax({
			    	        contentType: "application/json",
			    	        url: "/bourse/getlatestcorporatesyields",
			    	        dataType: 'text',
			    	        async:true,
			    	        cache: false,
			    	        timeout: 600000,
			    	        success: function (response) {
								
								$('#dateInputAudit').jqxDateTimeInput('setDate', new Date(response.split("-")[1]+","+response.split("-")[2]+","+response.split("-")[0]));
			    	        	    corporatedate=$.jqx.dataFormat.formatdate(new Date(response),  'dd-MM-yyyy');
			    	        	  var dbDate=  new Date(response.split("-")[1]+","+response.split("-")[2]+","+response.split("-")[0]);
								  var systemDate=new Date();
			    	        	  systemDate.setHours(0,0,0,0);
			    	        	  
			    				    delete corporatesGridSource.localdata;
									 corporatesGridSource.url='/bourse/getcorporateauditdata/'+corporatedate;
									 dataAdapter = new $.jqx.dataAdapter(corporatesGridSource);
									 $('#corporatesGrid').jqxGrid({source:dataAdapter});
									 
									 delete creditGridSource.localdata;
									 creditGridSource.url='/bourse/getcreaditspreadauditdata/'+date;
									 dataAdapter = new $.jqx.dataAdapter(creditGridSource);
									 $('#creditAuditGrid').jqxGrid({source:dataAdapter});
			    	        	 },
			    	        error: function (e) {
			    	        	
								  console.log("ERROR : ", e);
			
			    	        }
			    	    });
			    	    }
			    	    
   function saveFilterHistory(yieldValue,checkedItem){
		
			 
	  						var filterHistory = { 
			   		        	  "filterHistory":checkedItem.toString(),
			   		        	  "screenName":"DATABASE_INPUT_SCREEN_SOVEREIGN-"+yieldValue
			   	     			   };
	  					   $.ajax({
			  	       	        type: "POST",
		     	    	        contentType:  "application/json; charset=utf-8",
		     	    	        url: "/bourse/savedataentryfilterhistory",
		     	    	        data: JSON.stringify(filterHistory),
		     	    	        dataType: 'json',
		     	    	        timeout: 600000,
		     	    	        success: function (response) {
		     	    	        	    
		     	                  },
		     	    	        error: function (e) {
		     	    	        	
		     						  console.log("ERROR : ", e);
		     	
		     	    	        }
		     	    	    });	
	}
	function getFilterHistory(yieldValue){
		              
		           $.ajax({
	       	        contentType:  "application/json; charset=utf-8",
	    	        url: "/bourse/getdataentryfilterhistory/"+"DATABASE_INPUT_SCREEN_SOVEREIGN-"+yieldValue,
	    	        dataType: 'json',
	    	        timeout: 600000,
	    	        async:false,
	    	        success: function (response) {
	    	        
	    	       if (response.filterHistory!=null)
	    	    	   {
	    	    	   var filterresponse = response.filterHistory;
	    	    	   for(i=0; i<filterresponse.split(",").length; i++)
		    			   {
		    		    	$(filterresponse.split(",")[i]).jqxCheckBox({checked:true});
		    		       } 
	    	    	   }
	    	       else{
					   if(yieldValue ==1)
		    	    	   for(i=0; i<soverignYieldsItem.length; i++)
		    			   {
		    		    	$(soverignYieldsItem[i]).jqxCheckBox({checked:true});
		    		       }
	    		       else if(yieldValue ==2)
	    		       	for(i=0; i<corporateitems.length; i++)
		    			   {
		    		    	$(corporateitems[i]).jqxCheckBox({checked:true});
		    		       }
	    	       }
	                  },
	    	        error: function (e) {
	    	        	
						  console.log("ERROR : ", e);
	
	    	        }
	    	    });	
	}
	
		function triggerRobotsCorporates()
	{
		 $.ajax({
	       	        contentType:  "application/json; charset=utf-8",
	    	        url: "/robot/callrobotsasync/"+"1/111213",
	    	        dataType: 'json',
	    	        timeout: 600000,
	    	        async:true,
	    	        success: function (response) {
	    	        	
	                  },
	    	        error: function (e) {
	    	        	
						  console.log("ERROR : ", e);
	
	    	        }
	    	    });	
	}	
	