var selectedRow = this;

var monthDate = new Date();

monthDate.setMonth(monthDate.getMonth() - 6);

const ASSET_ID = 13;

const GROUP_MODULES = {
	1: [
		{ groupId: 86, name: 'BUNDS 2<sup>nd</sup>  CONSTANT MATURITY', shortName: ' 2<sup>nd</sup>  CONSTANT MATURITY' },
		{ groupId: 87, name: 'BUNDS 3<sup>rd</sup>  CONSTANT MATURITY', shortName: ' 3<sup>rd</sup>  CONSTANT MATURITY' }
	],
	2: [
		{ groupId: 88, name: 'BOBLS 2<sup>nd</sup>  CONSTANT MATURITY', shortName: ' 2<sup>nd</sup>  CONSTANT MATURITY' },
		{ groupId: 89, name: 'BOBLS 3<sup>rd</sup>  CONSTANT MATURITY', shortName: ' 3<sup>rd</sup>  CONSTANT MATURITY' }
	],
	3: [
		{ groupId: 90, name: 'SHATZ 2<sup>nd</sup>  CONSTANT MATURITY', shortName: ' 2<sup>nd</sup>  CONSTANT MATURITY' },
		{ groupId: 91, name: 'SHATZ 3<sup>rd</sup>  CONSTANT MATURITY', shortName: ' 3<sup>rd</sup>  CONSTANT MATURITY' }
	],
	4: [
		{ groupId: 92, name: 'BUXL 2<sup>nd</sup>  CONSTANT MATURITY', shortName: ' 2<sup>nd</sup> CONSTANT MATURITY' }
	],
	5: [
		{ groupId: 93, name: 'OAT 2<sup>nd</sup>  CONSTANT MATURITY', shortName: 'OAT' , shortName: ' 2<sup>nd</sup> CONSTANT MATURITY'  }
	],
	6: [
		{ groupId: 94, name: 'BTP 2<sup>nd</sup>  CONSTANT MATURITY', shortName: 'BTP', shortName: ' 2<sup>nd</sup> CONSTANT MATURITY'  }
	],
	7: [
		{ groupId: 95, name: 'GILTS 2<sup>nd</sup>  CONSTANT MATURITY', shortName: 'GILTS', shortName: ' 2<sup>nd</sup> CONSTANT MATURITY'  }
	],
	8: [
		{ groupId: 96, name: 'T-NOTES 2<sup>nd</sup>  CONSTANT MATURITY', shortName: ' 2<sup>nd</sup>  CONSTANT MATURITY' },
		{ groupId: 97, name: 'T-NOTES 3<sup>rd</sup>  CONSTANT MATURITY', shortName: ' 3<sup>rd</sup>  CONSTANT MATURITY' }
	],
	9: [
		{ groupId: 98, name: 'T-BONDS 2<sup>nd</sup>  CONSTANT MATURITY', shortName: ' 2<sup>nd</sup>  CONSTANT MATURITY' },
		{ groupId: 99, name: 'T-BONDS 3<sup>rd</sup>  CONSTANT MATURITY', shortName: ' 3<sup>rd</sup>  CONSTANT MATURITY' }
	]
};

const GROUP_BUTTONS = {
	1: '#bunds-btn',
	2: '#bobl-btn',
	3: '#shtaz-btn',
	4: '#buxl-btn',
	5: '#oat-btn',
	6: '#btp-btn',
	7: '#gilts-btn',
	8: '#tnotes-btn',
	9: '#tbonds-btn'
};

let activeGroup = getActiveGroupFromPage();

function getCurrentModules() {
	return GROUP_MODULES[activeGroup] || GROUP_MODULES[1];
}

function getFilterHistoryScreen() {
	var modules = getCurrentModules();
	return 'DATABASE_INPUT_SCREEN_LONG_END_IMPLIED_VOLATILITY-' + modules[0].groupId;
}

const SUBGROUPS = [

	{ subgroupId: 1, name: 'MTTY', dbName: 'maturity_name', dtoName: 'maturityName', type: 'string', editable: true },

	{ subgroupId: 2, name: 'B&S 365 IMPLIED VOL', dbName: 'bs_vol', dtoName: 'bsVol', type: 'string', editable: true },

	{ subgroupId: 3, name: 'DELIVERED TICK VOL', dbName: 'delivered_tick_vol', dtoName: 'deliveredTickVol', type: 'string', editable: false },

	{ subgroupId: 4, name: 'STRIKE', dbName: 'strike', dtoName: 'strike', type: 'string', editable: true },

	{ subgroupId: 5, name: 'STRADDLE PRICE', dbName: 'straddle_price', dtoName: 'straddlePrice', type: 'string', editable: true }

];

// DELIVERED TICK VOL is CALCULATED in the DB configuration and is not part of manual input.

const INPUT_SUBGROUPS = SUBGROUPS.filter(item => item.editable);

const API = {

	auditData: '/longEndImpliedVol/audit-data/',

	data: '/longEndImpliedVol/data/',

	latest: '/longEndImpliedVol/getlatest/',

	checkCanSave: '/longEndImpliedVol/checkifcansave/',

	save: '/longEndImpliedVol/save-long-end-implied-vol-data',

	update: '/longEndImpliedVol/update-long-end-implied-vol-data',

	delete: '/longEndImpliedVol/delete/',

	gridData: '/longEndImpliedVol/getgriddata'

};


var inputData = document.getElementById('data-input-data');

var auditGridSource = null;

var auditDataAdapter = null;

var source;

var allitems = [];

var oldDataJson = null;

var filterDate = null;

$(document).ready(function() {

	$('#overlay').fadeOut();

	$('#container-wrapper').show();

	$('#viewall').jqxButton({ theme: 'dark', width: 110, height: 35, template: 'primary' });

	$('#viewall').css('display', 'block');

	$('#viewall').click(function() {

		popupWindow('/bourse/allnews', 'Libvol-View All News', window, 1300, 600);

	});

	$('[data-toggle="tooltip"]').tooltip();

	applyActiveGroupStyle();

	$('#dateInput').jqxDateTimeInput({ theme: 'dark', width: '195px', height: '25px' });

	$('#dateInputAudit').jqxDateTimeInput({ theme: 'dark', width: '195px', height: '25px' });

	$('#dateInputFrom').jqxDateTimeInput({ theme: 'dark', width: '200px', height: '25px' });

	$('#dateInputFrom').jqxDateTimeInput('setDate', monthDate);

	$('#dateInputTo').jqxDateTimeInput({ theme: 'dark', width: '200px', height: '25px' });

	$('#filter').jqxButton({ theme: 'dark', height: 30, width: 74 });

	$('#Clearfilter').jqxButton({ theme: 'dark', height: 30, width: 74 });

	$('#loaddata').jqxButton({ theme: 'dark', height: 30, width: 74 });

	$('#canceldata').jqxButton({ theme: 'dark', height: 30, width: 74 });

	$('#deletedata').jqxButton({ theme: 'dark', width: 90, height: 30, template: 'danger' });

	buildInputTitles();

	buildInputModuleLabels();

	initializeAuditGrids();

	/*

	 * Keep the same startup behavior as the existing Data Input screens:

	 * initialize the history grid first, restore the saved filter selections,

	 * then immediately load the saved-history result set.

	 */

	initializeHistoryGrid();

	initializeFilterGrid();

	// Load saved filter history immediately, same as the existing input screens.
	getFilterData();

	bindInputEvents();

	bindActions();

	$('#dateInputAudit').on('change', function() {

		var date = formatDate($('#dateInputAudit').jqxDateTimeInput('getDate'));

		filterDate = date;

		renderAuditGrid(date);

	});

	$('#filter').click(function() {

		getFilterData();

	});

	$('#Clearfilter').click(function() {

		allitems.forEach(function(item) {

			$(item).jqxCheckBox({ checked: false });

		});

	});

	loadLatestAuditEntry();

});


function getActiveGroupFromPage() {
	var params = new URLSearchParams(window.location.search);
	var moduleValue = parseInt(params.get('module'), 10);

	if (!isNaN(moduleValue) && GROUP_BUTTONS[moduleValue]) {
		return moduleValue;
	}

	var hiddenValue = $('#longEndsValue').text();
	var hiddenGroup = parseInt(hiddenValue, 10);

	if (!isNaN(hiddenGroup) && GROUP_BUTTONS[hiddenGroup]) {
		return hiddenGroup;
	}

	return 1;
}

function applyActiveGroupStyle() {
	Object.keys(GROUP_BUTTONS).forEach(function(key) {
		var selector = GROUP_BUTTONS[key];

		if (!$(selector).length) {
			return;
		}

		$(selector)
			.removeClass('active btn-primary')
			.addClass('btn-secondary');
	});

	var activeSelector = GROUP_BUTTONS[activeGroup];

	if ($(activeSelector).length) {
		$(activeSelector)
			.removeClass('btn-secondary')
			.addClass('active btn-primary');
	}
}

function toggleDivVisibility(groupNumber) {
	if (!GROUP_MODULES[groupNumber]) {
		return;
	}

	activeGroup = groupNumber;
	window.location.href = '/bourse/longendimpliedvol?module=' + groupNumber;
}

function parseLatestApiDate(value) {
	if (value == null) {
		return null;
	}

	var text = String(value).trim();

	if (!text) {
		return null;
	}

	if (text.length >= 2 && text.charAt(0) === '"' && text.charAt(text.length - 1) === '"') {
		text = text.substring(1, text.length - 1);
	}

	var match = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);

	if (match) {
		return new Date(
			parseInt(match[1], 10),
			parseInt(match[2], 10) - 1,
			parseInt(match[3], 10)
		);
	}

	match = text.match(/^(\d{2})-(\d{2})-(\d{4})$/);

	if (match) {
		return new Date(
			parseInt(match[3], 10),
			parseInt(match[2], 10) - 1,
			parseInt(match[1], 10)
		);
	}

	var parsed = new Date(text);
	return isNaN(parsed.getTime()) ? null : parsed;
}

function loadLatestAuditEntry() {
	var requests = getCurrentModules().map(function(module) {
		return $.ajax({
			contentType: 'application/json',
			url: API.latest + module.groupId,
			dataType: 'text',
			async: true,
			cache: false,
			timeout: 600000
		}).then(function(response) {
			return {
				module: module,
				date: parseLatestApiDate(response)
			};
		}, function(error) {
			console.log('ERROR loading latest date for group ' + module.groupId + ': ', error);
			return {
				module: module,
				date: null
			};
		});
	});

	$.when.apply($, requests).done(function() {
		var results;

		if (getCurrentModules().length === 1) {
			results = [arguments[0]];
		} else {
			results = Array.prototype.slice.call(arguments);
		}

		var latestDate = null;

		results.forEach(function(result) {
			if (!result || !result.date) {
				return;
			}

			if (latestDate == null || result.date.getTime() > latestDate.getTime()) {
				latestDate = result.date;
			}
		});

		if (latestDate == null) {
			auditGridSource.localdata = [];
			delete auditGridSource.url;
			auditDataAdapter = new $.jqx.dataAdapter(auditGridSource);
			$('#auditGrid').jqxGrid({ source: auditDataAdapter });
			return;
		}

		$('#dateInputAudit').jqxDateTimeInput('setDate', latestDate);

		var latestAuditDate = formatDate(latestDate);
		filterDate = latestAuditDate;

		renderAuditGrid(latestAuditDate);
	});
}

function buildInputTitles() {

	var html = '';

	INPUT_SUBGROUPS.forEach(function(field) {

		html += '<h8 class="fw-bold text-center" style="flex:1;">' + field.name + '</h8>';

	});

	$('#input-titles').html(html);

}

function buildInputModuleLabels() {

	var modules = getCurrentModules();
	var html = '';

	modules.forEach(function(module, index) {

		var label;

		if (modules.length === 1) {
			label = '2<sup>nd</sup> CONSTANT MATURITY';
		} else if (index === 0) {
			label = '2<sup>nd</sup> CONSTANT MATURITY';
		} else if (index === 1) {
			label = '3<sup>rd</sup> CONSTANT MATURITY';
		} else {
			label = module.name;
		}

		html += '<h8 class="font-weight-bold" style="height:31px; line-height:31px;">'
			+ label
			+ '</h8>';
	});

	$('#input-module-labels').html(html);

	/*
	 * Keep the paste area aligned with the number of configured modules.
	 * Single-module groups get one row; 2nd /3rd  CM groups get two rows.
	 */
	$('#data-input-data').attr('rows', Math.max(1, modules.length));
}


function bindInputEvents() {

	$('#data-input-data').on('keydown', function(event) {

		// Keep Enter available for the second module row. Ctrl+Enter previews immediately.

		if (event.ctrlKey && event.keyCode === 13) {

			event.preventDefault();

			previewInput();

		}

	});

	inputData.addEventListener('blur', function() {

		if ($('#data-input-data').val().trim() !== '') {

			previewInput();

		}

	});

}

function previewInput() {

	var raw = $('#data-input-data').val().trim();

	if (!raw) {

		return;

	}

	var rows = raw.split(/\r?\n/).filter(function(line) { return line.trim() !== ''; });

	var localdata = [];

	for (var i = 0; i < rows.length && i < getCurrentModules().length; i++) {

		var values = rows[i].split(/\t/);

		var item = {

			module: getCurrentModules()[i].shortName,

			groupId: getCurrentModules()[i].groupId

		};

		INPUT_SUBGROUPS.forEach(function(field, index) {

			item[field.dtoName] = typeof values[index] !== 'undefined' ? values[index].trim() : '';

		});

		localdata.push(item);

	}

	// Always show two rows so the user can immediately see which module is missing.

	while (localdata.length < getCurrentModules().length) {

		var module = getCurrentModules()[localdata.length];

		var emptyItem = { module: module.shortName, groupId: module.groupId };

		INPUT_SUBGROUPS.forEach(function(field) { emptyItem[field.dtoName] = ''; });

		localdata.push(emptyItem);

	}

	var datafields = [

		{ name: 'module', type: 'string' },

		{ name: 'groupId', type: 'number' }

	];

	INPUT_SUBGROUPS.forEach(function(field) {

		datafields.push({ name: field.dtoName, type: field.type });

	});

	var columns = [

		{ text: 'MODULE', datafield: 'module', width: '24%', editable: false, cellsalign: 'center', align: 'center' }

	];

	var fieldWidth = (76 / INPUT_SUBGROUPS.length) + '%';

	INPUT_SUBGROUPS.forEach(function(field) {

		columns.push({ text: field.name, datafield: field.dtoName, width: fieldWidth, cellsalign: 'center', align: 'center' });

	});

	var inputSource = {

		datatype: 'json',

		datafields: datafields,

		localdata: localdata

	};

	$('#dataInputGriddata').jqxGrid({

		width: '100%',

		source: new $.jqx.dataAdapter(inputSource),

		theme: 'dark',

		enabletooltips: true,

		selectionmode: 'none',

		autoheight: true,

		editable: true,

		columns: columns

	});

	$('#dataformInputdata').css('display', 'none');

	$('#dataInputGriddata').css('display', 'block');

	$('#dataInputButtonsdata').css('display', 'block');

}

function initializeAuditGrids() {

	var fields = [

		{ name: 'groupId', type: 'number' },

		{ name: 'module', type: 'string' },

		{ name: 'id', type: 'string' }

	];

	SUBGROUPS.forEach(function(field) {

		fields.push({ name: field.dtoName, type: field.type });

	});

	auditGridSource = {

		localdata: [],

		datatype: 'json',

		datafields: fields

	};

	auditDataAdapter = new $.jqx.dataAdapter(auditGridSource);

	var editableFields = SUBGROUPS.filter(function(field) { return field.editable; });

	// Preserve the original Long Ends audit-grid sizing behavior:

	// 10% is reserved for the action column and the remaining visible

	// columns share the rest of the grid. No special Implied Vol width

	// customization is applied.

	var totalFields = SUBGROUPS.length + 1; // MODULE + configured subgroup fields

	var widthPercentage = (100 - 10) / totalFields;

	var columns = [

		{

			text: '', editable: false, datafield: 'Edit', width: '10%', cellsrenderer: function(row) {

				var rowData = $('#auditGrid').jqxGrid('getrowdata', row);

				var groupId = rowData ? rowData.groupId : 0;

				return '<input class="edit" type="button" onclick="Edit(' + row + ', event)" id="edit-' + groupId + '-' + row + '" value="Edit" />' +

					'<div class="row" id="actionButtons-' + groupId + '-' + row + '" style="display:none">' +

					'<input onclick="Update(' + row + ', event)" class="update" type="button" value="Update" />' +

					'<input onclick="Cancel(' + row + ')" type="button" class="cancel" value="Cancel" /></div>';

			}

		},

		{ text: 'MODULE', editable: false, datafield: 'module', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },

		{ text: '', editable: false, hidden: true, datafield: 'groupId' },

		{ text: '', editable: false, hidden: true, datafield: 'id' }

	];

	SUBGROUPS.forEach(function(field) {

		columns.push({

			text: field.name,

			datafield: field.dtoName,

			width: widthPercentage + '%',

			editable: field.editable,

			cellsalign: 'center',

			align: 'center'

		});

	});

	$('#auditGrid').jqxGrid({

		width: '100%',

		source: auditDataAdapter,

		theme: 'dark',

		autoheight: true,

		editable: true,

		selectionmode: 'none',

		editmode: 'selectedrow',

		columns: columns

	});

}

function renderAuditGrid(date) {

	var requests = getCurrentModules().map(function(module) {

		return $.ajax({

			contentType: 'application/json',

			url: API.auditData + module.groupId + '/' + date,

			dataType: 'json',

			async: true,

			cache: false,

			timeout: 600000

		}).then(function(data) {

			return { module: module, data: data };

		});

	});

	$.when.apply($, requests).done(function() {

		var results;

		if (getCurrentModules().length === 1) {

			results = [arguments[0]];

		} else {

			results = Array.prototype.slice.call(arguments);

		}

		var combinedRows = [];

		results.forEach(function(result) {

			var module = result.module;

			var rows = normalizeAuditRows(result.data);

			if (rows.length === 0) {

				var emptyRow = {

					groupId: module.groupId,

					module: module.shortName,

					id: null

				};

				SUBGROUPS.forEach(function(field) { emptyRow[field.dtoName] = ''; });

				combinedRows.push(emptyRow);

				return;

			}

			rows.forEach(function(row) {

				var combined = {

					groupId: module.groupId,

					module: module.shortName,

					id: row.id

				};

				SUBGROUPS.forEach(function(field) {

					// Support both DTO/camelCase and DB/snake_case response names.

					if (typeof row[field.dtoName] !== 'undefined') {

						combined[field.dtoName] = row[field.dtoName];

					} else if (typeof row[field.dbName] !== 'undefined') {

						combined[field.dtoName] = row[field.dbName];

					} else {

						combined[field.dtoName] = '';

					}

				});

				combinedRows.push(combined);

			});

		});

		// Keep the configured module order in the UI even as more groups are added later.

		combinedRows.sort(function(a, b) {

			return getCurrentModules().findIndex(function(m) { return m.groupId === a.groupId; }) -

				getCurrentModules().findIndex(function(m) { return m.groupId === b.groupId; });

		});

		auditGridSource.localdata = combinedRows;

		delete auditGridSource.url;

		auditDataAdapter = new $.jqx.dataAdapter(auditGridSource);

		$('#auditGrid').jqxGrid({ source: auditDataAdapter });

	}).fail(function(e) {

		console.log('ERROR : ', e);

		auditGridSource.localdata = [];

		auditDataAdapter = new $.jqx.dataAdapter(auditGridSource);

		$('#auditGrid').jqxGrid({ source: auditDataAdapter });

	});

}

function normalizeAuditRows(data) {

	if (Array.isArray(data)) {

		return data;

	}

	if (data && Array.isArray(data.rows)) {

		return data.rows;

	}

	if (data && Array.isArray(data.records)) {

		return data.records;

	}

	if (data && typeof data === 'object' && Object.keys(data).length > 0) {

		return [data];

	}

	return [];

}

function bindActions() {

	$('#canceldata').click(function() {

		inputData.value = '';

		$('#dataformInputdata').css('display', 'block');

		$('#dataInputButtonsdata').css('display', 'none');

		$('#dataInputGriddata').css('display', 'none');

	});

	$('#loaddata').click(saveBothModules);

	$('#deletedata').click(function() {

		var date = formatDate($('#dateInputAudit').jqxDateTimeInput('getDate'));

		$('#alertDeleteDataByDate-modal').modal('show');

		$('#alertTextDeleteDataByDate').empty().append(

			'<p>Are you sure you want to delete all ' + getCurrentModules().map(function(m) { return m.shortName; }).join(' and ') + ' records for the date \'' + date + '\'?</p>'

		);

	});

}

function saveBothModules() {

	var selectedDate = $('#dateInput').jqxDateTimeInput('getDate');

	var now = new Date();

	if (selectedDate >= now) {

		$('#alertDate-modal').modal('show');

		return;

	}

	if (selectedDate.getDay() === 6 || selectedDate.getDay() === 0) {

		$('#alert-modal-weekend').modal('show');

		return;

	}

	var rows = $('#dataInputGriddata').jqxGrid('getrows');

	var dataToBeInserted = [];

	getCurrentModules().forEach(function(module, rowIndex) {

		var row = rows[rowIndex];

		if (!row) {

			return;

		}

		INPUT_SUBGROUPS.forEach(function(field) {

			var value = row[field.dtoName];

			if (typeof value === 'undefined' || value === null) {

				value = '';

			}

			if (typeof value === 'string') {

				value = value.replace(/,/g, '').trim();

			}

			dataToBeInserted.push({

				groupId: module.groupId,

				subgroupId: field.subgroupId,

				value: value,

				referDate: formatDate(selectedDate)

			});

		});

	});

	var dateText = formatDate(selectedDate);

	checkCanSaveBoth(dateText, function(canSave) {

		if (!canSave) {

			$('#alert-modal').modal('show');

			return;

		}

		checkRobotsRunning(function(robotsRunning) {

			if (robotsRunning) {

				$('#alert-modal-robot').modal('show');

				return;

			}

			$.ajax({

				type: 'POST',

				contentType: 'application/json',

				url: API.save,

				data: JSON.stringify(dataToBeInserted),

				dataType: 'json',

				async: false,

				cache: false,

				timeout: 600000,

				success: function() {

					inputData.value = '';

					$('#dataformInputdata').css('display', 'block');

					$('#dataInputButtonsdata').css('display', 'none');

					$('#dataInputGriddata').css('display', 'none');

					$('#dateInputAudit').jqxDateTimeInput('setDate', selectedDate);

					filterDate = dateText;

					renderAuditGrid(dateText);

					getFilterData();

					triggerRobots();

				},

				error: function(e) {

					console.log('ERROR : ', e);

				}

			});

		});

	});

}

function checkCanSaveBoth(date, callback) {

	var requests = getCurrentModules().map(function(module) {

		return $.ajax({

			contentType: 'application/json',

			url: API.checkCanSave + module.groupId + '/' + date,

			dataType: 'json',

			async: true,

			cache: false,

			timeout: 600000

		});

	});

	$.when.apply($, requests).done(function() {

		var args = arguments;

		var results = getCurrentModules().length === 1 ? [args[0]] : Array.prototype.slice.call(args).map(function(x) { return x[0]; });

		callback(results.every(function(value) { return value === true; }));

	}).fail(function(e) {

		console.log('ERROR : ', e);

		callback(false);

	});

}

function checkRobotsRunning(callback) {

	var requests = getCurrentModules().map(function(module) {

		return $.ajax({

			contentType: 'application/json',

			url: '/process/isrobottriggered/' + ASSET_ID + '/' + module.groupId,

			dataType: 'text',

			async: true,

			cache: false,

			timeout: 600000

		});

	});

	$.when.apply($, requests).done(function() {

		var args = arguments;

		var results = getCurrentModules().length === 1 ? [args[0]] : Array.prototype.slice.call(args).map(function(x) { return x[0]; });

		callback(results.some(function(value) { return value === 'true'; }));

	}).fail(function(e) {

		console.log('ERROR : ', e);

		callback(false);

	});

}

function Edit(row, event) {

	var data = $('#auditGrid').jqxGrid('getrowdata', row);

	if (!data) {

		return false;

	}

	oldDataJson = {};

	INPUT_SUBGROUPS.forEach(function(field) {

		oldDataJson[field.dtoName] = data[field.dtoName];

	});

	selectedRow.editrow = row;

	$('#auditGrid').jqxGrid('beginrowedit', row);

	$('#edit-' + data.groupId + '-' + row).css('display', 'none');

	$('#actionButtons-' + data.groupId + '-' + row).css('display', 'contents');

	if (event && event.preventDefault) {

		event.preventDefault();

	}

	return false;

}

function Update(row, event) {

	var date = formatDate($('#dateInputAudit').jqxDateTimeInput('getDate'));

	var beforeRow = $('#auditGrid').jqxGrid('getrowdata', row);

	if (!beforeRow) {

		return false;

	}

	var groupId = beforeRow.groupId;

	$('#auditGrid').jqxGrid('endrowedit', row);

	var updatedData = $('#auditGrid').jqxGrid('getrowdata', row);

	var dataToBeUpdated = [];

	INPUT_SUBGROUPS.forEach(function(field) {

		var before = oldDataJson ? oldDataJson[field.dtoName] : null;

		var after = updatedData[field.dtoName];

		if (after !== before) {

			var value = after == null ? '' : String(after).replace(/,/g, '');

			dataToBeUpdated.push({

				subgroupId: field.subgroupId,

				groupId: groupId,

				value: value,

				referdate: date

			});

		}

	});

	if (dataToBeUpdated.length === 0) {

		renderAuditGrid(date);

		return false;

	}

	$.ajax({

		type: 'POST',

		contentType: 'application/json',

		url: API.update,

		data: JSON.stringify(dataToBeUpdated),

		dataType: 'json',

		async: true,

		cache: false,

		timeout: 600000,

		success: function() {

			renderAuditGrid(date);

			getFilterData();

		},

		error: function(e) {

			console.log('ERROR : ', e);

			renderAuditGrid(date);

		}

	});

	if (event && event.preventDefault) {

		event.preventDefault();

	}

	return false;

}

function Cancel(row) {

	var data = $('#auditGrid').jqxGrid('getrowdata', row);

	$('#auditGrid').jqxGrid('endrowedit', row, true);

	if (data) {

		$('#edit-' + data.groupId + '-' + row).css('display', 'block');

		$('#actionButtons-' + data.groupId + '-' + row).css('display', 'none');

	}

}

function deleteDataByDate() {

	$('#alertDeleteDataByDate-modal').modal('hide');

	var date = formatDate($('#dateInputAudit').jqxDateTimeInput('getDate'));

	var requests = getCurrentModules().map(function(module) {

		return $.ajax({ type: 'DELETE', url: API.delete + module.groupId + '/' + date });

	});

	$.when.apply($, requests).done(function() {

		renderAuditGrid(date);

		getFilterData();

		$('#successDelete').empty().append('<p>All configured module records for the date \'' + date + '\' have been deleted.</p>');

		$('#alertInfoDeleteDataByDate-modal').modal('show');

	}).fail(function(e) {

		console.log(e);

	});

}

function triggerRobots() {

	getCurrentModules().forEach(function(module) {

		$.ajax({

			contentType: 'application/json; charset=utf-8',

			url: '/robot/callrobotsasync/' + ASSET_ID + '/' + module.groupId,

			dataType: 'json',

			timeout: 600000,

			async: true,

			error: function(e) {

				console.log('ERROR : ', e);

			}

		});

	});

}

function initializeFilterGrid() {

	var filterHtml = '';

	getCurrentModules().forEach(function(module) {

		filterHtml += '<div class="col-6"><div class="font-weight-bold mb-1">' + module.shortName + '</div>';

		SUBGROUPS.forEach(function(field) {

			var id = 'jqxCheckBox-' + module.groupId + '-' + field.subgroupId;

			filterHtml += '<div id="' + id + '"><span class="checkboxesTitle">' + field.name + '</span></div>';

			allitems.push('#' + id);

		});

		filterHtml += '</div>';

	});

	$('#filter-container').html(filterHtml);

	allitems.forEach(function(item) {

		$(item).jqxCheckBox({ theme: 'dark', width: '100%', height: 26 });

	});

	getFilterHistory();

}

function initializeHistoryGrid() {

	/*
	 * History-grid fields are intentionally NOT hard-coded here.
	 * getgriddata returns fieldType/data format from column_configuration,
	 * and getFilterData() builds source.datafields dynamically from that metadata.
	 */
	source = {

		datatype: 'json',

		datafields: [{ name: 'refer_date', type: 'date' }],

		id: 'id',

		localdata: ''

	};

	$('#grid').jqxGrid({

		width: '100%',

		columnsresize: true,

		theme: 'dark',

		pageable: true,

		pagesize: 10,

		showfilterrow: true,

		filterable: true,

		autoheight: true,

		pagesizeoptions: ['10', '20', '50']

	});

}

function getFilterData() {

	var groups = {};

	var checkedItem = [];

	allitems.forEach(function(item) {

		if ($(item).jqxCheckBox('checked')) {

			var parts = item.replace('#jqxCheckBox-', '').split('-');

			var groupId = parts[0];

			var subgroupId = parseInt(parts[1], 10);

			var field = getSubgroupById(subgroupId);

			if (!groups[groupId]) {

				groups[groupId] = [];

			}

			groups[groupId].push(field.dbName + '-' + groupId);

			checkedItem.push(item);

		}

	});

	var selectedSearchDTOlst = Object.keys(groups).map(function(groupId) {

		return { groupId: groupId, selectedValues: groups[groupId] };

	});

	if (checkedItem.length === 0) {

		$('#grid').jqxGrid('hideloadelement');

		return;

	}

	if (checkedItem.length > 15) {

		$('#alertFiltterMax-modal').modal('show');

		$('#grid').jqxGrid('hideloadelement');

		return;

	}

	$('#grid').jqxGrid({ showdefaultloadelement: true });

	var json = {

		selectedSearchDTOlst: selectedSearchDTOlst,

		fromDate: $.jqx.dataFormat.formatdate($('#dateInputFrom').jqxDateTimeInput('getDate'), 'yyyy-MM-dd'),

		toDate: $.jqx.dataFormat.formatdate($('#dateInputTo').jqxDateTimeInput('getDate'), 'yyyy-MM-dd')

	};

	$.ajax({

		type: 'POST',

		contentType: 'application/json',

		url: API.gridData,

		data: JSON.stringify(json),

		dataType: 'json',

		async: true,

		cache: false,

		timeout: 600000,

		success: function(data) {

			delete source.url;

			/*
			 * Build jqx datafields from backend metadata.
			 * The backend loads field_type and data_format dynamically from
			 * column_configuration, so no history-grid type/format is hard-coded.
			 */
			var dynamicDatafields = [];

			for (var i = 0; i < data.columns.length; i++) {
				var column = data.columns[i];

				dynamicDatafields.push({
					name: column.datafield,
					type: column.fieldType || 'string'
				});
			}

			source.datafields = dynamicDatafields;
			source.localdata = data.rows;

			var dataAdapter = new $.jqx.dataAdapter(source);

			$('#grid').jqxGrid('hideloadelement');

			/*

			 * Preserve the existing Long Ends history-grid sizing behavior:

			 * - up to 12 returned columns: 110px per column

			 * - more than 12 returned columns: full width

			 * The backend does not set per-column widths.

			 */

			$('#grid').jqxGrid({

				width: data.columns.length > 12 ? '100%' : data.columns.length * 110,

				source: dataAdapter,

				columns: data.columns

			});

			saveFilterHistory(checkedItem);

		},

		error: function(e) {

			$('#grid').jqxGrid('hideloadelement');

			console.log('ERROR : ', e);

		}

	});

}

function saveFilterHistory(checkedItem) {

	var filterHistory = {

		filterHistory: checkedItem.toString(),

		screenName: getFilterHistoryScreen()

	};

	$.ajax({

		type: 'POST',

		contentType: 'application/json; charset=utf-8',

		url: '/bourse/savedataentryfilterhistory',

		data: JSON.stringify(filterHistory),

		dataType: 'json',

		timeout: 600000

	});

}

function getFilterHistory() {

	$.ajax({

		contentType: 'application/json; charset=utf-8',

		url: '/bourse/getdataentryfilterhistory/' + getFilterHistoryScreen(),

		dataType: 'json',

		timeout: 600000,

		async: false,

		success: function(response) {

			if (response.filterHistory != null && response.filterHistory !== '') {

				response.filterHistory.split(',').forEach(function(item) {

					if (allitems.indexOf(item) !== -1) {

						$(item).jqxCheckBox({ checked: true });

					}

				});

			} else {

				allitems.forEach(function(item) {

					$(item).jqxCheckBox({ checked: true });

				});

			}

		},

		error: function() {

			allitems.forEach(function(item) {

				$(item).jqxCheckBox({ checked: true });

			});

		}

	});

}

function getSubgroupById(id) {

	return SUBGROUPS.find(function(item) { return item.subgroupId === id; });

}

function formatDate(date) {

	return $.jqx.dataFormat.formatdate(date, 'dd-MM-yyyy');

}

function toggleCollapse() {

	$('#collapseFilter').collapse('toggle');

}