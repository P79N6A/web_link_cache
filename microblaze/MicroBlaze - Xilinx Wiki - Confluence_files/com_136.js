WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro-v5', location = 'v5/js/confluence/macro/bookmark.js' */
(function(d,c){c("ac/confluence/macro/bookmark",["ajs"],function(b){var a;return{createBookmark:function(){return a=b.Rte.getEditor().selection.getBookmark()},destroyBookmark:function(){a&&(a.keep=!1,b.Rte.getEditor().selection.moveToBookmark(a),a=null)}}})})(AJS.$,define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro-v5', location = 'v5/js/confluence/macro/editor.js' */
(function(m,e){e("ac/confluence/macro/editor",["ac/confluence/macro","ac/confluence/macro/bookmark","ajs","ac/confluence/utils"],function(f,g,h,e){var k;return{close:function(){connectHost.dialog.close()},getMacroData:function(a){return a(f.getCurrentMacroParameters())},getMacroBody:function(a){return a(k)},openCustomEditor:function(a,b){var c;if(!e.isFabricEditor()){h.Rte.getEditor().focus();var d=h.Rte.getEditor().selection.getNode();c=g.createBookmark();f.setLastSelectedConnectMacroNode(d)}f.setUnsavedMacroData(a.name,
a.body?a.body:"",a.params,c);k=a.body;c={addon_key:b.addonKey,key:a.name};var d=b.width||null,l=b.height||null;a={header:a.params?b.editTitle:b.insertTitle,submitText:a.params?"Save":"Insert",width:d,height:l,onHide:g.destroyBookmark};"100%"!==d&&"100%"!==l&&(a.chrome=!0);connectHost.dialog.create(c,a)}}})})(AJS.$,define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro-v5', location = 'v5/js/confluence/macro/property-panel-iframe.js' */
(function(c,b){b("ac/confluence/macro/property-panel-iframe",["ac/confluence/macro","ajs"],function(b,d){return function(e){return{propertyPanelIFrameInjector:function(f){var g=d.Rte.getEditor().selection;b.setLastSelectedConnectMacroNode(g.getNode());c.ajax(e,{data:{classifier:"property-panel"}}).done(function(a){a=c(a);a.css("display","none");f.panel.append(a)})}}}})})(AJS.$,define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro-v5', location = 'v5/js/confluence/macro/property-panel-controls.js' */
(function(g,c){c("ac/confluence/macro/property-panel-controls",["underscore"],function(a){return function(c){var d;return{getControls:function(e){var b;if(!(b=d)){var f=WRM.data.claim("com.atlassian.plugins.atlassian-connect-plugin:confluence-macro.property-panel-controls");try{b=a.first(a.filter(a.pluck(f,c),a.isObject))}catch(h){b=null}}d=b;e(d)}}}})})(AJS.$,define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro-v5', location = 'v5/js/confluence/macro/property-panel-event.js' */
(function(h,d){d("ac/confluence/macro/property-panel-event",[],function(){var e,b=[],g=function(a,b,c){connectHost.broadcastEvent(a,function(a){return-1!==a.extension_id.indexOf(b)});c()};return{waitForPropertyPanelEventBindings:function(){e=!1;b=[]},propertyPanelEventsBound:function(){for(e=!0;0<b.length;){var a=b.shift();g(a.eventKey,a.macroName,a.doneCallback)}},handlePropertyPanelEvent:function(a,d,c){var f=h.Deferred();"click"===a&&(a="click."+d+"."+c+".macro.property-panel",e?g(a,c,f.resolve):
10>b.length&&b.push({eventKey:a,macroName:c,doneCallback:f.resolve}));return f},_getQueueLength:function(){return b.length}}})})(AJS.$,define);
}catch(e){WRMCB(e)};