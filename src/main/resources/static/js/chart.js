var checkedItem = 0;
var checkedItemid = [];
var checkedItemidRight = [];
var checkedItemidLeft = [];
var monthDate = new Date();
monthDate.setMonth(monthDate.getMonth() - 6);
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
function getChartDailyOptionMissingDates(title,showgrid,fontSize,markerSize)
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
        		 
				var valueMin1 = getMarginLenght(min1);  
				var valueMin2 = getMarginLenght(min2);  
				var valueMax1 = getMarginLenght(max1);  
				var valueMax2 = getMarginLenght(max2);  
				//console.log(fontsize,min1,max1,min2,max2,valueMin1,valueMin2,valueMax1,valueMax2)
		   	    var selectedValue = Math.abs(min2)>=Math.abs(max2)?Math.abs(min2):Math.abs(max2);
                 
                 
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

				var valueMin = getMarginLenght(minvalue); 
				var valueMax = getMarginLenght(maxvalue); 
				
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
 				    	    min:Math.sign(minvalue)==-1 ? -Math.abs(minvalue)-valueMin : Math.abs(minvalue)-valueMin,
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
function getMarginLenght(value) { 
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
    return 1000;
}	
function getMarginLenghtVolume(value) { 
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
}
 function enableDisableDropDowns(value){
	 
	  ($('#dropDownType').length)?$("#dropDownType").jqxDropDownList({ disabled: value }):null; 
	  ($('#dropDownType').length)?$("#dropDownType").jqxDropDownList({selectedIndex: 0}):null;  
	  ($('#dropDownFunctions').length)?$("#dropDownFunctions").jqxDropDownList({ disabled: value }):null;  
	  ($('#dropDownFunctions').length)?$("#dropDownFunctions").jqxDropDownList({selectedIndex: -1}):null;  
	  ($('#groupOfPeriod').length)?$('#groupOfPeriod').jqxButtonGroup({disabled: value }):null;  
	  ($('#groupOfPeriod').length)?$('#groupOfPeriod').jqxButtonGroup('setSelection', 0):null;  
 }
 function updateChartByFunctionId(chartConfigSettings){
			 var valueMin = getMarginLenght(chartConfigSettings.min); 
			 var valueMax = getMarginLenght(chartConfigSettings.max); 
			 var valueMin1 = getMarginLenght(chartConfigSettings.min1); 
			 var valueMax1 = getMarginLenght(chartConfigSettings.max1); 
				//		console.log(chartConfigSettings.fontSize,chartConfigSettings.min1,chartConfigSettings.max1,chartConfigSettings.min2,chartConfigSettings.max2,valueMin,valueMin1,valueMax,valueMax1)
			     if(chartConfigSettings.functionId==1 || chartConfigSettings.functionId==2)
			     { 
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
						colors: chartConfigSettings.functionId==1?[chartColorOpacity(chartConfigSettings.chartColor), "#FF0000"]:[chartColorOpacity(chartConfigSettings.chartColor), "#ffa4c5"],
  	    	    	    markers: {
  	    	    		   colors: chartConfigSettings.functionId==1?["#FFFFFF", "#FF0000"]:["#FFFFFF", "#ffa4c5"],
  	    	    		   strokeColors: chartConfigSettings.functionId==1?["#FFFFFF", "#FF0000"]:["#FFFFFF", "#ffa4c5"],
  	    	    		   size: 0.01,
  	    	    		 },
  	    	    		  stroke: {
						      	 colors: chartConfigSettings.functionId==1?["#FFFFFF", "#FF0000"]:["#FFFFFF", "#ffa4c5"],
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
 function updateChartByFunctionIdMissingDates(chartConfigSettings){
			 var valueMin = getMarginLenght(chartConfigSettings.min); 
			 var valueMax = getMarginLenght(chartConfigSettings.max); 
			 var valueMin1 = getMarginLenght(chartConfigSettings.min1); 
			 var valueMax1 = getMarginLenght(chartConfigSettings.max1); 
	
	 selectedChartColor='#'+$("#chartColor").find(".active")[0].id;
		
	chartConfigSettings.chartType =
	  chartConfigSettings.Period == 'd'
	    ? chartConfigSettings.overideChartype != null
	      ? 
	        typeof SelectedchartType != 'undefined'
	        ? SelectedchartType
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

				  if(chartConfigSettings.functionId==1 || chartConfigSettings.functionId==2)
			     {
					  chart.updateOptions({
						 series:[{
								name: chartConfigSettings.response[0].config != null ? (chartConfigSettings.response[0].config.displayDescription == null ? '' : chartConfigSettings.response[0].config.displayDescription) : '',
								type: chartConfigSettings.Period=='d' ? chartConfigSettings.overideChartype != null ? (typeof SelectedchartType != 'undefined'? SelectedchartType : chartType) : 'area' : 'column',
								data: chartConfigSettings.response[0].graphResponseDTOLst
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
											
											let a = [{day: 'numeric'}, {month: 'short'}, {year: '2-digit'}];
											let s = (isTimestamp(value))?join(value, a, '-'):value;
											
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
  	    	    	  extra:{
							isDecimal: chartConfigSettings.isDecimal,
							yAxisFormat:chartConfigSettings.yAxisFormat,
						},
						 colors:chartConfigSettings.functionId==1?[chartConfigSettings.Period=='d' ?(chartConfigSettings.Period=='d' ?chartConfigSettings.overideChartype != null ? (typeof SelectedchartType != 'undefined'? SelectedchartType : chartType) : 'area' : 'column')=='column'?chartConfigSettings.chartColor:chartColorOpacity(chartConfigSettings.chartColor):(chartConfigSettings.chartColor == '#44546a' ? '#2e75b6' : chartConfigSettings.chartColor), "#FF0000"]:[chartConfigSettings.Period=='d' ?(chartConfigSettings.Period=='d' ?chartConfigSettings.overideChartype != null ? (typeof SelectedchartType != 'undefined'? SelectedchartType : chartType) : 'area' : 'column')=='column'?chartConfigSettings.chartColor:chartColorOpacity(chartConfigSettings.chartColor):(chartConfigSettings.chartColor == '#44546a' ? '#2e75b6' : chartConfigSettings.chartColor), "#ffa4c5"],
  	    	    		 markers: {
  	    	    		   colors: chartConfigSettings.functionId==1?["#FFFFFF", "#FF0000"]:["#FFFFFF", "#ffa4c5"],
  	    	    		   strokeColors: chartConfigSettings.functionId==1?["#FFFFFF", "#FF0000"]:["#FFFFFF", "#ffa4c5"],
  	    	    		 },
  	    	    		 stroke: chartConfigSettings.Period=='d' ?{
						      	 colors: chartConfigSettings.functionId==1?[(chartConfigSettings.Period=='d' ?chartConfigSettings.overideChartype != null ? (typeof SelectedchartType != 'undefined'? SelectedchartType : chartType) : 'area' : 'column')=='column'?chartConfigSettings.chartColor:"#FFFFFF", "#FF0000"]:[(chartConfigSettings.Period=='d' ?chartConfigSettings.overideChartype != null ? (typeof SelectedchartType != 'undefined'? SelectedchartType : chartType) : 'area' : 'column')=='column'?chartConfigSettings.chartColor:"#FFFFFF", "#ffa4c5"],
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
											let s = (isTimestamp(value))?join(value, a, '-'):value;
											
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
					 chart.updateOptions({
						 series:[{
								name: chartConfigSettings.response[0].config != null ? (chartConfigSettings.response[0].config.displayDescription == null ? '' : chartConfigSettings.response[0].config.displayDescription) : '',
								type: chartConfigSettings.Period=='d' ? chartConfigSettings.overideChartype != null ? (typeof SelectedchartType != 'undefined'? SelectedchartType : chartType) : 'area' : 'column',
								data: chartConfigSettings.response[0].graphResponseDTOLst
							}, {
								name: chartConfigSettings.response[1].config != null ? (chartConfigSettings.response[1].config.displayDescription == null ? '' : chartConfigSettings.response[1].config.displayDescription) : '',
								type: 'column',
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
											
											let a = [{day: 'numeric'}, {month: 'short'}, {year: '2-digit'}];
											let s = (isTimestamp(value))?join(value, a, '-'):value;
											
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
  	    	    	  extra:{
							isDecimal: chartConfigSettings.isDecimal,
							yAxisFormat:chartConfigSettings.yAxisFormat,
						},
						 
  	    	    		  colors:[chartConfigSettings.Period=='d' ?(chartConfigSettings.Period=='d' ?chartConfigSettings.overideChartype != null ? (typeof SelectedchartType != 'undefined'? SelectedchartType : chartType) : 'area' : 'column')=='column'?chartConfigSettings.chartColor:chartColorOpacity(chartConfigSettings.chartColor):(chartConfigSettings.chartColor == '#44546a' ? '#2e75b6' : chartConfigSettings.chartColor), "#ff000059"],
  	    	    		 markers: {
						   colors: ["#FFFFFF", "#ff000059"],
  	    	    		   strokeColors:["#FFFFFF", "#ff000059"],
  	    	    		 },
  	    	    		 stroke: chartConfigSettings.Period=='d' ?{
						      	 colors: [(chartConfigSettings.Period=='d' ?chartConfigSettings.overideChartype != null ? (typeof SelectedchartType != 'undefined'? SelectedchartType : chartType) : 'area' : 'column')=='column'?chartConfigSettings.chartColor:"#FFFFFF", "#ff000059"],
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
										  if (chartConfigSettings.yAxisFormat1[1])
								  						  return  val.toFixed(chartConfigSettings.yAxisFormat1[0]);
								  						else 
								  							 return  val.toFixed(chartConfigSettings.yAxisFormat1[0]) + "%";
								  							
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
							}
    	    		}); 
    	    		
				}
}

function updateChartSelectedItem(chartConfigSettings){
			
			     if(chartConfigSettings.checkedItem ==1 )
			     {
					
					 var valueMin = getMarginLenght(chartConfigSettings.min); 
			 		 var valueMax = getMarginLenght(chartConfigSettings.max);  				 	
							
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
						 var valueMin1 = getMarginLenght(chartConfigSettings.min1); 
						 var valueMax1 = getMarginLenght(chartConfigSettings.max1); 
						 var valueMin2 = getMarginLenght(chartConfigSettings.min2);
						 var valueMax2 = getMarginLenght(chartConfigSettings.max2); 
						 
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
     				       yaxis: [{
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
					     				    	  min:Math.sign(chartConfigSettings.min2)==-1 ? -Math.abs(chartConfigSettings.min2)-valueMin2 : Math.abs(chartConfigSettings.min2)-valueMin2,
					     				    	  max:Math.sign(chartConfigSettings.max2)==-1 ? -Math.abs(chartConfigSettings.max2)+valueMax2 : Math.abs(chartConfigSettings.max2)+valueMax2,
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
					
					 var valueMin = getMarginLenght(chartConfigSettings.min); 
			 		 var valueMax = getMarginLenght(chartConfigSettings.max);  				 	
							
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
						 var valueMin1 = getMarginLenght(chartConfigSettings.min1); 
						 var valueMax1 = getMarginLenght(chartConfigSettings.max1); 
						 var valueMin2 = getMarginLenght(chartConfigSettings.min2);
						 var valueMax2 = getMarginLenght(chartConfigSettings.max2); 
						 
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
     				       yaxis: [{
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
					     				    	  min:Math.sign(chartConfigSettings.min1)==-1 ? -Math.abs(chartConfigSettings.min1)-valueMin1 : Math.abs(chartConfigSettings.min1)-valueMin1,
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
					     				    	  min:Math.sign(chartConfigSettings.min2)==-1 ? -Math.abs(chartConfigSettings.min2)-valueMin2 : Math.abs(chartConfigSettings.min2)-valueMin2,
					     				    	  max:Math.sign(chartConfigSettings.max2)==-1 ? -Math.abs(chartConfigSettings.max2)+valueMax2 : Math.abs(chartConfigSettings.max2)+valueMax2,
					     				    			  axisBorder: {
					     					                  width: 3,
					     					                  show: true,
					     					                  color: typeof chartConfigSettings.overideColors != 'undefined'? chartConfigSettings.overideColors[1] :"#FF0000",
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
					
					 var valueMin = getMarginLenghtVolume(chartConfigSettings.min); 
			 		 var valueMax = getMarginLenghtVolume(chartConfigSettings.max);  				 	
							
							chart.updateOptions({
								series:[{
										name: chartConfigSettings.response[0].config != null ? (chartConfigSettings.response[0].config.displayDescription == null ? '' : chartConfigSettings.response[0].config.displayDescription) : '',
										type: 'column',
										data: chartConfigSettings.response[0].graphResponseDTOLst
									}],
									colors: [function({ value, dataPointIndex, seriesIndex, w }) {
										
									  if (w.config.series[seriesIndex].data[dataPointIndex].isComplete=='0') {
									      return '#ff0000';
									  }
									  else 
									  return  chartConfigSettings.chartColor=='#44546a'?'#2e75b6':chartConfigSettings.chartColor;
									}],
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
function initializeFunctions(){
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
	    
		   functionId=index;
		   drawGraph();
	 } 
	});
	
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
        enableDisableDropDowns(true);
    } else {
        for (i = 0; i < allitems.length; i++) {
            $(allitems[i]).jqxCheckBox({ disabled: false });
        }
        enableDisableDropDowns(false);
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

		},
		error: function(e) {

			console.log("ERROR : ", e);

		}
	});

}
function saveGraphHistory(graphName,checkedItemValues,Period,type){
		
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
}
function uncheckAll() {
	     for(var i=0; i<allitems.length; i++)
		   {$(allitems[i]).jqxCheckBox({checked:false});
	       } 
}
function graphfont(fontSize){
	if(typeof graphName !='undefined' && (graphName=="marketShareVolume"))
		{
			chartConfiguration={
					 fontSize:fontSize,
					 showLegend:$("#gridLegend").find(".active")[0].id,
				}
			updatePieChartOptions(chartConfiguration);
			}
	else
	if(typeof graphName !='undefined' && (graphName=="wmqyVolume" || graphName=="RaceChartVolume"))
		updateGraphFontVolume(fontSize,minvalue,maxvalue);
	else
	if (typeof min1 != 'undefined' && functionId>=2)
			 updateGraphFont2YAxis(fontSize,min1,max1,min2,max2);
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
											 	
					updateChartByFunctionIdMissingDates(chartConfigSettings);	
						
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
					var valueMin = getMarginLenght(min); 
			 		var valueMax = getMarginLenght(max);  				 	
					
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
			    var valueMin = getMarginLenght(min); 
			 	var valueMax = getMarginLenght(max);  				 	
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
											 	
					updateChartByFunctionIdMissingDates(chartConfigSettings);	
						
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
					 var valueMin1 = getMarginLenght(min); 
					 var valueMax1 = getMarginLenght(max); 
					
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
						var valueMin = getMarginLenght(min); 
			 			var valueMax = getMarginLenght(max);  				 	
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
							var valueMin = getMarginLenght(min); 
			 			    var valueMax = getMarginLenght(max);  				 	
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
		"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
	];
	if (condition == "yearBackward") {
		expectedmonthdate = new Date(monthDate.getMonth() + "-" + monthDate.getDay() + "-" + (monthDate.getFullYear() - 1));
		if (startDateF1 != null) {
			if (expectedmonthdate <= startDateF1) {
				$("#button-yearBackward").prop('disabled', true);
				$('#startdatetext').empty();
				$('#startdatetext').append("No data available before " + monthNames[startDateF1.getMonth()] + " " + startDateF1.getFullYear())
				$('#alertStartDate-modal').modal('show');
				return;
			}
		}
		else
			if (startDateF2 != null) {
				if (expectedmonthdate <= startDateF2) {
					$("#button-yearBackward").prop('disabled', true);
					$('#startdatetext').empty();
					$('#startdatetext').append("No data available before " + monthNames[startDateF2.getMonth()] + " " + startDateF2.getFullYear())
					$('#alertStartDate-modal').modal('show');
					return;
				}
			}
			else
				if (typeof (startDateF3) != "undefined")
					if (startDateF3 != null) {
						if (expectedmonthdate <= startDateF3) {
							$("#button-yearBackward").prop('disabled', true);
							$('#startdatetext').empty();
							$('#startdatetext').append("No data available before " + monthNames[startDateF3.getMonth()] + " " + startDateF3.getFullYear())
							$('#alertStartDate-modal').modal('show');
							return;
						}
					}
					else
						if (startDateF4 != null) {
							if (expectedmonthdate <= startDateF4) {
								$("#button-yearBackward").prop('disabled', true);
								$('#startdatetext').empty();
								$('#startdatetext').append("No data available before " + monthNames[startDateF4.getMonth()] + " " + startDateF4.getFullYear())
								$('#alertStartDate-modal').modal('show');
								return;
							}
						} else
							if (startDateF5 != null) {
								if (expectedmonthdate <= startDateF5) {
									$("#button-yearBackward").prop('disabled', true);
									$('#startdatetext').empty();
									$('#startdatetext').append("No data available before " + monthNames[startDateF5.getMonth()] + " " + startDateF5.getFullYear())
									$('#alertStartDate-modal').modal('show');
									return;
								}
							}
							else
								if (startDateF6 != null) {
									if (expectedmonthdate <= startDateF6) {
										$("#button-yearBackward").prop('disabled', true);
										$('#startdatetext').empty();
										$('#startdatetext').append("No data available before " + monthNames[startDateF6.getMonth()] + " " + startDateF6.getFullYear())
										$('#alertStartDate-modal').modal('show');
										return;
									}
								}
		monthDate.setFullYear(monthDate.getFullYear() - 1);
		if(mode=="merge") 
				  drawGraph();
					else
						splitGraph();
	} else
		if (condition == "monthBackward") {
			expectedmonthdate = new Date(monthDate.getMonth() + "-" + monthDate.getDay() + "-" + monthDate.getFullYear());
			if (startDateF1 != null) {
				if (expectedmonthdate <= startDateF1) {
					$("#button-monthBackward").prop('disabled', true);
					$("#button-yearBackward").prop('disabled', true);
					$('#startdatetext').empty();
					$('#startdatetext').append("No data available before " + monthNames[startDateF1.getMonth()] + " " + startDateF1.getFullYear())
					$('#alertStartDate-modal').modal('show');
					return;
				}
			}
			else
				if (startDateF2 != null) {
					if (expectedmonthdate <= startDateF2) {
						$("#button-monthBackward").prop('disabled', true);
						$("#button-yearBackward").prop('disabled', true);
						$('#startdatetext').empty();
						$('#startdatetext').append("No data available before " + monthNames[startDateF2.getMonth()] + " " + startDateF2.getFullYear())
						$('#alertStartDate-modal').modal('show');
						return;
					}
				}
				else
					if (startDateF3 != null) {
						if (expectedmonthdate <= startDateF3) {
							$("#button-monthBackward").prop('disabled', true);
							$("#button-yearBackward").prop('disabled', true);
							$('#startdatetext').empty();
							$('#startdatetext').append("No data available before " + monthNames[startDateF3.getMonth()] + " " + startDateF3.getFullYear())
							$('#alertStartDate-modal').modal('show');
							return;
						}
					}
					else
						if (startDateF4 != null) {
							if (expectedmonthdate <= startDateF4) {
								$("#button-monthBackward").prop('disabled', true);
								$("#button-yearBackward").prop('disabled', true);
								$('#startdatetext').empty();
								$('#startdatetext').append("No data available before " + monthNames[startDateF4.getMonth()] + " " + startDateF4.getFullYear())
								$('#alertStartDate-modal').modal('show');
								return;
							}
						} else
							if (startDateF5 != null) {
								if (expectedmonthdate <= startDateF5) {
									$("#button-monthBackward").prop('disabled', true);
									$("#button-yearBackward").prop('disabled', true);
									$('#startdatetext').empty();
									$('#startdatetext').append("No data available before " + monthNames[startDateF5.getMonth()] + " " + startDateF5.getFullYear())
									$('#alertStartDate-modal').modal('show');
									return;
								}
							}
							else
								if (startDateF6 != null) {
									if (expectedmonthdate <= startDateF6) {
										$("#button-monthBackward").prop('disabled', true);
										$("#button-yearBackward").prop('disabled', true);
										$('#startdatetext').empty();
										$('#startdatetext').append("No data available before " + monthNames[startDateF6.getMonth()] + " " + startDateF6.getFullYear())
										$('#alertStartDate-modal').modal('show');
										return;
									}
								}
			monthDate.setMonth(monthDate.getMonth() - 1);
			if(mode=="merge") 
				  drawGraph();
					else
						splitGraph();
		}
		else
			if (condition == "monthForward") {
				$("#button-monthBackward").prop('disabled', false);
				monthDate.setMonth(monthDate.getMonth() + 1);
				if(mode=="merge") 
				  drawGraph();
					else
						splitGraph();
			}
			else
				if (condition == "yearForward") {
					$("#button-yearBackward").prop('disabled', false);
					monthDate.setFullYear(monthDate.getFullYear() + 1);
					if(mode=="merge") 
				  drawGraph();
					else
						splitGraph();
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
				        hasMissingDates = (["10","15", "16"].includes(itemValue[checkedItemValues[0]].GroupId)
				        					||["10","15", "16"].includes(itemValue[checkedItemValues[1]].GroupId)
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
					     	  			         margin: 10,
					    	    				        style: {
					    	    				          fontWeight:  'bold',
					    	    				          color:  '#263238'
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
   	  			         margin: 10,
  	    				        style: {
  	    				          fontWeight:  'bold',
  	    				          color:  '#263238'
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
 				       hasMissingDates = (["10","15", "16"].includes(itemValue[checkedItemValues[0]].GroupId))?"true":false;
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
	      	    	   	var valueMin = getMarginLenght(min); 
			 	    	var valueMax = getMarginLenght(max);  				 	
				
	      	    	     notDecimal=yaxisformat[1];
				         nbrOfDigits=yaxisformat[0];
	      	    	     chart1.updateOptions({
							   series:[{
							          name: itemValue[checkedItemValues[0]].title,
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
	   	  			         margin: 10,
	  	    				        style: {
	  	    				          fontWeight:  'bold',
	  	    				          color:  '#263238'
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
	     					      
	     			    hasMissingDates1 = (["10","15", "16"].includes(itemValue[checkedItemValues[1]].GroupId))?"true":false;

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
	      	    	         	     var valueMin = getMarginLenght(min); 
			 		                 var valueMax = getMarginLenght(max);  				 	
				   					 var yaxisformat = getFormat(response[0].config.yAxisFormat);
					
				      	    	     notDecimal=yaxisformat[1];
								     nbrOfDigits=yaxisformat[0];
				      	    	    	chart2.updateOptions({
											series:  [{
								          name: itemValue[checkedItemValues[1]].title,
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
					     	  			         margin: 10,
					    	    				        style: {
					    	    				          fontWeight:  'bold',
					    	    				          color:  '#263238'
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
				  var valueMin = getMarginLenghtVolume(minvalue); 
			 	  var valueMax = getMarginLenghtVolume(maxvalue);  	
				
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