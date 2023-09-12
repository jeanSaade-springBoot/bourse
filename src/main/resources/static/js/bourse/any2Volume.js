  var checkedItem = 0;
  var checkedItemid = [];
  var monthDate=new Date(); 
  monthDate.setMonth(monthDate.getMonth() - 6);
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
  var markerSize=0;
  var showGrid=true;
  var showLegend='legendtrue';
  var fontsize = '12px';
  var chartTransparency=0;
  var fromNavigation = false;
  var isdecimal = false;
  var dataFormatIsDecimal=false;
  var notDecimal;
  var nbrOfDigits;
  var notDecimal1;
  var nbrOfDigits1;
  var hasMissingDates=false;
  
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

  var fromHistory=false;
  var historyDataParam;
  var T1;
  var T2;
  var chartType1='line';
  var chartType2='line'; 
  var yaxisformat=3;
  var dataFormat=3;
  var TestOptions;

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
	  $("div.btn-group-vertical button.btn").click(function(){
		    $("div.btn-group-vertical").find(".active").removeClass("active");
		    $(this).addClass("active");
		  });  
	   $.ajax({
	        contentType: "application/json",
	        url: "/bourse/findgraphhistorybyscreenname/any2Volume",
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
    	$(allitems[i]).jqxCheckBox({ theme:'dark', width: '100%', height: 25});
       }
	  
	  $("#Clearfilter").jqxButton({ theme: 'dark',height:30,width:74  });
      $("#show").jqxButton({ theme: 'dark',height:30,width:74 });
      
      $("#Clearfilter").click(function () {
    	 uncheckAll();
    	 for(i=0; i<allitems.length; i++)
		   {
	    	$(allitems[i]).jqxCheckBox({disabled: false});
	       }
    	  checkedItem=0;
     	 
      });
	
     $("#show").click(function () {
    	  monthDate=new Date(); 
    	  monthDate.setMonth(monthDate.getMonth() - 6);
    	  monthDate.setHours(0,0,0,0);
    	  resetActiveChartType();
    	  resetActiveFontSize();
		  resetActiveChartColor();
		  resetActiveChartColorTransparency();
		  resetActiveChartGrid();
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
  	 }); 
  	     $('#jqxCheckBoxEuribor4').on('change', function (event) {
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
   	  			          height: 525,
 						  width: 543,
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
	   	  			       labels:  { hideOverlappingLabels: false,
	   	  			         		  rotate: -70,
					                  rotateAlways: true,
					                  minHeight:30,
					        		  style: {
							        	  fontSize: fontsize,
							        	 },
							        formatter: function(value, timestamp, opts) {
											
											let a = [{day: 'numeric'}, {month: 'short'}, {year: '2-digit'}];
											let s =  (isTimestamp(value))?join(value, a, '-'):value;
											
								            return s;
								          }	 
					        	  },
   	  			            type: (itemValue[checkedItemValues[0]].GroupId==10)?'datetime':'category',
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

 			    	   
 			    	    chart1 = new ApexCharts(document.querySelector("#SubChart1"), options1);

		    	   dataParam = { 
   		        				"fromdate":fromdate,
		 		        	    "todate":todate,
		 		        	    "period":"d",
		 		        	    "subGroupId1":itemValue[checkedItemValues[0]].subGroupId,
		 		        	    "groupId1": itemValue[checkedItemValues[0]].GroupId,
		 		        	    "removeEmpty1": itemValue[checkedItemValues[0]].GroupId==15?"true":false,
   	     			   };
   	     			   hasMissingDates = itemValue[checkedItemValues[0]].GroupId==15?"true":false;
			  	       	  $.ajax({
			  	       	        type: "POST",
		      	    	        contentType:  "application/json; charset=utf-8",
		      	    	        url: "/volume/getgraphdatabytype",
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
  	    	          	  
	      	    	       chart1.updateOptions(getSubChartDailyOption(response[0].config.displayDescription,response[0].config.chartShowgrid,fontsize,response[0].config.chartshowMarkes));
		      	    
	      	    	
	      	    	
	      	    	     if (chartType1=='area')
   	    	        	{
   	    	    			chart1.updateOptions({
   	    	        		colors:  ['#F0AB2E'], //[response[0].config.chartColor],
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
   	    	        			chart1.updateOptions({
      	    	    				colors: ['#F0AB2E'],
			      				       fill: {
			      			            type:'solid',
			      			            opacity: [1,1],
			      			          }, 
			      			        stroke: {
		      	    			      	 colors: ['#F0AB2E'],
		      	    		        },
		      	    	         markers: {
		      	    				   colors: ['#F0AB2E'],
		      	    				   strokeColors:['#F0AB2E']
		      	    			     }
	      	    	    		});
	      	    	    min = Math.min.apply(null, response[0].graphResponseDTOLst.map(function(item) {
	      	    	          return item.y;
	      	    	        })),
	      	    	        max = Math.max.apply(null, response[0].graphResponseDTOLst.map(function(item) {
	      	    	          return item.y;
	      	    	        }));
	      	    	    // minvalue = parseFloat((Math.floor(min*20)/20).toFixed(2));
	      	    	   //  maxvalue = parseFloat((Math.floor(max*20)/20).toFixed(2));
	      	    	   minvalue=min;
	      	    	   maxvalue=max;
	      	    	     var valueMin = getMarginLenght(min); 
			 		     var valueMax = getMarginLenght(max);  	
	      	    	    var yaxisformat = getFormat(response[0].config.yAxisFormat);
									
	      	    	     notDecimal=yaxisformat[1];
				         nbrOfDigits=yaxisformat[0];
	      	    	    	chart1.updateOptions({
								  series:[{
							          name: itemValue[checkedItemValues[0]].title,
							          type: chartType1,
							          data: response[0].graphResponseDTOLst
							        }],
	      	    	    	  extra:{
									isDecimal: isdecimal,
									yAxisFormat:yaxisformat,
								},
	     				       yaxis: {
		     				    	  labels: {
		     				    		     minWidth: 75,maxWidth: 75,
			 				        		 style: {
			 						        	  fontSize: fontsize,
			 						        	 },
							 formatter: function(val, index) {
										 if (getFormatResult[1])
						  				  return  val.toFixed(getFormatResult[0]);
						  				else 
						  				  return  val.toFixed(getFormatResult[0]) + "%";
									      }
			 				        	  },
	     				          tickAmount: 6,
	     				    	 min: Math.sign(minvalue) == -1 ? -Math.abs(minvalue) - valueMin : Math.abs(minvalue) - valueMin,
							     max: Math.sign(maxvalue) == -1 ? -Math.abs(maxvalue) + valueMax : Math.abs(maxvalue) + valueMax,		  axisBorder: {
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
	   	  			          height: 525,
							  width: 543,
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
	   	  			       labels:  { hideOverlappingLabels: false,
	   	  			         		  rotate: -70,
					                  rotateAlways: true,
					                  minHeight:30,
					        		  style: {
							        	  fontSize: fontsize,
							        	 },
							        formatter: function(value, timestamp, opts) {
											
											let a = [{day: 'numeric'}, {month: 'short'}, {year: '2-digit'}];
											let s =  (isTimestamp(value))?join(value, a, '-'):value;
											
								            return s;
								          }	 
					        	  },
   	  			            type: (itemValue[checkedItemValues[0]].GroupId==10||itemValue[checkedItemValues[1]].GroupId==10)?'datetime':'category',
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

	 			    	   
	      	    	   	if (checkedItem==2) {
	      	    	   	  $('#overlayChart2').show(); 
	     			    	    chart2 = new ApexCharts(document.querySelector("#SubChart2"), options2);
	     					      
	     			    	 
			    	    dataParam = { 
		   		        		"fromdate":fromdate,
		 		        	    "todate":todate,
		 		        	    "period":"d",
		 		        	    "subGroupId1":itemValue[checkedItemValues[1]].subGroupId,
		 		        	    "groupId1": itemValue[checkedItemValues[1]].GroupId,
		 		        	    "removeEmpty1": itemValue[checkedItemValues[1]].GroupId==15?"true":false,
		   	     			   };
		   	     			   hasMissingDates = itemValue[checkedItemValues[1]].GroupId==15?"true":false;
			    	          $.ajax({
				  	       	        type: "POST",
			      	    	        contentType:  "application/json; charset=utf-8",
			      	    	        url: "/volume/getgraphdatabytype",
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
		    	    	          	
			      	    	       chart2.updateOptions(getSubChartDailyOption(response[0].config.displayDescription,response[0].config.chartShowgrid,fontsize,response[0].config.chartshowMarkes));
			   		      	    
			   	      	    	
				      	    	   if (chartType2=='area')
			   	    	        	{	chart2.updateOptions({
										  series:[{
								          name: itemValue[checkedItemValues[1]].title,
								          type: chartType2,
								          data: response[0].graphResponseDTOLst
								        }],
			   	    	        		colors: ['#0097fe'], // [response[0].config.chartColor],
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
			   	    	        			chart2.updateOptions({
			      	    	    				colors: ['#0097fe'],
						      				       fill: {
						      			            type:'solid',
						      			            opacity: [1,1],
						      			          }, 
						      			        stroke: {
					      	    			      	 colors: ['#0097fe'],
					      	    		        },
					      	    	         markers: {
					      	    				   colors: ['#0097fe'],
					      	    				   strokeColors:['#0097fe']
					      	    			     }
				      	    	    		});
				      	    	    min = Math.min.apply(null, response[0].graphResponseDTOLst.map(function(item) {
				      	    	          return item.y;
				      	    	        })),
				      	    	        max = Math.max.apply(null, response[0].graphResponseDTOLst.map(function(item) {
				      	    	          return item.y;
				      	    	        }));
				      	    	    // minvalue = parseFloat((Math.floor(min*20)/20).toFixed(2));
				      	    	    // maxvalue = parseFloat((Math.floor(max*20)/20).toFixed(2));
				      	    	     minvalue=min;
	      	    	  				 maxvalue=max;
	      	    	  				 var valueMin = getMarginLenght(min); 
			 		                 var valueMax = getMarginLenght(max);  	
	      	    	                 var yaxisformat = getFormat(response[0].config.yAxisFormat);
									
				      	    	     notDecimal=yaxisformat[1];
								     nbrOfDigits=yaxisformat[0];
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
						 						        	 },
												 formatter: function(val, index) {
															 if (getFormatResult[1])
											  				  return  val.toFixed(getFormatResult[0]);
											  				else 
											  				  return  val.toFixed(getFormatResult[0]) + "%";
														      }
						 				        	  },
				     				          tickAmount: 6,
				     				    	  min: Math.sign(minvalue) == -1 ? -Math.abs(minvalue) - valueMin : Math.abs(minvalue) - valueMin,
							           	 	  max: Math.sign(maxvalue) == -1 ? -Math.abs(maxvalue) + valueMax : Math.abs(maxvalue) + valueMax,
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
				  var valueMin = getMarginLenght(minvalue); 
			 	  var valueMax = getMarginLenght(maxvalue);  	
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
			 				    	          min: Math.sign(minvalue) == -1 ? -Math.abs(minvalue) - valueMin : Math.abs(minvalue) - valueMin,
							           	 	  max: Math.sign(maxvalue) == -1 ? -Math.abs(maxvalue) + valueMax : Math.abs(maxvalue) + valueMax,
				     				    	labels: {
							        		 minWidth: 75,maxWidth: 75,
							        		 style: {
									        	  fontSize: fontsize,
									        	 },
							 formatter: function(val, index) {
										 if (getFormatResult0[1])
						  				  return  val.toFixed(getFormatResult0[0]);
						  				else 
						  				  return  val.toFixed(getFormatResult0[0]) + "%";
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
				 				    	      min: Math.sign(minvalue) == -1 ? -Math.abs(minvalue) - valueMin : Math.abs(minvalue) - valueMin,
							           	 	  max: Math.sign(maxvalue) == -1 ? -Math.abs(maxvalue) + valueMax : Math.abs(maxvalue) + valueMax,
				     				    	labels: {
								        		 minWidth: 75,maxWidth: 75,
								        		 style: {
										        	  fontSize: fontsize,
										        	 },
							 formatter: function(val, index) {
										 if (getFormatResult0[1])
						  				  return  val.toFixed(getFormatResult0[0]);
						  				else 
						  				  return  val.toFixed(getFormatResult0[0]) + "%";
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
		 				    	              min: Math.sign(minvalue) == -1 ? -Math.abs(minvalue) - valueMin : Math.abs(minvalue) - valueMin,
							           	 	  max: Math.sign(maxvalue) == -1 ? -Math.abs(maxvalue) + valueMax : Math.abs(maxvalue) + valueMax,
				     			 labels: {
						        		 minWidth: 75,maxWidth: 75,
						        		 style: {
								        	  fontSize: fontsize,
								        	 },
							 		 	 formatter: function(val, index) {
										 if (getFormatResult0[1])
						  				  return  val.toFixed(getFormatResult0[0]);
						  				else 
						  				  return  val.toFixed(getFormatResult0[0]) + "%";
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
		 		        	    "period":"d",
		 		        	    "subGroupId1":itemValue[checkedItemValues[0]].subGroupId,
		 		        	    "groupId1": itemValue[checkedItemValues[0]].GroupId,
		 		        	    "subGroupId2":itemValue[checkedItemValues[1]].subGroupId,
		 		        	    "groupId2": itemValue[checkedItemValues[1]].GroupId,
		 		        	    "removeEmpty1": itemValue[checkedItemValues[0]].GroupId==15?"true":false,
		 		        	    "removeEmpty2": itemValue[checkedItemValues[1]].GroupId==15?"true":false,
		 	     			   };
		 	     			   hasMissingDates = itemValue[checkedItemValues[0]].GroupId==15?"true":false;
				        disableOptions(true);
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
					     	  			           type: (itemValue[checkedItemValues[0]].GroupId==10||itemValue[checkedItemValues[1]].GroupId==10)?'datetime':'category',
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
		      	    	        url: "/volume/getgraphdatabytype",
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
	    	    	          	    showLegend	= checkActiveChartLegend($("#gridLegend").find(".active")[0], showLegend);
	    	    	          	    
									if(itemValue[checkedItemValues[0]].GroupId==10||itemValue[checkedItemValues[1]].GroupId==10)
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
									
							        var chartConfigSettings={
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
											 
											 if(itemValue[checkedItemValues[0]].GroupId==10||itemValue[checkedItemValues[1]].GroupId==10)
											 	updateChartSelectedItemMissingDates(chartConfigSettings);
											 else
												 updateChartSelectedItem(chartConfigSettings);
									
							        $('#overlayChart').hide();
		      	   },
		      	    	        error: function (e) {
		      	    	        	
		      						  console.log("ERROR : ", e);
		      	
		      	    	        }
		      	    	    });	
			  	        graphHistory = { 
		   		        		"screenName":"any2Volume",
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
		 		        	    "period":"d",
		 		        	    "subGroupId1":itemValue[checkedItemValues[0]].subGroupId,
		 		        	    "groupId1": itemValue[checkedItemValues[0]].GroupId,
		 		        	    "removeEmpty1": itemValue[checkedItemValues[0]].GroupId==15?"true":false,
	   		        	    };
					 hasMissingDates = itemValue[checkedItemValues[0]].GroupId==15?"true":false;
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
	   	  			           type: itemValue[checkedItemValues[0]].GroupId==10?'datetime':'category',
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
	   	  			       
			         chart = new ApexCharts(document.querySelector("#mainChart"), options);
			         disableOptions(false);
						       	  $.ajax({
					  	       	        type: "POST",
				      	    	        contentType:  "application/json; charset=utf-8",
				      	    	        url: "/volume/getgraphdatabytype",
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
	      	    	         	chartType1 = checkActiveChartType($("#chartTypes").find(".active")[0],chartType1,'d');
	      	    	       	    markerSize = checkActiveChartMarker($("#chartMarker").find(".active")[0], response[0].config.chartshowMarkes);
								showGrid = checkActiveChartGrid($("#gridOptions").find(".active")[0], response[0].config.chartShowgrid);
							    showLegend	= checkActiveChartLegend($("#gridLegend").find(".active")[0], showLegend);

							   if(itemValue[checkedItemValues[0]].GroupId==10)
		      	    	          	chart.updateOptions(getChartDailyOptionMissingDates(title,response[0].config.chartShowgrid,fontsize,response[0].config.chartshowMarkes));
		      	    	          	else
		      	    	            chart.updateOptions(getChartDailyOption(title,response[0].config.chartShowgrid,fontsize,response[0].config.chartshowMarkes));
		      	    	       
							    updateChartOption();
			      	    	    	
			      	    	        min = Math.min.apply(null, response[0].graphResponseDTOLst.map(function(item) {
				      	    	          return item.y;
				      	    	        })),
				      	    	    max = Math.max.apply(null, response[0].graphResponseDTOLst.map(function(item) {
				      	    	          return item.y;
				      	    	        }));
				      	    	     // minvalue = parseFloat((Math.floor(min*20)/20).toFixed(2));
				      	    	    // maxvalue = parseFloat((Math.floor(max*20)/20).toFixed(2));
				      	    	     minvalue=min;
	      	    	  				 maxvalue=max;
	      	    	  				 	 
									 var yaxisformat = getFormat(response[0].config.yAxisFormat);
				      	    	     notDecimal=yaxisformat[1];
				                     nbrOfDigits=yaxisformat[0];	
				      	    	   
							var getFormatResult0 = getFormat(response[0].config.dataFormat);
					       
							var chartConfigSettings={
											 isDecimal:isdecimal,
											 yAxisFormat:yaxisformat,
											 fontSize:fontsize,
											 min:min,
											 max:max,
											 minvalue:minvalue,
											 maxvalue:maxvalue,
											 chartType1:chartType1,
											 getFormatResult0:getFormatResult0,
											 response:response,
											 chartColor:chartColor,
											 chartTransparency:chartTransparency,
											 checkedItem:checkedItem};
							
							updateChartSelectedItem(chartConfigSettings);
				      	    	      $('#overlayChart').hide();
				      	   },
				      	    	        error: function (e) {
				      	    	        	
				      						  console.log("ERROR : ", e);
				      	
				      	    	        }
				      	    	    });	
					  	         chart.render();
					  	       graphHistory = { 
				   		        		"screenName":"any2Volume",
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
				              
		    	               $("#dateFrom-mainChart").val(fromdate);
		    	               $("#dateTo-mainChart").val(todate);

				  inGraphNews(getSelectedFields(checkedItemValues,itemValue));
							}
		  	
			function graphfont(fontSize){
				
		    	if (typeof min1 != 'undefined' && checkedItem==2)
				 updateGraphFont2YAxis(fontSize,min1,max1,min2,max2);
				 else 
				 updateGraphFont(fontSize,minvalue,maxvalue);
		     }
				function getFormat(Format)
				{
				 var valueFormat=3;
				  var  FormatIsDecimal= false;
				  
				  if (Format!=null && Format!="")
				   { 
					 if (Format.includes("%"))
				       { FormatIsDecimal= false;
				    	   if (typeof Format.split(".")[1] != 'undefined')
				    		 valueFormat=Format.split("%")[0].split(".")[1].length;
				            	else
				            		valueFormat=0;
				       }
				   else 
				    	{
					    if (typeof Format.split(".")[1] != 'undefined')
				    	valueFormat=Format.split(".")[1].length
				    	else 
				    		valueFormat=0;
				    		
				    		FormatIsDecimal= true;	
				    	}
				   }
				   	return [valueFormat,FormatIsDecimal];
				}
		function uncheckAll() {
	     for(var i=0; i<allitems.length; i++)
		   {$(allitems[i]).jqxCheckBox({checked:false});
	       } 
		}