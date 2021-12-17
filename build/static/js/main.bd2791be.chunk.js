(this["webpackJsonpreact-boilerplate-material"]=this["webpackJsonpreact-boilerplate-material"]||[]).push([[2],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return O}));var a=n(14),r=n.n(a),c=n(27),i=n(50),o=n.n(i),s=n(41),l=n(44),u=n(4),d=n(147),p=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d.a.post("/auth/login",t,{showSpinner:!0}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e,t,n,a){return function(){var n=Object(c.a)(r.a.mark((function n(c){var i,l,d,b,j,O;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c({type:s.a.LOGIN_REQUEST}),n.prev=1,n.next=4,p({username:e,password:t});case 4:i=n.sent,console.log(i),l=i.data,d=l.user,b=l.fullname,j=l.avatar,O=l.token,o.a.set("accessToken",O),c({type:s.a.LOGIN_SUCCESS,payload:{user:d,fullname:b,avatar:j,token:O,role:"ADMIN"}}),a.push(u.c.ROOT),console.log("alo"),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(1),console.error(n.t0);case 16:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(e){return n.apply(this,arguments)}}()},j=function(){return function(e){l.a.logOut(),e({type:s.a.LOGOUT})}},O=function(e,t){return function(n){n({type:s.a.SILENT_LOGIN,payload:{user:e,role:t}})}}},105:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l}));var a=n(50),r=n.n(a),c=n(162),i=n.n(c),o=n(47);var s=i.a.create({baseURL:"http://doanky5.huyhoangdev.engineer/api",showSpinner:!1});function l(e){var t=0;function n(){0===(t-=1)&&e.dispatch(Object(o.d)(!1))}s.interceptors.request.use((function(n){n.showSpinner&&(t+=1,e.dispatch(Object(o.d)(!0)));var a=r.a.get("accessToken");return a&&(n.headers.Authorization="Bearer ".concat(a)),n}),(function(e){return e.config.showSpinner&&n(),Promise.reject(e)})),s.interceptors.response.use((function(e){var t;return(null===(t=e.config)||void 0===t?void 0:t.showSpinner)&&n(),e.data}),(function(t){var a,r;return(t&&(null===(a=t.config)||void 0===a?void 0:a.showSpinner)||"ECONNABORTED"===t.code)&&n(),"ECONNABORTED"===t.code&&e.dispatch(Object(o.d)(!1)),null===(r=t.response)||void 0===r||r.status,Promise.reject(t)}))}},147:function(e,t,n){"use strict";var a=n(14),r=n.n(a),c=n(27),i=n(111),o=n(264),s=n(105),l=function(){function e(){Object(i.a)(this,e),this.api=void 0,this.api=s.a}return Object(o.a)(e,[{key:"get",value:function(){var e=Object(c.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.api.get(t,n));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=Object(c.a)(r.a.mark((function e(t,n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.api.post(t,n,a));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"put",value:function(){var e=Object(c.a)(r.a.mark((function e(t,n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.api.put(t,n,a));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"patch",value:function(){var e=Object(c.a)(r.a.mark((function e(t,n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.api.patch(t,n,a));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(c.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.api.delete(t,n));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),u=new l;t.a=u},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(139),r=n(79),c=n(4);var i=function(e,t){var n=r.a.getState().auth.role||"";return!!n&&function(e){var t=new a.b(a.a),n=t.can,r=t.cannot,i=t.build;switch(e){case c.e.ADMIN:n(["create","update","view","delete"],"all");break;case c.e.LEAD:n("view",c.a.PLAY_BACKGROUND),n("view",c.a.DASHBOARD),n("view",c.a.PRODUCT),n("view",c.a.PRODUCT_LIST),n("view",c.a.KANBAN),n("view",c.a.USERS);break;case c.e.GUEST:r(["create","update","view","delete"],"all")}return i()}(n).can(e,t)}},257:function(e){e.exports=JSON.parse('{"PROFILE":"Profile","LOGOUT":"Logout"}')},258:function(e){e.exports=JSON.parse('{"PROFILE":"Tai Khoan","LOGOUT":"Tho\xe1t ra"}')},316:function(e){e.exports=JSON.parse('{"name":"react-boilerplate-material","version":"1.1.1","private":true,"dependencies":{"@casl/ability":"^5.3.1","@material-ui/core":"^4.11.0","@material-ui/icons":"^4.9.1","@material-ui/lab":"^4.0.0-alpha.57","@testing-library/jest-dom":"^5.11.6","@testing-library/react":"^11.2.0","@testing-library/user-event":"^12.2.2","@types/jest":"^26.0.15","@types/node":"^12.19.5","@types/react":"^16.9.56","@types/react-dom":"^16.9.9","apexcharts":"^3.27.3","auth0-js":"^9.14.0","autosuggest-highlight":"^3.1.1","aws-sdk":"^2.1046.0","axios":"^0.21.0","clsx":"^1.1.1","env-cmd":"^10.1.0","formidable-serverless":"^1.1.1","i18next":"^19.8.4","i18next-browser-languagedetector":"^6.0.1","js-cookie":"^3.0.1","lodash":"^4.17.20","notistack":"^1.0.3","react":"16.14.0","react-apexcharts":"^1.3.9","react-aws-s3-typescript":"^1.1.3","react-dom":"16.14.0","react-error-boundary":"^3.0.2","react-i18next":"^11.7.3","react-portal":"^4.2.1","react-redux":"^7.2.2","react-router":"^5.2.0","react-router-dom":"^5.2.0","react-scripts":"^4.0.0","react-window":"^1.8.6","redux":"^4.0.5","redux-devtools-extension":"^2.13.8","redux-persist":"^6.0.0","redux-thunk":"^2.3.0","reselect":"^4.0.0","source-map-explorer":"^2.5.2","typescript":"^4.0.5","wavesurfer.js":"^4.6.0","web-vitals":"^0.2.4"},"scripts":{"start":"react-scripts start","build":"react-scripts build","build:dev":"env-cmd -f .env.development react-scripts build","test":"react-scripts test","eject":"react-scripts eject","lint":"eslint --ext .ts,.tsx src --color","format":"prettier --write \\"src/**/*.{ts,tsx}\\"","isready":"npm run format && npm run lint && npm run build","docker":"docker build -t react-docker .","react-docker":"docker run -p 3000:80 react-docker","analyze":"source-map-explorer \'build/static/js/*.js\'"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"@types/auth0-js":"^9.14.2","@types/autosuggest-highlight":"^3.1.1","@types/js-cookie":"^3.0.1","@types/lodash":"^4.14.165","@types/react-portal":"^4.0.2","@types/react-redux":"^7.1.11","@types/react-router-dom":"^5.1.6","@types/react-window":"^1.8.2","@types/wavesurfer.js":"^3.3.2","@typescript-eslint/eslint-plugin":"^4.8.1","@typescript-eslint/parser":"^4.8.1","babel-eslint":"^10.1.0","eslint":"^7.13.0","eslint-config-airbnb":"^18.2.1","eslint-config-airbnb-typescript":"^12.0.0","eslint-config-airbnb-typescript-prettier":"^4.0.0","eslint-config-prettier":"^6.15.0","eslint-config-react-app":"^6.0.0","eslint-import-resolver-typescript":"^2.3.0","eslint-loader":"^4.0.2","eslint-plugin-flowtype":"^5.2.0","eslint-plugin-import":"^2.22.1","eslint-plugin-jsx-a11y":"^6.4.1","eslint-plugin-prettier":"^3.1.4","eslint-plugin-react":"^7.21.5","eslint-plugin-react-hooks":"^4.2.0","husky":"^4.3.0","lint-staged":"^10.5.2","prettier":"^2.1.2","prettier-eslint":"^11.0.0","prettier-eslint-cli":"^5.0.0","pretty-quick":"^3.1.0"},"husky":{"hooks":{"pre-commit":["lint-staged"]}},"lint-staged":{"*.{ts,tsx}":["npm run lint","prettier --write"]}}')},325:function(e,t,n){},326:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(11),c=n.n(r),i=n(21),o=n(35),s=n(8),l=n(2),u={modeTheme:"light",language:"en",setModeTheme:function(){},setLanguage:function(){}},d=Object(a.createContext)(u),p=function(e,t){var n=t.type,a=t.payload;switch(n){case"SET_MODE_THEME":return Object(s.a)(Object(s.a)({},e),{},{modeTheme:a});case"SET_LANGUAGE":return Object(s.a)(Object(s.a)({},e),{},{language:a});default:return e}},b=function(e){var t=e.children,n=Object(a.useReducer)(p,u),r=Object(o.a)(n,2),c=r[0],i=r[1];return Object(l.jsx)(d.Provider,{value:Object(s.a)(Object(s.a)({},c),{},{setModeTheme:function(e){i({type:"SET_MODE_THEME",payload:e})},setLanguage:function(e){i({type:"SET_LANGUAGE",payload:e})}}),children:t})},j=function(){return Object(a.useContext)(d)},O=n(79),f=n(138),h=n(256),g=n(80),m=n(257),x=n(258);f.a.use(h.a).use(g.e).init({resources:{en:{translations:m},vn:{translations:x}},fallbackLng:"en",debug:!0,ns:["translations"],defaultNS:"translations",keySeparator:!1,interpolation:{escapeValue:!1}});f.a;var v=n(105),y=n(45),A=n(371),S=n(106),E=n(370),R=n(44),T=n(100),N=function(e){var t=e.children,n=Object(i.b)();return Object(a.useEffect)((function(){!function(){if(R.a.handleAuthentication(),R.a.isAuthenticated()){var e={username:"admin",roleUser:"ADMIN"};n(Object(T.c)(e.username,e.roleUser))}}()}),[n]),Object(l.jsx)(l.Fragment,{children:t})},L=n(330),w=n(284),D=n(282),k=n(351),C=n(51),I=Object(C.a)((function(e){return e.app}),(function(e){return e.isLoading})),G=Object(C.a)((function(e){return e.app}),(function(e){return e.dialog})),_=Object(C.a)((function(e){return e.app}),(function(e){return e.notifications})),U=Object(L.a)((function(e){return Object(w.a)({root:{width:"20%",backgroundColor:e.palette.primary.light,padding:"8px 16px","& span":{display:"block"},"& > * + *":{marginTop:e.spacing(1)}},backdrop:{zIndex:e.zIndex.modal+1,color:"#fff"}})}));function P(){var e=U(),t=Object(i.c)(I);return Object(l.jsx)(D.a,{className:e.backdrop,open:t,children:Object(l.jsxs)("div",{className:e.root,children:[Object(l.jsx)("span",{children:"Loading..."}),Object(l.jsx)(k.a,{})]})})}var B=n(359),M=n(352),z=n(358),H=n(356),K=n(357),Y=n(355),F=n(142),W=n(47);function q(){var e=Object(i.b)(),t=Object(i.c)(G).isShow,n=function(){e(Object(W.c)(!1))};return Object(l.jsx)("div",{children:Object(l.jsxs)(M.a,{open:t,onClose:n,fullWidth:!0,children:[Object(l.jsx)(Y.a,{children:Object(l.jsx)(F.a,{variant:"h4",component:"div",children:"Error"})}),Object(l.jsx)(H.a,{children:Object(l.jsx)(K.a,{children:"Something went wrong from systems!"})}),Object(l.jsx)(z.a,{children:Object(l.jsx)(B.a,{onClick:n,color:"primary",autoFocus:!0,children:"Close"})})]})})}var V=n(140),J=[],Q=function(){var e=Object(i.b)(),t=Object(i.c)(_),n=Object(S.b)().enqueueSnackbar;return Object(a.useEffect)((function(){Object.values(t).forEach((function(t){var a;J.includes(t.key)||(n(t.message,{key:t.key,variant:t.variant,onExited:function(t,n){var a;e(Object(W.b)(n)),a=n,J=Object(V.a)(J.filter((function(e){return a!==e})))}}),a=t.key,J=[].concat(Object(V.a)(J),[a]))}))}),[t,n,e]),null},$=n(279),X=n(87),Z=Object($.a)({palette:{type:"light",common:{white:"#fff"},action:{active:X.a.blueGrey[600]},background:{default:"#fafafa",paper:"#fff"},primary:{light:"#1976d2 ",main:"#3f51b5",dark:"#303f9f",contrastText:"#fff"},secondary:{light:"#ff4081",main:"#1976d2",dark:"#c51162",contrastText:"#fff"},text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"}},overrides:{}}),ee=Object($.a)({palette:{type:"dark",common:{black:"#000",white:"#fff"},background:{default:"#121212",paper:"#424242"},primary:{light:"#333",main:"#90caf9",dark:"#303f9f",contrastText:"#fff"},secondary:{light:"#ff4081",main:"#90caf9",dark:"#c51162",contrastText:"#fff"},text:{primary:"#fff",secondary:"#fff",disabled:"rgba(255, 255, 255, 0.5)",hint:"rgba(255, 255, 255, 0.5)"}},overrides:{}}),te={h1:{fontWeight:500,fontSize:35,letterSpacing:"-0.24px"},h2:{fontWeight:500,fontSize:29,letterSpacing:"-0.24px"},h3:{fontWeight:500,fontSize:24,letterSpacing:"-0.06px"},h4:{fontWeight:500,fontSize:20,letterSpacing:"-0.06px"},h5:{fontWeight:500,fontSize:16,letterSpacing:"-0.05px"},h6:{fontWeight:500,fontSize:14,letterSpacing:"-0.05px"},overline:{fontWeight:500}},ne=[Z,ee],ae=function(e){return Object($.b)(Object(s.a)(Object(s.a)({},ne[e]),{},{typography:Object(s.a)({},te)}))},re=n(4),ce=n(12),ie=n(36),oe=n(3),se=n(369),le=n(14),ue=n.n(le),de=n(27),pe=n(265),be=function(e){var t=e.children,n=Object(a.useState)(0),r=Object(o.a)(n,2),c=r[0],i=r[1],s=Object(a.useCallback)(function(){var e=Object(de.a)(ue.a.mark((function e(t,n){var a;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={level:"ERROR",datetime:(new Date).toUTCString(),os:"Window",description:"platform.description",userId:1,error:JSON.stringify(t),componentStack:JSON.stringify(n),location:window.location.href,version:"1.0.0"},localStorage.setItem("errorLog",JSON.stringify(a));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[]);return Object(a.useEffect)((function(){function e(){return(e=Object(de.a)(ue.a.mark((function e(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.getItem("errorLog")&&s();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),window.onerror=function(){var e=Object(de.a)(ue.a.mark((function e(t,n,a,r,c){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(t,null===c||void 0===c?void 0:c.stack);case 1:case"end":return e.stop()}}),e)})));return function(t,n,a,r,c){return e.apply(this,arguments)}}(),function(){window.onerror=null}}),[s]),Object(l.jsx)(pe.ErrorBoundary,{resetKeys:[c],FallbackComponent:function(e){var t=e.resetErrorBoundary;return Object(l.jsxs)(M.a,{onClose:t,fullWidth:!0,open:!0,children:[Object(l.jsx)(Y.a,{children:Object(l.jsx)(F.a,{variant:"h4",children:"Error"})}),Object(l.jsx)(H.a,{children:Object(l.jsx)(K.a,{children:"Something went wrong!"})}),Object(l.jsx)(z.a,{children:Object(l.jsx)(B.a,{onClick:t,color:"primary",autoFocus:!0,children:"Close"})})]})},onReset:function(){return i((function(e){return e+1}))},children:t})},je=n(362),Oe=n(363),fe=n(332),he=n(361),ge=n(117),me=n.n(ge),xe=n(135),ve=n.n(xe),ye=n(136),Ae=n.n(ye),Se=n(269),Ee=n.n(Se),Re=n(267),Te=n.n(Re),Ne=n(266),Le=n.n(Ne),we=n(268),De=n.n(we),ke=[{subheader:"Application",items:[{title:"Report",href:re.c.DASHBOARD,icon:Le.a,label:re.a.DASHBOARD},{title:"Playbackground",href:re.c.PLAY_BACKGROUND,icon:Te.a,label:re.a.PLAY_BACKGROUND}]},{subheader:"Dashboard",items:[{title:"Product",icon:ve.a,href:re.c.PRODUCT,label:re.a.PRODUCT,items:[{title:"Add Product",icon:me.a,href:re.c.PRODUCT_ADD,label:re.a.PRODUCT_ADD},{title:"List Product",icon:Ae.a,href:re.c.PRODUCT_LIST,label:re.a.PRODUCT_LIST}]},{title:"Category",icon:ve.a,href:re.c.CATEGORY,label:re.a.CATEGORY,items:[{title:"Add Category",icon:me.a,href:re.c.CATEGORY_ADD,label:re.a.CATEGORY_ADD},{title:"List Category",icon:Ae.a,href:re.c.CATEGORY_LIST,label:re.a.CATEGORY_LIST}]},{title:"Kanban",href:re.c.KANBAN,icon:De.a,label:re.a.KANBAN}]},{subheader:"Users",items:[{title:"Users",icon:Ee.a,href:re.c.USERS,label:re.a.USERS}]}],Ce=n(331),Ie=n(360),Ge=n(180),_e=n(329),Ue=n(113),Pe=n.n(Ue),Be=n(270),Me=n.n(Be),ze=Object(L.a)((function(e){return{drawer:{width:"".concat("240","px"),flexShrink:0},drawerPaper:{width:"".concat("240","px"),paddingBottom:50,backgroundColor:e.palette.background.paper},drawerHeader:Object(s.a)(Object(s.a)({display:"flex",alignItems:"center",justifyContent:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{fontSize:20,"& img":{width:36,height:36,marginRight:16}}),item:{display:"block",paddingTop:0,paddingBottom:0},itemLeaf:{display:"flex",paddingTop:0,paddingBottom:0},button:{color:e.palette.text.secondary,padding:"10px 8px",justifyContent:"flex-start",textTransform:"none",letterSpacing:0,width:"100%"},buttonLeaf:{display:"flex",color:e.palette.text.secondary,padding:"10px 8px",justifyContent:"flex-start",textTransform:"none",letterSpacing:0,width:"100%",fontWeight:e.typography.fontWeightRegular,"&.depth-0":{"& $title":{fontWeight:e.typography.fontWeightMedium}},"&:hover":{textDecoration:"none"}},icon:{display:"flex",alignItems:"center",marginRight:e.spacing(1)},title:{marginRight:"auto"},active:{color:e.palette.secondary.main,"& $title":{fontWeight:e.typography.fontWeightMedium},"& $icon":{color:e.palette.secondary.main}},navBar_link:{color:"inherit",display:"flex",justifyContent:"center",textDecoration:"none"},version:{fontSize:12}}}));function He(e){var t=e.title,n=e.icon,r=e.open,c=void 0!==r&&r,i=e.children,s=e.style,u=ze(),d=Object(a.useState)(c),p=Object(o.a)(d,2),b=p[0],j=p[1];return Object(l.jsxs)(Ce.a,{className:Object(oe.a)(u.item),disableGutters:!0,children:[Object(l.jsxs)(B.a,{className:u.button,onClick:function(){j((function(e){return!e}))},style:s,children:[n&&Object(l.jsx)(n,{className:u.icon,size:"20"}),Object(l.jsx)("span",{className:u.title,children:t}),b?Object(l.jsx)(Me.a,{}):Object(l.jsx)(Pe.a,{})]}),Object(l.jsx)(_e.a,{in:b,children:i})]},t)}var Ke=Object(a.memo)(He),Ye=function(e){var t=e.depth,n=e.icon,a=e.title,r=e.open,c=e.href,i=e.label,o=e.isExternalLink,s=void 0!==o&&o,u=e.children,d=ze(),p=24;t>0&&(p=40+8*t);var b={paddingLeft:p};return u?Object(l.jsx)(Ke,{title:a,icon:n,open:r,style:b,children:u}):Object(l.jsx)(Ce.a,{className:Object(oe.a)(d.itemLeaf),disableGutters:!0,children:Object(Ge.a)("view",i||"")?Object(l.jsx)(l.Fragment,{children:s?Object(l.jsxs)(Ie.a,{href:c,target:"_blank",style:b,className:Object(oe.a)(d.buttonLeaf,"depth-".concat(t)),children:[n&&Object(l.jsx)(n,{className:d.icon,size:"20"}),Object(l.jsx)("span",{className:d.title,children:a})]}):Object(l.jsxs)(B.a,{activeClassName:d.active,className:Object(oe.a)(d.buttonLeaf,"depth-".concat(t)),component:y.c,exact:!0,style:b,to:c,children:[n&&Object(l.jsx)(n,{className:d.icon,size:"20"}),Object(l.jsx)("span",{className:d.title,children:a})]})}):null},a)};function Fe(e){var t,n=e.isDrawer,a=ze(),r=Object(ce.h)(),c=function(e){var t=e.items,n=e.pathname,a=e.depth;return Object(l.jsx)(fe.a,{disablePadding:!0,children:null===t||void 0===t?void 0:t.reduce((function(e,t){return i({acc:e,curr:t,pathname:n,depth:a})}),[])})},i=function(e){var t=e.acc,n=e.curr,a=e.pathname,r=e.depth,i=void 0===r?0:r,o=n.title+i;if(n.items){var s=Object(ce.f)(a,{path:n.href,exact:!1});t.push(Object(l.jsx)(Ye,{depth:i,icon:n.icon,open:Boolean(s),title:n.title,href:n.href,label:n.label,isExternalLink:n.isExternalLink,children:c({depth:i+1,pathname:a,items:n.items})},"multi-".concat(o)))}else t.push(Object(l.jsx)(Ye,{depth:i,href:n.href,icon:n.icon,title:n.title,label:n.label,isExternalLink:n.isExternalLink},"alone-".concat(o)));return t};return Object(l.jsxs)(je.a,{className:a.drawer,variant:"persistent",anchor:"left",open:n,classes:{paper:a.drawerPaper},children:[Object(l.jsx)("div",{className:a.drawerHeader,children:Object(l.jsxs)(y.b,{to:re.c.ROOT,className:a.navBar_link,children:[Object(l.jsx)("img",{src:"/assets/images/logo.png",alt:"Logo",title:"logo"}),Object(l.jsxs)("div",{children:["Material UI ",Object(l.jsx)("br",{}),Object(l.jsxs)("span",{className:a.version,children:["v.",re.f.version]})]})]})}),Object(l.jsx)(Oe.a,{}),(t=ke,Object(l.jsx)(l.Fragment,{children:t.map((function(e){return Object(l.jsx)(fe.a,{subheader:Object(l.jsx)(he.a,{disableSticky:!0,children:e.subheader}),children:c({items:e.items,pathname:r.pathname})},e.subheader)}))}))]})}var We=Object(a.memo)(Fe),qe=n(366),Ve=n(367),Je=n(364),Qe=n(368),$e=n(276),Xe=n.n($e),Ze=n(277),et=n.n(Ze),tt=n(278),nt=n.n(tt),at=n(341),rt=n(365),ct=n(273),it=n.n(ct),ot=(Object(C.a)((function(e){return e.app}),(function(e){return e.isLoading})),Object(C.a)((function(e){return e.auth}),(function(e){return e.user})),Object(C.a)((function(e){return e.auth}),(function(e){return e.role})));function st(e){var t=Object.assign({},e),n=Object(A.a)().t,r=Object(i.b)(),c=Object(ce.g)(),s=Object(i.c)(ot),u=Object(a.useState)(null),d=Object(o.a)(u,2),p=d[0],b=d[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Je.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){b(e.currentTarget)},color:"inherit",children:Object(l.jsx)(it.a,{})}),Object(l.jsxs)(at.a,{id:"menu-appbar",anchorEl:p,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(p),onClose:function(){b(null)},children:[Object(l.jsx)("div",{className:t.textRole,children:s}),Object(l.jsx)(Oe.a,{}),Object(l.jsx)(rt.a,{children:"My account"}),Object(l.jsx)(rt.a,{className:t.menuProfile,onClick:function(){r(Object(T.b)()),c.push(re.c.LOGIN),b(null)},children:n("LOGOUT")})]})]})}var lt=Object(a.memo)(st);function ut(e){var t=Object.assign({},e),n=Object(a.useState)(null),r=Object(o.a)(n,2),c=r[0],i=r[1],s=j(),u=s.setLanguage,d=s.language,p=function(e){return function(){u(e),i(null)}};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(B.a,{className:t.menuLanguage,"aria-controls":"simple-menu",title:"Change Language","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},children:[function(){switch(d){case re.b.ENGLISH:return"ENGLISH";case re.b.VIETNAMESE:return"VIETNAMESE";default:return null}}()," ",Object(l.jsx)(Pe.a,{})]}),Object(l.jsxs)(at.a,{id:"simple-menu",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:function(){i(null)},children:[Object(l.jsx)(rt.a,{selected:d===re.b.ENGLISH,onClick:p(re.b.ENGLISH),children:"English"}),Object(l.jsx)(rt.a,{selected:d===re.b.VIETNAMESE,onClick:p(re.b.VIETNAMESE),children:"Vietnamese"})]})]})}var dt=Object(a.memo)(ut),pt=n(274),bt=n.n(pt),jt=n(275),Ot=n.n(jt);function ft(){var e=j(),t=e.modeTheme,n=e.setModeTheme;return Object(l.jsx)(Je.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",title:"Change Theme",onClick:function(){var e=t===re.d.LIGHT?re.d.DARK:re.d.LIGHT;n(e)},children:t===re.d.LIGHT?Object(l.jsx)(bt.a,{}):Object(l.jsx)(Ot.a,{})})}var ht=Object(a.memo)(ft),gt=n(16),mt=Object(L.a)((function(e){return{appBar:{backgroundColor:e.palette.primary.light,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat("240","px)"),marginLeft:"".concat("240","px"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},search:Object(ie.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(gt.d)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(gt.d)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"50%"},e.breakpoints.down("sm"),{width:"100%"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},grow:{flexGrow:1},menuLanguage:{color:"#fff"},menuProfile:{minWidth:115},topBar_setting:Object(ie.a)({},e.breakpoints.down("sm"),{display:"none"}),textRole:{padding:"6px 16px",marginBottom:6,fontSize:"1rem"}}}));function xt(e){var t=e.isDrawer,n=e.handleToogleDrawer,a=mt();return Object(l.jsx)(qe.a,{position:"fixed",className:Object(oe.a)(a.appBar,Object(ie.a)({},a.appBarShift,t)),children:Object(l.jsxs)(Ve.a,{children:[Object(l.jsx)(Je.a,{color:"inherit","aria-label":"open drawer",edge:"start",className:Object(oe.a)(a.menuButton),children:Object(l.jsx)(Xe.a,{})}),Object(l.jsx)(Je.a,{color:"inherit","aria-label":"open drawer",onClick:n,edge:"start",className:Object(oe.a)(a.menuButton),children:Object(l.jsx)(et.a,{})}),Object(l.jsxs)("div",{className:a.search,children:[Object(l.jsx)("div",{className:a.searchIcon,children:Object(l.jsx)(nt.a,{})}),Object(l.jsx)(Qe.a,{placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"}})]}),Object(l.jsx)("div",{className:a.grow}),Object(l.jsxs)("div",{className:a.topBar_setting,children:[Object(l.jsx)(dt,Object(s.a)({},a)),Object(l.jsx)(ht,{}),Object(l.jsx)(lt,Object(s.a)({},a))]})]})})}var vt=Object(a.memo)(xt),yt=Object(L.a)((function(e){return{root:{display:"flex"},content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:"-".concat("240","px")},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},toolbar:Object(s.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar)}})),At=function(e){var t=e.children,n=yt(),r=Object(a.useState)(!0),c=Object(o.a)(r,2),i=c[0],s=c[1],u=Object(a.useCallback)((function(){s(!i)}),[i]);return Object(l.jsxs)("div",{className:n.root,children:[Object(l.jsx)(se.a,{}),Object(l.jsx)(vt,{isDrawer:i,handleToogleDrawer:u}),Object(l.jsx)(We,{isDrawer:i}),Object(l.jsxs)("main",{className:Object(oe.a)(n.content,Object(ie.a)({},n.contentShift,i)),children:[Object(l.jsx)("div",{className:n.toolbar}),Object(l.jsx)(be,{children:t})]})]})},St=function(e){var t=e.children;return R.a.getAccessToken()?Object(l.jsx)(l.Fragment,{children:t}):Object(l.jsx)(ce.a,{to:re.c.LOGIN})},Et=function(e){var t=e.children;return R.a.getAccessToken()?Object(l.jsx)(ce.a,{to:re.c.ROOT}):Object(l.jsx)(l.Fragment,{children:t})},Rt=function(e){var t=e.children,n=e.requireRoles,r=void 0===n?[]:n,c=Object(ce.g)(),o=Object(i.c)(ot);return Object(a.useEffect)((function(){o&&0!==r.length&&(r.includes(o)||c.replace(re.c.ERROR_403))}),[c,o,r]),Object(l.jsx)(l.Fragment,{children:t})},Tt=Object(a.lazy)((function(){return n.e(12).then(n.bind(null,878))})),Nt=Object(a.lazy)((function(){return Promise.all([n.e(14),n.e(18)]).then(n.bind(null,879))})),Lt=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(9)]).then(n.bind(null,873))})),wt=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,874))})),Dt=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(16)]).then(n.bind(null,875))})),kt=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(11),n.e(17)]).then(n.bind(null,876))})),Ct=Object(a.lazy)((function(){return n.e(15).then(n.bind(null,880))})),It=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,881))})),Gt=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(10),n.e(19)]).then(n.bind(null,871))})),_t=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,877))})),Ut=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,882))})),Pt=[{exact:!0,path:"/",component:function(){return Object(l.jsx)(ce.a,{to:re.c.DASHBOARD})}},{exact:!0,path:re.c.ERROR_404,component:Tt},{exact:!0,guard:Et,path:re.c.LOGIN,component:It},{exact:!0,path:re.c.ERROR_403,component:Nt},{path:"/",guard:St,layout:At,routes:[{exact:!0,path:re.c.DASHBOARD,component:kt,requireRoles:[re.e.ADMIN,re.e.LEAD]},{exact:!0,path:re.c.PLAY_BACKGROUND,component:Ct,requireRoles:[re.e.ADMIN,re.e.LEAD]},{exact:!0,path:re.c.PRODUCT_LIST,component:wt,requireRoles:[re.e.ADMIN,re.e.LEAD]},{exact:!0,path:re.c.PRODUCT_ADD,component:Lt,requireRoles:[re.e.ADMIN]},{exact:!0,path:re.c.CATEGORY_LIST,component:_t,requireRoles:[re.e.ADMIN,re.e.LEAD]},{exact:!0,path:re.c.CATEGORY_ADD,component:Ut,requireRoles:[re.e.ADMIN]},{exact:!0,path:re.c.KANBAN,component:Gt,requireRoles:[re.e.ADMIN,re.e.LEAD]},{exact:!0,path:re.c.USERS,component:Dt,requireRoles:[re.e.ADMIN,re.e.LEAD]},{component:function(){return Object(l.jsx)(ce.a,{to:re.c.ERROR_404})}}]},{path:"*",routes:[{exact:!0,path:"/app",component:At},{component:function(){return Object(l.jsx)(ce.a,{to:re.c.ERROR_404})}}]}],Bt=function e(t){return Object(l.jsx)(l.Fragment,{children:t?Object(l.jsx)(a.Suspense,{fallback:Object(l.jsx)("div",{}),children:Object(l.jsx)(ce.d,{children:t.map((function(t,n){var r=t.guard||a.Fragment,c=t.layout||a.Fragment,i=t.component,o=t.requireRoles||[];return Object(l.jsx)(ce.b,{path:t.path,exact:t.exact,render:function(n){return Object(l.jsx)(r,{children:Object(l.jsx)(c,{children:t.routes?e(t.routes):Object(l.jsx)(Rt,{requireRoles:o,children:Object(l.jsx)(i,Object(s.a)({},n))})})})}},"routes-".concat(n))}))})}):null})};var Mt=function(){return Bt(Pt)};var zt=function(){var e=Object(A.a)().i18n,t=j(),n=t.modeTheme,r=t.language,c=n===re.d.LIGHT?0:1;return Object(a.useEffect)((function(){e.changeLanguage(r)}),[r,e]),Object(l.jsx)(E.a,{theme:ae(c),children:Object(l.jsx)(y.a,{children:Object(l.jsx)(N,{children:Object(l.jsxs)(S.a,{autoHideDuration:"2000",anchorOrigin:{vertical:"bottom",horizontal:"center"},maxSnack:"3",children:[Object(l.jsx)(P,{}),Object(l.jsx)(q,{}),Object(l.jsx)(Mt,{}),Object(l.jsx)(Q,{})]})})})})},Ht=(n(325),function(e){e&&e instanceof Function&&n.e(20).then(n.bind(null,870)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))});Object(v.b)(O.a),c.a.render(Object(l.jsx)(i.a,{store:O.a,children:Object(l.jsx)(b,{children:Object(l.jsx)(zt,{})})}),document.getElementById("root")),Ht()},4:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"f",(function(){return s}));var a={ROOT:"/",ERROR_404:"/404",ERROR_403:"/403",DASHBOARD:"/dashboard",PLAY_BACKGROUND:"/playbackground",LOGIN:"/login",PRODUCT:"/product",PRODUCT_LIST:"/product/list",PRODUCT_ADD:"/product/add",CATEGORY:"/category",CATEGORY_LIST:"/category/list",CATEGORY_ADD:"/category/add",USERS:"/users",KANBAN:"/kanban"},r={ADMIN:"ADMIN",LEAD:"LEAD",GUEST:"GUEST"},c={DASHBOARD:"DASHBOARD",KANBAN:"KANBAN",USERS:"USERS",PLAY_BACKGROUND:"PLAY_BACKGROUND",PRODUCT:"PRODUCT",PRODUCT_ADD:"PRODUCT_ADD",PRODUCT_LIST:"PRODUCT_LIST",CATEGORY:"CATEGORY",CATEGORY_ADD:"CATEGORY_ADD",CATEGORY_LIST:"CATEGORY_LIST"},i={LIGHT:"light",DARK:"dark"},o={ENGLISH:"en",VIETNAMESE:"vn"},s={version:n(316).version}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={SET_LOADING:"APP/SET_LOADING",SET_DIALOG:"APP/SET_DIALOG",ENQUEUE_SNACKBAR:"APP/ENQUEUE_SNACKBAR",REMOVE_SNACKBAR:"APP/REMOVE_SNACKBAR"}},41:function(e,t,n){"use strict";var a;n.d(t,"a",(function(){return a})),function(e){e.LOGIN_REQUEST="AUTH/LOGIN_REQUEST",e.LOGIN_SUCCESS="AUTH/LOGIN_SUCESS",e.LOGIN_FAILURE="AUTH/LOGIN_FAILURE",e.SILENT_LOGIN="AUTH/SILENT_LOGIN",e.LOGOUT="AUTH/LOGOUT",e.REGISTER="AUTH/REGISTER"}(a||(a={}))},44:function(e,t,n){"use strict";var a=n(111),r=n(50),c=n.n(r),i=new function e(){var t=this;Object(a.a)(this,e),this.handleAuthentication=function(){var e=t.getAccessToken();e&&c.a.set("accessToken",e,{expires:1})},this.logOut=function(){c.a.remove("accessToken")},this.getAccessToken=function(){return c.a.get("accessToken")},this.isAuthenticated=function(){return!!t.getAccessToken()}};t.a=i},47:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var a=n(40),r=function(e){return{type:a.a.SET_LOADING,payload:e}},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return{type:a.a.SET_DIALOG,payload:{dialog:{type:t,isShow:e,content:n}}}},i=function(e){return{type:a.a.ENQUEUE_SNACKBAR,payload:{key:e.key||(new Date).getTime()+Math.random(),message:e.message,variant:e.variant||"success"}}},o=function(e){return{type:a.a.REMOVE_SNACKBAR,payload:e}}},79:function(e,t,n){"use strict";var a=n(68),r=n(255),c=n(254),i=n(36),o=n(8),s=n(40),l={isLoading:!1,dialog:{type:"error",isShow:!1,content:""},notifications:{}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case s.a.SET_LOADING:return Object(o.a)(Object(o.a)({},e),{},{isLoading:a});case s.a.SET_DIALOG:return Object(o.a)(Object(o.a)({},e),{},{dialog:{type:a.dialog.type,isShow:a.dialog.isShow,content:a.dialog.content}});case s.a.ENQUEUE_SNACKBAR:var r=a.key,c=a.message,u=a.variant;return Object(o.a)(Object(o.a)({},e),{},{notifications:Object(o.a)(Object(o.a)({},e.notifications),{},Object(i.a)({},r,{key:r,message:c,variant:u}))});case s.a.REMOVE_SNACKBAR:var d=Object(o.a)({},e.notifications);return delete d[a],Object(o.a)(Object(o.a)({},e),{},{notifications:d});default:return e}},d=n(41),p={user:null,role:null,fullname:null,avatar:null,token:null},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case d.a.LOGIN_SUCCESS:return Object(o.a)(Object(o.a)({},e),{},{user:a.user,role:a.role,fullname:a.fullname,avatar:a.avatar,token:a.token});case d.a.LOGIN_FAILURE:return Object(o.a)(Object(o.a)({},e),{},{user:null});case d.a.LOGOUT:return Object(o.a)(Object(o.a)({},e),{},{user:null,role:null});case d.a.SILENT_LOGIN:return Object(o.a)(Object(o.a)({},e),{},{user:a.user,role:a.role});default:return e}},j=Object(a.combineReducers)({app:u,auth:b}),O=Object(a.createStore)(j,Object(c.composeWithDevTools)(Object(a.applyMiddleware)(r.a)));t.a=O}},[[326,3,5]]]);