(this["webpackJsonptienda-gaijin-canibano"]=this["webpackJsonptienda-gaijin-canibano"]||[]).push([[0],{34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},42:function(e,t,i){},43:function(e,t,i){},51:function(e,t,i){},52:function(e,t,i){},53:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),a=i(27),r=i.n(a),s=(i(34),i(35),i(36),Object(n.createContext)()),o=i(3),d=i(0),l=function(){var e=Object(n.useContext)(s).cartNum;return Object(d.jsx)("div",{id:"Cart",children:Object(d.jsxs)(o.b,{style:{height:"100%"},to:"/cart",children:["\ud83d\uded2",e||""]})})},j=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("header",{className:"NavBar",children:[Object(d.jsx)(o.c,{to:"/",style:{padding:"0 2% 0 2%"},children:Object(d.jsxs)("h1",{children:["Tienda ",Object(d.jsx)("b",{style:{fontSize:"3vw",textShadow:"none"},children:"\u2b24"})," Gaijin"]})}),Object(d.jsx)(o.c,{to:"/",className:"NavLink",children:"Todos"}),Object(d.jsx)(o.c,{to:"/category/comida",activeClassName:"off",className:"NavLink",children:"Comida"}),Object(d.jsx)(o.c,{to:"/category/ropa",activeClassName:"off",className:"NavLink",children:"Ropa"}),Object(d.jsx)(o.c,{to:"/category/figuras",activeClassName:"off",className:"NavLink",children:"Figuras"}),Object(d.jsx)(o.c,{to:"/category/otros",activeClassName:"off",className:"NavLink",children:"Otros"}),Object(d.jsx)(l,{})]})})},b=i(5),u=(i(42),i(2)),h=function(e){var t=e.color,i=e.backgroundColor,n=e.width,c=e.text,a=e.height,r=e.onClick,s=e.border,o=e.display,l=e.margin;return Object(d.jsx)("button",{style:{color:t,backgroundColor:i,width:n,height:a,border:s,borderRadius:"5px",display:o,fontSize:"1.1vw",margin:l},onClick:r,children:c})};var x=function(e){var t=e.stock,i=e.num,n=e.setNum;function c(){n(i<t?i+1:i)}return Object(d.jsxs)("div",{style:{width:"auto"},children:[Object(d.jsx)(h,{text:"Agregar",width:"6vw",height:"2.8vw",border:"none",backgroundColor:"rgb(18, 0, 177)",color:"white",onClick:c,display:0===i&&0!==t?"inline":"none"}),Object(d.jsxs)("div",{style:{display:0===i?"none":"inline-flex",justifyContent:"center"},children:[Object(d.jsx)(h,{text:"-",width:"2.8vw",height:"2.8vw",backgroundColor:"gray",onClick:function(){n(i>0?i-1:i)}}),Object(d.jsx)("input",{style:{display:0===i?"none":"block",width:i>9?"2.2vw":"2vw",fontSize:"1vw"},type:"text",value:i,onChange:function(){n(i)}}),Object(d.jsx)(h,{text:"+",width:"2.8vw",height:"2.8vw",backgroundColor:"gray",onClick:c})]}),Object(d.jsx)("p",{style:{fontSize:"1.3vw",display:0===t?"inline-flex":"none"},children:"No hay stock"})]})};var O=function(e){var t=e.item,i=Object(u.g)().itemsId;return Object(d.jsxs)("div",{className:"subTable",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{width:"100%"},children:Object(d.jsx)(o.b,{id:"pictureContainer",to:{pathname:"/item/".concat(t.id)},children:Object(d.jsx)("img",{alt:t.title,src:"https://raw.githubusercontent.com/MaxAim/Tienda-Gaijin-Canibano/main/src/img/"+t.id+".jpg"})})}),Object(d.jsx)("div",{style:{width:"100%",paddingTop:"2%"},children:Object(d.jsx)("b",{children:t.title})})]}),Object(d.jsxs)("div",{style:{display:"flex",paddingTop:"10%"},children:[0===t.stock?Object(d.jsx)("p",{style:{fontSize:"2.3vw",width:"100%"},children:"No hay stock"}):Object(d.jsxs)("div",{style:{width:"50%",padding:"7%",fontSize:"2.3vw"},children:["\xa5",t.price]}),void 0===i?Object(d.jsx)(o.b,{to:{pathname:"/item/".concat(t.id)},children:Object(d.jsx)(h,{text:"Ver m\xe1s",width:"6vw",height:"2.8vw",border:"none",backgroundColor:"rgb(18, 0, 177)",color:"white"})}):Object(d.jsx)("div",{style:{width:"100%",padding:"5%"},children:Object(d.jsx)(x,{stock:t.stock})})]})]})},p=(i(43),function(e){var t=e.items,i=e.loaded;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"tableDark",children:[Object(d.jsx)("div",{style:{display:1!==i?"flex":"none"},children:"Cargando..."}),t.map((function(e){return Object(d.jsx)(O,{item:e},e.id)}))]})})}),m=i(13),g=(i(26),m.initializeApp({apiKey:"AIzaSyBICxIz97MfF7fPmpDxp_9IyQPhbF4s1Oo",authDomain:"tienda-gaijin.firebaseapp.com",databaseURL:"https://tienda-gaijin-default-rtdb.firebaseio.com",projectId:"tienda-gaijin",storageBucket:"tienda-gaijin.appspot.com",messagingSenderId:"490933764082",appId:"1:490933764082:web:04a972fb37c12bad80756b",measurementId:"G-YD4TJBFT7G"}));function f(){return m.firestore(g)}var v=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),i=t[0],c=t[1],a=Object(n.useState)(0),r=Object(b.a)(a,2),s=r[0],o=r[1],l=Object(u.g)().categoryId;return Object(n.useEffect)((function(){var e=f().collection("products");(void 0!==l?e.where("category","==",l):e).get().then((function(e){0===e.size&&console.log("No responce"),c(e.docs.map((function(e){return e.data()}))),o(1)}))}),[l]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(p,{loaded:s,items:i})})},y=(i(51),function(e){var t=e.item,i=e.loaded,c=Object(n.useState)(0),a=Object(b.a)(c,2),r=a[0],l=a[1],j=Object(n.useContext)(s).addProducts;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"tableDetail",style:{display:1!==i?"flex":"none"},children:"Cargando..."}),Object(d.jsxs)("div",{className:"subTable tableDetail",style:{display:1!==i?"none":"flex"},children:[Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsx)("div",{style:{width:"15%"},children:Object(d.jsx)("img",{alt:t.title,src:"https://raw.githubusercontent.com/MaxAim/tienda-gaijin-canibano/main/src/img/"+t.id+".jpg"})}),Object(d.jsxs)("div",{style:{width:"85%",paddingLeft:"2%",display:"grid",justifyItems:"center"},children:[Object(d.jsx)("b",{children:t.title}),Object(d.jsx)("p",{children:t.description})]})]}),Object(d.jsxs)("div",{style:{display:"grid",justifyItems:"center",width:"25%",padding:"2%"},children:[Object(d.jsxs)("div",{style:{width:"100%",padding:"5%"},children:[Object(d.jsx)(x,{stock:t.stock,num:r,setNum:l}),Object(d.jsxs)("div",{style:{width:"100%",paddingTop:"20%",fontSize:"2.3vw",display:0===t.stock?"none":"inline-flex"},children:["\xa5",t.price]})]}),Object(d.jsx)(o.b,{to:"/cart",children:Object(d.jsx)(h,{text:"Confirmar",width:"8.2vw",height:"3vw",border:"none",backgroundColor:"rgb(18, 0, 177)",color:"white",onClick:function(){j({id:t.id,amount:r,description:t.description,name:t.title,price:t.price,key:t.number})},display:0===r?"none":"inline"})})]})]})]})});var w=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),i=t[0],c=t[1],a=Object(u.g)().itemsId,r=Object(n.useState)(0),s=Object(b.a)(r,2),o=s[0],l=s[1];return Object(n.useEffect)((function(){f().collection("products").where("id","==",a).get().then((function(e){0===e.size&&console.log("No responce"),c(e.docs.map((function(e){return e.data()}))[0]),l(1)}))}),[a]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(y,{loaded:o,item:i})})},C=i(29),k=i(10),N=function(e){var t=e.children,i=Object(n.useState)([]),c=Object(b.a)(i,2),a=c[0],r=c[1],o=Object(n.useState)(0),l=Object(b.a)(o,2),j=l[0],u=l[1];return Object(d.jsx)(s.Provider,{value:{addProducts:function(e){if(a.find((function(t){return t.id===e.id}))){var t=a.map((function(t){return t.id===e.id?Object(k.a)(Object(k.a)({},t),{},{amount:e.amount}):t}));r(t)}else r((function(t){return[].concat(Object(C.a)(t),[e])}))},cartLoad:function(){u(a.reduce((function(e,t){return e+t.amount}),0))},deleteItem:function(e){return a.splice(a.indexOf(e),1)},totalPrice:function(){return a.reduce((function(e,t){return e+t.price*t.amount}),0)},setCart:r,cart:a,cartNum:j},children:t})},I=function(e){var t=e.item,i=e.loaded,c=Object(n.useContext)(s).deleteItem;return Object(d.jsxs)("div",{id:t.key,children:[Object(d.jsx)("div",{className:"tableDetail",style:{display:1!==i?"flex":"none"},children:"Cargando..."}),Object(d.jsxs)("div",{className:"subTable tableDetail",style:{display:1!==i?"none":"flex"},children:[Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsx)("div",{style:{width:"15%"},children:Object(d.jsx)("img",{alt:t.title,src:"https://raw.githubusercontent.com/MaxAim/tienda-gaijin-canibano/main/src/img/"+t.id+".jpg"})}),Object(d.jsxs)("div",{style:{width:"85%",paddingLeft:"2%",display:"grid",justifyItems:"center"},children:[Object(d.jsx)("b",{children:t.name}),Object(d.jsx)("p",{children:t.description})]})]}),Object(d.jsxs)("div",{style:{display:"grid",justifyItems:"center",width:"25%",padding:"2%"},children:[Object(d.jsxs)("div",{style:{width:"100%",padding:"5%"},children:["\xa5",t.price]}),Object(d.jsxs)("div",{style:{width:"100%",padding:"5%"},children:[t.amount,"x\xa5",t.price*t.amount]}),Object(d.jsx)(o.b,{to:"/cart/#",children:Object(d.jsx)(h,{text:"Eliminar",width:"8.2vw",height:"3vw",border:"none",backgroundColor:"rgb(18, 0, 177)",color:"white",onClick:function(){c(t)}})})]})]})]})},S=i(15);i(52);var T=function(e){var t=e.setUserInfo,i=e.userInfo,n=e.completeOrder,c=function(e){var n=e.target,c=n.name,a=n.value;console.log(i),t((function(e){return Object(k.a)(Object(k.a)({},e),{},Object(S.a)({},c,a))}))};return Object(d.jsxs)("div",{className:"tableDark",style:{flexFlow:"column"},children:[Object(d.jsxs)("fieldset",{children:[Object(d.jsx)("legend",{children:"Informacion personal"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Nombre:"}),Object(d.jsx)("input",{type:"text",required:!0,onChange:c,value:i.name,id:"nombre",name:"name",placeholder:"Nombre"}),Object(d.jsx)("p",{children:"Direccion:"}),Object(d.jsx)("input",{type:"text",required:!0,onChange:c,value:i.adress,id:"direccion",name:"adress",placeholder:"Direccion"}),Object(d.jsx)("p",{children:"Mail:"}),Object(d.jsx)("input",{required:!0,onChange:c,value:i.email,id:"email",placeholder:"Email",type:"email",name:"email"}),Object(d.jsx)("p",{children:"Telefono:"}),Object(d.jsx)("input",{type:"text",required:!0,onChange:c,value:i.phone,id:"telefono",placeholder:"phone",name:"phone"}),Object(d.jsx)("p",{children:"Informacion extra:"}),Object(d.jsx)("textarea",{onChange:c,value:i.extra,name:"extra",id:"info",rows:"20",placeholder:"Informacion extra"})]}),Object(d.jsx)("img",{src:"https://raw.githubusercontent.com/MaxAim/tienda-gaijin-canibano/main/src/img/contacto.png",alt:"Kawaii"})]}),Object(d.jsxs)("fieldset",{style:{display:"flex",justifyContent:"end"},children:[Object(d.jsx)("legend",{children:"Confirmar"}),Object(d.jsx)(h,{border:"none",backgroundColor:"rgb(18, 0, 177)",color:"white",text:"Finalizar Compra",onClick:function(){n()},height:"50px",width:"100%"})]})]})};var D=function(){var e=f(),t=Object(n.useContext)(s),i=t.cart,c=t.cartLoad,a=t.totalPrice,r=t.cartNum,o=t.setCart,l=Object(n.useState)(0),j=Object(b.a)(l,2),x=j[0],O=j[1],p=Object(n.useState)([]),g=Object(b.a)(p,2),v=g[0],y=g[1],w=Object(n.useState)(null),C=Object(b.a)(w,2),k=C[0],N=C[1],S=Object(u.f)(),D=e.collection("orders"),z=Object(n.useState)({name:"",adress:"",email:"",phone:"",extra:""}),F=Object(b.a)(z,2),L=F[0],A=F[1],M={buyer:L,items:i,date:m.firestore.Timestamp.fromDate(new Date),total:a()},P=function(){S.push("/")};return Object(n.useEffect)((function(){y(i),O(1)}),[i]),c(),Object(d.jsx)("div",{children:0===r?Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"tableDark",children:Object(d.jsxs)("div",{style:{width:"100%",minHeight:"500px",display:"grid"},children:[Object(d.jsxs)("div",{style:{position:"absolute",alignSelf:"center",zIndex:"2",height:"40px",justifySelf:"center"},children:[Object(d.jsx)(h,{border:"none",backgroundColor:"rgb(18, 0, 177)",color:"white",text:"Seguir comprando",onClick:P,height:"50px",width:"150px"}),Object(d.jsx)(h,{border:"none",backgroundColor:"rgb(177, 0, 18)",color:"white",text:"Seguir comprando pero en rojo",onClick:P,height:"auto",width:"150px",margin:"0px 0px 0px 135px"})]}),Object(d.jsx)("img",{style:{width:"500px",height:"100px",justifySelf:"center",paddingRight:"250px"},src:"https://raw.githubusercontent.com/MaxAim/tienda-gaijin-canibano/main/src/img/vacio.png",alt:"Carrito vacio"}),Object(d.jsx)("img",{style:{maxHeight:"400px",maxWidth:"400px",justifySelf:"center"},src:"https://raw.githubusercontent.com/MaxAim/tienda-gaijin-canibano/main/src/img/nada.png",alt:"Carrito vacio"})]})})}):Object(d.jsxs)("div",{children:[v.map((function(e){return Object(d.jsx)(I,{item:e,loaded:x},e.key)})),Object(d.jsx)("div",{style:{display:"flex",justifyContent:"end"},children:Object(d.jsxs)("div",{className:"tableDark",id:"totalCost",children:[Object(d.jsx)("div",{style:{marginRight:"5%"},children:"Total:"}),Object(d.jsxs)("div",{children:["\xa5",a()]})]})}),Object(d.jsx)(T,{completeOrder:function(){D.add(M).then((function(e){var t=e.id;N(t),console.log(k)})).catch((function(e){console.log(e)})),o([]),setTimeout((function(){P()}),1)},setUserInfo:A,userInfo:L})]})})};var z=function(){return Object(d.jsx)(N,{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(j,{}),Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{exact:!0,path:"/category/:categoryId",component:function(){return Object(d.jsx)(v,{})}}),Object(d.jsx)(u.a,{exact:!0,path:"/item/:itemsId",component:function(){return Object(d.jsx)(w,{})}}),Object(d.jsx)(u.a,{exact:!0,path:"/cart",component:function(){return Object(d.jsx)(D,{})}}),Object(d.jsx)(u.a,{path:"/",component:function(){return Object(d.jsx)(v,{})}})]})]})})},F=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,54)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;i(e),n(e),c(e),a(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(z,{})}),document.getElementById("root")),F()}},[[53,1,2]]]);
//# sourceMappingURL=main.625ce622.chunk.js.map