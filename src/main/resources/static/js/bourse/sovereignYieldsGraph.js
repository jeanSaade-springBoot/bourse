var checkedItem = 0;
var checkedItemid = [];
var monthDate = new Date();
monthDate.setMonth(monthDate.getMonth() - 3);
monthDate.setHours(0, 0, 0, 0);
var startdate = new Date();
var date = new Date();
var T1;
var T2;
var chartType1 = 'area';
var chartType2 = 'line';
var mode = "merge";
var Items = "";
var isdecimal = false;
var fromNavigation = false;
var fontsize = '12px';
var chart;
var startDateF1;
var startDateF2;
var startDateF3;
var startDateF4;
var startDateF5;
var startDateF6;
var yaxisformat;
var minvalue = 0;
var maxvalue = 0;
var chartColor = 0;
var chartTransparency = 0;
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
var itemValue = {
	"#jqxCheckBoxUSA-30": {
		"factor": "30yr",
		"country": "1",
		"yieldCurveCross": "yield",
		"title": "USA 30-yr Benchmark YIELD"
	},
	"#jqxCheckBoxUSA-10": {
		"factor": "10yr",
		"country": "1",
		"yieldCurveCross": "yield",
		"title": "USA 10-yr Benchmark YIELD"
	},
	"#jqxCheckBoxUSA-5": {
		"factor": "5yr",
		"country": "1",
		"yieldCurveCross": "yield",
		"title": "USA 5-yr Benchmark YIELD"
	},
	"#jqxCheckBoxUSA-2": {
		"factor": "2yr",
		"country": "1",
		"yieldCurveCross": "yield",
		"title": "USA 2-yr Benchmark YIELD"
	},
	"#jqxCheckBoxGermany-30": {
		"factor": "30yr",
		"country": "3",
		"yieldCurveCross": "yield",
		"title": "Germany 30-yr Benchmark YIELD"
	},
	"#jqxCheckBoxGermany-10": {
		"factor": "10yr",
		"country": "3",
		"yieldCurveCross": "yield",
		"title": "Germany 10-yr Benchmark YIELD"
	},
	"#jqxCheckBoxGermany-5": {
		"factor": "5yr",
		"country": "3",
		"yieldCurveCross": "yield",
		"title": "Germany 5-yr Benchmark YIELD"
	},
	"#jqxCheckBoxGermany-2": {
		"factor": "2yr",
		"country": "3",
		"yieldCurveCross": "yield",
		"title": "Germany 2-yr Benchmark YIELD"
	},
	"#jqxCheckBoxFrance-30": {
		"factor": "30yr",
		"country": "2",
		"yieldCurveCross": "yield",
		"title": "France 30-yr Benchmark YIELD"
	},
	"#jqxCheckBoxFrance-10": {
		"factor": "10yr",
		"country": "2",
		"yieldCurveCross": "yield",
		"title": "France 10-yr Benchmark YIELD"
	},
	"#jqxCheckBoxFrance-5": {
		"factor": "5yr",
		"country": "2",
		"yieldCurveCross": "yield",
		"title": "France 5-yr Benchmark YIELD"

	},
	"#jqxCheckBoxFrance-2": {
		"factor": "2yr",
		"country": "2",
		"yieldCurveCross": "yield",
		"title": "France 2-yr Benchmark YIELD"
	},
	"#jqxCheckBoxUk-30": {
		"factor": "30yr",
		"country": "4",
		"yieldCurveCross": "yield",
		"title": "Uk 30-yr Benchmark YIELD"
	},
	"#jqxCheckBoxUk-10": {
		"factor": "10yr",
		"country": "4",
		"yieldCurveCross": "yield",
		"title": "Uk 10-yr Benchmark YIELD"
	},
	"#jqxCheckBoxUk-5": {
		"factor": "5yr",
		"country": "4",
		"yieldCurveCross": "yield",
		"title": "Uk 5-yr Benchmark YIELD"
	},
	"#jqxCheckBoxUk-2": {
		"factor": "2yr",
		"country": "4",
		"yieldCurveCross": "yield",
		"title": "Uk 2-yr Benchmark YIELD"
	},
	"#jqxCheckBoxItaly-30": {
		"factor": "30yr",
		"country": "5",
		"yieldCurveCross": "yield",
		"title": "Italy 30-yr Benchmark YIELD"
	},
	"#jqxCheckBoxItaly-10": {
		"factor": "10yr",
		"country": "5",
		"yieldCurveCross": "yield",
		"title": "Italy 10-yr Benchmark YIELD"
	},
	"#jqxCheckBoxItaly-5": {
		"factor": "5yr",
		"country": "5",
		"yieldCurveCross": "yield",
		"title": "Italy 5-yr Benchmark YIELD"
	},
	"#jqxCheckBoxItaly-2": {
		"factor": "2yr",
		"country": "5",
		"yieldCurveCross": "yield",
		"title": "Italy 2-yr Benchmark YIELD"
	},
	"#jqxCheckBoxSpain-30": {
		"factor": "30yr",
		"country": "6",
		"yieldCurveCross": "yield",
		"title": "Spain 30-yr Benchmark YIELD"
	},
	"#jqxCheckBoxSpain-10": {
		"factor": "10yr",
		"country": "6",
		"yieldCurveCross": "yield",
		"title": "Spain 10-yr Benchmark YIELD"
	},
	"#jqxCheckBoxSpain-5": {
		"factor": "5yr",
		"country": "6",
		"yieldCurveCross": "yield",
		"title": "Spain 5-yr Benchmark YIELD"
	},
	"#jqxCheckBoxSpain-2": {
		"factor": "2yr",
		"country": "6",
		"yieldCurveCross": "yield",
		"title": "Spain 2-yr Benchmark YIELD"
	},
	"#jqxCheckBoxUSA-10over30": {
		"factor": "10/30",
		"country": "1",
		"yieldCurveCross": "curve",
		"title": "USA 10's/30's yield CURVE"
	},
	"#jqxCheckBoxUSA-5over30": {
		"factor": "4",
		"country": "1",
		"yieldCurveCross": "curve",
		"title": "USA 5's/30's yield CURVE"
	},
	"#jqxCheckBoxUSA-5over10": {
		"factor": "3",
		"country": "1",
		"yieldCurveCross": "curve",
		"title": "USA 5's/10's yield CURVE"
	},
	"#jqxCheckBoxUSA-2over10": {
		"factor": "2",
		"country": "1",
		"yieldCurveCross": "curve",
		"title": "USA 2's/10's yield CURVE"
	},
	"#jqxCheckBoxUSA-2over5": {
		"factor": "1",
		"country": "1",
		"yieldCurveCross": "curve",
		"title": "USA 2's/5's yield CURVE"
	},
	"#jqxCheckBoxGermany-10over30": {
		"factor": "5",
		"country": "2",
		"yieldCurveCross": "curve",
		"title": "Germany 10's/30's yield CURVE"
	},
	"#jqxCheckBoxGermany-5over30": {
		"factor": "4",
		"country": "2",
		"yieldCurveCross": "curve",
		"title": "Germany 5's/30's yield CURVE"
	},
	"#jqxCheckBoxGermany-5over10": {
		"factor": "3",
		"country": "2",
		"yieldCurveCross": "curve",
		"title": "Germany 5's/10's yield CURVE"
	},
	"#jqxCheckBoxGermany-2over10": {
		"factor": "2",
		"country": "2",
		"yieldCurveCross": "curve",
		"title": "Germany 2's/10's yield CURVE"
	},
	"#jqxCheckBoxGermany-2over5": {
		"factor": "1",
		"country": "2",
		"yieldCurveCross": "curve",
		"title": "Germany 2's/5's yield CURVE"
	},
	"#jqxCheckBoxFrance-10over30": {
		"factor": "5",
		"country": "3",
		"yieldCurveCross": "curve",
		"title": "France 10's/30's yield CURVE"
	},
	"#jqxCheckBoxFrance-5over30": {
		"factor": "4",
		"country": "3",
		"yieldCurveCross": "curve",
		"title": "France 5's/30's yield CURVE"
	},
	"#jqxCheckBoxFrance-5over10": {
		"factor": "3",
		"country": "3",
		"yieldCurveCross": "curve",
		"title": "France 5's/10's yield CURVE"
	},
	"#jqxCheckBoxFrance-2over10": {
		"factor": "2",
		"country": "3",
		"yieldCurveCross": "curve",
		"title": "France 2's/10's yield CURVE"
	},
	"#jqxCheckBoxFrance-2over5": {
		"factor": "1",
		"country": "3",
		"yieldCurveCross": "curve",
		"title": "France 2's/5's yield CURVE"
	},
	"#jqxCheckBoxUk-10over30": {
		"factor": "5",
		"country": "4",
		"yieldCurveCross": "curve",
		"title": "Uk 10's/30's yield CURVE"
	},
	"#jqxCheckBoxUk-5over30": {
		"factor": "4",
		"country": "4",
		"yieldCurveCross": "curve",
		"title": "Uk 5's/30's yield CURVE"
	},
	"#jqxCheckBoxUk-5over10": {
		"factor": "3",
		"country": "4",
		"yieldCurveCross": "curve",
		"title": "Uk 5's/10's yield CURVE"
	},
	"#jqxCheckBoxUk-2over10": {
		"factor": "2",
		"country": "4",
		"yieldCurveCross": "curve",
		"title": "Uk 2's/10's yield CURVE"
	},
	"#jqxCheckBoxUk-2over5": {
		"factor": "1",
		"country": "4",
		"yieldCurveCross": "curve",
		"title": "Uk 2's/5's yield CURVE"
	},
	"#jqxCheckBoxItaly-10over30": {
		"factor": "5",
		"country": "5",
		"yieldCurveCross": "curve",
		"title": "Italy 10's/30's yield CURVE"
	},
	"#jqxCheckBoxItaly-5over30": {
		"factor": "4",
		"country": "5",
		"yieldCurveCross": "curve",
		"title": "Italy 5's/30's yield CURVE"
	},
	"#jqxCheckBoxItaly-5over10": {
		"factor": "3",
		"country": "5",
		"yieldCurveCross": "curve",
		"title": "Italy 5's/10's yield CURVE"
	},
	"#jqxCheckBoxItaly-2over10": {
		"factor": "2",
		"country": "5",
		"yieldCurveCross": "curve",
		"title": "Italy 2's/10's yield CURVE"
	},
	"#jqxCheckBoxItaly-2over5": {
		"factor": "1",
		"country": "5",
		"yieldCurveCross": "curve",
		"title": "Italy 2's/5's yield CURVE"
	},
	"#jqxCheckBoxSpain-10over30": {
		"factor": "5",
		"country": "6",
		"yieldCurveCross": "curve",
		"title": "Spain 10's/30's yield CURVE"
	},
	"#jqxCheckBoxSpain-5over30": {
		"factor": "4",
		"country": "6",
		"yieldCurveCross": "curve",
		"title": "Spain 5's/30's yield CURVE"
	},
	"#jqxCheckBoxSpain-5over10": {
		"factor": "3",
		"country": "6",
		"yieldCurveCross": "curve",
		"title": "Spain 5's/110's yield CURVE"
	},
	"#jqxCheckBoxSpain-2over10": {
		"factor": "2",
		"country": "6",
		"yieldCurveCross": "curve",
		"title": "Spain 2's/10's yield CURVE"
	},
	"#jqxCheckBoxSpain-2over5": {
		"factor": "1",
		"country": "6",
		"yieldCurveCross": "curve",
		"title": "Spain 2's/5's yield CURVE"
	},
	"#jqxCheckBoxfrc-ger-30": {
		"factor": "30",
		"country": "1",
		"yieldCurveCross": "cross",
		"title": "FRA-GER 30-yr yield CROSS"
	},
	"#jqxCheckBoxfrc-ger-10": {
		"factor": "10",
		"country": "1",
		"yieldCurveCross": "cross",
		"title": "FRA-GER 10-yr yield CROSS"
	},
	"#jqxCheckBoxfrc-ger-5": {
		"factor": "5",
		"country": "1",
		"yieldCurveCross": "cross",
		"title": "FRA-GER 5-yr yield CROSS"
	},
	"#jqxCheckBoxfrc-ger-2": {
		"factor": "2",
		"country": "1",
		"yieldCurveCross": "cross",
		"title": "FRA-GER 2-yr yield CROSS"
	},
	"#jqxCheckBoxita-ger-30": {
		"factor": "30",
		"country": "2",
		"yieldCurveCross": "cross",
		"title": "ITA-GER 30-yr yield CROSS"
	},
	"#jqxCheckBoxita-ger-10": {
		"factor": "10",
		"country": "2",
		"yieldCurveCross": "cross",
		"title": "ITA-GER 10-yr yield CROSS"
	},
	"#jqxCheckBoxita-ger-5": {
		"factor": "5",
		"country": "2",
		"yieldCurveCross": "cross",
		"title": "ITA-GER 5-yr yield CROSS"
	},
	"#jqxCheckBoxita-ger-2": {
		"factor": "2",
		"country": "2",
		"yieldCurveCross": "cross",
		"title": "ITA-GER 2-yr yield CROSS"
	},
	"#jqxCheckBoxspn-ger-30": {
		"factor": "30",
		"country": "3",
		"yieldCurveCross": "cross",
		"title": "SPN-GER 30-yr yield CROSS"
	},
	"#jqxCheckBoxspn-ger-10": {
		"factor": "10",
		"country": "3",
		"yieldCurveCross": "cross",
		"title": "SPN-GER 10-yr yield CROSS"
	},
	"#jqxCheckBoxspn-ger-5": {
		"factor": "5",
		"country": "3",
		"yieldCurveCross": "cross",
		"title": "SPN-GER 5-yr yield CROSS"
	},
	"#jqxCheckBoxspn-ger-2": {
		"factor": "2",
		"country": "3",
		"yieldCurveCross": "cross",
		"title": "SPN-GER 2-yr yield CROSS"
	},
	"#jqxCheckBoxuk-ger-30": {
		"factor": "30",
		"country": "4",
		"yieldCurveCross": "cross",
		"title": "UK-GER 30-yr yield CROSS"
	},
	"#jqxCheckBoxuk-ger-10": {
		"factor": "10",
		"country": "4",
		"yieldCurveCross": "cross",
		"title": "UK-GER 10-yr yield CROSS"
	},
	"#jqxCheckBoxuk-ger-5": {
		"factor": "5",
		"country": "4",
		"yieldCurveCross": "cross",
		"title": "UK-GER 5-yr yield CROSS"
	},
	"#jqxCheckBoxuk-ger-2": {
		"factor": "2",
		"country": "4",
		"yieldCurveCross": "cross",
		"title": "UK-GER 2-yr yield CROSS"
	},
	"#jqxCheckBoxusa-ger-30": {
		"factor": "30",
		"country": "5",
		"yieldCurveCross": "cross",
		"title": "USA-GER 30-yr yield CROSS"
	},
	"#jqxCheckBoxusa-ger-10": {
		"factor": "10",
		"country": "5",
		"yieldCurveCross": "cross",
		"title": "USA-GER 10-yr yield CROSS"
	},
	"#jqxCheckBoxusa-ger-5": {
		"factor": "5",
		"country": "5",
		"yieldCurveCross": "cross",
		"title": "USA-GER 5-yr yield CROSS"
	},
	"#jqxCheckBoxusa-ger-2": {
		"factor": "2",
		"country": "5",
		"yieldCurveCross": "cross",
		"title": "USA-GER 2-yr yield CROSS"
	},
	"#jqxCheckBoxusa-uk-30": {
		"factor": "30",
		"country": "6",
		"yieldCurveCross": "cross",
		"title": "USA-UK 30-yr yield CROSS"
	},
	"#jqxCheckBoxusa-uk-10": {
		"factor": "10",
		"country": "6",
		"yieldCurveCross": "cross",
		"title": "USA-UK 10-yr yield CROSS"
	},
	"#jqxCheckBoxusa-uk-5": {
		"factor": "5",
		"country": "6",
		"yieldCurveCross": "cross",
		"title": "USA-UK 5-yr yield CROSS"
	},
	"#jqxCheckBoxusa-uk-2": {
		"factor": "2",
		"country": "6",
		"yieldCurveCross": "cross",
		"title": "USA-UK 2-yr yield CROSS"
	},
	"#jqxCheckBoxita-frc-30": {
		"factor": "30",
		"country": "7",
		"yieldCurveCross": "cross",
		"title": "ITA-FRA 30-yr yield CROSS"
	},
	"#jqxCheckBoxita-frc-10": {
		"factor": "10",
		"country": "7",
		"yieldCurveCross": "cross",
		"title": "ITA-FRA 10-yr yield CROSS"
	},
	"#jqxCheckBoxita-frc-5": {
		"factor": "5",
		"country": "7",
		"yieldCurveCross": "cross",
		"title": "ITA-FRA 5-yr yield CROSS"
	},
	"#jqxCheckBoxita-frc-2": {
		"factor": "2",
		"country": "7",
		"yieldCurveCross": "cross",
		"title": "ITA-FRA 2-yr yield CROSS"
	},
	"#jqxCheckBoxita-spn-30": {
		"factor": "30",
		"country": "8",
		"yieldCurveCross": "cross",
		"title": "ITA-SPN 30-yr yield CROSS"
	},
	"#jqxCheckBoxita-spn-10": {
		"factor": "10",
		"country": "8",
		"yieldCurveCross": "cross",
		"title": "ITA-SPN 10-yr yield CROSS"
	},
	"#jqxCheckBoxita-spn-5": {
		"factor": "5",
		"country": "8",
		"yieldCurveCross": "cross",
		"title": "ITA-SPN 5-yr yield CROSS"
	},
	"#jqxCheckBoxita-spn-2": {
		"factor": "2",
		"country": "8",
		"yieldCurveCross": "cross",
		"title": "ITA-SPN 2-yr yield CROSS"
	}
};
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	$("#viewall").jqxButton({ theme: 'dark', width: 110, height: 35, template: "primary" });
	$("#viewall").css("display", "block");
	$("#viewall").click(function() {
		popupWindow('/bourse/allnews', 'Liberty Options - View All News', window, 1300, 600);
	});
	$("#WeeklyRadioButton").jqxRadioButton({ theme: 'dark', width: 70, height: 25, rtl: true });
	$("#DailyRadioButton").jqxRadioButton({ theme: 'dark', width: 70, height: 25, rtl: true });


	$.ajax({
		contentType: "application/json",
		url: "/bourse/findgraphhistorybyscreenname/yield",
		dataType: 'json',
		async: true,
		cache: false,
		timeout: 600000,
		success: function(data) {

			checkedItemId = JSON.parse(data.parameter)[0];
			for (j = 0; j < checkedItemId.length; j++) {
				$(checkedItemId[j]).jqxCheckBox({ checked: true });
			}
			checkedItem = checkedItemId.length;
			$("#collapseFilter").removeClass('show');
			$('#grid-content').css('display', 'block');

			if (JSON.parse(data.parameter)[1][0]) {
				$('#WeeklyRadioButton').jqxRadioButton({ checked: false });
				$('#DailyRadioButton').jqxRadioButton({ checked: true });
			} else {
				$('#WeeklyRadioButton').jqxRadioButton({ checked: true });
				$('#DailyRadioButton').jqxRadioButton({ checked: false });
			}
			if (JSON.parse(data.parameter)[2] != null)
				Items = JSON.parse(data.parameter)[2][0];

			drawGraph();

		},
		error: function(e) {

			console.log("ERROR : ", e);

		}
	});

	$("#button-yearForward").prop('disabled', true);
	$("#button-monthForward").prop('disabled', true);

	for (i = 0; i < allitems.length; i++) {
		$(allitems[i]).jqxCheckBox({ theme: 'dark', width: 120, height: 26 });
	}

	// $("#jqxWeeklyRadioButton").jqxRadioButton({theme:'dark', width: 70, height: 25});
	// $("#jqxDailyRadioButton").jqxRadioButton({theme:'dark', width: 70, height: 25, checked: true});


	$('#WeeklyRadioButton').on('change', function(event) {
		resetActiveChartType();
		resetActiveFontSize();
		resetActiveChartColor();
		drawGraph();
	});

	$('#DailyRadioButton').on('change', function(event) {
		resetActiveChartType();
		resetActiveFontSize();
		resetActiveChartColor();
		drawGraph();
	});

	$("#M-100d").jqxCheckBox({ theme: 'dark', width: 120, height: 26 });
	$("#M-200d").jqxCheckBox({ theme: 'dark', width: 120, height: 26 });

	$("#Clearfilter").jqxButton({ theme: 'dark', height: 30, width: 74 });

	$("#all30yr").jqxButton({ theme: 'dark', height: 22, width: 74, template: "danger" });
	$("#all10yr").jqxButton({ theme: 'dark', height: 22, width: 74, template: "danger" });
	$("#all5yr").jqxButton({ theme: 'dark', height: 22, width: 74, template: "danger" });
	$("#all2yr").jqxButton({ theme: 'dark', height: 22, width: 74, template: "danger" });

	$("#show").jqxButton({ theme: 'dark', height: 30, width: 74 });
	$("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });

	$("#Clearfilter").click(function() {
		uncheckAll();
		checkedItem = 0;
		for (i = 0; i < allitems.length; i++) {
			$(allitems[i]).jqxCheckBox({ disabled: false });
		}
	});

	$("#show").click(function() {
		monthDate = new Date();
		monthDate.setMonth(monthDate.getMonth() - 3);
		monthDate.setHours(0, 0, 0, 0);
		resetActiveChartType();
		resetActiveFontSize();
		resetActiveChartColor();
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
	$("#all30yr").click(function() {
		var monthDate = new Date();
		monthDate.setMonth(monthDate.getMonth() - 3);
		monthDate.setHours(0, 0, 0, 0);
		resetActiveChartType();
		resetActiveFontSize();
		resetActiveChartColor();
		$("#button-monthBackward").prop('disabled', false);
		$("#button-yearBackward").prop('disabled', false);
		uncheckAll();
		checkedItem = 0;
		$("#collapseFilter").removeClass('show');
		$('#grid-content').css('display', 'block');
		Items = "all30yr";
		drawGraph();
	});
	$("#all10yr").click(function() {
		var monthDate = new Date();
		monthDate.setMonth(monthDate.getMonth() - 3);
		monthDate.setHours(0, 0, 0, 0);
		resetActiveChartType();
		resetActiveFontSize();
		resetActiveChartColor();
		$("#button-monthBackward").prop('disabled', false);
		$("#button-yearBackward").prop('disabled', false);
		uncheckAll();
		checkedItem = 0;
		$("#collapseFilter").removeClass('show');
		$('#grid-content').css('display', 'block');
		Items = "all10yr";
		drawGraph();
	});
	$("#all5yr").click(function() {
		var monthDate = new Date();
		monthDate.setMonth(monthDate.getMonth() - 3);
		monthDate.setHours(0, 0, 0, 0);
		resetActiveChartType();
		resetActiveFontSize();
		resetActiveChartColor();
		$("#button-monthBackward").prop('disabled', false);
		$("#button-yearBackward").prop('disabled', false);
		uncheckAll();
		checkedItem = 0;
		$("#collapseFilter").removeClass('show');
		$('#grid-content').css('display', 'block');
		Items = "all5yr";
		drawGraph();
	});
	$("#all2yr").click(function() {
		var monthDate = new Date();
		monthDate.setMonth(monthDate.getMonth() - 3);
		monthDate.setHours(0, 0, 0, 0);
		resetActiveChartType();
		resetActiveFontSize();
		resetActiveChartColor();
		$("#button-monthBackward").prop('disabled', false);
		$("#button-yearBackward").prop('disabled', false);
		uncheckAll();
		checkedItem = 0;
		$("#collapseFilter").removeClass('show');
		$('#grid-content').css('display', 'block');
		Items = "all2yr";
		drawGraph();
	});

	$('#M-100d').on('change', function(event) {
		var ischecked = event.args.checked;
		if (ischecked && checkedItem == 1) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}
		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
	});
	$('#M-200d').on('change', function(event) {
		var ischecked = event.args.checked;
		if (ischecked && checkedItem == 1) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}
		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
	});

	function checkifmovchecked() {
		if ($("#M-100d").val() && checkedItem == 1) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}
			return true;
		}
		else
			if ($("#M-200d").val() && checkedItem == 1) {
				for (i = 0; i < allitems.length; i++) {
					$(allitems[i]).jqxCheckBox({ disabled: true });
				}

				for (i = 0; i < checkedItemid.length; i++) {
					if (checkedItemid[i] != null)
						$(checkedItemid[i]).jqxCheckBox({ disabled: false });
				}
				return true;
			}
			else
				return false;
	}

	$('#jqxCheckBoxUSA-30').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxUSA-30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxUSA-30")
					delete checkedItemid[i];
			}
		}
		if (checkifmovchecked()) { return; } else if (checkedItem >= 4) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}

		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
		if (checkedItem > 1) {
			$("#M-100d").jqxCheckBox({ disabled: true });
			$("#M-200d").jqxCheckBox({ disabled: true });
		}
		else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});


	$('#jqxCheckBoxUSA-10').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxUSA-10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxUSA-10")
					delete checkedItemid[i];
			}
		}
		if (checkifmovchecked()) { return; } else if (checkedItem >= 4) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}

		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
		if (checkedItem > 1) {
			$("#M-100d").jqxCheckBox({ disabled: true });
			$("#M-200d").jqxCheckBox({ disabled: true });
		}
		else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});


	$('#jqxCheckBoxUSA-5').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxUSA-5");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxUSA-5")
					delete checkedItemid[i];
			}
		}
		if (checkifmovchecked()) { return; } else if (checkedItem >= 4) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}

		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
		if (checkedItem > 1) {
			$("#M-100d").jqxCheckBox({ disabled: true });
			$("#M-200d").jqxCheckBox({ disabled: true });
		}
		else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});


	$('#jqxCheckBoxUSA-2').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxUSA-2");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxUSA-2")
					delete checkedItemid[i];
			}
		}
		if (checkifmovchecked()) { return; } else if (checkedItem >= 4) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}

		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
		if (checkedItem > 1) {
			$("#M-100d").jqxCheckBox({ disabled: true });
			$("#M-200d").jqxCheckBox({ disabled: true });
		}
		else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});


	$('#jqxCheckBoxGermany-30').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxGermany-30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxGermany-30")
					delete checkedItemid[i];
			}
		}
		if (checkifmovchecked()) { return; } else if (checkedItem >= 4) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}

		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
		if (checkedItem > 1) {
			$("#M-100d").jqxCheckBox({ disabled: true });
			$("#M-200d").jqxCheckBox({ disabled: true });
		}
		else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxGermany-10').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxGermany-10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxGermany-10")
					delete checkedItemid[i];
			}
		}
		if (checkifmovchecked()) { return; } else if (checkedItem >= 4) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}

		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
		if (checkedItem > 1) {
			$("#M-100d").jqxCheckBox({ disabled: true });
			$("#M-200d").jqxCheckBox({ disabled: true });
		}
		else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxGermany-5').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxGermany-5");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxGermany-5")
					delete checkedItemid[i];
			}
		}
		if (checkifmovchecked()) { return; } else if (checkedItem >= 4) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}

		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
		if (checkedItem > 1) {
			$("#M-100d").jqxCheckBox({ disabled: true });
			$("#M-200d").jqxCheckBox({ disabled: true });
		}
		else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxGermany-2').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxGermany-2");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxGermany-2")
					delete checkedItemid[i];
			}
		}
		if (checkifmovchecked()) { return; } else if (checkedItem >= 4) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}

		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
		if (checkedItem > 1) {
			$("#M-100d").jqxCheckBox({ disabled: true });
			$("#M-200d").jqxCheckBox({ disabled: true });
		}
		else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxFrance-30').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxFrance-30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxFrance-30")
					delete checkedItemid[i];
			}
		}
		if (checkifmovchecked()) { return; } else if (checkedItem >= 4) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}

		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
		if (checkedItem > 1) {
			$("#M-100d").jqxCheckBox({ disabled: true });
			$("#M-200d").jqxCheckBox({ disabled: true });
		}
		else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxFrance-10').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxFrance-10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxFrance-10")
					delete checkedItemid[i];
			}
		}
		if (checkifmovchecked()) { return; } else if (checkedItem >= 4) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}

		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
		if (checkedItem > 1) {
			$("#M-100d").jqxCheckBox({ disabled: true });
			$("#M-200d").jqxCheckBox({ disabled: true });
		}
		else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxFrance-5').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxFrance-5");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxFrance-5")
					delete checkedItemid[i];
			}
		}
		if (checkifmovchecked()) { return; } else if (checkedItem >= 4) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}

		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
		if (checkedItem > 1) {
			$("#M-100d").jqxCheckBox({ disabled: true });
			$("#M-200d").jqxCheckBox({ disabled: true });
		}
		else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxFrance-2').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxFrance-2");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxFrance-2")
					delete checkedItemid[i];
			}
		}
		if (checkifmovchecked()) { return; } else if (checkedItem >= 4) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}

		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
		if (checkedItem > 1) {
			$("#M-100d").jqxCheckBox({ disabled: true });
			$("#M-200d").jqxCheckBox({ disabled: true });
		}
		else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});


	$('#jqxCheckBoxUk-30').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxUk-30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxUk-30")
					delete checkedItemid[i];
			}
		}
		if (checkifmovchecked()) { return; } else if (checkedItem >= 4) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}

		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
		if (checkedItem > 1) {
			$("#M-100d").jqxCheckBox({ disabled: true });
			$("#M-200d").jqxCheckBox({ disabled: true });
		}
		else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxUk-10').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxUk-10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxUk-10")
					delete checkedItemid[i];
			}
		}
		if (checkifmovchecked()) { return; } else if (checkedItem >= 4) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}

		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
		if (checkedItem > 1) {
			$("#M-100d").jqxCheckBox({ disabled: true });
			$("#M-200d").jqxCheckBox({ disabled: true });
		}
		else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxUk-5').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxUk-5");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxUk-5")
					delete checkedItemid[i];
			}
		}
		if (checkifmovchecked()) { return; } else if (checkedItem >= 4) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}

		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
		if (checkedItem > 1) {
			$("#M-100d").jqxCheckBox({ disabled: true });
			$("#M-200d").jqxCheckBox({ disabled: true });
		}
		else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxUk-2').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxUk-2");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxUk-2")
					delete checkedItemid[i];
			}
		}
		if (checkifmovchecked()) { return; } else if (checkedItem >= 4) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}

		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
		if (checkedItem > 1) {
			$("#M-100d").jqxCheckBox({ disabled: true });
			$("#M-200d").jqxCheckBox({ disabled: true });
		}
		else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxItaly-30').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxItaly-30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxItaly-30")
					delete checkedItemid[i];
			}
		}
		if (checkifmovchecked()) { return; } else if (checkedItem >= 4) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}

		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
		if (checkedItem > 1) {
			$("#M-100d").jqxCheckBox({ disabled: true });
			$("#M-200d").jqxCheckBox({ disabled: true });
		}
		else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxItaly-10').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxItaly-10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxItaly-10")
					delete checkedItemid[i];
			}
		}
		if (checkifmovchecked()) { return; } else if (checkedItem >= 4) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}

		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
		if (checkedItem > 1) {
			$("#M-100d").jqxCheckBox({ disabled: true });
			$("#M-200d").jqxCheckBox({ disabled: true });
		}
		else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxItaly-5').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxItaly-5");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxItaly-5")
					delete checkedItemid[i];
			}
		}
		if (checkifmovchecked()) { return; } else if (checkedItem >= 4) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}

		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
		if (checkedItem > 1) {
			$("#M-100d").jqxCheckBox({ disabled: true });
			$("#M-200d").jqxCheckBox({ disabled: true });
		}
		else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxItaly-2').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxItaly-2");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxItaly-2")
					delete checkedItemid[i];
			}
		}
		if (checkifmovchecked()) { return; } else if (checkedItem >= 4) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}

		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
		if (checkedItem > 1) {
			$("#M-100d").jqxCheckBox({ disabled: true });
			$("#M-200d").jqxCheckBox({ disabled: true });
		}
		else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxSpain-30').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxSpain-30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxSpain-30")
					delete checkedItemid[i];
			}
		}
		if (checkifmovchecked()) { return; } else if (checkedItem >= 4) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}

		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
		if (checkedItem > 1) {
			$("#M-100d").jqxCheckBox({ disabled: true });
			$("#M-200d").jqxCheckBox({ disabled: true });
		}
		else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxSpain-10').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxSpain-10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxSpain-10")
					delete checkedItemid[i];
			}
		}
		if (checkifmovchecked()) { return; } else if (checkedItem >= 4) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}

		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
		if (checkedItem > 1) {
			$("#M-100d").jqxCheckBox({ disabled: true });
			$("#M-200d").jqxCheckBox({ disabled: true });
		}
		else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxSpain-5').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxSpain-5");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxSpain-5")
					delete checkedItemid[i];
			}
		}
		if (checkifmovchecked()) { return; } else if (checkedItem >= 4) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}

		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
		if (checkedItem > 1) {
			$("#M-100d").jqxCheckBox({ disabled: true });
			$("#M-200d").jqxCheckBox({ disabled: true });
		}
		else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxSpain-2').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxSpain-2");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxSpain-2")
					delete checkedItemid[i];
			}
		}
		if (checkifmovchecked()) { return; } else if (checkedItem >= 4) {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: true });
			}

			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					$(checkedItemid[i]).jqxCheckBox({ disabled: false });
			}

		}
		else {
			for (i = 0; i < allitems.length; i++) {
				$(allitems[i]).jqxCheckBox({ disabled: false });
			}
		}
		if (checkedItem > 1) {
			$("#M-100d").jqxCheckBox({ disabled: true });
			$("#M-200d").jqxCheckBox({ disabled: true });
		}
		else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});



});

function uncheckAll() {
	$("#jqxCheckBoxUSA-30").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxUSA-10").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxUSA-5").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxUSA-2").jqxCheckBox({ checked: false });

	$("#jqxCheckBoxGermany-30").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxGermany-10").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxGermany-5").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxGermany-2").jqxCheckBox({ checked: false });

	$("#jqxCheckBoxFrance-30").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxFrance-10").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxFrance-5").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxFrance-2").jqxCheckBox({ checked: false });

	$("#jqxCheckBoxUk-30").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxUk-10").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxUk-5").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxUk-2").jqxCheckBox({ checked: false });

	$("#jqxCheckBoxItaly-30").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxItaly-10").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxItaly-5").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxItaly-2").jqxCheckBox({ checked: false });

	$("#jqxCheckBoxSpain-30").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxSpain-10").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxSpain-5").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxSpain-2").jqxCheckBox({ checked: false });
}
function navigationGraph(condition) {

	fromNavigation = true;
	const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
		"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
	];

	if (condition == "yearBackward") {

		expectedmonthdate = new Date(monthDate.getMonth() + "-" + monthDate.getDay() + "-" + (monthDate.getFullYear() - 1));
		if (startDateF1 != null) {
			if (expectedmonthdate <= startDateF1) {
				$("#button-yearBackward").prop('disabled', true);
				$('#startdatetext').empty();
				$('#startdatetext').append("No data available before " + monthNames[startDateF1.getMonth()] + " " + startDateF1.getFullYear())
				$('#alertStartDate-modal').modal('show');
				return;
			}
		}
		else
			if (startDateF2 != null) {
				if (expectedmonthdate <= startDateF2) {
					$("#button-yearBackward").prop('disabled', true);
					$('#startdatetext').empty();
					$('#startdatetext').append("No data available before " + monthNames[startDateF2.getMonth()] + " " + startDateF2.getFullYear())
					$('#alertStartDate-modal').modal('show');
					return;
				}
			}
			else
				if (startDateF3 != null) {
					if (expectedmonthdate <= startDateF3) {
						$("#button-yearBackward").prop('disabled', true);
						$('#startdatetext').empty();
						$('#startdatetext').append("No data available before " + monthNames[startDateF3.getMonth()] + " " + startDateF3.getFullYear())
						$('#alertStartDate-modal').modal('show');
						return;
					}
				}
				else
					if (startDateF4 != null) {
						if (expectedmonthdate <= startDateF4) {
							$("#button-yearBackward").prop('disabled', true);
							$('#startdatetext').empty();
							$('#startdatetext').append("No data available before " + monthNames[startDateF4.getMonth()] + " " + startDateF4.getFullYear())
							$('#alertStartDate-modal').modal('show');
							return;
						}
					} else
						if (startDateF5 != null) {
							if (expectedmonthdate <= startDateF5) {
								$("#button-yearBackward").prop('disabled', true);
								$('#startdatetext').empty();
								$('#startdatetext').append("No data available before " + monthNames[startDateF5.getMonth()] + " " + startDateF5.getFullYear())
								$('#alertStartDate-modal').modal('show');
								return;
							}
						}
						else
							if (startDateF6 != null) {
								if (expectedmonthdate <= startDateF6) {
									$("#button-yearBackward").prop('disabled', true);
									$('#startdatetext').empty();
									$('#startdatetext').append("No data available before " + monthNames[startDateF6.getMonth()] + " " + startDateF6.getFullYear())
									$('#alertStartDate-modal').modal('show');
									return;
								}
							}
		monthDate.setFullYear(monthDate.getFullYear() - 1);
		drawGraph();
	} else
		if (condition == "monthBackward") {
			expectedmonthdate = new Date(monthDate.getMonth() + "-" + monthDate.getDay() + "-" + monthDate.getFullYear());
			if (startDateF1 != null) {
				if (expectedmonthdate <= startDateF1) {
					$("#button-monthBackward").prop('disabled', true);
					$("#button-yearBackward").prop('disabled', true);
					$('#startdatetext').empty();
					$('#startdatetext').append("No data available before " + monthNames[startDateF1.getMonth()] + " " + startDateF1.getFullYear())
					$('#alertStartDate-modal').modal('show');
					return;
				}
			}
			else
				if (startDateF2 != null) {
					if (expectedmonthdate <= startDateF2) {
						$("#button-monthBackward").prop('disabled', true);
						$("#button-yearBackward").prop('disabled', true);
						$('#startdatetext').empty();
						$('#startdatetext').append("No data available before " + monthNames[startDateF2.getMonth()] + " " + startDateF2.getFullYear())
						$('#alertStartDate-modal').modal('show');
						return;
					}
				}
				else
					if (startDateF3 != null) {
						if (expectedmonthdate <= startDateF3) {
							$("#button-monthBackward").prop('disabled', true);
							$("#button-yearBackward").prop('disabled', true);
							$('#startdatetext').empty();
							$('#startdatetext').append("No data available before " + monthNames[startDateF3.getMonth()] + " " + startDateF3.getFullYear())
							$('#alertStartDate-modal').modal('show');
							return;
						}
					}
					else
						if (startDateF4 != null) {
							if (expectedmonthdate <= startDateF4) {
								$("#button-monthBackward").prop('disabled', true);
								$("#button-yearBackward").prop('disabled', true);
								$('#startdatetext').empty();
								$('#startdatetext').append("No data available before " + monthNames[startDateF4.getMonth()] + " " + startDateF4.getFullYear())
								$('#alertStartDate-modal').modal('show');
								return;
							}
						} else
							if (startDateF5 != null) {
								if (expectedmonthdate <= startDateF5) {
									$("#button-monthBackward").prop('disabled', true);
									$("#button-yearBackward").prop('disabled', true);
									$('#startdatetext').empty();
									$('#startdatetext').append("No data available before " + monthNames[startDateF5.getMonth()] + " " + startDateF5.getFullYear())
									$('#alertStartDate-modal').modal('show');
									return;
								}
							}
							else
								if (startDateF6 != null) {
									if (expectedmonthdate <= startDateF6) {
										$("#button-monthBackward").prop('disabled', true);
										$("#button-yearBackward").prop('disabled', true);
										$('#startdatetext').empty();
										$('#startdatetext').append("No data available before " + monthNames[startDateF6.getMonth()] + " " + startDateF6.getFullYear())
										$('#alertStartDate-modal').modal('show');
										return;
									}
								}
			monthDate.setMonth(monthDate.getMonth() - 1);
			drawGraph();
		}
		else
			if (condition == "monthForward") {
				$("#button-monthBackward").prop('disabled', false);
				monthDate.setMonth(monthDate.getMonth() + 1);
				drawGraph();
			}
			else
				if (condition == "yearForward") {
					$("#button-yearBackward").prop('disabled', false);
					monthDate.setFullYear(monthDate.getFullYear() + 1);
					drawGraph();
				}

	if (checkDateMonth(monthDate, date)) {
		$("#button-monthForward").prop('disabled', false);
	}
	else {
		$("#button-monthForward").prop('disabled', true);
	}

	if (checkDateYear(monthDate, date)) {
		$("#button-yearForward").prop('disabled', false);
	}
	else {
		$("#button-yearForward").prop('disabled', true);
	}
}
function formatDate(date) {
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2)
		month = '0' + month;
	if (day.length < 2)
		day = '0' + day;

	return [year, month, day].join('-');
}
function checkDateMonth(monthDate, date) {
	var d = new Date(monthDate);
	d.setMonth(monthDate.getMonth() + 1);

	if (d < date)
		return true;
	else
		return false;
}
function checkDateYear(monthDate, date) {
	var d = new Date(monthDate);
	d.setFullYear(monthDate.getFullYear() + 1);

	if (d < date)
		return true;
	else
		return false;
}

function drawGraph() {
	mode = "merge";
	var dataParam;
	var checkedItemValues = [];
	$('#overlayChart').show();

	var fromdate = formatDate(monthDate);
	var todate = formatDate(date);
	$("#mainChart").html("");
	$("#mainChart").css("display", "block");

	if (checkDateMonth(monthDate, date)) {
		$("#button-monthForward").prop('disabled', false);
	}
	else {
		$("#button-monthForward").prop('disabled', true);
	}

	if (checkDateYear(monthDate, date)) {
		$("#button-yearForward").prop('disabled', false);
	}
	else {
		$("#button-yearForward").prop('disabled', true);
	}

	var Daily = $("#DailyRadioButton").jqxRadioButton('val');
	if (chart != null)
		chart.destroy();

	var options = {
		series: [],
		chart: {
			toolbar: {
				show: true,
				offsetX: 0,
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
			height: 450,
			type: 'line',
			animations: { enabled: false }
		},
		grid: {

			show: false,
			borderColor: '#f0e68c',
			strokeDashArray: 1,
			opacity: 0.5,
			padding: {
				right: 60,
			},
		},
		colors: ["#F0AB2E", "#0097FE", "#F9E79F", "#7e95d9", "#FAD7A0", "#a3a3a5"],
		fill: {
			type: 'solid',
			opacity: [1, 1],
		},
		stroke: {
			curve: 'straight',
			width: 2.25
		},
		markers: {
			colors: '#ffffff',
			size: 2,
			shape: 'square',
		},
		title: {
			text: '',
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
			margin: 10,
			offsetX: -10,
			offsetY: 30,
			floating: false,
			style: {
				fontSize: '10px',
				fontWeight: 'normal',
				color: '#9699a2'
			},
		},
		dataLabels: {
			enabled: false
		},
		xaxis: {
			labels: {
				rotate: 0,
				rotateAlways: true,
				minHeight: 0,
				style: {
					fontSize: fontsize,
				},
			},
			type: 'category',
			axisBorder: {
				show: true,
				color: '#ffffff',
				height: 3,
				width: '100%',
				offsetX: 0,
				offsetY: 0
			},
		},
		legend: {
			fontSize: fontsize,
			showForSingleSeries: true,
			labels: {
				colors: 'White',
				useSeriesColors: false
			},
			markers: {
				width: 12,
				height: 2
			},
			formatter: function(seriesName, opts) {
				img = getCountryFlag(seriesName);
				return [img, seriesName]
			}
		},
		yaxis: [{
			labels: {
				style: {
					fontSize: fontsize,
				}
			},
			axisBorder: {
				width: 3,
				show: true,
				color: '#ffffff',
				offsetX: 0,
				offsetY: 0
			},

		}],
		noData: {
			text: 'No data In this date range',
			align: 'center',
			verticalAlign: 'middle',
			offsetX: 0,
			offsetY: 0,
			style: {
				color: undefined,
				fontSize: '14px',
				fontFamily: undefined
			}
		}
	};
	var optionsWeekly = {
		series: [],
		chart: {
			toolbar: {
				show: true,
				offsetX: 0,
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
			type: 'line',
			height: 450
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '70%'
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent']
		},
		legend: {
			fontSize: fontsize,
			showForSingleSeries: true,
			labels: {
				colors: 'White',
				useSeriesColors: false
			},
			markers: {
				width: 12,
				height: 2
			},
			formatter: function(seriesName, opts) {
				img = getCountryFlag(seriesName);
				return [img, seriesName]
			}
		},
		yaxis: [{
			labels: {
				style: {
					fontSize: fontsize,
				}
			},

		}],
		colors: ["#F0AB2E", "#0097FE", "#F9E79F", "#7e95d9", "#FAD7A0", "#a3a3a5"],
		fill: {
			opacity: [1, 1],
		},
		xaxis: {
			type: '',
			tickPlacement: 'on'
		}
	}

	chart = new ApexCharts(document.querySelector("#mainChart"), Daily ? options : optionsWeekly);
	chart.render();
	//return 0;
	if (Items != "") {
		if (Items == "all30yr")
			dataParam = {
				"fromdate": fromdate,
				"todate": todate,
				"dailyOrWeekly": Daily ? "d" : "w",
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
			dataParam = {
				"fromdate": fromdate,
				"todate": todate,
				"dailyOrWeekly": Daily ? "d" : "w",
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
			dataParam = {
				"fromdate": fromdate,
				"todate": todate,
				"dailyOrWeekly": Daily ? "d" : "w",
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
			dataParam = {
				"fromdate": fromdate,
				"todate": todate,
				"dailyOrWeekly": Daily ? "d" : "w",
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

		disableChartType(true);
		disableChartColor(true);
		$.ajax({
			type: "POST",
			contentType: "application/json; charset=utf-8",
			url: "/bourse/getgraphdata",
			data: JSON.stringify(dataParam),
			dataType: 'json',
			timeout: 600000,
			success: function(response) {

				startDateF1 = response[0].config.startDate;
				startDateF2 = response[1].config.startDate;
				startDateF3 = response[2].config.startDate;
				startDateF4 = response[3].config.startDate;
				startDateF5 = response[4].config.startDate;
				startDateF6 = response[5].config.startDate;

				if (startDateF1 != null)
					startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);
				if (startDateF2 != null)
					startDateF2 = new Date(startDateF2.split("-")[1] + "-" + startDateF2.split("-")[0] + "-" + startDateF2.split("-")[2]);
				if (startDateF3 != null)
					startDateF3 = new Date(startDateF3.split("-")[1] + "-" + startDateF3.split("-")[0] + "-" + startDateF3.split("-")[2]);
				if (startDateF4 != null)
					startDateF4 = new Date(startDateF4.split("-")[1] + "-" + startDateF4.split("-")[0] + "-" + startDateF4.split("-")[2]);
				if (startDateF5 != null)
					startDateF5 = new Date(startDateF5.split("-")[1] + "-" + startDateF5.split("-")[0] + "-" + startDateF5.split("-")[2]);
				if (startDateF6 != null)
					startDateF6 = new Date(startDateF6.split("-")[1] + "-" + startDateF6.split("-")[0] + "-" + startDateF6.split("-")[2]);

				var dates = [];

				title = "All " + Items.split("all")[1] + " Benchmark YIELD";

				var getyaxisformatFormatResult = getFormat(response[0].config.yAxisFormat);
				yaxisformat = getyaxisformatFormatResult[0];
				isdecimal = getyaxisformatFormatResult[1];


				var getFormatResult0 = getFormat(response[0].config.dataFormat);
				var getFormatResult1 = getFormat(response[1].config.dataFormat);
				var getFormatResult2 = getFormat(response[2].config.dataFormat);
				var getFormatResult3 = getFormat(response[3].config.dataFormat);
				var getFormatResult4 = getFormat(response[4].config.dataFormat);
				var getFormatResult5 = getFormat(response[5].config.dataFormat);

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

				chart.updateOptions({
					title: {
						text: title
					},

					fill: {
						type: 'solid',
						opacity: [1, 1],
					},
					xaxis: {
						labels: {
							rotate: 0,
							rotateAlways: true,
							minHeight: 0,
							style: {
								fontSize: fontsize,
							}
						},
						type: 'datetime'
					},
					grid: {
						show: true,
					},

				});


				chartDbFontSize = response[0].config.chartSize;
				fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], chartDbFontSize);
				chart.updateOptions(getChartDailyOption(title, response[0].config.chartShowgrid, fontsize, response[0].config.chartshowMarkes));


				var dbchartType1 = response[0].config.chartType;
				chartType1 = (getChartType(dbchartType1)[0] != 'area') ? getChartType(dbchartType1)[0] : 'line';

				var dbchartType2 = response[1].config.chartType;
				chartType2 = getChartType(dbchartType2)[0] != 'area' ? getChartType(dbchartType2)[0] : 'line';

				var dbchartType3 = response[2].config.chartType;
				chartType3 = getChartType(dbchartType3)[0] != 'area' ? getChartType(dbchartType3)[0] : 'line';

				var dbchartType4 = response[3].config.chartType;
				chartType4 = getChartType(dbchartType4)[0] != 'area' ? getChartType(dbchartType4)[0] : 'line';

				var dbchartType5 = response[4].config.chartType;
				chartType5 = getChartType(dbchartType5)[0] != 'area' ? getChartType(dbchartType5)[0] : 'line';

				var dbchartType6 = response[5].config.chartType;
				chartType6 = getChartType(dbchartType6)[0] != 'area' ? getChartType(dbchartType6)[0] : 'line';

				min1 = Math.min.apply(null, response[0].graphResponseDTOLst.map(function(item) {
					return item.y;
				})),
					max1 = Math.max.apply(null, response[0].graphResponseDTOLst.map(function(item) {
						return item.y;
					}));
				min2 = Math.min.apply(null, response[1].graphResponseDTOLst.map(function(item) {
					return item.y;
				})),
					max2 = Math.max.apply(null, response[1].graphResponseDTOLst.map(function(item) {
						return item.y;
					}));
				min3 = Math.min.apply(null, response[2].graphResponseDTOLst.map(function(item) {
					return item.y;
				})),
					max3 = Math.max.apply(null, response[2].graphResponseDTOLst.map(function(item) {
						return item.y;
					}));
				min4 = Math.min.apply(null, response[3].graphResponseDTOLst.map(function(item) {
					return item.y;
				})),
					max4 = Math.max.apply(null, response[3].graphResponseDTOLst.map(function(item) {
						return item.y;
					}));
				min5 = Math.min.apply(null, response[4].graphResponseDTOLst.map(function(item) {
					return item.y;
				})),
					max5 = Math.max.apply(null, response[4].graphResponseDTOLst.map(function(item) {
						return item.y;
					}));
				min6 = Math.min.apply(null, response[5].graphResponseDTOLst.map(function(item) {
					return item.y;
				})),
					max6 = Math.max.apply(null, response[5].graphResponseDTOLst.map(function(item) {
						return item.y;
					}));
				min = Math.min(min1, min2, min3, min4, min5, min6);
				max = Math.max(max1, max2, max3, max4, max5, max6);
				minvalue = parseFloat((Math.floor(min * 20) / 20).toFixed(2));
				maxvalue = parseFloat((Math.floor(max * 20) / 20).toFixed(2));
				chart.updateOptions({
					extra: {
						isDecimal: isdecimal,
						yAxisFormat: yaxisformat,
					},
					markers: {
						colors: ["#F0AB2E", "#0097FE", "#F9E79F", "#7e95d9", "#FAD7A0", "#a3a3a5"],
						strokeColors: ["#F0AB2E", "#0097FE", "#F9E79F", "#7e95d9", "#FAD7A0", "#a3a3a5"]
					},
					yaxis: {
						labels: {
							minWidth: 75, maxWidth: 75,
							style: {
								fontSize: fontsize,
							}
						},
						tickAmount: 6,
						min: Math.sign(minvalue) == -1 ? -Math.abs(minvalue) - 0.1 : Math.abs(minvalue) - 0.1,
						max: Math.sign(maxvalue) == -1 ? -Math.abs(maxvalue) + 0.1 : Math.abs(maxvalue) + 0.1,
						axisBorder: {
							width: 3,
							show: true,
							color: '#ffffff',
							offsetX: 0,
							offsetY: 0
						},
					},
					tooltip: {
						x: {
							show: false,
						},
						y: {
							formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
								if (seriesIndex == 0) {
									if (getFormatResult0[1])
										return value.toFixed(getFormatResult0[0]);
									else
										return value.toFixed(getFormatResult0[0]) + "%";
								} else
									if (seriesIndex == 1) {
										if (getFormatResult1[1])
											return value.toFixed(getFormatResult1[0]);
										else
											return value.toFixed(getFormatResult1[0]) + "%";
									} else
										if (seriesIndex == 2) {
											if (getFormatResult2[1])
												return value.toFixed(getFormatResult2[0]);
											else
												return value.toFixed(getFormatResult2[0]) + "%";
										} else
											if (seriesIndex == 3) {
												if (getFormatResult3[1])
													return value.toFixed(getFormatResult3[0]);
												else
													return value.toFixed(getFormatResult3[0]) + "%";
											} else
												if (seriesIndex == 4) {
													if (getFormatResult4[1])
														return value.toFixed(getFormatResult4[0]);
													else
														return value.toFixed(getFormatResult4[0]) + "%";
												} else
													if (seriesIndex == 5) {
														if (getFormatResult5[1])
															return value.toFixed(getFormatResult5[0]);
														else
															return value.toFixed(getFormatResult5[0]) + "%";
													}
							},
							title: {
								formatter: (seriesName) => '',
							},
						},
					}
				});

				chart.updateSeries([{
					name: response[0].config != null ? (response[0].config.displayDescription == null ? '' : response[0].config.displayDescription) : '',
					type: Daily ? chartType1 : 'column',
					data: response[0].graphResponseDTOLst
				}, {
					name: response[1].config != null ? (response[1].config.displayDescription == null ? '' : response[1].config.displayDescription) : '',
					type: Daily ? chartType2 : 'column',
					data: response[1].graphResponseDTOLst
				},
				{
					name: response[2].config != null ? (response[2].config.displayDescription == null ? '' : response[2].config.displayDescription) : '',
					type: Daily ? chartType3 : 'column',
					data: response[2].graphResponseDTOLst
				}, {
					name: response[3].config != null ? (response[3].config.displayDescription == null ? '' : response[3].config.displayDescription) : '',
					type: Daily ? chartType4 : 'column',
					data: response[3].graphResponseDTOLst
				},
				{
					name: response[4].config != null ? (response[4].config.displayDescription == null ? '' : response[4].config.displayDescription) : '',
					type: Daily ? chartType5 : 'column',
					data: response[4].graphResponseDTOLst
				}, {
					name: response[5].config != null ? (response[5].config.displayDescription == null ? '' : response[5].config.displayDescription) : '',
					type: Daily ? chartType6 : 'column',
					data: response[5].graphResponseDTOLst
				}]);

				$('#overlayChart').hide();

			},
			error: function(e) {

				console.log("ERROR : ", e);

			}
		});
		graphHistory = {
			"screenName": "yield",
			"parameter": '[' + '[]' + ',' + '[' + Daily + ']' + ',' + '["' + Items + '"]]'
		};

		$.ajax({
			type: "POST",
			contentType: "application/json; charset=utf-8",
			url: "/bourse/savegraphhistory",
			data: JSON.stringify(graphHistory),
			dataType: 'json',
			timeout: 600000,
			success: function(response) {
			},
			error: function(e) {

				console.log("ERROR : ", e);

			}
		});
	}
	else
		if (checkedItem == 2) {
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					checkedItemValues.push(checkedItemid[i]);
			}
			dataParam = {
				"fromdate": fromdate,
				"todate": todate,
				"dailyOrWeekly": Daily ? "d" : "w",
				"factor1": itemValue[checkedItemValues[0]].factor,
				"country1": itemValue[checkedItemValues[0]].country,
				"yieldCurveCross1": itemValue[checkedItemValues[0]].yieldCurveCross,
				"factor2": itemValue[checkedItemValues[1]].factor,
				"country2": itemValue[checkedItemValues[1]].country,
				"yieldCurveCross2": itemValue[checkedItemValues[1]].yieldCurveCross
			};

			if (checkedItemValues.length > 1)
				title = itemValue[checkedItemValues[0]].title + " vs " + itemValue[checkedItemValues[1]].title
			else
				title = itemValue[checkedItemValues[0]].title

			disableChartType(true);
			disableChartColor(true);
			$.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "/bourse/getgraphdata",
				data: JSON.stringify(dataParam),
				dataType: 'json',
				timeout: 600000,
				success: function(response) {
					startDateF1 = response[0].config.startDate;
					startDateF2 = response[1].config.startDate;

					if (startDateF1 != null)
						startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);
					if (startDateF2 != null)
						startDateF2 = new Date(startDateF2.split("-")[1] + "-" + startDateF2.split("-")[0] + "-" + startDateF2.split("-")[2]);
					var dates = [];

					T1 = response[0].config.displayDescription == null ? itemValue[checkedItemValues[0]].title : response[0].config.displayDescription;
					T2 = response[1].config.displayDescription == null ? itemValue[checkedItemValues[1]].title : response[1].config.displayDescription;
					title = T1 + " vs " + T2;
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
					var getFormatResult1 = getFormat(response[1].config.dataFormat);

					chartDbFontSize = response[0].config.chartSize;
					fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], chartDbFontSize);


					chart.updateOptions(getChartDailyOption(title, response[0].config.chartShowgrid, fontsize, response[0].config.chartshowMarkes));


					var dbchartType1 = response[0].config.chartType;
					chartType1 = (getChartType(dbchartType1)[0] != 'area') ? getChartType(dbchartType1)[0] : 'line';

					var dbchartType2 = response[1].config.chartType;
					chartType2 = getChartType(dbchartType2)[0] != 'area' ? getChartType(dbchartType2)[0] : 'line';

					min1 = Math.min.apply(null, response[0].graphResponseDTOLst.map(function(item) {
						return item.y;
					})),
						max1 = Math.max.apply(null, response[0].graphResponseDTOLst.map(function(item) {
							return item.y;
						}));
					min2 = Math.min.apply(null, response[1].graphResponseDTOLst.map(function(item) {
						return item.y;
					})),
						max2 = Math.max.apply(null, response[1].graphResponseDTOLst.map(function(item) {
							return item.y;
						}));

					min = Math.min(min1, min2);
					max = Math.max(max1, max2);
					minvalue = parseFloat((Math.floor(min * 20) / 20).toFixed(2));
					maxvalue = parseFloat((Math.floor(max * 20) / 20).toFixed(2));
					chart.updateOptions({
						extra: {
							isDecimal: isdecimal,
							yAxisFormat: yaxisformat,
						},
						markers: {
							colors: ["#F0AB2E", "#0097FE", "#F9E79F", "#7e95d9", "#FAD7A0", "#a3a3a5"],
							strokeColors: ["#F0AB2E", "#0097FE", "#F9E79F", "#7e95d9", "#FAD7A0", "#a3a3a5"]
						},
						yaxis: {

							labels: {
								minWidth: 75, maxWidth: 75,
								style: {
									fontSize: fontsize,
								}
							},
							tickAmount: 6,
							min: Math.sign(minvalue) == -1 ? -Math.abs(minvalue) - 0.1 : Math.abs(minvalue) - 0.1,
							max: Math.sign(maxvalue) == -1 ? -Math.abs(maxvalue) + 0.1 : Math.abs(maxvalue) + 0.1,
							axisBorder: {
								width: 3,
								show: true,
								color: '#ffffff',
								offsetX: 0,
								offsetY: 0
							},
						},
						tooltip: {
							x: {
								show: false,
							},
							y: {
								formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
									if (seriesIndex == 0) {
										if (getFormatResult0[1])
											return value.toFixed(getFormatResult0[0]);
										else
											return value.toFixed(getFormatResult0[0]) + "%";
									} else
										if (seriesIndex == 1) {
											if (getFormatResult1[1])
												return value.toFixed(getFormatResult1[0]);
											else
												return value.toFixed(getFormatResult1[0]) + "%";
										}
								},
								title: {
									formatter: (seriesName) => '',
								},
							},
						}
					});
					chart.updateSeries([{
						name: response[0].config != null ? (response[0].config.displayDescription == null ? '' : response[0].config.displayDescription) : '',
						type: Daily ? chartType1 : 'column',
						data: response[0].graphResponseDTOLst
					}, {
						name: response[1].config != null ? (response[1].config.displayDescription == null ? '' : response[1].config.displayDescription) : '',
						type: Daily ? chartType2 : 'column',
						data: response[1].graphResponseDTOLst
					}])
					$('#overlayChart').hide();
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
			});
			graphHistory = {
				"screenName": "yield",
				"parameter": "[" + JSON.stringify(checkedItemValues) + "," + "[" + Daily + "]]"
			};

			$.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "/bourse/savegraphhistory",
				data: JSON.stringify(graphHistory),
				dataType: 'json',
				timeout: 600000,
				success: function(response) {
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
			});

		} else
			if (checkedItem == 3) {
				for (i = 0; i < checkedItemid.length; i++) {
					if (checkedItemid[i] != null)
						checkedItemValues.push(checkedItemid[i]);
				}
				dataParam = {
					"fromdate": fromdate,
					"todate": todate,
					"dailyOrWeekly": Daily ? "d" : "w",
					"factor1": itemValue[checkedItemValues[0]].factor,
					"country1": itemValue[checkedItemValues[0]].country,
					"yieldCurveCross1": itemValue[checkedItemValues[0]].yieldCurveCross,
					"factor2": itemValue[checkedItemValues[1]].factor,
					"country2": itemValue[checkedItemValues[1]].country,
					"yieldCurveCross2": itemValue[checkedItemValues[1]].yieldCurveCross,
					"factor3": itemValue[checkedItemValues[2]].factor,
					"country3": itemValue[checkedItemValues[2]].country,
					"yieldCurveCross3": itemValue[checkedItemValues[2]].yieldCurveCross,
				};
				if (checkedItemValues.length > 1)
					title = itemValue[checkedItemValues[0]].title + " vs " + itemValue[checkedItemValues[1]].title + " vs " + itemValue[checkedItemValues[2]].title
				else
					title = itemValue[checkedItemValues[0]].title

				disableChartType(true);
				disableChartColor(true);
				$.ajax({
					type: "POST",
					contentType: "application/json; charset=utf-8",
					url: "/bourse/getgraphdata",
					data: JSON.stringify(dataParam),
					dataType: 'json',
					timeout: 600000,
					success: function(response) {
						startDateF1 = response[0].config.startDate;
						startDateF2 = response[1].config.startDate;
						startDateF3 = response[2].config.startDate;
						var dates = [];
						if (startDateF1 != null)
							startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);
						if (startDateF2 != null)
							startDateF2 = new Date(startDateF2.split("-")[1] + "-" + startDateF2.split("-")[0] + "-" + startDateF2.split("-")[2]);
						if (startDateF3 != null)
							startDateF3 = new Date(startDateF3.split("-")[1] + "-" + startDateF3.split("-")[0] + "-" + startDateF3.split("-")[2]);


						T1 = response[0].config.displayDescription == null ? itemValue[checkedItemValues[0]].title : response[0].config.displayDescription;
						T2 = response[1].config.displayDescription == null ? itemValue[checkedItemValues[1]].title : response[1].config.displayDescription;
						T3 = response[2].config.displayDescription == null ? itemValue[checkedItemValues[2]].title : response[2].config.displayDescription;
						title = T1 + " vs " + T2 + " vs " + T3;
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
						var getFormatResult1 = getFormat(response[1].config.dataFormat);
						var getFormatResult2 = getFormat(response[2].config.dataFormat);

						chartDbFontSize = response[0].config.chartSize;
						fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], chartDbFontSize);


						chart.updateOptions(getChartDailyOption(title, response[0].config.chartShowgrid, fontsize, response[0].config.chartshowMarkes));



						var dbchartType1 = response[0].config.chartType;
						chartType1 = (getChartType(dbchartType1)[0] != 'area') ? getChartType(dbchartType1)[0] : 'line';

						var dbchartType2 = response[1].config.chartType;
						chartType2 = getChartType(dbchartType2)[0] != 'area' ? getChartType(dbchartType2)[0] : 'line';

						var dbchartType3 = response[2].config.chartType;
						chartType3 = getChartType(dbchartType3)[0] != 'area' ? getChartType(dbchartType3)[0] : 'line';

						min1 = Math.min.apply(null, response[0].graphResponseDTOLst.map(function(item) {
							return item.y;
						})),
							max1 = Math.max.apply(null, response[0].graphResponseDTOLst.map(function(item) {
								return item.y;
							}));
						min2 = Math.min.apply(null, response[1].graphResponseDTOLst.map(function(item) {
							return item.y;
						})),
							max2 = Math.max.apply(null, response[1].graphResponseDTOLst.map(function(item) {
								return item.y;
							}));
						min3 = Math.min.apply(null, response[2].graphResponseDTOLst.map(function(item) {
							return item.y;
						})),
							max3 = Math.max.apply(null, response[2].graphResponseDTOLst.map(function(item) {
								return item.y;
							}));
						min = Math.min(min1, min2, min3);
						max = Math.max(max1, max2, max3);
						minvalue = parseFloat((Math.floor(min * 20) / 20).toFixed(2));
						maxvalue = parseFloat((Math.floor(max * 20) / 20).toFixed(2));
						chart.updateOptions({
							extra: {
								isDecimal: isdecimal,
								yAxisFormat: yaxisformat,
							},
							markers: {
								colors: ["#F0AB2E", "#0097FE", "#F9E79F", "#7e95d9", "#FAD7A0", "#a3a3a5"],
								strokeColors: ["#F0AB2E", "#0097FE", "#F9E79F", "#7e95d9", "#FAD7A0", "#a3a3a5"]
							},
							yaxis: {
								labels: {
									minWidth: 75, maxWidth: 75,
									style: {
										fontSize: fontsize,
									}
								},
								tickAmount: 6,
								min: Math.sign(minvalue) == -1 ? -Math.abs(minvalue) - 0.1 : Math.abs(minvalue) - 0.1,
								max: Math.sign(maxvalue) == -1 ? -Math.abs(maxvalue) + 0.1 : Math.abs(maxvalue) + 0.1,
								axisBorder: {
									width: 3,
									show: true,
									color: '#ffffff',
									offsetX: 0,
									offsetY: 0
								},
							},
							tooltip: {
								x: {
									show: false,
								},
								y: {
									formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
										if (seriesIndex == 0) {
											if (getFormatResult0[1])
												return value.toFixed(getFormatResult0[0]);
											else
												return value.toFixed(getFormatResult0[0]) + "%";
										} else
											if (seriesIndex == 1) {
												if (getFormatResult1[1])
													return value.toFixed(getFormatResult1[0]);
												else
													return value.toFixed(getFormatResult1[0]) + "%";
											} else
												if (seriesIndex == 2) {
													if (getFormatResult2[1])
														return value.toFixed(getFormatResult2[0]);
													else
														return value.toFixed(getFormatResult2[0]) + "%";
												}
									},
									title: {
										formatter: (seriesName) => '',
									},
								},
							}
						});

						chart.updateSeries([{
							name: response[0].config != null ? (response[0].config.displayDescription == null ? '' : response[0].config.displayDescription) : '',
							type: Daily ? chartType1 : 'column',
							data: response[0].graphResponseDTOLst
						}, {
							name: response[1].config != null ? (response[1].config.displayDescription == null ? '' : response[1].config.displayDescription) : '',
							type: Daily ? chartType2 : 'column',
							data: response[1].graphResponseDTOLst
						}
							, {
							name: response[2].config != null ? (response[2].config.displayDescription == null ? '' : response[2].config.displayDescription) : '',
							type: Daily ? chartType3 : 'column',
							data: response[2].graphResponseDTOLst
						}])
						$('#overlayChart').hide();
					},
					error: function(e) {

						console.log("ERROR : ", e);

					}
				});

				graphHistory = {
					"screenName": "yield",
					"parameter": "[" + JSON.stringify(checkedItemValues) + "," + "[" + Daily + "]]"
				};

				$.ajax({
					type: "POST",
					contentType: "application/json; charset=utf-8",
					url: "/bourse/savegraphhistory",
					data: JSON.stringify(graphHistory),
					dataType: 'json',
					timeout: 600000,
					success: function(response) {
					},
					error: function(e) {

						console.log("ERROR : ", e);

					}
				});
			} else
				if (checkedItem == 4) {
					for (i = 0; i < checkedItemid.length; i++) {
						if (checkedItemid[i] != null)
							checkedItemValues.push(checkedItemid[i]);
					}
					dataParam = {
						"fromdate": fromdate,
						"todate": todate,
						"dailyOrWeekly": Daily ? "d" : "w",
						"factor1": itemValue[checkedItemValues[0]].factor,
						"country1": itemValue[checkedItemValues[0]].country,
						"yieldCurveCross1": itemValue[checkedItemValues[0]].yieldCurveCross,
						"factor2": itemValue[checkedItemValues[1]].factor,
						"country2": itemValue[checkedItemValues[1]].country,
						"yieldCurveCross2": itemValue[checkedItemValues[1]].yieldCurveCross,
						"factor3": itemValue[checkedItemValues[2]].factor,
						"country3": itemValue[checkedItemValues[2]].country,
						"yieldCurveCross3": itemValue[checkedItemValues[2]].yieldCurveCross,
						"factor4": itemValue[checkedItemValues[3]].factor,
						"country4": itemValue[checkedItemValues[3]].country,
						"yieldCurveCross4": itemValue[checkedItemValues[3]].yieldCurveCross,
					};

					if (checkedItemValues.length > 1)
						title = itemValue[checkedItemValues[0]].title + " vs " + itemValue[checkedItemValues[1]].title + " vs " + itemValue[checkedItemValues[2]].title + " vs " + itemValue[checkedItemValues[3]].title;
					else
						title = itemValue[checkedItemValues[0]].title

					disableChartType(true);
					disableChartColor(true);
					$.ajax({
						type: "POST",
						contentType: "application/json; charset=utf-8",
						url: "/bourse/getgraphdata",
						data: JSON.stringify(dataParam),
						dataType: 'json',
						timeout: 600000,
						success: function(response) {
							startDateF1 = response[0].config.startDate;
							startDateF2 = response[1].config.startDate;
							startDateF3 = response[2].config.startDate;
							startDateF4 = response[3].config.startDate;
							var dates = [];

							if (startDateF1 != null)
								startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);
							if (startDateF2 != null)
								startDateF2 = new Date(startDateF2.split("-")[1] + "-" + startDateF2.split("-")[0] + "-" + startDateF2.split("-")[2]);
							if (startDateF3 != null)
								startDateF3 = new Date(startDateF3.split("-")[1] + "-" + startDateF3.split("-")[0] + "-" + startDateF3.split("-")[2]);
							if (startDateF4 != null)
								startDateF4 = new Date(startDateF4.split("-")[1] + "-" + startDateF4.split("-")[0] + "-" + startDateF4.split("-")[2]);


							T1 = response[0].config.displayDescription == null ? itemValue[checkedItemValues[0]].title : response[0].config.displayDescription;
							T2 = response[1].config.displayDescription == null ? itemValue[checkedItemValues[1]].title : response[1].config.displayDescription;
							T3 = response[2].config.displayDescription == null ? itemValue[checkedItemValues[2]].title : response[2].config.displayDescription;
							T4 = response[3].config.displayDescription == null ? itemValue[checkedItemValues[3]].title : response[3].config.displayDescription;
							title = T1 + " vs " + T2 + " vs " + T3 + " vs " + T4;

							var getyaxisformatFormatResult = getFormat(response[0].config.yAxisFormat);
							yaxisformat = getyaxisformatFormatResult[0];
							isdecimal = getyaxisformatFormatResult[1];

							var getFormatResult0 = getFormat(response[0].config.dataFormat);
							var getFormatResult1 = getFormat(response[1].config.dataFormat);
							var getFormatResult2 = getFormat(response[2].config.dataFormat);
							var getFormatResult3 = getFormat(response[3].config.dataFormat);


							chartDbFontSize = response[0].config.chartSize;
							fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], chartDbFontSize);


							chart.updateOptions(getChartDailyOption(title, response[0].config.chartShowgrid, fontsize, response[0].config.chartshowMarkes));


							var dbchartType1 = response[0].config.chartType;
							chartType1 = (getChartType(dbchartType1)[0] != 'area') ? getChartType(dbchartType1)[0] : 'line';

							var dbchartType2 = response[1].config.chartType;
							chartType2 = getChartType(dbchartType2)[0] != 'area' ? getChartType(dbchartType2)[0] : 'line';

							var dbchartType3 = response[2].config.chartType;
							chartType3 = getChartType(dbchartType3)[0] != 'area' ? getChartType(dbchartType3)[0] : 'line';

							var dbchartType4 = response[3].config.chartType;
							chartType4 = getChartType(dbchartType4)[0] != 'area' ? getChartType(dbchartType4)[0] : 'line';

							min1 = Math.min.apply(null, response[0].graphResponseDTOLst.map(function(item) {
								return item.y;
							})),
								max1 = Math.max.apply(null, response[0].graphResponseDTOLst.map(function(item) {
									return item.y;
								}));
							min2 = Math.min.apply(null, response[1].graphResponseDTOLst.map(function(item) {
								return item.y;
							})),
								max2 = Math.max.apply(null, response[1].graphResponseDTOLst.map(function(item) {
									return item.y;
								}));
							min3 = Math.min.apply(null, response[2].graphResponseDTOLst.map(function(item) {
								return item.y;
							})),
								max3 = Math.max.apply(null, response[2].graphResponseDTOLst.map(function(item) {
									return item.y;
								}));
							min4 = Math.min.apply(null, response[3].graphResponseDTOLst.map(function(item) {
								return item.y;
							})),
								max4 = Math.max.apply(null, response[3].graphResponseDTOLst.map(function(item) {
									return item.y;
								}));
							min = Math.min(min1, min2, min3, min4);
							max = Math.max(max1, max2, max3, max4);
							minvalue = parseFloat((Math.floor(min * 20) / 20).toFixed(2));
							maxvalue = parseFloat((Math.floor(max * 20) / 20).toFixed(2));
							chart.updateOptions({
								extra: {
									isDecimal: isdecimal,
									yAxisFormat: yaxisformat,
								},
								markers: {
									colors: ["#F0AB2E", "#0097FE", "#F9E79F", "#7e95d9", "#FAD7A0", "#a3a3a5"],
									strokeColors: ["#F0AB2E", "#0097FE", "#F9E79F", "#7e95d9", "#FAD7A0", "#a3a3a5"]
								},
								yaxis: {
									labels: {
										minWidth: 75, maxWidth: 75,
										style: {
											fontSize: fontsize,
										}
									},
									tickAmount: 6,
									min: Math.sign(minvalue) == -1 ? -Math.abs(minvalue) - 0.1 : Math.abs(minvalue) - 0.1,
									max: Math.sign(maxvalue) == -1 ? -Math.abs(maxvalue) + 0.1 : Math.abs(maxvalue) + 0.1,
									axisBorder: {
										width: 3,
										show: true,
										color: '#ffffff',
										offsetX: 0,
										offsetY: 0
									},
								},
								tooltip: {
									x: {
										show: false,
									},
									y: {
										formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
											if (seriesIndex == 0) {
												if (getFormatResult0[1])
													return value.toFixed(getFormatResult0[0]);
												else
													return value.toFixed(getFormatResult0[0]) + "%";
											} else
												if (seriesIndex == 1) {
													if (getFormatResult1[1])
														return value.toFixed(getFormatResult1[0]);
													else
														return value.toFixed(getFormatResult1[0]) + "%";
												} else
													if (seriesIndex == 2) {
														if (getFormatResult2[1])
															return value.toFixed(getFormatResult2[0]);
														else
															return value.toFixed(getFormatResult2[0]) + "%";
													} else
														if (seriesIndex == 3) {
															if (getFormatResult3[1])
																return value.toFixed(getFormatResult3[0]);
															else
																return value.toFixed(getFormatResult3[0]) + "%";
														}
										},
										title: {
											formatter: (seriesName) => '',
										},
									},
								}
							});


							chart.updateSeries([{
								name: response[0].config != null ? (response[0].config.displayDescription == null ? '' : response[0].config.displayDescription) : '',
								type: Daily ? chartType1 : 'column',
								data: response[0].graphResponseDTOLst
							}, {
								name: response[1].config != null ? (response[1].config.displayDescription == null ? '' : response[1].config.displayDescription) : '',
								type: Daily ? chartType2 : 'column',
								data: response[1].graphResponseDTOLst
							}, {
								name: response[2].config != null ? (response[2].config.displayDescription == null ? '' : response[2].config.displayDescription) : '',
								type: Daily ? chartType3 : 'column',
								data: response[2].graphResponseDTOLst
							}
								, {
								name: response[3].config != null ? (response[3].config.displayDescription == null ? '' : response[3].config.displayDescription) : '',
								type: Daily ? chartType4 : 'column',
								data: response[3].graphResponseDTOLst
							}])
							$('#overlayChart').hide();
						},
						error: function(e) {

							console.log("ERROR : ", e);

						}
					});
					graphHistory = {
						"screenName": "yield",
						"parameter": "[" + JSON.stringify(checkedItemValues) + "," + "[" + Daily + "]]"
					};

					$.ajax({
						type: "POST",
						contentType: "application/json; charset=utf-8",
						url: "/bourse/savegraphhistory",
						data: JSON.stringify(graphHistory),
						dataType: 'json',
						timeout: 600000,
						success: function(response) {
						},
						error: function(e) {

							console.log("ERROR : ", e);

						}
					});

				}
				else {
					for (i = 0; i < checkedItemid.length; i++) {
						if (checkedItemid[i] != null)
							checkedItemValues.push(checkedItemid[i]);
					}
					title = itemValue[checkedItemValues[0]].title;

					dataParam = {
						"fromdate": fromdate,
						"todate": todate,
						"dailyOrWeekly": Daily ? "d" : "w",
						"factor1": itemValue[checkedItemValues[0]].factor,
						"country1": itemValue[checkedItemValues[0]].country,
						"yieldCurveCross1": itemValue[checkedItemValues[0]].yieldCurveCross,
					};
					disableChartType(false);
					disableChartColor(false);
					$.ajax({
						type: "POST",
						contentType: "application/json; charset=utf-8",
						url: "/bourse/getgraphdata",
						data: JSON.stringify(dataParam),
						dataType: 'json',
						timeout: 600000,
						success: function(response) {

							newstartdate = new Date();
							startDateF1 = response[0].config.startDate;
							if (startDateF1 != null)
								startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);


							T1 = response[0].config.displayDescription == null ? itemValue[checkedItemValues[0]].title : response[0].config.displayDescription;
							title = T1;
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

							var dbchartType1 = response[0].config.chartType;
							chartType1 = getChartType(dbchartType1)[0];
							curve1 = getChartType(dbchartType1)[1];

							var getFormatResult = getFormat(response[0].config.dataFormat);
							chartDbFontSize = response[0].config.chartSize;
							chartTransparency = response[0].config.chartTransparency;
							chartColor = checkActiveChartColor($("#chartColor").find(".active")[0], response[0].config.chartColor);
							fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], chartDbFontSize);
							chartType1 = checkActiveChartType($("#chartTypes").find(".active")[0], chartType1, Daily);


							chart.updateOptions(getChartDailyOption(title, response[0].config.chartShowgrid, fontsize, response[0].config.chartshowMarkes));
							updateChartOption(Daily);
							min = Math.min.apply(null, response[0].graphResponseDTOLst.map(function(item) {
								return item.y;
							})),
								max = Math.max.apply(null, response[0].graphResponseDTOLst.map(function(item) {
									return item.y;
								}));
							minvalue = parseFloat((Math.floor(min * 20) / 20).toFixed(2));
							maxvalue = parseFloat((Math.floor(max * 20) / 20).toFixed(2));
							chart.updateOptions({
								stroke: {
									colors: chartType1 == "area" ? ["#ffffff"] : [chartColor == '#44546a' ? '#2e75b6' : chartColor],
								},
								markers: {
									colors: chartType1 == "area" ? "#ffffff" : [chartColor == '#44546a' ? '#2e75b6' : chartColor],
									strokeColors: chartType1 == "area" ? "#ffffff" : [chartColor == '#44546a' ? '#2e75b6' : chartColor]
								},
								extra: {
									isDecimal: isdecimal,
									yAxisFormat: yaxisformat,
								},
								yaxis: {
									labels: {
										minWidth: 75, maxWidth: 75,
										style: {
											fontSize: fontsize,
										}
									},
									tickAmount: 6,
									min: Math.sign(minvalue) == -1 ? -Math.abs(minvalue) - 0.1 : Math.abs(minvalue) - 0.1,
									max: Math.sign(maxvalue) == -1 ? -Math.abs(maxvalue) + 0.1 : Math.abs(maxvalue) + 0.1,
									axisBorder: {
										width: 3,
										show: true,
										color: '#ffffff',
										offsetX: 0,
										offsetY: 0
									},
								},
								tooltip: {
									x: {
										show: false,
									},
									y: {
										formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
											if (getFormatResult[1])
												return value.toFixed(getFormatResult[0]);
											else
												return value.toFixed(getFormatResult[0]) + "%";
										},
										title: {
											formatter: (seriesName) => '',
										},
									},
								}
							});
							chart.updateSeries([{
								name: response[0].config != null ? (response[0].config.displayDescription == null ? '' : response[0].config.displayDescription) : '',
								type: chartType1,
								data: response[0].graphResponseDTOLst
							}]);

							$.ajax({
								contentType: "application/json",
								url: "/bourse/getlatestgraphdate/" + itemValue[checkedItemValues[0]].country + "/" + itemValue[checkedItemValues[0]].factor + "/" + itemValue[checkedItemValues[0]].yieldCurveCross + "",
								dataType: 'text',
								async: true,
								cache: false,
								timeout: 600000,
								success: function(data) {
									/*
									if (Daily)     
										  chart.zoomX(undefined, new Date(data).getTime()) //new
									  */

								},
								error: function(e) {

									console.log("ERROR : ", e);

								}
							});
							$('#overlayChart').hide();

						},
						error: function(e) {

							console.log("ERROR : ", e);

						}
					});
					graphHistory = {
						"screenName": "yield",
						"parameter": "[" + JSON.stringify(checkedItemValues) + "," + "[" + Daily + "]]"
					};

					$.ajax({
						type: "POST",
						contentType: "application/json; charset=utf-8",
						url: "/bourse/savegraphhistory",
						data: JSON.stringify(graphHistory),
						dataType: 'json',
						timeout: 600000,
						success: function(response) {
						},
						error: function(e) {

							console.log("ERROR : ", e);

						}
					});
				}

	$("#dateFrom-mainChart").val(fromdate);
	$("#dateTo-mainChart").val(todate);
}
function graphfont(fontSize) {
	updateGraphFont(fontSize, minvalue, maxvalue);
}

