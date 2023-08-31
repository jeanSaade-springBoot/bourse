var checkedItem = 0;
var checkedItemid = [];
var monthDate = new Date();
monthDate.setMonth(monthDate.getMonth() - 6);
monthDate.setHours(0, 0, 0, 0);
var startdate = new Date();
var date = new Date();
var T1;
var T2;
var chartType1 = 'area';
var chartType2 = 'line';
var mode = "merge";
var Items = "";
var isdecimal = false;
var fromNavigation = false;
var fontsize = '12px';
var chart;
var hasMissingDates=true;
var startDateF1;
var startDateF2;
var startDateF3;
var startDateF4;
var startDateF5;
var startDateF6;
var yaxisformat;
var minvalue = 0;
var maxvalue = 0;
var chartColor = 0;
var markerSize=0;
var showGrid=true;
var showLegend='legendtrue';
var chartTransparency = 0;
var functionId =-1;
var notDecimal;
var nbrOfDigits;
var notDecimal1;
var nbrOfDigits1;

  var allitems=["#jqxCheckBoxQe1",
 			   "#jqxCheckBoxQe2",
 			   "#jqxCheckBoxQe1Qe2",
 			   "#jqxCheckBoxCumQe1",
 			   "#jqxCheckBoxCumQe2",
 			   "#jqxCheckBoxCumQe1Qe2"]; 		

$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	
	$("#viewall").jqxButton({ theme: 'dark', width: 110, height: 35, template: "primary" });
	$("#viewall").css("display", "block");
	$("#viewall").click(function() {
		popupWindow('/bourse/allnews', 'Libvol - View All News', window, 1300, 600);
	});
	$("#groupOfPeriod").jqxButtonGroup({theme: 'dark', mode: 'radio' });
		
	var  dropDownSource =[{"type":"AVG",
                            "value":"0"}, 
					        {"type":"MAX",
                             "value":"1"},
							{"type":"MIN",
                             "value":"2"},
							{"type":"LAST",
                             "value":"3"},];
	  var source =
	     {
	         datatype: "json",
	         datafields: [
	             { name: 'type' },
	             { name: 'value' }
	         ],
	         localdata: dropDownSource,
	         async: true
	     };
	  var dataAdapter = new $.jqx.dataAdapter(source);
	 $("#dropDownType").jqxDropDownList({selectedIndex: 0, dropDownHeight: 130,  source: dataAdapter,displayMember: "type",valueMember: "value", theme: 'dark' , width: 70, height: 25});
	
	 var  dropDownFunctionSource =[
							{"name":"100D moving average",
                            "value":"1"}, 
					        {"name":"200D moving average",
                             "value":"2"},
							{"name":"Daily Change In %",
                             "value":"3"},
							{"name":"Daily Change Increment",
                             "value":"4"},
						    {"name":"Weekly Change In %",
                             "value":"5"},
							{"name":"Weekly Change Increment",
							  "value":"6"},
							{"name":"10 Yr Percentile",
							  "value":"7"},
							{"name":"20 Yr Percentile",
							  "value":"8"},
							{"name":"Century Percentile",
							  "value":"9"}];
   var functionSource =
     {
         datatype: "json",
         datafields: [
             { name: 'name' },
             { name: 'value' }
         ],
         localdata: dropDownFunctionSource,
         async: true
     };
	  var functionDataAdapter = new $.jqx.dataAdapter(functionSource);
	 $("#dropDownFunctions").jqxDropDownList({dropDownHeight: 280,  source: functionDataAdapter, placeHolder: "Select a Function",  displayMember: "name",valueMember: "value", theme: 'dark' , width: 200, height: 25});
	 $("#reset").click(function() {
		 $("#dropDownFunctions").jqxDropDownList({selectedIndex: -1});
	});
	
	
	$('#dropDownFunctions').on('change', function (event)
	{     
	    var args = event.args;
	    if (args) {
	    // index represents the item's index.                      
	    var index = args.index;
	    
		   functionId=index;
		   drawGraph();
	 } 
	});
	
	$.ajax({
		contentType: "application/json",
		url: "/bourse/findgraphhistorybyscreenname/ecbQeLiquidity",
		dataType: 'json',
		async: true,
		cache: false,
		timeout: 600000,
		success: function(data) {

			checkedItemId = JSON.parse(data.parameter)[0];
			for (j = 0; j < checkedItemId.length; j++) {
				$(checkedItemId[j]).jqxCheckBox({ checked: true });
			}
			checkedItem = checkedItemId.length;
			$("#collapseFilter").removeClass('show');
			$('#grid-content').css('display', 'block');
			$('#groupOfPeriod').jqxButtonGroup('setSelection', getChartPeriodIndex(JSON.parse(data.parameter)[1][0]));
		
			if (JSON.parse(data.parameter)[2] != null)
			Items = JSON.parse(data.parameter)[2][0];
			
			type=JSON.parse(data.parameter)[3][0];
			$("#dropDownType").jqxDropDownList('selectIndex', type ); 	
           
			drawGraph();

		},
		error: function(e) {

			console.log("ERROR : ", e);

		}
	});

	
	$("#button-yearForward").prop('disabled', true);
	$("#button-monthForward").prop('disabled', true);

	for (i = 0; i < allitems.length; i++) {
		$(allitems[i]).jqxCheckBox({ theme: 'dark', width: '100%', height: 26 });
	}
	$("#Clearfilter").jqxButton({ theme: 'dark', height: 30, width: 74 });

	$("#show").jqxButton({ theme: 'dark', height: 30, width: 74 });
	$("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });

	$("#Clearfilter").click(function() {
		uncheckAll();
		checkedItem = 0;
		for (i = 0; i < allitems.length; i++) {
			$(allitems[i]).jqxCheckBox({ disabled: false });
		}
	});

	$("#show").click(function() {
		monthDate = new Date();
		monthDate.setMonth(monthDate.getMonth() - 6);
		monthDate.setHours(0, 0, 0, 0);
		resetActiveChartType();
		resetActiveFontSize();
		resetActiveChartColor();
		resetActiveChartColorTransparency();
		resetActiveChartGrid();
		$("#button-monthBackward").prop('disabled', false);
		$("#button-yearBackward").prop('disabled', false);
		fromNavigation = false;
		if (checkedItem > 0) {
			$("#collapseFilter").removeClass('show');
			$('#grid-content').css('display', 'block');
			drawGraph();
		} else {
			$('#alertFiltter-modal').modal('show');
			$("#collapseFilter").addClass('show');
		}
	});

       $('#jqxCheckBoxQe1').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxQe1");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxQe1")
  			 delete checkedItemid[i];
  		   }
  	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
				 $(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
				    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		  }
  	    enableDisableDropDowns(true);
  	   }
  	   else{
	  		 for(i=0; i<allitems.length; i++)
			   {
				 $(allitems[i]).jqxCheckBox({disabled: false});
		     }
	      enableDisableDropDowns(false);
  	   }
  	 }); 
         $('#jqxCheckBoxQe2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxQe2");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxQe2")
  			 delete checkedItemid[i];
  		   }
  	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
				 $(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
				    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		  }
  	     enableDisableDropDowns(true);
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
	       enableDisableDropDowns(false);
  	   }
  	 }); 
         $('#jqxCheckBoxQe1Qe2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxQe1Qe2");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxQe1Qe2")
  			 delete checkedItemid[i];
  		   }
  	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
				 $(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
				    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		  }
  	      enableDisableDropDowns(true);
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
	       enableDisableDropDowns(false);
  	   }
  	 }); 
         $('#jqxCheckBoxCumQe1').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxCumQe1");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxCumQe1")
  			 delete checkedItemid[i];
  		   }
  	    }
  	   if(checkedItem>=2)
  	   {
	    for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: true});
	     }
	   	 
	  	 for(i=0; i<checkedItemid.length; i++)
		   {
	  		 if(checkedItemid[i]!=null)
			    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		  }
  	      enableDisableDropDowns(true);
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
	      enableDisableDropDowns(false);
  	   }
  	 }); 
         $('#jqxCheckBoxCumQe2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxCumQe2");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxCumQe2")
  			 delete checkedItemid[i];
  		   }
  	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
				 $(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
				    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		  }
  	      enableDisableDropDowns(true);
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
	      enableDisableDropDowns(false);
  	   }
  	 }); 
         $('#jqxCheckBoxCumQe1Qe2').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
  	    {
  	    	checkedItem=checkedItem + 1;
  	    	checkedItemid.push("#jqxCheckBoxCumQe1Qe2");
  	    }
  	    else
  	    {
  	    	checkedItem=checkedItem - 1;
  	   for(i=0; i<checkedItemid.length; i++)
  		   {
  		   if(checkedItemid[i]=="#jqxCheckBoxCumQe1Qe2")
  			 delete checkedItemid[i];
  		   }
  	    }
  	   if(checkedItem>=2)
  	   {
		    for(i=0; i<allitems.length; i++)
			   {
				 $(allitems[i]).jqxCheckBox({disabled: true});
		     }
		   	 
		  	 for(i=0; i<checkedItemid.length; i++)
			   {
		  		 if(checkedItemid[i]!=null)
				    $(checkedItemid[i]).jqxCheckBox({disabled: false});
		  }
  	      enableDisableDropDowns(true);
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
	      enableDisableDropDowns(false);
  	   }
  	 }); 
});

function uncheckAll() {
   for(var i=0; i<allitems.length; i++)
   {$(allitems[i]).jqxCheckBox({checked:false});
   } 
}

function drawGraph() {
	mode = "merge";
	var dataParam;
	var checkedItemValues = [];
	$('#overlayChart').show();

	var fromdate = formatDate(monthDate);
	var todate = formatDate(date);
	$("#mainChart").html("");
	$("#mainChart").css("display", "block");
	
	if (checkDateMonth(monthDate, date)) {
		$("#button-monthForward").prop('disabled', false);
	}
	else {
		$("#button-monthForward").prop('disabled', true);
	}

	if (checkDateYear(monthDate, date)) {
		$("#button-yearForward").prop('disabled', false);
	}
	else {
		$("#button-yearForward").prop('disabled', true);
	}

	var Period = getChartPeriod();
	var type = getSelectedType();
	if (chart != null)
		chart.destroy();

	for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					checkedItemValues.push(checkedItemid[i]);
			}
			

	chart = new ApexCharts(document.querySelector("#mainChart"), Period=='d' ? options_missingDates : optionsWeekly);
	chart.render();
	//return 0;
	
	   if (functionId!=-1)
		{	
			
		dataParam = { 
	        		"fromdate":fromdate,
	        	    "todate":todate,
	        	    "period": "d",
	        	    "type": type,
	        	    "subGroupId1":itemValue[checkedItemValues[0]].subGroupId,
	        	    "groupId1": itemValue[checkedItemValues[0]].GroupId,
	        	    "isFunctionGraph":true,
					"functionId":functionId+1,
					//"removeEmpty1":itemValue[checkedItemValues[0]].subGroupId==2?"true":false
					"removeEmpty1":"true"
     			   };

			if (checkedItemValues.length > 1)
				title = itemValue[checkedItemValues[0]].title + " vs " + itemValue[checkedItemValues[1]].title
			else
				title = itemValue[checkedItemValues[0]].title

			disableOptions(true);
			$.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "/liquidity/getgraphdatabytype",
				data: JSON.stringify(dataParam),
				dataType: 'json',
				timeout: 600000,
				success: function(response) {
					
					startDateF1 = response[0].config.startDate;
					startDateF2 = response[1].config.startDate;

					if (startDateF1 != null)
						startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);
					if (startDateF2 != null)
						startDateF2 = new Date(startDateF2.split("-")[1] + "-" + startDateF2.split("-")[0] + "-" + startDateF2.split("-")[2]);
					var dates = [];

					T1 = response[0].config.displayDescription == null ? itemValue[checkedItemValues[0]].title : response[0].config.displayDescription;
					T2 = response[1].config.displayDescription == null ? itemValue[checkedItemValues[1]].title : response[1].config.displayDescription;
					title = T1 + " vs " + T2;
					if (response[0].config.yAxisFormat != null && response[0].config.yAxisFormat != "") {
						if (response[0].config.yAxisFormat.includes("%")) {
							isdecimal = false;
							if (typeof response[0].config.yAxisFormat.split(".")[1] != 'undefined')
								yaxisformat = response[0].config.yAxisFormat.split("%")[0].split(".")[1].length;
							else
								yaxisformat = 0;
						}
						else {
							if (typeof response[0].config.yAxisFormat.split(".")[1] != 'undefined')
								yaxisformat = response[0].config.yAxisFormat.split(".")[1].length
							else
								yaxisformat = 0

							isdecimal = true;
						}
					}
					else
						yaxisformat = 3;

					var getFormatResult0 = getFormat(response[0].config.dataFormat);
					var getFormatResult1 = getFormat(response[1].config.dataFormat);

					chartDbFontSize = response[0].config.chartSize;
					fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], chartDbFontSize);
					markerSize = checkActiveChartMarker($("#chartMarker").find(".active")[0], response[0].config.chartshowMarkes);
					showGrid = checkActiveChartGrid($("#gridOptions").find(".active")[0], response[0].config.chartShowgrid)
					showLegend	= checkActiveChartLegend($("#gridLegend").find(".active")[0], showLegend);
		
				  chart.updateOptions(getChartDailyOption(title+getTitlePeriodAndType(), showGrid, fontsize, markerSize));

					var dbchartType1 = response[0].config.chartType;
					chartType1 = (getChartType(dbchartType1)[0] != 'area') ? getChartType(dbchartType1)[0] : 'line';

					var dbchartType2 = response[1].config.chartType;
					chartType2 = getChartType(dbchartType2)[0] != 'area' ? getChartType(dbchartType2)[0] : 'line';

					min1 = Math.min.apply(null, response[0].graphResponseDTOLst.map(function(item) {
						return item.y;
					})),
						max1 = Math.max.apply(null, response[0].graphResponseDTOLst.map(function(item) {
							return item.y;
						}));
					min2 = Math.min.apply(null, response[1].graphResponseDTOLst.map(function(item) {
						return item.y;
					})),
						max2 = Math.max.apply(null, response[1].graphResponseDTOLst.map(function(item) {
							return item.y;
						}));

					min = Math.min(min1, min2);
					max = Math.max(max1, max2);
					
					//minvalue = parseFloat((Math.floor(min * 20) / 20).toFixed(2));
					//maxvalue = parseFloat((Math.floor(max * 20) / 20).toFixed(2));
					minvalue = min;
					maxvalue = max;
					var value1 = getMarginLenght(min1); 
					var value2 = getMarginLenght(min2); 
						
					var yaxisformat0 = getFormat(response[0].config.yAxisFormat);
                    var yaxisformat1 = getFormat(response[1].config.yAxisFormat);
                  
					notDecimal=yaxisformat0[1];
					nbrOfDigits=yaxisformat0[0];
					notDecimal1=yaxisformat1[1];
					nbrOfDigits1=yaxisformat1[0];
					
					chartColor = response[0].config.chartColor;
					chartTransparency=response[0].config.chartTransparency;
				  
					var chartConfigSettings={functionId:functionId+1,
											 isDecimal:isdecimal,
											 yAxisFormat0:yaxisformat0,
											 yAxisFormat1:yaxisformat1,
											 fontSize:fontsize,
											 min1:min1,
											 max1:max1,
											 min2:min2,
											 max2:max2,
											 min:min,
											 max:max,
											 minvalue:minvalue,
											 maxvalue:maxvalue,
											 value1:value1,
											 value2:value2,
											 chartType1:chartType1,
											 chartType2:chartType2,
											 getFormatResult0:getFormatResult0,
											 getFormatResult1:getFormatResult1,
											 response:response,
											 Period:Period,
											 chartColor:chartColor,
											 chartTransparency:chartTransparency};
											 	
					updateChartByFunctionIdMissingDates(chartConfigSettings);	
					$('#overlayChart').hide();
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
			});
			/*
			graphHistory = {
				"screenName": "base",
				 "parameter": "[" + JSON.stringify(checkedItemValues) + "," + "[" + JSON.stringify(Period) + "]"+ ",["+JSON.stringify('')+"]," + "[" + JSON.stringify(type) + "]]"
			};

			$.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "/bourse/savegraphhistory",
				data: JSON.stringify(graphHistory),
				dataType: 'json',
				timeout: 600000,
				success: function(response) {
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
			});
				*/
		} 
		else if (checkedItem == 2) {
			
		dataParam = { 
	        		"fromdate":fromdate,
	        	    "todate":todate,
	        	    "period":"d",
	        	    "type": type,
	        	    "subGroupId1":itemValue[checkedItemValues[0]].subGroupId,
	        	    "groupId1": itemValue[checkedItemValues[0]].GroupId,
	        	    "subGroupId2":itemValue[checkedItemValues[1]].subGroupId,
	        	    "groupId2": itemValue[checkedItemValues[1]].GroupId,
	        	  //  "removeEmpty1":itemValue[checkedItemValues[0]].subGroupId==2?"true":false,
	        	   // "removeEmpty2":itemValue[checkedItemValues[1]].subGroupId==2?"true":false
	        	  "removeEmpty1":"true",
	        	  "removeEmpty2":"true"
     			   };
           enableDisableDropDowns(true);
			if (checkedItemValues.length > 1)
				title = itemValue[checkedItemValues[0]].title + " vs " + itemValue[checkedItemValues[1]].title
			else
				title = itemValue[checkedItemValues[0]].title

			disableOptions(true);
			$.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "/liquidity/getgraphdatabytype",
				data: JSON.stringify(dataParam),
				dataType: 'json',
				timeout: 600000,
				success: function(response) {
					startDateF1 = response[0].config.startDate;
					startDateF2 = response[1].config.startDate;

					if (startDateF1 != null)
						startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);
					if (startDateF2 != null)
						startDateF2 = new Date(startDateF2.split("-")[1] + "-" + startDateF2.split("-")[0] + "-" + startDateF2.split("-")[2]);
					var dates = [];

					T1 = response[0].config.displayDescription == null ? itemValue[checkedItemValues[0]].title : response[0].config.displayDescription;
					T2 = response[1].config.displayDescription == null ? itemValue[checkedItemValues[1]].title : response[1].config.displayDescription;
					title = T1 + " vs " + T2;
					if (response[0].config.yAxisFormat != null && response[0].config.yAxisFormat != "") {
						if (response[0].config.yAxisFormat.includes("%")) {
							isdecimal = false;
							if (typeof response[0].config.yAxisFormat.split(".")[1] != 'undefined')
								yaxisformat = response[0].config.yAxisFormat.split("%")[0].split(".")[1].length;
							else
								yaxisformat = 0;
						}
						else {
							if (typeof response[0].config.yAxisFormat.split(".")[1] != 'undefined')
								yaxisformat = response[0].config.yAxisFormat.split(".")[1].length
							else
								yaxisformat = 0

							isdecimal = true;
						}
					}
					else
						yaxisformat = 3;

					var getFormatResult0 = getFormat(response[0].config.dataFormat);
					var getFormatResult1 = getFormat(response[1].config.dataFormat);

					chartDbFontSize = response[0].config.chartSize;
					fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], chartDbFontSize);
					markerSize = checkActiveChartMarker($("#chartMarker").find(".active")[0], response[0].config.chartshowMarkes);
					showGrid = checkActiveChartGrid($("#gridOptions").find(".active")[0], response[0].config.chartShowgrid)
					showLegend	= checkActiveChartLegend($("#gridLegend").find(".active")[0], showLegend);
		
					chart.updateOptions(getChartDailyOption(title+getTitlePeriodAndType(), showGrid, fontsize, markerSize));

					var dbchartType1 = response[0].config.chartType;
					chartType1 = (getChartType(dbchartType1)[0] != 'area') ? getChartType(dbchartType1)[0] : 'line';

					var dbchartType2 = response[1].config.chartType;
					chartType2 = getChartType(dbchartType2)[0] != 'area' ? getChartType(dbchartType2)[0] : 'line';

					min1 = Math.min.apply(null, response[0].graphResponseDTOLst.map(function(item) {
						return item.y;
					})),
						max1 = Math.max.apply(null, response[0].graphResponseDTOLst.map(function(item) {
							return item.y;
						}));
					min2 = Math.min.apply(null, response[1].graphResponseDTOLst.map(function(item) {
						return item.y;
					})),
						max2 = Math.max.apply(null, response[1].graphResponseDTOLst.map(function(item) {
							return item.y;
						}));

					min = Math.min(min1, min2);
					max = Math.max(max1, max2);
					//minvalue = parseFloat((Math.floor(min * 20) / 20).toFixed(2));
					//maxvalue = parseFloat((Math.floor(max * 20) / 20).toFixed(2));
					minvalue = min;
					maxvalue = max;
					 var valueMin = getMarginLenght(min); 
			 		 var valueMax = getMarginLenght(max);  				 	
					
					var yaxisformat0 = getFormat(response[0].config.yAxisFormat);
					
					notDecimal=yaxisformat0[1];
			    	nbrOfDigits=yaxisformat0[0];
					chart.updateOptions({
						series:[{
						name: response[0].config != null ? (response[0].config.displayDescription == null ? '' : response[0].config.displayDescription) : '',
						type:Period=='d' ? chartType1 : 'column',
						data: response[0].graphResponseDTOLst
					}, {
						name: response[1].config != null ? (response[1].config.displayDescription == null ? '' : response[1].config.displayDescription) : '',
						type:Period=='d' ? chartType2 : 'column',
						data: response[1].graphResponseDTOLst
					}],
						xaxis: {
					labels: {
						rotate: -65,
						rotateAlways: true,
						minHeight: 0,
						style: {
							fontSize: '12px',
						},
						formatter: function(value, timestamp, opts) {
							const options = { 
									  day: 'numeric', 
									  month: 'short', 
									  year: 'numeric' 
									};
									const formattedDate = new Date(value).toLocaleDateString('en-US', options).replace(/ /g, '-').replace(',', '');
									
				            return formattedDate;
				          }
					},
					type: 'datetime',
					tickAmount: 19,
					axisBorder: {
						show: true,
						color: '#ffffff',
						height: 3,
						width: '100%',
						offsetX: 0,
						offsetY: 0
					},
				},
						extra: {
							isDecimal: isdecimal,
							yAxisFormat: yaxisformat,
						},
						markers: {
							colors: ["#FFFFFF", "#0000ff", "#ff0000", "#00ff00", "#ffff00", "#ffa500"],
							strokeColors: ["#FFFFFF", "#0000ff", "#ff0000", "#00ff00", "#ffff00", "#ffa500"]
						},
						yaxis: {
							labels: {
								minWidth: 75, maxWidth: 75,
								style: {
									fontSize: fontsize,
								},
								 formatter: function(val, index) {
										 if (yaxisformat0[1])
						  				  return  val.toFixed(yaxisformat0[0]);
						  				else 
						  				  return  val.toFixed(yaxisformat0[0]) + "%";
									      }
							},
							tickAmount: 6,
							min: Math.sign(minvalue) == -1 ? -Math.abs(minvalue) - valueMin : Math.abs(minvalue) - valueMin,
							max: Math.sign(maxvalue) == -1 ? -Math.abs(maxvalue) + valueMax : Math.abs(maxvalue) + valueMax,
							axisBorder: {
								width: 3,
								show: true,
								color: '#ffffff',
								offsetX: 0,
								offsetY: 0
							},
						},
						tooltip: {
							x: {
								show: false,
							},
							y: {
								formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
									if (seriesIndex == 0) {
										if (getFormatResult0[1])
											return value.toFixed(getFormatResult0[0]);
										else
											return value.toFixed(getFormatResult0[0]) + "%";
									} else
										if (seriesIndex == 1) {
											if (getFormatResult1[1])
												return value.toFixed(getFormatResult1[0]);
											else
												return value.toFixed(getFormatResult1[0]) + "%";
										}
								},
								title: {
									formatter: (seriesName) => '',
								},
							},
						},
						
					});
					$('#overlayChart').hide();
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
			});
			
			graphHistory = {
				"screenName": "ecbQeLiquidity",
				 "parameter": "[" + JSON.stringify(checkedItemValues) + "," + "[" + JSON.stringify(Period) + "]"+ ",["+JSON.stringify('')+"]," + "[" + JSON.stringify(type) + "]]"
			};

			$.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "/bourse/savegraphhistory",
				data: JSON.stringify(graphHistory),
				dataType: 'json',
				timeout: 600000,
				success: function(response) {
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
			});

		} else
				 {
					
					title = itemValue[checkedItemValues[0]].title;

					dataParam = {
						"fromdate": fromdate,
						"todate": todate,
						"period":  Period,
						"type": type,
						"subGroupId1": itemValue[checkedItemValues[0]].subGroupId,
						"groupId1": itemValue[checkedItemValues[0]].GroupId,
						"isFunctionGraph":functionId=='-1'?false:true,
						"functionId":functionId,
						"removeEmpty1":"true"
					};
					
					$.ajax({
						type: "POST",
						contentType: "application/json; charset=utf-8",
						url: "/liquidity/getgraphdatabytype",
						data: JSON.stringify(dataParam),
						dataType: 'json',
						timeout: 600000,
						success: function(response) {
						
							newstartdate = new Date();
							startDateF1 = response[0].config.startDate;
							if (startDateF1 != null)
								startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);


							T1 = response[0].config.displayDescription == null ? itemValue[checkedItemValues[0]].title : response[0].config.displayDescription;
							title = T1;
							if (response[0].config.yAxisFormat != null && response[0].config.yAxisFormat != "") {
								if (response[0].config.yAxisFormat.includes("%")) {
									isdecimal = false;
									if (typeof response[0].config.yAxisFormat.split(".")[1] != 'undefined')
										yaxisformat = response[0].config.yAxisFormat.split("%")[0].split(".")[1].length;
									else
										yaxisformat = 0;
								}
								else {
									if (typeof response[0].config.yAxisFormat.split(".")[1] != 'undefined')
										yaxisformat = response[0].config.yAxisFormat.split(".")[1].length
									else
										yaxisformat = 0

									isdecimal = true;
								}
							}
							else
								yaxisformat = 3;

							var dbchartType1 = response[0].config.chartType;
							chartType1 = getChartType(dbchartType1)[0];
							curve1 = getChartType(dbchartType1)[1];
							disableOptions(false);
							var getFormatResult = getFormat(response[0].config.dataFormat);
							chartDbFontSize = response[0].config.chartSize;
							chartTransparency = checkActiveChartColorTransparency($("#chartColorTransparency").find(".active")[0],response[0].config.chartTransparency);
							chartColor = checkActiveChartColor($("#chartColor").find(".active")[0], response[0].config.chartColor);
							fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], chartDbFontSize);
							chartType1 = checkActiveChartType($("#chartTypes").find(".active")[0], chartType1, Period);
							markerSize = checkActiveChartMarker($("#chartMarker").find(".active")[0], response[0].config.chartshowMarkes);
							showGrid = checkActiveChartGrid($("#gridOptions").find(".active")[0], response[0].config.chartShowgrid);
							showLegend	= checkActiveChartLegend($("#gridLegend").find(".active")[0], showLegend);
 
							chart.updateOptions(getChartDailyOption(title+getTitlePeriodAndType(), showGrid, fontsize, markerSize));
							updateChartOption();
							
							min = Math.min.apply(null, response[0].graphResponseDTOLst.map(function(item) {
								return item.y;
							}));
							max = Math.max.apply(null, response[0].graphResponseDTOLst.map(function(item) {
									return item.y;
								}));
							//minvalue = parseFloat((Math.floor(min * 20) / 20).toFixed(2));
							//maxvalue = parseFloat((Math.floor(max * 20) / 20).toFixed(2));
							minvalue = min;
							maxvalue = max;
							
							var yaxisformat = getFormat(response[0].config.yAxisFormat);
							
							notDecimal=yaxisformat[1];
					        nbrOfDigits=yaxisformat[0];
							
							
							var getFormatResult0 = getFormat(response[0].config.dataFormat);
					        var chartConfigSettings={functionId:functionId+1,
											 isDecimal:isdecimal,
											 yAxisFormat:yaxisformat,
											 fontSize:fontsize,
											 min:min,
											 max:max,
											 minvalue:minvalue,
											 maxvalue:maxvalue,
											 chartType1:chartType1,
											 getFormatResult0:getFormatResult0,
											 response:response,
											 Period:Period,
											 chartColor:chartColor,
											 chartTransparency:chartTransparency,
											 checkedItem:checkedItem};
							if(Period=='d')
								updateChartSelectedItemMissingDates(chartConfigSettings);
							else
								updateChartSelectedItem(chartConfigSettings);
						
							$('#overlayChart').hide();

						},
						error: function(e) {

							console.log("ERROR : ", e);

						}
					});
					
					graphHistory = {
						"screenName": "ecbQeLiquidity",
							"parameter": "[" + JSON.stringify(checkedItemValues) + "," + "[" + JSON.stringify(Period) + "]"+ ",["+JSON.stringify('')+"]," + "[" + JSON.stringify(type) + "]]"
					};

					$.ajax({
						type: "POST",
						contentType: "application/json; charset=utf-8",
						url: "/bourse/savegraphhistory",
						data: JSON.stringify(graphHistory),
						dataType: 'json',
						timeout: 600000,
						success: function(response) {
						},
						error: function(e) {

							console.log("ERROR : ", e);

						}
					});
				}

	$("#dateFrom-mainChart").val(fromdate);
	$("#dateTo-mainChart").val(todate);
	
	inGraphNews(getSelectedFields((checkedItemValues.length==0?allItemsSelected(Items):checkedItemValues)));

	
}
function graphfont(fontSize){
		if (typeof min1 != 'undefined' && functionId>=2)
				 updateGraphFont2YAxis(fontSize,min1,max1,min2,max2);
				 else 
				 updateGraphFont(fontSize,minvalue,maxvalue);
		     }


