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

 function getlength(number) {
				    return number.toString().split(".")[0].length;
				} 
function getMarginLenght(value){
	return getlength(value)>=3?10:(value<=0.1)?0.01:0.05; 
}			
 function enableDisableDropDowns(value){
	 
	  $("#dropDownType").jqxDropDownList({ disabled: value }); 
	  $("#dropDownType").jqxDropDownList({selectedIndex: 0});  
	  $("#dropDownFunctions").jqxDropDownList({ disabled: value }); 
	  $("#dropDownFunctions").jqxDropDownList({selectedIndex: -1}); 
	  $('#groupOfPeriod').jqxButtonGroup({disabled: value });
	  $('#groupOfPeriod').jqxButtonGroup('setSelection', 0);
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
						  						  return  value.toFixed(chartConfigSettings.getFormatResult1[0]);
						  						else 
						  							 return  value.toFixed(chartConfigSettings.getFormatResult1[0]) + "%";
						  					 }
								    },
								    title: {
							              formatter: (seriesName) => '',
							          },
					      },
						}
    	    		}); 
    	    		
					chart.updateSeries([{
						name: chartConfigSettings.response[0].config != null ? (chartConfigSettings.response[0].config.displayDescription == null ? '' : chartConfigSettings.response[0].config.displayDescription) : '',
						type:'area',
						data: chartConfigSettings.response[0].graphResponseDTOLst
					}, {
						name: chartConfigSettings.response[1].config != null ? (chartConfigSettings.response[1].config.displayDescription == null ? '' : chartConfigSettings.response[1].config.displayDescription) : '',
						type:chartConfigSettings.Period=='d' ? chartConfigSettings.chartType2 : 'column',
						data: chartConfigSettings.response[1].graphResponseDTOLst
					}]);
					
				 }
			      else if(chartConfigSettings.functionId>=7)
  	    	    	{
					 chart.updateOptions({
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
								  						  return  value.toFixed(chartConfigSettings.getFormatResult1[0]);
								  						else 
								  						  return  value.toFixed(chartConfigSettings.getFormatResult1[0]) + "%";
								  					 }
										    },
										    title: {
									              formatter: (seriesName) => '',
									          },
							      },
								}
    	    		}); 
    	    		
					chart.updateSeries([{
						name: chartConfigSettings.response[0].config != null ? (chartConfigSettings.response[0].config.displayDescription == null ? '' : chartConfigSettings.response[0].config.displayDescription) : '',
						type: chartConfigSettings.Period=='d' ? chartConfigSettings.chartType1 : 'column',
						data: chartConfigSettings.response[0].graphResponseDTOLst
					}, {
						name: chartConfigSettings.response[1].config != null ? (chartConfigSettings.response[1].config.displayDescription == null ? '' : chartConfigSettings.response[1].config.displayDescription) : '',
						type: 'column',
						data: chartConfigSettings.response[1].graphResponseDTOLst
					}]);
				}else  {
				     var selectedValue = Math.abs(chartConfigSettings.min2)>=Math.abs(chartConfigSettings.max2)?Math.abs(min2):Math.abs(max2);
					 chart.updateOptions({
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
						  						  return !isNaN(value)?value.toFixed(chartConfigSettings.getFormatResult1[0]):'';
						  						else 
						  						  return !isNaN(value)?value.toFixed(chartConfigSettings.getFormatResult1[0]) + "%":'';
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
    	    		
					chart.updateSeries([{
						name: chartConfigSettings.response[0].config != null ? (chartConfigSettings.response[0].config.displayDescription == null ? '' : chartConfigSettings.response[0].config.displayDescription) : '',
						type: chartConfigSettings.Period=='d' ? chartConfigSettings.chartType1 : 'column',
						data: chartConfigSettings.response[0].graphResponseDTOLst
					}, {
						name: chartConfigSettings.response[1].config != null ? (chartConfigSettings.response[1].config.displayDescription == null ? '' : chartConfigSettings.response[1].config.displayDescription) : '',
						type: 'column',
						data: chartConfigSettings.response[1].graphResponseDTOLst
					}]);
				}
}
 function updateChartByFunctionIdMissingDates(chartConfigSettings){
			 var valueMin = getMarginLenght(chartConfigSettings.min); 
			 var valueMax = getMarginLenght(chartConfigSettings.max); 
			 var valueMin1 = getMarginLenght(chartConfigSettings.min1); 
			 var valueMax1 = getMarginLenght(chartConfigSettings.max1); 
				//		console.log(chartConfigSettings.fontSize,chartConfigSettings.min1,chartConfigSettings.max1,chartConfigSettings.min2,chartConfigSettings.max2,valueMin,valueMin1,valueMax,valueMax1)
			     if(chartConfigSettings.functionId==1 || chartConfigSettings.functionId==2)
			     {
					 chart.updateOptions({
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
  	    	    	  extra:{
							isDecimal: chartConfigSettings.isDecimal,
							yAxisFormat:chartConfigSettings.yAxisFormat,
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
						  						  return  value.toFixed(chartConfigSettings.getFormatResult1[0]);
						  						else 
						  							 return  value.toFixed(chartConfigSettings.getFormatResult1[0]) + "%";
						  					 }
								    },
								    title: {
							              formatter: (seriesName) => '',
							          },
					      },
						}
    	    		}); 
    	    		
					chart.updateSeries([{
						name: chartConfigSettings.response[0].config != null ? (chartConfigSettings.response[0].config.displayDescription == null ? '' : chartConfigSettings.response[0].config.displayDescription) : '',
						type:'area',
						data: chartConfigSettings.response[0].graphResponseDTOLst
					}, {
						name: chartConfigSettings.response[1].config != null ? (chartConfigSettings.response[1].config.displayDescription == null ? '' : chartConfigSettings.response[1].config.displayDescription) : '',
						type:chartConfigSettings.Period=='d' ? chartConfigSettings.chartType2 : 'column',
						data: chartConfigSettings.response[1].graphResponseDTOLst
					}]);
					
				 }
			      else if(chartConfigSettings.functionId>=7)
  	    	    	{
					 chart.updateOptions({
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
								  						  return  value.toFixed(chartConfigSettings.getFormatResult1[0]);
								  						else 
								  							 return  value.toFixed(chartConfigSettings.getFormatResult1[0]) + "%";
								  					 }
										    },
										    title: {
									              formatter: (seriesName) => '',
									          },
							      },
								}
    	    		}); 
    	    		
					chart.updateSeries([{
						name: chartConfigSettings.response[0].config != null ? (chartConfigSettings.response[0].config.displayDescription == null ? '' : chartConfigSettings.response[0].config.displayDescription) : '',
						type: chartConfigSettings.Period=='d' ? chartConfigSettings.chartType1 : 'column',
						data: chartConfigSettings.response[0].graphResponseDTOLst
					}, {
						name: chartConfigSettings.response[1].config != null ? (chartConfigSettings.response[1].config.displayDescription == null ? '' : chartConfigSettings.response[1].config.displayDescription) : '',
						type: 'column',
						data: chartConfigSettings.response[1].graphResponseDTOLst
					}]);
				}else  {
				     var selectedValue = Math.abs(chartConfigSettings.min2)>=Math.abs(chartConfigSettings.max2)?Math.abs(min2):Math.abs(max2);
					 chart.updateOptions({
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
						  					  if (chartConfigSettings.getFormatResult1[1])
						  						  return !isNaN(value)?value.toFixed(chartConfigSettings.getFormatResult1[0]):'';
						  						else 
						  						  return !isNaN(value)?value.toFixed(chartConfigSettings.getFormatResult1[0]) + "%":'';
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
    	    		
					chart.updateSeries([{
						name: chartConfigSettings.response[0].config != null ? (chartConfigSettings.response[0].config.displayDescription == null ? '' : chartConfigSettings.response[0].config.displayDescription) : '',
						type: chartConfigSettings.Period=='d' ? chartConfigSettings.chartType1 : 'column',
						data: chartConfigSettings.response[0].graphResponseDTOLst
					}, {
						name: chartConfigSettings.response[1].config != null ? (chartConfigSettings.response[1].config.displayDescription == null ? '' : chartConfigSettings.response[1].config.displayDescription) : '',
						type: 'column',
						data: chartConfigSettings.response[1].graphResponseDTOLst
					}]);
				}
}

function updateChartSelectedItem(chartConfigSettings){
			
			     if(chartConfigSettings.checkedItem ==1 )
			     {
					
					 var valueMin = getMarginLenght(chartConfigSettings.min); 
			 		 var valueMax = getMarginLenght(chartConfigSettings.max);  				 	
							
							chart.updateOptions({
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
							chart.updateSeries([{
								name: chartConfigSettings.response[0].config != null ? (chartConfigSettings.response[0].config.displayDescription == null ? '' : chartConfigSettings.response[0].config.displayDescription) : '',
								type: chartConfigSettings.chartType1,
								data: chartConfigSettings.response[0].graphResponseDTOLst
							}]);

				}
				else if(chartConfigSettings.checkedItem ==2 )
				{
						 var valueMin1 = getMarginLenght(chartConfigSettings.min1); 
						 var valueMax1 = getMarginLenght(chartConfigSettings.max1); 
						 var valueMin2 = getMarginLenght(chartConfigSettings.min2);
						 var valueMax2 = getMarginLenght(chartConfigSettings.max2); 
						 
      	    	    	chart.updateOptions({
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
												  				  return  value.toFixed(chartConfigSettings.getFormatResult1[0]);
												  				else 
												  				  {  
																		return  value.toFixed(chartConfigSettings.getFormatResult1[0]) + "%";}
												  				}else 
												  					 if(seriesIndex == 1){
												  					  if (chartConfigSettings.getFormatResult1[1])
												  						  return  value.toFixed(chartConfigSettings.getFormatResult1[0]);
												  						else 
												  							 return  value.toFixed(chartConfigSettings.getFormatResult1[0]) + "%";
												  					 }
					    								    },
					    								    title: {
					    							              formatter: (seriesName) => '',
					    							          },
					    					      },
					    						}
				      	    	    		});     
			      	    	           
		      	    	          chart.updateSeries([{
							          name: chartConfigSettings.response[0].config.displayDescription==null?itemValue[chartConfigSettings.checkedItemValues[0]].title:chartConfigSettings.response[0].config.displayDescription,
							          type: chartConfigSettings.chartType1,
							          data: chartConfigSettings.response[0].graphResponseDTOLst
							        },{
							          name: chartConfigSettings.response[1].config.displayDescription==null?itemValue[chartConfigSettings.checkedItemValues[1]].title:chartConfigSettings.response[1].config.displayDescription,
							          type: chartConfigSettings.chartType2,
							          data: chartConfigSettings.response[1].graphResponseDTOLst
							        }])
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
							chart.updateSeries([{
								name: chartConfigSettings.response[0].config != null ? (chartConfigSettings.response[0].config.displayDescription == null ? '' : chartConfigSettings.response[0].config.displayDescription) : '',
								type: chartConfigSettings.chartType1,
								data: chartConfigSettings.response[0].graphResponseDTOLst
							}]);

				}
				else if(chartConfigSettings.checkedItem ==2 )
				{
						 var valueMin1 = getMarginLenght(chartConfigSettings.min1); 
						 var valueMax1 = getMarginLenght(chartConfigSettings.max1); 
						 var valueMin2 = getMarginLenght(chartConfigSettings.min2);
						 var valueMax2 = getMarginLenght(chartConfigSettings.max2); 
						 
      	    	    	chart.updateOptions({
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
												  				  return  value.toFixed(chartConfigSettings.getFormatResult1[0]);
												  				else 
												  				  {  
																		return  value.toFixed(chartConfigSettings.getFormatResult1[0]) + "%";}
												  				}else 
												  					 if(seriesIndex == 1){
												  					  if (chartConfigSettings.getFormatResult1[1])
												  						  return  value.toFixed(chartConfigSettings.getFormatResult1[0]);
												  						else 
												  							 return  value.toFixed(chartConfigSettings.getFormatResult1[0]) + "%";
												  					 }
					    								    },
					    								    title: {
					    							              formatter: (seriesName) => '',
					    							          },
					    					      },
					    						}
				      	    	    		});     
			      	    	           
		      	    	          chart.updateSeries([{
							          name: chartConfigSettings.response[0].config.displayDescription==null?itemValue[chartConfigSettings.checkedItemValues[0]].title:chartConfigSettings.response[0].config.displayDescription,
							          type: chartConfigSettings.chartType1,
							          data: chartConfigSettings.response[0].graphResponseDTOLst
							        },{
							          name: chartConfigSettings.response[1].config.displayDescription==null?itemValue[chartConfigSettings.checkedItemValues[1]].title:chartConfigSettings.response[1].config.displayDescription,
							          type: chartConfigSettings.chartType2,
							          data: chartConfigSettings.response[1].graphResponseDTOLst
							        }])
				}
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