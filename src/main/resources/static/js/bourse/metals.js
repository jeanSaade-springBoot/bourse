var selectedRow = this;
var monthDate = new Date();
monthDate.setMonth(monthDate.getMonth() - 6);
var allitems = ["#jqxCheckBox-6-1",
	"#jqxCheckBoxPlatinum",
	"#jqxCheckBox-6-2",
	"#jqxCheckBoxPlatGold",
	"#jqxCheckBoxGoldSilv",
	"#jqxCheckBoxCopper",
	"#jqxCheckBoxAluminum",
	"#jqxCheckBoxSteel",
	"#jqxCheckBoxLumber",
	"jqxCheckBoxBaltic",
	"jqxCheckBoxContainer"];
var metalsPreciousItem = [
	"#jqxCheckBoxOpenGold",
	"#jqxCheckBoxHighGold",
	"#jqxCheckBoxLowGold",
	"#jqxCheckBoxCloseGold",
	"#jqxCheckBoxPlatinum",
	"#jqxCheckBoxOpenSilver",
	"#jqxCheckBoxHighSilver",
	"#jqxCheckBoxLowSilver",
	"#jqxCheckBoxCloseSilver",
	"#jqxCheckBoxPlatGold",
	"#jqxCheckBoxGoldSilv"];
var metalsBaseItem = [
	"#jqxCheckBoxCopper",
	"#jqxCheckBoxAluminum",
	"#jqxCheckBoxSteel",
	"#jqxCheckBoxLumber"];
var foodStuffItem = [
	"#jqxCheckBoxCorn",
	"#jqxCheckBoxSugar",
	"#jqxCheckBoxWheat"];
var energyItem = [
	"#jqxCheckBoxOil",
	"#jqxCheckBoxGASOLINE_GALL",
	"#jqxCheckBoxGASOLINE_LITRE",
	"#jqxCheckBoxDIESEL_GALL",
	"#jqxCheckBoxDIESEL_TON",
	"#jqxCheckBoxNATGAS_USD",
	"#jqxCheckBoxNATGAS_EUR",
	"#jqxCheckBoxBrent_oil",];
var transportationItem = ["#jqxCheckBoxBaltic",
	"#jqxCheckBoxContainer"];


function cleanValue(val) {
    return (val || "").toString().replaceAll(',', '');
}
const GROUP_CONFIG = {
	precious: {
		key: "precious",
		api: {
			latest: "/metals/getlatestprecious",
			check: "/metals/checkifcansaveprecious/",
			save: "/metals/savepreciousdata",
			update: "/metals/updatepreciousauditdata",
			delete: "/metals/deletepreciousbyreferdate/",
			robot: "/process/isrobottriggered/2/6",
			audit: "/metals/getpreciousauditdata/"
		},
		items: metalsPreciousItem,
		inputs: {
	        gold: "#gold-input",
	        silver: "#silver-input",
	        platinum: "#platinum-input"
	    },
	    grids: {
	        gold: "#goldGrid",
	        silver: "#silverGrid",
	        platinum: "#platinumGrid"
	    },
	    fieldGroups: {
	        gold: ["openGold","highGold","lowGold","closeGold"],
	        silver: ["openSilver","highSilver","lowSilver","closeSilver"],
	        platinum: ["platinum"]
	    },
		auditFields:  ["openGold", "highGold", "lowGold","closeGold",
		 "openSilver","highSilver", "lowSilver" ,"closeSilver", 
		 "platinum"],
		auditSource:{
		    localdata:  [],
		    datatype: "json",
		    datafields: [
		        { name: 'openGold', type: 'string' },
		        { name: 'highGold', type: 'string' },
		        { name: 'lowGold', type: 'string' },
		        { name: 'closeGold', type: 'string' },
		        { name: 'platinum', type: 'string' },
		        { name: 'openSilver', type: 'string' },
		        { name: 'highSilver', type: 'string' },
		        { name: 'lowSilver', type: 'string' },
		        { name: 'closeSilver', type: 'string' },
		        { name: 'platinum_GOLD', type: 'string' },
		        { name: 'gold_SILVER', type: 'string' }
		    ],
		    url: ''
		},
		deleteBtn: "#deletepreciousByDate",
		cancelBtn: {
			gold: "#cancelGold",
	        silver: "#cancelSilver",
	        platinum: "#cancelPlatinum"
	        },
		loadBtn: {
			gold: "#loadGold",
	        silver: "#loadSilver",
	        platinum: "#loadPlatinum"
	        },
		editPrefix: "edit",
		actionPrefix: "actionButtons",
		auditGrid: "#preciousAuditGrid",
		refreshAudit: () => getAuditGridSource("precious"),
		getInput: () => document.getElementById("precious-input"),
		form: {
			gold: "#goldformInput",
	        silver: "#silverformInput",
	        platinum: "#platinumformInput"
	        }, 
		buttons: {
		    gold: "#dataInputButtonsGold",
		    silver: "#dataInputButtonsSilver",
		    platinum: "#dataInputButtonsPlatinum"
		},
		gridContainer: "#dataInputGrid",
		buildUpdatePayload: function(rowData) {

			return [{
				subgroupId: "1",
				value: cleanValue(rowData.closeGold),
				referdate: date
			},
			{
				subgroupId: "2",
				value: cleanValue(rowData.closeSilver),
				referdate: date
			},
			{
				subgroupId: "3",
				value: cleanValue(rowData.platinum),
				referdate: date
			},
			{
				subgroupId: "6",
				value: cleanValue(rowData.openGold),
				referdate: date
			},
			{
				subgroupId: "7",
				value: cleanValue(rowData.highGold),
				referdate: date
			},
			{
				subgroupId: "8",
				value: cleanValue(rowData.lowGold),
				referdate: date
			},
			{
				subgroupId: "9",
				value: cleanValue(rowData.openSilver),
				referdate: date
			},
			{
				subgroupId: "10",
				value: cleanValue(rowData.highSilver),
				referdate: date
			},
			{
				subgroupId: "11",
				value: cleanValue(rowData.lowSilver),
				referdate: date
			}
			];
		},

		afterUpdate: function(rowData) {
		
		    var keys = [
		        "openGold", "highGold", "lowGold", "closeGold",
		        "openSilver", "highSilver", "lowSilver", "closeSilver",
		        "platinum"
		    ];
		
		    const fieldToColumn = {
		        openGold: "OPEN_GOLD",
		        highGold: "HIGH_GOLD",
		        lowGold: "LOW_GOLD",
		        closeGold: "CLOSE_GOLD",
		
		        openSilver: "OPEN_SILVER",
		        highSilver: "HIGH_SILVER",
		        lowSilver: "LOW_SILVER",
		        closeSilver: "CLOSE_SILVER",
		
		        platinum: "PLATINUM"
		    };
		
		    var updatedMetalsJson = [];
		
		    // detect changed fields
		    for (let i = 0; i < keys.length; i++) {
		
		        if (rowData[keys[i]] != oldDataJson[keys[i]]) {
		
		            updatedMetalsJson.push({
		                assetId: 2,
		                groupId: getGroupId(commoditySubGroupValue),
		                value: fieldToColumn[keys[i]]
		            });
		        }
		    }
		
		    // ---------------- calculated columns ----------------
		
		    function hasValue(v) {
		        return v !== null &&
		               v !== undefined &&
		               v !== "";
		    }
		
		    const goldChanged =
		        rowData.openGold != oldDataJson.openGold ||
		        rowData.highGold != oldDataJson.highGold ||
		        rowData.lowGold != oldDataJson.lowGold ||
		        rowData.closeGold != oldDataJson.closeGold;
		
		    const silverChanged =
		        rowData.openSilver != oldDataJson.openSilver ||
		        rowData.highSilver != oldDataJson.highSilver ||
		        rowData.lowSilver != oldDataJson.lowSilver ||
		        rowData.closeSilver != oldDataJson.closeSilver;
		
		    const platinumChanged =
		        rowData.platinum != oldDataJson.platinum;
		
		    // same-day values exist
		    const goldExists = hasValue(rowData.closeGold);
		    const silverExists = hasValue(rowData.closeSilver);
		    const platinumExists = hasValue(rowData.platinum);
		
		    // GOLD_SILVER robot
		    if ((goldChanged || silverChanged)
		        && goldExists
		        && silverExists) {
		
		        updatedMetalsJson.push({
		            assetId: 1,
		            groupId: getGroupId(commoditySubGroupValue),
		            value: "GOLD_SILVER"
		        });
		    }
		
		    // PLATINUM_GOLD robot
		    if ((goldChanged || platinumChanged)
		        && goldExists
		        && platinumExists) {
		
		        updatedMetalsJson.push({
		            assetId: 1,
		            groupId: getGroupId(commoditySubGroupValue),
		            value: "PLATINUM_GOLD"
		        });
		    }
		
		    console.log(updatedMetalsJson);
		
		    updateRobotNewsOnChangeColumns(updatedMetalsJson);
		
		    var auditSource = { ...GROUP_CONFIG.precious.auditSource };
		
		    delete auditSource.localdata;
		    auditSource.url = '/metals/getpreciousauditdata/' + date;
		
		    var adapter = new $.jqx.dataAdapter(auditSource);
		
		    $('#preciousAuditGrid').jqxGrid({
		        source: adapter
		    });
		
		    getFilterData(commoditySubGroupValue);
		}
	},

	base: {
		key: "base",
		api: {
			latest: "/metals/getlatestbase",
			check: "/metals/checkifcansavebase/",
			save: "/metals/savebasedata",
			update: "/metals/updatebaseauditdata",
			delete: "/metals/deletebasebyreferdate/",
			robot: "/process/isrobottriggered/2/7",
			audit: "/metals/getbaseauditdata/"
		},
		input: "#base-input",
		grid: "#baseDataInputGrid",
		items: metalsBaseItem,
		fields: ["copper", "aluminum", "steel", "lumber"],
		auditFields: ["copper", "aluminum", "steel", "lumber"],
		auditSource: {
		    localdata: [{
				"copper": "",
				"aluminum": "",
				"steel": "",
				"lumber": "",
			}],
		    datatype: "json",
		    datafields: [
		        { name: 'copper', type: 'string' },
		        { name: 'aluminum', type: 'string' },
		        { name: 'steel', type: 'string' },
		        { name: 'lumber', type: 'string' }
		    ],
		    url: ''
		},
		deleteBtn: "#deleteBaseByDate",
		cancelBtn: "#CancelBaseData",
		loadBtn: "#loadBaseData",
		auditGrid: "#baseAuditGrid",
		editPrefix: "editBase",
		actionPrefix: "actionButtonsBase",
		refreshAudit: () => getAuditGridSource("base"),
		getInput: () => document.getElementById("base-input"),
		form: "#baseDataformInput",
		buttons: "#baseDataInputButtons",
		gridContainer: "#baseDataInputGrid",
		buildUpdatePayload: function(rowData) {

			var dataToBeUpdated = [];

			dataToBeUpdated.push({
				"subgroupId": "1",
				"value": cleanValue(rowData.copper),
				"referdate": date
			});
			dataToBeUpdated.push({
				"subgroupId": "2",
				"value": cleanValue(rowData.aluminum),
				"referdate": date
			});
			dataToBeUpdated.push({
				"subgroupId": "3",
				"value": cleanValue(rowData.steel),
				"referdate": date
			});
			dataToBeUpdated.push({
				"subgroupId": "4",
				"value": cleanValue(rowData.lumber),
				"referdate": date
			});
			return dataToBeUpdated;
		},

		afterUpdate: function(rowData) {

			var updatedDataJson = {
				copper: rowData.copper,
				aluminum: rowData.aluminum,
				steel: rowData.steel,
				lumber: rowData.lumber
			};

			var keys = ["copper", "aluminum", "steel", "lumber"];
			var updatedMetalsJson = [];

			for (let i = 0; i < keys.length; i++) {
				if (updatedDataJson[keys[i]] != oldDataJson[keys[i]]) {
					updatedMetalsJson.push({
						assetId: 2,
						groupId: getGroupId(commoditySubGroupValue),
						value: keys[i].toUpperCase()
					});
				}
			}

			updateRobotNewsOnChangeColumns(updatedMetalsJson);

			var auditSource = { ...GROUP_CONFIG.base.auditSource };

			delete auditSource.localdata;;
			auditSource.url = '/metals/getbaseauditdata/' + date;

			var adapter = new $.jqx.dataAdapter(auditSource);
			$('#baseAuditGrid').jqxGrid({
				source: adapter
			});

			getFilterData(commoditySubGroupValue);
		}
	},

	foodStuff: {
		key: "foodStuff",
		api:{
			latest: "/metals/getlatestfoodstuff",
			check: "/metals/checkifcansavefoodstuff/",
			save: "/metals/savefoodstuffdata",
			update: "/metals/updatefoodstuffauditdata",
			delete: "/metals/deletefoodstuffbyreferdate/",
			robot: "/process/isrobottriggered/2/8",
			audit: "/metals/getfoodstuffauditdata/"
		},
		input: "#foodStuff-input",
		grid: "#foodStuffDataInputGrid",
		items: foodStuffItem,
		fields: ["corn", "sugar", "wheat"],
		auditFields: ["corn", "sugar", "wheat"],
		auditSource: {
		    localdata: [{
					"corn": "",
					"sugar": "",
					"wheat": ""
				}],
		    datatype: "json",
		    datafields: [
		        { name: 'corn', type: 'string' },
		        { name: 'sugar', type: 'string' },
		        { name: 'wheat', type: 'string' }
		    ],
		    url: ''
		},
		deleteBtn: "#deleteFoodStuffByDate",
		cancelBtn: "#CancelFoodStuffData",
		loadBtn: "#loadFoodStuffData",
		auditGrid: "#foodStuffAuditGrid",
		editPrefix: "editFoodstuff",
		actionPrefix: "actionButtonsFoodstuff",
		refreshAudit: () => getAuditGridSource("foodStuff"),

		getInput: () => document.getElementById("foodStuff-input"),
		form: "#foodStuffDataformInput",
		buttons: "#foodStuffDataInputButtons",
		gridContainer: "#foodStuffDataInputGrid",
		buildUpdatePayload: function(rowData) {

			return [{
				subgroupId: "1",
				value: cleanValue(rowData.corn),
				referdate: date
			},
			{
				subgroupId: "2",
				value: cleanValue(rowData.sugar),
				referdate: date
			},
			{
				subgroupId: "3",
				value: cleanValue(rowData.wheat),
				referdate: date
			},
			];
		},

		afterUpdate: function(rowData) {

			var keys = ["corn", "sugar", "wheat"];
			var updatedMetalsJson = [];

			for (let i = 0; i < keys.length; i++) {
				if (rowData[keys[i]] != oldDataJson[keys[i]]) {
					updatedMetalsJson.push({
						assetId: 3,
						groupId: getGroupId(commoditySubGroupValue),
						value: keys[i].toUpperCase()
					});
				}
			}

		    updateRobotNewsOnChangeColumns(updatedMetalsJson);
		
			var auditSource = { ...GROUP_CONFIG.foodStuff.auditSource };

			delete auditSource.localdata;;
			auditSource.url =  '/metals/getfoodstuffauditdata/' + date;

			var adapter = new $.jqx.dataAdapter(auditSource);
			$('#foodStuffAuditGrid').jqxGrid({
				source: adapter
			});

			getFilterData(commoditySubGroupValue);
		}
	},

	energy: {
		key: "energy",
		api:{
			latest: "/metals/getlatestenergy",
			check: "/metals/checkifcansaveenergy/",
			save: "/metals/saveenergydata",
			update: "/metals/updateenergyauditdata",
			delete: "/metals/deleteenergybyreferdate/",
			robot: "/process/isrobottriggered/2/9",
			audit: "/metals/getenergyauditdata/"
		},
		input: "#energy-input",
		grid: "#energyDataInputGrid",
		items: energyItem,
		fields: ["oil", "gasolineGall", "dieselGall", "natgasUsd", "natgasEur","brentOil"],
		auditFields: ["oil", "gasolineGall", "dieselGall", "natgasUsd", "natgasEur","brentOil"],
		auditSource:{
		    localdata: [{
				"oil": "",
				"gasolineGall": "",
				"dieselGall": "",
				"natgasUsd": "",
				"natgasEur": "",
				"brentOil":"",
			}],
		    datatype: "json",
		    datafields: [
		        { name: 'oil', type: 'string' },
		        { name: 'gasolineGall', type: 'string' },
		        { name: 'dieselGall', type: 'string' },
		        { name: 'natgasUsd', type: 'string' },
		        { name: 'natgasEur', type: 'string' },
		        { name: 'brentOil', type: 'string' },
		    ],
		    url: ''
		},
		deleteBtn: "#deleteEnergyByDate",
		cancelBtn: "#CancelEnergyData",
		loadBtn: "#loadEnergyData",
		auditGrid: "#energyAuditGrid",
		editPrefix: "editEnergy",
		actionPrefix: "actionButtonsEnergy",
		refreshAudit: () => getAuditGridSource("energy"),

		getInput: () => document.getElementById("energy-input"),
		form: "#energyDataformInput",
		buttons: "#energyDataInputButtons",
		gridContainer: "#energyDataInputGrid",
		buildUpdatePayload: function(rowData) {
			return [{
				subgroupId: "1",
				value: cleanValue(rowData.oil),
				referdate: date
			},
			{
				subgroupId: "2",
				value: cleanValue(rowData.gasolineGall),
				referdate: date
			},
			{
				subgroupId: "3",
				value: cleanValue(rowData.dieselGall),
				referdate: date
			},
			{
				subgroupId: "4",
				value: cleanValue(rowData.natgasUsd),
				referdate: date
			},
			{
				subgroupId: "5",
				value: cleanValue(rowData.natgasEur),
				referdate: date
			},
			{
				subgroupId: "8",
				value: cleanValue(rowData.brentOil),
				referdate: date
			}
			];
		},

		afterUpdate: function(rowData) {

			var keys = ["oil", "gasolineGall", "dieselGall", "natgasUsd", "natgasEur","brentOil"];
			var updatedMetalsJson = [];

			for (let i = 0; i < keys.length; i++) {
				if (rowData[keys[i]] != oldDataJson[keys[i]]) {
					updatedMetalsJson.push({
						assetId: 4,
						groupId: getGroupId(commoditySubGroupValue),
						value: keys[i].toUpperCase()
					});
				}
			}

			updateRobotNewsOnChangeColumns(updatedMetalsJson);

			var auditSource = { ...GROUP_CONFIG.energy.auditSource };

			delete auditSource.localdata;;
			auditSource.url =  '/metals/getenergyauditdata/' + date;

			var adapter = new $.jqx.dataAdapter(auditSource);
			$('#energyAuditGrid').jqxGrid({
				source: adapter
			});

			getFilterData(commoditySubGroupValue);
		}
	},

	transportation: {
		key: "transportation",
		api:{
			latest: "/metals/getlatesttrasnportation",
			check: "/metals/checkifcansavetransportation/",
			save: "/metals/savetransportationdata",
			update: "/metals/updatetransportationauditdata",
			delete: "/metals/deletetransportationbyreferdate/",
			robot: "/process/isrobottriggered/2/10",
			audit: "/metals/gettransportationauditdata/"
		},
		input: "#transportation-input",
		grid: "#transportationDataInputGrid",
		items: transportationItem,
		fields: ["baltic", "container"],
		auditFields: ["baltic", "container"],
		auditSource:{
		    localdata:  [{
				"baltic": "",
				"container": ""
			}],
		    datatype: "json",
		    datafields: [
		        { name: 'baltic', type: 'string' },
		        { name: 'container', type: 'string' }
		    ],
		    url: ''
		},
		deleteBtn: "#deletetransportationByDate",
		cancelBtn: "#CanceltransportationData",
		loadBtn: "#loadtransportationData",
		auditGrid: "#transportationAuditGrid",
		editPrefix: "editTransportation",
		actionPrefix: "actionButtonsTransportation",
		refreshAudit: () => getAuditGridSource("transportation"),

		getInput: () => document.getElementById("transportation-input"),
		form: "#transportationDataformInput",
		buttons: "#transportationDataInputButtons",
		gridContainer: "#transportationDataInputGrid",
		buildUpdatePayload: function(rowData) {

			return [{
				subgroupId: "1",
				value: cleanValue(rowData.baltic),
				referdate: date
			},
			{
				subgroupId: "2",
				value: cleanValue(rowData.container),
				referdate: date
			},
			];
		},

		afterUpdate: function(rowData) {

			var keys = ["baltic", "container"];
			var updatedMetalsJson = [];

			for (let i = 0; i < keys.length; i++) {
				if (rowData[keys[i]] != oldDataJson[keys[i]]) {
					updatedMetalsJson.push({
						assetId: 5,
						groupId: getGroupId(commoditySubGroupValue),
						value: keys[i].toUpperCase()
					});
				}
			}

			updateRobotNewsOnChangeColumns(updatedMetalsJson);

			var auditSource = { ...GROUP_CONFIG.transportation.auditSource };

			delete auditSource.localdata;;
			auditSource.url =  '/metals/gettransportationauditdata/' + date;

			var adapter = new $.jqx.dataAdapter(auditSource);
			$('#transportationAuditGrid').jqxGrid({
				source: adapter
			});

			getFilterData(commoditySubGroupValue);
		}
	}
};

var source;
//const inputDataPresious = document.getElementById("precious-input");
const inputGold = document.getElementById("goldInput");
const inputSilver = document.getElementById("silverInput");
const inputPlatinum = document.getElementById("platinumInput");
const inputDataBase = document.getElementById("base-input");
const inputDataFoodStuff = document.getElementById("foodStuff-input");
const inputDataEnergy = document.getElementById("energy-input");
const inputDataTransportation = document.getElementById("transportation-input");

const commoditySubGroupValue = $("#commoditySubGroup")[0].innerText;
$(document).ready(function() {
	$('#overlay').fadeOut();
	$('#container-wrapper').show();

	$("#viewall").jqxButton({ theme: 'dark', width: 110, height: 35, template: "primary" });
	$("#viewall").css("display", "block");
	$("#viewall").click(function() {
		popupWindow('/bourse/allnews', 'Libvol - View All News', window, 1300, 600);
	});
	$('[data-toggle="tooltip"]').tooltip();

	if (commoditySubGroupValue == 1) {
		$("#precious-btn").addClass('active');
	} else
		if (commoditySubGroupValue == 2) {
			$("#base-btn").addClass('active');
		} else
			if (commoditySubGroupValue == 3) {
				$("#foodStuff-btn").addClass('active');
			} else
				if (commoditySubGroupValue == 4) {
					$("#energy-btn").addClass('active');
				} else
					if (commoditySubGroupValue == 5) {
						$("#transportation-btn").addClass('active');
					}

	rendercommoditySubGroup(commoditySubGroupValue);

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
			{ name: 'CLOSE_GOLD', type: 'float' },
			{ name: 'CLOSE_SILVER', type: 'float' },
			{ name: 'OPEN_GOLD', type: 'float' },
			{ name: 'OPEN_SILVER', type: 'float' },
			{ name: 'HIGH_GOLD', type: 'float' },
			{ name: 'HIGH_SILVER', type: 'float' },
			{ name: 'LOW_GOLD', type: 'float' },
			{ name: 'LOW_SILVER', type: 'float' },
			{ name: 'PLATINUM', type: 'float' },
			{ name: 'PLATINUM_GOLD', type: 'float' },
			{ name: 'GOLD_SILVER', type: 'float' },
			{ name: 'COPPER', type: 'float' },
			{ name: 'ALUMINUM', type: 'float' },
			{ name: 'STEEL', type: 'float' },
			{ name: 'LUMBER', type: 'float' },
			{ name: 'CORN', type: 'float' },
			{ name: 'SUGAR', type: 'float' },
			{ name: 'WHEAT', type: 'float' },
			{ name: 'OIL', type: 'float' },
			{ name: 'BRENT_OIL', type: 'float' },
			{ name: 'GASOLINE_GALL', type: 'float' },
			{ name: 'DIESEL_GALL', type: 'float' },
			{ name: 'NATGAS_USD', type: 'float' },
			{ name: 'NATGAS_EUR', type: 'float' },
			{ name: 'GASOLINE_LITRE', type: 'float' },
			{ name: 'DIESEL_TON', type: 'float' },
			{ name: 'BALTIC', type: 'float' },
			{ name: 'CONTAINER', type: 'float' }
		],
		id: 'id',
		localdata: ''
	};
	$("#grid").jqxGrid(
		{
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
	getFilterHistory(commoditySubGroupValue);

	$("#grid").jqxGrid('showloadelement');

	getFilterData(commoditySubGroupValue);

	$("#CancelPreciousData").click(function() {
		inputDataPresious.value = "";
		$("#dataformInput").css("display", "block");
		$("#dataInputButtons").css("display", "none");
		$("#dataInputGrid").css("display", "none");
	});

	$("#CancelBaseData").click(function() {
		inputDataBase.value = "";
		$("#baseDataformInput").css("display", "block");
		$("#baseDataInputButtons").css("display", "none");
		$("#baseDataInputGrid").css("display", "none");
	});

	$("#CancelFoodStuffData").click(function() {
		inputDataFoodStuff.value = "";
		$("#foodStuffDataformInput").css("display", "block");
		$("#foodStuffDataInputButtons").css("display", "none");
		$("#foodStuffDataInputGrid").css("display", "none");
	});

	$("#CancelEnergyData").click(function() {
		inputDataEnergy.value = "";
		$("#energyDataformInput").css("display", "block");
		$("#energyDataInputButtons").css("display", "none");
		$("#energyDataInputGrid").css("display", "none");
	});
	$("#CanceltransportationData").click(function() {
		inputDataTransportation.value = "";
		$("#transportationDataformInput").css("display", "block");
		$("#transportationDataInputButtons").css("display", "none");
		$("#transportationDataInputGrid").css("display", "none");
	});

	$("#loadGold").click(function() {
		var date = new Date();
		var rows = $('#goldGrid').jqxGrid('getrows');

		var openObject = extractColumn(rows, 'openGold', "6");
		var highObject = extractColumn(rows, 'highGold', "7");
		var lowObject = extractColumn(rows, 'lowGold', "8");
		var closeObject = extractColumn(rows, 'closeGold', "1");
		
		var listObject = [ openObject, highObject, lowObject, closeObject];

		var dateValue = $("#dateInput").jqxDateTimeInput('getDate');
		var dataToBeInserted = buildInsertPayload(listObject, dateValue);

		executeSaveFlow("precious", dataToBeInserted);
	});

	$("#loadSilver").click(function() {
		var date = new Date();
		var rows = $('#silverGrid').jqxGrid('getrows');

		var openObject = extractColumn(rows, 'openSilver', "9");
		var highObject = extractColumn(rows, 'highSilver', "10");
		var lowObject = extractColumn(rows, 'lowSilver', "11");
		var closeObject = extractColumn(rows, 'closeSilver', "2");
		
		var listObject = [ openObject, highObject, lowObject, closeObject];

		var dateValue = $("#dateInput").jqxDateTimeInput('getDate');
		var dataToBeInserted = buildInsertPayload(listObject, dateValue);

		executeSaveFlow("precious", dataToBeInserted);
	});
	
	$("#loadPlatinum").click(function() {
		var date = new Date();
		var rows = $('#platinumGrid').jqxGrid('getrows');

		var platinumObject = extractColumn(rows, 'platinum', "3");

		var listObject = [ platinumObject];

		var dateValue = $("#dateInput").jqxDateTimeInput('getDate');
		var dataToBeInserted = buildInsertPayload(listObject, dateValue);

		executeSaveFlow("precious", dataToBeInserted);
	});
	
	$("#loadBaseData").click(function() {

		var rows = $('#baseDataInputGrid').jqxGrid('getrows');

		var listObject = [
			extractColumn(rows, 'copper', "1"),
			extractColumn(rows, 'aluminum', "2"),
			extractColumn(rows, 'steel', "3"),
			extractColumn(rows, 'lumber', "4")
		];

		var dateValue = $("#dateInput").jqxDateTimeInput('getDate');
		var dataToBeInserted = buildInsertPayload(listObject, dateValue);

		executeSaveFlow("base", dataToBeInserted);
	});
	$("#loadFoodStuffData").click(function() {

		var rows = $('#foodStuffDataInputGrid').jqxGrid('getrows');

		var cornObject = extractColumn(rows, 'corn', "1");
		var sugarObject = extractColumn(rows, 'sugar', "2");
		var wheatObject = extractColumn(rows, 'wheat', "3");

		var listObject = [cornObject, sugarObject, wheatObject];

		var dateValue = $("#dateInput").jqxDateTimeInput('getDate');
		var dataToBeInserted = buildInsertPayload(listObject, dateValue);

		executeSaveFlow("foodStuff", dataToBeInserted);
	});

	$("#loadEnergyData").click(function() {

		var rows = $('#energyDataInputGrid').jqxGrid('getrows');

		var oilObject = extractColumn(rows, 'oil', "1");
		var gazObject = extractColumn(rows, 'gasolineGall', "2");
		var diezelObject = extractColumn(rows, 'dieselGall', "3");
		var natgazUsObject = extractColumn(rows, 'natgasUsd', "4");
		var natgazEurObject = extractColumn(rows, 'natgasEur', "5");
		var brentOilObject = extractColumn(rows, 'brentOil', "8");

		var listObject = [oilObject, gazObject, diezelObject, natgazUsObject, natgazEurObject,brentOilObject];

		var dateValue = $("#dateInput").jqxDateTimeInput('getDate');
		var dataToBeInserted = buildInsertPayload(listObject, dateValue);

		executeSaveFlow("energy", dataToBeInserted);
	});

	$("#loadtransportationData").click(function() {
		var date = new Date();

		var rows = $('#transportationDataInputGrid').jqxGrid('getrows');

		var balticObject = extractColumn(rows, 'baltic', "1");
		var containerObject = extractColumn(rows, 'container', "2");

		var listObject = [balticObject, containerObject];

		var dateValue = $("#dateInput").jqxDateTimeInput('getDate');
		var dataToBeInserted = buildInsertPayload(listObject, dateValue);

		executeSaveFlow("transportation", dataToBeInserted);
	});


	$('#dateInputAudit').on('change', function() {

		var date = $.jqx.dataFormat.formatdate(
			$("#dateInputAudit").jqxDateTimeInput('getDate'),
			'dd-MM-yyyy'
		);

		filterDate = date;

		var configKey = getConfigKey(commoditySubGroupValue);
		
		var config = GROUP_CONFIG[configKey];
		var api = config.api;

		var auditSource = { ...config.auditSource };

		delete auditSource.localdata;
		auditSource.url = api.audit + date;

		var adapter = new $.jqx.dataAdapter(auditSource);
		$(config.auditGrid).jqxGrid({ source: adapter });
	});

	$("#deletepreciousByDate").click(function() {
		$('#alertDeleteDataByDate-modal').modal('show');
		date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
		$("#alertTextDeleteDataByDate").empty();
		$("#alertTextDeleteDataByDate").append("<p> Are you sure you want to Delete all Precious metals record for the date '" + date + "'?</p>");
	});

	$("#deleteBaseByDate").click(function() {
		$('#alertDeleteBaseDataByDate-modal').modal('show');
		date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
		$("#alertBaseTextDeleteDataByDate").empty();
		$("#alertBaseTextDeleteDataByDate").append("<p> Are you sure you want to Delete all Base metals record for the date '" + date + "'?</p>");
	});

	$("#deleteFoodStuffByDate").click(function() {
		$('#alertDeleteFoodStuffDataByDate-modal').modal('show');
		date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
		$("#alertFoodStuffTextDeleteDataByDate").empty();
		$("#alertFoodStuffTextDeleteDataByDate").append("<p> Are you sure you want to Delete all FoodStuff record for the date '" + date + "'?</p>");
	});

	$("#deleteEnergyByDate").click(function() {
		$('#alertDeleteEnergyDataByDate-modal').modal('show');
		date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
		$("#alertEnergyTextDeleteDataByDate").empty();
		$("#alertEnergyTextDeleteDataByDate").append("<p> Are you sure you want to Delete all Energy record for the date '" + date + "'?</p>");
	});

	$("#deletetransportationByDate").click(function() {
		$('#alertDeleteTransportationDataByDate-modal').modal('show');
		date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
		$("#alertTransportationTextDeleteDataByDate").empty();
		$("#alertTransportationTextDeleteDataByDate").append("<p> Are you sure you want to Delete all Energy record for the date '" + date + "'?</p>");
	});

	$("#filter").click(function() {

		getFilterData(commoditySubGroupValue);
	});
});// end document ready

function buildInsertPayload(listObject, date) {
	var result = [];

	for (var i = 0; i < listObject.length; i++) {
		var value = listObject[i];

		result.push({
			"subgroupId": value[0],
			"value": cleanValue(value[1]),
			"referDate": $.jqx.dataFormat.formatdate(date, 'dd-MM-yyyy')
		});
	}

	return result;
}

function extractColumn(rows, fieldName, id) {
	var result = [id];

	for (var i = 0; i < rows.length; i++) {
		result.push(rows[i][fieldName]);
	}

	return result;
}

$("#Clearfilter").click(function() {
	if (commoditySubGroupValue == 1) {
		for (i = 0; i < metalsPreciousItem.length; i++) {
			$(metalsPreciousItem[i]).jqxCheckBox({ checked: false });
		}
	}
	else if (commoditySubGroupValue == 2) {
		for (i = 0; i < metalsBaseItem.length; i++) {
			$(metalsBaseItem[i]).jqxCheckBox({ checked: false });
		}
	} else if (commoditySubGroupValue == 3) {
		for (i = 0; i < foodStuffItem.length; i++) {
			$(foodStuffItem[i]).jqxCheckBox({ checked: false });
		}
	} else if (commoditySubGroupValue == 4) {
		for (i = 0; i < energyItem.length; i++) {
			$(energyItem[i]).jqxCheckBox({ checked: false });
		}
	} else if (commoditySubGroupValue == 5) {
		for (i = 0; i < transportationItem.length; i++) {
			$(transportationItem[i]).jqxCheckBox({ checked: false });
		}
	}
});

function editRow(configKey, row, event) {

    isedit = true;

    var config = GROUP_CONFIG[configKey];
    var grid = $(config.auditGrid);

    var data = grid.jqxGrid('getrowdata', row);

    oldDataJson = { ...data };
    selectedRow.editrow = row;

    date = $.jqx.dataFormat.formatdate(
        $("#dateInputAudit").jqxDateTimeInput('getDate'),
        'dd-MM-yyyy'
    );

    // already loaded → no reload needed
    grid.jqxGrid('beginrowedit', row);

    $("#" + config.editPrefix + row).hide();
    $("#" + config.actionPrefix + row).css("display", "contents");

    if (event && event.preventDefault) {
        event.preventDefault();
    }

    return false;
}
function updateRow(configKey, row, event) {

	isupdate = true;

	var config = GROUP_CONFIG[configKey];
	var api = config.api;

	var grid = $(config.auditGrid);

	// end edit FIRST (important)
	grid.jqxGrid('endrowedit', row);

	var rowData = grid.jqxGrid('getrowdata', row);

	// ✅ build correct payload
	var payload = config.buildUpdatePayload(rowData);

	$.ajax({
		type: "POST",
		url: api.update,
		contentType: "application/json",
		data: JSON.stringify(payload),

		success: function() {

			// ✅ call custom post logic
			if (config.afterUpdate) {
				config.afterUpdate(rowData);
			}

			$('#alertUpdateSuccess-modal').modal('show');
		},

		error: function(e) {
			console.log("ERROR : ", e);
		}
	});

	if (event && event.preventDefault) {
		event.preventDefault();
	}

	return false;
}

/** start new  */
function executeSaveFlow(configKey, dataToBeInserted) {

	
	var config = GROUP_CONFIG[configKey];
	var api = config.api;

	var today = $("#dateInput").jqxDateTimeInput('getDate');
	var now = new Date();

	if (today >= now) {
		$('#alertDate-modal').modal('show');
		return;
	}

	if (today.getDay() === 6 || today.getDay() === 0) {
		$('#alert-modal-weekend').modal('show');
		return;
	}
	var formattedDate = $.jqx.dataFormat.formatdate(today, 'dd-MM-yyyy');

    let checkApi = (config.key=="precious")? api.check + dataToBeInserted[0].subgroupId +"/"+ formattedDate  :api.check + formattedDate;
	
	$.ajax({
		url: checkApi,
		dataType: 'json',
		success: function(response) {
		let checkCondition = (config.key=="precious")? (response): !response;
			if (checkCondition) {
				$('#alert-modal').modal('show');
				return;
			}

			$.ajax({
				url: api.robot,
				dataType: 'text',
				success: function(robot) {

					if (robot === 'true') {
						$('#alert-modal-robot').modal('show');
						return;
					}

					$.ajax({
						type: "POST",
						url: api.save,
						contentType: "application/json",
						data: JSON.stringify(dataToBeInserted),
						success: function() {

							getFilterData(commoditySubGroupValue);

							// reset UI
							if (config.key === "precious") {
							    Object.keys(config.inputs).forEach(type => {

						            $(config.inputs[type]).val("");
						            $(config.form[type]).show();
						            $(config.grids[type]).hide();
						            $(config.buttons[type]).hide();
						        
						      });
							} else {
							    config.getInput().value = "";
							    $(config.form).show();
							    $(config.buttons).hide();
							    $(config.gridContainer).hide();

							}
							
							// reload audit (DYNAMIC ✅)
							$('#dateInputAudit').jqxDateTimeInput('setDate', today);
							getAuditGridSource(configKey);

					if (config.key === "precious") {

					    const subgroupToColumn = {
					        "1": "CLOSE_GOLD",
					        "2": "CLOSE_SILVER",
					        "3": "PLATINUM",
					        "6": "OPEN_GOLD",
					        "7": "HIGH_GOLD",
					        "8": "LOW_GOLD",
					        "9": "OPEN_SILVER",
					        "10": "HIGH_SILVER",
					        "11": "LOW_SILVER"
					    };
					
					    const updatedMetalsJson = dataToBeInserted.map(item => ({
					        assetId: 2,
					        groupId: getGroupId(commoditySubGroupValue),
					        value: subgroupToColumn[item.subgroupId]
					    }));
					
					    // ---------- check same-day values ----------
					    const insertedSubgroups = dataToBeInserted.map(x => x.subgroupId);
					
					    const hasGold =
					        insertedSubgroups.includes("1") || // close gold
					        insertedSubgroups.includes("6") ||
					        insertedSubgroups.includes("7") ||
					        insertedSubgroups.includes("8");
					
					    const hasSilver =
					        insertedSubgroups.includes("2") ||
					        insertedSubgroups.includes("9") ||
					        insertedSubgroups.includes("10") ||
					        insertedSubgroups.includes("11");
					
					    const hasPlatinum =
					        insertedSubgroups.includes("3");
					
					    // Gold/Silver calculated robot
					    if (hasGold && hasSilver) {
					        updatedMetalsJson.push({
					            assetId: 2,
					            groupId: getGroupId(commoditySubGroupValue),
					            value: "GOLD_SILVER"
					        });
					    }
					
					    // Platinum/Gold calculated robot
					    if (hasGold && hasPlatinum) {
					        updatedMetalsJson.push({
					            assetId: 2,
					            groupId: getGroupId(commoditySubGroupValue),
					            value: "PLATINUM_GOLD"
					        });
					    }
					
					    updateRobotNewsOnChangeColumns(updatedMetalsJson);
					
					} else {
					    triggerRobots();
					}
						}
					});

				}
			});

		}
	});
}
function cancelEdit(configKey, row) {
    isedit = false;
    isupdate = false;

    selectedRow.editrow = row;

    var config = GROUP_CONFIG[configKey];
    var grid = $(config.auditGrid);

    grid.jqxGrid('endrowedit', row, true);

    // ✅ restore UI
    $("#" + config.editPrefix + row).show();
    $("#" + config.actionPrefix + row).hide();
}
function getConfigKey(value) {
	value = parseInt(value); // ✅ fix

	switch (value) {
		case 1: return "precious";
		case 2: return "base";
		case 3: return "foodStuff";
		case 4: return "energy";
		case 5: return "transportation";
	}
}
function getAuditGridSource(configKey) {

	var config = GROUP_CONFIG[configKey];
	var api = config.api;

	var auditSource = { ...config.auditSource };

	$.ajax({
		contentType: "application/json",
		url: api.latest,
		dataType: 'text',
		success: function(response) {

			if (response !== '') {

				var dbDate = new Date(
					response.split("-")[1] + "," +
					response.split("-")[2] + "," +
					response.split("-")[0]
				);

				$('#dateInputAudit').jqxDateTimeInput('setDate', dbDate);

				var formattedDate = $.jqx.dataFormat.formatdate(dbDate, 'dd-MM-yyyy');

				var systemDate = new Date();
				systemDate.setHours(0, 0, 0, 0);

				//if (dbDate.toDateString() === systemDate.toDateString()) {

					filterDate = formattedDate;

					delete auditSource.localdata;
					auditSource.url = api.audit + formattedDate;

					var adapter = new $.jqx.dataAdapter(auditSource);
					$(config.auditGrid).jqxGrid({ source: adapter });
				//}
			}
		},
		error: function(e) {
			console.log("ERROR : ", e);
		}
	});
}
function deleteByDate(configKey, modalId) {

	$(modalId).modal('hide');

	var date = $.jqx.dataFormat.formatdate(
		$("#dateInputAudit").jqxDateTimeInput('getDate'),
		'dd-MM-yyyy'
	);

	var config = GROUP_CONFIG[configKey];
    var api = config.api;

	$.ajax({
		type: "DELETE",
		url: api.delete + date,
		success: function() {

			// recheck if still data exists
			$.ajax({
				url: api.check + date,
				success: function(response) {

					if (!response) {
						var auditSource = { ...config.auditSource };

						delete auditSource.localdata;
						auditSource.url = '';

						var adapter = new $.jqx.dataAdapter(auditSource);
						$(config.auditGrid).jqxGrid({ source: adapter });
					} else {
						// fallback to reload
						getAuditGridSource(configKey);
					}
				}
			});

			getFilterData(commoditySubGroupValue);

			$('#alertInfoDeleteDataByDate-modal').modal('show');
			$("#successDelete").html(
				"<p>All record for the date '" + date + "' has been deleted</p>"
			);
		},
		error: function(e) {
			console.log(e);
		}
	});
}
/** end new  */
function deleteDataByDate() {
	deleteByDate("precious", "#alertDeleteDataByDate-modal");

}
function deleteBaseDataByDate() {
	deleteByDate("base", "#alertDeleteBaseDataByDate-modal");
}
function deleteFoodStuffDataByDate() {
	deleteByDate("foodStuff", "#alertDeleteFoodStuffDataByDate-modal");
}
function deleteTransportationDataByDate() {
	deleteByDate("transportation", "#alertDeleteTransportationDataByDate-modal");

}
function deleteEnergyDataByDate() {
	deleteByDate("energy", "#alertDeleteEnergyDataByDate-modal");
}

function getFilterData(commoditySubGroupValue) {
	var SelectedSearchDTO = [];
	var allItems = 0;
	var checkedItem = [];
	var json;
	var precious = [];
	var base = [];
	var foodStuff = [];
	var energy = [];
	var transportation = [];
	$('#grid').jqxGrid({ showdefaultloadelement: true });
	var itemPrecious = 0;
	var itemBase = 0;
	var itemfoodStuff = 0;
	var itemEnergy = 0;
	var itemTransportation = 0;

	if (commoditySubGroupValue == 1) {
		for (i = 0; i < metalsPreciousItem.length; i++) {
			if ($(metalsPreciousItem[i]).jqxCheckBox('checked')) {
				precious.push(metalsPreciousItem[i].split("Box")[1].toUpperCase());
				itemPrecious = 1;
				allItems = allItems + 1;
				checkedItem.push(metalsPreciousItem[i]);
			}
		}

		if (itemPrecious != 0) {
			SelectedSearchDTO.push({
				"groupId": "1",
				"selectedValues": precious,
			});
			precious = [];
		}
	} else if (commoditySubGroupValue == 2) {
		for (i = 0; i < metalsBaseItem.length; i++) {
			if ($(metalsBaseItem[i]).jqxCheckBox('checked')) {
				base.push(metalsBaseItem[i].split("Box")[1].toUpperCase());
				itemBase = 1;
				allItems = allItems + 1;
				checkedItem.push(metalsBaseItem[i]);
			}
		}

		if (itemBase != 0) {
			SelectedSearchDTO.push({
				"groupId": "2",
				"selectedValues": base,
			});
			base = [];
		}
	}
	else if (commoditySubGroupValue == 3) {
		for (i = 0; i < foodStuffItem.length; i++) {
			if ($(foodStuffItem[i]).jqxCheckBox('checked')) {
				foodStuff.push(foodStuffItem[i].split("Box")[1].toUpperCase());
				itemfoodStuff = 1;
				allItems = allItems + 1;
				checkedItem.push(foodStuffItem[i]);
			}
		}

		if (itemfoodStuff != 0) {
			SelectedSearchDTO.push({
				"groupId": "3",
				"selectedValues": foodStuff,
			});
			itemfoodStuff = [];
		}
	} else if (commoditySubGroupValue == 4) {
		for (i = 0; i < energyItem.length; i++) {
			if ($(energyItem[i]).jqxCheckBox('checked')) {
				energy.push(energyItem[i].split("Box")[1].toUpperCase());
				itemEnergy = 1;
				allItems = allItems + 1;
				checkedItem.push(energyItem[i]);
			}
		}

		if (itemEnergy != 0) {
			SelectedSearchDTO.push({
				"groupId": "4",
				"selectedValues": energy,
			});
			itemEnergy = [];
		}
	} else if (commoditySubGroupValue == 5) {
		for (i = 0; i < transportationItem.length; i++) {
			if ($(transportationItem[i]).jqxCheckBox('checked')) {
				transportation.push(transportationItem[i].split("Box")[1].toUpperCase());
				itemTransportation = 1;
				allItems = allItems + 1;
				checkedItem.push(transportationItem[i]);
			}
		}

		if (itemTransportation != 0) {
			SelectedSearchDTO.push({
				"groupId": "5",
				"selectedValues": transportation,
			});
			itemTransportation = [];
		}
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
				url: "/metals/getgriddata",
				data: JSON.stringify(json),
				dataType: 'json',
				async: true,
				cache: false,
				timeout: 600000,
				success: function(data) {
					delete source.url;

					data.rows.forEach(row => {
					    Object.keys(row).forEach(key => {
					        if (row[key] == null || row[key] === 'null') {
					            row[key] = '';
					        }
					    });
					});
					
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
		url: "/robot/callrobotsasync/2/" + getGroupId(commoditySubGroupValue),
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

	location.href = "/bourse/metals?commodity=" + divNum;
}
function initButtons(config) {
    if (config.deleteBtn && $(config.deleteBtn).length)
        $(config.deleteBtn).jqxButton({ theme: 'dark', width: 90, height: 30, template: "danger" });

    if (config.cancelBtn && $(config.cancelBtn).length)
        $(config.cancelBtn).jqxButton({ theme: 'dark', width: 74, height: 30 });

    if (config.loadBtn && $(config.loadBtn).length)
        $(config.loadBtn).jqxButton({ theme: 'dark', width: 74, height: 30 });
}
function initPreciousButtons(config) {
	
    if (config.deleteBtn && $(config.deleteBtn).length)
        $(config.deleteBtn).jqxButton({ theme: 'dark', width: 90, height: 30, template: "danger" });

    Object.keys(config.cancelBtn).forEach(type => {

        const cancelSelector = config.cancelBtn[type];
        const loadSelector = config.loadBtn[type];

        if ($(cancelSelector).length) {
            $(cancelSelector).jqxButton({
                theme: 'dark',
                height: 30,
                width: 74,
                imgSrc: "/img/icon/false.svg"
            });
        }

        if ($(loadSelector).length) {
            $(loadSelector).jqxButton({
                theme: 'dark',
                height: 30,
                width: 74,
                imgSrc: "/img/icon/true.svg"
            });
        }
    });
}
function initCheckboxes(items) {
    items.forEach(item => {
        $(item).jqxCheckBox({ theme: 'dark', width: 60, height: 25, boxSize: "0px" });
    });
}
function bindInput(inputSelector, onBlurCallback) {
    const $el = $(inputSelector);
    if (!$el.length) return;

    $el.on('keydown', function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            $el.blur();
        }
    });

    $el.on('blur', onBlurCallback);
}
function bindPrecious3Inputs(config) {

    Object.keys(config.inputs).forEach(type => {

        const inputSelector = config.inputs[type];
        const gridSelector = config.grids[type];
        const formSelector = config.form[type];
        const buttonsSelector = config.buttons[type]; // ✅ ADD THIS
        const fields = config.fieldGroups[type];

        $(inputSelector).on("blur", function () {

            const val = $(this).val();
            if (!val) return;

            const row = val.split(/\r?\n/)[0].split(/\t/);

            let data = [{}];

            fields.forEach((f, i) => {
                data[0][f] = row[i] || "";
            });

            $(formSelector).hide();
            $(gridSelector).show();

            $(buttonsSelector).show();   // ✅ THIS IS WHAT YOU'RE MISSING

            createGrid(gridSelector, fields, data);
        });
    });
}
function bindPreciousCancelButtons(config) {

    Object.keys(config.cancelBtn).forEach(type => {

        const btn = config.cancelBtn[type];

        $(btn).click(function () {
            $(config.inputs[type]).val("");
            $(config.form[type]).show();
            $(config.grids[type]).hide();
            $(config.buttons[type]).hide();
        });
    });
}

function parseInput(value, fields) {
    const row = value.split(/\r?\n/)[0].split(/\t/);
    let obj = {};
    fields.forEach((field, index) => {
        obj[field] = row[index];
    });
    return [obj];
}
function createGrid(gridSelector, fields, data) {
    const source = {
        datatype: "json",
        datafields: fields.map(f => ({ name: f, type: 'string' })),
        localData: data
    };

    const adapter = new $.jqx.dataAdapter(source);

    $(gridSelector).jqxGrid({
        width: '100%',
        source: adapter,
        theme: 'dark',
        autoheight: true,
        selectionmode: 'none',
        columns: fields.map(f => ({
            text: f.toUpperCase(),
            datafield: f,
            width: `${100 / fields.length}%`,
            align: 'center'
        }))
    });
}

function rendercommoditySubGroup(value) {
    const map = {
        1: "precious",
        2: "base",
        3: "foodStuff",
        4: "energy",
        5: "transportation"
    };

    const type = map[value];
    const config = GROUP_CONFIG[type];
    if (!config) return;

    initCheckboxes(config.items);
    
    if (config.key === "precious") {
	initPreciousButtons(config);
    bindPrecious3Inputs(config);
    bindPreciousCancelButtons(config);
 
	}
	else
	{
		bindInput(config.input, () => {
	        const val = $(config.input).val();
	        if (!val) return;
	
	        $(config.form).hide();
	        $(config.grid).show();
	        $(config.buttons).show();
	
	        const data = parseInput(val, config.fields);
	        createGrid(config.grid, config.fields, data);
	    });
	    
        initButtons(config);
	}
    createAuditGrid(config.auditGrid, config.auditFields, type);
    getAuditGridSource(type);
}
function createAuditGrid(selector, fields, type) {
    const config = GROUP_CONFIG[type];
    const source =  config.auditSource;

    const adapter = new $.jqx.dataAdapter(source);

    $(selector).jqxGrid({
        width: '100%',
        source: adapter,
        theme: 'dark',
        autoheight: true,
        editable: true,
        selectionmode: 'none',
        editmode: 'selectedrow',
        columns: [
            {
                text: '',
                editable: false,
                datafield: 'Edit',
                width: '24%',
                cellsrenderer: function (row) {
                    return `
                        <input class="edit"
                               type="button"
                               onclick='editRow("${type}", ${row}, event)'
                               id="${config.editPrefix}${row}"
                               value="Edit" />

                        <div class="row"
                             id="${config.actionPrefix}${row}"
                             style="display:none">

                            <input onclick='updateRow("${type}", ${row}, event)'
                                   class="update"
                                   type="button"
                                   value="Update" />

                            <input onclick='cancelEdit("${type}", ${row})'
                                   type="button"
                                   class="cancel"
                                   value="Cancel" />
                        </div>
                    `;
                }
            },
            ...fields.map(f => ({
                text: f.toUpperCase(),
                datafield: f,
                width: `${76 / fields.length}%`,
                align: 'center'
            }))
        ]
    });
}

function saveFilterHistory(commoditySubGroupValue, checkedItem) {


	var filterHistory = {
		"filterHistory": checkedItem.toString(),
		"screenName": "DATABASE_INPUT_SCREEN_METALS-" + commoditySubGroupValue
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
function getFilterHistory(commoditySubGroupValue) {

	$.ajax({
		contentType: "application/json; charset=utf-8",
		url: "/bourse/getdataentryfilterhistory/" + "DATABASE_INPUT_SCREEN_METALS-" + commoditySubGroupValue,
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
				if (commoditySubGroupValue == 1)
					for (i = 0; i < metalsPreciousItem.length; i++) {
						$(metalsPreciousItem[i]).jqxCheckBox({ checked: true });
					}
				else if (commoditySubGroupValue == 2)
					for (i = 0; i < metalsBaseItem.length; i++) {
						$(metalsBaseItem[i]).jqxCheckBox({ checked: true });
					}
			}
		},
		error: function(e) {

			console.log("ERROR : ", e);

		}
	});
}

function getGroupId(commoditySubGroupValue) {
	var groupId = '';
	switch (commoditySubGroupValue) {

		case '1':
			groupId = '6'
			break;
		case '2':
			groupId = '7'
			break;
		case '3':
			groupId = '8'
			break;
		case '4':
			groupId = '9'
			break;
		case '5':
			groupId = '10'
			break;
	}
	return groupId;
}		