(this["webpackJsonpreact-boilerplate-material"]=this["webpackJsonpreact-boilerplate-material"]||[]).push([[14],{376:function(e,t,n){"use strict";var r=n(35),a=n(0),c=n(160),i=n.n(c),s=n(117);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"300",o=Object(a.useState)(null),l=Object(r.a)(o,2),u=l[0],d=l[1],j=Object(a.useState)(!1),b=Object(r.a)(j,2),p=b[0],h=b[1];return Object(a.useEffect)((function(){var r=i.a.CancelToken.source(),a=null;return h(!0),s.a.get(e,{url:e,params:t,showSpinner:n,cancelToken:r.token}).then((function(e){a=setTimeout((function(){h(!1),d(e.data)}),c)})).catch((function(e){i.a.isCancel(e)||h(!1)})),function(){r.cancel(),a&&clearTimeout(a)}}),[e]),{data:u,showLoading:p}}},382:function(e,t,n){"use strict";var r=n(35),a=n(0);t.a=function(){var e=Object(a.useState)(1),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(5),s=Object(r.a)(i,2),o=s[0],l=s[1];return{page:n,perPage:o,_changePage:function(e){return c(e)},_changePerPage:function(e){l(e),c(1)}}}},383:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n(35),a=n(0),c=n(889),i=n(365),s=n(856),o=n(364),l=n(380),u=n.n(l),d=n(381),j=n.n(d),b=n(330),p=Object(b.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:e.spacing(2)},selectEmpty:{marginLeft:e.spacing(2),minWidth:75,"& > div":{paddingLeft:10}},pagination:{display:"flex",alignItems:"center",justifyContent:"space-between"},textPage:{width:70,textAlign:"center",marginRight:10,"& input":{textAlign:"center"}},pageNumber:{display:"flex",alignItems:"center",justifyContent:"space-between"}}})),h=n(2),g=function(e){var t=e.perPage,n=e.totalPage,l=e.pageIndex,d=e.changePage,b=e.changePerPage,g=p(),f=Object(a.useState)(1),x=Object(r.a)(f,2),O=x[0],v=x[1],m=function(e){return function(){v(e),d(e)}};Object(a.useEffect)((function(){l>=1&&v(l)}),[l]);return Object(h.jsxs)("div",{className:g.root,children:[Object(h.jsxs)("div",{children:["Row per page",Object(h.jsxs)(c.a,{value:t,onChange:function(e){b(Number(e.target.value))},displayEmpty:!0,className:g.selectEmpty,inputProps:{"aria-label":"Without label"},children:[Object(h.jsx)(i.a,{value:5,children:"5"}),Object(h.jsx)(i.a,{value:10,children:"10"}),Object(h.jsx)(i.a,{value:20,children:"20"})]})]}),Object(h.jsxs)("div",{className:g.pagination,children:[Object(h.jsx)(o.a,{disabled:1===O,color:"primary","aria-label":"prev",onClick:m(O-1),children:Object(h.jsx)(u.a,{fontSize:"small"})}),Object(h.jsxs)("div",{className:g.pageNumber,children:[Object(h.jsx)(s.a,{id:"number-page",value:O,size:"small",label:"",variant:"outlined",className:g.textPage,onChange:function(e){var t=new RegExp("^[0-9]+$"),n=e.target.value;t.test(n)&&v(Number(e.target.value))},onKeyDown:function(e){"Enter"===e.key&&d(O)}})," ","of ",n]}),Object(h.jsx)(o.a,{disabled:O>=n,color:"primary","aria-label":"next",onClick:m(O+1),children:Object(h.jsx)(j.a,{fontSize:"small"})})]})]})}},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=new Intl.NumberFormat("it-IT",{style:"currency",currency:"VND"}).format},875:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return V}));var r=n(8),a=n(14),c=n.n(a),i=n(23),s=n(35),o=n(0),l=n(12),u=n(19),d=n(59),j=n(393),b=n(864),p=n(868),h=n(867),g=n(863),f=n(865),x=n(866),O=n(115),v=n(359),m=n(389),y=n(119),w=n.n(y),C=n(855),k=n.n(C),P=n(433),_=n.n(P);n(854);_.a.locale("vi");var S=n(117),T=function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S.a.get("/order/get-all-order",{showSpinner:!0}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S.a.patch("/order/set-order-is-delivering/".concat(t),{showSpinner:!0}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S.a.patch("/order/admin-reject-order/".concat(t),{showSpinner:!0}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S.a.patch("/order/admin-tick-order-success/".concat(t),{showSpinner:!0}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=n(383),I=n(5),z=n(167),H=n(382),R=n(376),Y=n(364),q=(n(37),n(330)),A=n(352),F=n(358),M=n(356),W=n(143),K=function(e){switch(e){case"pending":return"\u0110ang ch\u1edd";case"delivering":return"\u0110ang giao h\xe0ng";case"success":return"Giao h\xe0ng th\xe0nh c\xf4ng";case"reject":return"T\u1eeb ch\u1ed1i \u0111\u01a1n h\xe0ng";case"cancel":return"H\u1ee7y";default:return"Kh\xf4ng x\xe1c \u0111\u1ecbnh"}},G=n(2);function J(e){var t,n=e.isOpen,r=e.handleClose,a=e.data,l=e.getData,u=U(),d=Object(o.useState)({name:"",category_id:"",image:"",price:"",quantity:"",vote:""}),b=Object(s.a)(d,2),p=(b[0],b[1]);Object(o.useEffect)((function(){p(a)}),[a]);var h=function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N(a.id);case 3:return t=e.sent,console.log(t),e.next=7,l();case 7:r(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L(a.id);case 3:return t=e.sent,console.log(t),e.next=7,l();case 7:r(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D(a.id);case 3:return t=e.sent,console.log(t),e.next=7,l();case 7:r(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)(A.a,{fullWidth:!0,maxWidth:"sm",open:n,"aria-labelledby":"max-width-dialog-title",children:[Object(G.jsxs)(M.a,{children:[Object(G.jsx)(W.a,{variant:"h5",color:"textPrimary",children:"Chi ti\u1ebft \u0111\u01a1n h\xe0ng ( ".concat(K(a.status)," )")}),Object(G.jsx)("br",{}),Object(G.jsx)("div",{className:u.product_list,children:null===a||void 0===a||null===(t=a.items)||void 0===t?void 0:t.map((function(e,t){return Object(G.jsxs)("div",{className:u.product_item_wrapper,children:[Object(G.jsxs)("div",{className:u.product_item,children:[Object(G.jsx)("img",{style:{width:"70px",marginRight:"5px"},src:e.product.image}),Object(G.jsx)(W.a,{variant:"body2",color:"textPrimary",children:"".concat(e.quantity," ").concat(e.product.name)})]}),Object(G.jsx)("div",{children:Object(G.jsx)(W.a,{variant:"body2",color:"textPrimary",children:Object(j.a)(e.product.price*e.quantity)})})]},t)}))}),Object(G.jsxs)("div",{className:u.product_item_wrapper,children:[Object(G.jsx)(W.a,{variant:"body1",color:"textPrimary",children:"T\u1ed5ng c\u1ed9ng:"}),a.orderCash]}),Object(G.jsx)(W.a,{style:{padding:"8px 0",color:"blue"},variant:"body1",color:"textPrimary",children:Object(G.jsx)("div",{dangerouslySetInnerHTML:{__html:a.message}})})]}),Object(G.jsxs)(F.a,{children:[Object(G.jsx)(v.a,{onClick:r,color:"primary",children:"\u0110\xf3ng"}),function(e){switch(e){case"pending":return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(v.a,{onClick:function(){return g()},variant:"contained",color:"secondary",size:"small",children:"H\u1ee7y"}),Object(G.jsx)(v.a,{onClick:function(){return h()},variant:"contained",color:"primary",size:"small",children:"Giao"})]});case"delivering":return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(v.a,{onClick:function(){return g()},variant:"contained",color:"secondary",size:"small",children:"H\u1ee7y"}),Object(G.jsx)(v.a,{onClick:function(){return f()},variant:"contained",color:"primary",size:"small",children:"\u0110\xe3 giao"})]});case"success":case"reject":case"cancel":return null;default:return"Kh\xf4ng x\xe1c \u0111\u1ecbnh"}}(a.status)]})]})})}var U=Object(q.a)((function(e){return{product_list:{overflowY:"scroll",maxHeight:500},product_item_wrapper:{display:"flex",alignItems:"center",padding:"15px 7px",justifyContent:"space-between"},product_item:{display:"flex",alignItems:"center"}}}));var V=function(){var e=Object(l.g)(),t=Object(H.a)(),n=t.page,a=t.perPage,y=t._changePage,C=t._changePerPage,P=Object(o.useState)(""),S=Object(s.a)(P,2),N=S[0],L=S[1],D=Object(o.useState)(!1),q=Object(s.a)(D,2),A=q[0],F=q[1],M=Object(o.useState)(""),W=Object(s.a)(M,2),U=W[0],V=W[1],$=Object(o.useState)(""),B=Object(s.a)($,2),Q=(B[0],B[1],Object(R.a)("/category",{},!0,0),Object(u.c)(d.d)),X=function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T();case 3:t=e.sent,console.log(t),L(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){X()}),[]),console.log(n,a);var Z=N&&N.filter((function(e){var t,n,r,a,c;return(null===(t=e.userCreate)||void 0===t?void 0:t.fullname.toLowerCase().includes(Q.toLowerCase()))||(null===(n=e.userCreate)||void 0===n?void 0:n.username.toLowerCase().includes(Q.toLowerCase()))||(null===(r=e.userCreate)||void 0===r?void 0:r.email.toLowerCase().includes(Q.toLowerCase()))||(null===(a=e.userCreate)||void 0===a?void 0:a.phone.toLowerCase().includes(Q.toLowerCase()))||(null===(c=e.userCreate)||void 0===c?void 0:c.address.toLowerCase().includes(Q.toLowerCase()))})),ee=function(e){var t=0;return e.forEach((function(e){t+=function(e){return e.product.price*e.quantity}(e)})),Object(j.a)(t)};return Object(G.jsxs)("div",{children:[Object(z.a)("create","product")?Object(G.jsx)(m.a,{container:!0,justify:"flex-end",children:Object(G.jsx)(v.a,{type:"submit",variant:"contained",color:"primary",startIcon:Object(G.jsx)(w.a,{}),onClick:function(){return e.push(I.c.PRODUCT_ADD)},children:"Add Product"})}):null,Object(G.jsx)("br",{}),Object(G.jsx)(g.a,{component:O.a,children:Object(G.jsxs)(b.a,{"aria-label":"simple table",children:[Object(G.jsx)(f.a,{children:Object(G.jsxs)(x.a,{children:[Object(G.jsx)(h.a,{children:"STT"}),Object(G.jsx)(h.a,{align:"center",children:"T\xean ng\u01b0\u1eddi \u0111\u1eb7t h\xe0ng"}),Object(G.jsx)(h.a,{align:"center",children:"S\u0110T"}),Object(G.jsx)(h.a,{align:"center",children:"Email"}),Object(G.jsx)(h.a,{align:"center",children:"\u0110\u1ecba ch\u1ec9"}),Object(G.jsx)(h.a,{align:"center",children:"T\u1ed5ng \u0111\u01a1n gi\xe1"}),Object(G.jsx)(h.a,{align:"center",children:"Ng\xe0y \u0111\u1eb7t h\xe0ng"}),Object(G.jsx)(h.a,{align:"center",children:"Tr\u1ea1ng th\xe1i"}),Object(G.jsx)(h.a,{align:"center",children:"C\xf4ng c\u1ee5"})]})}),Object(G.jsx)(p.a,{children:Z&&(null===Z||void 0===Z?void 0:Z.sort((function(e,t){return new Date(t.created_at).getTime()-new Date(e.created_at).getTime()})).slice((n-1)*a,n*a).map((function(e,t){var c,i,s,o,l,u=ee(e.items);return Object(G.jsxs)(x.a,{children:[Object(G.jsx)(h.a,{component:"th",scope:"row",children:(n-1)*a+t+1}),Object(G.jsx)(h.a,{align:"center",children:null===(c=e.userCreate)||void 0===c?void 0:c.fullname}),Object(G.jsx)(h.a,{align:"center",children:null===(i=e.userCreate)||void 0===i?void 0:i.phone}),Object(G.jsx)(h.a,{align:"center",children:null===(s=e.userCreate)||void 0===s?void 0:s.email}),Object(G.jsx)(h.a,{align:"center",children:null===(o=e.userCreate)||void 0===o?void 0:o.address}),Object(G.jsx)(h.a,{align:"center",children:ee(e.items)}),Object(G.jsx)(h.a,{align:"center",children:(l=e.created_at,_()(new Date(l)).format("DD.MM.YYYY"))}),Object(G.jsx)(h.a,{align:"center",children:K(e.status)}),Object(G.jsx)(h.a,{align:"center",children:Object(G.jsx)(m.a,{container:!0,children:Object(G.jsx)(m.a,{item:!0,xs:12,children:Object(G.jsx)(Y.a,{color:"primary","aria-label":"edit user",component:"span",onClick:function(){return function(e){V(e),F(!0)}(Object(r.a)(Object(r.a)({},e),{},{orderCash:u}))},children:Object(G.jsx)(k.a,{})})})})})]},e.id)})))})]})}),Object(G.jsx)(E.a,{pageIndex:n,perPage:a,totalPage:Math.ceil(Z.length/a),changePage:y,changePerPage:C}),Object(G.jsx)(J,{isOpen:A,handleClose:function(){return F(!1)},data:U,getData:X})]})}}}]);