var checkedItem = 0;
var checkedItemid = [];
var monthDate = new Date();
monthDate.setMonth(monthDate.getMonth() - 3);
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
	
  var allitems=["#jqxCheckBoxCopper",
			    "#jqxCheckBoxAluminum",
			    "#jqxCheckBoxSteel",
			    "#jqxCheckBoxLumber"];

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
	    
	   if(functionId>-1 && checkedItem==1)
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
  	  
  	   }
	    
		   functionId=index;
		   drawGraph();
	 } 
	});
	
	$.ajax({
		contentType: "application/json",
		url: "/bourse/findgraphhistorybyscreenname/base",
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
		monthDate.setMonth(monthDate.getMonth() - 3);
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
	   $('#jqxCheckBoxCopper').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxCopper");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxCopper")
					 delete checkedItemid[i];
				   }
	    }
  	    if(checkedItem>=2 || (functionId>-1 && checkedItem==1))
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
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxAluminum').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxAluminum");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxAluminum")
					 delete checkedItemid[i];
				   }
	    }
  	    if(checkedItem>=2 || (functionId>-1 && checkedItem==1))
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
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxSteel').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxSteel");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxSteel")
					 delete checkedItemid[i];
				   }
	    }
  	    if(checkedItem>=2 || (functionId>-1 && checkedItem==1))
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
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
     $('#jqxCheckBoxLumber').on('change', function (event) {
  	   var checked = event.args.checked;
  	   if(checked)
	    {
	    	checkedItem=checkedItem + 1;
	    	checkedItemid.push("#jqxCheckBoxLumber");
	    }
	    else {
	    	checkedItem=checkedItem - 1;
			   for(i=0; i<checkedItemid.length; i++)
				   {
				   if(checkedItemid[i]=="#jqxCheckBoxLumber")
					 delete checkedItemid[i];
				   }
	    }
  	    if(checkedItem>=2 || (functionId>-1 && checkedItem==1))
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
  	  
  	   }
  	   else{
  		 for(i=0; i<allitems.length; i++)
		   {
			 $(allitems[i]).jqxCheckBox({disabled: false});
	     }
  	   }
  	 }); 
     
});

function uncheckAll() {
	      $("#jqxCheckBoxCopper").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxAluminum").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxSteel").jqxCheckBox({checked: false });
    	  $("#jqxCheckBoxLumber").jqxCheckBox({checked: false });
    	  
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
	var MovingAverageTypeIfSelected =  '';
	
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

	

	chart = new ApexCharts(document.querySelector("#mainChart"), Period=='d' ? options : optionsWeekly);
	chart.render();
	//return 0;
	   if (functionId!=-1)
		{	
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					checkedItemValues.push(checkedItemid[i]);
			}
			
		dataParam = { 
	        		"fromdate":fromdate,
	        	    "todate":todate,
	        	    "period": "d",
	        	    "type": type,
	        	    "subGroupId1":itemValue[checkedItemValues[0]].subGroupId,
	        	    "groupId1": itemValue[checkedItemValues[0]].GroupId,
	        	    "isFunctionGraph":true,
					"functionId":functionId+1
     			   };

			if (checkedItemValues.length > 1)
				title = itemValue[checkedItemValues[0]].title + " vs " + itemValue[checkedItemValues[1]].title
			else
				title = itemValue[checkedItemValues[0]].title

			disableOptions(true);
			$.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "/metals/getgraphdatabytype",
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
					minvalue = parseFloat((Math.floor(min * 20) / 20).toFixed(2));
					maxvalue = parseFloat((Math.floor(max * 20) / 20).toFixed(2));
					 var value1 = getlength(min1)>=3?10:0.1; 
										var value2 = getlength(min2)>=3?10:0.1; 
										
					      	    	    	chart.updateOptions({
					      	    	    	  extra:{
													isDecimal: isdecimal,
													yAxisFormat:yaxisformat,
												},
												 colors: ["#FFFFFF", "#FF0000"],
					      	    	    		 markers: {
					      	    	    		   colors: ["#FFFFFF", "#FF0000"],
					      	    	    		   strokeColors:["#FFFFFF", "#FF0000"]
					      	    	    		 },
					     				       yaxis: [{
														 labels: {
						     				    		 minWidth: 75,maxWidth: 75,
						 				        		 style: {
						 						        	  fontSize: fontsize,
						 						        	 }
						 				        	  },
					     				          tickAmount: 6,
					     				    	  min:Math.sign(min1)==-1 ? -Math.abs(min1)-value1 : Math.abs(min1)-value1,
					     				    	  max:Math.sign(max1)==-1 ? -Math.abs(max1)+value1 : Math.abs(max1)+value1,
					     				    			  axisBorder: {
					     					                  width: 3,
					     					                  show: true,
					     					                  color: "#FFFFFF",
					     					                  offsetX: 0,
					     					                  offsetY: 0
					     					              },
					     				    			 },
														{
 													  opposite: true,
						     				    	  labels: {
						     				    		 minWidth: 75,maxWidth: 75,
						 				        		 style: {
						 						        	  fontSize: fontsize,
						 						        	 }
						 				        	  },
					     				          tickAmount: 6,
					     				    	  min:Math.sign(min2)==-1 ? -Math.abs(min2)-value2 : Math.abs(min2)-value2,
					     				    	  max:Math.sign(max2)==-1 ? -Math.abs(max2)+value2 : Math.abs(max2)+value2,
					     				    			  axisBorder: {
					     					                  width: 3,
					     					                  show: true,
					     					                  color: "#FF0000",
					     					                  offsetX: 0,
					     					                  offsetY: 0
					     					              },
					     				    			 }],
												  tooltip: {
													  x: {
					    						          show: false,
					    						      },
					    							  y: {
					    								  formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
					    									  if(seriesIndex == 0)
												  				{
												  				if (getFormatResult0[1])
												  				  return  value.toFixed(getFormatResult0[0]);
												  				else 
												  				  return  value.toFixed(getFormatResult0[0]) + "%";
												  				}else 
												  					 if(seriesIndex == 1){
												  					  if (getFormatResult1[1])
												  						  return  value.toFixed(getFormatResult1[0]);
												  						else 
												  							 return  value.toFixed(getFormatResult1[0]) + "%";
												  					 }
					    								    },
					    								    title: {
					    							              formatter: (seriesName) => '',
					    							          },
					    					      },
					    						}
				      	    	    		}); 
					chart.updateSeries([{
						name: response[0].config != null ? (response[0].config.displayDescription == null ? '' : response[0].config.displayDescription) : '',
						type:Period=='d' ? chartType1 : 'column',
						data: response[0].graphResponseDTOLst
					}, {
						name: response[1].config != null ? (response[1].config.displayDescription == null ? '' : response[1].config.displayDescription) : '',
						type:Period=='d' ? chartType2 : 'column',
						data: response[1].graphResponseDTOLst
					}])
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
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					checkedItemValues.push(checkedItemid[i]);
			}
		dataParam = { 
	        		"fromdate":fromdate,
	        	    "todate":todate,
	        	    "period":"d",
	        	    "type": type,
	        	    "subGroupId1":itemValue[checkedItemValues[0]].subGroupId,
	        	    "groupId1": itemValue[checkedItemValues[0]].GroupId,
	        	    "subGroupId2":itemValue[checkedItemValues[1]].subGroupId,
	        	    "groupId2": itemValue[checkedItemValues[1]].GroupId
     			   };

			if (checkedItemValues.length > 1)
				title = itemValue[checkedItemValues[0]].title + " vs " + itemValue[checkedItemValues[1]].title
			else
				title = itemValue[checkedItemValues[0]].title

			disableOptions(true);
			$.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "/metals/getgraphdatabytype",
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
					minvalue = parseFloat((Math.floor(min * 20) / 20).toFixed(2));
					maxvalue = parseFloat((Math.floor(max * 20) / 20).toFixed(2));
					chart.updateOptions({
						extra: {
							isDecimal: isdecimal,
							yAxisFormat: yaxisformat,
						},
						markers: {
							colors: ["#F0AB2E", "#0097FE", "#F9E79F", "#7e95d9", "#FAD7A0", "#a3a3a5"],
							strokeColors: ["#F0AB2E", "#0097FE", "#F9E79F", "#7e95d9", "#FAD7A0", "#a3a3a5"]
						},
						yaxis: {

							labels: {
								minWidth: 75, maxWidth: 75,
								style: {
									fontSize: fontsize,
								}
							},
							tickAmount: 6,
							min: Math.sign(minvalue) == -1 ? -Math.abs(minvalue) - 0.1 : Math.abs(minvalue) - 0.1,
							max: Math.sign(maxvalue) == -1 ? -Math.abs(maxvalue) + 0.1 : Math.abs(maxvalue) + 0.1,
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
						}
					});
					chart.updateSeries([{
						name: response[0].config != null ? (response[0].config.displayDescription == null ? '' : response[0].config.displayDescription) : '',
						type:Period=='d' ? chartType1 : 'column',
						data: response[0].graphResponseDTOLst
					}, {
						name: response[1].config != null ? (response[1].config.displayDescription == null ? '' : response[1].config.displayDescription) : '',
						type:Period=='d' ? chartType2 : 'column',
						data: response[1].graphResponseDTOLst
					}])
					$('#overlayChart').hide();
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
			});
			
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

		} else
				 {
					for (i = 0; i < checkedItemid.length; i++) {
						if (checkedItemid[i] != null)
							checkedItemValues.push(checkedItemid[i]);
					}
					title = itemValue[checkedItemValues[0]].title;

					dataParam = {
						"fromdate": fromdate,
						"todate": todate,
						"period":  Period,
						"type": type,
						"subGroupId1": itemValue[checkedItemValues[0]].subGroupId,
						"groupId1": itemValue[checkedItemValues[0]].GroupId,
						"isFunctionGraph":functionId=='-1'?false:true,
						"functionId":functionId
					};
					disableOptions(false);
					$.ajax({
						type: "POST",
						contentType: "application/json; charset=utf-8",
						url: "/metals/getgraphdatabytype",
						data: JSON.stringify(dataParam),
						dataType: 'json',
						timeout: 600000,
						success: function(response) {
						 if(functionId!='-1')
							{
						
		      	    	        	startDateF1=response[0].config.startDate;
		      	    	        	startDateF2=response[1].config.startDate;
		      	    	        	 if (startDateF1!=null)
		      	    	        	startDateF1 = new Date(startDateF1.split("-")[1]+"-"+startDateF1.split("-")[0]+"-"+startDateF1.split("-")[2]);
		      	    	        	 if (startDateF2!=null)
		      	    	        	 startDateF2 = new Date(startDateF2.split("-")[1]+"-"+startDateF2.split("-")[0]+"-"+startDateF2.split("-")[2]);
		      	    	            var dates=[];
		      	    	
		      	    	        	T1=response[0].config.displayDescription==null?itemValue[checkedItemValues[0]].title:response[0].config.displayDescription;
		      	    	        	T2=response[1].config.displayDescription==null?itemValue[checkedItemValues[1]].title:response[1].config.displayDescription;
		      	    	        	title= T1 +" vs "+ T2;

		      	    	        	 if (response[0].config.yAxisFormat!=null && response[0].config.yAxisFormat!="")
			      	    	           { 
			      	    	        	 if (response[0].config.yAxisFormat.includes("%"))
				      	    	           { isdecimal= false;
				      	    	        	   if (typeof response[0].config.yAxisFormat.split(".")[1] != 'undefined')
				      	    	        		 yaxisformat=response[0].config.yAxisFormat.split("%")[0].split(".")[1].length;
					      	    	            	else
					      	    	            		yaxisformat=0;
				      	    	           }
			      	    	           else 
			      	    	            	{
			      	    	        	    if (typeof response[0].config.yAxisFormat.split(".")[1] != 'undefined')
			      	    	            	yaxisformat=response[0].config.yAxisFormat.split(".")[1].length
			      	    	            	else 
			      	    	            		yaxisformat=0
			      	    	            		
			      	    	            	 isdecimal= true;	
			      	    	            	}
			      	    	           }
			      	    	           else
			      	    	        	 yaxisformat=3;
		      	    	        	
		      	    	        	var getFormatResult0 = getFormat(response[0].config.dataFormat);
		      	    	        	var getFormatResult1 = getFormat(response[1].config.dataFormat);
		      	    	        	 
		      	    	          
		      	    	       	    var getFormatResult = getFormat(response[0].config.dataFormat);
		      	    	       	    chartDbFontSize = response[0].config.chartSize;
		      	    	        	fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0],chartDbFontSize);
	    	    	          	    showLegend	= checkActiveChartLegend($("#gridLegend").find(".active")[0], showLegend);

		      	    	  
		      	    	          	chart.updateOptions(getChartDailyOption(title,response[0].config.chartShowgrid,fontsize,response[0].config.chartshowMarkes));
		      	    	       
		      	    	        	
		      	    	          
		      	    	        	
			      	    	          var dbchartType1=response[0].config.chartType;
			      	    	            chartType1 =(getChartType(dbchartType1)[0]!='area')?getChartType(dbchartType1)[0]:'line';
			      	    	          
			      	    	          var dbchartType2=response[1].config.chartType;
			      	    	            chartType2 =getChartType(dbchartType2)[0]!='area'?getChartType(dbchartType2)[0]:'line';
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
		      	    	         
			      	    	            min=Math.min(min1,min2);
										max=Math.max(max1,max2);
										 minvalue = parseFloat((Math.floor(min*20)/20).toFixed(2));
					      	    	     maxvalue = parseFloat((Math.floor(max*20)/20).toFixed(2));
					      	    	    	chart.updateOptions({
					      	    	    	  extra:{
													isDecimal: isdecimal,
													yAxisFormat:yaxisformat,
												},
												// colors: ["#FFFFFF", "#FF0000"],
					      	    	    		 markers: {
					      	    	    		   	colors: ["#F0AB2E", "#0097FE", "#F9E79F", "#7e95d9", "#FAD7A0", "#a3a3a5"],
													strokeColors: ["#F0AB2E", "#0097FE", "#F9E79F", "#7e95d9", "#FAD7A0", "#a3a3a5"]
					      	    	    		 },
					     				       yaxis: [{
														 labels: {
						     				    		 minWidth: 75,maxWidth: 75,
						 				        		 style: {
						 						        	  fontSize: fontsize,
						 						        	 }
						 				        	  },
					     				          tickAmount: 6,
					     				    	  min:Math.sign(min1)==-1 ? -Math.abs(min1)-0.1 : Math.abs(min1)-0.1,
					     				    	  max:Math.sign(max1)==-1 ? -Math.abs(max1)+0.1 : Math.abs(max1)+0.1,
					     				    			  axisBorder: {
					     					                  width: 3,
					     					                  show: true,
					     					                  color:"#F0AB2E",
					     					                  offsetX: 0,
					     					                  offsetY: 0
					     					              },
					     				    			 },
														{
 													  opposite: true,
						     				    	  labels: {
						     				    		 minWidth: 75,maxWidth: 75,
						 				        		 style: {
						 						        	  fontSize: fontsize,
						 						        	 }
						 				        	  },
					     				          tickAmount: 6,
					     				    	  min:Math.sign(min2)==-1 ? -Math.abs(min2)-0.1 : Math.abs(min2)-0.1,
					     				    	  max:Math.sign(max2)==-1 ? -Math.abs(max2)+0.1 : Math.abs(max2)+0.1,
					     				    			  axisBorder: {
					     					                  width: 3,
					     					                  show: true,
					     					                  color: "#0097FE",
					     					                  offsetX: 0,
					     					                  offsetY: 0
					     					              },
					     				    			 }],
												  tooltip: {
													  x: {
					    						          show: false,
					    						      },
					    							  y: {
					    								  formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
					    									  if(seriesIndex == 0)
												  				{
												  				if (getFormatResult0[1])
												  				  return  value.toFixed(getFormatResult0[0]);
												  				else 
												  				  return  value.toFixed(getFormatResult0[0]) + "%";
												  				}else 
												  					 if(seriesIndex == 1){
												  					  if (getFormatResult1[1])
												  						  return  value.toFixed(getFormatResult1[0]);
												  						else 
												  							 return  value.toFixed(getFormatResult1[0]) + "%";
												  					 }
					    								    },
					    								    title: {
					    							              formatter: (seriesName) => '',
					    							          },
					    					      },
					    						}
				      	    	    		});     
			      	    	           
		      	    	          chart.updateSeries([{
							          name: response[0].config.displayDescription==null?itemValue[checkedItemValues[0]].title:response[0].config.displayDescription,
							          type: chartType1,
							          data: response[0].graphResponseDTOLst
							        },{
							          name: response[1].config.displayDescription==null?itemValue[checkedItemValues[1]].title:response[1].config.displayDescription,
							          type: chartType2,
							          data:response[1].graphResponseDTOLst
							        }])
							        $('#overlayChart').hide();
							}
							else{
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
							})),
								max = Math.max.apply(null, response[0].graphResponseDTOLst.map(function(item) {
									return item.y;
								}));
							minvalue = parseFloat((Math.floor(min * 20) / 20).toFixed(2));
							maxvalue = parseFloat((Math.floor(max * 20) / 20).toFixed(2));
							var value = getlength(minvalue)>=3?10:0.1; 
								
							chart.updateOptions({
								stroke: {
									colors: chartType1 == "area" ? ["#ffffff"] : [chartColor == '#44546a' ? '#2e75b6' : chartColor],
								},
								markers: {
									colors: chartType1 == "area" ? "#ffffff" : [chartColor == '#44546a' ? '#2e75b6' : chartColor],
									strokeColors: chartType1 == "area" ? "#ffffff" : [chartColor == '#44546a' ? '#2e75b6' : chartColor]
								},
								extra: {
									isDecimal: isdecimal,
									yAxisFormat: yaxisformat,
								},
								yaxis: {
									labels: {
										minWidth: 75, maxWidth: 75,
										style: {
											fontSize: fontsize,
										}
									},
									tickAmount: 6,
									min: Math.sign(minvalue) == -1 ? -Math.abs(minvalue) - value : Math.abs(minvalue) - value,
									max: Math.sign(maxvalue) == -1 ? -Math.abs(maxvalue) + value : Math.abs(maxvalue) + value,
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
											if (getFormatResult[1])
												return value.toFixed(getFormatResult[0]);
											else
												return value.toFixed(getFormatResult[0]) + "%";
										},
										title: {
											formatter: (seriesName) => '',
										},
									},
								}
							});
							chart.updateSeries([{
								name: response[0].config != null ? (response[0].config.displayDescription == null ? '' : response[0].config.displayDescription) : '',
								type: chartType1,
								data: response[0].graphResponseDTOLst
							}]);

						
							}
							$('#overlayChart').hide();

						},
						error: function(e) {

							console.log("ERROR : ", e);

						}
					});
					
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
				}

	$("#dateFrom-mainChart").val(fromdate);
	$("#dateTo-mainChart").val(todate);
	
	
	 inGraphNews(getSelectedFields((checkedItemValues.length==0?allItemsSelected(Items):checkedItemValues)));

	
}
function graphfont(fontSize) {
	updateGraphFont(fontSize, minvalue, maxvalue);
}


