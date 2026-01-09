var allitems = [
	'#jqxCheckBoxDax', // europe
	'#jqxCheckBoxDowjones', // wallstreet
	'#jqxCheckBoxNikkei',//asia
	'#jqxCheckBoxTadawul', // emerging
	'#jqxCheckBoxDollarIndex',
	'#jqxCheckBoxAll'
];

let isRanked = false;
let isDollarDominator = false;

const labelImageMap = {
		'NIFTY-32': '/img/flag/india.png',
		'NIFTY_USDINR-32': '/img/flag/india_usd.png',
		'CSI-32': '/img/flag/china.png',
		'CSI_USDCNY-32': '/img/flag/china_usd.png',
		'NIKKEI-32': '/img/flag/japan.png',
		'NIKKEI_USDJPY-32': '/img/flag/japan_usd.png',
		'KOSPI-32': '/img/flag/south-korea.png',
		'KOSPI_USDKRW-32': '/img/flag/south-korea_usd.png',
		'HANGSENG-32': '/img/flag/hong-kong.png',
		'HANGSENG_USDHKD-32': '/img/flag/hong-kong_usd.png',
		'HISMBI-32': '/img/flag/hismbi.png',
		'HISMBI_USDHKD-32': '/img/flag/hismbi_usd.png',
		'HISMPI-32': '/img/flag/hismpi.png',
		'HISMPI_USDHKD-32': '/img/flag/hismpi_usd.png',
		
		'DOWJONES-33': '/img/flag/united-states.png',
		'SANDP-33': '/img/flag/united-states.png',
		'NASDAQ-33': '/img/flag/united-states.png',
		'RUSSELL-33': '/img/flag/united-states.png',
		'FANG-33': '/img/flag/united-states.png',
		'DJMAJORBANKS-33': '/img/flag/united-states.png',
		'DJREGIONALBANKS-33': '/img/flag/united-states.png',
		
		'DAX-34': '/img/flag/germany.png',
		'DAX_EURUSD-34': '/img/flag/usa-ger.png',
		'CAC-34': '/img/flag/france.png',
		'CAC_EURUSD-34': '/img/flag/france_usd.png',
		'MIB-34': '/img/flag/italy.png',
		'MIB_EURUSD-34': '/img/flag/italy_usd.png',
		'FTSE-34': '/img/flag/united-kingdom.png',
		'FTSE_GBPUSD-34': '/img/flag/usa-uk.png',
		'STOXX50-34': '/img/flag/eu.png',
		'STOXX50_EURUSD-34': '/img/flag/eu_usd.png',
		'STOXX600-34': '/img/flag/eu.png',
		'STOXX600_EURUSD-34': '/img/flag/eu_usd.png',
		'EUBANKS-34': '/img/flag/ecb.png',
		'EUBANKS_EURUSD-34': '/img/flag/ecb_usd.png',
		
		
		'TADAWUL-35': '/img/flag/saudi-arabia.png',
		'TADAWUL_USDSAR-35': '/img/flag/saudi-arabia_usd.png',
		'EGX-35': '/img/flag/egypt.png',
		'EGX_USDEGP-35': '/img/flag/egypt_usd.png',
		'BIST-35': '/img/flag/turkey.png',
		'BIST_USDTRY-35': '/img/flag/turkey_usd.png',
		'MOEX-35': '/img/flag/russia.png',
		'MOEX_USDRUB-35': '/img/flag/russia_usd.png',
		'JSTTOP-35': '/img/flag/south-africa.png',
		'JSTTOP_USDZAR-35': '/img/flag/south-africa_usd.png',
		'BOVESPA-35': '/img/flag/brazil.png',
		'BOVESPA_USDBRL-35': '/img/flag/brazil_usd.png',
		'MEXBOL-35': '/img/flag/mexico.png',
		'MEXBOL_USDMXN-35': '/img/flag/mexico_usd.png',
		
	};
const titleGroupMap = {
		'32': 'ASIA Performance',
		'33': 'WALL STREET Performance',
		'34': 'EUROPE Performance',
		'35': 'EMERGING Performance',
		};
		
const configData = [
  // groupId = 32
  { "columnName": "32:NIKKEI", "displayName": "NIKKEI", "groupId": "32", "columnGroupId": "NIKKEI-32" ,"isDollarDominator":false },
  { "columnName": "32:NIKKEI_USDJPY", "displayName": "$-NIKKEI", "groupId": "32", "columnGroupId": "NIKKEI_USDJPY-32", "isDollarDominator":true },
  { "columnName": "32:CSI", "displayName": "CSI", "groupId": "32", "columnGroupId": "CSI-32","isDollarDominator":false },
  { "columnName": "32:CSI_USDCNY", "displayName": "$-CSI", "groupId": "32", "columnGroupId": "CSI_USDCNY-32" ,"isDollarDominator":true},
  { "columnName": "32:NIFTY", "displayName": "NIFTY", "groupId": "32", "columnGroupId": "NIFTY-32", "isDollarDominator":false },
  { "columnName": "32:NIFTY_USDINR", "displayName": "$-NIFTY", "groupId": "32", "columnGroupId": "NIFTY_USDINR-32", "isDollarDominator":true },
  { "columnName": "32:KOSPI", "displayName": "KOSPI", "groupId": "32", "columnGroupId": "KOSPI-32" ,"isDollarDominator":false},
  { "columnName": "32:KOSPI_USDKRW", "displayName": "$-KOSPI", "groupId": "32", "columnGroupId": "KOSPI_USDKRW-32" ,"isDollarDominator":true },
  { "columnName": "32:HANGSENG", "displayName": "HANGSENG", "groupId": "32", "columnGroupId": "HANGSENG-32" ,"isDollarDominator":false },
  { "columnName": "32:HANGSENG_USDHKD", "displayName": "$-HANGSENG", "groupId": "32", "columnGroupId": "HANGSENG_USDHKD-32" ,"isDollarDominator":true},
  { "columnName": "32:HISMBI", "displayName": "HSI^ BANKING", "groupId": "32", "columnGroupId": "HISMBI-32" ,"isDollarDominator":false},
  { "columnName": "32:HISMBI_USDHKD", "displayName": "$-HSI BANKING", "groupId": "32", "columnGroupId": "HISMBI_USDHKD-32" ,"isDollarDominator":true },
  { "columnName": "32:HISMPI", "displayName": "HSI^ PROPERTY", "groupId": "32", "columnGroupId": "HISMPI-32" ,"isDollarDominator":false},
  { "columnName": "32:HISMPI_USDHKD", "displayName": "$-HSI PROPERTY", "groupId": "32", "columnGroupId": "HISMPI_USDHKD-32" ,"isDollarDominator":true},
  // groupId = 33
  { "columnName": "33:DOWJONES", "displayName": "DOWJONES", "groupId": "33", "columnGroupId": "DOWJONES-33" ,"isDollarDominator":true},
  { "columnName": "33:SANDP", "displayName": "S&P", "groupId": "33", "columnGroupId": "SANDP-33" ,"isDollarDominator":true},
  { "columnName": "33:NASDAQ", "displayName": "NASDAQ", "groupId": "33", "columnGroupId": "NASDAQ-33" ,"isDollarDominator":true},
  { "columnName": "33:RUSSELL", "displayName": "RUSSELL", "groupId": "33", "columnGroupId": "RUSSELL-33" ,"isDollarDominator":true},
  { "columnName": "33:FANG", "displayName": "FANG+", "groupId": "33", "columnGroupId": "FANG-33" ,"isDollarDominator":true},
  { "columnName": "33:DJMAJORBANKS", "displayName": "DJ MAJOR BANKS", "groupId": "33", "columnGroupId": "DJMAJORBANKS-33" ,"isDollarDominator":true},
  { "columnName": "33:DJREGIONALBANKS", "displayName": "DJ REGIONAL BANKS", "groupId": "33", "columnGroupId": "DJREGIONALBANKS-33" ,"isDollarDominator":true},

  // groupId = 34
  { "columnName": "34:DAX", "displayName": "DAX", "groupId": "34", "columnGroupId": "DAX-34","isDollarDominator":false },
  { "columnName": "34:DAX_EURUSD", "displayName": "$-DAX", "groupId": "34", "columnGroupId": "DAX_EURUSD-34" ,"isDollarDominator":true},
  { "columnName": "34:CAC", "displayName": "CAC", "groupId": "34", "columnGroupId": "CAC-34" ,"isDollarDominator":false},
  { "columnName": "34:CAC_EURUSD", "displayName": "$-CAC", "groupId": "34", "columnGroupId": "CAC_EURUSD-34" ,"isDollarDominator":true},
  { "columnName": "34:MIB", "displayName": "MIB", "groupId": "34", "columnGroupId": "MIB-34" ,"isDollarDominator":false},
  { "columnName": "34:MIB_EURUSD", "displayName": "$-MIB", "groupId": "34", "columnGroupId": "MIB_EURUSD-34" ,"isDollarDominator":true},
  { "columnName": "34:FTSE", "displayName": "FTSE", "groupId": "34", "columnGroupId": "FTSE-34" ,"isDollarDominator":false},
  { "columnName": "34:FTSE_GBPUSD", "displayName": "$-FTSE", "groupId": "34", "columnGroupId": "FTSE_GBPUSD-34" ,"isDollarDominator":true},
  { "columnName": "34:STOXX50", "displayName": "STOXX-50", "groupId": "34", "columnGroupId": "STOXX50-34" ,"isDollarDominator":false},
  { "columnName": "34:STOXX50_EURUSD", "displayName": "$-STOXX-50", "groupId": "34", "columnGroupId": "STOXX50_EURUSD-34" ,"isDollarDominator":true},
  { "columnName": "34:STOXX600", "displayName": "STOXX-600", "groupId": "34", "columnGroupId": "STOXX600-34" ,"isDollarDominator":false},
  { "columnName": "34:STOXX600_EURUSD", "displayName": "$-STOXX-600", "groupId": "34", "columnGroupId": "STOXX600_EURUSD-34" ,"isDollarDominator":true},
  { "columnName": "34:EUBANKS", "displayName": "EU-BANKS", "groupId": "34", "columnGroupId": "EUBANKS-34" ,"isDollarDominator":false},
  { "columnName": "34:EUBANKS_EURUSD", "displayName": "$-EU-BANKS", "groupId": "34", "columnGroupId": "EUBANKS_EURUSD-34" ,"isDollarDominator":true},

  // groupId = 35
  { "columnName": "35:TADAWUL", "displayName": "TADAWUL", "groupId": "35", "columnGroupId": "TADAWUL-35" ,"isDollarDominator":false},
  { "columnName": "35:TADAWUL_USDSAR", "displayName": "$-TADAWUL", "groupId": "35", "columnGroupId": "TADAWUL_USDSAR-35" ,"isDollarDominator":true},
  { "columnName": "35:EGX", "displayName": "EGX", "groupId": "35", "columnGroupId": "EGX-35" ,"isDollarDominator":false},
  { "columnName": "35:EGX_USDEGP", "displayName": "$-EGX", "groupId": "35", "columnGroupId": "EGX_USDEGP-35" ,"isDollarDominator":true},
  { "columnName": "35:BIST", "displayName": "BIST", "groupId": "35", "columnGroupId": "BIST-35" ,"isDollarDominator":false},
  { "columnName": "35:BIST_USDTRY", "displayName": "$-BIST", "groupId": "35", "columnGroupId": "BIST_USDTRY-35" ,"isDollarDominator":true},
  { "columnName": "35:MOEX", "displayName": "MOEX", "groupId": "35", "columnGroupId": "MOEX-35" ,"isDollarDominator":false},
  { "columnName": "35:MOEX_USDRUB", "displayName": "$-MOEX", "groupId": "35", "columnGroupId": "MOEX_USDRUB-35" ,"isDollarDominator":true},
  { "columnName": "35:JSTTOP", "displayName": "JSTOP", "groupId": "35", "columnGroupId": "JSTTOP-35" ,"isDollarDominator":false},
  { "columnName": "35:JSTTOP_USDZAR", "displayName": "$-JSTOP", "groupId": "35", "columnGroupId": "JSTTOP_USDZAR-35" ,"isDollarDominator":true},
  { "columnName": "35:BOVESPA", "displayName": "BOVESPA", "groupId": "35", "columnGroupId": "BOVESPA-35" ,"isDollarDominator":false},
  { "columnName": "35:BOVESPA_USDBRL", "displayName": "$-BOVESPA", "groupId": "35", "columnGroupId": "BOVESPA_USDBRL-35" ,"isDollarDominator":true},
  { "columnName": "35:MEXBOL", "displayName": "MEXBOL", "groupId": "35", "columnGroupId": "MEXBOL-35" ,"isDollarDominator":false},
  { "columnName": "35:MEXBOL_USDMXN", "displayName": "$-MEXBOL", "groupId": "35", "columnGroupId": "MEXBOL_USDMXN-35" ,"isDollarDominator":true}
];

		
var json = {};
var dataGroupId = '';
var groupContainer = '';
var subgroup1Container = '';
var subgroup2Container = '';

var roundedValues = '';
var yaxisformat0 = '';

var selectedItems = []; // Array to store checked items in order


const graphName = "performanceGraph";

$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	
	const flatTreeData = [];
	const addedGroups = {};

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
	const treeSource = {
    datatype: "json",
    datafields: [
        { name: 'id' },
        { name: 'parentid' },
        { name: 'text' },
        { name: 'value' },
        { name: 'icon' }
    ],
    id: 'id',
    localdata: flatTreeData
};

const dataAdapter = new $.jqx.dataAdapter(treeSource);
dataAdapter.dataBind();

const treeRecords = dataAdapter.getRecordsHierarchy(
    'id', 'parentid', 'items',
    [
        { name: 'text', map: 'label' },
        { name: 'value', map: 'value' },
        { name: 'icon', map: 'icon' }
    ]
);

// Initialize DropDownButton (if not already done)
$("#dropDownButton").jqxDropDownButton({ theme: 'dark', width: 200, height: 35 });

// Initialize jqxTree with renderer
$("#treeWrapper").jqxTree({
    source: treeRecords,
    width: '100%',
    checkboxes: true,
    hasThreeStates: true,
    theme: 'dark'
});
setTimeout(() => {
    const items = $('#treeWrapper').jqxTree('getItems');

    items.forEach(item => {
        const $element = $(item.element).find('.jqx-tree-item');
        const icon = item.originalItem?.icon;

        if (icon && $element.length) {
            const img = `<img src="${icon}" style="width:16px; margin-right:5px; vertical-align:middle"/>`;
            const label = $element.text().trim();
            $element.html(img + label);
        }
    });
}, 100); // Wait until after rendering
	$("#toggleRankBtn").on('click', function () {
	    isRanked = !isRanked;
	
	    // Toggle active style (simulate radio button)
	    $(this).toggleClass('active', isRanked);
	
	    // Redraw the graph
	    drawGraph();
	    $("#toggleRankBtn").text(isRanked ? "Unrank" : "Rank");
	});
	
	
	$("#toggleDollarDominatorBtn").on('click', function () {
	    isDollarDominator = !isDollarDominator;
	
	    const checkedItemValues = checkedItemid.filter(item => item != null);
		    if(checkedItemValues[0]=='#jqxCheckBoxDollarIndex'){
				filteredData = configData.filter(item => item.isDollarDominator==true);
			}
			else
		    if(checkedItemValues[0]!="#jqxCheckBoxAll")
		    { 
			  
			  groupIdToFilter= itemValue[checkedItemValues[0]].GroupId;
		       if(isDollarDominator)
		      	filteredData = configData.filter(item => item.groupId === groupIdToFilter && item.isDollarDominator==isDollarDominator);
		      	else
		      	filteredData = configData.filter(item => item.groupId === groupIdToFilter);
		     }
		     else
		       {
				  
				if(isDollarDominator)
		      		filteredData = configData.filter(item => item.isDollarDominator==isDollarDominator);
		      	else
				   filteredData = configData;
				}
		    $("#dropDownSelection").jqxDropDownList({
		        source: filteredData,  // Bind the filtered data
		        displayMember: "displayName",  // Display name for each item
		        valueMember: "columnName"  // Value associated with each item
		    });
		     selectedItems=[];
		
		    
	 
	    $(this).toggleClass('active', isDollarDominator);
	
	    // Redraw the graph
	    drawGraph();
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
	    getGraphHistoryByScreenName("performanceGraph");
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
	 $('.jqx-checkbox').on('change', function (event) {
		     const checkedItemValues = checkedItemid.filter(item => item != null);
		     if(checkedItemValues[0]!="#jqxCheckBoxAll")
		    { 
			  
			  groupIdToFilter= itemValue[checkedItemValues[0]].GroupId;
		       if(isDollarDominator)
		      	filteredData = configData.filter(item => item.groupId === groupIdToFilter && item.isDollarDominator==isDollarDominator);
		      	else
		      	filteredData = configData.filter(item => item.groupId === groupIdToFilter);
		     }
		     else
		       {
				  
				if(isDollarDominator)
		      		filteredData = configData.filter(item => item.isDollarDominator==isDollarDominator);
		      	else
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
	performanceGraph(graphService, "performanceGraph", removeEmpty, true);
}

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

    if (count < 15) return 525;
    if (count >= 15 && count <= 20) return 755;
    return 1075; // More than 20
}
async function performanceGraph(graphService, graphName, removeEmpty, saveHistory) {
    try {
        // Show loader before making the request
        showLoader();

        var fromdate = formatDate(date);
        var dbDate = formatDateIntoDbDate(date);
        $("#date-display").val(formatDate());

        const checkedItemValues = checkedItemid.filter(item => item != null);
        
	    var checkedItems = selectedItems.join(', ')
	          
         let requestData;
         if(getChartPeriodPerformance()=='w')
         fromdate='Week '+getISOWeekNumber(date);
   
	  if(checkedItemid[0]=="#jqxCheckBoxDollarIndex"){
		 var checkedItemsisDollarDominator = configData.filter(item =>  item.isDollarDominator==true).map(item => item.columnName)  
  .join(", "); 
 		 requestData = [{
					            groupId1: checkedItemsisDollarDominator,
					            period: getChartPeriodPerformance(),
					            fromdate: dbDate,
					            fulldates:false
					        }];
	  }
	  else
      if(checkedItems!='')
	        requestData = [{
			            groupId1: checkedItems,
			            period: getChartPeriodPerformance(),
			            fromdate: dbDate,
			            fulldates:false
			        }];
	        else 
	        {
				      
		     if(isDollarDominator)
		       {
				var checkedItemsisDollarDominator = configData.filter(item => item.groupId === itemValue[checkedItemValues[0]].GroupId && item.isDollarDominator==isDollarDominator).map(item => item.columnName)  
  .join(", "); 
				requestData = [{
					            groupId1: checkedItemsisDollarDominator,
					            period: getChartPeriodPerformance(),
					            fromdate: dbDate,
					            fulldates:false
					        }];
					        }
			else requestData = [{
			            groupId1: itemValue[checkedItemValues[0]].GroupId,
			            period: getChartPeriodPerformance(),
			            fromdate: dbDate,
			            fulldates:false
			        }];
			        
			}
		 		

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
        	
        let min = Math.min(...data[0].values);
        let max = Math.max(...data[0].values);
        
       if(checkedItems!='')
        {
		
		const orderResult = reorderDataWithLabels(  data[0].labels.map(label => {return label.trim().replace(/\s*-\s*/g, '-')}),
				  data[0].values ,
				  selectedItems.map(label => {return label.split(':')[1]+'-'+label.split(':')[0]}));
			
        min = Math.min(...orderResult.data);
        max = Math.max(...orderResult.data);
         
		if (isRanked) {
			// Sort by values descending (positive to negative)
			const combined = orderResult.labels.map((label, i) => ({
				label: label,
				value: orderResult.data[i]
			}));
			combined.sort((a, b) => b.value - a.value);
			orderResult.labels = combined.map(item => item.label);
			orderResult.data = combined.map(item => item.value);
		}
		
        json.data = orderResult.data;
        json.labels = orderResult.labels.map(label => {
				    const cleanedLabel = label.trim().replace(/\s*-\s*/g, '-'); // Remove extra spaces
				    const matchedItem = configData.find(item => item.columnGroupId === cleanedLabel); 
				    return matchedItem ? matchedItem.displayName : cleanedLabel; // Return displayName if found, else label
				});
			       
        const result = getColorsAndImagesForLabels(orderResult.labels);
        json.images = result.images;
		}
        else
        {
	    json.data = data[0].values;
       
		let result = getColorsAndImagesForLabels(data[0].labels);
		let labels = data[0].labels;
		if (isRanked) {
			const orderResult = data[0];
        
			const combined = orderResult.labels.map((label, i) => ({
				label: label,
				value: orderResult.values[i]
			}));
			combined.sort((a, b) => b.value - a.value);
			json.labels = combined.map(item => item.label);
			json.data = combined.map(item => item.value);
			labels = json.labels;
			result = getColorsAndImagesForLabels(json.labels);
		}
			
        json.images = result.images;
        json.labels = labels.map(label => {
				    const cleanedLabel = label.trim().replace(/\s*-\s*/g, '-'); // Remove extra spaces
				    const matchedItem = configData.find(item => item.columnGroupId === cleanedLabel); 
				    return matchedItem ? matchedItem.displayName : cleanedLabel; // Return displayName if found, else label
				});
				
		}
		
         if(checkedItems!='' || checkedItemid[0]=="#jqxCheckBoxDollarIndex") {
		     json.title = 'Stock Indices Performance'+" In "+ fromdate;

		}
		else
        if (typeof itemValue !== 'undefined' && checkedItemValues.length > 0) {
		     json.title = titleGroupMap[itemValue[checkedItemValues[0]].GroupId] +" In "+ fromdate;

		} 
        json.chartId = 'mainChart';
        json.width = 1078;
		json.height=(checkedItemid[0]=="#jqxCheckBoxDollarIndex")?825:(checkedItems!='')?getHeightBasedOnCount(checkedItems):525;
	
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
          if(checkedItemid[0]!="#jqxCheckBoxAll")
     	   saveGraphHistory(graphName, checkedItemid, null, null)
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
