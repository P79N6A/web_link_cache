(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"2Ig/":function(n,t,e){"use strict";var o=e("VrFO"),r=e.n(o),i=e("Y9Ll"),u=e.n(i),a=e("N+ot"),c=e.n(a),d=e("AuHH"),s=e.n(d),l=e("5Yy7"),f=e.n(l),p=e("KEM+"),v=e.n(p),m=e("ERkP"),b=e.n(m),h=e("OEBU"),g=e("YGBU"),y=e("2sr0"),k=e("is1l"),x=e("KsTJ"),E=e("+3hD"),O=e("dDc+"),F=Object(E.a)({light:O.colors.N100A,dark:O.colors.DN90A}),N=x.default.div.withConfig({displayName:"styled",componentId:"knyj0u-0"})(["\n  background: ",";\n  bottom: 0;\n  left: 0;\n  opacity: ",";\n  pointer-events: ",";\n  position: fixed;\n  right: 0;\n  top: 0;\n  transition: opacity 220ms;\n  z-index: ",";\n"],F,function(n){return n.isTinted?1:0},function(n){return n.canClickThrough?"none":"initial"},O.layers.blanket),A=function(n){function t(){return r()(this,t),c()(this,s()(t).apply(this,arguments))}return f()(t,n),u()(t,[{key:"render",value:function(){var n=this.props,t=n.canClickThrough,e=n.isTinted,o=n.onBlanketClicked,r={canClickThrough:t,isTinted:e,onClick:t?null:o};return b.a.createElement(N,r)}}]),t}(m.PureComponent);v()(A,"defaultProps",{canClickThrough:!1,isTinted:!1,onBlanketClicked:function(){}});var w=Object(h.a)("atlaskit");t.a=Object(g.a)({componentName:"blanket",packageName:k.a,packageVersion:k.b})(Object(y.a)({onBlanketClicked:w({action:"clicked",actionSubject:"blanket",attributes:{componentName:"blanket",packageName:k.a,packageVersion:k.b}})})(A))},JxUC:function(n,t){n.exports=function(n,t,e,o){var r=e?e.call(o,n,t):void 0;if(void 0!==r)return!!r;if(n===t)return!0;if("object"!=typeof n||!n||"object"!=typeof t||!t)return!1;var i=Object.keys(n),u=Object.keys(t);if(i.length!==u.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var d=i[c];if(!a(d))return!1;var s=n[d],l=t[d];if(!1===(r=e?e.call(o,s,l,d):void 0)||void 0===r&&s!==l)return!1}return!0}},"W/Kd":function(n,t){n.exports=function(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}},hgjN:function(n,t,e){"use strict";var o={};e.r(o),e.d(o,"FOCUS_GROUP",function(){return h}),e.d(o,"FOCUS_DISABLED",function(){return g}),e.d(o,"FOCUS_ALLOW",function(){return y}),e.d(o,"FOCUS_AUTO",function(){return k});var r=e("97Jx"),i=e.n(r),u=e("W/Kd"),a=e.n(u),c=e("1Pcy"),d=e.n(c),s=e("KEM+"),l=e.n(s),f=e("ERkP"),p=e.n(f),v=(e("aWzz"),function(n){for(var t=Array(n.length),e=0;e<n.length;++e)t[e]=n[e];return t}),m=function(n,t){var e=n.tabIndex-t.tabIndex,o=n.index-t.index;if(e){if(!n.tabIndex)return 1;if(!t.tabIndex)return-1}return e||o},b=["button:enabled:not([readonly])","select:enabled:not([readonly])","textarea:enabled:not([readonly])","input:enabled:not([readonly])","a[href]","area[href]","iframe","object","embed","[tabindex]","[contenteditable]","[autofocus]"],h="data-focus-lock",g="data-focus-lock-disabled",y="data-no-focus-lock",k="data-autofocus-inside",x=function(n){return n.reduce(function(n,t){return n.concat(v(t.querySelectorAll(b.join(","))))},[])},E=function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.push(t),t.parentNode&&n(t.parentNode,e),e},O=function(n,t){for(var e=E(n),o=E(t),r=0;r<e.length;r+=1){var i=e[r];if(o.indexOf(i)>=0)return i}return!1},F=function(n){return v(n).filter(function(n){return function n(t){return!t||t===document||!function(n){return!(!n||!n.getPropertyValue||"none"!==n.getPropertyValue("display")&&"hidden"!==n.getPropertyValue("visibility"))}(window.getComputedStyle(t,null))&&n(t.parentNode)}(n)}).filter(function(n){return function(n){return!(("INPUT"===n.tagName||"BUTTON"===n.tagName)&&("hidden"===n.type||n.disabled))}(n)})},N=function(n){return function(n){return v(n).map(function(n,t){return{node:n,index:t,tabIndex:n.tabIndex}}).filter(function(n){return n.tabIndex>=0}).sort(m)}(F(x(n)))},A=function(n){return F(function(n){var t=n.querySelectorAll("["+k+"]");return v(t).map(function(n){return x([n])}).reduce(function(n,t){return n.concat(t)},[])}(n))},w=function(n){return"INPUT"===n.tagName&&"radio"===n.type},C=function(n){return n[0]&&n.length>1&&w(n[0])&&n[0].name?function(n,t){return t.filter(w).filter(function(t){return t.name===n.name}).filter(function(n){return n.checked})[0]||n}(n[0],n):n[0]},S=function(n){var t=n.getAttribute(h);return t?function n(t){var e=t.length,o=void 0,r=void 0;for(o=0;o<e;o+=1)for(r=0;r<e;r+=1)if(o!==r&&t[o].contains(t[r]))return n(t.filter(function(n){return n!==t[r]}));return t}(v(function n(t){return t.parentNode?n(t.parentNode):t}(n).querySelectorAll("["+h+'="'+t+'"]:not(['+g+'="disabled"])'))):[n]},T=function(n){return!(n.dataset&&n.dataset.focusGuard)},U=function(n,t){var e=document&&document.activeElement,o=S(n).filter(T),r=function(n,t,e){var o=t;return e.forEach(function(t){var e=O(n,t);e&&(o=e.contains(o)?e:O(e,o))}),o}(e||n,n,o),i=N(o).filter(function(n){var t=n.node;return T(t)});if(i[0]){var u=i.map(function(n){return n.node}),a=function(n,t,e,o,r){var i=n.length,u=n[0],a=n[i-1];if(!(n.indexOf(e)>=0)){var c=t.indexOf(e),d=t.indexOf(o||c),s=n.indexOf(o),l=c-d,f=t.indexOf(u),p=t.indexOf(a);return-1===c||-1===s?n.indexOf(r.length?C(r):C(n)):!l&&s>=0?s:l&&Math.abs(l)>1?s:c<=f?i-1:c>p?0:l?Math.abs(l)>1?s:(i+s+l)%i:void 0}}(u,N([r]).map(function(n){return n.node}),e,t,u.filter(function(n){return function(t){return!!t.autofocus||t.dataset&&!!t.dataset.autofocus||n.indexOf(t)>=0}}(function(n){return n.reduce(function(n,t){return n.concat(A(t))},[])}(o))));return void 0===a?a:i[a]}},D=function(n){return n===document.activeElement},I=function(n){var t=document&&document.activeElement;return!(!t||t.dataset&&t.dataset.focusGuard)&&S(n).reduce(function(e,o){return e||o.contains(t)||function(n){return S(n).reduce(function(n,t){return n||!!function(n,t){return n.filter(function(n){return n===t})[0]}(v(t.querySelectorAll("iframe")),D)},!1)}(n)},!1)},P=function(){return document&&v(document.querySelectorAll("["+y+"]")).some(function(n){return n.contains(document.activeElement)})},j=0,L=function(n,t){var e=U(n,t);if(e){if(j>2)return;j++,function(n){n.focus(),n.contentWindow&&n.contentWindow.focus()}(e.node),j--}},_=e("JxUC"),B=e.n(_);function G(n){var t=window.setImmediate;void 0!==t?t(n):setTimeout(n,1)}var W=function(){return function(){return document&&document.activeElement===document.body}()||P()},J=null,V=null,q=null,K=function(){var n=!1;if(J){var t=J,e=t.observed,o=t.persistentFocus,r=t.autoFocus,i=e||q&&q.portaledElement,u=document&&document.activeElement;u&&!function(n){return(J.whiteList||function(){return!0})(n)}(u)||(o||!W()||!V&&r)&&(!i||I(i)||function(n){return q&&q.portaledElement===n}(u)||(document&&!V&&u&&!r?(u.blur(),document.body.focus()):(n=L(i,V),q={})),V=document&&document.activeElement)}return n},M=function(n){K()&&n&&(n.stopPropagation(),n.preventDefault())},R=function(){return G(K)},z=function(n){var t=n.target,e=n.currentTarget;e.contains(t)||function(n,t){q={observerNode:n,portaledElement:t}}(e,t)},Y=function(){document.addEventListener("focusin",M,!0),document.addEventListener("focusout",R)},H=function(){document.removeEventListener("focusin",M,!0),document.removeEventListener("focusout",R)};var Q=function(n,t){return function(e){var o,r=[];function i(){o=n(r.map(function(n){return n.props})),t(o)}var u=function(n){function t(){return n.apply(this,arguments)||this}a()(t,n),t.peek=function(){return o};var u=t.prototype;return u.shouldComponentUpdate=function(n){return!B()(n,this.props)},u.componentDidMount=function(){r.push(this),i()},u.componentDidUpdate=function(){i()},u.componentWillUnmount=function(){var n=r.indexOf(this);r.splice(n,1),i()},u.render=function(){return p.a.createElement(e,this.props)},t}(f.Component);return l()(u,"displayName","SideEffect("+function(n){return n.displayName||n.name||"Component"}(e)+")"),u}}(function(n){return n.filter(function(n){return!n.disabled}).slice(-1)[0]},function(n){n&&!J&&Y();var t=J,e=t&&n&&n.onActivation===t.onActivation;J=n,t&&!e&&t.onDeactivation(),n?(V=null,e&&t.observed===n.observed||n.onActivation(),K(!0),G(K)):(H(),V=null)})(function(){return null}),X=function(n){var t=n.children;return p.a.createElement("div",null,t)};X.propTypes={};var Z=p.a.Fragment?p.a.Fragment:X,$={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},nn=function(n){function t(){for(var t,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return t=n.call.apply(n,[this].concat(o))||this,l()(d()(d()(t)),"state",{observed:void 0}),l()(d()(d()(t)),"onActivation",function(){t.originalFocusedElement=t.originalFocusedElement||document&&document.activeElement,t.state.observed&&t.props.onActivation&&t.props.onActivation(t.state.observed)}),l()(d()(d()(t)),"onDeactivation",function(){t.props.returnFocus&&t.originalFocusedElement&&t.originalFocusedElement.focus&&(t.originalFocusedElement.focus(),t.originalFocusedElement=null),t.props.onDeactivation&&t.props.onDeactivation(t.state.observed)}),l()(d()(d()(t)),"setObserveNode",function(n){return t.setState({observed:n})}),l()(d()(d()(t)),"update",function(){return t.setState(function(n){return{escapeAttempts:n.escapeAttempts+1}})}),l()(d()(d()(t)),"originalFocusedElement",null),t}return a()(t,n),t.prototype.render=function(){var n,t=this.props,e=t.children,r=t.disabled,u=t.noFocusGuards,a=t.persistentFocus,c=t.autoFocus,d=(t.allowTextSelection,t.group),s=t.className,l=t.whiteList,f=t.as,v=void 0===f?"div":f,m=t.lockProps,b=void 0===m?{}:m,h=this.state.observed;var g=i()(((n={})[o.FOCUS_DISABLED]=r&&"disabled",n[o.FOCUS_GROUP]=d,n),b);return p.a.createElement(Z,null,!u&&[p.a.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:r?-1:0,style:$}),p.a.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:r?-1:1,style:$})],p.a.createElement(v,i()({ref:this.setObserveNode},g,{className:s,onBlur:R,onFocus:z}),p.a.createElement(Q,{observed:h,disabled:r,persistentFocus:a,autoFocus:c,whiteList:l,onActivation:this.onActivation,onDeactivation:this.onDeactivation}),e),!u&&p.a.createElement("div",{"data-focus-guard":!0,tabIndex:r?-1:0,style:$}))},t}(f.Component);nn.propTypes={},nn.defaultProps={disabled:!1,returnFocus:!1,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};var tn=nn;t.a=tn},is1l:function(n){n.exports={a:"@atlaskit/blanket",b:"7.0.12"}}}]);
//# sourceMappingURL=vendors~error-detail~fabric.resize.image.dialog~fabric.template.variables.dialog~page.edit-label-dia~2fae9d3b.d975568fe01dc33f02a9-v35.js.map