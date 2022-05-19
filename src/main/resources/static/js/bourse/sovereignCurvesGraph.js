var checkedItem = 0;
var checkedItemid = [];
var monthDate = new Date();
monthDate.setMonth(monthDate.getMonth() - 3);
monthDate.setHours(0, 0, 0, 0);
var startdate = new Date();
var date = new Date();
var mode = "merge";
var fromNavigation = false;
var Items = "";
var chart;
var chartType1 = 'area';
var yaxisformat = 3;
var fontsize = '12px';
var startDateF1;
var startDateF2;
var startDateF3;
var startDateF4;
var startDateF5;
var startDateF6;
var minvalue = 0;
var maxvalue = 0;
var markerSize = 0;
var showGrid=true;
var showLegend='legendtrue';
var chartColor = 0;
var chartTransparency = 0;
var isdecimal = false;
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
		url: "/bourse/findgraphhistorybyscreenname/curves",
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
			$('#groupOfPeriod').jqxButtonGroup('setSelection', getChartPeriodIndex(JSON.parse(data.parameter)[1][0]));
			
			if (JSON.parse(data.parameter)[2] != null)
				Items = JSON.parse(data.parameter)[2][0];
				
			type=JSON.parse(data.parameter)[3][0];
			$("#dropDownType").jqxDropDownList('selectIndex', type ); 	

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

		$("#groupOfPeriod").jqxButtonGroup({theme: 'dark', mode: 'radio' });
		
	var  dropDownSource =[{"type":"AVG",
                            "value":"0"}, 
					        {"type":"MAX",
                             "value":"1"},
							{"type":"MIN",
                             "value":"2"},
							{"type":"LAST",
                             "value":"3"},];
   var source =
     {
         datatype: "json",
         datafields: [
             { name: 'type' },
             { name: 'value' }
         ],
         localdata: dropDownSource,
         async: true
     };
	  var dataAdapter = new $.jqx.dataAdapter(source);
	 $("#dropDownType").jqxDropDownList({selectedIndex: 0, dropDownHeight: 130,  source: dataAdapter,displayMember: "type",valueMember: "value", theme: 'dark' , width: 70, height: 25});
	
	
	$("#M-100d").jqxCheckBox({ theme: 'dark', width: 120, height: 26 });
	$("#M-200d").jqxCheckBox({ theme: 'dark', width: 120, height: 26 });

	$("#Clearfilter").jqxButton({ theme: 'dark', height: 30, width: 74 });

	$("#all10over30").jqxButton({ theme: 'dark', height: 22, width: 85, template: "danger" });
	$("#all5over30").jqxButton({ theme: 'dark', height: 22, width: 85, template: "danger" });
	$("#all5over10").jqxButton({ theme: 'dark', height: 22, width: 85, template: "danger" });
	$("#all2over10").jqxButton({ theme: 'dark', height: 22, width: 85, template: "danger" });
	$("#all2over5").jqxButton({ theme: 'dark', height: 22, width: 85, template: "danger" });

	$("#all10over30").click(function() {
		var monthDate = new Date();
		monthDate.setMonth(monthDate.getMonth() - 3);
		monthDate.setHours(0, 0, 0, 0);
		resetActiveChartType();
		resetActiveFontSize();
		resetActiveChartColor();
		resetActiveChartColorTransparency();
		$("#button-monthBackward").prop('disabled', false);
		$("#button-yearBackward").prop('disabled', false);
		uncheckAll();
		checkedItem = 0;
		$("#collapseFilter").removeClass('show');
		$('#grid-content').css('display', 'block');
		Items = "all10over30";
		drawGraph();
	});
	$("#all5over30").click(function() {
		var monthDate = new Date();
		monthDate.setMonth(monthDate.getMonth() - 3);
		monthDate.setHours(0, 0, 0, 0);
		resetActiveChartType();
		resetActiveFontSize();
		resetActiveChartColor();
		resetActiveChartColorTransparency();
		$("#button-monthBackward").prop('disabled', false);
		$("#button-yearBackward").prop('disabled', false);
		uncheckAll();
		checkedItem = 0;
		$("#collapseFilter").removeClass('show');
		$('#grid-content').css('display', 'block');
		Items = "all5over30";
		drawGraph();
	});
	$("#all5over10").click(function() {
		var monthDate = new Date();
		monthDate.setMonth(monthDate.getMonth() - 3);
		monthDate.setHours(0, 0, 0, 0);
		resetActiveChartType();
		resetActiveFontSize();
		resetActiveChartColor();
		resetActiveChartColorTransparency();
		$("#button-monthBackward").prop('disabled', false);
		$("#button-yearBackward").prop('disabled', false);
		uncheckAll();
		checkedItem = 0;
		$("#collapseFilter").removeClass('show');
		$('#grid-content').css('display', 'block');
		Items = "all5over10";
		drawGraph();
	});
	$("#all2over10").click(function() {
		var monthDate = new Date();
		monthDate.setMonth(monthDate.getMonth() - 3);
		monthDate.setHours(0, 0, 0, 0);
		resetActiveChartType();
		resetActiveFontSize();
		resetActiveChartColor();
		resetActiveChartColorTransparency();
		$("#button-monthBackward").prop('disabled', false);
		$("#button-yearBackward").prop('disabled', false);
		uncheckAll();
		checkedItem = 0;
		$("#collapseFilter").removeClass('show');
		$('#grid-content').css('display', 'block');
		Items = "all2over10";
		drawGraph();
	});
	$("#all2over5").click(function() {
		var monthDate = new Date();
		monthDate.setMonth(monthDate.getMonth() - 3);
		monthDate.setHours(0, 0, 0, 0);
		resetActiveChartType();
		resetActiveFontSize();
		resetActiveChartColor();
		resetActiveChartColorTransparency();
		$("#button-monthBackward").prop('disabled', false);
		$("#button-yearBackward").prop('disabled', false);
		uncheckAll();
		checkedItem = 0;
		$("#collapseFilter").removeClass('show');
		$('#grid-content').css('display', 'block');
		Items = "all2over5";
		drawGraph();
	});

	$("#show").jqxButton({ theme: 'dark', height: 30, width: 74 });

	$("#Clearfilter").click(function() {

		uncheckAll();
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

	$('#jqxCheckBoxUSA-10over30').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxUSA-10over30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxUSA-10over30")
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

	$('#jqxCheckBoxUSA-5over30').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxUSA-5over30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxUSA-5over30")
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

	$('#jqxCheckBoxUSA-5over10').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxUSA-5over10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxUSA-5over10")
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

	$('#jqxCheckBoxUSA-2over10').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxUSA-2over10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxUSA-2over10")
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


	$('#jqxCheckBoxUSA-2over5').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxUSA-2over5");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxUSA-2over5")
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

	$('#jqxCheckBoxGermany-10over30').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxGermany-10over30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxGermany-10over30")
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

	$('#jqxCheckBoxGermany-5over30').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxGermany-5over30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxGermany-5over30")
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

	$('#jqxCheckBoxGermany-5over10').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxGermany-5over10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxGermany-5over10")
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

	$('#jqxCheckBoxGermany-2over10').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxGermany-2over10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxGermany-2over10")
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


	$('#jqxCheckBoxGermany-2over5').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxGermany-2over5");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxGermany-2over5")
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


	$('#jqxCheckBoxFrance-10over30').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxFrance-10over30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxFrance-10over30")
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

	$('#jqxCheckBoxFrance-5over30').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxFrance-5over30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxFrance-5over30")
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

	$('#jqxCheckBoxFrance-5over10').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxFrance-5over10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxFrance-5over10")
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

	$('#jqxCheckBoxFrance-2over10').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxFrance-2over10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxFrance-2over10")
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


	$('#jqxCheckBoxFrance-2over5').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxFrance-2over5");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxFrance-2over5")
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

	$('#jqxCheckBoxUk-10over30').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxUk-10over30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxUk-10over30")
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

	$('#jqxCheckBoxUk-5over30').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxUk-5over30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxUk-5over30")
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

	$('#jqxCheckBoxUk-5over10').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxUk-5over10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxUk-5over10")
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

	$('#jqxCheckBoxUk-2over10').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxUk-2over10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxUk-2over10")
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


	$('#jqxCheckBoxUk-2over5').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxUk-2over5");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxUk-2over5")
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

	$('#jqxCheckBoxItaly-10over30').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxItaly-10over30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxItaly-10over30")
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

	$('#jqxCheckBoxItaly-5over30').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxItaly-5over30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxItaly-5over30")
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

	$('#jqxCheckBoxItaly-5over10').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxItaly-5over10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxItaly-5over10")
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

	$('#jqxCheckBoxItaly-2over10').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxItaly-2over10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxItaly-2over10")
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


	$('#jqxCheckBoxItaly-2over5').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxItaly-2over5");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxItaly-2over5")
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


	$('#jqxCheckBoxSpain-10over30').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxSpain-10over30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxSpain-10over30")
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

	$('#jqxCheckBoxSpain-5over30').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxSpain-5over30");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxSpain-5over30")
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

	$('#jqxCheckBoxSpain-5over10').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxSpain-5over10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxSpain-5over10")
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

	$('#jqxCheckBoxSpain-2over10').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxSpain-2over10");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxSpain-2over10")
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


	$('#jqxCheckBoxSpain-2over5').on('change', function(event) {
		var checked = event.args.checked; Items = "";
		if (checked) {
			checkedItem = checkedItem + 1;
			checkedItemid.push("#jqxCheckBoxSpain-2over5");
		}
		else {
			checkedItem = checkedItem - 1;
			for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] == "#jqxCheckBoxSpain-2over5")
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
function uncheckAll() {

	$("#jqxCheckBoxUSA-10over30").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxUSA-5over30").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxUSA-5over10").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxUSA-2over10").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxUSA-2over5").jqxCheckBox({ checked: false });

	$("#jqxCheckBoxGermany-10over30").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxGermany-5over30").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxGermany-5over10").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxGermany-2over10").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxGermany-2over5").jqxCheckBox({ checked: false });

	$("#jqxCheckBoxFrance-10over30").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxFrance-5over30").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxFrance-5over10").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxFrance-2over10").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxFrance-2over5").jqxCheckBox({ checked: false });

	$("#jqxCheckBoxUk-10over30").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxUk-5over30").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxUk-5over10").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxUk-2over10").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxUk-2over5").jqxCheckBox({ checked: false });

	$("#jqxCheckBoxItaly-10over30").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxItaly-5over30").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxItaly-5over10").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxItaly-2over10").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxItaly-2over5").jqxCheckBox({ checked: false });

	$("#jqxCheckBoxSpain-10over30").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxSpain-5over30").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxSpain-5over10").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxSpain-2over10").jqxCheckBox({ checked: false });
	$("#jqxCheckBoxSpain-2over5").jqxCheckBox({ checked: false });
}
function drawGraph() {
	mode = "merge";
	var dataParam;
	var checkedItemValues = [];

	var title;
	var fromdate = formatDate(monthDate);
	var todate = formatDate(date);
	$("#mainChart").html("");
	$("#mainChart").css("display", "block");
	var Period = getChartPeriod();
	var type = getSelectedType();
	$('#overlayChart').show();
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


	chart = new ApexCharts(document.querySelector("#mainChart"), Period=='d' ? options : optionsWeekly);
	chart.render();


	if (Items != "") {
		if (Items == "all10over30")
			dataParam = {
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
			dataParam = {
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
			dataParam = {
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
			dataParam = {
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
			dataParam = {
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

		disableOptions(true);
		$.ajax({
			type: "POST",
			contentType: "application/json; charset=utf-8",
			url: "/bourse/getgraphdatabytype",
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

				var dates = [];

				title = ("All " + Items.split("all")[1] + "'s yield CURVE").replace("over", "'s/");

				var getFormatResult0 = getFormat(response[0].config.dataFormat);
				var getFormatResult1 = getFormat(response[1].config.dataFormat);
				var getFormatResult2 = getFormat(response[2].config.dataFormat);
				var getFormatResult3 = getFormat(response[3].config.dataFormat);
				var getFormatResult4 = getFormat(response[4].config.dataFormat);
				var getFormatResult5 = getFormat(response[5].config.dataFormat);


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
					type:Period=='d' ? chartType1 : 'column',
					data: response[0].graphResponseDTOLst
				}, {
					name: response[1].config != null ? (response[1].config.displayDescription == null ? '' : response[1].config.displayDescription) : '',
					type:Period=='d' ? chartType2 : 'column',
					data: response[1].graphResponseDTOLst
				},
				{
					name: response[2].config != null ? (response[2].config.displayDescription == null ? '' : response[2].config.displayDescription) : '',
					type: Period=='d' ? chartType3 : 'column',
					data: response[2].graphResponseDTOLst
				}, {
					name: response[3].config != null ? (response[3].config.displayDescription == null ? '' : response[3].config.displayDescription) : '',
					type: Period=='d' ? chartType4 : 'column',
					data: response[3].graphResponseDTOLst
				},
				{
					name: response[4].config != null ? (response[4].config.displayDescription == null ? '' : response[4].config.displayDescription) : '',
					type: Period=='d' ? chartType5 : 'column',
					data: response[4].graphResponseDTOLst
				}, {
					name: response[5].config != null ? (response[5].config.displayDescription == null ? '' : response[5].config.displayDescription) : '',
					type: Period=='d' ? chartType6 : 'column',
					data: response[5].graphResponseDTOLst
				}]);
				$('#overlayChart').hide();
			},
			error: function(e) {

				console.log("ERROR : ", e);

			}
		});

		graphHistory = {
			"screenName": "curves",
			"parameter": '[' + '[]' + ',' + '["' + Period + '"]' + ',' + '["' + Items + '"]'+ ',' +'["' + type + '"]]'
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
				"period":  Period,"type": type,
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
				url: "/bourse/getgraphdatabytype",
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
					showLegend	= checkActiveChartLegend($("#gridLegend").find(".active")[0], showLegend);


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
						type:Period=='d' ? chartType1 : 'column',
						data: response[0].graphResponseDTOLst
					}, {
						name: response[1].config != null ? (response[1].config.displayDescription == null ? '' : response[1].config.displayDescription) : '',
						type:Period=='d' ? chartType2 : 'column',
						data: response[1].graphResponseDTOLst
					}])
					$('#overlayChart').hide();
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
			});

			graphHistory = {
				"screenName": "curves",
					 "parameter": "[" + JSON.stringify(checkedItemValues) + "," + "[" + JSON.stringify(Period) + "]"+ ",["+JSON.stringify('')+"]," + "[" + JSON.stringify(type) + "]]"
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
					"period":  Period,"type": type,
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
					url: "/bourse/getgraphdatabytype",
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
							type:Period=='d' ? chartType1 : 'column',
							data: response[0].graphResponseDTOLst
						}, {
							name: response[1].config != null ? (response[1].config.displayDescription == null ? '' : response[1].config.displayDescription) : '',
							type:Period=='d' ? chartType2 : 'column',
							data: response[1].graphResponseDTOLst
						}
							, {
							name: response[2].config != null ? (response[2].config.displayDescription == null ? '' : response[2].config.displayDescription) : '',
							type: Period=='d' ? chartType3 : 'column',
							data: response[2].graphResponseDTOLst
						}])
						$('#overlayChart').hide();
					},
					error: function(e) {

						console.log("ERROR : ", e);

					}
				});

				graphHistory = {
					"screenName": "curves",
						 "parameter": "[" + JSON.stringify(checkedItemValues) + "," + "[" + JSON.stringify(Period) + "]"+ ",["+JSON.stringify('')+"]," + "[" + JSON.stringify(type) + "]]"
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
						"period":  Period,"type": type,
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
						url: "/bourse/getgraphdatabytype",
						data: JSON.stringify(dataParam),
						dataType: 'json',
						timeout: 600000,
						success: function(response) {

							startDateF1 = response[0].config.startDate;
							startDateF2 = response[1].config.startDate;
							startDateF3 = response[2].config.startDate;
							startDateF4 = response[3].config.startDate;

							if (startDateF1 != null)
								startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);
							if (startDateF2 != null)
								startDateF2 = new Date(startDateF2.split("-")[1] + "-" + startDateF2.split("-")[0] + "-" + startDateF2.split("-")[2]);
							if (startDateF3 != null)
								startDateF3 = new Date(startDateF3.split("-")[1] + "-" + startDateF3.split("-")[0] + "-" + startDateF3.split("-")[2]);
							if (startDateF4 != null)
								startDateF4 = new Date(startDateF4.split("-")[1] + "-" + startDateF4.split("-")[0] + "-" + startDateF4.split("-")[2]);
							var dates = [];

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
								type:Period=='d' ? chartType1 : 'column',
								data: response[0].graphResponseDTOLst
							}, {
								name: response[1].config != null ? (response[1].config.displayDescription == null ? '' : response[1].config.displayDescription) : '',
								type:Period=='d' ? chartType2 : 'column',
								data: response[1].graphResponseDTOLst
							}, {
								name: response[2].config != null ? (response[2].config.displayDescription == null ? '' : response[2].config.displayDescription) : '',
								type: Period=='d' ? chartType3 : 'column',
								data: response[2].graphResponseDTOLst
							}
								, {
								name: response[3].config != null ? (response[3].config.displayDescription == null ? '' : response[3].config.displayDescription) : '',
								type: Period=='d' ? chartType4 : 'column',
								data: response[3].graphResponseDTOLst
							}])
							$('#overlayChart').hide();
						},
						error: function(e) {

							console.log("ERROR : ", e);

						}
					});

					graphHistory = {
						"screenName": "curves",
							 "parameter": "[" + JSON.stringify(checkedItemValues) + "," + "[" + JSON.stringify(Period) + "]"+ ",["+JSON.stringify('')+"]," + "[" + JSON.stringify(type) + "]]"
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
						"period":  Period,"type": type,
						"factor1": itemValue[checkedItemValues[0]].factor,
						"country1": itemValue[checkedItemValues[0]].country,
						"yieldCurveCross1": itemValue[checkedItemValues[0]].yieldCurveCross,
					};
					disableOptions(false);
					$.ajax({
						type: "POST",
						contentType: "application/json; charset=utf-8",
						url: "/bourse/getgraphdatabytype",
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

							var getFormatResult = getFormat(response[0].config.dataFormat);
							chartDbFontSize = response[0].config.chartSize;
							chartColor = checkActiveChartColor($("#chartColor").find(".active")[0], response[0].config.chartColor);
							chartTransparency = checkActiveChartColorTransparency($("#chartColorTransparency").find(".active")[0],response[0].config.chartTransparency);
							fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], chartDbFontSize);
							chartType1 = checkActiveChartType($("#chartTypes").find(".active")[0], chartType1, Period);
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
						"screenName": "curves",
							 "parameter": "[" + JSON.stringify(checkedItemValues) + "," + "[" + JSON.stringify(Period) + "]"+ ",["+JSON.stringify('')+"]," + "[" + JSON.stringify(type) + "]]"
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
	
	inGraphNews(getSelectedFields((checkedItemValues.length==0?allItemsSelected(Items):checkedItemValues)));
}
function graphfont(fontSize) {
	updateGraphFont(fontSize, minvalue, maxvalue);
}
