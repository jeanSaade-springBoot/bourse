 		 var selectedRow=this;
 		 var monthDate=new Date(); 
         monthDate.setMonth(monthDate.getMonth()-6);
         var auditUrl;
         const auditGridSource=[];
         const auditDataAdapter = [];
         var updateUrl;
         var saveUrl;
         var deleteUrl;
         var checkifcanUrl;
var longSkewsItems = ['#jqxCheckBox-25-DP15-10'
					, '#jqxCheckBox-25-DP15-11'
					, '#jqxCheckBox-25-DP25-10'
					, '#jqxCheckBox-25-DP25-11'
					, '#jqxCheckBox-25-ATM-10'
					, '#jqxCheckBox-25-ATM-11'
					, '#jqxCheckBox-25-DC25-10'
					, '#jqxCheckBox-25-DC25-11'
					, '#jqxCheckBox-25-DC15-10'
					, '#jqxCheckBox-25-DC15-11'
					, '#jqxCheckBox-25-DP15_ATM-10'
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
					, '#jqxCheckBox-26-DP15-10'
					, '#jqxCheckBox-26-DP25-10'
					, '#jqxCheckBox-26-ATM-10'
					, '#jqxCheckBox-26-DC25-10'
					, '#jqxCheckBox-26-DC15-10'
					, '#jqxCheckBox-26-DP15_ATM-10'
					, '#jqxCheckBox-26-DP25_ATM-10'
					, '#jqxCheckBox-26-DC25_ATM-10'
					, '#jqxCheckBox-26-DC15_ATM-10'
					, '#jqxCheckBox-26-DP25_DC25-10'
					, '#jqxCheckBox-26-DP15_DC15-10'
					, '#jqxCheckBox-26-DP15-11'
					, '#jqxCheckBox-26-DP25-11'
					, '#jqxCheckBox-26-ATM-11'
					, '#jqxCheckBox-26-DC25-11'
					, '#jqxCheckBox-26-DC15-11'
					, '#jqxCheckBox-26-DP15_ATM-11'
					, '#jqxCheckBox-26-DP25_ATM-11'
					, '#jqxCheckBox-26-DC25_ATM-11'
					, '#jqxCheckBox-26-DC15_ATM-11'
					, '#jqxCheckBox-26-DP25_DC25-11'
					, '#jqxCheckBox-26-DP15_DC15-11'
					, '#jqxCheckBox-27-DP15-10'
					, '#jqxCheckBox-27-DP25-10'
					, '#jqxCheckBox-27-ATM-10'
					, '#jqxCheckBox-27-DC25-10'
					, '#jqxCheckBox-27-DC15-10'
					, '#jqxCheckBox-27-DP15_ATM-10'
					, '#jqxCheckBox-27-DP25_ATM-10'
					, '#jqxCheckBox-27-DC25_ATM-10'
					, '#jqxCheckBox-27-DC15_ATM-10'
					, '#jqxCheckBox-27-DP25_DC25-10'
					, '#jqxCheckBox-27-DP15_DC15-10'
					, '#jqxCheckBox-27-DP15-11'
					, '#jqxCheckBox-27-DP25-11'
					, '#jqxCheckBox-27-ATM-11'
					, '#jqxCheckBox-27-DC25-11'
					, '#jqxCheckBox-27-DC15-11'
					, '#jqxCheckBox-27-DP15_ATM-11'
					, '#jqxCheckBox-27-DP25_ATM-11'
					, '#jqxCheckBox-27-DC25_ATM-11'
					, '#jqxCheckBox-27-DC15_ATM-11'
					, '#jqxCheckBox-27-DP25_DC25-11'
					, '#jqxCheckBox-27-DP15_DC15-11'
					, '#jqxCheckBox-28-DP15-10'
					, '#jqxCheckBox-28-DP25-10'
					, '#jqxCheckBox-28-ATM-10'
					, '#jqxCheckBox-28-DC25-10'
					, '#jqxCheckBox-28-DC15-10'
					, '#jqxCheckBox-28-DP15_ATM-10'
					, '#jqxCheckBox-28-DP25_ATM-10'
					, '#jqxCheckBox-28-DC25_ATM-10'
					, '#jqxCheckBox-28-DC15_ATM-10'
					, '#jqxCheckBox-28-DP25_DC25-10'
					, '#jqxCheckBox-28-DP15_DC15-10'
					, '#jqxCheckBox-28-DP15-11'
					, '#jqxCheckBox-28-DP25-11'
					, '#jqxCheckBox-28-ATM-11'
					, '#jqxCheckBox-28-DC25-11'
					, '#jqxCheckBox-28-DC15-11'
					, '#jqxCheckBox-28-DP15_ATM-11'
					, '#jqxCheckBox-28-DP25_ATM-11'
					, '#jqxCheckBox-28-DC25_ATM-11'
					, '#jqxCheckBox-28-DC15_ATM-11'
					, '#jqxCheckBox-28-DP25_DC25-11'
					, '#jqxCheckBox-28-DP15_DC15-11'
					, '#jqxCheckBox-29-DP15-10'
					, '#jqxCheckBox-29-DP25-10'
					, '#jqxCheckBox-29-ATM-10'
					, '#jqxCheckBox-29-DC25-10'
					, '#jqxCheckBox-29-DC15-10'
					, '#jqxCheckBox-29-DP15_ATM-10'
					, '#jqxCheckBox-29-DP25_ATM-10'
					, '#jqxCheckBox-29-DC25_ATM-10'
					, '#jqxCheckBox-29-DC15_ATM-10'
					, '#jqxCheckBox-29-DP25_DC25-10'
					, '#jqxCheckBox-29-DP15_DC15-10'
					, '#jqxCheckBox-29-DP15-11'
					, '#jqxCheckBox-29-DP25-11'
					, '#jqxCheckBox-29-ATM-11'
					, '#jqxCheckBox-29-DC25-11'
					, '#jqxCheckBox-29-DC15-11'
					, '#jqxCheckBox-29-DP15_ATM-11'
					, '#jqxCheckBox-29-DP25_ATM-11'
					, '#jqxCheckBox-29-DC25_ATM-11'
					, '#jqxCheckBox-29-DC15_ATM-11'
					, '#jqxCheckBox-29-DP25_DC25-11'
					, '#jqxCheckBox-29-DP15_DC15-11'];

var ShortSkewsItem = ['#jqxCheckBox-30-DP15-12'
					, '#jqxCheckBox-30-DP25-12'
					, '#jqxCheckBox-30-ATM-12'
					, '#jqxCheckBox-30-DC25-12'
					, '#jqxCheckBox-30-DC15-12'
					, '#jqxCheckBox-30-DP15_ATM-12'
					, '#jqxCheckBox-30-DP25_ATM-12'
					, '#jqxCheckBox-30-DC25_ATM-12'
					, '#jqxCheckBox-30-DC15_ATM-12'
					, '#jqxCheckBox-30-DP25_DC25-12'
					, '#jqxCheckBox-30-DP15_DC15-12'
					, '#jqxCheckBox-30-DP15-13'
					, '#jqxCheckBox-30-DP25-13'
					, '#jqxCheckBox-30-ATM-13'
					, '#jqxCheckBox-30-DC25-13'
					, '#jqxCheckBox-30-DC15-13'
					, '#jqxCheckBox-30-DP15_ATM-13'
					, '#jqxCheckBox-30-DP25_ATM-13'
					, '#jqxCheckBox-30-DC25_ATM-13'
					, '#jqxCheckBox-30-DC15_ATM-13'
					, '#jqxCheckBox-30-DP25_DC25-13'
					, '#jqxCheckBox-30-DP15_DC15-13'
					, '#jqxCheckBox-31-DP15-12'
					, '#jqxCheckBox-31-DP25-12'
					, '#jqxCheckBox-31-ATM-12'
					, '#jqxCheckBox-31-DC25-12'
					, '#jqxCheckBox-31-DC15-12'
					, '#jqxCheckBox-31-DP15_ATM-12'
					, '#jqxCheckBox-31-DP25_ATM-12'
					, '#jqxCheckBox-31-DC25_ATM-12'
					, '#jqxCheckBox-31-DC15_ATM-12'
					, '#jqxCheckBox-31-DP25_DC25-12'
					, '#jqxCheckBox-31-DP15_DC15-12'
					, '#jqxCheckBox-31-DP15-13'
					, '#jqxCheckBox-31-DP25-13'
					, '#jqxCheckBox-31-ATM-13'
					, '#jqxCheckBox-31-DC25-13'
					, '#jqxCheckBox-31-DC15-13'
					, '#jqxCheckBox-31-DP15_ATM-13'
					, '#jqxCheckBox-31-DP25_ATM-13'
					, '#jqxCheckBox-31-DC25_ATM-13'
					, '#jqxCheckBox-31-DC15_ATM-13'
					, '#jqxCheckBox-31-DP25_DC25-13'
					, '#jqxCheckBox-31-DP15_DC15-13',
					'#jqxCheckBox-30-DP15-10'
					, '#jqxCheckBox-30-DP25-10'
					, '#jqxCheckBox-30-ATM-10'
					, '#jqxCheckBox-30-DC25-10'
					, '#jqxCheckBox-30-DC15-10'
					, '#jqxCheckBox-30-DP15_ATM-10'
					, '#jqxCheckBox-30-DP25_ATM-10'
					, '#jqxCheckBox-30-DC25_ATM-10'
					, '#jqxCheckBox-30-DC15_ATM-10'
					, '#jqxCheckBox-30-DP25_DC25-10'
					, '#jqxCheckBox-30-DP15_DC15-10'
					, '#jqxCheckBox-31-DP15-10'
					, '#jqxCheckBox-31-DP25-10'
					, '#jqxCheckBox-31-ATM-10'
					, '#jqxCheckBox-31-DC25-10'
					, '#jqxCheckBox-31-DC15-10'
					, '#jqxCheckBox-31-DP15_ATM-10'
					, '#jqxCheckBox-31-DP25_ATM-10'
					, '#jqxCheckBox-31-DC25_ATM-10'
					, '#jqxCheckBox-31-DC15_ATM-10'
					, '#jqxCheckBox-31-DP25_DC25-10'
					, '#jqxCheckBox-31-DP15_DC15-10'
				];	 		
       const nameSubgroupId =  [
                    { name: 'DP15', subgroupId: '1' },
                    { name: 'DP25', subgroupId: '2' },
                    { name: 'ATM', subgroupId: '3' },
                    { name: 'DC25', subgroupId: '4' },
                    { name: 'DC15', subgroupId: '5' }
                ];
      const factorId_description =  [
                    { name: 'PRICE VOL (B&S 365)', factorId: '10' },
                    { name: 'TICKS', factorId: '11' },
                    { name: 'YIELD VOL (B&S in %)', factorId: '12' },
                    { name: 'BPDV Vol', factorId: '13' }
                ];         
	   const nameFactorId =  [
	                    { name: 'BUND 2nd M(B&S 365 in %)', factor: '10', groupId:'25' },
	                    { name: 'BUND 2nd M(in TICKS)', factor: '11', groupId:'25'},
	                    { name: 'BUND 3rd M(B&S 365 in %)', factor: '10', groupId:'26'  },
	                    { name: 'BUND 3rd M(in TICKS)', factor: '11', groupId:'26' },
	                    { name: 'BOBL 2nd M(B&S 365 in %)', factor: '10', groupId:'27' },
	                    { name: 'BOBL 2nd M(in TICKS)', factor: '11', groupId:'27'},
	                    { name: 'BOBL 3rd M(B&S 365 in %)', factor: '10', groupId:'28'  },
	                    { name: 'BOBL 3rd M(in TICKS)', factor: '11', groupId:'28' },
	                    { name: 'BUXL 2nd M(B&S 365 in %)', factor: '10', groupId:'29'  },
	                    { name: 'BUXL 2nd M(in TICKS)', factor: '11', groupId:'29' },
	                    { name: 'EURIBOR 4th Mtty PRICE VOL (B&S in %)', factor: '10', groupId:'30'  },
	                    { name: 'EURIBOR 4th Mtty BPDV Vol', factor: '13', groupId:'30' },
	                    { name: 'EURIBOR 4th Mtty YIELD VOL (B&S in %)', factor: '12', groupId:'30' },
	                    { name: 'EURIBOR 7th Mtty PRICE VOL (B&S in %)', factor: '10', groupId:'31'  },
	                    { name: 'EURIBOR 7th Mtty BPDV Vol', factor: '13', groupId:'31' },
	                    { name: 'EURIBOR 7th Mtty YIELD VOL (B&S in %)', factor: '12', groupId:'31' },
	                ];
		const LongSkewsAuditTables = [
		  { id:'1',
		    fields: [
						    { name: 'factor', type: 'string' },
		                    { name: 'dp15', type: 'string' },
		                    { name: 'dp25', type: 'string' },
		                    { name: 'atm', type: 'string' },
		                    { name: 'dc25', type: 'string' },
		                    { name: 'dc15', type: 'string' },
		                    { name: 'dp15_ATM', type: 'string' },
		                    { name: 'dp25_ATM', type: 'string' },
		                    { name: 'dc25_ATM', type: 'string' },
		                    { name: 'dc15_ATM', type: 'string' },
		                    { name: 'dp25_DC25', type: 'string' },
		                    { name: 'dp15_DC15', type: 'string' }
		                ],
			auditTableName:'bund2AuditGrid',
         	auditUrl:'/skews/long-skews-data-bund2/',
         	groupId:25
		  },
		  { id:'2',
		     fields: [
						   { name:'factor', type: 'string' },
		                    { name: 'dp15', type: 'string' },
		                    { name: 'dp25', type: 'string' },
		                    { name: 'atm', type: 'string' },
		                    { name: 'dc25', type: 'string' },
		                    { name: 'dc15', type: 'string' },
		                    { name: 'dp15_ATM', type: 'string' },
		                    { name: 'dp25_ATM', type: 'string' },
		                    { name: 'dc25_ATM', type: 'string' },
		                    { name: 'dc15_ATM', type: 'string' },
		                    { name: 'dp25_DC25', type: 'string' },
		                    { name: 'dp15_DC15', type: 'string' }
		                ],
			auditTableName:'bund3AuditGrid',
			auditUrl:'/skews/long-skews-data-bund3/',
         	groupId:26
		  },
		  { id:'3',
		     fields: [
						 { name:'factor', type: 'string' },
		                    { name: 'dp15', type: 'string' },
		                    { name: 'dp25', type: 'string' },
		                    { name: 'atm', type: 'string' },
		                    { name: 'dc25', type: 'string' },
		                    { name: 'dc15', type: 'string' },
		                    { name: 'dp15_ATM', type: 'string' },
		                    { name: 'dp25_ATM', type: 'string' },
		                    { name: 'dc25_ATM', type: 'string' },
		                    { name: 'dc15_ATM', type: 'string' },
		                    { name: 'dp25_DC25', type: 'string' },
		                    { name: 'dp15_DC15', type: 'string' }
		                ],
			auditTableName:'bobl2AuditGrid',
			auditUrl:'/skews/long-skews-data-bobl2/',
         	groupId:27
		  },
		  { id:'4',
		    fields: [
						 { name:'factor', type: 'string' },
		                    { name: 'dp15', type: 'string' },
		                    { name: 'dp25', type: 'string' },
		                    { name: 'atm', type: 'string' },
		                    { name: 'dc25', type: 'string' },
		                    { name: 'dc15', type: 'string' },
		                    { name: 'dp15_ATM', type: 'string' },
		                    { name: 'dp25_ATM', type: 'string' },
		                    { name: 'dc25_ATM', type: 'string' },
		                    { name: 'dc15_ATM', type: 'string' },
		                    { name: 'dp25_DC25', type: 'string' },
		                    { name: 'dp15_DC15', type: 'string' }
		                ],
			auditTableName:'bobl3AuditGrid',
			auditUrl:'/skews/long-skews-data-bobl3/',
         	groupId:28
		  },
		  { id:'5',
		     fields: [
						{ name:'factor', type: 'string' },
		                    { name: 'dp15', type: 'string' },
		                    { name: 'dp25', type: 'string' },
		                    { name: 'atm', type: 'string' },
		                    { name: 'dc25', type: 'string' },
		                    { name: 'dc15', type: 'string' },
		                    { name: 'dp15_ATM', type: 'string' },
		                    { name: 'dp25_ATM', type: 'string' },
		                    { name: 'dc25_ATM', type: 'string' },
		                    { name: 'dc15_ATM', type: 'string' },
		                    { name: 'dp25_DC25', type: 'string' },
		                    { name: 'dp15_DC15', type: 'string' }
		                ],
			auditTableName:'buxl2AuditGrid',
			auditUrl:'/skews/long-skews-data-buxl2/',
         	groupId:29
		  },
		  ];
		  const ShortSkewsAuditTables = [
		  { id:'1',
		    fields: [
						    { name: 'factor', type: 'string' },
		                    { name: 'dp15', type: 'string' },
		                    { name: 'dp25', type: 'string' },
		                    { name: 'atm', type: 'string' },
		                    { name: 'dc25', type: 'string' },
		                    { name: 'dc15', type: 'string' },
		                    { name: 'dp15_ATM', type: 'string' },
		                    { name: 'dp25_ATM', type: 'string' },
		                    { name: 'dc25_ATM', type: 'string' },
		                    { name: 'dc15_ATM', type: 'string' },
		                    { name: 'dp25_DC25', type: 'string' },
		                    { name: 'dp15_DC15', type: 'string' }
		                ],
			auditTableName:'euribor4AuditGrid',
         	auditUrl:'/skews/short-skews-data-euribor4/',
         	groupId:30
		  },
		  { id:'2',
		     fields: [
						   { name:'factor', type: 'string' },
		                    { name: 'dp15', type: 'string' },
		                    { name: 'dp25', type: 'string' },
		                    { name: 'atm', type: 'string' },
		                    { name: 'dc25', type: 'string' },
		                    { name: 'dc15', type: 'string' },
		                    { name: 'dp15_ATM', type: 'string' },
		                    { name: 'dp25_ATM', type: 'string' },
		                    { name: 'dc25_ATM', type: 'string' },
		                    { name: 'dc15_ATM', type: 'string' },
		                    { name: 'dp25_DC25', type: 'string' },
		                    { name: 'dp15_DC15', type: 'string' }
		                ],
			auditTableName:'euribor7AuditGrid',
			auditUrl:'/skews/short-skews-data-euribor7/',
         	groupId:31
		  }
		  ];
		 var longSkewsAuditDefaultData=[];
         var ShortSkewsAuditDefaultData=[];
        
         var source;
         var inputDataLongSkews = document.getElementById("data-input-LongSkews");
         var inputDataShortSkews = document.getElementById("data-input-ShortSkews");
      
         var Type;
         
         const skewsValue = $("#skewsValue")[0].innerText;
         checkifcanUrl="/skews/checkifcansave/"+skewsValue+"/";
					
          if(skewsValue==1)
         	 {
			  Type="LongSkews" ;
         	  updateUrl="/skews/update-long-skews-data";
			  saveUrl="/skews/save-long-skews";	
         	  deleteUrl="/skews/delete-long-skews-byreferDate/";
		     } 
          else if(skewsValue==2)
            {
				Type="ShortSkews" ;
				updateUrl="/skews/update-short-skews-data";
				saveUrl="/skews/save-short-skews";	   
			    deleteUrl="/skews/delete-short-skews-byreferDate/";
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
			  
			  if(skewsValue==1){
				 $("#longskews-btn").addClass('active');
			  }else 
			   if(skewsValue==2){
			   $("#shortskews-btn").addClass('active');
			   }
			  renderSubGroup(skewsValue);
    
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
								  { "name": "DP15-10.25", "type": "float" },
								  { "name": "DP15-11.25", "type": "float" },
								  { "name": "DP25-10.25", "type": "float" },
								  { "name": "DP25-11.25", "type": "float" },
								  { "name": "ATM-10.25", "type": "float" },
								  { "name": "ATM-11.25", "type": "float" },
								  { "name": "DC15-10.25", "type": "float" },
								  { "name": "DC15-11.25", "type": "float" },
								  { "name": "DC25-10.25", "type": "float" },
								  { "name": "DC25-11.25", "type": "float" },
								  { "name": "DP15_ATM-10.25", "type": "float" },
								  { "name": "DP15_ATM-11.25", "type": "float" },
								  { "name": "DP25_ATM-10.25", "type": "float" },
								  { "name": "DP25_ATM-11.25", "type": "float" },
								  { "name": "DC25_ATM-10.25", "type": "float" },
								  { "name": "DC25_ATM-11.25", "type": "float" },
								  { "name": "DC15_ATM-10.25", "type": "float" },
								  { "name": "DC15_ATM-11.25", "type": "float" },
								  { "name": "DP25_DC25-10.25", "type": "float" },
								  { "name": "DP25_DC25-11.25", "type": "float" },
								  { "name": "DP15_DC15-10.25", "type": "float" },
								  { "name": "DP15_DC15-11.25", "type": "float" },
								  { "name": "DP15-10.26", "type": "float" },
								  { "name": "DP15-11.26", "type": "float" },
								  { "name": "DP25-10.26", "type": "float" },
								  { "name": "DP25-11.26", "type": "float" },
								  { "name": "ATM-10.26", "type": "float" },
								  { "name": "ATM-11.26", "type": "float" },
								  { "name": "DC15-10.26", "type": "float" },
								  { "name": "DC15-11.26", "type": "float" },
								  { "name": "DC25-10.26", "type": "float" },
								  { "name": "DC25-11.26", "type": "float" },
								  { "name": "DP15_ATM-10.26", "type": "float" },
								  { "name": "DP15_ATM-11.26", "type": "float" },
								  { "name": "DP25_ATM-10.26", "type": "float" },
								  { "name": "DP25_ATM-11.26", "type": "float" },
								  { "name": "DC25_ATM-10.26", "type": "float" },
								  { "name": "DC25_ATM-11.26", "type": "float" },
								  { "name": "DC15_ATM-10.26", "type": "float" },
								  { "name": "DC15_ATM-11.26", "type": "float" },
								  { "name": "DP25_DC25-10.26", "type": "float" },
								  { "name": "DP25_DC25-11.26", "type": "float" },
								  { "name": "DP15_DC15-10.26", "type": "float" },
								  { "name": "DP15_DC15-11.26", "type": "float" },
								  { "name": "DP15-10.27", "type": "float" },
								  { "name": "DP15-11.27", "type": "float" },
								  { "name": "DP25-10.27", "type": "float" },
								  { "name": "DP25-11.27", "type": "float" },
								  { "name": "ATM-10.27", "type": "float" },
								  { "name": "ATM-11.27", "type": "float" },
								  { "name": "DC15-10.27", "type": "float" },
								  { "name": "DC15-11.27", "type": "float" },
								  { "name": "DC25-10.27", "type": "float" },
								  { "name": "DC25-11.27", "type": "float" },
								  { "name": "DP15_ATM-10.27", "type": "float" },
								  { "name": "DP15_ATM-11.27", "type": "float" },
								  { "name": "DP25_ATM-10.27", "type": "float" },
								  { "name": "DP25_ATM-11.27", "type": "float" },
								  { "name": "DC25_ATM-10.27", "type": "float" },
								  { "name": "DC25_ATM-11.27", "type": "float" },
								  { "name": "DC15_ATM-10.27", "type": "float" },
								  { "name": "DC15_ATM-11.27", "type": "float" },
								  { "name": "DP25_DC25-10.27", "type": "float" },
								  { "name": "DP25_DC25-11.27", "type": "float" },
								  { "name": "DP15_DC15-10.27", "type": "float" },
								  { "name": "DP15_DC15-11.27", "type": "float" },
							   	  { "name": "DP15-10.28", "type": "float" },
								  { "name": "DP15-11.28", "type": "float" },
								  { "name": "DP25-10.28", "type": "float" },
								  { "name": "DP25-11.28", "type": "float" },
								  { "name": "ATM-10.28", "type": "float" },
								  { "name": "ATM-11.28", "type": "float" },
								  { "name": "DC15-10.28", "type": "float" },
								  { "name": "DC15-11.28", "type": "float" },
								  { "name": "DC25-10.28", "type": "float" },
								  { "name": "DC25-11.28", "type": "float" },
								  { "name": "DP15_ATM-10.28", "type": "float" },
								  { "name": "DP15_ATM-11.28", "type": "float" },
								  { "name": "DP25_ATM-10.28", "type": "float" },
								  { "name": "DP25_ATM-11.28", "type": "float" },
								  { "name": "DC25_ATM-10.28", "type": "float" },
								  { "name": "DC25_ATM-11.28", "type": "float" },
								  { "name": "DC15_ATM-10.28", "type": "float" },
								  { "name": "DC15_ATM-11.28", "type": "float" },
								  { "name": "DP25_DC25-10.28", "type": "float" },
								  { "name": "DP25_DC25-11.28", "type": "float" },
								  { "name": "DP15_DC15-10.28", "type": "float" },
								  { "name": "DP15_DC15-11.28", "type": "float" },
								  { "name": "DP15-10.29", "type": "float" },
								  { "name": "DP15-11.29", "type": "float" },
								  { "name": "DP25-10.29", "type": "float" },
								  { "name": "DP25-11.29", "type": "float" },
								  { "name": "ATM-10.29", "type": "float" },
								  { "name": "ATM-11.29", "type": "float" },
								  { "name": "DC15-10.29", "type": "float" },
								  { "name": "DC15-11.29", "type": "float" },
								  { "name": "DC25-10.29", "type": "float" },
								  { "name": "DC25-11.29", "type": "float" },
								  { "name": "DP15_ATM-10.29", "type": "float" },
								  { "name": "DP15_ATM-11.29", "type": "float" },
								  { "name": "DP25_ATM-10.29", "type": "float" },
								  { "name": "DP25_ATM-11.29", "type": "float" },
								  { "name": "DC25_ATM-10.29", "type": "float" },
								  { "name": "DC25_ATM-11.29", "type": "float" },
								  { "name": "DC15_ATM-10.29", "type": "float" },
								  { "name": "DC15_ATM-11.29", "type": "float" },
								  { "name": "DP25_DC25-10.29", "type": "float" },
								  { "name": "DP25_DC25-11.29", "type": "float" },
								  { "name": "DP15_DC15-10.29", "type": "float" },
								  { "name": "DP15_DC15-11.29", "type": "float" },
								  { "name": "DP15-10.30", "type": "float" },
								  { "name": "DP25-10.30", "type": "float" },
								  { "name": "ATM-10.30", "type": "float" },
								  { "name": "DC15-10.30", "type": "float" },
								  { "name": "DC25-10.30", "type": "float" },
								  { "name": "DP15_ATM-10.30", "type": "float" },
								  { "name": "DP25_ATM-10.30", "type": "float" },
								  { "name": "DC25_ATM-10.30", "type": "float" },
								  { "name": "DC15_ATM-10.30", "type": "float" },
								  { "name": "DP25_DC25-10.30", "type": "float" },
								  { "name": "DP15_DC15-10.30", "type": "float" },
								  { "name": "DP15-12.30", "type": "float" },
								  { "name": "DP25-12.30", "type": "float" },
								  { "name": "ATM-12.30", "type": "float" },
								  { "name": "DC15-12.30", "type": "float" },
								  { "name": "DC25-12.30", "type": "float" },
								  { "name": "DP15_ATM-12.30", "type": "float" },
								  { "name": "DP25_ATM-12.30", "type": "float" },
								  { "name": "DC25_ATM-12.30", "type": "float" },
								  { "name": "DC15_ATM-12.30", "type": "float" },
								  { "name": "DP25_DC25-12.30", "type": "float" },
								  { "name": "DP15_DC15-12.30", "type": "float" },
								  { "name": "DP15-13.30", "type": "float" },
								  { "name": "DP25-13.30", "type": "float" },
								  { "name": "ATM-13.30", "type": "float" },
								  { "name": "DC15-13.30", "type": "float" },
								  { "name": "DC25-13.30", "type": "float" },
								  { "name": "DP15_ATM-13.30", "type": "float" },
								  { "name": "DP25_ATM-13.30", "type": "float" },
								  { "name": "DC25_ATM-13.30", "type": "float" },
								  { "name": "DC15_ATM-13.30", "type": "float" },
								  { "name": "DP25_DC25-13.30", "type": "float" },
								  { "name": "DP15_DC15-13.30", "type": "float" },
								  { "name": "DP15-10.31", "type": "float" },
								  { "name": "DP25-10.31", "type": "float" },
								  { "name": "ATM-10.31", "type": "float" },
								  { "name": "DC15-10.31", "type": "float" },
								  { "name": "DC25-10.31", "type": "float" },
								  { "name": "DP15_ATM-10.31", "type": "float" },
								  { "name": "DP25_ATM-10.31", "type": "float" },
								  { "name": "DC25_ATM-10.31", "type": "float" },
								  { "name": "DC15_ATM-10.31", "type": "float" },
								  { "name": "DP25_DC25-10.31", "type": "float" },
								  { "name": "DP15_DC15-10.31", "type": "float" },
								  { "name": "DP15-12.31", "type": "float" },
								  { "name": "DP25-12.31", "type": "float" },
								  { "name": "ATM-12.31", "type": "float" },
								  { "name": "DC15-12.31", "type": "float" },
								  { "name": "DC25-12.31", "type": "float" },
								  { "name": "DP15_ATM-12.31", "type": "float" },
								  { "name": "DP25_ATM-12.31", "type": "float" },
								  { "name": "DC25_ATM-12.31", "type": "float" },
								  { "name": "DC15_ATM-12.31", "type": "float" },
								  { "name": "DP25_DC25-12.31", "type": "float" },
								  { "name": "DP15_DC15-12.31", "type": "float" },
								  { "name": "DP15-13.31", "type": "float" },
								  { "name": "DP25-13.31", "type": "float" },
								  { "name": "ATM-13.31", "type": "float" },
								  { "name": "DC15-13.31", "type": "float" },
								  { "name": "DC25-13.31", "type": "float" },
								  { "name": "DP15_ATM-13.31", "type": "float" },
								  { "name": "DP25_ATM-13.31", "type": "float" },
								  { "name": "DC25_ATM-13.31", "type": "float" },
								  { "name": "DC15_ATM-13.31", "type": "float" },
								  { "name": "DP25_DC25-13.31", "type": "float" },
								  { "name": "DP15_DC15-13.31", "type": "float" },
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
		     	 getFilterHistory(skewsValue);
	
		         $("#grid").jqxGrid('showloadelement');  
	    	    
		         getFilterData(skewsValue);         
		       
             	 $('#dateInputAudit').on('change', function (event) 
				 {  date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				    filterDate=date;
				   
				    const SkewsAuditTables=(skewsValue==1)?LongSkewsAuditTables:ShortSkewsAuditTables;
 					SkewsAuditTables.forEach((table, i) => {
											 delete auditGridSource[i].localdata;   
					    				     auditGridSource[i].url=table.auditUrl+date;
					    					 auditDataAdapter[i] = new $.jqx.dataAdapter(auditGridSource[i]);
					    					 $('#'+table.auditTableName).jqxGrid({source:auditDataAdapter[i]});
										 });
				 }); 

			$("#filter").click(function () {
            	
            	getFilterData(skewsValue);
               });    
		   });
		    $("#Clearfilter").click(function () {
				     if (skewsValue==1)
    				 {
					  for(i=0; i<longSkewsItems.length; i++)
		    			   {
		    		    	$(longSkewsItems[i]).jqxCheckBox({checked:false});
		    		       } 
					  }
					  else if (skewsValue==2)
		    				 {
							  for(i=0; i<ShortSkewsItem.length; i++)
				    			   {
				    		    	$(ShortSkewsItem[i]).jqxCheckBox({checked:false});
				    		       } 
							  }
				  });  
	       function Edit(row, event, groupId) {
			   
			  const SkewsAuditTables=(skewsValue==1)?LongSkewsAuditTables:ShortSkewsAuditTables;
			  const matchingObject = SkewsAuditTables.find(item => item.groupId === groupId);
				     isedit=true;
					 var data=$('#'+matchingObject.auditTableName).jqxGrid('getrowdata', row);	
				       oldDataJson={
								    "factor": data.factor,
								    "dp15": data.dp15,
								    "dp25": data.dp25,
								    "atm": data.atm,
								    "dc25": data.dc25,
								    "dc15": data.dc15,
								    "dp15_ATM": data.dp15_ATM,
								    "dp25_ATM": data.dp25_ATM,
								    "dc25_ATM": data.dc25_ATM,
								    "dc15_ATM": data.dc15_ATM,
								    "dp25_DC25": data.dp25_DC25,
								    "dp15_DC15": data.dp15_DC15
								    };
				     selectedRow.editrow = row;
				     date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				     if(auditGridSource[matchingObject.id].url=='' || date!=filterDate)
				     { 
                         delete auditGridSource[matchingObject.id].localdata;   
    				     auditGridSource[matchingObject.id].url=auditUrl+date;
    					 auditDataAdapter[matchingObject.id] = new $.jqx.dataAdapter(auditGridSource[matchingObject.id]);
    					 $('#'+matchingObject.auditTableName).jqxGrid({source:auditDataAdapter[matchingObject.id] });
    				
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
						$('#'+matchingObject.auditTableName).jqxGrid('beginrowedit', row);
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
			  
			    function Update(row, event, groupId) {
				    const SkewsAuditTables=(skewsValue==1)?LongSkewsAuditTables:ShortSkewsAuditTables;
			  
				    const matchingObject = SkewsAuditTables.find(item => item.groupId === groupId);
				   isupdate=true;
				   var dataToBeUpdated = [];
				   var updatedDataJson;
				   var keys;
				   var updatedData = $('#'+matchingObject.auditTableName).jqxGrid('getrowdata', row);
				   selectedRow.editrow = -1;
				   $('#'+matchingObject.auditTableName).jqxGrid('endrowedit', row);
				    var updatedData = $('#'+matchingObject.auditTableName).jqxGrid('getrowdata', row);
				    	 var updatedDataJson = {
						    "factor": updatedData.factor,
						    "dp15": updatedData.dp15,
						    "dp25": updatedData.dp25,
						    "atm": updatedData.atm,
						    "dc25": updatedData.dc25,
						    "dc15": updatedData.dc15,
						    "dp15_ATM": updatedData.dp15_ATM,
						    "dp25_ATM": updatedData.dp25_ATM,
						    "dc25_ATM": updatedData.dc25_ATM,
						    "dc15_ATM": updatedData.dc15_ATM,
						    "dp25_DC25": updatedData.dp25_DC25,
						    "dp15_DC15": updatedData.dp15_DC15
						};

				         keys= Object.keys(updatedDataJson);
                        
                    	for (var i = 0; i < keys.length; i++) {
					        var field = keys[i];
					        if (updatedDataJson[field] !== oldDataJson[field]) {
								debugger;
					            dataToBeUpdated.push({
								   "subgroupId":getSubgroupIdByName(field.toUpperCase()),
		            			   "factor":getfactorIdByDescription(updatedDataJson.factor),
		            			   "groupId":groupId,
		            			   "value":updatedDataJson[field].replace(',', ''),
		            			   "referdate":date
					            });
					        }
					    }
					    
                    var updatedJson=[];
                    for (let i = 0; i < keys.length; i++) {
								
	                    if(updatedDataJson[keys[i]]!=oldDataJson[keys[i]])
                          {
							  updatedJson.push({"assetId": 6,
                  						    "groupId":groupId,
										    "value": keys[i].toUpperCase()+"%"+getfactorIdByDescription(updatedDataJson.factor)}); 
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
		                          
			    					const SkewsAuditTables=(skewsValue==1)?LongSkewsAuditTables:ShortSkewsAuditTables;
			                        SkewsAuditTables.forEach((table, i) => {
										 delete auditGridSource[i].localdata;   
				    				     auditGridSource[i].url=table.auditUrl+date;
				    					 auditDataAdapter[i] = new $.jqx.dataAdapter(auditGridSource[i]);
				    					 $('#'+table.auditTableName).jqxGrid({source:auditDataAdapter[i]});
									 });
		      						getFilterData(skewsValue);
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
			    
			  
			  function Cancel(row, groupId) {
				  isedit=false;
				  isupdate=false;
				  selectedRow.editrow = row;
				  const SkewsAuditTables=(skewsValue==1)?LongSkewsAuditTables:ShortSkewsAuditTables;
			  
				   const matchingObject = SkewsAuditTables.find(item => item.groupId === groupId);
			       $('#'+matchingObject.auditTableName).jqxGrid('endrowedit', row, true);
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
		    	        	{	
		    					    const SkewsAuditTables=(skewsValue==1)?LongSkewsAuditTables:ShortSkewsAuditTables;
 								    SkewsAuditTables.forEach((table, i) => {
											 delete auditGridSource[i].localdata;   
					    				     auditGridSource[i].url=table.auditUrl+date;
					    					 auditDataAdapter[i] = new $.jqx.dataAdapter(auditGridSource[i]);
					    					 $('#'+table.auditTableName).jqxGrid({source:auditDataAdapter[i]});
										 });
		    					 }
		    	        	else{
							 getAuditGridSource(skewsValue);
							 }
		    	        	},
				             error: function (e) {
				                 console.log(e);
				             }
				         });
				    getFilterData(skewsValue);  
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
			
				function getAuditGridSource(skewsValue){
				
				latestUrl='/skews/getlatest/'+skewsValue;
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
						    				     
						    					const SkewsAuditTables=(skewsValue==1)?LongSkewsAuditTables:ShortSkewsAuditTables;
			 								    SkewsAuditTables.forEach((table, i) => {
														 delete auditGridSource[i].localdata;   
								    				     auditGridSource[i].url=table.auditUrl+date;
								    					 auditDataAdapter[i] = new $.jqx.dataAdapter(auditGridSource[i]);
								    					 $('#'+table.auditTableName).jqxGrid({source:auditDataAdapter[i]});
													 });
												
						    			 }
			    	   			   }else {
									         const SkewsAuditTables=(skewsValue==1)?LongSkewsAuditTables:ShortSkewsAuditTables;
			 								 SkewsAuditTables.forEach((table, i) => {
															 delete auditGridSource[i].localdata;   
									    				     auditGridSource[i].localdata=[];
									    					 auditDataAdapter[i] = new $.jqx.dataAdapter(auditGridSource[i]);
									    					 $('#'+table.auditTableName).jqxGrid({source:auditDataAdapter[i]});
														 });
													
									  }
			    	        },
			    	        error: function (e) {
			    	        	
								  console.log("ERROR : ", e);
			
			    	        }
			    	    });
			
			}
	
		  function getFilterData(skewsValue)
		  {
          	var SelectedSearchDTO=[];
          	var allItems=0;
          	var checkedItem=[];
          	var json;
          	var values=[];
          	var values1=[];
          	var values2=[];
          	var values3=[];
          	var values4=[];
            $('#grid').jqxGrid({ showdefaultloadelement: true}); 
          	var item = 0;
            if (skewsValue==1)
		     {
			   items = longSkewsItems;
			 }else if (skewsValue==2)
		     {
			   items = ShortSkewsItem;
			 }
				 	for (i = 0; i < items.length; i++) {
		         		if($(items[i]).jqxCheckBox('checked'))
		         		{	  if (skewsValue==1)
						     {  if(itemValue[items[i]].GroupId==25) 
								   values.push(itemValue[items[i]].description);
								   else if(itemValue[items[i]].GroupId==26) 
								   values1.push(itemValue[items[i]].description);
								   else if(itemValue[items[i]].GroupId==27) 
								   values2.push(itemValue[items[i]].description);
								   else if(itemValue[items[i]].GroupId==28) 
								   values3.push(itemValue[items[i]].description);
								   else if(itemValue[items[i]].GroupId==29) 
								   values4.push(itemValue[items[i]].description);
							 }else 
							 {  if(itemValue[items[i]].GroupId==30) 
								   values.push(itemValue[items[i]].description);
								   else if(itemValue[items[i]].GroupId==31) 
								   values1.push(itemValue[items[i]].description);
							 }
							
		          			item=1;
		          			allItems=allItems+1;
		          			checkedItem.push(items[i]);
		         		}
		          	}
		         	
		          	if(item!=0)
		          	{
						 if (skewsValue==1)
						     {
							 if(values.length!=0)
							 SelectedSearchDTO.push({
			          		   "groupId": 25,
			       			   "selectedValues":values,
			       			  });
			       			  if(values1.length!=0)
			       			  SelectedSearchDTO.push({
			          		   "groupId": 26,
			       			   "selectedValues":values1,
			       			  });
			       			   if(values2.length!=0)
			       			  SelectedSearchDTO.push({
			          		   "groupId": 27,
			       			   "selectedValues":values2,
			       			  });
			       			   if(values3.length!=0)
			       			  SelectedSearchDTO.push({
			          		   "groupId": 28,
			       			   "selectedValues":values3,
			       			  });
			       			   if(values4.length!=0)
			       			  SelectedSearchDTO.push({
			          		   "groupId": 29,
			       			   "selectedValues":values4,
			       			  });
							 }else
							 {
							 if(values.length!=0)
							 SelectedSearchDTO.push({
			          		   "groupId": 30,
			       			   "selectedValues":values,
			       			  });
			       			  if(values1.length!=0)
			       			  SelectedSearchDTO.push({
			          		   "groupId": 31,
			       			   "selectedValues":values1,
			       			  });
							 }
		          		
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
    	    	        url: "/skews/getgriddata",
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
	  							                 
	  					saveFilterHistory(skewsValue,checkedItem);
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
			 const groupIds=getGroupId(skewsValue);
			  for(i=0; i<groupIds.length; i++)
			   {
		    	$.ajax({
				    contentType:  "application/json; charset=utf-8",
				    url: "/robot/callrobotsasync/6/"+groupIds[i],
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
		    
			location.href = "/bourse/skews?skews=" + divNum;
		}
	function renderSubGroup(skewsValue){
		
		if(skewsValue==1)
		{
			inputDataType = inputDataLongSkews;
		    items=longSkewsItems;
		    var dataInputGridFields=[
				    { name: 'factor', type: 'string' },
				    { name: 'DP15', type: 'string' },
                    { name: 'DP25', type: 'string' },
                    { name: 'ATM', type: 'string' },
                    { name: 'DC25', type: 'string' },
                    { name: 'DC15', type: 'string' }
                ];
		 var totalFields = dataInputGridFields.length;
		 var widthPercentage = (100-30) / (totalFields-1);
	
	 var dataInputGridColumns= [
   { text: '', datafield: 'factor',   width: '30%', cellsalign: 'center', align: 'center'},
   { text: '15%d P', datafield: 'DP15',   width: widthPercentage + '%', cellsalign: 'center', align: 'center'},
   { text: '25%d P', datafield: 'DP25',   width: widthPercentage + '%', cellsalign: 'center', align: 'center'},
   { text: 'ATM', datafield: 'ATM',   width: widthPercentage + '%', cellsalign: 'center', align: 'center'},
   { text: '25%d C', datafield: 'DC25',   width: widthPercentage + '%', cellsalign: 'center', align: 'center'},
   { text: '15%d C', datafield: 'DC15',   width: widthPercentage + '%', cellsalign: 'center', align: 'center'},
  
];	  
			 var defaultData=longSkewsAuditDefaultData;
			 var fields=[
				    { name:'factor', type: 'string' },
                    { name: 'DP15', type: 'string' },
                    { name: 'DP25', type: 'string' },
                    { name: 'ATM', type: 'string' },
                    { name: 'DC25', type: 'string' },
                    { name: 'DC15', type: 'string' }
                ];
               var totalFields = fields.length;
               var widthPercentage = (100-5) / totalFields;
               var arrayOFcolumns= [ 
	                	   { text: '',editable:false, datafield: 'Edit',width:'5%',cellsrenderer: function (row) {
		                	return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons"+row+"\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
		                   }
		                  },
		                  { text: '',editable:false,  datafield: 'factor', width: widthPercentage + '%'},
		                  { text: '15%d P', datafield: 'dp15', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		                  { text: '25%d P', datafield: 'dp25', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		                  { text: 'ATM', datafield: 'atm', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
						  { text: '25%d C', datafield: 'dc25', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		                  { text: '15%d C', datafield: 'dc15', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		                  
						];
						
			  var factors = ["BUND 2nd M(B&S 365 in %)",
							 "BUND 2nd M(in TICKS)",
							 "BUND 3rd M(B&S 365 in %)",
							 "BUND 3rd M(in TICKS)",
							 "BOBL 2nd M(B&S 365 in %)",
							 "BOBL 2nd M(in TICKS)",
							 "BOBL 3rd M(B&S 365 in %)",
							 "BOBL 3rd M(in TICKS)",
							 "BUXL 2nd M(B&S 365 in %)",
							 "BUXL 2nd M(in TICKS)"];

			
		}
		else
			if (skewsValue==2)
			{
			inputDataType = inputDataShortSkews;
		    items=ShortSkewsItem;
		    var dataInputGridFields=[
				    { name: 'factor', type: 'string' },
				    { name: 'DP15', type: 'string' },
                    { name: 'DP25', type: 'string' },
                    { name: 'ATM', type: 'string' },
                    { name: 'DC25', type: 'string' },
                    { name: 'DC15', type: 'string' }
                ];
		 var totalFields = dataInputGridFields.length;
		 var widthPercentage = (100-30) / (totalFields-1);
	
		 var dataInputGridColumns= [
			   { text: '', datafield: 'factor',   width: '30%', cellsalign: 'center', align: 'center'},
			   { text: '15%d P', datafield: 'DP15',   width: widthPercentage + '%', cellsalign: 'center', align: 'center'},
			   { text: '25%d P', datafield: 'DP25',   width: widthPercentage + '%', cellsalign: 'center', align: 'center'},
			   { text: 'ATM', datafield: 'ATM',   width: widthPercentage + '%', cellsalign: 'center', align: 'center'},
			   { text: '25%d C', datafield: 'DC25',   width: widthPercentage + '%', cellsalign: 'center', align: 'center'},
			   { text: '15%d C', datafield: 'DC15',   width: widthPercentage + '%', cellsalign: 'center', align: 'center'},
			  
			];	  
			 var defaultData=ShortSkewsAuditDefaultData;
			 var fields=[
				    { name:'factor', type: 'string' },
                    { name: 'DP15', type: 'string' },
                    { name: 'DP25', type: 'string' },
                    { name: 'ATM', type: 'string' },
                    { name: 'DC25', type: 'string' },
                    { name: 'DC15', type: 'string' }
                ];
               var totalFields = fields.length;
               var widthPercentage = (100-5) / totalFields;
               var arrayOFcolumns= [ 
	                	   { text: '',editable:false, datafield: 'Edit',width:'5%',cellsrenderer: function (row) {
		                	return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons"+row+"\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
		                   }
		                  },
		                  { text: '',editable:false,  datafield: 'factor', width: widthPercentage + '%'},
		                  { text: '15%d P', datafield: 'dp15', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		                  { text: '25%d P', datafield: 'dp25', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		                  { text: 'ATM', datafield: 'atm', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
						  { text: '25%d C', datafield: 'dc25', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		                  { text: '15%d C', datafield: 'dc15', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		                  
						];
			var factors = ["EURIBOR 4th Mtty YIELD VOL (B&S in %)",
						   "EURIBOR 4th Mtty PRICE VOL (B&S in %)",
						   "EURIBOR 4th Mtty BPDV Vol",
						   "EURIBOR 7th Mtty YIELD VOL (B&S in %)",
						   "EURIBOR 7th Mtty PRICE VOL (B&S in %)",
						   "EURIBOR 7th Mtty BPDV Vol"
						   ];
			}
			initiate(Type,inputDataType,items,dataInputGridFields,dataInputGridColumns,defaultData,fields,arrayOFcolumns,factors);
			
	}
	function saveFilterHistory(skewsValue,checkedItem){
		
			 
	  						var filterHistory = { 
			   		        	  "filterHistory":checkedItem.toString(),
			   		        	  "screenName":"DATABASE_INPUT_SCREEN_SKEWS-"+skewsValue
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
	function getFilterHistory(skewsValue){
		              
		           $.ajax({
	       	        contentType:  "application/json; charset=utf-8",
	    	        url: "/bourse/getdataentryfilterhistory/"+"DATABASE_INPUT_SCREEN_SKEWS-"+skewsValue,
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
					   if(skewsValue ==1)
		    	    	   for(i=0; i<longSkewsItems.length; i++)
		    			   {
		    		    	$(longSkewsItems[i]).jqxCheckBox({checked:true});
		    		       }
	    		       else if(skewsValue ==2)
	    		       	for(i=0; i<ShortSkewsItem.length; i++)
		    			   {
		    		    	$(ShortSkewsItem[i]).jqxCheckBox({checked:true});
		    		       }
	    	       }
	                  },
	    	        error: function (e) {
	    	        	
						  console.log("ERROR : ", e);
	
	    	        }
	    	    });	
	}
	
	function getGroupId(skewsValue)
	{
	  var groupId=[];	
		switch(skewsValue) {
		  
		 case '1': 
		   groupId=['25','26','27','28','29']
		        break;
		 case '2': 
		   groupId=['30','31']
		        break;
		}
	return groupId;
	}		
	
	function initiate(Type,inputDataType,item,dataInputGridFields,dataInputGridColumns,defaultData,fields,arrayOFcolumns,factors){
		 var jsonObject= null;
		 $("#delete" + Type).jqxButton({  theme:'dark', width: 90, height: 30,template: "danger" });
		 $("#cancel" + Type).jqxButton({ theme: 'dark',height:30,width:74 });
		 $("#load" + Type).jqxButton({ theme: 'dark',height:30,width:74 }); 
		 $("#cancel" + Type).click(function () {
            	  inputDataType.value="";
            	  $("#dataformInput" + Type).css("display","block");
				  $("#dataInputButtons" + Type).css("display","none"); 
				  $("#dataInputGrid" + Type).css("display","none"); 
				  (skewsValue==1)?$("#usd-flag").removeClass("m-auto").addClass("mt-auto"):null;
            
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
			  	
			  var localdata = [];
			  var dataIput =$('#data-input-'+Type).val()
			  var dataInputRows = dataIput.split(/\r?\n/);
			  
				for (var i = 0; i < dataInputRows.length && i < factors.length; i++) {
				    if (dataInputRows[i] !== "") {
				        var rowData = dataInputRows[i].split(/\r?\t/);
				        
				        localdata.push({
				            "factor": factors[i],
				            "DP15": rowData[0],
				            "DP25": rowData[1],
				            "ATM": rowData[2],
				            "DC25": rowData[3],
				            "DC15": rowData[4]
				        });
				    }
				}
			  
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
		const SkewsAuditTables=(skewsValue==1)?LongSkewsAuditTables:ShortSkewsAuditTables;		
		SkewsAuditTables.forEach((table, i) => {
			 auditGridSource[i] =
				{    
				localdata: defaultData,
				datatype: "json",
				datafields: table.fields,
				url:''
				};
			 auditDataAdapter[i] = new $.jqx.dataAdapter(auditGridSource[i]);
			 var totalFields =  table.fields.length;
             var widthPercentage = (100-10) / totalFields;
             var arrayOFcolumns= [ 
	                	   { text: '',editable:false, datafield: 'Edit',width:'10%',cellsrenderer: function (row) {
		                	return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event ,  "+ table.groupId + ")' id=\"edit"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons"+row+"\" style=\"display:none\"><input  onclick='Update(" + row + ", event, "+ table.groupId + ")' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ","+ table.groupId + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
		                   }
		                  },
		                  { text: '',editable:false,  datafield: 'factor', width: widthPercentage + '%'},
		                  { text: '15%d P', datafield: 'dp15', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		                  { text: '25%d P', datafield: 'dp25', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		                  { text: 'ATM', datafield: 'atm', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
						  { text: '25%d C', datafield: 'dc25', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		                  { text: '15%d C', datafield: 'dc15', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		                  { text: '15%d PUT vs ATM',editable:false, datafield: 'dp15_ATM', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		                  { text: '25%d PUT vs ATM',editable:false, datafield: 'dp25_ATM', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		                  { text: '25%d CALL vs ATM',editable:false, datafield: 'dc25_ATM', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
						  { text: '15%d CALL vs ATM',editable:false, datafield: 'dc15_ATM', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		                  { text: '50% COMBO',editable:false, datafield: 'dp25_DC25', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		                  { text: '30% COMBO',editable:false, datafield: 'dp15_DC15', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		                  
						];
			$('#'+table.auditTableName).jqxGrid(
			{
				width: '100%',
				source: auditDataAdapter[i],  
				theme:'dark',
				autoheight: true,
				editable: true,
				selectionmode: 'none',
				editmode: 'selectedrow',
				columns: arrayOFcolumns
			});
			
		});
		
        $("#delete" + Type).click(function () {
			if(skewsValue==1)
			   value="Long Skews";
			else if(skewsValue==2)
			   value="Short Skews"; 
			   
				$('#alertDeleteDataByDate-modal').modal('show'); 
		   		 date=$.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
				$( "#alertTextDeleteDataByDate" ).empty();
		 		$( "#alertTextDeleteDataByDate" ).append( "<p> Are you sure you want to Delete all "+value+" record for the date '"+date+"'?</p>" );
			});
      $("#load" + Type).click(function () {
            	var date = new Date();
            	var dataToBeInserted = [];
				var groupId=null;
				
            	var rows =  $("#dataInputGrid" + Type).jqxGrid('getrows');
				var rows = $("#dataInputGrid" + Type).jqxGrid('getrows');
				
				for (var i = 0; i < rows.length; i++) {
				   
				        for (var k = 0; k < dataInputGridFields.length; k++) {
				           var propertyName = dataInputGridFields[k].name;
				               propertyName=='factor'?null:
				               dataToBeInserted.push({
		            			   "subgroupId":getSubgroupIdByName(propertyName),
		            			   "factorId":getFactorIdByName(rows[i].factor).factor,
		            			   "groupId":getFactorIdByName(rows[i].factor).groupId,
		            			   "value":rows[i][propertyName],
		            			   "referDate": $.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
		            			});
				      }
				  }
				
            	 if(skewsValue==1)
				  {groupId=25;
				   }else  if(skewsValue==2)
				   { 
				    groupId=30;}
				
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
						        url: "/process/isrobottriggered/6/"+groupId,
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
													
						    	    	        
												 getFilterData(skewsValue);
						    	    		if(skewsValue==1)
				                            	 inputDataLongSkews.value="";
				                             else if(skewsValue==2)
				                              	inputDataShortSkews.value="";
				                              	
						  		            	  $("#dataformInput" + Type).css("display","block");
						  						  $("#dataInputButtons" + Type).css("display","none"); 
						  						  $("#dataInputGrid" + Type).css("display","none");
            
						  						$('#dateInputAudit').jqxDateTimeInput('setDate', $("#dateInput").jqxDateTimeInput('getDate'));
						    	        	    date=$.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'),  'dd-MM-yyyy')
						    	        	    
						    				    filterDate=date;
						    				     const SkewsAuditTables=(skewsValue==1)?LongSkewsAuditTables:ShortSkewsAuditTables;
								 					SkewsAuditTables.forEach((table, i) => {
																			 delete auditGridSource[i].localdata;   
													    				     auditGridSource[i].url=table.auditUrl+date;
													    					 auditDataAdapter[i] = new $.jqx.dataAdapter(auditGridSource[i]);
													    					 $('#'+table.auditTableName).jqxGrid({source:auditDataAdapter[i]});
																		 });
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
             
              getAuditGridSource(skewsValue);
	}
	
	function getSubgroupIdByName(name) {
    const matchingObject = nameSubgroupId.find(item => item.name === name);
    return matchingObject ? matchingObject.subgroupId : null;
}
function getfactorIdByDescription(name) {
    const matchingObject = factorId_description.find(item => item.name === name);
    return matchingObject ? matchingObject.factorId : null;
}
function getFactorIdByName(name) {
    const matchingObject = nameFactorId.find(item => item.name === name);
    return matchingObject ? matchingObject : null;
}