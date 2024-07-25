
var allitems = ["#jqxCheckBoxFed-17",
				"#jqxCheckBoxFed-18",
				"#jqxCheckBoxEcb-17",
				"#jqxCheckBoxEcb-18",
				"#jqxCheckBoxBoe-17",
				"#jqxCheckBoxBoe-18"];

const graphName="centralBanks";

$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	
     initializeNewsBanner();
	 initializeNavigationButtons();
	 initialiazeItems(allitems,6);
	 initialiazeClearFilterButton();
	 
  	monthDate = new Date();
	monthDate.setMonth(monthDate.getMonth() - 6);
	monthDate.setFullYear((new Date).getFullYear() - 3);
	monthDate.setHours(0, 0, 0, 0);
	
  $("#show").jqxButton({ theme: 'dark', height: 30, width: 74 });

  $("#show").click(function() { 
  	monthDate = new Date();
	monthDate.setMonth(monthDate.getMonth() - 6);
	monthDate.setFullYear((new Date).getFullYear() - 3);
	monthDate.setHours(0, 0, 0, 0);
	
	resetActiveChartType();
	resetActiveFontSize();
	resetActiveChartColor();
	resetActiveChartColorTransparency();
	resetActiveChartGrid();
	$("#button-monthBackward").prop('disabled', false);
	$("#button-yearBackward").prop('disabled', false);
	fromNavigation = false;
	if(checkedItemLeft>0 || checkedItemRight>0)
	{
	  if(checkedItemLeft>0 && checkedItemRight>0)
      {	
    	 $("#collapseFilter").removeClass('show');
    	 $('#grid-content').css('display', 'block');
    	drawGraph();
      } 
       else {
			$('#alertFiltter-modal').modal('show');
			$("#collapseFilter").addClass('show');
		}
    }else 
 		 if (checkedItem > 0) {
			$("#collapseFilter").removeClass('show');
			$('#grid-content').css('display', 'block');
			drawGraph();
		} else {
			$('#alertFiltter-modal').modal('show');
			$("#collapseFilter").addClass('show');
		}
    });
	getGraphHistoryByScreenName(graphName);

});


function drawGraph() {
 	
 	      var graphService = "rates";	
 	      const removeEmpty = false;
  	      getCentralBanksData(graphService,graphName,removeEmpty,true);	
}
function getCentralBanksData(graphService,graphName,removeEmpty,saveHistory){
	
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
			

	chart = new ApexCharts(document.querySelector("#mainChart"), Period=='d' ? options : ((functionId!=-1)?optionsWeekly:optionsWeeklyy));

	chart.render();
	checkedItemValues.sort((a, b) => {
					    // Extract the prefix and the number
					    let [prefixA, numA] = a.split('-');
					    let [prefixB, numB] = b.split('-');
					
					    // Compare the prefixes first
					    if (prefixA < prefixB) return -1;
					    if (prefixA > prefixB) return 1;
					
					    // If prefixes are the same, compare the numbers
					    return parseInt(numA) - parseInt(numB);
					});
	if  (checkedItem == 4) {

		dataParam = [{ 
	        		"fromdate":fromdate,
	        	    "todate":todate,
	        	    "period":"d",
	        	    "type": type,
	        	    "subGroupId1":itemValue[checkedItemValues[0]].subGroupId,
	        	    "groupId1": itemValue[checkedItemValues[0]].GroupId,
	        	    "subGroupId2":itemValue[checkedItemValues[1]].subGroupId,
	        	    "groupId2": itemValue[checkedItemValues[1]].GroupId,
		        	 "removeEmpty1":removeEmpty,
		        	 "removeEmpty2":removeEmpty,
		        	 "factor1":itemValue[checkedItemValues[0]].factor,
					 "factor2":itemValue[checkedItemValues[1]].factor,
     			   },{ 
	        		"fromdate":fromdate,
	        	    "todate":todate,
	        	    "period":"d",
	        	    "type": type,
	        	    "subGroupId1":itemValue[checkedItemValues[2]].subGroupId,
	        	    "groupId1": itemValue[checkedItemValues[2]].GroupId,
	        	    "subGroupId2":itemValue[checkedItemValues[3]].subGroupId,
	        	    "groupId2": itemValue[checkedItemValues[3]].GroupId,
		        	 "removeEmpty1":removeEmpty,
		        	 "removeEmpty2":removeEmpty,
		        	 "factor1":itemValue[checkedItemValues[2]].factor,
					 "factor2":itemValue[checkedItemValues[3]].factor,
     			   }];
           enableDisableDropDowns(true);
			if (checkedItemValues.length > 1)
				title = itemValue[checkedItemValues[0]].title + " vs " + itemValue[checkedItemValues[1]].title
			else
				title = itemValue[checkedItemValues[0]].title

			disableOptions(true);
			$.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "/"+graphService+"/getgraphdatabytypes",
				data: JSON.stringify(dataParam),
				dataType: 'json',
				timeout: 600000,
				success: function(response) {
				renderMoreThanTwoSeries(response);
					$('#overlayChart').hide();
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
			});

		
	}
	else if  (checkedItem == 6) {
	
			
		dataParam = [{ 
	        		"fromdate":fromdate,
	        	    "todate":todate,
	        	    "period":"d",
	        	    "type": type,
	        	    "subGroupId1":itemValue[checkedItemValues[0]].subGroupId,
	        	    "groupId1": itemValue[checkedItemValues[0]].GroupId,
	        	    "subGroupId2":itemValue[checkedItemValues[1]].subGroupId,
	        	    "groupId2": itemValue[checkedItemValues[1]].GroupId,
		        	 "removeEmpty1":removeEmpty,
		        	 "removeEmpty2":removeEmpty,
		        	 "factor1":itemValue[checkedItemValues[0]].factor,
					 "factor2":itemValue[checkedItemValues[1]].factor,
     			   },{ 
	        		"fromdate":fromdate,
	        	    "todate":todate,
	        	    "period":"d",
	        	    "type": type,
	        	    "subGroupId1":itemValue[checkedItemValues[2]].subGroupId,
	        	    "groupId1": itemValue[checkedItemValues[2]].GroupId,
	        	    "subGroupId2":itemValue[checkedItemValues[3]].subGroupId,
	        	    "groupId2": itemValue[checkedItemValues[3]].GroupId,
		        	 "removeEmpty1":removeEmpty,
		        	 "removeEmpty2":removeEmpty,
		        	 "factor1":itemValue[checkedItemValues[2]].factor,
					 "factor2":itemValue[checkedItemValues[3]].factor,
     			   },{ 
	        		"fromdate":fromdate,
	        	    "todate":todate,
	        	    "period":"d",
	        	    "type": type,
	        	    "subGroupId1":itemValue[checkedItemValues[4]].subGroupId,
	        	    "groupId1": itemValue[checkedItemValues[4]].GroupId,
	        	    "subGroupId2":itemValue[checkedItemValues[5]].subGroupId,
	        	    "groupId2": itemValue[checkedItemValues[5]].GroupId,
		        	 "removeEmpty1":removeEmpty,
		        	 "removeEmpty2":removeEmpty,
		        	 "factor1":itemValue[checkedItemValues[4]].factor,
					 "factor2":itemValue[checkedItemValues[5]].factor,
     			   }];
           enableDisableDropDowns(true);
			if (checkedItemValues.length > 1)
				title = itemValue[checkedItemValues[0]].title + " vs " + itemValue[checkedItemValues[1]].title
			else
				title = itemValue[checkedItemValues[0]].title

			disableOptions(true);
			$.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "/"+graphService+"/getgraphdatabytypes",
				data: JSON.stringify(dataParam),
				dataType: 'json',
				timeout: 600000,
				success: function(response) {
				renderMoreThanTwoSeries(response);
					$('#overlayChart').hide();
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
			});

		
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
		        	 "removeEmpty1":removeEmpty,
		        	 "removeEmpty2":removeEmpty,
		        	 "factor1":itemValue[checkedItemValues[0]].factor,
					 "factor2":itemValue[checkedItemValues[1]].factor,
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
				url: "/"+graphService+"/getgraphdatabytype",
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
					//var valueMin = getMarginLenght(min); 
			 		//var valueMax = getMarginLenght(max);  		
			 				 	
					 const values = addMarginToMinMax(min, max, 5);
				     var valueMin = values
				     var valueMax = values; 	
				     var calculatedMinValue = Math.sign(minvalue) == -1 ? -Math.abs(minvalue) - valueMin : Math.abs(minvalue) - valueMin;
				     graphService=typeof graphService!='undefined'?graphService:'';
				     calculatedMinValue = PositiveGraphs.includes(graphService)?( Math.sign(calculatedMinValue) == -1 ?0:calculatedMinValue): calculatedMinValue;
				   
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
					    colors: ["#FFFFFF", "#ff0000",  "#0000ff", "#00ff00", "#ffff00", "#ffa500"],

						markers: {
							colors: ["#FFFFFF", "#ff0000", "#0000ff", "#00ff00", "#ffff00", "#ffa500"],
							strokeColors: ["#FFFFFF", "#ff0000", "#0000ff", "#00ff00", "#ffff00", "#ffa500"],
						    size: [0,2],
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
							min: calculatedMinValue,
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
											   {
												   if(value!=null)
													return value.toFixed(getFormatResult1[0]) + "%";

											   }
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

		} else
				 {
					//enableDisableDropDowns(false);
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
						//"removeEmpty1":itemValue[checkedItemValues[0]].subGroupId==2?"true":false
						"removeEmpty1":removeEmpty,
						"factor1":itemValue[checkedItemValues[0]].factor,

					};
					
					$.ajax({
						type: "POST",
						contentType: "application/json; charset=utf-8",
						url: "/"+graphService+"/getgraphdatabytype",
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
							chartType1 = checkActiveChartType($("#chartTypes").find(".active")[0], chartType1, Period);
							chartColor = chartType1=='line'?"#ffffff":checkActiveChartColor($("#chartColor").find(".active")[0], response[0].config.chartColor);
							fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], chartDbFontSize);
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
							//if(Period=='d')
								updateChartSelectedItemMissingDates(chartConfigSettings);
							//else
							//	updateChartSelectedItem(chartConfigSettings);
						    checkIfRenderFlag(graphName,itemValue[checkedItemValues[0]]);
							$('#overlayChart').hide();

						},
						error: function(e) {

							console.log("ERROR : ", e);

						}
					});
					
				}

		    (saveHistory)?saveGraphHistory(graphName,checkedItemValues,Period,type):null;
		    
	$("#dateFrom-mainChart").val(formatedDate(fromdate));
	$("#dateTo-mainChart").val(formatedDate(todate));
	
	inGraphNews(getSelectedFields((checkedItemValues.length==0?allItemsSelected(Items):checkedItemValues),itemValue));

}

function formatedDate(inputDate) {
    const [year, month] = inputDate.split('-');
    const monthAbbreviation = new Date(inputDate).toLocaleString('en-US', { month: 'short' }).toUpperCase();
	const yearLastTwoDigits = year.slice(-2);
	
    return monthAbbreviation + '-' + yearLastTwoDigits;
}

 function getfactorDescriptionById(factorId) {
    const matchingObject = factorId_description.find(item => item.factorId === factorId);
    return matchingObject ? matchingObject.name : null;
}
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function adjustMinMax(min, max) {
    period=(max-min)/6;
    let values=[];
    increment=min;
    for (var i = 0; i < 7; i++) {
		
		values.push(increment)
		increment=increment+period;
		
		}
		
    let result = normalizeAroundZero(values);
    let updatedValues = result.values
  //  min = min > 0 ? min - period: -(period - min);
  //  max = max > 0 ? max + period: -(period + max);
   min = Math.min(...updatedValues);
   max = Math.max(...updatedValues);
    return { min: min, max: max };
}

function normalizeAroundZero(numbers) {
    let closest = numbers[0];
    let minDiff = Math.abs(numbers[0]);
    let normalized ='';
    for (let i = 1; i < numbers.length; i++) {
        const diff = Math.abs(numbers[i]);
        if (diff < minDiff) {
            closest = numbers[i];
            minDiff = diff;
        }
    }
   if(Math.min(...numbers)>0)
   {
	    normalized = numbers.map(num => (num==closest)?num - closest:num + closest/2);
   }else if(Math.max(...numbers)<0)
   {
	    normalized = numbers.map(num => (num==closest)?num - closest:  -(closest/2 - num));
   }
   else
        normalized = numbers.map(num => num - closest);

    return { values: normalized };
}
function renderMoreThanTwoSeries(response){	
				let checkedItemValues = checkedItemid.filter(item => item != null);
				let arrayColors = []; // This array will store the colors based on subGroupId
				let subGroupTracker = new Set(); // This set will track which subGroupIds have been processed
				
				checkedItemValues.forEach(itemId => {
				    let subGroupId = itemValue[itemId].subGroupId;
				    if (!subGroupTracker.has(subGroupId)) {
				        subGroupTracker.add(subGroupId);
				        let color1, color2;
				
				        switch (subGroupId) {
				            case "1":
				                color1 = '#fcb3b3'; // red
				                color2 = '#ff0000'; // light red
				                break;
				            case "2":
				                color1 = '#ffdeb3'; // orange
				                color2 = '#ff9200'; // light orange
				                break;
				            case "3":
				                color1 = '#f9afee'; // pink
				                color2 = '#ff00d9'; // light pink
				                break;
				            default:
				                color1 = '#808080'; // defaultColor1 (gray)
				                color2 = '#d3d3d3'; // defaultColor2 (light gray)
				        }
				
				        arrayColors.push(color1, color2);
				    }
				});
					const dates = [];
					const series = [];
					const minValues = [];
					const maxValues = [];
					let title = '';
					let isdecimal = true;
					let yaxisformat = 3;
					let chartDbFontSize = response[0].config.chartSize;
					let fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], chartDbFontSize);
					let markerSize = checkActiveChartMarker($("#chartMarker").find(".active")[0], response[0].config.chartshowMarkes);
					let showGrid = checkActiveChartGrid($("#gridOptions").find(".active")[0], response[0].config.chartShowgrid);
					let showLegend = checkActiveChartLegend($("#gridLegend").find(".active")[0], "legend-true");

					response.forEach((item, index) => {
						
					    let startDate = item.config.startDate;
					    if (startDate != null) {
					        startDate = new Date(startDate.split("-")[1] + "-" + startDate.split("-")[0] + "-" + startDate.split("-")[2]);
					    }
					
					    let displayDescription = item.config.displayDescription == null ? itemValue[checkedItemValues[index]].title : item.config.displayDescription;
					    title += displayDescription + (index < response.length - 1 ? " vs " : "");
					
					    if (item.config.yAxisFormat != null && item.config.yAxisFormat != "") {
					        if (item.config.yAxisFormat.includes("%")) {
					            isdecimal = false;
					            yaxisformat = typeof item.config.yAxisFormat.split(".")[1] != 'undefined' ? item.config.yAxisFormat.split("%")[0].split(".")[1].length : 0;
					        } else {
					            yaxisformat = typeof item.config.yAxisFormat.split(".")[1] != 'undefined' ? item.config.yAxisFormat.split(".")[1].length : 0;
					            isdecimal = true;
					        }
					    } else {
					        yaxisformat = 3;
					    }
					
					    let chartType = getChartType(item.config.chartType)[0] != 'area' ? getChartType(item.config.chartType)[0] : 'line';
					    series.push({
					        name: displayDescription,
					        type: 'd' == 'd' ? chartType : 'column',
					        data: item.graphResponseDTOLst
					    });
					
					    minValues.push(Math.min.apply(null, item.graphResponseDTOLst.map(it => it.y)));
					    maxValues.push(Math.max.apply(null, item.graphResponseDTOLst.map(it => it.y)));
					});
					
					let min = Math.min(...minValues);
					let max = Math.max(...maxValues);
					let minvalue = min;
					let maxvalue = max;
					const values = addMarginToMinMax(min, max, 5);
					let valueMin = values;
					let valueMax = values;
					let calculatedMinValue = Math.sign(minvalue) == -1 ? -Math.abs(minvalue) - valueMin : Math.abs(minvalue) - valueMin;
					graphService = typeof graphService != 'undefined' ? graphService : '';
					calculatedMinValue = PositiveGraphs.includes(graphService) ? (Math.sign(calculatedMinValue) == -1 ? 0 : calculatedMinValue) : calculatedMinValue;
					
					chart.updateOptions(getChartDailyOption(title + getTitlePeriodAndType(), showGrid, fontsize, markerSize));
					
					chart.updateOptions({
					    series: series,
					    xaxis: {
					        labels: {
					            rotate: -65,
					            rotateAlways: true,
					            minHeight: 0,
					            style: {
					                fontSize: '12px',
					            },
					       formatter: function(value, timestamp, opts) {
								    const date = new Date(value);
								    const options = { 
								        year: '2-digit',
								        month: 'short'
								    };
								    const formattedDate = date.toLocaleDateString('en-US', options);
								
								    // Ensure the format is "Month-Year"
								    const [month, year] = formattedDate.split(' ');
								    return `${month}-${year}`;
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
					    colors: arrayColors,
					    markers: {
					        colors: arrayColors,
					        strokeColors: arrayColors,
					        size: [0, 2],
					    },
					    yaxis: {
					        labels: {
					            minWidth: 75,
					            maxWidth: 75,
					            style: {
					                fontSize: fontsize,
					            },
					            formatter: function(val, index) {
					                if (yaxisformat[1]) {
					                    return val.toFixed(yaxisformat[0]);
					                } else {
					                    return val.toFixed(yaxisformat[0]) + "%";
					                }
					            }
					        },
					        tickAmount: 6,
					        min: calculatedMinValue,
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
					                const formatResult = getFormat(response[seriesIndex].config.dataFormat);
					                if (seriesIndex == 0) {
					                    if (formatResult[1])
					                        return value.toFixed(formatResult[0]);
					                    else
					                        return value.toFixed(formatResult[0]) + "%";
					                } else {
					                    if (formatResult[1])
					                        return value.toFixed(formatResult[0]);
					                    else
											   {
												   if(value!=null)
													return value.toFixed(formatResult[0]) + "%";

											   }
					                }
					            },
					            title: {
					                formatter: (seriesName) => '',
					            },
					        },
					    },
					});
					}