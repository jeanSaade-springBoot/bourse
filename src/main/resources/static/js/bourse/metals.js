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
         var metalsPreciousItem	=["#jqxCheckBoxGold",
         			   "#jqxCheckBoxPlatinum",
         			   "#jqxCheckBoxSilver",
         			   "#jqxCheckBoxPlatGold",
         			   "#jqxCheckBoxGoldSilv"];	
         var metalsBaseItem=[
         			   "#jqxCheckBoxCopper",
         			   "#jqxCheckBoxAluminum",
         			   "#jqxCheckBoxSteel",
         			   "#jqxCheckBoxLumber"];   
          var foodStuffItem=[
         			   "#jqxCheckBoxCorn",
         			   "#jqxCheckBoxSugar",
         			   "#jqxCheckBoxWheat"]; 			   
          var energyItem=[
         			   "#jqxCheckBoxOil",
         			   "#jqxCheckBoxGASOLINE_GALL",
         			   "#jqxCheckBoxGASOLINE_LITRE",
         			   "#jqxCheckBoxDIESEL_GALL",
         			   "#jqxCheckBoxDIESEL_TON",
         			   "#jqxCheckBoxNATGAS_USD",
         			   "#jqxCheckBoxNATGAS_EUR"]; 		
         			      
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
          var foodStuffAuditDefaultData=[{
             "corn": "",
             "sugar": "",
             "wheat": ""
           }];  
           var energyAuditDefaultData=[{
             "oil": "",
             "gasgall": "",
             "dieselgall": "",
             "natgasus": "",
             "natgaseur": ""
           }];  
         var source;
         var inputDataPresious = document.getElementById("precious-input");
         var inputDataBase = document.getElementById("base-input");
         var inputDataFoodStuff = document.getElementById("foodStuff-input");
         var inputDataEnergy = document.getElementById("energy-input");
          
         const commoditySubGroupValue = $("#commoditySubGroup")[0].innerText;
		 $(document).ready(function () {
			  $('#overlay').fadeOut();
			  $('#container-wrapper').show();
		 	    
			  $("#viewall").jqxButton({  theme:'dark', width: 110, height: 35,template: "primary" });
			  $("#viewall").css("display","block");
			  $("#viewall").click(function () {
					popupWindow('/bourse/allnews', 'Libvol - View All News', window, 1300, 600);
				  });
			  $('[data-toggle="tooltip"]').tooltip();   
			  
			  if(commoditySubGroupValue==1){
				 $("#precious-btn").addClass('active');
			  }else 
			   if(commoditySubGroupValue==2){
			   $("#base-btn").addClass('active');
			   }else 
			   if(commoditySubGroupValue==3){
			   $("#foodStuff-btn").addClass('active');
			   }else 
			   if(commoditySubGroupValue==4){
			   $("#energy-btn").addClass('active');
			   }
			   
			  rendercommoditySubGroup(commoditySubGroupValue);
    
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
	 		                    { name: 'GOLD', type: 'float' },
	 		                    { name: 'SILVER',  type: 'float'},
	 		                    { name: 'PLATINUM',  type: 'float'},
	 		                    { name: 'PLATINUM_GOLD',  type: 'float'},
	 		                    { name: 'GOLD_SILVER',  type: 'float'},
	 		                    { name: 'COPPER',  type: 'float'},
	 		                    { name: 'ALUMINUM',  type: 'float'},
	 		                    { name: 'STEEL',  type: 'float'},
	 		                    { name: 'LUMBER',  type: 'float'},
	 		                    { name: 'CORN',  type: 'float'},
	 		                    { name: 'SUGAR',  type: 'float'},
	 		                    { name: 'WHEAT',  type: 'float'},
	 		                    { name: 'OIL',  type: 'float'},
	 		                    { name: 'GASOLINE_GALL',  type: 'float'},
	 		                    { name: 'DIESEL_GALL',  type: 'float'},
	 		                    { name: 'NATGAS_USD',  type: 'float'},
	 		                    { name: 'NATGAS_EUR',  type: 'float'},
	 		                    { name: 'GASOLINE_LITRE',  type: 'float'},
	 		                    { name: 'DIESEL_TON',  type: 'float'}
	 		                 ],
	                         id: 'id',
	                         localdata: ''
		             };
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
		     	 getFilterHistory(commoditySubGroupValue);
	
		          $("#grid").jqxGrid('showloadelement');  
	    	    
		          getFilterData(commoditySubGroupValue);         
		         
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
                
                $("#CancelFoodStuffData").click(function () {
            	  inputDataFoodStuff.value="";
            	  $("#foodStuffDataformInput").css("display","block");
				  $("#foodStuffDataInputButtons").css("display","none"); 
				  $("#foodStuffDataInputGrid").css("display","none"); 
               }); 
                
                $("#CancelEnergyData").click(function () {
            	  inputDataEnergy.value="";
            	  $("#energyDataformInput").css("display","block");
				  $("#energyDataInputButtons").css("display","none"); 
				  $("#energyDataInputGrid").css("display","none"); 
               }); 
               
             $("#loadPreciousData").click(function () {
            	var date = new Date();
            	var dataToBeInserted = [];
            	var goldObject=["1"];
            	var platinumObject=["3"];
            	var silverbject=["2"];
				
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
							 $.ajax({
						        contentType: "application/json",
						        url: "/process/isrobottriggered/2/6",
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
						    	    	        url: "/metals/savepreciousdata",
						    	    	        data: JSON.stringify(dataToBeInserted),
						    	    	        dataType: 'json',
						    	    	        async:true,
						    	    	        cache: false,
						    	    	        timeout: 600000,
						    	    	        success: function (data) {
													
						    	    	        
												 getFilterData(commoditySubGroupValue);
						    	    	        	  
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
             $("#loadBaseData").click(function () {
            	var date = new Date();
            	var dataToBeInserted = [];
            	var copperObject=["1"];
            	var aluminumObject=["2"];
            	var steelObject=["3"];
            	var lumberObject=["4"];
				
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
							 $.ajax({
						        contentType: "application/json",
						        url: "/process/isrobottriggered/2/7",
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
						    	    	        url: "/metals/savebasedata",
						    	    	        data: JSON.stringify(dataToBeInserted),
						    	    	        dataType: 'json',
						    	    	        async:true,
						    	    	        cache: false,
						    	    	        timeout: 600000,
						    	    	        success: function (data) {
													
						    	    	        
												getFilterData(commoditySubGroupValue);
						    	    	        	  
						  						 inputDataBase.value="";
						  		            	  $("#baseDataformInput").css("display","block");
						  						  $("#baseDataInputButtons").css("display","none"); 
						  						  $("#baseDataInputGrid").css("display","none");
						  						
						  						$('#dateInputAudit').jqxDateTimeInput('setDate', $("#dateInput").jqxDateTimeInput('getDate'));
						    	        	    date=$.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
						    	        	  
						    				     filterDate=date;
						    				    
						    				      delete auditBaseGridSource.localdata;   
							    				  auditBaseGridSource.url='/metals/getbaseauditdata/'+date;
							    				  basedataAdapter = new $.jqx.dataAdapter(auditBaseGridSource);
							    				  $('#baseAuditGrid').jqxGrid({source:basedataAdapter});
						    					 
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
                $("#loadFoodStuffData").click(function () {
            	var date = new Date();
            	var dataToBeInserted = [];
            	
            	var cornObject=["1"];
            	var sugarObject=["2"];
            	var wheatObject=["3"];
				
            	var rows = $('#foodStuffDataInputGrid').jqxGrid('getrows');
            	for (i = 0; i < rows.length; i++) {
            	   cornObject.push(rows[i].corn);
            	   sugarObject.push(rows[i].sugar);
            	   wheatObject.push(rows[i].wheat);
            	}

            	var listObject=["cornObject","sugarObject","wheatObject"];
            	 
            	 for (i = 0; i < listObject.length; i++) {

            	      var value = eval(listObject[i]);
            		 	dataToBeInserted.push({
            			   "subgroupId":value[0],
            			   "value":value[1],
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
	    	        url: "/metals/checkifcansavefoodstuff/"+today, 
	    	        dataType: 'json',
	    	        async:true,
	    	        cache: false,
	    	        timeout: 600000,
	    	        success: function (response) {
	    	        	if(response)
	    	        	{
							 $.ajax({
						        contentType: "application/json",
						        url: "/process/isrobottriggered/2/8",
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
						    	    	        url: "/metals/savefoodstuffdata",
						    	    	        data: JSON.stringify(dataToBeInserted),
						    	    	        dataType: 'json',
						    	    	        async:true,
						    	    	        cache: false,
						    	    	        timeout: 600000,
						    	    	        success: function (data) {
													
													getFilterData(commoditySubGroupValue);
						    	    	        	  
						  						 inputDataFoodStuff.value="";
						  		            	  $("#foodStuffDataformInput").css("display","block");
						  						  $("#foodStuffDataInputButtons").css("display","none"); 
						  						  $("#foodStuffDataInputGrid").css("display","none");
						  						
						  						$('#dateInputAudit').jqxDateTimeInput('setDate', $("#dateInput").jqxDateTimeInput('getDate'));
						    	        	    date=$.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
						    	        	  
						    				    filterDate=date;
						    				    
						    				      delete auditFoodStuffGridSource.localdata;   
							    				  auditFoodStuffGridSource.url='/metals/getfoodstuffauditdata/'+date;
							    				  foodStuffdataAdapter = new $.jqx.dataAdapter(auditFoodStuffGridSource);
							    				  $('#foodStuffAuditGrid').jqxGrid({source:foodStuffdataAdapter});
						    					 
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
                  $("#loadEnergyData").click(function () {
            	var date = new Date();
            	var dataToBeInserted = [];
            	
            	var oilObject=["1"];
            	var gazObject=["2"];
            	var diezelObject=["3"];
				var natgazUsObject=["4"];
				var natgazEurObject=["5"];
				
            	var rows = $('#energyDataInputGrid').jqxGrid('getrows');
            	for (i = 0; i < rows.length; i++) {
            	   oilObject.push(rows[i].oil);
            	   gazObject.push(rows[i].gasgall);
            	   diezelObject.push(rows[i].dieselgall);
            	   natgazUsObject.push(rows[i].natgasus);
            	   natgazEurObject.push(rows[i].natgaseur);
            	}

            	var listObject=["oilObject","gazObject","diezelObject","natgazUsObject","natgazEurObject"];
            	 
            	 for (i = 0; i < listObject.length; i++) {

            	      var value = eval(listObject[i]);
            		 	dataToBeInserted.push({
            			   "subgroupId":value[0],
            			   "value":value[1],
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
	    	        url: "/metals/checkifcansaveenergy/"+today, 
	    	        dataType: 'json',
	    	        async:true,
	    	        cache: false,
	    	        timeout: 600000,
	    	        success: function (response) {
	    	        	if(response)
	    	        	{
							 $.ajax({
						        contentType: "application/json",
						        url: "/process/isrobottriggered/2/9",
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
						    	    	        url: "/metals/saveenergydata",
						    	    	        data: JSON.stringify(dataToBeInserted),
						    	    	        dataType: 'json',
						    	    	        async:true,
						    	    	        cache: false,
						    	    	        timeout: 600000,
						    	    	        success: function (data) {
													
													getFilterData(commoditySubGroupValue);
						    	    	        	  
						  						 inputDataEnergy.value="";
						  		            	  $("#energyDataformInput").css("display","block");
						  						  $("#energyDataInputButtons").css("display","none"); 
						  						  $("#energyDataInputGrid").css("display","none");
						  						
						  						$('#dateInputAudit').jqxDateTimeInput('setDate', $("#dateInput").jqxDateTimeInput('getDate'));
						    	        	    date=$.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
						    	        	  
						    				    filterDate=date;
						    				    
						    				      delete auditEnergyGridSource.localdata;   
							    				  auditEnergyGridSource.url='/metals/getenergyauditdata/'+date;
							    				  energydataAdapter = new $.jqx.dataAdapter(auditEnergyGridSource);
							    				  $('#energyAuditGrid').jqxGrid({source:energydataAdapter});
						    					 
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
               
               
               
             	 $('#dateInputAudit').on('change', function (event) 
				 {  date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				    filterDate=date;
				     if (commoditySubGroupValue==1)
    				   {  delete auditGridSource.localdata;   
    				     auditGridSource.url='/metals/getpreciousauditdata/'+date;
    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
    					 $('#preciousAuditGrid').jqxGrid({source:dataAdapter});
    					}else if (commoditySubGroupValue==2)
    					{ delete auditBaseGridSource.localdata;   
    				     auditBaseGridSource.url='/metals/getbaseauditdata/'+date;
    					 basedataAdapter = new $.jqx.dataAdapter(auditBaseGridSource);
    					 $('#baseAuditGrid').jqxGrid({source:basedataAdapter});
    					 }else if (commoditySubGroupValue==3)
    					{ delete auditFoodStuffGridSource.localdata;   
    				     auditFoodStuffGridSource.url='/metals/getfoodstuffauditdata/'+date;
    					 foodStuffdataAdapter = new $.jqx.dataAdapter(auditFoodStuffGridSource);
    					 $('#foodStuffAuditGrid').jqxGrid({source:foodStuffdataAdapter});
    					 }else if (commoditySubGroupValue==4)
    					{ delete auditEnergyGridSource.localdata;   
    				     auditEnergyGridSource.url='/metals/getenergyauditdata/'+date;
    					 energydataAdapter = new $.jqx.dataAdapter(auditEnergyGridSource);
    					 $('#energyAuditGrid').jqxGrid({source:energydataAdapter});
    					 }
				 }); 

               $("#deletePreciousByDate").click(function () {
				$('#alertDeleteDataByDate-modal').modal('show'); 
		   		 date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				  $( "#alertTextDeleteDataByDate" ).empty();
		 		  $( "#alertTextDeleteDataByDate" ).append( "<p> Are you sure you want to Delete all Precious metals record for the date '"+date+"'?</p>" );
				 });
				 
				$("#deleteBaseByDate").click(function () {
				$('#alertDeleteBaseDataByDate-modal').modal('show'); 
		   		 date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				  $( "#alertBaseTextDeleteDataByDate" ).empty();
		 		  $( "#alertBaseTextDeleteDataByDate" ).append( "<p> Are you sure you want to Delete all Base metals record for the date '"+date+"'?</p>" );
				 }); 
				 
				$("#deleteFoodStuffByDate").click(function () {
				$('#alertDeleteFoodStuffDataByDate-modal').modal('show'); 
		   		 date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				  $( "#alertFoodStuffTextDeleteDataByDate" ).empty();
		 		  $( "#alertFoodStuffTextDeleteDataByDate" ).append( "<p> Are you sure you want to Delete all FoodStuff record for the date '"+date+"'?</p>" );
				 }); 
				 
				$("#deleteEnergyByDate").click(function () {
				$('#alertDeleteEnergyDataByDate-modal').modal('show'); 
		   		 date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				  $( "#alertEnergyTextDeleteDataByDate" ).empty();
		 		  $( "#alertEnergyTextDeleteDataByDate" ).append( "<p> Are you sure you want to Delete all Energy record for the date '"+date+"'?</p>" );
				 }); 
				 
			$("#filter").click(function () {
            	
            	getFilterData(commoditySubGroupValue);
               });    
		   });// end document ready
		   
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
				     if(auditBaseGridSource.url=='' || date!=filterDate)
				     { 
				    	 delete auditBaseGridSource.localdata;   
    				     auditBaseGridSource.url='/metals/getbaseauditdata/'+date;
    					 dataAdapter = new $.jqx.dataAdapter(auditBaseGridSource);
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
			     function EditFoodStuff(row, event) {
				
				     isedit=true;
					 var data=$("#foodStuffAuditGrid").jqxGrid('getrowdata', row);	
				     oldDataJson={
		               "corn":data.corn,
					   "sugar":data.sugar,
					   "wheat":data.wheat,
					   
				     };
				     selectedRow.editrow = row;
				     date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				     if(auditFoodStuffGridSource.url=='' || date!=filterDate)
				     { 
				    	 delete auditFoodStuffGridSource.localdata;   
    				     auditFoodStuffGridSource.url='/metals/getfoodstuffauditdata/'+date;
    					 dataAdapter = new $.jqx.dataAdapter(auditFoodStuffGridSource);
    					 $('#foodStuffAuditGrid').jqxGrid({source:dataAdapter});
				     } 
				     setTimeout(function(){
				    	  if(($('#foodStuffAuditGrid').jqxGrid('getrows')[0].corn!=null)&&
				    		 ($('#foodStuffAuditGrid').jqxGrid('getrows')[0].sugar!=null)&&
				    		 ($('#foodStuffAuditGrid').jqxGrid('getrows')[0].wheat!=null))
						{
					    	$("#foodStuffAuditGrid").jqxGrid('beginrowedit', row);
					    	$("#editFoodstuff"+row).css("display","none");
							$("#actionButtonsFoodstuff"+row).css("display","contents"); 
					    	if (event) {
					    		if (event.preventDefault) {
					    			event.preventDefault();
					    		}
					    	} 
						}
				    	
				    	return false;
				     }, 300);
			    }	 
			    
			  function EditEnergy(row, event) {
				
				     isedit=true;
					 var data=$("#energyAuditGrid").jqxGrid('getrowdata', row);	
				     oldDataJson={
		               "oil":data.oil,
					   "gasolineGall":data.gasolineGall,
					   "dieselGall":data.dieselGall,
					   "natgasUsd":data.natgasUsd,
					   "natgasEur":data.natgasEur
					   
				     };
				     selectedRow.editrow = row;
				     date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				     if(auditEnergyGridSource.url=='' || date!=filterDate)
				     { 
				    	 delete auditEnergyGridSource.localdata;   
    				     auditEnergyGridSource.url='/metals/getenergyauditdata/'+date;
    					 dataAdapter = new $.jqx.dataAdapter(auditEnergyGridSource);
    					 $('#energyAuditGrid').jqxGrid({source:dataAdapter});
				     } 
				     setTimeout(function(){
				    	  if(($('#energyAuditGrid').jqxGrid('getrows')[0].oil!=null)&&
				    		 ($('#energyAuditGrid').jqxGrid('getrows')[0].gasolineGall!=null)&&
				    		 ($('#energyAuditGrid').jqxGrid('getrows')[0].dieselGall!=null)&&
				    		 ($('#energyAuditGrid').jqxGrid('getrows')[0].natgasUsd!=null)&&
				    		 ($('#energyAuditGrid').jqxGrid('getrows')[0].natgasEur!=null))
						{
					    	$("#energyAuditGrid").jqxGrid('beginrowedit', row);
					    	$("#editEnergy"+row).css("display","none");
							$("#actionButtonsEnergy"+row).css("display","contents"); 
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
				     
                    var keys=["gold","silver","platinum"];
                    var updatedMetalsJson=[];
                    for (let i = 0; i < keys.length; i++) {
	                    if(updatedDataJson[keys[i]]!=oldDataJson[keys[i]])
                          updatedMetalsJson.push({"assetId": 2,
                          						  "groupId":getGroupId(commoditySubGroupValue),
												  "value": keys[i].toUpperCase()});  
	                }
                    
					dataToBeUpdated.push({
	         			   "subgroupId":"1",
	         			   "value":updatedData.gold.replaceAll(',',''),
	         			   "referdate": date
	         			});
						dataToBeUpdated.push({
		         			   "subgroupId":"3",
		         			   "value":updatedData.platinum.replaceAll(',',''),
		         			   "referdate": date
		         			});
						dataToBeUpdated.push({
		         			   "subgroupId":"2",
		         			   "value":updatedData.silver.replaceAll(',',''),
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
			  
		                             updateRobotNewsOnChangeColumns(updatedMetalsJson);
		                          
		      	    	        	  delete auditGridSource.localdata;   
				    				     auditGridSource.url='/metals/getpreciousauditdata/'+date;
				    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
				    					 $('#preciousAuditGrid').jqxGrid({source:dataAdapter});
		      						 
		      						getFilterData(commoditySubGroupValue);
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
				     
                    var keys=["copper","aluminum","steel","lumber"];
                    var updatedMetalsJson=[];
                    for (let i = 0; i < keys.length; i++) {
	                    if(updatedDataJson[keys[i]]!=oldDataJson[keys[i]])
                          updatedMetalsJson.push({"assetId": 2,
                         						  "groupId":getGroupId(commoditySubGroupValue),
												  "value": keys[i].toUpperCase()});
	                }
                   
					    dataToBeUpdated.push({
	         			   "subgroupId":"1",
	         			   "value":updatedData.copper.replaceAll(',',''),
	         			   "referdate": date
	         			});
						dataToBeUpdated.push({
		         			   "subgroupId":"2",
		         			   "value":updatedData.aluminum.replaceAll(',',''),
		         			   "referdate": date
		         			});
						dataToBeUpdated.push({
		         			   "subgroupId":"3",
		         			   "value":updatedData.steel.replaceAll(',',''),
		         			   "referdate": date
		         			});
						dataToBeUpdated.push({
		         			   "subgroupId":"4",
		         			   "value":updatedData.lumber.replaceAll(',',''),
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
			  
		                           		 updateRobotNewsOnChangeColumns(updatedMetalsJson);
		                          
	      	    	        		     delete auditBaseGridSource.localdata;   
				    				     auditBaseGridSource.url='/metals/getbaseauditdata/'+date;
				    					 basedataAdapter = new $.jqx.dataAdapter(auditBaseGridSource);
				    					 $('#baseAuditGrid').jqxGrid({source:basedataAdapter});
		      						 
		      						getFilterData(commoditySubGroupValue);
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
			    function UpdateFoodStuff(row, event) {
				   
				   isupdate=true;
				   var dataToBeUpdated = [];
				   var updatedData = $("#foodStuffAuditGrid").jqxGrid('getrowdata', row);
				   selectedRow.editrow = -1;
				    $("#foodStuffAuditGrid").jqxGrid('endrowedit', row);
				    var updatedData = $("#foodStuffAuditGrid").jqxGrid('getrowdata', row);
				    var updatedDataJson={
		               "corn":updatedData.corn,
					   "sugar":updatedData.sugar,
					   "wheat":updatedData.wheat
				     };
				     
                    var keys=["corn","sugar","wheat"];
                    var updatedMetalsJson=[];
                    for (let i = 0; i < keys.length; i++) {
	                    if(updatedDataJson[keys[i]]!=oldDataJson[keys[i]])
                          updatedMetalsJson.push({"assetId": 2,
                       						      "groupId":getGroupId(commoditySubGroupValue),
												  "value": keys[i].toUpperCase()});
	                }
                   
					    dataToBeUpdated.push({
	         			   "subgroupId":"1",
	         			   "value":updatedData.corn.replaceAll(',',''),
	         			   "referdate": date
	         			});
						dataToBeUpdated.push({
		         			   "subgroupId":"2",
		         			   "value":updatedData.sugar.replaceAll(',',''),
		         			   "referdate": date
		         			});
						dataToBeUpdated.push({
		         			   "subgroupId":"3",
		         			   "value":updatedData.wheat.replaceAll(',',''),
		         			   "referdate": date
		         			});
		      	       	  $.ajax({
		      	    	        type: "POST",
		      	    	        contentType: "application/json",
		      	    	        url: "/metals/updatefoodstuffauditdata",
		      	    	        data: JSON.stringify(dataToBeUpdated),
		      	    	        dataType: 'json',
		      	    	        async:true,
		      	    	        cache: false,
		      	    	        timeout: 600000,
		      	    	        success: function (data) {
			  
		                           		 updateRobotNewsOnChangeColumns(updatedMetalsJson);
		                          
	      	    	        		     delete auditFoodStuffGridSource.localdata;   
				    				     auditFoodStuffGridSource.url='/metals/getfoodstuffauditdata/'+date;
				    					 foodStuffdataAdapter = new $.jqx.dataAdapter(auditFoodStuffGridSource);
				    					 $('#foodStuffAuditGrid').jqxGrid({source:foodStuffdataAdapter});
		      						 
		      						getFilterData(commoditySubGroupValue);
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
			   function UpdateEnergy(row, event) {
				
				   isupdate=true;
				   var dataToBeUpdated = [];
				   var updatedData = $("#energyAuditGrid").jqxGrid('getrowdata', row);
				   selectedRow.editrow = -1;
				    $("#energyAuditGrid").jqxGrid('endrowedit', row);
				    var updatedData = $("#energyAuditGrid").jqxGrid('getrowdata', row);
				    var updatedDataJson={
		               "oil":updatedData.oil,
					   "gasolineGall":updatedData.gasolineGall,
					   "dieselGall":updatedData.dieselGall,
					   "natgasUsd":updatedData.natgasUsd,
					   "natgasEur":updatedData.natgasEur
				     };
				      
                    var keys=["oil","gasolineGall","dieselGall","natgasUsd","natgasEur"];
                    var updatedMetalsJson=[];
                    for (let i = 0; i < keys.length; i++) {
	                    if(updatedDataJson[keys[i]]!=oldDataJson[keys[i]])
                          updatedMetalsJson.push({"assetId": 2,
                       						      "groupId":getGroupId(commoditySubGroupValue),
												  "value": keys[i].toUpperCase()});
	                }
                   
					    dataToBeUpdated.push({
	         			   "subgroupId":"1",
	         			   "value":updatedData.oil.replaceAll(',',''),
	         			   "referdate": date
	         			});
						dataToBeUpdated.push({
		         			   "subgroupId":"2",
		         			   "value":updatedData.gasolineGall.replaceAll(',',''),
		         			   "referdate": date
		         			});
						dataToBeUpdated.push({
		         			   "subgroupId":"3",
		         			   "value":updatedData.dieselGall.replaceAll(',',''),
		         			   "referdate": date
		         			});
		         		dataToBeUpdated.push({
		         			   "subgroupId":"4",
		         			   "value":updatedData.natgasUsd.replaceAll(',',''),
		         			   "referdate": date
		         			});
		         		dataToBeUpdated.push({
		         			   "subgroupId":"5",
		         			   "value":updatedData.natgasEur.replaceAll(',',''),
		         			   "referdate": date
		         			});
		      	       	  $.ajax({
		      	    	        type: "POST",
		      	    	        contentType: "application/json",
		      	    	        url: "/metals/updateenergyauditdata",
		      	    	        data: JSON.stringify(dataToBeUpdated),
		      	    	        dataType: 'json',
		      	    	        async:true,
		      	    	        cache: false,
		      	    	        timeout: 600000,
		      	    	        success: function (data) {
			  
		                           		 updateRobotNewsOnChangeColumns(updatedMetalsJson);
		                          
	      	    	        		     delete auditEnergyGridSource.localdata;   
				    				     auditEnergyGridSource.url='/metals/getenergyauditdata/'+date;
				    					 energydataAdapter = new $.jqx.dataAdapter(auditEnergyGridSource);
				    					 $('#energyAuditGrid').jqxGrid({source:energydataAdapter});
		      						 
		      						getFilterData(commoditySubGroupValue);
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
			  function CancelFoodStuff(row) {
				  isedit=false;
				  isupdate=false;
				   selectedRow.editrow = row;
			    	$("#foodStuffAuditGrid").jqxGrid('endrowedit', row, true);
			 }
			   function CancelEnergy(row) {
				  isedit=false;
				  isupdate=false;
				  selectedRow.editrow = row;
			    	$("#energyAuditGrid").jqxGrid('endrowedit', row, true);
			 }
			    function deleteDataByDate()
				{
					$('#alertDeleteDataByDate-modal').modal('hide'); 
					date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				    
			     $.ajax({
			             type : "DELETE",
			             url : "/metals/deletepreciousbyreferdate/" + date,
			             success: function (result) {   
					$.ajax({
		    	        contentType: "application/json",
		    	        url: "/metals/checkifcansavebase/"+date,
		    	        dataType: 'json',
		    	        async:true,
		    	        cache: false,
		    	        timeout: 600000,
		    	        success: function (response) {
		    	        	if(!response)
		    	        	{	 delete auditGridSource.localdata;   
		    				     auditGridSource.url='';
		    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
		    					 $('#preciousAuditGrid').jqxGrid({source:dataAdapter});
		    					 }
		    	        	else{
							 getPreciousAuditGridSource();  
							 }
		    	        	},
				             error: function (e) {
				                 console.log(e);
				             }
				         });
				    getFilterData(commoditySubGroupValue);  
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
				function deleteBaseDataByDate()
				{
					$('#alertDeleteBaseDataByDate-modal').modal('hide'); 
					date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				    
			     $.ajax({
			             type : "DELETE",
			             url : "/metals/deletebasebyreferdate/" + date,
			             success: function (result) { 
							 $.ajax({
		    	        contentType: "application/json",
		    	        url: "/metals/checkifcansavebase/"+date,
		    	        dataType: 'json',
		    	        async:true,
		    	        cache: false,
		    	        timeout: 600000,
		    	        success: function (response) {
		    	        	if(!response)
		    	        	{	 delete auditBaseGridSource.localdata;   
		    				     auditBaseGridSource.url='';
		    					 basedataAdapter = new $.jqx.dataAdapter(auditBaseGridSource);
		    					 $('#baseAuditGrid').jqxGrid({source:basedataAdapter});
						    }
		    	        	else{
							  getBaseAuditGridSource(); 
							 }
		    	        	},
				             error: function (e) {
				                 console.log(e);
				             }
				         });
							    
					getFilterData(commoditySubGroupValue);  
			        $('#alertDeleteBaseDataByDate-modal').modal('hide');

 					$( "#successDelete" ).empty();
		 		    $( "#successDelete" ).append( "<p> All record for the date '"+date+"' has been deleted</p>" );
				
					$('#alertInfoDeleteDataByDate-modal').modal('show');  
			             },
			             error: function (e) {
			                 console.log(e);
			             }
			         });
				
				}
				function deleteFoodStuffDataByDate()
				{
					$('#alertDeleteFoodStuffDataByDate-modal').modal('hide'); 
					date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				    
			     $.ajax({
			             type : "DELETE",
			             url : "/metals/deletefoodstuffbyreferdate/" + date,
			             success: function (result) { 
							 $.ajax({
					    	        contentType: "application/json",
					    	        url: "/metals/checkifcansavefoodstuff/"+date,
					    	        dataType: 'json',
					    	        async:true,
					    	        cache: false,
					    	        timeout: 600000,
					    	        success: function (response) {
					    	        	if(!response)
					    	        	{	 delete auditFoodStuffGridSource.localdata;   
					    				     auditFoodStuffGridSource.url='';
					    					 foodStuffdataAdapter = new $.jqx.dataAdapter(auditFoodStuffGridSource);
					    					 $('#foodStuffAuditGrid').jqxGrid({source:foodStuffdataAdapter});
									    }
					    	        	else{
										  getFoodStuffAuditGridSource(); 
										 }
					    	        	},
							             error: function (e) {
							                 console.log(e);
							             }
							         });
							    
					getFilterData(commoditySubGroupValue);  
			        $('#alertDeleteFoodStuffDataByDate-modal').modal('hide');

 					$( "#successDelete" ).empty();
		 		    $( "#successDelete" ).append( "<p> All record for the date '"+date+"' has been deleted</p>" );
				
					$('#alertInfoDeleteDataByDate-modal').modal('show');  
			             },
			             error: function (e) {
			                 console.log(e);
			             }
			         });
				
				}
				function deleteEnergyDataByDate()
				{
					$('#alertDeleteEnergyDataByDate-modal').modal('hide'); 
					date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				    
			     $.ajax({
			             type : "DELETE",
			             url : "/metals/deleteenergybyreferdate/" + date,
			             success: function (result) { 
							 $.ajax({
					    	        contentType: "application/json",
					    	        url: "/metals/checkifcansaveenergy/"+date,
					    	        dataType: 'json',
					    	        async:true,
					    	        cache: false,
					    	        timeout: 600000,
					    	        success: function (response) {
					    	        	if(!response)
					    	        	{	 delete auditEnergyGridSource.localdata;   
					    				     auditEnergyGridSource.url='';
					    					 energydataAdapter = new $.jqx.dataAdapter(auditEnergyGridSource);
					    					 $('#energyAuditGrid').jqxGrid({source:energydataAdapter});
									    }
					    	        	else{
										  getEnergyAuditGridSource(); 
										 }
					    	        	},
							             error: function (e) {
							                 console.log(e);
							             }
							         });
							    
					getFilterData(commoditySubGroupValue);  
			        $('#alertDeleteEnergyDataByDate-modal').modal('hide');

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
			    	        url: "/metals/getlatestprecious",
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
						    				     auditGridSource.url='/metals/getpreciousauditdata/'+date;
						    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
						    					 $('#preciousAuditGrid').jqxGrid({source:dataAdapter});
						    			 }
			    	   			   }
			    	        },
			    	        error: function (e) {
			    	        	
								  console.log("ERROR : ", e);
			
			    	        }
			    	    });
			
			}
			
				function getBaseAuditGridSource(){
				
					 $.ajax({
			    	        contentType: "application/json",
			    	        url: "/metals/getlatestbase",
			    	        dataType: 'text',
			    	        async:true,
			    	        cache: false,
			    	        timeout: 600000,
			    	        success: function (response) {
			    	        	if(response!='')
			    	        	 {$('#dateInputAudit').jqxDateTimeInput('setDate', new Date(response.split("-")[1]+","+response.split("-")[2]+","+response.split("-")[0]));
			    	        	    date=$.jqx.dataFormat.formatdate(new Date(response),  'dd-MM-yyyy');
			    	        	  var dbDate=  new Date(response.split("-")[1]+","+response.split("-")[2]+","+response.split("-")[0]);
								  var systemDate=new Date();
			    	        	  systemDate.setHours(0,0,0,0);
			    				  
								if( dbDate.toDateString() == systemDate.toDateString())
								 {	  
			    				     filterDate=date;
						    	     delete auditBaseGridSource.localdata;   
			    				     auditBaseGridSource.url='/metals/getbaseauditdata/'+date;
			    					 basedataAdapter = new $.jqx.dataAdapter(auditBaseGridSource);
			    					 $('#baseAuditGrid').jqxGrid({source:basedataAdapter});
			    					 }
			    	        	}
			    	        },
			    	        error: function (e) {
			    	        	
								  console.log("ERROR : ", e);
			
			    	        }
			    	    });
			
			}
			
			function getFoodStuffAuditGridSource(){
				
					 $.ajax({
			    	        contentType: "application/json",
			    	        url: "/metals/getlatestfoodstuff",
			    	        dataType: 'text',
			    	        async:true,
			    	        cache: false,
			    	        timeout: 600000,
			    	        success: function (response) {
			    	        	if(response!='')
			    	        	 {$('#dateInputAudit').jqxDateTimeInput('setDate', new Date(response.split("-")[1]+","+response.split("-")[2]+","+response.split("-")[0]));
			    	        	    date=$.jqx.dataFormat.formatdate(new Date(response),  'dd-MM-yyyy');
			    	        	  var dbDate=  new Date(response.split("-")[1]+","+response.split("-")[2]+","+response.split("-")[0]);
								  var systemDate=new Date();
			    	        	  systemDate.setHours(0,0,0,0);
			    				  
								if( dbDate.toDateString() == systemDate.toDateString())
								 {	  
			    				     filterDate=date;
						    	     delete auditFoodStuffGridSource.localdata;   
			    				     auditFoodStuffGridSource.url='/metals/getfoodstuffauditdata/'+date;
			    					 foodStuffDataAdapter = new $.jqx.dataAdapter(auditFoodStuffGridSource);
			    					 $('#foodStuffAuditGrid').jqxGrid({source:foodStuffDataAdapter});
			    					 }
			    	        	}
			    	        },
			    	        error: function (e) {
			    	        	
								  console.log("ERROR : ", e);
			
			    	        }
			    	    });
			
					}
			function getEnergyAuditGridSource(){
				
					 $.ajax({
			    	        contentType: "application/json",
			    	        url: "/metals/getlatestenergy",
			    	        dataType: 'text',
			    	        async:true,
			    	        cache: false,
			    	        timeout: 600000,
			    	        success: function (response) {
			    	        	if(response!='')
			    	        	 {$('#dateInputAudit').jqxDateTimeInput('setDate', new Date(response.split("-")[1]+","+response.split("-")[2]+","+response.split("-")[0]));
			    	        	    date=$.jqx.dataFormat.formatdate(new Date(response),  'dd-MM-yyyy');
			    	        	  var dbDate=  new Date(response.split("-")[1]+","+response.split("-")[2]+","+response.split("-")[0]);
								  var systemDate=new Date();
			    	        	  systemDate.setHours(0,0,0,0);
			    				  
								if( dbDate.toDateString() == systemDate.toDateString())
								 {	  
			    				     filterDate=date;
						    	     delete auditEnergyGridSource.localdata;   
			    				     auditEnergyGridSource.url='/metals/getenergyauditdata/'+date;
			    					 energyDataAdapter = new $.jqx.dataAdapter(auditEnergyGridSource);
			    					 $('#energyAuditGrid').jqxGrid({source:energyDataAdapter});
			    					 }
			    	        	}
			    	        },
			    	        error: function (e) {
			    	        	
								  console.log("ERROR : ", e);
			
			    	        }
			    	    });
			
					}
			
				function getAuditGridSource(){
				    var preciousDate=null;
				    var baseDate=null;
				    var preciousDateResponce=null;
				    var baseDateResponce=null;
				    
					 $.ajax({
			    	        contentType: "application/json",
			    	        url: "/metals/getlatestprecious",
			    	        dataType: 'text',
			    	        async:true,
			    	        cache: false,
			    	        timeout: 600000,
			    	        success: function (response) {
			    	        	if(response!='')
			    	        	  { preciousDateResponce = response;
									preciousDate = new Date(response.split("-")[1]+","+response.split("-")[2]+","+response.split("-")[0]);
								   }
								   	 $.ajax({
			    	        contentType: "application/json",
			    	        url: "/metals/getlatestbase",
			    	        dataType: 'text',
			    	        async:true,
			    	        cache: false,
			    	        timeout: 600000,
			    	        success: function (response) {
			    	        	if(response!='')
			    	        	 {
								   baseDateResponce = response;
			    	        	   baseDate=  new Date(response.split("-")[1]+","+response.split("-")[2]+","+response.split("-")[0]);
								  }
								   
			    	    if(preciousDate <= baseDate)
			    	         {
									$('#dateInputAudit').jqxDateTimeInput('setDate', baseDate);
			    	        	     date=$.jqx.dataFormat.formatdate(new Date(baseDateResponce),  'dd-MM-yyyy');
			    	        	     
			    	        	     var dbDate=  baseDate;
									 var systemDate=new Date();
			    	        	     systemDate.setHours(0,0,0,0);
			    				  
										if( dbDate.toDateString() == systemDate.toDateString())
										 {		filterDate=date;
						    				    delete auditGridSource.localdata;   
						    				     auditGridSource.url='/metals/getpreciousauditdata/'+date;
						    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
						    					 $('#preciousAuditGrid').jqxGrid({source:dataAdapter});
						    			 }
						    			 
						    			 if( dbDate.toDateString() == systemDate.toDateString())
										 {	  
				    				     filterDate=date;
							    	     delete auditBaseGridSource.localdata;   
				    				     auditBaseGridSource.url='/metals/getbaseauditdata/'+date;
				    					 basedataAdapter = new $.jqx.dataAdapter(auditBaseGridSource);
				    					 $('#baseAuditGrid').jqxGrid({source:basedataAdapter});
				    					 }
			    	        	}
			    	       else 
			    	         {
									$('#dateInputAudit').jqxDateTimeInput('setDate', preciousDate);
			    	        	     date=$.jqx.dataFormat.formatdate(new Date(preciousDateResponce),  'dd-MM-yyyy');
			    	        	     
			    	        	     var dbDate=  preciousDate;
									 var systemDate=new Date();
			    	        	     systemDate.setHours(0,0,0,0);
			    				  
										if( dbDate.toDateString() == systemDate.toDateString())
										 {		filterDate=date;
						    				    delete auditGridSource.localdata;   
						    				     auditGridSource.url='/metals/getpreciousauditdata/'+date;
						    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
						    					 $('#preciousAuditGrid').jqxGrid({source:dataAdapter});
						    			 }
						    			 
						    			 if( dbDate.toDateString() == systemDate.toDateString())
										 {	  
				    				     filterDate=date;
							    	     delete auditBaseGridSource.localdata;   
				    				     auditBaseGridSource.url='/metals/getbaseauditdata/'+date;
				    					 basedataAdapter = new $.jqx.dataAdapter(auditBaseGridSource);
				    					 $('#baseAuditGrid').jqxGrid({source:basedataAdapter});
				    					 }
			    	        	}
			    	        	 
			
			    	        },
			    	        error: function (e) {
			    	        	
								  console.log("ERROR : ", e);
			
			    	        }
			    	    });
			    	        },
			    	        error: function (e) {
			    	        	
								  console.log("ERROR : ", e);
			
			    	        }
			    	    });
				
			    	   
			}
		  function getFilterData(commoditySubGroupValue)
		  {
          	var SelectedSearchDTO=[];
          	var allItems=0;
          	var checkedItem=[];
          	var json;
          	var precious=[];
          	var base=[];
          	var foodStuff=[];
          	var energy=[];
            $('#grid').jqxGrid({ showdefaultloadelement: true}); 
          	var itemPrecious = 0;
          	var itemBase = 0;
          	var itemfoodStuff = 0;
            var itemEnergy = 0;
            
            if (commoditySubGroupValue==1)
		     {	for (i = 0; i < metalsPreciousItem.length; i++) {
		         		if($(metalsPreciousItem[i]).jqxCheckBox('checked'))
		         		{		
		         		    precious.push(metalsPreciousItem[i].split("Box")[1].toUpperCase());	
		          			itemPrecious=1;
		          			allItems=allItems+1;
		          			checkedItem.push(metalsPreciousItem[i]);
		         		}
		          	}
		         	
		          	if(itemPrecious!=0)
		          	{
		          		SelectedSearchDTO.push({
		          		   "groupId":"1",
		       			   "selectedValues":precious,
		       			});
		          		 precious=[];
		          	}
          	} else if (commoditySubGroupValue==2)
	        	 {
					for (i = 0; i < metalsBaseItem.length; i++) {
	         		if($(metalsBaseItem[i]).jqxCheckBox('checked'))
	         		{		
	         		    base.push(metalsBaseItem[i].split("Box")[1].toUpperCase());	
	          			itemBase=1;
	          			allItems=allItems+1;
	          			checkedItem.push(metalsBaseItem[i]);
	         		}
		          	}
		         	
		          	if(itemBase!=0)
		          	{
		          		SelectedSearchDTO.push({
		          		   "groupId":"2",
		       			   "selectedValues":base,
		       			});
		          		 base=[];
	          	}
        	}
        	 else if (commoditySubGroupValue==3)
	        	 {
					for (i = 0; i < foodStuffItem.length; i++) {
	         		if($(foodStuffItem[i]).jqxCheckBox('checked'))
	         		{		
	         		    foodStuff.push(foodStuffItem[i].split("Box")[1].toUpperCase());	
	          			itemfoodStuff=1;
	          			allItems=allItems+1;
	          			checkedItem.push(foodStuffItem[i]);
	         		}
		          	}
		         	
		          	if(itemfoodStuff!=0)
		          	{
		          		SelectedSearchDTO.push({
		          		   "groupId":"3",
		       			   "selectedValues":foodStuff,
		       			});
		          		itemfoodStuff=[];
	          	}
        	} else if (commoditySubGroupValue==4)
	        	 {
					for (i = 0; i < energyItem.length; i++) {
	         		if($(energyItem[i]).jqxCheckBox('checked'))
	         		{		
	         		    energy.push(energyItem[i].split("Box")[1].toUpperCase());	
	          			itemEnergy=1;
	          			allItems=allItems+1;
	          			checkedItem.push(energyItem[i]);
	         		}
		          	}
		         	
		          	if(itemEnergy!=0)
		          	{
		          		SelectedSearchDTO.push({
		          		   "groupId":"4",
		       			   "selectedValues":energy,
		       			});
		          		itemEnergy=[];
	          	}
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
    	    	        url: "/metals/getgriddata",
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
	  							                 
	  					saveFilterHistory(commoditySubGroupValue,checkedItem);
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
		    	        url: "/robot/callrobotsasync/2/"+getGroupId(commoditySubGroupValue),
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
		    
			location.href = "/bourse/metals?commodity=" + divNum;
		}
	function rendercommoditySubGroup(commoditySubGroupValue){
		
		if(commoditySubGroupValue==1)
		{
			 $("#deletePreciousByDate").jqxButton({  theme:'dark', width: 90, height: 30,template: "danger" });
			 $("#CancelPreciousData").jqxButton({ theme: 'dark',height:30,width:74 });
	         $("#loadPreciousData").jqxButton({ theme: 'dark',height:30,width:74 }); 
		     
		    for(i=0; i<metalsPreciousItem.length; i++)
			   {
		    	$(metalsPreciousItem[i]).jqxCheckBox({ theme:'dark', width: 60, height: 25, boxSize:"0px" });
		       }  
		          $('#precious-input').on('keydown', function(event) {
					  if (event.keyCode === 13) {
					    event.preventDefault(); // prevent form submission
					    $('#precious-input').blur();
					  }
					});
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
	           getPreciousAuditGridSource();
		}
		else
			if (commoditySubGroupValue==2)
			{
				
		      $("#deleteBaseByDate").jqxButton({  theme:'dark', width: 90, height: 30,template: "danger" });
			  $("#CancelBaseData").jqxButton({ theme: 'dark',height:30,width:74 });
	          $("#loadBaseData").jqxButton({ theme: 'dark',height:30,width:74 }); 
	          
	           for(i=0; i<metalsBaseItem.length; i++)
			   {
		    	$(metalsBaseItem[i]).jqxCheckBox({ theme:'dark', width: 60, height: 25, boxSize:"0px" });
		       }
		       
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
		       $('#base-input').on('keydown', function(event) {
					  if (event.keyCode === 13) {
					    event.preventDefault(); // prevent form submission
					    $('#base-input').blur();
					  }
					});
	          inputDataBase.addEventListener("blur", function() {
				  if($("#base-input").val()!="")
					  {
					  $("#baseDataformInput").css("display","none");
					  $("#baseDataInputGrid").css("display","block"); 
					  $("#baseDataInputButtons").css("display","block"); 
			
					 for(i=0; i<metalsBaseItem.length; i++)
					   {
				    	$(metalsBaseItem[i]).jqxCheckBox({ theme:'dark', width: 60, height: 25, boxSize:"0px" });
				       }
				       
			
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
				getBaseAuditGridSource();
			}else
			if (commoditySubGroupValue==3)
			{
				
		      $("#deleteFoodStuffByDate").jqxButton({  theme:'dark', width: 90, height: 30,template: "danger" });
			  $("#CancelFoodStuffData").jqxButton({ theme: 'dark',height:30,width:74 });
	          $("#loadFoodStuffData").jqxButton({ theme: 'dark',height:30,width:74 }); 
	          
	           for(i=0; i<foodStuffItem.length; i++)
			   {
		    	$(foodStuffItem[i]).jqxCheckBox({ theme:'dark', width: 60, height: 25, boxSize:"0px" });
		       }
		       
		        auditFoodStuffGridSource =
	            {    
	            localdata:foodStuffAuditDefaultData,
	            datatype: "json",
                datafields: [
                    { name: 'corn', type: 'string' },
                    { name: 'sugar', type: 'string' },
                    { name: 'wheat', type: 'string' }
                ],
                url:''
	            };
	            var foodStuffDataAdapter = new $.jqx.dataAdapter(auditFoodStuffGridSource);
	            $("#foodStuffAuditGrid").jqxGrid(
	            {
	                width: '100%',
	                source: foodStuffDataAdapter,  
	                theme:'dark',
	                autoheight: true,
	                editable: true,
	                selectionmode: 'none',
	                editmode: 'selectedrow',
	                columns: [ 
	                	   { text: '',editable:false, datafield: 'Edit',width:'22%',cellsrenderer: function (row) {
		                	return "<input class=\"edit\" type=\"button\" onclick='EditFoodStuff(" + row + ", event)' id=\"editFoodstuff"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtonsFoodstuff"+row+"\" style=\"display:none\"><input  onclick='UpdateFoodStuff(" + row + ", event)' class=\"update\" type=\"button\" id=\"updatefoodstuff\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='CancelFoodStuff(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
		                    
		                  }
		                  },  
		                  { text: 'TON of CORN', datafield: 'corn', width: '26%' },
		                  { text: 'TON of SUGAR', datafield: 'sugar', width: '26%' },
		                  { text: 'TON of WHEAT', datafield: 'wheat', width: '26%' },
	                ]
	            });
		       $('#foodStuff-input').on('keydown', function(event) {
					  if (event.keyCode === 13) {
					    event.preventDefault(); // prevent form submission
					    $('#foodStuff-input').blur();
					  }
					});
	          inputDataFoodStuff.addEventListener("blur", function() {
				  if($("#foodStuff-input").val()!="")
					  {
					  $("#foodStuffDataformInput").css("display","none");
					  $("#foodStuffDataInputGrid").css("display","block"); 
					  $("#foodStuffDataInputButtons").css("display","block"); 
			
					 for(i=0; i<foodStuffItem.length; i++)
					   {
				    	$(foodStuffItem[i]).jqxCheckBox({ theme:'dark', width: 60, height: 25, boxSize:"0px" });
				       }
				       
			
					  var localdata = [];

					  var dataIput =$("#foodStuff-input").val()
					  var dataInputRows = dataIput.split(/\r?\n/);
					  var rowData = dataInputRows[0].split(/\r?\t/);
					   localdata.push({
					  			"corn": rowData[0],
					  			"sugar":  rowData[1],
					  			"wheat": rowData[2],
					  		});
					  
					  var dataInputGridSource =
			            {
			                datatype: "json",
			                datafields: [
			                    { name: 'corn', type: 'string' },
			                    { name: 'sugar', type: 'string' },
			                    { name: 'wheat', type: 'string' }
			                ],
			                localData:localdata
			            };
			             var dataAdapter = new $.jqx.dataAdapter(dataInputGridSource);
			            // initialize jqxGrid
			            $("#foodStuffDataInputGrid").jqxGrid(
			            {
			                width: '100%',
			                source: dataAdapter,  
			                theme:'dark',
			                enabletooltips: true,
			                selectionmode: 'none',
			                autoheight: true,
			                columns: [ 
			                      { text: '<img height="48" width="48" src="/img/corn.png">', datafield: 'corn', width: '33.3%' },
				                  { text: '<img height="48" width="48" src="/img/sugar.png">', datafield: 'sugar', width: '33.3%'},
				                  { text: '<img height="48" width="48" src="/img/wheat.png">', datafield: 'wheat', width: '33.3%' }
			                ]
			            });
					  
					  }
				});  
				getFoodStuffAuditGridSource();
			}else
			if (commoditySubGroupValue==4)
			{
				
		      $("#deleteEnergyByDate").jqxButton({  theme:'dark', width: 90, height: 30,template: "danger" });
			  $("#CancelEnergyData").jqxButton({ theme: 'dark',height:30,width:74 });
	          $("#loadEnergyData").jqxButton({ theme: 'dark',height:30,width:74 }); 
	          
	           for(i=0; i<energyItem.length; i++)
			   {
		    	$(energyItem[i]).jqxCheckBox({ theme:'dark', width: 60, height: 25, boxSize:"0px" });
		       }
		       
		        auditEnergyGridSource =
	            {    
	            localdata:energyAuditDefaultData,
	            datatype: "json",
                datafields: [
                    { name: 'oil', type: 'string' },
                    { name: 'gasolineGall', type: 'string' },
                    { name: 'gasolineLitre', type: 'string' },
                    { name: 'dieselGall', type: 'string' },
                    { name: 'dieselTon', type: 'string' },
                    { name: 'natgasUsd', type: 'string' },
                    { name: 'natgasEur', type: 'string' }
                ],
                url:''
	            };
	            var energyDataAdapter = new $.jqx.dataAdapter(auditEnergyGridSource);
	            $("#energyAuditGrid").jqxGrid(
	            {
	                width: '100%',
	                source: energyDataAdapter,  
	                theme:'dark',
	                autoheight: true,
	                editable: true,
	                selectionmode: 'none',
	                editmode: 'selectedrow',
	                columns: [ 
	                	   { text: '',editable:false, datafield: 'Edit',width:'22%',cellsrenderer: function (row) {
		                	return "<input class=\"edit\" type=\"button\" onclick='EditEnergy(" + row + ", event)' id=\"editEnergy"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtonsEnergy"+row+"\" style=\"display:none\"><input  onclick='UpdateEnergy(" + row + ", event)' class=\"update\" type=\"button\" id=\"updateEnergy\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='CancelEnergy(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
		                    
		                  }
		                  },  
		                  { text: 'SPOT CRUDE OIL', datafield: 'oil', width: '11.14%' },
		                  { text: 'US GASOLINE-US GALL', datafield: 'gasolineGall', width: '11.14%' },
		                  { text: 'US GASOLINE-20L/$', datafield: 'gasolineLitre', width: '11.14%',editable: false },
		                  { text: 'US DIESEL-US GALL', datafield: 'dieselGall', width: '11.14%' },
		                  { text: 'US DIESEL-1 TON', datafield: 'dieselTon', width: '11.14%',editable: false },
		                  { text: 'US NatGas 1MwH in USD', datafield: 'natgasUsd', width: '11.14%' },
		                  { text: 'EU NatGas 1MwH in EUR', datafield: 'natgasEur', width: '11.14%' },
	                ]
	            });
		       $('#energy-input').on('keydown', function(event) {
					  if (event.keyCode === 13) {
					    event.preventDefault(); // prevent form submission
					    $('#energy-input').blur();
					  }
					});
	          inputDataEnergy.addEventListener("blur", function() {
				  if($("#energy-input").val()!="")
					  {
					  $("#energyDataformInput").css("display","none");
					  $("#energyDataInputGrid").css("display","block"); 
					  $("#energyDataInputButtons").css("display","block"); 
			
					 for(i=0; i<energyItem.length; i++)
					   {
				    	$(energyItem[i]).jqxCheckBox({ theme:'dark', width: 60, height: 25, boxSize:"0px" });
				       }
				       
			
					  var localdata = [];

					  var dataIput =$("#energy-input").val()
					  var dataInputRows = dataIput.split(/\r?\n/);
					  var rowData = dataInputRows[0].split(/\r?\t/);
					   localdata.push({
					  			"oil": rowData[0],
					  			"gasgall":  rowData[1],
					  			"dieselgall": rowData[2],
					  			"natgasus": rowData[3],
					  			"natgaseur": rowData[4],
					  		});
					  
					  var dataInputGridSource =
			            {
			                datatype: "json",
			                datafields: [
			                    { name: 'oil', type: 'string' },
			                    { name: 'gasgall', type: 'string' },
			                    { name: 'dieselgall', type: 'string' },
			                    { name: 'natgasus', type: 'string' },
			                    { name: 'natgaseur', type: 'string' }
			                ],
			                localData:localdata
			            };
			             var dataAdapter = new $.jqx.dataAdapter(dataInputGridSource);
			            // initialize jqxGrid
			            $("#energyDataInputGrid").jqxGrid(
			            {
			                width: '100%',
			                source: dataAdapter,  
			                theme:'dark',
			                enabletooltips: true,
			                selectionmode: 'none',
			                autoheight: true,
			                columns: [ 
			                      { text: '<img height="48" width="48" src="/img/oil.png">', datafield: 'oil', width: '20%' },
				                  { text: '<img height="48" width="48" src="/img/gazoline.png">', datafield: 'gasgall', width: '20%'},
				                  { text: '<img height="48" width="48" src="/img/diezel.png">', datafield: 'dieselgall', width: '20%' },
				                  { text: '<img height="48" width="48" src="/img/natgasUs.png">', datafield: 'natgasus', width: '20%' },
				                  { text: '<img height="48" width="48" src="/img/natgasEur.png">', datafield: 'natgaseur', width: '20%' }
			                ]
			            });
					  
					  }
				});  
				getEnergyAuditGridSource();
			}
	}
	function saveFilterHistory(commoditySubGroupValue,checkedItem){
		
			 
	  						var filterHistory = { 
			   		        	  "filterHistory":checkedItem.toString(),
			   		        	  "screenName":"DATABASE_INPUT_SCREEN_METALS-"+commoditySubGroupValue
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
	function getFilterHistory(commoditySubGroupValue){
		              
		           $.ajax({
	       	        contentType:  "application/json; charset=utf-8",
	    	        url: "/bourse/getdataentryfilterhistory/"+"DATABASE_INPUT_SCREEN_METALS-"+commoditySubGroupValue,
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
					   if(commoditySubGroupValue ==1)
		    	    	   for(i=0; i<metalsPreciousItem.length; i++)
		    			   {
		    		    	$(metalsPreciousItem[i]).jqxCheckBox({checked:true});
		    		       }
	    		       else if(commoditySubGroupValue ==2)
	    		       	for(i=0; i<metalsBaseItem.length; i++)
		    			   {
		    		    	$(metalsBaseItem[i]).jqxCheckBox({checked:true});
		    		       }
	    	       }
	                  },
	    	        error: function (e) {
	    	        	
						  console.log("ERROR : ", e);
	
	    	        }
	    	    });	
	}
	
	function getGroupId(commoditySubGroupValue)
	{
	  var groupId='';	
		switch(commoditySubGroupValue) {
		  
		 case '1': 
		   groupId='6'
		        break;
		 case '2': 
		   groupId='7'
		        break;
		 case '3': 
		   groupId='8'
		        break;
		  case '4': 
		   groupId='9'
		        break;
		}
	return groupId;
	}		