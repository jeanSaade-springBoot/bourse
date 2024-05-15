 var allitems = ["#jqxCheckBoxNikkei",
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
			"#jqxCheckBoxDowjones",
			"#jqxCheckBoxSandp",
			"#jqxCheckBoxNasdaq",
			"#jqxCheckBoxRussell",
			"#jqxCheckBoxFang",
			"#jqxCheckBoxDjmajorbanks",
			"#jqxCheckBoxDjregionalbanks",
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
			"#jqxCheckBoxEubanks_eurusd",
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
			"#jqxCheckBoxMexbol_usdmxn",
			"#jqxCheckBoxBitcoin",
			"#jqxCheckBoxEtherium",
			"#jqxCheckBoxSolana",
			"#jqxCheckBoxCardano",
			"#jqxCheckBoxShiba",
		];	
var chart;
var chartResponse;
var chartConfigSettings;
var data;
var trendLines=[];
var channelLines=[];
var serieArray=[];
var checkedItemid = [];
var trendlineSeries=[];
var trendLineId=0;
var channelId=0;
var getFormatResult0=2;
var results;
var selectedstartCellId;
var source;

const graphName="stiGraph"; 
			   
$(window).on('load', function() {
	$('#overlay').fadeOut();
	$('#nav-tabContent').show();
});
$(document).ready(function() {
	
     initializeNewsBanner();
	 initializePeriods();
	 initializeTypes();
	 initializeFunctions();
	 
	 initializeNavigationButtons();
	 initialiazeItems(allitems,1);
	 initialiazeClearFilterButton();
	 initializeShowFilterButton();
	 
	$("#SaveToFavorites").jqxButton({ theme: 'dark', height: 30, width: 100 });
     
    $("#draw").jqxButton({ theme: 'dark', height: 30, width: 140 });
	
	$("#draw").click(function() {
		  graph_trendlines = results.filter(obj => obj.graphId ===  checkedItemid[0]);
			if(graph_trendlines.length==0){
				 drawLine();
			 }
			else if(graph_trendlines[0].trendlines.length<3)
			{ 
				drawLine();
			 }else
			{
		$('#alertLimitation-modal').modal('show');
		$("#alertTextLimitation").empty();
							        
		$("#alertTextLimitation").append("<p> You cannot draw more than 3 trendlines </p>");

			}
	});
	$('#startDate').on('change', function (event) 
	{  
	    var sDate =  new Date(event.args.date); 
        
	    let result = data[0].graphResponseDTOLst.find(obj => {
    			let objDate = parseDate(obj.x);
   				 return objDate.getTime() === sDate.getTime();
		});
		
		let yValue = result ? parseFloat(result.y).toFixed(getFormatResult0[0]) : null;
		 y1=result ?result.y : null;
         x1=result ?result.x : null;
		$('#startValue').val(yValue);
		
	}); 
    $('#crossDate').on('change', function (event) 
	{  
	    var cDate =  new Date(event.args.date); 
        
	    let result = data[0].graphResponseDTOLst.find(obj => {
    			let objDate = parseDate(obj.x);
   				 return objDate.getTime() === cDate.getTime();
		});
		 y2=result ?result.y : null;
         x2=result ?result.x : null;
		let yValue = result ? parseFloat(result.y).toFixed(getFormatResult0[0]) : null;
		$('#crossValue').val(yValue);
		
	}); 
getTrendLinesHistory();
    });

function drawGraph() {
	
	var graphService = "sti";
	const removeEmpty = true;

	drawTrendLine(graphService,graphName,removeEmpty,true);
	
}
function drawTrendLine(graphService,graphName,removeEmpty,saveHistory)
{	
	mode = "merge";
	var dataParam;
	var checkedItemValues = [];
	serieArray = [];
	
	$('#overlayChart').show();
    
	var fromdate = formatDate(monthDate);
	var todate = formatDate(date);
	$("#mainChart").html("");
	$("#mainChart").css("display", "block");
	
	if (checkDateMonth(monthDate, date)) {
		$("#button-monthForward").prop('disabled', false);
	}
	else {
		$("#button-monthForward").prop('disabled', true);
	}

	if (checkDateYear(monthDate, date)) {
		$("#button-yearForward").prop('disabled', false);
	}
	else {
		$("#button-yearForward").prop('disabled', true);
	}

	var Period = 'd';
	var type = '0';
	if (chart != null)
		chart.destroy();

	for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					checkedItemValues.push(checkedItemid[i]);
			}
			
	chart = new ApexCharts(document.querySelector("#mainChart"), options_missingDates);

	chart.render();
	const matchingItem = results.find(item => item.graphId === checkedItemValues[0]);
  
  if(typeof(matchingItem)=='undefined')
    {
		 trendLines=[];
		 channelLines=[];
		 serieArray=[];
		 trendlineSeries=[];
		 trendLineId=0;

	}
	else { 
		 trendLines=[];
		 channelLines=[];
		 serieArray=[];
		 trendlineSeries=[];
		 trendLineId=0;
		 let smallestDate = null;
		 
			for (var i = 0; i < matchingItem.trendlines.length; i++) {
					trendLineId=trendLineId+1;
					trendlineSeries.push({
						trendLineId: matchingItem.trendlines[i].trendLineId,
					    name: 'Trendline '+convertToRoman(i+1),
					    data: transformTrendline(matchingItem.trendlines[i]),
					    type:'line',
					    hidden: matchingItem.trendlines[i].hidden
					  });
					  
					trendLines.push(matchingItem.trendlines[i]);
				  }
				 
			for (var i = 0; i < matchingItem.channelLines.length; i++) {
					channelId=matchingItem.channelLines[i].channelId;
					trendlineSeries.push({
						channelId: matchingItem.channelLines[i].channelId,
					    name: 'Channel',
					    data: transformChannelLine(matchingItem.channelLines[i]),
					    type:'line',
					    hidden: matchingItem.channelLines[i].hidden
					  });
			          
					  channelLines.push(matchingItem.channelLines[i]);

				  } 
				 for (const trendline of trendLines) {
				    
				    const currentDate = parseDate(trendline.x1);
				
				    if (smallestDate === null || currentDate < smallestDate) {
				        smallestDate = currentDate;
				    }
				}
		 startDate = smallestDate;
		 if (monthDate>startDate)
		 	fromdate =  formatDate(startDate);  
			resetParameters();
	}
	title = itemValue[checkedItemValues[0]].title;

					dataParam = {
						"fromdate": fromdate,
						"todate": todate,
						"period":  Period,
						"type": type,
						"subGroupId1": itemValue[checkedItemValues[0]].subGroupId,
						"groupId1": itemValue[checkedItemValues[0]].GroupId,
						"isFunctionGraph":functionId=='-1'?false:true,
						"functionId":functionId,
						//"removeEmpty1":itemValue[checkedItemValues[0]].subGroupId==2?"true":false
						"removeEmpty1":removeEmpty
					};
					
					$.ajax({
						type: "POST",
						contentType: "application/json; charset=utf-8",
						url: "/"+graphService+"/getgraphdatabytype",
						data: JSON.stringify(dataParam),
						dataType: 'json',
						timeout: 600000,
						success: function(response) {
							
						    source = getMinMaxDateData(response[0].graphResponseDTOLst);
				           //var data = transformData(response[0].graphResponseDTOLst);
 							
 						   data=response;
 						    
				           chartResponse =  response[0].graphResponseDTOLst;
    	 
						    x3= getMaxDate(response[0].graphResponseDTOLst);
						    
							$("#startDate").jqxDateTimeInput({ min: source[0].minDate, max: source[0].maxDate,theme:'dark', width: 200, height: 30, }); 
				            $("#crossDate").jqxDateTimeInput({ min: source[0].minDate, max:source[0].maxDate,theme:'dark', width: 200, height: 30}); 
							$("#startDate").val("");
							$("#crossDate").val("");
							newstartdate = new Date();
							startDateF1 = response[0].config.startDate;
							if (startDateF1 != null)
								startDateF1 = new Date(startDateF1.split("-")[1] + "-" + startDateF1.split("-")[0] + "-" + startDateF1.split("-")[2]);


							T1 = response[0].config.displayDescription == null ? itemValue[checkedItemValues[0]].title : response[0].config.displayDescription;
							title = T1;
							if (response[0].config.yAxisFormat != null && response[0].config.yAxisFormat != "") {
								if (response[0].config.yAxisFormat.includes("%")) {
									isdecimal = false;
									if (typeof response[0].config.yAxisFormat.split(".")[1] != 'undefined')
										yaxisformat = response[0].config.yAxisFormat.split("%")[0].split(".")[1].length;
									else
										yaxisformat = 0;
								}
								else {
									if (typeof response[0].config.yAxisFormat.split(".")[1] != 'undefined')
										yaxisformat = response[0].config.yAxisFormat.split(".")[1].length
									else
										yaxisformat = 0

									isdecimal = true;
								}
							}
							else
								yaxisformat = 3;

							var dbchartType1 = response[0].config.chartType;
							chartType1 = getChartType(dbchartType1)[0];
							curve1 = getChartType(dbchartType1)[1];
							disableOptions(false);
							var getFormatResult = getFormat(response[0].config.dataFormat);
							chartDbFontSize = response[0].config.chartSize;
							
							dbChartTransparency= typeof(matchingItem)!='undefined'?matchingItem.chartOptions.chartTransparency:response[0].config.chartTransparency;
							chartTransparency = checkActiveChartColorTransparency($("#chartColorTransparency").find(".active")[0],dbChartTransparency);
							
							dbChartchartType1= typeof(matchingItem)!='undefined'?matchingItem.chartOptions.chartType1:chartType1;
							chartType1 = checkActiveChartType($("#chartTypes").find(".active")[0], dbChartchartType1, Period);
							
							dbChartColor = typeof(matchingItem)!='undefined'?'#'+matchingItem.chartOptions.chartColor:response[0].config.chartColor;
							chartColor = chartType1=='line'?"#ffffff":checkActiveChartColor($("#chartColor").find(".active")[0],dbChartColor);
							
							dbFontsize = typeof(matchingItem)!='undefined'?matchingItem.chartOptions.fontsize:chartDbFontSize;
							fontsize = checkActiveFontSize($("#fontOptions").find(".active")[0], dbFontsize);
							
							dbMarkerSize = typeof(matchingItem)!='undefined'?matchingItem.chartOptions.markerSize.split("-")[1]: response[0].config.chartshowMarkes;
							markerSize = checkActiveChartMarker($("#chartMarker").find(".active")[0],dbMarkerSize);
							
							dbShowGrid = typeof(matchingItem)!='undefined'?matchingItem.chartOptions.showGrid:response[0].config.chartShowgrid;
							showGrid = checkActiveChartGrid($("#gridOptions").find(".active")[0], dbShowGrid);
							
							dbShowLegend = typeof(matchingItem)!='undefined'?matchingItem.chartOptions.showLegend:showLegend;
							showLegend	= checkActiveChartLegend($("#gridLegend").find(".active")[0], dbShowLegend);
 
							chart.updateOptions(getChartDailyOption(title+getTitlePeriodAndType(), showGrid, fontsize, markerSize));
							updateChartOption();
							
							min = Math.min.apply(null, response[0].graphResponseDTOLst.map(function(item) {
								return item.y;
							}));
							max = Math.max.apply(null, response[0].graphResponseDTOLst.map(function(item) {
									return item.y;
								}));
							//minvalue = parseFloat((Math.floor(min * 20) / 20).toFixed(2));
							//maxvalue = parseFloat((Math.floor(max * 20) / 20).toFixed(2));
							minvalue = min;
							maxvalue = max;
							var yaxisformat = getFormat(response[0].config.yAxisFormat);
							
							notDecimal=yaxisformat[1];
					        nbrOfDigits=yaxisformat[0];
					        
						 getFormatResult0 = getFormat(response[0].config.dataFormat);
					       
						
							
							chartConfigSettings={functionId:functionId+1,
												 isDecimal:isdecimal,
												 yAxisFormat:yaxisformat,
												 fontSize:fontsize,
												 min:min,
												 max:max,
												 minvalue:minvalue,
												 maxvalue:maxvalue,
												 response:response,
												 Period:Period,
												 chartColor:chartColor,
												 chartTransparency:chartTransparency,
												 getFormatResult0:getFormatResult0,
												 checkedItem:checkedItem,
												 chartType1:chartType1};
							//if(Period=='d')
							    serieArray = getSerriesData();
								updateSeriesChart(chartConfigSettings);
							
							//else
							//	updateChartSelectedItem(chartConfigSettings);
						    checkIfRenderFlag(graphName,itemValue[checkedItemValues[0]]);
						
							drawTrendLineTable(trendLines);
	
							$('#overlayChart').hide();
						},
						error: function(e) {

							console.log("ERROR : ", e);

						}
					});
					
		    (saveHistory)?saveGraphHistory(graphName,checkedItemValues,Period,type):null;
		    
	$("#dateFrom-mainChart").val(fromdate);
	$("#dateTo-mainChart").val(todate);
	
}

function getMinMaxDateData(data) {
    var minMaxDateData = [];
	 let dates = data.map(obj => new Date(obj.x));
	    
	// Find min and max dates
	let minDate = new Date(Math.min.apply(null, dates));
	let maxDate = new Date(Math.max.apply(null, dates));
    minMaxDateData.push({ minDate: minDate, maxDate: maxDate });
    return minMaxDateData;
}

function parseDate(dateString) {
    var parts = dateString.split('-');
    var day = parseInt(parts[0]);
    var month = parts[1];
    var year = parseInt(parts[2]) + 2000; // Assuming the year is in the format yy and needs to be converted to yyyy
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var monthIndex = months.indexOf(month);
    return new Date(year, monthIndex, day);
}

function getMaxDate(data) {
    var maxDate = null;
    for (var i = 0; i < data.length; i++) {
        var dateString = data[i].x;
        var currentDate = parseDate(dateString);
        if (!maxDate || currentDate > maxDate) {
            maxDate = currentDate;
        }
    }
    return maxDate;
}
function transformData(data) {
    var transformedData = [];
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        var label = item.x;
        var y = item.y;
        var html = "<div tabIndex=0 style='padding: 1px;'><div>Date: " + label + "</div><div>Value: " + y + "</div></div>";
        transformedData.push({ html: html, label: label, y: y });
    }
    return transformedData;
    }
    // Function to parse date string in the format "dd-MMM-yy"
function parseDate(dateString) {
    // Split the date string by "-"
    let parts = dateString.split("-");
    
    // Parse day, month, and year
    let day = parseInt(parts[0], 10);
    let monthStr = parts[1];
    let year = "20"+parseInt(parts[2], 10);

    // Map month abbreviation to its corresponding number
    let months = {
        "Jan": 0,
        "Feb": 1,
        "Mar": 2,
        "Apr": 3,
        "May": 4,
        "Jun": 5,
        "Jul": 6,
        "Aug": 7,
        "Sep": 8,
        "Oct": 9,
        "Nov": 10,
        "Dec": 11
    };

    // Get the month number from the abbreviation
    let month = months[monthStr];

    // Return the parsed date as a Date object
    return new Date(year, month, day);
}
function drawTrendLineTable(data){
	$("#trendline-grid").empty();
	var trendlineGrid ='';
	let cid;
		for (var i = 0; i < data.length; i++) {
			 hasChannel = channelLines.filter(obj => obj.trendLineId === data[i].trendLineId);
			 let xc=(hasChannel.length!=0)?hasChannel[0].xc:"";
			 let yc=(hasChannel.length!=0)?parseFloat(hasChannel[0].yc).toFixed(getFormatResult0[0]):"";
			 let y3c=(hasChannel.length!=0)?parseFloat(hasChannel[0].y3).toFixed(2):"";
			 cid=(hasChannel.length!=0)?hasChannel[0].channelId:"";
	
			 trendlineGrid += "<div class='col-4 pl-0 d-flex' id='trendline"+data[i].trendLineId+"'>"
								+"<div class='col-11 pl-0 pr-1'>"
								+"		<table id='table_"+data[i].trendLineId+"'>"
								+"			<thead>"
								+"				<tr>"
								+"					<th class='pl-0 d-flex'><div id='editDate_"+data[i].trendLineId+"'> </div> <button class='btn btn-light-secondary mr-1 mb-1 edit-trendline' type='button' onclick='editTrendLines("+data[i].dbid+","+data[i].trendLineId+")'><img src='/img/icon/calendar.svg' width='16' height='16' style=''></button>TRENDLINE</th>"
								+"					<th class='slope-style'>slope</th>"
								+"					<th>"+parseFloat(data[i].slope).toFixed(3)+"</th>"
								+"					<th class='trendline-cell'>"+parseFloat(data[i].y3).toFixed(getFormatResult0[0])+"</th>"
								+"				</tr>"
								+"			</thead>"
								+"			<tbody>"
								+"				<tr>"
								+"					<td>Start date</td>"
								+"					<td class='grey-cell start-date' id='start_"+data[i].trendLineId+"'>"+data[i].x1+"</td>"
								+"					<td>& Price</td>"
								+"					<td class='grey-cell' id='startPrice_"+data[i].trendLineId+"'>"+parseFloat(+data[i].y1).toFixed(getFormatResult0[0])+"</td>"
								+"				</tr>"
								+"				<tr>"
								+"					<td>Cross date</td>"
								+"					<td class='grey-cell cross-date' id='cross_"+data[i].trendLineId+"'>"+data[i].x2+"</td>"
								+"					<td>& Price</td>"
								+"					<td class='grey-cell br-br' id='crossPrice_"+data[i].trendLineId+"'>"+parseFloat(data[i].y2).toFixed(getFormatResult0[0])+"</td>"
								+"				</tr>"
						        
						       +"	<tr data-toggle='collapse' data-target='#demo"+data[i].trendLineId+"' class='accordion-toggle'>"
							   +"     <th class='pl-0' colspan='2'><button class='btn btn-default btn-xs pl-0 pr-0 pt-0'><img src='/img/icon/arrow-down.svg' width='16' height='16' style=''></button> ADD CHANNEL</th>"
							   +"     <th></th>";
							   
							   
							   trendlineGrid +=(hasChannel.length!=0)?
							    "					<th class='trendline-cell'>"+y3c+"</th>"
								:
								"     <th></th>";
								
							  trendlineGrid +=" 	</tr>"
							  +"<tr>"
							  +"<td colspan='12' class='hiddenRow p-0'>"
							  +"<div class='accordian-body collapse' id='demo"+data[i].trendLineId+"'> "
							  + "<table  id='tableChannel_"+data[i].trendLineId+"' class=' table-striped'>"
							                               +"			<thead style='visibility: collapse;'>"
															+"				<tr>"
															+"					<th class='pl-0 d-flex'><div> </div> <button class='btn btn-light-secondary mr-1 mb-1 edit-trendline' type='button' onclick='editTrendLines("+data[i].dbid+","+data[i].trendLineId+")'><img src='/img/icon/calendar.svg' width='16' height='16' style=''></button>TRENDLINE</th>"
															+"					<th class='slope-style'>slope</th>"
															+"					<th>"+parseFloat(data[i].slope).toFixed(3)+"</th>"
															+"					<th class='trendline-cell'>"+parseFloat(data[i].y3).toFixed(getFormatResult0[0])+"</th>"
															+"				</tr>"
															+"			</thead>"
							                                +"<tr>"
															+"					<td >Start date</td>"
															+"					<td class='grey-cell start-date' id='ChannelStart_"+data[i].trendLineId+"'>"+xc+"</td>"
															+"					<td >& Price</td>"
															+"					<td class='grey-cell' id='channelStartPrice_"+data[i].trendLineId+"'>"+yc+"</td>"
															+"				</tr>"
							               	+"</table>"
							             + "</div> "
							         +" </td>"
							     + "  </tr>"
						       
								+"			</tbody>"
								+"		</table>"
								+"		</div>";
								
								trendlineGrid +="<div class='d-flex align-items-start flex-column bd-highlight mb-3' style='height: 145px;'>";
									
									trendlineGrid +="  <div class='mb-auto bd-highlight'>";
								
									if(typeof(data[i].dbid)!='undefined')
									{
										trendlineGrid += "	"
									if (data[i].hidden!=true)
										trendlineGrid +="		    <button id='toggleTrendline_"+data[i].trendLineId+"' class='btn btn-light-secondary mr-1 mb-1 green'><i class='far fa-eye white'></i></button>";
										else 
										trendlineGrid +="		    <button id='toggleTrendline_"+data[i].trendLineId+"' class='btn btn-light-secondary mr-1 mb-1 hide'><i class='far fa-eye-slash white'></i></button>";

										trendlineGrid +="		    <button class='btn btn-light-secondary mr-1 mb-1 red' type='button' onclick='deleteTrendLinesHistory("+data[i].dbid+","+data[i].trendLineId+")'><img src='/img/icon/delete.svg' width='16' height='16' style=''></button>"
	
									}else{
										trendlineGrid += " "
									+"		    <button class='btn btn-light-secondary mr-1 mb-1 green' type='button' onclick='saveTrendLinesHistory("+data[i].trendLineId+")'><img src='/img/icon/save.svg' width='16' height='16' style=''></button>"
								    +"		    <button class='btn btn-light-secondary mr-1 mb-1 blue' type='button' onclick='cancelTrendline("+data[i].trendLineId+")'><img src='/img/icon/false.svg' width='16' height='16' style=''></button>"
									
									}
									trendlineGrid +="</div>";
									
								if(hasChannel.length!=0)
								 {
									trendlineGrid +="  <div class='bd-highlight'>";
								
									if(typeof(hasChannel[0].dbid)!='undefined')
									{
									if (hasChannel[0].hidden!=true)
										trendlineGrid +="		    <button id='toggleChannel_"+cid+"' class='btn btn-light-secondary mr-1 mb-1 green'><i class='far fa-eye white'></i></button>"
									else 
										trendlineGrid +="		    <button id='toggleChannel_"+cid+"' class='btn btn-light-secondary mr-1 mb-1 hide'><i class='far fa-eye-slash white'></i></button>"
									
									trendlineGrid +="		    <button class='btn btn-light-secondary mr-1 mb-1 red' type='button' onclick='deleteChannellineHistory("+data[i].dbid+","+data[i].trendLineId+")'><img src='/img/icon/delete.svg' width='16' height='16' style=''></button>"
	
									}
									else{
										trendlineGrid += " "
									+"		    <button class='btn btn-light-secondary mr-1 mb-1 green' type='button' onclick='saveChannelHistory("+data[i].trendLineId+")'><img src='/img/icon/save.svg' width='16' height='16' style=''></button>"
								    +"		    <button class='btn btn-light-secondary mr-1 mb-1 blue' type='button' onclick='cancelChannelline("+data[i].trendLineId+")'><img src='/img/icon/false.svg' width='16' height='16' style=''></button>"
									}
									trendlineGrid +="</div>";
								}
									
								trendlineGrid +="</div>";
								// end div
								trendlineGrid +="</div>";
					
		
				}				
			 $("#trendline-grid").append(trendlineGrid); 
			
			for (var i = 0; i < data.length; i++) {
				
				hasChannel = channelLines.filter(obj => obj.trendLineId === data[i].trendLineId);
 				cid=(hasChannel.length!=0)?hasChannel[0].channelId:"";
 				 						  
				var shouldBeExpanded = (hasChannel.length!=0)?true:false; // Example condition, change this according to your logic
		
				    var target = $('#demo'+(i+1));
				    if (shouldBeExpanded) {
	    		   		 target.collapse('show')   
	    		  	} else {
				         target.collapse('hide');   
				    }
 				
				$("#editDate_" + data[i].trendLineId).jqxDateTimeInput({ min: source[0].minDate, max: source[0].maxDate, width: '0px', height: '0px', theme: 'dark' });
				$("#inputeditDate_" + data[i].trendLineId).css("padding", "0");

				$("#editDate_" + data[i].trendLineId).on('valueChanged', function(event) {
					var selectedId = selectedstartCellId.split("_")[1];
					var selectedColumn = selectedstartCellId.split("_")[0];
					var jsDate = event.args.date;

					var json = chartResponse.filter(obj => obj.x === formatTrendlineDate(jsDate));
					if (selectedColumn == "start") {
						if (jsDate > parseDate($('#cross_' + selectedId).text())) {
							$('#alertLimitation-modal').modal('show');
							$("#alertTextLimitation").empty();
							$("#alertTextLimitation").append("<p>The start date must be earlier than the cross date.</p>");
							return;
						}
						if (typeof (json[0]) == 'undefined') {
							$('#alertLimitation-modal').modal('show');
							$("#alertTextLimitation").empty();
							$("#alertTextLimitation").append("<p>The selected date has no data. Please choose a different date.</p>");
							return;
						}
						y1 = json[0].y;
						x1 = formatTrendlineDate(jsDate);

						y2 = $('#crossPrice_' + selectedId).text();
						x2 = $('#cross_' + selectedId).text();

						x3 = getMaxDate(chartResponse);

						$('#' + selectedstartCellId).text(formatTrendlineDate(jsDate));
						$('#startPrice_' + selectedId).text(parseFloat(json[0].y).toFixed(getFormatResult0[0]));

						updateTrendLine(selectedId);  

					} else if (selectedColumn == "cross") {

						if (jsDate < parseDate($('#start_' + selectedId).text())) {
							$('#alertLimitation-modal').modal('show');
							$("#alertTextLimitation").empty();
							$("#alertTextLimitation").append("<p>The cross date must be later than the start date.</p>");
							return;
						}
						if (typeof (json[0]) == 'undefined') {
							$('#alertLimitation-modal').modal('show');
							$("#alertTextLimitation").empty();
							$("#alertTextLimitation").append("<p>The selected date has no data. Please choose a different date.</p>");
							return;
						}


						y1 = $('#startPrice_' + selectedId).text();
						x1 = $('#start_' + selectedId).text();

						y2 = json[0].y;
						x2 = formatTrendlineDate(jsDate);

						x3 = getMaxDate(chartResponse);

						$('#' + selectedstartCellId).text(formatTrendlineDate(jsDate));
						$('#crossPrice_' + selectedId).text(parseFloat(json[0].y).toFixed(getFormatResult0[0]));

						updateTrendLine(selectedId);  

					} else if (selectedColumn == "ChannelStart") {

						$('#' + selectedstartCellId).text(formatTrendlineDate(jsDate));
						$('#channelStartPrice_' + selectedId).text(parseFloat(json[0].y).toFixed(getFormatResult0[0]));
						
						y1 = $('#startPrice_' + selectedId).text();
						x1 = $('#start_' + selectedId).text();

						y2 = $('#crossPrice_' + selectedId).text();
						x2 = $('#cross_' + selectedId).text();
						
						yc = json[0].y;
						xc = formatTrendlineDate(jsDate);
						
						x3 = getMaxDate(chartResponse);
						var channelLineJson={ "x1":x1,"y1":y1,
											   "x2":x2,"y2":y2,
											   "xc":xc,"yc":yc,
											   "x3":x3,
											   "trendLineId":selectedId};
						if(hasChannel.length!=0)
						   updateChannelLine(channelLineJson);
						else
						   addChannelTrendLine(channelLineJson);
					}
			
			});
			
			
				$("#toggleTrendline_"+data[i].trendLineId).click(function() {
				 	var $button = $(this);
				    var $icon = $button.find('i');
				    var index= $button.attr('id').split("_")[1];
				    // Toggle the visibility icon
				    $icon.toggleClass('fa-eye').toggleClass('fa-eye-slash');
				
				    // Toggle the button text
				    if ($icon.hasClass('fa-eye')) {
				      $button.attr('title', 'Hide').attr('aria-label', 'Hide');
				      $button.addClass('green');
				      $button.removeClass('hide');
				      
				        trendlineSeries.forEach(function(item) {
							 if(item.trendLineId === parseFloat(index))
						        item.hidden = false;
						});
					    trendLines.forEach(function(item) {
							 if(item.trendLineId === parseFloat(index))
						        item.hidden = false;
						});  
				       trendLine=trendlineSeries.filter(obj => obj.trendLineId === parseFloat(index));
	 					
	 				   serieArray.unshift(trendLine[0]);
	 				   updateSeriesChart(chartConfigSettings);
	 				   saveShowHideTrendline(trendLine[0].trendLineId, false);
	 				   
				    } else {
				      $button.attr('title', 'Show').attr('aria-label', 'Show');
				      $button.removeClass('green');
				      $button.addClass('hide');
				      
				       trendlineSeries.forEach(function(item) {
							 if(item.trendLineId === parseFloat(index))
						        item.hidden = true;
						});
						 trendLines.forEach(function(item) {
							 if(item.trendLineId === parseFloat(index))
						        item.hidden = true;
						});
				      trendLine=trendlineSeries.filter(obj => obj.trendLineId === parseFloat(index));

				      serieArray=serieArray.filter(obj => obj.trendLineId !== parseFloat(index));
 				      updateSeriesChart(chartConfigSettings);
 				      saveShowHideTrendline(trendLine[0].trendLineId, true); 
				    }
				    
				});
					$("#toggleChannel_"+cid).click(function() {
				 	var $button = $(this);
				    var $icon = $button.find('i');
				    var index= $button.attr('id').split("_")[1];
				    // Toggle the visibility icon
				    $icon.toggleClass('fa-eye').toggleClass('fa-eye-slash');
				
				    // Toggle the button text
				    if ($icon.hasClass('fa-eye')) {
				      $button.attr('title', 'Hide').attr('aria-label', 'Hide');
				      $button.addClass('green');
				      $button.removeClass('hide');
				      
				        trendlineSeries.forEach(function(item) {
							 if(item.channelId === parseFloat(index) )
						        item.hidden = false;
						});
					    channelLines.forEach(function(item) {
							 if(item.channelId === parseFloat(index) )
						        item.hidden = false;
						});  
					 channel=trendlineSeries.filter(obj => obj.channelId === parseFloat(index));
 					 serieArray.unshift(channel[0]);
 					 updateSeriesChart(chartConfigSettings);
 					 saveShowHideChannel(channel[0].channelId, false);

				    } else {
				      $button.attr('title', 'Show').attr('aria-label', 'Show');
				      $button.removeClass('green');
				      $button.addClass('hide');
				      
				        trendlineSeries.forEach(function(item) {
							 if(item.channelId === parseFloat(index) )
						        item.hidden = true;
						});
						 channelLines.forEach(function(item) {
							 if(item.channelId === parseFloat(index) )
						        item.hidden = true;
						});
				      channel=trendlineSeries.filter(obj => obj.channelId === parseFloat(index));

				      serieArray=serieArray.filter(obj => obj.channelId !== parseFloat(index));
 				      updateSeriesChart(chartConfigSettings);
 				      saveShowHideChannel(channel[0].channelId, true); 
				    }
				  
				});
			}
			
		var startCell = document.querySelectorAll('.start-date');
		
		startCell.forEach(function(cell) {
		  cell.addEventListener('click', function() {
		    var table = cell.closest('table');
		    var tableId = table.getAttribute('id'); 
		    selectedstartCellId = cell.getAttribute('id'); 
  			var cellContent = cell.textContent;
			cellContent=cellContent==""?new Date():parseDate(cellContent);
			$('#editDate_'+tableId.split("_")[1]).jqxDateTimeInput({value: cellContent});
		    $('#editDate_'+tableId.split("_")[1]).jqxDateTimeInput('open'); 
			
		  });
		});
	
		var crossCell = document.querySelectorAll('.cross-date');
		
		crossCell.forEach(function(cell) {
		  cell.addEventListener('click', function() {
		    var table = cell.closest('table');
		    var tableId = table.getAttribute('id'); 
		    selectedstartCellId = cell.getAttribute('id'); 

		    var cellContent = cell.textContent;
			
			$('#editDate_'+tableId.split("_")[1]).jqxDateTimeInput({value: parseDate(cellContent)});
		    $('#editDate_'+tableId.split("_")[1]).jqxDateTimeInput('open'); 
		  });
		});
		
}

function cancelTrendline(trendlineId){
	
	
	trendLines=removeByTrendLineId(trendLines, trendlineId);
	
	trendlineSeries=removeByTrendLineId(trendlineSeries, trendlineId);
	
	serieArray=removeByTrendLineId(serieArray, trendlineId);

	drawTrendLineTable(trendLines);
    updateSeriesChart(chartConfigSettings);
}

function cancelChannelline(channelLineId){
	
	
	
	trendlineSeries=removeByChannelId(trendlineSeries, channelLineId);
	serieArray=removeByChannelId(serieArray, channelLineId);
	channelLines=removeByChannelId(channelLines, channelLineId);
	
	drawTrendLineTable(trendLines);
    updateSeriesChart(chartConfigSettings);
}

function countDataPointsBetweenDates(startDate, endDate) {
    // Count data points between dates
    let count = 0;
    for (const item of chartResponse) {
        const itemDate = item.x; // Date is already in string format
        if (parseDate(itemDate) >= parseDate(startDate) && parseDate(itemDate) <= parseDate(endDate) ) {
            count++;
        }
    }
    return count;
}
function resetParameters(){
			$("#startDate").val("");
			$("#crossDate").val("");
			$("#startValue").val("");
			$("#crossValue").val("");
}

function updateSeriesChart(chartConfigSettings){

		 const values = addMarginToMinMax(chartConfigSettings.min, chartConfigSettings.max, 5);
	     var valueMin = values;
	     var valueMax = values; 	
	     var calculatedMinValue = Math.sign(chartConfigSettings.minvalue) == -1 ? -Math.abs(chartConfigSettings.minvalue) - valueMin : Math.abs(chartConfigSettings.minvalue) - valueMin;
	          graphService=typeof graphService!='undefined'?graphService:'';
	         calculatedMinValue = PositiveGraphs.includes(graphService)?( Math.sign(calculatedMinValue) == -1 ?0:calculatedMinValue): calculatedMinValue;
	     
	      if (serieArray.length==1) 
          disableOptions(false);
          else
          disableOptions(true);
          
          $('#legendfalse').addClass("active");
		  $('#legendtrue').removeClass("active");
					
				
				chart.updateOptions({
						series:serieArray,
						xaxis: {
						labels: {
							rotate: -70,
							rotateAlways: true,
							minHeight: 30,
							style: {
								fontSize: '12px',
							},
							formatter: function(value, timestamp, opts) {
								
								let a = [{day: 'numeric'}, {month: 'short'}, {year: '2-digit'}];
								let s =  (isTimestamp(value))?join(value, a, '-'):value;
								
					            return s;
					          }
						},
						type: 'datetime',
						tickAmount: 19,
						axisBorder: {
							show: true,
							color: '#ffffff',
							height: 3,
							width: '100%',
							offsetX: 0,
							offsetY: 0
						},
					},
					 fill: {
					   type:'solid',
			      	   opacity: [1],
					},
					stroke: {
						//colors: chartConfigSettings.chartType1 == "area" ? ["#ffffff"] : [chartConfigSettings.chartColor == '#44546a' ? '#2e75b6' : chartConfigSettings.chartColor],
						colors: (serieArray.length==2) ?["#FF0000","#FFFFFF",]  : (serieArray.length==3)? ["#FF0000","#FF0000","#FFFFFF",] : (serieArray.length==4)? ["#FF0000","#FF0000","#FF0000","#FFFFFF",] 
						 :(serieArray.length==5)? ["#FF0000","#FF0000","#FF0000","#FF0000","#FFFFFF",] 
						 :(serieArray.length==6)? ["#FF0000","#FF0000","#FF0000","#FF0000","#FF0000","#FFFFFF",] 
						 :(serieArray.length==7)? ["#FF0000","#FF0000","#FF0000","#FF0000","#FF0000","#FF0000","#FFFFFF",] 
						 :["#FFFFFF"],
						width: 2.25,
					},
					markers: {
						colors: chartConfigSettings.chartType1 == "area" ? "#ffffff" : [chartConfigSettings.chartColor == '#44546a' ? '#2e75b6' : chartConfigSettings.chartColor],
						strokeColors: chartConfigSettings.chartType1 == "area" ? "#ffffff" : [chartConfigSettings.chartColor == '#44546a' ? '#2e75b6' : chartConfigSettings.chartColor]
					},
					extra: {
						isDecimal: chartConfigSettings.isdecimal,
						yAxisFormat: chartConfigSettings.yaxisformat,
					},
					yaxis: {
						labels: {
							minWidth: 75, maxWidth: 75,
							style: {
								fontSize: checkActiveFontSize($("#fontOptions").find(".active")[0], '12px'),
							},
							 formatter: function(val, index) {
							 if (chartConfigSettings.yAxisFormat[1])
			  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]);
			  					else 
			  				  return  val.toFixed(chartConfigSettings.yAxisFormat[0]) + "%";
						      }
						},
						tickAmount: 6,
						min: calculatedMinValue,
						max: Math.sign(chartConfigSettings.maxvalue) == -1 ? -Math.abs(chartConfigSettings.maxvalue) + valueMax : Math.abs(chartConfigSettings.maxvalue) + valueMax,
						axisBorder: {
							width: 3,
							show: true,
							color: '#ffffff',
							offsetX: 0,
							offsetY: 0
						},
					},
					tooltip: {
						x: {
							show: false,
						},
						y: {
							formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
								if (chartConfigSettings.getFormatResult0[1])
									return value.toFixed(chartConfigSettings.getFormatResult0[0]);
								else
									return value.toFixed(chartConfigSettings.getFormatResult0[0]) + "%";
							},
							title: {
								formatter: (seriesName) => '',
							},
						},
					},
					legend: {
					   show:false,
			    	  },
				});
				

}

function removeByTrendLineId(dataArray, trendLineIdToRemove) {
    return dataArray.filter(obj => obj.trendLineId !== trendLineIdToRemove);
}
function removeByChannelId(dataArray, channelIdToRemove) {
    return dataArray.filter(obj => obj.channelId !== channelIdToRemove);
}
function saveShowHideChannel(channelId,isVisible){
	        var channelLine=channelLines.filter(obj => obj.channelId === channelId)[0];
			
			graphHistory = {
				 "dbId":channelLine.dbid,
				 "isVisibleChannel":isVisible,
			};
          	$.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "/graph/save-visible-channel",
				data: JSON.stringify(graphHistory),
				dataType: 'json',
				timeout: 600000,
				success: function(response) {
					
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
			});
}
function saveShowHideTrendline(trendLineId,isVisible){
	        var trendLine=trendLines.filter(obj => obj.trendLineId === trendLineId)[0];
			
			graphHistory = {
				 "dbId":trendLine.dbid,
				 "isVisibleTrendline":isVisible,
			};
          	$.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "/graph/save-visible-trendline",
				data: JSON.stringify(graphHistory),
				dataType: 'json',
				timeout: 600000,
				success: function(response) {
					
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
			});
}
function saveTrendLinesHistory(trendLineId){
		var checkedItemValues=[];
		for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					checkedItemValues.push(checkedItemid[i]);
			}
			graphHistory = {
				 "dbId":(typeof (JSON.stringify(trendLines.filter(obj => obj.trendLineId === trendLineId)[0].dbid))!='undefined')?JSON.stringify(trendLines.filter(obj => obj.trendLineId === trendLineId)[0].dbid):null,
				 "graphId": checkedItemValues[0],
				 "trendlines": JSON.stringify(trendLines.filter(obj => obj.trendLineId === trendLineId)[0]),
				 "chartOptions":JSON.stringify({chartType1:$("#chartTypes").find(".active")[0].id,
				 		         chartColor:chartType1=='line'?"#ffffff":$("#chartColor").find(".active")[0].id,
				 		         chartTransparency:$("#chartColorTransparency").find(".active")[0].id,
				 		         markerSize: $("#chartMarker").find(".active")[0].id,
				 		         fontsize: $("#fontOptions").find(".active")[0].id,
				 		         showGrid: $("#gridOptions").find(".active")[0].id,
				 		         showLegend: $("#gridLegend").find(".active")[0].id
				 				})
			};
            const graphExist = results.some(item => item.graphId === checkedItemValues[0]);
           if(graphExist==true)
			savetrendlinedata(graphHistory);
			else if (results.length<5)
				savetrendlinedata(graphHistory);
		   else {
			   $('#alertLimitation-modal').modal('show');
			   $("#alertTextLimitation").empty();

			   $("#alertTextLimitation").append("<p> You cannot save more than 5 graphs </p>");

		   }
}
function saveChannelHistory(trendLineId){
		var checkedItemValues=[];
		for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					checkedItemValues.push(checkedItemid[i]);
			}
			graphHistory = {
				 "dbId":(typeof (JSON.stringify(trendLines.filter(obj => obj.trendLineId === trendLineId)[0].dbid))!='undefined')?JSON.stringify(trendLines.filter(obj => obj.trendLineId === trendLineId)[0].dbid):null,
				 "graphId": checkedItemValues[0],
				 "trendlines": JSON.stringify(trendLines.filter(obj => obj.trendLineId === trendLineId)[0]),
				 "channel": JSON.stringify(channelLines.filter(obj => obj.trendLineId === trendLineId)[0]),
				 "chartOptions":JSON.stringify({chartType1:$("#chartTypes").find(".active")[0].id,
				 		         chartColor:chartType1=='line'?"#ffffff":$("#chartColor").find(".active")[0].id,
				 		         chartTransparency:$("#chartColorTransparency").find(".active")[0].id,
				 		         markerSize: $("#chartMarker").find(".active")[0].id,
				 		         fontsize: $("#fontOptions").find(".active")[0].id,
				 		         showGrid: $("#gridOptions").find(".active")[0].id,
				 		         showLegend: $("#gridLegend").find(".active")[0].id
				 				})
			};
            const graphExist = results.some(item => item.graphId === checkedItemValues[0]);
           if(graphExist==true)
			savetrendlinedata(graphHistory);
			else if (results.length<1)
				savetrendlinedata(graphHistory);
		   else {
			   $('#alertLimitation-modal').modal('show');
			   $("#alertTextLimitation").empty();

			   $("#alertTextLimitation").append("<p> You cannot save more than 1 Channel </p>");

		   }
}
function getTrendLinesHistory(){
	$.ajax({
		contentType: "application/json",
		url: "/graph/find-graph-history-by-userid",
		dataType: 'json',
		async: true,
		cache: false,
		timeout: 600000,
		success: function(data) {
			
		const groupedData = data.reduce((acc, obj) => {
		    if (!acc[obj.graphId]) {
		        acc[obj.graphId] = {
		            trendlines: [],
		            channelLines: [],
		            chartOptions: JSON.parse(obj.chartOptions) // Parse chartOptions here
		        };
		    }
		    
		    const trendline = JSON.parse(obj.trendlines);
		    const channelline = JSON.parse(obj.channel);
		    
		    if(obj.isVisibleTrendline==null)
		    	trendlineHidden = false;
		    else 
		    	trendlineHidden = obj.isVisibleTrendline;
		    	
		    (trendline!=null)? trendline.hidden = trendlineHidden :null;
		    trendline.dbid = obj.id;
		    
		    (channelline!=null)? channelline.dbid = obj.id:null;
		    
		    if(obj.isVisibleChannel==null)
		    	channelHidden = false;
		    else 
		    	channelHidden = obj.isVisibleChannel;
		    	
		    (channelline!=null)? channelline.hidden = channelHidden :null;
		    acc[obj.graphId].trendlines.push(trendline);
		    (channelline!=null)?acc[obj.graphId].channelLines.push(channelline):null;
		    return acc;
		}, {});
		
		results = Object.keys(groupedData).map(graphId => {
		    return {
		        graphId: graphId,
		        trendlines: groupedData[graphId].trendlines,
		        channelLines: groupedData[graphId].channelLines,
		        chartOptions: groupedData[graphId].chartOptions // Assuming chartOptions are same for all trendlines in a graphId
		    };
		});
			if(typeof(results[0])!='undefined')
				checkedItemId = [results[0].graphId];
				
			for (j = 0; j < checkedItemId.length; j++) {
				$(checkedItemId[j]).jqxCheckBox({ checked: true });
			}
			checkedItem = checkedItemId.length;
			$("#collapseFilter").removeClass('show');
			$('#grid-content').css('display', 'block');
			
			var condition ="";
		
			results.forEach((result, index) => {
			    // Get the graphId, subGroupId, and GroupId
			    const graphId = result.graphId;
			    const subGroupId = itemValue[graphId].subGroupId;
			    const GroupId = itemValue[graphId].GroupId;
			
			    // Push the group and subgroup ids to the groupIds array
			    result.groupSubgroupId = [GroupId, subGroupId];
			    
			    condition+=" ( subgroup_id="+subGroupId+" and group_id="+GroupId+" ) ";
				if(index+1<results.length)
					condition+=" or ";
				
			});
	
		$.ajax({
			    type: "GET",
  				  url: `/graph/configurations?condition=${encodeURIComponent(condition)}`,
			   
			    dataType: "json",
			    success: function(response) {
				var graphHistory="";
					
			        results.forEach((item1) => {
				    const matchingItem = response.find((item2) => item1.groupSubgroupId[0] === item2.groupId && item1.groupSubgroupId[1] === item2.subgroupId);
				
				    if (matchingItem) {
				        item1.displayDescription = matchingItem.displayDescription;
				    }
				    graphHistory +="<div class='justify-content-between d-flex bb'><a href='#' class='p-2' onclick=\"getGraphTrendLine('"+item1.graphId+"')\"><h8 class=' truncate-text '>"+item1.displayDescription+"</h8></a><button class='btn btn-light-secondary mr-1 mb-1 small' type='button' onclick=\"deleteGraphHistory('"+item1.graphId+"')\"><img src='/img/icon/delete-red.svg' width='14' height='14' ></button></div>"
				
				});
				
				$("#graphs-history").append(graphHistory);
			    },
			    error: function(xhr, status, error) {
			        // Handle error
			        console.error("Error:", error);
			    }
			});
			$('#show').click();
			
		},
		error: function(e) {

			console.log("ERROR : ", e);

		}
	});
}

function transformTrendline(trendline) {
    const dataPoints = [];

    const { x1, y1, x2, y2, x3, y3 } = trendline;

    const date1 = new Date(x1);
    const date2 = new Date(x2);
    const date3 = new Date(x3);

    dataPoints.push({ x: formatDate(date1), y: parseFloat(y1) });
    dataPoints.push({ x: formatDate(date2), y: parseFloat(y2) });
    dataPoints.push({ x: formatDate(date3), y: parseFloat(y3) });

    return dataPoints;
}
function transformChannelLine(channelLine) {
    const dataPoints = [];

    const { xc, yc, x3, y3 } = channelLine;

    const date1 = new Date(xc);
    const date3 = new Date(x3);

    dataPoints.push({ x: formatDate(date1), y: parseFloat(yc) });
    dataPoints.push({ x: formatDate(date3), y: parseFloat(y3) });

    return dataPoints;
}
function deleteTrendLinesHistory(trendlinedb,trendline){
		$('#alertDeleteDataByDate-modal').modal('show');
		$("#alertTextDeleteDataByDate").empty();
		$("#deleteRecord").empty();
		$("#deleteRecord").append('<button type="button" class="btn btn-primary" onclick="deleteTrendLines('+trendlinedb+','+trendline+')">Delete Record</button>');
									        
		$("#alertTextDeleteDataByDate").append("<p> Are you sure you want to Delete this trendline record ?</p>");
}
function deleteChannellineHistory(trendlinedb,trendline){
		$('#alertDeleteDataByDate-modal').modal('show');
		$("#alertTextDeleteDataByDate").empty();
		$("#deleteRecord").empty();
		$("#deleteRecord").append('<button type="button" class="btn btn-primary" onclick="deleteChannelLine('+trendlinedb+','+trendline+')">Delete Record</button>');
									        
		$("#alertTextDeleteDataByDate").append("<p> Are you sure you want to Delete this Channel record ?</p>");
}
function deleteTrendLines(trendlineDbId,trendline){
		
                    
			     $.ajax({
			             type : "DELETE",
			             url : '/graph/deletetrendline/' + trendlineDbId,
			             success: function (result) {   
							$("#graphs-history").empty(); 
							getTrendLinesHistory();
					        $('#alertDeleteDataByDate-modal').modal('hide');
		
		 					$( "#successDelete" ).empty();
				 		    $( "#successDelete" ).append( "<p> Trendline has been deleted</p>" );
						
							$('#alertInfoDeleteDataByDate-modal').modal('show');  
			             },
			             error: function (e) {
			                 console.log(e);
			             }
			         });

}

function deleteChannelLine(trendlineDbId,trendLineId){
		
                channelLines=[];
                var checkedItemValues=[];
		for (i = 0; i < checkedItemid.length; i++) {
				if (checkedItemid[i] != null)
					checkedItemValues.push(checkedItemid[i]);
			}
			graphHistory = {
				 "dbId":(typeof (JSON.stringify(trendLines.filter(obj => obj.trendLineId === trendLineId)[0].dbid))!='undefined')?JSON.stringify(trendLines.filter(obj => obj.trendLineId === trendLineId)[0].dbid):null,
				 "graphId": checkedItemValues[0],
				 "trendlines": JSON.stringify(trendLines.filter(obj => obj.trendLineId === trendLineId)[0]),
				 "channel": JSON.stringify(channelLines.filter(obj => obj.trendLineId === trendLineId)[0]),
				 "chartOptions":JSON.stringify({chartType1:$("#chartTypes").find(".active")[0].id,
				 		         chartColor:chartType1=='line'?"#ffffff":$("#chartColor").find(".active")[0].id,
				 		         chartTransparency:$("#chartColorTransparency").find(".active")[0].id,
				 		         markerSize: $("#chartMarker").find(".active")[0].id,
				 		         fontsize: $("#fontOptions").find(".active")[0].id,
				 		         showGrid: $("#gridOptions").find(".active")[0].id,
				 		         showLegend: $("#gridLegend").find(".active")[0].id
				 				})
			};
           	$.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "/graph/save-history",
				data: JSON.stringify(graphHistory),
				dataType: 'json',
				timeout: 600000,
				success: function(response) {
					$("#graphs-history").empty(); 
					$('#alertDeleteDataByDate-modal').modal('hide');

 					$( "#successDelete" ).empty();
		 		    $( "#successDelete" ).append( "<p> Channel has been deleted</p>" );
				
					$('#alertInfoDeleteDataByDate-modal').modal('show');  
							
					getTrendLinesHistory();
				
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
			});
           
			    

}
function getGraphTrendLine(graphId) {
    $("#Clearfilter").click();
    checkedItemid = [];
    checkedItemid = [graphId];
    for (var j = 0; j < checkedItemid.length; j++) {
        $(checkedItemid[j]).jqxCheckBox({ checked: true });
    }
    // Call the callback function after completing the necessary operations
   $('#show').click();
}
function deleteGraphHistory(graphId){
		$('#alertDeleteDataByDate-modal').modal('show');
		$("#alertTextDeleteDataByDate").empty();
		$("#deleteRecord").empty();
		$("#deleteRecord").append("<button type='button' class='btn btn-primary' onclick=\"confirmdeleteGraphHistory('"+graphId+"')\">Delete Record</button>");
									        
		$("#alertTextDeleteDataByDate").append("<p> Are you sure you want to Delete this graph history record ?</p>");
}
function confirmdeleteGraphHistory(graphId){
		
			     $.ajax({
			             type : "DELETE",
			             url : '/graph/delete-graph-history/' +encodeURIComponent(graphId),
			             success: function (result) {  
							$("#graphs-history").empty(); 
							$("#trendline-grid").empty(); 
							getTrendLinesHistory();
					        $('#alertDeleteDataByDate-modal').modal('hide');
		
		 					$( "#successDelete" ).empty();
				 		    $( "#successDelete" ).append( "<p> Trendline has been deleted</p>" );
						
							$('#alertInfoDeleteDataByDate-modal').modal('show');  
			             },
			             error: function (e) {
			                 console.log(e);
			             }
			         });

}
function updateTrendLine(trendlineIdToUpdate){
	 	 var result = findThirdPoint(x1, y1, x2, y2, x3);
			 count=countDataPointsBetweenDates(x1, x2);
			 const slope=(y2-y1)/count;
			
			 for (var i = 0; i < trendlineSeries.length; i++) {
				   if (trendlineSeries[i].trendLineId === parseFloat(trendlineIdToUpdate)) {
					        trendlineSeries[i].data = result;
					  }
				  }
				  
		      serieArray = getSerriesData();
	          disableOptions(true);
	          
	          var json={
				  trendLineId:trendlineIdToUpdate,
				  x1:x1, 
				  y1:y1, 
				  x2:x2, 
				  y2:y2,
				  x3:x3,
				  y3:(result[2].y).toFixed(2),
				  slope:slope.toFixed(3)
			  }
			  	 for (var i = 0; i < trendLines.length; i++) {
				   if (trendLines[i].trendLineId === parseFloat(trendlineIdToUpdate)) {
					        trendLines[i].x1 = json.x1;
					        trendLines[i].y1 = json.y1;
					        trendLines[i].x2 = json.x2;
					        trendLines[i].y2 = json.y2;
					        trendLines[i].x3 = json.x3;
					        trendLines[i].y3 = json.y3;
					        trendLines[i].slope = json.slope;
					        
					           if((typeof(trendLines[i].dbid)!='undefined'))
								  saveTrendLinesHistory(trendLines[i].trendLineId);
			 
					        break; 
					  }
				  }
			
	          drawTrendLineTable(trendLines);
			  resetParameters();
			  updateSeriesChart(chartConfigSettings);
			
}
function updateChannelLine(channelidToUpdate){
	    var result = findChannelPoint(channelidToUpdate.x1, channelidToUpdate.y1, channelidToUpdate.x2, channelidToUpdate.y2, channelidToUpdate.x3 , channelidToUpdate.yc, channelidToUpdate.xc);
		
			 serieArray=[];
	         let channelId;
	         let channelIdDb;
	         
			  var json={
				  trendLineId:channelidToUpdate.trendLineId,
				  xc:channelidToUpdate.xc, 
				  yc:channelidToUpdate.yc, 
				  x3:channelidToUpdate.x3,
				  y3:(result[1].y).toFixed(2)
			  }
			  	 for (var i = 0; i < channelLines.length; i++) {
				   if (channelLines[i].trendLineId === parseFloat(channelidToUpdate.trendLineId)) {
					        channelLines[i].xc = json.xc;
					        channelLines[i].yc = json.yc;
					        channelLines[i].x3 = json.x3;
					        channelLines[i].y3 = json.y3;
					        channelId=channelLines[i].channelId;
					        channelIdDb=channelLines[i].dbid;
					        
					           if((typeof(channelLines[i].dbid)!='undefined'))
								  saveChannelHistory(channelLines[i].trendLineId);
			 
					        break; 
					  }
				  }
			 for (var i = 0; i < trendlineSeries.length; i++) {
				   if (trendlineSeries[i].channelId === parseFloat(channelId)) {
					        trendlineSeries[i].data = result;
					  }
				  }
				  
		      serieArray = getSerriesData();
		       
	          disableOptions(true);
	     
			
	          drawTrendLineTable(trendLines);
			  resetParameters();
			  if(typeof channelIdDb =='undefined')
				  updateSeriesChart(chartConfigSettings);
			
}
function addChannelTrendLine(channelTrendline){
	     
	 	 var result = findChannelPoint(channelTrendline.x1, channelTrendline.y1, channelTrendline.x2, channelTrendline.y2, channelTrendline.x3 , channelTrendline.yc, channelTrendline.xc);
			
			 channelId=channelId+1;
	        
	         trendlineSeries.push({
				channelId: channelId,
			    name: 'Channel',
			    data: result,
			    type:'line',
			    hidden: false
			  });
			  
			  serieArray = getSerriesData();
			  
	          disableOptions(true);
	         
	          var json={
				  channelId:channelId,
				  trendLineId:parseFloat(channelTrendline.trendLineId),
				  xc:channelTrendline.xc, 
				  yc:channelTrendline.yc, 
				  x3:channelTrendline.x3,
				  y3:(result[1].y).toFixed(2)
			  }
			  channelLines.push(json);
			
	          drawTrendLineTable(trendLines);
			  resetParameters();
			  updateSeriesChart(chartConfigSettings);
			
}
function drawLine(){
	 var result = findThirdPoint(x1, y1, x2, y2, x3);
			 count=countDataPointsBetweenDates(x1, x2);
			 const slope=(y2-y1)/count;
			 serieArray=[];
	
	          trendLineId=trendLineId+1;
	       
	          trendlineSeries.push({
				channelId: trendLineId,
			    name: 'Trendline',
			    data: result,
			    type:'line',
			    hidden: false
			  });
			  
			  serieArray = getSerriesData();
		   
	          disableOptions(true);
	          
	          json={
				  trendLineId:trendLineId,
				  x1:x1, 
				  y1:y1, 
				  x2:x2, 
				  y2:y2,
				  x3:x3,
				  y3:(result[2].y).toFixed(2),
				  slope:slope.toFixed(3)
			  }
			  trendLines.push(json);
	          drawTrendLineTable(trendLines);
			  resetParameters();
			  updateSeriesChart(chartConfigSettings);
			 
}
function savetrendlinedata(graphHistory) {
				$.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "/graph/save-history",
				data: JSON.stringify(graphHistory),
				dataType: 'json',
				timeout: 600000,
				success: function(response) {
					$("#graphs-history").empty(); 
					getTrendLinesHistory();
				
				},
				error: function(e) {

					console.log("ERROR : ", e);

				}
			});
}
function formatTrendlineDate(date) {
    // Get the day, month, and year components of the date
    var day = date.getDate().toString().padStart(2, '0'); // Ensure two digits for day
    var monthIndex = date.getMonth();
    var year = date.getFullYear() % 100; // Extract last two digits of the year

    // Define arrays for month names and suffixes
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Construct the formatted date string
    var formattedDate = day + '-' + months[monthIndex] + '-' + year;

    return formattedDate;
}
function convertToRoman(num) {
    // Define arrays of Roman numeral letters and their corresponding values
    var romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var numeralValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    var result = ''; // Initialize an empty string to store the Roman numeral

    // Iterate through the numeralValues array
    for (var i = 0; i < numeralValues.length; i++) {
        // Repeat the current Roman numeral letter while the number is greater than or equal to its corresponding value
        while (num >= numeralValues[i]) {
            result += romanNumerals[i]; // Add the Roman numeral letter to the result
            num -= numeralValues[i]; // Subtract the corresponding value from the number
        }
    }

    return result;
}
function getSerriesData(){
	 serieArray=[];
	 serieArray.push({
             name: chartConfigSettings.response[0].config.displayDescription==null?itemValue[chartConfigSettings.checkedItemValues[0]].title:chartConfigSettings.response[0].config.displayDescription,
			 data: chartResponse,
             type: checkActiveChartType($("#chartTypes").find(".active")[0], chartType1, "d")
          });
       
	 for (var i = 0; i < trendlineSeries.length; i++) {
			 if(trendlineSeries[i].hidden!=true)
			 	serieArray.unshift(trendlineSeries[i]);	  
	 }
	 return serieArray;
   
}