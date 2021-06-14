// Lightweight Vanilla Color Picker
// --------------------------------
// Replacement / normalization of browser's native color picker with list / palette.
// Compatibility: IE 9+ (if autopfefixer set to support IE9), WAI ARIA recommendations.
// Created: 2020.05.09, 14:30h, by dirkdigweed@gmx.net for host-one.ch
// Last changed: 2020.05.11, 16:30h

function Colorpicker(trigger){
  'use strict'
  var self = this, w = window, d = document,
  raf = w.requestAnimationFrame || w.mozRequestAnimationFrame || w.webkitRequestAnimationFrame || function(f){return setTimeout(f, 1000/60);},
  // Constants / vars
  colors = [ '#ffffff', '#e2a293', '#d4735e', '#65281a' ],
  icons = {
    swatches: '<path d="M4 1.1c0-.3-.3-.6-.6-.6H1.1C.8.5.5.8.5 1.1v5.6c0 1 .8 1.8 1.7 1.8 1 0 1.8-.8 1.8-1.7V1.1zM2.2 7.5c-.4 0-.7-.3-.7-.8 0-.4.3-.7.7-.7s.8.3.8.8c0 .4-.3.7-.8.7zm6.3-1.9v2.3c0 .3-.3.6-.6.6H4L7.5 5h.4c.3 0 .6.3.6.6zM5.8 1.5l1.6 1.6c.2.2.2.6 0 .8L4.7 6.8V1.9l.3-.4c.2-.2.6-.2.8 0z"/>',
    copy: '<path d="M6.8 6.8V3.5h1.5v4.8H3.5V6.8h3.3zm-1-1V1.3H1.3v4.5h4.5zm.5.5H.8V.8h5.5v5.5z"/>',
    plus: '<path d="M4.1.5v3.6H.5V5h3.6v3.6H5V4.9h3.6v-.8H4.9V.5h-.8z"/>',
    dots: '<circle cx="4.5" cy="1.5" r="1"/><circle cx="4.5" cy="4.5" r="1"/><circle cx="4.5" cy="7.5" r="1"/>'
  },
  palette, picker, usePalette = false,
  hue, hueInput, sat, satInput, hexInput, rgbInput, preview,
  current = { hue: 0.5, sat: 1, val: 0.5 };
  // Main input event listener
  trigger.addEventListener('click', open, false);
  // Private methods
  // Show / hide / open / close components
  function open (e) {
  debugger;
    e.preventDefault();
    trigger.blur(); // Edge will open the native picker on focus
    picker = trigger.hasAttribute('data-colorpicker') && d.querySelector('#'+ trigger.getAttribute('data-colorpicker')+'-picker');
    palette = picker && d.querySelector('#'+ trigger.getAttribute('data-colorpicker') +'-palette');
    usePalette = trigger.hasAttribute('data-palette') || trigger.hasAttribute('list'); 
    if(picker && palette) return usePalette ? togglePalette() : togglePicker();
    else createPicker(e);
  }
  function togglePicker (e) {
    var v = picker.className.match(/\bshow\b/g);
    picker.className = v ? picker.className.replace(/\bshow\b/g,'').trim() : picker.className +' show';
  }
  function togglePalette (e) {
    var v = palette.className.match(/\bshow\b/g);
    palette.className = v ? palette.className.replace(/\bshow\b/g,'').trim() : palette.className +' show';
  }
  function close (e) {
    palette.className = palette.className.replace(/\bshow\b/g,'').trim();
    picker.className = picker.className.replace(/\bshow\b/g,'').trim();
    trigger.setAttribute('aria-expanded', false);
    trigger.blur(); // Edge fix
  }
  // Component creation
  // Picker
  function createPicker (e) {
  debugger;
    var tpl = [
      '<figure class="sat" draggable="false">',
      '  <div class="handle" draggable="false" tabindex="0"></div>',
      '  <div class="white"></div><div class="black"></div><div class="color"></div>',
      '</figure>',
      '<nav class="controls">',
      '  <div class="hue"><input min="0" max="360" value="180" type="range"/><output></output></div>',
      '  <figure class="preview" tabindex="0"></figure>',
      '  <div class="output"><input type="text" maxlength="7"/></div>',
      '  <a href="#!"><svg viewBox="0 0 9 9" fill="currentColor">'+ icons.swatches +'"</svg></a>',
      '  <a href="#!"><svg viewBox="0 0 9 9" fill="currentColor">'+ icons.copy +'"</svg></a>',
      '</nav>'
    ].join(''),
    id = ( picker ? trigger.getAttribute('data-colorpicker') : 'cp-' + Math.random().toString(36).substr(2, 8));
    // Assign palette and set color 
    if(!palette){ palette = createPalette(id, trigger); }
    // Create picker
    trigger.setAttribute('data-colorpicker', id);
    trigger.setAttribute('aria-haspopup', true);
    trigger.setAttribute('aria-expanded', true);
    trigger.setAttribute('tabindex', '-1');
    picker = d.createElement('div');
    picker.id = id + '-picker';
    picker.innerHTML = tpl;
    picker.className = 'color-picker fade';
    d.body.appendChild(picker);
    // Assign control elements
    hue = picker.querySelector('.color');
    hueInput = picker.querySelector('.hue input');
    sat = picker.querySelector('.sat');
    satInput = sat.querySelector('.handle');
    preview = picker.querySelector('.preview');
    hexInput = picker.querySelector('.output input');
    // Event handler
    preview.addEventListener('click', close, false);
    hueInput.addEventListener('input', hueHandler, false);
    hexInput.addEventListener('input', hexHandler, false);
    w.addEventListener('resize', satHandler, false);
    w.addEventListener('orientationchange', satHandler, false);
    satHandler();
    // Assign color 
    if(trigger.value){ setCurrent(trigger.value); setColor(); }
    togglePalette();
  }
  // Palette
  function createPalette (id, target) {
    var cs = colors,
    stored = localStorage.getItem('color-picker-palette') || [],
    inline = trigger.getAttribute('data-palette').trim().split(','),
    list = d.querySelector('#'+ trigger.getAttribute('list')), listed = [],
    navtpl = '<button type="button" aria-label="add a color" style="display:none"><svg viewBox="0 0 9 9" fill="currentColor">'+ icons.plus +'"</svg></button><i class="indicator" aria-hidden="true"></i>',
    nav = target.parentElement.querySelector('nav.color-picker-palette') || d.createElement('nav');
    if(id) nav.id = id +'-palette';
    if(list) [].slice.call(list.querySelectorAll('option')).forEach(function(o){ listed.push(o.innerText.toLowerCase()); });
    nav.className = 'color-picker-palette swatches slidefade';
    nav.setAttribute('tabindex', 0);
    nav.innerHTML = navtpl;
    target.parentElement.appendChild(nav);
    var add = nav.querySelector('button');
    add.addEventListener('click', togglePicker, false);
    if(stored) cs = cs.concat(stored.filter( function(c){ return cs.indexOf(c) < 0; } ));
    if(inline) cs = cs.concat(inline.filter( function(c){ return cs.indexOf(c) < 0; } ));
    if(list) cs = cs.concat(listed.filter( function(c){ return cs.indexOf(c) < 0; } ));
    console.log(cs);
    cs.forEach(function(color) {
      var color = sanitizeHex( color.trim() ),
      swatch = d.createElement('a');
      swatch.style.background = color;
      swatch.style.color = contrast(color);
      swatch.href = color;
      swatch.title = color;
      swatch.setAttribute('draggable', true);
      swatch.addEventListener('click', selectSwatch, false);
      swatch.addEventListener('dragstart', dragSwatch, false);
      nav.insertAdjacentElement('afterbegin', swatch);
    });
    trigger.setAttribute('dropzone', '');
    replaceEvent('drop', dropSwatch, false, trigger);
    replaceEvent('dragover', dragoverSwatch, false, trigger);
    placeElement(nav, trigger);
    return nav;
    // Private methods
    // Swatches select
    function selectSwatch (e) {
      var s = this, c = s.title || '', as = s.parentNode.querySelectorAll('a');
      if(as) [].slice.call(as).forEach(function(n){ n.removeAttribute('class'); });
      setCurrent(c); setColor();
      if(c === trigger.value) s.className = 'selected';
      close(e);
    }
    // Swatches draggable handler
    function dragSwatch (e) {
      e.dataTransfer.setData('text', e.target.title);
      e.dataTransfer.effectAllowed = 'all';
    }
    function dragoverSwatch (e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
    }
    function dropSwatch (e) {
      e.preventDefault();
      this.value = e.dataTransfer.getData('text');
      setCurrent(this.value); setColor();
      // this.focus();
    }
    // Save to local storage
    function saveSwatches (colors) {
      localStorage.setItem('color-picker-palette', JSON.stringify(cs));
    }
  }
  // Interface handler
  function hexHandler (e) {
    if(hexInput.value.length < 3) return;
    var hex = sanitizeHex(hexInput.value);
    if(hex.length) { setCurrent(hex); setColor(); }
  }
  function hueHandler (e) {
    current.hue = (hueInput.value/360);
    hue.setAttribute('style', 'background: rgb('+ hsv2rgb(current.hue, 1, 1) +')');
    updateColor();
  }
  function satHandler (e) {
    var selecting = false, te = false, keys = {}, keydist = 3,
    offsetX = sat.offsetLeft,
    offsetY = sat.offsetTop,
    H = sat.offsetHeight,
    W = sat.offsetWidth; 
    // Event listeners remove previous, add new ones
    replaceEvent('mousedown', start, false, sat);
    replaceEvent('touchstart', start, false, sat);
    replaceEvent('keydown', keyevent, false, sat);
    replaceEvent('keyup', keyevent, false, sat);
    // Private methods
    function start (e) {
      e.preventDefault();
      satInput.focus();
      selecting = true;
      te = e.changedTouches || e.touches;
      position(te ? te[0].pageX : e.pageX, te ? te[0].pageY : e.pageY);
      updateColor();
      d.addEventListener('mousemove', move, false);
      d.addEventListener('touchmove', move, false);
      d.addEventListener('mouseup', end, false);
      d.addEventListener('touchend', end, false);
      
    }
    function move (e) {
      if(selecting) {
        te = e.changedTouches || e.touches;
        position(te ? te[0].pageX : e.pageX, te ? te[0].pageY : e.pageY);
        updateColor();
      }
    }
    function end () {
      selecting = te = false;
      updateColor();
      d.removeEventListener('mousemove', move, false);
      d.removeEventListener('touchmove', move, false);
      d.removeEventListener('mouseup', end, false);
      d.removeEventListener('touchend', end, false);
    }
    function position (xPos, yPos) {
      var x = xPos - offsetX;
      var y = yPos - offsetY;
      if(x <= 0) x = 0;
      if(x >= W) x = W;
      if(y <= 0) y = 0;
      if(y >= H) y = H;
      current.sat = (x/W);
      current.val = (1 - (y/H));
      place(x, y);
    }
    function place (x, y){
      satInput.setAttribute('style', 'transform: translate('+ x +'px,'+ y +'px)');
    }
    function keymove (value, key1, key2, max) {
      var n = parseInt(value, 10) - (keys[key1] ? keydist : 0) + (keys[key2] ? keydist : 0);
      return n < 0 ? 0 : n > max ? max : n;
    }
    function keyevent (e) {
      keys[e.which] = e.type === 'keydown' ? true : false;
      var b = satInput.getBoundingClientRect(),
      ox = b.left + b.width/2, oy = b.top + b.height/2;
      position(keymove(ox, 37, 39, W + offsetX), keymove(oy, 38, 40, H + offsetY));
      updateColor();
      console.log(b, ox, oy)
    }
  }
  // Private methods
  function currentRGB () {
    return hsv2rgb(current.hue, current.sat, current.val);
  }
  function currentHEX () {
    return rgb2hex(currentRGB());
  }
  function updateColor () {
    var hex = currentHEX();
    preview.style.backgroundColor = 'rgb('+ currentRGB().toString() +')';
    preview.style.color = contrast(hex);
    hexInput.value = hex;
    if(trigger.type === ('color' || 'text')) trigger.value = hex;
    if(trigger.type !== 'color') trigger.style.cssText = 'background-color:'+ hex;
  }
  function setColor () {
    var x = sat.offsetWidth * current.sat,
    y = sat.offsetHeight * (1 - current.val);
    satInput.setAttribute('style', 'transform: translate('+ x +'px,'+ y +'px)');
    hueInput.value = current.hue*360;
    updateColor();
  }
  function setCurrent (hex) {
    var rgb = hex2rgb(hex), hsv = rgb2hsv(rgb);
    if(rgb) current = { hue: hsv[0], sat: hsv[1], val: hsv[2] };
  }
  // Component placement
  function placeElement(el, target){
    var ind = el.querySelector('.indicator, .arrow'), 
    offset = target.getAttribute('data-offset') || 5,
    align = target.getAttribute('data-align');
    replaceEvent('scroll', place, false, d);
    replaceEvent('resize', place, false, w);
    replaceEvent('orientationchange', place, false, w);
    place();
    // Private methods
    function props(elem) {
      var b = elem.getBoundingClientRect();
      return {top: b.top + w.pageYOffset, left: b.left + w.pageXOffset, width: b.width, height: b.height };
    }
    function place(e) {
      var x, y, eP = props(el), tP = props(target), iP = ind ? props(ind) : null,
      sY = w.pageYOffset, sX = w.pageXOffset, vw = d.documentElement.clientWidth, vh = w.innerHeight;
      x = tP.left + tP.width/2 - eP.width/2 - sX;
      y = tP.top - eP.height - offset - sY;
      el.className = el.className.replace(/\b(left|right|bottom)\b/g, '').trim();
      if (x <= 0) {x = offset; el.className = el.className.replace(/\bleft\b/g,'').trim() +' right';}
      if (y <= 0) {y = tP.top + tP.height + offset; el.className += ' bottom';}
      if (x >= vw) el.className = el.className.replace(/\bright\b/g,'').trim() +' left';
      if (y >= vh) el.className = el.className.replace(/\bbottom\b/g,'').trim();
      el.setAttribute('style','left:'+ x +'px;top:'+ y +'px;');
    }
  }
  // Event handler helper
  function replaceEvent (event, action, passive, el) {
    el.removeEventListener(event, action, passive);
    el.addEventListener(event, action, passive);
  }
  // Color helperfunction 
  // Sanitize hex to 3 or 6 digits, or the empty string.
  function sanitizeHex (hex) {
    var v = hex.replace('#','').toUpperCase(), valid = v.match(/^([0-9a-f]{3}){1,2}$/i);
    if (valid && v.length === 3) return '#'+ v.split('').map(function(h){ return h+h; }).join(''); 
    else if (valid && v.length === 6) return '#'+ v;
    else return '';
  }
  function contrast(hex){
    hex = hex.replace('#','').trim();
    var r = parseInt(hex.substr(0,2),16), g = parseInt(hex.substr(3,2),16), 
    b = parseInt(hex.substr(4,2),16), yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 198) ? 'black' : 'white'; // yiq: 0-255, 128 recommended
  }
  function hex2rgb(hex) {
    var re = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return re ? [ parseInt(re[1], 16), parseInt(re[2], 16), parseInt(re[3], 16) ] : null
  }
  function rgb2hex (r, g, b) {
    if (arguments.length === 1) { g = r[2], b = r[1], r = r[0]; }
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  function rgb4hsv(r, g, b){
    if (arguments.length === 1) { g = r[2]/255, b = r[1]/255, r = r[0]/255; }
    var v = Math.max(r,g,b), n = v-Math.min(r,g,b),
    h = n && ( (v==r) ? (g-b)/n : ((v==g) ? 2+(b-r)/n : 4+(r-g)/n) ); 
    return [60*(h<0?h+6:h), (v&&n/v), v];
  }
  function rgb2hsvold(r, g, b) {
    if (arguments.length === 1) { g = r[2]/255, b = r[1]/255, r = r[0]/255; }
    var max = Math.max(r, g, b), min = Math.min(r, g, b), h, s, v = max, d = max - min;
    s = max == 0 ? 0 : d / max;
    if (max == min) h = 0;  
    else {
      if (max == r) h = (g - b) / d + (g < b ? 6 : 0);
      if (max == g) h = (b - r) / d + 2;
      if (max == b) h = (r - g) / d + 4; 
      h /= 6;
    }
    return [ h, s, v ];
  }
  function rgb2hsv(r, g, b) {
    if (arguments.length === 1) { g = r[2]/255, b = r[1]/255, r = r[0]/255; }
    var max = Math.max(r, g, b), min = Math.min(r, g, b), h, s, v = max, d = max - min;
    s = max == 0 ? 0 : d / max;
    if (max == min) h = 0;  
    else {
      if (max == r) h = (g - b) / d + (g < b ? 6 : 0);
      if (max == g) h = (b - r) / d + 2;
      if (max == b) h = (r - g) / d + 4; 
      h /= 6;
    }
    return [ h, s, v ];
  }
  function hsv4rgb (h, s, v) {
    var f = function (n, k) { k = (n + h/60)%6; return v - v*s*Math.max( Math.min(k, 4-k, 1), 0); }
    return [f(5), f(3), f(1)];
  }
  function hsv2rgb (h, s, v) {
    var r, g, b,
    i = Math.floor(h * 6),
    f = h * 6 - i,
    p = v * (1 - s),
    q = v * (1 - f * s),
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
      case 0: r = v, g = t, b = p; break;
      case 1: r = q, g = v, b = p; break;
      case 2: r = p, g = v, b = t; break;
      case 3: r = p, g = q, b = v; break;
      case 4: r = t, g = p, b = v; break;
      case 5: r = v, g = p, b = q; break;
    }
    return [ Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255) ];
  }
}

var pick = document.querySelector('[type="color"]'); 
new Colorpicker(pick);