"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[34097],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,k=d["".concat(o,".").concat(m)]||d[m]||s[m]||l;return t?r.createElement(k,a(a({ref:n},c),{},{components:t})):r.createElement(k,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var u=2;u<l;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},65231:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=t(87462),i=(t(67294),t(3905));const l={title:"Sentinel\u63d2\u4ef6",keywords:["Sentinel"],description:"sentinel\u63d2\u4ef6"},a=void 0,p={unversionedId:"plugin-center/fault-tolerance/sentinel-plugin",id:"version-2.4.2/plugin-center/fault-tolerance/sentinel-plugin",isDocsHomePage:!1,title:"Sentinel\u63d2\u4ef6",description:"sentinel\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.2/plugin-center/fault-tolerance/sentinel-plugin.md",sourceDirName:"plugin-center/fault-tolerance",slug:"/plugin-center/fault-tolerance/sentinel-plugin",permalink:"/zh/docs/2.4.2/plugin-center/fault-tolerance/sentinel-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.2/plugin-center/fault-tolerance/sentinel-plugin.md",version:"2.4.2",frontMatter:{title:"Sentinel\u63d2\u4ef6",keywords:["Sentinel"],description:"sentinel\u63d2\u4ef6"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"Resilience4j\u63d2\u4ef6",permalink:"/zh/docs/2.4.2/plugin-center/fault-tolerance/resilience4j-plugin"},next:{title:"CryptorRequest \u63d2\u4ef6",permalink:"/zh/docs/2.4.2/plugin-center/authority-and-certification/cryptor-request-plugin"}},o=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u63d2\u4ef6\u8bbe\u7f6e",id:"\u63d2\u4ef6\u8bbe\u7f6e",children:[]},{value:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 sentinel \u63d2\u4ef6",id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-sentinel-\u63d2\u4ef6",children:[]},{value:"sentinel \u63d2\u4ef6\u914d\u7f6e",id:"sentinel-\u63d2\u4ef6\u914d\u7f6e",children:[]}],u={toc:o};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sentinel"),"\u63d2\u4ef6\u662f\u7f51\u5173\u7528\u6765\u5bf9\u6d41\u91cf\u8fdb\u884c\u9650\u6d41\u4e0e\u7194\u65ad\u7684\u53ef\u9009\u9009\u62e9\u4e4b\u4e00\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sentinel"),"\u63d2\u4ef6\u4e3a\u7f51\u5173\u7194\u65ad\u9650\u6d41\u63d0\u4f9b\u80fd\u529b\u3002")),(0,i.kt)("h2",{id:"\u63d2\u4ef6\u8bbe\u7f6e"},"\u63d2\u4ef6\u8bbe\u7f6e"),(0,i.kt)("p",null,"\u8bf7\u53c2\u8003\u8fd0\u7ef4\u90e8\u7f72\u7684\u5185\u5bb9\uff0c\u9009\u62e9\u4e00\u79cd\u65b9\u5f0f\u542f\u52a8",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u3002\u6bd4\u5982\uff0c\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"../../deployment/deployment-local"},"\u672c\u5730\u90e8\u7f72")," \u542f\u52a8",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728 \u57fa\u7840\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"li"},"--\x3e"),"  \u63d2\u4ef6\u7ba1\u7406 ",(0,i.kt)("inlineCode",{parentName:"li"},"--\x3e")," ",(0,i.kt)("inlineCode",{parentName:"li"},"sentinel"),"\uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002 \u5982\u679c\u7528\u6237\u4e0d\u4f7f\u7528\uff0c\u53ef\u4ee5\u5c06\u5176\u5173\u95ed\u3002")),(0,i.kt)("img",{src:"/img/shenyu/plugin/sentinel/sentinel_open_zh.png",width:"80%",height:"80%"}),(0,i.kt)("h2",{id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-sentinel-\u63d2\u4ef6"},"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 sentinel \u63d2\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"pom.xml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"li"},"sentinel")," \u4f9d\u8d56\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu sentinel plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-sentinel</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        \x3c!-- apache shenyu sentinel plugin end--\x3e\n")),(0,i.kt)("h2",{id:"sentinel-\u63d2\u4ef6\u914d\u7f6e"},"sentinel \u63d2\u4ef6\u914d\u7f6e"),(0,i.kt)("p",null,"\u5173\u4e8e\u9009\u62e9\u5668\u548c\u89c4\u5219\u914d\u7f6e\u7684\u66f4\u591a\u8bf4\u660e\uff0c\u8bf7\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406"),"\uff0c \u8fd9\u91cc\u53ea\u5bf9\u90e8\u5206\u5b57\u6bb5\u8fdb\u884c\u4e86\u4ecb\u7ecd\u3002"),(0,i.kt)("h4",{id:"\u9009\u62e9\u5668\u914d\u7f6e"},"\u9009\u62e9\u5668\u914d\u7f6e"),(0,i.kt)("p",null,"\u7528\u4e8e\u5bf9\u6d41\u91cf\u7b2c\u4e00\u6b21\u7b5b\u9009\uff0c\u4e0d\u9700\u8981\u7279\u6b8a\u5904\u7406\u5b57\u6bb5\u3002"),(0,i.kt)("img",{src:"/img/shenyu/plugin/sentinel/selector_zh.png",width:"80%",height:"80%"}),(0,i.kt)("h4",{id:"\u89c4\u5219\u914d\u7f6e"},"\u89c4\u5219\u914d\u7f6e"),(0,i.kt)("p",null,"\u7528\u4e8e\u5bf9\u6d41\u91cf\u6700\u7ec8\u7b5b\u9009\uff0c\u6709\u89c4\u5219\u5904\u7406\u903b\u8f91\u3002"),(0,i.kt)("img",{src:"/img/shenyu/plugin/sentinel/rule_zh.png",width:"80%",height:"80%"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"sentinel"),"\u5904\u7406\u8be6\u89e3\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"degradeRuleCount"),":\u4e34\u754c\u70b9 ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"degradeRuleEnable"),"(\u662f\u5426\u5f00\u542f\u6d41\u63a7 (1\u62160) ) \uff1a\u662f\u5426\u5f00\u542f",(0,i.kt)("inlineCode",{parentName:"p"},"sentinel"),"\u7684\u6d41\u63a7\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"degradeRuleGrade"),"(\u65ad\u8def\u5668\u7b56\u7565): \u652f\u6301\u79d2\u7ea7RT/\u79d2\u7ea7Error Ratio/\u5206\u949f\u7ea7Error Count\u7b56\u7565\u3002  ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"degradeRuleMinRequestAmount"),"\uff1a\u65ad\u8def\u5668\u6700\u5c0f\u8bf7\u6c42\u91cf\u3002 ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"degradeRuleSlowRatioThreshold"),"\uff1a\u9000\u5316\u7684\u6162\u6bd4\u7387\u9608\u503c\u3002 ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"getDegradeRuleStatIntervals"),": \u964d\u7ea7\u7684\u72b6\u6001\u95f4\u9694\u3002 ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"degradeRuleTimeWindow"),"\uff1a\u9000\u5316\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u79d2\uff09\u3002 ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"flowRuleControlBehavior"),"\uff1a\u6548\u679c\uff08\u76f4\u63a5\u62d2\u7edd/\u6392\u961f/\u6162\u542f\u52a8\uff09\uff0c\u4e0d\u652f\u6301\u8c03\u7528\u5173\u7cfb\u6d41\u63a7\u3002 ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"flowRuleCount"),"\uff1a\u54e8\u5175\u6d41\u63a7\u5236\u8ba1\u6570\u3002 ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"flowRuleEnable (1 or 0)"),"\uff1a\u662f\u5426\u5f00\u542f\u54e8\u5175\u6d41\u63a7\u529f\u80fd\u3002 ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"flowRuleGrade"),": \u9650\u6d41\u9608\u503c\u7684\u7c7b\u578b\uff08QPS \u6216 Thread Count\uff09\u3002 ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"fallbackUri"),"\uff1a\u65ad\u8def\u540e\u964d\u7ea7\u7684uri\u3002"))))))}c.isMDXComponent=!0}}]);