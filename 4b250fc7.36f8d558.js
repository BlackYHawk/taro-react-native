(window.webpackJsonp=window.webpackJsonp||[]).push([[629],{2196:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},2197:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},b=Object.keys(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,"a",(function(){return n}))},2198:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},b=Object.keys(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},o=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},j=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),o=u(r),j=n,O=o["".concat(c,".").concat(j)]||o[j]||s[j]||b;return r?a.a.createElement(O,l(l({ref:t},p),{},{components:r})):a.a.createElement(O,l({ref:t},p))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=r.length,c=new Array(b);c[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<b;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}j.displayName="MDXCreateElement"},694:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(2196),a=r(2197),b=(r(0),r(2198)),c={slug:"2019-02-25-taro-ui-2.0",title:"Taro UI 2.0 \u53d1\u5e03\uff1a\u65b0\u589e\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd\uff0c\u9002\u914d\u66f4\u591a\u5c0f\u7a0b\u5e8f",author:"jimczj",author_url:"https://github.com/jimczj",author_image_url:"https://avatars3.githubusercontent.com/u/13499146?s=460&u=a5a6d4c6bcc746b3b6353c245346d7a832f4649b&v=4"},l={permalink:"/taro/blog/2019-02-25-taro-ui-2.0",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2019-02-25-taro-ui-2.0.md",source:"@site/blog/2019-02-25-taro-ui-2.0.md",description:"\u8f6c\u773c\u95f4\uff0cTaro UI \u53d1\u5e03\u5df2\u6709\u534a\u5e74\uff0c\u611f\u8c22\u5927\u5bb6\u7684\u652f\u6301\uff0c\u8ba9\u6211\u4eec\u6536\u83b7\u4e86 GitHub 1400+ star\u3002\u5728\u6b64\u671f\u95f4\uff0c\u6211\u4eec\u4e0d\u65ad\u5b8c\u5584\u7ec4\u4ef6\u5e93\u7684\u529f\u80fd\u548c\u7279\u6027\uff0c\u65b0\u589e\u4e86\u8bb8\u591a\u7ec4\u4ef6\u548c\u5c0f\u5de5\u5177\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e:",date:"2019-02-25T00:00:00.000Z",tags:[],title:"Taro UI 2.0 \u53d1\u5e03\uff1a\u65b0\u589e\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd\uff0c\u9002\u914d\u66f4\u591a\u5c0f\u7a0b\u5e8f",readingTime:1.02,truncated:!0,prevItem:{title:"\u51b3\u6218\u6027\u80fd\u4e4b\u5dc5 - Taro H5 \u8f6c\u6362\u4e0e\u4f18\u5316\u5347\u7ea7",permalink:"/taro/blog/2019-02-28-taro-h5-optimize"},nextItem:{title:"Taro 1.2\uff1a\u5c06\u5df2\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c\u6362\u4e3a\u591a\u7aef\u5e94\u7528",permalink:"/taro/blog/2018-12-18-taro-1-2"}},i=[{value:"\u65b0\u589e\u7ec4\u4ef6",id:"\u65b0\u589e\u7ec4\u4ef6",children:[]},{value:"\u9002\u914d\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u3001\u767e\u5ea6\u5c0f\u7a0b\u5e8f",id:"\u9002\u914d\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u3001\u767e\u5ea6\u5c0f\u7a0b\u5e8f",children:[]},{value:"\u65b0\u589e\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd",id:"\u65b0\u589e\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd",children:[]},{value:"\u65b0\u589e\u4e3b\u9898\u751f\u6210\u5668",id:"\u65b0\u589e\u4e3b\u9898\u751f\u6210\u5668",children:[]},{value:"\u65b0\u589e Issue Helper",id:"\u65b0\u589e-issue-helper",children:[]},{value:"\u672a\u6765\u8ba1\u5212",id:"\u672a\u6765\u8ba1\u5212",children:[]},{value:"\u81f4\u8c22",id:"\u81f4\u8c22",children:[]}],p={rightToc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u8f6c\u773c\u95f4\uff0cTaro UI \u53d1\u5e03\u5df2\u6709\u534a\u5e74\uff0c\u611f\u8c22\u5927\u5bb6\u7684\u652f\u6301\uff0c\u8ba9\u6211\u4eec\u6536\u83b7\u4e86 ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/NervJS/taro-ui"}),"GitHub")," 1400+ star\u3002\u5728\u6b64\u671f\u95f4\uff0c\u6211\u4eec\u4e0d\u65ad\u5b8c\u5584\u7ec4\u4ef6\u5e93\u7684\u529f\u80fd\u548c\u7279\u6027\uff0c\u65b0\u589e\u4e86\u8bb8\u591a\u7ec4\u4ef6\u548c\u5c0f\u5de5\u5177\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u65b0\u589e\u65e5\u5386\u3001\u7d22\u5f15\u9009\u62e9\u3001\u533a\u57df\u9009\u62e9\u3001\u56fe\u7247\u9009\u62e9\u7b49\u5341\u4e00\u4e2a\u7ec4\u4ef6"),Object(b.b)("li",{parentName:"ul"},"\u9002\u914d\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u3001\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(b.b)("li",{parentName:"ul"},"\u65b0\u589e\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd"),Object(b.b)("li",{parentName:"ul"},"\u65b0\u589e\u4e3b\u9898\u751f\u6210\u5668\uff0c\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u4f7f\u7528\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd"),Object(b.b)("li",{parentName:"ul"},"\u65b0\u589e Issue Helper\uff0c\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u89c4\u8303\u5730\u586b\u5199 Issue")),Object(b.b)("h2",{id:"\u65b0\u589e\u7ec4\u4ef6"},"\u65b0\u589e\u7ec4\u4ef6"),Object(b.b)("p",null,"\u5728 1.0 \u7248\u672c\u53d1\u5e03\u4e4b\u540e\uff0c\u6211\u4eec\u53c8\u9646\u7eed\u65b0\u589e\u4e86\u5982\u4e0b\u5341\u4e00\u4e2a\u7ec4\u4ef6\uff1a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u89c6\u56fe\u7ec4\u4ef6\uff1a\u9875\u9762\u63d0\u793a\u3001 \u5206\u9694\u7b26\u3001\u5012\u8ba1\u65f6\u3001 \u5e55\u5e18 \u3001\u6b65\u9aa4\u6761"),Object(b.b)("li",{parentName:"ul"},"\u64cd\u4f5c\u53cd\u9988\uff1a\u5168\u5c40\u4fe1\u606f\u7ec4\u4ef6"),Object(b.b)("li",{parentName:"ul"},"\u8868\u5355\uff1a\u56fe\u7247\u9009\u62e9\u5668\u3001\u533a\u57df\u9009\u62e9\u5668\u3001\u7d22\u5f15\u9009\u62e9\u5668\u3001\u65e5\u5386\u7ec4\u4ef6\u3001\u641c\u7d22\u680f")),Object(b.b)("p",null,"\u5176\u4e2d\uff0c\u5728\u793e\u533a\u91cc\u547c\u58f0\u6700\u9ad8\u7684\u7ec4\u4ef6\uff0c\u975e\u65e5\u5386\u7ec4\u4ef6\u83ab\u5c5e\u3002\u7531\u4e8e\u65e5\u5386\u7ec4\u4ef6\u590d\u6742\u5ea6\u504f\u9ad8\uff0c\u8981\u9002\u914d\u591a\u7aef\u73af\u5883\u96be\u5ea6\u504f\u5927\uff0c\u7eb5\u89c2\u5e02\u9762\u4e0a\u7684\u5c0f\u7a0b\u5e8f UI \u7ec4\u4ef6\u5e93\uff0c\u5305\u542b\u65e5\u5386\u7ec4\u4ef6\u7684\u5be5\u5be5\u65e0\u51e0\u3002\u5c3d\u7ba1\u5982\u6b64\uff0c\u6211\u4eec\u56e2\u961f\u7684\u5927\u9c7c\u5144\u4ecd\u72ec\u81ea\u6311\u8d77\u91cd\u62c5\uff0c\u51e0\u4e4e\u5b8c\u7f8e\u5730\u5b9e\u73b0\u4e86\u8be5\u7ec4\u4ef6\uff0c\u6b64\u5904\u638c\u58f0\u732e\u7ed9\u5927\u9c7c\u5144\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u65e5\u5386\u7ec4\u4ef6\u529f\u80fd\u9884\u89c8\uff1a")),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"https://misc.aotu.io/jimczj/calender.gif",alt:"calender"}))),Object(b.b)("h2",{id:"\u9002\u914d\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u3001\u767e\u5ea6\u5c0f\u7a0b\u5e8f"},"\u9002\u914d\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u3001\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(b.b)("p",null,"\u5728 1.0 \u7248\u672c\u9002\u914d\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u65f6\uff0c\u6211\u4eec\u9047\u5230\u4e86\u5f88\u591a\u56f0\u96be\u3002\u6bd4\u5982\uff1a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4f7f\u7528 Shadow DOM \u8fdb\u884c\u6e32\u67d3\uff0c\u5f15\u8d77\u4e86\u4ee5\u4e0b\u51e0\u79cd\u95ee\u9898\uff1a"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u7ec4\u4ef6\u4e4b\u95f4\u65e0\u6cd5\u4f7f\u7528\u76f8\u90bb\u9009\u62e9\u5668\uff0c\u5982\u7ec4\u4ef6\u95f4\u52a0 border \u7684\u9700\u6c42\uff0c\u6700\u7ec8\u53ea\u80fd\u901a\u8fc7\u65b0\u589e props \u7ed9\u5f00\u53d1\u8005\u81ea\u884c\u63a7\u5236"),Object(b.b)("li",{parentName:"ul"},"\u65e0\u6cd5\u81ea\u5b9a\u4e49 flex \u5e03\u5c40\u7ec4\u4ef6\uff0c\u6700\u7ec8\u53ea\u80fd\u63d0\u4f9b\u6837\u5f0f\u7ed9\u5f00\u53d1\u8005\u81ea\u884c\u4f7f\u7528"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Component \u7ec4\u4ef6\u5bf9\u5e94 wxss \u6587\u4ef6\u7684\u6837\u5f0f\uff0c\u53ea\u5bf9\u7ec4\u4ef6 wxml \u5185\u7684\u8282\u70b9\u751f\u6548\u3002\u7ecf\u8fc7\u4e0d\u65ad\u63a2\u7d22\uff0c\u624d\u53d1\u73b0 addGlobalClass \u8fd9\u4e00\u5c5e\u6027\uff0c\u9700\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5185\u6fc0\u6d3b addGlobalClass \u9009\u9879\uff0c\u624d\u80fd\u4f7f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u88ab app.wxss \u6216\u9875\u9762\u7684 wxss \u4e2d\u7684\u6240\u6709\u7684\u6837\u5f0f\u5b9a\u4e49\u5f71\u54cd\u3002\u3002")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u539f\u751f\u7ec4\u4ef6\u7684\u4f7f\u7528\u9650\u5236\u3002\u7531\u4e8e\u539f\u751f\u7ec4\u4ef6\u8131\u79bb\u5728 WebView \u6e32\u67d3\u6d41\u7a0b\u5916\uff0c\u539f\u751f\u7ec4\u4ef6\u7684\u5c42\u7ea7\u662f\u6700\u9ad8\u7684\uff0c\u6240\u4ee5\u9875\u9762\u4e2d\u7684\u5176\u4ed6\u7ec4\u4ef6\u65e0\u8bba\u8bbe\u7f6e z-index \u4e3a\u591a\u5c11\uff0c\u90fd\u65e0\u6cd5\u76d6\u5728\u539f\u751f\u7ec4\u4ef6\u4e0a\u3002\u7531\u6b64\u5bfc\u81f4\u6a21\u6001\u6846\u7b49\u7ec4\u4ef6\u65e0\u6cd5\u906e\u6321 input\u3001textarea\u7b49\u539f\u751f\u7ec4\u4ef6\uff0c\u9020\u6210\u7a7f\u900f\u6548\u679c\u3002 \u53ef\u559c\u7684\u662f\uff0c\u5fae\u4fe1\u5b98\u65b9\u56e2\u961f\u5df2\u7ecf\u5728\u6539\u5584\u8be5\u95ee\u9898\uff0c\u5bf9\u5c0f\u7a0b\u5e8f\u539f\u751f\u7ec4\u4ef6\u5f15\u5165\u4e86\u540c\u5c42\u6e32\u67d3\u6a21\u5f0f\u3002\u901a\u8fc7\u540c\u5c42\u6e32\u67d3\uff0c\u5c0f\u7a0b\u5e8f\u539f\u751f\u7ec4\u4ef6\u53ef\u4e0e\u5176\u4ed6\u5185\u7f6e\u7ec4\u4ef6\u5904\u4e8e\u76f8\u540c\u5c42\u7ea7\uff0c\u4e0d\u518d\u6709\u7279\u6b8a\u7684\u4f7f\u7528\u9650\u5236\u3002",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/community/develop/doc/000aa28d030f60a3c4183eecb5d801?from=timeline"}),"\u8be6\u89c1"),"\u3002")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u5c0f\u7a0b\u5e8f\u4e0d\u652f\u6301 requestAnimationFrame\uff0c\u65e0\u6cd5\u5f88\u597d\u5730\u5b9e\u73b0 js \u52a8\u753b\u3002"))),Object(b.b)("p",null,"\u514b\u670d\u5b8c\u4e0a\u8ff0\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684\u56f0\u96be\u540e\uff0c\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u548c\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u7684\u9002\u914d\u5de5\u4f5c\u5927\u591a\u662f\u89e3\u51b3\u6837\u5f0f\u548c\u67d0\u4e9bAPI\u7684\u5dee\u5f02\u3002\u5f97\u76ca\u4e8e Taro \u826f\u597d\u7684\u652f\u6301\uff0cTaro UI \u7684\u9002\u914d\u5de5\u4f5c\u6682\u65f6\u544a\u4e00\u6bb5\u843d\u3002"),Object(b.b)("h2",{id:"\u65b0\u589e\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd"},"\u65b0\u589e\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd"),Object(b.b)("p",null,"Taro UI 1.0 \u53d1\u5e03\u65f6\u53ea\u6709\u4e00\u5957\u9ed8\u8ba4\u7684\u4e3b\u9898\u914d\u8272\uff0c\u4e3a\u6ee1\u8db3\u4e1a\u52a1\u548c\u54c1\u724c\u4e0a\u591a\u6837\u5316\u7684\u89c6\u89c9\u9700\u6c42\uff0cUI \u5e93\u652f\u6301\u4e00\u5b9a\u7a0b\u5ea6\u7684\u6837\u5f0f\u5b9a\u5236\u3002"),Object(b.b)("p",null,"Taro UI \u7684\u7ec4\u4ef6\u6837\u5f0f\u662f\u4f7f\u7528 SCSS \u7f16\u5199\u7684\uff0c\u5982\u679c\u4f60\u7684\u9879\u76ee\u4e2d\u4e5f\u4f7f\u7528\u4e86 SCSS\uff0c\u90a3\u4e48\u53ef\u4ee5\u76f4\u63a5\u5728\u9879\u76ee\u4e2d\u6539\u53d8 Taro UI \u7684\u6837\u5f0f\u53d8\u91cf\u3002"),Object(b.b)("p",null,"\u65b0\u5efa\u4e00\u4e2a\u4e3b\u9898\u6837\u5f0f\u6587\u4ef6\uff08\u4f8b\u5982 custom-variables.scss\uff09\u5e76\u8986\u76d6",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/NervJS/taro-ui/blob/dev/src/style/variables/default.scss"}),"\u9ed8\u8ba4\u4e3b\u9898\u53d8\u91cf"),"\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),'/* \u6539\u53d8\u4e3b\u9898\u53d8\u91cf\uff0c\u5177\u4f53\u53d8\u91cf\u540d\u53ef\u67e5\u770b taro-ui/dist/style/variables/default.scss \u6587\u4ef6 */\n$color-brand: #6190E8;\n/* \u5f15\u5165 Taro UI \u9ed8\u8ba4\u6837\u5f0f */\n@import "~taro-ui/dist/style/index.scss";\n')),Object(b.b)("p",null,"\u4e4b\u540e\u5728\u9879\u76ee\u7684\u5165\u53e3\u6587\u4ef6\u4e2d\u5f15\u5165\u4ee5\u4e0a\u7684\u6837\u5f0f\u6587\u4ef6\u5373\u53ef\uff08\u65e0\u9700\u91cd\u590d\u5f15\u5165\u7ec4\u4ef6\u7684\u9ed8\u8ba4\u6837\u5f0f\uff09\u3002"),Object(b.b)("p",null,"\u76ee\u524d\uff0c\u6211\u4eec\u989d\u5916\u5b9a\u5236\u4e86\u4eac\u4e1c\u4e3b\u9898\u548c 7Fresh \u4e3b\u9898\u8272\uff0c\u53ef\u901a\u8fc7\u626b\u63cf\u4ee5\u4e0b\u4e8c\u7ef4\u7801\u67e5\u770b\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u4eac\u4e1c\u4e3b\u9898\uff1a")),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"https://misc.aotu.io/jimczj/taro-ui-red.png",alt:"image"}))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"7Fresh \u4e3b\u9898\uff1a")),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"https://misc.aotu.io/jimczj/taro-ui-purple.png",alt:"image"}))),Object(b.b)("h2",{id:"\u65b0\u589e\u4e3b\u9898\u751f\u6210\u5668"},"\u65b0\u589e\u4e3b\u9898\u751f\u6210\u5668"),Object(b.b)("p",null,"\u4e3a\u4e86\u8ba9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u4f7f\u7528\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd\uff0c\u6211\u4eec\u8fd8\u65b0\u589e\u4e86\u4e3b\u9898\u751f\u6210\u5668\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528\u8be5\u5de5\u5177\u65b9\u4fbf\u5730\u5b9a\u5236 UI \u4e3b\u9898\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u4e3b\u9898\u751f\u6210\u5668\u5730\u5740\uff1a")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://nervjs.github.io/taro-ui-theme-preview/"}),"https://nervjs.github.io/taro-ui-theme-preview/")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u6548\u679c\u9884\u89c8\uff1a")),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"https://misc.aotu.io/jimczj/theme-preview.gif",alt:"theme-preview"}))),Object(b.b)("h2",{id:"\u65b0\u589e-issue-helper"},"\u65b0\u589e Issue Helper"),Object(b.b)("p",null,"\u867d\u7136\u6211\u4eec\u914d\u7f6e\u4e86 Issue Template\uff0c\u4f46\u4ecd\u6709\u90e8\u5206\u5f00\u53d1\u8005\u6ca1\u6709\u6839\u636e\u89c4\u8303\u586b\u5199 Issue\u3002\u6211\u4eec\u6392\u67e5\u95ee\u9898\u65f6\u7ecf\u5e38\u9700\u8981\u518d\u6b21\u8be2\u95ee\u7248\u672c\u53f7\u4fe1\u606f\u3001\u590d\u73b0\u4ee3\u7801\u7b49\u7b49\uff0c\u8fd9\u4e0d\u4ec5\u6d88\u8017\u6211\u4eec\u7ef4\u62a4\u9879\u76ee\u7684\u7cbe\u529b\uff0c\u8fd8\u964d\u4f4e\u4e86 Issue \u5904\u7406\u6548\u7387\u3002\u56e0\u6b64\u6211\u4eec\u53c2\u8003\u4e86 Ant \u548c iView \u56e2\u961f\u7684\u505a\u6cd5\uff0c\u5236\u4f5c\u4e86 Issue Helper \u9875\u9762\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u89c4\u8303\u5730\u586b\u5199 Issue\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Taro UI Issue Helper \u5730\u5740\uff1a")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://nervjs.github.io/taro-ui-issue-helper/"}),"https://nervjs.github.io/taro-ui-issue-helper/")),Object(b.b)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u53d1\u73b0\u91cd\u590d\u5236\u4f5c Issue Helper \u9875\u9762\u662f\u4e00\u4ef6\u5f88\u6d6a\u8d39\u52b3\u52a8\u529b\u7684\u4e8b\u60c5\uff0c\u4e8e\u662f\u5c06 Issue Helper \u5c01\u88c5\u6210\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u7b80\u5355\u914d\u7f6e ",Object(b.b)("inlineCode",{parentName:"p"},"config.js"),"\uff0c\u6267\u884c\u547d\u4ee4 ",Object(b.b)("inlineCode",{parentName:"p"},"issue-helper build")," \u5c31\u53ef\u4ee5\u751f\u6210\u6240\u9700\u8981\u7684\u9875\u9762\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Issue Helper \u5de5\u5177\u4ed3\u5e93\u5730\u5740\uff1a")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jimczj/issue-helper"}),"https://github.com/jimczj/issue-helper")),Object(b.b)("h2",{id:"\u672a\u6765\u8ba1\u5212"},"\u672a\u6765\u8ba1\u5212"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u9002\u914d\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(b.b)("li",{parentName:"ul"},"\u56fd\u9645\u5316 i18n")),Object(b.b)("h2",{id:"\u81f4\u8c22"},"\u81f4\u8c22"),Object(b.b)("p",null,"\u611f\u8c22\u5927\u5bb6\u5bf9 Taro UI \u7684\u4f7f\u7528\u4e0e\u53cd\u9988\uff0c\u6211\u4eec\u4f1a\u81f4\u529b\u4e8e\u5c06 Taro UI \u6253\u9020\u6210\u9ad8\u8d28\u91cf\u7ec4\u4ef6\u5e93\uff0c\u4e0d\u65ad\u4e30\u5bcc\u7ec4\u4ef6\u529f\u80fd\u4e0e\u7279\u6027\uff0c\u7d27\u8ddf Taro \u7684\u6b65\u4f10\u9002\u914d\u66f4\u591a\u5e73\u53f0\u3002"),Object(b.b)("p",null,"\u6700\u540e\uff0c\u6b22\u8fce\u5173\u6ce8\u5e76\u4f7f\u7528\u6211\u4eec\u7684\u7ec4\u4ef6\u5e93\uff1a"),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/NervJS/taro-ui"}),"https://github.com/NervJS/taro-ui")))}u.isMDXComponent=!0}}]);