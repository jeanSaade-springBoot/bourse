var allitems = ["#jqxCheckBoxUSA-30",
	"#jqxCheckBoxUSA-10",
	"#jqxCheckBoxUSA-5",
	"#jqxCheckBoxUSA-2",
	"#jqxCheckBoxGermany-30",
	"#jqxCheckBoxGermany-10",
	"#jqxCheckBoxGermany-5",
	"#jqxCheckBoxGermany-2",
	"#jqxCheckBoxFrance-30",
	"#jqxCheckBoxFrance-10",
	"#jqxCheckBoxFrance-5",
	"#jqxCheckBoxFrance-2",
	"#jqxCheckBoxUk-30",
	"#jqxCheckBoxUk-10",
	"#jqxCheckBoxUk-5",
	"#jqxCheckBoxUk-2",
	"#jqxCheckBoxItaly-30",
	"#jqxCheckBoxItaly-10",
	"#jqxCheckBoxItaly-5",
	"#jqxCheckBoxItaly-2",
	"#jqxCheckBoxSpain-30",
	"#jqxCheckBoxSpain-10",
	"#jqxCheckBoxSpain-5",
	"#jqxCheckBoxSpain-2"
];

const graphName="yield"; 

$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	
	initializeNewsBanner();
	initializePeriods();
    initializeTypes();
	initializeFunctions();
	initializeNavigationButtons();
	initialiazeItems(allitems,4);
	initialiazeClearFilterButton();
	initializeShowFilterButton();
	  
	getGraphHistoryByScreenName(graphName);
	
	$("#all30yr").jqxButton({ theme: 'dark', height: 22, width: 74, template: "danger" });
	$("#all10yr").jqxButton({ theme: 'dark', height: 22, width: 74, template: "danger" });
	$("#all5yr").jqxButton({ theme: 'dark', height: 22, width: 74, template: "danger" });
	$("#all2yr").jqxButton({ theme: 'dark', height: 22, width: 74, template: "danger" });

	
	$("#all30yr").click(function() {
		initialiazeAllButtons();
		Items = "all30yr";
		drawGraph();
	});
	$("#all10yr").click(function() {
		initialiazeAllButtons();
		Items = "all10yr";
		drawGraph();
	});
	$("#all5yr").click(function() {
		initialiazeAllButtons();
		Items = "all5yr";
		drawGraph();
	});
	$("#all2yr").click(function() {
		initialiazeAllButtons();
		Items = "all2yr";
		drawGraph();
	});


});
function drawGraph() {
	
	var itemsDataParam;
	
	if (Items != "") {
		var fromdate = formatDate(monthDate);
		var todate = formatDate(date);
		var Period = getChartPeriod();
	
		if (Items == "all30yr")
			itemsDataParam = {
				"fromdate": fromdate,
				"todate": todate,
				"period":  Period,"type": type,
				"factor1": itemValue["#jqxCheckBoxUSA-30"].factor,
				"country1": itemValue["#jqxCheckBoxUSA-30"].country,
				"yieldCurveCross1": itemValue["#jqxCheckBoxUSA-30"].yieldCurveCross,
				"factor2": itemValue["#jqxCheckBoxGermany-30"].factor,
				"country2": itemValue["#jqxCheckBoxGermany-30"].country,
				"yieldCurveCross2": itemValue["#jqxCheckBoxGermany-30"].yieldCurveCross,
				"factor3": itemValue["#jqxCheckBoxFrance-30"].factor,
				"country3": itemValue["#jqxCheckBoxFrance-30"].country,
				"yieldCurveCross3": itemValue["#jqxCheckBoxFrance-30"].yieldCurveCross,
				"factor4": itemValue["#jqxCheckBoxUk-30"].factor,
				"country4": itemValue["#jqxCheckBoxUk-30"].country,
				"yieldCurveCross4": itemValue["#jqxCheckBoxUk-30"].yieldCurveCross,
				"factor5": itemValue["#jqxCheckBoxItaly-30"].factor,
				"country5": itemValue["#jqxCheckBoxItaly-30"].country,
				"yieldCurveCross5": itemValue["#jqxCheckBoxItaly-30"].yieldCurveCross,
				"factor6": itemValue["#jqxCheckBoxSpain-30"].factor,
				"country6": itemValue["#jqxCheckBoxSpain-30"].country,
				"yieldCurveCross6": itemValue["#jqxCheckBoxSpain-30"].yieldCurveCross,
			};
		else if (Items == "all10yr")
			itemsDataParam = {
				"fromdate": fromdate,
				"todate": todate,
				"period":  Period,"type": type,
				"factor1": itemValue["#jqxCheckBoxUSA-10"].factor,
				"country1": itemValue["#jqxCheckBoxUSA-10"].country,
				"yieldCurveCross1": itemValue["#jqxCheckBoxUSA-10"].yieldCurveCross,
				"factor2": itemValue["#jqxCheckBoxGermany-10"].factor,
				"country2": itemValue["#jqxCheckBoxGermany-10"].country,
				"yieldCurveCross2": itemValue["#jqxCheckBoxGermany-10"].yieldCurveCross,
				"factor3": itemValue["#jqxCheckBoxFrance-10"].factor,
				"country3": itemValue["#jqxCheckBoxFrance-10"].country,
				"yieldCurveCross3": itemValue["#jqxCheckBoxFrance-10"].yieldCurveCross,
				"factor4": itemValue["#jqxCheckBoxUk-10"].factor,
				"country4": itemValue["#jqxCheckBoxUk-10"].country,
				"yieldCurveCross4": itemValue["#jqxCheckBoxUk-10"].yieldCurveCross,
				"factor5": itemValue["#jqxCheckBoxItaly-10"].factor,
				"country5": itemValue["#jqxCheckBoxItaly-10"].country,
				"yieldCurveCross5": itemValue["#jqxCheckBoxItaly-10"].yieldCurveCross,
				"factor6": itemValue["#jqxCheckBoxSpain-10"].factor,
				"country6": itemValue["#jqxCheckBoxSpain-10"].country,
				"yieldCurveCross6": itemValue["#jqxCheckBoxSpain-10"].yieldCurveCross,
			};
		else if (Items == "all5yr")
			itemsDataParam = {
				"fromdate": fromdate,
				"todate": todate,
				"period":  Period,"type": type,
				"factor1": itemValue["#jqxCheckBoxUSA-5"].factor,
				"country1": itemValue["#jqxCheckBoxUSA-5"].country,
				"yieldCurveCross1": itemValue["#jqxCheckBoxUSA-5"].yieldCurveCross,
				"factor2": itemValue["#jqxCheckBoxGermany-5"].factor,
				"country2": itemValue["#jqxCheckBoxGermany-5"].country,
				"yieldCurveCross2": itemValue["#jqxCheckBoxGermany-5"].yieldCurveCross,
				"factor3": itemValue["#jqxCheckBoxFrance-5"].factor,
				"country3": itemValue["#jqxCheckBoxFrance-5"].country,
				"yieldCurveCross3": itemValue["#jqxCheckBoxFrance-5"].yieldCurveCross,
				"factor4": itemValue["#jqxCheckBoxUk-5"].factor,
				"country4": itemValue["#jqxCheckBoxUk-5"].country,
				"yieldCurveCross4": itemValue["#jqxCheckBoxUk-5"].yieldCurveCross,
				"factor5": itemValue["#jqxCheckBoxItaly-5"].factor,
				"country5": itemValue["#jqxCheckBoxItaly-5"].country,
				"yieldCurveCross5": itemValue["#jqxCheckBoxItaly-5"].yieldCurveCross,
				"factor6": itemValue["#jqxCheckBoxSpain-5"].factor,
				"country6": itemValue["#jqxCheckBoxSpain-5"].country,
				"yieldCurveCross6": itemValue["#jqxCheckBoxSpain-5"].yieldCurveCross,
			};
		else if (Items == "all2yr")
			itemsDataParam = {
				"fromdate": fromdate,
				"todate": todate,
				"period":  Period,"type": type,
				"factor1": itemValue["#jqxCheckBoxUSA-2"].factor,
				"country1": itemValue["#jqxCheckBoxUSA-2"].country,
				"yieldCurveCross1": itemValue["#jqxCheckBoxUSA-2"].yieldCurveCross,
				"factor2": itemValue["#jqxCheckBoxGermany-2"].factor,
				"country2": itemValue["#jqxCheckBoxGermany-2"].country,
				"yieldCurveCross2": itemValue["#jqxCheckBoxGermany-2"].yieldCurveCross,
				"factor3": itemValue["#jqxCheckBoxFrance-2"].factor,
				"country3": itemValue["#jqxCheckBoxFrance-2"].country,
				"yieldCurveCross3": itemValue["#jqxCheckBoxFrance-2"].yieldCurveCross,
				"factor4": itemValue["#jqxCheckBoxUk-2"].factor,
				"country4": itemValue["#jqxCheckBoxUk-2"].country,
				"yieldCurveCross4": itemValue["#jqxCheckBoxUk-2"].yieldCurveCross,
				"factor5": itemValue["#jqxCheckBoxItaly-2"].factor,
				"country5": itemValue["#jqxCheckBoxItaly-2"].country,
				"yieldCurveCross5": itemValue["#jqxCheckBoxItaly-2"].yieldCurveCross,
				"factor6": itemValue["#jqxCheckBoxSpain-2"].factor,
				"country6": itemValue["#jqxCheckBoxSpain-2"].country,
				"yieldCurveCross6": itemValue["#jqxCheckBoxSpain-2"].yieldCurveCross,
			};
			}
			getGraphData(graphName,itemsDataParam);
}