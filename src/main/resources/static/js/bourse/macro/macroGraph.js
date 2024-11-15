 var allitems= [ 
'#jqxCheckBox-37-1-16',
'#jqxCheckBox-37-2-16',
'#jqxCheckBox-38-1-16',
'#jqxCheckBox-38-2-16',
'#jqxCheckBox-39-1-16',
'#jqxCheckBox-39-2-16',
'#jqxCheckBox-40-1-16',
'#jqxCheckBox-40-2-16',
'#jqxCheckBox-41-1-16',
'#jqxCheckBox-41-2-16',
'#jqxCheckBox-42-1-16',
'#jqxCheckBox-42-2-16',
'#jqxCheckBox-44-1-16',
'#jqxCheckBox-44-2-16',
'#jqxCheckBox-45-1-16',
'#jqxCheckBox-45-2-16',
'#jqxCheckBox-46-1-16',
'#jqxCheckBox-46-2-16',
'#jqxCheckBox-47-1-16',
'#jqxCheckBox-47-2-16',
'#jqxCheckBox-37-3-16',
'#jqxCheckBox-38-3-16',
'#jqxCheckBox-39-3-16',
'#jqxCheckBox-40-3-16',
'#jqxCheckBox-41-3-16',
'#jqxCheckBox-42-3-16',
'#jqxCheckBox-44-3-16',
'#jqxCheckBox-45-3-16',
'#jqxCheckBox-46-3-16',
'#jqxCheckBox-47-3-16',
'#jqxCheckBox-37-4-16',
'#jqxCheckBox-38-4-16',
'#jqxCheckBox-39-4-16',
'#jqxCheckBox-40-4-16',
'#jqxCheckBox-41-4-16',
'#jqxCheckBox-42-4-16',
'#jqxCheckBox-44-4-16',
'#jqxCheckBox-45-4-16',
'#jqxCheckBox-46-4-16',
'#jqxCheckBox-47-4-16',
];
var subgroupsitems= [ 
'#jqxCheckBox-37-1',
'#jqxCheckBox-38-1',
'#jqxCheckBox-39-1',
'#jqxCheckBox-40-1',
'#jqxCheckBox-41-1',
'#jqxCheckBox-42-1',
'#jqxCheckBox-44-1',
'#jqxCheckBox-45-1',
'#jqxCheckBox-46-1',
'#jqxCheckBox-47-1',
'#jqxCheckBox-37-3',
'#jqxCheckBox-38-3',
'#jqxCheckBox-39-3',
'#jqxCheckBox-40-3',
'#jqxCheckBox-41-3',
'#jqxCheckBox-42-3',
'#jqxCheckBox-44-3',
'#jqxCheckBox-45-3',
'#jqxCheckBox-46-3',
'#jqxCheckBox-47-3',
];	
	
var dataGroupId='';
var groupContainer='';
var subgroup1Container='';
var subgroup2Container='';

var roundedValues ='';
var yaxisformat0 ='';

const factorId_description =  [
                { name: 'FCST', factorId: '14' },
                { name: 'FLASH', factorId: '15' },
                { name: 'FINAL', factorId: '16' }];
                
const graphName="macroGraph";

$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	
     initializeNewsBanner();
	 initializeNavigationButtons();
	 $("#show").jqxButton({ theme: 'dark', height: 30, width: 74 });
	  $.ajax({
	        contentType: "application/json",
	        url: "/macro/get-macro-display-final",
	        dataType: 'json',
	        async:true,
	        cache: false,
	        timeout: 600000,
	        success: function (data) {
				
	        	monthDate.setFullYear((new Date).getFullYear() - 3);
				monthDate.setHours(0, 0, 0, 0);
				
               // Looping from 1 to 5
		for (let i = 0; i < data.length; i++) {
			if(data[i].groupId!=dataGroupId)
				{	dataGroupId = data[i].groupId;
					country= getCountryImagePath(data[i].groupId.toString());
				 	groupContainer+="<div class='align-middle pr-2'>"+
				 		"<img src='"+country[0]+"' width='70px'>"+"<div class='align-middle font-weight-bold fs-7'>"+country[1]+"</div>";
				}
				isVisibleClass=(data[i].isVisible)?"d-block":"d-none";
				
				checkBox="jqxCheckBox-"+data[i].groupId+'-'+data[i].subgroupId;
				groupContainer+='<div id="'+checkBox+'" class="'+isVisibleClass+' jqx-checkbox-items align-middle"></div>';
			
			if(data[i].subgroupId!=1)	
			groupContainer+="</div>";	
		}
   			  $('#countries').append(groupContainer);
			
	        	for (j = 0; j < data.length; j++) {
					items="#jqxCheckBox-"+data[j].groupId+'-'+data[j].subgroupId;
		    	  	$(items).jqxCheckBox({ theme: 'dark', width: '100%', height: 26 });
				}
				 initialiazeItem(subgroupsitems,1);
				 //initializeShowFilterButton();
				 initialiazeClearFilterButtons(subgroupsitems);
    
	   getGraphHistoryByScreenName("macroGraph");
			},
			
	        error: function (e) {
	        	
					  console.log("ERROR : ", e);

	        }
	    }); 
	 
	
	
     
  
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
	    	 
});

function initialiazeClearFilterButtons(items){
	
	$("#clearfilter").jqxButton({ theme: 'dark', height: 30, width: 74 });
	
	$("#clearfilter").click(function() {
		uncheckAllItems(items);
		checkedItem = 0;
		for (i = 0; i < items.length; i++) {
			$(items[i]).jqxCheckBox({ disabled: false });
		}
	});
}
function uncheckAllItems(items) {
	     for(var i=0; i<items.length; i++)
		   {$(items[i]).jqxCheckBox({checked:false});
	       } 
}
function drawGraph() {
 	
 	      var graphService = "macro";	
 	      const removeEmpty = false;
  	      macroGraph(graphService,"macroGraph",removeEmpty,true);	
}

 function macroGraph(graphService,graphName,removeEmpty,saveHistory){
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

	for (let i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					{checkedItemValues.push(checkedItemid[i]+'-16');
					 value=checkedItemid[i].split('-');
					 if(value[2]=='1')
					 {
					   checkedItemValues.push(value[0]+'-'+value[1]+'-'+'2-16');
					 }
					 else{
						 checkedItemValues.push(value[0]+'-'+value[1]+'-'+'4-16');
					 }
					}
			}
			

	//chart = new ApexCharts(document.querySelector("#mainChart"), Period=='d' ? options_missingDates : optionsWeekly);
	chart = new ApexCharts(document.querySelector("#mainChart"), Period=='d' ? options : ((functionId!=-1)?optionsWeekly:optionsWeeklyy));

	chart.render();
	
	 if (checkedItem == 1) {
			
		dataParam = { 
	        		"fromdate":fromdate,
	        	    "todate":todate,
	        	    "period":"d",
	        	    "type": type,
	        	    "factor1":itemValue[checkedItemValues[0]].factor,
		 		    "factor2":itemValue[checkedItemValues[1]].factor,
	        	    "subGroupId1":itemValue[checkedItemValues[0]].subGroupId,
	        	    "groupId1": itemValue[checkedItemValues[0]].GroupId,
	        	    "subGroupId2":itemValue[checkedItemValues[1]].subGroupId,
	        	    "groupId2": itemValue[checkedItemValues[1]].GroupId,
		            "removeEmpty1":removeEmpty,
		        	"removeEmpty2":removeEmpty
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
				url: "/"+graphService+"/getgraphdata",
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
					
					flagImage="<img src='"+getCountryImagePath(itemValue[checkedItemValues[0]].GroupId)[0]+"' width='70px'>";
					
					title =  T1 + " vs " + T2;
					title="";
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

					//chartDbFontSize = response[0].config.chartSize;
					chartDbFontSize = '14px';
					fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], chartDbFontSize);
					markerSize = checkActiveChartMarker($("#chartMarker").find(".active")[0], response[0].config.chartshowMarkes);
					showGrid = checkActiveChartGrid($("#gridOptions").find(".active")[0], response[0].config.chartShowgrid)
					showLegend	= checkActiveChartLegend($("#gridLegend").find(".active")[0], showLegend);

					chart.updateOptions(getChartDailyOption(title+getTitlePeriodAndType(), showGrid, fontsize, markerSize));

					var dbchartType1 = response[0].config.chartType;
					chartType1 = (getChartType(dbchartType1)[0] != 'area') ? getChartType(dbchartType1)[0] : 'line';

					var dbchartType2 = response[1].config.chartType;
					chartType2 = getChartType(dbchartType2)[0] != 'area' ? getChartType(dbchartType2)[0] : 'line';

					let yValues1 = response[0].graphResponseDTOLst.map(function(item) {
					    return item.y;
					}).filter(function(y) {
					    return y !== null; // Filter out null values
					});
					
					let min1 = Math.min.apply(null, yValues1);
					
						max1 = Math.max.apply(null, response[0].graphResponseDTOLst.map(function(item) {
							return item.y;
						}));
					// Assuming response[1].graphResponseDTOLst is your array
					let yValues2 = response[1].graphResponseDTOLst.map(function(item) {
					    return item.y;
					}).filter(function(y) {
					    return y !== null; // Filter out null values
					});
					
					let min2 = Math.min.apply(null, yValues2);

						max2 = Math.max.apply(null, response[1].graphResponseDTOLst.map(function(item) {
							return item.y;
						}));

					min = Math.min(min1, min2);
					max = Math.max(max1, max2);
					
					min= min > 50 ? min - 50 : -(50 - min);
					max= max > 50 ? max - 50 : -(50 - max);
					
					 
					minvalue = min;
					maxvalue = max;
				
					 let selectedValue=(Math.abs(min)>=Math.abs(max)?Math.abs(min):Math.abs(max));
					 const values = addMarginToMinMax(min, max, 15);
					 
					 calculatedMin = min > 0 ? min - values : -(values - min);
					 calculatedMax= max > 0 ? max + values : -(values + max);
					 
					 roundedValues = adjustMinMax(calculatedMin,calculatedMax);
					 
				     graphService=typeof graphService!='undefined'?graphService:'';
				   
					 yaxisformat0 = getFormat(response[0].config.yAxisFormat);
					
					notDecimal=yaxisformat0[1];
			    	nbrOfDigits=yaxisformat0[0];
			    	
					for (let i = 0; i < response[0].graphResponseDTOLst.length; i++) {
					    let data = response[0].graphResponseDTOLst[i];
					    let y = parseFloat(data.y);
					    if (y !== null && !isNaN(y)) {
					        data.y = y > 50 ? y - 50 : -(50 - y);
					    }
					}
					
					for (let i = 0; i < response[1].graphResponseDTOLst.length; i++) {
					    let data = response[1].graphResponseDTOLst[i];
					    let y = parseFloat(data.y); 
					    if (y !== null && !isNaN(y)) {
					        data.y = y > 50 ? y - 50 : -(50 - y);
					    }
					}
					let isMaxItems1 =  response[0].graphResponseDTOLst.filter(function(item) {
					    return item.ismax === "1";
					});
					let isMaxItems2 =  response[1].graphResponseDTOLst.filter(function(item) {
					    return item.ismax === "1";
					});
					value1=isMaxItems1[0].y + 50;
					if (getFormatResult0[1])
										value1=	 value1.toFixed(getFormatResult0[0]);
										else
										value1=	 value1.toFixed(getFormatResult0[0]) + "%";
										
					value2=isMaxItems2[0].y + 50;
						if (getFormatResult1[1])
												value2=	 value2.toFixed(getFormatResult1[0]);
											else
												value2=	 value2.toFixed(getFormatResult1[0]) + "%";
						
						let maxcalculated=Math.sign(maxvalue) == -1 ? -Math.abs(maxvalue) + selectedValue : Math.abs(maxvalue) + selectedValue;			
					
					$('#legendfalse').addClass("active");
					$('#legendtrue').removeClass("active");
					areValuesClose(isMaxItems1[0].y,isMaxItems2[0].y)
							    .then(areClose => {
									var offsetYValue1=30;
									var offsetYValue2=20;
									if(areClose){
										offsetYValue1=35;
										offsetYValue2=15;
									}
					chart.updateOptions({
						series:[{
						name: response[0].config != null ? (response[0].config.displayDescription == null ? '' : response[0].config.displayDescription) : '',
						type:'line',
						data: response[0].graphResponseDTOLst
					}, {
						name: response[1].config != null ? (response[1].config.displayDescription == null ? '' : response[1].config.displayDescription) : '',
						type: 'column',
						data: response[1].graphResponseDTOLst
					}],
					title: {
					text: '',
					align: 'center',
					margin: 10,
					offsetY: 0,
					style: {
						fontWeight: 'bold',
					},
				},
					chart: {
						
				     /* toolbar: {
				       // show: false,
				      },
				        zoom: {
							    enabled: false
							  }*/
				      },
						xaxis: {
					labels: {
						rotate: -65,
						rotateAlways: true,
						minHeight: 0,
						style: {
							fontSize: fontsize,
						},
					
					},
				//	type: 'datetime',
					tickAmount: 19,
					axisBorder: {
						show: true,
						color: '#ffffff',
						height: 3,
						width: '100%',
						offsetX: 0,
						offsetY: 0
					},
					   axisTicks: {
				          show: false,
				          borderType: 'solid',
				          color: '#78909C',
				          height: 6,
				          offsetX: 0,
				          offsetY: 0
				      },
				},
						extra: {
							isDecimal: isdecimal,
							yAxisFormat: yaxisformat,
						},
						colors: ["#FFFFFF", "#ffc000"],

						markers: {
							colors: ["#FFFFFF", "#0000ff", "#ff0000", "#00ff00", "#ffff00", "#ffa500"],
							strokeColors: ["#FFFFFF", "#0000ff", "#ff0000", "#00ff00", "#ffff00", "#ffa500"],
							shape: 'square',
							// size: 2,
						},
						yaxis: {
							labels: {
								minWidth: 75, maxWidth: 75,
								style: {
									fontSize: fontsize,
								},
								 formatter: function(val, index) {
										 val = val  + 50;
										 if (yaxisformat0[1])
						  				  return  val.toFixed(yaxisformat0[0]);
						  				else 
						  				  return  val.toFixed(yaxisformat0[0]) + "%";
									      }
							},
							tickAmount: 6,
						
							min:roundedValues.min,
							max:roundedValues.max,
							
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
									 value = value  + 50;
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
						annotations: {
					         yaxis: [
						      {
						        label: {
						          text: " "
						        },
						        y: -50,
						        y2: 0,
						        borderColor: "#FF0000",
						        fillColor: "#ff758b",
						        opacity: 0.3,	
						     //   offsetX: -300,
						        width: '100%',
						      },
						      
						    ],
					         points: [
					      {
					         x: isMaxItems1[0].x,
					         y: isMaxItems1[0].y,
					        marker: {
					          size: 8,
					          fillColor: "#ffffff00",
					          strokeColor: "#FF00FF",
					          radius: 6
					        },
					        label: {
					         borderColor: "#ffffff00",
					          offsetY: offsetYValue1,
					          //offsetY: 0,
					          offsetX: 80,
					          style: {
					            color: "#FF00FF",
					            background:  "#00000000",
					          },
					
					          text: toTitleCase(isMaxItems1[0].x.split('-')[0]+' Manuf  ' + toTitleCase(getfactorDescriptionById(isMaxItems1[0].factor.toString())+' '+value1))
					        }
					      },
					        
					           {
					         x: isMaxItems2[0].x,
					         y: isMaxItems2[0].y,
					        marker: {
					          size: 8,
					          fillColor: "#ffffff00",
					          strokeColor: "#FF00FF",
					          radius: 6
					        },
					        label: {
					         borderColor: "#ffffff00",
					           offsetY: offsetYValue2,
					   		  // offsetY:0,
					     	   offsetX: 85,
					          style: {
					            color: "#FF00FF",
					            background:  "#00000000",
					          },
					
					          text: toTitleCase(isMaxItems2[0].x.split('-')[0]+' Services ' +toTitleCase(getfactorDescriptionById(isMaxItems2[0].factor.toString())+' '+value2))
					        }
					      },
					      
					    ],
					    
					      },legend: {
						   show:false,
				    	  },
					});
					
					disableChartFont(false);
					$('#overlayChart').hide();
				    $("#mainChart-title").empty();
				    
				    graphTitle=T1+" and "+T2.split("FINAL")[1];
				    graphTitle=graphTitle.toUpperCase().replace(/\bFINAL\b/g, '').replace(/SERVICES/g, '<span style="color:#ffc000">Services</span>').replace(/MANUFACTURING/g, 'Manuf').replace(/AND/g, 'and')

					$("#mainChart-title").append('<div id="title-image" style="position: absolute;top: 20px;left: 350px;height: 60px;" class="title-style"><img height="50" class="pr-2" src=\''+getCountryImagePath(itemValue[checkedItemValues[0]].GroupId)[0]+'\' >'+graphTitle+'</div>')
				 })
							    .catch(error => {
							        console.error('Error processing data:', error);
							    });
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
				
			});

		} 
		    (saveHistory)?saveGraphHistory(graphName,checkedItemid,Period,type):null;
    
	$("#dateFrom-mainChart").val(formatedDate(fromdate));
	$("#dateTo-mainChart").val(formatedDate(todate));
	
	// inGraphNews(getSelectedFields((checkedItemValues.length==0?allItemsSelected(Items):checkedItemValues),itemValue));

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