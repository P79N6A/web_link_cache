(window.webpackJsonp=window.webpackJsonp||[]).push([[252,251],{5:function(t,n){},"7gsp":function(t,n,e){"use strict";e.r(n),e.d(n,"Flags",function(){return f});var r=e("ERkP"),o=e.n(r),i=e("lZoD"),c=e("fzGQ"),u=e("DAAn");function a(){return(a=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}var f=function(t){return o.a.createElement(i.c,{to:[c.a]},function(n){return o.a.createElement(u.FlagsComponent,a({flags:n.state.flags,showFlag:n.showFlag,hideFlag:n.hideFlag},t))})}},fzGQ:function(t,n,e){"use strict";e.d(n,"a",function(){return s});var r=e("lZoD");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){return(i="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)})(t)}function c(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var s=function(t){function n(t){var e;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),l(f(f(e=function(t,n){return!n||"object"!==i(n)&&"function"!=typeof n?f(t):n}(this,u(n).call(this)))),"showFlag",function(t){var n=e.state,r=n.flags,o=n.nextFlagId;if(!r.find(function(n){return n.id===t.id})){var i=function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){l(t,n,e[n])})}return t}({id:o},t);return e.setState({flags:c(e.state.flags).concat([i]),nextFlagId:o+1}).then(function(){return i})}}),l(f(f(e)),"hideFlag",function(t){e.setState({flags:e.state.flags.filter(function(n){return n.id!==t})})}),l(f(f(e)),"showSuccessFlag",function(t){var n=t.title,r=t.description,o=t.actions;return e.showFlag({type:"success",title:n,description:r,close:"auto",actions:o})}),l(f(f(e)),"showErrorFlag",function(t){var n=t.title,r=t.description,o=t.actions;return e.showFlag({type:"error",title:n,description:r,actions:o})}),e.state={flags:t||[],nextFlagId:t?t.length:0},e}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}(n,r["a"]),n}()}}]);
//# sourceMappingURL=flags.711ebe18077dac5e96b2-v35.js.map