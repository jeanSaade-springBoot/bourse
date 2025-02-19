var selectedRow = this;
var monthDate = new Date();
monthDate.setMonth(monthDate.getMonth() - 6);
var auditUrl;
var updateUrl;
var saveUrl;
var deleteUrl;
var checkifcanUrl;
		
var BitcoinItem = [
	'#jqxCheckBox-71-7',
	'#jqxCheckBox-71-3',
	'#jqxCheckBox-71-4',
	'#jqxCheckBox-71-8',
	'#jqxCheckBox-71-5',
	'#jqxCheckBox-71-6',
];

var EthereumItem = [
	'#jqxCheckBox-72-7',
	'#jqxCheckBox-72-3',
	'#jqxCheckBox-72-4',
	'#jqxCheckBox-72-8',
	'#jqxCheckBox-72-5',
	'#jqxCheckBox-72-6',
];
var SolanaItem = [
	'#jqxCheckBox-73-7',
	'#jqxCheckBox-73-3',
	'#jqxCheckBox-73-4',
	'#jqxCheckBox-73-8',
	'#jqxCheckBox-73-5',
	'#jqxCheckBox-73-6',
];
var ShibaItem = [
	'#jqxCheckBox-74-7',
	'#jqxCheckBox-74-3',
	'#jqxCheckBox-74-4',
	'#jqxCheckBox-74-8',
	'#jqxCheckBox-74-5',
	'#jqxCheckBox-74-6',
];
var BinanceItem = [
	'#jqxCheckBox-75-7',
	'#jqxCheckBox-75-3',
	'#jqxCheckBox-75-4',
	'#jqxCheckBox-75-8',
	'#jqxCheckBox-75-5',
	'#jqxCheckBox-75-6',
];
var XrpItem = [
'#jqxCheckBox-76-7',
	'#jqxCheckBox-76-3',
	'#jqxCheckBox-76-4',
	'#jqxCheckBox-76-8',
	'#jqxCheckBox-76-5',
	'#jqxCheckBox-76-6',
	];
 const subgrouId_description =  [
	 		    { name: 'Openeur', subgroupId: 1 ,dbName: 'openeur' },
                { name: 'Closeeur', subgroupId: 2 ,dbName: 'closeeur'},
                { name: 'High', subgroupId: 3 ,dbName: 'high'},
                { name: 'Low', subgroupId: 4 ,dbName: 'low'},
                { name: 'Volume', subgroupId: 5 ,dbName: 'volume'},
                { name: 'Marketcap', subgroupId: 6 ,dbName: 'marketcap'},
                { name: 'Openint', subgroupId: 7 ,dbName: 'openint'},
                { name: 'Closeint', subgroupId: 8 ,dbName: 'closeint' },
                ];
var AuditDefaultData = [];

var source;
var inputDataBitcoin = document.getElementById("data-input-Bitcoin");
var inputDataEthereum = document.getElementById("data-input-Ethereum");
var inputDataSolana = document.getElementById("data-input-Solana");
var inputDataShiba = document.getElementById("data-input-Shiba");
var inputDataBinance = document.getElementById("data-input-Binance");
var inputDataXrp = document.getElementById("data-input-Xrp");

var Type;

const crySubGroupValue = $("#crySubGroup")[0].innerText;
const groupId=getGroupId(crySubGroupValue);

checkifcanUrl = "/cryptos/checkifcansave/" + getGroupId(crySubGroupValue) + "/";

saveUrl = "/cryptos/save-cryptos-data";

deleteUrl = "/cryptos/delete-cryptos/"+getGroupId(crySubGroupValue)+"/" ;
auditUrl = '/cryptos/cryptos-four-hours-data/'+getGroupId(crySubGroupValue)+"/" ;

if (crySubGroupValue == 1) {
	Type = "Bitcoin";
	updateUrl = "/cryptos/update-bitcoin-data-four-hours";
}
else if (crySubGroupValue == 2) {
	Type = "Ethereum";
	updateUrl = "/cryptos/update-ethereum-data-four-hours";
}
else if (crySubGroupValue == 3) {
	Type = "Solana";
	updateUrl = "/cryptos/update-solana-data-four-hours";
}
else if (crySubGroupValue == 4) {
	Type = "Shiba";
	updateUrl = "/cryptos/update-shiba-data-four-hours";
} 
else if (crySubGroupValue == 5) {
	Type = "Binance";
	updateUrl = "/cryptos/update-binance-data-four-hours";
} 
else if (crySubGroupValue == 6) {
	Type = "Xrp";
	updateUrl = "/cryptos/update-xrp-data-four-hours";
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

	if (crySubGroupValue == 1) {
		$("#Bitcoin-btn").addClass('active');
	} else
		if (crySubGroupValue == 2) {
			$("#Ethereum-btn").addClass('active');
		} else
			if (crySubGroupValue == 3) {
				$("#Solana-btn").addClass('active');
			} else
				if (crySubGroupValue == 4) {
					$("#Shiba-btn").addClass('active');
				} else
					if (crySubGroupValue == 5) {
						$("#Binance-btn").addClass('active');
					} else
						if (crySubGroupValue == 6) {
							$("#Xrp-btn").addClass('active');
						}

	renderSubGroup(crySubGroupValue);

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
			{ name: 'start_time', type: 'date' },
			{name: 'openeur-71', 'type': 'float' },
			{name: 'closeeur-71', 'type': 'float' },
			{name: 'high-71', 'type': 'float' },
			{name: 'low-71', 'type': 'float' },
			{name: 'volume-71', 'type': 'float' },
			{name: 'marketcap-71', 'type': 'float' },
			{name: 'openint-71', 'type': 'float' },
			{name: 'closeint-71', 'type': 'float' },
			{name: 'openeur-72', 'type': 'float' },
			{name: 'closeeur-72', 'type': 'float' },
			{name: 'high-72', 'type': 'float' },
			{name: 'low-72', 'type': 'float' },
			{name: 'volume-72', 'type': 'float' },
			{name: 'marketcap-72', 'type': 'float' },
			{name: 'openint-72', 'type': 'float' },
			{name: 'closeint-72', 'type': 'float' },
			{name: 'openeur-73', 'type': 'float' },
			{name: 'closeeur-73', 'type': 'float' },
			{name: 'high-73', 'type': 'float' },
			{name: 'low-73', 'type': 'float' },
			{name: 'volume-73', 'type': 'float' },
			{name: 'marketcap-73', 'type': 'float' },
			{name: 'openint-73', 'type': 'float' },
			{name: 'closeint-73', 'type': 'float' },
			{name: 'openeur-74', 'type': 'float' },
			{name: 'closeeur-74', 'type': 'float' },
			{name: 'high-74', 'type': 'float' },
			{name: 'low-74', 'type': 'float' },
			{name: 'volume-74', 'type': 'float' },
			{name: 'marketcap-74', 'type': 'float' },
			{name: 'openint-74', 'type': 'float' },
			{name: 'closeint-74', 'type': 'float' },
			{name: 'openeur-75', 'type': 'float' },
			{name: 'closeeur-75', 'type': 'float' },
			{name: 'high-75', 'type': 'float' },
			{name: 'low-75', 'type': 'float' },
			{name: 'volume-75', 'type': 'float' },
			{name: 'marketcap-75', 'type': 'float' },
			{name: 'openint-75', 'type': 'float' },
			{name: 'closeint-75', 'type': 'float' },
			{name: 'openeur-76', 'type': 'float' },
			{name: 'closeeur-76', 'type': 'float' },
			{name: 'high-76', 'type': 'float' },
			{name: 'low-76', 'type': 'float' },
			{name: 'volume-76', 'type': 'float' },
			{name: 'marketcap-76', 'type': 'float' },
			{name: 'openint-76', 'type': 'float' },
			{name: 'closeint-76', 'type': 'float' },
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
	getFilterHistory(crySubGroupValue);

	$("#grid").jqxGrid('showloadelement');

	getFilterData(crySubGroupValue);

	$('#dateInputAudit').on('change', function(event) {
		date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'yyyy-MM-dd HH:mm:ss')
		filterDate = date;
		
		const baseDate = new Date(date);
        const baseTime = baseDate.getHours(); // Extract the hour (e.g., 8 for "08:00")

        // Call the function to set the active button based on the fetched date
        activateButton(baseTime);
        
		delete auditGridSource.localdata;
		auditGridSource.url = auditUrl + date;
		dataAdapter = new $.jqx.dataAdapter(auditGridSource);
		$('#' + Type + 'AuditGrid').jqxGrid({ source: dataAdapter });

	});

	$("#filter").click(function() {

		getFilterData(crySubGroupValue);
	});
});// end document ready
$("#Clearfilter").click(function() {
	if (crySubGroupValue == 1) {
		for (i = 0; i < BitcoinItem.length; i++) {
			$(BitcoinItem[i]).jqxCheckBox({ checked: false });
		}
	}
	else if (crySubGroupValue == 2) {
		for (i = 0; i < EthereumItem.length; i++) {
			$(EthereumItem[i]).jqxCheckBox({ checked: false });
		}
	}
	else if (crySubGroupValue == 3) {
		for (i = 0; i < SolanaItem.length; i++) {
			$(SolanaItem[i]).jqxCheckBox({ checked: false });
		}
	}
	else if (crySubGroupValue == 4) {
		for (i = 0; i < ShibaItem.length; i++) {
			$(ShibaItem[i]).jqxCheckBox({ checked: false });
		}
	}else if (crySubGroupValue == 5) {
		for (i = 0; i < BinanceItem.length; i++) {
			$(BinanceItem[i]).jqxCheckBox({ checked: false });
		}
	}
	else if (crySubGroupValue == 6) {
		for (i = 0; i < XrpItem.length; i++) {
			$(XrpItem[i]).jqxCheckBox({ checked: false });
		}
	}
	
});
function Edit(row, event) {

	isedit = true;
	var data = $('#' + Type + 'AuditGrid').jqxGrid('getrowdata', row);
	oldDataJson = {
			"openeur": data.openeur,
			"closeeur": data.closeeur,
			"high": data.high,
			"low": data.low,
			"volume": data.volume,
			"marketcap": data.marketcap,
			"openint": data.openint,
			"closeint": data.closeint
		};
	
	
	selectedRow.editrow = row;
	date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'yyyy-MM-dd HH:mm:ss');
	
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
	var updatedData = $('#' + Type + 'AuditGrid').jqxGrid('getrowdata', row);
	selectedRow.editrow = -1;
	$('#' + Type + 'AuditGrid').jqxGrid('endrowedit', row);
	var updatedData = $('#' + Type + 'AuditGrid').jqxGrid('getrowdata', row);
	 dataToBeUpdated = {
			"openeur": updatedData.openeur,
			"closeeur": updatedData.closeeur,
			"high": updatedData.high,
			"low": updatedData.low,
			"volume": updatedData.volume,
			"marketcap": updatedData.marketcap,
			"openint": updatedData.openint,
			"closeint": updatedData.closeint,
			"startTime": date
		};
		
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
			
			getFilterData(crySubGroupValue);
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
					if (response) {
						delete auditGridSource.localdata;
						auditGridSource.url = auditUrl + date;
						dataAdapter = new $.jqx.dataAdapter(auditGridSource);
						$('#' + Type + 'AuditGrid').jqxGrid({ source: dataAdapter });
					
					}
					else {
						getAuditGridSource(crySubGroupValue);
					}
				},
				error: function(e) {
					console.log(e);
				}
			});
			getFilterData(crySubGroupValue);
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

function getAuditGridSource(crySubGroupValue) {

	latestUrl = '/cryptos/getlatest-four-hours-data/' + groupId;
	$.ajax({
		contentType: "application/json",
		url: latestUrl,
		dataType: 'text',
		async: true,
		cache: false,
		timeout: 600000,
		success: function(response) {
			if (response != '') {
				$('#dateInputAudit').jqxDateTimeInput('setDate', new Date(response));
				date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'yyyy-MM-dd HH:mm:ss');

				var dbDate = new Date(response.split("-")[1] + "," + response.split("-")[2] + "," + response.split("-")[0]);
				var systemDate = new Date();
				systemDate.setHours(0, 0, 0, 0);

				if (dbDate.toDateString() == systemDate.toDateString()) {
					filterDate = date;
					delete auditGridSource.localdata;
					auditGridSource.url = auditUrl + response;
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
function getSubgroupDbName(subgroupId) {
    const matchingObject = subgrouId_description.find(item => item.subgroupId === subgroupId);
    return matchingObject ? matchingObject.dbName : null;
}
function getFilterData(crySubGroupValue) {
	var SelectedSearchDTO = [];
	var allItems = 0;
	var checkedItem = [];
	var json;
	var values = [];
	$('#grid').jqxGrid({ showdefaultloadelement: true });
	var item = 0;
	if (crySubGroupValue == 1) {
		items = BitcoinItem;
	} else if (crySubGroupValue == 2) {
		items = EthereumItem;
	}else if (crySubGroupValue == 3) {
		items = SolanaItem;
	}else if (crySubGroupValue == 4) {
		items = ShibaItem;
	}else if (crySubGroupValue == 5) {
		items = BinanceItem;
	}else if (crySubGroupValue == 6) {
		items = XrpItem;
	}
	for (i = 0; i < items.length; i++) {
	         		if($(items[i]).jqxCheckBox('checked'))
	         		{		
	         		  //  values.push(items[i].split("Box")[1].toUpperCase());	
	         		    values.push(getSubgroupDbName(+items[i].split("Box")[1].toUpperCase().split('-')[2])
	         		  				 +"-"+items[i].split("Box")[1].toUpperCase().split('-')[1]);	

	          			item=1;
	          			allItems=allItems+1;
	          			checkedItem.push(items[i]);
	         		}
	          	}
	  	if(item!=0)
	  	{
	  		SelectedSearchDTO.push({
	  		   "groupId":getGroupId(crySubGroupValue),
			   "selectedValues":values,
			});
	  		 values=[];
	  	}
		var fromDate = $("#dateInputFrom").jqxDateTimeInput('getDate');
		fromDate.setHours(0, 0, 0, 0);  // Set the time to 00:00:00
		
		// Get the date from the 'to' input and set time to 23:59:59
		var toDate = $("#dateInputTo").jqxDateTimeInput('getDate');
		toDate.setHours(23, 59, 59, 999);  // Set the time to 23:59:59
		
		// Format both dates to the desired format (yyyy-MM-dd) for your request
		var formattedFromDate = $.jqx.dataFormat.formatdate(fromDate, 'yyyy-MM-dd HH:mm:ss');
		var formattedToDate = $.jqx.dataFormat.formatdate(toDate, 'yyyy-MM-dd HH:mm:ss');

	if (allItems != 0) {
		json = {
			"selectedSearchDTOlst": SelectedSearchDTO,
			"fromDate":formattedFromDate,
			"toDate": formattedToDate
		};

		if (allItems <= 15) {
			$.ajax({
				type: "POST",
				contentType: "application/json",
				url: "/cryptos/getgriddata-four-hours-data",
				data: JSON.stringify(json),
				dataType: 'json',
				async: true,
				cache: false,
				timeout: 600000,
				success: function(data) {
					delete source.url;
					data.rows.forEach(row => {
					    row.start_time = convertToLocalTime(row.start_time);
					});
					source.localdata = data.rows;
					dataAdapter = new $.jqx.dataAdapter(source);
					$('#grid').jqxGrid('hideloadelement');

					for (i = 0; i < data.columns.length; i++) {
						if (data.columns[i].datafield == "start_time") {
							data.columns[i].cellsformat = 'dd-MMM-yy HH:mm';
							break;
						}
					}
					updateMarketCapColumn(data.columns);
					$('#grid').jqxGrid({
						width: data.columns.length > 12 ? '100%' : data.columns.length*110,
						source: dataAdapter,
						columns: data.columns
					});

					saveFilterHistory(crySubGroupValue, checkedItem);
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
		url: "/robot/callrobotsasync/11/" + getGroupId(crySubGroupValue),
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

	location.href = "/bourse/cryptosFourHoursInterval?cryptos=" + divNum;
}

function toggleDivVisibilityData(divNum) {
    if(divNum==1)
		location.href = "/bourse/cryptos?cryptos=1";
		else 
		location.href = "/bourse/cryptosFourHoursInterval?cryptos=1";
}

function renderSubGroup(crySubGroupValue) {

		if (crySubGroupValue == 1) {
			inputDataType = inputDataBitcoin;
			items = BitcoinItem;
		}
		else if (crySubGroupValue == 2) {
			inputDataType = inputDataEthereum;
			items = EthereumItem;
		}
		else if (crySubGroupValue == 3) {
			inputDataType = inputDataSolana;
			items = SolanaItem;
		}
		else if (crySubGroupValue == 4) {
			inputDataType = inputDataShiba;
			items = ShibaItem;
		}
		else if (crySubGroupValue == 5) {
			inputDataType = inputDataBinance;
			items = BinanceItem;
		} else if (crySubGroupValue == 6) {
			inputDataType = inputDataXrp;
			items = XrpItem;
		}
		var dataInputGridFields = [
			{ name: 'openint', type: 'string' },
			{ name: 'high', type: 'string' },
			{ name: 'low', type: 'string' },
			{ name: 'closeint', type: 'string' },
			{ name: 'volume', type: 'string' },
			{ name: 'marketcap', type: 'string' },
			{ name: 'openeur', type: 'string' },
			{ name: 'closeeur', type: 'string' },


		];
		var totalFields = dataInputGridFields.length;
		var widthPercentage = 100/totalFields;

		var dataInputGridColumns = [
			{
				text: 'Openint', datafield: 'openint', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'High', datafield: 'high', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'Low', datafield: 'low', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'Closeint', datafield: 'closeint', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'Volume', datafield: 'volume', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'Marketcap', datafield: 'marketcap', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'Openeur', datafield: 'openeur', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
			{
				text: 'Closeeur', datafield: 'closeeur', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			},
		];
		var defaultData = AuditDefaultData;
		
		var fields = [
			{ name: 'openint', type: 'string' },
			{ name: 'high', type: 'string' },
			{ name: 'low', type: 'string' },
			{ name: 'closeint', type: 'string' },
			{ name: 'volume', type: 'string' },
			{ name: 'marketcap', type: 'string' },
			{ name: 'openeur', type: 'string' },
			{ name: 'closeeur', type: 'string' },
		];
		var totalFields = fields.length;
		var widthPercentage = (100 - 10)/totalFields;
		var arrayOFcolumns = [
			{
				text: '', editable: false, datafield: 'Edit', width: '10%', cellsrenderer: function(row) {
					return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit" + row + "\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons" + row + "\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
				}
			},
			{ text: 'Openint', datafield: 'openint', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'High', datafield: 'high', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Low', datafield: 'low', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Closeint', datafield: 'closeint', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Volume', datafield: 'volume', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Marketcap', datafield: 'marketcap', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Openeur', datafield: 'openeur', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			{ text: 'Closeeur', datafield: 'closeeur', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
			];

	initiate(Type, inputDataType, items, dataInputGridFields, dataInputGridColumns, defaultData, fields, arrayOFcolumns);

}
function saveFilterHistory(crySubGroupValue, checkedItem) {


	var filterHistory = {
		"filterHistory": checkedItem.toString(),
		"screenName": "DATABASE_INPUT_SCREEN_CRYPTOS-" + getGroupId(crySubGroupValue)
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
function getFilterHistory(crySubGroupValue) {

	$.ajax({
		contentType: "application/json; charset=utf-8",
		url: "/bourse/getdataentryfilterhistory/" + "DATABASE_INPUT_SCREEN_CRYPTOS-" + getGroupId(crySubGroupValue),
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
				if (crySubGroupValue == 1)
					for (i = 0; i < BitcoinItem.length; i++) {
						$(BitcoinItem[i]).jqxCheckBox({ checked: true });
					}
				else if (crySubGroupValue == 2)
					for (i = 0; i < EthereumItem.length; i++) {
						$(EthereumItem[i]).jqxCheckBox({ checked: true });
					}
					else if (crySubGroupValue == 3)
					for (i = 0; i < SolanaItem.length; i++) {
						$(SolanaItem[i]).jqxCheckBox({ checked: true });
					}
					else if (crySubGroupValue == 4)
					for (i = 0; i < ShibaItem.length; i++) {
						$(ShibaItem[i]).jqxCheckBox({ checked: true });
					}
					else if (crySubGroupValue == 5)
					for (i = 0; i < BinanceItem.length; i++) {
						$(BinanceItem[i]).jqxCheckBox({ checked: true });
					}
					else if (crySubGroupValue == 6)
					for (i = 0; i < XrpItem.length; i++) {
						$(XrpItem[i]).jqxCheckBox({ checked: true });
					}
			}
		},
		error: function(e) {

			console.log("ERROR : ", e);

		}
	});
}

function getGroupId(crySubGroupValue) {
	var groupId = '';
	switch (crySubGroupValue) {

		case '1':
			groupId = '71'
			break;
		case '2':
			groupId = '72'
			break;
		case '3':
			groupId = '73'
			break;
		case '4':
			groupId = '74'
			break;
		case '5':
			groupId = '75'
			break;
		case '6':
			groupId = '76'
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

	getAuditGridSource(crySubGroupValue);
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
		if (crySubGroupValue == 1)
			value = "Bitcoin";
		else if (crySubGroupValue == 2)
			value = "Wall Street";
		else if (crySubGroupValue == 3)
			value = "Solana";
		else if (crySubGroupValue == 4)
			value = "Shiba";
		else if (crySubGroupValue == 5)
			value = "Binance";
		else if (crySubGroupValue == 6)
			value = "Xrp";
			
		$('#alertDeleteDataByDate-modal').modal('show');
		date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'yyyy-MM-dd HH:mm:ss');
		
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

				allObjects.push([String(subgrouId_description.filter(obj => obj.dbName === propertyName)[0].subgroupId), rows[i][propertyName]]);

			}
		}

		for (i = 0; i < allObjects.length; i++) {

			var value = eval(allObjects[i]);
			dataToBeInserted.push({
				"groupId": groupId,
				"subgroupId": value[0],
				"value":  value[1].replaceAll(',', ''),
				"referDate": $.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
			});
		}

		if ($("#dateInput").jqxDateTimeInput('getDate') < date) {
			var today = $("#dateInput").jqxDateTimeInput('getDate');
			
			today = $.jqx.dataFormat.formatdate(today, 'dd-MM-yyyy')
			$.ajax({
				contentType: "application/json",
				url: '/cryptos/checkifcansave/'+getGroupId(crySubGroupValue)+'/' + today,
				dataType: 'json',
				async: true,
				cache: false,
				timeout: 600000,
				success: function(response) {
					
					
							if (!response) {
						$.ajax({
							contentType: "application/json",
							url: "/process/isrobottriggered/11/" + getGroupId(crySubGroupValue),
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


											getFilterData(crySubGroupValue);
											if (crySubGroupValue == 1)
												inputDataBitcoin.value = "";
											else if (crySubGroupValue == 2)
												inputDataEthereum.value = "";
											else if (crySubGroupValue == 3)
												inputDataSolana.value = "";
											else if (crySubGroupValue == 4)
												inputDataShiba.value = "";
											else if (crySubGroupValue == 5)
												inputDataBinance.value = "";
											else if (crySubGroupValue == 6)
												inputDataXrp.value = "";
												
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
						$('#alert-modal-cryptos').modal('show');
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
    function activateButton(hour) {
        // Remove active class from all buttons
         const buttonGroup = document.getElementById("btn-time-options");

	    // Remove the active class from all buttons within this specific group
	    buttonGroup.querySelectorAll('.btn').forEach(btn => {
	        btn.classList.remove('active');
	    });


        // Add active class to the button corresponding to the fetched hour
        document.getElementById(`${hour < 10 ? '0' + hour : hour}-btn`).classList.add('active');
    }
   function toggleTimeData(hour) {
        // Fetch the data for the clicked time (you can replace this with an actual database call)
        const updatedDate = new Date(date);
        updatedDate.setHours(hour, 0, 0, 0); // Set the clicked hour and reset minutes, seconds, milliseconds

        // Update the jqxDateTimeInput widget with the new date (with updated hour)
        $('#dateInputAudit').jqxDateTimeInput('setDate', updatedDate);

        // Update the button UI to reflect the active time
        activateButton(hour);
    }
    
    function convertToLocalTime(datetimeStr) {
    // Remove milliseconds (.0) if present
    let cleanDateTimeStr = datetimeStr.replace(".0", "");

    // Convert to a JavaScript Date object (assuming UTC)
    let utcDate = new Date(cleanDateTimeStr + " UTC");

    // Convert to local time string
    return utcDate.toLocaleString();  // Adjusts to user's local timezone
}
function updateMarketCapColumn(columns) {
    // Find index of "marketCap" column
    let index = columns.findIndex(col => col.datafield === 'marketcap-'+groupId);

    if (index !== -1) {
        // If "marketCap" column exists, replace it with formatted version
        columns[index] = {
            text: columns[index].text,
            datafield: 'marketcap-'+groupId,
            cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
                // Check if value is at least 1 billion
                if (value >= 1e9) {
                    const inBillions = value / 1e9;
                    const formatted = formatNumberWithCommas(inBillions); // Format with commas
                    return `<div style="margin:4px;">${formatted}B</div>`;
                } else {
                    return `<div style="margin:4px;">${formatNumberWithCommas(value)}</div>`; // Keep original with commas
                }
            }
        };
    }
       let indexVolume = columns.findIndex(col => col.datafield === 'volume-'+groupId);

    if (indexVolume !== -1) {
        // If "marketCap" column exists, replace it with formatted version
        columns[indexVolume] = {
            text: columns[indexVolume].text,
            datafield: 'volume-'+groupId,
            cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
                // Check if value is at least 1 billion
                if (value >= 1e9) {
                    const inBillions = value / 1e9;
                    const formatted = formatNumberWithCommas(inBillions); // Format with commas
                    return `<div style="margin:4px;">${formatted}B</div>`;
                } else {
                    return `<div style="margin:4px;">${formatNumberWithCommas(value)}</div>`; // Keep original with commas
                }
            }
        };
    }
}
function formatNumberWithCommas(num) {
    return num.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}