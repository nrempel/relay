(self.webpackChunk=self.webpackChunk||[]).push([[3021],{3905:(e,n,t)=>{"use strict";t.r(n),t.d(n,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),c=function(e){return function(n){var t=d(n.components);return a.createElement(e,i({},n,{components:t}))}},d=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return t?a.createElement(f,o(o({ref:n},u),{},{components:t})):a.createElement(f,o({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},36742:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>p});var a=t(79973),r=t(67294),i=t(73727),l=t(52263),o=t(13919),s=t(10412),u=(0,r.createContext)({collectLink:function(){}}),c=t(44996),d=t(18780),m=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const p=function(e){var n,t,p=e.isNavLink,f=e.to,h=e.href,g=e.activeClassName,v=e.isActive,b=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,x=void 0===y||y,w=(0,a.Z)(e,m),N=(0,l.default)().siteConfig,C=N.trailingSlash,q=N.baseUrl,O=(0,c.useBaseUrlUtils)().withBaseUrl,k=(0,r.useContext)(u),U=f||h,_=(0,o.Z)(U),E=null==U?void 0:U.replace("pathname://",""),P=void 0!==E?(t=E,x&&function(e){return e.startsWith("/")}(t)?O(t):t):void 0;P&&_&&(P=(0,d.applyTrailingSlash)(P,{trailingSlash:C,baseUrl:q}));var j=(0,r.useRef)(!1),D=p?i.OL:i.rU,F=s.default.canUseIntersectionObserver,T=(0,r.useRef)();(0,r.useEffect)((function(){return!F&&_&&null!=P&&window.docusaurus.prefetch(P),function(){F&&T.current&&T.current.disconnect()}}),[T,P,F,_]);var I=null!==(n=null==P?void 0:P.startsWith("#"))&&void 0!==n&&n,$=!P||!_||I;return P&&_&&!I&&!b&&k.collectLink(P),$?r.createElement("a",Object.assign({href:P},U&&!_&&{target:"_blank",rel:"noopener noreferrer"},w)):r.createElement(D,Object.assign({},w,{onMouseEnter:function(){j.current||null==P||(window.docusaurus.preload(P),j.current=!0)},innerRef:function(e){var n,t;F&&e&&_&&(n=e,t=function(){null!=P&&window.docusaurus.prefetch(P)},T.current=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.current.unobserve(n),T.current.disconnect(),t())}))})),T.current.observe(n))},to:P||""},p&&{isActive:v,activeClassName:g}))}},13919:(e,n,t)=>{"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}t.d(n,{b:()=>a,Z:()=>r})},44996:(e,n,t)=>{"use strict";t.r(n),t.d(n,{useBaseUrlUtils:()=>i,default:()=>l});var a=t(52263),r=t(13919);function i(){var e=(0,a.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var i=void 0===a?{}:a,l=i.forcePrependBaseUrl,o=void 0!==l&&l,s=i.absolute,u=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if((0,r.b)(t))return t;if(o)return n+t;var c=t.startsWith(n)?t:n+t.replace(/^\//,"");return u?e+c:c}(i,t,e,n)}}}function l(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},8802:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,a=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var r,i=e.split(/[#?]/)[0],l="/"===i||i===a?i:(r=i,t?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(i,l)}},18780:function(e,n,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var r=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=t(29964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return a(i).default}})},29964:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},68629:(e,n,t)=>{"use strict";t.d(n,{Z:()=>p});var a=t(36742),r=t(44256),i=t(67294);function l(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var n=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),n)}var s=function(){var e=i.useState(!1),n=e[0],t=e[1],a=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},u=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:l},"Filing a task"))},c=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},d=function(){return i.createElement(o,null,i.createElement(u,null),i.createElement(s,null),i.createElement(c,null))},m=function(){return i.createElement(o,null,i.createElement(s,null),i.createElement(c,null))};const p=function(){return(0,r.fbContent)({internal:i.createElement(d,null),external:i.createElement(m,null)})}},77146:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>u,contentTitle:()=>c,metadata:()=>d,toc:()=>m,default:()=>f});var a=t(74034),r=t(79973),i=(t(67294),t(3905)),l=t(68629),o=t(44256),s=["components"],u={id:"variables",title:"Variables",slug:"/guided-tour/rendering/variables/"},c=void 0,d={unversionedId:"guided-tour/rendering/variables",id:"version-v11.0.0/guided-tour/rendering/variables",isDocsHomePage:!1,title:"Variables",description:"You may have noticed that the query declarations in our examples above contain references to an $id symbol inside the GraphQL code: these are GraphQL Variables.",source:"@site/versioned_docs/version-v11.0.0/guided-tour/rendering/variables.md",sourceDirName:"guided-tour/rendering",slug:"/guided-tour/rendering/variables/",permalink:"/docs/v11.0.0/guided-tour/rendering/variables/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/guided-tour/rendering/variables.md",tags:[],version:"v11.0.0",lastUpdatedBy:"Stiopa Koltsov",lastUpdatedAt:1655862705,formattedLastUpdatedAt:"6/22/2022",frontMatter:{id:"variables",title:"Variables",slug:"/guided-tour/rendering/variables/"},sidebar:"version-v11.0.0/docs",previous:{title:"Fragments",permalink:"/docs/v11.0.0/guided-tour/rendering/fragments/"},next:{title:"Loading States with Suspense",permalink:"/docs/v11.0.0/guided-tour/rendering/loading-states/"}},m=[{value:"@arguments and @argumentDefinitions",id:"arguments-and-argumentdefinitions",children:[],level:2},{value:"Accessing GraphQL Variables At Runtime",id:"accessing-graphql-variables-at-runtime",children:[],level:2}],p={toc:m};function f(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.mdx)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"You may have noticed that the query declarations in our examples above contain references to an ",(0,i.mdx)("inlineCode",{parentName:"p"},"$id")," symbol inside the GraphQL code: these are ",(0,i.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/queries/#variables"},"GraphQL Variables"),"."),(0,i.mdx)("p",null,"GraphQL variables are a construct that allows referencing dynamic values inside a GraphQL query. When fetching a query from the server, we also need to provide as input the actual set of values to use for the variables declared inside the query:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"query UserQuery($id: ID!) {\n\n  # The value of $id is used as input to the user() call:\n  user(id: $id) {\n    id\n    name\n  }\n\n}\n")),(0,i.mdx)("p",null,"In the above, ",(0,i.mdx)("inlineCode",{parentName:"p"},"ID!")," is the type of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"$id")," variable. That is, it is a required ID."),(0,i.mdx)("p",null,"When sending a network request to fetch the query above, we need to provide both the query, and the variables to be used for this particular execution of the query.  For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'# Query:\nquery UserQuery($id: ID!) {\n  # ...\n}\n\n# Variables:\n{"id": 4}\n')),(0,i.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)("p",null,"Fetching the above query and variables from the server would produce the following response, which can also be visualized in ",(0,i.mdx)("a",{parentName:"p",href:"https://fburl.com/graphiql/kiuar058"},"GraphiQL"),":")),(0,i.mdx)(o.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("p",null,"Fetching the above query and variables from the server would produce the following response:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "user": {\n      "id": "4",\n      "name": "Mark Zuckerberg"\n    }\n  }\n}\n')),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Note that changing the value of the ",(0,i.mdx)("inlineCode",{parentName:"li"},"id")," variable used as input would of course produce a different response.")),(0,i.mdx)("hr",null),(0,i.mdx)("p",null,"Fragments can also reference variables that have been declared by a query:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"fragment UserFragment on User {\n  name\n  profile_picture(scale: $scale) {\n    uri\n  }\n}\n\n\nquery ViewerQuery($scale: Float!) {\n  viewer {\n    actor {\n      ...UserFragment\n    }\n  }\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Even though the fragment above doesn't ",(0,i.mdx)("em",{parentName:"li"},"declare")," the ",(0,i.mdx)("inlineCode",{parentName:"li"},"$scale")," variable directly, it can still reference it. Doing so makes it so any query that includes this fragment, either directly or transitively, ",(0,i.mdx)("em",{parentName:"li"},"must")," declare the variable and its type, otherwise an error will be produced."),(0,i.mdx)("li",{parentName:"ul"},"In other words, ",(0,i.mdx)("em",{parentName:"li"},"query variables are available globally by any fragment that is a descendant of the query"),"."),(0,i.mdx)("li",{parentName:"ul"},"A fragment which references a global variable can only be included (directly or transitively) in a query which defines that global variable.")),(0,i.mdx)("p",null,"In Relay, fragment declarations inside components can also reference query variables:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"function UserComponent(props: Props) {\n  const data = useFragment(\n    graphql`\n    fragment UserComponent_user on User {\n      name\n      profile_picture(scale: $scale) {\n        uri\n      }\n    }\n    `,\n    props.user,\n  );\n\n  return (...);\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The above fragment could be included by multiple queries, and rendered by different components, which means that any query that ends up rendering/including the above fragment ",(0,i.mdx)("em",{parentName:"li"},"must")," declare the ",(0,i.mdx)("inlineCode",{parentName:"li"},"$scale")," variable."),(0,i.mdx)("li",{parentName:"ul"},"If any query that happens to include this fragment ",(0,i.mdx)("em",{parentName:"li"},"doesn't")," declare the ",(0,i.mdx)("inlineCode",{parentName:"li"},"$scale")," variable, an error will be produced by the Relay Compiler at build time, ensuring that an incorrect query never gets sent to the server (sending a query with missing variable declarations will also produce an error in the server).")),(0,i.mdx)("h2",{id:"arguments-and-argumentdefinitions"},"@arguments and @argumentDefinitions"),(0,i.mdx)("p",null,"However, in order to prevent bloating queries with global variable declarations, Relay also provides a way to declare variables that are scoped locally to a fragment using  the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@arguments")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"@argumentDefinitions")," directives:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'/**\n * Declare a fragment that accepts arguments with @argumentDefinitions\n */\n\nfunction PictureComponent(props) {\n  const data = useFragment(\n    graphql`\n      fragment PictureComponent_user on User\n        @argumentDefinitions(scale: {type: "Float!"}) {\n\n        # *`**$scale**`* is a local variable here, declared above\n        # as an argument *`**scale**`*, of type *`**Float!`*\n        profile_picture(scale: $scale) {\n          uri\n        }\n      }\n    `,\n    props.user,\n  );\n}\n')),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * Include fragment using @arguments\n */\n\nfunction UserComponent(props) {\n  const data = useFragment(\n    graphql`\n      fragment UserComponent_user on User {\n        name\n\n        # Pass value of 2.0 for the *`*scale*`* variable\n        ...PictureComponent_user @arguments(scale: 2.0)\n      }\n    `,\n    props.user,\n  );\n}\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * Include same fragment using *_different_* @arguments\n */\n\nfunction OtherUserComponent(props) {\n  const data = useFragment(\n    graphql`\n      fragment OtherUserComponent_user on User {\n        name\n\n        # Pass a different value for the scale variable.\n        # The value can be another local or global variable:\n        ...PictureComponent_user @arguments(scale: $pictureScale)\n      }\n    `,\n    props.user,\n  );\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Note that when passing ",(0,i.mdx)("inlineCode",{parentName:"li"},"@arguments")," to a fragment, we can pass a literal value or pass another variable. The variable can be a global query variable, or another local variable declared via ",(0,i.mdx)("inlineCode",{parentName:"li"},"@argumentDefinitions"),"."),(0,i.mdx)("li",{parentName:"ul"},"When we actually fetch ",(0,i.mdx)("inlineCode",{parentName:"li"},"PictureComponent_user")," as part of a query, the ",(0,i.mdx)("inlineCode",{parentName:"li"},"scale")," value passed to the ",(0,i.mdx)("inlineCode",{parentName:"li"},"profile_picture")," field will depend on the argument that was provided by the parent of ",(0,i.mdx)("inlineCode",{parentName:"li"},"PictureComponent_user"),":",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"For ",(0,i.mdx)("inlineCode",{parentName:"li"},"UserComponent_user")," the value of ",(0,i.mdx)("inlineCode",{parentName:"li"},"$scale")," will be 2.0."),(0,i.mdx)("li",{parentName:"ul"},"For ",(0,i.mdx)("inlineCode",{parentName:"li"},"OtherUserComponent_user"),", the value of ",(0,i.mdx)("inlineCode",{parentName:"li"},"$scale")," will be whatever value we pass to the server for the ",(0,i.mdx)("inlineCode",{parentName:"li"},"$pictureScale")," variable when we fetch the query.")))),(0,i.mdx)("p",null,"Fragments that expect arguments can also declare default values, making the arguments optional:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'/**\n * Declare a fragment that accepts arguments with default values\n */\n\nfunction PictureComponent(props) {\n  const data = useFragment(\n    graphql`\n      fragment PictureComponent_user on User\n        @argumentDefinitions(scale: {type: "Float!", defaultValue: 2.0}) {\n\n        # *`**$scale**`* is a local variable here, declared above\n        # as an argument *`**scale**`*, of type *`**Float!` with a default value of *`2.0**`**\n        profile_picture(scale: $scale) {\n          uri\n        }\n      }\n    `,\n    props.user,\n  );\n}\n')),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"function UserComponent(props) {\n  const data = useFragment(\n    graphql`\n      fragment UserComponent_user on User {\n        name\n\n        # Do not pass an argument, value for scale will be **`2.0**`**\n        ...PictureComponent_user\n      }\n    `,\n    props.user,\n  );\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Not passing the argument to ",(0,i.mdx)("inlineCode",{parentName:"li"},"PictureComponent_user")," makes it use the default value for its locally declared ",(0,i.mdx)("inlineCode",{parentName:"li"},"$scale")," variable, in this case 2.0.")),(0,i.mdx)("h2",{id:"accessing-graphql-variables-at-runtime"},"Accessing GraphQL Variables At Runtime"),(0,i.mdx)("p",null,"If you want to access the variables that were set at the query root, the recommended approach is to pass the variables down the component tree in your application, using props, or your own application-specific context."),(0,i.mdx)("p",null,"Relay currently does not expose the resolved variables (i.e. after applying argument definitions) for a specific fragment, and you should very rarely need to do so."),(0,i.mdx)(l.Z,{mdxType:"DocsRating"}))}f.isMDXComponent=!0}}]);