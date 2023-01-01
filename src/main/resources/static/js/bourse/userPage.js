var source;
var MDdataAdapter;
var selectedRow=this;
var cellsrenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
				var dataRecord = $("#grid").jqxGrid('getrowdata', row).mdDescription;
				if (dataRecord == null)
                var newHTML = defaulthtml + "Please Select<div class='jqx-icon-arrow-down jqx-icon-arrow-down-dark jqx-icon jqx-icon-dark' style='width: 16px; height: 16px;     position: absolute;right: 0;'></div>";
                else 
				var newHTML = defaulthtml + "<div class='jqx-icon-arrow-down jqx-icon-arrow-down-dark jqx-icon jqx-icon-dark' style='width: 16px; height: 16px;     position: absolute;right: 0;'></div>";
                
				return newHTML;
            };
			var pendingApprovalColumns=[
                      { text: 'Title', datafield: 'title', width: '4%', editable:false},
                      { text: 'First Name', datafield: 'firstName', width: '6%', editable:false },
                      { text: 'Last Name', datafield: 'surName', width: '6%', editable:false  },
 					  { text: 'Company', datafield: 'company', width: '8%', editable:false  },
                      { text: 'Received on', datafield: 'createdOn',cellsformat: 'dd-MMM-yyyy hh:mm:ss',width: '12%', editable:false   },
 					  { text: 'Email', datafield: 'email' ,width: '16%', editable:false  },
					  { text: 'Phone', datafield: 'phone', width: '8%', editable:false  },
					  { text: 'Membership Duration', datafield: 'mdId', displayfield: 'mdDescription', width: '10%', columntype: 'dropdownlist', cellsrenderer: cellsrenderer,
                        createeditor: function (row, column, editor) {
                            editor.jqxDropDownList({ autoDropDownHeight: true, source: MDdataAdapter, displayMember: "description",valueMember: "id" });
                        },
                        cellvaluechanging: function (row, column, columntype, oldvalue, newvalue) {
                            // return the old value, if the new value is empty.
                            if (newvalue == "") return oldvalue;
                        }
                    },
                     {text: '', width: '10%' , datafield: 'EDIT',filterable:false, editable:false , cellsrenderer: function (row) {
						 return "<input class=\"edit-style\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons"+row+"\" style=\"display:none\"><input  onclick='UpdateUserData("+row+","+0+","+false+")' class=\"accept-style\" type=\"button\" id=\"update\" value=\"Save\" /><input  onclick='Cancel(" + row + ", event)' class=\"cancel-style\" type=\"button\" id=\"cancel\" value=\"cancel\" /></div>";
           		               
					}},
					{text: '', width: '10%' , datafield: 'Accept',filterable:false, editable:false , cellsrenderer: function (row) {
							                  return "<div class='accept-style' id='accept' onclick='UpdateUserData("+row+","+0+","+true+")'>Accept</div>";
							               }
					},
					{text: '', width: '10%' , datafield: 'Decline',filterable:false, editable:false , cellsrenderer: function (row) {
							                  return "<div class='decline-style' id='decline' onclick='UpdateUserData("+row+","+1+","+true+")'>Decline</div>";
							               }
					},
                  ];

var declinedColumns=[
                      { text: 'Title', datafield: 'title', width: '4%', editable:false},
                      { text: 'First Name', datafield: 'firstName', width: '8%', editable:false },
                      { text: 'Last Name', datafield: 'surName', width: '8%', editable:false  },
 					  { text: 'Company', datafield: 'company', width: '8%', editable:false  },
                      { text: 'Received on', datafield: 'createdOn',cellsformat: 'dd-MMM-yyyy hh:mm:ss',width: '16%', editable:false   },
 					  { text: 'Email', datafield: 'email' ,width: '16%', editable:false  },
					  { text: 'Phone', datafield: 'phone', width: '10%', editable:false  },
					  { text: 'Membership Duration', datafield: 'mdId', displayfield: 'mdDescription', width: '10%', columntype: 'dropdownlist', cellsrenderer: cellsrenderer,
                        createeditor: function (row, column, editor) {
                            editor.jqxDropDownList({ autoDropDownHeight: true, source: MDdataAdapter, displayMember: "description",valueMember: "id" });
                        },
                        cellvaluechanging: function (row, column, columntype, oldvalue, newvalue) {
                            // return the old value, if the new value is empty.
                            if (newvalue == "") return oldvalue;
                        }
                     },
 					{text: '', width: '10%' , datafield: 'EDIT',filterable:false, editable:false , cellsrenderer: function (row) {
						 return "<input class=\"edit-style\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons"+row+"\" style=\"display:none\"><input  onclick='UpdateUserData("+row+","+0+","+false+")' class=\"save-style\" type=\"button\" id=\"update\" value=\"Save\" /><input  onclick='Cancel(" + row + ", event)' class=\"cancel-style\" type=\"button\" id=\"cancel\" value=\"cancel\" /></div>";
           		               
					}},	
					{text: '', width: '10%' , datafield: 'Accept',filterable:false, editable:false , cellsrenderer: function (row) {
							                  return "<div class='accept-style' id='accept' onclick='UpdateUserData("+row+","+0+","+true+")'>Accept</div>";
							               }
					},
                  ];
var activeColumns=[
                      { text: 'Title', datafield: 'title', width: '4%', editable:false},
                      { text: 'First Name', datafield: 'firstName', width: '8%', editable:false },
                      { text: 'Last Name', datafield: 'surName', width: '8%', editable:false  },
 					  { text: 'Company', datafield: 'company', width: '12%', editable:false  },
                      { text: 'Received on', datafield: 'createdOn',cellsformat: 'dd-MMM-yyyy hh:mm:ss',width: '12%', editable:false   },
 					  { text: 'Email', datafield: 'email' ,width: '16%', editable:false  },
					  { text: 'Phone', datafield: 'phone', width: '10%', editable:false  },
					  { text: 'Membership Duration', datafield: 'mdId', displayfield: 'mdDescription', width: '10%', columntype: 'dropdownlist', cellsrenderer: cellsrenderer,
                        createeditor: function (row, column, editor) {
                            editor.jqxDropDownList({ autoDropDownHeight: true, source: MDdataAdapter, displayMember: "description",valueMember: "id" });
                        },
                        cellvaluechanging: function (row, column, columntype, oldvalue, newvalue) {
                            // return the old value, if the new value is empty.
                            if (newvalue == "") return oldvalue;
                        }
                    },
					{text: '', width: '10%' , datafield: 'edit',filterable:false, editable:false , cellsrenderer: function (row) {
						//if(hasUpdateUserAction)
						return "<input  class=\"edit-style\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons"+row+"\" style=\"display:none\"><input  onclick='UpdateUserData("+row+","+0+","+false+")' class=\"accept-style\" type=\"button\" id=\"update\" value=\"Save\" /><input  onclick='Cancel(" + row + ", event)' class=\"cancel-style\" type=\"button\" id=\"cancel\" value=\"cancel\" /></div>";
           		          
					}
					},
						{text: '', width: '10%' , datafield: 'Disabled',filterable:false, editable:false , cellsrenderer: function (row) {
						//if(hasDisableUserAction)							             
    					 return "<div class='decline-style' id='disable' style='margin-left: 0.5rem;' onclick='UpdateUserData("+row+","+2+","+true+")'>Disable</div>";
							               }
					},
                  ];
				var disabledColumns=[
                      { text: 'Title', datafield: 'title', width: '4%', editable:false},
                      { text: 'First Name', datafield: 'firstName', width: '8%', editable:false },
                      { text: 'Last Name', datafield: 'surName', width: '8%', editable:false  },
 					  { text: 'Company', datafield: 'company', width: '12%', editable:false  },
                      { text: 'Received on', datafield: 'createdOn',cellsformat: 'dd-MMM-yyyy hh:mm:ss',width: '12%', editable:false   },
 					  { text: 'Email', datafield: 'email' ,width: '16%', editable:false  },
					  { text: 'Phone', datafield: 'phone', width: '10%', editable:false  },
					  { text: 'Membership Duration', datafield: 'mdId', displayfield: 'mdDescription', width: '10%', columntype: 'dropdownlist', cellsrenderer: cellsrenderer,
                        createeditor: function (row, column, editor) {
                            editor.jqxDropDownList({ autoDropDownHeight: true, source: MDdataAdapter, displayMember: "description",valueMember: "id" });
                        },
                        cellvaluechanging: function (row, column, columntype, oldvalue, newvalue) {
                            // return the old value, if the new value is empty.
                            if (newvalue == "") return oldvalue;
                        }
                     },
 					{text: '', width: '10%' , datafield: 'EDIT',filterable:false, editable:false , cellsrenderer: function (row) {
						 return "<input class=\"edit-style\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons"+row+"\" style=\"display:none\"><input  onclick='UpdateUserData("+row+","+0+","+false+")' class=\"accept-style\" type=\"button\" id=\"update\" value=\"Save\" /><input  onclick='Cancel(" + row + ", event)' class=\"cancel-style\" type=\"button\" id=\"cancel\" value=\"cancel\" /></div>";
           		               
					}},	{text: '', width: '10%' , datafield: 'Accept',filterable:false, editable:false , cellsrenderer: function (row) {
							                  return "<div class='accept-style' id='enable' onclick='UpdateUserData("+row+","+0+","+true+")'>Enable</div>";
							               }
					},
                  ];

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
			popupWindow('/bourse/allnews', 'Libvol - View All News', window, 1300, 600);
		  });

 		$("#userTabs").jqxButtonGroup({ theme:'dark', mode: 'radio' });
		$('#userTabs').jqxButtonGroup('setSelection', 0);
	$.get( "/getmembershipduration", function( data ) {	
	  var MDSource =
      {
          datatype: "json",
          datafields: [
              { name: 'id' },
              { name: 'description' }
          ],
         // url: '/getmembershipduration',
		localData:data
      };
	  MDdataAdapter = new $.jqx.dataAdapter(MDSource);
	 
            var initrowdetails = function (index, parentElement, gridElement, datarecord) {
                var tabsdiv = null;
                var information = null;
                var notes = null;
                tabsdiv = $($(parentElement).children()[0]);
                if (tabsdiv != null) {
                    information = tabsdiv.find('.information');
                    notes = tabsdiv.find('.notes');
                    var title = tabsdiv.find('.title');
                    title.text(datarecord.firstname);
                    var container = $('<div style="margin: 5px;"></div>')
                    container.appendTo($(information));
                    var photocolumn = $('<div style="float: left; width: 15%;"></div>');
                    var leftcolumn = $('<div style="float: left; width: 45%;"></div>');
                    var rightcolumn = $('<div style="float: left; width: 40%;"></div>');
                    container.append(photocolumn);
                    container.append(leftcolumn);
                    container.append(rightcolumn);
                  
                    var title = "<div style='margin: 10px;'><b>Title:</b> " + datarecord.title + "</div>";
                    var firstname = "<div style='margin: 10px;'><b>First Name:</b> " + datarecord.firstName + "</div>";
                    var surname = "<div style='margin: 10px;'><b>Surname:</b> " + datarecord.surName + "</div>";
                    var address1 = "<div style='margin: 10px;'><b>Address 1:</b> " + datarecord.address1 + "</div>";
					var address2 = "<div style='margin: 10px;'><b>Address 2:</b> " + datarecord.address2 + "</div>";
                    var phone = "<div style='margin: 10px;'><b>Phone:</b> " + datarecord.phone + "</div>";
				    var mobile = "<div style='margin: 10px;'><b>Mobile:</b> " + datarecord.mobile + "</div>";
                    $(leftcolumn).append(title);
                    $(leftcolumn).append(firstname);
                    $(leftcolumn).append(surname);
 				    $(leftcolumn).append(phone);
				    $(leftcolumn).append(mobile);
                    $(leftcolumn).append(address1);
 				    $(leftcolumn).append(address2);

					var company = "<div style='margin: 10px;'><b>Company:</b> " + datarecord.company + "</div>";
                    var postalcode = "<div style='margin: 10px;'><b>Post Code:</b> " + datarecord.postalcode + "</div>";
                    var country = "<div style='margin: 10px;'><b>Country:</b> " + datarecord.country + "</div>";
                    var email = "<div style='margin: 10px;'><b>Email:</b> " + datarecord.email + "</div>";
					$(rightcolumn).append(company);	
                    $(rightcolumn).append(postalcode);
                    $(rightcolumn).append(country);
                    $(rightcolumn).append(email);
                  
                   // $(tabsdiv).jqxTabs({ width: 750, height: 170});
                }
            }

    source =
            {
		      datatype: "json",
	          datafields: [
		 	  	  { name: 'id', type: 'string' },  
	        	  { name: 'userName', type: 'string' },
	        	  { name: 'title', type: 'string' },  
	        	  { name: 'firstName', type: 'string' },  
				  { name: 'surName', type: 'string' },  
	        	  { name: 'phone', type: 'string' },  
	        	  { name: 'mobile', type: 'string' },  
	        	  { name: 'company', type: 'string' },  
	        	  { name: 'address1', type: 'string' }, 
				  { name: 'address2', type: 'string' }, 
				  { name: 'postCode', type: 'string' },  
				  { name: 'Country', type: 'string' },  
				  { name: 'email', type: 'string' },  
				  { name: 'status', type: 'string' }, 
				  { name: 'userId', type: 'string' },  
				  { name: 'createdOn', type: 'date' },
				  { name: 'mdDescription',  type: 'string' }  ,
				  { name: 'mdId', value: 'mdDescription', values: { source: MDdataAdapter, value: 'id', name: 'description' } },
	   	       ],
	          async: true,
	          url: '/getuserbystatus/'+getSelectedValue(jQuery('#userTabs').find('div.jqx-fill-state-pressed').attr('id'))[0]
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
 			
            $("#grid").jqxGrid(
            {
                width: '100%',
                source: dataAdapter,
 				theme:'dark',
                rowdetails: true,
			    pageable: true,
                rowdetailstemplate: { rowdetails: "<div style='margin: 10px;'><div class='information'></div></div>", rowdetailsheight: 220 },
                initrowdetails: initrowdetails,
 			    selectionmode: 'none',
 				editmode: 'selectedrow',
                editable: true,
 				showfilterrow: true,
				filterable: true,
				rowsheight: 45,
				columns:getSelectedValue(jQuery('#userTabs').find('div.jqx-fill-state-pressed').attr('id'))[1]
            });
		});
  });

$('#userTabs').on('buttonclick', function () { 
	   value=getSelectedValue(jQuery('#userTabs').find('div.jqx-fill-state-pressed').attr('id'));
	   source.url='/getuserbystatus/'+value[0];
       var dataAdapter = new $.jqx.dataAdapter(source);
       $('#grid').jqxGrid({source:dataAdapter, columns: value[1]});
}); 

function getSelectedValue(value)
{
	switch(value){
	case "PENDING_APPROVAL":
		return ["PENDING_APPROVAL", pendingApprovalColumns]
	case "DECLINED":
		return ["DECLINED", declinedColumns]
	case "ACTIVE": 
		return ["ACTIVE", activeColumns]
	case "DISABLED":
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
  	    	        url: "/updateuserstatusandmembership",
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
  	                   sendNotification();
  	    	        
  	 			  },
  	    	        error: function (e) {
  	    	        	
  						  console.log("ERROR : ", e);
  	
  	    	        }
  	    	    });
		}
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