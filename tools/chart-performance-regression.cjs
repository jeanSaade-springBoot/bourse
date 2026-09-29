/* Run from the project root: node tools/chart-performance-regression.cjs */
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const source = fs.readFileSync('src/main/resources/static/js/chart.js', 'utf8');
function fn(name) {
    const start = source.indexOf('function ' + name + '(');
    assert(start >= 0, name + ' exists');
    const next = source.indexOf('\nfunction ', start + 1);
    return source.slice(start, next < 0 ? source.length : next);
}
const context = vm.createContext({console, performance, requestAnimationFrame() {}, window: {}});
vm.runInContext(source.slice(0, source.indexOf('/* End Bourse chart performance helpers. */')), context);
for (const name of ['getChartDailyOption', 'getChartAppearanceOptions', 'addMarginToMinMax', 'updateChartSelectedItemMissingDates']) {
    vm.runInContext(fn(name), context);
}
vm.runInContext(`
var assert = function(condition, message) { if (!condition) throw new Error(message); };
var calls = [], fontsize = '16px', showLegend = 'legendtrue', chartColor = '#F0AB2E',
    chartTransparency = '1', chartType1 = 'area', graphService = '', isOneScale = false;
function mockChart() {
    return {w: {config: {series: [], xaxis: {}, markers: {size: 1}}},
        updateOptions: function(options, redraw, animate, synced) {
            calls.push({options:options, flags:[redraw,animate,synced]});
            this.w.config = bourseMergeChartOptions(this.w.config, options);
            return Promise.resolve();
        },
        updateSeries: function(series) { this.w.config.series = series; return Promise.resolve(); }
    };
}
var chart = mockChart();
var input = [
    {id:1, x:'27-Mar-15', y:'2.554'},
    {id:2, x:'28-Mar-15', y:null},
    {id:3, x:'29-Mar-15', y:null},
    {id:4, x:'30-Mar-15', y:'0'},
    {id:5, x:'31-Mar-15', y:null},
    {id:6, x:'01-Apr-15', y:'-0.125'}
];
var inputSnapshot = JSON.stringify(input);
var settings = {
    checkedItem:1, min:0, max:5, minvalue:0, maxvalue:5, fontSize:'16px',
    chartType1:'area', chartColor:chartColor, yAxisFormat:[2,false], getFormatResult0:[3,false],
    response:[{config:{displayDescription:'USA 30Y LONG YIELD'}, graphResponseDTOLst: input}]
};
var base = bourseMergeChartOptions(getChartDailyOption('Yield', true, '16px', 1), getChartAppearanceOptions());
bourseInstallYieldTradingAxis(chart);
updateChartSelectedItemMissingDates(settings, base);
assert(calls.length===1, 'setup + appearance + data should draw once');
var options = calls[0].options;
assert(options.series[0].data.length===4, 'weekends compressed');
assert(options.series[0].data[1].x===1 && options.series[0].data[1].y===0, 'zero retained and Monday follows Friday');
assert(options.series[0].data[2].y===null, 'weekday null preserved');
assert(options.series[0].data[3].y===-0.125, 'negative yield preserved');
assert(JSON.stringify(input)===inputSnapshot, 'API response is not mutated');
assert(options.markers.size===1 && options.markers.shape==='square', 'client markers retained');
assert(options.fill.gradient.gradientToColors==='#F0AB2E', 'custom Apex gradient uses scalar color');
assert(options.xaxis.labels.style.fontSize==='16px', 'configured X font retained');
assert(options.yaxis.labels.style.fontSize==='16px', 'configured Y font retained');
assert(options.legend.fontSize==='16px' && options.legend.show===true, 'legend retained');
assert(options.yaxis.labels.formatter(2.554)==='2.55%', 'Y format preserved');
assert(options.tooltip.y.formatter(2.554,{})==='2.554%', 'tooltip format preserved');
assert(options.xaxis.labels.formatter(1)==='30-Mar-15', 'axis uses original dates');
assert(options.tooltip.x.formatter(3)==='01-Apr-15', 'tooltip uses original dates');
assert(calls[0].flags.join(',')==='false,false,false', 'animation and synchronized redraw disabled');
chart.updateOptions({xaxis:{type:'category',labels:{style:{fontSize:'18px'}}}, markers:{size:0}});
assert(chart.w.config.xaxis.type==='numeric', 'formatting cannot restore weekend gaps');
assert(chart.w.config.xaxis.labels.style.fontSize==='18px', 'font control still works');
assert(chart.w.config.markers.size===0, 'marker control still works');
chart.w.config.xaxis.min=1;
chart.w.config.xaxis.max=2;
chart.updateSeries([{type:'line'}]);
assert(chart.w.config.xaxis.min===1 && chart.w.config.xaxis.max===2, 'type changes preserve zoom');
assert(chart.w.config.series[0].data.length===4, 'type-only updates retain data');
assert(chart.w.config.series[0].type==='line', 'chart type control still works');
assert(chart.w.config.xaxis.labels.formatter(1)==='30-Mar-15', 'type update retains dates');
chart.updateOptions({series:[{type:'line',data:[{x:'2026-09-25',y:'1'},{x:'2026-09-28',y:'2'}]}]});
assert(chart.w.config.xaxis.labels.formatter(1)==='28-Sep-26', 'new range replaces date mapping');
chart.updateOptions({series:[{data:[{x:'invalid date',y:'1'}]}]});
assert(chart.w.config.xaxis.type==='datetime', 'unsupported data restores original axis');
assert(chart.w.config.series[0].data[0].x==='invalid date', 'unsupported data is not silently discarded');
var crypto = mockChart();
bourseApplyChartOptions(crypto,{series:[{data:input}],xaxis:{type:'datetime'}},base);
assert(crypto.w.config.series[0].data.length===6, 'other charts keep weekend observations');
assert(crypto.w.config.xaxis.type==='datetime', 'other charts keep calendar axes');
var first={series:[{data:[1,2]}],labels:{formatter:function(v){return v+'%';},style:{fontSize:'12px'}}};
var merged=bourseMergeChartOptions(first,{series:[{data:[3]}],labels:{style:{fontSize:'14px'}}});
assert(merged.series.length===1 && merged.series[0].data.length===1, 'series arrays replace instead of concatenate');
assert(merged.labels.formatter(2)==='2%', 'formatter functions survive merging');
assert(first.labels.style.fontSize==='12px', 'merging does not mutate source options');
`, context);
console.log('PASS: batching, formatting, scalar gradient, weekday mapping, null/zero/negative values, controls, reloads and non-Yield calendars.');
const controls = fs.readFileSync('src/main/resources/static/js/chartOptions.js','utf8').replace(/\r\n/g,'\n');
for (const name of ['updateGraphConfiguration','updateGraphConfigurationVolumes']) {
    const start = controls.indexOf('function '+name+'(');
    const end = controls.indexOf('\nfunction ',start+1);
    vm.runInContext(controls.slice(start,end),context);
}
vm.runInContext(`
var graphName="wmqyVolume", minvalue=0, maxvalue=5, isdecimal=false, yaxisformat=2, nbrOfDigits=2, notDecimal=false;
function activateChartTrasnparency() {}
function activateChartMarker() {}
function activateChartLegend() {}
function activateChartColor() {}
function getMarginLenghtVolume() { return 1; }
function $(selector) { return {find:function() {return [{id:'16px'}];}}; }
for (var control of [updateGraphConfiguration,updateGraphConfigurationVolumes]) {
    for (var type of ['line','area']) {
        chart=mockChart();
        chart.w.config.series=[{name:'A',type:'line',data:input},{name:'B',type:'column',data:input}];
        calls=[];
        control(type,'#F0AB2E','0.5',1,'true','legendtrue');
        assert(calls.length===1,'appearance controls should draw once');
        assert(chart.w.config.series[0].type===type,'appearance controls update type');
        assert(chart.w.config.series[0].data===input,'appearance controls retain all observations');
        assert(chart.w.config.series[1].type==='column','appearance controls retain other series');
        assert(chart.w.config.markers.size===1,'appearance controls preserve markers');
    }
}
`,context);
console.log('PASS: line/area appearance controls use one update and retain data and companion series.');
vm.runInContext(fn('updateChartSelectedItem'),context);
vm.runInContext(`
function getStrokeWidth() {return 2.25;}
var comparison=Object.assign({},settings,{
    checkedItem:2, chartType1:'line', chartType2:'column', min1:0,max1:5,min2:0,max2:10,
    yAxisFormat1:[1,true],getFormatResult1:[1,true],
    response:[settings.response[0],{config:{displayDescription:'Second series'},graphResponseDTOLst:[{x:'30-Mar-15',y:3}]}]
});
for (var helper of [updateChartSelectedItem,updateChartSelectedItemMissingDates]) {
    for (var oneScale of [false,true]) {
        isOneScale=oneScale;
        chart=mockChart();calls=[];
        helper(comparison,base);
        assert(calls.length===1,'comparison draws once');
        assert(chart.w.config.series.length===2,'both comparison series retained');
        assert(chart.w.config.series[0].data===input,'first comparison date mapping retained');
        assert(chart.w.config.series[1].data[0].x==='30-Mar-15','sparse companion dates retained');
        assert(chart.w.config.series[1].type==='column','mixed series type retained');
        assert(chart.w.config.yaxis.length===(oneScale?1:2),'one/two Y-axis setting retained');
    }
}
`,context);
console.log('PASS: mixed comparisons retain both series, sparse dates, and one/two Y-axis settings.');
vm.runInContext(`
chart=mockChart(); calls=[];
bourseInstallYieldTradingAxis(chart);
chart.updateOptions({chart:{height:525},series:[{data:input}],xaxis:{labels:{style:{fontSize:'12px'}}}});
var labelHeight=chart.w.config.xaxis.labels.minHeight;
assert(labelHeight===chart.w.config.xaxis.labels.maxHeight && labelHeight>=80,'date label space is fixed');
chart.updateOptions({series:[{data:input.slice(2)}],xaxis:{labels:{minHeight:30,maxHeight:120}},legend:{floating:true,offsetY:-20}});
assert(chart.w.config.chart.height===525,'navigation preserves outer chart height');
assert(chart.w.config.xaxis.labels.minHeight===labelHeight,'navigation preserves date label space');
assert(chart.w.config.legend.floating===false && chart.w.config.legend.offsetY===0,'legend stays below axes');
chart.updateOptions({xaxis:{labels:{style:{fontSize:'18px'}}}});
assert(chart.w.config.xaxis.labels.minHeight>labelHeight,'larger configured fonts receive enough space');
assert(chart.w.config.xaxis.labels.minHeight===chart.w.config.xaxis.labels.maxHeight,'larger font space remains stable');
assert(chart.w.config.chart.height===525,'font changes preserve outer height');
`,context);
console.log('PASS: navigation and font updates retain explicit date-label space, chart height and bottom legend.');
