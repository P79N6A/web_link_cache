(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+Aie":function(e,t,n){var r;!function(i,o,a){if(i){for(var c,s={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},l={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},u={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},p={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},f=1;f<20;++f)s[111+f]="f"+f;for(f=0;f<=9;++f)s[f+96]=f.toString();b.prototype.bind=function(e,t,n){return e=e instanceof Array?e:[e],this._bindMultiple.call(this,e,t,n),this},b.prototype.unbind=function(e,t){return this.bind.call(this,e,function(){},t)},b.prototype.trigger=function(e,t){return this._directMap[e+":"+t]&&this._directMap[e+":"+t]({},e),this},b.prototype.reset=function(){return this._callbacks={},this._directMap={},this},b.prototype.stopCallback=function(e,t){return!((" "+t.className+" ").indexOf(" mousetrap ")>-1)&&(!function e(t,n){return null!==t&&t!==o&&(t===n||e(t.parentNode,n))}(t,this.target)&&("INPUT"==t.tagName||"SELECT"==t.tagName||"TEXTAREA"==t.tagName||t.isContentEditable))},b.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)},b.addKeycodes=function(e){for(var t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);c=null},b.init=function(){var e=b(o);for(var t in e)"_"!==t.charAt(0)&&(b[t]=function(t){return function(){return e[t].apply(e,arguments)}}(t))},b.init(),i.Mousetrap=b,void 0!==e&&e.exports&&(e.exports=b),void 0===(r=function(){return b}.call(t,n,t,e))||(e.exports=r)}function h(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}function d(e){if("keypress"==e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return s[e.which]?s[e.which]:l[e.which]?l[e.which]:String.fromCharCode(e.which).toLowerCase()}function y(e,t){return e.sort().join(",")===t.sort().join(",")}function k(e){return"shift"==e||"ctrl"==e||"alt"==e||"meta"==e}function m(e,t,n){return n||(n=function(){if(!c)for(var e in c={},s)e>95&&e<112||s.hasOwnProperty(e)&&(c[s[e]]=e);return c}()[e]?"keydown":"keypress"),"keypress"==n&&t.length&&(n="keydown"),n}function v(e,t){var n,r,i,o=[];for(n=function(e){return"+"===e?["+"]:(e=e.replace(/\+{2}/g,"+plus")).split("+")}(e),i=0;i<n.length;++i)r=n[i],p[r]&&(r=p[r]),t&&"keypress"!=t&&u[r]&&(r=u[r],o.push("shift")),k(r)&&o.push(r);return{key:r,modifiers:o,action:t=m(r,o,t)}}function b(e){var t=this;if(e=e||o,!(t instanceof b))return new b(e);t.target=e,t._callbacks={},t._directMap={};var n,r={},i=!1,a=!1,c=!1;function s(e){e=e||{};var t,n=!1;for(t in r)e[t]?n=!0:r[t]=0;n||(c=!1)}function l(e,n,i,o,a,c){var s,l,u=[],p=i.type;if(!t._callbacks[e])return[];for("keyup"==p&&k(e)&&(n=[e]),s=0;s<t._callbacks[e].length;++s)if(l=t._callbacks[e][s],(o||!l.seq||r[l.seq]==l.level)&&p==l.action&&("keypress"==p&&!i.metaKey&&!i.ctrlKey||y(n,l.modifiers))){var f=!o&&l.combo==a,h=o&&l.seq==o&&l.level==c;(f||h)&&t._callbacks[e].splice(s,1),u.push(l)}return u}function u(e,n,r,i){t.stopCallback(n,n.target||n.srcElement,r,i)||!1===e(n,r)&&(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}(n),function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}(n))}function p(e){"number"!=typeof e.which&&(e.which=e.keyCode);var n=d(e);n&&("keyup"!=e.type||i!==n?t.handleKey(n,function(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}(e),e):i=!1)}function f(e,t,o,a){function l(t){return function(){c=t,++r[e],function(){clearTimeout(n),n=setTimeout(s,1e3)}()}}function p(t){u(o,t,e),"keyup"!==a&&(i=d(t)),setTimeout(s,10)}r[e]=0;for(var f=0;f<t.length;++f){var h=f+1===t.length?p:l(a||v(t[f+1]).action);m(t[f],h,a,e,f)}}function m(e,n,r,i,o){t._directMap[e+":"+r]=n;var a,c=(e=e.replace(/\s+/g," ")).split(" ");c.length>1?f(e,c,n,r):(a=v(e,r),t._callbacks[a.key]=t._callbacks[a.key]||[],l(a.key,a.modifiers,{type:a.action},i,e,o),t._callbacks[a.key][i?"unshift":"push"]({callback:n,modifiers:a.modifiers,action:a.action,seq:i,level:o,combo:e}))}t._handleKey=function(e,t,n){var r,i=l(e,t,n),o={},p=0,f=!1;for(r=0;r<i.length;++r)i[r].seq&&(p=Math.max(p,i[r].level));for(r=0;r<i.length;++r)if(i[r].seq){if(i[r].level!=p)continue;f=!0,o[i[r].seq]=1,u(i[r].callback,n,i[r].combo,i[r].seq)}else f||u(i[r].callback,n,i[r].combo);var h="keypress"==n.type&&a;n.type!=c||k(e)||h||s(o),a=f&&"keydown"==n.type},t._bindMultiple=function(e,t,n){for(var r=0;r<e.length;++r)m(e[r],t,n)},h(e,"keypress",p),h(e,"keydown",p),h(e,"keyup",p)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null)}}]);
//# sourceMappingURL=vendors~admin-navigation~collab.editor.container~fabric.template.editor~fullpage.editor.container~fu~4cc67a0e.e181bb8a19539ebbae18-v35.js.map