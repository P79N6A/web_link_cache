(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"3QpL":function(r,e,n){"use strict";function t(r,e){return Object.keys(r).every(function(r){return-1!==e.indexOf(r)})}n.r(e);var o=function(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;n=n.replace("#","").match(/.{2}/g);for(var a=0;a<n.length;a++)n[a]=parseInt(n[a],16);switch(e){case"rgb":return{r:n[0],g:n[1],b:n[2]};default:return o.convert({conversions:t,operations:o,helpers:s},e,{r:n[0],g:n[1],b:n[2]})}},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},a=function(){return function(r,e){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return function(r,e){var n=[],t=!0,o=!1,s=void 0;try{for(var a,c=r[Symbol.iterator]();!(t=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);t=!0);}catch(r){o=!0,s=r}finally{try{!t&&c.return&&c.return()}finally{if(o)throw s}}return n}(r,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(r){if(Array.isArray(r)){for(var e=0,n=Array(r.length);e<r.length;e++)n[e]=r[e];return n}return Array.from(r)},i={hex:{test:function(r){return"string"==typeof r&&"#"===r.slice(0,1)},convert:o},rgb:{test:function(r){return t(r,["r","g","b"])},convert:function(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"hex":return 1==(M=Math.round(n.r).toString(16)).length&&(M="0"+M),1==(m=Math.round(n.g).toString(16)).length&&(m="0"+m),1==(Y=Math.round(n.b).toString(16)).length&&(Y="0"+Y),"#"+M+m+Y;case"cssrgb":return"rgb("+Math.round(n.r)+","+Math.round(n.g)+","+Math.round(n.b)+")";case"hsl":var c=[M=n.r/255,m=n.g/255,Y=n.b/255].sort(),i=(c[0]+c[2])/2*100;return c[0]==c[2]?(y=0,d=0):(y=i>=50?(c[2]-c[0])/(2-c[2]-c[0])*100:(c[2]-c[0])/(c[2]+c[0])*100,(d=c[2]==M?(m-Y)/(c[2]-c[0])*60:c[2]==m?60*(2+(Y-M)/(c[2]-c[0])):60*(4+(M-m)/(c[2]-c[0])))<0?d+=360:d>360&&(d%=360)),{h:d,s:y,l:i};case"csshsl":var u=o.convert({conversions:t,helpers:s},"hsl",n);return"hsl("+Math.round(u.h)+","+Math.round(u.s)+"%,"+Math.round(u.l)+"%)";case"cmyk":var h=n.r/255,l=n.g/255,v=n.b/255,p=1-Math.max(h,l,v);if(1!=p)var f=(1-h-p)/(1-p),b=(1-l-p)/(1-p),g=(1-v-p)/(1-p);else f=0,b=0,g=0;return{c:f,m:b,y:g,k:p};case"hsv":var d,y,M=n.r/255,m=n.g/255,Y=n.b/255,X=Math.min(M,m,Y),w=Math.max(M,m,Y),Z=w-X;if(0==Z)d=0,y=0;else{y=Z/w;var L=((w-M)/6+Z/2)/Z,R=((w-m)/6+Z/2)/Z,S=((w-Y)/6+Z/2)/Z;M==w?d=S-R:m==w?d=1/3+L-S:Y==w&&(d=2/3+R-L),d<0&&(d+=1),d>1&&(d-=1)}return{h:360*d,s:100*y,v:100*w};case"yiq":g=n.r/255*.299+n.g/255*.587+n.b/255*.114;var A=n.r/255*.596+n.g/255*-.274+n.b/255*-.322,O=n.r/255*.211+n.g/255*-.523+n.b/255*.312;return{y:g,i:A=s.bounded(A,[-.5957,.5957]),q:O=s.bounded(O,[-.5226,.5226])};case"XYZ":var I=[n.r,n.g,n.b].map(function(r){return r/255}).map(function(r){return r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4)}),D=s.getTransform("SRGB_XYZ").map(function(r){return I.reduce(function(e,n,t){return r[t]*n+e},0)}).map(function(r){return 100*r}),x=a(D,3);return{X:x[0],Y:x[1],Z:x[2]};case"lms":case"cielab":case"cieluv":case"xyY":var E=o.convert({conversions:t,operations:o,helpers:s},"XYZ",n);return o.convert({conversions:t,operations:o,helpers:s},e,E);case"cielch":var j=o.convert({conversions:t,operations:o,helpers:s},"cieluv",n);return o.convert({conversions:t,operations:o,helpers:s},e,j);case"hsluv":var k=o.convert({conversions:t,operations:o,helpers:s},"cielch",n);return o.convert({conversions:t,operations:o,helpers:s},e,k)}}},cssrgb:{test:function(r){return"string"==typeof r&&"rgb("===r.slice(0,4)},convert:function(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;n=n.replace(/((rgb\(|\))|[\s]*)/g,"").split(",");for(var a=0;a<n.length;a++)n[a]=parseInt(n[a]);switch(e){case"rgb":return{r:n[0],g:n[1],b:n[2]};default:return o.convert({conversions:t,operations:o,helpers:s},e,{r:n[0],g:n[1],b:n[2]})}}},hsl:{test:function(r){return t(r,["h","s","l"])},convert:function(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"rgb":if(0==n.s){var a=n.l/100*255;return{r:a,g:a,b:a}}var c,i,u;c=n.l>=50?n.l/100+n.s/100-n.l/100*(n.s/100):n.l/100*(1+n.s/100),i=n.l/100*2-c;var h,l,v,p=(.333+(u=n.h/360))%1,f=u,b=s.negMod(u-.333,1);return h=6*p<1?i+6*(c-i)*p:2*p<1?c:3*p<2?i+6*(.666-p)*(c-i):i,l=6*f<1?i+6*(c-i)*f:2*f<1?c:3*f<2?i+6*(.666-f)*(c-i):i,v=6*b<1?i+6*(c-i)*b:2*b<1?c:3*b<2?i+6*(.666-b)*(c-i):i,h<0&&(h=0),l<0&&(l=0),v<0&&(v=0),{r:255*h,g:255*l,b:255*v};case"csshsl":return"hsl("+Math.round(n.h)+","+Math.round(n.s)+"%,"+Math.round(n.l)+"%)";case"hsv":n.s=n.s/100,n.l=n.l/100;var g=n.s*(n.l<.5?n.l:1-n.l);return{h:n.h,s:2*g/(n.l+g)*100,v:100*(n.l+g)};default:var d=o.convert({conversions:t,operations:o,helpers:s},"rgb",n);return o.convert({conversions:t,operations:o,helpers:s},e,d)}}},csshsl:{test:function(r){return"string"==typeof r&&"hsl("===r.slice(0,4)},convert:function(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;n=n.replace(/(hsl\(|\)|%|[\s]*)/g,"").split(",");for(var a=0;a<n.length;a++)n[a]=parseInt(n[a]);switch(e){case"hsl":return{h:n[0],s:n[1],l:n[2]};default:return o.convert({conversions:t,operations:o,helpers:s},e,{h:n[0],s:n[1],l:n[2]})}}},hsv:{test:function(r){return t(r,["h","s","v"])},convert:function(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"rgb":n.h=n.h/360,n.s=n.s/100,n.v=n.v/100;var a=6*n.h;6==a&&(a=0);var c,i,u,h=Math.round(a),l=n.v*(1-n.s),v=n.v*(1-n.s*(a-h)),p=n.v*(1-n.s*(1-(a-h)));return 0==h?(c=n.v,i=p,u=l):1==h?(c=v,i=n.v,u=l):2==h?(c=l,i=n.v,u=p):3==h?(c=l,i=v,u=n.v):4==h?(c=p,i=l,u=n.v):(c=n.v,i=l,u=v),{r:255*c,g:255*i,b:255*u};case"hsl":return n.h=n.h/360,n.s=n.s/100,n.v=n.v/100,{h:360*n.h,s:100*((2-n.s)*n.v<1?n.s*n.v/((2-n.s)*n.v):n.s*n.v/(2-(2-n.s)*n.v)),l:(2-n.s)*n.v/2*100};default:var f=o.convert({conversions:t,operations:o,helpers:s},"rgb",n);return o.convert({conversions:t,operations:o,helpers:s},e,f)}}},cmyk:{test:function(r){return t(r,["c","m","y","k"])},convert:function(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"rgb":return{r:a=255*(1-n.c)*(1-n.k),g:c=255*(1-n.m)*(1-n.k),b:i=255*(1-n.y)*(1-n.k)};case"cssrgb":var a=255*(1-n.c)*(1-n.k),c=255*(1-n.m)*(1-n.k),i=255*(1-n.y)*(1-n.k);return"rgb("+Math.round(a)+","+Math.round(c)+","+Math.round(i)+")";default:var u=o.convert({conversions:t,operations:o,helpers:s},"rgb",n);return o.convert({conversions:t,operations:o,helpers:s},e,u)}}},yiq:{test:function(r){return t(r,["y","i","q"])},convert:function(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(n.i=s.bounded(n.i,[-.5957,.5957]),n.q=s.bounded(n.q,[-.5226,.5226]),e){case"rgb":var a=255*(n.y+.956*n.i+.621*n.q),c=255*(n.y+-.272*n.i+-.647*n.q),i=255*(n.y+-1.106*n.i+-1.703*n.q);return{r:a=s.bounded(a,[0,255]),g:c=s.bounded(c,[0,255]),b:i=s.bounded(i,[0,255])};default:var u=o.convert({conversions:t,operations:o,helpers:s},"rgb",n);return o.convert({conversions:t,operations:o,helpers:s},e,u)}}},XYZ:{test:function(r){return t(r,["X","Y","Z"])},convert:function(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers,c=s.getIlluminant("D65");switch(e){case"rgb":var i=[n.X,n.Y,n.Z].map(function(r){return r/100}),u=s.getTransform("INVERSE_SRGB_XYZ").map(function(r){return i.reduce(function(e,n,t){return r[t]*n+e},0)}).map(function(r){return r<=.0031308?12.92*r:1.055*Math.pow(r,1/2.4)-.055}).map(function(r){return 255*r}),h=a(u,3),l=h[0],v=h[1],p=h[2];return s.boundedRgb({r:l,g:v,b:p});case"lms":var f=[n.X,n.Y,n.Z].map(function(r){return r/100}),b=s.getTransform("BRADFORD").map(function(r){return f.reduce(function(e,n,t){return r[t]*n+e},0)});return{rho:b[0],gamma:b[1],beta:b[2]};case"cielab":var g=n.X/c.X,d=n.Y/c.Y,y=n.Z/c.Z,M=function(r){return r>.008856?s.cbrt(r):(903.3*r+16)/116},m=M(g),Y=M(d);return{L:116*Y-16,a:500*(m-Y),b:200*(Y-M(y))};case"cieluv":var X=n.Y/c.Y,w=X>.008856?116*s.cbrt(X)-16:903.3*X,Z=function(r){return 4*r.X/(r.X+15*r.Y+3*r.Z)},L=function(r){return 9*r.Y/(r.X+15*r.Y+3*r.Z)};return{L:w,u:13*w*(Z(n)-Z(c)),v:13*w*(L(n)-L(c))};case"xyY":return{x:n.X/(n.X+n.Y+n.Z),y:n.Y/(n.X+n.Y+n.Z),Y:n.Y};default:var R=s.boundedRgb(o.convert({conversions:t,operations:o,helpers:s},"rgb",n));return o.convert({conversions:t,operations:o,helpers:s},e,R)}}},xyY:{test:function(r){return t(r,["x","y","Y"])},convert:function(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"XYZ":var a=n.Y/n.y*n.x,c=n.Y/n.y*(1-n.x-n.y);return{X:a,Y:n.Y,Z:c};default:var i=o.convert({conversions:t,operations:o,helpers:s},"XYZ",n);return o.convert({conversions:t,operations:o,helpers:s},e,i)}}},lms:{test:function(r){return t(r,["rho","gamma","beta"])},convert:function(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"XYZ":var a=[n.rho,n.gamma,n.beta],c=s.getTransform("INVERSE_BRADFORD").map(function(r){return a.reduce(function(e,n,t){return r[t]*n+e},0)});return{X:100*c[0],Y:100*c[1],Z:100*c[2]};default:var i=o.convert({conversions:t,operations:o,helpers:s},"XYZ",n);return o.convert({conversions:t,operations:o,helpers:s},e,i)}}},cielab:{test:function(r){return t(r,["L","a","b"])},convert:function(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"XYZ":var a=s.getIlluminant("D65"),c=(n.L+16)/116,i=n.a/500+c,u=c-n.b/200,h=function(r){return Math.pow(r,3)>.008856?Math.pow(r,3):(116*r-16)/903.3},l=h(i),v=h(u),p=n.L>903.3*.008856?Math.pow(c,3):n.L/903.3;return{X:l*a.X,Y:p*a.Y,Z:v*a.Z};default:var f=o.convert({conversions:t,operations:o,helpers:s},"XYZ",n);return o.convert({conversions:t,operations:o,helpers:s},e,f)}}},cieluv:{test:function(r){return t(r,["L","u","v"])},convert:function(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"XYZ":var a=s.getIlluminant("D65"),c=function(r){return 4*r.X/(r.X+15*r.Y+3*r.Z)}(a),i=function(r){return 9*r.Y/(r.X+15*r.Y+3*r.Z)}(a),u=1/3*(52*n.L/(n.u+13*n.L*c)-1),h=n.L>903.3*.008856?Math.pow((n.L+16)/116,3):n.L/903.3,l=-5*h,v=(h*(39*n.L/(n.v+13*n.L*i)-5)-l)/(u- -1/3);return{X:100*v,Y:100*h,Z:100*(v*u+l)};case"cielch":var p=Math.sqrt(Math.pow(n.u,2)+Math.pow(n.v,2)),f=Math.atan2(n.v,n.u);return f<0&&(f+=2*Math.PI),f=s.toDeg(f),{L:n.L,C:p,h:f};default:var b=o.convert({conversions:t,operations:o,helpers:s},"XYZ",n);return o.convert({conversions:t,operations:o,helpers:s},e,b)}}},cielch:{test:function(r){return t(r,["L","C","h"])},convert:function(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"cieluv":var a=s.toRad(n.h),c=n.C*Math.cos(a),i=n.C*Math.sin(a);return{L:n.L,u:c,v:i};case"hsluv":if(n.L>99.9999999)return{hu:n.h,s:0,l:100};if(n.L<1e-8)return{hu:n.h,s:0,l:0};for(var u=(n.L+16)/1560896,h=u>.008856?u:n.L/903.3,l=s.getTransform("INVERSE_SRGB_XYZ"),v=[],p=0;p<3;p++)for(var f=l[p][0],b=l[p][1],g=l[p][2],d=0;d<2;d++){var y=(284517*f-94839*g)*h,M=(838422*g+769860*b+731718*f)*n.L*h-769860*d*n.L,m=(632260*g-126452*b)*h+126452*d;v.push({m:y/m,b:M/m})}var Y=Number.MAX_VALUE,X=s.toRad(n.h);v.forEach(function(r){var e=r.b/(Math.sin(X)-r.m*Math.cos(X));e>=0&&(Y=Math.min(Y,e))});var w=Y;return{hu:n.h,s:n.C/w*100,l:n.L};default:var Z=o.convert({conversions:t,operations:o,helpers:s},"cieluv",n);return o.convert({conversions:t,operations:o,helpers:s},e,Z)}}},hsluv:{test:function(r){return t(r,["hu","s","l"])},convert:function(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"cielch":if(n.L>99.9999999)return{L:100,C:0,h:n.hu};if(n.L<1e-8)return{L:0,C:0,h:n.hu};for(var a=(n.l+16)/1560896,c=a>.008856?a:n.l/903.3,i=s.getTransform("INVERSE_SRGB_XYZ"),u=[],h=0;h<3;h++)for(var l=i[h][0],v=i[h][1],p=i[h][2],f=0;f<2;f++){var b=(284517*l-94839*p)*c,g=(838422*p+769860*v+731718*l)*n.l*c-769860*f*n.l,d=(632260*p-126452*v)*c+126452*f;u.push({m:b/d,b:g/d})}var y=Number.MAX_VALUE,M=s.toRad(n.hu);u.forEach(function(r){var e=r.b/(Math.sin(M)-r.m*Math.cos(M));e>=0&&(y=Math.min(y,e))});var m=y;return{L:n.l,C:m/100*n.s,h:n.hu};default:var Y=o.convert({conversions:t,operations:o,helpers:s},"cielch",n);return o.convert({conversions:t,operations:o,helpers:s},e,Y)}}}},u={adapt:function(r,e,n,t){var o=r.operations.convert(r,"XYZ",e),s=r.operations.convert(r,"lms",n);if(t)a=r.operations.convert(r,"lms",t);else var a=r.operations.convert(r,"lms",r.helpers.getIlluminant("D65"));var c=r.helpers.getTransform("BRADFORD"),i=r.helpers.getTransform("INVERSE_BRADFORD"),u=[[s.rho/a.rho,0,0],[0,s.gamma/a.gamma,0],[0,0,s.beta/a.beta]],h=r.helpers.matrixMultiply(i,u),l=r.helpers.matrixMultiply(h,c),v=[[o.X],[o.Y],[o.Z]],p=r.helpers.matrixMultiply(l,v),f={X:p[0][0],Y:p[1][0],Z:p[2][0]};return r.helpers.ready(r,f)},adjacent:function(r,e,n,t){for(var o=r.operations.convert(r,"hsl",t),s=[{h:o.h,s:o.s,l:o.l}],a=0;a<n-1;a++)o.h=r.helpers.negMod(o.h+e,360),s.push({h:o.h,s:o.s,l:o.l});return r.helpers.ready(r,s)},brightness:function(r,e,n){var t=r.operations.convert(r,"hsl",n);return t.l+=e,t.l<0?t.l=0:t.l>100&&(t.l=100),r.helpers.ready(r,t)},complementary:function(r,e){var n=r.operations.convert(r,"hsl",e);return n.h=(n.h+180)%360,r.helpers.ready(r,n)},contrast:function(r,e,n){var t=r.operations.convert(r,"rgb",n);return t.r=255*((t.r/255-.5)*e+.5),t.r<0?t.r=0:t.r>255&&(t.r=255),t.g=255*((t.g/255-.5)*e+.5),t.g<0?t.g=0:t.g>255&&(t.g=255),t.b=255*((t.b/255-.5)*e+.5),t.b<0?t.b=0:t.b>255&&(t.b=255),r.helpers.ready(r,t)},contrastRatio:function(r,e){var n=r.operations.convert(r,"rgb",e);return n=(299*n.r+587*n.g+114*n.b)/1e3>=128?{r:0,g:0,b:0}:{r:255,g:255,b:255},r.helpers.ready(r,n)},convert:function(r,e,n){if(Object.keys(r.conversions).indexOf(e)>-1){n.colour?n=n.colour:n.colours&&(n=n.colours);var t=r.helpers.determineMode(n);return t!=e?r.conversions[t].convert(r,e,n):n}return r.helpers.ready(r,e)},difference:function(r,e,n,t,o){t=t||1,o=o||1;var s=r.operations.convert(r,"cielab",e),a=r.operations.convert(r,"cielab",n),c=Math.sqrt(Math.pow(s.a,2)+Math.pow(s.b,2)),i=c-Math.sqrt(Math.pow(a.a,2)+Math.pow(a.b,2)),u=s.L-a.L,h=s.a-a.a,l=s.b-a.b,v=Math.sqrt(Math.pow(h,2)+Math.pow(l,2)-Math.pow(i,2)),p=s.L<16?.511:.040975*s.L/(1.01765*s.L),f=.0638*c/(1.0131*c),b=Math.atan2(s.b,s.a),g=b>=0?b:b+360,d=164<=g&&g<=345?.56+Math.abs(.2*Math.cos(r.helpers.toRad(g+168))):.36+Math.abs(.4*Math.cos(r.helpers.toRad(g+35))),y=Math.pow(c,4)/(Math.pow(c,4)+1900),M=f*(y*d+1-y),m=Math.pow(u/(t*p),2);return Math.pow(i/(o*f),2),Math.pow(v/M,2),Math.sqrt(m+m+m)},fade:function(r,e,n,t){var o=r.operations.convert(r,"rgb",n),s=r.operations.convert(r,"rgb",t),a=[o];e-=1;for(var c=(s.r-o.r)/e,i=(s.g-o.g)/e,u=(s.b-o.b)/e,h={r:o.r,g:o.g,b:o.b},l=0;l<e-1;l++)h.r=r.helpers.slopeMod(h.r+c,255),h.g=r.helpers.slopeMod(h.g+i,255),h.b=r.helpers.slopeMod(h.b+u,255),a.push({r:h.r,g:h.g,b:h.b});return a.push(s),r.helpers.ready(r,a)},greyscale:function(r,e){var n=r.operations.convert(r,"rgb",e),t=(n.r+n.g+n.b)/3;return n={r:t,g:t,b:t},r.helpers.ready(r,n)},hue:function(r,e,n){var t=r.operations.convert(r,"hsl",n);return t.h=r.helpers.negMod(t.h+e,360),r.helpers.ready(r,t)},invert:function(r,e){var n=r.operations.convert(r,"rgb",e);return n.r=r.helpers.negMod(255-n.r,255),n.g=r.helpers.negMod(255-n.g,255),n.b=r.helpers.negMod(255-n.b,255),r.helpers.ready(r,n)},invertLightness:function(r,e){var n=r.operations.convert(r,"hsl",e);return n.l=100-n.l,r.helpers.ready(r,n)},mid:function(r,e,n){var t=r.operations.convert(r,"hsl",e),o=r.operations.convert(r,"hsl",n),s={h:(t.h+o.h)/2,s:(t.s+o.s)/2,l:(t.l+o.l)/2};return r.helpers.ready(r,s)},multiply:function(r,e,n){var t=r.operations.convert(r,"hsl",e),o=r.operations.convert(r,"hsl",n),s={h:t.h,s:t.s,l:t.l/100*(o.l/100)*100};return s.l=s.l>100?100:s.l,s.l=s.l<0?0:s.l,r.helpers.ready(r,s)},saturation:function(r,e,n){var t=r.operations.convert(r,"hsl",n);return t.s+=e,t.s<0?t.s=0:t.s>100&&(t.s=100),r.helpers.ready(r,t)},sepia:function(r,e){var n=r.operations.convert(r,"rgb",e),t={};return t.r=.393*n.r+.769*n.g+.189*n.b,t.g=.349*n.r+.686*n.g+.168*n.b,t.b=.272*n.r+.534*n.g+.131*n.b,r.helpers.ready(r,t)},shade:function(r,e,n){var t=r.operations.convert(r,"hsv",n);return t.v+=e,t.v<0?t.v=0:t.v>100&&(t.v=100),r.helpers.ready(r,t)},temperature:function(r,e){var n=r.operations.convert(r,"xyY",e),t=(n.x-.332)/(n.y-.1858);return-449*Math.pow(t,3)+3525*Math.pow(t,2)-6823.3*t+5520.33},tetrad:function(r,e){for(var n=r.operations.convert(r,"hsl",e),t=[{h:n.h,s:n.s,l:n.l}],o=0;o<3;o++)n.h=(n.h+90)%360,t.push({h:n.h,s:n.s,l:n.l});return r.helpers.ready(r,t)},triad:function(r,e){for(var n=r.operations.convert(r,"hsl",e),t=[{h:n.h,s:n.s,l:n.l}],o=0;o<2;o++)n.h=(n.h+120)%360,t.push({h:n.h,s:n.s,l:n.l});return r.helpers.ready(r,t)}},h={ILLUMINANTS:{A:{X:1.0985*100,Y:100,Z:35.585},B:{X:99.072,Y:100,Z:85.223},C:{X:98.074,Y:100,Z:118.232},D50:{X:96.422,Y:100,Z:82.521},D55:{X:95.682,Y:100,Z:92.149},D65:{X:95.047,Y:100,Z:108.883},D75:{X:94.972,Y:100,Z:122.638},E:{X:100,Y:100,Z:100},F2:{X:.99186*100,Y:100,Z:67.393},F7:{X:95.041,Y:100,Z:108.747},F11:{X:1.00962*100,Y:100,Z:64.35}},TRANSFORMS:{BRADFORD:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],INVERSE_BRADFORD:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]],SRGB_XYZ:[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],INVERSE_SRGB_XYZ:[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]]}},l=function(r,e,n){var t=Object.keys(r.operations).reduce(function(e,t){var o=r.operations[t];return e[t]=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=t.slice(0).map(function(r){return"object"===(void 0===r?"undefined":s(r))?Object.assign({},r):r});return n&&n.colours?function e(n){var t=n.map(function(n){if(Array.isArray(n)){var t=e(n);return t.colours||t.colour}var a=o.apply(void 0,[r].concat(c(i),[n]));return"object"===(void 0===a?"undefined":s(a))?a.colours||a.colour:a});return"number"!=typeof t[0]?r.helpers.ready(r,t):t}(n.colours):o.apply(void 0,[r].concat(c(i),[n?n.colour:void 0]))},e},{});return n||(t=Object.assign(t,e)),t},v={getIlluminant:function(r){return h.ILLUMINANTS[r]},getTransform:function(r){return h.TRANSFORMS[r]},matrixMultiply:function(r,e){for(var n=[],t=0;t<r.length;t++){n[t]=[];for(var o=0;o<e[0].length;o++){for(var s=0,a=0;a<r[0].length;a++)s+=r[t][a]*e[a][o];n[t][o]=s}}return n},cbrt:function(r){if(Math.cbrt)return Math.cbrt(r);var e=Math.pow(Math.abs(r),1/3);return r<0?-e:e},toRad:function(r){return r*(Math.PI/180)},toDeg:function(r){return r*(180/Math.PI)},negMod:function(r,e){return(r%e+e)%e},slopeMod:function(r){function e(e,n){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e}(function(r,e){return r>2*e?slopeMod(r-2*e,e):r>e?2*e-r:r<0?slopeMod(r+2*e,e):r}),bounded:function(r,e){return r<e[0]?r=e[0]:r>e[1]&&(r=e[1]),r},boundedRgb:function(r){var e=this,n=function(r){return e.bounded(r,[0,255])};return{r:n(r.r),g:n(r.g),b:n(r.b)}},determineMode:function(r){for(var e in i)if(i.hasOwnProperty(e)&&i[e].test(r))return e;return null},ready:function(r,e){var n=r.conversions,t=r.operations,o=r.helpers,s={};switch(Object.prototype.toString.call(e)){case"[object Object]":case"[object String]":for(var a in s.colour=e,n)n.hasOwnProperty(a)&&function(r){Object.defineProperty(s,r,{get:function(){return o.determineMode(e),t.convert({conversions:n,operations:t,helpers:o},r,e)},enumerable:!0})}(a);return Object.assign(s,l({conversions:n,operations:t,helpers:o},h,s));case"[object Array]":for(var c in s.colours=e,n)n.hasOwnProperty(c)&&function(r){Object.defineProperty(s,r,{get:function(){return function e(s){return s.map(function(s){return Array.isArray(s)?e(s):t.convert({conversions:n,operations:t,helpers:o},r,s)})}(e)},enumerable:!0})}(c);return Object.assign(s,l({conversions:n,operations:t,helpers:o},h,s));default:return null}}},p=l({conversions:i,operations:u,helpers:v},h);e.default=p}}]);
//# sourceMappingURL=vendors~admin-navigation~fullpage.editor.wrapper~global-navigation~navigation~space-navigation.42c35f4a93342c1aff4a-v35.js.map