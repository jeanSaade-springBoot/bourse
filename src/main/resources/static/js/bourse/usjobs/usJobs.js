 var allitems= [ 
	"#jqxCheckBoxinitial-77",
	"#jqxCheckBoxfinal-77",
	"#jqxCheckBoxinitial-78",
	"#jqxCheckBoxsurv-78",
	"#jqxCheckBoxrev1-79",
	"#jqxCheckBoxinitial-79",
	"#jqxCheckBoxsurv-79",
];
var allitemsLeft= ["#jqxCheckBoxinitial-77","#jqxCheckBoxinitial-78","#jqxCheckBoxinitial-79",];	
var allitemsRight= ["#jqxCheckBoxfinal-77","#jqxCheckBoxfinal-78","#jqxCheckBoxfinal-79",];		
var allitemsExtra= ["#jqxCheckBoxrev1-79",];		
var dataGroupId='';
var groupContainer='';
var subgroup1Container='';
var subgroup2Container='';
var checkedItemidExtra=[];
var checkedItemExtra = 0;
var roundedValues ='';
var yaxisformat0 ='';
               
const graphName="usjobs";

$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	
     initializeNewsBanner();
	 initializeNavigationButtons();
	 $("#show").jqxButton({ theme: 'dark', height: 30, width: 74 });

	 initialiazeItemsLeft(allitemsLeft,1);
	 initialiazeClearFilterButtons(allitemsLeft);
    
	 initialiazeItemsRight(allitemsRight,1);				
	 initialiazeClearFilterButtons(allitemsRight);
	 
	 initialiazeItemsExtra(allitemsExtra, 1);
	 initialiazeClearFilterButtons(allitemsExtra);
	 
    monthDate.setMonth(monthDate.getMonth() - 6);
	monthDate.setFullYear((new Date).getFullYear() - 3);
	monthDate.setHours(0, 0, 0, 0);
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
		if(checkedItemLeft>0 || checkedItemRight>0 || checkedItemExtra>0)
		{
		  	
	    	 $("#collapseFilter").removeClass('show');
	    	 $('#grid-content').css('display', 'block');
	    	drawGraph();
			
	    }else {
				$('#alertFiltter-modal').modal('show');
				$("#collapseFilter").addClass('show');
			}
	   });
	   
	 getGraphHistoryByScreenName("usjobs");
	
	    	 
});
function initialiazeItemsExtra(items, numberOfItems){
	for (i = 0; i < items.length; i++) {
		$(items[i]).jqxCheckBox({ theme: 'dark', width: '100%', height: 26 });
	}
	 	 
  $('.extra >.jqx-checkbox').on('change', function (event) {
    var $checkbox = $(this);
    var checked = event.args.checked;
    var checkboxId = $checkbox.attr('id');
    Items = "";
    if (checked) {
        checkedItemExtra = checkedItemExtra + 1;
        checkedItemidExtra.push("#" + checkboxId);
    } else {
        checkedItemExtra = checkedItemExtra - 1;
        checkedItemidExtra = checkedItemidExtra.filter(function (id) {
            return id !== "#" + checkboxId;
        });
    }

    if (checkedItemExtra >= numberOfItems) {
        for (i = 0; i < items.length; i++) {
            $(items[i]).jqxCheckBox({ disabled: true });
        }

        for (i = 0; i < checkedItemidExtra.length; i++) {
            if (checkedItemidExtra[i] != null) {
                $(checkedItemidExtra[i]).jqxCheckBox({ disabled: false });
            }
        }
        enableDisableDropDowns(true);
    } else {
        for (i = 0; i < items.length; i++) {
            $(items[i]).jqxCheckBox({ disabled: false });
        }
        enableDisableDropDowns(false);
    }
});

}
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
 	
 	      var graphService = "usjobs";	
 	      const removeEmpty = false;
  	      usJobsGraph(graphService,"usjobs",removeEmpty,true);	
}

 function usJobsGraph(graphService,graphName,removeEmpty,saveHistory){
	mode = "merge";
	var dataParam;
	var checkedItemValues = [];
	var isFlash=false;
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
    checkedItemid=[];
	for (let i = 0; i < checkedItemidLeft.length; i++) {
		checkedItemid.push(checkedItemidLeft[i])
	}
	for (let i = 0; i < checkedItemidRight.length; i++) {
		checkedItemid.push(checkedItemidRight[i])
	}
	for (let i = 0; i < checkedItemidExtra.length; i++) {
		checkedItemid.push(checkedItemidExtra[i])
	}
	for (let i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					{checkedItemValues.push(checkedItemid[i]);
					 if(checkedItemid[i].split('-').length==4)
					 {	isFlash=true;
						
					 }
					}
			}
			

	chart = new ApexCharts(document.querySelector("#mainChart"), Period=='d' ? options : ((functionId!=-1)?optionsWeekly:optionsWeeklyy));

	chart.render();
	if ((checkedItemLeft  == 1 && checkedItemRight == 1 && checkedItemExtra == 1) )
	 {   
	      const groupId=itemValue[checkedItemValues[0]].GroupId;

		   dataParam = { 
		 		        		"fromdate":fromdate,
		 		        	    "todate":todate,
		 		        	    "period":"d",
		 		        	    "subGroupId1":1,
		 		        	    "groupId1": groupId,
		 		        	    "subGroupId2":2,
		 		        	    "groupId2": groupId,
		 		        	    "subGroupId3":3,
		 		        	    "groupId3": groupId,
		 		        	    "subGroupId4":4,
		 		        	    "groupId4": groupId,
		 		        	    
		 	     			   };	  
		 	     			    
		   enableDisableDropDowns(true);
			/*if (checkedItemValues.length > 1)
				title = itemValue[checkedItemValues[0]].title + " vs " + itemValue[checkedItemValues[1]].title
			else
				title = itemValue[checkedItemValues[0]].title*/
			title='';
			disableOptions(true);
			$.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "/"+graphService+"/get-graph-data",
				data: JSON.stringify(dataParam),
				dataType: 'json',
				timeout: 600000,
				success: function(response) {
					startDateF1 = response[0].config.startDate;
					startDateF2 = response[1].config.startDate;
					startDateF3 = response[2].config.startDate;
					startDateF4 = response[3].config.startDate;
					
					if (startDateF1 != null)
						startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);
					if (startDateF2 != null)
						startDateF2 = new Date(startDateF2.split("-")[1] + "-" + startDateF2.split("-")[0] + "-" + startDateF2.split("-")[2]);
					if (startDateF3 != null)
						startDateF3 = new Date(startDateF3.split("-")[1] + "-" + startDateF3.split("-")[0] + "-" + startDateF3.split("-")[2]);
					if (startDateF4 != null)
						startDateF4 = new Date(startDateF4.split("-")[1] + "-" + startDateF4.split("-")[0] + "-" + startDateF4.split("-")[2]);
							
					var dates = [];

					Item=itemValue[checkedItemValues[0]].GroupId;
					flagImage="<img src='"+getCountryImagePath(Item)[0]+"' width='70px'>";
					
					T1 = response[0].config.displayDescription == null ? itemValue[checkedItemValues[0]].title : response[0].config.displayDescription;

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
				    var getFormatResult2 = getFormat(response[2].config.dataFormat);
				    var getFormatResult3 = getFormat(response[3].config.dataFormat);

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

					var dbchartType3 = response[1].config.chartType;
					chartType3 = getChartType(dbchartType3)[0] != 'area' ? getChartType(dbchartType3)[0] : 'line';
					
					var dbchartType4 = response[1].config.chartType;
					chartType4 = getChartType(dbchartType4)[0] != 'area' ? getChartType(dbchartType3)[0] : 'line';


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
					min3 = Math.min.apply(null, response[2].graphResponseDTOLst.map(function(item) {
						return item.y;
					})),
					max3 = Math.max.apply(null, response[2].graphResponseDTOLst.map(function(item) {
							return item.y;
						}));
				    min4 = Math.min.apply(null, response[3].graphResponseDTOLst.map(function(item) {
						return item.y;
					})),
					max4 = Math.max.apply(null, response[3].graphResponseDTOLst.map(function(item) {
							return item.y;
						}));
						
					min = Math.min(min1, min2, min3, min4);
					max = Math.max(max1, max2, max3, max4);
					
					//minvalue = parseFloat((Math.floor(min * 20) / 20).toFixed(2));
					//maxvalue = parseFloat((Math.floor(max * 20) / 20).toFixed(2));
					minvalue = min;
					maxvalue = max;
			
					var value1 = getMarginLenght(min1); 
					var value2 = getMarginLenght(min2); 
					var value3 = getMarginLenght(min3); 
					var value4 = getMarginLenght(min4); 
					
					var yaxisformat0 = getFormat(response[0].config.yAxisFormat);
                    var yaxisformat1 = getFormat(response[1].config.yAxisFormat);
                    var yaxisformat2 = getFormat(response[2].config.yAxisFormat);
                    var yaxisformat3 = getFormat(response[3].config.yAxisFormat);

					notDecimal=yaxisformat0[1];
					nbrOfDigits=yaxisformat0[0];
					notDecimal1=yaxisformat1[1];
					nbrOfDigits1=yaxisformat1[0];
					notDecimal2=yaxisformat2[1];
					nbrOfDigits2=yaxisformat2[0];
					notDecimal3=yaxisformat3[1];
					nbrOfDigits3=yaxisformat3[0];
					
					
					if (getFormatResult0[1])
						value1 = value1.toFixed(getFormatResult0[0]);
					else
						value1 = value1.toFixed(getFormatResult0[0]) + "%";

					if (getFormatResult1[1])
						value2 = value2.toFixed(getFormatResult1[0]);
					else
						value2 = value2.toFixed(getFormatResult1[0]) + "%";

					if (getFormatResult2[1])
						value3 = value3.toFixed(getFormatResult2[0]);
					else
						value3 = value3.toFixed(getFormatResult2[0]) + "%";
						
					if (getFormatResult3[1])
						value4 = value4.toFixed(getFormatResult3[0]);
					else
						value4 = value4.toFixed(getFormatResult3[0]) + "%";

					
					$('#legendfalse').addClass("active");
					$('#legendtrue').removeClass("active");
					processDataAndAddNewEndDates(response)
							    .then(newEndDate => {
					chart.updateOptions({
						series:[{
						name: response[0].config != null ? (response[0].config.displayDescription == null ? '' : response[0].config.displayDescription) : '',
						type:'column',
						data: response[0].graphResponseDTOLst
					}, {
						name: response[1].config != null ? (response[1].config.displayDescription == null ? '' : response[1].config.displayDescription) : '',
						type: 'column',
						data: response[1].graphResponseDTOLst
					},{
						name: response[2].config != null ? (response[2].config.displayDescription == null ? '' : response[2].config.displayDescription) : '',
						type: 'column',
						data: response[2].graphResponseDTOLst
					},{
						name: response[3].config != null ? (response[3].config.displayDescription == null ? '' : response[3].config.displayDescription) : '',
						type: 'column',
						data: response[3].graphResponseDTOLst
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
						colors: ["#ffc000","#37eb34", "#00D4EB","#ff99ff", ],

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
									if (seriesIndex == 0) {
										if (getFormatResult0[1])
											if (value !== null && value !== undefined) {
											    return value.toFixed(getFormatResult0[0]);
											} else {
											    return ''; // Or a fallback value
											}
											else
											return value.toFixed(getFormatResult0[0]) + "%";
									} else
										if (seriesIndex == 1) {
											if (getFormatResult1[1])
												if (value !== null && value !== undefined) {
												    return value.toFixed(getFormatResult1[0]);
												} else {
												    return ''; // Or a fallback value
												}
											else
												return value.toFixed(getFormatResult1[0]) + "%";
										}
										else
										if (seriesIndex == 2) {
											if (getFormatResult2[1])
												if (value !== null && value !== undefined) {
												    return value.toFixed(getFormatResult2[0]);
												} else {
												    return ''; // Or a fallback value
												}
											else
												return value.toFixed(getFormatResult2[0]) + "%";
										}
								},
								title: {
									formatter: (seriesName) => '',
								},
							},
						},
						legend: {
						   show:false,
				    	  },
					});
					
					disableChartFont(false);
					$('#overlayChart').hide();
				    $("#mainChart-title").empty();
				    
				    graphTitle=T1+" vs REV1 vs INITIAL vs SURVEY"; 
				    graphTitle=graphTitle.toUpperCase().replace(/REV1/g, '<span style="color:#37eb34">REV1</span>').replace(/INITIAL/g, '<span style="color:#00D4EB">INITIAL</span>').replace(/SURVEY/g, '<span style="color:#ff99ff">Survey</span>').replace(/MANUFACTURING/g, 'Manuf').replace(/VS/g, 'vs')

					$("#mainChart-title").append('<div id="title-image" style="position: absolute;top: 20px;left: 350px;height: 50px;" class="title-style">'+graphTitle+'</div>')
				})
							    .catch(error => {
							        console.error('Error processing data:', error);
							    });		
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
				
			});

	 }else
	  if ((checkedItemLeft  == 1 && checkedItemRight == 1) )
	 {   
	      const groupId=itemValue[checkedItemValues[0]].GroupId;

		   dataParam = { 
		 		        		"fromdate":fromdate,
		 		        	    "todate":todate,
		 		        	    "period":"d",
		 		        	    "subGroupId1":1,
		 		        	    "groupId1": groupId,
		 		        	    "subGroupId2":2,
		 		        	    "groupId2": groupId,
		 		        	    "subGroupId3":3,
		 		        	    "groupId3": groupId,
		 	     			   };  
		 	     			    
		   enableDisableDropDowns(true);
			/*if (checkedItemValues.length > 1)
				title = itemValue[checkedItemValues[0]].title + " vs " + itemValue[checkedItemValues[1]].title
			else
				title = itemValue[checkedItemValues[0]].title*/
			title='';
			disableOptions(true);
			$.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "/"+graphService+"/get-graph-data",
				data: JSON.stringify(dataParam),
				dataType: 'json',
				timeout: 600000,
				success: function(response) {
					startDateF1 = response[0].config.startDate;
					startDateF2 = response[1].config.startDate;
					startDateF3 = response[1].config.startDate;
					if (startDateF1 != null)
						startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);
					if (startDateF2 != null)
						startDateF2 = new Date(startDateF2.split("-")[1] + "-" + startDateF2.split("-")[0] + "-" + startDateF2.split("-")[2]);
					if (startDateF3 != null)
						startDateF3 = new Date(startDateF3.split("-")[1] + "-" + startDateF3.split("-")[0] + "-" + startDateF3.split("-")[2]);
						
					var dates = [];

					Item=itemValue[checkedItemValues[0]].GroupId;
					flagImage="<img src='"+getCountryImagePath(Item)[0]+"' width='70px'>";
					
					T1 = response[0].config.displayDescription == null ? itemValue[checkedItemValues[0]].title : response[0].config.displayDescription;

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
				    var getFormatResult2 = getFormat(response[2].config.dataFormat);

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

					var dbchartType3 = response[1].config.chartType;
					chartType2 = getChartType(dbchartType3)[0] != 'area' ? getChartType(dbchartType3)[0] : 'line';


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
					min3 = Math.min.apply(null, response[2].graphResponseDTOLst.map(function(item) {
						return item.y;
					})),
					max3 = Math.max.apply(null, response[2].graphResponseDTOLst.map(function(item) {
							return item.y;
						}));
					min = Math.min(min1, min2, min3);
					max = Math.max(max1, max2, max3);
					
					//minvalue = parseFloat((Math.floor(min * 20) / 20).toFixed(2));
					//maxvalue = parseFloat((Math.floor(max * 20) / 20).toFixed(2));
					minvalue = min;
					maxvalue = max;
			
					var value1 = getMarginLenght(min1); 
					var value2 = getMarginLenght(min2); 
					var value3 = getMarginLenght(min3); 
					
					var yaxisformat0 = getFormat(response[0].config.yAxisFormat);
                    var yaxisformat1 = getFormat(response[1].config.yAxisFormat);
                    var yaxisformat2 = getFormat(response[1].config.yAxisFormat);
                    
					notDecimal=yaxisformat0[1];
					nbrOfDigits=yaxisformat0[0];
					notDecimal1=yaxisformat1[1];
					nbrOfDigits1=yaxisformat1[0];
					notDecimal2=yaxisformat2[1];
					nbrOfDigits2=yaxisformat2[0];
					
					let isMaxItems1 =  response[0].graphResponseDTOLst.filter(function(item) {
					    return item.ismax === "1";
					});
					let isMaxItems2 =  response[1].graphResponseDTOLst.filter(function(item) {
					    return item.ismax === "1";
					});
					let isMaxItems3 =  response[2].graphResponseDTOLst.filter(function(item) {
					    return item.ismax === "1";
					});
					if (getFormatResult0[1])
						value1 = value1.toFixed(getFormatResult0[0]);
					else
						value1 = value1.toFixed(getFormatResult0[0]) + "%";

					if (getFormatResult1[1])
						value2 = value2.toFixed(getFormatResult1[0]);
					else
						value2 = value2.toFixed(getFormatResult1[0]) + "%";

					if (getFormatResult2[1])
						value3 = value3.toFixed(getFormatResult2[0]);
					else
						value3 = value3.toFixed(getFormatResult2[0]) + "%";

					
					$('#legendfalse').addClass("active");
					$('#legendtrue').removeClass("active");
					processDataAndAddNewEndDates(response)
							    .then(newEndDate => {
					chart.updateOptions({
						series:[{
						name: response[0].config != null ? (response[0].config.displayDescription == null ? '' : response[0].config.displayDescription) : '',
						type:'column',
						data: response[0].graphResponseDTOLst
					}, {
						name: response[1].config != null ? (response[1].config.displayDescription == null ? '' : response[1].config.displayDescription) : '',
						type: 'column',
						data: response[1].graphResponseDTOLst
					},{
						name: response[2].config != null ? (response[2].config.displayDescription == null ? '' : response[2].config.displayDescription) : '',
						type: 'column',
						data: response[2].graphResponseDTOLst
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
						colors: ["#ffc000", "#00D4EB","#ff99ff", ],

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
									if (seriesIndex == 0) {
										if (getFormatResult0[1])
											if (value !== null && value !== undefined) {
											    return value.toFixed(getFormatResult0[0]);
											} else {
											    return ''; // Or a fallback value
											}
											else
											return value.toFixed(getFormatResult0[0]) + "%";
									} else
										if (seriesIndex == 1) {
											if (getFormatResult1[1])
												if (value !== null && value !== undefined) {
												    return value.toFixed(getFormatResult1[0]);
												} else {
												    return ''; // Or a fallback value
												}
											else
												return value.toFixed(getFormatResult1[0]) + "%";
										}
										else
										if (seriesIndex == 2) {
											if (getFormatResult2[1])
												if (value !== null && value !== undefined) {
												    return value.toFixed(getFormatResult2[0]);
												} else {
												    return ''; // Or a fallback value
												}
											else
												return value.toFixed(getFormatResult2[0]) + "%";
										}
								},
								title: {
									formatter: (seriesName) => '',
								},
							},
						},
						legend: {
						   show:false,
				    	  },
					});
					
					disableChartFont(false);
					$('#overlayChart').hide();
				    $("#mainChart-title").empty();
				    TValue = (groupId==77)?"JOLTS":((groupId==78)?"ADP":((groupId==79)?"NON-FARM PAYROLLS":""));

				    graphTitle=TValue+" "+T1+" vs INITIAL vs SURVEY";
				    graphTitle=graphTitle.replace(/\bFINAL\b/g, '').toUpperCase().replace(/INITIAL/g, '<span style="color:#00D4EB">INITIAL</span>').replace(/SURVEY/g, '<span style="color:#ff99ff">Survey</span>').replace(/MANUFACTURING/g, 'Manuf').replace(/VS/g, 'vs')

					$("#mainChart-title").append('<div id="title-image" style="position: absolute;top: 20px;left: 350px;height: 50px;" class="title-style">'+graphTitle+'</div>')
				})
							    .catch(error => {
							        console.error('Error processing data:', error);
							    });		
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
				
			});

	 }else
	 if (checkedItemLeft  == 1 || checkedItemRight == 1 || checkedItemExtra==1) {
		  const subgroupId=isFlash?(itemValue['#'+checkedItemValues[0].split("flash-")[1]].subGroupId):itemValue[checkedItemValues[0]].subGroupId;
	      const groupId=isFlash?(itemValue['#'+checkedItemValues[0].split("flash-")[1]].GroupId):itemValue[checkedItemValues[0]].GroupId;

	   dataParam = { 
		 		        		"fromdate":fromdate,
		 		        	    "todate":todate,
		 		        	    "period":"d",
		 		        	    "subGroupId1":subgroupId,
		 		        	    "groupId1": groupId,
		 		        	    "subGroupId2":(groupId!=79)?3:4,
		 		        	    "groupId2": groupId,
		 		        	    
		 	     			   };	   
           enableDisableDropDowns(true);
			/*if (checkedItemValues.length > 1)
				title = itemValue[checkedItemValues[0]].title + " vs " + itemValue[checkedItemValues[1]].title
			else
				title = itemValue[checkedItemValues[0]].title*/
			title='';
			disableOptions(true);
			$.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "/"+graphService+"/get-graph-data",
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
					
					Item=isFlash?itemValue['#'+checkedItemValues[0].split("flash-")[1]].GroupId:itemValue[checkedItemValues[0]].GroupId;
					flagImage="<img src='"+getCountryImagePath(Item)[0]+"' width='70px'>";
					
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
					
					let isMaxItems1 =  response[0].graphResponseDTOLst.filter(function(item) {
					    return item.ismax === "1";
					});
					let isMaxItems2 =  response[1].graphResponseDTOLst.filter(function(item) {
					    return item.ismax === "1";
					});
					if (getFormatResult0[1])
										value1=	 value1.toFixed(getFormatResult0[0]);
										else
										value1=	 value1.toFixed(getFormatResult0[0]) + "%";
										
						if (getFormatResult1[1])
												value2=	 value2.toFixed(getFormatResult1[0]);
											else
												value2=	 value2.toFixed(getFormatResult1[0]) + "%";
						
					
					$('#legendfalse').addClass("active");
					$('#legendtrue').removeClass("active");
					processDataAndAddNewEndDates(response)
							    .then(newEndDate => {
					chart.updateOptions({
						series:[{
						name: response[0].config != null ? (response[0].config.displayDescription == null ? '' : response[0].config.displayDescription) : '',
						type:'column',
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
						colors: isFlash?["#ffc000", "#00D4EB"]:["#ffc000", "#ff99ff"],

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
						legend: {
						   show:false,
				    	  },
					});
					
					disableChartFont(false);
					$('#overlayChart').hide();
				    $("#mainChart-title").empty();
				    TValue = (groupId==77)?"JOLTS":((groupId==78)?"ADP":((groupId==79)?"NON-FARM PAYROLLS":""));
				    graphTitle=TValue +" "+ T1+" vs "+(isFlash?"FLASH":"SURVEY");
				    graphTitle=graphTitle.toUpperCase().replace(/\bFINAL\b/g, '').replace(/FLASH/g, '<span style="color:#00D4EB">Flash</span>').replace(/SURVEY/g, '<span style="color:#ff99ff">Survey</span>').replace(/VS/g, 'vs')

					$("#mainChart-title").append('<div id="title-image" style="position: absolute;top: 20px;left: 450px;height: 50px;" class="title-style">'+graphTitle+'</div>')
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