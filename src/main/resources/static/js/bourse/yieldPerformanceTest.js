// Isolated Yield performance test. No production chart code is changed.
(function () {
    // Live data only: request parameters supplied from the main Yield chart.
    // Formatting parity harness: all benchmark modes share data and visual options.
    const el = id => document.getElementById(id);
    let chart = null, busy = false, source = [], title = 'USA 30Y LONG YIELD';
    let loadedRange = '', apiMs = null;
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    function dateMs(value) {
        if (typeof value === 'number') return value;
        const parts = /^(\d{1,2})-([A-Za-z]+)-(\d{2}|\d{4})$/.exec(value);
        if (parts) {
            let year = Number(parts[3]);
            if (year < 100) year += year < 70 ? 2000 : 1900;
            return Date.UTC(year, months.indexOf(parts[2].slice(0,3)), Number(parts[1]));
        }
        return Date.parse(value);
    }
    function labelDate(value) {
        const d = new Date(dateMs(value));
        return Number.isNaN(d.getTime()) ? '' : String(d.getUTCDate()).padStart(2,'0')+'-'+months[d.getUTCMonth()]+'-'+String(d.getUTCFullYear()).slice(-2);
    }
    function formatted(value, pattern) {
        if (value == null || !Number.isFinite(Number(value))) return '';
        const digits = Math.min(12, ((pattern.replace('%','').split('.')[1]) || '').length);
        return Number(value).toFixed(digits) + (pattern.includes('%') ? '%' : '');
    }
    function settings() {
        return {font:el('font').value, marker:Number(el('marker').value), type:el('chartType').value,
            color:el('color').value, opacity:Number(el('opacity').value), grid:el('grid').checked,
            legend:el('legend').checked, axis:el('axisFormat').value, tooltip:el('tooltipFormat').value};
    }
    function dataset(numeric) {
        const from = dateMs(el('from').value), to = dateMs(el('to').value);
        if (loadedRange !== el('from').value + '/' + el('to').value) throw Error('Dates changed. Click Reload API first.');
        if (!Number.isFinite(from) || !Number.isFinite(to) || from > to) throw Error('Choose a valid date range.');
        // Strip only trailing padding; preserve null gaps inside the observed range.
        let lastReal = source.length - 1;
        while(lastReal >= 0 && (source[lastReal].y == null || source[lastReal].y === '')) lastReal--;
        const data = source.slice(0,lastReal+1).filter(p => dateMs(p.x) >= from && dateMs(p.x) <= to)
            .map(p => ({x:numeric ? dateMs(p.x) : p.x, y:p.y == null || p.y === '' ? null : numeric ? Number(p.y) : p.y}));
        if (!data.some(p=>p.y!=null)) throw Error('No observations in this date range.');
        let last = dateMs(data[data.length-1].x);
        const count = Math.ceil(data.length * 0.1);
        for (let i=0;i<count;) {
            last += 86400000;
            if ([0,6].includes(new Date(last).getUTCDay())) continue;
            data.push({x:numeric ? last : labelDate(last), y:null}); i++;
        }
        // Consecutive observation slots compress non-trading days. Keep original dates
        // alongside the slots so axis labels never turn into calendar-day ticks.
        return data.filter(p => ![0,6].includes(new Date(dateMs(p.x)).getUTCDay()))
            .map((p,index) => ({x:index, y:p.y, tradingDate:labelDate(p.x)}));
    }
    function options(data, s) {
        const values = data.filter(p=>p.y!=null).map(p=>Number(p.y));
        const low = Math.min(...values), high = Math.max(...values);
        const margin = (high-low)*0.05 || Math.abs(high)*0.05 || 0.05;
        const color = s.color === '#44546a' ? '#2e75b6' : s.color;
        const lineColor = s.type === 'area' ? '#ffffff' : color;
        return {
            series:[{name:title,type:s.type,data:data}],
            chart:{height:525,width:1078,type:s.type==='column'?'bar':s.type,animations:{enabled:false},
                zoom:{enabled:true,type:'x'},toolbar:{show:true,offsetX:-50,tools:{download:false}}},
            title:{text:title,align:'center',margin:0,offsetY:20,style:{fontWeight:'bold',color:'#fff'}},
            subtitle:{text:'copyright LibVol.com',align:'right',offsetX:-50,offsetY:30,style:{fontSize:'10px',color:'#fff'}},
            colors:[color],dataLabels:{enabled:false},
            stroke:{curve:'straight',width:2.25,colors:[lineColor]},
            markers:{size:s.marker,shape:'square',colors:[lineColor],strokeColors:[lineColor]},
            // Bundled ApexCharts handleGradientFill expects a scalar color (local customization).
            fill:s.type==='area'?{type:'gradient',gradient:{gradientToColors:color,shadeIntensity:0,type:'vertical',inverseColors:false,
                stops:[30,90,100],opacityFrom:s.opacity===0.75?0.8:s.opacity===0.5?0.6:1,opacityTo:s.opacity}}:{type:'solid',opacity:1},
            grid:{show:s.grid,borderColor:'#f0e68c',strokeDashArray:1,padding:{right:60}},
            xaxis:{type:'numeric',min:0,max:Math.max(1,data.length-1),tickAmount:Math.min(19,Math.max(1,data.length-1)),
                decimalsInFloat:0,labels:{rotate:-70,rotateAlways:true,hideOverlappingLabels:true,
                minHeight:30,style:{fontSize:s.font,colors:'#fff'},formatter:v=>{const point=data[Math.round(Number(v))];return point ? point.tradingDate : '';}},
                axisBorder:{show:true,color:'#ffffff',height:3}},
            yaxis:{tickAmount:6,min:low>=0?Math.max(0,low-margin):low-margin,max:high+margin,
                labels:{minWidth:75,maxWidth:75,style:{fontSize:s.font,colors:['#fff']},formatter:v=>formatted(v,s.axis)},
                axisBorder:{show:true,color:'#fff',width:3}},
            legend:{show:s.legend,showForSingleSeries:true,position:'bottom',fontSize:s.font,labels:{colors:'#fff'},markers:{width:12,height:2},
                formatter:name=> (title==='USA 30Y LONG YIELD'?'<img src="/img/flag/1.png" width="18" alt="USA"> ':'')+escapeHtml(name)},
            tooltip:{shared:true,intersect:false,x:{show:false},y:{formatter:v=>formatted(v,s.tooltip),title:{formatter:()=>''}}},
            annotations:{yaxis:[{y:0,borderColor:'#ffc000'}]}
        };
    }
    function escapeHtml(s) {return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
    function log(text) {
        el('results').textContent += text+'\n';
        window.yieldTestLastResults = el('results').textContent;
    }
    window.addEventListener('unhandledrejection', event => {
        const error = event.reason;
        log('UNHANDLED RENDER ERROR ' + (error && error.stack ? error.stack : String(error)));
        console.error('YIELD TEST UNHANDLED REJECTION', error);
    });
    const paint = () => new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
    function lock(value) {busy=value; document.querySelectorAll('button,input,select,textarea').forEach(n=>n.disabled=value);}
    async function run(mode) {
        if (busy) return;
        lock(true);
        el('summary').textContent='Rendering…';
        let stage = 'prepare data/options';
        try {
            const data=dataset(mode!=='A'), s=settings(), config=options(data,s);
            if(chart) {chart.destroy();chart=null;}
            el('testChart').innerHTML='';
            await paint();
            const start=performance.now();
            let updateMs=0;
            if(mode==='D') {
                stage = 'D: construct populated chart';
                chart=new ApexCharts(el('testChart'),config);
                stage = 'D: render populated chart';
                await chart.render();
            } else {
                stage = mode + ': construct empty chart';
                chart=new ApexCharts(el('testChart'),Object.assign({},config,{series:[]}));
                stage = mode + ': render empty chart';
                await chart.render();
                stage = mode + ': update chart';
                const u=performance.now();
                if(mode==='C') await chart.updateSeries(config.series,false);
                else await chart.updateOptions(config,true,false,false);
                updateMs=performance.now()-u;
            }
            const resolved=performance.now()-start;
            await paint();
            const painted=performance.now()-start;
            const nulls=data.filter(p=>p.y===null).length;
            log(JSON.stringify({mode,source:el('sourceName').textContent,from:el('from').value,to:el('to').value,settings:s,
                axisMode:'trading-day slots',firstDate:data[0].tradingDate,lastDate:data[data.length-1].tradingDate,points:data.length,nulls,apiMs,updateMs:+updateMs.toFixed(2),renderCompleteMs:+resolved.toFixed(2),afterPaintMs:+painted.toFixed(2),
                svgNodes:el('testChart').querySelectorAll('svg *').length}));
            el('summary').textContent=mode+': '+painted.toFixed(2)+' ms through next paint; '+data.length+' points ('+nulls+' padding nulls).';
        } catch(e) {
            const detail = {mode, stage, message:e.message, stack:e.stack || String(e), settings:settings(),
                apiMs, sourcePoints:source.length, first:source[0], last:source[source.length-1]};
            el('summary').textContent = 'Failed at ' + stage + ': ' + e.message;
            log('RENDER ERROR ' + JSON.stringify(detail,null,2));
            console.error('YIELD TEST RENDER ERROR', detail, e);
        }
        finally {lock(false);}
    }
    document.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>run(b.dataset.mode)));
    el('clearChart').onclick=()=>{if(chart){chart.destroy();chart=null;}el('testChart').innerHTML='';el('results').textContent='';el('summary').textContent='Ready.';};
    async function loadApi() {
        if (busy) return;
        lock(true);
        source = []; loadedRange = ''; apiMs = null;
        if (chart) { chart.destroy(); chart = null; }
        el('testChart').innerHTML = '';
        const params = {
            fromdate: el('from').value, todate: el('to').value,
            period: 'd', type: '3', factor1: '30yr', country1: '1',
            yieldCurveCross1: 'yield', isFunctionGraph: false, functionId: -1
        };
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 600000);
        let succeeded = false;
        try {
            if (!params.fromdate || !params.todate || params.fromdate > params.todate) throw Error('Choose a valid date range.');
            el('summary').textContent = 'Loading USA 30Y from the API…';
            el('sourceName').textContent = 'Loading live API';
            log('API PARAMS ' + JSON.stringify(params));
            console.log('YIELD TEST API PARAMS_JSON', JSON.stringify(params));
            const started = performance.now();
            const http = await fetch('/bourse/getgraphdatabytype', {
                method: 'POST', credentials: 'same-origin',
                headers: {'Content-Type': 'application/json; charset=utf-8', 'Accept': 'application/json'},
                body: JSON.stringify(params), signal: controller.signal
            });
            if (!http.ok) throw Error('API returned HTTP ' + http.status);
            if (http.redirected) throw Error('API redirected. Sign in and reload this page.');
            const response = await http.json();
            apiMs = Number((performance.now() - started).toFixed(2));
            if (!Array.isArray(response) || response.length !== 1 || !Array.isArray(response[0].graphResponseDTOLst)) throw Error('Expected a single-series Yield API response.');
            const rows = response[0].graphResponseDTOLst;
            if (!rows.length || rows.some(p => !Number.isFinite(dateMs(p.x)) || (p.y != null && p.y !== '' && !Number.isFinite(Number(p.y))))) throw Error('API returned empty or invalid chart data.');
            source = rows;
            const c = response[0].config || {};
            title = c.displayDescription || 'USA 30Y LONG YIELD';
            const assign = (id,v) => {
                if (v == null || v === '') return;
                v = String(v);
                if (!Array.from(el(id).options).some(o=>o.value===v)) el(id).add(new Option(v,v));
                el(id).value=v;
            };
            assign('font',c.chartSize); assign('marker',c.chartshowMarkes);
            assign('axisFormat',c.yAxisFormat); assign('tooltipFormat',c.dataFormat);
            const type = String(c.chartType || 'area').toLowerCase().replace('bars','column');
            assign('chartType', ['area','line','column'].includes(type) ? type : 'line');
            assign('color',c.chartColor); assign('opacity',c.chartTransparency);
            if(c.chartShowgrid != null) el('grid').checked=String(c.chartShowgrid)==='true';
            loadedRange = params.fromdate + '/' + params.todate;
            el('sourceName').textContent = 'Live API · USA 30Y · ' + apiMs + ' ms';
            log('API RESULT ' + JSON.stringify({apiMs,points:rows.length,config:c}));
            console.log('YIELD TEST API CONFIG_JSON',JSON.stringify(c));
            succeeded = true;
        } catch(e) {
            el('sourceName').textContent = 'API load failed';
            el('summary').textContent = e.name === 'AbortError' ? 'API request timed out.' : e.message;
            log('ERROR: ' + el('summary').textContent);
        } finally {
            clearTimeout(timeout); lock(false);
        }
        if (succeeded) await run('D');
    }
    el('reloadApi').onclick = loadApi;
    loadApi();
})();
