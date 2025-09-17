const checkedItemCountPerChart = {};      // chartId → count
const checkedItemIdsPerChart = {};   
var checkedItemIdPerChart = {};

let suppressFunctionDropdownChange = false;

const livePriceCache = {};
let cachedTrendlineResult = null;
let liveSubscription = null;
let selectedLiveCurrency = 'BNB'; // default

const checkboxCache = {}; // key: `${groupId}-${chartId}` → true

const checkboxOptions = [
	{ label: "OPENint", index: 7 },
	{ label: "HIGH", index: 3 },
	{ label: "LOW", index: 4 },
	{ label: "CLOSEint", index: 8 },
	{ label: "VOLUME", index: 5 },
	{ label: "MARKETCAP", index: 6 },
	{ label: "OPENeur", index: 1 },
	{ label: "CLOSEeur", index: 2 },
	{ label: "FUNDING RATE", index: 'funding_rate' },
];
const candleStickcheckboxOptions = [
	{ label: "VOLUME", index: '5' },
	{ label: "FUNDING RATE", index: 'funding_rate' },
];
var chartHeight=625;
const screenName='CryptosAnalisys';
const graphName='CryptosAnalisys';
let graphService = "cryptos";
let mainLabel =  'Crypto';
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
	
const fullOptions = [
    { id: 20, label: "5dw MovAvg" },
    { id: 21, label: "6dw MovAvg" },
    { id: 22, label: "7dw MovAvg" },
    { id: 23, label: "9dw MovAvg" },
    { id: 24, label: "18dw MovAvg" },
    { id: 25, label: "21dw MovAvg" },
    { id: 26, label: "25dw MovAvg" },
    { id: 27, label: "30dw MovAvg" },
    { id: 28, label: "45dw MovAvg" },
    { id: 29, label: "63dw MovAvg" }
];

const dropdownIds = ['dropdown1', 'dropdown2', 'dropdown3', 'dropdown4'];
const selectedValues = {};
let isRefreshingDropdowns = false;
let isProgrammaticDropdownUpdate = false;
let isProcessingRemoteUpdate = false;

let trendfollowingDbId;


$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#container-wrapper').show();
});
document.addEventListener('updateGraphConfiguration', () => {
  updateSeriesChart(chartConfigSettings);
      
});
$(document).ready(function() {

	$('#portfolio-toggle button').on('click', function () {
		  const type = $(this).data('type');
		  const isShared = type === 'shared' ? 'true' : 'false';
		
		  // Update button styles
		  $('#portfolio-toggle button').removeClass('btn-primary').addClass('btn-secondary');
		  $(this).removeClass('btn-secondary').addClass('btn-primary');
		
		  // Replace or append the isShared parameter in the URL
		  const url = new URL(window.location.href);
		  url.searchParams.set('isShared', isShared);
		
		  // Reload page with new parameter
		  window.location.href = url.toString();
		});
	
	  $("#viewall").jqxButton({  theme:'dark', width: 110, height: 35 ,template: "primary" });
	  $("#viewall").css("display","block");
	  $("#viewall").click(function () {
		popupWindow('/bourse/allnews', 'Libvol - View All News', window, 1300, 600);
	  });

	if (timeRange == "Daily") {
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

		//initializeCandlesOptions(71);
		initializeFunctions(71);
		
		//CryptosAnalisys
		initializeCryptoOptions();
		// getTrendLinesHistory();
		 getDataChart3();
		 getDataChart1(null);
		 getDataChart2(null);
		 getDataChart4() ;

		 
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
	container.className = 'col mb-2';
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
function buildCandleStickCheckboxGroup(groupId, chartId) {
	const container = document.createElement('div');
	container.className = 'col mb-2';
	container.id = `crypto-${groupId}-chart-${chartId}`;

	// ⏱️ Filter based on timeRange
	const timeRange = getActiveTimeRange(); // 'Daily', '4h', or '1w'
	const filteredOptions = candleStickcheckboxOptions.filter(opt =>
		timeRange === '4h' || opt.index !== 'funding_rate'
	);

	filteredOptions.forEach(opt => {
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
async function renderCheckboxesChart1VolumeFundingRate(cryptoGroupId, chartId = 2) {

		const container = document.getElementById(`checkboxes-container-chart-${chartId}`);
		container.innerHTML = '';

		const checkboxGroup = buildCandleStickCheckboxGroup(cryptoGroupId, chartId);
		container.appendChild(checkboxGroup);

		const timeRange = getActiveTimeRange();
		const filteredOptions = candleStickcheckboxOptions.filter(opt =>
			timeRange === '4h' || opt.index !== 'funding_rate'
		);
		
		const allItems = filteredOptions.map(opt =>
			`#jqxCheckBox-${cryptoGroupId}-${opt.index}-chart-${chartId}`
		);
		
		const itemLimit = 1; // default to 1 if not defined
		initializeItemsPerChart(allItems, itemLimit, chartId);
		
		initializeClearFilterButtonForChart(chartId, allItems, true);
}
async function renderCheckboxesPerChart(cryptoGroupId, chartId = 2) {
	const cacheKey = `${cryptoGroupId}-${chartId}`;
	const container = document.getElementById(`checkboxes-container-chart-${chartId}`);

	// 🧠 Only build once
	if (!checkboxCache[cacheKey]) {
		
		container.innerHTML = '';

		const checkboxGroup = buildCheckboxGroup(cryptoGroupId, chartId);
		container.appendChild(checkboxGroup);

		const allItems = checkboxOptions.map(opt =>
			`#jqxCheckBox-${cryptoGroupId}-${opt.index}-chart-${chartId}`
		);

		const itemLimit = chartItemLimits[chartId] || 1;
		initializeItemsPerChart(allItems, itemLimit, chartId);

		// Pre-check logic
		if (chartId === 1) {
			allItems.forEach(id => {
				if (id.includes('-5-') || id.includes('-8-')) {
					$(id).jqxCheckBox('check');
				}
			});
		}
		if (chartId === 2) {
			allItems.forEach(id => {
				if (id.includes('-8-')) {
					$(id).jqxCheckBox('check');
				}
			});
		}

		initializeClearFilterButtonForChart(chartId, allItems, false);
		checkboxCache[cacheKey] = true; // ✅ Mark as built
	}

		if (chartId === 1) {
			const allItems = checkboxOptions.map(opt =>
				`#jqxCheckBox-${cryptoGroupId}-${opt.index}-chart-${chartId}`
			);
		
			const isCandleStick = $('#candlestick-chart1').hasClass('active');
			const timeRange = getActiveTimeRange();
		
			if (isCandleStick) {
				// Uncheck all
				allItems.forEach(id => {
					$(id).jqxCheckBox('uncheck');
				});
		
				// Show only Volume (5) and Funding Rate
				checkboxOptions.forEach(opt => {
					const id = `#jqxCheckBox-${cryptoGroupId}-${opt.index}-chart-${chartId}`;
					if (opt.index === 5 || opt.index === 'funding_rate') {
						$(id).show().jqxCheckBox({ disabled: false });
					} else {
						$(id).jqxCheckBox('uncheck');
						$(id).jqxCheckBox({ disabled: true });
						$(id).hide();
					}
				});
				 if (timeRange !== '4h')
				 $(`#jqxCheckBox-${cryptoGroupId}-funding_rate-chart-${chartId}`).hide();
			} else if (timeRange === '4h') {
				
				if (isCandleStick) {
					// Uncheck all
					allItems.forEach(id => {
						$(id).jqxCheckBox('uncheck');
					});
			
					// Show only Volume (5) and Funding Rate
					checkboxOptions.forEach(opt => {
						const id = `#jqxCheckBox-${cryptoGroupId}-${opt.index}-chart-${chartId}`;
						if (opt.index === 5 || opt.index === 'funding_rate') {
							$(id).show().jqxCheckBox({ disabled: false });
						} else {
							$(id).jqxCheckBox('uncheck');
							$(id).jqxCheckBox({ disabled: true });
							$(id).hide();
						}
					});
				}
				else{
					// Hide Euro series (1, 2)
				checkboxOptions.forEach(opt => {
					const id = `#jqxCheckBox-${cryptoGroupId}-${opt.index}-chart-${chartId}`;
					if (opt.index === 1 || opt.index === 2) {
						$(id).hide();
					} else {
						$(id).show().jqxCheckBox({ disabled: false });
					}
				});
				$(`#jqxCheckBox-${cryptoGroupId}-funding_rate-chart-${chartId}`).hide();
				}
				
			} else {
				// Regular mode: show all except funding_rate
				checkboxOptions.forEach(opt => {
					const id = `#jqxCheckBox-${cryptoGroupId}-${opt.index}-chart-${chartId}`;
					$(id).show().jqxCheckBox({ disabled: false });
				});
				$(`#jqxCheckBox-${cryptoGroupId}-funding_rate-chart-${chartId}`).hide();
			}
		} else {
			// For chart 2+ → always hide funding rate
			$(`#jqxCheckBox-${cryptoGroupId}-funding_rate-chart-${chartId}`).hide();
		}
}

function initializeItemsPerChart(allItems, numberOfItems, chartId) {
	checkedItemCountPerChart[chartId] = 0;
	checkedItemIdsPerChart[chartId] = [];

	// Initialize jqxCheckBox for each item
	for (let i = 0; i < allItems.length; i++) {
		$(allItems[i]).jqxCheckBox({ theme: 'dark', width: '100%', height: 26 });
	}

	$(`#checkboxes-container-chart-${chartId} .jqx-checkbox`)
	.off('change')
	.on('change', function(event) {
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
	const items = checkedItemIdsPerChart[chartId] || [];

	if (items.length === 2) {
		// Find Volume or Market Cap checkbox
		const priorityItem = items.find(id => 
			id.includes(`-5-chart-${chartId}`) || id.includes(`-6-chart-${chartId}`)
		);

		if (priorityItem) {
			const reordered = items.filter(id => id !== priorityItem);
			reordered.push(priorityItem); // Move it to the end
			return reordered;
		}
	}

	return items;
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
	$("#dropDownCryptoOptions").jqxDropDownList({ dropDownHeight: 200, selectedIndex: 4, source: functionDataAdapter, placeHolder: "", displayMember: "name", valueMember: "groupId", theme: 'dark', width: 150, height: 25 });

	$('#dropDownCryptoOptions').on('change', function(event) {
		Object.keys(checkboxCache).forEach(key => delete checkboxCache[key]);
		if(functionId!=-1)
			$("#reset").click();
			
		const selectedGroupId = $('#dropDownCryptoOptions').val();
		const selected = dropDownCryptosource.find(c => c.groupId === selectedGroupId);
		
	    const selectedTicker = selected.ticker;
			updatePairDropdown(selectedTicker);
			
		if (!selected) return;
	
		selectedLiveCurrency = selected.ticker; // <-- Update live currency
	
		//renderCheckboxesPerChart(selectedGroupId);
		//initializeCandlesOptions(Number(selectedGroupId));
	
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
		//updateLiveSubscription(selectedLiveCurrency);
		initializeOrderBookForCrypto(selectedTicker);
		
		$("#dropDownCandleOptionsContainer").removeClass("d-flex").addClass("d-none");
	    $("#dropDownCandleOptions").removeClass("d-block").addClass("d-none");
	
		  renderCheckboxesPerChart(selectedGroupId,1).then(() => {
		   	 	toggleGraphData(1);
		});
		 renderCheckboxesPerChart(selectedGroupId,2).then(() => {
		   	 	 loadChart2Data();
		});
		
	    $("#candlestick-chart4").addClass('active');	
		getTrendFollowingHistory();
		
	});

	// renderCheckboxesPerChart($("#dropDownCryptoOptions").val());

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

	$(`#show-chart-${chartId}`).off('click').click(function() {
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
		if(chartId=='1')
		$("#dropDownCandleOptionsContainer").removeClass("d-flex").addClass("d-none");
	});
	

}
function initializeClearFilterButtonForChart(chartId, allItems,reset) {
	const buttonSelector = `#clear-filter-chart-${chartId}`;
	
	$(buttonSelector).jqxButton({ theme: 'dark', height: 30, width: 100 });

	// Remove previous click handlers to prevent duplication
	$(buttonSelector).off('click').on('click', function () {
		// Uncheck all checkboxes
		for (let i = 0; i < allItems.length; i++) {
			$(allItems[i]).jqxCheckBox('uncheck');
			$(allItems[i]).jqxCheckBox({ disabled: false });
		}

		// Reset the count
		checkedItemIdPerChart[chartId] = 0;
		const isCandleStick = $('#candlestick-chart1').hasClass('active');
		if(isCandleStick)
			{  const timeRange = getActiveTimeRange();
				loadChart1Data(ChartManager.instances['chart1'],timeRange);
			}
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

	//$("#candlestick-chart1").removeClass('active');

	const chartId = '1';
	const chartKey = `chart${chartId}`;
	const manager = ChartManager.instances[chartKey] || new ChartManager(chartKey, options, `#crypto${chartId}-container`);

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

	if (manager && manager.chart) {
	  loadChart1Data(manager,timeRange);
	} else {
	manager.render().then(() => {
		    $('#chart-option-chart1').append(`
		    <!-- Candlestick Toggle -->
		  
			<div class="btn-group" id="candlestickToggle-chart1">
			  <button id="candlestick-chart1" class="btn btn-option" onclick="ChartManager.instances['chart1'].toggleCandlestick(this,1)">
			    <i class="icon-candle"></i>
			  </button>
			</div>
			  <button
				  type="button"
				  class="menu-header collapsed chart-menu-toggle btn w-100 mb-2 text-start"
				  id="btn-checkboxes-container-chart-1"
				  data-pcollapse="toggle"
				  data-target="#checkboxes-container-chart-1"
				  aria-expanded="false"
				  aria-controls="checkboxes-container-chart-1">
				  <span class="left">
				    <span class="label">Select Factor</span>
				  </span>
				  <i class="fa-solid fa-chevron-down chev ms-auto"></i>
				</button>
          <div id="checkboxes-container-chart-1" class="collapse"></div>
		    
		  
		    <div class="col-12 d-flex">
					<input  aria-expanded="true" aria-controls="collapseFilter" class="btn btn-primary mr-1 mb-1" style="margin-right: 1rem!important; color:white;" type="button" id="show-chart-1" value="Show" />
					<input id="clear-filter-chart-1" type="button" style="margin-right: 1rem!important;" class="btn btn-light-secondary mr-1 mb-1" value="Clear" />
			</div>`);
			
			initializeShowFilterButtonForChart('1');
		    const selectedGroupsId = $('#dropDownCryptoOptions').val();
	
		   renderCheckboxesPerChart(selectedGroupsId,1).then(() => {
		   	 loadChart1Data(manager,timeRange);
		});
    });
    }
}
async function loadChart1Data(manager,timeRange,chartId=1){
	    	const isCandleStick = $('#candlestick-chart1').hasClass('active');
	
			const checkedItemIds = getCheckedItems(chartId);
			
			const metadataList = checkedItemIds.map(fullId => {
				const cleanId = fullId.replace(`-chart-${chartId}`, '');
				return itemValue[cleanId];
			}).filter(Boolean);
			
			if (metadataList.length === 0 && !isCandleStick) {
				console.error("At least one valid series is required.");
				return;
			}
			const functionId = getSelectedFunctionId(); // returns -1 if none selected
			let seriesColors = [];
			 const selectedGroupsId = $('#dropDownCryptoOptions').val();
			if(isCandleStick){
				
				let isCentred = [false];
				let applyTransparency=false;
				
				const from = document.getElementById(`dateFrom-chart${chartId}`).value;
				const to = document.getElementById(`dateTo-chart${chartId}`).value+' 23:59:59';
				
				const newCandlestickParam = {
				fromdate: from,
				todate: to,
				groupId1: selectedGroupsId,
				subGroupId1: manager._lastDataParam.subGroupId1,
				interval: manager._lastDataParam.interval,
				period: manager._lastDataParam.period,
				type: manager._lastDataParam.type,
				candlestickMode: true,
				};
				
				const isFunctionLine = functionId === 1 || functionId === 2;
				const isFunctionAreaColumn = [3, 4, 5, 6, 10, 11, 12, 13, 14, 15].includes(functionId);
				const isFunctionLineColumn = [7,8,9].includes(functionId);
				
				let disableMarkers = false;
				let markerSizeArray=[];
				let useDualYAxis = (
				  (functionId !== 1 && functionId !== 2 && functionId !== -1)
				);
				let useShortFormatList= [false];
				let seriesTypes= ['candlestick'];
				if (metadataList.length>=1) {
					   if(functionId!=-1)
						$("#reset").click();
					
						newCandlestickParam.groupId2 = selectedGroupsId;
						newCandlestickParam.subGroupId2 = metadataList[0].subGroupId;
						newCandlestickParam.removeEmpty1 = false;
						newCandlestickParam.removeEmpty2 = false;
						seriesTypes = ['candlestick', 'column'];
						seriesColors = ['#ffffff', 'rgba(240, 171, 46, 0.5)'];
						useDualYAxis=true;
						useShortFormatList= [false, true];
						newCandlestickParam[`isFunctionGraph`] = false;
						
					}
				else 
				if (functionId != -1) {
				  newCandlestickParam[`functionId`] = functionId ;
				  newCandlestickParam[`isFunctionGraph`] = true;
				  if (isFunctionLine) {
						  if (functionId === 1) {
						  seriesColors = ['#ffffff', '#FF0000'];
						} else if (functionId === 2) {
						  seriesColors = ['#ffffff', '#ffa4c5'];
						}
					    seriesTypes = ['candlestick', 'line'];
					    isCentred.push(false);
						disableMarkers = true;
						markerSizeArray=[1,0];
					  } else if (isFunctionAreaColumn) {
					    seriesTypes = ['candlestick', 'column'];
					    isCentred.push(true);
						seriesColors = ['#ffffff', '#ffa4c5'];
					    applyTransparency=true;
					  }  else if (isFunctionLineColumn) {
					    seriesTypes = ['candlestick', 'column'];
						seriesColors = ['#ffffff', '#0cb1e6'];
					    isCentred.push(false);
					  }
				}
			
			
			const timeRange = getActiveTimeRange();
			const api = timeRange === "Daily"
				? "/cryptos/getcandlegraphdata"
				: "/cryptos/getcandlegraphdatainterval";

			await manager.loadData({
				service: manager._lastService,
				api: api,
				name: manager._lastGraphName + ' - Candlestick',
				removeEmpty: manager._lastRemoveEmpty,
				saveHistory: false,
				fromOverride: manager.state.defaultFromDate,
				toOverride: manager.state.defaultToDate,
				applyDb: false,
				seriesTypes,
				seriesColors,
				useDualYAxis,
				dataParam: newCandlestickParam,
				interval: timeRange,
				applyTransparency: applyTransparency,
				disableMarkers:disableMarkers,
				markerSizeArray:markerSizeArray,
				isCentred:isCentred,
				useShortFormatList:useShortFormatList,
				currency:selectedLiveCurrency,
				timeLabel:true
			}).then(() => {
				 $("#dropDownCryptoOptions").jqxDropDownList({ disabled: false }); 
			});
			manager._disableChartSettings(true, ['fontOptions']);
			}
			else {
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
					params[`groupId${index + 1}`] = selectedGroupsId;
					params[`removeEmpty${index + 1}`] = false;
				});
				
				const isFunctionLine = functionId === 1 || functionId === 2;
			    const isFunctionAreaColumn = [3, 4, 5, 6, 10, 11, 12, 13, 14, 15].includes(functionId);
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
			
				if (functionId === 1) {
				  seriesColors = ['#ffffff', '#FF0000'];
				} else if (functionId === 2) {
				  seriesColors = ['#ffffff', '#ffa4c5'];
				} else if ([3, 4, 5, 6, 10, 11, 12, 13, 14, 15 ].includes(functionId)) {
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
				const SelectedSorted = sorted.filter(
				  (item, index, self) =>
				    index === self.findIndex(
				      (t) => t.subGroupId === item.subGroupId && t.GroupId === item.GroupId
				    )
				);
				let useDualYAxis = (
				  (functionId !== 1 && functionId !== 2 && functionId !== -1) ||
				  (SelectedSorted.length === 2 && has5or6)
				);
				const useShortFormatList = sorted.map(m => (m.subGroupId === '5' || m.subGroupId === '6'));
				
				const disableMarkers = (functionId === 1 || functionId === 2) ? true : false;
				let markerSizeArray=(disableMarkers)?[1,0]:[];
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
					markerSizeArray:markerSizeArray,
					isCentred:isCentred,
					currency:selectedLiveCurrency,
					timeLabel:true
				}).then(() => {
				 $("#dropDownCryptoOptions").jqxDropDownList({ disabled: false }); 
			});
			}
}
function getDataChart2(checkedItemIds) {

	const chartId = '2';
	const chartKey = `chart${chartId}`;
	const manager = ChartManager.instances[chartKey] || new ChartManager(chartKey, options, `#crypto${chartId}-container`);

	const timeRange = getActiveTimeRange();
	const fromDate = new Date();
	
	
	fromDate.setMonth(fromDate.getMonth() - 6);
	fromDate.setHours(0, 0, 0, 0);

	manager.state.defaultFromDate = fromDate;
	manager.state.defaultToDate = new Date(); // Today

	if (manager && manager.chart) {
	  loadChart2Data();
	} else {
	manager.render().then(() => {
		
		 $('#chart-option-chart2').append(`
		 	<button
			  type="button"
			  class="menu-header collapsed chart-menu-toggle btn w-100 mb-2 text-start"
			  data-pcollapse="toggle"
			  data-target="#checkboxes-container-chart-2"
			  aria-expanded="false"
			  aria-controls="checkboxes-container-chart-2">
			  <span class="left">
			    <span class="label">Select Factor</span>
			  </span>
			  <i class="fa-solid fa-chevron-down chev ms-auto"></i>
			</button>
		    <div id="checkboxes-container-chart-2" class="collapse"></div>
		    <div class="col-12 d-flex">
					<input  aria-expanded="true" aria-controls="collapseFilter" class="btn btn-primary mr-1 mb-1" style="margin-right: 1rem!important; color:white;" type="button" id="show-chart-2" value="Show" />
					<input id="clear-filter-chart-2" type="button" style="margin-right: 1rem!important;" class="btn btn-light-secondary mr-1 mb-1" value="Clear" />
			</div>`);
			
			initializeShowFilterButtonForChart('2');
		    const selectedGroupsId = $('#dropDownCryptoOptions').val();
	
		   renderCheckboxesPerChart(selectedGroupsId,2).then(() => {
		   	 loadChart2Data();
		});
		
	});
    
    }
}
function  loadChart2Data(chartId=2){
		const checkedItemIds = getCheckedItems(chartId);
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
		loadGraphWithTrendlines(screenName, 'chart2',params);
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
function getDataChart4() { // trendfollowing

	const chartId = '4';
	const manager = new ChartManager(`chart${chartId}`, options, `#crypto${chartId}-container`);

	const fromDate = new Date();
	
	fromDate.setMonth(fromDate.getMonth() - 1);
	fromDate.setHours(0, 0, 0, 0);

	manager.state.defaultFromDate = fromDate;
	manager.state.defaultToDate = new Date();
	if (manager && manager.chart) {
	 
         updateTrendFollowingGraph(chartId,manager,false);
	}
	manager.render().then(() => {
		    $('#chart-option-chart4').append(`
		    <!-- Candlestick Toggle -->
		    <br>
			<div class="btn-group" id="candlestickToggle-chart4">
			  <button id="candlestick-chart4" class="btn btn-option active" onclick="toggleCandlestickChartTrendFollowing(this,'4')">
			    <i class="icon-candle"></i>
			  </button>
			</div>
			
			    <div class="d-flex align-items-center">
			    	<div id="dropdown1" class="mt-2"></div>
				    <div style="margin-left: .4rem;">
						<i class="fa-solid fa-xmark" id="reset1"></i>
					</div>
				</div>
				<div class="d-flex align-items-center">
			    	<div id="dropdown2" class="mt-2"></div>
				    <div style="margin-left: .4rem;">
						<i class="fa-solid fa-xmark" id="reset2"></i>
					</div>
				</div>
				<div class="d-flex align-items-center">
			    	<div id="dropdown3" class="mt-2"></div>
				    <div style="margin-left: .4rem;">
						<i class="fa-solid fa-xmark" id="reset3"></i>
					</div>
				</div>
				<div class="d-flex align-items-center">
			    	<div id="dropdown4" class="mt-2"></div>
				    <div style="margin-left: .4rem;">
						<i class="fa-solid fa-xmark" id="reset4"></i>
					</div>
				</div>
		    `);
			// Initial load with first ticker
			
			dropdownIds.forEach(id => {
			  $(`#${id}`).jqxDropDownList({
			    source: fullOptions,
			    displayMember: "label",
			    valueMember: "id",
			    width: 100,
			    height: 30,
			    autoDropDownHeight: true,
			    selectedIndex: -1,
			    theme: 'dark'
			  });
			
			$(`#${id}`).on('select', function () {
			    // Prevent triggering during programmatic update or refresh loop
			    if (isProgrammaticDropdownUpdate || isRefreshingDropdowns) return;
				
			    // 🔒 Disable all reset buttons
			    ['reset1', 'reset2', 'reset3', 'reset4'].forEach(id => {
			        $(`#${id}`).addClass('disabled').css({
			            pointerEvents: 'none',
			            opacity: 0.5,
			            cursor: 'not-allowed'
			        });
			    });
			    
			    const chartId = '4';
			    const manager = ChartManager.instances.chart4;
			
			    updateTrendFollowingGraph(chartId, manager, (isProgrammaticDropdownUpdate || isRefreshingDropdowns)?false:true);
			
			    // Now refresh others safely
			    isRefreshingDropdowns = true;
			    setTimeout(() => {
			        refreshAllDropdowns();
			        isRefreshingDropdowns = false;
			    }, 0);
			});

			});

		    bindResetButton('reset1', 'dropdown1');
			bindResetButton('reset2', 'dropdown2');
			bindResetButton('reset3', 'dropdown3');
			bindResetButton('reset4', 'dropdown4'); 
			getTrendFollowingHistory();
			//updateTrendFollowingGraph(chartId,manager);
			
			
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
				currency:selectedLiveCurrency,
				timeLabel:true
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
async function updateTrendFollowingGraph(chartId, manager, saveHistory) {
	
	 $("#dropdown1").jqxDropDownList({ disabled: true }); 
	 $("#dropdown2").jqxDropDownList({ disabled: true }); 
     $("#dropdown3").jqxDropDownList({ disabled: true }); 
	 $("#dropdown4").jqxDropDownList({ disabled: true }); 

  if(saveHistory)
     saveTrendLineHistory(isShared); //isShared
     
    const from = document.getElementById(`dateFrom-chart${chartId}`).value;
    const to = document.getElementById(`dateTo-chart${chartId}`).value;
    const timeRange = getActiveTimeRange();
    const period = getChartPeriod();
    const candlestickIsActive = $(`#candlestick-chart${chartId}`).hasClass('active');

    const selectedGroupsId = $('#dropDownCryptoOptions').val();
    const dropdownIds = ['dropdown1', 'dropdown2', 'dropdown3', 'dropdown4'];
    const selectedFunctionIds = dropdownIds
        .map(id => {
            const item = $(`#${id}`).jqxDropDownList('getSelectedItem');
            return item ? item.originalItem.id : null;
        })
        .filter(id => id !== null)
        .join(',');

    const commonParams = {
        fromdate: from,
        todate: to + (candlestickIsActive ? ' 23:59:59' : ''),
        period: period,
        type: '3',
        groupId1: selectedGroupsId,
        subGroupId1: '8',
        removeEmpty1: false,
        candlestickMode: candlestickIsActive,
        functionId: selectedFunctionIds,
        isFunctionGraph: selectedFunctionIds !== '' ? true : null
    };

    const api = "/cryptos/gettrendfollowingGraph";
	let titleA = dropDownCryptosource.find(c => c.groupId === commonParams[`groupId1`]).name;
    let titleB = commonParams[`isFunctionGraph`]?'with TIME&VOLATILITY WEIGHTED ARRAYS':''; 
    
    const selectedFunctionIdsArray = getAllSelectedDropdownValues(); 

    resetAndReassignDropdowns(selectedFunctionIdsArray);
    if (candlestickIsActive) {
        await manager.loadData({
            service: manager._lastService || "cryptos",
            api: api,
            name: `${titleA} Daily ${titleB}`,
            applyTitle: true,
            removeEmpty: manager._lastRemoveEmpty || false,
            saveHistory: false,
            fromOverride: manager.state.defaultFromDate,
            toOverride: manager.state.defaultToDate,
            applyDb: false,
            seriesTypes: ['candlestick', 'line', 'line', 'line', 'line'], // You can make this dynamic if needed
            seriesColors: ['#00ff99', '#fac1e2', '#e436c1', '#42f5c5','#57f542'],
            useDualYAxis: false,
            dataParam: commonParams,
            useShortFormatList: [false],
            interval: 'Daily',
            currency: selectedLiveCurrency,
            disableMarkers: true,
            markerSizeArray: [1, 0, 0, 0, 0],
            showLegend: false,
            combineTooltips:true,
        }).then(() => {
				 $("#dropdown1").jqxDropDownList({ disabled: false }); 
				 $("#dropdown2").jqxDropDownList({ disabled: false }); 
			     $("#dropdown3").jqxDropDownList({ disabled: false }); 
				 $("#dropdown4").jqxDropDownList({ disabled: false }); 
				 
			          // 🔓 Re-enable all reset buttons after loading is done
		    ['reset1', 'reset2', 'reset3', 'reset4'].forEach(id => {
		        $(`#${id}`).removeClass('disabled').css({
		            pointerEvents: '',
		            opacity: '',
		            cursor: ''
		        });
		    });

			});

        manager._disableChartSettings(true, ['fontOptions']);
    } else {
        await manager.loadData({
            service: "cryptos",
            api: api,
            name: `${titleA} CLOSE ${titleB}`,
            applyTitle: true,
            removeEmpty: false,
            saveHistory: false,
            applyDb: true,
            dataParam: commonParams,
            showLegend: false,
            seriesTypes: ['line', 'line', 'line', 'line', 'line'], // Adjust if more
            seriesColors: ['#ffffff', '#fac1e2', '#e436c1', '#42f5c5','#57f542'],
            disableMarkers: true,
            markerSizeArray: [1, 0, 0, 0, 0],
            currency: selectedLiveCurrency, 
            combineTooltips:true,
        }).then(() => {
				 $("#dropdown1").jqxDropDownList({ disabled: false }); 
				 $("#dropdown2").jqxDropDownList({ disabled: false }); 
			     $("#dropdown3").jqxDropDownList({ disabled: false }); 
				 $("#dropdown4").jqxDropDownList({ disabled: false }); 
				 
			          // 🔓 Re-enable all reset buttons after loading is done
		    ['reset1', 'reset2', 'reset3', 'reset4'].forEach(id => {
		        $(`#${id}`).removeClass('disabled').css({
		            pointerEvents: '',
		            opacity: '',
		            cursor: ''
		        });
		    });
				
			});
    }
    
  
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
	$("#dropDownCryptoOptions").jqxDropDownList({ disabled: true }); 
	$("#reset").trigger("click", [true]);
	// 1️⃣ Set active button FIRST
	$('#DailyData-btn').toggleClass('active', time === 1);
	$('#4HoursData-btn').toggleClass('active', time === 2);
	$('#weeklyData-btn').toggleClass('active', time === 3);

	// 2️⃣ Get correct time range AFTER button state is updated
	const timeRange = getActiveTimeRange();

	// 3️⃣ Update date ranges accordingly
	const date = new Date();
	if (timeRange === "Daily") {
		date.setMonth(date.getMonth() - 4);
	} else if (timeRange === "4h") {
		date.setDate(date.getDate() - 21);
	} else if (timeRange === "1w") {
		date.setMonth(date.getMonth() - 6);
	}
	date.setHours(0, 0, 0, 0);

	const fromDateInput = document.getElementById('dateFrom-chart1');
	const toDateInput = document.getElementById('dateTo-chart1');

	if (fromDateInput) {
		fromDateInput.value = date.toISOString().split('T')[0];
	}
	if (toDateInput) {
		const today = new Date();
		toDateInput.value = today.toISOString().split('T')[0];
	}

	const candlestickBtn = document.getElementById('candlestick-chart1');
	const isCandleActive = candlestickBtn?.classList.contains('active');

	if (timeRange === "4h") {
		$('#functionOptionsMenu').removeClass("d-flex").addClass("d-none");
		$('#euroTime').removeClass("d-flex").addClass("d-none");
		$('#functionOptionsMenu').removeClass("d-flex").addClass("d-none");
	} else if (timeRange === "Daily") {
		$('#functionOptionsMenu').addClass("d-flex").removeClass("d-none");
		$('#euroTime').addClass("d-flex").removeClass("d-none");
		$('#functionOptionsMenu').addClass("d-flex").removeClass("d-none");
	} else if (timeRange === "1w") {
		$('#functionOptionsMenu').removeClass("d-flex").addClass("d-none");
		$('#functionOptionsMenu').removeClass("d-flex").addClass("d-none");
	}

	const selectedGroupId = $('#dropDownCryptoOptions').val();
	// 5️⃣ Trigger re-render
	if (isCandleActive) {
		//ChartManager.instances['chart1']?.loadCandlestickData();
		//renderCheckboxesChart1VolumeFundingRate(selectedGroupId, 1);
		renderCheckboxesPerChart(selectedGroupId,1).then(() => {
		   	  drawGraphForChart(1);	
		});
	} else {
		functionId = -1;
		renderCheckboxesPerChart(selectedGroupId,1).then(() => {
		   	  drawGraphForChart(1);	
		});
		
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
	$("#dropDownFunctions").jqxDropDownList({ dropDownHeight: 480, source: functionDataAdapter, placeHolder: "Select a Function", displayMember: "description", valueMember: "id", theme: 'dark', width: 180, height: 40 });
	$("#reset").on("click", function (e, isProgrammatic = false) {
		if (isProgrammatic) {
		suppressFunctionDropdownChange = true;
		}
	
		functionId = -1;
		$("#dropDownFunctions").jqxDropDownList({ selectedIndex: -1 });
	
		if (isProgrammatic) {
			setTimeout(() => {
				suppressFunctionDropdownChange = false;
			}, 100);
		} else {
			// Manual reset = draw chart normally
			drawGraphForChart(1);
		}
	});


	$('#dropDownFunctions').on('change', function (event) {
		if (suppressFunctionDropdownChange) return;
	
		const args = event.args;
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
	//updateLiveSubscription(selectedLiveCurrency);
	const allCurrencies = ['BTC', 'ETH', 'SOL', 'BNB', 'XRP', 'SHIB'];

	allCurrencies.forEach(currency => {
	    addSubscription(`/all/chart/${currency}`, function (message) {
	        ChartManager.handleLiveUpdate(currency, message);
	    });
	});
	
	const groupIds = dropDownCryptosource.map(item => item.groupId);
	groupIds.forEach(groupId => {
		
		addSubscription(`/all/chart/technical/${groupId}`, function (message) {
	
	    try {
		   	const data = message.body;

 		    if (data.userName === username) return; // 🔁 Ignore self
	        if (groupId == $('#dropDownCryptoOptions').val()) {
					
			    // 🔒 Disable all reset buttons
			    ['reset1', 'reset2', 'reset3', 'reset4'].forEach(id => {
			        $(`#${id}`).addClass('disabled').css({
			            pointerEvents: 'none',
			            opacity: 0.5,
			            cursor: 'not-allowed'
			        });
			    });
	            isProcessingRemoteUpdate = true;
	            getTrendFollowingHistory();  // This internally triggers chart updates
	           
	        }
		  			
	  			
		    } catch (e) {
		        console.error("Error processing BTC message:", e);
		    }
		});
		
		addSubscription(`/all/chart/trendline/${groupId}`, function (message) {
	
	    try {
		   const data = message.body;

 		    if (data=== username) return; // 🔁 Ignore self
	        if (groupId == $('#dropDownCryptoOptions').val()) {
				getTrendLinesHistory();
	           
	        }
		  			
	  			
		    } catch (e) {
		        console.error("Error processing BTC message:", e);
		    }
		});
		
			
		addSubscription(`/all/chart/retracement/${groupId}`, function (message) {
	
	    try {
		const data = message.body;

 		    if (data=== username) return; // 🔁 Ignore self
	        if (groupId == $('#dropDownCryptoOptions').val()) {
				getTrendLinesHistory();
	        }
		  			
	  			
		    } catch (e) {
		        console.error("Error processing BTC message:", e);
		    }
		});
		
		addSubscription(`/all/chart/relevant/${groupId}`, function (message) {
	
	    try {
		 const data = message.body;

 		    if (data=== username) return; // 🔁 Ignore self
	       
	        if (groupId == $('#dropDownCryptoOptions').val()) {
				getTrendLinesHistory();
	        }
		  			
	  			
		    } catch (e) {
		        console.error("Error processing BTC message:", e);
		    }
		});
		
	});
	
});

async function toggleCandlestickChartTrendFollowing(btn, id) {
		const isActive = btn.classList.contains('active');
		const selectedGroupId = $('#dropDownCryptoOptions').val();
		$("#dropDownFunctions").jqxDropDownList({ disabled: false });
		
		const chartId = id;
	    const manager = ChartManager.instances.chart4;
        
		
		if (isActive) {
			btn.classList.remove('active');	
		    
		} else {
			// ✅ Activate candlestick
			btn.classList.add('active');
		
		}
		updateTrendFollowingGraph(chartId,manager, true);

		manager.updateCandleOptionsVisibility();

	}	
	

// Initialize all dropdowns with no selection
function getAllSelectedValues() {
  const selected = {};
  dropdownIds.forEach(id => {
    const item = $(`#${id}`).jqxDropDownList('getSelectedItem');
    selected[id] = item ? item.originalItem.id : null;
  });
  return selected;
}

function updateDropdown(idToUpdate, selectedValues) {
  const currentSelected = selectedValues[idToUpdate];
  const excluded = Object.entries(selectedValues)
    .filter(([key, val]) => key !== idToUpdate && val !== null)
    .map(([_, val]) => val);

  const filteredOptions = fullOptions.filter(opt => !excluded.includes(opt.id) || opt.id === currentSelected);

  const instance = $(`#${idToUpdate}`);
  instance.jqxDropDownList({ source: filteredOptions });

  // Restore value if it's still valid
  if (currentSelected && filteredOptions.find(o => o.id === currentSelected)) {
    instance.jqxDropDownList('val', currentSelected);
  } else {
    instance.jqxDropDownList('clearSelection');
  }
}

function refreshAllDropdowns() {
  const currentSelections = getAllSelectedValues();
  dropdownIds.forEach(id => updateDropdown(id, currentSelections));
}

function bindResetButton(resetBtnId, dropdownId, chartId = '4') {
	let suppressFunctionDropdownChange = false;

	$(`#${resetBtnId}`).on("click", async  function (e, isProgrammatic = false) {

		
    // 🔒 Disable all reset buttons
    ['reset1', 'reset2', 'reset3', 'reset4'].forEach(id => {
        $(`#${id}`).addClass('disabled').css({
            pointerEvents: 'none',
            opacity: 0.5,
            cursor: 'not-allowed'
        });
    });

    if (isProgrammatic) suppressFunctionDropdownChange = true;

    $(`#${dropdownId}`).jqxDropDownList({ selectedIndex: -1 });

    if (isProgrammatic) {
        setTimeout(() => {
            suppressFunctionDropdownChange = false;
        }, 100);
    } else {
        // Manual reset: refresh others and re-draw chart
        refreshAllDropdowns();

        const manager = ChartManager.instances[`chart${chartId}`];
        if (manager) {
            await updateTrendFollowingGraph(chartId, manager, true); // ← await if it's async
        }
    }

    // 🔓 Re-enable all reset buttons after loading is done
    ['reset1', 'reset2', 'reset3', 'reset4'].forEach(id => {
        $(`#${id}`).removeClass('disabled').css({
            pointerEvents: '',
            opacity: '',
            cursor: ''
        });
    });
	});
}

function getTrendFollowingHistory(){
	const dropdownIds = ['dropdown1', 'dropdown2', 'dropdown3', 'dropdown4'];

	    dropdownIds.forEach((dropdownId, index) => {
	       
	        const instance = $(`#${dropdownId}`);
			instance.jqxDropDownList('clearSelection');
	        
	    });
	    
	const selectedGroupsId = $('#dropDownCryptoOptions').val();
			
	$.ajax({
		contentType: "application/json",
		url: "/graph/find-trend-following-history-by-userid-groupId/"+selectedGroupsId+`/${isShared}`,
		dataType: 'json',
		async: true,
		cache: false,
		timeout: 600000,
		success: function(result) {
			const manager = ChartManager.instances.chart4;
    				
			if(result.length==0)
				{
					updateTrendFollowingGraph(4,manager,false);
					trendfollowingDbId = null;	
				}
				else{
					
					if(result[0].isCandleStick)
						$("#candlestick-chart4").addClass('active');
					else
						$("#candlestick-chart4").removeClass('active');	
					trendfollowingDbId = result[0].id;	
					
					result[0].functionId!=""?
					loadHistoryAndFillDropdowns(result[0]):
					updateTrendFollowingGraph(4,manager,false);
				}
		},
		error: function(e) {

			console.log("ERROR : ", e);

		}
	});
}

function loadHistoryAndFillDropdowns(data) {
    isProgrammaticDropdownUpdate = true;

    const functionIds = data.functionId ? data.functionId.split(',') : [];
    const dropdownIds = ['dropdown1', 'dropdown2', 'dropdown3', 'dropdown4'];

    dropdownIds.forEach((dropdownId, index) => {
        const valueToSelect = functionIds[index] || null;
        const instance = $(`#${dropdownId}`);

        if (valueToSelect) {
            const parsedValue = parseInt(valueToSelect);
            instance.jqxDropDownList('val', parsedValue);

            const item = instance.jqxDropDownList('getItemByValue', parsedValue);
            if (item) {
                instance.trigger('select', { item }); // Ignored during programmatic update
            }
        } else {
            instance.jqxDropDownList('clearSelection');
        }
    });

    setTimeout(() => {
        isProgrammaticDropdownUpdate = false;
        refreshAllDropdowns();
    }, 200);
}

async function saveTrendLineHistory(isShared) {
	
					
		 if (isProcessingRemoteUpdate) {
	        console.log("Skipping save due to remote-triggered update");
	        isProcessingRemoteUpdate = false;
	        
	        return;
	    }
	
    	const url = '/graph/save-trend-following-history'; 
        const candlestickIsActive = $(`#candlestick-chart4`).hasClass('active');
		const dropdownIds = ['dropdown1', 'dropdown2', 'dropdown3', 'dropdown4'];
        const selectedFunctionIds = dropdownIds
        .map(id => {
            const item = $(`#${id}`).jqxDropDownList('getSelectedItem');
            return item ? item.originalItem.id : null;
        })
        .filter(id => id !== null)
        .join(',');

        let entity = {
			id: trendfollowingDbId,
            functionId: selectedFunctionIds,
            isCandleStick: candlestickIsActive,
            isShared: isShared ,
            groupId:  $('#dropDownCryptoOptions').val(),
        };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entity)
        });

        if (response.ok) {
            const result = await response.json();
            
            trendfollowingDbId = result.id;
        
        } else {
            throw new Error('Failed to save retracement history');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
function loadHistoryAndFillDropdowns(data) {
    isProgrammaticDropdownUpdate = true;

    const functionIds = data.functionId ? data.functionId.split(',') : [];
    const dropdownIds = ['dropdown1', 'dropdown2', 'dropdown3', 'dropdown4'];

    dropdownIds.forEach((dropdownId, index) => {
        const valueToSelect = functionIds[index] || null;
        const instance = $(`#${dropdownId}`);

        if (valueToSelect) {
            const parsedValue = parseInt(valueToSelect);
            instance.jqxDropDownList('val', parsedValue);

            const item = instance.jqxDropDownList('getItemByValue', parsedValue);
            if (item) {
                instance.trigger('select', { item }); // ⚠️ This is ignored if flag is active
            }
        } else {
            instance.jqxDropDownList('clearSelection');
        }
    });

    setTimeout(() => {
        isProgrammaticDropdownUpdate = false;
        refreshAllDropdowns(); // Ensure consistency
    }, 200);
}

function resetAndReassignDropdowns(values = []) {
    isProgrammaticDropdownUpdate = true;

    const dropdownIds = ['dropdown1', 'dropdown2', 'dropdown3', 'dropdown4'];

    dropdownIds.forEach((dropdownId, index) => {
        const instance = $(`#${dropdownId}`);
        const value = values[index] || null;

        if (value) {
            instance.jqxDropDownList('val', value);

            const item = instance.jqxDropDownList('getItemByValue', value);
            if (item) {
                instance.trigger('select', { item });
            }
        } else {
            instance.jqxDropDownList('clearSelection');
        }
    });

    setTimeout(() => {
        isProgrammaticDropdownUpdate = false;
        refreshAllDropdowns();
    }, 200);
}

function getAllSelectedDropdownValues() {
    const dropdownIds = ['dropdown1', 'dropdown2', 'dropdown3', 'dropdown4'];

    return dropdownIds.map(id => {
        const item = $(`#${id}`).jqxDropDownList('getSelectedItem');
        return item ? item.originalItem.id : null;
    });
}
