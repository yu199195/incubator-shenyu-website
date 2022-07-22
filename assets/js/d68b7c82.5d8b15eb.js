"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[69054],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(t),g=a,y=c["".concat(l,".").concat(g)]||c[g]||d[g]||i;return t?r.createElement(y,o(o({ref:n},u),{},{components:t})):r.createElement(y,o({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},37614:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const i={title:"Spring Cloud Proxy",keywords:["Spring Cloud"],description:"springCloud with shenyu gateway"},o=void 0,p={unversionedId:"user-guide/spring-cloud-proxy",id:"user-guide/spring-cloud-proxy",isDocsHomePage:!1,title:"Spring Cloud Proxy",description:"springCloud with shenyu gateway",source:"@site/docs/user-guide/spring-cloud-proxy.md",sourceDirName:"user-guide",slug:"/user-guide/spring-cloud-proxy",permalink:"/docs/next/user-guide/spring-cloud-proxy",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/user-guide/spring-cloud-proxy.md",version:"current",frontMatter:{title:"Spring Cloud Proxy",keywords:["Spring Cloud"],description:"springCloud with shenyu gateway"},sidebar:"tutorialSidebar",previous:{title:"Sofa Proxy",permalink:"/docs/next/user-guide/sofa-rpc-proxy"},next:{title:"Tars Proxy",permalink:"/docs/next/user-guide/tars-proxy"}},l=[{value:"Add springcloud plugin in gateway",id:"add-springcloud-plugin-in-gateway",children:[]},{value:"SpringCloud service access gateway",id:"springcloud-service-access-gateway",children:[]},{value:"User Request",id:"user-request",children:[]}],s={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document is intended to help the ",(0,a.kt)("inlineCode",{parentName:"p"},"Spring Cloud")," service access the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"springCloud")," plugin to handle ",(0,a.kt)("inlineCode",{parentName:"p"},"Spring Cloud")," service."),(0,a.kt)("p",null,"Before the connection, start ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," correctly, start ",(0,a.kt)("inlineCode",{parentName:"p"},"springCloud")," plugin, and add related dependencies on the gateway and ",(0,a.kt)("inlineCode",{parentName:"p"},"springCloud")," application client. Refer to the previous ",(0,a.kt)("a",{parentName:"p",href:"../quick-start/quick-start-springcloud"},"Quick start with Spring Cloud")," ."),(0,a.kt)("p",null,"For details about client access configuration, see ",(0,a.kt)("a",{parentName:"p",href:"./register-center-access"},"Application Client Access Config")," ."),(0,a.kt)("p",null,"For details about data synchronization configurations, see ",(0,a.kt)("a",{parentName:"p",href:"./use-data-sync"},"Data Synchronization Config")," ."),(0,a.kt)("h2",{id:"add-springcloud-plugin-in-gateway"},"Add springcloud plugin in gateway"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"add these dependencies in gateway's pom.xml:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu springCloud plugin start--\x3e\n  <dependency>\n       <groupId>org.apache.shenyu</groupId>\n       <artifactId>shenyu-spring-boot-starter-plugin-springcloud</artifactId>\n        <version>${project.version}</version>\n  </dependency>\n\n  <dependency>\n       <groupId>org.apache.shenyu</groupId>\n       <artifactId>shenyu-spring-boot-starter-plugin-httpclient</artifactId>\n       <version>${project.version}</version>\n   </dependency>\n   \x3c!-- apache shenyu springCloud plugin end--\x3e\n\n   <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-commons</artifactId>\n        <version>2.2.0.RELEASE</version>\n   </dependency>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you use ",(0,a.kt)("inlineCode",{parentName:"p"},"eureka")," as SpringCloud registry center."),(0,a.kt)("p",{parentName:"li"}," add these dependencies:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  <dependency>\n       <groupId>org.springframework.cloud</groupId>\n       <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n       <version>2.2.0.RELEASE</version>\n  </dependency>\n")))),(0,a.kt)("p",null,"add these config values in gateway's yaml file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"   eureka:\n     client:\n       serviceUrl:\n         defaultZone: http://localhost:8761/eureka/ #your eureka address\n     instance:\n       prefer-ip-address: true\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"if you use ",(0,a.kt)("inlineCode",{parentName:"p"},"nacos")," as Spring Cloud registry center."),(0,a.kt)("p",{parentName:"li"}," add these dependencies:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n       <groupId>com.alibaba.cloud</groupId>\n       <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>\n       <version>2.1.0.RELEASE</version>\n </dependency>\n")))),(0,a.kt)("p",null,"add these config values in gateway's yaml file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  spring:\n     cloud:\n       nacos:\n         discovery:\n            server-addr: 127.0.0.1:8848 # your nacos address\n")),(0,a.kt)("p",null,"Special note: Please ensure that the spring Cloud registry service discovery configuration is enabled"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configuration method")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"spring:\n  cloud:\n    discovery:\n      enabled: true\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"code method")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@SpringBootApplication\n@EnableDiscoveryClient\npublic class ShenyuBootstrapApplication {\n    \n    /**\n     * Main Entrance.\n     *\n     * @param args startup arguments\n     */\n    public static void main(final String[] args) {\n        SpringApplication.run(ShenyuBootstrapApplication.class, args);\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"restart your gateway service.")),(0,a.kt)("h2",{id:"springcloud-service-access-gateway"},"SpringCloud service access gateway"),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/v2.4.0/shenyu-examples/shenyu-examples-springcloud"},"shenyu-examples-springcloud")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add the following dependencies to your ",(0,a.kt)("inlineCode",{parentName:"li"},"Spring Cloud")," microservice :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-client-springcloud</artifactId>\n      <version>${shenyu.version}</version>\n </dependency>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add the annotation ",(0,a.kt)("inlineCode",{parentName:"p"},"@ShenyuSpringCloudClient")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"controller")," interface. you can apply the annotation to class-level in a controller.the name of the path variable is prefix and '/**' will apply proxy for entire interfaces.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"example (1)\uff1aboth ",(0,a.kt)("inlineCode",{parentName:"p"},"/test/payment")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/test/findByUserId")," will be handled by gateway."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},' @RestController\n @RequestMapping("/test")\n @ShenyuSpringCloudClient(path = "/test/**")\n public class HttpTestController {\n\n     @PostMapping("/payment")\n     public UserDTO post(@RequestBody final UserDTO userDTO) {\n         return userDTO;\n     }\n\n     @GetMapping("/findByUserId")\n     public UserDTO findByUserId(@RequestParam("userId") final String userId) {\n         UserDTO userDTO = new UserDTO();\n         userDTO.setUserId(userId);\n         userDTO.setUserName("hello world");\n         return userDTO;\n     }\n  }\n')))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\nexample (2)\uff1a`/order/save` will be handled by gateway, and `/order/findById` won\'t.\n\n ```java\n  @RestController\n  @RequestMapping("/order")\n  @ShenyuSpringCloudClient(path = "/order")\n  public class OrderController {\n\n      @PostMapping("/save")\n      @ShenyuSpringMvcClient(path = "/save")\n      public OrderDTO save(@RequestBody final OrderDTO orderDTO) {\n          orderDTO.setName("hello world save order");\n          return orderDTO;\n      }\n\n      @GetMapping("/findById")\n      public OrderDTO findById(@RequestParam("id") final String id) {\n          OrderDTO orderDTO = new OrderDTO();\n          orderDTO.setId(id);\n          orderDTO.setName("hello world findById");\n          return orderDTO;\n      }\n  }\n')),(0,a.kt)("p",null,"example (3)\uff1a  ",(0,a.kt)("inlineCode",{parentName:"p"},"isFull"),"\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"  represents that all service will be represented by the gateway."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  client:\n    registerType: http\n    serverLists: http://localhost:9095\n    props:\n      contextPath: /http\n      appName: http\n      isFull: true\n# registerType : service registre type, see the application client access document\n# serverList: server list, see the application client access document\n# contextPath: route prefix for your project in ShenYu gateway.\n# appName\uff1ayour application name\n# isFull: set true to proxy your all service and false to proxy some of your controllers\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},' @RestController\n @RequestMapping("/order")\n public class OrderController {\n\n     @PostMapping("/save")\n     @ShenyuSpringMvcClient(path = "/save")\n     public OrderDTO save(@RequestBody final OrderDTO orderDTO) {\n         orderDTO.setName("hello world save order");\n         return orderDTO;\n     }\n\n     @GetMapping("/findById")\n     public OrderDTO findById(@RequestParam("id") final String id) {\n         OrderDTO orderDTO = new OrderDTO();\n         orderDTO.setId(id);\n         orderDTO.setName("hello world findById");\n         return orderDTO;\n     }\n }\n')),(0,a.kt)("p",null,"example (4)\uff1aThis is a simplified way to use it, just need a simple annotation to register to the gateway using metadata.\nSpecial note: currently only supports ",(0,a.kt)("inlineCode",{parentName:"p"},"@RequestMapping, @GetMapping, @PostMapping, @DeleteMapping, @PutMapping")," annotations, and only valid for the first path in ",(0,a.kt)("inlineCode",{parentName:"p"},"@XXXMapping"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'  @RestController\n  @RequestMapping("new/feature")\n  public class NewFeatureController {\n  \n    /**\n     * no support gateway access api.\n     *\n     * @return result\n     */\n    @RequestMapping("/gateway/not")\n    public EntityResult noSupportGateway() {\n      return new EntityResult(200, "no support gateway access");\n    }\n  \n    /**\n     * Do not use shenyu annotation path. used request mapping path.\n     *\n     * @return result\n     */\n    @RequestMapping("/requst/mapping/path")\n    @ShenyuSpringCloudClient\n    public EntityResult requestMappingUrl() {\n      return new EntityResult(200, "Do not use shenyu annotation path. used request mapping path");\n    }\n  \n    /**\n     * Do not use shenyu annotation path. used post mapping path.\n     *\n     * @return result\n     */\n    @PostMapping("/post/mapping/path")\n    @ShenyuSpringCloudClient\n    public EntityResult postMappingUrl() {\n      return new EntityResult(200, "Do not use shenyu annotation path. used post mapping path");\n    }\n  \n    /**\n     * Do not use shenyu annotation path. used post mapping path.\n     *\n     * @return result\n     */\n    @GetMapping("/get/mapping/path")\n    @ShenyuSpringCloudClient\n    public EntityResult getMappingUrl() {\n      return new EntityResult(200, "Do not use shenyu annotation path. used get mapping path");\n    }\n  }\n\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"After successfully registering your service, go to the backend management system PluginList -> rpc proxy -> springCloud ', you will see the automatic registration of selectors and rules information.")),(0,a.kt)("h2",{id:"user-request"},"User Request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Send the request as before, only two points need to notice.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"firstly,the domain name that requested before in your service, now need to replace with gateway's domain name.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"secondly, Apache ShenYu gateway needs a route prefix which comes from ",(0,a.kt)("inlineCode",{parentName:"p"},"contextPath"),", it configured during the integration with gateway, you can change it freely in divide plugin of ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),", if your familiar with it."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For example, your have an ",(0,a.kt)("inlineCode",{parentName:"p"},"order")," service and it has a interface, the request url: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/test/save")," ."),(0,a.kt)("p",{parentName:"blockquote"},"Now need to change to\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:9195/order/test/save")," ."),(0,a.kt)("p",{parentName:"blockquote"},"We can see ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:9195")," is the gateway's ip port, default port number is ",(0,a.kt)("inlineCode",{parentName:"p"},"9195")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"/order")," is the ",(0,a.kt)("inlineCode",{parentName:"p"},"contextPath")," in your config yaml file."),(0,a.kt)("p",{parentName:"blockquote"},"The request of other parameters doesn't change. Then you can visit, very easy and simple.")))}u.isMDXComponent=!0}}]);