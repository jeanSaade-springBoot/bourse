var allitems=['#jqxCheckBox-52-2',
			'#jqxCheckBox-52-3',
			'#jqxCheckBox-52-4',
			'#jqxCheckBox-52-5',
			'#jqxCheckBox-52-6',
			'#jqxCheckBox-61-2',
			'#jqxCheckBox-61-3',
			'#jqxCheckBox-61-4',
			'#jqxCheckBox-61-5',
			'#jqxCheckBox-61-6',];

const graphName="bunds"; 
var mainContainer='';
var mainGroupContainer='';
var groupContainer='';
var subgroupContainer='';
var factorIner='';
var factorInerItem='';
var factorContainer='';
var titleInnerItems='';
const candleGroupIdSubgroups = [[52, 2], [61, 2]];
const showGroupOfOptions = false;
const candleGraphTitle = "Bunds";

 const groupId_Id =  [
                { Id: '1', groupId: 52, rollingGroupId: 61  ,name:'BUNDS'},
				{ Id: '2', groupId: 53, rollingGroupId: 62  ,name:'BOBLS'},
				{ Id: '3', groupId: 54, rollingGroupId: 63  ,name:'SHATZ'},
				{ Id: '4', groupId: 55, rollingGroupId: 64  ,name:'BUXL'},
				{ Id: '5', groupId: 56, rollingGroupId: 65  ,name:'OAT'},
				{ Id: '6', groupId: 57, rollingGroupId: 67  ,name:'BTP'},
				{ Id: '7', groupId: 58, rollingGroupId: 68  ,name:'GILTS'},
				{ Id: '8', groupId: 59, rollingGroupId: 69  ,name:'T-NOTES'},
				{ Id: '9', groupId: 60, rollingGroupId: 70  ,name:'T-BONDS'},
                ];      
 const nameSubgroupId =  [
                    { name: 'OPEN', subgroupId: '2' },
                    { name: 'SETTLE', subgroupId: '3' },
                    { name: 'CLOSE', subgroupId: '4' },
                    { name: 'HIGH', subgroupId: '5' },
                    { name: 'LOW', subgroupId: '6' }
                    ];         			   
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
		$.ajax({
	    url: '/longEnds/get-longends-display-settings/52' ,
	    method: 'GET',
	    dataType: 'json',
	    async:false,
	    success: function(data) {
			
	        	var groupedData = groupByGroupIdAndSubgroupId(data);
                
				// Iterate over each groupId
				Object.keys(groupedData).forEach(function (groupId, i) {
				    const groupName=groupId_Id.filter(value => value.groupId == groupId)[0].name;
				    classStyle=(i%2!=0)?'row-style':'';
				     mainGroupContainer+='<div class="col-12 d-flex">';
				   
					 subgroupContainer+='<div class="col-12 '+classStyle+' align-items-center d-flex">';
					 	
				    // Iterate over each subgroupId within the current groupId
				    Object.keys(groupedData[groupId]).forEach(function (subgroupId) {
				     
				        // Iterate over each item within the current subgroupId
				       factorContainer='<div class="col-6  d-flex">'
				       factorIner+='<div class="col d-flex">'
				        groupedData[groupId][subgroupId].forEach(function (item) {
				            checkBox="jqxCheckBox-"+item.groupId+'-'+item.subgroupId;
		    	  	        isVisible=item.isVisible?'d-block':'d-none';
				             factorInerItem+='<div class="align-middle" style="    min-width: 24px;">'
									+'<div id="'+checkBox+'" class="jqx-checkbox-items  align-middle '+isVisible+'"></div>'
								+'</div>';
							titleInnerItems+='<div class="col d-flex "><div class="align-middle '+isVisible+'">'+nameSubgroupId.filter(value => value.subgroupId == subgroupId)[0].name+'</div></div>'
				        });
				       factorIner+=factorInerItem
				     		     +'</div>';
				     		     factorInerItem='';
				       factorContainer+=factorIner
				     		     +'</div>';  
				     		   
				    });
				      factorIner='';
				      Object.keys(groupedData[groupId]).forEach(function (subgroupId) {
				   
				        // Iterate over each item within the current subgroupId
				       rollingContainer='<div class="col-6  d-flex">'
				       factorIner+='<div class="col d-flex">'
				        groupedData[groupId][subgroupId].forEach(function (item) {
							const rollingGroupId=groupId_Id.filter(value => value.groupId == groupId)[0].rollingGroupId;

				            checkBox="jqxCheckBox-"+rollingGroupId+'-'+item.subgroupId;
		    	  	        isVisible=item.isVisible?'d-block':'d-none';
				             factorInerItem+='<div class="align-middle" style="    min-width: 24px;">'
									+'<div id="'+checkBox+'" class="jqx-checkbox-items  align-middle '+isVisible+'"></div>'
								+'</div>';
				        });
				       factorIner+=factorInerItem
				     		     +'</div>';
				     		     factorInerItem='';
				       rollingContainer+=factorIner
				     		     +'</div>';  
				     		   
				    });
				    subgroupContainer+= factorContainer ;
				    subgroupContainer+=rollingContainer;
				    subgroupContainer+= '</div>';    
				    
				     mainContainer+='<div class="col-12">'
			                 +'<div class="col-12 d-flex">'
				                 +'<div class="col-12">'
				                 		+'<div class="col-12 d-flex"><div class="align-middle fw-bold">INITIALS</div><div class="align-middle fw-bold">ROLLING</div></div>'
										+'<div class="col-12 d-flex">'
											+'<div class="col-6 d-flex">'
												+titleInnerItems
											+'</div>'
											+'<div class="col-6 d-flex">'
												+titleInnerItems
											+'</div>'
										+'</div>'
									+'</div>'
							  +'</div>';
						
						
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
				  $('#longEndsContainer').append(mainContainer); 
		
	
		
	 initializeNewsBanner();
	 initializePeriods();
	 initializeTypes();
	 initializeFunctions();
	 
	 initializeNavigationButtons();
	 initialiazeItems(allitems,2);
	 initialiazeClearFilterButton();
	 initializeShowFilterButton();
	 
	 $("#groupOfOptions").hide();
	$("#groupOfOptions").jqxButtonGroup({ theme: 'dark', mode: 'radio' });
	$('#groupOfOptions').jqxButtonGroup('setSelection', 1);
	 
	 getGraphHistoryByScreenName(graphName);
	 
     $("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });

	    },
	    error: function(xhr, status, error) {
	        console.log(error);
	    }
	});
    
});

function drawGraph() {
	
	var graphService = "longEnds";
	const removeEmpty = false;
		const chartType=typeof($("#chartTypes").find(".active")[0]) !='undefined'?$("#chartTypes").find(".active")[0].id:null;
	if(chartType=="candle")
		{    $("#functionOptionsMenu").hide();
			candleStick(graphName,true);
		}
	else
	{    $("#functionOptionsMenu").show();
	 	$("#groupOfOptions").hide();
		getGraphData(graphService,graphName,removeEmpty,true);
	}
}
 function groupByGroupIdAndSubgroupId(data) {
    var groupedData = {};

    Object.keys(data).forEach(function (key) {
        var item = data[key];
        var groupId = item.groupId;
        var subgroupId = item.subgroupId;

        if (!groupedData[groupId]) {
            groupedData[groupId] = {};
        }

        if (!groupedData[groupId][subgroupId]) {
            groupedData[groupId][subgroupId] = [];
        }

        groupedData[groupId][subgroupId].push(item);
    });

    return groupedData;
}


