(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"/CY5":function(e,n,t){"use strict";n.a={isDashboard:function(e){return"/spa.action"===e},getSpaceKey:function(e){if("string"!=typeof e)return null;var n=e.match(/\/*spaces\/(.*?)\/overview/);return n?decodeURIComponent(n[1]):null},SITE_HOME_QUERY_KEY:"mode",SITE_HOME_QUERY_VALUE:"global"}},"0k5O":function(e,n,t){"use strict";var o=t("x+QU"),r=t.n(o)()({loader:function(){return Promise.all([t.e(18),t.e(37),t.e(34),t.e(55),t.e(42),t.e(82),t.e(425)]).then(t.bind(null,"XDCa"))},loading:function(){return null}});t.d(n,"a",function(){return r})},"17lG":function(e,n,t){"use strict";t.d(n,"b",function(){return i}),t.d(n,"a",function(){return c});var o=t("Jygk"),r=t.n(o),a=t("k8+f");function i(e){try{return r.a.require(e),!0}catch(e){return!1}}function c(e,n){e.listener;var t=e.module,o=e.interval,r=void 0===o?250:o;Object(a.a)({listener:"wait-for-required-module ".concat(t),globalProperty:"require"},function(){if(i(t))n();else var e=setInterval(function(){i(t)&&(clearInterval(e),n())},r)})}},"2hrV":function(e,n,t){"use strict";t("aWzz");var o=t("ERkP"),r=t.n(o),a=t("Ydxy"),i={small:12,medium:26,large:36},c=function(e){var n=e.size;return r.a.createElement("div",{style:{width:"100%",height:"100%",position:"relative"}},r.a.createElement("div",{"data-test-id":"spinner",style:{position:"absolute",left:"50%",top:"50%",marginLeft:-i[n]/2,marginTop:-i[n]/2,zIndex:100}},r.a.createElement(a.a,{size:i[n]})))};c.displayName="Spinner",c.displayName="Spinner",c.defaultProps={size:"small"},n.a=c},"3ac5":function(e,n,t){"use strict";t.d(n,"a",function(){return s});var o=t("0k5O"),r=t("RZKf"),a=t("HA9u"),i=t("bwNV"),c=t("7xNx"),u=t("rQmM"),l=t("iLhO");function s(){a.a.preload(),o.a.preload(),r.a.preload(),i.a.preload(),c.a.preload(),u.a.preload(),l.b.preload(),l.a.preload()}},"6lDt":function(e,n,t){"use strict";n.a={TOOLS_MENU_CONTAINER:"system.content.action",TOOLS_MENU_MARKER:"system.content.action/marker",TOOLS_MENU_LEADING:"system.content.action/leading",TOOLS_MENU_PRIMARY:"system.content.action/primary",TOOLS_MENU_SECONDARY:"system.content.action/secondary",TOOLS_MENU_MODIFY:"system.content.action/modify",PAGE_BUTTONS:"system.content.button",SYSTEM_DASHBOARD:"system.dashboard",SYSTEM_DASHBOARD_BUTTON:"system.dashboard.button",SYSTEM_CONTENT_BYLINE:"system.content.byline",SYSTEM_CONTENT_METADATA:"system.content.metadata",PAGE_METADATA_BANNER:"page.metadata.banner",SYSTEM_HEADER_LEFT:"system.header/left",SYSTEM_HEADER_LEFT_BUTTON_GROUP:"system.header/left.button.group",SYSTEM_HELP:"system.help/pages",SYSTEM_USER_ANONYMOUS:"system.user/anonymous",SYSTEM_USER:"system.user",SYSTEM_ADMIN_SITE_SECTION:"system.admin.site/site_admin_section",SPACE_SIDEBAR:"system.space.sidebar/main-links",SYSTEM_ADMIN:"system.admin",SYSTEM_EDITOR_LINK_BROWSER_TABS:"system.editor.link.browser.tabs",SYSTEM_EDITOR_PRECURSOR_BUTTONS:"system.editor.precursor.buttons",CREATE_DIALOG:"system.create.dialog/content",DASHBOARD_LEFT:"atl.dashboard.left",DASHBOARD_SECONDARY:"atl.dashboard.secondary",ATL_GENERAL:"atl.general",ATL_FOOTER:"atl.footer",ATL_PAGE_METADATA:"atl.page.metadata.banner",ATL_PAGE_CONTENT_FOOTER_ACTIONS:"atl.page.content.footer.actions",ATL_EDITOR_SAVEBAR:"atl.editor.savebar",SYSTEM_ADMIN_SITE_ADMINISTRATION:"system.admin/siteadministration"}},"7xNx":function(e,n,t){"use strict";var o=t("x+QU"),r=t.n(o)()({loader:function(){return Promise.all([t.e(1),t.e(53),t.e(190),t.e(4),t.e(6),t.e(22),t.e(59),t.e(417)]).then(t.bind(null,"R0Hm"))},loading:function(){return null}});n.a=r},HA9u:function(e,n,t){"use strict";var o=t("ERkP"),r=t.n(o),a=(t("aWzz"),t("x+QU")),i=t.n(a),c=t("cR1a"),u=t("4wq+"),l=t("bauk");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var m=function(e){function n(){var e,t;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return b(y(y(t=function(e,n){return!n||"object"!==s(n)&&"function"!=typeof n?y(e):n}(this,(e=d(n)).call.apply(e,[this].concat(r))))),"_renderFuncChildrenWithLoadedData",function(e){var n=t.props,o=n.children,r=n.editorModule,a=n.SynchronyProvider,i=n.featuredMacros;return o({Editor:r.Editor,EmojiResource:r.EmojiResource,ToolbarFeedback:r.ToolbarFeedback,WithHelpTrigger:r.WithHelpTrigger,editorActions:e,SynchronyProvider:a,featuredMacros:i})}),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}(n,o["PureComponent"]),function(e,n,t){n&&f(e.prototype,n),t&&f(e,t)}(n,[{key:"render",value:function(){var e=this.props,n=e.children,t=e.editorModule,o=t.EditorContext,a=t.WithEditorActions;return"function"!=typeof n?null:r.a.createElement(o,null,r.a.createElement(a,{render:this._renderFuncChildrenWithLoadedData}))}}]),n}();function g(){return(g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function E(e,n,t,o,r,a,i){try{var c=e[a](i),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(o,r)}function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}b(m,"displayName","EditorLoader"),m.displayName="EditorLoader";n.a=i.a.Map({loader:{editorModule:function(){var e=function(e){return function(){var n=this,t=arguments;return new Promise(function(o,r){var a=e.apply(n,t);function i(e){E(a,o,r,i,c,"next",e)}function c(e){E(a,o,r,i,c,"throw",e)}i(void 0)})}}(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Object(c.d)("".concat("confluence.fabric.editor.download",".start")),e.next=3,Promise.all([t.e(0),t.e(2),t.e(11),t.e(8),t.e(15),t.e(19),t.e(17),t.e(51),t.e(47),t.e(66),t.e(64),t.e(135),t.e(129),t.e(127),t.e(125),t.e(124),t.e(121),t.e(118),t.e(114),t.e(203)]).then(t.bind(null,"oVhl"));case 3:return n=e.sent,Object(c.d)("".concat("confluence.fabric.editor.download",".end")),e.abrupt("return",n);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),synchronyModule:function(){return t.e(164).then(t.bind(null,"/VC6"))},featuredMacros:function(){return Object(l.c)()}},loading:function(e){return O(e.isLoading)?r.a.createElement(u.a,{size:"medium"}):null},render:function(e,n){var t=e.editorModule,o=e.synchronyModule,a=e.featuredMacros;return r.a.createElement(m,g({},n,{editorModule:t,SynchronyProvider:o.Provider,featuredMacros:a}))}})},RZKf:function(e,n,t){"use strict";var o=t("x+QU"),r=t.n(o);n.a=r()({loader:function(){return Promise.all([t.e(18),t.e(60),t.e(79),t.e(424)]).then(t.bind(null,"ktcL"))},loading:function(){return null}})},TSlp:function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return c});var o=t("hqKg"),r=t("sbiO"),a=t("/CY5"),i=function(e){return e.views.app.lookAndFeelId},c=Object(o.createSelector)([function(e){return e&&Object(r.W)(e)&&Object(r.F)(e)&&Object(r.F)(e).spaceKey||e.meta&&e.meta.get("space-key")},function(e){return Object(r.W)(e)&&Object(r.y)(e).query[a.a.SITE_HOME_QUERY_KEY]===a.a.SITE_HOME_QUERY_VALUE},i,function(e){return e.entities.get("lookAndFeelSettings")},function(e){return e.entities.get("spaces")}],function(e,n,t,o,r){return n||!e?function(e,n){if(!n)return{};var t=n.get(e);return t?t.toJS():{}}(t,o):function(e,n){var t=n.get(e);return t&&t.get("lookAndFeel")?t.get("lookAndFeel").toJS():{}}(e,r)})},ZQ7y:function(e,n,t){"use strict";var o=t("uDfI"),r=t("sbiO"),a=t("2BEd"),i=(t("aWzz"),t("ERkP")),c=t("Jygk"),u=t.n(c),l=t("M2LZ"),s=t("3ac5"),f=t("bfgX"),d=t("k8+f"),p=t("17lG"),y=t("lZ+S"),b=t("jqY8");function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,n){return(O=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var h=function(e){function n(){var e,t;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return S(_(_(t=function(e,n){return!n||"object"!==m(n)&&"function"!=typeof n?_(e):n}(this,(e=E(n)).call.apply(e,[this].concat(r))))),"isOpening",!1),S(_(_(t)),"forceReloadInNextOpen",!0),S(_(_(t)),"_setOpenState",function(e){return e?t._open():t._close()}),S(_(_(t)),"_close",function(e){if("function"==typeof t._confluenceDialogClose){try{t._confluenceDialogClose()}catch(e){0}t._confluenceDialogClose=null}t.props.onClose(e)}),S(_(_(t)),"_afterDialogClosed",function(e,n){"create-dialog"===n.dialog.id&&(t._confluenceDialogClose=null,t._close(e))}),S(_(_(t)),"_isActive",function(){return!!u.a.document.querySelector("#create-dialog")}),S(_(_(t)),"_open",function(){t._isActive()||t.isOpening||(t.isOpening=!0,l.a.require(y.a.CREATE_DIALOG).then(function(){Object(p.a)({listener:"PseudoCreateDialog",module:"ac/confluence/style/link-style-css"},function(){var e=Object(b.d)("ac/confluence/style/link-style-css");e&&"function"==typeof e.addLinkTags&&e.addLinkTags()}),t.props.shouldSuppressDialog||Object(d.a)({listener:"PseudoCreateDialog",globalProperty:"Confluence.Blueprint.loadDialog"},function(){u.a.Confluence.Blueprint.loadDialog({triggerSrc:"create-page",forceReload:t.forceReloadInNextOpen}).then(function(e){t.isOpening=!1,t.forceReloadInNextOpen=!1,t._confluenceDialogClose=e.closeDialog})})}))}),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&O(e,n)}(n,i["PureComponent"]),function(e,n,t){n&&g(e.prototype,n),t&&g(e,t)}(n,[{key:"componentDidMount",value:function(){Object(f.a)("remove.dialog",this._afterDialogClosed),this.forceReloadInNextOpen=!0,this.props.isSuperbatchLoaded&&this._setOpenState(this.props.open)}},{key:"componentWillUnmount",value:function(){Object(f.c)("remove.dialog",this._afterDialogClosed)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.props.spaceKey!==e.spaceKey&&(this.forceReloadInNextOpen=!0),e.isSuperbatchLoaded&&this._setOpenState(e.open),e.open&&Object(s.a)()}},{key:"render",value:function(){return null}}]),n}();S(h,"defaultProps",{onClose:function(){}}),S(h,"displayName","PseudoCreateDialog"),h.displayName="PseudoCreateDialog";n.a=Object(o.connect)(function(e){return{spaceKey:Object(r.W)(e)?Object(r.F)(e).spaceKey:e.meta.get("space-key")||null,isSuperbatchLoaded:Object(a.a)(e)}})(h)},bwNV:function(e,n,t){"use strict";var o=t("x+QU"),r=t.n(o)()({loader:function(){return t.e(418).then(t.bind(null,"66Bi"))},loading:function(){return null}});t.d(n,"a",function(){return r})},iLhO:function(e,n,t){"use strict";t.d(n,"b",function(){return c}),t.d(n,"a",function(){return u});var o=t("ERkP"),r=t.n(o),a=t("x+QU"),i=t.n(a),c=i()({loader:function(){return Promise.all([t.e(1),t.e(8),t.e(58),t.e(451)]).then(t.bind(null,"wv4k"))},loading:function(){return null}}),u=i()({loader:function(){return Promise.all([t.e(79),t.e(450)]).then(t.bind(null,"yRof"))},loading:function(){return null}}),l=function(e){var n=e.contentId,t=e.spaceKey,o=e.draftShareId;return r.a.createElement("div",null,r.a.createElement(u,{contentId:n,spaceKey:t,draftShareId:o}),r.a.createElement(c,{contentId:n,spaceKey:t,draftShareId:o}))};l.displayName="Loader",n.c=l},"k8+f":function(e,n,t){"use strict";function o(e){for(var n=e.split("."),t=window[n.shift()];void 0!==t&&n.length;)t=t[n.shift()];return t}t.d(n,"a",function(){return a});function r(e){0}function a(e,n){var t=e.listener,a=e.globalProperty,i=e.interval,c=void 0===i?250:i;if(o(a))return r("window.".concat(a," is already available for use by ").concat(t,".")),n(),null;var u=setInterval(function(){r("".concat(t," is waiting for window.").concat(a," to be available")),o(a)&&(r("window.".concat(a," now available!")),clearInterval(u),n())},c);return{cancel:function(){u&&clearInterval(u)}}}},"lZ+S":function(e,n,t){"use strict";var o=["wr!confluence.web.resources:navigator-context","wr!com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-resources-v5"];n.a={CONNECT:o,EDITOR_LOADER:o.concat(["wr!confluence.web.resources:breadcrumbs","wr!confluence.web.resources:page-permissions-deferred-loader","wr!com.atlassian.confluence.plugins.editor-loader:background-loading-editor","wr!com.atlassian.confluence.plugins.quickedit:quick-edit-general","wr!com.atlassian.confluence.plugins.quickedit:quick-comment-initial"]),CONFLUENCE_PREVIEWER:["wr!com.atlassian.confluence.plugins.confluence-previews:fallback-mode","wrc!media-viewer"],CREATE_DIALOG:["wr!com.atlassian.confluence.plugins.confluence-create-content-plugin:resources","wr!com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources","wr!com.atlassian.plugins.atlassian-connect-plugin:blueprint-css-resources","wr!com.atlassian.plugins.atlassian-connect-plugin:icons-css-resources","wr!com.atlassian.plugins.atlassian-connect-plugin:dynamic-css-resources"],CONFLUENCE_SPACE_IA:["wr!com.atlassian.confluence.plugins.confluence-space-ia:link-dialog","wr!com.atlassian.confluence.plugins.confluence-link-browser:link-browser","wr!com.atlassian.confluence.plugins.confluence-link-browser:linkbrowser-css-resources"],NPS:["wr!com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources"],FLAGS:["wr!confluence.aui.staging:confluence-flags"]}},rQmM:function(e,n,t){"use strict";var o=t("x+QU"),r=t.n(o);n.a=r()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(11),t.e(15),t.e(14),t.e(13),t.e(18),t.e(46),t.e(116),t.e(16),t.e(86),t.e(416)]).then(t.bind(null,"goqy"))},loading:function(){return null}})}}]);
//# sourceMappingURL=admin-navigation~global-navigation~root~space-navigation.1680654d3c5000a1c958-v35.js.map