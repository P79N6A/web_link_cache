(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{"/Fu2":function(e,t,n){(t=e.exports=n("RDo7")(!1)).push([e.i,".BackButton_container_2Kz{display:-webkit-box;display:-ms-flexbox;display:flex}.BackButton_back_1ag{-ms-flex-item-align:center;align-self:center;padding-right:5px}.BackButton_back_1ag button{height:40px}.BackButton_link_1W7{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.BackButton_link_1W7:hover{text-decoration:none}.BackButton_bold_39_{font-weight:600}.BackButton_backIconWrapper_2_P{margin:0 4px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}",""]),t.locals={container:"BackButton_container_2Kz",back:"BackButton_back_1ag",link:"BackButton_link_1W7",bold:"BackButton_bold_39_",backIconWrapper:"BackButton_backIconWrapper_2_P"}},"33FN":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),t.b={DASHBOARD_ROUTE:"dashboard.route.last.v2",DISCOVER_ROUTE:"discover.route.last",MY_WORK_ROUTE:"my-work.route.last",SPACE_ROUTE:"space.route.last",GLOBAL_SIDEBAR_PANEL:"sidebar.global.panel",TINYMCE_PAGE_JUST_PUBLISHED:"editor.tinyMCE.just.published"};var r="editor.survey.last.submitted"},Erjj:function(e,t,n){"use strict";n.d(t,"a",function(){return j});n("aWzz");var r,o,a,i=n("ERkP"),c=n.n(i),l=n("O94r"),u=n.n(l),s=n("+HyH"),p=n("eYaf"),f=n("Bwai"),b=n.n(f),y=n("jRDN"),k=n.n(y),m=n("IGvV"),d=n("SCDa"),_=n.n(d);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=Object(m.a)(_.a)((a=o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,w(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,c.a.PureComponent),function(e,t,n){t&&O(e.prototype,t),n&&O(e,n)}(t,[{key:"_renderBackButtonGroup",value:function(){var e=this.props,t=e.label,n=e.backLink,r=e.link,o=e.isSelected,a=B(e,["label","backLink","link","isSelected"]),i=u()(x({},_.a.bold,o)),l=c.a.createElement(s.a,{iconBefore:c.a.createElement(b.a,{label:t}),appearance:"subtle"}),f=c.a.createElement(p.a,v({label:c.a.createElement("span",{className:i},t),text:t,isSelected:o},a));return c.a.createElement("div",{className:_.a.container},n?c.a.createElement(n.type,v({},n.props,{className:_.a.back}),l):l,r?c.a.createElement(r.type,v({},r.props,{className:_.a.link}),f):f)}},{key:"_renderBackButton",value:function(){var e=this.props,t=e.label,n=e.link,r=B(e,["label","link"]),o=c.a.createElement(p.a,v({icon:c.a.createElement("span",{className:_.a.backIconWrapper},c.a.createElement(k.a,{label:t,size:"small"})),label:t,text:t},r));return n?c.a.createElement(n.type,v({},n.props,{className:_.a.link}),o):o}},{key:"render",value:function(){var e=this.props.backLink;return c.a.createElement("div",{"data-test-id":"back-button"},e?this._renderBackButtonGroup():this._renderBackButton())}}]),t}(),x(o,"defaultProps",{isSelected:!1}),x(o,"displayName","BackButton"),r=a))||r},R4fp:function(e,t,n){"use strict";n("Svze")},SCDa:function(e,t,n){var r=n("/Fu2"),o=n("7l8p");"string"==typeof r&&(r=[[e.i,r,""]]),e.exports=r.locals||{},e.exports._getContent=function(){return r},e.exports._getCss=function(){return r.toString()},e.exports._insertCss=function(e){return o(r,e)}},yb06:function(e,t,n){"use strict";n.d(t,"a",function(){return m});n("aWzz");var r=n("ERkP"),o=n.n(r),a=n("Ragv"),i=n("UkWG"),c=n("jRDN"),l=n.n(c),u=n("Erjj"),s=n("BKd+");function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,y(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,r["Component"]),function(e,t,n){t&&f(e.prototype,t),n&&f(e,n)}(t,[{key:"componentDidMount",value:function(){this.props.onEnter()}},{key:"componentWillUnmount",value:function(){this.props.onLeave()}},{key:"renderAsPanel",value:function(){var e=this.props,t=e.style,n=e.children,r=e.title,a=e.onClickBack;return o.a.createElement("div",{style:t},o.a.createElement(u.a,{label:r,onClick:a}),n)}},{key:"renderAsDrawer",value:function(){var e=this.props,t=e.isOpen,n=e.title,r=e.onClickBack,c=e.children,u=e.closeText,p=e.icon,f=e.containerHeader,b=o.a.createElement(l.a,{label:u,size:"medium"}),y=f||o.a.createElement(a.a,{text:n,icon:p});return o.a.createElement(i.a,{isOpen:t,header:y,isFullWidth:!1,backIcon:b,onBackButton:r,primaryIcon:o.a.createElement(s.a,null)},c)}},{key:"render",value:function(){return this.props.isDrawer?this.renderAsDrawer():this.renderAsPanel()}}]),t}();m.displayName="SidebarPanel";var d=function(){};m.defaultProps={onEnter:d,onLeave:d,onClickBack:d,appearance:"global",title:"",isOpen:!1,isDrawer:!1}}}]);
//# sourceMappingURL=global-navigation~space-navigation.506160eebc3287e6cac6-v35.js.map