 		 var selectedRow=this;
 		 var monthDate=new Date(); 
         monthDate.setMonth(monthDate.getMonth()-6);
         var auditUrl;
         var updateUrl;
         var saveUrl;
         var deleteUrl;
         var checkifcanUrl;
         var FxItem = [
			    "#jqxCheckBoxusdeur",
			    "#jqxCheckBoxgbpusd",
			    "#jqxCheckBoxusdchf",
			    "#jqxCheckBoxusdjpy",
			    "#jqxCheckBoxusdcad",
			    "#jqxCheckBoxusdcny",
			    "#jqxCheckBoxusdsek",
			    "#jqxCheckBoxusdaud",
			    "#jqxCheckBoxusdrub",
			    "#jqxCheckBoxusdtry",
			    "#jqxCheckBoxusdinr",
			    "#jqxCheckBoxusdhkd",
			    "#jqxCheckBoxusdkrw",
			    "#jqxCheckBoxusdbrl",
			    "#jqxCheckBoxusdmxn",
			    "#jqxCheckBoxusdsar",
			    "#jqxCheckBoxusdzar",
			    "#jqxCheckBoxusdegp",
			    "#jqxCheckBoxeurusd",
			    "#jqxCheckBoxgbpeur",
			    "#jqxCheckBoxeurchf",
			    "#jqxCheckBoxeurjpy",
			    "#jqxCheckBoxeurcad",
			    "#jqxCheckBoxeurcny",
			    "#jqxCheckBoxeursek",
			    "#jqxCheckBoxeuraud",
			    "#jqxCheckBoxeurrub",
			    "#jqxCheckBoxeurtry",
			    "#jqxCheckBoxeurinr",
			    "#jqxCheckBoxeurhkd",
			    "#jqxCheckBoxeurkrw",
			    "#jqxCheckBoxeurbrl",
			    "#jqxCheckBoxeurmxn",
			    "#jqxCheckBoxeursar",
			    "#jqxCheckBoxeurzar",
			    "#jqxCheckBoxeuregp"
			];

        var CdsItem = [
			  "#jqxCheckBoxgermany",
			  "#jqxCheckBoxfrance",
			  "#jqxCheckBoxitaly",
			  "#jqxCheckBoxspain",
			  "#jqxCheckBoxuk",
			  "#jqxCheckBoxswiss",
			  "#jqxCheckBoxsweden",
			  "#jqxCheckBoxusa",
			  "#jqxCheckBoxcanada",
			  "#jqxCheckBoxaustralia",
			  "#jqxCheckBoxjapan",
			  "#jqxCheckBoxchina",
			  "#jqxCheckBoxhongkong",
			  "#jqxCheckBoxsouthkorea",
			  "#jqxCheckBoxindia",
			  "#jqxCheckBoxbrazil",
			  "#jqxCheckBoxmexico",
			  "#jqxCheckBoxsaudi",
			  "#jqxCheckBoxturkey",
			  "#jqxCheckBoxsouthafrica"
			];	 		
       
		 var FxAuditDefaultData=[];
         var CdsAuditDefaultData=[];
        
         var source;
         var inputDataFx = document.getElementById("data-input-Fx");
         var inputDataCds = document.getElementById("data-input-Cds");
      
         var Type;
         
          var eurofields=[ 
				    { name: 'eurusd', type: 'string' },
                    { name: 'gbpeur', type: 'string' },
                    { name: 'eurchf', type: 'string' },
                    { name: 'eurjpy', type: 'string' },
                    { name: 'eurcad', type: 'string' },
                    { name: 'eurcny', type: 'string' },
                    { name: 'eursek', type: 'string' },
                    { name: 'euraud', type: 'string' },
                    { name: 'eurrub', type: 'string' },
                    { name: 'eurtry', type: 'string' },
                    { name: 'eurinr', type: 'string' },
                    { name: 'eurhkd', type: 'string' },
                    { name: 'eurkrw', type: 'string' },
                    { name: 'eurbrl', type: 'string' },
                    { name: 'eurmxn', type: 'string' },
                    { name: 'eursar', type: 'string' },
                    { name: 'eurzar', type: 'string' },
                    { name: 'euregp', type: 'string' }
                ];
		var auditEurGridSource =
		{    
		localdata: [],
		datatype: "json",
		datafields: eurofields,
		url:''
		};
		var eurdataAdapter = new $.jqx.dataAdapter(auditEurGridSource);
	    var euroTotalFields = eurofields.length;
        var eurowidthPercentage = (100-5) / euroTotalFields+"%";
		var euroarrayOFcolumns= [     
			     { text: '',editable:false, datafield: 'euro',width:'5%',cellsrenderer: function (row) {
					 return '<div class="align-middle"><img height="42" width="42" src="/img/flag/eu.png"></div>';		                   }
		                  },  
		        { text: 'EURUSD', datafield: 'eurusd', width: eurowidthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'GBPEUR', datafield: 'gbpeur', width: eurowidthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'EURCHF', datafield: 'eurchf', width: eurowidthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'EURJPY', datafield: 'eurjpy', width: eurowidthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'EURCAD', datafield: 'eurcad', width: eurowidthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'EURCNY', datafield: 'eurcny', width: eurowidthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'EURSEK', datafield: 'eursek', width: eurowidthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'EURAUD', datafield: 'euraud', width: eurowidthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'EURRUB', datafield: 'eurrub', width: eurowidthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'EURTRY', datafield: 'eurtry', width: eurowidthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'EURINR', datafield: 'eurinr', width: eurowidthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'EURHKD', datafield: 'eurhkd', width: eurowidthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'EURKRW', datafield: 'eurkrw', width: eurowidthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'EURBRL', datafield: 'eurbrl', width: eurowidthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'EURMXN', datafield: 'eurmxn', width: eurowidthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'EURSAR', datafield: 'eursar', width: eurowidthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'EURZAR', datafield: 'eurzar', width: eurowidthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'EUREGP', datafield: 'euregp', width: eurowidthPercentage, cellsalign: 'center', align: 'center' }
						    ];
         
         const fxCdsValue = $("#fxCdsValue")[0].innerText;
         deleteUrl="/fxcds/deletebyreferdate/"+fxCdsValue+"/";
		 checkifcanUrl="/fxcds/checkifcansave/"+fxCdsValue+"/";
					
          if(fxCdsValue==1)
         	 {Type="Fx" ;
         	  auditUrl='/fxcds/getfxusddata/';
         	  updateUrl="/fxcds/updatefxdata";
			  saveUrl="/fxcds/savefxdata";	
         	 } 
          else if(fxCdsValue==2)
            {
				Type="Cds" ;
				auditUrl='/fxcds/getcdsdata/';
				updateUrl="/fxcds/updatecdsdata";
				saveUrl="/fxcds/savecdsdata";	   
			}
          
		 $(document).ready(function () {
			  $('#overlay').fadeOut();
			  $('#container-wrapper').show();
		 	    
			  $("#viewall").jqxButton({  theme:'dark', width: 110, height: 35,template: "primary" });
			  $("#viewall").css("display","block");
			  $("#viewall").click(function () {
					popupWindow('/bourse/allnews', 'Libvol-View All News', window, 1300, 600);
				  });
				  
			  $('[data-toggle="tooltip"]').tooltip();   
			  
			  if(fxCdsValue==1){
				 $("#Fx-btn").addClass('active');
			  }else 
			   if(fxCdsValue==2){
			   $("#Cds-btn").addClass('active');
			   }
			  renderSubGroup(fxCdsValue);
    
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
								  { "name": "EURUSD", "type": "float" },
								  { "name": "GBPEUR", "type": "float" },
								  { "name": "EURCHF", "type": "float" },
								  { "name": "EURJPY", "type": "float" },
								  { "name": "EURCAD", "type": "float" },
								  { "name": "EURCNY", "type": "float" },
								  { "name": "EURSEK", "type": "float" },
								  { "name": "EURAUD", "type": "float" },
								  { "name": "EURRUB", "type": "float" },
								  { "name": "EURTRY", "type": "float" },
								  { "name": "EURINR", "type": "float" },
								  { "name": "EURHKD", "type": "float" },
								  { "name": "EURKRW", "type": "float" },
								  { "name": "EURBRL", "type": "float" },
								  { "name": "EURMXN", "type": "float" },
								  { "name": "EURSAR", "type": "float" },
								  { "name": "EURZAR", "type": "float" },
								  { "name": "EUREGP", "type": "float" },
								  { "name": "USDEUR", "type": "float" },
								  { "name": "GBPUSD", "type": "float" },
								  { "name": "USDCHF", "type": "float" },
								  { "name": "USDJPY", "type": "float" },
								  { "name": "USDCAD", "type": "float" },
								  { "name": "USDCNY", "type": "float" },
								  { "name": "USDSEK", "type": "float" },
								  { "name": "USDAUD", "type": "float" },
								  { "name": "USDRUB", "type": "float" },
								  { "name": "USDTRY", "type": "float" },
								  { "name": "USDINR", "type": "float" },
								  { "name": "USDHKD", "type": "float" },
								  { "name": "USDKRW", "type": "float" },
								  { "name": "USDBRL", "type": "float" },
								  { "name": "USDMXN", "type": "float" },
								  { "name": "USDSAR", "type": "float" },
								  { "name": "USDZAR", "type": "float" },
								  { "name": "USDEGP", "type": "float" },
								  { "name": "GERMANY", "type": "float" },
								  { "name": "FRANCE", "type": "float" },
								  { "name": "ITALY", "type": "float" },
								  { "name": "SPAIN", "type": "float" },
								  { "name": "UK", "type": "float" },
								  { "name": "SWISS", "type": "float" },
								  { "name": "SWEDEN", "type": "float" },
								  { "name": "USA", "type": "float" },
								  { "name": "CANADA", "type": "float" },
								  { "name": "AUSTRALIA", "type": "float" },
								  { "name": "JAPAN", "type": "float" },
								  { "name": "CHINA", "type": "float" },
								  { "name": "HONGKONG", "type": "float" },
								  { "name": "SOUTHKOREA", "type": "float" },
								  { "name": "INDIA", "type": "float" },
								  { "name": "BRAZIL", "type": "float" },
								  { "name": "MEXICO", "type": "float" },
								  { "name": "SAUDI", "type": "float" },
								  { "name": "TURKEY", "type": "float" },
								  { "name": "SOUTHAFRICA", "type": "float" }
			
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
		     	 getFilterHistory(fxCdsValue);
	
		         $("#grid").jqxGrid('showloadelement');  
	    	    
		         getFilterData(fxCdsValue);         
		       
             	 $('#dateInputAudit').on('change', function (event) 
				 {  date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				    filterDate=date;
				 
    					 delete auditGridSource.localdata;   
    				     auditGridSource.url=auditUrl+date;
    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
    					 $('#'+Type+'AuditGrid').jqxGrid({source:dataAdapter});
    					 
    					  if(fxCdsValue==1)
	    					 {
							 delete auditEurGridSource.localdata;   
	    				     auditEurGridSource.url='/fxcds/getfxeurdata/'+date;
	    					 eurodataAdapter = new $.jqx.dataAdapter(auditEurGridSource);
	    					 $('#FxEurAuditGrid').jqxGrid({source:eurodataAdapter});
							 }
	    					
				 }); 

			$("#filter").click(function () {
            	
            	getFilterData(fxCdsValue);
               });    
		   });// end document ready
		    $("#Clearfilter").click(function () {
				     if (fxCdsValue==1)
    				 {
					  for(i=0; i<FxItem.length; i++)
		    			   {
		    		    	$(FxItem[i]).jqxCheckBox({checked:false});
		    		       } 
					  }
					  else if (fxCdsValue==2)
		    				 {
							  for(i=0; i<CdsItem.length; i++)
				    			   {
				    		    	$(CdsItem[i]).jqxCheckBox({checked:false});
				    		       } 
							  }
				  });  
	       function Edit(row, event) {
			 
				     isedit=true;
					 var data=$('#'+Type+'AuditGrid').jqxGrid('getrowdata', row);	
				     if (fxCdsValue==1)
    				 {
						   oldDataJson={
								    "usdeur": data.usdeur,
								    "gbpusd": data.gbpusd,
								    "usdchf": data.usdchf,
								    "usdjpy": data.usdjpy,
								    "usdcad": data.usdcad,
								    "usdcny": data.usdcny,
								    "usdsek": data.usdsek,
								    "usdaud": data.usdaud,
								    "usdrub": data.usdrub,
								    "usdtry": data.usdtry,
								    "usdinr": data.usdinr,
								    "usdhkd": data.usdhkd,
								    "usdkrw": data.usdkrw,
								    "usdbrl": data.usdbrl,
								    "usdmxn": data.usdmxn,
								    "usdsar": data.usdsar,
								    "usdzar": data.usdzar,
								    "usdegp": data.usdegp
								};
				     }else if(fxCdsValue==2)
				     	{
								 oldDataJson = {
								  "germany": data.germany,
								  "france": data.france,
								  "italy": data.italy,
								  "spain": data.spain,
								  "uk": data.uk,
								  "swiss": data.swiss,
								  "sweden": data.sweden,
								  "usa": data.usa,
								  "canada": data.canada,
								  "australia": data.australia,
								  "japan": data.japan,
								  "china": data.china,
								  "hongkong": data.hongkong,
								  "southkorea": data.southkorea,
								  "india": data.india,
								  "brazil": data.brazil,
								  "mexico": data.mexico,
								  "saudi": data.saudi,
								  "turkey": data.turkey,
								  "southafrica": data.southafrica
								};
						 }
				     selectedRow.editrow = row;
				     date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				     if(auditGridSource.url=='' || date!=filterDate)
				     { 
                         delete auditGridSource.localdata;   
    				     auditGridSource.url=auditUrl+date;
    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
    					 $('#'+Type+'AuditGrid').jqxGrid({source:dataAdapter});
    				
    						if(fxCdsValue==1)
	    					 {
							 delete auditEurGridSource.localdata;   
	    				     auditEurGridSource.url='/fxcds/getfxeurdata/'+date;
	    					 eurodataAdapter = new $.jqx.dataAdapter(auditEurGridSource);
	    					 $('#FxEurAuditGrid').jqxGrid({source:eurodataAdapter});
							 }
    				 } 
				     setTimeout(function(){
					
					var isDataValid = true;
					
					for (var key in oldDataJson) {
					  if (oldDataJson.hasOwnProperty(key)) {
					    if (oldDataJson[key] === null || oldDataJson[key] === undefined) {
					      isDataValid = false;
					      break; // Exit the loop early when an invalid value is found
					    }
					  }
					}
					
					if (isDataValid) {
						$('#'+Type+'AuditGrid').jqxGrid('beginrowedit', row);
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
			  
			    function Update(row, event) {
				   
				   isupdate=true;
				   var dataToBeUpdated = [];
				   var updatedDataJson;
				   var keys;
				   var updatedData = $('#'+Type+'AuditGrid').jqxGrid('getrowdata', row);
				   selectedRow.editrow = -1;
				   $('#'+Type+'AuditGrid').jqxGrid('endrowedit', row);
				    var updatedData = $('#'+Type+'AuditGrid').jqxGrid('getrowdata', row);
				    if (fxCdsValue==1)
    				 {
						 var updatedDataJson = {
						    "usdeur": updatedData.usdeur,
						    "gbpusd": updatedData.gbpusd,
						    "usdchf": updatedData.usdchf,
						    "usdjpy": updatedData.usdjpy,
						    "usdcad": updatedData.usdcad,
						    "usdcny": updatedData.usdcny,
						    "usdsek": updatedData.usdsek,
						    "usdaud": updatedData.usdaud,
						    "usdrub": updatedData.usdrub,
						    "usdtry": updatedData.usdtry,
						    "usdinr": updatedData.usdinr,
						    "usdhkd": updatedData.usdhkd,
						    "usdkrw": updatedData.usdkrw,
						    "usdbrl": updatedData.usdbrl,
						    "usdmxn": updatedData.usdmxn,
						    "usdsar": updatedData.usdsar,
						    "usdzar": updatedData.usdzar,
						    "usdegp": updatedData.usdegp
						};

                     }else if(fxCdsValue==2){
						 updatedDataJson = {
						  "germany": updatedData.germany,
						  "france": updatedData.france,
						  "italy": updatedData.italy,
						  "spain": updatedData.spain,
						  "uk": updatedData.uk,
						  "swiss": updatedData.swiss,
						  "sweden": updatedData.sweden,
						  "usa": updatedData.usa,
						  "canada": updatedData.canada,
						  "australia": updatedData.australia,
						  "japan": updatedData.japan,
						  "china": updatedData.china,
						  "hongkong": updatedData.hongkong,
						  "southkorea": updatedData.southkorea,
						  "india": updatedData.india,
						  "brazil": updatedData.brazil,
						  "mexico": updatedData.mexico,
						  "saudi": updatedData.saudi,
						  "turkey": updatedData.turkey,
						  "southafrica": updatedData.southafrica
						};

					 }
					 

				         keys= Object.keys(updatedDataJson);
                        
                    	for (var i = 0; i < keys.length; i++) {
					        var field = keys[i];
					        if (updatedDataJson[field] !== oldDataJson[field]) {
					            dataToBeUpdated.push({
					                "subgroupId": i+1,
					                "value": updatedDataJson[field].replace(',', ''),
					                "referdate": date
					            });
					        }
					    }
					    
                    var updatedJson=[];
                    for (let i = 0; i < keys.length; i++) {
						 const toBeUpdatedKeys =  ['eurusd', 'gbpeur', 'eurchf', 'eurjpy', 'eurcad', 'eurcny', 'eursek', 'euraud', 'eurrub', 'eurtry', 'eurinr', 'eurhkd', 'eurkrw', 'eurbrl', 'eurmxn', 'eursar', 'eurzar', 'euregp']
								
	                    if(updatedDataJson[keys[i]]!=oldDataJson[keys[i]])
                          {
							  updatedJson.push({"assetId": 5,
                  						    "groupId":getGroupId(fxCdsValue),
										    "value": keys[i].toUpperCase()}); 
	                           
							  if (keys[i]=='usdeur'){
								  for (let j = 0; j < toBeUpdatedKeys.length; j++) {
								   updatedJson.push({"assetId": 5,
                  						    "groupId":getGroupId(fxCdsValue),
										    "value": toBeUpdatedKeys[j].toUpperCase()});
										    }
							  }else {
								   updatedJson.push({"assetId": 5,
                  						    "groupId":getGroupId(fxCdsValue),
										    "value": keys[i].replaceAll('usd','eur').toUpperCase()});
										    }
							  }
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
			    					 $('#'+Type+'AuditGrid').jqxGrid({source:dataAdapter});
			    					 if(fxCdsValue==1)
			    					 {
									 delete auditEurGridSource.localdata;   
			    				     auditEurGridSource.url='/fxcds/getfxeurdata/'+date;
			    					 eurodataAdapter = new $.jqx.dataAdapter(auditEurGridSource);
			    					 $('#FxEurAuditGrid').jqxGrid({source:eurodataAdapter});
									 }
		      						getFilterData(fxCdsValue);
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
			      $('#'+Type+'AuditGrid').jqxGrid('endrowedit', row, true);
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
		    					 $('#'+Type+'AuditGrid').jqxGrid({source:dataAdapter});
		    					if(fxCdsValue==1)
	    					 {
							 delete auditEurGridSource.localdata;   
	    				     auditEurGridSource.url='/fxcds/getfxeurdata/'+date;
	    					 eurodataAdapter = new $.jqx.dataAdapter(auditEurGridSource);
	    					 $('#FxEurAuditGrid').jqxGrid({source:eurodataAdapter});
							 } 
		    					 }
		    	        	else{
							 getAuditGridSource(fxCdsValue);
							 }
		    	        	},
				             error: function (e) {
				                 console.log(e);
				             }
				         });
				    getFilterData(fxCdsValue);  
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
			
				function getAuditGridSource(fxCdsValue){
				
				latestUrl='/fxcds/getlatest/'+fxCdsValue;
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
						    					 $('#'+Type+'AuditGrid').jqxGrid({source:dataAdapter});
						    					if(fxCdsValue==1)
						    					 {
												 delete auditEurGridSource.localdata;   
						    				     auditEurGridSource.url='/fxcds/getfxeurdata/'+date;
						    					 eurodataAdapter = new $.jqx.dataAdapter(auditEurGridSource);
						    					 $('#FxEurAuditGrid').jqxGrid({source:eurodataAdapter});
												 }
						    			 }
			    	   			   }else {
									         delete auditGridSource.localdata;   
					    				     auditGridSource.localdata=[];
					    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
					    					 $('#'+Type+'AuditGrid').jqxGrid({source:dataAdapter});
					    					if(fxCdsValue==1)
					    					 {
											 delete auditEurGridSource.localdata;   
					    				     auditEurGridSource.localdata=[];
					    					 eurodataAdapter = new $.jqx.dataAdapter(auditEurGridSource);
					    					 $('#FxEurAuditGrid').jqxGrid({source:eurodataAdapter});
											 }
									  }
			    	        },
			    	        error: function (e) {
			    	        	
								  console.log("ERROR : ", e);
			
			    	        }
			    	    });
			
			}
	
		  function getFilterData(fxCdsValue)
		  {
          	var SelectedSearchDTO=[];
          	var allItems=0;
          	var checkedItem=[];
          	var json;
          	var values=[];
          	var valuesEur=[];
            $('#grid').jqxGrid({ showdefaultloadelement: true}); 
          	var item = 0;
            if (fxCdsValue==1)
		     {
			   items = FxItem;
			 }else if (fxCdsValue==2)
		     {
			   items = CdsItem;
			 }
				 	for (i = 0; i < items.length; i++) {
		         		if($(items[i]).jqxCheckBox('checked'))
		         		{	  if (fxCdsValue==1)
						     {  if(itemValue[items[i]].GroupId==23) 
								   values.push(items[i].split("Box")[1].toUpperCase());
								   else if(itemValue[items[i]].GroupId==24) 
								   valuesEur.push(items[i].split("Box")[1].toUpperCase());
							 }else 
							 values.push(items[i].split("Box")[1].toUpperCase());
							
		          			item=1;
		          			allItems=allItems+1;
		          			checkedItem.push(items[i]);
		         		}
		          	}
		         	
		          	if(item!=0)
		          	{
						 if (fxCdsValue==1)
						     {
							 if(values.length!=0)
							 SelectedSearchDTO.push({
			          		   "groupId": 23,
			       			   "selectedValues":values,
			       			  });
			       			  if(valuesEur.length!=0)
			       			  SelectedSearchDTO.push({
			          		   "groupId": 24,
			       			   "selectedValues":valuesEur,
			       			  });
							 }else
		          		SelectedSearchDTO.push({
		          		   "groupId":22,
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
       		       
          	if (allItems <= 15)
        	{
            $.ajax({
    	    	        type: "POST",
    	    	        contentType: "application/json",
    	    	        url: "/fxcds/getgriddata",
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
	  						 $('#grid').jqxGrid({width:data.columns.length>12?'100%':data.columns.length*110,
								   				 source:dataAdapter,
	  							                 columns: data.columns});
	  							                 
	  					saveFilterHistory(fxCdsValue,checkedItem);
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
		    	        url: "/robot/callrobotsasync/5/"+getGroupId(fxCdsValue),
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
		    
			location.href = "/bourse/fxandcds?fxcds=" + divNum;
		}
	function renderSubGroup(fxCdsValue){
		
		if(fxCdsValue==1)
		{
			inputDataType = inputDataFx;
		    items=FxItem;
		    var dataInputGridFields=[
				    { name: 'usdeur', type: 'string' },
                    { name: 'gbpusd', type: 'string' },
                    { name: 'usdchf', type: 'string' },
                    { name: 'usdjpy', type: 'string' },
                    { name: 'usdcad', type: 'string' },
                    { name: 'usdcny', type: 'string' },
                    { name: 'usdsek', type: 'string' },
                    { name: 'usdaud', type: 'string' },
                    { name: 'usdrub', type: 'string' },
                    { name: 'usdtry', type: 'string' },
                    { name: 'usdinr', type: 'string' },
                    { name: 'usdhkd', type: 'string' },
                    { name: 'usdkrw', type: 'string' },
                    { name: 'usdbrl', type: 'string' },
                    { name: 'usdmxn', type: 'string' },
                    { name: 'usdsar', type: 'string' },
                    { name: 'usdzar', type: 'string' },
                    { name: 'usdegp', type: 'string' }
                ];
		 var totalFields = dataInputGridFields.length;
		 var widthPercentage = 100 / totalFields;
	
	 var dataInputGridColumns= [
   { text: '', datafield: 'usdeur',   width: widthPercentage + '%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return '<div class="align-middle"><br><h8 class="font-weight-bold align-text">USDEUR</h8></div>';
    }},
    { text: '', datafield: 'gbpusd',   width: widthPercentage + '%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/united-kingdom.png"></div><h8 class="font-weight-bold align-text">GBPUSD</h8>';
    }},
    { text: '', datafield: 'usdchf',  width: widthPercentage + '%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/switzerland.png"></div><h8 class="font-weight-bold align-text  align-middle">USDCHF</h8>';
    }},
    { text: '', datafield: 'usdjpy',  width: widthPercentage + '%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/japan.png"></div><h8 class="font-weight-bold align-text">USDJPY</h8>';
    }},
    { text: '', datafield: 'usdcad',  width: widthPercentage + '%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/canada.png"></div><h8 class="font-weight-bold align-text">USDCAD</h8>';
    }},
    { text: '', datafield: 'usdcny',  width: widthPercentage + '%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/china.png"></div><h8 class="font-weight-bold align-text">USDCNY</h8>';
    }},
    { text: '', datafield: 'usdsek',  width: widthPercentage + '%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/sweden.png"></div><h8 class="font-weight-bold align-text">USDSEK</h8>';
    }},
    { text: '', datafield: 'usdaud',  width: widthPercentage + '%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/australia.png"></div><h8 class="font-weight-bold align-text">USDAUD</h8>';
    }},
    { text: '', datafield: 'usdrub',  width: widthPercentage + '%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/russia.png"></div><h8 class="font-weight-bold align-text">USDRUB</h8>';
    }},
    { text: '', datafield: 'usdtry',  width: widthPercentage + '%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/turkey.png"></div><h8 class="font-weight-bold align-text">USDTRY</h8>';
    }},
    { text: '', datafield: 'usdinr',  width: widthPercentage + '%',cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/india.png"></div><h8 class="font-weight-bold align-text">USDINR</h8>';
    }},
    { text: '', datafield: 'usdhkd',  width: widthPercentage + '%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/hong-kong.png"></div><h8 class="font-weight-bold align-text">USDHKD</h8>';
    }},
    { text: '', datafield: 'usdkrw',  width: widthPercentage + '%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/south-korea.png"></div><h8 class="font-weight-bold align-text">USDKRW</h8>';
    }},
    { text: '', datafield: 'usdbrl',  width: widthPercentage + '%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/brazil.png"></div><h8 class="font-weight-bold align-text">USDBRL</h8>';
    }},
    { text: '', datafield: 'usdmxn',  width: widthPercentage + '%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/mexico.png"></div><h8 class="font-weight-bold align-text">USDMXN</h8>';
    }},
    { text: '', datafield: 'usdsar',  width: widthPercentage + '%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/saudi-arabia.png"></div><h8 class="font-weight-bold align-text">USDSAR</h8>';
    }},
    { text: '', datafield: 'usdzar',  width: widthPercentage + '%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/south-africa.png"></div><h8 class="font-weight-bold align-text">USDZAR</h8>';
    }},
    { text: '', datafield: 'usdegp',  width: widthPercentage + '%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/egypt.png"></div><h8 class="font-weight-bold align-text">USDEGP</h8>';
    }}
];;	  
			 var defaultData=FxAuditDefaultData;
			 var fields=[
				    { name: 'usdeur', type: 'string' },
                    { name: 'gbpusd', type: 'string' },
                    { name: 'usdchf', type: 'string' },
                    { name: 'usdjpy', type: 'string' },
                    { name: 'usdcad', type: 'string' },
                    { name: 'usdcny', type: 'string' },
                    { name: 'usdsek', type: 'string' },
                    { name: 'usdaud', type: 'string' },
                    { name: 'usdrub', type: 'string' },
                    { name: 'usdtry', type: 'string' },
                    { name: 'usdinr', type: 'string' },
                    { name: 'usdhkd', type: 'string' },
                    { name: 'usdkrw', type: 'string' },
                    { name: 'usdbrl', type: 'string' },
                    { name: 'usdmxn', type: 'string' },
                    { name: 'usdsar', type: 'string' },
                    { name: 'usdzar', type: 'string' },
                    { name: 'usdegp', type: 'string' }
                ];
                var totalFields = fields.length;
               var widthPercentage = (100-5) / totalFields;
             var arrayOFcolumns= [ 
	                	   { text: '',editable:false, datafield: 'Edit',width:'5%',cellsrenderer: function (row) {
		                	return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons"+row+"\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
		                   }
		                  },
		                    { text: 'USDEUR', datafield: 'usdeur', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
						    { text: 'GBPUSD', datafield: 'gbpusd', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
						    { text: 'USDCHF', datafield: 'usdchf', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
						    { text: 'USDJPY', datafield: 'usdjpy', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
						    { text: 'USDCAD', datafield: 'usdcad', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
						    { text: 'USDCNY', datafield: 'usdcny', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
						    { text: 'USDSEK', datafield: 'usdsek', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
						    { text: 'USDAUD', datafield: 'usdaud', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
						    { text: 'USDRUB', datafield: 'usdrub', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
						    { text: 'USDTRY', datafield: 'usdtry', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
						    { text: 'USDINR', datafield: 'usdinr', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
						    { text: 'USDHKD', datafield: 'usdhkd', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
						    { text: 'USDKRW', datafield: 'usdkrw', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
						    { text: 'USDBRL', datafield: 'usdbrl', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
						    { text: 'USDMXN', datafield: 'usdmxn', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
						    { text: 'USDSAR', datafield: 'usdsar', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
						    { text: 'USDZAR', datafield: 'usdzar', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
						    { text: 'USDEGP', datafield: 'usdegp', width: widthPercentage + '%', cellsalign: 'center', align: 'center' }
						];
			
		}
		else
			if (fxCdsValue==2)
			{
			inputDataType = inputDataCds;
		    items=CdsItem;
		    var dataInputGridFields=[
				    { name: 'germany', type: 'string' },
				    { name: 'france', type: 'string' },
				    { name: 'italy', type: 'string' },
				    { name: 'spain', type: 'string' },
                    { name: 'uk', type: 'string' },
                    { name: 'swiss', type: 'string' },
                    { name: 'sweden', type: 'string' },
                    { name: 'usa', type: 'string' },
                    { name: 'canada', type: 'string' },
                    { name: 'australia', type: 'string' },
                    { name: 'japan', type: 'string' },
                    { name: 'china', type: 'string' },
                    { name: 'hongkong', type: 'string' },
                    { name: 'southkorea', type: 'string' },
                    { name: 'india', type: 'string' },
                    { name: 'brazil', type: 'string' },
                    { name: 'mexico', type: 'string' },
                    { name: 'saudi', type: 'string' },
                    { name: 'turkey', type: 'string' },
                    { name: 'southafrica', type: 'string' },
                ];
			 var dataInputGridColumns= [ 
			                       { text: '', datafield: 'germany', width: '5%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/germany.png"></div><h8 class="font-weight-bold align-text">Germany</h8>';
    }},
    { text: '', datafield: 'france', width: '5%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/france.png"></div><h8 class="font-weight-bold align-text">France</h8>';
    }},
    { text: '', datafield: 'italy', width: '5%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/italy.png"></div><h8 class="font-weight-bold align-text">Italy</h8>';
    }},
    { text: '', datafield: 'spain', width: '5%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/spain.png"></div><h8 class="font-weight-bold align-text">Spain</h8>';
    }},
    { text: '', datafield: 'uk', width: '5%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/united-kingdom.png"></div><h8 class="font-weight-bold align-text">UK</h8>';
    }},
    { text: '', datafield: 'swiss', width: '5%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/switzerland.png"></div><h8 class="font-weight-bold align-text">Swiss</h8>';
    }},
    { text: '', datafield: 'sweden', width: '5%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/sweden.png"></div><h8 class="font-weight-bold align-text">Sweden</h8>';
    }},
    { text: '', datafield: 'usa', width: '5%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/united-states.png"></div><h8 class="font-weight-bold align-text">USA</h8>';
    }},
    { text: '', datafield: 'canada', width: '5%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/canada.png"></div><h8 class="font-weight-bold align-text">Canada</h8>';
    }},
    { text: '', datafield: 'australia', width: '5%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/australia.png"></div><h8 class="font-weight-bold align-text">Australia</h8>';
    }},
    { text: '', datafield: 'japan', width: '5%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/japan.png"></div><h8 class="font-weight-bold align-text">Japan</h8>';
    }},
    { text: '', datafield: 'china', width: '5%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/china.png"></div><h8 class="font-weight-bold align-text">China</h8>';
    }},
    { text: '', datafield: 'hongkong', width: '5%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/hong-kong.png"></div><h8 class="font-weight-bold align-text">Hong Kong</h8>';
    }},
    { text: '', datafield: 'southkorea', width: '5%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/south-korea.png"></div><h8 class="font-weight-bold align-text">South Korea</h8>';
    }},
    { text: '', datafield: 'india', width: '5%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/india.png"></div><h8 class="font-weight-bold align-text">India</h8>';
    }},
    { text: '', datafield: 'brazil', width: '5%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/brazil.png"></div><h8 class="font-weight-bold align-text">Brazil</h8>';
    }},
    { text: '', datafield: 'mexico', width: '5%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/mexico.png"></div><h8 class="font-weight-bold align-text">Mexico</h8>';
    }},
    { text: '', datafield: 'saudi', width: '5%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/saudi-arabia.png"></div><h8 class="font-weight-bold align-text">Saudi</h8>';
    }},
    { text: '', datafield: 'turkey', width: '5%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/turkey.png"></div><h8 class="font-weight-bold align-text">Turkey</h8>';
    }},
    { text: '', datafield: 'southafrica', width: '5%', cellsalign: 'center', align: 'center', renderer: function(text, align, height) {
        return  '<div class="align-middle"><img height="28" width="28" src="/img/flag/south-africa.png"></div><h8 class="font-weight-bold align-text">South Africa</h8>';
    }},
			                ];	  
			 var defaultData=CdsAuditDefaultData;
			 var fields=[
				    { name: 'germany', type: 'string' },
				    { name: 'france', type: 'string' },
				    { name: 'italy', type: 'string' },
				    { name: 'spain', type: 'string' },
                    { name: 'uk', type: 'string' },
                    { name: 'swiss', type: 'string' },
                    { name: 'sweden', type: 'string' },
                    { name: 'usa', type: 'string' },
                    { name: 'canada', type: 'string' },
                    { name: 'australia', type: 'string' },
                    { name: 'japan', type: 'string' },
                    { name: 'china', type: 'string' },
                    { name: 'hongkong', type: 'string' },
                    { name: 'southkorea', type: 'string' },
                    { name: 'india', type: 'string' },
                    { name: 'brazil', type: 'string' },
                    { name: 'mexico', type: 'string' },
                    { name: 'saudi', type: 'string' },
                    { name: 'turkey', type: 'string' },
                    { name: 'southafrica', type: 'string' },
                ];
                 var totalFields = fields.length;
                 var widthPercentage = (100-5) / totalFields+"%";
                 var arrayOFcolumns= [ 
	                	   { text: '',editable:false, datafield: 'Edit',width:'5%',cellsrenderer: function (row) {
		                	return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons"+row+"\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
		                   }
		                  },  
		            
			    { text: 'GERMANY', datafield: 'germany', width: widthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'FRANCE', datafield: 'france', width: widthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'ITALY', datafield: 'italy', width: widthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'SPAIN', datafield: 'spain', width: widthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'UK', datafield: 'uk', width: widthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'SWISS', datafield: 'swiss', width: widthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'SWEDEN', datafield: 'sweden', width: widthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'USA', datafield: 'usa', width: widthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'CANADA', datafield: 'canada', width: widthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'AUSTRALIA', datafield: 'australia', width: widthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'JAPAN', datafield: 'japan', width: widthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'CHINA', datafield: 'china', width: widthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'HONGKONG', datafield: 'hongkong', width: widthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'SOUTHKOREA', datafield: 'southkorea', width: widthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'INDIA', datafield: 'india', width: widthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'BRAZIL', datafield: 'brazil', width: widthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'MEXICO', datafield: 'mexico', width: widthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'SAUDI', datafield: 'saudi', width: widthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'TURKEY', datafield: 'turkey', width: widthPercentage, cellsalign: 'center', align: 'center' },
			    { text: 'SOUTHAFRICA', datafield: 'southafrica', width: widthPercentage, cellsalign: 'center', align: 'center' }
			    ];
						
			}
			initiate(Type,inputDataType,items,dataInputGridFields,dataInputGridColumns,defaultData,fields,arrayOFcolumns);
			
	}
	function saveFilterHistory(fxCdsValue,checkedItem){
		
			 
	  						var filterHistory = { 
			   		        	  "filterHistory":checkedItem.toString(),
			   		        	  "screenName":"DATABASE_INPUT_SCREEN_FXCDS-"+fxCdsValue
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
	function getFilterHistory(fxCdsValue){
		              
		           $.ajax({
	       	        contentType:  "application/json; charset=utf-8",
	    	        url: "/bourse/getdataentryfilterhistory/"+"DATABASE_INPUT_SCREEN_FXCDS-"+fxCdsValue,
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
					   if(fxCdsValue ==1)
		    	    	   for(i=0; i<FxItem.length; i++)
		    			   {
		    		    	$(FxItem[i]).jqxCheckBox({checked:true});
		    		       }
	    		       else if(fxCdsValue ==2)
	    		       	for(i=0; i<CdsItem.length; i++)
		    			   {
		    		    	$(CdsItem[i]).jqxCheckBox({checked:true});
		    		       }
	    	       }
	                  },
	    	        error: function (e) {
	    	        	
						  console.log("ERROR : ", e);
	
	    	        }
	    	    });	
	}
	
	function getGroupId(fxCdsValue)
	{
	  var groupId='';	
		switch(fxCdsValue) {
		  
		 case '1': 
		   groupId='23'
		        break;
		 case '2': 
		   groupId='22'
		        break;
		}
	return groupId;
	}		
	
	function initiate(Type,inputDataType,item,dataInputGridFields,dataInputGridColumns,defaultData,fields,arrayOFcolumns){
		 var jsonObject= null;
		 $("#delete" + Type).jqxButton({  theme:'dark', width: 90, height: 30,template: "danger" });
		 $("#cancel" + Type).jqxButton({ theme: 'dark',height:30,width:74 });
		 $("#load" + Type).jqxButton({ theme: 'dark',height:30,width:74 }); 
		 $("#cancel" + Type).click(function () {
            	  inputDataType.value="";
            	  $("#dataformInput" + Type).css("display","block");
				  $("#dataInputButtons" + Type).css("display","none"); 
				  $("#dataInputGrid" + Type).css("display","none"); 
				  (fxCdsValue==1)?$("#usd-flag").removeClass("m-auto").addClass("mt-auto"):null;
            
               });
                  
  		for(i=0; i<item.length; i++)
		  {
			$(item[i]).jqxCheckBox({ theme:'dark', width: 16, height: 16, boxSize:"16px" });
		   }  
		  $('#data-input-'+Type).on('keydown', function(event) {
			  if (event.keyCode === 13) {
				event.preventDefault(); // prevent form submission
				$('#data-input-'+Type).blur();
			  }
			});
		  inputDataType.addEventListener("blur", function() {
		   if($('#data-input-'+Type).val()!="")
			  {
			  $("#dataformInput" + Type).css("display","none");
			  $("#dataInputGrid" + Type).css("display","block"); 
			  $("#dataInputButtons" + Type).css("display","block"); 
			  
	         (fxCdsValue==1)?$("#usd-flag").removeClass("mt-auto").addClass("m-auto"):null;
            	
			  var localdata = [];
			  var dataIput =$('#data-input-'+Type).val()
			  var dataInputRows = dataIput.split(/\r?\n/);
			  var rowData = dataInputRows[0].split(/\r?\t/);
			  var jsonObject = {};

				dataInputGridFields.forEach(function(field, index) {
				    jsonObject[field.name] = rowData[index];
				});
			  
			   localdata.push(jsonObject);
			  
			  var dataInputGridSource =
				{
					datatype: "json",
					datafields: dataInputGridFields,
					localData:localdata
				};
				 var dataAdapter = new $.jqx.dataAdapter(dataInputGridSource);
				// initialize jqxGrid
				$("#dataInputGrid" + Type).jqxGrid(
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
		
	    getAuditGridSource(fxCdsValue);
		$('#'+Type+'AuditGrid').jqxGrid(
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
		if (fxCdsValue==1)
		{
	    getAuditGridSource(fxCdsValue);
		$('#FxEurAuditGrid').jqxGrid(
		{
			width: '100%',
			source: eurdataAdapter,  
			theme:'dark',
			autoheight: true,
			editable: true,
			selectionmode: 'none',
			editmode: 'selectedrow',
			columns: euroarrayOFcolumns
		});
		}
        $("#delete" + Type).click(function () {
			if(fxCdsValue==1)
			   value="Fx Options";
			else if(fxCdsValue==2)
			   value="Cds Options"; 
			   
				$('#alertDeleteDataByDate-modal').modal('show'); 
		   		 date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				$( "#alertTextDeleteDataByDate" ).empty();
		 		$( "#alertTextDeleteDataByDate" ).append( "<p> Are you sure you want to Delete all "+value+" record for the date '"+date+"'?</p>" );
			});
      $("#load" + Type).click(function () {
            	var date = new Date();
            	var dataToBeInserted = [];
            	var listObject=null;
				var groupId=null;
				
            	var rows =  $("#dataInputGrid" + Type).jqxGrid('getrows');
				var allObjects = [];
				var rows = $("#dataInputGrid" + Type).jqxGrid('getrows');
				
				for (var i = 0; i < rows.length; i++) {
				       
				        for (var k = 0; k < dataInputGridFields.length; k++) {
				            var propertyName = dataInputGridFields[k].name;
				
				               allObjects.push([String(k + 1) , rows[i][propertyName]]);
				           
				      }
				  }
				
            	 if(fxCdsValue==1)
				  {groupId=23;
				   }else  if(fxCdsValue==2)
				   { 
				    groupId=22;}
				   
            	 for (i = 0; i < allObjects.length; i++) {

            	     var value = eval(allObjects[i]);
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
						        url: "/process/isrobottriggered/5/"+groupId,
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
						    	    	        async:false,
						    	    	        cache: false,
						    	    	        timeout: 600000,
						    	    	        success: function (data) {
													
						    	    	        
												 getFilterData(fxCdsValue);
						    	    		if(fxCdsValue==1)
				                            	 inputDataFx.value="";
				                             else if(fxCdsValue==2)
				                              	inputDataCds.value="";
				                              	
						  		            	  $("#dataformInput" + Type).css("display","block");
						  						  $("#dataInputButtons" + Type).css("display","none"); 
						  						  $("#dataInputGrid" + Type).css("display","none");
						  						  (fxCdsValue==1)?$("#usd-flag").removeClass("m-auto").addClass("mt-auto"):null;
            
						  						$('#dateInputAudit').jqxDateTimeInput('setDate', $("#dateInput").jqxDateTimeInput('getDate'));
						    	        	    date=$.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
						    	        	    
						    				    filterDate=date;
						    				    delete auditGridSource.localdata;   
						    				     auditGridSource.url=auditUrl+date;
						    					 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
						    					 $('#'+Type+'AuditGrid').jqxGrid({source:dataAdapter});
						    					 if(fxCdsValue==1)
						    					 {
												 delete auditEurGridSource.localdata;   
						    				     auditEurGridSource.url='/fxcds/getfxeurdata/'+date;
						    					 eurodataAdapter = new $.jqx.dataAdapter(auditEurGridSource);
						    					 $('#FxEurAuditGrid').jqxGrid({source:eurodataAdapter});
												 }
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