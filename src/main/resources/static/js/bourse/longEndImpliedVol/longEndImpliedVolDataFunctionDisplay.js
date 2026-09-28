var checkedItem = 0;
var gridIdIncrement = 0;
var checkedItemid = [];
var Items = [];
var monthDate = new Date();
monthDate.setMonth(monthDate.getMonth() - 6);

const LEIV_PRODUCTS = [
 {name:'BUNDS',modules:[86,87]},
 {name:'BOBLS',modules:[88,89]},
 {name:'SHATZ',modules:[90,91]},
 {name:'BUXL',modules:[92]},
 {name:'OAT',modules:[93]},
 {name:'BTP',modules:[94]},
 {name:'GILTS',modules:[95]},
 {name:'T-NOTES',modules:[96,97]},
 {name:'T-BONDS',modules:[98,99]}
];
const LEIV_FACTORS=[
 {subgroupId:'2',name:'B&S VOL'},
 {subgroupId:'3',name:'TICK VOL'}
];

var allitems=[];
var leivItemValue={};
LEIV_PRODUCTS.forEach(function(p){
 p.modules.forEach(function(gid,mi){
  LEIV_FACTORS.forEach(function(f){
   var key='#jqxCheckBox-'+gid+'-'+f.subgroupId;
   allitems.push(key);
   leivItemValue[key]={
    GroupId:String(gid),subGroupId:f.subgroupId,factor:'',
    product:p.name,module:mi===0?'2nd CONSTANT MATURITY':'3rd CONSTANT MATURITY',
    factorName:f.name
   };
  });
 });
});

var functionDefinitions=[
 {selector:"#jqxDailyChangeInPercentage",code:"DCP",description:"Daily Change In %"},
 {selector:"#jqxDailyChangeIncrement",code:"DCI",description:"Daily Change Increment"},
 {selector:"#jqxWeeklyChangeInPercentage",code:"WCP",description:"Weekly Change In %"},
 {selector:"#jqxWeeklyChangeIncrement",code:"WCI",description:"Weekly Change Increment"},
 {selector:"#jqx10yrPercentile",code:"10YP",description:"10 Yr Percentile"},
 {selector:"#jqx20yrPercentile",code:"20YP",description:"20 Yr Percentile"},
 {selector:"#jqxCenturyPercentile",code:"CP",description:"Century Percentile"},
 {selector:"#jqx50dMovAvg",code:"50D",description:"50d MovAvg"},
 {selector:"#jqx100dMovAvg",code:"100D",description:"100d MovAvg"},
 {selector:"#jqx200dMovAvg",code:"200D",description:"200d MovAvg"}
];
var funcionFilter=functionDefinitions.map(function(x){return x.selector;});

$(window).on('load',function(){
 $('#overlay').fadeOut();
 $('#nav-tabContent').show();
});

$(document).ready(function(){
 $("#viewall").jqxButton({theme:'dark',width:110,height:35,template:"primary"});
 $("#viewall").css("display","block").click(function(){
  popupWindow('/bourse/allnews','Libvol - View All News',window,1300,600);
 });

 buildLeivSelector();

 var restrict=new Date(); restrict.setMonth(restrict.getMonth()-6);
 $("#dateInputFrom").jqxDateTimeInput({
  min:new Date(restrict.getFullYear(),restrict.getMonth(),restrict.getDate()),
  theme:'dark',width:'200px',height:'25px'
 });
 $("#dateInputFrom").jqxDateTimeInput('setDate',monthDate);
 $("#dateInputTo").jqxDateTimeInput({theme:'dark',width:'200px',height:'25px'});

 funcionFilter.forEach(function(x){$(x).jqxCheckBox({theme:'dark',width:120,height:25});});
 $("#Clearfilter").jqxButton({theme:'dark',height:30,width:74});
 $("#show").jqxButton({theme:'dark',height:30,width:74});

 $("#Clearfilter").click(function(){
  allitems.forEach(function(x){$(x).jqxCheckBox({checked:false,disabled:false});});
  functionDefinitions.forEach(function(x){$(x.selector).jqxCheckBox({checked:false});});
  checkedItem=0; checkedItemid=[];
 });

 $("#show").click(function(){
  Items=[]; gridIdIncrement=0;
  if(checkedItem>0){
   $("#collapseFilter").removeClass('show');
   drawGrids();
  }else{
   $('#alertFiltter-modal').modal('show');
   $("#collapseFilter").addClass('show');
  }
 });
});

function buildLeivSelector(){
 var h='';
 h+='<div class="col-12 p-0">';
 h+='<div class="col-12 d-flex fw-bold row-style">';
 h+='<div class="col-2">PRODUCT</div>';
 h+='<div class="col-5 text-center">2nd CONSTANT MATURITY</div>';
 h+='<div class="col-5 text-center">3rd CONSTANT MATURITY</div></div>';
 h+='<div class="col-12 d-flex fw-bold">';
 h+='<div class="col-2"></div>';
 h+='<div class="col-5 d-flex"><div class="col text-center">B&S VOL</div><div class="col text-center">TICK VOL</div></div>';
 h+='<div class="col-5 d-flex"><div class="col text-center">B&S VOL</div><div class="col text-center">TICK VOL</div></div></div>';

 LEIV_PRODUCTS.forEach(function(p,i){
  h+='<div class="col-12 d-flex align-items-center '+(i%2?'row-style':'')+'">';
  h+='<div class="col-2">'+p.name+'</div>';
  h+=moduleCells(p.modules[0]);
  h+=p.modules.length>1?moduleCells(p.modules[1]):'<div class="col-5"></div>';
  h+='</div>';
 });
 h+='</div>';
 $('#longEndImpliedVolContainer').html(h);

 allitems.forEach(function(x){$(x).jqxCheckBox({theme:'dark',width:'100%',height:26});});
 $('.leiv-factor-checkbox').off('change').on('change',function(e){
  var id='#'+$(this).attr('id');
  if(e.args.checked){
   checkedItem++;
   if(!checkedItemid.includes(id))checkedItemid.push(id);
  }else{
   checkedItem=Math.max(0,checkedItem-1);
   checkedItemid=checkedItemid.filter(function(x){return x!==id;});
  }
  var lock=checkedItem>=4;
  allitems.forEach(function(x){
   if(lock && !$(x).jqxCheckBox('checked'))$(x).jqxCheckBox({disabled:true});
   else if(!lock)$(x).jqxCheckBox({disabled:false});
  });
  enableDisableDropDowns(lock);
 });
}

function moduleCells(gid){
 var h='<div class="col-5 d-flex">';
 LEIV_FACTORS.forEach(function(f){
  h+='<div class="col d-flex justify-content-center"><div style="min-width:24px;">';
  h+='<div id="jqxCheckBox-'+gid+'-'+f.subgroupId+'" class="jqx-checkbox-items leiv-factor-checkbox"></div>';
  h+='</div></div>';
 });
 return h+'</div>';
}

async function drawGrids() {
    $('#overlayChart').show();
    $("#grids-container").empty();
    for (i = 0; i < checkedItemid.length; i++) {
        $('#overlay').show();
        if (checkedItemid[i] != null) {
            Items.push(checkedItemid[i]);
            await getgridData(checkedItemid[i], getSelectedFunction());
        }
    }
    $('#overlay').fadeOut();
}

function getgridData(item, functions) {
    console.log("[DATA-FUNCTION] selected functions =", functions);
    dataParam = {
        "fromdate": $.jqx.dataFormat.formatdate($("#dateInputFrom").jqxDateTimeInput('getDate'), 'yyyy-MM-dd'),
        "todate": $.jqx.dataFormat.formatdate($("#dateInputTo").jqxDateTimeInput('getDate'), 'yyyy-MM-dd'),
        "subgroupId": leivItemValue[item].subGroupId,
        "groupId": leivItemValue[item].GroupId,
        "functions": functions,
    };
    console.log("[DATA-FUNCTION] request =", dataParam);
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/metals/getgriddatafunction",
            data: JSON.stringify(dataParam),
            dataType: 'json',
            timeout: 600000,
            success: function(response) {
                resolve(response);
                addDataGrid(dataParam, response, response.gridTitle);
            },
            error: function(error) {
                console.log("[DATA-FUNCTION] request error =", error);
                reject(error);
            }
        });
    });
}

function addDataGrid(dataParam, data, title) {
    var source = {
        datatype: "json",
        datafields: [{
            name: 'referDate',
            type: 'string'
        }, {
            name: 'dailyInput',
            type: 'string'
        }, {
            name: 'value1',
            type: 'string'
        }, {
            name: 'value2',
            type: 'string'
        }, {
            name: 'value3',
            type: 'string'
        }, {
            name: 'WCI',
            type: 'string'
        }, {
            name: '10YP',
            type: 'string'
        }, {
            name: '20YP',
            type: 'string'
        }, {
            name: '50D',
            type: 'string'
        }, {
            name: '100D',
            type: 'string'
        }, {
            name: '200D',
            type: 'string'
        }, {
            name: 'CP',
            type: 'string'
        }],
        id: 'id',
        localdata: data
    };
    dataArray = ['value1', 'value2', 'value3'];
    var dataAdapter = new $.jqx.dataAdapter(source);
    var gridId = "grid_" + gridIdIncrement;
    $("#grids-container").append('<div id="' + gridId + '" class="item m-2 align-items-top"></div>');
    dynamicColumns = getColumns(dataParam);
    $('#' + gridId).jqxGrid({
        width: (dataParam.functions.length == 0) ? 2 * 110 : (2 + dataParam.functions.length) * 110,
        height: 710,
        theme: 'dark',
        pageable: true,
        pagesize: 100,
        pagesizeoptions: ['50', '100', '200'],
        source: dataAdapter,
        showfilterrow: true,
        filterable: true,
        columnsresize: false,
        columns: dynamicColumns,
        selectionmode: 'none',
        columngroups: [{
            text: getSubgroupNameById(leivItemValue[Items[gridIdIncrement]].subGroupId) + '</span> - ' + title,
            align: 'center',
            name: 'country'
        }]
    });
    gridIdIncrement++;
}

function getColumns(dataParam) {
    if (dataParam.functions.length == 0) {
        return [{
            text: ' DATE',
            columngroup: 'country',
            datafield: 'referDate',
            width: '50%'
        }, {
            text: 'DAILY INPUT',
            columngroup: 'country',
            datafield: 'dailyInput',
            cellclassname: 'factorBold',
            width: '50%'
        }];
    } else {
        columnWidth = 100 / (dataParam.functions.length + 2);
        columns = [{
            text: ' DATE',
            columngroup: 'country',
            datafield: 'referDate',
            width: columnWidth + '%'
        }, {
            text: 'DAILY INPUT',
            columngroup: 'country',
            datafield: 'dailyInput',
            cellclassname: 'factorBold',
            width: columnWidth + '%'
        }];
        for (j = 0; j < dataParam.functions.length; j++) {
            columns.push({
                text: getFunctionDesc(dataParam.functions[j]),
                columngroup: 'country',
                datafield: dataArray[j],
                width: columnWidth + '%'
            });
        }
        return columns;
    }
}

function getSelectedFunction() {
    var selectedFunctions = [];
    for (var i = 0; i < functionDefinitions.length; i++) {
        if ($(functionDefinitions[i].selector).jqxCheckBox('val')) {
            selectedFunctions.push(functionDefinitions[i].code);
        }
    }
    console.log("[DATA-FUNCTION] getSelectedFunction =", selectedFunctions);
    return selectedFunctions;
}

function getFunctionDesc(functionCode) {
    var functionDefinition = functionDefinitions.find(function(item) {
        return item.code === functionCode;
    });
    if (functionDefinition) {
        return functionDefinition.description.toUpperCase();
    }
    return '';
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

function getSubgroupNameById(id) {
    if (String(id) === '2') return 'B&S VOL';
    if (String(id) === '3') return 'TICK VOL';
    return '';
}