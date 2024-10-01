  var checkedItem = 0;
  var gridIdIncrement = 0;
  var checkedItemid = [];
  var Items = [];
  var monthDate=new Date(); 
      monthDate.setMonth(monthDate.getMonth() - 6);
 var allitems= [ 
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
const nameSubgroupId =  [
                    { name: 'OPEN', subgroupId: '2' },
                    { name: 'SETTLE', subgroupId: '3' },
                    { name: 'CLOSE', subgroupId: '4' },
                    { name: 'HIGH', subgroupId: '5' },
                    { name: 'LOW', subgroupId: '6' }
                    ];    
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
var mainContainer='';
var mainGroupContainer='';
var groupContainer='';
var subgroupContainer='';
var factorIner='';
var factorInerItem='';
var factorContainer='';

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
	        	for (j = 0; j < data.length; j++) {
					items="#jqxCheckBox-"+data[j].groupId+'-'+data[j].subgroupId;
					$(items).jqxCheckBox({ theme: 'dark', width: '100%', height: 26 });
		    	  	
		    	  	const rollingGroupId=groupId_Id.filter(value => value.groupId == data[j].groupId)[0].rollingGroupId;
                    items="#jqxCheckBox-"+rollingGroupId+'-'+data[j].subgroupId;
					$(items).jqxCheckBox({ theme: 'dark', width: '100%', height: 26 });
				}
				
					  
  	
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
			    if (!$(allitems[i]).jqxCheckBox('checked')) {
			        $(allitems[i]).jqxCheckBox({ disabled: true });
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

    	
			},
	        error: function (e) {
	        	
					  console.log("ERROR : ", e);

	        }
	    }); 
	  
    var RestrictDate=new Date(); 
         RestrictDate.setMonth(RestrictDate.getMonth() - 6);
         $("#dateInputFrom").jqxDateTimeInput({min: new Date(RestrictDate.getFullYear(), RestrictDate.getMonth(), RestrictDate.getDate()),  theme:'dark', width: '200px', height: '25px'});
         $("#dateInputFrom").jqxDateTimeInput('setDate', monthDate);
		 $("#dateInputTo").jqxDateTimeInput({  theme:'dark', width: '200px', height: '25px' }); 
		 
      $('[data-toggle="tooltip"]').tooltip();   
      
	

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
              { text: getSubgroupNameById(itemValue[Items[gridIdIncrement]].subGroupId)+'</span> - '+ title+''
			, align: 'center', name: 'country' },
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
function getSubgroupNameById(id) {
    const matchingObject = nameSubgroupId.find(item => item.subgroupId  === id);
    return matchingObject ? matchingObject.name : null;
}