 		 var selectedRow=this;
 		 var monthDate=new Date(); 
         monthDate.setMonth(monthDate.getMonth() - 1);
         var auditUrl;
         var updateUrl;
         var saveUrl;
         var deleteUrl;
         var checkifcanUrl;
         var BundItem	=  ["#jqxCheckBoxBund1",
         			  	 	"#jqxCheckBoxBund2",
         			  	 	"#jqxCheckBoxBund1_Bund2",
         			  	 	"#jqxCheckBoxBund1_Bund2_cp"];	
        var BoblItem =["#jqxCheckBoxBobl1",
         			   "#jqxCheckBoxBobl2",
         			   "#jqxCheckBoxBobl1_Bobl2"];	 		
         var BuxlItem =["#jqxCheckBoxBuxl1",
         			    "#jqxCheckBoxBuxl2",
         			    "#jqxCheckBoxBuxl1_Buxl2"];	 		
         var corporateItem=[ "#jqxCheckBoxavg_usatoaaa_usa",
				  "#jqxCheckBoxavg_usbtobbb_usatoaaa",
				  "#jqxCheckBoxavg_usctoccc_usbtobbb",
				  "#jqxCheckBoxavg_eurozoneatoaaa_germany",
				  "#jqxCheckBoxavg_eurozonebtobbb_eurozoneatoaaa"];		
				  			       					      
		 var BundAuditDefaultData=[{
             "bund1": "",
             "bund2": "",
             "bund1bund": "",
             "bund1bund2cp": "",
           }];
         var BoblAuditDefaultData=[{
             "bobl1": "",
             "bobl2": "",
             "bobl1Bobl2": ""
           }];
         var BuxlAuditDefaultData=[{
             "buxl1": "",
             "buxl2": "",
             "buxl1Buxl2": ""
           }];
          var corporateAuditDefaultData=[{
             "avgUsatoaaaUsa": "",
             "avgUsbtobbbUsatoaaa": "",
             "avgUsctocccUsbtobbb": "",
             "avgEurozoneatoaaaGermany": "",
             "avgEurozonebtobbbEurozoneatoaaa": ""
           }];
         var source;
         var inputDataBund = document.getElementById("data-input-Bund");
         var inputDataBobl = document.getElementById("data-input-Bobl");
         var inputDataBuxl = document.getElementById("data-input-Buxl");
         var inputDataCorporate = document.getElementById("data-input-Corporate");
          
         var volumeType;
         
         const volumeValue = $("#volumeValue")[0].innerText;
         deleteUrl="/volume/deletebyreferdate/"+volumeValue+"/";
		 checkifcanUrl="/volume/checkifcansave/"+volumeValue+"/";
					
          if(volumeValue==1)
         	 {volumeType="Bund" ;
         	  auditUrl='/volume/getbunddata/';
         	  updateUrl="/volume/updatebunddata";
			  saveUrl="/volume/savebunddata";	
         	 } 
          else if(volumeValue==2)
            {
				volumeType="Bobl" ;
				auditUrl='/volume/getbobldata/';
				updateUrl="/volume/updatebobldata";
				saveUrl="/volume/savebobldata";	   
			}
           else if(volumeValue==3)
            {
				volumeType="Buxl";
                auditUrl='/volume/getbuxldata/';
			    updateUrl="/volume/updatebuxldata";
			    saveUrl="/volume/savebuxldata";
            }else if(volumeValue==4)
            {
				volumeType="Corporate";
                auditUrl='/volume/getcorporatedata/';
            }
		 $(document).ready(function () {
			  $('#overlay').fadeOut();
			  $('#container-wrapper').show();
		 	    
			  $("#viewall").jqxButton({  theme:'dark', width: 110, height: 35,template: "primary" });
			  $("#viewall").css("display","block");
			  $("#viewall").click(function () {
					popupWindow('/bourse/allnews', 'Libvol - View All News', window, 1300, 600);
				  });
				  
			  $('[data-toggle="tooltip"]').tooltip();   
			  
			  if(volumeValue==1){
				 $("#Bund-btn").addClass('active');
			  }else 
			   if(volumeValue==2){
			   $("#Bobl-btn").addClass('active');
			   }else 
			   if(volumeValue==3){
			   $("#Buxl-btn").addClass('active');
			   }else 
			   if(volumeValue==4){
			   $("#Corporate_spreads-btn").addClass('active');
			   }
			   
			  renderSubGroup(volumeValue);
    
			  $("#dateInput").jqxDateTimeInput({  theme:'dark', width: '195px', height: '25px' });
              $("#dateInputAudit").jqxDateTimeInput({  theme:'dark', width: '195px', height: '25px' }); 
		     
		      $("#dateInputFrom").jqxDateTimeInput({  theme:'dark', width: '200px', height: '25px'});
              $("#dateInputFrom").jqxDateTimeInput('setDate', monthDate);
        	  $("#dateInputTo").jqxDateTimeInput({  theme:'dark', width: '200px', height: '25px' }); 
		      $("#filter").jqxButton({ theme: 'dark',height:30,width:74  });
	          $("#Clearfilter").jqxButton({ theme: 'dark',height:30,width:74 });
	         
	          source =
		             {
		                 datatype: "json",
		                 datafields: [
	 		                    { name: 'refer_date', type: 'date' },
	 		                    { name: 'BUND1',  type: 'float'},
	 		                    { name: 'BUND2',  type: 'float'},
	 		                    { name: 'BUND1_BUND2',  type: 'float'},
	 		                    { name: 'BUND1_BUND2_CP',  type: 'float'},
	 		                    { name: 'BOBL1',  type: 'float'},
	 		                    { name: 'BOBL2',  type: 'float'},
	 		                    { name: 'BOBL1_BOBL2',  type: 'float'},
	 		                    { name: 'BUXL1',  type: 'float'},
	 		                    { name: 'BUXL2',  type: 'float'},
	 		                    { name: 'BUXL1_BUXL2',  type: 'float'},
	 		                 ],
	                         id: 'id',
	                         localdata: ''
		             };
	            $("#grid").jqxGrid({
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
		     	 getFilterHistory(volumeValue);
	
		         $("#grid").jqxGrid('showloadelement');  
	    	    
		         getFilterData(volumeValue);         
		       
             	 $('#dateInputAudit').on('change', function (event) 
				 {  date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				    filterDate=date;
				 
    					 delete auditGridSource.localdata;   
    				     auditGridSource.url=auditUrl+date;
    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
    					 $('#'+volumeType+'AuditGrid').jqxGrid({source:dataAdapter});
						    					
				 }); 

			$("#filter").click(function () {
            	
            	getFilterData(volumeValue);
               });    
		   });// end document ready
		    $("#Clearfilter").click(function () {
				     if (volumeValue==1)
    				 {
					  for(i=0; i<BundItem.length; i++)
		    			   {
		    		    	$(BundItem[i]).jqxCheckBox({checked:false});
		    		       } 
					  }
					  else if (volumeValue==2)
		    				 {
							  for(i=0; i<BoblItem.length; i++)
				    			   {
				    		    	$(BoblItem[i]).jqxCheckBox({checked:false});
				    		       } 
							  }
							    else if (volumeValue==3)
			    				 {
								  for(i=0; i<BuxlItem.length; i++)
					    			   {
					    		    	$(BuxlItem[i]).jqxCheckBox({checked:false});
					    		       } 
								  } else if (volumeValue==4)
				    				 {
									  for(i=0; i<corporateItem.length; i++)
						    			   {
						    		    	$(corporateItem[i]).jqxCheckBox({checked:false});
						    		       } 
									  }
				  });  
	       function Edit(row, event) {
			 
				     isedit=true;
					 var data=$('#'+volumeType+'AuditGrid').jqxGrid('getrowdata', row);	
				     if (volumeValue==1)
    				 {
						   oldDataJson={
			               "bund1":data.bund1,
						   "bund2":data.bund2,
						   "bund1bund2":data.bund1bund2,
						   "bund1bund2cp":data.bund1bund2cp
					     };
				     }else if(volumeValue==2)
				     	{
							  oldDataJson={
				               "bobl1":data.bobl1,
							   "bobl2":data.bobl2,
							   "bobl1Bobl2":data.bobl1Bobl2
						     };
						 }else if(volumeValue==3)
				     	{
							  oldDataJson={
				               "buxl1":data.buxl1,
							   "buxl2":data.buxl2,
							   "buxl1Buxl2":data.buxl1Buxl2
						     };
						 }
				     selectedRow.editrow = row;
				     date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				     if(auditGridSource.url=='' || date!=filterDate)
				     { 
                         delete auditGridSource.localdata;   
    				     auditGridSource.url=auditUrl+date;
    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
    					 $('#'+volumeType+'AuditGrid').jqxGrid({source:dataAdapter});
    				 } 
				     setTimeout(function(){
					if (volumeValue==1)
    				 { 
				    	  if(($('#'+volumeType+'AuditGrid').jqxGrid('getrows')[0].bund1!=null)&&
				    		 ($('#'+volumeType+'AuditGrid').jqxGrid('getrows')[0].bund2!=null))
							{
						    	$('#'+volumeType+'AuditGrid').jqxGrid('beginrowedit', row);
						    	$("#edit"+row).css("display","none");
								$("#actionButtons"+row).css("display","contents"); 
						    	if (event) {
						    		if (event.preventDefault) {
						    			event.preventDefault();
						    		}
						    	} 
							}
						}
						else if(volumeValue==2)
						{
							if(($('#'+volumeType+'AuditGrid').jqxGrid('getrows')[0].bobl1!=null)&&
				    		 ($('#'+volumeType+'AuditGrid').jqxGrid('getrows')[0].bobl2!=null))
							{
						    	$('#'+volumeType+'AuditGrid').jqxGrid('beginrowedit', row);
						    	$("#edit"+row).css("display","none");
								$("#actionButtons"+row).css("display","contents"); 
						    	if (event) {
						    		if (event.preventDefault) {
						    			event.preventDefault();
						    		}
						    	} 
							}
						}else if(volumeValue==3)
						{
							if(($('#'+volumeType+'AuditGrid').jqxGrid('getrows')[0].buxl1!=null)&&
				    		 ($('#'+volumeType+'AuditGrid').jqxGrid('getrows')[0].buxl2!=null))
							{
						    	$('#'+volumeType+'AuditGrid').jqxGrid('beginrowedit', row);
						    	$("#edit"+row).css("display","none");
								$("#actionButtons"+row).css("display","contents"); 
						    	if (event) {
						    		if (event.preventDefault) {
						    			event.preventDefault();
						    		}
						    	} 
							}
						}
				    	
				    	return false;
				     }, 300);
			    }	 
			  
			    function Update(row, event) {
				   
				   isupdate=true;
				   var dataToBeUpdated = [];
				   var updatedDataJson;
				   var keys;
				   var updatedData = $('#'+volumeType+'AuditGrid').jqxGrid('getrowdata', row);
				   selectedRow.editrow = -1;
				   $('#'+volumeType+'AuditGrid').jqxGrid('endrowedit', row);
				    var updatedData = $('#'+volumeType+'AuditGrid').jqxGrid('getrowdata', row);
				    if (volumeValue==1)
    				 {
						  updatedDataJson={
				               "bund1":updatedData.bund1,
							   "bund2":updatedData.bund2
						     };
				         keys=["bund1","bund2"];
                    
                    	dataToBeUpdated.push({
	         			   "subgroupId":"1",
	         			   "value":updatedData.bund1.replaceAll(',',''),
	         			   "referdate": date
	         			});
						dataToBeUpdated.push({
			         			   "subgroupId":"2",
			         			   "value":updatedData.bund2.replaceAll(',',''),
			         			   "referdate": date
			         			});
                     }else if(volumeValue==2){
						  updatedDataJson={
				               "bobl1":updatedData.bobl1,
							   "bobl2":updatedData.bobl2
						     };
				         keys=["bobl1","bobl2"];
                    
                    	dataToBeUpdated.push({
	         			   "subgroupId":"1",
	         			   "value":updatedData.bobl1.replaceAll(',',''),
	         			   "referdate": date
	         			});
						dataToBeUpdated.push({
			         			   "subgroupId":"2",
			         			   "value":updatedData.bobl2.replaceAll(',',''),
			         			   "referdate": date
			         			});
					 }else if(volumeValue==3){
					     updatedDataJson={
				               "buxl1":updatedData.buxl1,
							   "buxl2":updatedData.buxl2
						     };
				         keys=["buxl1","buxl2"];
                    
                    	dataToBeUpdated.push({
	         			   "subgroupId":"1",
	         			   "value":updatedData.buxl1.replaceAll(',',''),
	         			   "referdate": date
	         			});
						dataToBeUpdated.push({
			         			   "subgroupId":"2",
			         			   "value":updatedData.buxl2.replaceAll(',',''),
			         			   "referdate": date
			         			});
					 }
                    var updatedJson=[];
                    for (let i = 0; i < keys.length; i++) {
	                    if(updatedDataJson[keys[i]]!=oldDataJson[keys[i]])
                          updatedJson.push({"assetId": 4,
                  						    "groupId":getGroupId(volumeValue),
										    "value": keys[i].toUpperCase()});  
	                }
                    
		      	    $.ajax({
		      	    	        type: "POST",
		      	    	        contentType: "application/json",
		      	    	        url: updateUrl,
		      	    	        data: JSON.stringify(dataToBeUpdated),
		      	    	        dataType: 'json',
		      	    	        async:true,
		      	    	        cache: false,
		      	    	        timeout: 600000,
		      	    	        success: function (data) {
			  
		                             updateRobotNewsOnChangeColumns(updatedJson);
		                          
			      	    	         delete auditGridSource.localdata;   
			    				     auditGridSource.url=auditUrl+date;
			    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
			    					 $('#'+volumeType+'AuditGrid').jqxGrid({source:dataAdapter});
			    					 
		      						getFilterData(volumeValue);
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
			    
			  
			  function Cancel(row) {
				  isedit=false;
				  isupdate=false;
				   selectedRow.editrow = row;
			      $('#'+volumeType+'AuditGrid').jqxGrid('endrowedit', row, true);
			 }
			
			 function deleteDataByDate()
				{
					$('#alertDeleteDataByDate-modal').modal('hide'); 
					date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
                      
			     $.ajax({
			             type : "DELETE",
			             url : deleteUrl + date,
			             success: function (result) {   
					$.ajax({
		    	        contentType: "application/json",
		    	        url: checkifcanUrl+date,
		    	        dataType: 'json',
		    	        async:true,
		    	        cache: false,
		    	        timeout: 600000,
		    	        success: function (response) {
		    	        	if(!response)
		    	        	{	 delete auditGridSource.localdata;   
		    				     auditGridSource.url=auditUrl+date;
		    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
		    					 $('#'+volumeType+'AuditGrid').jqxGrid({source:dataAdapter});
		    					 }
		    	        	else{
							 getAuditGridSource(volumeValue);
							 }
		    	        	},
				             error: function (e) {
				                 console.log(e);
				             }
				         });
				    getFilterData(volumeValue);  
			        $('#alertDeleteDataByDate-modal').modal('hide');

 					$( "#successDelete" ).empty();
		 		    $( "#successDelete" ).append( "<p> All record for the date '"+date+"' has been deleted</p>" );
				
					$('#alertInfoDeleteDataByDate-modal').modal('show');  
			             },
			             error: function (e) {
			                 console.log(e);
			             }
			         });
				
				}
			
				function getAuditGridSource(volumeValue){
				
				latestUrl='/volume/getlatest/'+volumeValue;
					 $.ajax({
			    	        contentType: "application/json",
			    	        url: latestUrl,
			    	        dataType: 'text',
			    	        async:true,
			    	        cache: false,
			    	        timeout: 600000,
			    	        success: function (response) {
			    	        	if(response!='')
			    	        	  {
									$('#dateInputAudit').jqxDateTimeInput('setDate', new Date(response.split("-")[1]+","+response.split("-")[2]+","+response.split("-")[0]));
			    	        	     date=$.jqx.dataFormat.formatdate(new Date(response),  'dd-MM-yyyy');
			    	        	     
			    	        	     var dbDate=  new Date(response.split("-")[1]+","+response.split("-")[2]+","+response.split("-")[0]);
									 var systemDate=new Date();
			    	        	     systemDate.setHours(0,0,0,0);
			    				  
										if( dbDate.toDateString() == systemDate.toDateString())
										 {		filterDate=date;
						    				    delete auditGridSource.localdata;   
						    				     auditGridSource.url=auditUrl+date;
						    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
						    					 $('#'+volumeType+'AuditGrid').jqxGrid({source:dataAdapter});
						    			 }
			    	   			   }
			    	        },
			    	        error: function (e) {
			    	        	
								  console.log("ERROR : ", e);
			
			    	        }
			    	    });
			
			}
	
		  function getFilterData(volumeValue)
		  {
          	var SelectedSearchDTO=[];
          	var allItems=0;
          	var checkedItem=[];
          	var json;
          	var values=[];
            $('#grid').jqxGrid({ showdefaultloadelement: true}); 
          	var item = 0;
            if (volumeValue==1)
		     {
			   items = BundItem;
			 }else if (volumeValue==2)
		     {
			   items = BoblItem;
			 }else if (volumeValue==3)
		     {
			   items = BuxlItem;
			 }else if (volumeValue==4)
		     {
			   items = corporateItem;
			 }
				 	for (i = 0; i < items.length; i++) {
		         		if($(items[i]).jqxCheckBox('checked'))
		         		{		
		         		    values.push(items[i].split("Box")[1].toUpperCase());	
		          			item=1;
		          			allItems=allItems+1;
		          			checkedItem.push(items[i]);
		         		}
		          	}
		         	
		          	if(item!=0)
		          	{
		          		SelectedSearchDTO.push({
		          		   "groupId":volumeValue,
		       			   "selectedValues":values,
		       			});
		          		 values=[];
		          	}
          	
          	if(allItems!=0)
          	{
          	json={"selectedSearchDTOlst":SelectedSearchDTO,
       		       "fromDate":$.jqx.dataFormat.formatdate($("#dateInputFrom").jqxDateTimeInput('getDate'),  'yyyy-MM-dd'),
       		       "toDate":$.jqx.dataFormat.formatdate($("#dateInputTo").jqxDateTimeInput('getDate'),  'yyyy-MM-dd')
       		       };
       		       
          	if (allItems <= 9)
        	{
            $.ajax({
    	    	        type: "POST",
    	    	        contentType: "application/json",
    	    	        url: "/volume/getgriddata",
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
	  							                 
	  					saveFilterHistory(volumeValue,checkedItem);
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
		  
	  	function triggerRobots()
		{
			 $.ajax({
		       	        contentType:  "application/json; charset=utf-8",
		    	        url: "/robot/callrobotsasync/4/"+getGroupId(volumeValue),
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
	
	function toggleDivVisibility(divNum) {
		    
			location.href = "/bourse/volume?volume=" + divNum;
		}
	function renderSubGroup(volumeValue){
		
		if(volumeValue==1)
		{
			inputDataType = inputDataBund;
		    items=BundItem;
		    var dataInputGridFields=[
			                    { name: 'Bund1', type: 'string' },
			                    { name: 'Bund2', type: 'string' },
			                ]; 			
			 var dataInputGridColumns= [ 
			                      { text: 'Call Volume', datafield: 'Bund1', width: '50%' },
				                  { text: 'Put Volume', datafield: 'Bund2', width: '50%'},
			                ];	  
			 var defaultData=BundAuditDefaultData;
			 var fields=[
                    { name: 'bund1', type: 'string' },
                    { name: 'bund2', type: 'string' },
                    { name: 'bund1bund2', type: 'string' },
                    { name: 'bund1bund2cp', type: 'string' }
                ];
             var arrayOFcolumns= [ 
	                	   { text: '',editable:false, datafield: 'Edit',width:'24%',cellsrenderer: function (row) {
		                	return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons"+row+"\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
		                   }
		                  },  
		                  { text: 'Calls', datafield: 'bund1', width: '19%' },
		                  { text: 'Puts', datafield: 'bund2', width: '19%' },
		                  { text: 'VOLUME', datafield: 'bund1bund2', width: '19%', editable: false,},
		                  { text: 'C/P RATIO', datafield: 'bund1bund2cp', width: '19%',editable: false, },
	                ];
			
		}
		else
			if (volumeValue==2)
			{
			inputDataType = inputDataBobl;
		    items=BoblItem;
		    var dataInputGridFields=[
			                    { name: 'bobl1', type: 'string' },
			                    { name: 'bobl2', type: 'string' }
			                ]; 			
			 var dataInputGridColumns= [ 
			                      { text: 'Call Volume', datafield: 'bobl1', width: '50%' },
				                  { text: 'Put Volume', datafield: 'bobl2', width: '50%'}
			                ];	  
			 var defaultData=BoblAuditDefaultData;
			 var fields=[
                    { name: 'bobl1', type: 'string' },
                    { name: 'bobl2', type: 'string' },
                    { name: 'bobl1Bobl2', type: 'string' }
                ];
             var arrayOFcolumns= [ 
	                	   { text: '',editable:false, datafield: 'Edit',width:'24%',cellsrenderer: function (row) {
		                	return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons"+row+"\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
		                   }
		                  },  
		                  { text: 'Calls', datafield: 'bobl1', width: '25.33%' },
		                  { text: 'Puts', datafield: 'bobl2', width: '25.33%' },
		                  { text: 'VOLUME', datafield: 'bobl1Bobl2', width: '25.33%', editable: false,  },
		              ];
			
			}else
			if (volumeValue==3)
			{
			inputDataType = inputDataBuxl;
		    items=BuxlItem;
		    var dataInputGridFields=[
			                    { name: 'buxl1', type: 'string' },
			                    { name: 'buxl2', type: 'string' }
			                ]; 			
			 var dataInputGridColumns= [ 
			                      { text: 'Call Volume', datafield: 'buxl1', width: '50%' },
				                  { text: 'Put Volume', datafield: 'buxl2', width: '50%'}
			                ];	  
			 var defaultData=BuxlAuditDefaultData;
			 var fields=[
                    { name: 'buxl1', type: 'string' },
                    { name: 'buxl2', type: 'string' },
                    { name: 'buxl1Buxl2', type: 'string' }
                ];
             var arrayOFcolumns= [ 
	                	   { text: '',editable:false, datafield: 'Edit',width:'24%',cellsrenderer: function (row) {
		                	return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons"+row+"\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
		                   }
		                  },  
		                  { text: 'Calls', datafield: 'buxl1', width: '25.33%' },
		                  { text: 'Puts', datafield: 'buxl2', width: '25.33%' },
		                  { text: 'VOLUME', datafield: 'buxl1Buxl2', width: '25.33%' }
	                ];
			
			}else
			if (volumeValue==4)
			{
			inputDataType = inputDataCorporate;
		    items=corporateItem;
		    var dataInputGridFields=[]; 			
			var dataInputGridColumns= [];	  
			
			var defaultData=corporateAuditDefaultData;
			var fields=[
                    { name: 'avgUsatoaaaUsa', type: 'string' },
                    { name: 'avgUsbtobbbUsatoaaa', type: 'string' },
                    { name: 'avgUsctocccUsbtobbb', type: 'string' },
                    { name: 'avgEurozoneatoaaaGermany', type: 'string' },
                    { name: 'avgEurozonebtobbbEurozoneatoaaa', type: 'string' },
                ];
             var arrayOFcolumns= [ 
	                	  
		                  { text: 'US  BLUECHIP/TSYS', datafield: 'avgUsatoaaaUsa', width: '20%' },
		                  { text: 'US  HIGHYIELD / BLUECHIP', datafield: 'avgUsbtobbbUsatoaaa', width: '20%' },
		                  { text: 'US JUNKBONDS / HIGHYIELD', datafield: 'avgUsctocccUsbtobbb', width: '20%' },
		                  { text: 'EZ BLUECHIP 10Y GERMANY', datafield: 'avgEurozoneatoaaaGermany', width: '20%' },
		                  { text: 'EZ HIGHYIELD/ BLUECHIP', datafield: 'avgEurozonebtobbbEurozoneatoaaa', width: '20%' }
	                ];
			
			}
			initiate(volumeType,inputDataType,items,dataInputGridFields,dataInputGridColumns,defaultData,fields,arrayOFcolumns);
			
	}
	function saveFilterHistory(volumeValue,checkedItem){
		
			 
	  						var filterHistory = { 
			   		        	  "filterHistory":checkedItem.toString(),
			   		        	  "screenName":"DATABASE_INPUT_SCREEN_VOLUME-"+volumeValue
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
	function getFilterHistory(volumeValue){
		              
		           $.ajax({
	       	        contentType:  "application/json; charset=utf-8",
	    	        url: "/bourse/getdataentryfilterhistory/"+"DATABASE_INPUT_SCREEN_VOLUME-"+volumeValue,
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
					   if(volumeValue ==1)
		    	    	   for(i=0; i<BundItem.length; i++)
		    			   {
		    		    	$(BundItem[i]).jqxCheckBox({checked:true});
		    		       }
	    		       else if(volumeValue ==2)
	    		       	for(i=0; i<BoblItem.length; i++)
		    			   {
		    		    	$(BoblItem[i]).jqxCheckBox({checked:true});
		    		       }else if(volumeValue ==3)
	    		       	for(i=0; i<BuxlItem.length; i++)
		    			   {
		    		    	$(BuxlItem[i]).jqxCheckBox({checked:true});
		    		       }
	    	       }
	                  },
	    	        error: function (e) {
	    	        	
						  console.log("ERROR : ", e);
	
	    	        }
	    	    });	
	}
	
	function getGroupId(volumeValue)
	{
	  var groupId='';	
		switch(volumeValue) {
		  
		 case '1': 
		   groupId='17'
		        break;
		 case '2': 
		   groupId='18'
		        break;
		 case '3': 
		   groupId='19'
		        break;
		}
	return groupId;
	}		
	
	function initiate(volumeType,inputDataType,item,dataInputGridFields,dataInputGridColumns,defaultData,fields,arrayOFcolumns){
		 var jsonObject= null;
		 $("#delete" + volumeType).jqxButton({  theme:'dark', width: 90, height: 30,template: "danger" });
		 $("#cancel" + volumeType).jqxButton({ theme: 'dark',height:30,width:74 });
		 $("#load" + volumeType).jqxButton({ theme: 'dark',height:30,width:74 }); 
		 $("#cancel" + volumeType).click(function () {
            	  inputDataType.value="";
            	  $("#dataformInput" + volumeType).css("display","block");
				  $("#dataInputButtons" + volumeType).css("display","none"); 
				  $("#dataInputGrid" + volumeType).css("display","none"); 
               });
                  
  		for(i=0; i<item.length; i++)
		  {
			$(item[i]).jqxCheckBox({ theme:'dark', width: 60, height: 25, boxSize:"0px" });
		   }  
		  $('#data-input-'+volumeType).on('keydown', function(event) {
			  if (event.keyCode === 13) {
				event.preventDefault(); // prevent form submission
				$('#data-input-'+volumeType).blur();
			  }
			});
		  inputDataType.addEventListener("blur", function() {
		  if($('#data-input-'+volumeType).val()!="")
			  {
			  $("#dataformInput" + volumeType).css("display","none");
			  $("#dataInputGrid" + volumeType).css("display","block"); 
			  $("#dataInputButtons" + volumeType).css("display","block"); 
	
			  var localdata = [];
			  var dataIput =$('#data-input-'+volumeType).val()
			  var dataInputRows = dataIput.split(/\r?\n/);
			  var rowData = dataInputRows[0].split(/\r?\t/);
			   if(volumeValue ==1)
			   jsonObject= {
					  			"Bund1": rowData[0],
					  			"Bund2":  rowData[1]
					  		};
			   else if(volumeValue ==2)
			   jsonObject= {
					  			"bobl1": rowData[0],
					  			"bobl2":  rowData[1]
					  		};
			   else if(volumeValue ==3)
			   jsonObject= {
					  			"Buxl1": rowData[0],
					  			"Buxl2":  rowData[1]
					  		};
			   localdata.push(jsonObject);
			  
			  var dataInputGridSource =
				{
					datatype: "json",
					datafields: dataInputGridFields,
					localData:localdata
				};
				 var dataAdapter = new $.jqx.dataAdapter(dataInputGridSource);
				// initialize jqxGrid
				$("#dataInputGrid" + volumeType).jqxGrid(
				{
					width: '100%',
					source: dataAdapter,  
					theme:'dark',
					enabletooltips: true,
					selectionmode: 'none',
					autoheight: true,
					columns: dataInputGridColumns
				});
			  
			  }
		});
		
	   auditGridSource =
		{    
		localdata: defaultData,
		datatype: "json",
		datafields: fields,
		url:''
		};
		var dataAdapter = new $.jqx.dataAdapter(auditGridSource);
		
	    getAuditGridSource(volumeValue);
		$('#'+volumeType+'AuditGrid').jqxGrid(
		{
			width: '100%',
			source: dataAdapter,  
			theme:'dark',
			autoheight: true,
			editable: true,
			selectionmode: 'none',
			editmode: 'selectedrow',
			columns: arrayOFcolumns
		});
        $("#delete" + volumeType).click(function () {
			if(volumeValue==1)
			   value="Bund Options";
			else if(volumeValue==2)
			   value="Bobl Options"; 
			   else if(volumeValue==3)
			   value="Buxl Options";    
			   
				$('#alertDeleteDataByDate-modal').modal('show'); 
		   		 date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				$( "#alertTextDeleteDataByDate" ).empty();
		 		$( "#alertTextDeleteDataByDate" ).append( "<p> Are you sure you want to Delete all "+value+" record for the date '"+date+"'?</p>" );
			});
      $("#load" + volumeType).click(function () {
            	var date = new Date();
            	var dataToBeInserted = [];
            	var firstObject=["1"];
            	var secondObject=["2"];
            	var thirdObject=["3"];
				var fourthObject=["4"];
            	var listObject=null;
				var groupId=null;
				
            	var rows =  $("#dataInputGrid" + volumeType).jqxGrid('getrows');
				
            	for (i = 0; i < rows.length; i++) {
            	  if(volumeValue==1)
				  {   firstObject.push(rows[i].Bund1);
					  secondObject.push(rows[i].Bund2);
				  }else
				  if(volumeValue==2)
				  {   firstObject.push(rows[i].bobl1);
					  secondObject.push(rows[i].bobl2);
				  }else
				  if(volumeValue==3)
				  {    firstObject.push(rows[i].Buxl1);
					  secondObject.push(rows[i].Buxl2);
				  }
            	}
            	 if(volumeValue==1)
				  {listObject=["firstObject","secondObject"];
				   groupId=17;
				   }else  if(volumeValue==2)
				   { listObject=["firstObject","secondObject"];
				    groupId=18;}
				   else if(volumeValue==3)
				 	{ listObject=["firstObject","secondObject"];
				 	 groupId=19;}
				  
            	 for (i = 0; i < listObject.length; i++) {

            	     var value = eval(listObject[i]);
            		 	dataToBeInserted.push({
            			   "subgroupId":value[0],
            			   "value":value[1].replace(',', ''),
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
	    	        url: checkifcanUrl+today,
	    	        dataType: 'json',
	    	        async:true,
	    	        cache: false,
	    	        timeout: 600000,
	    	        success: function (response) {
	    	        	if(response)
	    	        	{
							 $.ajax({
						        contentType: "application/json",
						        url: "/process/isrobottriggered/3/"+groupId,
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
						    	    	        url: saveUrl,
						    	    	        data: JSON.stringify(dataToBeInserted),
						    	    	        dataType: 'json',
						    	    	        async:true,
						    	    	        cache: false,
						    	    	        timeout: 600000,
						    	    	        success: function (data) {
													
						    	    	        
												 getFilterData(volumeValue);
						    	    		if(volumeValue==1)
				                            	 inputDataBund.value="";
				                             else if(volumeValue==2)
				                              	inputDataBobl.value="";
						  		                  else if(volumeValue==3)
				                              	inputDataBuxl.value="";	
						  		            	
						  		            	  $("#dataformInput" + volumeType).css("display","block");
						  						  $("#dataInputButtons" + volumeType).css("display","none"); 
						  						  $("#dataInputGrid" + volumeType).css("display","none");
						  						
						  						$('#dateInputAudit').jqxDateTimeInput('setDate', $("#dateInput").jqxDateTimeInput('getDate'));
						    	        	    date=$.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
						    	        	    
						    				    filterDate=date;
						    				    delete auditGridSource.localdata;   
						    				     auditGridSource.url=auditUrl+date;
						    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
						    					 $('#'+volumeType+'AuditGrid').jqxGrid({source:dataAdapter});
						    					
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
	}