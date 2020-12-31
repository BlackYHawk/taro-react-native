(window.webpackJsonp=window.webpackJsonp||[]).push([[955],{1020:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return i}));var l=n(2196),c=n(2197),b=(n(0),n(2198)),r={title:"Taro.getBluetoothDevices(option)",sidebar_label:"getBluetoothDevices"},a={unversionedId:"apis/device/bluetooth/getBluetoothDevices",id:"apis/device/bluetooth/getBluetoothDevices",isDocsHomePage:!1,title:"Taro.getBluetoothDevices(option)",description:"\u83b7\u53d6\u5728\u84dd\u7259\u6a21\u5757\u751f\u6548\u671f\u95f4\u6240\u6709\u5df2\u53d1\u73b0\u7684\u84dd\u7259\u8bbe\u5907\u3002\u5305\u62ec\u5df2\u7ecf\u548c\u672c\u673a\u5904\u4e8e\u8fde\u63a5\u72b6\u6001\u7684\u8bbe\u5907\u3002",source:"@site/docs/apis/device/bluetooth/getBluetoothDevices.md",slug:"/apis/device/bluetooth/getBluetoothDevices",permalink:"/taro/docs/next/apis/device/bluetooth/getBluetoothDevices",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/device/bluetooth/getBluetoothDevices.md",version:"current",sidebar_label:"getBluetoothDevices",sidebar:"API",previous:{title:"Taro.getConnectedBluetoothDevices(option)",permalink:"/taro/docs/next/apis/device/bluetooth/getConnectedBluetoothDevices"},next:{title:"Taro.getBluetoothAdapterState(option)",permalink:"/taro/docs/next/apis/device/bluetooth/getBluetoothAdapterState"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"SuccessCallbackResultBlueToothDevice",id:"successcallbackresultbluetoothdevice",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:o};function i(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(b.b)("wrapper",Object(l.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u83b7\u53d6\u5728\u84dd\u7259\u6a21\u5757\u751f\u6548\u671f\u95f4\u6240\u6709\u5df2\u53d1\u73b0\u7684\u84dd\u7259\u8bbe\u5907\u3002\u5305\u62ec\u5df2\u7ecf\u548c\u672c\u673a\u5904\u4e8e\u8fde\u63a5\u72b6\u6001\u7684\u8bbe\u5907\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u6ce8\u610f\u4e8b\u9879")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u8be5\u63a5\u53e3\u83b7\u53d6\u5230\u7684\u8bbe\u5907\u5217\u8868\u4e3a",Object(b.b)("strong",{parentName:"li"},"\u84dd\u7259\u6a21\u5757\u751f\u6548\u671f\u95f4\u6240\u6709\u641c\u7d22\u5230\u7684\u84dd\u7259\u8bbe\u5907"),"\uff0c\u82e5\u5728\u84dd\u7259\u6a21\u5757\u4f7f\u7528\u6d41\u7a0b\u7ed3\u675f\u540e\u672a\u53ca\u65f6\u8c03\u7528 Taro.closeBluetoothAdapter \u91ca\u653e\u8d44\u6e90\uff0c\u4f1a\u5b58\u5728\u8c03\u7528\u8be5\u63a5\u53e3\u4f1a\u8fd4\u56de\u4e4b\u524d\u7684\u84dd\u7259\u4f7f\u7528\u6d41\u7a0b\u4e2d\u641c\u7d22\u5230\u7684\u84dd\u7259\u8bbe\u5907\uff0c\u53ef\u80fd\u8bbe\u5907\u5df2\u7ecf\u4e0d\u5728\u7528\u6237\u8eab\u8fb9\uff0c\u65e0\u6cd5\u8fde\u63a5\u3002"),Object(b.b)("li",{parentName:"ul"},"\u84dd\u7259\u8bbe\u5907\u5728\u88ab\u641c\u7d22\u5230\u65f6\uff0c\u7cfb\u7edf\u8fd4\u56de\u7684 name \u5b57\u6bb5\u4e00\u822c\u4e3a\u5e7f\u64ad\u5305\u4e2d\u7684 LocalName \u5b57\u6bb5\u4e2d\u7684\u8bbe\u5907\u540d\u79f0\uff0c\u800c\u5982\u679c\u4e0e\u84dd\u7259\u8bbe\u5907\u5efa\u7acb\u8fde\u63a5\uff0c\u7cfb\u7edf\u8fd4\u56de\u7684 name \u5b57\u6bb5\u4f1a\u6539\u4e3a\u4ece\u84dd\u7259\u8bbe\u5907\u4e0a\u83b7\u53d6\u5230\u7684 ",Object(b.b)("inlineCode",{parentName:"li"},"GattName"),"\u3002\u82e5\u9700\u8981\u52a8\u6001\u6539\u53d8\u8bbe\u5907\u540d\u79f0\u5e76\u5c55\u793a\uff0c\u5efa\u8bae\u4f7f\u7528 ",Object(b.b)("inlineCode",{parentName:"li"},"localName")," \u5b57\u6bb5\u3002")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(l.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothDevices.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<SuccessCallbackResult>\n")),Object(b.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(b.b)("h3",{id:"option"},"Option"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"complete"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: BluetoothError) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(b.b)("tr",null,Object(b.b)("td",null,"fail"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: BluetoothError) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",null,Object(b.b)("td",null,"success"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: SuccessCallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(b.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"devices"),Object(b.b)("td",null,Object(b.b)("code",null,"SuccessCallbackResultBlueToothDevice[]")),Object(b.b)("td",null,"uuid \u5bf9\u5e94\u7684\u7684\u5df2\u8fde\u63a5\u8bbe\u5907\u5217\u8868")),Object(b.b)("tr",null,Object(b.b)("td",null,"errMsg"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",null,"\u6210\u529f\uff1aok\uff0c\u9519\u8bef\uff1a\u8be6\u7ec6\u4fe1\u606f")))),Object(b.b)("h3",{id:"successcallbackresultbluetoothdevice"},"SuccessCallbackResultBlueToothDevice"),Object(b.b)("p",null,"uuid \u5bf9\u5e94\u7684\u7684\u5df2\u8fde\u63a5\u8bbe\u5907\u5217\u8868"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"RSSI"),Object(b.b)("td",null,Object(b.b)("code",null,"number")),Object(b.b)("td",null,"\u5f53\u524d\u84dd\u7259\u8bbe\u5907\u7684\u4fe1\u53f7\u5f3a\u5ea6")),Object(b.b)("tr",null,Object(b.b)("td",null,"advertisData"),Object(b.b)("td",null,Object(b.b)("code",null,"ArrayBuffer")),Object(b.b)("td",null,"\u5f53\u524d\u84dd\u7259\u8bbe\u5907\u7684\u5e7f\u64ad\u6570\u636e\u6bb5\u4e2d\u7684 ManufacturerData \u6570\u636e\u6bb5\u3002")),Object(b.b)("tr",null,Object(b.b)("td",null,"advertisServiceUUIDs"),Object(b.b)("td",null,Object(b.b)("code",null,"string[]")),Object(b.b)("td",null,"\u5f53\u524d\u84dd\u7259\u8bbe\u5907\u7684\u5e7f\u64ad\u6570\u636e\u6bb5\u4e2d\u7684 ServiceUUIDs \u6570\u636e\u6bb5")),Object(b.b)("tr",null,Object(b.b)("td",null,"deviceId"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",null,"\u7528\u4e8e\u533a\u5206\u8bbe\u5907\u7684 id")),Object(b.b)("tr",null,Object(b.b)("td",null,"localName"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",null,"\u5f53\u524d\u84dd\u7259\u8bbe\u5907\u7684\u5e7f\u64ad\u6570\u636e\u6bb5\u4e2d\u7684 LocalName \u6570\u636e\u6bb5")),Object(b.b)("tr",null,Object(b.b)("td",null,"name"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",null,"\u84dd\u7259\u8bbe\u5907\u540d\u79f0\uff0c\u67d0\u4e9b\u8bbe\u5907\u53ef\u80fd\u6ca1\u6709")),Object(b.b)("tr",null,Object(b.b)("td",null,"serviceData"),Object(b.b)("td",null,Object(b.b)("code",null,"Record<string, any>")),Object(b.b)("td",null,"\u5f53\u524d\u84dd\u7259\u8bbe\u5907\u7684\u5e7f\u64ad\u6570\u636e\u6bb5\u4e2d\u7684 ServiceData \u6570\u636e\u6bb5")))),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"// ArrayBuffer\u8f6c16\u8fdb\u5ea6\u5b57\u7b26\u4e32\u793a\u4f8b\nfunction ab2hex(buffer) {\n  var hexArr = Array.prototype.map.call(\n    new Uint8Array(buffer),\n    function(bit) {\n      return ('00' + bit.toString(16)).slice(-2)\n    }\n  )\n  return hexArr.join('');\n}\nTaro.getBluetoothDevices({\n  success: function (res) {\n    console.log(res)\n    if (res.devices[0]) {\n      console.log(ab2hex(res.devices[0].advertisData))\n    }\n  }\n})\n")),Object(b.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"Taro.getBluetoothDevices"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}))))))}i.isMDXComponent=!0},2196:function(e,t,n){"use strict";function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return l}))},2197:function(e,t,n){"use strict";function l(e,t){if(null==e)return{};var n,l,c={},b=Object.keys(e);for(l=0;l<b.length;l++)n=b[l],t.indexOf(n)>=0||(c[n]=e[n]);return c}n.d(t,"a",(function(){return l}))},2198:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var l=n(0),c=n.n(l);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,c=function(e,t){if(null==e)return{};var n,l,c={},b=Object.keys(e);for(l=0;l<b.length;l++)n=b[l],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(l=0;l<b.length;l++)n=b[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=c.a.createContext({}),i=function(e){var t=c.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=i(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,b=e.originalType,r=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=i(n),d=l,j=s["".concat(r,".").concat(d)]||s[d]||O[d]||b;return n?c.a.createElement(j,a(a({ref:t},u),{},{components:n})):c.a.createElement(j,a({ref:t},u))}));function j(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var b=n.length,r=new Array(b);r[0]=d;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:l,r[1]=a;for(var u=2;u<b;u++)r[u]=n[u];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);