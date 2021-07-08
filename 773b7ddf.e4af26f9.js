(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{201:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(9),a=(r(0),r(314)),i={id:"fork-qna",title:"Swagger Codegen Fork: Q&A"},c={id:"fork-qna",title:"Swagger Codegen Fork: Q&A",description:"This document aims to answer some questions about the fork for historical reference, where these questions don't fit into other documents related to the project itself.",source:"@site/../docs/qna.md",permalink:"/docs/fork-qna",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/qna.md",lastUpdatedBy:"shartte",lastUpdatedAt:1623999955,sidebar:"docs",previous:{title:"Migrating from Swagger Codegen",permalink:"/docs/swagger-codegen-migration"},next:{title:"Release Summary",permalink:"/docs/release-summary"}},s=[{value:"Why was it decided to fork Swagger Codegen?",id:"why-was-it-decided-to-fork-swagger-codegen",children:[]},{value:"Are there any changes to the project license?",id:"are-there-any-changes-to-the-project-license",children:[]},{value:"I am currently using Swagger Codegen 2.x. How can I upgrade the generator to OpenAPI Generator?",id:"i-am-currently-using-swagger-codegen-2x-how-can-i-upgrade-the-generator-to-openapi-generator",children:[]},{value:"Who maintains this Q&A page?",id:"who-maintains-this-qa-page",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This document aims to answer some questions about the fork for historical reference, where these questions don't fit into other documents related to the project itself."),Object(a.b)("h2",{id:"why-was-it-decided-to-fork-swagger-codegen"},"Why was it decided to fork Swagger Codegen?"),Object(a.b)("p",null,"There are several reasons:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The founding members felt that Swagger Codegen 3.0.0 was diverging too much from the philosophy of Swagger Codegen 2.x."),Object(a.b)("li",{parentName:"ol"},"The founding members were concerned that the maintenance overhead of two separate branches (2.x, 3.x) would result in issues similar to those felt in the Python community."),Object(a.b)("li",{parentName:"ol"},"The founding members wanted a more rapid ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/OpenAPITools/openapi-generator/releases/"}),"release cycle")," (weekly patch release, monthly minor release) so users do not need to wait for several months to get a stable release."),Object(a.b)("li",{parentName:"ol"},"Having a community-driven version allows for innovation, reliability, and a ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/OpenAPITools/openapi-generator/blob/master/docs/roadmap.md"}),"roadmap")," owned by the community.")),Object(a.b)("h2",{id:"are-there-any-changes-to-the-project-license"},"Are there any changes to the project license?"),Object(a.b)("p",null,"No, OpenAPI Generator is still using the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.apache.org/licenses/LICENSE-2.0"}),"Apache license (version 2)"),"."),Object(a.b)("h2",{id:"i-am-currently-using-swagger-codegen-2x-how-can-i-upgrade-the-generator-to-openapi-generator"},"I am currently using Swagger Codegen 2.x. How can I upgrade the generator to OpenAPI Generator?"),Object(a.b)("p",null,"OpenAPI Generator is based on Swagger Codegen ",Object(a.b)("inlineCode",{parentName:"p"},"2.4.0-SNAPSHOT")," version so the migration should be relatively straightforward. Refer to the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/swagger-codegen-migration"}),"migration guide")," for more information. "),Object(a.b)("h2",{id:"who-maintains-this-qa-page"},"Who maintains this Q&A page?"),Object(a.b)("p",null,"This Q&A page is maintained by the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/core-team"}),"core team members"),". It is not maintained by any single person, nor do these Q&As represent the views of any individual or person."))}p.isMDXComponent=!0},314:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,h=d["".concat(i,".").concat(u)]||d[u]||g[u]||a;return r?o.a.createElement(h,c({ref:t},l,{components:r})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);