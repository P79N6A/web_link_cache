define("wkview:widget/common_toc/common/main.js",function(e){var t=e("wkcommon:widget/lib/tangram/base/base.js"),o=e("wkview:widget/common_item/cloudSync/cloudSync.js"),i=e("wkview:widget/common_item/todoAction/todoAction.js"),n=e("wkview:widget/common_item/someLog/someLog.js");t.dom.ready(function(){if(i.run(),n.run(),o.run(),9===t.browser.ie){var e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("type","text/css"),e.setAttribute("href","https://edu-wenku.bdimg.com/v1/pc/PClogin/login-1511847659332.css"),document.getElementsByTagName("head")[0].appendChild(e)}})});