!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="https://d2uowa935fr33t.cloudfront.net/download/",n(n.s=10)}({"0+IW":function(t,e,n){(t.exports=n("RDo7")(!1)).push([t.i,"body.cq-body{overflow-y:visible;background:#fff;height:auto!important;min-height:500px}body.cq-body .aui-page-panel{border-bottom:0}body.cq-body .cq-page-header .aui-page-header-inner,body.cq-body .cq-page-main .aui-page-panel-inner{max-width:1000px;width:100%}body.cq-body .cq-page-main .aui-page-panel-inner.cq-inner-no-fixed-width{max-width:100%}body.cq-body .onboarding{position:relative;padding-top:110px;width:100%}body.cq-body .onboarding h1{text-transform:uppercase;color:#707070;font-size:12px;font-weight:700}body.cq-body .onboarding .ask-question-image-container{position:absolute;top:0;left:50%;margin-left:-60px}body.cq-body .onboarding .aui{margin-top:20px}body.cq-body #full-height-container{height:auto;background-color:#fff}",""])},"04PE":function(t,e,n){var o=n("0+IW");"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"bottom",singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n("cuK8")(o,r);o.locals&&(t.exports=o.locals)},10:function(t,e,n){t.exports=n("Y8K4")},"6t7U":function(t,e,n){var o=n("OfEr");"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"bottom",singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n("cuK8")(o,r);o.locals&&(t.exports=o.locals)},HEvi:function(t,e,n){var o=n("YwBH");"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"bottom",singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n("cuK8")(o,r);o.locals&&(t.exports=o.locals)},HGgJ:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return c});var o=n("Jygk"),r=n.n(o);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a=function(t,e){var n=t;0===t.indexOf("#")&&(n=t.substring(1));var o=r.a.document.getElementById(n);o||(o=r.a.document.querySelector('[name="'.concat(n,'"]'))),function(t){if(t){var e=t.style.display;t.style.display="inline-block",t.scrollIntoView(),t.style.display=e}}(o),e&&e()};function c(t,e,n){var o=i(e.split("#"),1)[0],r=i(t.split("#"),2),c=r[0],u=r[1];u&&c===o&&a(u,n)}},Jygk:function(t,e,n){"use strict";(function(e){t.exports="object"==typeof self&&self.self===self&&self||"object"==typeof e&&e.global===e&&e||this}).call(this,n("fRV1"))},OfEr:function(t,e,n){(t.exports=n("RDo7")(!1)).push([t.i,"body.confluence-inline-tasks{padding-top:10px}body.page-gadget.confluence-inline-tasks #main{width:100%;padding-left:10px}",""])},RBC6:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},RDo7:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(o),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(i).concat([r]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},TLM9:function(t,e,n){var o=n("qRI7");"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"bottom",singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n("cuK8")(o,r);o.locals&&(t.exports=o.locals)},Y8K4:function(t,e,n){"use strict";n.r(e);var o=n("Jygk"),r=n.n(o),i=n("bQlP"),a=n("HGgJ"),c=function(t,e){if(t){var n=new window.MutationObserver(e);return n.observe(t,{attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0}),n}};function u(t,e,n){var o;return function(){var r=this,i=arguments,a=n&&!o;clearTimeout(o),o=setTimeout(function(){o=null,n||t.apply(r,i)},e),a&&t.apply(r,i)}}var f=function(t,e){var n=u(e,50),o=t.querySelectorAll("img");[].forEach.call(o,function(t){"true"!==t.dataset.fallbackImgLoadedListener&&(t.addEventListener("load",n),t.dataset.fallbackImgLoadedListener="true")})},d=function(t,e,n){var o,r=!1;document.addEventListener("click",function(t){t.srcElement&&"A"===t.srcElement.tagName&&(r=!0,o=t.srcElement.href,Object(a.a)(o,n,function(n){e(n),t.preventDefault(),r=!1}))}),window.addEventListener("beforeunload",function(){r&&(r=!1,t(o))})},s=function(t){var e=u(t,50);window.addEventListener("resize",e)},l=n("jqY8");function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=function(t){return function(e){var n=Object(l.g)(),o=n.origin;o||(o="".concat(n.protocol,"//").concat(n.hostname).concat(n.port?":".concat(n.port):"")),Object(l.c)().parent.postMessage(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){p(t,e,n[e])})}return t}({},e,{bridgeId:t}),o)}},g=function(t){var e=b(t);return{onIframeLoaded:function(t){e(function(t){return{type:"iframeDOMContentLoaded",location:t}}(t))},pushLocationToParent:function(t){e(function(t){return{type:"postNextIframeLocation",nextLocation:t}}(t))},updateLocationToParent:function(t){e(function(t){return{type:"postUpdateIframeLocation",nextLocation:t}}(t))},updateIframeSize:function(){e(function(){var t=r.a.document.body.getBoundingClientRect();return{type:"postIframeSize",width:t.width,height:t.height}}())},updateIframeAnchor:function(t){e(function(t){return{type:"postUpdateIframeAnchor",anchor:t}}(t))}}},h=n("z6J1"),y="/pages/editpage.action?pageId=",v="/pages/editblogpost.action?pageId=";function m(t){r.a.top.location=t}function w(t){!function(t){if(t.key&&"e"===t.key.toLowerCase()&&function(t){return-1===["INPUT","TEXTAREA","BUTTON","SELECT"].indexOf(t.tagName)}(t.target)){var e=Object(h.a)(r.a,document),n=e.contextPath,o=e.contentType,i=e.pageId;n&&i&&o&&("page"===o?m("".concat(n).concat(y).concat(i)):"blogpost"===o&&m("".concat(n).concat(v).concat(i)))}}(t)}!function(t,e){var o=function(n){t.top.location=n,e.write("<style>body { display:none!important }</style>\x3c!--")},r=function(){var t=e.getElementById("fallback-mode-editor"),n=e.createElement("script");n.src=t.getAttribute("data-src"),n.async=!1,e.getElementsByTagName("head")[0].appendChild(n)},u=Object(h.a)(t,e),l=u.isFallbackModeIframe,p=u.isIframeAllowed,b=u.isSpaceQuestions,y=u.isViewPageContentOnly,v=u.isWhitelisted,m=u.bridgeId,x=u.isSpaceOverview,O=u.isOverflowAllowed,L=g(m),j=L.updateLocationToParent,I=L.onIframeLoaded,E=v||p;if(l&&y){var k=e.createElement("base");k.target="_top",e.getElementsByTagName("head")[0].appendChild(k)}if(!l&&y){var A=t.location.href,S=A.split("#")[1],q=A.replace("/content-only/","/pages/").replace(/&iframeId=(.*)$/,"").replace(/#(.*)$/,"");o(q+=S?"#".concat(S):"")}l&&!E&&o(t.location.href),!l&&E&&b&&o(t.location.href.split("/display").join("/spaces")),l&&p&&!v&&(b&&-1===t.top.location.href.indexOf(t.location.pathname.replace("/display","/spaces"))&&j(t.location.href.split("/display").join("/spaces")),e.addEventListener("DOMContentLoaded",function(){n("HEvi"),n("6t7U"),n("04PE");var o=-1!==t.location.href.indexOf("legacyeditor=1");Object(i.K)(i.i)&&!o&&(n("TLM9"),r()),x&&e.querySelector("body").classList.add("space-overview"),O&&e.querySelector("html").classList.add("allow-overflow"),function(t,e,n){var o=g(t),r=o.pushLocationToParent,i=o.updateIframeSize,a=o.updateIframeAnchor,u=n.location.href;d(r,a,u),c(e.body,function(){i(),f(e.body,i)}),s(i),f(e.body,i),i()}(m,e,t),I(t.location.href),e.querySelector("body").classList.add("dom-is-ready")}),e.addEventListener("keydown",w),t.addEventListener("load",function(){Object(a.a)(t.location.href,t.location.href),e.querySelector("body").classList.add("document-has-loaded")})),t.location.href.indexOf("/viewpageattachments.action")>-1&&e.addEventListener("DOMContentLoaded",function(){Object(i.K)(i.i)&&(n("TLM9"),r())})}(r.a,r.a.document)},YwBH:function(t,e,n){(t.exports=n("RDo7")(!1)).push([t.i,"body.page-gadget,html{height:auto;overflow:hidden}.allow-overflow{overflow:auto}.allow-overflow body{background-color:#fff}.allow-overflow .ap-container iframe,.allow-overflow .aui-page-panel{border:0}body.page-gadget{background:#fff;opacity:1;padding-top:60px}body.page-gadget #page{position:relative}body.page-gadget #main{padding:0;position:static;width:calc(100% - 110px);margin:0 auto}body.page-gadget.space-overview #main{width:calc(100% - 40px)}body.page-gadget #main.aui-page-panel{border-bottom:0}body.page-gadget #full-height-container,body.page-gadget #page{height:auto}body.theme-default #full-height-container{background-color:#fff}",""])},bQlP:function(t,e,n){"use strict";var o=n("Jygk"),r=n.n(o),i=function(t){if(!r.a.document)return!1;var e=r.a.document.querySelector("meta[name=ajs-enabled-dark-features]");if(e){var n=e.content.split(",");return n.indexOf(t)>-1&&-1===n.indexOf("".concat(t,".disable"))}};n.d(e,"u",function(){return a}),n.d(e,"i",function(){return c}),n.d(e,"q",function(){return u}),n.d(e,"n",function(){return f}),n.d(e,"p",function(){return d}),n.d(e,"s",function(){return s}),n.d(e,"r",function(){return l}),n.d(e,"k",function(){return p}),n.d(e,"t",function(){return b}),n.d(e,"b",function(){return g}),n.d(e,"j",function(){return h}),n.d(e,"J",function(){return y}),n.d(e,"D",function(){return v}),n.d(e,"f",function(){return m}),n.d(e,"G",function(){return w}),n.d(e,"z",function(){return x}),n.d(e,"d",function(){return O}),n.d(e,"H",function(){return L}),n.d(e,"I",function(){return j}),n.d(e,"v",function(){return I}),n.d(e,"x",function(){return E}),n.d(e,"w",function(){return k}),n.d(e,"e",function(){return A}),n.d(e,"y",function(){return S}),n.d(e,"o",function(){return q}),n.d(e,"l",function(){return R}),n.d(e,"m",function(){return T}),n.d(e,"a",function(){return U}),n.d(e,"h",function(){return C}),n.d(e,"g",function(){return M}),n.d(e,"A",function(){return P}),n.d(e,"B",function(){return B}),n.d(e,"c",function(){return _}),n.d(e,"C",function(){return D}),n.d(e,"E",function(){return N}),n.d(e,"F",function(){return K}),n.d(e,"K",function(){return i});var a="react.ui.force.spa",c="fd-87.editor.spa",u="fabric.editor.satisfaction.survey",f="fabric.editor.blank.blogpost",d="fabric.editor.blueprint.com.atlassian.confluence.plugins.confluence-business-blueprints_meeting-notes-blueprint",s="fabric.presence.integration",l="frontend.fabric.mentions.sessionservice",p="fabric.editor.all-pages",b="fabric.profile.redirect",g="adg3.space.config",h="emcee-discover",y="navigation.NAV-21.single-click-to-home",v="navigation.atlassian.people.NAV-51.people-drawer",m="dev.mode.users.and.groups",w="search.attribution.instrumentation",x="internal.feedback.plugin",O="changeboarding.kill.switch",L="search.terms.ugc.sending",j="sidebar.toggle.button",I="search.global-quick-search",E="search.global-quick-search.feedback",k="search.global-quick-search.aggregator",A="clean.global.nav",S="header.with.contributors",q="fabric.editor.live.macros",R="fabric.editor.alpha",T="fabric.editor.beta",U="editor.spa.uxenhancements",C="foxy.disable.nested.table",M="foxy.disable.indent",P="ng-media-viewer.enabled",B="ng-media-viewer.custom-video",_="atlaskit.pagetree.draggable",D="confluence.frontend.my.work.drafts",N="confluence.frontend.remove.confluence-gadgets",K="confluence.frontend.remove.page-information"},cuK8:function(t,e,n){var o={},r=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),a=null,c=0,u=[],f=n("RBC6");function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(h(r.parts[a],e))}else{var c=[];for(a=0;a<r.parts.length;a++)c.push(h(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:c}}}}function s(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(c):n.push(o[a]={id:a,parts:[c]})}return n}function l(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=u[u.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=i(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,r)}}function p(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function b(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),g(e,t.attrs),l(t,e),e}function g(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function h(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var u=c++;n=a||(a=b(e)),o=v.bind(null,n,u,!1),r=v.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),l(t,e),e}(e),o=function(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=f(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,n,e),r=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),o=function(t,e){var n=e.css,o=e.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){p(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=s(t,e);return d(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var a=n[i];(c=o[a.id]).refs--,r.push(c)}t&&d(s(t,e),e);for(i=0;i<r.length;i++){var c;if(0===(c=r[i]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete o[c.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function v(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=y(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},fRV1:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},jqY8:function(t,e,n){"use strict";function o(t){window.location=t}function r(){return"undefined"!=typeof window?window.location:void 0}function i(){if("undefined"!=typeof window&&window.location){var t=window.location.origin;return t||(t="".concat(window.location.protocol,"//").concat(window.location.hostname).concat(window.location.port?":".concat(window.location.port):"")),t}}function a(){"undefined"!=typeof window&&window.location.reload()}function c(t){return"undefined"==typeof window||window.confirm(t)}function u(){if("undefined"!=typeof window){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];window.addEventListener.apply(window,e)}}function f(){if("undefined"!=typeof window){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];window.removeEventListener.apply(window,e)}}function d(){return"undefined"==typeof window?0:window.pageYOffset}function s(){return"undefined"==typeof window?0:window.innerWidth}function l(){return"undefined"==typeof window?0:window.innerHeight}function p(){if(window&&window.require){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return window.require.apply(window,e)}}function b(){return window}n.d(e,"j",function(){return o}),n.d(e,"g",function(){return r}),n.d(e,"h",function(){return i}),n.d(e,"k",function(){return a}),n.d(e,"b",function(){return c}),n.d(e,"a",function(){return u}),n.d(e,"l",function(){return f}),n.d(e,"i",function(){return d}),n.d(e,"f",function(){return s}),n.d(e,"e",function(){return l}),n.d(e,"d",function(){return p}),n.d(e,"c",function(){return b})},qRI7:function(t,e,n){(t.exports=n("RDo7")(!1)).push([t.i,"#rte-savebar{display:block;margin:0;border-top:1px solid #ccc;background-color:#f5f5f5;padding:5px 10px 0 0;box-shadow:none;#rte-spinner{width:16px;height:18px;line-height:20px;padding:0;margin-top:4px}.toolbar-split-row{font-size:11px;color:#666;margin:0}label{font-size:14px;margin-right:5px;line-height:30px}.aui-buttons{margin-right:10px;margin-left:0}.save-button-container{float:left;white-space:nowrap;padding-left:0;margin-right:10px}.toolbar-split{line-height:1}.aui-button-primary{padding:4px 10px}.aui-button-link:hover{text-decoration:none}}#rte-savebar .aui-button,#rte-savebar.aui-toolbar2 .aui-button,#rte-toolbar .aui-button{margin-top:0}#rte-savebar input,#rte-toolbar input{font-size:14px}.aui-toolbar .toolbar-split-captcha .toolbar-group{float:right}.aui-toolbar .captcha{padding:0;width:auto;text-align:right}.aui-toolbar #captcha-response,.aui-toolbar .captcha .aui-message-warning{clear:both}.aui-toolbar .captcha-image{margin:7px 3px}.aui-toolbar #captcha-response,.aui-toolbar .captcha-image{float:right}",""])},z6J1:function(t,e,n){"use strict";var o={};function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(t,e){var n=t.getElementsByName(e)[0];return n&&n.getAttribute("content")||""}e.a=function(t,e){var n=t.location.href,a="true"===i(e,"ajs-iframe-allowed-for-spa")||!1,c=void 0!==t.__SKIP_FALLBACK_MODE__&&t.__SKIP_FALLBACK_MODE__||function(t){return Object.keys(o).filter(function(e){return-1!==t.indexOf(o[e])}).length>0}(n),u=i(e,"confluence-space-key"),f="/display/".concat(u);return{spaceKey:u,isIframeAllowed:a,isSpaceQuestions:u&&n.indexOf("".concat(f,"/question"))>-1||!1,isCQActionAndWillReturn:n.indexOf("/cq/")>-1&&n.indexOf(".action")>-1||!1,isWhitelisted:c,isViewPageContentOnly:n.indexOf("/content-only/")>-1,isFallbackModeIframe:function(t){if(t.top===t.self)return!1;var e=t.frameElement&&t.frameElement.getAttribute("data-is-fallback-mode-iframe");return!(!e||"true"!==e)}(t),bridgeId:function(t){return t.frameElement&&t.frameElement.getAttribute("data-bridge-id")}(t),isSpaceOverview:n.indexOf("isSpaceOverview=true")>0,isOverflowAllowed:-1!==decodeURIComponent(function(t){return t.location&&t.location.search?t.location.search.substr(1).split("&").reduce(function(t,e){var n=r(e.split("="),2),o=n[0],i=n[1];return t[o]=decodeURIComponent(i),t},{}):{}}(t).addonUrl||n).indexOf("/customcontent/"),contextPath:i(e,"confluence-context-path"),remoteUser:i(e,"ajs-remote-user"),remoteUserKey:i(e,"ajs-remote-user-key"),userLocale:i(e,"user-locale"),darkFeatures:(i(e,"ajs-enabled-dark-features")||"").split(","),contentType:i(e,"ajs-content-type")||"",pageId:i(e,"ajs-page-id")}}}});
//# sourceMappingURL=fallback-mode.a1a2125bfb7ce359c00a-v35.js.map