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
   	  			          height: 400,
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
   	  			        colors: ["#d9c62f", "#b6b19c","#ccbf74","#7e95d9","#4768b3","#a3a3a5"],
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
  	    				            margin: 10,
  	    				          align: 'center',
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
			        	labels: {
			        		 style: {
					        	  fontSize: fontSize,
					        	 },
			        	    formatter: function (value) {
			        	    	if (isdecimal)
				        	    	   return value.toFixed(yaxisformat);
				        	    	else 
				        	         return value.toFixed(yaxisformat) + "%";
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
   	    	            height: 400
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
			        	labels: {
			        		 style: {
					        	  fontSize: 12,
					        	 },
			        	    formatter: function (value) {
			        	    	if (isdecimal)
				        	    	   return value.toFixed(yaxisformat);
				        	    	else 
				        	         return value.toFixed(yaxisformat) + "%";
			        	    }
			        	  },
			        
			        }],
   	  			      colors: ["#d9c62f", "#b6b19c","#ccbf74","#7e95d9","#4768b3","#a3a3a5"],
   	  			      fill: {
   	  			            type:'solid',
   	  			            opacity: [1, 1],
   	  			              },
			        xaxis: {
	  			           type: '',
	  			        	tickPlacement: 'on' 
 			        }
   	    	          };
function getCountryFlag(seriesName)
{var img;
	if (seriesName.includes("Germany"))
	  img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/germany.png'/>";
	else
		if (seriesName.includes("USA"))
	    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/united-states.png'/>";
		else
			if (seriesName.includes("France"))
		    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/france.png'/>";
			else
				if (seriesName.includes("Uk"))
			    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/united-kingdom.png'/>";
				else
					if (seriesName.includes("Italy"))
				    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/italy.png'/>";
					else
						if (seriesName.includes("Spain"))
					    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/spain.png'/>";
						else
						  if (seriesName.includes("FRA-GER"))
						  img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/fra-ger.png'/>";
						else
							if (seriesName.includes("ITA-GER"))
						    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/ita-ger.png'/>";
							else
								if (seriesName.includes("SPN-GER"))
							    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/spn-ger.png'/>";
								else
									if (seriesName.includes("UK-GER"))
								    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/uk-ger.png'/>";
									else
										if (seriesName.includes("USA-GER"))
									    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/usa-ger.png'/>";
										else
											if (seriesName.includes("USA-UK"))
										    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/usa-uk.png'/>";
											else
												if (seriesName.includes("ITA-FRA"))
											    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/ita-fra.png'/>";
												else
													if (seriesName.includes("ITA-SPN"))
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