var checkedItem = 0;
var checkedItemid = [];
var monthDate = new Date();
monthDate.setMonth(monthDate.getMonth() - 3);
monthDate.setHours(0, 0, 0, 0);
var startdate = new Date();
var date = new Date();
var mode = "merge";
var chart;
var chartType1 = 'area';
var fromNavigation = false;
var yaxisformat = 3;
var fontsize = '12px';
var isdecimal = false;
var startDateF1;
var startDateF2;
var startDateF3;
var startDateF4;
var startDateF5;
var startDateF6;
var minvalue = 0;
var maxvalue = 0;
var chartColor = 0;
var markerSize=0;
var showGrid=true;
var showLegend='legendtrue';
var chartTransparency = 0;
var allitems = ["#jqxCheckBoxfrc-ger-30",
	"#jqxCheckBoxfrc-ger-10",
	"#jqxCheckBoxfrc-ger-5",
	"#jqxCheckBoxfrc-ger-2",
	"#jqxCheckBoxita-ger-30",
	"#jqxCheckBoxita-ger-10",
	"#jqxCheckBoxita-ger-5",
	"#jqxCheckBoxita-ger-2",
	"#jqxCheckBoxspn-ger-30",
	"#jqxCheckBoxspn-ger-10",
	"#jqxCheckBoxspn-ger-5",
	"#jqxCheckBoxspn-ger-2",
	"#jqxCheckBoxuk-ger-30",
	"#jqxCheckBoxuk-ger-10",
	"#jqxCheckBoxuk-ger-5",
	"#jqxCheckBoxuk-ger-2",
	"#jqxCheckBoxusa-ger-30",
	"#jqxCheckBoxusa-ger-10",
	"#jqxCheckBoxusa-ger-5",
	"#jqxCheckBoxusa-ger-2",
	"#jqxCheckBoxusa-uk-30",
	"#jqxCheckBoxusa-uk-10",
	"#jqxCheckBoxusa-uk-5",
	"#jqxCheckBoxusa-uk-2",
	"#jqxCheckBoxita-frc-30",
	"#jqxCheckBoxita-frc-10",
	"#jqxCheckBoxita-frc-5",
	"#jqxCheckBoxita-frc-2",
	"#jqxCheckBoxita-spn-30",
	"#jqxCheckBoxita-spn-10",
	"#jqxCheckBoxita-spn-5",
	"#jqxCheckBoxita-spn-2",
];

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
	$("div.btn-group-vertical button.btn").click(function() {
		$("div.btn-group-vertical").find(".active").removeClass("active");
		$(this).addClass("active");
	});

	$.ajax({
		contentType: "application/json",
		url: "/bourse/findgraphhistorybyscreenname/crosses",
		dataType: 'json',
		async: true,
		cache: false,
		timeout: 600000,
		success: function(data) {

			checkedItemId = JSON.parse(data.parameter);
			for (j = 0; j < checkedItemId.length; j++) {
				$(checkedItemId[j]).jqxCheckBox({ checked: true });
			}
			checkedItem = checkedItemId.length;
			$("#collapseFilter").removeClass('show');
			$('#grid-content').css('display', 'block');
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

	$("#WeeklyRadioButton").jqxRadioButton({ theme: 'dark', width: 70, height: 25, rtl: true });
	$("#DailyRadioButton").jqxRadioButton({ theme: 'dark', width: 70, height: 25, checked: true, rtl: true });

	$('#WeeklyRadioButton').on('change', function(event) {
		resetActiveChartType();
		resetActiveFontSize();
		resetActiveChartColor();
		resetActiveChartColorTransparency();  
		resetActiveChartGrid();
		drawGraph();
	});

	$('#DailyRadioButton').on('change', function(event) {
		resetActiveChartType();
		resetActiveFontSize();
		resetActiveChartColor();
		resetActiveChartColorTransparency();
		resetActiveChartGrid();
		drawGraph();
	});

	$("#M-100d").jqxCheckBox({ theme: 'dark', width: 120, height: 26 });
	$("#M-200d").jqxCheckBox({ theme: 'dark', width: 120, height: 26 });

	$("#Clearfilter").jqxButton({ theme: 'dark', height: 30, width: 74 });

	$("#show").jqxButton({ theme: 'dark', height: 30, width: 74 });

	$("#Clearfilter").click(function() {

		$("#jqxCheckBoxfrc-ger-30").jqxCheckBox({ checked: false });
		$("#jqxCheckBoxfrc-ger-10").jqxCheckBox({ checked: false });
		$("#jqxCheckBoxfrc-ger-5").jqxCheckBox({ checked: false });
		$("#jqxCheckBoxfrc-ger-2").jqxCheckBox({ checked: false });

		$("#jqxCheckBoxita-ger-30").jqxCheckBox({ checked: false });
		$("#jqxCheckBoxita-ger-10").jqxCheckBox({ checked: false });
		$("#jqxCheckBoxita-ger-5").jqxCheckBox({ checked: false });
		$("#jqxCheckBoxita-ger-2").jqxCheckBox({ checked: false });

		$("#jqxCheckBoxspn-ger-30").jqxCheckBox({ checked: false });
		$("#jqxCheckBoxspn-ger-10").jqxCheckBox({ checked: false });
		$("#jqxCheckBoxspn-ger-5").jqxCheckBox({ checked: false });
		$("#jqxCheckBoxspn-ger-2").jqxCheckBox({ checked: false });

		$("#jqxCheckBoxuk-ger-30").jqxCheckBox({ checked: false });
		$("#jqxCheckBoxuk-ger-10").jqxCheckBox({ checked: false });
		$("#jqxCheckBoxuk-ger-5").jqxCheckBox({ checked: false });
		$("#jqxCheckBoxuk-ger-2").jqxCheckBox({ checked: false });

		$("#jqxCheckBoxusa-ger-30").jqxCheckBox({ checked: false });
		$("#jqxCheckBoxusa-ger-10").jqxCheckBox({ checked: false });
		$("#jqxCheckBoxusa-ger-5").jqxCheckBox({ checked: false });
		$("#jqxCheckBoxusa-ger-2").jqxCheckBox({ checked: false });

		$("#jqxCheckBoxusa-uk-30").jqxCheckBox({ checked: false });
		$("#jqxCheckBoxusa-uk-10").jqxCheckBox({ checked: false });
		$("#jqxCheckBoxusa-uk-5").jqxCheckBox({ checked: false });
		$("#jqxCheckBoxusa-uk-2").jqxCheckBox({ checked: false });

		$("#jqxCheckBoxita-frc-30").jqxCheckBox({ checked: false });
		$("#jqxCheckBoxita-frc-10").jqxCheckBox({ checked: false });
		$("#jqxCheckBoxita-frc-5").jqxCheckBox({ checked: false });
		$("#jqxCheckBoxita-frc-2").jqxCheckBox({ checked: false });

		$("#jqxCheckBoxita-spn-30").jqxCheckBox({ checked: false });
		$("#jqxCheckBoxita-spn-10").jqxCheckBox({ checked: false });
		$("#jqxCheckBoxita-spn-5").jqxCheckBox({ checked: false });
		$("#jqxCheckBoxita-spn-2").jqxCheckBox({ checked: false });

		for (i = 0; i < allitems.length; i++) {
			$(allitems[i]).jqxCheckBox({ disabled: false });
		}
		checkedItem = 0;

	});

	$("#show").click(function() {
		monthDate = new Date();
		monthDate.setMonth(monthDate.getMonth() - 3);
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
	$('#jqxCheckBoxfrc-ger-30').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxfrc-ger-30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxfrc-ger-30")
					delete checkedItemid[i];
			}
		}
		// here
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

	$('#jqxCheckBoxfrc-ger-10').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxfrc-ger-10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxfrc-ger-10")
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

	$('#jqxCheckBoxfrc-ger-5').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxfrc-ger-5");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxfrc-ger-5")
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

	$('#jqxCheckBoxfrc-ger-2').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxfrc-ger-2");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxfrc-ger-2")
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

	$('#jqxCheckBoxita-ger-30').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxita-ger-30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxita-ger-30")
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

	$('#jqxCheckBoxita-ger-10').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxita-ger-10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxita-ger-10")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxita-ger-5').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxita-ger-5");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxita-ger-5")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxita-ger-2').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxita-ger-2");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxita-ger-2")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});


	$('#jqxCheckBoxspn-ger-30').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxspn-ger-30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxspn-ger-30")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxspn-ger-10').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxspn-ger-10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxspn-ger-10")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxspn-ger-5').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxspn-ger-5");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxspn-ger-5")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxspn-ger-2').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxspn-ger-2");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxspn-ger-2")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxuk-ger-30').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxuk-ger-30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxuk-ger-30")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxuk-ger-10').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxuk-ger-10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxuk-ger-10")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxuk-ger-5').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxuk-ger-5");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxuk-ger-5")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxuk-ger-2').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxuk-ger-2");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxuk-ger-2")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});


	$('#jqxCheckBoxusa-ger-30').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxusa-ger-30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxusa-ger-30")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxusa-ger-10').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxusa-ger-10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxusa-ger-10")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxusa-ger-5').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxusa-ger-5");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxusa-ger-5")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxusa-ger-2').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxusa-ger-2");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxusa-ger-2")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});


	$('#jqxCheckBoxusa-uk-30').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxusa-uk-30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxusa-uk-30")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxusa-uk-10').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxusa-uk-10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxusa-uk-10")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxusa-uk-5').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxusa-uk-5");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxusa-uk-5")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxusa-uk-2').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxusa-uk-2");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxusa-uk-2")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxita-frc-30').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxita-frc-30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxita-frc-30")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxita-frc-10').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxita-frc-10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxita-frc-10")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxita-frc-5').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxita-frc-5");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxita-frc-5")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxita-frc-2').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxita-frc-2");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxita-frc-2")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});



	$('#jqxCheckBoxita-spn-30').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxita-spn-30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxita-spn-30")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxita-spn-10').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxita-spn-10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxita-spn-10")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxita-spn-5').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxita-spn-5");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxita-spn-5")
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
		} else {
			$("#M-100d").jqxCheckBox({ disabled: false });
			$("#M-200d").jqxCheckBox({ disabled: false });
		}
	});

	$('#jqxCheckBoxita-spn-2').on('change', function(event) {
		var checked = event.args.checked;
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxita-spn-2");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxita-spn-2")
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
				if (typeof (startDateF3) != "undefined")
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
	var title;
	var fromdate = formatDate(monthDate);
	var todate = formatDate(date);
	$("#mainChart").html("");
	$("#mainChart").css("display", "block");
	$("#SubChart1").css("display", "none");
	$("#SubChart2").css("display", "none");
	var Daily = $("#DailyRadioButton").jqxRadioButton('val');

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

	if (chart != null)
		chart.destroy();


	
	chart = new ApexCharts(document.querySelector("#mainChart"), Daily ? options : optionsWeekly);
	chart.render();

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

		disableOptions(true);

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

				var dbchartType1 = response[0].config.chartType;
				chartType1 = (getChartType(dbchartType1)[0] != 'area') ? getChartType(dbchartType1)[0] : 'line';

				var dbchartType2 = response[1].config.chartType;
				chartType2 = getChartType(dbchartType2)[0] != 'area' ? getChartType(dbchartType2)[0] : 'line';

				var getFormatResult0 = getFormat(response[0].config.dataFormat);
				var getFormatResult1 = getFormat(response[1].config.dataFormat);

				chartDbFontSize = response[0].config.chartSize;
				fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], chartDbFontSize);
				showLegend	= checkActiveChartLegend($("#gridLegend").find(".active")[0], showLegend);

				chart.updateOptions(getChartDailyOption(title, response[0].config.chartShowgrid, fontsize, response[0].config.chartshowMarkes));

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
			"screenName": "crosses",
			"parameter": JSON.stringify(checkedItemValues)
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

			disableOptions(true);

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
					showLegend	= checkActiveChartLegend($("#gridLegend").find(".active")[0], showLegend);


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
				"screenName": "crosses",
				"parameter": JSON.stringify(checkedItemValues)
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

				disableOptions(true);

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
						var getFormatResult3 = getFormat(response[3].config.dataFormat);
						
						chartDbFontSize = response[0].config.chartSize;
						fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], chartDbFontSize);
						showLegend	= checkActiveChartLegend($("#gridLegend").find(".active")[0], showLegend);

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
					"screenName": "crosses",
					"parameter": JSON.stringify(checkedItemValues)
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

				disableOptions(false);
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

						var getFormatResult = getFormat(response[0].config.dataFormat);

						var dbchartType1 = response[0].config.chartType;
						chartType1 = getChartType(dbchartType1)[0];
						curve1 = getChartType(dbchartType1)[1];

						var getFormatResult = getFormat(response[0].config.dataFormat);
						chartDbFontSize = response[0].config.chartSize;
						chartColor = checkActiveChartColor($("#chartColor").find(".active")[0], response[0].config.chartColor);
						chartTransparency = checkActiveChartColorTransparency($("#chartColorTransparency").find(".active")[0],response[0].config.chartTransparency);
						fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], chartDbFontSize);
						chartType1 = checkActiveChartType($("#chartTypes").find(".active")[0], chartType1, Daily);
						markerSize = checkActiveChartMarker($("#chartMarker").find(".active")[0], response[0].config.chartshowMarkes);
						showGrid = checkActiveChartGrid($("#gridOptions").find(".active")[0], response[0].config.chartShowgrid);
						showLegend	= checkActiveChartLegend($("#gridLegend").find(".active")[0], showLegend);
	
						chart.updateOptions(getChartDailyOption(title, showGrid, fontsize, markerSize));
						updateChartOption();

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
						$('#overlayChart').hide();
					},
					error: function(e) {

						console.log("ERROR : ", e);

					}
				});
				graphHistory = {
					"screenName": "crosses",
					"parameter": JSON.stringify(checkedItemValues)
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
	inGraphNews(getSelectedFields(checkedItemValues));
}
function graphfont(fontSize) {
	updateGraphFont(fontSize, minvalue, maxvalue);
}
