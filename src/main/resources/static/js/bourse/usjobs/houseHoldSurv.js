var allitems=[
	"#jqxCheckBoxcivilian_Lab_Force-81",
	"#jqxCheckBoxcivilian_Lab_Force_Chg-81",
	"#jqxCheckBoxemployed_Lab_Force-81",
	"#jqxCheckBoxemployed_Lab_Force_Chg-81",
	"#jqxCheckBoxunemployed-81"];

const graphName="householdssurv"; 
var graphService = "usjobs";
const removeEmpty = true;
const groupId= 81;

let selectedChart = 0;	
			   
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	
     initializeNewsBanner();
	 initializePeriods();
	 initializeTypes();
	 initializeFunctions(81);
	 
	 initializeNavigationButtons();
	 initializeChartButtons();

	 initialiazeItems(allitems,2);
	 initialiazeClearFilterButton();
	 
	$("#show").on("mousedown", function() {
		resetNavigation();
	});
		 
	 initializeShowFilterButtonTwoYears();
	 monthDate= new Date();
	 monthDate.setFullYear((new Date).getFullYear() - 2);
	 monthDate.setHours(0, 0, 0, 0);
	
	 getGraphHistoryByScreenName(graphName);
	 
     $("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });

});

function drawGraph() {
	
	//getGraphUsJobData(graphService,graphName,removeEmpty,true);
	$("#mainChart-title").empty();
	renderFunction(groupId);
}

function initializeChartButtons() {

	$("#g1-btn").on("click", function() {
		selectedChart = 1;
		setActiveButton(this);
		drawGraph();
	});

}

function setActiveButton(button) {
	$("#g1-btn").removeClass("active");
	$(button).addClass("active");
}
function renderFunction(groupId) {

	switch (selectedChart) {

		case 1:
			civilianVsEmployedVsUnemployed(groupId);
			break;

		default:
			getGraphUsJobData(graphService, graphName, removeEmpty, true);
			break;
	}
}

function resetNavigation() {
	selectedChart = 0;
	$("#g1-btn").removeClass("active");
	drawGraph();
} 

function civilianVsEmployedVsUnemployed(groupId) {
	

	var dataParam;
	var checkedItemValues = [];

	$('#overlayChart').show();
	
	mode = "usjobs";
	
	const stateColors = {
		initial: '#ffd960',
		surv: '#ff99ff',
		final: '#ffb30c',
		rev1: '#9f7b13'
	};

	var fromdate = formatDate(monthDate);
	var todate = formatDate(date);

	$("#mainChart").html("");
	$("#mainChart").css("display", "block");

	$("#button-monthForward").prop('disabled', checkDateMonth(monthDate, date));
	$("#button-yearForward").prop('disabled', checkDateYear(monthDate, date));

	var Period = getChartPeriod();
	var type = getSelectedType();

	if (chart != null) {
		chart.destroy();
	}

	chart = new ApexCharts(
		document.querySelector("#mainChart"),
		Period == 'd' ? options : ((functionId != -1) ? optionsWeekly : optionsWeeklyy)
	);

	chart.render();

	dataParam = {
		fromdate: fromdate,
		todate: todate,
		period: "d",
		type: type,
		subGroupId1: 2,
		groupId1: groupId,
		subGroupId2: 4,
		groupId2: groupId,
		subGroupId3: 1,
		groupId3: 80
	};

	disableOptions(true);
	$.ajax({
		type: "POST",
		contentType: "application/json; charset=utf-8",
		url: "/" + graphService + "/getgraphdatabytype",
		data: JSON.stringify(dataParam),
		dataType: 'json',
		timeout: 600000,

		success: function(response) {

	   	    startDateF1 = response[0].config.startDate;
			startDateF2 = response[1].config.startDate;
            startDateF3 = response[2].config.startDate;

			if (startDateF1 != null)
				startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);
			if (startDateF2 != null)
				startDateF2 = new Date(startDateF2.split("-")[1] + "-" + startDateF2.split("-")[0] + "-" + startDateF2.split("-")[2]);
			if (startDateF3 != null)
				startDateF3 = new Date(startDateF3.split("-")[1] + "-" + startDateF3.split("-")[0] + "-" + startDateF3.split("-")[2]);

			$('#legendfalse').addClass("active");
			$('#legendtrue').removeClass("active");

			chart.w.config.title.text = title;

			T1 = response[0].config.displayDescription == null ? itemValue[checkedItemValues[0]].title : response[0].config.displayDescription;
			title = T1 ;

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
			showLegend = checkActiveChartLegend($("#gridLegend").find(".active")[0], showLegend);

			var dbchartType1 = response[0].config.chartType;
			chartType1 = (getChartType(dbchartType1)[0] != 'area') ? getChartType(dbchartType1)[0] : 'line';

			var dbchartType2 = response[2].config.chartType;
			chartType2 = getChartType(dbchartType2)[0] != 'area' ? getChartType(dbchartType2)[0] : 'line';
			
			checkActiveChartType($("#chartTypes").find(".active")[0], Period == 'd' ? chartType1 : 'column', Period);

			chart.updateOptions(getChartDailyOption(title + getTitlePeriodAndType(), showGrid, fontsize, markerSize));

			min1 =Math.min.apply(
				    null,
				    response[0].graphResponseDTOLst
				        .map(item => item.y)
				        .filter(y => y != null && !isNaN(y))
				);
			max1 = Math.max.apply(
				    null,
				    response[0].graphResponseDTOLst
				        .map(item => item.y)
				        .filter(y => y != null && !isNaN(y))
				);
			min2 = Math.min.apply(
				    null,
				    response[1].graphResponseDTOLst
				        .map(item => item.y)
				        .filter(y => y != null && !isNaN(y))
				);
			max2 = Math.max.apply(
				    null,
				    response[1].graphResponseDTOLst
				        .map(item => item.y)
				        .filter(y => y != null && !isNaN(y))
				);
		    min3 = Math.min.apply(
				    null,
				    response[2].graphResponseDTOLst
				        .map(item => item.y)
				        .filter(y => y != null && !isNaN(y))
				);
			max3 = Math.max.apply(
				    null,
				    response[2].graphResponseDTOLst
				        .map(item => item.y)
				        .filter(y => y != null && !isNaN(y))
				);
				
		graphService = typeof graphService != 'undefined' ? graphService : '';
			
		const min = Math.min(min1, min2);
		const max = Math.max(max1, max2);

	     const axis = calculateYAxisRangeFromMinMax(min, max, 6, 5);
	     
		 calculatedMin =axis.min;
		 calculatedMax =axis.max;
			
	     
	     const values3 = addMarginToMinMax(min3, max3, 5);
	     var valueMin3 = values3;
	     var valueMax3 = values3; 	
	    
	     calculatedMinValue3 =  Math.sign(min3)==-1 ? -Math.abs(min3)-valueMin3 : Math.abs(min3)-valueMin3;
	     calculatedMinValue3 =  (Math.sign(calculatedMinValue3) == -1 && !(Math.sign(min3)==-1) )? 0: calculatedMinValue3;

		 var yaxisformat0 = getFormat(response[0].config.yAxisFormat);
		 var yAxisFormat2 = getFormat(response[2].config.yAxisFormat);

			notDecimal = yaxisformat0[1];
			nbrOfDigits = yaxisformat0[0];
			let data0 = response[0].graphResponseDTOLst;
			processDataAndAddNewEndDateForExtraSpaceInGraph(data0, 10, false)
				.then(({ response }) => {
					data0 = response;
				})
				.catch(error => {
					console.error('Error processing data:', error);
				});
			let isColumn = Period == 'd' ? false : true;
			var strokeWidth = null;
			var strokeWidth1 = null;
			var strokeWidth2 = null;
			if (isColumn) {
				strokeWidth = getDynamicWidth(response[0].graphResponseDTOLst.filter(item => item.y !== null && item.y !== '').length);
				strokeWidth1 = getDynamicWidth(response[1].graphResponseDTOLst.filter(item => item.y !== null && item.y !== '').length);
				strokeWidth2 = getDynamicWidth(response[2].graphResponseDTOLst.filter(item => item.y !== null && item.y !== '').length);
			}

			let seriesArray = [{
				name: response[0].config != null ? (response[0].config.displayDescription == null ? '' : response[0].config.displayDescription) : '',
				type: 'column',
				data: data0,
				strokeWidth: strokeWidth
			},{
				name: response[1].config != null ? (response[1].config.displayDescription == null ? '' : response[1].config.displayDescription) : '',
				type: 'column',
				data: response[1].graphResponseDTOLst,
				strokeWidth: strokeWidth
			}, {
				name: response[2].config != null ? (response[2].config.displayDescription == null ? '' : response[2].config.displayDescription) : '',
				type: 'line',
				data: response[2].graphResponseDTOLst,
				strokeWidth: strokeWidth2
			}];

			let xaxisArray = {
				labels: {
					rotate: -65,
					rotateAlways: true,
					minHeight: 0,
					style: {
						fontSize: '12px',
					},
						formatter: function(value) {
					    return new Date(value)
					        .toLocaleDateString('en-US', {
					            month: 'short',
					            year: '2-digit'
					        })
					        .replace(' ', '-');
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
			};
			let markersArray = {
				colors: ["#ffd960", "#9f7b13", "#ff0000"],
				strokeColors: ["#ffd960", "#9f7b13", "#ff0000"]
			};
			let yaxisArray = [
				    {
				        labels: {
				            minWidth: 75,
				            maxWidth: 75,
				            style: {
				                fontSize: fontsize,
				                colors: ['#fff']
				            },
				            formatter: function(val) {
				                return yaxisformat0[1]
				                    ? val.toFixed(yaxisformat0[0])
				                    : val.toFixed(yaxisformat0[0]) + "%";
				            }
				        },
				        tickAmount: 6,
				        min: calculatedMin,
				        max: calculatedMax,
				        axisBorder: {
				            width: 3,
				            show: true,
				            color: '#ffffff'
				        }
				    },
				
				    {
				        show: false,
				        min: calculatedMin,
				        max: calculatedMax,
				    },
				
				    {
				        opposite: true,
				        labels: {
				            minWidth: 75,
				            maxWidth: 75,
				            style: {
				                fontSize: fontsize,
				                cssClass: 'red-row',
				                fontWeight: 600,
				                colors: ["#ff0000"]
				            },
				            formatter: function(val) {
				                return yAxisFormat2[1]
				                    ? val.toFixed(yAxisFormat2[0])
				                    : val.toFixed(yAxisFormat2[0]) + "%";
				            }
				        },
				        tickAmount: 6,
				        min: calculatedMinValue3,
				        max: Math.sign(max3) == -1
				            ? -Math.abs(max3) + valueMax3
				            : Math.abs(max3) + valueMax3,
				        axisBorder: {
				            width: 3,
				            show: true,
				            color: typeof overideColors != 'undefined' ? overideColors[1] : "#ff0000"
				        }
				    }
				];
			let tooltipArray = {
				x: {
					show: false,
				},
				y: {
					formatter: function(value, { seriesIndex }) {
				
				    if (value === null || value === undefined || value === "" || isNaN(value)) {
				        return "";
				    }
				
				    value = Number(value);
				
				    if (seriesIndex == 0) {
				        return getFormatResult0[1]
				            ? value.toFixed(getFormatResult0[0])
				            : value.toFixed(getFormatResult0[0]) + "%";
				    }
				
				    if (seriesIndex == 1) {
				        return getFormatResult1[1]
				            ? value.toFixed(getFormatResult1[0])
				            : value.toFixed(getFormatResult1[0]) + "%";
				    }
				 if (seriesIndex == 2) {
				        return getFormatResult2[1]
				            ? value.toFixed(getFormatResult2[0])
				            : value.toFixed(getFormatResult2[0]) + "%";
				    }
				    return value.toFixed(2);
				},
					title: {
						formatter: (seriesName) => '',
					},
				},
			};
			let colorArray = ["#ffd960", "#9f7b13", "#ff0000"];
			
			chart.updateOptions({
				series: seriesArray,
				xaxis: xaxisArray,
				extra: {
					isDecimal: isdecimal,
					yAxisFormat: yaxisformat,
				},
				markers: markersArray,
				colors: colorArray,
				yaxis: yaxisArray,
				tooltip: tooltipArray,

			});

			disableChartFont(false);
			$('#overlayChart').hide();

			$("#mainChart-title").empty();

			const graphTitle = `
			    <span style="color:#ffffff;font-weight:bold;">
			        US Change in
			    </span>
			    <span style="color:#ffd960;font-weight:bold;">
			        Civilian Lab. Force
			    </span>
			    <span style="color:#ffffff;font-weight:bold;">
			        vs Change in
			    </span>
			    <span style="color:#ffd960;font-weight:bold;">
			        Employed Lab. Force
			    </span>
			    <span style="color:#ffffff;font-weight:bold;">
			        and
			    </span>
			    <span style="color:#ff0000;font-weight:bold;">
			        UNEMPLOYMENT RATE
			    </span>
			`;
			
			$("#mainChart-title").append(
			    '<div id="title-image" style="position:absolute;top:5px;left:12%;height:60px;background:#172568;" class="title-style">' +
			    '<img height="50" class="pr-2" src="' + getCountryImagePath('77')[0] + '">' +
			    graphTitle +
			    '</div>'
			);
			
		},

		error: function(e) {
			console.log("ERROR : ", e);
		}
	});

	$("#dateFrom-mainChart").val(formatedDate(fromdate));
	$("#dateTo-mainChart").val(formatedDate(todate));

	
}

