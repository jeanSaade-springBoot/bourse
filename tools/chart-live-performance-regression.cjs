const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
let timers=[],draws=0,resolveDraw;
const ctx={console,performance,window:{},setTimeout:f=>{timers.push(f)},requestAnimationFrame(){},
 document:{getElementById:()=>null},livePriceCache:{BTC:{close:4,startTime:1},ETH:{close:2,startTime:1}},
 dropDownBenchmarkSource:[{groupId:'pair',name:'BTC/ETH'}],$:()=>({val:()=> 'pair'}),formatDateShort:String,selectedLiveCurrency:'BTC'};
vm.createContext(ctx);vm.runInContext(fs.readFileSync('src/main/resources/static/js/graph/chartManager.js','utf8')+'\nthis.Manager=ChartManager;',ctx);
const M=ctx.Manager;
const m=new M('chart3');m._isCentred=[];m.generateYAxisConfig=()=>({});
m.chart={w:{config:{series:[{data:[{x:'1',y:2}]}]}},updateOptions(){draws++;return Promise.resolve();}};
const msg=(close,t=1)=>({body:JSON.stringify([{close,startTime:t}])});
(async()=>{
 await M._applyLiveUpdate('SOL',msg(50));assert.equal(draws,0,'unrelated currency ignored');
 await M._applyLiveUpdate('BTC',msg(4));assert.equal(draws,0,'same ratio ignored');
 await M._applyLiveUpdate('BTC',msg(6));assert.equal(draws,1,'changed ratio drawn');
 m.chart.w.config.series=[{data:[]}];await M._applyLiveUpdate('BTC',msg(8));assert.equal(draws,1,'empty chart skipped');
 // Exercise real scheduler with a controlled slow renderer.
 let active=0,max=0,seen=[];
 M._applyLiveUpdate=async(c,message)=>{active++;max=Math.max(max,active);seen.push(JSON.parse(message.body)[0]);await new Promise(r=>resolveDraw=r);active--;};
 M.handleLiveUpdate('BTC',msg(1,10));M.handleLiveUpdate('BTC',msg(2,10));M.handleLiveUpdate('BTC',msg(3,11));
 assert.equal(M._livePending.size,2,'distinct candles retained');assert.equal(M._liveStats.coalesced,1);
 const drain=timers.shift()();await Promise.resolve();assert.equal(seen[0].close,2,'latest same-candle value retained');
 M.handleLiveUpdate('BTC',msg(4,11));resolveDraw();await new Promise(r=>setImmediate(r));
 timers.shift()();await new Promise(r=>setImmediate(r));assert.equal(seen[1].close,4);assert.equal(max,1,'redraws serialized');
 resolveDraw();await new Promise(r=>setImmediate(r));timers.shift()();await drain;
 assert.equal(M._livePending.size,0);assert.equal(M._liveRunning,false);
 console.log('PASS: unrelated/unchanged/empty guards, same-candle coalescing, candle retention and awaited redraws.');
})().catch(e=>{console.error(e);process.exitCode=1;});
