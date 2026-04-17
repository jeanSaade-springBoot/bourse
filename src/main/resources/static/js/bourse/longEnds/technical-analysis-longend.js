const checkedItemCountPerChart = {};      // chartId → count
const checkedItemIdsPerChart = {};   
var checkedItemIdPerChart = {};

let suppressFunctionDropdownChange = false;

const livePriceCache = {};
let cachedTrendlineResult = null;
let liveSubscription = null;

let mainLabel = selectedLiveCurrency+" ( OHLC - 21:00 CLOSE )";
const checkboxCache = {}; // key: `${groupId}-${chartId}` → true

const isShared=false;

const checkboxOptions = [
	{ label: "OPEN", index: 2 },
	{ label: "SETTLE", index: 3 },
	{ label: "CLOSE", index: 4 },
	{ label: "HIGH", index: 5 },
	{ label: "LOW", index: 6 },
];
const candleStickcheckboxOptions = [];
var chartHeight=625;

let graphService = "cryptos";
const removeEmpty = true;
	
const chartItemLimits = {
  1: 2, // Chart 1: allow 2 items
  2: 1  // Chart 2: allow 1 item
};
const groupId=rollingGroupId;

var dropDownSource = [{ name: "INITIALS", groupId: mainGroupId, ticker: "INITIALS" },
	{ name: "ROLLING", groupId: rollingGroupId, ticker: "ROLLING" },];

let trendFollowingLoading = false;

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
const difffullOptions = [
    { id: 30, label: "5-6dw MovAvg" },
    { id: 31, label: "5-7dw MovAvg" },
    { id: 32, label: "5-9dw MovAvg" },
    { id: 33, label: "18-21dw MovAvg" },
    { id: 34, label: "18-25dw MovAvg" },
    { id: 35, label: "18-30dw MovAvg" },
    { id: 36, label: "45-63dw MovAvg" },
];
const defaultSelections = {
  short: [20, 21, 22, 23, 30, 31, 32],   // ids for 5,6,7,9
  medium: [24, 25, 26, 27, 33, 34, 35], // ids for 18,21,25,30
  long: [28, 29, 36]            // ids for 45,63 (only 2, rest will stay empty)
};
const dropdownIds = [
  'dropdown1', 'dropdown2', 'dropdown3', 'dropdown4',
  'dropdown5', 'dropdown6', 'dropdown7'
];
const dropdownResetIds = ['reset1', 'reset2', 'reset3', 'reset4', 'reset5', 'reset6', 'reset7'];
const BuySelldropdownIds = [
  'dropdown1bs', 'dropdown2bs', 'dropdown3bs', 'dropdown4bs',
  'dropdown5bs', 'dropdown6bs', 'dropdown7bs', 'dropdown8bs'
];
const BuySelldropdownResetIds = ['reset1bs', 'reset2bs', 'reset3bs', 'reset4bs', 'reset5bs', 'reset6bs', 'reset7bs', 'reset8bs'];
	
const buyFullOptions = [
    { id: 37, label: "OPEN 5d" },
    { id: 38, label: "OPEN 9d" },
    { id: 39, label: "OPEN 18d" },
    { id: 40, label: "OPEN 30d" },
    { id: 49, label: "BOL-10d" },
    { id: 50, label: "BOL-20d" },
    { id: 45, label: "ENVELOP 9d" },
    { id: 46, label: "ENVELOP 21d" },
];
const sellFullOptions = [
    { id: 41, label: "OPEN 5d" },
    { id: 42, label: "OPEN 9d" },
    { id: 43, label: "OPEN 18d" },
    { id: 44, label: "OPEN 30d" },
    { id: 51, label: "BOL-10d" },
    { id: 52, label: "BOL-20d" },
    { id: 47, label: "ENVELOP 9d" },
    { id: 48, label: "ENVELOP 21d" },
];

const dropdownOptionSource = {
  dropdown1: fullOptions,
  dropdown2: fullOptions,
  dropdown3: fullOptions,
  dropdown4: fullOptions,

  dropdown5: difffullOptions,
  dropdown6: difffullOptions,
  dropdown7: difffullOptions,
  
  dropdown1bs: buyFullOptions,
  dropdown2bs: buyFullOptions,
  dropdown3bs: buyFullOptions,
  dropdown4bs: buyFullOptions,

  dropdown5bs: sellFullOptions,
  dropdown6bs: sellFullOptions,
  dropdown7bs: sellFullOptions,
  dropdown8bs: sellFullOptions,
};
const FUNCTION_COLOR_MAP = {
  // SHORT group (yellow shades)
  20: '#fcf800',  // Short MA 5
  21: '#fcf800c2',  // Short MA 6
  22: '#fcf80091',  // Short MA 7
  23: '#fcf80061',  // Short MA 9

  // MEDIUM group (orange shades)
  24: '#ffb500',
  25: '#ffb500d6',
  26: '#ffb5009e',
  27: '#ffb50070',

  // LONG group (brown shades)
  28: '#8b4c00',
  29: '#8b4c00b5',
};
const sourceAIds = new Set([20, 21, 22, 23, 24, 25, 26, 27, 28, 29]); 
const sourceBIds = new Set([30, 31, 32, 33, 34, 35, 36]);   
const sourceA1Ids = new Set([37,38,39,40,49,50,45,46]); 
const sourceB1Ids = new Set([41,42,43,44,51,52,47,48]);   

const selectedValues = {};

const chartStates = {
    chart1: createChartState(),
    chart2: createChartState(),
    chart3: createChartState() //chart4 in code 
};

$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#container-wrapper').show();
});
document.addEventListener('updateGraphConfiguration', () => {
  updateSeriesChart(chartConfigSettings);
      
});
$(document).ready(function() {
	
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
		
		$("#groupOfPeriod-chart1").jqxButtonGroup({theme: 'dark', mode: 'radio' , height: 40});
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

		
		initializeFunctions(mainGroupId);
		
		//CryptosAnalisys
		//initializeCryptoOptions();
		// getTrendLinesHistory();
		 //getDataChart3();
		 getDataChart1(null);
		 getDataChart2(null);
		 getDataChart4() ;

		 
		//initializeOrderBookForCrypto("BTC");
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
 


// Reuse the same filter logic everywhere
function getCheckboxOptionsForChart(chartId) {
  return (chartId === 2)
    ? checkboxOptions.filter(opt => opt.index === 3 || opt.index === 4) // SETTLE & CLOSE
    : checkboxOptions;
}

function buildCheckboxGroup(groupId, chartId) {
  const container = document.createElement('div');
  container.className = 'col mb-2';
  container.id = `crypto-${groupId}-chart-${chartId}`;

  const opts = getCheckboxOptionsForChart(chartId);

  opts.forEach(opt => {
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
	    chartStates[`chart${chartId}`].allItems=allItems;
		const itemLimit = 1; // default to 1 if not defined
		chartStates[`chart1`].numberOfItems=itemLimit;
		initializeItemsPerChart(allItems, chartId);
		
		initializeClearFilterButtonForChart(chartId, allItems, true);
}
async function renderCheckboxesPerChart(cryptoGroupId, chartId = 2, renderBoth = true) {
  const container = document.getElementById(`checkboxes-container-chart-${chartId}`);
  if (!container) return;

  // Decide which groups to render
  const groupsToRender = renderBoth
    ? dropDownSource.filter(g => g.groupId === mainGroupId || g.groupId === rollingGroupId)
    : dropDownSource.filter(g => String(g.groupId) === String(cryptoGroupId));

  // Cache key: per chart if both, otherwise per group+chart
  const cacheKey = renderBoth
    ? `multi-${chartId}`
    : `${groupsToRender[0]?.groupId || cryptoGroupId}-${chartId}`;

  // 🧠 Only build once per cacheKey
  if (!checkboxCache[cacheKey]) {
    container.innerHTML = '';

    // Create a sub-section per group (title + checkboxes)
    groupsToRender.forEach(g => {
      const wrapper = document.createElement('div');
      wrapper.className = 'checkbox-subgroup mb-2';
      wrapper.id = `checkbox-subgroup-${g.groupId}-chart-${chartId}`;

      // optional title
      const title = document.createElement('div');
      title.className = 'checkbox-subgroup-title fw-bold mb-1';
      title.textContent = g.name;
      wrapper.appendChild(title);

      // build one set of checkboxes for this group
      const checkboxGroup = buildCheckboxGroup(g.groupId, chartId);
      wrapper.appendChild(checkboxGroup);

      container.appendChild(wrapper);
    });
	// Collect all checkbox ids across rendered groups
	const filteredOptions = (chartId === 2)
	  ? checkboxOptions.filter(opt => opt.index === 3 || opt.index === 4)
	  : checkboxOptions;
	
	const allItems = groupsToRender.flatMap(g =>
	  filteredOptions.map(opt => `#jqxCheckBox-${g.groupId}-${opt.index}-chart-${chartId}`)
	);
	    
    chartStates[`chart${chartId}`].allItems=allItems;
    const itemLimit = chartItemLimits[chartId] || 1;
    chartStates[`chart${chartId}`].numberOfItems=itemLimit;
    initializeItemsPerChart(allItems, chartId);

    // Pre-check "CLOSE" (index 4) for all groups
    allItems.forEach(id => {
      if (id.includes(rollingGroupId+'-4-')) $(id).jqxCheckBox('check');
    });

    initializeClearFilterButtonForChart(chartId, allItems, false);
    checkboxCache[cacheKey] = true; // ✅ Mark as built
  }

  // ---- Visibility/enable rules (no funding_rate / euro logic anymore) ----
  // Chart 1: if candlestick active → hide/disable all OHLC checkboxes (candles already show OHLC)
  if (chartId === 1) {
    const isCandleStick = $('#candlestick-chart1').hasClass('active');
    const timeRange = getActiveTimeRange();

    const allItems = (renderBoth
      ? dropDownSource.filter(g => g.groupId === mainGroupId || g.groupId === rollingGroupId)
      : dropDownSource.filter(g => String(g.groupId) === String(cryptoGroupId))
    ).flatMap(g =>
      checkboxOptions.map(opt => `#jqxCheckBox-${g.groupId}-${opt.index}-chart-${chartId}`)
    );

    $("#btn-checkboxes-container-chart-1").removeClass("d-none").addClass("d-block");
				
	if(isCandleStick){
	$("#btn-checkboxes-container-chart-1").addClass("d-none").removeClass("d-block");
      // Hide & disable everything (candles handle OHLC)
      allItems.forEach(id => {
        $(id).jqxCheckBox('uncheck');
        $(id).jqxCheckBox({ disabled: true });
        $(id).hide();
      });
    } else {
      // Regular mode: show & enable all
      allItems.forEach(id => {
        $(id).show().jqxCheckBox({ disabled: false });
      });

      // If you still want special handling for a certain timeRange, do it here.
      // Example placeholder for 4h (currently no-op since no Euro/funding in options):
      if (timeRange === '4h') {
        // no special hides needed with current options (2..6)
      }
    }
  } else {
    // Other charts: show & enable all
    const filteredOptions = (chartId === 2)
	  ? checkboxOptions.filter(opt => opt.index === 3 || opt.index === 4) // only SETTLE & CLOSE
	  : checkboxOptions;
	
	const allItems = (renderBoth
	  ? dropDownSource.filter(g => g.groupId === mainGroupId || g.groupId === rollingGroupId)
	  : dropDownSource.filter(g => String(g.groupId) === String(cryptoGroupId))
	).flatMap(g =>
	  filteredOptions.map(opt => `#jqxCheckBox-${g.groupId}-${opt.index}-chart-${chartId}`)
	);
	
	allItems.forEach(id => {
	  $(id).show().jqxCheckBox({ disabled: false });
	});
  }
}
function initializeItemsPerChart(allItems, chartId) {
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

		if (checkedItemCountPerChart[chartId] >= chartStates[`chart${chartId}`].numberOfItems) {
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

		if (getCheckedCountValues(chartStates[`chart${chartId}`].allItems) > 0) {
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
				loadChart1Data(ChartManager.instances['chart1'],timeRange,false);
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
	
}
function getDataChart1(checkedItemIds) {

	//$("#candlestick-chart1").removeClass('active');

	const chartId = '1';
	const chartKey = `chart${chartId}`;
	const manager = ChartManager.instances[chartKey] || new ChartManager(chartKey, options, `#longend${chartId}-container`);

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
	  loadChart1Data(manager,timeRange,false);
	} else {
	manager.render().then(() => {
		
		    $('#chart-option-chart1').append(`
		    <!-- Candlestick Toggle -->
		   
			<div class="btn-group" id="candlestickToggle-chart1">
			  <button id="candlestick-chart1" class="btn btn-option active" onclick="ChartManager.instances['chart1'].toggleCandlestick(this,1)">
			    <i class="icon-candle"></i>
			  </button>
			</div>
			 
	        <button
			  type="button"
			  class="menu-header collapsed chart-menu-toggle btn w-100 mb-2 text-start"
			  id="btn-checkboxes-container-chart-1"
			  data-pcollapse="toggle"
				  data-target="#checkboxes-main-container-chart-1"
			  aria-expanded="false"
				  aria-controls="checkboxes-main-container-chart-1">
			  <span class="left">
			    <span class="label">Select Factor</span>
			  </span>
			  <i class="fa-solid fa-chevron-down chev ms-auto"></i>
			</button>
	          <div id="checkboxes-main-container-chart-1" class="collapse">
	          	<div id="checkboxes-container-chart-1"></div>
			    <div class="col-12 d-flex pb-3 pt-2">
					<input  aria-expanded="true" aria-controls="collapseFilter" class="btn btn-primary mr-1 mb-1" style="margin-right: 1rem!important; color:white;" type="button" id="show-chart-1" value="Show" />
					<input id="clear-filter-chart-1" type="button" style="margin-right: 1rem!important;" class="btn btn-light-secondary mr-1 mb-1" value="Clear" />
			</div>
	          </div>
	            <div class="d-flex pl-2  pt-2" id="buySellSwitchbutton">
					  <input id="tech-analysis" type="checkbox" class="switch" onclick="techAnalysisCheck();">
					  <label for="tech-analysis" class="checkboxesTitle" style="font-size: .75rem; margin-left: 4px;">TECH ANALYSIS</label>
					</div>
		        <div id="buySellContainer" class="d-none">
			         <div class="d-flex align-items-center pl-3 fw-bold green-text" >BUY</div>
			  		 <div class="d-flex align-items-center pl-3">
				    	<div id="dropdown1bs" class="mt-2"></div>
					    <div class="ml-2 mt-2">
							<i class="fa-solid fa-xmark" id="reset1bs"></i>
						</div>
					</div>
					<div class="d-flex align-items-center pl-3">
				    	<div id="dropdown2bs" class="mt-2"></div>
					    <div class="ml-2 mt-2">
							<i class="fa-solid fa-xmark" id="reset2bs"></i>
						</div>
					</div>
					<div class="d-flex align-items-center pl-3">
				    	<div id="dropdown3bs" class="mt-2"></div>
					    <div class="ml-2 mt-2">
							<i class="fa-solid fa-xmark" id="reset3bs"></i>
						</div>
					</div>
					<div class="d-flex align-items-center pl-3">
				    	<div id="dropdown4bs" class="mt-2"></div>
					    <div class="ml-2 mt-2">
							<i class="fa-solid fa-xmark" id="reset4bs"></i>
						</div>
					</div>
					 <div class="d-flex align-items-center pl-3 fw-bold red-text  pt-3">SELL</div>
					<div class="d-flex align-items-center pl-3">
				    	<div id="dropdown5bs" class="mt-2"></div>
					    <div class="ml-2 mt-2">
							<i class="fa-solid fa-xmark" id="reset5bs"></i>
						</div>
					</div>
					<div class="d-flex align-items-center pl-3">
				    	<div id="dropdown6bs" class="mt-2"></div>
					    <div class="ml-2 mt-2">
							<i class="fa-solid fa-xmark" id="reset6bs"></i>
						</div>
					</div>
					<div class="d-flex align-items-center pl-3">
				    	<div id="dropdown7bs" class="mt-2"></div>
					    <div class="ml-2 mt-2">
							<i class="fa-solid fa-xmark" id="reset7bs"></i>
						</div>
					</div>
					<div class="d-flex align-items-center pl-3">
				    	<div id="dropdown8bs" class="mt-2"></div>
					    <div class="ml-2 mt-2">
							<i class="fa-solid fa-xmark" id="reset8bs"></i>
						</div>
					</div>
				</div>
				
			`);
			
			initializeShowFilterButtonForChart('1');
		    const selectedGroupsId = groupId;
	
		   renderCheckboxesPerChart(selectedGroupsId,1).then(() => {
		   	 loadChart1Data(manager,timeRange,false);
		});
				
	BuySelldropdownIds.forEach(id => {

			$(`#${id}`).jqxDropDownList({
				source: dropdownOptionSource[id],
				displayMember: "label",
				valueMember: "id",
				width: 100,
				height: 30,
				autoDropDownHeight: true,
				selectedIndex: -1,
				theme: 'dark'
			});
			

			$(`#${id}`).off('select').on('select', function() {

			  if (chartStates.chart1.isProgrammaticDropdownUpdate || chartStates.chart1.isRefreshingDropdowns || chartStates.chart1.isBulkUpdatingDropdowns)
		      	return;
		
				BuySelldropdownIds.forEach((dd, index) => {
					const resetId = "reset" + (index + 1)+"bs";
					$(`#${resetId}`).addClass('disabled').css({
						pointerEvents: 'none',
						opacity: 0.5,
						cursor: 'not-allowed'
					});
				});

				// Reload chart only for user-initiated event
				loadChart1Data(ChartManager.instances['chart1'],getActiveTimeRange(),true);
				
				// Refresh UNIQUE selection logic
			    chartStates.chart1.isRefreshingDropdowns = true;
			    setTimeout(() => {
			      refreshAllDropdowns(BuySelldropdownIds);
			      chartStates.chart1.isRefreshingDropdowns = false;
			    });
			});
			
		    
		});
		 bindResetGroup(BuySelldropdownIds, 1);
		  getTrendFollowingHistory(1,BuySelldropdownIds);
    });
   
    }
}
async function loadChart1Data(manager,timeRange,saveHistory,chartId=1){
	    	
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
			 const selectedGroupsId =groupId;
			
			const trendFunctionIds = BuySelldropdownIds
		        .map(id => {
		            const item = $(`#${id}`).jqxDropDownList('getSelectedItem');
		            return item ? item.originalItem.id : null;
		        })
		        .filter(id => id !== null)
		        .join(',');

           setDropdownGroupDisabled(BuySelldropdownIds, false);
           var isChecked = $("#tech-analysis").is(":checked");
           if(isChecked && timeRange==='Daily')
           {
              if(saveHistory && timeRange==='Daily')
              saveTrendLineHistory(isShared,1,BuySelldropdownIds); //isShared
                  
                  
			   if ( chartStates.chart1.trendFollowingLoading) return;   // ✅ stop re-entry
   				chartStates.chart1.trendFollowingLoading = true;
			   		try{
						
				const sorted = [...metadataList];
			    
				const from = document.getElementById(`dateFrom-chart${chartId}`).value;
				const to = document.getElementById(`dateTo-chart${chartId}`).value;
			    let  period = getChartPeriod();
			    let seriesTypes = isCandleStick?['candlestick']:["line"]; // seriesTypes = ['candlestick', 'column'];
			    
				const params = {
					fromdate: from,
					todate: to,
					period: period,
					type: '3',
					candlestickMode:isCandleStick?true:false,
					isTrendFunctionGraph:trendFunctionIds==''?false:true,
					trendFunctionId:trendFunctionIds
				};
				if(isCandleStick)
			  		 $("#btn-checkboxes-container-chart-1").addClass("d-none").removeClass("d-block");

				// If two items, apply preferred order logic (5 or 6 last)
				
				if (sorted.length === 2 && (sorted[0].subGroupId === '5' || sorted[0].subGroupId === '6')) {
					[sorted[0], sorted[1]] = [sorted[1], sorted[0]]; // swap
				}
			
				// If two items, apply preferred order logic (5 or 6 last)
				params[`subGroupId1`] = 4;
				params[`groupId1`] = rollingGroupId;
				
				sorted.forEach((meta, index) => {
					params[`subGroupId${index + 1}`] = meta.subGroupId;
					params[`groupId${index + 1}`] = selectedGroupsId;
					params[`removeEmpty${index + 1}`] = false;
				});
				const trendFunctionIdsArray = getAllSelectedDropdownValues(BuySelldropdownIds); 
				// Dynamic series config
				let colorsArray = [];
    			let strokecolorsArray = [];
				let isCentred = [false];
				let applyTransparency=false;
				let useDualYAxis = false;
				const baseColors = ['#ffffff', '#ff0000', '#4d93d9', '#d86dcd', '#ffff00', '#00b050', '#002060', '#be5014', '#275317'];

				const useShortFormatList = sorted.map(m => (m.subGroupId === '5' || m.subGroupId === '6'));
				// MAIN PRICE SERIES — always index 0
				colorsArray.push(function({ value, seriesIndex }) {
				    // Always return base color for the price / first series
				    return '#ffffff';
				});
				strokecolorsArray.push(function({ value, seriesIndex }) {
				    // Always return base color for the price / first series
				    return '#ffffff';
				});
				trendFunctionIdsArray.forEach((val, index) => {
				    if (val === null || val === undefined) return;
				    seriesTypes.push("line");
					const base = baseColors[index + 1] ;  // shift because index 0 is already taken
					
				    colorsArray.push(function({ value, seriesIndex, w }) {
				
				        try {
				            return base;
				
				        } catch (e) {
				            console.error("Color calc error", e);
				            return base;
				        }
				    });
				      strokecolorsArray.push(function({ value, seriesIndex, w }) {
				
				        try {
				            return base;
				
				        } catch (e) {
				            console.error("Color calc error", e);
				            return base;
				        }
				    });
				    
				});
				const disableMarkers = true;
				let markerSizeArray=(disableMarkers)?[1,0,0,0,0,0,0,0,0,0,0]:[];
				let api = '/graph/get-weighted-trend-graph';
				
				// Load chart
				manager.loadData({
				    service: "cryptos",
					api: api,
					name: "",
					applyTitle:true,
					ishort:true,
					removeEmpty: false,
					saveHistory: false,
					applyDb: true,
					seriesTypes,
					seriesColors,
					useDualYAxis,
					dataParam: params,
					useShortFormatList,
					interval: timeRange,
					seriesColors: colorsArray,
            		seriesStrokesColors:strokecolorsArray,
					applyTransparency: applyTransparency,
					disableMarkers: disableMarkers,
					markerSizeArray:markerSizeArray,
					isCentred:isCentred,
					showLegend: false,
					currency:selectedLiveCurrency,
					timeLabel:true,
					combineTooltips:true,
				}).then(() => {
				// $("#dropDownCryptoOptions").jqxDropDownList({ disabled: false }); 
			
			
					setDropdownGroupDisabled(BuySelldropdownIds, false);

				    BuySelldropdownResetIds.forEach(id => {
				        $(`#${id}`).removeClass('disabled').css({
				            pointerEvents: '',
				            opacity: '',
				            cursor: ''
				        });
				    });


			});
			   
					   } finally {
					   chartStates.chart1.trendFollowingLoading = false;
			           setTimeout(() => chartStates.chart1.suppressTrendFollowingReload = false, 200);
			    }	
			}
			else	
			if(isCandleStick){
				$("#btn-checkboxes-container-chart-1").addClass("d-none").removeClass("d-block");
				let isCentred = [false];
				let applyTransparency=false;
				
				const from = document.getElementById(`dateFrom-chart${chartId}`).value;
				const to = document.getElementById(`dateTo-chart${chartId}`).value+' 23:59:59';
				
				const newCandlestickParam = {
				fromdate: from,
				todate: to,
				groupId1: selectedGroupsId,
				subGroupId1:4,  // fix here for bl new api 
				interval: manager._lastDataParam?.interval || "Daily",
				period: manager._lastDataParam?.period || 'd',
				type: manager._lastDataParam?.type || '3',
				candlestickMode: true,
				};
				
				const isFunctionLine = [1,2].includes(functionId);
				const isFunctionAreaColumn = [3, 4, 5, 6, 10, 11, 12, 13, 14, 15].includes(functionId);
				const isFunctionLineColumn = [7,8,9,53,54,55,56,57,58,59,60,61,62,63].includes(functionId);
				
				let disableMarkers = false;
				let markerSizeArray=[];
				const excludedIds = [1,2,-1];
				let useDualYAxis = !excludedIds.includes(functionId);
				
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
						if ([53,54,55,56,57,58].includes(functionId)){
						  seriesColors = ['#ffffff', '#8aff8e'];
						}else if ([59,60,61,62,63].includes(functionId)){
						  seriesColors = ['#ffffff', '#8ae2ff'];
						}
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
				timeLabel:false,
				hasImage:true,
			}).then(() => {
				 //$("#dropDownCryptoOptions").jqxDropDownList({ disabled: false }); 
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
					params[`groupId${index + 1}`] = meta.GroupId;
					params[`removeEmpty${index + 1}`] = false;
				});
				
				const isFunctionLine = [1,2].includes(functionId);
			    const isFunctionAreaColumn = [3, 4, 5, 6, 10, 11, 12, 13, 14, 15].includes(functionId);
				const isFunctionLineColumn = [7,8,9,53,54,55,56,57,58,59,60,61,62,63].includes(functionId);
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
					  seriesTypes = ['line', 'line'];
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
				} else if ([53,54,55,56,57,58].includes(functionId)){
				  seriesColors = ['#ffffff', '#8aff8e'];
				}else if ([59,60,61,62,63].includes(functionId)){
				  seriesColors = ['#ffffff', '#8ae2ff'];
				}
				else if ([3, 4, 5, 6, 10, 11, 12, 13, 14, 15 ].includes(functionId)) {
				  seriesColors = ['#ffffff', '#ffa4c5'];
				  applyTransparency=true;
				} else if ([7,8,9].includes(functionId)) {
				  seriesColors = ['#ffffff', '#0cb1e6'];
				}else if (metadataList.length > 1) {
				  seriesColors = sorted.map((m, i) => {
				    if (i === 1) {
				      return 1==2 ? 'rgba(240, 171, 46, 0.5)' : '#0000ff'; // Yellow or blue based on condition
				    }
				    return '#ffffff'; // Default
				  });
				   applyTransparency=true;
				}
				const SelectedSorted = sorted.filter(
				  (item, index, self) =>
				    index === self.findIndex(
				      (t) => t.subGroupId === item.subGroupId && t.GroupId === item.GroupId
				    )
				);
				const excludedIds = [1,2,-1];
				
				let useDualYAxis = (
				   !excludedIds.includes(functionId) ||
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
					timeLabel:false,
					hasImage:true,
				}).then(() => {
				// $("#dropDownCryptoOptions").jqxDropDownList({ disabled: false }); 
			});
			}
	disableEnableCheckboxes(1, chartStates[`chart1`].allItems);
}
function getCheckedCountValues(checkboxArray) {
    return checkboxArray.filter(id => 
        $(id).length && $(id).jqxCheckBox('checked')
    ).length;
}
function techAnalysisCheck(){
	var isChecked = $("#tech-analysis").is(":checked");
	const isCandleStick = $('#candlestick-chart1').hasClass('active');
	if(isChecked)
 			{  $("#dropDownFunctions").jqxDropDownList('clearSelection');
				 chartStates[`chart1`].numberOfItems=1;  
	 
				$('#buySellContainer').removeClass("d-none").addClass("d-block"); 
				$('#functionOptionsMenu').removeClass("visible").addClass("invisible"); 
				$('#groupOfPeriod-chart1').removeClass("d-flex").addClass("d-none"); 
			/*	checkboxOptions.forEach(opt => {
						const id = `#jqxCheckBox-${cryptoGroupId}-${opt.index}-chart-1`;
						
						if (opt.index === 3 || opt.index === 4 || opt.index === 8) {
							$(id).show().jqxCheckBox({ disabled: false });
						} else {
							$(id).jqxCheckBox('uncheck');
							$(id).jqxCheckBox({ disabled: true });
							$(id).hide();
						}
					});*/
				  if(isCandleStick)
				{  $("#btn-checkboxes-container-chart-1").addClass("d-none").removeClass("d-block");
					if($(`#btn-checkboxes-container-chart-1`).attr('aria-expanded') === 'true')
				    	$(`#checkboxes-main-container-chart-1`).hide();
				}	
			 }
 		else 
 			{
				chartStates[`chart1`].numberOfItems=2;  
				$("#btn-checkboxes-container-chart-1").removeClass("d-none").addClass("d-block");
				if($(`#btn-checkboxes-container-chart-1`).attr('aria-expanded') === 'true')
				    	$(`#checkboxes-main-container-chart-1`).show();
				    	    
 			    $('#buySellContainer').removeClass("d-block").addClass("d-none");
 			    $('#functionOptionsMenu').removeClass("invisible").addClass("visible"); 
 			    $('#groupOfPeriod-chart1').removeClass("d-none").addClass("d-flex"); 
 			/*    checkboxOptions.forEach(opt => {
						const id = `#jqxCheckBox-${cryptoGroupId}-${opt.index}-chart-1`;
						$(id).jqxCheckBox('uncheck');
						if (id.includes('-5-') || id.includes('-8-')) {
							$(id).jqxCheckBox('check');
						}
						$(id).show().jqxCheckBox({ disabled: false });
					});*/
					
 			}
 			loadChart1Data(ChartManager.instances['chart1'],getActiveTimeRange(),false);
}
function disableEnableCheckboxes(chartId, allItems) {
    const chartKey = `chart${chartId}`;
    const checkedCount = getCheckedCountValues(chartStates[chartKey].allItems);
    const maxItems = chartStates[chartKey].numberOfItems;

    if (checkedCount >= maxItems) {

        // Disable all
        allItems.forEach(id => $(id).jqxCheckBox({ disabled: true }));

        // Re-enable checked ones
        checkedItemIdsPerChart[chartId].forEach(id =>
            $(id).jqxCheckBox({ disabled: false })
        );

        if (chartId === 1 && $('#dropDownFunctions').length) {
            $("#dropDownFunctions").jqxDropDownList({ disabled: true });
        }

    } else {

        // Enable all
        allItems.forEach(id =>
            $(id).jqxCheckBox({ disabled: false })
        );

        if (chartId === 1 && $('#dropDownFunctions').length) {
            $("#dropDownFunctions").jqxDropDownList({ disabled: false });
        }
    }
}
function getDataChart2() {

	const chartId = '2';
	const chartKey = `chart${chartId}`;
	const manager = ChartManager.instances[chartKey] || new ChartManager(chartKey, options, `#longend${chartId}-container`);

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
			  data-target="#checkboxes-main-container-chart-2"
			  aria-expanded="false"
			  aria-controls="checkboxes-main-container-chart-2">
			  <span class="left">
			    <span class="label">Select Factor</span>
			  </span>
			  <i class="fa-solid fa-chevron-down chev ms-auto"></i>
			</button>
		    <div id="checkboxes-main-container-chart-2" class="collapse">
			    <div id="checkboxes-container-chart-2"></div>
			    <div class="col-12 d-flex pb-3 pt-2">
						<input  aria-expanded="true" aria-controls="collapseFilter" class="btn btn-primary mr-1 mb-1" style="margin-right: 1rem!important; color:white;" type="button" id="show-chart-2" value="Show" />
						<input id="clear-filter-chart-2" type="button" style="margin-right: 1rem!important;" class="btn btn-light-secondary mr-1 mb-1" value="Clear" />
				</div>
		    </div>`);
			
			initializeShowFilterButtonForChart('2');
		    const selectedGroupsId = groupId;
	
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

function getDataChart4() { // trendfollowing

	const chartId = '4';
	const manager = new ChartManager(`chart${chartId}`, options, `#longend${chartId}-container`);
	chartStates.chart3.candleStickId=4;
	const fromDate = new Date();

	fromDate.setMonth(fromDate.getMonth() - 1);
	fromDate.setHours(0, 0, 0, 0);

	manager.state.defaultFromDate = fromDate;
	manager.state.defaultToDate = new Date();
	if (manager && manager.chart) {

		updateTrendFollowingGraph(chartId, manager, false);
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
			
			    <div class="d-flex align-items-center pl-3">
			    	<div id="dropdown1" class="mt-2"></div>
				    <div class="ml-2 mt-2">
						<i class="fa-solid fa-xmark" id="reset1"></i>
					</div>
				</div>
				<div class="d-flex align-items-center pl-3">
			    	<div id="dropdown2" class="mt-2"></div>
				    <div class="ml-2 mt-2">
						<i class="fa-solid fa-xmark" id="reset2"></i>
					</div>
				</div>
				<div class="d-flex align-items-center pl-3">
			    	<div id="dropdown3" class="mt-2"></div>
				    <div class="ml-2 mt-2">
						<i class="fa-solid fa-xmark" id="reset3"></i>
					</div>
				</div>
				<div class="d-flex align-items-center pl-3">
			    	<div id="dropdown4" class="mt-2"></div>
				    <div class="ml-2 mt-2">
						<i class="fa-solid fa-xmark" id="reset4"></i>
					</div>
				</div>
				<div class="d-grid pt-5 pl-3">
					<label>
			            <input type="radio" name="options" value="0"> Short
			        </label>
			        <label>
			            <input type="radio" name="options" value="1"> Medium
			        </label>
			        <label>
			            <input type="radio" name="options" value="2"> Long
			        </label>
		        </div>
		        
		        <div class="d-flex align-items-center pl-3">
			    	<div id="dropdown5" class="mt-2"></div>
				    <div class="ml-2 mt-2">
						<i class="fa-solid fa-xmark" id="reset5"></i>
					</div>
				</div>
				<div class="d-flex align-items-center pl-3">
			    	<div id="dropdown6" class="mt-2"></div>
				    <div class="ml-2 mt-2">
						<i class="fa-solid fa-xmark" id="reset6"></i>
					</div>
				</div>
				<div class="d-flex align-items-center pl-3">
			    	<div id="dropdown7" class="mt-2"></div>
				    <div class="ml-2 mt-2">
						<i class="fa-solid fa-xmark" id="reset7"></i>
					</div>
				</div>
		    `);
		// Initial load with first ticker

		dropdownIds.forEach(id => {

			$(`#${id}`).jqxDropDownList({
				source: dropdownOptionSource[id],
				displayMember: "label",
				valueMember: "id",
				width: 100,
				height: 30,
				autoDropDownHeight: true,
				selectedIndex: -1,
				theme: 'dark'
			});


			$(`#${id}`).off('select').on('select', function() {

				// Skip programmatic/bulk updates
				if (chartStates.chart3.isProgrammaticDropdownUpdate || chartStates.chart3.isRefreshingDropdowns || chartStates.chart3.isBulkUpdatingDropdowns)
					return;

				// Disable all reset icons
				dropdownIds.forEach((dd, index) => {
					const resetId = "reset" + (index + 1);
					$(`#${resetId}`).addClass('disabled').css({
						pointerEvents: 'none',
						opacity: 0.5,
						cursor: 'not-allowed'
					});
				});

				const chartId = '4';
				const manager = ChartManager.instances.chart4;

			        chartStates.chart3.suppressTrendFollowingReload = true;
				// Reload chart only for user-initiated event
				updateTrendFollowingGraph(
					chartId,
					manager,
					true
				);

				// Refresh UNIQUE selection logic
				chartStates.chart3.isRefreshingDropdowns = true;
				setTimeout(() => {
		                 refreshAllDropdowns(dropdownIds);
					chartStates.chart3.isRefreshingDropdowns = false;
				});

				validateRadioSelection();
			});

		});
		$('input[name="options"]').on('change', function() {
			let selected = $(this).val();
			let group;
		
		  bindResetGroup(dropdownIds, 4);
		
			if (selected === "0") group = defaultSelections.short;
			else if (selected === "1") group = defaultSelections.medium;
			else if (selected === "2") group = defaultSelections.long;
		
			if (group) {
		    chartStates.chart3.isBulkUpdatingDropdowns = true;
		
				const dropdownA = ['dropdown1', 'dropdown2', 'dropdown3', 'dropdown4'];
				const dropdownB = ['dropdown5', 'dropdown6', 'dropdown7'];

				const sourceAValues = group.filter(id => sourceAIds.has(id));
				const sourceBValues = group.filter(id => sourceBIds.has(id));

				const applyValuesToDropdowns = (dropdownIds, values) => {
					dropdownIds.forEach((id, idx) => {
						const instance = $(`#${id}`);
						const valueToSelect = values[idx] ?? null;

						if (valueToSelect != null) {
							// instance.jqxDropDownList('selectItem', valueToSelect);
							instance.jqxDropDownList('val', valueToSelect);
						} else {
							instance.jqxDropDownList('clearSelection');
						}
					});
				};

				// 💡 Same logic as loadHistoryAndFillDropdowns
				applyValuesToDropdowns(dropdownA, sourceAValues);
				applyValuesToDropdowns(dropdownB, sourceBValues);
		
		    chartStates.chart3.isBulkUpdatingDropdowns = false;
		
				// ✅ One backend call after bulk change
				const chartId = '4';
				const manager = ChartManager.instances.chart4;
				updateTrendFollowingGraph(chartId, manager, true);
			}
		});

    	        bindResetGroup(dropdownIds, 4);

		getTrendFollowingHistory(3,dropdownIds);
		//updateTrendFollowingGraph(chartId,manager);


	});

}
async function updateTrendFollowingGraph(chartId, manager, saveHistory) {
	if ( chartStates.chart3.trendFollowingLoading) return;   // ✅ stop re-entry
   		chartStates.chart3.trendFollowingLoading = true;
  
	try {
	
  setDropdownGroupDisabled(dropdownIds, true);

  if(saveHistory)
     saveTrendLineHistory(isShared,3,dropdownIds); //isShared
     
		const from = document.getElementById(`dateFrom-chart${chartId}`).value;
		const to = document.getElementById(`dateTo-chart${chartId}`).value;
		const timeRange = getActiveTimeRange();
		const period = getChartPeriod();
		const candlestickIsActive = $(`#candlestick-chart${chartId}`).hasClass('active');

		const selectedGroupsId = groupId;
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
			subGroupId1: '4',
			removeEmpty1: false,
			candlestickMode: candlestickIsActive,
			functionId: selectedFunctionIds,
			isFunctionGraph: selectedFunctionIds !== '' ? true : null
		};

		const api = "/cryptos/gettrendfollowingGraph";
		let titleA = selectedLiveCurrency + ' ( OHLC - 21:00 CLOSE )';//dropDownSource.find(c => c.groupId === commonParams[`groupId1`]).name;
		let titleB = commonParams[`isFunctionGraph`] ? 'with TIME&VOLATILITY WEIGHTED ARRAYS' : '';

		const selectedFunctionIdsArray = getAllSelectedDropdownValues(dropdownIds);
		//   resetAndReassignDropdowns(selectedFunctionIdsArray);

		let colorsArray = [];
		let strokecolorsArray = [];
		let isCentredArray = [false];
		let seriesSidesArray = ['left'];
		let yxannotaionRequired = [];
		const baseColors = ['#ffffff', '#fac1e2', '#e436c1', '#42f5c5', '#57f542', '#30d781', '#30d781', '#30d781'];

		// MAIN PRICE SERIES — always index 0
		colorsArray.push(function({ value, seriesIndex }) {
			// Always return base color for the price / first series
			return baseColors[0];
		});
		strokecolorsArray.push(function({ value, seriesIndex }) {
			// Always return base color for the price / first series
			return '#ffffff';
		});
			
			let rightSeriesIndex = null;
		selectedFunctionIdsArray.forEach((val, index) => {
			if (val === null || val === undefined) return;
			
				 if (index >= 4 && rightSeriesIndex === null) {
			        rightSeriesIndex = colorsArray.length;
			    }
			const base = FUNCTION_COLOR_MAP[val] === undefined ? baseColors[index + 1] : FUNCTION_COLOR_MAP[val] || '#2e75b6';  // shift because index 0 is already taken
			
			colorsArray.push(function({ value, seriesIndex, w }) {
			
				try {
					// HISTOGRAM SERIES STARTING FROM index >= 4
					if (index >= 4) {
						if (value == null || isNaN(value)) return base;
						return value <= 0 ? '#f23a3aa3' : '#30d7818c';
					}
			
					// NORMAL LINE SERIES (close, ma, rsi, etc.)
					return base;
			
				} catch (e) {
					console.error("Color calc error", e);
					return base;
				}
			});
			strokecolorsArray.push(function({ value, seriesIndex, w }) {
			
				try {
					// HISTOGRAM SERIES STARTING FROM index >= 4
					if (index >= 4) {
						if (value == null || isNaN(value)) return base;
						return value <= 0 ? '#f23a3a' : '#30d781';
					}
			
					// NORMAL LINE SERIES (close, ma, rsi, etc.)
					return base;
			
				} catch (e) {
					console.error("Color calc error", e);
					return base;
				}
			});
			    
			if (index <= 3) {
				// dropdown1–4 (index 0–3)
				isCentredArray.push(false);
				seriesSidesArray.push('left');
			} else {
				// dropdown5–7 (index 4–6)
				isCentredArray.push(true);
				seriesSidesArray.push('right');
			}
		    
			  
		});
	if (rightSeriesIndex !== null) {
	    yxannotaionRequired = [true, rightSeriesIndex];
	} else {
	    yxannotaionRequired = [false];
	}

		if (candlestickIsActive) {
			let seriesTypes = ["candlestick"];  // always first
		
			selectedFunctionIdsArray.forEach((val, index) => {
				if (val !== null) {
					if (index <= 3) {
						// dropdown1–4 (index 0–3)
						seriesTypes.push("line");
					} else {
						// dropdown5–7 (index 4–6)
						seriesTypes.push("column");
					}
				}
			});
			await manager.loadData({
				service: manager._lastService || "cryptos",
				api: api,
				name: `${titleA} ${titleB}`,
				applyTitle: true,
				removeEmpty: manager._lastRemoveEmpty || false,
				saveHistory: false,
				fromOverride: manager.state.defaultFromDate,
				toOverride: manager.state.defaultToDate,
				applyDb: false,
				seriesTypes: seriesTypes, // Adjust if more //['line', 'line', 'line', 'line', 'line'], // Adjust if more
				seriesColors: colorsArray,
				seriesStrokesColors: strokecolorsArray,
				seriesSides: seriesSidesArray,
				isCentred: isCentredArray,
				useDualYAxis: true,
				dataParam: commonParams,
				useShortFormatList: [false],
				interval: 'Daily',
				disableMarkers: true,
				markerSizeArray: [1, 0, 0, 0, 0],
				yAnnotaionRequired: yxannotaionRequired,
				showLegend: false,
				combineTooltips: true,
				timeLabel: false,
				hasImage: true,
			}).then(() => {
			
			setDropdownGroupDisabled(dropdownIds, false);
				// 🔓 Re-enable all reset buttons after loading is done
		    dropdownResetIds.forEach(id => {
					$(`#${id}`).removeClass('disabled').css({
						pointerEvents: '',
						opacity: '',
						cursor: ''
					});
				});

			});

			manager._disableChartSettings(true, ['fontOptions']);
		} else {
			let seriesTypes = ["line"];  // always first

			selectedFunctionIdsArray.forEach((val, index) => {
				if (val !== null) {
					if (index <= 3) {
						// dropdown1–4 (index 0–3)
						seriesTypes.push("line");
					} else {
						// dropdown5–7 (index 4–6)
						seriesTypes.push("column");
					}
				}
			});

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
				useDualYAxis: true,
				seriesTypes: seriesTypes, // Adjust if more //['line', 'line', 'line', 'line', 'line'], // Adjust if more
				seriesColors: colorsArray,
				seriesStrokesColors: strokecolorsArray,
				seriesSides: seriesSidesArray,
				isCentred: isCentredArray,
				disableMarkers: true,
				markerSizeArray: [1, 0, 0, 0, 0],
				yAnnotaionRequired: yxannotaionRequired,
				combineTooltips: true,
				hasImage: true,
			}).then(() => {
		    setDropdownGroupDisabled(dropdownIds, false);
				// 🔓 Re-enable all reset buttons after loading is done
		    dropdownResetIds.forEach(id => {
					$(`#${id}`).removeClass('disabled').css({
						pointerEvents: '',
						opacity: '',
						cursor: ''
					});
				});

			});
		}
	} finally {
		   chartStates.chart3.trendFollowingLoading = false;
        setTimeout(() => chartStates.chart3.suppressTrendFollowingReload = false, 275);
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
			result: cachedTrendlineResult
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
	//$("#dropDownCryptoOptions").jqxDropDownList({ disabled: true }); 
	$("#reset").trigger("click", [true]);
	// 1️⃣ Set active button FIRST
	$('#DailyData-btn').toggleClass('active', time === 1);
	$('#4HoursData-btn').toggleClass('active', time === 2);
	$('#weeklyData-btn').toggleClass('active', time === 3);
	
	BuySelldropdownIds.forEach((dropdownId, index) => {
	       
	        const instance = $(`#${dropdownId}`);
			instance.jqxDropDownList('clearSelection');
	        
	    });
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
	
	var isChecked = $("#tech-analysis").is(":checked");

	if (timeRange === "4h") {
		$('#euroTime').removeClass("d-flex").addClass("d-none");
		}
	 if (timeRange === "Daily") {
		$('#functionOptionsMenu').addClass("d-flex").removeClass("d-none");
		$('#euroTime').addClass("d-flex").removeClass("d-none");
		$('#buySellSwitchbutton').addClass("d-flex").removeClass("d-none");
		if(isChecked)
			{   
				chartStates[`chart1`].numberOfItems=1;

				checkboxOptions.forEach(opt => {
						const id = `#jqxCheckBox-${cryptoGroupId}-${opt.index}-chart-1`;
						if (opt.index === 3 || opt.index === 4 || opt.index === 8) {
							$(id).show().jqxCheckBox({ disabled: false });
						} else {
							$(id).jqxCheckBox('uncheck');
							$(id).jqxCheckBox({ disabled: true });
							$(id).hide();
						}
					});
				getTrendFollowingHistory(1,BuySelldropdownIds);
				$('#buySellContainer').addClass("d-block").removeClass("d-none");
			}

		} 
		if (timeRange === "1w" || timeRange === "4h") {
			
			chartStates[`chart1`].numberOfItems=2;
			
		$('#functionOptionsMenu').removeClass("d-flex").addClass("d-none");
			$('#buySellContainer').removeClass("d-block").addClass("d-none");
			$('#buySellSwitchbutton').removeClass("d-flex").addClass("d-none");
			if(isChecked)
			{
			  checkboxOptions.forEach(opt => {
							const id = `#jqxCheckBox-${cryptoGroupId}-${opt.index}-chart-1`;
							$(id).jqxCheckBox('uncheck');
							if (id.includes('-5-') || id.includes('-8-')) {
								$(id).jqxCheckBox('check');
							}
							$(id).show().jqxCheckBox({ disabled: false });
						});
				}
	}

	const selectedGroupId = groupId;
	// 5️⃣ Trigger re-render
	if(!isChecked || timeRange !== "Daily")
	{
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
     
   
    $.get('/admin/getfunctions/' + groupId, function (data) {

        allFunctions = data;
        loadfunctionGroupDropDown(data);
        
    });
    
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
function loadfunctionGroupDropDown(data,loadAll) {

    var groupsMap = {};

    data.forEach(function (item) {
        if (!groupsMap[item.groupId]) {
            groupsMap[item.groupId] = {
                groupId: item.groupId,
                groupName: item.groupName
            };
        }
    });

    var groups = Object.values(groupsMap);

    var groupSource = {
        datatype: "json",
        datafields: [
            { name: 'groupId' },
            { name: 'groupName' }
        ],
        localdata: groups
    };

    var groupAdapter = new $.jqx.dataAdapter(groupSource);

    $("#functionGroupDropDown").jqxDropDownList({
        source: groupAdapter,
        displayMember: "groupName",
        valueMember: "groupId",
        placeHolder: "Select a Function",
        width: 140,
        height: 40,
        theme: 'dark',
        selectedIndex:0,
         autoDropDownHeight: true,
    });
    var filtered = allFunctions.filter(function (item) {
	        return item.groupId == $("#functionGroupDropDown").val();
	    });
     loadFunctionDropdown(loadAll?data:filtered);
    // 🔥 filter functions when group changes
    $("#functionGroupDropDown").on('select', function (event) {
        if (event.args) {
            var selectedGroupId = event.args.item.value;
            filterFunctions(selectedGroupId);
        }
    });
}
function loadFunctionDropdown(data) {

    var functionSource = {
        datatype: "json",
        datafields: [
            { name: 'id' },
            { name: 'description' }
        ],
        localdata: data
    };

    var functionAdapter = new $.jqx.dataAdapter(functionSource);

    $("#dropDownFunctions").jqxDropDownList({
        //dropDownHeight: 480,
        source: functionAdapter,
        placeHolder: " ",
        displayMember: "description",
        valueMember: "id",
        theme: 'dark',
        width: 90,
        height: 40,
        selectedIndex: -1,
         autoDropDownHeight: true,
    });

    // ✅ FIX: always open after binding
    $("#dropDownFunctions")
        .off('bindingComplete')
        .on('bindingComplete', function () {
           $(this).jqxDropDownList('open');
        });
}
function filterFunctions(groupId) {

    var filtered = allFunctions.filter(function (item) {
        return item.groupId == groupId;
    });
   // $("#dropDownFunctions").jqxDropDownList('clearSelection'); 
   $('#reset').click();
    loadFunctionDropdown(filtered);
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

async function toggleCandlestickChartTrendFollowing(btn, id) {
		const isActive = btn.classList.contains('active');
		const selectedGroupId = groupId;
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
function getAllSelectedValues(dropdownIdsArray) {
  const selected = {};
  dropdownIdsArray.forEach(id => {
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

  const source = dropdownOptionSource[idToUpdate];  

  const filteredOptions = source.filter(opt =>
    !excluded.includes(opt.id) || opt.id === currentSelected
  );

  const instance = $(`#${idToUpdate}`);

  instance.jqxDropDownList({ source: filteredOptions });

  if (currentSelected && filteredOptions.find(o => o.id === currentSelected)) {
    instance.jqxDropDownList('val', currentSelected);
  } else {
    instance.jqxDropDownList('clearSelection');
  }
}

function refreshAllDropdowns(dropdownIdsArray) {
  const currentSelections = getAllSelectedValues(dropdownIdsArray);
  dropdownIdsArray.forEach(id => updateDropdown(id, currentSelections));
}

function bindResetButton(resetBtnId, dropdownId, dropdownResetIdsArray, chartId = '4') {

	$(`#${resetBtnId}`).on("click", async  function (e, isProgrammatic = false) {

		
    // 🔒 Disable all reset buttons
    dropdownResetIdsArray.forEach(id => {
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
        if(chartId==4)
	       { refreshAllDropdowns(dropdownIds);
        const manager = ChartManager.instances[`chart${chartId}`];
        if (manager) {
	            await updateTrendFollowingGraph(chartId, manager, true); 
	        }
          }
          else if(chartId==1)
          {
			refreshAllDropdowns(BuySelldropdownIds);
			loadChart1Data(ChartManager.instances['chart1'],getActiveTimeRange(),false);
        }
    }

    dropdownResetIdsArray.forEach(id => {
        $(`#${id}`).removeClass('disabled').css({
            pointerEvents: '',
            opacity: '',
            cursor: ''
        });
    });
	});
}

function getTrendFollowingHistory(chartId, dropdownIdsArrays){

	    dropdownIdsArrays.forEach((dropdownId, index) => {
	       
	        const instance = $(`#${dropdownId}`);
			instance.jqxDropDownList('clearSelection');
	        
	    });
	    
	const selectedGroupsId = groupId;
			
	$.ajax({
		contentType: "application/json",
		url: "/graph/find-trend-following-history-by-userid-groupId-and-chartId/"+selectedGroupsId+`/${isShared}/${chartId}`,
		dataType: 'json',
		async: true,
		cache: false,
		timeout: 600000,
		success: function(result) {
			const manager = ChartManager.instances.chart4;
    				
			if(result.length==0)
				{
				if(chartId==1) 
					loadChart1Data(ChartManager.instances['chart1'],getActiveTimeRange(),false);
			    else
					updateTrendFollowingGraph(4,manager,false);
					 
					chartStates[`chart${chartId}`].trendfollowingDbId = null;	
				}
				else{
					
					if(chartId==1) 
					{ 
							chartStates[`chart${chartId}`].trendfollowingDbId = result[0].id;	
						
						    result[0].functionId!=""?
							loadHistoryAndFillDropdownsChart1(result[0]):
					        loadChart1Data(ChartManager.instances['chart1'],getActiveTimeRange(),false);
					}
				    else
						{
					if(result[0].isCandleStick)
						$("#candlestick-chart4").addClass('active');
					else
						$("#candlestick-chart4").removeClass('active');	
							chartStates[`chart${chartId}`].trendfollowingDbId = result[0].id;	
					
					
					result[0].functionId!=""?
					loadHistoryAndFillDropdowns(result[0]):
							updateTrendFollowingGraph(4,manager,false);  
						}
					
				}
		},
		error: function(e) {

			console.log("ERROR : ", e);

		}
	});
}
function loadHistoryAndFillDropdownsChart1(data) {

   chartStates.chart1.isProgrammaticDropdownUpdate = true;

    // 1) Parse stored functionId string → [20,21,22,30]
    const allFunctionIds = (data.functionId || '')
        .split(',')
        .map(v => v.trim())
        .filter(v => v.length > 0)
        .map(v => parseInt(v, 10));

    // 2) Split by source
    const sourceAValues = allFunctionIds.filter(id => sourceA1Ids.has(id));
    const sourceBValues = allFunctionIds.filter(id => sourceB1Ids.has(id));

    const dropdownA = ['dropdown1bs', 'dropdown2bs', 'dropdown3bs', 'dropdown4bs'];
    const dropdownB = ['dropdown5bs', 'dropdown6bs', 'dropdown7bs', 'dropdown8bs'];

    const applyValuesToDropdowns = (dropdownIds, values) => {
        dropdownIds.forEach((dropdownId, index) => {
            const instance = $(`#${dropdownId}`);
            const valueToSelect = values[index] ?? null;

            if (valueToSelect != null) {
                instance.jqxDropDownList('val', valueToSelect);

                const item = instance.jqxDropDownList('getItemByValue', valueToSelect);
                if (item) {
                    // ignored while isProgrammaticDropdownUpdate = true
                    instance.trigger('select', { item });
                }
            } else {
                instance.jqxDropDownList('clearSelection');
            }
        });
    };

    // 3) Apply A values to dropdown1–4, B values to dropdown5–7
    applyValuesToDropdowns(dropdownA, sourceAValues);
    applyValuesToDropdowns(dropdownB, sourceBValues);

    // 4) Radio buttons logic stays based on full list
    setTimeout(() => {
        chartStates.chart1.isProgrammaticDropdownUpdate = false;
        refreshAllDropdowns(BuySelldropdownIds);
      
    }, 200);
}

function loadHistoryAndFillDropdowns(data) {

   chartStates.chart3.isProgrammaticDropdownUpdate = true;

    // 1) Parse stored functionId string → [20,21,22,30]
    const allFunctionIds = (data.functionId || '')
        .split(',')
        .map(v => v.trim())
        .filter(v => v.length > 0)
        .map(v => parseInt(v, 10));

    // 2) Split by source
    const sourceAValues = allFunctionIds.filter(id => sourceAIds.has(id));
    const sourceBValues = allFunctionIds.filter(id => sourceBIds.has(id));

    const dropdownA = ['dropdown1', 'dropdown2', 'dropdown3', 'dropdown4'];
    const dropdownB = ['dropdown5', 'dropdown6', 'dropdown7'];

    const applyValuesToDropdowns = (dropdownIds, values) => {
    dropdownIds.forEach((dropdownId, index) => {
        const instance = $(`#${dropdownId}`);
            const valueToSelect = values[index] ?? null;

            if (valueToSelect != null) {
            instance.jqxDropDownList('val', valueToSelect);

            const item = instance.jqxDropDownList('getItemByValue', valueToSelect);
            if (item) {
                    // ignored while isProgrammaticDropdownUpdate = true
                    instance.trigger('select', { item });
            }
        } else {
            instance.jqxDropDownList('clearSelection');
        }
    });
    };

    // 3) Apply A values to dropdown1–4, B values to dropdown5–7
    applyValuesToDropdowns(dropdownA, sourceAValues);
    applyValuesToDropdowns(dropdownB, sourceBValues);

    // 4) Radio buttons logic stays based on full list
    setTimeout(() => {
        chartStates.chart3.isProgrammaticDropdownUpdate = false;
        refreshAllDropdowns(dropdownIds);

        if (arraysEqual(allFunctionIds, defaultSelections.short)) {
            $('input[name="options"][value="0"]').prop('checked', true);
        } else if (arraysEqual(allFunctionIds, defaultSelections.medium)) {
            $('input[name="options"][value="1"]').prop('checked', true);
        } else if (arraysEqual(allFunctionIds, defaultSelections.long)) {
            $('input[name="options"][value="2"]').prop('checked', true);
        } else {
            $('input[name="options"]').prop('checked', false);
        }
    }, 200);
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((val, idx) => val === arr2[idx]);
}
function validateRadioSelection() {

    const currentValues = dropdownIds.map(id => {
        const val = $(`#${id}`).jqxDropDownList('val');
        return val ? parseInt(val) : null;
    }).filter(v => v !== null); // ignore empty slots

    // strict comparison
    if (arraysEqual(currentValues, defaultSelections.short)) {
        $('input[name="options"][value="0"]').prop('checked', true);
    } else if (arraysEqual(currentValues, defaultSelections.medium)) {
        $('input[name="options"][value="1"]').prop('checked', true);
    } else if (arraysEqual(currentValues, defaultSelections.long)) {
        $('input[name="options"][value="2"]').prop('checked', true);
    } else {
        // no exact match -> uncheck all
        $('input[name="options"]').prop('checked', false);
    }
}

async function saveTrendLineHistory(isShared, chartId, dropdownIdsArrays) {
	
					
		if (chartStates[`chart${chartId}`].isProcessingRemoteUpdate) {
	        console.log("Skipping save due to remote-triggered update");
	        chartStates[`chart${chartId}`].isProcessingRemoteUpdate = false;
	        
	        return;
	    }
	    const candleStickId = chartStates[`chart${chartId}`].candleStickId;
    	const url = '/graph/save-trend-following-history'; 
        const candlestickIsActive = $(`#candlestick-chart${candleStickId}`).hasClass('active');
	    
        const selectedFunctionIds = dropdownIdsArrays.map(id => {
            const item = $(`#${id}`).jqxDropDownList('getSelectedItem');
            return item ? item.originalItem.id : null;
        })
        .filter(id => id !== null)
        .join(',');

        let entity = {
			id: chartStates[`chart${chartId}`].trendfollowingDbId,
            functionId: selectedFunctionIds,
            isCandleStick: candlestickIsActive,
            isShared: isShared ,
            groupId: groupId,
   	   chartId: chartId
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
            
            chartStates[`chart${chartId}`].trendfollowingDbId = result.id;
        
        } else {
            throw new Error('Failed to save trendline history');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function resetAndReassignDropdowns(values = []) {
    isProgrammaticDropdownUpdate = true;

   
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

function getAllSelectedDropdownValues(dropdownIdsArray) {

    return dropdownIdsArray.map(id => {
        const item = $(`#${id}`).jqxDropDownList('getSelectedItem');
        return item ? item.originalItem.id : null;
    });
}
function bindResetGroup(dropdownIds, chartId) {
    dropdownIds.forEach(dropdownId => {
        const resetId = dropdownId.replace('dropdown', 'reset');
        bindResetButton(resetId, dropdownId, dropdownIds, chartId);
    });
}
function setDropdownGroupDisabled(dropdownIds, isDisabled) {
    dropdownIds.forEach(id => {
        $(`#${id}`).jqxDropDownList({ disabled: isDisabled });
    });
}
function createChartState() {
    return {
        isRefreshingDropdowns:false,
 		isProgrammaticDropdownUpdate : false,
		isProcessingRemoteUpdate : false,
		isBulkUpdatingDropdowns : false,
		suppressTrendFollowingReload : false,
		trendFollowingLoading:false,
		trendfollowingDbId:null,
		numberOfItems:1,
		allItems:null,
		candleStickId:1
    };
}