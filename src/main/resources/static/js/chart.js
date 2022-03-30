var options = {
		series: [],
		chart: {
			toolbar: {
				show: true,
				offsetX: 0,
				offsetY: 0,
				tools: {
					download: false,
					selection: true,
					zoom: true,
					zoomin: true,
					zoomout: true,
					pan: true,
					reset: true | '<img src="/static/icons/reset.png" width="20">',
					customIcons: []
				}
			},
			height: 525,
			type: 'line',
			animations: { enabled: false }
		},
		grid: {

			show: false,
			borderColor: '#f0e68c',
			strokeDashArray: 1,
			opacity: 0.5,
			padding: {
				right: 60,
			},
		},
		colors: ["#F0AB2E", "#0097FE", "#F9E79F", "#7e95d9", "#FAD7A0", "#a3a3a5"],
		fill: {
			type: 'solid',
			opacity: [1, 1],
		},
		stroke: {
			curve: 'straight',
			width: 2.25
		},
		markers: {
			colors: '#ffffff',
			size: 2,
			shape: 'square',
		},
		title: {
			text: '',
			align: 'center',
			margin: 10,
			style: {
				fontWeight: 'bold',
				color: '#263238'
			},
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
		dataLabels: {
			enabled: false
		},
		xaxis: {
			labels: {
				rotate: 0,
				rotateAlways: true,
				minHeight: 0,
				style: {
					fontSize: fontsize,
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
		legend: {
		   show:eval(showLegend.split('legend')[1]),
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
		yaxis: [{
			labels: {
				style: {
					fontSize: fontsize,
				}
			},
			axisBorder: {
				width: 3,
				show: true,
				color: '#ffffff',
				offsetX: 0,
				offsetY: 0
			},

		}],
		noData: {
			text: 'No data In this date range',
			align: 'center',
			verticalAlign: 'middle',
			offsetX: 0,
			offsetY: 0,
			style: {
				color: undefined,
				fontSize: '14px',
				fontFamily: undefined
			}
		}
	};
	var optionsWeekly = {
		series: [],
		chart: {
			toolbar: {
				show: true,
				offsetX: 0,
				offsetY: 0,
				tools: {
					download: false,
					selection: true,
					zoom: true,
					zoomin: true,
					zoomout: true,
					pan: true,
					reset: true | '<img src="/static/icons/reset.png" width="20">',
					customIcons: []
				}
			},
			type: 'line',
			height: 525,
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '70%'
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent']
		},
		legend: {
		   show:eval(showLegend.split('legend')[1]),
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
		yaxis: [{
			labels: {
				style: {
					fontSize: fontsize,
				}
			},

		}],
		colors: ["#F0AB2E", "#0097FE", "#F9E79F", "#7e95d9", "#FAD7A0", "#a3a3a5"],
		fill: {
			opacity: [1, 1],
		},
		xaxis: {
			type: '',
			tickPlacement: 'on'
		}
	}
function getChartDailyOption(title,showgrid,fontSize,markerSize)
{
var chartOption = {
   	  			          series: [],
   	  			          chart: {
		   	  			         toolbar: {
									show: true,
									offsetX: 0,
									offsetY: 0,
									tools: {
									  download: false,
									  selection: true,
									  zoom: true,
									  zoomin: true,
									  zoomout: true,
									  pan: true,
									  reset: true | '<img src="/static/icons/reset.png" width="20">',
									  customIcons: []
									}
								},
   	  			          height: 525,
						  width: 1078,
   	  			          type: 'line',
   	  			          animations: { enabled: false }
   	  			        },
   	  			   grid: {
				  show:eval(showgrid),
   	  			  borderColor: '#f0e68c',
   	  			  strokeDashArray:1,
   	  		       opacity: 0.5,
		   	  		  padding: {
		   	  	        right: 60,
		   	  	    },  
   	  			},
   	  			        colors: ["#F0AB2E", "#0097FE","#F9E79F","#7e95d9","#FAD7A0","#a3a3a5"],
   	  			        fill: {
   	  			            type:'solid',
   	  			            opacity: [1, 1],
   	  			          },
   	  			        stroke: {
   	  			        	 curve: 'straight',
   	  			        	   width: 2.25
   	  			        },
   	  			        markers: {
   	  			       colors: '#ffffff',
                        size: markerSize,
                        shape:'square',
   	  			        },
   	  			        title: {
  	    				          text: title,
  	    				            margin: 35,
  	    				          align: 'center',
  	    				        style: {
  	    				          fontWeight:  'bold',
  	    				          color:  '#263238'
  	    				          },
  	    				        },
  	    				           subtitle: {
			      	    				        text: 'copyright LibVol.com',
			      	    				        align: 'right',
			      	    				        margin: 0,
			      	    				        offsetX: -10,
			      	    				        offsetY: 30,
			      	    				        floating: false,
			      	    				        style: {
			      	    				          fontSize:  '10px',
			      	    				          fontWeight:  'normal',
			      	    				          color:  '#9699a2'
			      	    				        },
			      	    				    },
   	  			        dataLabels: {
   	  			          enabled: false
   	  			        },
   	  			        xaxis: {
	   	  			       labels:  { hideOverlappingLabels: false,
	   	  			         		  rotate: -70,
					                  rotateAlways: true,
					                  minHeight:30,
					        		  style: {
							        	  fontSize: fontSize,
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
   	 		 	legend: {
						   show:eval(showLegend.split('legend')[1]),
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
			         yaxis: [{ 
				        tickAmount: 6,
			        	labels: {
			        		 style: {
					        	  fontSize: fontSize,
					        	 }
			        	  },
			         axisBorder: {
			                  width: 3,
			                  show: true,
			                  color: '#ffffff',
			                  offsetX: 0,
			                  offsetY: 0
			              },
			        }],
   	  			        };
   	  			        return chartOption;
   	  			        }
 var chartoptionsWeekly = {
   	    	          series: [],
   	    	            chart: {
   	    	             toolbar: {
		   	  			        show: true,
		   	  			        offsetX: 0,
		   	  			        offsetY: 0,
		   	  			        tools: {
		   	  			          download: false,
		   	  			          selection: true,
		   	  			          zoom: true,
		   	  			          zoomin: true,
		   	  			          zoomout: true,
		   	  			          pan: true,
		   	  			          reset: true | '<img src="/static/icons/reset.png" width="20">',
		   	  			          customIcons: []
		   	  			        }},
   	    	            type: 'bar',
   	    	            height: 525,
 						width: 1078,
   	    	          },
					  grid: {
						borderColor: '#f0e68c',
						strokeDashArray:1,
						opacity: 0.5,
   	  		              },
   	    	          plotOptions: {
   	    	            bar: {
   	    	              horizontal: false,
   	    	              columnWidth: '70%'
   	    	            },
   	    	          },
   	    	          dataLabels: {
   	    	            enabled: false
   	    	          },
   	    	          stroke: {
   	    	            show: true,
   	    	            width: 2,
   	    	            colors: ['transparent']
   	    	          },
   	    	   legend: {
						   show:eval(showLegend.split('legend')[1]),
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
			         yaxis: [{ 
				        tickAmount: 6,
			        	labels: {
			        		 style: {
					        	  fontSize: 12,
					        	 }
			        	  },
			        
			        }],
   	  			      colors: ["#F0AB2E", "#0097FE","#F9E79F","#7e95d9","#FAD7A0","#a3a3a5"],
   	  			      fill: {
   	  			            type:'solid',
   	  			            opacity: [1, 1],
   	  			              },
			        xaxis: {
	  			           type: '',
	  			        	tickPlacement: 'on' 
 			        }
   	    	          };
function getSubChartDailyOption(title,showgrid,fontSize,markerSize)
{
var chartOption = {
   	  			          series: [],
   	  			          chart: {
		   	  			         toolbar: {
									show: true,
									offsetX: 0,
									offsetY: 0,
									tools: {
									  download: false,
									  selection: true,
									  zoom: true,
									  zoomin: true,
									  zoomout: true,
									  pan: true,
									  reset: true | '<img src="/static/icons/reset.png" width="20">',
									  customIcons: []
									}
								},
   	  			          height: 525,
 						  width: 543,
   	  			          type: 'line',
   	  			          animations: { enabled: false }
   	  			        },
   	  			   grid: {
				  show:eval(showgrid),
   	  			  borderColor: '#f0e68c',
   	  			  strokeDashArray:1,
   	  		       opacity: 0.5,
		   	  		  padding: {
		   	  	        right: 60,
		   	  	    },  
   	  			},
   	  			        colors: ["#F0AB2E", "#0097FE","#F9E79F","#7e95d9","#FAD7A0","#a3a3a5"],
   	  			        fill: {
   	  			            type:'solid',
   	  			            opacity: [1, 1],
   	  			          },
   	  			        stroke: {
   	  			        	 curve: 'straight',
   	  			        	   width: 2.25
   	  			        },
   	  			        markers: {
   	  			       colors: '#ffffff',
                        size: markerSize,
                        shape:'square',
   	  			        },
   	  			        title: {
  	    				          text: title,
  	    				            margin: 35,
  	    				          align: 'center',
  	    				        style: {
  	    				          fontWeight:  'bold',
  	    				          color:  '#263238'
  	    				          },
  	    				        },
  	    				           subtitle: {
			      	    				        text: 'copyright LibVol.com',
			      	    				        align: 'right',
			      	    				        margin: 0,
			      	    				        offsetX: -10,
			      	    				        offsetY: 30,
			      	    				        floating: false,
			      	    				        style: {
			      	    				          fontSize:  '10px',
			      	    				          fontWeight:  'normal',
			      	    				          color:  '#9699a2'
			      	    				        },
			      	    				    },
   	  			        dataLabels: {
   	  			          enabled: false
   	  			        },
   	  			        xaxis: {
	   	  			       labels:  { hideOverlappingLabels: false,
	   	  			         		  rotate: -70,
					                  rotateAlways: true,
					                  minHeight:30,
					        		  style: {
							        	  fontSize: fontSize,
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
   	  			   legend: {
		   	  			   fontSize: fontSize,
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
				    	        return [img , seriesName]
				    	    }
				    	  },
			         yaxis: [{ 
				        tickAmount: 6,
			        	labels: {
			        		 style: {
					        	  fontSize: fontSize,
					        	 }
			        	  },
			         axisBorder: {
			                  width: 3,
			                  show: true,
			                  color: '#ffffff',
			                  offsetX: 0,
			                  offsetY: 0
			              },
			        }],
   	  			        };
   	  			        return chartOption;
   	  			        }
 var chartoptionsWeekly = {
   	    	          series: [],
   	    	            chart: {
   	    	             toolbar: {
		   	  			        show: true,
		   	  			        offsetX: 0,
		   	  			        offsetY: 0,
		   	  			        tools: {
		   	  			          download: false,
		   	  			          selection: true,
		   	  			          zoom: true,
		   	  			          zoomin: true,
		   	  			          zoomout: true,
		   	  			          pan: true,
		   	  			          reset: true | '<img src="/static/icons/reset.png" width="20">',
		   	  			          customIcons: []
		   	  			        }},
   	    	            type: 'bar',
   	    	            height: 525,
  						width: 543,
   	    	          },
					  grid: {
						borderColor: '#f0e68c',
						strokeDashArray:1,
						opacity: 0.5,
   	  		              },
   	    	          plotOptions: {
   	    	            bar: {
   	    	              horizontal: false,
   	    	              columnWidth: '70%'
   	    	            },
   	    	          },
   	    	          dataLabels: {
   	    	            enabled: false
   	    	          },
   	    	          stroke: {
   	    	            show: true,
   	    	            width: 2,
   	    	            colors: ['transparent']
   	    	          },
   	    	       legend: {
			        	   fontSize: 12,
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
				    	        return [img , seriesName]
				    	    }
				    	  }, 
			         yaxis: [{ 
				        tickAmount: 6,
			        	labels: {
			        		 style: {
					        	  fontSize: 12,
					        	 }
			        	  },
			        
			        }],
   	  			      colors: ["#F0AB2E", "#0097FE","#F9E79F","#7e95d9","#FAD7A0","#a3a3a5"],
   	  			      fill: {
   	  			            type:'solid',
   	  			            opacity: [1, 1],
   	  			              },
			        xaxis: {
	  			           type: '',
	  			        	tickPlacement: 'on' 
 			        }
   	    	          };
   	    	             	    	          
function updateGraphFont(fontsize,minvalue,maxvalue){
				var Daily = $("#DailyRadioButton").val();
				if(Daily)
					chart.updateOptions({
						xaxis: {
				        	labels: {
				        		 style: {
						        	  fontSize: fontsize,
						        	 },
						        	 axisBorder: {
										  show: true,
										  color: '#ffffff',
										  height: 3,
										  width: '100%',
										  offsetX: 0,
										  offsetY: 0
									  },
				        	  },
				         // type: 'datetime'
				        },
				       legend: {
						   show:eval(showLegend.split('legend')[1]),
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
				         yaxis: [
					     {  tickAmount: 6,
 				    	    min:Math.sign(minvalue)==-1 ? -Math.abs(minvalue)-0.1 : Math.abs(minvalue)-0.1,
 				    	    max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+0.1 : Math.abs(maxvalue)+0.1,
				     	    labels: {
				        		 minWidth: 75,maxWidth: 75,
				        		 style: {
						        	  fontSize: fontsize,
						        	 }
				        	  },
				        	  axisBorder: {
				                  width: 3,
				                  show: true,
				                  color: '#ffffff',
				                  offsetX: 0,
				                  offsetY: 0
				              },
				        }]
						})
				 if(!Daily)
					   chart.updateOptions({
							xaxis: {
					        	labels: {
					        		 style: {
							        	  fontSize: fontsize,
							        	 }
					        	  },
					        	  axisBorder: {
									  show: true,
									  color: '#ffffff',
									  height: 3,
									  width: '100%',
									  offsetX: 0,
									  offsetY: 0
								  },
					        },
					     legend: {
						   show:eval(showLegend.split('legend')[1]),
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
					         yaxis: [{
						    tickAmount: 6,
 				    	    min:Math.sign(minvalue)==-1 ? -Math.abs(minvalue)-0.1 : Math.abs(minvalue)-0.1,
 				    	    max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+0.1 : Math.abs(maxvalue)+0.1,
				     	   	labels: {
					 				 minWidth: 75,maxWidth: 75,
					        		 style: {
							        	  fontSize: fontsize,
							        	 }
					        	  },
					        	  axisBorder: {
					                  width: 3,
					                  show: true,
					                  color: '#ffffff',
					                  offsetX: 0,
					                  offsetY: 0
					              },
					        }]
							})
	
			};   	    	          
function getCountryFlag(seriesName)
{
	var img;
	if (seriesName.toUpperCase().includes("GERMAN"))
	  img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/germany.png'/>";
	else
		if (seriesName.toUpperCase().includes("USA"))
	    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/united-states.png'/>";
		else
			if (seriesName.toUpperCase().includes("FRANCE"))
		    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/france.png'/>";
			else
				if (seriesName.toUpperCase().includes("UK"))
			    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/united-kingdom.png'/>";
				else
					if (seriesName.toUpperCase().includes("ITALY"))
				    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/italy.png'/>";
					else
						if (seriesName.toUpperCase().includes("SPAIN"))
					    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/spain.png'/>";
						else
						  if (seriesName.toUpperCase().includes("FRA-GER"))
						  img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/fra-ger.png'/>";
						else
							if (seriesName.toUpperCase().includes("ITA-GER"))
						    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/ita-ger.png'/>";
							else
								if (seriesName.toUpperCase().includes("SPN-GER"))
							    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/spn-ger.png'/>";
								else
									if (seriesName.toUpperCase().includes("UK-GER"))
								    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/uk-ger.png'/>";
									else
										if (seriesName.toUpperCase().includes("USA-GER"))
									    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/usa-ger.png'/>";
										else
											if (seriesName.toUpperCase().includes("USA-UK"))
										    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/usa-uk.png'/>";
											else
												if (seriesName.toUpperCase().includes("ITA-FRA"))
											    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/ita-fra.png'/>";
												else
													if (seriesName.toUpperCase().includes("ITA-SPN"))
												    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/ita-spn.png'/>";
	return img;
}

function getMinDate(arrayofdates)
{
  var minDate=new Date(Math.min.apply(null,arrayofdates));
  return minDate;
}

function getChartType(dbChartType)
{
  if(dbChartType!=null && dbChartType!="")
	{
	 if (dbChartType == "Area")
		{
		chartType = 'area';
		curve = 'straight'; 
	    return [chartType,curve];
	    }
	  else
	 if (dbChartType == "Bars")
		{
		chartType = 'column';
		curve = 'straight'; 
	    return [chartType,curve];
	    }
	  else if (dbChartType == "Line")
	   { 
	    chartType = 'line';
	    curve = 'straight'; 
	    return [chartType,curve];
	    }
	  else if(dbChartType == "Line Spline")
		 { 
	    chartType = 'line';
	    curve = 'smooth'; 
	    return [chartType,curve];
	    }
	}
	else
	{
	chartType = 'line';
	curve = 'straight';
	return [chartType,curve];
	}
}
function getFormat(Format)
{
 var valueFormat=3;
  var  FormatIsDecimal= false;
  
  if (Format!=null && Format!="")
   { 
	 if (Format.includes("%"))
       { FormatIsDecimal= false;
    	   if (typeof Format.split(".")[1] != 'undefined')
    		 valueFormat=Format.split("%")[0].split(".")[1].length;
            	else
            		valueFormat=0;
       }
   else 
    	{
	    if (typeof Format.split(".")[1] != 'undefined')
    	valueFormat=Format.split(".")[1].length
    	else 
    		valueFormat=0;
    		
    		FormatIsDecimal= true;	
    	}
   }
   	return [valueFormat,FormatIsDecimal];
}
 function updateChartOption()
{
	
	  if (chartType1=='area')
		{
		   chart.updateOptions({
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
	            stroke: {
			      	 colors: ["#ffffff"],
		        },
			});
			
		} else 	
			if (chartColor=='#44546a')
			{
				chart.updateOptions({
					colors: ['#2e75b6'],
				       fill: {
			            type:'solid',
			            opacity: [1,1],
			          }, 
			        stroke: {
				      	 colors: ['#2e75b6'],
			        },
		         markers: {
					   colors: ['#2e75b6'],
					   strokeColors:['#2e75b6']
				     }
	    		});
			}
		else 
			chart.updateOptions({
				colors: [chartColor],
			       fill: {
		            type:'solid',
		            opacity: [1,1],
		          }, 
		        stroke: {
			      	 colors: [chartColor],
		        },
	         markers: {
				   colors: [chartColor],
				   strokeColors:[chartColor]
			     }
			});
		      	    	        	 
}