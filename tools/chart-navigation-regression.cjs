const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const delay=ms=>new Promise(r=>setTimeout(r,ms));
const ctx={console,performance,window:{},AbortController,setTimeout,clearTimeout,requestAnimationFrame(){},document:{}};
vm.createContext(ctx);vm.runInContext(fs.readFileSync('src/main/resources/static/js/graph/chartManager.js','utf8')+'\nthis.Manager=ChartManager;',ctx);
const make=id=>{const m=new ctx.Manager(id);m._showLoading=v=>m.loading=v;return m;};
(async()=>{
 const m=make('burst');let active=0,max=0,seen=[];
 m._performLoadData=async(o,r)=>{active++;max=Math.max(max,active);seen.push(o.dataParam.fromdate);await delay(200);active--;};
 const options={dataParam:{fromdate:'2025'}};
 const a=m.loadData(options);options.dataParam.fromdate='2024';const b=m.loadData(options);options.dataParam.fromdate='mutated';
 await Promise.all([a,b]);assert.deepEqual(seen,['2024']);assert.equal(m._liveLoading,0);assert.equal(m.loading,false);
 const c=m.loadData({dataParam:{fromdate:'2023'}});await delay(175);
 const d=m.loadData({dataParam:{fromdate:'2022'}});const e=m.loadData({dataParam:{fromdate:'2021'}});
 await Promise.all([c,d,e]);assert.deepEqual(seen,['2024','2023','2021']);assert.equal(max,1);
 // Real fetch path: deliberately ignore abort and return an invalid stale payload.
 // The payload must be rejected before any response mapping or chart mutation.
 const n=make('stale');let resolveFetch,signal;
 ctx.fetch=(url,o)=>{signal=o.signal;return new Promise(r=>resolveFetch=r);};
 const old=n.loadData({api:'/test',dataParam:{fromdate:'old'}});await delay(175);
 const original=n._performLoadData;n._performLoadData=async()=>{};
 const latest=n.loadData({dataParam:{fromdate:'new'}});assert.equal(signal.aborted,true);
 resolveFetch({ok:true,json:async()=>null});await Promise.all([old,latest]);assert.equal(n.state.series.length,0);
 n._performLoadData=async()=>{throw new Error('expected failure');};
 await assert.rejects(n.loadData({dataParam:{}}),/expected failure/);
 n._performLoadData=async()=>{};await n.loadData({dataParam:{}});assert.equal(n._liveLoading,0);assert.equal(n.loading,false);
 // A hung redraw must release the overlay without allowing an overlapping load.
 const h=make('hung');h._loadWaitTimeoutMs=20;
 let release,starts=0;
 h._performLoadData=()=>{starts++;return new Promise(r=>release=r);};
 await assert.rejects(h.loadData({dataParam:{}}),/timed out/);
 assert.equal(h.loading,false);assert.equal(h._liveLoading,0);
 await assert.rejects(h.loadData({dataParam:{}}),/previous load/);
 assert.equal(starts,1);assert.equal(h.loading,false);
 release();h._performLoadData=async()=>{starts++;};
 await h.loadData({dataParam:{}});assert.equal(starts,2);
 // A cancelled waiter must clean up even when its predecessor never settles.
 const w=make('waiting');w._loadWaitTimeoutMs=20;w._loadBarrier=new Promise(()=>{});
 const w1=w.loadData({dataParam:{}});await delay(160);
 const w2=w.loadData({dataParam:{}});const w2check=assert.rejects(w2,/timed out/);
 await w1;await w2check;assert.equal(w._liveLoading,0);assert.equal(w.loading,false);
 console.log('PASS: rapid clicks, immutable parameters, serial loads/renders, stale response rejection, abort, error recovery and loading cleanup.');
})().catch(e=>{console.error(e);process.exitCode=1;});
