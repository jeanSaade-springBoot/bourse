   var checkedFunction=0;
   var allFunction=["#jqxDailyChangeInPercentage",
					"#jqxDailyChangeIncrement",
					"#jqxWeeklyChangeInPercentage",
					"#jqxWeeklyChangeIncrement",
					"#jqx10yrPercentile",
					"#jqx20yrPercentile",
					"#jqxCenturyPercentile",
					"#jqx100dMovAvg",
					"#jqx200dMovAvg"
					];
  var checkedFunctionid=[];

$('#jqxDailyChangeInPercentage').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedFunction=checkedFunction + 1;
  	    	checkedFunctionid.push("#jqxDailyChangeInPercentage");
  	    }
  	    else
  	    {
  	    	checkedFunction=checkedFunction - 1;
  	   for(i=0; i<checkedFunctionid.length; i++)
  		   {
  		   if(checkedFunctionid[i]=="#jqxDailyChangeInPercentage")
  			 delete checkedFunctionid[i];
  		   }
  	    }
  	   if(checkedFunction>=3)
  	   {
		    for(i=0; i<allFunction.length; i++)
			   {
				 $(allFunction[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedFunctionid.length; i++)
			   {
		  		 if(checkedFunctionid[i]!=null)
				    $(checkedFunctionid[i]).jqxCheckBox({disabled: false});
		  }
  	  
  	   }
  	   else{
  		 for(i=0; i<allFunction.length; i++)
		   {
			 $(allFunction[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
$('#jqxDailyChangeIncrement').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedFunction=checkedFunction + 1;
  	    	checkedFunctionid.push("#jqxDailyChangeIncrement");
  	    }
  	    else
  	    {
  	    	checkedFunction=checkedFunction - 1;
  	   for(i=0; i<checkedFunctionid.length; i++)
  		   {
  		   if(checkedFunctionid[i]=="#jqxDailyChangeIncrement")
  			 delete checkedFunctionid[i];
  		   }
  	    }
  	   if(checkedFunction>=3)
  	   {
		    for(i=0; i<allFunction.length; i++)
			   {
				 $(allFunction[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedFunctionid.length; i++)
			   {
		  		 if(checkedFunctionid[i]!=null)
				    $(checkedFunctionid[i]).jqxCheckBox({disabled: false});
		  }
  	  
  	   }
  	   else{
  		 for(i=0; i<allFunction.length; i++)
		   {
			 $(allFunction[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
$('#jqxWeeklyChangeInPercentage').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedFunction=checkedFunction + 1;
  	    	checkedFunctionid.push("#jqxWeeklyChangeInPercentage");
  	    }
  	    else
  	    {
  	    	checkedFunction=checkedFunction - 1;
  	   for(i=0; i<checkedFunctionid.length; i++)
  		   {
  		   if(checkedFunctionid[i]=="#jqxWeeklyChangeInPercentage")
  			 delete checkedFunctionid[i];
  		   }
  	    }
  	   if(checkedFunction>=3)
  	   {
		    for(i=0; i<allFunction.length; i++)
			   {
				 $(allFunction[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedFunctionid.length; i++)
			   {
		  		 if(checkedFunctionid[i]!=null)
				    $(checkedFunctionid[i]).jqxCheckBox({disabled: false});
		  }
  	  
  	   }
  	   else{
  		 for(i=0; i<allFunction.length; i++)
		   {
			 $(allFunction[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
$('#jqxWeeklyChangeIncrement').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedFunction=checkedFunction + 1;
  	    	checkedFunctionid.push("#jqxWeeklyChangeIncrement");
  	    }
  	    else
  	    {
  	    	checkedFunction=checkedFunction - 1;
  	   for(i=0; i<checkedFunctionid.length; i++)
  		   {
  		   if(checkedFunctionid[i]=="#jqxWeeklyChangeIncrement")
  			 delete checkedFunctionid[i];
  		   }
  	    }
  	   if(checkedFunction>=3)
  	   {
		    for(i=0; i<allFunction.length; i++)
			   {
				 $(allFunction[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedFunctionid.length; i++)
			   {
		  		 if(checkedFunctionid[i]!=null)
				    $(checkedFunctionid[i]).jqxCheckBox({disabled: false});
		  }
  	  
  	   }
  	   else{
  		 for(i=0; i<allFunction.length; i++)
		   {
			 $(allFunction[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
$('#jqx10yrPercentile').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedFunction=checkedFunction + 1;
  	    	checkedFunctionid.push("#jqx10yrPercentile");
  	    }
  	    else
  	    {
  	    	checkedFunction=checkedFunction - 1;
  	   for(i=0; i<checkedFunctionid.length; i++)
  		   {
  		   if(checkedFunctionid[i]=="#jqx10yrPercentile")
  			 delete checkedFunctionid[i];
  		   }
  	    }
  	   if(checkedFunction>=3)
  	   {
		    for(i=0; i<allFunction.length; i++)
			   {
				 $(allFunction[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedFunctionid.length; i++)
			   {
		  		 if(checkedFunctionid[i]!=null)
				    $(checkedFunctionid[i]).jqxCheckBox({disabled: false});
		  }
  	  
  	   }
  	   else{
  		 for(i=0; i<allFunction.length; i++)
		   {
			 $(allFunction[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
$('#jqx20yrPercentile').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedFunction=checkedFunction + 1;
  	    	checkedFunctionid.push("#jqx20yrPercentile");
  	    }
  	    else
  	    {
  	    	checkedFunction=checkedFunction - 1;
  	   for(i=0; i<checkedFunctionid.length; i++)
  		   {
  		   if(checkedFunctionid[i]=="#jqx20yrPercentile")
  			 delete checkedFunctionid[i];
  		   }
  	    }
  	   if(checkedFunction>=3)
  	   {
		    for(i=0; i<allFunction.length; i++)
			   {
				 $(allFunction[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedFunctionid.length; i++)
			   {
		  		 if(checkedFunctionid[i]!=null)
				    $(checkedFunctionid[i]).jqxCheckBox({disabled: false});
		  }
  	  
  	   }
  	   else{
  		 for(i=0; i<allFunction.length; i++)
		   {
			 $(allFunction[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
$('#jqxCenturyPercentile').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedFunction=checkedFunction + 1;
  	    	checkedFunctionid.push("#jqxCenturyPercentile");
  	    }
  	    else
  	    {
  	    	checkedFunction=checkedFunction - 1;
  	   for(i=0; i<checkedFunctionid.length; i++)
  		   {
  		   if(checkedFunctionid[i]=="#jqxCenturyPercentile")
  			 delete checkedFunctionid[i];
  		   }
  	    }
  	   if(checkedFunction>=3)
  	   {
		    for(i=0; i<allFunction.length; i++)
			   {
				 $(allFunction[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedFunctionid.length; i++)
			   {
		  		 if(checkedFunctionid[i]!=null)
				    $(checkedFunctionid[i]).jqxCheckBox({disabled: false});
		  }
  	  
  	   }
  	   else{
  		 for(i=0; i<allFunction.length; i++)
		   {
			 $(allFunction[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
$('#jqx100dMovAvg').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedFunction=checkedFunction + 1;
  	    	checkedFunctionid.push("#jqx100dMovAvg");
  	    }
  	    else
  	    {
  	    	checkedFunction=checkedFunction - 1;
  	   for(i=0; i<checkedFunctionid.length; i++)
  		   {
  		   if(checkedFunctionid[i]=="#jqx100dMovAvg")
  			 delete checkedFunctionid[i];
  		   }
  	    }
  	   if(checkedFunction>=3)
  	   {
		    for(i=0; i<allFunction.length; i++)
			   {
				 $(allFunction[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedFunctionid.length; i++)
			   {
		  		 if(checkedFunctionid[i]!=null)
				    $(checkedFunctionid[i]).jqxCheckBox({disabled: false});
		  }
  	  
  	   }
  	   else{
  		 for(i=0; i<allFunction.length; i++)
		   {
			 $(allFunction[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
$('#jqx200dMovAvg').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedFunction=checkedFunction + 1;
  	    	checkedFunctionid.push("#jqx200dMovAvg");
  	    }
  	    else
  	    {
  	    	checkedFunction=checkedFunction - 1;
  	   for(i=0; i<checkedFunctionid.length; i++)
  		   {
  		   if(checkedFunctionid[i]=="#jqx200dMovAvg")
  			 delete checkedFunctionid[i];
  		   }
  	    }
  	   if(checkedFunction>=3)
  	   {
		    for(i=0; i<allFunction.length; i++)
			   {
				 $(allFunction[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedFunctionid.length; i++)
			   {
		  		 if(checkedFunctionid[i]!=null)
				    $(checkedFunctionid[i]).jqxCheckBox({disabled: false});
		  }
  	  
  	   }
  	   else{
  		 for(i=0; i<allFunction.length; i++)
		   {
			 $(allFunction[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 