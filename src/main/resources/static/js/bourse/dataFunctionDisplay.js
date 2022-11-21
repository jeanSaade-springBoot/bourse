  var checkedItem = 0;
  var gridIdIncrement = 0;
  var checkedItemid = [];
  var Items = [];
  var monthDate=new Date(); 
      monthDate.setMonth(monthDate.getMonth() - 3);
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

 var funcionFilter=["#jqxDailyChangeInPercentage",
					"#jqxDailyChangeIncrement",
					"#jqxWeeklyChangeInPercentage",
					"#jqxWeeklyChangeIncrement",
					"#jqx10yrPercentile",
					"#jqx20yrPercentile",
					"#jqxCenturyPercentile",
					"#jqx100dMovAvg",
					"#jqx200dMovAvg"
					];

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
    var RestrictDate=new Date(); 
         RestrictDate.setMonth(RestrictDate.getMonth() - 6);
         $("#dateInputFrom").jqxDateTimeInput({min: new Date(RestrictDate.getFullYear(), RestrictDate.getMonth(), RestrictDate.getDate()),  theme:'dark', width: '200px', height: '25px'});
         $("#dateInputFrom").jqxDateTimeInput('setDate', monthDate);
		 $("#dateInputTo").jqxDateTimeInput({  theme:'dark', width: '200px', height: '25px' }); 
     
	 for(i=0; i<allitems.length; i++)
	   {
    	$(allitems[i]).jqxCheckBox({ theme:'dark', width: 40, height: 25});
       }

    for(i=0; i<funcionFilter.length; i++)
	   {
    	$(funcionFilter[i]).jqxCheckBox({ theme:'dark', width: 120, height: 25});
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

          $("#jqxDailyChangeInPercentage").jqxCheckBox({checked: false });
    	  $("#jqxDailyChangeIncrement").jqxCheckBox({checked: false });
    	  $("#jqxWeeklyChangeInPercentage").jqxCheckBox({checked: false });
    	  $("#jqxWeeklyChangeIncrement").jqxCheckBox({checked: false });
		  $("#jqx10yrPercentile").jqxCheckBox({checked: false });
    	  $("#jqx20yrPercentile").jqxCheckBox({checked: false });
    	  $("#jqxCenturyPercentile").jqxCheckBox({checked: false });
	  	  $("#jqx100dMovAvg").jqxCheckBox({checked: false }); 
		  $("#jqx200dMovAvg").jqxCheckBox({checked: false });
    	  
    	  for(i=0; i<allitems.length; i++)
		   {
	    	$(allitems[i]).jqxCheckBox({disabled: false});
	       }
    	  checkedItem=0;
     	 
      });
	
     $("#show").click(function () {
    	Items = [];
 		gridIdIncrement = 0;
    	if(checkedItem>0)
    	{
    		 $("#collapseFilter").removeClass('show');
	    	 $('#grid-content').css('display', 'block');
	    	 drawGrids();
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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
  	   if(checkedItem>=4)
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

		
			async function drawGrids(){
				
				  $('#overlayChart').show(); 
			  	  $("#grids-container").empty();
				 for(i=0; i<checkedItemid.length; i++)
		   		   {
			        $('#overlay').show();
		   	  		 if(checkedItemid[i]!=null)
						{Items.push(checkedItemid[i]);
						await getgridData(checkedItemid[i],getSelectedFunction());
	                   }
		   	       }
                   $('#overlay').fadeOut();	
            
			}
			function getgridData(item,functions){
				 dataParam = { 
		 		        		"fromdate":$.jqx.dataFormat.formatdate($("#dateInputFrom").jqxDateTimeInput('getDate'),  'yyyy-MM-dd'),
		 		        	    "todate":$.jqx.dataFormat.formatdate($("#dateInputTo").jqxDateTimeInput('getDate'),  'yyyy-MM-dd'),
		 		        	    "factor":itemValue[item].factor,
		 		        	    "country":itemValue[item].country,
		 		        	    "yieldCurveCross": itemValue[item].yieldCurveCross,
		 	     			    "functions":functions
								};
								 return new Promise((resolve, reject) => {
								 $.ajax({
					  	       	        type: "POST",
				      	    	        contentType:  "application/json; charset=utf-8",
				      	    	        url: "/bourse/getgriddatafunction",
				      	    	        data: JSON.stringify(dataParam),
				      	    	        dataType: 'json',
				      	    	        timeout: 600000,
				      	    	        success: function (response) {
					 					resolve(response);
										addDataGrid(dataParam,response);
					         
									  },
			     	    	        error: function (error) {
			     	    	        	reject(error)
			     	    	        }
			     	    	    });	
 					});	
								
			}
			function addDataGrid(dataParam,data){
			 var source =
	            {
	           datatype: "json",
	           datafields: [
 		                    { name: 'referDate', type: 'string' },
 		                    { name: 'dailyInput', type: 'string' },
 		                    { name: 'value1', type: 'string' },
							{ name: 'value2', type: 'string' },
							{ name: 'value3', type: 'string' },
							{ name: 'WCI', type: 'string' },
							{ name: '10YP', type: 'string' },
							{ name: '20YP', type: 'string' },
							{ name: '100D', type: 'string' },
							{ name: '200D', type: 'string' },
							{ name: 'CP', type: 'string' }
 		                 ],
	                id: 'id',
	                localdata: data
	            };
                dataArray=['value1','value2','value3']
  				var dataAdapter = new $.jqx.dataAdapter(source);
				var gridId = "grid_"+gridIdIncrement;
				$("#grids-container").append('<div id="'+gridId+'" class= "item m-2 align-items-top"></div>');
			    dynamicColumns= getColumns(dataParam);
				$('#'+gridId).jqxGrid(
				                    {
				                    	width:(dataParam.functions.length==0)?2*110:(2+dataParam.functions.length)*110,
										height:710,
				  		                theme:'dark',
				  		                pageable: true,
				  		                pagesize: 100,
										pagesizeoptions: ['50', '100', '200'],
										source: dataAdapter,  
				  		                showfilterrow: true,
				  		                filterable: true,
				  		              //  autoheight: true,
				                        columnsresize: false,
				                        columns: dynamicColumns,
										selectionmode:'none',
				                        columngroups: [
              { text: getCountryFlagById(itemValue[Items[gridIdIncrement]].country,itemValue[Items[gridIdIncrement]].yieldCurveCross)+'<span style="font-size: 1.5rem;     vertical-align: bottom;">'+getFactorDesc(itemValue[Items[gridIdIncrement]].factor,itemValue[Items[gridIdIncrement]].yieldCurveCross)+'</span>', align: 'center', name: 'country' },
             ]
		});

      gridIdIncrement++;
		}
		
		function getColumns(dataParam){
			if (dataParam.functions.length==0)
			{
				return[     { text: ' DATE',columngroup: 'country', datafield: 'referDate', width: '50%' },
			                { text: 'DAILY INPUT', columngroup: 'country', datafield: 'dailyInput',cellclassname: 'factorBold', width: '50%'}
				       ]
			} 
			else 
			{
				columnWidth = 100/(dataParam.functions.length+2);
				columns=[ { text: ' DATE',columngroup: 'country', datafield: 'referDate', width: columnWidth+'%' },
			                { text: 'DAILY INPUT', columngroup: 'country', datafield: 'dailyInput',cellclassname: 'factorBold', width: columnWidth+'%'}]
				
				 for(j=0; j<dataParam.functions.length; j++)
				  {
					columns.push({ text: getFunctionDesc(dataParam.functions[j]),columngroup: 'country', datafield: dataArray[j] , width:columnWidth+'%'})
			      }
			return columns;
		   }
		}
		  	function getSelectedFunction(){
		
             var selectedFunctions = [];
		      
			     $("#jqxDailyChangeInPercentage").jqxCheckBox('val')?selectedFunctions.push('DCP'):'';
		         $("#jqxDailyChangeIncrement").jqxCheckBox('val')?selectedFunctions.push('DCI'):'';
				 $("#jqxWeeklyChangeInPercentage").jqxCheckBox('val')?selectedFunctions.push('WCP'):'';
		         $("#jqxWeeklyChangeIncrement").jqxCheckBox('val')?selectedFunctions.push('WCI'):'';
				 $("#jqx10yrPercentile").jqxCheckBox('val')?selectedFunctions.push('10YP'):'';
				 $("#jqx20yrPercentile").jqxCheckBox('val')?selectedFunctions.push('20YP'):'';
		         $("#jqxCenturyPercentile").jqxCheckBox('val')?selectedFunctions.push('CP'):'';
 				 $("#jqx100dMovAvg").jqxCheckBox('val')?selectedFunctions.push('100D'):'';
				 $("#jqx200dMovAvg").jqxCheckBox('val')?selectedFunctions.push('200D'):'';
				
			    return selectedFunctions;
			}
			
		function getFunctionDesc(functionCode)
		{
			var desc='';	
		   switch(functionCode) {
			  
			 case 'DCP': 
			   desc="Daily Change In %"
			        break;
			 case 'DCI': 
			   desc="Daily Change Increment"
			    break;
			 case 'WCP': 
				 desc="Weekly Change In %"
				 break;
			 case 'WCI': 
				   desc="Weekly Change Increment"
				   break;
			 case '10YP': 
				    desc="10 Yr Percentile"
				    break;
			case '20YP': 
				    desc="20 Yr Percentile"
				    break;
			case 'CP': 
				    desc="Century Percentile"
				    break;
            case '100D': 
				    desc="100d MovAvg"
				    break;
			case '200D': 
				    desc="200d MovAvg"
				    break;
			}
		return desc.toUpperCase();
		}
		function getFactorDesc(factor,type)
		{
			 var desc='';	
		if (type=='yield')
			desc= factor;
		 else if (type=='curve')
			switch(factor) {
			  
			 case '10/30': 
			   desc="10's/30's"
			        break;
			 case '5/30': 
			   desc="5's/30's"
			    break;
			 case '5/10': 
				 desc="5's/10's"
				 break;
			 case '2/10': 
				   desc="2's/10's"
				   break;
			 case '2/5': 
				    desc="2's/5's"
				    break;
			}
			else
			switch(factor) {
			  
			 case '30': 
			   desc="30yr"
			        break;
			 case '10': 
			   desc="10yr"
			    break;
			 case '5': 
				 desc="5yr"
				 break;
			 case '2': 
				   desc="2yr"
				   break;
			}
			
		return desc.toUpperCase();
		}
		function getCountryFlagById(Id,type)
		{
		  var flag='';	
		if (type!='cross')
			switch(Id) {
			  
				case '1':
					flag = '<img height="48" width="48" src="/img/flag/united-states.png">'
					break;
				case '2':
					flag = '<img height="48" width="48" src="/img/flag/france.png">'
					break;
				case '3':
					flag = '<img height="48" width="48" src="/img/flag/germany.png">'
					break;
				case '4':
					flag = '<img height="48" width="48" src="/img/flag/united-kingdom.png">'
					break;
				case '5':
					flag = '<img height="48" width="48" src="/img/flag/italy.png">'
					break;
				case '6':
					flag = '<img height="48" width="48" src="/img/flag/spain.png">'
					break;
			}
			else 
			switch(Id) {
			  
				case '1':
					flag = '<img height="48" width="48" src="/img/flag/fra-ger.png">'
					break;
				case '2':
					flag = '<img height="48" width="48" src="/img/flag/ita-ger.png">'
					break;
				case '3':
					flag = '<img height="48" width="48" src="/img/flag/spn-ger.png">'
					break;
				case '4':
					flag = '<img height="48" width="48" src="/img/flag/uk-ger.png">'
					break;
				case '5':
					flag = '<img height="48" width="48" src="/img/flag/usa-ger.png">'
					break;
				case '6':
					flag = '<img height="48" width="48" src="/img/flag/usa-uk.png">'
					break;
				case '7':
					flag = '<img height="48" width="48" src="/img/flag/ita-fra.png">'
					break;
				case '8':
					flag = '<img height="48" width="48" src="/img/flag/ita-spn.png">'
					break;

			 
			}
		return flag;
		}
		
