(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"1kAv":function(t,e,n){"use strict";var o=n("bfgX"),r=n("bQlP"),a=n("Zf7T"),i=n("JGxT"),c=n("Jygk"),s=n.n(c),l=n("sbiO"),u=n("w19e"),d=n("mbB6"),f=n.n(d),p=n("mGvo"),m=n.n(p),b=n("h4um"),h=n.n(b),y=n("+DnP"),g=n.n(y),_=n("u6DZ"),v=n.n(_),k=n("xeH2"),w=n.n(k);function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var E=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.scope=null,this.listeners=null,this.inDispatch=!1,this.scope=e||this,this.listeners=[]}return function(t,e,n){e&&O(t.prototype,e),n&&O(t,n)}(t,[{key:"add",value:function(t,e){return this.listeners.push({cb:t,scope:e||this.scope}),t}},{key:"addToTop",value:function(t,e){var n={cb:t,scope:e||this.scope};return this.inDispatch?this.listeners=[n].concat(this.listeners):this.listeners.unshift(n),t}},{key:"remove",value:function(t){var e=this.listeners,n=null;return s.a.tinymce.each(e,function(o,r){if(t==o.cb)return n=o,e.splice(r,1),!1}),n}},{key:"dispatch",value:function(){var t,e,n,o=arguments,r=this.listeners;for(this.inDispatch=!0,e=0;e<r.length&&!1!==(n=(t=r[e]).cb.apply(t.scope,o.length>0?o:[t.scope]));e++);return this.inDispatch=!1,n}}]),t}();function C(t){return"object"===j(t)&&t.name}function P(t,e){return"string"==typeof e?t.queryCommandState(e):!!C(e)&&t.queryCommandState(e.name)}function I(t,e,n,o){return t.execCommand(e,n,o)}var S=n("jGny");function T(t){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",function(){return H});var A="//".concat(s.a.location.host);function H(t){var e=function(){function t(t){this.init=this.init(t)}return t.INCOMPATIBLE_PLUGINS=["dfe"],t.shouldInit=function(){var t=w()("body");return t.hasClass("edit")||t.hasClass("create")||t.hasClass("copy-page")},t.suppressIncompatiblePlugins=function(){for(var e=function(){},n=0,o=t.INCOMPATIBLE_PLUGINS.length;n<o;n++)s.a.tinymce.PluginManager.lookup[t.INCOMPATIBLE_PLUGINS[n]]=e},t.prototype.init=function(t){var e=w.a.ui.keyCode,n=w()("#content-title"),o=w()("form.editor"),a=w()(t.getBody()),i=w()(t.getDoc()),c=w()("#editor-precursor"),l=w()(t.getWin()),u=w()("#toolbar"),d=w()("#toolbar .toolbar-primary"),f=i.scrollTop(),p=parseInt(a.css("padding-top"),10)+parseInt(a.css("margin-top"),10),m=parseInt(c.css("padding-top"),10),b=s.a.requestAnimationFrame||s.a.webkitRequestAnimationFrame,h=w()('<ol id="breadcrumbs"></ol>');function y(e){var n=this;t.plugins.customtoolbar.toggleToolbarButtons(e,e,e,function(){return!w()(n).parent().hasClass("close")})}w()(".cell",c).prepend(h);var g=Object(r.K)(r.a)?function(){var t=f-i.scrollTop(),e=u.offset().top-o.offset().top,n=d.outerHeight(),r=parseInt(c.css("margin-top"),10),s=c.outerHeight();a.css("padding-top","".concat(r+s,"px")),c.css("top","".concat(e+n+t+m,"px"))}:function(){var t=f-i.scrollTop(),e=u.offset().top-o.offset().top,n=c.outerHeight(),r=u.outerHeight();c.css("top","".concat(e+r+t+m,"px")),a.css("padding-top","".concat(n+p,"px"))};return function(){n.on("keydown",function(n){var o=n.keyCode||n.which;o!==e.ENTER&&o!==e.DOWN||(n.preventDefault(),n.stopPropagation(),t.focus())}).on("focus click",function(){y(!0)}),l.on("focus",function(){y(!1)})}(),function(t){!function e(){t(e),g()}(),a.on("scroll mousewheel",function(){setTimeout(g,0)})}(b),!0},{Editor:t,ThemeOptions:{controlHandlers:{},controls:{bold:"Bold",italic:"Italic",underline:"Underline",strikethrough:"Strikethrough",justifyleft:"JustifyLeft",justifycenter:"JustifyCenter",justifyright:"JustifyRight",bullist:"InsertUnorderedList",numlist:"InsertOrderedList",tasklist:"InsertInlineTaskList",outdent:"Outdent",indent:"Indent",cut:"Cut",copy:"Copy",paste:"Paste",undo:"Undo",redo:"Redo",removeformat:"RemoveFormat",sub:"subscript",sup:"superscript",forecolor:"ForeColor",forecolorpicker:"mceForeColor",backcolor:"HiliteColor",backcolorpicker:"mceBackColor",charmap:"mceCharMap",visualaid:"mceToggleVisualAid",anchor:"mceInsertAnchor",newdocument:"mceNewDocument",blockquote:"mceBlockQuote"},stateControls:["bold","italic","underline","bullist","numlist","tasklist","justifyleft","justifycenter","justifyright","strikethrough","sub","sup","monospace"],init:function(e,n){var o=t.shouldInit(),r=this;o&&t.suppressIncompatiblePlugins(),r.editor=e,r.url=n,r.settings=s.a.tinymce.extend({theme_advanced_toolbar_location:"bottom",theme_advanced_buttons1:"formatselect,bold,italic,underline,strikethrough,forecolor,separator,table,row_before,row_after,delete_row,col_before,col_after,delete_col,delete_table,separator,bullist,numlist,tasklist,outdent,indent,blockquote,justifyleft,justifycenter,justifyright,justifyfull,separator,sup,sub,separator,undo,redo,separator,conflink,oldlinkbrowserButton,confimage,conf_macro_browser,separator,search,code,customtoolbar, monospacep,h1,h2,h3,h4,h5,h6,pre,blockquote",readonly:e.settings.readonly},e.settings),e.on("init",function(){e.settings.readonly||(e.on("NodeChange",function(t){r.nodeChanged(e,null,t.element,!1,{parents:t.parents})}),e.on("keyup",function(){r._updateUndoStatus(e)}),e.on("MouseUp",function(){r._updateUndoStatus(e)}),e.dom.bind(e.dom.getRoot(),"dragend",function(){r._updateUndoStatus(e)}),o&&new t(e))})},execCommand:function(t,e,n){var o=this["_".concat(t)];return!!o&&(o.call(this,e,n),!0)},renderUI:function(t){return this.bindControls(),{iframeContainer:s.a.tinymce.DOM.get("rte"),editorContainer:"wysiwyg",sizeContainer:void 0,deltaHeight:t.deltaHeight}},getInfo:function(){return{longname:"Confluence theme",author:"Atlassian",authorurl:"http://tinymce.moxiecode.com",version:"".concat(s.a.tinymce.majorVersion,".").concat(s.a.tinymce.minorVersion)}},bindControls:function(){var t=this,e=t.settings;s.a.tinymce.each(s.a.tinymce.explode(e.theme_advanced_buttons1),function(e){if(!t.createEditorButtons(e))switch(e){case"formatselect":t.createBlockFormats()}}),t.bindControlHandlers(),t.renderToolbarButtons()},renderToolbarButtons:function(){var t=this,e={toolbar:"toolbar-primary",title:"",tooltip:"",cmd:"",className:"",locationGroup:null,weight:1/0,onclick:null},n=f()(this.editor.buttons,function(t,n){return(t=Object.assign({},e,t)).id=n,t.weight=m()(t.weight)?t.weight:1/0,t});n=g()(n,function(t){return!!t.locationGroup}),h()(["toolbar-primary"],function(e){var o=w()(".".concat(e)),r=g()(n,{toolbar:e});r=v()(r,"weight"),h()(r,function(e){t.createEditorButtons(e.id);var n=o.find(".".concat(e.locationGroup)),r=w()(function(t){return'<li id="'.concat(t.id,'" class="toolbar-item ').concat(t.className,'" data-tooltip="').concat(t.tooltip,'" data-weight="').concat(t.weight,'">\n                            <a class="toolbar-trigger aui-button" href="#" data-control-id="').concat(t.id,'">\n                                <span class="icon ').concat(t.icon,'"></span>\n                                <span class="trigger-text">').concat(t.title,"</span>\n                            </a>\n                        </li>")}(e));n.append(r).removeClass("hidden")})})},createEditorButtons:function(t){var e=this.editor.buttons[t];if(!e)return!1;e.cmd?this.controls[t]=e.cmd:this.controls[t]={func:e.onclick,name:t}},bindControlHandlers:function(){var t=this;t.controlHandlers.buttons={},t.controlHandlers.buttons.state=new E,t.controlHandlers.buttons.click=new E,t.controlHandlers.buttons.click.add(function(e){var n=t.controls[e];"string"===j(n)?I(Object(a.b)().getEditor(),t.controls[e]):C(n)&&n.func()})},createBlockFormats:function(){var t=this;t.controlHandlers.formatselect={},t.controlHandlers.formatselect.state=new E,t.controlHandlers.formatselect.click=new E,t.controlHandlers.formatselect.click.add(function(t){I(Object(a.b)().getEditor(),"FormatBlock",!1,t)})},createForeColorMenu:function(){return!0},_updateUndoStatus:function(t){var e=t.undoManager;this.controlHandlers.buttons.state.dispatch("undo","disabled",!e.hasUndo()&&!e.typing),this.controlHandlers.buttons.state.dispatch("redo","disabled",!e.hasRedo())},nodeChanged:function(t,e,n,o,r){var a=this;s.a.tinymce.each(a.stateControls,function(e){a.controlHandlers.buttons.state.dispatch(e,"active",!!P(t,a.controls[e]))}),a._updateUndoStatus(t),a.controlHandlers.buttons.state.dispatch("outdent","disabled",!P(t,"Outdent"));var i=function(t){for(var e=r.parents,n=0;n<e.length;n++)if(t(e[n]))return e[n]}(t.dom.isBlock);i&&a.controlHandlers.formatselect.state.dispatch(i.nodeName.toLowerCase())}}}}();s.a.tinymce.create("tinymce.themes.ConfluenceTheme",e.ThemeOptions),s.a.tinymce.ThemeManager.add("atlassian",s.a.tinymce.themes.ConfluenceTheme),s.a.requestAnimFrame=s.a.requestAnimationFrame||s.a.webkitRequestAnimationFrame;var n=function(){var t=l.b,e=["compat3x","auiwindowmanager","table","emotions","confluence","macroplaceholder","customtoolbar","insertwikimarkup","propertypanel","keyboardshortcuts","confmonospace","confcharmap","lists","conflist","tasklist","paste","aePaste","cursorTarget","confluencecleanupplugin","aeTable","confluencepastetableplugin","confluencepastemacroplugin","pagelayoutplugin","iosediting","autoconvert","confluencelist","deletecommand","draggable","confluencesortabletablesplugin","textplaceholders","linkbrowser","insertfiles","tableAnalytics","aetextpattern","persit_scroll_position","confindentation"];return Object(r.K)("confluence.table.resizable")&&e.push("tableContentWrapper"),{autoresize_min_height:"100%",width:"100%",height:"100%",document_base_url:"".concat(A).concat(l.b,"/"),plugins:e.join(","),theme:"atlassian",theme_advanced_buttons1:"formatselect,bold,italic,underline,strikethrough,forecolor,separator,table,row_before,row_after,delete_row,col_before,col_after,delete_col,delete_table,separator,bullist,numlist,tasklist,outdent,indent,blockquote,justifyleft,justifycenter,justifyright,justifyfull,separator,sup,sub,separator,undo,redo,separator,confimage,conf_macro_browser,separator,code,customtoolbar,help,monospace,separator,searchreplace,linkbrowserButton",theme_advanced_toolbar_location:"top",theme_advanced_toolbar_align:"left",theme_advanced_resizing:!1,theme_advanced_resize_horizontal:!1,theme_advanced_statusbar_location:"none",theme_advanced_path:!1,theme_advanced_blockformats:"p,h1,h2,h3,h4,h5,h6,pre,blockquote",mode:"specific_textareas",editor_selector:"tinymce-editor",body_class:"aui-theme-default mceContentBody wiki-content",popup_css:!1,content_css:!1,editor_css:!1,custom_undo_redo:!0,custom_undo_redo_levels:20,context_path:t,plugin_action_base_path:"".concat(t,"/plugins/tinymce"),editor_plugin_action_base_path:"".concat(t,"/plugins/editor/tinymce"),page_id:i.a.get("page-id"),draft_type:null,form_name:i.a.get("form-name"),space_key:encodeURI(i.a.get("space-key")),confluence_popup_width:620,confluence_popup_height:550,editor_id:"wysiwygTextarea",indent:!1,table_tab_navigation:!1,inline_boundaries:!1,indent_use_margin:!0,end_container_on_empty_block:!0}}();0==n.page_id&&(n.page_id=null,n.draft_type=i.a.get("draft-type")),Object(a.a)().addBeforeInitCallback(function(t){t.contentCssTags=s.a.document.querySelector('script[title="editor-css"]').innerHTML,t.language=i.a.get("action-locale").replace("_","-");var e=i.a.get("min-editor-height");e&&(t.autoresize_min_height=e)});var c=!(i.a.get("remote-user")&&i.a.get("confluence.prefs.editor.disable.autocomplete"));if(c&&(n.plugins+=",autocomplete,autocompletelink,autocompletemedia"),n.locale="object"===T(t)&&void 0!==t.locale?t.locale:"",n.i18nMessages="object"===T(t)&&"object"===T(t.i18nMessages)?t.i18nMessages:void 0,!!i.a.get("auto-start")){0,Object(o.b)("rte-loaded",{editPermission:!0});var d=s.a.document.getElementById(n.editor_id);Object(o.b)("rte-initial-raw-content-ready",{title:i.a.get("page-title")||i.a.get("original-content-title")||"",editorContent:d.value,confRev:i.a.get("conf-revision"),syncRev:s.a.document.getElementById("syncRev").value,syncRevSource:i.a.get("sync-revision-source")}),Object(u.a)("confluence.editor"),c&&(n.plugins+=",autocompletemacro");var p="0"==="".concat(i.a.get("page-id")),b=function(t,e){if("template"===t)return S.a.createProfileForTemplateEditor();if("comment"===t)return S.a.createProfileForCommentEditor();var n={versionComment:!e,notifyWatchers:!e};return S.a.createProfileForPageEditor(n)}(i.a.get("content-type"),p).plugins.join(",");b&&(n.plugins+=",".concat(b)),Object(a.a)().preInitialise(n),Object(a.a)().initialise(),Object(u.b)("confluence.editor")}else Object(a.a)().preInitialise(n)}},Cy2Q:function(t,e,n){"use strict";n.r(e);var o,r=n("ERkP"),a=n.n(r),i=n("uDfI"),c=n("Bud6"),s=n("yLtY"),l=n("OLUx"),u=(n("aWzz"),n("nnRT")),d=n.n(u),f=n("Jygk"),p=n.n(f),m=n("M2LZ"),b=n("5PxA"),h=n("WHVE"),y=n("1kAv"),g=n("IGvV"),_=n("bQlP"),v=n("k8+f"),k=n("DnRC"),w=n("lZ+S"),j=n("hmwg");function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function P(t,e){return(P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function I(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var T=Object(g.b)(Object(_.K)(_.a)?function(){return n.e(227).then(n.t.bind(null,"GA/f",7))}:function(){return n.e(228).then(n.t.bind(null,"ZdR3",7))})(o=Object(j.a)(o=function(t){function e(){var t,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return S(I(I(o=function(t,e){return!e||"object"!==O(e)&&"function"!=typeof e?I(t):e}(this,(t=C(e)).call.apply(t,[this].concat(a))))),"_loadAtlassianTinymce",function(){return Promise.all([n.e(154),n.e(231)]).then(n.bind(null,"qrpA"))}),S(I(I(o)),"_loadAtlassianEditorPlugins",function(){return Promise.all([n.e(115),n.e(84),n.e(230)]).then(n.bind(null,"QEi/"))}),S(I(I(o)),"_loadOtherEditorFiles",function(){var t=o.props,e=t.canEdit,n=t.onError,r=t.isExcludeEditorPluginsFragmentEnabled;m.a.require(w.a.EDITOR_LOADER,function(){Object(v.a)({listener:"EditorLoader.js",globalProperty:"AJS.Confluence.EditorLoader"},function(){p.a.AJS.Confluence.EditorLoader.load(o._successCallback,n,{editPermission:e}),r&&Object(k.a)()})})}),S(I(I(o)),"_successCallback",function(){var t=o.props,e=t.onPreloadEditorFinish,n=t.onSuccess;if(e(t.contentId),"function"==typeof n&&n(),Object(_.K)(_.i)){Object(b.a)(),Object(h.a)();var r=o.props,a={locale:r.locale,i18nMessages:r.i18nMessages};Object(y.a)(a)}}),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}(e,r["Component"]),function(t,e,n){e&&E(t.prototype,e),n&&E(t,n)}(e,[{key:"componentDidMount",value:function(){this._loadEditor(this.props)}},{key:"shouldComponentUpdate",value:function(t){return!d()(t,this.props)}},{key:"UNSAFE_componentWillReceiveProps",value:function(t){this.props.contentId!==t.contentId&&this._loadEditor(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){S(t,e,n[e])})}return t}({},this.props,t))}},{key:"_loadEditor",value:function(t){var e=this,n=t.contentId,o=t.onStartPreloadEditor,r=t.isEditorNextEnabled;o(n),r?Object(v.a)({listener:"EditorLoader.js",globalProperty:"AJS"},function(){e._loadAtlassianTinymce().then(function(){e._loadAtlassianEditorPlugins().then(function(t){t.default(),e._loadOtherEditorFiles()})})}):this._loadOtherEditorFiles()}},{key:"render",value:function(){return null}}]),e}())||o)||o;function A(){return(A=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}e.default=Object(i.connect)(function(t){return{isEditorNextEnabled:Object(s.H)(t,"fd-87.editor.spa")}},function(t){return{onStartPreloadEditor:function(e){return t(Object(c.q)({contentId:e}))},onPreloadEditorFinish:function(e){return t(Object(c.p)({contentId:e}))}}})(function(t){return a.a.createElement(l.a,null,function(e){var n=e.featureFlags;return a.a.createElement(T,A({},t,{isExcludeEditorPluginsFragmentEnabled:n["confluence.frontend.exclude.editor.plugins.fragment"]}))})})}}]);
//# sourceMappingURL=page.editor-loader.e0962f81e5ea935308fe-v35.js.map