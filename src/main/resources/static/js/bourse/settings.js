  var groupItem;
  var subgroupsource;
  var familyItem;
  var groupsource;
  var gridsource;
  $(window).on('load', function(){
	  $('#overlay').fadeOut();
	  $('#nav-column-master').show();
  });
  function addText(event,id) {
	    var targ = event.target || event.srcElement;
	    document.getElementById(id).value += targ.textContent || targ.innerText;
	}
  $(document).ready(function () {
	   $('#container-wrapper').show();
	    
	  $("#viewall").jqxButton({  theme:'dark', width: 110, height: 35,template: "primary" });
	  $("#viewall").css("display","block");
	  $("#viewall").click(function () {
			popupWindow('/bourse/allnews', 'Libvol - View All News', window, 1300, 600);
		  });
	  
	  $("#startDate").jqxDateTimeInput({  theme:'dark', width: '100%', height: '25px',allowNullDate: true });
	  $("#startDate_f").jqxDateTimeInput({ theme:'dark', width: '100%', height: '25px',allowNullDate: true });
	  
	  $("#jqxNotification").jqxNotification({ width: "100%",appendContainer: "#notifcationContainer",  opacity: 0.9,
            autoOpen: false, animationOpenDelay: 800, autoClose:true , autoCloseDelay: 3000,  template: "success"
        });
	    $("#jqxNotificationRobots").jqxNotification({ width: "100%",appendContainer: "#notifcationContainerRobot",  opacity: 0.9,
            autoOpen: false, animationOpenDelay: 800, autoClose:true , autoCloseDelay: 3000,  template: "success"
		});
		 $("#jqxNotification_f").jqxNotification({ width: "100%",appendContainer: "#notifcationContainer_f",  opacity: 0.9,
            autoOpen: false, animationOpenDelay: 800, autoClose:true , autoCloseDelay: 3000,  template: "success"
		});
		  $("#jqxNotificationRobots_f").jqxNotification({ width: "100%",appendContainer: "#notifcationContainerRobot_f",  opacity: 0.9,
            autoOpen: false, animationOpenDelay: 800, autoClose:true , autoCloseDelay: 3000,  template: "success"
		});
	  factorcalctypeSource =["INPUT","CALCULATED"];
	 $("#factorcalctype").jqxDropDownList({ dropDownHeight: 70, source: factorcalctypeSource, theme: 'dark' , width: '100%', height: 30});
	 $("#factorcalctype_f").jqxDropDownList({ dropDownHeight: 70, source: factorcalctypeSource, theme: 'dark' , width: '100%', height: 30});
	 
	  formatSource =["0","0.0","0.00","0.000","0.0000","0%","0.0%","0.00%","0.000%","0.0000%"];
		 $("#dataFormat").jqxDropDownList({ dropDownHeight:320, source: formatSource, theme: 'dark' , width: '100%', height: 30});
		 $("#yAxisFormats").jqxDropDownList({ dropDownHeight: 320, source: formatSource, theme: 'dark' , width: '100%', height: 30});
		 $("#dataFormat_f").jqxDropDownList({ dropDownHeight:320, source: formatSource, theme: 'dark' , width: '100%', height: 30});
		 $("#yAxisFormats_f").jqxDropDownList({ dropDownHeight: 320, source: formatSource, theme: 'dark' , width: '100%', height: 30});
		 
	 chartTypeSource =["Area","Bars","Line","Line Spline"];
	 $("#chartType").jqxDropDownList({dropDownHeight: 120,  source: chartTypeSource, theme: 'dark' , width: '100%', height: 30});
	 $("#chartType_f").jqxDropDownList({dropDownHeight: 120,  source: chartTypeSource, theme: 'dark' , width: '100%', height: 30});
	var  chartColorSource =[{"colorName":"Gold",
                             "colorCode":"#F0AB2E"}, 
					        {"colorName":"Blue",
					         "colorCode":"#0097FE"}, 
				            {"colorName":"Dark",
				             "colorCode":"#44546a"}];
	 var sourceColor =
     {
         datatype: "json",
         datafields: [
             { name: 'colorName' },
             { name: 'colorCode' }
         ],
         localdata: chartColorSource,
         async: true
     };
	  var dataAdapterColor = new $.jqx.dataAdapter(sourceColor);
	 $("#chartColor").jqxDropDownList({dropDownHeight: 90,  source: dataAdapterColor,displayMember: "colorName",valueMember: "colorCode", theme: 'dark' , width: '100%', height: 30});
	 $("#chartColor_f").jqxDropDownList({dropDownHeight: 90,  source: dataAdapterColor,displayMember: "colorName",valueMember: "colorCode", theme: 'dark' , width: '100%', height: 30});
	
		
	 var  showMarkesSource =[{"showMarkes":"None",
	                              "showMarkesValue":"0"}, 
						        {"showMarkes":"Small",
						         "showMarkesValue":"1"},
								{"showMarkes":"Big",
						         "showMarkesValue":"3"}];
			var makerSource =
			{
			datatype: "json",
			datafields: [
			{ name: 'showMarkes' },
			{ name: 'showMarkesValue' }
			],
			localdata: showMarkesSource,
			async: true
			};
			var dataAdapterMarker = new $.jqx.dataAdapter(makerSource);
			$("#showMarkes").jqxDropDownList({dropDownHeight: 90,  source: dataAdapterMarker,displayMember: "showMarkes",valueMember: "showMarkesValue", theme: 'dark' , width: '100%', height: 30});
			$("#showMarkes_f").jqxDropDownList({dropDownHeight: 90,  source: dataAdapterMarker,displayMember: "showMarkes",valueMember: "showMarkesValue", theme: 'dark' , width: '100%', height: 30});


	 var  chartSizeSource =[{"chartSize":"Small",
                              "chartSizeValue":"12px"}, 
					        {"chartSize":"Medium",
					         "chartSizeValue":"14px"},
							{"chartSize":"Large",
					         "chartSizeValue":"16px"}];
		var sizeSource =
		{
		datatype: "json",
		datafields: [
		{ name: 'chartSize' },
		{ name: 'chartSizeValue' }
		],
		localdata: chartSizeSource,
		async: true
		};
		var dataAdapterSize = new $.jqx.dataAdapter(sizeSource);
		$("#chartSize").jqxDropDownList({dropDownHeight: 90,  source: dataAdapterSize,displayMember: "chartSize",valueMember: "chartSizeValue", theme: 'dark' , width: '100%', height: 30});
		$("#chartSize_f").jqxDropDownList({dropDownHeight: 90,  source: dataAdapterSize,displayMember: "chartSize",valueMember: "chartSizeValue", theme: 'dark' , width: '100%', height: 30});

		var  transparencySource =[{"transparency":"0%",
            "transparencyValue":"1"}, 
	        {"transparency":"25%",
	         "transparencyValue":"0.75"},
			{"transparency":"50%",
	         "transparencyValue":"0.5"}];
		var transSource =
		{
		datatype: "json",
		datafields: [
		{ name: 'transparency' },
		{ name: 'transparencyValue' }
		],
		localdata: transparencySource,
		async: true
		};
		var dataAdapterTrans = new $.jqx.dataAdapter(transSource);
		$("#transparency").jqxDropDownList({dropDownHeight: 90,  source: dataAdapterTrans,displayMember: "transparency",valueMember: "transparencyValue", theme: 'dark' , width: '100%', height: 30});
		$("#transparency_f").jqxDropDownList({dropDownHeight: 90,  source: dataAdapterTrans,displayMember: "transparency",valueMember: "transparencyValue", theme: 'dark' , width: '100%', height: 30});

	 var  showgridSource =[{"Showgrid":"Yes",
                              "ShowgridValue":"true"}, 
					        {"Showgrid":"No",
					         "ShowgridValue":"false"}];
		var gridSource =
		{
		datatype: "json",
		datafields: [
		{ name: 'Showgrid' },
		{ name: 'ShowgridValue' }
		],
		localdata: showgridSource,
		async: true
		};
		var dataAdapterGrid = new $.jqx.dataAdapter(gridSource);
		$("#showgrid").jqxDropDownList({dropDownHeight: 70,  source: dataAdapterGrid,displayMember: "Showgrid",valueMember: "ShowgridValue", theme: 'dark' , width: '100%', height: 30});
		$("#showgrid_f").jqxDropDownList({dropDownHeight: 90,  source: dataAdapterGrid,displayMember: "Showgrid",valueMember: "ShowgridValue", theme: 'dark' , width: '100%', height: 30});

	 
	 
	 exchangeLinkSource =["NONE","EUREX","ICE","CME","CBOT"];
	$("#exchangeLink").jqxDropDownList({dropDownHeight: 160,  source: exchangeLinkSource, theme: 'dark' , width: '100%', height: 30});
	$("#exchangeLink_f").jqxDropDownList({dropDownHeight: 160,  source: exchangeLinkSource, theme: 'dark' , width: '100%', height: 30});
	// no data source
	$("#graphscale").jqxDropDownList({dropDownHeight: 100,  source: chartTypeSource, theme: 'dark' , width: '100%', height: 30});
	
	var functionSource =
      {
          datatype: "json",
          datafields: [
              { name: 'id' },
              { name: 'description' }
          ],
          url: '/admin/getfunctions',
          async: true
      };
	   var dataAdapter = new $.jqx.dataAdapter(functionSource);
	 	$("#functionDropDown").jqxDropDownList({ source: dataAdapter , displayMember: "description", valueMember: "id", theme: 'dark' , width: 210, height: 30});
	 	$("#functionDropDown").on('select', function (event) {
            if (event.args) {
			   functionItem = event.args.item;
			    var rowID = $('#grid').jqxGrid('getrowid', editrow);
				var dataRecord = $("#grid").jqxGrid('getrowdata', rowID);
				
				$('#functionColumn').empty();
				$('#functionColumn').append(dataRecord.columnName+' - '+functionItem.label);
				functionSelected(dataRecord.id,functionItem.value);
				getRobotFunctionsConfiguration(dataRecord.id,functionItem.value);
            }
		}); 
			 
	var familysource =
      {
          datatype: "json",
          datafields: [
              { name: 'id' },
              { name: 'description' }
          ],
          url: '/admin/getassetclass',
          async: true
      };
	   var dataAdapter = new $.jqx.dataAdapter(familysource);
	 	$("#FamilyDropDown").jqxDropDownList({ source: dataAdapter , displayMember: "description", valueMember: "id", theme: 'dark' , width: 210, height: 30});
	 	$("#FamilyDropDown").on('select', function (event) {
            if (event.args) {
               familyItem = event.args.item;
              // groupsource.url='/admin/getgroupsbyfamily/'+familyItem.value;
              // var dataAdapter = new $.jqx.dataAdapter(groupsource);
              // $("#groupDropDown").jqxDropDownList({source:dataAdapter, disabled: false }); 
       		 if(familyItem.value==8){
					$("#nav-robots-tab").prop("disabled", true);
					$("#nav-functions-tab").prop("disabled", true);
				}
				else{
					$("#nav-robots-tab").prop("disabled", false);
					$("#nav-functions-tab").prop("disabled", false);
				}
       		 $.ajax({
			    url: '/admin/getgroupsbyfamily/' + familyItem.value,
			    method: 'GET',
			    dataType: 'json',
			    success: function(response) {
			        // Handle successful response
			        var dataAdapter = new $.jqx.dataAdapter(response);
			        $("#groupDropDown").jqxDropDownList({ source: dataAdapter, disabled: false });
			    },
			    error: function(xhr, status, error) {
			        if (xhr.status === 401) {
			            // Redirect to the login page or display a message
			            window.location.href = '/login'; // Redirect to the login page
			        } else {
				        // Check if the response is HTML content
				        if (xhr.getResponseHeader('content-type').indexOf('text/html') !== -1) {
				            if(xhr.responseText.includes("Your session has expired due to inactivity."))
				              window.location.href = '/invalidSession';
				        } else {
				            // The response is not HTML, handle other errors or unexpected responses
				        }
				    }
			    }
			});
       		 }
        });
	   groupsource =
	      {
	          datatype: "json",
	          datafields: [
	              { name: 'id' },
	              { name: 'description' }
	          ],
	          url: '',
	          async: true
	      };
		   var dataAdapter = new $.jqx.dataAdapter(groupsource);
		 
		$("#groupDropDown").jqxDropDownList({ source: dataAdapter,disabled: true,  displayMember: "description", valueMember: "id",theme: 'dark' , width: 260, height: 30});
		$("#groupDropDown").on('select', function (event) {
            if (event.args) {
               groupItem = event.args.item;
              // groupsource.url='/admin/getgroupsbyfamily/'+familyItem.value;
              // var dataAdapter = new $.jqx.dataAdapter(groupsource);
              // $("#groupDropDown").jqxDropDownList({source:dataAdapter, disabled: false }); 
       		 $.ajax({
			    url: '/admin/getsubgroupsbygroup/'+groupItem.value,
			    method: 'GET',
			    dataType: 'json',
			    success: function(response) {
			        // Handle successful response
			        var dataAdapter = new $.jqx.dataAdapter(response);
			        $("#subGroupDropDown").jqxDropDownList({ source: dataAdapter, disabled: false });
			    },
			    error: function(xhr, status, error) {
			        if (xhr.status === 401) {
			            // Redirect to the login page or display a message
			            window.location.href = '/login'; // Redirect to the login page
			        } else {
				        // Check if the response is HTML content
				        if (xhr.getResponseHeader('content-type').indexOf('text/html') !== -1) {
				            if(xhr.responseText.includes("Your session has expired due to inactivity."))
				              window.location.href = '/invalidSession';
				        } else {
				            // The response is not HTML, handle other errors or unexpected responses
				        }
				    }
			    }
			});
       		 }
        });
		 subgroupsource =
	      {
	          datatype: "json",
	          datafields: [
	              { name: 'idSubGroup' },
	              { name: 'description' }
	          ],
	          url: '',
	          async: true
	      };
		   var dataAdapter = new $.jqx.dataAdapter(subgroupsource);
		$("#subGroupDropDown").jqxDropDownList({ source: dataAdapter,disabled: true, displayMember: "description", valueMember: "idSubGroup", theme: 'dark' , width: 260, height: 30});
		$("#subGroupDropDown").on('select', function (event) {
    if (event.args) {
        subGroupDropDown = event.args.item;
        var url = '/admin/findNativeByGroupIdAndSubgroupId/' + groupItem.value + '/' + subGroupDropDown.value;
        
        // Perform the AJAX call with error handling
        $.ajax({
            url: url,
            method: 'GET',
            dataType: 'json',
            success: function(response) {
                // Handle successful response
                gridsource.localdata= response;
                var dataAdapter = new $.jqx.dataAdapter(gridsource);
                $('#grid').jqxGrid({ source: dataAdapter });
            },
            error: function(xhr, status, error) {
                // Check if the response is HTML content
				        if (xhr.getResponseHeader('content-type').indexOf('text/html') !== -1) {
				            if(xhr.responseText.includes("Your session has expired due to inactivity."))
				              window.location.href = '/invalidSession';
				        } else {
				            // The response is not HTML, handle other errors or unexpected responses
				        }
            }
        });
    }
});
	   // $("#jqxCheckBoxNegative").jqxCheckBox({ theme: 'dark' ,rtl: true, width: 180, height: 25});
	    $("#jqxCheckBoxShowIndb").jqxCheckBox({ theme: 'dark' ,rtl: true, width: 180, height: 25});  
	    $("#jqxCheckBoxShowInNews").jqxCheckBox({ theme: 'dark' ,rtl: true, width: 192, height: 25});  
	    $("#jqxCheckBoxShowIndb_f").jqxCheckBox({ theme: 'dark' ,rtl: true, width: 180, height: 25});  
		$("#jqxCheckBoxShowInNews_f").jqxCheckBox({ theme: 'dark' ,rtl: true, width: 192, height: 25});  
		
	    $("#highLow_jqxCheckBox").jqxCheckBox({ theme: 'dark', width: 180, height: 25});    
	    $("#jump_jqxCheckRobot").jqxCheckBox({ theme: 'dark', width: 180, height: 25});    
		$("#trend_jqxCheckRobot").jqxCheckBox({ theme: 'dark', width: 180, height: 25});
		$("#trendDepth_jqxCheckRobot").jqxCheckBox({ theme: 'dark', width: 180, height: 25});
		
		 $("#highLow_jqxCheckBox_f").jqxCheckBox({ theme: 'dark', width: 180, height: 25});    
	    $("#jump_jqxCheckRobot_f").jqxCheckBox({ theme: 'dark', width: 180, height: 25});    
		$("#trend_jqxCheckRobot_f").jqxCheckBox({ theme: 'dark', width: 180, height: 25});
	    
        $("#jump_isTick").jqxRadioButton({ theme: 'dark', checked: true});
        $("#jump_isPercentage").jqxRadioButton({ theme: 'dark'});
        $("#jump_isTick_f").jqxRadioButton({ theme: 'dark', checked: true});
        $("#jump_isPercentage_f").jqxRadioButton({ theme: 'dark'});
	   
	    $("#update").jqxButton({ theme: 'dark',height:30,width:74  });
        $("#cancel").jqxButton({ theme: 'dark',height:30,width:74 });
        $("#update_f").jqxButton({ theme: 'dark',height:30,width:74  });
        $("#cancel_f").jqxButton({ theme: 'dark',height:30,width:74 });
        
        $("#updateRobots").jqxButton({ theme: 'dark',height:30,width:74});
		$("#cancelRobots").jqxButton({ theme: 'dark',height:30,width:74});
	    $("#updateRobots_f").jqxButton({ theme: 'dark',height:30,width:74});
        $("#cancelRobots_f").jqxButton({ theme: 'dark',height:30,width:74});
        $('#cancelRobots').click(function () {
            $('#popupWindow').jqxWindow('close');
		});
		 $('#cancelRobots_f').click(function () {
            $('#popupWindow').jqxWindow('close');
		});
		$('#cancel_f').click(function () {
            $('#popupWindow').jqxWindow('close');
        });
        var thresholdsource = [ "2 weeks",
					        	"1 month",
					        	"3-month",
					        	"6-month",
					        	"1-year " ];
        var trendingDescriptionsource = [ "Higher / Lower",
        	"Increasing / Decreasing",
        	"Streepening / Flattening"];
        
    // Create a jqxDropDownList
    $("#highLow_thresholddl").jqxDropDownList({theme: 'dark', source: thresholdsource,width: 80, height: 30,dropDownHeight: 150});
    $("#highLow_thighlightdropdown").jqxDropDownList({theme: 'dark', source: thresholdsource, width: 80, height: 30,dropDownHeight: 150});
    $("#highLow_thresholddl_f").jqxDropDownList({theme: 'dark', source: thresholdsource,width: 80, height: 30,dropDownHeight: 150});
    $("#highLow_thighlightdropdown_f").jqxDropDownList({theme: 'dark', source: thresholdsource, width: 80, height: 30,dropDownHeight: 150});
    
    $("#trend_Description").jqxDropDownList({theme: 'dark', source: trendingDescriptionsource,width: 177, height: 30,dropDownHeight: 100});
	$("#trendDepth_Description").jqxDropDownList({theme: 'dark', source: trendingDescriptionsource,width: 230, height: 30,dropDownHeight: 100});
    $("#trend_Description_f").jqxDropDownList({theme: 'dark', source: trendingDescriptionsource,width: 177, height: 30,dropDownHeight: 100});
     
   
      gridsource =
      {
          datatype: "json",
          datafields: [
        	  { name: 'id', type: 'long' },
 			  { name: 'factor', type: 'string' },
              { name: 'status', type: 'string' },
        	  { name: 'canBeNegative', type: 'long' }, 
        	  { name: 'showInDatabase', type: 'long' }, 
        	  { name: 'showInNewsGraph', type: 'long' },  
        	  { name: 'description', type: 'string' },
        	  { name: 'displayDescription', type: 'string' },
        	  { name: 'columnName', type: 'string' }, 
              { name: 'dataFormat', type: 'string' },
              { name: 'yaxisFormat', type: 'string' },
              { name: 'calculationType', type: 'string' },
              { name: 'startDate', type: 'string' },
              { name: 'lowHighActive', type: 'bool' },
              { name: 'jumpActive', type: 'bool' },
              { name: 'trendActive', type: 'bool' },
              { name: 'graphScale', type: 'string' },
              { name: 'Crossing100d200dRobot', type: 'string' },
              { name: 'SignChange', type: 'string' },
              { name: 'chartType', type: 'string' },
              { name: 'chartColor', type: 'string' },
              { name: 'chartSize', type: 'string' },
              { name: 'chartshowMarkes', type: 'string' },
              { name: 'chartTransparency', type: 'string' },
              { name: 'chartShowgrid', type: 'string' },
              { name: 'exchangeLink', type: 'string' }, 
              { name: 'dataMinIncrement', type: 'string' }, 
              { name: 'tickValue', type: 'string' },
              { name: 'currency', type: 'string' },
              { name: 'robotCode', type: 'string' },
              { name: 'columnCode', type: 'string' }
          ],
          async: true,
          url: ''
      };
     
      var dataAdapter = new $.jqx.dataAdapter(gridsource, {
          downloadComplete: function (data, status, xhr) { },
          loadComplete: function (data) { },
          loadError: function (xhr, status, error) { }
      });
        $("#popupWindow").jqxWindow({
            width: '100%',    height: '97%',  resizable: false,  theme: 'dark' , isModal: true, autoOpen: false, cancelButton: $("#cancel"), modalOpacity: 0.01           
        });
       $('#popupWindow').on('close', function (event) {
    	   $('#robotform').trigger("reset");
    	   $('#graphDataform1').trigger("reset"); 
		   $('#graphDataform2').trigger("reset"); 
    	   $("#factorcalctype").jqxDropDownList('clearSelection'); 
    	   $("#exchangeLink").jqxDropDownList('clearSelection'); 
      	   $("#chartType").jqxDropDownList('clearSelection'); 
      	   $("#chartColor").jqxDropDownList('clearSelection'); 
      	   $("#chartSize").jqxDropDownList('clearSelection'); 
      	   $("#showMarkes").jqxDropDownList('clearSelection'); 
      	   $("#transparency").jqxDropDownList('clearSelection'); 
      	   $("#showgrid").jqxDropDownList('clearSelection'); 
       	   $("#dataFormat").jqxDropDownList('clearSelection'); 
      	   $("#yAxisFormats").jqxDropDownList('clearSelection'); 
     	   $("#graphscale").jqxDropDownList('clearSelection'); 
    	   $("#highLow_thighlightdropdown").jqxDropDownList('clearSelection'); 
    	   $("#highLow_thresholddl").jqxDropDownList('clearSelection'); 
    	   $("#highLow_jqxCheckBox").jqxCheckBox('val',false);
		   $("#trend_jqxCheckRobot").jqxCheckBox('val',false);
    	   $("#trendDepth_jqxCheckRobot").jqxCheckBox('val',false);
    	   $("#jump_jqxCheckRobot").jqxCheckBox('val',false);
    	   $("#trend_Description").jqxDropDownList('clearSelection');
    	   $("#trendDepth_Description").jqxDropDownList('clearSelection');
    	   $("#jump_isTick").jqxRadioButton({checked: true});
    	   $("#jump_isPercentage").jqxRadioButton({checked: false});
		   $( "#nav-graphsData-tab" ).trigger('click');
		   $("#functionDropDown").jqxDropDownList('clearSelection'); 
		   $('#jqxCheckBoxShowIndb').jqxCheckBox('val',false);
		   
		   resetFunctionSection();
		  
       }); 
        $('#nav-robots-tab').click(function (event) {     
        	
        	   $.ajax({
       	        contentType: "application/json",
       	        url: "/admin/getrobotsbycolumnconfigid/"+ $("#configId").val(),
       	        dataType: 'json',
       	        async:true,
       	        cache: false,
       	        timeout: 600000,
       	        success: function (data) {
       	         for (i=0; i<data.length;i++)
       	        	 {
       	        	 if (data[i].robotName=="HighLowRobot")
       	        		 {
       	        		
       	        		 $("#robotCodeHighLow").text(data[i].robotCode);
       	        		 $("#graphTitle").val(data[i].displayDescription);
               	         $("#highLow_TemplateRobot").val(data[i].template);
                         $("#highLow_lastData").val(data[i].lastData);
                         $("#highLow_thresholddl").jqxDropDownList('val', data[i].threshholdTrigger);
                         $("#highLow_thighlightdropdown").jqxDropDownList('val', data[i].threshHoldNotification);
                         $("#highLow_jqxCheckBox").jqxCheckBox('val', data[i].isactive==1?true:false);
                         }
       	        	 
	       	          if (data[i].robotName=="JumpRobot")
	         		 {
	       	          $("#robotCodeJump").text(data[i].robotCode);
	         		  $("#jump_TemplateRobot").val(data[i].template);
	                  $("#jump_isTick").val(data[i].jumpValueTick==1?true:false);
	                  $("#jump_isPercentage").val(data[i].jumpPercentage==1?true:false);
	                  $("#jump_Trigger").val(data[i].threshholdTrigger);
	                  $("#jump_Highlight").val(data[i].threshHoldNotification);
	                  $("#jump_jqxCheckRobot").jqxCheckBox('val', data[i].isactive==1?true:false);
	         		 }
	       	          
	       	       if (data[i].robotName=="TrendRobot")
	         		 {
	       	    	  $("#robotCodeTrend").text(data[i].robotCode);
	         		  $("#trend_TemplateRobot").val(data[i].template);
	                  $("#trend_Description").val(data[i].description);
	                  $("#trend_Trigger").val(data[i].threshholdTrigger);
	                  $("#trend_Highlight").val(data[i].threshHoldNotification);
	                  $("#trend_jqxCheckRobot").jqxCheckBox('val', data[i].isactive==1?true:false);
	         		 } 
		       	      if (data[i].robotName=="TrendDepthRobot")
		      		 {
		      		   $("#trendDepth_TemplateRobot").val(data[i].template);
		               $("#trendDepth_Description").val(data[i].description);
		               $("#trendDepth_Highlight").val(data[i].threshHoldNotification);
		               $("#trendDepth_jqxCheckRobot").jqxCheckBox('val', data[i].isactive==1?true:false);
					   }
					   
       	        	 } 
       	        
       },
       	        error: function (e) {
       	        	
       					  console.log("ERROR : ", e);

       	        }
       	    });
        
        });
        // update the edited row when the user clicks the 'Save' button.
        $("#update").click(function () {
        	
            if (editrow >= 0) {
				 var rowID = $('#grid').jqxGrid('getrowid', editrow);
				 var selectedrowindex = $('#grid').jqxGrid('getselectedrowindexes');
				 var rowdata=$('#grid').jqxGrid('getrowdata', selectedrowindex);
            	 var dataRecord = $("#grid").jqxGrid('getrowdata', rowID);
                 var row = { id : dataRecord.id,
							factor : dataRecord.factor,
							status : dataRecord.status,
                		    description:$("#DisplayName").val(),
							columnCode:$("#columnCode").val(),
                		    displayDescription: $("#graphTitle").val()!=''?$("#graphTitle").val():null,
                		    columnName: $("#columnName").val()!=''?$("#columnName").val():null,
                		    groupId:groupItem.value,
                		    subgroupId:subGroupDropDown.value,
                		    dataFormat:$("#dataFormat").val()!=''?$("#dataFormat").val():null,
                		  //  canBeNegative:$('#jqxCheckBoxNegative').jqxCheckBox('checked')?true:false,
                		    canBeNegative:false,
                		    showInDatabase:$('#jqxCheckBoxShowIndb').jqxCheckBox('checked')?true:false,
                		    showInNewsGraph:$('#jqxCheckBoxShowInNews').jqxCheckBox('checked')?true:false,
                		    graphScale:$('#jqxCheckBoxShowIndb').jqxCheckBox('checked')?1:0,
                		    startDate:$("#startDate").jqxDateTimeInput('getDate')==null?null:$.jqx.dataFormat.formatdate($("#startDate").jqxDateTimeInput('getDate'),  'dd-MM-yyyy'),
                		    calculationType:$("#factorcalctype").val()!=''?$("#factorcalctype").val():null,
                		    chartType:$("#chartType").val()!=''?$("#chartType").val():null,
                		    chartColor:$("#chartColor").val()!=''?$("#chartColor").val():null,
                		    chartshowMarkes:$("#showMarkes").val()!=''?$("#showMarkes").val():null,
                		    chartSize:$("#chartSize").val()!=''?$("#chartSize").val():null,
                		    chartTransparency:$("#transparency").val()!=''?$("#transparency").val():null,
                		    chartShowgrid:$("#showgrid").val()!=''?$("#showgrid").val():null,
                		    exchangeLink:$("#exchangeLink").val()!=''?$("#exchangeLink").val():null,
                		    dataMinIncrement:$("#DataMinIncrement").val()!=''?$("#DataMinIncrement").val():null,
                		    tickValue:$("#tickvalue").val()!=''?$("#tickvalue").val():null,
                		    currency:$("#Currency").val()!=''?$("#Currency").val():null,
                		    yAxisFormat:$("#yAxisFormats").val()!=''?$("#yAxisFormats").val():null,
                		    };
             	
    	       	  $.ajax({
    	    	        type: "POST",
    	    	        contentType: "application/json",
    	    	        url: "/admin/updatecolumnconfigurationbyid",
    	    	        data: JSON.stringify(row),
    	    	        dataType: 'json',
    	    	        async:true,
    	    	        cache: false,
    	    	        timeout: 600000,
    	    	        success: function (data) {
    	    	        
                      $('#grid').jqxGrid('updaterow', rowID, { id : dataRecord.id,
							factor : dataRecord.factor,
							status : dataRecord.status,
  							description:$("#DisplayName").val(),
							columnCode:$("#columnCode").val(),
                		    displayDescription: $("#graphTitle").val()!=''?$("#graphTitle").val():null,
                		    columnName: $("#columnName").val()!=''?$("#columnName").val():null,
                		    groupId:groupItem.value,
                		    subgroupId:subGroupDropDown.value,
                		    dataFormat:$("#dataFormat").val()!=''?$("#dataFormat").val():null,
                		    canBeNegative:false,
                		    showInDatabase:$('#jqxCheckBoxShowIndb').jqxCheckBox('checked')?true:false,
                		    showInNewsGraph:$('#jqxCheckBoxShowInNews').jqxCheckBox('checked')?true:false,
                		    graphScale:$('#ColumnCodeDisplay')[0].innerText,
                		    startDate:$("#startDate").jqxDateTimeInput('getDate')==null?null:$.jqx.dataFormat.formatdate($("#startDate").jqxDateTimeInput('getDate'),  'dd-MM-yyyy'),
                		    calculationType:$("#factorcalctype").val()!=''?$("#factorcalctype").val():null,
                		    chartType:$("#chartType").val()!=''?$("#chartType").val():null,
                		    chartColor:$("#chartColor").val()!=''?$("#chartColor").val():null,
                		    chartshowMarkes:$("#showMarkes").val()!=''?$("#showMarkes").val():null,
                		    chartSize:$("#chartSize").val()!=''?$("#chartSize").val():null,
                		    chartTransparency:$("#transparency").val()!=''?$("#transparency").val():null,
                		    chartShowgrid:$("#showgrid").val()!=''?$("#showgrid").val():null,
                		    exchangeLink:$("#exchangeLink").val()!=''?$("#exchangeLink").val():null,
                		    dataMinIncrement:$("#DataMinIncrement").val()!=''?$("#DataMinIncrement").val():null,
                		    tickValue:$("#tickvalue").val()!=''?$("#tickvalue").val():null,
                		    currency:$("#Currency").val()!=''?$("#Currency").val():null,
							yaxisFormat:$("#yAxisFormats").val()!=''?$("#yAxisFormats").val():null,
							lowHighActive:rowdata.lowHighActive,
							jumpActive:rowdata.jumpActive,
							trendActive:rowdata.trendActive
                		    });
                      $("#jqxNotification").jqxNotification("open");
                   //   $("#popupWindow").jqxWindow('hide');
    	   },
    	    	        error: function (e) {
    	    	        	
    						  console.log("ERROR : ", e);
    	
    	    	        }
    	    	    });
            }
        });
        $("#updateRobots").click(function () {
        	
            var rows = [{
            	"robotName":"HighLowRobot",
        		"isactive": $("#highLow_jqxCheckBox").jqxCheckBox('val'),
        		"columnDescription":$("#DisplayName").val(),
    		    "displayDescription": $("#graphTitle").val(),
    		    "rule":$("#highLow_thighlightdropdown").jqxDropDownList('val'),
    		    "template":$("#highLow_TemplateRobot").val(),
    		    "lastData":$("#highLow_lastData").val(),
    		    "threshholdTrigger": $("#highLow_thresholddl").jqxDropDownList('val'),
    		    "threshHoldNotification": $("#highLow_thighlightdropdown").jqxDropDownList('val'),
    		    "jumpValueTick":"",
    		    "jumpPercentage":"",
    		    "description":"",
    		    "groupId":groupItem.value,
    		    "subgroupId":subGroupDropDown.value,
    		    "configId":$("#configId").val(),
				"robotCode":"HILO",
			     },
    		    {
    		    	"robotName":"JumpRobot",
            		"isactive": $("#jump_jqxCheckRobot").jqxCheckBox('val'),
            		"columnDescription":$("#DisplayName").val(),
        		    "displayDescription": $("#graphTitle").val(),
        		    "rule":"",
        		    "template":$("#jump_TemplateRobot").val(),
        		    "lastData":"",
        		    "threshholdTrigger": $("#jump_Trigger").val(),
        		    "threshHoldNotification": $("#jump_Highlight").val(),
        		    "jumpValueTick":$('#jump_isTick').jqxRadioButton('val')==true?'1':'0',
        		    "jumpPercentage":$('#jump_isPercentage').jqxRadioButton('val')==true?'1':'0',
        		    "description":"",
        		    "groupId":groupItem.value,
        		    "subgroupId":subGroupDropDown.value,
        		    "configId":$("#configId").val(),
					"robotCode":"JUMP",
				  },
    		       {
        		    "robotName":"TrendRobot",
            		"isactive": $("#trend_jqxCheckRobot").jqxCheckBox('val'),
            		"columnDescription":$("#DisplayName").val(),
        		    "displayDescription": $("#graphTitle").val(),
        		    "rule":"",
        		    "template":$("#trend_TemplateRobot").val(),
        		    "lastData":"",
        		    "threshholdTrigger": $("#trend_Trigger").val(),
        		    "threshHoldNotification":$("#trend_Highlight").val(),
        		    "jumpValueTick":"",
        		    "jumpPercentage":"",
        		    "description":$("#trend_Description").jqxDropDownList('val'),
        		    "groupId":groupItem.value,
        		    "subgroupId":subGroupDropDown.value,
					"configId":$("#configId").val(),
					"robotCode":"TRND",
        		    },
        		    {
            		    "robotName":"TrendDepthRobot",
                		"isactive": $("#trendDepth_jqxCheckRobot").jqxCheckBox('val'),
                		"columnDescription":$("#DisplayName").val(),
            		    "displayDescription": $("#graphTitle").val(),
            		    "rule":"",
            		    "template":$("#trendDepth_TemplateRobot").val(),
            		    "lastData":"",
            		    "threshholdTrigger": "",
            		    "threshHoldNotification":$("#trendDepth_Highlight").val(),
            		    "jumpValueTick":"",
            		    "jumpPercentage":"",
            		    "description":$("#trendDepth_Description").jqxDropDownList('val'),
            		    "groupId":groupItem.value,
            		    "subgroupId":subGroupDropDown.value,
            		    "configId":$("#configId").val(),
						},
        		    ];
         	
         	
	       	  $.ajax({
	    	        type: "POST",
	    	        contentType: "application/json",
	    	        url: "/admin/updaterobotsbyconfigid",
	    	        data: JSON.stringify(rows),
	    	        dataType: 'json',
	    	        async:true,
	    	        cache: false,
	    	        timeout: 600000,
	    	        success: function (data) {
	    	        
	    	       gridsource.url='/admin/findNativeByGroupIdAndSubgroupId/'+groupItem.value+'/'+subGroupDropDown.value;
	    	       var dataAdapter = new $.jqx.dataAdapter(gridsource);
	    	       $('#grid').jqxGrid({source:dataAdapter});
	    	       
                $("#jqxNotificationRobots").jqxNotification("open");
             // $("#popupWindow").jqxWindow('hide');
	   },
	    	        error: function (e) {
	    	        	
						  console.log("ERROR : ", e);
	
	    	        }
	    	    });
        });
      $("#update_f").click(function () {
        	
            if (editrow >= 0) {
            	 var rowID = $('#grid').jqxGrid('getrowid', editrow);
            	 var dataRecord = $("#grid").jqxGrid('getrowdata', rowID);
				 var row = { id : $("#id_f").val(),
							functionId:$("#function_id").val(),
							factor:$("#function_factor").val(),
							configId:dataRecord.id,
							description:$("#DisplayName").val(),
							groupId:groupItem.value,
                		    subgroupId:subGroupDropDown.value,
							columnName: $("#columnName_f").val()!=''?$("#columnName_f").val():null,
							columnCode: $("#columnCode_f").val()!=''?$("#columnCode_f").val():null,
							displayDescription: $("#graphTitle_f").val()!=''?$("#graphTitle_f").val():null,
                		    dataFormat:$("#dataFormat_f").val()!=''?$("#dataFormat_f").val():null,
                		    showInDatabase:$('#jqxCheckBoxShowIndb_f').jqxCheckBox('checked')?true:false,
                		    showInNewsGraph:$('#jqxCheckBoxShowInNews_f').jqxCheckBox('checked')?true:false,
                		    startDate:$("#startDate_f").jqxDateTimeInput('getDate')==null?null:$.jqx.dataFormat.formatdate($("#startDate_f").jqxDateTimeInput('getDate'),  'dd-MM-yyyy'),
                		    calculationType:$("#factorcalctype_f").val()!=''?$("#factorcalctype_f").val():null,
                		    exchangeLink:$("#exchangeLink_f").val()!=''?$("#exchangeLink_f").val():null,
                		    dataMinIncrement:$("#DataMinIncrement_f").val()!=''?$("#DataMinIncrement_f").val():null,
                		    tickValue:$("#tickvalue_f").val()!=''?$("#tickvalue_f").val():null,
							currency:$("#Currency_f").val()!=''?$("#Currency_f").val():null,
							chartType:$("#chartType_f").val()!=''?$("#chartType_f").val():null,
                		    chartColor:$("#chartColor_f").val()!=''?$("#chartColor_f").val():null,
                		    chartshowMarkes:$("#showMarkes_f").val()!=''?$("#showMarkes_f").val():null,
                		    chartSize:$("#chartSize_f").val()!=''?$("#chartSize_f").val():null,
                		    chartTransparency:$("#transparency_f").val()!=''?$("#transparency_f").val():null,
							chartShowgrid:$("#showgrid_f").val()!=''?$("#showgrid_f").val():null,
                		    yaxisFormat:$("#yAxisFormats_f").val()!=''?$("#yAxisFormats_f").val():null,
                		    };
             	
    	       	  $.ajax({
    	    	        type: "POST",
    	    	        contentType: "application/json",
    	    	        url: "/admin/updatefunctionconfiguration",
    	    	        data: JSON.stringify(row),
    	    	        dataType: 'json',
    	    	        async:true,
    	    	        cache: false,
    	    	        timeout: 600000,
    	    	        success: function (data) {
    	    	    
                      $("#jqxNotification_f").jqxNotification("open");
                   //   $("#popupWindow").jqxWindow('hide');
    	   },
    	    	        error: function (e) {
    	    	        	
    						  console.log("ERROR : ", e);
    	
    	    	        }
    	    	    });
            }
		});
		  $("#updateRobots_f").click(function () {
        	
            var rows = [{
            	"robotName":"HighLowRobot",
        		"isactive": $("#highLow_jqxCheckBox_f").jqxCheckBox('val'),
        		"columnDescription":$("#DisplayName").val(),
    		    "displayDescription": $("#graphTitle").val(),
    		    "rule":$("#highLow_thighlightdropdown_f").jqxDropDownList('val'),
    		    "template":$("#highLow_TemplateRobot_f").val(),
    		    "lastData":$("#highLow_lastData_f").val(),
    		    "threshholdTrigger": $("#highLow_thresholddl_f").jqxDropDownList('val'),
    		    "threshHoldNotification": $("#highLow_thighlightdropdown_f").jqxDropDownList('val'),
    		    "jumpValueTick":"",
    		    "jumpPercentage":"",
    		    "description":"",
    		    "groupId":groupItem.value,
    		    "subgroupId":subGroupDropDown.value,
				"configId":$("#configId").val(),
				"functionId":$("#function_id").val(),
				"robotCode":"HILO",
			     },
    		    {
    		    	"robotName":"JumpRobot",
            		"isactive": $("#jump_jqxCheckRobot_f").jqxCheckBox('val'),
            		"columnDescription":$("#DisplayName").val(),
        		    "displayDescription": $("#graphTitle").val(),
        		    "rule":"",
        		    "template":$("#jump_TemplateRobot_f").val(),
        		    "lastData":"",
        		    "threshholdTrigger": $("#jump_Trigger_f").val(),
        		    "threshHoldNotification": $("#jump_Highlight_f").val(),
        		    "jumpValueTick":$('#jump_isTick_f').jqxRadioButton('val')==true?'1':'0',
        		    "jumpPercentage":$('#jump_isPercentage_f').jqxRadioButton('val')==true?'1':'0',
        		    "description":"",
        		    "groupId":groupItem.value,
        		    "subgroupId":subGroupDropDown.value,
					"configId":$("#configId").val(),
					"functionId":$("#function_id").val(),
					"robotCode":"JUMP",
				  },
    		       {
        		    "robotName":"TrendRobot",
            		"isactive": $("#trend_jqxCheckRobot_f").jqxCheckBox('val'),
            		"columnDescription":$("#DisplayName").val(),
        		    "displayDescription": $("#graphTitle").val(),
        		    "rule":"",
        		    "template":$("#trend_TemplateRobot_f").val(),
        		    "lastData":"",
        		    "threshholdTrigger": $("#trend_Trigger_f").val(),
        		    "threshHoldNotification":$("#trend_Highlight_f").val(),
        		    "jumpValueTick":"",
        		    "jumpPercentage":"",
        		    "description":$("#trend_Description_f").jqxDropDownList('val'),
        		    "groupId":groupItem.value,
        		    "subgroupId":subGroupDropDown.value,
					"configId":$("#configId").val(),
					"functionId":$("#function_id").val(),
					"robotCode":"TRND",
        		    },
        		    ];
         	
         	
	       	  $.ajax({
	    	        type: "POST",
	    	        contentType: "application/json",
	    	        url: "/admin/updaterobotsfunction",
	    	        data: JSON.stringify(rows),
	    	        dataType: 'json',
	    	        async:true,
	    	        cache: false,
	    	        timeout: 600000,
	    	        success: function (data) {
	    	       
                $("#jqxNotificationRobots_f").jqxNotification("open");
	   },
	    	        error: function (e) {
	    	        	
						  console.log("ERROR : ", e);
	
	    	        }
	    	    });
        });
      $("#grid").jqxGrid(
      {
          width: '100%',
          source: dataAdapter,                
          columnsresize: true,
          theme:'dark',
          pageable: true,
          columnsheight: 30,
          pagesize: 10,
          autoheight: true,
          columns: [
        	  { text: '', width: '10%' , datafield: 'Edit',filterable:false, columntype: 'button', cellsrenderer: function () {
                  return "Edit";
               }, buttonclick: function (row) {
            	  
                  // open the popup window when the user clicks a button.
                  editrow = row;
                  var offset = $("#grid").offset();
                  $("#popupWindow").jqxWindow({ position: { x: window.top.outerHeight / 2 + window.top.screenY - (550 / 2), y:  window.top.outerWidth / 2 + window.top.screenX - ( 1500 / 2) } });
                  // get the clicked row's data and initialize the input fields.
                  var dataRecord = $("#grid").jqxGrid('getrowdata', editrow);
				  $("#ColumnCodeDisplay").empty();
				  $("#ColumnCodeDisplay").append(dataRecord.graphScale);
				  $("#columnCode").val(dataRecord.columnCode);
                  $("#configId").val(dataRecord.id);
                  $("#DisplayName").val(dataRecord.description);
   				  $("#columnCode").val(dataRecord.columnCode);
                  $("#graphTitle").val(dataRecord.displayDescription);
                  $("#columnName").val(dataRecord.columnName);
                  $("#dataFormat").jqxDropDownList('val', dataRecord.dataFormat);              
                  $("#yAxisFormats").jqxDropDownList('val', dataRecord.yaxisFormat);   
//                   $("#dataFormat").val(dataRecord.dataFormat);
//                   $("#yAxisFormats").val(dataRecord.yAxisFormat);
                  if(dataRecord.startDate!=null)
                     $('#startDate').jqxDateTimeInput('setDate',dataRecord.startDate.split("-")[2]+","+dataRecord.startDate.split("-")[1]+","+dataRecord.startDate.split("-")[0]);
                  else
                	  $("#startDate").jqxDateTimeInput({ value: null });
                 // $("#jqxCheckBoxNegative").jqxCheckBox('val',dataRecord.canBeNegative);
               
                  $("#jqxCheckBoxShowIndb").val(dataRecord.showInDatabase);
                  $("#jqxCheckBoxShowInNews").val(dataRecord.showInNewsGraph);
                  $("#factorcalctype").jqxDropDownList('val', dataRecord.calculationType);
                  $("#chartType").jqxDropDownList('val', dataRecord.chartType);               
                  $("#chartColor").jqxDropDownList('val', dataRecord.chartColor);     
                  $("#showMarkes").jqxDropDownList('val', dataRecord.chartshowMarkes);               
                  $("#chartSize").jqxDropDownList('val', dataRecord.chartSize);               
                  $("#transparency").jqxDropDownList('val', dataRecord.chartTransparency);               
                  $("#showgrid").jqxDropDownList('val', dataRecord.chartShowgrid);     
                  $("#exchangeLink").jqxDropDownList('val', dataRecord.exchangeLink);      
                  $("#DataMinIncrement").val(dataRecord.dataMinIncrement);
                  $("#tickvalue").val(dataRecord.tickValue);
                  $("#Currency").val(dataRecord.currency);
                  // show the popup window.
                  $("#popupWindow").jqxWindow('open');
              }
             },
            { text: '', columngroup: 'TimeAndFormat', datafield: 'id', hidden: true  },
 			{ text: '', columngroup: 'TimeAndFormat', datafield: 'factor', hidden: true  },
            { text: '', columngroup: 'TimeAndFormat', datafield: 'canBeNegative', hidden: true  },
            { text: '', columngroup: 'TimeAndFormat', datafield: 'showInDatabase', hidden: true  },
            { text: '', columngroup: 'TimeAndFormat', datafield: 'showInNewsGraph', hidden: true  },
            { text: '', columngroup: 'TimeAndFormat', datafield: 'chartType', hidden: true  },
            { text: '', columngroup: 'TimeAndFormat', datafield: 'chartColor', hidden: true  },
            { text: '', columngroup: 'TimeAndFormat', datafield: 'chartSize', hidden: true  },
            { text: '', columngroup: 'TimeAndFormat', datafield: 'chartshowMarkes', hidden: true  },
            { text: '', columngroup: 'TimeAndFormat', datafield: 'chartTransparency', hidden: true  },
            { text: '', columngroup: 'TimeAndFormat', datafield: 'chartShowgrid', hidden: true  },
            { text: '', columngroup: 'TimeAndFormat', datafield: 'exchangeLink', hidden: true  },
            { text: '', columngroup: 'TimeAndFormat', datafield: 'startDate', hidden: true  },
            { text: '', columngroup: 'TimeAndFormat', datafield: 'tickvalue', hidden: true  },
            { text: '', columngroup: 'TimeAndFormat', datafield: 'dataMinIncrement', hidden: true  },
            { text: '', columngroup: 'TimeAndFormat', datafield: 'Currency', hidden: true  },
            { text: '', columngroup: 'TimeAndFormat', datafield: 'description', hidden: true  }, 
            { text: '', columngroup: 'TimeAndFormat', datafield: 'robotCode', hidden: true  }, 
            { text: '', columngroup: 'TimeAndFormat', datafield: 'columnCode', hidden: true  }, 
            { text: 'Display Name', columngroup: 'TimeAndFormat', datafield: 'columnName', width: '12.84%',color:'#3F0' },
            { text: 'Data Format', columngroup: 'TimeAndFormat', datafield: 'dataFormat', width: '12.84%' },
            { text: 'Y Axis Format', columngroup: 'TimeAndFormat', datafield: 'yaxisFormat', width: '12.84%'},
            { text: 'Factor Calc Type', columngroup: 'TimeAndFormat', datafield: 'calculationType', width: '12.84%' },
            { text: 'HighOrLow', columngroup: 'NewsRobot', datafield: 'lowHighActive',columntype: 'checkbox', width: '12.84%' },
            { text: 'Jump', columngroup: 'NewsRobot', columntype: 'checkbox', datafield: 'jumpActive', width: '12.84%' },
            { text: 'Trend', columngroup: 'NewsRobot', columntype: 'checkbox', datafield: 'trendActive', width: '12.84%' },
            { text: '', columngroup: 'NewsRobot', columntype: 'checkbox', datafield: 'graphScale', hidden: true },
            { text: 'Crossing 100d-200d Robot', columngroup: 'NewsRobot', columntype: 'checkbox', datafield: 'Crossing100d200dRobot',hidden: true  },
            { text: 'SignChange', columngroup: 'NewsRobot', columntype: 'checkbox', datafield: 'SignChange',hidden: true  }
          ],
          columngroups: [
              { text: 'Title and Format', align: 'center', name: 'TimeAndFormat' },
              { text: 'News Robot', align: 'center', name: 'NewsRobot' }
          ]
      });
   
  });
async function resetFunctionSection()
{
	$("#nav-graphs-data-function").removeClass('active');
	$("#nav-graphs-data-function").removeClass('show');
	$("#nav-robotsFunction-tab").removeClass("active");
	$("#nav-graphsDataFunction-tab").addClass("active");
	$("#nav-robots-function").removeClass('active');
	$("#nav-robots-function").removeClass('show');
	$("#nav-tab-function").addClass("d-none");
    $("#nav-functionWithName").addClass("d-none");
	$('#robotform_f').trigger("reset");

	$("#highLow_thighlightdropdown_f").jqxDropDownList('clearSelection'); 
	$("#highLow_thresholddl_f").jqxDropDownList('clearSelection'); 
	$("#highLow_jqxCheckBox_f").jqxCheckBox('val',false);
	$("#trend_jqxCheckRobot_f").jqxCheckBox('val',false);
	$("#jump_jqxCheckRobot_f").jqxCheckBox('val',false);
	$("#trend_Description_f").jqxDropDownList('clearSelection');
	$("#jump_isTick_f").jqxRadioButton({checked: true});
	$("#jump_isPercentage_f").jqxRadioButton({checked: false});
		   
	$("#chartType_f").jqxDropDownList('clearSelection'); 
	$("#chartColor_f").jqxDropDownList('clearSelection'); 
	$("#chartSize_f").jqxDropDownList('clearSelection'); 
	$("#showMarkes_f").jqxDropDownList('clearSelection'); 
	$("#transparency_f").jqxDropDownList('clearSelection'); 
	$("#showgrid_f").jqxDropDownList('clearSelection'); 
	$("#dataFormat_f").jqxDropDownList('clearSelection'); 
	$("#yAxisFormats_f").jqxDropDownList('clearSelection'); 
			 
	$("#factorcalctype_f").jqxDropDownList('clearSelection'); 
	$("#exchangeLink_f").jqxDropDownList('clearSelection'); 
	$("#dataFormat_f").jqxDropDownList('clearSelection'); 
	$('#jqxCheckBoxShowIndb_f').jqxCheckBox('val',false);
	$('#jqxCheckBoxShowInNews_f').jqxCheckBox('val',false);
	return;
}
async function functionSelected(configId,functionId){
	await resetFunctionSection();
	 $.ajax({
       	        contentType: "application/json",
       	        url: "/admin/findfuntionconfiguration/"+configId+"/"+functionId,
       	        dataType: 'json',
       	        async:true,
       	        cache: false,
       	        timeout: 600000,
       	        success: function (data) {
					   
				  $("#id_f").val(data.id);
				  $("#function_id").val(data.functionId);
		          $("#function_factor").val(data.factor);
                  $("#columnName_f").val(data.columnName);
                  $("#columnCode_f").val(data.columnCode);
                  $("#dataFormat_f").jqxDropDownList('val', data.dataFormat);      
                  if(data.startDate!=null)
                    $('#startDate_f').jqxDateTimeInput('setDate', data.startDate.split("-")[2]+","+data.startDate.split("-")[1]+","+data.startDate.split("-")[0]);
                  else
					 $("#startDate_f").jqxDateTimeInput({ value: null });
					  
					$("#jqxCheckBoxShowIndb_f").val(data.showInDatabase);
					$("#jqxCheckBoxShowInNews_f").val(data.showInNewsGraph);
					$("#factorcalctype_f").jqxDropDownList('val', data.calculationType);
					$("#exchangeLink_f").jqxDropDownList('val', data.exchangeLink);      
					$("#DataMinIncrement_f").val(data.dataMinIncrement);
					$("#tickvalue_f").val(data.tickValue);
					$("#Currency_f").val(data.currency);
					$("#factorcalctype_f").val(data.calculationType);
					$("#chartType_f").val(data.chartType);
					$("#chartColor_f").val(data.chartColor);
					$("#showMarkes_f").val(data.chartshowMarkes);
					$("#chartSize_f").val(data.chartSize);
					$("#transparency_f").val(data.chartTransparency);
					$("#showgrid_f").val(data.chartShowgrid);
					$("#yAxisFormats_f").val(data.yAxisFormat);
					$("#graphTitle_f").val(data.displayDescription);		
					$("#nav-graphs-data-function").addClass('active');
					$("#nav-graphs-data-function").addClass('show');
					$("#nav-tab-function").removeClass("d-none");
					$("#nav-functionWithName").removeClass("d-none");
       		  
				 },
       	        error: function (e) {
       	        	
       					  console.log("ERROR : ", e);

       	        }
       	    });
				
}

function getRobotFunctionsConfiguration(configId,functionId)
{
   $.ajax({
       	        contentType: "application/json",
       	        url: "/admin/getrobotsfunctionbycolumnconfigidandfunctionid/"+configId+"/"+functionId,
       	        dataType: 'json',
       	        async:true,
       	        cache: false,
       	        timeout: 600000,
       	        success: function (data) {
       	         for (i=0; i<data.length;i++)
       	        	 {
       	        	 if (data[i].robotName=="HighLowRobot")
       	        		 {
       	        		
       	        		 $("#robotCodeHighLow_f").text(data[i].robotCode);
               	         $("#highLow_TemplateRobot_f").val(data[i].template);
                         $("#highLow_lastData_f").val(data[i].lastData);
                         $("#highLow_thresholddl_f").jqxDropDownList('val', data[i].threshholdTrigger);
                         $("#highLow_thighlightdropdown_f").jqxDropDownList('val', data[i].threshHoldNotification);
                         $("#highLow_jqxCheckBox_f").jqxCheckBox('val', data[i].isactive==1?true:false);
                         }
       	        	 
	       	          if (data[i].robotName=="JumpRobot")
	         		 {
	       	          $("#robotCodeJump_f").text(data[i].robotCode);
	         		  $("#jump_TemplateRobot_f").val(data[i].template);
	                  $("#jump_isTick_f").val(data[i].jumpValueTick==1?true:false);
	                  $("#jump_isPercentage_f").val(data[i].jumpPercentage==1?true:false);
	                  $("#jump_Trigger_f").val(data[i].threshholdTrigger);
	                  $("#jump_Highlight_f").val(data[i].threshHoldNotification);
	                  $("#jump_jqxCheckRobot_f").jqxCheckBox('val', data[i].isactive==1?true:false);
	         		 }
	       	          
	       	       if (data[i].robotName=="TrendRobot")
	         		 {
	       	    	  $("#robotCodeTrend_f").text(data[i].robotCode);
	         		  $("#trend_TemplateRobot_f").val(data[i].template);
	                  $("#trend_Description_f").val(data[i].description);
	                  $("#trend_Trigger_f").val(data[i].threshholdTrigger);
	                  $("#trend_Highlight_f").val(data[i].threshHoldNotification);
	                  $("#trend_jqxCheckRobot_f").jqxCheckBox('val', data[i].isactive==1?true:false);
	         		 } 
					   
       	        } 
       	        
       },
       	        error: function (e) {
       	        	
       					  console.log("ERROR : ", e);

       	        }
       	    });

}