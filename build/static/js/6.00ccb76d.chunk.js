(this["webpackJsonpreact-boilerplate-material"]=this["webpackJsonpreact-boilerplate-material"]||[]).push([[6],{375:function(e,t,n){"use strict";var a=n(35),r=n(0),c=n(163),i=n.n(c),l=n(117);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"300",s=Object(r.useState)(null),o=Object(a.a)(s,2),u=o[0],d=o[1],j=Object(r.useState)(!1),b=Object(a.a)(j,2),p=b[0],f=b[1];return Object(r.useEffect)((function(){var a=i.a.CancelToken.source(),r=null;return f(!0),l.a.get(e,{url:e,params:t,showSpinner:n,cancelToken:a.token}).then((function(e){r=setTimeout((function(){f(!1),d(e.data)}),c)})).catch((function(e){i.a.isCancel(e)||f(!1)})),function(){a.cancel(),r&&clearTimeout(r)}}),[e]),{data:u,showLoading:p}}},376:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(379),r=(n(0),n(377),n(2)),c=["value","onChange","name","url"],i=function(e){var t=e.value,n=e.onChange,i=e.name,l=e.url;Object(a.a)(e,c);return Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsx)("input",{id:i,name:i,onChange:n,type:"file",hidden:!0,accept:"image/*"}),Object(r.jsx)("div",{children:Object(r.jsx)("label",{htmlFor:i,children:Object(r.jsx)("div",{className:"preview-img",children:t?Object(r.jsx)("img",{alt:"preview-image",width:"100%",height:"100%",src:l}):Object(r.jsx)("div",{className:"preview-label",children:"+"})})})})]})}},377:function(e,t,n){},379:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return a}))},383:function(e,t,n){"use strict";var a=n(30),r=n(31);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),i=(0,a(n(32)).default)(c.createElement("path",{d:"M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");t.default=i},384:function(e,t,n){"use strict";var a=n(30),r=n(31);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),i=(0,a(n(32)).default)(c.createElement("path",{d:"M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"}),"ArrowForwardIos");t.default=i},385:function(e,t,n){"use strict";var a=n(35),r=n(0);t.a=function(){var e=Object(r.useState)(1),t=Object(a.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(5),l=Object(a.a)(i,2),s=l[0],o=l[1];return{page:n,perPage:s,_changePage:function(e){return c(e)},_changePerPage:function(e){o(e),c(1)}}}},386:function(e,t,n){"use strict";var a=n(30),r=n(31);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),i=(0,a(n(32)).default)(c.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=i},387:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(35),r=n(0),c=n(883),i=n(364),l=n(851),s=n(363),o=n(383),u=n.n(o),d=n(384),j=n.n(d),b=n(329),p=Object(b.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:e.spacing(2)},selectEmpty:{marginLeft:e.spacing(2),minWidth:75,"& > div":{paddingLeft:10}},pagination:{display:"flex",alignItems:"center",justifyContent:"space-between"},textPage:{width:70,textAlign:"center",marginRight:10,"& input":{textAlign:"center"}},pageNumber:{display:"flex",alignItems:"center",justifyContent:"space-between"}}})),f=n(2),h=function(e){var t=e.perPage,n=e.totalPage,o=e.pageIndex,d=e.changePage,b=e.changePerPage,h=p(),O=Object(r.useState)(1),v=Object(a.a)(O,2),g=v[0],m=v[1],x=function(e){return function(){m(e),d(e)}};Object(r.useEffect)((function(){o>=1&&m(o)}),[o]);return Object(f.jsxs)("div",{className:h.root,children:[Object(f.jsxs)("div",{children:["Row per page",Object(f.jsxs)(c.a,{value:t,onChange:function(e){b(Number(e.target.value))},displayEmpty:!0,className:h.selectEmpty,inputProps:{"aria-label":"Without label"},children:[Object(f.jsx)(i.a,{value:5,children:"5"}),Object(f.jsx)(i.a,{value:10,children:"10"}),Object(f.jsx)(i.a,{value:20,children:"20"})]})]}),Object(f.jsxs)("div",{className:h.pagination,children:[Object(f.jsx)(s.a,{disabled:1===g,color:"primary","aria-label":"prev",onClick:x(g-1),children:Object(f.jsx)(u.a,{fontSize:"small"})}),Object(f.jsxs)("div",{className:h.pageNumber,children:[Object(f.jsx)(l.a,{id:"number-page",value:g,size:"small",label:"",variant:"outlined",className:h.textPage,onChange:function(e){var t=new RegExp("^[0-9]+$"),n=e.target.value;t.test(n)&&m(Number(e.target.value))},onKeyDown:function(e){"Enter"===e.key&&d(g)}})," ","of ",n]}),Object(f.jsx)(s.a,{disabled:g>=n,color:"primary","aria-label":"next",onClick:x(g+1),children:Object(f.jsx)(j.a,{fontSize:"small"})})]})]})}},389:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"a",(function(){return d}));var a=n(14),r=n.n(a),c=n(23),i=n(117),l=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.a.get("/product/get-all-product",{showSpinner:!0}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.a.post("/product/add-product",t,{showSpinner:!0}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.a.patch("/product/set-hot/".concat(t),{},{showSpinner:!0}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.a.put("/product/update-product/".concat(t),n,{showSpinner:!0}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.a.delete("/product/".concat(t),{showSpinner:!0}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},401:function(e,t,n){"use strict";var a=n(30),r=n(31);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),i=(0,a(n(32)).default)(c.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");t.default=i},845:function(e,t,n){"use strict";var a=n(30),r=n(31);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),i=(0,a(n(32)).default)(c.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");t.default=i},846:function(e,t,n){"use strict";var a=n(30),r=n(31);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),i=(0,a(n(32)).default)(c.createElement("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");t.default=i},873:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Y}));var a=n(14),r=n.n(a),c=n(23),i=n(35),l=n(0),s=n(12),o=n(19),u=n(59),d=new Intl.NumberFormat("it-IT",{style:"currency",currency:"VND"}).format,j=n(859),b=n(863),p=n(862),f=n(858),h=n(860),O=n(861),v=n(115),g=n(358),m=n(388),x=n(119),y=n.n(x),w=n(386),P=n.n(w),C=n(846),k=n.n(C),L=n(845),S=n.n(L),_=n(401),E=n.n(_),N=n(389),M=n(387),z=n(5),I=n(181),T=n(385),D=n(375),W=n(363),A=n(37),F=n(8),R=n(351),q=n(357),V=n(355),H=n(144),B=n(851),G=n(855),J=n(364),U=n(854),K=n(883),$=n(376),Q=n(2);function X(e){var t=e.isOpen,n=e.handleClose,a=e.data,s=e.cat,o=e.getData,u=Object(l.useState)({name:"",category_id:"",image:"",price:"",quantity:"",vote:""}),d=Object(i.a)(u,2),j=d[0],b=d[1];Object(l.useEffect)((function(){b(a)}),[a]);var p=function(e){var t=e.target;b(Object(F.a)(Object(F.a)({},j),{},Object(A.a)({},t.name,t.value)))},f=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(N.e)(a.id,j);case 3:return t=e.sent,n(),e.next=7,o();case 7:console.log(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsxs)(R.a,{fullWidth:!0,maxWidth:"sm",open:t,"aria-labelledby":"max-width-dialog-title",children:[Object(Q.jsxs)(V.a,{children:[Object(Q.jsx)(H.a,{variant:"h6",color:"textPrimary",children:"S\u1eeda s\u1ea3n ph\u1ea9m"}),Object(Q.jsx)("br",{}),Object(Q.jsxs)(m.a,{container:!0,spacing:2,children:[Object(Q.jsx)(m.a,{item:!0,xs:12,children:Object(Q.jsx)(B.a,{name:"name",value:j.name,onChange:p,fullWidth:!0,id:"title",label:"T\xean s\u1ea3n ph\u1ea9m",variant:"outlined"})}),Object(Q.jsx)(m.a,{item:!0,xs:12,children:Object(Q.jsxs)(U.a,{variant:"outlined",fullWidth:!0,children:[Object(Q.jsx)(G.a,{id:"demo-simple-select-outlined-label",children:"Nh\xf3m s\u1ea3n ph\u1ea9m"}),Object(Q.jsx)(K.a,{name:"category_id",value:j.category_id,onChange:function(e){var t=e.target;b(Object(F.a)(Object(F.a)({},j),{},Object(A.a)({},t.name,t.value)))},labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Nh\xf3m s\u1ea3n ph\u1ea9m",fullWidth:!0,children:null===s||void 0===s?void 0:s.map((function(e){return Object(Q.jsx)(J.a,{value:e.id,children:e.name},e.id)}))})]})}),Object(Q.jsx)(m.a,{item:!0,xs:12,children:Object(Q.jsx)(B.a,{name:"price",value:j.price,onChange:p,fullWidth:!0,id:"price",label:"Gi\xe1",variant:"outlined"})}),Object(Q.jsx)(m.a,{item:!0,xs:12,children:Object(Q.jsx)(B.a,{name:"quantity",value:j.quantity,onChange:p,fullWidth:!0,id:"quantity",label:"S\u1ed1 l\u01b0\u1ee3ng",variant:"outlined"})}),Object(Q.jsx)(m.a,{item:!0,xs:12,children:Object(Q.jsx)(B.a,{name:"vote",value:j.vote,onChange:p,fullWidth:!0,id:"vote",label:"\u0110\xe1nh gi\xe1",variant:"outlined"})}),Object(Q.jsx)(m.a,{item:!0,xs:12,md:12,className:"my-10",children:Object(Q.jsx)($.a,{name:"category_image_field",value:j.image,url:j.image,onChange:function(e){console.log(e);var t=e.currentTarget;if(null===t||void 0===t?void 0:t.files[0]){var n=t.files[0],a=new FileReader;a.onloadend=function(){b(Object(F.a)(Object(F.a)({},j),{},{image:a.result})),console.log(a.result)},a.readAsDataURL(n)}}})})]})]}),Object(Q.jsxs)(q.a,{children:[Object(Q.jsx)(g.a,{onClick:n,color:"primary",children:"\u0110\xf3ng"}),Object(Q.jsx)(g.a,{onClick:function(){return f()},variant:"contained",color:"primary",size:"small",children:"S\u1eeda"})]})]})})}var Y=function(){var e=Object(s.g)(),t=Object(T.a)(),n=t.page,a=t.perPage,x=t._changePage,w=t._changePerPage,C=Object(l.useState)(""),L=Object(i.a)(C,2),_=L[0],A=L[1],F=Object(l.useState)(!1),R=Object(i.a)(F,2),q=R[0],V=R[1],H=Object(l.useState)(""),B=Object(i.a)(H,2),G=B[0],J=B[1],U=Object(D.a)("/category",{},!0,0),K=Object(o.c)(u.d);console.log(K);var $=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.b();case 3:t=e.sent,console.log(t),A(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){$()}),[]);var Y=function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.c(t);case 3:n=e.sent,console.log(n),$(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a(t);case 3:n=e.sent,console.log(n),$(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();console.log(n,a);var ee=_&&_.filter((function(e){return e.name.toLowerCase().includes(K.toLowerCase())}));return Object(Q.jsxs)("div",{children:[Object(I.a)("create","product")?Object(Q.jsx)(m.a,{container:!0,justify:"flex-end",children:Object(Q.jsx)(g.a,{type:"submit",variant:"contained",color:"primary",startIcon:Object(Q.jsx)(y.a,{}),onClick:function(){return e.push(z.c.PRODUCT_ADD)},children:"Add Product"})}):null,Object(Q.jsx)("br",{}),Object(Q.jsx)(f.a,{component:v.a,children:Object(Q.jsxs)(j.a,{"aria-label":"simple table",children:[Object(Q.jsx)(h.a,{children:Object(Q.jsxs)(O.a,{children:[Object(Q.jsx)(p.a,{children:"STT"}),Object(Q.jsx)(p.a,{align:"center",children:"T\xean"}),Object(Q.jsx)(p.a,{align:"center",children:"Danh m\u1ee5c"}),Object(Q.jsx)(p.a,{align:"center",children:"H\xecnh \u1ea3nh"}),Object(Q.jsx)(p.a,{align:"center",children:"S\u1ed1 l\u01b0\u1ee3ng"}),Object(Q.jsx)(p.a,{align:"center",children:"Gi\xe1"}),Object(Q.jsx)(p.a,{align:"center",children:"\u0110\xe1nh gi\xe1"}),Object(Q.jsx)(p.a,{align:"center",children:"C\xf4ng c\u1ee5"})]})}),Object(Q.jsx)(b.a,{children:ee&&(null===ee||void 0===ee?void 0:ee.slice((n-1)*a,n*a).map((function(e,t){return Object(Q.jsxs)(O.a,{children:[Object(Q.jsx)(p.a,{component:"th",scope:"row",children:(n-1)*a+t+1}),Object(Q.jsx)(p.a,{align:"center",children:e.name}),Object(Q.jsx)(p.a,{align:"center",children:e.category.name}),Object(Q.jsx)(p.a,{align:"center",children:Object(Q.jsx)("img",{src:e.image,width:"180"})}),Object(Q.jsx)(p.a,{align:"center",children:e.quantity}),Object(Q.jsx)(p.a,{align:"center",children:d(e.price)}),Object(Q.jsx)(p.a,{align:"center",children:e.vote}),Object(Q.jsx)(p.a,{align:"center",children:Object(Q.jsxs)(m.a,{container:!0,children:[Object(Q.jsx)(m.a,{item:!0,xs:4,children:Object(Q.jsx)(W.a,{color:"primary","aria-label":"edit user",component:"span",onClick:function(){return function(e){J(e),console.log(e),V(!0)}(e)},children:Object(Q.jsx)(P.a,{})})}),Object(Q.jsx)(m.a,{item:!0,xs:4,children:Object(Q.jsx)(W.a,{"aria-label":"edit user",component:"span",onClick:function(){return Y(e.id)},children:e.is_hot?Object(Q.jsx)(S.a,{style:{color:"green"}}):Object(Q.jsx)(k.a,{style:{color:"green"}})})}),Object(Q.jsx)(m.a,{item:!0,xs:4,children:Object(Q.jsx)(W.a,{"aria-label":"edit user",component:"span",onClick:function(){return Z(e.id)},children:Object(Q.jsx)(E.a,{style:{color:"tomato"}})})})]})})]},e.id)})))})]})}),Object(Q.jsx)(M.a,{pageIndex:n,perPage:a,totalPage:Math.ceil(ee.length/a),changePage:x,changePerPage:w}),Object(Q.jsx)(X,{getData:$,isOpen:q,handleClose:function(){return V(!1)},data:G,cat:null===U||void 0===U?void 0:U.data})]})}}}]);