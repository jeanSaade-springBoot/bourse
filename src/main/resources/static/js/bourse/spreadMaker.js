  var checkedItem   = 0;
  var checkedItemRight   = 0;
  var checkedItemid = [];
  var monthDate     = new Date(); 
  monthDate.setMonth(monthDate.getMonth() - 3);
  monthDate.setHours(0,0,0,0);
  var startdate     = new Date();
  var date          = new Date();
  var T1;
  var T2;
  var chartType1    ='area';
  var chartType2    ='line'; 
  var mode          ="merge";
  var Items         ="";
  var fromNavigation=false;
  var chart;
  var isdecimal = false;
  var yaxisformat=3;
  var startDateF1;
  var startDateF2;
  var minvalue=0;
  var maxvalue=0;
  var chartColor=0;
  var chartTransparency=0;
  var allitems=[
	  "#jqxCheckBoxUSA-30",
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
	  "#jqxCheckBoxUSA-30_1",
	  "#jqxCheckBoxUSA-10_1",
	  "#jqxCheckBoxUSA-5_1",
	  "#jqxCheckBoxUSA-2_1",
	  "#jqxCheckBoxGermany-30_1",
	  "#jqxCheckBoxGermany-10_1",
	  "#jqxCheckBoxGermany-5_1",
	  "#jqxCheckBoxGermany-2_1",
	  "#jqxCheckBoxFrance-30_1",
	  "#jqxCheckBoxFrance-10_1",
	  "#jqxCheckBoxFrance-5_1",
	  "#jqxCheckBoxFrance-2_1",
	  "#jqxCheckBoxUk-30_1",
	  "#jqxCheckBoxUk-10_1",
	  "#jqxCheckBoxUk-5_1",
	  "#jqxCheckBoxUk-2_1",
	  "#jqxCheckBoxItaly-30_1",
	  "#jqxCheckBoxItaly-10_1",
	  "#jqxCheckBoxItaly-5_1",
	  "#jqxCheckBoxItaly-2_1",
	  "#jqxCheckBoxSpain-30_1",
	  "#jqxCheckBoxSpain-10_1",
	  "#jqxCheckBoxSpain-5_1",
	  "#jqxCheckBoxSpain-2_1",
	   
];
  var allitemsleft=[
	  "#jqxCheckBoxUSA-30",
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
	  "#jqxCheckBoxSpain-2"
];
  var allitemsright= [
	  "#jqxCheckBoxUSA-30_1",
	  "#jqxCheckBoxUSA-10_1",
	  "#jqxCheckBoxUSA-5_1",
	  "#jqxCheckBoxUSA-2_1",
	  "#jqxCheckBoxGermany-30_1",
	  "#jqxCheckBoxGermany-10_1",
	  "#jqxCheckBoxGermany-5_1",
	  "#jqxCheckBoxGermany-2_1",
	  "#jqxCheckBoxFrance-30_1",
	  "#jqxCheckBoxFrance-10_1",
	  "#jqxCheckBoxFrance-5_1",
	  "#jqxCheckBoxFrance-2_1",
	  "#jqxCheckBoxUk-30_1",
	  "#jqxCheckBoxUk-10_1",
	  "#jqxCheckBoxUk-5_1",
	  "#jqxCheckBoxUk-2_1",
	  "#jqxCheckBoxItaly-30_1",
	  "#jqxCheckBoxItaly-10_1",
	  "#jqxCheckBoxItaly-5_1",
	  "#jqxCheckBoxItaly-2_1",
	  "#jqxCheckBoxSpain-30_1",
	  "#jqxCheckBoxSpain-10_1",
	  "#jqxCheckBoxSpain-5_1",
	  "#jqxCheckBoxSpain-2_1",
	   ]
  var itemValue={
		  "#jqxCheckBoxUSA-30":{
			  "factor":"30yr",
			  "country":"1",
			  "yieldCurveCross":"spreadmaker",
			  "title":"USA 30-yr Benchmark YIELD"
			 },
"#jqxCheckBoxUSA-10":{
			  "factor":"10yr",
			  "country":"1",
			  "yieldCurveCross":"spreadmaker",
			   "title":"USA 10-yr Benchmark YIELD"
			 },
"#jqxCheckBoxUSA-5":{
			  "factor":"5yr",
			  "country":"1",
			  "yieldCurveCross":"spreadmaker",
			  "title":"USA 5-yr Benchmark YIELD"
			 },
"#jqxCheckBoxUSA-2":{
			  "factor":"2yr",
			  "country":"1",
			  "yieldCurveCross":"spreadmaker",
			  "title":"USA 2-yr Benchmark YIELD"
			 },
"#jqxCheckBoxGermany-30":{
			  "factor":"30yr",
			  "country":"3",
			  "yieldCurveCross":"spreadmaker",
			  "title":"Germany 30-yr Benchmark YIELD"
			 },
"#jqxCheckBoxGermany-10":{
			  "factor":"10yr",
			  "country":"3",
			  "yieldCurveCross":"spreadmaker",
			  "title":"Germany 10-yr Benchmark YIELD"
			 },
"#jqxCheckBoxGermany-5":{
			  "factor":"5yr",
			  "country":"3",
			  "yieldCurveCross":"spreadmaker",
			  "title":"Germany 5-yr Benchmark YIELD"
			 },
"#jqxCheckBoxGermany-2":{
			  "factor":"2yr",
			  "country":"3",
			  "yieldCurveCross":"spreadmaker",
			  "title":"Germany 2-yr Benchmark YIELD"
			 },
"#jqxCheckBoxFrance-30":{
			  "factor":"30yr",
			  "country":"2",
			  "yieldCurveCross":"spreadmaker",
			  "title":"France 30-yr Benchmark YIELD"
			 },
"#jqxCheckBoxFrance-10":{
			  "factor":"10yr",
			  "country":"2",
			  "yieldCurveCross":"spreadmaker",
			  "title":"France 10-yr Benchmark YIELD"
			 },
"#jqxCheckBoxFrance-5":{
			  "factor":"5yr",
			  "country":"2",
			  "yieldCurveCross":"spreadmaker",
			  "title":"France 5-yr Benchmark YIELD"
			  
			 },
"#jqxCheckBoxFrance-2":{
			  "factor":"2yr",
			  "country":"2",
			  "yieldCurveCross":"spreadmaker",
			  "title":"France 2-yr Benchmark YIELD"
			 },	
"#jqxCheckBoxUk-30":{
			  "factor":"30yr",
			  "country":"4",
			  "yieldCurveCross":"spreadmaker",
			  "title":"Uk 30-yr Benchmark YIELD"
			 },
"#jqxCheckBoxUk-10":{
			  "factor":"10yr",
			  "country":"4",
			  "yieldCurveCross":"spreadmaker",
			  "title":"Uk 10-yr Benchmark YIELD"
			 },
"#jqxCheckBoxUk-5":{
			  "factor":"5yr",
			  "country":"4",
			  "yieldCurveCross":"spreadmaker",
			  "title":"Uk 5-yr Benchmark YIELD"
			 },
"#jqxCheckBoxUk-2":{
			  "factor":"2yr",
			  "country":"4",
			  "yieldCurveCross":"spreadmaker",
			  "title":"Uk 2-yr Benchmark YIELD"
			 },	
"#jqxCheckBoxItaly-30":{
			  "factor":"30yr",
			  "country":"5",
			  "yieldCurveCross":"spreadmaker",
			  "title":"Italy 30-yr Benchmark YIELD"
			 },
"#jqxCheckBoxItaly-10":{
			  "factor":"10yr",
			  "country":"5",
			  "yieldCurveCross":"spreadmaker",
			  "title":"Italy 10-yr Benchmark YIELD"
			 },
"#jqxCheckBoxItaly-5":{
			  "factor":"5yr",
			  "country":"5",
			  "yieldCurveCross":"spreadmaker",
			  "title":"Italy 5-yr Benchmark YIELD"
			 },
"#jqxCheckBoxItaly-2":{
			  "factor":"2yr",
			  "country":"5",
			  "yieldCurveCross":"spreadmaker",
			  "title":"Italy 2-yr Benchmark YIELD"
			 },		
"#jqxCheckBoxSpain-30":{
			  "factor":"30yr",
			  "country":"6",
			  "yieldCurveCross":"spreadmaker",
			  "title":"Spain 30-yr Benchmark YIELD"
			 },
"#jqxCheckBoxSpain-10":{
			  "factor":"10yr",
			  "country":"6",
			  "yieldCurveCross":"spreadmaker",
			  "title":"Spain 10-yr Benchmark YIELD"
			 },
"#jqxCheckBoxSpain-5":{
			  "factor":"5yr",
			  "country":"6",
			  "yieldCurveCross":"spreadmaker",
			  "title":"Spain 5-yr Benchmark YIELD"
			 },
"#jqxCheckBoxSpain-2":{
			  "factor":"2yr",
			  "country":"6",
			  "yieldCurveCross":"spreadmaker",
			  "title":"Spain 2-yr Benchmark YIELD"
			 },	
			 "#jqxCheckBoxUSA-30_1":{
				  "factor":"30yr",
				  "country":"1",
				  "yieldCurveCross":"spreadmaker",
				  "title":"USA 30-yr Benchmark YIELD"
				 },
	"#jqxCheckBoxUSA-10_1":{
				  "factor":"10yr",
				  "country":"1",
				  "yieldCurveCross":"spreadmaker",
				   "title":"USA 10-yr Benchmark YIELD"
				 },
	"#jqxCheckBoxUSA-5_1":{
				  "factor":"5yr",
				  "country":"1",
				  "yieldCurveCross":"spreadmaker",
				  "title":"USA 5-yr Benchmark YIELD"
				 },
	"#jqxCheckBoxUSA-2_1":{
				  "factor":"2yr",
				  "country":"1",
				  "yieldCurveCross":"spreadmaker",
				  "title":"USA 2-yr Benchmark YIELD"
				 },
	"#jqxCheckBoxGermany-30_1":{
				  "factor":"30yr",
				  "country":"3",
				  "yieldCurveCross":"spreadmaker",
				  "title":"Germany 30-yr Benchmark YIELD"
				 },
	"#jqxCheckBoxGermany-10_1":{
				  "factor":"10yr",
				  "country":"3",
				  "yieldCurveCross":"spreadmaker",
				  "title":"Germany 10-yr Benchmark YIELD"
				 },
	"#jqxCheckBoxGermany-5_1":{
				  "factor":"5yr",
				  "country":"3",
				  "yieldCurveCross":"spreadmaker",
				  "title":"Germany 5-yr Benchmark YIELD"
				 },
	"#jqxCheckBoxGermany-2_1":{
				  "factor":"2yr",
				  "country":"3",
				  "yieldCurveCross":"spreadmaker",
				  "title":"Germany 2-yr Benchmark YIELD"
				 },
	"#jqxCheckBoxFrance-30_1":{
				  "factor":"30yr",
				  "country":"2",
				  "yieldCurveCross":"spreadmaker",
				  "title":"France 30-yr Benchmark YIELD"
				 },
	"#jqxCheckBoxFrance-10_1":{
				  "factor":"10yr",
				  "country":"2",
				  "yieldCurveCross":"spreadmaker",
				  "title":"France 10-yr Benchmark YIELD"
				 },
	"#jqxCheckBoxFrance-5_1":{
				  "factor":"5yr",
				  "country":"2",
				  "yieldCurveCross":"spreadmaker",
				  "title":"France 5-yr Benchmark YIELD"
				  
				 },
	"#jqxCheckBoxFrance-2_1":{
				  "factor":"2yr",
				  "country":"2",
				  "yieldCurveCross":"spreadmaker",
				  "title":"France 2-yr Benchmark YIELD"
				 },	
	"#jqxCheckBoxUk-30_1":{
				  "factor":"30yr",
				  "country":"4",
				  "yieldCurveCross":"spreadmaker",
				  "title":"Uk 30-yr Benchmark YIELD"
				 },
	"#jqxCheckBoxUk-10_1":{
				  "factor":"10yr",
				  "country":"4",
				  "yieldCurveCross":"spreadmaker",
				  "title":"Uk 10-yr Benchmark YIELD"
				 },
	"#jqxCheckBoxUk-5_1":{
				  "factor":"5yr",
				  "country":"4",
				  "yieldCurveCross":"spreadmaker",
				  "title":"Uk 5-yr Benchmark YIELD"
				 },
	"#jqxCheckBoxUk-2_1":{
				  "factor":"2yr",
				  "country":"4",
				  "yieldCurveCross":"spreadmaker",
				  "title":"Uk 2-yr Benchmark YIELD"
				 },	
	"#jqxCheckBoxItaly-30_1":{
				  "factor":"30yr",
				  "country":"5",
				  "yieldCurveCross":"spreadmaker",
				  "title":"Italy 30-yr Benchmark YIELD"
				 },
	"#jqxCheckBoxItaly-10_1":{
				  "factor":"10yr",
				  "country":"5",
				  "yieldCurveCross":"spreadmaker",
				  "title":"Italy 10-yr Benchmark YIELD"
				 },
	"#jqxCheckBoxItaly-5_1":{
				  "factor":"5yr",
				  "country":"5",
				  "yieldCurveCross":"spreadmaker",
				  "title":"Italy 5-yr Benchmark YIELD"
				 },
	"#jqxCheckBoxItaly-2_1":{
				  "factor":"2yr",
				  "country":"5",
				  "yieldCurveCross":"spreadmaker",
				  "title":"Italy 2-yr Benchmark YIELD"
				 },		
	"#jqxCheckBoxSpain-30_1":{
				  "factor":"30yr",
				  "country":"6",
				  "yieldCurveCross":"spreadmaker",
				  "title":"Spain 30-yr Benchmark YIELD"
				 },
	"#jqxCheckBoxSpain-10_1":{
				  "factor":"10yr",
				  "country":"6",
				  "yieldCurveCross":"spreadmaker",
				  "title":"Spain 10-yr Benchmark YIELD"
				 },
	"#jqxCheckBoxSpain-5_1":{
				  "factor":"5yr",
				  "country":"6",
				  "yieldCurveCross":"spreadmaker",
				  "title":"Spain 5-yr Benchmark YIELD"
				 },
	"#jqxCheckBoxSpain-2_1":{
				  "factor":"2yr",
				  "country":"6",
				  "yieldCurveCross":"spreadmaker",
				  "title":"Spain 2-yr Benchmark YIELD"
				 }
};
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
		        url: "/bourse/findgraphhistorybyscreenname/spreadmaker",
		        dataType: 'json',
		        async:true,
		        cache: false,
		        timeout: 600000,
		        success: function (data) {
		        	
		        	if (data.parameter!=null)
		        	{   checkedItemId=JSON.parse(data.parameter);
		        	     for(j=0; j<checkedItemId.length; j++)
		    			   {
		    		    	$(checkedItemId[j]).jqxCheckBox({checked:true});
		    		       } 
		        	     checkedItem=1;
		        		 $("#collapseFilter").removeClass('show');
		     	    	 $('#grid-content').css('display', 'block');
		     	    	 
		     	    	 if (JSON.parse(data.parameter)!=null)
		     	    		Items=JSON.parse(data.parameter);
		     	    	 
		        		 drawGraph();
		        	}
		        		
	},
		        error: function (e) {
		        	
						  console.log("ERROR : ", e);

		        }
		    });
	  
	  $("#button-yearForward").prop('disabled', true); 
	  $("#button-monthForward").prop('disabled', true); 

	 for(i=0; i<allitems.length; i++)
	   {
    	$(allitems[i]).jqxCheckBox({ theme:'dark', width: 120, height: 26});
       }

	  $("#Clearfilter").jqxButton({ theme: 'dark',height:30,width:74  });
	  
	  
      $("#show").jqxButton({ theme: 'dark',height:30,width:74 });
      
      $("#Clearfilter").click(function () {
    	  uncheckAll();
    	  checkedItem=0;
    	  for(i=0; i<allitems.length; i++)
		   {
	    	$(allitems[i]).jqxCheckBox({disabled: false});
	       }
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
   	  fromNavigation =false;
    if(checkedItem>0 && checkedItemRight>0)
      {	
    	 $("#collapseFilter").removeClass('show');
    	 $('#grid-content').css('display', 'block');
    	 drawGraph();
      } else 
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
    	   if(checkedItem>=1)
    	   {
  		    for(i=0; i<allitemsleft.length; i++)
  			   {
  				 $(allitemsleft[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  				    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		  }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsleft.length; i++)
  		   {
  			 $(allitemsleft[i]).jqxCheckBox({disabled: false});
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
    	   if(checkedItem>=1)
    	   {
  		    for(i=0; i<allitemsleft.length; i++)
  			   {
  		    	$(allitemsleft[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsleft.length; i++)
  		   {
  			 $(allitemsleft[i]).jqxCheckBox({disabled: false});
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
    	   if(checkedItem>=1)
    	   {
  		    for(i=0; i<allitemsleft.length; i++)
  			   {
  		    	$(allitemsleft[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsleft.length; i++)
  		   {
  			 $(allitemsleft[i]).jqxCheckBox({disabled: false});
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
    	   if(checkedItem>=1)
    	   {
  		    for(i=0; i<allitemsleft.length; i++)
  			   {
  		    	$(allitemsleft[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsleft.length; i++)
  		   {
  			 $(allitemsleft[i]).jqxCheckBox({disabled: false});
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
    	   if(checkedItem>=1)
    	   {
  		    for(i=0; i<allitemsleft.length; i++)
  			   {
  		    	$(allitemsleft[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsleft.length; i++)
  		   {
  			 $(allitemsleft[i]).jqxCheckBox({disabled: false});
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
    	   if(checkedItem>=1)
    	   {
  		    for(i=0; i<allitemsleft.length; i++)
  			   {
  		    	$(allitemsleft[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsleft.length; i++)
  		   {
  			 $(allitemsleft[i]).jqxCheckBox({disabled: false});
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
    	   if(checkedItem>=1)
    	   {
  		    for(i=0; i<allitemsleft.length; i++)
  			   {
  		    	$(allitemsleft[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsleft.length; i++)
  		   {
  			 $(allitemsleft[i]).jqxCheckBox({disabled: false});
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
    	   if(checkedItem>=1)
    	   {
  		    for(i=0; i<allitemsleft.length; i++)
  			   {
  		    	$(allitemsleft[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsleft.length; i++)
  		   {
  			 $(allitemsleft[i]).jqxCheckBox({disabled: false});
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
    	   if(checkedItem>=1)
    	   {
  		    for(i=0; i<allitemsleft.length; i++)
  			   {
  		    	$(allitemsleft[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsleft.length; i++)
  		   {
  			 $(allitemsleft[i]).jqxCheckBox({disabled: false});
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
    	   if(checkedItem>=1)
    	   {
  		    for(i=0; i<allitemsleft.length; i++)
  			   {
  		    	$(allitemsleft[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsleft.length; i++)
  		   {
  			 $(allitemsleft[i]).jqxCheckBox({disabled: false});
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
    	   if(checkedItem>=1)
    	   {
  		    for(i=0; i<allitemsleft.length; i++)
  			   {
  		    	$(allitemsleft[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsleft.length; i++)
  		   {
  			 $(allitemsleft[i]).jqxCheckBox({disabled: false});
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
    	   if(checkedItem>=1)
    	   {
  		    for(i=0; i<allitemsleft.length; i++)
  			   {
  		    	$(allitemsleft[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsleft.length; i++)
  		   {
  			 $(allitemsleft[i]).jqxCheckBox({disabled: false});
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
    	   if(checkedItem>=1)
    	   {
  		    for(i=0; i<allitemsleft.length; i++)
  			   {
  		    	$(allitemsleft[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsleft.length; i++)
  		   {
  			 $(allitemsleft[i]).jqxCheckBox({disabled: false});
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
    	   if(checkedItem>=1)
    	   {
  		    for(i=0; i<allitemsleft.length; i++)
  			   {
  		    	$(allitemsleft[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsleft.length; i++)
  		   {
  			 $(allitemsleft[i]).jqxCheckBox({disabled: false});
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
    	   if(checkedItem>=1)
    	   {
  		    for(i=0; i<allitemsleft.length; i++)
  			   {
  		    	$(allitemsleft[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsleft.length; i++)
  		   {
  			 $(allitemsleft[i]).jqxCheckBox({disabled: false});
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
    	   if(checkedItem>=1)
    	   {
  		    for(i=0; i<allitemsleft.length; i++)
  			   {
  		    	$(allitemsleft[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsleft.length; i++)
  		   {
  			 $(allitemsleft[i]).jqxCheckBox({disabled: false});
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
    	   if(checkedItem>=1)
    	   {
  		    for(i=0; i<allitemsleft.length; i++)
  			   {
  		    	$(allitemsleft[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsleft.length; i++)
  		   {
  			 $(allitemsleft[i]).jqxCheckBox({disabled: false});
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
    	   if(checkedItem>=1)
    	   {
  		    for(i=0; i<allitemsleft.length; i++)
  			   {
  		    	$(allitemsleft[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsleft.length; i++)
  		   {
  			 $(allitemsleft[i]).jqxCheckBox({disabled: false});
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
    	   if(checkedItem>=1)
    	   {
  		    for(i=0; i<allitemsleft.length; i++)
  			   {
  		    	$(allitemsleft[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsleft.length; i++)
  		   {
  			 $(allitemsleft[i]).jqxCheckBox({disabled: false});
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
    	   if(checkedItem>=1)
    	   {
  		    for(i=0; i<allitemsleft.length; i++)
  			   {
  		    	$(allitemsleft[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsleft.length; i++)
  		   {
  			 $(allitemsleft[i]).jqxCheckBox({disabled: false});
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
    	   if(checkedItem>=1)
    	   {
  		    for(i=0; i<allitemsleft.length; i++)
  			   {
  		    	$(allitemsleft[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsleft.length; i++)
  		   {
  			 $(allitemsleft[i]).jqxCheckBox({disabled: false});
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
    	   if(checkedItem>=1)
    	   {
  		    for(i=0; i<allitemsleft.length; i++)
  			   {
  		    	$(allitemsleft[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsleft.length; i++)
  		   {
  			 $(allitemsleft[i]).jqxCheckBox({disabled: false});
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
    	   if(checkedItem>=1)
    	   {
  		    for(i=0; i<allitemsleft.length; i++)
  			   {
  		    	$(allitemsleft[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsleft.length; i++)
  		   {
  			 $(allitemsleft[i]).jqxCheckBox({disabled: false});
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
    	   if(checkedItem>=1)
    	   {
  		    for(i=0; i<allitemsleft.length; i++)
  			   {
  		    	$(allitemsleft[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsleft.length; i++)
  		   {
  			 $(allitemsleft[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 
       
       $('#jqxCheckBoxUSA-30_1').on('change', function (event) {
    	   var checked = event.args.checked;
    	   if(checked)
    	    {
    	    	checkedItemRight=checkedItemRight + 1;
    	    	checkedItemid.push("#jqxCheckBoxUSA-30_1");
    	    }
    	    else
    	    {
    	    	checkedItemRight=checkedItemRight - 1;
    	   for(i=0; i<checkedItemid.length; i++)
    		   {
    		   if(checkedItemid[i]=="#jqxCheckBoxUSA-30_1")
    			 delete checkedItemid[i];
    		   }
    	    }
    	   if(checkedItemRight>=1)
    	   {
  		    for(i=0; i<allitemsright.length; i++)
  			   {
  				 $(allitemsright[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  				    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		  }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsright.length; i++)
  		   {
  			 $(allitemsright[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 

       
       $('#jqxCheckBoxUSA-10_1').on('change', function (event) {
    	   var checked = event.args.checked;
    	   if(checked)
  	    {
  	    	checkedItemRight=checkedItemRight + 1;
  	    	checkedItemid.push("#jqxCheckBoxUSA-10_1");
  	    }
  	    else {
  	    	checkedItemRight=checkedItemRight - 1;
  			   for(i=0; i<checkedItemid.length; i++)
  				   {
  				   if(checkedItemid[i]=="#jqxCheckBoxUSA-10_1")
  					 delete checkedItemid[i];
  				   }
  	    }
    	   if(checkedItemRight>=1)
    	   {
  		    for(i=0; i<allitemsright.length; i++)
  			   {
  		    	$(allitemsright[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsright.length; i++)
  		   {
  			 $(allitemsright[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 
       
       
       $('#jqxCheckBoxUSA-5_1').on('change', function (event) {
    	   var checked = event.args.checked;
    	   if(checked)
  	    {
  	    	checkedItemRight=checkedItemRight + 1;
  	    	checkedItemid.push("#jqxCheckBoxUSA-5_1");
  	    }
  	    else {
  	    	checkedItemRight=checkedItemRight - 1;
  			   for(i=0; i<checkedItemid.length; i++)
  				   {
  				   if(checkedItemid[i]=="#jqxCheckBoxUSA-5_1")
  					 delete checkedItemid[i];
  				   }
  	    }
    	   if(checkedItemRight>=1)
    	   {
  		    for(i=0; i<allitemsright.length; i++)
  			   {
  		    	$(allitemsright[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsright.length; i++)
  		   {
  			 $(allitemsright[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 
       
       
       $('#jqxCheckBoxUSA-2_1').on('change', function (event) {
    	   var checked = event.args.checked;
    	   if(checked)
  	    {
  	    	checkedItemRight=checkedItemRight + 1;
  	    	checkedItemid.push("#jqxCheckBoxUSA-2_1");
  	    }
  	    else {
  	    	checkedItemRight=checkedItemRight - 1;
  			   for(i=0; i<checkedItemid.length; i++)
  				   {
  				   if(checkedItemid[i]=="#jqxCheckBoxUSA-2_1")
  					 delete checkedItemid[i];
  				   }
  	    }
    	   if(checkedItemRight>=1)
    	   {
  		    for(i=0; i<allitemsright.length; i++)
  			   {
  		    	$(allitemsright[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsright.length; i++)
  		   {
  			 $(allitemsright[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 
       
       
       $('#jqxCheckBoxGermany-30_1').on('change', function (event) {
    	   var checked = event.args.checked;
    	   if(checked)
  	    {
  	    	checkedItemRight=checkedItemRight + 1;
  	    	checkedItemid.push("#jqxCheckBoxGermany-30_1");
  	    }
  	    else {
  	    	checkedItemRight=checkedItemRight - 1;
  			   for(i=0; i<checkedItemid.length; i++)
  				   {
  				   if(checkedItemid[i]=="#jqxCheckBoxGermany-30_1")
  					 delete checkedItemid[i];
  				   }
  	    }
    	   if(checkedItemRight>=1)
    	   {
  		    for(i=0; i<allitemsright.length; i++)
  			   {
  		    	$(allitemsright[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsright.length; i++)
  		   {
  			 $(allitemsright[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 
       
       $('#jqxCheckBoxGermany-10_1').on('change', function (event) {
    	   var checked = event.args.checked;
    	   if(checked)
  	    {
  	    	checkedItemRight=checkedItemRight + 1;
  	    	checkedItemid.push("#jqxCheckBoxGermany-10_1");
  	    }
  	    else {
  	    	checkedItemRight=checkedItemRight - 1;
  			   for(i=0; i<checkedItemid.length; i++)
  				   {
  				   if(checkedItemid[i]=="#jqxCheckBoxGermany-10_1")
  					 delete checkedItemid[i];
  				   }
  	    }
    	   if(checkedItemRight>=1)
    	   {
  		    for(i=0; i<allitemsright.length; i++)
  			   {
  		    	$(allitemsright[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsright.length; i++)
  		   {
  			 $(allitemsright[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 
       
       $('#jqxCheckBoxGermany-5_1').on('change', function (event) {
    	   var checked = event.args.checked;
    	   if(checked)
  	    {
  	    	checkedItemRight=checkedItemRight + 1;
  	    	checkedItemid.push("#jqxCheckBoxGermany-5_1");
  	    }
  	    else {
  	    	checkedItemRight=checkedItemRight - 1;
  			   for(i=0; i<checkedItemid.length; i++)
  				   {
  				   if(checkedItemid[i]=="#jqxCheckBoxGermany-5_1")
  					 delete checkedItemid[i];
  				   }
  	    }
    	   if(checkedItemRight>=1)
    	   {
  		    for(i=0; i<allitemsright.length; i++)
  			   {
  		    	$(allitemsright[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsright.length; i++)
  		   {
  			 $(allitemsright[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 
       
       $('#jqxCheckBoxGermany-2_1').on('change', function (event) {
    	   var checked = event.args.checked;
    	   if(checked)
  	    {
  	    	checkedItemRight=checkedItemRight + 1;
  	    	checkedItemid.push("#jqxCheckBoxGermany-2_1");
  	    }
  	    else {
  	    	checkedItemRight=checkedItemRight - 1;
  			   for(i=0; i<checkedItemid.length; i++)
  				   {
  				   if(checkedItemid[i]=="#jqxCheckBoxGermany-2_1")
  					 delete checkedItemid[i];
  				   }
  	    }
    	   if(checkedItemRight>=1)
    	   {
  		    for(i=0; i<allitemsright.length; i++)
  			   {
  		    	$(allitemsright[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsright.length; i++)
  		   {
  			 $(allitemsright[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 
       
       $('#jqxCheckBoxFrance-30_1').on('change', function (event) {
    	   var checked = event.args.checked;
    	   if(checked)
  	    {
  	    	checkedItemRight=checkedItemRight + 1;
  	    	checkedItemid.push("#jqxCheckBoxFrance-30_1");
  	    }
  	    else {
  	    	checkedItemRight=checkedItemRight - 1;
  			   for(i=0; i<checkedItemid.length; i++)
  				   {
  				   if(checkedItemid[i]=="#jqxCheckBoxFrance-30_1")
  					 delete checkedItemid[i];
  				   }
  	    }
    	   if(checkedItemRight>=1)
    	   {
  		    for(i=0; i<allitemsright.length; i++)
  			   {
  		    	$(allitemsright[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsright.length; i++)
  		   {
  			 $(allitemsright[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 
       
       $('#jqxCheckBoxFrance-10_1').on('change', function (event) {
    	   var checked = event.args.checked;
    	   if(checked)
  	    {
  	    	checkedItemRight=checkedItemRight + 1;
  	    	checkedItemid.push("#jqxCheckBoxFrance-10_1");
  	    }
  	    else {
  	    	checkedItemRight=checkedItemRight - 1;
  			   for(i=0; i<checkedItemid.length; i++)
  				   {
  				   if(checkedItemid[i]=="#jqxCheckBoxFrance-10_1")
  					 delete checkedItemid[i];
  				   }
  	    }
    	   if(checkedItemRight>=1)
    	   {
  		    for(i=0; i<allitemsright.length; i++)
  			   {
  		    	$(allitemsright[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsright.length; i++)
  		   {
  			 $(allitemsright[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 
       
       $('#jqxCheckBoxFrance-5_1').on('change', function (event) {
    	   var checked = event.args.checked;
    	   if(checked)
  	    {
  	    	checkedItemRight=checkedItemRight + 1;
  	    	checkedItemid.push("#jqxCheckBoxFrance-5_1");
  	    }
  	    else {
  	    	checkedItemRight=checkedItemRight - 1;
  			   for(i=0; i<checkedItemid.length; i++)
  				   {
  				   if(checkedItemid[i]=="#jqxCheckBoxFrance-5_1")
  					 delete checkedItemid[i];
  				   }
  	    }
    	   if(checkedItemRight>=1)
    	   {
  		    for(i=0; i<allitemsright.length; i++)
  			   {
  		    	$(allitemsright[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsright.length; i++)
  		   {
  			 $(allitemsright[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 
       
       $('#jqxCheckBoxFrance-2_1').on('change', function (event) {
    	   var checked = event.args.checked;
    	   if(checked)
  	    {
  	    	checkedItemRight=checkedItemRight + 1;
  	    	checkedItemid.push("#jqxCheckBoxFrance-2_1");
  	    }
  	    else {
  	    	checkedItemRight=checkedItemRight - 1;
  			   for(i=0; i<checkedItemid.length; i++)
  				   {
  				   if(checkedItemid[i]=="#jqxCheckBoxFrance-2_1")
  					 delete checkedItemid[i];
  				   }
  	    }
    	   if(checkedItemRight>=1)
    	   {
  		    for(i=0; i<allitemsright.length; i++)
  			   {
  		    	$(allitemsright[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsright.length; i++)
  		   {
  			 $(allitemsright[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 
       
       
       $('#jqxCheckBoxUk-30_1').on('change', function (event) {
    	   var checked = event.args.checked;
    	   if(checked)
  	    {
  	    	checkedItemRight=checkedItemRight + 1;
  	    	checkedItemid.push("#jqxCheckBoxUk-30_1");
  	    }
  	    else {
  	    	checkedItemRight=checkedItemRight - 1;
  			   for(i=0; i<checkedItemid.length; i++)
  				   {
  				   if(checkedItemid[i]=="#jqxCheckBoxUk-30_1")
  					 delete checkedItemid[i];
  				   }
  	    }
    	   if(checkedItemRight>=1)
    	   {
  		    for(i=0; i<allitemsright.length; i++)
  			   {
  		    	$(allitemsright[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsright.length; i++)
  		   {
  			 $(allitemsright[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 
       
       $('#jqxCheckBoxUk-10_1').on('change', function (event) {
    	   var checked = event.args.checked;
    	   if(checked)
  	    {
  	    	checkedItemRight=checkedItemRight + 1;
  	    	checkedItemid.push("#jqxCheckBoxUk-10_1");
  	    }
  	    else {
  	    	checkedItemRight=checkedItemRight - 1;
  			   for(i=0; i<checkedItemid.length; i++)
  				   {
  				   if(checkedItemid[i]=="#jqxCheckBoxUk-10_1")
  					 delete checkedItemid[i];
  				   }
  	    }
    	   if(checkedItemRight>=1)
    	   {
  		    for(i=0; i<allitemsright.length; i++)
  			   {
  		    	$(allitemsright[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsright.length; i++)
  		   {
  			 $(allitemsright[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 
       
       $('#jqxCheckBoxUk-5_1').on('change', function (event) {
    	   var checked = event.args.checked;
    	   if(checked)
  	    {
  	    	checkedItemRight=checkedItemRight + 1;
  	    	checkedItemid.push("#jqxCheckBoxUk-5_1");
  	    }
  	    else {
  	    	checkedItemRight=checkedItemRight - 1;
  			   for(i=0; i<checkedItemid.length; i++)
  				   {
  				   if(checkedItemid[i]=="#jqxCheckBoxUk-5_1")
  					 delete checkedItemid[i];
  				   }
  	    }
    	   if(checkedItemRight>=1)
    	   {
  		    for(i=0; i<allitemsright.length; i++)
  			   {
  		    	$(allitemsright[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsright.length; i++)
  		   {
  			 $(allitemsright[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 
       
       $('#jqxCheckBoxUk-2_1').on('change', function (event) {
    	   var checked = event.args.checked;
    	   if(checked)
  	    {
  	    	checkedItemRight=checkedItemRight + 1;
  	    	checkedItemid.push("#jqxCheckBoxUk-2_1");
  	    }
  	    else {
  	    	checkedItemRight=checkedItemRight - 1;
  			   for(i=0; i<checkedItemid.length; i++)
  				   {
  				   if(checkedItemid[i]=="#jqxCheckBoxUk-2_1")
  					 delete checkedItemid[i];
  				   }
  	    }
    	   if(checkedItemRight>=1)
    	   {
  		    for(i=0; i<allitemsright.length; i++)
  			   {
  		    	$(allitemsright[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsright.length; i++)
  		   {
  			 $(allitemsright[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 
       
       $('#jqxCheckBoxItaly-30_1').on('change', function (event) {
    	   var checked = event.args.checked;
    	   if(checked)
  	    {
  	    	checkedItemRight=checkedItemRight + 1;
  	    	checkedItemid.push("#jqxCheckBoxItaly-30_1");
  	    }
  	    else {
  	    	checkedItemRight=checkedItemRight - 1;
  			   for(i=0; i<checkedItemid.length; i++)
  				   {
  				   if(checkedItemid[i]=="#jqxCheckBoxItaly-30_1")
  					 delete checkedItemid[i];
  				   }
  	    }
    	   if(checkedItemRight>=1)
    	   {
  		    for(i=0; i<allitemsright.length; i++)
  			   {
  		    	$(allitemsright[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsright.length; i++)
  		   {
  			 $(allitemsright[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 
       
       $('#jqxCheckBoxItaly-10_1').on('change', function (event) {
    	   var checked = event.args.checked;
    	   if(checked)
  	    {
  	    	checkedItemRight=checkedItemRight + 1;
  	    	checkedItemid.push("#jqxCheckBoxItaly-10_1");
  	    }
  	    else {
  	    	checkedItemRight=checkedItemRight - 1;
  			   for(i=0; i<checkedItemid.length; i++)
  				   {
  				   if(checkedItemid[i]=="#jqxCheckBoxItaly-10_1")
  					 delete checkedItemid[i];
  				   }
  	    }
    	   if(checkedItemRight>=1)
    	   {
  		    for(i=0; i<allitemsright.length; i++)
  			   {
  		    	$(allitemsright[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsright.length; i++)
  		   {
  			 $(allitemsright[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 
       
       $('#jqxCheckBoxItaly-5_1').on('change', function (event) {
    	   var checked = event.args.checked;
    	   if(checked)
  	    {
  	    	checkedItemRight=checkedItemRight + 1;
  	    	checkedItemid.push("#jqxCheckBoxItaly-5_1");
  	    }
  	    else {
  	    	checkedItemRight=checkedItemRight - 1;
  			   for(i=0; i<checkedItemid.length; i++)
  				   {
  				   if(checkedItemid[i]=="#jqxCheckBoxItaly-5_1")
  					 delete checkedItemid[i];
  				   }
  	    }
    	   if(checkedItemRight>=1)
    	   {
  		    for(i=0; i<allitemsright.length; i++)
  			   {
  		    	$(allitemsright[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsright.length; i++)
  		   {
  			 $(allitemsright[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 
       
       $('#jqxCheckBoxItaly-2_1').on('change', function (event) {
    	   var checked = event.args.checked;
    	   if(checked)
  	    {
  	    	checkedItemRight=checkedItemRight + 1;
  	    	checkedItemid.push("#jqxCheckBoxItaly-2_1");
  	    }
  	    else {
  	    	checkedItemRight=checkedItemRight - 1;
  			   for(i=0; i<checkedItemid.length; i++)
  				   {
  				   if(checkedItemid[i]=="#jqxCheckBoxItaly-2_1")
  					 delete checkedItemid[i];
  				   }
  	    }
    	   if(checkedItemRight>=1)
    	   {
  		    for(i=0; i<allitemsright.length; i++)
  			   {
  		    	$(allitemsright[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsright.length; i++)
  		   {
  			 $(allitemsright[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 
       
       $('#jqxCheckBoxSpain-30_1').on('change', function (event) {
    	   var checked = event.args.checked;
    	   if(checked)
  	    {
  	    	checkedItemRight=checkedItemRight + 1;
  	    	checkedItemid.push("#jqxCheckBoxSpain-30_1");
  	    }
  	    else {
  	    	checkedItemRight=checkedItemRight - 1;
  			   for(i=0; i<checkedItemid.length; i++)
  				   {
  				   if(checkedItemid[i]=="#jqxCheckBoxSpain-30_1")
  					 delete checkedItemid[i];
  				   }
  	    }
    	   if(checkedItemRight>=1)
    	   {
  		    for(i=0; i<allitemsright.length; i++)
  			   {
  		    	$(allitemsright[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsright.length; i++)
  		   {
  			 $(allitemsright[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 
       
       $('#jqxCheckBoxSpain-10_1').on('change', function (event) {
    	   var checked = event.args.checked;
    	   if(checked)
  	    {
  	    	checkedItemRight=checkedItemRight + 1;
  	    	checkedItemid.push("#jqxCheckBoxSpain-10_1");
  	    }
  	    else {
  	    	checkedItemRight=checkedItemRight - 1;
  			   for(i=0; i<checkedItemid.length; i++)
  				   {
  				   if(checkedItemid[i]=="#jqxCheckBoxSpain-10_1")
  					 delete checkedItemid[i];
  				   }
  	    }
    	   if(checkedItemRight>=1)
    	   {
  		    for(i=0; i<allitemsright.length; i++)
  			   {
  		    	$(allitemsright[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsright.length; i++)
  		   {
  			 $(allitemsright[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 
       
       $('#jqxCheckBoxSpain-5_1').on('change', function (event) {
    	   var checked = event.args.checked;
    	   if(checked)
  	    {
  	    	checkedItemRight=checkedItemRight + 1;
  	    	checkedItemid.push("#jqxCheckBoxSpain-5_1");
  	    }
  	    else {
  	    	checkedItemRight=checkedItemRight - 1;
  			   for(i=0; i<checkedItemid.length; i++)
  				   {
  				   if(checkedItemid[i]=="#jqxCheckBoxSpain-5_1")
  					 delete checkedItemid[i];
  				   }
  	    }
    	   if(checkedItemRight>=1)
    	   {
  		    for(i=0; i<allitemsright.length; i++)
  			   {
  		    	$(allitemsright[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsright.length; i++)
  		   {
  			 $(allitemsright[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 
       
       $('#jqxCheckBoxSpain-2_1').on('change', function (event) {
    	   var checked = event.args.checked;
    	   if(checked)
  	    {
  	    	checkedItemRight=checkedItemRight + 1;
  	    	checkedItemid.push("#jqxCheckBoxSpain-2_1");
  	    }
  	    else {
  	    	checkedItemRight=checkedItemRight - 1;
  			   for(i=0; i<checkedItemid.length; i++)
  				   {
  				   if(checkedItemid[i]=="#jqxCheckBoxSpain-2_1")
  					 delete checkedItemid[i];
  				   }
  	    }
    	   if(checkedItemRight>=1)
    	   {
  		    for(i=0; i<allitemsright.length; i++)
  			   {
  		    	$(allitemsright[i]).jqxCheckBox({disabled: true});
  		     }
  		   	 
  		  	 for(i=0; i<checkedItemid.length; i++)
  			   {
  		  		 if(checkedItemid[i]!=null)
  					    $(checkedItemid[i]).jqxCheckBox({disabled: false});
  		       }
    	  
    	   }
    	   else{
    		 for(i=0; i<allitemsright.length; i++)
  		   {
  			 $(allitemsright[i]).jqxCheckBox({disabled: false});
  	     }
    	   }
    	 }); 
       
  });
		
			function uncheckAll(){
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
		    	  
				  $("#jqxCheckBoxUSA-30_1").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxUSA-10_1").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxUSA-5_1").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxUSA-2_1").jqxCheckBox({checked: false });
		    	  
		    	  $("#jqxCheckBoxGermany-30_1").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxGermany-10_1").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxGermany-5_1").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxGermany-2_1").jqxCheckBox({checked: false });
		    	  
		    	  $("#jqxCheckBoxFrance-30_1").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxFrance-10_1").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxFrance-5_1").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxFrance-2_1").jqxCheckBox({checked: false });
		    	  
		    	  $("#jqxCheckBoxUk-30_1").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxUk-10_1").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxUk-5_1").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxUk-2_1").jqxCheckBox({checked: false });
		    	  
		    	  $("#jqxCheckBoxItaly-30_1").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxItaly-10_1").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxItaly-5_1").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxItaly-2_1").jqxCheckBox({checked: false });
		    	  
		    	  $("#jqxCheckBoxSpain-30_1").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxSpain-10_1").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxSpain-5_1").jqxCheckBox({checked: false });
		    	  $("#jqxCheckBoxSpain-2_1").jqxCheckBox({checked: false });

			}
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
			
			function drawGraph(){
				mode="merge";
				var dataParam;
                var checkedItemValues = [];
				
				var fontsize='12px';
				var fromdate = formatDate(monthDate);
				var todate = formatDate(date);
				var cat1,cat2;
				$("#mainChart").html("");
				$("#mainChart").css("display","block");
				
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
  	  			          height: 450,
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
  	         colors: ["#F0AB2E", "#0097FE","#F9E79F","#7e95d9","#FAD7A0","#a3a3a5"],
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
   	    	        chart = new ApexCharts(document.querySelector("#mainChart"), options);
   	    	        chart.render();
   	    	        
		    		  if ((checkedItem+checkedItemRight)==2) {
		    			 for(i=0; i<checkedItemid.length; i++)
				   		   {
				   	  		 if(checkedItemid[i]!=null)
				   	  		  checkedItemValues.push(checkedItemid[i]);
				   	       }
		    			 
		    			 for(i=0; i<checkedItemValues.length; i++)
				   		   {
				   	  		 if(checkedItemValues[i].includes("_1"))
				   	  		 cat1=checkedItemValues[i].split("_")[0];
				   	  		 else 
				   	  		  cat2=checkedItemValues[i];
				   	       }
		    			 if (cat1==cat2)
		    				 {
		    				  $('#alertCategory-modal').modal('show');
		    				  $("#collapseFilter").addClass('show');
		    				  return;
		    				 }
				        dataParam = { 
		 		        		"fromdate":fromdate,
		 		        	    "todate":todate,
		 		        	    "dailyOrWeekly":"d",
		 		        	    "factor1":itemValue[checkedItemValues[0]].factor,
		 		        	    "country1":itemValue[checkedItemValues[0]].country,
		 		        	    "yieldCurveCross1": itemValue[checkedItemValues[0]].yieldCurveCross,
		 		        	    "minusfactor":itemValue[checkedItemValues[1]].factor,
		 		        	    "minuscountry":itemValue[checkedItemValues[1]].country
		 	     			   };
				 
						 if(checkedItemValues.length>1)
					        	title=itemValue[checkedItemValues[0]].title +" vs "+ itemValue[checkedItemValues[1]].title 
					        		else 
					        			title=itemValue[checkedItemValues[0]].title
					        			
					        			$('#overlayChart').show();
			       		
			  	       	  $.ajax({
			  	       	        type: "POST",
		      	    	        contentType:  "application/json; charset=utf-8",
		      	    	        url: "/bourse/getgraphdatalistconfig",
		      	    	        data: JSON.stringify(dataParam),
		      	    	        dataType: 'json',
		      	    	        timeout: 600000,
		      	    	        success: function (response) {
		      	    	        	startDateF1=response[0].config[0].startDate;
		      	    	        	startDateF2=response[0].config[1].startDate;
		      	    	        	 if (startDateF1!=null)
				      	    	        	startDateF1 = new Date(startDateF1.split("-")[1]+"-"+startDateF1.split("-")[0]+"-"+startDateF1.split("-")[2]);
				      	    	        if (startDateF2!=null)
				      	    	        	 startDateF2 = new Date(startDateF2.split("-")[1]+"-"+startDateF2.split("-")[0]+"-"+startDateF2.split("-")[2]);
			      	    	        	var dates=[];
		      	    
		      	    	      		T1=response[0].config[0].displayDescription==null?itemValue[checkedItemValues[0]].title:response[0].config[0].displayDescription;
		      	    	        	T2=response[0].config[1].displayDescription==null?itemValue[checkedItemValues[1]].title:response[0].config[1].displayDescription;
		      	    	        	title= T1 +" vs "+ T2;
		      	    	        	var getFormatResult = getFormat(response[0].config[0].dataFormat);
		      	    	      	T1H=response[0].config[0].columnName==null?itemValue[checkedItemValues[0]].title:response[0].config[0].columnName;
	      	    	        	T2H=response[0].config[1].columnName==null?itemValue[checkedItemValues[1]].title:response[0].config[1].columnName;
	      	    	        
		      	    	        	titleOnHover= T1H +" vs "+ T2H;

		      	    	        	 if (response[0].config[0].yAxisFormat!=null && response[0].config[0].yAxisFormat!="")
			      	    	           { 
			      	    	        	 if (response[0].config[0].yAxisFormat.includes("%"))
				      	    	           { isdecimal= false;
				      	    	        	   if (typeof response[0].config[0].yAxisFormat.split(".")[1] != 'undefined')
				      	    	        		 yaxisformat=response[0].config[0].yAxisFormat.split("%")[0].split(".")[1].length;
					      	    	            	else
					      	    	            		yaxisformat=0;
				      	    	           }
			      	    	           else 
			      	    	            	{
			      	    	        	    if (typeof response[0].config[0].yAxisFormat.split(".")[1] != 'undefined')
			      	    	            	yaxisformat=response[0].config[0].yAxisFormat.split(".")[1].length
			      	    	            	else 
			      	    	            		yaxisformat=0
			      	    	            		
			      	    	            	 isdecimal= true;	
			      	    	            	}
			      	    	           }
			      	    	           else
			      	    	        	 yaxisformat=3;
		      	    	        	var dbchartType1=response[0].config[0].chartType;
		      	    	        	 chartType1 = (getChartType(dbchartType1)[0]!='area')?getChartType(dbchartType1)[0]:'line';
									
		      	    	        chartDbFontSize = response[0].config[0].chartSize;
		      	    	        chartColor=checkActiveChartColor($("#chartColor").find(".active")[0],response[0].config[0].chartColor);
							    chartTransparency=eval(response[0].config.chartTransparency);
			      	    	    fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0],chartDbFontSize);
	      	    	         	chartType1 = checkActiveChartType($("#chartTypes").find(".active")[0],chartType1,true);
	      	    	       	   
		      	    	       	chart.updateOptions(getChartDailyOption(title,response[0].config[0].chartShowgrid,fontsize,response[0].config[0].chartshowMarkes));
		      	    	        updateChartOption(true);
	    	   		 
		      	    	               min = Math.min.apply(null, response[0].graphResponseDTOLst.map(function(item) {
				      	    	          return item.y;
				      	    	        })),
				      	    	        max = Math.max.apply(null, response[0].graphResponseDTOLst.map(function(item) {
				      	    	          return item.y;
				      	    	        }));
		      	    	          
				      	    	     minvalue = parseFloat((Math.floor(min*20)/20).toFixed(2));
				      	    	     maxvalue = parseFloat((Math.floor(max*20)/20).toFixed(2));
				      	    	    	chart.updateOptions({
				      	    	    		 stroke: {
				      	    	 		      colors: chartType1=="area"? ["#ffffff"]:[chartColor=='#44546a'?'#2e75b6':chartColor],
				      	    	 	        },
				      	    	       markers: {
				      	    	 			   colors: chartType1=="area"?"#ffffff":[chartColor=='#44546a'?'#2e75b6':chartColor],
				      	    	 			   strokeColors: chartType1=="area"?"#ffffff":[chartColor=='#44546a'?'#2e75b6':chartColor]
				      	    	 		     },
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
							          name: title,
							          type: chartType1,
							          data: response[0].graphResponseDTOLst
							        }])
							        $('#overlayChart').hide();
		      	   },
		      	    	        error: function (e) {
		      	    	        	
		      						  console.log("ERROR : ", e);
		      	
		      	    	        }
		      	    	    });	
			  	    	graphHistory = { 
						   		"screenName":"spreadmaker",
						   	    "parameter":JSON.stringify(checkedItemValues)
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
							}
			function graphfont(fontSize){
		    	 updateGraphFont(fontSize,minvalue,maxvalue);
		     }
			
		  