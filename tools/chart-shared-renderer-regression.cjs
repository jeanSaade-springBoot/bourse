const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const current=fs.readFileSync('src/main/resources/static/js/apexcharts.js','utf8');
// The reference functions are the pre-v3.7 vendor implementation, extracted unchanged.
const reference=JSON.parse(fs.readFileSync('tools/chart-renderer-reference.json','utf8'));
function extract(src,key){const start=src.indexOf('key: "'+key+'"');assert(start>=0);const v=src.indexOf('value: function',key==='checkLabelBasedOnTickamount'?src.indexOf('*/',start):start)+7;const end=key==='checkLabelBasedOnTickamount'?src.indexOf('\n\t\t\t}, {',v):src.indexOf('\n\t\t\t\t}',v)+6;return src.slice(v,end).trim();}
const keys=['drawXaxis','getLabel','checkLabelBasedOnTickamount','checkForOverflowingLabels','getStringX'];
function run(source,count,type,width,rotate,tick){let measured=0,drawn=[];function node(){return {setAttribute(){},appendChild(){}};}
class Graphics {group(){return {add(){}};}getTextRects(){measured++;return {width:50,height:14};}drawText(o){drawn.push(o);return {node:node()};}drawLine(){return {};}}
const sandbox={b:Graphics,W:class{xLabelFormat(f,v){return v;}},document:{createElementNS:node},Number};vm.createContext(sandbox);
const methods=Object.fromEntries(keys.map(k=>[k,vm.runInContext('('+source[k]+')',sandbox)]));
const labels=Array.from({length:count},(_,i)=>'D'+i);
const w={config:{chart:{width},xaxis:{offsetX:0,offsetY:0,type,tickAmount:tick,position:'bottom',labels:{offsetX:0,offsetY:0,show:true,rotate:-70,style:{fontWeight:400,cssClass:''},showDuplicates:true,hideOverlappingLabels:true},title:{},axisBorder:{show:false}},yaxis:[{}]},globals:{labels,timescaleLabels:type==='datetime'?labels.map((v,i)=>({value:v,position:i*2,unit:'day'})):[],gridWidth:1000,padHorizontal:0,isXNumeric:type==='numeric',dataPoints:count,rotateXLabels:rotate,xaxisLabelsCount:0,SVGNS:'svg',dom:{baseEl:{querySelector(){return null;}}}}};
const ctx={w}, utils={ctx,w};for(const k of keys)utils[k]=methods[k];
const axis={w,ctx,axesUtils:utils,xaxisLabels:labels,drawnLabels:[],drawnLabelsRects:[],xaxisFontSize:'14px',xaxisFontFamily:'Arial',xaxisForeColors:'#fff',offY:500};
methods.drawXaxis.call(axis);
return {visible:drawn.filter(x=>x.text!=='').map(x=>({text:x.text,x:x.x,y:x.y})),nodes:drawn.length,measured,w,utils};}
const patched=Object.fromEntries(keys.map(k=>[k,extract(current,k)]));
for(const type of ['category','numeric','datetime'])for(const width of [543,1000])for(const rotate of [false,true])for(const n of [1,10,106,2558])for(const tick of [undefined,19,'dataPoints']){
const before=run(reference,n,type,width,rotate,tick),after=run(patched,n,type,width,rotate,tick);
assert.deepEqual(after.visible,before.visible,JSON.stringify({type,width,rotate,n,tick}));
assert.equal(after.w.globals.xaxisLabelsCount,before.w.globals.xaxisLabelsCount);
assert(after.measured<=25);assert(after.nodes<=25);
if(n===2558){assert(before.nodes===2558);assert(after.nodes<before.nodes/50);}
const index=Math.min(10,n-1);const x=after.utils.getStringX('D'+index);assert.equal(x,after.w.globals.bourseXAxisPositions[index]);
}
console.log('PASS: 144 axis cases preserve visible labels, positions and label counts; hidden-label measurements/nodes capped at 25; invisible-label annotation coordinates retained.');
