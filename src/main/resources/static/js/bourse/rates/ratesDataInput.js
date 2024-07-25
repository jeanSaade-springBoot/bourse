var selectedRow = this;
var monthDate = new Date();
monthDate.setMonth(monthDate.getMonth() - 6);
var auditUrl;
var updateUrl;
var saveUrl;
var deleteUrl;
var checkifcanUrl;
var AuditDefaultData = [];
const nameFactorId =  [
	                    { name: 'RATES', factor: '17'},
	                    { name: 'MOVES', factor: '18'},
	                ];
	                
const nameSubgroupId =  [
                    { name: 'FED', subgroupId: '1' },
                    { name: 'ECB', subgroupId: '2' },
                    { name: 'BOE', subgroupId: '3' },
                    { name: 'EU5', subgroupId: '1' },
                    { name: 'US5', subgroupId: '2' },
                    ];   
                                  
var CentralBanksItem = ["#jqxCheckBoxFed-17",
						"#jqxCheckBoxFed-18",
						"#jqxCheckBoxEcb-17",
						"#jqxCheckBoxEcb-18",
						"#jqxCheckBoxBoe-17",
						"#jqxCheckBoxBoe-18"];

var InflationSwapRatesItem = ["#jqxCheckBoxEU5",
							  "#jqxCheckBoxUS5"];
								
var MortageRatesItem = ["#jqxCheckBoxUsa30"];
var FixingsItem = ["#jqxCheckBoxEuribor_1",
	"#jqxCheckBoxSonia_1",
	"#jqxCheckBoxLibor_1",
	"#jqxCheckBoxEuribor_3",
	"#jqxCheckBoxSonia_3",
	"#jqxCheckBoxLibor_3",];
var CentralBanksAuditDefaultData = [{
	"fed": "",
	"ecb": "",
	"boe": "",
}];
var InflationSwapRatesAuditDefaultData = [{
	"eu5": "",
	"us5": "",
}];
var MortageRatesAuditDefaultData = [{
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

	var inputData1rates = document.getElementById("data-input-1rates");
	var inputData1moves = document.getElementById("data-input-1moves");
		
	var inputData2rates = document.getElementById("data-input-2rates");
	var inputData2moves = document.getElementById("data-input-2moves");
	
	var inputData3rates = document.getElementById("data-input-3rates");
	var inputData3moves = document.getElementById("data-input-3moves");
	
	var inputDataInflationSwapRates = document.getElementById("data-input-InflationSwapRates");
	
	
	var inputDataMortageRates = document.getElementById("data-input-MortageRates");
	var inputDataFixings = document.getElementById("data-input-Fixings");

var ratesType;

const ratesValue = $("#ratesValue")[0].innerText;
deleteUrl = "/rates/deletebyreferdate/" + ratesValue + "/";
checkifcanUrl = "/rates/checkifcansave/" + getGroupId(ratesValue) + "/";
saveUrl = "/rates/save-rates-data";
updateUrl = "/rates/update-rates-data";
	
if (ratesValue == 1) {
	ratesType = "CentralBanks";
	auditUrl = '/rates/get-central-banks/'+ getGroupId(ratesValue) + '/';

}
else if (ratesValue == 2) {
	ratesType = "InflationSwapRates";
	auditUrl = '/rates/get-inflation-swap-rates-data/'+ getGroupId(ratesValue) + '/';
}
else if (ratesValue == 3) {
	ratesType = "MortageRates";
	auditUrl = '/rates/get-mortage-rates/';
} else if (ratesValue == 4) {
	ratesType = "Fixings";
	auditUrl = '/rates/get-fixings-data/';
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

	if (ratesValue == 1) {
		$("#CentralBanks-btn").addClass('active');

	} else
		if (ratesValue == 2) {
			$("#InflationSwapRates-btn").addClass('active');
		} else
			if (ratesValue == 3) {
				$("#EzMonetary-btn").addClass('active');
			} else
				if (ratesValue == 4) {
					$("#Fixings_spreads-btn").addClass('active');
				}

	renderSubGroup(ratesValue);
if(ratesValue==1)
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
	getFilterHistory(ratesValue);

	$("#grid").jqxGrid('showloadelement');

	getFilterData(ratesValue);

	$('#dateInputAudit').on('change', function(event) {
		date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
		filterDate = date;

		delete auditGridSource.localdata;
		auditGridSource.url = auditUrl + date;
		dataAdapter = new $.jqx.dataAdapter(auditGridSource);
		$('#' + ratesType + 'AuditGrid').jqxGrid({ source: dataAdapter });

	});

	$("#filter").click(function() {

		getFilterData(ratesValue);
	});
});// end document ready
$("#Clearfilter").click(function() {
	if (ratesValue == 1) {
		for (i = 0; i < CentralBanksItem.length; i++) {
			$(CentralBanksItem[i]).jqxCheckBox({ checked: false });
		}
	}
	else if (ratesValue == 2) {
		for (i = 0; i < InflationSwapRatesItem.length; i++) {
			$(InflationSwapRatesItem[i]).jqxCheckBox({ checked: false });
		}
	}
	else if (ratesValue == 3) {
		for (i = 0; i < MortageRatesItem.length; i++) {
			$(MortageRatesItem[i]).jqxCheckBox({ checked: false });
		}
	} else if (ratesValue == 4) {
		for (i = 0; i < FixingsItem.length; i++) {
			$(FixingsItem[i]).jqxCheckBox({ checked: false });
		}
	}
});
function Edit(row, event) {

	isedit = true;
	var data = $('#' + ratesType + 'AuditGrid').jqxGrid('getrowdata', row);
	if (ratesValue == 1) {
		oldDataJson = {
			"fed": data.fed,
			"ecb": data.ecb,
			"boe": data.boe,
			"factor": data.factor,
			};
	} else if (ratesValue == 2) {
		oldDataJson = {
			"eu5": data.eu5,
			"us5": data.us5,
		};
	} else if (ratesValue == 3) {
		oldDataJson = {
			"usa30": data.usa30
		};
	}
		else if (ratesValue == 4) {
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
		$('#' + ratesType + 'AuditGrid').jqxGrid({ source: dataAdapter });
	}
	setTimeout(function() {
		if (ratesValue == 1) {
			if (($('#' + ratesType + 'AuditGrid').jqxGrid('getrows')[0].fed != null) &&
				($('#' + ratesType + 'AuditGrid').jqxGrid('getrows')[0].ecb != null) &&
				($('#' + ratesType + 'AuditGrid').jqxGrid('getrows')[0].boe != null)) {
				$('#' + ratesType + 'AuditGrid').jqxGrid('beginrowedit', row);
				$("#edit" + row).css("display", "none");
				$("#actionButtons" + row).css("display", "contents");
				if (event) {
					if (event.preventDefault) {
						event.preventDefault();
					}
				}
			}
		}
		else if (ratesValue == 2) {
			if (($('#' + ratesType + 'AuditGrid').jqxGrid('getrows')[0].eu5 != null) &&
				($('#' + ratesType + 'AuditGrid').jqxGrid('getrows')[0].us5 != null)) {
				$('#' + ratesType + 'AuditGrid').jqxGrid('beginrowedit', row);
				$("#edit" + row).css("display", "none");
				$("#actionButtons" + row).css("display", "contents");
				if (event) {
					if (event.preventDefault) {
						event.preventDefault();
					}
				}
			}
		} else if (ratesValue == 3) {
			if (($('#' + ratesType + 'AuditGrid').jqxGrid('getrows')[0].usa30 != null)) {
				$('#' + ratesType + 'AuditGrid').jqxGrid('beginrowedit', row);
				$("#edit" + row).css("display", "none");
				$("#actionButtons" + row).css("display", "contents");
				if (event) {
					if (event.preventDefault) {
						event.preventDefault();
					}
				}
			}
		}else if (ratesValue == 4) {
			   if (($('#' + ratesType + 'AuditGrid').jqxGrid('getrows')[0].euribor1 != null)
				&& ($('#' + ratesType + 'AuditGrid').jqxGrid('getrows')[0].sonia1 != null)
				&& ($('#' + ratesType + 'AuditGrid').jqxGrid('getrows')[0].libor1 != null)
				&& ($('#' + ratesType + 'AuditGrid').jqxGrid('getrows')[0].euribor3 != null)
				&& ($('#' + ratesType + 'AuditGrid').jqxGrid('getrows')[0].sonia3 != null)
				&& ($('#' + ratesType + 'AuditGrid').jqxGrid('getrows')[0].libor3 != null)) {
					$('#' + ratesType + 'AuditGrid').jqxGrid('beginrowedit', row);
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
	var updatedData = $('#' + ratesType + 'AuditGrid').jqxGrid('getrowdata', row);
	selectedRow.editrow = -1;
	$('#' + ratesType + 'AuditGrid').jqxGrid('endrowedit', row);
	var updatedData = $('#' + ratesType + 'AuditGrid').jqxGrid('getrowdata', row);
	if (ratesValue == 1) {
		updatedDataJson = {
			"fed": updatedData.fed,
			"ecb": updatedData.ecb,
			"boe": updatedData.boe,
			"factor": updatedData.factor,
		};
		keys = Object.keys(updatedDataJson);

		for (var i = 0; i < keys.length; i++) {
	        var field = keys[i];
	        if (updatedDataJson[field] !== oldDataJson[field]) {
				
	            dataToBeUpdated.push({
				   "subgroupId":getSubgroupIdByName(field.toUpperCase()),
    			   "factor":getfactorIdByDescription(updatedDataJson.factor),
    			   "groupId":getGroupId(ratesValue) ,
    			   "value":updatedDataJson[field].replace(',', ''),
    			   "referdate":date
	            });
	        }
	    }
	} else if (ratesValue == 2) {
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
    			   "groupId":getGroupId(ratesValue) ,
    			   "value":updatedDataJson[field].replace(',', ''),
    			   "referdate":date
	            });
	        }
	    }
	} else if (ratesValue == 3) {
		updatedDataJson = {
			"usa30": updatedData.usa30
		};
		keys = ["usa30"];

		dataToBeUpdated.push({
			"subgroupId": "1",
			"groupId": getGroupId(ratesValue),
			"value": updatedData.usa30.replaceAll(',', ''),
			"referdate": date
		});
		
	}
	else if (ratesValue == 4) {
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
			"groupId": getGroupId(ratesValue),
			"value": updatedData.euribor1.replaceAll(',', ''),
			"referdate": date
		});
		dataToBeUpdated.push({
			"subgroupId": "2",
			"groupId": getGroupId(ratesValue),
			"value": updatedData.sonia1.replaceAll(',', ''),
			"referdate": date
		});
		dataToBeUpdated.push({
			"subgroupId": "3",
			"groupId": getGroupId(ratesValue),
			"value": updatedData.libor1.replaceAll(',', ''),
			"referdate": date
		});
		dataToBeUpdated.push({
			"subgroupId": "4",
			"groupId": getGroupId(ratesValue),
			"value": updatedData.euribor3.replaceAll(',', ''),
			"referdate": date
		});
		dataToBeUpdated.push({
			"subgroupId": "5",
			"groupId": getGroupId(ratesValue),
			"value": updatedData.sonia3.replaceAll(',', ''),
			"referdate": date
		});
		dataToBeUpdated.push({
			"subgroupId": "6",
			"groupId": getGroupId(ratesValue),
			"value": updatedData.libor3.replaceAll(',', ''),
			"referdate": date
		});
	} 
	var updatedJson = [];
	for (let i = 0; i < keys.length; i++) {
		if (updatedDataJson[keys[i]] != oldDataJson[keys[i]])
			updatedJson.push({
				"assetId": 9,
				"groupId": getGroupId(ratesValue),
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
			$('#' + ratesType + 'AuditGrid').jqxGrid({ source: dataAdapter });

			getFilterData(ratesValue);
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
	$('#' + ratesType + 'AuditGrid').jqxGrid('endrowedit', row, true);
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
						$('#' + ratesType + 'AuditGrid').jqxGrid({ source: dataAdapter });
					}
					else {
						getAuditGridSource(ratesValue);
					}
				},
				error: function(e) {
					console.log(e);
				}
			});
			getFilterData(ratesValue);
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

function getAuditGridSource(ratesValue) {

	latestUrl = '/rates/getlatest/' +  getGroupId(ratesValue);
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
					$('#' + ratesType + 'AuditGrid').jqxGrid({ source: dataAdapter });
				}
			}
		},
		error: function(e) {

			console.log("ERROR : ", e);

		}
	});

}

function getFilterData(ratesValue) {
	var SelectedSearchDTO = [];
	var allItems = 0;
	var checkedItem = [];
	var json;
	var values = [];
	$('#grid').jqxGrid({ showdefaultloadelement: true });
	var item = 0;
	if (ratesValue == 1) {
		items = CentralBanksItem;
	} else if (ratesValue == 2) {
		items = InflationSwapRatesItem;
	} else if (ratesValue == 3) {
		items = MortageRatesItem;
	} else if (ratesValue == 4) {
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
			"groupId": getGroupId(ratesValue),
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
				url: "/rates/getgriddata",
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

					saveFilterHistory(ratesValue, checkedItem);
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
		url: "/robot/callrobotsasync/9/" + getGroupId(ratesValue),
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

	location.href = "/bourse/rates?rates=" + divNum;
}
function renderSubGroup(ratesValue) {

	if (ratesValue == 1) {
		items = CentralBanksItem;
		
	var defaultData = AuditDefaultData;
	var fields = [
			{ name: 'id', type: 'string' },
			{ name: 'factor', type: 'string' },
			{ name: 'fed', type: 'string' },
			{ name: 'ecb', type: 'string' },
			{ name: 'boe', type: 'string' },
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
	          { text: 'ECB', datafield: 'ecb', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			  { text: 'FED',  datafield: 'fed', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
	       	  { text: 'BOE',  datafield: 'boe', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
 ];

	Types=["1rates","1moves","2rates","2moves","3rates","3moves"];
	inputDataTypes=[inputData1rates,inputData1moves,inputData2rates,inputData2moves,inputData3rates,inputData3moves];
	
	for (var i = 0; i < Types.length; i++) {
	    	var Type = Types[i];
	   		inputDataType = inputDataTypes[i];
	    
			items = CentralBanksItem;
			var dataInputGridFields = [
				(Type.includes("rates"))?{ name: 'rates', type: 'string' }:(Type.includes("moves"))?{ name: 'moves', type: 'string'  }:null,
			];
			var totalFields = dataInputGridFields.length;
			var widthPercentage = 100/totalFields;
	
			var dataInputGridColumns = [
				(Type.includes("rates"))?{text: 'rates', datafield: 'rates', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
				}:(Type.includes("moves"))?{text: 'moves', datafield: 'moves', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
				}:null,
			];
			
		initiate(Type, inputDataType, items, dataInputGridFields, dataInputGridColumns, defaultData, fields, arrayOFcolumns);
	  
	}	
}
	else
		if (ratesValue == 2) {
			inputDataType = inputDataInflationSwapRates;
			items = InflationSwapRatesItem;
		    
			var dataInputGridFields = [
						{ name: 'eu5', type: 'string' },
						{ name: 'us5', type: 'string' },];
		
			var dataInputGridColumns = [
					{ text: '5y5y EU', datafield: 'eu5', width: '50%' },
					{ text: '5y5y USA', datafield: 'us5', width: '50%' },
					];
			var defaultData = InflationSwapRatesAuditDefaultData;	
			
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
			initiate(ratesType, inputDataType, items, dataInputGridFields, dataInputGridColumns, defaultData, fields, arrayOFcolumns);

		} else
			if (ratesValue == 3) {
				inputDataType = inputDataMortageRates;
				items = MortageRatesItem;
				var dataInputGridFields = [
					{ name: 'usa30', type: 'string' }
				];
				var dataInputGridColumns = [
					{ text: '30yr USA Mortgage', datafield: 'usa30', width: '100%' }
				];
				var defaultData = MortageRatesAuditDefaultData;
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
	initiate(ratesType, inputDataType, items, dataInputGridFields, dataInputGridColumns, defaultData, fields, arrayOFcolumns);

			} else
				if (ratesValue == 4) {
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
	initiate(ratesType, inputDataType, items, dataInputGridFields, dataInputGridColumns, defaultData, fields, arrayOFcolumns);

				}

}
function saveFilterHistory(ratesValue, checkedItem) {


	var filterHistory = {
		"filterHistory": checkedItem.toString(),
		"screenName": "DATABASE_INPUT_SCREEN_RATES-" + getGroupId(ratesValue)
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
function getFilterHistory(ratesValue) {

	$.ajax({
		contentType: "application/json; charset=utf-8",
		url: "/bourse/getdataentryfilterhistory/" + "DATABASE_INPUT_SCREEN_RATES-" +  getGroupId(ratesValue),
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
				if (ratesValue == 1)
					for (i = 0; i < CentralBanksItem.length; i++) {
						$(CentralBanksItem[i]).jqxCheckBox({ checked: true });
					}
				else if (ratesValue == 2)
					for (i = 0; i < InflationSwapRatesItem.length; i++) {
						$(InflationSwapRatesItem[i]).jqxCheckBox({ checked: true });
					} else if (ratesValue == 3)
					for (i = 0; i < MortageRatesItem.length; i++) {
						$(MortageRatesItem[i]).jqxCheckBox({ checked: true });
					}else if (ratesValue == 4)
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

function getGroupId(ratesValue) {
	var groupId = '';
	switch (ratesValue) {

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

function initiate(ratesType, inputDataType, item, dataInputGridFields, dataInputGridColumns, defaultData, fields, arrayOFcolumns) {
	var jsonObject = null;
	if(ratesValue==1)
	{	$("#deleteCentralBanks").jqxButton({ theme: 'dark', width: 90, height: 30, template: "danger" });
	    $("#cancel" + ratesType).jqxButton({ theme: 'dark', height: 30, width: 74 ,imgSrc: "/img/icon/false.svg" });
		$("#load" + ratesType).jqxButton({ theme: 'dark', height: 30, width: 74 , imgSrc: "/img/icon/true.svg"});
 	}
	else
	{
	$("#delete" + ratesType).jqxButton({ theme: 'dark', width: 90, height: 30, template: "danger" });
	$("#cancel" + ratesType).jqxButton({ theme: 'dark', height: 30, width: 74 });
	$("#load" + ratesType).jqxButton({ theme: 'dark', height: 30, width: 74 });
	
	}
$("#cancel" + ratesType).click(function() {
		inputDataType.value = "";
		$("#dataformInput" + ratesType).css("display", "block");
		$("#dataInputButtons" + ratesType).css("display", "none");
		$("#dataInputGrid" + ratesType).css("display", "none");
	});

	for (i = 0; i < item.length; i++) {
		$(item[i]).jqxCheckBox({ theme: 'dark', width: 60, height: 25, boxSize: "0px" });
	}
	$('#data-input-' + ratesType).on('keydown', function(event) {
		if (event.keyCode === 13) {
			event.preventDefault(); // prevent form submission
			$('#data-input-' + ratesType).blur();
		}
	});
	inputDataType.addEventListener("blur", function() {
		if ($('#data-input-' + ratesType).val() != "") {
			$("#dataformInput" + ratesType).css("display", "none");
			$("#dataInputGrid" + ratesType).css("display", "block");
			$("#dataInputButtons" + ratesType).css("display", "block");

			var localdata = [];
			var dataIput = $('#data-input-' + ratesType).val()
			var dataInputRows = dataIput.split(/\r?\n/);
			var rowData = dataInputRows[0].split(/\r?\t/);
			if (ratesValue == 1 || ratesValue == 2)
				{
				var jsonObject = {};
				dataInputGridFields.forEach(function(field, index) {
				jsonObject[field.name] = rowData[index];
				});
			}
			else if (ratesValue == 3)
				jsonObject = {
					"usa30": rowData[0],
				};
			else if (ratesValue == 4)
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
			$("#dataInputGrid" + ratesType).jqxGrid(
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

	getAuditGridSource(ratesValue);
	if(ratesValue==1){
		$('#CentralBanksAuditGrid').jqxGrid(
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
	$("#deleteCentralBanks").click(function() {
		 if (ratesValue == 1)
			value = "Central Banks";
			
		$('#alertDeleteDataByDate-modal').modal('show');
		date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
		$("#alertTextDeleteDataByDate").empty();
		$("#alertTextDeleteDataByDate").append("<p> Are you sure you want to Delete all " + value + " record for the date '" + date + "'?</p>");
	});
	}else 
		if(ratesValue==2){
		$('#InflationSwapRatesAuditGrid').jqxGrid(
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
	$("#deleteInflationSwapRates").click(function() {
		 if (ratesValue == 2)
			value = "Inflation Swap Rates";
			
		$('#alertDeleteDataByDate-modal').modal('show');
		date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
		$("#alertTextDeleteDataByDate").empty();
		$("#alertTextDeleteDataByDate").append("<p> Are you sure you want to Delete all " + value + " record for the date '" + date + "'?</p>");
	});
	}
	else{
		$('#' + ratesType + 'AuditGrid').jqxGrid(
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
	$("#delete" + ratesType).click(function() {
		 if (ratesValue == 1)
			value = "CENTRAL BANKS";
		else if (ratesValue == 2)
			value = "INFLATION SWAP RATES";
		else if (ratesValue == 3)
			value = "MORTAGE RATES";
		else if (ratesValue == 4)
			value = "FIXINGS";
				
		$('#alertDeleteDataByDate-modal').modal('show');
		date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
		$("#alertTextDeleteDataByDate").empty();
		$("#alertTextDeleteDataByDate").append("<p> Are you sure you want to Delete all " + value + " record for the date '" + date + "'?</p>");
	});
	}
	
	$("#load" + ratesType).click(function() {
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

		var rows = $("#dataInputGrid" + ratesType).jqxGrid('getrows');

		for (i = 0; i < rows.length; i++) {
			if (ratesValue == 1 || ratesValue == 2) {
				for (var k = 0; k < dataInputGridFields.length; k++) {
				var propertyName = dataInputGridFields[k].name;

				listObject.push([String(k + 1), rows[i][propertyName]]);

			   }
			}  else
					if (ratesValue == 3) {
						firstObject.push(rows[i].usa30);
					}else
					if (ratesValue == 4) {
						firstObject.push(rows[i].euribor1);
						secondObject.push(rows[i].sonia1);
						thirdObject.push(rows[i].libor1);
						
						fourthObject.push(rows[i].euribor3);
						fifthObject.push(rows[i].sonia3);
						sixObject.push(rows[i].libor3);
					}
		}
		if (ratesValue == 1) {
			groupId = 48;
		} else if (ratesValue == 2) {
			groupId = 49;
		}
		else if (ratesValue == 3) {
			listObject = ["firstObject"];
			groupId = 50;
		}
		else if (ratesValue == 4) {
			listObject = ["firstObject", "secondObject", "thirdObject",'fourthObject','fifthObject','sixObject' ];
			groupId = 51;
		}
		for (i = 0; i < listObject.length; i++) {

			var value = eval(listObject[i]);
			if (ratesValue == 1) {
				var parsedDate = new Date($("#dateInput").jqxDateTimeInput('getDate'));
				parsedDate.setDate(1);
				var formattedDate = ("0" + parsedDate.getDate()).slice(-2) + '-' + ("0" + (parsedDate.getMonth() + 1)).slice(-2) + '-' + parsedDate.getFullYear();
		
		
						var value = eval(listObject[i]);
						
						subgroupId= extractNumber(ratesType);
						factorId=getFactorIdByName(ratesType)['factor'];
						
						dataToBeInserted.push({
							"groupId": getGroupId(ratesValue) ,
							"subgroupId": (subgroupId==4)?1:(subgroupId==5)?2:subgroupId,
							"value": value[1].replace(',', ''),
							"factorId":factorId,
							"referDate": (ratesValue == 1)?formattedDate: $.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
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
			if(ratesValue!=1)
				if (today.getDay() == 6 || today.getDay() == 0) {
					$('#alert-modal-weekend').modal('show');
					return;
				}
				
	if(ratesValue==1)
		checkifcanUrl = "/rates/checkifcansave/" + getGroupId(ratesValue)+"/"+dataToBeInserted[0].subgroupId+"/"+dataToBeInserted[0].factorId+"/";
	
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


											getFilterData(ratesValue);
											if (ratesValue == 1)
												{
													inputData1rates.value = "";
													inputData1moves.value = "";
													inputData2rates.value = "";
													inputData2moves.value = "";
													inputData3rates.value = "";
													inputData3moves.value = "";
												}
											else if (ratesValue == 2)
												{
													inputDataInflationSwapRates.value = "";
												}
											else if (ratesValue == 3)
													inputDataMortageRates.value = "";
											else if (ratesValue == 4)
													inputDataFixings.value = "";
												
											$("#dataformInput" + ratesType).css("display", "block");
											$("#dataInputButtons" + ratesType).css("display", "none");
											$("#dataInputGrid" + ratesType).css("display", "none");

											$('#dateInputAudit').jqxDateTimeInput('setDate', $("#dateInput").jqxDateTimeInput('getDate'));
											date = $.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')

											filterDate = date;
											delete auditGridSource.localdata;
											auditGridSource.url = auditUrl + date;
											dataAdapter = new $.jqx.dataAdapter(auditGridSource);
											if(ratesValue==1)
												$('#CentralBanksAuditGrid').jqxGrid({ source: dataAdapter });
											else
												$('#' + ratesType + 'AuditGrid').jqxGrid({ source: dataAdapter });

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
function getFactorIdByName(name) {
     // Convert the name to lowercase for case-insensitive comparison
    const lowercaseName = name.toLowerCase();

    // Extract numeric part of the name using regular expression
    const numericPart = lowercaseName.match(/\d+/);
    
    if (numericPart) {
        // If numeric part exists, construct a modified name without the prefix
        const modifiedName = lowercaseName.replace(numericPart[0], '');
        // Find the matching object using the modified name
        const matchingObject = nameFactorId.find(item => item.name.toLowerCase() === modifiedName);
        return matchingObject ? matchingObject : null;
    } else {
        // If there's no numeric part, directly find the matching object
        const matchingObject = nameFactorId.find(item => item.name.toLowerCase() === lowercaseName);
        return matchingObject ? matchingObject : null;
    }
}
	function getSubgroupIdByName(name) {
    const matchingObject = nameSubgroupId.find(item => item.name === name);
    return matchingObject ? matchingObject.subgroupId : null;
}
 function getfactorIdByDescription(name) {
    const matchingObject = nameFactorId.find(item => item.name === name);
    return matchingObject ? matchingObject.factor : null;
}
