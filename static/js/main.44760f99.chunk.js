(this["webpackJsonpkeeper-app"]=this["webpackJsonpkeeper-app"]||[]).push([[0],{36:function(e,t,n){e.exports=n(47)},47:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(6),c=n.n(r),u=n(32),o=n(19),i=n(27),m=n.n(i);var E=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(m.a,null),"Keeper"))};var f=function(){return l.a.createElement("footer",null,l.a.createElement("p",null,"Made by Vigneshwaran"))},p=n(29),s=n.n(p);var d=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(s.a,null)))},v=n(23),b=n(30),h=n(31),j=n.n(h),k=n(63),O=n(64);var g=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1],u=Object(a.useState)({title:"",content:""}),i=Object(o.a)(u,2),m=i[0],E=i[1];function f(e){var t=e.target,n=t.name,a=t.value;E((function(e){return Object(b.a)({},e,Object(v.a)({},n,a))}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},r&&l.a.createElement("input",{name:"title",onChange:f,value:m.title,placeholder:"Title"}),l.a.createElement("textarea",{name:"content",onClick:function(){c(!0)},onChange:f,value:m.content,placeholder:"Take a note...",rows:r?3:1}),l.a.createElement(O.a,{in:r},l.a.createElement(k.a,{onClick:function(t){e.onAdd(m),E({title:"",content:""}),c(!1),t.preventDefault()}},l.a.createElement(j.a,null)))))};var C=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];function c(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(g,{onAdd:function(e){r((function(t){return[].concat(Object(u.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(d,{key:t,id:t,title:e.title,content:e.content,onDelete:c})})),l.a.createElement(f,null))};c.a.render(l.a.createElement(C,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.44760f99.chunk.js.map