(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{RfA0:function(e,t,n){"use strict";n.r(t);var r,i,o=n("uDfI"),a=n("kD2R"),u=n("Bud6"),s=n("sbiO"),c=n("+Prw"),l=n("zUx9"),f=n("EfWO"),d=n.n(f),h=(n("aWzz"),n("ERkP")),y=n.n(h),g=n("L21V"),p=n("uZih"),b=n.n(p),v=n("nnRT"),m=n.n(v),O=n("r9hL"),w=n("Ng1v"),k=n("kSEI"),E=n("btMZ");function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var x=["userLimitReached","editingFailed"],_=(r=Object(O.b)(),Object(g.h)(i=r(i=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(n=function(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?C(e):t}(this,(e=I(t)).call.apply(e,[this].concat(i))))._onFlagClose=n._onFlagClose.bind(C(C(n))),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,h["Component"]),function(e,t,n){t&&F(e.prototype,t),n&&F(e,n)}(t,[{key:"shouldComponentUpdate",value:function(e){var t=["intl","location"],n=b()(e,t),r=b()(this.props,t);return!m()(r,n)}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.showFlag,n=e.reason,r=e.triggerAnalytics,i=e.contentId;if("limited"===n&&t){var o=new E.a;r("collab.edit.user.limit.reached",{browser:Object(w.a)("".concat(o.friendlyName(),"-").concat(o.version())),pageId:i,editMode:Object(w.c)("quick")("quick")})}}},{key:"componentWillUnmount",value:function(){this.props.shouldNavigateToEditPage||this._closeNotification()}},{key:"_closeNotification",value:function(){this.props.resetNotification()}},{key:"_resetLegacyFlagParams",value:function(){var e=this.props,t=e.replace,n=e.location,r=b()(n.query,x);t(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){P(e,t,n[t])})}return e}({},n,{query:r,search:d.a.format({query:r})}))}},{key:"_onFlagClose",value:function(){this._resetLegacyFlagParams()}},{key:"render",value:function(){var e=this.props,t=e.reason,n=e.errorData,r=e.showFlag,i=e.intl.formatMessage,o=e.hasLegacyFlagParams,a={};return"locked"===t&&n&&(a={title:i({id:"editor.unavailable.title"}),body:i({id:"limited.mode.existing.editor.body"},{0:n.user}),type:"info"}),"limited"===t&&(a={title:i({id:"collab.edit.user.limit.msg.title"}),body:i({id:"collab.edit.user.limit.msg.body"}),type:"warning"}),"failed"===t&&(a={title:i({id:"editor.unavailable.title"}),body:i({id:"editor.unavailable.generic.body"}),type:"info"}),o&&(a.onClose=this._onFlagClose),r?y.a.createElement(k.a,S({close:"manual"},a,{isShowing:!0})):null}}]),t}())||i)||i);_.displayName="EditorFlags";var M=Object(c.a)(),N=function(e){return void 0!==e};t.default=Object(o.connect)(function(e,t){var n,r=Object(s.y)(e),i=r.query,o=i.userLimitReached,a=i.editingFailed,u=t.contentId,c=!1,f=M(e,{contentId:u}),d=f.errorData,h=f.contentId,y=f.hasFetched,g=f.statusCode,p=f.shouldNavigateToEditPage;(n=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},l.b,"limited")[g]||null)||(N(o)?n="limited":N(a)&&(n="failed")),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(e){return void 0!==e}).length>0}(o,a)&&(c=!0);var b=!!n&&u===h&&y,v=c&&"locked"===n&&g&&g!==l.d;return{contentId:u,reason:n,showFlag:c||v||b&&!c,errorData:d,hasFetchedEditorContent:y,shouldNavigateToEditPage:p,hasLegacyFlagParams:c,location:r}},function(e){return{resetNotification:function(t){return e(Object(u.s)({contentId:t}))},getEditorContent:function(t){return e(Object(u.k)({contentId:t,silent:!0}))},replace:function(t){return e(Object(a.replace)(t))}}})(_)},btMZ:function(e,t,n){"use strict";(function(e){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,"a",function(){return i});var i=function(){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n?this.userAgent=n:e.window&&(this.userAgent=e.window.navigator.userAgent)}return function(e,t,n){t&&r(e.prototype,t),n&&r(e,n)}(t,[{key:"isFirefox",value:function(){return-1!==this.userAgent.indexOf("Firefox/")}},{key:"notFirefox",value:function(){return!this.isFirefox()}},{key:"isMSEdge",value:function(){return-1!==this.userAgent.indexOf("Edge/")}},{key:"notMSEdge",value:function(){return!this.isMSEdge()}},{key:"isIE",value:function(){return-1!==this.userAgent.indexOf("MSIE")||-1!==this.userAgent.indexOf("Trident/")||this.isMSEdge()}},{key:"notIE",value:function(){return!this.isIE()}},{key:"isChrome",value:function(){return-1!==this.userAgent.indexOf("Chrome/")}},{key:"notChrome",value:function(){return!this.isChrome()}},{key:"isSafari",value:function(){return-1!==this.userAgent.indexOf("Safari/")&&-1===this.userAgent.indexOf("Chrome/")}},{key:"notSafari",value:function(){return!this.isSafari()}},{key:"isPhantom",value:function(){return-1!==this.userAgent.indexOf("PhantomJS")}},{key:"notPhantom",value:function(){return!this.isPhantom()}},{key:"version",value:function(){if(this.isIE()){var e=this.userAgent.match(/MSIE\s([\d.]+)/)||this.userAgent.match(/rv:([\d.]+)/)||this.userAgent.match(/Edge\/([\d.]+)/);return parseInt(e[1])}return this.isChrome()?parseInt(this.userAgent.match(/Chrome\/([\d.]+)/)[1]):this.isSafari()?parseInt(this.userAgent.match(/Version\/([\d.]+)/)[1]):this.isFirefox()?parseInt(this.userAgent.match(/Firefox\/([\d.]+)/)[1]):void 0}},{key:"friendlyName",value:function(){return this.isMSEdge()?"MSEdge":this.isIE()?"IE":this.isChrome()?"Chrome":this.isSafari()?"Safari":this.isFirefox()?"Firefox":void 0}}]),t}()}).call(this,n("fRV1"))}}]);
//# sourceMappingURL=page.editor-flags.38350bc99f682549cdb1-v35.js.map