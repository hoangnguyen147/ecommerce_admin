(this["webpackJsonpreact-boilerplate-material"]=this["webpackJsonpreact-boilerplate-material"]||[]).push([[7],{377:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(384),r=(n(0),n(378),n(2)),c=["value","onChange","name","url"],i=function(e){var t=e.value,n=e.onChange,i=e.name,l=e.url;Object(a.a)(e,c);return Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsx)("input",{id:i,name:i,onChange:n,type:"file",hidden:!0,accept:"image/*"}),Object(r.jsx)("div",{children:Object(r.jsx)("label",{htmlFor:i,children:Object(r.jsx)("div",{className:"preview-img",children:t?Object(r.jsx)("img",{alt:"preview-image",width:"100%",height:"100%",src:l}):Object(r.jsx)("div",{className:"preview-label",children:"+"})})})})]})}},378:function(e,t,n){},380:function(e,t,n){"use strict";var a=n(25),r=n(26);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),i=(0,a(n(27)).default)(c.createElement("path",{d:"M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");t.default=i},381:function(e,t,n){"use strict";var a=n(25),r=n(26);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),i=(0,a(n(27)).default)(c.createElement("path",{d:"M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"}),"ArrowForwardIos");t.default=i},382:function(e,t,n){"use strict";var a=n(35),r=n(0);t.a=function(){var e=Object(r.useState)(1),t=Object(a.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(5),l=Object(a.a)(i,2),s=l[0],o=l[1];return{page:n,perPage:s,_changePage:function(e){return c(e)},_changePerPage:function(e){o(e),c(1)}}}},383:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(35),r=n(0),c=n(889),i=n(365),l=n(856),s=n(364),o=n(380),u=n.n(o),d=n(381),j=n.n(d),b=n(330),p=Object(b.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:e.spacing(2)},selectEmpty:{marginLeft:e.spacing(2),minWidth:75,"& > div":{paddingLeft:10}},pagination:{display:"flex",alignItems:"center",justifyContent:"space-between"},textPage:{width:70,textAlign:"center",marginRight:10,"& input":{textAlign:"center"}},pageNumber:{display:"flex",alignItems:"center",justifyContent:"space-between"}}})),f=n(2),h=function(e){var t=e.perPage,n=e.totalPage,o=e.pageIndex,d=e.changePage,b=e.changePerPage,h=p(),O=Object(r.useState)(1),g=Object(a.a)(O,2),x=g[0],m=g[1],v=function(e){return function(){m(e),d(e)}};Object(r.useEffect)((function(){o>=1&&m(o)}),[o]);return Object(f.jsxs)("div",{className:h.root,children:[Object(f.jsxs)("div",{children:["Row per page",Object(f.jsxs)(c.a,{value:t,onChange:function(e){b(Number(e.target.value))},displayEmpty:!0,className:h.selectEmpty,inputProps:{"aria-label":"Without label"},children:[Object(f.jsx)(i.a,{value:5,children:"5"}),Object(f.jsx)(i.a,{value:10,children:"10"}),Object(f.jsx)(i.a,{value:20,children:"20"})]})]}),Object(f.jsxs)("div",{className:h.pagination,children:[Object(f.jsx)(s.a,{disabled:1===x,color:"primary","aria-label":"prev",onClick:v(x-1),children:Object(f.jsx)(u.a,{fontSize:"small"})}),Object(f.jsxs)("div",{className:h.pageNumber,children:[Object(f.jsx)(l.a,{id:"number-page",value:x,size:"small",label:"",variant:"outlined",className:h.textPage,onChange:function(e){var t=new RegExp("^[0-9]+$"),n=e.target.value;t.test(n)&&m(Number(e.target.value))},onKeyDown:function(e){"Enter"===e.key&&d(x)}})," ","of ",n]}),Object(f.jsx)(s.a,{disabled:x>=n,color:"primary","aria-label":"next",onClick:v(x+1),children:Object(f.jsx)(j.a,{fontSize:"small"})})]})]})}},384:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return a}))},388:function(e,t,n){"use strict";var a=n(25),r=n(26);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),i=(0,a(n(27)).default)(c.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=i},395:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return u}));var a=n(14),r=n.n(a),c=n(23),i=n(117),l=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.a.get("/category",{showSpinner:!0}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.a.post("/category/add-category",t,{showSpinner:!0}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(c.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.a.put("/category/update-category/".concat(t),n,{showSpinner:!0}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.a.delete("/category/".concat(t),{showSpinner:!0}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},404:function(e,t,n){"use strict";var a=n(25),r=n(26);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),i=(0,a(n(27)).default)(c.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");t.default=i},882:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return V}));var a=n(14),r=n.n(a),c=n(23),i=n(35),l=n(0),s=n(12),o=n(19),u=n(59),d=n(864),j=n(868),b=n(867),p=n(863),f=n(865),h=n(866),O=n(115),g=n(359),x=n(389),m=n(119),v=n.n(m),y=n(388),w=n.n(y),P=n(395),C=n(404),k=n.n(C),S=n(383),L=n(5),E=n(167),_=n(382),M=n(364),N=n(37),z=n(8),I=n(352),A=n(358),D=n(356),T=n(143),W=n(856),R=n(377),F=n(2);function H(e){var t=e.isOpen,n=e.handleClose,a=e.data,s=e.getData,o=Object(l.useState)({name:"",description:"",image:""}),u=Object(i.a)(o,2),d=u[0],j=u[1],b=Object(l.useState)(!1),p=Object(i.a)(b,2),f=p[0],h=p[1];Object(l.useEffect)((function(){j(a),h(!1)}),[a]);var O=function(e){var t=e.target;j(Object(z.a)(Object(z.a)({},d),{},Object(N.a)({},t.name,t.value)))},m=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(P.d)(a.id,d);case 3:return t=e.sent,n(),e.next=7,s();case 7:console.log(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)(I.a,{fullWidth:!0,maxWidth:"sm",open:t,"aria-labelledby":"max-width-dialog-title",children:[Object(F.jsxs)(D.a,{children:[Object(F.jsx)(T.a,{variant:"h6",color:"textPrimary",children:"S\u1eeda danh m\u1ee5c"}),Object(F.jsx)("br",{}),Object(F.jsxs)(x.a,{container:!0,spacing:2,children:[Object(F.jsx)(x.a,{item:!0,xs:12,children:Object(F.jsx)(W.a,{name:"name",value:d.name,onChange:O,fullWidth:!0,id:"title",label:"T\xean danh m\u1ee5c",variant:"outlined"})}),Object(F.jsx)(x.a,{item:!0,xs:12,children:Object(F.jsx)(W.a,{name:"description",value:d.description,onChange:O,fullWidth:!0,id:"description",label:"M\xf4 t\u1ea3",variant:"outlined"})}),Object(F.jsxs)(x.a,{item:!0,xs:12,md:12,className:"my-10",children:[Object(F.jsx)(T.a,{style:{padding:"10px 4px",cursor:"pointer",display:"inline-block"},variant:"h6",color:"textPrimary",onClick:function(){return j(Object(z.a)(Object(z.a)({},d),{},{image:f?a.image:""})),void h(!f)},children:"Th\xeam h\xecnh \u1ea3nh"}),f?Object(F.jsx)(W.a,{name:"image",value:d.image,onChange:O,fullWidth:!0,id:"uri",label:"H\xecnh \u1ea3nh",variant:"outlined"}):Object(F.jsx)(R.a,{name:"category_image_field",value:d.image,url:d.image,onChange:function(e){console.log(e);var t=e.currentTarget;if(null===t||void 0===t?void 0:t.files[0]){var n=t.files[0],a=new FileReader;a.onloadend=function(){j(Object(z.a)(Object(z.a)({},d),{},{image:a.result})),console.log(a.result)},a.readAsDataURL(n)}}})]})]})]}),Object(F.jsxs)(A.a,{children:[Object(F.jsx)(g.a,{onClick:n,color:"primary",children:"\u0110\xf3ng"}),Object(F.jsx)(g.a,{onClick:function(){return m()},variant:"contained",color:"primary",size:"small",children:"S\u1eeda"})]})]})})}var V=function(){var e=Object(s.g)(),t=Object(_.a)(),n=t.page,a=t.perPage,m=t._changePage,y=t._changePerPage,C=Object(l.useState)(""),N=Object(i.a)(C,2),z=N[0],I=N[1],A=Object(l.useState)(!1),D=Object(i.a)(A,2),T=D[0],W=D[1],R=Object(l.useState)(""),V=Object(i.a)(R,2),J=V[0],B=V[1],G=Object(o.c)(u.d),K=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.b();case 3:t=e.sent,console.log(t),I(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){K()}),[]);var U=function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a(t);case 3:n=e.sent,console.log(n),K(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),Y=z&&z.filter((function(e){return e.name.toLowerCase().includes(G.toLowerCase())}));return Object(F.jsxs)("div",{children:[Object(E.a)("create","product")?Object(F.jsx)(x.a,{container:!0,justify:"flex-end",children:Object(F.jsx)(g.a,{type:"submit",variant:"contained",color:"primary",startIcon:Object(F.jsx)(v.a,{}),onClick:function(){return e.push(L.c.CATEGORY_ADD)},children:"Add Category"})}):null,Object(F.jsx)("br",{}),Object(F.jsx)(p.a,{component:O.a,children:Object(F.jsxs)(d.a,{"aria-label":"simple table",children:[Object(F.jsx)(f.a,{children:Object(F.jsxs)(h.a,{children:[Object(F.jsx)(b.a,{align:"center",children:"STT"}),Object(F.jsx)(b.a,{align:"center",children:"T\xean"}),Object(F.jsx)(b.a,{align:"center",children:"M\xf4 t\u1ea3"}),Object(F.jsx)(b.a,{align:"center",children:"H\xecnh \u1ea3nh"}),Object(F.jsx)(b.a,{align:"center",children:"C\xf4ng c\u1ee5"})]})}),Object(F.jsx)(j.a,{children:Y&&(null===Y||void 0===Y?void 0:Y.slice((n-1)*a,n*a).map((function(e,t){return Object(F.jsxs)(h.a,{children:[Object(F.jsx)(b.a,{component:"th",scope:"row",children:(n-1)*a+t+1}),Object(F.jsx)(b.a,{align:"center",children:e.name}),Object(F.jsx)(b.a,{align:"center",children:e.description}),Object(F.jsx)(b.a,{align:"center",children:Object(F.jsx)("img",{src:e.image,width:"180"})}),Object(F.jsx)(b.a,{align:"center",children:Object(F.jsxs)(x.a,{container:!0,children:[Object(F.jsx)(x.a,{item:!0,xs:6,children:Object(F.jsx)(M.a,{color:"primary","aria-label":"edit user",component:"span",onClick:function(){return function(e){B(e),console.log(e),W(!0)}(e)},children:Object(F.jsx)(w.a,{})})}),Object(F.jsx)(x.a,{item:!0,xs:6,children:Object(F.jsx)(M.a,{color:"primary","aria-label":"edit user",component:"span",onClick:function(){return U(e.id)},children:Object(F.jsx)(k.a,{style:{color:"tomato"}})})})]})})]},e.id)})))})]})}),Object(F.jsx)(S.a,{pageIndex:n,perPage:a,totalPage:Math.ceil(Y.length/a),changePage:m,changePerPage:y}),Object(F.jsx)(H,{getData:K,isOpen:T,handleClose:function(){return W(!1)},data:J})]})}}}]);