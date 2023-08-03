 		 var selectedRow=this;
 		 var monthDate=new Date(); 
         monthDate.setMonth(monthDate.getMonth() - 1);
         var auditUrl;
         var updateUrl;
         var saveUrl;
         var deleteUrl;
         var checkifcanUrl;
         var ecbExcessItem	=["#jqxCheckBoxExcess1",
         			   "#jqxCheckBoxExcess2",
         			   "#jqxCheckBoxExcess3",
         			   "#jqxCheckBoxExcess4",
         			   "#jqxCheckBoxExcess1_Excess2_Excess3_Excess4"];	 		
       
        var ecbQeItem =["#jqxCheckBoxQe1",
         			   "#jqxCheckBoxQe2",
         			   "#jqxCheckBoxQe1_Qe2",
         			   "#jqxCheckBoxCum_Qe1",
         			   "#jqxCheckBoxCum_Qe2",
         			   "#jqxCheckBoxCum_Qe1_Qe2"];	 		
         var ezmmItem =["#jqxCheckBoxM0",
         			   "#jqxCheckBoxM1",
         			   "#jqxCheckBoxM2",
         			   "#jqxCheckBoxM3"];	 		
         var corporateItem=[ "#jqxCheckBoxavg_usatoaaa_usa",
				  "#jqxCheckBoxavg_usbtobbb_usatoaaa",
				  "#jqxCheckBoxavg_usctoccc_usbtobbb",
				  "#jqxCheckBoxavg_eurozoneatoaaa_germany",
				  "#jqxCheckBoxavg_eurozonebtobbb_eurozoneatoaaa"];					       					      
		 var ecbExcessAuditDefaultData=[{
             "excess1": "",
             "excess2": "",
             "excess3": "",
             "excess4": "",
             "excess1Excess2Excess3Excess4": "",
           }];
         var ecbQeAuditDefaultData=[{
             "qe1": "",
             "qe2": "",
             "qe1Qe2": "",
             "cumQe1": "",
             "cumQe2": "",
             "cumQe1Qe2": "",
           }];
         var ezmmAuditDefaultData=[{
             "m0": "",
             "m1": "",
             "m2": "",
             "m3": ""
           }];
          var corporateAuditDefaultData=[{
             "avgUsatoaaaUsa": "",
             "avgUsbtobbbUsatoaaa": "",
             "avgUsctocccUsbtobbb": "",
             "avgEurozoneatoaaaGermany": "",
             "avgEurozonebtobbbEurozoneatoaaa": ""
           }];
         var source;
         var inputDataEcbExcess = document.getElementById("data-input-Ecbexcess");
         var inputDataEcbQe = document.getElementById("data-input-Ecbqe");
         var inputDataEZMM = document.getElementById("data-input-EZMM");
         var inputDataCorporate = document.getElementById("data-input-Corporate");
          
         var liquidityType;
         
         const liquidityValue = $("#liquidityValue")[0].innerText;
         deleteUrl="/liquidity/deletebyreferdate/"+liquidityValue+"/";
		 checkifcanUrl="/liquidity/checkifcansave/"+liquidityValue+"/";
					
          if(liquidityValue==1)
         	 {liquidityType="Ecbexcess" ;
         	  auditUrl='/liquidity/getecbexcessdata/';
         	  updateUrl="/liquidity/updateecbexcessdata";
			  saveUrl="/liquidity/saveecbexcessdata";	
         	 } 
          else if(liquidityValue==2)
            {
				liquidityType="Ecbqe" ;
				auditUrl='/liquidity/getecbqedata/';
				updateUrl="/liquidity/updateecbqedata";
				saveUrl="/liquidity/saveecbqedata";	   
			}
           else if(liquidityValue==3)
            {
				liquidityType="EZMM";
                auditUrl='/liquidity/getezmmdata/';
			    updateUrl="/liquidity/updateezmmdata";
			    saveUrl="/liquidity/saveezmmdata";
            }else if(liquidityValue==4)
            {
				liquidityType="Corporate";
                auditUrl='/liquidity/getcorporatedata/';
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
			  
			  if(liquidityValue==1){
				 $("#Ecbexcess-btn").addClass('active');
			  }else 
			   if(liquidityValue==2){
			   $("#Ecbqe-btn").addClass('active');
			   }else 
			   if(liquidityValue==3){
			   $("#EzMonetary-btn").addClass('active');
			   }else 
			   if(liquidityValue==4){
			   $("#Corporate_spreads-btn").addClass('active');
			   }
			   
			  renderSubGroup(liquidityValue);
    
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
	 		                    { name: 'EXCESS1',  type: 'float'},
	 		                    { name: 'EXCESS2',  type: 'float'},
	 		                    { name: 'EXCESS3',  type: 'float'},
	 		                    { name: 'EXCESS4',  type: 'float'},
	 		                    { name: 'EXCESS1_EXCESS2_EXCESS3_EXCESS4',  type: 'float'},
	 		                    { name: 'QE1',  type: 'float'},
	 		                    { name: 'QE2',  type: 'float'},
	 		                    { name: 'QE1_QE2',  type: 'float'},
	 		                    { name: 'CUM_QE1',  type: 'float'},
	 		                    { name: 'CUM_QE2',  type: 'float'},
	 		                    { name: 'CUM_QE1_QE2',  type: 'float'},
	 		                    { name: 'M0',  type: 'float'},
	 		                    { name: 'M1',  type: 'float'},
	 		                    { name: 'M2',  type: 'float'},
	 		                    { name: 'M3',  type: 'float'},
	 		                    { name: 'AVG_USATOAAA_USA',  type: 'float'},
	 		                    { name: 'AVG_USBTOBBB_USATOAAA',  type: 'float'},
	 		                    { name: 'AVG_USCTOCCC_USBTOBBB',  type: 'float'},
	 		                    { name: 'AVG_EUROZONEATOAAA_GERMANY',  type: 'float'},
	 		                    { name: 'AVG_EUROZONEBTOBBB_EUROZONEATOAAA',  type: 'float'},
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
		     	 getFilterHistory(liquidityValue);
	
		         $("#grid").jqxGrid('showloadelement');  
	    	    
		         getFilterData(liquidityValue);         
		       
             	 $('#dateInputAudit').on('change', function (event) 
				 {  date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				    filterDate=date;
				 
    					 delete auditGridSource.localdata;   
    				     auditGridSource.url=auditUrl+date;
    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
    					 $('#'+liquidityType+'AuditGrid').jqxGrid({source:dataAdapter});
						    					
				 }); 

			$("#filter").click(function () {
            	
            	getFilterData(liquidityValue);
               });    
		   });// end document ready
		    $("#Clearfilter").click(function () {
				     if (liquidityValue==1)
    				 {
					  for(i=0; i<ecbExcessItem.length; i++)
		    			   {
		    		    	$(ecbExcessItem[i]).jqxCheckBox({checked:false});
		    		       } 
					  }
					  else if (liquidityValue==2)
		    				 {
							  for(i=0; i<ecbQeItem.length; i++)
				    			   {
				    		    	$(ecbQeItem[i]).jqxCheckBox({checked:false});
				    		       } 
							  }
							    else if (liquidityValue==3)
			    				 {
								  for(i=0; i<ezmmItem.length; i++)
					    			   {
					    		    	$(ezmmItem[i]).jqxCheckBox({checked:false});
					    		       } 
								  } else if (liquidityValue==4)
				    				 {
									  for(i=0; i<corporateItem.length; i++)
						    			   {
						    		    	$(corporateItem[i]).jqxCheckBox({checked:false});
						    		       } 
									  }
				  });  
	       function Edit(row, event) {
			 
				     isedit=true;
					 var data=$('#'+liquidityType+'AuditGrid').jqxGrid('getrowdata', row);	
				     if (liquidityValue==1)
    				 {
						   oldDataJson={
			               "excess1":data.excess1,
						   "excess2":data.excess2,
						   "excess3":data.excess3,
						   "excess4":data.excess4,
						   "excess1Excess2Excess3Excess4":data.excess1Excess2Excess3Excess4
					     };
				     }else if(liquidityValue==2)
				     	{
							  oldDataJson={
				               "qe1":data.qe1,
							   "qe2":data.qe2,
							   "qe1Qe2":data.qe1Qe2,
							   "cumQe1":data.cumQe1,
							   "cumQe2":data.cumQe2,
							   "cumQe1Qe2":data.cumQe1Qe2
						     };
						 }else if(liquidityValue==3)
				     	{
							  oldDataJson={
				               "m0":data.m0,
							   "m1":data.m1,
							   "m2":data.m2,
							   "m3":data.m3
						     };
						 }
				     selectedRow.editrow = row;
				     date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				     if(auditGridSource.url=='' || date!=filterDate)
				     { 
                         delete auditGridSource.localdata;   
    				     auditGridSource.url=auditUrl+date;
    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
    					 $('#'+liquidityType+'AuditGrid').jqxGrid({source:dataAdapter});
    				 } 
				     setTimeout(function(){
					if (liquidityValue==1)
    				 { 
				    	  if(($('#'+liquidityType+'AuditGrid').jqxGrid('getrows')[0].excess1!=null)&&
				    		 ($('#'+liquidityType+'AuditGrid').jqxGrid('getrows')[0].excess2!=null)&&
				    		 ($('#'+liquidityType+'AuditGrid').jqxGrid('getrows')[0].excess3!=null)&&
				    		 ($('#'+liquidityType+'AuditGrid').jqxGrid('getrows')[0].excess4!=null)&&
				    		 ($('#'+liquidityType+'AuditGrid').jqxGrid('getrows')[0].excess1Excess2Excess3Excess4!=null))
							{
						    	$('#'+liquidityType+'AuditGrid').jqxGrid('beginrowedit', row);
						    	$("#edit"+row).css("display","none");
								$("#actionButtons"+row).css("display","contents"); 
						    	if (event) {
						    		if (event.preventDefault) {
						    			event.preventDefault();
						    		}
						    	} 
							}
						}
						else if(liquidityValue==2)
						{
							if(($('#'+liquidityType+'AuditGrid').jqxGrid('getrows')[0].qe1!=null)&&
				    		 ($('#'+liquidityType+'AuditGrid').jqxGrid('getrows')[0].qe2!=null))
							{
						    	$('#'+liquidityType+'AuditGrid').jqxGrid('beginrowedit', row);
						    	$("#edit"+row).css("display","none");
								$("#actionButtons"+row).css("display","contents"); 
						    	if (event) {
						    		if (event.preventDefault) {
						    			event.preventDefault();
						    		}
						    	} 
							}
						}else if(liquidityValue==3)
						{
							if(($('#'+liquidityType+'AuditGrid').jqxGrid('getrows')[0].m0!=null)&&
				    		 ($('#'+liquidityType+'AuditGrid').jqxGrid('getrows')[0].m1!=null)&&
				    		 ($('#'+liquidityType+'AuditGrid').jqxGrid('getrows')[0].m2!=null)&&
				    		 ($('#'+liquidityType+'AuditGrid').jqxGrid('getrows')[0].m3!=null))
							{
						    	$('#'+liquidityType+'AuditGrid').jqxGrid('beginrowedit', row);
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
				   var updatedData = $('#'+liquidityType+'AuditGrid').jqxGrid('getrowdata', row);
				   selectedRow.editrow = -1;
				   $('#'+liquidityType+'AuditGrid').jqxGrid('endrowedit', row);
				    var updatedData = $('#'+liquidityType+'AuditGrid').jqxGrid('getrowdata', row);
				    if (liquidityValue==1)
    				 {
						  updatedDataJson={
				               "excess1":updatedData.gold,
							   "excess2":updatedData.excess2,
							   "excess3":updatedData.excess3,
							   "excess4":updatedData.excess4,
							   "excess1Excess2Excess3Excess4":updatedData.excess1Excess2Excess3Excess4,
						     };
				         keys=["excess1","excess2","excess3","excess4","excess1Excess2Excess3Excess4"];
                    
                    	dataToBeUpdated.push({
	         			   "subgroupId":"1",
	         			   "value":updatedData.excess1.replaceAll(',',''),
	         			   "referdate": date
	         			});
						dataToBeUpdated.push({
			         			   "subgroupId":"2",
			         			   "value":updatedData.excess2.replaceAll(',',''),
			         			   "referdate": date
			         			});
						dataToBeUpdated.push({
			         			   "subgroupId":"3",
			         			   "value":updatedData.excess3.replaceAll(',',''),
			         			   "referdate": date
			         			});
                       dataToBeUpdated.push({
			         			   "subgroupId":"4",
			         			   "value":updatedData.excess4.replaceAll(',',''),
			         			   "referdate": date
			         			});
                     }else if(liquidityValue==2){
						  updatedDataJson={
				               "qe1":updatedData.qe1,
							   "qe2":updatedData.qe2,
							   "qe1Qe2":updatedData.qe1Qe2,
							   "cumQe1":updatedData.cumQe1,
							   "cumQe2":updatedData.cumQe2,
							   "cumQe1Qe2":updatedData.cumQe1Qe2,
						     };
				         keys=["qe1","qe2","qe1Qe2","cumQe1","cumQe2","cumQe1Qe2"];
                    
                    	dataToBeUpdated.push({
	         			   "subgroupId":"1",
	         			   "value":updatedData.qe1.replaceAll(',',''),
	         			   "referdate": date
	         			});
						dataToBeUpdated.push({
			         			   "subgroupId":"2",
			         			   "value":updatedData.qe2.replaceAll(',',''),
			         			   "referdate": date
			         			});
					 }else if(liquidityValue==3){
					     updatedDataJson={
				               "m0":updatedData.m0,
							   "m1":updatedData.m1,
							   "m2":updatedData.m2,
							   "m3":updatedData.m3
						     };
				         keys=["m0","m1","m2","m3"];
                    
                    	dataToBeUpdated.push({
	         			   "subgroupId":"1",
	         			   "value":updatedData.m0.replaceAll(',',''),
	         			   "referdate": date
	         			});
						dataToBeUpdated.push({
			         			   "subgroupId":"2",
			         			   "value":updatedData.m1.replaceAll(',',''),
			         			   "referdate": date
			         			});
			         	dataToBeUpdated.push({
			         			   "subgroupId":"3",
			         			   "value":updatedData.m2.replaceAll(',',''),
			         			   "referdate": date
			         			});
			         	dataToBeUpdated.push({
			         			   "subgroupId":"4",
			         			   "value":updatedData.m3.replaceAll(',',''),
			         			   "referdate": date
			         			});
					 }
                    var updatedJson=[];
                    for (let i = 0; i < keys.length; i++) {
	                    if(updatedDataJson[keys[i]]!=oldDataJson[keys[i]])
                          updatedJson.push({"assetId": 3,
                  						    "groupId":getGroupId(liquidityValue),
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
			    					 $('#'+liquidityType+'AuditGrid').jqxGrid({source:dataAdapter});
			    					 
		      						getFilterData(liquidityValue);
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
			      $('#'+liquidityType+'AuditGrid').jqxGrid('endrowedit', row, true);
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
		    					 $('#'+liquidityType+'AuditGrid').jqxGrid({source:dataAdapter});
		    					 }
		    	        	else{
							 getAuditGridSource(liquidityValue);
							 }
		    	        	},
				             error: function (e) {
				                 console.log(e);
				             }
				         });
				    getFilterData(liquidityValue);  
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
			
				function getAuditGridSource(liquidityValue){
				
				latestUrl='/liquidity/getlatest/'+liquidityValue;
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
						    					 $('#'+liquidityType+'AuditGrid').jqxGrid({source:dataAdapter});
						    			 }
			    	   			   }
			    	        },
			    	        error: function (e) {
			    	        	
								  console.log("ERROR : ", e);
			
			    	        }
			    	    });
			
			}
	
		  function getFilterData(liquidityValue)
		  {
          	var SelectedSearchDTO=[];
          	var allItems=0;
          	var checkedItem=[];
          	var json;
          	var values=[];
            $('#grid').jqxGrid({ showdefaultloadelement: true}); 
          	var item = 0;
            if (liquidityValue==1)
		     {
			   items = ecbExcessItem;
			 }else if (liquidityValue==2)
		     {
			   items = ecbQeItem;
			 }else if (liquidityValue==3)
		     {
			   items = ezmmItem;
			 }else if (liquidityValue==4)
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
		          		   "groupId":liquidityValue,
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
    	    	        url: "/liquidity/getgriddata",
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
	  							                 
	  					saveFilterHistory(liquidityValue,checkedItem);
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
		    	        url: "/robot/callrobotsasync/3/"+getGroupId(liquidityValue),
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
		    
			location.href = "/bourse/liquidity?liquidity=" + divNum;
		}
	function renderSubGroup(liquidityValue){
		
		if(liquidityValue==1)
		{
			inputDataType = inputDataEcbExcess;
		    items=ecbExcessItem;
		    var dataInputGridFields=[
			                    { name: 'excess1', type: 'string' },
			                    { name: 'excess2', type: 'string' },
			                    { name: 'excess3', type: 'string' },
			                    { name: 'excess4', type: 'string' }
			                ]; 			
			 var dataInputGridColumns= [ 
			                      { text: 'OVERNIGHT DEPOSITS at the ECB', datafield: 'excess1', width: '25%' },
				                  { text: 'CURRENT ACCOUNT HOLDINGS', datafield: 'excess2', width: '25%'},
				                  { text: 'RESERVE REQUIREMENTS', datafield: 'excess3', width: '25%' },
				                  { text: 'EMERGENCY LENDING', datafield: 'excess4', width: '25%' }
			                ];	  
			 var defaultData=ecbExcessAuditDefaultData;
			 var fields=[
                    { name: 'excess1', type: 'string' },
                    { name: 'excess2', type: 'string' },
                    { name: 'excess3', type: 'string' },
                    { name: 'excess4', type: 'string' },
                    { name: 'excess1Excess2Excess3Excess4', type: 'string' } 
                ];
             var arrayOFcolumns= [ 
	                	   { text: '',editable:false, datafield: 'Edit',width:'24%',cellsrenderer: function (row) {
		                	return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons"+row+"\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
		                   }
		                  },  
		                  { text: 'OVERNIGHT DEPOSITS at the ECB', datafield: 'excess1', width: '15.2%' },
		                  { text: 'CURRENT ACCOUNT HOLDINGS', datafield: 'excess2', width: '15.2%' },
		                  { text: 'RESERVE REQUIREMENTS', datafield: 'excess3', width: '15.2%' },
		                  { text: 'EMERGENCY LENDING', datafield: 'excess4', width: '15.2%', },
		                  { text: 'EXCESS LIQUIDITY', datafield: 'excess1Excess2Excess3Excess4', width: '15.2%', editable: false, },
	                ];
			
		}
		else
			if (liquidityValue==2)
			{
			inputDataType = inputDataEcbQe;
		    items=ecbQeItem;
		    var dataInputGridFields=[
			                    { name: 'qe1', type: 'string' },
			                    { name: 'qe2', type: 'string' }
			                ]; 			
			 var dataInputGridColumns= [ 
			                      { text: 'ECB MONTHLY sovering bond QE', datafield: 'qe1', width: '50%' },
				                  { text: 'ECB MONTHLY corporate bond QE', datafield: 'qe2', width: '50%'}
			                ];	  
			 var defaultData=ecbQeAuditDefaultData;
			 var fields=[
                    { name: 'qe1', type: 'string' },
                    { name: 'qe2', type: 'string' },
                    { name: 'qe1Qe2', type: 'string' },
                    { name: 'cumQe1', type: 'string' },
                    { name: 'cumQe2', type: 'string' },
                    { name: 'cumQe1Qe2', type: 'string' } 
                ];
             var arrayOFcolumns= [ 
	                	   { text: '',editable:false, datafield: 'Edit',width:'24%',cellsrenderer: function (row) {
		                	return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons"+row+"\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
		                   }
		                  },  
		                  { text: 'ECB MONTHLY sovering bond QE', datafield: 'qe1', width: '12.66%' },
		                  { text: 'ECB MONTHLY corporate bond QE', datafield: 'qe2', width: '12.66%' },
		                  { text: 'ECB MONTHLY QE', datafield: 'qe1Qe2', width: '12.66%', editable: false,  },
		                  { text: 'ECB CUMULATIVE sovereign bond QE', datafield: 'cumQe1', width: '12.66%', editable: false,  },
		                  { text: 'ECB CUMULATIVE corporate bonds QE', datafield: 'cumQe2', width: '12.66%', editable: false, },
	               		  { text: 'ECB CUMULATIVE QE', datafield: 'cumQe1Qe2', width: '12.66%', editable: false, },
	                ];
			
			}else
			if (liquidityValue==3)
			{
			inputDataType = inputDataEZMM;
		    items=ezmmItem;
		    var dataInputGridFields=[
			                    { name: 'm0', type: 'string' },
			                    { name: 'm1', type: 'string' },
			                    { name: 'm2', type: 'string' },
			                    { name: 'm3', type: 'string' }
			                ]; 			
			 var dataInputGridColumns= [ 
			                      { text: 'M0', datafield: 'm0', width: '25%' },
				                  { text: 'M1', datafield: 'm1', width: '25%'},
				                  { text: 'M2', datafield: 'm2', width: '25%' },
				                  { text: 'M3', datafield: 'm3', width: '25%'}
			                ];	  
			 var defaultData=ezmmAuditDefaultData;
			 var fields=[
                    { name: 'm0', type: 'string' },
                    { name: 'm1', type: 'string' },
                    { name: 'm2', type: 'string' },
                    { name: 'm3', type: 'string' },
                ];
             var arrayOFcolumns= [ 
	                	   { text: '',editable:false, datafield: 'Edit',width:'24%',cellsrenderer: function (row) {
		                	return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons"+row+"\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
		                   }
		                  },  
		                  { text: 'M0', datafield: 'm0', width: '19%' },
		                  { text: 'M1', datafield: 'm1', width: '19%' },
		                  { text: 'M2', datafield: 'm2', width: '19%' },
		                  { text: 'M3', datafield: 'm3', width: '19%' }
	                ];
			
			}else
			if (liquidityValue==4)
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
			initiate(liquidityType,inputDataType,items,dataInputGridFields,dataInputGridColumns,defaultData,fields,arrayOFcolumns);
			
	}
	function saveFilterHistory(liquidityValue,checkedItem){
		
			 
	  						var filterHistory = { 
			   		        	  "filterHistory":checkedItem.toString(),
			   		        	  "screenName":"DATABASE_INPUT_SCREEN_LIQUIDITY-"+liquidityValue
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
	function getFilterHistory(liquidityValue){
		              
		           $.ajax({
	       	        contentType:  "application/json; charset=utf-8",
	    	        url: "/bourse/getdataentryfilterhistory/"+"DATABASE_INPUT_SCREEN_LIQUIDITY-"+liquidityValue,
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
					   if(liquidityValue ==1)
		    	    	   for(i=0; i<ecbExcessItem.length; i++)
		    			   {
		    		    	$(ecbExcessItem[i]).jqxCheckBox({checked:true});
		    		       }
	    		       else if(liquidityValue ==2)
	    		       	for(i=0; i<ecbQeItem.length; i++)
		    			   {
		    		    	$(ecbQeItem[i]).jqxCheckBox({checked:true});
		    		       }else if(liquidityValue ==3)
	    		       	for(i=0; i<ezmmItem.length; i++)
		    			   {
		    		    	$(ezmmItem[i]).jqxCheckBox({checked:true});
		    		       }
	    	       }
	                  },
	    	        error: function (e) {
	    	        	
						  console.log("ERROR : ", e);
	
	    	        }
	    	    });	
	}
	
	function getGroupId(liquidityValue)
	{
	  var groupId='';	
		switch(liquidityValue) {
		  
		 case '1': 
		   groupId='14'
		        break;
		 case '2': 
		   groupId='15'
		        break;
		 case '3': 
		   groupId='16'
		        break;
		}
	return groupId;
	}		
	
	function initiate(liquidityType,inputDataType,item,dataInputGridFields,dataInputGridColumns,defaultData,fields,arrayOFcolumns){
		 var jsonObject= null;
		 $("#delete" + liquidityType).jqxButton({  theme:'dark', width: 90, height: 30,template: "danger" });
		 $("#cancel" + liquidityType).jqxButton({ theme: 'dark',height:30,width:74 });
		 $("#load" + liquidityType).jqxButton({ theme: 'dark',height:30,width:74 }); 
		 $("#cancel" + liquidityType).click(function () {
            	  inputDataType.value="";
            	  $("#dataformInput" + liquidityType).css("display","block");
				  $("#dataInputButtons" + liquidityType).css("display","none"); 
				  $("#dataInputGrid" + liquidityType).css("display","none"); 
               });
                  
  		for(i=0; i<item.length; i++)
		  {
			$(item[i]).jqxCheckBox({ theme:'dark', width: 60, height: 25, boxSize:"0px" });
		   }  
		  $('#data-input-'+liquidityType).on('keydown', function(event) {
			  if (event.keyCode === 13) {
				event.preventDefault(); // prevent form submission
				$('#data-input-'+liquidityType).blur();
			  }
			});
		  inputDataType.addEventListener("blur", function() {
		  if($('#data-input-'+liquidityType).val()!="")
			  {
			  $("#dataformInput" + liquidityType).css("display","none");
			  $("#dataInputGrid" + liquidityType).css("display","block"); 
			  $("#dataInputButtons" + liquidityType).css("display","block"); 
	
			  var localdata = [];
			  var dataIput =$('#data-input-'+liquidityType).val()
			  var dataInputRows = dataIput.split(/\r?\n/);
			  var rowData = dataInputRows[0].split(/\r?\t/);
			   if(liquidityValue ==1)
			   jsonObject= {
					  			"excess1": rowData[0],
					  			"excess2":  rowData[1],
					  			"excess3": rowData[2],
					  			"excess4": rowData[3]
					  		};
			   else if(liquidityValue ==2)
			   jsonObject= {
					  			"qe1": rowData[0],
					  			"qe2":  rowData[1]
					  		};
			   else if(liquidityValue ==3)
			   jsonObject= {
					  			"m0": rowData[0],
					  			"m1":  rowData[1],
					  			"m2": rowData[2],
					  			"m3":  rowData[3]
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
				$("#dataInputGrid" + liquidityType).jqxGrid(
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
		
	    getAuditGridSource(liquidityValue);
		$('#'+liquidityType+'AuditGrid').jqxGrid(
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
        $("#delete" + liquidityType).click(function () {
			if(liquidityValue==1)
			   value="ECB EXCESS";
			else if(liquidityValue==2)
			   value="ECB QE";   
				$('#alertDeleteDataByDate-modal').modal('show'); 
		   		 date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				$( "#alertTextDeleteDataByDate" ).empty();
		 		$( "#alertTextDeleteDataByDate" ).append( "<p> Are you sure you want to Delete all "+value+" record for the date '"+date+"'?</p>" );
			});
      $("#load" + liquidityType).click(function () {
            	var date = new Date();
            	var dataToBeInserted = [];
            	var firstObject=["1"];
            	var secondObject=["2"];
            	var thirdObject=["3"];
				var fourthObject=["4"];
            	var listObject=null;
				var groupId=null;
				
            	var rows =  $("#dataInputGrid" + liquidityType).jqxGrid('getrows');
				
            	for (i = 0; i < rows.length; i++) {
            	  if(liquidityValue==1)
				  {   firstObject.push(rows[i].excess1);
					  secondObject.push(rows[i].excess2);
					  thirdObject.push(rows[i].excess3);
					  fourthObject.push(rows[i].excess4);
				  }else
				  if(liquidityValue==2)
				  {   firstObject.push(rows[i].qe1);
					  secondObject.push(rows[i].qe2);
				  }else
				  if(liquidityValue==3)
				  {   firstObject.push(rows[i].m0);
					  secondObject.push(rows[i].m1);
					  thirdObject.push(rows[i].m2);
					  fourthObject.push(rows[i].m3);
				  }
            	}
            	 if(liquidityValue==1)
				  {listObject=["firstObject","secondObject","thirdObject","fourthObject"];
				   groupId=14;
				   }else  if(liquidityValue==2)
				   { listObject=["firstObject","secondObject"];
				    groupId=15;}
				   else if(liquidityValue==3)
				 	{ listObject=["firstObject","secondObject","thirdObject","fourthObject"];
				 	 groupId=16;}
				  
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
													
						    	    	        
												 getFilterData(liquidityValue);
						    	    		if(liquidityValue==1)
				                            	 inputDataEcbExcess.value="";
				                             else if(liquidityValue==2)
				                              	inputDataEcbQe.value="";
						  		                  else if(liquidityValue==3)
				                              	inputDataEZMM.value="";	
						  		            	
						  		            	  $("#dataformInput" + liquidityType).css("display","block");
						  						  $("#dataInputButtons" + liquidityType).css("display","none"); 
						  						  $("#dataInputGrid" + liquidityType).css("display","none");
						  						
						  						$('#dateInputAudit').jqxDateTimeInput('setDate', $("#dateInput").jqxDateTimeInput('getDate'));
						    	        	    date=$.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
						    	        	    
						    				    filterDate=date;
						    				    delete auditGridSource.localdata;   
						    				     auditGridSource.url=auditUrl+date;
						    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
						    					 $('#'+liquidityType+'AuditGrid').jqxGrid({source:dataAdapter});
						    					
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