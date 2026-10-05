const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const src=fs.readFileSync('src/main/resources/static/js/graph/trendlineManager.js','utf8');
const ctx={console,window:{},setTimeout,clearTimeout,performance};vm.createContext(ctx);vm.runInContext(src.slice(0,src.indexOf('const graphType=')),ctx);
const delay=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
 let calls=[],active=0,max=0,fail=false;
 const chart={el:{id:'chart-chart2'},render:async()=>{active++;max=Math.max(max,active);await delay(30);active--;},destroy(){},updateOptions:async(o,...flags)=>{active++;max=Math.max(max,active);calls.push({o,flags});await delay(40);active--;if(fail){fail=false;throw Error('expected');}}};
 ctx.chart=chart;
 vm.runInContext(`bourseInstallLegacyRenderQueue(chart);this.formatter=v=>v;`,ctx);
 const initial=chart.render();
 // Build inputs inside the same realm as the page's helpers.
 const ps=vm.runInContext(`[
 chart.updateOptions({xaxis:{labels:{formatter}},series:[{data:[{x:'A',y:1}]}]}),
 chart.updateOptions({markers:{size:[1,0]}}),
 chart.updateOptions({fill:{opacity:0.75}}),
 chart.updateOptions({series:[{data:[{x:'A',y:2},{x:'B',y:null}]}]})]`,ctx);
 await Promise.all([initial,...ps]);assert.equal(calls.length,1);assert.equal(max,1);
 assert.equal(calls[0].o.series[0].data[0].y,2);assert.equal(calls[0].o.series[0].data[1].y,null);
 assert.equal(calls[0].o.xaxis.labels.formatter,ctx.formatter);assert.equal(calls[0].flags[1],false);
 const first=vm.runInContext('chart.updateOptions({grid:{show:true}})',ctx);await delay(25);
 const next=vm.runInContext('[chart.updateOptions({markers:{size:[3]}}),chart.updateOptions({markers:{size:[1]}})]',ctx);
 await Promise.all([first,...next]);assert.equal(calls.length,3);assert.equal(max,1);assert.equal(calls[2].o.markers.size[0],1);
 fail=true;await assert.rejects(chart.updateOptions({}),/expected/);await chart.updateOptions({});
 const before=calls.length;const pending=chart.updateOptions({});chart.destroy();await pending;await delay(25);assert.equal(calls.length,before);
 console.log('PASS: four updates become one, initial render awaited, no overlapping redraws, latest arrays retained, formatters/nulls preserved, error recovery and pending destroy cancellation.');
})().catch(e=>{console.error(e);process.exitCode=1;});
