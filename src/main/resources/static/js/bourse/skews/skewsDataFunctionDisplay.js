  var checkedItem = 0;
  var gridIdIncrement = 0;
  var checkedItemid = [];
  var Items = [];
  var monthDate=new Date(); 
      monthDate.setMonth(monthDate.getMonth() - 6);
 var allitems= [      '#jqxCheckBox-25-DP15_ATM-10'
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
					, '#jqxCheckBox-31-DP15_DC15-10'];	
			    
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
	  
  	
  $('.jqx-checkbox-items').on('change', function (event) {
    var $checkbox = $(this);
    var checked = event.args.checked;
    var checkboxId = $checkbox.attr('id');
    Items = "";
    if (checked) {
        checkedItem = checkedItem + 1;
        checkedItemid.push("#" + checkboxId);
    } else {
        checkedItem = checkedItem - 1;
        checkedItemid = checkedItemid.filter(function (id) {
            return id !== "#" + checkboxId;
        });
    }

    if (checkedItem >= 4) {
        for (i = 0; i < allitems.length; i++) {
            $(allitems[i]).jqxCheckBox({ disabled: true });
        }

        for (i = 0; i < checkedItemid.length; i++) {
            if (checkedItemid[i] != null) {
                $(checkedItemid[i]).jqxCheckBox({ disabled: false });
            }
        }
        enableDisableDropDowns(true);
    } else {
        for (i = 0; i < allitems.length; i++) {
            $(allitems[i]).jqxCheckBox({ disabled: false });
        }
        enableDisableDropDowns(false);
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
		 	     			    "functions":functions,
		 	     			    "factor":itemValue[item].factor
								};
								 return new Promise((resolve, reject) => {
								 $.ajax({
					  	       	        type: "POST",
				      	    	        contentType:  "application/json; charset=utf-8",
				      	    	        url: "/skews/getgriddatafunction",
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
	