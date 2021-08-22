(this.webpackJsonpretrospective=this.webpackJsonpretrospective||[]).push([[0],{26:function(e,t,r){},30:function(e){e.exports=JSON.parse('{"name":"retrospective","version":"0.1.0","private":true,"dependencies":{"@fortawesome/fontawesome-svg-core":"^1.2.36","@fortawesome/free-solid-svg-icons":"^5.15.4","@fortawesome/react-fontawesome":"^0.1.15","@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^11.1.0","@testing-library/user-event":"^12.1.10","animate.css":"^4.1.1","bootstrap":"^5.1.0","firebase":"^8.9.1","react":"^17.0.2","react-bootstrap":"^1.6.1","react-dom":"^17.0.2","react-router-dom":"^5.2.0","react-scripts":"4.0.3","web-vitals":"^1.0.1"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","push:dev":"git add . && git commit -m\'dev\' && git push"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"firebaseConfig":{"apiKey":"AIzaSyDtB4kSh_19Hx2NM5l1l07egKmjc9yCX1c","authDomain":"retro-for-ksauto.firebaseapp.com","projectId":"retro-for-ksauto","storageBucket":"retro-for-ksauto.appspot.com","messagingSenderId":"810991706715","appId":"1:810991706715:web:7625a81dc720cbbe90157e","measurementId":"G-NXX07T8RQG"}}')},37:function(e,t,r){},46:function(e,t,r){"use strict";r.r(t);var c=r(1),a=r.n(c),s=r(14),o=r.n(s),n=(r(37),r(15)),i=r(27),l=(r(26),r(20)),j=r(18),d=r(50),b=(r(19),r(2));function u(e){var t,r=Object(c.useState)(0),a=Object(n.a)(r,2),s=a[0],o=a[1],i=Object(c.useState)(!1),u=Object(n.a)(i,2),p=u[0],O=u[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(d.a,{className:"card-style",style:{backgroundColor:null!==(t=e.color)&&void 0!==t?t:"gray"},children:Object(b.jsxs)(d.a.Body,{children:[e.text,Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"retro-card-footer",children:[Object(b.jsxs)("span",{className:"retro-card-footer-action-icon",children:[Object(b.jsx)("span",{style:{fontSize:"60%"},children:"NilPhumiphat"})," ",Object(b.jsx)(j.a,{icon:l.d})," "]}),Object(b.jsxs)("span",{className:"retro-card-footer-action-icon",children:["0 ",Object(b.jsx)(j.a,{className:"cursor-pointer",icon:l.a})]}),Object(b.jsxs)("span",{className:"retro-card-footer-action-icon",onClick:function(){o(p?s-1:s+1),O(!s)},children:[s," ",Object(b.jsx)(j.a,{className:"cursor-pointer",style:{color:p?"blue":"white"},icon:l.c})]})]})]})})})}var p=r(49),O=r(51),f=r(23),x=(r(47),r(30));f.a.initializeApp(x.firebaseConfig);var m=f.a.firestore();function h(e){var t,r=Object(c.useState)([]),a=Object(n.a)(r,2),s=a[0],o=a[1],f=Object(c.useState)(!1),x=Object(n.a)(f,2),h=x[0],g=x[1],y=function(){return g(!1)},N=Object(c.useRef)(null),w=Object(c.useRef)(null);return Object(c.useEffect)((function(){m.collection("boardItems").where("boardItemId","==",e.id).orderBy("id","asc").onSnapshot((function(e){var t=[];e.forEach((function(e){var r=e.data();t.push(Object(b.jsx)(u,{text:r.text,color:r.color}))})),o(t)}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(d.a,{className:"board-item",children:[Object(b.jsxs)(d.a.Header,{className:"text-center",style:Object(i.a)(Object(i.a)({},v),{},{backgroundColor:null!==(t=e.color)&&void 0!==t?t:v.backgroundColor}),children:[Object(b.jsx)("b",{children:e.title}),Object(b.jsx)(j.a,{className:"add-icon",icon:l.b,onClick:function(){return g(!0)}})]}),Object(b.jsx)(d.a.Body,{children:s})]}),Object(b.jsxs)(p.a,{show:h,on:y,children:[Object(b.jsxs)(p.a.Header,{children:[Object(b.jsx)(p.a.Title,{children:"\u0e40\u0e1e\u0e34\u0e48\u0e21 Retrospective Card"}),Object(b.jsx)("span",{className:"add-icon",children:Object(b.jsx)("input",{type:"color",ref:w})})]}),Object(b.jsx)(p.a.Body,{children:Object(b.jsx)("textarea",{className:"form-control",placeholder:"\u0e43\u0e2a\u0e48\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23.....",ref:N})}),Object(b.jsxs)(p.a.Footer,{children:[Object(b.jsx)(O.a,{variant:"danger",onClick:y,children:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01"}),Object(b.jsx)(O.a,{variant:"success",onClick:function(){var t;N.current.value&&""!==N.current.value&&m.collection("boardItems").add({boardItemId:e.id,id:parseInt((null!==(t=s.length)&&void 0!==t?t:0)+1),text:N.current.value,color:w.current.value}),y()},children:"\u0e40\u0e1e\u0e34\u0e48\u0e21"})]})]})]})}var v={backgroundColor:"#2c3e50",color:"white"};function g(e,t){t.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{id:"1",title:"\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e17\u0e31\u0e1a\u0e43\u0e08"}),Object(b.jsx)(h,{id:"2",title:"\u0e2a\u0e34\u0e48\u0e07\u0e17\u0e35\u0e48\u0e44\u0e14\u0e49\u0e17\u0e33\u0e40\u0e40\u0e25\u0e30\u0e20\u0e39\u0e21\u0e34\u0e43\u0e08"}),Object(b.jsx)(h,{id:"3",title:"\u0e2a\u0e34\u0e48\u0e07\u0e17\u0e35\u0e48\u0e04\u0e27\u0e23\u0e40\u0e40\u0e01\u0e49\u0e40\u0e40\u0e25\u0e30\u0e1b\u0e23\u0e31\u0e1a\u0e1b\u0e23\u0e38\u0e07"}),Object(b.jsx)(h,{id:"4",title:"\u0e2a\u0e34\u0e48\u0e07\u0e17\u0e35\u0e48\u0e04\u0e27\u0e23\u0e40\u0e40\u0e01\u0e49\u0e40\u0e40\u0e25\u0e30\u0e1b\u0e23\u0e31\u0e1a\u0e1b\u0e23\u0e38\u0e07"}),Object(b.jsx)(h,{id:"5",title:"\u0e2a\u0e34\u0e48\u0e07\u0e17\u0e35\u0e48\u0e04\u0e27\u0e23\u0e40\u0e40\u0e01\u0e49\u0e40\u0e40\u0e25\u0e30\u0e1b\u0e23\u0e31\u0e1a\u0e1b\u0e23\u0e38\u0e07"})]})}function y(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2);t[0],t[1],localStorage.getItem("data_username");return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"d-flex flex-wrap justify-content-center align-items-top h-100 pl-5 pr-5t",style:{overflowY:"scroll"},children:Object(b.jsx)(g,{})})})}function N(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(y,{})})}var w=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,52)).then((function(t){var r=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;r(e),c(e),a(e),s(e),o(e)}))};r(44),r(45);o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),w()}},[[46,1,2]]]);
//# sourceMappingURL=main.17a69093.chunk.js.map