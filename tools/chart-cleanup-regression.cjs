const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync('src/main/resources/static/js/apexcharts.js','utf8');
const start=source.indexOf('key: "killSVG"'),v=source.indexOf('value: function',start)+7;
const end=source.indexOf('\n\t\t\t\t}',v)+6;
const kill=vm.runInNewContext('('+source.slice(v,end)+')',{performance});
for(const count of [0,1,100,3268,10000]){
 let cleaned=0,cleared=0,ungrouped=0;
 const children=Array.from({length:count},()=>({removeClass(arg){assert.equal(arg,'*');this.removed=true;},off(){assert(this.removed);this.offCalled=true;},stop(){assert(this.offCalled);cleaned++;}}));
 const tree={each(fn,deep){assert.equal(deep,true);children.forEach((c,i)=>fn.call(c,i,children));},ungroup(){ungrouped++;throw Error('Must not transform discarded elements');},clear(){assert.equal(cleaned,count);cleared++;children.length=0;}};
 const owner={w:{globals:{}}};kill.call(owner,tree);
 assert.equal(cleaned,count);assert.equal(cleared,1);assert.equal(ungrouped,0);assert.equal(children.length,0);assert(owner.w.globals.bourseCleanupMs>=0);
}
// Still use the vendor update path and event/animation cleanup; no style/config bypass.
assert(source.includes('this.killSVG(r.Paper), r.Paper.remove()'));
assert(source.includes('return this.updateHelpers._updateOptions') || source.includes('this.updateHelpers._updateOptions(t, i, a, s, r)'));
console.log('PASS: cleanup visits every descendant, removes listeners, stops animations, clears once, performs no ungroup/reparent work, and retains normal update path.');
