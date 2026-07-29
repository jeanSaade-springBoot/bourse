var allitems = [
	"#jqxCheckBoxfinal-79",
	"#jqxCheckBoxrev1-79",
	"#jqxCheckBoxinitial-79",
	"#jqxCheckBoxsurv-79",];

const graphName = "nfp";

var graphService = "usjobs";
const removeEmpty = true;

mode = "usjobs";

let selectedChart = 0;

$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
const groupId = 79;
$(document).ready(function() {

	initializeNewsBanner();
	initializePeriods();
	initializeTypes();
	initializeFunctions(79);

	initializeNavigationButtons();
	initializeChartButtons();

	initialiazeItems(allitems, 4);
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

function drawGraph() {

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

	var isChecked = $("#jqxCheckBoxCurrentfinal-79").is(":checked");

	switch (selectedChart) {

		case 1:
			NonfarmPayrollsVsUnemployment(groupId);
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
	var isChecked = $("#jqxCheckBoxCurrentfinal-79").is(":checked");

	if (isChecked)
		currentUsJobsFunction(groupId)
	else {
		drawGraph();
	}

}

function resetNavigation() {
	selectedChart = 0;
	$("#g1-btn").removeClass("active");
	drawGraph();
} 

function NonfarmPayrollsVsUnemployment(groupId) {

    mode = "usjobs";
    var checkedItemValues = [];
    $('#overlayChart').show();

    const stateColors = {
        initial: '#ffd960',
        surv: '#ff99ff',
        final: '#ffb30c',
        rev1: '#9f7b13'
    };

    var fromdate = formatDate(monthDate);
    var todate = formatDate(date);
    var Period = getChartPeriod();
    var type = getSelectedType();

    $("#mainChart").html("");
    $("#mainChart").css("display", "block");

    $("#button-monthForward").prop('disabled', checkDateMonth(monthDate, date));
    $("#button-yearForward").prop('disabled', checkDateYear(monthDate, date));

    if (chart != null) {
        chart.destroy();
    }

    chart = new ApexCharts(
        document.querySelector("#mainChart"),
        Period == 'd' ? options : ((functionId != -1) ? optionsWeekly : optionsWeeklyy)
    );

    chart.render();

    var dataParam = {
        fromdate: fromdate,
        todate: todate,
        period: "d",
        type: type,
        subGroupId1: 1,
        groupId1: groupId
    };

    var secondDataParam = {
        fromdate: fromdate,
        todate: todate,
        period: "d",
        type: type,
        groupId1: "80",
        subGroupId1: "1"
    };

    enableDisableDropDowns(true);
    disableOptions(true);

    var mainRequest = $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/" + graphService + "/getgraphdatacurrent",
        data: JSON.stringify(dataParam),
        dataType: "json",
        timeout: 600000
    });

    var secondRequest = $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/" + graphService + "/getgraphdatabytype",
        data: JSON.stringify(secondDataParam),
        dataType: "json",
        timeout: 600000
    });

    $.when(mainRequest, secondRequest).done(function(mainRes, secondRes) {

        var response = mainRes[0];
        var secondResponse = secondRes[0];

	   	    startDateF1 = response[0].config.startDate;
			startDateF2 = secondResponse[0].config.startDate;

			if (startDateF1 != null)
				startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);
			if (startDateF2 != null)
				startDateF2 = new Date(startDateF2.split("-")[1] + "-" + startDateF2.split("-")[0] + "-" + startDateF2.split("-")[2]);

			$('#legendfalse').addClass("active");
			$('#legendtrue').removeClass("active");

			chart.w.config.title.text = title;


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
			var getFormatResult1 = getFormat(secondResponse[0].config.dataFormat);

			chartDbFontSize = response[0].config.chartSize;
			fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], chartDbFontSize);
			markerSize = checkActiveChartMarker($("#chartMarker").find(".active")[0], response[0].config.chartshowMarkes);
			showGrid = checkActiveChartGrid($("#gridOptions").find(".active")[0], response[0].config.chartShowgrid)
			showLegend = checkActiveChartLegend($("#gridLegend").find(".active")[0], showLegend);

			var dbchartType1 = response[0].config.chartType;
			chartType1 = (getChartType(dbchartType1)[0] != 'area') ? getChartType(dbchartType1)[0] : 'line';

			var dbchartType2 = secondResponse[0].config.chartType;
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
				    secondResponse[0].graphResponseDTOLst
				        .map(item => item.y)
				        .filter(y => y != null && !isNaN(y))
				);
			max2 = Math.max.apply(
				    null,
				    secondResponse[0].graphResponseDTOLst
				        .map(item => item.y)
				        .filter(y => y != null && !isNaN(y))
				);
		
			graphService = typeof graphService != 'undefined' ? graphService : '';

	      const axis = calculateYAxisRangeFromMinMax(min1, max1, 6, 5);
        calculatedMin = axis.min;
        calculatedMax = axis.max; 	
	     
	     const values2 = addMarginToMinMax(min2, max2, 5);
	     var valueMin2 = values2;
	     var valueMax2 = values2; 	
	    
	     calculatedMinValue2 =  Math.sign(min2)==-1 ? -Math.abs(min2)-valueMin2 : Math.abs(min2)-valueMin2;
	     calculatedMinValue2 =  (Math.sign(calculatedMinValue2) == -1 && !(Math.sign(min2)==-1) )? 0: calculatedMinValue2;


		 var yaxisformat0 = getFormat(response[0].config.yAxisFormat);
		 var yAxisFormat1 = getFormat(secondResponse[0].config.yAxisFormat);

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
				strokeWidth1 = getDynamicWidth(secondResponse[0].graphResponseDTOLst.filter(item => item.y !== null && item.y !== '').length);
			}

			let seriesArray = [{
				name: response[0].config != null ? (response[0].config.displayDescription == null ? '' : response[0].config.displayDescription) : '',
				type: 'column',
				data: data0,
				strokeWidth: strokeWidth
			}, {
				name: secondResponse[0].config != null ? (secondResponse[0].config.displayDescription == null ? '' : secondResponse[0].config.displayDescription) : '',
				type: 'line',
				data: secondResponse[0].graphResponseDTOLst,
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
			let isMaxItems1 = response[0].graphResponseDTOLst.filter(function(item) {
	            return item.ismax === "1";
	        });
	        const lastValidIndex = response[0].graphResponseDTOLst.reduce((last, point, i) => {
	            return isValidValue(point.y) ? i : last;
	        }, -1);
			const state = isMaxItems1.length > 0 ? isMaxItems1[0].factor.toString() : "final";

			let colorArray =  [
                function({ dataPointIndex }) {
                    return dataPointIndex === lastValidIndex
                        ? stateColors[state]
                        : '#ffc000';
                },
                '#ff0000'
            ];

             const dateOptions = {
	            month: 'short',
	            year: '2-digit'
	        };
            var fomartedXAnnotation = "";
	        var offsetYValue1 = 05;
	
	        if (isMaxItems1.length > 0) {
	            fomartedXAnnotation = new Date(isMaxItems1[0].x)
	                .toLocaleDateString('en-US', dateOptions)
	                .replace(/ /g, '-')
	                .replace(',', '');
	        }
	        let value1 = isMaxItems1.length > 0 ? isMaxItems1[0].y : null;
	
	        if (value1 != null) {

			    value1 = Number(value1);
			
			    if (!isNaN(value1)) {
			        if (getFormatResult0[1]) {
			            value1 = value1.toFixed(getFormatResult0[0]);
			        } else {
			            value1 = value1.toFixed(getFormatResult0[0]) + "%";
			        }
			    }
			
			}
	        
			let annotationsArray = {
                yaxis: [{
                    y: 0,
                    borderColor: '#ffc000'
                }],
                points: isMaxItems1.length > 0 ? [{
                    x: fomartedXAnnotation,
                    y: isMaxItems1[0].y,
                    marker: {
                        size: 0,
                        fillColor: "#ffffff00",
                        strokeColor: "#FF00FF",
                        radius: 0
                    },
                    label: {
                        borderColor: "#ffffff00",
                        offsetY: offsetYValue1,
                        offsetX: 30,
                        style: {
                            color: "#FF00FF",
                            background: "#00000000"
                        },
                        text: toTitleCase(
                            isMaxItems1[0].factor.toString() + ' ' +
                            (Number(value1) > 0 ? '+' : '') + value1 +"K"
                        )
                    }
                }] : []
            };
            
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
				annotations:annotationsArray

			});

			disableChartFont(false);
			$('#overlayChart').hide();

			$("#mainChart-title").empty();

            $("#mainChart-title").html(
				'<div id="title-image" style="position:absolute;top: 5px;left:25%;height:60px;background: #172568;" class="title-style">' +
				'<img height="50" class="pr-2" src="' + getCountryImagePath("77")[0] + '">' +
				'<span style="color:white;font-weight:bold;">US Monthly </span>' +
				'<span style="color:#ffd400;font-weight:bold;">Nonfarm Payrolls </span>  ' +
				'<span style="color:white;font-weight:bold;"> vs </span>' +
				'<span style="color:red;font-weight:bold;">UNEMPLOYMENT RATE</span>' +
				'</div>'
			  );
			


    }).fail(function(e) {
        console.log("ERROR : ", e);
        $('#overlayChart').hide();
    });

    $("#dateFrom-mainChart").val(formatedDate(fromdate));
    $("#dateTo-mainChart").val(formatedDate(todate));
}