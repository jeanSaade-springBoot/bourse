var selectedRow = this;
var monthDate = new Date();
monthDate.setMonth(monthDate.getMonth() - 6);
var auditUrl;
var updateUrl;
var saveUrl;
var deleteUrl;
var checkifcanUrl;
var AsiaItem = [
	"#jqxCheckBoxNikkei",
	"#jqxCheckBoxNikkei_usdjpy",
	"#jqxCheckBoxCsi",
	"#jqxCheckBoxCsi_usdcny",
	"#jqxCheckBoxNifty",
	"#jqxCheckBoxNifty_usdinr",
	"#jqxCheckBoxKospi",
	"#jqxCheckBoxKospi_usdkrw",
	"#jqxCheckBoxHangseng",
	"#jqxCheckBoxHangseng_usdhkd",
	"#jqxCheckBoxHismbi",
	"#jqxCheckBoxHismbi_usdhkd",
	"#jqxCheckBoxHismpi",
	"#jqxCheckBoxHismpi_usdhkd",
];

var WallStreetItem = [
	"#jqxCheckBoxDowjones",
	"#jqxCheckBoxSandp",
	"#jqxCheckBoxNasdaq",
	"#jqxCheckBoxRussell",
	"#jqxCheckBoxFang",
	"#jqxCheckBoxDjmajorbanks",
	"#jqxCheckBoxDjregionalbanks"
];
var EuropeItem = [
	"#jqxCheckBoxDax",
	"#jqxCheckBoxDax_Eurusd",
	"#jqxCheckBoxCac",
	"#jqxCheckBoxCac_Eurusd",
	"#jqxCheckBoxMib",
	"#jqxCheckBoxMib_Eurusd",
	"#jqxCheckBoxFtse",
	"#jqxCheckBoxFtse_Gbpusd",
	"#jqxCheckBoxStoxx50",
	"#jqxCheckBoxStoxx50_Eurusd",
	"#jqxCheckBoxStoxx600",
	"#jqxCheckBoxStoxx600_Eurusd",
	"#jqxCheckBoxEubanks",
	"#jqxCheckBoxEubanks_eurusd"
];
var EmergingItem = [
	"#jqxCheckBoxTadawul",
	"#jqxCheckBoxTadawul_usdsar",
	"#jqxCheckBoxEgx",
	"#jqxCheckBoxEgx_usdegp",
	"#jqxCheckBoxBist",
	"#jqxCheckBoxBist_usdtry",
	"#jqxCheckBoxMoex",
	"#jqxCheckBoxMoex_usdrub",
	"#jqxCheckBoxJsttop",
	"#jqxCheckBoxJsttop_usdzar",
	"#jqxCheckBoxBovespa",
	"#jqxCheckBoxBovespa_usdbrl",
	"#jqxCheckBoxMexbol",
	"#jqxCheckBoxMexbol_usdmxn"
];
var CryptosItem = [
	"#jqxCheckBoxBitcoin",
	"#jqxCheckBoxEtherium",
	"#jqxCheckBoxSolana",
	"#jqxCheckBoxCardano",
	"#jqxCheckBoxShiba",
];
var AuditDefaultData = [];

var source;
var inputDataAsia = document.getElementById("data-input-Asia");
var inputDataWallStreet = document.getElementById("data-input-WallStreet");
var inputDataEurope = document.getElementById("data-input-Europe");
var inputDataEmerging = document.getElementById("data-input-Emerging");
var inputDataCryptos = document.getElementById("data-input-Cryptos");

var Type;

const stiSubGroupValue = $("#stiSubGroup")[0].innerText;
checkifcanUrl = "/sti/checkifcansave/" + stiSubGroupValue + "/";

if (stiSubGroupValue == 1) {
	Type = "Asia";
	auditUrl = '/sti/sti-asia-data/';
	updateUrl = "/sti/update-sti-asia-data";
	saveUrl = "/sti/save-sti-asia";
	deleteUrl = "/sti/delete-sti-asia-byreferDate/" ;

}
else if (stiSubGroupValue == 2) {
	Type = "WallStreet";
	auditUrl = '/sti/sti-wall-street-data/';
	updateUrl = "/sti/update-sti-wall-street-data";
	saveUrl = "/sti/save-sti-wall-street";
	deleteUrl = "/sti/delete-sti-wall-street-byreferDate/" ;
}
else if (stiSubGroupValue == 3) {
	Type = "Europe";
	auditUrl = '/sti/sti-europe-data/';
	updateUrl = "/sti/update-sti-europe-data";
	saveUrl = "/sti/save-sti-europe";
	deleteUrl = "/sti/delete-sti-europe-byreferDate/" ;
}
else if (stiSubGroupValue == 4) {
	Type = "Emerging";
	auditUrl = '/sti/sti-emerging-data/';
	updateUrl = "/sti/update-sti-emerging-data";
	saveUrl = "/sti/save-sti-emerging";
	deleteUrl = "/sti/delete-sti-emerging-byreferDate/" ;
}
else if (stiSubGroupValue == 5) {
	Type = "Cryptos";
	auditUrl = '/sti/sti-cryptos-data/';
	updateUrl = "/sti/update-sti-cryptos-data";
	saveUrl = "/sti/save-sti-cryptos";
	deleteUrl = "/sti/delete-sti-cryptos-byreferDate/" ;
}

$(document).ready(function() {
	$('#overlay').fadeOut();
	$('#container-wrapper').show();

	$("#viewall").jqxButton({ theme: 'dark', width: 110, height: 35, template: "primary" });
	$("#viewall").css("display", "block");
	$("#viewall").click(function() {
		popupWindow('/bourse/allnews', 'Libvol-View All News', window, 1300, 600);
	});

	$('[data-toggle="tooltip"]').tooltip();

	if (stiSubGroupValue == 1) {
		$("#asia-btn").addClass('active');
	} else
		if (stiSubGroupValue == 2) {
			$("#wallStreet-btn").addClass('active');
		} else
			if (stiSubGroupValue == 3) {
				$("#europe-btn").addClass('active');
			} else
				if (stiSubGroupValue == 4) {
					$("#emerging-btn").addClass('active');
				} else
					if (stiSubGroupValue == 5) {
						$("#cryptos-btn").addClass('active');
					}

	renderSubGroup(stiSubGroupValue);

	$("#dateInput").jqxDateTimeInput({ theme: 'dark', width: '195px', height: '25px' });
	$("#dateInputAudit").jqxDateTimeInput({ theme: 'dark', width: '195px', height: '25px' });

	$("#dateInputFrom").jqxDateTimeInput({ theme: 'dark', width: '200px', height: '25px' });
	$("#dateInputFrom").jqxDateTimeInput('setDate', monthDate);
	$("#dateInputTo").jqxDateTimeInput({ theme: 'dark', width: '200px', height: '25px' });
	$("#filter").jqxButton({ theme: 'dark', height: 30, width: 74 });
	$("#Clearfilter").jqxButton({ theme: 'dark', height: 30, width: 74 });

	source =
	{
		datatype: "json",
		datafields: [
			{ name: 'refer_date', type: 'date' },
			{ "name": "NIKKEI", "type": "float" },
			{ "name": "NIKKEI_USDJPY", "type": "float" },
			{ "name": "CSI", "type": "float" },
			{ "name": "CSI_USDCNY", "type": "float" },
			{ "name": "NIFTY", "type": "float" },
			{ "name": "NIFTY_USDINR", "type": "float" },
			{ "name": "KOSPI", "type": "float" },
			{ "name": "KOSPI_USDKRW", "type": "float" },
			{ "name": "HANGSENG", "type": "float" },
			{ "name": "HANGSENG_USDHKD", "type": "float" },
			{ "name": "HISMBI", "type": "float" },
			{ "name": "HISMBI_USDHKD", "type": "float" },
			{ "name": "HISMPI", "type": "float" },
			{ "name": "HISMPI_USDHKD", "type": "float" },
			{ "name": "DOWJONES", "type": "float" },
			{ "name": "SANDP", "type": "float" },
			{ "name": "NASDAQ", "type": "float" },
			{ "name": "RUSSELL", "type": "float" },
			{ "name": "FANG", "type": "float" },
			{ "name": "DJMAJORBANKS", "type": "float" },
			{ "name": "DJREGIONALBANKS", "type": "float" },
			{ "name": "DAX", "type": "float" },
			{ "name": "DAX_EURUSD", "type": "float" },
			{ "name": "CAC", "type": "float" },
			{ "name": "CAC_EURUSD", "type": "float" },
			{ "name": "MIB", "type": "float" },
			{ "name": "MIB_EURUSD", "type": "float" },
			{ "name": "FTSE", "type": "float" },
			{ "name": "FTSE_GBPUSD", "type": "float" },
			{ "name": "STOXX50", "type": "float" },
			{ "name": "STOXX50_EURUSD", "type": "float" },
			{ "name": "STOXX600", "type": "float" },
			{ "name": "STOXX600_EURUSD", "type": "float" },
			{ "name": "EUBANKS", "type": "float" },
			{ "name": "EUBANKS_EURUSD", "type": "float" },
			{ "name": "TADAWUL", "type": "float" },
			{ "name": "TADAWUL_USDSAR", "type": "float" },
			{ "name": "EGX", "type": "float" },
			{ "name": "EGX_USDEGP", "type": "float" },
			{ "name": "BIST", "type": "float" },
			{ "name": "BIST_USDTRY", "type": "float" },
			{ "name": "MOEX", "type": "float" },
			{ "name": "MOEX_USDRUB", "type": "float" },
			{ "name": "JSTTOP", "type": "float" },
			{ "name": "JSTTOP_USDZAR", "type": "float" },
			{ "name": "BOVESPA", "type": "float" },
			{ "name": "BOVESPA_USDBRL", "type": "float" },
			{ "name": "MEXBOL", "type": "float" },
			{ "name": "MEXBOL_USDMXN", "type": "float" },
			{ "name": "BITCOIN", "type": "float" },
			{ "name": "ETHERIUM", "type": "float" },
			{ "name": "SOLANA", "type": "float" },
			{ "name": "CARDANO", "type": "float" },
			{ "name": "SHIBA", "type": "float" },
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
	getFilterHistory(stiSubGroupValue);

	$("#grid").jqxGrid('showloadelement');

	getFilterData(stiSubGroupValue);

	$('#dateInputAudit').on('change', function(event) {
		date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
		filterDate = date;

		delete auditGridSource.localdata;
		auditGridSource.url = auditUrl + date;
		dataAdapter = new $.jqx.dataAdapter(auditGridSource);
		$('#' + Type + 'AuditGrid').jqxGrid({ source: dataAdapter });

	});

	$("#filter").click(function() {

		getFilterData(stiSubGroupValue);
	});
});// end document ready
$("#Clearfilter").click(function() {
	if (stiSubGroupValue == 1) {
		for (i = 0; i < AsiaItem.length; i++) {
			$(AsiaItem[i]).jqxCheckBox({ checked: false });
		}
	}
	else if (stiSubGroupValue == 2) {
		for (i = 0; i < WallStreetItem.length; i++) {
			$(WallStreetItem[i]).jqxCheckBox({ checked: false });
		}
	}
	else if (stiSubGroupValue == 3) {
		for (i = 0; i < EuropeItem.length; i++) {
			$(EuropeItem[i]).jqxCheckBox({ checked: false });
		}
	}
	else if (stiSubGroupValue == 4) {
		for (i = 0; i < EmergingItem.length; i++) {
			$(EmergingItem[i]).jqxCheckBox({ checked: false });
		}
	}
	else if (stiSubGroupValue == 5) {
		for (i = 0; i < CryptosItem.length; i++) {
			$(CryptosItem[i]).jqxCheckBox({ checked: false });
		}
	}
});
function Edit(row, event) {

	isedit = true;
	var data = $('#' + Type + 'AuditGrid').jqxGrid('getrowdata', row);
	if (stiSubGroupValue == 1) {
		oldDataJson = {
			"nikkei": data.nikkei,
			"csi": data.csi,
			"nifty": data.nifty,
			"kospi": data.kospi,
			"hangseng": data.hangseng,
			"hismbi": data.hismbi,
			"hismpi": data.hismpi,
			"nikkei_USDJPY": data.nikkei_USDJPY,
			"csi_USDCNY": data.csi_USDCNY,
			"nifty_USDINR": data.nifty_USDINR,
			"kospi_USDKRW": data.kospi_USDKRW,
			"hangseng_USDHKD": data.hangseng_USDHKD,
			"hismbi_USDHKD": data.hismbi_USDHKD,
			"hismpi_USDHKD": data.hismpi_USDHKD
		};
	} else if (stiSubGroupValue == 2) {
		oldDataJson = {
			"dowjones": data.dowjones,
			"sandp": data.sandp,
			"nasdaq": data.nasdaq,
			"russell": data.russell,
			"fang": data.fang,
			"djmajorbanks": data.djmajorbanks,
			"djregionalbanks": data.djregionalbanks
		};
		}
		else if (stiSubGroupValue == 3) {
			oldDataJson = {
				"dax": data.dax,
				"cac": data.cac,
				"mib": data.mib,
				"ftse": data.ftse,
				"stoxx50": data.stoxx50,
				"stoxx600": data.stoxx600,
				"eubanks": data.eubanks,
				"dax_EURUSD": data.dax_EURUSD,
				"cac_EURUSD": data.cac_EURUSD,
				"mib_EURUSD": data.mib_EURUSD,
				"ftse_GBPUSD": data.ftse_GBPUSD,
				"stoxx50_EURUSD": data.stoxx50_EURUSD,
				"stoxx600_EURUSD": data.stoxx600_EURUSD,
				"eubanks_EURUSD": data.eubanks_EURUSD
			};
		}
		else if (stiSubGroupValue == 4) {
			oldDataJson = {
				"tadawul": data.tadawul,
				"egx": data.egx,
				"bist": data.bist,
				"moex": data.moex,
				"jsttop": data.jsttop,
				"bovespa": data.bovespa,
				"mexbol": data.mexbol,
				"tadawul_USDSAR": data.tadawul_USDSAR,
				"egx_USDEGP": data.egx_USDEGP,
				"bist_USDTRY": data.bist_USDTRY,
				"moex_USDRUB": data.moex_USDRUB,
				"jsttop_USDZAR": data.jsttop_USDZAR,
				"bovespa_USDBRL": data.bovespa_USDBRL,
				"mexbol_USDMXN": data.mexbol_USDMXN
			};
		}
		else if (stiSubGroupValue == 5) {
			oldDataJson = {
				"bitcoin": data.bitcoin,
				"etherium": data.etherium,
				"solana": data.solana,
				"cardano": data.cardano,
				"shiba": data.shiba
				}
	}
	selectedRow.editrow = row;
	date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
	if (auditGridSource.url == '' || date != filterDate) {
		delete auditGridSource.localdata;
		auditGridSource.url = auditUrl + date;
		dataAdapter = new $.jqx.dataAdapter(auditGridSource);
		$('#' + Type + 'AuditGrid').jqxGrid({ source: dataAdapter });

	}
	setTimeout(function() {

		var isDataValid = true;

		for (var key in oldDataJson) {
			if (oldDataJson.hasOwnProperty(key)) {
				if (oldDataJson[key] === null || oldDataJson[key] === undefined) {
					isDataValid = false;
					break; // Exit the loop early when an invalid value is found
				}
			}
		}

		if (isDataValid) {
			$('#' + Type + 'AuditGrid').jqxGrid('beginrowedit', row);
			$("#edit" + row).css("display", "none");
			$("#actionButtons" + row).css("display", "contents");
			if (event) {
				if (event.preventDefault) {
					event.preventDefault();
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
	var updatedData = $('#' + Type + 'AuditGrid').jqxGrid('getrowdata', row);
	selectedRow.editrow = -1;
	$('#' + Type + 'AuditGrid').jqxGrid('endrowedit', row);
	var updatedData = $('#' + Type + 'AuditGrid').jqxGrid('getrowdata', row);
	if (stiSubGroupValue == 1) {
		 updatedDataJson = {
			"nikkei": updatedData.nikkei,
			"csi": updatedData.csi,
			"nifty": updatedData.nifty,
			"kospi": updatedData.kospi,
			"hangseng": updatedData.hangseng,
			"hismbi": updatedData.hismbi,
			"hismpi": updatedData.hismpi,
			"nikkei_USDJPY": updatedData.nikkei_USDJPY,
			"csi_USDCNY": updatedData.csi_USDCNY,
			"nifty_USDINR": updatedData.nifty_USDINR,
			"kospi_USDKRW": updatedData.kospi_USDKRW,
			"hangseng_USDHKD": updatedData.hangseng_USDHKD,
			"hismbi_USDHKD": updatedData.hismbi_USDHKD,
			"hismpi_USDHKD": updatedData.hismpi_USDHKD
		};

	} else if (stiSubGroupValue == 2) {
		updatedDataJson = {
			"dowjones": updatedData.dowjones,
			"sandp": updatedData.sandp,
			"nasdaq": updatedData.nasdaq,
			"russell": updatedData.russell,
			"fang": updatedData.fang,
			"djmajorbanks": updatedData.djmajorbanks,
			"djregionalbanks": updatedData.djregionalbanks
		};

	}	else if (stiSubGroupValue == 3) {
			updatedupdatedDataJson = {
				"dax": updatedData.dax,
				"cac": updatedData.cac,
				"mib": updatedData.mib,
				"ftse": updatedData.ftse,
				"stoxx50": updatedData.stoxx50,
				"stoxx600": updatedData.stoxx600,
				"eubanks": updatedData.eubanks,
				"dax_EURUSD": updatedData.dax_EURUSD,
				"cac_EURUSD": updatedData.cac_EURUSD,
				"mib_EURUSD": updatedData.mib_EURUSD,
				"ftse_GBPUSD": updatedData.ftse_GBPUSD,
				"stoxx50_EURUSD": updatedData.stoxx50_EURUSD,
				"stoxx600_EURUSD": updatedData.stoxx600_EURUSD,
				"eubanks_EURUSD": updatedData.eubanks_EURUSD
			};
		}
		else if (stiSubGroupValue == 4) {
			updatedupdatedDataJson = {
				"tadawul": updatedData.tadawul,
				"egx": updatedData.egx,
				"bist": updatedData.bist,
				"moex": updatedData.moex,
				"jsttop": updatedData.jsttop,
				"bovespa": updatedData.bovespa,
				"mexbol": updatedData.mexbol,
				"tadawul_USDSAR": updatedData.tadawul_USDSAR,
				"egx_USDEGP": updatedData.egx_USDEGP,
				"bist_USDTRY": updatedData.bist_USDTRY,
				"moex_USDRUB": updatedData.moex_USDRUB,
				"jsttop_USDZAR": updatedData.jsttop_USDZAR,
				"bovespa_USDBRL": updatedData.bovespa_USDBRL,
				"mexbol_USDMXN": updatedData.mexbol_USDMXN
			};
		}
		else if (stiSubGroupValue == 5) {
			updatedupdatedDataJson = {
				"bitcoin": updatedData.bitcoin,
				"etherium": updatedData.etherium,
				"solana": updatedData.solana,
				"cardano": updatedData.cardano,
				"shiba": updatedData.shiba
				};
			}

	keys = Object.keys(updatedDataJson);

	for (var i = 0; i < keys.length; i++) {
		var field = keys[i];
		if (updatedDataJson[field] !== oldDataJson[field]) {
			dataToBeUpdated.push({
				"subgroupId": i + 1,
				"value": updatedDataJson[field].replace(',', ''),
				"referdate": date
			});
		}
	}

	var updatedJson = [];
	for (let i = 0; i < keys.length; i++) {
		
		if (updatedDataJson[keys[i]] != oldDataJson[keys[i]]) {
			updatedJson.push({
				"assetId": 7,
				"groupId": getGroupId(stiSubGroupValue),
				"value": keys[i].toUpperCase()
			});

		}
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
			$('#' + Type + 'AuditGrid').jqxGrid({ source: dataAdapter });
			
			getFilterData(stiSubGroupValue);
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
	$('#' + Type + 'AuditGrid').jqxGrid('endrowedit', row, true);
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
						$('#' + Type + 'AuditGrid').jqxGrid({ source: dataAdapter });
					
					}
					else {
						getAuditGridSource(stiSubGroupValue);
					}
				},
				error: function(e) {
					console.log(e);
				}
			});
			getFilterData(stiSubGroupValue);
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

function getAuditGridSource(stiSubGroupValue) {

	latestUrl = '/sti/getlatest/' + stiSubGroupValue;
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
					$('#' + Type + 'AuditGrid').jqxGrid({ source: dataAdapter });
					
				}
			} else {
				delete auditGridSource.localdata;
				auditGridSource.localdata = [];
				dataAdapter = new $.jqx.dataAdapter(auditGridSource);
				$('#' + Type + 'AuditGrid').jqxGrid({ source: dataAdapter });
			
			}
		},
		error: function(e) {

			console.log("ERROR : ", e);

		}
	});

}

function getFilterData(stiSubGroupValue) {
	var SelectedSearchDTO = [];
	var allItems = 0;
	var checkedItem = [];
	var json;
	var values = [];
	$('#grid').jqxGrid({ showdefaultloadelement: true });
	var item = 0;
	if (stiSubGroupValue == 1) {
		items = AsiaItem;
	} else if (stiSubGroupValue == 2) {
		items = WallStreetItem;
	}else if (stiSubGroupValue == 3) {
		items = EuropeItem;
	}else if (stiSubGroupValue == 4) {
		items = EmergingItem;
	}else if (stiSubGroupValue == 5) {
		items = CryptosItem;
	}
	for (i = 0; i < items.length; i++) {
	         		if($(items[i]).jqxCheckBox('checked'))
	         		{		
	         		    values.push(items[i].split("Box")[1].toUpperCase());	
	          			item=1;
	          			allItems=allItems+1;
	          			checkedItem.push(items[i]);
	         		}
	          	}
	  	if(item!=0)
	  	{
	  		SelectedSearchDTO.push({
	  		   "groupId":getGroupId(stiSubGroupValue),
			   "selectedValues":values,
			});
	  		 values=[];
	  	}
	if (allItems != 0) {
		json = {
			"selectedSearchDTOlst": SelectedSearchDTO,
			"fromDate": $.jqx.dataFormat.formatdate($("#dateInputFrom").jqxDateTimeInput('getDate'), 'yyyy-MM-dd'),
			"toDate": $.jqx.dataFormat.formatdate($("#dateInputTo").jqxDateTimeInput('getDate'), 'yyyy-MM-dd')
		};

		if (allItems <= 15) {
			$.ajax({
				type: "POST",
				contentType: "application/json",
				url: "/sti/getgriddata",
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
						width: data.columns.length > 12 ? '100%' : data.columns.length*110,
						source: dataAdapter,
						columns: data.columns
					});

					saveFilterHistory(stiSubGroupValue, checkedItem);
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
		url: "/robot/callrobotsasync/7/" + getGroupId(stiSubGroupValue),
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

	location.href = "/bourse/sti?sti=" + divNum;
}
function renderSubGroup(stiSubGroupValue) {

	if (stiSubGroupValue == 1) {
		inputDataType = inputDataAsia;
		items = AsiaItem;
		var dataInputGridFields = [
			{ name: 'nikkei', type: 'string' },
			{ name: 'csi', type: 'string' },
			{ name: 'nifty', type: 'string' },
			{ name: 'kospi', type: 'string' },
			{ name: 'hangseng', type: 'string' },
			{ name: 'hismbi', type: 'string' },
			{ name: 'hismpi', type: 'string' },
		];
		var totalFields = dataInputGridFields.length;
		var widthPercentage = 100/totalFields;

		var dataInputGridColumns = [
			{
				text: 'NIKKEI', datafield: 'nikkei', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'CSI', datafield: 'csi', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'NIFTY', datafield: 'nifty', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'KOSPI', datafield: 'kospi', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'HANG SENG', datafield: 'hangseng', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'HIS^ MAINLAND BANK INDEX', datafield: 'hismbi', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'HIS^ MAINLAND PROPERTY INDEX', datafield: 'hismpi', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
		];
		var defaultData = AuditDefaultData;
		
		var fields = [
			{ name: 'nikkei', type: 'string' },
			{ name: 'csi', type: 'string' },
			{ name: 'nifty', type: 'string' },
			{ name: 'kospi', type: 'string' },
			{ name: 'hangseng', type: 'string' },
			{ name: 'hismbi', type: 'string' },
			{ name: 'hismpi', type: 'string' },
			{ name: 'nikkei_USDJPY', type: 'string' },
			{ name: 'csi_USDCNY', type: 'string' },
			{ name: 'nifty_USDINR', type: 'string' },
			{ name: 'kospi_USDKRW', type: 'string' },
			{ name: 'hangseng_USDHKD', type: 'string' },
			{ name: 'hismbi_USDHKD', type: 'string' },
			{ name: 'hismpi_USDHKD', type: 'string' },
		];
		var totalFields = fields.length;
		var widthPercentage = (100 - 10)/totalFields;
		var arrayOFcolumns = [
			{
				text: '', editable: false, datafield: 'Edit', width: '10%', cellsrenderer: function(row) {
					return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit" + row + "\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons" + row + "\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
				}
			},
			{ text: 'NIKKEI', datafield: 'nikkei', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'NIKKEI/USDJPY', datafield: 'nikkei_USDJPY', editable: false, width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'CSI', datafield: 'csi', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'CSI/USDCNY', datafield: 'csi_USDCNY', editable: false, width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'NIFTY', datafield: 'nifty', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'NIFTY/USDINR', datafield: 'nifty_USDINR', editable: false, width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'KOSPI', datafield: 'kospi', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'KOSPI/USDKRW', datafield: 'kospi_USDKRW', editable: false, width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'HANGSENG', datafield: 'hangseng', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'HANGSENG/USDHKD', datafield: 'hangseng_USDHKD', editable: false, width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'HISMBI', datafield: 'hismbi', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'HISMBI/USDHKD', datafield: 'hismbi_USDHKD', editable: false, width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'HISMPI', datafield: 'hismpi', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'HISMPI/USDHKD', datafield: 'hismpi_USDHKD', editable: false, width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			];

	}
	else
		if (stiSubGroupValue == 2) {
			
		inputDataType = inputDataWallStreet;
		items = WallStreetItem;
		var dataInputGridFields = [
			{ name: 'dowjones', type: 'string' },
			{ name: 'sandp', type: 'string' },
			{ name: 'nasdaq', type: 'string' },
			{ name: 'russell', type: 'string' },
			{ name: 'fang', type: 'string' },
			{ name: 'djmajorbanks', type: 'string' },
			{ name: 'djregionalbanks', type: 'string' },
		];
		var totalFields = dataInputGridFields.length;
		var widthPercentage = 100/totalFields;

		var dataInputGridColumns = [
			{
				text: 'DOW JONES', datafield: 'dowjones', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'S&P', datafield: 'sandp', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'NASDAQ', datafield: 'nasdaq', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'RUSSELL', datafield: 'russell', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'FANG+', datafield: 'fang', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'DJ MAJOR BANKS', datafield: 'djmajorbanks', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'DJ REGIONAL BANKS', datafield: 'djregionalbanks', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
		];
		var defaultData = AuditDefaultData;
		
		var fields = [
			{ name: 'dowjones', type: 'string' },
			{ name: 'sandp', type: 'string' },
			{ name: 'nasdaq', type: 'string' },
			{ name: 'russell', type: 'string' },
			{ name: 'fang', type: 'string' },
			{ name: 'djmajorbanks', type: 'string' },
			{ name: 'djregionalbanks', type: 'string' }
		];
		var totalFields = fields.length;
		var widthPercentage = (100 - 10)/totalFields;
		var arrayOFcolumns = [
			{
				text: '', editable: false, datafield: 'Edit', width: '10%', cellsrenderer: function(row) {
					return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit" + row + "\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons" + row + "\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
				}
			},
			{ text: 'DOW JONES', datafield: 'dowjones', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'S&P', datafield: 'sandp', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'NASDAQ', datafield: 'nasdaq', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'RUSSELL', datafield: 'russell', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'FANG+', datafield: 'fang', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'DJ MAJOR BANKS', datafield: 'djmajorbanks', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'DJ REGIONAL BANKS', datafield: 'djregionalbanks', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			];

	

		}
		else 
		if (stiSubGroupValue == 3) {
		inputDataType = inputDataEurope;
		items = EuropeItem;
		var dataInputGridFields = [
			{ name: 'dax', type: 'string' },
			{ name: 'cac', type: 'string' },
			{ name: 'mib', type: 'string' },
			{ name: 'ftse', type: 'string' },
			{ name: 'stoxx50', type: 'string' },
			{ name: 'stoxx600', type: 'string' },
			{ name: 'eubanks', type: 'string' },
		];
		var totalFields = dataInputGridFields.length;
		var widthPercentage = 100/totalFields;

		var dataInputGridColumns = [
			{
				text: 'DAX', datafield: 'dax', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'CAC', datafield: 'cac', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'MIB', datafield: 'mib', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'FTSE', datafield: 'ftse', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'STOXX50', datafield: 'stoxx50', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'STOXX600', datafield: 'stoxx600', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'EUBANKS', datafield: 'eubanks', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
		];
		var defaultData = AuditDefaultData;
		
		var fields = [
			{ name: 'dax', type: 'string' },
			{ name: 'cac', type: 'string' },
			{ name: 'mib', type: 'string' },
			{ name: 'ftse', type: 'string' },
			{ name: 'stoxx50', type: 'string' },
			{ name: 'stoxx600', type: 'string' },
			{ name: 'eubanks', type: 'string' },
			{ name: 'dax_EURUSD', type: 'string' },
			{ name: 'cac_EURUSD', type: 'string' },
			{ name: 'mib_EURUSD', type: 'string' },
			{ name: 'ftse_GBPUSD', type: 'string' },
			{ name: 'stoxx50_EURUSD', type: 'string' },
			{ name: 'stoxx600_EURUSD', type: 'string' },
			{ name: 'eubanks_EURUSD', type: 'string' },
		];
		var totalFields = fields.length;
		var widthPercentage = (100 - 10)/totalFields;
		var arrayOFcolumns = [
			{
				text: '', editable: false, datafield: 'Edit', width: '10%', cellsrenderer: function(row) {
					return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit" + row + "\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons" + row + "\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
				}
			},
			{ text: 'Dax', datafield: 'dax', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Dax*Eurusd', datafield: 'dax_EURUSD', editable: false, width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Cac', datafield: 'cac', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Cac*Eurusd', datafield: 'cac_EURUSD', editable: false, width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Mib', datafield: 'mib', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Mib*Eurusd', datafield: 'mib_EURUSD', editable: false, width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Ftse', datafield: 'ftse', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Ftse*Gbpusd', datafield: 'ftse_GBPUSD', editable: false, width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Stoxx-50', datafield: 'stoxx50', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Stoxx50*Eurusd', datafield: 'stoxx50_EURUSD', editable: false, width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Stoxx-600', datafield: 'stoxx600', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Stoxx600*Eurusd', datafield: 'stoxx600_EURUSD', editable: false, width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Eu Banking Index', datafield: 'eubanks', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Eu Banking Index*Eurusd', datafield: 'eubanks_EURUSD', editable: false, width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			];

	}else 
		if (stiSubGroupValue == 4) {
			inputDataType = inputDataEmerging;
		items = EmergingItem;
		var dataInputGridFields = [
			{ name: 'tadawul', type: 'string' },
			{ name: 'egx', type: 'string' },
			{ name: 'bist', type: 'string' },
			{ name: 'moex', type: 'string' },
			{ name: 'jsttop', type: 'string' },
			{ name: 'bovespa', type: 'string' },
			{ name: 'mexbol', type: 'string' },
		];
		var totalFields = dataInputGridFields.length;
		var widthPercentage = 100/totalFields;

		var dataInputGridColumns = [
			{
				text: 'tadawul', datafield: 'tadawul', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'egx', datafield: 'egx', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'bist', datafield: 'bist', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'moex', datafield: 'moex', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'jsttop', datafield: 'jsttop', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'bovespa', datafield: 'bovespa', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'mexbol', datafield: 'mexbol', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
		];
		var defaultData = AuditDefaultData;
		
		var fields = [
			{ name: 'tadawul', type: 'string' },
			{ name: 'egx', type: 'string' },
			{ name: 'bist', type: 'string' },
			{ name: 'moex', type: 'string' },
			{ name: 'jsttop', type: 'string' },
			{ name: 'bovespa', type: 'string' },
			{ name: 'mexbol', type: 'string' },
			{ name: 'tadawul_USDSAR', type: 'string' },
			{ name: 'egx_USDEGP', type: 'string' },
			{ name: 'bist_USDTRY', type: 'string' },
			{ name: 'moex_USDRUB', type: 'string' },
			{ name: 'jsttop_USDZAR', type: 'string' },
			{ name: 'bovespa_USDBRL', type: 'string' },
			{ name: 'mexbol_USDMXN', type: 'string' },
		];
		var totalFields = fields.length;
		var widthPercentage = (100 - 10)/totalFields;
		var arrayOFcolumns = [
			{
				text: '', editable: false, datafield: 'Edit', width: '10%', cellsrenderer: function(row) {
					return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit" + row + "\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons" + row + "\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
				}
			},
			{ text: 'Tadawul', datafield: 'tadawul', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Tadawul/Usdsar', datafield: 'tadawul_USDSAR', editable: false, width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Egx', datafield: 'egx', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Egx/Usdegp', datafield: 'egx_USDEGP', editable: false, width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Bist', datafield: 'bist', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Bist/Usdtry', datafield: 'bist_USDTRY', editable: false, width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Moex', datafield: 'moex', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Moex/Usdrub', datafield: 'moex_USDRUB', editable: false, width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Jsttop', datafield: 'jsttop', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Jsttop/Usdzar', datafield: 'jsttop_USDZAR', editable: false, width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Bovespa', datafield: 'bovespa', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Bovespa/Usdbrl', datafield: 'bovespa_USDBRL', editable: false, width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Mexbol', datafield: 'mexbol', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Mexbol/ Usdmxn', datafield: 'mexbol_USDMXN', editable: false, width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			];

	}else 
		if (stiSubGroupValue == 5) {
			
		inputDataType = inputDataCryptos;
		items = CryptosItem;
		var dataInputGridFields = [
			{ name: 'bitcoin', type: 'string' },
			{ name: 'etherium', type: 'string' },
			{ name: 'solana', type: 'string' },
			{ name: 'cardano', type: 'string' },
			{ name: 'shiba', type: 'string' },
		];
		var totalFields = dataInputGridFields.length;
		var widthPercentage = 100/totalFields;

		var dataInputGridColumns = [
			{
				text: 'bitcoin', datafield: 'bitcoin', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'etherium', datafield: 'etherium', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'solana', datafield: 'solana', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'cardano', datafield: 'cardano', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'shiba', datafield: 'shiba', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
		];
		var defaultData = AuditDefaultData;
		
		var fields = [
			{ name: 'bitcoin', type: 'string' },
			{ name: 'etherium', type: 'string' },
			{ name: 'solana', type: 'string' },
			{ name: 'cardano', type: 'string' },
			{ name: 'shiba', type: 'string' },
		];
		var totalFields = fields.length;
		var widthPercentage = (100 - 20)/totalFields;
		var arrayOFcolumns = [
			{
				text: '', editable: false, datafield: 'Edit', width: '20%', cellsrenderer: function(row) {
					return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit" + row + "\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons" + row + "\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
				}
			},
			{ text: 'Bitcoin', datafield: 'bitcoin', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Etherium', datafield: 'etherium', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Solana', datafield: 'solana', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Cardano', datafield: 'cardano', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Shiba', datafield: 'shiba', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			];

	}
	initiate(Type, inputDataType, items, dataInputGridFields, dataInputGridColumns, defaultData, fields, arrayOFcolumns);

}
function saveFilterHistory(stiSubGroupValue, checkedItem) {


	var filterHistory = {
		"filterHistory": checkedItem.toString(),
		"screenName": "DATABASE_INPUT_SCREEN_STI-" + stiSubGroupValue
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
function getFilterHistory(stiSubGroupValue) {

	$.ajax({
		contentType: "application/json; charset=utf-8",
		url: "/bourse/getdataentryfilterhistory/" + "DATABASE_INPUT_SCREEN_STI-" + stiSubGroupValue,
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
				if (stiSubGroupValue == 1)
					for (i = 0; i < AsiaItem.length; i++) {
						$(AsiaItem[i]).jqxCheckBox({ checked: true });
					}
				else if (stiSubGroupValue == 2)
					for (i = 0; i < WallStreetItem.length; i++) {
						$(WallStreetItem[i]).jqxCheckBox({ checked: true });
					}
					else if (stiSubGroupValue == 3)
					for (i = 0; i < EuropeItem.length; i++) {
						$(EuropeItem[i]).jqxCheckBox({ checked: true });
					}
					else if (stiSubGroupValue == 4)
					for (i = 0; i < EmergingItem.length; i++) {
						$(EmergingItem[i]).jqxCheckBox({ checked: true });
					}
					else if (stiSubGroupValue == 5)
					for (i = 0; i < CryptosItem.length; i++) {
						$(CryptosItem[i]).jqxCheckBox({ checked: true });
					}
			}
		},
		error: function(e) {

			console.log("ERROR : ", e);

		}
	});
}

function getGroupId(stiSubGroupValue) {
	var groupId = '';
	switch (stiSubGroupValue) {

		case '1':
			groupId = '32'
			break;
		case '2':
			groupId = '33'
			break;
		case '3':
			groupId = '34'
			break;
		case '4':
			groupId = '35'
			break;
		case '5':
			groupId = '36'
			break;
		
	}
	return groupId;
}

function initiate(Type, inputDataType, item, dataInputGridFields, dataInputGridColumns, defaultData, fields, arrayOFcolumns) {
	
	$("#delete" + Type).jqxButton({ theme: 'dark', width: 90, height: 30, template: "danger" });
	$("#cancel" + Type).jqxButton({ theme: 'dark', height: 30, width: 74 });
	$("#load" + Type).jqxButton({ theme: 'dark', height: 30, width: 74 });
	$("#cancel" + Type).click(function() {
		inputDataType.value = "";
		$("#dataformInput" + Type).css("display", "block");
		$("#dataInputButtons" + Type).css("display", "none");
		$("#dataInputGrid" + Type).css("display", "none");
		(stiSubGroupValue == 1) ? $("#usd-flag").removeClass("m-auto").addClass("mt-auto") : null;

	});

	for (i = 0; i < item.length; i++) {
		$(item[i]).jqxCheckBox({ theme: 'dark', width: 16, height: 16, boxSize: "16px" });
	}
	$('#data-input-' + Type).on('keydown', function(event) {
		if (event.keyCode === 13) {
			event.preventDefault(); // prevent form submission
			$('#data-input-' + Type).blur();
		}
	});
	inputDataType.addEventListener("blur", function() {
		if ($('#data-input-' + Type).val() != "") {
			$("#dataformInput" + Type).css("display", "none");
			$("#dataInputGrid" + Type).css("display", "block");
			$("#dataInputButtons" + Type).css("display", "block");

			var localdata = [];
			var dataIput = $('#data-input-' + Type).val()
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
			$("#dataInputGrid" + Type).jqxGrid(
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

	getAuditGridSource(stiSubGroupValue);
	$('#' + Type + 'AuditGrid').jqxGrid(
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

	$("#delete" + Type).click(function() {
		if (stiSubGroupValue == 1)
			value = "Asia";
		else if (stiSubGroupValue == 2)
			value = "Wall Street";
		else if (stiSubGroupValue == 3)
			value = "Europe";
		else if (stiSubGroupValue == 4)
			value = "Emerging";
		else if (stiSubGroupValue == 5)
			value = "Cryptos";
		$('#alertDeleteDataByDate-modal').modal('show');
		date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
		$("#alertTextDeleteDataByDate").empty();
		$("#alertTextDeleteDataByDate").append("<p> Are you sure you want to Delete all " + value + " record for the date '" + date + "'?</p>");
	});
	$("#load" + Type).click(function() {
		var date = new Date();
		var dataToBeInserted = [];

		var rows = $("#dataInputGrid" + Type).jqxGrid('getrows');
		var allObjects = [];
		var rows = $("#dataInputGrid" + Type).jqxGrid('getrows');

		for (var i = 0; i < rows.length; i++) {

			for (var k = 0; k < dataInputGridFields.length; k++) {
				var propertyName = dataInputGridFields[k].name;

				allObjects.push([String(k + 1), rows[i][propertyName]]);

			}
		}

		for (i = 0; i < allObjects.length; i++) {

			var value = eval(allObjects[i]);
			dataToBeInserted.push({
				"subgroupId": value[0],
				"value": value[1].replace(',', ''),
				"referDate": $.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
			});
		}

		if ($("#dateInput").jqxDateTimeInput('getDate') < date) {
			var today = $("#dateInput").jqxDateTimeInput('getDate');
			if (today.getDay() == 6 || today.getDay() == 0) {
				$('#alert-modal-weekend').modal('show');
				return;
			}
			today = $.jqx.dataFormat.formatdate(today, 'dd-MM-yyyy')
			$.ajax({
				contentType: "application/json",
				url: '/sti/check-if-fxcds-has-data/' + today,
				dataType: 'json',
				async: true,
				cache: false,
				timeout: 600000,
				success: function(response) {
					if(stiSubGroupValue==2 || stiSubGroupValue==5)
					response=true;
					
					if (response) {
					$.ajax({
						contentType: "application/json",
						url: checkifcanUrl + today,
						dataType: 'json',
						async: true,
						cache: false,
						timeout: 600000,
						success: function(response) {
							if (response) {
						$.ajax({
							contentType: "application/json",
							url: "/process/isrobottriggered/7/" + getGroupId(stiSubGroupValue),
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


											getFilterData(stiSubGroupValue);
											if (stiSubGroupValue == 1)
												inputDataAsia.value = "";
											else if (stiSubGroupValue == 2)
												inputDataWallStreet.value = "";
											else if (stiSubGroupValue == 3)
												inputDataEurope.value = "";
											else if (stiSubGroupValue == 4)
												inputDataEmerging.value = "";
											else if (stiSubGroupValue == 5)
												inputDataCryptos.value = "";
												
											$("#dataformInput" + Type).css("display", "block");
											$("#dataInputButtons" + Type).css("display", "none");
											$("#dataInputGrid" + Type).css("display", "none");
											
											$('#dateInputAudit').jqxDateTimeInput('setDate', $("#dateInput").jqxDateTimeInput('getDate'));
											date = $.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')

											filterDate = date;
											delete auditGridSource.localdata;
											auditGridSource.url = auditUrl + date;
											dataAdapter = new $.jqx.dataAdapter(auditGridSource);
											$('#' + Type + 'AuditGrid').jqxGrid({ source: dataAdapter });
											
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
						$('#alert-modal-fx').modal('show');
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