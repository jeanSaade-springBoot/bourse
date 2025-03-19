var selectedRow = this;
var monthDate = new Date();
monthDate.setMonth(monthDate.getMonth() - 6);
var auditUrl;
var updateUrl;
var saveUrl;
var deleteUrl;
var checkifcanUrl;
 var allitems= [ 
'#jqxCheckBox-37-1-14',
'#jqxCheckBox-37-1-15',
'#jqxCheckBox-37-1-16',
'#jqxCheckBox-37-2-14',
'#jqxCheckBox-37-2-15',
'#jqxCheckBox-37-2-16',
'#jqxCheckBox-38-1-14',
'#jqxCheckBox-38-1-15',
'#jqxCheckBox-38-1-16',
'#jqxCheckBox-38-2-14',
'#jqxCheckBox-38-2-15',
'#jqxCheckBox-38-2-16',
'#jqxCheckBox-39-1-14',
'#jqxCheckBox-39-1-15',
'#jqxCheckBox-39-1-16',
'#jqxCheckBox-39-2-14',
'#jqxCheckBox-39-2-15',
'#jqxCheckBox-39-2-16',
'#jqxCheckBox-40-1-14',
'#jqxCheckBox-40-1-15',
'#jqxCheckBox-40-1-16',
'#jqxCheckBox-40-2-14',
'#jqxCheckBox-40-2-15',
'#jqxCheckBox-40-2-16',
'#jqxCheckBox-41-1-14',
'#jqxCheckBox-41-1-15',
'#jqxCheckBox-41-1-16',
'#jqxCheckBox-41-2-14',
'#jqxCheckBox-41-2-15',
'#jqxCheckBox-41-2-16',
'#jqxCheckBox-42-1-14',
'#jqxCheckBox-42-1-15',
'#jqxCheckBox-42-1-16',
'#jqxCheckBox-42-2-14',
'#jqxCheckBox-42-2-15',
'#jqxCheckBox-42-2-16',
'#jqxCheckBox-44-1-14',
'#jqxCheckBox-44-1-15',
'#jqxCheckBox-44-1-16',
'#jqxCheckBox-44-2-14',
'#jqxCheckBox-44-2-15',
'#jqxCheckBox-44-2-16',
'#jqxCheckBox-45-1-14',
'#jqxCheckBox-45-1-15',
'#jqxCheckBox-45-1-16',
'#jqxCheckBox-45-2-14',
'#jqxCheckBox-45-2-15',
'#jqxCheckBox-45-2-16',
'#jqxCheckBox-46-1-14',
'#jqxCheckBox-46-1-15',
'#jqxCheckBox-46-1-16',
'#jqxCheckBox-46-2-14',
'#jqxCheckBox-46-2-15',
'#jqxCheckBox-46-2-16',
'#jqxCheckBox-47-1-14',
'#jqxCheckBox-47-1-15',
'#jqxCheckBox-47-1-16',
'#jqxCheckBox-47-2-14',
'#jqxCheckBox-47-2-15',
'#jqxCheckBox-47-2-16',
'#jqxCheckBox-37-3-14',
'#jqxCheckBox-37-3-15',
'#jqxCheckBox-37-3-16',
'#jqxCheckBox-38-3-14',
'#jqxCheckBox-38-3-15',
'#jqxCheckBox-38-3-16',
'#jqxCheckBox-39-3-14',
'#jqxCheckBox-39-3-15',
'#jqxCheckBox-39-3-16',
'#jqxCheckBox-40-3-14',
'#jqxCheckBox-40-3-15',
'#jqxCheckBox-40-3-16',
'#jqxCheckBox-41-3-14',
'#jqxCheckBox-41-3-15',
'#jqxCheckBox-41-3-16',
'#jqxCheckBox-42-3-14',
'#jqxCheckBox-42-3-15',
'#jqxCheckBox-42-3-16',
'#jqxCheckBox-44-3-14',
'#jqxCheckBox-44-3-15',
'#jqxCheckBox-44-3-16',
'#jqxCheckBox-45-3-14',
'#jqxCheckBox-45-3-15',
'#jqxCheckBox-45-3-16',
'#jqxCheckBox-46-3-14',
'#jqxCheckBox-46-3-15',
'#jqxCheckBox-46-3-16',
'#jqxCheckBox-47-3-14',
'#jqxCheckBox-47-3-15',
'#jqxCheckBox-47-3-16',
'#jqxCheckBox-37-4-14',
'#jqxCheckBox-37-4-15',
'#jqxCheckBox-37-4-16',
'#jqxCheckBox-38-4-14',
'#jqxCheckBox-38-4-15',
'#jqxCheckBox-38-4-16',
'#jqxCheckBox-39-4-14',
'#jqxCheckBox-39-4-15',
'#jqxCheckBox-39-4-16',
'#jqxCheckBox-40-4-14',
'#jqxCheckBox-40-4-15',
'#jqxCheckBox-40-4-16',
'#jqxCheckBox-41-4-14',
'#jqxCheckBox-41-4-15',
'#jqxCheckBox-41-4-16',
'#jqxCheckBox-42-4-14',
'#jqxCheckBox-42-4-15',
'#jqxCheckBox-42-4-16',
'#jqxCheckBox-44-4-14',
'#jqxCheckBox-44-4-15',
'#jqxCheckBox-44-4-16',
'#jqxCheckBox-45-4-14',
'#jqxCheckBox-45-4-15',
'#jqxCheckBox-45-4-16',
'#jqxCheckBox-46-4-14',
'#jqxCheckBox-46-4-15',
'#jqxCheckBox-46-4-16',
'#jqxCheckBox-47-4-14',
'#jqxCheckBox-47-4-15',
'#jqxCheckBox-47-4-16',
];	
  const factorId_description =  [
                { name: 'FCST', factorId: '14' },
                { name: 'FLASH', factorId: '15' },
                { name: 'FINAL', factorId: '16' }];
  const nameSubgroupId =  [
                    { name: 'MANUF', subgroupId: '1' },
                    { name: 'SERVICES', subgroupId: '2' },
                    { name: 'MANUF2', subgroupId: '3' },
                    { name: 'SERVICES2', subgroupId: '4' }];                 
var selectedItems=[];
var AuditDefaultData = [];

var mainContainer='';
var mainGroupContainer='';
var groupContainer='';
var subgroupContainer='';
var factorIner='';
var factorInerItem='';
var factorContainer='';

var source;
var inputData1fcst = document.getElementById("data-input-1fcst");
var inputData1flash = document.getElementById("data-input-1flash");
var inputData1final = document.getElementById("data-input-1final");

var inputData2fcst = document.getElementById("data-input-2fcst");
var inputData2flash = document.getElementById("data-input-2flash");
var inputData2final = document.getElementById("data-input-2final");

var inputData3fcst = document.getElementById("data-input-3fcst");
var inputData3flash = document.getElementById("data-input-3flash");
var inputData3final = document.getElementById("data-input-3final");

var inputData4fcst = document.getElementById("data-input-4fcst");
var inputData4flash = document.getElementById("data-input-4flash");
var inputData4final = document.getElementById("data-input-4final");

var Type;
var selectedItem=37;

var containsSubgroupId1 = [false,1];
var containsSubgroupId2 = [false,2];
var containsSubgroupId3 = [false,3];
var containsSubgroupId4 = [false,4];

var RestrictDate=new Date(); 
    RestrictDate.setMonth(RestrictDate.getMonth() + 4);
    
    
const nameFactorId =  [
	                    { name: 'FCST', factor: '14'},
	                    { name: 'FLASH', factor: '15'},
	                    { name: 'FINAL', factor: '16'}
	                ];
checkifcanUrl = "/macro/checkifcansave/";

	auditUrl = '/macro/macro-data/';
	updateUrl = "/macro/update-macro-data";
	saveUrl = "/macro/save-macro-data";
	deleteUrl = "/macro/delete-macro/" ;



$(document).ready(function() {
	$('#overlay').fadeOut();
	$('#container-wrapper').show();

	$("#viewall").jqxButton({ theme: 'dark', width: 110, height: 35, template: "primary" });
	$("#viewall").css("display", "block");
	$("#viewall").click(function() {
		popupWindow('/bourse/allnews', 'Libvol-View All News', window, 1300, 600);
	});

	$('[data-toggle="tooltip"]').tooltip();
	
		 $.ajax({
			    url: '/admin/getgroupsbyfamily/8' ,
			    method: 'GET',
			    dataType: 'json',
			    success: function(response) {
			    var array = [];

				Object.keys(response).forEach(function (description) {
				    var obj = {};
				    obj.html = "<div style='height: 20px; float: left;'><img style='float: left; margin-right: 5px;' width='16px' src='" + getCountryImagePath(response[description].id.toString())[0] + "'/><span style='float: left; font-size: 14px;'>" + response[description].description + "</span></div>";
				    obj.title = response[description].description;
				    obj.id = response[description].id;
				    array.push(obj);
				});
				
                $("#countriesDropDown").jqxDropDownList({ theme: 'dark', source: array, selectedIndex: 0, displayMember: "html", valueMember: "id",  width: '150', height: '25px'});
	
			    },
			    error: function(xhr, status, error) {
			      console.log(error)
			    }
			});
		   $("#countriesDropDown").on('select', function (event) {
            if (event.args) {
                selectedItem = event.args.item.value ;
        		dynamicDisplayInput(selectedItem);
			}
		});
		
		 $.ajax({
	        contentType: "application/json",
	        url:'/macro/get-macro-display-settings/'+selectedItem,
	        dataType: 'json',
	        async:true,
	        cache: false,
	        timeout: 600000,
	        success: function (data) {
	        	renderFilterGrid(data);
			},
	        error: function (e) {
	        	
					  console.log("ERROR : ", e);

	        }
	    }); 

   $("#dateInput").jqxDateTimeInput({max: new Date(RestrictDate.getFullYear(), RestrictDate.getMonth(), RestrictDate.getDate()), theme: 'dark',  views:["year","decade"]
   , width: "110px"
   , height: "25px"
   , formatString : "MMM-yy" });
	
	$("#dateInputAudit").jqxDateTimeInput({max: new Date(RestrictDate.getFullYear(), RestrictDate.getMonth(), RestrictDate.getDate()),  theme: 'dark',  views:["year","decade"]
   , width: "110px"
   , height: "25px"
   , formatString : "MMM-yy" });
   
	$("#dateInputFrom").jqxDateTimeInput({max: new Date(RestrictDate.getFullYear(), RestrictDate.getMonth(), RestrictDate.getDate()),  theme: 'dark',  views:["year","decade"]
   , width: "110px"
   , height: "25px"
   , formatString :"MMM-yy" });
	$("#dateInputFrom").jqxDateTimeInput('setDate', monthDate);
	$("#dateInputTo").jqxDateTimeInput({max: new Date(RestrictDate.getFullYear(), RestrictDate.getMonth(), RestrictDate.getDate()),  theme: 'dark',  views:["year","decade"]
   , width: "110px"
   , height: "25px"
   , formatString : "MMM-yy" });
	$("#filter").jqxButton({ theme: 'dark', height: 30, width: 74 });
	$("#Clearfilter").jqxButton({ theme: 'dark', height: 30, width: 74 });

	source =
	{
		datatype: "json",
		datafields: [
			{ name: 'refer_date', type: 'date' },
			{"name":"SERVICES-16.37","type":"float"},
			{"name":"SERVICES-15.37","type":"float"},
			{"name":"SERVICES-14.37","type":"float"},
			{"name":"MANUF-16.37","type":"float"},
			{"name":"MANUF-15.37","type":"float"},
			{"name":"MANUF-14.37","type":"float"},
			{"name":"MANUF2-16.37","type":"float"},
			{"name":"MANUF2-15.37","type":"float"},
			{"name":"MANUF2-14.37","type":"float"},
			{"name":"SERVICES-16.38","type":"float"},
			{"name":"SERVICES-15.38","type":"float"},
			{"name":"SERVICES-14.38","type":"float"},
			{"name":"MANUF-16.38","type":"float"},
			{"name":"MANUF-15.38","type":"float"},
			{"name":"MANUF-14.38","type":"float"},
			{"name":"MANUF2-16.38","type":"float"},
			{"name":"MANUF2-15.38","type":"float"},
			{"name":"MANUF2-14.38","type":"float"},
			{"name":"SERVICES-16.39","type":"float"},
			{"name":"SERVICES-15.39","type":"float"},
			{"name":"SERVICES-14.39","type":"float"},
			{"name":"MANUF-16.39","type":"float"},
			{"name":"MANUF-15.39","type":"float"},
			{"name":"MANUF-14.39","type":"float"},
			{"name":"MANUF2-16.39","type":"float"},
			{"name":"MANUF2-15.39","type":"float"},
			{"name":"MANUF2-14.39","type":"float"},
			{"name":"SERVICES-16.40","type":"float"},
			{"name":"SERVICES-15.40","type":"float"},
			{"name":"SERVICES-14.40","type":"float"},
			{"name":"MANUF-16.40","type":"float"},
			{"name":"MANUF-15.40","type":"float"},
			{"name":"MANUF-14.40","type":"float"},
			{"name":"MANUF2-16.40","type":"float"},
			{"name":"MANUF2-15.40","type":"float"},
			{"name":"MANUF2-14.40","type":"float"},
			{"name":"SERVICES-16.41","type":"float"},
			{"name":"SERVICES-15.41","type":"float"},
			{"name":"SERVICES-14.41","type":"float"},
			{"name":"MANUF-16.41","type":"float"},
			{"name":"MANUF-15.41","type":"float"},
			{"name":"MANUF-14.41","type":"float"},
			{"name":"MANUF2-16.41","type":"float"},
			{"name":"MANUF2-15.41","type":"float"},
			{"name":"MANUF2-14.41","type":"float"},
			{"name":"SERVICES-16.42","type":"float"},
			{"name":"SERVICES-15.42","type":"float"},
			{"name":"SERVICES-14.42","type":"float"},
			{"name":"MANUF-16.42","type":"float"},
			{"name":"MANUF-15.42","type":"float"},
			{"name":"MANUF-14.42","type":"float"},
			{"name":"MANUF2-16.42","type":"float"},
			{"name":"MANUF2-15.42","type":"float"},
			{"name":"MANUF2-14.42","type":"float"},
			{"name":"MANUF-16.43","type":"float"},
			{"name":"MANUF-15.43","type":"float"},
			{"name":"MANUF-14.43","type":"float"},
			{"name":"SERVICES-16.43","type":"float"},
			{"name":"SERVICES-15.43","type":"float"},
			{"name":"SERVICES-14.43","type":"float"},
			{"name":"MANUF2-16.43","type":"float"},
			{"name":"MANUF2-15.43","type":"float"},
			{"name":"MANUF2-14.43","type":"float"},
			{"name":"MANUF-16.44","type":"float"},
			{"name":"MANUF-15.44","type":"float"},
			{"name":"MANUF-14.44","type":"float"},
			{"name":"SERVICES-16.44","type":"float"},
			{"name":"SERVICES-15.44","type":"float"},
			{"name":"SERVICES-14.44","type":"float"},
			{"name":"MANUF2-16.44","type":"float"},
			{"name":"MANUF2-15.44","type":"float"},
			{"name":"MANUF2-14.44","type":"float"},
			{"name":"MANUF-16.45","type":"float"},
			{"name":"MANUF-15.45","type":"float"},
			{"name":"MANUF-14.45","type":"float"},
			{"name":"SERVICES-16.45","type":"float"},
			{"name":"SERVICES-15.45","type":"float"},
			{"name":"SERVICES-14.45","type":"float"},
			{"name":"MANUF2-16.45","type":"float"},
			{"name":"MANUF2-15.45","type":"float"},
			{"name":"MANUF2-14.45","type":"float"},
			{"name":"MANUF-16.46","type":"float"},
			{"name":"MANUF-15.46","type":"float"},
			{"name":"MANUF-14.46","type":"float"},
			{"name":"SERVICES-16.46","type":"float"},
			{"name":"SERVICES-15.46","type":"float"},
			{"name":"SERVICES-14.46","type":"float"},
			{"name":"MANUF2-16.46","type":"float"},
			{"name":"MANUF2-15.46","type":"float"},
			{"name":"MANUF2-14.46","type":"float"},
			{"name":"MANUF-16.47","type":"float"},
			{"name":"MANUF-15.47","type":"float"},
			{"name":"MANUF-14.47","type":"float"},
			{"name":"SERVICES-16.47","type":"float"},
			{"name":"SERVICES-15.47","type":"float"},
			{"name":"SERVICES-14.47","type":"float"},
			{"name":"MANUF2-16.47","type":"float"},
			{"name":"MANUF2-15.47","type":"float"},
			{"name":"MANUF2-14.47","type":"float"},
			{"name":"SERVICES2-16.37","type":"float"},
			{"name":"SERVICES2-15.37","type":"float"},
			{"name":"SERVICES2-14.37","type":"float"},
			{"name":"SERVICES2-16.38","type":"float"},
			{"name":"SERVICES2-15.38","type":"float"},
			{"name":"SERVICES2-14.38","type":"float"},
			{"name":"SERVICES2-16.39","type":"float"},
			{"name":"SERVICES2-15.39","type":"float"},
			{"name":"SERVICES2-14.39","type":"float"},
			{"name":"SERVICES2-16.40","type":"float"},
			{"name":"SERVICES2-15.40","type":"float"},
			{"name":"SERVICES2-14.40","type":"float"},
			{"name":"SERVICES2-16.41","type":"float"},
			{"name":"SERVICES2-15.41","type":"float"},
			{"name":"SERVICES2-14.41","type":"float"},
			{"name":"SERVICES2-16.42","type":"float"},
			{"name":"SERVICES2-15.42","type":"float"},
			{"name":"SERVICES2-14.42","type":"float"},
			{"name":"SERVICES2-16.43","type":"float"},
			{"name":"SERVICES2-15.43","type":"float"},
			{"name":"SERVICES2-14.43","type":"float"},
			{"name":"SERVICES2-16.44","type":"float"},
			{"name":"SERVICES2-15.44","type":"float"},
			{"name":"SERVICES2-14.44","type":"float"},
			{"name":"SERVICES2-16.45","type":"float"},
			{"name":"SERVICES2-15.45","type":"float"},
			{"name":"SERVICES2-14.45","type":"float"},
			{"name":"SERVICES2-16.46","type":"float"},
			{"name":"SERVICES2-15.46","type":"float"},
			{"name":"SERVICES2-14.46","type":"float"},
			{"name":"SERVICES2-16.47","type":"float"},
			{"name":"SERVICES2-15.47","type":"float"},
			{"name":"SERVICES2-14.47","type":"float"},	
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
//	getFilterHistory(selectedItem);

	$("#grid").jqxGrid('showloadelement');

	$('#dateInputAudit').on('change', function(event) {
		date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
		filterDate = date;

		delete auditGridSource.localdata;
		auditGridSource.url = auditUrl+ selectedItem + '/' + date;
		dataAdapter = new $.jqx.dataAdapter(auditGridSource);
		$('#AuditGrid').jqxGrid({ source: dataAdapter });

	});

	$("#filter").click(function() {

		getFilterData(selectedItem);
	});
	dynamicDisplayInput(selectedItem);
});// end document ready
$("#Clearfilter").click(function() {
	
		for (i = 0; i < selectedItems.length; i++) {
			$(selectedItems[i]).jqxCheckBox({ checked: false });
		}
});
function Edit(row, event) {

	isedit = true;
	var data = $('#AuditGrid').jqxGrid('getrowdata', row);
	
    oldDataJson={
			"factor": data.factorId,
		    "manuf": data.manuf,
		    "services": data.services,
		    "manuf2": data.manuf2,
		    "services2": data.services2,
		    };
	 
	selectedRow.editrow = row;
	date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')
	if (auditGridSource.url == '' || date != filterDate) {
		delete auditGridSource.localdata;
		auditGridSource.url = auditUrl+ selectedItem + '/' + date;
		dataAdapter = new $.jqx.dataAdapter(auditGridSource);
		$('#AuditGrid').jqxGrid({ source: dataAdapter });

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
				   	"factor": updatedData.factorId,
					"manuf": updatedData.manuf,
					"services": updatedData.services,
					"manuf2": updatedData.manuf2,
					"services2": updatedData.services2,
				    };

	 
	keys = Object.keys(updatedDataJson);

	for (var i = 0; i < keys.length; i++) {
	        var field = keys[i];
	        if (updatedDataJson[field] !== oldDataJson[field]) {
				
	            dataToBeUpdated.push({
				   "subgroupId":getSubgroupIdByName(field.toUpperCase()),
    			   "factor":getfactorIdByDescription(updatedDataJson.factor),
    			   "groupId":selectedItem,
    			   "value":updatedDataJson[field].replace(',', ''),
    			   "referdate":date
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

		

			delete auditGridSource.localdata;
			auditGridSource.url = auditUrl+ selectedItem + '/' + date;
			dataAdapter = new $.jqx.dataAdapter(auditGridSource);
			$('#AuditGrid').jqxGrid({ source: dataAdapter });
			
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

function deleteDataByDate() {
	$('#alertDeleteDataByDate-modal').modal('hide');
	date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'dd-MM-yyyy')

	$.ajax({
		type: "DELETE",
		url: deleteUrl + selectedItem + '/' +  date,
		success: function(result) {
		
			getAuditGridSource(selectedItem);
				
			getFilterData(selectedItem);
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

function getAuditGridSource(selectedItem) {

	latestUrl = '/macro/getlatest/' + selectedItem;
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

				if (dbDate.toDateString() != systemDate.toDateString()) {
					filterDate = date;
					delete auditGridSource.localdata;
					auditGridSource.url = auditUrl+ selectedItem + '/' + date;
					dataAdapter = new $.jqx.dataAdapter(auditGridSource);
					$('#AuditGrid').jqxGrid({ source: dataAdapter });
					
				}
			} else {
				delete auditGridSource.localdata;
				auditGridSource.localdata = [];
				dataAdapter = new $.jqx.dataAdapter(auditGridSource);
				$('#AuditGrid').jqxGrid({ source: dataAdapter });
			
			}
		},
		error: function(e) {

			console.log("ERROR : ", e);

		}
	});

}

function getFilterData(selectedItem) {
	var SelectedSearchDTO = [];
	var allItems = 0;
	var checkedItem = [];
	var json;
	var values = [];
	$('#grid').jqxGrid({ showdefaultloadelement: true });
	var item = 0;
	
	items = selectedItems;
	
	for (i = 0; i < items.length; i++) {
	         		if($(items[i]).jqxCheckBox('checked'))
	         		{		
	         		    values.push(getSubGroupDescription(items[i].split("Box")[1].toUpperCase().split('-')[2])+"-"+items[i].split("Box")[1].toUpperCase().split('-')[3]);	
	          			item=1;
	          			allItems=allItems+1;
	          			checkedItem.push(items[i]);
	         		}
	          	}
	  	if(item!=0)
	  	{
	  		SelectedSearchDTO.push({
	  		   "groupId":$("#countriesDropDown").val(),
			   "selectedValues":values,
			});
	  		 values=[];
	  	}
	if (allItems != 0) {
		
		var parsedformattedDate = new Date($("#dateInputFrom").jqxDateTimeInput('getDate'));
		parsedformattedDate.setDate(1);
		var fromDate =  parsedformattedDate.getFullYear()+ '-' +  ("0" + (parsedformattedDate.getMonth() + 1)).slice(-2) + '-' + ("0" + parsedformattedDate.getDate()).slice(-2)  ;
        
        var parsedDateInputTo = new Date($("#dateInputTo").jqxDateTimeInput('getDate'));
		parsedDateInputTo.setDate(1);
		var toDate =  parsedDateInputTo.getFullYear()+ '-' +  ("0" + (parsedDateInputTo.getMonth() + 1)).slice(-2) + '-' + ("0" + parsedDateInputTo.getDate()).slice(-2)  ;
         
		json = {
			"selectedSearchDTOlst": SelectedSearchDTO,
			"fromDate": fromDate,
			"toDate": toDate
		};

		if (allItems <= 15) {
			$.ajax({
				type: "POST",
				contentType: "application/json",
				url: "/macro/getgriddata",
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
						width: data.columns.length > 12 ? '100%' : data.columns.length*110,
						source: dataAdapter,
						columns: data.columns,
          columngroups: [
              { text: 'MANUF PMI II', align: 'center', name: 'MANUF2' },
              { text: 'MANUF PMI I', align: 'center', name: 'MANUF' },
              { text: 'SERVICES PMI I', align: 'center', name: 'SERVICES' },
              { text: 'SERVICES PMI II', align: 'center', name: 'SERVICES2' }
          ]
					});

					saveFilterHistory(selectedItem, checkedItem);
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


function renderSubGroup() {
	
$("#delete").jqxButton({ theme: 'dark', width: 90, height: 30, template: "danger" });

	var defaultData = AuditDefaultData;
	var fields = [
			{ name: 'id', type: 'string' },
			{ name: 'factorId', type: 'string' },
			{ name: 'manuf', type: 'string' },
			{ name: 'services', type: 'string' },
			{ name: 'manuf2', type: 'string' },
			{ name: 'services2', type: 'string' },
		];
		var totalFields = fields.length-1;
		totalFields=!containsSubgroupId1[0]?totalFields-1:totalFields;
		totalFields=!containsSubgroupId2[0]?totalFields-1:totalFields;
		totalFields=!containsSubgroupId3[0]?totalFields-1:totalFields;
		totalFields=!containsSubgroupId4[0]?totalFields-1:totalFields;
		var widthPercentage = (100 - 20)/totalFields;
		var arrayOFcolumns = [
			{
				text: '', editable: false, datafield: 'Edit', width: '20%', cellsrenderer: function(row) {
					return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit" + row + "\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons" + row + "\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
				}
			},
			 	{ text: '',editable:false,hidden:true,  datafield: 'id', width: widthPercentage + '%'},
	          { text: '',editable:false,  datafield: 'factorId', width: widthPercentage + '%'},
	          { text: 'MANUF PMI I',hidden: !containsSubgroupId1[0],  datafield: 'manuf', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
	          { text: 'SERVICES PMI I',hidden: !containsSubgroupId2[0] , datafield: 'services', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
	       	  { text: 'MANUF PMI II',hidden: !containsSubgroupId3[0],  datafield: 'manuf2', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
	       	  { text: 'SERVICES PMI II',hidden: !containsSubgroupId4[0],  datafield: 'services2', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
 ];

	var factors = ["BUND 2nd M(B&S 365 in %)",
							 "BUND 2nd M(in TICKS)",
							 "BUND 3rd M(B&S 365 in %)",
							 "BUND 3rd M(in TICKS)",
							 "BOBL 2nd M(B&S 365 in %)",
							 "BOBL 2nd M(in TICKS)",
							 "BOBL 3rd M(B&S 365 in %)",
							 "BOBL 3rd M(in TICKS)",
							 "BUXL 2nd M(B&S 365 in %)",
							 "BUXL 2nd M(in TICKS)"];
	auditGridSource =
	{
		localdata: defaultData,
		datatype: "json",
		datafields: fields,
		url: ''
	};
	var dataAdapter = new $.jqx.dataAdapter(auditGridSource);

	getAuditGridSource(selectedItem);
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

	$("#delete").click(function() {
		
		
		$('#alertDeleteDataByDate-modal').modal('show');
		date = $.jqx.dataFormat.formatdate($("#dateInputAudit").jqxDateTimeInput('getDate'), 'MMM-yyyy')
		$("#alertTextDeleteDataByDate").empty();
		$("#alertTextDeleteDataByDate").append("<p> Are you sure you want to Delete all Macro record for the date '" + date + "'?</p>");
	});	
	
Types=["1fcst","1flash","1final","2fcst","2flash","2final","3fcst","3flash","3final","4fcst","4flash","4final"];
inputDataTypes=[inputData1fcst,inputData1flash,inputData1final,inputData2fcst,inputData2flash,inputData2final,inputData3fcst,inputData3flash,inputData3final,inputData4fcst,inputData4flash,inputData4final];

for (var i = 0; i < Types.length; i++) {
    	var Type = Types[i];
   		inputDataType = inputDataTypes[i];
    
		items = selectedItems;
		var dataInputGridFields = [
			(Type.includes("fcst"))?{ name: 'fcst', type: 'string' }:(Type.includes("flash"))?{ name: 'flash', type: 'string' }:(Type.includes("final"))?{ name: 'final', type: 'string' }:null,
		];
		var totalFields = dataInputGridFields.length;
		var widthPercentage = 100/totalFields;

		var dataInputGridColumns = [
			(Type.includes("fcst"))?{text: 'FCST', datafield: 'fcst', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			}:(Type.includes("flash"))?{text: 'FLASH', datafield: 'flash', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			}:(Type.includes("final"))?{text: 'FINAL', datafield: 'final', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			}:null,
		];
		
	initiate(Type, inputDataType, items, dataInputGridFields, dataInputGridColumns, defaultData, fields, arrayOFcolumns);
  
}		
		
}
function saveFilterHistory(selectedItem, checkedItem) {


	var filterHistory = {
		"filterHistory": checkedItem.toString(),
		"screenName": "DATABASE_INPUT_SCREEN_MACRO-" + selectedItem
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
		url: "/bourse/getdataentryfilterhistory/" + "DATABASE_INPUT_SCREEN_MACRO-" + selectedItem,
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



function initiate(Type, inputDataType, item, dataInputGridFields, dataInputGridColumns, defaultData, fields, arrayOFcolumns) {
	
	//$("#cancel" + Type).jqxButton({ theme: 'dark', height: 30, width: 74 });
	$("#cancel" + Type).jqxButton({ width: 120, height: 30, imgSrc: "/img/icon/false.svg" });
	//$("#load" + Type).jqxButton({ theme: 'dark', height: 30, width: 74 });
	  $("#load" + Type).jqxButton({ width: 120, height: 30, imgSrc: "/img/icon/true.svg" });

	$("#cancel" + Type).click(function() {
		inputDataType.value = "";
		$("#dataformInput" + Type).css("display", "block");
		$("#dataInputButtons" + Type).css("display", "none");
		$("#dataInputGrid" + Type).css("display", "none");
		(selectedItem == 1) ? $("#usd-flag").removeClass("m-auto").addClass("mt-auto") : null;

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
	
	$("#load" + Type).off("click").on("click", function() {
		var subgroupId;
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
		
		var parsedDate = new Date($("#dateInput").jqxDateTimeInput('getDate'));
		parsedDate.setDate(1);
		var formattedDate = ("0" + parsedDate.getDate()).slice(-2) + '-' + ("0" + (parsedDate.getMonth() + 1)).slice(-2) + '-' + parsedDate.getFullYear();


		for (i = 0; i < allObjects.length; i++) {

			var value = eval(allObjects[i]);
			subgroupId= extractNumber(Type);
			factorId=getFactorIdByName(Type)['factor'];
			dataToBeInserted.push({
				"groupId":  $("#countriesDropDown").val(),
				"subgroupId": subgroupId,
				"value": value[1].replaceAll(',', ''),
				"factorId":factorId,
				"referDate": formattedDate
			});
			
		}

		if ($("#dateInput").jqxDateTimeInput('getDate') < date) {
			var today = $("#dateInput").jqxDateTimeInput('getDate');
			
			today = $.jqx.dataFormat.formatdate(today, 'dd-MM-yyyy')
			
					$.ajax({
						contentType: "application/json",
						url: checkifcanUrl + selectedItem + "/" +subgroupId +"/"+ factorId +"/" + today,
						dataType: 'json',
						async: true,
						cache: false,
						timeout: 600000,
						success: function(response) {
							if (!response) {
					

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


											getFilterData(selectedItem);
											
											inputDataType.value = "";
											
												
											$("#dataformInput" + Type).css("display", "block");
											$("#dataInputButtons" + Type).css("display", "none");
											$("#dataInputGrid" + Type).css("display", "none");
											
											$('#dateInputAudit').jqxDateTimeInput('setDate', $("#dateInput").jqxDateTimeInput('getDate'));
											
											var auditDate = new Date($("#dateInput").jqxDateTimeInput('getDate'));
											auditDate.setDate(1);
										    date =  ("0" + parsedDate.getDate()).slice(-2) + '-' + ("0" + (parsedDate.getMonth() + 1)).slice(-2) + '-' + parsedDate.getFullYear();
									        
											filterDate = date;
											delete auditGridSource.localdata;
											auditGridSource.url = auditUrl+ selectedItem + '/' + date;
											dataAdapter = new $.jqx.dataAdapter(auditGridSource);
											$('#AuditGrid').jqxGrid({ source: dataAdapter });
											
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
 function groupByGroupIdAndSubgroupId(data) {
    var groupedData = {};

    // Iterate over each item in the data
    Object.keys(data).forEach(function (key) {
        var item = data[key];
        var groupId = item.groupId;
        var subgroupId = item.subgroupId;

        // If the groupId key doesn't exist in groupedData, create it
        if (!groupedData[groupId]) {
            groupedData[groupId] = {};
        }

        // If the subgroupId key doesn't exist in the groupId object, create it
        if (!groupedData[groupId][subgroupId]) {
            groupedData[groupId][subgroupId] = [];
        }

        // Add the item to the subgroupId array
        groupedData[groupId][subgroupId].push(item);
    });

    return groupedData;
}
function renderFilterGrid(data){
	var groupedData = groupByGroupIdAndSubgroupId(data);
	var containsSubgroupId1 = false;
	var containsSubgroupId2 = false;
	var containsSubgroupId3 = false;
	var containsSubgroupId4 = false;
	// Iterate over each object in the data array
	data.forEach(function(obj) {
	    // Update variables for each subgroup based on the isVisible value
	    if (obj.subgroupId === 1) {
	        if (obj.isVisible) {
	            containsSubgroupId1 = true;
	        }
	    } else if (obj.subgroupId === 2) {
	        if (obj.isVisible) {
	            containsSubgroupId2 = true;
	        }
	    } else if (obj.subgroupId === 3) {
	        if (obj.isVisible) {
	            containsSubgroupId3 = true;
	        }
	    } else if (obj.subgroupId === 4) {
	        if (obj.isVisible) {
	            containsSubgroupId4 = true;
	        }
	    }
	});
className=(containsSubgroupId1&&containsSubgroupId2&&containsSubgroupId3&&containsSubgroupId4)?'col-3':'col-6';
					 mainContainer='';
				 selectedItems=[];
                 mainContainer+='<div class="col-12">'
			                 +'<div class="col-12 d-flex">'
				                 +'<div class="col-2"></div>'
				                 +'<div class="col-10">'
										+'<div class="col-12 d-flex">';
							mainContainer+=    	(containsSubgroupId1)?'<div class="align-middle fw-bold">MANUF PMI I</div>':'';
							mainContainer+=		(containsSubgroupId2)?'<div class="align-middle fw-bold">SERVICES PMI I</div>':'';
							mainContainer+=		(containsSubgroupId3)?'<div class="align-middle fw-bold">MANUF PMI II</div>':'';
							mainContainer+=		(containsSubgroupId4)?'<div class="align-middle fw-bold">SERVICES PMI II</div>':'';
							mainContainer+='</div>'
									+'</div>'
							  +'</div>';
						
				// Iterate over each groupId
				Object.keys(groupedData).forEach(function (groupId, i) {
				   country=getCountryImagePath(groupId);
				    classStyle=(i%2!=0)?'row-style':'';
				     mainGroupContainer+='<div class="col-12 d-flex">';
				     groupContainer+='<div class="col-2 '+classStyle+'">'
							+'<div class=""><img src='+country[0]+' alt="country-flag" width="30" class="pr-1">'+country[1]+'</div>'
						+'</div>';
					 subgroupContainer+='<div class="col-10 '+classStyle+' align-items-center d-flex">';
					 	
				    // Iterate over each subgroupId within the current groupId
				    Object.keys(groupedData[groupId]).forEach(function (subgroupId) {
				     
				        // Iterate over each item within the current subgroupId
				       factorContainer='<div class="col-12  d-flex">'
				       factorIner+='<div class="'+className+' d-flex">'
				        groupedData[groupId][subgroupId].forEach(function (item) {
				             checkBox="jqxCheckBox-"+item.groupId+'-'+item.subgroupId+'-'+item.factor;
				             isVisible=item.isVisible?'d-block':'d-none';
		    	  	         factorName=((item.factor==14)?'FCST':(item.factor==15)?'FLASH':'FINAL')
							 factorInerItem+='<div id="'+checkBox+'" class="col  p-0 '+isVisible+'" style="float: left;"><span class="checkboxesTitle">'+factorName+'</span></div>'; 

				        });
				       factorIner+=factorInerItem
				     		     +'</div>';
				     		     factorInerItem='';
				       factorContainer+=factorIner
				     		     +'</div>';  
				     		   
				    });
				    subgroupContainer+= factorContainer ;
				    subgroupContainer+= '</div>';    
				    
				    mainGroupContainer+=groupContainer+subgroupContainer;
				    mainGroupContainer+='</div>';
				    
				    groupContainer='';
				    subgroupContainer='';
				    factorContainer='';
				    factorIner='';
				     mainContainer+=mainGroupContainer;
				     mainGroupContainer='';
				});
				 mainContainer+='</div>';
				  $('#macroContainer').empty();
				  $('#macroContainer').append(mainContainer); 
	        	for (j = 0; j < data.length; j++) {
					items="#jqxCheckBox-"+data[j].groupId+'-'+data[j].subgroupId+'-'+data[j].factor;
		    	  	selectedItems.push(items);
		    	  	$(items).jqxCheckBox({ theme: 'dark', width: '100%', height: 26, checked: data[j].isVisible });
				}	
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
function extractNumber(type) {
    // Match the numeric part of the string using regular expression
    const numericPart = type.match(/\d+/);
    return numericPart ? numericPart[0] : null;
}
function dynamicDisplayInput(selectedItem){
 containsSubgroupId1 = [false,1];
 containsSubgroupId2 = [false,2];
 containsSubgroupId3 = [false,3];
 containsSubgroupId4 = [false,4];
 
                $.ajax({
			    url: '/macro/get-macro-display-settings/'+selectedItem,
			    method: 'GET',
			    dataType: 'json',
			    success: function(response) {
					renderFilterGrid(response);
					
					// Iterate over each object in the data array
					response.forEach(function(obj) {
					    // Update variables for each subgroup based on the isVisible value
					    if (obj.subgroupId === 1) {
					        if (obj.isVisible) {
					            containsSubgroupId1 = [true,1];
					        }
					    } else if (obj.subgroupId === 2) {
					        if (obj.isVisible) {
					            containsSubgroupId2 = [true,2];
					        }
					    } else if (obj.subgroupId === 3) {
					        if (obj.isVisible) {
					            containsSubgroupId3 = [true,3];
					        }
					    } else if (obj.subgroupId === 4) {
					        if (obj.isVisible) {
					            containsSubgroupId4 = [true,4];
					        }
					    }
					});
					const allTrue=containsSubgroupId1[0]&&containsSubgroupId2[0]&&containsSubgroupId3[0]&&containsSubgroupId4[0];
					
					containsSubgroupId=[containsSubgroupId1,containsSubgroupId2,containsSubgroupId3, containsSubgroupId4]
					for(let i = 0; i < containsSubgroupId.length; i++) {
						if(containsSubgroupId[i][0])
						{	$("#"+containsSubgroupId[i][1]).removeClass("d-none");
							$("#"+containsSubgroupId[i][1]).addClass("d-block");
							}	
							 else
								{
									$("#"+containsSubgroupId[i][1]).removeClass("d-block");
									$("#"+containsSubgroupId[i][1]).addClass("d-none");
								}
							if(allTrue){
										$("#"+containsSubgroupId[i][1]).removeClass("col-6");
										$("#"+containsSubgroupId[i][1]).addClass("col-6");
										}
										else
										{
											$("#"+containsSubgroupId[i][1]).addClass("col-6");
											$("#"+containsSubgroupId[i][1]).removeClass("col-6");
										}
						}				
					Object.keys(response).forEach(function (value) {
						if(response[value].isVisible)
						{	$("#"+response[value].subgroupId+'-'+response[value].factor).removeClass("d-none");
							$("#"+response[value].subgroupId+'-'+response[value].factor).addClass("d-block");
						}	
						 else
							{
								$("#"+response[value].subgroupId+'-'+response[value].factor).removeClass("d-block");
								$("#"+response[value].subgroupId+'-'+response[value].factor).addClass("d-none");
							}	
					});
					renderSubGroup();
					
					getFilterData(selectedItem);

			    },
			    error: function(xhr, status, error) {
			      console.log(error)
			    }
			});
			
}
function getSubGroupDescription(subgroupId)
 {
	  var description='';	
	switch(subgroupId) {
	  
	 case '1': 
	   		description='MANUF'
	        break;
	 case '2': 
		   description='SERVICES'
		    break;
	 case '3': 
		   description='MANUF2'
		    break;
	 case '4': 
		   description='SERVICES2'
		    break;
	}
return description;
	 
 }
 function getfactorIdByDescription(name) {
    const matchingObject = factorId_description.find(item => item.name === name);
    return matchingObject ? matchingObject.factorId : null;
}
	function getSubgroupIdByName(name) {
    const matchingObject = nameSubgroupId.find(item => item.name === name);
    return matchingObject ? matchingObject.subgroupId : null;
}