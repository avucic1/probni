(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{40:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),r=n(17),o=n.n(r),j=n(8),s=n(4),a=n(3),u=n.n(a),b=(n(40),"http://localhost:3001/api/troskovi/"),l=function(){return u.a.get(b)},d=function(t,e){return u.a.put("".concat(b,"/").concat(t),e)},O=function(t){return u.a.delete("".concat(b,"/").concat(t))},h=n(0),x=function(t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t.vrsta}),Object(h.jsx)("td",{children:t.datum}),Object(h.jsx)("td",{children:t.opis}),Object(h.jsxs)("td",{children:[Object(h.jsx)("button",{onClick:t.uredi,id:"button-uredi",children:"Uredi"}),Object(h.jsx)("button",{onClick:t.brisi,id:"button-brisi",children:"Bri\u0161i"})]}),Object(h.jsx)("td",{children:t.iznos})]})},f=function(t){var e=Object(c.useState)([]),n=Object(s.a)(e,2),i=n[0],r=n[1],o=Object(c.useState)(""),a=Object(s.a)(o,2),b=a[0],f=a[1],p=Object(c.useState)(""),v=Object(s.a)(p,2),g=v[0],k=v[1],S=Object(c.useState)("Prihod"),m=Object(s.a)(S,2),z=m[0],C=m[1],P=Object(c.useState)(!1),E=Object(s.a)(P,2),I=E[0],R=E[1];Object(c.useEffect)((function(){u.a.get("http://localhost:3001/api/troskovi").then((function(t){return r(t.data)}))}),[]),Object(c.useEffect)((function(){console.log("Effect"),l().then((function(t){r(t.data)}))}),[]);var A=function(t){console.log(t.target.value),C(t.target.value)},y=Object(c.useState)(0),D=Object(s.a)(y,2),N=D[0],U=D[1];Object(c.useEffect)((function(){var t=0,e=0,n=i.filter((function(t){return"Prihod"==t.vrsta})),c=i.filter((function(t){return"Rashod"==t.vrsta}));n.forEach((function(e){return t+=Number(e.iznos)})),c.forEach((function(t){return e+=Number(t.iznos)})),U(t-e)}),[i]);return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Transakcije"}),Object(h.jsx)("button",{onClick:function(){return R(!I)},children:"NOVI TRO\u0160AK"}),I&&Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=new Date;t.preventDefault(),console.log("Klik",t.target);var n={id:i.length+1,vrsta:z,datum:e.getFullYear()+"-"+e.getMonth()+"-"+e.getDate(),opis:g,iznos:b};r(i.concat(n)),f(""),k(""),C("Prihod"),console.log("jeli ili ne")},children:[Object(h.jsx)("label",{children:"Vrsta tro\u0161ka:"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"radio",value:"Prihod",checked:"Prihod"===z,onChange:A}),Object(h.jsx)("label",{children:"Prihod"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"radio",value:"Rashod",checked:"Rashod"===z,onChange:A}),Object(h.jsx)("label",{children:"Rashod"}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"Opis:"}),Object(h.jsx)("input",{type:"text",value:g,onChange:function(t){console.log(t.target.value),k(t.target.value)}}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"Iznos:"}),Object(h.jsx)("input",{type:"text",value:b,onChange:function(t){console.log(t.target.value),f(t.target.value)}}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{type:"submit",children:"OK"}),Object(h.jsx)("button",{onClick:function(){f(""),k(""),C("Prihod"),R(!I)},children:"Cancel"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{children:"SAMO PRIHODI"}),Object(h.jsx)("button",{children:"SAMO RASHODI"}),Object(h.jsx)("button",{children:"SVE TRANSAKCIJE"})]}),Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"VRSTA"}),Object(h.jsx)("th",{children:"DATUM"}),Object(h.jsx)("th",{children:"OPIS"}),Object(h.jsx)("th",{children:"OPCIJE"}),Object(h.jsx)("th",{children:"IZNOS"})]})}),Object(h.jsx)("tbody",{children:i.map((function(t){return Object(h.jsx)(x,{vrsta:t.vrsta,datum:t.datum,opis:t.opis,iznos:t.iznos+"kn",uredi:function(){return function(t){var e=i.find((function(e){return e.id===t})),n=e.iznos,c=prompt("Unesite novi iznos za ".concat(e.opis,":")),o=Object(j.a)(Object(j.a)({},e),{},{iznos:null==c?n:c});d(t,o).then((function(e){console.log(e),r(i.map((function(n){return n.id!==t?n:e.data})))}))}(t.id)},brisi:function(){return e=t.id,void O(e).then((function(t){console.log(t),r(i.filter((function(t){return t.id!==e})))}));var e}},t.id)}))}),Object(h.jsx)("tfoot",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{}),Object(h.jsx)("td",{}),Object(h.jsx)("td",{}),Object(h.jsx)("td",{id:"td",children:"Ukupno:"}),Object(h.jsx)("td",{children:N+"kn"})]})})]}),Object(h.jsx)("label",{children:"UKUPNO: "})]})};o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.6a76f3f8.chunk.js.map