const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
let draws=0,updates=[],instances=0;
const ctx={console,performance,window:{},requestAnimationFrame(){},
 document:{querySelector(){return {};},getElementById(){return {value:'date'};}},
 ApexCharts:class {constructor(el,config){instances++;this.w={config};} render(){draws++;return Promise.resolve();} updateOptions(o,...flags){updates.push({o,flags});Object.assign(this.w.config,o);return Promise.resolve();} updateSeries(){return Promise.resolve();}}};
vm.createContext(ctx);vm.runInContext(fs.readFileSync('src/main/resources/static/js/graph/chartManager.js','utf8')+'\nthis.Manager=ChartManager;',ctx);
(async()=>{
 const m=new ctx.Manager('chart1');
 m.state.series=[{name:'A',type:'line',data:[{x:'28-Mar-15',y:2},{x:'29-Mar-15',y:3}]}];
 m.state.isCentred=[];m.generateDynamicYAnnotations=()=>({});m.generateYAxisConfig=i=>({labels:{formatter:v=>v+'%'},opposite:!!i});m._bindUIEvents=()=>{};
 await m.render();assert.equal(draws,1);assert.equal(updates.length,0);assert.equal(instances,1);
 assert.equal(m.chart.w.config.series[0].data[0].x,'28-Mar-15');
 m.state.series=[...m.state.series,{name:'B',type:'line',data:[{x:'29-Mar-15',y:8}]}];
 await m.render();assert.equal(instances,1);assert.equal(updates.length,1);
 m.state.useDualYAxis=true;await m.applyStyle();assert.deepEqual(Object.keys(updates.at(-1).o),['yaxis']);assert.equal(updates.at(-1).o.yaxis.length,2);
 assert.deepEqual(updates.at(-1).flags,[false,false,false]);
 m.state.useDualYAxis=false;await m.applyStyle();assert.equal(updates.at(-1).o.yaxis.length,1);
 m.state.fontSize='16px';await m.applyStyle();assert.equal(updates.at(-1).o.xaxis.labels.style.fontSize,'16px');
 assert.equal(ctx.window.bourseChartManagerPerformance.chart1.version,'3.6.1');
 assert.equal(ctx.window.bourseChartManagerPerformance.chart1.points,3);
 const candle=new ctx.Manager('chart4');
 candle.state.series=[{name:'OHLC',type:'candlestick',data:[{x:'28-Mar-15 12:00',y:[1,4,0,3]}]}];
 candle.state.isCentred=[];candle.generateDynamicYAnnotations=()=>({});candle.generateYAxisConfig=m.generateYAxisConfig;candle._bindUIEvents=()=>{};
 await candle.render();assert.equal(candle.chart.w.config.series[0].data[0].y.length,4);
 assert.equal(candle.chart.w.config.series[0].data[0].x,'28-Mar-15 12:00');
 assert.equal(candle.chart.w.config.legend.show,false);
 console.log('PASS: one initial render, instance reuse, scale-only updates, weekend dates, fonts and per-chart metrics.');
})().catch(e=>{console.error(e);process.exitCode=1;});
