(window.webpackJsonp=window.webpackJsonp||[]).push([[829],{2196:function(e,t,n){"use strict";function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return c}))},2197:function(e,t,n){"use strict";function c(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return c}))},2198:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return p}));var c=n(0),a=n.n(c);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,r=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),s=u(n),O=c,p=s["".concat(b,".").concat(O)]||s[O]||d[O]||r;return n?a.a.createElement(p,l(l({ref:t},i),{},{components:n})):a.a.createElement(p,l({ref:t},i))}));function p(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=n.length,b=new Array(r);b[0]=O;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:c,b[1]=l;for(var i=2;i<r;i++)b[i]=n[i];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},2199:function(e,t,n){"use strict";function c(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=c(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=c(e))&&(a&&(a+=" "),a+=t);return a}},2200:function(e,t,n){"use strict";var c=n(0),a=n(2201);t.a=function(){var e=Object(c.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2201:function(e,t,n){"use strict";var c=n(0),a=Object(c.createContext)(void 0);t.a=a},2202:function(e,t,n){"use strict";var c=n(0),a=n.n(c),r=n(2200),b=n(2199),l=n(51),o=n.n(l),i=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.children,s=e.defaultValue,d=e.values,O=e.groupId,p=e.className,j=Object(r.a)(),m=j.tabGroupChoices,h=j.setTabGroupChoices,f=Object(c.useState)(s),x=f[0],v=f[1];if(null!=O){var g=m[O];null!=g&&g!==x&&d.some((function(e){return e.value===g}))&&v(g)}var y=function(e){v(e),null!=O&&h(O,e)},k=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":n},p)},d.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":x===t,className:Object(b.a)("tabs__item",o.a.tabItem,{"tabs__item--active":x===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},n)}))),t?Object(c.cloneElement)(l.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},l.map((function(e,t){return Object(c.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}},2203:function(e,t,n){"use strict";var c=n(2196),a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",Object(c.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},894:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var c=n(2196),a=n(2197),r=(n(0),n(2198)),b=n(2202),l=n(2203),o={title:"Checkbox",sidebar_label:"Checkbox"},i={unversionedId:"components/forms/checkbox",id:"version-3.2.0-canary.3/components/forms/checkbox",isDocsHomePage:!1,title:"Checkbox",description:"\u591a\u9009\u9879\u76ee",source:"@site/versioned_docs/version-3.2.0-canary.3/components/forms/checkbox.md",slug:"/components/forms/checkbox",permalink:"/taro/docs/3.2.0-canary.3/components/forms/checkbox",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.2.0-canary.3/components/forms/checkbox.md",version:"3.2.0-canary.3",sidebar_label:"Checkbox",sidebar:"version-3.2.0-canary.3/components",previous:{title:"Button",permalink:"/taro/docs/3.2.0-canary.3/components/forms/button"},next:{title:"Editor",permalink:"/taro/docs/3.2.0-canary.3/components/forms/editor"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"CheckboxProps",id:"checkboxprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],s={rightToc:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(c.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u591a\u9009\u9879\u76ee"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html"}),"\u53c2\u8003\u6587\u6863"))),Object(r.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<CheckboxProps>\n")),Object(r.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(r.b)(b.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"React",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"export default class PageCheckbox extends Component {\n  state = {\n    list: [\n      {\n        value: '\u7f8e\u56fd',\n        text: '\u7f8e\u56fd',\n        checked: false\n      },\n      {\n        value: '\u4e2d\u56fd',\n        text: '\u4e2d\u56fd',\n        checked: true\n      },\n      {\n        value: '\u5df4\u897f',\n        text: '\u5df4\u897f',\n        checked: false\n      },\n      {\n        value: '\u65e5\u672c',\n        text: '\u65e5\u672c',\n        checked: false\n      },\n      {\n        value: '\u82f1\u56fd',\n        text: '\u82f1\u56fd',\n        checked: false\n      },\n      {\n        value: '\u6cd5\u56fd',\n        text: '\u6cd5\u56fd',\n        checked: false\n      }\n    ]\n  }\n  render () {\n    return (\n      <View className='page-body'>\n        <View className='page-section'>\n          <Text>\u9ed8\u8ba4\u6837\u5f0f</Text>\n          <Checkbox value='\u9009\u4e2d' checked>\u9009\u4e2d</Checkbox>\n          <Checkbox style='margin-left: 20rpx' value='\u672a\u9009\u4e2d'>\u672a\u9009\u4e2d</Checkbox>\n        </View>\n        <View className='page-section'>\n          <Text>\u63a8\u8350\u5c55\u793a\u6837\u5f0f</Text>\n          {this.state.list.map((item, i) => {\n            return (\n              <Label className='checkbox-list__label' for={i} key={i}>\n                <Checkbox className='checkbox-list__checkbox' value={item.value} checked={item.checked}>{item.text}</Checkbox>\n              </Label>\n            )\n          })}\n        </View>\n      </View>\n    )\n  }\n}\n"))),Object(r.b)(l.a,{value:"Vue",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-html"}),"<template>\n  <view class=\"container\">\n    <view class=\"page-section\">\n          <text>\u9ed8\u8ba4\u6837\u5f0f</text>\n          <checkbox value=\"\u9009\u4e2d\" checked=\"true\">\u9009\u4e2d</checkbox>\n          <checkbox style=\"margin-left: 20rpx;\" value=\"\u672a\u9009\u4e2d\">\u672a\u9009\u4e2d</checkbox>\n        </view>\n        <view class=\"page-section\">\n          <text>\u63a8\u8350\u5c55\u793a\u6837\u5f0f(Taro \u56e2\u961f\u6210\u5458):</text>\n            <label v-for=\"item in list\" class=\"checkbox-list__label\">\n              <checkbox class=\"checkbox-list__checkbox\" :value=\"item.value\" :checked=\"item.checked\">{{ item.text }}</checkbox>\n            </label>\n        </view>\n  </view>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      list: [\n        {\n          value: 'yuche',\n          text: 'yuche',\n          checked: false\n        },\n        {\n          value: 'cjj',\n          text: 'cjj',\n          checked: true\n        },\n        {\n          value: 'xiexiaoli',\n          text: 'xiexiaoli',\n          checked: true\n        },\n        {\n          value: 'honly',\n          text: 'honly',\n          checked: true\n        },\n        {\n          value: 'cs',\n          text: 'cs',\n          checked: true\n        },\n        {\n          value: 'zhutianjian',\n          text: 'zhutianjian',\n          checked: true\n        },\n        {\n          value: '\u9694\u58c1\u8001\u674e',\n          text: '\u9694\u58c1\u8001\u674e',\n          checked: true\n        }\n      ]\n    }\n  }\n}\n<\/script>\n\n")))),Object(r.b)("h2",{id:"checkboxprops"},"CheckboxProps"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(r.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"value"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(r.b)("td",null,Object(r.b)("code",null,"<Checkbox/>"),"\u6807\u8bc6\uff0c\u9009\u4e2d\u65f6\u89e6\u53d1",Object(r.b)("code",null,"<CheckboxGroup/>"),"\u7684 change \u4e8b\u4ef6\uff0c\u5e76\u643a\u5e26 ",Object(r.b)("code",null,"<Checkbox/>")," \u7684 value")),Object(r.b)("tr",null,Object(r.b)("td",null,"disabled"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"false")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u662f\u5426\u7981\u7528")),Object(r.b)("tr",null,Object(r.b)("td",null,"checked"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"false")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u5f53\u524d\u662f\u5426\u9009\u4e2d\uff0c\u53ef\u7528\u6765\u8bbe\u7f6e\u9ed8\u8ba4\u9009\u4e2d")),Object(r.b)("tr",null,Object(r.b)("td",null,"color"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"checkbox\u7684\u989c\u8272\uff0c\u540c css \u7684 color")),Object(r.b)("tr",null,Object(r.b)("td",null,"onChange"),Object(r.b)("td",null,"`BaseEventOrigFunction<","{ value: string[]; }",">"),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u9009\u4e2d\u9879\u53d1\u751f\u53d8\u5316\u65f6\u89e6\u53d1 change \u4e8b\u4ef6\uff0c\u5c0f\u7a0b\u5e8f\u65e0\u6b64 API")))),Object(r.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"CheckboxProps.value"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"CheckboxProps.disabled"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"CheckboxProps.checked"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"CheckboxProps.color"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"CheckboxProps.onChange"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),Object(r.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"Checkbox"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);