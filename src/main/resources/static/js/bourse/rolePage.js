var source;
var selectedRow=this;
var privilegesource;
var activeRole;
  $(window).on('load', function(){
     $('#overlay').fadeOut();
  });

  $(document).ready(function () {
	  $('#container-wrapper').show();
	  $("#jqxNotification").jqxNotification({  height: 38, width: "100%",appendContainer: "#notifcationContainer",  opacity: 0.9,
           animationOpenDelay: 800, autoClose:true , autoCloseDelay: 3000,  template: 'info'
      }); 
 	$("#jqxNotificationSave").jqxNotification({  height: 38, width: "100%",appendContainer: "#notifcationContainerSave",  opacity: 0.9,
           animationOpenDelay: 800, autoClose:true , autoCloseDelay: 3000,  template: 'info'
      }); 
	  $("#viewall").jqxButton({  theme:'dark', width: 110, height: 35,template: "primary" });
	  $("#viewall").css("display","block");
	  $("#viewall").click(function () {
			popupWindow('/bourse/allnews', 'Liberty Options - View All News', window, 1300, 600);
		  });
	 
  	 $("#popupWindow").jqxWindow({
          width: '30%',    height: '30%',  resizable: false,  theme: 'dark' , isModal: true, autoOpen: false, cancelButton: $("#cancel-btn"), modalOpacity: 0.01           
      });
	$("#cancel-btn").jqxButton({ theme: 'dark',height:38,width:85 });
    $("#addRole").click(function () {
		  var offset = $("#addRole").offset();
		  $("#popupWindow").jqxWindow({ position: { x: parseInt(offset.left) , y: parseInt(offset.top)+35 } });
		  $("#popupWindow").jqxWindow('open');
	 });
    $("#createRole").click(function () {
		if($("#roleName").val()==''){
			$("#notificationContentSave").html('Role Name is required');
			$("#jqxNotificationSave").jqxNotification({template: 'error'});
			$("#jqxNotificationSave").jqxNotification("open");
			return;
		}
		var roleName= "ROLE_"+$("#roleName").val()
	    var dataParam = {"roleName":roleName.toUpperCase()};

		 $.ajax({
  	    	        type: "POST",
  	    	        contentType: "application/json",
  	    	        url: "/createrole",
  	    	        data: JSON.stringify(dataParam),
  	    	        dataType: 'json',
  	    	        async:true,
  	    	        cache: false,
  	    	        timeout: 600000,
  	    	        success: function (data) {
  	    	            var menuBody="<button class='nav-link' id='"+'role_'+data.id+"' data-toggle='pill' data-target='#v-pills-home' type='button' role='tab' aria-controls='v-pills-home' aria-selected='true' onclick='getRolePrivilege("+data.id+")'>"+data.name+"</button>";
						$( "#roleMenu" ).append( menuBody );
				
  	    	           $("#notificationContentSave").html('Role has been created');
						$("#jqxNotificationSave").jqxNotification({template: 'info'});
  	                   $("#jqxNotificationSave").jqxNotification("open");
  	                
  	    	        
  	 			  },
  	    	        error: function (e) {
 						$("#notificationContentSave").html(e.responseJSON.message);
						$("#jqxNotificationSave").jqxNotification({template: 'error'});
  	                    $("#jqxNotificationSave").jqxNotification("open");
  						  console.log("ERROR : ", e);
  	    	        }
  	    	    });
	});
	
 		$("#roleTabs").jqxButtonGroup({ theme:'dark', mode: 'radio' });
		$('#roleTabs').jqxButtonGroup('setSelection', 0);
	
       
				$.get( "/getroles", function( data ) {
					   var menuBody;
		              for (let i = 0; i < data.length; i++) {
						  menuBody="";
				          if(i==0)
							{
								menuBody="<button class='nav-link active' id='"+'role_'+data[i].id+"' data-toggle='pill' data-target='#v-pills-home' type='button' role='tab' aria-controls='v-pills-home' aria-selected='true' onclick='getRolePrivilege("+data[i].id+")'>"+data[i].name+"</button>";
							   activeRole=data[i].id;
							}
							else 
							menuBody="<button class='nav-link' id='"+'role_'+data[i].id+"' data-toggle='pill' data-target='#v-pills-home' type='button' role='tab' aria-controls='v-pills-home' aria-selected='true' onclick='getRolePrivilege("+data[i].id+")'>"+data[i].name+"</button>";
							
					  	$( "#roleMenu" ).append( menuBody );
						}
						var cellsrenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
				var dataRecord = $("#grid").jqxGrid('getrowdata', row).role;
				if (dataRecord == null)
                var newHTML = defaulthtml + "Please Select<div class='jqx-icon-arrow-down jqx-icon-arrow-down-dark jqx-icon jqx-icon-dark' style='width: 16px; height: 16px;     position: absolute;right: 0;'></div>";
                else 
				var newHTML = defaulthtml + "<div class='jqx-icon-arrow-down jqx-icon-arrow-down-dark jqx-icon jqx-icon-dark' style='width: 16px; height: 16px;     position: absolute;right: 0;'></div>";
                
				return newHTML;
            };
	    // prepare the data
                privilegesource =
                {
                    datatype: "json",
                    datafields: [
                        { name: 'id' },
                        { name: 'parentId' },
                        { name: 'name' },
                        { name: 'checked' }
                    ],
                    id: 'id',
                    url: '/getprivilegebyrole/'+jQuery('#roleMenu').find('button.active').attr('id').split("_")[1],
   					async: false
                };
                var dataAdapter = new $.jqx.dataAdapter(privilegesource);
                dataAdapter.dataBind();
               
                var records = dataAdapter.getRecordsHierarchy('id', 'parentId', 'items', [{ name: 'name', map: 'label'}]);
                $('#privilegeTree').jqxTree({ source: records, width: '100%', theme:'dark', checkboxes: true});
                // prepare the data
 				$('#privilegeTree').jqxTree('expandAll');
				$('#privilegeTree').jqxTree({  disabled:true});
				$('#privilegeTree').prepend( "<label class='title-style ml-2'>Privileges</label>" );
				
				 var roleSource =
			      {
			          datatype: "json",
			          datafields: [
			              { name: 'id' },
			              { name: 'name' }
			          ],
					localData:data
			         // url: '/getroles',
			      };
				  var roleAdataAdapter = new $.jqx.dataAdapter(roleSource, {
			                autoBind: true
			            });
				  var source =
			            {
					      datatype: "json",
				          datafields: [
					 	  	  { name: 'id', type: 'string' },  
				        	  { name: 'title', type: 'string' },  
				        	  { name: 'firstName', type: 'string' },  
							  { name: 'surName', type: 'string' }, 
							  { name: 'email', type: 'string' },  
							  { name: 'status', type: 'string' }, 
							  { name: 'role',  type: 'string' }  ,
							  { name: 'roleId', value: 'role', values: { source: roleAdataAdapter.records, value: 'id', name: 'name' } },
				   	       ],
				          async: true,
				          url: '/getusersroles'
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
			 				showfilterrow: true,
							filterable: true,
							rowsheight: 45,
							editmode: 'selectedrow',
							columns:[
			                      { text: 'Title', datafield: 'title', width: '11%', editable:false},
			                      { text: 'First Name', datafield: 'firstName', width: '18%', editable:false },
			                      { text: 'Last Name', datafield: 'surName', width: '18%', editable:false  },
			 					  { text: 'Email', datafield: 'email' ,width: '18%', editable:false  },
								  { text: 'Role', datafield: 'roleId', displayfield: 'role', width: '20%', columntype: 'dropdownlist', cellsrenderer: cellsrenderer,
			                        createeditor: function (row, column, editor) {
			                            editor.jqxDropDownList({ autoDropDownHeight: true, source: roleAdataAdapter, displayMember: "name",valueMember: "id" });
			                        },
			                        cellvaluechanging: function (row, column, columntype, oldvalue, newvalue) {
			                            // return the old value, if the new value is empty.
			                            if (newvalue == "") return oldvalue;
			                        }
			                    },
								{text: '', width: '15%' , datafield: 'Save',filterable:false, editable:false , cellsrenderer: function (row) {
				                  	 return "<input class=\"edit-style\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons"+row+"\" style=\"display:none\"><input  onclick='UpdateUserRole("+row+")' class=\"save-style\" type=\"button\" id=\"update\" value=\"Save\" /><input  onclick='Cancel(" + row + ", event)' class=\"cancel-style\" type=\"button\" id=\"cancel\" value=\"Cancel\" /></div>";
           		    
				               	}
								}
			                  ]
			            });

				});
  });
$('#roleTabs').on('buttonclick', function () { 
	  value= $('#roleTabs').jqxButtonGroup('getSelection');
	  if (value==1)
		{
			$("#privilege-container").addClass("d-none");
			$("#grid-container").removeClass("d-none");
		}
		else
			{
			$("#privilege-container").removeClass("d-none");
			$("#grid-container").addClass("d-none");
			}
}); 

function getRolePrivilege(roleId)
{   activeRole=roleId;
	privilegesource.url='/getprivilegebyrole/'+roleId;
       var dataAdapter = new $.jqx.dataAdapter(privilegesource);
          dataAdapter.dataBind();
          var records = dataAdapter.getRecordsHierarchy('id', 'parentId', 'items', [{ name: 'name', map: 'label'}]);
                $('#privilegeTree').jqxTree({ source: records});
				$('#privilegeTree').prepend( "<label class='title-style ml-2'>Privileges</label>" );
}

function editPrivilege()
{
	var action=$('#editUpdate').val();
	if(action=='EDIT')
	  {
		$('#privilegeTree').jqxTree({  disabled:false});
		$('#editUpdate').val('UPDATE');
		$('#editUpdate').addClass('update-btn');
		$('#editUpdate').removeClass('edit-btn');
		$('#cancel').removeClass('d-none');
		$( "#roleMenu > button" ).prop( "disabled", true );

	  }
	else 
	{		var items = $('#privilegeTree').jqxTree('getItems');
			
			var selectedItems=[];	
			for (var key in items) {
			  if(items[key].checked)
				{
					selectedItems.push(items[key].id);
					 var selectedItemParentId=0;
					 var selectedParentId=$('#privilegeTree').jqxTree('getItem',  $('#'+key)[0]);
						if(selectedParentId!=null)
						{selectedItemParentId = selectedParentId.parentId;
						  if (selectedItemParentId!=0)					     
						   selectedItems.push(selectedItemParentId);
						 }
					while (selectedItemParentId!=0 && selectedParentId!=null)
					{
						selectedItemParentId = $('#privilegeTree').jqxTree('getItem',  $('#'+selectedItemParentId)[0]).parentId;
				       if (selectedItemParentId!=0)
						selectedItems.push(selectedItemParentId);
					} 
				 }
			}	
			var removedDuplicatedIds = selectedItems.filter((element, index) => {
				    return selectedItems.indexOf(element) === index;
				});
            var dataParam={roleId: activeRole,
							privilegeId:removedDuplicatedIds
							}
			 $.ajax({
  	    	        type: "POST",
  	    	        contentType: "application/json",
  	    	        url: "/updateroleprivilege",
  	    	        data: JSON.stringify(dataParam),
  	    	        dataType: 'json',
  	    	        async:true,
  	    	        cache: false,
  	    	        timeout: 600000,
  	    	        success: function (data) {
  	    	         
  	    	           $("#notificationContent").html('Data has been updated');
  	                   $("#jqxNotification").jqxNotification("open");
  	                
  	    	        
  	 			  },
  	    	        error: function (e) {
  	    	        	
  						  console.log("ERROR : ", e);
  	
  	    	        }
  	    	    });

			$('#privilegeTree').jqxTree({  disabled:true});
			$('#editUpdate').val('EDIT');
			$('#editUpdate').removeClass('update-btn');
			$('#editUpdate').addClass('edit-btn');
			$('#cancel').addClass('d-none');
			$( "#roleMenu > button" ).prop( "disabled", false );
	}


}
function cancel(){
			$('#privilegeTree').jqxTree({  disabled:true});
			$('#editUpdate').val('EDIT');
			$('#editUpdate').removeClass('update-btn');
			$('#editUpdate').addClass('edit-btn');
			$('#cancel').addClass('d-none');
			$( "#roleMenu > button" ).prop( "disabled", false );
}
function Edit(row, event) {
	     isedit=true;
	     selectedRow.editrow = row;
	   
		    	$("#grid").jqxGrid('beginrowedit', row);
		    	$("#edit"+row).css("display","none");
				$("#actionButtons"+row).css("display","contents"); 
		    	if (event) {
		    		if (event.preventDefault) {
		    			event.preventDefault();
		    		}
		    	} 
    }
 function Cancel(row, event) {
				  isedit=false;
				  isupdate=false;
				   selectedRow.editrow = row;
			    	$("#grid").jqxGrid('endrowedit', row, true);
			 }
function UpdateUserRole(row)
{
	 $("#grid").jqxGrid('endrowedit', row);
	   var updatedData = $("#grid").jqxGrid('getrowdata', row);
	   var dataParam = {userId:updatedData.id,
						roleName:updatedData.role}
						
	  $.ajax({
  	    	        type: "POST",
  	    	        contentType: "application/json",
  	    	        url: "/updateuserrole",
  	    	        data: JSON.stringify(dataParam),
  	    	        dataType: 'json',
  	    	        async:true,
  	    	        cache: false,
  	    	        timeout: 600000,
  	    	        success: function (data) {
  	    	         
  	    	           $("#notificationContent").html('Data has been updated');
  	                   $("#jqxNotification").jqxNotification("open");
  	                
  	    	        
  	 			  },
  	    	        error: function (e) {
  	    	        	
  						  console.log("ERROR : ", e);
  	
  	    	        }
  	    	    });
}