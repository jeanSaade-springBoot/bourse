var allitems = [
	"#jqxCheckBoxUSA-10over30",
	"#jqxCheckBoxUSA-5over30",
	"#jqxCheckBoxUSA-5over10",
	"#jqxCheckBoxUSA-2over10",
	"#jqxCheckBoxUSA-2over5",
	"#jqxCheckBoxGermany-10over30",
	"#jqxCheckBoxGermany-5over30",
	"#jqxCheckBoxGermany-5over10",
	"#jqxCheckBoxGermany-2over10",
	"#jqxCheckBoxGermany-2over5",
	"#jqxCheckBoxFrance-10over30",
	"#jqxCheckBoxFrance-5over30",
	"#jqxCheckBoxFrance-5over10",
	"#jqxCheckBoxFrance-2over10",
	"#jqxCheckBoxFrance-2over5",
	"#jqxCheckBoxUk-10over30",
	"#jqxCheckBoxUk-5over30",
	"#jqxCheckBoxUk-5over10",
	"#jqxCheckBoxUk-2over10",
	"#jqxCheckBoxUk-2over5",
	"#jqxCheckBoxItaly-10over30",
	"#jqxCheckBoxItaly-5over30",
	"#jqxCheckBoxItaly-5over10",
	"#jqxCheckBoxItaly-2over10",
	"#jqxCheckBoxItaly-2over5",
	"#jqxCheckBoxSpain-10over30",
	"#jqxCheckBoxSpain-5over30",
	"#jqxCheckBoxSpain-5over10",
	"#jqxCheckBoxSpain-2over10",
	"#jqxCheckBoxSpain-2over5"
];


const graphName="curves"; 

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
	
	$("#all10over30").jqxButton({ theme: 'dark', height: 22, width: 85, template: "danger" });
	$("#all5over30").jqxButton({ theme: 'dark', height: 22, width: 85, template: "danger" });
	$("#all5over10").jqxButton({ theme: 'dark', height: 22, width: 85, template: "danger" });
	$("#all2over10").jqxButton({ theme: 'dark', height: 22, width: 85, template: "danger" });
	$("#all2over5").jqxButton({ theme: 'dark', height: 22, width: 85, template: "danger" });

	$("#all10over30").click(function() {
		initialiazeAllButtons();
		Items = "all10over30";
		drawGraph();
	});
	$("#all5over30").click(function() {
		initialiazeAllButtons();
		Items = "all5over30";
		drawGraph();
	});
	$("#all5over10").click(function() {
		initialiazeAllButtons();
		Items = "all5over10";
		drawGraph();
	});
	$("#all2over10").click(function() {
		initialiazeAllButtons();
		Items = "all2over10";
		drawGraph();
	});
	$("#all2over5").click(function() {
		initialiazeAllButtons();
		Items = "all2over5";
		drawGraph();
	});

});
function drawGraph() {
	
	var itemsDataParam;
	
	if (Items != "") {
		var fromdate = formatDate(monthDate);
		var todate = formatDate(date);
		var Period = getChartPeriod();
	
		if (Items == "all10over30")
			itemsDataParam = {
				"fromdate": fromdate,
				"todate": todate,
				"period":  Period,"type": type,
				"factor1": itemValue["#jqxCheckBoxUSA-10over30"].factor,
				"country1": itemValue["#jqxCheckBoxUSA-10over30"].country,
				"yieldCurveCross1": itemValue["#jqxCheckBoxUSA-10over30"].yieldCurveCross,
				"factor2": itemValue["#jqxCheckBoxGermany-10over30"].factor,
				"country2": itemValue["#jqxCheckBoxGermany-10over30"].country,
				"yieldCurveCross2": itemValue["#jqxCheckBoxGermany-10over30"].yieldCurveCross,
				"factor3": itemValue["#jqxCheckBoxFrance-10over30"].factor,
				"country3": itemValue["#jqxCheckBoxFrance-10over30"].country,
				"yieldCurveCross3": itemValue["#jqxCheckBoxFrance-10over30"].yieldCurveCross,
				"factor4": itemValue["#jqxCheckBoxUk-10over30"].factor,
				"country4": itemValue["#jqxCheckBoxUk-10over30"].country,
				"yieldCurveCross4": itemValue["#jqxCheckBoxUk-10over30"].yieldCurveCross,
				"factor5": itemValue["#jqxCheckBoxItaly-10over30"].factor,
				"country5": itemValue["#jqxCheckBoxItaly-10over30"].country,
				"yieldCurveCross5": itemValue["#jqxCheckBoxItaly-10over30"].yieldCurveCross,
				"factor6": itemValue["#jqxCheckBoxSpain-10over30"].factor,
				"country6": itemValue["#jqxCheckBoxSpain-10over30"].country,
				"yieldCurveCross6": itemValue["#jqxCheckBoxSpain-10over30"].yieldCurveCross,
			};
		else if (Items == "all5over30")
			itemsDataParam = {
				"fromdate": fromdate,
				"todate": todate,
				"period":  Period,"type": type,
				"factor1": itemValue["#jqxCheckBoxUSA-5over30"].factor,
				"country1": itemValue["#jqxCheckBoxUSA-5over30"].country,
				"yieldCurveCross1": itemValue["#jqxCheckBoxUSA-5over30"].yieldCurveCross,
				"factor2": itemValue["#jqxCheckBoxGermany-5over30"].factor,
				"country2": itemValue["#jqxCheckBoxGermany-5over30"].country,
				"yieldCurveCross2": itemValue["#jqxCheckBoxGermany-5over30"].yieldCurveCross,
				"factor3": itemValue["#jqxCheckBoxFrance-5over30"].factor,
				"country3": itemValue["#jqxCheckBoxFrance-5over30"].country,
				"yieldCurveCross3": itemValue["#jqxCheckBoxFrance-5over30"].yieldCurveCross,
				"factor4": itemValue["#jqxCheckBoxUk-5over30"].factor,
				"country4": itemValue["#jqxCheckBoxUk-5over30"].country,
				"yieldCurveCross4": itemValue["#jqxCheckBoxUk-5over30"].yieldCurveCross,
				"factor5": itemValue["#jqxCheckBoxItaly-5over30"].factor,
				"country5": itemValue["#jqxCheckBoxItaly-5over30"].country,
				"yieldCurveCross5": itemValue["#jqxCheckBoxItaly-5over30"].yieldCurveCross,
				"factor6": itemValue["#jqxCheckBoxSpain-5over30"].factor,
				"country6": itemValue["#jqxCheckBoxSpain-5over30"].country,
				"yieldCurveCross6": itemValue["#jqxCheckBoxSpain-5over30"].yieldCurveCross,
			};
		else if (Items == "all5over10")
			itemsDataParam = {
				"fromdate": fromdate,
				"todate": todate,
				"period":  Period,"type": type,
				"factor1": itemValue["#jqxCheckBoxUSA-5over10"].factor,
				"country1": itemValue["#jqxCheckBoxUSA-5over10"].country,
				"yieldCurveCross1": itemValue["#jqxCheckBoxUSA-5over10"].yieldCurveCross,
				"factor2": itemValue["#jqxCheckBoxGermany-5over10"].factor,
				"country2": itemValue["#jqxCheckBoxGermany-5over10"].country,
				"yieldCurveCross2": itemValue["#jqxCheckBoxGermany-5over10"].yieldCurveCross,
				"factor3": itemValue["#jqxCheckBoxFrance-5over10"].factor,
				"country3": itemValue["#jqxCheckBoxFrance-5over10"].country,
				"yieldCurveCross3": itemValue["#jqxCheckBoxFrance-5over10"].yieldCurveCross,
				"factor4": itemValue["#jqxCheckBoxUk-5over10"].factor,
				"country4": itemValue["#jqxCheckBoxUk-5over10"].country,
				"yieldCurveCross4": itemValue["#jqxCheckBoxUk-5over10"].yieldCurveCross,
				"factor5": itemValue["#jqxCheckBoxItaly-5over10"].factor,
				"country5": itemValue["#jqxCheckBoxItaly-5over10"].country,
				"yieldCurveCross5": itemValue["#jqxCheckBoxItaly-5over10"].yieldCurveCross,
				"factor6": itemValue["#jqxCheckBoxSpain-5over10"].factor,
				"country6": itemValue["#jqxCheckBoxSpain-5over10"].country,
				"yieldCurveCross6": itemValue["#jqxCheckBoxSpain-5over10"].yieldCurveCross,
			};
		else if (Items == "all2over10")
			itemsDataParam = {
				"fromdate": fromdate,
				"todate": todate,
				"period":  Period,"type": type,
				"factor1": itemValue["#jqxCheckBoxUSA-2over10"].factor,
				"country1": itemValue["#jqxCheckBoxUSA-2over10"].country,
				"yieldCurveCross1": itemValue["#jqxCheckBoxUSA-2over10"].yieldCurveCross,
				"factor2": itemValue["#jqxCheckBoxGermany-2over10"].factor,
				"country2": itemValue["#jqxCheckBoxGermany-2over10"].country,
				"yieldCurveCross2": itemValue["#jqxCheckBoxGermany-2over10"].yieldCurveCross,
				"factor3": itemValue["#jqxCheckBoxFrance-2over10"].factor,
				"country3": itemValue["#jqxCheckBoxFrance-2over10"].country,
				"yieldCurveCross3": itemValue["#jqxCheckBoxFrance-2over10"].yieldCurveCross,
				"factor4": itemValue["#jqxCheckBoxUk-2over10"].factor,
				"country4": itemValue["#jqxCheckBoxUk-2over10"].country,
				"yieldCurveCross4": itemValue["#jqxCheckBoxUk-2over10"].yieldCurveCross,
				"factor5": itemValue["#jqxCheckBoxItaly-2over10"].factor,
				"country5": itemValue["#jqxCheckBoxItaly-2over10"].country,
				"yieldCurveCross5": itemValue["#jqxCheckBoxItaly-2over10"].yieldCurveCross,
				"factor6": itemValue["#jqxCheckBoxSpain-2over10"].factor,
				"country6": itemValue["#jqxCheckBoxSpain-2over10"].country,
				"yieldCurveCross6": itemValue["#jqxCheckBoxSpain-2over10"].yieldCurveCross,
			};
		else if (Items == "all2over5")
			itemsDataParam = {
				"fromdate": fromdate,
				"todate": todate,
				"period":  Period,"type": type,
				"factor1": itemValue["#jqxCheckBoxUSA-2over5"].factor,
				"country1": itemValue["#jqxCheckBoxUSA-2over5"].country,
				"yieldCurveCross1": itemValue["#jqxCheckBoxUSA-2over5"].yieldCurveCross,
				"factor2": itemValue["#jqxCheckBoxGermany-2over5"].factor,
				"country2": itemValue["#jqxCheckBoxGermany-2over5"].country,
				"yieldCurveCross2": itemValue["#jqxCheckBoxGermany-2over5"].yieldCurveCross,
				"factor3": itemValue["#jqxCheckBoxFrance-2over5"].factor,
				"country3": itemValue["#jqxCheckBoxFrance-2over5"].country,
				"yieldCurveCross3": itemValue["#jqxCheckBoxFrance-2over5"].yieldCurveCross,
				"factor4": itemValue["#jqxCheckBoxUk-2over5"].factor,
				"country4": itemValue["#jqxCheckBoxUk-2over5"].country,
				"yieldCurveCross4": itemValue["#jqxCheckBoxUk-2over5"].yieldCurveCross,
				"factor5": itemValue["#jqxCheckBoxItaly-2over5"].factor,
				"country5": itemValue["#jqxCheckBoxItaly-2over5"].country,
				"yieldCurveCross5": itemValue["#jqxCheckBoxItaly-2over5"].yieldCurveCross,
				"factor6": itemValue["#jqxCheckBoxSpain-2over5"].factor,
				"country6": itemValue["#jqxCheckBoxSpain-2over5"].country,
				"yieldCurveCross6": itemValue["#jqxCheckBoxSpain-2over5"].yieldCurveCross,
			};

			}
			getGraphDataSovereign(graphName,itemsDataParam);
}