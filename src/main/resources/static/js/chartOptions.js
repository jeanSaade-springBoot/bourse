$("#fontOptions button.btn").click(function(){
			    $("#fontOptions").find(".active").removeClass("active");
			    $(this).addClass("active");
			  });  
			  
$("#chartTypes button.btn").click(function(){
			    $("#chartTypes").find(".active").removeClass("active");
			    $(this).addClass("active");
			  }); 
	
$("#chartColor button.btn").click(function(){
			    $("#chartColor").find(".active").removeClass("active");
			    $(this).addClass("active");
			  });	
$("#chartColorTransparency button.btn").click(function(){
			    $("#chartColorTransparency").find(".active").removeClass("active");
			    $(this).addClass("active");
			  });	
$("#chartMarker button.btn").click(function(){
			    $("#chartMarker").find(".active").removeClass("active");
			    $(this).addClass("active");
			  });		
$("#gridOptions button.btn").click(function(){
			    $("#gridOptions").find(".active").removeClass("active");
			    $(this).addClass("active");
			  });	
$("#gridLegend button.btn").click(function(){
			    $("#gridLegend").find(".active").removeClass("active");
			    $(this).addClass("active");
			  });		
	
function disableChartType(isdisabled)
{
    $("#area").prop('disabled', isdisabled);
    $("#line").prop('disabled', isdisabled);
    $("#column").prop('disabled', isdisabled);
}
function disableChartColor(isdisabled)
{
    $("#F0AB2E").prop('disabled', isdisabled);
    $("#0097FE").prop('disabled', isdisabled);
    $("#44546a").prop('disabled', isdisabled);
}
function disableChartColorTransparency(isdisabled)
{
    $("#1").prop('disabled', isdisabled);
    $("#75").prop('disabled', isdisabled);
    $("#5").prop('disabled', isdisabled);
}
function disableChartMarker(isdisabled)
{
    $("#1-0").prop('disabled', isdisabled);
    $("#1-1").prop('disabled', isdisabled);
    $("#1-3").prop('disabled', isdisabled);
}
function disableChartLegend(isdisabled)
{
    $("#legendtrue").prop('disabled', isdisabled);
    $("#legendfalse").prop('disabled', isdisabled);
}

function disableChartGrid(isdisabled)
{
    $("#true").prop('disabled', isdisabled);
    $("#false").prop('disabled', isdisabled);
}
function disableOptions(isdisabled)
{
   if(isdisabled)
    {disableChartType(true);
	 disableChartColor(true);
     disableChartColorTransparency(true);
	 disableChartMarker(true);
	 disableChartGrid(true);
	 disableChartLegend(true);
	 
	}
	else{
		disableChartType(false);
		disableChartColor(false);
		disableChartGrid(false);
		disableChartLegend(false);
		activateChartTrasnparency(chartType1);
		activateChartMarker(chartType1);
		
	}
}
function resetActiveChartType()
{
   $("#chartTypes").find(".active").removeClass("active");
}
function resetActiveFontSize()
{
   $("#fontOptions").find(".active").removeClass("active");
}
function resetActiveChartColor()
{
   $("#chartColor").find(".active").removeClass("active");
}
function resetActiveChartColorTransparency()
{
   $("#chartColorTransparency").find(".active").removeClass("active");
}
function resetActiveChartGrid()
{
   $("#gridOptions").find(".active").removeClass("active");
}
function activateChartTrasnparency(chartType){
	
	if(chartType!='area')
		disableChartColorTransparency(true);
	else
		disableChartColorTransparency(false);
}
function activateChartMarker(chartType){
	
	if(chartType!='column')
		disableChartMarker(false);
	else
		disableChartMarker(true);
}
function activateChartLegend(chartType){
	
	if(chartType!='column')
		disableChartLegend(false);
	else
		disableChartLegend(true);
}
function updateGraphConfiguration(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend)
{   console.log(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend)
	activateChartTrasnparency(SelectedchartType);
	activateChartMarker(SelectedchartType);
	activateChartLegend(SelectedchartType);
	var value = getMarginLenght(minvalue);  
	if (SelectedchartType=='area')
      chart.updateOptions({
		     legend: {
						   show:eval(selectedChartLegend.split('legend')[1]),
		   	  			   fontSize: fontsize,
			        	   showForSingleSeries: true,
				    	   labels: {
				    	          colors: 'White',
				    	          useSeriesColors: false
				    	   },
				    	      markers: {
				    	          width: 12,
				    	          height: 2
				    	      },
				    	    formatter: function(seriesName, opts) {
				    	    	img= getCountryFlag(seriesName);
				    	         return [img , seriesName];
				    	    }
				    	  },
	 		 xaxis: {
	   	  			       labels:  { hideOverlappingLabels: false,
	   	  			         		  rotate: -70,
					                  rotateAlways: true,
					                  minHeight:30,
					        		  style: {
							        	  fontSize: $("#fontOptions").find(".active")[0].id,
							        	 },
					        	  },
   	  			           type: 'category',
						    axisBorder: {
							  show: true,
							  color: '#ffffff',
							  height: 3,
							  width: '100%',
							  offsetX: 0,
							  offsetY: 0
						  },
   	  			        },
    		 extra:{
			isDecimal: isdecimal,
			yAxisFormat:yaxisformat,
		},
       yaxis: {
	    	  labels: {
	    		     minWidth: 75,maxWidth: 75,
	        		 style: {
			        	  fontSize: $("#fontOptions").find(".active")[0].id,
			        	 },
			        	  formatter: function(val, index) {
										 if (notDecimal)
						  				  return  val.toFixed(nbrOfDigits);
						  				else 
						  				  return  val.toFixed(nbrOfDigits) + "%";
									      }
	        	  },
          tickAmount: 6,
    	  min:Math.sign(minvalue)==-1 ? -Math.abs(minvalue)-value : Math.abs(minvalue)-value,
    	  max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+value : Math.abs(maxvalue)+value,
    			  axisBorder: {
	                  width: 3,
	                  show: true,
	                  color: '#ffffff',
	                  offsetX: 0,
	                  offsetY: 0
	              },
    	  },
    	    grid: {
                  show:eval(selectedChartGrid),
                       borderColor: '#f0e68c',
                       strokeDashArray:1,
                    opacity: 0.5,
                               padding: {
                             right: 60,
                         },  
                     },
    			colors: selectedChartColor=='#44546a'?['#222a35']:[selectedChartColor],
		        fill: {
	                type: 'gradient',
	                gradient: {
				    gradientToColors: selectedChartColor=='#44546a'?'#2e75b6':selectedChartColor,
				      shadeIntensity: 0,
				      type: "vertical",
				     inverseColors: false,
				      stops: [30, 90, 100],
				     opacityFrom: eval(selectedChartTransparency)==1? 1:(eval(selectedChartTransparency)==0.75 ? 0.8 :(eval(selectedChartTransparency)==0.5?0.60:1)),
				     opacityTo: eval(selectedChartTransparency),
	                }
	              },
	               markers: {
			  		 colors: "#ffffff",
			  		 strokeColors:"#ffffff",
			    	 size: selectedChartMarker,
		     },	
	            stroke: {
			      	 colors: ["#ffffff"],
		        }
    		});
		else 
   		chart.updateOptions({
	      legend: {
						   show:eval(selectedChartLegend.split('legend')[1]),
		   	  			   fontSize: fontsize,
			        	   showForSingleSeries: true,
				    	   labels: {
				    	          colors: 'White',
				    	          useSeriesColors: false
				    	   },
				    	      markers: {
				    	          width: 12,
				    	          height: 2
				    	      },
				    	    formatter: function(seriesName, opts) {
				    	    	img= getCountryFlag(seriesName);
				    	         return [img , seriesName];
				    	    }
				    	  },
	       grid: {
                  show:eval(selectedChartGrid),
                       borderColor: '#f0e68c',
                       strokeDashArray:1,
                    opacity: 0.5,
                               padding: {
                             right: 60,
                         },  
                     },
	  colors: [selectedChartColor=='#44546a'?'#2e75b6':selectedChartColor],
  	  xaxis: {
	   	  			       labels:  { hideOverlappingLabels: false,
	   	  			         		  rotate: -70,
					                  rotateAlways: true,
					                  minHeight:30,
					        		  style: {
							        	  fontSize: $("#fontOptions").find(".active")[0].id,
							        	 },
					        	  },
   	  			           type: 'category',
						    axisBorder: {
							  show: true,
							  color: '#ffffff',
							  height: 3,
							  width: '100%',
							  offsetX: 0,
							  offsetY: 0
						  },
   	  			        },
	  extra:{
			isDecimal: isdecimal,
			yAxisFormat:yaxisformat,
		},
       yaxis: {
	    	  labels: {
	    		     minWidth: 75,maxWidth: 75,
	        		 style: {
			        	  fontSize: $("#fontOptions").find(".active")[0].id,
			        	 },
			        	  formatter: function(val, index) {
										 if (notDecimal)
						  				  return  val.toFixed(nbrOfDigits);
						  				else 
						  				  return  val.toFixed(nbrOfDigits) + "%";
									      }
	        	  },
          tickAmount: 6,
    	  min:Math.sign(minvalue)==-1 ? -Math.abs(minvalue)-value : Math.abs(minvalue)-value,
    	  max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+value : Math.abs(maxvalue)+value,
    			  axisBorder: {
	                  width: 3,
	                  show: true,
	                  color: '#ffffff',
	                  offsetX: 0,
	                  offsetY: 0
	              },
    	  },
  fill: {
            type:'solid',
            opacity: [1,1],
          }, 
   stroke: {
		      colors: SelectedchartType=="area"? ["#ffffff"]:[selectedChartColor=='#44546a'?'#2e75b6':selectedChartColor],
	        },
    markers: {
			   colors: SelectedchartType=="area"?"#ffffff":[selectedChartColor=='#44546a'?'#2e75b6':selectedChartColor],
			   strokeColors:SelectedchartType=="area"?"#ffffff":[selectedChartColor=='#44546a'?'#2e75b6':selectedChartColor],
		       size: selectedChartMarker,
		     }
		 });
	chart.updateSeries([{ type:SelectedchartType}]);
}
function graphTypeOption(chartType)
{
	SelectedchartType=chartType;
	selectedChartTransparency=($("#chartColorTransparency").find(".active")[0].id!=1)?'0.'+$("#chartColorTransparency").find(".active")[0].id:$("#chartColorTransparency").find(".active")[0].id;
    selectedChartColor='#'+$("#chartColor").find(".active")[0].id;
    selectedChartMarker=$("#chartMarker").find(".active")[0].id.split("-")[1];
    selectedChartGrid=$("#gridOptions").find(".active")[0].id;
    selectedChartLegend=$("#gridLegend").find(".active")[0].id;
      
	updateGraphConfiguration(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend);
}

function chartColorOption(selectedChartColor)
{   
	SelectedchartType=$("#chartTypes").find(".active")[0].id;
	selectedChartTransparency=($("#chartColorTransparency").find(".active")[0].id!=1)?'0.'+$("#chartColorTransparency").find(".active")[0].id:$("#chartColorTransparency").find(".active")[0].id;
    selectedChartColor=selectedChartColor;
    selectedChartMarker=$("#chartMarker").find(".active")[0].id.split("-")[1];
    selectedChartGrid=$("#gridOptions").find(".active")[0].id;
    selectedChartLegend=$("#gridLegend").find(".active")[0].id;
      
	updateGraphConfiguration(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend);

}

function chartTransparencyOption(selectedChartTransparency)
{
	SelectedchartType=$("#chartTypes").find(".active")[0].id;
	selectedChartTransparency=selectedChartTransparency;
    selectedChartColor='#'+$("#chartColor").find(".active")[0].id;
    selectedChartMarker=$("#chartMarker").find(".active")[0].id.split("-")[1];
    selectedChartGrid=$("#gridOptions").find(".active")[0].id;
    selectedChartLegend=$("#gridLegend").find(".active")[0].id;
      
	updateGraphConfiguration(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend);
}
function chartMarkerOption(selectedChartMarker)
{
	SelectedchartType=$("#chartTypes").find(".active")[0].id;
	selectedChartTransparency=($("#chartColorTransparency").find(".active")[0].id!=1)?'0.'+$("#chartColorTransparency").find(".active")[0].id:$("#chartColorTransparency").find(".active")[0].id;
    selectedChartColor='#'+$("#chartColor").find(".active")[0].id;
    selectedChartMarker=selectedChartMarker;
    selectedChartGrid=$("#gridOptions").find(".active")[0].id;
    selectedChartLegend=$("#gridLegend").find(".active")[0].id;
      
	updateGraphConfiguration(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend);
}
function chartGridOption(selectedChartGrid)
{
	SelectedchartType=$("#chartTypes").find(".active")[0].id;
	selectedChartTransparency=($("#chartColorTransparency").find(".active")[0].id!=1)?'0.'+$("#chartColorTransparency").find(".active")[0].id:$("#chartColorTransparency").find(".active")[0].id;
    selectedChartColor='#'+$("#chartColor").find(".active")[0].id;
    selectedChartMarker=$("#chartMarker").find(".active")[0].id.split("-")[1];
    selectedChartGrid=selectedChartGrid;
    selectedChartLegend=$("#gridLegend").find(".active")[0].id;
      
	updateGraphConfiguration(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend);
}

function chartLegendOption(selectedChartLegend)
{
	SelectedchartType=$("#chartTypes").find(".active")[0].id;
	selectedChartTransparency=($("#chartColorTransparency").find(".active")[0].id!=1)?'0.'+$("#chartColorTransparency").find(".active")[0].id:$("#chartColorTransparency").find(".active")[0].id;
    selectedChartColor='#'+$("#chartColor").find(".active")[0].id;
    selectedChartMarker=$("#chartMarker").find(".active")[0].id.split("-")[1];
    selectedChartGrid=$("#gridOptions").find(".active")[0].id;
    selectedChartLegend=selectedChartLegend;
      
	updateGraphConfiguration(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend);	
}
function checkActiveFontSize(activeFontSize,dbFontSize)
{
	if (typeof  activeFontSize == 'undefined')
	  { fontsize=getFontSize(dbFontSize);
	  } else 
		{
		  fontsize = activeFontSize.id;
		}
		return fontsize;
}
function checkActiveChartType(activeChartType,dbchartType,Period)
{
	if (typeof  activeChartType == 'undefined')
	  { chartType1 = getDBChartType(dbchartType,Period);
	  } else 
		{
		  chartType1 =  activeChartType.id;
		}
		return chartType1;
}
function checkActiveChartColor(activeChartColor,chartColor)
{
	if (typeof  activeChartColor == 'undefined')
	  { nchartColor = getChartColor(chartColor);
	  } else 
		{
		  nchartColor = '#'+activeChartColor.id;
		}
		return nchartColor;
}
function checkActiveChartMarker(activeChartMarker,dbChartMarker)
{
	if (typeof  activeChartMarker == 'undefined')
	  { markerSize = getChartMarker(dbChartMarker);
	  } else 
		{
		  markerSize =  activeChartMarker.id.split("1-")[1];
		}
		return markerSize;
}
function checkActiveChartColorTransparency(activeChartTransparency,chartTransparency)
{
	if (typeof  activeChartTransparency == 'undefined')
	  { nchartTransparency = getChartColorTransparency(chartTransparency);
	  } else 
		{
	    if(activeChartTransparency.id!=1)
			activeChartTransparencyID='0.'+activeChartTransparency.id;
		else 
			activeChartTransparencyID=activeChartTransparency.id;
		
		  nchartTransparency = activeChartTransparencyID;
		}
		return nchartTransparency;
}
function checkActiveChartGrid(activeChartGrid,dbChartGrid)
{
	if (typeof  activeChartGrid == 'undefined')
	  { showGrid = getChartGrid(dbChartGrid);
	  } else 
		{
		  showGrid =  activeChartGrid.id;
		}
		return showGrid;
}
function checkActiveChartLegend(activeChartLegend,dbChartLegend)
{
	if (typeof  activeChartLegend == 'undefined')
	  { showLegend = getChartLegend(dbChartLegend);
	  } else 
		{
		  showLegend =  activeChartLegend.id;
		}
		return showLegend;
}
function getFontSize(chartDbFontSize)
{
    $('#'+chartDbFontSize).addClass("active");
	  	fontsize=chartDbFontSize;
	  	
		return fontsize;
}
function getDBChartType(DbchartType,Period)
{
    $(Period=='d'?'#'+DbchartType.toLowerCase():'#column').addClass("active");
	  	chartType=Period=='d'?DbchartType:'column';

	  activateChartTrasnparency(chartType);
	  activateChartMarker(chartType);

    return chartType;
}	
function getChartColor(chartColor)
{
   $('#'+chartColor.split("#")[1]).addClass("active");
	  	nChartColor=chartColor;
	 
   return nChartColor;
}
function getChartMarker(ChartMarker)
{
   $('#1-'+ChartMarker).addClass("active");
	  	markerSize=ChartMarker;
	 
   return markerSize;
}		
function getChartColorTransparency(chartTransparency)
{   if(chartTransparency.split("0.").length==1)
	nChartTransparency =chartTransparency.split("0.")[0];
	else 
	nChartTransparency =chartTransparency.split("0.")[1];
	
    $('#'+nChartTransparency).addClass("active");
	  
     return chartTransparency;
}	
function getChartGrid(chartGrid)
{
   $('#'+chartGrid).addClass("active");
	  	showGrid=chartGrid;
	 
   return showGrid;
}	
function getChartLegend(chartLegend)
{
   $('#'+chartLegend).addClass("active");
	  	showLegend=chartLegend;
	 
   return showLegend;
}	
function getChartPeriod(){
	
	 period=getChartPeriodCode($('#groupOfPeriod').jqxButtonGroup('getSelection'));

 return period;
}
function getChartPeriodName(){
	
	 period=getChartPeriodFullName($('#groupOfPeriod').jqxButtonGroup('getSelection'));

 return period;
}
$('#groupOfPeriod').on('selected', function () { 
	
	var selected = $('#groupOfPeriod').jqxButtonGroup('getSelection');
	if (selected==0)
	 {
		 $("#dropDownType").jqxDropDownList({ disabled: true }); 
		 $("#dropDownFunctions").jqxDropDownList({ disabled: false }); 
		 $("#dropDownType").jqxDropDownList({selectedIndex: 0});  
	  }
    else 
	{ 
		$("#dropDownType").jqxDropDownList({ disabled: false });
		$("#dropDownFunctions").jqxDropDownList({selectedIndex: -1}); 
		$("#dropDownFunctions").jqxDropDownList({ disabled: true }); 
     }
}); 



function getSelectedType()
{
	return $("#dropDownType").jqxDropDownList('getSelectedItem').value;
}
function getSelectedTypeLabel()
{
    return  $("#dropDownType").jqxDropDownList('getSelectedItem').label;
}
function getTitlePeriodAndType()
{
	if (getChartPeriodName()=='DAILY')
	return''; 
	else
    return  ' - '+getChartPeriodName()+' '+getSelectedTypeLabel();
}
function getChartPeriodCode(period)
{
  var code='';	
	switch(period) {
	  
	 case 0: 
	   code='d'
	        break;
	 case 1: 
	   code='w'
	        break;
	 case 2: 
		   code='m'
		    break;
	 case 3: 
		   code='q'
		    break;
	 case 4: 
		   code='y'
		    break;
	}
return code;
}
function getChartPeriodIndex(period)
{
  var index='';	
	switch(period) {
	  
	 case 'd': 
	   index=0
	        break;
	 case 'w': 
	   index=1
	        break;
	 case 'm': 
	   index=2
		    break;
	 case 'q': 
       index=3
		    break;
	 case 'y': 
	   index=4
		    break;
	}
return index;
}		
function getChartPeriodFullName(period)
{
  var fullName='';	
	switch(period) {
	  
	 case 0: 
	   fullName='DAILY'
	        break;
	 case 1: 
	   fullName='WEEKLY'
	        break;
	 case 2: 
	   fullName='MONTHLY'
		    break;
	 case 3: 
       fullName='QUARTELY'
		    break;
	 case 4: 
	   fullName='YEARLY'
		    break;
	}
return fullName;
}		
		
 $("#groupOfPeriod").on('buttonclick', function (event) {
                 
	    resetActiveChartType();
		resetActiveFontSize();
		resetActiveChartColor();
		resetActiveChartColorTransparency();
		resetActiveChartGrid();
		drawGraph();

                });  
$('#dropDownType').on('select', function (event)
{
    resetActiveChartType();
		resetActiveFontSize();
		resetActiveChartColor();
		resetActiveChartColorTransparency();
		resetActiveChartGrid();
		drawGraph();                      
});
$('#dropDownFunctionss').on('select', function (event)
{
    resetActiveChartType();
		resetActiveFontSize();
		resetActiveChartColor();
		resetActiveChartColorTransparency();
		resetActiveChartGrid();
		drawGraph();                      
});