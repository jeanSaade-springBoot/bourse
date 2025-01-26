var allitems = [
	'#jqxCheckBoxManuf',
	'#jqxCheckBoxService',
];
var json = {};
var dataGroupId = '';
var groupContainer = '';
var subgroup1Container = '';
var subgroup2Container = '';

var roundedValues = '';
var yaxisformat0 = '';

const graphName = "macroGraph";

$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {

	initializeNewsBanner();
	initializeNavigationButtons();
	initialiazeItems(allitems, 2);
	initialiazeClearFilterButtons(allitems);
	getLatestDate().then(date => {
	    getGraphHistoryByScreenName("macroBarGraph");
	});
	$("#show").jqxButton({ theme: 'dark', height: 30, width: 74 });

	
    
	$("#show").click(function() {
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
		if (checkedItem > 0) {
			$("#collapseFilter").removeClass('show');
			$('#grid-content').css('display', 'block');
			drawGraph();
		} else {
			$('#alertFiltter-modal').modal('show');
			$("#collapseFilter").addClass('show');
		}
	});

});
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

function initialiazeClearFilterButtons(items) {

	$("#clearfilter").jqxButton({ theme: 'dark', height: 30, width: 74 });

	$("#clearfilter").click(function() {
		uncheckAllItems(items);
		checkedItem = 0;
		for (i = 0; i < items.length; i++) {
			$(items[i]).jqxCheckBox({ disabled: false });
		}
	});
}
function uncheckAllItems(items) {
	for (var i = 0; i < items.length; i++) {
		$(items[i]).jqxCheckBox({ checked: false });
	}
}
function drawGraph() {

	var graphService = "macro";
	const removeEmpty = false;
	macroGraph(graphService, "macroBarGraph", removeEmpty, true);
}
function getLatestDate() {
    return fetch('/macro/get-macro-latest-date', {
        method: 'GET',
        async: true,
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        date = new Date(data[0].referDate);
        return date; // Return the date for further use
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}
function macroGraph(graphService, graphName, removeEmpty, saveHistory) {
    
    var fromdate = formatDate(date);
			var dbDate = formatDateIntoDbDate(date);
			const checkedItemValues = checkedItemid.filter(item => item != null);
			let requestData;
			if (checkedItemValues.length == 2) {
				requestData = [{
					subGroupId1: '1',
					fromdate: dbDate
				}, {
					subGroupId1: '2',
					fromdate: dbDate
				}
				];
			} else {
				requestData = [{
					subGroupId1: checkedItemValues[0] == '#jqxCheckBoxManuf' ? '1' : '2',
					fromdate: dbDate
				}
				];
			}

			fetch('/macro/getgraphbardata', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(requestData)
			})
				.then(response => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then(data => {
					// Handle the response data here
					if (checkedItem == 2) {
						$("#mainChart").addClass("d-none");
						$("#timeline-chart").removeClass("d-none");
						let json1 = {};
						json1.data = data[0].values;
						json1.labels = data[0].labels;
						const result = getColorsAndImagesForLabels(json1.labels);
						json1.colors = result.colors;
						json1.images = result.images;
						json1.title = 'Manufacturing PMI by COUNTRY';
						json1.chartId = 'SubChart1';
						json1.width = 515;
						const options1 = getGraphOptions(json1);
						if (chart1 != null) {
							chart1.updateOptions(options1);
						}
						else {
							chart1 = new ApexCharts(document.querySelector("#SubChart1"), options1);
							chart1.render().then(function() {
								addGridBackground("SubChart1");
							});
						}

						let json2 = {};
						json2.data = data[1].values;
						json2.labels = data[1].labels;
						const result2 = getColorsAndImagesForLabels(json2.labels);
						json2.colors = result2.colors;
						json2.images = result2.images;
						json2.title = 'Services PMI by COUNTRY';
						json2.chartId = 'SubChart2';
						json2.width = 515;
						const options2 = getGraphOptions(json2);
						if (chart2 != null) {
							chart2.updateOptions(options2);
						}
						else {
							chart2 = new ApexCharts(document.querySelector("#SubChart2"), options2);
							chart2.render().then(function() {
								addGridBackground("SubChart2");
							});
						}


					}
					else {
						$("#mainChart").removeClass("d-none");
						$("#timeline-chart").addClass("d-none");
						json.data = data[0].values;
						json.labels = data[0].labels;
						const result = getColorsAndImagesForLabels(json.labels);
						json.colors = result.colors;
						json.images = result.images;
						json.title = checkedItemValues[0] == '#jqxCheckBoxManuf' ? 'Manufacturing PMI by COUNTRY' : 'Services PMI by COUNTRY';
						json.chartId = 'mainChart';
						json.width = 1078;
						const options = getGraphOptions(json);
						if (chart != null) {
							chart.updateOptions(options);
						}
						else {
							chart = new ApexCharts(document.querySelector("#mainChart"), options);
							chart.render().then(function() {
								addGridBackground("mainChart");
							});
						}
					}
					$("#dateFrom-mainChart").val(formatedDate(fromdate));
				})
				.catch(error => {
					// Handle errors here
					console.error('There was a problem with the fetch operation:', error);
				});
	(saveHistory) ? saveGraphHistory(graphName, checkedItemid, null, null) : null;


}
function getGraphOptions(json) {
	const options = {
		series: [{
			data: json.data
		}],
		line:{
			show: true,
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
		chart: {
			type: 'bar',
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
			width: json.width,
			events: {
				updated: function() {
					addGridBackground(json.chartId);
				}
			},
			animations: {
				enabled: true,
				easing: 'easeinout',
				speed: 800,
			}
		},
		hasImages:{
			Images: json.images
		},
		plotOptions: {
			bar: {
				barHeight: '60%',
				distributed: true,
				horizontal: true,
				dataLabels: {
					position: 'bottom'
				},
			}
		},
		colors: json.colors,
		dataLabels: {
			textAnchor: 'start',
			enabled: false,
			style: {
				colors: ['#fff']
			},
			offsetX: 0,
			dropShadow: {
				enabled: true
			}
		},
		stroke: {
			width: 1,
			colors: ['#fff']
		},
		xaxis: {
			categories: json.labels,
			labels: {
				show: false
			}
		},
		yaxis: {
			labels: {
				show: true
			},
			max: 100
		},
		title: {
			text: json.title,
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
			margin: 0,
			offsetX: -50,
			offsetY: 30,
			floating: false,
			style: {
				fontSize: '10px',
				fontWeight: 'normal',
				color: '#9699a2'
			},
		},
		tooltip: {
			theme: 'dark',
			x: {
				show: false
			},
			y: {
				title: {
					formatter: function() {
						return ''
					}
				}
			}
		},

		legend: {
			show: false,
		}
	};
	return options;
}
function formatedDate(inputDate) {
	const [year, month] = inputDate.split('-');
	const monthAbbreviation = new Date(inputDate).toLocaleString('en-US', { month: 'short' }).toUpperCase();
	const yearLastTwoDigits = year.slice(-2);

	return monthAbbreviation + '-' + yearLastTwoDigits;
}

function getColorsAndImagesForLabels(labels) {
	// Create maps from labels to colors and images
	const labelColorMap = {
		'india': '#deb285',
		'spain': '#ffff00',
		'china': '#ff1f00',
		'U.S.A': '#2f5597',
		'japan': '#adb9ca',
		'United Kingdom': '#4472c4',
		'italy': '#00b050',
		'eurozone': '#0000ff',
		'france': '#0070c0',
		'germany': '#ffc000'
	};

	const labelImageMap = {
		'india': '/img/flag/india.png',
		'spain': '/img/flag/spain.png',
		'china': '/img/flag/china.png',
		'U.S.A': '/img/flag/united-states.png',
		'japan': '/img/flag/japan.png',
		'United Kingdom': '/img/flag/united-kingdom.png',
		'italy': '/img/flag/italy.png',
		'eurozone': '/img/flag/eu.png',
		'france': '/img/flag/france.png',
		'germany': '/img/flag/germany.png'
	};

	// Create arrays to store the colors and images in the same order as the provided labels
	const resultColors = labels.map(label => labelColorMap[label]);
	const resultImages = labels.map(label => labelImageMap[label]);

	return {
		colors: resultColors,
		images: resultImages
	};
}
function navigationBarGraph(condition) {
	fromNavigation = true;
	const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
		"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
	];

	const startDates = [startDateF1, startDateF2, startDateF3, startDateF4, startDateF5, startDateF6];
	let dateUpdated = false;

	function updateDateAndCheckLimits(newDate) {
		for (const startDate of startDates) {
			if (startDate != null && newDate <= startDate) {
				$(`#button-${condition}`).prop('disabled', true);
				$('#startdatetext').empty();
				$('#startdatetext').append(`No data available before ${monthNames[startDate.getMonth()]} ${startDate.getFullYear()}`);
				$('#alertStartDate-modal').modal('show');
				return false;
			}
		}
		date = newDate;
		dateUpdated = true;
		return true;
	}

	if (condition === "yearBackward") {
		const newDate = new Date(date);
		newDate.setFullYear(date.getFullYear() - 1);
		if (!updateDateAndCheckLimits(newDate)) return;
	} else if (condition === "monthBackward") {
		const newDate = new Date(date);
		newDate.setMonth(date.getMonth() - 1);
		if (!updateDateAndCheckLimits(newDate)) return;
	} else if (condition === "monthForward") {
		const newDate = new Date(date);
		newDate.setMonth(date.getMonth() + 1);
		date = newDate;
		dateUpdated = true;
	} else if (condition === "yearForward") {
		const newDate = new Date(date);
		newDate.setFullYear(date.getFullYear() + 1);
		date = newDate;
		dateUpdated = true;
	}

	if (dateUpdated) {
		if (mode === "merge") {
			drawGraph();
		} else {
			splitGraph();
		}

		if (checkDateMonth(date, new Date())) {
			$("#button-monthForward").prop('disabled', false);
		} else {
			$("#button-monthForward").prop('disabled', true);
		}

		if (checkDateYear(date, new Date())) {
			$("#button-yearForward").prop('disabled', false);
		} else {
			$("#button-yearForward").prop('disabled', true);
		}
	}
}
function formatDateIntoDbDate(date) {
	let day = date.getDate();
	let month = date.getMonth() + 1;  // Months are zero-based, so we add 1
	let year = date.getFullYear();

	// Pad day and month with leading zeros if necessary
	day = day < 10 ? '0' + day : day;
	month = month < 10 ? '0' + month : month;

	return `${day}-${month}-${year}`;
}

