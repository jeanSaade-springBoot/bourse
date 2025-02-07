var selectedRow = this;
var monthDate = new Date();
monthDate.setMonth(monthDate.getMonth() - 6);
var auditUrl;
var updateUrl;
var saveUrl;
var deleteUrl;
var checkifcanUrl;
var AuditDefaultData = [];
        
const nameSubgroupId =  [
                    { name: 'FED', subgroupId: '1' },
                    { name: 'ECB', subgroupId: '2' },
                    { name: 'BOE', subgroupId: '3' },
                    { name: 'EU5', subgroupId: '1' },
                    { name: 'US5', subgroupId: '2' },
                    ];   
                                  
var USJobsOpeningItem = ["#jqxCheckBoxfinal-77",
						 "#jqxCheckBoxinitial-77",
						 "#jqxCheckBoxsurv-77"];

var InflationSwapusjobsItem = ["#jqxCheckBoxEU5",
							  "#jqxCheckBoxUS5"];
								
var MortageusjobsItem = ["#jqxCheckBoxUsa30"];
var FixingsItem = ["#jqxCheckBoxEuribor_1",
	"#jqxCheckBoxSonia_1",
	"#jqxCheckBoxLibor_1",
	"#jqxCheckBoxEuribor_3",
	"#jqxCheckBoxSonia_3",
	"#jqxCheckBoxLibor_3"];
	
var USJobsOpeningAuditDefaultData = [{
	"final": "",
	"initial": "",
	"surv": "",
}];
var InflationSwapusjobsAuditDefaultData = [{
	"eu5": "",
	"us5": "",
}];
var MortageusjobsAuditDefaultData = [{
	"usa30": "",
}];
var FixingsAuditDefaultData = [{
	"euribor1": "",
	"sonia1": "",
	"libor1": "",
	"euribor3": "",
	"sonia3": "",
	"libor3": "",
}];
var source;

	var inputData77final = document.getElementById("data-input-77final");
		
	var inputData77initial = document.getElementById("data-input-77initial");
	
	var inputData77surv = document.getElementById("data-input-77surv");
	
	var inputDataInflationSwapusjobs = document.getElementById("data-input-InflationSwapusjobs");
	
	
	var inputDataMortageusjobs = document.getElementById("data-input-Mortageusjobs");
	var inputDataFixings = document.getElementById("data-input-Fixings");

var usjobsType;

const usjobsValue = $("#usjobsValue")[0].innerText;
deleteUrl = "/usjobs/deletebyreferdate/" + usjobsValue + "/";
checkifcanUrl = "/usjobs/checkifcansave/" + getGroupId(usjobsValue) + "/";
saveUrl = "/usjobs/save-usjobs-data";
updateUrl = "/usjobs/update-usjobs-data";
	
if (usjobsValue == 1) {
	usjobsType = "USJobsOpening";
	auditUrl = '/usjobs/get-central-banks/'+ getGroupId(usjobsValue) + '/';

}
else if (usjobsValue == 2) {
	usjobsType = "InflationSwapusjobs";
	auditUrl = '/usjobs/get-inflation-swap-usjobs-data/'+ getGroupId(usjobsValue) + '/';
}
else if (usjobsValue == 3) {
	usjobsType = "Mortageusjobs";
	auditUrl = '/usjobs/get-mortage-usjobs/';
} else if (usjobsValue == 4) {
	usjobsType = "Fixings";
	auditUrl = '/usjobs/get-fixings-data/';
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
		$("#USJobsOpening-btn").addClass('active');

	} else
		if (usjobsValue == 2) {
			$("#InflationSwapusjobs-btn").addClass('active');
		} else
			if (usjobsValue == 3) {
				$("#EzMonetary-btn").addClass('active');
			} else
				if (usjobsValue == 4) {
					$("#Fixings_spreads-btn").addClass('active');
				}

	renderSubGroup(usjobsValue);
if(usjobsValue==1)
	{ 
	$("#dateInput").jqxDateTimeInput({theme: 'dark',  views:["year","decade"]
   , width: "110px"
   , height: "25px"
   , formatString : "MMM-yy" });
	$("#dateInputAudit").jqxDateTimeInput({ theme: 'dark',  views:["year","decade"]
   , width: "110px"
   , height: "25px"
   , formatString : "MMM-yy" });
   	  
	$("#dateInputFrom").jqxDateTimeInput({theme: 'dark',  views:["year","decade"]
   , width: "110px"
   , height: "25px"
   , formatString :"MMM-yy" });
	$("#dateInputFrom").jqxDateTimeInput('setDate', monthDate);
	$("#dateInputTo").jqxDateTimeInput({ theme: 'dark',  views:["year","decade"]
   , width: "110px"
   , height: "25px"
   , formatString : "MMM-yy" });
	
	}
	else{
	$("#dateInput").jqxDateTimeInput({ theme: 'dark', width: '195px', height: '25px' });
	$("#dateInputAudit").jqxDateTimeInput({ theme: 'dark', width: '195px', height: '25px' });
	$("#dateInputFrom").jqxDateTimeInput({ theme: 'dark', width: '200px', height: '25px' });
	$("#dateInputFrom").jqxDateTimeInput('setDate', monthDate);
	$("#dateInputTo").jqxDateTimeInput({ theme: 'dark', width: '200px', height: '25px' });
	
	}
	$("#filter").jqxButton({ theme: 'dark', height: 30, width: 74 });
	$("#Clearfilter").jqxButton({ theme: 'dark', height: 30, width: 74 });

	source =
	{
		datatype: "json",
		datafields: [
			{ name: 'refer_date', type: 'date' },
			{ name: 'USA30', type: 'float' },
			
			{ name: 'EURIBOR_1', type: 'float' },
			{ name: 'SONIA_1', type: 'float' },
			{ name: 'LIBOR_1', type: 'float' },
			{ name: 'EURIBOR_3', type: 'float' },
			{ name: 'SONIA_3', type: 'float' },
			{ name: 'LIBOR_3', type: 'float' },
			
			{ name: 'BOE-18.48', type: 'float' },
			{ name: 'BOE-17.48', type: 'float' },
			{ name: 'ECB-18.48', type: 'float' },
			{ name: 'ECB-17.48', type: 'float' },
			{ name: 'FED-18.48', type: 'float' },
			{ name: 'FED-17.48', type: 'float' },
			
			{ name: 'US5' , type: 'float' },
			{ name: 'EU5', type: 'float' },
			
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
		for (i = 0; i < USJobsOpeningItem.length; i++) {
			$(USJobsOpeningItem[i]).jqxCheckBox({ checked: false });
		}
	}
	else if (usjobsValue == 2) {
		for (i = 0; i < InflationSwapusjobsItem.length; i++) {
			$(InflationSwapusjobsItem[i]).jqxCheckBox({ checked: false });
		}
	}
	else if (usjobsValue == 3) {
		for (i = 0; i < MortageusjobsItem.length; i++) {
			$(MortageusjobsItem[i]).jqxCheckBox({ checked: false });
		}
	} else if (usjobsValue == 4) {
		for (i = 0; i < FixingsItem.length; i++) {
			$(FixingsItem[i]).jqxCheckBox({ checked: false });
		}
	}
});
function Edit(row, event) {

	isedit = true;
	var data = $('#' + usjobsType + 'AuditGrid').jqxGrid('getrowdata', row);
	if (usjobsValue == 1) {
		oldDataJson = {
			"final": data.final,
			"initial": data.initial,
			"surv": data.surv,
			};
	} else if (usjobsValue == 2) {
		oldDataJson = {
			"eu5": data.eu5,
			"us5": data.us5,
		};
	} else if (usjobsValue == 3) {
		oldDataJson = {
			"usa30": data.usa30
		};
	}
		else if (usjobsValue == 4) {
		oldDataJson = {
			"euribor1": data.euribor1,
			"sonia1": data.sonia1,
			"libor1": data.libor1,
			"euribor3": data.euribor3,
			"sonia3": data.sonia3,
			"libor3": data.libor3
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
		if (usjobsValue == 1) {
			if (($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].fed != null) &&
				($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].ecb != null) &&
				($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].boe != null)) {
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
		else if (usjobsValue == 2) {
			if (($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].eu5 != null) &&
				($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].us5 != null)) {
				$('#' + usjobsType + 'AuditGrid').jqxGrid('beginrowedit', row);
				$("#edit" + row).css("display", "none");
				$("#actionButtons" + row).css("display", "contents");
				if (event) {
					if (event.preventDefault) {
						event.preventDefault();
					}
				}
			}
		} else if (usjobsValue == 3) {
			if (($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].usa30 != null)) {
				$('#' + usjobsType + 'AuditGrid').jqxGrid('beginrowedit', row);
				$("#edit" + row).css("display", "none");
				$("#actionButtons" + row).css("display", "contents");
				if (event) {
					if (event.preventDefault) {
						event.preventDefault();
					}
				}
			}
		}else if (usjobsValue == 4) {
			   if (($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].euribor1 != null)
				&& ($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].sonia1 != null)
				&& ($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].libor1 != null)
				&& ($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].euribor3 != null)
				&& ($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].sonia3 != null)
				&& ($('#' + usjobsType + 'AuditGrid').jqxGrid('getrows')[0].libor3 != null)) {
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
	selectedRow.editrow = -1;
	$('#' + usjobsType + 'AuditGrid').jqxGrid('endrowedit', row);
	var updatedData = $('#' + usjobsType + 'AuditGrid').jqxGrid('getrowdata', row);
	if (usjobsValue == 1) {
		updatedDataJson = {
			"final": data.final,
			"initial": data.initial,
			"surv": data.surv,
		};
		keys = Object.keys(updatedDataJson);

		for (var i = 0; i < keys.length; i++) {
	        var field = keys[i];
	        if (updatedDataJson[field] !== oldDataJson[field]) {
				
	            dataToBeUpdated.push({
				   "subgroupId":getSubgroupIdByName(field.toUpperCase()),
    			   "factor":getfactorIdByDescription(updatedDataJson.factor),
    			   "groupId":getGroupId(usjobsValue) ,
    			   "value":updatedDataJson[field].replace(',', ''),
    			   "referdate":date
	            });
	        }
	    }
	} else if (usjobsValue == 2) {
		updatedDataJson = {
			"eu5": updatedData.eu5,
			"us5": updatedData.us5,
		};
		keys = Object.keys(updatedDataJson);

		for (var i = 0; i < keys.length; i++) {
	        var field = keys[i];
	        if (updatedDataJson[field] !== oldDataJson[field]) {
				
	            dataToBeUpdated.push({
				   "subgroupId":getSubgroupIdByName(field.toUpperCase()),
    			   "groupId":getGroupId(usjobsValue) ,
    			   "value":updatedDataJson[field].replace(',', ''),
    			   "referdate":date
	            });
	        }
	    }
	} else if (usjobsValue == 3) {
		updatedDataJson = {
			"usa30": updatedData.usa30
		};
		keys = ["usa30"];

		dataToBeUpdated.push({
			"subgroupId": "1",
			"groupId": getGroupId(usjobsValue),
			"value": updatedData.usa30.replaceAll(',', ''),
			"referdate": date
		});
		
	}
	else if (usjobsValue == 4) {
		updatedDataJson = {
			"euribor1": updatedData.euribor1,
			"sonia1": updatedData.sonia1,
			"libor1": updatedData.libor1,
			"euribor3": updatedData.euribor3,
			"sonia3": updatedData.sonia3,
			"libor3": updatedData.libor3,
		};
		keys = ["euribor1", "sonia1", "libor1", "euribor3", "sonia3", "libor3"];

		dataToBeUpdated.push({
			"subgroupId": "1",
			"groupId": getGroupId(usjobsValue),
			"value": updatedData.euribor1.replaceAll(',', ''),
			"referdate": date
		});
		dataToBeUpdated.push({
			"subgroupId": "2",
			"groupId": getGroupId(usjobsValue),
			"value": updatedData.sonia1.replaceAll(',', ''),
			"referdate": date
		});
		dataToBeUpdated.push({
			"subgroupId": "3",
			"groupId": getGroupId(usjobsValue),
			"value": updatedData.libor1.replaceAll(',', ''),
			"referdate": date
		});
		dataToBeUpdated.push({
			"subgroupId": "4",
			"groupId": getGroupId(usjobsValue),
			"value": updatedData.euribor3.replaceAll(',', ''),
			"referdate": date
		});
		dataToBeUpdated.push({
			"subgroupId": "5",
			"groupId": getGroupId(usjobsValue),
			"value": updatedData.sonia3.replaceAll(',', ''),
			"referdate": date
		});
		dataToBeUpdated.push({
			"subgroupId": "6",
			"groupId": getGroupId(usjobsValue),
			"value": updatedData.libor3.replaceAll(',', ''),
			"referdate": date
		});
	} 
	var updatedJson = [];
	for (let i = 0; i < keys.length; i++) {
		if (updatedDataJson[keys[i]] != oldDataJson[keys[i]])
			updatedJson.push({
				"assetId": 9,
				"groupId": getGroupId(usjobsValue),
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

	latestUrl = '/usjobs/getlatest/' +  getGroupId(usjobsValue);
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
		items = USJobsOpeningItem;
	} else if (usjobsValue == 2) {
		items = InflationSwapusjobsItem;
	} else if (usjobsValue == 3) {
		items = MortageusjobsItem;
	} else if (usjobsValue == 4) {
		items = FixingsItem;
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

	if (allItems != 0) {
		json = {
			"selectedSearchDTOlst": SelectedSearchDTO,
			"fromDate": $.jqx.dataFormat.formatdate($("#dateInputFrom").jqxDateTimeInput('getDate'), 'yyyy-MM-dd'),
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
							data.columns[i].cellsformat = 'dd-MMM-yyyy';
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
		url: "/robot/callrobotsasync/9/" + getGroupId(usjobsValue),
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
		items = USJobsOpeningItem;
		
	var defaultData = AuditDefaultData;
	var fields = [
			{ name: 'id', type: 'string' },
			{ name: 'final', type: 'string' },
			{ name: 'initial', type: 'string' },
			{ name: 'SURV', type: 'string' },
		];
		var totalFields = fields.length-1;
		var widthPercentage = (100 - 20)/totalFields;
		var arrayOFcolumns = [
			{
				text: '', editable: false, datafield: 'Edit', width: '20%', cellsrenderer: function(row) {
					return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit" + row + "\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons" + row + "\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
				}
			},
			  { text: '',editable:false,hidden:true,  datafield: 'id', width: widthPercentage + '%'},
	          { text: '',editable:false,  datafield: 'factor', width: widthPercentage + '%'},
	          { text: 'FINAL', datafield: 'final', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			  { text: 'INITIAL',  datafield: 'initial', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
	       	  { text: 'SURV',  datafield: 'surv', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
 ];

	Types=["77final","77initial","77surv"];
	inputDataTypes=[inputData77final,inputData77initial,inputData77surv];
	
	for (var i = 0; i < Types.length; i++) {
	    	var Type = Types[i];
	   		inputDataType = inputDataTypes[i];
	    
			items = USJobsOpeningItem;
			var dataInputGridFields = [
				(Type.includes("usjobs"))?{ name: 'usjobs', type: 'string' }:(Type.includes("moves"))?{ name: 'moves', type: 'string'  }:null,
			];
			var totalFields = dataInputGridFields.length;
			var widthPercentage = 100/totalFields;
	
			var dataInputGridColumns = [
				(Type.includes("usjobs"))?{text: 'usjobs', datafield: 'usjobs', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
				}:(Type.includes("moves"))?{text: 'moves', datafield: 'moves', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
				}:null,
			];
			
		initiate(Type, inputDataType, items, dataInputGridFields, dataInputGridColumns, defaultData, fields, arrayOFcolumns);
	  
	}	
}
	else
		if (usjobsValue == 2) {
			inputDataType = inputDataInflationSwapusjobs;
			items = InflationSwapusjobsItem;
		    
			var dataInputGridFields = [
						{ name: 'eu5', type: 'string' },
						{ name: 'us5', type: 'string' },];
		
			var dataInputGridColumns = [
					{ text: '5y5y EU', datafield: 'eu5', width: '50%' },
					{ text: '5y5y USA', datafield: 'us5', width: '50%' },
					];
			var defaultData = InflationSwapusjobsAuditDefaultData;	
			
			var fields = [
				{ name: 'id', type: 'string' },
				{ name: 'eu5', type: 'string' },
				{ name: 'us5', type: 'string' }
			];
			 	
			var totalFields = fields.length-1;
			var widthPercentage = (100 - 20)/totalFields;
			var arrayOFcolumns = [
				{
					text: '', editable: false, datafield: 'Edit', width: '20%', cellsrenderer: function(row) {
						return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit" + row + "\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons" + row + "\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
					}
				},
				  { text: '',editable:false,hidden:true,  datafield: 'id', width: widthPercentage + '%'},
		          { text: '5y5y EU', datafield: 'eu5', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
				  { text: '5y5y USA',  datafield: 'us5', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			 ];
			initiate(usjobsType, inputDataType, items, dataInputGridFields, dataInputGridColumns, defaultData, fields, arrayOFcolumns);

		} else
			if (usjobsValue == 3) {
				inputDataType = inputDataMortageusjobs;
				items = MortageusjobsItem;
				var dataInputGridFields = [
					{ name: 'usa30', type: 'string' }
				];
				var dataInputGridColumns = [
					{ text: '30yr USA Mortgage', datafield: 'usa30', width: '100%' }
				];
				var defaultData = MortageusjobsAuditDefaultData;
				var fields = [
					{ name: 'usa30', type: 'string' },
				];
				var arrayOFcolumns = [
					{
						text: '', editable: false, datafield: 'Edit', width: '24%', cellsrenderer: function(row) {
							return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit" + row + "\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons" + row + "\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
						}
					},
					{ text: '30yr USA Mortgage', datafield: 'usa30', width: '76%', cellsalign: 'center', align: 'center' },
				];
	initiate(usjobsType, inputDataType, items, dataInputGridFields, dataInputGridColumns, defaultData, fields, arrayOFcolumns);

			} else
				if (usjobsValue == 4) {
					inputDataType = inputDataFixings;
					items = FixingsItem;
					
					var dataInputGridFields = [
						{ name: 'euribor1', type: 'string' },
						{ name: 'euribor3', type: 'string' },
						{ name: 'sonia1', type: 'string' },
						{ name: 'sonia3', type: 'string' },
						{ name: 'libor1', type: 'string' },
						{ name: 'libor3', type: 'string' }];
						
					var dataInputGridColumns = [
					{ text: 'Euribor 1 month', datafield: 'euribor1', width: '16.6666666667%' },
					{ text: 'Euribor 3 months', datafield: 'euribor3', width: '16.6666666667%' },
					{ text: '$Libor 3 months', datafield: 'libor3', width: '16.6666666667%' },
					{ text: '$Libor 1 month', datafield: 'libor1', width: '16.6666666667%' },
					{ text: 'Sonia 1 month', datafield: 'sonia1', width: '16.6666666667%' },
					{ text: 'Sonia 3 months', datafield: 'sonia3', width: '16.6666666667%' },
					];

					var defaultData = FixingsAuditDefaultData;
					var fields = [
						{ name: 'euribor1', type: 'string' },
						{ name: 'sonia1', type: 'string' },
						{ name: 'libor1', type: 'string' },
						{ name: 'euribor3', type: 'string' },
						{ name: 'sonia3', type: 'string' },
						{ name: 'libor3', type: 'string' },
					];
					var arrayOFcolumns = [
						{
						text: '', editable: false, datafield: 'Edit', width: '24%', cellsrenderer: function(row) {
							return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit" + row + "\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons" + row + "\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
						}
						},
						{ text: 'Euribor 1 month', datafield: 'euribor1', width: '12.6666666667%', cellsalign: 'center', align: 'center' },
						{ text: 'Euribor 3 months', datafield: 'euribor3', width: '12.6666666667%', cellsalign: 'center', align: 'center' },
						{ text: '$Libor 1 month', datafield: 'libor1', width: '12.6666666667%', cellsalign: 'center', align: 'center' },
						{ text: '$Libor 3 months', datafield: 'libor3', width: '12.6666666667%', cellsalign: 'center', align: 'center' },
						{ text: 'Sonia 1 month', datafield: 'sonia1', width: '12.6666666667%', cellsalign: 'center', align: 'center' },
						{ text: 'Sonia 3 months', datafield: 'sonia3', width: '12.6666666667%', cellsalign: 'center', align: 'center' },
						];
	initiate(usjobsType, inputDataType, items, dataInputGridFields, dataInputGridColumns, defaultData, fields, arrayOFcolumns);

				}

}
function saveFilterHistory(usjobsValue, checkedItem) {


	var filterHistory = {
		"filterHistory": checkedItem.toString(),
		"screenName": "DATABASE_INPUT_SCREEN_usjobs-" + getGroupId(usjobsValue)
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
		url: "/bourse/getdataentryfilterhistory/" + "DATABASE_INPUT_SCREEN_usjobs-" +  getGroupId(usjobsValue),
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
					for (i = 0; i < USJobsOpeningItem.length; i++) {
						$(USJobsOpeningItem[i]).jqxCheckBox({ checked: true });
					}
				else if (usjobsValue == 2)
					for (i = 0; i < InflationSwapusjobsItem.length; i++) {
						$(InflationSwapusjobsItem[i]).jqxCheckBox({ checked: true });
					} else if (usjobsValue == 3)
					for (i = 0; i < MortageusjobsItem.length; i++) {
						$(MortageusjobsItem[i]).jqxCheckBox({ checked: true });
					}else if (usjobsValue == 4)
					for (i = 0; i < FixingsItem.length; i++) {
						$(FixingsItem[i]).jqxCheckBox({ checked: true });
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
			groupId = '48'
			break;
		case '2':
			groupId = '49'
			break;
		case '3':
			groupId = '50'
			break;
		case '4':
			groupId = '51'
			break;
	}
	return groupId;
}

function initiate(usjobsType, inputDataType, item, dataInputGridFields, dataInputGridColumns, defaultData, fields, arrayOFcolumns) {
	var jsonObject = null;
	if(usjobsValue==1)
	{	$("#deleteUSJobsOpening").jqxButton({ theme: 'dark', width: 90, height: 30, template: "danger" });
	    $("#cancel" + usjobsType).jqxButton({ theme: 'dark', height: 30, width: 74 ,imgSrc: "/img/icon/false.svg" });
		$("#load" + usjobsType).jqxButton({ theme: 'dark', height: 30, width: 74 , imgSrc: "/img/icon/true.svg"});
 	}
	else
	{
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
			if (usjobsValue == 1 || usjobsValue == 2)
				{
				var jsonObject = {};
				dataInputGridFields.forEach(function(field, index) {
				jsonObject[field.name] = rowData[index];
				});
			}
			else if (usjobsValue == 3)
				jsonObject = {
					"usa30": rowData[0],
				};
			else if (usjobsValue == 4)
				jsonObject = {
					"euribor1": rowData[0],
					"sonia1": rowData[2],
					"libor1": rowData[4],
					"euribor3": rowData[1],
					"sonia3": rowData[3],
					"libor3": rowData[5],
				};
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
	if(usjobsValue==1){
		$('#USJobsOpeningAuditGrid').jqxGrid(
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
	$("#deleteUSJobsOpening").click(function() {
		 if (usjobsValue == 1)
			value = "Central Banks";
			
		$('#alertDeleteDataByDate-modal').modal('show');
		date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
		$("#alertTextDeleteDataByDate").empty();
		$("#alertTextDeleteDataByDate").append("<p> Are you sure you want to Delete all " + value + " record for the date '" + date + "'?</p>");
	});
	}else 
		if(usjobsValue==2){
		$('#InflationSwapusjobsAuditGrid').jqxGrid(
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
	$("#deleteInflationSwapusjobs").click(function() {
		 if (usjobsValue == 2)
			value = "Inflation Swap usjobs";
			
		$('#alertDeleteDataByDate-modal').modal('show');
		date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
		$("#alertTextDeleteDataByDate").empty();
		$("#alertTextDeleteDataByDate").append("<p> Are you sure you want to Delete all " + value + " record for the date '" + date + "'?</p>");
	});
	}
	else{
		$('#' + usjobsType + 'AuditGrid').jqxGrid(
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
	$("#delete" + usjobsType).click(function() {
		 if (usjobsValue == 1)
			value = "CENTRAL BANKS";
		else if (usjobsValue == 2)
			value = "INFLATION SWAP usjobs";
		else if (usjobsValue == 3)
			value = "MORTAGE usjobs";
		else if (usjobsValue == 4)
			value = "FIXINGS";
				
		$('#alertDeleteDataByDate-modal').modal('show');
		date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
		$("#alertTextDeleteDataByDate").empty();
		$("#alertTextDeleteDataByDate").append("<p> Are you sure you want to Delete all " + value + " record for the date '" + date + "'?</p>");
	});
	}
	
	$("#load" + usjobsType).click(function() {
		var date = new Date();
		var dataToBeInserted = [];
		var firstObject = ["1"];
		var secondObject = ["2"];
		var thirdObject = ["3"];
		var fourthObject = ["4"];
		var fifthObject = ["5"];
		var sixObject = ["6"];
		var listObject = [];
		var groupId = null;

		var rows = $("#dataInputGrid" + usjobsType).jqxGrid('getrows');

		for (i = 0; i < rows.length; i++) {
			if (usjobsValue == 1 || usjobsValue == 2) {
				for (var k = 0; k < dataInputGridFields.length; k++) {
				var propertyName = dataInputGridFields[k].name;

				listObject.push([String(k + 1), rows[i][propertyName]]);

			   }
			}  else
					if (usjobsValue == 3) {
						firstObject.push(rows[i].usa30);
					}else
					if (usjobsValue == 4) {
						firstObject.push(rows[i].euribor1);
						secondObject.push(rows[i].sonia1);
						thirdObject.push(rows[i].libor1);
						
						fourthObject.push(rows[i].euribor3);
						fifthObject.push(rows[i].sonia3);
						sixObject.push(rows[i].libor3);
					}
		}
		if (usjobsValue == 1) {
			groupId = 48;
		} else if (usjobsValue == 2) {
			groupId = 49;
		}
		else if (usjobsValue == 3) {
			listObject = ["firstObject"];
			groupId = 50;
		}
		else if (usjobsValue == 4) {
			listObject = ["firstObject", "secondObject", "thirdObject",'fourthObject','fifthObject','sixObject' ];
			groupId = 51;
		}
		for (i = 0; i < listObject.length; i++) {

			var value = eval(listObject[i]);
			if (usjobsValue == 1) {
				var parsedDate = new Date($("#dateInput").jqxDateTimeInput('getDate'));
				parsedDate.setDate(1);
				var formattedDate = ("0" + parsedDate.getDate()).slice(-2) + '-' + ("0" + (parsedDate.getMonth() + 1)).slice(-2) + '-' + parsedDate.getFullYear();
		
		
						var value = eval(listObject[i]);
						
						subgroupId= extractNumber(usjobsType);
						
						dataToBeInserted.push({
							"groupId": getGroupId(usjobsValue) ,
							"subgroupId": (subgroupId==4)?1:(subgroupId==5)?2:subgroupId,
							"value": value[1].replace(',', ''),
							"referDate": (usjobsValue == 1)?formattedDate: $.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
						});
			}
			else
			dataToBeInserted.push({
				"groupId": groupId+ '',
				"subgroupId": value[0],
				"value": value[1].replace(',', ''),
				"referDate": $.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
			});
		}

		if ($("#dateInput").jqxDateTimeInput('getDate') < date) {
			var today = $("#dateInput").jqxDateTimeInput('getDate');
			if(usjobsValue!=1)
				if (today.getDay() == 6 || today.getDay() == 0) {
					$('#alert-modal-weekend').modal('show');
					return;
				}
				
	if(usjobsValue==1)
		checkifcanUrl = "/usjobs/checkifcansave/" + getGroupId(usjobsValue)+"/"+dataToBeInserted[0].subgroupId+"/"+dataToBeInserted[0].factorId+"/";
	
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
							url: "/process/isrobottriggered/9/" + groupId,
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
											if (usjobsValue == 1)
												{
													inputData77final.value = "";
													inputData77initial.value = "";
													inputData77surv.value = "";
													inputData3moves.value = "";
												}
											else if (usjobsValue == 2)
												{
													inputDataInflationSwapusjobs.value = "";
												}
											else if (usjobsValue == 3)
													inputDataMortageusjobs.value = "";
											else if (usjobsValue == 4)
													inputDataFixings.value = "";
												
											$("#dataformInput" + usjobsType).css("display", "block");
											$("#dataInputButtons" + usjobsType).css("display", "none");
											$("#dataInputGrid" + usjobsType).css("display", "none");

											$('#dateInputAudit').jqxDateTimeInput('setDate', $("#dateInput").jqxDateTimeInput('getDate'));
											date = $.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')

											filterDate = date;
											delete auditGridSource.localdata;
											auditGridSource.url = auditUrl + date;
											dataAdapter = new $.jqx.dataAdapter(auditGridSource);
											if(usjobsValue==1)
												$('#USJobsOpeningAuditGrid').jqxGrid({ source: dataAdapter });
											else
												$('#' + usjobsType + 'AuditGrid').jqxGrid({ source: dataAdapter });

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
function extractNumber(type) {
    // Match the numeric part of the string using regular expression
    const numericPart = type.match(/\d+/);
    return numericPart ? numericPart[0] : null;
}

	function getSubgroupIdByName(name) {
    const matchingObject = nameSubgroupId.find(item => item.name === name);
    return matchingObject ? matchingObject.subgroupId : null;
}
 function getfactorIdByDescription(name) {
    const matchingObject = nameFactorId.find(item => item.name === name);
    return matchingObject ? matchingObject.factor : null;
}
