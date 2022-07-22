"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[14075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):h(h({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(n),d=a,y=l["".concat(c,".").concat(d)]||l[d]||s[d]||o;return n?r.createElement(y,h(h({ref:t},p),{},{components:n})):r.createElement(y,h({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,h=new Array(o);h[0]=l;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,h[1]=i;for(var u=2;u<o;u++)h[u]=n[u];return r.createElement.apply(null,h)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},87541:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(87462),a=n(67294),o=n(3905);const h=e=>{const[t,n]=(0,a.useState)([]);(0,a.useEffect)((()=>{var r;const a=null!=(r=e.repo)?r:"apache/incubator-shenyu";t&&0!==t.length||fetch("https://api.github.com/repos/"+a+"/contributors?page=1&per_page=10000").then((function(e){return e.json()})).then((e=>{n(e)}))}));let r="<table>";return t&&Array.isArray(t)&&t.forEach(((e,n)=>{n%5==0&&(n>0&&(r+="</tr>"),r+="<tr>"),r+='<td>\n                        <a href="'+e.html_url+'" target="_blank">\n                            <img src="'+e.avatar_url+'" height="20" /> \n                            <span style={{ whiteSpace: \'nowrap\' }}>@'+e.login+"</span>\n                        </a>\n                    </td>",n===t.length-1&&(r+="</tr>")})),r+="</table>",a.createElement("div",{dangerouslySetInnerHTML:{__html:r}})},i={title:"\u8d21\u732e\u8005",sidebar_position:9,description:"Apache ShenYu\u8d21\u732e\u8005\u5217\u8868",author:"xiaoyu",loadContributorList:!0,categories:"Apache ShenYu",tags:["ContributorList"]},c=void 0,u={unversionedId:"contributors",id:"contributors",isDocsHomePage:!1,title:"\u8d21\u732e\u8005",description:"Apache ShenYu\u8d21\u732e\u8005\u5217\u8868",source:"@site/i18n/zh/docusaurus-plugin-content-docs-community/current/9-contributors.mdx",sourceDirName:".",slug:"/contributors",permalink:"/zh/community/contributors",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs-community/current/9-contributors.mdx",version:"current",lastUpdatedBy:"zhengpeng",lastUpdatedAt:1658231607,formattedLastUpdatedAt:"2022/7/19",sidebarPosition:9,frontMatter:{title:"\u8d21\u732e\u8005",sidebar_position:9,description:"Apache ShenYu\u8d21\u732e\u8005\u5217\u8868",author:"xiaoyu",loadContributorList:!0,categories:"Apache ShenYu",tags:["ContributorList"]},sidebar:"community",previous:{title:"\u53d1\u5e03\u6307\u5357",permalink:"/zh/community/release-guide"},next:{title:"\u7528\u6237\u767b\u8bb0",permalink:"/zh/community/user-registration"}},p=[{value:"Apache ShenYu",id:"apache-shenyu",children:[]},{value:"Apache ShenYu Dashboard",id:"apache-shenyu-dashboard",children:[]},{value:"Apache ShenYu Website",id:"apache-shenyu-website",children:[]},{value:"Apache ShenYu Helm Chart",id:"apache-shenyu-helm-chart",children:[]},{value:"Apache ShenYu Nginx",id:"apache-shenyu-nginx",children:[]},{value:"Apache ShenYu Client Python",id:"apache-shenyu-client-python",children:[]},{value:"Apache ShenYu Client Dotnet",id:"apache-shenyu-client-dotnet",children:[]},{value:"Apache ShenYu Client Golang",id:"apache-shenyu-client-golang",children:[]}],s={toc:p};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u76ee\u524d\u5df2\u7ecf\u6709\u4e0a\u767e\u4f4d\u5c0f\u4f19\u4f34\u4e3aApache ShenYu \u8d21\u732e\u4e86\u6587\u7ae0\u548c\u4ee3\u7801\uff0c\u975e\u5e38\u611f\u8c22\u4ed6\u4eec\uff01"),(0,o.kt)("p",null,"\u60f3\u8981\u53c2\u4e0e\u8d21\u732e\uff0c\u53ef\u4ee5\u76f4\u63a5\u53bb",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/"},"Apache ShenYu"),"\uff0c\u5e76fork\u3002"),(0,o.kt)("h3",{id:"apache-shenyu"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/incubator-shenyu"},"Apache ShenYu")),(0,o.kt)(h,{repo:"apache/incubator-shenyu",mdxType:"Contributors"}),(0,o.kt)("h3",{id:"apache-shenyu-dashboard"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/incubator-shenyu-dashboard"},"Apache ShenYu Dashboard")),(0,o.kt)(h,{repo:"apache/incubator-shenyu-dashboard",mdxType:"Contributors"}),(0,o.kt)("h3",{id:"apache-shenyu-website"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/incubator-shenyu-website"},"Apache ShenYu Website")),(0,o.kt)(h,{repo:"apache/incubator-shenyu-website",mdxType:"Contributors"}),(0,o.kt)("h3",{id:"apache-shenyu-helm-chart"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/incubator-shenyu-helm-chart"},"Apache ShenYu Helm Chart")),(0,o.kt)(h,{repo:"apache/incubator-shenyu-helm-chart",mdxType:"Contributors"}),(0,o.kt)("h3",{id:"apache-shenyu-nginx"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/incubator-shenyu-nginx"},"Apache ShenYu Nginx")),(0,o.kt)(h,{repo:"apache/incubator-shenyu-nginx",mdxType:"Contributors"}),(0,o.kt)("h3",{id:"apache-shenyu-client-python"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/incubator-shenyu-client-python"},"Apache ShenYu Client Python")),(0,o.kt)(h,{repo:"apache/incubator-shenyu-client-python",mdxType:"Contributors"}),(0,o.kt)("h3",{id:"apache-shenyu-client-dotnet"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/incubator-shenyu-client-dotnet"},"Apache ShenYu Client Dotnet")),(0,o.kt)(h,{repo:"apache/incubator-shenyu-client-dotnet",mdxType:"Contributors"}),(0,o.kt)("h3",{id:"apache-shenyu-client-golang"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/incubator-shenyu-client-golang"},"Apache ShenYu Client Golang")),(0,o.kt)(h,{repo:"apache/incubator-shenyu-client-golang",mdxType:"Contributors"}))}l.isMDXComponent=!0}}]);