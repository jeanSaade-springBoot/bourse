 function candleStickTranding(graphName,saveHistory){
	 const selectedIndex = $('#dropDownCryptoOptions').jqxDropDownList('selectedIndex'); 

	 const candleGraphTitle = dropDownCryptosource[selectedIndex].name; // need to be dynamic
	

	mode = "merge";
	var dataParam;
	var checkedItemValues = [];
	$('#overlayChart').show();
	
	chartType = 'candle'
	
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
	if (candleStickChart != null)
		{ candleStickChart.destroy();
		}
		
	const chartOptions = {
    series: [], // Empty series, to be filled later with data
    chart: {
        type: 'candlestick',
        height: 585,
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
        tickAmount: 6,
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
	candleStickChart = new ApexCharts(document.querySelector("#mainChart"), chartOptions);
	candleStickChart.render();
	
	const selectedCandleStickIndex = 0;
    const subGroupId1 =  8; // need to be replaced
    const groupId = dropDownCryptosource[selectedIndex].groupId; // need to be replaced
    
	let interval=null;
	
	if(timeRange== "Daily")
	    url ="/cryptos/getcandlegraphdata";
	else
	  { 
		url ="/cryptos/getcandlegraphdatainterval";
	   todate= todate+' 23:59:59';
	   interval =timeRange;
	  }
	
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
	else if(dropDownCandleOptions.length!=0)
	{
		
		dataParam = { 
	        		"fromdate":fromdate,
	        	    "todate":todate,
	        	    //"period": "d",
	        	    "period":Period,
	        	    "type": type,
	        	    "subGroupId1":subGroupId1,
	        	    "groupId1": groupId,
	        	    "subGroupId2":dropDownCandleOptions[1],
	        	    "groupId2": groupId,
	        	    "interval":interval
     			   };
	}


	disableOptions(true);
	
	(async () => {
  try {
    const response = await fetchChartData(url, dataParam);
			
		if (response.length>1 && dropDownCandleOptions.length!=0 && dropDownCandleOptions[1]=="funding_rate")
			{ 
				
			response[1].graphResponseDTOLst.forEach(item => {
			  item.y = item.y * 109500;
			});	
			
			let { data1: alignedData1, data2: alignedData2 } = alignMergeDataSets(response[0].graphResponseDTOLst, response[1].graphResponseDTOLst) ;
			 response[1].graphResponseDTOLst = alignedData2;
			}
		
		//	$("#Clearfilter").trigger('click');

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

			processDataAndAddNewEndDateForExtraSpaceInGraph(response[0].graphResponseDTOLst ,10,true)
				.then(({ response }) => {
						response[0].graphResponseDTOLst = response;
				})
				.catch(error => {
				    console.error('Error processing data:', error);
				});	

					    
		if (typeof response[1] !== "undefined")			    
		{
		processDataAndAddNewEndDateForExtraSpaceInGraph(response[1].graphResponseDTOLst ,10,true)
			.then(({ response }) => {
					response[1].graphResponseDTOLst = response;
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
		yAxisformat1 = getFormat(response[1]?.config?.yAxisFormat || "0.00000000%");
		
		selectedValue = Math.abs(min2)>=Math.abs(max2)?Math.abs(min2):Math.abs(max2);		
		
		getFormatResult1 = getFormat(response[1]?.config?.dataFormat || "0.00000000%");
		 
		T2 = response[1].config && response[1].config.displayDescription != null
		  ? response[1].config.displayDescription
		  : "FUNDING RATE";
  
		candleGraphTitleConfig = candleGraphTitle + " vs " + T2;		
	
		}else{
			let candleGraphTimeRange = (timeRange=="4h")?" 4-Hour ":(timeRange=="1w")?" Weekly":" DAILY"
			candleGraphTitleConfig = candleGraphTitle +candleGraphTimeRange;
		}
		let seriesArray=[];
		
				
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
				
			if (response.length>1 && dropDownCandleOptions.length!=0)
			{    const values = addMarginToMinMax(min2, max2, 5);
				    	
			 	seriesArray=[{
							type: 'candlestick',
							data: response[0].graphResponseDTOLst
			  			},
						{
							type: 'column',
							data: response[1].graphResponseDTOLst
		
						}];
						
						if(dropDownCandleOptions[1]=="funding_rate")
						 yaxisConfig.push({
										  opposite: true,
				     				    	  labels: {
				     				    		    // minWidth: -50,maxWidth: -50,
					 				        		 style: {
					 						        	  fontSize: fontsize,
					 						        	 },
					 						        	 formatter: function(val, index) {
														    if (val == null) return "N/A"; // Handle null or undefined values
														
														    function formatNumberShort(num, decimals) {
														        if (num >= 1_000_000_000) {
														            return (num / 1_000_000_000).toFixed(decimals) + 'B';
														        } else if (num >= 1_000_000) {
														            return (num / 1_000_000).toFixed(decimals) + 'M';
														        } else if (num >= 1_000) {
														            return (num / 1_000).toFixed(decimals) + 'K';
														        } else {
														            return num.toFixed(decimals).toString();
														        }
														    }
														
														    const decimals = getFormatResult1[0];
														    const isRaw = getFormatResult1[1];
														    const formatted = formatNumberShort(val, decimals);
														    return isRaw ? formatted : formatted + "%";
														}
						 				        	  },
						 				          tickAmount: 6,
						 				    	 min:Math.sign(min2)==-1 ? -Math.abs(selectedValue)-values : Math.abs(selectedValue)-values,
 				    	 						 max:Math.sign(max2)==-1 ? -Math.abs(selectedValue)+values : Math.abs(selectedValue)+values,
				 				    			  axisBorder: {
				 					                  width: 3,
				 					                  show: true,
				 					                  color: "#f0ab2e50",
				 					                  offsetX: 0,
				 					                  offsetY: 0
				 					              }
				 				    			 
								});
						
						else 
								yaxisConfig.push({
										  opposite: true,
				     				    	  labels: {
				     				    		    // minWidth: -50,maxWidth: -50,
					 				        		 style: {
					 						        	  fontSize: fontsize,
					 						        	 },
					 						        	 formatter: function(val, index) {
														    if (val == null) return "N/A"; // Handle null or undefined values
														
														    function formatNumberShort(num, decimals) {
														        if (num >= 1_000_000_000) {
														            return (num / 1_000_000_000).toFixed(decimals) + 'B';
														        } else if (num >= 1_000_000) {
														            return (num / 1_000_000).toFixed(decimals) + 'M';
														        } else if (num >= 1_000) {
														            return (num / 1_000).toFixed(decimals) + 'K';
														        } else {
														            return num.toFixed(decimals).toString();
														        }
														    }
														
														    const decimals = getFormatResult1[0];
														    const isRaw = getFormatResult1[1];
														    const formatted = formatNumberShort(val, decimals);
														    return isRaw ? formatted : formatted + "%";
														}
						 				        	  },
						 				          tickAmount: 6,
						 				    	  min:min2,
 				    	 						  max:Math.sign(max2)==-1 ? -Math.abs(max2)+values : Math.abs(max2)+values,
				 				    				 axisBorder: {
				 					                  width: 3,
				 					                  show: true,
				 					                  color: "#f0ab2e50",
				 					                  offsetX: 0,
				 					                  offsetY: 0
				 					              }
				 				    			 
								});
				colorConfig=["#FFFFFF", "#f0ab2e50"];
				
					annotations = {
							  yaxis: [{
							    y: 0,
							    yAxisIndex: 1,
								strokeDashArray: 0,
								offsetX: 0,
								width: '100%',
								borderColor: '#f0ab2e',
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
						}
		else
		    seriesArray=[{
					type: 'candlestick',
					data: response[0].graphResponseDTOLst

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
	
	globalCandleStickSeries= JSON.parse(JSON.stringify(seriesArray));
	candleStickChart.updateOptions({
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
					height: 585,
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
        // Utility function for short number formatting
        function formatNumberShort(num, decimals) {
            if (num >= 1_000_000_000) {
                return (num / 1_000_000_000).toFixed(decimals) + 'B';
            } else if (num >= 1_000_000) {
                return (num / 1_000_000).toFixed(decimals) + 'M';
            } else if (num >= 1_000) {
                return (num / 1_000).toFixed(decimals) + 'K';
            } else {
                return num.toFixed(decimals);
            }
        }

        // Get the Y value at the current index
        const yValue = w.globals.series[seriesIndex][dataPointIndex];

        // Hide tooltip for null or empty values
        if (!yValue || (Array.isArray(yValue) && yValue.length === 0)) {
            return null;
        }

        const isCandlestick = w.config.series[seriesIndex].type === "candlestick";

        if (isCandlestick) {
            const open = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
            const high = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
            const low = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
            const close = w.globals.seriesCandleC[seriesIndex][dataPointIndex];

            const decimals = getFormatResult0[0];
            const isRaw = getFormatResult0[1];

           const formatValue = value =>
				        new Intl.NumberFormat("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals}).format(value);
				

            return `
                <div style="padding: 10px;">
                    <div><strong>Open:</strong> ${formatValue(open)}</div>
                    <div><strong>High:</strong> ${formatValue(high)}</div>
                    <div><strong>Low:</strong> ${formatValue(low)}</div>
                    <div><strong>Close:</strong> ${formatValue(close)}</div>
                </div>`;
        } else {
            const decimals = seriesIndex === 0 ? getFormatResult0[0] : getFormatResult1[0];
            const isRaw = seriesIndex === 0 ? getFormatResult0[1] : getFormatResult1[1];

            const formatted = formatNumberShort(yValue, decimals);
            return `
                <div style="padding: 10px;">
                    <div><strong>Value:</strong> ${isRaw ? formatted : formatted + "%"}</div>
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
		} catch (error) {
    console.error("Chart loading failed:", error);
  }
})();


	(saveHistory) ? saveGraphHistory(graphName, checkedItemid, Period, type) : null;

	$("#dateFrom-mainChart").val(fromdate);
	$("#dateTo-mainChart").val(todate);
	
 }