void function(a,b){var c=a.alogObjectName||"alog",d=a[c]=a[c]||function(){a[c].l=a[c].l||+new Date,(a[c].q=a[c].q||[]).push(arguments)},e="monkey";d("define",e,["element"],function(c){function f(a){for(;a;){if(/^(a|button)$/i.test(a.tagName))return a;a=a.parentNode}}function g(){switch((x.get("reports")||{}).refer){case 1:case!0:return b.referrer;case 2:var a=b.referrer;if(!a)return;var c="";return a.replace(/(^\w+:\/\/)?([^\/]+)/,function(a,b){c=b}),b.location.host==c?b.referrer:c}}function h(a,b,d){var e=b.target||b.srcElement,g=o()-s-u;switch(g>0&&(t+=g),s=o(),a){case"click":case"d":if(!e)return;var h={},j=f(e),p=c.getAction(e,h),q="",y=c.getText(e);if(j?(/^a$/i.test(j.tagName)&&(q=j.getAttribute("href",2),/^(javascript|#)/i.test(q)&&(q="")),y=y||c.getText(j)||j.title||j.innerHTML.replace(/<[^>]*>|\s/g,"")):/input/i.test(e.tagName)&&/button|radio|checkbox|submit/i.test(e.type)&&(j=e,y=y||e.value),!j&&!p)break;if((x.get("reports")||{}).onlylink&&/input|button/i.test(e.tagName))break;w++;var z=d?d.path+"/"+c.getXPath(e,d.doc):c.getXPath(e),A=c.getGroup(e),B=c.getExtra(e),C=c.getParam(h.target),D=c.ep(e,[b.clientX,b.clientY]),E=e.ownerDocument,F=E.body,G=[0,0];b.pageX||b.pageY?G=[b.pageX,b.pageY]:(b.clientX||b.clientY)&&(G=[b.clientX+(E&&E.scrollLeft||F&&F.scrollLeft||0)-(E&&E.clientLeft||F&&F.clientLeft||0),b.clientY+(E&&E.scrollTop||F&&F.scrollTop||0)-(E&&E.clientTop||F&&F.clientTop||0)]);var H={xp:z,g:A,gx:B,ac:p,ep:D,ci:w,pp:G,ps:c.ps(),param:C,u:String(q||"none").substr(0,200),txt:String(y||"none").substr(0,30)};(x.get("reports")||{}).visibleRange&&(H.vr=c.vr()),x.fire("click",H),x.send("event",H);break;case"o":m=o(),n=1;break;case"i":r+=o()-m,m=o(),n=0;break;case"s":case"e":if(d)return;var I=c.vr();v=Math.max(I[1]+I[3],v)}(x.get("reports")||{}).iframe&&/[dio]/.test(a)&&(k=o(),l?clearInterval(l):i(),l=setInterval(function(){o()-k>2e3&&(clearInterval(l),l=0),i()},1e3))}function i(){for(var a,e,f,g,k=b.getElementsByTagName("iframe"),l=0;l<k.length;l++){a=k[l],a[j]||(a[j]=1,d.on(a,"load",function(){i()}));try{var m=String(a.src).replace(/^\w+:\/\/([^\/:]+).*$|.*/,"$1");if(!m||m==b.location.hostname){if(g=a.contentWindow.document,g[j])break;for(g[j]=1,e=0;(f=q[e])&&e<q.length;e++)d.on(f[2]?a.contentWindow:g,f[0],function(a,b,c){return function(d){h(a,d,{path:b,doc:c})}}(f[1],c.getXPath(a),g))}}catch(n){}}}var j,k,l,m,n,o,p,q=[["mousedown","d"],["focusout","o"],["blur","o",a],["focusin","i"],["focus","i",a],["mousemove","m"],["keydown","k"],["mousewheel","w"],["DOMMouseScroll","w",a],["touchstart","ts"],["touchmove","tm"],["touchend","te"],["scroll","s",a],["resize","e",a]],r=0,s=0,t=0,u=2e3,v=0,w=0,x=d.tracker(e);return d(e+".on","create",function(){var f=a.screen;f&&x.set("px",f.width+"*"+f.height),x.set("ver",5),x.set("referrer",g()),(x.get("reports")||{}).css&&c.an("css","content"),x.set("protocolParameter",{reports:null}),o=d.timestamp,m=o(),s=o();var k;b.body&&(vr=c.vr(),v=vr[1]+vr[3]),j="_e_"+d.sid;for(var l=0;(k=q[l++])&&(d.on(k[2]||b,k[0],function(a){return function(b){h(a,b)}}(k[1])),(x.get("reports")||{}).staytime););(x.get("reports")||{}).iframe&&i(),x.set("ref",g()),d(e+".on","unload",function(){if(!p&&(p=!0,x.fire("close"),(x.get("reports")||{}).staytime)){n&&(r+=o()-m);var a=o()-s-u;a>0&&(t+=a);var b={cmd:"close",tc:w,pd:v,ft:(o()-r).toString(36),at:(o()-t).toString(36)};return x.fire("close",b),x.send("event",b),!0}}),d(e+".on","send",function(a){"pageview"==a.t&&(a.cmd="open",a.t=""),"event"==a.t&&(a.t=""),a.now&&(a.ts=o(a.now).toString(36),a.now="")}),d(e+".on","record",function(a){h(a.type,a)})}),x})}(window,document);