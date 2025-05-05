var  dropDownCryptosource =[{
									"name": "BITCOIN",
									"groupId": "71"
								},
								{
									"name": "ETHEREUM",
									"groupId": "72"
								},
								{
									"name": "SOLANA",
									"groupId": "73",
								},
								{   "name": "SHIBA INU",
									"groupId": "74"
								},
								{
									"name": "BINANCE COIN",
									"groupId": "75"
								},
								{
									"name": "XRP",
									"groupId": "76"
								}];
								
var allitems = [
	'#jqxCheckBox-71-1',
	'#jqxCheckBox-71-3',
	'#jqxCheckBox-71-4',
	'#jqxCheckBox-71-2',
	'#jqxCheckBox-71-5',
	'#jqxCheckBox-71-6',
	'#jqxCheckBox-71-7',
	'#jqxCheckBox-71-8',
];
var candleStickChart;	
var chart;									
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
var chartHeight=425;	
const graphName='cryptoTradings-';
$(document).ready(function() {
	 initializeCryptoOptions();

	 initialiazeItems(allitems, 1);
	
	 drawGraph();
	 
});

function drawGraph() {
	
	 candleStickTranding(graphName,false);
	
	 const removeEmpty = true;
	 drawTechnicalGraph("#technicalChart","cryptos",graphName,removeEmpty,true);
	
}

function initializeCryptoOptions(){
	
	
   var Optionsource =
     {
         datatype: "json",
         datafields: [
             { name: 'name' },
             { name: 'groupId' }
         ],
         localdata: dropDownCryptosource,
         async: true
     };
     
	  var functionDataAdapter = new $.jqx.dataAdapter(Optionsource);
	$("#dropDownCryptoOptions").jqxDropDownList({dropDownHeight: 200, selectedIndex:0, source: functionDataAdapter, placeHolder: "",  displayMember: "name",valueMember: "groupId", theme: 'dark' , width: 150, height: 25});
	
	
	$('#dropDownCryptoOptions').on('change', function (event) {
		candleStickTranding(graphName,false);
	});
	
}