WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:plupload', location = 'includes/js/third-party/plupload.js' */
(function(){function x(){this.returnValue=!1}function y(){this.cancelBubble=!0}var z=0,n=[],u={},v={},t={},w={"\x3c":"lt","\x3e":"gt","\x26":"amp",'"':"quot","'":"#39"},A=/[<>&\"\']/g,p=window.setTimeout,l={},h;(function(a){a=a.split(/,/);var b,d,c;for(b=0;b<a.length;b+=2)for(c=a[b+1].split(/ /),d=0;d<c.length;d++){v[c[d]]=a[b];var g=t[a[b]]||[];g.push(c[d]);t[a[b]]=g}})("application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/java-archive,jar,application/java-archive,war,application/java-archive,ear,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.template,xltx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,audio/mpeg,mpga mpega mp2 mp3,audio/mp3,mp3,audio/x-wav,wav,audio/mp4,m4a,image/bmp,bmp,image/gif,gif,image/jpeg,jpeg jpg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/html,htm html xhtml,text/xml,xml,text/javascript,js,text/css,css,text/rtf,rtf,text/x-java-source,java,video/mpeg,mpeg mpg mpe,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/vnd.rn-realvideo,rv,text/csv,csv,text/plain,asc txt text diff log,application/octet-stream,exe");
var c={VERSION:"@@version@@",STOPPED:1,STARTED:2,QUEUED:1,UPLOADING:2,FAILED:4,DONE:5,GENERIC_ERROR:-100,HTTP_ERROR:-200,IO_ERROR:-300,SECURITY_ERROR:-400,INIT_ERROR:-500,FILE_SIZE_ERROR:-600,FILE_EXTENSION_ERROR:-601,IMAGE_FORMAT_ERROR:-700,IMAGE_MEMORY_ERROR:-701,IMAGE_DIMENSIONS_ERROR:-702,mimeTypes:v,mineTypeToExtensionsMap:t,ua:function(){var a=navigator,b=a.userAgent,d=a.vendor,c,g;g=(c=/WebKit/.test(b))&&-1!==d.indexOf("Apple");d=window.opera&&window.opera.buildNumber;return{windows:-1!==navigator.platform.indexOf("Win"),
ie:!c&&!d&&/MSIE/gi.test(b)&&/Explorer/gi.test(a.appName),webkit:c,gecko:!c&&/Gecko/.test(b),safari:g,opera:!!d}}(),extend:function(a){c.each(arguments,function(b,d){0<d&&c.each(b,function(b,c){a[c]=b})});return a},getElement:function(a){return a&&1===a.nodeType?a:document.getElementById(a)},cleanName:function(a){var b,c;c=[/[\300-\306]/g,"A",/[\340-\346]/g,"a",/\307/g,"C",/\347/g,"c",/[\310-\313]/g,"E",/[\350-\353]/g,"e",/[\314-\317]/g,"I",/[\354-\357]/g,"i",/\321/g,"N",/\361/g,"n",/[\322-\330]/g,
"O",/[\362-\370]/g,"o",/[\331-\334]/g,"U",/[\371-\374]/g,"u"];for(b=0;b<c.length;b+=2)a=a.replace(c[b],c[b+1]);a=a.replace(/\s+/g,"_");return a=a.replace(/[^a-z0-9_\-\.]+/gi,"")},addRuntime:function(a,b){b.name=a;n[a]=b;n.push(b);return b},guid:function(){var a=(new Date).getTime().toString(32),b;for(b=0;5>b;b++)a+=Math.floor(65535*Math.random()).toString(32);return(c.guidPrefix||"p")+a+(z++).toString(32)},buildUrl:function(a,b){var d="";c.each(b,function(a,b){d+=(d?"\x26":"")+encodeURIComponent(b)+
"\x3d"+encodeURIComponent(a)});d&&(a+=(0<a.indexOf("?")?"\x26":"?")+d);return a},each:function(a,b){var c,e;if(a)if(c=a.length,void 0===c)for(e in a){if(a.hasOwnProperty(e)&&!1===b(a[e],e))break}else for(e=0;e<c&&!1!==b(a[e],e);e++);},formatSize:function(a){return void 0===a||/\D/.test(a)?c.translate("N/A"):1073741824<a?Math.round(a/1073741824,1)+" GB":1048576<a?Math.round(a/1048576,1)+" MB":1024<a?Math.round(a/1024,1)+" KB":a+" b"},getPos:function(a,b){function c(a){var b,c=0;b=0;a&&(b=a.getBoundingClientRect(),
a="CSS1Compat"===h.compatMode?h.documentElement:h.body,c=b.left+a.scrollLeft,b=b.top+a.scrollTop);return{x:c,y:b}}var e=0,g=0,f,h=document;b=b||h.body;if(a&&a.getBoundingClientRect&&0<navigator.userAgent.indexOf("MSIE")&&8!==h.documentMode)return a=c(a),b=c(b),{x:a.x-b.x,y:a.y-b.y};for(f=a;f&&f!=b&&f.nodeType;)e+=f.offsetLeft||0,g+=f.offsetTop||0,f=f.offsetParent;for(f=a.parentNode;f&&f!=b&&f.nodeType;)e-=f.scrollLeft||0,g-=f.scrollTop||0,f=f.parentNode;return{x:e,y:g}},getSize:function(a){return{w:a.offsetWidth||
a.clientWidth,h:a.offsetHeight||a.clientHeight}},parseSize:function(a){var b;"string"==typeof a&&(a=/^([0-9]+)([mgk]?)$/.exec(a.toLowerCase().replace(/[^0-9mkg]/g,"")),b=a[2],a=+a[1],"g"==b&&(a*=1073741824),"m"==b&&(a*=1048576),"k"==b&&(a*=1024));return a},xmlEncode:function(a){return a?(""+a).replace(A,function(a){return w[a]?"\x26"+w[a]+";":a}):a},toArray:function(a){var b,c=[];for(b=0;b<a.length;b++)c[b]=a[b];return c},addI18n:function(a){return c.extend(u,a)},translate:function(a){return u[a]||
a},isEmptyObj:function(a){if(void 0===a)return!0;for(var b in a)return!1;return!0},hasClass:function(a,b){return""==a.className?!1:(new RegExp("(^|\\s+)"+b+"(\\s+|$)")).test(a.className)},addClass:function(a,b){c.hasClass(a,b)||(a.className=""==a.className?b:a.className.replace(/\s+$/,"")+" "+b)},removeClass:function(a,b){a.className=a.className.replace(new RegExp("(^|\\s+)"+b+"(\\s+|$)"),function(a,b,c){return" "===b&&" "===c?" ":""})},getStyle:function(a,b){if(a.currentStyle)return a.currentStyle[b];
if(window.getComputedStyle)return window.getComputedStyle(a,null)[b]},addEvent:function(a,b,d,e){var g;b=b.toLowerCase();void 0===h&&(h="Plupload_"+c.guid());a.addEventListener?(g=d,a.addEventListener(b,g,!1)):a.attachEvent&&(g=function(){var a=window.event;a.target||(a.target=a.srcElement);a.preventDefault=x;a.stopPropagation=y;d(a)},a.attachEvent("on"+b,g));void 0===a[h]&&(a[h]=c.guid());l.hasOwnProperty(a[h])||(l[a[h]]={});a=l[a[h]];a.hasOwnProperty(b)||(a[b]=[]);a[b].push({func:g,orig:d,key:e})},
removeEvent:function(a,b,d){var e,g;"function"==typeof d?e=d:g=d;b=b.toLowerCase();if(a[h]&&l[a[h]]&&l[a[h]][b]){d=l[a[h]][b];for(var f=d.length-1;0<=f;f--)if(d[f].key===g||d[f].orig===e)if(a.detachEvent?a.detachEvent("on"+b,d[f].func):a.removeEventListener&&a.removeEventListener(b,d[f].func,!1),d[f].orig=null,d[f].func=null,d.splice(f,1),void 0!==e)break;d.length||delete l[a[h]][b];if(c.isEmptyObj(l[a[h]])){delete l[a[h]];try{delete a[h]}catch(B){a[h]=void 0}}}},removeAllEvents:function(a,b){void 0!==
a[h]&&a[h]&&c.each(l[a[h]],function(d,e){c.removeEvent(a,e,b)})},Uploader:function(a){function b(){var a,b=0,d;if(this.state==c.STARTED){for(d=0;d<f.length;d++)a||f[d].status!=c.QUEUED?b++:(a=f[d],a.status=c.UPLOADING,this.trigger("BeforeUpload",a)&&this.trigger("UploadFile",a));b==f.length&&(this.stop(),this.trigger("UploadComplete",f))}}function d(){var a,b;g.reset();for(a=0;a<f.length;a++)b=f[a],void 0!==b.size?(g.size+=b.size,g.loaded+=b.loaded):g.size=void 0,b.status==c.DONE?g.uploaded++:b.status==
c.FAILED?g.failed++:g.queued++;void 0===g.size?g.percent=0<f.length?Math.ceil(g.uploaded/f.length*100):0:(g.bytesPerSec=Math.ceil(g.loaded/((+new Date-h||1)/1E3)),g.percent=0<g.size?Math.ceil(g.loaded/g.size*100):0)}var e={},g,f=[],h;g=new c.QueueProgress;a=c.extend({chunk_size:0,multipart:!0,multi_selection:!0,file_data_name:"file",filters:[]},a);c.extend(this,{state:c.STOPPED,runtime:"",features:{},files:f,settings:a,total:g,id:c.guid(),init:function(){function m(){var a=q[l++],b,d,f;if(a){b=a.getFeatures();
if(d=k.settings.required_features)for(d=d.split(","),f=0;f<d.length;f++)if(!b[d[f]]){m();return}a.init(k,function(c){c&&c.success?(k.features=b,k.runtime=a.name,k.trigger("Init",{runtime:a.name}),k.trigger("PostInit"),k.refresh()):m()})}else k.trigger("Error",{code:c.INIT_ERROR,message:c.translate("Init error.")})}var k=this,e,q,l=0,r;"function"==typeof a.preinit?a.preinit(k):c.each(a.preinit,function(a,b){k.bind(b,a)});a.page_url=a.page_url||document.location.pathname.replace(/\/[^\/]+$/g,"/");/^(\w+:\/\/|\/)/.test(a.url)||
(a.url=a.page_url+a.url);a.chunk_size=c.parseSize(a.chunk_size);a.max_file_size=c.parseSize(a.max_file_size);k.bind("FilesAdded",function(b,d){b.trigger("Started",d);var g,e,m=0,h;(g=a.filters)&&g.length&&(h=[],c.each(g,function(a){c.each(a.extensions.split(/,/),function(a){/^\s*\*\s*$/.test(a)?h.push("\\.*"):h.push("\\."+a.replace(new RegExp("["+"/^$.*+?|()[]{}\\".replace(/./g,"\\$\x26")+"]","g"),"\\$\x26"))})}),h=new RegExp(h.join("|")+"$","i"));for(g=0;g<d.length;g++)e=d[g],e.loaded=0,e.percent=
0,e.status=c.QUEUED,h&&!h.test(e.name)?b.trigger("Error",{code:c.FILE_EXTENSION_ERROR,message:c.translate("File extension error."),file:e}):void 0!==e.size&&e.size>a.max_file_size?b.trigger("Error",{code:c.FILE_SIZE_ERROR,message:c.translate("File size error."),file:e}):(f.push(e),m++);if(m)p(function(){k.trigger("QueueChanged");k.refresh()},1);else return!1});a.unique_names&&k.bind("UploadFile",function(a,b){a=b.name.match(/\.([^.]+)$/);var c="tmp";a&&(c=a[1]);b.target_name=b.id+"."+c});k.bind("UploadProgress",
function(a,b){b.percent=0<b.size?Math.ceil(b.loaded/b.size*100):100;d()});k.bind("StateChanged",function(a){if(a.state==c.STARTED)h=+new Date;else if(a.state==c.STOPPED)for(e=a.files.length-1;0<=e;e--)a.files[e].status==c.UPLOADING&&(a.files[e].status=c.QUEUED,d())});k.bind("QueueChanged",d);k.bind("Error",function(a,e){e.file&&(e.file.status=c.FAILED,d(),a.state==c.STARTED&&(g.queued||p(function(){b.call(k)},1)))});k.bind("FileUploaded",function(a,d){d.status=c.DONE;d.loaded=d.size;a.trigger("UploadProgress",
d);p(function(){b.call(k)},1)});if(a.runtimes)for(q=[],r=a.runtimes.split(/\s?,\s?/),e=0;e<r.length;e++)n[r[e]]&&q.push(n[r[e]]);else q=n;m();"function"==typeof a.init?a.init(k):c.each(a.init,function(a,b){k.bind(b,a)})},refresh:function(){this.trigger("Refresh")},start:function(){this.state!=c.STARTED&&(this.state=c.STARTED,this.trigger("StateChanged"),b.call(this))},stop:function(){this.state!=c.STOPPED&&(this.state=c.STOPPED,this.trigger("CancelUpload"),this.trigger("StateChanged"))},getFile:function(a){var b;
for(b=f.length-1;0<=b;b--)if(f[b].id===a)return f[b]},removeFile:function(a){var b;for(b=f.length-1;0<=b;b--)if(f[b].id===a.id)return this.splice(b,1)[0]},splice:function(a,b){a=f.splice(void 0===a?0:a,void 0===b?f.length:b);this.trigger("FilesRemoved",a);this.trigger("QueueChanged");a[0].status==c.UPLOADING&&this.state==c.STARTED&&this.trigger("CancelUpload");if(!g.queued){var d=this;p(function(){d.trigger("UploadComplete")})}return a},trigger:function(a){var b=e[a.toLowerCase()],c,d;if(b)for(d=
Array.prototype.slice.call(arguments),d[0]=this,c=0;c<b.length;c++)if(!1===b[c].func.apply(b[c].scope,d))return!1;return!0},hasEventListener:function(a){return!!e[a.toLowerCase()]},bind:function(a,b,c){var d;a=a.toLowerCase();d=e[a]||[];d.push({func:b,scope:c||this});e[a]=d},unbind:function(a,b){a=a.toLowerCase();var c=e[a],d;if(c){if(void 0!==b)for(d=c.length-1;0<=d;d--){if(c[d].func===b){c.splice(d,1);break}}else c=[];c.length||delete e[a]}},unbindAll:function(){var a=this;c.each(e,function(b,c){a.unbind(c)})},
destroy:function(){this.trigger("Destroy");this.unbindAll()}})},File:function(a,b,c){this.id=a;this.name=b;this.size=c;this.status=this.percent=this.loaded=0},Runtime:function(){this.getFeatures=function(){};this.init=function(a,b){}},QueueProgress:function(){var a=this;a.size=0;a.loaded=0;a.uploaded=0;a.failed=0;a.queued=0;a.percent=0;a.bytesPerSec=0;a.reset=function(){a.size=a.loaded=a.uploaded=a.failed=a.queued=a.percent=a.bytesPerSec=0}},runtimes:{}};window.plupload=c})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:plupload', location = 'includes/js/third-party/plupload.html5.js' */
(function(u,m,e,r){function E(e,g){var f;if("FileReader"in u)f=new FileReader,f.readAsDataURL(e),f.onload=function(){g(f.result)};else return g(e.getAsDataURL())}function F(e,g,k,h){var c,a,b,v,q=this;E(x[e.id],function(d){c=m.createElement("canvas");c.style.display="none";m.body.appendChild(c);a=c.getContext("2d");b=new Image;b.onerror=b.onabort=function(){h({success:!1})};b.onload=function(){var f,p,l,n;g.width||(g.width=b.width);g.height||(g.height=b.height);v=Math.min(g.width/b.width,g.height/
b.height);if(1>v||1===v&&"image/jpeg"===k){f=Math.round(b.width*v);p=Math.round(b.height*v);c.width=f;c.height=p;a.drawImage(b,0,0,f,p);if("image/jpeg"===k){if(l=new B(atob(d.substring(d.indexOf("base64,")+7))),l.headers&&l.headers.length&&(n=new G,n.init(l.get("exif")[0])&&(n.setExif("PixelXDimension",f),n.setExif("PixelYDimension",p),l.set("exif",n.getBinary()),q.hasEventListener("ExifData")&&q.trigger("ExifData",e,n.EXIF()),q.hasEventListener("GpsData")&&q.trigger("GpsData",e,n.GPS()))),g.quality)try{d=
c.toDataURL(k,g.quality/100)}catch(t){d=c.toDataURL(k)}}else d=c.toDataURL(k);d=d.substring(d.indexOf("base64,")+7);d=atob(d);l&&l.headers&&l.headers.length&&(d=l.restore(d),l.purge());c.parentNode.removeChild(c);h({success:!0,data:d})}else h({success:!1})};b.src=d})}function C(){function e(c,a){var b=k?0:-8*(a-1),e=0,q;for(q=0;q<a;q++)e|=h.charCodeAt(c+q)<<Math.abs(b+8*q);return e}function g(c,a,b){b=3===arguments.length?b:h.length-a-1;h=h.substr(0,a)+c+h.substr(b+a)}var k=!1,h;return{II:function(c){if(c===
r)return k;k=c},init:function(c){k=!1;h=c},SEGMENT:function(c,a,b){switch(arguments.length){case 1:return h.substr(c,h.length-c-1);case 2:return h.substr(c,a);case 3:g(b,c,a);break;default:return h}},BYTE:function(c){return e(c,1)},SHORT:function(c){return e(c,2)},LONG:function(c,a){if(a===r)return e(c,4);var b="",h=k?0:-24,q;for(q=0;4>q;q++)b+=String.fromCharCode(a>>Math.abs(h+8*q)&255);g(b,c,4)},SLONG:function(c){c=e(c,4);return 2147483647<c?c-4294967296:c},STRING:function(c,a){var b="";for(a+=
c;c<a;c++)b+=String.fromCharCode(e(c,1));return b}}}function B(e){var g={65505:{app:"EXIF",name:"APP1",signature:"Exif\x00"},65506:{app:"ICC",name:"APP2",signature:"ICC_PROFILE\x00"},65517:{app:"IPTC",name:"APP13",signature:"Photoshop 3.0\x00"}},f=[],h,c,a=r,b=0;h=new C;h.init(e);if(65496===h.SHORT(0)){c=2;for(e=Math.min(1048576,e.length);c<=e;)if(a=h.SHORT(c),65488<=a&&65495>=a)c+=2;else{if(65498===a||65497===a)break;b=h.SHORT(c+2)+2;g[a]&&h.STRING(c+4,g[a].signature.length)===g[a].signature&&f.push({hex:a,
app:g[a].app.toUpperCase(),name:g[a].name.toUpperCase(),start:c,length:b,segment:h.SEGMENT(c,b)});c+=b}h.init(null);return{headers:f,restore:function(a){h.init(a);var b=new B(a);if(!b.headers)return!1;for(a=b.headers.length;0<a;a--){var d=b.headers[a-1];h.SEGMENT(d.start,d.length,"")}b.purge();c=65504==h.SHORT(2)?4+h.SHORT(4):2;a=0;for(b=f.length;a<b;a++)h.SEGMENT(c,0,f[a].segment),c+=f[a].length;return h.SEGMENT()},get:function(a){for(var b=[],d=0,c=f.length;d<c;d++)f[d].app===a.toUpperCase()&&b.push(f[d].segment);
return b},set:function(a,b){var d=[];"string"===typeof b?d.push(b):d=b;b=ii=0;for(var c=f.length;b<c&&!(f[b].app===a.toUpperCase()&&(f[b].segment=d[ii],f[b].length=d[ii].length,ii++),ii>=d.length);b++);},purge:function(){f=[];h.init(null)}}}}function G(){function e(a,b){var e=g.SHORT(a),f,d,k,p,l,n,m={};for(f=0;f<e;f++)if(l=a+12*f+2,k=b[g.SHORT(l)],k!==r){d=g.SHORT(l+=2);p=g.LONG(l+=2);l+=4;n=[];switch(d){case 1:case 7:4<p&&(l=g.LONG(l)+h.tiffHeader);for(d=0;d<p;d++)n[d]=g.BYTE(l+d);break;case 2:4<
p&&(l=g.LONG(l)+h.tiffHeader);m[k]=g.STRING(l,p-1);continue;case 3:2<p&&(l=g.LONG(l)+h.tiffHeader);for(d=0;d<p;d++)n[d]=g.SHORT(l+2*d);break;case 4:1<p&&(l=g.LONG(l)+h.tiffHeader);for(d=0;d<p;d++)n[d]=g.LONG(l+4*d);break;case 5:l=g.LONG(l)+h.tiffHeader;for(d=0;d<p;d++)n[d]=g.LONG(l+4*d)/g.LONG(l+4*d+4);break;case 9:l=g.LONG(l)+h.tiffHeader;for(d=0;d<p;d++)n[d]=g.SLONG(l+4*d);break;case 10:l=g.LONG(l)+h.tiffHeader;for(d=0;d<p;d++)n[d]=g.SLONG(l+4*d)/g.SLONG(l+4*d+4);break;default:continue}p=1==p?n[0]:
n;c.hasOwnProperty(k)&&"object"!=typeof p?m[k]=c[k][p]:m[k]=p}return m}var g,k,h={},c;g=new C;k={tiff:{274:"Orientation",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer"},exif:{36864:"ExifVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",36867:"DateTimeOriginal",33434:"ExposureTime",33437:"FNumber",34855:"ISOSpeedRatings",37377:"ShutterSpeedValue",37378:"ApertureValue",37383:"MeteringMode",37384:"LightSource",37385:"Flash",41986:"ExposureMode",41987:"WhiteBalance",41990:"SceneCaptureType",
41988:"DigitalZoomRatio",41992:"Contrast",41993:"Saturation",41994:"Sharpness"},gps:{0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude"}};c={ColorSpace:{1:"sRGB",0:"Uncalibrated"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{1:"Daylight",2:"Fliorescent",3:"Tungsten",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 -5400K)",
14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire.",1:"Flash fired.",5:"Strobe return light not detected.",7:"Strobe return light detected.",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",
16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},ExposureMode:{0:"Auto exposure",1:"Manual exposure",2:"Auto bracket"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},
Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},GPSLatitudeRef:{N:"North latitude",S:"South latitude"},GPSLongitudeRef:{E:"East longitude",W:"West longitude"}};return{init:function(a){h={tiffHeader:10};if(a===r||!a.length)return!1;g.init(a);return 65505===g.SHORT(0)&&"EXIF\x00"===g.STRING(4,5).toUpperCase()?(a=h.tiffHeader,g.II(18761==g.SHORT(a)),42!==g.SHORT(a+=2)?a=!1:(h.IFD0=h.tiffHeader+g.LONG(a+2),
a=e(h.IFD0,k.tiff),h.exifIFD="ExifIFDPointer"in a?h.tiffHeader+a.ExifIFDPointer:r,h.gpsIFD="GPSInfoIFDPointer"in a?h.tiffHeader+a.GPSInfoIFDPointer:r,a=!0),a):!1},EXIF:function(){var a;a=e(h.exifIFD,k.exif);a.ExifVersion&&(a.ExifVersion=String.fromCharCode(a.ExifVersion[0],a.ExifVersion[1],a.ExifVersion[2],a.ExifVersion[3]));return a},GPS:function(){var a;a=e(h.gpsIFD,k.gps);a.GPSVersionID&&(a.GPSVersionID=a.GPSVersionID.join("."));return a},setExif:function(a,b){if("PixelXDimension"!==a&&"PixelYDimension"!==
a)return!1;var c,e,d,f=0;if("string"===typeof a)for(hex in c=k.exif,c)if(c[hex]===a){a=hex;break}c=h.exifIFD;e=g.SHORT(c);for(i=0;i<e;i++)if(d=c+12*i+2,g.SHORT(d)==a){f=d+8;break}f?(g.LONG(f,b),b=!0):b=!1;return b},getBinary:function(){return g.SEGMENT()}}}var x={},D;e.runtimes.Html5=e.addRuntime("html5",{getFeatures:function(){var f,g,k,h,c,a;g=k=c=a=!1;u.XMLHttpRequest&&(f=new XMLHttpRequest,k=!!f.upload,g=!(!f.sendAsBinary&&!f.upload));g&&(h=!!(f.sendAsBinary||u.Uint8Array&&u.ArrayBuffer),c=!(!File||
!File.prototype.getAsDataURL&&!u.FileReader||!h),a=!(!File||!(File.prototype.mozSlice||File.prototype.webkitSlice||File.prototype.slice)));D=e.ua.safari&&e.ua.windows&&navigator.userAgent&&0<navigator.userAgent.indexOf("Version/4");f=g;g=m.createElement("div");return{html5:f,dragdrop:"draggable"in g||"ondragstart"in g&&"ondrop"in g,jpgresize:c,pngresize:c,multipart:c||!!u.FileReader||!!u.FormData,canSendBinary:h,cantSendBlobInFormData:!(!(e.ua.gecko&&u.FormData&&u.FileReader)||FileReader.prototype.readAsArrayBuffer),
progress:k,chunks:a,multi_selection:!(e.ua.safari&&e.ua.windows),triggerDialog:e.ua.gecko&&u.FormData||e.ua.webkit||e.ua.windows}},init:function(f,g){function k(a){var b,c,g=[],d,h={};for(c=0;c<a.length;c++)b=a[c],h[b.name]||(h[b.name]=!0,d=e.guid(),x[d]=b,d=new e.File(d,b.fileName||b.name,b.fileSize||b.size),d.nativeFile=b,g.push(d));g.length&&f.trigger("FilesAdded",g)}var h,c;h=this.getFeatures();h.html5?(f.upload=function(a){k(a)},f.bind("Init",function(a){var b,c,g=[],d,h,p=a.settings.filters,
l,n;d=m.body;var t;b=m.createElement("div");b.id=a.id+"_html5_container";e.extend(b.style,{position:"absolute",background:f.settings.shim_bgcolor||"transparent",width:"100px",height:"100px",overflow:"hidden",zIndex:99999,opacity:f.settings.shim_bgcolor?"":0});b.className="plupload html5";f.settings.container&&(d=m.getElementById(f.settings.container),"static"===e.getStyle(d,"position")&&(d.style.position="relative"));d.appendChild(b);d=0;a:for(;d<p.length;d++)for(l=p[d].extensions.split(/,/),h=0;h<
l.length;h++){if("*"===l[h]){g=[];break a}(n=e.mimeTypes[l[h]])&&g.push(n)}b.innerHTML='\x3cinput id\x3d"'+f.id+'_html5"  style\x3d"font-size:999px" type\x3d"file" accept\x3d"'+g.join(",")+'" '+(f.settings.multi_selection&&f.features.multi_selection?'multiple\x3d"multiple"':"")+" /\x3e";b.scrollTop=100;t=m.getElementById(f.id+"_html5");f.settings.inputFileClazz&&(t.className+=" "+f.settings.inputFileClazz);a.features.triggerDialog?e.extend(t.style,{position:"absolute",width:"100%",height:"100%"}):
e.extend(t.style,{cssFloat:"right",styleFloat:"right"});var u=function(){k(this.files);-1===navigator.appVersion.indexOf("MSIE10")?(t=this.cloneNode(!0),t.onchange=u,this.parentNode.replaceChild(t,this)):this.value=""};t.onchange=u;if(c="string"===typeof a.settings.browse_button?m.getElementById(a.settings.browse_button):a.settings.browse_button){var r=a.settings.browse_button_hover,y=a.settings.browse_button_active;b=a.features.triggerDialog?c:b;r&&(e.addEvent(b,"mouseover",function(){e.addClass(c,
r)},a.id),e.addEvent(b,"mouseout",function(){e.removeClass(c,r)},a.id));y&&(e.addEvent(b,"mousedown",function(){e.addClass(c,y)},a.id),e.addEvent(m.body,"mouseup",function(){e.removeClass(c,y)},a.id));a.features.triggerDialog&&e.addEvent(c,"click",function(b){m.getElementById(a.id+"_html5").click();b.preventDefault()},a.id)}}),f.bind("PostInit",function(){var a=e.getElement(f.settings.drop_element),b,c=!1;a&&(D?(e.addEvent(a,"dragenter",function(b){var d;d=m.getElementById(f.id+"_drop");d||(d=m.createElement("input"),
d.setAttribute("type","file"),d.setAttribute("id",f.id+"_drop"),d.setAttribute("multiple","multiple"),e.addEvent(d,"change",function(){k(this.files);e.removeEvent(d,"change",f.id);d.parentNode.removeChild(d)},f.id),a.appendChild(d),c=!0);e.getPos(a,m.getElementById(f.settings.container));b=e.getSize(a);"static"===e.getStyle(a,"position")&&e.extend(a.style,{position:"relative"});e.extend(d.style,{position:"absolute",display:"block",top:0,left:0,width:b.w+"px",height:b.h+"px",opacity:0})},f.id),e.addEvent(a,
"dragleave",function(a){c||(b&&b.parentElement.removeChild(b),b=null);c=!1})):(e.addEvent(a,"dragover",function(a){a.preventDefault()},f.id),e.addEvent(a,"drop",function(a){if(!$(".disable-attachment-uploader").length){var c=a.dataTransfer;c&&c.files&&k(c.files)}b&&b.parentElement.removeChild(b);b=null;a.preventDefault();f.settings.stop_propagation&&(a.cancelBubble?a.cancelBubble=!0:a.stopPropagation())},f.id)))}),f.bind("Refresh",function(a){var b,c,h;if(b=m.getElementById(f.settings.browse_button))c=
e.getPos(b,m.getElementById(a.settings.container)),h=e.getSize(b),a=m.getElementById(f.id+"_html5_container"),e.extend(a.style,{top:c.y+"px",left:c.x+"px",width:h.w+"px",height:h.h+"px"}),f.features.triggerDialog&&("static"===e.getStyle(b,"position")&&e.extend(b.style,{position:"relative"}),c=parseInt(e.getStyle(b,"z-index"),10),isNaN(c)&&(c=0),e.extend(b.style,{zIndex:c}),e.extend(a.style,{zIndex:c-1}))}),f.bind("CancelUpload",function(){c&&c.abort&&c.abort()}),f.bind("UploadFile",function(a,b){function g(a,
b,c){var d;if(File.prototype.slice)try{return a.slice(),a.slice(b,c)}catch(H){return a.slice(b,c-b)}else return(d=File.prototype.webkitSlice||File.prototype.mozSlice)?d.call(a,b,c):null}function f(f){function l(){function n(d){var f=0,g="----pluploadboundary"+e.guid(),m,n="";c=new XMLHttpRequest;c.upload&&(c.upload.onprogress=function(c){b.loaded=Math.min(b.size,p+c.loaded-f);a.trigger("UploadProgress",b)});c.onreadystatechange=function(){var f,g;if(4==c.readyState){try{f=c.status}catch(I){f=0}if(400<=
f)a.trigger("Error",{code:e.HTTP_ERROR,message:e.translate("HTTP Error."),file:b,status:f,response:c.responseText||""});else{if(r){g={chunk:k,chunks:r,response:c.responseText,status:f};a.trigger("ChunkUploaded",b,g);p+=v;if(g.cancelled){b.status=e.FAILED;return}b.loaded=Math.min(b.size,(k+1)*w)}else b.loaded=b.size;a.trigger("UploadProgress",b);d=q=m=n=null;!r||++k>=r?(b.status=e.DONE,a.trigger("FileUploaded",b,{response:c.responseText,status:f})):l()}}};if(a.settings.multipart&&h.multipart){t.name=
b.target_name||b.name;c.open("post",A,!0);e.each(a.settings.headers,function(a,b){c.setRequestHeader(b,a)});if("string"!==typeof d&&u.FormData){m=new FormData;e.each(e.extend(t,a.settings.multipart_params),function(a,b){m.append(b,a)});m.append(a.settings.file_data_name,d);c.send(m);return}if("string"===typeof d){c.setRequestHeader("Content-Type","multipart/form-data; boundary\x3d"+g);e.each(e.extend(t,a.settings.multipart_params),function(a,b){n+="--"+g+'\r\nContent-Disposition: form-data; name\x3d"'+
b+'"\r\n\r\n';n+=unescape(encodeURIComponent(a))+"\r\n"});x=e.mimeTypes[b.name.replace(/^.+\.([^.]+)/,"$1").toLowerCase()]||"application/octet-stream";n+="--"+g+'\r\nContent-Disposition: form-data; name\x3d"'+a.settings.file_data_name+'"; filename\x3d"'+unescape(encodeURIComponent(b.name))+'"\r\nContent-Type: '+x+"\r\n\r\n"+d+"\r\n--"+g+"--\r\n";f=n.length-d.length;d=n;if(c.sendAsBinary)c.sendAsBinary(d);else if(h.canSendBinary){for(var y=new Uint8Array(d.length),z=0;z<d.length;z++)y[z]=d.charCodeAt(z)&
255;c.send(y.buffer)}return}}A=e.buildUrl(a.settings.url,e.extend(t,a.settings.multipart_params));c.open("post",A,!0);c.setRequestHeader("Content-Type","application/octet-stream");d.encoding&&c.setRequestHeader("Content-Encoding",d.encoding);e.each(a.settings.headers,function(a,b){c.setRequestHeader(b,a)});c.send(d.getData?d.getData():d)}var q,r,t,w,v,x,A=a.settings.url;b.status!=e.DONE&&b.status!=e.FAILED&&a.state!=e.STOPPED&&(t={name:b.target_name||b.name},d.chunk_size&&b.size>d.chunk_size&&(h.chunks||
"string"==typeof f)?(w=d.chunk_size,r=Math.ceil(b.size/w),v=Math.min(w,b.size-k*w),q="string"==typeof f?f.substring(k*w,k*w+v):g(f,k*w,k*w+v),t.chunk=k,t.chunks=r):(v=b.size,q=f),"string"!==typeof q&&m&&h.cantSendBlobInFormData&&h.chunks&&a.settings.chunk_size?(m.onload=function(){n(m.result)},m.readAsBinaryString(q)):n(q))}var k=0,p=0,m="FileReader"in u?new FileReader:null;l()}var d=a.settings,k;k=x[b.id];h.jpgresize&&a.settings.resize&&/\.(png|jpg|jpeg)$/i.test(b.name)?F.call(a,b,a.settings.resize,
/\.png$/i.test(b.name)?"image/png":"image/jpeg",function(a){a.success?(b.size=a.data.length,f(a.data)):f(k)}):f(k)}),f.bind("Destroy",function(a){var b,c,f=m.body,d={inputContainer:a.id+"_html5_container",inputFile:a.id+"_html5",browseButton:a.settings.browse_button,dropElm:a.settings.drop_element};for(b in d)(c=m.getElementById(d[b]))&&e.removeAllEvents(c,a.id);e.removeAllEvents(m.body,a.id);a.settings.container&&(f=m.getElementById(a.settings.container));f.removeChild(m.getElementById(d.inputContainer))}),
g({success:!0})):g({success:!1})}})})(window,document,plupload);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:plupload', location = 'includes/js/amd/shim/plupload-amd.js' */
define("plupload",function(){return plupload});
}catch(e){WRMCB(e)};