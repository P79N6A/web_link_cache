!function(){function e(e){return"[object Function]"===Object.prototype.toString.call(e)}function o(o,t,p){if(n[o])throw new Error("Module "+o+" has been defined already.");e(t)&&(p=t),n[o]={factory:p,inited:!1,exports:null}}function t(o){var t,r,s,a;if(t=n[o],r={},s={exports:{}},!e(t.factory))throw new Error("Module "+o+" has no factory.");if(a=t.factory.call(void 0,p,r,s),void 0!==a)t.exports=a;else if(s.hasOwnProperty("exports")&&"object"==typeof s.exports&&s.exports instanceof Object==!0){var i,c=!1;for(i in s.exports)s.exports.hasOwnProperty(i)&&(c=!0);c===!1?t.exports=r:t.exports=s.exports}else t.exports=s.exports;t.inited=!0}function p(e){var o;if(o=n[e],!o)throw new Error("Module "+e+" is not defined.");return o.inited===!1&&t(e),o.exports}var n={};o("C:/Users/haoyan/AppData/Roaming/npm/node_modules/mdevp/cache/www/first-login-prompt/first-login-prompt.js",function(e,o,t){window.changyan.api.ready(function(o){var t=o.util.jquery,p=(o.util._,o.util.velocityjs);e("C:/Users/haoyan/AppData/Roaming/npm/node_modules/mdevp/cache/www/first-login-prompt/first-login-prompt.css");var n=function(){var e="changyan"+Math.floor(1e3*Math.random()*1e3*1e3),p=o.getConfig("api")+"debug/cookie",n=new Date,r=new Date(n.setMonth((new Date).getMonth()+12)),s="debug_hidden_first_prompt=true; expires="+r+";";t.ajax({url:p,data:{setCookie:s},dataType:"jsonp",jsonpCallback:e,success:function(e){}})},r=function(){var o=e("C:/Users/haoyan/AppData/Roaming/npm/node_modules/mdevp/cache/www/first-login-prompt/person-page-prompt.html.js"),n=e("C:/Users/haoyan/AppData/Roaming/npm/node_modules/mdevp/cache/www/first-login-prompt/prop-prompt.html.js"),r=p.render(o,{}),s=p.render(n,{});t('div[node-type="block-head-w"]').append(r),t('div[node-type="cmt-item"]:eq(0)').find('div[node-type="action-click-gw"]').append(s)};o.getUserInfo(function(e){if(void 0!==e.user_id){if(t('div[node-type="cmt-item"]').find('span[node-type="prop"]').length<=0)return;if("true"===o.getIsHidePrompt())return;r(),function(){t('span[node-type="prompt-close-btn"]').click(function(){t(this).parent().remove(),n()})}()}})})}),o("C:/Users/haoyan/AppData/Roaming/npm/node_modules/mdevp/cache/www/first-login-prompt/first-login-prompt.css",function(e,o,t){var p=decodeURIComponent("%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-list%20.wrap-action-gw%20.action-click-gw%20.module-prop-prompt%7Bwidth%3A181px%3Bheight%3A80px%3Bbackground%3Aurl(%2F%2Fchangyan.sohu.com%2Fmdevp%2Fextensions%2Ffirst-login-prompt%2F003%2Fimage%2Fprompt-prop.png)%3Bposition%3Aabsolute%3Bright%3A10px%3Btop%3A-84px%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-w%20.module-person-page-prompt%7Bwidth%3A193px%3Bheight%3A80px%3Bbackground%3Aurl(%2F%2Fchangyan.sohu.com%2Fmdevp%2Fextensions%2Ffirst-login-prompt%2F003%2Fimage%2Fprompt-person-page.png)%3Bposition%3Aabsolute%3Btop%3A40px%3Bleft%3A56px%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-w%20.module-person-page-prompt%20.prompt-close-btn%2C%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-list%20.wrap-action-gw%20.action-click-gw%20.module-prop-prompt%20.prompt-close-btn%7Bwidth%3A14px%3Bheight%3A14px%3Bdisplay%3Ablock%3Bposition%3Aabsolute%3Bright%3A0%3Btop%3A0%3Bcursor%3Apointer%7D"),n=window.document,r=n.createElement("style");r.id="seaJs-css",r.setAttribute("type","text/css");var s=n.getElementById("seaJs-css");s?n.all?s.styleSheet.cssText+=p:s.textContent+=p:n.all?(r.styleSheet.cssText=p,n.getElementsByTagName("head").item(0).appendChild(r)):(r.innerHTML=p,n.getElementsByTagName("head").item(0).appendChild(r))}),o("C:/Users/haoyan/AppData/Roaming/npm/node_modules/mdevp/cache/www/first-login-prompt/person-page-prompt.html.js",function(e,o,t){"use strict";var p;return p=[],p.push('<div class="module-person-page-prompt">'),p.push('    <span node-type="prompt-close-btn" class="prompt-close-btn"></span>'),p.push("</div>"),p.join("\n")}),o("C:/Users/haoyan/AppData/Roaming/npm/node_modules/mdevp/cache/www/first-login-prompt/prop-prompt.html.js",function(e,o,t){"use strict";var p;return p=[],p.push('<div class="module-prop-prompt">'),p.push('    <span node-type="prompt-close-btn" class="prompt-close-btn"></span>'),p.push("</div>"),p.join("\n")}),t("C:/Users/haoyan/AppData/Roaming/npm/node_modules/mdevp/cache/www/first-login-prompt/first-login-prompt.js")}();