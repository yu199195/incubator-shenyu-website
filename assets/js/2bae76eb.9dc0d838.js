"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[98472],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=l(i),m=r,g=c["".concat(u,".").concat(m)]||c[m]||p[m]||s;return i?n.createElement(g,a(a({ref:t},d),{},{components:i})):n.createElement(g,a({ref:t},d))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=i.length,a=new Array(s);a[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var l=2;l<s;l++)a[l]=i[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},99430:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=i(87462),r=(i(67294),i(3905));const s={title:"Data Permission Management",keywords:["user data permission"],description:"user data permission"},a=void 0,o={unversionedId:"user-guide/admin-usage/data-permission",id:"user-guide/admin-usage/data-permission",isDocsHomePage:!1,title:"Data Permission Management",description:"user data permission",source:"@site/docs/user-guide/admin-usage/data-permission.md",sourceDirName:"user-guide/admin-usage",slug:"/user-guide/admin-usage/data-permission",permalink:"/docs/next/user-guide/admin-usage/data-permission",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/user-guide/admin-usage/data-permission.md",version:"current",frontMatter:{title:"Data Permission Management",keywords:["user data permission"],description:"user data permission"},sidebar:"tutorialSidebar",previous:{title:"Quick start with Tars",permalink:"/docs/next/quick-start/quick-start-tars"},next:{title:"Dictionary Management",permalink:"/docs/next/user-guide/admin-usage/dictionary-management"}},u=[{value:"Design Notes",id:"design-notes",children:[]},{value:"How to use",id:"how-to-use",children:[{value:"Create User",id:"create-user",children:[]},{value:"Edit Date",id:"edit-date",children:[]}]},{value:"New User Login",id:"new-user-login",children:[]}],l={toc:u};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"design-notes"},"Design Notes"),(0,r.kt)("p",null,"In order to achieve the different selector / rule represented by the plugin managed by different business units, the need for the plugin selector / rule data security for the user to control\nWhen the user does not configure data permissions, it has all the data permissions, as long as the permissions are configured, the data permissions will be controlled. As shown in the following picture."),(0,r.kt)("img",{src:"/img/shenyu/basicConfig/dataPermission/data-permission-profile-en.png",width:"80%",height:"50%"}),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"The Brief introduce is as follows."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Users with administrative user resouce permissions (including the admin user) create a new user."),(0,r.kt)("li",{parentName:"ul"},"Users with administrative user data resouce permissions (including admin user) click ",(0,r.kt)("inlineCode",{parentName:"li"},"ConfigureDataPermission")," to manage the user's data permissions.",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Make sure the data exists in the plugin list before doing so. If not, you will have any data to configure.")))),(0,r.kt)("p",null,"Now, let's look how to operation step by step:"),(0,r.kt)("h3",{id:"create-user"},"Create User"),(0,r.kt)("p",null,'Clicking the menu "System Manage -> User" to create user, like this:'),(0,r.kt)("img",{src:"/img/shenyu/basicConfig/dataPermission/create-new-user-en.png",width:"80%",height:"50%"}),(0,r.kt)("h3",{id:"edit-date"},"Edit Date"),(0,r.kt)("h4",{id:"add-plugin-data"},"Add Plugin Data"),(0,r.kt)("p",null,"Adding data in the plugin list, this article uses ",(0,r.kt)("inlineCode",{parentName:"p"},"divide")," as an example, like:"),(0,r.kt)("img",{src:"/img/shenyu/basicConfig/dataPermission/plugin-data-en.png",width:"80%",height:"50%"}),(0,r.kt)("h4",{id:"configure-resource-permission"},"Configure Resource Permission"),(0,r.kt)("p",null,"Giving the ",(0,r.kt)("inlineCode",{parentName:"p"},"divide")," plugin permission to the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," role."),(0,r.kt)("img",{src:"/img/shenyu/basicConfig/dataPermission/role-permission-setting-en.png",width:"80%",height:"50%"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," role has none permissions.The user can't login who we set ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," role to. So we must edit the permissons."),(0,r.kt)("h4",{id:"configure-data-permission"},"Configure Data Permission"),(0,r.kt)("p",null,"When we create the common users, we can edit data permissions by the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigureDataPermission")," button."),(0,r.kt)("img",{src:"/img/shenyu/basicConfig/dataPermission/data-permission-en.png",width:"80%",height:"50%"}),(0,r.kt)("p",null,"The datas in this list are the same as the plugin list."),(0,r.kt)("h2",{id:"new-user-login"},"New User Login"),(0,r.kt)("p",null,"When the user login, he just can see the data given to him."),(0,r.kt)("img",{src:"/img/shenyu/basicConfig/dataPermission/new-user-login-en.png",width:"80%",height:"50%"}))}d.isMDXComponent=!0}}]);