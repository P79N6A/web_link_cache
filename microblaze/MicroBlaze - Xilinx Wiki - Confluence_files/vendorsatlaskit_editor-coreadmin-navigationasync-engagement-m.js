(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{SQNO:function(o,n,r){!function(n,a){o.exports=function(o,n,r){return function(o){function n(a){if(r[a])return r[a].exports;var e=r[a]={exports:{},id:a,loaded:!1};return o[a].call(e.exports,e,e.exports,n),e.loaded=!0,e.exports}var r={};return n.m=o,n.c=r,n.p="",n(0)}([function(o,n,r){o.exports=r(1)},function(o,n,r){"use strict";function a(o){return o&&o.__esModule?o:{default:o}}var e=r(2),t=a(e),i=r(3),l=a(i),k=r(4),u=["akGridSizeUnitless","akZIndexNavigation","akZIndexLayer","akZIndexBlanket","akZIndexFlag","akZIndexCard","akZIndexDialog","akZIndexModal"];(0,l.default)(k).forEach(function(n){u.indexOf(n)>-1?o.exports[n]=parseInt(k[n],10):o.exports[n]=k[n]});var C=r(5),c=C.default,p=r(7),d=p.default,s=r(8),F=s.default,f=r(9),x=f.default;o.exports=(0,t.default)(o.exports,{default:k,akAnimationMixins:c,akElevationMixins:d,akHelperMixins:F,akTypographyMixins:x})},function(n,r){n.exports=o},function(o,r){o.exports=n},function(o,n){"use strict";o.exports={akBorderRadius:"3px",akColorPrimary1:"#172B4D",akColorPrimary2:"#0747A6",akColorPrimary3:"#FFFFFF",akColorSecondary1:"#FF5630",akColorSecondary2:"#FFAB00",akColorSecondary3:"#36B37E",akColorSecondary4:"#6554C0",akColorSecondary5:"#00B8D9",akColorR50:"#FFEBE6",akColorR75:"#FFBDAD",akColorR100:"#FF8F73",akColorR200:"#FF7452",akColorR300:"#FF5630",akColorR400:"#DE350B",akColorR500:"#BF2600",akColorY50:"#FFFAE6",akColorY75:"#FFF0B3",akColorY100:"#FFE380",akColorY200:"#FFC400",akColorY300:"#FFAB00",akColorY400:"#FF991F",akColorY500:"#FF8B00",akColorG50:"#E3FCEF",akColorG75:"#ABF5D1",akColorG100:"#79F2C0",akColorG200:"#57D9A3",akColorG300:"#36B37E",akColorG400:"#00875A",akColorG500:"#006644",akColorB50:"#DEEBFF",akColorB75:"#B3D4FF",akColorB100:"#4C9AFF",akColorB200:"#2684FF",akColorB300:"#0065FF",akColorB400:"#0052CC",akColorB500:"#0747A6",akColorP50:"#EAE6FF",akColorP75:"#C0B6F2",akColorP100:"#998DD9",akColorP200:"#8777D9",akColorP300:"#6554C0",akColorP400:"#5243AA",akColorP500:"#403294",akColorT50:"#E6FCFF",akColorT75:"#B3F5FF",akColorT100:"#79E2F2",akColorT200:"#00C7E6",akColorT300:"#00B8D9",akColorT400:"#00A3BF",akColorT500:"#008DA6",akColorN0:"#FFFFFF",akColorN10:"#FAFBFC",akColorN20:"#F4F5F7",akColorN30:"#EBECF0",akColorN40:"#DFE1E6",akColorN50:"#C1C7D0",akColorN60:"#B3BAC5",akColorN70:"#A5ADBA",akColorN80:"#97A0AF",akColorN90:"#8993A4",akColorN100:"#7A869A",akColorN200:"#6B778C",akColorN300:"#5E6C84",akColorN400:"#505F79",akColorN500:"#42526E",akColorN600:"#344563",akColorN700:"#253858",akColorN800:"#172B4D",akColorN900:"#091E42",akColorN10A:"rgba(9, 30, 66, 0.02)",akColorN20A:"rgba(9, 30, 66, 0.04)",akColorN30A:"rgba(9, 30, 66, 0.08)",akColorN40A:"rgba(9, 30, 66, 0.13)",akColorN50A:"rgba(9, 30, 66, 0.25)",akColorN60A:"rgba(9, 30, 66, 0.31)",akColorN70A:"rgba(9, 30, 66, 0.36)",akColorN80A:"rgba(9, 30, 66, 0.42)",akColorN90A:"rgba(9, 30, 66, 0.48)",akColorN100A:"rgba(9, 30, 66, 0.54)",akColorN200A:"rgba(9, 30, 66, 0.60)",akColorN300A:"rgba(9, 30, 66, 0.66)",akColorN400A:"rgba(9, 30, 66, 0.71)",akColorN500A:"rgba(9, 30, 66, 0.77)",akColorN600A:"rgba(9, 30, 66, 0.82)",akColorN700A:"rgba(9, 30, 66, 0.89)",akColorN800A:"rgba(9, 30, 66, 0.95)",akFontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",akFontSizeDefault:"14px",akCodeFontFamily:"'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Courier, monospace",akGridSizeUnitless:"8",akGridSize:"8px",akZIndexCard:"100",akZIndexDialog:"200",akZIndexNavigation:"300",akZIndexLayer:"400",akZIndexBlanket:"500",akZIndexModal:"510",akZIndexFlag:"600"}},function(o,n,r){"use strict";function a(o,n){if(!Array.isArray(o))throw new Error("Animation mixin expects an array, but received `"+(void 0===o?"undefined":(0,u.default)(o))+"`");return o.map(function(o){return o.property+": "+function(o,n){var r=o.deltas,a=o.value,e=r.map(function(o){var r=o.from,a=o.to;return r+(a-r)*n});return a?a(e):e[0]}(o,n)+";"}).join("\n").trim()}function e(o){return"\n    0% {\n      "+a(o,0)+";\n      animation-timing-function: cubic-bezier(0.23830050393398, 0, 0.25586732616931, 0.79011192334632);\n    }\n    20% {\n      "+a(o,.8)+";\n      animation-timing-function: cubic-bezier(0.21787238302442, 0.98324004924648, 0.58694150667646, 1);\n    }\n    100% {\n      "+a(o,1)+";\n    }\n  "}function t(o){return"\n    0% {\n      "+a(o,0)+";\n      animation-timing-function: cubic-bezier(0.33333333, 0, 0.4, 1);\n    }\n    20% {\n      "+a(o,1.05)+";\n      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);\n    }\n    76% {\n      "+a(o,.975)+";\n      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);\n    }\n    100% {\n      "+a(o,1)+";\n    }\n  "}function i(o){return"\n    0% {\n      "+a(o,0)+";\n      animation-timing-function: cubic-bezier(0.4, 0, 0.15, 1);\n    }\n    50% {\n      "+a(o,1.1)+";\n      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);\n    }\n    100% {\n      "+a(o,1)+";\n    }\n  "}function l(o){for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return function(n){if(0===r.length)return console.warn("Interpolate is not required. Use a `String` or remove the value property for direct numeric mapping."),o.join("");var a=[];return r.forEach(function(r,e){a.push(o[e]),a.push(r(n[e]))}),a.push(o[o.length-1]),a.join("")}}Object.defineProperty(n,"__esModule",{value:!0});var k=r(6),u=function(o){return o&&o.__esModule?o:{default:o}}(k);n.createBold=e,n.createOptimistic=t,n.createCombined=i,n.interpolate=l,n.default={createBold:e,createCombined:i,createOptimistic:t,interpolate:l}},function(o,n){o.exports=r},function(o,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=r(1),e="\n  box-shadow: 0 1px 1px "+a.akColorN50A+", 0 0 1px 0 "+a.akColorN60A+";\n  z-index: "+a.akZIndexCard+";\n",t="\n  box-shadow: 0 4px 8px -2px "+a.akColorN60A+", 0 0 1px "+a.akColorN60A+";\n  z-index: "+a.akZIndexDialog+";\n",i="\n  box-shadow: 0 8px 16px -4px "+a.akColorN60A+", 0 0 1px "+a.akColorN60A+";\n  z-index: "+a.akZIndexModal+";\n",l="\n  box-shadow: 0 20px 32px -8px "+a.akColorN50A+", 0 0 1px "+a.akColorN60A+";\n  z-index: "+a.akZIndexFlag+";\n";n.default={e100:e,e200:t,e500:i,e600:l}},function(o,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=r(1),e=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.akColorB100,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"2px";return"\n  &:focus {\n    box-shadow: 0 0 0 "+n+" "+o+";\n    outline: none;\n  }\n"},t="\n  "+e()+"\n";n.default={focusRing:{generate:e,default:t,none:"\n  box-shadow: none;\n"},text:{truncate:function(o){return"\n  max-width: "+o+";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"}},placeholder:function(o){return"\n    &::-webkit-input-placeholder {\n      "+o+"\n    }\n    &:-moz-placeholder {\n      "+o+"\n    }\n    &::-moz-placeholder {\n      "+o+"\n    }\n    &:-ms-input-placeholder {\n      "+o+"\n    }\n  "}}},function(o,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=r(1),e=parseInt(a.akFontSizeDefault,10),t=parseInt(a.akGridSizeUnitless,10),i=function(o,n){return"\n  font-size: "+o/e+"em;\n  font-style: inherit;\n  line-height: "+n/o+";\n"},l="\n  "+i(35,40)+"\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  margin-top: "+6.5*t+"px;\n",k="\n  "+i(29,32)+"\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  margin-top: "+5*t+"px;\n",u="\n  "+i(24,28)+"\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  margin-top: "+5*t+"px;\n",C="\n  "+i(20,24)+"\n  font-weight: 500;\n  letter-spacing: -0.008em;\n  margin-top: "+3.5*t+"px;\n",c="\n  "+i(16,20)+"\n  font-weight: 600;\n  letter-spacing: -0.006em;\n  margin-top: "+3*t+"px;\n",p="\n  "+i(14,16)+"\n  font-weight: 600;\n  letter-spacing: -0.003em;\n  margin-top: "+2*t+"px;\n",d="\n  "+i(12,16)+"\n  color: "+a.akColorN300+";\n  font-weight: 600;\n  margin-top: "+2.5*t+"px;\n  text-transform: uppercase;\n",s="\n  "+i(12,16)+"\n  color: "+a.akColorN300+";\n  font-weight: 600;\n  margin-top: "+2*t+"px;\n",F="\n  "+i(12,16)+"\n  color: "+a.akColorN300+";\n  font-weight: normal;\n  margin-top: "+2*t+"px;\n";n.default={h100:F,h200:s,h300:d,h400:p,h500:c,h600:C,h700:u,h800:k,h900:l}}])}(r("CafK"),r("/GOs"),r("2tcU"))}()}}]);
//# sourceMappingURL=vendors~@atlaskit_editor-core~admin-navigation~async-engagement-messages~content-renderer~dashboard.~97aab423.85eeb3491259f942022a-v35.js.map