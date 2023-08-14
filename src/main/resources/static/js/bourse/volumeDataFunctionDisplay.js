  var checkedItem = 0;
  var gridIdIncrement = 0;
  var checkedItemid = [];
  var Items = [];
  var monthDate=new Date(); 
      monthDate.setMonth(monthDate.getMonth() - 3);
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
		popupWindow('/bourse/allnews', 'Libvol - View All News', window, 1300, 600);
	  });
    var RestrictDate=new Date(); 
         RestrictDate.setMonth(RestrictDate.getMonth() - 6);
         $("#dateInputFrom").jqxDateTimeInput({min: new Date(RestrictDate.getFullYear(), RestrictDate.getMonth(), RestrictDate.getDate()),  theme:'dark', width: '200px', height: '25px'});
         $("#dateInputFrom").jqxDateTimeInput('setDate', monthDate);
		 $("#dateInputTo").jqxDateTimeInput({  theme:'dark', width: '200px', height: '25px' }); 
		 
      $('[data-toggle="tooltip"]').tooltip();   
      
	 for(i=0; i<allitems.length; i++)
	   {
    	$(allitems[i]).jqxCheckBox({ theme:'dark', width: 50, height: 25});
       }

    for(i=0; i<funcionFilter.length; i++)
	   {
    	$(funcionFilter[i]).jqxCheckBox({ theme:'dark', width: 120, height: 25});
       }	  

	  $("#Clearfilter").jqxButton({ theme: 'dark',height:30,width:74  });
      $("#show").jqxButton({ theme: 'dark',height:30,width:74 });
      
      $("#Clearfilter").click(function () {
    	  
    	 for(var i=0; i<allitems.length; i++)
		   {$(allitems[i]).jqxCheckBox({checked:false});
	       } 
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
	  
  $('#jqxCheckBoxBund1').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxBund1");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxBund1")
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
  	 $('#jqxCheckBoxBund2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxBund2");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxBund2")
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
  	 $('#jqxCheckBoxBund1_Bund2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxBund1_Bund2");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxBund1_Bund2")
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
  	 $('#jqxCheckBoxBund1_Bund2_cp').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxBund1_Bund2_cp");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxBund1_Bund2_cp")
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
  	 $('#jqxCheckBoxBobl1').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxBobl1");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxBobl1")
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
  	 $('#jqxCheckBoxBobl2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxBobl2");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxBobl2")
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
  	 $('#jqxCheckBoxBobl1_Bobl2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxBobl1_Bobl2");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxBobl1_Bobl2")
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
  	 $('#jqxCheckBoxBuxl1').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxBuxl1");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxBuxl1")
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
  	 $('#jqxCheckBoxBuxl2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxBuxl2");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxBuxl2")
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
  	 $('#jqxCheckBoxBuxl1_Buxl2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxBuxl1_Buxl2");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxBuxl1_Buxl2")
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
  	 $('#jqxCheckBoxShatz1').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxShatz1");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxShatz1")
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
  	 $('#jqxCheckBoxShatz2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxShatz2");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxShatz2")
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
  	 $('#jqxCheckBoxShatz1_Shatz2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxShatz1_Shatz2");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxShatz1_Shatz2")
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
  	 $('#jqxCheckBoxEuribor1').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxEuribor1");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxEuribor1")
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
  	 $('#jqxCheckBoxEuribor2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxEuribor2");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxEuribor2")
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
  	 $('#jqxCheckBoxEuribor3').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxEuribor3");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxEuribor3")
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
  	 }); $('#jqxCheckBoxEuribor4').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxEuribor4");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxEuribor4")
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
  	 $('#jqxCheckBoxEuribor5').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxEuribor5");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxEuribor5")
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
  	 $('#jqxCheckBoxEuribor1_Euribor2_Euribor3_Euribor4_Euribor5').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxEuribor1_Euribor2_Euribor3_Euribor4_Euribor5");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxEuribor1_Euribor2_Euribor3_Euribor4_Euribor5")
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
		 		        	    "subgroupId":itemValue[item].subGroupId,
		 		        	    "groupId": itemValue[item].GroupId,
		 	     			    "functions":functions
								};
								 return new Promise((resolve, reject) => {
								 $.ajax({
					  	       	        type: "POST",
				      	    	        contentType:  "application/json; charset=utf-8",
				      	    	        url: "/volume/getgriddatafunction",
				      	    	        data: JSON.stringify(dataParam),
				      	    	        dataType: 'json',
				      	    	        timeout: 600000,
				      	    	        success: function (response) {
					 					resolve(response);
										addDataGrid(dataParam,response,response.gridTitle);
					         
									  },
			     	    	        error: function (error) {
			     	    	        	reject(error)
			     	    	        }
			     	    	    });	
 					});	
								
			}
			function addDataGrid(dataParam,data,title){
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
              { text: title, align: 'center', name: 'country' },
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
	