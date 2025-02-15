var selectedRow = this;
var monthDate = new Date();
monthDate.setMonth(monthDate.getMonth() - 6);
var auditUrl;
var updateUrl;
var saveUrl;
var deleteUrl;
var checkifcanUrl;
var AuditDefaultData = [];

const nameSubgroupId = [
	{ name: '77finals', subgroupId: '1' },
	{ name: '77initial', subgroupId: '2' },
	{ name: '77surv', subgroupId: '3' },
	{ name: '78finals', subgroupId: '1' },
	{ name: '78initial', subgroupId: '2' },
	{ name: '78surv', subgroupId: '3' },
	{ name: '79final', subgroupId: '1' },
	{ name: '79finals', subgroupId: '1' },
	{ name: '79rev1', subgroupId: '2' },
	{ name: '79initial', subgroupId: '3' },
	{ name: '79surv', subgroupId: '4' },
	{ name: '80index', subgroupId: '1' },
	{ name: '80surv', subgroupId: '2' },
	{ name: '81civilianLabForce', subgroupId: '1' },
	{ name: '81employedLabForce', subgroupId: '3' },
];

var UsJobsOpeningItem = ["#jqxCheckBoxfinal-77",
	"#jqxCheckBoxinitial-77",
	"#jqxCheckBoxsurv-77",
];

var UsADPChangeItem = ["#jqxCheckBoxfinal-78",
	"#jqxCheckBoxinitial-78",
	"#jqxCheckBoxsurv-78",
];

var UsNFPItem = ["#jqxCheckBoxfinal-79",
	"#jqxCheckBoxrev1-79",
	"#jqxCheckBoxinitial-79",
	"#jqxCheckBoxsurv-79",
];

var UsUnempRateItem = ["#jqxCheckBoxindex-80",
	"#jqxCheckBoxsurv-80",
];

var UsHouseHoldSurvItem = ["#jqxCheckBoxcivilian_Lab_Force-81",
	"#jqxCheckBoxcivilian_Lab_Force_Chg-81",
	"#jqxCheckBoxemployed_Lab_Force-81",
	"#jqxCheckBoxemployed_Lab_Force_Chg-81",
	"#jqxCheckBoxunemployed-81",
];

var UsJobsOpeningAuditDefaultData = [{
	"final": "",
	"initial": "",
	"surv": "",
}];

var UsADPChangeAuditDefaultData = [{
	"final": "",
	"initial": "",
	"surv": "",
}];

var UsNFPAuditDefaultData = [{
	"final": "",
	"rev1": "",
	"initial": "",
	"surv": "",
}];

var UsUnempRateAuditDefaultData = [{
	"index": "",
	"surv": "",
}];

var UsHouseHoldSurvAuditDefaultData = [{
	"civilianLabForce": "",
	"employedLabForce": "",
}];

var source;

var inputData77final = document.getElementById("data-input-77final");

var inputData77initial = document.getElementById("data-input-77initial");

var inputData77surv = document.getElementById("data-input-77surv");

var inputData78final = document.getElementById("data-input-78final");

var inputData78initial = document.getElementById("data-input-78initial");

var inputData78surv = document.getElementById("data-input-78surv");

var inputData79final = document.getElementById("data-input-79final");

var inputData79rev1 = document.getElementById("data-input-79rev1");

var inputData79initial = document.getElementById("data-input-79initial");

var inputData79surv = document.getElementById("data-input-79surv");

var inputData80index = document.getElementById("data-input-80index");

var inputData80surv = document.getElementById("data-input-80surv");

var inputData81civilianLabForce = document.getElementById("data-input-81civilianLabForce");

var inputData81employedLabForce = document.getElementById("data-input-81employedLabForce");


var usjobsType;

const usjobsValue = $("#usjobsValue")[0].innerText;
const groupId = getGroupId(usjobsValue);
deleteUrl = "/usjobs/delete-usjobs/" + getGroupId(usjobsValue) + "/";
checkifcanUrl = "/usjobs/checkifcansave/" + getGroupId(usjobsValue) + "/";
saveUrl = "/usjobs/save-usjobs-data";
updateUrl = "/usjobs/update-usjobs-data";

if (usjobsValue == 1) {
	usjobsType = "UsJobsOpening";
	auditUrl = '/usjobs/us-jobsopening-data/' + groupId + '/';

}
else if (usjobsValue == 2) {
	usjobsType = "UsADPChange";
	auditUrl = '/usjobs/us-adpchange-data/' + groupId + '/';
}
else if (usjobsValue == 3) {
	usjobsType = "UsNFP";
	auditUrl = '/usjobs/us-nfp-data/' + groupId + '/';

} else if (usjobsValue == 4) {
	usjobsType = "UsUnempRate";
	auditUrl = '/usjobs/us-unemprate-data/' + groupId + '/';
}
else if (usjobsValue == 5) {
	usjobsType = "UsHouseHoldSurv";
	auditUrl = '/usjobs/us-householdsurv-data/' + groupId + '/';
}
$(document).ready(function() {
	$('#overlay').fadeOut();
	$('#container-wrapper').show();

	$("#viewall").jqxButton({ theme: 'dark', width: 110, height: 35, template: "primary" });
	$("#viewall").css("display", "block");
	$("#viewall").click(function() {
		popupWindow('/bourse/allnews', 'Libvol - View All News', window, 1300, 600);
	});

	$('[data-toggle="tooltip"]').tooltip();

	if (usjobsValue == 1) {
		$("#UsJobsOpening-btn").addClass('active');

	} else
		if (usjobsValue == 2) {
			$("#UsADPChange-btn").addClass('active');
		} else
			if (usjobsValue == 3) {
				$("#UsNFP-btn").addClass('active');
			} else
				if (usjobsValue == 4) {
					$("#UsUnempRate-btn").addClass('active');
				} else
					if (usjobsValue == 5) {
						$("#UsHouseHoldSurv-btn").addClass('active');
					}

	renderSubGroup(usjobsValue);
	
	$("#dateInput").jqxDateTimeInput({
		theme: 'dark', views: ["year", "decade"]
		, width: "110px"
		, height: "25px"
		, formatString: "MMM-yy"
	});
	$("#dateInputAudit").jqxDateTimeInput({
		theme: 'dark', views: ["year", "decade"]
		, width: "110px"
		, height: "25px"
		, formatString: "MMM-yy"
	});

	$("#dateInputFrom").jqxDateTimeInput({
		theme: 'dark', views: ["year", "decade"]
		, width: "110px"
		, height: "25px"
		, formatString: "MMM-yy"
	});
	$("#dateInputFrom").jqxDateTimeInput('setDate', monthDate);
	$("#dateInputTo").jqxDateTimeInput({
		theme: 'dark', views: ["year", "decade"]
		, width: "110px"
		, height: "25px"
		, formatString: "MMM-yy"
	});

	$("#filter").jqxButton({ theme: 'dark', height: 30, width: 74 });
	$("#Clearfilter").jqxButton({ theme: 'dark', height: 30, width: 74 });

	source =
	{
		datatype: "json",
		datafields: [
			{ name: 'refer_date', type: 'date' },
			{ name: 'FINAL-77', type: 'float' },
			{ name: 'INITIAL-77', type: 'float' },
			{ name: 'SURV-77', type: 'float' },
			{ name: 'FINAL-78', type: 'float' },
			{ name: 'INITIAL-78', type: 'float' },
			{ name: 'SURV-78', type: 'float' },
			{ name: 'FINAL-79', type: 'float' },
			{ name: 'REV1-79', type: 'float' },
			{ name: 'INITIAL-79', type: 'float' },
			{ name: 'SURV-79', type: 'float' },
			{ name: 'INDEX-80', type: 'float' },
			{ name: 'SURV-80', type: 'float' },
			{ name: 'CIVILIAN_LAB_FORCE-81', type: 'float' },
			{ name: 'CIVILIAN_LAB_FORCE_CHG-81', type: 'float' },
			{ name: 'EMPLOYED_LAB_FORCE-81', type: 'float' },
			{ name: 'EMPLOYED_LAB_FORCE_CHG-81', type: 'float' },
			{ name: 'UNEMPLOYED-81', type: 'float' },
		],
		id: 'id',
		localdata: ''
	};
	$("#grid").jqxGrid({
		width: '100%',
		columnsresize: true,
		theme: 'dark',
		pageable: true,
		pagesize: 10,
		showfilterrow: true,
		filterable: true,
		autoheight: true,
		columnsresize: true,
		pagesizeoptions: ['10', '20', '50']
	});
	getFilterHistory(usjobsValue);

	$("#grid").jqxGrid('showloadelement');

	getFilterData(usjobsValue);

	$('#dateInputAudit').on('change', function(event) {
		date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
		filterDate = date;

		delete auditGridSource.localdata;
		auditGridSource.url = auditUrl + date;
		dataAdapter = new $.jqx.dataAdapter(auditGridSource);
		$('#' + usjobsType + 'AuditGrid').jqxGrid({ source: dataAdapter });

	});

	$("#filter").click(function() {

		getFilterData(usjobsValue);
	});
});// end document ready
$("#Clearfilter").click(function() {
	if (usjobsValue == 1) {
		for (i = 0; i < UsJobsOpeningItem.length; i++) {
			$(UsJobsOpeningItem[i]).jqxCheckBox({ checked: false });
		}
	}
	else if (usjobsValue == 2) {
		for (i = 0; i < UsADPChangeItem.length; i++) {
			$(UsADPChangeItem[i]).jqxCheckBox({ checked: false });
		}
	}
	else if (usjobsValue == 3) {
		for (i = 0; i < UsNFPItem.length; i++) {
			$(UsNFPItem[i]).jqxCheckBox({ checked: false });
		}
	} else if (usjobsValue == 4) {
		for (i = 0; i < UsUnempRateItem.length; i++) {
			$(UsUnempRateItem[i]).jqxCheckBox({ checked: false });
		}
	} else if (usjobsValue == 5) {
		for (i = 0; i < UsHouseHoldSurvItem.length; i++) {
			$(UsHouseHoldSurvItem[i]).jqxCheckBox({ checked: false });
		}
	}
});
function Edit(row, event) {

	isedit = true;
	var data = $('#' + usjobsType + 'AuditGrid').jqxGrid('getrowdata', row);
	if (usjobsValue == 1 || usjobsValue == 2) {
		oldDataJson = {
			"finals": data.finals,
			"initial": data.initial,
			"surv": data.surv,
		};
	} else if (usjobsValue == 3) {
			oldDataJson = {
			"finals": data.finals,
			"rev1": data.rev1,
			"initial": data.initial,
			"surv": data.surv,
		};
	} else if (usjobsValue == 4) {
		oldDataJson = {
			"index": data.index,
			"surv": data.surv,
		};
	}
	else if (usjobsValue == 5) {
		oldDataJson = {
			"civilianLabForce": data.civilianLabForce,
			"civilianLabForceChg": data.civilianLabForceChg,
			"employedLabForce": data.employedLabForce,
			"employedLabForceChg": data.employedLabForceChg,
			"unemployed": data.unemployed
		};
	}
	selectedRow.editrow = row;
	date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
	if (auditGridSource.url == '' || date != filterDate) {
		delete auditGridSource.localdata;
		auditGridSource.url = auditUrl + date;
		dataAdapter = new $.jqx.dataAdapter(auditGridSource);
		$('#' + usjobsType + 'AuditGrid').jqxGrid({ source: dataAdapter });
	}
	setTimeout(function() {
		if (usjobsValue == 1 || usjobsValue == 2) {
			if (($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].finals != null) &&
				($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].initial != null) &&
				($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].surv != null)) {
				$('#' + usjobsType + 'AuditGrid').jqxGrid('beginrowedit', row);
				$("#edit" + row).css("display", "none");
				$("#actionButtons" + row).css("display", "contents");
				if (event) {
					if (event.preventDefault) {
						event.preventDefault();
					}
				}
			}
		}
		else if (usjobsValue == 3) {
			if  (($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].finals != null) &&
				($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].rev1 != null) &&
				($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].initial != null) &&
				($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].surv != null)) {
				$('#' + usjobsType + 'AuditGrid').jqxGrid('beginrowedit', row);
				$("#edit" + row).css("display", "none");
				$("#actionButtons" + row).css("display", "contents");
				if (event) {
					if (event.preventDefault) {
						event.preventDefault();
					}
				}
			}
		} else if (usjobsValue == 4) {
			if (($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].index != null) &&
				($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].surv != null)) {
				$('#' + usjobsType + 'AuditGrid').jqxGrid('beginrowedit', row);
				$("#edit" + row).css("display", "none");
				$("#actionButtons" + row).css("display", "contents");
				if (event) {
					if (event.preventDefault) {
						event.preventDefault();
					}
				}
			}
		} else if (usjobsValue == 5) {
			if (($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].civilianLabForce != null)
				&& ($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].civilianLabForceChg != null)
				&& ($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].employedLabForce != null)
				&& ($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].employedLabForceChg != null)
				&& ($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].unemployed != null)) {
				$('#' + usjobsType + 'AuditGrid').jqxGrid('beginrowedit', row);
				$("#edit" + row).css("display", "none");
				$("#actionButtons" + row).css("display", "contents");
				if (event) {
					if (event.preventDefault) {
						event.preventDefault();
					}
				}
			}
		}

		return false;
	}, 300);
}

function Update(row, event) {

	isupdate = true;
	var dataToBeUpdated = [];
	var updatedDataJson;
	var keys;
	var updatedData = $('#' + usjobsType + 'AuditGrid').jqxGrid('getrowdata', row);
	const groupId = getGroupId(usjobsValue);
	selectedRow.editrow = -1;
	$('#' + usjobsType + 'AuditGrid').jqxGrid('endrowedit', row);
	var updatedData = $('#' + usjobsType + 'AuditGrid').jqxGrid('getrowdata', row);
	if (usjobsValue == 1 || usjobsValue == 2) {
		updatedDataJson = {
			"finals": updatedData.finals,
			"initial": updatedData.initial,
			"surv": updatedData.surv,
		};
		keys = Object.keys(updatedDataJson);

		for (var i = 0; i < keys.length; i++) {
			var field = keys[i];
			if (updatedDataJson[field] !== oldDataJson[field]) {

				dataToBeUpdated.push({
					"subgroupId": getSubgroupIdByName(getGroupId(usjobsValue) + field),
					"groupId": groupId,
					"value": updatedDataJson[field].replace(',', ''),
					"referdate": date
				});
			}
		}
	} else if (usjobsValue == 3) {
		updatedDataJson = {
			"finals": updatedData.finals,
			"rev1": updatedData.rev1,
			"initial": updatedData.initial,
			"surv": updatedData.surv,
		};
		keys = Object.keys(updatedDataJson);

		for (var i = 0; i < keys.length; i++) {
			var field = keys[i];
			if (updatedDataJson[field] !== oldDataJson[field]) {

				dataToBeUpdated.push({
					"subgroupId": getSubgroupIdByName(getGroupId(usjobsValue) + field),
					"groupId": groupId,
					"value": updatedDataJson[field].replace(',', ''),
					"referdate": date
				});
			}
		}
	} else if (usjobsValue == 4) {
		updatedDataJson = {
			"index": updatedData.index,
			"surv": updatedData.surv,
		};
		keys = Object.keys(updatedDataJson);
		for (var i = 0; i < keys.length; i++) {
			var field = keys[i];
			if (updatedDataJson[field] !== oldDataJson[field]) {

				dataToBeUpdated.push({
					"subgroupId": getSubgroupIdByName(getGroupId(usjobsValue) + field),
					"groupId": groupId,
					"value": updatedDataJson[field].replace(',', ''),
					"referdate": date
				});
			}
		}

	}
	else if (usjobsValue == 5) {
		
		updatedDataJson = {
			"civilianLabForce": updatedData.civilianLabForce,
			"civilianLabForceChg": updatedData.civilianLabForceChg,
			"employedLabForce": updatedData.employedLabForce,
			"employedLabForceChg": updatedData.employedLabForceChg,
			"unemployed": updatedData.unemployed,
		};
		keys = Object.keys(updatedDataJson);
		for (var i = 0; i < keys.length; i++) {
			var field = keys[i];
			if (updatedDataJson[field] !== oldDataJson[field]) {

				dataToBeUpdated.push({
					"subgroupId": getSubgroupIdByName(getGroupId(usjobsValue) + field),
					"groupId": groupId,
					"value": updatedDataJson[field].replace(',', ''),
					"referdate": date
				});
			}
		}

	
	}
	var updatedJson = [];
	for (let i = 0; i < keys.length; i++) {
		if (updatedDataJson[keys[i]] != oldDataJson[keys[i]])
			updatedJson.push({
				"assetId": 12,
				"groupId": groupId,
				"value": keys[i].toUpperCase()
			});
	}

	$.ajax({
		type: "POST",
		contentType: "application/json",
		url: updateUrl,
		data: JSON.stringify(dataToBeUpdated),
		dataType: 'json',
		async: true,
		cache: false,
		timeout: 600000,
		success: function(data) {

			updateRobotNewsOnChangeColumns(updatedJson);

			delete auditGridSource.localdata;
			auditGridSource.url = auditUrl + date;
			dataAdapter = new $.jqx.dataAdapter(auditGridSource);
			$('#' + usjobsType + 'AuditGrid').jqxGrid({ source: dataAdapter });

			getFilterData(usjobsValue);
		},
		error: function(e) {

			console.log("ERROR : ", e);

		}
	});


	if (event) {
		if (event.preventDefault) {
			event.preventDefault();
		}
	}
	return false;
}


function Cancel(row) {
	isedit = false;
	isupdate = false;
	selectedRow.editrow = row;
	$('#' + usjobsType + 'AuditGrid').jqxGrid('endrowedit', row, true);
}

function deleteDataByDate() {
	$('#alertDeleteDataByDate-modal').modal('hide');
	date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')

	$.ajax({
		type: "DELETE",
		url: deleteUrl + date,
		success: function(result) {
			$.ajax({
				contentType: "application/json",
				url: checkifcanUrl + date,
				dataType: 'json',
				async: true,
				cache: false,
				timeout: 600000,
				success: function(response) {
					if (!response) {
						delete auditGridSource.localdata;
						auditGridSource.url = auditUrl + date;
						dataAdapter = new $.jqx.dataAdapter(auditGridSource);
						$('#' + usjobsType + 'AuditGrid').jqxGrid({ source: dataAdapter });
					}
					else {
						getAuditGridSource(usjobsValue);
					}
				},
				error: function(e) {
					console.log(e);
				}
			});
			getFilterData(usjobsValue);
			$('#alertDeleteDataByDate-modal').modal('hide');

			$("#successDelete").empty();
			$("#successDelete").append("<p> All record for the date '" + date + "' has been deleted</p>");

			$('#alertInfoDeleteDataByDate-modal').modal('show');
		},
		error: function(e) {
			console.log(e);
		}
	});

}

function getAuditGridSource(usjobsValue) {

	latestUrl = '/usjobs/getlatest/' + getGroupId(usjobsValue);
	$.ajax({
		contentType: "application/json",
		url: latestUrl,
		dataType: 'text',
		async: true,
		cache: false,
		timeout: 600000,
		success: function(response) {
			if (response != '') {
				$('#dateInputAudit').jqxDateTimeInput('setDate', new Date(response.split("-")[1] + "," + response.split("-")[2] + "," + response.split("-")[0]));
				date = $.jqx.dataFormat.formatdate(new Date(response), 'dd-MM-yyyy');

				var dbDate = new Date(response.split("-")[1] + "," + response.split("-")[2] + "," + response.split("-")[0]);
				var systemDate = new Date();
				systemDate.setHours(0, 0, 0, 0);

				if (dbDate.toDateString() == systemDate.toDateString()) {
					filterDate = date;
					delete auditGridSource.localdata;
					auditGridSource.url = auditUrl + date;
					dataAdapter = new $.jqx.dataAdapter(auditGridSource);
					$('#' + usjobsType + 'AuditGrid').jqxGrid({ source: dataAdapter });
				}
			}
		},
		error: function(e) {

			console.log("ERROR : ", e);

		}
	});

}

function getFilterData(usjobsValue) {
	var SelectedSearchDTO = [];
	var allItems = 0;
	var checkedItem = [];
	var json;
	var values = [];
	$('#grid').jqxGrid({ showdefaultloadelement: true });
	var item = 0;
	if (usjobsValue == 1) {
		items = UsJobsOpeningItem;
	} else if (usjobsValue == 2) {
		items = UsADPChangeItem;
	} else if (usjobsValue == 3) {
		items = UsNFPItem;
	} else if (usjobsValue == 4) {
		items = UsUnempRateItem;
	}else if (usjobsValue == 5) {
		items = UsHouseHoldSurvItem;
	}
	for (i = 0; i < items.length; i++) {
		if ($(items[i]).jqxCheckBox('checked')) {
			values.push(items[i].split("Box")[1].toUpperCase());
			item = 1;
			allItems = allItems + 1;
			checkedItem.push(items[i]);
		}
	}

	if (item != 0) {
		SelectedSearchDTO.push({
			"groupId": getGroupId(usjobsValue),
			"selectedValues": values,
		});
		values = [];
	}
	var parsedDateFrom = new Date($("#dateInputFrom").jqxDateTimeInput('getDate'));
		parsedDateFrom.setDate(1);
	var formattedDateFrom =  parsedDateFrom.getFullYear()+ '-' + ("0" + (parsedDateFrom.getMonth() + 1)).slice(-2)+ '-'+("0" + parsedDateFrom.getDate()).slice(-2) ;

	if (allItems != 0) {
		json = {
			"selectedSearchDTOlst": SelectedSearchDTO,
			"fromDate": formattedDateFrom,
			"toDate": $.jqx.dataFormat.formatdate($("#dateInputTo").jqxDateTimeInput('getDate'), 'yyyy-MM-dd')
		};

		if (allItems <= 9) {
			$.ajax({
				type: "POST",
				contentType: "application/json",
				url: "/usjobs/getgriddata",
				data: JSON.stringify(json),
				dataType: 'json',
				async: true,
				cache: false,
				timeout: 600000,
				success: function(data) {
					delete source.url;
					source.localdata = data.rows;
					dataAdapter = new $.jqx.dataAdapter(source);
					$('#grid').jqxGrid('hideloadelement');

					for (i = 0; i < data.columns.length; i++) {
						if (data.columns[i].datafield == "refer_date") {
							data.columns[i].cellsformat = 'MMM-yyyy';
							break;
						}
					}
					$('#grid').jqxGrid({
						width: data.columns.length > 12 ? '100%' : data.columns.length * 110,
						source: dataAdapter,
						columns: data.columns
					});

					saveFilterHistory(usjobsValue, checkedItem);
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
			});
		}
		else {
			$('#alertFiltterMax-modal').modal('show');
			$('#grid').jqxGrid('hideloadelement');
		}
	}
	else {
		$('#alertFiltter-modal').modal('show');
		$('#grid').jqxGrid('hideloadelement');
	}
}

function triggerRobots() {
	$.ajax({
		contentType: "application/json; charset=utf-8",
		url: "/robot/callrobotsasync/12/" + getGroupId(usjobsValue),
		dataType: 'json',
		timeout: 600000,
		async: true,
		success: function(response) {

		},
		error: function(e) {

			console.log("ERROR : ", e);

		}
	});
}

function updateRobotNewsOnChangeColumns(ArrayOfColumns) {

	$.ajax({
		type: "POST",
		contentType: "application/json",
		url: "/robot/updaterobotnewsonchangecolumns",
		data: JSON.stringify(ArrayOfColumns),
		dataType: 'json',
		timeout: 600000,
		async: true,
		success: function(response) {

		},
		error: function(e) {
			console.log("ERROR : ", e);
		}
	});
}

function toggleDivVisibility(divNum) {

	location.href = "/bourse/usjobs?usjobs=" + divNum;
}
function renderSubGroup(usjobsValue) {

	if (usjobsValue == 1) {
		items = UsJobsOpeningItem;

		var defaultData = AuditDefaultData;
		var fields = [
			{ name: 'id', type: 'string' },
			{ name: 'finals', type: 'string' },
			{ name: 'initial', type: 'string' },
			{ name: 'surv', type: 'string' },
		];
		var totalFields = fields.length - 1;
		var widthPercentage = (100 - 20) / totalFields;
		var arrayOFcolumns = [
			{
				text: '', editable: false, datafield: 'Edit', width: '20%', cellsrenderer: function(row) {
					return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit" + row + "\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons" + row + "\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
				}
			},
			{ text: '', editable: false, hidden: true, datafield: 'id', width: widthPercentage + '%' },
			{ text: 'FINAL', datafield: 'finals', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'INITIAL', datafield: 'initial', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'SURV', datafield: 'surv', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		];

		Types = ["77final", "77initial", "77surv"];
		inputDataTypes = [inputData77final, inputData77initial, inputData77surv];

		for (var i = 0; i < Types.length; i++) {
			var Type = Types[i];
			inputDataType = inputDataTypes[i];

			items = UsJobsOpeningItem;
			var dataInputGridFields = [
				(Type.includes("77final")) ? { name: 'finals', type: 'string' }
					: (Type.includes("77initial")) ? { name: 'inital', type: 'string' }
						: (Type.includes("77surv")) ? { name: 'surv', type: 'string' } : null,
			];
			var totalFields = dataInputGridFields.length;
			var widthPercentage = 100 / totalFields;

			var dataInputGridColumns = [
				(Type.includes("77final")) ? { text: 'final', datafield: 'finals', width: widthPercentage + '%', cellsalign: 'center', align: 'center' }
					: (Type.includes("77initial")) ? { text: 'inital', datafield: 'inital', width: widthPercentage + '%', cellsalign: 'center', align: 'center' }
						: (Type.includes("77surv")) ? { text: 'surv', datafield: 'surv', width: widthPercentage + '%', cellsalign: 'center', align: 'center' }
							: null,
			];

			initiate(Type, inputDataType, items, dataInputGridFields, dataInputGridColumns, defaultData, fields, arrayOFcolumns);

		}
	}
	else
		if (usjobsValue == 2) {
		

		var defaultData = AuditDefaultData;
		var fields = [
			{ name: 'id', type: 'string' },
			{ name: 'finals', type: 'string' },
			{ name: 'initial', type: 'string' },
			{ name: 'surv', type: 'string' },
		];
		var totalFields = fields.length - 1;
		var widthPercentage = (100 - 20) / totalFields;
		var arrayOFcolumns = [
			{
				text: '', editable: false, datafield: 'Edit', width: '20%', cellsrenderer: function(row) {
					return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit" + row + "\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons" + row + "\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
				}
			},
			{ text: '', editable: false, hidden: true, datafield: 'id', width: widthPercentage + '%' },
			{ text: 'FINAL', datafield: 'finals', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'INITIAL', datafield: 'initial', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'SURV', datafield: 'surv', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		];

		Types = ["78final", "78initial", "78surv"];
		inputDataTypes = [inputData78final, inputData78initial, inputData78surv];

		for (var i = 0; i < Types.length; i++) {
			var Type = Types[i];
			inputDataType = inputDataTypes[i];

			items = UsADPChangeItem;
			var dataInputGridFields = [
				(Type.includes("78final")) ? { name: 'finals', type: 'string' }
					: (Type.includes("78initial")) ? { name: 'inital', type: 'string' }
						: (Type.includes("78surv")) ? { name: 'surv', type: 'string' } : null,
			];
			var totalFields = dataInputGridFields.length;
			var widthPercentage = 100 / totalFields;

			var dataInputGridColumns = [
				(Type.includes("78final")) ? { text: 'final', datafield: 'finals', width: widthPercentage + '%', cellsalign: 'center', align: 'center' }
					: (Type.includes("78initial")) ? { text: 'inital', datafield: 'inital', width: widthPercentage + '%', cellsalign: 'center', align: 'center' }
						: (Type.includes("78surv")) ? { text: 'surv', datafield: 'surv', width: widthPercentage + '%', cellsalign: 'center', align: 'center' }
							: null,
			];

			initiate(Type, inputDataType, items, dataInputGridFields, dataInputGridColumns, defaultData, fields, arrayOFcolumns);

		}
	} else
		if (usjobsValue == 3) {
		

		var defaultData = AuditDefaultData;
		var fields = [
			{ name: 'id', type: 'string' },
			{ name: 'finals', type: 'string' },
			{ name: 'rev1', type: 'string' },
			{ name: 'initial', type: 'string' },
			{ name: 'surv', type: 'string' },
		];
		var totalFields = fields.length - 1;
		var widthPercentage = (100 - 20) / totalFields;
		var arrayOFcolumns = [
			{
				text: '', editable: false, datafield: 'Edit', width: '20%', cellsrenderer: function(row) {
					return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit" + row + "\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons" + row + "\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
				}
			},
			{ text: '', editable: false, hidden: true, datafield: 'id', width: widthPercentage + '%' },
			{ text: 'FINAL', datafield: 'finals', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'REV1', datafield: 'rev1', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'INITIAL', datafield: 'initial', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'SURV', datafield: 'surv', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		];

		Types = ["79final",  "79rev1", "79initial", "79surv"];
		inputDataTypes = [inputData79final, inputData79rev1, inputData79initial, inputData79surv];

		for (var i = 0; i < Types.length; i++) {
			var Type = Types[i];
			inputDataType = inputDataTypes[i];

			items = UsNFPItem;
			var dataInputGridFields = [
				(Type.includes("79final")) ? { name: 'finals', type: 'string' }
				 :(Type.includes("79rev1")) ? { name: 'rev1', type: 'string' }
					: (Type.includes("79initial")) ? { name: 'inital', type: 'string' }
						: (Type.includes("79surv")) ? { name: 'surv', type: 'string' } : null,
			];
			var totalFields = dataInputGridFields.length;
			var widthPercentage = 100 / totalFields;

			var dataInputGridColumns = [
				(Type.includes("79final")) ? { text: 'final', datafield: 'finals', width: widthPercentage + '%', cellsalign: 'center', align: 'center' }
				:(Type.includes("79rev1")) ? { text: 'rev1', datafield: 'rev1', width: widthPercentage + '%', cellsalign: 'center', align: 'center' }
				: (Type.includes("79initial")) ? { text: 'inital', datafield: 'inital', width: widthPercentage + '%', cellsalign: 'center', align: 'center' }
						: (Type.includes("79surv")) ? { text: 'surv', datafield: 'surv', width: widthPercentage + '%', cellsalign: 'center', align: 'center' }
							: null,
			];

			initiate(Type, inputDataType, items, dataInputGridFields, dataInputGridColumns, defaultData, fields, arrayOFcolumns);

		}
	} else
		if (usjobsValue == 4) {
		

		var defaultData = AuditDefaultData;
		var fields = [
			{ name: 'id', type: 'string' },
			{ name: 'index', type: 'string' },
			{ name: 'surv', type: 'string' },
		];
		var totalFields = fields.length - 1;
		var widthPercentage = (100 - 20) / totalFields;
		var arrayOFcolumns = [
			{
				text: '', editable: false, datafield: 'Edit', width: '20%', cellsrenderer: function(row) {
					return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit" + row + "\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons" + row + "\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
				}
			},
			{ text: '', editable: false, hidden: true, datafield: 'id', width: widthPercentage + '%' },
			{ text: 'INDEX', datafield: 'index', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'SURV', datafield: 'surv', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		];

		Types = ["80index", "80surv"];
		inputDataTypes = [inputData80index, inputData80surv];

		for (var i = 0; i < Types.length; i++) {
			var Type = Types[i];
			inputDataType = inputDataTypes[i];

			items = UsUnempRateItem;
			var dataInputGridFields = [
				(Type.includes("80index")) ? { name: 'index', type: 'string' }
				: (Type.includes("80surv")) ? { name: 'surv', type: 'string' } : null,
			];
			var totalFields = dataInputGridFields.length;
			var widthPercentage = 100 / totalFields;

			var dataInputGridColumns = [
				(Type.includes("80index")) ? { text: 'index', datafield: 'index', width: widthPercentage + '%', cellsalign: 'center', align: 'center' }
				: (Type.includes("80surv")) ? { text: 'surv', datafield: 'surv', width: widthPercentage + '%', cellsalign: 'center', align: 'center' }
							: null,
			];

			initiate(Type, inputDataType, items, dataInputGridFields, dataInputGridColumns, defaultData, fields, arrayOFcolumns);

		}
	} else
		if (usjobsValue == 5) {
		

		var defaultData = AuditDefaultData;
		var fields = [
			{ name: 'id', type: 'string' },
			{ name: 'civilianLabForce', type: 'string' },
			{ name: 'civilianLabForceChg', type: 'string' },
			{ name: 'employedLabForce', type: 'string' },
			{ name: 'employedLabForceChg', type: 'string' },
			{ name: 'unemployed', type: 'string' },
		];
		var totalFields = fields.length - 1;
		var widthPercentage = (100 - 20) / totalFields;
		var arrayOFcolumns = [
			{
				text: '', editable: false, datafield: 'Edit', width: '20%', cellsrenderer: function(row) {
					return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit" + row + "\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons" + row + "\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
				}
			},
			{ text: '', editable: false, hidden: true, datafield: 'id', width: widthPercentage + '%' },
			{ text: 'CIVILIAN Labor Force', datafield: 'civilianLabForce', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Chg', datafield: 'civilianLabForceChg',editable: false, width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'EMPLOYED Labor Force', datafield: 'employedLabForce', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Chg', datafield: 'employedLabForceChg',editable: false, width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'UN-EMPLOYED', datafield: 'unemployed',editable: false, width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		];

		Types = usjobsType;

		
		Types = ["81civilianLabForce", "81employedLabForce"];
		inputDataTypes = [inputData81civilianLabForce, inputData81employedLabForce];

		for (var i = 0; i < Types.length; i++) {
			var Type = Types[i];
			inputDataType = inputDataTypes[i];

			items = UsHouseHoldSurvItem;
			var dataInputGridFields = [
				(Type.includes("81civilianLabForce")) ? { name: 'civilianLabForce', type: 'string' }
				: (Type.includes("81employedLabForce")) ? { name: 'employedLabForce', type: 'string' } : null,
			];
			var totalFields = dataInputGridFields.length;
			var widthPercentage = 100 / totalFields;

			var dataInputGridColumns = [
				(Type.includes("81civilianLabForce")) ? { text: 'Civilian Labor Force', datafield: 'civilianLabForce', width: widthPercentage + '%', cellsalign: 'center', align: 'center' }
				: (Type.includes("81employedLabForce")) ? { text: 'Employed Labor Force', datafield: 'employedLabForce', width: widthPercentage + '%', cellsalign: 'center', align: 'center' }
							: null,
			];

			initiate(Type, inputDataType, items, dataInputGridFields, dataInputGridColumns, defaultData, fields, arrayOFcolumns);

		}
	}

}
function saveFilterHistory(usjobsValue, checkedItem) {


	var filterHistory = {
		"filterHistory": checkedItem.toString(),
		"screenName": "DATABASE_INPUT_SCREEN_USJOBS-" + getGroupId(usjobsValue)
	};
	$.ajax({
		type: "POST",
		contentType: "application/json; charset=utf-8",
		url: "/bourse/savedataentryfilterhistory",
		data: JSON.stringify(filterHistory),
		dataType: 'json',
		timeout: 600000,
		success: function(response) {

		},
		error: function(e) {

			console.log("ERROR : ", e);

		}
	});
}
function getFilterHistory(usjobsValue) {

	$.ajax({
		contentType: "application/json; charset=utf-8",
		url: "/bourse/getdataentryfilterhistory/" + "DATABASE_INPUT_SCREEN_USJOBS-" + getGroupId(usjobsValue),
		dataType: 'json',
		timeout: 600000,
		async: false,
		success: function(response) {

			if (response.filterHistory != null) {
				var filterresponse = response.filterHistory;
				for (i = 0; i < filterresponse.split(",").length; i++) {
					$(filterresponse.split(",")[i]).jqxCheckBox({ checked: true });
				}
			}
			else {
				if (usjobsValue == 1)
					for (i = 0; i < UsJobsOpeningItem.length; i++) {
						$(UsJobsOpeningItem[i]).jqxCheckBox({ checked: true });
					}
				else if (usjobsValue == 2)
					for (i = 0; i < UsADPChangeItem.length; i++) {
						$(UsADPChangeItem[i]).jqxCheckBox({ checked: true });
					} else if (usjobsValue == 3)
					for (i = 0; i < UsNFPItem.length; i++) {
						$(UsNFPItem[i]).jqxCheckBox({ checked: true });
					} else if (usjobsValue == 4)
					for (i = 0; i < UsUnempRateItem.length; i++) {
						$(UsUnempRateItem[i]).jqxCheckBox({ checked: true });
					}
					else if (usjobsValue == 5)
					for (i = 0; i < UsHouseHoldSurvItem.length; i++) {
						$(UsHouseHoldSurvItem[i]).jqxCheckBox({ checked: true });
					}
			}
		},
		error: function(e) {

			console.log("ERROR : ", e);

		}
	});
}

function getGroupId(usjobsValue) {
	var groupId = '';
	switch (usjobsValue) {

		case '1':
			groupId = '77'
			break;
		case '2':
			groupId = '78'
			break;
		case '3':
			groupId = '79'
			break;
		case '4':
			groupId = '80'
			break;
		case '5':
			groupId = '81'
			break;
	}
	return groupId;
}

function initiate(usjobsType, inputDataType, item, dataInputGridFields, dataInputGridColumns, defaultData, fields, arrayOFcolumns) {
	var jsonObject = null;
	if (usjobsValue == 1) {
		$("#deleteUsJobsOpening").jqxButton({ theme: 'dark', width: 90, height: 30, template: "danger" });
		$("#cancel" + usjobsType).jqxButton({ theme: 'dark', height: 30, width: 74, imgSrc: "/img/icon/false.svg" });
		$("#load" + usjobsType).jqxButton({ theme: 'dark', height: 30, width: 74, imgSrc: "/img/icon/true.svg" });
	}
	else if (usjobsValue == 2) {
		$("#deleteUsADPChange").jqxButton({ theme: 'dark', width: 90, height: 30, template: "danger" });
		$("#cancel" + usjobsType).jqxButton({ theme: 'dark', height: 30, width: 74, imgSrc: "/img/icon/false.svg" });
		$("#load" + usjobsType).jqxButton({ theme: 'dark', height: 30, width: 74, imgSrc: "/img/icon/true.svg" });
	}
	else if (usjobsValue == 3) {
		$("#deleteUsNFP").jqxButton({ theme: 'dark', width: 90, height: 30, template: "danger" });
		$("#cancel" + usjobsType).jqxButton({ theme: 'dark', height: 30, width: 74, imgSrc: "/img/icon/false.svg" });
		$("#load" + usjobsType).jqxButton({ theme: 'dark', height: 30, width: 74, imgSrc: "/img/icon/true.svg" });
	}
	else if (usjobsValue == 4) {
		$("#deleteUsUnempRate").jqxButton({ theme: 'dark', width: 90, height: 30, template: "danger" });
		$("#cancel" + usjobsType).jqxButton({ theme: 'dark', height: 30, width: 74, imgSrc: "/img/icon/false.svg" });
		$("#load" + usjobsType).jqxButton({ theme: 'dark', height: 30, width: 74, imgSrc: "/img/icon/true.svg" });
	}
	else if (usjobsValue == 5) {
		$("#deleteUsHouseHoldSurv").jqxButton({ theme: 'dark', width: 90, height: 30, template: "danger" });
		$("#cancel" + usjobsType).jqxButton({ theme: 'dark', height: 30, width: 74, imgSrc: "/img/icon/false.svg" });
		$("#load" + usjobsType).jqxButton({ theme: 'dark', height: 30, width: 74, imgSrc: "/img/icon/true.svg" });
	}
	else {
		$("#delete" + usjobsType).jqxButton({ theme: 'dark', width: 90, height: 30, template: "danger" });
		$("#cancel" + usjobsType).jqxButton({ theme: 'dark', height: 30, width: 74 });
		$("#load" + usjobsType).jqxButton({ theme: 'dark', height: 30, width: 74 });

	}
	$("#cancel" + usjobsType).click(function() {
		inputDataType.value = "";
		$("#dataformInput" + usjobsType).css("display", "block");
		$("#dataInputButtons" + usjobsType).css("display", "none");
		$("#dataInputGrid" + usjobsType).css("display", "none");
	});

	for (i = 0; i < item.length; i++) {
		$(item[i]).jqxCheckBox({ theme: 'dark', width: 60, height: 25, boxSize: "0px" });
	}
	$('#data-input-' + usjobsType).on('keydown', function(event) {
		if (event.keyCode === 13) {
			event.preventDefault(); // prevent form submission
			$('#data-input-' + usjobsType).blur();
		}
	});
	inputDataType.addEventListener("blur", function() {
		if ($('#data-input-' + usjobsType).val() != "") {
			$("#dataformInput" + usjobsType).css("display", "none");
			$("#dataInputGrid" + usjobsType).css("display", "block");
			$("#dataInputButtons" + usjobsType).css("display", "block");

			var localdata = [];
			var dataIput = $('#data-input-' + usjobsType).val()
			var dataInputRows = dataIput.split(/\r?\n/);
			var rowData = dataInputRows[0].split(/\r?\t/);
			
			var jsonObject = {};
			dataInputGridFields.forEach(function(field, index) {
				jsonObject[field.name] = rowData[index];
			});
		
			localdata.push(jsonObject);

			var dataInputGridSource =
			{
				datatype: "json",
				datafields: dataInputGridFields,
				localData: localdata
			};
			var dataAdapter = new $.jqx.dataAdapter(dataInputGridSource);
			// initialize jqxGrid
			$("#dataInputGrid" + usjobsType).jqxGrid(
				{
					width: '100%',
					source: dataAdapter,
					theme: 'dark',
					enabletooltips: true,
					selectionmode: 'none',
					autoheight: true,
					columns: dataInputGridColumns
				});

		}
	});

	auditGridSource =
	{
		localdata: defaultData,
		datatype: "json",
		datafields: fields,
		url: ''
	};
	var dataAdapter = new $.jqx.dataAdapter(auditGridSource);

	getAuditGridSource(usjobsValue);
	if (usjobsValue == 1) {
		$('#UsJobsOpeningAuditGrid').jqxGrid(
			{
				width: '100%',
				source: dataAdapter,
				theme: 'dark',
				autoheight: true,
				editable: true,
				selectionmode: 'none',
				editmode: 'selectedrow',
				columns: arrayOFcolumns
			});
		$("#deleteUsJobsOpening").click(function() {
				value = "JOLTS";

			$('#alertDeleteDataByDate-modal').modal('show');
			date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
			$("#alertTextDeleteDataByDate").empty();
			$("#alertTextDeleteDataByDate").append("<p> Are you sure you want to Delete all " + value + " record for the date '" + date + "'?</p>");
		});
	} else
		if (usjobsValue == 2) {	
			$('#UsADPChangeAuditGrid').jqxGrid(
			{
				width: '100%',
				source: dataAdapter,
				theme: 'dark',
				autoheight: true,
				editable: true,
				selectionmode: 'none',
				editmode: 'selectedrow',
				columns: arrayOFcolumns
			});
		 $("#deleteUsADPChange").click(function() {
				value = "ADP";

			$('#alertDeleteDataByDate-modal').modal('show');
			date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
			$("#alertTextDeleteDataByDate").empty();
			$("#alertTextDeleteDataByDate").append("<p> Are you sure you want to Delete all " + value + " record for the date '" + date + "'?</p>");
		});
	}
		else
		if (usjobsValue == 3) {	
			$('#UsNFPAuditGrid').jqxGrid(
				{
					width: '100%',
					source: dataAdapter,
					theme: 'dark',
					autoheight: true,
					editable: true,
					selectionmode: 'none',
					editmode: 'selectedrow',
					columns: arrayOFcolumns
				});
			$("#deleteUsNFP").click(function() {
				
					value = "NON-FARM PAYROLLS";
	
				$('#alertDeleteDataByDate-modal').modal('show');
				date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
				$("#alertTextDeleteDataByDate").empty();
				$("#alertTextDeleteDataByDate").append("<p> Are you sure you want to Delete all " + value + " record for the date '" + date + "'?</p>");
			});
	}
		else
		if (usjobsValue == 4) {
			
			$('#UsUnempRateAuditGrid').jqxGrid(
			{
				width: '100%',
				source: dataAdapter,
				theme: 'dark',
				autoheight: true,
				editable: true,
				selectionmode: 'none',
				editmode: 'selectedrow',
				columns: arrayOFcolumns
			});
		$("#deleteUsUnempRate").click(function() {
				value = "UNEMP. Rate";

			$('#alertDeleteDataByDate-modal').modal('show');
			date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
			$("#alertTextDeleteDataByDate").empty();
			$("#alertTextDeleteDataByDate").append("<p> Are you sure you want to Delete all " + value + " record for the date '" + date + "'?</p>");
		});
	}
		else
		if (usjobsValue == 5) {
			
			$('#UsHouseHoldSurvAuditGrid').jqxGrid(
			{
				width: '100%',
				source: dataAdapter,
				theme: 'dark',
				autoheight: true,
				editable: true,
				selectionmode: 'none',
				editmode: 'selectedrow',
				columns: arrayOFcolumns
			});
		$("#deleteUsHouseHoldSurv").click(function() {
				value = "HOUSEHOLD SURVEY of JOBS";

			$('#alertDeleteDataByDate-modal').modal('show');
			date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
			$("#alertTextDeleteDataByDate").empty();
			$("#alertTextDeleteDataByDate").append("<p> Are you sure you want to Delete all " + value + " record for the date '" + date + "'?</p>");
		});
	}

	$("#load" + usjobsType).click(function() {
		var date = new Date();
		var dataToBeInserted = [];
		var listObject = [];
		var groupId = getGroupId(usjobsValue);

		var rows = $("#dataInputGrid" + usjobsType).jqxGrid('getrows');

		for (i = 0; i < rows.length; i++) {
			for (var k = 0; k < dataInputGridFields.length; k++) {
				var propertyName = dataInputGridFields[k].name;
				listObject.push([String(k + 1), rows[i][propertyName]]);
			}
		}

		for (i = 0; i < listObject.length; i++) {

			var value = eval(listObject[i]);

			var parsedDate = new Date($("#dateInput").jqxDateTimeInput('getDate'));
			parsedDate.setDate(1);
			var formattedDate = ("0" + parsedDate.getDate()).slice(-2) + '-' + ("0" + (parsedDate.getMonth() + 1)).slice(-2) + '-' + parsedDate.getFullYear();


			var value = eval(listObject[i]);
			
			
				dataToBeInserted.push({
					"groupId": groupId,
					"subgroupId": nameSubgroupId.filter(obj => obj.name === usjobsType)[0].subgroupId,
					"value": value[1].replace(',', ''),
					"referDate":  formattedDate 
				});
				

		}

		if ($("#dateInput").jqxDateTimeInput('getDate') < date) {
			var today = $("#dateInput").jqxDateTimeInput('getDate');
			/*	if (today.getDay() == 6 || today.getDay() == 0) {
						$('#alert-modal-weekend').modal('show');
						return;
					}
				*/
			//if (usjobsValue == 1)
				checkifcanUrl = "/usjobs/checkifcansave/" + groupId + "/" + dataToBeInserted[0].subgroupId + "/";

			today = $.jqx.dataFormat.formatdate(today, 'dd-MM-yyyy')
			$.ajax({
				contentType: "application/json",
				url: checkifcanUrl + today,
				dataType: 'json',

				async: true,
				cache: false,
				timeout: 600000,
				success: function(response) {
					if (!response) {
						$.ajax({
							contentType: "application/json",
							url: "/process/isrobottriggered/12/" + groupId,
							dataType: 'text',
							async: true,
							cache: false,
							timeout: 600000,
							success: function(data) {

								if (data == 'true')
									$('#alert-modal-robot').modal('show');
								else {


									$.ajax({
										type: "POST",
										contentType: "application/json",
										url: saveUrl,
										data: JSON.stringify(dataToBeInserted),
										dataType: 'json',
										async: false,
										cache: false,
										timeout: 600000,
										success: function(data) {


											getFilterData(usjobsValue);
											if (usjobsValue == 1) {
												inputData77final.value = "";
												inputData77initial.value = "";
												inputData77surv.value = "";
											}
											else if (usjobsValue == 2) {
												inputData78final.value = "";
												inputData78initial.value = "";
												inputData78surv.value = "";
											}
											else if (usjobsValue == 3)
												{
												inputData79final.value = "";
											    inputData79rev1.value = "";
												inputData79initial.value = "";
												inputData79surv.value = "";
											}
											else if (usjobsValue == 4)
												{
												inputData80index.value = "";
												inputData80surv.value = "";
											}
											else if (usjobsValue == 5)
												{
												inputData81civilianLabForce.value = "";
												inputData81employedLabForce.value = "";
											}
											$("#dataformInput" + usjobsType).css("display", "block");
											$("#dataInputButtons" + usjobsType).css("display", "none");
											$("#dataInputGrid" + usjobsType).css("display", "none");

											$('#dateInputAudit').jqxDateTimeInput('setDate', $("#dateInput").jqxDateTimeInput('getDate'));
											date = $.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')

											filterDate = date;
											delete auditGridSource.localdata;
											auditGridSource.url = auditUrl + date;
											dataAdapter = new $.jqx.dataAdapter(auditGridSource);
											if (usjobsValue == 1)
												$('#UsJobsOpeningAuditGrid').jqxGrid({ source: dataAdapter });
											else if (usjobsValue == 2)
												$('#UsADPChangeAuditGrid').jqxGrid({ source: dataAdapter });
											else if (usjobsValue == 3)
												$('#UsNFPAuditGrid').jqxGrid({ source: dataAdapter });
											else if (usjobsValue == 4)
												$('#UsUnempRateAuditGrid').jqxGrid({ source: dataAdapter });
											else if (usjobsValue == 5)
												$('#UsHouseHoldSurvAuditGrid').jqxGrid({ source: dataAdapter });

											triggerRobots();

										},
										error: function(e) {

											console.log("ERROR : ", e);

										}
									});
								}

							},
							error: function(e) {

								console.log("ERROR : ", e);

							}
						});

					}
					else {
						$('#alert-modal').modal('show');
					}
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
			});
		}
		else {
			$('#alertDate-modal').modal('show');
		}
	});

}

function getSubgroupIdByName(name) {
	const matchingObject = nameSubgroupId.find(item => item.name === name);
	return matchingObject ? matchingObject.subgroupId : null;
}
function getfactorIdByDescription(name) {
	const matchingObject = nameFactorId.find(item => item.name === name);
	return matchingObject ? matchingObject.factor : null;
}
