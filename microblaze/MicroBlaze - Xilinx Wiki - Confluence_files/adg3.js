(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3nLK":function(e,n,t){"use strict";var i=t("uDfI"),a=t("ERkP"),o=t.n(a),r=(t("aWzz"),t("6DRV")),l=t("2srY"),c=t.n(l),u=t("yjkv"),s=t.n(u),d=t("2BEd");function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function p(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function y(e,n){return!n||"object"!==m(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,n){return(v=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var k=function(){},h=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),y(this,b(n).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&v(e,n)}(n,a["Component"]),function(e,n,t){n&&p(e.prototype,n),t&&p(e,t)}(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.webItems;(0,e.onLoad)({webItems:n})}},{key:"componentWillUnmount",value:function(){this.props.onUnload()}},{key:"render",value:function(){var e=this.props,n=e.id,t=e.className,i=e.style,a=e.children,r=e.webItems,l=e.webSections,c=e.location,u=e.contentId,s=e.webresourcesReady,d={id:n};return t&&(d.className=t),i&&(d.style=i),o.a.createElement(this.props.tagName,f({},d,{"data-webitem-location":c,"data-content-id":u}),s&&"function"==typeof a?a({webItems:r,webSections:l}):null)}}]),n}();function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function N(e,n){return!n||"object"!==g(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,n){return(O=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function I(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.forEach(function(n){j(e,n,t[n])})}return e}function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(h,"defaultProps",{tagName:"div",canFetch:!0,onLoad:k,onUnload:k}),h.displayName="WebItemLocationComponent";var F={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"webItemSectionsQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"locations"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"contentId"}},type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"spaceKey"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"version"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"webItemSections"},arguments:[{kind:"Argument",name:{kind:"Name",value:"locations"},value:{kind:"ListValue",values:[{kind:"Variable",name:{kind:"Name",value:"locations"}}]}},{kind:"Argument",name:{kind:"Name",value:"contentId"},value:{kind:"Variable",name:{kind:"Name",value:"contentId"}}},{kind:"Argument",name:{kind:"Name",value:"key"},value:{kind:"Variable",name:{kind:"Name",value:"spaceKey"}}},{kind:"Argument",name:{kind:"Name",value:"version"},value:{kind:"Variable",name:{kind:"Name",value:"version"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"styleClass"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"accessKey"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"completeKey"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasCondition"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"path"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"params"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"key"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"moduleKey"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"section"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"styleClass"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tooltip"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"urlWithoutContextPath"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"weight"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:580,source:{body:"query webItemSectionsQuery (\n    $locations: String\n    $contentId: ID\n    $spaceKey: String\n    $version: Int\n) {\n    webItemSections(locations: [$locations], contentId: $contentId, key: $spaceKey, version: $version) {\n      label\n      styleClass\n      items {\n       accessKey\n       completeKey\n       hasCondition\n       id\n       icon {\n        path\n        }\n        params {\n          key\n          value\n        }\n        label\n        moduleKey\n        section\n        styleClass\n        tooltip\n        url\n        urlWithoutContextPath\n        weight  \n      }\n    }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}}}},P=Object(i.connect)(function(){return function(e,n){return I({},n,{webresourcesReady:!n.waitForSuperbatch||Object(d.a)(e)})}})(h),E=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),N(this,S(n).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&O(e,n)}(n,a["Component"]),function(e,n,t){n&&w(e.prototype,n),t&&w(e,t)}(n,[{key:"render",value:function(){var e=this.props,n=e.location,t=e.children,i=e.onLoad,a=e.waitForSuperbatch,l=e.hasMultipleSections,u=e.allowedWebItems,d=e.notAllowedWebItems,m=e.spaceKey,f=e.contentId,p=e.id,y=e.className,b=e.style,v=e.tagName,k=e.version,h={locations:n,contentId:f||null,spaceKey:m||null,version:k||null};return o.a.createElement(r.Query,{query:F,variables:h,fetchPolicy:"network-only"},function(e){var r=e.data,m=e.loading;if(e.error||m)return null;var f=[],k=[];return(c()(r,"webItemSections")||[]).forEach(function(e){(e.items||[]).forEach(function(n){(n=I({},n)).parentSection={label:e.label},k.push(n)})}),k=s()(k,"completeKey"),u&&(k=k.filter(function(e){return u.includes(e.completeKey)})),d&&(k=k.filter(function(e){return!d.includes(e.completeKey)})),k.map(function(e){var n={};if(Array.isArray(e.params)&&(e.params.forEach(function(e){n[e.key]=e.value}),e.params=n),e.section&&-1!==e.section.indexOf("/")){var t=e.section.split("/");e.webSection=t[1]}}),l&&k.forEach(function(e){var n=e.section;f.includes(n)||f.push(n)}),k=k.sort(function(e,n){return e.weight-n.weight==0?e.label.localeCompare(n.label):e.weight-n.weight}),o.a.createElement(P,{location:n,webItems:k,webSections:f,waitForSuperbatch:a,onLoad:i,id:p,className:y,style:b,tagName:v},t)})}}]),n}();E.displayName="WebItemLocation";n.a=E}}]);
//# sourceMappingURL=adg3.space.blog~admin-navigation~fabric.editor.breadcrumbs~global-navigation~page.byline~page.header~fdd60ad1.ad4cf1a70e6c19e10922-v35.js.map