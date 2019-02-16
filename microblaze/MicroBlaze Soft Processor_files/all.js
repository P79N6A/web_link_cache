(function(e){e.WCM=e.WCM||{};
e.WCM.Image=e.WCM.Image||function(){var g={};
var f={MAP_SELECTOR:".cq-wcm-foundation-image-map"};
g.handleResize=function(){var h=document.querySelectorAll(f.MAP_SELECTOR);
Array.prototype.forEach.call(h,function(l){if(!l.getAttribute("usemap")){return
}var k=l.getAttribute("src"),j=document.createElement("img");
j.addEventListener("load",function(){var o=l.getAttribute("width")||l.naturalWidth,n=l.getAttribute("height")||l.naturalHeight;
if(!o||!n){var r=new Image();
r.src=k;
if(!o){o=r.width
}if(!n){n=r.height
}}var p=l.offsetWidth/100,m=l.offsetHeight/100,s=l.getAttribute("usemap");
s=s.replace("#","");
var t=document.querySelectorAll('map[name="'+s+'"]');
Array.prototype.forEach.call(t,function(v){var u=v.querySelectorAll("area");
Array.prototype.forEach.call(u,function(x){if(!x.dataset.coords){x.dataset.coords=x.getAttribute("coords")
}var z=x.dataset.coords.split(","),y=new Array(z.length);
for(var w=0;
w<z.length;
++w){if(w%2==0){y[w]=parseInt(((z[w]/o)*100)*p)
}else{y[w]=parseInt(((z[w]/n)*100)*m)
}}x.setAttribute("coords",y.toString())
})
})
});
j.setAttribute("src",k)
})
};
return g
}();
var d=window.addEventListener||window.attachEvent,c=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,b={attributes:true},a=new c(function(f){f.forEach(function(){e.WCM.Image.handleResize()
})
});
d("resize",e.WCM.Image.handleResize);
a.observe(document,b);
e.WCM.Image.handleResize()
})(CQ);
(function(a){a.fn.rwdImageMaps=function(){var c=this;
var b=function(){c.each(function(){if(typeof(a(this).attr("usemap"))=="undefined"){return
}var e=this,d=a(e);
a("<img />").on("load",function(){var g="width",n="height",o=d.attr(g),k=d.attr(n);
if(!o||!k){var p=new Image();
p.src=d.attr("src");
if(!o){o=p.width
}if(!k){k=p.height
}}var f=d.width()/100,l=d.height()/100,j=d.attr("usemap").replace("#",""),m="coords";
a('map[name="'+j+'"]').find("area").each(function(){var t=a(this);
if(!t.data(m)){t.data(m,t.attr(m))
}var s=t.data(m).split(","),r=new Array(s.length);
for(var h=0;
h<r.length;
++h){if(h%2===0){r[h]=parseInt(((s[h]/o)*100)*f)
}else{r[h]=parseInt(((s[h]/k)*100)*l)
}}t.attr(m,r.toString())
})
}).attr("src",d.attr("src"))
})
};
a(window).resize(b).trigger("resize");
return this
}
})(jQuery);
(function(a,f){var e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,d={attributes:true},c=new e(function(g){g.forEach(function(){b()
})
});
f(function(){b();
c.observe(a.documentElement,d)
});
function b(){f("div[id^='cq-image-jsp-']").each(function(g,h){f("img[usemap]",h).rwdImageMaps()
})
}})(document,$CQ);
(function(a){a(function(){function c(g,h){try{if(a.cq.isAuthor()||window.location.hash=="#debug"){if(typeof console!="undefined"&&typeof console.log!="undefined"){console.log(g);
console.log(h)
}alert(g.name+":\n"+g.message+".\n"+h+".")
}}catch(j){}}try{var d=a.browser.msie?0:250;
function b(g){try{if(window.location.hash.length>0&&a(window.location.hash,g).length>0){window.location=(window.location+"").replace(window.location.hash,"")
}}catch(h){c(h,"Could not remove hash")
}}try{a(".cq-carousel").each(function(){var w=a(this);
var g=+a("var[title='play-delay']",this).text();
if(!g){g=6000
}var k=+a("var[title='transition-time']",this).text();
if(!k){k=1000
}var u=a(".cq-carousel-banners",this);
var o=a(".cq-carousel-banner-switch",this);
var v=o.find("a");
var p=a(".cq-carousel-banner-item",this);
var e=p.outerWidth();
var r=p.filter(":first");
var m=null;
var h=null;
var l=0;
var n=a("a.cq-carousel-control-prev",this);
n.click(function(){if(n.is(".cq-carousel-active")){a(v[(l+v.length-1)%v.length]).click()
}return false
});
var t=a("a.cq-carousel-control-next",this);
t.click(function(){if(t.is(".cq-carousel-active")){a(v[(l+1)%v.length]).click()
}return false
});
if(v.length>1){t.addClass("cq-carousel-active")
}function j(){s();
if(g>0){h=setInterval(function(){a(v[(l+1)%v.length]).click()
},g)
}}function s(){if(h!==null){clearInterval(h);
h=null
}}if(d||a.browser.version>6){r.css("left",0)
}else{r.show()
}v.click(function(){var z=a(this);
var x=p.filter(z.attr("href"));
var y=x.prevAll().length;
var A=(y>l||h!==null)?1:-1;
if(!z.is(".cq-carousel-active")){v.removeClass("cq-carousel-active");
z.addClass("cq-carousel-active");
if(r.is(":animated")){r.stop(true,true);
m.stop(true,true)
}if(d){x.css({left:A*e}).animate({left:0,opacity:1},k);
r.animate({left:-A*e,opacity:0},k)
}else{if(a.browser.version>6){x.css({left:A*e,opacity:1}).animate({left:0},k);
r.animate({left:-A*e},k)
}else{x.fadeIn();
r.fadeOut()
}}m=r;
r=x;
l=y;
if(l>0){n.addClass("cq-carousel-active")
}else{n.removeClass("cq-carousel-active")
}if(l<v.length-1){t.addClass("cq-carousel-active")
}else{t.removeClass("cq-carousel-active")
}}return false
}).each(function(){var x=a(this);
x.attr("title",x.text())
}).filter(":first").addClass("cq-carousel-active");
j();
w.hover(function(){s();
n.fadeIn();
t.fadeIn()
},function(){j();
n.fadeOut();
t.fadeOut()
});
b(this)
})
}catch(f){c(f,"Could not initialize the banners")
}}catch(f){c(f,"Init failed")
}})
})($CQ||$);
(function(d){var b=d.event,a,c;
a=b.special.debouncedresize={setup:function(){d(this).on("resize",a.handler)
},teardown:function(){d(this).off("resize",a.handler)
},handler:function(j,e){var h=this,g=arguments,f=function(){j.type="debouncedresize";
b.dispatch.apply(h,g)
};
if(c){clearTimeout(c)
}e?f():c=setTimeout(f,a.threshold)
},threshold:150}
})($CQ);
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
;
window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");
g.id="mq-test-1";
g.style.cssText="position:absolute;top:-100em";
d.style.background="none";
d.appendChild(g);
return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';
a.insertBefore(d,b);
c=g.offsetWidth===42;
a.removeChild(d);
return{matches:c,media:h}
}
}(document));
(function(b,a){a.picturefill=function(c){var d;
if(c===d){c=b("body")
}b("div[data-picture]",c).each(function(){var f=this;
var g=[];
b("div[data-media]",f).each(function(){var j=b(this).attr("data-media");
if(!j||(a.matchMedia&&a.matchMedia(j).matches)){g.push(this)
}});
var e=b("img",f).first();
if(g.length){if(e.size()===0){var h=b(f);
e=b("<img />").attr("alt",h.attr("data-alt")).appendTo(h)
}e.attr("src",g.pop().getAttribute("data-src"))
}else{e.remove()
}})
};
b(function(){a.picturefill()
});
b(a).on("debouncedresize",function(){a.picturefill()
})
}($CQ,this));
function cq5forms_isArray(a){if(Array.isArray){return Array.isArray(a)
}else{return Object.prototype.toString.call(a)==="[object Array]"
}}function cq5forms_isNodeList(b){var a=Object.prototype.toString.call(b);
return typeof b==="object"&&/^\[object (HTMLCollection|NodeList|RadioNodeList)\]$/.test(a)&&(typeof b.length==="number")&&(b.length===0||(typeof b[0]==="object"&&b[0].nodeType>0))
}function cq5forms_showMsg(e,c,d,a){var b=document.forms[e].elements[c];
alert(d);
if(cq5forms_isNodeList(b)){b=Array.prototype.slice.call(b)
}if(cq5forms_isArray(b)){if(!a){a=0
}b[a].focus()
}else{b.focus()
}}function cq5forms_isEmpty(b){if(b===undefined){return false
}var a=true;
if(cq5forms_isNodeList(b)){b=Array.prototype.slice.call(b)
}if(cq5forms_isArray(b)){for(i=0;
i<b.length;
i++){if(b[i].type=="radio"||b[i].type=="checkbox"){if(b[i].checked){a=false
}}else{if(b[i].localName=="option"){if(b[i].selected){a=false
}}else{if(b[i].value.length>0){a=false
}}}}}else{if(b.type=="radio"||b.type=="checkbox"){if(b.checked){a=false
}}else{if(b.value.length>0){a=false
}}}return a
}function cq5forms_regcheck(f,d){var b=false;
var c=d.exec(f);
if(c){var a=f.length;
var e=c[0].length;
b=(e==a)
}return b
}function cq5forms_multiResourceChange(a,b,c){if(!c){if(!a){a=window.event
}if(a.keyCode<48&&a.keyCode!=8&&a.keyCode!=46){return
}}try{document.getElementById(b).checked=true
}catch(d){}}(function(l){var D,u,c,n,h,k,C,m,d,H,a,j,x,E,G,t,b,o,w,e,v,y,I,p,s,g,z,A,B,r,F,f=[].indexOf||function(L){for(var K=0,J=this.length;
K<J;
K++){if(K in this&&this[K]===L){return K
}}return -1
};
G=null;
if(typeof WorkerGlobalScope!=="undefined"&&self instanceof WorkerGlobalScope){G=self
}else{if(typeof global!=="undefined"){G=global
}else{G=window
}}y=G.document;
u="before";
D="after";
x="readyState";
j="addEventListener";
a="removeEventListener";
k="dispatchEvent";
w="XMLHttpRequest";
h="fetch";
C="FormData";
E=["load","loadend","loadstart"];
c=["progress","abort","error","timeout"];
B=typeof navigator!=="undefined"&&navigator.useragent?navigator.userAgent:"";
s=parseInt((/msie (\d+)/.exec(B.toLowerCase())||[])[1]);
if(isNaN(s)){s=parseInt((/trident\/.*; rv:(\d+)/.exec(B.toLowerCase())||[])[1])
}(F=Array.prototype).indexOf||(F.indexOf=function(M){var L,J,N,K;
for(L=N=0,K=this.length;
N<K;
L=++N){J=this[L];
if(J===M){return L
}}return -1
});
A=function(J,K){return Array.prototype.slice.call(J,K)
};
v=function(J){return J==="returnValue"||J==="totalSize"||J==="position"
};
p=function(M,N){var K,J;
for(K in M){J=M[K];
if(v(K)){continue
}try{N[K]=M[K]
}catch(L){}}return N
};
g=function(J){if(J===void 0){return null
}return J
};
z=function(K,O,P){var L,N,M,J;
N=function(Q){return function(S){var U,R,T;
U={};
for(R in S){if(v(R)){continue
}T=S[R];
U[R]=T===O?P:T
}return P[k](Q,U)
}
};
for(M=0,J=K.length;
M<J;
M++){L=K[M];
if(P._has(L)){O["on"+L]=N(L)
}}};
I=function(J){var L;
if(y&&(y.createEventObject!=null)){L=y.createEventObject();
L.type=J;
return L
}else{try{return new Event(J)
}catch(K){return{type:J}
}}};
n=function(J){var M,K,L;
K={};
L=function(N){return K[N]||[]
};
M={};
M[j]=function(O,P,N){K[O]=L(O);
if(K[O].indexOf(P)>=0){return
}N=N===l?K[O].length:N;
K[O].splice(N,0,P)
};
M[a]=function(O,P){var N;
if(O===l){K={};
return
}if(P===l){K[O]=[]
}N=L(O).indexOf(P);
if(N===-1){return
}L(O).splice(N,1)
};
M[k]=function(){var O,R,P,Q,U,T,N,S;
O=A(arguments);
R=O.shift();
if(!J){O[0]=p(O[0],I(R))
}Q=M["on"+R];
if(Q){Q.apply(M,O)
}S=L(R).concat(L("*"));
for(P=T=0,N=S.length;
T<N;
P=++T){U=S[P];
U.apply(M,O)
}};
M._has=function(N){return !!(K[N]||M["on"+N])
};
if(J){M.listeners=function(N){return A(L(N))
};
M.on=M[j];
M.off=M[a];
M.fire=M[k];
M.once=function(P,O){var N;
N=function(){M.off(P,N);
return O.apply(null,arguments)
};
return M.on(P,N)
};
M.destroy=function(){return K={}
}
}return M
};
r=n(true);
r.EventEmitter=n;
r[u]=function(K,J){if(K.length<1||K.length>2){throw"invalid hook"
}return r[j](u,K,J)
};
r[D]=function(K,J){if(K.length<2||K.length>3){throw"invalid hook"
}return r[j](D,K,J)
};
r.enable=function(){G[w]=o;
if(typeof t==="function"){G[h]=t
}if(d){G[C]=b
}};
r.disable=function(){G[w]=r[w];
G[h]=r[h];
if(d){G[C]=d
}};
e=r.headers=function(P,S){var O,K,L,J,T,R,M,Q,N;
if(S==null){S={}
}switch(typeof P){case"object":K=[];
for(L in P){T=P[L];
J=L.toLowerCase();
K.push(""+J+":\t"+T)
}return K.join("\n")+"\n";
case"string":K=P.split("\n");
for(M=0,Q=K.length;
M<Q;
M++){O=K[M];
if(/([^:]+):\s*(.+)/.test(O)){J=(N=RegExp.$1)!=null?N.toLowerCase():void 0;
R=RegExp.$2;
if(S[J]==null){S[J]=R
}}}return S
}};
d=G[C];
b=function(K){var J;
this.fd=K?new d(K):new d();
this.form=K;
J=[];
Object.defineProperty(this,"entries",{get:function(){var L;
L=!K?[]:A(K.querySelectorAll("input,select")).filter(function(N){var M;
return((M=N.type)!=="checkbox"&&M!=="radio")||N.checked
}).map(function(M){return[M.name,M.type==="file"?M.files:M.value]
});
return L.concat(J)
}});
this.append=(function(L){return function(){var M;
M=A(arguments);
J.push(M);
return L.fd.append.apply(L.fd,M)
}
})(this)
};
if(d){r[C]=d;
G[C]=b
}H=G[w];
r[w]=H;
o=G[w]=function(){var N,ad,S,Q,aa,W,P,M,Y,U,O,J,V,Z,X,L,ac,R,K,ab,T;
N=-1;
R=new r[w]();
O={};
Z=null;
P=void 0;
X=void 0;
J=void 0;
U=function(){var af,ae,ah,ag;
J.status=Z||R.status;
if(!(Z===N&&s<10)){J.statusText=R.statusText
}if(Z!==N){ag=e(R.getAllResponseHeaders());
for(af in ag){ah=ag[af];
if(!J.headers[af]){ae=af.toLowerCase();
J.headers[ae]=ah
}}}};
Y=function(){if(!R.responseType||R.responseType==="text"){J.text=R.responseText;
J.data=R.responseText;
try{J.xml=R.responseXML
}catch(ae){}}else{if(R.responseType==="document"){J.xml=R.responseXML;
J.data=R.responseXML
}else{J.data=R.response
}}if("responseURL" in R){J.finalUrl=R.responseURL
}};
ac=function(){W.status=J.status;
W.statusText=J.statusText
};
L=function(){if("text" in J){W.responseText=J.text
}if("xml" in J){W.responseXML=J.xml
}if("data" in J){W.response=J.data
}if("finalUrl" in J){W.responseURL=J.finalUrl
}};
Q=function(ae){while(ae>ad&&ad<4){W[x]=++ad;
if(ad===1){W[k]("loadstart",{})
}if(ad===2){ac()
}if(ad===4){ac();
L()
}W[k]("readystatechange",{});
if(ad===4){if(O.async===false){S()
}else{setTimeout(S,0)
}}}};
S=function(){if(!P){W[k]("load",{})
}W[k]("loadend",{});
if(P){W[x]=0
}};
ad=0;
V=function(ag){var ae,af;
if(ag!==4){Q(ag);
return
}ae=r.listeners(D);
af=function(){var ah;
if(!ae.length){return Q(4)
}ah=ae.shift();
if(ah.length===2){ah(O,J);
return af()
}else{if(ah.length===3&&O.async){return ah(O,J,af)
}else{return af()
}}};
af()
};
W=O.xhr=n();
R.onreadystatechange=function(ae){try{if(R[x]===2){U()
}}catch(af){}if(R[x]===4){X=false;
U();
Y()
}V(R[x])
};
M=function(){P=true
};
W[j]("error",M);
W[j]("timeout",M);
W[j]("abort",M);
W[j]("progress",function(){if(ad<3){V(3)
}else{W[k]("readystatechange",{})
}});
if("withCredentials" in R||r.addWithCredentials){W.withCredentials=false
}W.status=0;
T=c.concat(E);
for(K=0,ab=T.length;
K<ab;
K++){aa=T[K];
W["on"+aa]=null
}W.open=function(ai,af,ag,ae,ah){ad=0;
P=false;
X=false;
O.headers={};
O.headerNames={};
O.status=0;
J={};
J.headers={};
O.method=ai;
O.url=af;
O.async=ag!==false;
O.user=ae;
O.pass=ah;
V(1)
};
W.send=function(al){var am,ak,ag,ae,ai,aj,af,ah;
ah=["type","timeout","withCredentials"];
for(aj=0,af=ah.length;
aj<af;
aj++){ak=ah[aj];
ag=ak==="type"?"responseType":ak;
if(ag in W){O[ak]=W[ag]
}}O.body=al;
ai=function(){var at,ap,ao,an,ar,aq;
z(c,R,W);
if(W.upload){z(c.concat(E),R.upload,W.upload)
}X=true;
R.open(O.method,O.url,O.async,O.user,O.pass);
ar=["type","timeout","withCredentials"];
for(ao=0,an=ar.length;
ao<an;
ao++){ak=ar[ao];
ag=ak==="type"?"responseType":ak;
if(ak in O){R[ag]=O[ak]
}}aq=O.headers;
for(at in aq){ap=aq[at];
if(at){R.setRequestHeader(at,ap)
}}if(O.body instanceof b){O.body=O.body.fd
}R.send(O.body)
};
am=r.listeners(u);
ae=function(){var an,ao;
if(!am.length){return ai()
}an=function(ap){if(typeof ap==="object"&&(typeof ap.status==="number"||typeof J.status==="number")){p(ap,J);
if(f.call(ap,"data")<0){ap.data=ap.response||ap.text
}V(4);
return
}ae()
};
an.head=function(ap){p(ap,J);
return V(2)
};
an.progress=function(ap){p(ap,J);
return V(3)
};
ao=am.shift();
if(ao.length===1){return an(ao(O))
}else{if(ao.length===2&&O.async){return ao(O,an)
}else{return an()
}}};
ae()
};
W.abort=function(){Z=N;
if(X){R.abort()
}else{W[k]("abort",{})
}};
W.setRequestHeader=function(ah,af){var ag,ae;
ag=ah!=null?ah.toLowerCase():void 0;
ae=O.headerNames[ag]=O.headerNames[ag]||ah;
if(O.headers[ae]){af=O.headers[ae]+", "+af
}O.headers[ae]=af
};
W.getResponseHeader=function(af){var ae;
ae=af!=null?af.toLowerCase():void 0;
return g(J.headers[ae])
};
W.getAllResponseHeaders=function(){return g(e(J.headers))
};
if(R.overrideMimeType){W.overrideMimeType=function(){return R.overrideMimeType.apply(R,arguments)
}
}if(R.upload){W.upload=O.upload=n()
}W.UNSENT=0;
W.OPENED=1;
W.HEADERS_RECEIVED=2;
W.LOADING=3;
W.DONE=4;
W.response="";
W.responseText="";
W.responseXML=null;
W.readyState=0;
W.statusText="";
return W
};
if(typeof G[h]==="function"){m=G[h];
r[h]=m;
t=G[h]=function(L,K){var J,N,M;
if(K==null){K={headers:{}}
}K.url=L;
M=null;
N=r.listeners(u);
J=r.listeners(D);
return new Promise(function(S,R){var O,Q,P,U,T;
Q=function(){if(K.body instanceof b){K.body=K.body.fd
}if(K.headers){K.headers=new Headers(K.headers)
}if(!M){M=new Request(K.url,K)
}return p(K,M)
};
P=function(V){var W;
if(!J.length){return S(V)
}W=J.shift();
if(W.length===2){W(Q(),V);
return P(V)
}else{if(W.length===3){return W(Q(),V,P)
}else{return P(V)
}}};
O=function(W){var V;
if(W!==void 0){V=new Response(W.body||W.text,W);
S(V);
P(V);
return
}U()
};
U=function(){var V;
if(!N.length){T();
return
}V=N.shift();
if(V.length===1){return O(V(K))
}else{if(V.length===2){return V(Q(),O)
}}};
T=function(){return m(Q()).then(function(V){return P(V)
})["catch"](function(V){P(V);
return R(V)
})
};
U()
})
}
}o.UNSENT=0;
o.OPENED=1;
o.HEADERS_RECEIVED=2;
o.LOADING=3;
o.DONE=4;
if(typeof define==="function"&&define.amd){define("xhook",[],function(){return r
})
}else{if(typeof module==="object"&&module.exports){module.exports={xhook:r}
}else{if(G){G.xhook=r
}}}}.call(this));
/*!
 * JavaScript Cookie v2.1.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;
(function(b){var d=false;
if(typeof define==="function"&&define.amd){define(b);
d=true
}if(typeof exports==="object"){module.exports=b();
d=true
}if(!d){var a=window.Cookies;
var c=window.Cookies=b();
c.noConflict=function(){window.Cookies=a;
return c
}
}}(function(){function b(){var f=0;
var c={};
for(;
f<arguments.length;
f++){var d=arguments[f];
for(var e in d){c[e]=d[e]
}}return c
}function a(d){function c(s,p,l){var u;
if(typeof document==="undefined"){return
}if(arguments.length>1){l=b({path:"/"},c.defaults,l);
if(typeof l.expires==="number"){var h=new Date();
h.setMilliseconds(h.getMilliseconds()+l.expires*86400000);
l.expires=h
}l.expires=l.expires?l.expires.toUTCString():"";
try{u=JSON.stringify(p);
if(/^[\{\[]/.test(u)){p=u
}}catch(n){}if(!d.write){p=encodeURIComponent(String(p)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)
}else{p=d.write(p,s)
}s=encodeURIComponent(String(s));
s=s.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);
s=s.replace(/[\(\)]/g,escape);
var k="";
for(var o in l){if(!l[o]){continue
}k+="; "+o;
if(l[o]===true){continue
}k+="="+l[o]
}return(document.cookie=s+"="+p+k)
}if(!s){u={}
}var t=document.cookie?document.cookie.split("; "):[];
var r=/(%[0-9A-Z]{2})+/g;
var m=0;
for(;
m<t.length;
m++){var j=t[m].split("=");
var g=j.slice(1).join("=");
if(g.charAt(0)==='"'){g=g.slice(1,-1)
}try{var f=j[0].replace(r,decodeURIComponent);
g=d.read?d.read(g,f):d(g,f)||g.replace(r,decodeURIComponent);
if(this.json){try{g=JSON.parse(g)
}catch(n){}}if(s===f){u=g;
break
}if(!s){u[f]=g
}}catch(n){}}return u
}c.set=c;
c.get=function(e){return c.call(c,e)
};
c.getJSON=function(){return c.apply({json:true},[].slice.call(arguments))
};
c.defaults={};
c.remove=function(f,e){c(f,"",b(e,{expires:-1}))
};
c.withConverter=a;
return c
}return a(function(){})
}));
var q=null;
window.PR_SHOULD_USE_CONTINUATION=!0;
(function(){function d(F){function w(J){var K=J.charCodeAt(0);
if(K!==92){return K
}var I=J.charAt(1);
return(K=k[I])?K:"0"<=I&&I<="7"?parseInt(J.substring(1),8):I==="u"||I==="x"?parseInt(J.substring(2),16):J.charCodeAt(1)
}function C(I){if(I<32){return(I<16?"\\x0":"\\x")+I.toString(16)
}I=String.fromCharCode(I);
if(I==="\\"||I==="-"||I==="["||I==="]"){I="\\"+I
}return I
}function A(J){for(var M=J.substring(1,J.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),J=[],I=[],O=M[0]==="^",Q=O?1:0,L=M.length;
Q<L;
++Q){var K=M[Q];
if(/\\[bdsw]/i.test(K)){J.push(K)
}else{var K=w(K),N;
Q+2<L&&"-"===M[Q+1]?(N=w(M[Q+2]),Q+=2):N=K;
I.push([K,N]);
N<65||K>122||(N<65||K>90||I.push([Math.max(65,K)|32,Math.min(N,90)|32]),N<97||K>122||I.push([Math.max(97,K)&-33,Math.min(N,122)&-33]))
}}I.sort(function(R,S){return R[0]-S[0]||S[1]-R[1]
});
M=[];
K=[NaN,NaN];
for(Q=0;
Q<I.length;
++Q){L=I[Q],L[0]<=K[1]+1?K[1]=Math.max(K[1],L[1]):M.push(K=L)
}I=["["];
O&&I.push("^");
I.push.apply(I,J);
for(Q=0;
Q<M.length;
++Q){L=M[Q],I.push(C(L[0])),L[1]>L[0]&&(L[1]+1>L[0]&&I.push("-"),I.push(C(L[1])))
}I.push("]");
return I.join("")
}function E(J){for(var M=J.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),I=M.length,N=[],O=0,L=0;
O<I;
++O){var K=M[O];
K==="("?++L:"\\"===K.charAt(0)&&(K=+K.substring(1))&&K<=L&&(N[K]=-1)
}for(O=1;
O<N.length;
++O){-1===N[O]&&(N[O]=++G)
}for(L=O=0;
O<I;
++O){K=M[O],K==="("?(++L,N[L]===void 0&&(M[O]="(?:")):"\\"===K.charAt(0)&&(K=+K.substring(1))&&K<=L&&(M[O]="\\"+N[L])
}for(L=O=0;
O<I;
++O){"^"===M[O]&&"^"!==M[O+1]&&(M[O]="")
}if(J.ignoreCase&&H){for(O=0;
O<I;
++O){K=M[O],J=K.charAt(0),K.length>=2&&J==="["?M[O]=A(K):J!=="\\"&&(M[O]=K.replace(/[A-Za-z]/g,function(Q){Q=Q.charCodeAt(0);
return"["+String.fromCharCode(Q&-33,Q|32)+"]"
}))
}}return M.join("")
}for(var G=0,H=!1,x=!1,u=0,D=F.length;
u<D;
++u){var B=F[u];
if(B.ignoreCase){x=!0
}else{if(/[a-z]/i.test(B.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){H=!0;
x=!1;
break
}}}for(var k={b:8,t:9,n:10,v:11,f:12,r:13},v=[],u=0,D=F.length;
u<D;
++u){B=F[u];
if(B.global||B.multiline){throw Error(""+B)
}v.push("(?:"+E(B)+")")
}return RegExp(v.join("|"),x?"gi":"g")
}function c(B){function u(E){switch(E.nodeType){case 1:if(x.test(E.className)){break
}for(var F=E.firstChild;
F;
F=F.nextSibling){u(F)
}F=E.nodeName;
if("BR"===F||"LI"===F){w[D]="\n",C[D<<1]=A++,C[D++<<1|1]=E
}break;
case 3:case 4:F=E.nodeValue,F.length&&(F=k?F.replace(/\r\n?/g,"\n"):F.replace(/[\t\n\r ]+/g," "),w[D]=F,C[D<<1]=A,A+=F.length,C[D++<<1|1]=E)
}}var x=/(?:^|\s)nocode(?:\s|$)/,w=[],A=0,C=[],D=0,v;
B.currentStyle?v=B.currentStyle.whiteSpace:window.getComputedStyle&&(v=document.defaultView.getComputedStyle(B,q).getPropertyValue("white-space"));
var k=v&&"pre"===v.substring(0,3);
u(B);
return{a:w.join("").replace(/\n$/,""),c:C}
}function y(u,k,w,v){k&&(u={a:k,d:u},w(u),v.push.apply(v,u.e))
}function h(u,k){function x(Q){for(var F=Q.d,C=[F,"pln"],L=0,J=Q.a.match(A)||[],B={},E=0,N=J.length;
E<N;
++E){var K=J[E],O=B[K],D=void 0,M;
if(typeof O==="string"){M=!1
}else{var I=w[K.charAt(0)];
if(I){D=K.match(I[1]),O=I[0]
}else{for(M=0;
M<v;
++M){if(I=k[M],D=K.match(I[1])){O=I[0];
break
}}D||(O="pln")
}if((M=O.length>=5&&"lang-"===O.substring(0,5))&&!(D&&typeof D[1]==="string")){M=!1,O="src"
}M||(B[K]=O)
}I=L;
L+=K.length;
if(M){M=D[1];
var H=K.indexOf(M),G=H+M.length;
D[2]&&(G=K.length-D[2].length,H=G-M.length);
O=O.substring(5);
y(F+I,K.substring(0,H),x,C);
y(F+I+H,M,t(O,M),C);
y(F+I+G,K.substring(G),x,C)
}else{C.push(F+I,O)
}}Q.e=C
}var w={},A;
(function(){for(var G=u.concat(k),B=[],F={},H=0,E=G.length;
H<E;
++H){var D=G[H],I=D[3];
if(I){for(var C=I.length;
--C>=0;
){w[I.charAt(C)]=D
}}D=D[1];
I=""+D;
F.hasOwnProperty(I)||(B.push(D),F[I]=q)
}B.push(/[\S\s]/);
A=d(B)
})();
var v=k.length;
return x
}function p(u){var k=[],w=[];
u.tripleQuotedStrings?k.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,q,"'\""]):u.multiLineStrings?k.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,q,"'\"`"]):k.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,q,"\"'"]);
u.verbatimStrings&&w.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,q]);
var v=u.hashComments;
v&&(u.cStyleComments?(v>1?k.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):k.push(["com",/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/,q,"#"]),w.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,q])):k.push(["com",/^#[^\n\r]*/,q,"#"]));
u.cStyleComments&&(w.push(["com",/^\/\/[^\n\r]*/,q]),w.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,q]));
u.regexLiterals&&w.push(["lang-regex",/^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]);
(v=u.types)&&w.push(["typ",v]);
u=(""+u.keywords).replace(/^ | $/g,"");
u.length&&w.push(["kwd",RegExp("^(?:"+u.replace(/[\s,]+/g,"|")+")\\b"),q]);
k.push(["pln",/^\s+/,q," \r\n\t\xa0"]);
w.push(["lit",/^@[$_a-z][\w$@]*/i,q],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,q],["pln",/^[$_a-z][\w$@]*/i,q],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,q,"0123456789"],["pln",/^\\[\S\s]?/,q],["pun",/^.[^\s\w"-$'./@\\`]*/,q]);
return h(k,w)
}function s(H,x){function E(K){switch(K.nodeType){case 1:if(B.test(K.className)){break
}if("BR"===K.nodeName){C(K),K.parentNode&&K.parentNode.removeChild(K)
}else{for(K=K.firstChild;
K;
K=K.nextSibling){E(K)
}}break;
case 3:case 4:if(v){var k=K.nodeValue,L=k.match(I);
if(L){var M=k.substring(0,L.index);
K.nodeValue=M;
(k=k.substring(L.index+L[0].length))&&K.parentNode.insertBefore(J.createTextNode(k),K.nextSibling);
C(K);
M||K.parentNode.removeChild(K)
}}}}function C(K){function k(M,S){var R=S?M.cloneNode(!1):M,Q=M.parentNode;
if(Q){var Q=k(Q,1),O=M.nextSibling;
Q.appendChild(R);
for(var N=O;
N;
N=O){O=N.nextSibling,Q.appendChild(N)
}}return R
}for(;
!K.nextSibling;
){if(K=K.parentNode,!K){return
}}for(var K=k(K.nextSibling,0),L;
(L=K.parentNode)&&L.nodeType===1;
){K=L
}F.push(K)
}var B=/(?:^|\s)nocode(?:\s|$)/,I=/\r\n?|\n/,J=H.ownerDocument,A;
H.currentStyle?A=H.currentStyle.whiteSpace:window.getComputedStyle&&(A=J.defaultView.getComputedStyle(H,q).getPropertyValue("white-space"));
var v=A&&"pre"===A.substring(0,3);
for(A=J.createElement("LI");
H.firstChild;
){A.appendChild(H.firstChild)
}for(var F=[A],D=0;
D<F.length;
++D){E(F[D])
}x===(x|0)&&F[0].setAttribute("value",x);
var u=J.createElement("OL");
u.className="linenums";
for(var w=Math.max(0,x-1|0)||0,D=0,G=F.length;
D<G;
++D){A=F[D],A.className="L"+(D+w)%10,A.firstChild||A.appendChild(J.createTextNode("\xa0")),u.appendChild(A)
}H.appendChild(u)
}function P(u,k){for(var w=k.length;
--w>=0;
){var v=k[w];
z.hasOwnProperty(v)?window.console&&console.warn("cannot override language handler %s",v):z[v]=u
}}function t(u,k){if(!u||!z.hasOwnProperty(u)){u=/^\s*</.test(k)?"default-markup":"default-code"
}return z[u]
}function r(Y){var L=Y.g;
try{var U=c(Y.h),R=U.a;
Y.a=R;
Y.c=U.c;
Y.d=0;
t(L,R)(Y);
var N=/\bMSIE\b/.test(navigator.userAgent),L=/\n/g,F=Y.a,G=F.length,U=0,M=Y.c,I=M.length,R=0,V=Y.e,S=V.length,Y=0;
V[S]=G;
var H,K;
for(K=H=0;
K<S;
){V[K]!==V[K+2]?(V[H++]=V[K++],V[H++]=V[K++]):K+=2
}S=H;
for(K=H=0;
K<S;
){for(var A=V[K],T=V[K+1],X=K+2;
X+2<=S&&V[X+1]===T;
){X+=2
}V[H++]=A;
V[H++]=T;
K=X
}for(V.length=H;
R<I;
){var J=M[R+2]||G,W=V[Y+2]||G,X=Math.min(J,W),Q=M[R+1],O;
if(Q.nodeType!==1&&(O=F.substring(U,X))){N&&(O=O.replace(L,"\r"));
Q.nodeValue=O;
var E=Q.ownerDocument,D=E.createElement("SPAN");
D.className=V[Y+1];
var B=Q.parentNode;
B.replaceChild(D,Q);
D.appendChild(Q);
U<J&&(M[R+1]=Q=E.createTextNode(F.substring(X,J)),B.insertBefore(Q,D.nextSibling))
}U=X;
U>=J&&(R+=2);
U>=W&&(Y+=2)
}}catch(C){"console" in window&&console.log(C&&C.stack?C.stack:C)
}}var n=["break,continue,do,else,for,if,return,while"],l=[[n,"auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],o=[l,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],m=[l,"abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],j=[m,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"],l=[l,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],g=[n,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],f=[n,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],n=[n,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],e=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,b=/\S/,a=p({keywords:[o,j,l,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END"+g,f,n],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),z={};
P(a,["default-code"]);
P(h([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]);
P(h([["pln",/^\s+/,q," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,q,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]);
P(h([],[["atv",/^[\S\s]+/]]),["uq.val"]);
P(p({keywords:o,hashComments:!0,cStyleComments:!0,types:e}),["c","cc","cpp","cxx","cyc","m"]);
P(p({keywords:"null,true,false"}),["json"]);
P(p({keywords:j,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:e}),["cs"]);
P(p({keywords:m,cStyleComments:!0}),["java"]);
P(p({keywords:n,hashComments:!0,multiLineStrings:!0}),["bsh","csh","sh"]);
P(p({keywords:g,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py"]);
P(p({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["perl","pl","pm"]);
P(p({keywords:f,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb"]);
P(p({keywords:l,cStyleComments:!0,regexLiterals:!0}),["js"]);
P(p({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);
P(h([],[["str",/^[\S\s]+/]]),["regex"]);
window.prettyPrintOne=function(u,k,w){var v=document.createElement("PRE");
v.innerHTML=u;
w&&s(v,w);
r({g:k,i:w,h:v});
return v.innerHTML
};
window.prettyPrint=function(E){function v(){for(var L=window.PR_SHOULD_USE_CONTINUATION?w.now()+250:Infinity;
u<A.length&&w.now()<L;
u++){var O=A[u],I=O.className;
if(I.indexOf("prettyprint")>=0){var I=I.match(B),K,H;
if(H=!I){H=O;
for(var M=void 0,N=H.firstChild;
N;
N=N.nextSibling){var J=N.nodeType,M=J===1?M?H:N:J===3?b.test(N.nodeValue)?H:M:M
}H=(K=M===H?void 0:M)&&"CODE"===K.tagName
}H&&(I=K.className.match(B));
I&&(I=I[1]);
H=!1;
for(M=O.parentNode;
M;
M=M.parentNode){if((M.tagName==="pre"||M.tagName==="code"||M.tagName==="xmp")&&M.className&&M.className.indexOf("prettyprint")>=0){H=!0;
break
}}H||((H=(H=O.className.match(/\blinenums\b(?::(\d+))?/))?H[1]&&H[1].length?+H[1]:!0:!1)&&s(O,H),D={g:I,h:O,i:H},r(D))
}}u<A.length?setTimeout(v,250):E&&E()
}for(var C=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],A=[],x=0;
x<C.length;
++x){for(var F=0,G=C[x].length;
F<G;
++F){A.push(C[x][F])
}}var C=q,w=Date;
w.now||(w={now:function(){return +new Date
}});
var u=0,D,B=/\blang(?:uage)?-([\w.]+)(?!\S)/;
v()
};
window.PR={createSimpleLexer:h,registerLangHandler:P,sourceDecorator:p,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ"}
})();
(function($){$.extend({tablesorter:new function(){var parsers=[],widgets=[];
this.defaults={cssHeader:"header",cssAsc:"headerSortUp",cssDesc:"headerSortDown",cssChildRow:"expand-child",sortInitialOrder:"asc",sortMultiSortKey:"shiftKey",sortForce:null,sortAppend:null,sortLocaleCompare:true,textExtraction:"simple",parsers:{},widgets:[],widgetZebra:{css:["even","odd"]},headers:{},widthFixed:false,cancelSelection:true,sortList:[],headerList:[],dateFormat:"us",decimal:"/.|,/g",onRenderHeader:null,selectorHeaders:"thead th",debug:false};
function benchmark(s,d){log(s+","+(new Date().getTime()-d.getTime())+"ms")
}this.benchmark=benchmark;
function log(s){if(typeof console!="undefined"&&typeof console.debug!="undefined"){console.log(s)
}else{alert(s)
}}function buildParserCache(table,$headers){if(table.config.debug){var parsersDebug=""
}if(table.tBodies.length==0){return
}var rows=table.tBodies[0].rows;
if(rows[0]){var list=[],cells=rows[0].cells,l=cells.length;
for(var i=0;
i<l;
i++){var p=false;
if($.metadata&&($($headers[i]).metadata()&&$($headers[i]).metadata().sorter)){p=getParserById($($headers[i]).metadata().sorter)
}else{if((table.config.headers[i]&&table.config.headers[i].sorter)){p=getParserById(table.config.headers[i].sorter)
}}if(!p){p=detectParserForColumn(table,rows,-1,i)
}if(table.config.debug){parsersDebug+="column:"+i+" parser:"+p.id+"\n"
}list.push(p)
}}if(table.config.debug){log(parsersDebug)
}return list
}function detectParserForColumn(table,rows,rowIndex,cellIndex){var l=parsers.length,node=false,nodeValue=false,keepLooking=true;
while(nodeValue==""&&keepLooking){rowIndex++;
if(rows[rowIndex]){node=getNodeFromRowAndCellIndex(rows,rowIndex,cellIndex);
nodeValue=trimAndGetNodeText(table.config,node);
if(table.config.debug){log("Checking if value was empty on row:"+rowIndex)
}}else{keepLooking=false
}}for(var i=1;
i<l;
i++){if(parsers[i].is(nodeValue,table,node)){return parsers[i]
}}return parsers[0]
}function getNodeFromRowAndCellIndex(rows,rowIndex,cellIndex){return rows[rowIndex].cells[cellIndex]
}function trimAndGetNodeText(config,node){return $.trim(getElementText(config,node))
}function getParserById(name){var l=parsers.length;
for(var i=0;
i<l;
i++){if(parsers[i].id.toLowerCase()==name.toLowerCase()){return parsers[i]
}}return false
}function buildCache(table){if(table.config.debug){var cacheTime=new Date()
}var totalRows=(table.tBodies[0]&&table.tBodies[0].rows.length)||0,totalCells=(table.tBodies[0].rows[0]&&table.tBodies[0].rows[0].cells.length)||0,parsers=table.config.parsers,cache={row:[],normalized:[]};
for(var i=0;
i<totalRows;
++i){var c=$(table.tBodies[0].rows[i]),cols=[];
if(c.hasClass(table.config.cssChildRow)){cache.row[cache.row.length-1]=cache.row[cache.row.length-1].add(c);
continue
}cache.row.push(c);
for(var j=0;
j<totalCells;
++j){cols.push(parsers[j].format(getElementText(table.config,c[0].cells[j]),table,c[0].cells[j]))
}cols.push(cache.normalized.length);
cache.normalized.push(cols);
cols=null
}if(table.config.debug){benchmark("Building cache for "+totalRows+" rows:",cacheTime)
}return cache
}function getElementText(config,node){var text="";
if(!node){return""
}if(!config.supportsTextContent){config.supportsTextContent=node.textContent||false
}if(config.textExtraction=="simple"){if(config.supportsTextContent){text=node.textContent
}else{if(node.childNodes[0]&&node.childNodes[0].hasChildNodes()){text=node.childNodes[0].innerHTML
}else{text=node.innerHTML
}}}else{if(typeof(config.textExtraction)=="function"){text=config.textExtraction(node)
}else{text=$(node).text()
}}return text
}function appendToTable(table,cache){if(table.config.debug){var appendTime=new Date()
}var c=cache,r=c.row,n=c.normalized,totalRows=n.length,checkCell=(n[0].length-1),tableBody=$(table.tBodies[0]),rows=[];
for(var i=0;
i<totalRows;
i++){var pos=n[i][checkCell];
rows.push(r[pos]);
if(!table.config.appender){var l=r[pos].length;
for(var j=0;
j<l;
j++){tableBody[0].appendChild(r[pos][j])
}}}if(table.config.appender){table.config.appender(table,rows)
}rows=null;
if(table.config.debug){benchmark("Rebuilt table:",appendTime)
}applyWidget(table);
setTimeout(function(){$(table).trigger("sortEnd")
},0)
}function buildHeaders(table){if(table.config.debug){var time=new Date()
}var meta=($.metadata)?true:false;
var header_index=computeTableHeaderCellIndexes(table);
$tableHeaders=$(table.config.selectorHeaders,table).each(function(index){this.column=header_index[this.parentNode.rowIndex+"-"+this.cellIndex];
this.order=formatSortingOrder(table.config.sortInitialOrder);
this.count=this.order;
if(checkHeaderMetadata(this)||checkHeaderOptions(table,index)){this.sortDisabled=true
}if(checkHeaderOptionsSortingLocked(table,index)){this.order=this.lockedOrder=checkHeaderOptionsSortingLocked(table,index)
}if(!this.sortDisabled){var $th=$(this).addClass(table.config.cssHeader);
if(table.config.onRenderHeader){table.config.onRenderHeader.apply($th)
}}table.config.headerList[index]=this
});
if(table.config.debug){benchmark("Built headers:",time);
log($tableHeaders)
}return $tableHeaders
}function computeTableHeaderCellIndexes(t){var matrix=[];
var lookup={};
var thead=t.getElementsByTagName("THEAD")[0];
var trs=thead.getElementsByTagName("TR");
for(var i=0;
i<trs.length;
i++){var cells=trs[i].cells;
for(var j=0;
j<cells.length;
j++){var c=cells[j];
var rowIndex=c.parentNode.rowIndex;
var cellId=rowIndex+"-"+c.cellIndex;
var rowSpan=c.rowSpan||1;
var colSpan=c.colSpan||1;
var firstAvailCol;
if(typeof(matrix[rowIndex])=="undefined"){matrix[rowIndex]=[]
}for(var k=0;
k<matrix[rowIndex].length+1;
k++){if(typeof(matrix[rowIndex][k])=="undefined"){firstAvailCol=k;
break
}}lookup[cellId]=firstAvailCol;
for(var k=rowIndex;
k<rowIndex+rowSpan;
k++){if(typeof(matrix[k])=="undefined"){matrix[k]=[]
}var matrixrow=matrix[k];
for(var l=firstAvailCol;
l<firstAvailCol+colSpan;
l++){matrixrow[l]="x"
}}}}return lookup
}function checkCellColSpan(table,rows,row){var arr=[],r=table.tHead.rows,c=r[row].cells;
for(var i=0;
i<c.length;
i++){var cell=c[i];
if(cell.colSpan>1){arr=arr.concat(checkCellColSpan(table,headerArr,row++))
}else{if(table.tHead.length==1||(cell.rowSpan>1||!r[row+1])){arr.push(cell)
}}}return arr
}function checkHeaderMetadata(cell){if(($.metadata)&&($(cell).metadata().sorter===false)){return true
}return false
}function checkHeaderOptions(table,i){if((table.config.headers[i])&&(table.config.headers[i].sorter===false)){return true
}return false
}function checkHeaderOptionsSortingLocked(table,i){if((table.config.headers[i])&&(table.config.headers[i].lockedOrder)){return table.config.headers[i].lockedOrder
}return false
}function applyWidget(table){var c=table.config.widgets;
var l=c.length;
for(var i=0;
i<l;
i++){getWidgetById(c[i]).format(table)
}}function getWidgetById(name){var l=widgets.length;
for(var i=0;
i<l;
i++){if(widgets[i].id.toLowerCase()==name.toLowerCase()){return widgets[i]
}}}function formatSortingOrder(v){if(typeof(v)!="Number"){return(v.toLowerCase()=="desc")?1:0
}else{return(v==1)?1:0
}}function isValueInArray(v,a){var l=a.length;
for(var i=0;
i<l;
i++){if(a[i][0]==v){return true
}}return false
}function setHeadersCss(table,$headers,list,css){$headers.removeClass(css[0]).removeClass(css[1]);
var h=[];
$headers.each(function(offset){if(!this.sortDisabled){h[this.column]=$(this)
}});
var l=list.length;
for(var i=0;
i<l;
i++){h[list[i][0]].addClass(css[list[i][1]])
}}function fixColumnWidth(table,$headers){var c=table.config;
if(c.widthFixed){var colgroup=$("<colgroup>");
$("tr:first td",table.tBodies[0]).each(function(){colgroup.append($("<col>").css("width",$(this).width()))
});
$(table).prepend(colgroup)
}}function updateHeaderSortCount(table,sortList){var c=table.config,l=sortList.length;
for(var i=0;
i<l;
i++){var s=sortList[i],o=c.headerList[s[0]];
o.count=s[1];
o.count++
}}function multisort(table,sortList,cache){if(table.config.debug){var sortTime=new Date()
}var dynamicExp="var sortWrapper = function(a,b) {",l=sortList.length;
for(var i=0;
i<l;
i++){var c=sortList[i][0];
var order=sortList[i][1];
var s=(table.config.parsers[c].type=="text")?((order==0)?makeSortFunction("text","asc",c):makeSortFunction("text","desc",c)):((order==0)?makeSortFunction("numeric","asc",c):makeSortFunction("numeric","desc",c));
var e="e"+i;
dynamicExp+="var "+e+" = "+s;
dynamicExp+="if("+e+") { return "+e+"; } ";
dynamicExp+="else { "
}var orgOrderCol=cache.normalized[0].length-1;
dynamicExp+="return a["+orgOrderCol+"]-b["+orgOrderCol+"];";
for(var i=0;
i<l;
i++){dynamicExp+="}; "
}dynamicExp+="return 0; ";
dynamicExp+="}; ";
if(table.config.debug){benchmark("Evaling expression:"+dynamicExp,new Date())
}eval(dynamicExp);
cache.normalized.sort(sortWrapper);
if(table.config.debug){benchmark("Sorting on "+sortList.toString()+" and dir "+order+" time:",sortTime)
}return cache
}function makeSortFunction(type,direction,index){var a="a["+index+"]",b="b["+index+"]";
if(type=="text"&&direction=="asc"){return"("+a+" == "+b+" ? 0 : ("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : ("+a+" < "+b+") ? -1 : 1 )));"
}else{if(type=="text"&&direction=="desc"){return"("+a+" == "+b+" ? 0 : ("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : ("+b+" < "+a+") ? -1 : 1 )));"
}else{if(type=="numeric"&&direction=="asc"){return"("+a+" === null && "+b+" === null) ? 0 :("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : "+a+" - "+b+"));"
}else{if(type=="numeric"&&direction=="desc"){return"("+a+" === null && "+b+" === null) ? 0 :("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : "+b+" - "+a+"));"
}}}}}function makeSortText(i){return"((a["+i+"] < b["+i+"]) ? -1 : ((a["+i+"] > b["+i+"]) ? 1 : 0));"
}function makeSortTextDesc(i){return"((b["+i+"] < a["+i+"]) ? -1 : ((b["+i+"] > a["+i+"]) ? 1 : 0));"
}function makeSortNumeric(i){return"a["+i+"]-b["+i+"];"
}function makeSortNumericDesc(i){return"b["+i+"]-a["+i+"];"
}function sortText(a,b){if(table.config.sortLocaleCompare){return a.localeCompare(b)
}return((a<b)?-1:((a>b)?1:0))
}function sortTextDesc(a,b){if(table.config.sortLocaleCompare){return b.localeCompare(a)
}return((b<a)?-1:((b>a)?1:0))
}function sortNumeric(a,b){return a-b
}function sortNumericDesc(a,b){return b-a
}function getCachedSortType(parsers,i){return parsers[i].type
}this.construct=function(settings){return this.each(function(){if(!this.tHead||!this.tBodies){return
}var $this,$document,$headers,cache,config,shiftDown=0,sortOrder;
this.config={};
config=$.extend(this.config,$.tablesorter.defaults,settings);
$this=$(this);
$.data(this,"tablesorter",config);
$headers=buildHeaders(this);
this.config.parsers=buildParserCache(this,$headers);
cache=buildCache(this);
var sortCSS=[config.cssDesc,config.cssAsc];
fixColumnWidth(this);
$headers.click(function(e){var totalRows=($this[0].tBodies[0]&&$this[0].tBodies[0].rows.length)||0;
if(!this.sortDisabled&&totalRows>0){$this.trigger("sortStart");
var $cell=$(this);
var i=this.column;
this.order=this.count++%2;
if(this.lockedOrder){this.order=this.lockedOrder
}if(!e[config.sortMultiSortKey]){config.sortList=[];
if(config.sortForce!=null){var a=config.sortForce;
for(var j=0;
j<a.length;
j++){if(a[j][0]!=i){config.sortList.push(a[j])
}}}config.sortList.push([i,this.order])
}else{if(isValueInArray(i,config.sortList)){for(var j=0;
j<config.sortList.length;
j++){var s=config.sortList[j],o=config.headerList[s[0]];
if(s[0]==i){o.count=s[1];
o.count++;
s[1]=o.count%2
}}}else{config.sortList.push([i,this.order])
}}setTimeout(function(){setHeadersCss($this[0],$headers,config.sortList,sortCSS);
appendToTable($this[0],multisort($this[0],config.sortList,cache))
},1);
return false
}}).mousedown(function(){if(config.cancelSelection){this.onselectstart=function(){return false
};
return false
}});
$this.bind("update",function(){var me=this;
setTimeout(function(){me.config.parsers=buildParserCache(me,$headers);
cache=buildCache(me)
},1)
}).bind("updateCell",function(e,cell){var config=this.config;
var pos=[(cell.parentNode.rowIndex-1),cell.cellIndex];
cache.normalized[pos[0]][pos[1]]=config.parsers[pos[1]].format(getElementText(config,cell),cell)
}).bind("sorton",function(e,list){$(this).trigger("sortStart");
config.sortList=list;
var sortList=config.sortList;
updateHeaderSortCount(this,sortList);
setHeadersCss(this,$headers,sortList,sortCSS);
appendToTable(this,multisort(this,sortList,cache))
}).bind("appendCache",function(){appendToTable(this,cache)
}).bind("applyWidgetId",function(e,id){getWidgetById(id).format(this)
}).bind("applyWidgets",function(){applyWidget(this)
});
if($.metadata&&($(this).metadata()&&$(this).metadata().sortlist)){config.sortList=$(this).metadata().sortlist
}if(config.sortList.length>0){$this.trigger("sorton",[config.sortList])
}applyWidget(this)
})
};
this.addParser=function(parser){var l=parsers.length,a=true;
for(var i=0;
i<l;
i++){if(parsers[i].id.toLowerCase()==parser.id.toLowerCase()){a=false
}}if(a){parsers.push(parser)
}};
this.addWidget=function(widget){widgets.push(widget)
};
this.formatFloat=function(s){var i=parseFloat(s);
return(isNaN(i))?0:i
};
this.formatInt=function(s){var i=parseInt(s);
return(isNaN(i))?0:i
};
this.isDigit=function(s,config){return/^[-+]?\d*$/.test($.trim(s.replace(/[,.']/g,"")))
};
this.clearTableBody=function(table){if($.browser.msie){function empty(){while(this.firstChild){this.removeChild(this.firstChild)
}}empty.apply(table.tBodies[0])
}else{table.tBodies[0].innerHTML=""
}}
}});
$.fn.extend({tablesorter:$.tablesorter.construct});
var ts=$.tablesorter;
ts.addParser({id:"text",is:function(s){return true
},format:function(s){return $.trim(s.toLocaleLowerCase())
},type:"text"});
ts.addParser({id:"digit",is:function(s,table){var c=table.config;
return $.tablesorter.isDigit(s,c)
},format:function(s){return $.tablesorter.formatFloat(s)
},type:"numeric"});
ts.addParser({id:"currency",is:function(s){return/^[£$€?.]/.test(s)
},format:function(s){return $.tablesorter.formatFloat(s.replace(new RegExp(/[£$€]/g),""))
},type:"numeric"});
ts.addParser({id:"ipAddress",is:function(s){return/^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(s)
},format:function(s){var a=s.split("."),r="",l=a.length;
for(var i=0;
i<l;
i++){var item=a[i];
if(item.length==2){r+="0"+item
}else{r+=item
}}return $.tablesorter.formatFloat(r)
},type:"numeric"});
ts.addParser({id:"url",is:function(s){return/^(https?|ftp|file):\/\/$/.test(s)
},format:function(s){return jQuery.trim(s.replace(new RegExp(/(https?|ftp|file):\/\//),""))
},type:"text"});
ts.addParser({id:"isoDate",is:function(s){return/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(s)
},format:function(s){return $.tablesorter.formatFloat((s!="")?new Date(s.replace(new RegExp(/-/g),"/")).getTime():"0")
},type:"numeric"});
ts.addParser({id:"percent",is:function(s){return/\%$/.test($.trim(s))
},format:function(s){return $.tablesorter.formatFloat(s.replace(new RegExp(/%/g),""))
},type:"numeric"});
ts.addParser({id:"usLongDate",is:function(s){return s.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/))
},format:function(s){return $.tablesorter.formatFloat(new Date(s).getTime())
},type:"numeric"});
ts.addParser({id:"shortDate",is:function(s){return/\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(s)
},format:function(s,table){var c=table.config;
s=s.replace(/\-/g,"/");
if(c.dateFormat=="us"){s=s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$1/$2")
}else{if(c.dateFormat=="uk"){s=s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$2/$1")
}else{if(c.dateFormat=="dd/mm/yy"||c.dateFormat=="dd-mm-yy"){s=s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/,"$1/$2/$3")
}}}return $.tablesorter.formatFloat(new Date(s).getTime())
},type:"numeric"});
ts.addParser({id:"time",is:function(s){return/^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(s)
},format:function(s){return $.tablesorter.formatFloat(new Date("2000/01/01 "+s).getTime())
},type:"numeric"});
ts.addParser({id:"metadata",is:function(s){return false
},format:function(s,table,cell){var c=table.config,p=(!c.parserMetadataName)?"sortValue":c.parserMetadataName;
return $(cell).metadata()[p]
},type:"numeric"});
ts.addWidget({id:"zebra",format:function(table){if(table.config.debug){var time=new Date()
}var $tr,row=-1,odd;
$("tr:visible",table.tBodies[0]).each(function(i){$tr=$(this);
if(!$tr.hasClass(table.config.cssChildRow)){row++
}odd=(row%2==0);
$tr.removeClass(table.config.widgetZebra.css[odd?0:1]).addClass(table.config.widgetZebra.css[odd?1:0])
});
if(table.config.debug){$.tablesorter.benchmark("Applying Zebra widget",time)
}}})
})(jQuery);
(function($){$.extend({metadata:{defaults:{type:"class",name:"metadata",cre:/({.*})/,single:"metadata"},setType:function(type,name){this.defaults.type=type;
this.defaults.name=name
},get:function(elem,opts){var settings=$.extend({},this.defaults,opts);
if(!settings.single.length){settings.single="metadata"
}var data=$.data(elem,settings.single);
if(data){return data
}data="{}";
if(settings.type=="class"){var m=settings.cre.exec(elem.className);
if(m){data=m[1]
}}else{if(settings.type=="elem"){if(!elem.getElementsByTagName){return undefined
}var e=elem.getElementsByTagName(settings.name);
if(e.length){data=$.trim(e[0].innerHTML)
}}else{if(elem.getAttribute!=undefined){var attr=elem.getAttribute(settings.name);
if(attr){data=attr
}}}}if(data.indexOf("{")<0){data="{"+data+"}"
}data=eval("("+data+")");
$.data(elem,settings.single,data);
return data
}}});
$.fn.metadata=function(opts){return $.metadata.get(this[0],opts)
}
})(jQuery);
/*! http://mths.be/placeholder v2.0.8 by @mathias */
;
(function(j,l,f){var b=Object.prototype.toString.call(j.operamini)=="[object OperaMini]";
var a="placeholder" in l.createElement("input")&&!b;
var g="placeholder" in l.createElement("textarea")&&!b;
var m=f.fn;
var e=f.valHooks;
var c=f.propHooks;
var o;
var n;
if(a&&g){n=m.placeholder=function(){return this
};
n.input=n.textarea=true
}else{n=m.placeholder=function(){var r=this;
r.filter((a?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":d,"blur.placeholder":h}).data("placeholder-enabled",true).trigger("blur.placeholder");
return r
};
n.input=a;
n.textarea=g;
o={get:function(s){var r=f(s);
var t=r.data("placeholder-password");
if(t){return t[0].value
}return r.data("placeholder-enabled")&&r.hasClass("placeholder")?"":s.value
},set:function(s,u){var r=f(s);
var t=r.data("placeholder-password");
if(t){return t[0].value=u
}if(!r.data("placeholder-enabled")){return s.value=u
}if(u==""){s.value=u;
if(s!=p()){h.call(s)
}}else{if(r.hasClass("placeholder")){d.call(s,true,u)||(s.value=u)
}else{s.value=u
}}return r
}};
if(!a){e.input=o;
c.value=o
}if(!g){e.textarea=o;
c.value=o
}f(function(){f(l).delegate("form","submit.placeholder",function(){var r=f(".placeholder",this).each(d);
setTimeout(function(){r.each(h)
},10)
})
});
f(j).bind("beforeunload.placeholder",function(){f(".placeholder").each(function(){this.value=""
})
})
}function k(s){var r={};
var t=/^jQuery\d+$/;
f.each(s.attributes,function(v,u){if(u.specified&&!t.test(u.name)){r[u.name]=u.value
}});
return r
}function d(s,t){var r=this;
var u=f(r);
if(r.value==u.attr("placeholder")&&u.hasClass("placeholder")){if(u.data("placeholder-password")){u=u.hide().next().show().attr("id",u.removeAttr("id").data("placeholder-id"));
if(s===true){return u[0].value=t
}u.focus()
}else{r.value="";
u.removeClass("placeholder");
r==p()&&r.select()
}}}function h(){var v;
var r=this;
var u=f(r);
var t=this.id;
if(r.value==""){if(r.type=="password"){if(!u.data("placeholder-textinput")){try{v=u.clone().attr({type:"text"})
}catch(s){v=f("<input>").attr(f.extend(k(this),{type:"text"}))
}v.removeAttr("name").data({"placeholder-password":u,"placeholder-id":t}).bind("focus.placeholder",d);
u.data({"placeholder-textinput":v,"placeholder-id":t}).before(v)
}u=u.removeAttr("id").hide().prev().attr("id",t).show()
}u.addClass("placeholder");
u[0].value=u.attr("placeholder")
}else{u.removeClass("placeholder")
}}function p(){try{return l.activeElement
}catch(r){}}}(this,document,jQuery));
(function(b){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],b)
}else{b(jQuery)
}}(function(ae){var G="1.6.9",U="left",V="right",af="up",H="down",ah="in",T="out",X="none",O="auto",Y="swipe",M="pinch",S="tap",aa="doubletap",ai="longtap",F="hold",L="horizontal",K="vertical",ab="all",Q=10,ad="start",Z="move",ac="end",R="cancel",aj="ontouchstart" in window,J=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,ag=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,P="TouchSwipe";
var W={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};
ae.fn.swipe=function(a){var b=ae(this),c=b.data(P);
if(c&&typeof a==="string"){if(c[a]){return c[a].apply(this,Array.prototype.slice.call(arguments,1))
}else{ae.error("Method "+a+" does not exist on jQuery.swipe")
}}else{if(!c&&(typeof a==="object"||!a)){return I.apply(this,arguments)
}}return b
};
ae.fn.swipe.version=G;
ae.fn.swipe.defaults=W;
ae.fn.swipe.phases={PHASE_START:ad,PHASE_MOVE:Z,PHASE_END:ac,PHASE_CANCEL:R};
ae.fn.swipe.directions={LEFT:U,RIGHT:V,UP:af,DOWN:H,IN:ah,OUT:T};
ae.fn.swipe.pageScroll={NONE:X,HORIZONTAL:L,VERTICAL:K,AUTO:O};
ae.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:ab};
function I(a){if(a&&(a.allowPageScroll===undefined&&(a.swipe!==undefined||a.swipeStatus!==undefined))){a.allowPageScroll=X
}if(a.click!==undefined&&a.tap===undefined){a.tap=a.click
}if(!a){a={}
}a=ae.extend({},ae.fn.swipe.defaults,a);
return this.each(function(){var b=ae(this);
var c=b.data(P);
if(!c){c=new N(this,a);
b.data(P,c)
}})
}function N(bT,D){var bO=(aj||ag||!D.fallbackToMouseEvents),u=bO?(ag?(J?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",x=bO?(ag?(J?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",f=bO?(ag?(J?"MSPointerUp":"pointerup"):"touchend"):"mouseup",h=bO?null:"mouseleave",bK=(ag?(J?"MSPointerCancel":"pointercancel"):"touchcancel");
var bh=0,by=null,bm=0,bW=0,a=0,y=1,ax=0,bE=0,r=null;
var bw=ae(bT);
var bo="start";
var d=0;
var bx=null;
var g=0,bV=0,bS=0,bk=0,p=0;
var br=null,bi=null;
try{bw.bind(u,bA);
bw.bind(bK,o)
}catch(bd){ae.error("events not supported "+u+","+bK+" on jQuery.swipe")
}this.enable=function(){bw.bind(u,bA);
bw.bind(bK,o);
return bw
};
this.disable=function(){bD();
return bw
};
this.destroy=function(){bD();
bw.data(P,null);
bw=null
};
this.option=function(ak,al){if(D[ak]!==undefined){if(al===undefined){return D[ak]
}else{D[ak]=al
}}else{ae.error("Option "+ak+" does not exist on jQuery.swipe.options")
}return null
};
function bA(am){if(bM()){return
}if(ae(am.target).closest(D.excludedElements,bw).length>0){return
}var al=am.originalEvent?am.originalEvent:am;
var an,ak=al.touches,ao=ak?ak[0]:al;
bo=ad;
if(ak){d=ak.length
}else{am.preventDefault()
}bh=0;
by=null;
bE=null;
bm=0;
bW=0;
a=0;
y=1;
ax=0;
bx=be();
r=bn();
j();
if(!ak||(d===D.fingers||D.fingers===ab)||bq()){bf(0,ao);
g=av();
if(d==2){bf(1,ak[1]);
bW=a=E(bx[0].start,bx[1].start)
}if(D.swipeStatus||D.pinchStatus){an=n(al,bo)
}}else{an=false
}if(an===false){bo=R;
n(al,bo);
return an
}else{if(D.hold){bi=setTimeout(ae.proxy(function(){bw.trigger("hold",[al.target]);
if(D.hold){an=D.hold.call(bw,al,al.target)
}},this),D.longTapThreshold)
}az(true)
}return null
}function bU(ao){var al=ao.originalEvent?ao.originalEvent:ao;
if(bo===ac||bo===R||ba()){return
}var ap,ak=al.touches,aq=ak?ak[0]:al;
var an=bG(aq);
bV=av();
if(ak){d=ak.length
}if(D.hold){clearTimeout(bi)
}bo=Z;
if(d==2){if(bW==0){bf(1,ak[1]);
bW=a=E(bx[0].start,bx[1].start)
}else{bG(ak[1]);
a=E(bx[0].end,bx[1].end);
bE=aw(bx[0].end,bx[1].end)
}y=bQ(bW,a);
ax=Math.abs(bW-a)
}if((d===D.fingers||D.fingers===ab)||!ak||bq()){by=bC(an.start,an.end);
bb(ao,by);
bh=bv(an.start,an.end);
bm=bB();
bF(by,bh);
if(D.swipeStatus||D.pinchStatus){ap=n(al,bo)
}if(!D.triggerOnTouchEnd||D.triggerOnTouchLeave){var ar=true;
if(D.triggerOnTouchLeave){var am=bp(this);
ar=C(an.end,am)
}if(!D.triggerOnTouchEnd&&ar){bo=bL(Z)
}else{if(D.triggerOnTouchLeave&&!ar){bo=bL(ac)
}}if(bo==R||bo==ac){n(al,bo)
}}}else{bo=R;
n(al,bo)
}if(ap===false){bo=R;
n(al,bo)
}}function s(am){var al=am.originalEvent?am.originalEvent:am,ak=al.touches;
if(ak){if(ak.length){B();
return true
}}if(ba()){d=bk
}bV=av();
bm=bB();
if(m()||!a0()){bo=R;
n(al,bo)
}else{if(D.triggerOnTouchEnd||(D.triggerOnTouchEnd==false&&bo===Z)){am.preventDefault();
bo=ac;
n(al,bo)
}else{if(!D.triggerOnTouchEnd&&bR()){bo=ac;
bI(al,bo,S)
}else{if(bo===Z){bo=R;
n(al,bo)
}}}}az(false);
return null
}function o(){d=0;
bV=0;
g=0;
bW=0;
a=0;
y=1;
j();
az(false)
}function t(al){var ak=al.originalEvent?al.originalEvent:al;
if(D.triggerOnTouchLeave){bo=bL(ac);
n(ak,bo)
}}function bD(){bw.unbind(u,bA);
bw.unbind(bK,o);
bw.unbind(x,bU);
bw.unbind(f,s);
if(h){bw.unbind(h,t)
}az(false)
}function bL(ak){var al=ak;
var am=bN();
var an=a0();
var ao=m();
if(!am||ao){al=R
}else{if(an&&ak==Z&&(!D.triggerOnTouchEnd||D.triggerOnTouchLeave)){al=ac
}else{if(!an&&ak==ac&&D.triggerOnTouchLeave){al=R
}}}return al
}function n(al,an){var am,ak=al.touches;
if((v()||e())||(l()||bq())){if(v()||e()){am=bI(al,an,Y)
}if((l()||bq())&&am!==false){am=bI(al,an,M)
}}else{if(bH()&&am!==false){am=bI(al,an,aa)
}else{if(ay()&&am!==false){am=bI(al,an,ai)
}else{if(bg()&&am!==false){am=bI(al,an,S)
}}}}if(an===R){o(al)
}if(an===ac){if(ak){if(!ak.length){o(al)
}}else{o(al)
}}return am
}function bI(ak,an,al){var am;
if(al==Y){bw.trigger("swipeStatus",[an,by||null,bh||0,bm||0,d,bx]);
if(D.swipeStatus){am=D.swipeStatus.call(bw,ak,an,by||null,bh||0,bm||0,d,bx);
if(am===false){return false
}}if(an==ac&&bs()){bw.trigger("swipe",[by,bh,bm,d,bx]);
if(D.swipe){am=D.swipe.call(bw,ak,by,bh,bm,d,bx);
if(am===false){return false
}}switch(by){case U:bw.trigger("swipeLeft",[by,bh,bm,d,bx]);
if(D.swipeLeft){am=D.swipeLeft.call(bw,ak,by,bh,bm,d,bx)
}break;
case V:bw.trigger("swipeRight",[by,bh,bm,d,bx]);
if(D.swipeRight){am=D.swipeRight.call(bw,ak,by,bh,bm,d,bx)
}break;
case af:bw.trigger("swipeUp",[by,bh,bm,d,bx]);
if(D.swipeUp){am=D.swipeUp.call(bw,ak,by,bh,bm,d,bx)
}break;
case H:bw.trigger("swipeDown",[by,bh,bm,d,bx]);
if(D.swipeDown){am=D.swipeDown.call(bw,ak,by,bh,bm,d,bx)
}break
}}}if(al==M){bw.trigger("pinchStatus",[an,bE||null,ax||0,bm||0,d,y,bx]);
if(D.pinchStatus){am=D.pinchStatus.call(bw,ak,an,bE||null,ax||0,bm||0,d,y,bx);
if(am===false){return false
}}if(an==ac&&bP()){switch(bE){case ah:bw.trigger("pinchIn",[bE||null,ax||0,bm||0,d,y,bx]);
if(D.pinchIn){am=D.pinchIn.call(bw,ak,bE||null,ax||0,bm||0,d,y,bx)
}break;
case T:bw.trigger("pinchOut",[bE||null,ax||0,bm||0,d,y,bx]);
if(D.pinchOut){am=D.pinchOut.call(bw,ak,bE||null,ax||0,bm||0,d,y,bx)
}break
}}}if(al==S){if(an===R||an===ac){clearTimeout(br);
clearTimeout(bi);
if(b()&&!w()){p=av();
br=setTimeout(ae.proxy(function(){p=null;
bw.trigger("tap",[ak.target]);
if(D.tap){am=D.tap.call(bw,ak,ak.target)
}},this),D.doubleTapThreshold)
}else{p=null;
bw.trigger("tap",[ak.target]);
if(D.tap){am=D.tap.call(bw,ak,ak.target)
}}}}else{if(al==aa){if(an===R||an===ac){clearTimeout(br);
p=null;
bw.trigger("doubletap",[ak.target]);
if(D.doubleTap){am=D.doubleTap.call(bw,ak,ak.target)
}}}else{if(al==ai){if(an===R||an===ac){clearTimeout(br);
p=null;
bw.trigger("longtap",[ak.target]);
if(D.longTap){am=D.longTap.call(bw,ak,ak.target)
}}}}}return am
}function a0(){var ak=true;
if(D.threshold!==null){ak=bh>=D.threshold
}return ak
}function m(){var ak=false;
if(D.cancelThreshold!==null&&by!==null){ak=(bu(by)-bh)>=D.cancelThreshold
}return ak
}function bj(){if(D.pinchThreshold!==null){return ax>=D.pinchThreshold
}return true
}function bN(){var ak;
if(D.maxTimeThreshold){if(bm>=D.maxTimeThreshold){ak=false
}else{ak=true
}}else{ak=true
}return ak
}function bb(am,al){if(D.preventDefaultEvents===false){return
}if(D.allowPageScroll===X){am.preventDefault()
}else{var ak=D.allowPageScroll===O;
switch(al){case U:if((D.swipeLeft&&ak)||(!ak&&D.allowPageScroll!=L)){am.preventDefault()
}break;
case V:if((D.swipeRight&&ak)||(!ak&&D.allowPageScroll!=L)){am.preventDefault()
}break;
case af:if((D.swipeUp&&ak)||(!ak&&D.allowPageScroll!=K)){am.preventDefault()
}break;
case H:if((D.swipeDown&&ak)||(!ak&&D.allowPageScroll!=K)){am.preventDefault()
}break
}}}function bP(){var al=bz();
var am=c();
var ak=bj();
return al&&am&&ak
}function bq(){return !!(D.pinchStatus||D.pinchIn||D.pinchOut)
}function l(){return !!(bP()&&bq())
}function bs(){var am=bN();
var ak=a0();
var an=bz();
var ap=c();
var ao=m();
var al=!ao&&ap&&an&&ak&&am;
return al
}function e(){return !!(D.swipe||D.swipeStatus||D.swipeLeft||D.swipeRight||D.swipeUp||D.swipeDown)
}function v(){return !!(bs()&&e())
}function bz(){return((d===D.fingers||D.fingers===ab)||!aj)
}function c(){return bx[0].end.x!==0
}function bR(){return !!(D.tap)
}function b(){return !!(D.doubleTap)
}function bt(){return !!(D.longTap)
}function k(){if(p==null){return false
}var ak=av();
return(b()&&((ak-p)<=D.doubleTapThreshold))
}function w(){return k()
}function z(){return((d===1||!aj)&&(isNaN(bh)||bh<D.threshold))
}function bX(){return((bm>D.longTapThreshold)&&(bh<Q))
}function bg(){return !!(z()&&bR())
}function bH(){return !!(k()&&b())
}function ay(){return !!(bX()&&bt())
}function B(){bS=av();
bk=event.touches.length+1
}function j(){bS=0;
bk=0
}function ba(){var al=false;
if(bS){var ak=av()-bS;
if(ak<=D.fingerReleaseThreshold){al=true
}}return al
}function bM(){return !!(bw.data(P+"_intouch")===true)
}function az(ak){if(ak===true){bw.bind(x,bU);
bw.bind(f,s);
if(h){bw.bind(h,t)
}}else{bw.unbind(x,bU,false);
bw.unbind(f,s,false);
if(h){bw.unbind(h,t,false)
}}bw.data(P+"_intouch",ak===true)
}function bf(al,am){var ak=am.identifier!==undefined?am.identifier:0;
bx[al].identifier=ak;
bx[al].start.x=bx[al].end.x=am.pageX||am.clientX;
bx[al].start.y=bx[al].end.y=am.pageY||am.clientY;
return bx[al]
}function bG(am){var ak=am.identifier!==undefined?am.identifier:0;
var al=bl(ak);
al.end.x=am.pageX||am.clientX;
al.end.y=am.pageY||am.clientY;
return al
}function bl(ak){for(var al=0;
al<bx.length;
al++){if(bx[al].identifier==ak){return bx[al]
}}}function be(){var al=[];
for(var ak=0;
ak<=5;
ak++){al.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})
}return al
}function bF(al,ak){ak=Math.max(ak,bu(al));
r[al].distance=ak
}function bu(ak){if(r[ak]){return r[ak].distance
}return undefined
}function bn(){var ak={};
ak[U]=A(U);
ak[V]=A(V);
ak[af]=A(af);
ak[H]=A(H);
return ak
}function A(ak){return{direction:ak,distance:0}
}function bB(){return bV-g
}function E(ak,al){var am=Math.abs(ak.x-al.x);
var an=Math.abs(ak.y-al.y);
return Math.round(Math.sqrt(am*am+an*an))
}function bQ(am,al){var ak=(al/am)*1;
return ak.toFixed(2)
}function aw(){if(y<1){return T
}else{return ah
}}function bv(ak,al){return Math.round(Math.sqrt(Math.pow(al.x-ak.x,2)+Math.pow(al.y-ak.y,2)))
}function bJ(am,ao){var ap=am.x-ao.x;
var ak=ao.y-am.y;
var an=Math.atan2(ak,ap);
var al=Math.round(an*180/Math.PI);
if(al<0){al=360-Math.abs(al)
}return al
}function bC(al,am){var ak=bJ(al,am);
if((ak<=45)&&(ak>=0)){return U
}else{if((ak<=360)&&(ak>=315)){return U
}else{if((ak>=135)&&(ak<=225)){return V
}else{if((ak>45)&&(ak<135)){return H
}else{return af
}}}}}function av(){var ak=new Date();
return ak.getTime()
}function bp(am){am=ae(am);
var ak=am.offset();
var al={left:ak.left,right:ak.left+am.outerWidth(),top:ak.top,bottom:ak.top+am.outerHeight()};
return al
}function C(al,ak){return(al.x>ak.left&&al.x<ak.right&&al.y>ak.top&&al.y<ak.bottom)
}}}));
/*!

 handlebars v4.0.5

Copyright (C) 2011-2015 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
(function webpackUniversalModuleDefinition(a,b){if(typeof exports==="object"&&typeof module==="object"){module.exports=b()
}else{if(typeof define==="function"&&define.amd){define([],b)
}else{if(typeof exports==="object"){exports.Handlebars=b()
}else{a.Handlebars=b()
}}}})(this,function(){return(function(a){var b={};
function c(e){if(b[e]){return b[e].exports
}var d=b[e]={exports:{},id:e,loaded:false};
a[e].call(d.exports,d,d.exports,c);
d.loaded=true;
return d.exports
}c.m=a;
c.c=b;
c.p="";
return c(0)
})([function(c,u,e){var a=e(1)["default"];
u.__esModule=true;
var g=e(2);
var d=a(g);
var b=e(21);
var o=a(b);
var h=e(22);
var p=e(27);
var j=e(28);
var k=a(j);
var r=e(25);
var t=a(r);
var m=e(20);
var l=a(m);
var s=d["default"].create;
function n(){var v=s();
v.compile=function(w,x){return p.compile(w,x,v)
};
v.precompile=function(w,x){return p.precompile(w,x,v)
};
v.AST=o["default"];
v.Compiler=p.Compiler;
v.JavaScriptCompiler=k["default"];
v.Parser=h.parser;
v.parse=h.parse;
return v
}var f=n();
f.create=n;
l["default"](f);
f.Visitor=t["default"];
f["default"]=f;
u["default"]=f;
c.exports=u["default"]
},function(b,a){a["default"]=function(c){return c&&c.__esModule?c:{"default":c}
};
a.__esModule=true
},function(b,u,d){var r=d(3)["default"];
var a=d(1)["default"];
u.__esModule=true;
var t=d(4);
var g=r(t);
var s=d(18);
var h=a(s);
var m=d(6);
var o=a(m);
var n=d(5);
var c=r(n);
var f=d(19);
var p=r(f);
var k=d(20);
var j=a(k);
function l(){var v=new g.HandlebarsEnvironment();
c.extend(v,g);
v.SafeString=h["default"];
v.Exception=o["default"];
v.Utils=c;
v.escapeExpression=c.escapeExpression;
v.VM=p;
v.template=function(w){return p.template(w,v)
};
return v
}var e=l();
e.create=l;
j["default"](e);
e["default"]=e;
u["default"]=e;
b.exports=u["default"]
},function(b,a){a["default"]=function(e){if(e&&e.__esModule){return e
}else{var c={};
if(e!=null){for(var d in e){if(Object.prototype.hasOwnProperty.call(e,d)){c[d]=e[d]
}}}c["default"]=e;
return c
}};
a.__esModule=true
},function(e,x,g){var c=g(1)["default"];
x.__esModule=true;
x.HandlebarsEnvironment=l;
var o=g(5);
var v=g(6);
var f=c(v);
var h=g(7);
var y=g(15);
var n=g(17);
var d=c(n);
var w="4.0.5";
x.VERSION=w;
var s=7;
x.COMPILER_REVISION=s;
var u={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};
x.REVISION_CHANGES=u;
var r="[object Object]";
function l(B,A,z){this.helpers=B||{};
this.partials=A||{};
this.decorators=z||{};
h.registerDefaultHelpers(this);
y.registerDefaultDecorators(this)
}l.prototype={constructor:l,logger:d["default"],log:d["default"].log,registerHelper:function p(z,A){if(o.toString.call(z)===r){if(A){throw new f["default"]("Arg not supported with multiple helpers")
}o.extend(this.helpers,z)
}else{this.helpers[z]=A
}},unregisterHelper:function j(z){delete this.helpers[z]
},registerPartial:function k(A,z){if(o.toString.call(A)===r){o.extend(this.partials,A)
}else{if(typeof z==="undefined"){throw new f["default"]('Attempting to register a partial called "'+A+'" as undefined')
}this.partials[A]=z
}},unregisterPartial:function t(z){delete this.partials[z]
},registerDecorator:function b(z,A){if(o.toString.call(z)===r){if(A){throw new f["default"]("Arg not supported with multiple decorators")
}o.extend(this.decorators,z)
}else{this.decorators[z]=A
}},unregisterDecorator:function a(z){delete this.decorators[z]
}};
var m=d["default"].log;
x.log=m;
x.createFrame=o.createFrame;
x.logger=d["default"]
},function(d,g){g.__esModule=true;
g.extend=m;
g.indexOf=n;
g.escapeExpression=j;
g.isEmpty=h;
g.createFrame=p;
g.blockParams=l;
g.appendContextPath=e;
var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"};
var a=/[&<>"'`=]/g,f=/[&<>"'`=]/;
function r(s){return o[s]
}function m(u){for(var t=1;
t<arguments.length;
t++){for(var s in arguments[t]){if(Object.prototype.hasOwnProperty.call(arguments[t],s)){u[s]=arguments[t][s]
}}}return u
}var c=Object.prototype.toString;
g.toString=c;
var b=function b(s){return typeof s==="function"
};
if(b(/x/)){g.isFunction=b=function(s){return typeof s==="function"&&c.call(s)==="[object Function]"
}
}g.isFunction=b;
var k=Array.isArray||function(s){return s&&typeof s==="object"?c.call(s)==="[object Array]":false
};
g.isArray=k;
function n(v,u){for(var t=0,s=v.length;
t<s;
t++){if(v[t]===u){return t
}}return -1
}function j(s){if(typeof s!=="string"){if(s&&s.toHTML){return s.toHTML()
}else{if(s==null){return""
}else{if(!s){return s+""
}}}s=""+s
}if(!f.test(s)){return s
}return s.replace(a,r)
}function h(s){if(!s&&s!==0){return true
}else{if(k(s)&&s.length===0){return true
}else{return false
}}}function p(s){var t=m({},s);
t._parent=s;
return t
}function l(t,s){t.path=s;
return t
}function e(s,t){return(s?s+".":"")+t
}},function(c,a){a.__esModule=true;
var d=["description","fileName","lineNumber","message","name","number","stack"];
function b(k,j){var l=j&&j.loc,f=undefined,h=undefined;
if(l){f=l.start.line;
h=l.start.column;
k+=" - "+f+":"+h
}var g=Error.prototype.constructor.call(this,k);
for(var e=0;
e<d.length;
e++){this[d[e]]=g[d[e]]
}if(Error.captureStackTrace){Error.captureStackTrace(this,b)
}if(l){this.lineNumber=f;
this.column=h
}}b.prototype=new Error();
a["default"]=b;
c.exports=a["default"]
},function(e,u,f){var c=f(1)["default"];
u.__esModule=true;
u.registerDefaultHelpers=p;
var a=f(8);
var n=c(a);
var l=f(9);
var d=c(l);
var g=f(10);
var t=c(g);
var j=f(11);
var b=c(j);
var o=f(12);
var r=c(o);
var m=f(13);
var h=c(m);
var k=f(14);
var s=c(k);
function p(v){n["default"](v);
d["default"](v);
t["default"](v);
b["default"](v);
r["default"](v);
h["default"](v);
s["default"](v)
}},function(b,a,d){a.__esModule=true;
var c=d(5);
a["default"]=function(e){e.registerHelper("blockHelperMissing",function(h,g){var f=g.inverse,j=g.fn;
if(h===true){return j(this)
}else{if(h===false||h==null){return f(this)
}else{if(c.isArray(h)){if(h.length>0){if(g.ids){g.ids=[g.name]
}return e.helpers.each(h,g)
}else{return f(this)
}}else{if(g.data&&g.ids){var k=c.createFrame(g.data);
k.contextPath=c.appendContextPath(g.data.contextPath,g.name);
g={data:k}
}return j(h,g)
}}}})
};
b.exports=a["default"]
},function(c,a,f){var d=f(1)["default"];
a.__esModule=true;
var e=f(5);
var b=f(6);
var g=d(b);
a["default"]=function(h){h.registerHelper("each",function(k,w){if(!w){throw new g["default"]("Must pass iterator to #each")
}var u=w.fn,o=w.inverse,r=0,t="",p=undefined,l=undefined;
if(w.data&&w.ids){l=e.appendContextPath(w.data.contextPath,w.ids[0])+"."
}if(e.isFunction(k)){k=k.call(this)
}if(w.data){p=e.createFrame(w.data)
}function m(y,j,x){if(p){p.key=y;
p.index=j;
p.first=j===0;
p.last=!!x;
if(l){p.contextPath=l+y
}}t=t+u(k[y],{data:p,blockParams:e.blockParams([k[y],y],[l+y,null])})
}if(k&&typeof k==="object"){if(e.isArray(k)){for(var n=k.length;
r<n;
r++){if(r in k){m(r,r,r===k.length-1)
}}}else{var s=undefined;
for(var v in k){if(k.hasOwnProperty(v)){if(s!==undefined){m(s,r-1)
}s=v;
r++
}}if(s!==undefined){m(s,r-1,true)
}}}if(r===0){t=o(this)
}return t
})
};
c.exports=a["default"]
},function(c,a,e){var d=e(1)["default"];
a.__esModule=true;
var b=e(6);
var f=d(b);
a["default"]=function(g){g.registerHelper("helperMissing",function(){if(arguments.length===1){return undefined
}else{throw new f["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')
}})
};
c.exports=a["default"]
},function(b,a,d){a.__esModule=true;
var c=d(5);
a["default"]=function(e){e.registerHelper("if",function(g,f){if(c.isFunction(g)){g=g.call(this)
}if(!f.hash.includeZero&&!g||c.isEmpty(g)){return f.inverse(this)
}else{return f.fn(this)
}});
e.registerHelper("unless",function(g,f){return e.helpers["if"].call(this,g,{fn:f.inverse,inverse:f.fn,hash:f.hash})
})
};
b.exports=a["default"]
},function(b,a){a.__esModule=true;
a["default"]=function(c){c.registerHelper("log",function(){var e=[undefined],d=arguments[arguments.length-1];
for(var f=0;
f<arguments.length-1;
f++){e.push(arguments[f])
}var g=1;
if(d.hash.level!=null){g=d.hash.level
}else{if(d.data&&d.data.level!=null){g=d.data.level
}}e[0]=g;
c.log.apply(c,e)
})
};
b.exports=a["default"]
},function(b,a){a.__esModule=true;
a["default"]=function(c){c.registerHelper("lookup",function(e,d){return e&&e[d]
})
};
b.exports=a["default"]
},function(b,a,d){a.__esModule=true;
var c=d(5);
a["default"]=function(e){e.registerHelper("with",function(g,f){if(c.isFunction(g)){g=g.call(this)
}var h=f.fn;
if(!c.isEmpty(g)){var j=f.data;
if(f.data&&f.ids){j=c.createFrame(f.data);
j.contextPath=c.appendContextPath(f.data.contextPath,f.ids[0])
}return h(g,{data:j,blockParams:c.blockParams([g],[j&&j.contextPath])})
}else{return f.inverse(this)
}})
};
b.exports=a["default"]
},function(d,c,g){var f=g(1)["default"];
c.__esModule=true;
c.registerDefaultDecorators=e;
var b=g(16);
var a=f(b);
function e(h){a["default"](h)
}},function(b,a,d){a.__esModule=true;
var c=d(5);
a["default"]=function(e){e.registerDecorator("inline",function(k,j,f,h){var g=k;
if(!j.partials){j.partials={};
g=function(o,m){var n=f.partials;
f.partials=c.extend({},n,j.partials);
var l=k(o,m);
f.partials=n;
return l
}
}j.partials[h.args[0]]=h.fn;
return g
})
};
b.exports=a["default"]
},function(c,a,f){a.__esModule=true;
var e=f(5);
var b={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function g(j){if(typeof j==="string"){var h=e.indexOf(b.methodMap,j.toLowerCase());
if(h>=0){j=h
}else{j=parseInt(j,10)
}}return j
},log:function d(m){m=b.lookupLevel(m);
if(typeof console!=="undefined"&&b.lookupLevel(b.level)<=m){var l=b.methodMap[m];
if(!console[l]){l="log"
}for(var h=arguments.length,k=Array(h>1?h-1:0),j=1;
j<h;
j++){k[j-1]=arguments[j]
}console[l].apply(console,k)
}}};
a["default"]=b;
c.exports=a["default"]
},function(b,a){a.__esModule=true;
function c(d){this.string=d
}c.prototype.toString=c.prototype.toHTML=function(){return""+this.string
};
a["default"]=c;
b.exports=a["default"]
},function(b,s,e){var r=e(3)["default"];
var a=e(1)["default"];
s.__esModule=true;
s.checkRevision=l;
s.template=o;
s.wrapProgram=h;
s.resolvePartial=k;
s.invokePartial=t;
s.noop=f;
var j=e(5);
var d=r(j);
var m=e(6);
var c=a(m);
var n=e(4);
function l(w){var v=w&&w[0]||1,y=n.COMPILER_REVISION;
if(v!==y){if(v<y){var u=n.REVISION_CHANGES[y],x=n.REVISION_CHANGES[v];
throw new c["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+u+") or downgrade your runtime to an older version ("+x+").")
}else{throw new c["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+w[1]+").")
}}}function o(E,y){if(!y){throw new c["default"]("No environment passed to template")
}if(!E||!E.main){throw new c["default"]("Unknown template object: "+typeof E)
}E.main.decorator=E.main_d;
y.VM.checkRevision(E.compiler);
function F(J,M,K){if(K.hash){M=d.extend({},M,K.hash);
if(K.ids){K.ids[0]=true
}}J=y.VM.resolvePartial.call(this,J,M,K);
var G=y.VM.invokePartial.call(this,J,M,K);
if(G==null&&y.compile){K.partials[K.name]=y.compile(J,E.compilerOptions,y);
G=K.partials[K.name](M,K)
}if(G!=null){if(K.indent){var I=G.split("\n");
for(var L=0,H=I.length;
L<H;
L++){if(!I[L]&&L+1===H){break
}I[L]=K.indent+I[L]
}G=I.join("\n")
}return G
}else{throw new c["default"]("The partial "+K.name+" could not be compiled when running in runtime-only mode")
}}var u={strict:function D(H,G){if(!(G in H)){throw new c["default"]('"'+G+'" not defined in '+H)
}return H[G]
},lookup:function v(J,H){var G=J.length;
for(var I=0;
I<G;
I++){if(J[I]&&J[I][H]!=null){return J[I][H]
}}},lambda:function z(H,G){return typeof H==="function"?H.call(G):H
},escapeExpression:d.escapeExpression,invokePartial:F,fn:function C(H){var G=E[H];
G.decorator=E[H+"_d"];
return G
},programs:[],program:function x(I,L,H,K,M){var G=this.programs[I],J=this.fn(I);
if(L||M||K||H){G=h(this,I,J,L,H,K,M)
}else{if(!G){G=this.programs[I]=h(this,I,J)
}}return G
},data:function w(G,H){while(G&&H--){G=G._parent
}return G
},merge:function B(I,G){var H=I||G;
if(I&&G&&I!==G){H=d.extend({},G,I)
}return H
},noop:y.VM.noop,compilerInfo:E.compiler};
function A(I){var H=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];
var K=H.data;
A._setup(H);
if(!H.partial&&E.useData){K=p(I,K)
}var L=undefined,J=E.useBlockParams?[]:undefined;
if(E.useDepths){if(H.depths){L=I!==H.depths[0]?[I].concat(H.depths):H.depths
}else{L=[I]
}}function G(M){return""+E.main(u,M,u.helpers,u.partials,K,J,L)
}G=g(E.main,G,u,H.depths||[],K,J);
return G(I,H)
}A.isTop=true;
A._setup=function(G){if(!G.partial){u.helpers=u.merge(G.helpers,y.helpers);
if(E.usePartial){u.partials=u.merge(G.partials,y.partials)
}if(E.usePartial||E.useDecorators){u.decorators=u.merge(G.decorators,y.decorators)
}}else{u.helpers=G.helpers;
u.partials=G.partials;
u.decorators=G.decorators
}};
A._child=function(G,I,H,J){if(E.useBlockParams&&!H){throw new c["default"]("must pass block params")
}if(E.useDepths&&!J){throw new c["default"]("must pass parent depths")
}return h(u,G,E[G],I,0,H,J)
};
return A
}function h(u,w,x,z,v,y,B){function A(D){var C=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];
var E=B;
if(B&&D!==B[0]){E=[D].concat(B)
}return x(u,D,u.helpers,u.partials,C.data||z,y&&[C.blockParams].concat(y),E)
}A=g(x,A,u,B,z,y);
A.program=w;
A.depth=B?B.length:0;
A.blockParams=v||0;
return A
}function k(u,w,v){if(!u){if(v.name==="@partial-block"){u=v.data["partial-block"]
}else{u=v.partials[v.name]
}}else{if(!u.call&&!v.name){v.name=u;
u=v.partials[u]
}}return u
}function t(u,w,v){v.partial=true;
if(v.ids){v.data.contextPath=v.ids[0]||v.data.contextPath
}var x=undefined;
if(v.fn&&v.fn!==f){v.data=n.createFrame(v.data);
x=v.data["partial-block"]=v.fn;
if(x.partials){v.partials=d.extend({},v.partials,x.partials)
}}if(u===undefined&&x){u=x
}if(u===undefined){throw new c["default"]("The partial "+v.name+" could not be found")
}else{if(u instanceof Function){return u(w,v)
}}}function f(){return""
}function p(u,v){if(!v||!("root" in v)){v=v?n.createFrame(v):{};
v.root=u
}return v
}function g(w,z,u,A,y,x){if(w.decorator){var v={};
z=w.decorator(z,v,u,A&&A[0],y,x,A);
d.extend(z,v)
}return z
}},function(b,a){(function(c){a.__esModule=true;
a["default"]=function(f){var d=typeof c!=="undefined"?c:window,e=d.Handlebars;
f.noConflict=function(){if(d.Handlebars===f){d.Handlebars=e
}return f
}
};
b.exports=a["default"]
}.call(a,(function(){return this
}())))
},function(c,a){a.__esModule=true;
var e={helpers:{helperExpression:function d(g){return g.type==="SubExpression"||(g.type==="MustacheStatement"||g.type==="BlockStatement")&&!!(g.params&&g.params.length||g.hash)
},scopedId:function f(g){return(/^\.|this\b/.test(g.original))
},simpleId:function b(g){return g.parts.length===1&&!e.helpers.scopedId(g)&&!g.depth
}}};
a["default"]=e;
c.exports=a["default"]
},function(c,e,b){var n=b(1)["default"];
var g=b(3)["default"];
e.__esModule=true;
e.parse=d;
var h=b(23);
var j=n(h);
var f=b(24);
var m=n(f);
var a=b(26);
var l=g(a);
var o=b(5);
e.parser=j["default"];
var k={};
o.extend(k,l);
function d(p,r){if(p.type==="Program"){return p
}j["default"].yy=k;
k.locInfo=function(t){return new k.SourceLocation(r&&r.srcName,t)
};
var s=new m["default"](r);
return s.accept(j["default"].parse(p))
}},function(c,b){var a=(function(){var k={trace:function f(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition_plus0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,"$accept":0,"$end":1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,1],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function e(r,s,l,t,u,v,n){var o=v.length-1;
switch(u){case 1:return v[o-1];
break;
case 2:this.$=t.prepareProgram(v[o]);
break;
case 3:this.$=v[o];
break;
case 4:this.$=v[o];
break;
case 5:this.$=v[o];
break;
case 6:this.$=v[o];
break;
case 7:this.$=v[o];
break;
case 8:this.$=v[o];
break;
case 9:this.$={type:"CommentStatement",value:t.stripComment(v[o]),strip:t.stripFlags(v[o],v[o]),loc:t.locInfo(this._$)};
break;
case 10:this.$={type:"ContentStatement",original:v[o],value:v[o],loc:t.locInfo(this._$)};
break;
case 11:this.$=t.prepareRawBlock(v[o-2],v[o-1],v[o],this._$);
break;
case 12:this.$={path:v[o-3],params:v[o-2],hash:v[o-1]};
break;
case 13:this.$=t.prepareBlock(v[o-3],v[o-2],v[o-1],v[o],false,this._$);
break;
case 14:this.$=t.prepareBlock(v[o-3],v[o-2],v[o-1],v[o],true,this._$);
break;
case 15:this.$={open:v[o-5],path:v[o-4],params:v[o-3],hash:v[o-2],blockParams:v[o-1],strip:t.stripFlags(v[o-5],v[o])};
break;
case 16:this.$={path:v[o-4],params:v[o-3],hash:v[o-2],blockParams:v[o-1],strip:t.stripFlags(v[o-5],v[o])};
break;
case 17:this.$={path:v[o-4],params:v[o-3],hash:v[o-2],blockParams:v[o-1],strip:t.stripFlags(v[o-5],v[o])};
break;
case 18:this.$={strip:t.stripFlags(v[o-1],v[o-1]),program:v[o]};
break;
case 19:var m=t.prepareBlock(v[o-2],v[o-1],v[o],v[o],false,this._$),p=t.prepareProgram([m],v[o-1].loc);
p.chained=true;
this.$={strip:v[o-2].strip,program:p,chain:true};
break;
case 20:this.$=v[o];
break;
case 21:this.$={path:v[o-1],strip:t.stripFlags(v[o-2],v[o])};
break;
case 22:this.$=t.prepareMustache(v[o-3],v[o-2],v[o-1],v[o-4],t.stripFlags(v[o-4],v[o]),this._$);
break;
case 23:this.$=t.prepareMustache(v[o-3],v[o-2],v[o-1],v[o-4],t.stripFlags(v[o-4],v[o]),this._$);
break;
case 24:this.$={type:"PartialStatement",name:v[o-3],params:v[o-2],hash:v[o-1],indent:"",strip:t.stripFlags(v[o-4],v[o]),loc:t.locInfo(this._$)};
break;
case 25:this.$=t.preparePartialBlock(v[o-2],v[o-1],v[o],this._$);
break;
case 26:this.$={path:v[o-3],params:v[o-2],hash:v[o-1],strip:t.stripFlags(v[o-4],v[o])};
break;
case 27:this.$=v[o];
break;
case 28:this.$=v[o];
break;
case 29:this.$={type:"SubExpression",path:v[o-3],params:v[o-2],hash:v[o-1],loc:t.locInfo(this._$)};
break;
case 30:this.$={type:"Hash",pairs:v[o],loc:t.locInfo(this._$)};
break;
case 31:this.$={type:"HashPair",key:t.id(v[o-2]),value:v[o],loc:t.locInfo(this._$)};
break;
case 32:this.$=t.id(v[o-1]);
break;
case 33:this.$=v[o];
break;
case 34:this.$=v[o];
break;
case 35:this.$={type:"StringLiteral",value:v[o],original:v[o],loc:t.locInfo(this._$)};
break;
case 36:this.$={type:"NumberLiteral",value:Number(v[o]),original:Number(v[o]),loc:t.locInfo(this._$)};
break;
case 37:this.$={type:"BooleanLiteral",value:v[o]==="true",original:v[o]==="true",loc:t.locInfo(this._$)};
break;
case 38:this.$={type:"UndefinedLiteral",original:undefined,value:undefined,loc:t.locInfo(this._$)};
break;
case 39:this.$={type:"NullLiteral",original:null,value:null,loc:t.locInfo(this._$)};
break;
case 40:this.$=v[o];
break;
case 41:this.$=v[o];
break;
case 42:this.$=t.preparePath(true,v[o],this._$);
break;
case 43:this.$=t.preparePath(false,v[o],this._$);
break;
case 44:v[o-2].push({part:t.id(v[o]),original:v[o],separator:v[o-1]});
this.$=v[o-2];
break;
case 45:this.$=[{part:t.id(v[o]),original:v[o]}];
break;
case 46:this.$=[];
break;
case 47:v[o-1].push(v[o]);
break;
case 48:this.$=[v[o]];
break;
case 49:v[o-1].push(v[o]);
break;
case 50:this.$=[];
break;
case 51:v[o-1].push(v[o]);
break;
case 58:this.$=[];
break;
case 59:v[o-1].push(v[o]);
break;
case 64:this.$=[];
break;
case 65:v[o-1].push(v[o]);
break;
case 70:this.$=[];
break;
case 71:v[o-1].push(v[o]);
break;
case 78:this.$=[];
break;
case 79:v[o-1].push(v[o]);
break;
case 82:this.$=[];
break;
case 83:v[o-1].push(v[o]);
break;
case 86:this.$=[];
break;
case 87:v[o-1].push(v[o]);
break;
case 90:this.$=[];
break;
case 91:v[o-1].push(v[o]);
break;
case 94:this.$=[];
break;
case 95:v[o-1].push(v[o]);
break;
case 98:this.$=[v[o]];
break;
case 99:v[o-1].push(v[o]);
break;
case 100:this.$=[v[o]];
break;
case 101:v[o-1].push(v[o]);
break
}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{13:40,15:[1,20],17:39},{20:42,56:41,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:45,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:48,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:42,56:49,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:50,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,51]},{72:[1,35],86:52},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:53,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:54,38:56,39:[1,58],43:57,44:[1,59],45:55,47:[2,54]},{28:60,43:61,44:[1,59],47:[2,56]},{13:63,15:[1,20],18:[1,62]},{15:[2,48],18:[2,48]},{33:[2,86],57:64,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:65,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:66,47:[1,67]},{30:68,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:69,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:70,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:71,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:75,33:[2,80],50:72,63:73,64:76,65:[1,44],69:74,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,80]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,51]},{20:75,53:81,54:[2,84],63:82,64:76,65:[1,44],69:83,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:84,47:[1,67]},{47:[2,55]},{4:85,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:86,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:87,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:88,47:[1,67]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:75,33:[2,88],58:89,63:90,64:76,65:[1,44],69:91,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:92,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:93,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,31:94,33:[2,60],63:95,64:76,65:[1,44],69:96,70:77,71:78,72:[1,79],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,66],36:97,63:98,64:76,65:[1,44],69:99,70:77,71:78,72:[1,79],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,22:100,23:[2,52],63:101,64:76,65:[1,44],69:102,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,92],62:103,63:104,64:76,65:[1,44],69:105,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,106]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:107,72:[1,108],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,109],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,110]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:56,39:[1,58],43:57,44:[1,59],45:112,46:111,47:[2,76]},{33:[2,70],40:113,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,114]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:75,63:116,64:76,65:[1,44],67:115,68:[2,96],69:117,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,118]},{32:119,33:[2,62],74:120,75:[1,121]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:122,74:123,75:[1,121]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,124]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,125]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,109]},{20:75,63:126,64:76,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:75,33:[2,72],41:127,63:128,64:76,65:[1,44],69:129,70:77,71:78,72:[1,79],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,130]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,131]},{33:[2,63]},{72:[1,133],76:132},{33:[1,134]},{33:[2,69]},{15:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:135,74:136,75:[1,121]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,138],77:[1,137]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,139]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],55:[2,55],57:[2,20],61:[2,57],74:[2,81],83:[2,85],87:[2,18],91:[2,89],102:[2,53],105:[2,93],111:[2,19],112:[2,77],117:[2,97],120:[2,63],123:[2,69],124:[2,12],136:[2,75],137:[2,32]},parseError:function g(m,l){throw new Error(m)
},parse:function j(x){var E=this,u=[0],N=[null],z=[],O=this.table,m="",y=0,L=0,o=0,w=2,B=1;
this.lexer.setInput(x);
this.lexer.yy=this.yy;
this.yy.lexer=this.lexer;
this.yy.parser=this;
if(typeof this.lexer.yylloc=="undefined"){this.lexer.yylloc={}
}var n=this.lexer.yylloc;
z.push(n);
var s=this.lexer.options&&this.lexer.options.ranges;
if(typeof this.yy.parseError==="function"){this.parseError=this.yy.parseError
}function D(p){u.length=u.length-2*p;
N.length=N.length-p;
z.length=z.length-p
}function C(){var p;
p=E.lexer.lex()||1;
if(typeof p!=="number"){p=E.symbols_[p]||p
}return p
}var K,G,t,J,P,A,I={},F,M,l,v;
while(true){t=u[u.length-1];
if(this.defaultActions[t]){J=this.defaultActions[t]
}else{if(K===null||typeof K=="undefined"){K=C()
}J=O[t]&&O[t][K]
}if(typeof J==="undefined"||!J.length||!J[0]){var H="";
if(!o){v=[];
for(F in O[t]){if(this.terminals_[F]&&F>2){v.push("'"+this.terminals_[F]+"'")
}}if(this.lexer.showPosition){H="Parse error on line "+(y+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+v.join(", ")+", got '"+(this.terminals_[K]||K)+"'"
}else{H="Parse error on line "+(y+1)+": Unexpected "+(K==1?"end of input":"'"+(this.terminals_[K]||K)+"'")
}this.parseError(H,{text:this.lexer.match,token:this.terminals_[K]||K,line:this.lexer.yylineno,loc:n,expected:v})
}}if(J[0] instanceof Array&&J.length>1){throw new Error("Parse Error: multiple actions possible at state: "+t+", token: "+K)
}switch(J[0]){case 1:u.push(K);
N.push(this.lexer.yytext);
z.push(this.lexer.yylloc);
u.push(J[1]);
K=null;
if(!G){L=this.lexer.yyleng;
m=this.lexer.yytext;
y=this.lexer.yylineno;
n=this.lexer.yylloc;
if(o>0){o--
}}else{K=G;
G=null
}break;
case 2:M=this.productions_[J[1]][1];
I.$=N[N.length-M];
I._$={first_line:z[z.length-(M||1)].first_line,last_line:z[z.length-1].last_line,first_column:z[z.length-(M||1)].first_column,last_column:z[z.length-1].last_column};
if(s){I._$.range=[z[z.length-(M||1)].range[0],z[z.length-1].range[1]]
}A=this.performAction.call(I,m,L,y,this.yy,J[1],N,z);
if(typeof A!=="undefined"){return A
}if(M){u=u.slice(0,-1*M*2);
N=N.slice(0,-1*M);
z=z.slice(0,-1*M)
}u.push(this.productions_[J[1]][0]);
N.push(I.$);
z.push(I._$);
l=O[u[u.length-2]][u[u.length-1]];
u.push(l);
break;
case 3:return true
}}return true
}};
var d=(function(){var n={EOF:1,parseError:function p(E,D){if(this.yy.parser){this.yy.parser.parseError(E,D)
}else{throw new Error(E)
}},setInput:function o(D){this._input=D;
this._more=this._less=this.done=false;
this.yylineno=this.yyleng=0;
this.yytext=this.matched=this.match="";
this.conditionStack=["INITIAL"];
this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};
if(this.options.ranges){this.yylloc.range=[0,0]
}this.offset=0;
return this
},input:function z(){var E=this._input[0];
this.yytext+=E;
this.yyleng++;
this.offset++;
this.match+=E;
this.matched+=E;
var D=E.match(/(?:\r\n?|\n).*/g);
if(D){this.yylineno++;
this.yylloc.last_line++
}else{this.yylloc.last_column++
}if(this.options.ranges){this.yylloc.range[1]++
}this._input=this._input.slice(1);
return E
},unput:function x(F){var D=F.length;
var E=F.split(/(?:\r\n?|\n)/g);
this._input=F+this._input;
this.yytext=this.yytext.substr(0,this.yytext.length-D-1);
this.offset-=D;
var H=this.match.split(/(?:\r\n?|\n)/g);
this.match=this.match.substr(0,this.match.length-1);
this.matched=this.matched.substr(0,this.matched.length-1);
if(E.length-1){this.yylineno-=E.length-1
}var G=this.yylloc.range;
this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:E?(E.length===H.length?this.yylloc.first_column:0)+H[H.length-E.length].length-E[0].length:this.yylloc.first_column-D};
if(this.options.ranges){this.yylloc.range=[G[0],G[0]+this.yyleng-D]
}return this
},more:function v(){this._more=true;
return this
},less:function A(D){this.unput(this.match.slice(D))
},pastInput:function t(){var D=this.matched.substr(0,this.matched.length-this.match.length);
return(D.length>20?"...":"")+D.substr(-20).replace(/\n/g,"")
},upcomingInput:function B(){var D=this.match;
if(D.length<20){D+=this._input.substr(0,20-D.length)
}return(D.substr(0,20)+(D.length>20?"...":"")).replace(/\n/g,"")
},showPosition:function w(){var D=this.pastInput();
var E=new Array(D.length+1).join("-");
return D+this.upcomingInput()+"\n"+E+"^"
},next:function s(){if(this.done){return this.EOF
}if(!this._input){this.done=true
}var J,H,E,G,F,D;
if(!this._more){this.yytext="";
this.match=""
}var K=this._currentRules();
for(var I=0;
I<K.length;
I++){E=this._input.match(this.rules[K[I]]);
if(E&&(!H||E[0].length>H[0].length)){H=E;
G=I;
if(!this.options.flex){break
}}}if(H){D=H[0].match(/(?:\r\n?|\n).*/g);
if(D){this.yylineno+=D.length
}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:D?D[D.length-1].length-D[D.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+H[0].length};
this.yytext+=H[0];
this.match+=H[0];
this.matches=H;
this.yyleng=this.yytext.length;
if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]
}this._more=false;
this._input=this._input.slice(H[0].length);
this.matched+=H[0];
J=this.performAction.call(this,this.yy,this,K[G],this.conditionStack[this.conditionStack.length-1]);
if(this.done&&this._input){this.done=false
}if(J){return J
}else{return
}}if(this._input===""){return this.EOF
}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})
}},lex:function l(){var D=this.next();
if(typeof D!=="undefined"){return D
}else{return this.lex()
}},begin:function m(D){this.conditionStack.push(D)
},popState:function r(){return this.conditionStack.pop()
},_currentRules:function C(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules
},topState:function u(){return this.conditionStack[this.conditionStack.length-2]
},pushState:function m(D){this.begin(D)
}};
n.options={};
n.performAction=function y(I,E,H,D){function F(K,J){return E.yytext=E.yytext.substr(K,E.yyleng-J)
}var G=D;
switch(H){case 0:if(E.yytext.slice(-2)==="\\\\"){F(0,1);
this.begin("mu")
}else{if(E.yytext.slice(-1)==="\\"){F(0,1);
this.begin("emu")
}else{this.begin("mu")
}}if(E.yytext){return 15
}break;
case 1:return 15;
break;
case 2:this.popState();
return 15;
break;
case 3:this.begin("raw");
return 15;
break;
case 4:this.popState();
if(this.conditionStack[this.conditionStack.length-1]==="raw"){return 15
}else{E.yytext=E.yytext.substr(5,E.yyleng-9);
return"END_RAW_BLOCK"
}break;
case 5:return 15;
break;
case 6:this.popState();
return 14;
break;
case 7:return 65;
break;
case 8:return 68;
break;
case 9:return 19;
break;
case 10:this.popState();
this.begin("raw");
return 23;
break;
case 11:return 55;
break;
case 12:return 60;
break;
case 13:return 29;
break;
case 14:return 47;
break;
case 15:this.popState();
return 44;
break;
case 16:this.popState();
return 44;
break;
case 17:return 34;
break;
case 18:return 39;
break;
case 19:return 51;
break;
case 20:return 48;
break;
case 21:this.unput(E.yytext);
this.popState();
this.begin("com");
break;
case 22:this.popState();
return 14;
break;
case 23:return 48;
break;
case 24:return 73;
break;
case 25:return 72;
break;
case 26:return 72;
break;
case 27:return 87;
break;
case 28:break;
case 29:this.popState();
return 54;
break;
case 30:this.popState();
return 33;
break;
case 31:E.yytext=F(1,2).replace(/\\"/g,'"');
return 80;
break;
case 32:E.yytext=F(1,2).replace(/\\'/g,"'");
return 80;
break;
case 33:return 85;
break;
case 34:return 82;
break;
case 35:return 82;
break;
case 36:return 83;
break;
case 37:return 84;
break;
case 38:return 81;
break;
case 39:return 75;
break;
case 40:return 77;
break;
case 41:return 72;
break;
case 42:E.yytext=E.yytext.replace(/\\([\\\]])/g,"$1");
return 72;
break;
case 43:return"INVALID";
break;
case 44:return 5;
break
}};
n.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/];
n.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:false},emu:{rules:[2],inclusive:false},com:{rules:[6],inclusive:false},raw:{rules:[3,4,5],inclusive:false},INITIAL:{rules:[0,1,44],inclusive:true}};
return n
})();
k.lexer=d;
function h(){this.yy={}
}h.prototype=k;
k.Parser=h;
return new h()
})();
b.__esModule=true;
b["default"]=a
},function(b,c,a){var k=a(1)["default"];
c.__esModule=true;
var e=a(25);
var l=k(e);
function d(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
this.options=m
}d.prototype=new l["default"]();
d.prototype.Program=function(u){var w=!this.options.ignoreStandalone;
var p=!this.isRootSeen;
this.isRootSeen=true;
var v=u.body;
for(var t=0,r=v.length;
t<r;
t++){var x=v[t],m=this.accept(x);
if(!m){continue
}var o=f(v,t,p),s=h(v,t,p),n=m.openStandalone&&o,z=m.closeStandalone&&s,y=m.inlineStandalone&&o&&s;
if(m.close){g(v,t,true)
}if(m.open){j(v,t,true)
}if(w&&y){g(v,t);
if(j(v,t)){if(x.type==="PartialStatement"){x.indent=/([ \t]+$)/.exec(v[t-1].original)[1]
}}}if(w&&n){g((x.program||x.inverse).body);
j(v,t)
}if(w&&z){g(v,t);
j((x.inverse||x.program).body)
}}return u
};
d.prototype.BlockStatement=d.prototype.DecoratorBlock=d.prototype.PartialBlockStatement=function(t){this.accept(t.program);
this.accept(t.inverse);
var o=t.program||t.inverse,m=t.program&&t.inverse,n=m,s=m;
if(m&&m.chained){n=m.body[0].program;
while(s.chained){s=s.body[s.body.length-1].program
}}var p={open:t.openStrip.open,close:t.closeStrip.close,openStandalone:h(o.body),closeStandalone:f((n||o).body)};
if(t.openStrip.close){g(o.body,null,true)
}if(m){var r=t.inverseStrip;
if(r.open){j(o.body,null,true)
}if(r.close){g(n.body,null,true)
}if(t.closeStrip.open){j(s.body,null,true)
}if(!this.options.ignoreStandalone&&f(o.body)&&h(n.body)){j(o.body);
g(n.body)
}}else{if(t.closeStrip.open){j(o.body,null,true)
}}return p
};
d.prototype.Decorator=d.prototype.MustacheStatement=function(m){return m.strip
};
d.prototype.PartialStatement=d.prototype.CommentStatement=function(n){var m=n.strip||{};
return{inlineStandalone:true,open:m.open,close:m.close}
};
function f(m,o,n){if(o===undefined){o=m.length
}var r=m[o-1],p=m[o-2];
if(!r){return n
}if(r.type==="ContentStatement"){return(p||!n?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(r.original)
}}function h(m,o,n){if(o===undefined){o=-1
}var r=m[o+1],p=m[o+2];
if(!r){return n
}if(r.type==="ContentStatement"){return(p||!n?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(r.original)
}}function g(n,p,m){var r=n[p==null?0:p+1];
if(!r||r.type!=="ContentStatement"||!m&&r.rightStripped){return
}var o=r.value;
r.value=r.value.replace(m?/^\s+/:/^[ \t]*\r?\n?/,"");
r.rightStripped=r.value!==o
}function j(n,p,m){var r=n[p==null?n.length-1:p-1];
if(!r||r.type!=="ContentStatement"||!m&&r.leftStripped){return
}var o=r.value;
r.value=r.value.replace(m?/\s+$/:/[ \t]+$/,"");
r.leftStripped=r.value!==o;
return r.leftStripped
}c["default"]=d;
b.exports=c["default"]
},function(c,A,e){var a=e(1)["default"];
A.__esModule=true;
var v=e(6);
var d=a(v);
function z(){this.parents=[]
}z.prototype={constructor:z,mutating:false,acceptKey:function s(D,C){var E=this.accept(D[C]);
if(this.mutating){if(E&&!z.prototype[E.type]){throw new d["default"]('Unexpected node type "'+E.type+'" found when accepting '+C+" on "+D.type)
}D[C]=E
}},acceptRequired:function w(D,C){this.acceptKey(D,C);
if(!D[C]){throw new d["default"](D.type+" requires "+C)
}},acceptArray:function x(E){for(var D=0,C=E.length;
D<C;
D++){this.acceptKey(E,D);
if(!E[D]){E.splice(D,1);
D--;
C--
}}},accept:function f(D){if(!D){return
}if(!this[D.type]){throw new d["default"]("Unknown type: "+D.type,D)
}if(this.current){this.parents.unshift(this.current)
}this.current=D;
var C=this[D.type](D);
this.current=this.parents.shift();
if(!this.mutating||C){return C
}else{if(C!==false){return D
}}},Program:function y(C){this.acceptArray(C.body)
},MustacheStatement:o,Decorator:o,BlockStatement:h,DecoratorBlock:h,PartialStatement:B,PartialBlockStatement:function b(C){B.call(this,C);
this.acceptKey(C,"program")
},ContentStatement:function u(){},CommentStatement:function n(){},SubExpression:o,PathExpression:function g(){},StringLiteral:function r(){},NumberLiteral:function t(){},BooleanLiteral:function m(){},UndefinedLiteral:function p(){},NullLiteral:function l(){},Hash:function j(C){this.acceptArray(C.pairs)
},HashPair:function k(C){this.acceptRequired(C,"value")
}};
function o(C){this.acceptRequired(C,"path");
this.acceptArray(C.params);
this.acceptKey(C,"hash")
}function h(C){o.call(this,C);
this.acceptKey(C,"program");
this.acceptKey(C,"inverse")
}function B(C){this.acceptRequired(C,"name");
this.acceptArray(C.params);
this.acceptKey(C,"hash")
}A["default"]=z;
c.exports=A["default"]
},function(d,h,c){var s=c(1)["default"];
h.__esModule=true;
h.SourceLocation=m;
h.id=b;
h.stripFlags=g;
h.stripComment=p;
h.preparePath=f;
h.prepareMustache=l;
h.prepareRawBlock=o;
h.prepareBlock=r;
h.prepareProgram=k;
h.preparePartialBlock=n;
var e=c(6);
var a=s(e);
function j(t,v){v=v.path?v.path.original:v;
if(t.path.original!==v){var u={loc:t.path.loc};
throw new a["default"](t.path.original+" doesn't match "+v,u)
}}function m(u,t){this.source=u;
this.start={line:t.first_line,column:t.first_column};
this.end={line:t.last_line,column:t.last_column}
}function b(t){if(/^\[.*\]$/.test(t)){return t.substr(1,t.length-2)
}else{return t
}}function g(t,u){return{open:t.charAt(2)==="~",close:u.charAt(u.length-3)==="~"}
}function p(t){return t.replace(/^\{\{~?\!-?-?/,"").replace(/-?-?~?\}\}$/,"")
}function f(A,y,C){C=this.locInfo(C);
var w=A?"@":"",D=[],z=0,v="";
for(var B=0,x=y.length;
B<x;
B++){var u=y[B].part,t=y[B].original!==u;
w+=(y[B].separator||"")+u;
if(!t&&(u===".."||u==="."||u==="this")){if(D.length>0){throw new a["default"]("Invalid path: "+w,{loc:C})
}else{if(u===".."){z++;
v+="../"
}}}else{D.push(u)
}}return{type:"PathExpression",data:A,depth:z,parts:D,original:w,loc:C}
}function l(B,v,x,y,u,A){var z=y.charAt(3)||y.charAt(2),t=z!=="{"&&z!=="&";
var w=/\*/.test(y);
return{type:w?"Decorator":"MustacheStatement",path:B,params:v,hash:x,escaped:t,strip:u,loc:this.locInfo(A)}
}function o(t,w,x,v){j(t,x);
v=this.locInfo(v);
var u={type:"Program",body:w,strip:{},loc:v};
return{type:"BlockStatement",path:t.path,params:t.params,hash:t.hash,program:u,openStrip:{},inverseStrip:{},closeStrip:{},loc:v}
}function r(y,x,z,B,u,A){if(B&&B.path){j(y,B)
}var v=/\*/.test(y.open);
x.blockParams=y.blockParams;
var w=undefined,t=undefined;
if(z){if(v){throw new a["default"]("Unexpected inverse block on decorator",z)
}if(z.chain){z.program.body[0].closeStrip=B.strip
}t=z.strip;
w=z.program
}if(u){u=w;
w=x;
x=u
}return{type:v?"DecoratorBlock":"BlockStatement",path:y.path,params:y.params,hash:y.hash,program:x,inverse:w,openStrip:y.strip,inverseStrip:t,closeStrip:B&&B.strip,loc:this.locInfo(A)}
}function k(t,w){if(!w&&t.length){var v=t[0].loc,u=t[t.length-1].loc;
if(v&&u){w={source:v.source,start:{line:v.start.line,column:v.start.column},end:{line:u.end.line,column:u.end.column}}
}}return{type:"Program",body:t,strip:{},loc:w}
}function n(u,t,w,v){j(u,w);
return{type:"PartialBlockStatement",name:u.path,params:u.params,hash:u.hash,program:t,openStrip:u.strip,closeStrip:w&&w.strip,loc:this.locInfo(v)}
}},function(d,L,k){var U=k(1)["default"];
L.__esModule=true;
L.Compiler=z;
L.precompile=T;
L.compile=l;
var S=k(6);
var v=U(S);
var b=k(5);
var a=k(21);
var e=U(a);
var r=[].slice;
function z(){}z.prototype={compiler:z,equals:function y(W){var V=this.opcodes.length;
if(W.opcodes.length!==V){return false
}for(var Y=0;
Y<V;
Y++){var Z=this.opcodes[Y],X=W.opcodes[Y];
if(Z.opcode!==X.opcode||!x(Z.args,X.args)){return false
}}V=this.children.length;
for(var Y=0;
Y<V;
Y++){if(!this.children[Y].equals(W.children[Y])){return false
}}return true
},guid:0,compile:function l(W,X){this.sourceNode=[];
this.opcodes=[];
this.children=[];
this.options=X;
this.stringParams=X.stringParams;
this.trackIds=X.trackIds;
X.blockParams=X.blockParams||[];
var Y=X.knownHelpers;
X.knownHelpers={helperMissing:true,blockHelperMissing:true,each:true,"if":true,unless:true,"with":true,log:true,lookup:true};
if(Y){for(var V in Y){if(V in Y){X.knownHelpers[V]=Y[V]
}}}return this.accept(W)
},compileProgram:function p(W){var Y=new this.compiler(),V=Y.compile(W,this.options),X=this.guid++;
this.usePartial=this.usePartial||V.usePartial;
this.children[X]=V;
this.useDepths=this.useDepths||V.useDepths;
return X
},accept:function f(W){if(!this[W.type]){throw new v["default"]("Unknown type: "+W.type,W)
}this.sourceNode.unshift(W);
var V=this[W.type](W);
this.sourceNode.shift();
return V
},Program:function R(W){this.options.blockParams.unshift(W.blockParams);
var V=W.body,Y=V.length;
for(var X=0;
X<Y;
X++){this.accept(V[X])
}this.options.blockParams.shift();
this.isSimple=Y===1;
this.blockParams=W.blockParams?W.blockParams.length:0;
return this
},BlockStatement:function Q(Y){g(Y);
var W=Y.program,V=Y.inverse;
W=W&&this.compileProgram(W);
V=V&&this.compileProgram(V);
var X=this.classifySexpr(Y);
if(X==="helper"){this.helperSexpr(Y,W,V)
}else{if(X==="simple"){this.simpleSexpr(Y);
this.opcode("pushProgram",W);
this.opcode("pushProgram",V);
this.opcode("emptyHash");
this.opcode("blockValue",Y.path.original)
}else{this.ambiguousSexpr(Y,W,V);
this.opcode("pushProgram",W);
this.opcode("pushProgram",V);
this.opcode("emptyHash");
this.opcode("ambiguousBlockValue")
}}this.opcode("append")
},DecoratorBlock:function t(W){var V=W.program&&this.compileProgram(W.program);
var Y=this.setupFullMustacheParams(W,V,undefined),X=W.path;
this.useDecorators=true;
this.opcode("registerDecorator",Y.length,X.original)
},PartialStatement:function M(Y){this.usePartial=true;
var X=Y.program;
if(X){X=this.compileProgram(Y.program)
}var aa=Y.params;
if(aa.length>1){throw new v["default"]("Unsupported number of partial arguments: "+aa.length,Y)
}else{if(!aa.length){if(this.options.explicitPartialContext){this.opcode("pushLiteral","undefined")
}else{aa.push({type:"PathExpression",parts:[],depth:0})
}}}var Z=Y.name.original,W=Y.name.type==="SubExpression";
if(W){this.accept(Y.name)
}this.setupFullMustacheParams(Y,X,undefined,true);
var V=Y.indent||"";
if(this.options.preventIndent&&V){this.opcode("appendContent",V);
V=""
}this.opcode("invokePartial",W,Z,V);
this.opcode("append")
},PartialBlockStatement:function I(V){this.PartialStatement(V)
},MustacheStatement:function B(V){this.SubExpression(V);
if(V.escaped&&!this.options.noEscape){this.opcode("appendEscaped")
}else{this.opcode("append")
}},Decorator:function h(V){this.DecoratorBlock(V)
},ContentStatement:function j(V){if(V.value){this.opcode("appendContent",V.value)
}},CommentStatement:function A(){},SubExpression:function J(W){g(W);
var V=this.classifySexpr(W);
if(V==="simple"){this.simpleSexpr(W)
}else{if(V==="helper"){this.helperSexpr(W)
}else{this.ambiguousSexpr(W)
}}},ambiguousSexpr:function w(Z,X,W){var aa=Z.path,Y=aa.parts[0],V=X!=null||W!=null;
this.opcode("getContext",aa.depth);
this.opcode("pushProgram",X);
this.opcode("pushProgram",W);
aa.strict=true;
this.accept(aa);
this.opcode("invokeAmbiguous",Y,V)
},simpleSexpr:function G(V){var W=V.path;
W.strict=true;
this.accept(W);
this.opcode("resolvePossibleLambda")
},helperSexpr:function s(Y,W,V){var aa=this.setupFullMustacheParams(Y,W,V),Z=Y.path,X=Z.parts[0];
if(this.options.knownHelpers[X]){this.opcode("invokeKnownHelper",aa.length,X)
}else{if(this.options.knownHelpersOnly){throw new v["default"]("You specified knownHelpersOnly, but used the unknown helper "+X,Y)
}else{Z.strict=true;
Z.falsy=true;
this.accept(Z);
this.opcode("invokeHelper",aa.length,Z.original,e["default"].helpers.simpleId(Z))
}}},PathExpression:function c(W){this.addDepth(W.depth);
this.opcode("getContext",W.depth);
var V=W.parts[0],Y=e["default"].helpers.scopedId(W),X=!W.depth&&!Y&&this.blockParamIndex(V);
if(X){this.opcode("lookupBlockParam",X,W.parts)
}else{if(!V){this.opcode("pushContext")
}else{if(W.data){this.options.data=true;
this.opcode("lookupData",W.depth,W.parts,W.strict)
}else{this.opcode("lookupOnContext",W.parts,W.falsy,W.strict,Y)
}}}},StringLiteral:function m(V){this.opcode("pushString",V.value)
},NumberLiteral:function E(V){this.opcode("pushLiteral",V.value)
},BooleanLiteral:function O(V){this.opcode("pushLiteral",V.value)
},UndefinedLiteral:function n(){this.opcode("pushLiteral","undefined")
},NullLiteral:function P(){this.opcode("pushLiteral","null")
},Hash:function D(Y){var X=Y.pairs,W=0,V=X.length;
this.opcode("pushHash");
for(;
W<V;
W++){this.pushParam(X[W].value)
}while(W--){this.opcode("assignToHash",X[W].key)
}this.opcode("popHash")
},opcode:function F(V){this.opcodes.push({opcode:V,args:r.call(arguments,1),loc:this.sourceNode[0].loc})
},addDepth:function u(V){if(!V){return
}this.useDepths=true
},classifySexpr:function K(Y){var Z=e["default"].helpers.simpleId(Y.path);
var aa=Z&&!!this.blockParamIndex(Y.path.parts[0]);
var X=!aa&&e["default"].helpers.helperExpression(Y);
var ab=!aa&&(X||Z);
if(ab&&!X){var V=Y.path.parts[0],W=this.options;
if(W.knownHelpers[V]){X=true
}else{if(W.knownHelpersOnly){ab=false
}}}if(X){return"helper"
}else{if(ab){return"ambiguous"
}else{return"simple"
}}},pushParams:function N(X){for(var W=0,V=X.length;
W<V;
W++){this.pushParam(X[W])
}},pushParam:function H(Y){var X=Y.value!=null?Y.value:Y.original||"";
if(this.stringParams){if(X.replace){X=X.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")
}if(Y.depth){this.addDepth(Y.depth)
}this.opcode("getContext",Y.depth||0);
this.opcode("pushStringParam",X,Y.type);
if(Y.type==="SubExpression"){this.accept(Y)
}}else{if(this.trackIds){var W=undefined;
if(Y.parts&&!e["default"].helpers.scopedId(Y)&&!Y.depth){W=this.blockParamIndex(Y.parts[0])
}if(W){var V=Y.parts.slice(1).join(".");
this.opcode("pushId","BlockParam",W,V)
}else{X=Y.original||X;
if(X.replace){X=X.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")
}this.opcode("pushId",Y.type,X)
}}this.accept(Y)
}},setupFullMustacheParams:function C(Y,W,V,X){var Z=Y.params;
this.pushParams(Z);
this.opcode("pushProgram",W);
this.opcode("pushProgram",V);
if(Y.hash){this.accept(Y.hash)
}else{this.opcode("emptyHash",X)
}return Z
},blockParamIndex:function o(W){for(var Z=0,V=this.options.blockParams.length;
Z<V;
Z++){var X=this.options.blockParams[Z],Y=X&&b.indexOf(X,W);
if(X&&Y>=0){return[Z,Y]
}}}};
function T(X,Y,Z){if(X==null||typeof X!=="string"&&X.type!=="Program"){throw new v["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+X)
}Y=Y||{};
if(!("data" in Y)){Y.data=true
}if(Y.compat){Y.useDepths=true
}var W=Z.parse(X,Y),V=new Z.Compiler().compile(W,Y);
return new Z.JavaScriptCompiler().compile(V,Y)
}function l(V,X,Y){if(X===undefined){X={}
}if(V==null||typeof V!=="string"&&V.type!=="Program"){throw new v["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+V)
}if(!("data" in X)){X.data=true
}if(X.compat){X.useDepths=true
}var aa=undefined;
function Z(){var ad=Y.parse(V,X),ac=new Y.Compiler().compile(ad,X),ab=new Y.JavaScriptCompiler().compile(ac,X,undefined,true);
return Y.template(ab)
}function W(ab,ac){if(!aa){aa=Z()
}return aa.call(this,ab,ac)
}W._setup=function(ab){if(!aa){aa=Z()
}return aa._setup(ab)
};
W._child=function(ab,ad,ac,ae){if(!aa){aa=Z()
}return aa._child(ab,ad,ac,ae)
};
return W
}function x(W,V){if(W===V){return true
}if(b.isArray(W)&&b.isArray(V)&&W.length===V.length){for(var X=0;
X<W.length;
X++){if(!x(W[X],V[X])){return false
}}return true
}}function g(W){if(!W.path.parts){var V=W.path;
W.path={type:"PathExpression",data:false,depth:0,parts:[V.original+""],original:V.original+"",loc:V.loc}
}}},function(g,ai,r){var ar=r(1)["default"];
ai.__esModule=true;
var G=r(4);
var an=r(6);
var K=ar(an);
var b=r(5);
var aa=r(29);
var L=ar(aa);
function k(au){this.value=au
}function c(){}c.prototype={nameLookup:function Q(av,au){if(c.isValidJavaScriptVariableName(au)){return[av,".",au]
}else{return[av,"[",JSON.stringify(au),"]"]
}},depthedLookup:function R(au){return[this.aliasable("container.lookup"),'(depths, "',au,'")']
},compilerInfo:function B(){var av=G.COMPILER_REVISION,au=G.REVISION_CHANGES[av];
return[av,au]
},appendToBuffer:function ap(aw,au,av){if(!b.isArray(aw)){aw=[aw]
}aw=this.source.wrap(aw,au);
if(this.environment.isSimple){return["return ",aw,";"]
}else{if(av){return["buffer += ",aw,";"]
}else{aw.appendToBuffer=true;
return aw
}}},initializeBuffer:function al(){return this.quotedString("")
},compile:function s(ay,aH,av,aB){this.environment=ay;
this.options=aH;
this.stringParams=this.options.stringParams;
this.trackIds=this.options.trackIds;
this.precompile=!aB;
this.name=this.environment.name;
this.isChild=!!av;
this.context=av||{decorators:[],programs:[],environments:[]};
this.preamble();
this.stackSlot=0;
this.stackVars=[];
this.aliases={};
this.registers={list:[]};
this.hashes=[];
this.compileStack=[];
this.inlineStack=[];
this.blockParams=[];
this.compileChildren(ay,aH);
this.useDepths=this.useDepths||ay.useDepths||ay.useDecorators||this.options.compat;
this.useBlockParams=this.useBlockParams||ay.useBlockParams;
var aD=ay.opcodes,az=undefined,aF=undefined,aA=undefined,ax=undefined;
for(aA=0,ax=aD.length;
aA<ax;
aA++){az=aD[aA];
this.source.currentLocation=az.loc;
aF=aF||az.loc;
this[az.opcode].apply(this,az.args)
}this.source.currentLocation=aF;
this.pushSource("");
if(this.stackSlot||this.inlineStack.length||this.compileStack.length){throw new K["default"]("Compile completed with content left on stack")
}if(!this.decorators.isEmpty()){this.useDecorators=true;
this.decorators.prepend("var decorators = container.decorators;\n");
this.decorators.push("return fn;");
if(aB){this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()])
}else{this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n");
this.decorators.push("}\n");
this.decorators=this.decorators.merge()
}}else{this.decorators=undefined
}var aE=this.createFunctionContext(aB);
if(!this.isChild){var aC={compiler:this.compilerInfo(),main:aE};
if(this.decorators){aC.main_d=this.decorators;
aC.useDecorators=true
}var au=this.context;
var aw=au.programs;
var aG=au.decorators;
for(aA=0,ax=aw.length;
aA<ax;
aA++){if(aw[aA]){aC[aA]=aw[aA];
if(aG[aA]){aC[aA+"_d"]=aG[aA];
aC.useDecorators=true
}}}if(this.environment.usePartial){aC.usePartial=true
}if(this.options.data){aC.useData=true
}if(this.useDepths){aC.useDepths=true
}if(this.useBlockParams){aC.useBlockParams=true
}if(this.options.compat){aC.compat=true
}if(!aB){aC.compiler=JSON.stringify(aC.compiler);
this.source.currentLocation={start:{line:1,column:0}};
aC=this.objectLiteral(aC);
if(aH.srcName){aC=aC.toStringWithSourceMap({file:aH.destName});
aC.map=aC.map&&aC.map.toString()
}else{aC=aC.toString()
}}else{aC.compilerOptions=this.options
}return aC
}else{return aE
}},preamble:function Z(){this.lastContext=0;
this.source=new L["default"](this.options.srcName);
this.decorators=new L["default"](this.options.srcName)
},createFunctionContext:function ao(av){var aA="";
var az=this.stackVars.concat(this.registers.list);
if(az.length>0){aA+=", "+az.join(", ")
}var ay=0;
for(var au in this.aliases){var aw=this.aliases[au];
if(this.aliases.hasOwnProperty(au)&&aw.children&&aw.referenceCount>1){aA+=", alias"+ ++ay+"="+au;
aw.children[0]="alias"+ay
}}var aB=["container","depth0","helpers","partials","data"];
if(this.useBlockParams||this.useDepths){aB.push("blockParams")
}if(this.useDepths){aB.push("depths")
}var ax=this.mergeSource(aA);
if(av){aB.push(ax);
return Function.apply(this,aB)
}else{return this.source.wrap(["function(",aB.join(","),") {\n  ",ax,"}"])
}},mergeSource:function E(az){var ax=this.environment.isSimple,aw=!this.forceBuffer,au=undefined,av=undefined,ay=undefined,aA=undefined;
this.source.each(function(aB){if(aB.appendToBuffer){if(ay){aB.prepend("  + ")
}else{ay=aB
}aA=aB
}else{if(ay){if(!av){au=true
}else{ay.prepend("buffer += ")
}aA.add(";");
ay=aA=undefined
}av=true;
if(!ax){aw=false
}}});
if(aw){if(ay){ay.prepend("return ");
aA.add(";")
}else{if(!av){this.source.push('return "";')
}}}else{az+=", buffer = "+(au?"":this.initializeBuffer());
if(ay){ay.prepend("return buffer + ");
aA.add(";")
}else{this.source.push("return buffer;")
}}if(az){this.source.prepend("var "+az.substring(2)+(au?"":";\n"))
}return this.source.merge()
},blockValue:function d(av){var aw=this.aliasable("helpers.blockHelperMissing"),ax=[this.contextName(0)];
this.setupHelperArgs(av,0,ax);
var au=this.popStack();
ax.splice(1,0,au);
this.push(this.source.functionCall(aw,"call",ax))
},ambiguousBlockValue:function V(){var au=this.aliasable("helpers.blockHelperMissing"),aw=[this.contextName(0)];
this.setupHelperArgs("",0,aw,true);
this.flushInline();
var av=this.topStack();
aw.splice(1,0,av);
this.pushSource(["if (!",this.lastHelper,") { ",av," = ",this.source.functionCall(au,"call",aw),"}"])
},appendContent:function f(au){if(this.pendingContent){au=this.pendingContent+au
}else{this.pendingLocation=this.source.currentLocation
}this.pendingContent=au
},append:function ac(){if(this.isInline()){this.replaceStack(function(av){return[" != null ? ",av,' : ""']
});
this.pushSource(this.appendToBuffer(this.popStack()))
}else{var au=this.popStack();
this.pushSource(["if (",au," != null) { ",this.appendToBuffer(au,undefined,true)," }"]);
if(this.environment.isSimple){this.pushSource(["else { ",this.appendToBuffer("''",undefined,true)," }"])
}}},appendEscaped:function n(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))
},getContext:function C(au){this.lastContext=au
},pushContext:function v(){this.pushStackLiteral(this.contextName(this.lastContext))
},lookupOnContext:function at(ax,aw,au,ay){var av=0;
if(!ay&&this.options.compat&&!this.lastContext){this.push(this.depthedLookup(ax[av++]))
}else{this.pushContext()
}this.resolvePath("context",ax,av,aw,au)
},lookupBlockParam:function D(av,au){this.useBlockParams=true;
this.push(["blockParams[",av[0],"][",av[1],"]"]);
this.resolvePath("context",au,1)
},lookupData:function p(aw,av,au){if(!aw){this.pushStackLiteral("data")
}else{this.pushStackLiteral("container.data(data, "+aw+")")
}this.resolvePath("data",av,0,true,au)
},resolvePath:function S(ax,az,aw,ay,av){var aA=this;
if(this.options.strict||this.options.assumeObjects){this.push(X(this.options.strict&&av,this,az,ax));
return
}var au=az.length;
for(;
aw<au;
aw++){this.replaceStack(function(aC){var aB=aA.nameLookup(aC,az[aw],ax);
if(!ay){return[" != null ? ",aB," : ",aC]
}else{return[" && ",aB]
}})
}},resolvePossibleLambda:function ah(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])
},pushStringParam:function aq(au,av){this.pushContext();
this.pushString(av);
if(av!=="SubExpression"){if(typeof au==="string"){this.pushString(au)
}else{this.pushStackLiteral(au)
}}},emptyHash:function z(au){if(this.trackIds){this.push("{}")
}if(this.stringParams){this.push("{}");
this.push("{}")
}this.pushStackLiteral(au?"undefined":"{}")
},pushHash:function T(){if(this.hash){this.hashes.push(this.hash)
}this.hash={values:[],types:[],contexts:[],ids:[]}
},popHash:function P(){var au=this.hash;
this.hash=this.hashes.pop();
if(this.trackIds){this.push(this.objectLiteral(au.ids))
}if(this.stringParams){this.push(this.objectLiteral(au.contexts));
this.push(this.objectLiteral(au.types))
}this.push(this.objectLiteral(au.values))
},pushString:function l(au){this.pushStackLiteral(this.quotedString(au))
},pushLiteral:function J(au){this.pushStackLiteral(au)
},pushProgram:function x(au){if(au!=null){this.pushStackLiteral(this.programExpression(au))
}else{this.pushStackLiteral(null)
}},registerDecorator:function M(ax,aw){var au=this.nameLookup("decorators",aw,"decorator"),av=this.setupHelperArgs(aw,ax);
this.decorators.push(["fn = ",this.decorators.functionCall(au,"",["fn","props","container",av])," || fn;"])
},invokeHelper:function ab(ay,au,aw){var aA=this.popStack(),av=this.setupHelper(ay,au),az=aw?[av.name," || "]:"";
var ax=["("].concat(az,aA);
if(!this.options.strict){ax.push(" || ",this.aliasable("helpers.helperMissing"))
}ax.push(")");
this.push(this.source.functionCall(ax,"call",av.callParams))
},invokeKnownHelper:function o(aw,au){var av=this.setupHelper(aw,au);
this.push(this.source.functionCall(av.name,"call",av.callParams))
},invokeAmbiguous:function am(au,ay){this.useRegister("helper");
var az=this.popStack();
this.emptyHash();
var av=this.setupHelper(0,au,ay);
var aw=this.lastHelper=this.nameLookup("helpers",au,"helper");
var ax=["(","(helper = ",aw," || ",az,")"];
if(!this.options.strict){ax[0]="(helper = ";
ax.push(" != null ? helper : ",this.aliasable("helpers.helperMissing"))
}this.push(["(",ax,av.paramsInit?["),(",av.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",av.callParams)," : helper))"])
},invokePartial:function U(av,ax,au){var ay=[],aw=this.setupParams(ax,1,ay);
if(av){ax=this.popStack();
delete aw.name
}if(au){aw.indent=JSON.stringify(au)
}aw.helpers="helpers";
aw.partials="partials";
aw.decorators="container.decorators";
if(!av){ay.unshift(this.nameLookup("partials",ax,"partial"))
}else{ay.unshift(ax)
}if(this.options.compat){aw.depths="depths"
}aw=this.objectLiteral(aw);
ay.push(aw);
this.push(this.source.functionCall("container.invokePartial","",ay))
},assignToHash:function j(av){var ax=this.popStack(),au=undefined,aw=undefined,az=undefined;
if(this.trackIds){az=this.popStack()
}if(this.stringParams){aw=this.popStack();
au=this.popStack()
}var ay=this.hash;
if(au){ay.contexts[av]=au
}if(aw){ay.types[av]=aw
}if(az){ay.ids[av]=az
}ay.values[av]=ax
},pushId:function e(av,au,aw){if(av==="BlockParam"){this.pushStackLiteral("blockParams["+au[0]+"].path["+au[1]+"]"+(aw?" + "+JSON.stringify("."+aw):""))
}else{if(av==="PathExpression"){this.pushString(au)
}else{if(av==="SubExpression"){this.pushStackLiteral("true")
}else{this.pushStackLiteral("null")
}}}},compiler:c,compileChildren:function H(au,ax){var az=au.children,aB=undefined,aA=undefined;
for(var ay=0,av=az.length;
ay<av;
ay++){aB=az[ay];
aA=new this.compiler();
var aw=this.matchExistingProgram(aB);
if(aw==null){this.context.programs.push("");
aw=this.context.programs.length;
aB.index=aw;
aB.name="program"+aw;
this.context.programs[aw]=aA.compile(aB,ax,this.context,!this.precompile);
this.context.decorators[aw]=aA.decorators;
this.context.environments[aw]=aB;
this.useDepths=this.useDepths||aA.useDepths;
this.useBlockParams=this.useBlockParams||aA.useBlockParams
}else{aB.index=aw;
aB.name="program"+aw;
this.useDepths=this.useDepths||aB.useDepths;
this.useBlockParams=this.useBlockParams||aB.useBlockParams
}}},matchExistingProgram:function u(ax){for(var aw=0,av=this.context.environments.length;
aw<av;
aw++){var au=this.context.environments[aw];
if(au&&au.equals(ax)){return aw
}}},programExpression:function I(au){var aw=this.environment.children[au],av=[aw.index,"data",aw.blockParams];
if(this.useBlockParams||this.useDepths){av.push("blockParams")
}if(this.useDepths){av.push("depths")
}return"container.program("+av.join(", ")+")"
},useRegister:function Y(au){if(!this.registers[au]){this.registers[au]=true;
this.registers.list.push(au)
}},push:function ag(au){if(!(au instanceof k)){au=this.source.wrap(au)
}this.inlineStack.push(au);
return au
},pushStackLiteral:function m(au){this.push(new k(au))
},pushSource:function w(au){if(this.pendingContent){this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation));
this.pendingContent=undefined
}if(au){this.source.push(au)
}},replaceStack:function a(aB){var az=["("],au=undefined,ay=undefined,aw=undefined;
if(!this.isInline()){throw new K["default"]("replaceStack on non-inline")
}var aA=this.popStack(true);
if(aA instanceof k){au=[aA.value];
az=["(",au];
aw=true
}else{ay=true;
var av=this.incrStack();
az=["((",this.push(av)," = ",aA,")"];
au=this.topStack()
}var ax=aB.call(this,au);
if(!aw){this.popStack()
}if(ay){this.stackSlot--
}this.push(az.concat(ax,")"))
},incrStack:function W(){this.stackSlot++;
if(this.stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.stackSlot)
}return this.topStackName()
},topStackName:function ak(){return"stack"+this.stackSlot
},flushInline:function aj(){var ax=this.inlineStack;
this.inlineStack=[];
for(var aw=0,av=ax.length;
aw<av;
aw++){var ay=ax[aw];
if(ay instanceof k){this.compileStack.push(ay)
}else{var au=this.incrStack();
this.pushSource([au," = ",ay,";"]);
this.compileStack.push(au)
}}},isInline:function y(){return this.inlineStack.length
},popStack:function h(au){var aw=this.isInline(),av=(aw?this.inlineStack:this.compileStack).pop();
if(!au&&av instanceof k){return av.value
}else{if(!aw){if(!this.stackSlot){throw new K["default"]("Invalid stack pop")
}this.stackSlot--
}return av
}},topStack:function F(){var au=this.isInline()?this.inlineStack:this.compileStack,av=au[au.length-1];
if(av instanceof k){return av.value
}else{return av
}},contextName:function af(au){if(this.useDepths&&au){return"depths["+au+"]"
}else{return"depth"+au
}},quotedString:function A(au){return this.source.quotedString(au)
},objectLiteral:function t(au){return this.source.objectLiteral(au)
},aliasable:function ae(av){var au=this.aliases[av];
if(au){au.referenceCount++;
return au
}au=this.aliases[av]=this.source.wrap(av);
au.aliasable=true;
au.referenceCount=1;
return au
},setupHelper:function ad(ay,aw,av){var ax=[],aA=this.setupHelperArgs(aw,ay,ax,av);
var au=this.nameLookup("helpers",aw,"helper"),az=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : {}");
return{params:ax,paramsInit:aA,name:au,callParams:[az].concat(ax)}
},setupParams:function O(aw,aA,ay){var aF={},aD=[],aE=[],av=[],au=!ay,ax=undefined;
if(au){ay=[]
}aF.name=this.quotedString(aw);
aF.hash=this.popStack();
if(this.trackIds){aF.hashIds=this.popStack()
}if(this.stringParams){aF.hashTypes=this.popStack();
aF.hashContexts=this.popStack()
}var az=this.popStack(),aC=this.popStack();
if(aC||az){aF.fn=aC||"container.noop";
aF.inverse=az||"container.noop"
}var aB=aA;
while(aB--){ax=this.popStack();
ay[aB]=ax;
if(this.trackIds){av[aB]=this.popStack()
}if(this.stringParams){aE[aB]=this.popStack();
aD[aB]=this.popStack()
}}if(au){aF.args=this.source.generateArray(ay)
}if(this.trackIds){aF.ids=this.source.generateArray(av)
}if(this.stringParams){aF.types=this.source.generateArray(aE);
aF.contexts=this.source.generateArray(aD)
}if(this.options.data){aF.data="data"
}if(this.useBlockParams){aF.blockParams="blockParams"
}return aF
},setupHelperArgs:function N(aw,ay,ax,av){var au=this.setupParams(aw,ay,ax);
au=this.objectLiteral(au);
if(av){this.useRegister("options");
ax.push("options");
return["options=",au]
}else{if(ax){ax.push(au);
return""
}else{return au
}}}};
(function(){var au=("break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false").split(" ");
var ax=c.RESERVED_WORDS={};
for(var aw=0,av=au.length;
aw<av;
aw++){ax[au[aw]]=true
}})();
c.isValidJavaScriptVariableName=function(au){return !c.RESERVED_WORDS[au]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(au)
};
function X(aA,ay,az,ax){var av=ay.popStack(),aw=0,au=az.length;
if(aA){au--
}for(;
aw<au;
aw++){av=ay.nameLookup(av,az[aw],ax)
}if(aA){return[ay.aliasable("container.strict"),"(",av,", ",ay.quotedString(az[aw]),")"]
}else{return av
}}ai["default"]=c;
g.exports=ai["default"]
},function(b,z,d){z.__esModule=true;
var r=d(5);
var g=undefined;
try{if(false){var u=require("source-map");
g=u.SourceNode
}}catch(h){}if(!g){g=function(A,B,C,D){this.src="";
if(D){this.add(D)
}};
g.prototype={add:function t(A){if(r.isArray(A)){A=A.join("")
}this.src+=A
},prepend:function y(A){if(r.isArray(A)){A=A.join("")
}this.src=A+this.src
},toStringWithSourceMap:function e(){return{code:this.toString()}
},toString:function w(){return this.src
}}
}function c(D,B,F){if(r.isArray(D)){var C=[];
for(var E=0,A=D.length;
E<A;
E++){C.push(B.wrap(D[E],F))
}return C
}else{if(typeof D==="boolean"||typeof D==="number"){return D+""
}}return D
}function l(A){this.srcFile=A;
this.source=[]
}l.prototype={isEmpty:function s(){return !this.source.length
},prepend:function y(A,B){this.source.unshift(this.wrap(A,B))
},push:function m(A,B){this.source.push(this.wrap(A,B))
},merge:function j(){var A=this.empty();
this.each(function(B){A.add(["  ",B,"\n"])
});
return A
},each:function f(B){for(var C=0,A=this.source.length;
C<A;
C++){B(this.source[C])
}},empty:function p(){var A=this.currentLocation||{start:{}};
return new g(A.start.line,A.start.column,this.srcFile)
},wrap:function o(A){var B=arguments.length<=1||arguments[1]===undefined?this.currentLocation||{start:{}}:arguments[1];
if(A instanceof g){return A
}A=c(A,this,B);
return new g(B.start.line,B.start.column,this.srcFile,A)
},functionCall:function x(B,A,C){C=this.generateList(C);
return this.wrap([B,A?"."+A+"(":"(",C,")"])
},quotedString:function n(A){return'"'+(A+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'
},objectLiteral:function v(E){var D=[];
for(var B in E){if(E.hasOwnProperty(B)){var C=c(E[B],this);
if(C!=="undefined"){D.push([this.quotedString(B),":",C])
}}}var A=this.generateList(D);
A.prepend("{");
A.add("}");
return A
},generateList:function a(B){var C=this.empty();
for(var D=0,A=B.length;
D<A;
D++){if(D){C.add(",")
}C.add(c(B[D],this))
}return C
},generateArray:function k(A){var B=this.generateList(A);
B.prepend("[");
B.add("]");
return B
}};
z["default"]=l;
b.exports=z["default"]
}])
});
/*!

JSZip - A Javascript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2014 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/
;
!function(d){if("object"==typeof exports&&"undefined"!=typeof module){module.exports=d()
}else{if("function"==typeof define&&define.amd){define([],d)
}else{var c;
"undefined"!=typeof window?c=window:"undefined"!=typeof global?c=global:"undefined"!=typeof self&&(c=self),c.JSZip=d()
}}}(function(){return function b(a,m,l){function k(f,e){if(!m[f]){if(!a[f]){var d="function"==typeof require&&require;
if(!e&&d){return d(f,!0)
}if(j){return j(f,!0)
}throw new Error("Cannot find module '"+f+"'")
}var c=m[f]={exports:{}};
a[f][0].call(c.exports,function(g){var n=a[f][1][g];
return k(n?n:g)
},c,c.exports,b,a,m,l)
}return m[f].exports
}for(var j="function"==typeof require&&require,h=0;
h<l.length;
h++){k(l[h])
}return k
}({1:[function(f,e,h){var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
h.encode=function(u){for(var t,s,r,p,o,n,m,l="",d=0;
d<u.length;
){t=u.charCodeAt(d++),s=u.charCodeAt(d++),r=u.charCodeAt(d++),p=t>>2,o=(3&t)<<4|s>>4,n=(15&s)<<2|r>>6,m=63&r,isNaN(s)?n=m=64:isNaN(r)&&(m=64),l=l+g.charAt(p)+g.charAt(o)+g.charAt(n)+g.charAt(m)
}return l
},h.decode=function(u){var t,s,r,p,o,n,m,l="",d=0;
for(u=u.replace(/[^A-Za-z0-9\+\/\=]/g,"");
d<u.length;
){p=g.indexOf(u.charAt(d++)),o=g.indexOf(u.charAt(d++)),n=g.indexOf(u.charAt(d++)),m=g.indexOf(u.charAt(d++)),t=p<<2|o>>4,s=(15&o)<<4|n>>2,r=(3&n)<<6|m,l+=String.fromCharCode(t),64!=n&&(l+=String.fromCharCode(s)),64!=m&&(l+=String.fromCharCode(r))
}return l
}
},{}],2:[function(e,d){function f(){this.compressedSize=0,this.uncompressedSize=0,this.crc32=0,this.compressionMethod=null,this.compressedContent=null
}f.prototype={getContent:function(){return null
},getCompressedContent:function(){return null
}},d.exports=f
},{}],3:[function(e,d,f){f.STORE={magic:"\x00\x00",compress:function(c){return c
},uncompress:function(c){return c
},compressInputType:null,uncompressInputType:null},f.DEFLATE=e("./flate")
},{"./flate":8}],4:[function(f,e){var h=f("./utils"),g=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918000,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];
e.exports=function(d,c){if("undefined"==typeof d||!d.length){return 0
}var p="string"!==h.getTypeOf(d);
"undefined"==typeof c&&(c=0);
var o=0,n=0,m=0;
c=-1^c;
for(var l=0,k=d.length;
k>l;
l++){m=p?d[l]:d.charCodeAt(l),n=255&(c^m),o=g[n],c=c>>>8^o
}return -1^c
}
},{"./utils":21}],5:[function(f,e){function h(){this.data=null,this.length=0,this.index=0
}var g=f("./utils");
h.prototype={checkOffset:function(c){this.checkIndex(this.index+c)
},checkIndex:function(c){if(this.length<c||0>c){throw new Error("End of data reached (data length = "+this.length+", asked index = "+c+"). Corrupted zip ?")
}},setIndex:function(c){this.checkIndex(c),this.index=c
},skip:function(c){this.setIndex(this.index+c)
},byteAt:function(){},readInt:function(j){var d,k=0;
for(this.checkOffset(j),d=this.index+j-1;
d>=this.index;
d--){k=(k<<8)+this.byteAt(d)
}return this.index+=j,k
},readString:function(c){return g.transformTo("string",this.readData(c))
},readData:function(){},lastIndexOfSignature:function(){},readDate:function(){var c=this.readInt(4);
return new Date((c>>25&127)+1980,(c>>21&15)-1,c>>16&31,c>>11&31,c>>5&63,(31&c)<<1)
}},e.exports=h
},{"./utils":21}],6:[function(e,d,f){f.base64=!1,f.binary=!1,f.dir=!1,f.createFolders=!1,f.date=null,f.compression=null,f.compressionOptions=null,f.comment=null,f.unixPermissions=null,f.dosPermissions=null
},{}],7:[function(f,e,h){var g=f("./utils");
h.string2binary=function(c){return g.string2binary(c)
},h.string2Uint8Array=function(c){return g.transformTo("uint8array",c)
},h.uint8Array2String=function(c){return g.transformTo("string",c)
},h.string2Blob=function(d){var c=g.transformTo("arraybuffer",d);
return g.arrayBuffer2Blob(c)
},h.arrayBuffer2Blob=function(c){return g.arrayBuffer2Blob(c)
},h.transformTo=function(d,c){return g.transformTo(d,c)
},h.getTypeOf=function(c){return g.getTypeOf(c)
},h.checkSupport=function(c){return g.checkSupport(c)
},h.MAX_VALUE_16BITS=g.MAX_VALUE_16BITS,h.MAX_VALUE_32BITS=g.MAX_VALUE_32BITS,h.pretty=function(c){return g.pretty(c)
},h.findCompression=function(c){return g.findCompression(c)
},h.isRegExp=function(c){return g.isRegExp(c)
}
},{"./utils":21}],8:[function(g,f,k){var j="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,h=g("pako");
k.uncompressInputType=j?"uint8array":"array",k.compressInputType=j?"uint8array":"array",k.magic="\b\x00",k.compress=function(d,c){return h.deflateRaw(d,{level:c.level||-1})
},k.uncompress=function(c){return h.inflateRaw(c)
}
},{pako:24}],9:[function(f,e){function h(d,c){return this instanceof h?(this.files={},this.comment=null,this.root="",d&&this.load(d,c),void (this.clone=function(){var k=new h;
for(var j in this){"function"!=typeof this[j]&&(k[j]=this[j])
}return k
})):new h(d,c)
}var g=f("./base64");
h.prototype=f("./object"),h.prototype.load=f("./load"),h.support=f("./support"),h.defaults=f("./defaults"),h.utils=f("./deprecatedPublicUtils"),h.base64={encode:function(c){return g.encode(c)
},decode:function(c){return g.decode(c)
}},h.compressions=f("./compressions"),e.exports=h
},{"./base64":1,"./compressions":3,"./defaults":6,"./deprecatedPublicUtils":7,"./load":10,"./object":13,"./support":17}],10:[function(f,e){var h=f("./base64"),g=f("./zipEntries");
e.exports=function(d,c){var m,l,k,j;
for(c=c||{},c.base64&&(d=h.decode(d)),l=new g(d,c),m=l.files,k=0;
k<m.length;
k++){j=m[k],this.file(j.fileName,j.decompressed,{binary:!0,optimizedBinaryString:!0,date:j.date,dir:j.dir,comment:j.fileComment.length?j.fileComment:null,unixPermissions:j.unixPermissions,dosPermissions:j.dosPermissions,createFolders:c.createFolders})
}return l.zipComment.length&&(this.comment=l.zipComment),this
}
},{"./base64":1,"./zipEntries":22}],11:[function(d,c){(function(e){c.exports=function(a,f){return new e(a,f)
},c.exports.test=function(a){return e.isBuffer(a)
}
}).call(this,"undefined"!=typeof Buffer?Buffer:void 0)
},{}],12:[function(f,e){function h(c){this.data=c,this.length=this.data.length,this.index=0
}var g=f("./uint8ArrayReader");
h.prototype=new g,h.prototype.readData=function(d){this.checkOffset(d);
var c=this.data.slice(this.index,this.index+d);
return this.index+=d,c
},e.exports=h
},{"./uint8ArrayReader":18}],13:[function(ah,ag){var af=ah("./support"),ae=ah("./utils"),ad=ah("./crc32"),ac=ah("./signature"),ab=ah("./defaults"),aa=ah("./base64"),Z=ah("./compressions"),Y=ah("./compressedObject"),X=ah("./nodeBuffer"),W=ah("./utf8"),V=ah("./stringWriter"),U=ah("./uint8ArrayWriter"),T=function(d){if(d._data instanceof Y&&(d._data=d._data.getContent(),d.options.binary=!0,d.options.base64=!1,"uint8array"===ae.getTypeOf(d._data))){var c=d._data;
d._data=new Uint8Array(c.length),0!==c.length&&d._data.set(c,0)
}return d._data
},S=function(d){var c=T(d),f=ae.getTypeOf(c);
return"string"===f?!d.options.binary&&af.nodebuffer?X(c,"utf-8"):d.asBinary():c
},Q=function(d){var c=T(this);
return null===c||"undefined"==typeof c?"":(this.options.base64&&(c=aa.decode(c)),c=d&&this.options.binary?L.utf8decode(c):ae.transformTo("string",c),d||this.options.binary||(c=ae.transformTo("string",L.utf8encode(c))),c)
},O=function(e,d,f){this.name=e,this.dir=f.dir,this.date=f.date,this.comment=f.comment,this.unixPermissions=f.unixPermissions,this.dosPermissions=f.dosPermissions,this._data=d,this.options=f,this._initialMetadata={dir:f.dir,date:f.date}
};
O.prototype={asText:function(){return Q.call(this,!0)
},asBinary:function(){return Q.call(this,!1)
},asNodeBuffer:function(){var c=S(this);
return ae.transformTo("nodebuffer",c)
},asUint8Array:function(){var c=S(this);
return ae.transformTo("uint8array",c)
},asArrayBuffer:function(){return this.asUint8Array().buffer
}};
var M=function(f,e){var h,g="";
for(h=0;
e>h;
h++){g+=String.fromCharCode(255&f),f>>>=8
}return g
},K=function(){var e,d,f={};
for(e=0;
e<arguments.length;
e++){for(d in arguments[e]){arguments[e].hasOwnProperty(d)&&"undefined"==typeof f[d]&&(f[d]=arguments[e][d])
}}return f
},J=function(c){return c=c||{},c.base64!==!0||null!==c.binary&&void 0!==c.binary||(c.binary=!0),c=K(c,ab),c.date=c.date||new Date,null!==c.compression&&(c.compression=c.compression.toUpperCase()),c
},I=function(h,d,m){var l,k=ae.getTypeOf(d);
if(m=J(m),"string"==typeof m.unixPermissions&&(m.unixPermissions=parseInt(m.unixPermissions,8)),m.unixPermissions&&16384&m.unixPermissions&&(m.dir=!0),m.dosPermissions&&16&m.dosPermissions&&(m.dir=!0),m.dir&&(h=G(h)),m.createFolders&&(l=H(h))&&F.call(this,l,!0),m.dir||null===d||"undefined"==typeof d){m.base64=!1,m.binary=!1,d=null,k=null
}else{if("string"===k){m.binary&&!m.base64&&m.optimizedBinaryString!==!0&&(d=ae.string2binary(d))
}else{if(m.base64=!1,m.binary=!0,!(k||d instanceof Y)){throw new Error("The data of '"+h+"' is in an unsupported format !")
}"arraybuffer"===k&&(d=ae.transformTo("uint8array",d))
}}var j=new O(h,d,m);
return this.files[h]=j,j
},H=function(d){"/"==d.slice(-1)&&(d=d.substring(0,d.length-1));
var c=d.lastIndexOf("/");
return c>0?d.substring(0,c):""
},G=function(c){return"/"!=c.slice(-1)&&(c+="/"),c
},F=function(d,c){return c="undefined"!=typeof c?c:!1,d=G(d),this.files[d]||I.call(this,d,null,{dir:!0,createFolders:c}),this.files[d]
},E=function(e,d,k){var j,h=new Y;
return e._data instanceof Y?(h.uncompressedSize=e._data.uncompressedSize,h.crc32=e._data.crc32,0===h.uncompressedSize||e.dir?(d=Z.STORE,h.compressedContent="",h.crc32=0):e._data.compressionMethod===d.magic?h.compressedContent=e._data.getCompressedContent():(j=e._data.getContent(),h.compressedContent=d.compress(ae.transformTo(d.compressInputType,j),k))):(j=S(e),(!j||0===j.length||e.dir)&&(d=Z.STORE,j=""),h.uncompressedSize=j.length,h.crc32=ad(j),h.compressedContent=d.compress(ae.transformTo(d.compressInputType,j),k)),h.compressedSize=h.compressedContent.length,h.compressionMethod=d.magic,h
},R=function(e,d){var f=e;
return e||(f=d?16893:33204),(65535&f)<<16
},P=function(c){return 63&(c||0)
},N=function(ay,ax,aw,av,au){var at,ar,aq,ap,ao=(aw.compressedContent,ae.transformTo("string",W.utf8encode(ax.name))),an=ax.comment||"",am=ae.transformTo("string",W.utf8encode(an)),al=ao.length!==ax.name.length,ak=am.length!==an.length,B=ax.options,A="",s="",l="";
aq=ax._initialMetadata.dir!==ax.dir?ax.dir:B.dir,ap=ax._initialMetadata.date!==ax.date?ax.date:B.date;
var f=0,e=0;
aq&&(f|=16),"UNIX"===au?(e=798,f|=R(ax.unixPermissions,aq)):(e=20,f|=P(ax.dosPermissions,aq)),at=ap.getHours(),at<<=6,at|=ap.getMinutes(),at<<=5,at|=ap.getSeconds()/2,ar=ap.getFullYear()-1980,ar<<=4,ar|=ap.getMonth()+1,ar<<=5,ar|=ap.getDate(),al&&(s=M(1,1)+M(ad(ao),4)+ao,A+="up"+M(s.length,2)+s),ak&&(l=M(1,1)+M(this.crc32(am),4)+am,A+="uc"+M(l.length,2)+l);
var d="";
d+="\n\x00",d+=al||ak?"\x00\b":"\x00\x00",d+=aw.compressionMethod,d+=M(at,2),d+=M(ar,2),d+=M(aw.crc32,4),d+=M(aw.compressedSize,4),d+=M(aw.uncompressedSize,4),d+=M(ao.length,2),d+=M(A.length,2);
var aj=ac.LOCAL_FILE_HEADER+d+ao+A,ai=ac.CENTRAL_FILE_HEADER+M(e,2)+d+M(am.length,2)+"\x00\x00\x00\x00"+M(f,4)+M(av,4)+ao+A+am;
return{fileRecord:aj,dirRecord:ai,compressedObject:aw}
},L={load:function(){throw new Error("Load method is not defined. Is the file jszip-load.js included ?")
},filter:function(h){var g,m,l,k,j=[];
for(g in this.files){this.files.hasOwnProperty(g)&&(l=this.files[g],k=new O(l.name,l._data,K(l.options)),m=g.slice(this.root.length,g.length),g.slice(0,this.root.length)===this.root&&h(m,k)&&j.push(k))
}return j
},file:function(f,d,h){if(1===arguments.length){if(ae.isRegExp(f)){var g=f;
return this.filter(function(e,c){return !c.dir&&g.test(e)
})
}return this.filter(function(a,e){return !e.dir&&a===f
})[0]||null
}return f=this.root+f,I.call(this,f,d,h),this
},folder:function(f){if(!f){return this
}if(ae.isRegExp(f)){return this.filter(function(a,e){return e.dir&&f.test(a)
})
}var d=this.root+f,h=F.call(this,d),g=this.clone();
return g.root=h.name,g
},remove:function(f){f=this.root+f;
var e=this.files[f];
if(e||("/"!=f.slice(-1)&&(f+="/"),e=this.files[f]),e&&!e.dir){delete this.files[f]
}else{for(var h=this.filter(function(a,d){return d.name.slice(0,f.length)===f
}),g=0;
g<h.length;
g++){delete this.files[h[g].name]
}}return this
},generate:function(aj){aj=K(aj||{},{base64:!0,compression:"STORE",compressionOptions:null,type:"base64",platform:"DOS",comment:null,mimeType:"application/zip"}),ae.checkSupport(aj.type),("darwin"===aj.platform||"freebsd"===aj.platform||"linux"===aj.platform||"sunos"===aj.platform)&&(aj.platform="UNIX"),"win32"===aj.platform&&(aj.platform="DOS");
var D,B,A=[],z=0,t=0,s=ae.transformTo("string",this.utf8encode(aj.comment||this.comment||""));
for(var n in this.files){if(this.files.hasOwnProperty(n)){var m=this.files[n],h=m.options.compression||aj.compression.toUpperCase(),f=Z[h];
if(!f){throw new Error(h+" is not a valid compression method !")
}var d=m.options.compressionOptions||aj.compressionOptions||{},am=E.call(this,m,f,d),al=N.call(this,n,m,am,z,aj.platform);
z+=al.fileRecord.length+am.compressedSize,t+=al.dirRecord.length,A.push(al)
}}var ak="";
ak=ac.CENTRAL_DIRECTORY_END+"\x00\x00\x00\x00"+M(A.length,2)+M(A.length,2)+M(t,4)+M(z,4)+M(s.length,2)+s;
var ai=aj.type.toLowerCase();
for(D="uint8array"===ai||"arraybuffer"===ai||"blob"===ai||"nodebuffer"===ai?new U(z+t+ak.length):new V(z+t+ak.length),B=0;
B<A.length;
B++){D.append(A[B].fileRecord),D.append(A[B].compressedObject.compressedContent)
}for(B=0;
B<A.length;
B++){D.append(A[B].dirRecord)
}D.append(ak);
var C=D.finalize();
switch(aj.type.toLowerCase()){case"uint8array":case"arraybuffer":case"nodebuffer":return ae.transformTo(aj.type.toLowerCase(),C);
case"blob":return ae.arrayBuffer2Blob(ae.transformTo("arraybuffer",C),aj.mimeType);
case"base64":return aj.base64?aa.encode(C):C;
default:return C
}},crc32:function(d,c){return ad(d,c)
},utf8encode:function(c){return ae.transformTo("string",W.utf8encode(c))
},utf8decode:function(c){return W.utf8decode(c)
}};
ag.exports=L
},{"./base64":1,"./compressedObject":2,"./compressions":3,"./crc32":4,"./defaults":6,"./nodeBuffer":11,"./signature":14,"./stringWriter":16,"./support":17,"./uint8ArrayWriter":19,"./utf8":20,"./utils":21}],14:[function(e,d,f){f.LOCAL_FILE_HEADER="PK",f.CENTRAL_FILE_HEADER="PK",f.CENTRAL_DIRECTORY_END="PK",f.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",f.ZIP64_CENTRAL_DIRECTORY_END="PK",f.DATA_DESCRIPTOR="PK\b"
},{}],15:[function(g,f){function k(d,c){this.data=d,c||(this.data=h.string2binary(this.data)),this.length=this.data.length,this.index=0
}var j=g("./dataReader"),h=g("./utils");
k.prototype=new j,k.prototype.byteAt=function(c){return this.data.charCodeAt(c)
},k.prototype.lastIndexOfSignature=function(c){return this.data.lastIndexOf(c)
},k.prototype.readData=function(d){this.checkOffset(d);
var c=this.data.slice(this.index,this.index+d);
return this.index+=d,c
},f.exports=k
},{"./dataReader":5,"./utils":21}],16:[function(f,e){var h=f("./utils"),g=function(){this.data=[]
};
g.prototype={append:function(c){c=h.transformTo("string",c),this.data.push(c)
},finalize:function(){return this.data.join("")
}},e.exports=g
},{"./utils":21}],17:[function(e,d,f){(function(g){if(f.base64=!0,f.array=!0,f.string=!0,f.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,f.nodebuffer="undefined"!=typeof g,f.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer){f.blob=!1
}else{var c=new ArrayBuffer(0);
try{f.blob=0===new Blob([c],{type:"application/zip"}).size
}catch(k){try{var j=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,h=new j;
h.append(c),f.blob=0===h.getBlob("application/zip").size
}catch(k){f.blob=!1
}}}}).call(this,"undefined"!=typeof Buffer?Buffer:void 0)
},{}],18:[function(f,e){function h(c){c&&(this.data=c,this.length=this.data.length,this.index=0)
}var g=f("./dataReader");
h.prototype=new g,h.prototype.byteAt=function(c){return this.data[c]
},h.prototype.lastIndexOfSignature=function(k){for(var j=k.charCodeAt(0),o=k.charCodeAt(1),n=k.charCodeAt(2),m=k.charCodeAt(3),l=this.length-4;
l>=0;
--l){if(this.data[l]===j&&this.data[l+1]===o&&this.data[l+2]===n&&this.data[l+3]===m){return l
}}return -1
},h.prototype.readData=function(d){if(this.checkOffset(d),0===d){return new Uint8Array(0)
}var c=this.data.subarray(this.index,this.index+d);
return this.index+=d,c
},e.exports=h
},{"./dataReader":5}],19:[function(f,e){var h=f("./utils"),g=function(c){this.data=new Uint8Array(c),this.index=0
};
g.prototype={append:function(c){0!==c.length&&(c=h.transformTo("uint8array",c),this.data.set(c,this.index),this.index+=c.length)
},finalize:function(){return this.data
}},e.exports=g
},{"./utils":21}],20:[function(w,v,u){for(var t=w("./utils"),s=w("./support"),r=w("./nodeBuffer"),p=new Array(256),o=0;
256>o;
o++){p[o]=o>=252?6:o>=248?5:o>=240?4:o>=224?3:o>=192?2:1
}p[254]=p[254]=1;
var n=function(j){var e,B,A,z,y,x=j.length,k=0;
for(z=0;
x>z;
z++){B=j.charCodeAt(z),55296===(64512&B)&&x>z+1&&(A=j.charCodeAt(z+1),56320===(64512&A)&&(B=65536+(B-55296<<10)+(A-56320),z++)),k+=128>B?1:2048>B?2:65536>B?3:4
}for(e=s.uint8array?new Uint8Array(k):new Array(k),y=0,z=0;
k>y;
z++){B=j.charCodeAt(z),55296===(64512&B)&&x>z+1&&(A=j.charCodeAt(z+1),56320===(64512&A)&&(B=65536+(B-55296<<10)+(A-56320),z++)),128>B?e[y++]=B:2048>B?(e[y++]=192|B>>>6,e[y++]=128|63&B):65536>B?(e[y++]=224|B>>>12,e[y++]=128|B>>>6&63,e[y++]=128|63&B):(e[y++]=240|B>>>18,e[y++]=128|B>>>12&63,e[y++]=128|B>>>6&63,e[y++]=128|63&B)
}return e
},m=function(e,d){var f;
for(d=d||e.length,d>e.length&&(d=e.length),f=d-1;
f>=0&&128===(192&e[f]);
){f--
}return 0>f?d:0===f?d:f+p[e[f]]>d?f:d
},l=function(g){var d,z,y,x,k=g.length,j=new Array(2*k);
for(z=0,d=0;
k>d;
){if(y=g[d++],128>y){j[z++]=y
}else{if(x=p[y],x>4){j[z++]=65533,d+=x-1
}else{for(y&=2===x?31:3===x?15:7;
x>1&&k>d;
){y=y<<6|63&g[d++],x--
}x>1?j[z++]=65533:65536>y?j[z++]=y:(y-=65536,j[z++]=55296|y>>10&1023,j[z++]=56320|1023&y)
}}}return j.length!==z&&(j.subarray?j=j.subarray(0,z):j.length=z),t.applyFromCharCode(j)
};
u.utf8encode=function(c){return s.nodebuffer?r(c,"utf-8"):n(c)
},u.utf8decode=function(e){if(s.nodebuffer){return t.transformTo("nodebuffer",e).toString("utf-8")
}e=t.transformTo(s.uint8array?"uint8array":"array",e);
for(var d=[],y=0,x=e.length,k=65536;
x>y;
){var j=m(e,Math.min(y+k,x));
d.push(s.uint8array?l(e.subarray(y,j)):l(e.slice(y,j))),y=j
}return d.join("")
}
},{"./nodeBuffer":11,"./support":17,"./utils":21}],21:[function(w,v,u){function t(c){return c
}function s(e,d){for(var f=0;
f<e.length;
++f){d[f]=255&e.charCodeAt(f)
}return d
}function r(E){var D=65536,C=[],B=E.length,A=u.getTypeOf(E),z=0,y=!0;
try{switch(A){case"uint8array":String.fromCharCode.apply(null,new Uint8Array(0));
break;
case"nodebuffer":String.fromCharCode.apply(null,m(0))
}}catch(x){y=!1
}if(!y){for(var j="",c=0;
c<E.length;
c++){j+=String.fromCharCode(E[c])
}return j
}for(;
B>z&&D>1;
){try{C.push("array"===A||"nodebuffer"===A?String.fromCharCode.apply(null,E.slice(z,Math.min(z+D,B))):String.fromCharCode.apply(null,E.subarray(z,Math.min(z+D,B)))),z+=D
}catch(x){D=Math.floor(D/2)
}}return C.join("")
}function p(e,d){for(var f=0;
f<e.length;
f++){d[f]=e[f]
}return d
}var o=w("./support"),n=w("./compressions"),m=w("./nodeBuffer");
u.string2binary=function(e){for(var d="",f=0;
f<e.length;
f++){d+=String.fromCharCode(255&e.charCodeAt(f))
}return d
},u.arrayBuffer2Blob=function(g,c){u.checkSupport("blob"),c=c||"application/zip";
try{return new Blob([g],{type:c})
}catch(k){try{var j=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,h=new j;
return h.append(g),h.getBlob(c)
}catch(k){throw new Error("Bug : can't construct the Blob.")
}}},u.applyFromCharCode=r;
var l={};
l.string={string:t,array:function(c){return s(c,new Array(c.length))
},arraybuffer:function(c){return l.string.uint8array(c).buffer
},uint8array:function(c){return s(c,new Uint8Array(c.length))
},nodebuffer:function(c){return s(c,m(c.length))
}},l.array={string:r,array:t,arraybuffer:function(c){return new Uint8Array(c).buffer
},uint8array:function(c){return new Uint8Array(c)
},nodebuffer:function(c){return m(c)
}},l.arraybuffer={string:function(c){return r(new Uint8Array(c))
},array:function(c){return p(new Uint8Array(c),new Array(c.byteLength))
},arraybuffer:t,uint8array:function(c){return new Uint8Array(c)
},nodebuffer:function(c){return m(new Uint8Array(c))
}},l.uint8array={string:r,array:function(c){return p(c,new Array(c.length))
},arraybuffer:function(c){return c.buffer
},uint8array:t,nodebuffer:function(c){return m(c)
}},l.nodebuffer={string:r,array:function(c){return p(c,new Array(c.length))
},arraybuffer:function(c){return l.nodebuffer.uint8array(c).buffer
},uint8array:function(c){return p(c,new Uint8Array(c.length))
},nodebuffer:t},u.transformTo=function(f,c){if(c||(c=""),!f){return c
}u.checkSupport(f);
var h=u.getTypeOf(c),g=l[h][f](c);
return g
},u.getTypeOf=function(c){return"string"==typeof c?"string":"[object Array]"===Object.prototype.toString.call(c)?"array":o.nodebuffer&&m.test(c)?"nodebuffer":o.uint8array&&c instanceof Uint8Array?"uint8array":o.arraybuffer&&c instanceof ArrayBuffer?"arraybuffer":void 0
},u.checkSupport=function(d){var c=o[d.toLowerCase()];
if(!c){throw new Error(d+" is not supported by this browser")
}},u.MAX_VALUE_16BITS=65535,u.MAX_VALUE_32BITS=-1,u.pretty=function(f){var e,h,g="";
for(h=0;
h<(f||"").length;
h++){e=f.charCodeAt(h),g+="\\x"+(16>e?"0":"")+e.toString(16).toUpperCase()
}return g
},u.findCompression=function(d){for(var c in n){if(n.hasOwnProperty(c)&&n[c].magic===d){return n[c]
}}return null
},u.isRegExp=function(c){return"[object RegExp]"===Object.prototype.toString.call(c)
}
},{"./compressions":3,"./nodeBuffer":11,"./support":17}],22:[function(w,v){function u(d,c){this.files=[],this.loadOptions=c,d&&this.load(d)
}var t=w("./stringReader"),s=w("./nodeBufferReader"),r=w("./uint8ArrayReader"),p=w("./utils"),o=w("./signature"),n=w("./zipEntry"),m=w("./support"),l=w("./object");
u.prototype={checkSignature:function(d){var c=this.reader.readString(4);
if(c!==d){throw new Error("Corrupted zip or bug : unexpected signature ("+p.pretty(c)+", expected "+p.pretty(d)+")")
}},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2),this.zipComment=this.reader.readString(this.zipCommentLength),this.zipComment=l.utf8decode(this.zipComment)
},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.versionMadeBy=this.reader.readString(2),this.versionNeeded=this.reader.readInt(2),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};
for(var g,f,k,j=this.zip64EndOfCentralSize-44,h=0;
j>h;
){g=this.reader.readInt(2),f=this.reader.readInt(4),k=this.reader.readString(f),this.zip64ExtensibleData[g]={id:g,length:f,value:k}
}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount>1){throw new Error("Multi-volumes zip are not supported")
}},readLocalFiles:function(){var d,c;
for(d=0;
d<this.files.length;
d++){c=this.files[d],this.reader.setIndex(c.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),c.readLocalPart(this.reader),c.handleUTF8(),c.processAttributes()
}},readCentralDir:function(){var c;
for(this.reader.setIndex(this.centralDirOffset);
this.reader.readString(4)===o.CENTRAL_FILE_HEADER;
){c=new n({zip64:this.zip64},this.loadOptions),c.readCentralPart(this.reader),this.files.push(c)
}},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);
if(-1===e){var d=!0;
try{this.reader.setIndex(0),this.checkSignature(o.LOCAL_FILE_HEADER),d=!1
}catch(f){}throw new Error(d?"Can't find end of central directory : is this a zip file ? If it is, see http://stuk.github.io/jszip/documentation/howto/read_zip.html":"Corrupted zip : can't find end of central directory")
}if(this.reader.setIndex(e),this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===p.MAX_VALUE_16BITS||this.diskWithCentralDirStart===p.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===p.MAX_VALUE_16BITS||this.centralDirRecords===p.MAX_VALUE_16BITS||this.centralDirSize===p.MAX_VALUE_32BITS||this.centralDirOffset===p.MAX_VALUE_32BITS){if(this.zip64=!0,e=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),-1===e){throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator")
}this.reader.setIndex(e),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()
}},prepareReader:function(d){var c=p.getTypeOf(d);
this.reader="string"!==c||m.uint8array?"nodebuffer"===c?new s(d):new r(p.transformTo("uint8array",d)):new t(d,this.loadOptions.optimizedBinaryString)
},load:function(c){this.prepareReader(c),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()
}},v.exports=u
},{"./nodeBufferReader":12,"./object":13,"./signature":14,"./stringReader":15,"./support":17,"./uint8ArrayReader":18,"./utils":21,"./zipEntry":23}],23:[function(s,r){function p(d,c){this.options=d,this.loadOptions=c
}var o=s("./stringReader"),n=s("./utils"),m=s("./compressedObject"),l=s("./object"),k=0,j=3;
p.prototype={isEncrypted:function(){return 1===(1&this.bitFlag)
},useUTF8:function(){return 2048===(2048&this.bitFlag)
},prepareCompressedContent:function(e,d,f){return function(){var c=e.index;
e.setIndex(d);
var a=e.readData(f);
return e.setIndex(c),a
}
},prepareContent:function(g,e,u,t,h){return function(){var d=n.transformTo(t.uncompressInputType,this.getCompressedContent()),c=t.uncompress(d);
if(c.length!==h){throw new Error("Bug : uncompressed data size mismatch")
}return c
}
},readLocalPart:function(e){var d,f;
if(e.skip(22),this.fileNameLength=e.readInt(2),f=e.readInt(2),this.fileName=e.readString(this.fileNameLength),e.skip(f),-1==this.compressedSize||-1==this.uncompressedSize){throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)")
}if(d=n.findCompression(this.compressionMethod),null===d){throw new Error("Corrupted zip : compression "+n.pretty(this.compressionMethod)+" unknown (inner file : "+this.fileName+")")
}if(this.decompressed=new m,this.decompressed.compressedSize=this.compressedSize,this.decompressed.uncompressedSize=this.uncompressedSize,this.decompressed.crc32=this.crc32,this.decompressed.compressionMethod=this.compressionMethod,this.decompressed.getCompressedContent=this.prepareCompressedContent(e,e.index,this.compressedSize,d),this.decompressed.getContent=this.prepareContent(e,e.index,this.compressedSize,d,this.uncompressedSize),this.loadOptions.checkCRC32&&(this.decompressed=n.transformTo("string",this.decompressed.getContent()),l.crc32(this.decompressed)!==this.crc32)){throw new Error("Corrupted zip : CRC32 mismatch")
}},readCentralPart:function(c){if(this.versionMadeBy=c.readInt(2),this.versionNeeded=c.readInt(2),this.bitFlag=c.readInt(2),this.compressionMethod=c.readString(2),this.date=c.readDate(),this.crc32=c.readInt(4),this.compressedSize=c.readInt(4),this.uncompressedSize=c.readInt(4),this.fileNameLength=c.readInt(2),this.extraFieldsLength=c.readInt(2),this.fileCommentLength=c.readInt(2),this.diskNumberStart=c.readInt(2),this.internalFileAttributes=c.readInt(2),this.externalFileAttributes=c.readInt(4),this.localHeaderOffset=c.readInt(4),this.isEncrypted()){throw new Error("Encrypted zip are not supported")
}this.fileName=c.readString(this.fileNameLength),this.readExtraFields(c),this.parseZIP64ExtraField(c),this.fileComment=c.readString(this.fileCommentLength)
},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;
var c=this.versionMadeBy>>8;
this.dir=16&this.externalFileAttributes?!0:!1,c===k&&(this.dosPermissions=63&this.externalFileAttributes),c===j&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileName.slice(-1)||(this.dir=!0)
},parseZIP64ExtraField:function(){if(this.extraFields[1]){var c=new o(this.extraFields[1].value);
this.uncompressedSize===n.MAX_VALUE_32BITS&&(this.uncompressedSize=c.readInt(8)),this.compressedSize===n.MAX_VALUE_32BITS&&(this.compressedSize=c.readInt(8)),this.localHeaderOffset===n.MAX_VALUE_32BITS&&(this.localHeaderOffset=c.readInt(8)),this.diskNumberStart===n.MAX_VALUE_32BITS&&(this.diskNumberStart=c.readInt(4))
}},readExtraFields:function(g){var f,u,t,h=g.index;
for(this.extraFields=this.extraFields||{};
g.index<h+this.extraFieldsLength;
){f=g.readInt(2),u=g.readInt(2),t=g.readString(u),this.extraFields[f]={id:f,length:u,value:t}
}},handleUTF8:function(){if(this.useUTF8()){this.fileName=l.utf8decode(this.fileName),this.fileComment=l.utf8decode(this.fileComment)
}else{var d=this.findExtraFieldUnicodePath();
null!==d&&(this.fileName=d);
var c=this.findExtraFieldUnicodeComment();
null!==c&&(this.fileComment=c)
}},findExtraFieldUnicodePath:function(){var d=this.extraFields[28789];
if(d){var c=new o(d.value);
return 1!==c.readInt(1)?null:l.crc32(this.fileName)!==c.readInt(4)?null:l.utf8decode(c.readString(d.length-5))
}return null
},findExtraFieldUnicodeComment:function(){var d=this.extraFields[25461];
if(d){var c=new o(d.value);
return 1!==c.readInt(1)?null:l.crc32(this.fileComment)!==c.readInt(4)?null:l.utf8decode(c.readString(d.length-5))
}return null
}},r.exports=p
},{"./compressedObject":2,"./object":13,"./stringReader":15,"./utils":21}],24:[function(j,h){var o=j("./lib/utils/common").assign,n=j("./lib/deflate"),m=j("./lib/inflate"),l=j("./lib/zlib/constants"),k={};
o(k,n,m,l),h.exports=k
},{"./lib/deflate":25,"./lib/inflate":26,"./lib/utils/common":27,"./lib/zlib/constants":30}],25:[function(L,K,J){function I(e,d){var f=new t(d);
if(f.push(e,!0),f.err){throw f.msg
}return f.result
}function H(d,c){return c=c||{},c.raw=!0,I(d,c)
}function G(d,c){return c=c||{},c.gzip=!0,I(d,c)
}var F=L("./zlib/deflate.js"),E=L("./utils/common"),D=L("./utils/strings"),C=L("./zlib/messages"),B=L("./zlib/zstream"),A=0,z=4,y=0,x=1,w=-1,v=0,u=8,t=function(e){this.options=E.assign({level:w,method:u,chunkSize:16384,windowBits:15,memLevel:8,strategy:v,to:""},e||{});
var d=this.options;
d.raw&&d.windowBits>0?d.windowBits=-d.windowBits:d.gzip&&d.windowBits>0&&d.windowBits<16&&(d.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new B,this.strm.avail_out=0;
var f=F.deflateInit2(this.strm,d.level,d.method,d.windowBits,d.memLevel,d.strategy);
if(f!==y){throw new Error(C[f])
}d.header&&F.deflateSetHeader(this.strm,d.header)
};
t.prototype.push=function(h,g){var m,l,k=this.strm,j=this.options.chunkSize;
if(this.ended){return !1
}l=g===~~g?g:g===!0?z:A,k.input="string"==typeof h?D.string2buf(h):h,k.next_in=0,k.avail_in=k.input.length;
do{if(0===k.avail_out&&(k.output=new E.Buf8(j),k.next_out=0,k.avail_out=j),m=F.deflate(k,l),m!==x&&m!==y){return this.onEnd(m),this.ended=!0,!1
}(0===k.avail_out||0===k.avail_in&&l===z)&&this.onData("string"===this.options.to?D.buf2binstring(E.shrinkBuf(k.output,k.next_out)):E.shrinkBuf(k.output,k.next_out))
}while((k.avail_in>0||0===k.avail_out)&&m!==x);
return l===z?(m=F.deflateEnd(this.strm),this.onEnd(m),this.ended=!0,m===y):!0
},t.prototype.onData=function(c){this.chunks.push(c)
},t.prototype.onEnd=function(c){c===y&&(this.result="string"===this.options.to?this.chunks.join(""):E.flattenChunks(this.chunks)),this.chunks=[],this.err=c,this.msg=this.strm.msg
},J.Deflate=t,J.deflate=I,J.deflateRaw=H,J.gzip=G
},{"./utils/common":27,"./utils/strings":28,"./zlib/deflate.js":32,"./zlib/messages":37,"./zlib/zstream":39}],26:[function(A,z,y){function x(e,d){var f=new n(d);
if(f.push(e,!0),f.err){throw f.msg
}return f.result
}function w(d,c){return c=c||{},c.raw=!0,x(d,c)
}var v=A("./zlib/inflate.js"),u=A("./utils/common"),t=A("./utils/strings"),s=A("./zlib/constants"),r=A("./zlib/messages"),p=A("./zlib/zstream"),o=A("./zlib/gzheader"),n=function(e){this.options=u.assign({chunkSize:16384,windowBits:0,to:""},e||{});
var d=this.options;
d.raw&&d.windowBits>=0&&d.windowBits<16&&(d.windowBits=-d.windowBits,0===d.windowBits&&(d.windowBits=-15)),!(d.windowBits>=0&&d.windowBits<16)||e&&e.windowBits||(d.windowBits+=32),d.windowBits>15&&d.windowBits<48&&0===(15&d.windowBits)&&(d.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new p,this.strm.avail_out=0;
var f=v.inflateInit2(this.strm,d.windowBits);
if(f!==s.Z_OK){throw new Error(r[f])
}this.header=new o,v.inflateGetHeader(this.strm,this.header)
};
n.prototype.push=function(G,F){var E,D,C,B,h,g=this.strm,f=this.options.chunkSize;
if(this.ended){return !1
}D=F===~~F?F:F===!0?s.Z_FINISH:s.Z_NO_FLUSH,g.input="string"==typeof G?t.binstring2buf(G):G,g.next_in=0,g.avail_in=g.input.length;
do{if(0===g.avail_out&&(g.output=new u.Buf8(f),g.next_out=0,g.avail_out=f),E=v.inflate(g,s.Z_NO_FLUSH),E!==s.Z_STREAM_END&&E!==s.Z_OK){return this.onEnd(E),this.ended=!0,!1
}g.next_out&&(0===g.avail_out||E===s.Z_STREAM_END||0===g.avail_in&&D===s.Z_FINISH)&&("string"===this.options.to?(C=t.utf8border(g.output,g.next_out),B=g.next_out-C,h=t.buf2string(g.output,C),g.next_out=B,g.avail_out=f-B,B&&u.arraySet(g.output,g.output,C,B,0),this.onData(h)):this.onData(u.shrinkBuf(g.output,g.next_out)))
}while(g.avail_in>0&&E!==s.Z_STREAM_END);
return E===s.Z_STREAM_END&&(D=s.Z_FINISH),D===s.Z_FINISH?(E=v.inflateEnd(this.strm),this.onEnd(E),this.ended=!0,E===s.Z_OK):!0
},n.prototype.onData=function(c){this.chunks.push(c)
},n.prototype.onEnd=function(c){c===s.Z_OK&&(this.result="string"===this.options.to?this.chunks.join(""):u.flattenChunks(this.chunks)),this.chunks=[],this.err=c,this.msg=this.strm.msg
},y.Inflate=n,y.inflate=x,y.inflateRaw=w,y.ungzip=x
},{"./utils/common":27,"./utils/strings":28,"./zlib/constants":30,"./zlib/gzheader":33,"./zlib/inflate.js":35,"./zlib/messages":37,"./zlib/zstream":39}],27:[function(h,g,m){var l="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;
m.assign=function(f){for(var e=Array.prototype.slice.call(arguments,1);
e.length;
){var o=e.shift();
if(o){if("object"!=typeof o){throw new TypeError(o+"must be non-object")
}for(var n in o){o.hasOwnProperty(n)&&(f[n]=o[n])
}}}return f
},m.shrinkBuf=function(d,c){return d.length===c?d:d.subarray?d.subarray(0,c):(d.length=c,d)
};
var k={arraySet:function(o,n,t,s,r){if(n.subarray&&o.subarray){return void o.set(n.subarray(t,t+s),r)
}for(var p=0;
s>p;
p++){o[r+p]=n[t+p]
}},flattenChunks:function(o){var n,u,t,s,r,p;
for(t=0,n=0,u=o.length;
u>n;
n++){t+=o[n].length
}for(p=new Uint8Array(t),s=0,n=0,u=o.length;
u>n;
n++){r=o[n],p.set(r,s),s+=r.length
}return p
}},j={arraySet:function(o,n,t,s,r){for(var p=0;
s>p;
p++){o[r+p]=n[t+p]
}},flattenChunks:function(c){return[].concat.apply([],c)
}};
m.setTyped=function(c){c?(m.Buf8=Uint8Array,m.Buf16=Uint16Array,m.Buf32=Int32Array,m.assign(m,k)):(m.Buf8=Array,m.Buf16=Array,m.Buf32=Array,m.assign(m,j))
},m.setTyped(l)
},{}],28:[function(u,t,s){function r(f,e){if(65537>e&&(f.subarray&&n||!f.subarray&&o)){return String.fromCharCode.apply(null,p.shrinkBuf(f,e))
}for(var h="",g=0;
e>g;
g++){h+=String.fromCharCode(f[g])
}return h
}var p=u("./common"),o=!0,n=!0;
try{String.fromCharCode.apply(null,[0])
}catch(m){o=!1
}try{String.fromCharCode.apply(null,new Uint8Array(1))
}catch(m){n=!1
}for(var l=new p.Buf8(256),k=0;
256>k;
k++){l[k]=k>=252?6:k>=248?5:k>=240?4:k>=224?3:k>=192?2:1
}l[254]=l[254]=1,s.string2buf=function(j){var e,A,z,y,x,w=j.length,v=0;
for(y=0;
w>y;
y++){A=j.charCodeAt(y),55296===(64512&A)&&w>y+1&&(z=j.charCodeAt(y+1),56320===(64512&z)&&(A=65536+(A-55296<<10)+(z-56320),y++)),v+=128>A?1:2048>A?2:65536>A?3:4
}for(e=new p.Buf8(v),x=0,y=0;
v>x;
y++){A=j.charCodeAt(y),55296===(64512&A)&&w>y+1&&(z=j.charCodeAt(y+1),56320===(64512&z)&&(A=65536+(A-55296<<10)+(z-56320),y++)),128>A?e[x++]=A:2048>A?(e[x++]=192|A>>>6,e[x++]=128|63&A):65536>A?(e[x++]=224|A>>>12,e[x++]=128|A>>>6&63,e[x++]=128|63&A):(e[x++]=240|A>>>18,e[x++]=128|A>>>12&63,e[x++]=128|A>>>6&63,e[x++]=128|63&A)
}return e
},s.buf2binstring=function(c){return r(c,c.length)
},s.binstring2buf=function(f){for(var e=new p.Buf8(f.length),h=0,g=e.length;
g>h;
h++){e[h]=f.charCodeAt(h)
}return e
},s.buf2string=function(v,d){var B,A,z,y,x=d||v.length,w=new Array(2*x);
for(A=0,B=0;
x>B;
){if(z=v[B++],128>z){w[A++]=z
}else{if(y=l[z],y>4){w[A++]=65533,B+=y-1
}else{for(z&=2===y?31:3===y?15:7;
y>1&&x>B;
){z=z<<6|63&v[B++],y--
}y>1?w[A++]=65533:65536>z?w[A++]=z:(z-=65536,w[A++]=55296|z>>10&1023,w[A++]=56320|1023&z)
}}}return r(w,A)
},s.utf8border=function(e,d){var f;
for(d=d||e.length,d>e.length&&(d=e.length),f=d-1;
f>=0&&128===(192&e[f]);
){f--
}return 0>f?d:0===f?d:f+l[e[f]]>d?f:d
}
},{"./common":27}],29:[function(e,d){function f(j,h,o,n){for(var m=65535&j|0,l=j>>>16&65535|0,k=0;
0!==o;
){k=o>2000?2000:o,o-=k;
do{m=m+h[n++]|0,l=l+m|0
}while(--k);
m%=65521,l%=65521
}return m|l<<16|0
}d.exports=f
},{}],30:[function(d,c){c.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}
},{}],31:[function(g,f){function k(){for(var l,e=[],n=0;
256>n;
n++){l=n;
for(var m=0;
8>m;
m++){l=1&l?3988292384^l>>>1:l>>>1
}e[n]=l
}return e
}function j(l,e,r,p){var o=h,n=p+r;
l=-1^l;
for(var m=p;
n>m;
m++){l=l>>>8^o[255&(l^e[m])]
}return -1^l
}var h=k();
f.exports=j
},{}],32:[function(aN,aM,aL){function aK(d,c){return d.msg=bd[c],c
}function aI(c){return(c<<1)-(c>4?9:0)
}function aH(d){for(var c=d.length;
--c>=0;
){d[c]=0
}}function aG(e){var d=e.state,f=d.pending;
f>e.avail_out&&(f=e.avail_out),0!==f&&(bi.arraySet(e.output,d.pending_buf,d.pending_out,f,e.next_out),e.next_out+=f,d.pending_out+=f,e.total_out+=f,e.avail_out-=f,d.pending-=f,0===d.pending&&(d.pending_out=0))
}function aF(d,c){bh._tr_flush_block(d,d.block_start>=0?d.block_start:-1,d.strstart-d.block_start,c),d.block_start=d.strstart,aG(d.strm)
}function aE(d,c){d.pending_buf[d.pending++]=c
}function aC(d,c){d.pending_buf[d.pending++]=c>>>8&255,d.pending_buf[d.pending++]=255&c
}function aB(g,f,k,j){var h=g.avail_in;
return h>j&&(h=j),0===h?0:(g.avail_in-=h,bi.arraySet(f,g.input,g.next_in,h,k),1===g.state.wrap?g.adler=bg(g.adler,f,h,k):2===g.state.wrap&&(g.adler=be(g.adler,f,h,k)),g.next_in+=h,g.total_in+=h,h)
}function aA(E,D){var C,B,A=E.max_chain_length,z=E.strstart,y=E.prev_length,x=E.nice_match,w=E.strstart>E.w_size-ah?E.strstart-(E.w_size-ah):0,v=E.window,u=E.w_mask,t=E.prev,s=E.strstart+aD,r=v[z+y-1],p=v[z+y];
E.prev_length>=E.good_match&&(A>>=2),x>E.lookahead&&(x=E.lookahead);
do{if(C=D,v[C+y]===p&&v[C+y-1]===r&&v[C]===v[z]&&v[++C]===v[z+1]){z+=2,C++;
do{}while(v[++z]===v[++C]&&v[++z]===v[++C]&&v[++z]===v[++C]&&v[++z]===v[++C]&&v[++z]===v[++C]&&v[++z]===v[++C]&&v[++z]===v[++C]&&v[++z]===v[++C]&&s>z);
if(B=aD-(s-z),z=s-aD,B>y){if(E.match_start=D,y=B,B>=x){break
}r=v[z+y-1],p=v[z+y]
}}}while((D=t[D&u])>w&&0!==--A);
return y<=E.lookahead?y:E.lookahead
}function az(j){var h,o,n,m,l,k=j.w_size;
do{if(m=j.window_size-j.lookahead-j.strstart,j.strstart>=k+(k-ah)){bi.arraySet(j.window,j.window,k,k,0),j.match_start-=k,j.strstart-=k,j.block_start-=k,o=j.hash_size,h=o;
do{n=j.head[--h],j.head[h]=n>=k?n-k:0
}while(--o);
o=k,h=o;
do{n=j.prev[--h],j.prev[h]=n>=k?n-k:0
}while(--o);
m+=k
}if(0===j.strm.avail_in){break
}if(o=aB(j.strm,j.window,j.strstart+j.lookahead,m),j.lookahead+=o,j.lookahead+j.insert>=a7){for(l=j.strstart-j.insert,j.ins_h=j.window[l],j.ins_h=(j.ins_h<<j.hash_shift^j.window[l+1])&j.hash_mask;
j.insert&&(j.ins_h=(j.ins_h<<j.hash_shift^j.window[l+a7-1])&j.hash_mask,j.prev[l&j.w_mask]=j.head[j.ins_h],j.head[j.ins_h]=l,l++,j.insert--,!(j.lookahead+j.insert<a7));
){}}}while(j.lookahead<ah&&0!==j.strm.avail_in)
}function ay(f,e){var h=65535;
for(h>f.pending_buf_size-5&&(h=f.pending_buf_size-5);
;
){if(f.lookahead<=1){if(az(f),0===f.lookahead&&e===ba){return bq
}if(0===f.lookahead){break
}}f.strstart+=f.lookahead,f.lookahead=0;
var g=f.block_start+h;
if((0===f.strstart||f.strstart>=g)&&(f.lookahead=f.strstart-g,f.strstart=g,aF(f,!1),0===f.strm.avail_out)){return bq
}if(f.strstart-f.block_start>=f.w_size-ah&&(aF(f,!1),0===f.strm.avail_out)){return bq
}}return f.insert=0,e===a6?(aF(f,!0),0===f.strm.avail_out?aO:aj):f.strstart>f.block_start&&(aF(f,!1),0===f.strm.avail_out)?bq:bq
}function aw(f,e){for(var h,g;
;
){if(f.lookahead<ah){if(az(f),f.lookahead<ah&&e===ba){return bq
}if(0===f.lookahead){break
}}if(h=0,f.lookahead>=a7&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+a7-1])&f.hash_mask,h=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart),0!==h&&f.strstart-h<=f.w_size-ah&&(f.match_length=aA(f,h)),f.match_length>=a7){if(g=bh._tr_tally(f,f.strstart-f.match_start,f.match_length-a7),f.lookahead-=f.match_length,f.match_length<=f.max_lazy_match&&f.lookahead>=a7){f.match_length--;
do{f.strstart++,f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+a7-1])&f.hash_mask,h=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart
}while(0!==--f.match_length);
f.strstart++
}else{f.strstart+=f.match_length,f.match_length=0,f.ins_h=f.window[f.strstart],f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+1])&f.hash_mask
}}else{g=bh._tr_tally(f,0,f.window[f.strstart]),f.lookahead--,f.strstart++
}if(g&&(aF(f,!1),0===f.strm.avail_out)){return bq
}}return f.insert=f.strstart<a7-1?f.strstart:a7-1,e===a6?(aF(f,!0),0===f.strm.avail_out?aO:aj):f.last_lit&&(aF(f,!1),0===f.strm.avail_out)?bq:bk
}function av(g,f){for(var k,j,h;
;
){if(g.lookahead<ah){if(az(g),g.lookahead<ah&&f===ba){return bq
}if(0===g.lookahead){break
}}if(k=0,g.lookahead>=a7&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+a7-1])&g.hash_mask,k=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart),g.prev_length=g.match_length,g.prev_match=g.match_start,g.match_length=a7-1,0!==k&&g.prev_length<g.max_lazy_match&&g.strstart-k<=g.w_size-ah&&(g.match_length=aA(g,k),g.match_length<=5&&(g.strategy===aX||g.match_length===a7&&g.strstart-g.match_start>4096)&&(g.match_length=a7-1)),g.prev_length>=a7&&g.match_length<=g.prev_length){h=g.strstart+g.lookahead-a7,j=bh._tr_tally(g,g.strstart-1-g.prev_match,g.prev_length-a7),g.lookahead-=g.prev_length-1,g.prev_length-=2;
do{++g.strstart<=h&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+a7-1])&g.hash_mask,k=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart)
}while(0!==--g.prev_length);
if(g.match_available=0,g.match_length=a7-1,g.strstart++,j&&(aF(g,!1),0===g.strm.avail_out)){return bq
}}else{if(g.match_available){if(j=bh._tr_tally(g,0,g.window[g.strstart-1]),j&&aF(g,!1),g.strstart++,g.lookahead--,0===g.strm.avail_out){return bq
}}else{g.match_available=1,g.strstart++,g.lookahead--
}}}return g.match_available&&(j=bh._tr_tally(g,0,g.window[g.strstart-1]),g.match_available=0),g.insert=g.strstart<a7-1?g.strstart:a7-1,f===a6?(aF(g,!0),0===g.strm.avail_out?aO:aj):g.last_lit&&(aF(g,!1),0===g.strm.avail_out)?bq:bk
}function au(j,h){for(var o,n,m,l,k=j.window;
;
){if(j.lookahead<=aD){if(az(j),j.lookahead<=aD&&h===ba){return bq
}if(0===j.lookahead){break
}}if(j.match_length=0,j.lookahead>=a7&&j.strstart>0&&(m=j.strstart-1,n=k[m],n===k[++m]&&n===k[++m]&&n===k[++m])){l=j.strstart+aD;
do{}while(n===k[++m]&&n===k[++m]&&n===k[++m]&&n===k[++m]&&n===k[++m]&&n===k[++m]&&n===k[++m]&&n===k[++m]&&l>m);
j.match_length=aD-(l-m),j.match_length>j.lookahead&&(j.match_length=j.lookahead)
}if(j.match_length>=a7?(o=bh._tr_tally(j,1,j.match_length-a7),j.lookahead-=j.match_length,j.strstart+=j.match_length,j.match_length=0):(o=bh._tr_tally(j,0,j.window[j.strstart]),j.lookahead--,j.strstart++),o&&(aF(j,!1),0===j.strm.avail_out)){return bq
}}return j.insert=0,h===a6?(aF(j,!0),0===j.strm.avail_out?aO:aj):j.last_lit&&(aF(j,!1),0===j.strm.avail_out)?bq:bk
}function at(e,d){for(var f;
;
){if(0===e.lookahead&&(az(e),0===e.lookahead)){if(d===ba){return bq
}break
}if(e.match_length=0,f=bh._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,f&&(aF(e,!1),0===e.strm.avail_out)){return bq
}}return e.insert=0,d===a6?(aF(e,!0),0===e.strm.avail_out?aO:aj):e.last_lit&&(aF(e,!1),0===e.strm.avail_out)?bq:bk
}function ar(c){c.window_size=2*c.w_size,aH(c.head),c.max_lazy_match=bj[c.level].max_lazy,c.good_match=bj[c.level].good_length,c.nice_match=bj[c.level].nice_length,c.max_chain_length=bj[c.level].max_chain,c.strstart=0,c.block_start=0,c.lookahead=0,c.insert=0,c.match_length=c.prev_length=a7-1,c.match_available=0,c.ins_h=0
}function aq(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=aR,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new bi.Buf16(2*br),this.dyn_dtree=new bi.Buf16(2*(2*ag+1)),this.bl_tree=new bi.Buf16(2*(2*ac+1)),aH(this.dyn_ltree),aH(this.dyn_dtree),aH(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new bi.Buf16(bn+1),this.heap=new bi.Buf16(2*ax+1),aH(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new bi.Buf16(2*ax+1),aH(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0
}function ap(d){var c;
return d&&d.state?(d.total_in=d.total_out=0,d.data_type=aS,c=d.state,c.pending=0,c.pending_out=0,c.wrap<0&&(c.wrap=-c.wrap),c.status=c.wrap?bs:ae,d.adler=2===c.wrap?0:1,c.last_flush=ba,bh._tr_init(c),a4):aK(d,a2)
}function ao(d){var c=ap(d);
return c===a4&&ar(d.state),c
}function an(d,c){return d&&d.state?2!==d.state.wrap?a2:(d.state.gzhead=c,a4):a2
}function am(j,d,p,o,n,m){if(!j){return a2
}var l=1;
if(d===aY&&(d=6),0>o?(l=0,o=-o):o>15&&(l=2,o-=16),1>n||n>aQ||p!==aR||8>o||o>15||0>d||d>9||0>m||m>aU){return aK(j,a2)
}8===o&&(o=9);
var k=new aq;
return j.state=k,k.strm=j,k.wrap=l,k.gzhead=null,k.w_bits=o,k.w_size=1<<k.w_bits,k.w_mask=k.w_size-1,k.hash_bits=n+7,k.hash_size=1<<k.hash_bits,k.hash_mask=k.hash_size-1,k.hash_shift=~~((k.hash_bits+a7-1)/a7),k.window=new bi.Buf8(2*k.w_size),k.head=new bi.Buf16(k.hash_size),k.prev=new bi.Buf16(k.w_size),k.lit_bufsize=1<<n+6,k.pending_buf_size=4*k.lit_bufsize,k.pending_buf=new bi.Buf8(k.pending_buf_size),k.d_buf=k.lit_bufsize>>1,k.l_buf=3*k.lit_bufsize,k.level=d,k.strategy=m,k.method=p,ao(j)
}function al(d,c){return am(d,c,aR,bp,aP,aT)
}function ak(t,s){var r,p,j,g;
if(!t||!t.state||s>a5||0>s){return t?aK(t,a2):a2
}if(p=t.state,!t.output||!t.input&&0!==t.avail_in||p.status===bt&&s!==a6){return aK(t,0===t.avail_out?aZ:a2)
}if(p.strm=t,r=p.last_flush,p.last_flush=s,p.status===bs){if(2===p.wrap){t.adler=0,aE(p,31),aE(p,139),aE(p,8),p.gzhead?(aE(p,(p.gzhead.text?1:0)+(p.gzhead.hcrc?2:0)+(p.gzhead.extra?4:0)+(p.gzhead.name?8:0)+(p.gzhead.comment?16:0)),aE(p,255&p.gzhead.time),aE(p,p.gzhead.time>>8&255),aE(p,p.gzhead.time>>16&255),aE(p,p.gzhead.time>>24&255),aE(p,9===p.level?2:p.strategy>=aW||p.level<2?4:0),aE(p,255&p.gzhead.os),p.gzhead.extra&&p.gzhead.extra.length&&(aE(p,255&p.gzhead.extra.length),aE(p,p.gzhead.extra.length>>8&255)),p.gzhead.hcrc&&(t.adler=be(t.adler,p.pending_buf,p.pending,0)),p.gzindex=0,p.status=bo):(aE(p,0),aE(p,0),aE(p,0),aE(p,0),aE(p,0),aE(p,9===p.level?2:p.strategy>=aW||p.level<2?4:0),aE(p,af),p.status=ae)
}else{var f=aR+(p.w_bits-8<<4)<<8,e=-1;
e=p.strategy>=aW||p.level<2?0:p.level<6?1:6===p.level?2:3,f|=e<<6,0!==p.strstart&&(f|=ad),f+=31-f%31,p.status=ae,aC(p,f),0!==p.strstart&&(aC(p,t.adler>>>16),aC(p,65535&t.adler)),t.adler=1
}}if(p.status===bo){if(p.gzhead.extra){for(j=p.pending;
p.gzindex<(65535&p.gzhead.extra.length)&&(p.pending!==p.pending_buf_size||(p.gzhead.hcrc&&p.pending>j&&(t.adler=be(t.adler,p.pending_buf,p.pending-j,j)),aG(t),j=p.pending,p.pending!==p.pending_buf_size));
){aE(p,255&p.gzhead.extra[p.gzindex]),p.gzindex++
}p.gzhead.hcrc&&p.pending>j&&(t.adler=be(t.adler,p.pending_buf,p.pending-j,j)),p.gzindex===p.gzhead.extra.length&&(p.gzindex=0,p.status=bf)
}else{p.status=bf
}}if(p.status===bf){if(p.gzhead.name){j=p.pending;
do{if(p.pending===p.pending_buf_size&&(p.gzhead.hcrc&&p.pending>j&&(t.adler=be(t.adler,p.pending_buf,p.pending-j,j)),aG(t),j=p.pending,p.pending===p.pending_buf_size)){g=1;
break
}g=p.gzindex<p.gzhead.name.length?255&p.gzhead.name.charCodeAt(p.gzindex++):0,aE(p,g)
}while(0!==g);
p.gzhead.hcrc&&p.pending>j&&(t.adler=be(t.adler,p.pending_buf,p.pending-j,j)),0===g&&(p.gzindex=0,p.status=aJ)
}else{p.status=aJ
}}if(p.status===aJ){if(p.gzhead.comment){j=p.pending;
do{if(p.pending===p.pending_buf_size&&(p.gzhead.hcrc&&p.pending>j&&(t.adler=be(t.adler,p.pending_buf,p.pending-j,j)),aG(t),j=p.pending,p.pending===p.pending_buf_size)){g=1;
break
}g=p.gzindex<p.gzhead.comment.length?255&p.gzhead.comment.charCodeAt(p.gzindex++):0,aE(p,g)
}while(0!==g);
p.gzhead.hcrc&&p.pending>j&&(t.adler=be(t.adler,p.pending_buf,p.pending-j,j)),0===g&&(p.status=ai)
}else{p.status=ai
}}if(p.status===ai&&(p.gzhead.hcrc?(p.pending+2>p.pending_buf_size&&aG(t),p.pending+2<=p.pending_buf_size&&(aE(p,255&t.adler),aE(p,t.adler>>8&255),t.adler=0,p.status=ae)):p.status=ae),0!==p.pending){if(aG(t),0===t.avail_out){return p.last_flush=-1,a4
}}else{if(0===t.avail_in&&aI(s)<=aI(r)&&s!==a6){return aK(t,aZ)
}}if(p.status===bt&&0!==t.avail_in){return aK(t,aZ)
}if(0!==t.avail_in||0!==p.lookahead||s!==ba&&p.status!==bt){var d=p.strategy===aW?at(p,s):p.strategy===aV?au(p,s):bj[p.level].func(p,s);
if((d===aO||d===aj)&&(p.status=bt),d===bq||d===aO){return 0===t.avail_out&&(p.last_flush=-1),a4
}if(d===bk&&(s===a9?bh._tr_align(p):s!==a5&&(bh._tr_stored_block(p,0,0,!1),s===a8&&(aH(p.head),0===p.lookahead&&(p.strstart=0,p.block_start=0,p.insert=0))),aG(t),0===t.avail_out)){return p.last_flush=-1,a4
}}return s!==a6?a4:p.wrap<=0?a3:(2===p.wrap?(aE(p,255&t.adler),aE(p,t.adler>>8&255),aE(p,t.adler>>16&255),aE(p,t.adler>>24&255),aE(p,255&t.total_in),aE(p,t.total_in>>8&255),aE(p,t.total_in>>16&255),aE(p,t.total_in>>24&255)):(aC(p,t.adler>>>16),aC(p,65535&t.adler)),aG(t),p.wrap>0&&(p.wrap=-p.wrap),0!==p.pending?a4:a3)
}function bl(d){var c;
return d&&d.state?(c=d.state.status,c!==bs&&c!==bo&&c!==bf&&c!==aJ&&c!==ai&&c!==ae&&c!==bt?aK(d,a2):(d.state=null,c===ae?aK(d,a1):a4)):a2
}var bj,bi=aN("../utils/common"),bh=aN("./trees"),bg=aN("./adler32"),be=aN("./crc32"),bd=aN("./messages"),ba=0,a9=1,a8=3,a6=4,a5=5,a4=0,a3=1,a2=-2,a1=-3,aZ=-5,aY=-1,aX=1,aW=2,aV=3,aU=4,aT=0,aS=2,aR=8,aQ=9,bp=15,aP=8,bm=29,a0=256,ax=a0+1+bm,ag=30,ac=19,br=2*ax+1,bn=15,a7=3,aD=258,ah=aD+a7+1,ad=32,bs=42,bo=69,bf=73,aJ=91,ai=103,ae=113,bt=666,bq=1,bk=2,aO=3,aj=4,af=3,aa=function(g,f,k,j,h){this.good_length=g,this.max_lazy=f,this.nice_length=k,this.max_chain=j,this.func=h
};
bj=[new aa(0,0,0,0,ay),new aa(4,4,8,4,aw),new aa(4,5,16,8,aw),new aa(4,6,32,32,aw),new aa(4,4,16,16,av),new aa(8,16,32,32,av),new aa(8,16,128,128,av),new aa(8,32,128,256,av),new aa(32,128,258,1024,av),new aa(32,258,258,4096,av)],aL.deflateInit=al,aL.deflateInit2=am,aL.deflateReset=ao,aL.deflateResetKeep=ap,aL.deflateSetHeader=an,aL.deflate=ak,aL.deflateEnd=bl,aL.deflateInfo="pako deflate (from Nodeca project)"
},{"../utils/common":27,"./adler32":29,"./crc32":31,"./messages":37,"./trees":38}],33:[function(e,d){function f(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1
}d.exports=f
},{}],34:[function(f,e){var h=30,g=12;
e.exports=function(ab,aa){var Z,Y,X,W,V,U,T,S,R,Q,P,O,M,K,I,H,G,F,E,D,d,c,N,L,J;
Z=ab.state,Y=ab.next_in,L=ab.input,X=Y+(ab.avail_in-5),W=ab.next_out,J=ab.output,V=W-(aa-ab.avail_out),U=W+(ab.avail_out-257),T=Z.dmax,S=Z.wsize,R=Z.whave,Q=Z.wnext,P=Z.window,O=Z.hold,M=Z.bits,K=Z.lencode,I=Z.distcode,H=(1<<Z.lenbits)-1,G=(1<<Z.distbits)-1;
ab:do{15>M&&(O+=L[Y++]<<M,M+=8,O+=L[Y++]<<M,M+=8),F=K[O&H];
aa:for(;
;
){if(E=F>>>24,O>>>=E,M-=E,E=F>>>16&255,0===E){J[W++]=65535&F
}else{if(!(16&E)){if(0===(64&E)){F=K[(65535&F)+(O&(1<<E)-1)];
continue aa
}if(32&E){Z.mode=g;
break ab
}ab.msg="invalid literal/length code",Z.mode=h;
break ab
}D=65535&F,E&=15,E&&(E>M&&(O+=L[Y++]<<M,M+=8),D+=O&(1<<E)-1,O>>>=E,M-=E),15>M&&(O+=L[Y++]<<M,M+=8,O+=L[Y++]<<M,M+=8),F=I[O&G];
h:for(;
;
){if(E=F>>>24,O>>>=E,M-=E,E=F>>>16&255,!(16&E)){if(0===(64&E)){F=I[(65535&F)+(O&(1<<E)-1)];
continue h
}ab.msg="invalid distance code",Z.mode=h;
break ab
}if(d=65535&F,E&=15,E>M&&(O+=L[Y++]<<M,M+=8,E>M&&(O+=L[Y++]<<M,M+=8)),d+=O&(1<<E)-1,d>T){ab.msg="invalid distance too far back",Z.mode=h;
break ab
}if(O>>>=E,M-=E,E=W-V,d>E){if(E=d-E,E>R&&Z.sane){ab.msg="invalid distance too far back",Z.mode=h;
break ab
}if(c=0,N=P,0===Q){if(c+=S-E,D>E){D-=E;
do{J[W++]=P[c++]
}while(--E);
c=W-d,N=J
}}else{if(E>Q){if(c+=S+Q-E,E-=Q,D>E){D-=E;
do{J[W++]=P[c++]
}while(--E);
if(c=0,D>Q){E=Q,D-=E;
do{J[W++]=P[c++]
}while(--E);
c=W-d,N=J
}}}else{if(c+=Q-E,D>E){D-=E;
do{J[W++]=P[c++]
}while(--E);
c=W-d,N=J
}}}for(;
D>2;
){J[W++]=N[c++],J[W++]=N[c++],J[W++]=N[c++],D-=3
}D&&(J[W++]=N[c++],D>1&&(J[W++]=N[c++]))
}else{c=W-d;
do{J[W++]=J[c++],J[W++]=J[c++],J[W++]=J[c++],D-=3
}while(D>2);
D&&(J[W++]=J[c++],D>1&&(J[W++]=J[c++]))
}break
}}break
}}while(X>Y&&U>W);
D=M>>3,Y-=D,M-=D<<3,O&=(1<<M)-1,ab.next_in=Y,ab.next_out=W,ab.avail_in=X>Y?5+(X-Y):5-(Y-X),ab.avail_out=U>W?257+(U-W):257-(W-U),Z.hold=O,Z.bits=M
}
},{}],35:[function(aK,aJ,aI){function aH(c){return(c>>>24&255)+(c>>>8&65280)+((65280&c)<<8)+((255&c)<<24)
}function aF(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new ap.Buf16(320),this.work=new ap.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0
}function aE(d){var c;
return d&&d.state?(c=d.state,d.total_in=d.total_out=c.total=0,d.msg="",c.wrap&&(d.adler=1&c.wrap),c.mode=a2,c.last=0,c.havedict=0,c.dmax=32768,c.head=null,c.hold=0,c.bits=0,c.lencode=c.lendyn=new ap.Buf32(aG),c.distcode=c.distdyn=new ap.Buf32(ag),c.sane=1,c.back=-1,be):a8
}function aD(d){var c;
return d&&d.state?(c=d.state,c.wsize=0,c.whave=0,c.wnext=0,aE(d)):a8
}function aC(f,e){var h,g;
return f&&f.state?(g=f.state,0>e?(h=0,e=-e):(h=(e>>4)+1,48>e&&(e&=15)),e&&(8>e||e>15)?a8:(null!==g.window&&g.wbits!==e&&(g.window=null),g.wrap=h,g.wbits=e,aD(f))):a8
}function aB(f,e){var h,g;
return f?(g=new aF,f.state=g,g.window=null,h=aC(f,e),h!==be&&(f.state=null),h):a8
}function az(c){return aB(c,bo)
}function ay(d){if(bl){var c;
for(ar=new ap.Buf32(512),aq=new ap.Buf32(32),c=0;
144>c;
){d.lens[c++]=8
}for(;
256>c;
){d.lens[c++]=9
}for(;
280>c;
){d.lens[c++]=7
}for(;
288>c;
){d.lens[c++]=8
}for(al(aj,d.lens,0,288,ar,0,d.work,{bits:9}),c=0;
32>c;
){d.lens[c++]=5
}al(ai,d.lens,0,32,aq,0,d.work,{bits:5}),bl=!1
}d.lencode=ar,d.lenbits=9,d.distcode=aq,d.distbits=5
}function ax(h,g,m,l){var k,j=h.state;
return null===j.window&&(j.wsize=1<<j.wbits,j.wnext=0,j.whave=0,j.window=new ap.Buf8(j.wsize)),l>=j.wsize?(ap.arraySet(j.window,g,m-j.wsize,j.wsize,0),j.wnext=0,j.whave=j.wsize):(k=j.wsize-j.wnext,k>l&&(k=l),ap.arraySet(j.window,g,m-l,k,j.wnext),l-=k,l?(ap.arraySet(j.window,g,m-l,l,0),j.wnext=l,j.whave=j.wsize):(j.wnext+=k,j.wnext===j.wsize&&(j.wnext=0),j.whave<j.wsize&&(j.whave+=k))),0
}function aw(Q,P){var O,N,M,L,K,J,H,C,B,A,z,y,D,k,u,F,l,v,G,r,w,I,s,x,d=0,t=new ap.Buf8(4),E=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
if(!Q||!Q.state||!Q.output||!Q.input&&0!==Q.avail_in){return a8
}O=Q.state,O.mode===aQ&&(O.mode=aP),K=Q.next_out,M=Q.output,H=Q.avail_out,L=Q.next_in,N=Q.input,J=Q.avail_in,C=O.hold,B=O.bits,A=J,z=H,I=be;
Q:for(;
;
){switch(O.mode){case a2:if(0===O.wrap){O.mode=aP;
break
}for(;
16>B;
){if(0===J){break Q
}J--,C+=N[L++]<<B,B+=8
}if(2&O.wrap&&35615===C){O.check=0,t[0]=255&C,t[1]=C>>>8&255,O.check=an(O.check,t,2,0),C=0,B=0,O.mode=a1;
break
}if(O.flags=0,O.head&&(O.head.done=!1),!(1&O.wrap)||(((255&C)<<8)+(C>>8))%31){Q.msg="incorrect header check",O.mode=bn;
break
}if((15&C)!==a4){Q.msg="unknown compression method",O.mode=bn;
break
}if(C>>>=4,B-=4,w=(15&C)+8,0===O.wbits){O.wbits=w
}else{if(w>O.wbits){Q.msg="invalid window size",O.mode=bn;
break
}}O.dmax=1<<w,Q.adler=O.check=1,O.mode=512&C?aS:aQ,C=0,B=0;
break;
case a1:for(;
16>B;
){if(0===J){break Q
}J--,C+=N[L++]<<B,B+=8
}if(O.flags=C,(255&O.flags)!==a4){Q.msg="unknown compression method",O.mode=bn;
break
}if(57344&O.flags){Q.msg="unknown header flags set",O.mode=bn;
break
}O.head&&(O.head.text=C>>8&1),512&O.flags&&(t[0]=255&C,t[1]=C>>>8&255,O.check=an(O.check,t,2,0)),C=0,B=0,O.mode=a0;
case a0:for(;
32>B;
){if(0===J){break Q
}J--,C+=N[L++]<<B,B+=8
}O.head&&(O.head.time=C),512&O.flags&&(t[0]=255&C,t[1]=C>>>8&255,t[2]=C>>>16&255,t[3]=C>>>24&255,O.check=an(O.check,t,4,0)),C=0,B=0,O.mode=aZ;
case aZ:for(;
16>B;
){if(0===J){break Q
}J--,C+=N[L++]<<B,B+=8
}O.head&&(O.head.xflags=255&C,O.head.os=C>>8),512&O.flags&&(t[0]=255&C,t[1]=C>>>8&255,O.check=an(O.check,t,2,0)),C=0,B=0,O.mode=aY;
case aY:if(1024&O.flags){for(;
16>B;
){if(0===J){break Q
}J--,C+=N[L++]<<B,B+=8
}O.length=C,O.head&&(O.head.extra_len=C),512&O.flags&&(t[0]=255&C,t[1]=C>>>8&255,O.check=an(O.check,t,2,0)),C=0,B=0
}else{O.head&&(O.head.extra=null)
}O.mode=aX;
case aX:if(1024&O.flags&&(y=O.length,y>J&&(y=J),y&&(O.head&&(w=O.head.extra_len-O.length,O.head.extra||(O.head.extra=new Array(O.head.extra_len)),ap.arraySet(O.head.extra,N,L,y,w)),512&O.flags&&(O.check=an(O.check,N,y,L)),J-=y,L+=y,O.length-=y),O.length)){break Q
}O.length=0,O.mode=aV;
case aV:if(2048&O.flags){if(0===J){break Q
}y=0;
do{w=N[L+y++],O.head&&w&&O.length<65536&&(O.head.name+=String.fromCharCode(w))
}while(w&&J>y);
if(512&O.flags&&(O.check=an(O.check,N,y,L)),J-=y,L+=y,w){break Q
}}else{O.head&&(O.head.name=null)
}O.length=0,O.mode=aU;
case aU:if(4096&O.flags){if(0===J){break Q
}y=0;
do{w=N[L+y++],O.head&&w&&O.length<65536&&(O.head.comment+=String.fromCharCode(w))
}while(w&&J>y);
if(512&O.flags&&(O.check=an(O.check,N,y,L)),J-=y,L+=y,w){break Q
}}else{O.head&&(O.head.comment=null)
}O.mode=aT;
case aT:if(512&O.flags){for(;
16>B;
){if(0===J){break Q
}J--,C+=N[L++]<<B,B+=8
}if(C!==(65535&O.check)){Q.msg="header crc mismatch",O.mode=bn;
break
}C=0,B=0
}O.head&&(O.head.hcrc=O.flags>>9&1,O.head.done=!0),Q.adler=O.check=0,O.mode=aQ;
break;
case aS:for(;
32>B;
){if(0===J){break Q
}J--,C+=N[L++]<<B,B+=8
}Q.adler=O.check=aH(C),C=0,B=0,O.mode=aR;
case aR:if(0===O.havedict){return Q.next_out=K,Q.avail_out=H,Q.next_in=L,Q.avail_in=J,O.hold=C,O.bits=B,ba
}Q.adler=O.check=1,O.mode=aQ;
case aQ:if(P===bg||P===bf){break Q
}case aP:if(O.last){C>>>=7&B,B-=7&B,O.mode=aA;
break
}for(;
3>B;
){if(0===J){break Q
}J--,C+=N[L++]<<B,B+=8
}switch(O.last=1&C,C>>>=1,B-=1,3&C){case 0:O.mode=aO;
break;
case 1:if(ay(O),O.mode=aW,P===bf){C>>>=2,B-=2;
break Q
}break;
case 2:O.mode=bk;
break;
case 3:Q.msg="invalid block type",O.mode=bn
}C>>>=2,B-=2;
break;
case aO:for(C>>>=7&B,B-=7&B;
32>B;
){if(0===J){break Q
}J--,C+=N[L++]<<B,B+=8
}if((65535&C)!==(C>>>16^65535)){Q.msg="invalid stored block lengths",O.mode=bn;
break
}if(O.length=65535&C,C=0,B=0,O.mode=aN,P===bf){break Q
}case aN:O.mode=aM;
case aM:if(y=O.length){if(y>J&&(y=J),y>H&&(y=H),0===y){break Q
}ap.arraySet(M,N,L,y,K),J-=y,L+=y,H-=y,K+=y,O.length-=y;
break
}O.mode=aQ;
break;
case bk:for(;
14>B;
){if(0===J){break Q
}J--,C+=N[L++]<<B,B+=8
}if(O.nlen=(31&C)+257,C>>>=5,B-=5,O.ndist=(31&C)+1,C>>>=5,B-=5,O.ncode=(15&C)+4,C>>>=4,B-=4,O.nlen>286||O.ndist>30){Q.msg="too many length or distance symbols",O.mode=bn;
break
}O.have=0,O.mode=aL;
case aL:for(;
O.have<O.ncode;
){for(;
3>B;
){if(0===J){break Q
}J--,C+=N[L++]<<B,B+=8
}O.lens[E[O.have++]]=7&C,C>>>=3,B-=3
}for(;
O.have<19;
){O.lens[E[O.have++]]=0
}if(O.lencode=O.lendyn,O.lenbits=7,s={bits:O.lenbits},I=al(ak,O.lens,0,19,O.lencode,0,O.work,s),O.lenbits=s.bits,I){Q.msg="invalid code lengths set",O.mode=bn;
break
}O.have=0,O.mode=bh;
case bh:for(;
O.have<O.nlen+O.ndist;
){for(;
d=O.lencode[C&(1<<O.lenbits)-1],u=d>>>24,F=d>>>16&255,l=65535&d,!(B>=u);
){if(0===J){break Q
}J--,C+=N[L++]<<B,B+=8
}if(16>l){C>>>=u,B-=u,O.lens[O.have++]=l
}else{if(16===l){for(x=u+2;
x>B;
){if(0===J){break Q
}J--,C+=N[L++]<<B,B+=8
}if(C>>>=u,B-=u,0===O.have){Q.msg="invalid bit length repeat",O.mode=bn;
break
}w=O.lens[O.have-1],y=3+(3&C),C>>>=2,B-=2
}else{if(17===l){for(x=u+3;
x>B;
){if(0===J){break Q
}J--,C+=N[L++]<<B,B+=8
}C>>>=u,B-=u,w=0,y=3+(7&C),C>>>=3,B-=3
}else{for(x=u+7;
x>B;
){if(0===J){break Q
}J--,C+=N[L++]<<B,B+=8
}C>>>=u,B-=u,w=0,y=11+(127&C),C>>>=7,B-=7
}}if(O.have+y>O.nlen+O.ndist){Q.msg="invalid bit length repeat",O.mode=bn;
break
}for(;
y--;
){O.lens[O.have++]=w
}}}if(O.mode===bn){break
}if(0===O.lens[256]){Q.msg="invalid code -- missing end-of-block",O.mode=bn;
break
}if(O.lenbits=9,s={bits:O.lenbits},I=al(aj,O.lens,0,O.nlen,O.lencode,0,O.work,s),O.lenbits=s.bits,I){Q.msg="invalid literal/lengths set",O.mode=bn;
break
}if(O.distbits=6,O.distcode=O.distdyn,s={bits:O.distbits},I=al(ai,O.lens,O.nlen,O.ndist,O.distcode,0,O.work,s),O.distbits=s.bits,I){Q.msg="invalid distances set",O.mode=bn;
break
}if(O.mode=aW,P===bf){break Q
}case aW:O.mode=au;
case au:if(J>=6&&H>=258){Q.next_out=K,Q.avail_out=H,Q.next_in=L,Q.avail_in=J,O.hold=C,O.bits=B,am(Q,z),K=Q.next_out,M=Q.output,H=Q.avail_out,L=Q.next_in,N=Q.input,J=Q.avail_in,C=O.hold,B=O.bits,O.mode===aQ&&(O.back=-1);
break
}for(O.back=0;
d=O.lencode[C&(1<<O.lenbits)-1],u=d>>>24,F=d>>>16&255,l=65535&d,!(B>=u);
){if(0===J){break Q
}J--,C+=N[L++]<<B,B+=8
}if(F&&0===(240&F)){for(v=u,G=F,r=l;
d=O.lencode[r+((C&(1<<v+G)-1)>>v)],u=d>>>24,F=d>>>16&255,l=65535&d,!(B>=v+u);
){if(0===J){break Q
}J--,C+=N[L++]<<B,B+=8
}C>>>=v,B-=v,O.back+=v
}if(C>>>=u,B-=u,O.back+=u,O.length=l,0===F){O.mode=a3;
break
}if(32&F){O.back=-1,O.mode=aQ;
break
}if(64&F){Q.msg="invalid literal/length code",O.mode=bn;
break
}O.extra=15&F,O.mode=ae;
case ae:if(O.extra){for(x=O.extra;
x>B;
){if(0===J){break Q
}J--,C+=N[L++]<<B,B+=8
}O.length+=C&(1<<O.extra)-1,C>>>=O.extra,B-=O.extra,O.back+=O.extra
}O.was=O.length,O.mode=aa;
case aa:for(;
d=O.distcode[C&(1<<O.distbits)-1],u=d>>>24,F=d>>>16&255,l=65535&d,!(B>=u);
){if(0===J){break Q
}J--,C+=N[L++]<<B,B+=8
}if(0===(240&F)){for(v=u,G=F,r=l;
d=O.distcode[r+((C&(1<<v+G)-1)>>v)],u=d>>>24,F=d>>>16&255,l=65535&d,!(B>=v+u);
){if(0===J){break Q
}J--,C+=N[L++]<<B,B+=8
}C>>>=v,B-=v,O.back+=v
}if(C>>>=u,B-=u,O.back+=u,64&F){Q.msg="invalid distance code",O.mode=bn;
break
}O.offset=l,O.extra=15&F,O.mode=bm;
case bm:if(O.extra){for(x=O.extra;
x>B;
){if(0===J){break Q
}J--,C+=N[L++]<<B,B+=8
}O.offset+=C&(1<<O.extra)-1,C>>>=O.extra,B-=O.extra,O.back+=O.extra
}if(O.offset>O.dmax){Q.msg="invalid distance too far back",O.mode=bn;
break
}O.mode=bi;
case bi:if(0===H){break Q
}if(y=z-H,O.offset>y){if(y=O.offset-y,y>O.whave&&O.sane){Q.msg="invalid distance too far back",O.mode=bn;
break
}y>O.wnext?(y-=O.wnext,D=O.wsize-y):D=O.wnext-y,y>O.length&&(y=O.length),k=O.window
}else{k=M,D=K-O.offset,y=O.length
}y>H&&(y=H),H-=y,O.length-=y;
do{M[K++]=k[D++]
}while(--y);
0===O.length&&(O.mode=au);
break;
case a3:if(0===H){break Q
}M[K++]=O.length,H--,O.mode=au;
break;
case aA:if(O.wrap){for(;
32>B;
){if(0===J){break Q
}J--,C|=N[L++]<<B,B+=8
}if(z-=H,Q.total_out+=z,O.total+=z,z&&(Q.adler=O.check=O.flags?an(O.check,M,z,K-z):ao(O.check,M,z,K-z)),z=H,(O.flags?C:aH(C))!==O.check){Q.msg="incorrect data check",O.mode=bn;
break
}C=0,B=0
}O.mode=af;
case af:if(O.wrap&&O.flags){for(;
32>B;
){if(0===J){break Q
}J--,C+=N[L++]<<B,B+=8
}if(C!==(4294967295&O.total)){Q.msg="incorrect length check",O.mode=bn;
break
}C=0,B=0
}O.mode=ac;
case ac:I=bd;
break Q;
case bn:I=a7;
break Q;
case bj:return a6;
case a9:default:return a8
}}return Q.next_out=K,Q.avail_out=H,Q.next_in=L,Q.avail_in=J,O.hold=C,O.bits=B,(O.wsize||z!==Q.avail_out&&O.mode<bn&&(O.mode<aA||P!==ah))&&ax(Q,Q.output,Q.next_out,z-Q.avail_out)?(O.mode=bj,a6):(A-=Q.avail_in,z-=Q.avail_out,Q.total_in+=A,Q.total_out+=z,O.total+=z,O.wrap&&z&&(Q.adler=O.check=O.flags?an(O.check,M,z,Q.next_out-z):ao(O.check,M,z,Q.next_out-z)),Q.data_type=O.bits+(O.last?64:0)+(O.mode===aQ?128:0)+(O.mode===aW||O.mode===aN?256:0),(0===A&&0===z||P===ah)&&I===be&&(I=a5),I)
}function av(d){if(!d||!d.state){return a8
}var c=d.state;
return c.window&&(c.window=null),d.state=null,be
}function at(e,d){var f;
return e&&e.state?(f=e.state,0===(2&f.wrap)?a8:(f.head=d,d.done=!1,be)):a8
}var ar,aq,ap=aK("../utils/common"),ao=aK("./adler32"),an=aK("./crc32"),am=aK("./inffast"),al=aK("./inftrees"),ak=0,aj=1,ai=2,ah=4,bg=5,bf=6,be=0,bd=1,ba=2,a8=-2,a7=-3,a6=-4,a5=-5,a4=8,a2=1,a1=2,a0=3,aZ=4,aY=5,aX=6,aV=7,aU=8,aT=9,aS=10,aR=11,aQ=12,aP=13,aO=14,aN=15,aM=16,bk=17,aL=18,bh=19,aW=20,au=21,ae=22,aa=23,bm=24,bi=25,a3=26,aA=27,af=28,ac=29,bn=30,bj=31,a9=32,aG=852,ag=592,ad=15,bo=ad,bl=!0;
aI.inflateReset=aD,aI.inflateReset2=aC,aI.inflateResetKeep=aE,aI.inflateInit=az,aI.inflateInit2=aB,aI.inflate=aw,aI.inflateEnd=av,aI.inflateGetHeader=at,aI.inflateInfo="pako inflate (from Nodeca project)"
},{"../utils/common":27,"./adler32":29,"./crc32":31,"./inffast":34,"./inftrees":36}],36:[function(A,z){var y=A("../utils/common"),x=15,w=852,v=592,u=0,t=1,s=2,r=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],p=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],o=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],n=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];
z.exports=function(at,ar,aq,ap,ao,am,ak,ai){var ag,ae,ac,aa,Y,W,U,an,al,aj=ai.bits,ah=0,af=0,ad=0,ab=0,Z=0,X=0,V=0,m=0,l=0,k=0,j=null,h=0,g=new y.Buf16(x+1),f=new y.Buf16(x+1),e=null,d=0;
for(ah=0;
x>=ah;
ah++){g[ah]=0
}for(af=0;
ap>af;
af++){g[ar[aq+af]]++
}for(Z=aj,ab=x;
ab>=1&&0===g[ab];
ab--){}if(Z>ab&&(Z=ab),0===ab){return ao[am++]=20971520,ao[am++]=20971520,ai.bits=1,0
}for(ad=1;
ab>ad&&0===g[ad];
ad++){}for(ad>Z&&(Z=ad),m=1,ah=1;
x>=ah;
ah++){if(m<<=1,m-=g[ah],0>m){return -1
}}if(m>0&&(at===u||1!==ab)){return -1
}for(f[1]=0,ah=1;
x>ah;
ah++){f[ah+1]=f[ah]+g[ah]
}for(af=0;
ap>af;
af++){0!==ar[aq+af]&&(ak[f[ar[aq+af]]++]=af)
}if(at===u?(j=e=ak,W=19):at===t?(j=r,h-=257,e=p,d-=257,W=256):(j=o,e=n,W=-1),k=0,af=0,ah=ad,Y=am,X=Z,V=0,ac=-1,l=1<<Z,aa=l-1,at===t&&l>w||at===s&&l>v){return 1
}for(var c=0;
;
){c++,U=ah-V,ak[af]<W?(an=0,al=ak[af]):ak[af]>W?(an=e[d+ak[af]],al=j[h+ak[af]]):(an=96,al=0),ag=1<<ah-V,ae=1<<X,ad=ae;
do{ae-=ag,ao[Y+(k>>V)+ae]=U<<24|an<<16|al|0
}while(0!==ae);
for(ag=1<<ah-1;
k&ag;
){ag>>=1
}if(0!==ag?(k&=ag-1,k+=ag):k=0,af++,0===--g[ah]){if(ah===ab){break
}ah=ar[aq+ak[af]]
}if(ah>Z&&(k&aa)!==ac){for(0===V&&(V=Z),Y+=ad,X=ah-V,m=1<<X;
ab>X+V&&(m-=g[X+V],!(0>=m));
){X++,m<<=1
}if(l+=1<<X,at===t&&l>w||at===s&&l>v){return 1
}ac=k&aa,ao[ac]=Z<<24|X<<16|Y-am|0
}}return 0!==k&&(ao[Y+k]=ah-V<<24|64<<16|0),ai.bits=Z,0
}
},{"../utils/common":27}],37:[function(d,c){c.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}
},{}],38:[function(bj,bi,bh){function bg(d){for(var c=d.length;
--c>=0;
){d[c]=0
}}function bf(c){return 256>c?aI[c]:aI[256+(c>>>7)]
}function be(d,c){d.pending_buf[d.pending++]=255&c,d.pending_buf[d.pending++]=c>>>8&255
}function bd(e,d,f){e.bi_valid>aj-f?(e.bi_buf|=d<<e.bi_valid&65535,be(e,e.bi_buf),e.bi_buf=d>>aj-e.bi_valid,e.bi_valid+=f-aj):(e.bi_buf|=d<<e.bi_valid&65535,e.bi_valid+=f)
}function ba(e,d,f){bd(e,f[2*d],f[2*d+1])
}function a9(e,d){var f=0;
do{f|=1&e,e>>>=1,f<<=1
}while(--d>0);
return f>>>1
}function a8(c){16===c.bi_valid?(be(c,c.bi_buf),c.bi_buf=0,c.bi_valid=0):c.bi_valid>=8&&(c.pending_buf[c.pending++]=255&c.bi_buf,c.bi_buf>>=8,c.bi_valid-=8)
}function a7(G,F){var E,D,C,B,A,z,y=F.dyn_tree,x=F.max_code,w=F.stat_desc.static_tree,v=F.stat_desc.has_stree,u=F.stat_desc.extra_bits,t=F.stat_desc.extra_base,s=F.stat_desc.max_length,r=0;
for(B=0;
ak>=B;
B++){G.bl_count[B]=0
}for(y[2*G.heap[G.heap_max]+1]=0,E=G.heap_max+1;
al>E;
E++){D=G.heap[E],B=y[2*y[2*D+1]+1]+1,B>s&&(B=s,r++),y[2*D+1]=B,D>x||(G.bl_count[B]++,A=0,D>=t&&(A=u[D-t]),z=y[2*D],G.opt_len+=z*(B+A),v&&(G.static_len+=z*(w[2*D+1]+A)))
}if(0!==r){do{for(B=s-1;
0===G.bl_count[B];
){B--
}G.bl_count[B]--,G.bl_count[B+1]+=2,G.bl_count[s]--,r-=2
}while(r>0);
for(B=s;
0!==B;
B--){for(D=G.bl_count[B];
0!==D;
){C=G.heap[--E],C>x||(y[2*C+1]!==B&&(G.opt_len+=(B-y[2*C+1])*y[2*C],y[2*C+1]=B),D--)
}}}}function a6(k,j,r){var p,o,n=new Array(ak+1),m=0;
for(p=1;
ak>=p;
p++){n[p]=m=m+r[p-1]<<1
}for(o=0;
j>=o;
o++){var l=k[2*o+1];
0!==l&&(k[2*o]=a9(n[l]++,l))
}}function a5(){var h,g,m,l,k,j=new Array(ak+1);
for(m=0,l=0;
aq-1>l;
l++){for(aP[l]=m,h=0;
h<1<<bl[l];
h++){ac[m++]=l
}}for(ac[m-1]=l,k=0,l=0;
16>l;
l++){for(aJ[l]=k,h=0;
h<1<<aF[l];
h++){aI[k++]=l
}}for(k>>=7;
an>l;
l++){for(aJ[l]=k<<7,h=0;
h<1<<aF[l]-7;
h++){aI[256+k++]=l
}}for(g=0;
ak>=g;
g++){j[g]=0
}for(h=0;
143>=h;
){aa[2*h+1]=8,h++,j[8]++
}for(;
255>=h;
){aa[2*h+1]=9,h++,j[9]++
}for(;
279>=h;
){aa[2*h+1]=7,h++,j[7]++
}for(;
287>=h;
){aa[2*h+1]=8,h++,j[8]++
}for(a6(aa,ao+1,j),h=0;
an>h;
h++){aO[2*h+1]=5,aO[2*h]=a9(h,5)
}ad=new ag(aa,bl,ap+1,ao,ak),aR=new ag(aO,aF,0,an,ak),aK=new ag(new Array(0),bk,0,am,ai)
}function a4(d){var c;
for(c=0;
ao>c;
c++){d.dyn_ltree[2*c]=0
}for(c=0;
an>c;
c++){d.dyn_dtree[2*c]=0
}for(c=0;
am>c;
c++){d.bl_tree[2*c]=0
}d.dyn_ltree[2*ah]=1,d.opt_len=d.static_len=0,d.last_lit=d.matches=0
}function a3(c){c.bi_valid>8?be(c,c.bi_buf):c.bi_valid>0&&(c.pending_buf[c.pending++]=c.bi_buf),c.bi_buf=0,c.bi_valid=0
}function a2(f,e,h,g){a3(f),g&&(be(f,h),be(f,~h)),aB.arraySet(f.pending_buf,f.window,e,h,f.pending),f.pending+=h
}function a1(h,g,m,l){var k=2*g,j=2*m;
return h[k]<h[j]||h[k]===h[j]&&l[g]<=l[m]
}function a0(g,f,k){for(var j=g.heap[k],h=k<<1;
h<=g.heap_len&&(h<g.heap_len&&a1(f,g.heap[h+1],g.heap[h],g.depth)&&h++,!a1(f,j,g.heap[h],g.depth));
){g.heap[k]=g.heap[h],k=h,h<<=1
}g.heap[k]=j
}function aZ(g,e,p){var o,n,m,l,h=0;
if(0!==g.last_lit){do{o=g.pending_buf[g.d_buf+2*h]<<8|g.pending_buf[g.d_buf+2*h+1],n=g.pending_buf[g.l_buf+h],h++,0===o?ba(g,n,e):(m=ac[n],ba(g,m+ap+1,e),l=bl[m],0!==l&&(n-=aP[m],bd(g,n,l)),o--,m=bf(o),ba(g,m,p),l=aF[m],0!==l&&(o-=aJ[m],bd(g,o,l)))
}while(h<g.last_lit)
}ba(g,ah,e)
}function aY(u,t){var s,r,p,o=t.dyn_tree,n=t.stat_desc.static_tree,m=t.stat_desc.has_stree,l=t.stat_desc.elems,k=-1;
for(u.heap_len=0,u.heap_max=al,s=0;
l>s;
s++){0!==o[2*s]?(u.heap[++u.heap_len]=k=s,u.depth[s]=0):o[2*s+1]=0
}for(;
u.heap_len<2;
){p=u.heap[++u.heap_len]=2>k?++k:0,o[2*p]=1,u.depth[p]=0,u.opt_len--,m&&(u.static_len-=n[2*p+1])
}for(t.max_code=k,s=u.heap_len>>1;
s>=1;
s--){a0(u,o,s)
}p=l;
do{s=u.heap[1],u.heap[1]=u.heap[u.heap_len--],a0(u,o,1),r=u.heap[1],u.heap[--u.heap_max]=s,u.heap[--u.heap_max]=r,o[2*p]=o[2*s]+o[2*r],u.depth[p]=(u.depth[s]>=u.depth[r]?u.depth[s]:u.depth[r])+1,o[2*s+1]=o[2*r+1]=p,u.heap[1]=p++,a0(u,o,1)
}while(u.heap_len>=2);
u.heap[--u.heap_max]=u.heap[1],a7(u,t),a6(o,k,u.bl_count)
}function aX(u,t,s){var r,p,o=-1,n=t[1],m=0,l=7,k=4;
for(0===n&&(l=138,k=3),t[2*(s+1)+1]=65535,r=0;
s>=r;
r++){p=n,n=t[2*(r+1)+1],++m<l&&p===n||(k>m?u.bl_tree[2*p]+=m:0!==p?(p!==o&&u.bl_tree[2*p]++,u.bl_tree[2*af]++):10>=m?u.bl_tree[2*ae]++:u.bl_tree[2*aM]++,m=0,o=p,0===n?(l=138,k=3):p===n?(l=6,k=3):(l=7,k=4))
}}function aW(u,t,s){var r,p,o=-1,n=t[1],m=0,h=7,g=4;
for(0===n&&(h=138,g=3),r=0;
s>=r;
r++){if(p=n,n=t[2*(r+1)+1],!(++m<h&&p===n)){if(g>m){do{ba(u,p,u.bl_tree)
}while(0!==--m)
}else{0!==p?(p!==o&&(ba(u,p,u.bl_tree),m--),ba(u,af,u.bl_tree),bd(u,m-3,2)):10>=m?(ba(u,ae,u.bl_tree),bd(u,m-3,3)):(ba(u,aM,u.bl_tree),bd(u,m-11,7))
}m=0,o=p,0===n?(h=138,g=3):p===n?(h=6,g=3):(h=7,g=4)
}}}function aV(d){var c;
for(aX(d,d.dyn_ltree,d.l_desc.max_code),aX(d,d.dyn_dtree,d.d_desc.max_code),aY(d,d.bl_desc),c=am-1;
c>=3&&0===d.bl_tree[2*aN[c]+1];
c--){}return d.opt_len+=3*(c+1)+5+5+4,c
}function aT(g,f,k,j){var h;
for(bd(g,f-257,5),bd(g,k-1,5),bd(g,j-4,4),h=0;
j>h;
h++){bd(g,g.bl_tree[2*aN[h]+1],3)
}aW(g,g.dyn_ltree,f-1),aW(g,g.dyn_dtree,k-1)
}function aS(e){var d,f=4093624447;
for(d=0;
31>=d;
d++,f>>>=1){if(1&f&&0!==e.dyn_ltree[2*d]){return az
}}if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26]){return ay
}for(d=32;
ap>d;
d++){if(0!==e.dyn_ltree[2*d]){return ay
}}return az
}function aQ(c){aL||(a5(),aL=!0),c.l_desc=new aU(c.dyn_ltree,ad),c.d_desc=new aU(c.dyn_dtree,aR),c.bl_desc=new aU(c.bl_tree,aK),c.bi_buf=0,c.bi_valid=0,a4(c)
}function aG(f,e,h,g){bd(f,(aw<<1)+(g?1:0),3),a2(f,e,h,!0)
}function aE(c){bd(c,av<<1,3),ba(c,ah,aa),a8(c)
}function aD(j,g,o,n){var m,l,k=0;
j.level>0?(j.strm.data_type===ax&&(j.strm.data_type=aS(j)),aY(j,j.l_desc),aY(j,j.d_desc),k=aV(j),m=j.opt_len+3+7>>>3,l=j.static_len+3+7>>>3,m>=l&&(m=l)):m=l=o+5,m>=o+4&&-1!==g?aG(j,g,o,n):j.strategy===aA||l===m?(bd(j,(av<<1)+(n?1:0),3),aZ(j,aa,aO)):(bd(j,(au<<1)+(n?1:0),3),aT(j,j.l_desc.max_code+1,j.d_desc.max_code+1,k+1),aZ(j,j.dyn_ltree,j.dyn_dtree)),a4(j),n&&a3(j)
}function aC(e,d,f){return e.pending_buf[e.d_buf+2*e.last_lit]=d>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&d,e.pending_buf[e.l_buf+e.last_lit]=255&f,e.last_lit++,0===d?e.dyn_ltree[2*f]++:(e.matches++,d--,e.dyn_ltree[2*(ac[f]+ap+1)]++,e.dyn_dtree[2*bf(d)]++),e.last_lit===e.lit_bufsize-1
}var aB=bj("../utils/common"),aA=4,az=0,ay=1,ax=2,aw=0,av=1,au=2,at=3,ar=258,aq=29,ap=256,ao=ap+1+aq,an=30,am=19,al=2*ao+1,ak=15,aj=16,ai=7,ah=256,af=16,ae=17,aM=18,bl=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],aF=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],bk=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],aN=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],aH=512,aa=new Array(2*(ao+2));
bg(aa);
var aO=new Array(2*an);
bg(aO);
var aI=new Array(aH);
bg(aI);
var ac=new Array(ar-at+1);
bg(ac);
var aP=new Array(aq);
bg(aP);
var aJ=new Array(an);
bg(aJ);
var ad,aR,aK,ag=function(g,f,k,j,h){this.static_tree=g,this.extra_bits=f,this.extra_base=k,this.elems=j,this.max_length=h,this.has_stree=g&&g.length
},aU=function(d,c){this.dyn_tree=d,this.max_code=0,this.stat_desc=c
},aL=!1;
bh._tr_init=aQ,bh._tr_stored_block=aG,bh._tr_flush_block=aD,bh._tr_tally=aC,bh._tr_align=aE
},{"../utils/common":27}],39:[function(e,d){function f(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0
}d.exports=f
},{}]},{},[9])(9)
});
/*!
 DataTables 1.10.16
 ©2008-2017 SpryMedia Ltd - datatables.net/license
*/
(function(a){"function"===typeof define&&define.amd?define(["jquery"],function(b){return a(b,window,document)
}):"object"===typeof exports?module.exports=function(c,b){c||(c=window);
b||(b="undefined"!==typeof window?require("jquery"):require("jquery")(c));
return a(b,c,c.document)
}:a(jQuery,window,document)
})(function(aO,bt,bp,aK){function a2(k){var h,o,m={};
aO.each(k,function(r){if((h=r.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(h[1]+" ")){o=r.replace(h[0],h[2].toLowerCase()),m[o]=r,"o"===h[1]&&a2(k[r])
}});
k._hungarianMap=m
}function bm(k,h,o){k._hungarianMap||a2(k);
var m;
aO.each(h,function(r){m=k._hungarianMap[r];
if(m!==aK&&(o||h[m]===aK)){"o"===m.charAt(0)?(h[m]||(h[m]={}),aO.extend(!0,h[m],h[r]),bm(k[m],h[m],o)):h[m]=h[r]
}})
}function bn(k){var h=aJ.defaults.oLanguage,m=k.sZeroRecords;
!k.sEmptyTable&&(m&&"No data available in table"===h.sEmptyTable)&&bq(k,k,"sZeroRecords","sEmptyTable");
!k.sLoadingRecords&&(m&&"Loading..."===h.sLoadingRecords)&&bq(k,k,"sZeroRecords","sLoadingRecords");
k.sInfoThousands&&(k.sThousands=k.sInfoThousands);
(k=k.sDecimal)&&aH(k)
}function ai(k){bB(k,"ordering","bSort");
bB(k,"orderMulti","bSortMulti");
bB(k,"orderClasses","bSortClasses");
bB(k,"orderCellsTop","bSortCellsTop");
bB(k,"order","aaSorting");
bB(k,"orderFixed","aaSortingFixed");
bB(k,"paging","bPaginate");
bB(k,"pagingType","sPaginationType");
bB(k,"pageLength","iDisplayLength");
bB(k,"searching","bFilter");
"boolean"===typeof k.sScrollX&&(k.sScrollX=k.sScrollX?"100%":"");
"boolean"===typeof k.scrollX&&(k.scrollX=k.scrollX?"100%":"");
if(k=k.aoSearchCols){for(var h=0,m=k.length;
h<m;
h++){k[h]&&bm(aJ.models.oSearch,k[h])
}}}function g(k){bB(k,"orderable","bSortable");
bB(k,"orderData","aDataSort");
bB(k,"orderSequence","asSorting");
bB(k,"orderDataType","sortDataType");
var h=k.aDataSort;
"number"===typeof h&&!aO.isArray(h)&&(k.aDataSort=[h])
}function b5(k){if(!aJ.__browser){var h={};
aJ.__browser=h;
var r=aO("<div/>").css({position:"fixed",top:0,left:-1*aO(bt).scrollLeft(),height:1,width:1,overflow:"hidden"}).append(aO("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(aO("<div/>").css({width:"100%",height:10}))).appendTo("body"),o=r.children(),m=o.children();
h.barWidth=o[0].offsetWidth-o[0].clientWidth;
h.bScrollOversize=100===m[0].offsetWidth&&100!==o[0].clientWidth;
h.bScrollbarLeft=1!==Math.round(m.offset().left);
h.bBounding=r[0].getBoundingClientRect().width?!0:!1;
r.remove()
}aO.extend(k.oBrowser,aJ.__browser);
k.oScroll.iBarWidth=aJ.__browser.barWidth
}function bN(k,h,v,u,s,r){var o,m=!1;
v!==aK&&(o=v,m=!0);
for(;
u!==s;
){k.hasOwnProperty(u)&&(o=m?h(o,k[u],u,k):k[u],m=!0,u+=r)
}return o
}function aP(k,h){var o=aJ.defaults.column,m=k.aoColumns.length,o=aO.extend({},aJ.models.oColumn,o,{nTh:h?h:bp.createElement("th"),sTitle:o.sTitle?o.sTitle:h?h.innerHTML:"",aDataSort:o.aDataSort?o.aDataSort:[m],mData:o.mData?o.mData:m,idx:m});
k.aoColumns.push(o);
o=k.aoPreSearchCols;
o[m]=aO.extend({},aJ.models.oSearch,o[m]);
am(k,m,aO(h).data())
}function am(w,v,u){var v=w.aoColumns[v],s=w.oClasses,r=aO(v.nTh);
if(!v.sWidthOrig){v.sWidthOrig=r.attr("width")||null;
var o=(r.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);
o&&(v.sWidthOrig=o[1])
}u!==aK&&null!==u&&(g(u),bm(aJ.defaults.column,u),u.mDataProp!==aK&&!u.mData&&(u.mData=u.mDataProp),u.sType&&(v._sManualType=u.sType),u.className&&!u.sClass&&(u.sClass=u.className),u.sClass&&r.addClass(u.sClass),aO.extend(v,u),bq(v,u,"sWidth","sWidthOrig"),u.iDataSort!==aK&&(v.aDataSort=[u.iDataSort]),bq(v,u,"aDataSort"));
var m=v.mData,h=a9(m),k=v.mRender?a9(v.mRender):null,u=function(x){return"string"===typeof x&&-1!==x.indexOf("@")
};
v._bAttrSrc=aO.isPlainObject(m)&&(u(m.sort)||u(m.type)||u(m.filter));
v._setter=null;
v.fnGetData=function(y,x,A){var z=h(y,x,aK,A);
return k&&x?k(z,x,y,A):z
};
v.fnSetData=function(y,x,z){return a7(m)(y,x,z)
};
"number"!==typeof m&&(w._rowReadObject=!0);
w.oFeatures.bSort||(v.bSortable=!1,r.addClass(s.sSortableNone));
w=-1!==aO.inArray("asc",v.asSorting);
u=-1!==aO.inArray("desc",v.asSorting);
!v.bSortable||!w&&!u?(v.sSortingClass=s.sSortableNone,v.sSortingClassJUI=""):w&&!u?(v.sSortingClass=s.sSortableAsc,v.sSortingClassJUI=s.sSortJUIAscAllowed):!w&&u?(v.sSortingClass=s.sSortableDesc,v.sSortingClassJUI=s.sSortJUIDescAllowed):(v.sSortingClass=s.sSortable,v.sSortingClassJUI=s.sSortJUI)
}function a1(k){if(!1!==k.oFeatures.bAutoWidth){var h=k.aoColumns;
an(k);
for(var o=0,m=h.length;
o<m;
o++){h[o].nTh.style.width=h[o].sWidth
}}h=k.oScroll;
(""!==h.sY||""!==h.sX)&&p(k);
aF(k,null,"column-sizing",[k])
}function aZ(k,h){var m=cd(k,"bVisible");
return"number"===typeof m[h]?m[h]:null
}function bV(k,h){var m=cd(k,"bVisible"),m=aO.inArray(h,m);
return -1!==m?m:null
}function bM(k){var h=0;
aO.each(k.aoColumns,function(m,o){o.bVisible&&"none"!==aO(o.nTh).css("display")&&h++
});
return h
}function cd(k,h){var m=[];
aO.map(k.aoColumns,function(o,r){o[h]&&m.push(r)
});
return m
}function t(A){var z=A.aoColumns,y=A.aoData,x=aJ.ext.type.detect,w,v,u,o,r,s,m,k,B;
w=0;
for(v=z.length;
w<v;
w++){if(m=z[w],B=[],!m.sType&&m._sManualType){m.sType=m._sManualType
}else{if(!m.sType){u=0;
for(o=x.length;
u<o;
u++){r=0;
for(s=y.length;
r<s;
r++){B[r]===aK&&(B[r]=bA(A,r,w,"type"));
k=x[u](B[r],A);
if(!k&&u!==x.length-1){break
}if("html"===k){break
}}if(k){m.sType=k;
break
}}m.sType||(m.sType="string")
}}}}function bi(z,y,x,w){var v,u,s,o,r,k,m=z.aoColumns;
if(y){for(v=y.length-1;
0<=v;
v--){k=y[v];
var h=k.targets!==aK?k.targets:k.aTargets;
aO.isArray(h)||(h=[h]);
u=0;
for(s=h.length;
u<s;
u++){if("number"===typeof h[u]&&0<=h[u]){for(;
m.length<=h[u];
){aP(z)
}w(h[u],k)
}else{if("number"===typeof h[u]&&0>h[u]){w(m.length+h[u],k)
}else{if("string"===typeof h[u]){o=0;
for(r=m.length;
o<r;
o++){("_all"==h[u]||aO(m[o].nTh).hasClass(h[u]))&&w(o,k)
}}}}}}}if(x){v=0;
for(z=x.length;
v<z;
v++){w(v,x[v])
}}}function bg(w,v,u,s){var r=w.aoData.length,o=aO.extend(!0,{},aJ.models.oRow,{src:u?"dom":"data",idx:r});
o._aData=v;
w.aoData.push(o);
for(var m=w.aoColumns,h=0,k=m.length;
h<k;
h++){m[h].sType=null
}w.aiDisplayMaster.push(r);
v=w.rowIdFn(v);
v!==aK&&(w.aIds[v]=o);
(u||!w.oFeatures.bDeferRender)&&ce(w,r,u,s);
return r
}function bT(k,h){var m;
h instanceof aO||(h=aO(h));
return h.map(function(o,r){m=bU(k,r);
return bg(k,m.data,r,m.cells)
})
}function bA(w,v,u,s){var r=w.iDraw,o=w.aoColumns[u],m=w.aoData[v]._aData,h=o.sDefaultContent,k=o.fnGetData(m,s,{settings:w,row:v,col:u});
if(k===aK){return w.iDrawError!=r&&null===h&&(bk(w,0,"Requested unknown parameter "+("function"==typeof o.mData?"{function}":"'"+o.mData+"'")+" for row "+v+", column "+u,4),w.iDrawError=r),h
}if((k===m||null===k)&&null!==h&&s!==aK){k=h
}else{if("function"===typeof k){return k.call(m)
}}return null===k&&"display"==s?"":k
}function aL(k,h,o,m){k.aoColumns[o].fnSetData(k.aoData[h]._aData,m,{settings:k,row:h,col:o})
}function bx(h){return aO.map(h.match(/(\\.|[^\.])+/g)||[""],function(k){return k.replace(/\\\./g,".")
})
}function a9(k){if(aO.isPlainObject(k)){var h={};
aO.each(k,function(o,r){r&&(h[o]=a9(r))
});
return function(o,v,u,s){var r=h[v]||h._;
return r!==aK?r(o,v,u,s):o
}
}if(null===k){return function(o){return o
}
}if("function"===typeof k){return function(o,u,s,r){return k(o,u,s,r)
}
}if("string"===typeof k&&(-1!==k.indexOf(".")||-1!==k.indexOf("[")||-1!==k.indexOf("("))){var m=function(r,o,w){var v,s;
if(""!==w){s=bx(w);
for(var u=0,x=s.length;
u<x;
u++){w=s[u].match(be);
v=s[u].match(a5);
if(w){s[u]=s[u].replace(be,"");
""!==s[u]&&(r=r[s[u]]);
v=[];
s.splice(0,u+1);
s=s.join(".");
if(aO.isArray(r)){u=0;
for(x=r.length;
u<x;
u++){v.push(m(r[u],o,s))
}}r=w[0].substring(1,w[0].length-1);
r=""===r?v:v.join(r);
break
}else{if(v){s[u]=s[u].replace(a5,"");
r=r[s[u]]();
continue
}}if(null===r||r[s[u]]===aK){return aK
}r=r[s[u]]
}}return r
};
return function(o,r){return m(o,r,k)
}
}return function(o){return o[k]
}
}function a7(k){if(aO.isPlainObject(k)){return a7(k._)
}if(null===k){return function(){}
}if("function"===typeof k){return function(m,r,o){k(m,"set",r,o)
}
}if("string"===typeof k&&(-1!==k.indexOf(".")||-1!==k.indexOf("[")||-1!==k.indexOf("("))){var h=function(m,w,v){var v=bx(v),u;
u=v[v.length-1];
for(var s,o,r=0,x=v.length-1;
r<x;
r++){s=v[r].match(be);
o=v[r].match(a5);
if(s){v[r]=v[r].replace(be,"");
m[v[r]]=[];
u=v.slice();
u.splice(0,r+1);
s=u.join(".");
if(aO.isArray(w)){o=0;
for(x=w.length;
o<x;
o++){u={},h(u,w[o],s),m[v[r]].push(u)
}}else{m[v[r]]=w
}return
}o&&(v[r]=v[r].replace(a5,""),m=m[v[r]](w));
if(null===m[v[r]]||m[v[r]]===aK){m[v[r]]={}
}m=m[v[r]]
}if(u.match(a5)){m[u.replace(a5,"")](w)
}else{m[u.replace(be,"")]=w
}};
return function(o,m){return h(o,m,k)
}
}return function(m,o){m[k]=o
}
}function aT(h){return bv(h.aoData,"_aData")
}function bu(h){h.aoData.length=0;
h.aiDisplayMaster.length=0;
h.aiDisplay.length=0;
h.aIds={}
}function aS(k,h,s){for(var r=-1,o=0,m=k.length;
o<m;
o++){k[o]==h?r=o:k[o]>h&&k[o]--
}-1!=r&&s===aK&&k.splice(r,1)
}function aI(k,h,v,u){var s=k.aoData[h],r,o=function(x,w){for(;
x.childNodes.length;
){x.removeChild(x.firstChild)
}x.innerHTML=bA(k,h,w,"display")
};
if("dom"===v||(!v||"auto"===v)&&"dom"===s.src){s._aData=bU(k,s,u,u===aK?aK:s._aData).data
}else{var m=s.anCells;
if(m){if(u!==aK){o(m[u],u)
}else{v=0;
for(r=m.length;
v<r;
v++){o(m[v],v)
}}}}s._aSortData=null;
s._aFilterData=null;
o=k.aoColumns;
if(u!==aK){o[u].sType=null
}else{v=0;
for(r=o.length;
v<r;
v++){o[v].sType=null
}aq(k,s)
}}function bU(B,A,z,y){var x=[],w=A.firstChild,v,s,u=0,k,r=B.aoColumns,h=B._rowReadObject,y=y!==aK?y:h?{}:[],C=function(D,m){if("string"===typeof D){var E=D.indexOf("@");
-1!==E&&(E=D.substring(E+1),a7(D)(y,m.getAttribute(E)))
}},o=function(m){if(z===aK||z===u){s=r[u],k=aO.trim(m.innerHTML),s&&s._bAttrSrc?(a7(s.mData._)(y,k),C(s.mData.sort,m),C(s.mData.type,m),C(s.mData.filter,m)):h?(s._setter||(s._setter=a7(s.mData)),s._setter(y,k)):y[u]=k
}u++
};
if(w){for(;
w;
){v=w.nodeName.toUpperCase();
if("TD"==v||"TH"==v){o(w),x.push(w)
}w=w.nextSibling
}}else{x=A.anCells;
w=0;
for(v=x.length;
w<v;
w++){o(x[w])
}}if(A=A.firstChild?A:A.nTr){(A=A.getAttribute("id"))&&a7(B.rowId)(y,A)
}return{data:y,cells:x}
}function ce(z,y,x,w){var v=z.aoData[y],u=v._aData,s=[],o,r,k,m,h;
if(null===v.nTr){o=x||bp.createElement("tr");
v.nTr=o;
v.anCells=s;
o._DT_RowIndex=y;
aq(z,v);
m=0;
for(h=z.aoColumns.length;
m<h;
m++){k=z.aoColumns[m];
r=x?w[m]:bp.createElement(k.sCellType);
r._DT_CellIndex={row:y,column:m};
s.push(r);
if((!x||k.mRender||k.mData!==m)&&(!aO.isPlainObject(k.mData)||k.mData._!==m+".display")){r.innerHTML=bA(z,y,m,"display")
}k.sClass&&(r.className+=" "+k.sClass);
k.bVisible&&!x?o.appendChild(r):!k.bVisible&&x&&r.parentNode.removeChild(r);
k.fnCreatedCell&&k.fnCreatedCell.call(z.oInstance,r,bA(z,y,m),u,y,m)
}aF(z,"aoRowCreatedCallback",null,[o,u,y])
}v.nTr.setAttribute("role","row")
}function aq(k,h){var r=h.nTr,o=h._aData;
if(r){var m=k.rowIdFn(o);
m&&(r.id=m);
o.DT_RowClass&&(m=o.DT_RowClass.split(" "),h.__rowc=h.__rowc?O(h.__rowc.concat(m)):m,aO(r).removeClass(h.__rowc.join(" ")).addClass(o.DT_RowClass));
o.DT_RowAttr&&aO(r).attr(o.DT_RowAttr);
o.DT_RowData&&aO(r).data(o.DT_RowData)
}}function ak(y){var x,w,v,u,s,r=y.nTHead,m=y.nTFoot,o=0===aO("th, td",r).length,h=y.oClasses,k=y.aoColumns;
o&&(u=aO("<tr/>").appendTo(r));
x=0;
for(w=k.length;
x<w;
x++){s=k[x],v=aO(s.nTh).addClass(s.sClass),o&&v.appendTo(u),y.oFeatures.bSort&&(v.addClass(s.sSortingClass),!1!==s.bSortable&&(v.attr("tabindex",y.iTabIndex).attr("aria-controls",y.sTableId),T(y,s.nTh,x))),s.sTitle!=v[0].innerHTML&&v.html(s.sTitle),ci(y,"header")(y,v,s,h)
}o&&aj(y.aoHeader,r);
aO(r).find(">tr").attr("role","row");
aO(r).find(">tr>th, >tr>td").addClass(h.sHeaderTH);
aO(m).find(">tr>th, >tr>td").addClass(h.sFooterTH);
if(null!==m){y=y.aoFooter[0];
x=0;
for(w=y.length;
x<w;
x++){s=k[x],s.nTf=y[x].cell,s.sClass&&aO(s.nTf).addClass(s.sClass)
}}}function j(x,w,v){var u,s,r,o=[],k=[],m=x.aoColumns.length,h;
if(w){v===aK&&(v=!1);
u=0;
for(s=w.length;
u<s;
u++){o[u]=w[u].slice();
o[u].nTr=w[u].nTr;
for(r=m-1;
0<=r;
r--){!x.aoColumns[r].bVisible&&!v&&o[u].splice(r,1)
}k.push([])
}u=0;
for(s=o.length;
u<s;
u++){if(x=o[u].nTr){for(;
r=x.firstChild;
){x.removeChild(r)
}}r=0;
for(w=o[u].length;
r<w;
r++){if(h=m=1,k[u][r]===aK){x.appendChild(o[u][r].cell);
for(k[u][r]=1;
o[u+m]!==aK&&o[u][r].cell==o[u+m][r].cell;
){k[u+m][r]=1,m++
}for(;
o[u][r+h]!==aK&&o[u][r].cell==o[u][r+h].cell;
){for(v=0;
v<m;
v++){k[u+v][r+h]=1
}h++
}aO(o[u][r].cell).attr("rowspan",m).attr("colspan",h)
}}}}}function bf(z){var y=aF(z,"aoPreDrawCallback","preDraw",[z]);
if(-1!==aO.inArray(!1,y)){bz(z,!1)
}else{var y=[],x=0,w=z.asStripeClasses,v=w.length,u=z.oLanguage,s=z.iInitDisplayStart,o="ssp"==ay(z),r=z.aiDisplay;
z.bDrawing=!0;
s!==aK&&-1!==s&&(z._iDisplayStart=o?s:s>=z.fnRecordsDisplay()?0:s,z.iInitDisplayStart=-1);
var s=z._iDisplayStart,k=z.fnDisplayEnd();
if(z.bDeferLoading){z.bDeferLoading=!1,z.iDraw++,bz(z,!1)
}else{if(o){if(!z.bDestroying&&!l(z)){return
}}else{z.iDraw++
}}if(0!==r.length){u=o?z.aoData.length:k;
for(o=o?0:s;
o<u;
o++){var m=r[o],h=z.aoData[m];
null===h.nTr&&ce(z,m);
m=h.nTr;
if(0!==v){var A=w[x%v];
h._sRowStripe!=A&&(aO(m).removeClass(h._sRowStripe).addClass(A),h._sRowStripe=A)
}aF(z,"aoRowCallback",null,[m,h._aData,x,o]);
y.push(m);
x++
}}else{x=u.sZeroRecords,1==z.iDraw&&"ajax"==ay(z)?x=u.sLoadingRecords:u.sEmptyTable&&0===z.fnRecordsTotal()&&(x=u.sEmptyTable),y[0]=aO("<tr/>",{"class":v?w[0]:""}).append(aO("<td />",{valign:"top",colSpan:bM(z),"class":z.oClasses.sRowEmpty}).html(x))[0]
}aF(z,"aoHeaderCallback","header",[aO(z.nTHead).children("tr")[0],aT(z),s,k,r]);
aF(z,"aoFooterCallback","footer",[aO(z.nTFoot).children("tr")[0],aT(z),s,k,r]);
w=aO(z.nTBody);
w.children().detach();
w.append(aO(y));
aF(z,"aoDrawCallback","draw",[z]);
z.bSorted=!1;
z.bFiltered=!1;
z.bDrawing=!1
}}function a6(k,h){var o=k.oFeatures,m=o.bFilter;
o.bSort&&b9(k);
m?b7(k,k.oPreviousSearch):k.aiDisplay=k.aiDisplayMaster.slice();
!0!==h&&(k._iDisplayStart=0);
k._drawHold=h;
bf(k);
k._drawHold=!1
}function bR(B){var A=B.oClasses,z=aO(B.nTable),z=aO("<div/>").insertBefore(z),y=B.oFeatures,x=aO("<div/>",{id:B.sTableId+"_wrapper","class":A.sWrapper+(B.nTFoot?"":" "+A.sNoFooter)});
B.nHolding=z[0];
B.nTableWrapper=x[0];
B.nTableReinsertBefore=B.nTable.nextSibling;
for(var w=B.sDom.split(""),v,s,u,m,o,h,r=0;
r<w.length;
r++){v=null;
s=w[r];
if("<"==s){u=aO("<div/>")[0];
m=w[r+1];
if("'"==m||'"'==m){o="";
for(h=2;
w[r+h]!=m;
){o+=w[r+h],h++
}"H"==o?o=A.sJUIHeader:"F"==o&&(o=A.sJUIFooter);
-1!=o.indexOf(".")?(m=o.split("."),u.id=m[0].substr(1,m[0].length-1),u.className=m[1]):"#"==o.charAt(0)?u.id=o.substr(1,o.length-1):u.className=o;
r+=h
}x.append(u);
x=aO(u)
}else{if(">"==s){x=x.parent()
}else{if("l"==s&&y.bPaginate&&y.bLengthChange){v=br(B)
}else{if("f"==s&&y.bFilter){v=aQ(B)
}else{if("r"==s&&y.bProcessing){v=ao(B)
}else{if("t"==s){v=K(B)
}else{if("i"==s&&y.bInfo){v=cf(B)
}else{if("p"==s&&y.bPaginate){v=bW(B)
}else{if(0!==aJ.ext.feature.length){u=aJ.ext.feature;
h=0;
for(m=u.length;
h<m;
h++){if(s==u[h].cFeature){v=u[h].fnInit(B);
break
}}}}}}}}}}}v&&(u=B.aanFeatures,u[s]||(u[s]=[]),u[s].push(v),x.append(v))
}z.replaceWith(x);
B.nHolding=null
}function aj(B,A){var z=aO(A).children("tr"),y,x,w,v,s,u,m,o,h,r;
B.splice(0,B.length);
w=0;
for(u=z.length;
w<u;
w++){B.push([])
}w=0;
for(u=z.length;
w<u;
w++){y=z[w];
for(x=y.firstChild;
x;
){if("TD"==x.nodeName.toUpperCase()||"TH"==x.nodeName.toUpperCase()){o=1*x.getAttribute("colspan");
h=1*x.getAttribute("rowspan");
o=!o||0===o||1===o?1:o;
h=!h||0===h||1===h?1:h;
v=0;
for(s=B[w];
s[v];
){v++
}m=v;
r=1===o?!0:!1;
for(s=0;
s<o;
s++){for(v=0;
v<h;
v++){B[w+v][m+s]={cell:x,unique:r},B[w+v].nTr=y
}}}x=x.nextSibling
}}}function ch(k,h,u){var s=[];
u||(u=k.aoHeader,h&&(u=[],aj(u,h)));
for(var h=0,r=u.length;
h<r;
h++){for(var o=0,m=u[h].length;
o<m;
o++){if(u[h][o].unique&&(!s[o]||!k.bSortCellsTop)){s[o]=u[h][o].cell
}}}return s
}function bY(x,w,v){aF(x,"aoServerParams","serverParams",[w]);
if(w&&aO.isArray(w)){var u={},s=/(.*?)\[\]$/;
aO.each(w,function(z,y){var A=y.name.match(s);
A?(A=A[0],u[A]||(u[A]=[]),u[A].push(y.value)):u[y.name]=y.value
});
w=u
}var r,o=x.ajax,k=x.oInstance,m=function(y){aF(x,null,"xhr",[x,y,x.jqXHR]);
v(y)
};
if(aO.isPlainObject(o)&&o.data){r=o.data;
var h=aO.isFunction(r)?r(w,x):r,w=aO.isFunction(r)&&h?h:aO.extend(!0,w,h);
delete o.data
}h={data:w,success:function(y){var z=y.error||y.sError;
z&&bk(x,0,z);
x.json=y;
m(y)
},dataType:"json",cache:!1,type:x.sServerMethod,error:function(y,A){var z=aF(x,null,"xhr",[x,null,x.jqXHR]);
-1===aO.inArray(!0,z)&&("parsererror"==A?bk(x,0,"Invalid JSON response",1):4===y.readyState&&bk(x,0,"Ajax error",7));
bz(x,!1)
}};
x.oAjaxData=w;
aF(x,null,"preXhr",[x,w]);
x.fnServerData?x.fnServerData.call(k,x.sAjaxSource,aO.map(w,function(z,y){return{name:y,value:z}
}),m,x):x.sAjaxSource||"string"===typeof o?x.jqXHR=aO.ajax(aO.extend(h,{url:o||x.sAjaxSource})):aO.isFunction(o)?x.jqXHR=o.call(k,w,m,x):(x.jqXHR=aO.ajax(aO.extend(h,o)),o.data=r)
}function l(h){return h.bAjaxDataGet?(h.iDraw++,bz(h,!0),bY(h,bC(h),function(k){aU(h,k)
}),!1):!0
}function bC(A){var z=A.aoColumns,y=z.length,x=A.oFeatures,w=A.oPreviousSearch,v=A.aoPreSearchCols,u,r=[],s,h,m,o=a4(A);
u=A._iDisplayStart;
s=!1!==x.bPaginate?A._iDisplayLength:-1;
var C=function(D,k){r.push({name:D,value:k})
};
C("sEcho",A.iDraw);
C("iColumns",y);
C("sColumns",bv(z,"sName").join(","));
C("iDisplayStart",u);
C("iDisplayLength",s);
var B={draw:A.iDraw,columns:[],order:[],start:u,length:s,search:{value:w.sSearch,regex:w.bRegex}};
for(u=0;
u<y;
u++){h=z[u],m=v[u],s="function"==typeof h.mData?"function":h.mData,B.columns.push({data:s,name:h.sName,searchable:h.bSearchable,orderable:h.bSortable,search:{value:m.sSearch,regex:m.bRegex}}),C("mDataProp_"+u,s),x.bFilter&&(C("sSearch_"+u,m.sSearch),C("bRegex_"+u,m.bRegex),C("bSearchable_"+u,h.bSearchable)),x.bSort&&C("bSortable_"+u,h.bSortable)
}x.bFilter&&(C("sSearch",w.sSearch),C("bRegex",w.bRegex));
x.bSort&&(aO.each(o,function(D,k){B.order.push({column:k.col,dir:k.dir});
C("iSortCol_"+D,k.col);
C("sSortDir_"+D,k.dir)
}),C("iSortingCols",o.length));
z=aJ.ext.legacy.ajax;
return null===z?A.sAjaxSource?r:B:z?r:B
}function aU(k,h){var s=bE(k,h),r=h.sEcho!==aK?h.sEcho:h.draw,o=h.iTotalRecords!==aK?h.iTotalRecords:h.recordsTotal,m=h.iTotalDisplayRecords!==aK?h.iTotalDisplayRecords:h.recordsFiltered;
if(r){if(1*r<k.iDraw){return
}k.iDraw=1*r
}bu(k);
k._iRecordsTotal=parseInt(o,10);
k._iRecordsDisplay=parseInt(m,10);
r=0;
for(o=s.length;
r<o;
r++){bg(k,s[r])
}k.aiDisplay=k.aiDisplayMaster.slice();
k.bAjaxDataGet=!1;
bf(k);
k._bInitComplete||aW(k,h);
k.bAjaxDataGet=!0;
bz(k,!1)
}function bE(k,h){var m=aO.isPlainObject(k.ajax)&&k.ajax.dataSrc!==aK?k.ajax.dataSrc:k.sAjaxDataProp;
return"data"===m?h.aaData||h[m]:""!==m?a9(m)(h):h
}function aQ(w){var v=w.oClasses,u=w.sTableId,s=w.oLanguage,r=w.oPreviousSearch,o=w.aanFeatures,m='<input type="search" class="'+v.sFilterInput+'"/>',h=s.sSearch,h=h.match(/_INPUT_/)?h.replace("_INPUT_",m):h+m,v=aO("<div/>",{id:!o.f?u+"_filter":null,"class":v.sFilter}).append(aO("<label/>").append(h)),o=function(){var x=!this.value?"":this.value;
x!=r.sSearch&&(b7(w,{sSearch:x,bRegex:r.bRegex,bSmart:r.bSmart,bCaseInsensitive:r.bCaseInsensitive}),w._iDisplayStart=0,bf(w))
},m=null!==w.searchDelay?w.searchDelay:"ssp"===ay(w)?400:0,k=aO("input",v).val(r.sSearch).attr("placeholder",s.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",m?bZ(o,m):o).on("keypress.DT",function(x){if(13==x.keyCode){return !1
}}).attr("aria-controls",u);
aO(w.nTable).on("search.dt.DT",function(x,z){if(w===z){try{k[0]!==bp.activeElement&&k.val(r.sSearch)
}catch(y){}}});
return v[0]
}function b7(k,h,s){var r=k.oPreviousSearch,o=k.aoPreSearchCols,m=function(u){r.sSearch=u.sSearch;
r.bRegex=u.bRegex;
r.bSmart=u.bSmart;
r.bCaseInsensitive=u.bCaseInsensitive
};
t(k);
if("ssp"!=ay(k)){ar(k,h.sSearch,s,h.bEscapeRegex!==aK?!h.bEscapeRegex:h.bRegex,h.bSmart,h.bCaseInsensitive);
m(h);
for(h=0;
h<o.length;
h++){ad(k,o[h].sSearch,h,o[h].bEscapeRegex!==aK?!o[h].bEscapeRegex:o[h].bRegex,o[h].bSmart,o[h].bCaseInsensitive)
}a(k)
}else{m(h)
}k.bFiltered=!0;
aF(k,null,"search",[k])
}function a(x){for(var w=aJ.ext.search,v=x.aiDisplay,u,s,r=0,o=w.length;
r<o;
r++){for(var k=[],m=0,h=v.length;
m<h;
m++){s=v[m],u=x.aoData[s],w[r](x,u._aFilterData,s,u._aData,m)&&k.push(s)
}v.length=0;
aO.merge(v,k)
}}function ad(k,h,v,u,s,r){if(""!==h){for(var o=[],m=k.aiDisplay,u=bF(h,u,s,r),s=0;
s<m.length;
s++){h=k.aoData[m[s]]._aFilterData[v],u.test(h)&&o.push(m[s])
}k.aiDisplay=o
}}function ar(k,h,v,u,s,r){var u=bF(h,u,s,r),r=k.oPreviousSearch.sSearch,o=k.aiDisplayMaster,m,s=[];
0!==aJ.ext.search.length&&(v=!0);
m=b0(k);
if(0>=h.length){k.aiDisplay=o.slice()
}else{if(m||v||r.length>h.length||0!==h.indexOf(r)||k.bSorted){k.aiDisplay=o.slice()
}h=k.aiDisplay;
for(v=0;
v<h.length;
v++){u.test(k.aoData[h[v]]._sFilterRow)&&s.push(h[v])
}k.aiDisplay=s
}}function bF(k,h,o,m){k=h?k:aX(k);
o&&(k="^(?=.*?"+aO.map(k.match(/"[^"]+"|[^ ]+/g)||[""],function(s){if('"'===s.charAt(0)){var r=s.match(/^"(.*)"$/),s=r?r[1]:s
}return s.replace('"',"")
}).join(")(?=.*?")+").*$");
return RegExp(k,m?"i":"")
}function b0(z){var y=z.aoColumns,x,w,v,u,s,m,o,r,k=aJ.ext.type.search;
x=!1;
w=0;
for(u=z.aoData.length;
w<u;
w++){if(r=z.aoData[w],!r._aFilterData){m=[];
v=0;
for(s=y.length;
v<s;
v++){x=y[v],x.bSearchable?(o=bA(z,w,v,"filter"),k[x.sType]&&(o=k[x.sType](o)),null===o&&(o=""),"string"!==typeof o&&o.toString&&(o=o.toString())):o="",o.indexOf&&-1!==o.indexOf("&")&&(at.innerHTML=o,o=ax?at.textContent:at.innerText),o.replace&&(o=o.replace(/[\r\n]/g,"")),m.push(o)
}r._aFilterData=m;
r._sFilterRow=m.join("  ");
x=!0
}}return x
}function bG(h){return{search:h.sSearch,smart:h.bSmart,regex:h.bRegex,caseInsensitive:h.bCaseInsensitive}
}function b6(h){return{sSearch:h.search,bSmart:h.smart,bRegex:h.regex,bCaseInsensitive:h.caseInsensitive}
}function cf(k){var h=k.sTableId,o=k.aanFeatures.i,m=aO("<div/>",{"class":k.oClasses.sInfo,id:!o?h+"_info":null});
o||(k.aoDrawCallback.push({fn:bO,sName:"information"}),m.attr("role","status").attr("aria-live","polite"),aO(k.nTable).attr("aria-describedby",h+"_info"));
return m[0]
}function bO(k){var h=k.aanFeatures.i;
if(0!==h.length){var v=k.oLanguage,u=k._iDisplayStart+1,s=k.fnDisplayEnd(),r=k.fnRecordsTotal(),o=k.fnRecordsDisplay(),m=o?v.sInfo:v.sInfoEmpty;
o!==r&&(m+=" "+v.sInfoFiltered);
m+=v.sInfoPostFix;
m=bl(k,m);
v=v.fnInfoCallback;
null!==v&&(m=v.call(k.oInstance,k,u,s,r,o,m));
aO(h).html(m)
}}function bl(k,h){var u=k.fnFormatNumber,s=k._iDisplayStart+1,r=k._iDisplayLength,o=k.fnRecordsDisplay(),m=-1===r;
return h.replace(/_START_/g,u.call(k,s)).replace(/_END_/g,u.call(k,k.fnDisplayEnd())).replace(/_MAX_/g,u.call(k,k.fnRecordsTotal())).replace(/_TOTAL_/g,u.call(k,o)).replace(/_PAGE_/g,u.call(k,m?1:Math.ceil(s/r))).replace(/_PAGES_/g,u.call(k,m?1:Math.ceil(o/r)))
}function bP(k){var h,u,s=k.iInitDisplayStart,r=k.aoColumns,o;
u=k.oFeatures;
var m=k.bDeferLoading;
if(k.bInitialised){bR(k);
ak(k);
j(k,k.aoHeader);
j(k,k.aoFooter);
bz(k,!0);
u.bAutoWidth&&an(k);
h=0;
for(u=r.length;
h<u;
h++){o=r[h],o.sWidth&&(o.nTh.style.width=aC(o.sWidth))
}aF(k,null,"preInit",[k]);
a6(k);
r=ay(k);
if("ssp"!=r||m){"ajax"==r?bY(k,[],function(w){var v=bE(k,w);
for(h=0;
h<v.length;
h++){bg(k,v[h])
}k.iInitDisplayStart=s;
a6(k);
bz(k,!1);
aW(k,w)
},k):(bz(k,!1),aW(k))
}}else{setTimeout(function(){bP(k)
},200)
}}function aW(k,h){k._bInitComplete=!0;
(h||k.oInit.aaData)&&a1(k);
aF(k,null,"plugin-init",[k,h]);
aF(k,"aoInitComplete","init",[k,h])
}function av(k,h){var m=parseInt(h,10);
k._iDisplayLength=m;
ag(k);
aF(k,null,"length",[k,m])
}function br(w){for(var v=w.oClasses,u=w.sTableId,s=w.aLengthMenu,r=aO.isArray(s[0]),o=r?s[0]:s,s=r?s[1]:s,r=aO("<select/>",{name:u+"_length","aria-controls":u,"class":v.sLengthSelect}),m=0,h=o.length;
m<h;
m++){r[0][m]=new Option("number"===typeof s[m]?w.fnFormatNumber(s[m]):s[m],o[m])
}var k=aO("<div><label/></div>").addClass(v.sLength);
w.aanFeatures.l||(k[0].id=u+"_length");
k.children().append(w.oLanguage.sLengthMenu.replace("_MENU_",r[0].outerHTML));
aO("select",k).val(w._iDisplayLength).on("change.DT",function(){av(w,aO(this).val());
bf(w)
});
aO(w.nTable).on("length.dt.DT",function(x,z,y){w===z&&aO("select",k).val(y)
});
return k[0]
}function bW(k){var h=k.sPaginationType,s=aJ.ext.pager[h],r="function"===typeof s,o=function(u){bf(u)
},h=aO("<div/>").addClass(k.oClasses.sPaging+h)[0],m=k.aanFeatures;
r||s.fnInit(k,h,o);
m.p||(h.id=k.sTableId+"_paginate",k.aoDrawCallback.push({fn:function(w){if(r){var u=w._iDisplayStart,y=w._iDisplayLength,z=w.fnRecordsDisplay(),v=-1===y,u=v?0:Math.ceil(u/y),y=v?1:Math.ceil(z/y),z=s(u,y),x,v=0;
for(x=m.p.length;
v<x;
v++){ci(w,"pageButton")(w,m.p[v],v,z,u,y)
}}else{s.fnUpdate(w,o)
}},sName:"pagination"}));
return h
}function d(k,h,s){var r=k._iDisplayStart,o=k._iDisplayLength,m=k.fnRecordsDisplay();
0===m||-1===o?r=0:"number"===typeof h?(r=h*o,r>m&&(r=0)):"first"==h?r=0:"previous"==h?(r=0<=o?r-o:0,0>r&&(r=0)):"next"==h?r+o<m&&(r+=o):"last"==h?r=Math.floor((m-1)/o)*o:bk(k,0,"Unknown paging action: "+h,5);
h=k._iDisplayStart!==r;
k._iDisplayStart=r;
h&&(aF(k,null,"page",[k]),s&&bf(k));
return h
}function ao(h){return aO("<div/>",{id:!h.aanFeatures.r?h.sTableId+"_processing":null,"class":h.oClasses.sProcessing}).html(h.oLanguage.sProcessing).insertBefore(h.nTable)[0]
}function bz(k,h){k.oFeatures.bProcessing&&aO(k.aanFeatures.r).css("display",h?"block":"none");
aF(k,null,"processing",[k,h])
}function K(A){var z=aO(A.nTable);
z.attr("role","grid");
var y=A.oScroll;
if(""===y.sX&&""===y.sY){return A.nTable
}var x=y.sX,w=y.sY,v=A.oClasses,u=z.children("caption"),r=u.length?u[0]._captionSide:null,s=aO(z[0].cloneNode(!1)),h=aO(z[0].cloneNode(!1)),m=z.children("tfoot");
m.length||(m=null);
s=aO("<div/>",{"class":v.sScrollWrapper}).append(aO("<div/>",{"class":v.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:x?!x?null:aC(x):"100%"}).append(aO("<div/>",{"class":v.sScrollHeadInner}).css({"box-sizing":"content-box",width:y.sXInner||"100%"}).append(s.removeAttr("id").css("margin-left",0).append("top"===r?u:null).append(z.children("thead"))))).append(aO("<div/>",{"class":v.sScrollBody}).css({position:"relative",overflow:"auto",width:!x?null:aC(x)}).append(z));
m&&s.append(aO("<div/>",{"class":v.sScrollFoot}).css({overflow:"hidden",border:0,width:x?!x?null:aC(x):"100%"}).append(aO("<div/>",{"class":v.sScrollFootInner}).append(h.removeAttr("id").css("margin-left",0).append("bottom"===r?u:null).append(z.children("tfoot")))));
var z=s.children(),o=z[0],v=z[1],B=m?z[2]:null;
if(x){aO(v).on("scroll.DT",function(){var k=this.scrollLeft;
o.scrollLeft=k;
m&&(B.scrollLeft=k)
})
}aO(v).css(w&&y.bCollapse?"max-height":"height",w);
A.nScrollHead=o;
A.nScrollBody=v;
A.nScrollFoot=B;
A.aoDrawCallback.push({fn:p,sName:"scrolling"});
return s[0]
}function p(cl){var ck=cl.oScroll,cj=ck.sX,cb=ck.sXInner,bb=ck.sY,ck=ck.iBarWidth,ba=aO(cl.nScrollHead),ac=ba[0].style,aa=ba.children("div"),ab=aa[0].style,X=aa.children("table"),aa=cl.nScrollBody,Z=aO(aa),S=aa.style,L=aO(cl.nScrollFoot).children("div"),Y=L.children("table"),W=aO(cl.nTHead),V=aO(cl.nTable),M=V[0],Q=M.style,I=cl.nTFoot?aO(cl.nTFoot):null,G=cl.oBrowser,h=G.bScrollOversize,ca=bv(cl.aoColumns,"nTh"),v,E,k,H,J=[],F=[],D=[],U=[],R,N=function(m){m=m.style;
m.paddingTop="0";
m.paddingBottom="0";
m.borderTopWidth="0";
m.borderBottomWidth="0";
m.height=0
};
E=aa.scrollHeight>aa.clientHeight;
if(cl.scrollBarVis!==E&&cl.scrollBarVis!==aK){cl.scrollBarVis=E,a1(cl)
}else{cl.scrollBarVis=E;
V.children("thead, tfoot").remove();
I&&(k=I.clone().prependTo(V),v=I.find("tr"),k=k.find("tr"));
H=W.clone().prependTo(V);
W=W.find("tr");
E=H.find("tr");
H.find("th, td").removeAttr("tabindex");
cj||(S.width="100%",ba[0].style.width="100%");
aO.each(ch(cl,H),function(m,o){R=aZ(cl,m);
o.style.width=cl.aoColumns[R].sWidth
});
I&&bo(function(m){m.style.width=""
},k);
ba=V.outerWidth();
if(""===cj){Q.width="100%";
if(h&&(V.find("tbody").height()>aa.offsetHeight||"scroll"==Z.css("overflow-y"))){Q.width=aC(V.outerWidth()-ck)
}ba=V.outerWidth()
}else{""!==cb&&(Q.width=aC(cb),ba=V.outerWidth())
}bo(N,E);
bo(function(m){D.push(m.innerHTML);
J.push(aC(aO(m).css("width")))
},E);
bo(function(o,m){if(aO.inArray(o,ca)!==-1){o.style.width=J[m]
}},W);
aO(E).height(0);
I&&(bo(N,k),bo(function(m){U.push(m.innerHTML);
F.push(aC(aO(m).css("width")))
},k),bo(function(o,m){o.style.width=F[m]
},v),aO(k).height(0));
bo(function(o,m){o.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+D[m]+"</div>";
o.style.width=J[m]
},E);
I&&bo(function(o,m){o.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+U[m]+"</div>";
o.style.width=F[m]
},k);
if(V.outerWidth()<ba){v=aa.scrollHeight>aa.offsetHeight||"scroll"==Z.css("overflow-y")?ba+ck:ba;
if(h&&(aa.scrollHeight>aa.offsetHeight||"scroll"==Z.css("overflow-y"))){Q.width=aC(v-ck)
}(""===cj||""!==cb)&&bk(cl,1,"Possible column misalignment",6)
}else{v="100%"
}S.width=aC(v);
ac.width=aC(v);
I&&(cl.nScrollFoot.style.width=aC(v));
!bb&&h&&(S.height=aC(M.offsetHeight+ck));
cj=V.outerWidth();
X[0].style.width=aC(cj);
ab.width=aC(cj);
cb=V.height()>aa.clientHeight||"scroll"==Z.css("overflow-y");
bb="padding"+(G.bScrollbarLeft?"Left":"Right");
ab[bb]=cb?ck+"px":"0px";
I&&(Y[0].style.width=aC(cj),L[0].style.width=aC(cj),L[0].style[bb]=cb?ck+"px":"0px");
V.children("colgroup").insertBefore(V.children("thead"));
Z.scroll();
if((cl.bSorted||cl.bFiltered)&&!cl._drawHold){aa.scrollTop=0
}}}function bo(k,h,v){for(var u=0,s=0,r=h.length,o,m;
s<r;
){o=h[s].firstChild;
for(m=v?v[s].firstChild:null;
o;
){1===o.nodeType&&(v?k(o,m,u):k(o,u),u++),o=o.nextSibling,m=v?m.nextSibling:null
}s++
}}function an(G){var F=G.nTable,E=G.aoColumns,D=G.oScroll,C=D.sY,B=D.sX,A=D.sXInner,y=E.length,z=cd(G,"bVisible"),u=aO("th",G.nTHead),w=F.getAttribute("width"),x=F.parentNode,H=!1,v,r,h=G.oBrowser,D=h.bScrollOversize;
(v=F.style.width)&&-1!==v.indexOf("%")&&(w=v);
for(v=0;
v<z.length;
v++){r=E[z[v]],null!==r.sWidth&&(r.sWidth=aN(r.sWidthOrig,x),H=!0)
}if(D||!H&&!B&&!C&&y==bM(G)&&y==u.length){for(v=0;
v<y;
v++){z=aZ(G,v),null!==z&&(E[z].sWidth=aC(u.eq(v).width()))
}}else{y=aO(F).clone().css("visibility","hidden").removeAttr("id");
y.find("tbody tr").remove();
var I=aO("<tr/>").appendTo(y.find("tbody"));
y.find("thead, tfoot").remove();
y.append(aO(G.nTHead).clone()).append(aO(G.nTFoot).clone());
y.find("tfoot th, tfoot td").css("width","");
u=ch(G,y.find("thead")[0]);
for(v=0;
v<z.length;
v++){r=E[z[v]],u[v].style.width=null!==r.sWidthOrig&&""!==r.sWidthOrig?aC(r.sWidthOrig):"",r.sWidthOrig&&B&&aO(u[v]).append(aO("<div/>").css({width:r.sWidthOrig,margin:0,padding:0,border:0,height:1}))
}if(G.aoData.length){for(v=0;
v<z.length;
v++){H=z[v],r=E[H],aO(al(G,H)).clone(!1).append(r.sContentPadding).appendTo(I)
}}aO("[name]",y).removeAttr("name");
r=aO("<div/>").css(B||C?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(y).appendTo(x);
B&&A?y.width(A):B?(y.css("width","auto"),y.removeAttr("width"),y.width()<x.clientWidth&&w&&y.width(x.clientWidth)):C?y.width(x.clientWidth):w&&y.width(w);
for(v=C=0;
v<z.length;
v++){x=aO(u[v]),A=x.outerWidth()-x.width(),x=h.bBounding?Math.ceil(u[v].getBoundingClientRect().width):x.outerWidth(),C+=x,E[z[v]].sWidth=aC(x-A)
}F.style.width=aC(C);
r.remove()
}w&&(F.style.width=aC(w));
if((w||B)&&!G._reszEvt){F=function(){aO(bt).on("resize.DT-"+G.sInstance,bZ(function(){a1(G)
}))
},D?setTimeout(F,1000):F(),G._reszEvt=!0
}}function aN(k,h){if(!k){return 0
}var o=aO("<div/>").css("width",aC(k)).appendTo(h||bp.body),m=o[0].offsetWidth;
o.remove();
return m
}function al(k,h){var o=n(k,h);
if(0>o){return null
}var m=k.aoData[o];
return !m.nTr?aO("<td/>").html(bA(k,o,h,"display"))[0]:m.anCells[h]
}function n(k,h){for(var u,s=-1,r=-1,o=0,m=k.aoData.length;
o<m;
o++){u=bA(k,o,h,"display")+"",u=u.replace(e,""),u=u.replace(/&nbsp;/g," "),u.length>s&&(s=u.length,r=o)
}return r
}function aC(h){return null===h?"0px":"number"==typeof h?0>h?"0px":h+"px":h.match(/\d$/)?h+"px":h
}function a4(x){var w,v,u=[],s=x.aoColumns,r,o,k,m;
w=x.aaSortingFixed;
v=aO.isPlainObject(w);
var h=[];
r=function(y){y.length&&!aO.isArray(y[0])?h.push(y):aO.merge(h,y)
};
aO.isArray(w)&&r(w);
v&&w.pre&&r(w.pre);
r(x.aaSorting);
v&&w.post&&r(w.post);
for(x=0;
x<h.length;
x++){m=h[x][0];
r=s[m].aDataSort;
w=0;
for(v=r.length;
w<v;
w++){o=r[w],k=s[o].sType||"string",h[x]._idx===aK&&(h[x]._idx=aO.inArray(h[x][1],s[o].asSorting)),u.push({src:m,col:o,dir:h[x][1],index:h[x]._idx,type:k,formatter:aJ.ext.type.order[k+"-pre"]})
}}return u
}function b9(y){var x,w,v=[],u=aJ.ext.type.order,s=y.aoData,r=0,k,m=y.aiDisplayMaster,o;
t(y);
o=a4(y);
x=0;
for(w=o.length;
x<w;
x++){k=o[x],k.formatter&&r++,cc(y,k.col)
}if("ssp"!=ay(y)&&0!==o.length){x=0;
for(w=m.length;
x<w;
x++){v[m[x]]=x
}r===o.length?m.sort(function(G,F){var E,D,C,A,B=o.length,z=s[G]._aSortData,h=s[F]._aSortData;
for(C=0;
C<B;
C++){if(A=o[C],E=z[A.col],D=h[A.col],E=E<D?-1:E>D?1:0,0!==E){return"asc"===A.dir?E:-E
}}E=v[G];
D=v[F];
return E<D?-1:E>D?1:0
}):m.sort(function(G,F){var E,D,B,C,A=o.length,z=s[G]._aSortData,h=s[F]._aSortData;
for(B=0;
B<A;
B++){if(C=o[B],E=z[C.col],D=h[C.col],C=u[C.type+"-"+C.dir]||u["string-"+C.dir],E=C(E,D),0!==E){return E
}}E=v[G];
D=v[F];
return E<D?-1:E>D?1:0
})
}y.bSorted=!0
}function bS(w){for(var v,u,s=w.aoColumns,r=a4(w),w=w.oLanguage.oAria,o=0,m=s.length;
o<m;
o++){u=s[o];
var h=u.asSorting;
v=u.sTitle.replace(/<.*?>/g,"");
var k=u.nTh;
k.removeAttribute("aria-sort");
u.bSortable&&(0<r.length&&r[0].col==o?(k.setAttribute("aria-sort","asc"==r[0].dir?"ascending":"descending"),u=h[r[0].index+1]||h[0]):u=h[0],v+="asc"===u?w.sSortAscending:w.sSortDescending);
k.setAttribute("aria-label",v)
}}function bJ(k,h,u,s){var r=k.aaSorting,o=k.aoColumns[h].asSorting,m=function(w,v){var x=w._idx;
x===aK&&(x=aO.inArray(w[1],o));
return x+1<o.length?x+1:v?null:0
};
"number"===typeof r[0]&&(r=k.aaSorting=[r]);
u&&k.oFeatures.bSortMulti?(u=aO.inArray(h,bv(r,"0")),-1!==u?(h=m(r[u],!0),null===h&&1===r.length&&(h=0),null===h?r.splice(u,1):(r[u][1]=o[h],r[u]._idx=h)):(r.push([h,o[0],0]),r[r.length-1]._idx=0)):r.length&&r[0][0]==h?(h=m(r[0]),r.length=1,r[0][1]=o[h],r[0]._idx=h):(r.length=0,r.push([h,o[0]]),r[0]._idx=0);
a6(k);
"function"==typeof s&&s(k)
}function T(k,h,r,o){var m=k.aoColumns[r];
a0(h,{},function(s){!1!==m.bSortable&&(k.oFeatures.bProcessing?(bz(k,!0),setTimeout(function(){bJ(k,r,s.shiftKey,o);
"ssp"!==ay(k)&&bz(k,!1)
},0)):bJ(k,r,s.shiftKey,o))
})
}function af(k){var h=k.aLastSort,u=k.oClasses.sSortColumn,s=a4(k),r=k.oFeatures,o,m;
if(r.bSort&&r.bSortClasses){r=0;
for(o=h.length;
r<o;
r++){m=h[r].src,aO(bv(k.aoData,"anCells",m)).removeClass(u+(2>r?r+1:3))
}r=0;
for(o=s.length;
r<o;
r++){m=s[r].src,aO(bv(k.aoData,"anCells",m)).addClass(u+(2>r?r+1:3))
}}k.aLastSort=s
}function cc(w,v){var u=w.aoColumns[v],s=aJ.ext.order[u.sSortDataType],r;
s&&(r=s.call(w.oInstance,w,v,bV(w,v)));
for(var o,m=aJ.ext.type.order[u.sType+"-pre"],h=0,k=w.aoData.length;
h<k;
h++){if(u=w.aoData[h],u._aSortData||(u._aSortData=[]),!u._aSortData[v]||s){o=s?r[h]:bA(w,h,v,"sort"),u._aSortData[v]=m?m(o):o
}}}function c(k){if(k.oFeatures.bStateSave&&!k.bDestroying){var h={time:+new Date,start:k._iDisplayStart,length:k._iDisplayLength,order:aO.extend(!0,[],k.aaSorting),search:bG(k.oPreviousSearch),columns:aO.map(k.aoColumns,function(m,o){return{visible:m.bVisible,search:bG(k.aoPreSearchCols[o])}
})};
aF(k,"aoStateSaveParams","stateSaveParams",[k,h]);
k.oSavedState=h;
k.fnStateSaveCallback.call(k.oInstance,k,h)
}}function bs(k,h,u){var s,r,o=k.aoColumns,h=function(v){if(v&&v.time){var w=aF(k,"aoStateLoadParams","stateLoadParams",[k,v]);
if(-1===aO.inArray(!1,w)&&(w=k.iStateDuration,!(0<w&&v.time<+new Date-1000*w)&&!(v.columns&&o.length!==v.columns.length))){k.oLoadedState=aO.extend(!0,{},v);
v.start!==aK&&(k._iDisplayStart=v.start,k.iInitDisplayStart=v.start);
v.length!==aK&&(k._iDisplayLength=v.length);
v.order!==aK&&(k.aaSorting=[],aO.each(v.order,function(x,y){k.aaSorting.push(y[0]>=o.length?[0,y[1]]:y)
}));
v.search!==aK&&aO.extend(k.oPreviousSearch,b6(v.search));
if(v.columns){s=0;
for(r=v.columns.length;
s<r;
s++){w=v.columns[s],w.visible!==aK&&(o[s].bVisible=w.visible),w.search!==aK&&aO.extend(k.aoPreSearchCols[s],b6(w.search))
}}aF(k,"aoStateLoaded","stateLoaded",[k,v])
}}u()
};
if(k.oFeatures.bStateSave){var m=k.fnStateLoadCallback.call(k.oInstance,k,h);
m!==aK&&h(m)
}else{u()
}}function b2(k){var h=aJ.settings,k=aO.inArray(k,bv(h,"nTable"));
return -1!==k?h[k]:null
}function bk(k,h,o,m){o="DataTables warning: "+(k?"table id="+k.sTableId+" - ":"")+o;
m&&(o+=". For more information about this error, please see http://datatables.net/tn/"+m);
if(h){bt.console&&console.log&&console.log(o)
}else{if(h=aJ.ext,h=h.sErrMode||h.errMode,k&&aF(k,null,"error",[k,m,o]),"alert"==h){alert(o)
}else{if("throw"==h){throw Error(o)
}"function"==typeof h&&h(k,m,o)
}}}function bq(k,h,o,m){aO.isArray(o)?aO.each(o,function(s,r){aO.isArray(r)?bq(k,h,r[0],r[1]):bq(k,h,r)
}):(m===aK&&(m=o),h[o]!==aK&&(k[m]=h[o]))
}function aR(k,h,r){var o,m;
for(m in h){h.hasOwnProperty(m)&&(o=h[m],aO.isPlainObject(o)?(aO.isPlainObject(k[m])||(k[m]={}),aO.extend(!0,k[m],o)):k[m]=r&&"data"!==m&&"aaData"!==m&&aO.isArray(o)?o.slice():o)
}return k
}function a0(k,h,m){aO(k).on("click.DT",h,function(o){k.blur();
m(o)
}).on("keypress.DT",h,function(o){13===o.which&&(o.preventDefault(),m(o))
}).on("selectstart.DT",function(){return !1
})
}function aw(k,h,o,m){o&&k[h].push({fn:o,sName:m})
}function aF(k,h,r,o){var m=[];
h&&(m=aO.map(k[h].slice().reverse(),function(s){return s.fn.apply(k.oInstance,o)
}));
null!==r&&(h=aO.Event(r+".dt"),aO(k.nTable).trigger(h,o),m.push(h.result));
return m
}function ag(k){var h=k._iDisplayStart,o=k.fnDisplayEnd(),m=k._iDisplayLength;
h>=o&&(h=o-m);
h-=h%m;
if(-1===m||0>h){h=0
}k._iDisplayStart=h
}function ci(k,h){var o=k.renderer,m=aJ.ext.renderer[h];
return aO.isPlainObject(o)&&o[h]?m[o[h]]||m._:"string"===typeof o?m[o]||m._:m._
}function ay(h){return h.oFeatures.bServerSide?"ssp":h.ajax||h.sAjaxSource?"ajax":"dom"
}function bj(k,h){var o=[],o=ap.numbers_length,m=Math.floor(o/2);
h<=o?o=a3(0,h):k<=m?(o=a3(0,o-2),o.push("ellipsis"),o.push(h-1)):(k>=h-1-m?o=a3(h-(o-2),h):(o=a3(k-m+2,k+m-1),o.push("ellipsis"),o.push(h-1)),o.splice(0,0,"ellipsis"),o.splice(0,0,0));
o.DT_el="span";
return o
}function aH(h){aO.each({num:function(k){return bH(k,h)
},"num-fmt":function(k){return bH(k,h,az)
},"html-num":function(k){return bH(k,h,b8)
},"html-num-fmt":function(k){return bH(k,h,b8,az)
}},function(k,m){aA.type.order[k+h+"-pre"]=m;
k.match(/^html\-/)&&(aA.type.search[k+h]=aA.type.search.html)
})
}function P(h){return function(){var k=[b2(this[aJ.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
return aJ.ext.internal[h].apply(this,k)
}
}var aJ=function(k){this.$=function(u,s){return this.api(!0).$(u,s)
};
this._=function(u,s){return this.api(!0).rows(u,s).data()
};
this.api=function(s){return s?new aE(b2(this[aA.iApiIndex])):new aE(this)
};
this.fnAddData=function(u,s){var w=this.api(!0),v=aO.isArray(u)&&(aO.isArray(u[0])||aO.isPlainObject(u[0]))?w.rows.add(u):w.row.add(u);
(s===aK||s)&&w.draw();
return v.flatten().toArray()
};
this.fnAdjustColumnSizing=function(u){var s=this.api(!0).columns.adjust(),w=s.settings()[0],v=w.oScroll;
u===aK||u?s.draw(!1):(""!==v.sX||""!==v.sY)&&p(w)
};
this.fnClearTable=function(u){var s=this.api(!0).clear();
(u===aK||u)&&s.draw()
};
this.fnClose=function(s){this.api(!0).row(s).child.hide()
};
this.fnDeleteRow=function(u,s,y){var x=this.api(!0),u=x.rows(u),w=u.settings()[0],v=w.aoData[u[0][0]];
u.remove();
s&&s.call(this,w,v);
(y===aK||y)&&x.draw();
return v
};
this.fnDestroy=function(s){this.api(!0).destroy(s)
};
this.fnDraw=function(s){this.api(!0).draw(s)
};
this.fnFilter=function(u,s,y,x,w,v){w=this.api(!0);
null===s||s===aK?w.search(u,y,x,v):w.column(s).search(u,y,x,v);
w.draw()
};
this.fnGetData=function(u,s){var w=this.api(!0);
if(u!==aK){var v=u.nodeName?u.nodeName.toLowerCase():"";
return s!==aK||"td"==v||"th"==v?w.cell(u,s).data():w.row(u).data()||null
}return w.data().toArray()
};
this.fnGetNodes=function(u){var s=this.api(!0);
return u!==aK?s.row(u).node():s.rows().nodes().flatten().toArray()
};
this.fnGetPosition=function(u){var s=this.api(!0),v=u.nodeName.toUpperCase();
return"TR"==v?s.row(u).index():"TD"==v||"TH"==v?(u=s.cell(u).index(),[u.row,u.columnVisible,u.column]):null
};
this.fnIsOpen=function(s){return this.api(!0).row(s).child.isShown()
};
this.fnOpen=function(u,s,v){return this.api(!0).row(u).child(s,v).show().child()[0]
};
this.fnPageChange=function(u,s){var v=this.api(!0).page(u);
(s===aK||s)&&v.draw(!1)
};
this.fnSetColumnVis=function(u,s,v){u=this.api(!0).column(u).visible(s);
(v===aK||v)&&u.columns.adjust().draw()
};
this.fnSettings=function(){return b2(this[aA.iApiIndex])
};
this.fnSort=function(s){this.api(!0).order(s).draw()
};
this.fnSortListener=function(u,s,v){this.api(!0).order.listener(u,s,v)
};
this.fnUpdate=function(u,s,y,x,w){var v=this.api(!0);
y===aK||null===y?v.row(s).data(u):v.cell(s,y).data(u);
(w===aK||w)&&v.columns.adjust();
(x===aK||x)&&v.draw();
return 0
};
this.fnVersionCheck=aA.fnVersionCheck;
var h=this,r=k===aK,o=this.length;
r&&(k={});
this.oApi=this.internal=aA.internal;
for(var m in aJ.ext.internal){m&&(this[m]=P(m))
}this.each(function(){var H={},G=1<o?aR(H,k,!0):k,E=0,F,H=this.getAttribute("id"),B=!1,C=aJ.defaults,y=aO(this);
if("table"!=this.nodeName.toLowerCase()){bk(null,0,"Non-table node initialisation ("+this.nodeName+")",2)
}else{ai(C);
g(C.column);
bm(C,C,!0);
bm(C.column,C.column,!0);
bm(C,aO.extend(G,y.data()));
var N=aJ.settings,E=0;
for(F=N.length;
E<F;
E++){var A=N[E];
if(A.nTable==this||A.nTHead.parentNode==this||A.nTFoot&&A.nTFoot.parentNode==this){var Q=G.bRetrieve!==aK?G.bRetrieve:C.bRetrieve;
if(r||Q){return A.oInstance
}if(G.bDestroy!==aK?G.bDestroy:C.bDestroy){A.oInstance.fnDestroy();
break
}else{bk(A,0,"Cannot reinitialise DataTable",3);
return
}}if(A.sTableId==this.id){N.splice(E,1);
break
}}if(null===H||""===H){this.id=H="DataTables_Table_"+aJ.ext._unique++
}var z=aO.extend(!0,{},aJ.models.oSettings,{sDestroyWidth:y[0].style.width,sInstance:H,sTableId:H});
z.nTable=this;
z.oApi=h.internal;
z.oInit=G;
N.push(z);
z.oInstance=1===h.length?h:y.dataTable();
ai(G);
G.oLanguage&&bn(G.oLanguage);
G.aLengthMenu&&!G.iDisplayLength&&(G.iDisplayLength=aO.isArray(G.aLengthMenu[0])?G.aLengthMenu[0][0]:G.aLengthMenu[0]);
G=aR(aO.extend(!0,{},C),G);
bq(z.oFeatures,G,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
bq(z,G,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]);
bq(z.oScroll,G,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);
bq(z.oLanguage,G,"fnInfoCallback");
aw(z,"aoDrawCallback",G.fnDrawCallback,"user");
aw(z,"aoServerParams",G.fnServerParams,"user");
aw(z,"aoStateSaveParams",G.fnStateSaveParams,"user");
aw(z,"aoStateLoadParams",G.fnStateLoadParams,"user");
aw(z,"aoStateLoaded",G.fnStateLoaded,"user");
aw(z,"aoRowCallback",G.fnRowCallback,"user");
aw(z,"aoRowCreatedCallback",G.fnCreatedRow,"user");
aw(z,"aoHeaderCallback",G.fnHeaderCallback,"user");
aw(z,"aoFooterCallback",G.fnFooterCallback,"user");
aw(z,"aoInitComplete",G.fnInitComplete,"user");
aw(z,"aoPreDrawCallback",G.fnPreDrawCallback,"user");
z.rowIdFn=a9(G.rowId);
b5(z);
var M=z.oClasses;
aO.extend(M,aJ.ext.classes,G.oClasses);
y.addClass(M.sTable);
z.iInitDisplayStart===aK&&(z.iInitDisplayStart=G.iDisplayStart,z._iDisplayStart=G.iDisplayStart);
null!==G.iDeferLoading&&(z.bDeferLoading=!0,H=aO.isArray(G.iDeferLoading),z._iRecordsDisplay=H?G.iDeferLoading[0]:G.iDeferLoading,z._iRecordsTotal=H?G.iDeferLoading[1]:G.iDeferLoading);
var L=z.oLanguage;
aO.extend(!0,L,G.oLanguage);
L.sUrl&&(aO.ajax({dataType:"json",url:L.sUrl,success:function(s){bn(s);
bm(C.oLanguage,s);
aO.extend(true,L,s);
bP(z)
},error:function(){bP(z)
}}),B=!0);
null===G.asStripeClasses&&(z.asStripeClasses=[M.sStripeOdd,M.sStripeEven]);
var H=z.asStripeClasses,I=y.children("tbody").find("tr").eq(0);
-1!==aO.inArray(!0,aO.map(H,function(s){return I.hasClass(s)
}))&&(aO("tbody tr",this).removeClass(H.join(" ")),z.asDestroyStripes=H.slice());
H=[];
N=this.getElementsByTagName("thead");
0!==N.length&&(aj(z.aoHeader,N[0]),H=ch(z));
if(null===G.aoColumns){N=[];
E=0;
for(F=H.length;
E<F;
E++){N.push(null)
}}else{N=G.aoColumns
}E=0;
for(F=N.length;
E<F;
E++){aP(z,H?H[E]:null)
}bi(z,G.aoColumnDefs,N,function(u,s){am(z,u,s)
});
if(I.length){var J=function(u,s){return u.getAttribute("data-"+s)!==null?s:null
};
aO(I[0]).children("th, td").each(function(u,s){var x=z.aoColumns[u];
if(x.mData===u){var w=J(s,"sort")||J(s,"order"),v=J(s,"filter")||J(s,"search");
if(w!==null||v!==null){x.mData={_:u+".display",sort:w!==null?u+".@data-"+w:aK,type:w!==null?u+".@data-"+w:aK,filter:v!==null?u+".@data-"+v:aK};
am(z,u)
}}})
}var D=z.oFeatures,H=function(){if(G.aaSorting===aK){var u=z.aaSorting;
E=0;
for(F=u.length;
E<F;
E++){u[E][1]=z.aoColumns[E].asSorting[0]
}}af(z);
D.bSort&&aw(z,"aoDrawCallback",function(){if(z.bSorted){var w=a4(z),v={};
aO.each(w,function(x,R){v[R.src]=R.dir
});
aF(z,null,"order",[z,w,v]);
bS(z)
}});
aw(z,"aoDrawCallback",function(){(z.bSorted||ay(z)==="ssp"||D.bDeferRender)&&af(z)
},"sc");
var u=y.children("caption").each(function(){this._captionSide=aO(this).css("caption-side")
}),s=y.children("thead");
s.length===0&&(s=aO("<thead/>").appendTo(y));
z.nTHead=s[0];
s=y.children("tbody");
s.length===0&&(s=aO("<tbody/>").appendTo(y));
z.nTBody=s[0];
s=y.children("tfoot");
if(s.length===0&&u.length>0&&(z.oScroll.sX!==""||z.oScroll.sY!=="")){s=aO("<tfoot/>").appendTo(y)
}if(s.length===0||s.children().length===0){y.addClass(M.sNoFooter)
}else{if(s.length>0){z.nTFoot=s[0];
aj(z.aoFooter,z.nTFoot)
}}if(G.aaData){for(E=0;
E<G.aaData.length;
E++){bg(z,G.aaData[E])
}}else{(z.bDeferLoading||ay(z)=="dom")&&bT(z,aO(z.nTBody).children("tr"))
}z.aiDisplay=z.aiDisplayMaster.slice();
z.bInitialised=true;
B===false&&bP(z)
};
G.bStateSave?(D.bStateSave=!0,aw(z,"aoDrawCallback",c,"state_save"),bs(z,G,H)):H()
}});
h=null;
return this
},aA,aE,aG,aD,ah={},cg=/[\r\n]/g,b8=/<.*?>/g,b3=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,bw=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),az=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,bh=function(h){return !h||!0===h||"-"===h?!0:!1
},bX=function(k){var h=parseInt(k,10);
return !isNaN(h)&&isFinite(k)?h:null
},bD=function(k,h){ah[h]||(ah[h]=RegExp(aX(h),"g"));
return"string"===typeof k&&"."!==h?k.replace(/\./g,"").replace(ah[h],"."):k
},f=function(k,h,o){var m="string"===typeof k;
if(bh(k)){return !0
}h&&m&&(k=bD(k,h));
o&&m&&(k=k.replace(az,""));
return !isNaN(parseFloat(k))&&isFinite(k)
},aV=function(k,h,m){return bh(k)?!0:!(bh(k)||"string"===typeof k)?null:f(k.replace(b8,""),h,m)?!0:null
},bv=function(k,h,s){var r=[],o=0,m=k.length;
if(s!==aK){for(;
o<m;
o++){k[o]&&k[o][h]&&r.push(k[o][h][s])
}}else{for(;
o<m;
o++){k[o]&&r.push(k[o][h])
}}return r
},aM=function(k,h,u,s){var r=[],o=0,m=h.length;
if(s!==aK){for(;
o<m;
o++){k[h[o]][u]&&r.push(k[h[o]][u][s])
}}else{for(;
o<m;
o++){r.push(k[h[o]][u])
}}return r
},a3=function(k,h){var r=[],o;
h===aK?(h=0,o=k):(o=h,h=k);
for(var m=h;
m<o;
m++){r.push(m)
}return r
},au=function(k){for(var h=[],o=0,m=k.length;
o<m;
o++){k[o]&&h.push(k[o])
}return h
},O=function(k){var h;
k:{if(!(2>k.length)){h=k.slice().sort();
for(var u=h[0],s=1,r=h.length;
s<r;
s++){if(h[s]===u){h=!1;
break k
}u=h[s]
}}h=!0
}if(h){return k.slice()
}h=[];
var r=k.length,o,m=0,s=0;
k:for(;
s<r;
s++){u=k[s];
for(o=0;
o<m;
o++){if(h[o]===u){continue k
}}h.push(u);
m++
}return h
};
aJ.util={throttle:function(k,h){var r=h!==aK?h:200,o,m;
return function(){var s=this,v=+new Date,u=arguments;
o&&v<o+r?(clearTimeout(m),m=setTimeout(function(){o=aK;
k.apply(s,u)
},r)):(o=v,k.apply(s,u))
}
},escapeRegex:function(h){return h.replace(bw,"\\$1")
}};
var bB=function(k,h,m){k[h]!==aK&&(k[m]=k[h])
},be=/\[.*?\]$/,a5=/\(\)$/,aX=aJ.util.escapeRegex,at=aO("<div>")[0],ax=at.textContent!==aK,e=/<.*?>/g,bZ=aJ.util.throttle,ae=[],aB=Array.prototype,bK=function(k){var h,r,o=aJ.settings,m=aO.map(o,function(s){return s.nTable
});
if(k){if(k.nTable&&k.oApi){return[k]
}if(k.nodeName&&"table"===k.nodeName.toLowerCase()){return h=aO.inArray(k,m),-1!==h?[o[h]]:null
}if(k&&"function"===typeof k.settings){return k.settings().toArray()
}"string"===typeof k?r=aO(k):k instanceof aO&&(r=k)
}else{return[]
}if(r){return r.map(function(){h=aO.inArray(this,m);
return -1!==h?o[h]:null
}).toArray()
}};
aE=function(k,h){if(!(this instanceof aE)){return new aE(k,h)
}var s=[],r=function(u){(u=bK(u))&&(s=s.concat(u))
};
if(aO.isArray(k)){for(var o=0,m=k.length;
o<m;
o++){r(k[o])
}}else{r(k)
}this.context=O(s);
h&&aO.merge(this,h);
this.selector={rows:null,cols:null,opts:null};
aE.extend(this,this,ae)
};
aJ.Api=aE;
aO.extend(aE.prototype,{any:function(){return 0!==this.count()
},concat:aB.concat,context:[],count:function(){return this.flatten().length
},each:function(k){for(var h=0,m=this.length;
h<m;
h++){k.call(this,this[h],h,this)
}return this
},eq:function(k){var h=this.context;
return h.length>k?new aE(h[k],this[k]):null
},filter:function(k){var h=[];
if(aB.filter){h=aB.filter.call(this,k,this)
}else{for(var o=0,m=this.length;
o<m;
o++){k.call(this,this[o],o,this)&&h.push(this[o])
}}return new aE(this.context,h)
},flatten:function(){var h=[];
return new aE(this.context,h.concat.apply(h,this.toArray()))
},join:aB.join,indexOf:aB.indexOf||function(k,h){for(var o=h||0,m=this.length;
o<m;
o++){if(this[o]===k){return o
}}return -1
},iterator:function(G,F,E,D){var C=[],B,A,y,z,v,x=this.context,w,s,H=this.selector;
"string"===typeof G&&(D=E,E=F,F=G,G=!1);
A=0;
for(y=x.length;
A<y;
A++){var k=new aE(x[A]);
if("table"===F){B=E.call(k,x[A],A),B!==aK&&C.push(B)
}else{if("columns"===F||"rows"===F){B=E.call(k,x[A],this[A],A),B!==aK&&C.push(B)
}else{if("column"===F||"column-rows"===F||"row"===F||"cell"===F){s=this[A];
"column-rows"===F&&(w=bQ(x[A],H.opts));
z=0;
for(v=s.length;
z<v;
z++){B=s[z],B="cell"===F?E.call(k,x[A],B.row,B.column,A,z):E.call(k,x[A],B,A,z,w),B!==aK&&C.push(B)
}}}}}return C.length||D?(G=new aE(x,G?C.concat.apply([],C):C),F=G.selector,F.rows=H.rows,F.cols=H.cols,F.opts=H.opts,G):this
},lastIndexOf:aB.lastIndexOf||function(k,h){return this.indexOf.apply(this.toArray.reverse(),arguments)
},length:0,map:function(k){var h=[];
if(aB.map){h=aB.map.call(this,k,this)
}else{for(var o=0,m=this.length;
o<m;
o++){h.push(k.call(this,this[o],o))
}}return new aE(this.context,h)
},pluck:function(h){return this.map(function(k){return k[h]
})
},pop:aB.pop,push:aB.push,reduce:aB.reduce||function(k,h){return bN(this,k,h,0,this.length,1)
},reduceRight:aB.reduceRight||function(k,h){return bN(this,k,h,this.length-1,-1,-1)
},reverse:aB.reverse,selector:null,shift:aB.shift,slice:function(){return new aE(this.context,this)
},sort:aB.sort,splice:aB.splice,toArray:function(){return aB.slice.call(this)
},to$:function(){return aO(this)
},toJQuery:function(){return aO(this)
},unique:function(){return new aE(this.context,O(this))
},unshift:aB.unshift});
aE.extend=function(k,h,u){if(u.length&&h&&(h instanceof aE||h.__dt_wrapper)){var s,r,o,m=function(w,v,x){return function(){var y=v.apply(w,arguments);
aE.extend(y,y,x.methodExt);
return y
}
};
s=0;
for(r=u.length;
s<r;
s++){o=u[s],h[o.name]="function"===typeof o.val?m(k,o.val,o):aO.isPlainObject(o.val)?{}:o.val,h[o.name].__dt_wrapper=!0,aE.extend(k,h[o.name],o.propExt)
}}};
aE.register=aG=function(x,w){if(aO.isArray(x)){for(var v=0,u=x.length;
v<u;
v++){aE.register(x[v],w)
}}else{for(var s=x.split("."),r=ae,o,k,v=0,u=s.length;
v<u;
v++){o=(k=-1!==s[v].indexOf("()"))?s[v].replace("()",""):s[v];
var m;
x:{m=0;
for(var h=r.length;
m<h;
m++){if(r[m].name===o){m=r[m];
break x
}}m=null
}m||(m={name:o,val:{},methodExt:[],propExt:[]},r.push(m));
v===u-1?m.val=w:r=k?m.methodExt:m.propExt
}}};
aE.registerPlural=aD=function(k,h,m){aE.register(k,m);
aE.register(h,function(){var o=m.apply(this,arguments);
return o===this?this:o instanceof aE?o.length?aO.isArray(o[0])?new aE(o.context,o[0]):o[0]:aK:o
})
};
aG("tables()",function(k){var h;
if(k){h=aE;
var o=this.context;
if("number"===typeof k){k=[o[k]]
}else{var m=aO.map(o,function(r){return r.nTable
}),k=aO(m).filter(k).map(function(){var r=aO.inArray(this,m);
return o[r]
}).toArray()
}h=new h(k)
}else{h=this
}return h
});
aG("table()",function(k){var k=this.tables(k),h=k.context;
return h.length?new aE(h[0]):k
});
aD("tables().nodes()","table().node()",function(){return this.iterator("table",function(h){return h.nTable
},1)
});
aD("tables().body()","table().body()",function(){return this.iterator("table",function(h){return h.nTBody
},1)
});
aD("tables().header()","table().header()",function(){return this.iterator("table",function(h){return h.nTHead
},1)
});
aD("tables().footer()","table().footer()",function(){return this.iterator("table",function(h){return h.nTFoot
},1)
});
aD("tables().containers()","table().container()",function(){return this.iterator("table",function(h){return h.nTableWrapper
},1)
});
aG("draw()",function(h){return this.iterator("table",function(k){"page"===h?bf(k):("string"===typeof h&&(h="full-hold"===h?!1:!0),a6(k,!1===h))
})
});
aG("page()",function(h){return h===aK?this.page.info().page:this.iterator("table",function(k){d(k,h)
})
});
aG("page.info()",function(){if(0===this.context.length){return aK
}var k=this.context[0],h=k._iDisplayStart,r=k.oFeatures.bPaginate?k._iDisplayLength:-1,o=k.fnRecordsDisplay(),m=-1===r;
return{page:m?0:Math.floor(h/r),pages:m?1:Math.ceil(o/r),start:h,end:k.fnDisplayEnd(),length:r,recordsTotal:k.fnRecordsTotal(),recordsDisplay:o,serverSide:"ssp"===ay(k)}
});
aG("page.len()",function(h){return h===aK?0!==this.context.length?this.context[0]._iDisplayLength:aK:this.iterator("table",function(k){av(k,h)
})
});
var b=function(k,h,r){if(r){var o=new aE(k);
o.one("draw",function(){r(o.ajax.json())
})
}if("ssp"==ay(k)){a6(k,h)
}else{bz(k,!0);
var m=k.jqXHR;
m&&4!==m.readyState&&m.abort();
bY(k,[],function(v){bu(k);
for(var v=bE(k,v),u=0,s=v.length;
u<s;
u++){bg(k,v[u])
}a6(k,h);
bz(k,!1)
})
}};
aG("ajax.json()",function(){var h=this.context;
if(0<h.length){return h[0].json
}});
aG("ajax.params()",function(){var h=this.context;
if(0<h.length){return h[0].oAjaxData
}});
aG("ajax.reload()",function(k,h){return this.iterator("table",function(m){b(m,!1===h,k)
})
});
aG("ajax.url()",function(k){var h=this.context;
if(k===aK){if(0===h.length){return aK
}h=h[0];
return h.ajax?aO.isPlainObject(h.ajax)?h.ajax.url:h.ajax:h.sAjaxSource
}return this.iterator("table",function(m){aO.isPlainObject(m.ajax)?m.ajax.url=k:m.ajax=k
})
});
aG("ajax.url().load()",function(k,h){return this.iterator("table",function(m){b(m,!1===h,k)
})
});
var b4=function(A,z,y,x,w){var v=[],u,r,s,h,o,k;
s=typeof z;
if(!z||"string"===s||"function"===s||z.length===aK){z=[z]
}s=0;
for(h=z.length;
s<h;
s++){r=z[s]&&z[s].split&&!z[s].match(/[\[\(:]/)?z[s].split(","):[z[s]];
o=0;
for(k=r.length;
o<k;
o++){(u=y("string"===typeof r[o]?aO.trim(r[o]):r[o]))&&u.length&&(v=v.concat(u))
}}A=aA.selector[A];
if(A.length){s=0;
for(h=A.length;
s<h;
s++){v=A[s](x,w,v)
}}return O(v)
},by=function(h){h||(h={});
h.filter&&h.search===aK&&(h.search=h.filter);
return aO.extend({search:"none",order:"current",page:"all"},h)
},bL=function(k){for(var h=0,m=k.length;
h<m;
h++){if(0<k[h].length){return k[0]=k[h],k[0].length=1,k.length=1,k.context=[k.context[h]],k
}}k.length=0;
return k
},bQ=function(k,h){var v,u,s,r=[],o=k.aiDisplay;
v=k.aiDisplayMaster;
var m=h.search;
u=h.order;
s=h.page;
if("ssp"==ay(k)){return"removed"===m?[]:a3(0,v.length)
}if("current"==s){v=k._iDisplayStart;
for(u=k.fnDisplayEnd();
v<u;
v++){r.push(o[v])
}}else{if("current"==u||"applied"==u){r="none"==m?v.slice():"applied"==m?o.slice():aO.map(v,function(w){return -1===aO.inArray(w,o)?w:null
})
}else{if("index"==u||"original"==u){v=0;
for(u=k.aoData.length;
v<u;
v++){"none"==m?r.push(v):(s=aO.inArray(v,o),(-1===s&&"removed"==m||0<=s&&"applied"==m)&&r.push(v))
}}}}return r
};
aG("rows()",function(k,h){k===aK?k="":aO.isPlainObject(k)&&(h=k,k="");
var h=by(h),m=this.iterator("table",function(s){var r=h,o;
return b4("row",k,function(v){var u=bX(v);
if(u!==null&&!r){return[u]
}o||(o=bQ(s,r));
if(u!==null&&aO.inArray(u,o)!==-1){return[u]
}if(v===null||v===aK||v===""){return o
}if(typeof v==="function"){return aO.map(o,function(x){var y=s.aoData[x];
return v(x,y._aData,y.nTr)?x:null
})
}u=au(aM(s.aoData,o,"nTr"));
if(v.nodeName){if(v._DT_RowIndex!==aK){return[v._DT_RowIndex]
}if(v._DT_CellIndex){return[v._DT_CellIndex.row]
}u=aO(v).closest("*[data-dt-row]");
return u.length?[u.data("dt-row")]:[]
}if(typeof v==="string"&&v.charAt(0)==="#"){var w=s.aIds[v.replace(/^#/,"")];
if(w!==aK){return[w.idx]
}}return aO(u).filter(v).map(function(){return this._DT_RowIndex
}).toArray()
},s,r)
},1);
m.selector.rows=k;
m.selector.opts=h;
return m
});
aG("rows().nodes()",function(){return this.iterator("row",function(k,h){return k.aoData[h].nTr||aK
},1)
});
aG("rows().data()",function(){return this.iterator(!0,"rows",function(k,h){return aM(k.aoData,h,"_aData")
},1)
});
aD("rows().cache()","row().cache()",function(h){return this.iterator("row",function(k,o){var m=k.aoData[o];
return"search"===h?m._aFilterData:m._aSortData
},1)
});
aD("rows().invalidate()","row().invalidate()",function(h){return this.iterator("row",function(k,m){aI(k,m,h)
})
});
aD("rows().indexes()","row().index()",function(){return this.iterator("row",function(k,h){return h
},1)
});
aD("rows().ids()","row().id()",function(m){for(var k=[],w=this.context,v=0,u=w.length;
v<u;
v++){for(var s=0,r=this[v].length;
s<r;
s++){var o=w[v].rowIdFn(w[v].aoData[this[v][s]]._aData);
k.push((!0===m?"#":"")+o)
}}return new aE(w,k)
});
aD("rows().remove()","row().remove()",function(){var h=this;
this.iterator("row",function(y,x,w){var v=y.aoData,u=v[x],s,r,o,k,m;
v.splice(x,1);
s=0;
for(r=v.length;
s<r;
s++){if(o=v[s],m=o.anCells,null!==o.nTr&&(o.nTr._DT_RowIndex=s),null!==m){o=0;
for(k=m.length;
o<k;
o++){m[o]._DT_CellIndex.row=s
}}}aS(y.aiDisplayMaster,x);
aS(y.aiDisplay,x);
aS(h[w],x,!1);
0<y._iRecordsDisplay&&y._iRecordsDisplay--;
ag(y);
x=y.rowIdFn(u._aData);
x!==aK&&delete y.aIds[x]
});
this.iterator("table",function(k){for(var o=0,m=k.aoData.length;
o<m;
o++){k.aoData[o].idx=o
}});
return this
});
aG("rows.add()",function(k){var h=this.iterator("table",function(o){var v,u,s,r=[];
u=0;
for(s=k.length;
u<s;
u++){v=k[u],v.nodeName&&"TR"===v.nodeName.toUpperCase()?r.push(bT(o,v)[0]):r.push(bg(o,v))
}return r
},1),m=this.rows(-1);
m.pop();
aO.merge(m,h);
return m
});
aG("row()",function(k,h){return bL(this.rows(k,h))
});
aG("row().data()",function(k){var h=this.context;
if(k===aK){return h.length&&this.length?h[0].aoData[this[0]]._aData:aK
}h[0].aoData[this[0]]._aData=k;
aI(h[0],this[0],"data");
return this
});
aG("row().node()",function(){var h=this.context;
return h.length&&this.length?h[0].aoData[this[0]].nTr||null:null
});
aG("row.add()",function(k){k instanceof aO&&k.length&&(k=k[0]);
var h=this.iterator("table",function(m){return k.nodeName&&"TR"===k.nodeName.toUpperCase()?bT(m,k)[0]:bg(m,k)
});
return this.row(h[0])
});
var bd=function(k,h){var m=k.context;
if(m.length&&(m=m[0].aoData[h!==aK?h:k[0]])&&m._details){m._details.remove(),m._detailsShow=aK,m._details=aK
}},b1=function(k,h){var u=k.context;
if(u.length&&k.length){var s=u[0].aoData[k[0]];
if(s._details){(s._detailsShow=h)?s._details.insertAfter(s.nTr):s._details.detach();
var r=u[0],o=new aE(r),m=r.aoData;
o.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
0<bv(m,"_details").length&&(o.on("draw.dt.DT_details",function(w,v){r===v&&o.rows({page:"current"}).eq(0).each(function(x){x=m[x];
x._detailsShow&&x._details.insertAfter(x.nTr)
})
}),o.on("column-visibility.dt.DT_details",function(w,v){if(r===v){for(var A,z=bM(v),y=0,x=m.length;
y<x;
y++){A=m[y],A._details&&A._details.children("td[colspan]").attr("colspan",z)
}}}),o.on("destroy.dt.DT_details",function(w,v){if(r===v){for(var y=0,x=m.length;
y<x;
y++){m[y]._details&&bd(o,y)
}}}))
}}};
aG("row().child()",function(k,h){var s=this.context;
if(k===aK){return s.length&&this.length?s[0].aoData[this[0]]._details:aK
}if(!0===k){this.child.show()
}else{if(!1===k){bd(this)
}else{if(s.length&&this.length){var r=s[0],s=s[0].aoData[this[0]],o=[],m=function(v,u){if(aO.isArray(v)||v instanceof aO){for(var x=0,w=v.length;
x<w;
x++){m(v[x],u)
}}else{v.nodeName&&"tr"===v.nodeName.toLowerCase()?o.push(v):(x=aO("<tr><td/></tr>").addClass(u),aO("td",x).addClass(u).html(v)[0].colSpan=bM(r),o.push(x[0]))
}};
m(k,h);
s._details&&s._details.detach();
s._details=aO(o);
s._detailsShow&&s._details.insertAfter(s.nTr)
}}}return this
});
aG(["row().child.show()","row().child().show()"],function(){b1(this,!0);
return this
});
aG(["row().child.hide()","row().child().hide()"],function(){b1(this,!1);
return this
});
aG(["row().child.remove()","row().child().remove()"],function(){bd(this);
return this
});
aG("row().child.isShown()",function(){var h=this.context;
return h.length&&this.length?h[0].aoData[this[0]]._detailsShow||!1:!1
});
var a8=/^([^:]+):(name|visIdx|visible)$/,bI=function(k,h,s,r,o){for(var s=[],r=0,m=o.length;
r<m;
r++){s.push(bA(k,o[r],h))
}return s
};
aG("columns()",function(k,h){k===aK?k="":aO.isPlainObject(k)&&(h=k,k="");
var h=by(h),m=this.iterator("table",function(w){var v=k,u=h,s=w.aoColumns,o=bv(s,"sName"),r=bv(s,"nTh");
return b4("column",v,function(z){var y=bX(z);
if(z===""){return a3(s.length)
}if(y!==null){return[y>=0?y:s.length+y]
}if(typeof z==="function"){var B=bQ(w,u);
return aO.map(s,function(C,D){return z(D,bI(w,D,0,0,B),r[D])?D:null
})
}var A=typeof z==="string"?z.match(a8):"";
if(A){switch(A[2]){case"visIdx":case"visible":y=parseInt(A[1],10);
if(y<0){var x=aO.map(s,function(D,C){return D.bVisible?C:null
});
return[x[x.length+y]]
}return[aZ(w,y)];
case"name":return aO.map(o,function(D,C){return D===A[1]?C:null
});
default:return[]
}}if(z.nodeName&&z._DT_CellIndex){return[z._DT_CellIndex.column]
}y=aO(r).filter(z).map(function(){return aO.inArray(this,r)
}).toArray();
if(y.length||!z.nodeName){return y
}y=aO(z).closest("*[data-dt-column]");
return y.length?[y.data("dt-column")]:[]
},w,u)
},1);
m.selector.cols=k;
m.selector.opts=h;
return m
});
aD("columns().header()","column().header()",function(){return this.iterator("column",function(k,h){return k.aoColumns[h].nTh
},1)
});
aD("columns().footer()","column().footer()",function(){return this.iterator("column",function(k,h){return k.aoColumns[h].nTf
},1)
});
aD("columns().data()","column().data()",function(){return this.iterator("column-rows",bI,1)
});
aD("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(k,h){return k.aoColumns[h].mData
},1)
});
aD("columns().cache()","column().cache()",function(h){return this.iterator("column-rows",function(k,s,r,o,m){return aM(k.aoData,m,"search"===h?"_aFilterData":"_aSortData",s)
},1)
});
aD("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(k,h,r,o,m){return aM(k.aoData,m,"anCells",h)
},1)
});
aD("columns().visible()","column().visible()",function(k,h){var m=this.iterator("column",function(z,y){if(k===aK){return z.aoColumns[y].bVisible
}var x=z.aoColumns,w=x[y],u=z.aoData,v,o,s;
if(k!==aK&&w.bVisible!==k){if(k){var r=aO.inArray(!0,bv(x,"bVisible"),y+1);
v=0;
for(o=u.length;
v<o;
v++){s=u[v].nTr,x=u[v].anCells,s&&s.insertBefore(x[y],x[r]||null)
}}else{aO(bv(z.aoData,"anCells",y)).detach()
}w.bVisible=k;
j(z,z.aoHeader);
j(z,z.aoFooter);
c(z)
}});
k!==aK&&(this.iterator("column",function(r,o){aF(r,null,"column-visibility",[r,o,k,h])
}),(h===aK||h)&&this.columns.adjust());
return m
});
aD("columns().indexes()","column().index()",function(h){return this.iterator("column",function(k,m){return"visible"===h?bV(k,m):m
},1)
});
aG("columns.adjust()",function(){return this.iterator("table",function(h){a1(h)
},1)
});
aG("column.index()",function(k,h){if(0!==this.context.length){var m=this.context[0];
if("fromVisible"===k||"toData"===k){return aZ(m,h)
}if("fromData"===k||"toVisible"===k){return bV(m,h)
}}});
aG("column()",function(k,h){return bL(this.columns(k,h))
});
aG("cells()",function(y,x,w){aO.isPlainObject(y)&&(y.row===aK?(w=y,y=null):(w=x,x=null));
aO.isPlainObject(x)&&(w=x,x=null);
if(null===x||x===aK){return this.iterator("table",function(L){var J=y,I=by(w),H=L.aoData,G=bQ(L,I),E=au(aM(H,G,"anCells")),F=aO([].concat.apply([],E)),D,B=L.aoColumns.length,C,A,N,Q,z,M;
return b4("cell",J,function(R){var S=typeof R==="function";
if(R===null||R===aK||S){C=[];
A=0;
for(N=G.length;
A<N;
A++){D=G[A];
for(Q=0;
Q<B;
Q++){z={row:D,column:Q};
if(S){M=H[D];
R(z,bA(L,D,Q),M.anCells?M.anCells[Q]:null)&&C.push(z)
}else{C.push(z)
}}}return C
}if(aO.isPlainObject(R)){return[R]
}S=F.filter(R).map(function(V,U){return{row:U._DT_CellIndex.row,column:U._DT_CellIndex.column}
}).toArray();
if(S.length||!R.nodeName){return S
}M=aO(R).closest("*[data-dt-row]");
return M.length?[{row:M.data("dt-row"),column:M.data("dt-column")}]:[]
},L,I)
})
}var v=this.columns(x,w),u=this.rows(y,w),s,r,m,o,h,k=this.iterator("table",function(A,z){s=[];
r=0;
for(m=u[z].length;
r<m;
r++){o=0;
for(h=v[z].length;
o<h;
o++){s.push({row:u[z][r],column:v[z][o]})
}}return s
},1);
aO.extend(k.selector,{cols:x,rows:y,opts:w});
return k
});
aD("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(k,h,m){return(k=k.aoData[h])&&k.anCells?k.anCells[m]:aK
},1)
});
aG("cells().data()",function(){return this.iterator("cell",function(k,h,m){return bA(k,h,m)
},1)
});
aD("cells().cache()","cell().cache()",function(h){h="search"===h?"_aFilterData":"_aSortData";
return this.iterator("cell",function(k,o,m){return k.aoData[o][h][m]
},1)
});
aD("cells().render()","cell().render()",function(h){return this.iterator("cell",function(k,o,m){return bA(k,o,m,h)
},1)
});
aD("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(k,h,m){return{row:h,column:m,columnVisible:bV(k,m)}
},1)
});
aD("cells().invalidate()","cell().invalidate()",function(h){return this.iterator("cell",function(k,o,m){aI(k,o,h,m)
})
});
aG("cell()",function(k,h,m){return bL(this.cells(k,h,m))
});
aG("cell().data()",function(k){var h=this.context,m=this[0];
if(k===aK){return h.length&&m.length?bA(h[0],m[0].row,m[0].column):aK
}aL(h[0],m[0].row,m[0].column,k);
aI(h[0],m[0].row,"data",m[0].column);
return this
});
aG("order()",function(k,h){var m=this.context;
if(k===aK){return 0!==m.length?m[0].aaSorting:aK
}"number"===typeof k?k=[[k,h]]:k.length&&!aO.isArray(k[0])&&(k=Array.prototype.slice.call(arguments));
return this.iterator("table",function(o){o.aaSorting=k.slice()
})
});
aG("order.listener()",function(k,h,m){return this.iterator("table",function(o){T(o,k,h,m)
})
});
aG("order.fixed()",function(k){if(!k){var h=this.context,h=h.length?h[0].aaSortingFixed:aK;
return aO.isArray(h)?{pre:h}:h
}return this.iterator("table",function(m){m.aaSortingFixed=aO.extend(!0,{},k)
})
});
aG(["columns().order()","column().order()"],function(k){var h=this;
return this.iterator("table",function(r,o){var m=[];
aO.each(h[o],function(s,u){m.push([u,k])
});
r.aaSorting=m
})
});
aG("search()",function(k,h,r,o){var m=this.context;
return k===aK?0!==m.length?m[0].oPreviousSearch.sSearch:aK:this.iterator("table",function(s){s.oFeatures.bFilter&&b7(s,aO.extend({},s.oPreviousSearch,{sSearch:k+"",bRegex:null===h?!1:h,bSmart:null===r?!0:r,bCaseInsensitive:null===o?!0:o}),1)
})
});
aD("columns().search()","column().search()",function(k,h,o,m){return this.iterator("column",function(u,s){var r=u.aoPreSearchCols;
if(k===aK){return r[s].sSearch
}u.oFeatures.bFilter&&(aO.extend(r[s],{sSearch:k+"",bRegex:null===h?!1:h,bSmart:null===o?!0:o,bCaseInsensitive:null===m?!0:m}),b7(u,u.oPreviousSearch,1))
})
});
aG("state()",function(){return this.context.length?this.context[0].oSavedState:null
});
aG("state.clear()",function(){return this.iterator("table",function(h){h.fnStateSaveCallback.call(h.oInstance,h,{})
})
});
aG("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null
});
aG("state.save()",function(){return this.iterator("table",function(h){c(h)
})
});
aJ.versionCheck=aJ.fnVersionCheck=function(k){for(var h=aJ.version.split("."),k=k.split("."),s,r,o=0,m=k.length;
o<m;
o++){if(s=parseInt(h[o],10)||0,r=parseInt(k[o],10)||0,s!==r){return s>r
}}return !0
};
aJ.isDataTable=aJ.fnIsDataTable=function(k){var h=aO(k).get(0),m=!1;
if(k instanceof aJ.Api){return !0
}aO.each(aJ.settings,function(o,u){var s=u.nScrollHead?aO("table",u.nScrollHead)[0]:null,r=u.nScrollFoot?aO("table",u.nScrollFoot)[0]:null;
if(u.nTable===h||s===h||r===h){m=!0
}});
return m
};
aJ.tables=aJ.fnTables=function(k){var h=!1;
aO.isPlainObject(k)&&(h=k.api,k=k.visible);
var m=aO.map(aJ.settings,function(o){if(!k||k&&aO(o.nTable).is(":visible")){return o.nTable
}});
return h?new aE(m):m
};
aJ.camelToHungarian=bm;
aG("$()",function(k,h){var m=this.rows(h).nodes(),m=aO(m);
return aO([].concat(m.filter(k).toArray(),m.find(k).toArray()))
});
aO.each(["on","one","off"],function(k,h){aG(h+"()",function(){var m=Array.prototype.slice.call(arguments);
m[0]=aO.map(m[0].split(/\s/),function(r){return !r.match(/\.dt\b/)?r+".dt":r
}).join(" ");
var o=aO(this.tables().nodes());
o[h].apply(o,m);
return this
})
});
aG("clear()",function(){return this.iterator("table",function(h){bu(h)
})
});
aG("settings()",function(){return new aE(this.context,this.context)
});
aG("init()",function(){var h=this.context;
return h.length?h[0].oInit:null
});
aG("data()",function(){return this.iterator("table",function(h){return bv(h.aoData,"_aData")
}).flatten()
});
aG("destroy()",function(h){h=h||!1;
return this.iterator("table",function(B){var A=B.nTableWrapper.parentNode,z=B.oClasses,y=B.nTable,x=B.nTBody,w=B.nTHead,u=B.nTFoot,v=aO(y),x=aO(x),s=aO(B.nTableWrapper),r=aO.map(B.aoData,function(k){return k.nTr
}),m;
B.bDestroying=!0;
aF(B,"aoDestroyCallback","destroy",[B]);
h||(new aE(B)).columns().visible(!0);
s.off(".DT").find(":not(tbody *)").off(".DT");
aO(bt).off(".DT-"+B.sInstance);
y!=w.parentNode&&(v.children("thead").detach(),v.append(w));
u&&y!=u.parentNode&&(v.children("tfoot").detach(),v.append(u));
B.aaSorting=[];
B.aaSortingFixed=[];
af(B);
aO(r).removeClass(B.asStripeClasses.join(" "));
aO("th, td",w).removeClass(z.sSortable+" "+z.sSortableAsc+" "+z.sSortableDesc+" "+z.sSortableNone);
x.children().detach();
x.append(r);
w=h?"remove":"detach";
v[w]();
s[w]();
!h&&A&&(A.insertBefore(y,B.nTableReinsertBefore),v.css("width",B.sDestroyWidth).removeClass(z.sTable),(m=B.asDestroyStripes.length)&&x.children().each(function(k){aO(this).addClass(B.asDestroyStripes[k%m])
}));
A=aO.inArray(B,aJ.settings);
-1!==A&&aJ.settings.splice(A,1)
})
});
aO.each(["column","row","cell"],function(k,h){aG(h+"s().every()",function(m){var r=this.selector.opts,o=this;
return this.iterator(h,function(w,v,u,s,x){m.call(o[h](v,"cell"===h?u:r,"cell"===h?r:aK),v,u,s,x)
})
})
});
aG("i18n()",function(k,h,o){var m=this.context[0],k=a9(k)(m.oLanguage);
k===aK&&(k=h);
o!==aK&&aO.isPlainObject(k)&&(k=k[o]!==aK?k[o]:k._);
return k.replace("%d",o)
});
aJ.version="1.10.16";
aJ.settings=[];
aJ.models={};
aJ.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};
aJ.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1};
aJ.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};
aJ.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(h){return h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)
},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(k){try{return JSON.parse((-1===k.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+k.sInstance+"_"+location.pathname))
}catch(h){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(k,h){try{(-1===k.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+k.sInstance+"_"+location.pathname,JSON.stringify(h))
}catch(m){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:aO.extend({},aJ.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};
a2(aJ.defaults);
aJ.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};
a2(aJ.defaults.column);
aJ.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:aK,oAjaxData:aK,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==ay(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length
},fnRecordsDisplay:function(){return"ssp"==ay(this)?1*this._iRecordsDisplay:this.aiDisplay.length
},fnDisplayEnd:function(){var k=this._iDisplayLength,h=this._iDisplayStart,s=h+k,r=this.aiDisplay.length,o=this.oFeatures,m=o.bPaginate;
return o.bServerSide?!1===m||-1===k?h+r:Math.min(h+k,this._iRecordsDisplay):!m||s>r||-1===k?r:s
},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};
aJ.ext=aA={buttons:{},classes:{},build:"bs/jszip-2.5.0/pdfmake-0.1.32/dt-1.10.16/b-1.4.2/b-colvis-1.4.2/b-html5-1.4.2/cr-1.4.1/fc-3.2.3/fh-3.1.3/kt-2.3.2/r-2.2.0/rg-1.0.2/rr-1.2.3/sc-1.4.3/sl-1.2.3",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:aJ.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:aJ.version};
aO.extend(aA,{afnFiltering:aA.search,aTypes:aA.type.detect,ofnSearch:aA.type.search,oSort:aA.type.order,afnSortData:aA.order,aoFeatures:aA.feature,oApi:aA.internal,oStdClasses:aA.classes,oPagination:aA.pager});
aO.extend(aJ.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});
var ap=aJ.ext.pager;
aO.extend(ap,{simple:function(){return["previous","next"]
},full:function(){return["first","previous","next","last"]
},numbers:function(k,h){return[bj(k,h)]
},simple_numbers:function(k,h){return["previous",bj(k,h),"next"]
},full_numbers:function(k,h){return["first","previous",bj(k,h),"next","last"]
},first_last_numbers:function(k,h){return["first",bj(k,h),"last"]
},_numbers:bj,numbers_length:7});
aO.extend(!0,aJ.ext.renderer,{pageButton:{_:function(E,D,C,B,A,z){var y=E.oClasses,w=E.oLanguage.oPaginate,x=E.oLanguage.oAria.paginate||{},k,v,r=0,h=function(m,M){var H,J,I,L,o=function(s){d(E,s.data.action,true)
};
H=0;
for(J=M.length;
H<J;
H++){L=M[H];
if(aO.isArray(L)){I=aO("<"+(L.DT_el||"div")+"/>").appendTo(m);
h(I,L)
}else{k=null;
v="";
switch(L){case"ellipsis":m.append('<span class="ellipsis">&#x2026;</span>');
break;
case"first":k=w.sFirst;
v=L+(A>0?"":" "+y.sPageButtonDisabled);
break;
case"previous":k=w.sPrevious;
v=L+(A>0?"":" "+y.sPageButtonDisabled);
break;
case"next":k=w.sNext;
v=L+(A<z-1?"":" "+y.sPageButtonDisabled);
break;
case"last":k=w.sLast;
v=L+(A<z-1?"":" "+y.sPageButtonDisabled);
break;
default:k=L+1;
v=A===L?y.sPageButtonActive:""
}if(k!==null){I=aO("<a>",{"class":y.sPageButton+" "+v,"aria-controls":E.sTableId,"aria-label":x[L],"data-dt-idx":r,tabindex:E.iTabIndex,id:C===0&&typeof L==="string"?E.sTableId+"_"+L:null}).html(k).appendTo(m);
a0(I,{action:L},o);
r++
}}}},G;
try{G=aO(D).find(bp.activeElement).data("dt-idx")
}catch(F){}h(aO(D).empty(),B);
G!==aK&&aO(D).find("[data-dt-idx="+G+"]").focus()
}}});
aO.extend(aJ.ext.type.detect,[function(k,h){var m=h.oLanguage.sDecimal;
return f(k,m)?"num"+m:null
},function(k){if(k&&!(k instanceof Date)&&!b3.test(k)){return null
}var h=Date.parse(k);
return null!==h&&!isNaN(h)||bh(k)?"date":null
},function(k,h){var m=h.oLanguage.sDecimal;
return f(k,m,!0)?"num-fmt"+m:null
},function(k,h){var m=h.oLanguage.sDecimal;
return aV(k,m)?"html-num"+m:null
},function(k,h){var m=h.oLanguage.sDecimal;
return aV(k,m,!0)?"html-num-fmt"+m:null
},function(h){return bh(h)||"string"===typeof h&&-1!==h.indexOf("<")?"html":null
}]);
aO.extend(aJ.ext.type.search,{html:function(h){return bh(h)?h:"string"===typeof h?h.replace(cg," ").replace(b8,""):""
},string:function(h){return bh(h)?h:"string"===typeof h?h.replace(cg," "):h
}});
var bH=function(k,h,o,m){if(0!==k&&(!k||"-"===k)){return -Infinity
}h&&(k=bD(k,h));
k.replace&&(o&&(k=k.replace(o,"")),m&&(k=k.replace(m,"")));
return 1*k
};
aO.extend(aA.type.order,{"date-pre":function(h){return Date.parse(h)||-Infinity
},"html-pre":function(h){return bh(h)?"":h.replace?h.replace(/<.*?>/g,"").toLowerCase():h+""
},"string-pre":function(h){return bh(h)?"":"string"===typeof h?h.toLowerCase():!h.toString?"":h.toString()
},"string-asc":function(k,h){return k<h?-1:k>h?1:0
},"string-desc":function(k,h){return k<h?1:k>h?-1:0
}});
aH("");
aO.extend(!0,aJ.ext.renderer,{header:{_:function(k,h,o,m){aO(k.nTable).on("order.dt.DT",function(v,u,s,r){if(k===u){v=o.idx;
h.removeClass(o.sSortingClass+" "+m.sSortAsc+" "+m.sSortDesc).addClass(r[v]=="asc"?m.sSortAsc:r[v]=="desc"?m.sSortDesc:o.sSortingClass)
}})
},jqueryui:function(k,h,o,m){aO("<div/>").addClass(m.sSortJUIWrapper).append(h.contents()).append(aO("<span/>").addClass(m.sSortIcon+" "+o.sSortingClassJUI)).appendTo(h);
aO(k.nTable).on("order.dt.DT",function(v,u,s,r){if(k===u){v=o.idx;
h.removeClass(m.sSortAsc+" "+m.sSortDesc).addClass(r[v]=="asc"?m.sSortAsc:r[v]=="desc"?m.sSortDesc:o.sSortingClass);
h.find("span."+m.sSortIcon).removeClass(m.sSortJUIAsc+" "+m.sSortJUIDesc+" "+m.sSortJUI+" "+m.sSortJUIAscAllowed+" "+m.sSortJUIDescAllowed).addClass(r[v]=="asc"?m.sSortJUIAsc:r[v]=="desc"?m.sSortJUIDesc:o.sSortingClassJUI)
}})
}}});
var aY=function(h){return"string"===typeof h?h.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):h
};
aJ.render={number:function(k,h,r,o,m){return{display:function(v){if("number"!==typeof v&&"string"!==typeof v){return v
}var u=0>v?"-":"",s=parseFloat(v);
if(isNaN(s)){return aY(v)
}s=s.toFixed(r);
v=Math.abs(s);
s=parseInt(v,10);
v=r?h+(v-s).toFixed(r).substring(2):"";
return u+(o||"")+s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,k)+v+(m||"")
}}
},text:function(){return{display:aY}
}};
aO.extend(aJ.ext.internal,{_fnExternApiFunc:P,_fnBuildAjax:bY,_fnAjaxUpdate:l,_fnAjaxParameters:bC,_fnAjaxUpdateDraw:aU,_fnAjaxDataSrc:bE,_fnAddColumn:aP,_fnColumnOptions:am,_fnAdjustColumnSizing:a1,_fnVisibleToColumnIndex:aZ,_fnColumnIndexToVisible:bV,_fnVisbleColumns:bM,_fnGetColumns:cd,_fnColumnTypes:t,_fnApplyColumnDefs:bi,_fnHungarianMap:a2,_fnCamelToHungarian:bm,_fnLanguageCompat:bn,_fnBrowserDetect:b5,_fnAddData:bg,_fnAddTr:bT,_fnNodeToDataIndex:function(k,h){return h._DT_RowIndex!==aK?h._DT_RowIndex:null
},_fnNodeToColumnIndex:function(k,h,m){return aO.inArray(m,k.aoData[h].anCells)
},_fnGetCellData:bA,_fnSetCellData:aL,_fnSplitObjNotation:bx,_fnGetObjectDataFn:a9,_fnSetObjectDataFn:a7,_fnGetDataMaster:aT,_fnClearTable:bu,_fnDeleteIndex:aS,_fnInvalidate:aI,_fnGetRowElements:bU,_fnCreateTr:ce,_fnBuildHead:ak,_fnDrawHead:j,_fnDraw:bf,_fnReDraw:a6,_fnAddOptionsHtml:bR,_fnDetectHeader:aj,_fnGetUniqueThs:ch,_fnFeatureHtmlFilter:aQ,_fnFilterComplete:b7,_fnFilterCustom:a,_fnFilterColumn:ad,_fnFilter:ar,_fnFilterCreateSearch:bF,_fnEscapeRegex:aX,_fnFilterData:b0,_fnFeatureHtmlInfo:cf,_fnUpdateInfo:bO,_fnInfoMacros:bl,_fnInitialise:bP,_fnInitComplete:aW,_fnLengthChange:av,_fnFeatureHtmlLength:br,_fnFeatureHtmlPaginate:bW,_fnPageChange:d,_fnFeatureHtmlProcessing:ao,_fnProcessingDisplay:bz,_fnFeatureHtmlTable:K,_fnScrollDraw:p,_fnApplyToChildren:bo,_fnCalculateColumnWidths:an,_fnThrottle:bZ,_fnConvertToWidth:aN,_fnGetWidestNode:al,_fnGetMaxLenString:n,_fnStringToCss:aC,_fnSortFlatten:a4,_fnSort:b9,_fnSortAria:bS,_fnSortListener:bJ,_fnSortAttachListener:T,_fnSortingClasses:af,_fnSortData:cc,_fnSaveState:c,_fnLoadState:bs,_fnSettingsFromNode:b2,_fnLog:bk,_fnMap:bq,_fnBindAction:a0,_fnCallbackReg:aw,_fnCallbackFire:aF,_fnLengthOverflow:ag,_fnRenderer:ci,_fnDataSource:ay,_fnRowAttributes:aq,_fnCalculateEnd:function(){}});
aO.fn.dataTable=aJ;
aJ.$=aO;
aO.fn.dataTableSettings=aJ.settings;
aO.fn.dataTableExt=aJ.ext;
aO.fn.DataTable=function(h){return aO(this).dataTable(h).api()
};
aO.each(aJ,function(k,h){aO.fn.DataTable[k]=h
});
return aO.fn.dataTable
});
/*!
 DataTables Bootstrap 3 integration
 ©2011-2015 SpryMedia Ltd - datatables.net/license
*/
(function(a){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(b){return a(b,window,document)
}):"object"===typeof exports?module.exports=function(b,c){b||(b=window);
if(!c||!c.fn.dataTable){c=require("datatables.net")(b,c).$
}return a(c,b,b.document)
}:a(jQuery,window,document)
})(function(e,g,j,c){var h=e.fn.dataTable;
e.extend(!0,h.defaults,{dom:"<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",renderer:"bootstrap"});
e.extend(h.ext.classes,{sWrapper:"dataTables_wrapper form-inline dt-bootstrap",sFilterInput:"form-control input-sm",sLengthSelect:"form-control input-sm",sProcessing:"dataTables_processing panel panel-default"});
h.ext.renderer.pageButton.bootstrap=function(C,z,b,G,x,m){var l=new h.Api(C),F=C.oClasses,w=C.oLanguage.oPaginate,E=C.oLanguage.oAria.paginate||{},B,A,f=0,d=function(r,p){var k,o,n,s,a=function(t){t.preventDefault();
!e(t.currentTarget).hasClass("disabled")&&l.page()!=t.data.action&&l.page(t.data.action).draw("page")
};
k=0;
for(o=p.length;
k<o;
k++){if(s=p[k],e.isArray(s)){d(r,s)
}else{A=B="";
switch(s){case"ellipsis":B="&#x2026;";
A="disabled";
break;
case"first":B=w.sFirst;
A=s+(0<x?"":" disabled");
break;
case"previous":B=w.sPrevious;
A=s+(0<x?"":" disabled");
break;
case"next":B=w.sNext;
A=s+(x<m-1?"":" disabled");
break;
case"last":B=w.sLast;
A=s+(x<m-1?"":" disabled");
break;
default:B=s+1,A=x===s?"active":""
}B&&(n=e("<li>",{"class":F.sPageButton+" "+A,id:0===b&&"string"===typeof s?C.sTableId+"_"+s:null}).append(e("<a>",{href:"#","aria-controls":C.sTableId,"aria-label":E[s],"data-dt-idx":f,tabindex:C.iTabIndex}).html(B)).appendTo(r),C.oApi._fnBindAction(n,{action:s},a),f++)
}}},y;
try{y=e(z).find(j.activeElement).data("dt-idx")
}catch(D){}d(e(z).empty().html('<ul class="pagination"/>').children("ul"),G);
y!==c&&e(z).find("[data-dt-idx="+y+"]").focus()
};
return h
});
/*!
 Buttons for DataTables 1.4.2
 ©2016-2017 SpryMedia Ltd - datatables.net/license
*/
(function(a){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(b){return a(b,window,document)
}):"object"===typeof exports?module.exports=function(c,b){c||(c=window);
if(!b||!b.fn.dataTable){b=require("datatables.net")(c,b).$
}return a(b,c,c.document)
}:a(jQuery,window,document)
})(function(k,c,b,f){var h=k.fn.dataTable,r=0,p=0,g=h.ext.buttons,e=function(j,d){"undefined"===typeof d&&(d={});
!0===d&&(d={});
k.isArray(d)&&(d={buttons:d});
this.c=k.extend(!0,{},e.defaults,d);
d.buttons&&(this.c.buttons=d.buttons);
this.s={dt:new h.Api(j),buttons:[],listenKeys:"",namespace:"dtb"+r++};
this.dom={container:k("<"+this.c.dom.container.tag+"/>").addClass(this.c.dom.container.className)};
this._constructor()
};
k.extend(e.prototype,{action:function(j,d){var l=this._nodeToButton(j);
if(d===f){return l.conf.action
}l.conf.action=d;
return this
},active:function(j,d){var m=this._nodeToButton(j),l=this.c.dom.button.active,m=k(m.node);
if(d===f){return m.hasClass(l)
}m.toggleClass(l,d===f?!0:d);
return this
},add:function(l,j){var s=this.s.buttons;
if("string"===typeof j){for(var n=j.split("-"),s=this.s,o=0,m=n.length-1;
o<m;
o++){s=s.buttons[1*n[o]]
}s=s.buttons;
j=1*n[n.length-1]
}this._expandButton(s,l,!1,j);
this._draw();
return this
},container:function(){return this.dom.container
},disable:function(d){d=this._nodeToButton(d);
k(d.node).addClass(this.c.dom.button.disabled);
return this
},destroy:function(){k("body").off("keyup."+this.s.namespace);
var j=this.s.buttons.slice(),d,l;
d=0;
for(l=j.length;
d<l;
d++){this.remove(j[d].node)
}this.dom.container.remove();
j=this.s.dt.settings()[0];
d=0;
for(l=j.length;
d<l;
d++){if(j.inst===this){j.splice(d,1);
break
}}return this
},enable:function(j,d){if(!1===d){return this.disable(j)
}var l=this._nodeToButton(j);
k(l.node).removeClass(this.c.dom.button.disabled);
return this
},name:function(){return this.c.name
},node:function(d){d=this._nodeToButton(d);
return k(d.node)
},processing:function(j,d){var l=this._nodeToButton(j);
if(d===f){return k(l.node).hasClass("processing")
}k(l.node).toggleClass("processing",d);
return this
},remove:function(j){var d=this._nodeToButton(j),n=this._nodeToHost(j),m=this.s.dt;
if(d.buttons.length){for(var l=d.buttons.length-1;
0<=l;
l--){this.remove(d.buttons[l].node)
}}d.conf.destroy&&d.conf.destroy.call(m.button(j),m,k(j),d.conf);
this._removeKey(d.conf);
k(d.node).remove();
j=k.inArray(d,n);
n.splice(j,1);
return this
},text:function(j,d){var s=this._nodeToButton(j),o=this.c.dom.collection.buttonLiner,o=s.inCollection&&o&&o.tag?o.tag:this.c.dom.buttonLiner.tag,m=this.s.dt,l=k(s.node),n=function(u){return"function"===typeof u?u(m,l,s.conf):u
};
if(d===f){return n(s.conf.text)
}s.conf.text=d;
o?l.children(o).html(n(d)):l.html(n(d));
return this
},_constructor:function(){var j=this,d=this.s.dt,n=d.settings()[0],m=this.c.buttons;
n._buttons||(n._buttons=[]);
n._buttons.push({inst:this,name:this.c.name});
for(var n=0,l=m.length;
n<l;
n++){this.add(m[n])
}d.on("destroy",function(){j.destroy()
});
k("body").on("keyup."+this.s.namespace,function(o){if(!b.activeElement||b.activeElement===b.body){var s=String.fromCharCode(o.keyCode).toLowerCase();
j.s.listenKeys.toLowerCase().indexOf(s)!==-1&&j._keypress(s,o)
}})
},_addKey:function(d){d.key&&(this.s.listenKeys+=k.isPlainObject(d.key)?d.key.key:d.key)
},_draw:function(j,d){j||(j=this.dom.container,d=this.s.buttons);
j.children().detach();
for(var m=0,l=d.length;
m<l;
m++){j.append(d[m].inserter),j.append(" "),d[m].buttons&&d[m].buttons.length&&this._draw(d[m].collection,d[m].buttons)
}},_expandButton:function(w,v,u,s){for(var n=this.s.dt,m=0,v=!k.isArray(v)?[v]:v,o=0,d=v.length;
o<d;
o++){var l=this._resolveExtends(v[o]);
if(l){if(k.isArray(l)){this._expandButton(w,l,u,s)
}else{var j=this._buildButton(l,u);
if(j){s!==f?(w.splice(s,0,j),s++):w.push(j);
if(j.conf.buttons){var x=this.c.dom.collection;
j.collection=k("<"+x.tag+"/>").addClass(x.className).attr("role","menu");
j.conf._collection=j.collection;
this._expandButton(j.buttons,j.conf.buttons,!0,s)
}l.init&&l.init.call(n.button(j.node),n,k(j.node),l);
m++
}}}}},_buildButton:function(v,u){var s=this.c.dom.button,o=this.c.dom.buttonLiner,m=this.c.dom.collection,l=this.s.dt,n=function(w){return"function"===typeof w?w(l,j,v):w
};
u&&m.button&&(s=m.button);
u&&m.buttonLiner&&(o=m.buttonLiner);
if(v.available&&!v.available(l,v)){return !1
}var d=function(x,w,B,A){A.action.call(w.button(B),x,w,B,A);
k(w.table().node()).triggerHandler("buttons-action.dt",[w.button(B),w,B,A])
},j=k("<"+s.tag+"/>").addClass(s.className).attr("tabindex",this.s.dt.settings()[0].iTabIndex).attr("aria-controls",this.s.dt.table().node().id).on("click.dtb",function(w){w.preventDefault();
!j.hasClass(s.disabled)&&v.action&&d(w,l,j,v);
j.blur()
}).on("keyup.dtb",function(w){w.keyCode===13&&!j.hasClass(s.disabled)&&v.action&&d(w,l,j,v)
});
"a"===s.tag.toLowerCase()&&j.attr("href","#");
o.tag?(m=k("<"+o.tag+"/>").html(n(v.text)).addClass(o.className),"a"===o.tag.toLowerCase()&&m.attr("href","#"),j.append(m)):j.html(n(v.text));
!1===v.enabled&&j.addClass(s.disabled);
v.className&&j.addClass(v.className);
v.titleAttr&&j.attr("title",n(v.titleAttr));
v.namespace||(v.namespace=".dt-button-"+p++);
o=(o=this.c.dom.buttonContainer)&&o.tag?k("<"+o.tag+"/>").addClass(o.className).append(j):j;
this._addKey(v);
return{conf:v,node:j.get(0),inserter:o,buttons:[],inCollection:u,collection:null}
},_nodeToButton:function(l,j){j||(j=this.s.buttons);
for(var o=0,m=j.length;
o<m;
o++){if(j[o].node===l){return j[o]
}if(j[o].buttons.length){var n=this._nodeToButton(l,j[o].buttons);
if(n){return n
}}}},_nodeToHost:function(l,j){j||(j=this.s.buttons);
for(var o=0,m=j.length;
o<m;
o++){if(j[o].node===l){return j
}if(j[o].buttons.length){var n=this._nodeToHost(l,j[o].buttons);
if(n){return n
}}}},_keypress:function(j,d){var l=function(u){for(var o=0,m=u.length;
o<m;
o++){var s=u[o].conf,n=u[o].node;
if(s.key){if(s.key===j){k(n).click()
}else{if(k.isPlainObject(s.key)&&s.key.key===j&&(!s.key.shiftKey||d.shiftKey)){if(!s.key.altKey||d.altKey){if(!s.key.ctrlKey||d.ctrlKey){(!s.key.metaKey||d.metaKey)&&k(n).click()
}}}}}u[o].buttons.length&&l(u[o].buttons)
}};
l(this.s.buttons)
},_removeKey:function(j){if(j.key){var d=k.isPlainObject(j.key)?j.key.key:j.key,j=this.s.listenKeys.split(""),d=k.inArray(d,j);
j.splice(d,1);
this.s.listenKeys=j.join("")
}},_resolveExtends:function(j){for(var d=this.s.dt,s,o,m=function(v){for(var u=0;
!k.isPlainObject(v)&&!k.isArray(v);
){if(v===f){return
}if("function"===typeof v){if(v=v(d,j),!v){return !1
}}else{if("string"===typeof v){if(!g[v]){throw"Unknown button type: "+v
}v=g[v]
}}u++;
if(30<u){throw"Buttons: Too many iterations"
}}return k.isArray(v)?v:k.extend({},v)
},j=m(j);
j&&j.extend;
){if(!g[j.extend]){throw"Cannot extend unknown button type: "+j.extend
}var l=m(g[j.extend]);
if(k.isArray(l)){return l
}if(!l){return !1
}s=l.className;
j=k.extend({},l,j);
s&&j.className!==s&&(j.className=s+" "+j.className);
var n=j.postfixButtons;
if(n){j.buttons||(j.buttons=[]);
s=0;
for(o=n.length;
s<o;
s++){j.buttons.push(n[s])
}j.postfixButtons=null
}if(n=j.prefixButtons){j.buttons||(j.buttons=[]);
s=0;
for(o=n.length;
s<o;
s++){j.buttons.splice(s,0,n[s])
}j.prefixButtons=null
}j.extend=l.extend
}return j
}});
e.background=function(j,d,l){l===f&&(l=400);
j?k("<div/>").addClass(d).css("display","none").appendTo("body").fadeIn(l):k("body > div."+d).fadeOut(l,function(){k(this).removeClass(d).remove()
})
};
e.instanceSelector=function(j,d){if(!j){return k.map(d,function(o){return o.inst
})
}var n=[],m=k.map(d,function(o){return o.name
}),l=function(o){if(k.isArray(o)){for(var u=0,s=o.length;
u<s;
u++){l(o[u])
}}else{"string"===typeof o?-1!==o.indexOf(",")?l(o.split(",")):(o=k.inArray(k.trim(o),m),-1!==o&&n.push(d[o].inst)):"number"===typeof o&&n.push(d[o].inst)
}};
l(j);
return n
};
e.buttonSelector=function(j,d){for(var s=[],o=function(v,u,C){for(var B,x,A=0,w=u.length;
A<w;
A++){if(B=u[A]){x=C!==f?C+A:A+"",v.push({node:B.node,name:B.conf.name,idx:x}),B.buttons&&o(v,B.buttons,x+"-")
}}},m=function(v,u){var B,A,x=[];
o(x,u.s.buttons);
B=k.map(x,function(C){return C.node
});
if(k.isArray(v)||v instanceof k){B=0;
for(A=v.length;
B<A;
B++){m(v[B],u)
}}else{if(null===v||v===f||"*"===v){B=0;
for(A=x.length;
B<A;
B++){s.push({inst:u,node:x[B].node})
}}else{if("number"===typeof v){s.push({inst:u,node:u.s.buttons[v].node})
}else{if("string"===typeof v){if(-1!==v.indexOf(",")){x=v.split(",");
B=0;
for(A=x.length;
B<A;
B++){m(k.trim(x[B]),u)
}}else{if(v.match(/^\d+(\-\d+)*$/)){B=k.map(x,function(C){return C.idx
}),s.push({inst:u,node:x[k.inArray(v,B)].node})
}else{if(-1!==v.indexOf(":name")){var w=v.replace(":name","");
B=0;
for(A=x.length;
B<A;
B++){x[B].name===w&&s.push({inst:u,node:x[B].node})
}}else{k(B).filter(v).each(function(){s.push({inst:u,node:this})
})
}}}}else{"object"===typeof v&&v.nodeName&&(x=k.inArray(v,B),-1!==x&&s.push({inst:u,node:B[x]}))
}}}}},l=0,n=j.length;
l<n;
l++){m(d,j[l])
}return s
};
e.defaults={buttons:["copy","excel","csv","pdf","print"],name:"main",tabIndex:0,dom:{container:{tag:"div",className:"dt-buttons"},collection:{tag:"div",className:"dt-button-collection"},button:{tag:"a",className:"dt-button",active:"active",disabled:"disabled"},buttonLiner:{tag:"span",className:""}}};
e.version="1.4.2";
k.extend(g,{collection:{text:function(d){return d.i18n("buttons.collection","Collection")
},className:"buttons-collection",action:function(j,d,s,o){var j=s.offset(),m=k(d.table().container()),l=!1;
k("div.dt-button-background").length&&(l=k(".dt-button-collection").offset(),k("body").trigger("click.dtb-collection"));
o._collection.addClass(o.collectionLayout).css("display","none").appendTo("body").fadeIn(o.fade);
var n=o._collection.css("position");
l&&"absolute"===n?o._collection.css({top:l.top,left:l.left}):"absolute"===n?(o._collection.css({top:j.top+s.outerHeight(),left:j.left}),l=m.offset().top+m.height(),s=j.top+s.outerHeight()+o._collection.outerHeight()-l,l=j.top-o._collection.outerHeight(),l=m.offset().top-l,s>l&&o._collection.css("top",j.top-o._collection.outerHeight()-5),s=j.left+o._collection.outerWidth(),m=m.offset().left+m.width(),s>m&&o._collection.css("left",j.left-(s-m))):(j=o._collection.height()/2,j>k(c).height()/2&&(j=k(c).height()/2),o._collection.css("marginTop",-1*j));
o.background&&e.background(!0,o.backgroundClassName,o.fade);
setTimeout(function(){k("div.dt-button-background").on("click.dtb-collection",function(){});
k("body").on("click.dtb-collection",function(u){var v=k.fn.addBack?"addBack":"andSelf";
if(!k(u.target).parents()[v]().filter(o._collection).length){o._collection.fadeOut(o.fade,function(){o._collection.detach()
});
k("div.dt-button-background").off("click.dtb-collection");
e.background(false,o.backgroundClassName,o.fade);
k("body").off("click.dtb-collection");
d.off("buttons-action.b-internal")
}})
},10);
if(o.autoClose){d.on("buttons-action.b-internal",function(){k("div.dt-button-background").click()
})
}},background:!0,collectionLayout:"",backgroundClassName:"dt-button-background",autoClose:!1,fade:400},copy:function(j,d){if(g.copyHtml5){return"copyHtml5"
}if(g.copyFlash&&g.copyFlash.available(j,d)){return"copyFlash"
}},csv:function(j,d){if(g.csvHtml5&&g.csvHtml5.available(j,d)){return"csvHtml5"
}if(g.csvFlash&&g.csvFlash.available(j,d)){return"csvFlash"
}},excel:function(j,d){if(g.excelHtml5&&g.excelHtml5.available(j,d)){return"excelHtml5"
}if(g.excelFlash&&g.excelFlash.available(j,d)){return"excelFlash"
}},pdf:function(j,d){if(g.pdfHtml5&&g.pdfHtml5.available(j,d)){return"pdfHtml5"
}if(g.pdfFlash&&g.pdfFlash.available(j,d)){return"pdfFlash"
}},pageLength:function(j){var j=j.settings()[0].aLengthMenu,d=k.isArray(j[0])?j[0]:j,m=k.isArray(j[0])?j[1]:j,l=function(n){return n.i18n("buttons.pageLength",{"-1":"Show all rows",_:"Show %d rows"},n.page.len())
};
return{extend:"collection",text:l,className:"buttons-page-length",autoClose:!0,buttons:k.map(d,function(o,n){return{text:m[n],className:"button-page-length",action:function(s,u){u.page.len(o).draw()
},init:function(s,w,v){var u=this,w=function(){u.active(s.page.len()===o)
};
s.on("length.dt"+v.namespace,w);
w()
},destroy:function(u,s,v){u.off("length.dt"+v.namespace)
}}
}),init:function(o,n,u){var s=this;
o.on("length.dt"+u.namespace,function(){s.text(l(o))
})
},destroy:function(o,n,s){o.off("length.dt"+s.namespace)
}}
}});
h.Api.register("buttons()",function(j,d){d===f&&(d=j,j=f);
this.selector.buttonGroup=j;
var l=this.iterator(!0,"table",function(m){if(m._buttons){return e.buttonSelector(e.instanceSelector(j,m._buttons),d)
}},!0);
l._groupSelector=j;
return l
});
h.Api.register("button()",function(j,d){var l=this.buttons(j,d);
1<l.length&&l.splice(1,l.length);
return l
});
h.Api.registerPlural("buttons().active()","button().active()",function(d){return d===f?this.map(function(j){return j.inst.active(j.node)
}):this.each(function(j){j.inst.active(j.node,d)
})
});
h.Api.registerPlural("buttons().action()","button().action()",function(d){return d===f?this.map(function(j){return j.inst.action(j.node)
}):this.each(function(j){j.inst.action(j.node,d)
})
});
h.Api.register(["buttons().enable()","button().enable()"],function(d){return this.each(function(j){j.inst.enable(j.node,d)
})
});
h.Api.register(["buttons().disable()","button().disable()"],function(){return this.each(function(d){d.inst.disable(d.node)
})
});
h.Api.registerPlural("buttons().nodes()","button().node()",function(){var d=k();
k(this.each(function(j){d=d.add(j.inst.node(j.node))
}));
return d
});
h.Api.registerPlural("buttons().processing()","button().processing()",function(d){return d===f?this.map(function(j){return j.inst.processing(j.node)
}):this.each(function(j){j.inst.processing(j.node,d)
})
});
h.Api.registerPlural("buttons().text()","button().text()",function(d){return d===f?this.map(function(j){return j.inst.text(j.node)
}):this.each(function(j){j.inst.text(j.node,d)
})
});
h.Api.registerPlural("buttons().trigger()","button().trigger()",function(){return this.each(function(d){d.inst.node(d.node).trigger("click")
})
});
h.Api.registerPlural("buttons().containers()","buttons().container()",function(){var j=k(),d=this._groupSelector;
this.iterator(!0,"table",function(n){if(n._buttons){for(var n=e.instanceSelector(d,n._buttons),m=0,l=n.length;
m<l;
m++){j=j.add(n[m].container())
}}});
return j
});
h.Api.register("button().add()",function(j,d){var l=this.context;
l.length&&(l=e.instanceSelector(this._groupSelector,l[0]._buttons),l.length&&l[0].add(d,j));
return this.button(this._groupSelector,j)
});
h.Api.register("buttons().destroy()",function(){this.pluck("inst").unique().each(function(d){d.destroy()
});
return this
});
h.Api.registerPlural("buttons().remove()","buttons().remove()",function(){this.each(function(d){d.inst.remove(d.node)
});
return this
});
var a;
h.Api.register("buttons.info()",function(j,d,m){var l=this;
if(!1===j){return k("#datatables_buttons_info").fadeOut(function(){k(this).remove()
}),clearTimeout(a),a=null,this
}a&&clearTimeout(a);
k("#datatables_buttons_info").length&&k("#datatables_buttons_info").remove();
k('<div id="datatables_buttons_info" class="dt-button-info"/>').html(j?"<h2>"+j+"</h2>":"").append(k("<div/>")["string"===typeof d?"html":"append"](d)).css("display","none").appendTo("body").fadeIn();
m!==f&&0!==m&&(a=setTimeout(function(){l.buttons.info(!1)
},m));
return this
});
h.Api.register("buttons.exportData()",function(H){if(this.context.length){for(var G=new h.Api(this.context[0]),F=k.extend(!0,{},{rows:null,columns:"",modifier:{search:"applied",order:"applied"},orthogonal:"display",stripHtml:!0,stripNewlines:!0,decodeEntities:!0,trim:!0,format:{header:function(j){return E(j)
},footer:function(j){return E(j)
},body:function(j){return E(j)
}}},H),E=function(j){if("string"!==typeof j){return j
}j=j.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"");
F.stripHtml&&(j=j.replace(/<[^>]*>/g,""));
F.trim&&(j=j.replace(/^\s+|\s+$/g,""));
F.stripNewlines&&(j=j.replace(/\n/g," "));
F.decodeEntities&&(y.innerHTML=j,j=y.value);
return j
},H=G.columns(F.columns).indexes().map(function(j){var l=G.column(j).header();
return F.format.header(l.innerHTML,j,l)
}).toArray(),C=G.table().footer()?G.columns(F.columns).indexes().map(function(j){var l=G.column(j).footer();
return F.format.footer(l?l.innerHTML:"",j,l)
}).toArray():null,B=G.rows(F.rows,F.modifier).indexes().toArray(),D=G.cells(B,F.columns),B=D.render(F.orthogonal).toArray(),D=D.nodes().toArray(),A=H.length,x=0<A?B.length/A:0,w=Array(x),v=0,u=0;
u<x;
u++){for(var s=Array(A),d=0;
d<A;
d++){s[d]=F.format.body(B[v],u,d,D[v]),v++
}w[u]=s
}return{header:H,footer:C,body:w}
}});
h.Api.register("buttons.exportInfo()",function(j){j||(j={});
var d;
var l=j;
d="*"===l.filename&&"*"!==l.title&&l.title!==f?l.title:l.filename;
"function"===typeof d&&(d=d());
d===f||null===d?d=null:(-1!==d.indexOf("*")&&(d=k.trim(d.replace("*",k("title").text()))),d=d.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g,""),(l=z(l.extension))||(l=""),d+=l);
l=z(j.title);
l=null===l?null:-1!==l.indexOf("*")?l.replace("*",k("title").text()||"Exported data"):l;
return{filename:d,title:l,messageTop:t(this,j.messageTop||j.message,"top"),messageBottom:t(this,j.messageBottom,"bottom")}
});
var z=function(d){return null===d||d===f?null:"function"===typeof d?d():d
},t=function(j,d,l){d=z(d);
if(null===d){return null
}j=k("caption",j.table().container()).eq(0);
return"*"===d?j.css("caption-side")!==l?null:j.length?j.text():"":d
},y=k("<textarea/>")[0];
k.fn.dataTable.Buttons=e;
k.fn.DataTable.Buttons=e;
k(b).on("init.dt plugin-init.dt",function(j,d){if("dt"===j.namespace){var l=d.oInit.buttons||h.defaults.buttons;
l&&!d._buttons&&(new e(d,l)).container()
}});
h.ext.feature.push({fnInit:function(j){var j=new h.Api(j),d=j.init().buttons||h.defaults.buttons;
return(new e(j,d)).container()
},cFeature:"B"});
return e
});
/*!
 Bootstrap integration for DataTables' Buttons
 ©2016 SpryMedia Ltd - datatables.net/license
*/
(function(a){"function"===typeof define&&define.amd?define(["jquery","datatables.net-bs","datatables.net-buttons"],function(b){return a(b,window,document)
}):"object"===typeof exports?module.exports=function(d,c){d||(d=window);
if(!c||!c.fn.dataTable){c=require("datatables.net-bs")(d,c).$
}c.fn.dataTable.Buttons||require("datatables.net-buttons")(d,c);
return a(c,d,d.document)
}:a(jQuery,window,document)
})(function(d){var b=d.fn.dataTable;
d.extend(!0,b.Buttons.defaults,{dom:{container:{className:"dt-buttons btn-group"},button:{className:"btn btn-default"},collection:{tag:"ul",className:"dt-button-collection dropdown-menu",button:{tag:"li",className:"dt-button",active:"active",disabled:"disabled"},buttonLiner:{tag:"a",className:""}}}});
b.ext.buttons.collection.text=function(c){return c.i18n("buttons.collection",'Collection <span class="caret"/>')
};
return b.Buttons
});
(function(a){"function"===typeof define&&define.amd?define(["jquery","datatables.net","datatables.net-buttons"],function(b){return a(b,window,document)
}):"object"===typeof exports?module.exports=function(c,b){c||(c=window);
if(!b||!b.fn.dataTable){b=require("datatables.net")(c,b).$
}b.fn.dataTable.Buttons||require("datatables.net-buttons")(c,b);
return a(b,c,c.document)
}:a(jQuery,window,document)
})(function(b,f,c,a){f=b.fn.dataTable;
b.extend(f.ext.buttons,{colvis:function(d,e){return{extend:"collection",text:function(g){return g.i18n("buttons.colvis","Column visibility")
},className:"buttons-colvis",buttons:[{extend:"columnsToggle",columns:e.columns,columnText:e.columnText}]}
},columnsToggle:function(d,e){return d.columns(e.columns).indexes().map(function(g){return{extend:"columnToggle",columns:g,columnText:e.columnText}
}).toArray()
},columnToggle:function(d,e){return{extend:"columnVisibility",columns:e.columns,columnText:e.columnText}
},columnsVisibility:function(d,e){return d.columns(e.columns).indexes().map(function(g){return{extend:"columnVisibility",columns:g,visibility:e.visibility,columnText:e.columnText}
}).toArray()
},columnVisibility:{columns:a,text:function(d,e,g){return g._columnText(d,g)
},className:"buttons-columnVisibility",action:function(d,e,h,g){d=e.columns(g.columns);
e=d.visible();
d.visible(g.visibility!==a?g.visibility:!(e.length&&e[0]))
},init:function(d,e,h){var g=this;
d.on("column-visibility.dt"+h.namespace,function(j,k){!k.bDestroying&&k.nTable==d.settings()[0].nTable&&g.active(d.column(h.columns).visible())
}).on("column-reorder.dt"+h.namespace,function(j,l,k){1===d.columns(h.columns).count()&&("number"===typeof h.columns&&(h.columns=k.mapping[h.columns]),j=d.column(h.columns),g.text(h._columnText(d,h)),g.active(j.visible()))
});
this.active(d.column(h.columns).visible())
},destroy:function(d,e,g){d.off("column-visibility.dt"+g.namespace).off("column-reorder.dt"+g.namespace)
},_columnText:function(d,e){var h=d.column(e.columns).index(),g=d.settings()[0].aoColumns[h].sTitle.replace(/\n/g," ").replace(/<br\s*\/?>/gi," ").replace(/<.*?>/g,"").replace(/^\s+|\s+$/g,"");
return e.columnText?e.columnText(d,h,g):g
}},colvisRestore:{className:"buttons-colvisRestore",text:function(d){return d.i18n("buttons.colvisRestore","Restore visibility")
},init:function(d,e,g){g._visOriginal=d.columns().indexes().map(function(h){return d.column(h).visible()
}).toArray()
},action:function(e,g,j,h){g.columns().every(function(d){d=g.colReorder&&g.colReorder.transpose?g.colReorder.transpose(d,"toOriginal"):d;
this.visible(h._visOriginal[d])
})
}},colvisGroup:{className:"buttons-colvisGroup",action:function(e,g,j,h){g.columns(h.show).visible(!0,!1);
g.columns(h.hide).visible(!1,!1);
g.columns.adjust()
},show:[],hide:[]}});
return f.Buttons
});
(function(a){"function"===typeof define&&define.amd?define(["jquery","datatables.net","datatables.net-buttons"],function(b){return a(b,window,document)
}):"object"===typeof exports?module.exports=function(c,b,d,e){c||(c=window);
if(!b||!b.fn.dataTable){b=require("datatables.net")(c,b).$
}b.fn.dataTable.Buttons||require("datatables.net-buttons")(c,b);
return a(b,c,c.document,d,e)
}:a(jQuery,window,document)
})(function(ah,ag,af,W,X,ab){function D(h){for(var j="";
0<=h;
){j=String.fromCharCode(h%26+65)+j,h=Math.floor(h/26)-1
}return j
}function n(h,j){T===ab&&(T=-1===P.serializeToString(ah.parseXML(e["xl/worksheets/sheet1.xml"])).indexOf("xmlns:r"));
ah.each(j,function(t,k){if(ah.isPlainObject(k)){var r=h.folder(t);
n(r,k)
}else{if(T){var r=k.childNodes[0],p,m,s=[];
for(p=r.attributes.length-1;
0<=p;
p--){m=r.attributes[p].nodeName;
var l=r.attributes[p].nodeValue;
-1!==m.indexOf(":")&&(s.push({name:m,value:l}),r.removeAttribute(m))
}p=0;
for(m=s.length;
p<m;
p++){l=k.createAttribute(s[p].name.replace(":","_dt_b_namespace_token_")),l.value=s[p].value,r.setAttributeNode(l)
}}r=P.serializeToString(k);
T&&(-1===r.indexOf("<?xml")&&(r='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+r),r=r.replace(/_dt_b_namespace_token_/g,":"));
r=r.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g,"<$1 $2>");
h.file(t,r)
}})
}function ad(j,l,k){var h=j.createElement(l);
k&&(k.attr&&ah(h).attr(k.attr),k.children&&ah.each(k.children,function(m,p){h.appendChild(p)
}),null!==k.text&&k.text!==ab&&h.appendChild(j.createTextNode(k.text)));
return h
}function g(j,p){var m=j.header[p].length,h;
j.footer&&j.footer[p].length>m&&(m=j.footer[p].length);
for(var l=0,k=j.body.length;
l<k;
l++){if(h=j.body[l][p],h=null!==h&&h!==ab?h.toString():"",-1!==h.indexOf("\n")?(h=h.split("\n"),h.sort(function(s,r){return r.length-s.length
}),h=h[0].length):h=h.length,h>m&&(m=h),40<m){return 52
}}m*=1.3;
return 6<m?m:6
}var ae=ah.fn.dataTable,Z;
var aj="undefined"!==typeof self&&self||"undefined"!==typeof ag&&ag||this.content;
if("undefined"===typeof aj||"undefined"!==typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent)){Z=void 0
}else{var S=aj.document.createElementNS("http://www.w3.org/1999/xhtml","a"),f="download" in S,d=/constructor/i.test(aj.HTMLElement)||aj.safari,ac=/CriOS\/[\d]+/.test(navigator.userAgent),c=function(h){(aj.setImmediate||aj.setTimeout)(function(){throw h
},0)
},aa=function(h){setTimeout(function(){"string"===typeof h?(aj.URL||aj.webkitURL||aj).revokeObjectURL(h):h.remove()
},40000)
},Y=function(h){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(h.type)?new Blob([String.fromCharCode(65279),h],{type:h.type}):h
},V=function(j,r,p){p||(j=Y(j));
var h=this,p="application/octet-stream"===j.type,m,l=function(){for(var s=["writestart","progress","write","writeend"],s=[].concat(s),v=s.length;
v--;
){var u=h["on"+s[v]];
if("function"===typeof u){try{u.call(h,h)
}catch(t){c(t)
}}}};
h.readyState=h.INIT;
if(f){m=(aj.URL||aj.webkitURL||aj).createObjectURL(j),setTimeout(function(){S.href=m;
S.download=r;
var s=new MouseEvent("click");
S.dispatchEvent(s);
l();
aa(m);
h.readyState=h.DONE
})
}else{if((ac||p&&d)&&aj.FileReader){var k=new FileReader;
k.onloadend=function(){var s=ac?k.result:k.result.replace(/^data:[^;]*;/,"data:attachment/file;");
aj.open(s,"_blank")||(aj.location.href=s);
h.readyState=h.DONE;
l()
};
k.readAsDataURL(j);
h.readyState=h.INIT
}else{m||(m=(aj.URL||aj.webkitURL||aj).createObjectURL(j)),p?aj.location.href=m:aj.open(m,"_blank")||(aj.location.href=m),h.readyState=h.DONE,l(),aa(m)
}}},ai=V.prototype;
"undefined"!==typeof navigator&&navigator.msSaveOrOpenBlob?Z=function(h,k,j){k=k||h.name||"download";
j||(h=Y(h));
return navigator.msSaveOrOpenBlob(h,k)
}:(ai.abort=function(){},ai.readyState=ai.INIT=0,ai.WRITING=1,ai.DONE=2,ai.error=ai.onwritestart=ai.onprogress=ai.onwrite=ai.onabort=ai.onerror=ai.onwriteend=null,Z=function(h,k,j){return new V(h,k||h.name||"download",j)
})
}ae.fileSave=Z;
var b=function(h){var j="Sheet1";
h.sheetName&&(j=h.sheetName.replace(/[\[\]\*\/\\\?\:]/g,""));
return j
},U=function(h){return h.newline?h.newline:navigator.userAgent.match(/Windows/)?"\r\n":"\n"
},R=function(C,A){for(var z=U(A),B=C.buttons.exportData(A.exportOptions),y=A.fieldBoundary,x=A.fieldSeparator,w=RegExp(y,"g"),p=A.escapeChar!==ab?A.escapeChar:"\\",t=function(j){for(var h="",l=0,k=j.length;
l<k;
l++){0<l&&(h+=x),h+=y?y+(""+j[l]).replace(w,p+y)+y:j[l]
}return h
},v=A.header?t(B.header)+z:"",s=A.footer&&B.footer?z+t(B.footer):"",r=[],m=0,u=B.body.length;
m<u;
m++){r.push(t(B.body[m]))
}return{str:v+r.join(z)+s,rows:r.length}
},Q=function(){if(!(-1!==navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome")&&-1===navigator.userAgent.indexOf("Opera"))){return !1
}var h=navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/);
return h&&1<h.length&&603.1>1*h[1]?!0:!1
};
try{var P=new XMLSerializer,T
}catch(a){}var e={"_rels/.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',"xl/_rels/workbook.xml.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',"[Content_Types].xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',"xl/workbook.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="" sheetId="1" r:id="rId1"/></sheets></workbook>',"xl/worksheets/sheet1.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',"xl/styles.xml":'<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill/><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="67"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'},o=[{match:/^\-?\d+\.\d%$/,style:60,fmt:function(h){return h/100
}},{match:/^\-?\d+\.?\d*%$/,style:56,fmt:function(h){return h/100
}},{match:/^\-?\$[\d,]+.?\d*$/,style:57},{match:/^\-?£[\d,]+.?\d*$/,style:58},{match:/^\-?€[\d,]+.?\d*$/,style:59},{match:/^\-?\d+$/,style:65},{match:/^\-?\d+\.\d{2}$/,style:66},{match:/^\([\d,]+\)$/,style:61,fmt:function(h){return -1*h.replace(/[\(\)]/g,"")
}},{match:/^\([\d,]+\.\d{2}\)$/,style:62,fmt:function(h){return -1*h.replace(/[\(\)]/g,"")
}},{match:/^\-?[\d,]+$/,style:63},{match:/^\-?[\d,]+\.\d{2}$/,style:64}];
ae.ext.buttons.copyHtml5={className:"buttons-copy buttons-html5",text:function(h){return h.i18n("buttons.copy","Copy")
},action:function(y,w,v,x){this.processing(!0);
var u=this,y=R(w,x),t=w.buttons.exportInfo(x),s=U(x),l=y.str,v=ah("<div/>").css({height:1,width:1,overflow:"hidden",position:"fixed",top:0,left:0});
t.title&&(l=t.title+s+s+l);
t.messageTop&&(l=t.messageTop+s+s+l);
t.messageBottom&&(l=l+s+s+t.messageBottom);
x.customize&&(l=x.customize(l,x));
x=ah("<textarea readonly/>").val(l).appendTo(v);
if(af.queryCommandSupported("copy")){v.appendTo(w.table().container());
x[0].focus();
x[0].select();
try{var r=af.execCommand("copy");
v.remove();
if(r){w.buttons.info(w.i18n("buttons.copyTitle","Copy to clipboard"),w.i18n("buttons.copySuccess",{1:"Copied one row to clipboard",_:"Copied %d rows to clipboard"},y.rows),2000);
this.processing(!1);
return
}}catch(m){}}r=ah("<span>"+w.i18n("buttons.copyKeys","Press <i>ctrl</i> or <i>⌘</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape.")+"</span>").append(v);
w.buttons.info(w.i18n("buttons.copyTitle","Copy to clipboard"),r,0);
x[0].focus();
x[0].select();
var j=ah(r).closest(".dt-button-info"),p=function(){j.off("click.buttons-copy");
ah(af).off(".buttons-copy");
w.buttons.info(!1)
};
j.on("click.buttons-copy",p);
ah(af).on("keydown.buttons-copy",function(h){27===h.keyCode&&(p(),u.processing(!1))
}).on("copy.buttons-copy cut.buttons-copy",function(){p();
u.processing(!1)
})
},exportOptions:{},fieldSeparator:"\t",fieldBoundary:"",header:!0,footer:!1,title:"*",messageTop:"*",messageBottom:"*"};
ae.ext.buttons.csvHtml5={bom:!1,className:"buttons-csv buttons-html5",available:function(){return ag.FileReader!==ab&&ag.Blob
},text:function(h){return h.i18n("buttons.csv","CSV")
},action:function(j,l,k,h){this.processing(!0);
j=R(l,h).str;
l=l.buttons.exportInfo(h);
k=h.charset;
h.customize&&(j=h.customize(j,h));
!1!==k?(k||(k=af.characterSet||af.charset),k&&(k=";charset="+k)):k="";
h.bom&&(j=""+j);
Z(new Blob([j],{type:"text/csv"+k}),l.filename,!0);
this.processing(!1)
},filename:"*",extension:".csv",exportOptions:{},fieldSeparator:",",fieldBoundary:'"',escapeChar:'"',charset:null,header:!0,footer:!1};
ae.ext.buttons.excelHtml5={className:"buttons-excel buttons-html5",available:function(){return ag.FileReader!==ab&&(W||ag.JSZip)!==ab&&!Q()&&P
},text:function(h){return h.i18n("buttons.excel","Excel")
},action:function(B,z,y,A){this.processing(!0);
var x=this,w=0,B=function(h){return ah.parseXML(e[h])
},v=B("xl/worksheets/sheet1.xml"),k=v.getElementsByTagName("sheetData")[0],B={_rels:{".rels":B("_rels/.rels")},xl:{_rels:{"workbook.xml.rels":B("xl/_rels/workbook.xml.rels")},"workbook.xml":B("xl/workbook.xml"),"styles.xml":B("xl/styles.xml"),worksheets:{"sheet1.xml":v}},"[Content_Types].xml":B("[Content_Types].xml")},y=z.buttons.exportData(A.exportOptions),u,r,t=function(s){u=w+1;
r=ad(v,"row",{attr:{r:u}});
for(var l=0,I=s.length;
l<I;
l++){var H=D(l)+""+u,G=null;
if(!(null===s[l]||s[l]===ab||""===s[l])){s[l]=ah.trim(s[l]);
for(var F=0,E=o.length;
F<E;
F++){var h=o[F];
if(s[l].match&&!s[l].match(/^0\d+/)&&s[l].match(h.match)){G=s[l].replace(/[^\d\.\-]/g,"");
h.fmt&&(G=h.fmt(G));
G=ad(v,"c",{attr:{r:H,s:h.style},children:[ad(v,"v",{text:G})]});
break
}}G||("number"===typeof s[l]||s[l].match&&s[l].match(/^-?\d+(\.\d+)?$/)&&!s[l].match(/^0\d+/)?G=ad(v,"c",{attr:{t:"n",r:H},children:[ad(v,"v",{text:s[l]})]}):(h=!s[l].replace?s[l]:s[l].replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g,""),G=ad(v,"c",{attr:{t:"inlineStr",r:H},children:{row:ad(v,"is",{children:{row:ad(v,"t",{text:h})}})}})));
r.appendChild(G)
}}k.appendChild(r);
w++
};
ah("sheets sheet",B.xl["workbook.xml"]).attr("name",b(A));
A.customizeData&&A.customizeData(y);
var p=function(l,h){var m=ah("mergeCells",v);
m[0].appendChild(ad(v,"mergeCell",{attr:{ref:"A"+l+":"+D(h)+l}}));
m.attr("count",m.attr("count")+1);
ah("row:eq("+(l-1)+") c",v).attr("s","51")
},j=z.buttons.exportInfo(A);
j.title&&(t([j.title],w),p(w,y.header.length-1));
j.messageTop&&(t([j.messageTop],w),p(w,y.header.length-1));
A.header&&(t(y.header,w),ah("row:last c",v).attr("s","2"));
for(var z=0,C=y.body.length;
z<C;
z++){t(y.body[z],w)
}A.footer&&y.footer&&(t(y.footer,w),ah("row:last c",v).attr("s","2"));
j.messageBottom&&(t([j.messageBottom],w),p(w,y.header.length-1));
z=ad(v,"cols");
ah("worksheet",v).prepend(z);
t=0;
for(p=y.header.length;
t<p;
t++){z.appendChild(ad(v,"col",{attr:{min:t+1,max:t+1,width:g(y,t),customWidth:1}}))
}A.customize&&A.customize(B);
A=new (W||ag.JSZip);
y={type:"blob",mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"};
n(A,B);
A.generateAsync?A.generateAsync(y).then(function(h){Z(h,j.filename);
x.processing(false)
}):(Z(A.generate(y),j.filename),this.processing(!1))
},filename:"*",extension:".xlsx",exportOptions:{},header:!0,footer:!1,title:"*",messageTop:"*",messageBottom:"*"};
ae.ext.buttons.pdfHtml5={className:"buttons-pdf buttons-html5",available:function(){return ag.FileReader!==ab&&(X||ag.pdfMake)
},text:function(h){return h.i18n("buttons.pdf","PDF")
},action:function(j,r,p,h){this.processing(!0);
var m=this,j=r.buttons.exportData(h.exportOptions),l=r.buttons.exportInfo(h),r=[];
h.header&&r.push(ah.map(j.header,function(s){return{text:"string"===typeof s?s:s+"",style:"tableHeader"}
}));
for(var k=0,p=j.body.length;
k<p;
k++){r.push(ah.map(j.body[k],function(s){return{text:"string"===typeof s?s:s+"",style:k%2?"tableBodyEven":"tableBodyOdd"}
}))
}h.footer&&j.footer&&r.push(ah.map(j.footer,function(s){return{text:"string"===typeof s?s:s+"",style:"tableFooter"}
}));
r={pageSize:h.pageSize,pageOrientation:h.orientation,content:[{table:{headerRows:1,body:r},layout:"noBorders"}],styles:{tableHeader:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154",alignment:"center"},tableBodyEven:{},tableBodyOdd:{fillColor:"#f3f3f3"},tableFooter:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154"},title:{alignment:"center",fontSize:15},message:{}},defaultStyle:{fontSize:10}};
l.messageTop&&r.content.unshift({text:l.messageTop,style:"message",margin:[0,0,0,12]});
l.messageBottom&&r.content.push({text:l.messageBottom,style:"message",margin:[0,0,0,12]});
l.title&&r.content.unshift({text:l.title,style:"title",margin:[0,0,0,12]});
h.customize&&h.customize(r,h);
r=(X||ag.pdfMake).createPdf(r);
"open"===h.download&&!Q()?(r.open(),this.processing(!1)):r.getBuffer(function(s){s=new Blob([s],{type:"application/pdf"});
Z(s,l.filename);
m.processing(!1)
})
},title:"*",filename:"*",extension:".pdf",exportOptions:{},orientation:"portrait",pageSize:"A4",header:!0,footer:!1,messageTop:"*",messageBottom:"*",customize:null,download:"download"};
return ae.Buttons
});
/*!
 ColReorder 1.4.1
 ©2010-2017 SpryMedia Ltd - datatables.net/license
*/
(function(a){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(b){return a(b,window,document)
}):"object"===typeof exports?module.exports=function(c,b){c||(c=window);
if(!b||!b.fn.dataTable){b=require("datatables.net")(c,b).$
}return a(b,c,c.document)
}:a(jQuery,window,document)
})(function(h,d,e,a){function b(l){for(var f=[],n=0,m=l.length;
n<m;
n++){f[l[n]]=n
}return f
}function c(l,f,m){f=l.splice(f,1)[0];
l.splice(m,0,f)
}function k(m,l,r){for(var o=[],n=0,p=m.childNodes.length;
n<p;
n++){1==m.childNodes[n].nodeType&&o.push(m.childNodes[n])
}l=o[l];
null!==r?m.insertBefore(l,o[r]):m.appendChild(l)
}var j=h.fn.dataTable;
h.fn.dataTableExt.oApi.fnColReorder=function(A,z,y,w,v){var x,u,s,o,t,p=A.aoColumns.length,r;
t=function(m,l,B){if(m[l]&&"function"!==typeof m[l]){var C=m[l].split("."),n=C.shift();
isNaN(1*n)||(m[l]=B[1*n]+"."+C.join("."))
}};
if(z!=y){if(0>z||z>=p){this.oApi._fnLog(A,1,"ColReorder 'from' index is out of bounds: "+z)
}else{if(0>y||y>=p){this.oApi._fnLog(A,1,"ColReorder 'to' index is out of bounds: "+y)
}else{s=[];
x=0;
for(u=p;
x<u;
x++){s[x]=x
}c(s,z,y);
var f=b(s);
x=0;
for(u=A.aaSorting.length;
x<u;
x++){A.aaSorting[x][0]=f[A.aaSorting[x][0]]
}if(null!==A.aaSortingFixed){x=0;
for(u=A.aaSortingFixed.length;
x<u;
x++){A.aaSortingFixed[x][0]=f[A.aaSortingFixed[x][0]]
}}x=0;
for(u=p;
x<u;
x++){r=A.aoColumns[x];
s=0;
for(o=r.aDataSort.length;
s<o;
s++){r.aDataSort[s]=f[r.aDataSort[s]]
}r.idx=f[r.idx]
}h.each(A.aLastSort,function(l,m){A.aLastSort[l].src=f[m.src]
});
x=0;
for(u=p;
x<u;
x++){r=A.aoColumns[x],"number"==typeof r.mData?r.mData=f[r.mData]:h.isPlainObject(r.mData)&&(t(r.mData,"_",f),t(r.mData,"filter",f),t(r.mData,"sort",f),t(r.mData,"type",f))
}if(A.aoColumns[z].bVisible){t=this.oApi._fnColumnIndexToVisible(A,z);
o=null;
for(x=y<z?y:y+1;
null===o&&x<p;
){o=this.oApi._fnColumnIndexToVisible(A,x),x++
}s=A.nTHead.getElementsByTagName("tr");
x=0;
for(u=s.length;
x<u;
x++){k(s[x],t,o)
}if(null!==A.nTFoot){s=A.nTFoot.getElementsByTagName("tr");
x=0;
for(u=s.length;
x<u;
x++){k(s[x],t,o)
}}x=0;
for(u=A.aoData.length;
x<u;
x++){null!==A.aoData[x].nTr&&k(A.aoData[x].nTr,t,o)
}}c(A.aoColumns,z,y);
x=0;
for(u=p;
x<u;
x++){A.oApi._fnColumnOptions(A,x,{})
}c(A.aoPreSearchCols,z,y);
x=0;
for(u=A.aoData.length;
x<u;
x++){o=A.aoData[x];
if(r=o.anCells){c(r,z,y);
s=0;
for(t=r.length;
s<t;
s++){r[s]&&r[s]._DT_CellIndex&&(r[s]._DT_CellIndex.column=s)
}}"dom"!==o.src&&h.isArray(o._aData)&&c(o._aData,z,y)
}x=0;
for(u=A.aoHeader.length;
x<u;
x++){c(A.aoHeader[x],z,y)
}if(null!==A.aoFooter){x=0;
for(u=A.aoFooter.length;
x<u;
x++){c(A.aoFooter[x],z,y)
}}(v||v===a)&&h.fn.dataTable.Api(A).rows().invalidate();
x=0;
for(u=p;
x<u;
x++){h(A.aoColumns[x].nTh).off("click.DT"),this.oApi._fnSortAttachListener(A,A.aoColumns[x].nTh,x)
}h(A.oInstance).trigger("column-reorder.dt",[A,{from:z,to:y,mapping:f,drop:w,iFrom:z,iTo:y,aiInvertMapping:f}])
}}}};
var g=function(l,f){var n=(new h.fn.dataTable.Api(l)).settings()[0];
if(n._colReorder){return n._colReorder
}!0===f&&(f={});
var m=h.fn.dataTable.camelToHungarian;
m&&(m(g.defaults,g.defaults,!0),m(g.defaults,f||{}));
this.s={dt:null,init:h.extend(!0,{},g.defaults,f),fixed:0,fixedRight:0,reorderCallback:null,mouse:{startX:-1,startY:-1,offsetX:-1,offsetY:-1,target:-1,targetIndex:-1,fromIndex:-1},aoTargets:[]};
this.dom={drag:null,pointer:null};
this.s.dt=n;
this.s.dt._colReorder=this;
this._fnConstruct();
return this
};
h.extend(g.prototype,{fnReset:function(){this._fnOrderColumns(this.fnOrder());
return this
},fnGetCurrentOrder:function(){return this.fnOrder()
},fnOrder:function(l,f){var p=[],n,m,o=this.s.dt.aoColumns;
if(l===a){n=0;
for(m=o.length;
n<m;
n++){p.push(o[n]._ColReorder_iOrigCol)
}return p
}if(f){o=this.fnOrder();
n=0;
for(m=l.length;
n<m;
n++){p.push(h.inArray(l[n],o))
}l=p
}this._fnOrderColumns(b(l));
return this
},fnTranspose:function(l,f){f||(f="toCurrent");
var n=this.fnOrder(),m=this.s.dt.aoColumns;
return"toCurrent"===f?!h.isArray(l)?h.inArray(l,n):h.map(l,function(o){return h.inArray(o,n)
}):!h.isArray(l)?m[l]._ColReorder_iOrigCol:h.map(l,function(o){return m[o]._ColReorder_iOrigCol
})
},_fnConstruct:function(){var l=this,f=this.s.dt.aoColumns.length,p=this.s.dt.nTable,n;
this.s.init.iFixedColumns&&(this.s.fixed=this.s.init.iFixedColumns);
this.s.init.iFixedColumnsLeft&&(this.s.fixed=this.s.init.iFixedColumnsLeft);
this.s.fixedRight=this.s.init.iFixedColumnsRight?this.s.init.iFixedColumnsRight:0;
this.s.init.fnReorderCallback&&(this.s.reorderCallback=this.s.init.fnReorderCallback);
for(n=0;
n<f;
n++){n>this.s.fixed-1&&n<f-this.s.fixedRight&&this._fnMouseListener(n,this.s.dt.aoColumns[n].nTh),this.s.dt.aoColumns[n]._ColReorder_iOrigCol=n
}this.s.dt.oApi._fnCallbackReg(this.s.dt,"aoStateSaveParams",function(r,s){l._fnStateSave.call(l,s)
},"ColReorder_State");
var m=null;
this.s.init.aiOrder&&(m=this.s.init.aiOrder.slice());
this.s.dt.oLoadedState&&("undefined"!=typeof this.s.dt.oLoadedState.ColReorder&&this.s.dt.oLoadedState.ColReorder.length==this.s.dt.aoColumns.length)&&(m=this.s.dt.oLoadedState.ColReorder);
if(m){if(l.s.dt._bInitComplete){f=b(m),l._fnOrderColumns.call(l,f)
}else{var o=!1;
h(p).on("draw.dt.colReorder",function(){if(!l.s.dt._bInitComplete&&!o){o=true;
var r=b(m);
l._fnOrderColumns.call(l,r)
}})
}}else{this._fnSetColumnIndexes()
}h(p).on("destroy.dt.colReorder",function(){h(p).off("destroy.dt.colReorder draw.dt.colReorder");
h(l.s.dt.nTHead).find("*").off(".ColReorder");
h.each(l.s.dt.aoColumns,function(s,r){h(r.nTh).removeAttr("data-column-index")
});
l.s.dt._colReorder=null;
l.s=null
})
},_fnOrderColumns:function(l){var f=!1;
if(l.length!=this.s.dt.aoColumns.length){this.s.dt.oInstance.oApi._fnLog(this.s.dt,1,"ColReorder - array reorder does not match known number of columns. Skipping.")
}else{for(var o=0,n=l.length;
o<n;
o++){var m=h.inArray(o,l);
o!=m&&(c(l,m,o),this.s.dt.oInstance.fnColReorder(m,o,!0,!1),f=!0)
}h.fn.dataTable.Api(this.s.dt).rows().invalidate();
this._fnSetColumnIndexes();
f&&((""!==this.s.dt.oScroll.sX||""!==this.s.dt.oScroll.sY)&&this.s.dt.oInstance.fnAdjustColumnSizing(!1),this.s.dt.oInstance.oApi._fnSaveState(this.s.dt),null!==this.s.reorderCallback&&this.s.reorderCallback.call(this))
}},_fnStateSave:function(l){var f,p,n,m=this.s.dt.aoColumns;
l.ColReorder=[];
if(l.aaSorting){for(f=0;
f<l.aaSorting.length;
f++){l.aaSorting[f][0]=m[l.aaSorting[f][0]]._ColReorder_iOrigCol
}var o=h.extend(!0,[],l.aoSearchCols);
f=0;
for(p=m.length;
f<p;
f++){n=m[f]._ColReorder_iOrigCol,l.aoSearchCols[n]=o[f],l.abVisCols[n]=m[f].bVisible,l.ColReorder.push(n)
}}else{if(l.order){for(f=0;
f<l.order.length;
f++){l.order[f][0]=m[l.order[f][0]]._ColReorder_iOrigCol
}o=h.extend(!0,[],l.columns);
f=0;
for(p=m.length;
f<p;
f++){n=m[f]._ColReorder_iOrigCol,l.columns[n]=o[f],l.ColReorder.push(n)
}}}},_fnMouseListener:function(l,f){var m=this;
h(f).on("mousedown.ColReorder",function(n){m._fnMouseDown.call(m,n,f)
}).on("touchstart.ColReorder",function(n){m._fnMouseDown.call(m,n,f)
})
},_fnMouseDown:function(l,f){var o=this,n=h(l.target).closest("th, td").offset(),m=parseInt(h(f).attr("data-column-index"),10);
m!==a&&(this.s.mouse.startX=this._fnCursorPosition(l,"pageX"),this.s.mouse.startY=this._fnCursorPosition(l,"pageY"),this.s.mouse.offsetX=this._fnCursorPosition(l,"pageX")-n.left,this.s.mouse.offsetY=this._fnCursorPosition(l,"pageY")-n.top,this.s.mouse.target=this.s.dt.aoColumns[m].nTh,this.s.mouse.targetIndex=m,this.s.mouse.fromIndex=m,this._fnRegions(),h(e).on("mousemove.ColReorder touchmove.ColReorder",function(p){o._fnMouseMove.call(o,p)
}).on("mouseup.ColReorder touchend.ColReorder",function(p){o._fnMouseUp.call(o,p)
}))
},_fnMouseMove:function(m){if(null===this.dom.drag){if(5>Math.pow(Math.pow(this._fnCursorPosition(m,"pageX")-this.s.mouse.startX,2)+Math.pow(this._fnCursorPosition(m,"pageY")-this.s.mouse.startY,2),0.5)){return
}this._fnCreateDragNode()
}this.dom.drag.css({left:this._fnCursorPosition(m,"pageX")-this.s.mouse.offsetX,top:this._fnCursorPosition(m,"pageY")-this.s.mouse.offsetY});
for(var l=!1,p=this.s.mouse.toIndex,o=1,n=this.s.aoTargets.length;
o<n;
o++){if(this._fnCursorPosition(m,"pageX")<this.s.aoTargets[o-1].x+(this.s.aoTargets[o].x-this.s.aoTargets[o-1].x)/2){this.dom.pointer.css("left",this.s.aoTargets[o-1].x);
this.s.mouse.toIndex=this.s.aoTargets[o-1].to;
l=!0;
break
}}l||(this.dom.pointer.css("left",this.s.aoTargets[this.s.aoTargets.length-1].x),this.s.mouse.toIndex=this.s.aoTargets[this.s.aoTargets.length-1].to);
this.s.init.bRealtime&&p!==this.s.mouse.toIndex&&(this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex,this.s.mouse.toIndex,!1),this.s.mouse.fromIndex=this.s.mouse.toIndex,this._fnRegions())
},_fnMouseUp:function(){h(e).off(".ColReorder");
null!==this.dom.drag&&(this.dom.drag.remove(),this.dom.pointer.remove(),this.dom.drag=null,this.dom.pointer=null,this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex,this.s.mouse.toIndex,!0),this._fnSetColumnIndexes(),(""!==this.s.dt.oScroll.sX||""!==this.s.dt.oScroll.sY)&&this.s.dt.oInstance.fnAdjustColumnSizing(!1),this.s.dt.oInstance.oApi._fnSaveState(this.s.dt),null!==this.s.reorderCallback&&this.s.reorderCallback.call(this))
},_fnRegions:function(){var l=this.s.dt.aoColumns;
this.s.aoTargets.splice(0,this.s.aoTargets.length);
this.s.aoTargets.push({x:h(this.s.dt.nTable).offset().left,to:0});
for(var f=0,o=this.s.aoTargets[0].x,n=0,m=l.length;
n<m;
n++){n!=this.s.mouse.fromIndex&&f++,l[n].bVisible&&"none"!==l[n].nTh.style.display&&(o+=h(l[n].nTh).outerWidth(),this.s.aoTargets.push({x:o,to:f}))
}0!==this.s.fixedRight&&this.s.aoTargets.splice(this.s.aoTargets.length-this.s.fixedRight);
0!==this.s.fixed&&this.s.aoTargets.splice(0,this.s.fixed)
},_fnCreateDragNode:function(){var l=""!==this.s.dt.oScroll.sX||""!==this.s.dt.oScroll.sY,f=this.s.dt.aoColumns[this.s.mouse.targetIndex].nTh,p=f.parentNode,n=p.parentNode,m=n.parentNode,o=h(f).clone();
this.dom.drag=h(m.cloneNode(!1)).addClass("DTCR_clonedTable").append(h(n.cloneNode(!1)).append(h(p.cloneNode(!1)).append(o[0]))).css({position:"absolute",top:0,left:0,width:h(f).outerWidth(),height:h(f).outerHeight()}).appendTo("body");
this.dom.pointer=h("<div></div>").addClass("DTCR_pointer").css({position:"absolute",top:l?h("div.dataTables_scroll",this.s.dt.nTableWrapper).offset().top:h(this.s.dt.nTable).offset().top,height:l?h("div.dataTables_scroll",this.s.dt.nTableWrapper).height():h(this.s.dt.nTable).height()}).appendTo("body")
},_fnSetColumnIndexes:function(){h.each(this.s.dt.aoColumns,function(l,f){h(f.nTh).attr("data-column-index",l)
})
},_fnCursorPosition:function(l,f){return -1!==l.type.indexOf("touch")?l.originalEvent.touches[0][f]:l[f]
}});
g.defaults={aiOrder:null,bRealtime:!0,iFixedColumnsLeft:0,iFixedColumnsRight:0,fnReorderCallback:null};
g.version="1.4.1";
h.fn.dataTable.ColReorder=g;
h.fn.DataTable.ColReorder=g;
"function"==typeof h.fn.dataTable&&"function"==typeof h.fn.dataTableExt.fnVersionCheck&&h.fn.dataTableExt.fnVersionCheck("1.10.8")?h.fn.dataTableExt.aoFeatures.push({fnInit:function(l){var f=l.oInstance;
l._colReorder?f.oApi._fnLog(l,1,"ColReorder attempted to initialise twice. Ignoring second"):(f=l.oInit,new g(l,f.colReorder||f.oColReorder||{}));
return null
},cFeature:"R",sFeature:"ColReorder"}):alert("Warning: ColReorder requires DataTables 1.10.8 or greater - www.datatables.net/download");
h(e).on("preInit.dt.colReorder",function(l,f){if("dt"===l.namespace){var n=f.oInit.colReorder,m=j.defaults.colReorder;
if(n||m){m=h.extend({},n,m),!1!==n&&new g(f,m)
}}});
h.fn.dataTable.Api.register("colReorder.reset()",function(){return this.iterator("table",function(f){f._colReorder.fnReset()
})
});
h.fn.dataTable.Api.register("colReorder.order()",function(l,f){return l?this.iterator("table",function(m){m._colReorder.fnOrder(l,f)
}):this.context.length?this.context[0]._colReorder.fnOrder():null
});
h.fn.dataTable.Api.register("colReorder.transpose()",function(l,f){return this.context.length&&this.context[0]._colReorder?this.context[0]._colReorder.fnTranspose(l,f):l
});
h.fn.dataTable.Api.register("colReorder.move()",function(l,f,n,m){this.context.length&&this.context[0]._colReorder.s.dt.oInstance.fnColReorder(l,f,n,m);
return this
});
return g
});
/*!
 FixedColumns 3.2.3
 ©2010-2016 SpryMedia Ltd - datatables.net/license
*/
(function(a){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(b){return a(b,window,document)
}):"object"===typeof exports?module.exports=function(c,b){c||(c=window);
if(!b||!b.fn.dataTable){b=require("datatables.net")(c,b).$
}return a(b,c,c.document)
}:a(jQuery,window,document)
})(function(h,g,f,c){var e=h.fn.dataTable,b,a=function(j,d){var l=this;
if(this instanceof a){if(d===c||!0===d){d={}
}var k=h.fn.dataTable.camelToHungarian;
k&&(k(a.defaults,a.defaults,!0),k(a.defaults,d));
k=(new h.fn.dataTable.Api(j)).settings()[0];
this.s={dt:k,iTableColumns:k.aoColumns.length,aiOuterWidths:[],aiInnerWidths:[],rtl:"rtl"===h(k.nTable).css("direction")};
this.dom={scroller:null,header:null,body:null,footer:null,grid:{wrapper:null,dt:null,left:{wrapper:null,head:null,body:null,foot:null},right:{wrapper:null,head:null,body:null,foot:null}},clone:{left:{header:null,body:null,footer:null},right:{header:null,body:null,footer:null}}};
if(k._oFixedColumns){throw"FixedColumns already initialised on this table"
}k._oFixedColumns=this;
k._bInitComplete?this._fnConstruct(d):k.oApi._fnCallbackReg(k,"aoInitComplete",function(){l._fnConstruct(d)
},"FixedColumns")
}else{alert("FixedColumns warning: FixedColumns must be initialised with the 'new' keyword.")
}};
h.extend(a.prototype,{fnUpdate:function(){this._fnDraw(!0)
},fnRedrawLayout:function(){this._fnColCalc();
this._fnGridLayout();
this.fnUpdate()
},fnRecalculateHeight:function(d){delete d._DTTC_iHeight;
d.style.height="auto"
},fnSetRowHeight:function(j,d){j.style.height=d+"px"
},fnGetPosition:function(j){var d=this.s.dt.oInstance;
if(h(j).parents(".DTFC_Cloned").length){if("tr"===j.nodeName.toLowerCase()){return j=h(j).index(),d.fnGetPosition(h("tr",this.s.dt.nTBody)[j])
}var k=h(j).index(),j=h(j.parentNode).index();
return[d.fnGetPosition(h("tr",this.s.dt.nTBody)[j]),k,d.oApi._fnVisibleToColumnIndex(this.s.dt,k)]
}return d.fnGetPosition(j)
},_fnConstruct:function(j){var d=this;
if("function"!=typeof this.s.dt.oInstance.fnVersionCheck||!0!==this.s.dt.oInstance.fnVersionCheck("1.8.0")){alert("FixedColumns "+a.VERSION+" required DataTables 1.8.0 or later. Please upgrade your DataTables installation")
}else{if(""===this.s.dt.oScroll.sX){this.s.dt.oInstance.oApi._fnLog(this.s.dt,1,"FixedColumns is not needed (no x-scrolling in DataTables enabled), so no action will be taken. Use 'FixedHeader' for column fixing when scrolling is not enabled")
}else{this.s=h.extend(!0,this.s,a.defaults,j);
j=this.s.dt.oClasses;
this.dom.grid.dt=h(this.s.dt.nTable).parents("div."+j.sScrollWrapper)[0];
this.dom.scroller=h("div."+j.sScrollBody,this.dom.grid.dt)[0];
this._fnColCalc();
this._fnGridSetup();
var o,n=!1;
h(this.s.dt.nTableWrapper).on("mousedown.DTFC",function(){n=!0;
h(f).one("mouseup",function(){n=!1
})
});
h(this.dom.scroller).on("mouseover.DTFC touchstart.DTFC",function(){n||(o="main")
}).on("scroll.DTFC",function(p){!o&&p.originalEvent&&(o="main");
if("main"===o&&(0<d.s.iLeftColumns&&(d.dom.grid.left.liner.scrollTop=d.dom.scroller.scrollTop),0<d.s.iRightColumns)){d.dom.grid.right.liner.scrollTop=d.dom.scroller.scrollTop
}});
var m="onwheel" in f.createElement("div")?"wheel.DTFC":"mousewheel.DTFC";
if(0<d.s.iLeftColumns){h(d.dom.grid.left.liner).on("mouseover.DTFC touchstart.DTFC",function(){n||(o="left")
}).on("scroll.DTFC",function(p){!o&&p.originalEvent&&(o="left");
"left"===o&&(d.dom.scroller.scrollTop=d.dom.grid.left.liner.scrollTop,0<d.s.iRightColumns&&(d.dom.grid.right.liner.scrollTop=d.dom.grid.left.liner.scrollTop))
}).on(m,function(p){d.dom.scroller.scrollLeft-="wheel"===p.type?-p.originalEvent.deltaX:p.originalEvent.wheelDeltaX
})
}if(0<d.s.iRightColumns){h(d.dom.grid.right.liner).on("mouseover.DTFC touchstart.DTFC",function(){n||(o="right")
}).on("scroll.DTFC",function(p){!o&&p.originalEvent&&(o="right");
"right"===o&&(d.dom.scroller.scrollTop=d.dom.grid.right.liner.scrollTop,0<d.s.iLeftColumns&&(d.dom.grid.left.liner.scrollTop=d.dom.grid.right.liner.scrollTop))
}).on(m,function(p){d.dom.scroller.scrollLeft-="wheel"===p.type?-p.originalEvent.deltaX:p.originalEvent.wheelDeltaX
})
}h(g).on("resize.DTFC",function(){d._fnGridLayout.call(d)
});
var l=!0,k=h(this.s.dt.nTable);
k.on("draw.dt.DTFC",function(){d._fnColCalc();
d._fnDraw.call(d,l);
l=!1
}).on("column-sizing.dt.DTFC",function(){d._fnColCalc();
d._fnGridLayout(d)
}).on("column-visibility.dt.DTFC",function(p,u,t,s,r){if(r===c||r){d._fnColCalc(),d._fnGridLayout(d),d._fnDraw(!0)
}}).on("select.dt.DTFC deselect.dt.DTFC",function(p){"dt"===p.namespace&&d._fnDraw(!1)
}).on("destroy.dt.DTFC",function(){k.off(".DTFC");
h(d.dom.scroller).off(".DTFC");
h(g).off(".DTFC");
h(d.s.dt.nTableWrapper).off(".DTFC");
h(d.dom.grid.left.liner).off(".DTFC "+m);
h(d.dom.grid.left.wrapper).remove();
h(d.dom.grid.right.liner).off(".DTFC "+m);
h(d.dom.grid.right.wrapper).remove()
});
this._fnGridLayout();
this.s.dt.oInstance.fnDraw(!1)
}}},_fnColCalc:function(){var j=this,d=0,k=0;
this.s.aiInnerWidths=[];
this.s.aiOuterWidths=[];
h.each(this.s.dt.aoColumns,function(p,o){var n=h(o.nTh),m;
if(n.filter(":visible").length){var l=n.outerWidth();
0===j.s.aiOuterWidths.length&&(m=h(j.s.dt.nTable).css("border-left-width"),l+="string"===typeof m?1:parseInt(m,10));
j.s.aiOuterWidths.length===j.s.dt.aoColumns.length-1&&(m=h(j.s.dt.nTable).css("border-right-width"),l+="string"===typeof m?1:parseInt(m,10));
j.s.aiOuterWidths.push(l);
j.s.aiInnerWidths.push(n.width());
p<j.s.iLeftColumns&&(d+=l);
j.s.iTableColumns-j.s.iRightColumns<=p&&(k+=l)
}else{j.s.aiInnerWidths.push(0),j.s.aiOuterWidths.push(0)
}});
this.s.iLeftWidth=d;
this.s.iRightWidth=k
},_fnGridSetup:function(){var j=this._fnDTOverflow(),d;
this.dom.body=this.s.dt.nTable;
this.dom.header=this.s.dt.nTHead.parentNode;
this.dom.header.parentNode.parentNode.style.position="relative";
var m=h('<div class="DTFC_ScrollWrapper" style="position:relative; clear:both;"><div class="DTFC_LeftWrapper" style="position:absolute; top:0; left:0;"><div class="DTFC_LeftHeadWrapper" style="position:relative; top:0; left:0; overflow:hidden;"></div><div class="DTFC_LeftBodyWrapper" style="position:relative; top:0; left:0; overflow:hidden;"><div class="DTFC_LeftBodyLiner" style="position:relative; top:0; left:0; overflow-y:scroll;"></div></div><div class="DTFC_LeftFootWrapper" style="position:relative; top:0; left:0; overflow:hidden;"></div></div><div class="DTFC_RightWrapper" style="position:absolute; top:0; right:0;"><div class="DTFC_RightHeadWrapper" style="position:relative; top:0; left:0;"><div class="DTFC_RightHeadBlocker DTFC_Blocker" style="position:absolute; top:0; bottom:0;"></div></div><div class="DTFC_RightBodyWrapper" style="position:relative; top:0; left:0; overflow:hidden;"><div class="DTFC_RightBodyLiner" style="position:relative; top:0; left:0; overflow-y:scroll;"></div></div><div class="DTFC_RightFootWrapper" style="position:relative; top:0; left:0;"><div class="DTFC_RightFootBlocker DTFC_Blocker" style="position:absolute; top:0; bottom:0;"></div></div></div></div>')[0],l=m.childNodes[0],k=m.childNodes[1];
this.dom.grid.dt.parentNode.insertBefore(m,this.dom.grid.dt);
m.appendChild(this.dom.grid.dt);
this.dom.grid.wrapper=m;
0<this.s.iLeftColumns&&(this.dom.grid.left.wrapper=l,this.dom.grid.left.head=l.childNodes[0],this.dom.grid.left.body=l.childNodes[1],this.dom.grid.left.liner=h("div.DTFC_LeftBodyLiner",m)[0],m.appendChild(l));
0<this.s.iRightColumns&&(this.dom.grid.right.wrapper=k,this.dom.grid.right.head=k.childNodes[0],this.dom.grid.right.body=k.childNodes[1],this.dom.grid.right.liner=h("div.DTFC_RightBodyLiner",m)[0],k.style.right=j.bar+"px",d=h("div.DTFC_RightHeadBlocker",m)[0],d.style.width=j.bar+"px",d.style.right=-j.bar+"px",this.dom.grid.right.headBlock=d,d=h("div.DTFC_RightFootBlocker",m)[0],d.style.width=j.bar+"px",d.style.right=-j.bar+"px",this.dom.grid.right.footBlock=d,m.appendChild(k));
if(this.s.dt.nTFoot&&(this.dom.footer=this.s.dt.nTFoot.parentNode,0<this.s.iLeftColumns&&(this.dom.grid.left.foot=l.childNodes[2]),0<this.s.iRightColumns)){this.dom.grid.right.foot=k.childNodes[2]
}this.s.rtl&&h("div.DTFC_RightHeadBlocker",m).css({left:-j.bar+"px",right:""})
},_fnGridLayout:function(){var s=this,r=this.dom.grid;
h(r.wrapper).width();
var p=h(this.s.dt.nTable.parentNode).outerHeight(),o=h(this.s.dt.nTable.parentNode.parentNode).outerHeight(),n=this._fnDTOverflow(),m=this.s.iLeftWidth,l=this.s.iRightWidth,j="rtl"===h(this.dom.body).css("direction"),d=function(k,t){n.bar?s._firefoxScrollError()?34<h(k).height()&&(k.style.width=t+n.bar+"px"):k.style.width=t+n.bar+"px":(k.style.width=t+20+"px",k.style.paddingRight="20px",k.style.boxSizing="border-box")
};
n.x&&(p-=n.bar);
r.wrapper.style.height=o+"px";
0<this.s.iLeftColumns&&(o=r.left.wrapper,o.style.width=m+"px",o.style.height="1px",j?(o.style.left="",o.style.right=0):(o.style.left=0,o.style.right=""),r.left.body.style.height=p+"px",r.left.foot&&(r.left.foot.style.top=(n.x?n.bar:0)+"px"),d(r.left.liner,m),r.left.liner.style.height=p+"px",r.left.liner.style.maxHeight=p+"px");
0<this.s.iRightColumns&&(o=r.right.wrapper,o.style.width=l+"px",o.style.height="1px",this.s.rtl?(o.style.left=n.y?n.bar+"px":0,o.style.right=""):(o.style.left="",o.style.right=n.y?n.bar+"px":0),r.right.body.style.height=p+"px",r.right.foot&&(r.right.foot.style.top=(n.x?n.bar:0)+"px"),d(r.right.liner,l),r.right.liner.style.height=p+"px",r.right.liner.style.maxHeight=p+"px",r.right.headBlock.style.display=n.y?"block":"none",r.right.footBlock.style.display=n.y?"block":"none")
},_fnDTOverflow:function(){var j=this.s.dt.nTable,d=j.parentNode,k={x:!1,y:!1,bar:this.s.dt.oScroll.iBarWidth};
j.offsetWidth>d.clientWidth&&(k.x=!0);
j.offsetHeight>d.clientHeight&&(k.y=!0);
return k
},_fnDraw:function(d){this._fnGridLayout();
this._fnCloneLeft(d);
this._fnCloneRight(d);
null!==this.s.fnDrawCallback&&this.s.fnDrawCallback.call(this,this.dom.clone.left,this.dom.clone.right);
h(this).trigger("draw.dtfc",{leftClone:this.dom.clone.left,rightClone:this.dom.clone.right})
},_fnCloneRight:function(j){if(!(0>=this.s.iRightColumns)){var d,k=[];
for(d=this.s.iTableColumns-this.s.iRightColumns;
d<this.s.iTableColumns;
d++){this.s.dt.aoColumns[d].bVisible&&k.push(d)
}this._fnClone(this.dom.clone.right,this.dom.grid.right,k,j)
}},_fnCloneLeft:function(j){if(!(0>=this.s.iLeftColumns)){var d,k=[];
for(d=0;
d<this.s.iLeftColumns;
d++){this.s.dt.aoColumns[d].bVisible&&k.push(d)
}this._fnClone(this.dom.clone.left,this.dom.grid.left,k,j)
}},_fnCopyLayout:function(x,w,v){for(var u=[],t=[],s=[],r=0,p=x.length;
r<p;
r++){var n=[];
n.nTr=h(x[r].nTr).clone(v,!1)[0];
for(var m=0,j=this.s.iTableColumns;
m<j;
m++){if(-1!==h.inArray(m,w)){var d=h.inArray(x[r][m].cell,s);
-1===d?(d=h(x[r][m].cell).clone(v,!1)[0],t.push(d),s.push(x[r][m].cell),n.push({cell:d,unique:x[r][m].unique})):n.push({cell:t[d],unique:x[r][m].unique})
}}u.push(n)
}return u
},_fnClone:function(F,E,D,C){var B=this,A,z,y,w,v,s,d,t,u,x=this.s.dt;
if(C){h(F.header).remove();
F.header=h(this.dom.header).clone(!0,!1)[0];
F.header.className+=" DTFC_Cloned";
F.header.style.width="100%";
E.head.appendChild(F.header);
t=this._fnCopyLayout(x.aoHeader,D,!0);
w=h(">thead",F.header);
w.empty();
A=0;
for(z=t.length;
A<z;
A++){w[0].appendChild(t[A].nTr)
}x.oApi._fnDrawHead(x,t,!0)
}else{t=this._fnCopyLayout(x.aoHeader,D,!1);
u=[];
x.oApi._fnDetectHeader(u,h(">thead",F.header)[0]);
A=0;
for(z=t.length;
A<z;
A++){y=0;
for(w=t[A].length;
y<w;
y++){u[A][y].cell.className=t[A][y].cell.className,h("span.DataTables_sort_icon",u[A][y].cell).each(function(){this.className=h("span.DataTables_sort_icon",t[A][y].cell)[0].className
})
}}}this._fnEqualiseHeights("thead",this.dom.header,F.header);
"auto"==this.s.sHeightMatch&&h(">tbody>tr",B.dom.body).css("height","auto");
null!==F.body&&(h(F.body).remove(),F.body=null);
F.body=h(this.dom.body).clone(!0)[0];
F.body.className+=" DTFC_Cloned";
F.body.style.paddingBottom=x.oScroll.iBarWidth+"px";
F.body.style.marginBottom=2*x.oScroll.iBarWidth+"px";
null!==F.body.getAttribute("id")&&F.body.removeAttribute("id");
h(">thead>tr",F.body).empty();
h(">tfoot",F.body).remove();
var r=h("tbody",F.body)[0];
h(r).empty();
if(0<x.aiDisplay.length){z=h(">thead>tr",F.body)[0];
for(d=0;
d<D.length;
d++){v=D[d],s=h(x.aoColumns[v].nTh).clone(!0)[0],s.innerHTML="",w=s.style,w.paddingTop="0",w.paddingBottom="0",w.borderTopWidth="0",w.borderBottomWidth="0",w.height=0,w.width=B.s.aiInnerWidths[v]+"px",z.appendChild(s)
}h(">tbody>tr",B.dom.body).each(function(k){var k=B.s.dt.oFeatures.bServerSide===false?B.s.dt.aiDisplay[B.s.dt._iDisplayStart+k]:k,j=B.s.dt.aoData[k].anCells||h(this).children("td, th"),l=this.cloneNode(false);
l.removeAttribute("id");
l.setAttribute("data-dt-row",k);
for(d=0;
d<D.length;
d++){v=D[d];
if(j.length>0){s=h(j[v]).clone(true,true)[0];
s.removeAttribute("id");
s.setAttribute("data-dt-row",k);
s.setAttribute("data-dt-column",x.oApi._fnVisibleToColumnIndex(x,v));
l.appendChild(s)
}}r.appendChild(l)
})
}else{h(">tbody>tr",B.dom.body).each(function(){s=this.cloneNode(true);
s.className=s.className+" DTFC_NoData";
h("td",s).html("");
r.appendChild(s)
})
}F.body.style.width="100%";
F.body.style.margin="0";
F.body.style.padding="0";
x.oScroller!==c&&(z=x.oScroller.dom.force,E.forcer?E.forcer.style.height=z.style.height:(E.forcer=z.cloneNode(!0),E.liner.appendChild(E.forcer)));
E.liner.appendChild(F.body);
this._fnEqualiseHeights("tbody",B.dom.body,F.body);
if(null!==x.nTFoot){if(C){null!==F.footer&&F.footer.parentNode.removeChild(F.footer);
F.footer=h(this.dom.footer).clone(!0,!0)[0];
F.footer.className+=" DTFC_Cloned";
F.footer.style.width="100%";
E.foot.appendChild(F.footer);
t=this._fnCopyLayout(x.aoFooter,D,!0);
E=h(">tfoot",F.footer);
E.empty();
A=0;
for(z=t.length;
A<z;
A++){E[0].appendChild(t[A].nTr)
}x.oApi._fnDrawHead(x,t,!0)
}else{t=this._fnCopyLayout(x.aoFooter,D,!1);
E=[];
x.oApi._fnDetectHeader(E,h(">tfoot",F.footer)[0]);
A=0;
for(z=t.length;
A<z;
A++){y=0;
for(w=t[A].length;
y<w;
y++){E[A][y].cell.className=t[A][y].cell.className
}}}this._fnEqualiseHeights("tfoot",this.dom.footer,F.footer)
}E=x.oApi._fnGetUniqueThs(x,h(">thead",F.header)[0]);
h(E).each(function(j){v=D[j];
this.style.width=B.s.aiInnerWidths[v]+"px"
});
null!==B.s.dt.nTFoot&&(E=x.oApi._fnGetUniqueThs(x,h(">tfoot",F.footer)[0]),h(E).each(function(j){v=D[j];
this.style.width=B.s.aiInnerWidths[v]+"px"
}))
},_fnGetTrNodes:function(k){for(var j=[],m=0,l=k.childNodes.length;
m<l;
m++){"TR"==k.childNodes[m].nodeName.toUpperCase()&&j.push(k.childNodes[m])
}return j
},_fnEqualiseHeights:function(j,d,o){if(!("none"==this.s.sHeightMatch&&"thead"!==j&&"tfoot"!==j)){var n,m,l=d.getElementsByTagName(j)[0],o=o.getElementsByTagName(j)[0],j=h(">"+j+">tr:eq(0)",d).children(":first");
j.outerHeight();
j.height();
for(var l=this._fnGetTrNodes(l),d=this._fnGetTrNodes(o),k=[],o=0,j=d.length;
o<j;
o++){n=l[o].offsetHeight,m=d[o].offsetHeight,n=m>n?m:n,"semiauto"==this.s.sHeightMatch&&(l[o]._DTTC_iHeight=n),k.push(n)
}o=0;
for(j=d.length;
o<j;
o++){d[o].style.height=k[o]+"px",l[o].style.height=k[o]+"px"
}}},_firefoxScrollError:function(){if(b===c){var d=h("<div/>").css({position:"absolute",top:0,left:0,height:10,width:50,overflow:"scroll"}).appendTo("body");
b=d[0].clientWidth===d[0].offsetWidth&&0!==this._fnDTOverflow().bar;
d.remove()
}return b
}});
a.defaults={iLeftColumns:1,iRightColumns:0,fnDrawCallback:null,sHeightMatch:"semiauto"};
a.version="3.2.3";
e.Api.register("fixedColumns()",function(){return this
});
e.Api.register("fixedColumns().update()",function(){return this.iterator("table",function(d){d._oFixedColumns&&d._oFixedColumns.fnUpdate()
})
});
e.Api.register("fixedColumns().relayout()",function(){return this.iterator("table",function(d){d._oFixedColumns&&d._oFixedColumns.fnRedrawLayout()
})
});
e.Api.register("rows().recalcHeight()",function(){return this.iterator("row",function(j,d){j._oFixedColumns&&j._oFixedColumns.fnRecalculateHeight(this.row(d).node())
})
});
e.Api.register("fixedColumns().rowIndex()",function(d){d=h(d);
return d.parents(".DTFC_Cloned").length?this.rows({page:"current"}).indexes()[d.index()]:this.row(d).index()
});
e.Api.register("fixedColumns().cellIndex()",function(j){j=h(j);
if(j.parents(".DTFC_Cloned").length){var d=j.parent().index(),d=this.rows({page:"current"}).indexes()[d],j=j.parents(".DTFC_LeftWrapper").length?j.index():this.columns().flatten().length-this.context[0]._oFixedColumns.s.iRightColumns+j.index();
return{row:d,column:this.column.index("toData",j),columnVisible:j}
}return this.cell(j).index()
});
h(f).on("init.dt.fixedColumns",function(j,d){if("dt"===j.namespace){var l=d.oInit.fixedColumns,k=e.defaults.fixedColumns;
if(l||k){k=h.extend({},l,k),!1!==l&&new a(d,k)
}}});
h.fn.dataTable.FixedColumns=a;
return h.fn.DataTable.FixedColumns=a
});
/*!
 FixedHeader 3.1.3
 ©2009-2017 SpryMedia Ltd - datatables.net/license
*/
(function(a){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(b){return a(b,window,document)
}):"object"===typeof exports?module.exports=function(c,b){c||(c=window);
if(!b||!b.fn.dataTable){b=require("datatables.net")(c,b).$
}return a(b,c,c.document)
}:a(jQuery,window,document)
})(function(n,m,f,b){var c=n.fn.dataTable,a=0,e=function(d,g){if(!(this instanceof e)){throw"FixedHeader must be initialised with the 'new' keyword."
}!0===g&&(g={});
d=new c.Api(d);
this.c=n.extend(!0,{},e.defaults,g);
this.s={dt:d,position:{theadTop:0,tbodyTop:0,tfootTop:0,tfootBottom:0,width:0,left:0,tfootHeight:0,theadHeight:0,windowHeight:n(m).height(),visible:!0},headerMode:null,footerMode:null,autoWidth:d.settings()[0].oFeatures.bAutoWidth,namespace:".dtfc"+a++,scrollLeft:{header:-1,footer:-1},enable:!0};
this.dom={floatingHeader:null,thead:n(d.table().header()),tbody:n(d.table().body()),tfoot:n(d.table().footer()),header:{host:null,floating:null,placeholder:null},footer:{host:null,floating:null,placeholder:null}};
this.dom.header.host=this.dom.thead.parent();
this.dom.footer.host=this.dom.tfoot.parent();
var h=d.settings()[0];
if(h._fixedHeader){throw"FixedHeader already initialised on table "+h.nTable.id
}h._fixedHeader=this;
this._constructor()
};
n.extend(e.prototype,{enable:function(d){this.s.enable=d;
this.c.header&&this._modeChange("in-place","header",!0);
this.c.footer&&this.dom.tfoot.length&&this._modeChange("in-place","footer",!0);
this.update()
},headerOffset:function(d){d!==b&&(this.c.headerOffset=d,this.update());
return this.c.headerOffset
},footerOffset:function(d){d!==b&&(this.c.footerOffset=d,this.update());
return this.c.footerOffset
},update:function(){this._positions();
this._scroll(!0)
},_constructor:function(){var d=this,g=this.s.dt;
n(m).on("scroll"+this.s.namespace,function(){d._scroll()
}).on("resize"+this.s.namespace,function(){d.s.position.windowHeight=n(m).height();
d.update()
});
var h=n(".fh-fixedHeader");
!this.c.headerOffset&&h.length&&(this.c.headerOffset=h.outerHeight());
h=n(".fh-fixedFooter");
!this.c.footerOffset&&h.length&&(this.c.footerOffset=h.outerHeight());
g.on("column-reorder.dt.dtfc column-visibility.dt.dtfc draw.dt.dtfc column-sizing.dt.dtfc",function(){d.update()
});
g.on("destroy.dtfc",function(){g.off(".dtfc");
n(m).off(d.s.namespace)
});
this._positions();
this._scroll()
},_clone:function(d,g){var j=this.s.dt,k=this.dom[d],h="header"===d?this.dom.thead:this.dom.tfoot;
!g&&k.floating?k.floating.removeClass("fixedHeader-floating fixedHeader-locked"):(k.floating&&(k.placeholder.remove(),this._unsize(d),k.floating.children().detach(),k.floating.remove()),k.floating=n(j.table().node().cloneNode(!1)).css("table-layout","fixed").removeAttr("id").append(h).appendTo("body"),k.placeholder=h.clone(!1),k.placeholder.find("*[id]").removeAttr("id"),k.host.prepend(k.placeholder),this._matchWidths(k.placeholder,k.floating))
},_matchWidths:function(d,g){var j=function(l){return n(l,d).map(function(){return n(this).width()
}).toArray()
},k=function(l,o){n(l,g).each(function(p){n(this).css({width:o[p],minWidth:o[p]})
})
},h=j("th"),j=j("td");
k("th",h);
k("td",j)
},_unsize:function(d){var g=this.dom[d].floating;
g&&("footer"===d||"header"===d&&!this.s.autoWidth)?n("th, td",g).css({width:"",minWidth:""}):g&&"header"===d&&n("th, td",g).css("min-width","")
},_horizontal:function(g,h){var j=this.dom[g],l=this.s.position,k=this.s.scrollLeft;
j.floating&&k[g]!==h&&(j.floating.css("left",l.left-h),k[g]=h)
},_modeChange:function(d,h,l){var o=this.dom[h],k=this.s.position,j=n.contains(this.dom["footer"===h?"tfoot":"thead"][0],f.activeElement)?f.activeElement:null;
if("in-place"===d){if(o.placeholder&&(o.placeholder.remove(),o.placeholder=null),this._unsize(h),"header"===h?o.host.prepend(this.dom.thead):o.host.append(this.dom.tfoot),o.floating){o.floating.remove(),o.floating=null
}}else{"in"===d?(this._clone(h,l),o.floating.addClass("fixedHeader-floating").css("header"===h?"top":"bottom",this.c[h+"Offset"]).css("left",k.left+"px").css("width",k.width+"px"),"footer"===h&&o.floating.css("top","")):"below"===d?(this._clone(h,l),o.floating.addClass("fixedHeader-locked").css("top",k.tfootTop-k.theadHeight).css("left",k.left+"px").css("width",k.width+"px")):"above"===d&&(this._clone(h,l),o.floating.addClass("fixedHeader-locked").css("top",k.tbodyTop).css("left",k.left+"px").css("width",k.width+"px"))
}j&&j!==f.activeElement&&j.focus();
this.s.scrollLeft.header=-1;
this.s.scrollLeft.footer=-1;
this.s[h+"Mode"]=d
},_positions:function(){var d=this.s.dt.table(),g=this.s.position,j=this.dom,d=n(d.node()),k=d.children("thead"),h=d.children("tfoot"),j=j.tbody;
g.visible=d.is(":visible");
g.width=d.outerWidth();
g.left=d.offset().left;
g.theadTop=k.offset().top;
g.tbodyTop=j.offset().top;
g.theadHeight=g.tbodyTop-g.theadTop;
h.length?(g.tfootTop=h.offset().top,g.tfootBottom=g.tfootTop+h.outerHeight(),g.tfootHeight=g.tfootBottom-g.tfootTop):(g.tfootTop=g.tbodyTop+j.outerHeight(),g.tfootBottom=g.tfootTop,g.tfootHeight=g.tfootTop)
},_scroll:function(d){var g=n(f).scrollTop(),j=n(f).scrollLeft(),k=this.s.position,h;
if(this.s.enable&&(this.c.header&&(h=!k.visible||g<=k.theadTop-this.c.headerOffset?"in-place":g<=k.tfootTop-k.theadHeight-this.c.headerOffset?"in":"below",(d||h!==this.s.headerMode)&&this._modeChange(h,"header",d),this._horizontal("header",j)),this.c.footer&&this.dom.tfoot.length)){g=!k.visible||g+k.windowHeight>=k.tfootBottom+this.c.footerOffset?"in-place":k.windowHeight+g>k.tbodyTop+k.tfootHeight+this.c.footerOffset?"in":"above",(d||g!==this.s.footerMode)&&this._modeChange(g,"footer",d),this._horizontal("footer",j)
}}});
e.version="3.1.3";
e.defaults={header:!0,footer:!1,headerOffset:0,footerOffset:0};
n.fn.dataTable.FixedHeader=e;
n.fn.DataTable.FixedHeader=e;
n(f).on("init.dt.dtfh",function(d,g){if("dt"===d.namespace){var h=g.oInit.fixedHeader,j=c.defaults.fixedHeader;
if((h||j)&&!g._fixedHeader){j=n.extend({},j,h),!1!==h&&new e(g,j)
}}});
c.Api.register("fixedHeader()",function(){});
c.Api.register("fixedHeader.adjust()",function(){return this.iterator("table",function(d){(d=d._fixedHeader)&&d.update()
})
});
c.Api.register("fixedHeader.enable()",function(d){return this.iterator("table",function(g){g=g._fixedHeader;
d=d!==b?d:!0;
g&&d!==g.s.enable&&g.enable(d)
})
});
c.Api.register("fixedHeader.disable()",function(){return this.iterator("table",function(d){(d=d._fixedHeader)&&d.s.enable&&d.enable(!1)
})
});
n.each(["header","footer"],function(d,g){c.Api.register("fixedHeader."+g+"Offset()",function(h){var j=this.context;
return h===b?j.length&&j[0]._fixedHeader?j[0]._fixedHeader[g+"Offset"]():b:this.iterator("table",function(k){if(k=k._fixedHeader){k[g+"Offset"](h)
}})
})
});
return e
});
/*!
 KeyTable 2.3.2
 ©2009-2017 SpryMedia Ltd - datatables.net/license
*/
(function(a){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(b){return a(b,window,document)
}):"object"===typeof exports?module.exports=function(b,c){b||(b=window);
if(!c||!c.fn.dataTable){c=require("datatables.net")(b,c).$
}return a(c,b,b.document)
}:a(jQuery,window,document)
})(function(d,b,c,e){var a=d.fn.dataTable,g=function(h,f){if(!a.versionCheck||!a.versionCheck("1.10.8")){throw"KeyTable requires DataTables 1.10.8 or newer"
}this.c=d.extend(!0,{},a.defaults.keyTable,g.defaults,f);
this.s={dt:new a.Api(h),enable:!0,focusDraw:!1,waitingForDraw:!1,lastFocus:null};
this.dom={};
var k=this.s.dt.settings()[0],j=k.keytable;
if(j){return j
}k.keytable=this;
this._constructor()
};
d.extend(g.prototype,{blur:function(){this._blur()
},enable:function(f){this.s.enable=f
},focus:function(h,f){this._focus(this.s.dt.cell(h,f))
},focused:function(h){if(!this.s.lastFocus){return !1
}var f=this.s.lastFocus.cell.index();
return h.row===f.row&&h.column===f.column
},_constructor:function(){this._tabInput();
var h=this,f=this.s.dt,l=d(f.table().node());
"static"===l.css("position")&&l.css("position","relative");
d(f.table().body()).on("click.keyTable","th, td",function(n){if(!1!==h.s.enable){var m=f.cell(this);
m.any()&&h._focus(m,null,!1,n)
}});
d(c).on("keydown.keyTable",function(m){h._key(m)
});
if(this.c.blurable){d(c).on("mousedown.keyTable",function(m){d(m.target).parents(".dataTables_filter").length&&h._blur();
d(m.target).parents().filter(f.table().container()).length||d(m.target).parents("div.DTE").length||d(m.target).parents("div.editor-datetime").length||d(m.target).parents().filter(".DTFC_Cloned").length||h._blur()
})
}if(this.c.editor){var k=this.c.editor;
k.on("open.keyTableMain",function(m,n){"inline"!==n&&h.s.enable&&(h.enable(!1),k.one("close.keyTable",function(){h.enable(!0)
}))
});
if(this.c.editOnFocus){f.on("key-focus.keyTable key-refocus.keyTable",function(m,p,o,n){h._editor(null,n)
})
}f.on("key.keyTable",function(m,r,p,o,n){h._editor(p,n)
})
}if(f.settings()[0].oFeatures.bStateSave){f.on("stateSaveParams.keyTable",function(m,o,n){n.keyTable=h.s.lastFocus?h.s.lastFocus.cell.index():null
})
}f.on("draw.keyTable",function(p){if(!h.s.focusDraw){var o=h.s.lastFocus;
if(o&&o.node&&d(o.node).closest("body")===c.body){var o=h.s.lastFocus.relative,n=f.page.info(),m=o.row+n.start;
0!==n.recordsDisplay&&(m>=n.recordsDisplay&&(m=n.recordsDisplay-1),h._focus(m,o.column,!0,p))
}}});
f.on("destroy.keyTable",function(){f.off(".keyTable");
d(f.table().body()).off("click.keyTable","th, td");
d(c.body).off("keydown.keyTable").off("click.keyTable")
});
var j=f.state.loaded();
if(j&&j.keyTable){f.one("init",function(){var m=f.cell(j.keyTable);
m.any()&&m.focus()
})
}else{this.c.focus&&f.cell(this.c.focus).focus()
}},_blur:function(){if(this.s.enable&&this.s.lastFocus){var f=this.s.lastFocus.cell;
d(f.node()).removeClass(this.c.className);
this.s.lastFocus=null;
this._updateFixedColumns(f.index().column);
this._emitEvent("key-blur",[this.s.dt,f])
}},_clipboardCopy:function(){var h=this.s.dt;
if(this.s.lastFocus&&b.getSelection&&!b.getSelection().toString()){var f=this.s.lastFocus.cell.render("display"),k=d("<div/>").css({height:1,width:1,overflow:"hidden",position:"fixed",top:0,left:0}),f=d("<textarea readonly/>").val(f).appendTo(k);
try{k.appendTo(h.table().container()),f[0].focus(),f[0].select(),c.execCommand("copy")
}catch(j){}k.remove()
}},_columns:function(){var h=this.s.dt,f=h.columns(this.c.columns).indexes(),j=[];
h.columns(":visible").every(function(k){-1!==f.indexOf(k)&&j.push(k)
});
return j
},_editor:function(h,f){var l=this,k=this.s.dt,j=this.c.editor;
!d("div.DTE",this.s.lastFocus.cell.node()).length&&16!==h&&(f.stopPropagation(),13===h&&f.preventDefault(),j.one("open.keyTable",function(){j.off("cancelOpen.keyTable");
l.c.editAutoSelect&&d("div.DTE_Field_InputControl input, div.DTE_Field_InputControl textarea").select();
k.keys.enable(l.c.editorKeys);
k.one("key-blur.editor",function(){j.displayed()&&j.submit()
});
j.one("close",function(){k.keys.enable(!0);
k.off("key-blur.editor")
})
}).one("cancelOpen.keyTable",function(){j.off("open.keyTable")
}).inline(this.s.lastFocus.cell.index()))
},_emitEvent:function(h,f){this.s.dt.iterator("table",function(j){d(j.nTable).triggerHandler(h,f)
})
},_focus:function(s,r,p,o){var n=this,f=this.s.dt,l=f.page.info(),k=this.s.lastFocus;
o||(o=null);
if(this.s.enable){if("number"!==typeof s){var h=s.index(),r=h.column,s=f.rows({filter:"applied",order:"applied"}).indexes().indexOf(h.row);
l.serverSide&&(s+=l.start)
}if(-1!==l.length&&(s<l.start||s>=l.start+l.length)){this.s.focusDraw=!0,this.s.waitingForDraw=!0,f.one("draw",function(){n.s.focusDraw=!1;
n.s.waitingForDraw=!1;
n._focus(s,r,e,o)
}).page(Math.floor(s/l.length)).draw(!1)
}else{if(-1!==d.inArray(r,this._columns())){l.serverSide&&(s-=l.start);
l=f.cells(null,r,{search:"applied",order:"applied"}).flatten();
l=f.cell(l[s]);
if(k){if(k.node===l.node()){this._emitEvent("key-refocus",[this.s.dt,l,o||null]);
return
}this._blur()
}k=d(l.node());
k.addClass(this.c.className);
this._updateFixedColumns(r);
if(p===e||!0===p){this._scroll(d(b),d(c.body),k,"offset"),p=f.table().body().parentNode,p!==f.table().header().parentNode&&(p=d(p.parentNode),this._scroll(p,p,k,"position"))
}this.s.lastFocus={cell:l,node:l.node(),relative:{row:f.rows({page:"current"}).indexes().indexOf(l.index().row),column:l.index().column}};
this._emitEvent("key-focus",[this.s.dt,l,o||null]);
f.state.save()
}}}},_key:function(h){if(this.s.waitingForDraw){h.preventDefault()
}else{var f=this.s.enable,k=!0===f||"navigation-only"===f;
if(f){if(h.ctrlKey&&67===h.keyCode){this._clipboardCopy()
}else{if(!(0===h.keyCode||h.ctrlKey||h.metaKey||h.altKey)&&this.s.lastFocus){var j=this.s.dt;
if(!(this.c.keys&&-1===d.inArray(h.keyCode,this.c.keys))){switch(h.keyCode){case 9:this._shift(h,h.shiftKey?"left":"right",!0);
break;
case 27:this.s.blurable&&!0===f&&this._blur();
break;
case 33:case 34:k&&(h.preventDefault(),j.page(33===h.keyCode?"previous":"next").draw(!1));
break;
case 35:case 36:k&&(h.preventDefault(),f=j.cells({page:"current"}).indexes(),k=this._columns(),this._focus(j.cell(f[35===h.keyCode?f.length-1:k[0]]),null,!0,h));
break;
case 37:k&&this._shift(h,"left");
break;
case 38:k&&this._shift(h,"up");
break;
case 39:k&&this._shift(h,"right");
break;
case 40:k&&this._shift(h,"down");
break;
default:!0===f&&this._emitEvent("key",[j,h.keyCode,this.s.lastFocus.cell,h])
}}}}}}},_scroll:function(u,t,s,r){var p=s[r](),o=s.outerHeight(),n=s.outerWidth(),l=t.scrollTop(),k=t.scrollLeft(),m=u.height(),u=u.width();
"position"===r&&(p.top+=parseInt(s.closest("table").css("top"),10));
p.top<l&&t.scrollTop(p.top);
p.left<k&&t.scrollLeft(p.left);
p.top+o>l+m&&o<m&&t.scrollTop(p.top+o-m);
p.left+n>k+u&&n<u&&t.scrollLeft(p.left+n-u)
},_shift:function(s,r,p){var o=this.s.dt,n=o.page.info(),l=n.recordsDisplay,m=this.s.lastFocus.cell,k=this._columns();
if(m){var f=o.rows({filter:"applied",order:"applied"}).indexes().indexOf(m.index().row);
n.serverSide&&(f+=n.start);
o=o.columns(k).indexes().indexOf(m.index().column);
n=k[o];
"right"===r?o>=k.length-1?(f++,n=k[0]):n=k[o+1]:"left"===r?0===o?(f--,n=k[k.length-1]):n=k[o-1]:"up"===r?f--:"down"===r&&f++;
0<=f&&f<l&&-1!==d.inArray(n,k)?(s.preventDefault(),this._focus(f,n,!0,s)):!p||!this.c.blurable?s.preventDefault():this._blur()
}},_tabInput:function(){var h=this,f=this.s.dt,j=null!==this.c.tabIndex?this.c.tabIndex:f.settings()[0].iTabIndex;
if(-1!=j){d('<div><input type="text" tabindex="'+j+'"/></div>').css({position:"absolute",height:1,width:0,overflow:"hidden"}).insertBefore(f.table().node()).children().on("focus",function(k){f.cell(":eq(0)",{page:"current"}).any()&&h._focus(f.cell(":eq(0)","0:visible",{page:"current"}),null,!0,k)
})
}},_updateFixedColumns:function(h){var f=this.s.dt,k=f.settings()[0];
if(k._oFixedColumns){var j=k.aoColumns.length-k._oFixedColumns.s.iRightColumns;
(h<k._oFixedColumns.s.iLeftColumns||h>=j)&&f.fixedColumns().update()
}}});
g.defaults={blurable:!0,className:"focus",columns:"",editor:null,editorKeys:"navigation-only",editAutoSelect:!0,editOnFocus:!1,focus:null,keys:null,tabIndex:null};
g.version="2.3.2";
d.fn.dataTable.KeyTable=g;
d.fn.DataTable.KeyTable=g;
a.Api.register("cell.blur()",function(){return this.iterator("table",function(f){f.keytable&&f.keytable.blur()
})
});
a.Api.register("cell().focus()",function(){return this.iterator("cell",function(h,f,j){h.keytable&&h.keytable.focus(f,j)
})
});
a.Api.register("keys.disable()",function(){return this.iterator("table",function(f){f.keytable&&f.keytable.enable(!1)
})
});
a.Api.register("keys.enable()",function(f){return this.iterator("table",function(h){h.keytable&&h.keytable.enable(f===e?!0:f)
})
});
a.ext.selector.cell.push(function(j,h,n){var h=h.focused,j=j.keytable,m=[];
if(!j||h===e){return n
}for(var l=0,k=n.length;
l<k;
l++){(!0===h&&j.focused(n[l])||!1===h&&!j.focused(n[l]))&&m.push(n[l])
}return m
});
d(c).on("preInit.dt.dtk",function(h,f){if("dt"===h.namespace){var k=f.oInit.keys,j=a.defaults.keys;
if(k||j){j=d.extend({},j,k),!1!==k&&new g(f,j)
}}});
return g
});
/*!
 Responsive 2.2.0
 2014-2017 SpryMedia Ltd - datatables.net/license
*/
(function(a){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(b){return a(b,window,document)
}):"object"===typeof exports?module.exports=function(b,c){b||(b=window);
if(!c||!c.fn.dataTable){c=require("datatables.net")(b,c).$
}return a(c,b,b.document)
}:a(jQuery,window,document)
})(function(t,g,m,b){function u(h,j,l){var k=j+"-"+l;
if(f[k]){return f[k]
}for(var n=[],h=h.cell(j,l).node().childNodes,j=0,l=h.length;
j<l;
j++){n.push(h[j])
}return f[k]=n
}function a(h,j,p){var n=j+"-"+p;
if(f[n]){for(var h=h.cell(j,p).node(),p=f[n][0].parentNode.childNodes,j=[],l=0,k=p.length;
l<k;
l++){j.push(p[l])
}p=0;
for(l=j.length;
p<l;
p++){h.appendChild(j[p])
}f[n]=b
}}var e=t.fn.dataTable,o=function(c,h){if(!e.versionCheck||!e.versionCheck("1.10.3")){throw"DataTables Responsive requires DataTables 1.10.3 or newer"
}this.s={dt:new e.Api(c),columns:[],current:[]};
this.s.dt.settings()[0].responsive||(h&&"string"===typeof h.details?h.details={type:h.details}:h&&!1===h.details?h.details={type:!1}:h&&!0===h.details&&(h.details={type:"inline"}),this.c=t.extend(!0,{},o.defaults,e.defaults.responsive,h),c.responsive=this,this._constructor())
};
t.extend(o.prototype,{_constructor:function(){var c=this,h=this.s.dt,k=h.settings()[0],j=t(g).width();
h.settings()[0]._responsive=this;
t(g).on("resize.dtr orientationchange.dtr",e.util.throttle(function(){var l=t(g).width();
l!==j&&(c._resize(),j=l)
}));
k.oApi._fnCallbackReg(k,"aoRowCreatedCallback",function(l){-1!==t.inArray(!1,c.s.current)&&t(">td, >th",l).each(function(n){n=h.column.index("toData",n);
!1===c.s.current[n]&&t(this).css("display","none")
})
});
h.on("destroy.dtr",function(){h.off(".dtr");
t(h.table().body()).off(".dtr");
t(g).off("resize.dtr orientationchange.dtr");
t.each(c.s.current,function(l,n){!1===n&&c._setColumnVis(l,!0)
})
});
this.c.breakpoints.sort(function(n,l){return n.width<l.width?1:n.width>l.width?-1:0
});
this._classLogic();
this._resizeAuto();
k=this.c.details;
!1!==k.type&&(c._detailsInit(),h.on("column-visibility.dtr",function(){c._classLogic();
c._resizeAuto();
c._resize()
}),h.on("draw.dtr",function(){c._redrawChildren()
}),t(h.table().node()).addClass("dtr-"+k.type));
h.on("column-reorder.dtr",function(){c._classLogic();
c._resizeAuto();
c._resize()
});
h.on("column-sizing.dtr",function(){c._resizeAuto();
c._resize()
});
h.on("preXhr.dtr",function(){var l=[];
h.rows().every(function(){this.child.isShown()&&l.push(this.id(true))
});
h.one("draw.dtr",function(){h.rows(l).every(function(){c._detailsDisplay(this,false)
})
})
});
h.on("init.dtr",function(){c._resizeAuto();
c._resize();
t.inArray(false,c.s.current)&&h.columns.adjust()
});
this._resize()
},_columnsVisiblity:function(r){var s=this.s.dt,p=this.s.columns,n,l,k=p.map(function(w,v){return{columnIdx:v,priority:w.priority}
}).sort(function(w,v){return w.priority!==v.priority?w.priority-v.priority:w.columnIdx-v.columnIdx
}),j=t.map(p,function(v){return v.auto&&null===v.minWidth?!1:!0===v.auto?"-":-1!==t.inArray(r,v.includeIn)
}),c=0;
n=0;
for(l=j.length;
n<l;
n++){!0===j[n]&&(c+=p[n].minWidth)
}n=s.settings()[0].oScroll;
n=n.sY||n.sX?n.iBarWidth:0;
s=s.table().container().offsetWidth-n-c;
n=0;
for(l=j.length;
n<l;
n++){p[n].control&&(s-=p[n].minWidth)
}c=!1;
n=0;
for(l=k.length;
n<l;
n++){var h=k[n].columnIdx;
"-"===j[h]&&(!p[h].control&&p[h].minWidth)&&(c||0>s-p[h].minWidth?(c=!0,j[h]=!1):j[h]=!0,s-=p[h].minWidth)
}k=!1;
n=0;
for(l=p.length;
n<l;
n++){if(!p[n].control&&!p[n].never&&!j[n]){k=!0;
break
}}n=0;
for(l=p.length;
n<l;
n++){p[n].control&&(j[n]=k)
}-1===t.inArray(!0,j)&&(j[0]=!0);
return j
},_classLogic:function(){var c=this,h=this.c.breakpoints,n=this.s.dt,l=n.columns().eq(0).map(function(r){var p=this.column(r),s=p.header().className,r=n.settings()[0].aoColumns[r].responsivePriority;
r===b&&(p=t(p.header()).data("priority"),r=p!==b?1*p:10000);
return{className:s,includeIn:[],auto:!1,control:!1,never:s.match(/\bnever\b/)?!0:!1,priority:r}
}),k=function(r,p){var s=l[r].includeIn;
-1===t.inArray(p,s)&&s.push(p)
},j=function(v,s,r,p){if(r){if("max-"===r){p=c._find(s).width;
s=0;
for(r=h.length;
s<r;
s++){h[s].width<=p&&k(v,h[s].name)
}}else{if("min-"===r){p=c._find(s).width;
s=0;
for(r=h.length;
s<r;
s++){h[s].width>=p&&k(v,h[s].name)
}}else{if("not-"===r){s=0;
for(r=h.length;
s<r;
s++){-1===h[s].name.indexOf(p)&&k(v,h[s].name)
}}}}}else{l[v].includeIn.push(s)
}};
l.each(function(p,x){for(var y=p.className.split(" "),w=!1,v=0,r=y.length;
v<r;
v++){var s=t.trim(y[v]);
if("all"===s){w=!0;
p.includeIn=t.map(h,function(z){return z.name
});
return
}if("none"===s||p.never){w=!0;
return
}if("control"===s){w=!0;
p.control=!0;
return
}t.each(h,function(A,z){var C=z.name.split("-"),B=s.match(RegExp("(min\\-|max\\-|not\\-)?("+C[0]+")(\\-[_a-zA-Z0-9])?"));
B&&(w=!0,B[2]===C[0]&&B[3]==="-"+C[1]?j(x,z.name,B[1],B[2]+B[3]):B[2]===C[0]&&!B[3]&&j(x,z.name,B[1],B[2]))
})
}w||(p.auto=!0)
});
this.s.columns=l
},_detailsDisplay:function(c,h){var n=this,l=this.s.dt,k=this.c.details;
if(k&&!1!==k.type){var j=k.display(c,h,function(){return k.renderer(l,c[0],n._detailsObj(c[0]))
});
(!0===j||!1===j)&&t(l.table().node()).triggerHandler("responsive-display.dt",[l,c,j,h])
}},_detailsInit:function(){var c=this,h=this.s.dt,k=this.c.details;
"inline"===k.type&&(k.target="td:first-child, th:first-child");
h.on("draw.dtr",function(){c._tabIndexes()
});
c._tabIndexes();
t(h.table().body()).on("keyup.dtr","td, th",function(l){l.keyCode===13&&t(this).data("dtr-keyboard")&&t(this).click()
});
var j=k.target;
t(h.table().body()).on("click.dtr mousedown.dtr mouseup.dtr","string"===typeof j?j:"td, th",function(n){if(t(h.table().node()).hasClass("collapsed")&&t.inArray(t(this).closest("tr").get(0),h.rows().nodes().toArray())!==-1){if(typeof j==="number"){var l=j<0?h.columns().eq(0).length+j:j;
if(h.cell(this).index().column!==l){return
}}l=h.row(t(this).closest("tr"));
n.type==="click"?c._detailsDisplay(l,false):n.type==="mousedown"?t(this).css("outline","none"):n.type==="mouseup"&&t(this).blur().css("outline","")
}})
},_detailsObj:function(c){var h=this,j=this.s.dt;
return t.map(this.s.columns,function(k,l){if(!k.never&&!k.control){return{title:j.settings()[0].aoColumns[l].sTitle,data:j.cell(c,l).render(h.c.orthogonal),hidden:j.column(l).visible()&&!h.s.current[l],columnIndex:l,rowIndex:c}
}})
},_find:function(h){for(var j=this.c.breakpoints,k=0,l=j.length;
k<l;
k++){if(j[k].name===h){return j[k]
}}},_redrawChildren:function(){var c=this,h=this.s.dt;
h.rows({page:"current"}).iterator("row",function(k,j){h.row(j);
c._detailsDisplay(h.row(j),!0)
})
},_resize:function(){var x=this,y=this.s.dt,w=t(g).width(),v=this.c.breakpoints,s=v[0].name,r=this.s.columns,n,p=this.s.current.slice();
for(n=v.length-1;
0<=n;
n--){if(w<=v[n].width){s=v[n].name;
break
}}var k=this._columnsVisiblity(s);
this.s.current=k;
v=!1;
n=0;
for(w=r.length;
n<w;
n++){if(!1===k[n]&&!r[n].never&&!r[n].control){v=!0;
break
}}t(y.table().node()).toggleClass("collapsed",v);
var c=!1;
y.columns().eq(0).each(function(h,j){k[j]!==p[j]&&(c=!0,x._setColumnVis(h,k[j]))
});
c&&(this._redrawChildren(),t(y.table().node()).trigger("responsive-resize.dt",[y,this.s.current]),0===y.page.info().recordsDisplay&&y.draw())
},_resizeAuto:function(){var c=this.s.dt,h=this.s.columns;
if(this.c.auto&&-1!==t.inArray(!0,t.map(h,function(r){return r.auto
}))){t.isEmptyObject(f)||t.each(f,function(r){r=r.split("-");
a(c,1*r[0],1*r[1])
});
c.table().node();
var p=c.table().node().cloneNode(!1),n=t(c.table().header().cloneNode(!1)).appendTo(p),l=t(c.table().body()).clone(!1,!1).empty().appendTo(p),k=c.columns().header().filter(function(r){return c.column(r).visible()
}).to$().clone(!1).css("display","table-cell");
t(l).append(t(c.rows({page:"current"}).nodes()).clone(!1)).find("th, td").css("display","");
if(l=c.table().footer()){var l=t(l.cloneNode(!1)).appendTo(p),j=c.columns().footer().filter(function(r){return c.column(r).visible()
}).to$().clone(!1).css("display","table-cell");
t("<tr/>").append(j).appendTo(l)
}t("<tr/>").append(k).appendTo(n);
"inline"===this.c.details.type&&t(p).addClass("dtr-inline collapsed");
t(p).find("[name]").removeAttr("name");
p=t("<div/>").css({width:1,height:1,overflow:"hidden",clear:"both"}).append(p);
p.insertBefore(c.table().node());
k.each(function(r){r=c.column.index("fromVisible",r);
h[r].minWidth=this.offsetWidth||0
});
p.remove()
}},_setColumnVis:function(c,h){var k=this.s.dt,j=h?"":"none";
t(k.column(c).header()).css("display",j);
t(k.column(c).footer()).css("display",j);
k.column(c).nodes().to$().css("display",j);
t.isEmptyObject(f)||k.cells(null,c).indexes().each(function(l){a(k,l.row,l.column)
})
},_tabIndexes:function(){var c=this.s.dt,h=c.cells({page:"current"}).nodes().to$(),k=c.settings()[0],j=this.c.details.target;
h.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]");
h="number"===typeof j?":eq("+j+")":j;
"td:first-child, th:first-child"===h&&(h=">td:first-child, >th:first-child");
t(h,c.rows({page:"current"}).nodes()).attr("tabIndex",k.iTabIndex).data("dtr-keyboard",1)
}});
o.breakpoints=[{name:"desktop",width:Infinity},{name:"tablet-l",width:1024},{name:"tablet-p",width:768},{name:"mobile-l",width:480},{name:"mobile-p",width:320}];
o.display={childRow:function(c,h,j){if(h){if(t(c.node()).hasClass("parent")){return c.child(j(),"child").show(),!0
}}else{if(c.child.isShown()){return c.child(!1),t(c.node()).removeClass("parent"),!1
}c.child(j(),"child").show();
t(c.node()).addClass("parent");
return !0
}},childRowImmediate:function(c,h,j){if(!h&&c.child.isShown()||!c.responsive.hasHidden()){return c.child(!1),t(c.node()).removeClass("parent"),!1
}c.child(j(),"child").show();
t(c.node()).addClass("parent");
return !0
},modal:function(c){return function(h,n,l){if(n){t("div.dtr-modal-content").empty().append(l())
}else{var k=function(){j.remove();
t(m).off("keypress.dtr")
},j=t('<div class="dtr-modal"/>').append(t('<div class="dtr-modal-display"/>').append(t('<div class="dtr-modal-content"/>').append(l())).append(t('<div class="dtr-modal-close">&times;</div>').click(function(){k()
}))).append(t('<div class="dtr-modal-background"/>').click(function(){k()
})).appendTo("body");
t(m).on("keyup.dtr",function(p){27===p.keyCode&&(p.stopPropagation(),k())
})
}c&&c.header&&t("div.dtr-modal-content").prepend("<h2>"+c.header(h)+"</h2>")
}
}};
var f={};
o.renderer={listHiddenNodes:function(){return function(c,h,l){var k=t('<ul data-dtr-index="'+h+'" class="dtr-details"/>'),j=!1;
t.each(l,function(n,p){p.hidden&&(t('<li data-dtr-index="'+p.columnIndex+'" data-dt-row="'+p.rowIndex+'" data-dt-column="'+p.columnIndex+'"><span class="dtr-title">'+p.title+"</span> </li>").append(t('<span class="dtr-data"/>').append(u(c,p.rowIndex,p.columnIndex))).appendTo(k),j=!0)
});
return j?k:!1
}
},listHidden:function(){return function(c,h,j){return(c=t.map(j,function(k){return k.hidden?'<li data-dtr-index="'+k.columnIndex+'" data-dt-row="'+k.rowIndex+'" data-dt-column="'+k.columnIndex+'"><span class="dtr-title">'+k.title+'</span> <span class="dtr-data">'+k.data+"</span></li>":""
}).join(""))?t('<ul data-dtr-index="'+h+'" class="dtr-details"/>').append(c):!1
}
},tableAll:function(c){c=t.extend({tableClass:""},c);
return function(h,k,j){h=t.map(j,function(l){return'<tr data-dt-row="'+l.rowIndex+'" data-dt-column="'+l.columnIndex+'"><td>'+l.title+":</td> <td>"+l.data+"</td></tr>"
}).join("");
return t('<table class="'+c.tableClass+' dtr-details" width="100%"/>').append(h)
}
}};
o.defaults={breakpoints:o.breakpoints,auto:!0,details:{display:o.display.childRow,renderer:o.renderer.listHidden(),target:0,type:"inline"},orthogonal:"display"};
var d=t.fn.dataTable.Api;
d.register("responsive()",function(){return this
});
d.register("responsive.index()",function(c){c=t(c);
return{column:c.data("dtr-index"),row:c.parent().data("dtr-index")}
});
d.register("responsive.rebuild()",function(){return this.iterator("table",function(c){c._responsive&&c._responsive._classLogic()
})
});
d.register("responsive.recalc()",function(){return this.iterator("table",function(c){c._responsive&&(c._responsive._resizeAuto(),c._responsive._resize())
})
});
d.register("responsive.hasHidden()",function(){var c=this.context[0];
return c._responsive?-1!==t.inArray(!1,c._responsive.s.current):!1
});
o.version="2.2.0";
t.fn.dataTable.Responsive=o;
t.fn.DataTable.Responsive=o;
t(m).on("preInit.dt.dtr",function(c,h){if("dt"===c.namespace&&(t(h.nTable).hasClass("responsive")||t(h.nTable).hasClass("dt-responsive")||h.oInit.responsive||e.defaults.responsive)){var j=h.oInit.responsive;
!1!==j&&new o(h,t.isPlainObject(j)?j:{})
}});
return o
});
/*!
 Bootstrap integration for DataTables' Responsive
 ©2015-2016 SpryMedia Ltd - datatables.net/license
*/
(function(a){"function"===typeof define&&define.amd?define(["jquery","datatables.net-bs","datatables.net-responsive"],function(b){return a(b,window,document)
}):"object"===typeof exports?module.exports=function(d,c){d||(d=window);
if(!c||!c.fn.dataTable){c=require("datatables.net-bs")(d,c).$
}c.fn.dataTable.Responsive||require("datatables.net-responsive")(d,c);
return a(c,d,d.document)
}:a(jQuery,window,document)
})(function(k){var f=k.fn.dataTable,d=f.Responsive.display,h=d.modal,j=k('<div class="modal fade dtr-bs-modal" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"/></div></div></div>');
d.modal=function(b){return function(a,g,e){if(k.fn.modal){if(!g){if(b&&b.header){var g=j.find("div.modal-header"),c=g.find("button").detach();
g.empty().append('<h4 class="modal-title">'+b.header(a)+"</h4>").prepend(c)
}j.find("div.modal-body").empty().append(e());
j.appendTo("body").modal()
}}else{h(a,g,e)
}}
};
return f.Responsive
});
/*!
 RowGroup 1.0.2
 ©2017 SpryMedia Ltd - datatables.net/license
*/
(function(a){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(b){return a(b,window,document)
}):"object"===typeof exports?module.exports=function(c,b){c||(c=window);
if(!b||!b.fn.dataTable){b=require("datatables.net")(c,b).$
}return a(b,c,c.document)
}:a(jQuery,window,document)
})(function(l,k,h,a){var j=l.fn.dataTable,b=function(d,c){if(!j.versionCheck||!j.versionCheck("1.10.8")){throw"RowGroup requires DataTables 1.10.8 or newer"
}this.c=l.extend(!0,{},j.defaults.rowGroup,b.defaults,c);
this.s={dt:new j.Api(d),dataFn:j.ext.oApi._fnGetObjectDataFn(this.c.dataSrc)};
this.dom={};
var f=this.s.dt.settings()[0],e=f.rowGroup;
if(e){return e
}f.rowGroup=this;
this._constructor()
};
l.extend(b.prototype,{dataSrc:function(d){if(d===a){return this.c.dataSrc
}var c=this.s.dt;
this.c.dataSrc=d;
this.s.dataFn=j.ext.oApi._fnGetObjectDataFn(this.c.dataSrc);
l(c.table().node()).triggerHandler("rowgroup-datasrc.dt",[c,d]);
return this
},disable:function(){this.c.enable=!1;
return this
},enable:function(c){if(!1===c){return this.disable()
}this.c.enable=!0;
return this
},_constructor:function(){var d=this,c=this.s.dt;
c.on("draw.dtrg",function(){d.c.enable&&d._draw()
});
c.on("column-visibility.dt.dtrg responsive-resize.dt.dtrg",function(){d._adjustColspan()
});
c.on("destroy",function(){c.off(".dtrg")
})
},_adjustColspan:function(){l("tr."+this.c.className,this.s.dt.table().body()).attr("colspan",this._colspan())
},_colspan:function(){return this.s.dt.columns().visible().reduce(function(d,c){return d+c
},0)
},_draw:function(){var x=this,w=this.s.dt,v=[],t,u;
w.rows({page:"current"}).every(function(){var c=this.data(),c=x.s.dataFn(c);
if(t===a||c!==t){v.push([]),t=c
}v[v.length-1].push(this.index())
});
for(var r=0,s=v.length;
r<s;
r++){var p=v[r],o=w.row(p[0]),n=this.s.dataFn(o.data());
this.c.startRender&&(u=this.c.startRender.call(this,w.rows(p),n),this._rowWrap(u,this.c.startClassName).insertBefore(o.node()));
this.c.endRender&&(u=this.c.endRender.call(this,w.rows(p),n),this._rowWrap(u,this.c.endClassName).insertAfter(w.row(p[p.length-1]).node()))
}},_rowWrap:function(d,c){return("object"===typeof d&&d.nodeName&&"tr"===d.nodeName.toLowerCase()?l(d):d instanceof l&&d.length&&"tr"===d[0].nodeName.toLowerCase()?d:l("<tr/>").append(l("<td/>").attr("colspan",this._colspan()).append(d))).addClass(this.c.className).addClass(c)
}});
b.defaults={className:"group",dataSrc:0,enable:!0,endClassName:"group-end",endRender:null,startClassName:"group-start",startRender:function(d,c){return c
}};
b.version="1.0.2";
l.fn.dataTable.RowGroup=b;
l.fn.DataTable.RowGroup=b;
j.Api.register("rowGroup()",function(){return this
});
j.Api.register("rowGroup().disable()",function(){return this.iterator("table",function(c){c.rowGroup&&c.rowGroup.enable(!1)
})
});
j.Api.register("rowGroup().enable()",function(c){return this.iterator("table",function(d){d.rowGroup&&d.rowGroup.enable(c===a?!0:c)
})
});
j.Api.register("rowGroup().dataSrc()",function(c){return c===a?this.context[0].rowGroup.dataSrc():this.iterator("table",function(d){d.rowGroup&&d.rowGroup.dataSrc(c)
})
});
l(h).on("preInit.dt.dtrg",function(e,c){if("dt"===e.namespace){var m=c.oInit.rowGroup,g=j.defaults.rowGroup;
if(m||g){g=l.extend({},g,m),!1!==m&&new b(c,g)
}}});
return b
});
/*!
 RowReorder 1.2.3
 2015-2017 SpryMedia Ltd - datatables.net/license
*/
(function(a){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(b){return a(b,window,document)
}):"object"===typeof exports?module.exports=function(c,b){c||(c=window);
if(!b||!b.fn.dataTable){b=require("datatables.net")(c,b).$
}return a(b,c,c.document)
}:a(jQuery,window,document)
})(function(o,n,j,a){var e=o.fn.dataTable,c=function(h,d){if(!e.versionCheck||!e.versionCheck("1.10.8")){throw"DataTables RowReorder requires DataTables 1.10.8 or newer"
}this.c=o.extend(!0,{},e.defaults.rowReorder,c.defaults,d);
this.s={bodyTop:null,dt:new e.Api(h),getDataFn:e.ext.oApi._fnGetObjectDataFn(this.c.dataSrc),middles:null,scroll:{},scrollInterval:null,setDataFn:e.ext.oApi._fnSetObjectDataFn(this.c.dataSrc),start:{top:0,left:0,offsetTop:0,offsetLeft:0,nodes:[]},windowHeight:0,documentOuterHeight:0,domCloneOuterHeight:0};
this.dom={clone:null,dtScroll:o("div.dataTables_scrollBody",this.s.dt.table().container())};
var f=this.s.dt.settings()[0],g=f.rowreorder;
if(g){return g
}f.rowreorder=this;
this._constructor()
};
o.extend(c.prototype,{_constructor:function(){var g=this,d=this.s.dt,f=o(d.table().node());
"static"===f.css("position")&&f.css("position","relative");
o(d.table().container()).on("mousedown.rowReorder touchstart.rowReorder",this.c.selector,function(h){if(g.c.enable){var l=o(this).closest("tr"),k=d.row(l);
if(k.any()){return g._emitEvent("pre-row-reorder",{node:k.node(),index:k.index()}),g._mouseDown(h,l),!1
}}});
d.on("destroy.rowReorder",function(){o(d.table().container()).off(".rowReorder");
d.off(".rowReorder")
})
},_cachePositions:function(){var h=this.s.dt,d=o(h.table().node()).find("thead").outerHeight(),f=o.unique(h.rows({page:"current"}).nodes().toArray()),g=o.map(f,function(k){return o(k).position().top-d
}),f=o.map(g,function(l,k){return g.length<k-1?(l+g[k+1])/2:(l+l+o(h.row(":last-child").node()).outerHeight())/2
});
this.s.middles=f;
this.s.bodyTop=o(h.table().body()).offset().top;
this.s.windowHeight=o(n).height();
this.s.documentOuterHeight=o(j).outerHeight()
},_clone:function(k){var d=o(this.s.dt.table().node().cloneNode(!1)).addClass("dt-rowReorder-float").append("<tbody/>").append(k.clone(!1)),f=k.outerWidth(),h=k.outerHeight(),g=k.children().map(function(){return o(this).width()
});
d.width(f).height(h).find("tr").children().each(function(l){this.style.width=g[l]+"px"
});
d.appendTo("body");
this.dom.clone=d;
this.s.domCloneOuterHeight=d.outerHeight()
},_clonePosition:function(h){var d=this.s.start,f=this._eventToPage(h,"Y")-d.top,h=this._eventToPage(h,"X")-d.left,g=this.c.snapX,f=f+d.offsetTop,d=!0===g?d.offsetLeft:"number"===typeof g?d.offsetLeft+g:h+d.offsetLeft;
0>f?f=0:f+this.s.domCloneOuterHeight>this.s.documentOuterHeight&&(f=this.s.documentOuterHeight-this.s.domCloneOuterHeight);
this.dom.clone.css({top:f,left:d})
},_emitEvent:function(f,d){this.s.dt.iterator("table",function(g){o(g.nTable).triggerHandler(f+".dt",d)
})
},_eventToPage:function(f,d){return -1!==f.type.indexOf("touch")?f.originalEvent.touches[0]["page"+d]:f["page"+d]
},_mouseDown:function(l,d){var f=this,k=this.s.dt,h=this.s.start,g=d.offset();
h.top=this._eventToPage(l,"Y");
h.left=this._eventToPage(l,"X");
h.offsetTop=g.top;
h.offsetLeft=g.left;
h.nodes=o.unique(k.rows({page:"current"}).nodes().toArray());
this._cachePositions();
this._clone(d);
this._clonePosition(l);
this.dom.target=d;
d.addClass("dt-rowReorder-moving");
o(j).on("mouseup.rowReorder touchend.rowReorder",function(m){f._mouseUp(m)
}).on("mousemove.rowReorder touchmove.rowReorder",function(m){f._mouseMove(m)
});
o(n).width()===o(j).width()&&o(j.body).addClass("dt-rowReorder-noOverflow");
k=this.dom.dtScroll;
this.s.scroll={windowHeight:o(n).height(),windowWidth:o(n).width(),dtTop:k.length?k.offset().top:null,dtLeft:k.length?k.offset().left:null,dtHeight:k.length?k.outerHeight():null,dtWidth:k.length?k.outerWidth():null}
},_mouseMove:function(s){this._clonePosition(s);
for(var d=this._eventToPage(s,"Y")-this.s.bodyTop,h=this.s.middles,r=null,l=this.s.dt,k=l.table().body(),m=0,p=h.length;
m<p;
m++){if(d<h[m]){r=m;
break
}}null===r&&(r=h.length);
if(null===this.s.lastInsert||this.s.lastInsert!==r){0===r?this.dom.target.prependTo(k):(d=o.unique(l.rows({page:"current"}).nodes().toArray()),r>this.s.lastInsert?this.dom.target.insertAfter(d[r-1]):this.dom.target.insertBefore(d[r])),this._cachePositions(),this.s.lastInsert=r
}this._shiftScroll(s)
},_mouseUp:function(){var E=this,F=this.s.dt,G,D,A=this.c.dataSrc;
this.dom.clone.remove();
this.dom.clone=null;
this.dom.target.removeClass("dt-rowReorder-moving");
o(j).off(".rowReorder");
o(j.body).removeClass("dt-rowReorder-noOverflow");
clearInterval(this.s.scrollInterval);
this.s.scrollInterval=null;
var z=this.s.start.nodes,C=o.unique(F.rows({page:"current"}).nodes().toArray()),y={},B=[],x=[],v=this.s.getDataFn,w=this.s.setDataFn;
G=0;
for(D=z.length;
G<D;
G++){if(z[G]!==C[G]){var u=F.row(C[G]).id(),H=F.row(C[G]).data(),t=F.row(z[G]).data();
u&&(y[u]=v(t));
B.push({node:C[G],oldData:v(H),newData:v(t),newPosition:G,oldPosition:o.inArray(C[G],z)});
x.push(C[G])
}}var g=[B,{dataSrc:A,nodes:x,values:y,triggerRow:F.row(this.dom.target)}];
this._emitEvent("row-reorder",g);
var d=function(){if(E.c.update){G=0;
for(D=B.length;
G<D;
G++){var f=F.row(B[G].node).data();
w(f,B[G].newData);
F.columns().every(function(){this.dataSrc()===A&&F.cell(B[G].node,this.index()).invalidate("data")
})
}E._emitEvent("row-reordered",g);
F.draw(!1)
}};
this.c.editor?(this.c.enable=!1,this.c.editor.edit(x,!1,o.extend({submit:"changed"},this.c.formOptions)).multiSet(A,y).one("submitUnsuccessful.rowReorder",function(){F.draw(!1)
}).one("submitSuccess.rowReorder",function(){d()
}).one("submitComplete",function(){E.c.enable=!0;
E.c.editor.off(".rowReorder")
}).submit()):d()
},_shiftScroll:function(s){var g=this,k=this.s.scroll,p=!1,r=s.pageY-j.body.scrollTop,m,l;
65>r?m=-5:r>k.windowHeight-65&&(m=5);
null!==k.dtTop&&s.pageY<k.dtTop+65?l=-5:null!==k.dtTop&&s.pageY>k.dtTop+k.dtHeight-65&&(l=5);
m||l?(k.windowVert=m,k.dtVert=l,p=!0):this.s.scrollInterval&&(clearInterval(this.s.scrollInterval),this.s.scrollInterval=null);
!this.s.scrollInterval&&p&&(this.s.scrollInterval=setInterval(function(){if(k.windowVert){j.body.scrollTop=j.body.scrollTop+k.windowVert
}if(k.dtVert){var d=g.dom.dtScroll[0];
if(k.dtVert){d.scrollTop=d.scrollTop+k.dtVert
}}},20))
}});
c.defaults={dataSrc:0,editor:null,enable:!0,formOptions:{},selector:"td:first-child",snapX:!1,update:!0};
var b=o.fn.dataTable.Api;
b.register("rowReorder()",function(){return this
});
b.register("rowReorder.enable()",function(d){d===a&&(d=!0);
return this.iterator("table",function(f){f.rowreorder&&(f.rowreorder.c.enable=d)
})
});
b.register("rowReorder.disable()",function(){return this.iterator("table",function(d){d.rowreorder&&(d.rowreorder.c.enable=!1)
})
});
c.version="1.2.3";
o.fn.dataTable.RowReorder=c;
o.fn.DataTable.RowReorder=c;
o(j).on("init.dt.dtr",function(h,d){if("dt"===h.namespace){var f=d.oInit.rowReorder,g=e.defaults.rowReorder;
if(f||g){g=o.extend({},f,g),!1!==f&&new c(d,g)
}}});
return c
});
/*!
 Scroller 1.4.3
 ©2011-2017 SpryMedia Ltd - datatables.net/license
*/
(function(a){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(b){return a(b,window,document)
}):"object"===typeof exports?module.exports=function(c,b){c||(c=window);
if(!b||!b.fn.dataTable){b=require("datatables.net")(c,b).$
}return a(b,c,c.document)
}:a(jQuery,window,document)
})(function(o,n,d,b){var a=o.fn.dataTable,f=function(g,e){this instanceof f?(e===b&&(e={}),this.s={dt:o.fn.dataTable.Api(g).settings()[0],tableTop:0,tableBottom:0,redrawTop:0,redrawBottom:0,autoHeight:!0,viewportRows:0,stateTO:null,drawTO:null,heights:{jump:null,page:null,virtual:null,scroll:null,row:null,viewport:null},topRowFloat:0,scrollDrawDiff:null,loaderVisible:!1,forceReposition:!1},this.s=o.extend(this.s,f.oDefaults,e),this.s.heights.row=this.s.rowHeight,this.dom={force:d.createElement("div"),scroller:null,table:null,loader:null},this.s.dt.oScroller||(this.s.dt.oScroller=this,this._fnConstruct())):alert("Scroller warning: Scroller must be initialised with the 'new' keyword.")
};
o.extend(f.prototype,{fnRowToPixels:function(g,e,h){g=h?this._domain("virtualToPhysical",g*this.s.heights.row):this.s.baseScrollTop+(g-this.s.baseRowTop)*this.s.heights.row;
return e||e===b?parseInt(g,10):g
},fnPixelsToRow:function(g,e,j){var h=g-this.s.baseScrollTop,g=j?this._domain("physicalToVirtual",g)/this.s.heights.row:h/this.s.heights.row+this.s.baseRowTop;
return e||e===b?parseInt(g,10):g
},fnScrollToRow:function(g,e){var l=this,k=!1,j=this.fnRowToPixels(g),h=g-(this.s.displayBuffer-1)/2*this.s.viewportRows;
0>h&&(h=0);
if((j>this.s.redrawBottom||j<this.s.redrawTop)&&this.s.dt._iDisplayStart!==h){k=!0,j=this.fnRowToPixels(g,!1,!0),this.s.redrawTop<j&&j<this.s.redrawBottom&&(this.s.forceReposition=!0,e=!1)
}"undefined"==typeof e||e?(this.s.ani=k,o(this.dom.scroller).animate({scrollTop:j},function(){setTimeout(function(){l.s.ani=!1
},25)
})):o(this.dom.scroller).scrollTop(j)
},fnMeasure:function(g){this.s.autoHeight&&this._fnCalcRowHeight();
var e=this.s.heights;
e.row&&(e.viewport=o.contains(d,this.dom.scroller)?o(this.dom.scroller).height():this._parseHeight(o(this.dom.scroller).css("height")),e.viewport||(e.viewport=this._parseHeight(o(this.dom.scroller).css("max-height"))),this.s.viewportRows=parseInt(e.viewport/e.row,10)+1,this.s.dt._iDisplayLength=this.s.viewportRows*this.s.displayBuffer);
(g===b||g)&&this.s.dt.oInstance.fnDraw(!1)
},fnPageInfo:function(){var g=this.dom.scroller.scrollTop,e=this.s.dt.fnRecordsDisplay(),h=Math.ceil(this.fnPixelsToRow(g+this.s.heights.viewport,!1,this.s.ani));
return{start:Math.floor(this.fnPixelsToRow(g,!1,this.s.ani)),end:e<h?e-1:h-1}
},_fnConstruct:function(){var g=this;
if(this.s.dt.oFeatures.bPaginate){this.dom.force.style.position="relative";
this.dom.force.style.top="0px";
this.dom.force.style.left="0px";
this.dom.force.style.width="1px";
this.dom.scroller=o("div."+this.s.dt.oClasses.sScrollBody,this.s.dt.nTableWrapper)[0];
this.dom.scroller.appendChild(this.dom.force);
this.dom.scroller.style.position="relative";
this.dom.table=o(">table",this.dom.scroller)[0];
this.dom.table.style.position="absolute";
this.dom.table.style.top="0px";
this.dom.table.style.left="0px";
o(this.s.dt.nTableWrapper).addClass("DTS");
this.s.loadingIndicator&&(this.dom.loader=o('<div class="dataTables_processing DTS_Loading">'+this.s.dt.oLanguage.sLoadingRecords+"</div>").css("display","none"),o(this.dom.scroller.parentNode).css("position","relative").append(this.dom.loader));
this.s.heights.row&&"auto"!=this.s.heights.row&&(this.s.autoHeight=!1);
this.fnMeasure(!1);
this.s.ingnoreScroll=!0;
this.s.stateSaveThrottle=this.s.dt.oApi._fnThrottle(function(){g.s.dt.oApi._fnSaveState(g.s.dt)
},500);
o(this.dom.scroller).on("scroll.DTS",function(){g._fnScroll.call(g)
});
o(this.dom.scroller).on("touchstart.DTS",function(){g._fnScroll.call(g)
});
this.s.dt.aoDrawCallback.push({fn:function(){g.s.dt.bInitialised&&g._fnDrawCallback.call(g)
},sName:"Scroller"});
o(n).on("resize.DTS",function(){g.fnMeasure(false);
g._fnInfo()
});
var e=!0;
this.s.dt.oApi._fnCallbackReg(this.s.dt,"aoStateSaveParams",function(j,h){if(e&&g.s.dt.oLoadedState){h.iScroller=g.s.dt.oLoadedState.iScroller;
h.iScrollerTopRow=g.s.dt.oLoadedState.iScrollerTopRow;
e=false
}else{h.iScroller=g.dom.scroller.scrollTop;
h.iScrollerTopRow=g.s.topRowFloat
}},"Scroller_State");
this.s.dt.oLoadedState&&(this.s.topRowFloat=this.s.dt.oLoadedState.iScrollerTopRow||0);
o(this.s.dt.nTable).one("init.dt",function(){g.fnMeasure()
});
this.s.dt.aoDestroyCallback.push({sName:"Scroller",fn:function(){o(n).off("resize.DTS");
o(g.dom.scroller).off("touchstart.DTS scroll.DTS");
o(g.s.dt.nTableWrapper).removeClass("DTS");
o("div.DTS_Loading",g.dom.scroller.parentNode).remove();
o(g.s.dt.nTable).off("init.dt");
g.dom.table.style.position="";
g.dom.table.style.top="";
g.dom.table.style.left=""
}})
}else{this.s.dt.oApi._fnLog(this.s.dt,0,"Pagination must be enabled for Scroller")
}},_fnScroll:function(){var g=this,e=this.s.heights,k=this.dom.scroller.scrollTop,j;
if(!this.s.skip&&!this.s.ingnoreScroll){if(this.s.dt.bFiltered||this.s.dt.bSorted){this.s.lastScrollTop=0
}else{this._fnInfo();
clearTimeout(this.s.stateTO);
this.s.stateTO=setTimeout(function(){g.s.dt.oApi._fnSaveState(g.s.dt)
},250);
if(this.s.forceReposition||k<this.s.redrawTop||k>this.s.redrawBottom){var h=Math.ceil((this.s.displayBuffer-1)/2*this.s.viewportRows);
Math.abs(k-this.s.lastScrollTop)>e.viewport||this.s.ani||this.s.forceReposition?(j=parseInt(this._domain("physicalToVirtual",k)/e.row,10)-h,this.s.topRowFloat=this._domain("physicalToVirtual",k)/e.row):(j=this.fnPixelsToRow(k)-h,this.s.topRowFloat=this.fnPixelsToRow(k,!1));
this.s.forceReposition=!1;
0>=j?j=0:j+this.s.dt._iDisplayLength>this.s.dt.fnRecordsDisplay()?(j=this.s.dt.fnRecordsDisplay()-this.s.dt._iDisplayLength,0>j&&(j=0)):0!==j%2&&j++;
if(j!=this.s.dt._iDisplayStart&&(this.s.tableTop=o(this.s.dt.nTable).offset().top,this.s.tableBottom=o(this.s.dt.nTable).height()+this.s.tableTop,e=function(){if(g.s.scrollDrawReq===null){g.s.scrollDrawReq=k
}g.s.dt._iDisplayStart=j;
g.s.dt.oApi._fnDraw(g.s.dt)
},this.s.dt.oFeatures.bServerSide?(clearTimeout(this.s.drawTO),this.s.drawTO=setTimeout(e,this.s.serverWait)):e(),this.dom.loader&&!this.s.loaderVisible)){this.dom.loader.css("display","block"),this.s.loaderVisible=!0
}}else{this.s.topRowFloat=this._domain("physicalToVirtual",k)/e.row
}this.s.lastScrollTop=k;
this.s.stateSaveThrottle()
}}},_domain:function(h,g){var m=this.s.heights,l;
if(m.virtual===m.scroll){return g
}var k=(m.scroll-m.viewport)/2,j=(m.virtual-m.viewport)/2;
l=j/(k*k);
if("virtualToPhysical"===h){if(g<j){return Math.pow(g/l,0.5)
}g=2*j-g;
return 0>g?m.scroll:2*k-Math.pow(g/l,0.5)
}if("physicalToVirtual"===h){if(g<k){return g*g*l
}g=2*k-g;
return 0>g?m.virtual:2*j-g*g*l
}},_parseHeight:function(g){var e,h=/^([+-]?(?:\d+(?:\.\d+)?|\.\d+))(px|em|rem|vh)$/.exec(g);
if(null===h){return 0
}g=parseFloat(h[1]);
h=h[2];
"px"===h?e=g:"vh"===h?e=g/100*o(n).height():"rem"===h?e=g*parseFloat(o(":root").css("font-size")):"em"===h&&(e=g*parseFloat(o("body").css("font-size")));
return e?e:0
},_fnDrawCallback:function(){var j=this,e=this.s.heights,s=this.dom.scroller.scrollTop,r=o(this.s.dt.nTable).height(),p=this.s.dt._iDisplayStart,k=this.s.dt._iDisplayLength,l=this.s.dt.fnRecordsDisplay();
this.s.skip=!0;
this._fnScrollForce();
s=0===p?this.s.topRowFloat*e.row:p+k>=l?e.scroll-(l-this.s.topRowFloat)*e.row:this._domain("virtualToPhysical",this.s.topRowFloat*e.row);
this.dom.scroller.scrollTop=s;
this.s.baseScrollTop=s;
this.s.baseRowTop=this.s.topRowFloat;
var m=s-(this.s.topRowFloat-p)*e.row;
0===p?m=0:p+k>=l&&(m=e.scroll-r);
this.dom.table.style.top=m+"px";
this.s.tableTop=m;
this.s.tableBottom=r+this.s.tableTop;
r=(s-this.s.tableTop)*this.s.boundaryScale;
this.s.redrawTop=s-r;
this.s.redrawBottom=s+r>e.scroll-e.viewport-e.row?e.scroll-e.viewport-e.row:s+r;
this.s.skip=!1;
this.s.dt.oFeatures.bStateSave&&null!==this.s.dt.oLoadedState&&"undefined"!=typeof this.s.dt.oLoadedState.iScroller?((s=(this.s.dt.sAjaxSource||j.s.dt.ajax)&&!this.s.dt.oFeatures.bServerSide?!0:!1)&&2==this.s.dt.iDraw||!s&&1==this.s.dt.iDraw)&&setTimeout(function(){o(j.dom.scroller).scrollTop(j.s.dt.oLoadedState.iScroller);
j.s.redrawTop=j.s.dt.oLoadedState.iScroller-e.viewport/2;
setTimeout(function(){j.s.ingnoreScroll=!1
},0)
},0):j.s.ingnoreScroll=!1;
this.s.dt.oFeatures.bInfo&&setTimeout(function(){j._fnInfo.call(j)
},0);
this.dom.loader&&this.s.loaderVisible&&(this.dom.loader.css("display","none"),this.s.loaderVisible=!1)
},_fnScrollForce:function(){var e=this.s.heights;
e.virtual=e.row*this.s.dt.fnRecordsDisplay();
e.scroll=e.virtual;
1000000<e.scroll&&(e.scroll=1000000);
this.dom.force.style.height=e.scroll>this.s.heights.row?e.scroll+"px":this.s.heights.row+"px"
},_fnCalcRowHeight:function(){var g=this.s.dt,e=g.nTable,k=e.cloneNode(!1),j=o("<tbody/>").appendTo(k),h=o('<div class="'+g.oClasses.sWrapper+' DTS"><div class="'+g.oClasses.sScrollWrapper+'"><div class="'+g.oClasses.sScrollBody+'"></div></div></div>');
for(o("tbody tr:lt(4)",e).clone().appendTo(j);
3>o("tr",j).length;
){j.append("<tr><td>&nbsp;</td></tr>")
}o("div."+g.oClasses.sScrollBody,h).append(k);
g=this.s.dt.nHolding||e.parentNode;
o(g).is(":visible")||(g="body");
h.appendTo(g);
this.s.heights.row=o("tr",j).eq(1).outerHeight();
h.remove()
},_fnInfo:function(){if(this.s.dt.oFeatures.bInfo){var w=this.s.dt,v=w.oLanguage,u=this.dom.scroller.scrollTop,t=Math.floor(this.fnPixelsToRow(u,!1,this.s.ani)+1),s=w.fnRecordsTotal(),m=w.fnRecordsDisplay(),u=Math.ceil(this.fnPixelsToRow(u+this.s.heights.viewport,!1,this.s.ani)),u=m<u?m:u,r=w.fnFormatNumber(t),p=w.fnFormatNumber(u),l=w.fnFormatNumber(s),e=w.fnFormatNumber(m),r=0===w.fnRecordsDisplay()&&w.fnRecordsDisplay()==w.fnRecordsTotal()?v.sInfoEmpty+v.sInfoPostFix:0===w.fnRecordsDisplay()?v.sInfoEmpty+" "+v.sInfoFiltered.replace("_MAX_",l)+v.sInfoPostFix:w.fnRecordsDisplay()==w.fnRecordsTotal()?v.sInfo.replace("_START_",r).replace("_END_",p).replace("_MAX_",l).replace("_TOTAL_",e)+v.sInfoPostFix:v.sInfo.replace("_START_",r).replace("_END_",p).replace("_MAX_",l).replace("_TOTAL_",e)+" "+v.sInfoFiltered.replace("_MAX_",w.fnFormatNumber(w.fnRecordsTotal()))+v.sInfoPostFix;
(v=v.fnInfoCallback)&&(r=v.call(w.oInstance,w,t,u,s,m,r));
t=w.aanFeatures.i;
if("undefined"!=typeof t){s=0;
for(m=t.length;
s<m;
s++){o(t[s]).html(r)
}}o(w.nTable).triggerHandler("info.dt")
}}});
f.defaults={trace:!1,rowHeight:"auto",serverWait:200,displayBuffer:9,boundaryScale:0.5,loadingIndicator:!1};
f.oDefaults=f.defaults;
f.version="1.4.3";
"function"==typeof o.fn.dataTable&&"function"==typeof o.fn.dataTableExt.fnVersionCheck&&o.fn.dataTableExt.fnVersionCheck("1.10.0")?o.fn.dataTableExt.aoFeatures.push({fnInit:function(g){var e=g.oInit;
new f(g,e.scroller||e.oScroller||{})
},cFeature:"S",sFeature:"Scroller"}):alert("Warning: Scroller requires DataTables 1.10.0 or greater - www.datatables.net/download");
o(d).on("preInit.dt.dtscroller",function(g,e){if("dt"===g.namespace){var j=e.oInit.scroller,h=a.defaults.scroller;
if(j||h){h=o.extend({},j,h),!1!==j&&new f(e,h)
}}});
o.fn.dataTable.Scroller=f;
o.fn.DataTable.Scroller=f;
var c=o.fn.dataTable.Api;
c.register("scroller()",function(){return this
});
c.register("scroller().rowToPixels()",function(g,e,j){var h=this.context;
if(h.length&&h[0].oScroller){return h[0].oScroller.fnRowToPixels(g,e,j)
}});
c.register("scroller().pixelsToRow()",function(g,e,j){var h=this.context;
if(h.length&&h[0].oScroller){return h[0].oScroller.fnPixelsToRow(g,e,j)
}});
c.register("scroller().scrollToRow()",function(g,e){this.iterator("table",function(h){h.oScroller&&h.oScroller.fnScrollToRow(g,e)
});
return this
});
c.register("row().scrollTo()",function(g){var e=this;
this.iterator("row",function(k,j){if(k.oScroller){var h=e.rows({order:"applied",search:"applied"}).indexes().indexOf(j);
k.oScroller.fnScrollToRow(h,g)
}});
return this
});
c.register("scroller.measure()",function(e){this.iterator("table",function(g){g.oScroller&&g.oScroller.fnMeasure(e)
});
return this
});
c.register("scroller.page()",function(){var e=this.context;
if(e.length&&e[0].oScroller){return e[0].oScroller.fnPageInfo()
}});
return f
});
/*!
 Select for DataTables 1.2.3
 2015-2017 SpryMedia Ltd - datatables.net/license/mit
*/
(function(a){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(b){return a(b,window,document)
}):"object"===typeof exports?module.exports=function(c,b){c||(c=window);
if(!b||!b.fn.dataTable){b=require("datatables.net")(c,b).$
}return a(b,c,c.document)
}:a(jQuery,window,document)
})(function(J,F,E,H){function d(g,m,e){var j;
j=function(n,r){if(n>r){var p=r,r=n,n=p
}var o=!1;
return g.columns(":visible").indexes().filter(function(s){s===n&&(o=!0);
return s===r?(o=!1,!0):o
})
};
var h=function(n,s){var r=g.rows({search:"applied"}).indexes();
if(r.indexOf(n)>r.indexOf(s)){var o=s,s=n,n=o
}var p=!1;
return r.filter(function(t){t===n&&(p=!0);
return t===s?(p=!1,!0):p
})
};
!g.cells({selected:!0}).any()&&!e?(j=j(0,m.column),e=h(0,m.row)):(j=j(e.column,m.column),e=h(e.row,m.row));
e=g.cells(e,j).flatten();
g.cells(m,{selected:!0}).any()?g.cells(e).deselect():g.cells(e).select()
}function w(e){var g=e.settings()[0]._select.selector;
J(e.table().container()).off("mousedown.dtSelect",g).off("mouseup.dtSelect",g).off("click.dtSelect",g);
J("body").off("click.dtSelect"+e.table().node().id)
}function c(g){var j=J(g.table().container()),e=g.settings()[0],h=e._select.selector;
j.on("mousedown.dtSelect",h,function(m){if(m.shiftKey||m.metaKey||m.ctrlKey){j.css("-moz-user-select","none").one("selectstart.dtSelect",h,function(){return !1
})
}}).on("mouseup.dtSelect",h,function(){j.css("-moz-user-select","")
}).on("click.dtSelect",h,function(m){var r=g.select.items();
if(!F.getSelection||!J.trim(F.getSelection().toString())){var p=g.settings()[0];
if(J(m.target).closest("div.dataTables_wrapper")[0]==g.table().container()){var n=g.cell(J(m.target).closest("td, th"));
if(n.any()){var o=J.Event("user-select.dt");
G(g,o,[r,n,m]);
o.isDefaultPrevented()||(o=n.index(),"row"===r?(r=o.row,l(m,g,p,"row",r)):"column"===r?(r=n.index().column,l(m,g,p,"column",r)):"cell"===r&&(r=n.index(),l(m,g,p,"cell",r)),p._select_lastCell=o)
}}}});
J("body").on("click.dtSelect"+g.table().node().id,function(m){e._select.blurable&&!J(m.target).parents().filter(g.table().container()).length&&(0!==J(m.target).parents("html").length&&!J(m.target).parents("div.DTE").length)&&B(e,!0)
})
}function G(g,j,e,h){if(!h||g.flatten().length){"string"===typeof j&&(j+=".dt"),e.unshift(g),J(g.table().node()).trigger(j,e)
}}function b(h){var n=h.settings()[0];
if(n._select.info&&n.aanFeatures.i&&"api"!==h.select.style()){var e=h.rows({selected:!0}).flatten().length,m=h.columns({selected:!0}).flatten().length,j=h.cells({selected:!0}).flatten().length,g=function(o,r,p){o.append(J('<span class="select-item"/>').append(h.i18n("select."+r+"s",{_:"%d "+r+"s selected","0":"",1:"1 "+r+" selected"},p)))
};
J.each(n.aanFeatures.i,function(s,o){var o=J(o),r=J('<span class="select-info"/>');
g(r,"row",e);
g(r,"column",m);
g(r,"cell",j);
var p=o.children("span.select-info");
p.length&&p.remove();
""!==r.text()&&o.append(r)
})
}}function a(j,p,e,o){var n=j[p+"s"]({search:"applied"}).indexes(),o=J.inArray(o,n),h=J.inArray(e,n);
if(!j[p+"s"]({selected:!0}).any()&&-1===o){n.splice(J.inArray(e,n)+1,n.length)
}else{if(o>h){var m=h,h=o,o=m
}n.splice(h+1,n.length);
n.splice(0,o)
}j[p](e,{selected:!0}).any()?(n.splice(J.inArray(e,n),1),j[p+"s"](n).deselect()):j[p+"s"](n).select()
}function B(g,h){if(h||"single"===g._select.style){var e=new I.Api(g);
e.rows({selected:!0}).deselect();
e.columns({selected:!0}).deselect();
e.cells({selected:!0}).deselect()
}}function l(j,r,h,p,n){var o=r.select.style(),m=r[p](n,{selected:!0}).any();
"os"===o?j.ctrlKey||j.metaKey?r[p](n).select(!m):j.shiftKey?"cell"===p?d(r,n,h._select_lastCell||null):a(r,p,n,h._select_lastCell?h._select_lastCell[p]:null):(j=r[p+"s"]({selected:!0}),m&&1===j.flatten().length?r[p](n).deselect():(j.deselect(),r[p](n).select())):"multi+shift"==o?j.shiftKey?"cell"===p?d(r,n,h._select_lastCell||null):a(r,p,n,h._select_lastCell?h._select_lastCell[p]:null):r[p](n).select(!m):r[p](n).select(!m)
}function A(e,g){return function(h){return h.i18n("buttons."+e,g)
}
}function k(e){e=e._eventNamespace;
return"draw.dt.DT"+e+" select.dt.DT"+e+" deselect.dt.DT"+e
}var I=J.fn.dataTable;
I.select={};
I.select.version="1.2.3";
I.select.init=function(s){var p=s.settings()[0],r=p.oInit.select,o=I.defaults.select,r=r===H?o:r,o="row",n="api",e=!1,t=!0,g="td, th",h="selected",m=!1;
p._select={};
if(!0===r){n="os",m=!0
}else{if("string"===typeof r){n=r,m=!0
}else{if(J.isPlainObject(r)&&(r.blurable!==H&&(e=r.blurable),r.info!==H&&(t=r.info),r.items!==H&&(o=r.items),r.style!==H&&(n=r.style,m=!0),r.selector!==H&&(g=r.selector),r.className!==H)){h=r.className
}}}s.select.selector(g);
s.select.items(o);
s.select.style(n);
s.select.blurable(e);
s.select.info(t);
p._select.className=h;
J.fn.dataTable.ext.order["select-checkbox"]=function(j,u){return this.api().column(u,{order:"index"}).nodes().map(function(v){return"row"===j._select.items?J(v).parent().hasClass(j._select.className):"cell"===j._select.items?J(v).hasClass(j._select.className):!1
})
};
!m&&J(s.table().node()).hasClass("selectable")&&s.select.style("os")
};
J.each([{type:"row",prop:"aoData"},{type:"column",prop:"aoColumns"}],function(e,g){I.ext.selector[g.type].push(function(h,j,p){var j=j.selected,r,o=[];
if(j===H){return p
}for(var m=0,n=p.length;
m<n;
m++){r=h[g.prop][p[m]],(!0===j&&!0===r._select_selected||!1===j&&!r._select_selected)&&o.push(p[m])
}return o
})
});
I.ext.selector.cell.push(function(j,r,h){var r=r.selected,p,n=[];
if(r===H){return h
}for(var o=0,m=h.length;
o<m;
o++){p=j.aoData[h[o].row],(!0===r&&p._selected_cells&&!0===p._selected_cells[h[o].column]||!1===r&&(!p._selected_cells||!p._selected_cells[h[o].column]))&&n.push(h[o])
}return n
});
var D=I.Api.register,C=I.Api.registerPlural;
D("select()",function(){return this.iterator("table",function(e){I.select.init(new I.Api(e))
})
});
D("select.blurable()",function(e){return e===H?this.context[0]._select.blurable:this.iterator("table",function(g){g._select.blurable=e
})
});
D("select.info()",function(e){return b===H?this.context[0]._select.info:this.iterator("table",function(g){g._select.info=e
})
});
D("select.items()",function(e){return e===H?this.context[0]._select.items:this.iterator("table",function(g){g._select.items=e;
G(new I.Api(g),"selectItems",[e])
})
});
D("select.style()",function(e){return e===H?this.context[0]._select.style:this.iterator("table",function(j){j._select.style=e;
if(!j._select_init){var g=new I.Api(j);
j.aoRowCreatedCallback.push({fn:function(m,n,o){n=j.aoData[o];
n._select_selected&&J(m).addClass(j._select.className);
m=0;
for(o=j.aoColumns.length;
m<o;
m++){(j.aoColumns[m]._select_selected||n._selected_cells&&n._selected_cells[m])&&J(n.anCells[m]).addClass(j._select.className)
}},sName:"select-deferRender"});
g.on("preXhr.dt.dtSelect",function(){var n=g.rows({selected:!0}).ids(!0).filter(function(o){return o!==H
}),m=g.cells({selected:!0}).eq(0).map(function(p){var o=g.row(p.row).id(!0);
return o?{row:o,column:p.column}:H
}).filter(function(o){return o!==H
});
g.one("draw.dt.dtSelect",function(){g.rows(n).select();
m.any()&&m.each(function(o){g.cells(o.row,o.column).select()
})
})
});
g.on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt info.dt",function(){b(g)
});
g.on("destroy.dtSelect",function(){w(g);
g.off(".dtSelect")
})
}var h=new I.Api(j);
w(h);
"api"!==e&&c(h);
G(new I.Api(j),"selectStyle",[e])
})
});
D("select.selector()",function(e){return e===H?this.context[0]._select.selector:this.iterator("table",function(g){w(new I.Api(g));
g._select.selector=e;
"api"!==g._select.style&&c(new I.Api(g))
})
});
C("rows().select()","row().select()",function(e){var g=this;
if(!1===e){return this.deselect()
}this.iterator("row",function(h,j){B(h);
h.aoData[j]._select_selected=!0;
J(h.aoData[j].nTr).addClass(h._select.className)
});
this.iterator("table",function(h,j){G(g,"select",["row",g[j]],!0)
});
return this
});
C("columns().select()","column().select()",function(e){var g=this;
if(!1===e){return this.deselect()
}this.iterator("column",function(h,m){B(h);
h.aoColumns[m]._select_selected=!0;
var j=(new I.Api(h)).column(m);
J(j.header()).addClass(h._select.className);
J(j.footer()).addClass(h._select.className);
j.nodes().to$().addClass(h._select.className)
});
this.iterator("table",function(h,j){G(g,"select",["column",g[j]],!0)
});
return this
});
C("cells().select()","cell().select()",function(e){var g=this;
if(!1===e){return this.deselect()
}this.iterator("cell",function(h,m,j){B(h);
m=h.aoData[m];
m._selected_cells===H&&(m._selected_cells=[]);
m._selected_cells[j]=!0;
m.anCells&&J(m.anCells[j]).addClass(h._select.className)
});
this.iterator("table",function(h,j){G(g,"select",["cell",g[j]],!0)
});
return this
});
C("rows().deselect()","row().deselect()",function(){var e=this;
this.iterator("row",function(h,g){h.aoData[g]._select_selected=!1;
J(h.aoData[g].nTr).removeClass(h._select.className)
});
this.iterator("table",function(h,g){G(e,"deselect",["row",e[g]],!0)
});
return this
});
C("columns().deselect()","column().deselect()",function(){var e=this;
this.iterator("column",function(m,g){m.aoColumns[g]._select_selected=!1;
var h=new I.Api(m),j=h.column(g);
J(j.header()).removeClass(m._select.className);
J(j.footer()).removeClass(m._select.className);
h.cells(null,g).indexes().each(function(n){var o=m.aoData[n.row],p=o._selected_cells;
o.anCells&&(!p||!p[n.column])&&J(o.anCells[n.column]).removeClass(m._select.className)
})
});
this.iterator("table",function(h,g){G(e,"deselect",["column",e[g]],!0)
});
return this
});
C("cells().deselect()","cell().deselect()",function(){var e=this;
this.iterator("cell",function(j,g,h){g=j.aoData[g];
g._selected_cells[h]=!1;
g.anCells&&!j.aoColumns[h]._select_selected&&J(g.anCells[h]).removeClass(j._select.className)
});
this.iterator("table",function(h,g){G(e,"deselect",["cell",e[g]],!0)
});
return this
});
var f=0;
J.extend(I.ext.buttons,{selected:{text:A("selected","Selected"),className:"buttons-selected",init:function(g,j,e){var h=this;
e._eventNamespace=".select"+f++;
g.on(k(e),function(){var m=h.rows({selected:!0}).any()||h.columns({selected:!0}).any()||h.cells({selected:!0}).any();
h.enable(m)
});
this.disable()
},destroy:function(g,h,e){g.off(e._eventNamespace)
}},selectedSingle:{text:A("selectedSingle","Selected single"),className:"buttons-selected-single",init:function(g,j,e){var h=this;
e._eventNamespace=".select"+f++;
g.on(k(e),function(){var m=g.rows({selected:!0}).flatten().length+g.columns({selected:!0}).flatten().length+g.cells({selected:!0}).flatten().length;
h.enable(1===m)
});
this.disable()
},destroy:function(g,h,e){g.off(e._eventNamespace)
}},selectAll:{text:A("selectAll","Select all"),className:"buttons-select-all",action:function(){this[this.select.items()+"s"]().select()
}},selectNone:{text:A("selectNone","Deselect all"),className:"buttons-select-none",action:function(){B(this.settings()[0],!0)
},init:function(g,j,e){var h=this;
e._eventNamespace=".select"+f++;
g.on(k(e),function(){var m=g.rows({selected:!0}).flatten().length+g.columns({selected:!0}).flatten().length+g.cells({selected:!0}).flatten().length;
h.enable(0<m)
});
this.disable()
},destroy:function(g,h,e){g.off(e._eventNamespace)
}}});
J.each(["Row","Column","Cell"],function(g,h){var e=h.toLowerCase();
I.ext.buttons["select"+h+"s"]={text:A("select"+h+"s","Select "+e+"s"),className:"buttons-select-"+e+"s",action:function(){this.select.items(e)
},init:function(j){var m=this;
j.on("selectItems.dt.DT",function(n,p,o){m.active(o===e)
})
}}
});
J(E).on("preInit.dt.dtSelect",function(e,g){"dt"===e.namespace&&I.select.init(new I.Api(g))
});
return I.select
});
+function(d){var c=function(f,e){this.options=d.extend({},c.DEFAULTS,e);
this.$target=d(this.options.target).on("scroll.bs.affix.data-api",d.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",d.proxy(this.checkPositionWithEventLoop,this));
this.$element=d(f);
this.affixed=null;
this.unpin=null;
this.pinnedOffset=null;
this.checkPosition()
};
c.VERSION="3.3.4";
c.RESET="affix affix-top affix-bottom";
c.DEFAULTS={offset:0,target:window};
c.prototype.getState=function(o,n,f,g){var e=this.$target.scrollTop();
var j=this.$element.offset();
var k=this.$target.height();
if(f!=null&&this.affixed=="top"){return e<f?"top":false
}if(this.affixed=="bottom"){if(f!=null){return(e+this.unpin<=j.top)?false:"bottom"
}return(e+k<=o-g)?false:"bottom"
}var h=this.affixed==null;
var m=h?e:j.top;
var l=h?k:n;
if(f!=null&&e<=f){return"top"
}if(g!=null&&(m+l>=o-g)){return"bottom"
}return false
};
c.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset
}this.$element.removeClass(c.RESET).addClass("affix");
var f=this.$target.scrollTop();
var e=this.$element.offset();
return(this.pinnedOffset=e.top-f)
};
c.prototype.checkPositionWithEventLoop=function(){setTimeout(d.proxy(this.checkPosition,this),1)
};
c.prototype.checkPosition=function(){if(!this.$element.is(":visible")){return
}var f=this.$element.height();
var m=this.options.offset;
var k=m.top;
var h=m.bottom;
var j=d(document.body).height();
if(typeof m!="object"){h=k=m
}if(typeof k=="function"){k=m.top(this.$element)
}if(typeof h=="function"){h=m.bottom(this.$element)
}var g=this.getState(j,f,k,h);
if(this.affixed!=g){if(this.unpin!=null){this.$element.css("top","")
}var n="affix"+(g?"-"+g:"");
var l=d.Event(n+".bs.affix");
this.$element.trigger(l);
if(l.isDefaultPrevented()){return
}this.affixed=g;
this.unpin=g=="bottom"?this.getPinnedOffset():null;
this.$element.removeClass(c.RESET).addClass(n).trigger(n.replace("affix","affixed")+".bs.affix")
}if(g=="bottom"){this.$element.offset({top:j-f-h})
}};
function b(e){return this.each(function(){var h=d(this);
var g=h.data("bs.affix");
var f=typeof e=="object"&&e;
if(!g){h.data("bs.affix",(g=new c(this,f)))
}if(typeof e=="string"){g[e]()
}})
}var a=d.fn.affix;
d.fn.affix=b;
d.fn.affix.Constructor=c;
d.fn.affix.noConflict=function(){d.fn.affix=a;
return this
};
d(window).on("load",function(){d('[data-spy="affix"]').each(function(){var f=d(this);
var e=f.data();
e.offset=e.offset||{};
if(e.offsetBottom!=null){e.offset.bottom=e.offsetBottom
}if(e.offsetTop!=null){e.offset.top=e.offsetTop
}b.call(f,e)
})
})
}(jQuery);
+function(e){var d='[data-dismiss="alert"]';
var b=function(f){e(f).on("click",d,this.close)
};
b.VERSION="3.3.4";
b.TRANSITION_DURATION=150;
b.prototype.close=function(k){var j=e(this);
var g=j.attr("data-target");
if(!g){g=j.attr("href");
g=g&&g.replace(/.*(?=#[^\s]*$)/,"")
}var h=e(g);
if(k){k.preventDefault()
}if(!h.length){h=j.closest(".alert")
}h.trigger(k=e.Event("close.bs.alert"));
if(k.isDefaultPrevented()){return
}h.removeClass("in");
function f(){h.detach().trigger("closed.bs.alert").remove()
}e.support.transition&&h.hasClass("fade")?h.one("bsTransitionEnd",f).emulateTransitionEnd(b.TRANSITION_DURATION):f()
};
function c(f){return this.each(function(){var h=e(this);
var g=h.data("bs.alert");
if(!g){h.data("bs.alert",(g=new b(this)))
}if(typeof f=="string"){g[f].call(h)
}})
}var a=e.fn.alert;
e.fn.alert=c;
e.fn.alert.Constructor=b;
e.fn.alert.noConflict=function(){e.fn.alert=a;
return this
};
e(document).on("click.bs.alert.data-api",d,b.prototype.close)
}(jQuery);
+function(d){var b=function(f,e){this.$element=d(f);
this.options=d.extend({},b.DEFAULTS,e);
this.isLoading=false
};
b.VERSION="3.3.4";
b.DEFAULTS={loadingText:"loading..."};
b.prototype.setState=function(g){var j="disabled";
var e=this.$element;
var h=e.is("input")?"val":"html";
var f=e.data();
g=g+"Text";
if(f.resetText==null){e.data("resetText",e[h]())
}setTimeout(d.proxy(function(){e[h](f[g]==null?this.options[g]:f[g]);
if(g=="loadingText"){this.isLoading=true;
e.addClass(j).attr(j,j)
}else{if(this.isLoading){this.isLoading=false;
e.removeClass(j).removeAttr(j)
}}},this),0)
};
b.prototype.toggle=function(){var f=true;
var e=this.$element.closest('[data-toggle="buttons"]');
if(e.length){var g=this.$element.find("input");
if(g.prop("type")=="radio"){if(g.prop("checked")&&this.$element.hasClass("active")){f=false
}else{e.find(".active").removeClass("active")
}}if(f){g.prop("checked",!this.$element.hasClass("active")).trigger("change")
}}else{this.$element.attr("aria-pressed",!this.$element.hasClass("active"))
}if(f){this.$element.toggleClass("active")
}};
function c(e){return this.each(function(){var h=d(this);
var g=h.data("bs.button");
var f=typeof e=="object"&&e;
if(!g){h.data("bs.button",(g=new b(this,f)))
}if(e=="toggle"){g.toggle()
}else{if(e){g.setState(e)
}}})
}var a=d.fn.button;
d.fn.button=c;
d.fn.button.Constructor=b;
d.fn.button.noConflict=function(){d.fn.button=a;
return this
};
d(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(g){var f=d(g.target);
if(!f.hasClass("btn")){f=f.closest(".btn")
}c.call(f,"toggle");
g.preventDefault()
}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(f){d(f.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(f.type))
})
}(jQuery);
+function(c){var d=function(g,f){this.$element=c(g);
this.$indicators=this.$element.find(".carousel-indicators");
this.options=f;
this.paused=null;
this.sliding=null;
this.interval=null;
this.$active=null;
this.$items=null;
this.options.keyboard&&this.$element.on("keydown.bs.carousel",c.proxy(this.keydown,this));
this.options.pause=="hover"&&!("ontouchstart" in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",c.proxy(this.pause,this)).on("mouseleave.bs.carousel",c.proxy(this.cycle,this))
};
d.VERSION="3.3.4";
d.TRANSITION_DURATION=600;
d.DEFAULTS={interval:5000,pause:"hover",wrap:true,keyboard:true};
d.prototype.keydown=function(f){if(/input|textarea/i.test(f.target.tagName)){return
}switch(f.which){case 37:this.prev();
break;
case 39:this.next();
break;
default:return
}f.preventDefault()
};
d.prototype.cycle=function(f){f||(this.paused=false);
this.interval&&clearInterval(this.interval);
this.options.interval&&!this.paused&&(this.interval=setInterval(c.proxy(this.next,this),this.options.interval));
return this
};
d.prototype.getItemIndex=function(f){this.$items=f.parent().children(".item");
return this.$items.index(f||this.$active)
};
d.prototype.getItemForDirection=function(k,j){var f=this.getItemIndex(j);
var g=(k=="prev"&&f===0)||(k=="next"&&f==(this.$items.length-1));
if(g&&!this.options.wrap){return j
}var l=k=="prev"?-1:1;
var h=(f+l)%this.$items.length;
return this.$items.eq(h)
};
d.prototype.to=function(h){var g=this;
var f=this.getItemIndex(this.$active=this.$element.find(".item.active"));
if(h>(this.$items.length-1)||h<0){return
}if(this.sliding){return this.$element.one("slid.bs.carousel",function(){g.to(h)
})
}if(f==h){return this.pause().cycle()
}return this.slide(h>f?"next":"prev",this.$items.eq(h))
};
d.prototype.pause=function(f){f||(this.paused=true);
if(this.$element.find(".next, .prev").length&&c.support.transition){this.$element.trigger(c.support.transition.end);
this.cycle(true)
}this.interval=clearInterval(this.interval);
return this
};
d.prototype.next=function(){if(this.sliding){return
}return this.slide("next")
};
d.prototype.prev=function(){if(this.sliding){return
}return this.slide("prev")
};
d.prototype.slide=function(n,j){var r=this.$element.find(".item.active");
var g=j||this.getItemForDirection(n,r);
var l=this.interval;
var o=n=="next"?"left":"right";
var k=this;
if(g.hasClass("active")){return(this.sliding=false)
}var m=g[0];
var f=c.Event("slide.bs.carousel",{relatedTarget:m,direction:o});
this.$element.trigger(f);
if(f.isDefaultPrevented()){return
}this.sliding=true;
l&&this.pause();
if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");
var h=c(this.$indicators.children()[this.getItemIndex(g)]);
h&&h.addClass("active")
}var p=c.Event("slid.bs.carousel",{relatedTarget:m,direction:o});
if(c.support.transition&&this.$element.hasClass("slide")){g.addClass(n);
g[0].offsetWidth;
r.addClass(o);
g.addClass(o);
r.one("bsTransitionEnd",function(){g.removeClass([n,o].join(" ")).addClass("active");
r.removeClass(["active",o].join(" "));
k.sliding=false;
setTimeout(function(){k.$element.trigger(p)
},0)
}).emulateTransitionEnd(d.TRANSITION_DURATION)
}else{r.removeClass("active");
g.addClass("active");
this.sliding=false;
this.$element.trigger(p)
}l&&this.cycle();
return this
};
function b(f){return this.each(function(){var k=c(this);
var j=k.data("bs.carousel");
var g=c.extend({},d.DEFAULTS,k.data(),typeof f=="object"&&f);
var h=typeof f=="string"?f:g.slide;
if(!j){k.data("bs.carousel",(j=new d(this,g)))
}if(typeof f=="number"){j.to(f)
}else{if(h){j[h]()
}else{if(g.interval){j.pause().cycle()
}}}})
}var a=c.fn.carousel;
c.fn.carousel=b;
c.fn.carousel.Constructor=d;
c.fn.carousel.noConflict=function(){c.fn.carousel=a;
return this
};
var e=function(l){var g;
var k=c(this);
var f=c(k.attr("data-target")||(g=k.attr("href"))&&g.replace(/.*(?=#[^\s]+$)/,""));
if(!f.hasClass("carousel")){return
}var h=c.extend({},f.data(),k.data());
var j=k.attr("data-slide-to");
if(j){h.interval=false
}b.call(f,h);
if(j){f.data("bs.carousel").to(j)
}l.preventDefault()
};
c(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e);
c(window).on("load",function(){c('[data-ride="carousel"]').each(function(){var f=c(this);
b.call(f,f.data())
})
})
}(jQuery);
+function(d){var e=function(g,f){this.$element=d(g);
this.options=d.extend({},e.DEFAULTS,f);
this.$trigger=d('[data-toggle="collapse"][href="#'+g.id+'"],[data-toggle="collapse"][data-target="#'+g.id+'"]');
this.transitioning=null;
if(this.options.parent){this.$parent=this.getParent()
}else{this.addAriaAndCollapsedClass(this.$element,this.$trigger)
}if(this.options.toggle){this.toggle()
}};
e.VERSION="3.3.4";
e.TRANSITION_DURATION=350;
e.DEFAULTS={toggle:true};
e.prototype.dimension=function(){var f=this.$element.hasClass("width");
return f?"width":"height"
};
e.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in")){return
}var h;
var k=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");
if(k&&k.length){h=k.data("bs.collapse");
if(h&&h.transitioning){return
}}var g=d.Event("show.bs.collapse");
this.$element.trigger(g);
if(g.isDefaultPrevented()){return
}if(k&&k.length){b.call(k,"hide");
h||k.data("bs.collapse",null)
}var l=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[l](0).attr("aria-expanded",true);
this.$trigger.removeClass("collapsed").attr("aria-expanded",true);
this.transitioning=1;
var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[l]("");
this.transitioning=0;
this.$element.trigger("shown.bs.collapse")
};
if(!d.support.transition){return f.call(this)
}var j=d.camelCase(["scroll",l].join("-"));
this.$element.one("bsTransitionEnd",d.proxy(f,this)).emulateTransitionEnd(e.TRANSITION_DURATION)[l](this.$element[0][j])
};
e.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in")){return
}var g=d.Event("hide.bs.collapse");
this.$element.trigger(g);
if(g.isDefaultPrevented()){return
}var h=this.dimension();
this.$element[h](this.$element[h]())[0].offsetHeight;
this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",false);
this.$trigger.addClass("collapsed").attr("aria-expanded",false);
this.transitioning=1;
var f=function(){this.transitioning=0;
this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
};
if(!d.support.transition){return f.call(this)
}this.$element[h](0).one("bsTransitionEnd",d.proxy(f,this)).emulateTransitionEnd(e.TRANSITION_DURATION)
};
e.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
};
e.prototype.getParent=function(){return d(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(d.proxy(function(h,g){var f=d(g);
this.addAriaAndCollapsedClass(c(f),f)
},this)).end()
};
e.prototype.addAriaAndCollapsedClass=function(g,f){var h=g.hasClass("in");
g.attr("aria-expanded",h);
f.toggleClass("collapsed",!h).attr("aria-expanded",h)
};
function c(f){var g;
var h=f.attr("data-target")||(g=f.attr("href"))&&g.replace(/.*(?=#[^\s]+$)/,"");
return d(h)
}function b(f){return this.each(function(){var j=d(this);
var h=j.data("bs.collapse");
var g=d.extend({},e.DEFAULTS,j.data(),typeof f=="object"&&f);
if(!h&&g.toggle&&/show|hide/.test(f)){g.toggle=false
}if(!h){j.data("bs.collapse",(h=new e(this,g)))
}if(typeof f=="string"){h[f]()
}})
}var a=d.fn.collapse;
d.fn.collapse=b;
d.fn.collapse.Constructor=e;
d.fn.collapse.noConflict=function(){d.fn.collapse=a;
return this
};
d(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(k){var j=d(this);
if(!j.attr("data-target")){k.preventDefault()
}var f=c(j);
var h=f.data("bs.collapse");
var g=h?"toggle":j.data();
b.call(f,g)
})
}(jQuery);
+function(h){var e=".dropdown-backdrop";
var b='[data-toggle="dropdown"]';
var a=function(j){h(j).on("click.bs.dropdown",this.toggle)
};
a.VERSION="3.3.4";
a.prototype.toggle=function(n){var m=h(this);
if(m.is(".disabled, :disabled")){return
}var l=f(m);
var k=l.hasClass("open");
d();
if(!k){if("ontouchstart" in document.documentElement&&!l.closest(".navbar-nav").length){h('<div class="dropdown-backdrop"/>').insertAfter(h(this)).on("click",d)
}var j={relatedTarget:this};
l.trigger(n=h.Event("show.bs.dropdown",j));
if(n.isDefaultPrevented()){return
}m.trigger("focus").attr("aria-expanded","true");
l.toggleClass("open").trigger("shown.bs.dropdown",j)
}return false
};
a.prototype.keydown=function(n){if(!/(38|40|27|32)/.test(n.which)||/input|textarea/i.test(n.target.tagName)){return
}var m=h(this);
n.preventDefault();
n.stopPropagation();
if(m.is(".disabled, :disabled")){return
}var l=f(m);
var k=l.hasClass("open");
if((!k&&n.which!=27)||(k&&n.which==27)){if(n.which==27){l.find(b).trigger("focus")
}return m.trigger("click")
}var o=" li:not(.disabled):visible a";
var p=l.find('[role="menu"]'+o+', [role="listbox"]'+o);
if(!p.length){return
}var j=p.index(n.target);
if(n.which==38&&j>0){j--
}if(n.which==40&&j<p.length-1){j++
}if(!~j){j=0
}p.eq(j).trigger("focus")
};
function d(j){if(j&&j.which===3){return
}h(e).remove();
h(b).each(function(){var m=h(this);
var l=f(m);
var k={relatedTarget:this};
if(!l.hasClass("open")){return
}l.trigger(j=h.Event("hide.bs.dropdown",k));
if(j.isDefaultPrevented()){return
}m.attr("aria-expanded","false");
l.removeClass("open").trigger("hidden.bs.dropdown",k)
})
}function f(l){var j=l.attr("data-target");
if(!j){j=l.attr("href");
j=j&&/#[A-Za-z]/.test(j)&&j.replace(/.*(?=#[^\s]*$)/,"")
}var k=j&&h(j);
return k&&k.length?k:l.parent()
}function g(j){return this.each(function(){var l=h(this);
var k=l.data("bs.dropdown");
if(!k){l.data("bs.dropdown",(k=new a(this)))
}if(typeof j=="string"){k[j].call(l)
}})
}var c=h.fn.dropdown;
h.fn.dropdown=g;
h.fn.dropdown.Constructor=a;
h.fn.dropdown.noConflict=function(){h.fn.dropdown=c;
return this
};
h(document).on("click.bs.dropdown.data-api",d).on("click.bs.dropdown.data-api",".dropdown form",function(j){j.stopPropagation()
}).on("click.bs.dropdown.data-api",b,a.prototype.toggle).on("keydown.bs.dropdown.data-api",b,a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',a.prototype.keydown)
}(jQuery);
+function(d){var b=function(f,e){this.options=e;
this.$body=d(document.body);
this.$element=d(f);
this.$dialog=this.$element.find(".modal-dialog");
this.$backdrop=null;
this.isShown=null;
this.originalBodyPad=null;
this.scrollbarWidth=0;
this.ignoreBackdropClick=false;
if(this.options.remote){this.$element.find(".modal-content").load(this.options.remote,d.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))
}};
b.VERSION="3.3.4";
b.TRANSITION_DURATION=300;
b.BACKDROP_TRANSITION_DURATION=150;
b.DEFAULTS={backdrop:true,keyboard:true,show:true};
b.prototype.toggle=function(e){return this.isShown?this.hide():this.show(e)
};
b.prototype.show=function(h){var f=this;
var g=d.Event("show.bs.modal",{relatedTarget:h});
this.$element.trigger(g);
if(this.isShown||g.isDefaultPrevented()){return
}this.isShown=true;
this.checkScrollbar();
this.setScrollbar();
this.$body.addClass("modal-open");
this.escape();
this.resize();
this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',d.proxy(this.hide,this));
this.$dialog.on("mousedown.dismiss.bs.modal",function(){f.$element.one("mouseup.dismiss.bs.modal",function(j){if(d(j.target).is(f.$element)){f.ignoreBackdropClick=true
}})
});
this.backdrop(function(){var k=d.support.transition&&f.$element.hasClass("fade");
if(!f.$element.parent().length){f.$element.appendTo(f.$body)
}f.$element.show().scrollTop(0);
f.adjustDialog();
if(k){f.$element[0].offsetWidth
}f.$element.addClass("in").attr("aria-hidden",false);
f.enforceFocus();
var j=d.Event("shown.bs.modal",{relatedTarget:h});
k?f.$dialog.one("bsTransitionEnd",function(){f.$element.trigger("focus").trigger(j)
}).emulateTransitionEnd(b.TRANSITION_DURATION):f.$element.trigger("focus").trigger(j)
})
};
b.prototype.hide=function(f){if(f){f.preventDefault()
}f=d.Event("hide.bs.modal");
this.$element.trigger(f);
if(!this.isShown||f.isDefaultPrevented()){return
}this.isShown=false;
this.escape();
this.resize();
d(document).off("focusin.bs.modal");
this.$element.removeClass("in").attr("aria-hidden",true).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal");
this.$dialog.off("mousedown.dismiss.bs.modal");
d.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",d.proxy(this.hideModal,this)).emulateTransitionEnd(b.TRANSITION_DURATION):this.hideModal()
};
b.prototype.enforceFocus=function(){d(document).off("focusin.bs.modal").on("focusin.bs.modal",d.proxy(function(f){if(this.$element[0]!==f.target&&!this.$element.has(f.target).length){this.$element.trigger("focus")
}},this))
};
b.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keydown.dismiss.bs.modal",d.proxy(function(f){f.which==27&&this.hide()
},this))
}else{if(!this.isShown){this.$element.off("keydown.dismiss.bs.modal")
}}};
b.prototype.resize=function(){if(this.isShown){d(window).on("resize.bs.modal",d.proxy(this.handleUpdate,this))
}else{d(window).off("resize.bs.modal")
}};
b.prototype.hideModal=function(){var e=this;
this.$element.hide();
this.backdrop(function(){e.$body.removeClass("modal-open");
e.resetAdjustments();
e.resetScrollbar();
e.$element.trigger("hidden.bs.modal")
})
};
b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();
this.$backdrop=null
};
b.prototype.backdrop=function(j){var h=this;
var f=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var e=d.support.transition&&f;
this.$backdrop=d('<div class="modal-backdrop '+f+'" />').appendTo(this.$body);
this.$element.on("click.dismiss.bs.modal",d.proxy(function(k){if(this.ignoreBackdropClick){this.ignoreBackdropClick=false;
return
}if(k.target!==k.currentTarget){return
}this.options.backdrop=="static"?this.$element[0].focus():this.hide()
},this));
if(e){this.$backdrop[0].offsetWidth
}this.$backdrop.addClass("in");
if(!j){return
}e?this.$backdrop.one("bsTransitionEnd",j).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION):j()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
var g=function(){h.removeBackdrop();
j&&j()
};
d.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION):g()
}else{if(j){j()
}}}};
b.prototype.handleUpdate=function(){this.adjustDialog()
};
b.prototype.adjustDialog=function(){var e=this.$element[0].scrollHeight>document.documentElement.clientHeight;
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&e?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!e?this.scrollbarWidth:""})
};
b.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})
};
b.prototype.checkScrollbar=function(){var f=window.innerWidth;
if(!f){var e=document.documentElement.getBoundingClientRect();
f=e.right-Math.abs(e.left)
}this.bodyIsOverflowing=document.body.clientWidth<f;
this.scrollbarWidth=this.measureScrollbar()
};
b.prototype.setScrollbar=function(){var e=parseInt((this.$body.css("padding-right")||0),10);
this.originalBodyPad=document.body.style.paddingRight||"";
if(this.bodyIsOverflowing){this.$body.css("padding-right",e+this.scrollbarWidth)
}};
b.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)
};
b.prototype.measureScrollbar=function(){var f=document.createElement("div");
f.className="modal-scrollbar-measure";
this.$body.append(f);
var e=f.offsetWidth-f.clientWidth;
this.$body[0].removeChild(f);
return e
};
function c(e,f){return this.each(function(){var j=d(this);
var h=j.data("bs.modal");
var g=d.extend({},b.DEFAULTS,j.data(),typeof e=="object"&&e);
if(!h){j.data("bs.modal",(h=new b(this,g)))
}if(typeof e=="string"){h[e](f)
}else{if(g.show){h.show(f)
}}})
}var a=d.fn.modal;
d.fn.modal=c;
d.fn.modal.Constructor=b;
d.fn.modal.noConflict=function(){d.fn.modal=a;
return this
};
d(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(k){var j=d(this);
var g=j.attr("href");
var f=d(j.attr("data-target")||(g&&g.replace(/.*(?=#[^\s]+$)/,"")));
var h=f.data("bs.modal")?"toggle":d.extend({remote:!/#/.test(g)&&g},f.data(),j.data());
if(j.is("a")){k.preventDefault()
}f.one("show.bs.modal",function(e){if(e.isDefaultPrevented()){return
}f.one("hidden.bs.modal",function(){j.is(":visible")&&j.trigger("focus")
})
});
c.call(f,h,this)
})
}(jQuery);
+function(d){function c(f,e){this.$body=d(document.body);
this.$scrollElement=d(f).is(document.body)?d(window):d(f);
this.options=d.extend({},c.DEFAULTS,e);
this.selector=(this.options.target||"")+" .nav li > a";
this.offsets=[];
this.targets=[];
this.activeTarget=null;
this.scrollHeight=0;
this.$scrollElement.on("scroll.bs.scrollspy",d.proxy(this.process,this));
this.refresh();
this.process()
}c.VERSION="3.3.4";
c.DEFAULTS={offset:10};
c.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)
};
c.prototype.refresh=function(){var g=this;
var e="offset";
var f=0;
this.offsets=[];
this.targets=[];
this.scrollHeight=this.getScrollHeight();
if(!d.isWindow(this.$scrollElement[0])){e="position";
f=this.$scrollElement.scrollTop()
}this.$body.find(this.selector).map(function(){var j=d(this);
var h=j.data("target")||j.attr("href");
var k=/^#./.test(h)&&d(h);
return(k&&k.length&&k.is(":visible")&&[[k[e]().top+f,h]])||null
}).sort(function(j,h){return j[0]-h[0]
}).each(function(){g.offsets.push(this[0]);
g.targets.push(this[1])
})
};
c.prototype.process=function(){var k=this.$scrollElement.scrollTop()+this.options.offset;
var g=this.getScrollHeight();
var j=this.options.offset+g-this.$scrollElement.height();
var h=this.offsets;
var e=this.targets;
var l=this.activeTarget;
var f;
if(this.scrollHeight!=g){this.refresh()
}if(k>=j){return l!=(f=e[e.length-1])&&this.activate(f)
}if(l&&k<h[0]){this.activeTarget=null;
return this.clear()
}for(f=h.length;
f--;
){l!=e[f]&&k>=h[f]&&(h[f+1]===undefined||k<h[f+1])&&this.activate(e[f])
}};
c.prototype.activate=function(g){this.activeTarget=g;
this.clear();
var e=this.selector+'[data-target="'+g+'"],'+this.selector+'[href="'+g+'"]';
var f=d(e).parents("li").addClass("active");
if(f.parent(".dropdown-menu").length){f=f.closest("li.dropdown").addClass("active")
}f.trigger("activate.bs.scrollspy")
};
c.prototype.clear=function(){d(this.selector).parentsUntil(this.options.target,".active").removeClass("active")
};
function b(e){return this.each(function(){var h=d(this);
var g=h.data("bs.scrollspy");
var f=typeof e=="object"&&e;
if(!g){h.data("bs.scrollspy",(g=new c(this,f)))
}if(typeof e=="string"){g[e]()
}})
}var a=d.fn.scrollspy;
d.fn.scrollspy=b;
d.fn.scrollspy.Constructor=c;
d.fn.scrollspy.noConflict=function(){d.fn.scrollspy=a;
return this
};
d(window).on("load.bs.scrollspy.data-api",function(){d('[data-spy="scroll"]').each(function(){var e=d(this);
b.call(e,e.data())
})
})
}(jQuery);
+function(d){var b=function(f){this.element=d(f)
};
b.VERSION="3.3.4";
b.TRANSITION_DURATION=150;
b.prototype.show=function(){var m=this.element;
var h=m.closest("ul:not(.dropdown-menu)");
var g=m.data("target");
if(!g){g=m.attr("href");
g=g&&g.replace(/.*(?=#[^\s]*$)/,"")
}if(m.parent("li").hasClass("active")){return
}var k=h.find(".active:last a");
var l=d.Event("hide.bs.tab",{relatedTarget:m[0]});
var j=d.Event("show.bs.tab",{relatedTarget:k[0]});
k.trigger(l);
m.trigger(j);
if(j.isDefaultPrevented()||l.isDefaultPrevented()){return
}var f=d(g);
this.activate(m.closest("li"),h);
this.activate(f,f.parent(),function(){k.trigger({type:"hidden.bs.tab",relatedTarget:m[0]});
m.trigger({type:"shown.bs.tab",relatedTarget:k[0]})
})
};
b.prototype.activate=function(h,g,l){var f=g.find("> .active");
var k=l&&d.support.transition&&((f.length&&f.hasClass("fade"))||!!g.find("> .fade").length);
function j(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",false);
h.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",true);
if(k){h[0].offsetWidth;
h.addClass("in")
}else{h.removeClass("fade")
}if(h.parent(".dropdown-menu").length){h.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",true)
}l&&l()
}f.length&&k?f.one("bsTransitionEnd",j).emulateTransitionEnd(b.TRANSITION_DURATION):j();
f.removeClass("in")
};
function c(f){return this.each(function(){var h=d(this);
var g=h.data("bs.tab");
if(!g){h.data("bs.tab",(g=new b(this)))
}if(typeof f=="string"){g[f]()
}})
}var a=d.fn.tab;
d.fn.tab=c;
d.fn.tab.Constructor=b;
d.fn.tab.noConflict=function(){d.fn.tab=a;
return this
};
var e=function(f){f.preventDefault();
c.call(d(this),"show")
};
d(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)
}(jQuery);
+function(b){function a(){var e=document.createElement("bootstrap");
var d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var c in d){if(e.style[c]!==undefined){return{end:d[c]}
}}return false
}b.fn.emulateTransitionEnd=function(e){var d=false;
var c=this;
b(this).one("bsTransitionEnd",function(){d=true
});
var f=function(){if(!d){b(c).trigger(b.support.transition.end)
}};
setTimeout(f,e);
return this
};
b(function(){b.support.transition=a();
if(!b.support.transition){return
}b.event.special.bsTransitionEnd={bindType:b.support.transition.end,delegateType:b.support.transition.end,handle:function(c){if(b(c.target).is(this)){return c.handleObj.handler.apply(this,arguments)
}}}
})
}(jQuery);
+function(d){var c=function(f,e){this.type=null;
this.options=null;
this.enabled=null;
this.timeout=null;
this.hoverState=null;
this.$element=null;
this.init("tooltip",f,e)
};
c.VERSION="3.3.4";
c.TRANSITION_DURATION=150;
c.DEFAULTS={animation:true,placement:"top",selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false,viewport:{selector:"body",padding:0}};
c.prototype.init=function(l,j,g){this.enabled=true;
this.type=l;
this.$element=d(j);
this.options=this.getOptions(g);
this.$viewport=this.options.viewport&&d(this.options.viewport.selector||this.options.viewport);
if(this.$element[0] instanceof document.constructor&&!this.options.selector){throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!")
}var k=this.options.trigger.split(" ");
for(var h=k.length;
h--;
){var f=k[h];
if(f=="click"){this.$element.on("click."+this.type,this.options.selector,d.proxy(this.toggle,this))
}else{if(f!="manual"){var m=f=="hover"?"mouseenter":"focusin";
var e=f=="hover"?"mouseleave":"focusout";
this.$element.on(m+"."+this.type,this.options.selector,d.proxy(this.enter,this));
this.$element.on(e+"."+this.type,this.options.selector,d.proxy(this.leave,this))
}}}this.options.selector?(this._options=d.extend({},this.options,{trigger:"manual",selector:""})):this.fixTitle()
};
c.prototype.getDefaults=function(){return c.DEFAULTS
};
c.prototype.getOptions=function(e){e=d.extend({},this.getDefaults(),this.$element.data(),e);
if(e.delay&&typeof e.delay=="number"){e.delay={show:e.delay,hide:e.delay}
}return e
};
c.prototype.getDelegateOptions=function(){var e={};
var f=this.getDefaults();
this._options&&d.each(this._options,function(g,h){if(f[g]!=h){e[g]=h
}});
return e
};
c.prototype.enter=function(f){var e=f instanceof this.constructor?f:d(f.currentTarget).data("bs."+this.type);
if(e&&e.$tip&&e.$tip.is(":visible")){e.hoverState="in";
return
}if(!e){e=new this.constructor(f.currentTarget,this.getDelegateOptions());
d(f.currentTarget).data("bs."+this.type,e)
}clearTimeout(e.timeout);
e.hoverState="in";
if(!e.options.delay||!e.options.delay.show){return e.show()
}e.timeout=setTimeout(function(){if(e.hoverState=="in"){e.show()
}},e.options.delay.show)
};
c.prototype.leave=function(f){var e=f instanceof this.constructor?f:d(f.currentTarget).data("bs."+this.type);
if(!e){e=new this.constructor(f.currentTarget,this.getDelegateOptions());
d(f.currentTarget).data("bs."+this.type,e)
}clearTimeout(e.timeout);
e.hoverState="out";
if(!e.options.delay||!e.options.delay.hide){return e.hide()
}e.timeout=setTimeout(function(){if(e.hoverState=="out"){e.hide()
}},e.options.delay.hide)
};
c.prototype.show=function(){var r=d.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){this.$element.trigger(r);
var s=d.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);
if(r.isDefaultPrevented()||!s){return
}var p=this;
var n=this.tip();
var j=this.getUID(this.type);
this.setContent();
n.attr("id",j);
this.$element.attr("aria-describedby",j);
if(this.options.animation){n.addClass("fade")
}var m=typeof this.options.placement=="function"?this.options.placement.call(this,n[0],this.$element[0]):this.options.placement;
var v=/\s?auto?\s?/i;
var w=v.test(m);
if(w){m=m.replace(v,"")||"top"
}n.detach().css({top:0,left:0,display:"block"}).addClass(m).data("bs."+this.type,this);
this.options.container?n.appendTo(this.options.container):n.insertAfter(this.$element);
var t=this.getPosition();
var f=n[0].offsetWidth;
var o=n[0].offsetHeight;
if(w){var l=m;
var u=this.options.container?d(this.options.container):this.$element.parent();
var h=this.getPosition(u);
m=m=="bottom"&&t.bottom+o>h.bottom?"top":m=="top"&&t.top-o<h.top?"bottom":m=="right"&&t.right+f>h.width?"left":m=="left"&&t.left-f<h.left?"right":m;
n.removeClass(l).addClass(m)
}var k=this.getCalculatedOffset(m,t,f,o);
this.applyPlacement(k,m);
var g=function(){var e=p.hoverState;
p.$element.trigger("shown.bs."+p.type);
p.hoverState=null;
if(e=="out"){p.leave(p)
}};
d.support.transition&&this.$tip.hasClass("fade")?n.one("bsTransitionEnd",g).emulateTransitionEnd(c.TRANSITION_DURATION):g()
}};
c.prototype.applyPlacement=function(k,l){var m=this.tip();
var g=m[0].offsetWidth;
var s=m[0].offsetHeight;
var f=parseInt(m.css("margin-top"),10);
var j=parseInt(m.css("margin-left"),10);
if(isNaN(f)){f=0
}if(isNaN(j)){j=0
}k.top=k.top+f;
k.left=k.left+j;
d.offset.setOffset(m[0],d.extend({using:function(t){m.css({top:Math.round(t.top),left:Math.round(t.left)})
}},k),0);
m.addClass("in");
var e=m[0].offsetWidth;
var n=m[0].offsetHeight;
if(l=="top"&&n!=s){k.top=k.top+s-n
}var r=this.getViewportAdjustedDelta(l,k,e,n);
if(r.left){k.left+=r.left
}else{k.top+=r.top
}var o=/top|bottom/.test(l);
var h=o?r.left*2-g+e:r.top*2-s+n;
var p=o?"offsetWidth":"offsetHeight";
m.offset(k);
this.replaceArrow(h,m[0][p],o)
};
c.prototype.replaceArrow=function(g,e,f){this.arrow().css(f?"left":"top",50*(1-g/e)+"%").css(f?"top":"left","")
};
c.prototype.setContent=function(){var f=this.tip();
var e=this.getTitle();
f.find(".tooltip-inner")[this.options.html?"html":"text"](e);
f.removeClass("fade in top bottom left right")
};
c.prototype.hide=function(k){var g=this;
var j=d(this.$tip);
var h=d.Event("hide.bs."+this.type);
function f(){if(g.hoverState!="in"){j.detach()
}g.$element.removeAttr("aria-describedby").trigger("hidden.bs."+g.type);
k&&k()
}this.$element.trigger(h);
if(h.isDefaultPrevented()){return
}j.removeClass("in");
d.support.transition&&j.hasClass("fade")?j.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f();
this.hoverState=null;
return this
};
c.prototype.fixTitle=function(){var e=this.$element;
if(e.attr("title")||typeof(e.attr("data-original-title"))!="string"){e.attr("data-original-title",e.attr("title")||"").attr("title","")
}};
c.prototype.hasContent=function(){return this.getTitle()
};
c.prototype.getPosition=function(g){g=g||this.$element;
var j=g[0];
var f=j.tagName=="BODY";
var h=j.getBoundingClientRect();
if(h.width==null){h=d.extend({},h,{width:h.right-h.left,height:h.bottom-h.top})
}var l=f?{top:0,left:0}:g.offset();
var e={scroll:f?document.documentElement.scrollTop||document.body.scrollTop:g.scrollTop()};
var k=f?{width:d(window).width(),height:d(window).height()}:null;
return d.extend({},h,e,k,l)
};
c.prototype.getCalculatedOffset=function(e,h,f,g){return e=="bottom"?{top:h.top+h.height,left:h.left+h.width/2-f/2}:e=="top"?{top:h.top-g,left:h.left+h.width/2-f/2}:e=="left"?{top:h.top+h.height/2-g/2,left:h.left-f}:{top:h.top+h.height/2-g/2,left:h.left+h.width}
};
c.prototype.getViewportAdjustedDelta=function(h,l,e,k){var n={top:0,left:0};
if(!this.$viewport){return n
}var g=this.options.viewport&&this.options.viewport.padding||0;
var m=this.getPosition(this.$viewport);
if(/right|left/.test(h)){var o=l.top-g-m.scroll;
var j=l.top+g-m.scroll+k;
if(o<m.top){n.top=m.top-o
}else{if(j>m.top+m.height){n.top=m.top+m.height-j
}}}else{var p=l.left-g;
var f=l.left+g+e;
if(p<m.left){n.left=m.left-p
}else{if(f>m.width){n.left=m.left+m.width-f
}}}return n
};
c.prototype.getTitle=function(){var g;
var e=this.$element;
var f=this.options;
g=e.attr("data-original-title")||(typeof f.title=="function"?f.title.call(e[0]):f.title);
return g
};
c.prototype.getUID=function(e){do{e+=~~(Math.random()*1000000)
}while(document.getElementById(e));
return e
};
c.prototype.tip=function(){return(this.$tip=this.$tip||d(this.options.template))
};
c.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow"))
};
c.prototype.enable=function(){this.enabled=true
};
c.prototype.disable=function(){this.enabled=false
};
c.prototype.toggleEnabled=function(){this.enabled=!this.enabled
};
c.prototype.toggle=function(g){var f=this;
if(g){f=d(g.currentTarget).data("bs."+this.type);
if(!f){f=new this.constructor(g.currentTarget,this.getDelegateOptions());
d(g.currentTarget).data("bs."+this.type,f)
}}f.tip().hasClass("in")?f.leave(f):f.enter(f)
};
c.prototype.destroy=function(){var e=this;
clearTimeout(this.timeout);
this.hide(function(){e.$element.off("."+e.type).removeData("bs."+e.type)
})
};
function b(e){return this.each(function(){var h=d(this);
var g=h.data("bs.tooltip");
var f=typeof e=="object"&&e;
if(!g&&/destroy|hide/.test(e)){return
}if(!g){h.data("bs.tooltip",(g=new c(this,f)))
}if(typeof e=="string"){g[e]()
}})
}var a=d.fn.tooltip;
d.fn.tooltip=b;
d.fn.tooltip.Constructor=c;
d.fn.tooltip.noConflict=function(){d.fn.tooltip=a;
return this
}
}(jQuery);
+function(d){var c=function(f,e){this.init("popover",f,e)
};
if(!d.fn.tooltip){throw new Error("Popover requires tooltip.js")
}c.VERSION="3.3.4";
c.DEFAULTS=d.extend({},d.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});
c.prototype=d.extend({},d.fn.tooltip.Constructor.prototype);
c.prototype.constructor=c;
c.prototype.getDefaults=function(){return c.DEFAULTS
};
c.prototype.setContent=function(){var g=this.tip();
var f=this.getTitle();
var e=this.getContent();
g.find(".popover-title")[this.options.html?"html":"text"](f);
g.find(".popover-content").children().detach().end()[this.options.html?(typeof e=="string"?"html":"append"):"text"](e);
g.removeClass("fade top bottom left right in");
if(!g.find(".popover-title").html()){g.find(".popover-title").hide()
}};
c.prototype.hasContent=function(){return this.getTitle()||this.getContent()
};
c.prototype.getContent=function(){var e=this.$element;
var f=this.options;
return e.attr("data-content")||(typeof f.content=="function"?f.content.call(e[0]):f.content)
};
c.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find(".arrow"))
};
function b(e){return this.each(function(){var h=d(this);
var g=h.data("bs.popover");
var f=typeof e=="object"&&e;
if(!g&&/destroy|hide/.test(e)){return
}if(!g){h.data("bs.popover",(g=new c(this,f)))
}if(typeof e=="string"){g[e]()
}})
}var a=d.fn.popover;
d.fn.popover=b;
d.fn.popover.Constructor=c;
d.fn.popover.noConflict=function(){d.fn.popover=a;
return this
}
}(jQuery);
!function(b){"function"==typeof define&&define.amd?define(["jquery"],b):"undefined"!=typeof exports?module.exports=b(require("jquery")):b(jQuery)
}(function(d){var c=window.Slick||{};
c=function(){function e(j,h){var b,g=this;
g.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:d(j),appendDots:d(j),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3000,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(f,k){return d('<button type="button" data-role="none" role="button" tabindex="0" />').text(k+1)
},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:0.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1000},g.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},d.extend(g,g.initials),g.activeBreakpoint=null,g.animType=null,g.animProp=null,g.breakpoints=[],g.breakpointSettings=[],g.cssTransitions=!1,g.focussed=!1,g.interrupted=!1,g.hidden="hidden",g.paused=!0,g.positionProp=null,g.respondTo=null,g.rowCount=1,g.shouldClick=!0,g.$slider=d(j),g.$slidesCache=null,g.transformType=null,g.transitionType=null,g.visibilityChange="visibilitychange",g.windowWidth=0,g.windowTimer=null,b=d(j).data("slick")||{},g.options=d.extend({},g.defaults,h,b),g.currentSlide=g.options.initialSlide,g.originalSettings=g.options,"undefined"!=typeof document.mozHidden?(g.hidden="mozHidden",g.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(g.hidden="webkitHidden",g.visibilityChange="webkitvisibilitychange"),g.autoPlay=d.proxy(g.autoPlay,g),g.autoPlayClear=d.proxy(g.autoPlayClear,g),g.autoPlayIterator=d.proxy(g.autoPlayIterator,g),g.changeSlide=d.proxy(g.changeSlide,g),g.clickHandler=d.proxy(g.clickHandler,g),g.selectHandler=d.proxy(g.selectHandler,g),g.setPosition=d.proxy(g.setPosition,g),g.swipeHandler=d.proxy(g.swipeHandler,g),g.dragHandler=d.proxy(g.dragHandler,g),g.keyHandler=d.proxy(g.keyHandler,g),g.instanceUid=a++,g.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,g.registerBreakpoints(),g.init(!0)
}var a=0;
return e
}(),c.prototype.activateADA=function(){var b=this;
b.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})
},c.prototype.addSlide=c.prototype.slickAdd=function(a,h,g){var f=this;
if("boolean"==typeof h){g=h,h=null
}else{if(0>h||h>=f.slideCount){return !1
}}f.unload(),"number"==typeof h?0===h&&0===f.$slides.length?d(a).appendTo(f.$slideTrack):g?d(a).insertBefore(f.$slides.eq(h)):d(a).insertAfter(f.$slides.eq(h)):g===!0?d(a).prependTo(f.$slideTrack):d(a).appendTo(f.$slideTrack),f.$slides=f.$slideTrack.children(this.options.slide),f.$slideTrack.children(this.options.slide).detach(),f.$slideTrack.append(f.$slides),f.$slides.each(function(e,j){d(j).attr("data-slick-index",e)
}),f.$slidesCache=f.$slides,f.reinit()
},c.prototype.animateHeight=function(){var f=this;
if(1===f.options.slidesToShow&&f.options.adaptiveHeight===!0&&f.options.vertical===!1){var e=f.$slides.eq(f.currentSlide).outerHeight(!0);
f.$list.animate({height:e},f.options.speed)
}},c.prototype.animateSlide=function(a,h){var g={},f=this;
f.animateHeight(),f.options.rtl===!0&&f.options.vertical===!1&&(a=-a),f.transformsEnabled===!1?f.options.vertical===!1?f.$slideTrack.animate({left:a},f.options.speed,f.options.easing,h):f.$slideTrack.animate({top:a},f.options.speed,f.options.easing,h):f.cssTransitions===!1?(f.options.rtl===!0&&(f.currentLeft=-f.currentLeft),d({animStart:f.currentLeft}).animate({animStart:a},{duration:f.options.speed,easing:f.options.easing,step:function(b){b=Math.ceil(b),f.options.vertical===!1?(g[f.animType]="translate("+b+"px, 0px)",f.$slideTrack.css(g)):(g[f.animType]="translate(0px,"+b+"px)",f.$slideTrack.css(g))
},complete:function(){h&&h.call()
}})):(f.applyTransition(),a=Math.ceil(a),f.options.vertical===!1?g[f.animType]="translate3d("+a+"px, 0px, 0px)":g[f.animType]="translate3d(0px,"+a+"px, 0px)",f.$slideTrack.css(g),h&&setTimeout(function(){f.disableTransition(),h.call()
},f.options.speed))
},c.prototype.getNavTarget=function(){var a=this,e=a.options.asNavFor;
return e&&null!==e&&(e=d(e).not(a.$slider)),e
},c.prototype.asNavFor=function(a){var f=this,e=f.getNavTarget();
null!==e&&"object"==typeof e&&e.each(function(){var b=d(this).slick("getSlick");
b.unslicked||b.slideHandler(a,!0)
})
},c.prototype.applyTransition=function(f){var e=this,g={};
e.options.fade===!1?g[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:g[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,e.options.fade===!1?e.$slideTrack.css(g):e.$slides.eq(f).css(g)
},c.prototype.autoPlay=function(){var b=this;
b.autoPlayClear(),b.slideCount>b.options.slidesToShow&&(b.autoPlayTimer=setInterval(b.autoPlayIterator,b.options.autoplaySpeed))
},c.prototype.autoPlayClear=function(){var b=this;
b.autoPlayTimer&&clearInterval(b.autoPlayTimer)
},c.prototype.autoPlayIterator=function(){var f=this,e=f.currentSlide+f.options.slidesToScroll;
f.paused||f.interrupted||f.focussed||(f.options.infinite===!1&&(1===f.direction&&f.currentSlide+1===f.slideCount-1?f.direction=0:0===f.direction&&(e=f.currentSlide-f.options.slidesToScroll,f.currentSlide-1===0&&(f.direction=1))),f.slideHandler(e))
},c.prototype.buildArrows=function(){var a=this;
a.options.arrows===!0&&(a.$prevArrow=d(a.options.prevArrow).addClass("slick-arrow"),a.$nextArrow=d(a.options.nextArrow).addClass("slick-arrow"),a.slideCount>a.options.slidesToShow?(a.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),a.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),a.htmlExpr.test(a.options.prevArrow)&&a.$prevArrow.prependTo(a.options.appendArrows),a.htmlExpr.test(a.options.nextArrow)&&a.$nextArrow.appendTo(a.options.appendArrows),a.options.infinite!==!0&&a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):a.$prevArrow.add(a.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))
},c.prototype.buildDots=function(){var f,e,a=this;
if(a.options.dots===!0&&a.slideCount>a.options.slidesToShow){for(a.$slider.addClass("slick-dotted"),e=d("<ul />").addClass(a.options.dotsClass),f=0;
f<=a.getDotCount();
f+=1){e.append(d("<li />").append(a.options.customPaging.call(this,a,f)))
}a.$dots=e.appendTo(a.options.appendDots),a.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")
}},c.prototype.buildOut=function(){var a=this;
a.$slides=a.$slider.children(a.options.slide+":not(.slick-cloned)").addClass("slick-slide"),a.slideCount=a.$slides.length,a.$slides.each(function(e,f){d(f).attr("data-slick-index",e).data("originalStyling",d(f).attr("style")||"")
}),a.$slider.addClass("slick-slider"),a.$slideTrack=0===a.slideCount?d('<div class="slick-track"/>').appendTo(a.$slider):a.$slides.wrapAll('<div class="slick-track"/>').parent(),a.$list=a.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),a.$slideTrack.css("opacity",0),(a.options.centerMode===!0||a.options.swipeToSlide===!0)&&(a.options.slidesToScroll=1),d("img[data-lazy]",a.$slider).not("[src]").addClass("slick-loading"),a.setupInfinite(),a.buildArrows(),a.buildDots(),a.updateDots(),a.setSlideClasses("number"==typeof a.currentSlide?a.currentSlide:0),a.options.draggable===!0&&a.$list.addClass("draggable")
},c.prototype.buildRows=function(){var v,u,t,s,r,p,o,w=this;
if(s=document.createDocumentFragment(),p=w.$slider.children(),w.options.rows>1){for(o=w.options.slidesPerRow*w.options.rows,r=Math.ceil(p.length/o),v=0;
r>v;
v++){var n=document.createElement("div");
for(u=0;
u<w.options.rows;
u++){var m=document.createElement("div");
for(t=0;
t<w.options.slidesPerRow;
t++){var l=v*o+(u*w.options.slidesPerRow+t);
p.get(l)&&m.appendChild(p.get(l))
}n.appendChild(m)
}s.appendChild(n)
}w.$slider.empty().append(s),w.$slider.children().children().children().css({width:100/w.options.slidesPerRow+"%",display:"inline-block"})
}},c.prototype.checkResponsive=function(s,r){var o,n,m,p=this,l=!1,k=p.$slider.width(),a=window.innerWidth||d(window).width();
if("window"===p.respondTo?m=a:"slider"===p.respondTo?m=k:"min"===p.respondTo&&(m=Math.min(a,k)),p.options.responsive&&p.options.responsive.length&&null!==p.options.responsive){n=null;
for(o in p.breakpoints){p.breakpoints.hasOwnProperty(o)&&(p.originalSettings.mobileFirst===!1?m<p.breakpoints[o]&&(n=p.breakpoints[o]):m>p.breakpoints[o]&&(n=p.breakpoints[o]))
}null!==n?null!==p.activeBreakpoint?(n!==p.activeBreakpoint||r)&&(p.activeBreakpoint=n,"unslick"===p.breakpointSettings[n]?p.unslick(n):(p.options=d.extend({},p.originalSettings,p.breakpointSettings[n]),s===!0&&(p.currentSlide=p.options.initialSlide),p.refresh(s)),l=n):(p.activeBreakpoint=n,"unslick"===p.breakpointSettings[n]?p.unslick(n):(p.options=d.extend({},p.originalSettings,p.breakpointSettings[n]),s===!0&&(p.currentSlide=p.options.initialSlide),p.refresh(s)),l=n):null!==p.activeBreakpoint&&(p.activeBreakpoint=null,p.options=p.originalSettings,s===!0&&(p.currentSlide=p.options.initialSlide),p.refresh(s),l=n),s||l===!1||p.$slider.trigger("breakpoint",[p,l])
}},c.prototype.changeSlide=function(a,p){var m,l,k,o=this,n=d(a.currentTarget);
switch(n.is("a")&&a.preventDefault(),n.is("li")||(n=n.closest("li")),k=o.slideCount%o.options.slidesToScroll!==0,m=k?0:(o.slideCount-o.currentSlide)%o.options.slidesToScroll,a.data.message){case"previous":l=0===m?o.options.slidesToScroll:o.options.slidesToShow-m,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide-l,!1,p);
break;
case"next":l=0===m?o.options.slidesToScroll:m,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide+l,!1,p);
break;
case"index":var j=0===a.data.index?0:a.data.index||n.index()*o.options.slidesToScroll;
o.slideHandler(o.checkNavigable(j),!1,p),n.children().trigger("focus");
break;
default:return
}},c.prototype.checkNavigable=function(g){var k,j,f=this;
if(k=f.getNavigableIndexes(),j=0,g>k[k.length-1]){g=k[k.length-1]
}else{for(var h in k){if(g<k[h]){g=j;
break
}j=k[h]
}}return g
},c.prototype.cleanUpEvents=function(){var a=this;
a.options.dots&&null!==a.$dots&&d("li",a.$dots).off("click.slick",a.changeSlide).off("mouseenter.slick",d.proxy(a.interrupt,a,!0)).off("mouseleave.slick",d.proxy(a.interrupt,a,!1)),a.$slider.off("focus.slick blur.slick"),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow&&a.$prevArrow.off("click.slick",a.changeSlide),a.$nextArrow&&a.$nextArrow.off("click.slick",a.changeSlide)),a.$list.off("touchstart.slick mousedown.slick",a.swipeHandler),a.$list.off("touchmove.slick mousemove.slick",a.swipeHandler),a.$list.off("touchend.slick mouseup.slick",a.swipeHandler),a.$list.off("touchcancel.slick mouseleave.slick",a.swipeHandler),a.$list.off("click.slick",a.clickHandler),d(document).off(a.visibilityChange,a.visibility),a.cleanUpSlideEvents(),a.options.accessibility===!0&&a.$list.off("keydown.slick",a.keyHandler),a.options.focusOnSelect===!0&&d(a.$slideTrack).children().off("click.slick",a.selectHandler),d(window).off("orientationchange.slick.slick-"+a.instanceUid,a.orientationChange),d(window).off("resize.slick.slick-"+a.instanceUid,a.resize),d("[draggable!=true]",a.$slideTrack).off("dragstart",a.preventDefault),d(window).off("load.slick.slick-"+a.instanceUid,a.setPosition),d(document).off("ready.slick.slick-"+a.instanceUid,a.setPosition)
},c.prototype.cleanUpSlideEvents=function(){var a=this;
a.$list.off("mouseenter.slick",d.proxy(a.interrupt,a,!0)),a.$list.off("mouseleave.slick",d.proxy(a.interrupt,a,!1))
},c.prototype.cleanUpRows=function(){var e,f=this;
f.options.rows>1&&(e=f.$slides.children().children(),e.removeAttr("style"),f.$slider.empty().append(e))
},c.prototype.clickHandler=function(f){var e=this;
e.shouldClick===!1&&(f.stopImmediatePropagation(),f.stopPropagation(),f.preventDefault())
},c.prototype.destroy=function(a){var e=this;
e.autoPlayClear(),e.touchObject={},e.cleanUpEvents(),d(".slick-cloned",e.$slider).detach(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.$prevArrow.length&&(e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove()),e.$nextArrow&&e.$nextArrow.length&&(e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove()),e.$slides&&(e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){d(this).attr("style",d(this).data("originalStyling"))
}),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.detach(),e.$list.detach(),e.$slider.append(e.$slides)),e.cleanUpRows(),e.$slider.removeClass("slick-slider"),e.$slider.removeClass("slick-initialized"),e.$slider.removeClass("slick-dotted"),e.unslicked=!0,a||e.$slider.trigger("destroy",[e])
},c.prototype.disableTransition=function(f){var e=this,g={};
g[e.transitionType]="",e.options.fade===!1?e.$slideTrack.css(g):e.$slides.eq(f).css(g)
},c.prototype.fadeSlide=function(f,e){var g=this;
g.cssTransitions===!1?(g.$slides.eq(f).css({zIndex:g.options.zIndex}),g.$slides.eq(f).animate({opacity:1},g.options.speed,g.options.easing,e)):(g.applyTransition(f),g.$slides.eq(f).css({opacity:1,zIndex:g.options.zIndex}),e&&setTimeout(function(){g.disableTransition(f),e.call()
},g.options.speed))
},c.prototype.fadeSlideOut=function(f){var e=this;
e.cssTransitions===!1?e.$slides.eq(f).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(f),e.$slides.eq(f).css({opacity:0,zIndex:e.options.zIndex-2}))
},c.prototype.filterSlides=c.prototype.slickFilter=function(f){var e=this;
null!==f&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(f).appendTo(e.$slideTrack),e.reinit())
},c.prototype.focusHandler=function(){var a=this;
a.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(e){e.stopImmediatePropagation();
var b=d(this);
setTimeout(function(){a.options.pauseOnFocus&&(a.focussed=b.is(":focus"),a.autoPlay())
},0)
})
},c.prototype.getCurrent=c.prototype.slickCurrentSlide=function(){var b=this;
return b.currentSlide
},c.prototype.getDotCount=function(){var f=this,e=0,h=0,g=0;
if(f.options.infinite===!0){for(;
e<f.slideCount;
){++g,e=h+f.options.slidesToScroll,h+=f.options.slidesToScroll<=f.options.slidesToShow?f.options.slidesToScroll:f.options.slidesToShow
}}else{if(f.options.centerMode===!0){g=f.slideCount
}else{if(f.options.asNavFor){for(;
e<f.slideCount;
){++g,e=h+f.options.slidesToScroll,h+=f.options.slidesToScroll<=f.options.slidesToShow?f.options.slidesToScroll:f.options.slidesToShow
}}else{g=1+Math.ceil((f.slideCount-f.options.slidesToShow)/f.options.slidesToScroll)
}}}return g-1
},c.prototype.getLeft=function(h){var m,l,j,g=this,k=0;
return g.slideOffset=0,l=g.$slides.first().outerHeight(!0),g.options.infinite===!0?(g.slideCount>g.options.slidesToShow&&(g.slideOffset=g.slideWidth*g.options.slidesToShow*-1,k=l*g.options.slidesToShow*-1),g.slideCount%g.options.slidesToScroll!==0&&h+g.options.slidesToScroll>g.slideCount&&g.slideCount>g.options.slidesToShow&&(h>g.slideCount?(g.slideOffset=(g.options.slidesToShow-(h-g.slideCount))*g.slideWidth*-1,k=(g.options.slidesToShow-(h-g.slideCount))*l*-1):(g.slideOffset=g.slideCount%g.options.slidesToScroll*g.slideWidth*-1,k=g.slideCount%g.options.slidesToScroll*l*-1))):h+g.options.slidesToShow>g.slideCount&&(g.slideOffset=(h+g.options.slidesToShow-g.slideCount)*g.slideWidth,k=(h+g.options.slidesToShow-g.slideCount)*l),g.slideCount<=g.options.slidesToShow&&(g.slideOffset=0,k=0),g.options.centerMode===!0&&g.options.infinite===!0?g.slideOffset+=g.slideWidth*Math.floor(g.options.slidesToShow/2)-g.slideWidth:g.options.centerMode===!0&&(g.slideOffset=0,g.slideOffset+=g.slideWidth*Math.floor(g.options.slidesToShow/2)),m=g.options.vertical===!1?h*g.slideWidth*-1+g.slideOffset:h*l*-1+k,g.options.variableWidth===!0&&(j=g.slideCount<=g.options.slidesToShow||g.options.infinite===!1?g.$slideTrack.children(".slick-slide").eq(h):g.$slideTrack.children(".slick-slide").eq(h+g.options.slidesToShow),m=g.options.rtl===!0?j[0]?-1*(g.$slideTrack.width()-j[0].offsetLeft-j.width()):0:j[0]?-1*j[0].offsetLeft:0,g.options.centerMode===!0&&(j=g.slideCount<=g.options.slidesToShow||g.options.infinite===!1?g.$slideTrack.children(".slick-slide").eq(h):g.$slideTrack.children(".slick-slide").eq(h+g.options.slidesToShow+1),m=g.options.rtl===!0?j[0]?-1*(g.$slideTrack.width()-j[0].offsetLeft-j.width()):0:j[0]?-1*j[0].offsetLeft:0,m+=(g.$list.width()-j.outerWidth())/2)),m
},c.prototype.getOption=c.prototype.slickGetOption=function(f){var e=this;
return e.options[f]
},c.prototype.getNavigableIndexes=function(){var h,g=this,f=0,k=0,j=[];
for(g.options.infinite===!1?h=g.slideCount:(f=-1*g.options.slidesToScroll,k=-1*g.options.slidesToScroll,h=2*g.slideCount);
h>f;
){j.push(f),f=k+g.options.slidesToScroll,k+=g.options.slidesToScroll<=g.options.slidesToShow?g.options.slidesToScroll:g.options.slidesToShow
}return j
},c.prototype.getSlick=function(){return this
},c.prototype.getSlideCount=function(){var h,g,f,a=this;
return f=a.options.centerMode===!0?a.slideWidth*Math.floor(a.options.slidesToShow/2):0,a.options.swipeToSlide===!0?(a.$slideTrack.find(".slick-slide").each(function(e,b){return b.offsetLeft-f+d(b).outerWidth()/2>-1*a.swipeLeft?(g=b,!1):void 0
}),h=Math.abs(d(g).attr("data-slick-index")-a.currentSlide)||1):a.options.slidesToScroll
},c.prototype.goTo=c.prototype.slickGoTo=function(f,e){var g=this;
g.changeSlide({data:{message:"index",index:parseInt(f)}},e)
},c.prototype.init=function(a){var e=this;
d(e.$slider).hasClass("slick-initialized")||(d(e.$slider).addClass("slick-initialized"),e.buildRows(),e.buildOut(),e.setProps(),e.startLoad(),e.loadSlider(),e.initializeEvents(),e.updateArrows(),e.updateDots(),e.checkResponsive(!0),e.focusHandler()),a&&e.$slider.trigger("init",[e]),e.options.accessibility===!0&&e.initADA(),e.options.autoplay&&(e.paused=!1,e.autoPlay())
},c.prototype.initADA=function(){var a=this;
a.$slides.add(a.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),a.$slideTrack.attr("role","listbox"),a.$slides.not(a.$slideTrack.find(".slick-cloned")).each(function(b){d(this).attr({role:"option","aria-describedby":"slick-slide"+a.instanceUid+b})
}),null!==a.$dots&&a.$dots.attr("role","tablist").find("li").each(function(b){d(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+a.instanceUid+b,id:"slick-slide"+a.instanceUid+b})
}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),a.activateADA()
},c.prototype.initArrowEvents=function(){var b=this;
b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},b.changeSlide),b.$nextArrow.off("click.slick").on("click.slick",{message:"next"},b.changeSlide))
},c.prototype.initDotEvents=function(){var a=this;
a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&d("li",a.$dots).on("click.slick",{message:"index"},a.changeSlide),a.options.dots===!0&&a.options.pauseOnDotsHover===!0&&d("li",a.$dots).on("mouseenter.slick",d.proxy(a.interrupt,a,!0)).on("mouseleave.slick",d.proxy(a.interrupt,a,!1))
},c.prototype.initSlideEvents=function(){var a=this;
a.options.pauseOnHover&&(a.$list.on("mouseenter.slick",d.proxy(a.interrupt,a,!0)),a.$list.on("mouseleave.slick",d.proxy(a.interrupt,a,!1)))
},c.prototype.initializeEvents=function(){var a=this;
a.initArrowEvents(),a.initDotEvents(),a.initSlideEvents(),a.$list.on("touchstart.slick mousedown.slick",{action:"start"},a.swipeHandler),a.$list.on("touchmove.slick mousemove.slick",{action:"move"},a.swipeHandler),a.$list.on("touchend.slick mouseup.slick",{action:"end"},a.swipeHandler),a.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},a.swipeHandler),a.$list.on("click.slick",a.clickHandler),d(document).on(a.visibilityChange,d.proxy(a.visibility,a)),a.options.accessibility===!0&&a.$list.on("keydown.slick",a.keyHandler),a.options.focusOnSelect===!0&&d(a.$slideTrack).children().on("click.slick",a.selectHandler),d(window).on("orientationchange.slick.slick-"+a.instanceUid,d.proxy(a.orientationChange,a)),d(window).on("resize.slick.slick-"+a.instanceUid,d.proxy(a.resize,a)),d("[draggable!=true]",a.$slideTrack).on("dragstart",a.preventDefault),d(window).on("load.slick.slick-"+a.instanceUid,a.setPosition),d(document).on("ready.slick.slick-"+a.instanceUid,a.setPosition)
},c.prototype.initUI=function(){var b=this;
b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow.show(),b.$nextArrow.show()),b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&b.$dots.show()
},c.prototype.keyHandler=function(f){var e=this;
f.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===f.keyCode&&e.options.accessibility===!0?e.changeSlide({data:{message:e.options.rtl===!0?"next":"previous"}}):39===f.keyCode&&e.options.accessibility===!0&&e.changeSlide({data:{message:e.options.rtl===!0?"previous":"next"}}))
},c.prototype.lazyLoad=function(){function h(b){d("img[data-lazy]",b).each(function(){var n=d(this),g=d(this).attr("data-lazy"),f=document.createElement("img");
f.onload=function(){n.animate({opacity:0},100,function(){n.attr("src",g).animate({opacity:1},200,function(){n.removeAttr("data-lazy").removeClass("slick-loading")
}),a.$slider.trigger("lazyLoaded",[a,n,g])
})
},f.onerror=function(){n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),a.$slider.trigger("lazyLoadError",[a,n,g])
},f.src=g
})
}var m,l,k,j,a=this;
a.options.centerMode===!0?a.options.infinite===!0?(k=a.currentSlide+(a.options.slidesToShow/2+1),j=k+a.options.slidesToShow+2):(k=Math.max(0,a.currentSlide-(a.options.slidesToShow/2+1)),j=2+(a.options.slidesToShow/2+1)+a.currentSlide):(k=a.options.infinite?a.options.slidesToShow+a.currentSlide:a.currentSlide,j=Math.ceil(k+a.options.slidesToShow),a.options.fade===!0&&(k>0&&k--,j<=a.slideCount&&j++)),m=a.$slider.find(".slick-slide").slice(k,j),h(m),a.slideCount<=a.options.slidesToShow?(l=a.$slider.find(".slick-slide"),h(l)):a.currentSlide>=a.slideCount-a.options.slidesToShow?(l=a.$slider.find(".slick-cloned").slice(0,a.options.slidesToShow),h(l)):0===a.currentSlide&&(l=a.$slider.find(".slick-cloned").slice(-1*a.options.slidesToShow),h(l))
},c.prototype.loadSlider=function(){var b=this;
b.setPosition(),b.$slideTrack.css({opacity:1}),b.$slider.removeClass("slick-loading"),b.initUI(),"progressive"===b.options.lazyLoad&&b.progressiveLazyLoad()
},c.prototype.next=c.prototype.slickNext=function(){var b=this;
b.changeSlide({data:{message:"next"}})
},c.prototype.orientationChange=function(){var b=this;
b.checkResponsive(),b.setPosition()
},c.prototype.pause=c.prototype.slickPause=function(){var b=this;
b.autoPlayClear(),b.paused=!0
},c.prototype.play=c.prototype.slickPlay=function(){var b=this;
b.autoPlay(),b.options.autoplay=!0,b.paused=!1,b.focussed=!1,b.interrupted=!1
},c.prototype.postSlide=function(f){var e=this;
e.unslicked||(e.$slider.trigger("afterChange",[e,f]),e.animating=!1,e.setPosition(),e.swipeLeft=null,e.options.autoplay&&e.autoPlay(),e.options.accessibility===!0&&e.initADA())
},c.prototype.prev=c.prototype.slickPrev=function(){var b=this;
b.changeSlide({data:{message:"previous"}})
},c.prototype.preventDefault=function(b){b.preventDefault()
},c.prototype.progressiveLazyLoad=function(a){a=a||1;
var k,j,h,m=this,l=d("img[data-lazy]",m.$slider);
l.length?(k=l.first(),j=k.attr("data-lazy"),h=document.createElement("img"),h.onload=function(){k.attr("src",j).removeAttr("data-lazy").removeClass("slick-loading"),m.options.adaptiveHeight===!0&&m.setPosition(),m.$slider.trigger("lazyLoaded",[m,k,j]),m.progressiveLazyLoad()
},h.onerror=function(){3>a?setTimeout(function(){m.progressiveLazyLoad(a+1)
},500):(k.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),m.$slider.trigger("lazyLoadError",[m,k,j]),m.progressiveLazyLoad())
},h.src=j):m.$slider.trigger("allImagesLoaded",[m])
},c.prototype.refresh=function(a){var g,f,h=this;
f=h.slideCount-h.options.slidesToShow,!h.options.infinite&&h.currentSlide>f&&(h.currentSlide=f),h.slideCount<=h.options.slidesToShow&&(h.currentSlide=0),g=h.currentSlide,h.destroy(!0),d.extend(h,h.initials,{currentSlide:g}),h.init(),a||h.changeSlide({data:{message:"index",index:g}},!1)
},c.prototype.registerBreakpoints=function(){var k,j,h,a=this,g=a.options.responsive||null;
if("array"===d.type(g)&&g.length){a.respondTo=a.options.respondTo||"window";
for(k in g){if(h=a.breakpoints.length-1,j=g[k].breakpoint,g.hasOwnProperty(k)){for(;
h>=0;
){a.breakpoints[h]&&a.breakpoints[h]===j&&a.breakpoints.splice(h,1),h--
}a.breakpoints.push(j),a.breakpointSettings[j]=g[k].settings
}}a.breakpoints.sort(function(b,e){return a.options.mobileFirst?b-e:e-b
})
}},c.prototype.reinit=function(){var a=this;
a.$slides=a.$slideTrack.children(a.options.slide).addClass("slick-slide"),a.slideCount=a.$slides.length,a.currentSlide>=a.slideCount&&0!==a.currentSlide&&(a.currentSlide=a.currentSlide-a.options.slidesToScroll),a.slideCount<=a.options.slidesToShow&&(a.currentSlide=0),a.registerBreakpoints(),a.setProps(),a.setupInfinite(),a.buildArrows(),a.updateArrows(),a.initArrowEvents(),a.buildDots(),a.updateDots(),a.initDotEvents(),a.cleanUpSlideEvents(),a.initSlideEvents(),a.checkResponsive(!1,!0),a.options.focusOnSelect===!0&&d(a.$slideTrack).children().on("click.slick",a.selectHandler),a.setSlideClasses("number"==typeof a.currentSlide?a.currentSlide:0),a.setPosition(),a.focusHandler(),a.paused=!a.options.autoplay,a.autoPlay(),a.$slider.trigger("reInit",[a])
},c.prototype.resize=function(){var a=this;
d(window).width()!==a.windowWidth&&(clearTimeout(a.windowDelay),a.windowDelay=window.setTimeout(function(){a.windowWidth=d(window).width(),a.checkResponsive(),a.unslicked||a.setPosition()
},50))
},c.prototype.removeSlide=c.prototype.slickRemove=function(f,e,h){var g=this;
return"boolean"==typeof f?(e=f,f=e===!0?0:g.slideCount-1):f=e===!0?--f:f,g.slideCount<1||0>f||f>g.slideCount-1?!1:(g.unload(),h===!0?g.$slideTrack.children().remove():g.$slideTrack.children(this.options.slide).eq(f).remove(),g.$slides=g.$slideTrack.children(this.options.slide),g.$slideTrack.children(this.options.slide).detach(),g.$slideTrack.append(g.$slides),g.$slidesCache=g.$slides,void g.reinit())
},c.prototype.setCSS=function(g){var j,h,f=this,k={};
f.options.rtl===!0&&(g=-g),j="left"==f.positionProp?Math.ceil(g)+"px":"0px",h="top"==f.positionProp?Math.ceil(g)+"px":"0px",k[f.positionProp]=g,f.transformsEnabled===!1?f.$slideTrack.css(k):(k={},f.cssTransitions===!1?(k[f.animType]="translate("+j+", "+h+")",f.$slideTrack.css(k)):(k[f.animType]="translate3d("+j+", "+h+", 0px)",f.$slideTrack.css(k)))
},c.prototype.setDimensions=function(){var f=this;
f.options.vertical===!1?f.options.centerMode===!0&&f.$list.css({padding:"0px "+f.options.centerPadding}):(f.$list.height(f.$slides.first().outerHeight(!0)*f.options.slidesToShow),f.options.centerMode===!0&&f.$list.css({padding:f.options.centerPadding+" 0px"})),f.listWidth=f.$list.width(),f.listHeight=f.$list.height(),f.options.vertical===!1&&f.options.variableWidth===!1?(f.slideWidth=Math.ceil(f.listWidth/f.options.slidesToShow),f.$slideTrack.width(Math.ceil(f.slideWidth*f.$slideTrack.children(".slick-slide").length))):f.options.variableWidth===!0?f.$slideTrack.width(5000*f.slideCount):(f.slideWidth=Math.ceil(f.listWidth),f.$slideTrack.height(Math.ceil(f.$slides.first().outerHeight(!0)*f.$slideTrack.children(".slick-slide").length)));
var e=f.$slides.first().outerWidth(!0)-f.$slides.first().width();
f.options.variableWidth===!1&&f.$slideTrack.children(".slick-slide").width(f.slideWidth-e)
},c.prototype.setFade=function(){var e,a=this;
a.$slides.each(function(f,b){e=a.slideWidth*f*-1,a.options.rtl===!0?d(b).css({position:"relative",right:e,top:0,zIndex:a.options.zIndex-2,opacity:0}):d(b).css({position:"relative",left:e,top:0,zIndex:a.options.zIndex-2,opacity:0})
}),a.$slides.eq(a.currentSlide).css({zIndex:a.options.zIndex-1,opacity:1})
},c.prototype.setHeight=function(){var f=this;
if(1===f.options.slidesToShow&&f.options.adaptiveHeight===!0&&f.options.vertical===!1){var e=f.$slides.eq(f.currentSlide).outerHeight(!0);
f.$list.css("height",e)
}},c.prototype.setOption=c.prototype.slickSetOption=function(){var o,n,m,l,j,a=this,k=!1;
if("object"===d.type(arguments[0])?(m=arguments[0],k=arguments[1],j="multiple"):"string"===d.type(arguments[0])&&(m=arguments[0],l=arguments[1],k=arguments[2],"responsive"===arguments[0]&&"array"===d.type(arguments[1])?j="responsive":"undefined"!=typeof arguments[1]&&(j="single")),"single"===j){a.options[m]=l
}else{if("multiple"===j){d.each(m,function(b,e){a.options[b]=e
})
}else{if("responsive"===j){for(n in l){if("array"!==d.type(a.options.responsive)){a.options.responsive=[l[n]]
}else{for(o=a.options.responsive.length-1;
o>=0;
){a.options.responsive[o].breakpoint===l[n].breakpoint&&a.options.responsive.splice(o,1),o--
}a.options.responsive.push(l[n])
}}}}}k&&(a.unload(),a.reinit())
},c.prototype.setPosition=function(){var b=this;
b.setDimensions(),b.setHeight(),b.options.fade===!1?b.setCSS(b.getLeft(b.currentSlide)):b.setFade(),b.$slider.trigger("setPosition",[b])
},c.prototype.setProps=function(){var f=this,e=document.body.style;
f.positionProp=f.options.vertical===!0?"top":"left","top"===f.positionProp?f.$slider.addClass("slick-vertical"):f.$slider.removeClass("slick-vertical"),(void 0!==e.WebkitTransition||void 0!==e.MozTransition||void 0!==e.msTransition)&&f.options.useCSS===!0&&(f.cssTransitions=!0),f.options.fade&&("number"==typeof f.options.zIndex?f.options.zIndex<3&&(f.options.zIndex=3):f.options.zIndex=f.defaults.zIndex),void 0!==e.OTransform&&(f.animType="OTransform",f.transformType="-o-transform",f.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(f.animType=!1)),void 0!==e.MozTransform&&(f.animType="MozTransform",f.transformType="-moz-transform",f.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(f.animType=!1)),void 0!==e.webkitTransform&&(f.animType="webkitTransform",f.transformType="-webkit-transform",f.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(f.animType=!1)),void 0!==e.msTransform&&(f.animType="msTransform",f.transformType="-ms-transform",f.transitionType="msTransition",void 0===e.msTransform&&(f.animType=!1)),void 0!==e.transform&&f.animType!==!1&&(f.animType="transform",f.transformType="transform",f.transitionType="transition"),f.transformsEnabled=f.options.useTransform&&null!==f.animType&&f.animType!==!1
},c.prototype.setSlideClasses=function(h){var m,l,k,j,g=this;
l=g.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),g.$slides.eq(h).addClass("slick-current"),g.options.centerMode===!0?(m=Math.floor(g.options.slidesToShow/2),g.options.infinite===!0&&(h>=m&&h<=g.slideCount-1-m?g.$slides.slice(h-m,h+m+1).addClass("slick-active").attr("aria-hidden","false"):(k=g.options.slidesToShow+h,l.slice(k-m+1,k+m+2).addClass("slick-active").attr("aria-hidden","false")),0===h?l.eq(l.length-1-g.options.slidesToShow).addClass("slick-center"):h===g.slideCount-1&&l.eq(g.options.slidesToShow).addClass("slick-center")),g.$slides.eq(h).addClass("slick-center")):h>=0&&h<=g.slideCount-g.options.slidesToShow?g.$slides.slice(h,h+g.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):l.length<=g.options.slidesToShow?l.addClass("slick-active").attr("aria-hidden","false"):(j=g.slideCount%g.options.slidesToShow,k=g.options.infinite===!0?g.options.slidesToShow+h:h,g.options.slidesToShow==g.options.slidesToScroll&&g.slideCount-h<g.options.slidesToShow?l.slice(k-(g.options.slidesToShow-j),k+j).addClass("slick-active").attr("aria-hidden","false"):l.slice(k,k+g.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===g.options.lazyLoad&&g.lazyLoad()
},c.prototype.setupInfinite=function(){var h,g,f,a=this;
if(a.options.fade===!0&&(a.options.centerMode=!1),a.options.infinite===!0&&a.options.fade===!1&&(g=null,a.slideCount>a.options.slidesToShow)){for(f=a.options.centerMode===!0?a.options.slidesToShow+1:a.options.slidesToShow,h=a.slideCount;
h>a.slideCount-f;
h-=1){g=h-1,d(a.$slides[g]).clone(!0).attr("id","").attr("data-slick-index",g-a.slideCount).prependTo(a.$slideTrack).addClass("slick-cloned")
}for(h=0;
f>h;
h+=1){g=h,d(a.$slides[g]).clone(!0).attr("id","").attr("data-slick-index",g+a.slideCount).appendTo(a.$slideTrack).addClass("slick-cloned")
}a.$slideTrack.find(".slick-cloned").find("[id]").each(function(){d(this).attr("id","")
})
}},c.prototype.interrupt=function(f){var e=this;
f||e.autoPlay(),e.interrupted=f
},c.prototype.selectHandler=function(a){var h=this,g=d(a.target).is(".slick-slide")?d(a.target):d(a.target).parents(".slick-slide"),f=parseInt(g.attr("data-slick-index"));
return f||(f=0),h.slideCount<=h.options.slidesToShow?(h.setSlideClasses(f),void h.asNavFor(f)):void h.slideHandler(f)
},c.prototype.slideHandler=function(u,t,s){var r,p,o,n,k,m=null,l=this;
return t=t||!1,l.animating===!0&&l.options.waitForAnimate===!0||l.options.fade===!0&&l.currentSlide===u||l.slideCount<=l.options.slidesToShow?void 0:(t===!1&&l.asNavFor(u),r=u,m=l.getLeft(r),n=l.getLeft(l.currentSlide),l.currentLeft=null===l.swipeLeft?n:l.swipeLeft,l.options.infinite===!1&&l.options.centerMode===!1&&(0>u||u>l.getDotCount()*l.options.slidesToScroll)?void (l.options.fade===!1&&(r=l.currentSlide,s!==!0?l.animateSlide(n,function(){l.postSlide(r)
}):l.postSlide(r))):l.options.infinite===!1&&l.options.centerMode===!0&&(0>u||u>l.slideCount-l.options.slidesToScroll)?void (l.options.fade===!1&&(r=l.currentSlide,s!==!0?l.animateSlide(n,function(){l.postSlide(r)
}):l.postSlide(r))):(l.options.autoplay&&clearInterval(l.autoPlayTimer),p=0>r?l.slideCount%l.options.slidesToScroll!==0?l.slideCount-l.slideCount%l.options.slidesToScroll:l.slideCount+r:r>=l.slideCount?l.slideCount%l.options.slidesToScroll!==0?0:r-l.slideCount:r,l.animating=!0,l.$slider.trigger("beforeChange",[l,l.currentSlide,p]),o=l.currentSlide,l.currentSlide=p,l.setSlideClasses(l.currentSlide),l.options.asNavFor&&(k=l.getNavTarget(),k=k.slick("getSlick"),k.slideCount<=k.options.slidesToShow&&k.setSlideClasses(l.currentSlide)),l.updateDots(),l.updateArrows(),l.options.fade===!0?(s!==!0?(l.fadeSlideOut(o),l.fadeSlide(p,function(){l.postSlide(p)
})):l.postSlide(p),void l.animateHeight()):void (s!==!0?l.animateSlide(m,function(){l.postSlide(p)
}):l.postSlide(p))))
},c.prototype.startLoad=function(){var b=this;
b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow.hide(),b.$nextArrow.hide()),b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&b.$dots.hide(),b.$slider.addClass("slick-loading")
},c.prototype.swipeDirection=function(){var g,f,k,j,h=this;
return g=h.touchObject.startX-h.touchObject.curX,f=h.touchObject.startY-h.touchObject.curY,k=Math.atan2(f,g),j=Math.round(180*k/Math.PI),0>j&&(j=360-Math.abs(j)),45>=j&&j>=0?h.options.rtl===!1?"left":"right":360>=j&&j>=315?h.options.rtl===!1?"left":"right":j>=135&&225>=j?h.options.rtl===!1?"right":"left":h.options.verticalSwiping===!0?j>=35&&135>=j?"down":"up":"vertical"
},c.prototype.swipeEnd=function(f){var h,g,e=this;
if(e.dragging=!1,e.interrupted=!1,e.shouldClick=e.touchObject.swipeLength>10?!1:!0,void 0===e.touchObject.curX){return !1
}if(e.touchObject.edgeHit===!0&&e.$slider.trigger("edge",[e,e.swipeDirection()]),e.touchObject.swipeLength>=e.touchObject.minSwipe){switch(g=e.swipeDirection()){case"left":case"down":h=e.options.swipeToSlide?e.checkNavigable(e.currentSlide+e.getSlideCount()):e.currentSlide+e.getSlideCount(),e.currentDirection=0;
break;
case"right":case"up":h=e.options.swipeToSlide?e.checkNavigable(e.currentSlide-e.getSlideCount()):e.currentSlide-e.getSlideCount(),e.currentDirection=1
}"vertical"!=g&&(e.slideHandler(h),e.touchObject={},e.$slider.trigger("swipe",[e,g]))
}else{e.touchObject.startX!==e.touchObject.curX&&(e.slideHandler(e.currentSlide),e.touchObject={})
}},c.prototype.swipeHandler=function(f){var e=this;
if(!(e.options.swipe===!1||"ontouchend" in document&&e.options.swipe===!1||e.options.draggable===!1&&-1!==f.type.indexOf("mouse"))){switch(e.touchObject.fingerCount=f.originalEvent&&void 0!==f.originalEvent.touches?f.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,e.options.verticalSwiping===!0&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),f.data.action){case"start":e.swipeStart(f);
break;
case"move":e.swipeMove(f);
break;
case"end":e.swipeEnd(f)
}}},c.prototype.swipeMove=function(k){var p,o,n,m,l,j=this;
return l=void 0!==k.originalEvent?k.originalEvent.touches:null,!j.dragging||l&&1!==l.length?!1:(p=j.getLeft(j.currentSlide),j.touchObject.curX=void 0!==l?l[0].pageX:k.clientX,j.touchObject.curY=void 0!==l?l[0].pageY:k.clientY,j.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(j.touchObject.curX-j.touchObject.startX,2))),j.options.verticalSwiping===!0&&(j.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(j.touchObject.curY-j.touchObject.startY,2)))),o=j.swipeDirection(),"vertical"!==o?(void 0!==k.originalEvent&&j.touchObject.swipeLength>4&&k.preventDefault(),m=(j.options.rtl===!1?1:-1)*(j.touchObject.curX>j.touchObject.startX?1:-1),j.options.verticalSwiping===!0&&(m=j.touchObject.curY>j.touchObject.startY?1:-1),n=j.touchObject.swipeLength,j.touchObject.edgeHit=!1,j.options.infinite===!1&&(0===j.currentSlide&&"right"===o||j.currentSlide>=j.getDotCount()&&"left"===o)&&(n=j.touchObject.swipeLength*j.options.edgeFriction,j.touchObject.edgeHit=!0),j.options.vertical===!1?j.swipeLeft=p+n*m:j.swipeLeft=p+n*(j.$list.height()/j.listWidth)*m,j.options.verticalSwiping===!0&&(j.swipeLeft=p+n*m),j.options.fade===!0||j.options.touchMove===!1?!1:j.animating===!0?(j.swipeLeft=null,!1):void j.setCSS(j.swipeLeft)):void 0)
},c.prototype.swipeStart=function(f){var g,e=this;
return e.interrupted=!0,1!==e.touchObject.fingerCount||e.slideCount<=e.options.slidesToShow?(e.touchObject={},!1):(void 0!==f.originalEvent&&void 0!==f.originalEvent.touches&&(g=f.originalEvent.touches[0]),e.touchObject.startX=e.touchObject.curX=void 0!==g?g.pageX:f.clientX,e.touchObject.startY=e.touchObject.curY=void 0!==g?g.pageY:f.clientY,void (e.dragging=!0))
},c.prototype.unfilterSlides=c.prototype.slickUnfilter=function(){var b=this;
null!==b.$slidesCache&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.appendTo(b.$slideTrack),b.reinit())
},c.prototype.unload=function(){var a=this;
d(".slick-cloned",a.$slider).remove(),a.$dots&&a.$dots.remove(),a.$prevArrow&&a.htmlExpr.test(a.options.prevArrow)&&a.$prevArrow.remove(),a.$nextArrow&&a.htmlExpr.test(a.options.nextArrow)&&a.$nextArrow.remove(),a.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")
},c.prototype.unslick=function(f){var e=this;
e.$slider.trigger("unslick",[e,f]),e.destroy()
},c.prototype.updateArrows=function(){var e,f=this;
e=Math.floor(f.options.slidesToShow/2),f.options.arrows===!0&&f.slideCount>f.options.slidesToShow&&!f.options.infinite&&(f.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),f.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===f.currentSlide?(f.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),f.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):f.currentSlide>=f.slideCount-f.options.slidesToShow&&f.options.centerMode===!1?(f.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),f.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):f.currentSlide>=f.slideCount-1&&f.options.centerMode===!0&&(f.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),f.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))
},c.prototype.updateDots=function(){var b=this;
null!==b.$dots&&(b.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),b.$dots.find("li").eq(Math.floor(b.currentSlide/b.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))
},c.prototype.visibility=function(){var b=this;
b.options.autoplay&&(document[b.hidden]?b.interrupted=!0:b.interrupted=!1)
},d.fn.slick=function(){var j,h,b=this,m=arguments[0],l=Array.prototype.slice.call(arguments,1),k=b.length;
for(j=0;
k>j;
j++){if("object"==typeof m||"undefined"==typeof m?b[j].slick=new c(b[j],m):h=b[j].slick[m].apply(b[j].slick,l),"undefined"!=typeof h){return h
}}return b
}
});
if(!String.prototype.includes){String.prototype.includes=function(a,b){if(typeof b!=="number"){b=0
}if(b+a.length>this.length){return false
}else{return this.indexOf(a,b)!==-1
}}
}if(typeof window.Xilinx==="undefined"){window.Xilinx={}
}function BootstrapResize(){var a=this;
a.xssm=[];
a.smmd=[];
a.mdlg=[];
a.lgmd=[];
a.mdsm=[];
a.smxs=[];
a.anyany=[];
a.windowWidths={sm:768,md:992,lg:1200};
a.oldSize="xs";
a.oldWidth=$(window).width();
if($(window).width()>=a.windowWidths.sm){a.oldSize="sm"
}if($(window).width()>=a.windowWidths.md){a.oldSize="md"
}if($(window).width()>=a.windowWidths.lg){a.oldSize="lg"
}$(window).resize(function(){var e=$(window).width();
var c="xs";
var b=(e<a.oldWidth)?true:false;
if(e>=a.windowWidths.sm){c="sm"
}if(e>=a.windowWidths.md){c="md"
}if(e>=a.windowWidths.lg){c="lg"
}if(a.oldSize===c){return
}else{function g(){for(var h=0;
h<a[a.oldSize+c].length;
h++){a[a.oldSize+c][h]()
}for(var h=0;
h<a.anyany.length;
h++){a.anyany[h]()
}}function d(){if(b){if(a.oldSize==="lg"){c="md"
}if(a.oldSize==="md"){c="sm"
}if(a.oldSize==="sm"){c="xs"
}}else{if(a.oldSize==="xs"){c="sm"
}if(a.oldSize==="sm"){c="md"
}if(a.oldSize==="md"){c="lg"
}}g();
a.oldSize=c;
a.oldWidth=e;
if(!f(a.oldSize)){d()
}}function f(j){var h=$(window).width();
if(j==="xs"){if(h<a.windowWidths.sm){return true
}}if(j==="sm"){if(h>=a.windowWidths.sm&&h<a.windowWidths.md){return true
}}if(j==="md"){if(h>=a.windowWidths.md&&h<a.windowWidths.lg){return true
}}if(j==="lg"){if(h>=a.windowWidths.lg){return true
}}return false
}if(a[a.oldSize+c]){g();
a.oldSize=c;
a.oldWidth=e
}else{d()
}}})
}BootstrapResize.prototype.watch=function(d,c,b){var a=this;
if(!d||!c||typeof b!=="function"){return
}if(Array.isArray(a[d+c])){a[d+c].push(b)
}};
BootstrapResize.prototype.getSize=function(){var b=$(window).width();
var a={sm:768,md:992,lg:1200};
size="xs";
if(b>=a.sm){size="sm"
}if(b>=a.md){size="md"
}if(b>=a.lg){size="lg"
}return{size:size,width:b}
};
window.Xilinx.bootstrapResize=new BootstrapResize();
if(!Array.isArray){Array.isArray=function(a){return Object.prototype.toString.call(a)==="[object Array]"
}
}(function(a){a.xilinxProfileAjax=function(c){var b=this;
var d=a(document).find('meta[name="Language"]').attr("content");
if(typeof c.data==="undefined"){c.data={}
}c.data.language=d;
a.ajax(c)
}
})(jQuery);
if(typeof window.Xilinx==="undefined"){window.Xilinx={}
}window.Xilinx.secondsToTime=function(e){var g={},f,a,b,d,h,c;
b=Math.floor(e/(60*60));
if(b<10){b="0"+b.toString()
}else{b=b.toString()
}f=e%(60*60);
d=Math.floor(f/60);
if(d<10){d="0"+d.toString()
}else{d=d.toString()
}a=f%60;
h=Math.ceil(a);
if(h<10){h="0"+h.toString()
}else{h=h.toString()
}g={h:b,m:d,s:h};
return g
};
window.Xilinx.millisecondsToTime=function(a){return window.Xilinx.secondsToTime(a/1000)
};
window.Xilinx.timeString=function(a){var b=a.m+":"+a.s;
if(a.h!="00"){b=a.h+":"+b
}return b
};
window.Xilinx.formatDateOutput=function(b){if(typeof b==="string"){if(!b){return""
}var d=b.match(/(\d+)/g);
b=new Date(d[2],d[0]-1,d[1])
}var c="";
var a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
c+=a[b.getMonth()]+" ";
c+=(b.getDate()<10)?"0"+b.getDate():b.getDate();
c+=", ";
c+=b.getFullYear();
return c
};
if(typeof window.Xilinx==="undefined"){window.Xilinx={}
}window.Xilinx.getURLParameter=function(a){return decodeURIComponent((new RegExp("[?|&]"+a+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[,""])[1].replace(/\+/g,"%20"))||null
};
$.widget("xilinx.xilinxLoader",{_create:function(){var a=this;
a.element.append('<div class="loader-spinner"><span class="fa fa-spinner fa-pulse fa-fw margin-bottom"></span><span class="sr-only">Loading...</span></div>')
}});
$(document).ready(function(){if($('[data-component="loader"]').length>0){$('[data-component="loader"]').each(function(){$(this).xilinxLoader()
})
}});
var filterDropdownTemplate=['<div class="col-md-6">','<div class="btn-group xilinx-filter-dropdown checkboxes">','<button data-toggle="dropdown" class="btn btn-dark">',"{{dropdown}}",'<span class="fa fa-chevron-down"></span>',"</button>",'<div class="dropdown-menu">',"{{#each filters}}","{{#if this.label}}","<h4>{{this.label}}</h4>","{{/if}}","<ul>","{{#each this.filters}}","<li>","<label>",'<input type="checkbox" name="{{../../type}}" value="{{this.filter}}"/>',"<span>{{this.filter}}</span>","</label>","</li>","{{/each}}","</ul>","{{/each}}","{{#if buttons}}",'<button data-function="apply">{{apply}}</button>','<button data-function="cancel">{{cancel}}</button>',"{{/if}}","</div>","</div>","</div>"].join("\n");
if(typeof window.Xilinx==="undefined"){window.Xilinx={}
}if(typeof window.Xilinx.templates==="undefined"){window.Xilinx.templates={}
}window.Xilinx.templates.xilinxMultiFilterDropdown=filterDropdownTemplate;
$.widget("xilinx.filterDropdown",{options:{rawItems:false,callback:false,preSelectParam:null,buttons:false,type:"postType",dropdown:"Filter by",apply:"Apply",cancel:"Cancel",categories:[]},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.categories=a.options.categories;
a.filters=[];
a.posts=[];
a.selectedFilters=[];
a.template=Handlebars.compile(filterDropdownTemplate);
if(!a.options.rawItems||!a.options.callback||typeof a.options.callback!=="function"){console.log("Error: Misconfigured Filter Dropdown Widget");
return false
}a._buildFilterFromItems();
a._insertButton(a._preparePreSelect(a._buildButton()));
var b=a._filterItems();
a.options.callback(a.selectedFilters,b);
a.element.on("click",".dropdown-menu",function(c){c.stopPropagation()
});
a.element.on("hide.bs.dropdown",function(){a._preserveState()
});
a.element.on("click",'button[data-function="apply"]',function(){a._saveState();
var c=a._filterItems();
a.options.callback(a.selectedFilters,c);
a.element.click()
});
a.element.on("click",'button[data-function="cancel"]',function(){a.element.click()
})
},_buildFilterFromItems:function(){var m=this;
var a=[];
for(var f=0;
f<m.options.rawItems.length;
f++){var l=m.options.rawItems[f];
var h={categories:[],filters:[],post:l};
for(var e=0;
e<m.options.categories.length;
e++){var c=m.options.categories[e].name.trim();
h.categories.push(c);
if(l[c]){l[c]=l[c].split(",");
for(var d=0;
d<l[c].length;
d++){var b=l[c][d].trim();
var g={category:c,filter:b};
if(a.indexOf(b)===-1){a.push(b);
m.filters.push(g)
}h.filters.push(g)
}}}m.posts.push(h)
}},_filterItems:function(){var d=this;
var a=[];
var c=d._getSelectedFilters();
if(d.selectedFilters.length===0){return d.posts
}for(var g=0;
g<d.posts.length;
g++){var h=d.posts[g];
var f=false;
for(var e=0;
e<c.length;
e++){for(var b=0;
b<h.filters.length;
b++){if(h.filters[b].filter===c[e]){f=true
}}}if(f){a.push(h)
}}return a
},_buildButton:function(){var b=this;
function a(j,h){if(j.filter<h.filter){return -1
}if(j.filter>h.filter){return 1
}return 0
}b.filters=b.filters.sort(a);
var g=[];
for(var d=0;
d<b.categories.length;
d++){var e=[];
for(var c=0;
c<b.filters.length;
c++){if(b.filters[c].category===b.categories[d].name){e.push(b.filters[c])
}}g.push({name:b.categories[d].name,label:b.categories[d].label,filters:e})
}var f=b.template({dropdown:b.options.dropdown,apply:b.options.apply,cancel:b.options.cancel,filters:g,buttons:b.options.buttons,type:b.options.type});
return $(f)
},_preparePreSelect:function(d){var h=this;
if(h.options.preSelectParam){var j=window.Xilinx.getURLParameter(h.options.preSelectParam);
if(j){var g=[];
var b=j.split(",");
for(var c=0;
c<b.length;
c++){var f=b[c].split(":");
var a=f[0];
var e=f[1];
d.find('input[name="'+a+'"][value="'+e+'"]').click()
}}}return d
},_insertButton:function(b){var a=this;
a.element.append(b)
},_getSelectedFilters:function(){var a=this;
a.selectedFilters=[];
a.element.find('input[type="checkbox"]:checked').each(function(){a.selectedFilters.push($(this).attr("value"))
});
return a.selectedFilters
},_saveState:function(){var a=this;
a.savedState=[];
a.element.find('input[type="checkbox"]:checked').each(function(){a.savedState.push({name:$(this).attr("name"),value:$(this).attr("value")})
})
},_preserveState:function(){var a=this;
a.element.find('input[type="checkbox"]:checked').attr("checked",false);
if(a.savedState&&Array.isArray(a.savedState)){for(var b=0;
b<a.savedState.length;
b++){a.element.find('input[type="checkbox"][name="'+a.savedState[b].name+'"][value="'+a.savedState[b].value+'"]').click()
}}},filter:function(){var a=this;
var b=a._filterItems();
a.options.callback(a.selectedFilters,b)
}});
$.widget("xilinx.carousel4Slides",{options:{},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.element.slick({dots:true,infinite:false,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]})
}});
$(document).ready(function(){if($('[data-component="carousel-4slides"]').length>0){$('[data-component="carousel-4slides"]').each(function(){$(this).carousel4Slides()
})
}});
$.widget("xilinx.coveoVideoInfo",{options:{videoid:null,coveoRestUri:"",coveoAccessToken:"",coveoContext:""},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.videos=[];
a.findAllVideos();
a.getCoveoVideo(function(b,c){if(b){return console.log("COVEO ERROR",b)
}for(var d=0;
d<c.length;
d++){var m=c[d];
var g=m.raw.xlnxvideoid;
var e=m.raw.xlnxvideotitle;
var l=window.Xilinx.timeString(window.Xilinx.millisecondsToTime(m.raw.xlnxvideoduration));
var f=m.raw.xlnxvideoviews;
var j=window.Xilinx.formatDateOutput(new Date(m.raw.xlnxvideocreationdate));
var k=m.raw.xlnxvideoimage;
var h=a.element.find('[data-video-id="'+g+'"]');
h.find('[data-placeholder="image"]').replaceWith('<img src="'+k+'" alt="'+e+'" />');
h.find('[data-insert="time"]').append(l);
h.find('[data-insert="views"]').append(f);
h.find('[data-insert="created"]').append(j)
}})
},findAllVideos:function(){var a=this;
a.element.find('[data-function="coveo-video-info-video-wrapper"]').each(function(){a.videos.push($(this).data("video-id"))
})
},getCoveoVideo:function(e){var c=this;
function b(h,f,g){var j=new Coveo.QueryBuilder();
j.advancedExpression.addFieldExpression("@xlnxdocumentclass","==",["video"]);
j.advancedExpression.add("@xlnxvideoid=("+c.videos.join(", ")+")");
j.fieldsToInclude=["xlnxvideoid","xlnxvideotitle","xlnxvideoduration","xlnxvideoviews","xlnxvideocreationdate","xlnxvideoimage"];
return j
}var a=new Coveo.SearchEndpoint({restUri:c.options.coveoRestUri,accessToken:c.options.coveoAccessToken,queryStringArguments:{context:'{"xlnxsite":"'+c.options.coveoContext+'"}'}});
var d=b().build();
a.search(d).done(function(f){if(f.queryError){e(f.message)
}else{e(null,f.results)
}})
}});
$(document).ready(function(){if($('[data-component="coveo-video-info"]').length>0){$('[data-component="coveo-video-info"]').each(function(){$(this).coveoVideoInfo({coveoRestUri:$(this).data("coveo-rest-uri"),coveoAccessToken:$(this).data("coveo-access-token"),coveoContext:$(this).data("coveo-context")})
})
}});
if(typeof window.Xilinx==="undefined"){window.Xilinx={}
}window.Xilinx.coveoPlusReplace=function(a){return a.replace(/\+/g,"xplusx")
};
window.Xilinx.coveoPlusRestore=function(a){return a.replace(/xplusx/g,"+")
};
window.Xilinx.coveoNoResults=function(b,c){var a=$(b);
Coveo.$$(a).on("deferredQuerySuccess ",function(f,d){if(d.results.totalCount==0){a.find(".CoveoQuerySummary .coveo-query-summary-no-results-string").empty();
a.find(".CoveoQuerySummary .coveo-query-summary-cancel-last").empty();
a.find(".CoveoQuerySummary ul").empty();
a.find(".CoveoQuerySummary .coveo-query-summary-search-tips-info").text(c)
}})
};
window.Xilinx.coveoAndOrQueryBuilder=function(b,d){if(Array.isArray(b.featuredVideos)&&b.featuredVideos.length>0){a(b.featuredVideos,function(f,e){if(f){return d(f)
}c(function(h,g){if(h){return d(h)
}d(null,{featuredVideos:e,videos:g})
})
})
}else{c(function(f,e){if(f){return d(f)
}d(null,{featuredVideos:[],videos:e})
})
}function c(m){var l=b.andTags;
var j=b.orTags;
var f=b.qreTags;
function g(r,o,p){var s=new Coveo.QueryBuilder();
s.advancedExpression.addFieldExpression("@xlnxdocumentclass","==",["video"]);
if(Array.isArray(b.featuredVideos)&&b.featuredVideos.length>0){s.advancedExpression.addFieldNotEqualExpression("@xlnxvideoid",b.featuredVideos.map(String))
}if(l){s.advancedExpression.add(l)
}if(j){s.advancedExpression.add(j)
}if(f){var t=f.split(",");
var n=function(w,u){var v="";
if(w&&u){v="$qre(expression:'"+w+"', modifier:'"+u+"')"
}return v
};
$.each(t,function(v){var u=n(t[v],"100");
s.advancedExpression.add(u)
})
}s.fieldsToInclude=["xlnxvideoid","xlnxvideotitle","xlnxvideoduration","xlnxvideoviews","xlnxvideocreationdate","xlnxvideoimage","xlnxvideodescription","xlnxvideotype","xlnxposttitletag","xlnxpostmegatrend","xlnxmarkets"];
s.numberOfResults=b.numberOfResults;
return s
}if(l.length>0||j.length>0){var h={context:'{"xlnxsite":"'+b.coveoContext+'"}'};
if(b.sortCriteria){h.sortCriteria=b.sortCriteria
}var e=new Coveo.SearchEndpoint({restUri:b.coveoRestUri,accessToken:b.coveoAccessToken,queryStringArguments:h});
var k=g().build();
e.search(k).done(function(n){if(n.queryError){m(n.message)
}else{m(null,n.results)
}})
}else{m(null,[])
}}function a(k,l){var h=this;
function f(o,m,n){var p=new Coveo.QueryBuilder();
p.advancedExpression.addFieldExpression("@xlnxdocumentclass","==",["video"]);
p.advancedExpression.add("@xlnxvideoid=("+k.join(", ")+")");
p.fieldsToInclude=["xlnxvideoid","xlnxvideotitle","xlnxvideoduration","xlnxvideoviews","xlnxvideocreationdate","xlnxvideoimage","xlnxvideodescription","xlnxvideotype","xlnxposttitletag","xlnxpostmegatrend","xlnxmarkets"];
return p
}var g={context:'{"xlnxsite":"'+b.coveoContext+'"}'};
if(b.sortCriteria){g.sortCriteria=b.sortCriteria
}var e=new Coveo.SearchEndpoint({restUri:b.coveoRestUri,accessToken:b.coveoAccessToken,queryStringArguments:g});
if(b.sortCriteria){g.sortCriteria=b.sortCriteria
}var j=f().build();
e.search(j).done(function(m){if(m.queryError){l(m.message)
}else{l(null,m.results)
}})
}};
if(typeof window.Xilinx==="undefined"){window.Xilinx={}
}if(typeof window.Xilinx.templates==="undefined"){window.Xilinx.templates={}
}window.Xilinx.templates.videoGrid=["{{#if showFilters}}",'<div class="row">','<div data-function="filter-placeholder"></div>',"</div>","{{/if}}",'<div class="row">','<div class="col-xs-12">','<div class="container-fluid grid-container grid-padding-narrow">','<div class="row" data-function="main-grid-container"></div>',"</div>","</div>","</div>"].join("\n");
window.Xilinx.templates.videoGridItem=['<div class="video-grid-item hidden col-xs-12 col-sm-6 col-md-4 col-lg-3">','<a class="disableHover" href="{{video.link}}">',"<figure>",'<img src="{{video.imagePath}}" />',"<figcaption>",'<span class="title">{{video.title}}</span>','<span class="meta">{{video.length}}</span>','<span class="meta"><span class="fa fa-eye" aria-hidden="true"></span>{{video.views}}</span>','<span class="meta">{{video.created}}</span>',"</figcaption>","</figure>","</a>","</div>"].join("\n");
$.widget("xilinx.coveoVideoGrid",{options:{numberOfVideosOnInit:24,showFilters:true,noResultsLabel:"No Results To Show",categoryVideo:"Video Type",orTags:"",andTags:"",coveoRestUri:"",coveoAccessToken:"",coveoContext:""},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.filteredVideos=[];
a.filters=[];
a.videoTypesArray=[];
a.templates={grid:Handlebars.compile(window.Xilinx.templates.videoGrid),videoItem:Handlebars.compile(window.Xilinx.templates.videoGridItem)};
a.getCoveoVideos(function(c,b){if(c){return console.log("err",c)
}var d=a._processVideoOjects(b);
var e=function(f,g){a.filteredVideos=g;
a.filterByNewest()
};
a.element.find(".main-grid").empty().append(a.templates.grid({showFilters:a.options.showFilters}));
a.element.find('[data-function="filter-placeholder"]').filterDropdown({rawItems:d.videos,callback:e,type:"videotype",dropdown:a.options.dropdownLabel,apply:a.options.applyLabel,cancel:a.options.cancelLabel,preSelectParam:"resultsTablePreSelect",buttons:true,categories:[{name:"Video Type",label:a.options.categoryVideo}]})
});
a.element.on("click",".filter-by-views",function(){a.filterByViews()
});
a.element.on("click",".filter-by-newest",function(){a.filterByNewest()
});
a.setUpViewMore()
},_processVideoOjects:function(j){var k=this;
var e={videos:[]};
var d=[];
var g=[];
for(var f=0;
f<j.videos.length;
f++){var b=j.videos[f];
var c=window.Xilinx.millisecondsToTime(b.raw.xlnxvideoduration);
if(b.raw.xlnxvideocreationdate){var h=Array.isArray(b.raw.xlnxvideotype)?b.raw.xlnxvideotype.join():"";
var a={title:b.raw.xlnxvideotitle,imagePath:b.raw.xlnxvideoimage,length:window.Xilinx.timeString(c),link:b.uri,views:b.raw.xlnxvideoviews,created:window.Xilinx.formatDateOutput(new Date(b.raw.xlnxvideocreationdate)),createdDate:new Date(b.raw.xlnxvideocreationdate),"Video Type":h};
e.videos.push(a)
}}return e
},_generateVideoGrid:function(){var a=this;
a.element.find('[data-function="main-grid-container"]').empty();
if(a.filteredVideos.length>0){for(var b=0;
b<a.filteredVideos.length;
b++){a.element.find('[data-function="main-grid-container"]').append(a.templates.videoItem({video:a.filteredVideos[b].post}))
}}else{a.element.find('[data-function="main-grid-container"]').append('<span class="col-xs-12">'+a.options.noResultsLabel+"</span>")
}a.showMoreVideos()
},filterByViews:function(){var b=this;
var a=function c(e,d){return -(e.post.views-d.post.views)
};
b.filteredVideos.sort(a);
b._generateVideoGrid()
},filterByNewest:function(){var b=this;
var a=function c(e,d){if(e.post.createdDate.getTime()<d.post.createdDate.getTime()){return 1
}if(e.post.createdDate.getTime()>d.post.createdDate.getTime()){return -1
}return 0
};
b.filteredVideos.sort(a);
b._generateVideoGrid()
},showMoreVideos:function(b){var a=this;
a.element.find(".main-grid .video-grid-item.hidden").each(function(c){if(c<a.options.numberOfVideosOnInit){$(this).removeClass("hidden")
}});
a.updateUpViewMore()
},setUpViewMore:function(){var a=this;
a.element.on("click",".view-more-videos",function(){a.showMoreVideos()
})
},updateUpViewMore:function(){var a=this;
if(a.element.find(".main-grid .video-grid-item.hidden").length>0){a.element.find('[data-function="view-more"]').show()
}else{a.element.find('[data-function="view-more"]').hide()
}},getCoveoVideos:function(c){var a=this;
var b={andTags:a.options.andTags,orTags:a.options.orTags,numberOfResults:500,coveoRestUri:a.options.coveoRestUri,coveoAccessToken:a.options.coveoAccessToken,coveoContext:a.options.coveoContext,sortCriteria:"@xlnxvideocreationdate descending"};
window.Xilinx.coveoAndOrQueryBuilder(b,c)
}});
$(document).ready(function(){if($('[data-component="coveo-video-grid"]').length>0){$('[data-component="coveo-video-grid"]').each(function(){$(this).coveoVideoGrid({coveoRestUri:$(this).data("coveo-rest-uri"),coveoAccessToken:$(this).data("coveo-access-token"),coveoContext:$(this).data("coveo-context"),andTags:$(this).data("and-tags"),orTags:$(this).data("or-tags"),noResultsLabel:$(this).data("no-results-label"),numberOfVideosOnInit:$(this).data("number-of-videos-on-init"),dropdownLabel:$(this).data("dropdown-label"),applyLabel:$(this).data("apply-label"),cancelLabel:$(this).data("cancel-label"),categoryVideo:$(this).data("category-video")})
})
}});
$.widget("xilinx.coveoVideoList",{options:{orTags:"",andTags:"",qreTags:"",coveoRestUri:"",coveoAccessToken:"",coveoContext:"",videoExclusion:false},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.templates={grid:Handlebars.compile(window.Xilinx.templates.videoList)};
Handlebars.registerPartial("videoListItem",window.Xilinx.templates.videoListItem);
a.getCoveoVideos(function(g,b){if(g){return console.log("err",g)
}var d=[];
for(var c=0;
c<b.videos.length;
c++){var f=b.videos[c];
var e={title:f.raw.xlnxvideotitle,imagePath:f.raw.xlnxvideoimage,link:f.uri,description:f.raw.xlnxvideodescription};
d.push(e)
}a.videos=d;
a.generateList()
});
a.element.on("click",".view-more-videos",function(){a.showHide(5)
})
},generateList:function(){var a=this;
a.element.find('[data-component="loader"]').remove();
if(a.videos&&a.videos.length>0){a.element.prepend(a.templates.grid({relatedVideosLabel:a.options.relatedVideosLabel,videos:a.videos.slice(0,14)}));
a.showHide(5)
}},showHide:function(b){var a=this;
a.element.find(".video-list-item.hidden").each(function(c){if(c<b){$(this).removeClass("hidden")
}});
if(a.element.find(".video-list-item.hidden").length===0){a.element.find(".view-more-videos").hide()
}else{a.element.find(".view-more-videos").show()
}},getCoveoVideos:function(c){var a=this;
var b={andTags:a.options.andTags,orTags:a.options.orTags,numberOfResults:15,coveoRestUri:a.options.coveoRestUri,coveoAccessToken:a.options.coveoAccessToken,coveoContext:a.options.coveoContext,featuredVideos:[a.options.videoExclusion],sortCriteria:"qre",qreTags:a.options.qreTags};
window.Xilinx.coveoAndOrQueryBuilder(b,c)
}});
$(document).ready(function(){if($('[data-component="coveo-video-list"]').length>0){$('[data-component="coveo-video-list"]').each(function(){$(this).coveoVideoList({orTags:$(this).data("or-tags"),andTags:$(this).data("and-tags"),qreTags:$(this).data("qre-tags"),relatedVideosLabel:$(this).data("related-videos-label"),coveoRestUri:$(this).data("coveo-rest-uri"),coveoAccessToken:$(this).data("coveo-access-token"),coveoContext:$(this).data("coveo-context"),videoExclusion:$(this).data("video-exclusion")})
})
}});
if(typeof window.Xilinx==="undefined"){window.Xilinx={}
}if(typeof window.Xilinx.templates==="undefined"){window.Xilinx.templates={}
}window.Xilinx.templates.videoList=["<h2>{{relatedVideosLabel}}</h2>",'<div class="videoListWrappper">','<div class="container-fluid">','<div class="row">',"{{#each videos}}","{{> videoListItem}}","{{/each}}","</div>","</div>","</div>"].join("\n");
window.Xilinx.templates.videoListItem=['<div class="video-list-item col-xs-12 hidden">','<a href="{{link}}">',"<figure>",'<div class="row">','<div class="col-sm-4 col-md-3">','<img src="{{imagePath}}" />',"</div>",'<div class="col-sm-8 col-md-9">',"<figcaption>","<h4>{{title}}</h4>","{{description}}","</figcaption>","</div>","</div>","</figure>","</a>","</div>"].join("\n");
$.widget("xilinx.xilinxPressList",{init:function(b){var a=this
},_create:function(){var a=this;
a.SHOWMORENUMBER=7;
a.element.on("click",".view-more-videos",function(){a.showMore()
});
a.showHideViewMore()
},showHideViewMore:function(){var b=this;
var a=$(".press-preview .press-item.hidden").length;
if(a>0){$(".view-more-videos").css("display","block")
}else{$(".view-more-videos").css("display","none")
}},showMore:function(){var a=this;
var c=$(".press-preview .press-item.hidden");
for(var b=0;
b<a.SHOWMORENUMBER;
b++){c.eq(b).removeClass("hidden")
}a.showHideViewMore()
}});
$(document).ready(function(){if($('[data-component="xilinx-press-list"]').length>0){$('[data-component="xilinx-press-list"]').each(function(){$(this).xilinxPressList()
})
}});
$.widget("xilinx.xilinxOfficeInfoLanding",{options:{regionsLabel:"Regions",countriesLabel:"Countries",localsLabel:"Localities",categoriesLabel:"Categories",allLabel:"All"},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.regions=[];
a.countries={};
a.locals={};
a.categories=[];
a.templates={dropdown:Handlebars.compile(window.Xilinx.templates.xilinxOfficeInfoDropdown),emptyDropdown:Handlebars.compile(window.Xilinx.templates.xilinxOfficeInfoEmptyDropdown),multiFilterDropdown:Handlebars.compile(window.Xilinx.templates.xilinxMultiFilterDropdown)};
a._buildJSONs();
a._insertDropdowns();
a._insertCategoriesDropdown();
a._showHide();
a.element.on("click",'[data-function="regions-dropdown"] li > button',function(){a._insertDropdowns($(this).data("value"));
a._showHide()
});
a.element.on("click",'[data-function="countries-dropdown"] li > button',function(){var b=a.element.find('[data-function="regions-dropdown"] li > button.selected').data("value");
a._insertDropdowns(b,$(this).data("value"));
a._showHide()
});
a.element.on("click",'[data-function="locals-dropdown"] li > button',function(){a.element.find('[data-function="locals-dropdown"] li > button.selected').removeClass("selected");
$(this).addClass("selected");
a._showHide()
});
a.preSelect()
},_buildJSONs:function(){var b=this;
var a=[];
var c={};
b.element.find('[data-function="office-info-wrapper"]').each(function(){var g=$(this).data("function-category");
var d=$(this).data("function-json");
for(var f=0;
f<d.length;
f++){var h=d[f].region;
var j=d[f].country;
var e=d[f].local;
if(!c[h]){c[h]={};
b.regions.push(h);
b.countries[h]=[];
b.locals[h]={}
}if(!c[h][j]){c[h][j]=[];
b.countries[h].push(j);
b.locals[h][j]=[]
}if(c[h][j].indexOf(e.toString())===-1&&e!="All"){c[h][j].push(e.toString());
b.locals[h][j].push(e)
}}if(a.indexOf(g)===-1){a.push(g);
b.categories.push({filter:g})
}})
},_insertDropdowns:function(f,g){var b=this;
function a(j,h){if(j[0]<h[0]){return -1
}if(j[0]>h[0]){return 1
}return 0
}var d=b.templates.dropdown({title:(f&&f!="all")?f:b.options.regionsLabel,values:b.regions.sort(a),allLabel:b.options.allLabel});
b.element.find('[data-function="regions-dropdown"]').empty().append(d);
b.element.find('[data-function="regions-dropdown"] li button[data-value="'+f+'"]').addClass("selected");
if(!f||f==="all"){var c=b.templates.emptyDropdown({title:b.options.countriesLabel})
}else{var c=b.templates.dropdown({title:(g&&g!="all")?g:b.options.countriesLabel,values:b.countries[f].sort(a),allLabel:b.options.allLabel})
}b.element.find('[data-function="countries-dropdown"]').empty().append(c);
b.element.find('[data-function="countries-dropdown"] li button[data-value="'+g+'"]').addClass("selected");
if(!g||g==="all"){var e=b.templates.emptyDropdown({title:b.options.localsLabel})
}else{var e=b.templates.dropdown({title:b.options.localsLabel,values:b.locals[f][g].sort(a),allLabel:b.options.allLabel})
}b.element.find('[data-function="locals-dropdown"]').empty().append(e)
},_insertCategoriesDropdown:function(){var b=this;
var a=b.templates.multiFilterDropdown({dropdown:b.options.categoriesLabel,apply:"Apply",cancel:"Cancel",filters:[{filters:b.categories}],buttons:true,type:"categories"});
b.element.find('[data-function="categories-dropdown"]').empty().append(a);
b.element.on("click",'[data-function="categories-dropdown"] .dropdown-menu',function(c){c.stopPropagation()
});
b.element.find('[data-function="categories-dropdown"] [data-function="apply"]').click(function(){b.element.find('[data-function="categories-dropdown"] button').dropdown("toggle");
b._showHide()
});
b.element.on("click",'[data-function="categories-dropdown"] [data-function="cancel"]',function(){b.element.find('[data-function="categories-dropdown"] button').dropdown("toggle")
})
},_showHide:function(){var b=this;
var d=b.element.find('[data-function="regions-dropdown"] li button.selected').data("value");
var e=b.element.find('[data-function="countries-dropdown"] li button.selected').data("value");
var c=b.element.find('[data-function="locals-dropdown"] li button.selected').data("value");
b.element.find('[data-function="office-info-wrapper"]').addClass("hidden");
if(!d||d==="all"){b.element.find('[data-function="office-info-wrapper"]').removeClass("hidden")
}else{b.element.find('[data-function="office-info-wrapper"]').each(function(){var f=$(this).data("function-region");
if(f.indexOf(d)>-1){$(this).removeClass("hidden")
}});
if(e&&e!=="all"){b.element.find('[data-function="office-info-wrapper"]:not(.hidden)').each(function(){var f=$(this).data("function-country");
if(f.indexOf(e)===-1){$(this).addClass("hidden")
}})
}if(c&&c!=="all"){b.element.find('[data-function="locals-dropdown"]').find("button#nav-dropdown").html(c+'<span class="fa fa-chevron-down"></span>');
b.element.find('[data-function="office-info-wrapper"]:not(.hidden)').each(function(){var f=$(this).data("function-local");
if(f.indexOf(c)===-1){$(this).addClass("hidden")
}})
}}var a=[];
b.element.find('[data-function="categories-dropdown"] input[type="checkbox"]:checked').each(function(){a.push($(this).val())
});
if(a.length>0){b.element.find('[data-function="office-info-wrapper"]:not(.hidden)').each(function(){var h=$(this).data("function-category");
var g=true;
for(var f=0;
f<a.length;
f++){if(a[f]===h){g=false
}}if(g){$(this).addClass("hidden")
}})
}},preSelect:function(){var b=this;
var a=window.Xilinx.getURLParameter("categoryPreSelect");
if(a){var d=a.split(",");
for(var c=0;
c<d.length;
c++){b.element.find('[data-function="categories-dropdown"]').find('input[type="checkbox"][value="'+d[c]+'"]').click()
}b.element.find('[data-function="categories-dropdown"]').find('button[data-function="apply"]').click()
}}});
$(document).ready(function(){if($('[data-component="office-info-landing"]').length>0){$('[data-component="office-info-landing"]').each(function(){$(this).xilinxOfficeInfoLanding({regionsLabel:$(this).data("regions-label"),countriesLabel:$(this).data("countries-label"),localsLabel:$(this).data("locals-label"),categoriesLabel:$(this).data("categories-label"),allLabel:$(this).data("all-label")})
})
}});
if(typeof window.Xilinx==="undefined"){window.Xilinx={}
}if(typeof window.Xilinx.templates==="undefined"){window.Xilinx.templates={}
}window.Xilinx.templates.xilinxOfficeInfoDropdown=['<div data-component="xilinx-dropdown" class="dropdown">','<button id="nav-dropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">',"{{title}}",'<span class="fa fa-chevron-down"></span>',"</button>",'<ul class="dropdown-menu" aria-labelledby="nav-dropdown">',"{{#each values}}","<li>",'<button data-value="{{this}}">','<span class="fa fa-check"></span>',"{{this}}","</button>","</li>","{{/each}}","<li>",'<button data-value="all">','<span class="fa fa-check"></span>',"{{allLabel}}","</button>","</li>","</ul>","</div>"].join("\n");
window.Xilinx.templates.xilinxOfficeInfoEmptyDropdown=['<div data-component="xilinx-dropdown" class="dropdown disabled">','<button id="nav-dropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" disabled>',"{{title}}","</button>","</div>"].join("\n");
$(document).ready(function(){$("input, textarea").placeholder();
$("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup",function(a){if(a.which>0||a.type==="mousedown"||a.type==="mousewheel"){$("html, body").stop()
}});
$('[data-toggle="tooltip"]').tooltip();
$('a[data-toggle="tab"]').on("shown.bs.tab",function(a){if($(this).data("function")==="browse-answer-record-anchor"){return
}$($(a.target).attr("href")).find(".slick-slider").each(function(){$(this).slick("setPosition")
});
scrollTabs($(a.target))
});
$(".panel").on("shown.bs.collapse",function(){$(this).find(".slick-slider").each(function(){$(this).slick("setPosition")
})
});
$(document).on("click",'a[href^="#"]',function(b){if($(this).data("toggle")==="modal"||$(this).data("toggle")==="tab"||$(this).data("toggle")==="collapse"||$(this).data("toggle")==="xilinx-video-collapse"||$(this).data("slide")){return
}b.preventDefault();
var a=$(this.hash);
if(a.length===0){a=$('[name="'+this.hash.substring(1)+'"]')
}scroll(a)
})
});
function scrollTabs(a){scroll(a,50)
}function scroll(a,c){if(!c){c=0
}if(a.length>0){var d=$(".container.main-nav").height(),b=20,c=a.offset().top-d-b-c;
$("html,body").stop().animate({scrollTop:c},"slow")
}}function changeCenterDisplay(b,e){var c=b;
var a=document.getElementById(e);
var d;
if(window.XMLHttpRequest){d=new XMLHttpRequest()
}else{d=new ActiveXObject("Microsoft.XMLHTTP")
}d.onreadystatechange=function(){if(d.readyState==4&&d.status==200){a.innerHTML=d.responseText
}};
d.open("GET",c,true);
d.send()
}function expandAndCollapse(b){var a=document.getElementById(b);
if(a.style.display==""){a.style.display="none"
}else{a.style.display=""
}}$.widget("xilinx.xilinxHeader",{init:function(b){var a=this
},_create:function(){var a=this;
a.bindMenuToggles();
a.bindCartToggles();
a.initSignIn();
a.bindSearchToggle();
a.element.find('[data-component="header-search"]').click(function(){$(this).xilinxHeaderSearch("updatePadding")
});
$(document).on("click","body",function(b){if($(b.target).is("header *")){return
}a.element.find('.nav.navbar-nav [data-component="toggle-dropdown"]').xilinxMenuDropdownToggle("close")
})
},initSignIn:function(){var a=Cookies.get("ObSSOCookie");
if(a&&a!="loggedout"){$("header").addClass("signedIn")
}else{$("header").removeClass("signedIn")
}},bindMenuToggles:function(){var a=this;
a.element.find('[data-function="xilinx-mobile-menu"]').click(function(){var b=$("header");
if(b.hasClass("mobile-menu-active")){b.removeClass("mobile-menu-active");
b.find("#xilinx-main-menu").removeClass("in")
}else{b.addClass("mobile-menu-active");
b.find("#xilinx-main-menu").addClass("in")
}a.element.find('[data-component="header-search"]').xilinxHeaderSearch("updatePadding")
})
},bindCartToggles:function(){var a=this;
a.element.find('[data-function="toggle-shopping-cart"]').click(function(){var b=$("header");
b.removeClass("mobile-menu-active");
b.find("#xilinx-main-menu").removeClass("in")
})
},bindSearchToggle:function(){var a=this;
a.element.find('[data-function="search-toggle"]').click(function(){var b=a.element.find(".search-container");
if(b.hasClass("active")){b.removeClass("active")
}else{b.addClass("active")
}})
}});
$(document).ready(function(){$('[data-component="header"]').xilinxHeader()
});
$.widget("xilinx.xilinxHeaderSearch",{init:function(b){var a=this
},_create:function(){var a=this;
a.dropdownSelect=a.element.find(".dropdown-toggle.value");
a.dropdown=a.element.find("ul.dropdown-menu.options");
a.bindDropdown();
window.Xilinx.bootstrapResize.watch("any","any",function(){a.updatePadding()
});
a.element.on("beforeRedirect",function(f,b){b.searchPageUri=a.element.find(".CoveoSearchbox").data("action-link");
var d=$("#coveosearch");
if(d.length>0&&window.location.pathname.indexOf(b.searchPageUri)!==-1){var c=a.element.find(".CoveoOmnibox").coveo("get");
d.coveo("state","q",c.getText());
d.coveo("executeQuery")
}});
a.element.on("afterInitialization",function(c,b){a.dropdown.find("a").click(function(){var e=$(this).parent("li").data("search-hub");
var d=a.element.find(".CoveoAnalytics").coveo("get");
d.handleSearchHubChanged(e)
});
a.activateSelection(null,0,true)
});
a.initilizeHeaderSearchBox()
},bindDropdown:function(){var a=this;
a.dropdown.find("a").click(function(){var b=$(this).parent("li").data("label");
a.activateSelection(b);
a.element.find(".CoveoSearchbox").data("action-link",$(this).parent("li").data("action-link"))
})
},activateSelection:function(e,d,b){var a=this;
var f;
var c;
if(typeof d!=="undefined"){c=a.element.find("[data-label]").eq(d);
f=c.data("label")
}else{c=a.element.find('[data-label="'+e+'"]');
f=c.data("label")
}a.dropdownSelect.data("label",f);
a.dropdownSelect.html(f+'<span class="fa fa-chevron-down"></span>');
a.updatePadding()
},updatePadding:function(){var a=this;
var b=a.dropdownSelect.outerWidth(true)+10;
a.element.find(".CoveoOmnibox").css("padding-left",b)
},initilizeHeaderSearchBox:function(b){var a=this;
Coveo.SearchEndpoint.configureCloudV2Endpoint(a.options.coveoOrgId,a.options.coveoAccessToken);
a.element.coveo("initSearchbox",a.element.find(".CoveoSearchbox").data("action-link"))
}});
$(document).ready(function(){if($('[data-component="header-search"]').length>0){$('[data-component="header-search"]').each(function(){$(this).xilinxHeaderSearch({coveoOrgId:$(this).data("coveo-organization-id"),coveoAccessToken:$(this).data("coveo-access-token")})
})
}});
$(document).ready(function(){$(window).scroll(function(){if($(window).scrollTop()>=80){$(".quickLinks").addClass("show")
}else{$(".quickLinks").removeClass("show")
}});
setTimeout(function(){$(".quickLinks").addClass("loaded")
},500);
$(".quickLinks").find(".backToTop").click(function(a){$("html,body").animate({scrollTop:0},"slow");
a.preventDefault()
});
$(".quickLinks").find("#bookmark").submit(function(a){$("#add-bookmark-url").val(window.location.href)
});
if(Cookies.get("BookmarkChange")==="add"){$(".quickLinks").find("#bookmarkConfirmation").addClass("bookmark-animation");
Cookies.remove("BookmarkChange",{path:"/",domain:".xilinx.com"})
}});
$(document).ready(function(){if($('[data-toggle="dropdown-label"]').length){$('[data-toggle="dropdown-label"]').xilinxDropdownLabel()
}});
(function(a){a.fn.xilinxDropdownLabel=function(){this.filter('[data-toggle="dropdown-label"]').each(function(){var b=a(this).children("button");
a(this).on("click","a",function(){var c=a(this).parent("li");
if(c.data("label").toString().length>0){b.text(c.data("label").toString())
}else{b.text(a(this).text())
}c.addClass("active").siblings("li").removeClass("active")
})
});
return this
}
}(jQuery));
$.widget("xilinx.xilinxMenuDropdownToggle",{init:function(b){var a=this
},_create:function(){var a=this;
a.element.click(function(b){if($(b.target).parents(".dropdown").length){return
}$(this).parent().find('[data-component="toggle-dropdown"]').not($(this)).each(function(){if($(this).data("active")==true){a.close($(this))
}});
if($(this).data("active")==true){a.close()
}else{a.open()
}})
},close:function(b){var a=this;
if(!b){b=a.element
}b.removeClass("active");
b.data("active",false);
b.find(".dropdown").css("height","0px")
},open:function(c){var b=this;
if(!c){c=b.element
}c.addClass("active");
c.data("active",true);
var a=0;
c.find(".dropdown").find("> .row .container, > .row .container-fluid").each(function(){a+=$(this).outerHeight()
});
c.find(".dropdown").css("height",a)
},reset:function(){var b=this;
function a(){var c=0;
b.element.find(".dropdown").find("> .row .container, > .row .container-fluid").each(function(){c+=$(this).outerHeight()
});
b.element.find(".dropdown").css("height",c)
}setTimeout(function(){a()
},250);
a()
}});
$(document).ready(function(){if($('[data-component="toggle-dropdown"]').length>0){$('[data-component="toggle-dropdown"]').each(function(){$(this).xilinxMenuDropdownToggle()
})
}});
$.widget("xilinx.xilinxLogin",{init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
if(a.element.find(".form_error").length){a.element.modal("show")
}a.element.on("shown.bs.modal",function(b){a.element.find("input[name=user]").focus()
})
}});
$(document).ready(function(){if($('[data-component="login"]').length>0){$('[data-component="login"]').each(function(){$(this).xilinxLogin()
})
}});
$(document).ready(function(){if($("ul.moreProds").length){$("ul.moreProds").hide()
}$("li.moreList a").click(function(){$(this).parent("li.moreList").fadeOut("slow").parents("td").children("ul.moreProds").slideDown("slow");
return false
});
$(".lessList").click(function(){$(this).parents("ul").slideUp("slow").siblings("ul").children("li.moreList").fadeIn("slow");
return false
})
});
$(document).ready(function(){var a=/\.(zip|exe|gif|png|jpg|pdf|doc|xls|ppt|mp3|pptx|docx|xlsx|xlsm|dat)$/i;
$(document).on("click","a",function(d){var b=$(this).attr("href");
var c=$(this).text();
if(b){if((b.match(/^https?\:/i))&&(!b.match(document.domain))){$(this).attr("target","_blank")
}else{if(b.match(/^mailto\:/i)){$(this).attr("target","_blank")
}else{if(b.match(a)){$(this).attr("target","_blank")
}}}}})
});
(function(n){h("loading");
var u=D("oms_sid")||"";
var e=0;
var B={ADDING:"adding",DELETING:"deleting"};
var G=767;
var F="Your browser is not supported. Please upgrade to latest browser.";
var A;
var I=document.domain,o="/bin/protected/oms";
if(I.indexOf("test")!==-1||I.indexOf("uat")!==-1||I.indexOf("dev")!==-1){A="https://xilinx-stage.entitlenow.com"
}else{A="https://xilinx.entitlenow.com"
}var s="; path=/; domain=.xilinx.com";
var c={updateCount:function(K){h("update count to "+K);
$("[data-function='toggle-shopping-cart']").attr("data-content",K)
}};
n.omsCart=c;
var J={};
n.orderItems=J;
function E(K,M,O,N,L){this.priceInCents=K;
this.quantity=M;
this.itemId=O;
this.desc=N;
this.marketingPN=L
}function m(){h("load exec");
$.ajax({url:A+"/eCommerce/product/load",data:"oms_sid="+u,dataType:"json",success:function(Q){var R=Q.products;
for(var P=0;
P<R.length;
P++){J[R[P].sku]=new E(R[P].priceInCents,R[P].quantity,R[P].itemId,R[P].desc,R[P].marketingPN)
}c.updateCount(a());
u=Q.sid[0];
var O=new Date(new Date().getTime()+Q.sid[1]*1000);
document.cookie="oms_sid="+u+"; expires="+O.toUTCString()+s;
e=Q.version;
$(".add-to-cart").click(j);
$(document).on("click","[data-function='toggle-shopping-cart']",g)
},error:function(P,Q,O){h("load error, "+Q+", "+O);
d(P,true);
$(".add-to-cart, [data-function='toggle-shopping-cart']").on("click",function(R){alert(F)
})
}});
var L="<div class='modal fade' tabindex='-1' role='dialog' id='shopping-cart-modal'><div class='modal-dialog modal-lg'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'><i class='fa fa-times'/></span></button><span class='fa-stack cart-logo'><i class='fa fa-circle fa-stack-2x'></i><i class='fa fa-shopping-cart fa-stack-1x fa-inverse'></i></span><span class='title'>Shopping Cart</span></div><div class='modal-body'><form id='oms-cart' action='"+o+"' method='get'></form></div></div></div></div>";
$("body").append(L);
var N=n.onresize;
var M=n.innerWidth;
var K=$("#shopping-cart-modal");
n.onresize=function(O){if(N){N()
}if(K.hasClass("in")){if((M>=G&&n.innerWidth<G)||(M<=G&&n.innerWidth>G)){h("switch layout on resize");
K.modal("hide");
K.one("hidden.bs.modal",function(){setTimeout(function(){g()
},500)
})
}}M=n.innerWidth
}
}function w(L,K){$.ajax({url:A+"/eCommerce/product/add",data:"oms_sid="+u+"&version="+e+"&sku="+L,dataType:"json",type:"POST",success:function(M,N){K.removeData(B.ADDING);
if(M.error){return x(M.error)
}J[M.prod.sku]=new E(M.prod.priceInCents,M.prod.quantity,M.prod.itemId,M.prod.desc,M.prod.marketingPN);
e=M.version;
c.updateCount(a());
g()
},error:function(N,O,M){h("add error: "+O+", "+M);
d(N);
K.removeData(B.ADDING)
}})
}function p(M,L,K){$.ajax({url:A+"/eCommerce/product/update",data:"oms_sid="+u+"&version="+e+"&itemId="+J[M].itemId+"&quantity="+L,dataType:"json",type:"POST",success:function(P){K.removeData(B.ADDING);
if(P.error){return x(P.error)
}e=P.version;
J[M].quantity=L;
c.updateCount(a());
var Q=v(L*J[M].priceInCents);
$("#oms-cart-item td[sku='"+M+"'].line-total").html(Q);
var O=0;
for(var N in J){O+=J[N].quantity*J[N].priceInCents
}$("#total").html(v(O));
k(K)
},error:function(O,P,N){h(P+", "+N);
d(O);
k(K);
K.removeData(B.ADDING)
}})
}function y(L,K){h("delete "+L);
if(K.data(B.DELETING)){h("still deleting");
return false
}K.data(B.DELETING,true);
b();
$.ajax({url:A+"/eCommerce/product/delete",data:"oms_sid="+u+"&version="+e+"&itemId="+J[L].itemId,dataType:"json",type:"POST",success:function(M){K.removeData(B.DELETING);
if(M.error){return x(M.error)
}e=M.version;
delete J[L];
$("tr[sku="+L+"]").remove();
var N=a();
c.updateCount(N);
if(N===0){$("#oms-cart-body").html(f);
$("#check-out-now").hide()
}else{$("#total").html(v(H()));
k()
}},error:function(N,O,M){h(O+", "+M);
K.removeData(B.DELETING);
d(N)
}})
}function t(K){h("check version: "+e);
K.prop("disabled",true);
$.ajax({url:A+"/eCommerce/product/version",data:"oms_sid="+u+"&version="+e,dataType:"json",success:function(L,M){if(L.error){K.prop("disabled",false);
return x(L.error)
}$("#oms-cart-total").attr("value",a());
$("#oms-cart").submit()
},error:function(M,N,L){h(N+", "+L);
K.prop("disabled",false);
d(M)
}})
}function j(){var L=$(this);
if(L.data(B.ADDING)){h("still adding");
return false
}L.data(B.ADDING,true);
var M=$.trim(L.attr("sku"));
var K=C(M);
if(K!=null){if(!$("#shopping-cart-modal").hasClass("in")){g()
}$("#oms-cart-item select[sku="+M+"]").val(J[K].quantity+1).trigger("change");
L.removeData(B.ADDING)
}else{w(M,L)
}return false
}var f="<h3>No items in the cart.</h3>";
var r=20;
function g(){var M=$("#shopping-cart-modal");
var L="";
var R="<div id='oms-cart-footer' class='row'><div class='col-md-4 left'><button id='continue-shopping' class='btn'><i class='fa fa-arrow-left'></i>&nbsp; Continue Shopping</button></div>";
if(a()>0){var P="";
var O=0;
for(var Q in J){var N=J[Q];
O+=N.priceInCents*N.quantity;
if(n.innerWidth>G){P+="<tr sku='"+Q+"'><td>"+N.desc+"</td><td>"+N.marketingPN+"</td><td>"+K(N.quantity,Q)+"</td><td>"+v(N.priceInCents)+"</td><td sku='"+Q+"' class='line-total'>"+v(N.priceInCents*N.quantity)+"</td><td><a href='#' class='delete' sku='"+Q+"'><i class='fa fa-trash-o fa-lg'></i></a></td></tr>"
}else{P+="<tr sku='"+Q+"'><td>Product:</td><td>"+N.desc+"</td></tr><tr sku='"+Q+"'><td>Part #:</td><td>"+N.marketingPN+"</td></tr><tr sku='"+Q+"'><td>Unit Price:</td><td>"+v(N.priceInCents)+"</td></tr><tr sku='"+Q+"'><td>Total:</td><td sku='"+Q+"' class='line-total'>"+v(N.priceInCents*N.quantity)+"</td></tr><tr sku='"+Q+"' class='last-line'><td>Quantity:</td><td>"+K(N.quantity,Q)+"</td><td><a href='#' class='delete' sku='"+Q+"'><i class='fa fa-trash-o fa-lg'></i></a></td></tr>"
}}if(n.innerWidth>G){P="<table id='oms-cart-item'><thead><th>Product Name</th><th>Part Number</th><th style='width: 12%;'>Quantity</th><th style='width: 12%;'>Unit Price</th><th>Total</th><th></th></thead><tbody>"+P+"</tbody><tfoot><tr><th colspan='4'>Total:</th><td id='total'>"+v(O)+"</td></tr></tfoot></table>"
}else{P="<table id='oms-cart-item'><tbody>"+P+"</tbody><tfoot><tr><th>Total:</th><td id='total'>"+v(O)+"</td></tr></tfoot></table>"
}L="<div id='oms-cart-body'><div id='oms-cart-alert'></div>"+P+"</div>";
R+="<input type='hidden' name='command' value='ONLINESTORE'></input><div class='col-md-4 col-md-offset-4 right'><button type='submit' id='check-out-now' class='btn'>Checkout &nbsp;<i class='fa fa-arrow-right'></i></button></div></div>"
}else{L="<div id='oms-cart-body'>"+f+"</div>";
R+="</div>"
}$("#oms-cart",M).html(L+R);
M.modal({keyboard:false,backdrop:"static"});
if(a()>0){l()
}$("#continue-shopping").on("click",function(S){S.preventDefault();
$("#shopping-cart-modal").modal("hide")
});
function K(V,U){var T="";
for(var S=1;
S<=r;
S++){T+="<option "+(V===S?"selected":"")+" value='"+S+"'>"+S+"</option>"
}T+="<option value='21'>20+</option>";
return"<select class='form-control' sku='"+U+"'>"+T+"</select>"
}}function l(){var L=$("#oms-cart-item");
var K=$("select",L);
K.on("change",function(M){var O=$(this);
b(O);
var Q=O.attr("sku");
var P=O.val();
var N=parseInt(P);
if(N>=0&&N!==J[Q].quantity&&N<=r){p(Q,N,O)
}else{if(N>r){z();
O.val(J[Q].quantity)
}k(O)
}});
$(".delete",L).on("click",function(M){M.preventDefault();
y($(this).attr("sku"),$(this))
});
$("#check-out-now").click(function(M){h("submitting");
M.preventDefault();
t($(this))
})
}function z(){x("When purchasing by credit card, Xilinx allows a quantity maximum of 20 units per order. Please contact <a href='mailto:buy@xilinx.com'>Customer Service</a> if you have further questions.")
}function k(K){$("#check-out-now").prop("disabled",false);
if(K){K.prop("disabled",false)
}}function b(K){$("#check-out-now").prop("disabled",true);
if(K){K.prop("disabled",true)
}}function h(K){if(n.console){console.log(K)
}}function v(M){var P=M+"";
var Q=P.split("");
var L="",N=0,K=Q.length;
for(var O=K-1;
O>=0;
O--){L=Q[O]+L;
if(O===K-2){L="."+L
}if(O<K-2){if(O!=0&&++N%3===0){L=","+L
}}}return"$"+L
}function d(M,K){if(M.responseJSON){g();
var L=$("#oms-cart-body");
if(a()>0){L=$("#oms-cart-alert")
}L.html("<div class='alert alert-danger' style='border-radius: 0;'>"+M.responseJSON.message+"</div>")
}else{if(K===true){h(F)
}else{alert(F)
}}}function x(L){if(!$("#shopping-cart-modal").is(":visible")){g()
}var K="<div class='alert alert-danger alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close' style='margin-top: 3px;'><span aria-hidden='true'>&times;</span></button><strong>"+L+"</strong></div>";
$("#oms-cart-alert").html(K)
}function C(L){for(var K in J){if(J[K].marketingPN===L||K===L){h("found: "+L);
return K
}}return null
}function a(){var K=0;
for(var L in J){K+=J[L].quantity
}return K
}function H(){var K=0;
for(var L in J){K+=J[L].priceInCents*J[L].quantity
}return K
}function D(L){var M,K,O,N=document.cookie.split(";");
for(M=0;
M<N.length;
M++){K=N[M].substr(0,N[M].indexOf("="));
O=N[M].substr(N[M].indexOf("=")+1);
K=K.replace(/^\s+|\s+$/g,"");
if(K==L){return unescape(O)
}}}$(function(){h("init");
m()
})
})(window);
$.widget("xilinx.imagePicker",{options:{},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.element.on("click",'button[data-function="change-image"]',function(){a._changeImage($(this))
});
var b=a.element.find(".image-selector.slider ul li").length;
if(b>3){a.element.find(".image-selector.slider ul").slick({infinite:true,slidesToShow:3,slidesToScroll:1})
}},_changeImage:function(c){var a=this;
var d=c.data("large-src");
a.element.find(".image-selector ul li").removeClass("active");
var e=c.parent("li").data("id");
a.element.find('.image-selector ul li[data-id="'+e+'"]').addClass("active");
var b=$('<img src="'+d+'" data-function="main-image">');
a.element.find('[data-function="main-image"]').replaceWith(b)
}});
$(document).ready(function(){if($('[data-component="image-preview"]').length>0){$('[data-component="image-preview"]').each(function(){$(this).imagePicker()
})
}});
if(typeof window.Xilinx==="undefined"){window.Xilinx={}
}if(typeof window.Xilinx.templates==="undefined"){window.Xilinx.templates={}
}window.Xilinx.templates.videoTagCarouselSlide=["<div>",'<div class="container-fluid grid-padding-narrow">','<div class="row">',"{{#if featuredVideo}}",'<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 featured-video">',"{{> videoTagCarouselVideo featuredVideo}}","</div>","{{/if}}","{{#each videoGroup}}",'<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 video-groups">',"{{#each videos}}","{{> videoTagCarouselVideo}}","{{/each}}","</div>","{{/each}}","</div>","</div>","</div>"].join("\n");
window.Xilinx.templates.videoTagCarouselVideo=['<a class="video-item" href="{{link}}">',"<figure>","{{#if imagePath}}",'<img src="{{imagePath}}" alt="{{title}}" />',"{{else}}",'<img data-function="image" alt="{{title}}" />',"{{/if}}","<figcaption>",'<p class="title">{{title}}</p>',"{{#if length}}",'<p class="length">{{length}}</p>',"{{else}}",'<p class="length" data-function="length"></p>',"{{/if}}","{{#if views}}",'<p class="views"><span class="fa fa-eye"></span>{{views}}</p>',"{{else}}",'<p class="views" data-function="views"><span class="fa fa-eye"></span></p>',"{{/if}}","</figcaption>","</figure>","{{#if description}}",'<div class="overlay">','<p class="title">{{title}}</p>',"{{#if length}}",'<p class="length">{{length}}</p>',"{{else}}",'<p class="length" data-function="length"></p>',"{{/if}}","{{#if views}}",'<p class="views"><span class="fa fa-eye"></span>{{views}}</p>',"{{else}}",'<p class="views" data-function="views"><span class="fa fa-eye"></span></p>',"{{/if}}","<hr>",'<p class="description">{{description}}</p>','<div class="view-more-wrapper">',"<button>{{watchNowLabel}}</button>","</div>","</div>","{{/if}}","</a>"].join("\n");
$.widget("xilinx.coveoVideoTagCarousel",{options:{watchNowLabel:"Watch Now",queryUrlFeaturedVideo:null,orTags:"",andTags:"",coveoRestUri:"",coveoAccessToken:"",coveoContext:""},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.element.slick({infinite:false,autoplay:false,dots:false,prevArrow:'<button type="button" class="slick-prev">Prev</button>',responsive:[{breakpoint:767,settings:{dots:false}},{breakpoint:991,settings:{dots:true}},{breakpoint:992,settings:{dots:false}}]});
a.template=Handlebars.compile(window.Xilinx.templates.videoTagCarouselSlide);
Handlebars.registerPartial("videoTagCarouselVideo",window.Xilinx.templates.videoTagCarouselVideo);
a.getCoveoVideos(function(c,b){if(c){return console.log("err",c)
}a.videos=a._processVideoOjects(b);
a.generateSlider()
})
},generateSlider:function(){var b=this;
var d=b.videos.slice(0,15);
while(d.length>0){var e={featuredVideo:d.splice(0,1)[0],videoGroup:[{videos:a(2)},{videos:a(2)}]};
for(var c=0;
c<e.videoGroup.length;
c++){if(e.videoGroup[c].videos.length===0){delete e.videoGroup[c]
}}b.element.slick("slickAdd",b.template(e))
}function a(h){var g=d.splice(0,h);
for(var f=0;
f<g.length;
f++){delete g[f].description
}return g
}},_processVideoOjects:function(d){var a=this;
var c=[];
for(var b=0;
b<d.featuredVideos.length;
b++){var f=d.featuredVideos[b];
var h=f.raw.xlnxvideoid;
var g=window.Xilinx.millisecondsToTime(f.raw.xlnxvideoduration);
var e={title:f.raw.xlnxvideotitle,imagePath:f.raw.xlnxvideoimage,length:window.Xilinx.timeString(g),link:f.uri,views:f.raw.xlnxvideoviews,description:f.raw.xlnxvideodescription,watchNowLabel:a.options.watchNowLabel};
c.push(e)
}for(var b=0;
b<d.videos.length;
b++){var f=d.videos[b];
var h=f.raw.xlnxvideoid;
var g=window.Xilinx.millisecondsToTime(f.raw.xlnxvideoduration);
var e={title:f.raw.xlnxvideotitle,imagePath:f.raw.xlnxvideoimage,length:window.Xilinx.timeString(g),link:f.uri,views:f.raw.xlnxvideoviews,description:f.raw.xlnxvideodescription,watchNowLabel:a.options.watchNowLabel};
c.push(e)
}return c
},getCoveoVideos:function(c){var a=this;
var b={andTags:a.options.andTags,orTags:a.options.orTags,numberOfResults:14,coveoRestUri:a.options.coveoRestUri,coveoAccessToken:a.options.coveoAccessToken,coveoContext:a.options.coveoContext,sortCriteria:"@xlnxvideocreationdate descending",featuredVideos:[a.options.featuredVideoId]};
window.Xilinx.coveoAndOrQueryBuilder(b,c)
}});
$(document).ready(function(){if($('[data-component="coveo-video-tag-carousel"]').length>0){$('[data-component="coveo-video-tag-carousel"]').each(function(){$(this).coveoVideoTagCarousel({andTags:$(this).data("and-tags"),orTags:$(this).data("or-tags"),featuredVideoId:$(this).data("featured-video-id"),featuredVideoTitle:$(this).data("featured-title"),featuredVideoDescription:$(this).data("featured-description"),featuredVideoLink:$(this).data("featured-link"),featuredVideoLinkLabel:$(this).data("featured-link-label"),watchNowLabel:$(this).data("watch-not-label"),coveoRestUri:$(this).data("coveo-rest-uri"),coveoAccessToken:$(this).data("coveo-access-token"),coveoContext:$(this).data("coveo-context")})
})
}});
$.widget("xilinx.xilinxVideoPromoCarousel",{options:{},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.carouselPause=false;
a.carouselHover=false;
a.carousel=a.element.children('[data-function="slider-container"]');
a.carousel.on("init",function(){a.element.find(".slick-cloned").each(function(){$(this).find(".video-wrapper").remove()
})
});
a.carousel.slick({autoplay:true,pauseOnHover:false,autoplaySpeed:4000,arrows:false,adaptiveHeight:true});
a.carousel.on("video:play",".video-wrapper",function(){a.carouselPause=true;
a.carousel.slick("slickPause")
});
a.carousel.on("video:pause",".video-wrapper",function(){a.carouselPause=false;
if(!a.carouselHover){a.carousel.slick("slickPlay")
}});
a.carousel.on("afterChange",function(){a.carousel.find('[data-component="video"]').each(function(){if($(this).xilinxHTML5Video("isPlaying")){$(this).xilinxHTML5Video("pause")
}})
});
a.carousel.hover(function(){a.carouselHover=true;
a.carousel.slick("slickPause")
},function(){a.carouselHover=false;
if(!a.carouselPause){a.carousel.slick("slickPlay")
}});
a.element.find('[data-function="next"]').click(function(){a.carousel.slick("slickNext")
});
a.element.find('[data-function="prev"]').click(function(){a.carousel.slick("slickPrev")
})
}});
$(document).ready(function(){if($('[data-component="video-promo-carousel"]').length>0){$('[data-component="video-promo-carousel"]').each(function(){$(this).xilinxVideoPromoCarousel()
})
}});
$.widget("xilinx.xilinxtabs",{options:{},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.element.find('a[data-toggle="tab"]').click(function(d){if($(this).data("anchor")&&$(this).data("anchor").toString().length>0){location.hash=$(this).data("anchor")
}});
if(location.hash){var c=location.hash.substring(1);
if(c.indexOf('"')>-1){return
}var b=a.element.find('a[data-toggle="tab"][data-anchor="'+c+'"]');
if(b.length>0){if(b.parent("li").hasClass("active")){scrollTabs(b)
}else{b.tab("show")
}}}$(document).click(function(e){if(e.target.hash){var f=e.target.hash.substring(1);
if(f.indexOf('"')>-1){return
}var d=$('a[data-toggle="tab"][data-anchor="'+f+'"]');
if(d.length>0){d.tab("show")
}}})
}});
$(document).ready(function(){if($('[data-component="tabs"]').length>0){$('[data-component="tabs"]').each(function(){$(this).xilinxtabs()
})
}});
$(document).ready(function(){if($(".table-sortable").length){$(".table-sortable > table").each(function(){fixTable($(this).clone(),$(this),function(a){a.tablesorter()
})
})
}});
function fixTable(d,a,e){if(!d.children("thead").length){var c=d.prepend("<thead></thead>");
c=c.children("thead")[0];
var b=$("> tbody > tr:first",d).appendTo(c);
$("> td",b).each(function(){$(this).replaceWith("<th>"+$(this).text()+"</th>")
});
a.replaceWith(d);
return e(d)
}return e(a)
}$.widget("xilinx.xilinxMobileResponsiveTable",{options:{},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
var b=this.element.find("table");
var c=b.clone();
var d=[];
c.children("tbody, thead").children("tr").children("th").each(function(){d.push($(this).text())
});
if(d.length){c.children("tbody").children("tr").each(function(){$(this).children("td").each(function(e){$(this).prepend('<span class="mobile-header">'+d[e]+"</span>")
})
});
c.addClass("tableHeadersForEachItem");
b.replaceWith(c)
}}});
$(document).ready(function(){if($('[data-component="mobile-responsive-table"]').length>0){$('[data-component="mobile-responsive-table"]').each(function(){$(this).xilinxMobileResponsiveTable()
})
}});
$.widget("xilinx.searchResultsSeeAllVersions",{options:{coveoOrgId:"",coveoAccessToken:"",coveoContext:"",noResultsText:"No results found."},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
Coveo.SearchEndpoint.configureCloudV2Endpoint(a.options.coveoOrgId,a.options.coveoAccessToken,undefined,{queryStringArguments:{context:'{"xlnxsite":"'+a.options.coveoContext+'"}'}});
a.element.coveo("init");
window.Xilinx.coveoNoResults(a.element,a.options.noResultsText);
a.element.on("doneBuildingQuery",function(g,c){var b=window.Xilinx.getURLParameter("xlnxproducttypes");
var h=window.Xilinx.getURLParameter("xlnxipcoresname");
var f=window.Xilinx.getURLParameter("xlnxdocumentid");
c.queryBuilder.advancedExpression.add('(@xlnxproducttypes=="'+b+'")');
if(b=="IP Cores"){h=window.Xilinx.coveoPlusReplace(h);
c.queryBuilder.advancedExpression.add(d("xlnxipcoresname",h))
}else{if(b=="Design Tools"||b=="Boards and Kits"){c.queryBuilder.advancedExpression.add("(@xlnxdocumentid=="+f+")")
}}function d(k,j){var e="";
var l=j.split(",");
e+="(";
l=l.map(function(n){var m="@"+k+"=="+n;
return m
});
e+=l.join(" AND ");
e+=")";
return e
}c.queryBuilder.numberOfResults=500
})
}});
$(document).ready(function(){if($('[data-component="search-results-see-all-versions"]').length>0){$('[data-component="search-results-see-all-versions"]').each(function(){$(this).searchResultsSeeAllVersions({coveoOrgId:$(this).data("coveo-organization-id"),coveoAccessToken:$(this).data("coveo-access-token"),coveoContext:$(this).data("coveo-context"),noResultsText:$(this).data("no-results-text")})
})
}});
window.templateHelpers={dateFormatter:function(a){return window.Xilinx.formatDateOutput(new Date(a))
},linkTarget:function(a){if(a.filetype==="pdf"){return'target="_blank"'
}return""
},titleFormatter:function(c,b){var a="";
if(b.xlnxdocumentid.length>0){a+=b.xlnxdocumentid;
a+=" - "
}a+=c;
return a
},isCurrentVersion:function(b){var c=window.xilinxCache("currentVersion","translation-search");
var a="(&nbsp"+c+"&nbsp)";
if(b=="false"||!b){return a
}else{return""
}},generateTitle:function(b,d,c){var a="";
if(b&&b.indexOf("/member/forms/download")>-1){a+='<span class="fa fa-lock"></span>&nbsp'
}if(c){a+=c;
a+=" - "
}a+=d;
return a
},generateAssociatedDocs:function(c){var b=[];
var d=[];
if(c){b=c.split(";");
for(var a=0;
a<b.length;
a++){d.push({filename:window.templateHelpers.utils.getFilename(b[a]),fileURL:b[a]})
}}return d
},generateSeeAllWindow:function(){return"#"
},generateNewAlert:function(e,d,h,a){var c="";
if(d){var g=(1000*60*60*24*14);
var f=new Date(d).getTime();
var b=new Date().getTime();
if((b-f)<g){c+='<span class="new-updated">';
if(a=="true"){c+=window.xilinxCache("newMessage","translation-search")
}else{c+=window.xilinxCache("updatedMessage","translation-search")
}c+="</span>"
}}return c
},utils:{getFilename:function(a){if(a.indexOf("filename=")>-1){return a.substring(a.lastIndexOf("filename=")+9)
}return a.substring(a.lastIndexOf("/")+1)
}},videoDurationFormatter:function(a){var b=Math.floor(a/60000);
var c=((a%60000)/1000).toFixed(0);
return b+":"+(c<10?"0":"")+c
},videoDescriptionFormatter:function(b,a){if(b){if(b.length>300){b=b.substring(0,300)+"..."
}}else{b=a
}return b
},generateSeeAllVersionsLink:function(b,e,d,a){var f=a;
var c="";
c+="?xlnxproducttypes=";
if(b&&b.indexOf("IP Cores")!=-1){c+=encodeURIComponent("IP Cores")
}else{if(b&&b.indexOf("Design Tools")!=-1){c+=encodeURIComponent("Design Tools")
}else{if(b&&b.indexOf("Boards and Kits")!=-1){c+=encodeURIComponent("Boards and Kits")
}}}c+="&";
if(b&&b.indexOf("IP Cores")!=-1){c+="xlnxipcoresname=";
c+=encodeURIComponent(e)
}else{c+="xlnxdocumentid=";
c+=encodeURIComponent(d)
}return f+c
},priceFormatter:function(b,a){if(b){b="$"+b.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
}else{if("Discontinued"==a){b=window.xilinxCache("discontinued","translation-search")
}else{b=window.xilinxCache("contactVendor","translation-search")
}}return b
},generateFileVersionNumber:function(a){if(a){a="("+window.xilinxCache("fileVersion","translation-search")+" "+a+")"
}return a
},formatLocation:function(a){return a.split(";").join(", ")
}};
window.xilinxCacheObjects={};
window.xilinxCache=function(c,a){c=c.toLowerCase();
if(window.xilinxCacheObjects[c]){return window.xilinxCacheObjects[c]
}else{var b=$('[data-component="translation"][data-translation-element="'+a+'"]').first().data(c);
window.xilinxCacheObjects[c]=b;
return b
}};
$.widget("xilinx.searchResults",{options:{preSelectTags:"{}",noResultsText:"No results found."},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.isFirstQuery=true;
a.initilizeCoveoSearch()
},initilizeCoveoSearch:function(g){var m=this;
var l=JSON.stringify(m.options.preSelectTags);
var b=Coveo.HashUtils.getValue("q",Coveo.HashUtils.getHash());
var k=window.Xilinx.getURLParameter("searchKeywords");
window.Xilinx.coveoNoResults(m.element,m.options.noResultsText);
Coveo.$$(m.element).on("buildingQuery",function(p,o){var r=m.element.find(".CoveoOmnibox");
if(r.length==0){if(b){o.queryBuilder.expression.add(b)
}else{if(k){o.queryBuilder.expression.add(k)
}}}if(m.options.documentclass){o.queryBuilder.advancedExpression.addFieldExpression("@xlnxdocumentclass","==",m.options.documentclass.split(","))
}if(m.options.requiredFields){o.queryBuilder.advancedExpression.add(m.options.requiredFields)
}if(m.options.prodTypeTags){o.queryBuilder.advancedExpression.add(m.options.prodTypeTags)
}if(m.options.andTags){o.queryBuilder.advancedExpression.add(m.options.andTags)
}if(m.options.orTags){o.queryBuilder.advancedExpression.add(m.options.orTags)
}});
var n=window.Xilinx.getURLParameter("resultsTablePreSelect");
var h=JSON.parse(l);
if(n){var j=[];
var c=n.split(",");
for(var d=0;
d<c.length;
d++){var f=c[d].split(":");
var a=f[0];
var e=f[1];
if(j.indexOf(a)==-1){if(h.hasOwnProperty(a)){delete h[a]
}j.push(a)
}if(e!=="SeeAll"){if(h.hasOwnProperty(a)){h[a].push(e)
}else{h[a]=[e]
}}}}m.element.on("afterInitialization",function(t,r){if(Object.keys(h).length>0){for(var s in h){if(h.hasOwnProperty(s)){var v=h[s];
var u=m.element.find('.CoveoFacet[data-id="'+s+'"]');
if(u.length>0){var o=u.coveo("get");
o.selectMultipleValues(v)
}}}}var p=m.element.find(".CoveoSort");
if(p.length>1){if(!b&&!k){p.eq(1).coveo("get").select()
}else{p.eq(0).coveo("get").select()
}}});
xhook.after(function(p,o){if(p.url.includes("coveo.com")){o.text=window.Xilinx.coveoPlusRestore(o.text)
}});
m.element.on("doneBuildingQuery",function(s,o){for(var p=0;
p<o.queryBuilder.advancedExpression.parts.length;
p++){o.queryBuilder.advancedExpression.parts[p]=window.Xilinx.coveoPlusReplace(o.queryBuilder.advancedExpression.parts[p])
}if(m.isFirstQuery){m.isFirstQuery=false;
if(b){var t=m.element.find(".CoveoOmnibox");
if(t.length>0){var r=t.coveo("get");
r.setText(b);
o.queryBuilder.expression.add(b)
}}else{if(k){var t=m.element.find(".CoveoOmnibox");
if(t.length>0){var r=t.coveo("get");
r.setText(k);
o.queryBuilder.expression.add(k)
}}}}});
Coveo.SearchEndpoint.configureCloudV2Endpoint(m.options.coveoOrgId,m.options.coveoAccessToken);
m.element.coveo("init")
}});
$(document).ready(function(){if($('[data-component="search-results"]').length>0){$('[data-component="search-results"]').each(function(){$(this).searchResults({coveoOrgId:$(this).data("coveo-organization-id"),coveoAccessToken:$(this).data("coveo-access-token"),andTags:$(this).data("and-tags"),orTags:$(this).data("or-tags"),preSelectTags:$(this).data("preselect-tags"),prodTypeTags:$(this).data("prodtype-tags"),documentclass:$(this).data("document-class"),requiredFields:$(this).data("required-fields"),noResultsText:$(this).data("no-results-text")})
})
}});
$.widget("xilinx.searchBox",{options:{},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.bindDropdown();
a.element.on("beforeRedirect",function(c,b){b.searchPageUri=a.element.find(".CoveoSearchbox").data("action-link")
});
a.initilizeCoveoSearchBox()
},bindDropdown:function(){var a=this;
a.element.find(".dropdown").find("a").click(function(){var b=$(this).parent("li");
a.element.find(".CoveoSearchbox").data("action-link",b.data("action-link"))
})
},initilizeCoveoSearchBox:function(b){var a=this;
Coveo.SearchEndpoint.configureCloudV2Endpoint(a.options.coveoOrgId,a.options.coveoAccessToken);
a.element.coveo("initSearchbox",a.element.find(".CoveoSearchbox").data("action-link"))
}});
$(document).ready(function(){if($('[data-component="search-box"]').length>0){$('[data-component="search-box"]').each(function(){$(this).searchBox({coveoOrgId:$(this).data("coveo-organization-id"),coveoAccessToken:$(this).data("coveo-access-token")})
})
}});
if(typeof window.Xilinx==="undefined"){window.Xilinx={}
}if(typeof window.Xilinx.templates==="undefined"){window.Xilinx.templates={}
}window.Xilinx.templates.hacksterPost=['<div class="col-xs-12 col-sm-6 col-md-4 post-col hackster-post" data-markets="{{markets}}" data-applications="{{applications}}" data-products="{{products}}">','<div class="post-wrapper">','<a href="{{url}}" class="disableHover post {{content_type}}">',"<figure>",'<img src="{{cover_image_url}}" alt="{{name}}">',"<figcaption>",'<span class="type">{{content_type}}</span>',"<h4>{{name}}</h4>","{{#if singleAuthor}}","{{#each team.members}}",'<span class="author">{{this.user.name}}</span>',"{{/each}}","{{/if}}","{{#if multipleAuthors}}",'<div class="dropdown">','<button id="multipleAuthors" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">',"{{multipleAuthorLabel}}",'<span class="fa fa-angle-up"></span>',"</button>",'<ul class="dropdown-menu" aria-labelledby="multipleAuthors">',"{{#each team.members}}","<li>",'<img src="{{this.user.avatar_url}}" alt="{{this.user.name}}"/>','<span class="author">{{this.user.name}}</span>',"</li>","{{/each}}","</ul>","</div>","{{/if}}",'<div class="infos">','<div class="likes">','<span class="fa fa-thumbs-o-up"></span>{{stats.respects}}',"</div>",'<div class="views">','<span class="fa fa-eye"></span>{{stats.views}}',"</div>",'<div class="comments">','<span class="fa fa-comment-o"></span>{{stats.comments}}',"</div>",'<div class="difficulty">','<img src="/etc/designs/site/imgs/hackster/{{difficulty}}.svg" alt="{{difficulty}}" height="18px" width="18px"/>',"</div>","</div>","</figcaption>",'<div class="overlay">',"<p>{{one_liner}}</p>","</div>","</figure>","</a>","</div>","</div>"].join("\n");
window.Xilinx.templates.hacksterPostDropdown=['<div class="btn-group xilinx-filter-dropdown checkboxes">','<button data-toggle="dropdown" class="btn btn-dark" data-original-value="{{dropdown}}" data-function="dropdown-label">',"{{dropdown}}",'<span class="fa fa-chevron-down"></span>',"</button>",'<div class="dropdown-menu">',"{{#each filters}}","{{#if this.label}}","<h4>{{this.label}}</h4>","{{/if}}","<ul>","{{#each this.filters}}","<li>","<label>",'<span data-function="filter" data-value="{{this.filter}}" data-count="0">{{#if this.filterLabel}} {{this.filterLabel}} {{else}} {{this.filter}} {{/if}}</span>',"</label>","</li>","{{/each}}",'<li class="active">',"<label>",'<span data-function="filter" data-value="all">{{../allLabel}}</span>',"</label>","</li>","</ul>","{{/each}}","</div>","</div>"].join("\n");
$.widget("xilinx.projectGallery",{options:{baseUrl:"https://api.hackster.io/v2/xilinx",labelMultipleAuthor:"Multiple Authors",labelMarkets:"Markets",labelApplications:"Applications",labelProducts:"Products",labelContributor:"Contributor",labelCommunity:"Community",labelAll:"All"},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.posts=[];
a.filteredPosts=[];
a.postsForFilters=[];
a.filterMarkets=[];
a.filterApplications=[];
a.filterProducts=[];
a.filters=[{property:"markets",array:a.filterMarkets,title:a.options.labelMarkets,allLabel:a.options.labelAll},{property:"applications",array:a.filterApplications,title:a.options.labelApplications,allLabel:a.options.labelAll},{property:"products",array:a.filterProducts,title:a.options.labelProducts,allLabel:a.options.labelAll}];
a.postTemplate=Handlebars.compile(window.Xilinx.templates.hacksterPost);
a.multiFilterDropdown=Handlebars.compile(window.Xilinx.templates.hacksterPostDropdown);
a.getPosts();
a.element.on("click",'[data-function="view-more"]',function(){a.insertPosts(true)
})
},doAjax:function(b){var a=this;
$.ajax({url:a.options.baseUrl,data:{sort:"recent"},type:"get",success:function(c){var d=a.processPosts(c.records);
a.posts=a.posts.concat(d);
b(null)
},error:function(c){b(c)
},cache:false})
},getPosts:function(){var a=this;
a.doAjax(function(b){if(b){return console.log("AJAX Error")
}a.filter();
a.doFilterButtons();
a.preSelect()
})
},processPosts:function(b){var a=this;
b=b.map(function(g){var e=[],d=false,c=false,h=false;
if(!g.team||!g.team.members){d=true
}else{if(g.team&&g.team.members&&g.team.members.length===1){c=true
}else{if(g.team&&g.team.members&&g.team.members.length>1){h=true
}}}g.singleAuthor=c;
g.multipleAuthors=h;
g.multipleAuthorLabel=a.options.labelMultipleAuthor;
g.stats.originalViews=g.stats.views;
g.stats.views=g.stats.views>999?(g.stats.views/1000).toFixed(1)+"k":g.stats.views;
g.products=[];
if(g.things&&Array.isArray(g.things.hardware)&&g.things.hardware.length){for(var f=0;
f<g.things.hardware.length;
f++){g.products.push(g.things.hardware[f].name)
}}a.postsForFilters.push(g);
return g
});
return b
},orderFilterArray:function(a){function b(d,c){if(d.filter<c.filter){return -1
}if(d.filter>c.filter){return 1
}return 0
}return a.sort(b)
},doFilterButtons:function(){var p=this;
var n=[];
for(var d=0;
d<p.postsForFilters.length;
d++){var m=p.postsForFilters[d];
for(var b=0;
b<p.filters.length;
b++){var l=p.filters[b].property;
var g=p.filters[b].array;
if(Array.isArray(m[l])&&m[l].length){for(var a=0;
a<m[l].length;
a++){var h=m[l][a];
if(n.indexOf(h)===-1){n.push(h);
g.push({filter:h})
}}}}}for(var d=0;
d<p.filters.length;
d++){var c=p.filters[d];
if(c.order&&c.order.length){var f=new Array(c.array.length);
for(var b=0;
b<c.array.length;
b++){var e=c.order.indexOf(c.array[b].filter);
f[e]=c.array[b]
}c.array=f
}var r=p.multiFilterDropdown({dropdown:c.title,filters:[{filters:p.orderFilterArray(c.array)}],buttons:false,type:c.property,allLabel:p.options.labelAll});
p.element.find('[data-function="filter-placeholder-'+c.property+'"]').empty().append(r);
p.element.on("click",'[data-function="filter-placeholder-'+c.property+'"] li',function(){var s=$(this).find("span").data("value");
var k=$(this).parents(".xilinx-filter-dropdown").find('[data-function="dropdown-label"]');
var j=s==="all"?k.data("original-value"):s;
j+='<span class="fa fa-chevron-down"></span>';
k.html(j);
$(this).siblings().removeClass("active");
$(this).addClass("active");
p.filter()
})
}var o=p.multiFilterDropdown({dropdown:p.options.labelContributor,filters:[{filters:[{filter:"Xilinx",filterLabel:"Xilinx"},{filter:p.options.labelCommunity,filterLabel:p.options.labelCommunity}]}],buttons:false,type:"sort",allLabel:p.options.labelAll});
p.element.find('[data-function="filter-placeholder-contributor"]').append(o);
p.element.on("click",'[data-function="filter-placeholder-contributor"] li',function(){var s=$(this).find("span").text();
var k=$(this).parents(".xilinx-filter-dropdown").find('[data-function="dropdown-label"]');
var j=s.indexOf("All")>-1?k.data("original-value"):s;
j+='<span class="fa fa-chevron-down"></span>';
k.html(j);
$(this).siblings().removeClass("active");
$(this).addClass("active");
p.filter()
})
},filter:function(){var b=this;
var a=[];
b.filteredPosts=b.posts.slice();
for(var d=0;
d<b.filters.length;
d++){var c=b.filters[d];
var e=[];
b.element.find('[data-function="filter-placeholder-'+c.property+'"] li.active').each(function(){var g=$(this).find('[data-function="filter"]').data("value");
if(g!=="all"){for(var f=0;
f<b.filteredPosts.length;
f++){if(b.filteredPosts[f][c.property].indexOf(g)>-1){e.push(b.filteredPosts[f])
}}b.filteredPosts=e.slice()
}})
}b.filterBy()
},filterBy:function(){var c=this;
var a=[];
var b=c.element.find('[data-function="filter-placeholder-contributor"] li.active').find('[data-function="filter"]').data("value");
if(b&&b!=="all"){for(var e=0;
e<c.filteredPosts.length;
e++){var d=c.filteredPosts[e];
if(b==="Xilinx"){if(d.collection_certified){a.push(d)
}}else{if(b==="Community"){if(!d.collection_certified){a.push(d)
}}}}c.filteredPosts=a.slice()
}c.countFilters(c.filteredPosts);
c.insertPosts()
},insertPosts:function(g){var b=this;
b.element.find('[data-function="view-more"]').hide();
if(!g){b.element.find(".post-container").empty()
}var c=0;
for(var e=0;
b.filteredPosts.length>0&&e<15;
e++){var a=b.filteredPosts.shift();
var d=$(b.postTemplate(a));
c++;
if(c>15){c=1
}var f="delay-"+c;
d.addClass(f);
b.element.find(".post-container").append(d)
}setTimeout(function(){b.element.find(".post-container > .post-col:not(.show)").each(function(){$(this).addClass("show")
})
},100);
if(b.filteredPosts.length>0){b.element.find('[data-function="view-more"]').show()
}},countFilters:function(o){var p=this;
var a=true;
if(p.element.find(".xilinx-filter-dropdown.filtered").length){a=false
}p.element.find(".xilinx-filter-dropdown li").removeClass("empty");
p.element.find(".xilinx-filter-dropdown li span").data("count",0);
p.element.find(".xilinx-filter-dropdown li span").attr("data-count",0);
var n={applications:[],markets:[],products:[],contributor:[]};
var l=0;
var m=0;
for(var e=0;
e<o.length;
e++){var g=o[e].markets;
var c=o[e].applications;
var h=o[e].products;
var b=o[e].collection_certified;
for(var d=0;
d<g.length;
d++){var k=p.element.find('[data-function="filter-placeholder-markets"] li span[data-value="'+g[d]+'"]');
var f=parseInt(k.data("count"),10)+1;
k.data("count",f);
k.attr("data-count",f)
}for(var d=0;
d<c.length;
d++){var k=p.element.find('[data-function="filter-placeholder-applications"] li span[data-value="'+c[d]+'"]');
var f=parseInt(k.data("count"),10)+1;
k.data("count",f);
k.attr("data-count",f)
}for(var d=0;
d<h.length;
d++){var k=p.element.find('[data-function="filter-placeholder-products"] li span[data-value="'+h[d]+'"]');
var f=parseInt(k.data("count"),10)+1;
k.data("count",f);
k.attr("data-count",f)
}if(b){l++
}else{m++
}}p.element.find('[data-function="filter-placeholder-contributor"] li span[data-value="Xilinx"]').data("count",l).attr("data-count",l);
p.element.find('[data-function="filter-placeholder-contributor"] li span[data-value="Community"]').data("count",m).attr("data-count",m);
p.element.find('.xilinx-filter-dropdown li span[data-count="0"]:not([data-value="all"])').parents("li").addClass("empty")
},preSelect:function(){var c=this;
var b=window.Xilinx.getURLParameter("resultsTablePreSelect");
if(b){var f=b.split(",");
for(var d=0;
d<f.length;
d++){var e=f[d].split(":");
var a=c.element.find('[data-function="filter-placeholder-'+e[0]+'"] [data-function="filter"][data-value="'+e[1]+'"]').parents("li");
a.trigger("click")
}}}});
$(document).ready(function(){if($('[data-component="hackster-project-gallery"]').length>0){$('[data-component="hackster-project-gallery"]').each(function(){$(this).projectGallery({labelMarkets:$(this).data("label-markets"),labelApplications:$(this).data("label-applications"),labelProducts:$(this).data("label-products"),labelCommunity:$(this).data("label-community"),labelContributor:$(this).data("label-contributor"),labelAll:$(this).data("label-all"),labelMultipleAuthors:$(this).data("label-multiple-authors")})
})
}});
$.widget("xilinx.productTable",{options:{},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.wrapper=a.element.find(".product-table-wrapper");
a.table=a.element.find("table");
a.screenSize=null;
a.columnWidth=null;
a.currentIndex=null;
a.selector=null;
a.rowsShown=null;
a.widthCorrection=0;
a.compareButton=null;
a.resetButton=null;
a.previousWindowSize=a.setScreenSize();
if(a.table.length>0){a.setup()
}},setup:function(){var a=this;
a.setTableWidths(true);
a.setSwipe();
$(window).resize(function(){if(a.setScreenSize()!=="xs"&&a.previousWindowSize===a.setScreenSize()){return
}a.previousWindowSize=a.setScreenSize();
a.setTableWidths()
});
a.buildSelector();
a.setPrevNext(true)
},setSwipe:function(){var a=this;
a.element.swipe({swipe:function(c,b){if(b==="left"){a.next(c)
}else{if(b==="right"){a.previous(c)
}}},allowPageScroll:"vertical"});
a.element.swipe("enable")
},setTableWidths:function(g){var b=this;
var e;
b.setScreenSize();
b.widthCorrection=0;
if(b.screenSize==="xs"){e=$(window).width()-30;
b.widthCorrection=-50;
b.rowsShown=1
}else{if(b.screenSize==="sm"){e=750-30;
b.widthCorrection=0;
b.rowsShown=3
}else{if(b.screenSize==="md"){e=970-30;
b.widthCorrection=0;
b.rowsShown=5
}else{e=1170-30;
b.widthCorrection=50;
b.rowsShown=5
}}}b.firstColumnWidth=Math.floor((e-b.widthCorrection)/(b.rowsShown+1));
var a=b.element.find("tr").first().children("td, th").filter(":visible").length-1;
if(b.rowsShown>a){b.rowsShown=a
}var d=e-b.firstColumnWidth;
b.columnWidth=Math.ceil((d-b.widthCorrection)/(b.rowsShown)-10/(b.rowsShown));
c();
f();
if(g){b.setCompareElements()
}function c(){b.table.attr("border","0");
b.table.find("tr").each(function(k){var h=0;
var j;
$(this).children("td").filter(":visible").each(function(l){if(g){$(this).wrapInner("<div/>")
}if(l===0){$(this).css("width",b.firstColumnWidth+b.widthCorrection+"px");
h=$(this).children("div").outerHeight()
}else{if(l+1===b.table.find("tr").first().children("td, th").filter(":visible").length){$(this).css({width:b.columnWidth+10+"px","padding-right":"10px"})
}else{$(this).css({width:b.columnWidth+"px","padding-right":"0px"})
}}if(k>0&&l>0){$(this).children("div").css("height",h)
}})
})
}function f(){var j=b.table.find("tr").first().children().filter(":visible").length-1;
var h=b.columnWidth*j+10;
b.table.css("width",h+"px");
if(!g){b.showCurrent(b.currentIndex)
}}b.setPrevNext(false)
},setCompareElements:function(){var b=this;
b.table.find("tr").first().find("td").each(function(e){if(e===0){$(this).empty().append('<button class="compare">Compare</button>').append('<button class="reset">Reset</button>');
b.resetButton=b.element.find("button.reset");
b.compareButton=b.element.find("button.compare")
}else{$(this).children(":first").append('<input type="checkbox" />')
}});
b.resetButton.click(function(){b.table.find("tr").first().find('input[type="checkbox"]').attr("checked",false);
a();
b.setTableWidths();
b.buildSelector()
});
b.compareButton.click(function(){a();
b.setTableWidths();
b.buildSelector()
});
function a(){if(b.element.find('input[type="checkbox"]').filter(":checked").length===0){c()
}else{b.table.find("tr").first().find("td").each(function(e){if(e!==0&&!$(this).find('input[type="checkbox"]').is(":checked")){d(e)
}})
}}function d(e){b.table.find("tr").each(function(){$(this).find("td").eq(e).hide()
})
}function c(e){b.table.find("tr").each(function(){$(this).find("td").show()
})
}},buildSelector:function(){var a=this;
if(a.selectors||a.element.find(".selector").length>0){a.element.find(".selector").remove()
}var b=$('<ul class="selector list-inline pull-right"/>');
a.table.find("tr").first().children().filter(":visible").each(function(d){if(d>0){var c=$("<li><button>"+$(this).text()+"</button></li>");
c.click(function(){a.currentIndex=d-1;
a.showCurrent()
});
b.append(c)
}});
a.wrapper.prepend(b);
a.selector=a.element.find("ul.selector");
a.selector.children("li").first().children("button").trigger("click");
a.setPrevNext(false)
},showCurrent:function(){var b=this;
var c=(b.rowsShown-1)/2;
var a=b.table.find("tr").first().children("td, th").filter(":visible").length-1;
var e=b.currentIndex;
if(e<c){e=0
}else{if(e>a-Math.ceil(b.rowsShown/2)){e=a-b.rowsShown
}else{e=b.currentIndex-Math.floor(b.rowsShown/2)
}}var d=b.firstColumnWidth-(b.columnWidth*e)+b.widthCorrection;
b.table.css("margin-left",d+"px");
b.selector.children("li").removeClass("active").eq(b.currentIndex).addClass("active");
b.table.find("tr").first().find("td, th").removeClass("active").filter(":visible").eq(b.currentIndex+1).addClass("active")
},setScreenSize:function(){var a=this;
var b=window.innerWidth;
a.screenSize="lg";
if(b<1200){a.screenSize="md"
}if(b<998){a.screenSize="sm"
}if(b<768){a.screenSize="xs"
}return a.screenSize
},setPrevNext:function(b){var a=this;
if(b){a.element.append('<a href="#" class="arrow-wrapper left hidden-xs"><span class="fa fa-chevron-left"></span></a>');
a.element.find("span.fa.fa-chevron-left").parent().click(function(c){a.previous(c)
});
a.element.append('<a href="#" class="arrow-wrapper right hidden-xs"><span class="fa fa-chevron-right"></span></a>');
a.element.find("span.fa.fa-chevron-right").parent().click(function(c){a.next(c)
})
}setTimeout(function(){var c=a.element.find("table").position().top+21;
a.element.find(".arrow-wrapper").css("top",c+"px")
},500)
},previous:function(c){var a=this;
var b=a.selector.find("li.active").index();
if(b<=0){return
}else{a.selector.find("li").eq(b-1).children("button").trigger("click")
}c.preventDefault()
},next:function(d){var b=this;
var c=b.selector.find("li.active").index();
var a=b.element.find("tr").first().children("td, th").filter(":visible").length-1;
if(c>a){return
}else{b.selector.find("li").eq(c+1).children("button").trigger("click")
}d.preventDefault()
}});
$(document).ready(function(){if($(".xilinxProductTable").length>0){$(".xilinxProductTable").each(function(){$(this).productTable()
})
}});
if(typeof window.Xilinx==="undefined"){window.Xilinx={}
}if(typeof window.Xilinx.templates==="undefined"){window.Xilinx.templates={}
}window.Xilinx.templates.xilinxPoweredByXilinxPost=['<div class="col-xs-12 col-sm-6 col-md-4 post-col">','<div class="post-wrapper">','<a href="{{post.link}}" class="disableHover post {{post.type}}">',"<figure>",'<img src="{{post.imagePath}}" alt="{{post.description}}">',"<figcaption>","{{#if post.postTitle}}","<h4>{{post.postTitle}}</h4>","{{/if}}","<p>{{post.title}}</p>",'<span class="link-label">',"{{post.postLinkLabel}}","</span>","</figcaption>","</figure>","</a>",'<div class="learn-more">','<button type="button">',"{{#if post.views}}",'<span class="views">','<span class="fa fa-eye" aria-hidden="true"></span>{{post.views}}',"</span>","{{/if}}",'<span class="fa fa-info-circle"></span>',"</button>","</div>",'<div class="overlay">','<button class="close" type="button">','<span class="fa fa-arrow-circle-down"></span>',"</button>","<h4>{{post.postTitle}}</h4>","<p>{{post.description}}</p>",'<div class="learn-more">','<a class="btn" href="{{post.link}}">',"{{post.moreLabel}}","</a>","</div>","</div>","</div>","</div>"].join("\n");
window.Xilinx.templates.xilinxPoweredByXilinxViewAll=['<div class="col-xs-12 col-sm-6 col-md-4">','<a href="{{link}}" class="view-all disableHover">','<span>{{label}}<span class="fa fa-caret-right"></span></span>',"</a>","</div>"].join("\n");
$.widget("xilinx.coveoPoweredByXilinx",{options:{limit:11,viewAllLabel:"View All",watchNowLabel:"Watch Now",learnMoreLabel:"Learn More"},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.posts=[];
a.JSONPosts=[];
a.slideIndex=0;
a.element.append('<div class="controls up"><button><span class="fa fa-chevron-up" aria-hidden="true"></span></button></div>');
a.element.append('<div class="controls down"><button><span class="fa fa-chevron-down" aria-hidden="true"></span></button></div>');
a.element.find(".controls.up").find("button").attr("disabled",true);
a.element.find(".controls.up").click(function(){a.slideUp()
});
a.element.find(".controls.down").click(function(){a.slideDown()
});
a.template=Handlebars.compile(window.Xilinx.templates.xilinxPoweredByXilinxPost);
a.ViewAllTemplate=Handlebars.compile(window.Xilinx.templates.xilinxPoweredByXilinxViewAll);
for(var b=0;
b<a.options.postsJSON.posts.length;
b++){var c={date:a.options.postsJSON.posts[b].postDate,imagePath:a.options.postsJSON.posts[b].postImage,link:a.options.postsJSON.posts[b].postLink,title:a.options.postsJSON.posts[b].postTitle,description:a.options.postsJSON.posts[b].postDescription,postTitle:a.options.postsJSON.posts[b].postTitleTag,postMegatrend:a.options.postsJSON.posts[b].postMegatrend,postLinkLabel:a.options.postsJSON.posts[b].postLinkLabel,moreLabel:a.options.readMoreLabel,type:"postType"};
if(a.options.postsJSON.posts[b].postLinkLabel==="As seen in Xilinx Blogs"){c.moreLabel=a.options.xcellLabel
}a.JSONPosts.push(c)
}a.getCoveoVideos(function(e,d){if(e){return console.log("err",e)
}var f=a.processVideoOjects(d.videos);
a._mergePosts(a.JSONPosts,f.videos);
a.insertPosts()
});
a.bindOverlayButtons()
},processVideoOjects:function(j){var k=this;
var e={};
var d=[];
for(var f=0;
f<j.length;
f++){var b=j[f];
var c=window.Xilinx.millisecondsToTime(b.raw.xlnxvideoduration);
if(b.raw.xlnxvideocreationdate){var g=((b.raw.xlnxpostmegatrend)?b.raw.xlnxpostmegatrend.join():"");
var h=((b.raw.xlnxmarkets)?b.raw.xlnxmarkets.join():"");
var a={title:b.raw.xlnxvideotitle,description:b.raw.xlnxvideodescription,postTitle:b.raw.xlnxposttitletag,categories:["Megatrends","Markets"],Megatrends:g,Markets:h,imagePath:b.raw.xlnxvideoimage,length:window.Xilinx.timeString(c),link:b.uri,views:b.raw.xlnxvideoviews,date:window.Xilinx.formatDateOutput(new Date(b.raw.xlnxvideocreationdate)),moreLabel:k.options.watchNowLabel,type:"videoType"};
d.push(a)
}}e.videos=d;
return e
},_mergePosts:function(e,d){var b=this;
var a=true;
var c=0;
while(a){if((c-1)%4===0){if(d.length>0){b.posts.push(d.shift())
}}else{if(e.length>0){b.posts.push(e.shift())
}}if(d.length===0&&e.length===0){a=false
}c++
}},insertPosts:function(){var a=this;
a.element.find(".slide-container").children('[data-component="loader"]').remove();
for(var b=0;
b<a.posts.length;
b++){if(a.options.limit&&b<a.options.limit){a.element.find(".slider-container").append(a.template({post:a.posts[b]}))
}else{a.element.find(".slider-container").append(a.ViewAllTemplate({label:a.options.viewAllLabel,link:a.options.viewAllLink}));
break
}}},slideUp:function(){var a=this;
a.slideIndex--;
if(a.slideIndex<0){a.slideIndex=0
}var b=a.element.find(".post-wrapper").first().outerHeight(true);
var c=10-(b*a.slideIndex);
a.element.find(".slider-container").css("top",c);
a.setButtons()
},slideDown:function(){var a=this;
a.slideIndex++;
var b=a.element.find(".post-wrapper").first().outerHeight(true);
var c=10-(b*a.slideIndex);
if(-(c-b)>a.element.find(".slider-container").outerHeight()){a.slideIndex--;
return
}a.element.find(".slider-container").css("top",c);
a.setButtons()
},setButtons:function(){var a=this;
var b=a.element.find(".post-wrapper").first().outerHeight(true);
var c=10-(b*a.slideIndex);
if(a.slideIndex===0){a.element.find(".controls.up").find("button").prop("disabled",true)
}else{a.element.find(".controls.up").find("button").prop("disabled",false)
}if(-(c-b)+10>=a.element.find(".slider-container").outerHeight()){a.element.find(".controls.down").find("button").prop("disabled",true);
return
}else{a.element.find(".controls.down").find("button").prop("disabled",false)
}},bindOverlayButtons:function(){var a=this;
a.element.on("click","a.post.postType, .learn-more button",function(){var b=$(this).parents(".post-wrapper").find(".overlay");
b.css("top","0");
return false
});
a.element.on("click","button.close",function(){var b=$(this).parents(".post-wrapper").find(".overlay");
b.css("top","100%")
})
},getCoveoVideos:function(c){var a=this;
var b={andTags:a.options.andTags,orTags:"",numberOfResults:500,coveoRestUri:a.options.coveoRestUri,coveoAccessToken:a.options.coveoAccessToken,coveoContext:a.options.coveoContext,sortCriteria:"@xlnxvideocreationdate descending"};
window.Xilinx.coveoAndOrQueryBuilder(b,c)
}});
$(document).ready(function(){if($('[data-component="coveo-powered-by-xilinx"]').length>0){$('[data-component="coveo-powered-by-xilinx"]').each(function(){$(this).coveoPoweredByXilinx({postsJSON:$(this).data("post-json"),viewAllLabel:$(this).data("view-all-label"),viewAllLink:$(this).data("view-all-link"),xcellLabel:$(this).data("xcell-label"),readMoreLabel:$(this).data("read-more-label"),watchNowLabel:$(this).data("watch-now-label"),coveoRestUri:$(this).data("coveo-rest-uri"),coveoAccessToken:$(this).data("coveo-access-token"),coveoContext:$(this).data("coveo-context"),andTags:$(this).data("and-tags")})
})
}});
$.widget("xilinx.coveoPoweredByXilinxLandingPage",$.xilinx.coveoPoweredByXilinx,{options:{limit:false,categoryMarkets:"Solutions by Market",categoryMegatrends:"Industry Trends"},_create:function(){var a=this;
a.posts=[];
a.filteredPosts=[];
a.JSONPosts=[];
a.template=Handlebars.compile(window.Xilinx.templates.xilinxPoweredByXilinxPost);
for(var b=0;
b<a.options.postsJSON.posts.length;
b++){var c={date:a.options.postsJSON.posts[b].postDate,imagePath:a.options.postsJSON.posts[b].postImage,link:a.options.postsJSON.posts[b].postLink,title:a.options.postsJSON.posts[b].postTitle,description:a.options.postsJSON.posts[b].postDescription,postTitle:a.options.postsJSON.posts[b].postTitleTag,postLinkLabel:a.options.postsJSON.posts[b].postLinkLabel,Megatrends:a.options.postsJSON.posts[b].postMegatrend,Markets:a.options.postsJSON.posts[b].postMarket,moreLabel:a.options.readMoreLabel,type:"postType"};
if(a.options.postsJSON.posts[b].postLinkLabel==="As seen in Xilinx Blogs"){c.moreLabel=a.options.xcellLabel
}a.JSONPosts.push(c)
}a.getCoveoVideos(function(e,d){if(e){return console.log("err",e)
}var f=a.processVideoOjects(d.videos);
a._mergePosts(a.JSONPosts,f.videos);
var g=function(h,j){a.filteredPosts=j;
a._resetPosts()
};
var g=function(h,j){a.filteredPosts=j;
a._resetPosts()
};
a.element.find('[data-function="filter-placeholder"]').filterDropdown({rawItems:a.posts,callback:g,type:"posttype",dropdown:a.options.dropdownLabel,apply:a.options.applyLabel,cancel:a.options.cancelLabel,preSelectParam:"pbxPreSelect",buttons:true,categories:[{name:"Megatrends",label:a.options.categoryMegatrends},{name:"Markets",label:a.options.categoryMarkets}]})
});
a.bindOverlayButtons();
a.setUpViewMore()
},_resetPosts:function(){var a=this;
a.element.find(".slider-container").empty();
a.insertPosts()
},insertPosts:function(){var a=this;
a.element.find(".slide-container").children('[data-component="loader"]').remove();
var b=0;
for(var d=0;
d<a.filteredPosts.length;
d++){var c=$(a.template(a.filteredPosts[d]));
b++;
if(b>15){b=1
}var f="delay-"+b;
c.addClass(f);
a.element.find(".slider-container").append(c)
}var e=a.element.find(".post-col");
setTimeout(function(){a.showNext()
},100)
},setUpViewMore:function(){var a=this;
a.element.on("click",".view-more-videos",function(){a.showNext()
})
},updateUpViewMore:function(){var a=this;
if(a.element.find(".slider-container > .post-col:not(.show)").length>15){a.element.find('[data-function="view-more"]').show()
}else{a.element.find('[data-function="view-more"]').hide()
}},showNext:function(){var a=this;
var c=a.element.find(".slider-container > .post-col:not(.show)");
a.updateUpViewMore();
for(var b=0;
b<c.length;
b++){if(b<15){$(c[b]).addClass("show")
}}}});
$(document).ready(function(){if($('[data-component="coveo-powered-by-xilinx-landing"]').length>0){$('[data-component="coveo-powered-by-xilinx-landing"]').each(function(){$(this).coveoPoweredByXilinxLandingPage({postsJSON:$(this).data("post-json"),xcellLabel:$(this).data("xcell-label"),readMoreLabel:$(this).data("read-more-label"),watchNowLabel:$(this).data("watch-now-label"),dropdownLabel:$(this).data("dropdown-label"),applyLabel:$(this).data("apply-label"),cancelLabel:$(this).data("cancel-label"),categoryMarkets:$(this).data("category-markets"),categoryMegatrends:$(this).data("category-megatrends"),coveoRestUri:$(this).data("coveo-rest-uri"),coveoAccessToken:$(this).data("coveo-access-token"),coveoContext:$(this).data("coveo-context"),andTags:$(this).data("and-tags")})
})
}});
$(document).ready(function(){if($(".xilinxList ul.expandable").length>0){$(".xilinxList").each(function(){var a=$(this);
$(this).on("click","a.expandable-toggle",function(){$(this).siblings("a.expandable-toggle").show();
$(this).hide();
if($(this).data("list-toggle")==="more"){a.find("li.expandable").show("fast")
}else{a.find("li.expandable").hide("fast")
}})
})
}});
$.widget("xilinx.xilinxUserProfile",{init:function(b){var a=this
},_create:function(){var a=this;
a._getProfile(function(c,b){if(!c){(typeof b.lastNameLang!=="undefined")?a.element.find('input[name="Last_Name_Lang"]').val(b.lastNameLang):"";
(typeof b.firstNameLang!=="undefined")?a.element.find('input[name="First_Name_Lang"]').val(b.firstNameLang):"";
(typeof b.firstName!=="undefined")?a.element.find('input[name="First_Name"]').val(b.firstName):"";
(typeof b.lastName!=="undefined")?a.element.find('input[name="Last_Name"]').val(b.lastName):"";
(typeof b.email!=="undefined")?a.element.find('input[name="Email"]').val(b.email):"";
(typeof b.orgLang!=="undefined")?a.element.find('input[name="Company_Lang"]').val(b.orgLang):"";
(typeof b.org!=="undefined")?a.element.find('input[name="Company"]').val(b.org):"";
(typeof b.address1!=="undefined")?a.element.find('input[name="Address_1"]').val(b.address1):"";
(typeof b.address2!=="undefined")?a.element.find('input[name="Address_2"]').val(b.address2):"";
(typeof b.city!=="undefined")?a.element.find('input[name="City"]').val(b.city):"";
(typeof b.state!=="undefined")?a.element.find('input[name="State"]').val(b.state):"";
(typeof b.country!=="undefined")?a.element.find('select[name="Country"]').val(b.country):"";
(typeof b.zip!=="undefined")?a.element.find('input[name="Zip_Code"]').val(b.zip):"";
(typeof b.phone!=="undefined")?a.element.find('input[name="Phone"]').val(b.phone):"";
(typeof b.jobFunction!=="undefined")?a.element.find('select[name="Job_Function"]').val(b.jobFunction):"";
(typeof b.industry!=="undefined")?a.element.find('select[name="Industry"]').val(b.industry):""
}})
},_getProfile:function(b){var a=this;
$.xilinxProfileAjax({url:"/bin/protected/myprofile",type:"get",success:function(c){b(null,c)
},error:function(c){b("AJAX Error",c);
b(c)
},cache:false})
}});
$(document).ready(function(){if($('[data-component="xilinx-userprofile"]').length>0){$('[data-component="xilinx-userprofile"]').each(function(){$(this).xilinxUserProfile()
})
}});
$(document).ready(function(){if($('[data-component="form-textParam"]').length){$('[data-component="form-textParam"]').each(function(){var b=window.Xilinx.getURLParameter($(this).data("param-name"));
if(b){b=b.replace(/<script.*>.*<\/script>/gi,"");
var a=$(this).data("element-name");
$(this).find('[name="'+a+'"]').val(b);
$(this).find('[name="'+a+'"]').prop("readonly",true)
}})
}});
$(document).ready(function(){if($('[data-component="form-referrer"]').length){$('[data-component="form-referrer"]').each(function(){var a=document.referrer;
$(this).find('[name="referrer"]').val(a);
$(this).find('[data-function="value-placeholder"]').replaceWith(a)
})
}});
(function(b){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=b()
}else{if(typeof define==="function"&&define.amd){define([],b)
}else{var a;
if(typeof window!=="undefined"){a=window
}else{if(typeof global!=="undefined"){a=global
}else{if(typeof self!=="undefined"){a=self
}else{a=this
}}}a.zxcvbn=b()
}}})(function(){var d,b,a;
return(function c(f,k,h){function g(s,p){if(!k[s]){if(!f[s]){var n=typeof require=="function"&&require;
if(!p&&n){return n(s,!0)
}if(e){return e(s,!0)
}var r=new Error("Cannot find module '"+s+"'");
throw r.code="MODULE_NOT_FOUND",r
}var m=k[s]={exports:{}};
f[s][0].call(m.exports,function(l){var o=f[s][1][l];
return g(o?o:l)
},m,m.exports,c,f,k,h)
}return k[s].exports
}var e=typeof require=="function"&&require;
for(var j=0;
j<h.length;
j++){g(h[j])
}return g
})({1:[function(g,h,f){var e;
e={qwerty:{"!":["`~",null,null,"2@","qQ",null],'"':[";:","[{","]}",null,null,"/?"],"#":["2@",null,null,"4$","eE","wW"],$:["3#",null,null,"5%","rR","eE"],"%":["4$",null,null,"6^","tT","rR"],"&":["6^",null,null,"8*","uU","yY"],"'":[";:","[{","]}",null,null,"/?"],"(":["8*",null,null,"0)","oO","iI"],")":["9(",null,null,"-_","pP","oO"],"*":["7&",null,null,"9(","iI","uU"],"+":["-_",null,null,null,"]}","[{"],",":["mM","kK","lL",".>",null,null],"-":["0)",null,null,"=+","[{","pP"],".":[",<","lL",";:","/?",null,null],"/":[".>",";:","'\"",null,null,null],0:["9(",null,null,"-_","pP","oO"],1:["`~",null,null,"2@","qQ",null],2:["1!",null,null,"3#","wW","qQ"],3:["2@",null,null,"4$","eE","wW"],4:["3#",null,null,"5%","rR","eE"],5:["4$",null,null,"6^","tT","rR"],6:["5%",null,null,"7&","yY","tT"],7:["6^",null,null,"8*","uU","yY"],8:["7&",null,null,"9(","iI","uU"],9:["8*",null,null,"0)","oO","iI"],":":["lL","pP","[{","'\"","/?",".>"],";":["lL","pP","[{","'\"","/?",".>"],"<":["mM","kK","lL",".>",null,null],"=":["-_",null,null,null,"]}","[{"],">":[",<","lL",";:","/?",null,null],"?":[".>",";:","'\"",null,null,null],"@":["1!",null,null,"3#","wW","qQ"],A:[null,"qQ","wW","sS","zZ",null],B:["vV","gG","hH","nN",null,null],C:["xX","dD","fF","vV",null,null],D:["sS","eE","rR","fF","cC","xX"],E:["wW","3#","4$","rR","dD","sS"],F:["dD","rR","tT","gG","vV","cC"],G:["fF","tT","yY","hH","bB","vV"],H:["gG","yY","uU","jJ","nN","bB"],I:["uU","8*","9(","oO","kK","jJ"],J:["hH","uU","iI","kK","mM","nN"],K:["jJ","iI","oO","lL",",<","mM"],L:["kK","oO","pP",";:",".>",",<"],M:["nN","jJ","kK",",<",null,null],N:["bB","hH","jJ","mM",null,null],O:["iI","9(","0)","pP","lL","kK"],P:["oO","0)","-_","[{",";:","lL"],Q:[null,"1!","2@","wW","aA",null],R:["eE","4$","5%","tT","fF","dD"],S:["aA","wW","eE","dD","xX","zZ"],T:["rR","5%","6^","yY","gG","fF"],U:["yY","7&","8*","iI","jJ","hH"],V:["cC","fF","gG","bB",null,null],W:["qQ","2@","3#","eE","sS","aA"],X:["zZ","sS","dD","cC",null,null],Y:["tT","6^","7&","uU","hH","gG"],Z:[null,"aA","sS","xX",null,null],"[":["pP","-_","=+","]}","'\"",";:"],"\\":["]}",null,null,null,null,null],"]":["[{","=+",null,"\\|",null,"'\""],"^":["5%",null,null,"7&","yY","tT"],_:["0)",null,null,"=+","[{","pP"],"`":[null,null,null,"1!",null,null],a:[null,"qQ","wW","sS","zZ",null],b:["vV","gG","hH","nN",null,null],c:["xX","dD","fF","vV",null,null],d:["sS","eE","rR","fF","cC","xX"],e:["wW","3#","4$","rR","dD","sS"],f:["dD","rR","tT","gG","vV","cC"],g:["fF","tT","yY","hH","bB","vV"],h:["gG","yY","uU","jJ","nN","bB"],i:["uU","8*","9(","oO","kK","jJ"],j:["hH","uU","iI","kK","mM","nN"],k:["jJ","iI","oO","lL",",<","mM"],l:["kK","oO","pP",";:",".>",",<"],m:["nN","jJ","kK",",<",null,null],n:["bB","hH","jJ","mM",null,null],o:["iI","9(","0)","pP","lL","kK"],p:["oO","0)","-_","[{",";:","lL"],q:[null,"1!","2@","wW","aA",null],r:["eE","4$","5%","tT","fF","dD"],s:["aA","wW","eE","dD","xX","zZ"],t:["rR","5%","6^","yY","gG","fF"],u:["yY","7&","8*","iI","jJ","hH"],v:["cC","fF","gG","bB",null,null],w:["qQ","2@","3#","eE","sS","aA"],x:["zZ","sS","dD","cC",null,null],y:["tT","6^","7&","uU","hH","gG"],z:[null,"aA","sS","xX",null,null],"{":["pP","-_","=+","]}","'\"",";:"],"|":["]}",null,null,null,null,null],"}":["[{","=+",null,"\\|",null,"'\""],"~":[null,null,null,"1!",null,null]},dvorak:{"!":["`~",null,null,"2@","'\"",null],'"':[null,"1!","2@",",<","aA",null],"#":["2@",null,null,"4$",".>",",<"],$:["3#",null,null,"5%","pP",".>"],"%":["4$",null,null,"6^","yY","pP"],"&":["6^",null,null,"8*","gG","fF"],"'":[null,"1!","2@",",<","aA",null],"(":["8*",null,null,"0)","rR","cC"],")":["9(",null,null,"[{","lL","rR"],"*":["7&",null,null,"9(","cC","gG"],"+":["/?","]}",null,"\\|",null,"-_"],",":["'\"","2@","3#",".>","oO","aA"],"-":["sS","/?","=+",null,null,"zZ"],".":[",<","3#","4$","pP","eE","oO"],"/":["lL","[{","]}","=+","-_","sS"],0:["9(",null,null,"[{","lL","rR"],1:["`~",null,null,"2@","'\"",null],2:["1!",null,null,"3#",",<","'\""],3:["2@",null,null,"4$",".>",",<"],4:["3#",null,null,"5%","pP",".>"],5:["4$",null,null,"6^","yY","pP"],6:["5%",null,null,"7&","fF","yY"],7:["6^",null,null,"8*","gG","fF"],8:["7&",null,null,"9(","cC","gG"],9:["8*",null,null,"0)","rR","cC"],":":[null,"aA","oO","qQ",null,null],";":[null,"aA","oO","qQ",null,null],"<":["'\"","2@","3#",".>","oO","aA"],"=":["/?","]}",null,"\\|",null,"-_"],">":[",<","3#","4$","pP","eE","oO"],"?":["lL","[{","]}","=+","-_","sS"],"@":["1!",null,null,"3#",",<","'\""],A:[null,"'\"",",<","oO",";:",null],B:["xX","dD","hH","mM",null,null],C:["gG","8*","9(","rR","tT","hH"],D:["iI","fF","gG","hH","bB","xX"],E:["oO",".>","pP","uU","jJ","qQ"],F:["yY","6^","7&","gG","dD","iI"],G:["fF","7&","8*","cC","hH","dD"],H:["dD","gG","cC","tT","mM","bB"],I:["uU","yY","fF","dD","xX","kK"],J:["qQ","eE","uU","kK",null,null],K:["jJ","uU","iI","xX",null,null],L:["rR","0)","[{","/?","sS","nN"],M:["bB","hH","tT","wW",null,null],N:["tT","rR","lL","sS","vV","wW"],O:["aA",",<",".>","eE","qQ",";:"],P:[".>","4$","5%","yY","uU","eE"],Q:[";:","oO","eE","jJ",null,null],R:["cC","9(","0)","lL","nN","tT"],S:["nN","lL","/?","-_","zZ","vV"],T:["hH","cC","rR","nN","wW","mM"],U:["eE","pP","yY","iI","kK","jJ"],V:["wW","nN","sS","zZ",null,null],W:["mM","tT","nN","vV",null,null],X:["kK","iI","dD","bB",null,null],Y:["pP","5%","6^","fF","iI","uU"],Z:["vV","sS","-_",null,null,null],"[":["0)",null,null,"]}","/?","lL"],"\\":["=+",null,null,null,null,null],"]":["[{",null,null,null,"=+","/?"],"^":["5%",null,null,"7&","fF","yY"],_:["sS","/?","=+",null,null,"zZ"],"`":[null,null,null,"1!",null,null],a:[null,"'\"",",<","oO",";:",null],b:["xX","dD","hH","mM",null,null],c:["gG","8*","9(","rR","tT","hH"],d:["iI","fF","gG","hH","bB","xX"],e:["oO",".>","pP","uU","jJ","qQ"],f:["yY","6^","7&","gG","dD","iI"],g:["fF","7&","8*","cC","hH","dD"],h:["dD","gG","cC","tT","mM","bB"],i:["uU","yY","fF","dD","xX","kK"],j:["qQ","eE","uU","kK",null,null],k:["jJ","uU","iI","xX",null,null],l:["rR","0)","[{","/?","sS","nN"],m:["bB","hH","tT","wW",null,null],n:["tT","rR","lL","sS","vV","wW"],o:["aA",",<",".>","eE","qQ",";:"],p:[".>","4$","5%","yY","uU","eE"],q:[";:","oO","eE","jJ",null,null],r:["cC","9(","0)","lL","nN","tT"],s:["nN","lL","/?","-_","zZ","vV"],t:["hH","cC","rR","nN","wW","mM"],u:["eE","pP","yY","iI","kK","jJ"],v:["wW","nN","sS","zZ",null,null],w:["mM","tT","nN","vV",null,null],x:["kK","iI","dD","bB",null,null],y:["pP","5%","6^","fF","iI","uU"],z:["vV","sS","-_",null,null,null],"{":["0)",null,null,"]}","/?","lL"],"|":["=+",null,null,null,null,null],"}":["[{",null,null,null,"=+","/?"],"~":[null,null,null,"1!",null,null]},keypad:{"*":["/",null,null,null,"-","+","9","8"],"+":["9","*","-",null,null,null,null,"6"],"-":["*",null,null,null,null,null,"+","9"],".":["0","2","3",null,null,null,null,null],"/":[null,null,null,null,"*","9","8","7"],0:[null,"1","2","3",".",null,null,null],1:[null,null,"4","5","2","0",null,null],2:["1","4","5","6","3",".","0",null],3:["2","5","6",null,null,null,".","0"],4:[null,null,"7","8","5","2","1",null],5:["4","7","8","9","6","3","2","1"],6:["5","8","9","+",null,null,"3","2"],7:[null,null,null,"/","8","5","4",null],8:["7",null,"/","*","9","6","5","4"],9:["8","/","*","-","+",null,"6","5"]},mac_keypad:{"*":["/",null,null,null,null,null,"-","9"],"+":["6","9","-",null,null,null,null,"3"],"-":["9","/","*",null,null,null,"+","6"],".":["0","2","3",null,null,null,null,null],"/":["=",null,null,null,"*","-","9","8"],0:[null,"1","2","3",".",null,null,null],1:[null,null,"4","5","2","0",null,null],2:["1","4","5","6","3",".","0",null],3:["2","5","6","+",null,null,".","0"],4:[null,null,"7","8","5","2","1",null],5:["4","7","8","9","6","3","2","1"],6:["5","8","9","-","+",null,"3","2"],7:[null,null,null,"=","8","5","4",null],8:["7",null,"=","/","9","6","5","4"],9:["8","=","/","*","-","+","6","5"],"=":[null,null,null,null,"/","9","8","7"]}},h.exports=e
},{}],2:[function(g,h,f){var e,j;
j=g("./scoring"),e={default_feedback:{warning:"",suggestions:["Use a few words, avoid common phrases","No need for symbols, digits, or uppercase letters"]},get_feedback:function(v,p){var k,m,u,x,w,l;
if(0===p.length){return this.default_feedback
}if(v>2){return{warning:"",suggestions:[]}
}for(x=p[0],l=p.slice(1),m=0,u=l.length;
u>m;
m++){w=l[m],w.token.length>x.token.length&&(x=w)
}return e=this.get_match_feedback(x,1===p.length),k="Add another word or two. Uncommon words are better.",null!=e?(e.suggestions.unshift(k),null==e.warning&&(e.warning="")):e={warning:"",suggestions:[k]},e
},get_match_feedback:function(n,m){var k,l;
switch(n.pattern){case"dictionary":return this.get_dictionary_match_feedback(n,m);
case"spatial":return k=n.graph.toUpperCase(),l=1===n.turns?"Straight rows of keys are easy to guess":"Short keyboard patterns are easy to guess",{warning:l,suggestions:["Use a longer keyboard pattern with more turns"]};
case"repeat":return l=1===n.base_token.length?'Repeats like "aaa" are easy to guess':'Repeats like "abcabcabc" are only slightly harder to guess than "abc"',{warning:l,suggestions:["Avoid repeated words and characters"]};
case"sequence":return{warning:"Sequences like abc or 6543 are easy to guess",suggestions:["Avoid sequences"]};
case"regex":if("recent_year"===n.regex_name){return{warning:"Recent years are easy to guess",suggestions:["Avoid recent years","Avoid years that are associated with you"]}
}break;
case"date":return{warning:"Dates are often easy to guess",suggestions:["Avoid dates and years that are associated with you"]}
}},get_dictionary_match_feedback:function(u,m){var k,l,p,w,v;
return w="passwords"===u.dictionary_name?!m||u.l33t||u.reversed?u.guesses_log10<=4?"This is similar to a commonly used password":void 0:u.rank<=10?"This is a top-10 common password":u.rank<=100?"This is a top-100 common password":"This is a very common password":"english"===u.dictionary_name?m?"A word by itself is easy to guess":void 0:"surnames"===(k=u.dictionary_name)||"male_names"===k||"female_names"===k?m?"Names and surnames by themselves are easy to guess":"Common names and surnames are easy to guess":"",p=[],v=u.token,v.match(j.START_UPPER)?p.push("Capitalization doesn't help very much"):v.match(j.ALL_UPPER)&&v.toLowerCase()!==v&&p.push("All-uppercase is almost as easy to guess as all-lowercase"),u.reversed&&u.token.length>=4&&p.push("Reversed words aren't much harder to guess"),u.l33t&&p.push("Predictable substitutions like '@' instead of 'a' don't help very much"),l={warning:w,suggestions:p}
}},h.exports=e
},{"./scoring":6}],3:[function(g,h,f){var e;
},{}],4:[function(j,g,l){var f,e,k,h,m,n;
e=j("./matching"),k=j("./scoring"),m=j("./time_estimates"),f=j("./feedback"),h=function(){return(new Date).getTime()
},n=function(A,F){var y,w,B,G,C,p,x,v,E,z,D;
for(null==F&&(F=[]),z=h(),E=[],B=0,G=F.length;
G>B;
B++){y=F[B],"string"!=(x=typeof y)&&"number"!==x&&"boolean"!==x||E.push(y.toString().toLowerCase())
}e.set_user_input_dictionary(E),C=e.omnimatch(A),v=k.most_guessable_match_sequence(A,C),v.calc_time=h()-z,w=m.estimate_attack_times(v.guesses);
for(p in w){D=w[p],v[p]=D
}return v.feedback=f.get_feedback(v.score,v.sequence),v
},g.exports=n
},{"./feedback":2,"./matching":5,"./scoring":6,"./time_estimates":7}],5:[function(m,j,p){var v,e,w,l,t,n,h,k,s,u,r,g,f,o;
u=m("./frequency_lists"),k=m("./adjacency_graphs"),o=m("./scoring"),s=function(B){var z,C,A,y,x;
for(y={},z=1,A=0,C=B.length;
C>A;
A++){x=B[A],y[x]=z,z+=1
}return y
},n={};
for(f in u){r=u[f],n[f]=s(r)
}l={qwerty:k.qwerty,dvorak:k.dvorak,keypad:k.keypad,mac_keypad:k.mac_keypad},t={a:["4","@"],b:["8"],c:["(","{","[","<"],e:["3"],g:["6","9"],i:["1","!","|"],l:["1","|","7"],o:["0"],s:["$","5"],t:["+","7"],x:["%"],z:["2"]},h={recent_year:/19\d\d|200\d|201\d/g},v=2050,e=1000,w={4:[[1,2],[2,3]],5:[[1,3],[2,3]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]},g={empty:function(y){var x;
return 0===function(){var z;
z=[];
for(x in y){z.push(x)
}return z
}().length
},extend:function(y,x){return y.push.apply(y,x)
},translate:function(y,x){var z;
return function(){var D,B,A,C;
for(A=y.split(""),C=[],B=0,D=A.length;
D>B;
B++){z=A[B],C.push(x[z]||z)
}return C
}().join("")
},mod:function(y,x){return(y%x+x)%x
},sorted:function(x){return x.sort(function(z,y){return z.i-y.i||z.j-y.j
})
},omnimatch:function(B){var z,C,A,y,x;
for(y=[],A=[this.dictionary_match,this.reverse_dictionary_match,this.l33t_match,this.spatial_match,this.repeat_match,this.sequence_match,this.regex_match,this.date_match],x=0,z=A.length;
z>x;
x++){C=A[x],this.extend(y,C.call(this,B))
}return this.sorted(y)
},dictionary_match:function(F,L){var A,x,C,I,M,z,D,K,H,B,J,E,G,y;
null==L&&(L=n),M=[],I=F.length,K=F.toLowerCase();
for(A in L){for(B=L[A],x=z=0,J=I;
J>=0?J>z:z>J;
x=J>=0?++z:--z){for(C=D=E=x,G=I;
G>=E?G>D:D>G;
C=G>=E?++D:--D){K.slice(x,+C+1||9000000000) in B&&(y=K.slice(x,+C+1||9000000000),H=B[y],M.push({pattern:"dictionary",i:x,j:C,token:F.slice(x,+C+1||9000000000),matched_word:y,rank:H,dictionary_name:A,reversed:!1,l33t:!1}))
}}}return this.sorted(M)
},reverse_dictionary_match:function(C,z){var E,B,y,x,A,D;
for(null==z&&(z=n),D=C.split("").reverse().join(""),y=this.dictionary_match(D,z),x=0,E=y.length;
E>x;
x++){B=y[x],B.token=B.token.split("").reverse().join(""),B.reversed=!0,A=[C.length-1-B.j,C.length-1-B.i],B.i=A[0],B.j=A[1]
}return this.sorted(y)
},set_user_input_dictionary:function(x){return n.user_inputs=s(x.slice())
},relevant_l33t_subtable:function(D,H){var z,x,B,F,I,y,C,G,E,A;
for(I={},y=D.split(""),F=0,x=y.length;
x>F;
F++){z=y[F],I[z]=!0
}A={};
for(B in H){E=H[B],C=function(){var K,J,L;
for(L=[],J=0,K=E.length;
K>J;
J++){G=E[J],G in I&&L.push(G)
}return L
}(),C.length>0&&(A[B]=C)
}return A
},enumerate_l33t_subs:function(F){var L,A,x,C,I,M,z,D,K,H,B,J,E,G,y;
I=function(){var N;
N=[];
for(C in F){N.push(C)
}return N
}(),y=[[]],A=function(R){var U,P,N,S,V,O,Q,T;
for(P=[],V={},O=0,S=R.length;
S>O;
O++){Q=R[O],U=function(){var X,W,Y;
for(Y=[],T=W=0,X=Q.length;
X>W;
T=++W){C=Q[T],Y.push([C,T])
}return Y
}(),U.sort(),N=function(){var X,Y,W;
for(W=[],T=Y=0,X=U.length;
X>Y;
T=++Y){C=U[T],W.push(C+","+T)
}return W
}().join("-"),N in V||(V[N]=!0,P.push(Q))
}return P
},x=function(ab){var R,Y,ad,O,S,aa,W,Q,Z,U,V,T,P,N,ac,X;
if(ab.length){for(Y=ab[0],P=ab.slice(1),W=[],V=F[Y],Q=0,S=V.length;
S>Q;
Q++){for(O=V[Q],Z=0,aa=y.length;
aa>Z;
Z++){for(N=y[Z],R=-1,ad=U=0,T=N.length;
T>=0?T>U:U>T;
ad=T>=0?++U:--U){if(N[ad][0]===O){R=ad;
break
}}-1===R?(X=N.concat([[O,Y]]),W.push(X)):(ac=N.slice(0),ac.splice(R,1),ac.push([O,Y]),W.push(N),W.push(ac))
}}return y=A(W),x(P)
}},x(I),G=[];
for(K=0,z=y.length;
z>K;
K++){for(J=y[K],E={},H=0,D=J.length;
D>H;
H++){B=J[H],M=B[0],L=B[1],E[M]=L
}G.push(E)
}return G
},l33t_match:function(M,y,F){var B,I,P,z,E,J,x,O,H,Q,L,N,D,K,G,C;
for(null==y&&(y=n),null==F&&(F=t),x=[],Q=this.enumerate_l33t_subs(this.relevant_l33t_subtable(M,F)),O=0,P=Q.length;
P>O&&(N=Q[O],!this.empty(N));
O++){for(K=this.translate(M,N),L=this.dictionary_match(K,y),H=0,z=L.length;
z>H;
H++){if(E=L[H],G=M.slice(E.i,+E.j+1||9000000000),G.toLowerCase()!==E.matched_word){J={};
for(D in N){B=N[D],-1!==G.indexOf(D)&&(J[D]=B)
}E.l33t=!0,E.token=G,E.sub=J,E.sub_display=function(){var A;
A=[];
for(I in J){C=J[I],A.push(I+" -> "+C)
}return A
}().join(", "),x.push(E)
}}}return this.sorted(x.filter(function(A){return A.token.length>1
}))
},spatial_match:function(A,y){var B,z,x;
null==y&&(y=l),x=[];
for(z in y){B=y[z],this.extend(x,this.spatial_match_helper(A,B,z))
}return this.sorted(x)
},SHIFTED_RX:/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/,spatial_match_helper:function(K,y,D){var A,G,N,z,C,H,x,M,F,O,J,L,B,I,E;
for(J=[],x=0;
x<K.length-1;
){for(M=x+1,F=null,E=0,I="qwerty"!==D&&"dvorak"!==D||!this.SHIFTED_RX.exec(K.charAt(x))?0:1;
;
){if(B=K.charAt(M-1),C=!1,H=-1,z=-1,G=y[B]||[],M<K.length){for(N=K.charAt(M),L=0,O=G.length;
O>L;
L++){if(A=G[L],z+=1,A&&-1!==A.indexOf(N)){C=!0,H=z,1===A.indexOf(N)&&(I+=1),F!==H&&(E+=1,F=H);
break
}}}if(!C){M-x>2&&J.push({pattern:"spatial",i:x,j:M-1,token:K.slice(x,M),graph:D,turns:E,shifted_count:I}),x=M;
break
}M+=1
}}return J
},repeat_match:function(F){var L,A,x,C,I,M,z,D,K,H,B,J,E,G,y;
for(G=[],I=/(.+)\1+/g,H=/(.+?)\1+/g,B=/^(.+?)\1+$/,K=0;
K<F.length&&(I.lastIndex=H.lastIndex=K,M=I.exec(F),J=H.exec(F),null!=M);
){M[0].length>J[0].length?(E=M,C=B.exec(E[0])[1]):(E=J,C=E[1]),y=[E.index,E.index+E[0].length-1],z=y[0],D=y[1],L=o.most_guessable_match_sequence(C,this.omnimatch(C)),x=L.match_sequence,A=L.guesses,G.push({pattern:"repeat",i:z,j:D,token:E[0],base_token:C,base_guesses:A,base_matches:x,repeat_count:E[0].length/C.length}),K=D+1
}return G
},MAX_DELTA:5,sequence_match:function(C){var F,z,x,A,D,G,y,B,E;
if(1===C.length){return[]
}for(E=function(H){return function(O,M,K){var I,L,N,J;
return(M-O>1||1===Math.abs(K))&&0<(I=Math.abs(K))&&I<=H.MAX_DELTA?(J=C.slice(O,+M+1||9000000000),/^[a-z]+$/.test(J)?(L="lower",N=26):/^[A-Z]+$/.test(J)?(L="upper",N=26):/^\d+$/.test(J)?(L="digits",N=10):(L="unicode",N=26),B.push({pattern:"sequence",i:O,j:M,token:C.slice(O,+M+1||9000000000),sequence_name:L,sequence_space:N,ascending:K>0})):void 0
}
}(this),B=[],z=0,D=null,A=G=1,y=C.length;
y>=1?y>G:G>y;
A=y>=1?++G:--G){F=C.charCodeAt(A)-C.charCodeAt(A-1),null==D&&(D=F),F!==D&&(x=A-1,E(z,x,D),z=x,D=F)
}return E(z,C.length-1,D),B
},regex_match:function(B,z){var C,A,y,x;
null==z&&(z=h),C=[];
for(f in z){for(A=z[f],A.lastIndex=0;
y=A.exec(B);
){x=y[0],C.push({pattern:"regex",token:x,i:y.index,j:y.index+y[0].length-1,regex_name:f,regex_match:y})
}}return this.sorted(C)
},date_match:function(am){var V,ad,Y,ai,aq,X,ac,aj,Q,ao,af,ar,al,an,ab,ak,ae,aa,U,J,P,O,C,z,W,ag,K,ah,ap,F,B,Z,H,G;
for(ar=[],al=/^\d{4,8}$/,an=/^(\d{1,4})([\s\/\\_.-])(\d{1,2})\2(\d{1,4})$/,X=ae=0,P=am.length-4;
P>=0?P>=ae:ae>=P;
X=P>=0?++ae:--ae){for(ac=aa=O=X+3,C=X+7;
(C>=O?C>=aa:aa>=C)&&!(ac>=am.length);
ac=C>=O?++aa:--aa){if(G=am.slice(X,+ac+1||9000000000),al.exec(G)){for(Y=[],z=w[G.length],U=0,ao=z.length;
ao>U;
U++){W=z[U],aj=W[0],Q=W[1],aq=this.map_ints_to_dmy([parseInt(G.slice(0,aj)),parseInt(G.slice(aj,Q)),parseInt(G.slice(Q))]),null!=aq&&Y.push(aq)
}if(Y.length>0){for(V=Y[0],ab=function(x){return Math.abs(x.year-o.REFERENCE_YEAR)
},ak=ab(Y[0]),ag=Y.slice(1),J=0,af=ag.length;
af>J;
J++){ad=ag[J],ai=ab(ad),ak>ai&&(K=[ad,ai],V=K[0],ak=K[1])
}ar.push({pattern:"date",token:G,i:X,j:ac,separator:"",year:V.year,month:V.month,day:V.day})
}}}}for(X=Z=0,ah=am.length-6;
ah>=0?ah>=Z:Z>=ah;
X=ah>=0?++Z:--Z){for(ac=H=ap=X+5,F=X+9;
(F>=ap?F>=H:H>=F)&&!(ac>=am.length);
ac=F>=ap?++H:--H){G=am.slice(X,+ac+1||9000000000),B=an.exec(G),null!=B&&(aq=this.map_ints_to_dmy([parseInt(B[1]),parseInt(B[3]),parseInt(B[4])]),null!=aq&&ar.push({pattern:"date",token:G,i:X,j:ac,separator:B[2],year:aq.year,month:aq.month,day:aq.day}))
}}return this.sorted(ar.filter(function(D){var y,E,A,x;
for(y=!1,x=0,E=ar.length;
E>x;
x++){if(A=ar[x],D!==A&&A.i<=D.i&&A.j>=D.j){y=!0;
break
}}return !y
}))
},map_ints_to_dmy:function(G){var M,A,x,C,J,N,z,D,L,I,B,K,F,H,y,E;
if(!(G[1]>31||G[1]<=0)){for(z=0,D=0,y=0,N=0,x=G.length;
x>N;
N++){if(A=G[N],A>99&&e>A||A>v){return
}A>31&&(D+=1),A>12&&(z+=1),0>=A&&(y+=1)
}if(!(D>=2||3===z||y>=2)){for(I=[[G[2],G.slice(0,2)],[G[0],G.slice(1,3)]],L=0,C=I.length;
C>L;
L++){if(K=I[L],E=K[0],H=K[1],E>=e&&v>=E){return M=this.map_ints_to_dm(H),null!=M?{year:E,month:M.month,day:M.day}:void 0
}}for(B=0,J=I.length;
J>B;
B++){if(F=I[B],E=F[0],H=F[1],M=this.map_ints_to_dm(H),null!=M){return E=this.two_to_four_digit_year(E),{year:E,month:M.month,day:M.day}
}}}}},map_ints_to_dm:function(C){var z,D,B,y,x,A;
for(x=[C,C.slice().reverse()],y=0,D=x.length;
D>y;
y++){if(A=x[y],z=A[0],B=A[1],z>=1&&31>=z&&B>=1&&12>=B){return{day:z,month:B}
}}},two_to_four_digit_year:function(x){return x>99?x:x>50?x+1900:x+2000
}},j.exports=g
},{"./adjacency_graphs":1,"./frequency_lists":3,"./scoring":6}],6:[function(h,f,n){var o,e,s,p,g,j,m,l,r;
g=h("./adjacency_graphs"),j=function(z){var w,y,A,x,k,v;
w=0;
for(A in z){k=z[A],w+=function(){var C,u,B;
for(B=[],u=0,C=k.length;
C>u;
u++){x=k[u],x&&B.push(x)
}return B
}().length
}return w/=function(){var u;
u=[];
for(y in z){v=z[y],u.push(y)
}return u
}().length
},o=10,e=10000,p=10,s=50,l={nCk:function(x,u){var w,y,v,k;
if(u>x){return 0
}if(0===u){return 1
}for(v=1,w=y=1,k=u;
k>=1?k>=y:y>=k;
w=k>=1?++y:--y){v*=x,v/=w,x-=1
}return v
},log10:function(k){return Math.log(k)/Math.log(10)
},log2:function(k){return Math.log(k)/Math.log(2)
},factorial:function(w){var k,v,x,u;
if(2>w){return 1
}for(k=1,v=x=2,u=w;
u>=2?u>=x:x>=u;
v=u>=2?++x:--x){k*=v
}return k
},most_guessable_match_sequence:function(U,D,G){var L,F,W,B,O,X,K,P,C,V,Q,T,N,J,H,k,w,z,y,x;
for(null==G&&(G=!1),Q=U.length,V=function(){var A,u,v;
for(v=[],L=A=0,u=Q;
u>=0?u>A:A>u;
L=u>=0?++A:--A){v.push([])
}return v
}(),T=0,X=D.length;
X>T;
T++){P=D[T],V[P.j].push(P)
}for(N={m:function(){var A,u,v;
for(v=[],L=A=0,u=Q;
u>=0?u>A:A>u;
L=u>=0?++A:--A){v.push({})
}return v
}(),pi:function(){var A,u,v;
for(v=[],L=A=0,u=Q;
u>=0?u>A:A>u;
L=u>=0?++A:--A){v.push({})
}return v
}(),g:function(){var A,u,v;
for(v=[],L=A=0,u=Q;
u>=0?u>A:A>u;
L=u>=0?++A:--A){v.push(1/0)
}return v
}(),l:function(){var A,u,v;
for(v=[],L=A=0,u=Q;
u>=0?u>A:A>u;
L=u>=0?++A:--A){v.push(0)
}return v
}()},x=function(u){return function(I,E){var t,v,A;
return v=I.j,A=u.estimate_guesses(I,U),E>1&&(A*=N.pi[I.i-1][E-1]),t=u.factorial(E)*A,G||(t+=Math.pow(e,E-1)),t<N.g[v]?(N.g[v]=t,N.l[v]=E,N.m[v][E]=I,N.pi[v][E]=A):void 0
}
}(this),F=function(t){return function(E){var u,A,I,v;
if(P=C(0,E),x(P,1),0!==E){I=N.m[E-1],v=[];
for(u in I){A=I[u],u=parseInt(u),"bruteforce"===A.pattern?(P=C(A.i,E),v.push(x(P,u))):(P=C(E,E),v.push(x(P,u+1)))
}return v
}}
}(this),C=function(u){return function(v,A){return{pattern:"bruteforce",token:U.slice(v,+A+1||9000000000),i:v,j:A}
}
}(this),y=function(t){return function(A){var u,v,E;
for(E=[],u=A-1,v=N.l[u];
u>=0;
){P=N.m[u][v],E.unshift(P),u=P.i-1,v--
}return E
}
}(this),B=H=0,k=Q;
k>=0?k>H:H>k;
B=k>=0?++H:--H){for(w=V[B],z=0,K=w.length;
K>z;
z++){if(P=w[z],P.i>0){for(O in N.m[P.i-1]){O=parseInt(O),x(P,O+1)
}}else{x(P,1)
}}F(B)
}return J=y(Q),W=0===U.length?1:N.g[Q-1],{password:U,guesses:W,guesses_log10:this.log10(W),sequence:J}
},estimate_guesses:function(w,k){var v,x,u;
return null!=w.guesses?w.guesses:(u=1,w.token.length<k.length&&(u=1===w.token.length?p:s),v={bruteforce:this.bruteforce_guesses,dictionary:this.dictionary_guesses,spatial:this.spatial_guesses,repeat:this.repeat_guesses,sequence:this.sequence_guesses,regex:this.regex_guesses,date:this.date_guesses},x=v[w.pattern].call(this,w),w.guesses=Math.max(x,u),w.guesses_log10=this.log10(w.guesses),w.guesses)
},bruteforce_guesses:function(v){var k,u;
return k=Math.pow(o,v.token.length),u=1===v.token.length?p+1:s+1,Math.max(k,u)
},repeat_guesses:function(k){return k.base_guesses*k.repeat_count
},sequence_guesses:function(v){var k,u;
return u=v.token.charAt(0),k="a"===u||"A"===u||"z"===u||"Z"===u||"0"===u||"1"===u||"9"===u?4:u.match(/\d/)?10:26,v.ascending||(k*=2),k*v.token.length
},MIN_YEAR_SPACE:20,REFERENCE_YEAR:2016,regex_guesses:function(v){var k,u;
if(k={alpha_lower:26,alpha_upper:26,alpha:52,alphanumeric:62,digits:10,symbols:33},v.regex_name in k){return Math.pow(k[v.regex_name],v.token.length)
}switch(v.regex_name){case"recent_year":return u=Math.abs(parseInt(v.regex_match[0])-this.REFERENCE_YEAR),u=Math.max(u,this.MIN_YEAR_SPACE)
}},date_guesses:function(v){var k,u;
return u=Math.max(Math.abs(v.year-this.REFERENCE_YEAR),this.MIN_YEAR_SPACE),k=365*u,v.has_full_year&&(k*=2),v.separator&&(k*=4),k
},KEYBOARD_AVERAGE_DEGREE:j(g.qwerty),KEYPAD_AVERAGE_DEGREE:j(g.keypad),KEYBOARD_STARTING_POSITIONS:function(){var u,k;
u=g.qwerty,k=[];
for(m in u){r=u[m],k.push(m)
}return k
}().length,KEYPAD_STARTING_POSITIONS:function(){var u,k;
u=g.keypad,k=[];
for(m in u){r=u[m],k.push(m)
}return k
}().length,spatial_guesses:function(L){var x,z,F,y,N,v,H,O,D,I,w,M,J,K,G,C,B,k;
for("qwerty"===(w=L.graph)||"dvorak"===w?(G=this.KEYBOARD_STARTING_POSITIONS,y=this.KEYBOARD_AVERAGE_DEGREE):(G=this.KEYPAD_STARTING_POSITIONS,y=this.KEYPAD_AVERAGE_DEGREE),N=0,x=L.token.length,B=L.turns,v=O=2,M=x;
M>=2?M>=O:O>=M;
v=M>=2?++O:--O){for(D=Math.min(B,v-1),H=I=1,J=D;
J>=1?J>=I:I>=J;
H=J>=1?++I:--I){N+=this.nCk(v-1,H-1)*G*Math.pow(y,H)
}}if(L.shifted_count){if(z=L.shifted_count,F=L.token.length-L.shifted_count,0===z||0===F){N*=2
}else{for(C=0,v=k=1,K=Math.min(z,F);
K>=1?K>=k:k>=K;
v=K>=1?++k:--k){C+=this.nCk(z+F,v)
}N*=C
}}return N
},dictionary_guesses:function(u){var k;
return u.base_guesses=u.rank,u.uppercase_variations=this.uppercase_variations(u),u.l33t_variations=this.l33t_variations(u),k=u.reversed&&2||1,u.base_guesses*u.uppercase_variations*u.l33t_variations*k
},START_UPPER:/^[A-Z][^A-Z]+$/,END_UPPER:/^[^A-Z]+[A-Z]$/,ALL_UPPER:/^[^a-z]+$/,ALL_LOWER:/^[^A-Z]+$/,uppercase_variations:function(z){var F,k,w,H,B,D,x,C,v,y,G,A;
if(A=z.token,A.match(this.ALL_LOWER)||A.toLowerCase()===A){return 1
}for(C=[this.START_UPPER,this.END_UPPER,this.ALL_UPPER],D=0,B=C.length;
B>D;
D++){if(y=C[D],A.match(y)){return 2
}}for(k=function(){var J,u,I,E;
for(I=A.split(""),E=[],u=0,J=I.length;
J>u;
u++){w=I[u],w.match(/[A-Z]/)&&E.push(w)
}return E
}().length,F=function(){var J,u,I,E;
for(I=A.split(""),E=[],u=0,J=I.length;
J>u;
u++){w=I[u],w.match(/[a-z]/)&&E.push(w)
}return E
}().length,G=0,H=x=1,v=Math.min(k,F);
v>=1?v>=x:x>=v;
H=v>=1?++x:--x){G+=this.nCk(k+F,H)
}return G
},l33t_variations:function(A){var G,k,w,I,C,F,x,D,v,y,H,B,z;
if(!A.l33t){return 1
}z=1,v=A.sub;
for(H in v){if(B=v[H],I=A.token.toLowerCase().split(""),G=function(){var J,u,E;
for(E=[],u=0,J=I.length;
J>u;
u++){w=I[u],w===H&&E.push(w)
}return E
}().length,k=function(){var J,u,E;
for(E=[],u=0,J=I.length;
J>u;
u++){w=I[u],w===B&&E.push(w)
}return E
}().length,0===G||0===k){z*=2
}else{for(x=Math.min(k,G),D=0,C=F=1,y=x;
y>=1?y>=F:F>=y;
C=y>=1?++F:--F){D+=this.nCk(k+G,C)
}z*=D
}}return z
}},f.exports=l
},{"./adjacency_graphs":1}],7:[function(f,g,e){var h;
h={estimate_attack_times:function(l){var j,p,k,m;
p={online_throttling_100_per_hour:l/(100/3600),online_no_throttling_10_per_second:l/10,offline_slow_hashing_1e4_per_second:l/10000,offline_fast_hashing_1e10_per_second:l/10000000000},j={};
for(k in p){m=p[k],j[k]=this.display_time(m)
}return{crack_times_seconds:p,crack_times_display:j,score:this.guesses_to_score(l)}
},guesses_to_score:function(k){var j;
return j=5,1000+j>k?0:1000000+j>k?1:100000000+j>k?2:10000000000+j>k?3:4
},display_time:function(p){var z,l,A,k,x,j,m,w,y,v;
return m=60,j=60*m,A=24*j,w=31*A,v=12*w,l=100*v,y=1>p?[null,"less than a second"]:m>p?(z=Math.round(p),[z,z+" second"]):j>p?(z=Math.round(p/m),[z,z+" minute"]):A>p?(z=Math.round(p/j),[z,z+" hour"]):w>p?(z=Math.round(p/A),[z,z+" day"]):v>p?(z=Math.round(p/w),[z,z+" month"]):l>p?(z=Math.round(p/v),[z,z+" year"]):[null,"centuries"],k=y[0],x=y[1],null!=k&&1!==k&&(x+="s"),x
}},g.exports=h
},{}]},{},[4])(4)
});
$.widget("xilinx.xilinxPasswordVerification",{options:{dataPasswordStrengthLabel:"password-strength-label",dataPasswordMatchLabel:"password-match-label",dataPasswordMatchYes:"password-match-yes",dataPasswordMatchNo:"password-match-no",dataPasswordWeakLabel:"password-weak-label",dataPasswordMediumLabel:"password-medium-label",dataPasswordGoodLabel:"password-good-label",dataPasswordStrongLabel:"password-strong-label",dataPasswordMinimumLabel:"password-minimum-label",dataPasswordMaximumLabel:"password-maximum-label"},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.password=a.element.find('[data-type="password"]');
a.passwordVerification=a.element.find('[data-type="verification"]');
a.passwordText=a.element.find('[data-function="password-text"]');
a.passwordVerificationText=a.element.find('[data-function="verification-text"]');
a.meter=a.element.find('[data-function="meter"]');
a.score=0;
a.password.on("input",function(h){var d=$(this).val().length;
if(d<=32&&d>=8){var b=zxcvbn($(this).val());
a.score=b.score;
var j=$(this).val();
var f=/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[-~!@#$%{}&*\\()_+=^<>?,;'.`\"/\\\\\\[\]|])(?!.*[^a-zA-Z0-9-~!@#$%{}&*\\()_+=^<>?,;'.`\"/\\\\\\[\]|])(.{8,})$/;
var c=j.match(f);
if(null!=c){if("4"==a.score){a.score=a.score+2
}else{if("3"==a.score){a.score=a.score+2
}}}var g;
switch(a.score){case 0:g=a.options.dataPasswordWeakLabel;
break;
case 1:g=a.options.dataPasswordWeakLabel;
break;
case 2:g=a.options.dataPasswordWeakLabel;
break;
case 3:g=a.options.dataPasswordMediumLabel;
break;
case 4:g=a.options.dataPasswordMediumLabel;
break;
case 5:g=a.options.dataPasswordGoodLabel;
break;
case 6:g=a.options.dataPasswordStrongLabel;
break
}}else{if(d<8){a.score=0;
g=a.options.dataPasswordMinimumLabel
}else{if(d>32){a.score=1;
g=a.options.dataPasswordMaximumLabel
}}}a.meter.attr("value",a.score);
a.passwordText.html(a.options.dataPasswordStrengthLabel+": "+g);
a.checkPasswordMatch()
});
a.passwordVerification.on("input",function(b){a.checkPasswordMatch()
})
},checkPasswordMatch:function(){var b=this;
var c=b.passwordVerification.val();
var a=b.password.val();
if(c!==a){b.passwordVerificationText.html(b.options.dataPasswordMatchLabel+': <span class="noMatch">'+b.options.dataPasswordMatchNo+"</span>")
}else{b.passwordVerificationText.html(b.options.dataPasswordMatchLabel+': <span class="match">'+b.options.dataPasswordMatchYes+"<span>")
}}});
$(document).ready(function(){if($('[data-component="password-verification"]').length>0){$('[data-component="password-verification"]').each(function(){$(this).xilinxPasswordVerification({dataPasswordStrengthLabel:$(this).data("password-strength-label"),dataPasswordMatchLabel:$(this).data("password-match-label"),dataPasswordMatchYes:$(this).data("password-match-yes"),dataPasswordMatchNo:$(this).data("password-match-no"),dataPasswordWeakLabel:$(this).data("password-weak-label"),dataPasswordMediumLabel:$(this).data("password-medium-label"),dataPasswordGoodLabel:$(this).data("password-good-label"),dataPasswordStrongLabel:$(this).data("password-strong-label"),dataPasswordMinimumLabel:$(this).data("password-minimum-label"),dataPasswordMaximumLabel:$(this).data("password-maximum-label")})
})
}});
$(document).ready(function(){if($('[data-component="form-currentdate"]').length){$('[data-component="form-currentdate"]').each(function(){$(this).find('[data-function="value-placeholder"]').replaceWith(window.Xilinx.formatDateOutput(new Date()))
})
}});
$.widget("xilinx.preventMultiSubmit",{_create:function(){var a=this;
a.element.on("submit",function(){$(this).find('input[type="submit"], button[type="submit"]').attr("disabled","disabled")
})
}});
$(document).ready(function(){if($("form").length>0){$("form").each(function(){$(this).preventMultiSubmit()
})
}});
$.widget("xilinx.xilinxFeedback",{options:{},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.options.url=location.href;
a.options.pageName=window.location.pathname.split("/").pop().replace(".html","");
a.element.find('input[type="hidden"][name="URL"]').val(a.options.url);
a.element.find('input[type="hidden"][name=":redirect"]').val(a.options.url);
a.element.find('input[type="hidden"][name="PAGE_TITLE"]').val(a.options.pageName);
a.element.find("button[data-feedback]").click(function(b){a.showForm();
if(!$(this).hasClass("selected")){$(this).addClass("selected").siblings().removeClass("selected");
if($(this).data("feedback")==="yes"){a.element.find('input[type="hidden"][name="IS_HELPFUL"]').val("Yes");
a.element.find('[data-function="prompt"]').text(a.element.find('[data-function="prompt"]').data("yes-prompt"));
a.element.find('textarea[name="COMMENT"]').prop("placeholder",a.element.find('textarea[name="COMMENT"]').data("yes-placeholder"))
}else{a.element.find('input[type="hidden"][name="IS_HELPFUL"]').val("No");
a.element.find('[data-function="prompt"]').text(a.element.find('[data-function="prompt"]').data("no-prompt"));
a.element.find('textarea[name="COMMENT"]').prop("placeholder",a.element.find('textarea[name="COMMENT"]').data("no-placeholder"))
}}});
a.element.find("form").submit(function(){var b=a.element.find('input[name="pageName"]').val(),c=a.element.find('input[type="hidden"][name="feedbackType"]').val(),d=a.element.find('input[type="radio"][name="feedbackResults"]:checked').val();
if(typeof ga!==undefined){ga("send","event",c,d,b)
}})
},showForm:function(){var a=this;
a.element.find("form").show()
},hideForm:function(){var a=this;
a.element.find(".btn[data-feedback]").removeClass("selected");
a.element.find("form").hide()
}});
$(document).ready(function(){if($('[data-component="xilinx-feedback"]').length>0){$('[data-component="xilinx-feedback"]').each(function(){$(this).xilinxFeedback()
})
}});
$.widget("xilinx.coveoFeaturedVideoGrid",$.xilinx.coveoVideoGrid,{options:{numberOfVideosOnInit:24,showFeaturedVideos:false,showFilters:true,noResultsLabel:"No Results To Show",categoryVideo:"Video Type",orTags:"",andTags:"",coveoRestUri:"",coveoAccessToken:"",coveoContext:""},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.filteredVideos=[];
a.filters=[];
a.videoTypesArray=[];
a.templates={grid:Handlebars.compile(window.Xilinx.templates.videoGrid),videoItem:Handlebars.compile(window.Xilinx.templates.videoGridItem)};
a.getCoveoVideos(function(c,b){if(c){return console.log("err",c)
}var d=a._processVideoOjects(b);
var e=function(f,g){a.filteredVideos=g;
a.filterByNewest()
};
a.element.find(".main-grid").empty().append(a.templates.grid({showFilters:a.options.showFilters}));
a._insertFeaturedVideos(d.featured);
a.element.find('[data-function="filter-placeholder"]').filterDropdown({rawItems:d.videos,callback:e,type:"videotype",dropdown:a.options.dropdownLabel,apply:a.options.applyLabel,cancel:a.options.cancelLabel,preSelectParam:"resultsTablePreSelect",buttons:true,categories:[{name:"Video Type",label:a.options.categoryVideo}]})
});
a.element.on("click",".filter-by-views",function(){a.filterByViews()
});
a.element.on("click",".filter-by-newest",function(){a.filterByNewest()
});
a.setUpViewMore()
},_processVideoOjects:function(k){var l=this;
var e={videos:[],featured:[]};
var d=[];
var j=[];
var g=[];
for(var f=0;
f<k.videos.length;
f++){var b=k.videos[f];
var c=window.Xilinx.millisecondsToTime(b.raw.xlnxvideoduration);
if(b.raw.xlnxvideocreationdate){var h=Array.isArray(b.raw.xlnxvideotype)?b.raw.xlnxvideotype.join():"";
var a={title:b.raw.xlnxvideotitle,imagePath:b.raw.xlnxvideoimage,length:window.Xilinx.timeString(c),link:b.uri,views:b.raw.xlnxvideoviews,created:window.Xilinx.formatDateOutput(new Date(b.raw.xlnxvideocreationdate)),createdDate:new Date(b.raw.xlnxvideocreationdate),"Video Type":h};
e.videos.push(a)
}}for(var f=0;
f<k.featuredVideos.length;
f++){var b=k.featuredVideos[f];
var c=window.Xilinx.millisecondsToTime(b.raw.xlnxvideoduration);
if(b.raw.xlnxvideocreationdate){var h=Array.isArray(b.raw.xlnxvideotype)?b.raw.xlnxvideotype.join():"";
var a={title:b.raw.xlnxvideotitle,imagePath:b.raw.xlnxvideoimage,length:window.Xilinx.timeString(c),link:b.uri,views:b.raw.xlnxvideoviews,created:window.Xilinx.formatDateOutput(new Date(b.raw.xlnxvideocreationdate)),createdDate:new Date(b.raw.xlnxvideocreationdate),"Video Type":h};
e.featured.push(a)
}}return e
},_insertFeaturedVideos:function(c){var a=this;
a.element.find('[data-component="loader"]').remove();
if(c&&Array.isArray(c)&&c.length>0){for(var b=0;
b<c.length;
b++){var d=a.templates.videoItem({video:c[b]});
d=$(d);
d.removeClass("hidden");
a.element.find('[data-function="featured-grid-container"]').append(d)
}}else{a.element.find('[data-function="featured-grid-container"]').append('<span class="col-xs-12">'+a.options.noResultsLabel+"</span>")
}},getCoveoVideos:function(c){var a=this;
var b={andTags:a.options.andTags,orTags:a.options.orTags,numberOfResults:500,coveoRestUri:a.options.coveoRestUri,coveoAccessToken:a.options.coveoAccessToken,coveoContext:a.options.coveoContext,featuredVideos:a.options.featuredVideoId,sortCriteria:"@xlnxvideocreationdate descending"};
window.Xilinx.coveoAndOrQueryBuilder(b,c)
}});
$(document).ready(function(){if($('[data-component="coveo-featured-video-grid"]').length>0){$('[data-component="coveo-featured-video-grid"]').each(function(){$(this).coveoFeaturedVideoGrid({coveoRestUri:$(this).data("coveo-rest-uri"),coveoAccessToken:$(this).data("coveo-access-token"),coveoContext:$(this).data("coveo-context"),andTags:$(this).data("and-tags"),orTags:$(this).data("or-tags"),noResultsLabel:$(this).data("no-results-label"),numberOfVideosOnInit:$(this).data("number-of-videos-on-init"),showFilters:$(this).data("show-filters"),featuredVideoId:$(this).data("featured-video-id"),showFeaturedVideos:$(this).data("show-featured-video"),dropdownLabel:$(this).data("dropdown-label"),applyLabel:$(this).data("apply-label"),cancelLabel:$(this).data("cancel-label"),categoryVideo:$(this).data("category-video")})
})
}});
$(document).ready(function(){if($('[data-component="featured-carousel"]').length>0){$('[data-component="featured-carousel"]').each(function(){$(this).featuredCarousel()
})
}});
$.widget("xilinx.featuredCarousel",{options:{},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.element.slick({slidesToShow:1,dots:true,speed:300,centerMode:true,placeholders:false,centerPadding:"200px",responsive:[{breakpoint:998,settings:{arrows:false,centerPadding:"80px"}},{breakpoint:768,settings:{arrows:false,centerPadding:"40px"}},{breakpoint:480,settings:{arrows:false,centerPadding:"0px"}}]})
}});
$(document).ready(function(){if($(".carousel").length){$(".carousel").carousel()
}});
(function(a){a.fn.xilinxBlog=function(b){this.each(function(){var d=a(this);
var e=a.extend({},a.fn.xilinxBlog.defaults,b);
if(!e.id){return
}f();
function f(){var g=e.baseUrl+e.nodeId+"/threads/";
if(typeof e.filter==="string"&&e.filter.length>0){g+="for/labels/text/"+e.filter+"/recent"
}else{g+="recent"
}a.ajax({url:g,dataType:"jsonp",data:{xslt:"json.xsl","restapi.format_detail":"full_list_element","restapi.response_style":"view","message_viewer.topic_sort_order":"topic_start_date",page_size:e.pageSize},success:function(n){if(!n||!n.response||n.response.status!=="success"){console.log("** ERROR: Failure to get LITHIUM blog definitions")
}var l=a("<div><ul></ul></div>");
if(e.height){l.css({"overflow-y":"auto",height:e.height+"px","margin-right":"-15px"})
}var m=l.children("ul");
for(var j=n.response.threads.thread.length;
j>0;
j--){var k=n.response.threads.thread[j-1];
var h=a("<li><ul></ul></li>");
h.children("ul").append('<li class="blog-title"><a href="'+k.messages.topic.view_href+'">'+c(k.messages.topic.subject.$,e.subjectMaxWords,"...")+"</a></li>");
h.children("ul").append('<li class="info"><span class="fa fa-calendar-o"></span>'+window.Xilinx.formatDateOutput(k.messages.topic.post_time.view_date)+'<span class="fa fa-eye"></span>'+e.viewsLabel+": "+k.messages.topic.views.count.$+"</li>");
m.prepend(h)
}if(typeof e.filter==="string"&&e.filter.length>0){l.append('<a class="viewMore" href="'+n.response.threads.thread[0].board.view_href+"/label-name/"+e.filter+'">'+e.viewMoreLabel+"</a>")
}else{l.append('<a class="viewMore" href="'+n.response.threads.thread[0].board.view_href+'">'+e.viewMoreLabel+"</a>")
}d.find('[data-component="loader"]').remove();
d.find(".blog-wrapper").append(l)
}})
}});
function c(g,f,e){var j="";
var d=[];
d=g.split(" ");
if(d.length<f){return g
}for(var h=0;
h<f;
h++){j+=d[h]+" "
}j=j.substring(0,j.length-1);
if(e){j+="<nbsp>"+e
}return j
}return this
};
a.fn.xilinxBlog.defaults={baseUrl:"https://forums.xilinx.com/xlnx/restapi/vc/boards/id/",pageSize:10,filter:"zynq",nodeId:"Xcell",height:null,subjectMaxWords:8,viewMoreLabel:"View More",viewsLabel:"Views",authorLabel:"Author"}
}(jQuery));
$(document).ready(function(){$(".xilinxBlog").each(function(){var b=$(this).find(".blog-wrapper");
var a={id:b.attr("id"),filter:b.data("filter"),nodeId:b.data("node-id"),pageSize:b.data("page-size"),subjectMaxWords:b.data("subject-max-words"),viewMoreLabel:b.data("view-more-label"),viewsLabel:b.data("views-label"),authorLabel:b.data("author-label"),height:b.data("height")};
$(this).xilinxBlog(a)
})
});
$.widget("xilinx.DocWizardCoveo",{options:{boardMap:{},bkDocWizard:false,boardTitle:"",preSelectTags:"{}",sortList:null,searchLabel:"New Search",coveoOrgId:"",coveoAccessToken:"",coveoContext:"",noResultsText:"No results found.",preSelectTags:"{}"},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var j=this;
Coveo.SearchEndpoint.configureCloudV2Endpoint(j.options.coveoOrgId,j.options.coveoAccessToken,undefined,{queryStringArguments:{context:'{"xlnxsite":"'+j.options.coveoContext+'"}'}});
j.element.find("#search").coveo("init");
var k=window.Xilinx.getURLParameter("resultsTablePreSelect");
var h=JSON.stringify(j.options.preSelectTags);
var f=JSON.parse(h);
if(k){var g=[];
var b=k.split(",");
for(var c=0;
c<b.length;
c++){var e=b[c].split(":");
var a=e[0];
var d=e[1];
if(g.indexOf(a)==-1){if(f.hasOwnProperty(a)){delete f[a]
}g.push(a)
}if(d!=="SeeAll"){if(f.hasOwnProperty(a)){f[a].push(d)
}else{f[a]=[d]
}}}}j.element.on("afterInitialization",function(o,m){if(Object.keys(f).length>0){for(var n in f){if(f.hasOwnProperty(n)){var r=f[n];
var p=j.element.find('.CoveoFacet[data-id="'+n+'"]');
if(p.length>0){var l=p.coveo("get");
l.selectMultipleValues(r)
}}}}});
j.map=j.options.boardMap;
j.versions=j.element.find("#toolsVersions");
j.element.on("click",".pulldown a",function(l){$(this).parents("li").addClass("active").siblings().removeClass("active")
});
j.element.on("click","#boardRevision li a",function(p){j.versions.empty();
var m=null,o=j.element.find("#boardRevision li.active").data("value");
for(var n=0;
n<j.map.length;
n++){if(j.map[n]&&j.map[n].boardValue===o){m=n;
break
}}if(m!==null){var l=j.map[m];
$.each(l.versions,function(r,s){j.versions.append($("<li></li>").data("value",s.versionValue).data("label",s.versionText).html('<a href="#"><span class="fa fa-circle-thin"></span>'+s.versionText+"</a>"))
})
}j.versions.children("li").first().addClass("active")
});
window.Xilinx.coveoNoResults(j.element,j.options.noResultsText);
j.element.find("#search").on("doneBuildingQuery",function(o,l){var m=j.getCurrentValue();
if(!m.archived){l.queryBuilder.advancedExpression.add('(@xlnxarchived=="false")')
}var n=j.generateBKBRTV(j.options.boardTitle,m.fileVersion,m.toolsVersion);
l.queryBuilder.advancedExpression.add(j.generateOrSearch(j.options.boardTitle,m.fileVersion,"xlnxbkbrtv",n));
l.queryBuilder.numberOfResults=500
});
j.element.on("click","#showDocs",function(l){j.element.find("#search").coveo("executeQuery")
});
j.element.find("#boardRevision").find("a").first().click()
},generateOrSearch:function(d,a,f,e){var b=this;
var c="";
var g=e.split(",");
c+="(";
g=g.map(function(k){if(k==="Valid for All Versions"){k=b.generateBKBRTV(d,a,"Valid for All Versions")
}var h="==";
if(k.includes("*")){h="*="
}var j="@"+f+h+'"'+k+'"';
return j
});
c+=g.join(" OR ");
c+=")";
return c
},generateBKBRTV:function(d,b,a){var c="";
c+=d;
c+="|";
c+=b;
c+="|";
if(!a){a="*"
}c+=a;
return c
},getCurrentValue:function(){var a=this;
var c=a.element.find("#boardRevision").children("li.active").data("value");
var d=a.element.find("#toolsVersions").children("li.active").data("value");
var b=true;
if(!d){d=a.element.find("#toolsVersions").children("li").first().data("value")
}if(d==="MostRecentDocs"){d=false;
b=false
}else{d+=",Valid for All Versions"
}return{fileVersion:c,toolsVersion:d,archived:b}
}});
$(document).ready(function(){if($('[data-component="bk-doc-wizard-coveo"]').length){$('[data-component="bk-doc-wizard-coveo"]').each(function(){var b=$(this);
var a={boardMap:b.data("board-map"),boardTitle:b.data("board-title"),bkDocWizard:b.data("bk-doc-wizard"),preSelectTags:$(this).data("preselect-tags"),coveoOrgId:b.data("coveo-organization-id"),coveoAccessToken:b.data("coveo-access-token"),coveoContext:b.data("coveo-context"),noResultsText:b.data("no-results-text")};
b.DocWizardCoveo(a)
})
}});
$.widget("xilinx.myProfile",{options:{title:"My Profile",editProfileLabel:"Edit Profile"},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.template=Handlebars.compile(window.Xilinx.templates.myProfile);
a._getProfile(function(d,c){if(!d){var b={imgSource:c.image,name:c.firstName+" "+c.lastName,title:a.options.title,editProfileLabel:a.options.editProfileLabel};
a.element.replaceWith(a.template(b))
}})
},_getProfile:function(b){var a=this;
$.xilinxProfileAjax({url:"/bin/protected/myprofile",type:"get",success:function(c){b(null,c)
},error:function(c){b("AJAX Error",c);
b(c)
},cache:false})
}});
$(document).ready(function(){if($('[data-component="myProfile-profile"]').length>0){$('[data-component="myProfile-profile"]').each(function(){$(this).myProfile({title:$(this).data("title"),editProfileLabel:$(this).data("edit-profile-label")})
})
}});
if(typeof window.Xilinx==="undefined"){window.Xilinx={}
}if(typeof window.Xilinx.templates==="undefined"){window.Xilinx.templates={}
}window.Xilinx.templates.myProfile=['<div class="profile-summary">',"<h1>","{{title}}","</h1>",'<img src="{{imgSource}}" />',"<span data-name>","{{name}}","</span>",'<a href="/myprofile/edit-profile.html">',"{{editProfileLabel}}","</a>","</div>"].join("\n");
(function(a){a.fn.xilinxNewsTicker=function(b){if(typeof b==="undefined"){b={}
}this.each(function(){var h=a(this);
if(a(h.data("max-list-length")).length){b.maxListLength=h.data("max-list-length")
}if(a(h.data("previous-label")).length){b.previousLabel=h.data("previous-label")
}if(a(h.data("next-label")).length){b.nextLabel=h.data("next-label")
}if(a(h.data("timer")).length){b.timer=h.data("timer")
}var o=h.children("ul");
var c=a.extend({},a.fn.xilinxNewsTicker.defaults,b);
var f=o.children("li");
var e=f.length;
var t=0;
var l=(f>c.maxListLength)?f:c.maxListLength;
var p=false;
var d;
u();
if(c.timer>0){n();
if(c.pauseHover){m()
}}function u(){h.css({overflow:"hidden",position:"relative"});
o.css({position:"absolute"});
s();
h.after('<button id="previousButton"><span class="fa fa-chevron-up"></span>'+c.previousLabel+"</button>");
h.siblings("#previousButton").click(function(){k(c.maxListLength)
});
h.after('<button id="nextButton">'+c.nextLabel+'<span class="fa fa-chevron-down"></span></button>');
h.siblings("#nextButton").click(function(){j(c.maxListLength)
})
}function s(){var w=50;
for(var v=t;
v<t+c.maxListLength;
v++){w+=a(f[v]).outerHeight()
}h.css("height",w)
}function j(w){if(p){return
}p=true;
var x=600;
if(w>1){x=x/w
}function v(){var z=((l+1)>e)?0:l+1;
var y=o.children("li").first().clone();
o.append(y);
var A=-(o.children("li").eq(z).outerHeight());
o.animate({top:A},x,function(){o.children("li").first().remove();
o.css("top",0);
p=false;
if(w>1){w--;
v()
}})
}v()
}function k(w){if(p){return
}p=true;
var x=600;
if(w>1){x=x/w
}function v(){var A=((l-1)<0)?e:l-1;
var y=o.children("li").last().clone();
o.prepend(y);
var z=-(o.children("li").eq(A).outerHeight());
o.animate({bottom:z},x,function(){o.children("li").last().remove();
o.css("top",0);
p=false;
if(w>1){w--;
v()
}})
}v()
}function n(){d=setInterval(r,c.timer)
}function r(){j(1)
}function g(){if(d){clearInterval(d)
}}function m(){h.on("mouseenter",function(){g()
});
h.siblings("button").on("mouseenter",function(){g()
});
h.on("mouseleave",function(){n()
});
h.siblings("button").on("mouseleave",function(){n()
})
}});
return this
};
a.fn.xilinxNewsTicker.defaults={maxListLength:5,previousLabel:"Up",nextLabel:"Down",timer:3000,pauseHover:true}
}(jQuery));
$(document).ready(function(){if($(".xilinxCommunityFeed").length>0){var a=new CommunityFeed();
a.init()
}});
function CommunityFeed(b){var a=this;
a.baseUrl="https://forums.xilinx.com/xlnx/restapi/vc";
a.categoriesUrl="/categories/id/XlnxProd";
a.categories=[];
a.boards={};
a.boardIndex={};
if($(".xilinxCommunityFeed .categoryFilter").data("filter")){a.filterCategories=true;
a.categoryFilter=$(".xilinxCommunityFeed .categoryFilter").data("filter").split(",")
}}CommunityFeed.prototype.init=function(){var a=this;
$.ajax({url:a.baseUrl+a.categoriesUrl,dataType:"jsonp",data:{xslt:"json.xsl","restapi.format_detail":"full_list_element","restapi.response_style":"view"},success:function(f){if(!f||!f.response||f.response.status!=="success"){return
}for(var d=f.response.category.categories.category.length;
d>0;
d--){var e=f.response.category.categories.category[d-1];
a.categories.push(e);
a.boards[e.id.$]={id:e.id.$,title:e.title.$,href:e.view_href,shortTitle:e.short_title.$,apiLink:e.href,boards:[]}
}b()
}});
function b(){var g=0;
for(var f in a.boards){if(a.boards.hasOwnProperty(f)){g++;
function d(h){var j=h.id;
$.ajax({url:a.baseUrl+a.boards[j].apiLink+"/boards/nested",data:{xslt:"json.xsl","restapi.format_detail":"full_list_element","restapi.response_style":"view"},dataType:"jsonp",success:function(m){if(!m||!m.response||m.response.status!=="success"){return
}for(var k=m.response.boards.board.length;
k>0;
k--){var l=m.response.boards.board[k-1];
var n={id:l.id.$,href:l.view_href,title:l.title.$,shortTitle:l.short_title.$};
a.boards[j].boards.push(n);
a.boardIndex[l.id.$]={board:n,category:h}
}e()
}})
}d(a.boards[f])
}}function e(){g--;
if(g===0){c()
}}}function c(){$.ajax({url:a.baseUrl+"/threads/recent",data:{xslt:"json.xsl",page_size:50,"restapi.format_detail":"full_list_element","restapi.response_style":"view","message_viewer.topic_sort_order":"topic_start_date"},dataType:"jsonp",success:function(d){if(!d||!d.response||d.response.status!=="success"){return
}var f=$(".xilinxCommunityFeed ul");
var j=0;
for(var e=d.response.threads.thread.length;
e>0;
e--){var m=$('<li class="news-item"><ol></ol></li>');
var n=d.response.threads.thread[e-1],k=n.messages.topic.subject.$,l=n.messages.topic.view_href,h=n.messages.topic.board.href.substring(11),g=0;
if(a.boardIndex[h]){if(k.length>0||l.length>0){g++;
if(g<=25){m.find("ol").prepend('<li><a href="'+l+'">'+k+"</a></li>");
m.find("ol").prepend('<li><a href="'+a.boardIndex[h].board.href+'"><span>'+a.boardIndex[h].board.title+"</span></a></li>");
m.find("ol").prepend('<li><a href="'+a.boardIndex[h].category.href+'"><span>'+a.boardIndex[h].category.title+"</span></a></li>");
f.append(m)
}}}}$("#xilinxCommunityFeed-ticker").xilinxNewsTicker()
}})
}};
if(typeof window.Xilinx==="undefined"){window.Xilinx={}
}if(typeof window.Xilinx.templates==="undefined"){window.Xilinx.templates={}
}window.Xilinx.templates.browseDocumentation=['<div class="row">','<div class="col-sm-3">','<div class="panel" data-column-type="productType">',"<h3>{{panel1.label}}</h3>","<ul>","{{#each panel1.items}}","<li>",'<a class="disableHover" data-product-type="{{this.dataProductType}}" data-coveo-label="{{this.dataCoveoLabel}}" href="#{{this.href}}">',"{{this.label}}","</a>","</li>","{{/each}}","</ul>","</div>","</div>",'<div class="col-sm-3">','<div class="panel" data-column-type="second-panel">',"</div>","</div>",'<div class="col-sm-3">','<div class="panel" data-column-type="third-panel">',"</div>","</div>",'<div class="col-sm-3">','<div class="panel" data-column-type="fourth-panel">',"</div>","</div>","</div>"].join("\n");
window.Xilinx.templates.browseDocumentationSecondPanel=["<h3>{{label}}</h3>","<ul>","{{#each items}}","<li>",'<a class="disableHover" data-product-group="{{this.dataProductGroup}}" href="#{{this.href}}">',"{{this.label}}","</a>","</li>","{{/each}}","</ul>"].join("\n");
window.Xilinx.templates.browseDocumentationThirdPanel=["<h3>{{label}}</h3>","<ul>","{{#each items}}","<li>",'<a class="disableHover" data-product="{{this.title}}" data-url="{{this.url}}" data-index="{{this.index}}" href="#{{this.href}}">',"{{this.title}}","</a>","</li>","{{/each}}","</ul>"].join("\n");
window.Xilinx.templates.browseDocumentationFourthPanel=["<h3>{{label}}</h3>","<ul>","{{#each items}}","<li>",'<a class="disableHover" href="{{this.href}}">',"{{this.value}} ({{this.numberOfResults}})","</a>","</li>","{{/each}}","{{#each JSONItems}}","<li>",'<a class="disableHover" href="{{this.href}}">',"{{this.value}}","</a>","</li>","{{/each}}","{{#if viewAll}}","<li>",'<a class="disableHover" href="{{viewAll}}">',"View All","</a>","</li>","{{/if}}","</ul>"].join("\n");
$.widget("xilinx.coveoBrowseDocumentation",{options:{coveoRestUri:"",coveoAccessToken:"",coveoContext:"",panel1Label:"",viewAllLabel:"",json:{}},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.templates={container:Handlebars.compile(window.Xilinx.templates.browseDocumentation),secondPanel:Handlebars.compile(window.Xilinx.templates.browseDocumentationSecondPanel),thirdPanel:Handlebars.compile(window.Xilinx.templates.browseDocumentationThirdPanel),fourthPanel:Handlebars.compile(window.Xilinx.templates.browseDocumentationFourthPanel)};
a.generateFirstPanel();
a.element.on("click",'[data-column-type="productType"] a',function(){var b=$(this).parent("li");
b.siblings().removeClass("active");
b.addClass("active");
a.generateSecondPanel($(this).data("product-type"))
});
a.element.on("click",'[data-column-type="second-panel"] a',function(){var b=$(this).parent("li");
b.siblings().removeClass("active");
b.addClass("active");
a.generateThirdPanel(a.element.find('[data-column-type="productType"]').find("li.active").children("a").data("product-type"),$(this).data("product-group"))
});
a.element.on("click",'[data-column-type="third-panel"] a',function(){var b=$(this).parent("li");
if(b.hasClass("active")){return
}b.siblings().removeClass("active");
b.addClass("active");
a.generateFourthPanel(a.element.find('[data-column-type="productType"]').find("li.active").children("a").data("product-type"),a.element.find('[data-column-type="second-panel"]').find("li.active").children("a").data("product-group"),$(this).data("product"),b.index())
})
},generateFirstPanel:function(){var a=this;
var b={panel1:{label:a.options.panel1Label,items:[]}};
for(var c in a.options.json.productTypes){if(a.options.json.productTypes.hasOwnProperty(c)){b.panel1.items.push({href:a._cleanHref(c),label:c,dataProductType:c,dataCoveoLabel:a.options.json.productTypes[c].productLabel})
}}a.element.append(a.templates.container(b));
a.generateSecondPanel()
},generateSecondPanel:function(e){var a=this;
if(typeof e==="undefined"){var b=a.element.find('[data-column-type="productType"]').children("ul").children("li").first();
b.siblings().removeClass("active");
b.addClass("active");
e=b.children("a").data("product-type")
}var c=a.element.find('[data-column-type="second-panel"]');
c.empty();
var d={label:a.options.json.productTypes[e].labels.panel2Label,items:[]};
for(var f in a.options.json.productTypes[e].items){if(a.options.json.productTypes[e].items.hasOwnProperty(f)){d.items.push({href:a._cleanHref(f),label:f,dataProductGroup:f});
a.element.find('[data-column-type="second-panel"]')
}}c.append(a.templates.secondPanel(d));
a.generateThirdPanel()
},generateThirdPanel:function(d,a){var j=this;
if(typeof d==="undefined"){var f=j.element.find('[data-column-type="productType"]').children("ul").children("li.active").first();
d=f.children("a").data("product-type")
}if(typeof a==="undefined"){var h=j.element.find('[data-column-type="second-panel"]').children("ul").children("li").first();
h.siblings().removeClass("active");
h.addClass("active");
a=h.children("a").data("product-group")
}var b=j.element.find('[data-column-type="third-panel"]');
b.empty();
var g={label:j.options.json.productTypes[d].labels.panel3Label,items:[]};
for(var e=0;
e<j.options.json.productTypes[d].items[a].items.length;
e++){var c=j.options.json.productTypes[d].items[a].items[e];
c.href=j._cleanHref(c.title);
c.index=e;
g.items.push(c)
}b.append(j.templates.thirdPanel(g));
j.generateFourthPanel(d,a)
},generateFourthPanel:function(f,a,m,h){var n=this;
if(typeof m==="undefined"){var g=n.element.find('[data-column-type="third-panel"]').children("ul").children("li").first();
g.siblings().removeClass("active");
g.addClass("active");
m=g.children("a").data("product");
h=0
}var c=n.element.find('[data-column-type="fourth-panel"]');
var k={label:n.options.json.productTypes[f].labels.panel4Label,items:[],JSONItems:[]};
if(n.options.json.productTypes[f].items[a].items[h]&&typeof n.options.json.productTypes[f].items[a].items[h].items!=="undefined"){for(var e=0;
e<n.options.json.productTypes[f].items[a].items[h].items.length;
e++){var d=n.options.json.productTypes[f].items[a].items[h].items[e];
k.JSONItems.push({value:d.title,href:d.url})
}l(k)
}else{var j=n._generateQuery(n.options.json.productTypes[f].coveo.coveoName,n.options.json.productTypes[f].coveo.productLabel,n.options.json.productTypes[f].items[a].items[h].coveoName);
var b=n.element.find('[data-column-type="third-panel"]').find("li.active a").data("url");
n._doAjax(j,function(s,r){for(var p=0;
p<r.length;
p++){var o=r[p];
o.href=b.slice(0,b.indexOf("#"))+"?resultsTablePreSelect=xlnxdocumenttypes:"+o.value+b.slice(b.indexOf("#"));
k.items.push(o)
}k.viewAll=b.slice(0,b.indexOf("#"))+"?resultsTablePreSelect=xlnxdocumenttypes:SeeAll"+b.slice(b.indexOf("#"));
l(k)
})
}function l(o){c.empty();
c.append(n.templates.fourthPanel(o))
}},_cleanHref:function(a){return a.replace(/[^a-zA-Z0-9-_]/g,"")
},_generateQuery:function(c,a,b){var d=new Coveo.QueryBuilder();
b=window.Xilinx.coveoPlusReplace(b);
d.advancedExpression.addFieldExpression("@xlnxdocumentclass","==",["Document"]);
d.advancedExpression.addFieldExpression("@xlnxarchived","==",["false"]);
d.advancedExpression.addFieldExpression("@xlnxproducttypes","==",[c]);
d.advancedExpression.addFieldExpression("@xlnx"+a,"==",[b]);
d.fieldsToInclude=["xlnxdocumentid"];
d.groupByRequests=[{field:"@xlnxdocumenttypes",completeFacetWithStandardValues:true,maximumNumberOfValues:50,sortCriteria:"AlphaAscending"}];
d.enableQuerySyntax=true;
d.firstResult=0;
d.numberOfResults=0;
return d
},_doAjax:function(d,e){var b=this;
var a=new Coveo.SearchEndpoint({restUri:b.options.coveoRestUri,accessToken:b.options.coveoAccessToken,queryStringArguments:{context:'{"xlnxsite":"'+b.options.coveoContext+'"}'}});
var c=d.build();
a.search(c).done(function(f){if(f.queryError){e(f.message)
}else{if(Array.isArray(f.groupByResults)&&f.groupByResults.length&&f.groupByResults[0].values){e(null,f.groupByResults[0].values)
}else{e(null,[])
}}})
}});
$(document).ready(function(){if($('[data-component="coveo-browse-documentation"]').length>0){$('[data-component="coveo-browse-documentation"]').each(function(){$(this).coveoBrowseDocumentation({coveoRestUri:$(this).data("coveo-rest-uri"),coveoAccessToken:$(this).data("coveo-access-token"),coveoContext:$(this).data("coveo-context"),panel1Label:$(this).data("panel1-label"),viewAllLabel:$(this).data("view-all-label"),json:$(this).data("json")})
})
}});
$.widget("xilinx.subscriptions",{options:{},init:function(b){var a=this
},_create:function(){var a=this;
a._getSubscription(function(b,c){if(c.emailOpt){a.element.find('input[name="emailOpt"][value="'+c.emailOpt+'"]').prop("checked",true)
}if(c.emailOptDocalerts){a.element.find('input[name="emailOptDocalerts"][value="'+c.emailOptDocalerts+'"]').prop("checked",true)
}if(c.emailOptPr){a.element.find('input[name="emailOptPr"][value="'+c.emailOptPr+'"]').prop("checked",true)
}if(c.language){a.element.find('input[name="language"][value="'+c.language+'"]').prop("checked",true)
}if(c.subscriptions){for(cat in c.subscriptions){if(c.subscriptions.hasOwnProperty(cat)){a._preSelect(cat,c.subscriptions[cat])
}}}});
a.bindCheckboxes()
},bindCheckboxes:function(){var a=this;
a.element.find(".panel").each(function(){var b=$(this);
b.on("click",'.panel-body .checkbox-wrapper input[type="checkbox"], .panel-body .checkbox-wrapper label',function(){if($(this).is(":checked")){b.find(".panel-body .tags").find('input[type="checkbox"]').each(function(){$(this).prop("checked",true)
})
}else{b.find(".panel-body .tags").find('input[type="checkbox"]').each(function(){$(this).prop("checked",false)
})
}});
b.on("click",'.panel-body .tags input[type="checkbox"]',function(c){a._checkSelectAll(b)
})
})
},_getSubscription:function(b){var a=this;
$.xilinxProfileAjax({url:"/bin/protected/myprofile/subscriptions",type:"get",success:function(c){b(null,c.subscriptions)
},error:function(c){b("AJAX Error",c);
b(c)
},cache:false})
},_preSelect:function(a,e){var c=this;
var b=c.element.find('[data-function-container="'+a+'"]');
for(var d=0;
d<e.length;
d++){b.find('input[value="'+e[d]+'"]').prop("checked",true)
}c._checkSelectAll(b.parents(".panel"))
},_checkSelectAll:function(a){var b=this;
if(a.find(".panel-body .tags").find("input:checkbox:not(:checked)").length===0){a.find('.panel-body .checkbox-wrapper input[type="checkbox"]').prop("checked",true)
}else{a.find('.panel-body .checkbox-wrapper input[type="checkbox"]').prop("checked",false)
}}});
$(document).ready(function(){if($('[data-component="myProfile-subscriptions"]').length>0){$('[data-component="myProfile-subscriptions"]').each(function(){$(this).subscriptions()
})
}});
if(typeof window.Xilinx==="undefined"){window.Xilinx={}
}if(typeof window.Xilinx.templates==="undefined"){window.Xilinx.templates={}
}window.Xilinx.templates.loungesTable=['<div class="container-fluid">','<div class="row">','<div class="col-sm-3">','<div data-function="lounge-facets-type"></div>','<div data-function="lounge-facets-architecture"></div>','<div data-function="lounge-facets-product"></div>',"</div>",'<div class="col-sm-9">',"<table>","<thead>","<tr>","<th>{{secureSiteLabel}}</th>","<th>{{expirationLabel}}</th>","<th>Facet Type</th>","<th>Facet Architecture</th>","<th>Facet Product</th>","</tr>","</thead>","<tbody>","{{#each lounges}}","<tr>","<td>",'<a href="{{groupHomePage}}">{{groupName}}</a>',"</td>","<td>","{{#if renewUrl}}",'<a href="{{renewUrl}}">{{daysLeft}}</a>',"{{/if}}","</td>","<td>","{{type}}","</td>","<td>","{{architecture}}","</td>","<td>","{{product}}","</td>","</tr>","{{/each}}","</tbody>","</table>","</div>","</div>","</div>"].join("\n");
window.Xilinx.templates.loungesFacet=['<div class="coveo-facet-column">','<div class="CoveoFacet coveo-active">','<div class="coveo-facet-header">','<div class="coveo-facet-header-title-section">','<div title="Document Type" class="coveo-facet-header-title">',"{{facetName}}","</div>","</div>","</div>",'<ul class="coveo-facet-values">',"{{#each facets}}",'<li class="coveo-facet-value coveo-facet-selectable coveo-selected {{#if this.checked}}checked{{/if}}" data-facet-name="{{facetName}}">','<label class="coveo-facet-value-label">','<div class="coveo-facet-value-label-wrapper">','<div class="coveo-facet-value-checkbox" tabindex="0">','<svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg" class="coveo-facet-value-checkbox-svg"><g class="coveo-more-svg" fill="none"><path d="m10.083 4.583h-3.666v-3.666c0-.524-.393-.917-.917-.917s-.917.393-.917.917v3.667h-3.666c-.524-.001-.917.392-.917.916s.393.917.917.917h3.667v3.667c-.001.523.392.916.916.916s.917-.393.917-.917v-3.666h3.667c.523 0 .916-.393.916-.917-.001-.524-.394-.917-.917-.917z"></path></g><g class="coveo-line-svg" fill="none"><path d="m10 6.5h-9c-.552 0-1-.448-1-1 0-.552.448-1 1-1h9c .552 0 1 .448 1 1 0 .552-.448 1-1 1z"></path></g><g class="coveo-exclusion-svg" fill="none"><path d="m9.233 7.989-2.489-2.489 2.489-2.489c.356-.356.356-.889 0-1.244-.356-.356-.889-.356-1.244 0l-2.489 2.489-2.489-2.489c-.356-.356-.889-.356-1.244 0-.356.356-.356.889 0 1.244l2.489 2.489-2.489 2.489c-.356.356-.356.889 0 1.244.356.356.889.356 1.244 0l2.489-2.489 2.489 2.489c.356.356.889.356 1.244 0 .356-.355.356-.889 0-1.244z"></path></g><g class="coveo-hook-svg" fill="none"><path d="m10.252 2.213c-.155-.142-.354-.211-.573-.213-.215.005-.414.091-.561.24l-4.873 4.932-2.39-2.19c-.154-.144-.385-.214-.57-.214-.214.004-.415.09-.563.24-.148.147-.227.343-.222.549.005.207.093.4.249.542l2.905 2.662c.168.154.388.239.618.239h.022.003c.237-.007.457-.101.618-.266l5.362-5.428c.148-.148.228-.344.223-.551s-.093-.399-.248-.542z"></path></g></svg>',"</div>",'<span class="coveo-facet-value-count">{{this.count}}</span>','<span class="coveo-facet-value-caption" title="{{this.name}}" data-original-value="{{this.name}}">',"{{this.name}}","</span>","</div>","</label>","</li>","{{/each}}","</ul>","</div>","</div>"].join("\n");
$.widget("xilinx.lounges",{options:{secureSiteLabel:"Secure Site",expirationLabel:"Expiration (Click to Renew)",loungeType:"secureSite",language:"en",facetTypeLabel:"Type",facetArchitectureLabel:"Architecture",facetProductLabel:"Product"},init:function(b){var a=this;
a.loungeItems=[];
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.template=Handlebars.compile(window.Xilinx.templates.loungesTable);
a.facetTemplate=Handlebars.compile(window.Xilinx.templates.loungesFacet);
a.clickedFacets=[];
a._getLoungeItems(function(c,b){a.loungeItems=b.lounges;
a._addLoungeItems();
a._drawFacets();
a._addLoungeFacets();
a._preSelect()
})
},_getLoungeItems:function(b){var a=this;
$.xilinxProfileAjax({url:"/bin/protected/myprofile/lounges",type:"get",data:{loungeType:a.options.loungeType},success:function(c){b(null,c)
},error:function(c){b("AJAX Error")
},cache:false})
},_getCurrentItems:function(){var a=this;
var b=[];
a.dataTables.rows({filter:"applied"}).data().each(function(c){b.push({type:c[2],architecture:c[3],product:c[4]})
});
return b
},_drawFacets:function(){var l=this;
var f=l._getCurrentItems();
l.facetsType=[];
var h={};
l.facetsArchitecture=[];
var e={};
l.facetsProduct=[];
var d={};
for(var c=0;
c<f.length;
c++){var k=f[c];
if(k.type&&l.facetsType.indexOf(k.type)===-1){l.facetsType.push(k.type);
h[k.type]=1
}else{h[k.type]++
}if(k.architecture){if(!Array.isArray(k.architecture)){k.architecture=k.architecture.split(",")
}for(var b=0;
b<k.architecture.length;
b++){var g=k.architecture[b];
if(l.facetsArchitecture.indexOf(g)===-1){l.facetsArchitecture.push(g);
e[g]=1
}else{e[g]++
}}}if(k.product){if(!Array.isArray(k.product)){k.product=k.product.split(",")
}for(var b=0;
b<k.product.length;
b++){var a=k.product[b];
if(l.facetsProduct.indexOf(a)===-1){l.facetsProduct.push(a);
d[a]=1
}else{d[a]++
}}}}if(l.options.loungeType==="earlyAccess"){if(l.facetsArchitecture.length>0){l.facetsArchitecture=l.facetsArchitecture.map(function(j){var m=false;
if(l.clickedFacets.indexOf(j)>-1){m=true
}return{name:j,count:e[j],checked:m}
});
l.element.find('[data-function="lounge-facets-architecture"]').empty().append(l.facetTemplate({facetName:l.options.facetArchitectureLabel,facets:l.facetsArchitecture}))
}if(l.facetsProduct.length>0){l.facetsProduct=l.facetsProduct.map(function(m){var j=false;
if(l.clickedFacets.indexOf(m)>-1){j=true
}return{name:m,count:d[m],checked:j}
});
l.element.find('[data-function="lounge-facets-product"]').empty().append(l.facetTemplate({facetName:l.options.facetProductLabel,facets:l.facetsProduct}))
}}else{if(l.facetsType.length>0){l.facetsType=l.facetsType.map(function(j){var m=false;
if(l.clickedFacets.indexOf(j)>-1){m=true
}return{name:j,count:h[j],checked:m}
});
l.element.find('[data-function="lounge-facets-type"]').empty().append(l.facetTemplate({facetName:l.options.facetTypeLabel,facets:l.facetsType}))
}}},_addLoungeFacets:function(){var a=this;
a.element.on("click",'[data-function="lounge-facets-type"] li, [data-function="lounge-facets-architecture"] li, [data-function="lounge-facets-product"] li',function(){if($(this).hasClass("checked")){$(this).removeClass("checked")
}else{$(this).addClass("checked")
}var h=a.element.find('[data-function="lounge-facets-type"] li.checked');
var c=a.element.find('[data-function="lounge-facets-architecture"] li.checked');
var f=a.element.find('[data-function="lounge-facets-product"] li.checked');
var g=[];
var e=[];
var b=[];
a.clickedFacets=[];
h.each(function(){g.push($(this).find(".coveo-facet-value-caption").data("original-value"));
a.clickedFacets.push($(this).find(".coveo-facet-value-caption").data("original-value"))
});
c.each(function(){e.push($(this).find(".coveo-facet-value-caption").data("original-value"));
a.clickedFacets.push($(this).find(".coveo-facet-value-caption").data("original-value"))
});
f.each(function(){b.push($(this).find(".coveo-facet-value-caption").data("original-value"));
a.clickedFacets.push($(this).find(".coveo-facet-value-caption").data("original-value"))
});
$.fn.dataTableExt.afnFiltering.push(function(o,l,k){var m=l[2];
var j=l[3];
var n=l[4];
if(g.length===0&&e.length===0&&b.length===0){return true
}else{if(g.length>0){if(g.indexOf(m)>-1){return true
}}else{if(e.length>0&&b.length>0){if(d(e,j)&&d(b,n)){return true
}else{return false
}}else{if(e.length>0){if(d(e,j)){return true
}else{return false
}}else{if(b.length>0){if(d(b,n)){return true
}else{return false
}}}}}}return false
});
var d=function(m,j){j=j.split(",");
var l=false;
for(var k=0;
k<m.length;
k++){if(j.indexOf(m[k])>-1){l=true;
break
}}return l
};
a.dataTables.draw();
$.fn.dataTableExt.afnFiltering.pop();
a._drawFacets()
})
},_addLoungeItems:function(){var a=this;
if(!a.element.find("table").length){a.element.find('[data-component="loader"]').remove()
}a.element.prepend(a.template({secureSiteLabel:a.options.secureSiteLabel,expirationLabel:a.options.expirationLabel,lounges:a.loungeItems}));
var b={};
if(a.options.language==="ja"){b={url:"//cdn.datatables.net/plug-ins/1.10.16/i18n/Japanese.json"}
}else{if(a.options.language==="zh"){b={url:"//cdn.datatables.net/plug-ins/1.10.16/i18n/Chinese.json"}
}}a.dataTables=a.element.find("table").DataTable({order:[],language:b,columnDefs:[{targets:[2],visible:false,searchable:true},{targets:[3],visible:false,searchable:true},{targets:[4],visible:false,searchable:true}]})
},_preSelect:function(){var c=this;
var b=window.Xilinx.getURLParameter("resultsTablePreSelect");
if(b){var f=b.split(",");
for(var d=0;
d<f.length;
d++){var e=f[d].split(":");
var a=c.element.find('[data-function="lounge-facets-'+e[0]+'"] [data-original-value="'+e[1]+'"]').parents("li");
a.trigger("click")
}}}});
$(document).ready(function(){if($('[data-component="myProfile-lounges"]').length>0){$('[data-component="myProfile-lounges"]').each(function(){$(this).lounges({secureSiteLabel:$(this).data("secure-site-label"),expirationLabel:$(this).data("expiration-label"),loungeType:$(this).data("lounge-type"),language:$(this).data("language"),facetTypeLabel:$(this).data("facet-type-label"),facetArchitectureLabel:$(this).data("facet-architecture-label"),facetProductLabel:$(this).data("facet-product-label")})
})
}});
$.widget("xilinx.docAlerts",{options:{},init:function(b){var a=this
},_create:function(){var a=this;
a.docType={};
a.element.find("[data-function-container]").each(function(){var b=$(this).data("function-container");
a.docType[b]={element:$(this),selectAllAvailable:$(this).find('[data-function="select-all-available"]'),unselectAllAvailable:$(this).find('[data-function="unselect-all-available"]'),selectAllSelected:$(this).find('[data-function="select-all-selected"]'),unselectAllSelected:$(this).find('[data-function="unselect-all-selected"]'),availableItems:$(this).find('[data-function="available-items"]'),selectedItems:$(this).find('[data-function="selected-items"]'),addButton:$(this).find('[data-function="add-selected"]'),removeButton:$(this).find('[data-function="remove-selected"]'),filter:$(this).find('[data-function="filter"]')};
a.docType[b].selectAllAvailable.click(function(c){a._selectAllItems(a.docType[b].availableItems);
c.preventDefault()
});
a.docType[b].unselectAllAvailable.click(function(c){a._unselectAllItems(a.docType[b].availableItems);
c.preventDefault()
});
a.docType[b].selectAllSelected.click(function(c){a._selectAllItems(a.docType[b].selectedItems);
c.preventDefault()
});
a.docType[b].unselectAllSelected.click(function(c){a._unselectAllItems(a.docType[b].selectedItems);
c.preventDefault()
});
a.docType[b].addButton.click(function(c){a._addSelectedItems(b);
c.preventDefault()
});
a.docType[b].removeButton.click(function(c){a._removeSelectedItems(b);
c.preventDefault()
});
a.docType[b].filter.keyup(function(c){a._filter(b);
c.preventDefault()
})
});
a._getDocAlertsItems(function(b,c){for(docType in c){if(c.hasOwnProperty(docType)){a._preSelect(docType,c[docType])
}}if(c.emailOptDocalerts){a.element.find('input[name="emailOptDocalerts"]').prop("checked",true)
}});
a.element.find('input[type="submit"]').click(function(){for(name in a.docType){if(a.docType.hasOwnProperty(name)){a._selectAllItems(a.docType[name].selectedItems)
}}})
},_addSelectedItems:function(c){var a=this;
var b=a.docType[c].availableItems.find("option:selected");
b.detach().appendTo(a.docType[c].selectedItems);
a._deselectAll(c)
},_removeSelectedItems:function(c){var a=this;
var b=a.docType[c].selectedItems.find("option:selected");
b.detach().appendTo(a.docType[c].availableItems);
a._deselectAll(c)
},_deselectAll:function(b){var a=this;
a.docType[b].availableItems.val([]);
a.docType[b].selectedItems.val([])
},_selectAllItems:function(b){var a=this;
b.children("option").prop("selected",true)
},_unselectAllItems:function(b){var a=this;
b.val([])
},_preSelect:function(c,b){var a=this;
if(!a.docType[c]){return
}a.docType[c].availableItems.val(b.values);
a._addSelectedItems(c)
},_filter:function(c){var a=this;
var b=a.docType[c].filter.val().toLowerCase();
a.docType[c].availableItems.find("option").each(function(){var d=$(this);
var e=$(this).text().toLowerCase();
if(e.indexOf(b)===-1){d.prop("selected",false);
if(!d.parent().is("span")){d.wrap('<span class="hidden-option"/>')
}}else{if(d.parent().is("span")){d.unwrap()
}}})
},_getDocAlertsItems:function(b){var a=this;
$.xilinxProfileAjax({url:"/bin/protected/myprofile/docalerts",type:"get",success:function(c){b(null,c)
},error:function(c){b("AJAX Error",c);
b(c)
},cache:false})
}});
$(document).ready(function(){if($('[data-component="myProfile-docAlerts"]').length>0){$('[data-component="myProfile-docAlerts"]').each(function(){$(this).docAlerts()
})
}});
if(typeof window.Xilinx==="undefined"){window.Xilinx={}
}if(typeof window.Xilinx.templates==="undefined"){window.Xilinx.templates={}
}window.Xilinx.templates.bookmarksList=["{{#each bookmarks}}","{{> bookmarkItem}}","{{/each}}"].join("\n");
window.Xilinx.templates.bookmarksListItem=['<tr data-code="{{code}}">',"<td>",'<a href="{{url}}">{{title}}</a>',"</td>","<td>","{{{label}}}","</td>","<td>",'<input type="checkbox" name="urls" value="{{url}}"/>',"</td>","</tr>"].join("\n");
$.widget("xilinx.bookmarks",{options:{modalTarget:"bookmark-delete-confirmation",modalMessage:"Are you sure you want to delete these (%number%) bookmarks?"},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.bookmarkItems=[];
a.bookmarkCategories=[];
a.templates={};
a.templates.bookmarks=Handlebars.compile(window.Xilinx.templates.bookmarksList);
Handlebars.registerPartial("bookmarkItem",window.Xilinx.templates.bookmarksListItem);
a._getBookmarkItems(function(c,b){a._addBookmarkItems(b.bookmarks);
a._addCategoriesItems(b.categories);
a.element.find('[data-component="loader"]').remove();
a.element.find(".bookmark-container").show();
a.element.find(".table-responsive").addClass("table-sortable").children("table").tablesorter({headers:{2:{sorter:false}}})
});
a.element.on("change",'input[type="checkbox"][name="urls"]',function(){var b=a.element.find('input[type="checkbox"][name="urls"]:checked');
if(b.length>0){a.element.find('button[data-toggle="modal"]').attr("disabled",false)
}else{a.element.find('button[data-toggle="modal"]').attr("disabled","disabled")
}});
a.bindConfirmationModal()
},bindConfirmationModal:function(){var a=this;
var b=a.element.find("#"+a.options.modalTarget);
a.element.find("table thead tr").find("button").click(function(){var c=a.element.find("table").find('input[type="checkbox"]:checked').length;
var d=a.options.modalMessage.replace("%number%",c);
b.find(".modal-body").text(d)
})
},_getBookmarkItems:function(b){var a=this;
$.xilinxProfileAjax({url:"/bin/protected/myprofile/bookmarks",type:"get",success:function(c){b(null,c)
},error:function(c){b("AJAX Error",c);
b(c)
},cache:false})
},_addBookmarkItems:function(b){var a=this;
a.element.find("table tbody").append(a.templates.bookmarks({bookmarks:b}))
},_addCategoriesItems:function(b){var a=this;
$('[data-component="xilinx-filter"]').xilinxFilter("reset")
}});
$(document).ready(function(){if($('[data-component="myProfile-bookmarks"]').length>0){$('[data-component="myProfile-bookmarks"]').each(function(){$(this).bookmarks({modalTarget:$(this).data("confirmation-modal"),modalMessage:$(this).data("confirmation-modal-message")})
})
}});
$.widget("xilinx.xilinxFilter",{options:{},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.targetULs=[];
if(!a.options.target){return
}a.setup()
},setup:function(){var a=this;
a.target=$("#"+a.options.target);
a.setUpTargets();
a.updateCounts()
},reset:function(){var a=this;
a.setup()
},updateCounts:function(){var a=this;
for(var d=0;
d<a.targetULs.length;
d++){for(var c=0;
c<a.targetULs[d].length;
c++){var b=a.targetULs[d][c].element;
var e=a.target.find('tr[data-code="'+a.targetULs[d][c].code+'"]');
b.find("span").last().text("("+e.length+")");
if(e.length===0){b.hide()
}else{b.show()
}}}},setUpTargets:function(){var a=this;
a.element.find("ul").each(function(){var b=[];
a.element.find("li").each(function(){b.push({element:$(this),code:$(this).data("code")});
$(this).find('input[type="checkbox"]').unbind("click");
$(this).find('input[type="checkbox"]').bind("click",function(){a.filter()
})
});
a.targetULs.push(b)
})
},filter:function(){var b=this;
var a=[];
b.element.find('input[type="checkbox"]:checked').each(function(){a.push($(this).parents("li").data("code"))
});
b.target.find("tbody tr").hide();
if(a.length>0){for(var c=0;
c<a.length;
c++){b.target.find('tbody tr[data-code="'+a[c]+'"]').show()
}}else{b.target.find("tbody tr[data-code]").show()
}}});
$(document).ready(function(){if($('[data-component="xilinx-filter"]').length>0){$('[data-component="xilinx-filter"]').each(function(){$(this).xilinxFilter({target:$(this).data("target")})
})
}});
$.widget("xilinx.avatarSelect",{options:{},init:function(b){var a=this
},_create:function(){var a=this;
a.element.find("button").click(function(b){a._changeSelection($(this).data("name"));
b.preventDefault()
})
},_changeSelection:function(b){var a=this;
a.element.find("li.active").removeClass("active");
a.element.find('input[value="'+b+'"]').prop("checked",true).parent("li").addClass("active")
}});
$(document).ready(function(){if($('[data-component="myProfile-avatar-select"]').length>0){$('[data-component="myProfile-avatar-select"]').each(function(){$(this).avatarSelect()
})
}});
if(typeof window.Xilinx==="undefined"){window.Xilinx={}
}if(typeof window.Xilinx.templates==="undefined"){window.Xilinx.templates={}
}window.Xilinx.templates.HTML5Video=["<video",'id="{{uuid}}"','data-account="{{accountId}}"','data-player="{{playerId}}"','data-embed="default"','data-video-id="{{videoId}}"','class="video-js"',"controls","></video>"].join("\n");
function HTML5Video(b){var a=this;
a.ready=false;
a.listeners=[];
a.id=b.id;
a.originalUUID;
a.player=false;
a.listeners=[];
a.options=b;
a.oAuth={id:"8994fd63-51ce-4cd4-9231-d70e0a593edf",secret:"4upGpvVeiGSOleEUYSZDxN74yx7S7sAAcBsptlTZR_3EuBPXtyGPZIO4GkSOcZR79u6KRKqZdgOitAKVVZ4vyA"};
if(!a.id){a.id=b.uuid;
a.originalUUID=""
}else{a.id=b.id;
a.originalUUID=b.uuid
}a.uuid="singleVideo"+b.uuid+a.id;
a.template=Handlebars.compile(window.Xilinx.templates.HTML5Video);
return a
}HTML5Video.prototype.getUUID=function(){var a=this;
return a.uuid
};
HTML5Video.prototype.getPlayer=function(b,d){var a=this;
var b={uuid:a.uuid,accountId:"17209957001",playerId:"SywTPUVC",videoId:a.id};
var c=a.template(b);
if(typeof d==="function"){return d(c)
}return c
};
HTML5Video.prototype.init=function(){var a=this;
bc(document.getElementById(a.uuid));
a.video=videojs(a.uuid).ready(function(){a.videoInstance=this;
var b=[];
if(a.options.title&&a.options.title.length>0&&a.options.displayTitleOverlay){b.push({start:"loadstart",content:"<h3>"+a.options.title+"</h3>",end:"playing",align:"cover"})
}else{b.push({start:"loadstart",content:"<br>",end:"playing",align:"cover"})
}if(a.options.overlays){b=b.concat(a.options.overlays)
}a.videoInstance.overlay({overlays:b});
a.on("ready");
a.videoInstance.ready(function(){a.on("loaded")
});
a.videoInstance.on("ended",function(){a.on("ended")
});
a.videoInstance.on("error",function(){a.on("error")
});
a.videoInstance.on("firstplay",function(){a.on("firstplay")
});
a.videoInstance.on("loadedalldata",function(){a.on("loadedalldata")
});
a.videoInstance.on("loadeddata",function(){a.on("loadeddata")
});
a.videoInstance.on("loadedmetadata",function(){a.on("loadedmetadata")
});
a.videoInstance.on("loadstart",function(){a.on("loadstart")
});
a.videoInstance.on("pause",function(){a.on("pause")
});
a.videoInstance.on("play",function(){a.on("play")
});
a.videoInstance.on("progress",function(){a.on("progress")
});
a.videoInstance.on("resize",function(){a.on("resize")
});
a.videoInstance.on("seeked",function(){a.on("seeked")
});
a.videoInstance.on("seeking",function(){a.on("seeking")
});
a.videoInstance.on("waiting",function(){a.on("waiting")
})
})
};
HTML5Video.prototype.on=function(c,b){var a=this;
if(!b||typeof b!=="function"){if(typeof a.listeners[c]==="function"){a.listeners[c](c)
}}else{a.listeners[c]=b
}};
HTML5Video.prototype.ready=function(){var a=this;
if(!a.ready){return false
}return true
};
HTML5Video.prototype.getData=function(){var a=this;
return a.videoInstance.mediainfo
};
HTML5Video.prototype.getVideoInstance=function(){return this
};
HTML5Video.prototype.load=function(){var a=this;
a.videoInstance.load()
};
HTML5Video.prototype.play=function(){var a=this;
a.videoInstance.play()
};
HTML5Video.prototype.pause=function(){var a=this;
a.videoInstance.pause()
};
HTML5Video.prototype.isPlaying=function(){var a=this;
return !a.videoInstance.paused()
};
HTML5Video.prototype.destroy=function(){var a=this;
self.videoInstance.dispose()
};
$.widget("xilinx.xilinxHTML5Video",{options:{autoPlay:false,autoLoad:true,autoStop:true,displayTitleOverlay:true,overlays:[]},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var b=this;
b.overlays=[];
for(var e=0;
e<b.options.overlays.length;
e++){var d=b.options.overlays[e];
var a={};
if(d.link){a.content='<a href="'+d.link[0]+'">'+d.text[0]+"</a>"
}else{a.content=d.text[0]
}a.align=d.position[0];
a.start=parseInt(d.start[0],10);
a.end=parseInt(d.end[0],10);
a.attachToControlBar=true;
b.overlays.push(a)
}var c={uuid:b.options.UUID,id:b.options.id,title:b.options.title,displayTitleOverlay:b.options.displayTitleOverlay,overlays:b.overlays};
b.video=new HTML5Video(c);
b.target=null;
if(b.options.target&&b.element.find(b.options.target).length>0){b.target=b.element.find(b.options.target)
}else{b.element.append('<div class="wrapper"></div>');
b.target=b.element.children(".wrapper")
}f();
b.element.on("click",".vjs-overlay",function(){b.play()
});
b.element.on("hover",".vjs-overlay",function(g){g.stopPropagation()
});
function f(){b.target.replaceWith(b.video.getPlayer());
b.video.init();
if(b.options.autoPlay){b.video.on("loaded",function(){b.play();
b.element.trigger("video:loadedmetadata")
})
}else{b.video.on("loaded",function(){b.element.trigger("video:loadedmetadata")
})
}if(b.options.autoLoad){b.video.on("ready",function(){b.load();
b.element.trigger("video:ready")
})
}b.video.on("play",function(){if(b.options.autoStop){$('[data-component="video"]').not(b.element).each(function(){if($(this).xilinxHTML5Video("isPlaying")){$(this).xilinxHTML5Video("pause")
}})
}b.element.trigger("video:play")
});
b.video.on("pause",function(){b.element.trigger("video:stop")
});
b.video.on("firstplay",function(){b.element.find(".video-js").addClass("loading-waiting")
})
}return b.video
},load:function(){var a=this;
a.video.load()
},play:function(){var a=this;
a.video.play()
},pause:function(){var a=this;
a.video.pause()
},isPlaying:function(){var a=this;
return a.video.isPlaying()
},getData:function(){var a=this;
return a.video.getData()
},getVideo:function(){var a=this;
return a.video.getVideoInstance()
},destroy:function(){var a=this;
a.video.destroy();
a.element.remove()
}});
$(document).ready(function(){if(window.videojs&&$('[data-component="video"]').length>0){$('[data-component="video"]').each(function(){if($(this).data("video-id")){$(this).xilinxHTML5Video({id:$(this).data("video-id"),target:$(this).data("target"),autoPlay:$(this).data("auto-play"),autoLoad:$(this).data("auto-load"),autoStop:$(this).data("auto-stop"),UUID:$(this).data("uuid"),title:$(this).data("image-title"),displayTitleOverlay:$(this).data("display-title-overlay"),overlays:$(this).data("overlays")})
}})
}});
$.widget("xilinx.xilinxVideoData",{options:{queryUrl:null},init:function(b){var a=this;
a.options=$.extend({},options,b)
},_create:function(){var a=this;
a.getGSAVideo(a.options.queryUrl,function(c,b){if(c){return console.log("err",c)
}a.element.find('[data-function="views"]').append(b.views);
a.element.find('[data-function="length"]').append(b.length)
})
},getGSAVideo:function(b,d){var a=this;
console.log("url",b);
$.xilinxAjax({url:b,sameDomain:a.options.sameDomain,type:"get",success:function(e){d(null,c(e))
},error:function(){d("AJAX Error")
},cache:false});
function c(e){var f=$(e);
var g={};
g.title=f.find('MT[N="VideoTitle"]').attr("V");
g.length=window.Xilinx.timeString(window.Xilinx.millisecondsToTime(f.find('MT[N="VideoLength"]').attr("V")));
g.image=f.find('MT[N="VideoImage"]').attr("V");
g.views=f.find('MT[N="VideoPlays"]').attr("V");
return g
}}});
$(document).ready(function(){if($('[data-component="xilinx-video-data"]').length>0){$('[data-component="xilinx-video-data"]').each(function(){$(this).xilinxVideoData({queryUrl:$(this).data("gsa-views-url"),sameDomain:$(this).data("same-domain")})
})
}});
(function(a){"object"===typeof exports&&"undefined"!==typeof module?module.exports=a():"function"===typeof define&&define.amd?define([],a):("undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:this).SmartBanner=a()
})(function(){return function a(k,j,l){function c(f,b){if(!j[f]){if(!k[f]){var e="function"==typeof require&&require;
if(!b&&e){return e(f,!0)
}if(g){return g(f,!0)
}e=Error("Cannot find module '"+f+"'");
throw e.code="MODULE_NOT_FOUND",e
}e=j[f]={exports:{}};
k[f][0].call(e.exports,function(d){var h=k[f][1][d];
return c(h?h:d)
},e,e.exports,a,k,j,l)
}return j[f].exports
}for(var g="function"==typeof require&&require,m=0;
m<l.length;
m++){c(l[m])
}return c
}({1:[function(t,o,m){var r=t("xtend/mutable"),u=t("component-query"),w=t("get-doc"),s=t("cookie-cutter"),n=t("ua-parser-js"),x=(navigator.language||navigator.userLanguage||navigator.browserLanguage).slice(-2)||"us",j=w&&w.documentElement,k={ios:{appMeta:"apple-itunes-app",iconRels:["apple-touch-icon-precomposed","apple-touch-icon"],getStoreLink:function(){return"https://itunes.apple.com/"+this.options.appStoreLanguage+"/app/id"+this.appId+"?mt=8"
}},android:{appMeta:"google-play-app",iconRels:["android-touch-icon","apple-touch-icon-precomposed","apple-touch-icon"],getStoreLink:function(){return"http://play.google.com/store/apps/details?id="+this.appId
}},windows:{appMeta:"msApplication-ID",iconRels:["windows-touch-icon","apple-touch-icon-precomposed","apple-touch-icon"],getStoreLink:function(){return"http://www.windowsphone.com/s?appid="+this.appId
}}};
t=function(f){var d=n(navigator.userAgent);
this.options=r({},{daysHidden:15,daysReminder:90,appStoreLanguage:x,button:"OPEN",store:{ios:"On the App Store",android:"In Google Play",windows:"In the Windows Store"},price:{ios:"FREE",android:"FREE",windows:"FREE"},theme:"",icon:"",force:""},f||{});
this.options.force?this.type=this.options.force:"Windows Phone"===d.os.name||"Windows Mobile"===d.os.name?this.type="windows":"iOS"===d.os.name?this.type="ios":"Android"===d.os.name&&(this.type="android");
f=!this.type||!this.options.store[this.type];
var c="ios"===this.type&&"Mobile Safari"===d.browser.name&&6<=parseInt(d.os.version,10),g=navigator.standalone,e=s.get("smartbanner-closed"),h=s.get("smartbanner-installed");
f||c||g||e||h||(r(this,k[this.type]),!this.parseAppId()&&"IOS"===d.os.name&&"Safari"===d.browser.name)||(this.create(),this.show())
};
t.prototype={constructor:t,create:function(){var p=this.getStoreLink(),l=this.options.price[this.type]+" - "+this.options.store[this.type],b;
if(this.options.icon){b=this.options.icon
}else{for(var f=0;
f<this.iconRels.length;
f++){var c=u('link[rel="'+this.iconRels[f]+'"]');
if(c){b=c.getAttribute("href");
break
}}}var h=w.createElement("div");
h.className="smartbanner smartbanner-"+(this.options.theme||this.type);
h.innerHTML='<div class="smartbanner-container"><a href="javascript:void(0);" class="smartbanner-close">&times;</a><span class="smartbanner-icon" style="background-image: url('+b+')"></span><div class="smartbanner-info"><div class="smartbanner-title">'+this.options.title+"</div><div>"+this.options.author+"</div><span>"+l+'</span></div><a href="'+p+'" class="smartbanner-button"><span class="smartbanner-button-text">'+this.options.button+"</span></a></div>";
w.body?w.body.appendChild(h):w&&w.addEventListener("DOMContentLoaded",function(){w.body.appendChild(h)
});
u(".smartbanner-button",h).addEventListener("click",this.install.bind(this),!1);
u(".smartbanner-close",h).addEventListener("click",this.close.bind(this),!1)
},hide:function(){j.classList.remove("smartbanner-show");
if("function"===typeof this.options.close){return this.options.close()
}},show:function(){j.classList.add("smartbanner-show");
if("function"===typeof this.options.show){return this.options.show()
}},close:function(){this.hide();
s.set("smartbanner-closed","true",{path:"/",expires:new Date(Number(new Date)+86400000*this.options.daysHidden)});
if("function"===typeof this.options.close){return this.options.close()
}},install:function(){this.hide();
s.set("smartbanner-installed","true",{path:"/",expires:new Date(Number(new Date)+86400000*this.options.daysReminder)});
if("function"===typeof this.options.close){return this.options.close()
}},parseAppId:function(){var b=u('meta[name="'+this.appMeta+'"]');
if(b){return this.appId="windows"===this.type?b.getAttribute("content"):/app-id=([^\s,]+)/.exec(b.getAttribute("content"))[1]
}}};
o.exports=t
},{"component-query":2,"cookie-cutter":3,"get-doc":4,"ua-parser-js":6,"xtend/mutable":7}],2:[function(j,d,b){function g(c,e){return e.querySelector(c)
}b=d.exports=function(c,e){e=e||document;
return g(c,e)
};
b.all=function(c,e){e=e||document;
return e.querySelectorAll(c)
};
b.engine=function(c){if(!c.one){throw Error(".one callback required")
}if(!c.all){throw Error(".all callback required")
}g=c.one;
b.all=c.all;
return b
}
},{}],3:[function(e,d,b){b=d.exports=function(c){c||(c={});
"string"===typeof c&&(c={cookie:c});
void 0===c.cookie&&(c.cookie="");
return{get:function(f){for(var h=c.cookie.split(/;\s*/),k=0;
k<h.length;
k++){var j=h[k].split("=");
if(unescape(j[0])===f){return unescape(j[1])
}}},set:function(f,g,h){h||(h={});
f=escape(f)+"="+escape(g);
h.expires&&(f+="; expires="+h.expires);
h.path&&(f+="; path="+escape(h.path));
return c.cookie=f
}}
};
"undefined"!==typeof document&&(e=b(document),b.get=e.get,b.set=e.set)
},{}],4:[function(e,d,b){e=e("has-dom");
d.exports=e()?document:null
},{"has-dom":5}],5:[function(e,d,b){d.exports=function(){return"undefined"!==typeof window&&"undefined"!==typeof document&&"function"===typeof document.createElement
}
},{}],6:[function(e,d,b){(function(m,s){var u={extend:function(l,g){var n={},c;
for(c in l){n[c]=g[c]&&0===g[c].length%2?g[c].concat(l[c]):l[c]
}return n
},has:function(g,c){return"string"===typeof g?-1!==c.toLowerCase().indexOf(g.toLowerCase()):!1
},lowerize:function(c){return c.toLowerCase()
},major:function(c){return"string"===typeof c?c.split(".")[0]:s
},trim:function(c){return c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")
}},o=function(){for(var F,D=0,C,A,E,y,z,B,x=arguments;
D<x.length&&!z;
){var t=x[D],w=x[D+1];
if("undefined"===typeof F){for(E in F={},w){w.hasOwnProperty(E)&&(y=w[E],"object"===typeof y?F[y[0]]=s:F[y]=s)
}}for(C=A=0;
C<t.length&&!z;
){if(z=t[C++].exec(this.getUA())){for(E=0;
E<w.length;
E++){B=z[++A],y=w[E],"object"===typeof y&&0<y.length?2==y.length?F[y[0]]="function"==typeof y[1]?y[1].call(this,B):y[1]:3==y.length?F[y[0]]="function"!==typeof y[1]||y[1].exec&&y[1].test?B?B.replace(y[1],y[2]):s:B?y[1].call(this,B,y[2]):s:4==y.length&&(F[y[0]]=B?y[3].call(this,B.replace(y[1],y[2])):s):F[y]=B?B:s
}}}D+=2
}return F
},k=function(p,n){for(var t in n){if("object"===typeof n[t]&&0<n[t].length){for(var l=0;
l<n[t].length;
l++){if(u.has(n[t][l],p)){return"?"===t?s:t
}}}else{if(u.has(n[t],p)){return"?"===t?s:t
}}}return p
},r={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},f={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],["name","version"],[/(OPiOS)[\/\s]+([\w\.]+)/i],[["name","Opera Mini"],"version"],[/\s(opr)\/([\w\.]+)/i],[["name","Opera"],"version"],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],["name","version"],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[["name","IE"],"version"],[/(edge)\/((\d+)?[\w\.]+)/i],["name","version"],[/(yabrowser)\/([\w\.]+)/i],[["name","Yandex"],"version"],[/(comodo_dragon)\/([\w\.]+)/i],[["name",/_/g," "],"version"],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],["name","version"],[/(MicroMessenger)\/([\w\.]+)/i],[["name","WeChat"],"version"],[/(qqbrowser)[\/\s]?([\w\.]+)/i],["name","version"],[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/JUC.+(ucweb)[\/\s]?([\w\.]+)/i],[["name","UCBrowser"],"version"],[/(dolfin)\/([\w\.]+)/i],[["name","Dolphin"],"version"],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[["name","Chrome"],"version"],[/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],["version",["name","MIUI Browser"]],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],["version",["name","Android Browser"]],[/FBAV\/([\w\.]+);/i],["version",["name","Facebook"]],[/fxios\/([\w\.-]+)/i],["version",["name","Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],["version",["name","Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],["version","name"],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],["name",["version",k,{"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],["name","version"],[/(navigator|netscape)\/([\w\.-]+)/i],[["name","Netscape"],"version"],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],["name","version"]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",u.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",u.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",u.lowerize]]],device:[[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[["vendor",u.trim],["model",u.trim],["type","smarttv"]],[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],["model","vendor",["type","tablet"]],[/applecoremedia\/[\w\.]+ \((ipad)/],["model",["vendor","Apple"],["type","tablet"]],[/(apple\s{0,1}tv)/i],[["model","Apple TV"],["vendor","Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],["vendor","model",["type","tablet"]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],["model",["vendor","Amazon"],["type","tablet"]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[["model",k,{"Fire Phone":["SD","KF"]}],["vendor","Amazon"],["type","mobile"]],[/\((ip[honed|\s\w*]+);.+(apple)/i],["model","vendor",["type","mobile"]],[/\((ip[honed|\s\w*]+);/i],["model",["vendor","Apple"],["type","mobile"]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],["vendor","model",["type","mobile"]],[/\(bb10;\s(\w+)/i],["model",["vendor","BlackBerry"],["type","mobile"]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],["model",["vendor","Asus"],["type","tablet"]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[["vendor","Sony"],["model","Xperia Tablet"],["type","tablet"]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[["vendor","Sony"],["model","Xperia Phone"],["type","mobile"]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],["vendor","model",["type","console"]],[/android.+;\s(shield)\sbuild/i],["model",["vendor","Nvidia"],["type","console"]],[/(playstation\s[34portablevi]+)/i],["model",["vendor","Sony"],["type","console"]],[/(sprint\s(\w+))/i],[["vendor",k,{HTC:"APA",Sprint:"Sprint"}],["model",k,{"Evo Shift 4G":"7373KT"}],["type","mobile"]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],["vendor","model",["type","tablet"]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],["vendor",["model",/_/g," "],["type","mobile"]],[/(nexus\s9)/i],["model",["vendor","HTC"],["type","tablet"]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],["model",["vendor","Microsoft"],["type","console"]],[/(kin\.[onetw]{3})/i],[["model",/\./g," "],["vendor","Microsoft"],["type","mobile"]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s[6])/i],["model",["vendor","Motorola"],["type","mobile"]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],["model",["vendor","Motorola"],["type","tablet"]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[["vendor","Samsung"],"model",["type","tablet"]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[["vendor","Samsung"],"model",["type","mobile"]],[/hbbtv.+maple;(\d+)/i],[["model",/^/,"SmartTV"],["vendor","Samsung"],["type","smarttv"]],[/\(dtv[\);].+(aquos)/i],["model",["vendor","Sharp"],["type","smarttv"]],[/sie-(\w+)*/i],["model",["vendor","Siemens"],["type","mobile"]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[["vendor","Nokia"],"model",["type","mobile"]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],["model",["vendor","Acer"],["type","tablet"]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[["vendor","LG"],"model",["type","tablet"]],[/(lg) netcast\.tv/i],["vendor","model",["type","smarttv"]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],["model",["vendor","LG"],["type","mobile"]],[/android.+(ideatab[a-z0-9\-\s]+)/i],["model",["vendor","Lenovo"],["type","tablet"]],[/linux;.+((jolla));/i],["vendor","model",["type","mobile"]],[/((pebble))app\/[\d\.]+\s/i],["vendor","model",["type","wearable"]],[/android.+;\s(glass)\s\d/i],["model",["vendor","Google"],["type","wearable"]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],[["model",/_/g," "],["vendor","Xiaomi"],["type","mobile"]],[/\s(tablet)[;\/]/i,/\s(mobile)[;\/]/i],[["type",u.lowerize],"vendor","model"]],engine:[[/windows.+\sedge\/([\w\.]+)/i],["version",["name","EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],["name","version"],[/rv\:([\w\.]+).*(gecko)/i],["version","name"]],os:[[/microsoft\s(windows)\s(vista|xp)/i],["name","version"],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],["name",["version",k,r]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[["name","Windows"],["version",k,r]],[/\((bb)(10);/i],[["name","BlackBerry"],"version"],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],["name","version"],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[["name","Symbian"],"version"],[/\((series40);/i],["name"],[/mozilla.+\(mobile;.+gecko.+firefox/i],[["name","Firefox OS"],"version"],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],["name","version"],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[["name","Chromium OS"],"version"],[/(sunos)\s?([\w\.]+\d)*/i],[["name","Solaris"],"version"],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],["name","version"],[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],[["name","iOS"],["version",/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[["name","Mac OS"],["version",/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],["name","version"]]},j=function(l,t){if(!(this instanceof j)){return(new j(l,t)).getResult()
}var n=l||(m&&m.navigator&&m.navigator.userAgent?m.navigator.userAgent:""),p=t?u.extend(f,t):f;
this.getBrowser=function(){var c=o.apply(this,p.browser);
c.major=u.major(c.version);
return c
};
this.getCPU=function(){return o.apply(this,p.cpu)
};
this.getDevice=function(){return o.apply(this,p.device)
};
this.getEngine=function(){return o.apply(this,p.engine)
};
this.getOS=function(){return o.apply(this,p.os)
};
this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}
};
this.getUA=function(){return n
};
this.setUA=function(c){n=c;
return this
};
return this
};
j.VERSION="0.7.11";
j.BROWSER={NAME:"name",MAJOR:"major",VERSION:"version"};
j.CPU={ARCHITECTURE:"architecture"};
j.DEVICE={MODEL:"model",VENDOR:"vendor",TYPE:"type",CONSOLE:"console",MOBILE:"mobile",SMARTTV:"smarttv",TABLET:"tablet",WEARABLE:"wearable",EMBEDDED:"embedded"};
j.ENGINE={NAME:"name",VERSION:"version"};
j.OS={NAME:"name",VERSION:"version"};
"undefined"!==typeof b?("undefined"!==typeof d&&d.exports&&(b=d.exports=j),b.UAParser=j):m.UAParser=j;
var h=m.jQuery||m.Zepto;
if("undefined"!==typeof h){var v=new j;
h.ua=v.getResult();
h.ua.get=function(){return v.getUA()
};
h.ua.set=function(g){v.setUA(g);
g=v.getResult();
for(var c in g){h.ua[c]=g[c]
}}
}})("object"===typeof window?window:this)
},{}],7:[function(j,d,b){d.exports=function(e){for(var f=1;
f<arguments.length;
f++){var h=arguments[f],k;
for(k in h){g.call(h,k)&&(e[k]=h[k])
}}return e
};
var g=Object.prototype.hasOwnProperty
},{}]},{},[1])(1)
});
$(function(){new SmartBanner({title:"XilinxGO",author:"Xilinx, Inc.",button:"VIEW"})
});