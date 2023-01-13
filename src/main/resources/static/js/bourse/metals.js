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
 		 var datatextarea = document.getElementById("data");
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
                    { name: 'silver', type: 'string' }
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
	                	   { text: '',editable:false, datafield: 'Edit',width:'22%',cellsrenderer: function (row) {
		                	return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons"+row+"\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ", event)' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
		                   }
		                  },  
		                  { text: 'GOLD', datafield: 'gold', width: '15.6%' },
		                  { text: 'PLATINUM', datafield: 'platinum', width: '15.6%' },
		                  { text: 'SILVER', datafield: 'silver', width: '15.6%' },
		                  { text: 'PLAT-GOLD', datafield: 'plat-gold', width: '15.6%',editable: false, },
		                  { text: 'GOLD/SILV', datafield: 'gold-silv', width: '15.6%', editable: false, },
	                ]
	            });
	            auditGridSource =
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
	            var dataAdapter = new $.jqx.dataAdapter(auditGridSource);
	            var eventName = "onclick";
	            $("#baseAuditGrid").jqxGrid(
	            {
	                width: '100%',
	                source: dataAdapter,  
	                theme:'dark',
	                autoheight: true,
	                editable: true,
	                selectionmode: 'none',
	                editmode: 'selectedrow',
	                columns: [ 
	                	   { text: '',editable:false, datafield: 'Edit',width:'22%',cellsrenderer: function (row) {
		                	return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons"+row+"\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ", event)' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
		                    
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
				    	filterDate=date;
					    delete auditGridSource.localdata;
					     auditGridSource.url='/bourse/getauditdata/'+date;
						 dataAdapter = new $.jqx.dataAdapter(auditGridSource);
						 $('#auditGrid').jqxGrid({source:dataAdapter});
						 
					    delete curvesGridSource.localdata;
					    curvesGridSource.url='/bourse/getcurvedata/'+date;
						 dataAdapter = new $.jqx.dataAdapter(curvesGridSource);
						 $('#curvesGrid').jqxGrid({source:dataAdapter});
						 
						 delete crossesGridSource.localdata;
						 crossesGridSource.url='/bourse/getcrossauditdata/'+date;
						 dataAdapter = new $.jqx.dataAdapter(crossesGridSource);
						 $('#crossesGrid').jqxGrid({source:dataAdapter});
				     } 
				     setTimeout(function(){
				    	  if(($('#auditGrid').jqxGrid('getrows')[0].usa!=null)&&
				    		 ($('#auditGrid').jqxGrid('getrows')[0].germany!=null)&&
				    		 ($('#auditGrid').jqxGrid('getrows')[0].france!=null)&&
				    		 ($('#auditGrid').jqxGrid('getrows')[0].uk!=null)&&
				    		 ($('#auditGrid').jqxGrid('getrows')[0].italy!=null)&&
				    		 ($('#auditGrid').jqxGrid('getrows')[0].spain!=null))
						{
					    	$("#auditGrid").jqxGrid('beginrowedit', row);
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