(self.AMP=self.AMP||[]).push({n:"amp-form",v:"1901222107370",f:(function(AMP,_){
var l,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ba;if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={a:!0},ea={};try{ea.__proto__=da;ca=ea.a;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;
function n(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.va=b.prototype};function ga(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b}function ha(a){return new Promise(function(b){b(a())})}function ia(){var a,b,c;this.Z=new Promise(function(a,d){b=a;c=d});this.ka=b;this.ia=c;this.R=0;if(a)for(var d=0;d<a.length;d++)this.add(a[d])}ia.prototype.add=function(a){var b=this,c=++this.R;Promise.resolve(a).then(function(a){b.R===c&&b.ka(a)},function(a){b.R===c&&b.ia(a)});return this.Z};
ia.prototype.then=function(a,b){return this.Z.then(a,b)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var ja=/(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;function ka(a,b,c,d,e){return e?e:b?"\ufffd":d?a.slice(0,-1)+"\\"+a.slice(-1).charCodeAt(0).toString(16)+" ":"\\"+a};function la(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ma=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;var na=Object.prototype.toString;function oa(a){return a?Array.prototype.slice.call(a):[]}function pa(a){return"[object Object]"===na.call(a)};self.log=self.log||{user:null,dev:null,userForEmbed:null};var p=self.log;function q(){if(!p.user)throw Error("failed to call initLogConstructor");return p.user}function r(){if(p.dev)return p.dev;throw Error("failed to call initLogConstructor");}function t(a,b,c,d){q().assert(a,b,c,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};var qa=Object.prototype.hasOwnProperty;function u(){var a,b=Object.create(null);a&&Object.assign(b,a);return b}function v(a){return a||{}}
function ra(a,b){var c=void 0===c?10:c;var d=[],e=[];e.push({t:a,s:b,d:0});for(a={};0<e.length;){b=e.shift();a.t=b.t;a.s=b.s;a.d=b.d;if(d.includes(a.s))throw Error("Source object has a circular reference.");d.push(a.s);a.t!==a.s&&(a.d>c?Object.assign(a.t,a.s):(Object.keys(a.s).forEach(function(a){return function(b){var c=a.s[b];if(qa.call(a.t,b)){var d=a.t[b];if(pa(c)&&pa(d)){e.push({t:d,s:c,d:a.d+1});return}}a.t[b]=c}}(a)),a={s:a.s,t:a.t,d:a.d}))}};function ta(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};var w;function ua(a,b){for(var c=[],d=a.parentElement;d;d=d.parentElement)b(d)&&c.push(d);return c}function va(a){var b="fieldset";b=b.toUpperCase();return ua(a,function(a){return a.tagName==b})}function x(a,b){for(var c=a.length,d=0;d<c;d++)b(a[d],d)};function wa(a,b){return a.hasAttribute("verify-xhr")?new xa(a,b):new ya(a)}function y(a){this.h=a}y.prototype.onCommit=function(){za(this);return Aa(this)?this.ca():Promise.resolve({updatedElements:[],errors:[]})};y.prototype.ca=function(){return Promise.resolve({updatedElements:[],errors:[]})};
function Aa(a){a=a.h.elements;for(var b=0;b<a.length;b++){var c=a[b];if(!c.disabled)switch(c.type){case "select-multiple":case "select-one":c=c.options;for(var d=0;d<c.length;d++)if(c[d].selected!==c[d].defaultSelected)return!0;break;case "checkbox":case "radio":if(c.checked!==c.defaultChecked)return!0;break;default:if(c.value!==c.defaultValue)return!0}}return!1}function za(a){(a=a.h.elements)&&x(a,function(a){a.setCustomValidity("")})}function ya(a){y.apply(this,arguments)}n(ya,y);
function xa(a,b){this.h=a;this.L=b;this.I=null;this.Y=[]}n(xa,y);xa.prototype.ca=function(){var a=this,b=this.L().then(function(){return[]},function(a){return Ba(a)});return Ca(this,b).then(function(b){return Da(a,b)})};function Ca(a,b){if(!a.I){a.I=new ia;var c=function(){return a.I=null};a.I.then(c,c)}return a.I.add(b)}
function Da(a,b){function c(a){return b.every(function(b){return a.name!==b.name})}var d=[],e=a.Y;a.Y=b;for(var g=0;g<b.length;g++){var f=b[g],h=q().assertString(f.name,"Verification errors must have a name property");f=q().assertString(f.message,"Verification errors must have a message property");h=q().assertElement(a.h.querySelector('[name="'+h+'"]'),"Verification error name property must match a field name");h.checkValidity()&&(h.setCustomValidity(f),d.push(h))}var k=e.filter(c).map(function(b){return a.h.querySelector('[name="'+
b.name+'"]')});return{updatedElements:d.concat(k),errors:b}}function Ba(a){return(a=a.response)?a.json().then(function(a){return a.verifyErrors||[]},function(){return[]}):Promise.resolve([])};function Ea(){this.j=null}l=Ea.prototype;l.add=function(a){var b=this;this.j||(this.j=[]);this.j.push(a);return function(){b.remove(a)}};l.remove=function(a){this.j&&(a=this.j.indexOf(a),-1<a&&this.j.splice(a,1))};l.removeAll=function(){this.j&&(this.j.length=0)};l.fire=function(a){if(this.j)for(var b=this.j,c=0;c<b.length;c++)(0,b[c])(a)};l.getHandlerCount=function(){return this.j?this.j.length:0};function Fa(){this.X=new Ea}Fa.prototype.beforeSubmit=function(a){return this.X.add(a)};Fa.prototype.fire=function(a){this.X.fire(a)};function A(){var a=100;this.fa=a;this.P=this.W=0;this.K=Object.create(null)}A.prototype.has=function(a){return!!this.K[a]};A.prototype.get=function(a){var b=this.K[a];if(b)return b.access=++this.P,b.payload};A.prototype.put=function(a,b){this.has(a)||this.W++;this.K[a]={payload:b,access:this.P};if(!(this.W<=this.fa)){r().warn("lru-cache","Trimming LRU cache");a=this.K;var c=this.P+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var g=d}}void 0!==g&&(delete a[g],this.W--)}};var B=self.AMP_CONFIG||{},Ga={thirdParty:B.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:B.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof B.thirdPartyFrameRegex?new RegExp(B.thirdPartyFrameRegex):B.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:B.cdnUrl||"https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof B.cdnProxyRegex?new RegExp(B.cdnProxyRegex):B.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:B.errorReportingUrl||"https://amp-error-reporting.appspot.com/r",localDev:B.localDev||!1};var Ha=v({c:!0,v:!0,a:!0,ad:!0}),Ia,Ja,Ka=/[?&]amp_js[^&]*/,La=/[?&]amp_gsa[^&]*/,Ma=/[?&]amp_r[^&]*/,Na=/[?&]amp_kit[^&]*/,Oa=/[?&]usqp[^&]*/;
function C(a){var b;Ia||(Ia=self.document.createElement("a"),Ja=self.UrlCache||(self.UrlCache=new A));var c=b?null:Ja,d=Ia;if(c&&c.has(a))a=c.get(a);else{d.href=a;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;e.origin=
d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;c&&c.put(a,e);a=e}return a}function Qa(a,b,c){if(!b)return a;var d=a.split("#",2),e=d[0].split("?",2),g=e[0]+(e[1]?c?"?"+b+"&"+e[1]:"?"+e[1]+"&"+b:"?"+b);return g+=d[1]?"#"+d[1]:""}
function Ra(a){var b=[],c;for(c in a){var d=a[c];if(null!=d)if(Array.isArray(d))for(var e=0;e<d.length;e++){var g=d[e];b.push(encodeURIComponent(c)+"="+encodeURIComponent(g))}else e=d,b.push(encodeURIComponent(c)+"="+encodeURIComponent(e))}return b.join("&")}
function Sa(a){"string"==typeof a&&(a=C(a));var b=a;"string"==typeof b&&(b=C(b));if(!Ga.cdnProxyRegex.test(b.origin))return a.href;b=a.pathname.split("/");t(Ha[b[1]],"Unknown path prefix in url %s",a.href);var c=b[2],d="s"==c?"https://"+decodeURIComponent(b[3]):"http://"+decodeURIComponent(c);t(0<d.indexOf("."),"Expected a . in origin %s",d);b.splice(1,"s"==c?3:2);b=d+b.join("/");var e;e=(e=a.search)&&"?"!=e?(e=e.replace(Ka,"").replace(La,"").replace(Ma,"").replace(Na,"").replace(Oa,"").replace(/^[?&]/,
""))?"?"+e:"":"";return b+e+(a.hash||"")};function D(a,b){var c,d=a.ownerDocument.defaultView,e=d!=(d.__AMP_TOP||d);if(e){if(Ta(d,b)){var g=E(d,b);if(g)return g}if(!c)return null}a=F(a);a=G(a);return Ta(a,b)?E(a,b):null}function H(a,b){a=a.__AMP_TOP||a;return E(a,b)}function I(a,b){var c=F(a);c=G(c);return E(c,b)}function Ua(a,b){return Va(G(a),b)}function F(a){return a.nodeType?H((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function G(a){a=F(a);return a.isSingleDoc()?a.win:a}
function E(a,b){Ta(a,b);var c=Wa(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function Va(a,b){var c=Wa(a)[b];if(c){if(c.promise)return c.promise;E(a,b);return c.promise=Promise.resolve(c.obj)}return null}function Wa(a){var b=a.services;b||(b=a.services={});return b}function Ta(a,b){a=a.services&&a.services[b];return!(!a||!a.ctor&&!a.obj)};function Xa(a,b,c){var d=Ua(a,b);if(d)return d;var e=F(a);return e.whenBodyAvailable().then(function(){var a=e.win;var b=e.win.document.head;if(b){var d=[];b=b.querySelectorAll("script[custom-element]");for(var k=0;k<b.length;k++)d.push(b[k].getAttribute("custom-element"))}else d=[];a=d.includes(c)?H(a,"extensions").waitForExtension(a,c):Promise.resolve();return a}).then(function(){var d=e.win;if(d.ampExtendedElements&&d.ampExtendedElements[c]){d=G(a);var f=Va(d,b);if(!f){var h=new ga;f=h.promise;
h=h.resolve;Wa(d)[b]={obj:null,promise:f,resolve:h,context:null,ctor:null}}d=f}else d=null;return d})};function J(a){var b=a.elements,c=a.ownerDocument,d={},e=/^(?:input|select|textarea|button)$/i,g=/^(?:button|image|file|reset)$/i,f=/^(?:checkbox|radio)$/i;a={};for(var h=0;h<b.length;a={name:a.name},h++){var k=b[h],m=k,z=m.checked;a.name=m.name;var W=m.multiple,Cb=m.options,Pa=m.tagName,sa=m.type;m=m.value;!a.name||Ya(k)||!e.test(Pa)||g.test(sa)||f.test(sa)&&!z||(void 0===d[a.name]&&(d[a.name]=[]),W?x(Cb,function(a){return function(b){b.selected&&d[a.name].push(b.value)}}(a)):("submit"!=sa&&"BUTTON"!=
Pa||k==c.activeElement)&&d[a.name].push(m))}Object.keys(d).forEach(function(a){0==d[a].length&&delete d[a]});return d}function Ya(a){if(a.disabled)return!0;a=va(a);for(var b=0;b<a.length;b++)if(a[b].disabled)return!0;return!1};function Za(a,b){var c=H(a,"platform");return c.isIos()&&11==c.getMajorVersion()?new $a(b):FormData.prototype.entries&&FormData.prototype.delete?new K(b):new L(b)}function L(a){this.m=a?J(a):u()}L.prototype.append=function(a,b){var c=String(a);this.m[c]=this.m[c]||[];this.m[c].push(String(b))};L.prototype.delete=function(a){delete this.m[a]};
L.prototype.entries=function(){var a=this,b=[];Object.keys(this.m).forEach(function(c){a.m[c].forEach(function(a){return b.push([c,a])})});var c=0;return{next:function(){return c<b.length?{value:b[c++],done:!1}:{value:void 0,done:!0}}}};L.prototype.getFormData=function(){var a=this,b=new FormData;Object.keys(this.m).forEach(function(c){a.m[c].forEach(function(a){return b.append(c,a)})});return b};function K(a){this.o=new FormData(a)}K.prototype.append=function(a,b){this.o.append(a,b)};
K.prototype.delete=function(a){this.o.delete(a)};K.prototype.entries=function(){return this.o.entries()};K.prototype.getFormData=function(){return this.o};function $a(a){K.call(this,a);var b=this;a&&x(a.elements,function(a){"file"==a.type&&0==a.files.length&&(b.o.delete(a.name),b.o.append(a.name,new Blob([]),""))})}n($a,K);$a.prototype.append=function(a,b,c){b&&"object"==typeof b&&""==b.name&&0==b.size?this.o.append(a,new Blob([]),c||""):this.o.append(a,b)};var ab=["GET","POST"];
function bb(a,b){t(pa(a),"Object expected: %s",a);var c="document"==b;if(!c)return new Response(a.body,a.init);var d=u(),e={status:200,statusText:"OK",getResponseHeader:function(a){return d[String(a).toLowerCase()]||null}};if(a.init){var g=a.init;Array.isArray(g.headers)&&g.headers.forEach(function(a){var b=a[0],c=a[1];d[String(b).toLowerCase()]=String(c)});g.status&&(e.status=parseInt(g.status,10));g.statusText&&(e.statusText=String(g.statusText))}return new Response(a.body?String(a.body):"",e)}
;function M(a,b){var c="amp-form";this.D=a;this.B=b;this.la=c}M.prototype.isSupported=function(){var a=this.D.ampdoc;return a.isSingleDoc()&&a.getRootNode().documentElement.hasAttribute("allow-viewer-render-template")?this.D.hasCapability("viewerRenderTemplate"):!1};M.prototype.fetchAndRenderTemplate=function(a,b,c,d){c=void 0===c?null:c;d=void 0===d?{}:d;var e;c||(e=this.B.maybeFindTemplate(a));return this.D.sendMessageAwaitResponse("viewerRenderTemplate",cb(this,b,e,c,d))};
function cb(a,b,c,d,e){e=void 0===e?{}:e;var g=v({type:a.la}),f="successTemplate",h=d&&d[f]?d[f]:c;h&&(g[f]={type:"amp-mustache",payload:h.innerHTML});var k="errorTemplate",m=d&&d[k]?d[k]:null;m&&(g[k]={type:"amp-mustache",payload:m.innerHTML});e&&Object.assign(g,e);a=b.xhrUrl;c=b.fetchOpt;b=Object.assign({},c);if((d=c.body)&&"function"==typeof d.getFormData){c=c.body;b.headers["Content-Type"]="multipart/form-data;charset=utf-8";c=c.entries();d=[];for(e=c.next();!e.done;e=c.next())d.push(e.value);
b.body=d}return v({originalRequest:{input:a,init:b},ampComponent:g})}M.prototype.verifySsrResponse=function(a,b,c){b=bb(b,c.fetchOpt.responseType);c=c.fetchOpt;(b=b.headers.get("AMP-Access-Control-Allow-Source-Origin"))?(a=C(Sa(a.location.href)).origin,t(b==a,"Returned AMP-Access-Control-Allow-Source-Origin is not equal to the current: "+b+(" vs "+a))):c.requireAmpResponseSourceOrigin&&t(!1,"Response must contain the AMP-Access-Control-Allow-Source-Origin header")};function db(a,b,c,d){var e={detail:c};Object.assign(e,d);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,e);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!e.bubbles,!!e.cancelable,c);return a};var N,eb="Webkit webkit Moz moz ms O o".split(" ");function fb(a,b){void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")};function O(a,b){this.V=b;this.pa=I(a,"viewport");this.da=H(a.win,"vsync");this.T=null;this.S="";this.N=!1;this.C=a.win.document.createElement("div");fb(this.C,!1);this.C.classList.add("i-amphtml-validation-bubble");this.C.__BUBBLE_OBJ=this;a.getBody().appendChild(this.C)}O.prototype.isActiveOn=function(a){return this.N&&a==this.T};O.prototype.hide=function(){this.N&&(this.N=!1,this.T=null,this.S="",this.da.run({measure:void 0,mutate:gb},{bubbleElement:this.C}))};
O.prototype.show=function(a,b){if(!this.isActiveOn(a)||b!=this.S){this.N=!0;this.T=a;this.S=b;var c={message:b,targetElement:a,bubbleElement:this.C,viewport:this.pa,id:this.V};this.da.run({measure:hb,mutate:ib},c)}};function gb(a){a.bubbleElement.removeAttribute("aria-alert");a.bubbleElement.removeAttribute("role");for(var b=a.bubbleElement;b.firstChild;)b.removeChild(b.firstChild);fb(a.bubbleElement,!1)}function hb(a){a.targetRect=a.viewport.getLayoutRect(a.targetElement)}
function ib(a){for(var b=a.bubbleElement;b.firstChild;)b.removeChild(b.firstChild);var c=a.bubbleElement.ownerDocument.createElement("div");c.id="bubble-message-"+a.id;c.textContent=a.message;a.bubbleElement.setAttribute("aria-labeledby",c.id);a.bubbleElement.setAttribute("role","alert");a.bubbleElement.setAttribute("aria-live","assertive");a.bubbleElement.appendChild(c);fb(a.bubbleElement,!0);b=a.bubbleElement;a={top:a.targetRect.top-10+"px",left:a.targetRect.left+a.targetRect.width/2+"px"};for(var d in a){var e=
b,g=a[d];var f=e.style;var h=d;if(ta(h,"--"))f=h;else{N||(N=u());var k=N[h];if(!k){k=h;if(void 0===f[h]){var m=h.charAt(0).toUpperCase()+h.slice(1);b:{for(var z=0;z<eb.length;z++){var W=eb[z]+m;if(void 0!==f[W]){m=W;break b}}m=""}void 0!==f[m]&&(k=m)}N[h]=k}f=k}f&&(e.style[f]=g)}};var jb,kb,lb=0;function P(a){this.form=a;this.ampdoc=F(a);this.resources=I(a,"resources");this.root=this.ampdoc.getRootNode();this.M=null}l=P.prototype;l.report=function(){};l.onBlur=function(){};l.onInput=function(){};l.inputs=function(){return this.form.querySelectorAll("input,select,textarea")};l.fireValidityEventIfNecessary=function(){var a=this.M;this.M=this.form.checkValidity();if(a!==this.M){var b=db(this.form.ownerDocument.defaultView,this.M?"valid":"invalid",null,{bubbles:!0});this.form.dispatchEvent(b)}};
function mb(a){P.apply(this,arguments)}n(mb,P);mb.prototype.report=function(){this.form.reportValidity();this.fireValidityEventIfNecessary()};function Q(a){P.call(this,a);var b="i-amphtml-validation-bubble-"+lb++;this.H=new O(this.ampdoc,b)}n(Q,P);Q.prototype.report=function(){for(var a=this.inputs(),b=0;b<a.length;b++)if(!a[b].checkValidity()){a[b].focus();this.H.show(a[b],a[b].validationMessage);break}this.fireValidityEventIfNecessary()};Q.prototype.onBlur=function(a){"submit"!=a.target.type&&this.H.hide()};
Q.prototype.onInput=function(a){a=a.target;this.H.isActiveOn(a)&&(a.checkValidity()?(a.removeAttribute("aria-invalid"),this.H.hide()):(a.setAttribute("aria-invalid","true"),this.H.show(a,a.validationMessage)))};function R(a){P.call(this,a)}n(R,P);l=R.prototype;l.reportInput=function(a){var b=nb(a);b&&this.showValidationFor(a,b)};l.hideAllValidations=function(){for(var a=this.inputs(),b=0;b<a.length;b++)this.hideValidationFor(a[b])};
l.getValidationFor=function(a,b){if(!a.id)return null;var c="__AMP_VALIDATION_"+b;c in a||(a[c]=this.root.querySelector("[visible-when-invalid="+b+"]"+("[validation-for="+a.id+"]")));return a[c]};l.showValidationFor=function(a,b){var c=this.getValidationFor(a,b);c&&(c.textContent.trim()||(c.textContent=a.validationMessage),a.__AMP_VISIBLE_VALIDATION=c,this.resources.mutateElement(a,function(){return a.setAttribute("aria-invalid","true")}),this.resources.mutateElement(c,function(){return c.classList.add("visible")}))};
l.hideValidationFor=function(a){var b=this.getVisibleValidationFor(a);b&&(delete a.__AMP_VISIBLE_VALIDATION,this.resources.mutateElement(a,function(){return a.removeAttribute("aria-invalid")}),this.resources.mutateElement(b,function(){return b.classList.remove("visible")}))};l.getVisibleValidationFor=function(a){return a.__AMP_VISIBLE_VALIDATION};l.shouldValidateOnInteraction=function(){throw Error("Not Implemented");};
l.onInteraction=function(a){a=a.target;var b=!!a.checkValidity&&this.shouldValidateOnInteraction(a);this.hideValidationFor(a);b&&!a.checkValidity()&&this.reportInput(a)};l.onBlur=function(a){this.onInteraction(a)};l.onInput=function(a){this.onInteraction(a)};function ob(a){R.apply(this,arguments)}n(ob,R);ob.prototype.report=function(){this.hideAllValidations();for(var a=this.inputs(),b=0;b<a.length;b++)if(!a[b].checkValidity()){this.reportInput(a[b]);a[b].focus();break}this.fireValidityEventIfNecessary()};
ob.prototype.shouldValidateOnInteraction=function(a){return!!this.getVisibleValidationFor(a)};function S(a){R.apply(this,arguments)}n(S,R);S.prototype.report=function(){this.hideAllValidations();for(var a=null,b=this.inputs(),c=0;c<b.length;c++)b[c].checkValidity()||(a=a||b[c],this.reportInput(b[c]));a&&a.focus();this.fireValidityEventIfNecessary()};S.prototype.shouldValidateOnInteraction=function(a){return!!this.getVisibleValidationFor(a)};function pb(a){R.apply(this,arguments)}n(pb,R);
pb.prototype.shouldValidateOnInteraction=function(){return!0};pb.prototype.onInteraction=function(a){R.prototype.onInteraction.call(this,a);this.fireValidityEventIfNecessary()};function qb(a){S.apply(this,arguments)}n(qb,S);qb.prototype.shouldValidateOnInteraction=function(){return!0};qb.prototype.onInteraction=function(a){S.prototype.onInteraction.call(this,a);this.fireValidityEventIfNecessary()};
function rb(a){var b=a.getAttribute("custom-validation-reporting");switch(b){case "as-you-go":return new pb(a);case "show-all-on-submit":return new S(a);case "interact-and-submit":return new qb(a);case "show-first-on-submit":return new ob(a)}a.ownerDocument&&void 0===jb&&(jb=!!document.createElement("form").reportValidity);return jb?new mb(a):new Q(a)}
function nb(a){var b=["badInput"];for(c in a.validity)b.includes(c)||b.push(c);var c=b.filter(function(b){return!0===a.validity[b]});return c.length?c[0]:null};function sb(a){var b=a.ownerDocument.defaultView;b.FormProxy||(b.FormProxy=tb(b));var c=b.FormProxy,d=new c(a);"action"in d||ub(a,d);a.$p=d}
function tb(a){function b(a){this.h=a}var c=b.prototype,d=a.Object,e=d.prototype,g=[a.HTMLFormElement,a.EventTarget],f=g.reduce(function(a,b){for(b=b&&b.prototype;b&&b!==e&&!(0<=a.indexOf(b));)a.push(b),b=d.getPrototypeOf(b);return a},[]);f.forEach(function(b){var d={},g;for(g in b)if(d.property=a.Object.getOwnPropertyDescriptor(b,g),d.property&&g.toUpperCase()!=g&&!ta(g,"on")&&!e.hasOwnProperty.call(c,g)){if("function"==typeof d.property.value)d.method=d.property.value,c[g]=function(a){return function(){return a.method.apply(this.h,
arguments)}}(d);else{var f={};d.property.get&&(f.get=function(a){return function(){return a.property.get.call(this.h)}}(d));d.property.set&&(f.set=function(a){return function(b){return a.property.set.call(this.h,b)}}(d));a.Object.defineProperty(c,g,f)}d={method:d.method,property:d.property}}});return b}
function ub(a,b){var c=a.ownerDocument.defaultView.HTMLFormElement.prototype.cloneNode.call(a,!1),d={},e;for(e in c)if(d.name=e,!(d.name in b||d.name.toUpperCase()==d.name||ta(d.name,"on"))){d.desc=vb[d.name];var g=a[d.name];if(d.desc)if(d.desc.access==T){d.actual=void 0;if(g&&g.nodeType){var f=c=g,h=f.nextSibling;f=f.parentNode;f.removeChild(c);try{d.actual=a[d.name]}finally{f.insertBefore(c,h)}}else d.actual=g;Object.defineProperty(b,d.name,{get:function(a){return function(){return a.actual}}(d)})}else d.desc.access==
U&&(d.attr=d.desc.attr||d.name,Object.defineProperty(b,d.name,{get:function(c){return function(){var d=b.getAttribute(c.attr);return null==d&&void 0!==c.desc.def?c.desc.def:c.desc.type==wb?"true"===d:c.desc.type==xb?null!=d:c.desc.type==yb?(d=d||"",D(a,"url").parse(d).href):d}}(d),set:function(a){return function(c){a.desc.type==xb&&(c=c?"":null);null!=c?b.setAttribute(a.attr,c):b.removeAttribute(a.attr)}}(d)}));else Object.defineProperty(b,d.name,{get:function(b){return function(){return a[b.name]}}(d),
set:function(b){return function(c){a[b.name]=c}}(d)});d={actual:d.actual,attr:d.attr,desc:d.desc,name:d.name}}}
var U=1,T=2,yb=1,wb=2,xb=3,vb={acceptCharset:{access:U,attr:"accept-charset"},accessKey:{access:U,attr:"accesskey"},action:{access:U,type:yb},attributes:{access:T},autocomplete:{access:U,def:"on"},children:{access:T},dataset:{access:T},dir:{access:U},draggable:{access:U,type:wb,def:!1},elements:{access:T},encoding:{access:T},enctype:{access:U},hidden:{access:U,type:xb,def:!1},id:{access:U,def:""},lang:{access:U},localName:{access:T},method:{access:U,def:"get"},name:{access:U},noValidate:{access:U,
attr:"novalidate",type:xb,def:!1},prefix:{access:T},spellcheck:{access:U},style:{access:T},target:{access:U,def:""},title:{access:U},translate:{access:U}};function zb(a,b){var c='form.amp-form-submit-error [submit-error],form.amp-form-submit-success [submit-success],form.amp-form-submitting [submitting]{display:block}.i-amphtml-validation-bubble{-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%);background-color:#fff;box-shadow:0 5px 15px 0 rgba(0,0,0,0.5);max-width:200px;position:absolute;display:block;box-sizing:border-box;padding:10px;border-radius:5px}.i-amphtml-validation-bubble:after{content:" ";position:absolute;bottom:-8px;left:30px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}[visible-when-invalid]{color:red}\n/*# sourceURL=/extensions/amp-form/0.1/amp-form.css*/',
d=!1,e="amp-form",g=a.getHeadNode(),f=Ab(g,Bb(g,c),d||!1,e||null);if(b){var h=a.getRootNode();if(Db(h,f))b(f);else var k=setInterval(function(){Db(h,f)&&(clearInterval(k),b(f))},4)}}
function Ab(a,b,c,d){var e=a.__AMP_CSS_SM;e||(e=a.__AMP_CSS_SM=u());var g=!c&&d&&"amp-custom"!=d&&"amp-keyframes"!=d,f=c?"amp-runtime":g?"amp-extension="+d:null;if(f){var h=Eb(a,e,f);if(h)return h.textContent!==b&&(h.textContent=b),h}var k=(a.ownerDocument||a).createElement("style");k.textContent=b;var m=null;c?k.setAttribute("amp-runtime",""):g?(k.setAttribute("amp-extension",d||""),m=Eb(a,e,"amp-runtime")):(d&&k.setAttribute(d,""),m=a.lastChild);b=m;a.insertBefore(k,b?b.nextSibling:a.firstChild);
f&&(e[f]=k);return k}function Eb(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null}function Bb(a,b){return(a=a.__AMP_CSS_TR)?a(b):b}function Db(a,b){var c=a.styleSheets;for(a=0;a<c.length;a++){var d=c[a];if(d.ownerNode==b)return!0}return!1};function Fb(a,b,c){Xa(a,"amp-analytics-instrumentation","amp-analytics").then(function(d){d&&d.triggerEventForTarget(a,b,c)})};var Gb=["amp-selector"];
function Hb(a,b){var c=this;try{sb(a)}catch(g){r().error("amp-form","form proxy failed to install",g)}a.__AMP_FORM=this;this.V=b;this.l=a.ownerDocument.defaultView;this.na=H(this.l,"timer");this.ba=D(a,"url-replace");this.U=null;this.h=a;this.B=H(this.l,"templates");this.ta=H(this.l,"xhr");this.J=D(this.h,"action");this.$=I(this.h,"resources");this.D=I(this.h,"viewer");this.G=new M(this.D,this.B);this.w=(this.h.getAttribute("method")||"GET").toUpperCase();this.ma=this.h.getAttribute("target");this.F=
Ib(this,"action-xhr");this.sa=Ib(this,"verify-xhr");this.aa=!this.h.hasAttribute("novalidate");this.h.setAttribute("novalidate","");this.aa||this.h.setAttribute("amp-novalidate","");this.h.classList.add("i-amphtml-form");this.A="initial";b=this.h.elements;for(var d=0;d<b.length;d++){var e=b[d].name;t("__amp_source_origin"!=e&&"__amp_form_verify"!=e,"Illegal input name, %s found: %s",e,b[d])}this.O=rb(this.h);this.oa=wa(this.h,function(){return Jb(c)});this.J.installActionHandler(this.h,this.ea.bind(this),
100);Kb(this);Lb(this);this.ja=this.ra=null;this.ga=I(a,"form-submit-service")}function Ib(a,b){var c=a.h.getAttribute(b);if(c){var d=D(a.h,"url");d.assertHttpsUrl(c,a.h,b);t(!d.isProxyOrigin(c),"form %s should not be on AMP CDN: %s",b,a.h)}return c}l=Hb.prototype;
l.requestForFormFetch=function(a,b,c,d){var e="GET"==b||"HEAD"==b;if(e){Mb(this);var g=J(this.h);d&&d.forEach(function(a){delete g[a]});c&&ra(g,c);var f=Qa(a,Ra(g))}else{f=a;var h=Za(this.l,this.h);d&&d.forEach(function(a){h.delete(a)});for(var k in c)h.append(k,c[k])}return{xhrUrl:f,fetchOpt:v({body:h,method:b,credentials:"include",headers:v({Accept:"application/json"})})}};l.setXhrAction=function(a){this.F=a};
l.ea=function(a){var b=this;if("submit"==a.method)return Nb(this).then(function(){var c=a;return"submitting"!=b.A&&Ob(b)?Pb(b,c.trust,null):Promise.resolve(null)});"clear"===a.method&&Qb(this);return null};function Nb(a){if(a.U)return a.U;var b=a.h.querySelectorAll(Gb.join(",")),c=oa(b).map(function(a){return a.whenBuilt()});return a.U=Rb(a,c,2E3)}
function Kb(a){a.D.whenNextVisible().then(function(){var b=a.h.querySelector("[autofocus]");if(b)try{b.focus()}catch(c){}});a.h.addEventListener("submit",a.ha.bind(a),!0);a.h.addEventListener("blur",function(b){Sb(b.target);a.O.onBlur(b)},!0);a.G.isSupported()||a.h.addEventListener("change",function(b){a.oa.onCommit().then(function(c){var d=c.updatedElements,e=c.errors;d.forEach(Sb);a.O.onBlur(b);"verifying"===a.A&&(e.length?(V(a,"verify-error"),X(a,{verifyErrors:e}).then(function(){Y(a,"verify-error",
e)})):V(a,"initial"))})});a.h.addEventListener("input",function(b){Sb(b.target);a.O.onInput(b)})}function Lb(a){Xa(a.h,"inputmask","amp-inputmask").then(function(a){a&&a.install()})}function Tb(a,b){Ub(a,"Form analytics not supported");var c=v({}),d=J(a.h),e;for(e in d)Object.prototype.hasOwnProperty.call(d,e)&&(c["formFields["+e+"]"]=d[e].join(","));c.formId=a.h.id;Fb(a.h,b,c)}
function Qb(a){a.h.reset();V(a,"initial");a.h.classList.remove("user-valid");a.h.classList.remove("user-invalid");var b=a.h.querySelectorAll(".user-valid, .user-invalid");x(b,function(a){a.classList.remove("user-valid");a.classList.remove("user-invalid")});var c=a.h.querySelectorAll(".visible[validation-for]");x(c,function(a){a.classList.remove("visible")});Vb(a.h)}
l.ha=function(a){if("submitting"==this.A||!Ob(this))return a.stopImmediatePropagation(),a.preventDefault(),Promise.resolve(null);(this.F||"POST"==this.w)&&a.preventDefault();return Pb(this,100,a)};
function Pb(a,b,c){try{var d={form:a.h,actionXhrMutator:a.setXhrAction.bind(a)};a.ga.fire(d)}catch(h){r().error("amp-form","Form submit service failed: %s",h)}var e=Wb(a),g=a.h.getElementsByClassName("i-amphtml-async-input");if(!a.F&&"GET"==a.w){Ub(a,"Non-XHR GETs not supported.");Mb(a);if(0===g.length){for(c=0;c<e.length;c++)a.ba.expandInputValueSync(e[c]);Xb(a,!1);return Promise.resolve()}c.preventDefault()}V(a,"submitting");var f=[];f.push(Yb(a,e));x(g,function(b){f.push(Zb(a,b))});return Rb(a,
f,1E4).then(function(){if(a.F)var c=$b(a,b);else"POST"==a.w?t(!1,"Only XHR based (via action-xhr attribute) submissions are supported for POST requests. %s",a.h):"GET"==a.w&&Xb(a,!0),c=Promise.resolve();return c},function(b){return ac(a,b)})}function Wb(a){return a.h.querySelectorAll('[type="hidden"][data-amp-replace]')}function ac(a,b){V(a,"submit-error");r().error("amp-form","Form submission failed: %s",b);var c=v({error:b.message});X(a,c).then(function(){Y(a,"submit-error",b)})}
function Jb(a){if("submitting"===a.A)return Promise.resolve();V(a,"verifying");Y(a,"verify",null);return Yb(a,Wb(a)).then(function(){return bc(a)})}function $b(a,b){a.G.isSupported()?b=cc(a,b):(dc(a,b),b=a.L(a.F,a.w).then(function(b){return ec(a,b)},function(b){return fc(a,b)}));return b}
function cc(a,b){var c,d=J(a.h);return X(a,d).then(function(){a.J.trigger(a.h,"submit",null,b)}).then(function(){var b=c=a.requestForFormFetch(a.F,a.w),d=c.fetchOpt||{};var f=d.method;void 0===f?f="GET":(f=f.toUpperCase(),ab.includes(f));d.method=f;d.headers=d.headers||v({});b.fetchOpt=d;b=c;var h=a.l;f=c.xhrUrl;d=c.fetchOpt;!1===d.ampCors&&(d.requireAmpResponseSourceOrigin=!1);!0===d.requireAmpResponseSourceOrigin&&r().error("XHR","requireAmpResponseSourceOrigin is deprecated, use ampCors instead");
void 0===d.requireAmpResponseSourceOrigin&&(d.requireAmpResponseSourceOrigin=!0);h=h.origin||C(h.location.href).origin;f=C(f).origin;h==f&&(d.headers=d.headers||{},d.headers["AMP-Same-Origin"]="true");b.fetchOpt=d;b=c;d=c.xhrUrl;if(!1!==c.fetchOpt.ampCors){f=a.l;h=C(d).search;var k=Object.create(null);if(h)for(var m;m=ma.exec(h);){var z=la(m[1],m[1]);m=m[2]?la(m[2],m[2]):"";k[z]=m}t(!("__amp_source_origin"in k),"Source origin is not allowed in %s",d);f=C(Sa(f.location.href)).origin;f=encodeURIComponent("__amp_source_origin")+
"="+encodeURIComponent(f);d=Qa(d,f,void 0)}b.xhrUrl=d;return a.G.fetchAndRenderTemplate(a.h,c,gc(a))}).then(function(b){return hc(a,b,c)},function(b){return ic(a,b)})}function gc(a){var b=a.h.querySelector("div[submit-success]"),c=a.h.querySelector("div[submit-error]"),d,e;b&&(d=a.B.maybeFindTemplate(b));c&&(e=a.B.maybeFindTemplate(c));return{successTemplate:d,errorTemplate:e}}
function ic(a,b){V(a,"submit-error");q().error("amp-form","Form submission failed: %s",b);return ha(function(){X(a,b||{}).then(function(){Y(a,"submit-error",b)})})}function dc(a,b){Tb(a,"amp-form-submit");var c=J(a.h);X(a,c).then(function(){a.J.trigger(a.h,"submit",null,b)})}function Yb(a,b){for(var c=[],d=0;d<b.length;d++)c.push(a.ba.expandInputValueAsync(b[d]));return Rb(a,c,100)}
function Zb(a,b){return b.getImpl().then(function(a){return a.getValue()}).then(function(c){var d=b.getAttribute("name");d=a.h.querySelector("input[name="+String(d).replace(ja,ka)+"]");if(!d){d=v({name:b.getAttribute("name"),hidden:"true"});var e=a.l.document.createElement("input"),g;for(g in d)e.setAttribute(g,d[g]);d=e}d.setAttribute("value",c);a.h.appendChild(d)})}
function bc(a){var b=oa(a.h.querySelectorAll("["+"no-verify".replace(ja,ka)+"]")),c=b.map(function(a){return a.name||a.id}),d={};return a.L(a.sa,a.w,(d.__amp_form_verify=!0,d),c)}l.L=function(a,b,c,d){Ub(this,"XHRs should be proxied.");a=this.requestForFormFetch(a,b,c,d);return this.ta.fetch(a.xhrUrl,a.fetchOpt)};function hc(a,b,c){a.G.verifySsrResponse(a.l,b,c);return jc(a,ha(function(){return b.html}))}
function ec(a,b){return jc(a,b.json()).then(function(){Tb(a,"amp-form-submit-success");kc(a,b)})}function jc(a,b){return b.then(function(b){V(a,"submit-success");X(a,b||{}).then(function(){Y(a,"submit-success",b)})},function(a){q().error("amp-form","Failed to parse response JSON: %s",a)})}
function fc(a,b){return(b&&b.response?b.response.json().catch(function(){return null}):Promise.resolve(null)).then(function(c){Tb(a,"amp-form-submit-error");V(a,"submit-error");X(a,c||{}).then(function(){Y(a,"submit-error",c)});kc(a,b.response);q().error("amp-form","Form submission failed: %s",b)})}function Xb(a,b){Tb(a,"amp-form-submit");b&&a.h.submit();V(a,"initial")}function Ub(a,b){var c=a.G.isSupported();t(!1===c,"[amp-form]: viewerRenderTemplate | %s",b)}
function Mb(a){var b=a.h.querySelectorAll("input[type=password],input[type=file]");t(0==b.length,"input[type=password] or input[type=file] may only appear in form[method=post]")}function Ob(a){void 0===kb&&(kb=!!a.l.document.createElement("input").checkValidity);if(kb){var b=lc(a.h);if(a.aa)return a.O.report(),b}return!0}
function kc(a,b){Ub(a,"Redirects not supported.");if(b&&b.headers){var c=b.headers.get("AMP-Redirect-To");if(c){t("_blank"!=a.ma,"Redirecting to target=_blank using AMP-Redirect-To is currently not supported, use target=_top instead. %s",a.h);try{var d=D(a.h,"url");d.assertAbsoluteHttpOrHttpsUrl(c);d.assertHttpsUrl(c,"AMP-Redirect-To","Url")}catch(e){t(!1,"The `AMP-Redirect-To` header value must be an absolute URL starting with https://. Found %s",c)}I(a.h,"navigation").navigateTo(a.l,c,"AMP-Redirect-To")}}}
function Y(a,b,c){c=db(a.l,"amp-form."+b,v({response:c}));a.J.trigger(a.h,b,c,100)}function Rb(a,b,c){return Promise.race([Promise.all(b),a.na.promise(c)])}
function V(a,b){var c=a.A;a.h.classList.remove("amp-form-"+c);a.h.classList.add("amp-form-"+b);var d=a.h.querySelector("["+c+"]");if(d){if(null==w){var e=d.ownerDocument;try{var g=e.createElement("div"),f=e.createElement("div");g.appendChild(f);w=g.querySelector(":scope div")===f}catch(h){w=!1}}w?d=d.querySelector(":scope > [i-amphtml-rendered]"):(d.classList.add("i-amphtml-scoped"),e=d.querySelectorAll(".i-amphtml-scoped > [i-amphtml-rendered]"),d.classList.remove("i-amphtml-scoped"),d=void 0===
e[0]?null:e[0]);d&&d.parentElement&&d.parentElement.removeChild(d)}a.A=b}
function X(a,b){var c=a.h.querySelector("["+a.A+"]"),d=Promise.resolve();if(c){var e="rendered-message-"+a.V;c.setAttribute("role","alert");c.setAttribute("aria-labeledby",e);c.setAttribute("aria-live","assertive");a.B.hasTemplate(c)?d=a.B.findAndRenderTemplate(c,b).then(function(b){b.id=e;b.setAttribute("i-amphtml-rendered","");return a.$.mutateElement(c,function(){c.appendChild(b);var d=db(a.l,"amp:dom-update",null,{bubbles:!0});c.dispatchEvent(d)})}):a.$.mutateElement(c,function(){})}return d}
l.ua=function(){return this.ja};l.wa=function(){return this.ra};function lc(a){x(a.querySelectorAll("input,select,textarea,fieldset"),function(a){return Z(a)});return Z(a)}function Vb(a){var b=document.createElement("input"),c={},d;for(d in b.validity){c.validityState=d;var e=a.querySelectorAll("."+String(c.validityState).replace(ja,ka));x(e,function(a){return function(b){b.classList.remove(a.validityState)}}(c));c={validityState:c.validityState}}}
function Z(a,b){b=void 0===b?!1:b;if(!a.checkValidity)return!0;var c=!1,d=a.classList.contains("user-valid")?"valid":a.classList.contains("user-invalid")?"invalid":"none",e=a.checkValidity();"valid"!=d&&e?(a.classList.add("user-valid"),a.classList.remove("user-invalid"),c="invalid"==d):"invalid"==d||e||(a.classList.add("user-invalid"),a.classList.remove("user-valid"),c=!0);if(a.validity)for(var g in a.validity)a.classList.toggle(g,a.validity[g]);if(b&&c){g=va(a);for(var f=0;f<g.length;f++)Z(g[f]);
a.form&&Z(a.form)}return e}function Sb(a){Z(a,!0)}function mc(a){this.qa=nc(a).then(function(){return oc(a)})}mc.prototype.whenInitialized=function(){return this.qa};function nc(a){var b=new ga;zb(a,b.resolve);return b.promise}function oc(a){return a.whenReady().then(function(){pc(a.getRootNode().querySelectorAll("form"));qc(a.getRootNode())})}function pc(a){a&&x(a,function(a,c){var b=a.__AMP_FORM||null;b||new Hb(a,"amp-form-"+c)})}
function qc(a){a.addEventListener("amp:dom-update",function(){pc(a.querySelectorAll("form"))})}(function(a){a.registerServiceForDoc("form-submit-service",Fa);a.registerServiceForDoc("amp-form",mc)})(self.AMP);
})});
//# sourceMappingURL=amp-form-0.1.js.map

