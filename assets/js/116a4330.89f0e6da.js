"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[33008],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>u,withMDXComponents:()=>l});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){return function(t){var n=u(t.components);return a.createElement(e,i({},t,{components:n}))}},u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=u(n),m=o,f=l["".concat(r,".").concat(m)]||l[m]||p[m]||i;return n?a.createElement(f,d(d({ref:t},c),{},{components:n})):a.createElement(f,d({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=f;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(39960),o=n(44256),i=n(67294);function r(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function d(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var s=function(){var e=i.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:r},"Filing a task"))},l=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return i.createElement(d,null,i.createElement(c,null),i.createElement(s,null),i.createElement(l,null))},m=function(){return i.createElement(d,null,i.createElement(s,null),i.createElement(l,null))};const p=function(){return(0,o.fbContent)({internal:i.createElement(u,null),external:i.createElement(m,null)})}},35190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var a=n(83117),o=n(80102),i=(n(67294),n(3905)),r=n(68629),d=(n(44256),["components"]),s={id:"imperatively-modifying-store-data-unsafe",title:"Imperatively modifying store data (unsafe)",slug:"/guided-tour/updating-data/imperatively-modifying-store-data-unsafe/",description:"Imperatively modifying store data",keywords:["record source","store","updater"]},c=void 0,l={unversionedId:"guided-tour/updating-data/imperatively-modifying-store-data-unsafe",id:"guided-tour/updating-data/imperatively-modifying-store-data-unsafe",title:"Imperatively modifying store data (unsafe)",description:"Imperatively modifying store data",source:"@site/docs/guided-tour/updating-data/imperatively-modifying-store-data-legacy.md",sourceDirName:"guided-tour/updating-data",slug:"/guided-tour/updating-data/imperatively-modifying-store-data-unsafe/",permalink:"/docs/next/guided-tour/updating-data/imperatively-modifying-store-data-unsafe/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/guided-tour/updating-data/imperatively-modifying-store-data-legacy.md",tags:[],version:"current",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1660155978,formattedLastUpdatedAt:"8/10/2022",frontMatter:{id:"imperatively-modifying-store-data-unsafe",title:"Imperatively modifying store data (unsafe)",slug:"/guided-tour/updating-data/imperatively-modifying-store-data-unsafe/",description:"Imperatively modifying store data",keywords:["record source","store","updater"]},sidebar:"docs",previous:{title:"GraphQL subscriptions",permalink:"/docs/next/guided-tour/updating-data/graphql-subscriptions/"},next:{title:"Local Data Updates",permalink:"/docs/next/guided-tour/updating-data/local-data-updates/"}},u={},m=[{value:"When to use updaters",id:"when-to-use-updaters",level:2},{value:"Complex client updates",id:"complex-client-updates",level:3},{value:"Client schema extensions",id:"client-schema-extensions",level:3},{value:"Use of other APIs",id:"use-of-other-apis",level:3},{value:"If multiple optimistic responses modify a given store value",id:"if-multiple-optimistic-responses-modify-a-given-store-value",level:3},{value:"When <strong>not</strong> to use updaters",id:"when-not-to-use-updaters",level:2},{value:"To trigger other side effects",id:"to-trigger-other-side-effects",level:3},{value:"The various types of updater functions",id:"the-various-types-of-updater-functions",level:2},{value:"Optimistic updaters vs updaters",id:"optimistic-updaters-vs-updaters",level:2},{value:"Example",id:"example",level:2},{value:"Learn more",id:"learn-more",level:2}],p={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,d);return(0,i.mdx)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Data in Relay stores can be imperatively modified within updater functions."),(0,i.mdx)("h2",{id:"when-to-use-updaters"},"When to use updaters"),(0,i.mdx)("h3",{id:"complex-client-updates"},"Complex client updates"),(0,i.mdx)("p",null,"You might provide an updater function if the changes to local data are more complex than what can be achieved by simply writing a network response to the store and cannot be handled by the declarative mutation directives."),(0,i.mdx)("h3",{id:"client-schema-extensions"},"Client schema extensions"),(0,i.mdx)("p",null,"In addition, since the network response necessarily will not include data for fields defined in client schema extensions, you may wish to use an updater to initialize data defined in client schema extensions."),(0,i.mdx)("h3",{id:"use-of-other-apis"},"Use of other APIs"),(0,i.mdx)("p",null,"Lastly, there are things you can only achieve using updaters, such as invalidating nodes, deleting nodes, finding all connections at a given field, etc."),(0,i.mdx)("h3",{id:"if-multiple-optimistic-responses-modify-a-given-store-value"},"If multiple optimistic responses modify a given store value"),(0,i.mdx)("p",null,"If two optimistic responses affect a given value, and the first optimistic response is rolled back, the second one will remain applied."),(0,i.mdx)("p",null,"For example, if two optimistic responses each increase a story's like count by one, and the first optimistic response is rolled back, the second optimistic response remains applied. Since the second optimistic response ",(0,i.mdx)("strong",{parentName:"p"},"not recalculated"),", the value of the like count will remain increased by two."),(0,i.mdx)("p",null,"An optimistic updater, on the other hand, would be re-run in this circumstance."),(0,i.mdx)("h2",{id:"when-not-to-use-updaters"},"When ",(0,i.mdx)("strong",{parentName:"h2"},"not")," to use updaters"),(0,i.mdx)("h3",{id:"to-trigger-other-side-effects"},"To trigger other side effects"),(0,i.mdx)("p",null,"You should use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"onCompleted")," callback to trigger other side effects."),(0,i.mdx)("h2",{id:"the-various-types-of-updater-functions"},"The various types of updater functions"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"useMutation")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"commitMutation")," APIs accept configuration objects which can include ",(0,i.mdx)("inlineCode",{parentName:"p"},"optimisticUpdater")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"updater")," fields. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"requestSubscription")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"useSubscription")," APIs accept configuration objects which can include ",(0,i.mdx)("inlineCode",{parentName:"p"},"updater")," fields."),(0,i.mdx)("p",null,"In addition, there is another API (",(0,i.mdx)("inlineCode",{parentName:"p"},"commitLocalUpdate"),") which also accepts an updater function. It will be discussed in the ",(0,i.mdx)("a",{parentName:"p",href:"../local-data-updates/"},"Other APIs for modifying local data")," section."),(0,i.mdx)("h2",{id:"optimistic-updaters-vs-updaters"},"Optimistic updaters vs updaters"),(0,i.mdx)("p",null,"Mutations can have both optimistic and regular updaters. Optimistic updaters are executed when a mutation is triggered. When that mutation completes or errors, the optimistic update is rolled back. At that point, the mutation response is written to the store and regular updaters are executed. See ",(0,i.mdx)("a",{parentName:"p",href:"../graphql-mutations/#order-of-execution-of-updater-functions"},"order of execution of updater functions"),"."),(0,i.mdx)("p",null,"Regular updaters are executed when a mutation completes successfully."),(0,i.mdx)("h2",{id:"example"},"Example"),(0,i.mdx)("p",null,"Let's consider an example that provides an updater to ",(0,i.mdx)("inlineCode",{parentName:"p"},"commitMutation"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import type {Environment} from 'react-relay';\nimport type {CommentCreateData, CreateCommentMutation} from 'CreateCommentMutation.graphql';\n\nconst {commitMutation, graphql} = require('react-relay');\nconst {ConnectionHandler} = require('relay-runtime');\n\nfunction commitCommentCreateMutation(\n  environment: Environment,\n  feedbackID: string,\n  input: CommentCreateData,\n) {\n  return commitMutation<CreateCommentMutation>(environment, {\n    mutation: graphql`\n      mutation CreateCommentMutation($input: CommentCreateData!) {\n        comment_create(input: $input) {\n          comment_edge {\n            cursor\n            node {\n              body {\n                text\n              }\n            }\n          }\n        }\n      }\n    `,\n    variables: {input},\n    updater: (store: RecordSourceSelectorProxy, _response: ?CreateCommentMutation$data) => {\n      // we are not using _response in this example, but it is\n      // provided and statically typed.\n\n      const feedbackRecord = store.get(feedbackID);\n\n      // Get connection record\n      const connectionRecord = ConnectionHandler.getConnection(\n        feedbackRecord,\n        'CommentsComponent_comments_connection',\n      );\n\n      // Get the payload returned from the server\n      const payload = store.getRootField('comment_create');\n\n      // Get the edge inside the payload\n      const serverEdge = payload.getLinkedRecord('comment_edge');\n\n      // Build edge for adding to the connection\n      const newEdge = ConnectionHandler.buildConnectionEdge(\n        store,\n        connectionRecord,\n        serverEdge,\n      );\n\n      // Add edge to the end of the connection\n      ConnectionHandler.insertEdgeAfter(\n        connectionRecord,\n        newEdge,\n      );\n    },\n  });\n}\n\nmodule.exports = {commit: commitCommentCreateMutation};\n")),(0,i.mdx)("p",null,"Let's distill this example:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The updater receives a ",(0,i.mdx)("inlineCode",{parentName:"li"},"store")," argument, which is an instance of a ",(0,i.mdx)("a",{parentName:"li",href:"../../../api-reference/store/"},(0,i.mdx)("inlineCode",{parentName:"a"},"RecordSourceSelectorProxy")),";  this interface allows you to ",(0,i.mdx)("em",{parentName:"li"},"imperatively")," write and read data directly to and from the Relay store. This means that you have full control over how to update the store in response to the mutation response: you can ",(0,i.mdx)("em",{parentName:"li"},"create entirely new records"),", or ",(0,i.mdx)("em",{parentName:"li"},"update or delete existing ones"),"."),(0,i.mdx)("li",{parentName:"ul"},"The updater receives a second ",(0,i.mdx)("inlineCode",{parentName:"li"},"data")," argument, which contains the data selected by the mutation fragment. This can be used to retrieve the payload data without interacting with the ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"em"},"store")),". The type of this mutation response can be imported from the auto-generated ",(0,i.mdx)("inlineCode",{parentName:"li"},"Mutation.graphql.js")," file, and is given the name ",(0,i.mdx)("inlineCode",{parentName:"li"},"MutationName$data"),".",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"The type of this ",(0,i.mdx)("inlineCode",{parentName:"li"},"data")," argument is a nullable version of the ",(0,i.mdx)("inlineCode",{parentName:"li"},"$data")," type."),(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("inlineCode",{parentName:"li"},"data")," arguments contains just the data selected directly by the mutation argument. In other words, if another fragment is spread in the mutation, the data from that fragment will not be available within ",(0,i.mdx)("inlineCode",{parentName:"li"},"data")," by default."))),(0,i.mdx)("li",{parentName:"ul"},"In our specific example, we're adding a new comment to our local store after it has successfully been added on the server. Specifically, we're adding a new item to a connection; for more details on the specifics of how that works, check out our section on ",(0,i.mdx)("a",{parentName:"li",href:"../../list-data/updating-connections/"},"adding and removing items from a connection"),".",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"There is no need for an updater in this example \u2014 it would be a great place to use the ",(0,i.mdx)("inlineCode",{parentName:"li"},"@appendEdge")," directive instead!"))),(0,i.mdx)("li",{parentName:"ul"},"Note that the mutation response is a ",(0,i.mdx)("em",{parentName:"li"},"root field")," record that can be read from the ",(0,i.mdx)("inlineCode",{parentName:"li"},"store")," using the ",(0,i.mdx)("inlineCode",{parentName:"li"},"store.getRootField")," API. In our case, we're reading the ",(0,i.mdx)("inlineCode",{parentName:"li"},"comment_create")," root field, which is a root field in the mutation response."),(0,i.mdx)("li",{parentName:"ul"},"Note that the ",(0,i.mdx)("inlineCode",{parentName:"li"},"root")," field of the mutation is different from the ",(0,i.mdx)("inlineCode",{parentName:"li"},"root")," of queries, and ",(0,i.mdx)("inlineCode",{parentName:"li"},"store.getRootField")," in the mutation updater can only get the record from the mutation response. To get records from the root that's not in the mutation response, use ",(0,i.mdx)("inlineCode",{parentName:"li"},"store.getRoot().getLinkedRecord")," instead."),(0,i.mdx)("li",{parentName:"ul"},"Once the updater completes, any local data updates caused by the mutation ",(0,i.mdx)("inlineCode",{parentName:"li"},"updater")," will automatically cause components subscribed to the data to be notified of the change and re-render.")),(0,i.mdx)("h2",{id:"learn-more"},"Learn more"),(0,i.mdx)("p",null,"See the full APIs ",(0,i.mdx)("a",{parentName:"p",href:"../../../api-reference/store/"},"here"),"."),(0,i.mdx)(r.Z,{mdxType:"DocsRating"}))}f.isMDXComponent=!0},47596:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(o,i){function r(e){try{s(a.next(e))}catch(t){i(t)}}function d(e){try{s(a.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,d)}s((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const o=n(11737);t.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield o.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,t){var n=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(o,i){function r(e){try{s(a.next(e))}catch(t){i(t)}}function d(e){try{s(a.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,d)}s((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let a=!1,o=0;const i={};t.call=function(e){return n(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in i||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?i[t].resolve(e.data.response):i[t].reject(new Error(e.data.error)),delete i[t]})));const t=o++,n=new Promise(((e,n)=>{i[t]={resolve:e,reject:n}})),r={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},d="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(r,d),n}))}},24855:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(o,i){function r(e){try{s(a.next(e))}catch(t){i(t)}}function d(e){try{s(a.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,d)}s((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.reportFeatureUsage=t.reportContentCopied=void 0;const o=n(11737);t.reportContentCopied=function(e){return a(this,void 0,void 0,(function*(){const{textContent:t}=e;try{yield o.call({module:"feedback",api:"reportContentCopied",args:{textContent:t}})}catch(n){}}))},t.reportFeatureUsage=function(e){return a(this,void 0,void 0,(function*(){const{featureName:t,id:n}=e;console.log("used feature");try{yield o.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:t,id:n}})}catch(a){}}))}},44256:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.getEphemeralDiffNumber=t.hasEphemeralDiffNumber=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.inpageeditor=t.feedback=t.uidocs=t.bloks=void 0,t.bloks=i(n(47596)),t.uidocs=i(n(17483)),t.feedback=i(n(24855)),t.inpageeditor=i(n(27312));const r=["internal","external"];function d(e){return c(e),l()?"internal"in e?s(e.internal):[]:"external"in e?s(e.external):[]}function s(e){return"function"==typeof e?e():e}function c(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${r}. Instead got ${e}`);if(!Object.keys(e).find((e=>r.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${r}`);const t=Object.keys(e).filter((e=>!r.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${r}`)}function l(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function u(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}t.fbContent=d,t.fbInternalOnly=function(e){return d({internal:e})},t.validateFbContentArgs=c,t.isInternal=l,t.hasEphemeralDiffNumber=function(){return Boolean(u())},t.getEphemeralDiffNumber=u,t.FbInternalOnly=function(e){return l()?e.children:null},t.OssOnly=function(e){return l()?null:e.children}},27312:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(o,i){function r(e){try{s(a.next(e))}catch(t){i(t)}}function d(e){try{s(a.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,d)}s((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.submitDiff=void 0;const o=n(11737);t.submitDiff=function(e){return a(this,void 0,void 0,(function*(){const{file_path:t,new_content:n,project_name:a,diff_number:i}=e;try{return yield o.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:t,new_content:n,project_name:a,diff_number:i}})}catch(r){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${r}`)}}))}},17483:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(o,i){function r(e){try{s(a.next(e))}catch(t){i(t)}}function d(e){try{s(a.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,d)}s((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getApi=t.docsets=void 0;const o=n(11737);t.docsets={BLOKS_CORE:"887372105406659"},t.getApi=function(e){return a(this,void 0,void 0,(function*(){const{name:t,framework:n,docset:a}=e;return yield o.call({module:"uidocs",api:"getApi",args:{name:t,framework:n,docset:a}})}))}}}]);