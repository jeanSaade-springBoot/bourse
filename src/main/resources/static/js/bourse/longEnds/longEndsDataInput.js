var selectedRow = this;
var monthDate = new Date();
monthDate.setMonth(monthDate.getMonth() - 6);
var auditUrl;
var updateUrl;
var saveUrl;
var deleteUrl;
var checkifcanUrl;
var allitems = ['#jqxCheckBoxSpreadName',
	'#jqxCheckBoxSpreadValue'];
var datePairs = [];
var contains = {
	2: [false, 2], // containsOpen
	3: [false, 3], // containsSettle
	4: [false, 4], // containsClose
	5: [false, 5], // containsHigh
	6: [false, 6]  // containsLow
};

const subgrouId_description = [
	{ name: 'Mtty', subgroupId: 1, dbName: 'mtty' },
	{ name: 'Open', subgroupId: 2, dbName: 'open' },
	{ name: 'Settle', subgroupId: 3, dbName: 'settle' },
	{ name: 'Close', subgroupId: 4, dbName: 'close' },
	{ name: 'High', subgroupId: 5, dbName: 'high' },
	{ name: 'Low', subgroupId: 6, dbName: 'low' },
	{ name: 'futureExpiryDate', subgroupId: 7, dbName: 'future_expiry_date' },
	{ name: 'issuer', subgroupId: 8, dbName: 'issuer' },
	{ name: 'coupon', subgroupId: 9, dbName: 'coupon' },
	{ name: 'ctdMaturity', subgroupId: 10, dbName: 'ctd_maturity' },
	{ name: 'priceAtIssue', subgroupId: 11, dbName: 'price_at_issue' },
	{ name: 'frequency', subgroupId: 12, dbName: 'frequency' },
	{ name: 'convergenceFactor', subgroupId: 13, dbName: 'convergence_factor' },
	{ name: 'spreadName', subgroupId: 14, dbName: 'spread_name' },
	{ name: 'spreadValue', subgroupId: 15, dbName: 'spread_value' },
];
const groupId_Id = [
	{ Id: '1', groupId: 52, rollingGroupId: 61 },
	{ Id: '2', groupId: 53, rollingGroupId: 62 },
	{ Id: '3', groupId: 54, rollingGroupId: 63 },
	{ Id: '4', groupId: 55, rollingGroupId: 64 },
	{ Id: '5', groupId: 56, rollingGroupId: 65 },
	{ Id: '6', groupId: 57, rollingGroupId: 67 },
	{ Id: '7', groupId: 58, rollingGroupId: 68 },
	{ Id: '8', groupId: 59, rollingGroupId: 69 },
	{ Id: '9', groupId: 60, rollingGroupId: 70 },
];
var selectedItems = [];
var AuditDefaultData = [];

const longEndsValue = $("#longEndsValue")[0].innerText;
const selectedItem = longEndsValue;
const groupId = getgroupId(longEndsValue);
const rollingGroupId = groupId_Id.filter(value => value.groupId == groupId)[0].rollingGroupId;
checkifcanUrl = "/longEnds/checkifcansave/";

auditUrl = '/longEnds/longEnds-data/';
rollingAuditUrl = '/longEnds/longEnds-data-rolling/' + rollingGroupId;
updateUrl = "/longEnds/update-long-longEnds-data";
saveUrl = "/longEnds/save-longEnds-data";
deleteUrl = "/longEnds/delete-longEnds/";

var mainGroupContainer = '';
var groupContainer = '';
var subgroupContainer = '';
var factorIner = '';
var factorInerItem = '';
var factorContainer = '';


var inputDataLongEnds = document.getElementById("data-input-data");
Type = "data";





$(document).ready(function() {

	$('#overlay').fadeOut();
	$('#container-wrapper').show();

	generateOptions(2000);

	$("#viewall").jqxButton({ theme: 'dark', width: 110, height: 35, template: "primary" });
	$("#viewall").css("display", "block");
	$("#viewall").click(function() {
		popupWindow('/bourse/allnews', 'Libvol-View All News', window, 1300, 600);
	});

	$('[data-toggle="tooltip"]').tooltip();


	$("#dateInput").jqxDateTimeInput({ theme: 'dark', width: '195px', height: '25px' });

	$("#dateInputAudit").jqxDateTimeInput({ theme: 'dark', width: '195px', height: '25px' });

	$("#dateInputFrom").jqxDateTimeInput({ theme: 'dark', width: '200px', height: '25px' });
	$("#dateInputFrom").jqxDateTimeInput('setDate', monthDate);

	$("#dateInputTo").jqxDateTimeInput({ theme: 'dark', width: '200px', height: '25px' });

	$("#filter").jqxButton({ theme: 'dark', height: 30, width: 74 });
	$("#Clearfilter").jqxButton({ theme: 'dark', height: 30, width: 74 });
	renderlookUpGridsData();

	dynamicDisplayInput(groupId);
	renderSubGroup();
	source =
	{
		datatype: "json",
		datafields: [
			{ name: 'refer_date', type: 'date' },
			{ "name": "spread_name", "type": "float" },
			{ "name": "spread_value", "type": "float" },
			{ "name": "open-52", "type": "float" },
			{ "name": "settle-52", "type": "float" },
			{ "name": "close-52", "type": "float" },
			{ "name": "convergence_factor-52", "type": "float" },
			{ "name": "frequency-52", "type": "float" },
			{ "name": "price_at_issue-52", "type": "float" },
			{ "name": "ctd_maturity-52", "type": 'date' },
			{ "name": "coupon-52", "type": "float" },
			{ "name": "issuer-52", "type": "float" },
			{ "name": "future_expiry_date-52", "type": 'date', format: 'dd-MM-yyyy' },
			{ "name": "low-52", "type": "float" },
			{ "name": "high-52", "type": "float" },
			{ "name": "maturity_name-52", "type": "float" },
			{ "name": "open-61", "type": "float" },
			{ "name": "settle-61", "type": "float" },
			{ "name": "close-61", "type": "float" },
			{ "name": "low-61", "type": "float" },
			{ "name": "high-61", "type": "float" },
			{ "name": "open-53", "type": "float" },
			{ "name": "settle-53", "type": "float" },
			{ "name": "close-53", "type": "float" },
			{ "name": "convergence_factor-53", "type": "float" },
			{ "name": "frequency-53", "type": "float" },
			{ "name": "price_at_issue-53", "type": "float" },
			{ "name": "ctd_maturity-53", "type": 'date' },
			{ "name": "coupon-53", "type": "float" },
			{ "name": "issuer-53", "type": "float" },
			{ "name": "future_expiry_date-53", "type": 'date', format: 'dd-MM-yyyy' },
			{ "name": "low-53", "type": "float" },
			{ "name": "high-53", "type": "float" },
			{ "name": "maturity_name-53", "type": "float" },
			{ "name": "open-62", "type": "float" },
			{ "name": "settle-62", "type": "float" },
			{ "name": "close-62", "type": "float" },
			{ "name": "low-62", "type": "float" },
			{ "name": "high-62", "type": "float" },
			{"name":"open-54","type":"float"},
			{"name":"settle-54","type":"float"},
			{"name":"close-54","type":"float"},
			{"name":"convergence_factor-54","type":"float"},
			{"name":"frequency-54","type":"float"},
			{"name":"price_at_issue-54","type":"float"},
			{"name":"ctd_maturity-54","type":'date'},
			{"name":"coupon-54","type":"float"},
			{"name":"issuer-54","type":"float"},
			{"name":"future_expiry_date-54","type":'date', format: 'dd-MM-yyyy'},
			{"name":"low-54","type":"float"},
			{"name":"high-54","type":"float"},
			{"name":"maturity_name-54","type":"float"},
			{"name":"open-63","type":"float"},
			{"name":"settle-63","type":"float"},
			{"name":"close-63","type":"float"},
			{"name":"low-63","type":"float"},
			{"name":"high-63","type":"float"},
			{"name":"open-55","type":"float"},
			{"name":"settle-55","type":"float"},
			{"name":"close-55","type":"float"},
			{"name":"convergence_factor-55","type":"float"},
			{"name":"frequency-55","type":"float"},
			{"name":"price_at_issue-55","type":"float"},
			{"name":"ctd_maturity-55","type":'date'},
			{"name":"coupon-55","type":"float"},
			{"name":"issuer-55","type":"float"},
			{"name":"future_expiry_date-55","type":'date', format: 'dd-MM-yyyy'},
			{"name":"low-55","type":"float"},
			{"name":"high-55","type":"float"},
			{"name":"maturity_name-55","type":"float"},
			{"name":"open-64","type":"float"},
			{"name":"settle-64","type":"float"},
			{"name":"close-64","type":"float"},
			{"name":"low-64","type":"float"},
			{"name":"high-64","type":"float"},
			{"name":"open-56","type":"float"},
			{"name":"settle-56","type":"float"},
			{"name":"close-56","type":"float"},
			{"name":"convergence_factor-56","type":"float"},
			{"name":"frequency-56","type":"float"},
			{"name":"price_at_issue-56","type":"float"},
			{"name":"ctd_maturity-56","type":'date'},
			{"name":"coupon-56","type":"float"},
			{"name":"issuer-56","type":"float"},
			{"name":"future_expiry_date-56","type":'date', format: 'dd-MM-yyyy'},
			{"name":"low-56","type":"float"},
			{"name":"high-56","type":"float"},
			{"name":"maturity_name-56","type":"float"},
			{"name":"open-65","type":"float"},
			{"name":"settle-65","type":"float"},
			{"name":"close-65","type":"float"},
			{"name":"low-65","type":"float"},
			{"name":"high-65","type":"float"},
			{"name":"open-57","type":"float"},
			{"name":"settle-57","type":"float"},
			{"name":"close-57","type":"float"},
			{"name":"convergence_factor-57","type":"float"},
			{"name":"frequency-57","type":"float"},
			{"name":"price_at_issue-57","type":"float"},
			{"name":"ctd_maturity-57","type":'date'},
			{"name":"coupon-57","type":"float"},
			{"name":"issuer-57","type":"float"},
			{"name":"future_expiry_date-57","type":'date', format: 'dd-MM-yyyy'},
			{"name":"low-57","type":"float"},
			{"name":"high-57","type":"float"},
			{"name":"maturity_name-57","type":"float"},
			{"name":"open-67","type":"float"},
			{"name":"settle-67","type":"float"},
			{"name":"close-67","type":"float"},
			{"name":"low-67","type":"float"},
			{"name":"high-67","type":"float"},
			{"name":"open-58","type":"float"},
			{"name":"settle-58","type":"float"},
			{"name":"close-58","type":"float"},
			{"name":"convergence_factor-58","type":"float"},
			{"name":"frequency-58","type":"float"},
			{"name":"price_at_issue-58","type":"float"},
			{"name":"ctd_maturity-58","type":'date'},
			{"name":"coupon-58","type":"float"},
			{"name":"issuer-58","type":"float"},
			{"name":"future_expiry_date-58","type":'date', format: 'dd-MM-yyyy'},
			{"name":"low-58","type":"float"},
			{"name":"high-58","type":"float"},
			{"name":"maturity_name-58","type":"float"},
			{"name":"open-68","type":"float"},
			{"name":"settle-68","type":"float"},
			{"name":"close-68","type":"float"},
			{"name":"low-68","type":"float"},
			{"name":"high-68","type":"float"},
			{"name":"open-59","type":"float"},
			{"name":"settle-59","type":"float"},
			{"name":"close-59","type":"float"},
			{"name":"convergence_factor-59","type":"float"},
			{"name":"frequency-59","type":"float"},
			{"name":"price_at_issue-59","type":"float"},
			{"name":"ctd_maturity-59","type":'date'},
			{"name":"coupon-59","type":"float"},
			{"name":"issuer-59","type":"float"},
			{"name":"future_expiry_date-59","type":'date', format: 'dd-MM-yyyy'},
			{"name":"low-59","type":"float"},
			{"name":"high-59","type":"float"},
			{"name":"maturity_name-59","type":"float"},
			{"name":"open-69","type":"float"},
			{"name":"settle-69","type":"float"},
			{"name":"close-69","type":"float"},
			{"name":"low-69","type":"float"},
			{"name":"high-69","type":"float"},
			{"name":"open-60","type":"float"},
			{"name":"settle-60","type":"float"},
			{"name":"close-60","type":"float"},
			{"name":"convergence_factor-60","type":"float"},
			{"name":"frequency-60","type":"float"},
			{"name":"price_at_issue-60","type":"float"},
			{"name":"ctd_maturity-60","type":'date'},
			{"name":"coupon-60","type":"float"},
			{"name":"issuer-60","type":"float"},
			{"name":"future_expiry_date-60","type":'date', format: 'dd-MM-yyyy'},
			{"name":"low-60","type":"float"},
			{"name":"high-60","type":"float"},
			{"name":"maturity_name-60","type":"float"},
			{"name":"open-70","type":"float"},
			{"name":"settle-70","type":"float"},
			{"name":"close-70","type":"float"},
			{"name":"low-70","type":"float"},
			{"name":"high-70","type":"float"},
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

	$("#grid").jqxGrid('showloadelement');

	$('#dateInputAudit').on('change', function(event) {
		date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
		filterDate = date;

		renderAuditGrids(date);

	});

	$("#filter").click(function() {

		getFilterData(selectedItem);
	});

});
$("#Clearfilter").click(function() {

	for (i = 0; i < allitems.length; i++) {
		$(allitems[i]).jqxCheckBox({ checked: false });
	}
});
function dynamicDisplayInput(selectedItem) {

	let dynamicInputData = '';
	$.ajax({
		url: '/longEnds/get-longends-display-settings/' + selectedItem,
		method: 'GET',
		dataType: 'json',
		async: false,
		success: function(response) {
			for (let i = 0; i < response.length; i++) {
				let subgroupId = response[i].subgroupId;
				if (response[i].isVisible) {
					if (contains[subgroupId]) {
						contains[subgroupId][0] = true;
						contains[subgroupId][1] = subgroupId; // Update the second value to 1 if visible
					}
					dynamicInputData += '<div class="fw-bold">' + getSubgroupName(subgroupId) + '</div>';
				}
			}
			$('#input-titles').append(dynamicInputData);

			renderFilterGrid(response);
		},
		error: function(xhr, status, error) {
			console.log(error);
		}
	});

}
function groupByGroupIdAndSubgroupId(data) {
	var groupedData = {};

	Object.keys(data).forEach(function(key) {
		var item = data[key];
		var groupId = item.groupId;
		var subgroupId = item.subgroupId;

		if (!groupedData[groupId]) {
			groupedData[groupId] = {};
		}

		if (!groupedData[groupId][subgroupId]) {
			groupedData[groupId][subgroupId] = [];
		}

		groupedData[groupId][subgroupId].push(item);
	});

	return groupedData;
}
function renderlookUpGridsData() {
	$.ajax({
		url: '/longEnds/findlatestdata/'+groupId,
		method: 'GET',
		dataType: 'json',
		async: false,
		success: function(response) {
			renderLookBackGrid(response);
			renderLookBackMttyGrid(response);
		},
		error: function(xhr, status, error) {
			if (xhr.status === 204) {  // No Content status
				console.log('No data found (204 No Content).');
				// Handle no data case here as well
			} else if (!xhr.responseText) {

				const response = {
					mtty: '',
					futureExpiryDate: '',
					issuer: '',
					coupon: '',
					ctdMaturity: '',
					priceAtIssue: '',
					frequency: '',
					convergenceFactor: ''
				};

				renderLookBackGrid(response);
				renderLookBackMttyGrid(response);
			} else {
				console.log('Error:', error);
				// Handle other errors
			}
		}
	});
}
function renderLookBackMttyGrid(data) {
	var source =
	{
		localdata: [{
			mtty: data.maturity_name,
		}],
		datatype: "array",
		updaterow: function(rowid, rowdata, commit) {
			commit(true);
		},
		datafields:
			[
				{ name: 'mtty', type: 'string' },
			]
	};
	var dataAdapter = new $.jqx.dataAdapter(source);
	// initialize jqxGrid
	$("#lookBackMttyDataInputGriddata").jqxGrid(
		{
			width: '100%',
			source: dataAdapter,
			editable: true,
			selectionmode: 'singlecell',
			editmode: 'click',
			autoheight: true,
			theme: 'dark',
			columns: [
				{ text: 'MTTY', datafield: 'mtty', width: '100%', align: 'center' },
			]
		});
}
function renderLookBackGrid(data) {
	var source =
	{
		localdata: [{
			futureExpiryDate: data.futureExpiryDate,
			issuer: data.issuer,
			coupon: data.coupon,
			ctdMaturity: data.ctdMaturity,
			priceAtIssue: data.priceAtIssue,
			frequency: data.frequency,
			convergenceFactor: data.convergenceFactor,
		}],
		datatype: "array",
		updaterow: function(rowid, rowdata, commit) {
			commit(true);
		},
		datafields:
			[
				{ name: 'futureExpiryDate', type: 'date', format: 'dd-MM-yyyy' },
				{ name: 'issuer', type: 'string' },
				{ name: 'coupon', type: 'string' },
				{ name: 'ctdMaturity', type: 'date' },
				{ name: 'priceAtIssue', type: 'string' },
				{ name: 'frequency', type: 'string' },
				{ name: 'convergenceFactor', type: 'string' }
			]
	};
	var dataAdapter = new $.jqx.dataAdapter(source);
	// initialize jqxGrid
	$("#lookBackDataInputGriddata").jqxGrid(
		{
			width: '100%',
			source: dataAdapter,
			editable: true,
			selectionmode: 'singlecell',
			editmode: 'click',
			autoheight: true,
			theme: 'dark',
			columns: [
				{ text: 'Future Expiry Date', columntype: 'datetimeinput', datafield: 'futureExpiryDate', width: '14.28%', cellsformat: 'dd-MMM-yyyy' },
				{ text: 'Issuer', datafield: 'issuer', width: '14.28%' },
				{ text: 'Coupon', datafield: 'coupon', width: '14.28%' },
				{ text: 'Ctd Maturity', columntype: 'datetimeinput', datafield: 'ctdMaturity', width: '14.28%', cellsformat: 'dd-MMM-yyyy' },
				{ text: 'Price At Issue', datafield: 'priceAtIssue', width: '14.28%' },
				{ text: 'Frequency', datafield: 'frequency', width: '14.28%' },
				{ text: 'Convergence Factor', datafield: 'convergenceFactor', width: '14.28%' },
			]
		});
}
function renderFilterGrid(data) {

	let filterDiv = '';
	var filterInitialsDiv = '';
	var filterRollingDiv = '';
	data.forEach(item => {

		const subGroupId = item.subgroupId;
		const name = getSubgroupName(subGroupId);
		if (item.isVisible) {
			filterInitialsDiv += `<div id='jqxCheckBox-${groupId}-${subGroupId}' style='float: left;'><span class="checkboxesTitle">${name}</span></div>`;
			filterRollingDiv += `<div id='jqxCheckBox-${rollingGroupId}-${subGroupId}' style='float: left;'><span class="checkboxesTitle">${name}</span></div>`;
		}
	});
	filterDiv += `<div class="col-3"> <div class="fw-bold">INITIAL</div> ${filterInitialsDiv}</div>`;
	filterDiv += `<div class="col-3"> <div class="fw-bold">ROLLING</div> ${filterRollingDiv}</div>`;

	filterDiv += `<div class="col-3">
					             	<div id='jqxCheckBox-${groupId}-1' style='float: left;'><span class="checkboxesTitle">MTTY</span></div> 
					             	<div id='jqxCheckBox-${groupId}-7' style='float: left;'><span class="checkboxesTitle">Future Expiry Date</span></div> 
					             	<div id='jqxCheckBox-${groupId}-8' style='float: left;'><span class="checkboxesTitle">Issuer</span></div>
					         		<div id='jqxCheckBox-${groupId}-9' style='float: left;'><span class="checkboxesTitle">Coupon</span></div> 
					             	<div id='jqxCheckBox-${groupId}-10' style='float: left;'><span class="checkboxesTitle">Ctd Maturity</span></div>
					             	<div id='jqxCheckBox-${groupId}-11' style='float: left;'><span class="checkboxesTitle">Price At Issue</span></div>
					         		<div id='jqxCheckBox-${groupId}-12' style='float: left;'><span class="checkboxesTitle">Frequency</span></div>
					         	 	<div id='jqxCheckBox-${groupId}-13' style='float: left;'><span class="checkboxesTitle">Convergence Factor</span></div>
					  </div>`;



	$("#filter-container").append(filterDiv);
	let $filterdiv = $(filterDiv);

	let idsArray = $filterdiv.find('div[id]').map(function() {
		return this.id;
	}).get();
	for (let j = 0; j < idsArray.length; j++) {
		allitems.push('#' + idsArray[j]);
	}
	for (let j = 0; j < allitems.length; j++) {
		$(allitems[j]).jqxCheckBox({ theme: 'dark', width: '100%', height: 26 });
	}
	getFilterHistory(groupId);
	getFilterData(selectedItem);
}
function FieldsIsVisible(id) {
	return contains[id] ? contains[id][0] : null;
}
function renderSubGroup() {

	var defaultData = AuditDefaultData;
	var fields = [
		{ name: 'id', type: 'string' },
		{ name: 'futureExpiryDate', type: 'date', format: 'dd-MM-yyyy' },
		{ name: 'issuer', type: 'string' },
		{ name: 'coupon', type: 'string' },
		{ name: 'ctdMaturity', type: 'date' },
		{ name: 'priceAtIssue', type: 'string' },
		{ name: 'frequency', type: 'string' },
		{ name: 'convergenceFactor', type: 'string' },
		{ name: 'maturityName', type: 'string' },
		{ name: 'open', type: 'string' },
		{ name: 'settle', type: 'string' },
		{ name: 'close', type: 'string' },
		{ name: 'high', type: 'string' },
		{ name: 'low', type: 'string' },
		{ name: 'spreadName', type: 'string' },
		{ name: 'spreadValue', type: 'string' },
	];
	var totalFields = fields.length - 1;
	var rollingTotalFields = fields.length - 10;
	let falseCount = countFalseValues(contains);
	totalFields = totalFields - falseCount - 2;
	rollingTotalFields = rollingTotalFields - falseCount;

	var widthPercentage = (100 - 10) / totalFields;
	var rollingWidthPercentage = (100) / rollingTotalFields;
	var spreadWidthPercentage = (100 - 30) / 2;

	const subgroup2 = !FieldsIsVisible(2);
	const subgroup3 = !FieldsIsVisible(3);
	const subgroup4 = !FieldsIsVisible(4);
	const subgroup5 = !FieldsIsVisible(5);
	const subgroup6 = !FieldsIsVisible(6);

	var arrayOFcolumns = [
		{
			text: '', editable: false, datafield: 'Edit', width: '10%', cellsrenderer: function(row) {
				return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit" + row + "\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons" + row + "\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
			}
		},
		{ text: '', editable: false, hidden: true, datafield: 'id', width: widthPercentage + '%' },
		{ text: 'MTTY', datafield: 'maturityName', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		{ text: 'Open', hidden: subgroup2, datafield: 'open', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		{ text: 'Settle', hidden: subgroup3, datafield: 'settle', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		{ text: 'Close', hidden: subgroup4, datafield: 'close', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		{ text: 'High', hidden: subgroup5, datafield: 'high', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		{ text: 'Low', hidden: subgroup6, datafield: 'low', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		{ text: 'Future Expiry Date', datafield: 'futureExpiryDate', columntype: 'datetimeinput', width: widthPercentage + '%', cellsalign: 'center', align: 'center', cellsformat: 'dd-MMM-yyyy' },
		{ text: 'Issuer', datafield: 'issuer', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		{ text: 'Coupon', datafield: 'coupon', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		{ text: 'Ctd Maturity', datafield: 'ctdMaturity', columntype: 'datetimeinput', width: widthPercentage + '%', cellsalign: 'center', align: 'center', cellsformat: 'dd-MMM-yyyy' },
		{ text: 'Price At Issue', datafield: 'priceAtIssue', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		{ text: 'Frequency', datafield: 'frequency', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		{ text: 'Convergence Factor', datafield: 'convergenceFactor', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },


	];
	var rollingArrayOFcolumns = [

		{ text: '', editable: false, hidden: true, datafield: 'id' },
		{ text: 'MTTY', datafield: 'maturityName', width: rollingWidthPercentage + '%', cellsalign: 'center', align: 'center' },
		{ text: 'Open', hidden: subgroup2, datafield: 'open', width: rollingWidthPercentage + '%', cellsalign: 'center', align: 'center' },
		{ text: 'Settle', hidden: subgroup3, datafield: 'settle', width: rollingWidthPercentage + '%', cellsalign: 'center', align: 'center' },
		{ text: 'Close', hidden: subgroup4, datafield: 'close', width: rollingWidthPercentage + '%', cellsalign: 'center', align: 'center' },
		{ text: 'High', hidden: subgroup5, datafield: 'high', width: rollingWidthPercentage + '%', cellsalign: 'center', align: 'center' },
		{ text: 'Low', hidden: subgroup6, datafield: 'low', width: rollingWidthPercentage + '%', cellsalign: 'center', align: 'center' },

	];
	spreadArrayOFcolumns = [
		{
			text: '', editable: false, datafield: 'Edit', width: '30%', cellsrenderer: function(row) {
				return "<input class=\"edit\" type=\"button\" onclick='EditSpread(" + row + ", event)' id=\"editSpread" + row + "\" value=\"Edit\" /><div class=\"row\" id=\"actionButtonsSpread" + row + "\" style=\"display:none\"><input  onclick='UpdateSpread(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdateSpread\"  onclick='CancelSpread(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
			}
		},
		{ text: '', editable: false, hidden: true, datafield: 'id' },
		{ text: 'Spread Name', datafield: 'spreadName', width: spreadWidthPercentage + '%', cellsalign: 'center', align: 'center' },
		{ text: 'Spread Value', datafield: 'spreadValue', width: spreadWidthPercentage + '%', cellsalign: 'center', align: 'center' },


	];
	auditGridSource =
	{
		localdata: defaultData,
		datatype: "json",
		datafields: fields,
		url: ''
	};
	var dataAdapter = new $.jqx.dataAdapter(auditGridSource);

	rollingAuditGridSource =
	{
		localdata: defaultData,
		datatype: "json",
		datafields: fields,
		url: ''
	};
	var rollingDataAdapter = new $.jqx.dataAdapter(rollingAuditGridSource);

	$('#AuditGrid').jqxGrid(
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

	$('#RollingGrid').jqxGrid(
		{
			width: '60%',
			source: rollingDataAdapter,
			theme: 'dark',
			autoheight: true,
			editable: true,
			selectionmode: 'none',
			editmode: 'selectedrow',
			columns: rollingArrayOFcolumns
		});
	$('#SpreadGrid').jqxGrid(
		{
			width: '30%',
			source: dataAdapter,
			theme: 'dark',
			autoheight: true,
			editable: true,
			selectionmode: 'none',
			editmode: 'selectedrow',
			columns: spreadArrayOFcolumns
		});
	getAuditGridSource(groupId);

	$("#delete").click(function() {


		$('#alertDeleteDataByDate-modal').modal('show');
		date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'MMM-yyyy')
		$("#alertTextDeleteDataByDate").empty();
		$("#alertTextDeleteDataByDate").append("<p> Are you sure you want to Delete all longEnds record for the date '" + date + "'?</p>");
	});
	items = [/*
		'#jqxCheckBox-52-1',
		'#jqxCheckBox-52-2',
		'#jqxCheckBox-52-3',
		'#jqxCheckBox-52-4',
		'#jqxCheckBox-52-5',
		'#jqxCheckBox-52-6',
		'#jqxCheckBox-52-7',
		'#jqxCheckBox-52-8',
		'#jqxCheckBox-52-9',
		'#jqxCheckBox-52-10',
		'#jqxCheckBox-52-11',
		'#jqxCheckBox-52-12',
		'#jqxCheckBox-52-13'*/
	];
	var dataInputGridFields = [
		{ name: 'open', type: 'string', hidden: subgroup2 },
		{ name: 'settle', type: 'string', hidden: subgroup3 },
		{ name: 'close', type: 'string', hidden: subgroup4 },
		{ name: 'high', type: 'string', hidden: subgroup5 },
		{ name: 'low', type: 'string', hidden: subgroup6 },
	];
	var totalFields = dataInputGridFields.length;
	totalFields = totalFields - falseCount;
	var widthPercentage = (100) / totalFields;

	var dataInputGridColumns = [
		{ text: 'Open', hidden: subgroup2, datafield: 'open', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		{ text: 'Settle', hidden: subgroup3, datafield: 'settle', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		{ text: 'Close', hidden: subgroup4, datafield: 'close', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		{ text: 'High', hidden: subgroup5, datafield: 'high', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
		{ text: 'Low', hidden: subgroup6, datafield: 'low', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },

	];
	initiate(Type, inputDataLongEnds, items, dataInputGridFields, dataInputGridColumns, defaultData, fields, arrayOFcolumns);

}
function getSubgroupName(subgroupId) {
	const matchingObject = subgrouId_description.find(item => item.subgroupId === subgroupId);
	return matchingObject ? matchingObject.name : null;
}
function getSubgroupDbName(subgroupId) {
	const matchingObject = subgrouId_description.find(item => item.subgroupId === subgroupId);
	return matchingObject ? matchingObject.dbName : null;
}
function getIdfromSubgroupName(name) {
	const matchingObject = subgrouId_description.find(item => item.name.toLowerCase() === name.toLowerCase());
	return matchingObject ? matchingObject.subgroupId : null;
}
function toggleDivVisibility(groupId) {
	// if(groupId==1)
	location.href = "/bourse/longends?longend=" + groupId;
	// else
	// location.href = "/bourse/pageunderconstruction" ;
}
function getgroupId(Id) {
	const matchingObject = groupId_Id.find(item => item.Id === Id);
	return matchingObject ? matchingObject.groupId : null;
}
function countFalseValues(obj) {
	let falseCount = 0;
	Object.values(obj).forEach(arr => {
		if (arr[0] === false) {
			falseCount++;
		}
	});
	return falseCount;
}
function getAuditGridSource(selectedItem) {

	latestUrl = '/longEnds/getlatest/' + selectedItem;
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
					renderAuditGrids(date);

				}
			} else {
				delete auditGridSource.localdata;
				auditGridSource.localdata = [];
				dataAdapter = new $.jqx.dataAdapter(auditGridSource);
				$('#AuditGrid').jqxGrid({ source: dataAdapter });

				delete rollingAuditGridSource.localdata;
				rollingAuditGridSource.localdata = [];
				rollingDataAdapter = new $.jqx.dataAdapter(rollingAuditGridSource);
				$('#RollingGrid').jqxGrid({ source: rollingDataAdapter });

			}
		},
		error: function(e) {

			console.log("ERROR : ", e);

		}
	});

}
function renderAuditGrids(date) {
	delete auditGridSource.localdata;
	auditGridSource.url = auditUrl + groupId + '/' + date;
	dataAdapter = new $.jqx.dataAdapter(auditGridSource);
	$('#AuditGrid').jqxGrid({ source: dataAdapter });

	delete rollingAuditGridSource.localdata;
	rollingAuditGridSource.url = rollingAuditUrl + '/' + date;
	rollingDataAdapter = new $.jqx.dataAdapter(rollingAuditGridSource);
	$('#RollingGrid').jqxGrid({ source: rollingDataAdapter });

	spreadDataAdapter = new $.jqx.dataAdapter(auditGridSource);
	$('#SpreadGrid').jqxGrid({ source: spreadDataAdapter });

}

function initiate(Type, inputDataType, item, dataInputGridFields, dataInputGridColumns, defaultData, fields, arrayOFcolumns) {
	var jsonObject = null;
	$("#delete" + Type).jqxButton({ theme: 'dark', width: 90, height: 30, template: "danger" });
	$("#cancel" + Type).jqxButton({ theme: 'dark', height: 30, width: 74 });
	$("#load" + Type).jqxButton({ theme: 'dark', height: 30, width: 74 });
	$("#cancel" + Type).click(function() {
		inputDataType.value = "";
		$("#dataformInput" + Type).css("display", "block");
		$("#dataInputButtons" + Type).css("display", "none");
		$("#dataInputGrid" + Type).css("display", "none");
	});

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
			const filteredData = dataInputGridFields.filter(item => !item.hidden);

			filteredData.forEach(function(field, index) {
				jsonObject[field.name] = rowData[index];
			});

			localdata.push(jsonObject);

			var dataInputGridSource =
			{
				datatype: "json",
				datafields: dataInputGridFields,
			};
			dataInputGridSource.localData = localdata;
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

	$("#delete" + Type).click(function() {
		if (longEndsValue == 1)
			value = "Bund";
		else if (longEndsValue == 2)
			value = "Bobl Options";
		else if (longEndsValue == 3)
			value = "Buxl Options";
		else if (longEndsValue == 4)
			value = "Shatz Options";
		else if (longEndsValue == 5)
			value = "Euribor Options";

		$('#alertDeleteDataByDate-modal').modal('show');
		date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
		$("#alertTextDeleteDataByDate").empty();
		$("#alertTextDeleteDataByDate").append("<p> Are you sure you want to Delete all " + value + " record for the date '" + date + "'?</p>");
	});
	$("#load" + Type).click(function() {
		var date = new Date();
		var dataToBeInserted = [];
		var listObjects = {};
		const groupId = getgroupId(longEndsValue);

		var rows = $("#dataInputGrid" + Type).jqxGrid('getrows');
		var rowsMtty = $("#lookBackMttyDataInputGriddata").jqxGrid('getrows');
		var rowsLookBack = $("#lookBackDataInputGriddata").jqxGrid('getrows');

		rows.forEach(row => {
			for (var key in row) {
				if (row.hasOwnProperty(key) && key !== "uid" && key !== "boundindex" && key !== "uniqueid" && key !== "visibleindex") {
					if (!listObjects[key]) {
						listObjects[key] = [];
					}
					listObjects[key].push(row[key]);
				}
			}
		});
		rowsMtty.forEach(row => {
			for (var key in row) {
				if (row.hasOwnProperty(key) && key !== "uid" && key !== "boundindex" && key !== "uniqueid" && key !== "visibleindex") {
					if (!listObjects[key]) {
						listObjects[key] = [];
					}
					listObjects[key].push(row[key]);
				}
			}
		});
		rowsLookBack.forEach(row => {
			for (var key in row) {
				if (row.hasOwnProperty(key) && key !== "uid" && key !== "boundindex" && key !== "uniqueid" && key !== "visibleindex") {
					if (!listObjects[key]) {
						listObjects[key] = [];
					}
					listObjects[key].push(row[key]);
				}
			}
		});
		for (var key in listObjects) {
			if (listObjects.hasOwnProperty(key)) {
				listObjects[key].forEach((value, index) => {
					if (typeof value == 'undefined')
						value = '';
					if (value instanceof Date) {
						$.jqx.dataFormat.formatdate(value, 'dd-MM-yyyy');
					} else {
						value.replace(',', '');
					}
					dataToBeInserted.push({
						"groupId": groupId,
						"subgroupId": getIdfromSubgroupName(key),
						"value": value,
						"referDate": $.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
					});
				});
			}
		}
		dataToBeInserted.push({
			"groupId": groupId,
			"subgroupId": getIdfromSubgroupName('spreadName'),
			"value": '',
			"referDate": $.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
		});
		dataToBeInserted.push({
			"groupId": groupId,
			"subgroupId": getIdfromSubgroupName('spreadValue'),
			"value": '',
			"referDate": $.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
		});
		if ($("#dateInput").jqxDateTimeInput('getDate') < date) {
			var today = $("#dateInput").jqxDateTimeInput('getDate');
			if (today.getDay() == 6 || today.getDay() == 0) {
				$('#alert-modal-weekend').modal('show');
				return;
			}
			today = $.jqx.dataFormat.formatdate(today, 'dd-MM-yyyy')
			$.ajax({
				contentType: "application/json",
				url: checkifcanUrl + groupId + "/" + today,
				dataType: 'json',
				async: true,
				cache: false,
				timeout: 600000,
				success: function(response) {
					if (response) {
						$.ajax({
							contentType: "application/json",
							url: "/process/isrobottriggered/10/" + groupId,
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

											$("#spreadValueInput").val('');
											$("#spreadNamedropdown").jqxDropDownList('clearSelection');

											getFilterData(longEndsValue);
										
											inputDataType.value = "";

											$("#dataformInput" + Type).css("display", "block");
											$("#dataInputButtons" + Type).css("display", "none");
											$("#dataInputGrid" + Type).css("display", "none");

											$('#dateInputAudit').jqxDateTimeInput('setDate', $("#dateInput").jqxDateTimeInput('getDate'));
											date = $.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')

											filterDate = date;
											renderAuditGrids(date);

											// triggerRobots();

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

function toggleCollapse() {
	let element = document.getElementById('horizontalExample');
	if (element.classList.contains('show')) {
		element.classList.remove('show');
	} else {
		element.classList.add('show');
	}
}
function getFilterData(selectedItem) {
	var SelectedSearchDTO = [];
	var allItems = 0;
	var checkedItem = [];
	var json;
	var values = [];
	$('#grid').jqxGrid({ showdefaultloadelement: true });
	var item = 0;

	items = allitems;
	for (i = 0; i < items.length; i++) {
		if ($(items[i]).jqxCheckBox('checked')) {
			if (items[i].split("Box")[1] == 'SpreadName')
				values.push('spread_name');
			else
				if (items[i].split("Box")[1] == 'SpreadValue')
					values.push('spread_value');
				else
					if (+items[i].split("Box")[1].toUpperCase().split('-')[2] != 1)
						values.push(getSubgroupDbName(+items[i].split("Box")[1].toUpperCase().split('-')[2]) + "-" + items[i].split("Box")[1].toUpperCase().split('-')[1]);
					else
						values.push("maturity_name-" + items[i].split("Box")[1].toUpperCase().split('-')[1]);

			item = 1;
			allItems = allItems + 1;
			checkedItem.push(items[i]);
		}
	}

	if (item != 0) {

		// Create a map to store suffixes and their corresponding values
		const groups = {};

		// Iterate over the columns and dynamically group by suffix
		values.forEach(column => {
			const suffixMatch = column.match(/-(\d+)$/); // Extract suffix (e.g., '52', '61')

			if (suffixMatch) {
				const suffix = suffixMatch[1];

				// If the group for this suffix doesn't exist, create it
				if (!groups[suffix]) {
					groups[suffix] = [];
				}

				// Add the column to the corresponding group
				groups[suffix].push(column);
			} else if (column === 'spread_name' || column === 'spread_value') {
				// Ensure spread_name and spread_value go into the 52 group
				if (!groups[`${groupId}`]) {
					groups[`${groupId}`] = [];
				}
				groups[`${groupId}`].push(column);
			}
		});

		// Push the groups into SelectedSearchDTO
		Object.keys(groups).forEach(suffix => {
			SelectedSearchDTO.push({
				"groupId": `${suffix}`,
				"selectedValues": groups[suffix]
			});
		});

		/*	SelectedSearchDTO.push({
			   "groupId":groupId,
		   "selectedValues":values,
		});*/
		values = [];
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
				url: "/longEnds/getgriddata",
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

					saveFilterHistory(groupId, checkedItem);
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

function saveFilterHistory(selectedItem, checkedItem) {


	var filterHistory = {
		"filterHistory": checkedItem.toString(),
		"screenName": "DATABASE_INPUT_SCREEN_LONGENDS-" + selectedItem
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
function getFilterHistory(selectedItem) {

	$.ajax({
		contentType: "application/json; charset=utf-8",
		url: "/bourse/getdataentryfilterhistory/" + "DATABASE_INPUT_SCREEN_LONGENDS-" + selectedItem,
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
				for (i = 0; i < selectedItems.length; i++) {
					$(selectedItems[i]).jqxCheckBox({ checked: true });
				}
			}
		},
		error: function(e) {

			console.log("ERROR : ", e);

		}
	});
}

function formatYear(year) {
	return year < 10 ? `0${year}` : year.toString().slice(-2);
}
function generateOptions(startYear) {
	const dropdown = document.getElementById('date-dropdown');
	const months = ['DEC', 'SEP', 'JUN', 'MAR']; // Sorted from latest to earliest
	const currentDate = new Date();
	(currentDate.getMonth() == 11) ? currentDate.setYear(currentDate.getFullYear() + 1) : {}
	const currentYear = currentDate.getFullYear();
	const startYearSuffix = startYear.toString().slice(-2);
	const endYearSuffix = currentYear.toString().slice(-2);

	let dateValues = [];

	for (let year = parseInt(endYearSuffix); year >= parseInt(startYearSuffix); year--) {
		months.forEach(month => {
			dateValues.push(`${month}-${formatYear(year)}`);
		});
	}



	for (let i = 1; i < dateValues.length; i++) {
		const current = dateValues[i];
		const previous = dateValues[i - 1];
		const [monthStart, yearStart] = current.split('-');
		const [monthEnd, yearEnd] = previous.split('-');

		const optionValue = `${monthStart}-${yearStart} / ${monthEnd}-${yearEnd}`;
		datePairs.push(optionValue);
	}

	$("#spreadNamedropdown").jqxDropDownList({ theme: 'dark', source: datePairs, width: '100%', height: 30 });

}

function Edit(row, event) {

	isedit = true;
	var data = $('#AuditGrid').jqxGrid('getrowdata', row);

	oldDataJson = {
		"futureExpiryDate": data.futureExpiryDate,
		"issuer": data.issuer,
		"coupon": data.coupon,
		"ctdMaturity": data.ctdMaturity,
		"priceAtIssue": data.priceAtIssue,
		"frequency": data.frequency,
		"convergenceFactor": data.convergenceFactor,
		"maturityName": data.maturityName,
		"open": data.open,
		"settle": data.settle,
		"close": data.close,
		"high": data.high,
		"low": data.low,
	};

	selectedRow.editrow = row;
	date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
	if (auditGridSource.url == '' || date != filterDate) {
		renderAuditGrids(date);
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
			$('#AuditGrid').jqxGrid('beginrowedit', row);
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
function EditSpread(row, event) {

	isedit = true;
	var data = $('#SpreadGrid').jqxGrid('getrowdata', row);

	oldDataJson = {
		"spreadName": data.spreadName,
		"spreadValue": data.spreadValue,
	};

	selectedRow.editrow = row;
	date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
	if (auditGridSource.url == '' || date != filterDate) {
		renderAuditGrids(date);
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
			$('#SpreadGrid').jqxGrid('beginrowedit', row);
			$("#editSpread" + row).css("display", "none");
			$("#actionButtonsSpread" + row).css("display", "contents");
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
	var updatedData = $('#AuditGrid').jqxGrid('getrowdata', row);
	selectedRow.editrow = -1;
	$('#AuditGrid').jqxGrid('endrowedit', row);
	var updatedData = $('#AuditGrid').jqxGrid('getrowdata', row);

	updatedDataJson = {
		"futureExpiryDate": updatedData.futureExpiryDate,
		"issuer": updatedData.issuer,
		"coupon": updatedData.coupon,
		"ctdMaturity": updatedData.ctdMaturity,
		"priceAtIssue": updatedData.priceAtIssue,
		"frequency": updatedData.frequency,
		"convergenceFactor": updatedData.convergenceFactor,
		"maturityName": updatedData.maturityName,
		"open": updatedData.open,
		"settle": updatedData.settle,
		"close": updatedData.close,
		"high": updatedData.high,
		"low": updatedData.low,
	};


	keys = Object.keys(updatedDataJson);

	for (var i = 0; i < keys.length; i++) {
		var field = keys[i];
		if (updatedDataJson[field] !== oldDataJson[field]) {
			var value = updatedDataJson[field];
			if (value instanceof Date) {
				$.jqx.dataFormat.formatdate(value, 'dd-MM-yyyy');
			} else {
				value.replace(',', '');
			}
			dataToBeUpdated.push({
				"subgroupId": getIdfromSubgroupName((field == 'maturityName') ? 'mtty' : field),
				"groupId": groupId,
				"value": value,
				"referdate": date
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


			renderlookUpGridsData();
			renderAuditGrids(date);
			getFilterData(selectedItem);
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
function UpdateSpread(row, event) {

	isupdate = true;
	var dataToBeUpdated = [];
	var updatedDataJson;
	var keys;
	var updatedData = $('#SpreadGrid').jqxGrid('getrowdata', row);
	selectedRow.editrow = -1;
	$('#SpreadGrid').jqxGrid('endrowedit', row);
	var updatedData = $('#SpreadGrid').jqxGrid('getrowdata', row);

	updatedDataJson = {
		"spreadName": updatedData.spreadName,
		"spreadValue": updatedData.spreadValue == '' ? null : updatedData.spreadValue,
	};


	keys = Object.keys(updatedDataJson);

	for (var i = 0; i < keys.length; i++) {
		var field = keys[i];
		if (updatedDataJson[field] !== oldDataJson[field]) {

			dataToBeUpdated.push({
				"subgroupId": getIdfromSubgroupName(field),
				"groupId": groupId,
				"value": (updatedDataJson[field] != null) ? updatedDataJson[field].replace(',', '') : null,
				"referdate": date
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



			renderAuditGrids(date);
			getFilterData(selectedItem);
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
	$('#AuditGrid').jqxGrid('endrowedit', row, true);
}
function CancelSpread(row) {
	isedit = false;
	isupdate = false;
	selectedRow.editrow = row;
	$('#SpreadGrid').jqxGrid('endrowedit', row, true);
}

function deleteDataByDate() {
	$('#alertDeleteDataByDate-modal').modal('hide');
	date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')

	$.ajax({
		type: "DELETE",
		url: deleteUrl + groupId + '/' + date,
		success: function(result) {

			getAuditGridSource(groupId);

			getFilterData(groupId);
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

function triggerRobots() {
	$.ajax({
		contentType: "application/json; charset=utf-8",
		url: "/robot/callrobotsasync/10/" + groupId,
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
function ClearSpreadData() {
	$("#spreadValueInput").val('');
	$("#spreadNamedropdown").jqxDropDownList('clearSelection');
}
function SubmitSpreadData() {
	var dataToBeInserted = [];
	var date = new Date();
	if ($("#dateInput").jqxDateTimeInput('getDate') < date) {
		var today = $("#dateInput").jqxDateTimeInput('getDate');
		if (today.getDay() == 6 || today.getDay() == 0) {
			$('#alert-modal-weekend').modal('show');
			return;
		}
		today = $.jqx.dataFormat.formatdate(today, 'dd-MM-yyyy');
		dataToBeInserted.push({
			"groupId": groupId,
			"subgroupId": getIdfromSubgroupName('spreadName'),
			"value": $("#spreadNamedropdown").val(),
			"referdate": $.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
		});
		dataToBeInserted.push({
			"groupId": groupId,
			"subgroupId": getIdfromSubgroupName('spreadValue'),
			"value": Number($("#spreadValueInput").val()) != 0 ? Number($("#spreadValueInput").val()) : null,
			"referdate": $.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
		});
		$.ajax({
			contentType: "application/json",
			url: checkifcanUrl + groupId + "/" + today,
			dataType: 'json',
			async: true,
			cache: false,
			timeout: 600000,
			success: function(response) {
				if (!response) {
					$.ajax({
						contentType: "application/json",
						url: "/process/isrobottriggered/10/" + groupId,
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
									url: updateUrl,
									data: JSON.stringify(dataToBeInserted),
									dataType: 'json',
									async: false,
									cache: false,
									timeout: 600000,
									success: function(data) {

										$("#spreadValueInput").val('');
										$("#spreadNamedropdown").jqxDropDownList('clearSelection');

										getFilterData(longEndsValue);

										$('#dateInputAudit').jqxDateTimeInput('setDate', $("#dateInput").jqxDateTimeInput('getDate'));
										date = $.jqx.dataFormat.formatdate($("#dateInput").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')

										filterDate = date;
										renderAuditGrids(date);


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
					$('#alert-modal-not-exist').modal('show');
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

}