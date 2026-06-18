var allitems = [
	'#jqxCheckBox-6-1', // 
	'#jqxCheckBoxCopper', // 
	'#jqxCheckBoxOil',
	'#jqxCheckBoxBaltic',
	'#jqxCheckBoxCorn',
	'#jqxCheckBoxAll'
];

let isRanked = false;

const labelImageMap = {
    'CLOSE_GOLD-6': '/img/gold.png',
    'PLATINUM-6': '/img/platinum.png',
    'CLOSE_SILVER-6': '/img/silver.png',
    'PLATINUM_GOLD-6': '/img/plat-gold.png',
    'GOLD_SILVER-6': '/img/gold-silver.png',

    'COPPER-7': '/img/copper.png',
    'ALUMINUM-7': '/img/aluminum.png',
    'STEEL-7': '/img/steel.png',
    'LUMBER-7': '/img/lumber.png',

    'CORN-8': '/img/corn.png',
    'SUGAR-8': '/img/sugar.png',
    'WHEAT-8': '/img/wheat.png',

    'OIL-9': '/img/oil.png',
    'GASOLINE_LITRE-9': '/img/gazoline_20.png',
    'DIESEL_TON-9': '/img/diezel_ton.png',
    'NATGAS_USD-9': '/img/natgasUs.png',
    'NATGAS_EUR-9': '/img/natgasEur.png',
 	'BRENT_OIL-9': '/img/brentOil.png',
  
    'BALTIC-10': '/img/baltic.png',
    'CONTAINER-10': '/img/container.png',
};

const titleGroupMap = {
		'6': 'GOLD Performance',
		'7': 'BASE Performance',
		'8': 'FOODSTUFF Performance',
		'9': 'ENERGY Performance',
		'10':'TRANSPORTATION Performance',
		};
		
const configData = [
	// groupId = 6 (GOLD Performance)
	{
		columnName: '6:CLOSE_GOLD',
		displayName: 'Gold',
		groupId: '6',
		columnGroupId: 'GOLD-6'
	},
	{
		columnName: '6:PLATINUM',
		displayName: 'Platinum',
		groupId: '6',
		columnGroupId: 'PLATINUM-6'
	},
	{
		columnName: '6:CLOSE_SILVER',
		displayName: 'Silver',
		groupId: '6',
		columnGroupId: 'SILVER-6'
	},
	{
		columnName: '6:PLATINUM_GOLD',
		displayName: 'PLAT-GOLD sprd',
		groupId: '6',
		columnGroupId: 'PLAT-GOLD-6'
	},
	{
		columnName: '6:GOLD_SILVER',
		displayName: 'GOLD/SILV ratio',
		groupId: '6',
		columnGroupId: 'GOLD_SILVER-6'
	},

	// groupId = 7 (BASE Performance)
	{
		columnName: '7:COPPER',
		displayName: 'Copper',
		groupId: '7',
		columnGroupId: 'COPPER-7'
	},
	{
		columnName: '7:ALUMINUM',
		displayName: 'Aluminum',
		groupId: '7',
		columnGroupId: 'ALUMINUM-7'
	},
	{
		columnName: '7:STEEL',
		displayName: 'Steel',
		groupId: '7',
		columnGroupId: 'STEEL-7'
	},
	{
		columnName: '7:LUMBER',
		displayName: 'Lumber',
		groupId: '7',
		columnGroupId: 'LUMBER-7'
	},

	// groupId = 8 (FOODSTUFF Performance)
	{
		columnName: '8:CORN',
		displayName: 'Corn',
		groupId: '8',
		columnGroupId: 'CORN-8'
	},
	{
		columnName: '8:SUGAR',
		displayName: 'Sugar',
		groupId: '8',
		columnGroupId: 'SUGAR-8'
	},
	{
		columnName: '8:WHEAT',
		displayName: 'Wheat',
		groupId: '8',
		columnGroupId: 'WHEAT-8'
	},

	// groupId = 9 (ENERGY Performance)
	{
		columnName: '9:OIL',
		displayName: 'CRUDE OIL',
		groupId: '9',
		columnGroupId: 'OIL-9'
	},
	{
		columnName: '9:GASOLINE_LITRE',
		displayName: 'US GAS-20L',
		groupId: '9',
		columnGroupId: 'GASOLINE_LITRE-9'
	},
	{
		columnName: '9:DIESEL_TON',
		displayName: 'DIESEL/Ton',
		groupId: '9',
		columnGroupId: 'DIESEL_TON-9'
	},
	{
		columnName: '9:NATGAS_USD',
		displayName: 'US NATGAS',
		groupId: '9',
		columnGroupId: 'NATGAS_USD-9'
	},
	{
		columnName: '9:NATGAS_EUR',
		displayName: 'EUROZONE NATGAS',
		groupId: '9',
		columnGroupId: 'NATGAS_EUR-9'
	},
	{
		columnName: '9:BRENT_OIL',
		displayName: 'BRENT OIL',
		groupId: '9',
		columnGroupId: 'BRENT_OIL-9'
	},
	// groupId = 10 (TRANSPORTATION Performance)
	{
		columnName: '10:BALTIC',
		displayName: 'BALTIC DRY INDEX',
		groupId: '10',
		columnGroupId: 'BALTIC-10'
	},
	{
		columnName: '10:CONTAINER',
		displayName: '40ft Container',
		groupId: '10',
		columnGroupId: 'CONTAINER-10'
	}
];

		
var json = {};
var dataGroupId = '';
var groupContainer = '';
var subgroup1Container = '';
var subgroup2Container = '';

var roundedValues = '';
var yaxisformat0 = '';

var selectedItems = []; // Array to store checked items in order

const graphName = "performanceGraphCommos";

var monthDate = new Date();
monthDate.setMonth(monthDate.getMonth() - 6);

$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	
	const flatTreeData = [];
	const addedGroups = {};
	
   $("#dateInputFrom").jqxDateTimeInput({  theme:'dark', width: '150px', height: '25px'});
   $("#dateInputFrom").jqxDateTimeInput('setDate', monthDate);
   $("#dateInputTo").jqxDateTimeInput({  theme:'dark', width: '150px', height: '25px' }); 
   
   $("#rangeDateContainer").hide()
		 
// Build flat tree structure from configData
configData.forEach((item, index) => {
    const groupId = item.groupId;
	const groupTitle = (titleGroupMap[groupId] || `Group ${groupId}`).replace(' Performance', '');
    const icon = labelImageMap[item.columnGroupId] || '/img/flag/default.png';

    // Add group root only once
    if (!addedGroups[groupId]) {
        flatTreeData.push({
            id: `group-${groupId}`,
            parentid: "-1",
            text: groupTitle,
            icon: "/img/group.png"  // optional group icon
        });
        addedGroups[groupId] = true;
    }

    // Add item under group
    flatTreeData.push({
        id: `item-${index}`,
        parentid: `group-${groupId}`,
        text: item.displayName,
        value: item.columnName,
        icon: icon
    });
});


 // Wait until after rendering
	$("#toggleRankBtn").on('click', function () {
	    isRanked = !isRanked;
	
	    // Toggle active style (simulate radio button)
	    $(this).toggleClass('active', isRanked);
	
	    // Redraw the graph
	    drawGraph();
	    $("#toggleRankBtn").text(isRanked ? "Unrank" : "Rank");
	});
	
	
	
    // jqxDropDownList with checkboxes
    $("#dropDownSelection").on('checkChange', function (event) {
        var itemValue = event.args.item.value;
        var isChecked = event.args.checked;

        if (isChecked) {
            // Add the checked item to the array if not already there
            if (!selectedItems.includes(itemValue)) {
                selectedItems.push(itemValue);
            }
        } else {
            // Remove the unchecked item from the array
            selectedItems = selectedItems.filter(item => item !== itemValue);
        }

    });

	initializeNewsBanner();
	initializeNavigationButtons();
	initialiazeItems(allitems, 1);
	initialiazeClearFilterButtons(allitems);
	getLatestDate().then(date => {
	    getGraphHistoryByScreenName("performanceGraphCommos");
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
	
	
	$('#performanceGroupOfPeriod').on('selected', async function() {

		const isRangeMode =
			$('#performanceGroupOfPeriod')
				.jqxButtonGroup('getSelection') === 5;

		if (isRangeMode) {

			$("#rangeDateContainer").show();

			$("#prev-btn").hide();
			$("#next-btn").hide();
			$("#date-display").hide();

			const checkedItemValues =
				checkedItemid.filter(item => item != null);

			let subgroupId = 1; // fallback

			if (
				checkedItemValues.length > 0 &&
				checkedItemValues[0] !== "#jqxCheckBoxAll"
			) {
				subgroupId =
					itemValue[checkedItemValues[0]].subGroupId;
			}

			const latestDate =
				await getLatestRangeDate(subgroupId);

			// Set TO date
			$("#dateInputTo")
				.jqxDateTimeInput('setDate', latestDate);

			// Default FROM = 1 year before
			const fromDate = new Date(latestDate);
			fromDate.setFullYear(
				fromDate.getFullYear() - 1
			);

			$("#dateInputFrom")
				.jqxDateTimeInput('setDate', fromDate);

		} else {

			$("#rangeDateContainer").hide();

			$("#prev-btn").show();
			$("#next-btn").show();
			$("#date-display").show();
		}

		drawGraph();
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
	 $('.jqx-checkbox').on('change', function (event) {
		     const checkedItemValues = checkedItemid.filter(item => item != null);
		     if(checkedItemValues[0]!="#jqxCheckBoxAll")
		    { 
			  
			  groupIdToFilter= itemValue[checkedItemValues[0]].GroupId;
		 
		      	filteredData = configData.filter(item => item.groupId === groupIdToFilter);
		     }
		     else
		       {
				  
				   filteredData = configData;
				}
		    $("#dropDownSelection").jqxDropDownList({
		        source: filteredData,  // Bind the filtered data
		        displayMember: "displayName",  // Display name for each item
		        valueMember: "columnName"  // Value associated with each item
		    });
		     selectedItems=[];
		     $("#dropDownSelection").clear();
		   
		    
	 });
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

function drawGraph() {

	var graphService = "macro";
	const removeEmpty = false;
	performanceGraph(graphService, "performanceGraphCommos", removeEmpty, true);
}

function getImagePath(label) {
    return labelImageMap[label] || '/img/flag/default.png';
}

function initialiazeClearFilterButtons(items) {
    $("#clearfilter").hide();
	$("#clearfilter").jqxButton({ theme: 'dark', height: 30, width: 74 });

	$("#clearfilter").click(function() {
		uncheckAllItems(items);
		checkedItem = 0;
		for (i = 0; i < items.length; i++) {
			$(items[i]).jqxCheckBox({ disabled: false });
		}
		resetDate();
	});
	
	$("#dropDownSelection").jqxDropDownList('clear'); 
}
function uncheckAllItems(items) {
	for (var i = 0; i < items.length; i++) {
		$(items[i]).jqxCheckBox({ checked: false });
	}
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
    
    if(groupColumnPairs =='') return 650;
    if (count < 15) return 525;
    if (count >= 15 && count <= 20) return 755;
    return 1075; // More than 20
}
async function performanceGraph(graphService, graphName, removeEmpty, saveHistory) {
    try {
        showLoader();

        var fromdate = formatDate(date);
        var dbDate = formatDateIntoDbDate(date);
        $("#date-display").val(formatDate());

        const checkedItemValues = checkedItemid.filter(item => item != null);
        const checkedItems = selectedItems.join(', ');
        const dropDownItems = $('#dropDownSelection').val();

        const isRangeMode =
            $('#performanceGroupOfPeriod')
                .jqxButtonGroup('getSelection') === 5;

        if (getChartPeriodPerformance() === 'w' && !isRangeMode) {
            fromdate = 'Week ' + getISOWeekNumber(date);
        }

        const period = isRangeMode
            ? 'r'
            : getChartPeriodPerformance();

        const fromDate = isRangeMode
            ? getFormattedJqxDate("#dateInputFrom")
            : dbDate;

        const toDate = isRangeMode
            ? getFormattedJqxDate("#dateInputTo")
            : null;

        let groupId1;

        if (checkedItemid[0] === "#jqxCheckBoxAll") {

            groupId1 = configData
                .map(item => item.columnName)
                .join(", ");

        } else if (checkedItems !== '') {

            groupId1 = checkedItems;

        } else {

            groupId1 =
                (
                    checkedItemValues.length > 0 &&
                    itemValue &&
                    itemValue[checkedItemValues[0]]
                )
                    ? itemValue[checkedItemValues[0]].GroupId
                    : '';
        }

        const requestData = [{
            groupId1: groupId1,
            period: period,
            fromdate: fromDate,
            todate: toDate,
            fulldates: false
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

        const data = await response.json();

        $("#mainChart").removeClass("d-none");
        $("#timeline-chart").addClass("d-none");

        let min = Math.min(...data[0].values);
        let max = Math.max(...data[0].values);

        const normalizeAndFilter = (labels, values) => {

            return labels
                .map((label, index) => ({
                    label: label.trim().replace(/\s*-\s*/g, '-'),
                    value: values[index]
                }))
                .filter(item => {

                    // Only filter extra OHLC for Group 6
                    if (item.label.endsWith('-6')) {

                        return ![
                            'OPEN_GOLD',
                            'HIGH_GOLD',
                            'LOW_GOLD',
                            'OPEN_SILVER',
                            'HIGH_SILVER',
                            'LOW_SILVER'
                        ].some(field =>
                            item.label.includes(field)
                        );
                    }

                    return true;
                });
        };

        const mapDisplayName = (label) => {

            let cleanedLabel = label
                .replace('CLOSE_GOLD', 'GOLD')
                .replace('CLOSE_SILVER', 'SILVER')
                .replace('PLATINUM_GOLD', 'PLAT-GOLD');

            const matchedItem = configData.find(
                item => item.columnGroupId === cleanedLabel
            );

            return matchedItem
                ? matchedItem.displayName
                : cleanedLabel;
        };

        if (dropDownItems) {

            const orderResult = reorderDataWithLabels(
                data[0].labels.map(label =>
                    label.trim().replace(/\s*-\s*/g, '-')
                ),
                data[0].values,
                selectedItems.map(label =>
                    label.split(':')[1] +
                    '-' +
                    label.split(':')[0]
                )
            );

            if (isRanked) {

                const combined = orderResult.labels.map((label, i) => ({
                    label,
                    value: orderResult.data[i]
                }));

                combined.sort((a, b) => b.value - a.value);

                orderResult.labels =
                    combined.map(item => item.label);

                orderResult.data =
                    combined.map(item => item.value);
            }

            const filteredItems = normalizeAndFilter(
                orderResult.labels,
                orderResult.data
            );

            json.data =
                filteredItems.map(item => item.value);

            json.labels =
                filteredItems.map(item =>
                    mapDisplayName(item.label)
                );

            const result =
                getColorsAndImagesForLabels(
                    filteredItems.map(item => item.label)
                );

            json.images = result.images;

            min = Math.min(...json.data);
            max = Math.max(...json.data);

        } else {

            let labels = data[0].labels;
            let values = data[0].values;

            if (isRanked) {

                const combined = labels.map((label, i) => ({
                    label,
                    value: values[i]
                }));

                combined.sort((a, b) => b.value - a.value);

                labels =
                    combined.map(item => item.label);

                values =
                    combined.map(item => item.value);
            }

            const filteredItems =
                normalizeAndFilter(labels, values);

            json.data =
                filteredItems.map(item => item.value);

            json.labels =
                filteredItems.map(item =>
                    mapDisplayName(item.label)
                );

            const result =
                getColorsAndImagesForLabels(
                    filteredItems.map(item => item.label)
                );

            json.images = result.images;

            min = Math.min(...json.data);
            max = Math.max(...json.data);
        }

        let titlePrefix =
            'Commos Performance';

        if (
            typeof itemValue !== 'undefined' &&
            checkedItemValues.length > 0 &&
            checkedItems === '' &&
            checkedItemid[0] !== "#jqxCheckBoxDollarIndex" &&
            checkedItemid[0] !== "#jqxCheckBoxAll" &&
            itemValue &&
            itemValue[checkedItemValues[0]]
        ) {

            titlePrefix =
                titleGroupMap[
                    itemValue[
                        checkedItemValues[0]
                    ].GroupId
                ] ||
                'Commos Performance';
        }

        if (isRangeMode) {

            const fromDateTitle =
                formatDateForTitle(
                    getFormattedJqxDate("#dateInputFrom")
                );

            const toDateTitle =
                formatDateForTitle(
                    getFormattedJqxDate("#dateInputTo")
                );

            json.title =
                `${titlePrefix} (${fromDateTitle} → ${toDateTitle})`;

        } else {

            json.title =
                `${titlePrefix} In ${fromdate}`;
        }

        json.chartId = 'mainChart';
        json.width = 1078;

        json.height =
            (checkedItemid[0] == "#jqxCheckBoxDollarIndex")
                ? 825
                : (
                    checkedItems != '' ||
                    checkedItemid[0] == "#jqxCheckBoxAll"
                )
                    ? getHeightBasedOnCount(
                        dropDownItems == ''
                            ? checkedItems
                            : dropDownItems
                    )
                    : 525;

        const valueMin =
            addMarginToMinMax(min, max, 20);

        const valueMax =
            addMarginToMinMax(min, max, 15);

        json.min = min;
        json.max = max;

        json.valueMin =
            Math.sign(min) == -1
                ? -Math.abs(min) - valueMin
                : 0;

        json.valueMax =
            Math.sign(max) == -1
                ? 0
                : Math.abs(max) + valueMax;

        const options =
            getGraphOptions(json);

        if (chart != null) {

            chart.updateOptions(options);

        } else {

            chart =
                new ApexCharts(
                    document.querySelector("#mainChart"),
                    options
                );

            await chart.render();
            addGridBackground("mainChart");
        }

        $("#dateFrom-mainChart")
            .val(formatedDate(fromdate));

    } catch (error) {

        console.error(
            "There was a problem with the fetch operation:",
            error
        );

    } finally {

        hideLoader();
    }

    if (saveHistory) {

        if (
            checkedItemid[0] !=
            "#jqxCheckBoxAll"
        ) {

            saveGraphHistory(
                graphName,
                checkedItemid,
                null,
                null
            );
        }
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
		series: [{
			data: json.data
		}],
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
                from: -1000,
                to: 0,
                color: '#f23a3a'
              }, {
                from: 0,
                to: 1000,
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
					return  val.split("-")[0];
						      
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
function getFormattedJqxDate(selector) {
    const date = $(selector).jqxDateTimeInput('getDate');

    if (!date) return null;

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

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
function getISOWeekNumber(date) {
    const tempDate = new Date(date);
    
    // Set the date to the Thursday in the current week
    tempDate.setDate(tempDate.getDate() + 4 - (tempDate.getDay() || 7));
    
    // Get the first day of the year
    const yearStart = new Date(tempDate.getFullYear(), 0, 1);
    
    // Calculate the ISO week number
    const weekNumber = Math.ceil(((tempDate - yearStart) / 86400000 + 1) / 7);
    return weekNumber;
}

function reorderDataWithLabels(originalLabels, originalData, desiredOrder) {
    // Create a map of labels to their corresponding data values
    let dataMap = {};
    for (let i = 0; i < originalLabels.length; i++) {
        dataMap[originalLabels[i]] = originalData[i];
    }

    // Reorder the labels and data based on the desired order
    let reorderedLabels = [];
    let reorderedData = [];

    for (let label of desiredOrder) {
        if (dataMap.hasOwnProperty(label)) {
            reorderedLabels.push(label);
            reorderedData.push(dataMap[label]);
        }
    }

    return {
        labels: reorderedLabels,
        data: reorderedData
    };
}

async function getLatestRangeDate(subgroupId) {
    try {
        const response =
            await fetch(`/sti/getlatest/${subgroupId}`);

        if (!response.ok) {
            throw new Error(
                "Failed to fetch latest date"
            );
        }

        const latestDate =
            await response.text();

        // API format: yyyy-MM-dd
        const [year, month, day] =
            latestDate.trim().split('-');

        return new Date(
            Number(year),
            Number(month) - 1,
            Number(day)
        );

    } catch (error) {
        console.error(error);

        return new Date(); // fallback
    }
}

function formatDateForTitle(dateStr) {
    if (!dateStr) return '';

    const [day, month, year] =
        dateStr.split('-');

    const date =
        new Date(year, month - 1, day);

    return date.toLocaleDateString(
        "en-GB",
        {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        }
    );
}