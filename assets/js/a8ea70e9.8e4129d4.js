"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[45390],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(t),m=i,d=g["".concat(s,".").concat(m)]||g[m]||p[m]||a;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},28961:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const a={title:"Custom Sign Algorithm",keywords:["Custom Sign"],description:"specify sign plugins for examination"},o=void 0,l={unversionedId:"developer/custom-sign-algorithm",id:"version-2.4.2/developer/custom-sign-algorithm",isDocsHomePage:!1,title:"Custom Sign Algorithm",description:"specify sign plugins for examination",source:"@site/versioned_docs/version-2.4.2/developer/custom-sign-algorithm.md",sourceDirName:"developer",slug:"/developer/custom-sign-algorithm",permalink:"/docs/2.4.2/developer/custom-sign-algorithm",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.2/developer/custom-sign-algorithm.md",version:"2.4.2",frontMatter:{title:"Custom Sign Algorithm",keywords:["Custom Sign"],description:"specify sign plugins for examination"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"Custom Response",permalink:"/docs/2.4.2/developer/custom-result"},next:{title:"Debug and run agent module locally",permalink:"/docs/2.4.2/developer/debug-agent"}},s=[{value:"Description",id:"description",children:[]},{value:"Extension",id:"extension",children:[]}],u={toc:s};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Users can customize the signature authentication algorithm to achieve verification.")),(0,i.kt)("h2",{id:"extension"},"Extension"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The default implementation is ",(0,i.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.sign.service.DefaultSignService"),"."),(0,i.kt)("li",{parentName:"ul"},"Declare a new class named ",(0,i.kt)("inlineCode",{parentName:"li"},"CustomSignService")," and implements  ",(0,i.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.sign.api.SignService"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"}," public interface SignService {\n \n     /**\n      * Sign verify pair.\n      *\n      * @param exchange   the exchange\n      * @return the pair\n      */\n     Pair<Boolean, String> signVerify(ServerWebExchange exchange);\n }\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When returning true in Pair, the sign verification passes. If there's false, the String in Pair will be return to the frontend to show."),(0,i.kt)("li",{parentName:"ul"},"Register defined class as a Spring Bean.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"   @Bean\n   public SignService customSignService() {\n         return new CustomSignService();\n   }\n")),(0,i.kt)("h1",{id:"others"},"Others"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you only want to modify the signature algorithm, refer to the following.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The default implementation of the signature algorithm is ",(0,i.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.common.utils.SignUtils#generateSign"),"."),(0,i.kt)("li",{parentName:"ul"},"Declare a new class named ",(0,i.kt)("inlineCode",{parentName:"li"},"CustomSignProvider")," and implements ",(0,i.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.sign.api.SignProvider"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * The Sign plugin sign provider.\n */\npublic interface SignProvider {\n\n    /**\n     * acquired sign.\n     *\n     * @param signKey sign key\n     * @param params  params\n     * @return sign\n     */\n    String generateSign(String signKey, Map<String, String> params);\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Put ",(0,i.kt)("inlineCode",{parentName:"li"},"CustomSignProvider")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Spring IoC"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic SignProvider customSignProvider() {\n    return new CustomSignProvider();\n}\n")))}c.isMDXComponent=!0}}]);