(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"2NBl":function(e,t,n){"use strict";n.d(t,"a",function(){return v});n("aWzz");var r,c=n("ERkP"),i=n.n(c),o=n("L21V"),s=n("O94r"),a=n.n(s),u=n("+HyH"),l=n("M2LZ"),p=n("IGvV"),f=n("jqY8"),d=n("GYH8"),m=n.n(d);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=Object(p.a)(m.a)(r=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return h(w(w(n=function(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?w(e):t}(this,(e=g(t)).call.apply(e,[this].concat(c))))),"state",{requestAccessInitialised:!1}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,c["Component"]),function(e,t,n){t&&y(e.prototype,t),n&&y(e,n)}(t,[{key:"componentDidMount",value:function(){this._initRequestAccessPlugin()}},{key:"componentDidUpdate",value:function(){this._initRequestAccessPlugin()}},{key:"_renderInheritedPermissionsView",value:function(){return i.a.createElement("div",{className:a()(m.a.block,"request-access-container"),id:"page-restricted-inherited-container","data-access-type":"inherited"},i.a.createElement(o.c,{tagName:"h3",id:"confluence.request.access.pagerestricted.requestaccess.title.view.page"}),i.a.createElement(o.c,{tagName:"p",id:"confluence.request.access.pagerestricted.inherited.description"}))}},{key:"_renderRequestPermissionsView",value:function(){var e=this.props.accessType;return i.a.createElement("div",{className:a()(m.a.block,"request-access-container","pagebody"),id:"page-restricted-container","data-access-type":e},"edit"===e?i.a.createElement(o.c,{tagName:"h3",id:"confluence.request.access.pagerestricted.requestaccess.title.edit.page"}):i.a.createElement(o.c,{tagName:"h3",id:"confluence.request.access.pagerestricted.requestaccess.title.view.page"}),i.a.createElement(o.c,{tagName:"p",id:"confluence.request.access.pagerestricted.requestaccess.description"}),i.a.createElement("div",null,i.a.createElement(u.a,{appearance:"primary"},i.a.createElement(o.c,{id:"confluence.request.access.pagerestricted.request.access.button"}))))}},{key:"_initRequestAccessPlugin",value:function(){var e=this;this.state.requestAccessInitialised||l.a.require("wr!com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources").then(function(){var t=Object(f.d)("confluence-request-access-plugin/request-access");try{t.init(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){h(e,t,n[t])})}return e}({},e.props))}catch(e){}e.setState({requestAccessInitialised:!0})})}},{key:"render",value:function(){return i.a.createElement("div",{className:m.a.root},"inherited"===this.props.accessType?this._renderInheritedPermissionsView():this._renderRequestPermissionsView())}}]),t}())||r;v.displayName="ConfluenceNoPermission"},BPcY:function(e,t,n){(t=e.exports=n("RDo7")(!1)).push([e.i,'.ConfluenceNoPermission_root_6zH{padding:100px 0;width:100%}.ConfluenceNoPermission_block_3LK.ConfluenceNoPermission_block_3LK{border:1px solid #ccc;border-radius:3px;width:35%;margin:0 auto;padding:30px 200px 30px 30px;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAACCCAMAAAC6s/yfAAAAA3NCSVQICAjb4U/gAAAAh1BMVEX///9wcHCBgYF6enp3d3dwcHCtra2np6ekpKShoaGcnJyZmZmRkZGJiYmEhITFxcXBwcG7u7u5ubmxsbHR0dHMzMzIyMjHx8fFxcXd3d3Z2dnl5eXi4uLf39/r6+vp6enn5+fx8fHu7u7r6+vz8/Px8fH39/f19fX7+/v5+fn7+/v///////8JAl6GAAAALXRSTlMAESIiIiIzMzMzMzMzMzNERERERFVVVVVVZmZ3d3eIiIiZmZmqqru7zMzd7v9jxBijAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABZ0RVh0Q3JlYXRpb24gVGltZQAyOS8xMC8xMgMV3BMAAAI7SURBVGiB7dnbUsIwEAZgOVQF1KpQoRysKBTo8v7PZzkHmjTZZhdGZ/eKmab58m+TwujdHaJqtVpwqPwz5tbqpZiBonOrGvRgM6olLKNtU7fF4LqwDKGd4jKEdmdpQ6NcQhnpkslol+g5V3BJ5EougWw8R9u3s/ld5vuYTRPXrEM8Yac4DJG1aYpTaod5wc5RiCNrv/Kdl+gBI3Jo1ljd1QVGDK7ea1wKwsjujdYvkxDGDa/aa+xTK4yngy03UMHITmtWSgXbEvw/GH2HwAILLLDAAgsssMACCyywwAL/aRjx3x5bIf4QQqhibHLWkeZgN3Ur1ybzueUyp1sms+yrU5l3GK9rjswc2ByZ2zVFZg9sinwzmN819FpggQUWWGAGuNkexJ/zRZou5snw/fk6cL2frADWSkGWJuELM9ybZWtdQTaN6mxwZ7IELbuzV+MWC9wZ68MqlY1szxsPvwxXNnZLR8Tw46ykyWcNn5b2Gwv3rF0+1fKVDG58aeICZHmB7sqQCG5ML2dOk6i9v9hsRfm5vrg+IoEbs/NZ58X989S72AJTCvjMzZKOflQ3OdsGc39Y7TN8Ppii5Of8W01tyOwOj5TZ0q6Z3dSHetQnfnB4aiAk5WywCa10J/SCJ0cYelY3r/jYIEg94f1MMHBxgyACIni5k+HNzT3K4AmHP7mcv6Qs7/6CDLBaeMFbOUvLXr+F6m+Wqncx5ziM49i5z7u6T/NfY/pLCJi2BBZYYIEFFlhggQUW+DrwL56mBFfCKkekAAAAAElFTkSuQmCC") no-repeat 100%}.ConfluenceNoPermission_block_3LK.ConfluenceNoPermission_block_3LK p{color:#707070;line-height:24px;font-size:16px;margin-top:0;margin-bottom:26px}',""]),t.locals={root:"ConfluenceNoPermission_root_6zH",block:"ConfluenceNoPermission_block_3LK"}},GYH8:function(e,t,n){var r=n("BPcY"),c=n("7l8p");"string"==typeof r&&(r=[[e.i,r,""]]),e.exports=r.locals||{},e.exports._getContent=function(){return r},e.exports._getCss=function(){return r.toString()},e.exports._insertCss=function(e){return c(r,e)}}}]);
//# sourceMappingURL=fabric.editpage~space.overview~space.viewpage.0afd210fb5e3238882f6-v35.js.map