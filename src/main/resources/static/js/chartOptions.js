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
function disableOptions(isdisabled)
{
   if(isdisabled)
    {disableChartType(true);
	 disableChartColor(true);
     disableChartColorTransparency(true);
	 disableChartMarker(true);
	}
	else{
		disableChartType(false);
		disableChartColor(false);
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
function resetActiveChartColorTransparency()
{
   $("#chartMarker").find(".active").removeClass("active");
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
function graphTypeOption(chartType)
{   chartType1=chartType;
	chartTransparency=($("#chartColorTransparency").find(".active")[0].id!=1)?'0.'+$("#chartColorTransparency").find(".active")[0].id:$("#chartColorTransparency").find(".active")[0].id;
    chartColor='#'+$("#chartColor").find(".active")[0].id;
	activateChartTrasnparency(chartType);
	activateChartMarker(chartType);
if (chartType=='area')
    		chart.updateOptions({
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
			        	 }
	        	  },
          tickAmount: 6,
    	  min:Math.sign(minvalue)==-1 ? -Math.abs(minvalue)-0.1 : Math.abs(minvalue)-0.1,
    	  max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+0.1 : Math.abs(maxvalue)+0.1,
    			  axisBorder: {
	                  width: 3,
	                  show: true,
	                  color: '#ffffff',
	                  offsetX: 0,
	                  offsetY: 0
	              },
    	  },
    			colors: chartColor=='#44546a'?['#222a35']:[chartColor],
		        fill: {
	                type: 'gradient',
	                gradient: {
				    gradientToColors: chartColor=='#44546a'?'#2e75b6':chartColor,
				      shadeIntensity: 0,
				      type: "vertical",
				     inverseColors: false,
				      stops: [30, 90, 100],
				     opacityFrom: eval(chartTransparency)==1? 1:(eval(chartTransparency)==0.75 ? 0.8 :(eval(chartTransparency)==0.5?0.60:1)),
				     opacityTo: eval(chartTransparency),
	                }
	              },
	               markers: {
			   colors: "#ffffff",
			   strokeColors:"#ffffff"
		     },	
	            stroke: {
			      	 colors: ["#ffffff"],
		        }
    		});
		else 
   chart.updateOptions({
	  colors: [chartColor=='#44546a'?'#2e75b6':chartColor],
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
			        	 }
	        	  },
          tickAmount: 6,
    	  min:Math.sign(minvalue)==-1 ? -Math.abs(minvalue)-0.1 : Math.abs(minvalue)-0.1,
    	  max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+0.1 : Math.abs(maxvalue)+0.1,
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
		      colors: chartType=="area"? ["#ffffff"]:[chartColor=='#44546a'?'#2e75b6':chartColor],
	        },
    markers: {
			   colors: chartType=="area"?"#ffffff":[chartColor=='#44546a'?'#2e75b6':chartColor],
			   strokeColors:chartType=="area"?"#ffffff":[chartColor=='#44546a'?'#2e75b6':chartColor]
		     }
		 });
	chart.updateSeries([{ type:chartType}]);
}

function chartColorOption(selectedChartColor)
{
chartColor=selectedChartColor;
chartType=$("#chartTypes").find(".active")[0].id;
chartTransparency=($("#chartColorTransparency").find(".active")[0].id!=1)?'0.'+$("#chartColorTransparency").find(".active")[0].id:$("#chartColorTransparency").find(".active")[0].id;
if (chartType=='area')
    		chart.updateOptions({
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
			        	 }
	        	  },
          tickAmount: 6,
    	  min:Math.sign(minvalue)==-1 ? -Math.abs(minvalue)-0.1 : Math.abs(minvalue)-0.1,
    	  max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+0.1 : Math.abs(maxvalue)+0.1,
    			  axisBorder: {
	                  width: 3,
	                  show: true,
	                  color: '#ffffff',
	                  offsetX: 0,
	                  offsetY: 0
	              },
    	  },
    			colors: chartColor=='#44546a'?['#222a35']:[chartColor],
		        fill: {
	                type: 'gradient',
	                gradient: {
				    gradientToColors: chartColor=='#44546a'?'#2e75b6':chartColor,
				      shadeIntensity: 0,
				      type: "vertical",
				     inverseColors: false,
				      stops: [30, 90, 100],
				      opacityFrom: eval(chartTransparency)==1? 1:(eval(chartTransparency)==0.75 ? 0.8 :(eval(chartTransparency)==0.5?0.60:1)),
				      opacityTo: eval(chartTransparency),
	                }
	              },
	               markers: {
			   colors: "#ffffff",
			   strokeColors:"#ffffff"
		     },	
	            stroke: {
			      	 colors: ["#ffffff"],
		        }
    		});
		else 
   chart.updateOptions({
	  colors: [chartColor=='#44546a'?'#2e75b6':chartColor],
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
			        	 }
	        	  },
          tickAmount: 6,
    	  min:Math.sign(minvalue)==-1 ? -Math.abs(minvalue)-0.1 : Math.abs(minvalue)-0.1,
    	  max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+0.1 : Math.abs(maxvalue)+0.1,
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
		      colors: chartType=="area"? ["#ffffff"]:[chartColor=='#44546a'?'#2e75b6':chartColor],
	        },
    markers: {
			   colors: chartType=="area"?"#ffffff":[chartColor=='#44546a'?'#2e75b6':chartColor],
			   strokeColors:chartType=="area"?"#ffffff":[chartColor=='#44546a'?'#2e75b6':chartColor]
		     }
		 });
}
function chartTransparencyOption(selectedChartTransparency)
{
chartTransparency=selectedChartTransparency;
chartType=$("#chartTypes").find(".active")[0].id;
chartColor='#'+$("#chartColor").find(".active")[0].id;
if (chartType=='area')
    		chart.updateOptions({
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
			        	 }
	        	  },
          tickAmount: 6,
    	  min:Math.sign(minvalue)==-1 ? -Math.abs(minvalue)-0.1 : Math.abs(minvalue)-0.1,
    	  max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+0.1 : Math.abs(maxvalue)+0.1,
    			  axisBorder: {
	                  width: 3,
	                  show: true,
	                  color: '#ffffff',
	                  offsetX: 0,
	                  offsetY: 0
	              },
    	  },
    			colors: chartColor=='#44546a'?['#222a35']:[chartColor],
		        fill: {
	                type: 'gradient',
	                gradient: {
				    gradientToColors: chartColor=='#44546a'?'#2e75b6':chartColor,
				      shadeIntensity: 0,
				      type: "vertical",
				     inverseColors: false,
				      stops: [30, 90, 100],
				      opacityFrom: eval(chartTransparency)==1? 1:(eval(chartTransparency)==0.75 ? 0.8 :(eval(chartTransparency)==0.5?0.60:1)),
				      opacityTo: eval(chartTransparency),
	                }
	              },
	               markers: {
			   colors: "#ffffff",
			   strokeColors:"#ffffff"
		     },	
	            stroke: {
			      	 colors: ["#ffffff"],
		        }
    		});
		else 
   chart.updateOptions({
	  colors: [chartColor=='#44546a'?'#2e75b6':chartColor],
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
			        	 }
	        	  },
          tickAmount: 6,
    	  min:Math.sign(minvalue)==-1 ? -Math.abs(minvalue)-0.1 : Math.abs(minvalue)-0.1,
    	  max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+0.1 : Math.abs(maxvalue)+0.1,
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
		      colors: chartType=="area"? ["#ffffff"]:[chartColor=='#44546a'?'#2e75b6':chartColor],
	        },
    markers: {
			   colors: chartType=="area"?"#ffffff":[chartColor=='#44546a'?'#2e75b6':chartColor],
			   strokeColors:chartType=="area"?"#ffffff":[chartColor=='#44546a'?'#2e75b6':chartColor]
		     }
		 });
}
function chartMarkerOption(selectedChartMarker)
{
markerSize = selectedChartMarker;
chartTransparency=($("#chartColorTransparency").find(".active")[0].id!=1)?'0.'+$("#chartColorTransparency").find(".active")[0].id:$("#chartColorTransparency").find(".active")[0].id;
chartType=$("#chartTypes").find(".active")[0].id;
chartColor='#'+$("#chartColor").find(".active")[0].id;
if (chartType=='area')
    		chart.updateOptions({
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
			        	 }
	        	  },
          tickAmount: 6,
    	  min:Math.sign(minvalue)==-1 ? -Math.abs(minvalue)-0.1 : Math.abs(minvalue)-0.1,
    	  max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+0.1 : Math.abs(maxvalue)+0.1,
    			  axisBorder: {
	                  width: 3,
	                  show: true,
	                  color: '#ffffff',
	                  offsetX: 0,
	                  offsetY: 0
	              },
    	  },
    			colors: chartColor=='#44546a'?['#222a35']:[chartColor],
		        fill: {
	                type: 'gradient',
	                gradient: {
				    gradientToColors: chartColor=='#44546a'?'#2e75b6':chartColor,
				      shadeIntensity: 0,
				      type: "vertical",
				     inverseColors: false,
				      stops: [30, 90, 100],
				      opacityFrom: eval(chartTransparency)==1? 1:(eval(chartTransparency)==0.75 ? 0.8 :(eval(chartTransparency)==0.5?0.60:1)),
				      opacityTo: eval(chartTransparency),
	                }
	              },
	               markers: {
			   colors: "#ffffff",
			   strokeColors:"#ffffff",
 			   size: markerSize,
		     },	
	            stroke: {
			      	 colors: ["#ffffff"],
		        }
    		});
		else 
   chart.updateOptions({
	  colors: [chartColor=='#44546a'?'#2e75b6':chartColor],
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
			        	 }
	        	  },
          tickAmount: 6,
    	  min:Math.sign(minvalue)==-1 ? -Math.abs(minvalue)-0.1 : Math.abs(minvalue)-0.1,
    	  max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+0.1 : Math.abs(maxvalue)+0.1,
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
		      colors: chartType=="area"? ["#ffffff"]:[chartColor=='#44546a'?'#2e75b6':chartColor],
	        },
    markers: {
			   colors: chartType=="area"?"#ffffff":[chartColor=='#44546a'?'#2e75b6':chartColor],
			   strokeColors:chartType=="area"?"#ffffff":[chartColor=='#44546a'?'#2e75b6':chartColor],
 			   size: markerSize,
		     }
		 });
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
function checkActiveChartType(activeChartType,dbchartType,Daily)
{
	if (typeof  activeChartType == 'undefined')
	  { chartType1 = getDBChartType(dbchartType,Daily);
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
function getFontSize(chartDbFontSize)
{
    $('#'+chartDbFontSize).addClass("active");
	  	fontsize=chartDbFontSize;
	  	
		return fontsize;
}
function getDBChartType(DbchartType,Daily)
{
    $(Daily?'#'+DbchartType.toLowerCase():'#column').addClass("active");
	  	chartType=Daily?DbchartType:'column';

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
{ if(chartTransparency.split("0.").length==1)
	nChartTransparency =chartTransparency.split("0.")[0];
	else 
	nChartTransparency =chartTransparency.split("0.")[1];
	
    $('#'+nChartTransparency).addClass("active");
	  
     return chartTransparency;
}		  