var groupItem;
const assetId = $("#assetId")[0].innerText;
const idToDatabaseIdMap = {};
if (assetId==8)
	 var allitems= [ 
		'#jqxCheckBox-37-1-14',
		'#jqxCheckBox-37-1-15',
		'#jqxCheckBox-37-1-16',
		'#jqxCheckBox-37-2-14',
		'#jqxCheckBox-37-2-15',
		'#jqxCheckBox-37-2-16',
		'#jqxCheckBox-38-1-14',
		'#jqxCheckBox-38-1-15',
		'#jqxCheckBox-38-1-16',
		'#jqxCheckBox-38-2-14',
		'#jqxCheckBox-38-2-15',
		'#jqxCheckBox-38-2-16',
		'#jqxCheckBox-39-1-14',
		'#jqxCheckBox-39-1-15',
		'#jqxCheckBox-39-1-16',
		'#jqxCheckBox-39-2-14',
		'#jqxCheckBox-39-2-15',
		'#jqxCheckBox-39-2-16',
		'#jqxCheckBox-40-1-14',
		'#jqxCheckBox-40-1-15',
		'#jqxCheckBox-40-1-16',
		'#jqxCheckBox-40-2-14',
		'#jqxCheckBox-40-2-15',
		'#jqxCheckBox-40-2-16',
		'#jqxCheckBox-41-1-14',
		'#jqxCheckBox-41-1-15',
		'#jqxCheckBox-41-1-16',
		'#jqxCheckBox-41-2-14',
		'#jqxCheckBox-41-2-15',
		'#jqxCheckBox-41-2-16',
		'#jqxCheckBox-42-1-14',
		'#jqxCheckBox-42-1-15',
		'#jqxCheckBox-42-1-16',
		'#jqxCheckBox-42-2-14',
		'#jqxCheckBox-42-2-15',
		'#jqxCheckBox-42-2-16',
		'#jqxCheckBox-44-1-14',
		'#jqxCheckBox-44-1-15',
		'#jqxCheckBox-44-1-16',
		'#jqxCheckBox-44-2-14',
		'#jqxCheckBox-44-2-15',
		'#jqxCheckBox-44-2-16',
		'#jqxCheckBox-45-1-14',
		'#jqxCheckBox-45-1-15',
		'#jqxCheckBox-45-1-16',
		'#jqxCheckBox-45-2-14',
		'#jqxCheckBox-45-2-15',
		'#jqxCheckBox-45-2-16',
		'#jqxCheckBox-46-1-14',
		'#jqxCheckBox-46-1-15',
		'#jqxCheckBox-46-1-16',
		'#jqxCheckBox-46-2-14',
		'#jqxCheckBox-46-2-15',
		'#jqxCheckBox-46-2-16',
		'#jqxCheckBox-47-1-14',
		'#jqxCheckBox-47-1-15',
		'#jqxCheckBox-47-1-16',
		'#jqxCheckBox-47-2-14',
		'#jqxCheckBox-47-2-15',
		'#jqxCheckBox-47-2-16',
		'#jqxCheckBox-37-3-14',
		'#jqxCheckBox-37-3-15',
		'#jqxCheckBox-37-3-16',
		'#jqxCheckBox-38-3-14',
		'#jqxCheckBox-38-3-15',
		'#jqxCheckBox-38-3-16',
		'#jqxCheckBox-39-3-14',
		'#jqxCheckBox-39-3-15',
		'#jqxCheckBox-39-3-16',
		'#jqxCheckBox-40-3-14',
		'#jqxCheckBox-40-3-15',
		'#jqxCheckBox-40-3-16',
		'#jqxCheckBox-41-3-14',
		'#jqxCheckBox-41-3-15',
		'#jqxCheckBox-41-3-16',
		'#jqxCheckBox-42-3-14',
		'#jqxCheckBox-42-3-15',
		'#jqxCheckBox-42-3-16',
		'#jqxCheckBox-44-3-14',
		'#jqxCheckBox-44-3-15',
		'#jqxCheckBox-44-3-16',
		'#jqxCheckBox-45-3-14',
		'#jqxCheckBox-45-3-15',
		'#jqxCheckBox-45-3-16',
		'#jqxCheckBox-46-3-14',
		'#jqxCheckBox-46-3-15',
		'#jqxCheckBox-46-3-16',
		'#jqxCheckBox-47-3-14',
		'#jqxCheckBox-47-3-15',
		'#jqxCheckBox-47-3-16',
		'#jqxCheckBox-37-4-14',
		'#jqxCheckBox-37-4-15',
		'#jqxCheckBox-37-4-16',
		'#jqxCheckBox-38-4-14',
		'#jqxCheckBox-38-4-15',
		'#jqxCheckBox-38-4-16',
		'#jqxCheckBox-39-4-14',
		'#jqxCheckBox-39-4-15',
		'#jqxCheckBox-39-4-16',
		'#jqxCheckBox-40-4-14',
		'#jqxCheckBox-40-4-15',
		'#jqxCheckBox-40-4-16',
		'#jqxCheckBox-41-4-14',
		'#jqxCheckBox-41-4-15',
		'#jqxCheckBox-41-4-16',
		'#jqxCheckBox-42-4-14',
		'#jqxCheckBox-42-4-15',
		'#jqxCheckBox-42-4-16',
		'#jqxCheckBox-44-4-14',
		'#jqxCheckBox-44-4-15',
		'#jqxCheckBox-44-4-16',
		'#jqxCheckBox-45-4-14',
		'#jqxCheckBox-45-4-15',
		'#jqxCheckBox-45-4-16',
		'#jqxCheckBox-46-4-14',
		'#jqxCheckBox-46-4-15',
		'#jqxCheckBox-46-4-16',
		'#jqxCheckBox-47-4-14',
		'#jqxCheckBox-47-4-15',
		'#jqxCheckBox-47-4-16',
		];	
else if (assetId==10)
	 var allitems= [
		'#jqxCheckBox-52-2',
		'#jqxCheckBox-52-3',
		'#jqxCheckBox-52-4',
		'#jqxCheckBox-52-5',
		'#jqxCheckBox-52-6',
		'#jqxCheckBox-56-2',
		'#jqxCheckBox-56-3',
		'#jqxCheckBox-56-4',
		'#jqxCheckBox-56-5',
		'#jqxCheckBox-56-6',
		'#jqxCheckBox-58-2',
		'#jqxCheckBox-58-3',
		'#jqxCheckBox-58-4',
		'#jqxCheckBox-58-5',
		'#jqxCheckBox-58-6',
		'#jqxCheckBox-59-2',
		'#jqxCheckBox-59-3',
		'#jqxCheckBox-59-4',
		'#jqxCheckBox-59-5',
		'#jqxCheckBox-59-6'];
		
	var mainContainer='';
	var mainGroupContainer='';
	var groupContainer='';
	var subgroupContainer='';
	var factorIner='';
	var factorInerItem='';
	var factorContainer='';

$(document).ready(function () {
	
	  $('#container-wrapper').show();
	  $('#content').show();
 	  $("#viewall").jqxButton({  theme:'dark', width: 110, height: 35,template: "primary" });
	  $("#viewall").css("display","block");
	  $("#viewall").click(function () {
			popupWindow('/bourse/allnews', 'Libvol - View All News', window, 1300, 600);
		  });
	  $("#jqxNotification").jqxNotification({  height: 45, width: "65%",appendContainer: "#notifcationContainer",  opacity: 0.9,
           animationOpenDelay: 800, autoClose:true , autoCloseDelay: 1000,  template: 'success'
      });
	  if (assetId==8)
			  $.ajax({
			        contentType: "application/json",
			        url: "/macro/get-macro-display-settings",
			        dataType: 'json',
			        async:true,
			        cache: false,
			        timeout: 600000,
			        success: function (data) {
			        	var groupedData = groupByGroupIdAndSubgroupId(data);
		                 mainContainer+='<div class="col-10 mt-4">'
					                 +'<div class="col-12 d-flex">'
						                 +'<div class="col-2"></div>'
						                 +'<div class="col-10">'
												+'<div class="col-12 d-flex"><div class="align-middle fw-bold">MANUF PMI I</div><div class="align-middle fw-bold">SERVICES PMI I</div><div class="align-middle fw-bold">MANUF PMI II</div><div class="align-middle fw-bold">SERVICES PMI II</div></div>'
												+'<div class="col-12 d-flex">'
													+'<div class="col-3 d-flex"><div class="align-middle">FCST</div><div class="align-middle">FLASH</div><div class="align-middle">FINAL</div></div>'
													+'<div class="col-3 d-flex"><div class="align-middle">FCST</div><div class="align-middle">FLASH</div><div class="align-middle">FINAL</div></div>'
													+'<div class="col-3 d-flex"><div class="align-middle">FCST</div><div class="align-middle">FLASH</div><div class="align-middle">FINAL</div></div>'
													+'<div class="col-3 d-flex"><div class="align-middle">FCST</div><div class="align-middle">FLASH</div><div class="align-middle">FINAL</div></div>'
												+'</div>'
											+'</div>'
									  +'</div>';
								
						// Iterate over each groupId
						Object.keys(groupedData).forEach(function (groupId, i) {
						   country=getCountryImagePath(groupId);
						    classStyle=(i%2!=0)?'row-style':'';
						     mainGroupContainer+='<div class="col-12 d-flex">';
						     groupContainer+='<div class="col-2 '+classStyle+'">'
									+'<div class=""><img src='+country[0]+' alt="country-flag" width="30" class="pr-1">'+country[1]+'</div>'
								+'</div>';
							 subgroupContainer+='<div class="col-10 '+classStyle+' align-items-center d-flex">';
							 	
						    // Iterate over each subgroupId within the current groupId
						    Object.keys(groupedData[groupId]).forEach(function (subgroupId) {
						     
						        // Iterate over each item within the current subgroupId
						       factorContainer='<div class="col-12  d-flex">'
						       factorIner+='<div class="col-3 d-flex">'
						        groupedData[groupId][subgroupId].forEach(function (item) {
						            checkBox="jqxCheckBox-"+item.groupId+'-'+item.subgroupId+'-'+item.factor;
				    	  	         factorName=((item.factor==14)?'FCST':(item.factor==15)?'FLASH':'FINAL')
						             factorInerItem+='<div class="align-middle">'
											+'<div id="'+checkBox+'" class="jqx-checkbox-items align-middle"></div>'
										+'</div>';
						        });
						       factorIner+=factorInerItem
						     		     +'</div>';
						     		     factorInerItem='';
						       factorContainer+=factorIner
						     		     +'</div>';  
						     		   
						    });
						    subgroupContainer+= factorContainer ;
						    subgroupContainer+= '</div>';    
						    
						    mainGroupContainer+=groupContainer+subgroupContainer;
						    mainGroupContainer+='</div>';
						    
						    groupContainer='';
						    subgroupContainer='';
						    factorContainer='';
						    factorIner='';
						     mainContainer+=mainGroupContainer;
						     mainGroupContainer='';
						});
						 mainContainer+='</div>';
						  $('#macroContainer').append(mainContainer); 
			        	for (j = 0; j < data.length; j++) {
							items="#jqxCheckBox-"+data[j].groupId+'-'+data[j].subgroupId+'-'+data[j].factor;
				    	  	$(items).jqxCheckBox({ theme: 'dark', width: '100%', height: 26, checked: data[j].isVisible, disabled: true });
						}	
					},
			        error: function (e) {
			        	
							  console.log("ERROR : ", e);
		
			        }
			    }); 
			    else if (assetId==10)
			  $.ajax({
			        contentType: "application/json",
			        url: "/longEnds/get-longends-display-settings",
			        dataType: 'json',
			        async:true,
			        cache: false,
			        timeout: 600000,
			        success: function (data) {
			        	var groupedData = groupByGroupIdAndSubgroupId(data);
		                 mainContainer+='<div class="col-10 mt-4">'
					                 +'<div class="col-12 d-flex">'
						                 +'<div class="col-3"></div>'
						                 +'<div class="col-9">'
												+'<div class="col-12 d-flex">'
													+'<div class="col d-flex">'+
														'<div class="align-middle">OPEN</div><div class="align-middle">SETTLE</div><div class="align-middle">CLOSE</div><div class="align-middle">HIGH</div><div class="align-middle">LOW</div>'
													+'</div>'
												+'</div>'
											+'</div>'
									  +'</div>';
								
						// Iterate over each groupId
						Object.keys(groupedData).forEach(function (groupId, i) {
						    classStyle=(i%2!=0)?'row-style':'';
						     mainGroupContainer+='<div class="col-12 d-flex">';
						     groupContainer+='<div class="col-3 '+classStyle+'">'
									+'<div class="">'+getNameByGroupId(groupId)+'</div>'
								+'</div>';
							 subgroupContainer+='<div class="col-9 '+classStyle+' align-items-center d-flex">';
							 	
						    // Iterate over each subgroupId within the current groupId
						    Object.keys(groupedData[groupId]).forEach(function (subgroupId) {
						     
						        // Iterate over each item within the current subgroupId
						       factorContainer='<div class="col-12  d-flex">'
						       factorIner+='<div class="col d-flex">'
						        groupedData[groupId][subgroupId].forEach(function (item) {
						             checkBox="jqxCheckBox-"+item.groupId+'-'+item.subgroupId;
						             factorInerItem+='<div class="align-middle">'
											+'<div id="'+checkBox+'" class="jqx-checkbox-items align-middle"></div>'
										+'</div>';
						        });
						       factorIner+=factorInerItem
						     		     +'</div>';
						     		     factorInerItem='';
						       factorContainer+=factorIner
						     		     +'</div>';  
						     		   
						    });
						    subgroupContainer+= factorContainer ;
						    subgroupContainer+= '</div>';    
						    
						    mainGroupContainer+=groupContainer+subgroupContainer;
						    mainGroupContainer+='</div>';
						    
						    groupContainer='';
						    subgroupContainer='';
						    factorContainer='';
						    factorIner='';
						     mainContainer+=mainGroupContainer;
						     mainGroupContainer='';
						});
						 mainContainer+='</div>';
						  $('#macroContainer').append(mainContainer); 
			        	for (j = 0; j < data.length; j++) {
							items="#jqxCheckBox-"+data[j].groupId+'-'+data[j].subgroupId;
							idToDatabaseIdMap[items] = data[j].id;
				    	  	$(items).jqxCheckBox({ theme: 'dark', width: '100%', height: 26, checked: data[j].isVisible, disabled: true });
						}	
					},
			        error: function (e) {
			        	
							  console.log("ERROR : ", e);
		
			        }
			    }); 
   });
   
   $(window).on('load', function(){
	  $('#overlay').fadeOut();
	  $('#nav-column-master').show();
  });
 function getNameByGroupId(groupId){
	 
  let name = '';

  switch (groupId) {
    case '52':
		name='BUNDS / BOBLS / SHATZ / BUXL'
		break;
    case '56':
     	name='OAT / BTP'
      break;
    case '58':
     	name='GILTS'
      break;
    case '59':
     	name='T-NOTES / T-BONDS'
      break;
    default:
    	name='';
      break;
  }

  return name;
}

 function groupByGroupIdAndSubgroupId(data) {
    var groupedData = {};

    // Iterate over each item in the data
    Object.keys(data).forEach(function (key) {
        var item = data[key];
        var groupId = item.groupId;
        var subgroupId = item.subgroupId;

        // If the groupId key doesn't exist in groupedData, create it
        if (!groupedData[groupId]) {
            groupedData[groupId] = {};
        }

        // If the subgroupId key doesn't exist in the groupId object, create it
        if (!groupedData[groupId][subgroupId]) {
            groupedData[groupId][subgroupId] = [];
        }

        // Add the item to the subgroupId array
        groupedData[groupId][subgroupId].push(item);
    });

    return groupedData;
}
function cancel(){
			enableDisableCheckboxes(true);
			$('#editUpdate').val('EDIT');
			$('#editUpdate').removeClass('update-btn');
			$('#editUpdate').addClass('edit-btn');
			$('#cancel').addClass('d-none');
}
function editPrivilege()
{
	var action=$('#editUpdate').val();
	if(action=='EDIT')
	  {
		  enableDisableCheckboxes(false);
		$('#editUpdate').val('UPDATE');
		$('#editUpdate').addClass('update-btn');
		$('#editUpdate').removeClass('edit-btn');
		$('#cancel').removeClass('d-none');

	  }
	else 
	{	
		if (assetId == 8) 
			updateUrl="/macro/save-macro-display-settings";
	    else 
	    if (assetId == 10) 
			updateUrl="/longEnds/save-longends-display-settings";
		var data=[];
		      for (i = 0; i < allitems.length; i++) {
		            
		            item=allitems[i].split("jqxCheckBox-")[1].split("-");
		            var my_json = { groupId: item[0], 
		            						subgroupId: item[1], 
		            						isVisible:$(allitems[i]).jqxCheckBox('checked'),
		            						};
		            
					if (assetId == 8) {
					    my_json.factor = item[2];
					    my_json.id = i+1;
					}else if(assetId == 10) {
					    my_json.parentgroupId = 0;
					    my_json.id= idToDatabaseIdMap[allitems[i]]
					}
 					data.push(my_json);
		        }

		$.ajax({
		type: "POST",
		contentType: "application/json;",
		url: updateUrl,
		data: JSON.stringify(data),
		dataType: 'json',
		timeout: 600000,
		success: function(response) {
			 $("#notificationContent").html('Data has been updated');
  	                   $("#jqxNotification").jqxNotification("open");
		},
		error: function(e) {

			console.log("ERROR : ", e);

		}
	});
		    

			enableDisableCheckboxes(true);
			$('#editUpdate').val('EDIT');
			$('#editUpdate').removeClass('update-btn');
			$('#editUpdate').addClass('edit-btn');
			$('#cancel').addClass('d-none');
	}

}
function enableDisableCheckboxes(value){
	  for (i = 0; i < allitems.length; i++) {
            $(allitems[i]).jqxCheckBox({ disabled: value });
        }
}
function toggleDivVisibility(assetId) {
		    
			location.href = "/bourse/displaysettings?assetId=" + assetId;
		}