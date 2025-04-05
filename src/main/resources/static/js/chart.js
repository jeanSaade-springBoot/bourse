var checkedItem = 0;
var checkedItemid = [];
var checkedItemidRight = [];
var checkedItemidLeft = [];
var monthDate = new Date();
monthDate.setMonth(monthDate.getMonth() - 6);
monthDate.setHours(0, 0, 0, 0);
var startdate = new Date();
var date = new Date();
var timeRange="Daily";
const missingDatesGroups=["10","15", "16","32","33","34","35","36","22","23","24"];
const PositiveGraphs=['sti','fxcds', 'usjobs'];
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
var checkedItemRight   = 0;
var checkedItemLeft = 0;
var dataFormatIsDecimal=false;
var chart1;
var chart2;
var T1;
var T2; 
var yaxisformat=3;
var dataFormat=3;
var isOneScale=false;
var options = {
		series: [],
		chart: {
			toolbar: {
				show: true,
				offsetX: -50,
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
		colors: ["#FFFFFF", "#0000ff", "#ff0000", "#00ff00", "#ffff00", "#ffa500"],
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
			text: '',
			align: 'center',
			verticalAlign: 'middle',
			offsetX: 0,
			offsetY: 0,
			style: {
				color: undefined,
				fontSize: '14px',
				fontFamily: undefined
			}
		},
	/*	annotations: {
		  yaxis: [{
		    y: 0,
			strokeDashArray: 0,
			offsetX: 0,
			 width: '100%',
			 borderColor: '#00E396',
		      label: {
			    position: 'left',
			    offsetX: -10,
                offsetY: 0,
		        borderColor: '#172568',
		        style: {
		          color: '#fff',
		          background: '#172568'
		        },
		        text: ''
		      }
		  }]
		}*/
	};
var options_missingDates = {
		series: [],
		chart: {
			toolbar: {
				show: true,
				offsetX: -50,
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
		colors: ["#FFFFFF", "#0000ff", "#ff0000", "#00ff00", "#ffff00", "#ffa500"],
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
			text: '',
			align: 'center',
			verticalAlign: 'middle',
			offsetX: 0,
			offsetY: 0,
			style: {
				color: undefined,
				fontSize: '14px',
				fontFamily: undefined
			}
		},
	/*	annotations: {
		  yaxis: [{
		    y: 0,
			strokeDashArray: 0,
			offsetX: 0,
			 width: '100%',
			 borderColor: '#00E396',
		      label: {
			    position: 'left',
			    offsetX: -10,
                offsetY: 0,
		        borderColor: '#172568',
		        style: {
		          color: '#fff',
		          background: '#172568'
		        },
		        text: ''
		      }
		  }]
		}*/
	};	
	 var optionsWeekly = {
		series: [],
		chart: {
			toolbar: {
				show: true,
				offsetX: -50,
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
		colors: ["#FFFFFF", "#0000ff", "#ff0000", "#00ff00", "#ffff00", "#ffa500"],
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
			text: '',
			align: 'center',
			verticalAlign: 'middle',
			offsetX: 0,
			offsetY: 0,
			style: {
				color: undefined,
				fontSize: '14px',
				fontFamily: undefined
			}
		},
	
	};
	var optionsWeeklyy = {
		series: [],
		chart: {
			toolbar: {
				show: true,
				offsetX: -50,
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
		colors: ["#FFFFFF", "#0000ff", "#ff0000", "#00ff00", "#ffff00", "#ffa500"],
		fill: {
			opacity: [1, 1],
		},
		xaxis: {
			type: '',
			//tickPlacement: 'on'
		}
	};
	
function getChartDailyOption(title,showgrid,fontSize,markerSize)
{
			var chartOption = {
   	  			          series: [],
   	  			          chart: {
		   	  			         toolbar: {
									show: true,
									offsetX: -50,
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
   	  			        colors: ["#FFFFFF", "#0000ff", "#ff0000", "#00ff00", "#ffff00", "#ffa500"],
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
			      	    				        margin: 0,
			      	    				        offsetX: -50,
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
function getChartDailyOptionMissingDates(title,showgrid,fontSize,markerSize)
		{
			var chartOption = {
   	  			          series: [],
   	  			          chart: {
		   	  			         toolbar: {
									show: true,
									offsetX: -50,
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
   	  			        colors: ["#FFFFFF", "#0000ff", "#ff0000", "#00ff00", "#ffff00", "#ffa500"],
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
			      	    				        margin: 0,
			      	    				        offsetX: -50,
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
							          formatter: function(value, timestamp, opts) {
											
											let a = [{day: 'numeric'}, {month: 'short'}, {year: '2-digit'}];
											let s =  (isTimestamp(value))?join(value, a, '-'):value;
											
								            return s;
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
		   	  			        offsetX: -50,
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
 						animations: { enabled: false }
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
   	  			      colors: ["#FFFFFF", "#0000ff", "#ff0000", "#00ff00", "#ffff00", "#ffa500"],
   	  			      fill: {
   	  			            type:'solid',
   	  			            opacity: [1, 1],
   	  			              },
			        xaxis: {
	  			           type: 'datetime',
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
									offsetX: -50,
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
   	  			        colors: ["#FFFFFF", "#0000ff", "#ff0000", "#00ff00", "#ffff00", "#ffa500"],
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
			      	    				        margin: 0,
			      	    				        offsetX: -50,
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
							        formatter: function(value, timestamp, opts) {
											
											let a = [{day: 'numeric'}, {month: 'short'}, {year: '2-digit'}];
											let s =  (isTimestamp(value))?join(value, a, '-'):value;
											
								            return s;
								          }	 
					        	  },
   	  			           type: typeof hasMissingDates !='undefined'?hasMissingDates?'datetime':'category':'category',
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
		   	  			        offsetX: -50,
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
   	  			      colors: ["#FFFFFF", "#0000ff", "#ff0000", "#00ff00", "#ffff00", "#ffa500"],
   	  			      fill: {
   	  			            type:'solid',
   	  			            opacity: [1, 1],
   	  			              },
			        xaxis: {
	  			           type: '',
	  			        	tickPlacement: 'on' 
 			        }
   	    	          };
   	    	             	    	          
function updateGraphFont2YAxis(fontsize,min1,max1,min2,max2){
        		 
				//var valueMin1 = getMarginLenght(min1);  
				//var valueMin2 = getMarginLenght(min2);  
				
				//var valueMax1 = getMarginLenght(max1);  
				//var valueMax2 = getMarginLenght(max2);  
				//console.log(fontsize,min1,max1,min2,max2,valueMin1,valueMin2,valueMax1,valueMax2)
				 const values1 = addMarginToMinMax(min1, max1, 5);
				     var valueMin1 = values1;
				     var valueMax1 = values1; 	
				    var calculatedMinValue = Math.sign(chartConfigSettings.minvalue) == -1 ? -Math.abs(chartConfigSettings.minvalue) - valueMin : Math.abs(chartConfigSettings.minvalue) - valueMin;
				     graphService=typeof graphService!='undefined'?graphService:'';
				   //  calculatedMinValue = PositiveGraphs.includes(graphService)?( Math.sign(calculatedMinValue) == -1 ?0:calculatedMinValue): calculatedMinValue;
				     calculatedMinValue =  (Math.sign(calculatedMinValue) == -1 && !(Math.sign(min1)==-1)  )? 0: calculatedMinValue;

				  const values2 = addMarginToMinMax(min2, max2, 5);
				     var valueMin2 = values2;
				     var valueMax2 = values2; 
				     	    
		   	    var selectedValue = Math.abs(min2)>=Math.abs(max2)?Math.abs(min2):Math.abs(max2);
                 selectedValue = selectedValue+values2;
                 
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
										 labels: {
		     				    		 minWidth: 75,maxWidth: 75,
		 				        		 style: {
		 						        	  fontSize: fontsize,
		 						        	 }, formatter: function(val, index) {
										 if (notDecimal)
						  				  return  val.toFixed(nbrOfDigits);
						  				else 
						  				  return  val.toFixed(nbrOfDigits) + "%";
									      }
		 				        	  },
		     				          tickAmount: 6,
		     				    	  min:Math.sign(min1)==-1 ? -Math.abs(min1)-valueMin1 : Math.abs(min1)-valueMin1,
		     				    	  max:Math.sign(max1)==-1 ? -Math.abs(max1)+valueMax1 : Math.abs(max1)+valueMax1,
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
						     				    		 minWidth: (fontsize=='12px')?75:120,maxWidth:  (fontsize=='12px')?75:120,
						 				        		 style: {
						 						        	  fontSize: fontsize,
						 						        	 }, formatter: function(val, index) {
										 if (notDecimal1)
						  				  return  val.toFixed(nbrOfDigits1);
						  				else 
						  				  return  val.toFixed(nbrOfDigits1) + "%";
									      }
						 				        	  },
					     				          tickAmount: 6,
					     				    	     min:(typeof functionId != 'undefined')?(functionId+1>=7?Math.sign(min2)==-1 ? -Math.abs(min2) : Math.abs(min2) : (functionId >= 2 && functionId <= 7)?(Math.sign(min2)==-1 ? -Math.abs(selectedValue) : Math.abs(selectedValue)): Math.sign(min2)==-1 ? -Math.abs(min2)-valueMin2 : Math.abs(min2)-valueMin2 ):Math.sign(min2)==-1 ? -Math.abs(min2)-valueMin2 : Math.abs(min2)-valueMin2,
					     				      	   	 max:(typeof functionId != 'undefined')?(functionId+1>=7?Math.sign(max2)==-1 ? -Math.abs(max2) : Math.abs(max2) : (functionId >= 2 && functionId <= 7)?(Math.sign(max2)==-1 ? -Math.abs(selectedValue) : Math.abs(selectedValue)): Math.sign(max2)==-1 ? -Math.abs(max2)+valueMax2 : Math.abs(max2)+valueMax2 ):Math.sign(max2)==-1 ? -Math.abs(max2)+valueMax2 : Math.abs(max2)+valueMax2,
					     				    			  axisBorder: {
					     					                  width: 3,
					     					                  show: true,
					     					                  color: (typeof functionId != 'undefined')?(functionId+1>=7?"#00c9ff96" :"#FF0000" ):"#FF0000",
					     					                  offsetX: 0,
					     					                  offsetY: 0
					     					              },
					     				    			 }],
					     				    			 
					     				    			 
							})
	
			};  
			  	    	             	    	          
function updateGraphFont(fontsize,minvalue,maxvalue){

				//var valueMin = getMarginLenght(minvalue); 
				//var valueMax = getMarginLenght(maxvalue); 
				 const values = addMarginToMinMax(minvalue, maxvalue, 5);
				     var valueMin = values;
				     var valueMax = values; 
				     var calculatedMinValue = Math.sign(minvalue) == -1 ? -Math.abs(minvalue) - valueMin : Math.abs(minvalue) - valueMin;
				      graphService=typeof graphService!='undefined'?graphService:'';
				        // calculatedMinValue = PositiveGraphs.includes(graphService)?( Math.sign(calculatedMinValue) == -1 ?0:calculatedMinValue): calculatedMinValue;
				    	 calculatedMinValue =  (Math.sign(calculatedMinValue) == -1 && !(Math.sign(minvalue)==-1)  )? 0: calculatedMinValue;

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
 				    	    min:calculatedMinValue,
 				    	    max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+valueMax : Math.abs(maxvalue)+valueMax,
				     	   	labels: {
					 				 minWidth: 75,maxWidth: 75,
					        		 style: {
							        	  fontSize: fontsize,
							        	 },
							        	  formatter: function(val, index) {
										 if (notDecimal)
						  				  return  val.toFixed(nbrOfDigits);
						  				else 
						  				  return  val.toFixed(nbrOfDigits) + "%";
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
			    	    
function updateGraphFontTrendline(fontsize,minvalue,maxvalue){

				//var valueMin = getMarginLenght(minvalue); 
				//var valueMax = getMarginLenght(maxvalue); 
				 const values = addMarginToMinMax(minvalue, maxvalue, 5);
				     var valueMin = values;
				     var valueMax = values; 
				     var calculatedMinValue = Math.sign(minvalue) == -1 ? -Math.abs(minvalue) - valueMin : Math.abs(minvalue) - valueMin;
				      graphService=typeof graphService!='undefined'?graphService:'';
				        // calculatedMinValue = PositiveGraphs.includes(graphService)?( Math.sign(calculatedMinValue) == -1 ?0:calculatedMinValue): calculatedMinValue;
				    	 calculatedMinValue =  (Math.sign(calculatedMinValue) == -1 && !(Math.sign(minvalue)==-1)  )? 0: calculatedMinValue;
						chart.w.config.annotations.yaxis.forEach((axis) => {
						  if (axis.label && axis.label.style) {
						    axis.label.style.fontSize = fontsize; // e.g., "14px"
						  }
						});
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
 				    	    min:calculatedMinValue,
 				    	    max:Math.sign(maxvalue)==-1 ? -Math.abs(maxvalue)+valueMax : Math.abs(maxvalue)+valueMax,
				     	   	labels: {
					 				 minWidth: 75,maxWidth: 75,
					        		 style: {
							        	  fontSize: fontsize,
							        	 },
							        	  formatter: function(val, index) {
										 if (notDecimal)
						  				  return  val.toFixed(nbrOfDigits);
						  				else 
						  				  return  val.toFixed(nbrOfDigits) + "%";
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
				colors: chartColor=='#44546a'?['#2e75b6']:[chartColor],
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

 function getlength(number) {
				    return number.toString().split(".")[0].length;
				} 
/*function getMarginLenght(value){
	return getlength(value)>=3?10:(value<=0.1)?0.01:0.05; 
}*/	
function addMarginToMinMax(minValue, maxValue, marginPercentage) {

   
    const margin = (maxValue - minValue) * (marginPercentage / 100);

    return margin;
}
function getMarginLenght(value) { 
	value = Math.abs(value);
	   
    const baseMargin = 0.05;

    const dynamicMargin = baseMargin * value;
    
    return dynamicMargin;
	/* value = Math.abs(value);
	if (value <= 0.001) {
        return 0.0005;
    } else if (value <= 0.01) {
        return 0.0001;
    } else if (value <= 0.1) {
        return 0.005;
    } else if (value <= 1) {
        return 0.01;
    }else if (value <= 5) {
        return 0.05;
    } else if (value <= 10) {
        return 0.1;
    }else if (value <= 25) {
        return 1;
    }else if (value <= 50) {
        return 1.5;
    }else if (value <= 75) {
        return 3;
    } else if (value <= 100) {
        return 5;
    } else if (value <= 250) {
        return 10;
    } else if (value <= 500) {
        return 20;
    } else if (value <= 750) {
        return 30;
    } else if (value <= 1000) {
        return 40;
    } else if (value <= 1250) {
        return 50;
    } else if (value <= 1500) {
        return 60;
    } else if (value <= 2000) {
        return 70;
    } else if (value <= 5000) {
        return 80;
    } else if (value <= 10000) {
        return 90;
    } else if (value <= 50000) {
        return 100;
    } else if (value <= 100000) {
        return 200;
    } else if (value <= 250000) {
        return 300;
    } else if (value <= 500000) {
        return 400;
    } else if (value <= 1000000) {
        return 500;
    } else 
    return 1000; */
}	
function getMarginLenghtVolume(value) { 
	 value = Math.abs(value);
	   
    const baseMargin = 0.05;
    const multiplier = 0.02;

    const dynamicMargin = baseMargin + multiplier * value;
	
    return dynamicMargin;
  
	/*
	 value = Math.abs(value);
	if (value <= 0.001) {
        return 0.0005;
    } else if (value <= 0.01) {
        return 0.0001;
    } else if (value <= 0.1) {
        return 0.005;
    } else if (value <= 1) {
        return 0.01;
    }else if (value <= 5) {
        return 0.05;
    } else if (value <= 10) {
        return 0.1;
    }else if (value <= 250) {
        return 10;
    }else if (value <= 500) {
        return 1500;
    }else if (value <= 750) {
        return 3000;
    } else if (value <= 1000) {
        return 5000;
    } else if (value <= 2500) {
        return 10000;
    } else if (value <= 5000) {
        return 20000;
    } else if (value <= 75000) {
        return 30000;
    } else if (value <= 10000) {
        return 40000;
    } else if (value <= 12500) {
        return 50000;
    } else if (value <= 15000) {
        return 60000;
    } else if (value <= 20000) {
        return 70000;
    } else if (value <= 50000) {
        return 80000;
    } else if (value <= 100000) {
        return 90000;
    } else if (value <= 500000) {
        return 100000;
    } else if (value <= 1000000) {
        return 200000;
    } else if (value <= 2500000) {
        return 300000;
    } else if (value <= 5000000) {
        return 400000;
    } else if (value <= 10000000) {
        return 500000;
    } else 
    return 1000000;
  */
    
}
 function enableDisableDropDowns(value){
	 
	  ($('#dropDownFunctions').length)?$("#dropDownFunctions").jqxDropDownList({ disabled: value }):null;  
	  ($('#dropDownFunctions').length)?$("#dropDownFunctions").jqxDropDownList({selectedIndex: -1}):null;  
 }
 function enableDisableGroupOfPeriod(value){
	   ($('#groupOfPeriod').length)?$('#groupOfPeriod').jqxButtonGroup({disabled: value }):null;  
	   ($('#groupOfPeriod').length)?$('#groupOfPeriod').jqxButtonGroup('setSelection', 0):null;  
 }
  function enableDisableDropDownType(value){
	   ($('#dropDownType').length)?$("#dropDownType").jqxDropDownList({ disabled: value }):null; 
	   ($('#dropDownType').length)?$("#dropDownType").jqxDropDownList({selectedIndex: 0}):null;  
 }
 function updateChartByFunctionId(chartConfigSettings){
			 //var valueMin = getMarginLenght(chartConfigSettings.min); 
			// var valueMax = getMarginLenght(chartConfigSettings.max); 
			 //var valueMin1 = getMarginLenght(chartConfigSettings.min1); 
			 //var valueMax1 = getMarginLenght(chartConfigSettings.max1); 
			  const values1 = addMarginToMinMax(chartConfigSettings.min, chartConfigSettings.max, 5);
				     var valueMin = values1;
				     var valueMax = values1; 
			 const values2 = addMarginToMinMax(chartConfigSettings.min1, chartConfigSettings.max1, 5);
				     var valueMin = values2;
				     var valueMax = values2; 		
				 //	console.log(chartConfigSettings.fontSize,chartConfigSettings.min1,chartConfigSettings.max1,chartConfigSettings.min2,chartConfigSettings.max2,valueMin,valueMin1,valueMax,valueMax1)
			     if([1,2, 16, 17, 18, 19].includes(chartConfigSettings.functionId))
			     { 
					  let mva = "";
					if (chartConfigSettings.functionId === 1) {
					  mva = "#FF0000"; // Red for functionId 1
					} else if (chartConfigSettings.functionId === 2) {
					  mva = "#ffa4c5"; // Pink for functionId 2
					} else if (chartConfigSettings.functionId === 16) {
					  mva = "#1f77b4"; // Blue for functionId 16
					} else if (chartConfigSettings.functionId === 17) {
					  mva = "#2ca02c"; // Green for functionId 17
					} else if (chartConfigSettings.functionId === 18) {
					  mva = "#ff7f0e"; // Orange for functionId 18
					} else if (chartConfigSettings.functionId === 19) {
					  mva = "#9467bd"; // Purple for functionId 19
					} else {
					  mva = "#000000"; // Default fallback color (optional)
					}
					
					 chart.updateOptions({ 
						series: [{
							name: chartConfigSettings.response[0].config != null ? (chartConfigSettings.response[0].config.displayDescription == null ? '' : chartConfigSettings.response[0].config.displayDescription) : '',
							type: chartConfigSettings.Period=='d' ? 'area' : 'column',
							data: chartConfigSettings.response[0].graphResponseDTOLst
						}, {
							name: chartConfigSettings.response[1].config != null ? (chartConfigSettings.response[1].config.displayDescription == null ? '' : chartConfigSettings.response[1].config.displayDescription) : '',
							type: 'line',
							data: chartConfigSettings.response[1].graphResponseDTOLst
						}],
  	    	    	  extra:{
							isDecimal: chartConfigSettings.isDecimal,
							yAxisFormat:chartConfigSettings.yAxisFormat0[1],
						},
						colors: [chartColorOpacity(chartConfigSettings.chartColor), mva],
  	    	    	    markers: {
  	    	    		   colors:  ["#FFFFFF", mva],
  	    	    		   strokeColors:  ["#FFFFFF", mva],
  	    	    		   size: 0,
  	    	    		 },
  	    	    		  stroke: {
						      	 colors: ["#FFFFFF",mva],
					        },
 				         yaxis: {

							labels: {
								minWidth: 75, maxWidth: 75,
								style: {
									fontSize:chartConfigSettings.fontSize,
								},
								 formatter: function(val, index) {
										 if (chartConfigSettings.yAxisFormat0[1])
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat0[0]);
						  				else 
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat0[0]) + "%";
									      }
							},
							tickAmount: 6,
							min: Math.sign(chartConfigSettings.min) == -1 ? -Math.abs(chartConfigSettings.min) - valueMin : Math.abs(chartConfigSettings.min) - valueMin,
							max: Math.sign(chartConfigSettings.max) == -1 ? -Math.abs(chartConfigSettings.max) + valueMax : Math.abs(chartConfigSettings.max) + valueMax,
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
									  if(seriesIndex == 0)
						  				{
						  				if (chartConfigSettings.getFormatResult0[1])
						  				  return  value.toFixed(chartConfigSettings.getFormatResult0[0]);
						  				else 
						  				  return  value.toFixed(chartConfigSettings.getFormatResult0[0]) + "%";
						  				}else 
						  					 if(seriesIndex == 1){
						  					  if (chartConfigSettings.getFormatResult1[1])
						  						  return  value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0]):null;
						  						else 
						  							 return  value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0]):null + "%";
						  					 }
								    },
								    title: {
							              formatter: (seriesName) => '',
							          },
					      },
						}
    	    		}); 
    	    		
					
				 }
			      else if(chartConfigSettings.functionId>=7)
  	    	    	{
					 chart.updateOptions({
						 series:[{
							name: chartConfigSettings.response[0].config != null ? (chartConfigSettings.response[0].config.displayDescription == null ? '' : chartConfigSettings.response[0].config.displayDescription) : '',
							type: chartConfigSettings.Period=='d' ? chartConfigSettings.chartType1 : 'column',
							data: chartConfigSettings.response[0].graphResponseDTOLst
						}, {
							name: chartConfigSettings.response[1].config != null ? (chartConfigSettings.response[1].config.displayDescription == null ? '' : chartConfigSettings.response[1].config.displayDescription) : '',
							type: 'column',
							data: chartConfigSettings.response[1].graphResponseDTOLst
						}],
  	    	    	  extra:{
							isDecimal: chartConfigSettings.isDecimal,
							yAxisFormat:chartConfigSettings.yAxisFormat,
						},
						 colors: ["#FFFFFF", "#00c9ff96"],
  	    	    		 markers: {
  	    	    		   colors: ["#FFFFFF", "#00c9ff96"],
  	    	    		   strokeColors:["#FFFFFF", "#00c9ff96"]
  	    	    		 },
 				       	 yaxis: [{
								 labels: {
     				    		 minWidth:75,maxWidth: 75,
 				        		 style: {
 						        	  fontSize: chartConfigSettings.fontSize,
 						        	 },
 						        	  formatter: function(val, index) {
											if (chartConfigSettings.yAxisFormat0[1])
								  				  return  val.toFixed(chartConfigSettings.yAxisFormat0[0]);
								  				else 
								  				  return  val.toFixed(chartConfigSettings.yAxisFormat0[0]) + "%";
									      }
 				        	  },
 				          tickAmount: 6,
 				    	  min:Math.sign(chartConfigSettings.min1)==-1 ? -Math.abs(chartConfigSettings.min1)-valueMin1 : Math.abs(chartConfigSettings.min1)-valueMin1,
 				    	  max:Math.sign(chartConfigSettings.max1)==-1 ? -Math.abs(chartConfigSettings.max1)+valueMax1 : Math.abs(chartConfigSettings.max1)+valueMax1,
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
     				    		    // minWidth: -50,maxWidth: -50,
	 				        		 style: {
	 						        	  fontSize: chartConfigSettings.fontSize,
	 						        	 },
	 						        	  formatter: function(val, index) {
										  if (chartConfigSettings.yAxisFormat1[1])
								  						  return  val.toFixed(chartConfigSettings.yAxisFormat1[0]);
								  						else 
								  							 return  val.toFixed(chartConfigSettings.yAxisFormat1[0]) + "%";
								  							
									      }
		 				        	  },
		 				          tickAmount: 6,
		 				    	  min:min2,
		 				    	  max:max2,
 				    			  axisBorder: {
 					                  width: 3,
 					                  show: true,
 					                  color: "#00c9ff96",
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
								  				if (chartConfigSettings.getFormatResult0[1])
								  				  return  value.toFixed(chartConfigSettings.getFormatResult0[0]);
								  				else 
								  				  return  value.toFixed(chartConfigSettings.getFormatResult0[0]) + "%";
								  				}else 
								  					 if(seriesIndex == 1){
								  					  if (chartConfigSettings.getFormatResult1[1])
								  						  return  value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0]):null;
								  						else 
								  						  return  value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0]):null + "%";
								  					 }
										    },
										    title: {
									              formatter: (seriesName) => '',
									          },
							      },
								}
    	    		}); 
    	    		
				}else  {
				     var selectedValue = Math.abs(chartConfigSettings.min2)>=Math.abs(chartConfigSettings.max2)?Math.abs(min2):Math.abs(max2);
					selectedValue=selectedValue+values2;
					 chart.updateOptions({
						series:[{
								name: chartConfigSettings.response[0].config != null ? (chartConfigSettings.response[0].config.displayDescription == null ? '' : chartConfigSettings.response[0].config.displayDescription) : '',
								type: chartConfigSettings.Period=='d' ? chartConfigSettings.chartType1 : 'column',
								data: chartConfigSettings.response[0].graphResponseDTOLst
							}, {
								name: chartConfigSettings.response[1].config != null ? (chartConfigSettings.response[1].config.displayDescription == null ? '' : chartConfigSettings.response[1].config.displayDescription) : '',
								type: 'column',
								data: chartConfigSettings.response[1].graphResponseDTOLst
							}],
  	    	    	  extra:{
							isDecimal: chartConfigSettings.isDecimal,
							yAxisFormat:chartConfigSettings.yAxisFormat,
						},
						 colors: ["#FFFFFF", "#ff000059"],
  	    	    		 markers: {
  	    	    		   colors: ["#FFFFFF", "#ff000059"],
  	    	    		   strokeColors:["#FFFFFF", "#ff000059"]
  	    	    		 },
 				       yaxis: [{
								 labels: {
     				    		 minWidth: 75,maxWidth: 75,
 				        		 style: {
 						        	  fontSize: chartConfigSettings.fontSize,
 						        	 },
 						        	 formatter: function(val, index) {
										 if (chartConfigSettings.yAxisFormat0[1])
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat0[0]);
						  				else 
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat0[0]) + "%";
									      }
 				        	  },
 				          tickAmount: 6,
 				    	  min:Math.sign(chartConfigSettings.min1)==-1 ? -Math.abs(chartConfigSettings.min1)-valueMin1 : Math.abs(chartConfigSettings.min1)-valueMin1,
 				    	  max:Math.sign(chartConfigSettings.max1)==-1 ? -Math.abs(chartConfigSettings.max1)+valueMax1 : Math.abs(chartConfigSettings.max1)+valueMax1,
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
 						        	  fontSize: chartConfigSettings.fontSize,
 						        	 },
 						        	 formatter: function(val, index) {
										  if (chartConfigSettings.getFormatResult1[1])
								  						  return  val.toFixed(chartConfigSettings.getFormatResult1[0]);
								  						else 
								  							 return  val.toFixed(chartConfigSettings.getFormatResult1[0]) + "%";
								  							
									      }
 				        	  },
 				          tickAmount: 6,
 				    	  min:Math.sign(chartConfigSettings.min2)==-1 ? -Math.abs(selectedValue) : Math.abs(selectedValue),
 				    	  max:Math.sign(chartConfigSettings.max2)==-1 ? -Math.abs(selectedValue) : Math.abs(selectedValue),
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
						  				if (chartConfigSettings.getFormatResult0[1])
						  				  return  value.toFixed(chartConfigSettings.getFormatResult0[0]);
						  				else 
						  				  return  value.toFixed(chartConfigSettings.getFormatResult0[0]) + "%";
						  				}else 
						  					 if(seriesIndex == 1){
						  					  if (chartConfigSettings.getFormatResult1[1])
						  						  return !isNaN(value)?value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0]):null:'';
						  						else 
						  						  return !isNaN(value)?value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0]):null + "%":'';
						  					 }
								    },
								    title: {
							              formatter: (seriesName) => '',
							          },
					      },
						},
						annotations: {
							  yaxis: [{
							    y: 0,
							    yAxisIndex: 1,
								strokeDashArray: 0,
								offsetX: 0,
								width: '100%',
								borderColor: '#FF0000',
							    label: {
								    position: 'right',
								    offsetX: 70,
					                offsetY: 0,
							        borderColor: '#FF0000',
							        style: {
							          color: '#fff',
							          background: '#ff000052'
							        },
							        text: ''
							      }
							  }]
							}
    	    		}); 
    	    		
				}
}

 function updateChartByFunctionIdMissingDates(chartConfigSettings, isFullDate){
			// var valueMin = getMarginLenght(chartConfigSettings.min); 
			// var valueMax = getMarginLenght(chartConfigSettings.max); 
			// var valueMin1 = getMarginLenght(chartConfigSettings.min1); 
			// var valueMax1 = getMarginLenght(chartConfigSettings.max1); 
		 const values = addMarginToMinMax(chartConfigSettings.min1, chartConfigSettings.max1, 5);
				     var valueMin1 = values;
				     var valueMax1 = values; 
	 selectedChartColor= typeof $("#chartColor").find(".active")[0] != 'undefined'? '#'+ $("#chartColor").find(".active")[0].id : chartConfigSettings.chartColor;
		
	chartConfigSettings.chartType =
	  chartConfigSettings.Period == 'd'
	    ? chartConfigSettings.overideChartype != null
	      ? 
	        typeof $("#chartTypes").find(".active")[0] != 'undefined'
	        ? $("#chartTypes").find(".active")[0].id
	        : chartType
	      : 'area' 
	    : 'column'; 
	
	chartConfigSettings.chartColor =
	  chartConfigSettings.chartType != 'area'
	    ? // Check if selectedChartColor is defined
	      selectedChartColor == '#44546a'
	        ? '#2e75b6'
	      : selectedChartColor
	    : '#44546a';

				  if([1,2, 16, 17, 18, 19].includes(chartConfigSettings.functionId))
			     {
					 let mva = "";
					if (chartConfigSettings.functionId === 1) {
					  mva = "#FF0000"; // Red for functionId 1
					} else if (chartConfigSettings.functionId === 2) {
					  mva = "#ffa4c5"; // Pink for functionId 2
					} else if (chartConfigSettings.functionId === 16) {
					  mva = "#1f77b4"; // Blue for functionId 16
					} else if (chartConfigSettings.functionId === 17) {
					  mva = "#2ca02c"; // Green for functionId 17
					} else if (chartConfigSettings.functionId === 18) {
					  mva = "#ff7f0e"; // Orange for functionId 18
					} else if (chartConfigSettings.functionId === 19) {
					  mva = "#9467bd"; // Purple for functionId 19
					} else {
					  mva = "#000000"; // Default fallback color (optional)
					}

					// var valueMin1 = getMarginLenght(chartConfigSettings.min); 
			        // var valueMax1 = getMarginLenght(chartConfigSettings.max); 
			          const values = addMarginToMinMax(chartConfigSettings.min, chartConfigSettings.max, 5);
				     var valueMin1 = values;
				     var valueMax1 = values; 
				      var calculatedMinValue = Math.sign(chartConfigSettings.min)==-1 ? -Math.abs(chartConfigSettings.min)-valueMin1 : Math.abs(chartConfigSettings.min)-valueMin1;
				     	//  calculatedMinValue = (Math.sign(calculatedMinValue) == -1 ?0:calculatedMinValue);
				
					  chart.updateOptions({
						 series:[{
								name: chartConfigSettings.response[0].config != null ? (chartConfigSettings.response[0].config.displayDescription == null ? '' : chartConfigSettings.response[0].config.displayDescription) : '',
								type: chartConfigSettings.chartType,
								data: chartConfigSettings.response[0].graphResponseDTOLst,
							    strokeWidth:chartConfigSettings.Period!='d' ?chartConfigSettings.chartType=='column'?getStrokeWidthPeriod(chartConfigSettings.Period,chartConfigSettings.response[0].graphResponseDTOLst.length):undefined:undefined
							}, {
								name: chartConfigSettings.response[1].config != null ? (chartConfigSettings.response[1].config.displayDescription == null ? '' : chartConfigSettings.response[1].config.displayDescription) : '',
								type:  'line', 
								data: chartConfigSettings.response[1].graphResponseDTOLst
							}],
						 xaxis: {
									labels: {
										rotate: -70,
										rotateAlways: true,
										minHeight: 30,
										style: {
											fontSize: '12px',
										},
										formatter: function(value, timestamp, opts) {
												
											if (isFullDate) {  
											  let a = [{ day: 'numeric' }, { month: 'short' }, { year: '2-digit' }];
											  let options = Object.assign({}, ...a);
											  let s = (isTimestamp(value)) ? join(value, options, '-') : value;
											  return s;
											} else { 
											  let a = [{ month: 'short' }, { year: '2-digit' }];
											  let options = Object.assign({}, ...a);
											  const formattedDate = new Date(value)
											    .toLocaleDateString('en-US', options)
											    .replace(/ /g, '-')
											    .replace(',', '');
											  return formattedDate;
											}

											
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
  	    	    	  extra:{
							isDecimal: chartConfigSettings.isDecimal,
							yAxisFormat:chartConfigSettings.yAxisFormat,
						},
						 colors:[chartConfigSettings.Period=='d' ?(chartConfigSettings.Period=='d' ?chartConfigSettings.overideChartype != null ? (typeof SelectedchartType != 'undefined'? SelectedchartType : chartType) : 'area' : 'column')=='column'?chartConfigSettings.chartColor:chartColorOpacity(chartConfigSettings.chartColor):(chartConfigSettings.chartColor == '#44546a' ? '#2e75b6' : chartConfigSettings.chartColor), mva],
  	    	    		 markers: {
						   size: 0,
  	    	    		   colors:  ["#FFFFFF", mva],
  	    	    		   strokeColors:  ["#FFFFFF", mva],
  	    	    		 },
  	    	    		 stroke: chartConfigSettings.Period=='d' ?{
						      	 colors: [(chartConfigSettings.Period=='d' ?chartConfigSettings.overideChartype != null ? (typeof SelectedchartType != 'undefined'? SelectedchartType : chartType) : 'area' : 'column')=='column'?chartConfigSettings.chartColor:"#FFFFFF", mva],
					        }: {},
					          grid: {
							  show:eval(chartConfigSettings.chartShowGrid),
			   	  			  borderColor: '#f0e68c',
			   	  			  strokeDashArray:1,
			   	  		       opacity: 0.5,
					   	  		  padding: {
					   	  	        right: 60,
					   	  	    },  
			   	  			},
 				       	 yaxis: {
								 labels: {
     				    		 minWidth:75,maxWidth: 75,
 				        		 style: {
 						        	  fontSize: chartConfigSettings.fontSize,
 						        	 },
 						        	  formatter: function(val, index) {
											if (chartConfigSettings.yAxisFormat0[1])
								  				  return  val.toFixed(chartConfigSettings.yAxisFormat0[0]);
								  				else 
								  				  return  val.toFixed(chartConfigSettings.yAxisFormat0[0]) + "%";
									      }
 				        	  },
 				          tickAmount: 6,
 				    	  min:calculatedMinValue,
 				    	  max:Math.sign(chartConfigSettings.max)==-1 ? -Math.abs(chartConfigSettings.max)+valueMax1 : Math.abs(chartConfigSettings.max)+valueMax1,
 				    			  axisBorder: {
 					                  width: 3,
 					                  show: true,
 					                  color: "#FFFFFF",
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
											  if(seriesIndex == 0)
								  				{
								  				if (chartConfigSettings.getFormatResult0[1])
								  				  return  value.toFixed(chartConfigSettings.getFormatResult0[0]);
								  				else 
								  				  return  value.toFixed(chartConfigSettings.getFormatResult0[0]) + "%";
								  				}else 
								  					 if(seriesIndex == 1){
								  					  if (chartConfigSettings.getFormatResult1[1])
								  						  return  value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0]):null;
								  						else 
								  							 return  value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0]):null + "%";
								  					 }
										    },
										    title: {
									              formatter: (seriesName) => '',
									          },
							      },
								}
    	    		}); 
    	    		
				 }
			      else if(chartConfigSettings.functionId>=7 && chartConfigSettings.functionId<10)
  	    	    	{
					 chart.updateOptions({
						 series:[{
								name: chartConfigSettings.response[0].config != null ? (chartConfigSettings.response[0].config.displayDescription == null ? '' : chartConfigSettings.response[0].config.displayDescription) : '',
								type: chartConfigSettings.Period=='d' ? chartConfigSettings.chartType1 : 'column',
								data: chartConfigSettings.response[0].graphResponseDTOLst,
							   strokeWidth:chartConfigSettings.Period!='d' ?chartConfigSettings.chartType=='column'?getStrokeWidthPeriod(chartConfigSettings.Period,chartConfigSettings.response[0].graphResponseDTOLst.length):undefined:undefined
							
							}, {
								name: chartConfigSettings.response[1].config != null ? (chartConfigSettings.response[1].config.displayDescription == null ? '' : chartConfigSettings.response[1].config.displayDescription) : '',
								type: 'column',
								data: chartConfigSettings.response[1].graphResponseDTOLst,
							}],
						 xaxis: {
									labels: {
										rotate: -70,
										rotateAlways: true,
										minHeight: 30,
										style: {
											fontSize: '12px',
										},
										formatter: function(value, timestamp, opts) {
											
												
											if (isFullDate) {  
											  let a = [{ day: 'numeric' }, { month: 'short' }, { year: '2-digit' }];
											  let options = Object.assign({}, ...a);
											  let s = (isTimestamp(value)) ? join(value, options, '-') : value;
											  return s;
											} else { 
											  let a = [{ month: 'short' }, { year: '2-digit' }];
											  let options = Object.assign({}, ...a);
											  const formattedDate = new Date(value)
											    .toLocaleDateString('en-US', options)
											    .replace(/ /g, '-')
											    .replace(',', '');
											  return formattedDate;
											}
											
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
  	    	    	  extra:{
							isDecimal: chartConfigSettings.isDecimal,
							yAxisFormat:chartConfigSettings.yAxisFormat,
						},
						 colors: ["#FFFFFF", "#00c9ff96"],
  	    	    		 markers: {
  	    	    		   colors: ["#FFFFFF", "#00c9ff96"],
  	    	    		   strokeColors:["#FFFFFF", "#00c9ff96"]
  	    	    		 },
 				       	 yaxis: [{
								 labels: {
     				    		 minWidth:75,maxWidth: 75,
 				        		 style: {
 						        	  fontSize: chartConfigSettings.fontSize,
 						        	 },
 						        	  formatter: function(val, index) {
											if (chartConfigSettings.yAxisFormat0[1])
								  				  return  val.toFixed(chartConfigSettings.yAxisFormat0[0]);
								  				else 
								  				  return  val.toFixed(chartConfigSettings.yAxisFormat0[0]) + "%";
									      }
 				        	  },
 				          tickAmount: 6,
 				    	  min:Math.sign(chartConfigSettings.min1)==-1 ? -Math.abs(chartConfigSettings.min1)-valueMin1 : Math.abs(chartConfigSettings.min1)-valueMin1,
 				    	  max:Math.sign(chartConfigSettings.max1)==-1 ? -Math.abs(chartConfigSettings.max1)+valueMax1 : Math.abs(chartConfigSettings.max1)+valueMax1,
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
     				    		    // minWidth: -50,maxWidth: -50,
	 				        		 style: {
	 						        	  fontSize: chartConfigSettings.fontSize,
	 						        	 },
	 						        	  formatter: function(val, index) {
										  if (chartConfigSettings.yAxisFormat1[1])
								  						  return  val.toFixed(chartConfigSettings.yAxisFormat1[0]);
								  						else 
								  							 return  val.toFixed(chartConfigSettings.yAxisFormat1[0]) + "%";
								  							
									      }
		 				        	  },
		 				          tickAmount: 6,
		 				    	  min:min2,
		 				    	  max:max2,
 				    			  axisBorder: {
 					                  width: 3,
 					                  show: true,
 					                  color: "#00c9ff96",
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
								  				if (chartConfigSettings.getFormatResult0[1])
								  				  return  value.toFixed(chartConfigSettings.getFormatResult0[0]);
								  				else 
								  				  return  value.toFixed(chartConfigSettings.getFormatResult0[0]) + "%";
								  				}else 
								  					 if(seriesIndex == 1){
								  					  if (chartConfigSettings.getFormatResult1[1])
								  						  return  value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0]):null;
								  						else 
								  							 return  value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0]):null + "%";
								  					 }
										    },
										    title: {
									              formatter: (seriesName) => '',
									          },
							      },
								}
    	    		}); 
    	    		
				}else  {
					   const values = addMarginToMinMax(chartConfigSettings.min2, chartConfigSettings.max2, 5);
	
				     var valueMin2 = values;
				     var valueMax2 = values; 
				     	  
				     var selectedValue = Math.abs(chartConfigSettings.min2)>=Math.abs(chartConfigSettings.max2)?Math.abs(min2):Math.abs(max2);
					 
				     var calculatedMinValue = Math.sign(chartConfigSettings.min1)==-1 ? -Math.abs(chartConfigSettings.min1)-valueMin1 : Math.abs(chartConfigSettings.min1)-valueMin1;
				   //  	 calculatedMinValue = (Math.sign(calculatedMinValue) == -1 ?0:calculatedMinValue);
					 var calculatedMinValue2 = -Math.abs(selectedValue + valueMin2) ;// Math.sign(chartConfigSettings.min2)==-1 ? -Math.abs(selectedValue + valueMin2) : Math.abs(selectedValue + valueMin2);
						// calculatedMinValue2 = (Math.sign(calculatedMinValue2) == -1 ?0:calculatedMinValue2);	
						//var strokeWidth=chartConfigSettings.Period!='d' ?chartConfigSettings.chartType=='column'?getStrokeWidthPeriod(chartConfigSettings.Period,chartConfigSettings.response[0].graphResponseDTOLst.length):undefined:undefined; 
				//	var strokeWidth=getStrokeWidthPeriod(chartConfigSettings.Period,chartConfigSettings.response[0].graphResponseDTOLst.length); 
					var strokeWidth=getDynamicWidth(chartConfigSettings.response[0].graphResponseDTOLst.filter(item => item.y !== null).length); 
					var strokeWidth1=getDynamicWidth(chartConfigSettings.response[1].graphResponseDTOLst.filter(item => item.y !== null).length); 

					 chart.updateOptions({
						 series:[{
								name: chartConfigSettings.response[0].config != null ? (chartConfigSettings.response[0].config.displayDescription == null ? '' : chartConfigSettings.response[0].config.displayDescription) : '',
								type: chartConfigSettings.chartType,
								data: chartConfigSettings.response[0].graphResponseDTOLst,
							  //  strokeWidth:chartConfigSettings.Period!='d' ?chartConfigSettings.chartType=='column'?getStrokeWidthPeriod(chartConfigSettings.Period,chartConfigSettings.response[0].graphResponseDTOLst.length):undefined:undefined
							strokeWidth:strokeWidth
							}, {
								name: chartConfigSettings.response[1].config != null ? (chartConfigSettings.response[1].config.displayDescription == null ? '' : chartConfigSettings.response[1].config.displayDescription) : '',
								type: 'column',
								data: chartConfigSettings.response[1].graphResponseDTOLst,
								    ...([5,6, 10, 11, 12, 13, 14, 15].includes(chartConfigSettings.functionId) 
			            ? { strokeWidth: strokeWidth1 } 
			            : {}) // Conditionally include strokeWidth

							}],
							
								xaxis: {
									labels: {
										rotate: -70,
										rotateAlways: true,
										minHeight: 30,
										style: {
											fontSize: '12px',
										},
										formatter: function(value, timestamp, opts) {
											
												
											if (isFullDate) {  
											  let a = [{ day: 'numeric' }, { month: 'short' }, { year: '2-digit' }];
											  let options = Object.assign({}, ...a);
											  let s = (isTimestamp(value)) ? join(value, options, '-') : value;
											  return s;
											} else { 
											  let a = [{ month: 'short' }, { year: '2-digit' }];
											  let options = Object.assign({}, ...a);
											  const formattedDate = new Date(value)
											    .toLocaleDateString('en-US', options)
											    .replace(/ /g, '-')
											    .replace(',', '');
											  return formattedDate;
											}
											
								          }
									},
									type: 'datetime',
									//tickAmount: 19,
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
							isDecimal: chartConfigSettings.isDecimal,
							yAxisFormat:chartConfigSettings.yAxisFormat,
						},
						 
  	    	    		 // colors:[chartConfigSettings.Period=='d' ?(chartConfigSettings.Period=='d' ?chartConfigSettings.overideChartype != null ? (typeof SelectedchartType != 'undefined'? SelectedchartType : chartType) : 'area' : 'column')=='column'?chartConfigSettings.chartColor:chartColorOpacity(chartConfigSettings.chartColor):(chartConfigSettings.chartColor == '#44546a' ? '#2e75b6' : chartConfigSettings.chartColor), "#ff000059"],
  	    	    		colors: [function({ value, seriesIndex, w }) {
							 return   chartConfigSettings.Period == 'd' 
									    ? (
									        chartConfigSettings.Period == 'd' 
									          ? (chartConfigSettings.overideChartype != null 
									              ? (typeof SelectedchartType != 'undefined' 
									                  ? SelectedchartType 
									                  : chartType
									                ) 
									              : 'area'
									            ) 
									          : 'column'
									      ) == 'column' 
									        ? chartConfigSettings.chartColor 
									        : chartColorOpacity(chartConfigSettings.chartColor)
									    : (
									        chartConfigSettings.chartColor == '#44546a' 
									          ? '#2e75b6' 
									          : chartConfigSettings.chartColor
									      );
							  
							}, function({ value, seriesIndex, w }) {
								  if(seriesIndex!=0)
									if (value <= 0) {
										 return '#f23a3aa3'; // Color for values less than or equal to zero
										} else {
										   return '#30d7818c'; // Color for values greater than zero
										}
							}]
							, markers: {
						 colors: ["#FFFFFF", "#ff000059"],
  	    	    		   strokeColors:["#FFFFFF", "#ff000059"],
  	    	    		 },
  	    	    		 stroke: chartConfigSettings.Period=='d' ?{
						      	 colors: [(chartConfigSettings.Period=='d' ?chartConfigSettings.overideChartype != null ? (typeof SelectedchartType != 'undefined'? SelectedchartType : chartType) : 'area' : 'column')=='column'?chartConfigSettings.chartColor:"#FFFFFF", "#ff000000"],
					        	    ...(![5,6,10, 11, 12, 13, 14, 15].includes(chartConfigSettings.functionId) 
			            ? {  width: [2.25,0] } 
			            : {}) 	//
					        }: {},
 				       yaxis: [{
								 labels: {
     				    		 minWidth: 75,maxWidth: 75,
 				        		 style: {
 						        	  fontSize: chartConfigSettings.fontSize,
 						        	 },
 						        	 formatter: function(val, index) {
										 if (chartConfigSettings.yAxisFormat0[1])
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat0[0]);
						  				else 
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat0[0]) + "%";
									      }
 				        	  },
 				          tickAmount: 6,
 				    	  min:calculatedMinValue,
 				    	  max:Math.sign(chartConfigSettings.max1)==-1 ? -Math.abs(chartConfigSettings.max1)+valueMax1 : Math.abs(chartConfigSettings.max1)+valueMax1,
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
 						        	  fontSize: chartConfigSettings.fontSize,
 						        	 },
 						        	 formatter: function(val, index) {
										  if (chartConfigSettings.yAxisFormat1[1])
								  						  return  val.toFixed(chartConfigSettings.yAxisFormat1[0]);
								  						else 
								  							 return  val.toFixed(chartConfigSettings.yAxisFormat1[0]) + "%";
								  							
									      }
 				        	  },
 				          tickAmount: 6,
 				    	  min: calculatedMinValue2,
 				    	  max: Math.abs(selectedValue + valueMax2),
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
						  				if (chartConfigSettings.getFormatResult0[1])
						  				  return  value.toFixed(chartConfigSettings.getFormatResult0[0]);
						  				else 
						  				  return  value.toFixed(chartConfigSettings.getFormatResult0[0]) + "%";
						  				}else 
						  					 if(seriesIndex == 1){
											   if(value!=null)
						  					   if (chartConfigSettings.getFormatResult1[1])
						  						  return !isNaN(value)?value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0]):null:'';
						  						else 
						  						  return !isNaN(value)?value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0]):null + "%":'';
						  					 }
								    },
								    title: {
							              formatter: (seriesName) => '',
							          },
					      },
						},
						annotations: {
							  yaxis: [{
							    y: 0,
							    yAxisIndex: 1,
								strokeDashArray: 0,
								offsetX: 0,
								width: '100%',
								borderColor: '#FF0000',
							    label: {
								    position: 'right',
								    offsetX: 70,
					                offsetY: 0,
							        borderColor: '#FF0000',
							        style: {
							          color: '#fff',
							          background: '#ff000052'
							        },
							        text: ''
							      }
							  }]
							},
							   
    	    		}); 
    	    		
				}
}

function updateChartSelectedItem(chartConfigSettings){
			
			     if(chartConfigSettings.checkedItem ==1 )
			     {
					// var valueMin = getMarginLenght(chartConfigSettings.min); 
			 		// var valueMax = getMarginLenght(chartConfigSettings.max);  				 	
					 const values = addMarginToMinMax(chartConfigSettings.min, chartConfigSettings.max, 5);
				     var valueMin = values;
				    
				     var calculatedMinValue = Math.sign(chartConfigSettings.minvalue) == -1 ? -Math.abs(chartConfigSettings.minvalue) - valueMin : Math.abs(chartConfigSettings.minvalue) - valueMin;
				      graphService=typeof graphService!='undefined'?graphService:'';
				    //   calculatedMinValue = PositiveGraphs.includes(graphService)?( Math.sign(calculatedMinValue) == -1 ?0:calculatedMinValue): calculatedMinValue;
				      calculatedMinValue =  (Math.sign(calculatedMinValue) == -1 && !(Math.sign(chartConfigSettings.min)==-1)  )? 0: calculatedMinValue;

				     var valueMax = values; 		
							chart.updateOptions({
								series:[{
								name: chartConfigSettings.response[0].config != null ? (chartConfigSettings.response[0].config.displayDescription == null ? '' : chartConfigSettings.response[0].config.displayDescription) : '',
								type: chartConfigSettings.chartType1,
								data: chartConfigSettings.response[0].graphResponseDTOLst
							}],
								stroke: {
									colors: chartConfigSettings.chartType1 == "area" ? ["#ffffff"] : [chartConfigSettings.chartColor == '#44546a' ? '#2e75b6' : chartConfigSettings.chartColor],
								},
								markers: {
									colors: chartConfigSettings.chartType1 == "area" ? "#ffffff" : [chartConfigSettings.chartColor == '#44546a' ? '#2e75b6' : chartConfigSettings.chartColor],
									strokeColors: chartConfigSettings.chartType1 == "area" ? "#ffffff" : [chartConfigSettings.chartColor == '#44546a' ? '#2e75b6' : chartConfigSettings.chartColor]
								},
								extra: {
									isDecimal: chartConfigSettings.isdecimal,
									yAxisFormat: chartConfigSettings.yaxisformat,
								},
								yaxis: {
									labels: {
										minWidth: 75, maxWidth: 75,
										style: {
											fontSize: fontsize,
										},
										 formatter: function(val, index) {
										 if (chartConfigSettings.yAxisFormat[1])
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]);
						  					else 
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]) + "%";
									      }
									},
									tickAmount: 6,
									min: calculatedMinValue,
									max: Math.sign(chartConfigSettings.maxvalue) == -1 ? -Math.abs(chartConfigSettings.maxvalue) + valueMax : Math.abs(chartConfigSettings.maxvalue) + valueMax,
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
											if (chartConfigSettings.getFormatResult0[1])
												return value.toFixed(chartConfigSettings.getFormatResult0[0]);
											else
												return value.toFixed(chartConfigSettings.getFormatResult0[0]) + "%";
										},
										title: {
											formatter: (seriesName) => '',
										},
									},
								}
							});
							

				}
				else if(chartConfigSettings.checkedItem ==2 )
				{
					 const values1 = addMarginToMinMax(chartConfigSettings.min1, chartConfigSettings.max1, 5);
				     var valueMin1 = values1;
				     var valueMax1 = values1; 	
				     
				     const values2 = addMarginToMinMax(chartConfigSettings.min2, chartConfigSettings.max2, 5);
				     var valueMin2 = values2;
				     var valueMax2 = values2; 	
				    
				     calculatedMinValue1 =  Math.sign(chartConfigSettings.min1)==-1 ? -Math.abs(chartConfigSettings.min1)-valueMin1 : Math.abs(chartConfigSettings.min1)-valueMin1;
				     calculatedMinValue1 =  (Math.sign(calculatedMinValue1) == -1 && !(Math.sign(chartConfigSettings.min1)==-1) )? 0: calculatedMinValue1;

				     calculatedMinValue2 =  Math.sign(chartConfigSettings.min2)==-1 ? -Math.abs(chartConfigSettings.min2)-valueMin2 : Math.abs(chartConfigSettings.min2)-valueMin2;
				     calculatedMinValue2 =  (Math.sign(calculatedMinValue2) == -1 && !(Math.sign(chartConfigSettings.min2)==-1) )? 0: calculatedMinValue2;


      	    	     let yAxis =   [{
									 labels: {
	     				    		 minWidth: 75,maxWidth: 75,
	 				        		 style: {
	 						        	  fontSize: chartConfigSettings.fontSize,
	 						        	 },
										 formatter: function(val, index) {
										 if (chartConfigSettings.yAxisFormat[1])
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]);
						  				else 
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]) + "%";
									      }
						 				        	  },
					     				          tickAmount: 6,
					     				    	  min:calculatedMinValue1,
					     				    	  max:Math.sign(chartConfigSettings.max1)==-1 ? -Math.abs(chartConfigSettings.max1)+valueMax1 : Math.abs(chartConfigSettings.max1)+valueMax1,
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
						 						        	  fontSize: chartConfigSettings.fontSize,
						 						        	  cssClass: 'apexcharts-yaxis-label-2y',
						 						        	   fontWeight: 600,
						 						        	 },
						 						        	 formatter: function(val, index) {
															 if (chartConfigSettings.yAxisFormat1[1])
											  				  return  val.toFixed(chartConfigSettings.yAxisFormat1[0]);
											  				else 
											  				  return  val.toFixed(chartConfigSettings.yAxisFormat1[0]) + "%";
														      }
						 				        	  },
					     				          tickAmount: 6,
					     				    	  min:calculatedMinValue2,
					     				    	  max:Math.sign(chartConfigSettings.max2)==-1 ? -Math.abs(chartConfigSettings.max2)+valueMax2 : Math.abs(chartConfigSettings.max2)+valueMax2,
					     				    			  axisBorder: {
					     					                  width: 3,
					     					                  show: true,
					     					                  color: "#FF0000",
					     					                  offsetX: 0,
					     					                  offsetY: 0
					     					              },
					     				    			 }] ;
      	    	    	
      	    	     if(isOneScale)
      	    	     {	
						   let min = Math.min(chartConfigSettings.min1, chartConfigSettings.min2);
					       let max = Math.max(chartConfigSettings.max1, chartConfigSettings.max2);
						    const values1 = addMarginToMinMax(min, max, 5);
						 var valueMin1 = values1;
						 var valueMax1 = values1;
	 					  graphService=typeof graphService!='undefined'?graphService:'';
	 					 var calculatedMinValue1 = Math.sign(min)==-1 ? -Math.abs(min)-valueMin1 : Math.abs(min)-valueMin1;
					         //calculatedMinValue1 = PositiveGraphs.includes(graphService)?( Math.sign(calculatedMinValue1) == -1 ?0:calculatedMinValue1): calculatedMinValue1;
					    	 calculatedMinValue1 =  (Math.sign(calculatedMinValue1) == -1 && !(Math.sign(min)==-1)  )? 0: calculatedMinValue1;
	
						   yAxis =  [{
									 labels: {
	     				    		 minWidth: 75,maxWidth: 75,
	 				        		 style: {
	 						        	  fontSize: chartConfigSettings.fontSize,
	 						        	 },
										 formatter: function(val, index) {
										 if (chartConfigSettings.yAxisFormat[1])
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]);
						  				else 
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]) + "%";
									      }
						 				        	  },
				     				          tickAmount: 6,
				     				    	  min:calculatedMinValue1,
				     				    	  max:Math.sign(chartConfigSettings.max)==-1 ? -Math.abs(chartConfigSettings.max)+valueMax1 : Math.abs(chartConfigSettings.max)+valueMax1,
				     				    			  axisBorder: {
				     					                  width: 3,
				     					                  show: true,
				     					                  color: typeof chartConfigSettings.overideColors != 'undefined'? chartConfigSettings.overideColors[0] : "#FFFFFF",
				     					                  offsetX: 0,
				     					                  offsetY: 0
				     					              },
				     				    			 }] ;
							}
      	    	    	


						 chart.updateOptions({
							  series:[{
							          name: chartConfigSettings.response[0].config.displayDescription==null?itemValue[chartConfigSettings.checkedItemValues[0]].title:chartConfigSettings.response[0].config.displayDescription,
							          type: chartConfigSettings.chartType1,
							          data: chartConfigSettings.response[0].graphResponseDTOLst
							        },{
							          name: chartConfigSettings.response[1].config.displayDescription==null?itemValue[chartConfigSettings.checkedItemValues[1]].title:chartConfigSettings.response[1].config.displayDescription,
							          type: chartConfigSettings.chartType2,
							          data: chartConfigSettings.response[1].graphResponseDTOLst
							        }],
      	    	    	  extra:{
								isDecimal: chartConfigSettings.isdecimal,
								yAxisFormat:chartConfigSettings.yaxisformat,
							},
							 colors: ["#FFFFFF", "#FF0000"],
      	    	    		 markers: {
      	    	    		   colors: ["#FFFFFF", "#FF0000"],
      	    	    		   strokeColors:["#FFFFFF", "#FF0000"]
      	    	    		 },
     				       yaxis: yAxis,
												  tooltip: {
													  x: {
					    						          show: false,
					    						      },
					    							  y: {
					    								  formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
															  if(seriesIndex == 0)
												  				{
												  				if (chartConfigSettings.getFormatResult1[1])
												  				  return  value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0]):'';
												  				else 
												  				  {  
																		return  value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0])+ "%":'' ;}
												  				}else 
												  					 if(seriesIndex == 1){
												  					  if (chartConfigSettings.getFormatResult1[1])
												  						  return  value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0]):'';
												  						else 
												  							 return  value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0])+ "%":'' ;
												  					 }
					    								    },
					    								    title: {
					    							              formatter: (seriesName) => '',
					    							          },
					    					      },
					    						}
				      	    	    		},
				      	    	    		);     
			      	    	        
				}
}

function isTimestamp(n) {
  const parsed = parseFloat(n);

  return !Number.isNaN(parsed) && Number.isFinite(parsed) && /^\d+\.?\d+$/.test(n);
}

function join(t, a, s) {
   function format(m) {
      let f = new Intl.DateTimeFormat('en', m);
    	  return f.format(t);
   }
   return a.map(format).join(s);
}

function updateChartSelectedItemMissingDates(chartConfigSettings){
			
			     if(chartConfigSettings.checkedItem ==1 )
			     {
					 const values = addMarginToMinMax(chartConfigSettings.min, chartConfigSettings.max, 5);
				     var valueMin = values;
				     var valueMax = values; 	
				     var calculatedMinValue = Math.sign(chartConfigSettings.minvalue) == -1 ? -Math.abs(chartConfigSettings.minvalue) - valueMin : Math.abs(chartConfigSettings.minvalue) - valueMin;
				          graphService=typeof graphService!='undefined'?graphService:'';
				         // calculatedMinValue = PositiveGraphs.includes(graphService)?( Math.sign(calculatedMinValue) == -1 ?0:calculatedMinValue): calculatedMinValue;
				     calculatedMinValue =  (Math.sign(calculatedMinValue) == -1 && !(Math.sign(chartConfigSettings.min)==-1) )? 0: calculatedMinValue;
						
					 chart.updateOptions({
								
								series:[{
										name: chartConfigSettings.response[0].config != null ? (chartConfigSettings.response[0].config.displayDescription == null ? '' : chartConfigSettings.response[0].config.displayDescription) : '',
										type: chartConfigSettings.chartType1,
										data: chartConfigSettings.response[0].graphResponseDTOLst
									}],
									xaxis: {
									labels: {
										rotate: -70,
										rotateAlways: true,
										minHeight: 30,
										style: {
											fontSize: '12px',
										},
										formatter: function(value, timestamp, opts) {
											
											let a = [{day: 'numeric'}, {month: 'short'}, {year: '2-digit'}];
											let s =  (isTimestamp(value))?join(value, a, '-'):value;
											
								            return s;
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
								stroke: {
									colors: chartConfigSettings.chartType1 == "area" ? ["#ffffff"] : [chartConfigSettings.chartColor == '#44546a' ? '#2e75b6' : chartConfigSettings.chartColor],
								},
								markers: {
									colors: chartConfigSettings.chartType1 == "area" ? "#ffffff" : [chartConfigSettings.chartColor == '#44546a' ? '#2e75b6' : chartConfigSettings.chartColor],
									strokeColors: chartConfigSettings.chartType1 == "area" ? "#ffffff" : [chartConfigSettings.chartColor == '#44546a' ? '#2e75b6' : chartConfigSettings.chartColor]
								},
								extra: {
									isDecimal: chartConfigSettings.isdecimal,
									yAxisFormat: chartConfigSettings.yaxisformat,
								},
								yaxis: {
									labels: {
										minWidth: 75, maxWidth: 75,
										style: {
											fontSize: fontsize,
										},
										 formatter: function(val, index) {
										 if (chartConfigSettings.yAxisFormat[1])
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]);
						  					else 
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]) + "%";
									      }
									},
									tickAmount: 6,
									min: calculatedMinValue,
									max: Math.sign(chartConfigSettings.maxvalue) == -1 ? -Math.abs(chartConfigSettings.maxvalue) + valueMax : Math.abs(chartConfigSettings.maxvalue) + valueMax,
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
											if (chartConfigSettings.getFormatResult0[1])
												return value.toFixed(chartConfigSettings.getFormatResult0[0]);
											else
												return value.toFixed(chartConfigSettings.getFormatResult0[0]) + "%";
										},
										title: {
											formatter: (seriesName) => '',
										},
									},
								}
							});

				}
				else if(chartConfigSettings.checkedItem ==2 )
				{    				    			 
					 const values1 = addMarginToMinMax(chartConfigSettings.min1, chartConfigSettings.max1, 5);
					 var valueMin1 = values1;
					 var valueMax1 = values1;
 					  graphService=typeof graphService!='undefined'?graphService:'';
 					 var calculatedMinValue1 = Math.sign(chartConfigSettings.min1)==-1 ? -Math.abs(chartConfigSettings.min1)-valueMin1 : Math.abs(chartConfigSettings.min1)-valueMin1;
				         //calculatedMinValue1 = PositiveGraphs.includes(graphService)?( Math.sign(calculatedMinValue1) == -1 ?0:calculatedMinValue1): calculatedMinValue1;
				    	 calculatedMinValue1 =  (Math.sign(calculatedMinValue1) == -1 && !(Math.sign(chartConfigSettings.min1)==-1)  )? 0: calculatedMinValue1;

					 const values2 = addMarginToMinMax(chartConfigSettings.min2, chartConfigSettings.max2, 5);
					 var valueMin2 = values2;
					 var valueMax2 = values2;
 				  	 var calculatedMinValue2 = Math.sign(chartConfigSettings.min2)==-1 ? -Math.abs(chartConfigSettings.min2)-valueMin2 : Math.abs(chartConfigSettings.min2)-valueMin2;
				       //  calculatedMinValue2 = PositiveGraphs.includes(graphService)?( Math.sign(calculatedMinValue2) == -1 ?0:calculatedMinValue2): calculatedMinValue2;
				         calculatedMinValue2 =  (Math.sign(calculatedMinValue2) == -1 && !(Math.sign(chartConfigSettings.min2)==-1) )? 0: calculatedMinValue2;
      	    	   
      	    	     let yAxis =  [{
									 labels: {
	     				    		 minWidth: 75,maxWidth: 75,
	 				        		 style: {
	 						        	  fontSize: chartConfigSettings.fontSize,
	 						        	 },
										 formatter: function(val, index) {
										 if (chartConfigSettings.yAxisFormat[1])
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]);
						  				else 
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]) + "%";
									      }
						 				        	  },
					     				          tickAmount: 6,
					     				    	  min:calculatedMinValue1,
					     				    	  max:Math.sign(chartConfigSettings.max1)==-1 ? -Math.abs(chartConfigSettings.max1)+valueMax1 : Math.abs(chartConfigSettings.max1)+valueMax1,
					     				    			  axisBorder: {
					     					                  width: 3,
					     					                  show: true,
					     					                  color: typeof chartConfigSettings.overideColors != 'undefined'? chartConfigSettings.overideColors[0] : "#FFFFFF",
					     					                  offsetX: 0,
					     					                  offsetY: 0
					     					              },
					     				    			 },
														{
 													  opposite: true,
						     				    	  labels: {
						     				    		 minWidth: 75,maxWidth: 75,
						 				        		 style: {
						 						        	  fontSize: chartConfigSettings.fontSize,
						 						        	  cssClass: typeof chartConfigSettings.overideColors != 'undefined'? 'apexcharts-yaxis-label-2y-gold' :'apexcharts-yaxis-label-2y',
						 						        	   fontWeight: 600,
						 						        	 },
						 						        	 formatter: function(val, index) {
															 if (chartConfigSettings.yAxisFormat1[1])
											  				  return  val.toFixed(chartConfigSettings.yAxisFormat1[0]);
											  				else 
											  				  return  val.toFixed(chartConfigSettings.yAxisFormat1[0]) + "%";
														      }
														      
						 				        	  },
					     				          tickAmount: 6,
					     				    	  min:calculatedMinValue2,
					     				    	  max:Math.sign(chartConfigSettings.max2)==-1 ? -Math.abs(chartConfigSettings.max2)+valueMax2 : Math.abs(chartConfigSettings.max2)+valueMax2,
					     				    			  axisBorder: {
					     					                  width: 3,
					     					                  show: true,
					     					                  color: typeof chartConfigSettings.overideColors != 'undefined'? chartConfigSettings.overideColors[1] :"#FF0000",
					     					                  offsetX: 0,
					     					                  offsetY: 0
					     					              },
					     				    			 }] ;
      	    	    	
      	    	     if(isOneScale)
      	    	     {	
						   let min = Math.min(chartConfigSettings.min1, chartConfigSettings.min2);
					       let max = Math.max(chartConfigSettings.max1, chartConfigSettings.max2);
						    const values1 = addMarginToMinMax(min, max, 5);
						 var valueMin1 = values1;
						 var valueMax1 = values1;
	 					  graphService=typeof graphService!='undefined'?graphService:'';
	 					 var calculatedMinValue1 = Math.sign(min)==-1 ? -Math.abs(min)-valueMin1 : Math.abs(min)-valueMin1;
					         //calculatedMinValue1 = PositiveGraphs.includes(graphService)?( Math.sign(calculatedMinValue1) == -1 ?0:calculatedMinValue1): calculatedMinValue1;
					    	 calculatedMinValue1 =  (Math.sign(calculatedMinValue1) == -1 && !(Math.sign(min)==-1)  )? 0: calculatedMinValue1;
	
						   yAxis =  [{
									 labels: {
	     				    		 minWidth: 75,maxWidth: 75,
	 				        		 style: {
	 						        	  fontSize: chartConfigSettings.fontSize,
	 						        	 },
										 formatter: function(val, index) {
										 if (chartConfigSettings.yAxisFormat[1])
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]);
						  				else 
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]) + "%";
									      }
						 				        	  },
				     				          tickAmount: 6,
				     				    	  min:calculatedMinValue1,
				     				    	  max:Math.sign(chartConfigSettings.max)==-1 ? -Math.abs(chartConfigSettings.max)+valueMax1 : Math.abs(chartConfigSettings.max)+valueMax1,
				     				    			  axisBorder: {
				     					                  width: 3,
				     					                  show: true,
				     					                  color: typeof chartConfigSettings.overideColors != 'undefined'? chartConfigSettings.overideColors[0] : "#FFFFFF",
				     					                  offsetX: 0,
				     					                  offsetY: 0
				     					              },
				     				    			 }] ;
							}
      	    	    	
      	    	    	chart.updateOptions({
						  series:[{
						          name: chartConfigSettings.response[0].config.displayDescription==null?itemValue[chartConfigSettings.checkedItemValues[0]].title:chartConfigSettings.response[0].config.displayDescription,
						          type: chartConfigSettings.chartType1,
						          data: chartConfigSettings.response[0].graphResponseDTOLst
						        },{
						          name: chartConfigSettings.response[1].config.displayDescription==null?itemValue[chartConfigSettings.checkedItemValues[1]].title:chartConfigSettings.response[1].config.displayDescription,
						          type: chartConfigSettings.chartType2,
						          data: chartConfigSettings.response[1].graphResponseDTOLst,
						          strokeWidth:getStrokeWidth()
						        }],
      	    	    	  extra:{
								isDecimal: chartConfigSettings.isdecimal,
								yAxisFormat:chartConfigSettings.yaxisformat,
							},
							 colors: typeof chartConfigSettings.overideColors != 'undefined'? chartConfigSettings.overideColors : ["#FFFFFF", "#FF0000"],
      	    	    		 markers: {
      	    	    		   colors: typeof chartConfigSettings.overideColors != 'undefined'? chartConfigSettings.overideColors : ["#FFFFFF", "#FF0000"],
      	    	    		   strokeColors: typeof chartConfigSettings.overideColors != 'undefined'? chartConfigSettings.overideColors : ["#FFFFFF", "#FF0000"]
      	    	    		 },
     				       yaxis: yAxis,
												  tooltip: {
													  x: {
					    						          show: false,
					    						      },
					    							  y: {
					    								  formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
					    									  if(seriesIndex == 0)
												  				{
												  				if (chartConfigSettings.getFormatResult1[1])
												  				  return  value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0]):'';
												  				else 
												  				  {  
																		return  value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0])+ "%" :'' ;}
												  				}else 
												  					 if(seriesIndex == 1){
												  					  if (chartConfigSettings.getFormatResult1[1])
												  						  return  value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0]):'';
												  						else 
												  							 return  value!=null?value.toFixed(chartConfigSettings.getFormatResult1[0])+ "%":'' ;
												  					 }
					    								    },
					    								    title: {
					    							              formatter: (seriesName) => '',
					    							          },
					    					      },
					    						}
				      	    	    		});     
			      	    	           
				}
}
function updateBarChartSelectedItem(chartConfigSettings){
			
			     if(chartConfigSettings.checkedItem ==1 )
			     {
					
					/* var valueMin = getMarginLenghtVolume(chartConfigSettings.min); 
			 		 var valueMax = getMarginLenghtVolume(chartConfigSettings.max);  				 	
					*/		
					 const values = addMarginToMinMax(chartConfigSettings.min, chartConfigSettings.max, 5);
				     var valueMin = values;
				     var valueMax = values; 	
							chart.updateOptions({
								series:[{
										name: chartConfigSettings.response[0].config != null ? (chartConfigSettings.response[0].config.displayDescription == null ? '' : chartConfigSettings.response[0].config.displayDescription) : '',
										type: 'column',
										data: chartConfigSettings.response[0].graphResponseDTOLst
									}],
									/*colors: [function({ value, dataPointIndex, seriesIndex, w }) {
										console.log(value, dataPointIndex, seriesIndex, w)
										
									  if (w.config.series[seriesIndex].data[dataPointIndex].isComplete=='0') {
									      return '#ff0000';
									  }
									  else 
									  return  chartConfigSettings.chartColor=='#44546a'?'#2e75b6':chartConfigSettings.chartColor;
									}],*/
									 animations: { enabled: false },
									xaxis: {
									labels: {
										rotate: -70,
										rotateAlways: true,
										minHeight: 30,
										style: {
											fontSize: '12px',
										},
										formatter: function(value, timestamp, opts) {
											return value;
											
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
								stroke: {
									width: chartConfigSettings.chartType1 == "column" ? 0 : 2.25,
									},
								markers: {
									colors: chartConfigSettings.chartType1 == "area" ? "#ffffff" : [chartConfigSettings.chartColor == '#44546a' ? '#2e75b6' : chartConfigSettings.chartColor],
									strokeColors: chartConfigSettings.chartType1 == "area" ? "#ffffff" : [chartConfigSettings.chartColor == '#44546a' ? '#2e75b6' : chartConfigSettings.chartColor]
								},
								extra: {
									isDecimal: chartConfigSettings.yAxisFormat[1],
								    yAxisFormat:chartConfigSettings.yAxisFormat[0],
								},
								 grid: {
								  show:eval(chartConfigSettings.chartShowGrid),
				   	  			  borderColor: '#f0e68c',
				   	  			  strokeDashArray:1,
				   	  		       opacity: 0.5,
						   	  		  padding: {
						   	  	        right: 60,
						   	  	    },  
				   	  			},
								yaxis: {
									labels: {
										minWidth: 75, maxWidth: 75,
										style: {
											fontSize: fontsize,
										},
										 formatter: function(val, index) {
										 if (chartConfigSettings.yAxisFormat[1]) {
												    if (val >= 1000) {
												     return (val / 1000).toFixed(chartConfigSettings.yAxisFormat[0]) + "K";
												    } else {
												      return val.toFixed(chartConfigSettings.yAxisFormat[0]);
												    }
												  } else {
													   if (val >= 1000) {
												     return (val / 1000).toFixed(chartConfigSettings.yAxisFormat[0]) + "K";
												    } else {
												      return val.toFixed(chartConfigSettings.yAxisFormat[0]) + "%";
												    }
												  }
									      }
									},
									tickAmount: 6,
									min: Math.sign(chartConfigSettings.minvalue) == -1 ? -Math.abs(chartConfigSettings.minvalue) - valueMin : Math.abs(chartConfigSettings.minvalue) - valueMin,
									max: Math.sign(chartConfigSettings.maxvalue) == -1 ? -Math.abs(chartConfigSettings.maxvalue) + valueMax : Math.abs(chartConfigSettings.maxvalue) + valueMax,
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
											if (value >= 1000) 
											return  (value / 1000)+'K';
											else 
											return value;
											
										},
										title: {
											formatter: (seriesName) => '',
										},
									},
								}
							});

				}
				else if(chartConfigSettings.checkedItem ==2 )
				{
 					     min = Math.min(chartConfigSettings.min1, chartConfigSettings.min2);
						 max = Math.max(chartConfigSettings.max1, chartConfigSettings.max2);
						 
						 minvalue = min;
						 maxvalue = max;
						 var valueMin = getMarginLenghtVolume(min); 
			 		     var valueMax = getMarginLenghtVolume(max);  	
      	    	    	chart.updateOptions({
						  series:[{
						          name: chartConfigSettings.response[0].config.displayDescription==null?itemValue[chartConfigSettings.checkedItemValues[0]].title:chartConfigSettings.response[0].config.displayDescription,
						          type: chartConfigSettings.chartType1,
						          data: chartConfigSettings.response[0].graphResponseDTOLst
						        },{
						          name: chartConfigSettings.response[1].config.displayDescription==null?itemValue[chartConfigSettings.checkedItemValues[1]].title:chartConfigSettings.response[1].config.displayDescription,
						          type: chartConfigSettings.chartType2,
						          data: chartConfigSettings.response[1].graphResponseDTOLst,
						        }],
      	    	    	  extra:{
								isDecimal: chartConfigSettings.yAxisFormat0[1],
								yAxisFormat:chartConfigSettings.yAxisFormat0[0],
							},
							 colors: ["#FFFFFF", "#FF0000"],
      	    	    		 markers: {
      	    	    		   colors: ["#FFFFFF", "#FF0000"],
      	    	    		   strokeColors:["#FFFFFF", "#FF0000"]
      	    	    		 },
     				       yaxis: {
							labels: {
								minWidth: 75, maxWidth: 75,
								style: {
									fontSize: fontsize,
								},
								 formatter: function(val, index) {
										 if (chartConfigSettings.yAxisFormat0[1]) {
												    if (val >= 1000) {
												     return (val / 1000).toFixed(chartConfigSettings.yAxisFormat0[0]) + "K";
												    } else {
												      return val.toFixed(chartConfigSettings.yAxisFormat0[0]);
												    }
												  } else {
												     if (val >= 1000) {
												     return (val / 1000).toFixed(chartConfigSettings.yAxisFormat0[0]) + "K";
												    } else {
												      return val.toFixed(chartConfigSettings.yAxisFormat0[0]) + "%";
												    }
												    }
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
					    											
																		if (value >= 1000) 
																			return  (value / 1000)+'K';
																			else 
																			return value;
																			
					    								    },
					    								    title: {
					    							              formatter: (seriesName) => '',
					    							          },
					    					      },
					    						}
				      	    	    		});     
			      	    	           
				}else if(chartConfigSettings.checkedItem ==3 )
				{
 					     
						 minvalue = min;
						 maxvalue = max;
						 var valueMin = getMarginLenghtVolume(min); 
			 		     var valueMax = getMarginLenghtVolume(max);  	
      	    	    	
      	    	    	chart.updateOptions({
						  series:[{
							name: chartConfigSettings.response[0].config != null ? (chartConfigSettings.response[0].config.displayDescription == null ? '' : chartConfigSettings.response[0].config.displayDescription) : '',
							type: chartConfigSettings.Period=='d' ? chartConfigSettings.chartType1 : 'column',
							data: chartConfigSettings.response[0].graphResponseDTOLst
						}, {
							name: chartConfigSettings.response[1].config != null ? (chartConfigSettings.response[1].config.displayDescription == null ? '' : chartConfigSettings.response[1].config.displayDescription) : '',
							type: chartConfigSettings.Period=='d' ? chartConfigSettings.chartType2 : 'column',
							data: chartConfigSettings.response[1].graphResponseDTOLst
						}
							, {
							name: chartConfigSettings.response[2].config != null ? (chartConfigSettings.response[2].config.displayDescription == null ? '' : chartConfigSettings.response[2].config.displayDescription) : '',
							type: chartConfigSettings.Period=='d' ? chartConfigSettings.chartType3 : 'column',
							data: chartConfigSettings.response[2].graphResponseDTOLst
						}],
      	    	    	  extra:{
								isDecimal: chartConfigSettings.yAxisFormat0[1],
								yAxisFormat:chartConfigSettings.yAxisFormat0[0],
							},
							 colors: ["#FFFFFF","#ff0000", "#0000ff",  "#00ff00", "#ffff00", "#ffa500"],
      	    	    		 markers: {
      	    	    		   	colors: ["#FFFFFF","#ff0000", "#0000ff",  "#00ff00", "#ffff00", "#ffa500"],
								strokeColors: ["#FFFFFF","#ff0000", "#0000ff",  "#00ff00", "#ffff00", "#ffa500"]
							},
								stroke: {
									width: 0
									},
     				       yaxis: {
							labels: {
								minWidth: 75, maxWidth: 75,
								style: {
									fontSize: fontsize,
								},
								 formatter: function(val, index) {
										 if (chartConfigSettings.yAxisFormat0[1]) {
												    if (val >= 1000) {
												     return (val / 1000).toFixed(chartConfigSettings.yAxisFormat0[0]) + "K";
												    } else {
												      return val.toFixed(chartConfigSettings.yAxisFormat0[0]);
												    }
												  } else {
												    if (val >= 1000) {
												     return (val / 1000).toFixed(chartConfigSettings.yAxisFormat0[0]) + "K";
												    } else {
												      return val.toFixed(chartConfigSettings.yAxisFormat0[0]) + "%";
												    }
											}
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
			    											
																if (value >= 1000) 
																	return  (value / 1000)+'K';
																	else 
																	return value;
																	
			    								    },
			    								    title: {
			    							              formatter: (seriesName) => '',
			    							          },
					    					      },
					    						}
				      	    	    		});     
      	    	    	
				}
}
function updateArrowBarChart(chartConfigSettings) {
	
				 var valueMin = getMarginLenghtVolume(chartConfigSettings.min); 
			 	 var valueMax = getMarginLenghtVolume(chartConfigSettings.max);   				 	
					
							chart.updateOptions({
								series:[{
										name: chartConfigSettings.response[0].config != null ? (chartConfigSettings.response[0].config.displayDescription == null ? '' : chartConfigSettings.response[0].config.displayDescription) : '',
										type: 'column',
										data: chartConfigSettings.response[0].graphResponseDTOLst
									}],
									title: {
												text: title,
												align: 'center',
												margin: 30,
												offsetY: 0,
												style: {
													fontWeight: 'bold',
												},
											},
									 animations: { enabled: false },
									xaxis: {
									labels: {
										rotate: -70,
										rotateAlways: true,
										minHeight: 30,
										style: {
											fontSize: '12px',
										},
										formatter: function(value, timestamp, opts) {
											return value;
											
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
								stroke: {
									width: chartConfigSettings.chartType1 == "column" ? 0 : 2.25,
									},
								markers: {
									colors: chartConfigSettings.chartType1 == "area" ? "#ffffff" : [chartConfigSettings.chartColor == '#44546a' ? '#2e75b6' : chartConfigSettings.chartColor],
									strokeColors: chartConfigSettings.chartType1 == "area" ? "#ffffff" : [chartConfigSettings.chartColor == '#44546a' ? '#2e75b6' : chartConfigSettings.chartColor]
								},
								extra: {
									isDecimal: chartConfigSettings.yAxisFormat[1],
								    yAxisFormat:chartConfigSettings.yAxisFormat[0],
								},
								 grid: {
								  show:eval(chartConfigSettings.chartShowGrid),
				   	  			  borderColor: '#f0e68c',
				   	  			  strokeDashArray:1,
				   	  		       opacity: 0.5,
						   	  		  padding: {
						   	  	        right: 60,
						   	  	    },  
				   	  			},
								yaxis: {
									arrowHead:true,
									labels: {
										minWidth: 75, maxWidth: 75,
										style: {
											fontSize: fontsize,
										},
										 formatter: function(val, index) {
										 if (chartConfigSettings.yAxisFormat[1]) {
												    if (val >= 1000) {
												     return (val / 1000).toFixed(chartConfigSettings.yAxisFormat[0]) + "K";
												    } else {
												      return val.toFixed(chartConfigSettings.yAxisFormat[0]);
												    }
												  } else {
													   if (val >= 1000) {
												     return (val / 1000).toFixed(chartConfigSettings.yAxisFormat[0]) + "K";
												    } else {
												      return val.toFixed(chartConfigSettings.yAxisFormat[0]) + "%";
												    }
												  }
									      }
									},
									tickAmount: 6,
									min: Math.sign(Math.sign(chartConfigSettings.minvalue) == -1 ? -Math.abs(chartConfigSettings.minvalue) - valueMin : Math.abs(chartConfigSettings.minvalue) - valueMin)== -1 ?0:Math.sign(chartConfigSettings.minvalue) == -1 ? -Math.abs(chartConfigSettings.minvalue) - valueMin : Math.abs(chartConfigSettings.minvalue) - valueMin,
									max: Math.sign(chartConfigSettings.maxvalue) == -1 ? -Math.abs(chartConfigSettings.maxvalue) + valueMax : Math.abs(chartConfigSettings.maxvalue) + valueMax,
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
											if (value >= 1000) 
											return  (value / 1000)+'K';
											else 
											return value;
											
										},
										title: {
											formatter: (seriesName) => '',
										},
									},
								}
							});

}

function chartColorOpacity(chartColor)
{
  var colorCode='';	
	switch(chartColor) {
	  
	 case '#F0AB2E': 
	   colorCode='#F0AB2E75'
	        break;
	 case '#0097FE': 
	   colorCode='#0097FE75'
	        break;
	 case '#44546a': 
	   colorCode='#44546a75'
		    break;
	}
return colorCode;
}
function initializePeriods()
{
	$("#groupOfPeriod").jqxButtonGroup({theme: 'dark', mode: 'radio' });
}
function initializeTypes()
{
		
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
	
}
function initializeFunctions(groupId){/*
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
							{"name":"Monthly Change In %",
                             "value":"10"},
							{"name":"Monthly Change Increment",
							  "value":"11"},
							{"name":"Quarterly Change In %",
                             "value":"12"},
							{"name":"Quarterly Change Increment",
							  "value":"13"},
							{"name":"Yearly Change In %",
                             "value":"14"},
							{"name":"Yearly Change Increment",
							  "value":"15"},
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
     };*/
     
      var functionSource =
      {
          datatype: "json",
          datafields: [
              { name: 'id' },
              { name: 'description' }
          ],
          url: '/admin/getfunctions/' + groupId ,
          async: true
      };
      
	  var functionDataAdapter = new $.jqx.dataAdapter(functionSource);
	 $("#dropDownFunctions").jqxDropDownList({dropDownHeight: 480,  source: functionDataAdapter, placeHolder: "Select a Function",  displayMember: "description",valueMember: "id", theme: 'dark' , width: 220, height: 25});
	 $("#reset").click(function() {
		 functionId=-1;
		 $("#dropDownFunctions").jqxDropDownList({selectedIndex: -1});
	});
	
	
	$('#dropDownFunctions').on('change', function (event)
	{     
	    var args = event.args;
	    if (args) {
	    // index represents the item's index.                      
	    var index = args.index;
	    	const chartType=typeof($("#chartTypes").find(".active")[0]) !='undefined'?$("#chartTypes").find(".active")[0].id:null;

			//if(chartType!="candle")
			//{
			   functionId=parseInt($('#dropDownFunctions').val())-1;
			   drawGraph();
			 //  }
	 } 
	});
	
}
function fetchDataForPeriod(Period) {
    return new Promise((resolve, reject) => {
       var weeklySource = [
    {"name": "Week 1", "value": "1"},
    {"name": "Week 2", "value": "2"},
    {"name": "Week 3", "value": "3"},
    {"name": "Week 4", "value": "4"},
    {"name": "Week 5", "value": "5"},
    {"name": "Week 6", "value": "6"},
    {"name": "Week 7", "value": "7"},
    {"name": "Week 8", "value": "8"},
    {"name": "Week 9", "value": "9"},
    {"name": "Week 10", "value": "10"},
    {"name": "Week 11", "value": "11"},
    {"name": "Week 12", "value": "12"},
    {"name": "Week 13", "value": "13"},
    {"name": "Week 14", "value": "14"},
    {"name": "Week 15", "value": "15"},
    {"name": "Week 16", "value": "16"},
    {"name": "Week 17", "value": "17"},
    {"name": "Week 18", "value": "18"},
    {"name": "Week 19", "value": "19"},
    {"name": "Week 20", "value": "20"},
    {"name": "Week 21", "value": "21"},
    {"name": "Week 22", "value": "22"},
    {"name": "Week 23", "value": "23"},
    {"name": "Week 24", "value": "24"},
    {"name": "Week 25", "value": "25"},
    {"name": "Week 26", "value": "26"},
    {"name": "Week 27", "value": "27"},
    {"name": "Week 28", "value": "28"},
    {"name": "Week 29", "value": "29"},
    {"name": "Week 30", "value": "30"},
    {"name": "Week 31", "value": "31"},
    {"name": "Week 32", "value": "32"},
    {"name": "Week 33", "value": "33"},
    {"name": "Week 34", "value": "34"},
    {"name": "Week 35", "value": "35"},
    {"name": "Week 36", "value": "36"},
    {"name": "Week 37", "value": "37"},
    {"name": "Week 38", "value": "38"},
    {"name": "Week 39", "value": "39"},
    {"name": "Week 40", "value": "40"},
    {"name": "Week 41", "value": "41"},
    {"name": "Week 42", "value": "42"},
    {"name": "Week 43", "value": "43"},
    {"name": "Week 44", "value": "44"},
    {"name": "Week 45", "value": "45"},
    {"name": "Week 46", "value": "46"},
    {"name": "Week 47", "value": "47"},
    {"name": "Week 48", "value": "48"},
    {"name": "Week 49", "value": "49"},
    {"name": "Week 50", "value": "50"},
    {"name": "Week 51", "value": "51"},
    {"name": "Week 52", "value": "52"}
];
var monthlySource = [
    {"name": "JANUARY", "value": "1"},
    {"name": "FEBRUARY", "value": "2"},
    {"name": "MARCH", "value": "3"},
    {"name": "APRIL", "value": "4"},
    {"name": "MAY", "value": "5"},
    {"name": "JUNE", "value": "6"},
    {"name": "JULY", "value": "7"},
    {"name": "AUGUST", "value": "8"},
    {"name": "SEPTEMBER", "value": "9"},
    {"name": "OCTOBER", "value": "10"},
    {"name": "NOVEMBER", "value": "11"},
    {"name": "DECEMBER", "value": "12"}
];
var QaurtlySource =[
    {"name": "Q1", "value": "1"},
    {"name": "Q2", "value": "2"},
    {"name": "Q3", "value": "3"},
    {"name": "Q4", "value": "4"}
];
 
        switch (Period) {
            case "w":
                resolve(weeklySource);
                break;
            case "m":
                resolve(monthlySource);
                break;
            case "q":
                resolve(QaurtlySource);
                break;
            default:
                reject("Invalid option selected");
        }
    });
}


function generateYearlyJSON() {
	
    const currentYear = new Date().getFullYear();
    const startYear = 2000;
    const yearlySource = [];

    for (let year = currentYear; year >= startYear; year--) {
        yearlySource.push({
            "name": `${year}`,
            "value": year
        });
    }
    return yearlySource;
}

function initializeNavigationButtons()
{
	$("#button-yearForward").prop('disabled', true);
	$("#button-monthForward").prop('disabled', true);

}
function initialiazeItemsLeft(items, numberOfItems){
	for (i = 0; i < items.length; i++) {
		$(items[i]).jqxCheckBox({ theme: 'dark', width: '100%', height: 26 });
	}
	 	 
  $('.left>.jqx-checkbox').on('change', function (event) {
    var $checkbox = $(this);
    var checked = event.args.checked;
    var checkboxId = $checkbox.attr('id');
    Items = "";
    if (checked) {
        checkedItemLeft = checkedItemLeft + 1;
        checkedItemidLeft.push("#" + checkboxId);
    } else {
        checkedItemLeft = checkedItemLeft - 1;
        checkedItemidLeft = checkedItemidLeft.filter(function (id) {
            return id !== "#" + checkboxId;
        });
    }

    if (checkedItemLeft >= numberOfItems) {
        for (i = 0; i < items.length; i++) {
            $(items[i]).jqxCheckBox({ disabled: true });
        }

        for (i = 0; i < checkedItemidLeft.length; i++) {
            if (checkedItemidLeft[i] != null) {
                $(checkedItemidLeft[i]).jqxCheckBox({ disabled: false });
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
function initializeYearlyDropDown(){
	var YearlySource = generateYearlyJSON();	
		 var Source = {
		      datatype: "json",
		      datafields: [
		        { name: 'name' },
		        { name: 'value' }
		      ],
		      localdata: YearlySource,
		      async: true
		    };

		    var dataAdapter = new $.jqx.dataAdapter(Source);
		
		    $("#dropDownYears").jqxDropDownList({
		      dropDownHeight: 280,
		      source: dataAdapter,
		      placeHolder: "Select a Value",
		      displayMember: "name",
		      valueMember: "value",
		      theme: 'dark',
		      width: 200,
		      height: 25
		    });
		     $("#dropDownYears").jqxDropDownList('selectItem', getCurrentYear());
}
function initializeDropDown(Period){
	
	if(Period!='y')
	{fetchDataForPeriod(Period)
    .then((source) => {
		
			 var Source = {
		      datatype: "json",
		      datafields: [
		        { name: 'name' },
		        { name: 'value' }
		      ],
		      localdata: source,
		      async: true
		    };

		    var dataAdapter = new $.jqx.dataAdapter(Source);
		
		    $("#dropDownPeriodSelection").jqxDropDownList({
		      dropDownHeight: 280,
		      source: dataAdapter,
		      placeHolder: "Select a Value",
		      displayMember: "name",
		      valueMember: "value",
		      theme: 'dark',
		      width: 200,
		      height: 25
		    });
		    
		  $("#dropDownPeriodSelection").show();
				 if (Period== "w")
		             $("#dropDownPeriodSelection").jqxDropDownList('selectItem', getCurrentWeekNumber()); 
		           else if(Period== "m")
		              $("#dropDownPeriodSelection").jqxDropDownList('selectItem', getCurrentMonth());
		           else if (Period== "q")
		              $("#dropDownPeriodSelection").jqxDropDownList('selectItem', getCurrentQuarter());
		   
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
} else {
				$("#dropDownPeriodSelection").hide();
				$("#dropDownPeriodSelection").jqxDropDownList({selectedIndex: -1});
			}
	
}


function initialiazeItemsRight(items, numberOfItems){
	for (i = 0; i < items.length; i++) {
		$(items[i]).jqxCheckBox({ theme: 'dark', width: '100%', height: 26 });
	}
	 	 
  $('.right>.jqx-checkbox').on('change', function (event) {
    var $checkbox = $(this);
    var checked = event.args.checked;
    var checkboxId = $checkbox.attr('id');
    Items = "";
    if (checked) {
        checkedItemRight = checkedItemRight + 1;
        checkedItemidRight.push("#" + checkboxId);
    } else {
        checkedItemRight = checkedItemRight - 1;
        checkedItemidRight = checkedItemidRight.filter(function (id) {
            return id !== "#" + checkboxId;
        });
    }

    if (checkedItemRight >= numberOfItems) {
        for (i = 0; i < items.length; i++) {
            $(items[i]).jqxCheckBox({ disabled: true });
        }

        for (i = 0; i < checkedItemidRight.length; i++) {
            if (checkedItemidRight[i] != null) {
                $(checkedItemidRight[i]).jqxCheckBox({ disabled: false });
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
function initialiazeItems(allitems, numberOfItems){
	for (i = 0; i < allitems.length; i++) {
		$(allitems[i]).jqxCheckBox({ theme: 'dark', width: '100%', height: 26 });
	}
	 	 
  $('.jqx-checkbox').on('change', function (event) {
    var $checkbox = $(this);
    var checked = event.args.checked;
    var checkboxId = $checkbox.attr('id');
    Items = "";
    if (checked) {
        checkedItem = checkedItem + 1;
        checkedItemid.push("#" + checkboxId);
    } else {
        checkedItem = checkedItem - 1;
        checkedItemid = checkedItemid.filter(function (id) {
            return id !== "#" + checkboxId;
        });
    }

    if (checkedItem >= numberOfItems) {
        for (i = 0; i < allitems.length; i++) {
            $(allitems[i]).jqxCheckBox({ disabled: true });
        }

        for (i = 0; i < checkedItemid.length; i++) {
            if (checkedItemid[i] != null) {
                $(checkedItemid[i]).jqxCheckBox({ disabled: false });
            }
        }
        ($('#dropDownFunctions').length)?$("#dropDownFunctions").jqxDropDownList({ disabled: true }):null;  
       // enableDisableDropDowns(true);
    } else {
        for (i = 0; i < allitems.length; i++) {
            $(allitems[i]).jqxCheckBox({ disabled: false });
        }
         ($('#dropDownFunctions').length)?$("#dropDownFunctions").jqxDropDownList({ disabled: false }):null;  

      //  enableDisableDropDowns(false);
    }
});

}
function initialiazeItem(allitems, numberOfItems){
	for (i = 0; i < allitems.length; i++) {
		$(allitems[i]).jqxCheckBox({ theme: 'dark', width: '100%', height: 26 });
	}
	 	 
  $('.jqx-checkbox').on('change', function (event) {
    var $checkbox = $(this);
    var checked = event.args.checked;
    var checkboxId = $checkbox.attr('id');
    Items = "";
    if (checked) {
        checkedItem = checkedItem + 1;
        checkedItemid.push("#" + checkboxId);
    } else {
        checkedItem = checkedItem - 1;
        checkedItemid = checkedItemid.filter(function (id) {
            return id !== "#" + checkboxId;
        });
    }

    if (checkedItem >= numberOfItems) {
        for (i = 0; i < allitems.length; i++) {
            $(allitems[i]).jqxCheckBox({ disabled: true });
        }

        for (i = 0; i < checkedItemid.length; i++) {
            if (checkedItemid[i] != null) {
                $(checkedItemid[i]).jqxCheckBox({ disabled: false });
            }
        }
       // enableDisableDropDowns(true);
    } else {
        for (i = 0; i < allitems.length; i++) {
            $(allitems[i]).jqxCheckBox({ disabled: false });
        }
        enableDisableDropDowns(false);
    }
     enableDisableDropDowns(false);
});

}
function initialiazeClearFilterButton(){
	
	$("#Clearfilter").jqxButton({ theme: 'dark', height: 30, width: 74 });
	
	$("#Clearfilter").click(function() {
		uncheckAll();
		checkedItem = 0;
		for (i = 0; i < allitems.length; i++) {
			$(allitems[i]).jqxCheckBox({ disabled: false });
		}
	});
}
function initializeShowFilterButton(){
	$("#show").jqxButton({ theme: 'dark', height: 30, width: 74 });
	
	$("#show").click(function() {
		functionId=-1;
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
}
function initializeShowFilterButtonTwoYears(){
	$("#show").jqxButton({ theme: 'dark', height: 30, width: 74 });
	
	$("#show").click(function() {
		functionId=-1;
		monthDate = new Date();
		 monthDate.setFullYear((new Date).getFullYear() - 2);
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
}
function initializeShowFilterButtonThreeYears(){
	$("#show").jqxButton({ theme: 'dark', height: 30, width: 74 });
	
	$("#show").click(function() {
		functionId=-1;
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
}
function initialiazeAllButtons(){
	var monthDate = new Date();
		monthDate.setMonth(monthDate.getMonth() - 6);
		monthDate.setHours(0, 0, 0, 0);
		resetActiveChartType();
		resetActiveFontSize();
		resetActiveChartColor();
		resetActiveChartColorTransparency();
		$("#button-monthBackward").prop('disabled', false);
		$("#button-yearBackward").prop('disabled', false);
		uncheckAll();
		checkedItem = 0;
		$("#collapseFilter").removeClass('show');
		$('#grid-content').css('display', 'block');
}
function getGraphHistoryByScreenName(screenName)
{
	$.ajax({
		contentType: "application/json",
		url: "/bourse/findgraphhistorybyscreenname/"+screenName,
		dataType: 'json',
		async: true,
		cache: false,
		timeout: 600000,
		success: function(data) {


			if(data.candle==true)
			{
				  $("#candle").addClass("active");
				  $('#groupOfOptions').jqxButtonGroup('setSelection', data.candleOptionIndex);
				  if ($("#functionOptionsMenu").length) {
					    $("#functionOptionsMenu").show(); //hide
					}
	    		  renderCandleChart();
	    		  $('#grid-content').css('display', 'block');
			}
			else{
				  if ($("#functionOptionsMenu").length) {
					    $("#functionOptionsMenu").show();
					}
				checkedItemId = JSON.parse(data.parameter)[0];
			for (j = 0; j < checkedItemId.length; j++) {
				$(checkedItemId[j]).jqxCheckBox({ checked: true });
			}
			checkedItem = checkedItemId.length;
			$("#collapseFilter").removeClass('show');
			$('#grid-content').css('display', 'block');
			($('#groupOfPeriod').length)?$('#groupOfPeriod').jqxButtonGroup('setSelection', getChartPeriodIndex(JSON.parse(data.parameter)[1][0])):null;
		
			if (JSON.parse(data.parameter)[2] != null)
			Items = JSON.parse(data.parameter)[2][0];
			
			type=JSON.parse(data.parameter)[3][0];
			($('#dropDownType').length)?$("#dropDownType").jqxDropDownList('selectIndex', type ):null; 	
           
			drawGraph();
			}

		},
		error: function(e) {

			console.log("ERROR : ", e);

		}
	});

}

function saveGraphHistory(graphName,checkedItemValues,Period,type){
		const chartType=typeof($("#chartTypes").find(".active")[0]) !='undefined'?$("#chartTypes").find(".active")[0].id:null;

			if(chartType=="candle")
			{
				graphHistory = {
				"screenName": graphName,
				 "parameter": "[" + JSON.stringify(checkedItemValues) + "," + "[" + JSON.stringify(Period) + "]"+ ",["+JSON.stringify('')+"]," + "[" + JSON.stringify(type) + "]]",
				 "isCandle": true,
				 "candleOptionIndex": $('#groupOfOptions').jqxButtonGroup('getSelection') 
				};
			}
			else
				graphHistory = {
					"screenName": graphName,
					 "parameter": "[" + JSON.stringify(checkedItemValues) + "," + "[" + JSON.stringify(Period) + "]"+ ",["+JSON.stringify('')+"]," + "[" + JSON.stringify(type) + "]]",
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
function uncheckAll() {
	     for(var i=0; i<allitems.length; i++)
		   {$(allitems[i]).jqxCheckBox({checked:false});
	       } 
}
function graphfont(fontSize){
	
	const chartType=typeof($("#chartTypes").find(".active")[0]) !='undefined'?$("#chartTypes").find(".active")[0].id:null;

	if(chartType=="candle")
	{
		chart.w.config.xaxis.labels.style.fontSize=fontSize;
		chart.w.config.yaxis[0].labels.style.fontSize=fontSize;
		chart.updateOptions(chart.w.config);
		
	}
	else
	if(typeof graphName !='undefined' && (graphName=="marketShareVolume"))
		{
			chartConfiguration={
					 fontSize:fontSize,
					 showLegend:$("#gridLegend").find(".active")[0].id,
				}
			updatePieChartOptions(chartConfiguration);
			}
	else 
		if(typeof graphName !='undefined' && (graphName=="macroGraph"))
		updateGraphFontCountryPMI(fontSize,minvalue,maxvalue);
	else
	if(typeof graphName !='undefined' && (graphName=="wmqyVolume" || graphName=="RaceChartVolume"))
		updateGraphFontVolume(fontSize,minvalue,maxvalue);
	else
	if (typeof min1 != 'undefined' && functionId>=2)
			 updateGraphFont2YAxis(fontSize,min1,max1,min2,max2);
	else
	if (typeof graphType != 'undefined' && graphType=="trendline")
			 updateGraphFontTrendline(fontSize,minvalue,maxvalue);
			else 
			 updateGraphFont(fontSize,minvalue,maxvalue);
}
function getGraphData(graphService,graphName,removeEmpty,saveHistory){
	
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
			

	//chart = new ApexCharts(document.querySelector("#mainChart"), Period=='d' ? options_missingDates : optionsWeekly);
	chart = new ApexCharts(document.querySelector("#mainChart"), Period=='d' ? options : ((functionId!=-1)?optionsWeekly:optionsWeeklyy));

	chart.render();
	   if(isNaN(functionId))
	  	 functionId=-1 ;
	  	 
	   if (checkedItem == 2) {
		functionId=-1;
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
				     // calculatedMinValue = PositiveGraphs.includes(graphService)?( Math.sign(calculatedMinValue) == -1 ?0:calculatedMinValue): calculatedMinValue;
				   	 calculatedMinValue =  (Math.sign(calculatedMinValue) == -1 && !(Math.sign(min)==-1)  )? 0: calculatedMinValue;

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

		}
	   else 
	   if (functionId!=-1)
		{	
			
		dataParam = { 
	        		"fromdate":fromdate,
	        	    "todate":todate,
	        	    //"period": "d",
	        	    "period":Period,
	        	    "type": type,
	        	    "subGroupId1":itemValue[checkedItemValues[0]].subGroupId,
	        	    "groupId1": itemValue[checkedItemValues[0]].GroupId,
	        	    "isFunctionGraph":true,
					"functionId":functionId+1,
					//"removeEmpty1":itemValue[checkedItemValues[0]].subGroupId==2?"true":false
					 "removeEmpty1":removeEmpty
     			   };

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
					
					[5,6,10,11,12,13,14,15].includes(functionId+1) ? response[1].graphResponseDTOLst = updateSeriesValue(response[0].graphResponseDTOLst,response[1].graphResponseDTOLst):null;
				
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
											 chartTransparency:chartTransparency,
											 chartShowGrid:showGrid,
											 overideChartype:typeof overide != 'undefined'? overide:null};
											 	
					updateChartByFunctionIdMissingDates(chartConfigSettings, true);	
						
					$('#overlayChart').hide();
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
			});
		} 
		  else if (typeof checkedItemValues[0] === "undefined") 
			$('#alertFiltter-modal').modal('show');
		  else 
				 {
					enableDisableDropDowns(false);
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
						"removeEmpty1":removeEmpty
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
							
							chartColor=response[0].config.columnName=='SURV'?'#ff99ff':chartColor;
							
							
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
		    
	$("#dateFrom-mainChart").val(fromdate);
	$("#dateTo-mainChart").val(todate);
	
	inGraphNews(getSelectedFields((checkedItemValues.length==0?allItemsSelected(Items):checkedItemValues),itemValue));

}

function getGraphUsJobData(graphService,graphName,removeEmpty,saveHistory){
	
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
			

	//chart = new ApexCharts(document.querySelector("#mainChart"), Period=='d' ? options_missingDates : optionsWeekly);
	chart = new ApexCharts(document.querySelector("#mainChart"), Period=='d' ? options : ((functionId!=-1)?optionsWeekly:optionsWeeklyy));

	chart.render();
	   if(isNaN(functionId))
	  	 functionId=-1 ;
	  	 
	   if ([2, 3, 4].includes(checkedItem)) {
    functionId = -1;
			    dataParam = {
			        "fromdate": fromdate,
			        "todate": todate,
			        "period": "d",
			        "type": type,
			        "subGroupId1": itemValue[checkedItemValues[0]].subGroupId,
			        "groupId1": itemValue[checkedItemValues[0]].GroupId,
			        "subGroupId2": itemValue[checkedItemValues[1]].subGroupId,
			        "groupId2": itemValue[checkedItemValues[1]].GroupId,
			        "removeEmpty1": removeEmpty,
			        "removeEmpty2": removeEmpty
			    };
			
			    if (checkedItem == 3) {
			        dataParam["subGroupId3"] = itemValue[checkedItemValues[2]].subGroupId;
			        dataParam["groupId3"] = itemValue[checkedItemValues[2]].GroupId;
			        dataParam["removeEmpty3"] = removeEmpty;
			    }
			    if (checkedItem == 4) {
			        dataParam["subGroupId3"] = itemValue[checkedItemValues[2]].subGroupId;
			        dataParam["groupId3"] = itemValue[checkedItemValues[2]].GroupId;
			        dataParam["subGroupId4"] = itemValue[checkedItemValues[3]].subGroupId;
			        dataParam["groupId4"] = itemValue[checkedItemValues[3]].GroupId;
			        dataParam["removeEmpty3"] = removeEmpty;
			        dataParam["removeEmpty4"] = removeEmpty;
			    }

           enableDisableDropDowns(true);
			
			title = checkedItemValues.map(id => itemValue[id].title).join(" vs ");

			disableOptions(true);
			$.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "/"+graphService+"/getgraphdatabytype",
				data: JSON.stringify(dataParam),
				dataType: 'json',
				timeout: 600000,
				success: function(response) {
	            let startDates = [];
	            let formattedTitles = [];
	            let yAxisFormats = [];
	            let seriesData = [];
				let colorsArray = [];
			    let getFormatResults = []; 
				
				 const seriesColors = {
		            'SURV': '#ff99ff',  // Pink
		            'INITIAL': '#2ca02c', // Green
		            'FINAL': '#ffc000', // Yellow
		            'REV1': '#1f77b4' // Blue
		        };
		        const defaultColors = ["#FFFFFF", "#0000ff", "#ff0000", "#00ff00", "#ffff00", "#ffa500"];

		        
            for (let i = 0; i < checkedItem; i++) {
				
	 			let columnName = response[i].config.columnName;
	            let seriesColor = seriesColors[columnName] || defaultColors[i];
 	            colorsArray.push(seriesColor);

				
                let startDate = response[i].config.startDate;
                if (startDate != null)
                    startDates.push(new Date(startDate.split("-")[1] + "-" + startDate.split("-")[0] + "-" + startDate.split("-")[2]));
                
                formattedTitles.push(response[i].config.displayDescription ?? itemValue[checkedItemValues[i]].title);
                
                  // Get the correct format function for this series
            let getFormatResult = getFormat(response[i].config.yAxisFormat);
            getFormatResults.push(getFormatResult); // Store format result
                
                let yAxisFormat = response[i].config.yAxisFormat;
                if (yAxisFormat && yAxisFormat.includes("%")) {
                    isdecimal = false;
                    yAxisFormats.push(yAxisFormat.includes(".") ? yAxisFormat.split("%")[0].split(".")[1].length : 0);
                } else {
                    yAxisFormats.push(yAxisFormat.includes(".") ? yAxisFormat.split(".")[1].length : 0);
                    isdecimal = true;
                }

                seriesData.push({
                    name: formattedTitles[i],
                    type: 'column',
                    data: response[i].graphResponseDTOLst
                });
            }

            title = formattedTitles.join(" vs ");
			chart.w.config.title.text=title;
            let minValues = response.map(res => Math.min.apply(null, res.graphResponseDTOLst.map(item => item.y)));
            let maxValues = response.map(res => Math.max.apply(null, res.graphResponseDTOLst.map(item => item.y)));

            let min = Math.min(...minValues);
            let max = Math.max(...maxValues);

            let valueMin = addMarginToMinMax(min, max, 5);
            let valueMax = addMarginToMinMax(min, max, 5);
            let calculatedMinValue = Math.sign(min) == -1 ? -Math.abs(min) - valueMin : Math.abs(min) - valueMin;
            calculatedMinValue = (Math.sign(calculatedMinValue) == -1 || !(Math.sign(min) == -1)) ? 0 : calculatedMinValue;
			chart.w.config.grid.show=true;
			let chartGrid=chart.w.config.grid; 
			
			chart.w.config.fill.opacity=1
			
            chart.updateOptions({
				grid:chartGrid,
				colors: colorsArray,
                series: seriesData,
                xaxis: {
                    labels: {
                        rotate: -65,
                        rotateAlways: true,
                        minHeight: 0,
                        style: { fontSize: '12px' },
                        formatter: function(value, timestamp, opts) {
                            const options = { month: 'short', year: '2-digit' };
                            return new Date(value).toLocaleDateString('en-US', options).replace(/ /g, '-').replace(',', '');
                        }
                    },
                    type: 'datetime',
                    tickAmount: 19,
                    axisBorder: { show: true, color: '#ffffff', height: 3, width: '100%', offsetX: 0, offsetY: 0 }
                },
                extra: { isDecimal: isdecimal, yAxisFormat: yAxisFormats[0] },
                markers: { colors: ["#FFFFFF", "#0000ff", "#ff0000", "#00ff00", "#ffff00", "#ffa500"], strokeColors: ["#FFFFFF", "#0000ff", "#ff0000", "#00ff00", "#ffff00", "#ffa500"] },
                yaxis: {
                    labels: {
                        minWidth: 75, maxWidth: 75,
                        style: { fontSize: '12px' },
                        formatter: function(val) {
                            return isdecimal ? val.toFixed(yAxisFormats[0]) : val.toFixed(yAxisFormats[0]) + "%";
                        }
                    },
                    tickAmount: 6,
                    min: calculatedMinValue,
                    max: Math.sign(max) == -1 ? -Math.abs(max) + valueMax : Math.abs(max) + valueMax,
                    axisBorder: { width: 3, show: true, color: '#ffffff', offsetX: 0, offsetY: 0 }
                },
                tooltip:{
			            x: { show: false },
			            y: {
			                formatter: function(value, { seriesIndex }) {
			                    let formatResult = getFormatResults[seriesIndex]; // Get the correct format for this series
			                    return formatResult[1] ? value.toFixed(formatResult[0]) : value.toFixed(formatResult[0]) + "%";
			                },
			                title: { formatter: (seriesName) => seriesName }
			            }
			        },
            });

            $('#overlayChart').hide();
      },
				error: function(e) {

					console.log("ERROR : ", e);

				}
			});

		}
	   else 
	   if (functionId!=-1)
		{	
			
		dataParam = { 
	        		"fromdate":fromdate,
	        	    "todate":todate,
	        	    //"period": "d",
	        	    "period":Period,
	        	    "type": type,
	        	    "subGroupId1":itemValue[checkedItemValues[0]].subGroupId,
	        	    "groupId1": itemValue[checkedItemValues[0]].GroupId,
	        	    "isFunctionGraph":true,
					"functionId":functionId+1,
					//"removeEmpty1":itemValue[checkedItemValues[0]].subGroupId==2?"true":false
					 "removeEmpty1":removeEmpty
     			   };

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
					
					[5,6,10,11,12,13,14,15].includes(functionId+1) ? response[1].graphResponseDTOLst = updateSeriesValue(response[0].graphResponseDTOLst,response[1].graphResponseDTOLst):null;
				
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
											 chartTransparency:chartTransparency,
											 chartShowGrid:showGrid,
											 overideChartype:typeof overide != 'undefined'? overide:null};
											 	
					updateChartByFunctionIdMissingDates(chartConfigSettings, false);	
						
					$('#overlayChart').hide();
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
			});
		} 
		  else if (typeof checkedItemValues[0] === "undefined") 
			$('#alertFiltter-modal').modal('show');
		  else 
				 {
					enableDisableDropDowns(false);
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
						"removeEmpty1":removeEmpty
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
							
							chartColor=response[0].config.columnName=='SURV'?'#ff99ff':chartColor;
							
							
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
							
					 const values = addMarginToMinMax(chartConfigSettings.min, chartConfigSettings.max, 5);
				     var valueMin = values;
				     var valueMax = values; 	
				     var calculatedMinValue = Math.sign(chartConfigSettings.minvalue) == -1 ? -Math.abs(chartConfigSettings.minvalue) - valueMin : Math.abs(chartConfigSettings.minvalue) - valueMin;
				          graphService=typeof graphService!='undefined'?graphService:'';
				         // calculatedMinValue = PositiveGraphs.includes(graphService)?( Math.sign(calculatedMinValue) == -1 ?0:calculatedMinValue): calculatedMinValue;
				     calculatedMinValue =  (Math.sign(calculatedMinValue) == -1 && !(Math.sign(chartConfigSettings.min)==-1) )? 0: calculatedMinValue;
						
					 chart.updateOptions({
								
								series:[{
										name: chartConfigSettings.response[0].config != null ? (chartConfigSettings.response[0].config.displayDescription == null ? '' : chartConfigSettings.response[0].config.displayDescription) : '',
										type: 'column',
										data: chartConfigSettings.response[0].graphResponseDTOLst
									}],
									xaxis: {
									labels: {
										rotate: -70,
										rotateAlways: true,
										minHeight: 30,
										style: {
											fontSize: '12px',
										},
										formatter: function(value, timestamp, opts) {
											
											const options = { 
													  month: 'short', 
													  year: '2-digit'  
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
								stroke: {
									colors: chartConfigSettings.chartType1 == "area" ? ["#ffffff"] : [chartConfigSettings.chartColor == '#44546a' ? '#2e75b6' : chartConfigSettings.chartColor],
								width:0
								},
								markers: {
									colors: chartConfigSettings.chartType1 == "area" ? "#ffffff" : [chartConfigSettings.chartColor == '#44546a' ? '#2e75b6' : chartConfigSettings.chartColor],
									strokeColors: chartConfigSettings.chartType1 == "area" ? "#ffffff" : [chartConfigSettings.chartColor == '#44546a' ? '#2e75b6' : chartConfigSettings.chartColor]
								},
								extra: {
									isDecimal: chartConfigSettings.isdecimal,
									yAxisFormat: chartConfigSettings.yaxisformat,
								},
								yaxis: {
									labels: {
										minWidth: 75, maxWidth: 75,
										style: {
											fontSize: fontsize,
										},
										 formatter: function(val, index) {
										 if (chartConfigSettings.yAxisFormat[1])
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]);
						  					else 
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]) + "%";
									      }
									},
									tickAmount: 6,
									min: calculatedMinValue,
									max: Math.sign(chartConfigSettings.maxvalue) == -1 ? -Math.abs(chartConfigSettings.maxvalue) + valueMax : Math.abs(chartConfigSettings.maxvalue) + valueMax,
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
											if (chartConfigSettings.getFormatResult0[1])
												return value.toFixed(chartConfigSettings.getFormatResult0[0]);
											else
												return value.toFixed(chartConfigSettings.getFormatResult0[0]) + "%";
										},
										title: {
											formatter: (seriesName) => '',
										},
									},
								}
							});

						  //   checkIfRenderFlag(graphName,itemValue[checkedItemValues[0]]);
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


function getGraphDataWithFactor(graphService,graphName,removeEmpty,saveHistory){
	
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
			

	//chart = new ApexCharts(document.querySelector("#mainChart"), Period=='d' ? options_missingDates : optionsWeekly);
	chart = new ApexCharts(document.querySelector("#mainChart"), Period=='d' ? options : ((functionId!=-1)?optionsWeekly:optionsWeeklyy));

	chart.render();
	
	   if (functionId!=-1)
		{	
			
		dataParam = { 
	        		"fromdate":fromdate,
	        	    "todate":todate,
	        	    //"period": "d",
	        	    "period":Period,
	        	    "type": type,
	        	    "subGroupId1":itemValue[checkedItemValues[0]].subGroupId,
	        	    "groupId1": itemValue[checkedItemValues[0]].GroupId,
	        	    "isFunctionGraph":true,
					"functionId":functionId+1,
					"factor1":itemValue[checkedItemValues[0]].factor,
					//"removeEmpty1":itemValue[checkedItemValues[0]].subGroupId==2?"true":false
					"removeEmpty1":removeEmpty
     			   };

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
					
					 [5,6].includes(functionId+1) ? response[1].graphResponseDTOLst = updateSeriesValue(response[0].graphResponseDTOLst,response[1].graphResponseDTOLst):null;
					
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
											 chartTransparency:chartTransparency,
											 chartShowGrid:showGrid,
											 overideChartype:typeof overide != 'undefined'? overide:null};
											 	
					updateChartByFunctionIdMissingDates(chartConfigSettings, true);	
						
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
		        	  //  "removeEmpty1":itemValue[checkedItemValues[0]].subGroupId==2?"true":false,
		        	   // "removeEmpty2":itemValue[checkedItemValues[1]].subGroupId==2?"true":false
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
				     var valueMin = values;
				     var valueMax = values; 	
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
		    
	$("#dateFrom-mainChart").val(fromdate);
	$("#dateTo-mainChart").val(todate);
	
	inGraphNews(getSelectedFields((checkedItemValues.length==0?allItemsSelected(Items):checkedItemValues),itemValue));

}
function getGraphDataSovereign(graphName,itemsDataParam) {
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

	//  chart = new ApexCharts(document.querySelector("#mainChart"), Period=='d' ? ((functionId!=-1)?options_missingDates:options) : optionsWeekly);
	chart.render();
	
	   if(isNaN(functionId))
	  	 functionId=-1 ;
	  	 
	
	if (Items != "") {
		enableDisableDropDowns(true);
	disableOptions(true);
		$.ajax({
			type: "POST",
			contentType: "application/json; charset=utf-8",
			url: "/bourse/getgraphdatabytype",
			data: JSON.stringify(itemsDataParam),
			dataType: 'json',
			timeout: 600000,
			success: function(response) {

				startDateF1 = response[0].config.startDate;
				startDateF2 = response[1].config.startDate;
				startDateF3 = response[2].config.startDate;
				startDateF4 = response[3].config.startDate;
				startDateF5 = response[4].config.startDate;
				startDateF6 = response[5].config.startDate;

				if (startDateF1 != null)
					startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);
				if (startDateF2 != null)
					startDateF2 = new Date(startDateF2.split("-")[1] + "-" + startDateF2.split("-")[0] + "-" + startDateF2.split("-")[2]);
				if (startDateF3 != null)
					startDateF3 = new Date(startDateF3.split("-")[1] + "-" + startDateF3.split("-")[0] + "-" + startDateF3.split("-")[2]);
				if (startDateF4 != null)
					startDateF4 = new Date(startDateF4.split("-")[1] + "-" + startDateF4.split("-")[0] + "-" + startDateF4.split("-")[2]);
				if (startDateF5 != null)
					startDateF5 = new Date(startDateF5.split("-")[1] + "-" + startDateF5.split("-")[0] + "-" + startDateF5.split("-")[2]);
				if (startDateF6 != null)
					startDateF6 = new Date(startDateF6.split("-")[1] + "-" + startDateF6.split("-")[0] + "-" + startDateF6.split("-")[2]);

				var dates = [];

				title = "All " + Items.split("all")[1] + " Benchmark YIELD";

				var getyaxisformatFormatResult = getFormat(response[0].config.yAxisFormat);
				yaxisformat = getyaxisformatFormatResult[0];
				isdecimal = getyaxisformatFormatResult[1];


				var getFormatResult0 = getFormat(response[0].config.dataFormat);
				var getFormatResult1 = getFormat(response[1].config.dataFormat);
				var getFormatResult2 = getFormat(response[2].config.dataFormat);
				var getFormatResult3 = getFormat(response[3].config.dataFormat);
				var getFormatResult4 = getFormat(response[4].config.dataFormat);
				var getFormatResult5 = getFormat(response[5].config.dataFormat);

				var yaxisformat0 = getFormat(response[0].config.yAxisFormat);
               
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

				chart.updateOptions({
					title: {
						text: title
					},
				 animations: {
				        enabled: false,
				      
				    },
					fill: {
						type: 'solid',
						opacity: [1, 1],
					},
					xaxis: {
						labels: {
							rotate: 0,
							rotateAlways: true,
							minHeight: 0,
							style: {
								fontSize: fontsize,
							}
						},
						type: 'datetime'
					},
					grid: {
						show: true,
					},

				});

				chartDbFontSize = response[0].config.chartSize;
				fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], chartDbFontSize);
				markerSize = checkActiveChartMarker($("#chartMarker").find(".active")[0], response[0].config.chartshowMarkes);
				showGrid = checkActiveChartGrid($("#gridOptions").find(".active")[0], response[0].config.chartShowgrid);
			    showLegend	= checkActiveChartLegend($("#gridLegend").find(".active")[0], showLegend);

				chart.updateOptions(getChartDailyOption(title+getTitlePeriodAndType(), showGrid, fontsize, markerSize));


				var dbchartType1 = response[0].config.chartType;
				chartType1 = (getChartType(dbchartType1)[0] != 'area') ? getChartType(dbchartType1)[0] : 'line';

				var dbchartType2 = response[1].config.chartType;
				chartType2 = getChartType(dbchartType2)[0] != 'area' ? getChartType(dbchartType2)[0] : 'line';

				var dbchartType3 = response[2].config.chartType;
				chartType3 = getChartType(dbchartType3)[0] != 'area' ? getChartType(dbchartType3)[0] : 'line';

				var dbchartType4 = response[3].config.chartType;
				chartType4 = getChartType(dbchartType4)[0] != 'area' ? getChartType(dbchartType4)[0] : 'line';

				var dbchartType5 = response[4].config.chartType;
				chartType5 = getChartType(dbchartType5)[0] != 'area' ? getChartType(dbchartType5)[0] : 'line';

				var dbchartType6 = response[5].config.chartType;
				chartType6 = getChartType(dbchartType6)[0] != 'area' ? getChartType(dbchartType6)[0] : 'line';

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
				min5 = Math.min.apply(null, response[4].graphResponseDTOLst.map(function(item) {
					return item.y;
				})),
					max5 = Math.max.apply(null, response[4].graphResponseDTOLst.map(function(item) {
						return item.y;
					}));
				min6 = Math.min.apply(null, response[5].graphResponseDTOLst.map(function(item) {
					return item.y;
				})),
					max6 = Math.max.apply(null, response[5].graphResponseDTOLst.map(function(item) {
						return item.y;
					}));
				min = Math.min(min1, min2, min3, min4, min5, min6);
				max = Math.max(max1, max2, max3, max4, max5, max6);
				//minvalue = parseFloat((Math.floor(min * 20) / 20).toFixed(2));
				//maxvalue = parseFloat((Math.floor(max * 20) / 20).toFixed(2));
				minvalue = min;
				maxvalue = max;
			  //  var valueMin = getMarginLenght(min); 
			  //	var valueMax = getMarginLenght(max); 
			 	 const values = addMarginToMinMax(min, max, 5);
				     var valueMin = values;
				     var valueMax = values; 	 				 	
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
				},
				{
					name: response[2].config != null ? (response[2].config.displayDescription == null ? '' : response[2].config.displayDescription) : '',
					type: Period=='d' ? chartType3 : 'column',
					data: response[2].graphResponseDTOLst
				}, {
					name: response[3].config != null ? (response[3].config.displayDescription == null ? '' : response[3].config.displayDescription) : '',
					type: Period=='d' ? chartType4 : 'column',
					data: response[3].graphResponseDTOLst
				},
				{
					name: response[4].config != null ? (response[4].config.displayDescription == null ? '' : response[4].config.displayDescription) : '',
					type: Period=='d' ? chartType5 : 'column',
					data: response[4].graphResponseDTOLst
				}, {
					name: response[5].config != null ? (response[5].config.displayDescription == null ? '' : response[5].config.displayDescription) : '',
					type: Period=='d' ? chartType6 : 'column',
					data: response[5].graphResponseDTOLst
				}],
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
									} else
										if (seriesIndex == 2) {
											if (getFormatResult2[1])
												return value.toFixed(getFormatResult2[0]);
											else
												return value.toFixed(getFormatResult2[0]) + "%";
										} else
											if (seriesIndex == 3) {
												if (getFormatResult3[1])
													return value.toFixed(getFormatResult3[0]);
												else
													return value.toFixed(getFormatResult3[0]) + "%";
											} else
												if (seriesIndex == 4) {
													if (getFormatResult4[1])
														return value.toFixed(getFormatResult4[0]);
													else
														return value.toFixed(getFormatResult4[0]) + "%";
												} else
													if (seriesIndex == 5) {
														if (getFormatResult5[1])
															return value.toFixed(getFormatResult5[0]);
														else
															return value.toFixed(getFormatResult5[0]) + "%";
													}
							},
							title: {
								formatter: (seriesName) => '',
							},
						},
					}
				});


				$('#overlayChart').hide();

			},
			error: function(e) {

				console.log("ERROR : ", e);

			}
		});
		graphHistory = {
			"screenName": graphName,
			"parameter": '[' + '[]' + ',' + '["' + Period + '"]' + ',' + '["' + Items + '"]'+ ',' +'["' + type + '"]]'
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
	else 
	   if (functionId!=-1)
		{	
			
		dataParam = { 
	        		"fromdate":fromdate,
	        	    "todate":todate,
	        	    "period":Period,
	        	    "type": type,
	        	    "factor1": itemValueYields[checkedItemValues[0]].factor,
	        	    "country1":itemValueYields[checkedItemValues[0]].country,
	        	    "yieldCurveCross1": itemValueYields[checkedItemValues[0]].yieldCurveCross,
	        	    "isFunctionGraph":true,
					"functionId":functionId+1
     			   };

			if (checkedItemValues.length > 1)
				title = itemValueYields[checkedItemValues[0]].title + " vs " + itemValueYields[checkedItemValues[1]].title
			else
				title = itemValueYields[checkedItemValues[0]].title

			disableOptions(true);
			$.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "/bourse/getgraphdatabytype",
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
					
					T1 = response[0].config.displayDescription == null ? itemValueYields[checkedItemValues[0]].title : response[0].config.displayDescription;
					T2 = response[1].config.displayDescription == null ? itemValueYields[checkedItemValues[1]].title : response[1].config.displayDescription;
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
											 chartTransparency:chartTransparency,
											 chartShowGrid:showGrid};
											 	
					updateChartByFunctionIdMissingDates(chartConfigSettings, true);	
						
					$('#overlayChart').hide();
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
			});
		} 
		else if (checkedItem == 2) {
			
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					checkedItemValues.push(checkedItemid[i]);
			}
			dataParam = {
				"fromdate": fromdate,
				"todate": todate,
				"period":  Period,"type": type,
				"factor1": itemValueYields[checkedItemValues[0]].factor,
				"country1": itemValueYields[checkedItemValues[0]].country,
				"yieldCurveCross1": itemValueYields[checkedItemValues[0]].yieldCurveCross,
				"factor2": itemValueYields[checkedItemValues[1]].factor,
				"country2": itemValueYields[checkedItemValues[1]].country,
				"yieldCurveCross2": itemValueYields[checkedItemValues[1]].yieldCurveCross
			};
			enableDisableDropDowns(true);
			if (checkedItemValues.length > 1)
				title = itemValueYields[checkedItemValues[0]].title + " vs " + itemValueYields[checkedItemValues[1]].title
			else
				title = itemValueYields[checkedItemValues[0]].title

			disableOptions(true);
			$.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "/bourse/getgraphdatabytype",
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

					T1 = response[0].config.displayDescription == null ? itemValueYields[checkedItemValues[0]].title : response[0].config.displayDescription;
					T2 = response[1].config.displayDescription == null ? itemValueYields[checkedItemValues[1]].title : response[1].config.displayDescription;
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

					var yaxisformat0 = getFormat(response[0].config.yAxisFormat);

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
					minvalue=min;
					maxvalue=max;
					notDecimal=yaxisformat[1];
					nbrOfDigits=yaxisformat[0];
					// var valueMin1 = getMarginLenght(min); 
					// var valueMax1 = getMarginLenght(max); 
					 const values = addMarginToMinMax(min, max, 5);
				     var valueMin1 = values;
				     var valueMax1 = values; 	
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
							min: Math.sign(min) == -1 ? -Math.abs(min) - valueMin1 : Math.abs(min) - valueMin1,
							max: Math.sign(max) == -1 ? -Math.abs(max) + valueMax1 : Math.abs(max) + valueMax1,
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
					$('#overlayChart').hide();
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
			});
			graphHistory = {
				"screenName": graphName,
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

		}else
			if (checkedItem == 3) {
				for (i = 0; i < checkedItemid.length; i++) {
					if (checkedItemid[i] != null)
						checkedItemValues.push(checkedItemid[i]);
				}
				dataParam = {
					"fromdate": fromdate,
					"todate": todate,
					"period":  Period,"type": type,
					"factor1": itemValueYields[checkedItemValues[0]].factor,
					"country1": itemValueYields[checkedItemValues[0]].country,
					"yieldCurveCross1": itemValueYields[checkedItemValues[0]].yieldCurveCross,
					"factor2": itemValueYields[checkedItemValues[1]].factor,
					"country2": itemValueYields[checkedItemValues[1]].country,
					"yieldCurveCross2": itemValueYields[checkedItemValues[1]].yieldCurveCross,
					"factor3": itemValueYields[checkedItemValues[2]].factor,
					"country3": itemValueYields[checkedItemValues[2]].country,
					"yieldCurveCross3": itemValueYields[checkedItemValues[2]].yieldCurveCross,
				};
				enableDisableDropDowns(true);
				if (checkedItemValues.length > 1)
					title = itemValueYields[checkedItemValues[0]].title + " vs " + itemValueYields[checkedItemValues[1]].title + " vs " + itemValueYields[checkedItemValues[2]].title
				else
					title = itemValueYields[checkedItemValues[0]].title

				disableOptions(true);
				$.ajax({
					type: "POST",
					contentType: "application/json; charset=utf-8",
					url: "/bourse/getgraphdatabytype",
					data: JSON.stringify(dataParam),
					dataType: 'json',
					timeout: 600000,
					success: function(response) {
						startDateF1 = response[0].config.startDate;
						startDateF2 = response[1].config.startDate;
						startDateF3 = response[2].config.startDate;
						var dates = [];
						if (startDateF1 != null)
							startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);
						if (startDateF2 != null)
							startDateF2 = new Date(startDateF2.split("-")[1] + "-" + startDateF2.split("-")[0] + "-" + startDateF2.split("-")[2]);
						if (startDateF3 != null)
							startDateF3 = new Date(startDateF3.split("-")[1] + "-" + startDateF3.split("-")[0] + "-" + startDateF3.split("-")[2]);


						T1 = response[0].config.displayDescription == null ? itemValueYields[checkedItemValues[0]].title : response[0].config.displayDescription;
						T2 = response[1].config.displayDescription == null ? itemValueYields[checkedItemValues[1]].title : response[1].config.displayDescription;
						T3 = response[2].config.displayDescription == null ? itemValueYields[checkedItemValues[2]].title : response[2].config.displayDescription;
						title = T1 + " vs " + T2 + " vs " + T3;
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

						var dbchartType3 = response[2].config.chartType;
						chartType3 = getChartType(dbchartType3)[0] != 'area' ? getChartType(dbchartType3)[0] : 'line';

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
						minvalue=min;
						maxvalue=max;
						//var valueMin = getMarginLenght(min); 
			 			//var valueMax = getMarginLenght(max);
			 			 const values = addMarginToMinMax(min, max, 5);
					     var valueMin = values;
					     var valueMax = values; 	  				 	
						var yaxisformat0 = getFormat(response[0].config.yAxisFormat);
				
						notDecimal=yaxisformat[1];
						nbrOfDigits=yaxisformat[0];
						
						chart.updateOptions({
							series:[{
							name: response[0].config != null ? (response[0].config.displayDescription == null ? '' : response[0].config.displayDescription) : '',
							type:Period=='d' ? chartType1 : 'column',
							data: response[0].graphResponseDTOLst
						}, {
							name: response[1].config != null ? (response[1].config.displayDescription == null ? '' : response[1].config.displayDescription) : '',
							type:Period=='d' ? chartType2 : 'column',
							data: response[1].graphResponseDTOLst
						}
							, {
							name: response[2].config != null ? (response[2].config.displayDescription == null ? '' : response[2].config.displayDescription) : '',
							type: Period=='d' ? chartType3 : 'column',
							data: response[2].graphResponseDTOLst
						}],
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
											} else
												if (seriesIndex == 2) {
													if (getFormatResult2[1])
														return value.toFixed(getFormatResult2[0]);
													else
														return value.toFixed(getFormatResult2[0]) + "%";
												}
									},
									title: {
										formatter: (seriesName) => '',
									},
								},
							}
						});

						$('#overlayChart').hide();
					},
					error: function(e) {

						console.log("ERROR : ", e);

					}
				});

				graphHistory = {
					"screenName": graphName,
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
				if (checkedItem == 4) {
					for (i = 0; i < checkedItemid.length; i++) {
						if (checkedItemid[i] != null)
							checkedItemValues.push(checkedItemid[i]);
					}
					dataParam = {
						"fromdate": fromdate,
						"todate": todate,
						"period":  Period,"type": type,
						"factor1": itemValueYields[checkedItemValues[0]].factor,
						"country1": itemValueYields[checkedItemValues[0]].country,
						"yieldCurveCross1": itemValueYields[checkedItemValues[0]].yieldCurveCross,
						"factor2": itemValueYields[checkedItemValues[1]].factor,
						"country2": itemValueYields[checkedItemValues[1]].country,
						"yieldCurveCross2": itemValueYields[checkedItemValues[1]].yieldCurveCross,
						"factor3": itemValueYields[checkedItemValues[2]].factor,
						"country3": itemValueYields[checkedItemValues[2]].country,
						"yieldCurveCross3": itemValueYields[checkedItemValues[2]].yieldCurveCross,
						"factor4": itemValueYields[checkedItemValues[3]].factor,
						"country4": itemValueYields[checkedItemValues[3]].country,
						"yieldCurveCross4": itemValueYields[checkedItemValues[3]].yieldCurveCross,
					};
					enableDisableDropDowns(true);
					
					if (checkedItemValues.length > 1)
						title = itemValueYields[checkedItemValues[0]].title + " vs " + itemValueYields[checkedItemValues[1]].title + " vs " + itemValueYields[checkedItemValues[2]].title + " vs " + itemValueYields[checkedItemValues[3]].title;
					else
						title = itemValueYields[checkedItemValues[0]].title

					disableOptions(true);
					$.ajax({
						type: "POST",
						contentType: "application/json; charset=utf-8",
						url: "/bourse/getgraphdatabytype",
						data: JSON.stringify(dataParam),
						dataType: 'json',
						timeout: 600000,
						success: function(response) {
							startDateF1 = response[0].config.startDate;
							startDateF2 = response[1].config.startDate;
							startDateF3 = response[2].config.startDate;
							startDateF4 = response[3].config.startDate;
							var dates = [];

							if (startDateF1 != null)
								startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);
							if (startDateF2 != null)
								startDateF2 = new Date(startDateF2.split("-")[1] + "-" + startDateF2.split("-")[0] + "-" + startDateF2.split("-")[2]);
							if (startDateF3 != null)
								startDateF3 = new Date(startDateF3.split("-")[1] + "-" + startDateF3.split("-")[0] + "-" + startDateF3.split("-")[2]);
							if (startDateF4 != null)
								startDateF4 = new Date(startDateF4.split("-")[1] + "-" + startDateF4.split("-")[0] + "-" + startDateF4.split("-")[2]);


							T1 = response[0].config.displayDescription == null ? itemValueYields[checkedItemValues[0]].title : response[0].config.displayDescription;
							T2 = response[1].config.displayDescription == null ? itemValueYields[checkedItemValues[1]].title : response[1].config.displayDescription;
							T3 = response[2].config.displayDescription == null ? itemValueYields[checkedItemValues[2]].title : response[2].config.displayDescription;
							T4 = response[3].config.displayDescription == null ? itemValueYields[checkedItemValues[3]].title : response[3].config.displayDescription;
							title = T1 + " vs " + T2 + " vs " + T3 + " vs " + T4;

							var getyaxisformatFormatResult = getFormat(response[0].config.yAxisFormat);
							yaxisformat = getyaxisformatFormatResult[0];
							isdecimal = getyaxisformatFormatResult[1];

							var getFormatResult0 = getFormat(response[0].config.dataFormat);
							var getFormatResult1 = getFormat(response[1].config.dataFormat);
							var getFormatResult2 = getFormat(response[2].config.dataFormat);
							var getFormatResult3 = getFormat(response[3].config.dataFormat);
 
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

							var dbchartType3 = response[2].config.chartType;
							chartType3 = getChartType(dbchartType3)[0] != 'area' ? getChartType(dbchartType3)[0] : 'line';

							var dbchartType4 = response[3].config.chartType;
							chartType4 = getChartType(dbchartType4)[0] != 'area' ? getChartType(dbchartType4)[0] : 'line';

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
							minvalue=min;
							maxvalue=max;
							//var valueMin = getMarginLenght(min); 
			 			   // var valueMax = getMarginLenght(max);  		
			 			     const values = addMarginToMinMax(min, max, 5);
				     var valueMin = values;
				     var valueMax = values; 			 	
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
							}, {
								name: response[2].config != null ? (response[2].config.displayDescription == null ? '' : response[2].config.displayDescription) : '',
								type: Period=='d' ? chartType3 : 'column',
								data: response[2].graphResponseDTOLst
							}
								, {
								name: response[3].config != null ? (response[3].config.displayDescription == null ? '' : response[3].config.displayDescription) : '',
								type: Period=='d' ? chartType4 : 'column',
								data: response[3].graphResponseDTOLst
							}],
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
												} else
													if (seriesIndex == 2) {
														if (getFormatResult2[1])
															return value.toFixed(getFormatResult2[0]);
														else
															return value.toFixed(getFormatResult2[0]) + "%";
													} else
														if (seriesIndex == 3) {
															if (getFormatResult3[1])
																return value.toFixed(getFormatResult3[0]);
															else
																return value.toFixed(getFormatResult3[0]) + "%";
														}
										},
										title: {
											formatter: (seriesName) => '',
										},
									},
								}
							});

							$('#overlayChart').hide();
						},
						error: function(e) {

							console.log("ERROR : ", e);

						}
					});
					graphHistory = {
						"screenName": graphName,
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
					
					title = itemValueYields[checkedItemValues[0]].title;

					dataParam = {
						"fromdate": fromdate,
						"todate": todate,
						"period":  Period,"type": type,
						"factor1": itemValueYields[checkedItemValues[0]].factor,
						"country1": itemValueYields[checkedItemValues[0]].country,
						"yieldCurveCross1": itemValueYields[checkedItemValues[0]].yieldCurveCross,
						"isFunctionGraph":functionId=='-1'?false:true,
						"functionId":functionId
					};
					 // enableDisableDropDowns(false);
					$.ajax({
						type: "POST",
						contentType: "application/json; charset=utf-8",
						url: "/bourse/getgraphdatabytype",
						data: JSON.stringify(dataParam),
						dataType: 'json',
						timeout: 600000,
						success: function(response) {
						
							newstartdate = new Date();
							startDateF1 = response[0].config.startDate;
							if (startDateF1 != null)
								startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);


							T1 = response[0].config.displayDescription == null ? itemValueYields[checkedItemValues[0]].title : response[0].config.displayDescription;
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
							//if(Period=='d')
								updateChartSelectedItemMissingDates(chartConfigSettings);
							//else
							//	updateChartSelectedItem(chartConfigSettings);
						
							$('#overlayChart').hide();

						},
						error: function(e) {

							console.log("ERROR : ", e);

						}
					});
					
				}

		    saveGraphHistory(graphName,checkedItemValues,Period,type);
		    
	$("#dateFrom-mainChart").val(fromdate);
	$("#dateTo-mainChart").val(todate);
	
	inGraphNews(getSelectedFields((checkedItemValues.length==0?allItemsSelected(Items):checkedItemValues),itemValueYields));
}
function navigationGraph(condition) {
    fromNavigation = true;
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    if (condition == "yearBackward") {
        expectedmonthdate = new Date(monthDate.getFullYear() - 1, monthDate.getMonth(), monthDate.getDate());
        if (checkStartDate(expectedmonthdate)) return;
        monthDate.setFullYear(monthDate.getFullYear() - 1);
    } else if (condition == "monthBackward") {
        expectedmonthdate = new Date(monthDate.getFullYear(), monthDate.getMonth() - 1, monthDate.getDate());
        if (checkStartDate(expectedmonthdate)) return;
        monthDate.setMonth(monthDate.getMonth() - 1);
    } else if (condition == "monthForward") {
        $("#button-monthBackward").prop('disabled', false);
        monthDate.setMonth(monthDate.getMonth() + 1);
    } else if (condition == "yearForward") {
        $("#button-yearBackward").prop('disabled', false);
        monthDate.setFullYear(monthDate.getFullYear() + 1);
    } else if (condition == "weekBackward") {
        expectedmonthdate = new Date(monthDate.getFullYear(), monthDate.getMonth(), monthDate.getDate() - 7);
        if (checkStartDate(expectedmonthdate)) return;
        monthDate.setDate(monthDate.getDate() - 7);
    } else if (condition == "weekForward") {
        $("#button-weekBackward").prop('disabled', false);
        monthDate.setDate(monthDate.getDate() + 7);
    }
    if (mode == "usJobsCurrent") {
        redirectFunction(groupId);
    }
    else if (mode == "merge") {
        drawGraph();
    } else {
        splitGraph();
    }

    updateNavigationButtons();
}

// Function to check start date and disable button if needed
function checkStartDate(expectedDate) {
    let startDates = [startDateF1, startDateF2, startDateF3, startDateF4, startDateF5, startDateF6];
    
    for (let startDate of startDates) {
        if (startDate != null && expectedDate <= startDate) {
            disableNavigation(expectedDate, startDate);
            return true;
        }
    }
    return false;
}

// Function to disable navigation buttons and show modal
function disableNavigation(expectedDate, startDate) {
    $("#button-yearBackward").prop('disabled', true);
    $("#button-monthBackward").prop('disabled', true);
    $("#button-weekBackward").prop('disabled', true);
    
    $('#startdatetext').empty();
    $('#startdatetext').append("No data available before " + monthNames[startDate.getMonth()] + " " + startDate.getFullYear());
    $('#alertStartDate-modal').modal('show');
}

// Function to update navigation buttons
function updateNavigationButtons() {
    if (checkDateMonth(monthDate, date)) {
        $("#button-monthForward").prop('disabled', false);
    } else {
        $("#button-monthForward").prop('disabled', true);
    }

    if (checkDateYear(monthDate, date)) {
        $("#button-yearForward").prop('disabled', false);
    } else {
        $("#button-yearForward").prop('disabled', true);
    }

    if (checkDateWeek(monthDate, date)) {
        $("#button-weekForward").prop('disabled', false);
    } else {
        $("#button-weekForward").prop('disabled', true);
    }
}

	
			  function formatDate(date) {
				    var d = new Date(date),
				        month = '' + (d.getMonth() + 1),
				        day = '' + d.getDate(),
				        year = d.getFullYear();
			
				    if (month.length < 2) 
				        month = '0' + month;
				    if (day.length < 2) 
				        day = '0' + day;
			
				    return [year, month, day].join('-');
				}
			function formatDateShort(date) {
				    var d = new Date(date),
				        day = '' + d.getDate(),
				        month = d.toLocaleString('en-US', { month: 'short' }),
				        year = d.getFullYear().toString().slice(-2);
				  if (day.length < 2) 
				        day = '0' + day;
				        
				    return `${day}-${month}-${year}`;
				}
	
			function checkDateWeek(monthDate, date) {
			    // Example logic: Check if date is within the same week as monthDate
			    let oneWeekLater = new Date(monthDate);
			    oneWeekLater.setDate(oneWeekLater.getDate() + 7);
			 
				   if(oneWeekLater<date)
					   return true;
				   else
					   return false;
			   
			}

			  function checkDateMonth(monthDate,date)
			  {    var d = new Date(monthDate);
				   d.setMonth(monthDate.getMonth() + 1);
				   
				   if(d<date)
					   return true;
				   else
					   return false;
			  }
			function checkDateYear(monthDate,date)
			  {    var d = new Date(monthDate);
				   d.setFullYear(monthDate.getFullYear() + 1);
				   
				   if(d<date)
					   return true;
				   else
					   return false;
			  }
			  function isAny2Series(){
				  $('#overlayChart').show(); 
				   $(".chart-option").show(); 
				mode="merge";
				var dataParam;
                var checkedItemValues = [];
				var title;
				var fontsize='12px';
				var fromdate = formatDate(monthDate);
				var todate = formatDate(date);
				$("#mainChart").html("");
				$("#mainChart").css("display","block");
				$("#SubChart1").css("display","none");
				$("#SubChart2").css("display","none");
				$("#split").css("display","inline-block");
				$("#merge").css("display","none");
				chartType1='line';
				chartType2='line';
				if   (checkDateMonth(monthDate,date))
				   {
					  $("#button-monthForward").prop('disabled', false);
					}
					else
					{
						$("#button-monthForward").prop('disabled', true);
					}
				
				if   (checkDateYear(monthDate,date))
				   {
					  $("#button-yearForward").prop('disabled', false);
					}
					else
					{
						$("#button-yearForward").prop('disabled', true);
					} 
				 if(chart!=null)
					   chart.destroy();
			        			
				 
		    	  for(i=0; i<checkedItemid.length; i++)
				   		   {
				   	  		 if(checkedItemid[i]!=null)
				   	  		  checkedItemValues.push(checkedItemid[i]);
				   	       }
				        hasMissingDates = (missingDatesGroups.includes(itemValue[checkedItemValues[0]].GroupId)
				        					||missingDatesGroups.includes(itemValue[checkedItemValues[1]].GroupId)
				        					)?"true":false;
				        
				       
		 	     	      dataParam = { 
		 		        		"fromdate":fromdate,
		 		        	    "todate":todate,
		 		        	    "period":"d",
		 		        	    "factor1":itemValue[checkedItemValues[0]].factor,
		 		        	    "subGroupId1":itemValue[checkedItemValues[0]].subGroupId,
		 		        	    "groupId1": itemValue[checkedItemValues[0]].GroupId,
		 		        	    "factor2":itemValue[checkedItemValues[1]].factor,
		 		        	    "subGroupId2":itemValue[checkedItemValues[1]].subGroupId,
		 		        	    "groupId2": itemValue[checkedItemValues[1]].GroupId,
		 		        	    "removeEmpty1": hasMissingDates,
		 		        	    "removeEmpty2": hasMissingDates,
		 	     			   };
							   
		 	     			 disableOptions(true);
					    if(checkedItemValues.length>1)
					        	title=itemValue[checkedItemValues[0]].title +" vs "+ itemValue[checkedItemValues[1]].title 
					        		else 
					        			title=itemValue[checkedItemValues[0]].title
					        	
					        	 var options = {
					     	  			          series: [],
					     	  			          chart: {
					  		   	  			         toolbar: {
					  		   	  			        show: true,
					  		   	  			        offsetX: -50,
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
					     	  			          height: 525,
					     	  			          type: 'line',
					     	  			     animations: { enabled: false }
					     	  			        },
					     	  			   grid: {
					     	  				   
					     	  			  show:false,
					     	  			  borderColor: '#f0e68c',
					     	  			  strokeDashArray:1,
					     	  		      opacity: 0.5,
					  		   	  		  padding: {
					  		   	  	        right: 60,
					  		   	  	    },  
					     	  			},
					     	         colors: ["#F0AB2E", "#0097FE","#44546a","#7e95d9","#FAD7A0","#a3a3a5"],
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
					                          size: 2,
					                          shape:'square',
					     	  			        },
					     	  			        title: {
					     	  			          text: '',
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
					  							  fontSize:  '10px',
					  							  fontWeight:  'normal',
					  							  color:  '#9699a2'
					  							},
					  						},
					     	  			        dataLabels: {
					     	  			          enabled: false
					     	  			        },
					     	  			        xaxis: {
					     	  			        	   labels:  {
					  					        		//  rotate: -45,
					  					                  rotateAlways: true,
					  					                  minHeight:60,
					  					        		  style: {
					  							        	  fontSize: fontsize,
					  							        	 },
					  					        	  },
					     	  			           type: (hasMissingDates)?'datetime':'category',
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
					     	  			   legend: {
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
					  				    	        return [img , seriesName]
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
					  			        	  text: '',
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
			  	       	  $.ajax({
			  	       	        type: "POST",
		      	    	        contentType:  "application/json; charset=utf-8",
		      	    	        url: "/bourse/getgraphseriesdata",
		      	    	        data: JSON.stringify(dataParam),
		      	    	        dataType: 'json',
		      	    	        timeout: 600000,
		      	    	        success: function (response) {
		      	    	         
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
		      	    	        	 
		      	    	       	    chartDbFontSize = response[0].config.chartSize;
		      	    	        	fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0],chartDbFontSize);
	    	    	          	    showLegend	= checkActiveChartLegend($("#gridLegend").find(".active")[0], showLegend);
	    	    	          	    
									if(hasMissingDates)
		      	    	          	chart.updateOptions(getChartDailyOptionMissingDates(title,response[0].config.chartShowgrid,fontsize,response[0].config.chartshowMarkes));
		      	    	          	else
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
									 // minvalue = parseFloat((Math.floor(min*20)/20).toFixed(2));
				      	    	    // maxvalue = parseFloat((Math.floor(max*20)/20).toFixed(2));
				      	    	     minvalue=min;
	      	    	  				 maxvalue=max;
	      	    	  				 	 
									 var yaxisformat = getFormat(response[0].config.yAxisFormat);
									 var yaxisformat1 = getFormat(response[1].config.yAxisFormat);
									 
				      	    	     notDecimal=yaxisformat[1];
									 nbrOfDigits=yaxisformat[0];
									 notDecimal1=yaxisformat1[1];
									 nbrOfDigits1=yaxisformat1[0];
									 chartType2=='column'? response[1].graphResponseDTOLst = updateSeriesValue(response[0].graphResponseDTOLst,response[1].graphResponseDTOLst):null;
							       
							        var chartConfigSettings={
											 isDecimal:isdecimal,
											 yAxisFormat:yaxisformat,
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
											 chartType1:chartType1,
											 chartType2:chartType2,
											 getFormatResult0:getFormatResult0,
											 getFormatResult1:getFormatResult1,
											 response:response,
											 chartColor:chartColor,
											 chartTransparency:chartTransparency,
											 checkedItem:checkedItem};
											 
											 if(hasMissingDates)
											 	updateChartSelectedItemMissingDates(chartConfigSettings);
											 else
												 updateChartSelectedItem(chartConfigSettings);
									
							        $('#overlayChart').hide();
		      	   },
		      	    	        error: function (e) {
		      	    	        	
		      						  console.log("ERROR : ", e);
		      	
		      	    	        }
		      	    	    });	
			  	       
			        chart = new ApexCharts(document.querySelector("#mainChart"), options);
			        chart.render();
				
			            $("#dateFrom-mainChart").val(fromdate);
	    	            $("#dateTo-mainChart").val(todate);
					inGraphNews(getSelectedFields((checkedItemValues.length==0?allItemsSelected(Items):checkedItemValues),itemValue));

			  }
		function splitGraphTwoSeries()
			{
				
				$(".chart-option").hide();
				mode="split";
				var title1;
				var title2;
  				var checkedItemValues = [];
				var fromdate = formatDate(monthDate);
				var todate = formatDate(date);
				var fontsize='12px'
				$("#mainChart").css("display","none");
				$("#split").css("display","none");
				$("#merge").css("display","inline-block");
				$("#SubChart1").html("");
				$("#SubChart2").html("");
				$("#SubChart1").css("display","block");
				$("#SubChart2").css("display","block");
			
				  $('#overlayChart1').show(); 
				
				 if(chart1!=null)
					   chart1.destroy();
				 if(chart2!=null)
					   chart2.destroy();
				 
				for(i=0; i<checkedItemid.length; i++)
		   		   {
		   	  		 if(checkedItemid[i]!=null)
		   	  		  checkedItemValues.push(checkedItemid[i]);
		   	       }
				 if(checkedItemValues.length>1)
				  { 
					title1=T1;
				    title2=T2;
				  }
				  else
					 title1=T1;
				  var options1 = {
   	  			          series: [],
   	  			          chart: {
		   	  			         toolbar: {
		   	  			        show: true,
		   	  			       offsetX: -50,
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
   	  			          height: 525,
 						  width: 543,
   	  			          type: 'line',
   	  			     animations: { enabled: false }
   	  			        },
   	  			   grid: {
   	  				   
   	  			  show:false,
   	  			  borderColor: '#f0e68c',
   	  			  strokeDashArray:1,
   	  		      opacity: 0.5,
		   	  		  padding: {
		   	  	        right: 60,
		   	  	    },  
   	  			},
   	         colors: ["#F0AB2E", "#0097FE","#44546a","#7e95d9","#FAD7A0","#a3a3a5"],
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
                        size: 2,
                        shape:'square',
   	  			        },
   	  			        title: {
   	  			          text: '',
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
							  fontSize:  '10px',
							  fontWeight:  'normal',
							  color:  '#9699a2'
							},
						},
   	  			        dataLabels: {
   	  			          enabled: false
   	  			        },
   	  			        xaxis: {
   	  			        	   labels:  {
					        		  rotate: -45,
					                  rotateAlways: true,
					                  minHeight:60,
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
				    	        return [img , seriesName]
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
			        	  text: '',
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

 			    	   
 			    	    chart1 = new ApexCharts(document.querySelector("#SubChart1"), options1);
 				       hasMissingDates = (missingDatesGroups.includes(itemValue[checkedItemValues[0]].GroupId))?"true":false;
		    	   dataParam = { 
   		        		
   	     			   "fromdate":fromdate,
		 		       "todate":todate,
		 		        "period":"d",
		 		        "factor1":itemValue[checkedItemValues[0]].factor,
		 		        "subGroupId1":itemValue[checkedItemValues[0]].subGroupId,
		 		        "groupId1": itemValue[checkedItemValues[0]].GroupId,
		 		        "removeEmpty1": hasMissingDates,	 
   	     			   };
		  	       	  $.ajax({
		  	       	        type: "POST",
	      	    	        contentType:  "application/json; charset=utf-8",
	      	    	        url: "/bourse/getgraphseriesdata",
	      	    	        data: JSON.stringify(dataParam),
	      	    	        dataType: 'json',
	      	    	        timeout: 600000,
	      	    	        success: function (response) {
		      	    	        
		      	    	    var dbchartType1=response[0].config.chartType;
	      	    	           chartType1 = getChartType(dbchartType1)[0];
	      	    	         var getFormatResult = getFormat(response[0].config.dataFormat); 
	      	    	         var getYAxisFormatResult = getFormat(response[0].config.yAxisFormat);
	      	    		    chartDbFontSize = response[0].config.chartSize;
	      	    		    fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0],chartDbFontSize);
  	    	          	 
	      	    	         chart1.updateOptions(getSubChartDailyOption(response[0].config.displayDescription,response[0].config.chartShowgrid,fontsize,response[0].config.chartshowMarkes));
		      	    
	      	    	
	      	    	     if (chartType1=='area')
   	    	        	{
   	    	    			chart1.updateOptions({
   	    	        		colors:  ['#F0AB2E'], //[response[0].config.chartColor],
   	    	        		fill: {
	      	    	        		  type: 'gradient',
	      	    	        		  gradient: {
	      	    	        		    shade: 'dark',
	      	    	        		    type: "vertical",
	      	    	        		    shadeIntensity: 0.2,
	      	    	        		    opacityFrom: 1,
								        opacityTo: eval(response[0].config.chartTransparency),
	      	    	        		    inverseColors: false,
	      	    	        		  },}
   	    	        		, stroke: {
		     				      	 colors: ["#ffffff"],
	     				        },
   							});
   	    	        	} else 	
   	    	        			chart1.updateOptions({
      	    	    				colors: ['#F0AB2E'],
			      				       fill: {
			      			            type:'solid',
			      			            opacity: [1,1],
			      			          }, 
			      			        stroke: {
		      	    			      	 colors: ['#F0AB2E'],
		      	    		        },
		      	    	         markers: {
		      	    				   colors: ['#F0AB2E'],
		      	    				   strokeColors:['#F0AB2E']
		      	    			     }
	      	    	    		});
   	    	        	
      	    	    		
	      	    	    min = Math.min.apply(null, response[0].graphResponseDTOLst.map(function(item) {
	      	    	          return item.y;
	      	    	        })),
	      	    	        max = Math.max.apply(null, response[0].graphResponseDTOLst.map(function(item) {
	      	    	          return item.y;
	      	    	        }));
	      	    	    // minvalue = parseFloat((Math.floor(min*20)/20).toFixed(2));
	      	    	   //  maxvalue = parseFloat((Math.floor(max*20)/20).toFixed(2));
	      	    	   
	      	    	    minvalue=min;
	      	    	    maxvalue=max;
	      	    	  // 	var valueMin = getMarginLenght(min); 
			 	    //	var valueMax = getMarginLenght(max);  				 	
				 	const values = addMarginToMinMax(min, max, 5);
				     var valueMin = values;
				     var valueMax = values; 	
	      	    	     notDecimal=yaxisformat[1];
				         nbrOfDigits=yaxisformat[0];
				       
	      	    	     chart1.updateOptions({
							   series:[{
							          name: (itemValue[checkedItemValues[0]].title=="")?response[0].config.displayDescription:itemValue[checkedItemValues[0]].title,
							          type: chartType1,
							          data: response[0].graphResponseDTOLst
							        }],
	      	    	    	  extra:{
									isDecimal: isdecimal,
									yAxisFormat:yaxisformat,
								},
	     				       yaxis: {
		     				    	  labels: {
		     				    		     minWidth: 75,maxWidth: 75,
			 				        		 style: {
			 						        	  fontSize: fontsize,
			 						        	 },
							 formatter: function(val, index) {
										 if (getYAxisFormatResult[1])
						  				  return  val.toFixed(getYAxisFormatResult[0]);
						  				else 
						  				  return  val.toFixed(getYAxisFormatResult[0]) + "%";
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
  									  if (getFormatResult[1])
							  				  return  value.toFixed(getFormatResult[0]);
							  				else 
							  				  return  value.toFixed(getFormatResult[0]) + "%";
  								    },
  								    title: {
  							              formatter: (seriesName) => '',
  							          },
  					      },
  						}
    	    	    		});
							    
		      	    	 $('#overlayChart1').hide();  
		      					    
		      	   },
		      	    	        error: function (e) {
		      	    	        	
		      						  console.log("ERROR : ", e);
		      	
		      	    	        }
		      	    	    });	
			  	        chart1.render();
			      
			  	      var options2 = {
	   	  			          series: [],
	   	  			          chart: {
			   	  			         toolbar: {
			   	  			        show: true,
			   	  			        offsetX: -50,
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
	   	  			          height: 525,
							  width: 543,
	   	  			          type: 'line',
	   	  			     animations: { enabled: false }
	   	  			        },
	   	  			   grid: {
	   	  				   
	   	  			  show:false,
	   	  			  borderColor: '#f0e68c',
	   	  			  strokeDashArray:1,
	   	  		      opacity: 0.5,
			   	  		  padding: {
			   	  	        right: 60,
			   	  	    },  
	   	  			},
	   	         colors: ["#F0AB2E", "#0097FE","#44546a","#7e95d9","#FAD7A0","#a3a3a5"],
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
	                        size: 2,
	                        shape:'square',
	   	  			        },
	   	  			        title: {
	   	  			          text: '',
	   	  			         align: 'center',
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
								  fontSize:  '10px',
								  fontWeight:  'normal',
								  color:  '#9699a2'
								},
							},
	   	  			        dataLabels: {
	   	  			          enabled: false
	   	  			        },
	   	  			        xaxis: {
	   	  			        	   labels:  {
						        		 // rotate: -45,
						                  rotateAlways: true,
						                  minHeight:60,
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
					    	        return [img , seriesName]
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
				        	  text: '',
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

	 			    	   
	      	    	   	if (checkedItem==2) {
	      	    	   	  $('#overlayChart2').show(); 
	     			    	    chart2 = new ApexCharts(document.querySelector("#SubChart2"), options2);
	     					      
	     			    hasMissingDates1 = (missingDatesGroups.includes(itemValue[checkedItemValues[1]].GroupId))?"true":false;

			    	    dataParam = { 
								"fromdate":fromdate,
				 		       "todate":todate,
				 		        "period":"d",
				 		        "factor1":itemValue[checkedItemValues[1]].factor,
				 		        "subGroupId1":itemValue[checkedItemValues[1]].subGroupId,
				 		        "groupId1": itemValue[checkedItemValues[1]].GroupId,
				 		        "removeEmpty1": hasMissingDates1,
				 		        	};
			    	          $.ajax({
				  	       	        type: "POST",
			      	    	        contentType:  "application/json; charset=utf-8",
			      	    	        url: "/bourse/getgraphseriesdata",
			      	    	        data: JSON.stringify(dataParam),
			      	    	        dataType: 'json',
			      	    	        timeout: 600000,
			      	    	        success: function (response) {
			      	    	         var getFormatResult = getFormat(response[0].config.dataFormat);
			      	    	         var dbchartType2=response[0].config.chartType;
			      	    	           chartType2 = getChartType(dbchartType2)[0];
			      	    	         var getYAxisFormatResult = getFormat(response[0].config.yAxisFormat);
			      	    	         var getDataFormatResult = getFormat(response[0].config.dataFormat);
			      	    	         
			      	    		    chartDbFontSize = response[0].config.chartSize;
			      	    		    fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0],chartDbFontSize);
		    	    	          	
			      	    	       chart2.updateOptions(getSubChartDailyOption(response[0].config.displayDescription,response[0].config.chartShowgrid,fontsize,response[0].config.chartshowMarkes));
			   		      	    
			   	      	    	
				      	    	     if (chartType2=='area')
			   	    	        	{	chart2.updateOptions({
			   	    	        		colors: ['#0097fe'], // [response[0].config.chartColor],
			   	    	        		fill: {
				      	    	        		  type: 'gradient',
				      	    	        		  gradient: {
				      	    	        		    shade: 'dark',
				      	    	        		    type: "vertical",
				      	    	        		    shadeIntensity: 0.2,
				      	    	        		    opacityFrom: 1,
											        opacityTo: eval(response[0].config.chartTransparency),
				      	    	        		    inverseColors: false,
				      	    	        		  },}
			   	    	        		, stroke: {
					     				      	 colors: ["#ffffff"],
				     				        },
			   							});
			   	    	        	} else 	
			   	    	        			chart2.updateOptions({
			      	    	    				colors: ['#0097fe'],
						      				       fill: {
						      			            type:'solid',
						      			            opacity: [1,1],
						      			          }, 
						      			        stroke: {
					      	    			      	 colors: ['#0097fe'],
					      	    		        },
					      	    	         markers: {
					      	    				   colors: ['#0097fe'],
					      	    				   strokeColors:['#0097fe']
					      	    			     }
				      	    	    		});
			   	    	        	
				      	    	    min = Math.min.apply(null, response[0].graphResponseDTOLst.map(function(item) {
				      	    	          return item.y;
				      	    	        })),
				      	    	        max = Math.max.apply(null, response[0].graphResponseDTOLst.map(function(item) {
				      	    	          return item.y;
				      	    	        }));
				      	    	    // minvalue = parseFloat((Math.floor(min*20)/20).toFixed(2));
				      	    	    // maxvalue = parseFloat((Math.floor(max*20)/20).toFixed(2));
				      	    	     minvalue=min;
	      	    	  				 maxvalue=max;
	      	    	         	    // var valueMin = getMarginLenght(min); 
			 		                // var valueMax = getMarginLenght(max);  		
			 		                  const values = addMarginToMinMax(min, max, 5);
								     var valueMin = values;
								     var valueMax = values; 			 	
				   					 var yaxisformat = getFormat(response[0].config.yAxisFormat);
					
				      	    	     notDecimal=yaxisformat[1];
								     nbrOfDigits=yaxisformat[0];
				      	    	    	chart2.updateOptions({
											series:  [{
								          name: (itemValue[checkedItemValues[1]].title=="")?response[0].config.displayDescription:itemValue[checkedItemValues[1]].title,
								          type: chartType2,
								          data: response[0].graphResponseDTOLst
								         }],
				      	    	    	  extra:{
												isDecimal: isdecimal,
												yAxisFormat:yaxisformat,
											},
				     				       yaxis: {
					     				    	  labels: {
					     				    		     minWidth: 75,maxWidth: 75,
						 				        		 style: {
						 						        	  fontSize: fontsize,
						 						        	 },
												 formatter: function(val, index) {
															 if (getYAxisFormatResult[1])
											  				  return  val.toFixed(getYAxisFormatResult[0]);
											  				else 
											  				  return  val.toFixed(getYAxisFormatResult[0]) + "%";
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
			    									  if (getFormatResult[1])
										  				  return  value.toFixed(getFormatResult[0]);
										  				else 
										  				  return  value.toFixed(getFormatResult[0]) + "%";
			    								    },
			    								    title: {
			    							              formatter: (seriesName) => '',
			    							          },
			    					      },
			    						}
			      	    	    		});
								        $('#overlayChart2').hide();
			      	   },
			      	    	        error: function (e) {
			      	    	        	
			      						  console.log("ERROR : ", e);
			      	
			      	    	        }
			      	    	    });	
				  	 
				  	        chart2.render();
	      	    	   	}
				        $("#dateFrom-mainChart").val(fromdate);
	    	            $("#dateTo-mainChart").val(todate);
			}
			 function isecbImpactSeries(){
				  $('#overlayChart').show(); 
				  $(".chart-option").show(); 
				mode="merge";
				var dataParam;
                var checkedItemValues = [];
				
				var title;
				var fontsize='12px';
				var fromdate = formatDate(monthDate);
				var todate = formatDate(date);
				$("#mainChart").html("");
				$("#mainChart").css("display","block");
				$("#SubChart1").css("display","none");
				$("#SubChart2").css("display","none");
				$("#split").css("display","inline-block");
				$("#merge").css("display","none");
				chartType1='line';
				chartType2='line';
				if   (checkDateMonth(monthDate,date))
				   {
					  $("#button-monthForward").prop('disabled', false);
					}
					else
					{
						$("#button-monthForward").prop('disabled', true);
					}
				
				if   (checkDateYear(monthDate,date))
				   {
					  $("#button-yearForward").prop('disabled', false);
					}
					else
					{
						$("#button-yearForward").prop('disabled', true);
					} 
				 if(chart!=null)
					   chart.destroy();
			        			
				 
		    	  for(i=0; i<checkedItemidLeft.length; i++)
				   		   {
				   	  		 if(checkedItemidLeft[i]!=null)
				   	  		  checkedItemValues.push(checkedItemidLeft[i]);
				   	       }
				   for(i=0; i<checkedItemidRight.length; i++)
				   		   {
				   	  		 if(checkedItemidRight[i]!=null)
				   	  		  checkedItemValues.push(checkedItemidRight[i]);
				   	       }
				        hasMissingDates = (
											(itemValue[checkedItemValues[0]].GroupId==15||itemValue[checkedItemValues[0]].GroupId==16)
				        					|| (itemValue[checkedItemValues[1]].GroupId==15||itemValue[checkedItemValues[1]].GroupId==16)
				        					)?"true":false;
				        
				       
		 	     	      dataParam = { 
		 		        		"fromdate":fromdate,
		 		        	    "todate":todate,
		 		        	    "period":"d",
		 		        	    "factor1":itemValue[checkedItemValues[0]].factor,
		 		        	    "subGroupId1":itemValue[checkedItemValues[0]].subGroupId,
		 		        	    "groupId1": itemValue[checkedItemValues[0]].GroupId,
		 		        	    "factor2":itemValue[checkedItemValues[1]].factor,
		 		        	    "subGroupId2":itemValue[checkedItemValues[1]].subGroupId,
		 		        	    "groupId2": itemValue[checkedItemValues[1]].GroupId,
		 		        	    "removeEmpty1": hasMissingDates,
		 		        	    "removeEmpty2": hasMissingDates,
		 	     			   };
							   
		 	     			 disableOptions(true);
					    if(checkedItemValues.length>1)
					        	title=itemValue[checkedItemValues[0]].title +" vs "+ itemValue[checkedItemValues[1]].title 
					        		else 
					        			title=itemValue[checkedItemValues[0]].title
					        	
					        	 var options = {
					     	  			          series: [],
					     	  			          chart: {
					  		   	  			         toolbar: {
					  		   	  			        show: true,
					  		   	  			        offsetX: -50,
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
					     	  			          height: 525,
					     	  			          type: 'line',
					     	  			     animations: { enabled: false }
					     	  			        },
					     	  			   grid: {
					     	  				   
					     	  			  show:false,
					     	  			  borderColor: '#f0e68c',
					     	  			  strokeDashArray:1,
					     	  		      opacity: 0.5,
					  		   	  		  padding: {
					  		   	  	        right: 60,
					  		   	  	    },  
					     	  			},
					     	         colors: ["#F0AB2E", "#0097FE","#44546a","#7e95d9","#FAD7A0","#a3a3a5"],
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
					                          size: 2,
					                          shape:'square',
					     	  			        },
					     	  			        title: {
					     	  			          text: '',
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
					  							  fontSize:  '10px',
					  							  fontWeight:  'normal',
					  							  color:  '#9699a2'
					  							},
					  						},
					     	  			        dataLabels: {
					     	  			          enabled: false
					     	  			        },
					     	  			        xaxis: {
					     	  			        	   labels:  {
					  					        		//  rotate: -45,
					  					                  rotateAlways: true,
					  					                  minHeight:60,
					  					        		  style: {
					  							        	  fontSize: fontsize,
					  							        	 },
					  					        	  },
					     	  			           type: (hasMissingDates)?'datetime':'category',
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
					     	  			   legend: {
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
					  				    	        return [img , seriesName]
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
					  			        	  text: '',
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
			  	       	  $.ajax({
			  	       	        type: "POST",
		      	    	        contentType:  "application/json; charset=utf-8",
		      	    	        url: "/bourse/getgraphseriesdata",
		      	    	        data: JSON.stringify(dataParam),
		      	    	        dataType: 'json',
		      	    	        timeout: 600000,
		      	    	        success: function (response) {
		      	    	         
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
		      	    	        	 
		      	    	       	    chartDbFontSize = response[0].config.chartSize;
		      	    	        	fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0],chartDbFontSize);
	    	    	          	    showLegend	= checkActiveChartLegend($("#gridLegend").find(".active")[0], showLegend);
	    	    	          	    
									if(hasMissingDates)
		      	    	          	chart.updateOptions(getChartDailyOptionMissingDates(title,response[0].config.chartShowgrid,fontsize,response[0].config.chartshowMarkes));
		      	    	          	else
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
									 // minvalue = parseFloat((Math.floor(min*20)/20).toFixed(2));
				      	    	    // maxvalue = parseFloat((Math.floor(max*20)/20).toFixed(2));
				      	    	     minvalue=min;
	      	    	  				 maxvalue=max;
	      	    	  				 	 
									 var yaxisformat = getFormat(response[0].config.yAxisFormat);
									 var yaxisformat1 = getFormat(response[1].config.yAxisFormat);
									 
				      	    	     notDecimal=yaxisformat[1];
									 nbrOfDigits=yaxisformat[0];
									 notDecimal1=yaxisformat1[1];
									 nbrOfDigits1=yaxisformat1[0];
									
									chartType2='column';
							        chartType2=='column'? response[1].graphResponseDTOLst = updateSeriesValue(response[0].graphResponseDTOLst,response[1].graphResponseDTOLst):null;
							        var colors=["#FFFFFF", "#F0AB2E"];
							        var chartConfigSettings={
											 isDecimal:isdecimal,
											 yAxisFormat:yaxisformat,
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
											 chartType1:chartType1,
											 chartType2:chartType2,
											 getFormatResult0:getFormatResult0,
											 getFormatResult1:getFormatResult1,
											 response:response,
											 chartColor:chartColor,
											 chartTransparency:chartTransparency,
											 checkedItem:checkedItem,
											 overideColors: colors};
											 
											 if(hasMissingDates)
											 	updateChartSelectedItemMissingDates(chartConfigSettings);
											 else
												 updateChartSelectedItem(chartConfigSettings);
									
							        $('#overlayChart').hide();
		      	   },
		      	    	        error: function (e) {
		      	    	        	
		      						  console.log("ERROR : ", e);
		      	
		      	    	        }
		      	    	    });	
			  	       
			        chart = new ApexCharts(document.querySelector("#mainChart"), options);
			        chart.render();
				
			            $("#dateFrom-mainChart").val(fromdate);
	    	            $("#dateTo-mainChart").val(todate);
					inGraphNews(getSelectedFields((checkedItemValues.length==0?allItemsSelected(Items):checkedItemValues),itemValue));

			  }
function customDateSort(a, b) {
  const dateA = new Date(a.x.replace(/-/g, ' ')); // Convert '31-Mar-23' to '31 Mar 23' for parsing
  const dateB = new Date(b.x.replace(/-/g, ' ')); // Convert '27-Apr-23' to '27 Apr 23' for parsing

  return dateA - dateB;
}
function updateSeriesValue(serie1,serie2)
{
	const datesInSeries1 = new Set(serie1.map(item => item.x));
									
	for (const item of serie1) {
		  if (datesInSeries1.has(item.x)) {
		  if (! serie2.some(data => data.x === item.x)) {
		        serie2.push({
		      x: item.x,
		      y: null // You can set an appropriate value for missing data
		    });
		    }
		  }
		}
	 const data =  serie2;
	 return data.sort(customDateSort);	
}
function getStrokeWidth()
{
	  var from = formatDate(monthDate);
	  var fromDate = new Date(from);
	  var to = formatDate(date);
	  var toDate = new Date(to);
	  const dateDifference = toDate - fromDate;
	
	  const maxStrokeWidth = 50; // Maximum stroke width
	  const minStrokeWidth = 2.25; // Minimum stroke width
	  
	 switch (true) {
    case dateDifference <= 30 * 24 * 60 * 60 * 1000: // Less than or equal to 1 month
      strokeWidth = maxStrokeWidth;
      break;
    case dateDifference <= 90 * 24 * 60 * 60 * 1000: // Between 1 and 3 months
      strokeWidth = 40;
      break;
    case dateDifference <= 180 * 24 * 60 * 60 * 1000: // Between 3 and 6 months
      strokeWidth = 30;
      break;
    case dateDifference <= 365 * 24 * 60 * 60 * 1000: // Between 6 months and 1 year
      strokeWidth = 20;
      break;
      case dateDifference <= (365*2) * 24 * 60 * 60 * 1000: // Between 6 months and 1 year
      strokeWidth = 10;
      break;
    default: // Anything bigger than 1 year
      strokeWidth = minStrokeWidth;
  }
	  return strokeWidth*1.5;
}

function getStrokeWidthPeriod(period, numColumns)
{
	  var from = formatDate(monthDate);
	  var fromDate = new Date(from);
	  var to = formatDate(date);
	  var toDate = new Date(to);
	  const dateDifference = toDate - fromDate;
	
	  const maxStrokeWidth = 50; // Maximum stroke width
	  const minStrokeWidth = 2.25; // Minimum stroke width
	  
	  switch (true) {
    case dateDifference <= 30 * 24 * 60 * 60 * 1000: // Less than or equal to 1 month
      strokeWidth = maxStrokeWidth;
      break;
    case dateDifference <= 90 * 24 * 60 * 60 * 1000: // Between 1 and 3 months
      strokeWidth = 40;
      break;
    case dateDifference <= 180 * 24 * 60 * 60 * 1000: // Between 3 and 6 months
      strokeWidth = 30;
      break;
    case dateDifference <= 365 * 24 * 60 * 60 * 1000: // Between 6 months and 1 year
      strokeWidth = 20;
      break;
      case dateDifference <= (365*2) * 24 * 60 * 60 * 1000: // Between 6 months and 1 year
      strokeWidth = 10;
      break;
    default: // Anything bigger than 1 year
      strokeWidth = minStrokeWidth;
    }
	 switch (period) {
	    case 'd' :
	      strokeWidth = strokeWidth;
	      break;
	     case 'w' :
	      strokeWidth = strokeWidth*1.5;
	      break;
	    case 'm' : 
	      strokeWidth = strokeWidth*3;
	      break;
	    case 'q' : 
	      strokeWidth = strokeWidth*6;
	      break;
	    case 'y' : 
	      strokeWidth = strokeWidth*9;
	      break;
	    default:
	      strokeWidth = strokeWidth;
	  }
	/*  var outerWidth = 931; // $('.apexcharts-gridlines-horizontal').width();

	  var totalAvailableWidth = outerWidth - (numColumns - 1) * calculateSpacing(outerWidth, numColumns);

      var strokeWidth = calculateStrokeWidth(totalAvailableWidth, numColumns);
      
      var spacingWidth = totalAvailableWidth/numColumns;*/
      
	  return strokeWidth;
	}
	
	function getDynamicWidth(numColumns) {
	    var totalAvailableWidth = 931;
		const minColumnWidth = 4; // Minimum width to prevent columns from being invisible
	    const maxColumnWidth = 50; // Maximum width to avoid overly thick columns
	
	    // Calculate the dynamic factor as a percentage of totalAvailableWidth per column
	    const dynamicFactor = Math.min(1 / numColumns, 0.1); // Decreases as column count increases, with a cap
	
	    // Compute initial column width
	    let columnWidth = totalAvailableWidth  / numColumns * dynamicFactor;
	
	    // Clamp column width between min and max thresholds
	    columnWidth = Math.max(minColumnWidth, Math.min(columnWidth, maxColumnWidth));

    	return columnWidth*3;
	}
	function calculateSpacing(outerWidth, numColumns) {
	    return outerWidth / numColumns;
	}
	
	function calculateStrokeWidth(totalAvailableWidth, numColumns) {
	    var factor = 0.05; 
	    return totalAvailableWidth / (numColumns - 1) * factor;
	}
   function initiateBarGraph (graphService,graphName,removeEmpty,saveHistory)
   {
	
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

	var Period = getChartPeriodVolume();
	var type = getSelectedType();
	if (chart != null)
		chart.destroy();

	for (let i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					checkedItemValues.push(checkedItemid[i]);
			}
		
	chart = new ApexCharts(document.querySelector("#mainChart"), options);

	chart.render();
		if (checkedItem == 3)
		{
		dataParam = { 
	        		"fromdate":fromdate,
	        	    "todate":todate,
	        	    "period":Period,
	        	    "type": "5",
	        	    "subGroupId1":itemValue[checkedItemValues[0]].subGroupId,
	        	    "groupId1": itemValue[checkedItemValues[0]].GroupId,
	        	    "subGroupId2":itemValue[checkedItemValues[1]].subGroupId,
	        	    "groupId2": itemValue[checkedItemValues[1]].GroupId,
	        	    "subGroupId3":itemValue[checkedItemValues[2]].subGroupId,
	        	    "groupId3": itemValue[checkedItemValues[2]].GroupId,
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
				url:  "/"+graphService+"/getgraphdatabytypesum",
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
					chartType1 = 'column';
					
					var dbchartType2 = response[1].config.chartType;
					chartType2 = getChartType(dbchartType2)[0] != 'area' ? getChartType(dbchartType2)[0] : 'line';
					chartType2 = 'column';
					
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
					var valueMin = getMarginLenght(min); 
			 		var valueMax = getMarginLenght(max);  				 	
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
					
					
					var chartConfigSettings={isDecimal:isdecimal,
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
											 chartTransparency:chartTransparency,
											 checkedItem:checkedItem,
											 chartShowGrid:showGrid};
											 	
					updateBarChartSelectedItem(chartConfigSettings);	
						
					
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
	        	    "period":Period,
	        	    "type": "5",
	        	    "subGroupId1":itemValue[checkedItemValues[0]].subGroupId,
	        	    "groupId1": itemValue[checkedItemValues[0]].GroupId,
	        	    "subGroupId2":itemValue[checkedItemValues[1]].subGroupId,
	        	    "groupId2": itemValue[checkedItemValues[1]].GroupId,
		        	  //  "removeEmpty1":itemValue[checkedItemValues[0]].subGroupId==2?"true":false,
		        	   // "removeEmpty2":itemValue[checkedItemValues[1]].subGroupId==2?"true":false
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
				url:  "/"+graphService+"/getgraphdatabytypesum",
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
					chartType1 = 'column';
					
					var dbchartType2 = response[1].config.chartType;
					chartType2 = getChartType(dbchartType2)[0] != 'area' ? getChartType(dbchartType2)[0] : 'line';
					chartType2 = 'column';
					
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
					
					
					var chartConfigSettings={isDecimal:isdecimal,
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
											 chartTransparency:chartTransparency,
											 checkedItem:checkedItem,
											 chartShowGrid:showGrid};
											 	
					updateBarChartSelectedItem(chartConfigSettings);	
						
					
					$('#overlayChart').hide();
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
			});

		} else
				 {
					dataParam = {
						"fromdate": fromdate,
						"todate": todate,
						"period":  Period,
						"type": "5",
						"subGroupId1": itemValue[checkedItemValues[0]].subGroupId,
						"groupId1": itemValue[checkedItemValues[0]].GroupId,
						"isFunctionGraph":functionId=='-1'?false:true,
						"functionId":functionId,
						"removeEmpty1":removeEmpty
					};
					
					$.ajax({
						type: "POST",
						contentType: "application/json; charset=utf-8",
						url: "/"+graphService+"/getgraphdatabytypesum",
						data: JSON.stringify(dataParam),
						dataType: 'json',
						timeout: 600000,
						success: function(response) {
						
							title = itemValue[checkedItemValues[0]].title;
						
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
							// chartType1 = getChartType(dbchartType1)[0];
							chartType1 = 'column';
							
							curve1 = getChartType(dbchartType1)[1];
							disableOptions(false);
							// disableChartType(true);
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
											 chartType1:'column',
											 getFormatResult0:getFormatResult0,
											 response:response,
											 Period:Period,
											 chartColor:chartColor,
											 chartTransparency:chartTransparency,
											 checkedItem:checkedItem,
											 chartShowGrid:showGrid};
							
								updateBarChartSelectedItem(chartConfigSettings);
						
						
							$('#overlayChart').hide();

						},
						error: function(e) {

							console.log("ERROR : ", e);

						}
					});
					
				}

		    (saveHistory)?saveGraphHistory(graphName,checkedItemValues,Period,type):null;
		    
	$("#dateFrom-mainChart").val(fromdate);
	$("#dateTo-mainChart").val(todate);
	
	inGraphNews(getSelectedFields((checkedItemValues.length==0?allItemsSelected(Items):checkedItemValues),itemValue));

}

	function updateGraphFontVolume(fontsize,minvalue,maxvalue){
				 // var valueMin = getMarginLenghtVolume(minvalue); 
			 	 // var valueMax = getMarginLenghtVolume(maxvalue);  	
				 const values = addMarginToMinMax(minvalue, maxvalue, 5);
				     var valueMin = values;
				     var valueMax = values; 	
				if(chart!=null)
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
				    	        return [img , seriesName]
				    	    }
				    	  },
				          yaxis: [
							     {arrowHead:(graphName=="RaceChartVolume")?true:false,
									   tickAmount: 6,
		 				    	              min: Math.sign(minvalue) == -1 ? -Math.abs(minvalue) - valueMin : Math.abs(minvalue) - valueMin,
							           	 	  max: Math.sign(maxvalue) == -1 ? -Math.abs(maxvalue) + valueMax : Math.abs(maxvalue) + valueMax,
				     			 labels: {
						        		 minWidth: 75,maxWidth: 75,
						        		 style: {
								        	  fontSize: fontsize,
								        	 },
							 		 	 formatter: function(val, index) {

						  				  if  (chart.w.config.extra.isDecimal) {
												    if (val >= 1000) {
												     return (val / 1000).toFixed(0) + "K";
												    } else {
												      return val.toFixed(chart.w.config.extra.yAxisFormat);
												    }
												  } else {
													   if (val >= 1000) {
												     return (val / 1000).toFixed(0) + "K";
												    } else {
												      return val.toFixed(chart.w.config.extra.yAxisFormat) + "%";
												    }
												  }
						  				  
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
			}
function updateGraphFontCountryPMI(fontsize,minvalue,maxvalue){
				 // var valueMin = getMarginLenghtVolume(minvalue); 
			 	 // var valueMax = getMarginLenghtVolume(maxvalue);  	
				 const values = addMarginToMinMax(minvalue, maxvalue, 5);
				     var valueMin = values;
				     var valueMax = values; 	
				if(chart!=null)
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
				    	        return [img , seriesName]
				    	    }
				    	  },
				          yaxis: [
							     {
								   tickAmount: 6,
 				    	            min:roundedValues.min,
									max:roundedValues.max,
				     			 labels: {
						        		 minWidth: 75,maxWidth: 75,
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
						        	  axisBorder: {
						                  width: 3,
						                  show: true,
						                  color: '#ffffff',
						                  offsetX: 0,
						                  offsetY: 0
						              },
						        }]
					})
			}			
function getCurrentWeekNumber() {
    // Create a new Date object
    const today = new Date();

    // Set the target date to the beginning of the year
    const startOfYear = new Date(today.getFullYear(), 0, 1);

    // Calculate the difference in milliseconds between today and the start of the year
    const timeDifference = today - startOfYear;

    // Calculate the number of weeks by dividing the time difference by the number of milliseconds in a week
    const weekNumber = Math.ceil(timeDifference / (7 * 24 * 60 * 60 * 1000));

    return weekNumber;
}
function addGridBackground(chartId) {
	// Get the SVG element within the specified chartId
	const chartSvg = document.querySelector(`#${chartId} .apexcharts-svg`);
	if (!chartSvg) return; // Exit if the element is not found

	const gridSize = chartSvg.querySelector('.apexcharts-grid').getBBox();
	const grid = chartSvg.querySelector('.apexcharts-grid');
	const gridBackgroundWidth = gridSize.width;
	const gridBackgroundHeight = gridSize.height;

	// Add the grid background
	const gridBackground = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
	gridBackground.setAttribute('class', 'gridbackground');
	gridBackground.setAttribute('x', 0);
	gridBackground.setAttribute('y', 0);
	gridBackground.setAttribute('width', gridBackgroundWidth);
	gridBackground.setAttribute('height', gridBackgroundHeight);

	// Insert the grid background before the grid lines
	grid.insertBefore(gridBackground, grid.firstChild);
}

function getCurrentMonth() {
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // Adding 1 to get the month starting from 1
    return currentMonth;
}
function getCurrentQuarter() {
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // Adding 1 to get the month starting from 1

    if (currentMonth >= 1 && currentMonth <= 3) {
        return 1; // Q1
    } else if (currentMonth >= 4 && currentMonth <= 6) {
        return 2; // Q2
    } else if (currentMonth >= 7 && currentMonth <= 9) {
        return 3; // Q3
    } else {
        return 4; // Q4
    }
}
function getCurrentYear() {
    const today = new Date();
    const currentYear = today.getFullYear();
    return currentYear;
}
function checkIfRenderFlag(graphName, checkdItem){
	if (graphName=='fxChart' || graphName=='cdsChart')
	 renderChartFlag(0,checkdItem.img)
}

function renderChartFlag(index,img) {
  for (let i = 1; i <= chart.w.globals.series[index].length; i++) {
	const isLastIteration = i === chart.w.globals.series[index].length;
    const datapoint = chart.w.config.series[index].data[i - 1];
    if (chart.w.config.series[index].type=='column')
    return;
    if (isLastIteration)
	    chart.addPointAnnotation({
	      x: datapoint.x,
	      y: datapoint.y,
	      marker: {
	        size: 0
	      },
	      image: {
	        path: img,
	        offsetY: 10 ,
	        offsetX: 25,
	        width: 32,
            height: 32,
	      }
	    });
  }
}
function formatTrendDate(date) {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear().toString().slice(2); // Take the last two digits of the year
    return day + "-" + months[monthIndex] + "-" + year;
}

function countWeekdays(dateStr1, dateStr2) {
    // Define months in short form
    const months = {
        "Jan": 0, "Feb": 1, "Mar": 2, "Apr": 3, "May": 4, "Jun": 5, 
        "Jul": 6, "Aug": 7, "Sep": 8, "Oct": 9, "Nov": 10, "Dec": 11
    };
    
    // Helper function to parse the date string "dd-mmm-yy"
    function parseDate(dateStr) {
        const parts = dateStr.split("-");
        const day = parseInt(parts[0], 10);
        const month = months[parts[1]];
        let year = parseInt(parts[2], 10);

        // Adjust two-digit year to four digits
        if (year < 100) {
            year += (year < 50) ? 2000 : 1900;
        }

        return new Date(year, month, day);
    }
    
    // Parse both date strings
    const startDate = parseDate(dateStr1);
    const endDate = parseDate(dateStr2);

    // Initialize day counter
    let dayCount = 0;

    // Loop through each day in the range
    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
        const dayOfWeek = date.getDay();
        
        // If the day is not Saturday (6) or Sunday (0), count it
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            dayCount++;
        }
    }

    return dayCount;
}
function findThirdPoint(date1, y1, date2, y2, date3, m, endDate) {
    // Convert dates to JavaScript Date objects
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const d3 = new Date(date3);
    
    y2 = parseFloat(y2);
	const y3 =y2+m*(countWeekdays(date2,formatDates(date3)));

    const endValue = y2+m*(countWeekdays(date2,endDate));

    return {
        xyValues: [
            { "x": formatTrendDate(d1), "y": y1 },
            { "x": formatTrendDate(d2), "y": y2 },
            { "x": formatTrendDate(d3), "y": y3 }
        ],
        endValue
    };
}
function findThirdPointNoMissingDates(date1, y1, date2, y2, date3, m, endDate) {
    // Convert dates to JavaScript Date objects
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const d3 = new Date(date3);
    
    y2 = parseFloat(y2);
	const y3 =y2+m*(countDays(date2,formatDates(date3)));

    const endValue = y2+m*(countDays(date2,endDate));

    return {
        xyValues: [
            { "x": formatTrendDate(d1), "y": y1 },
            { "x": formatTrendDate(d2), "y": y2 },
            { "x": formatTrendDate(d3), "y": y3 }
        ],
        endValue
    };
}
/*function findThirdPointNoMissingDates(date1, y1, date2, y2, date3, m, endDate) {
 
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const d3 = new Date(date3);
    
    var x1 = Math.floor((d1 - new Date("January 1, 1970")) / (1000 * 60 * 60 * 24));
    var x2 = Math.floor((d2 - new Date("January 1, 1970")) / (1000 * 60 * 60 * 24));
    var x3 = Math.floor((d3 - new Date("January 1, 1970")) / (1000 * 60 * 60 * 24));
    var xc = Math.floor((endDate - new Date("January 1, 1970")) / (1000 * 60 * 60 * 24));

  	const y3 = parseFloat(y1) + m * (x3 - x1);
    const endValue = parseFloat(y1)+m*(xc - x1);

    return {
        xyValues: [
            { "x": formatTrendDate(d1), "y": y1 },
            { "x": formatTrendDate(d2), "y": y2 },
            { "x": formatTrendDate(d3), "y": y3 }
        ],
        endValue
    };
}
*/
function countDays(dateStr1, dateStr2) {
    // Define months in short form
    const months = {
        "Jan": 0, "Feb": 1, "Mar": 2, "Apr": 3, "May": 4, "Jun": 5, 
        "Jul": 6, "Aug": 7, "Sep": 8, "Oct": 9, "Nov": 10, "Dec": 11
    };
    
    // Helper function to parse the date string "dd-mmm-yy"
    function parseDate(dateStr) {
        const parts = dateStr.split("-");
        const day = parseInt(parts[0], 10);
        const month = months[parts[1]];
        let year = parseInt(parts[2], 10);

        // Adjust two-digit year to four digits
        if (year < 100) {
            year += (year < 50) ? 2000 : 1900;
        }

        return new Date(year, month, day);
    }
    
    // Parse both date strings
    const startDate = parseDate(dateStr1);
    const endDate = parseDate(dateStr2);

    // Initialize day counter
    let dayCount = 0;

    // Loop through each day in the range
    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
        // Count all days without condition
        dayCount++;
    }

    return dayCount;
}
function formatDates(dateString) {
    // Convert the input date string to a Date object
    let date = new Date(dateString);
    
    // Define the options for formatting the date
    let day = String(date.getDate()).padStart(2, '0'); // Add leading zero if needed
    let monthShort = date.toLocaleString('default', { month: 'short' }); // Get short month name (e.g., Oct)
    let year = String(date.getFullYear()).slice(-2); // Get last two digits of the year

    // Return the formatted date in the desired format
    return `${day}-${monthShort}-${year}`;
}

function findChannelPoint(date3, yc, datec, m, endDate) {
    
	const d3 = new Date(date3);
	const dc = new Date(datec);
    yc = parseFloat(yc);
    const y3 = yc+m*(countWeekdays(datec,formatDates(date3)));
    
    // Calculate y-coordinate of the end point
    const endValue = yc+m*(countWeekdays(datec,endDate));
  
    // Return the result in the specified JSON format
    return {
        xyValues:[
        { "x": formatTrendDate(dc), "y": yc },
        { "x": formatTrendDate(d3), "y": y3 }
	    ] ,
	        endValue
	    };
}

function findChannelPointNoMissingDates(date3, yc, datec, m, endDate) {
    
	const d3 = new Date(date3);
	const dc = new Date(datec);
    yc = parseFloat(yc);
    const y3 = yc+m*(countDays(datec,formatDates(date3)));
    
    // Calculate y-coordinate of the end point
    const endValue = yc+m*(countDays(datec,endDate));
  
    // Return the result in the specified JSON format
    return {
        xyValues:[
        { "x": formatTrendDate(dc), "y": yc },
        { "x": formatTrendDate(d3), "y": y3 }
	    ] ,
	        endValue
	    };
}
function calculateNewEndDate(startDate, endDate, percentage) {
    // Parse the dates
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // Calculate the difference in milliseconds
    const diffTime = end - start;
    
    // Convert the difference from milliseconds to days
    const totalDays = diffTime / (1000 * 60 * 60 * 24);
    
    // Calculate 10% of the total days
    const tenPercentDays = Math.ceil(totalDays * percentage);
    
    // Calculate the new end date by adding the 10% days to the end date
    end.setDate(end.getDate() + tenPercentDays);
    
    // Format the new end date
    const day = ('0' + end.getDate()).slice(-2);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[end.getMonth()];
    const year = end.getFullYear().toString().slice(-2);
    
    // Construct the formatted date string
    const newEndDateStr = `${day}-${month}-${year}`;
    
    return newEndDateStr;
}
function calculateNewEndDates(startDate, endDate) {
    // Parse the dates
    const start = new Date(startDate);
    let end = new Date(endDate);
    
    // Calculate the difference in milliseconds
    const diffTime = end - start;
    
    // Convert the difference from milliseconds to days
    const totalDays = diffTime / (1000 * 60 * 60 * 24);
    
    // Calculate 10% of the total days
    const tenPercentDays = Math.ceil(totalDays * 0.1);
    
    // Initialize an array to hold the new end dates
    const newEndDates = [];
    
    // Calculate the new end dates by adding the 10% days to the end date three times
    for (let i = 0; i < 3; i++) {
        // Add tenPercentDays to the end date
        end.setDate(end.getDate() + tenPercentDays);
        
        // Move the date to the 1st of the next month
        end.setMonth(end.getMonth() + 1, 1);
        
        // Format the new end date
        const day = '01';
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[end.getMonth()];
        const year = end.getFullYear().toString().slice(-2);
        
        // Construct the formatted date string
        const newEndDateStr = `${day}-${month}-${year}`;
        
        // Add the formatted date string to the array
        newEndDates.push(newEndDateStr);
    }
    
    return newEndDates;
}
async function processDataAndAddNewEndDates(response) {
    // Extract start and end dates
    const dataStartDate = response[0].graphResponseDTOLst[0].x;
    const dataEndDate = response[0].graphResponseDTOLst[response[0].graphResponseDTOLst.length - 1].x;

    // Calculate new end dates
    const newEndDates = calculateNewEndDates(dataStartDate, dataEndDate);

    // Add new data points
    newEndDates.forEach(newEndDate => {
        response[0].graphResponseDTOLst.push({ x: newEndDate, y: null });
    });

    // Return the modified response as a promise
    return Promise.resolve(response);
}
async function processDataAndAddNewEndDate(response, percentage) {
    // Extract start and end dates
    const dataStartDate = response[0].graphResponseDTOLst[0].x;
    const dataEndDate = response[0].graphResponseDTOLst[response[0].graphResponseDTOLst.length - 1].x;

    // Calculate new end date
    const newEndDate = calculateNewEndDate(dataStartDate, dataEndDate, percentage);

    // Add new data point
     response[0].graphResponseDTOLst.push({ x: newEndDate, y: null });

    // Return the modified response as a promise
     return Promise.resolve({ originalEndDate: dataEndDate, newEndDate });

}
async function processDataAndAddNewEndDateForExtraSpace(response, percentage, isArray) {
    // Extract start and end dates
    const dataStartDate = response.graphResponseDTOLst[0].x;
    const dataEndDate = response.graphResponseDTOLst[response.graphResponseDTOLst.length - 1].x;

    // Calculate new end date
    const newEndDate = calculateNewEndDate(dataStartDate, dataEndDate, percentage);

    // Convert to Date objects for iteration
    let currentDate = new Date(dataEndDate);
    let finalDate = new Date(newEndDate);

    // Function to format date as "DD-MMM-YY" (e.g., "05-Jan-25")
    function formatDateToCustom(date) {
        const day = date.getDate().toString().padStart(2, '0'); // Ensure 2-digit day
        const month = date.toLocaleString('en-GB', { month: 'short' }); // Get short month name
        const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year
        return `${day}-${month}-${year}`;
    }

    // Ensure weekdays are added (skip weekends)
    let newDates = [];
    while (currentDate < finalDate) {
        currentDate.setDate(currentDate.getDate() + 1); // Move to next day

        // Skip weekends (Saturday = 6, Sunday = 0)
        if (currentDate.getDay() !== 6 && currentDate.getDay() !== 0) {
            let formattedDate = formatDateToCustom(currentDate); // Convert to "DD-MMM-YY"
            newDates.push({ x: formattedDate, y: isArray?[]:null });
        }
    }

    // Append the generated dates to the response
    response.graphResponseDTOLst.push(...newDates);

    // Return the modified response
    return Promise.resolve({ response });
}
async function processDataAndAddNewEndDateForExtraSpaceInGraph(response, percentage, isArray) {
    // Extract start and end dates
    const dataStartDate = response[0].x;
    const dataEndDate = response[response.length - 1].x;

    // Calculate new end date
    const newEndDate = calculateNewEndDate(dataStartDate, dataEndDate, percentage);

    // Convert to Date objects for iteration
    let currentDate = new Date(dataEndDate);
    let finalDate = new Date(newEndDate);

    // Function to format date as "DD-MMM-YY" (e.g., "05-Jan-25")
    function formatDateToCustom(date) {
        const day = date.getDate().toString().padStart(2, '0'); // Ensure 2-digit day
        const month = date.toLocaleString('en-GB', { month: 'short' }); // Get short month name
        const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year
        return `${day}-${month}-${year}`;
    }

    // Ensure weekdays are added (skip weekends)
    let newDates = [];
    while (currentDate < finalDate) {
        currentDate.setDate(currentDate.getDate() + 1); // Move to next day

        // Skip weekends (Saturday = 6, Sunday = 0)
        if (currentDate.getDay() !== 6 && currentDate.getDay() !== 0) {
            let formattedDate = formatDateToCustom(currentDate); // Convert to "DD-MMM-YY"
            newDates.push({ x: formattedDate, y: isArray?[]:null });
        }
    }

    // Append the generated dates to the response
    response.push(...newDates);

    // Return the modified response
    return Promise.resolve({ response });
}
async function processDataAndAddNewEndMonthForExtraSpace(response, percentage, isArray) {
    // Extract start and end dates
    const dataStartDate = new Date(response.graphResponseDTOLst[0].x);
    const dataEndDate = new Date(response.graphResponseDTOLst[response.graphResponseDTOLst.length - 1].x);

    // Calculate new end date by adding extra months
    const newEndDate = calculateNewEndDate(dataStartDate, dataEndDate, percentage);

    // Function to format date as "01-MMM-YY" (e.g., "01-Jan-25")
    function formatMonthToCustom(date) {
        const day = "01"; // Fixed day
        const month = date.toLocaleString('en-GB', { month: 'short' }); // Short month name
        const year = date.getFullYear().toString().slice(-2); // Last two digits of year
        return `${day}-${month}-${year}`;
    }

    // Generate new months up to the final date
    let newDates = [];
    let currentDate = new Date(dataEndDate);
    let finalDate = new Date(newEndDate);

    while (currentDate < finalDate) {
        currentDate.setMonth(currentDate.getMonth() + 1); // Move to next month
        currentDate.setDate(1); // Ensure it's the first day of the month

        let formattedDate = formatMonthToCustom(currentDate); // Convert to "01-MMM-YY"
        newDates.push({ x: formattedDate, y: isArray ? [] : null });
    }

    // Append the generated months to the response
    response.graphResponseDTOLst.push(...newDates);

    // Return the modified response
    return Promise.resolve({ response });
}

async function areValuesClose(value1, value2, threshold = 3) {
    // Calculate the absolute difference between the two values
    const difference = Math.abs(value1 - value2);
    
    // Check if the difference is less than the threshold
    return difference < threshold;
}
function renderCandleChart(){
	  if ($("#functionOptionsMenu").length) {
					    $("#functionOptionsMenu").show(); //hide
					}
		if(showGroupOfOptions)			
		$("#groupOfOptions").show();
	
	candleStick(graphName,false);
}

function candleStick(graphName, saveHistory) {
	mode = "merge";
	var dataParam;
	var checkedItemValues = [];
	$('#overlayChart').show();
   // functionId=-1;
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
		{ chart.destroy();
		}
		
	const chartOptions = {
    series: [], // Empty series, to be filled later with data
    chart: {
        type: 'candlestick',
        height: 525,
        animations: { enabled: false },
        toolbar: {
            show: true,
            offsetX: -50,
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
         
    },
    title: {
        text: '',
        align: 'center',
        margin: 0,
        offsetY: 20,
        style: {
            fontWeight: 'bold'
        }
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
        }
    },
    grid: {
        show: true,
        borderColor: '#f0e68c',
        strokeDashArray: 1,
        opacity: 0.5,
        padding: {
            right: 60
        }
    },
    xaxis: {
        labels: {
            rotate: -70,
            rotateAlways: true,
            minHeight: 30,
            style: {
                fontSize: '12px'
            },
            formatter: function(value) {
                let a = [{ day: 'numeric' }, { month: 'short' }, { year: '2-digit' }];
                let s = (isTimestamp(value)) ? join(value, a, '-') : value;
                return s;
            }
        },
        type: 'category',
        tickAmount: 19,
        axisBorder: {
            show: true,
            color: '#ffffff',
            height: 3,
            width: '100%',
            offsetX: 0,
            offsetY: 0
        }
    },
   
};
	chart = new ApexCharts(document.querySelector("#mainChart"), chartOptions);
	chart.render();
	
	const selectedCandleStickIndex =$('#groupOfOptions').jqxButtonGroup('getSelection');
    const subGroupId1 = candleGroupIdSubgroups [selectedCandleStickIndex][1];
    const groupId = candleGroupIdSubgroups [selectedCandleStickIndex][0];
    
	let interval=null;
	
	if(timeRange== "Daily")
	    url ="/cryptos/getcandlegraphdata";
	else
	  { 
		url ="/cryptos/getcandlegraphdatainterval";
	   todate= todate+' 23:59:59';
	   interval =timeRange;
	  }
	console.log(timeRange);
	dataParam = {
		"fromdate": fromdate,
		"todate": todate,
		"subGroupId1": subGroupId1,
		"groupId1": groupId,
		"interval":interval
	};
 	if (!isNaN(functionId) && functionId != -1)
		{	
			
		dataParam = { 
	        		"fromdate":fromdate,
	        	    "todate":todate,
	        	    //"period": "d",
	        	    "period":Period,
	        	    "type": type,
	        	    "subGroupId1":subGroupId1,
	        	    "groupId1": groupId,
	        	    "isFunctionGraph":true,
					"functionId":functionId+1,
     			   };
		}
		


	disableOptions(true);
	
	$.ajax({
		type: "POST",
		contentType: "application/json; charset=utf-8",
		url: url,
		data: JSON.stringify(dataParam),
		dataType: 'json',
		timeout: 600000,
		success: function(response) {
			$("#Clearfilter").trigger('click');

			//disableChartType(false);
			$("#candle").addClass("active");
			
			

			startDateF1 = response[0].config.startDate;

			if (startDateF1 != null)
				startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);


			response[0].graphResponseDTOLst.forEach(item => {
				item.y = JSON.parse(item.y).map(yValue => parseFloat(yValue));
			});


			chartDbFontSize = response[0].config.chartSize;
	
			chartTransparency = checkActiveChartColorTransparency($("#chartColorTransparency").find(".active")[0], response[0].config.chartTransparency);
			fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], chartDbFontSize);
			markerSize = checkActiveChartMarker($("#chartMarker").find(".active")[0], response[0].config.chartshowMarkes);
			showGrid = checkActiveChartGrid($("#gridOptions").find(".active")[0], response[0].config.chartShowgrid);
			showLegend = checkActiveChartLegend($("#gridLegend").find(".active")[0], showLegend);

			// Flatten all "y" values into a single array and convert them to numbers
			let  allValues = response[0]?.graphResponseDTOLst 
			    ? response[0].graphResponseDTOLst.flatMap(item => item.y ? item.y.map(Number) : [])
			    : [];
			    
			// Find the minimum and maximum values
			const min = Math.min(...allValues);
			const max = Math.max(...allValues);


			const values = addMarginToMinMax(min, max, 5);

			var valueMin = values;
			var valueMax = values;

			var yAxisFormat = getFormat(response[0].config.yAxisFormat);

			notDecimal = yAxisFormat[1];
			nbrOfDigits = yAxisFormat[0];

			var getFormatResult0 = getFormat(response[0].config.dataFormat);
			var calculatedMinValue = Math.sign(min) == -1 ? -Math.abs(min) - valueMin : Math.abs(min) - valueMin;

		processDataAndAddNewEndDateForExtraSpace(response[0] ,0.05,true)
					    .then(({ response }) => {
								response[0] = response;
					    })
					    .catch(error => {
					        console.error('Error processing data:', error);
					    });	
					    
		if (typeof response[1] !== "undefined")			    
		{
		processDataAndAddNewEndDateForExtraSpace(response[1] ,0.05,false)
					    .then(({ response }) => {
							response[1] = response;
					    })
					    .catch(error => {
					         console.error('Error processing data:', error);
					    });				   
		
		min2 = Math.min.apply(null, response[1].graphResponseDTOLst.map(function(item) {
						return item.y;
					})),
		max2 = Math.max.apply(null, response[1].graphResponseDTOLst.map(function(item) {
							return item.y;
						}));
		yAxisformat1 = getFormat(response[1].config.yAxisFormat);
		
		selectedValue = Math.abs(min2)>=Math.abs(max2)?Math.abs(min2):Math.abs(max2);		
		
		getFormatResult1 = getFormat(response[1].config.dataFormat);
		 
		T2 = response[1].config.displayDescription == null ? itemValueYields[checkedItemValues[1]].title : response[1].config.displayDescription;
		candleGraphTitleConfig = candleGraphTitle + " vs " + T2;		
	
		}else{
			let candleGraphTimeRange = (timeRange=="4h")?" 4-Hour ":(timeRange=="1w")?" Weekly":" DAILY"
			candleGraphTitleConfig = candleGraphTitle +candleGraphTimeRange;
		}
let seriesArray=[{
					type: 'candlestick',
					data: response[0].graphResponseDTOLst

				}];
				
let colorConfig=['#FFFFFF'];
let strokeWidthConfig=[2];
let annotations = {};
let yaxisConfig =[{
					tooltip: {
						enabled: true
					},
					labels: {
						minWidth: 75, maxWidth: 75,
						style: {
							fontSize: fontsize,
						},
						formatter: function(val, index) {
						 // Ensure val is a valid number before calling toFixed()
					    if (typeof val === "number" && !isNaN(val)) {
					        if (yAxisFormat[1])
					            return val.toFixed(yAxisFormat[0]);
					        else
					            return val.toFixed(yAxisFormat[0]) + "%";
					    }
					    return ""; 
											}
					},
					tickAmount: 6,
					min: calculatedMinValue,
					max: Math.sign(max) == -1 ? -Math.abs(max) + valueMax : Math.abs(max) + valueMax,
					axisBorder: {
						width: 3,
						show: true,
						color: '#ffffff',
						offsetX: 0,
						offsetY: 0
					},
				}];
				
			if (functionId == 0 || functionId == 1) {
				
				 allValues = [
				  ...response[0].graphResponseDTOLst.flatMap(item => item.y ? item.y.map(Number) : []),
				  ...response[1].graphResponseDTOLst.map(item =>  Number(item.y) )
				];
				const min  = Math.min(...allValues.filter(value => value !== 0));
	
				const max = Math.max(...allValues.filter(value => value !== 0));
	
	
				const values = addMarginToMinMax(min, max, 5);
	
				var valueMin = values;
				var valueMax = values;
				 calculatedMinValue = Math.sign(min) == -1 ? -Math.abs(min) - valueMin : Math.abs(min) - valueMin;
				 calculatedMaxValue = Math.sign(max) == -1 ? -Math.abs(max) + valueMax : Math.abs(max) + valueMax;
				 
		
				seriesArray.push({
					name: response[1].config != null ? (response[1].config.displayDescription == null ? '' : response[1].config.displayDescription) : '',
					type: 'line',
					data: response[1].graphResponseDTOLst
				});
				colorConfig = functionId == 0 ? ["#FFFFFF", "#FF0000"] : ["#FFFFFF", "#ffa4c5"];
				strokeWidthConfig = [2, 2.25];
				
				yaxisConfig =[{
					tooltip: {
						enabled: true
					},
					labels: {
						minWidth: 75, maxWidth: 75,
						style: {
							fontSize: fontsize,
						},
						formatter: function(val, index) {
						 // Ensure val is a valid number before calling toFixed()
					    if (typeof val === "number" && !isNaN(val)) {
					        if (yAxisFormat[1])
					            return val.toFixed(yAxisFormat[0]);
					        else
					            return val.toFixed(yAxisFormat[0]) + "%";
					    }
					    return ""; 
											}
					},
					tickAmount: 6,
					min: calculatedMinValue,
					max: calculatedMaxValue,
					axisBorder: {
						width: 3,
						show: true,
						color: '#ffffff',
						offsetX: 0,
						offsetY: 0
					},
				}];
			}
			else if (functionId >= 6  && functionId<9) {
				seriesArray.push({
					name: response[1].config != null ? (response[1].config.displayDescription == null ? '' : response[1].config.displayDescription) : '',
					type: 'column',
					data: response[1].graphResponseDTOLst
				});
				colorConfig = ["#FFFFFF", "#00c9ff96"];
				yaxisConfig.push({
						
							  opposite: true,
     				    	  labels: {
     				    		    // minWidth: -50,maxWidth: -50,
	 				        		 style: {
	 						        	  fontSize: fontsize,
	 						        	 },
	 						        	 formatter: function(val, index) {
										    if (val == null) return "N/A"; // Handle null or undefined values
										
										    if (getFormatResult1[1]) {
										        return val.toFixed(getFormatResult1[0]);
										    } else {
										        return val.toFixed(getFormatResult1[0]) + "%";
										    }
										}
		 				        	  },
		 				          tickAmount: 6,
		 				    	  min:min2,
		 				    	  max:max2,
 				    			  axisBorder: {
 					                  width: 3,
 					                  show: true,
 					                  color: "#00c9ff96",
 					                  offsetX: 0,
 					                  offsetY: 0
 					              }
 				    			 
				});
			}
			else if(!isNaN(functionId) && functionId != -1)
			{ 
				var strokeWidth1=getDynamicWidth(response[1].graphResponseDTOLst.filter(item => item.y !== null).length); 

				seriesArray.push({
								name: response[1].config != null ? (response[1].config.displayDescription == null ? '' : response[1].config.displayDescription) : '',
								type: 'column',
								data: response[1].graphResponseDTOLst,
								...([4,5, 9, 10, 11, 12, 13, 14].includes(functionId) 
					            ? { strokeWidth: strokeWidth1 } 
					            : {}) // Conditionally include strokeWidth

							});
				colorConfig = [function({ value, seriesIndex, w }) {
							 return   chartColor == '#ffffff' ;
							  
							}, function({ value, seriesIndex, w }) {
								  if(seriesIndex!=0)
									if (value <= 0) {
										 return '#f23a3aa3'; // Color for values less than or equal to zero
										} else {
										   return '#30d7818c'; // Color for values greater than zero
										}
							}];
				yaxisConfig.push({
						      opposite: true,
     				    	  labels: {
     				    		 minWidth: 75,maxWidth: 75,
 				        		 style: {
 						        	  fontSize: fontsize,
 						        	 },
 						        	 formatter: function(val, index) {
										    if (val == null) return "N/A"; // Handle null or undefined values
										
										    if (getFormatResult1[1]) {
										        return val.toFixed(getFormatResult1[0]);
										    } else {
										        return val.toFixed(getFormatResult1[0]) + "%";
										    }
										}
 				        	  },
 				          tickAmount: 6,
 				    	  min:Math.sign(min2)==-1 ? -Math.abs(selectedValue) : Math.abs(selectedValue),
 				    	  max:Math.sign(max2)==-1 ? -Math.abs(selectedValue) : Math.abs(selectedValue),
 				    			  axisBorder: {
 					                  width: 3,
 					                  show: true,
 					                  color: "#FF0000",
 					                  offsetX: 0,
 					                  offsetY: 0
 					              },
 				    			 });
 				    			 
 				    		annotations = {
							  yaxis: [{
							    y: 0,
							    yAxisIndex: 1,
								strokeDashArray: 0,
								offsetX: 0,
								width: '100%',
								borderColor: '#FF0000',
							    label: {
								    position: 'right',
								    offsetX: 70,
					                offsetY: 0,
							        borderColor: '#FF0000',
							        style: {
							          color: '#fff',
							          background: '#ff000052'
							        },
							        text: ''
							      }
							  }]
							};
			}

	
chart.updateOptions({
				annotations:annotations,
				series: seriesArray,
				chart: {
					toolbar: {
						show: true,
						offsetX: -50,
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
					animations: { enabled: false },
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
				 plotOptions: {
				        candlestick: {
				          colors: {
				            upward: '#00b746', // Green for upward candlesticks
				            downward: '#ef403c' // Red for downward candlesticks
				          },
				          wick: {
				            useFillColor: false // Ensures wick color is set independently of body color
				          }
				        }
				      },
				   stroke: {
			        show: true,
			        width: strokeWidthConfig,
			        colors: colorConfig, // Sets the wick (middle line) color to white
			      },
			    colors: colorConfig, 
				title: {

					text: candleGraphTitleConfig,
					align: 'center',
					margin: 0,
					offsetY: 20,
					style: {
						fontWeight: 'bold',
					},
				},
				grid: {
					show: true,
					borderColor: '#f0e68c',
					strokeDashArray: 1,
					opacity: 0.5,
					padding: {
						right: 60,
					},
				},
				xaxis: {
					labels: {
						rotate: -45,
						rotateAlways: true,
						minHeight: 90,
						style: {
							fontSize: '12px',
						},
						formatter: function(value, timestamp, opts) {
							let a = '';
							let s = '';
							if(timeRange == "1w")
							{ a = [{day: 'numeric'}, {month: 'short'}, {year: '2-digit'}];
							  s =  (isTimestamp(value))?join(value, a, '-'):value;
							  if (typeof s === "string" && s.includes(" ")) {
							        s=   s.split(" ")[0]; // Take only the date part
							    }
							 }
							else
							{ a = [{day: 'numeric'}, {month: 'short'}, {year: '2-digit'}];
							  s =  (isTimestamp(value))?join(value, a, '-'):value;
							}
				            return s;
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
				yaxis: yaxisConfig,
		tooltip: {
    enabled: true,
    shared: true,
    custom: function({ seriesIndex, dataPointIndex, w }) {
        // Get the Y value at the current index
        const yValue = w.globals.series[seriesIndex][dataPointIndex];

        // If the value is an empty array ([]) or undefined, return null (hide tooltip)
        if (!yValue || (Array.isArray(yValue) && yValue.length === 0)) {
            return null; // Hide tooltip
        }

        // Check if it's a candlestick chart
        const isCandlestick = w.config.series[seriesIndex].type === "candlestick";

        if (isCandlestick) {
            // Fetch OHLC values
            const open = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
            const high = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
            const low = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
            const close = w.globals.seriesCandleC[seriesIndex][dataPointIndex];

				      // Format the values
			const formatValue = value =>
				        new Intl.NumberFormat("en-US", { minimumFractionDigits: getFormatResult0[0], maximumFractionDigits: getFormatResult0[0] }).format(value);
				
            return `
                <div style="padding: 10px;">
                    <div><strong>Open:</strong> ${formatValue(open)}</div>
                    <div><strong>High:</strong> ${formatValue(high)}</div>
                    <div><strong>Low:</strong> ${formatValue(low)}</div>
                    <div><strong>Close:</strong> ${formatValue(close)}</div>
                </div>`;
        } else {
            // Display the single Y value for line/bar charts
            return `
                <div style="padding: 10px;">
                    <div><strong>Value:</strong> ${yValue}</div>
                </div>`;
        }
    }
}
				,
				legend: {
		   show:false
		   }
				  
			});

			disableChartFont(false);
			$('#overlayChart').hide();
			$("#mainChart-title").empty();

			graphTitle = '';

			$("#mainChart-title").append('<div id="title-image" style="position: absolute;top: 20px;left: 350px;height: 60px;" class="title-style">' + graphTitle + '</div>')
		//	enableDisableDropDowns(true);
		},
		error: function(e) {

			console.log("ERROR : ", e);

		}

	});


	(saveHistory) ? saveGraphHistory(graphName, checkedItemid, Period, type) : null;

	$("#dateFrom-mainChart").val(fromdate);
	$("#dateTo-mainChart").val(todate);
	 inGraphNews(getSelectedCandleOptionNews(graphName,selectedCandleStickIndex));

}

function getSelectedCandleOptionNews(graphName, selectedOption) {
    // Define the mapping object
    const graphOptions = {
        bitcoin: {
            0: ['openint-71', 'high-71', 'low-71', 'closeint-71'],
            1: ['openeuro-71', 'high-71', 'low-71', 'closeeuro-71']
        },
        ethereum: {
            0: ['openint-72', 'high-72', 'low-72', 'closeint-72'],
            1: ['openeuro-72', 'high-72', 'low-72', 'closeeuro-72']
        },
        solana: {
            0: ['openint-73', 'high-73', 'low-73', 'closeint-73'],
            1: ['openeuro-73', 'high-73', 'low-73', 'closeeuro-73']
        },
        shiba: {
            0: ['openint-74', 'high-74', 'low-74', 'closeint-74'],
            1: ['openeuro-74', 'high-74', 'low-74', 'closeeuro-74']
        },
        binance: {
            0: ['openint-75', 'high-75', 'low-75', 'closeint-75'],
            1: ['openeuro-75', 'high-75', 'low-75', 'closeeuro-75']
        },
        xrp: {
            0: ['openint-76', 'high-76', 'low-76', 'closeint-76'],
            1: ['openeuro-76', 'high-76', 'low-76', 'closeeuro-76']
        },
        default: {
            0: ['openint-73', 'high-73', 'low-73', 'closeint-73'],
        }
        // Add more graph names as needed
    };

    // Check if the graph name exists
    if (graphOptions[graphName]) {
        // Handle the case where the graph name has only one option
        if (Object.keys(graphOptions[graphName]).length === 1) {
            return graphOptions[graphName][0]; // Return the only option available
        }

        // Handle cases with multiple options
        if (graphOptions[graphName][selectedOption] !== undefined) {
            return graphOptions[graphName][selectedOption];
        }
    }

    // Return a default value or empty array if no match is found
    return [];
}

	$("#groupOfOptions").on('buttonclick', function(event) {
		candleStick(graphName, false);

	});
function getGraphDataCrypto(graphService,graphName,removeEmpty,saveHistory){
	
	mode = "merge";
	var dataParam;
	var checkedItemValues = [];
	$('#overlayChart').show();

	var fromdate = formatDate(monthDate);
	var todate = formatDate(date);
	$("#mainChart").html("");
	$("#mainChart").css("display", "block");
	
	let interval=null
	
	if(timeRange== "Daily")
		url="/"+graphService+"/getgraphdatabytype";
	else
		{ url="/"+graphService+"/getgraphdatainterval";
  		  todate= todate+' 23:59:59';
  		  interval=timeRange;
  		 }
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
			
	if (checkedItemValues.length >= 2) {
	    if (checkedItemValues[0].indexOf("-5") !== -1 || checkedItemValues[0].indexOf("-6") !== -1) {
	        // Swap first and second elements
	        var temp = checkedItemValues[0];
	        checkedItemValues[0] = checkedItemValues[1];
	        checkedItemValues[1] = temp;
	    }
	}
	
	chart = new ApexCharts(document.querySelector("#mainChart"), Period=='d' ? options : ((functionId!=-1)?optionsWeekly:optionsWeeklyy));

	chart.render();
	   if(isNaN(functionId))
	  	 functionId=-1 ;
	  	 
	   if (checkedItem == 2) {
		functionId=-1;
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
		        	 "removeEmpty1":removeEmpty,
		        	 "removeEmpty2":removeEmpty,
		        	  "interval" :interval
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
				url: url,
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
					title = T1 + " vs " + T2 +" DAILY";
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
					chartType2 = (itemValue[checkedItemValues[1]].subGroupId=='5' || itemValue[checkedItemValues[1]].subGroupId=='6' )?'column':chartType2;
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
				     // calculatedMinValue = PositiveGraphs.includes(graphService)?( Math.sign(calculatedMinValue) == -1 ?0:calculatedMinValue): calculatedMinValue;
				   	 calculatedMinValue =  (Math.sign(calculatedMinValue) == -1 && !(Math.sign(min)==-1) )? 0: calculatedMinValue;

					var yaxisformat0 = getFormat(response[0].config.yAxisFormat);
					var yaxisformat1 = getFormat(response[1].config.yAxisFormat);
					
					notDecimal=yaxisformat0[1];
			    	nbrOfDigits=yaxisformat0[0];
			    	
			    	let yAxis = {
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
						};
						colors=["#FFFFFF", "#0000ff"];
						
			    	if (checkedItem == 2 &&  (itemValue[checkedItemValues[1]].subGroupId=='5' || itemValue[checkedItemValues[1]].subGroupId=='6' ))
			    	{
						colors=["#FFFFFF", "#f0ab2e50"];
						
						const values1 = addMarginToMinMax(min1, max1, 5);
						var calculatedMinValue1 = Math.sign(min1) == -1 ? -Math.abs(min1) - values1 : Math.abs(min1) - values1;
						var calculatedMaxValue1 = Math.sign(max1) == -1 ? -Math.abs(max1) + values1 : Math.abs(max1) + values1;
						
						const values2 = addMarginToMinMax(min2, max2, 5);
						var calculatedMinValue2 = Math.sign(min2) == -1 ? -Math.abs(min2) - values2 : Math.sign(Math.abs(min2) - values2) == -1 ? 0 : Math.abs(min2) - values2;
						var calculatedMaxValue2 = Math.sign(max2) == -1 ? -Math.abs(max2) + values2 : Math.abs(max2) + values2;
						
						yAxis =  [{
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
							min: calculatedMinValue1,
							max: calculatedMaxValue1,
							axisBorder: {
								width: 3,
								show: true,
								color: '#ffffff',
								offsetX: 0,
								offsetY: 0
							},
						},
							{
								opposite: true,
								labels: {
									minWidth: (fontsize == '12px') ? 75 : 120, maxWidth: (fontsize == '12px') ? 75 : 120,
									style: {
										fontSize: fontsize,
									}, formatter: function(val, index) {
										 if (yaxisformat1[1])
						  				  return  val.toFixed(yaxisformat1[0]);
						  				else 
						  				  return  val.toFixed(yaxisformat1[0]) + "%";
									}
								},
								tickAmount: 6,
								min: calculatedMinValue2,
								max: calculatedMaxValue2,
								axisBorder: {
									width: 3,
									show: true,
									color: "#f0ab2e",
									offsetX: 0,
									offsetY: 0
								},
							}]
					}
				  	 let data0 =  response[0].graphResponseDTOLst;
      		 	  processDataAndAddNewEndDateForExtraSpaceInGraph( data0,0.10,false)
					    .then(({ response }) => {
								data0 = response;
					    })
					    .catch(error => {
					        console.error('Error processing data:', error);
					    });	
					 
						    	    
					chart.updateOptions({
						series:[{
						name: response[0].config != null ? (response[0].config.displayDescription == null ? '' : response[0].config.displayDescription) : '',
						type:Period=='d' ? chartType1 : 'column',
						data: data0
					}, {
						name: response[1].config != null ? (response[1].config.displayDescription == null ? '' : response[1].config.displayDescription) : '',
						type:Period=='d'  ? chartType2 : 'column',
						data: response[1].graphResponseDTOLst
					}],
					colors:colors,
						xaxis: {
					labels: {
						rotate: -65,
						rotateAlways: true,
						minHeight: 0,
						style: {
							fontSize: '12px',
						},
						formatter: function(value, timestamp, opts) {
						/*	if(timeRange!= "Daily")
							 	{
								return formattedDate=convertToLocalTime(value);
								}
								else{*/
							const options = { 
									  day: 'numeric', 
									  month: 'short', 
									  year: 'numeric' 
									};
							
							 formattedDate = new Date(value).toLocaleDateString('en-US', options).replace(/ /g, '-').replace(',', '');
							 return formattedDate;
							//}
				           
				          }
					},
					type: 'category',
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
						yaxis: yAxis,
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

		}
	   else 
	   if (functionId!=-1)
		{	
			
		dataParam = { 
	        		"fromdate":fromdate,
	        	    "todate":todate,
	        	    //"period": "d",
	        	    "period":Period,
	        	    "type": type,
	        	    "subGroupId1":itemValue[checkedItemValues[0]].subGroupId,
	        	    "groupId1": itemValue[checkedItemValues[0]].GroupId,
	        	    "isFunctionGraph":true,
					"functionId":functionId+1,
					//"removeEmpty1":itemValue[checkedItemValues[0]].subGroupId==2?"true":false
					 "removeEmpty1":removeEmpty,
					   "interval" :interval
     			   };

			if (checkedItemValues.length > 1)
				title = itemValue[checkedItemValues[0]].title + " vs " + itemValue[checkedItemValues[1]].title +" DAILY"
			else
				title = itemValue[checkedItemValues[0]].title +" DAILY"

			disableOptions(true);
			
			$.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: url,
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
					
					[5,6,10,11,12,13,14,15].includes(functionId+1) ? response[1].graphResponseDTOLst = updateSeriesValue(response[0].graphResponseDTOLst,response[1].graphResponseDTOLst):null;
				
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
											 chartTransparency:chartTransparency,
											 chartShowGrid:showGrid,
											 overideChartype:typeof overide != 'undefined'? overide:null};
											 	
					updateChartByFunctionIdMissingDates(chartConfigSettings, true);	
						
					$('#overlayChart').hide();
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
			});
		} 
		  else if (typeof checkedItemValues[0] === "undefined") 
			$('#alertFiltter-modal').modal('show');
		  else 
				 {
					enableDisableDropDowns(false);
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
						interval:interval
					};
					
					$.ajax({
						type: "POST",
						contentType: "application/json; charset=utf-8",
						url: url,
						data: JSON.stringify(dataParam),
						dataType: 'json',
						timeout: 600000,
						success: function(response) {
						
							newstartdate = new Date();
							startDateF1 = response[0].config.startDate;
							if (startDateF1 != null)
								startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);


							T1 = response[0].config.displayDescription == null ? itemValue[checkedItemValues[0]].title : response[0].config.displayDescription;
							title = T1+" DAILY";
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
							
					 const values = addMarginToMinMax(chartConfigSettings.min, chartConfigSettings.max, 5);
				     var valueMin = values;
				     var valueMax = values; 	
				     var calculatedMinValue = Math.sign(chartConfigSettings.minvalue) == -1 ? -Math.abs(chartConfigSettings.minvalue) - valueMin : Math.abs(chartConfigSettings.minvalue) - valueMin;
				          graphService=typeof graphService!='undefined'?graphService:'';
				        // calculatedMinValue = PositiveGraphs.includes(graphService)?( Math.sign(calculatedMinValue) == -1 ?0:calculatedMinValue): calculatedMinValue;
				    	   calculatedMinValue =  (Math.sign(calculatedMinValue) == -1 && !(Math.sign(chartConfigSettings.min)==-1) )? 0: calculatedMinValue;

		 			processDataAndAddNewEndDateForExtraSpaceInGraph( chartConfigSettings.response[0].graphResponseDTOLst ,0.10,false)
							    .then(({ response }) => {
										 chartConfigSettings.response[0].graphResponseDTOLst = response;
							    })
							    .catch(error => {
							        console.error('Error processing data:', error);
							    });	

							chart.updateOptions({
								
								series:[{
										name: chartConfigSettings.response[0].config != null ? (chartConfigSettings.response[0].config.displayDescription == null ? '' : chartConfigSettings.response[0].config.displayDescription) : '',
										type: chartConfigSettings.chartType1,
										data: chartConfigSettings.response[0].graphResponseDTOLst
									}],
									xaxis: {
									labels: {
										rotate: -70,
										rotateAlways: true,
										minHeight: 30,
										style: {
											fontSize: '12px',
										},
										formatter: function(value, timestamp, opts) {
											//if(timeRange != "Daily")
											// value =	convertToLocalTime(value);
											let a = '';
											let s = '';
											if(timeRange == "1w")
											{ a = [{day: 'numeric'}, {month: 'short'}, {year: '2-digit'}];
											  s =  (isTimestamp(value))?join(value, a, '-'):value;
											  if (typeof s === "string" && s.includes(" ")) {
											        s=   s.split(" ")[0]; // Take only the date part
											    }
											 }
											else
											{ a = [{day: 'numeric'}, {month: 'short'}, {year: '2-digit'}];
											  s =  (isTimestamp(value))?join(value, a, '-'):value;
											}
								            return s;
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
								stroke: {
									colors: chartConfigSettings.chartType1 == "area" ? ["#ffffff"] : [chartConfigSettings.chartColor == '#44546a' ? '#2e75b6' : chartConfigSettings.chartColor],
								},
								markers: {
									colors: chartConfigSettings.chartType1 == "area" ? "#ffffff" : [chartConfigSettings.chartColor == '#44546a' ? '#2e75b6' : chartConfigSettings.chartColor],
									strokeColors: chartConfigSettings.chartType1 == "area" ? "#ffffff" : [chartConfigSettings.chartColor == '#44546a' ? '#2e75b6' : chartConfigSettings.chartColor]
								},
								extra: {
									isDecimal: chartConfigSettings.isdecimal,
									yAxisFormat: chartConfigSettings.yaxisformat,
								},
								yaxis: {
									labels: {
										minWidth: 75, maxWidth: 75,
										style: {
											fontSize: fontsize,
										},
										 formatter: function(val, index) {
											 return formatInBillionsOnly(val);
										/* if (chartConfigSettings.yAxisFormat[1])
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]);
						  					else 
						  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]) + "%";*/
									      }
									},
									tickAmount: 6,
									min: calculatedMinValue,
									max: Math.sign(chartConfigSettings.maxvalue) == -1 ? -Math.abs(chartConfigSettings.maxvalue) + valueMax : Math.abs(chartConfigSettings.maxvalue) + valueMax,
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
											if (chartConfigSettings.getFormatResult0[1])
												return value.toFixed(chartConfigSettings.getFormatResult0[0]);
											else
												return value.toFixed(chartConfigSettings.getFormatResult0[0]) + "%";
										},
										title: {
											formatter: (seriesName) => '',
										},
									},
								}
							});
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
		    
	$("#dateFrom-mainChart").val(fromdate);
	$("#dateTo-mainChart").val(todate);
	
	inGraphNews(getSelectedFields((checkedItemValues.length==0?allItemsSelected(Items):checkedItemValues),itemValue));

}

function convertToLocalTime(dateInput) {
  // If dateInput is undefined, null, or empty, log an error and return an empty string.
  if (!dateInput) {
   return "";
  }
  
  // Check if dateInput is numeric (or can be parsed as a number).
  // Note: isNaN() returns false for numeric values.
  if (!isNaN(dateInput)) {
    // Treat dateInput as a Unix timestamp in milliseconds.
    let timestamp = parseFloat(dateInput);
    let dateObj = new Date(timestamp);
    
    if (isNaN(dateObj.getTime())) {
      console.error("Invalid numeric timestamp:", dateInput);
      return "";
    }
    
    // Format the date object using the local time zone.
    let formatted = dateObj.toLocaleString('en-US', {
      day: '2-digit',
      month: 'short',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).replaceAll(',', '');
    return formatted;
  }
  
  // Otherwise, assume the dateInput is a formatted string like "01-Feb-25 16:50"
  // Split into components. This should produce five parts: day, month, year, hour, and minute.
  let parts = dateInput.split(/[\s-:]+/);
  if (parts.length < 5) {
   // console.error("Invalid date string format:", dateInput);
    return "";
  }
  
  let [day, month, year, hour, minute] = parts;
  
  // Convert the parts to proper numeric types.
  day = parseInt(day, 10);
  // Convert 2-digit year to 4-digit (assumes years like "25" mean "2025")
  year = parseInt("20" + year, 10);
  hour = parseInt(hour, 10);
  minute = parseInt(minute, 10);
  
  // Convert the month abbreviation to a 0-based month index.
  let monthIndex = new Date(`${month} 1`).getMonth();
  
  // Create a Date object in UTC using Date.UTC.
  let utcDate = new Date(Date.UTC(year, monthIndex, day, hour, minute));
  if (isNaN(utcDate.getTime())) {
    console.error("Invalid UTC date constructed from:", dateInput);
    return "";
  }
  
  // Convert the UTC date to local time.
  let localDate = new Date(utcDate.toLocaleString());
  
  // Format the local date as "DD-MMM-YY HH:mm".
  let formatted = localDate.toLocaleString('en-US', {
    day: '2-digit',
    month: 'short',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).replaceAll(',', '');
  
  return formatted;
}

// Function to handle chart updates
function updateChart(graphService) {
  if(timeRange != "Daily")
  	 {
		   	const chartType=typeof($("#chartTypes").find(".active")[0]) !='undefined'?$("#chartTypes").find(".active")[0].id:null;

		if(chartType=="candle")
		{  	const selectedCandleStickIndex =$('#groupOfOptions').jqxButtonGroup('getSelection');

			dataParam = {
				"fromdate": formatDate(monthDate),
				"todate":  formatDate(date)+' 23:59:59',
				"subGroupId1": candleGroupIdSubgroups [selectedCandleStickIndex][1],
				"groupId1" : candleGroupIdSubgroups [selectedCandleStickIndex][0],
			    "interval" :timeRange };	
			
				$.ajax({
						type: "POST",
						contentType: "application/json; charset=utf-8",
						url: "/cryptos/getcandlegraphdatainterval",
						data: JSON.stringify(dataParam),
						dataType: 'json',
						timeout: 600000,
						success: function(response) {	
								response[0].graphResponseDTOLst.forEach(item => {
									item.y = JSON.parse(item.y).map(yValue => parseFloat(yValue));
								});
						  processDataAndAddNewEndDateForExtraSpaceInGraph(response[0].graphResponseDTOLst ,0.05,true)
						    .then(({ response }) => {
									response[0].graphResponseDTOLst = response;
						    })
						    .catch(error => {
						        console.error('Error processing data:', error);
						    });	
							  chart.updateSeries([{
								    data: response[0].graphResponseDTOLst
								  }]);
							},
				error: function(e) {
		
					console.log("ERROR : ", e);
		
				}

	});
   }
	else
	{      
		var checkedItemValues = [];

		for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					checkedItemValues.push(checkedItemid[i]);
			}
			
			 if (checkedItem == 2) {
					  dataParam = { 
				        		"fromdate": formatDate(monthDate),
				        	    "todate": formatDate(date)+' 23:59:59',
				        	    "period":"d",
				        	    "type": '0',
				        	    "subGroupId1":itemValue[checkedItemValues[0]].subGroupId,
				        	    "groupId1": itemValue[checkedItemValues[0]].GroupId,
				        	    "subGroupId2":itemValue[checkedItemValues[1]].subGroupId,
				        	    "groupId2": itemValue[checkedItemValues[1]].GroupId,
					        	  //  "removeEmpty1":itemValue[checkedItemValues[0]].subGroupId==2?"true":false,
					        	   // "removeEmpty2":itemValue[checkedItemValues[1]].subGroupId==2?"true":false
					        	 "removeEmpty1":true,
					        	 "removeEmpty2":true,
					        	 "interval" :timeRange
			     			   };
			     			   
		    $.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "/"+graphService+"/getgraphdatainterval",
				data: JSON.stringify(dataParam),
				dataType: 'json',
				timeout: 600000,
				success: function(response) {	
								
							  chart.updateSeries([{
								    data: response[0].graphResponseDTOLst
								  },
								  {
								    data: response[1].graphResponseDTOLst
								  }
								  ]);
											},
								error: function(e) {
						
									console.log("ERROR : ", e);
						
								}
				
					});
     			   }
     			   else{
						dataParam = { 
				        		"fromdate": formatDate(monthDate),
				        	    "todate": formatDate(date)+' 23:59:59',
				        	    "period":"d",
				        	    "type": '0',
				        	    "subGroupId1":itemValue[checkedItemValues[0]].subGroupId,
				        	    "groupId1": itemValue[checkedItemValues[0]].GroupId,
					        	 "removeEmpty1":true,
					        	 "interval" :timeRange
			     			   };
			 $.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "/"+graphService+"/getgraphdatainterval",
				data: JSON.stringify(dataParam),
				dataType: 'json',
				timeout: 600000,
				success: function(response) {	
								
							  chart.updateSeries([{
								    data: response[0].graphResponseDTOLst
								  }
								  ]);
											},
								error: function(e) {
						
									console.log("ERROR : ", e);
						
								}
				
					});
					}
	}
	   }
    // Add your chart update logic here
}
 
 function currentUsJobsFunction(groupId){
	mode = "usJobsCurrent";
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

	//chart = new ApexCharts(document.querySelector("#mainChart"), Period=='d' ? options_missingDates : optionsWeekly);
	chart = new ApexCharts(document.querySelector("#mainChart"), Period=='d' ? options : ((functionId!=-1)?optionsWeekly:optionsWeeklyy));

	chart.render();
	
	dataParam = { 
	        		"fromdate":fromdate,
	        	    "todate":todate,
	        	    "period":"d",
	        	    "type": type,
	        	    "subGroupId1":1,
	        	    "groupId1": groupId,
     			   };
     			   
           enableDisableDropDowns(true);

			disableOptions(true);
			$.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "/"+graphService+"/getgraphdatacurrent",
				data: JSON.stringify(dataParam),
				dataType: 'json',
				timeout: 600000,
				success: function(response) {
					startDateF1 = response[0].config.startDate;
					
					if (startDateF1 != null)
						startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);
					var dates = [];

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
					
					//chartDbFontSize = response[0].config.chartSize;
					chartDbFontSize = '14px';
					fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], chartDbFontSize);
					markerSize = checkActiveChartMarker($("#chartMarker").find(".active")[0], response[0].config.chartshowMarkes);
					showGrid = checkActiveChartGrid($("#gridOptions").find(".active")[0], response[0].config.chartShowgrid)
					showLegend	= checkActiveChartLegend($("#gridLegend").find(".active")[0], showLegend);

					chart.updateOptions(getChartDailyOption(title+getTitlePeriodAndType(), showGrid, fontsize, markerSize));

					var dbchartType1 = response[0].config.chartType;
					chartType1 = (getChartType(dbchartType1)[0] != 'area') ? getChartType(dbchartType1)[0] : 'line';

					let yValues1 = response[0].graphResponseDTOLst.map(function(item) {
					    return item.y;
					}).filter(function(y) {
					    return y !== null; // Filter out null values
					});
					
					let min1 = Math.min.apply(null, yValues1);
					
						max1 = Math.max.apply(null, response[0].graphResponseDTOLst.map(function(item) {
							return item.y;
						}));
					

					min = min1;
					max = max1;
					
					minvalue = min;
					maxvalue = max;
				
					 let selectedValue=(Math.abs(min)>=Math.abs(max)?Math.abs(min):Math.abs(max));
					 const values =  addMarginToMinMax(min, max, 5);
					 
					 
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
					        data.y = y ;
					    }
					}
					
					let isMaxItems1 =  response[0].graphResponseDTOLst.filter(function(item) {
					    return item.ismax === "1";
					});
				
					value1=isMaxItems1[0].y;
					if (getFormatResult0[1])
							value1=	 value1.toFixed(getFormatResult0[0]);
							else
							value1=	 value1.toFixed(getFormatResult0[0]) + "%";
										
						
					let maxcalculated=Math.sign(maxvalue) == -1 ? -Math.abs(maxvalue) + selectedValue : Math.abs(maxvalue) + selectedValue;			
					
					$('#legendfalse').addClass("active");
					$('#legendtrue').removeClass("active");
					chart.w.config.title.text=title;
					
					processDataAndAddNewEndMonthForExtraSpace(response[0] ,0.10,true)
					    .then(({ response }) => {
								response[0] = response;
					    })
					    .catch(error => {
					        console.error('Error processing data:', error);
					    });	
					    
					  const options = { month: 'short', year: '2-digit' };
     				var fomartedXAnnotation=new Date(isMaxItems1[0].x).toLocaleDateString('en-US', options).replace(/ /g, '-').replace(',', '');    
					var offsetYValue1=25;
					
					graphTitle=T1;
					chart.updateOptions({
						series:[{
						name: response[0].config != null ? (response[0].config.displayDescription == null ? '' : response[0].config.displayDescription) : '',
						type:'column',
						data: response[0].graphResponseDTOLst
					}],
					title: {
					text: graphTitle,
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
						
					  formatter: function(value, timestamp, opts) {
                            const options = { month: 'short', year: '2-digit' };
                            return new Date(value).toLocaleDateString('en-US', options).replace(/ /g, '-').replace(',', '');
                        }
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
						colors: ["#ffc000"],
						stroke:{width: 0},
						markers: {
							colors: [ "#0000ff", "#ff0000", "#00ff00", "#ffff00", "#ffa500"],
							strokeColors: [ "#0000ff", "#ff0000", "#00ff00", "#ffff00", "#ffa500"],
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
										 val = val ;
										 if (yaxisformat0[1])
						  				  return  val.toFixed(yaxisformat0[0]);
						  				else 
						  				  return  val.toFixed(yaxisformat0[0]) + "%";
									      }
							},
							tickAmount: 6,
						
							min:calculatedMin,
							max:calculatedMax,
							
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
									 value = value ;
									if (seriesIndex == 0) {
										if (getFormatResult0[1])
											return value.toFixed(getFormatResult0[0]);
										else
											return value.toFixed(getFormatResult0[0]) + "%";
									} 
								},
								title: {
									formatter: (seriesName) => '',
								},
							},
						},
						annotations: {
					        
					         points: [
					      {
					         x: fomartedXAnnotation,
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
					          offsetX: 70,
					          style: {
					            color: "#FF00FF",
					            background:  "#00000000",
					          },
					
					          text: toTitleCase(isMaxItems1[0].x.split('-')[1]+' '+ toTitleCase(isMaxItems1[0].factor.toString()+' '+value1))
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
				    
				    graphTitle=T1;
				   // graphTitle=graphTitle.toUpperCase().replace(/\bFINAL\b/g, '').replace(/SERVICES/g, '<span style="color:#ffc000">Services</span>').replace(/MANUFACTURING/g, 'Manuf').replace(/AND/g, 'and')

					$("#mainChart-title").append('<div id="title-image" style="position: absolute;top: 20px;left: 350px;height: 60px;" class="title-style">'+graphTitle+'</div>')
				
							   
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
				
			});

		
		   // (saveHistory)?saveGraphHistory(graphName,checkedItemid,Period,type):null;
    
	$("#dateFrom-mainChart").val(formatedDate(fromdate));
	$("#dateTo-mainChart").val(formatedDate(todate));
	
	// inGraphNews(getSelectedFields((checkedItemValues.length==0?allItemsSelected(Items):checkedItemValues),itemValue));

		 
 }
function formatInBillionsOnly(value) {
	if (value >= 1e9) {
		const inBillions = value / 1e9;

		const formatted = formatNumberWithCommas(inBillions); // Format with commas

		return `${formatted}B`;
	} else {
		return formatNumberWithCommas(value);
	}

}
function formatNumberWithCommas(num) {
	return num.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}
function alignMergeDataSets(data1, data2) {
    let parseDate = (dateStr) => {
        let [day, month, year] = dateStr.split('-');
        let months = {
            "Jan": 0, "Feb": 1, "Mar": 2, "Apr": 3, "May": 4, "Jun": 5,
            "Jul": 6, "Aug": 7, "Sep": 8, "Oct": 9, "Nov": 10, "Dec": 11
        };
        return new Date(parseInt(year, 10), months[month], parseInt(day, 10));
    };

    let allXValues = new Set([...data1.map(d => d.x), ...data2.map(d => d.x)]); // Collect all unique x values

    let data1Map = new Map(data1.map(item => [item.x, item.y]));
    let data2Map = new Map(data2.map(item => [item.x, item.y]));

    let sortedXValues = [...allXValues].sort((a, b) => parseDate(a) - parseDate(b)); // Sort using actual dates

    let alignedData1 = sortedXValues.map(x => ({
        x: x,
        y: data1Map.has(x) ? data1Map.get(x) : null
    }));

    let alignedData2 = sortedXValues.map(x => ({
        x: x,
        y: data2Map.has(x) ? data2Map.get(x) : null
    }));

    // Remove entries where BOTH are null
    let filteredData1 = [];
    let filteredData2 = [];

    for (let i = 0; i < alignedData1.length; i++) {
        let item1 = alignedData1[i];
        let item2 = alignedData2[i];

        if (!(item1.y === null && item2.y === null)) {  // Keep only if at least one is NOT null
            filteredData1.push(item1);
            filteredData2.push(item2);
        }
    }

    return { data1: filteredData1, data2: filteredData2 };
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
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
function formatedDate(inputDate) {
    const [year, month] = inputDate.split('-');
    const monthAbbreviation = new Date(inputDate).toLocaleString('en-US', { month: 'short' }).toUpperCase();
	const yearLastTwoDigits = year.slice(-2);
	
    return monthAbbreviation + '-' + yearLastTwoDigits;
}

function toggleGraphData(time) {

    if(time==1)
		{ 
		timeRange = "Daily";
		
		monthDate = new Date();
		monthDate.setMonth(monthDate.getMonth() - 4);
		monthDate.setHours(0, 0, 0, 0);
		
		 $('#DailyData-btn').addClass('active');
         $('#4HoursData-btn').removeClass('active');
         $('#weeklyData-btn').removeClass('active');
		 drawGraph();
		 $('#functionOptionsMenu').addClass("d-flex");
		 $('#functionOptionsMenu').removeClass("d-none");
		 $('#euroTime').addClass("d-flex");
         $('#euroTime').removeClass("d-none");
		}
		else if(time==2)
		{timeRange = "4h";
		functionId=-1;	
		 monthDate = new Date();
		 monthDate.setDate(monthDate.getDate() - 21);
	 	 // monthDate.setFullYear((new Date).getFullYear() - 3);
	 	 monthDate.setHours(0, 0, 0, 0);
		
		  $('#4HoursData-btn').addClass('active');
          $('#DailyData-btn').removeClass('active');
          $('#weeklyData-btn').removeClass('active');
          
          $('#functionOptionsMenu').removeClass("d-flex");
          $('#functionOptionsMenu').addClass("d-none");
          $('#euroTime').addClass("d-none");
          $('#euroTime').removeClass("d-flex");
		 drawGraph();
		}else 
		{
		functionId=-1;	
		timeRange = "1w";
		
		 monthDate = new Date();
		 monthDate.setMonth(monthDate.getMonth() - 6);
	 	 // monthDate.setFullYear((new Date).getFullYear() - 3);
	 	 monthDate.setHours(0, 0, 0, 0);
		
		  $('#4HoursData-btn').removeClass('active');
          $('#DailyData-btn').removeClass('active');
          $('#weeklyData-btn').addClass('active');
          
          $('#functionOptionsMenu').removeClass("d-flex");
          $('#functionOptionsMenu').addClass("d-none");
          $('#euroTime').addClass("d-none");
          $('#euroTime').removeClass("d-flex");
		 drawGraph();
		}
}