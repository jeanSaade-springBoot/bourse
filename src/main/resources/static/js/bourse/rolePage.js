var source;

  $(window).on('load', function(){
     $('#overlay').fadeOut();
  });

  $(document).ready(function () {
	  $('#container-wrapper').show();
	  $("#jqxNotification").jqxNotification({  height: 38, width: "100%",appendContainer: "#notifcationContainer",  opacity: 0.9,
           animationOpenDelay: 800, autoClose:true , autoCloseDelay: 2000,  template: 'info'
      }); 
	  $("#viewall").jqxButton({  theme:'dark', width: 110, height: 35,template: "primary" });
	  $("#viewall").css("display","block");
	  $("#viewall").click(function () {
			popupWindow('/bourse/allnews', 'Liberty Options - View All News', window, 1300, 600);
		  });

 		$("#userTabs").jqxButtonGroup({ theme:'dark', mode: 'radio' });
		$('#userTabs').jqxButtonGroup('setSelection', 0);
	
    source =
            {
		      datatype: "json",
	          datafields: [
		 	  	  { name: 'id', type: 'string' },  
	        	  { name: 'page', type: 'string' },  
	        	  { name: 'ROLE_SUPER_ADMIN', type: 'bool' },  
				  { name: 'ROLE_ADMIN', type: 'bool' },  
	        	  { name: 'ROLE_USER', type: 'bool' }  
	   	       ],
	          async: true,
	         // url: ''
localData:[{"page":"home",
"ROLE_SUPER_ADMIN":true,
"ROLE_ADMIN":false,
"ROLE_USER":false,
},{"page":"sovereignyields",
"ROLE_SUPER_ADMIN":false,
"ROLE_ADMIN":false,
"ROLE_USER":false,
},{"page":"any2",
"ROLE_SUPER_ADMIN":false,
"ROLE_ADMIN":false,
"ROLE_USER":false,
},{"page":"sovereignyieldsgraph",
"ROLE_SUPER_ADMIN":false,
"ROLE_ADMIN":false,
"ROLE_USER":false,
},{"page":"sovereigncurvesgraph",
"ROLE_SUPER_ADMIN":false,
"ROLE_ADMIN":false,
"ROLE_USER":false,
},]
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
 			
            $("#grid").jqxGrid(
            {
                width: '100%',
                source: dataAdapter,
 				theme:'dark',
                rowdetails: true,
			    pageable: true,
                selectionmode: 'none',
                editable: true,
				rowsheight: 45,
				columns:[
                      { text: 'Page', datafield: 'page', width: '40%', editable:false},
					  { text: 'ROLE_SUPER_ADMIN', columntype: 'checkbox', datafield: 'ROLE_SUPER_ADMIN', width: '20%' },
					  { text: 'ROLE_ADMIN', columntype: 'checkbox', datafield: 'ROLE_ADMIN', width: '20%' },
					  { text: 'ROLE_USER', columntype: 'checkbox', datafield: 'ROLE_USER', width: '20%' },
			                     
                  ]
            });

  });

$('#userTabs').on('buttonclick', function () { 
	   value=getSelectedValue($('#userTabs').jqxButtonGroup('getSelection'));
	   source.url='/admin/getuserbystatus/'+value[0];
       var dataAdapter = new $.jqx.dataAdapter(source);
       $('#grid').jqxGrid({source:dataAdapter, columns: value[1]});
}); 

function getSelectedValue(value)
{
	switch(value){
	case 0:
		return ["PENDING_APPROVAL", pendingApprovalColumns]
	case 1:
		return ["DECLINED", declinedColumns]
	case 2: 
		return ["ACTIVE", activeColumns]
	case 3:
		return ["DISABLED", disabledColumns]
		}
}
function getStatus(value)
{
	switch(value){
	case 0:
		return "ACTIVE"
	case 1:
		return "DECLINED"
	case 2: 
		return "DISABLED"
		}
}

function UpdateUserData(row,userStatus,updateGrid) {
	
	   $("#grid").jqxGrid('endrowedit', row);
	   var updatedData = $("#grid").jqxGrid('getrowdata', row);
	   if(userStatus!=1 && updatedData.mdDescription==null)
			 $('#alertMembership-modal').modal('show'); 
		else{
			var dataParam = {
			userId: updatedData.id,
			status: getStatus(userStatus),
			membershipDurationId:updatedData.mdId
		};
		 $.ajax({
  	    	        type: "POST",
  	    	        contentType: "application/json",
  	    	        url: "/admin/updateuserstatusandmembership",
  	    	        data: JSON.stringify(dataParam),
  	    	        dataType: 'json',
  	    	        async:true,
  	    	        cache: false,
  	    	        timeout: 600000,
  	    	        success: function (data) {
  	    	           if(updateGrid)
					   $("#grid").jqxGrid('deleterow', updatedData.uid);
					
  	    	           $("#notificationContent").html('Data has been updated');
  	                   $("#jqxNotification").jqxNotification("open");
  	                
  	    	        
  	 			  },
  	    	        error: function (e) {
  	    	        	
  						  console.log("ERROR : ", e);
  	
  	    	        }
  	    	    });
		}
    }