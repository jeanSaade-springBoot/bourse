var allitems = ["#jqxCheckBoxfinal-77",
	"#jqxCheckBoxinitial-77",
	"#jqxCheckBoxsurv-77",];

const graphName = "jolts";
const groupId = 77;
var graphService = "usjobs";
const removeEmpty = true;

mode = "usjobs";
	
let selectedChart = 0;

$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {

	initializeNewsBanner();
	initializePeriods();
	initializeTypes();
	initializeFunctions(77);

	initializeNavigationButtons();
	initializeChartButtons();

	initialiazeItems(allitems, 3);
	initialiazeClearFilterButton();

	$("#show").on("mousedown", function() {
		resetNavigation();
	});

	initializeShowFilterButtonTwoYears();

	monthDate = new Date();
	monthDate.setFullYear((new Date).getFullYear() - 2);
	monthDate.setHours(0, 0, 0, 0);

	getGraphHistoryByScreenName(graphName);

	$("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });

});

function initializeChartButtons() {

	$("#g1-btn").on("click", function() {
		selectedChart = 1;
		setActiveJoltsButton(this);
		drawGraph();
	});

	$("#g2-btn").on("click", function() {
		selectedChart = 2;
		setActiveJoltsButton(this);
		drawGraph();
	});

	$("#g3-btn").on("click", function() {
		selectedChart = 3;
		setActiveJoltsButton(this);
		drawGraph();
	});
}

function setActiveJoltsButton(button) {
	$("#g1-btn, #g2-btn, #g3-btn").removeClass("active");
	$(button).addClass("active");
}
function drawGraph() {
		$("#mainChart-title").empty();
	renderFunction(groupId);
}

function renderFunction(groupId) {

	var isChecked = $("#jqxCheckBoxCurrentfinal-77").is(":checked");

	switch (selectedChart) {

		case 1:
			joltsJobOpeningsVsUnemployment(groupId);
			break;

		case 2:
			joltsOpeningsUnemployedRatioFunction(groupId);
			break;

		case 3:
			joltsOpeningsMinusUnemployedFunction(groupId);
			break;

		default:
			// Original behaviour
			if (isChecked)
				currentUsJobsFunction(groupId);
			else
				getGraphUsJobData(graphService, graphName, removeEmpty, true);
			break;
	}
}

function redirectFunction(groupId) {
	drawGraph();
}
function resetNavigation() {

	selectedChart = 0;

	$("#g1-btn, #g2-btn, #g3-btn").removeClass("active");

	drawGraph();
}
function multiplySeriesBy1000(responseIndex, response) {

	response[responseIndex].graphResponseDTOLst.forEach(item => {

		if (item.y !== null && item.y !== "" && !isNaN(item.y)) {
			item.y = parseFloat(item.y) * 1000;
		}

	});

	response[responseIndex].config.yAxisFormat = "0.0";
	response[responseIndex].config.displayDescription =
		response[responseIndex].config.displayDescription + " (Thousands)";
}
function joltsJobOpeningsVsUnemployment(groupId) {

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
		subGroupId1: 1,
		groupId1: groupId,
		subGroupId2: 1,
		groupId2: 80
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

			if (startDateF1 != null)
				startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);
			if (startDateF2 != null)
				startDateF2 = new Date(startDateF2.split("-")[1] + "-" + startDateF2.split("-")[0] + "-" + startDateF2.split("-")[2]);

			$('#legendfalse').addClass("active");
			$('#legendtrue').removeClass("active");

			chart.w.config.title.text = title;

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
			showLegend = checkActiveChartLegend($("#gridLegend").find(".active")[0], showLegend);

			var dbchartType1 = response[0].config.chartType;
			chartType1 = (getChartType(dbchartType1)[0] != 'area') ? getChartType(dbchartType1)[0] : 'line';

			var dbchartType2 = response[1].config.chartType;
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
		
			graphService = typeof graphService != 'undefined' ? graphService : '';

	     const values1 = addMarginToMinMax(min1, max1, 5);
	     var valueMin1 = values1;
	     var valueMax1 = values1; 	
	     
	     const values2 = addMarginToMinMax(min2, max2, 5);
	     var valueMin2 = values2;
	     var valueMax2 = values2; 	
	    
	     calculatedMinValue1 =  Math.sign(min1)==-1 ? -Math.abs(min1)-valueMin1 : Math.abs(min1)-valueMin1;
	     calculatedMinValue1 =  (Math.sign(calculatedMinValue1) == -1 && !(Math.sign(min1)==-1) )? 0: calculatedMinValue1;

	     calculatedMinValue2 =  Math.sign(min2)==-1 ? -Math.abs(min2)-valueMin2 : Math.abs(min2)-valueMin2;
	     calculatedMinValue2 =  (Math.sign(calculatedMinValue2) == -1 && !(Math.sign(min2)==-1) )? 0: calculatedMinValue2;


		 var yaxisformat0 = getFormat(response[0].config.yAxisFormat);
		 var yAxisFormat1 = getFormat(response[1].config.yAxisFormat);

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
			if (isColumn) {
				strokeWidth = getDynamicWidth(response[0].graphResponseDTOLst.filter(item => item.y !== null && item.y !== '').length);
				strokeWidth1 = getDynamicWidth(response[1].graphResponseDTOLst.filter(item => item.y !== null && item.y !== '').length);
			}

			let seriesArray = [{
				name: response[0].config != null ? (response[0].config.displayDescription == null ? '' : response[0].config.displayDescription) : '',
				type: 'column',
				data: data0,
				strokeWidth: strokeWidth
			}, {
				name: response[1].config != null ? (response[1].config.displayDescription == null ? '' : response[1].config.displayDescription) : '',
				type: 'line',
				data: response[1].graphResponseDTOLst,
				strokeWidth: strokeWidth1
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
				colors: ["#ffcc05", "#ff0000"],
				strokeColors: ["#ffcc05", "#ff0000"]
			};
			let yaxisArray = [{
				labels: {
					minWidth: 75, maxWidth: 75,
					style: {
						fontSize: fontsize,
						colors:['#fff']
					},
					formatter: function(val, index) {
						if (yaxisformat0[1])
							return val.toFixed(yaxisformat0[0]);
						else
							return val.toFixed(yaxisformat0[0]) + "%";
					}
				},
				tickAmount: 6,
			    min:calculatedMinValue1,
				max:Math.sign(max1)==-1 ? -Math.abs(max1)+valueMax1 : Math.abs(max1)+valueMax1,
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
					minWidth: 75, maxWidth: 75,
					style: {
						fontSize: fontsize,
						cssClass: 'red-row',
						fontWeight: 600,
						colors:["#ff0000"]
					},
					formatter: function(val, index) {
						if (yAxisFormat1[1])
							return val.toFixed(yAxisFormat1[0]);
						else
							return val.toFixed(yAxisFormat1[0]) + "%";
					}

				},
				tickAmount: 6,
				min: calculatedMinValue2,
				max: Math.sign(max2) == -1 ? -Math.abs(max2) + valueMax2 : Math.abs(max2) + valueMax2,
				axisBorder: {
					width: 3,
					show: true,
					color: typeof overideColors != 'undefined' ? overideColors[1] : "#ff0000",
					offsetX: 0,
					offsetY: 0
				},
			}];

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
				
				    return value.toFixed(2);
				},
					title: {
						formatter: (seriesName) => '',
					},
				},
			};
			let colorArray = ["#ffcc05", "#ff0000"];
			
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
			        US JOBS OPENNINGS (in Million) vs
			    </span>
			    <span style="color:#ff0000;font-weight:bold;">
			         UNEMPLOYMENT RATE
			    </span>
			`;

            $("#mainChart-title").append('<div id="title-image" style="position: absolute;top: 5px;left: 29%;height: 60px;background: #172568;" class="title-style"><img height="50" class="pr-2" src=\''+getCountryImagePath('77')[0]+'\' >'+graphTitle+'</div>')
			
		},

		error: function(e) {
			console.log("ERROR : ", e);
		}
	});

	$("#dateFrom-mainChart").val(formatedDate(fromdate));
	$("#dateTo-mainChart").val(formatedDate(todate));
}

function joltsOpeningsMinusUnemployedFunction(groupId)
{
  mode = "usjobs";
  $("#overlayChart").show();
  
  var fromdate = formatDate(monthDate);
  var todate = formatDate(date);
  var Period = getChartPeriod();

  $("#mainChart").html("");
  $("#mainChart").css("display", "block");
  if (chart != null)
  {
    chart.destroy();
  }

  chart = new ApexCharts(document.querySelector("#mainChart"), options);
  chart.render();
  
  var dataParam = {
    fromdate: fromdate,
    todate: todate,
    groupId1: "77", // Job Openings group
    subGroupId1: "1", // Job Openings subgroup
    groupId2: "81", // Unemployed Labor Force group
    subGroupId2: "5", // Unemployed Labor Force subgroup
    period: Period,
    type: "DIFFERENCE",
    isFunctionGraph: "false",
    removeEmpty1: "true",
    removeEmpty2: "true"
  };
  $.ajax(
  {
    url: "/" + graphService + "/getgraphdatabytype",
    type: "POST",
    data: JSON.stringify(dataParam),
    contentType: "application/json",

		success: function(response) {
			
	   	    startDateF1 = response[0].config.startDate;

			if (startDateF1 != null)
				startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);
			
			$('#legendtrue').removeClass("active");

			chart.w.config.title.text = title;

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

			var getFormatResult0 = getFormat(response[0].config.dataFormat);

			chartDbFontSize = response[0].config.chartSize;
			fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], chartDbFontSize);
			markerSize = checkActiveChartMarker($("#chartMarker").find(".active")[0], response[0].config.chartshowMarkes);
			showGrid = checkActiveChartGrid($("#gridOptions").find(".active")[0], response[0].config.chartShowgrid)
			showLegend = checkActiveChartLegend($("#gridLegend").find(".active")[0], showLegend);

			var dbchartType1 = response[0].config.chartType;
			chartType1 = (getChartType(dbchartType1)[0] != 'area') ? getChartType(dbchartType1)[0] : 'line';

			checkActiveChartType($("#chartTypes").find(".active")[0], 'column', Period);

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
			
			graphService = typeof graphService != 'undefined' ? graphService : '';

	     const axis = calculateYAxisRangeFromMinMax(min1, max1, 6, 5);
	     
		 calculatedMin =axis.min;
		 calculatedMax =axis.max;
			
	  
		 var yaxisformat0 = getFormat(response[0].config.yAxisFormat);

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
			let isColumn =  true;
			var strokeWidth = null;
			if (isColumn) {
				strokeWidth = getDynamicWidth(response[0].graphResponseDTOLst.filter(item => item.y !== null && item.y !== '').length);
			}

			let seriesArray = [{
				name: 'Openings - unemployed' , //response[0].config != null ? (response[0].config.displayDescription == null ? '' : response[0].config.displayDescription) : '',
				type: 'column',
				data: data0,
				strokeWidth: strokeWidth*1.75
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
				colors: ["#fff", "#ff0000"],
				strokeColors: ["#fff", "#ff0000"]
			};
			let yaxisArray = [{
				labels: {
					minWidth: 75, maxWidth: 75,
					style: {
						fontSize: fontsize,
						colors:['#fff']
					},
					formatter: function(val, index) {
						if (yaxisformat0[1])
							return val.toFixed(yaxisformat0[0]);
						else
							return val.toFixed(yaxisformat0[0]) + "%";
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
			}];

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
				
				    return value.toFixed(2);
				},
					title: {
						formatter: (seriesName) => '',
					},
				},
			};
			
		let colorArray = [function({ value }) {
		    if (value == null || value === "" || isNaN(value)) {
		        return "#18c34a";
		    }
		
		    return Number(value) <= 0 ? "#f23a3aa3" : "#30d7818c";
		}];
		
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

			 $("#mainChart-title").html(
				'<div id="title-image" style="position:absolute;top: 5px;left:25%;height:60px;background: #172568;" class="title-style">' +
				'<img height="50" class="pr-2" src="' + getCountryImagePath("77")[0] + '">' +
				'<span style="color:white;font-weight:bold;">US Monthly </span>' +
				'<span style="color:#ffd400;font-weight:bold;">JOB OPENINGS(JOLT) minus UNEMPLOYED LABOR FORCE </span>' +
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

function joltsOpeningsUnemployedRatioFunction(groupId)
{
  mode = "usjobs";
  $("#overlayChart").show();
  
  var fromdate = formatDate(monthDate);
  var todate = formatDate(date);
  var Period = getChartPeriod();

  $("#mainChart").html("");
  $("#mainChart").css("display", "block");
  if (chart != null)
  {
    chart.destroy();
  }

  chart = new ApexCharts(document.querySelector("#mainChart"), options);
  chart.render();
  
  var dataParam = {
    fromdate: fromdate,
    todate: todate,
    groupId1: "77", // Job Openings group
    subGroupId1: "1", // Job Openings subgroup
    groupId2: "81", // Unemployed Labor Force group
    subGroupId2: "5", // Unemployed Labor Force subgroup
    period: Period,
    type: "RATIO",
    isFunctionGraph: "false",
    removeEmpty1: "true",
    removeEmpty2: "true"
  };
  $.ajax(
  {
    url: "/" + graphService + "/getgraphdatabytype",
    type: "POST",
    data: JSON.stringify(dataParam),
    contentType: "application/json",

		success: function(response) {
			
	   	    startDateF1 = response[0].config.startDate;

			if (startDateF1 != null)
				startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);
			
			$('#legendtrue').removeClass("active");

			chart.w.config.title.text = title;

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

			var getFormatResult0 = getFormat(response[0].config.dataFormat);

			chartDbFontSize = response[0].config.chartSize;
			fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], chartDbFontSize);
			markerSize = checkActiveChartMarker($("#chartMarker").find(".active")[0], response[0].config.chartshowMarkes);
			showGrid = checkActiveChartGrid($("#gridOptions").find(".active")[0], response[0].config.chartShowgrid)
			showLegend = checkActiveChartLegend($("#gridLegend").find(".active")[0], showLegend);

			var dbchartType1 = response[0].config.chartType;
			chartType1 = (getChartType(dbchartType1)[0] != 'area') ? getChartType(dbchartType1)[0] : 'line';

			checkActiveChartType($("#chartTypes").find(".active")[0], 'line', Period);

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
			
			graphService = typeof graphService != 'undefined' ? graphService : '';

	     const values1 = addMarginToMinMax(min1, max1, 5);
	     var valueMin1 = values1;
	     var valueMax1 = values1; 	
	     
	     calculatedMinValue1 =  Math.sign(min1)==-1 ? -Math.abs(min1)-valueMin1 : Math.abs(min1)-valueMin1;
	     calculatedMinValue1 =  (Math.sign(calculatedMinValue1) == -1 && !(Math.sign(min1)==-1) )? 0: calculatedMinValue1;

		 var yaxisformat0 = getFormat(response[0].config.yAxisFormat);

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
			if (isColumn) {
				strokeWidth = getDynamicWidth(response[0].graphResponseDTOLst.filter(item => item.y !== null && item.y !== '').length);
			}

			let seriesArray = [{
				name: 'Openings / Unemployed Ratio',
				type: 'line',
				data: data0,
				strokeWidth: strokeWidth
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
				colors: ["#fff", "#ff0000"],
				strokeColors: ["#fff", "#ff0000"]
			};
			let yaxisArray = [{
				labels: {
					minWidth: 75, maxWidth: 75,
					style: {
						fontSize: fontsize,
						colors:['#fff']
					},
					formatter: function(val, index) {
						if (yaxisformat0[1])
							return val.toFixed(yaxisformat0[0]);
						else
							return val.toFixed(yaxisformat0[0]) + "%";
					}
				},
				tickAmount: 6,
			    min:calculatedMinValue1,
				max:Math.sign(max1)==-1 ? -Math.abs(max1)+valueMax1 : Math.abs(max1)+valueMax1,
				axisBorder: {
					width: 3,
					show: true,
					color: '#ffffff',
					offsetX: 0,
					offsetY: 0
				},
			}];

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
				
				    return value.toFixed(2);
				},
					title: {
						formatter: (seriesName) => '',
					},
				},
			};
			let colorArray = ["#fff"];
			let annotationArray = [{
				   x:0,
                   isRectangle:true,
		  		   y:0,
		  		   y2:1,
		  		   position:'left',
		  		   borderColor: "#ffffff00",
		  		   fillColor: "#FF000050",
		  		   strokeDashArray: 0,
		  		   opacity: 1,
		  		   label: {
						  text: "",
						     offsetY:20,
						     borderColor: "#ffffff00",
					          style: {
					            color: "#FF00FF",
					            background:  "#00000000",
					          },
	
					 }
		  		}];
		  		
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
				annotations:{yaxis:annotationArray},

			});

			disableChartFont(false);
			$('#overlayChart').hide();

			$("#mainChart-title").empty();

			 $("#mainChart-title").html(
				'<div id="title-image" style="position:absolute;top: 5px;left:25%;height:60px;background: #172568;" class="title-style">' +
				'<img height="50" class="pr-2" src="' + getCountryImagePath("77")[0] + '">' +
				'<span style="color:white;font-weight:bold;">US Monthly </span>' +
				'<span style="color:#ffd400;font-weight:bold;">JOB OPENINGS to UNEMPLOYED LABOR FORCE </span>' +
				'<span style="color:white;font-weight:bold;">RATIO</span>' +
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

