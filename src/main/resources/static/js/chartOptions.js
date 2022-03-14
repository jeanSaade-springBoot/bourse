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
function graphTypeOption(chartType)
{
if (chartColor=='#44546a' && chartType=='area')
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
    			colors: ['#222a35'],
		        fill: {
	                type: 'gradient',
	                gradient: {
				    gradientToColors: '#2e75b6',
				      shadeIntensity: 0,
				      type: "vertical",
				     inverseColors: false,
				      stops: [30, 90, 100],
				      opacityFrom: 1,
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
if (chartColor=='#44546a' && chartType=='area')
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
    			colors: ['#222a35'],
		        fill: {
	                type: 'gradient',
	                gradient: {
				    gradientToColors: '#2e75b6',
				      shadeIntensity: 0,
				      type: "vertical",
				     inverseColors: false,
				      stops: [30, 90, 100],
				      opacityFrom: 1,
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
function getFontSize(chartDbFontSize)
{
   activeFontSize = $('#fontOptions > .btn.active').attr('id');
	if (typeof activeFontSize == 'undefined')
	  { $('#'+chartDbFontSize).addClass("active");
	  	fontsize=chartDbFontSize;
	  } else 
		fontsize = activeFontSize;
		
		return fontsize;
}

function getDBChartType(DbchartType,Daily)
{
   activeChartType = $('#chartTypes > .btn.active').attr('id');
	if (typeof activeChartType == 'undefined')
	  { $(Daily?'#'+DbchartType.toLowerCase():'#column').addClass("active");
	  	chartType=Daily?DbchartType:'column';
	  } else 
		chartType = activeChartType;
		
		return chartType;
}	
function getChartColor(chartColor)
{
   activeChartColor = $('#chartColor > .btn.active').attr('id');
	if (typeof activeChartColor == 'undefined')
	  { $('#'+chartColor.split("#")[1]).addClass("active");
	  	nChartColor=chartColor;
	  } else 
		nChartColor = activeChartColor;
		
		return nChartColor;
}		  