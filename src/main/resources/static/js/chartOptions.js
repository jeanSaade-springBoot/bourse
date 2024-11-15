period='DAILY';

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
function disableChartFont(isdisabled)
{
    $("#12px").prop('disabled', isdisabled);
    $("#14px").prop('disabled', isdisabled);
    $("#16px").prop('disabled', isdisabled);
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
	 disableChartFont(true);
	 
	}
	else{
		disableChartType(false);
		disableChartColor(false);
		disableChartGrid(false);
		disableChartLegend(false);
		activateChartTrasnparency(chartType1);
		activateChartMarker(chartType1);
		disableChartFont(false);
		
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
function activateChartColor(chartType){
	
	if(chartType=='line')
		disableChartColor(true);
	else
		disableChartColor(false);
}
function activateChartMarker(chartType){
	
	if(chartType!='column')
		disableChartMarker(false);
	else
		disableChartMarker(true);
}
function activateChartLegend(chartType){
	
	/*if(chartType!='column')
		disableChartLegend(false);
	else
		disableChartLegend(true);*/
}
function updateGraphConfiguration(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend)
{  // console.log(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend)
	activateChartTrasnparency(SelectedchartType);
	activateChartMarker(SelectedchartType);
	activateChartLegend(SelectedchartType);
	activateChartColor(SelectedchartType);
	
	//var valueMin = getMarginLenght(minvalue); 
	//var valueMax = getMarginLenght(maxvalue);  
	 const values = addMarginToMinMax(minvalue, maxvalue, 5);
				     var valueMin = values;
				     var valueMax = values; 	
	var calculatedMinValue = Math.sign(minvalue) == -1 ? -Math.abs(minvalue) - valueMin : Math.abs(minvalue) - valueMin;
	 graphService=typeof graphService!='undefined'?graphService:'';
	calculatedMinValue = PositiveGraphs.includes(graphService)?( Math.sign(calculatedMinValue) == -1 ?0:calculatedMinValue): calculatedMinValue;
			
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
    	    min:calculatedMinValue,
 		    max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+valueMax : Math.abs(maxvalue)+valueMax,
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
    			colors: selectedChartColor=='#44546a'?['#2e75b6']:[selectedChartColor],
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
    	    min:Math.sign(minvalue)==-1 ? -Math.abs(minvalue)-valueMin : Math.abs(minvalue)-valueMin,
 		    max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+valueMax : Math.abs(maxvalue)+valueMax,
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
function updateGraphConfigurationVolumes(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend)
{  // console.log(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend)
	activateChartTrasnparency(SelectedchartType);
	activateChartMarker(SelectedchartType);
	activateChartLegend(SelectedchartType);
	activateChartColor(SelectedchartType);
	
	var valueMin = getMarginLenghtVolume(minvalue); 
	var valueMax = getMarginLenghtVolume(maxvalue); 
	
	chart.updateSeries([{ type:SelectedchartType}]);
	if (SelectedchartType=='area')
      chart.updateOptions({
		   stroke: {
					width: 2.25,
					 colors: ["#ffffff"],
					},
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
							   if (notDecimal) {
									    if (val >= 1000) {
									     return (val / 1000).toFixed(nbrOfDigits) + "K";
									    } else {
									      return val.toFixed(nbrOfDigits);
									    }
									  } else {
										   if (val >= 1000) {
									     return (val / 1000).toFixed(nbrOfDigits) + "K";
									    } else {
									      return val.toFixed(nbrOfDigits) + "%";
									    }
									  } 
						} 
	        	  },
          tickAmount: 6,
    	  min:Math.sign(minvalue)==-1 ? -Math.abs(minvalue)-valueMin : Math.abs(minvalue)-valueMin,
 		  max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+valueMax : Math.abs(maxvalue)+valueMax,
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
    			colors: selectedChartColor=='#44546a'?['#2e75b6']:[selectedChartColor],
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
    		});
		else 
   		chart.updateOptions({
		   stroke: {
					width: SelectedchartType == "column" ? 0 : 2.25,
					colors: SelectedchartType!="column"? ["#ffffff"]:[selectedChartColor=='#44546a'?'#2e75b6':selectedChartColor],
	        },
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
	/*  colors: [function({ value, dataPointIndex, seriesIndex, w }) {
										
									  if (w.config.series[seriesIndex].data[dataPointIndex].isComplete=='0') {
									      return '#ff0000';
									  }
									  else 
									  return  selectedChartColor=='#44546a'?'#2e75b6':selectedChartColor;
									}],*/
	  colors: selectedChartColor=='#44546a'?['#2e75b6']:[selectedChartColor],								
  	  xaxis: {
	   	  			       labels:  { hideOverlappingLabels: false,
	   	  			         		  rotate: -70,
					                  rotateAlways: true,
					                  minHeight:30,
					        		  style: {
							        	  fontSize: $("#fontOptions").find(".active")[0].id,
							        	 },
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
	  extra:{
			isDecimal: isdecimal,
			yAxisFormat:yaxisformat,
		},
       yaxis: {
		      arrowHead:(graphName=="RaceChartVolume")?true:false,
	    	  labels: {
	    		     minWidth: 75,maxWidth: 75,
	        		 style: {
			        	  fontSize: $("#fontOptions").find(".active")[0].id,
			        	 },
			        	  formatter: function(val, index) {
										  if (notDecimal) {
									    if (val >= 1000) {
									     return (val / 1000).toFixed(nbrOfDigits) + "K";
									    } else {
									      return val.toFixed(nbrOfDigits);
									    }
									  } else {
										   if (val >= 1000) {
									     return (val / 1000).toFixed(nbrOfDigits) + "K";
									    } else {
									      return val.toFixed(nbrOfDigits) + "%";
									    }
									  } 
									  }
	        	  },
          tickAmount: 6,
            min:Math.sign(minvalue)==-1 ? -Math.abs(minvalue)-valueMin : Math.abs(minvalue)-valueMin,
 		    max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+valueMax : Math.abs(maxvalue)+valueMax,
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
    markers: {
			   colors: SelectedchartType=="area"?"#ffffff":[selectedChartColor=='#44546a'?'#2e75b6':selectedChartColor],
			   strokeColors:SelectedchartType=="area"?"#ffffff":[selectedChartColor=='#44546a'?'#2e75b6':selectedChartColor],
		       size: selectedChartMarker,
		     }
		 });
	
}
function updateGraphConfigurationMissingConfiguration(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend)
{  // console.log(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend)
	activateChartTrasnparency(SelectedchartType);
	activateChartMarker(SelectedchartType);
	activateChartLegend(SelectedchartType);
	activateChartColor(SelectedchartType);
	
	//var valueMin = getMarginLenght(minvalue); 
	//var valueMax = getMarginLenght(maxvalue); 
		 const values = addMarginToMinMax(minvalue, maxvalue, 5);
				     var valueMin = values;
				     var valueMax = values; 
				     
		  var calculatedMinValue = Math.sign(minvalue) == -1 ? -Math.abs(minvalue) - valueMin : Math.abs(minvalue) - valueMin;
		   graphService=typeof graphService!='undefined'?graphService:'';
			  calculatedMinValue = PositiveGraphs.includes(graphService)?( Math.sign(calculatedMinValue) == -1 ?0:calculatedMinValue): calculatedMinValue;
				     
				   		     
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
    	  min:calculatedMinValue,
 		  max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+valueMax : Math.abs(maxvalue)+valueMax,
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
    			colors: selectedChartColor=='#44546a'?['#2e75b6']:[selectedChartColor],
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
            min:calculatedMinValue,
 		    max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+valueMax : Math.abs(maxvalue)+valueMax,
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
function updateGraphOption(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend){
	if(typeof graphName !='undefined' && (graphName=="marketShareVolume"))
		{
			chartConfiguration={
					 fontSize:$("#fontOptions").find(".active")[0].id,
					 showLegend:selectedChartLegend,
				}
			updatePieChartOptions(chartConfiguration);
			}
	else
	if(typeof graphName !='undefined' && (graphName=="wmqyVolume" || graphName=="RaceChartVolume"))
		updateGraphConfigurationVolumes(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend);
	else if(typeof hasMissingDates !='undefined') 
	    if(hasMissingDates)
			updateGraphConfigurationMissingConfiguration(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend);
	    else
	    	updateGraphConfiguration(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend);
	  else
	    updateGraphConfiguration(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend);
	
}
function graphTypeOption(chartType)
{
	SelectedchartType=chartType;
	selectedChartTransparency=($("#chartColorTransparency").find(".active")[0].id!=1)?'0.'+$("#chartColorTransparency").find(".active")[0].id:$("#chartColorTransparency").find(".active")[0].id;
    selectedChartColor = chartType=='line'?"#ffffff":'#'+$("#chartColor").find(".active")[0].id;
    selectedChartMarker= chartType=='line'?period!='DAILY'?3:$("#chartMarker").find(".active")[0].id.split("-")[1]:$("#chartMarker").find(".active")[0].id.split("-")[1];
    selectedChartGrid=$("#gridOptions").find(".active")[0].id;
    selectedChartLegend=$("#gridLegend").find(".active")[0].id;
    
    updateGraphOption(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend);
}

function chartColorOption(selectedChartColor)
{   
	SelectedchartType=$("#chartTypes").find(".active")[0].id;
	selectedChartTransparency=($("#chartColorTransparency").find(".active")[0].id!=1)?'0.'+$("#chartColorTransparency").find(".active")[0].id:$("#chartColorTransparency").find(".active")[0].id;
    selectedChartColor=selectedChartColor;
    selectedChartMarker=$("#chartMarker").find(".active")[0].id.split("-")[1];
    selectedChartGrid=$("#gridOptions").find(".active")[0].id;
    selectedChartLegend=$("#gridLegend").find(".active")[0].id;
      
    updateGraphOption(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend);
}

function chartTransparencyOption(selectedChartTransparency)
{
	SelectedchartType=$("#chartTypes").find(".active")[0].id;
	selectedChartTransparency=selectedChartTransparency;
    selectedChartColor='#'+$("#chartColor").find(".active")[0].id;
    selectedChartMarker=$("#chartMarker").find(".active")[0].id.split("-")[1];
    selectedChartGrid=$("#gridOptions").find(".active")[0].id;
    selectedChartLegend=$("#gridLegend").find(".active")[0].id;
      
   updateGraphOption(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend);    
}
function chartMarkerOption(selectedChartMarker)
{
	SelectedchartType=$("#chartTypes").find(".active")[0].id;
	selectedChartTransparency=($("#chartColorTransparency").find(".active")[0].id!=1)?'0.'+$("#chartColorTransparency").find(".active")[0].id:$("#chartColorTransparency").find(".active")[0].id;
    selectedChartColor = SelectedchartType=='line'?"#ffffff":'#'+$("#chartColor").find(".active")[0].id;
    selectedChartMarker=selectedChartMarker;
    selectedChartGrid=$("#gridOptions").find(".active")[0].id;
    selectedChartLegend=$("#gridLegend").find(".active")[0].id;
      
    updateGraphOption(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend);
      }
function chartGridOption(selectedChartGrid)
{
	SelectedchartType=$("#chartTypes").find(".active")[0].id;
	selectedChartTransparency=($("#chartColorTransparency").find(".active")[0].id!=1)?'0.'+$("#chartColorTransparency").find(".active")[0].id:$("#chartColorTransparency").find(".active")[0].id;
    selectedChartColor=SelectedchartType=='line'?"#ffffff":'#'+$("#chartColor").find(".active")[0].id;
    selectedChartMarker=$("#chartMarker").find(".active")[0].id.split("-")[1];
    selectedChartGrid=selectedChartGrid;
    selectedChartLegend=$("#gridLegend").find(".active")[0].id;
      
    updateGraphOption(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend);
       
       }

function chartLegendOption(selectedChartLegend)
{
	if(typeof graphName !='undefined' && (graphName=="marketShareVolume"))
		{
		SelectedchartType=null;
		selectedChartTransparency=null;
	    selectedChartColor=null;
	    selectedChartMarker=null;
	    selectedChartGrid=null;
		}
	else {
		SelectedchartType=$("#chartTypes").find(".active")[0].id;
		selectedChartTransparency=($("#chartColorTransparency").find(".active")[0].id!=1)?'0.'+$("#chartColorTransparency").find(".active")[0].id:$("#chartColorTransparency").find(".active")[0].id;
	    selectedChartColor=SelectedchartType=='line'?"#ffffff":'#'+$("#chartColor").find(".active")[0].id;
	    selectedChartMarker=$("#chartMarker").find(".active")[0].id.split("-")[1];
	    selectedChartGrid=$("#gridOptions").find(".active")[0].id;
      }
      selectedChartLegend=selectedChartLegend;
    
    updateGraphOption(SelectedchartType,selectedChartColor,selectedChartTransparency,selectedChartMarker,selectedChartGrid,selectedChartLegend);
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
	
	 period=($('#groupOfPeriod').length)?getChartPeriodCode($('#groupOfPeriod').jqxButtonGroup('getSelection')):'d';

 return period;
}
function getChartPeriodVolume(){
	
	 period=($('#groupOfPeriodVolume').length)?getChartPeriodCodeVolume($('#groupOfPeriodVolume').jqxButtonGroup('getSelection')):'w';

 return period;
}
function getChartPeriodName(){
	
	 period=($('#groupOfPeriod').length)?getChartPeriodFullName($('#groupOfPeriod').jqxButtonGroup('getSelection')):'DAILY';

 return period;
}
$('#groupOfPeriod').on('selected', function () { 
	
	var selected = $('#groupOfPeriod').jqxButtonGroup('getSelection');
	 if (selected==0)
	 {
		 $("#dropDownType").jqxDropDownList({ disabled: true }); 
		 $("#dropDownType").jqxDropDownList({selectedIndex: 3});  
	  }
     else 
	{ 
		$("#dropDownType").jqxDropDownList({ disabled: false });
     }
}); 



function getSelectedType()
{
	return ($('#dropDownType').length)?$("#dropDownType").jqxDropDownList('getSelectedItem').value:'0';
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
function getChartPeriodCodeVolume(period)
{
  var code='';	
	switch(period) {
	 case 0: 
	   code='w'
	        break;
	 case 1: 
		   code='m'
		    break;
	 case 2: 
		   code='q'
		    break;
	 case 3: 
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
        updateFunctionBasedOnSelectedPeriod($('#groupOfPeriod').jqxButtonGroup('getSelection'));         
	    resetActiveChartType();
		resetActiveFontSize();
		resetActiveChartColor();
		resetActiveChartColorTransparency();
		resetActiveChartGrid();
		drawGraph();

                });		
 $("#groupOfPeriodVolume").on('buttonclick', function (event) {
                 
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
function updateFunctionBasedOnSelectedPeriod(period){
	
  var updateFunctionId=-1;	
	switch(period) {
	  
	 case 0: 
	     if (functionId === 4 || functionId === 9 || functionId === 11 || functionId === 13) {
                updateFunctionId = $("#dropDownFunctions").jqxDropDownList({selectedIndex: 2});
            }
            else if (functionId === 5 || functionId === 10 || functionId === 12  || functionId === 14) {
                updateFunctionId = $("#dropDownFunctions").jqxDropDownList({selectedIndex: 3});
            }
	        break;
	 case 1: 
	   if (functionId === 2 || functionId === 9 || functionId === 11 || functionId === 13) {
                updateFunctionId = $("#dropDownFunctions").jqxDropDownList({selectedIndex: 4});
            }
            else if (functionId === 3 || functionId === 10 || functionId === 12  || functionId === 14) {
                updateFunctionId = $("#dropDownFunctions").jqxDropDownList({selectedIndex: 5});
            }
	        break;
	 case 2: 
		 if (functionId === 2 || functionId === 4 || functionId === 11 || functionId === 13) {
                updateFunctionId = $("#dropDownFunctions").jqxDropDownList('val','10');
            }
            else if (functionId === 3 || functionId === 5 || functionId === 12  || functionId === 14) {
                updateFunctionId = $("#dropDownFunctions").jqxDropDownList('val','11');
            }
	        break;
	 case 3: 
		 	 if (functionId === 2 || functionId === 4 || functionId === 9 || functionId === 13) {
                updateFunctionId = $("#dropDownFunctions").jqxDropDownList('val','12');
            }
            else if (functionId === 3 || functionId === 5 || functionId === 10  || functionId === 14) {
                updateFunctionId = $("#dropDownFunctions").jqxDropDownList('val','13');
            }
	        break;
	 case 4: 
		   if (functionId === 2 || functionId === 4 || functionId === 9 || functionId === 11) {
                updateFunctionId = $("#dropDownFunctions").jqxDropDownList('val','14'); 
            }
            else if (functionId === 3 || functionId === 5 || functionId === 10  || functionId === 12) {
                updateFunctionId = $("#dropDownFunctions").jqxDropDownList('val','15');
            }
	        break;
	}
return updateFunctionId;
}
function getPieChartOptionSeries(chartConfiguration){
	return  options_pie = {
          chart: {
			height: 520,
			type: 'pie',
			animations: { enabled: false }
		},
		title: {
			text: chartConfiguration.title,
			align: 'center',
					margin: 0,
					offsetY: 20,
					style: {
						fontWeight: 'bold',
					},
		},
		subtitle: {
			text: 'copyright LibVol.com',
			align: 'right',
			margin: 10,
			offsetX: -50,
			offsetY: 30,
			floating: false,
			style: {
				fontSize: '10px',
				fontWeight: 'normal',
				color: '#9699a2'
			},
		},
		legend: {
		   show:chartConfiguration.showLegend=='legendtrue'?true:false,
		   fontSize: chartConfiguration.fontSize,
    	   showForSingleSeries: true,
    	   itemMargin: {
           horizontal: 0,
           vertical: 5
         },
    	   labels: {
    	          colors: 'White',
    	          useSeriesColors: false
    	   },
    	      markers: {
    	          width: 12,
    	          height:12
    	      },
    	    formatter: function(seriesName, opts) {
    	    	 return [seriesName, " : ", (opts.w.globals.series[opts.seriesIndex]!=0)?(opts.w.globals.series[opts.seriesIndex]/1000)+"k" :''];
    	    },
    	   onItemClick: {
          toggleDataSeries: false
	      },
	      onItemHover: {
	          highlightDataSeries: false
	      },
    	  },
        stroke:{width:0},
        colors: ["#f0ab2e", "#0097fe", "#44546a", "#8A99B5", "#ffff00"],
        tooltip: {
				  x: {
			          show: false,
			      },
				 y: {
				 formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
						
								 if (value >= 1000) 
									return  (value / 1000)+'K';
									else 
									return value;
					},
				    title: {
			              formatter: (seriesName) => '',
			          },
			      },
			   },
		       dataLabels: {
				  style: {
				      fontSize: chartConfiguration.fontSize,
				  },
				},
		series: chartConfiguration.chartSeries,
        labels: chartConfiguration.chartLabels,
       
        };
}

function getPieChartOptionEmptySeries(chartConfiguration){
	return  options_pie = {
          chart: {
			height: 520,
			type: 'pie',
			animations: { enabled: false }
		},
		title: {
			text: chartConfiguration.title,
			align: 'center',
					margin: 0,
					offsetY: 20,
					style: {
						fontWeight: 'bold',
					},
		},
		subtitle: {
			text: 'copyright LibVol.com',
			align: 'right',
			margin: 10,
			offsetX: -50,
			offsetY: 30,
			floating: false,
			style: {
				fontSize: '10px',
				fontWeight: 'normal',
				color: '#9699a2'
			},
		},
		legend: {
		   fontSize:'16px',
    	   showForSingleSeries: true,
    	   itemMargin: {
           horizontal: 0,
           vertical: 5
         },
    	   labels: {
			     colors: 'White',
    	         useSeriesColors: false
    	   },
    	    markers: {
    	          width: 12,
    	          height:12
    	      },
    	    formatter: function(seriesName, opts) {
    	    	 return [seriesName];
    	    },
    	   onItemClick: {
          toggleDataSeries: false
	      },
	      onItemHover: {
	          highlightDataSeries: false
	      },
    	  },
        stroke:{width:0},
        colors: ["#8a99b5"],
        tooltip: {
			      enabled: false,
			   },
	       dataLabels: {
			    enabled: false,
			  style: {
			      fontSize: chartConfiguration.fontSize,
			  },
			},
		series: chartConfiguration.chartSeries,
        labels: chartConfiguration.chartLabels,
       
        };
}

function getPieChartOption(chartConfiguration){
	return  options_pie = {
          chart: {
			height: 520,
			type: 'pie',
			animations: { enabled: false }
		},
		subtitle: {
			text: 'copyright LibVol.com',
			align: 'right',
			margin: 10,
			offsetX: -10,
			offsetY: 30,
			floating: false,
			style: {
				fontSize: '10px',
				fontWeight: 'normal',
				color: '#9699a2'
			},
		},
		legend: {
		   show:chartConfiguration.showLegend=='legendtrue'?true:false,
		   fontSize: chartConfiguration.fontSize,
    	   showForSingleSeries: true,
    	   itemMargin: {
           horizontal: 0,
           vertical: 5
         },
    	   labels: {
    	          colors: 'White',
    	          useSeriesColors: false
    	   },
    	      markers: {
    	          width: 12,
    	          height:12
    	      },
    	    formatter: function(seriesName, opts) {
    	     return [seriesName, " : ", (opts.w.globals.series[opts.seriesIndex]!=0)?(opts.w.globals.series[opts.seriesIndex]/1000)+"k" :''];
    	   },
    	   onItemClick: {
          toggleDataSeries: false
	      },
	      onItemHover: {
	          highlightDataSeries: false
	      },
    	  },
        stroke:{width:0},
        colors: ["#f0ab2e", "#0097fe", "#44546a", "#8A99B5", "#ffff00"],
        tooltip: {
				  x: {
			          show: false,
			      },
				 y: {
				 formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
							
								if (value >= 1000) 
									return  (value / 1000)+'K';
									else 
									return value;
					},
				    title: {
			              formatter: (seriesName) => '',
			          },
			      },
			   },
		       dataLabels: {
				  style: {
				      fontSize: chartConfiguration.fontSize,
				  },
				},
		 };
}
function updatePieChartOptions (chartConfiguration){
	chart.updateOptions(getPieChartOption(chartConfiguration));
}