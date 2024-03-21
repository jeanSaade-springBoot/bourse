var selectedRow = this;
var monthDate = new Date();
monthDate.setMonth(monthDate.getMonth() - 6);
var auditUrl;
var updateUrl;
var saveUrl;
var deleteUrl;
var checkifcanUrl;
var allitems = [
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
	'#jqxCheckBox-43-1-14',
	'#jqxCheckBox-43-1-15',
	'#jqxCheckBox-43-1-16',
	'#jqxCheckBox-43-2-14',
	'#jqxCheckBox-43-2-15',
	'#jqxCheckBox-43-2-16',
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
	];

var AuditDefaultData = [];

var mainContainer='';
var mainGroupContainer='';
var groupContainer='';
var subgroupContainer='';
var factorIner='';
var factorInerItem='';
var factorContainer='';

var source;
var inputData1fcst = document.getElementById("data-input-1-fcst");

var Type;
var selectedItem=37;
const stiSubGroupValue = 37;

checkifcanUrl = "/macro/checkifcansave/" + stiSubGroupValue + "/";

if (1 == 1) {
	Type = "Asia";
	auditUrl = '/sti/sti-asia-data/';
	updateUrl = "/sti/update-sti-asia-data";
	saveUrl = "/sti/save-sti-asia";
	deleteUrl = "/sti/delete-sti-asia-byreferDate/" ;

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
            
                $.ajax({
			    url: '/macro/get-macro-display-settings/'+selectedItem,
			    method: 'GET',
			    dataType: 'json',
			    success: function(response) {
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
			    },
			    error: function(xhr, status, error) {
			      console.log(error)
			    }
			});
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
	        	var groupedData = groupByGroupIdAndSubgroupId(data);
                 mainContainer+='<div class="col-12">'
			                 +'<div class="col-12 d-flex">'
				                 +'<div class="col-2"></div>'
				                 +'<div class="col-10">'
										+'<div class="col-12 d-flex"><div class="align-middle fw-bold">MANUF PMI</div><div class="align-middle fw-bold">SERVICES PMI</div></div>'
										+'<div class="col-12 d-flex">'
											+'<div class="col-6 d-flex"><div class="align-middle">FCST</div><div class="align-middle">FLASH</div><div class="align-middle">FINAL</div></div>'
											+'<div class="col-6 d-flex"><div class="align-middle">FCST</div><div class="align-middle">FLASH</div><div class="align-middle">FINAL</div></div>'
										+'</div>'
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
				       factorIner+='<div class="col-6 d-flex">'
				        groupedData[groupId][subgroupId].forEach(function (item) {
				             checkBox="jqxCheckBox-"+item.groupId+'-'+item.subgroupId+'-'+item.factor;
				             isVisible=item.isVisible?'d-block':'d-none';
		    	  	       
				             factorInerItem+='<div class="align-middle">'
									+'<div id="'+checkBox+'" class="jqx-checkbox-items align-middle '+isVisible+'"></div>'
								+'</div>';
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
				  $('#macroContainer').append(mainContainer); 
	        	for (j = 0; j < data.length; j++) {
					items="#jqxCheckBox-"+data[j].groupId+'-'+data[j].subgroupId+'-'+data[j].factor;
		    	  	$(items).jqxCheckBox({ theme: 'dark', width: '100%', height: 26, checked: data[j].isVisible, disabled: true });
				}	
			},
	        error: function (e) {
	        	
					  console.log("ERROR : ", e);

	        }
	    }); 

   $("#dateInput").jqxDateTimeInput({ theme: 'dark',  views:["year","decade"]
   , width: "110px"
   , height: "25px"
   , formatString : "yyyy.MM" });
	
	$("#dateInputAudit").jqxDateTimeInput({ theme: 'dark',  views:["year","decade"]
   , width: "110px"
   , height: "25px"
   , formatString : "yyyy.MM" });
   
	$("#dateInputFrom").jqxDateTimeInput({ theme: 'dark', width: '200px', height: '25px' });
	$("#dateInputFrom").jqxDateTimeInput('setDate', monthDate);
	$("#dateInputTo").jqxDateTimeInput({ theme: 'dark', width: '200px', height: '25px' });
	$("#filter").jqxButton({ theme: 'dark', height: 30, width: 74 });
	$("#Clearfilter").jqxButton({ theme: 'dark', height: 30, width: 74 });

	renderSubGroup(stiSubGroupValue);
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
		for (i = 0; i < allitems.length; i++) {
			$(allitems[i]).jqxCheckBox({ checked: false });
		}
	}
});
function Edit(row, event) {

	isedit = true;
	var data = $('#' + Type + 'AuditGrid').jqxGrid('getrowdata', row);
	if (stiSubGroupValue == 1) {
		   oldDataJson={
				    "factor": data.factor,
				    "manuf": data.manuf,
				    "services": data.services,
				    };
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
				    "factor": updatedData.factor,
				    "manuf": updatedData.manuf,
				    "services": updatedData.services,
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
		items = allitems;
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

		inputDataType = inputData1fcst;
		items = allitems;
		var dataInputGridFields = [
			{ name: 'fcst', type: 'string' },
		];
		var totalFields = dataInputGridFields.length;
		var widthPercentage = 100/totalFields;

		var dataInputGridColumns = [
			{
				text: 'FCST', datafield: 'fcst', width: widthPercentage + '%', cellsalign: 'center', align: 'center'
			}
		];
		var defaultData = AuditDefaultData;
		
		var fields = [
			{ name: 'factor', type: 'string' },
			{ name: 'manuf', type: 'string' },
			{ name: 'services', type: 'string' },
		];
		var totalFields = fields.length;
		var widthPercentage = (100 - 10)/totalFields;
		var arrayOFcolumns = [
			{
				text: '', editable: false, datafield: 'Edit', width: '10%', cellsrenderer: function(row) {
					return "<input class=\"edit\" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit" + row + "\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons" + row + "\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Update\" /><input id=\"CancelUpdate\"  onclick='Cancel(" + row + ")' type=\"button\"  class=\"cancel\" value=\"Cancel\" /></div>";
				}
			},
			  { text: '',editable:false,  datafield: 'factor', width: widthPercentage + '%'},
	          { text: 'MANUF', datafield: 'manuf', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
	          { text: 'SERVICES', datafield: 'services', width: widthPercentage + '%', cellsalign: 'center', align: 'center' },
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
	initiate(Type, inputDataType, items, dataInputGridFields, dataInputGridColumns, defaultData, fields, arrayOFcolumns);

}
function saveFilterHistory(stiSubGroupValue, checkedItem) {


	var filterHistory = {
		"filterHistory": checkedItem.toString(),
		"screenName": "DATABASE_INPUT_SCREEN_MACRO-" + stiSubGroupValue
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
					for (i = 0; i < allitems.length; i++) {
						$(allitems[i]).jqxCheckBox({ checked: true });
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