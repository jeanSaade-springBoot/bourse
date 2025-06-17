const checkedItemCountPerChart = {};      // chartId → count
const checkedItemIdsPerChart = {};        // chartId → array of IDs
const livePriceCache = {};
let cachedTrendlineResult = null;
let liveSubscription = null;
let selectedLiveCurrency = 'BTC'; // default

const checkboxOptions = [
	{ label: "OPENint", index: 7 },
	{ label: "HIGH", index: 3 },
	{ label: "LOW", index: 4 },
	{ label: "CLOSEint", index: 8 },
	{ label: "VOLUME", index: 5 },
	{ label: "MARKETCAP", index: 6 },
	{ label: "OPENeur", index: 1 },
	{ label: "CLOSEeur", index: 2 },
];
var chartHeight=625;
const screenName='CryptosAnalisys';
const graphName='CryptosAnalisys';
const graphService = "cryptos";
const removeEmpty = true;
	
const chartItemLimits = {
  1: 2, // Chart 1: allow 2 items
  2: 1  // Chart 2: allow 1 item
};
var dropDownCryptosource = [{ name: "BITCOIN", groupId: "71", ticker: "BTC" },
	{ name: "ETHEREUM", groupId: "72", ticker: "ETH" },
	{ name: "SOLANA", groupId: "73", ticker: "SOL" },
	{ name: "SHIBA INU", groupId: "74", ticker: "SHIB" },
	{ name: "BINANCE COIN", groupId: "75", ticker: "BNB" },
	{ name: "XRP", groupId: "76", ticker: "XRP" }];

const dropDownBenchmarkSource = [
    { name: "BTC/ETH", groupId: "71-72", ticker: "BTC-ETH", crypto: "BTC" },
    { name: "BTC/SOL", groupId: "71-73", ticker: "BTC-SOL", crypto: "BTC" },
    { name: "BTC/BNB", groupId: "71-75", ticker: "BTC-BNB", crypto: "BTC" },
    { name: "BTC/XRP", groupId: "71-76", ticker: "BTC-XRP", crypto: "BTC" },
    { name: "BTC/1mSHIB", groupId: "71-74", ticker: "BTC-1mSHIB", crypto: "BTC" },

    { name: "ETH/SOL", groupId: "72-73", ticker: "ETH-SOL", crypto: "ETH" },
    { name: "ETH/BNB", groupId: "72-75", ticker: "ETH-BNB", crypto: "ETH" },
    { name: "ETH/XRP", groupId: "72-76", ticker: "ETH-XRP", crypto: "ETH" },
    { name: "ETH/1mSHIB", groupId: "72-74", ticker: "ETH-1mSHIB", crypto: "ETH" },

    { name: "SOL/BNB", groupId: "73-75", ticker: "SOL-BNB", crypto: "SOL" },
    { name: "SOL/XRP", groupId: "73-76", ticker: "SOL-XRP", crypto: "SOL" },
    { name: "SOL/1mSHIB", groupId: "73-74", ticker: "SOL-1mSHIB", crypto: "SOL" },

    { name: "BNB/XRP", groupId: "75-76", ticker: "BNB-XRP", crypto: "BNB" },
    { name: "BNB/1mSHIB", groupId: "75-74", ticker: "BNB-1mSHIB", crypto: "BNB" },

    { name: "XRP/1mSHIB", groupId: "76-74", ticker: "XRP-1mSHIB", crypto: "XRP" }
];
	
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#container-wrapper').show();
});

$(document).ready(function() {

	if (timeRange == "Daily") {
		$('#trendlineButtons').css('min-height', '71.1px');
		monthDate = new Date();
		monthDate.setMonth(monthDate.getMonth() - 4);
		monthDate.setHours(0, 0, 0, 0);

		$('#DailyData-btn').addClass('active');
		$('#4HoursData-btn').removeClass('active');
		$('#weeklyData-btn').removeClass('active');
		
		$("#groupOfPeriod-chart1").jqxButtonGroup({theme: 'dark', mode: 'radio' });
		$('#groupOfPeriod-chart1').jqxButtonGroup('setSelection', 0);
		initializeTypes();
		
		$('#functionOptionsMenu').addClass("d-flex");
		$('#functionOptionsMenu').removeClass("d-none");
		$('#euroTime').addClass("d-flex");
		$('#euroTime').removeClass("d-none");
	}
	else
		if (timeRange == "4h") {
			monthDate = new Date();
			monthDate.setDate(monthDate.getDate() - 21);
			// monthDate.setFullYear((new Date).getFullYear() - 3);
			monthDate.setHours(0, 0, 0, 0);

			$('#4HoursData-btn').addClass('active');
			$('#DailyData-btn').removeClass('active');
			$('#weeklyData-btn').removeClass('active');

			$('#functionOptionsMenu').removeClass("d-flex");
			$('#functionOptionsMenu').addClass("d-none");
			$('#euroTime').addClass("d-none");
			$('#euroTime').removeClass("d-flex");

		} else
			if (timeRange == "1w") {

				monthDate = new Date();
				monthDate.setMonth(monthDate.getMonth() - 6);
				// monthDate.setFullYear((new Date).getFullYear() - 3);
				monthDate.setHours(0, 0, 0, 0);

				$('#4HoursData-btn').removeClass('active');
				$('#DailyData-btn').removeClass('active');
				$('#weeklyData-btn').addClass('active');

				$('#functionOptionsMenu').removeClass("d-flex");
				$('#functionOptionsMenu').addClass("d-none");
				$('#euroTime').addClass("d-none");
				$('#euroTime').removeClass("d-flex");

			}

		$("#addTrendLine").jqxButton({ theme: 'dark', height: 30, width: 140 });
		$("#addRetracement").jqxButton({ theme: 'dark', height: 30, width: 140 });
		$("#addRelevant").jqxButton({ theme: 'dark', height: 30, width: 140 });
	
		$("#addTrendLine").click(function() {
			graph_trendlines = results.filter(obj => obj.graphId === checkedItemid[0]);
			if (graph_trendlines.length == 0 || graph_trendlines[0].trendlines.length < 3) {
				initiateTrendLine(true);
	
			} else {
				$('#alertLimitation-modal').modal('show');
				$("#alertTextLimitation").empty();
				$("#alertTextLimitation").append("<p> Maximum reached: You cannot draw more than 3 trendlines. </p>");
			}
		});
	
		$("#addRetracement").click(function() {
	
			if (retracement.length < 2)
				initiateRetracement(true);
			else {
				$('#alertLimitation-modal').modal('show');
				$("#alertTextLimitation").empty();
				$("#alertTextLimitation").append("<p> Maximum reached: You cannot draw more than 2 retracement. </p>");
			}
	
		});
	
		$("#addRelevant").click(function() {
	
			if (relevant.length < 5)
				initiateRelevant(true);
			else {
				$('#alertLimitation-modal').modal('show');
				$("#alertTextLimitation").empty();
				$("#alertTextLimitation").append("<p> Maximum reached: You cannot draw more than 5 relevant. </p>");
			}
	
		});

		initializeShowFilterButtonForChart('1');
		initializeShowFilterButtonForChart('2');
		
		initializeCandlesOptions(71);
		initializeFunctions(71)
		
		//CryptosAnalisys
		
		initializeCryptoOptions();
		// getTrendLinesHistory();
		 getDataChart3();
		initializeOrderBookForCrypto("BTC");
});
 $("#groupOfPeriod-chart1").on('buttonclick', function (event) {
	        updateFunctionBasedOnSelectedPeriod($('#groupOfPeriod-chart1').jqxButtonGroup('getSelection'));         
		    resetActiveChartType();
			resetActiveFontSize();
			resetActiveChartColor();
			resetActiveChartColorTransparency();
			resetActiveChartGrid();
			drawGraphForChart(1);
	  });	
 
function buildCheckboxGroup(groupId, chartId) {
	const container = document.createElement('div');
	container.className = 'col d-flex justify-content-between mb-2';
	container.id = `crypto-${groupId}-chart-${chartId}`;

	checkboxOptions.forEach(opt => {
		const checkboxDiv = document.createElement('div');
		checkboxDiv.className = 'jqx-checkbox';
		checkboxDiv.style.float = 'left';
		checkboxDiv.style.marginRight = '10px';
		checkboxDiv.id = `jqxCheckBox-${groupId}-${opt.index}-chart-${chartId}`;
		checkboxDiv.innerText = opt.label;

		container.appendChild(checkboxDiv);
	});

	return container;
}

function renderCheckboxesPerChart(cryptoGroupId, chartCount = 2) {
	for (let chartId = 1; chartId <= chartCount; chartId++) {
		const container = document.getElementById(`checkboxes-container-chart-${chartId}`);
		container.innerHTML = '';

		const checkboxGroup = buildCheckboxGroup(cryptoGroupId, chartId);
		container.appendChild(checkboxGroup);

		const allItems = checkboxOptions.map(opt =>
			`#jqxCheckBox-${cryptoGroupId}-${opt.index}-chart-${chartId}`
		);
		
		const itemLimit = chartItemLimits[chartId] || 1; // default to 1 if not defined
		initializeItemsPerChart(allItems, itemLimit, chartId);

		if (chartId == 1) {
			allItems.forEach(id => {
				if (id.includes('-5-') || id.includes('-8-')) {
					$(id).jqxCheckBox('check');
				}
			});
			drawGraphForChart(chartId);
		}
		if (chartId == 2) {
			allItems.forEach(id => {
				if (id.includes('-8-')) {
					$(id).jqxCheckBox('check');
				}
			});
			drawGraphForChart(chartId);
		}

		initializeClearFilterButtonForChart(chartId, allItems);
	}
}

function initializeItemsPerChart(allItems, numberOfItems, chartId) {
	checkedItemCountPerChart[chartId] = 0;
	checkedItemIdsPerChart[chartId] = [];

	// Initialize jqxCheckBox for each item
	for (let i = 0; i < allItems.length; i++) {
		$(allItems[i]).jqxCheckBox({ theme: 'dark', width: '100%', height: 26 });
	}

	$(`#checkboxes-container-chart-${chartId} .jqx-checkbox`).on('change', function(event) {
		const $checkbox = $(this);
		const checked = event.args.checked;
		const checkboxId = $checkbox.attr('id');

		if (checkedItemCountPerChart[chartId] < 0)
			checkedItemCountPerChart[chartId] = 0;

		if (checked) {
			checkedItemCountPerChart[chartId]++;
			checkedItemIdsPerChart[chartId].push("#" + checkboxId);
		} else {
			checkedItemCountPerChart[chartId]--;
			checkedItemIdsPerChart[chartId] = checkedItemIdsPerChart[chartId].filter(id => id !== "#" + checkboxId);
		}

		if (checkedItemCountPerChart[chartId] >= numberOfItems) {
			allItems.forEach(id => $(id).jqxCheckBox({ disabled: true }));
			checkedItemIdsPerChart[chartId].forEach(id => $(id).jqxCheckBox({ disabled: false }));

			if ($('#dropDownFunctions').length) {
				$("#dropDownFunctions").jqxDropDownList({ disabled: true });
			}
		} else {
			allItems.forEach(id => $(id).jqxCheckBox({ disabled: false }));
			if ($('#dropDownFunctions').length) {
				$("#dropDownFunctions").jqxDropDownList({ disabled: false });
			}
		}
	});
}
function getCheckedItems(chartId) {
	return checkedItemIdsPerChart[chartId] || [];
}

function getCheckedCount(chartId) {
	return checkedItemCountPerChart[chartId] || 0;
}

function initializeCryptoOptions() {


	var Optionsource =
	{
		datatype: "json",
		datafields: [
			{ name: 'name' },
			{ name: 'groupId' }
		],
		localdata: dropDownCryptosource,
		async: true
	};

	var functionDataAdapter = new $.jqx.dataAdapter(Optionsource);
	$("#dropDownCryptoOptions").jqxDropDownList({ dropDownHeight: 200, selectedIndex: 0, source: functionDataAdapter, placeHolder: "", displayMember: "name", valueMember: "groupId", theme: 'dark', width: 150, height: 25 });

	$('#dropDownCryptoOptions').on('change', function(event) {
		const selectedGroupId = $('#dropDownCryptoOptions').val();
		const selected = dropDownCryptosource.find(c => c.groupId === selectedGroupId);
		
	    const selectedTicker = selected.ticker;
			updatePairDropdown(selectedTicker);
			
		if (!selected) return;
	
		selectedLiveCurrency = selected.ticker; // <-- Update live currency
	
		renderCheckboxesPerChart(selectedGroupId);
		initializeCandlesOptions(Number(selectedGroupId));
	
		if (selectedGroupId === '71' || selectedGroupId === '73') {
			$("#order-book").addClass("d-block").removeClass("d-none");
			$('#mainChart').css('max-width', '600px');
		} else {
			$("#order-book").addClass("d-none").removeClass("d-block");
			$('#mainChart').css('max-width', '1100px');
		}
	
		dropDownCryptosource.forEach(c => {
			$('#crypto-' + c.groupId.toUpperCase().replace(/\s/g, '')).removeClass("d-flex").addClass("d-none");
		});
		$("#Clearfilter").trigger('click');
		$('#crypto-' + selectedGroupId).addClass("d-flex").removeClass("d-none");
	
		// ✅ Use updated currency ticker
		updateLiveSubscription(selectedLiveCurrency);
		initializeOrderBookForCrypto(selectedTicker);
		
		$("#dropDownCandleOptionsContainer").removeClass("d-flex").addClass("d-none");
	    $("#dropDownCandleOptions").removeClass("d-block").addClass("d-none");
		toggleGraphData(1);
	});

	renderCheckboxesPerChart($("#dropDownCryptoOptions").val());

}

$('#myDraggableModal').on('shown.bs.modal', function() {
	$(this).find('.modal-dialog').draggable({
		handle: ".modal-header"
	});
	$('body').removeClass('modal-open').css('overflow', 'auto');
});

const scrollContainer = document.querySelector('.drag-scroll');
let scrollInterval = null;

// Scroll function
function startScroll(direction = 'right') {
	stopScroll(); // safety clear any running interval
	scrollInterval = setInterval(() => {
		scrollContainer.scrollBy({
			left: direction === 'right' ? 10 : -10,
			behavior: 'auto'
		});
	}, 16); // ~60fps smooth scroll
}

// Stop function
function stopScroll() {
	if (scrollInterval) {
		clearInterval(scrollInterval);
		scrollInterval = null;
	}
}
function initializeShowFilterButtonForChart(chartId) {
	$(`#show-chart-${chartId}`).jqxButton({ theme: 'dark', height: 30, width: 100 });

	$(`#show-chart-${chartId}`).click(function() {
		functionId = -1;
		monthDate = new Date();

		if (timeRange === "Daily") {
			monthDate.setMonth(monthDate.getMonth() - 4);
		} else if (timeRange === "4h") {
			monthDate.setDate(monthDate.getDate() - 21);
		} else if (timeRange === "1w") {
			monthDate.setMonth(monthDate.getMonth() - 6);
		}
		monthDate.setHours(0, 0, 0, 0);

		resetActiveChartType();
		resetActiveFontSize();
		resetActiveChartColor();
		resetActiveChartColorTransparency();
		resetActiveChartGrid();

		$("#button-monthBackward").prop('disabled', false);
		$("#button-yearBackward").prop('disabled', false);
		fromNavigation = false;

		if (getCheckedCount(chartId) > 0) {
			$("#collapseFilter").removeClass('show');
			$('#grid-content').css('display', 'block');
			drawGraphForChart(chartId);
		} else {
			$('#alertFiltter-modal').modal('show');
			$("#collapseFilter").addClass('show');
		}
	});
}
function initializeClearFilterButtonForChart(chartId, allItems) {
	$(`#clear-filter-chart-${chartId}`).jqxButton({ theme: 'dark', height: 30, width: 100 });

	$(`#clear-filter-chart-${chartId}`).click(function() {
		// Uncheck all checkboxes for this chart
		for (let i = 0; i < allItems.length; i++) {
			$(allItems[i]).jqxCheckBox('uncheck');
			$(allItems[i]).jqxCheckBox({ disabled: false });
		}

		// Reset the checked item count for this chart
		checkedItemPerChart[chartId] = 0;
	});
}
function drawGraphForChart(chartId) {

	const checkItems = getCheckedItems(chartId);
	if (chartId == 1) {
		getDataChart1(checkItems);
	}
	else
	if (chartId == 2) {
		getDataChart2(checkItems);
		
	}
	else
	if (chartId == 3) {
		getDataChart3();
		
	}
}
function getDataChart1(checkedItemIds) {

	$("#candlestick-chart1").removeClass('active');

	const chartId = '1';
	const manager = new ChartManager(`chart${chartId}`, options, `#crypto${chartId}-container`);


	const timeRange = getActiveTimeRange();
	const fromDate = new Date();
	
	if (timeRange === "Daily") {
		fromDate.setMonth(fromDate.getMonth() - 4);
	} else if (timeRange === "4h") {
		fromDate.setDate(fromDate.getDate() - 21);
	} else if (timeRange === "1w") {
		fromDate.setMonth(fromDate.getMonth() - 6);
	}
	fromDate.setHours(0, 0, 0, 0);

	// 👉 Set state before render to avoid override
	manager.state.defaultFromDate = fromDate;
	manager.state.defaultToDate = new Date(); // Today

	// Now render with correct defaults in place
	manager.render();
    
    
	// Gather metadata with IDs
	const metadataList = checkedItemIds.map(fullId => {
		const cleanId = fullId.replace(`-chart-${chartId}`, '');
		return itemValue[cleanId];
	}).filter(Boolean);
	
	if (metadataList.length === 0) {
		console.error("At least one valid series is required.");
		return;
	}
	const sorted = [...metadataList];
    
	const from = document.getElementById(`dateFrom-chart${chartId}`).value;
	const to = document.getElementById(`dateTo-chart${chartId}`).value;
    let  period = getChartPeriod();
    
	const params = {
		fromdate: from,
		todate: to,
		period: period,
		type: '3'
	};

	// If two items, apply preferred order logic (5 or 6 last)
	
	if (sorted.length === 2 && (sorted[0].subGroupId === '5' || sorted[0].subGroupId === '6')) {
		[sorted[0], sorted[1]] = [sorted[1], sorted[0]]; // swap
	}
	
	// Build dynamic param structure
	sorted.forEach((meta, index) => {
		params[`subGroupId${index + 1}`] = meta.subGroupId;
		params[`groupId${index + 1}`] = meta.GroupId;
		params[`removeEmpty${index + 1}`] = false;
	});
	const functionId = getSelectedFunctionId(); // returns -1 if none selected
	
	const isFunctionLine = functionId === 1 || functionId === 2;
    const isFunctionAreaColumn = [3, 4, 5, 6, 10, 11, 12, 13, 14].includes(functionId);
	const isFunctionLineColumn = [7,8,9].includes(functionId);
	if (functionId != -1) {
	  params[`functionId`] = functionId ;
	  params[`isFunctionGraph`] = true;
	}else{
	  params[`isFunctionGraph`] = false;
	}
	// Dynamic series config
	const has5or6 = sorted.some(m => m.subGroupId === '5' || m.subGroupId === '6');
	let isCentred = [false];
	let applyTransparency=false;
	if (functionId !== -1) {
	  if (isFunctionLine) {
	    seriesTypes = ['line', 'line'];
	    isCentred.push(false);
	  } else if (isFunctionAreaColumn) {
	    seriesTypes = ['area', 'column'];
	    isCentred.push(true);
	  }  else if (isFunctionLineColumn) {
	    seriesTypes = ['line', 'column'];
	    isCentred.push(false);
	  }
	} else 
	  {
		if (metadataList.length > 1) {
		  seriesTypes = sorted.map(m =>
		    m.subGroupId === '5' || m.subGroupId === '6' ? 'column' : 'line'
		  );
		  applyTransparency=true;
		}
		else{
			seriesTypes=[];
		}
		isCentred.push(false);
	 }
	let seriesColors = [];

	if (functionId === 1) {
	  seriesColors = ['#ffffff', '#FF0000'];
	} else if (functionId === 2) {
	  seriesColors = ['#ffffff', '#ffa4c5'];
	} else if ([3, 4, 5, 6, 10, 11, 12, 13, 14].includes(functionId)) {
	  seriesColors = ['#ffffff', '#ffa4c5'];
	  applyTransparency=true;
	} else if ([7,8,9].includes(functionId)) {
	  seriesColors = ['#ffffff', '#0cb1e6'];
	}else if (metadataList.length > 1) {
	  seriesColors = sorted.map((m, i) => {
	    if (i === 1) {
	      return has5or6 ? 'rgba(240, 171, 46, 0.5)' : '#0000ff'; // Yellow or blue based on condition
	    }
	    return '#ffffff'; // Default
	  });
	}
	let useDualYAxis = (
	  (functionId !== 1 && functionId !== 2 && functionId !== -1) ||
	  (sorted.length === 2 && has5or6)
	);
	const useShortFormatList = sorted.map(m => (m.subGroupId === '5' || m.subGroupId === '6'));
	
	const disableMarkers = (functionId === 1 || functionId === 2) ? true : false;
	
	let api = '';
	if (timeRange == "Daily")
		api = "/cryptos/getgraphdatabytype";
	else {
		api = "/cryptos/getgraphdatainterval";
		params[`todate`]= to+' 23:59:59';
	}
	// Load chart
	manager.loadData({
	    service: "cryptos",
		api: api,
		name: "BTC-vs-ETH",
		removeEmpty: false,
		saveHistory: false,
		applyDb: true,
		seriesTypes,
		seriesColors,
		useDualYAxis,
		dataParam: params,
		useShortFormatList,
		interval: timeRange,
		applyTransparency: applyTransparency,
		disableMarkers:disableMarkers,
		isCentred:isCentred,
		currency:selectedLiveCurrency
	});
}
function getDataChart2(checkedItemIds) {

	const chartId = '2';
	const manager = new ChartManager(`chart${chartId}`, options, `#crypto${chartId}-container`);

	const timeRange = getActiveTimeRange();
	const fromDate = new Date();
	
	
	fromDate.setMonth(fromDate.getMonth() - 6);
	fromDate.setHours(0, 0, 0, 0);

	manager.state.defaultFromDate = fromDate;
	manager.state.defaultToDate = new Date(); // Today

	manager.render();
    
    
	const metadataList = checkedItemIds.map(fullId => {
		const cleanId = fullId.replace(`-chart-${chartId}`, '');
		return itemValue[cleanId];
	}).filter(Boolean);
	
	if (metadataList.length === 0) {
		console.error("At least one valid series is required.");
		return;
	}
	const sorted = [...metadataList];
    
	const from = document.getElementById(`dateFrom-chart${chartId}`).value;
	const to = document.getElementById(`dateTo-chart${chartId}`).value;
    let  period = getChartPeriod();
    
	const params = {
		fromdate: from,
		todate: to,
		period: period,
		type: '3'
	};

	sorted.forEach((meta, index) => {
		params[`subGroupId${index + 1}`] = meta.subGroupId;
		params[`groupId${index + 1}`] = meta.GroupId;
		params[`removeEmpty${index + 1}`] = false;
	});
	

	loadGraphWithTrendlines(screenName, 'chart2',params)
}
function getDataChart3() {

	const chartId = '3';
	const manager = new ChartManager(`chart${chartId}`, options, `#crypto${chartId}-container`);

	const fromDate = new Date();
	
	fromDate.setMonth(fromDate.getMonth() - 6);
	fromDate.setHours(0, 0, 0, 0);

	manager.state.defaultFromDate = fromDate;
	manager.state.defaultToDate = new Date();

	manager.render().then(() => {
		// $("#chart-settings-chart3").append(`<div id="pairDropdown" class="ml-2"></div>`); 
		   
			// Initial load with first ticker
			const defaultTicker = dropDownCryptosource[0].ticker;
			updatePairDropdown(defaultTicker);

			updateBenchmarkingGraph(chartId,manager);
			
			$('#pairDropdown').on('change', function(event) {
				var args = event.args;
				if (args) {
					updateBenchmarkingGraph(chartId,manager);
				}
			});
			
		});
  
}
	
function updatePairDropdown(ticker) {
	    const filteredPairs = dropDownBenchmarkSource
	        .filter(pair => pair.name.includes(ticker))
	        .map(pair => ({
	            label: pair.name,
	            value: pair.groupId
	        }));
	
	    $("#pairDropdown").jqxDropDownList({
	        source: filteredPairs,
	        width: 100,
	        height: 30,
	        theme: 'dark',
	        selectedIndex:0
	    });
}
function updateBenchmarkingGraph(chartId,manager){
	const from = document.getElementById(`dateFrom-chart${chartId}`).value;
			const to = document.getElementById(`dateTo-chart${chartId}`).value;
		    let  period = getChartPeriod();
		    
			const params = {
				fromdate: from,
				todate: to,
				period: period,
				type: '3'
			};
		    const selectedPairs = $("#pairDropdown").val().split('-');
		    
			params[`subGroupId1`] = '8';
			params[`groupId1`] = selectedPairs[0];
			params[`subGroupId2`] = '8';
			params[`groupId2`] =  selectedPairs[1];
			params[`removeEmpty1`] = false;
			
			let api =  "/cryptos/getgraphdatabenchmarking";
		    let titleA = dropDownCryptosource.find(c => c.groupId === params[`groupId1`]).name;
		    let titleB = dropDownCryptosource.find(c => c.groupId === params[`groupId2`]).name;
		    let ticker =  dropDownCryptosource.find(c => c.groupId === params[`groupId2`]).ticker
			let graphTitle = `1 ${titleA} / X ${titleB} RATIO`;
			manager.loadData({
			    service: "cryptos",
				api: api,
				name: graphTitle,
				applyTitle:true,
				removeEmpty: false,
				saveHistory: false,
				applyDb: true,
				dataParam: params,
				showLegend:false,
				currency:selectedLiveCurrency
			}).then(() => {
				$(`#arrows-container`).empty().append(`<div class="arrows">
								  <div>
								    <div><img src='/img/icon/green-arrow.svg' width='30' class='arrow'></div>
								    <div class="label-green text-center mt-1">CHEAP ${ticker}</div>
								  </div>
								  <div class="mt-2">
								    <div class="label-red text-center mb-1">EXPENSIVE ${ticker}</div>
								    <div><img src='/img/icon/red-arrow.svg' width='30' class='arrow'></div>
								  </div>
								</div>`); 
								manager.disableChartGroup('gridLegend');
									
						  });
	
	
}
async function loadGraphWithTrendlines(screenName, chartId, dataParam) {
	try {
		
		if (!cachedTrendlineResult) {
			cachedTrendlineResult = await getTrendLinesHistoryAsync(screenName);
		}

		
		ChartManager.instances[chartId].loadDataWithOverlays({
			service: "cryptos",
			api: "/cryptos/getgraphdatabytype",
			name: "Technical Chart",
			removeEmpty: true,
			saveHistory: true,
			dataParam,
			result: cachedTrendlineResult,
			currency:selectedLiveCurrency
		});
	} catch (err) {
		console.error("Error loading trendlines + technical chart:", err);
	}
}
// Attach events for Right button
const rightBtn = document.getElementById('scrollRightBtn');
rightBtn.addEventListener('mousedown', () => startScroll('right'));
rightBtn.addEventListener('mouseup', stopScroll);
rightBtn.addEventListener('mouseleave', stopScroll);

// Attach events for Left button
const leftBtn = document.getElementById('scrollLeftBtn');
leftBtn.addEventListener('mousedown', () => startScroll('left'));
leftBtn.addEventListener('mouseup', stopScroll);
leftBtn.addEventListener('mouseleave', stopScroll);

function toggleGraphData(time) {
	// Temporarily suppress dropdown event if it's connected
	$("#dropDownCandleOptions").jqxDropDownList({ selectedIndex: -1 });
	suppressDropDownChange = true;
	setTimeout(() => suppressDropDownChange = false, 50);

	// Update timeRange based on selection
	if (time === 1) {
		timeRange = "Daily";
		$('#trendlineButtons').css('min-height', '71.1px');
	} else if (time === 2) {
		timeRange = "4h";
		$('#trendlineButtons').css('min-height', '34px');
	} else {
		timeRange = "1w";
		$('#trendlineButtons').css('min-height', '34px');
		
	}

	// 🔄 Reset from-date field dynamically
	const fromDateInput = document.getElementById('dateFrom-chart1');
	const toDateInput = document.getElementById('dateTo-chart1');


	// Check if candlestick is active for chart1
	const candlestickBtn = document.getElementById('candlestick-chart1');
	const isCandleActive = candlestickBtn?.classList.contains('active');


	const date = new Date();
	if (timeRange === "Daily") {
		date.setMonth(date.getMonth() - 4);
	} else if (timeRange === "4h") {
		date.setDate(date.getDate() - 21);
	} else if (timeRange === "1w") {
		date.setMonth(date.getMonth() - 6);
	}
	date.setHours(0, 0, 0, 0);

	if (fromDateInput) {
		fromDateInput.value = date.toISOString().split('T')[0];
	}
	if (toDateInput) {
		const today = new Date();
		toDateInput.value = today.toISOString().split('T')[0];
	}

	// 🔘 Update button active states
	$('#DailyData-btn').toggleClass('active', time === 1);
	$('#4HoursData-btn').toggleClass('active', time === 2);
	$('#weeklyData-btn').toggleClass('active', time === 3);

	if (timeRange === "4h") {
		if (isCandleActive) {
			$("#dropDownCandleOptionsContainer").removeClass("d-none").addClass("d-flex");
			$("#dropDownCandleOptions").removeClass("d-none").addClass("d-block");
		} else {
			$("#dropDownCandleOptionsContainer").removeClass("d-flex").addClass("d-none");
			$("#dropDownCandleOptions").removeClass("d-block").addClass("d-none");
		}

		$('#functionOptionsMenu').removeClass("d-flex").addClass("d-none");
		$('#euroTime').removeClass("d-flex").addClass("d-none");
	} else if(timeRange === "Daily"){
		$("#dropDownCandleOptionsContainer").removeClass("d-flex").addClass("d-none");
		$('#functionOptionsMenu').addClass("d-flex").removeClass("d-none");
		$('#euroTime').addClass("d-flex").removeClass("d-none");
	}
	else
		if(timeRange === "1w"){
		$('#functionOptionsMenu').removeClass("d-flex").addClass("d-none");

	}


	if (isCandleActive) {
		// Trigger candlestick re-render explicitly
		ChartManager.instances['chart1']?.loadCandlestickData(); // ✅ No toggle — just reload
	} else {
		// ⏺️ Reset functionId & redraw chart normally
		functionId = -1;
		drawGraphForChart(1);
	}

}
function getSelectedFunctionId() {
  const dropdown = $("#dropDownFunctions").jqxDropDownList('getSelectedItem');
  return dropdown && dropdown.value !== null ? parseInt(dropdown.value) : -1;
}
function getActiveTimeRange() {
	if ($('#DailyData-btn').hasClass('active')) return 'Daily';
	if ($('#4HoursData-btn').hasClass('active')) return '4h';
	if ($('#weeklyData-btn').hasClass('active')) return '1w';
	return null; // if none is active
}

function initializeCandlesOptions(groupId) {

	var dropDownOptionsource = [
		{
			"name": "VOLUME",
			"value": "5"
		},
		{
			"name": "FUNDING RATE",
			"value": "funding_rate"
		}];
	var Optionsource =
	{
		datatype: "json",
		datafields: [
			{ name: 'name' },
			{ name: 'value' }
		],
		localdata: dropDownOptionsource,
		async: true
	};

	var functionDataAdapter = new $.jqx.dataAdapter(Optionsource);
	$("#dropDownCandleOptions").jqxDropDownList({ dropDownHeight: 80, 
	source: functionDataAdapter,
	 placeHolder: "", 
	 displayMember: "name", 
	 valueMember: "value", 
	 theme: 'dark', 
	 width: 120, 
	 height: 40 });
	$("#resetOptions").click(function() {
		suppressDropDownChange = true;

		$("#dropDownCandleOptions").jqxDropDownList({ selectedIndex: -1 });

		// Reset the array manually without triggering the handler
		dropDownCandleOptions = [];

		ChartManager.instances['chart1']?.loadCandlestickData();

		setTimeout(() => suppressDropDownChange = false, 50);
	});

	$('#dropDownCandleOptions').on('change', function(event) {
		if (suppressDropDownChange) {
			return; // Skip the handler if we're suppressing it
		}

		var args = event.args;
		if (args) {
			var index = args.index;
			const subGroupId = $('#dropDownCandleOptions').val();

			if (subGroupId === '')
				dropDownCandleOptions = [];
			else
				dropDownCandleOptions = [groupId, subGroupId];

			ChartManager.instances['chart1']?.loadCandlestickData();
		}
	});

}

function initializeFunctions(groupId){

	var functionSource =
	{
		datatype: "json",
		datafields: [
			{ name: 'id' },
			{ name: 'description' }
		],
		url: '/admin/getfunctions/' + groupId,
		async: true
	};

	var functionDataAdapter = new $.jqx.dataAdapter(functionSource);
	$("#dropDownFunctions").jqxDropDownList({ dropDownHeight: 480, source: functionDataAdapter, placeHolder: "Select a Function", displayMember: "description", valueMember: "id", theme: 'dark', width: 180, height: 25 });
	$("#reset").click(function() {
		functionId = -1;
		$("#dropDownFunctions").jqxDropDownList({ selectedIndex: -1 });
	});


	$('#dropDownFunctions').on('change', function(event) {
		var args = event.args;
		if (args) {
			functionId = parseInt($('#dropDownFunctions').val()) - 1;
			drawGraphForChart(1);
		}
	});
}

function getChartPeriod() {
    let period = 'd'; // Default value

    if ($('#groupOfPeriod-chart1').length) {
        const selectedOption = $('#groupOfPeriod-chart1').jqxButtonGroup('getSelection');
        if (selectedOption === -1) { // Check if no selection is made
            $('#groupOfPeriod-chart1').jqxButtonGroup('setSelection', 0); // Set default selection
        }
        period = getChartPeriodCode(selectedOption) || 'd';
    } else {
		if ($('#groupOfPeriod-chart1').length) {
		    $('#groupOfPeriod-chart1').jqxButtonGroup('setSelection', 0);
		}   
		 }

    return period;
}
function updateLiveSubscription(currency) {
    if (liveSubscription && typeof liveSubscription.unsubscribe === 'function') {
        liveSubscription.unsubscribe();
    }
    liveSubscription = addSubscription(`/all/chart/${currency}`, function (message) {
        ChartManager.handleLiveUpdate(currency, message);
    });
}
function addSubscription(channel, callback) {
	return stompClient.subscribe(channel, callback); // if using Stomp.js
}
document.addEventListener('DOMContentLoaded', function () {
	connectWebSocket();
	updateLiveSubscription(selectedLiveCurrency);
});