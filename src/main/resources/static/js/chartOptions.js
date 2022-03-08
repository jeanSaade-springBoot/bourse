$("#fontOptions button.btn").click(function(){
			    $("#fontOptions").find(".active").removeClass("active");
			    $(this).addClass("active");
			  });  
			  
$("#chartTypes button.btn").click(function(){
			    $("#chartTypes").find(".active").removeClass("active");
			    $(this).addClass("active");
			  }); 

function graphTypeOption(chartType)
{
   chart.updateOptions({
	  extra:{
			isDecimal: isdecimal,
			yAxisFormat:yaxisformat,
		},
       yaxis: {
	    	  labels: {
	    		     maxWidth: 60, 
	        		 style: {
			        	  fontSize: fontsize,
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
   stroke: {
		      	 colors: chartType=="area"? ["#ffffff"]:["#F0AB2E", "#0097FE","#F9E79F","#7e95d9","#FAD7A0","#a3a3a5"],
	        },
    markers: {
			   colors: chartType=="area"?"#ffffff":["#F0AB2E", "#0097FE","#F9E79F","#7e95d9","#FAD7A0","#a3a3a5"],
			   strokeColors:chartType=="area"?"#ffffff":["#F0AB2E", "#0097FE","#F9E79F","#7e95d9","#FAD7A0","#a3a3a5"]
		     }
		 });
	chart.updateSeries([{ type:chartType}]);
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

function getDBChartType(DbchartType)
{
   activeChartType = $('#chartTypes > .btn.active').attr('id');
	if (typeof activeChartType == 'undefined')
	  { $('#'+DbchartType.toLowerCase()).addClass("active");
	  	chartType=DbchartType;
	  } else 
		chartType = activeChartType;
		
		return chartType;
}			  