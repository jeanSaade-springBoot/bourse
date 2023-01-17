 		 var selectedRow=this;
 		 var monthDate=new Date(); 
         monthDate.setMonth(monthDate.getMonth() - 1);
         var allitems=["#jqxCheckBoxGold",
         			   "#jqxCheckBoxPlatinum",
         			   "#jqxCheckBoxSilver",
         			   "#jqxCheckBoxPlatGold",
         			   "#jqxCheckBoxGoldSilv",
         			   "#jqxCheckBoxCopper",
         			   "#jqxCheckBoxAluminum",
         			   "#jqxCheckBoxSteel",
         			   "#jqxCheckBoxLumber"];
         			   
		 var preciousAuditDefaultData=[{
             "gold": "",
             "platinum": "",
             "silver": "",
           }];
         var baseAuditDefaultData=[{
             "copper": "",
             "aluminum": "",
             "steel": "",
             "lumber": "",
           }];  
           
         var inputDataPresious = document.getElementById("precious-input");
         var inputDataBase = document.getElementById("base-input");
         
		 $(document).ready(function () {
			  $('#overlay').fadeOut();
			  $('#container-wrapper').show();
		 	    
			  $("#viewall").jqxButton({  theme:'dark', width: 110, height: 35,template: "primary" });
			  $("#viewall").css("display","block");
			  $("#viewall").click(function () {
					popupWindow('/bourse/allnews', 'Libvol - View All News', window, 1300, 600);
				  });
			  $("#dateInput").jqxDateTimeInput({  theme:'dark', width: '195px', height: '25px' });
              $("#dateInputAudit").jqxDateTimeInput({  theme:'dark', width: '195px', height: '25px' }); 
		      $("#deletePreciousByDate").jqxButton({  theme:'dark', width: 90, height: 30,template: "danger" });
		      $("#deleteBaseByDate").jqxButton({  theme:'dark', width: 90, height: 30,template: "danger" });
		      $("#dateInputFrom").jqxDateTimeInput({  theme:'dark', width: '200px', height: '25px'});
              $("#dateInputFrom").jqxDateTimeInput('setDate', monthDate);
        	  $("#dateInputTo").jqxDateTimeInput({  theme:'dark', width: '200px', height: '25px' }); 
		      $("#filter").jqxButton({ theme: 'dark',height:30,width:74  });
	          $("#Clearfilter").jqxButton({ theme: 'dark',height:30,width:74 });
	          $("#CancelPreciousData").jqxButton({ theme: 'dark',height:30,width:74 });
	          $("#loadPreciousData").jqxButton({ theme: 'dark',height:30,width:74 }); 
		      $("#CancelBaseData").jqxButton({ theme: 'dark',height:30,width:74 });
	          $("#loadBaseData").jqxButton({ theme: 'dark',height:30,width:74 }); 
		      
		        for(i=0; i<allitems.length; i++)
			   {
		    	$(allitems[i]).jqxCheckBox({ theme:'dark', width: 60, height: 25, boxSize:"0px" });
		       }
		       
		       auditGridSource =
	            {    
	            localdata:preciousAuditDefaultData,
	            datatype: "json",
                datafields: [
                    { name: 'gold', type: 'string' },
                    { name: 'platinum', type: 'string' },
                    { name: 'silver', type: 'string' },
                    { name: 'platinum_GOLD', type: 'string' },
                    { name: 'gold_SILVER', type: 'string' }
                    
                ],
                url:''
	            };
	            var dataAdapter = new $.jqx.dataAdapter(auditGridSource);
	            var eventName = "onclick";
	            $("#preciousAuditGrid").jqxGrid(
	            {
	                width: '100%',
	                source: dataAdapter,  
	                theme:'dark',
	                autoheight: true,
	                editable: true,
	                selectionmode: 'none',
	                editmode: 'selectedrow',
	                columns: [ 
	                	   { text: '',editable:false, datafield: 'Edit',width:'24%',cellsrenderer: function (row) {
		                	return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons"+row+"\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
		                   }
		                  },  
		                  { text: 'GOLD', datafield: 'gold', width: '15.2%' },
		                  { text: 'PLATINUM', datafield: 'platinum', width: '15.2%' },
		                  { text: 'SILVER', datafield: 'silver', width: '15.2%' },
		                  { text: 'PLAT-GOLD', datafield: 'platinum_GOLD', width: '15.2%',editable: false, },
		                  { text: 'GOLD/SILV', datafield: 'gold_SILVER', width: '15.2%', editable: false, },
	                ]
	            });
	            auditBaseGridSource =
	            {    
	            localdata:baseAuditDefaultData,
	            datatype: "json",
                datafields: [
                    { name: 'copper', type: 'string' },
                    { name: 'aluminum', type: 'string' },
                    { name: 'steel', type: 'string' },
                    { name: 'lumber', type: 'string' }
                ],
                url:''
	            };
	            var baseDataAdapter = new $.jqx.dataAdapter(auditBaseGridSource);
	            $("#baseAuditGrid").jqxGrid(
	            {
	                width: '100%',
	                source: baseDataAdapter,  
	                theme:'dark',
	                autoheight: true,
	                editable: true,
	                selectionmode: 'none',
	                editmode: 'selectedrow',
	                columns: [ 
	                	   { text: '',editable:false, datafield: 'Edit',width:'22%',cellsrenderer: function (row) {
		                	return "<input class=\"edit\" type=\"button\" onclick='EditBase(" + row + ", event)' id=\"editBase"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtonsBase"+row+"\" style=\"display:none\"><input  onclick='UpdateBase(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='CancelBase(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
		                    
		                  }
		                  },  
		                  { text: 'COPPER', datafield: 'copper', width: '19.5%' },
		                  { text: 'ALUMINUM', datafield: 'aluminum', width: '19.5%' },
		                  { text: 'STEEL', datafield: 'steel', width: '19.5%' },
		                  { text: 'LUMBER', datafield: 'lumber', width: '19.5%'},
	                ]
	            });
	            
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
		         // getFilterData();
		         //$("#grid").jqxGrid('showloadelement');           
		           
		          inputDataPresious.addEventListener("blur", function() {
				  if($("#precious-input").val()!="")
					  {
					  $("#dataformInput").css("display","none");
					  $("#dataInputGrid").css("display","block"); 
					  $("#dataInputButtons").css("display","block"); 
			
					  var localdata = [];

					  var dataIput =$("#precious-input").val()
					  var dataInputRows = dataIput.split(/\r?\n/);
					  var rowData = dataInputRows[0].split(/\r?\t/);
					   localdata.push({
					  			"gold": rowData[0],
					  			"platinum":  rowData[1],
					  			"silver": rowData[2]
					  		});
					  
					  var dataInputGridSource =
			            {
			                datatype: "json",
			                datafields: [
			                    { name: 'gold', type: 'string' },
			                    { name: 'platinum', type: 'string' },
			                    { name: 'silver', type: 'string' },
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
			                      { text: '<img height="48" width="48" src="/img/gold.png">', datafield: 'gold', width: '33.3%' },
				                  { text: '<img height="48" width="48" src="/img/platinum.png">', datafield: 'platinum', width: '33.3%'},
				                  { text: '<img height="48" width="48" src="/img/silver.png">', datafield: 'silver', width: '33.3%' }
			                ]
			            });
					  
					  }
				});
				
				inputDataBase.addEventListener("blur", function() {
				  if($("#base-input").val()!="")
					  {
					  $("#baseDataformInput").css("display","none");
					  $("#baseDataInputGrid").css("display","block"); 
					  $("#baseDataInputButtons").css("display","block"); 
			
					  var localdata = [];

					  var dataIput =$("#base-input").val()
					  var dataInputRows = dataIput.split(/\r?\n/);
					  var rowData = dataInputRows[0].split(/\r?\t/);
					   localdata.push({
					  			"copper": rowData[0],
					  			"aluminum":  rowData[1],
					  			"steel": rowData[2],
					  			"lumber": rowData[3]
					  		});
					  
					  var dataInputGridSource =
			            {
			                datatype: "json",
			                datafields: [
			                    { name: 'copper', type: 'string' },
			                    { name: 'aluminum', type: 'string' },
			                    { name: 'steel', type: 'string' },
			                    { name: 'lumber', type: 'string' },
			                ],
			                localData:localdata
			            };
			             var dataAdapter = new $.jqx.dataAdapter(dataInputGridSource);
			            // initialize jqxGrid
			            $("#baseDataInputGrid").jqxGrid(
			            {
			                width: '100%',
			                source: dataAdapter,  
			                theme:'dark',
			                enabletooltips: true,
			                selectionmode: 'none',
			                autoheight: true,
			                columns: [ 
			                      { text: '<img height="48" width="48" src="/img/copper.png">', datafield: 'copper', width: '25%' },
				                  { text: '<img height="48" width="48" src="/img/aluminum.png">', datafield: 'aluminum', width: '25%'},
				                  { text: '<img height="48" width="48" src="/img/steel.png">', datafield: 'steel', width: '25%' },
				                  { text: '<img height="48" width="48" src="/img/lumber.png">', datafield: 'lumber', width: '25%' }
			                ]
			            });
					  
					  }
				});  
				
				$("#CancelPreciousData").click(function () {
            	  inputDataPresious.value="";
            	  $("#dataformInput").css("display","block");
				  $("#dataInputButtons").css("display","none"); 
				  $("#dataInputGrid").css("display","none"); 
               });
               
               $("#CancelBaseData").click(function () {
            	  inputDataBase.value="";
            	  $("#baseDataformInput").css("display","block");
				  $("#baseDataInputButtons").css("display","none"); 
				  $("#baseDataInputGrid").css("display","none"); 
               });  
               
             $("#loadPreciousData").click(function () {
            	var date = new Date();
            	var dataToBeInserted = [];
            	var goldObject=["1"];
            	var platinumObject=["3"];
            	var silverbject=["2"];
				debugger;
            	var rows = $('#dataInputGrid').jqxGrid('getrows');
            	for (i = 0; i < rows.length; i++) {
            	   goldObject.push(rows[i].gold);
            	   platinumObject.push(rows[i].platinum);
            	   silverbject.push(rows[i].silver);
            	}

            	var listObject=["goldObject","platinumObject","silverbject"];
            	 
            	 for (i = 0; i < listObject.length; i++) {

            	     var value = eval(listObject[i]);
            		 	dataToBeInserted.push({
            			   "subgroupId":value[0],
            			   "value":value[1],
            			   "referDate": $.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
            			});
            	 }
            	 debugger;
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
	    	        url: "/metals/checkifcansaveprecious/"+today,
	    	        dataType: 'json',
	    	        async:true,
	    	        cache: false,
	    	        timeout: 600000,
	    	        success: function (response) {
	    	        	if(response)
	    	        	{
							/* $.ajax({
						        contentType: "application/json",
						        url: "/process/isrobottriggered",
						        dataType: 'text',
								async:true,
						        cache: false,
						        timeout: 600000,
						        success: function (data) {
				      
								if(data=='true')
								   $('#alert-modal-robot').modal('show'); 
								else{
								*/	
		
						    	       	  $.ajax({
						    	    	        type: "POST",
						    	    	        contentType: "application/json",
						    	    	        url: "/metals/savepreciousdata",
						    	    	        data: JSON.stringify(dataToBeInserted),
						    	    	        dataType: 'json',
						    	    	        async:true,
						    	    	        cache: false,
						    	    	        timeout: 600000,
						    	    	        success: function (data) {
													alert("sucess");
						    	    	        
												// getFilterData();
						    	    	        	  
						  						 inputDataPresious.value="";
						  		            	  $("#dataformInput").css("display","block");
						  						  $("#dataInputButtons").css("display","none"); 
						  						  $("#dataInputGrid").css("display","none");
						  						
						  						$('#dateInputAudit').jqxDateTimeInput('setDate', $("#dateInput").jqxDateTimeInput('getDate'));
						    	        	    date=$.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
						    	        	    
						    				    filterDate=date;
						    				    delete auditGridSource.localdata;   
						    				     auditGridSource.url='/metals/getpreciousauditdata/'+date;
						    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
						    					 $('#preciousAuditGrid').jqxGrid({source:dataAdapter});
						    					
						    	    	        // triggerRobots();	
						    	    	         
						    	            },
						    	    	        error: function (e) {
						    	    	        	
						    						  console.log("ERROR : ", e);
						    	
						    	    	        }
						    	    	    });
										/*	}
					
								},
						        error: function (e) {
						        	
										  console.log("ERROR : ", e);
					
						        }
						    });*/

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
                   $("#loadBaseData").click(function () {
            	var date = new Date();
            	var dataToBeInserted = [];
            	var copperObject=["1"];
            	var aluminumObject=["2"];
            	var steelObject=["3"];
            	var lumberObject=["4"];
				debugger;
            	var rows = $('#baseDataInputGrid').jqxGrid('getrows');
            	for (i = 0; i < rows.length; i++) {
            	   copperObject.push(rows[i].copper);
            	   aluminumObject.push(rows[i].aluminum);
            	   steelObject.push(rows[i].steel);
            	   lumberObject.push(rows[i].lumber);
            	}

            	var listObject=["copperObject","aluminumObject","steelObject","lumberObject"];
            	 
            	 for (i = 0; i < listObject.length; i++) {

            	      var value = eval(listObject[i]);
            		 	dataToBeInserted.push({
            			   "subgroupId":value[0],
            			   "value":value[1],
            			   "referDate": $.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
            			});
            	 }
            	 debugger;
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
	    	        url: "/metals/checkifcansavebase/"+today,
	    	        dataType: 'json',
	    	        async:true,
	    	        cache: false,
	    	        timeout: 600000,
	    	        success: function (response) {
	    	        	if(response)
	    	        	{
							/* $.ajax({
						        contentType: "application/json",
						        url: "/process/isrobottriggered",
						        dataType: 'text',
								async:true,
						        cache: false,
						        timeout: 600000,
						        success: function (data) {
				      
								if(data=='true')
								   $('#alert-modal-robot').modal('show'); 
								else{
								*/	
		
						    	       	  $.ajax({
						    	    	        type: "POST",
						    	    	        contentType: "application/json",
						    	    	        url: "/metals/savebasedata",
						    	    	        data: JSON.stringify(dataToBeInserted),
						    	    	        dataType: 'json',
						    	    	        async:true,
						    	    	        cache: false,
						    	    	        timeout: 600000,
						    	    	        success: function (data) {
													alert("sucess");
						    	    	        
												// getFilterData();
						    	    	        	  
						  						 datatextarea.value="";
						  		            	  $("#basedataformInput").css("display","block");
						  						  $("#basedataInputButtons").css("display","none"); 
						  						  $("#basedataInputGrid").css("display","none");
						  						
						  						$('#basedateInputAudit').jqxDateTimeInput('setDate', $("#dateInput").jqxDateTimeInput('getDate'));
						    	        	    date=$.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
						    	        	    
						    				    filterDate=date;
						    				      delete auditBaseGridSource.localdata;   
							    				     auditBaseGridSource.url='/metals/getbaseauditdata/'+date;
							    					 basedataAdapter = new $.jqx.dataAdapter(auditBaseGridSource);
							    					 $('#baseAuditGrid').jqxGrid({source:basedataAdapter});
						    					 
						    	    	       //  triggerRobots();	
						    	    	         
						    	            },
						    	    	        error: function (e) {
						    	    	        	
						    						  console.log("ERROR : ", e);
						    	
						    	    	        }
						    	    	    });
										/*	}
					
								},
						        error: function (e) {
						        	
										  console.log("ERROR : ", e);
					
						        }
						    });*/

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
             
             	 $('#dateInputAudit').on('change', function (event) 
				 {  date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				    filterDate=date;
				    debugger;
    				     delete auditGridSource.localdata;   
    				     auditGridSource.url='/metals/getpreciousauditdata/'+date;
    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
    					 $('#preciousAuditGrid').jqxGrid({source:dataAdapter});
    					 
    					    delete auditBaseGridSource.localdata;   
    				     auditBaseGridSource.url='/metals/getbaseauditdata/'+date;
    					 basedataAdapter = new $.jqx.dataAdapter(auditBaseGridSource);
    					 $('#baseAuditGrid').jqxGrid({source:basedataAdapter});
				 }); 

               $("#deletePreciousByDate").click(function () {
				$('#alertDeleteDataByDate-modal').modal('show'); 
		   		 date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				  $( "#alertTextDeleteDataByDate" ).empty();
		 		  $( "#alertTextDeleteDataByDate" ).append( "<p> Are you sure you want to Delete all record for the date '"+date+"'?</p>" );
				 });
				    
		   });
		   
	 function Edit(row, event) {
				
				     isedit=true;
					 var data=$("#preciousAuditGrid").jqxGrid('getrowdata', row);	
				     oldDataJson={
		               "gold":data.gold,
					   "platinum":data.platinum,
					   "silver":data.silver,
					   
				     };
				     selectedRow.editrow = row;
				     date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				     if(auditGridSource.url=='' || date!=filterDate)
				     { 
				    	 delete auditGridSource.localdata;   
    				     auditGridSource.url='/metals/getpreciousauditdata/'+date;
    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
    					 $('#preciousAuditGrid').jqxGrid({source:dataAdapter});
				     } 
				     setTimeout(function(){
				    	  if(($('#preciousAuditGrid').jqxGrid('getrows')[0].gold!=null)&&
				    		 ($('#preciousAuditGrid').jqxGrid('getrows')[0].platinum!=null)&&
				    		 ($('#preciousAuditGrid').jqxGrid('getrows')[0].silver!=null))
						{
					    	$("#preciousAuditGrid").jqxGrid('beginrowedit', row);
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
			    
			    function EditBase(row, event) {
				
				     isedit=true;
					 var data=$("#baseAuditGrid").jqxGrid('getrowdata', row);	
				     oldDataJson={
		               "copper":data.copper,
					   "aluminum":data.aluminum,
					   "steel":data.steel,
					   "lumber":data.lumber,
					   
				     };
				     selectedRow.editrow = row;
				     date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				     if(auditGridSource.url=='' || date!=filterDate)
				     { 
				    	 delete auditGridSource.localdata;   
    				     auditGridSource.url='/metals/getbaseauditdata/'+date;
    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
    					 $('#baseAuditGrid').jqxGrid({source:dataAdapter});
				     } 
				     setTimeout(function(){
				    	  if(($('#baseAuditGrid').jqxGrid('getrows')[0].copper!=null)&&
				    		 ($('#baseAuditGrid').jqxGrid('getrows')[0].aluminum!=null)&&
				    		 ($('#baseAuditGrid').jqxGrid('getrows')[0].steel!=null)&&
				    		 ($('#baseAuditGrid').jqxGrid('getrows')[0].lumber!=null))
						{
					    	$("#baseAuditGrid").jqxGrid('beginrowedit', row);
					    	$("#editBase"+row).css("display","none");
							$("#actionButtonsBase"+row).css("display","contents"); 
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
				   var updatedData = $("#preciousAuditGrid").jqxGrid('getrowdata', row);
				   selectedRow.editrow = -1;
				    $("#preciousAuditGrid").jqxGrid('endrowedit', row);
				    var updatedData = $("#preciousAuditGrid").jqxGrid('getrowdata', row);
				    var updatedDataJson={
		               "gold":updatedData.gold,
					   "silver":updatedData.silver,
					   "platinum":updatedData.platinum,
				     };
				     
                    var keys=["france","germany","italy","spain","uk","usa"];
                    var updatedCountriesJson=[];
                    for (let i = 0; i < keys.length; i++) {
	                    if(updatedDataJson[keys[i]]!=oldDataJson[keys[i]])
                          updatedCountriesJson.push({"factor": updatedDataJson.factor.replace("yr",""),
												 "country":	getCountryDbDescription(keys[i])});
	                }
                    
					dataToBeUpdated.push({
	         			   "subgroupId":"1",
	         			   "value":updatedData.gold,
	         			   "referdate": date
	         			});
						dataToBeUpdated.push({
		         			   "subgroupId":"3",
		         			   "value":updatedData.platinum,
		         			   "referdate": date
		         			});
						dataToBeUpdated.push({
		         			   "subgroupId":"2",
		         			   "value":updatedData.silver,
		         			   "referdate": date
		         			});
						
		      	       	  $.ajax({
		      	    	        type: "POST",
		      	    	        contentType: "application/json",
		      	    	        url: "/metals/updatepreciousauditdata",
		      	    	        data: JSON.stringify(dataToBeUpdated),
		      	    	        dataType: 'json',
		      	    	        async:true,
		      	    	        cache: false,
		      	    	        timeout: 600000,
		      	    	        success: function (data) {
			  
		                          //  updateRobotNewsOnChangeColumns(updatedCountriesJson);
		                          
		      	    	        	  delete auditGridSource.localdata;   
				    				     auditGridSource.url='/metals/getpreciousauditdata/'+date;
				    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
				    					 $('#preciousAuditGrid').jqxGrid({source:dataAdapter});
		      						 
		      						getFilterData();
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
			    
			    function UpdateBase(row, event) {
				   
				   isupdate=true;
				   var dataToBeUpdated = [];
				   var updatedData = $("#baseAuditGrid").jqxGrid('getrowdata', row);
				   selectedRow.editrow = -1;
				    $("#baseAuditGrid").jqxGrid('endrowedit', row);
				    var updatedData = $("#baseAuditGrid").jqxGrid('getrowdata', row);
				    var updatedDataJson={
		               "copper":updatedData.copper,
					   "aluminum":updatedData.aluminum,
					   "steel":updatedData.steel,
					   "lumber":updatedData.lumber
				     };
				     
                  /*  var keys=["copper","aluminum","steel","lumber"];
                    var updatedCountriesJson=[];
                    for (let i = 0; i < keys.length; i++) {
	                    if(updatedDataJson[keys[i]]!=oldDataJson[keys[i]])
                          updatedCountriesJson.push({"factor": updatedDataJson.factor.replace("yr",""),
												 "country":	getCountryDbDescription(keys[i])});
	                }
                    */
					dataToBeUpdated.push({
	         			   "subgroupId":"1",
	         			   "value":updatedData.copper,
	         			   "referdate": date
	         			});
						dataToBeUpdated.push({
		         			   "subgroupId":"2",
		         			   "value":updatedData.aluminum,
		         			   "referdate": date
		         			});
						dataToBeUpdated.push({
		         			   "subgroupId":"3",
		         			   "value":updatedData.steel,
		         			   "referdate": date
		         			});
						dataToBeUpdated.push({
		         			   "subgroupId":"4",
		         			   "value":updatedData.lumber,
		         			   "referdate": date
		         			});
		      	       	  $.ajax({
		      	    	        type: "POST",
		      	    	        contentType: "application/json",
		      	    	        url: "/metals/updatebaseauditdata",
		      	    	        data: JSON.stringify(dataToBeUpdated),
		      	    	        dataType: 'json',
		      	    	        async:true,
		      	    	        cache: false,
		      	    	        timeout: 600000,
		      	    	        success: function (data) {
			  
		                          //  updateRobotNewsOnChangeColumns(updatedCountriesJson);
		                          
		      	    	        		    delete auditBaseGridSource.localdata;   
					    				     auditBaseGridSource.url='/metals/getbaseauditdata/'+date;
					    					 basedataAdapter = new $.jqx.dataAdapter(auditBaseGridSource);
					    					 $('#baseAuditGrid').jqxGrid({source:basedataAdapter});
		      						 
		      						//getFilterData();
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
			    	$("#preciousAuditGrid").jqxGrid('endrowedit', row, true);
			 }
			   function CancelBase(row) {
				  isedit=false;
				  isupdate=false;
				   selectedRow.editrow = row;
			    	$("#baseAuditGrid").jqxGrid('endrowedit', row, true);
			 }
			    function deleteDataByDate()
				{
					$('#alertDeleteDataByDate-modal').modal('hide'); 
					date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				    
			     $.ajax({
			             type : "DELETE",
			             url : "/metals/deletepreciousbyreferdate/" + date,
			             success: function (result) {   
				    getPreciousAuditGridSource();  
					//getFilterData();  
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
				
				function getPreciousAuditGridSource(){
				
					 $.ajax({
			    	        contentType: "application/json",
			    	        url: "/bourse/getlatestprecious",
			    	        dataType: 'text',
			    	        async:true,
			    	        cache: false,
			    	        timeout: 600000,
			    	        success: function (response) {
			    	        	
			    	        	$('#dateInputAudit').jqxDateTimeInput('setDate', new Date(response.split("-")[1]+","+response.split("-")[2]+","+response.split("-")[0]));
			    	        	    date=$.jqx.dataFormat.formatdate(new Date(response),  'dd-MM-yyyy');
			    	        	    
			    				    filterDate=date;
						    				    delete auditGridSource.localdata;   
						    				     auditGridSource.url='/metals/getpreciousauditdata/'+date;
						    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
						    					 $('#preciousAuditGrid').jqxGrid({source:dataAdapter});
			    	        },
			    	        error: function (e) {
			    	        	
								  console.log("ERROR : ", e);
			
			    	        }
			    	    });
			
			}