(self.webpackChunk_glitr_io_glitr_ui=self.webpackChunk_glitr_io_glitr_ui||[]).push([[179],{42126:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__(3012).configure)([__webpack_require__(92205),__webpack_require__(54666)],module,!1)},26663:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{parameters:()=>parameters});__webpack_require__(47941),__webpack_require__(82526),__webpack_require__(57327),__webpack_require__(38880),__webpack_require__(89554),__webpack_require__(54747),__webpack_require__(49337),__webpack_require__(33321),__webpack_require__(69070);var client_api=__webpack_require__(78880),esm=__webpack_require__(23827),parameters={actions:{argTypesRegex:"^on[A-Z].*"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,client_api.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,client_api.HZ)(loader,!1)}));case"parameters":return(0,client_api.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,client_api.My)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,(0,client_api.h1)(v,!1);default:return console.log(key+" was not supported :( !")}}))},76986:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__(3012)},49734:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,Primary:()=>Primary,Secondary:()=>Secondary,Large:()=>Large,Small:()=>Small});__webpack_require__(19601),__webpack_require__(24812),__webpack_require__(67294);var _Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(40171),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(85893);const __WEBPACK_DEFAULT_EXPORT__={title:"Example/Button",component:_Button__WEBPACK_IMPORTED_MODULE_3__.z,argTypes:{backgroundColor:{control:"color"}}};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.z,Object.assign({},args))};Template.displayName="Template";var Primary=Template.bind({});Primary.args={primary:!0,label:"Button"};var Secondary=Template.bind({});Secondary.args={label:"Button"};var Large=Template.bind({});Large.args={size:"large",label:"Button"};var Small=Template.bind({});Small.args={size:"small",label:"Button"},Primary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Secondary.parameters),Large.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Large.parameters),Small.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Small.parameters)},82857:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,LoggedIn:()=>LoggedIn,LoggedOut:()=>LoggedOut});__webpack_require__(19601),__webpack_require__(24812),__webpack_require__(67294);var _Header__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(15117),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(85893);const __WEBPACK_DEFAULT_EXPORT__={title:"Example/Header",component:_Header__WEBPACK_IMPORTED_MODULE_3__.h};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_3__.h,Object.assign({},args))};Template.displayName="Template";var LoggedIn=Template.bind({});LoggedIn.args={user:{}};var LoggedOut=Template.bind({});LoggedOut.args={},LoggedIn.parameters=Object.assign({storySource:{source:"(args) => <Header {...args} />"}},LoggedIn.parameters),LoggedOut.parameters=Object.assign({storySource:{source:"(args) => <Header {...args} />"}},LoggedOut.parameters)},44540:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoggedIn:()=>LoggedIn,LoggedOut:()=>LoggedOut,default:()=>Page_stories});__webpack_require__(19601),__webpack_require__(24812),__webpack_require__(67294);var prop_types=__webpack_require__(45697),prop_types_default=__webpack_require__.n(prop_types),Header=__webpack_require__(15117),injectStylesIntoStyleTag=__webpack_require__(93379),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),page=__webpack_require__(68403),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(page.Z,options);page.Z.locals;var jsx_runtime=__webpack_require__(85893),Page=function Page(_ref){var user=_ref.user,onLogin=_ref.onLogin,onLogout=_ref.onLogout,onCreateAccount=_ref.onCreateAccount;return(0,jsx_runtime.jsxs)("article",{children:[(0,jsx_runtime.jsx)(Header.h,{user,onLogin,onLogout,onCreateAccount}),(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsx)("h2",{children:"Pages in Storybook"}),(0,jsx_runtime.jsxs)("p",{children:["We recommend building UIs with a"," ",(0,jsx_runtime.jsx)("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer",children:(0,jsx_runtime.jsx)("strong",{children:"component-driven"})})," ","process starting with atomic components and ending with pages."]}),(0,jsx_runtime.jsx)("p",{children:"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"}),(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'}),(0,jsx_runtime.jsx)("li",{children:"Assemble data in the page component from your services. You can mock these services out using Storybook."})]}),(0,jsx_runtime.jsxs)("p",{children:["Get a guided tutorial on component-driven development at"," ",(0,jsx_runtime.jsx)("a",{href:"https://www.learnstorybook.com",target:"_blank",rel:"noopener noreferrer",children:"Learn Storybook"}),". Read more in the"," ",(0,jsx_runtime.jsx)("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer",children:"docs"}),"."]}),(0,jsx_runtime.jsxs)("div",{className:"tip-wrapper",children:[(0,jsx_runtime.jsx)("span",{className:"tip",children:"Tip"})," Adjust the width of the canvas with the"," ",(0,jsx_runtime.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("g",{fill:"none",fillRule:"evenodd",children:(0,jsx_runtime.jsx)("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"})})}),"Viewports addon in the toolbar"]})]})]})};Page.displayName="Page",Page.propTypes={user:prop_types_default().shape({}),onLogin:prop_types_default().func.isRequired,onLogout:prop_types_default().func.isRequired,onCreateAccount:prop_types_default().func.isRequired},Page.defaultProps={user:null},Page.__docgenInfo={description:"",methods:[],displayName:"Page",props:{user:{defaultValue:{value:"null",computed:!1},type:{name:"shape",value:{}},required:!1,description:""},onLogin:{type:{name:"func"},required:!0,description:""},onLogout:{type:{name:"func"},required:!0,description:""},onCreateAccount:{type:{name:"func"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Page.js"]={name:"Page",docgenInfo:Page.__docgenInfo,path:"src/stories/Page.js"});var Header_stories=__webpack_require__(82857);const Page_stories={title:"Example/Page",component:Page};var Template=function Template(args){return(0,jsx_runtime.jsx)(Page,Object.assign({},args))};Template.displayName="Template";var LoggedIn=Template.bind({});LoggedIn.args=Object.assign({},Header_stories.LoggedIn.args);var LoggedOut=Template.bind({});LoggedOut.args=Object.assign({},Header_stories.LoggedOut.args),LoggedIn.parameters=Object.assign({storySource:{source:"(args) => <Page {...args} />"}},LoggedIn.parameters),LoggedOut.parameters=Object.assign({storySource:{source:"(args) => <Page {...args} />"}},LoggedOut.parameters)},40171:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>Button});__webpack_require__(69600),__webpack_require__(19601),__webpack_require__(47941),__webpack_require__(82772),__webpack_require__(82526),__webpack_require__(67294);var prop_types=__webpack_require__(45697),prop_types_default=__webpack_require__.n(prop_types),injectStylesIntoStyleTag=__webpack_require__(93379),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),stories_button=__webpack_require__(3336),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(stories_button.Z,options);stories_button.Z.locals;var jsx_runtime=__webpack_require__(85893);function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Button=function Button(_ref){var primary=_ref.primary,backgroundColor=_ref.backgroundColor,size=_ref.size,label=_ref.label,props=_objectWithoutProperties(_ref,["primary","backgroundColor","size","label"]),mode=primary?"storybook-button--primary":"storybook-button--secondary";return(0,jsx_runtime.jsx)("button",Object.assign({type:"button",className:["storybook-button","storybook-button--".concat(size),mode].join(" "),style:backgroundColor&&{backgroundColor}},props,{children:label}))};Button.displayName="Button",Button.propTypes={primary:prop_types_default().bool,backgroundColor:prop_types_default().string,size:prop_types_default().oneOf(["small","medium","large"]),label:prop_types_default().string.isRequired,onClick:prop_types_default().func},Button.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0},Button.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:"What background color to use"},primary:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Is this the principal call to action on the page?"},size:{defaultValue:{value:"'medium'",computed:!1},type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1,description:"How large should the button be?"},onClick:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:"Optional click handler"},label:{type:{name:"string"},required:!0,description:"Button contents"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Button.js"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src/stories/Button.js"})},15117:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>Header});__webpack_require__(67294);var prop_types=__webpack_require__(45697),prop_types_default=__webpack_require__.n(prop_types),Button=__webpack_require__(40171),injectStylesIntoStyleTag=__webpack_require__(93379),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),header=__webpack_require__(25594),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(header.Z,options);header.Z.locals;var jsx_runtime=__webpack_require__(85893),Header=function Header(_ref){var user=_ref.user,onLogin=_ref.onLogin,onLogout=_ref.onLogout,onCreateAccount=_ref.onCreateAccount;return(0,jsx_runtime.jsx)("header",{children:(0,jsx_runtime.jsxs)("div",{className:"wrapper",children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,jsx_runtime.jsx)("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),(0,jsx_runtime.jsx)("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),(0,jsx_runtime.jsx)("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),(0,jsx_runtime.jsx)("h1",{children:"Acme"})]}),(0,jsx_runtime.jsx)("div",{children:user?(0,jsx_runtime.jsx)(Button.z,{size:"small",onClick:onLogout,label:"Log out"}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.z,{size:"small",onClick:onLogin,label:"Log in"}),(0,jsx_runtime.jsx)(Button.z,{primary:!0,size:"small",onClick:onCreateAccount,label:"Sign up"})]})})]})})};Header.displayName="Header",Header.propTypes={user:prop_types_default().shape({}),onLogin:prop_types_default().func.isRequired,onLogout:prop_types_default().func.isRequired,onCreateAccount:prop_types_default().func.isRequired},Header.defaultProps={user:null},Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{user:{defaultValue:{value:"null",computed:!1},type:{name:"shape",value:{}},required:!1,description:""},onLogin:{type:{name:"func"},required:!0,description:""},onLogout:{type:{name:"func"},required:!0,description:""},onCreateAccount:{type:{name:"func"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Header.js"]={name:"Header",docgenInfo:Header.__docgenInfo,path:"src/stories/Header.js"})},70436:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>Introduction_stories});__webpack_require__(19601),__webpack_require__(47941),__webpack_require__(82772),__webpack_require__(82526),__webpack_require__(67294);var esm=__webpack_require__(3905),blocks=__webpack_require__(63255);const code_brackets=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg",colors=__webpack_require__.p+"static/media/colors.a4bd0486.svg",comments=__webpack_require__.p+"static/media/comments.a3859089.svg",direction=__webpack_require__.p+"static/media/direction.b770f9af.svg",flow=__webpack_require__.p+"static/media/flow.edad2ac1.svg",assets_plugin=__webpack_require__.p+"static/media/plugin.d494b228.svg",repo=__webpack_require__.p+"static/media/repo.6d496322.svg",stackalt=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg";function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(blocks.h_,{title:"Example/Introduction",mdxType:"Meta"}),(0,esm.kt)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),(0,esm.kt)("h1",{id:"welcome-to-storybook"},"Welcome to Storybook"),(0,esm.kt)("p",null,"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",(0,esm.kt)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),(0,esm.kt)("p",null,"Browse example stories now by navigating to them in the sidebar.\nView their code in the ",(0,esm.kt)("inlineCode",{parentName:"p"},"src/stories")," directory to learn how they work.\nWe recommend building UIs with a ",(0,esm.kt)("a",{parentName:"p",href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer"},(0,esm.kt)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),(0,esm.kt)("div",{className:"subheading"},"Configure"),(0,esm.kt)("div",{className:"link-list"},(0,esm.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},(0,esm.kt)("img",{src:assets_plugin,alt:"plugin"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),(0,esm.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},(0,esm.kt)("img",{src:stackalt,alt:"Build"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"Build configuration"),"How to customize webpack and Babel")),(0,esm.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},(0,esm.kt)("img",{src:colors,alt:"colors"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"Styling"),"How to load and configure CSS libraries")),(0,esm.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},(0,esm.kt)("img",{src:flow,alt:"flow"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"Data"),"Providers and mocking for data libraries"))),(0,esm.kt)("div",{className:"subheading"},"Learn"),(0,esm.kt)("div",{className:"link-list"},(0,esm.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},(0,esm.kt)("img",{src:repo,alt:"repo"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"Storybook documentation"),"Configure, customize, and extend")),(0,esm.kt)("a",{className:"link-item",href:"https://www.learnstorybook.com",target:"_blank"},(0,esm.kt)("img",{src:direction,alt:"direction"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"In-depth guides"),"Best practices from leading teams")),(0,esm.kt)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},(0,esm.kt)("img",{src:code_brackets,alt:"code"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"GitHub project"),"View the source and add issues")),(0,esm.kt)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},(0,esm.kt)("img",{src:comments,alt:"comments"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"Discord chat"),"Chat with maintainers and the community"))),(0,esm.kt)("div",{className:"tip-wrapper"},(0,esm.kt)("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",(0,esm.kt)("code",null,"src/stories/Introduction.stories.mdx")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Example/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return(0,esm.kt)(blocks.aT,{mdxStoryNameToKey,mdxComponentMeta:componentMeta},(0,esm.kt)(MDXContent,null))}});const Introduction_stories=componentMeta},3336:(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(94015),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(23645),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n","",{version:3,sources:["webpack://./src/stories/button.css"],names:[],mappings:"AAAA;EACE,0EAA0E;EAC1E,gBAAgB;EAChB,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,YAAY;EACZ,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,6BAA6B;EAC7B,qDAAqD;AACvD;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB",sourcesContent:[".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},25594:(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(94015),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(23645),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".wrapper {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nsvg {\n  display: inline-block;\n  vertical-align: top;\n}\n\nh1 {\n  font-weight: 900;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\nbutton + button {\n  margin-left: 10px;\n}\n","",{version:3,sources:["webpack://./src/stories/header.css"],names:[],mappings:"AAAA;EACE,0EAA0E;EAC1E,2CAA2C;EAC3C,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB",sourcesContent:[".wrapper {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nsvg {\n  display: inline-block;\n  vertical-align: top;\n}\n\nh1 {\n  font-weight: 900;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\nbutton + button {\n  margin-left: 10px;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},68403:(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(94015),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(23645),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"section {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 48px 20px;\n  margin: 0 auto;\n  max-width: 600px;\n  color: #333;\n}\n\nh2 {\n  font-weight: 900;\n  font-size: 32px;\n  line-height: 1;\n  margin: 0 0 4px;\n  display: inline-block;\n  vertical-align: top;\n}\n\np {\n  margin: 1em 0;\n}\n\na {\n  text-decoration: none;\n  color: #1ea7fd;\n}\n\nul {\n  padding-left: 30px;\n  margin: 1em 0;\n}\n\nli {\n  margin-bottom: 8px;\n}\n\n.tip {\n  display: inline-block;\n  border-radius: 1em;\n  font-size: 11px;\n  line-height: 12px;\n  font-weight: 700;\n  background: #e7fdd8;\n  color: #66bf3c;\n  padding: 4px 12px;\n  margin-right: 10px;\n  vertical-align: top;\n}\n\n.tip-wrapper {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.tip-wrapper svg {\n  display: inline-block;\n  height: 12px;\n  width: 12px;\n  margin-right: 4px;\n  vertical-align: top;\n  margin-top: 3px;\n}\n\n.tip-wrapper svg path {\n  fill: #1ea7fd;\n}\n","",{version:3,sources:["webpack://./src/stories/page.css"],names:[],mappings:"AAAA;EACE,0EAA0E;EAC1E,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,eAAe;EACf,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;AACf",sourcesContent:["section {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 48px 20px;\n  margin: 0 auto;\n  max-width: 600px;\n  color: #333;\n}\n\nh2 {\n  font-weight: 900;\n  font-size: 32px;\n  line-height: 1;\n  margin: 0 0 4px;\n  display: inline-block;\n  vertical-align: top;\n}\n\np {\n  margin: 1em 0;\n}\n\na {\n  text-decoration: none;\n  color: #1ea7fd;\n}\n\nul {\n  padding-left: 30px;\n  margin: 1em 0;\n}\n\nli {\n  margin-bottom: 8px;\n}\n\n.tip {\n  display: inline-block;\n  border-radius: 1em;\n  font-size: 11px;\n  line-height: 12px;\n  font-weight: 700;\n  background: #e7fdd8;\n  color: #66bf3c;\n  padding: 4px 12px;\n  margin-right: 10px;\n  vertical-align: top;\n}\n\n.tip-wrapper {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.tip-wrapper svg {\n  display: inline-block;\n  height: 12px;\n  width: 12px;\n  margin-right: 4px;\n  vertical-align: top;\n  margin-top: 3px;\n}\n\n.tip-wrapper svg path {\n  fill: #1ea7fd;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},54666:(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./Button.stories.js":49734,"./Header.stories.js":82857,"./Page.stories.js":44540};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=54666},92205:(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./Introduction.stories.mdx":70436};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=92205},24654:()=>{}},__webpack_require__=>{"use strict";var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[58],(()=>(__webpack_exec__(40116),__webpack_exec__(94054),__webpack_exec__(76986),__webpack_exec__(12386),__webpack_exec__(4379),__webpack_exec__(59746),__webpack_exec__(84873),__webpack_exec__(34125),__webpack_exec__(81953),__webpack_exec__(22609),__webpack_exec__(26663),__webpack_exec__(42126))));__webpack_require__.O()}]);
//# sourceMappingURL=main.54c0a9c6.iframe.bundle.js.map