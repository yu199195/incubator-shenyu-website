"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[30059],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2833:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={sidebar_position:13,title:"Websocket Plugin",keywords:["soul"],description:"websocket plugin"},a=void 0,l={unversionedId:"plugins/websocket-plugin",id:"version-2.3.0-Legacy/plugins/websocket-plugin",isDocsHomePage:!1,title:"Websocket Plugin",description:"websocket plugin",source:"@site/versioned_docs/version-2.3.0-Legacy/plugins/websocket-plugin.md",sourceDirName:"plugins",slug:"/plugins/websocket-plugin",permalink:"/docs/2.3.0-Legacy/plugins/websocket-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0-Legacy/plugins/websocket-plugin.md",version:"2.3.0-Legacy",sidebarPosition:13,frontMatter:{sidebar_position:13,title:"Websocket Plugin",keywords:["soul"],description:"websocket plugin"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"Rewrite Plugin",permalink:"/docs/2.3.0-Legacy/plugins/rewrite-plugin"},next:{title:"ContextPath Plugin",permalink:"/docs/2.3.0-Legacy/plugins/context-path-plugin"}},s=[{value:"Explanation",id:"explanation",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Request Path",id:"request-path",children:[]}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"explanation"},"Explanation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Soul gateway also support proxy of websocket."),(0,i.kt)("li",{parentName:"ul"},"In websocket support, divide plugin is used in it.")),(0,i.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"soul-admin")," --\x3e plugin management --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"divide"),", set to enable."),(0,i.kt)("li",{parentName:"ul"},"Introducing dependencies in the pom.xml file of the gateway")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--if you use http proxy start this--\x3e\n<dependency>\n    <groupId>org.dromara</groupId>\n    <artifactId>soul-spring-boot-starter-plugin-divide</artifactId>\n    <version>${last.version}</version>\n</dependency>\n\n<dependency>\n    <groupId>org.dromara</groupId>\n    <artifactId>soul-spring-boot-starter-plugin-httpclient</artifactId>\n    <version>${last.version}</version>\n</dependency>\n")),(0,i.kt)("h2",{id:"request-path"},"Request Path"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When using soul proxy websocket, its request path is (example):",(0,i.kt)("inlineCode",{parentName:"li"},"ws://localhost:9195/?module=ws&method=/websocket&rpcType=websocket"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Detail:\n1.localhost:8080 Is the IP and port started by soul.\n2.module\uff08Required\uff09:Value is the key that matching selector.\n3.method \uff08Parameter\uff09: Your websocket path is also used as a matching rule.\n4.rpcType \uff1awebsocket must be filled in\uff0cand must be websocket\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add a new configuration to the selector in the ",(0,i.kt)("inlineCode",{parentName:"li"},"divide")," plugin, as follows")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://yu199195.github.io/images/soul/websocket-selector.png",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add a new rule in this selector:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://yu199195.github.io/images/soul/websocket-rule.png",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In summary, pay attention to your path at this time ",(0,i.kt)("inlineCode",{parentName:"p"},"ws://localhost:9195/?module=ws&method=/websocket&rpcType=websocket"),"."),(0,i.kt)("p",{parentName:"li"},"It will be matched by your new selector rule, and then the real websocket address of the proxy is:",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8080/websocket"),",so that soul can proxy websocket."),(0,i.kt)("p",{parentName:"li"},"You can communicate with websocket service, it is actually very simple.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"I would like to add just one last word that you can decide the name and value of module and method by yourself as long as the selector and the rule can match, this is just an example,"))))}p.isMDXComponent=!0}}]);