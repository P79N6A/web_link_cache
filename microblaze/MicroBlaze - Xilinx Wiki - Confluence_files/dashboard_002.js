(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{OjRD:function(e,o,t){"use strict";var n=t("i66J"),r=t("frB3"),i=(t("aWzz"),t("ERkP")),u=t.n(i);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function c(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,o){return!o||"object"!==s(o)&&"function"!=typeof o?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):o}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,o){return(h=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e})(e,o)}var p=function(e){function o(){return function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o),l(this,f(o).apply(this,arguments))}return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),o&&h(e,o)}(o,i["Component"]),function(e,o,t){o&&c(e.prototype,o),t&&c(e,t)}(o,[{key:"render",value:function(){var e=this.props,o=e.children,t=e.eventHandlers;return Object(i.cloneElement)(o,function(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(o){a(e,o,t[o])})}return e}({},t))}}]),o}();p.displayName="Hover",p.defaultProps={eventHandlers:{}},p.displayName="Hover";var v,y=t("uDfI"),d=(t("0iyY"),t("w0mW")),b=t.n(d);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(){return(w=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function g(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,o){return(H=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e})(e,o)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var S={HOVER:"hover",NONE:"none"},T=Object(y.connect)()(v=function(e){function o(){var e;return function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o),(e=function(e,o){return!o||"object"!==m(o)&&"function"!=typeof o?_(e):o}(this,O(o).call(this)))._refCallback=e._refCallback.bind(_(_(e))),e.onMouseEnter=e.onMouseEnter.bind(_(_(e))),e.onMouseLeave=e.onMouseLeave.bind(_(_(e))),e.onComponentToShowMouseEnter=e.onComponentToShowMouseEnter.bind(_(_(e))),e.onComponentToShowMouseLeave=e.onComponentToShowMouseLeave.bind(_(_(e))),e.hoverId=b()("hover_"),e}return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),o&&H(e,o)}(o,i["Component"]),function(e,o,t){o&&g(e.prototype,o),t&&g(e,t)}(o,[{key:"componentDidMount",value:function(){this.props.open&&this._showHoverAfterDelay()}},{key:"componentDidUpdate",value:function(e){var o=this.props.open;e.open!==o&&(o?this._showHoverAfterDelay():this._hideHoverAfterDelay())}},{key:"componentWillUnmount",value:function(){this._hideHover()}},{key:"onMouseLeave",value:function(){this.props.shouldHide&&(this.isHoveringTarget=!1,this.toggleHover())}},{key:"onMouseEnter",value:function(){this.isHoveringTarget=!0,this.toggleHover()}},{key:"onComponentToShowMouseEnter",value:function(){this.isHoveringComponentToShow=!0,this.toggleHover()}},{key:"onComponentToShowMouseLeave",value:function(){this.props.shouldHide&&(this.isHoveringComponentToShow=!1,this.toggleHover())}},{key:"_showHoverAfterDelay",value:function(){var e=this;this.showTimer=setTimeout(function(){e._showHover()},this.props.delayShow)}},{key:"_showHover",value:function(){this.isShowing=!0;var e=this.props,o=e.gravity,t=e.componentToShow,r=e.dispatch,u=e.gap,s=e.zIndex,a=e.fixed,c=e.shouldPersistOnScrollAndResize;this._hoverTarget&&r(Object(n.b)({hoverId:this.hoverId,gravity:o,componentToShow:Object(i.cloneElement)(t,{onMouseEnter:this.onComponentToShowMouseEnter,onMouseLeave:this.onComponentToShowMouseLeave}),gap:u,target:this._hoverTarget,zIndex:s,fixed:a,shouldPersistOnScrollAndResize:c}))}},{key:"_hideHoverAfterDelay",value:function(){var e=this;this.hideTimer=setTimeout(function(){e._hideHover()},this.props.delayHide)}},{key:"_hideHover",value:function(){this.isShowing=!1,(0,this.props.dispatch)(Object(n.a)({hoverId:this.hoverId}))}},{key:"_clearTimers",value:function(){clearTimeout(this.hideTimer),clearTimeout(this.showTimer)}},{key:"isHovering",value:function(){return this.isHoveringTarget||this.isHoveringComponentToShow}},{key:"toggleHover",value:function(){var e=this.isHovering();this._clearTimers(),this.isShowing&&!e?this._hideHoverAfterDelay():!this.isShowing&&e&&this._showHoverAfterDelay()}},{key:"_getEventHandlers",value:function(e){switch(e){case S.HOVER:return{onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave};case S.NONE:return{}}}},{key:"_refCallback",value:function(e){this._hoverTarget=e}},{key:"render",value:function(){var e=this.props,o=e.children,t=e.showOn,n=e.className,r=e.style,i=this._getEventHandlers(t),s={className:n,style:r};return u.a.createElement(p,{eventHandlers:i},u.a.createElement(this.props.tagName,w({ref:this._refCallback},s),o))}}]),o}())||v;T.defaultProps={delayHide:150,delayShow:200,gravity:"n",gap:0,showOn:S.HOVER,open:!1,tagName:"div",shouldHide:!0,shouldPersistOnScrollAndResize:!1},T.displayName="ReduxHover";var E=t("TgF9");t.d(o,"b",function(){return r.a}),t.d(o,"a",function(){return p}),t.d(o,"c",function(){return T}),t.d(o,!1,function(){}),t.d(o,!1,function(){return E.a}),t.d(o,!1,function(){})}}]);
//# sourceMappingURL=dashboard.all-updates~dashboard.popular~space-navigation~space.overview~space.viewpage.d89c3111af7d9baaceb5-v35.js.map