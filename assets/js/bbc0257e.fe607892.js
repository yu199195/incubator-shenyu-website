"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[54712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=o,y=d["".concat(c,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92963:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"Register Center Instance Config",keywords:["register center"],description:"Register Instance"},a=void 0,s={unversionedId:"user-guide/register-center-instance",id:"user-guide/register-center-instance",isDocsHomePage:!1,title:"Register Center Instance Config",description:"Register Instance",source:"@site/docs/user-guide/register-center-instance.md",sourceDirName:"user-guide",slug:"/user-guide/register-center-instance",permalink:"/docs/next/user-guide/register-center-instance",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/user-guide/register-center-instance.md",version:"current",frontMatter:{title:"Register Center Instance Config",keywords:["register center"],description:"Register Instance"},sidebar:"tutorialSidebar",previous:{title:"Application Client Access Config",permalink:"/docs/next/user-guide/register-center-access"},next:{title:"Sofa Proxy",permalink:"/docs/next/user-guide/sofa-rpc-proxy"}},c=[{value:"Add Maven dependency",id:"add-maven-dependency",children:[]},{value:"Use zookeeper",id:"use-zookeeper",children:[]},{value:"Use etcd",id:"use-etcd",children:[]},{value:"Use consul",id:"use-consul",children:[]}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document will introduce how to register the gateway instance to the registry. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway currently supports registration to ",(0,o.kt)("inlineCode",{parentName:"p"},"zookeeper")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"consul"),"."),(0,o.kt)("h3",{id:"add-maven-dependency"},"Add Maven dependency"),(0,o.kt)("p",null,"First, introduce the following dependencies in the gateway's ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--shenyu instance start--\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-instance</artifactId>\n    <version>${project.version}</version>\n</dependency>\n\x3c!--shenyu instance end--\x3e\n")),(0,o.kt)("h3",{id:"use-zookeeper"},"Use zookeeper"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please pay attention! From ShenYu 2.5.0, ShenYu will no longer support Zookeeper 3.4.x or below version. If you're already using Zookeeper, You need to use Zookeeper with a higher version and initialize the data.")),(0,o.kt)("p",null,"Add the following configuration to the gateway's ",(0,o.kt)("inlineCode",{parentName:"p"},"yml")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"instance:\n    enabled: true\n    registerType: zookeeper\n    serverLists: localhost:2181 #config with your zk address, used by the cluster environment, separated with (,).\n    props:\n      sessionTimeout: 3000 #Optional, default 3000\n      connectionTimeout: 3000 #Optional, default 3000\n")),(0,o.kt)("h3",{id:"use-etcd"},"Use etcd"),(0,o.kt)("p",null,"Add the following configuration to the gateway's ",(0,o.kt)("inlineCode",{parentName:"p"},"yml")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"instance:\n    enabled: true\n    registerType: etcd\n    serverLists: http://localhost:2379 #config with your etcd address, used by the cluster environment, separated with (,).\n    props:\n      etcdTimeout: 3000 #Optional, default 3000\n      etcdTTL: 5 #Optional, default 5\n")),(0,o.kt)("h3",{id:"use-consul"},"Use consul"),(0,o.kt)("p",null,"Add the following configuration to the gateway's ",(0,o.kt)("inlineCode",{parentName:"p"},"yml")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"instance:\n    enabled: true\n    registerType: consul\n    serverLists: localhost:8848 #config with your consul address, used by the cluster environment, separated with (,).\n    props:\n      consulTimeout: 3000 #Optional, default 3000\n      consulTTL: 3000 #Optional, default 3000\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"After the configuration is complete, start the gateway and it will successfully register to the corresponding registration center.")))}u.isMDXComponent=!0}}]);