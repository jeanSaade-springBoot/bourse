var allitems = [
	'#jqxCheckBox-71-1', // europe
	'#jqxCheckBox-72-1', // wallstreet
	'#jqxCheckBox-73-1', //asia
	'#jqxCheckBox-74-1', // emerging
	'#jqxCheckBox-75-1',
	'#jqxCheckBox-76-1',
];
const labelImageMap = {
	};
const titleGroupMap = {
		'71': 'BITCOIN Performance',
		'72': 'ETHEREUM Performance',
		'73': 'SOLANA Performance',
		'74': 'SHIBA INU Performance',
		'75': 'BINANCE COIN Performance',
		'76': 'XRP Performance',
		};
		
		
var json = {};
var dataGroupId = '';
var groupContainer = '';
var subgroup1Container = '';
var subgroup2Container = '';

var roundedValues = '';
var yaxisformat0 = '';

const graphName = "cryptosPerformanceGraph";
const configData =[
  { "columnName": "71:openeur", "displayName": "OPENEUR - BITCOIN", "groupid": "71", "columnGroupId": "openeur-71" },
  { "columnName": "71:closeeur", "displayName": "CLOSEEUR - BITCOIN", "groupid": "71", "columnGroupId": "closeeur-71" },
  { "columnName": "71:high", "displayName": "HIGH - BITCOIN", "groupid": "71", "columnGroupId": "high-71" },
  { "columnName": "71:low", "displayName": "LOW - BITCOIN", "groupid": "71", "columnGroupId": "low-71" },
  { "columnName": "71:volume", "displayName": "VOLUME - BITCOIN", "groupid": "71", "columnGroupId": "volume-71" },
  { "columnName": "71:marketcap", "displayName": "MARKETCAP - BITCOIN", "groupid": "71", "columnGroupId": "marketcap-71" },
  { "columnName": "71:openint", "displayName": "OPENINT - BITCOIN", "groupid": "71", "columnGroupId": "openint-71" },
  { "columnName": "71:closeint", "displayName": "CLOSEINT - BITCOIN", "groupid": "71", "columnGroupId": "closeint-71" },

  { "columnName": "72:openeur", "displayName": "OPENEUR - ETHEREUM", "groupid": "72", "columnGroupId": "openeur-72" },
  { "columnName": "72:closeeur", "displayName": "CLOSEEUR - ETHEREUM", "groupid": "72", "columnGroupId": "closeeur-72" },
  { "columnName": "72:high", "displayName": "HIGH - ETHEREUM", "groupid": "72", "columnGroupId": "high-72" },
  { "columnName": "72:low", "displayName": "LOW - ETHEREUM", "groupid": "72", "columnGroupId": "low-72" },
  { "columnName": "72:volume", "displayName": "VOLUME - ETHEREUM", "groupid": "72", "columnGroupId": "volume-72" },
  { "columnName": "72:marketcap", "displayName": "MARKETCAP - ETHEREUM", "groupid": "72", "columnGroupId": "marketcap-72" },
  { "columnName": "72:openint", "displayName": "OPENINT - ETHEREUM", "groupid": "72", "columnGroupId": "openint-72" },
  { "columnName": "72:closeint", "displayName": "CLOSEINT - ETHEREUM", "groupid": "72", "columnGroupId": "closeint-72" },

  { "columnName": "73:openeur", "displayName": "OPENEUR - SOLANA", "groupid": "73", "columnGroupId": "openeur-73" },
  { "columnName": "73:closeeur", "displayName": "CLOSEEUR - SOLANA", "groupid": "73", "columnGroupId": "closeeur-73" },
  { "columnName": "73:high", "displayName": "HIGH - SOLANA", "groupid": "73", "columnGroupId": "high-73" },
  { "columnName": "73:low", "displayName": "LOW - SOLANA", "groupid": "73", "columnGroupId": "low-73" },
  { "columnName": "73:volume", "displayName": "VOLUME - SOLANA", "groupid": "73", "columnGroupId": "volume-73" },
  { "columnName": "73:marketcap", "displayName": "MARKETCAP - SOLANA", "groupid": "73", "columnGroupId": "marketcap-73" },
  { "columnName": "73:openint", "displayName": "OPENINT - SOLANA", "groupid": "73", "columnGroupId": "openint-73" },
  { "columnName": "73:closeint", "displayName": "CLOSEINT - SOLANA", "groupid": "73", "columnGroupId": "closeint-73" },

  { "columnName": "74:openeur", "displayName": "OPENEUR - SHIBA INU", "groupid": "74", "columnGroupId": "openeur-74" },
  { "columnName": "74:closeeur", "displayName": "CLOSEEUR - SHIBA INU", "groupid": "74", "columnGroupId": "closeeur-74" },
  { "columnName": "74:high", "displayName": "HIGH - SHIBA INU", "groupid": "74", "columnGroupId": "high-74" },
  { "columnName": "74:low", "displayName": "LOW - SHIBA INU", "groupid": "74", "columnGroupId": "low-74" },
  { "columnName": "74:volume", "displayName": "VOLUME - SHIBA INU", "groupid": "74", "columnGroupId": "volume-74" },
  { "columnName": "74:marketcap", "displayName": "MARKETCAP - SHIBA INU", "groupid": "74", "columnGroupId": "marketcap-74" },
  { "columnName": "74:openint", "displayName": "OPENINT - SHIBA INU", "groupid": "74", "columnGroupId": "openint-74" },
  { "columnName": "74:closeint", "displayName": "CLOSEINT - SHIBA INU", "groupid": "74", "columnGroupId": "closeint-74" },

  { "columnName": "75:openeur", "displayName": "OPENEUR - BINANCE COIN", "groupid": "75", "columnGroupId": "openeur-75" },
  { "columnName": "75:closeeur", "displayName": "CLOSEEUR - BINANCE COIN", "groupid": "75", "columnGroupId": "closeeur-75" },
  { "columnName": "75:high", "displayName": "HIGH - BINANCE COIN", "groupid": "75", "columnGroupId": "high-75" },
  { "columnName": "75:low", "displayName": "LOW - BINANCE COIN", "groupid": "75", "columnGroupId": "low-75" },
  { "columnName": "75:volume", "displayName": "VOLUME - BINANCE COIN", "groupid": "75", "columnGroupId": "volume-75" },
  { "columnName": "75:marketcap", "displayName": "MARKETCAP - BINANCE COIN", "groupid": "75", "columnGroupId": "marketcap-75" },
  { "columnName": "75:openint", "displayName": "OPENINT - BINANCE COIN", "groupid": "75", "columnGroupId": "openint-75" },
  { "columnName": "75:closeint", "displayName": "CLOSEINT - BINANCE COIN", "groupid": "75", "columnGroupId": "closeint-75" },

  { "columnName": "76:openeur", "displayName": "OPENEUR - XRP", "groupid": "76", "columnGroupId": "openeur-76" },
  { "columnName": "76:closeeur", "displayName": "CLOSEEUR - XRP", "groupid": "76", "columnGroupId": "closeeur-76" },
  { "columnName": "76:high", "displayName": "HIGH - XRP", "groupid": "76", "columnGroupId": "high-76" },
  { "columnName": "76:low", "displayName": "LOW - XRP", "groupid": "76", "columnGroupId": "low-76" },
  { "columnName": "76:volume", "displayName": "VOLUME - XRP", "groupid": "76", "columnGroupId": "volume-76" },
  { "columnName": "76:marketcap", "displayName": "MARKETCAP - XRP", "groupid": "76", "columnGroupId": "marketcap-76" },
  { "columnName": "76:openint", "displayName": "OPENINT - XRP", "groupid": "76", "columnGroupId": "openint-76" },
  { "columnName": "76:closeint", "displayName": "CLOSEINT - XRP", "groupid": "76", "columnGroupId": "closeint-76" }
]
;

$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {

	initializeNewsBanner();
	initializeNavigationButtons();
	initialiazeItems(allitems, 1);
	initialiazeClearFilterButtons(allitems);
	getLatestDate().then(date => {
	    getGraphHistoryByScreenName("cryptosPerformanceGraph");
	});
	$("#show").jqxButton({ theme: 'dark', height: 30, width: 74 });
	
	$("#performanceGroupOfPeriod").jqxButtonGroup({theme: 'dark', mode: 'radio' });
    $('#performanceGroupOfPeriod').jqxButtonGroup('setSelection', 0);
	
    
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
	$('#performanceGroupOfPeriod').on('selected', function () { 
		drawGraph()
	}); 
	$("#prev-btn").on("click", function () {
        updateDate("prev");
        updateChart();
    });

    $("#next-btn").on("click", function () {
        updateDate("next");
        updateChart();
    });


   $("#dropDownSelection").jqxDropDownList({ checkboxes: true,  theme:'dark', source: configData , selectedIndex: 0,  displayMember: "displayName", valueMember: "columnName", width: '200px', height: '35px', dropDownHeight: 400});

		// Check all items when clicking "Check All"
	var isBulkAction = false; // Flag to detect bulk actions

	// Check all items when clicking "Check All"z
	$("#checkAllBtn").on('click', function () {
	    isBulkAction = true; // Set flag to true
	    $("#dropDownSelection").jqxDropDownList('checkAll');
	      drawGraph();
	    isBulkAction = false; // Reset flag after bulk action
	});
	
	// Uncheck all items when clicking "Uncheck All"
	$("#uncheckAllBtn").on('click', function () {
	    isBulkAction = true; // Set flag to true
	    $("#dropDownSelection").jqxDropDownList('uncheckAll');
	      drawGraph();
	    isBulkAction = false; // Reset flag after bulk action
	});
	
	// Handle check change event
	$("#dropDownSelection").on('checkChange', function (event) {
	    if (isBulkAction) return; // Prevent unnecessary execution
	
	    if (event.args) {
	        var item = event.args.item;
	        if (item) {
	          drawGraph();
	        }
	    }
	});

});

function getImagePath(label) {
    return labelImageMap[label] || '/img/flag/default.png';
}

function initialiazeClearFilterButtons(items) {

	$("#clearfilter").jqxButton({ theme: 'dark', height: 30, width: 74 });

	$("#clearfilter").click(function() {
		uncheckAllItems(items);
		checkedItem = 0;
		for (i = 0; i < items.length; i++) {
			$(items[i]).jqxCheckBox({ disabled: false });
		}
		resetDate();
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
	performanceGraph(graphService, "cryptosPerformanceGraph", removeEmpty, true);
}
async function getLatestDate() {
     date = new Date();
     return date;
}
function countItems(groupColumnPairs) {
    if (!groupColumnPairs) return 0; // Handle empty string case
    return groupColumnPairs.split(',').length;
}
function getHeightBasedOnCount(groupColumnPairs) {
    const count = countItems(groupColumnPairs); // Get the count

    if (count < 10) return 525;
    if (count >= 10 && count <= 20) return 755;
    return 975; // More than 20
}
async function performanceGraph(graphService, graphName, removeEmpty, saveHistory) {
    try {
        // Show loader before making the request
        showLoader();

        var fromdate = formatDate(date);
        var dbDate = formatDateIntoDbDate(date);
        $("#date-display").val(formatDate());

        const checkedItemValues = checkedItemid.filter(item => item != null);
        
   
        var items = $("#dropDownSelection").jqxDropDownList('getCheckedItems');
        var checkedItems = items.map(i => i.value).join(", ");
            console.log(checkedItems);
         let requestData;
      if(checkedItems!='')
	        requestData = [{
			            groupId1: checkedItems,
			            period: getChartPeriodPerformance(),
			            fromdate: dbDate,
			            fulldates:false
			        }];
	        else 
		 		requestData = [{
	            groupId1: itemValue[checkedItemValues[0]].GroupId,
	            period: getChartPeriodPerformance(),
	            fromdate: dbDate,
	            fulldates:false
	        }];


        const response = await fetch('/graph/getperformancegraphdata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Wait for JSON response

        // Handle the response data here
        $("#mainChart").removeClass("d-none");
        $("#timeline-chart").addClass("d-none");
        json.series = data[0].values.length==0?[]:[{
			data: data[0].values
		}];
        json.labels = data[0].labels.map(label => {
				    const cleanedLabel = label.trim().replace(/\s*-\s*/g, '-'); // Remove extra spaces
				    const matchedItem = configData.find(item => item.columnGroupId === cleanedLabel); 
				    return matchedItem ? matchedItem.displayName : cleanedLabel; // Return displayName if found, else label
				});
				  
        const result = getColorsAndImagesForLabels(json.labels);
        json.images = result.images;
        
        if (typeof itemValue !== 'undefined' && checkedItemValues.length > 0) {
		     json.title = titleGroupMap[itemValue[checkedItemValues[0]].GroupId];

		}  if(checkedItems!='') {
		     json.title = 'Stock Market Performance';

		}
		
        json.chartId = 'mainChart';
        json.width = 1078;
        json.height=(checkedItems!='')?getHeightBasedOnCount(checkedItems):525;

        let min = Math.min(...data[0].values);
        let max = Math.max(...data[0].values);


        const valueMin = addMarginToMinMax(min, max, 20);
        const valueMax = addMarginToMinMax(min, max, 15);
        json.min = min;
        json.max = max;
        json.valueMin = Math.sign(min) == -1 ? -Math.abs(min) - valueMin : 0;
        json.valueMax = Math.sign(max) == -1 ? 0 : Math.abs(max) + valueMax;
    
        
        const options = getGraphOptions(json);
        if (chart != null) {
            chart.updateOptions(options);
        } else {
            chart = new ApexCharts(document.querySelector("#mainChart"), options);
            
            await chart.render();
			addGridBackground("mainChart");
        }

        $("#dateFrom-mainChart").val(formatedDate(fromdate));


    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    } finally {
        // Hide loader after the request is done
        hideLoader();
    }

    // Save graph history if saveHistory is true
    if (saveHistory) {
        saveGraphHistory(graphName, checkedItemid, null, null);
    }
}

// Function to show the loader
function showLoader() {
   	$('#overlayChart').show();
  // Fades in the loader
}

function hideLoader() {
  	$('#overlayChart').hide(); // Fades out the loader
}

function getGraphOptions(json) {
	const options = {
		series: json.series,
		line:{
			show: false,
		},
		barText:{
			show: true,
			percentage: true,
			fixed:2,
			width:50,
			Xpositive:-75,
			Xnegative:-80,
			backgroundOpacity:'#00000000'
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
			 animations: { enabled: false },
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
			height: json.height,
			width: json.width,
			events: {
				updated: function() {
					addGridBackground(json.chartId);
				}
			},
			
		},
		hasImages:{
			Images: json.images,
			ImageWidth:30,
			ImageHeight:30,
			ImageXPositive:10,
			ImageXnegative:37,
			ImageY:3,
		},
		plotOptions: {
          bar: {
			  colors: {
              ranges: [{
                from: -Infinity,
                to: 0,
                color: '#f23a3a'
              }, {
                from: 0,
                to: Infinity,
                color: '#30d781'
              }]
            },
            borderRadiusApplication: 'end', // 'around', 'end'
            borderRadiusWhenStacked: 'all', // 'all', 'last'
            horizontal: true,
            barHeight: '80%',
          },
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
			},
			
		},
		stroke: {
			width: 1,
			colors: ['#fff']
		},
		xaxis: {
			categories: json.labels,
			labels: {
				show: false,
				formatter: function(val, index) {
					return  val.toFixed(2) + "%";
						      
				},
			}
		},
		yaxis: {
			labels: {
				show: true,
			},
			formatter: function(val, index) {
					return  val;
						      
				},
		 	max: json.valueMax,
		 	min: json.valueMin
		 	
			
		},
		title: {
			text: json.title,
			align: 'center',
			margin: 10,
			style: {
				fontSize: '18px',
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
			  enabled: false,
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
		},
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


	// Create arrays to store the colors and images in the same order as the provided labels
	const resultColors = labels.map(label => labelColorMap[label]);
	const resultImages = labels.map(label => labelImageMap[label.replaceAll(' ', '')]);

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

let timeIndex = 0;  // Tracks which week/month/quarter/year the user is viewing

// Function to update the chart based on period and timeIndex
  function updateDate(direction) {
        let newDate = new Date(date); // Create a new date object to avoid modifying the original reference
		currentPeriod= getChartPeriodPerformance();
        if (currentPeriod === "w") {
            newDate.setDate(date.getDate() + (direction === "next" ? 7 : -7));
        } else if (currentPeriod === "m") {
            newDate.setMonth(date.getMonth() + (direction === "next" ? 1 : -1));
        } else if (currentPeriod === "q") {
            newDate.setMonth(date.getMonth() + (direction === "next" ? 3 : -3));
        } else if (currentPeriod === "y") {
            newDate.setFullYear(date.getFullYear() + (direction === "next" ? 1 : -1));
        }

        date = newDate; // Assign the updated date back to the main variable
    }

    // Function to update the chart and date display
    function updateChart() {
		
        document.getElementById("date-display").value = formatDate();
        
		drawGraph();
    }

    // Function to format the date for display
    function formatDate() {
        let options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString("en-US", options);
    }

   function resetDate() {
        date = new Date(); // Reset to today's date
        updateChart();
    }
   function formatDate() {
    let options;
    let currentPeriod= getChartPeriodPerformance();
    if (currentPeriod === "w") {
        options = { year: 'numeric', month: 'short', day: 'numeric' }; // Example: Jan 9, 2025
    } else if (currentPeriod === "m") {
        options = { year: 'numeric', month: 'short' }; // Example: Jan 2025
    } else if (currentPeriod === "q") {
        let quarter = Math.ceil((date.getMonth() + 1) / 3); // Get quarter number
        return `Q${quarter} ${date.getFullYear()}`; // Example: Q1 2025
    } else if (currentPeriod === "y") {
        options = { year: 'numeric' }; // Example: 2025
    }

    return date.toLocaleDateString("en-US", options);
}