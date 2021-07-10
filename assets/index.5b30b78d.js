import{S as t,i as e,s as r,e as a,c as n,a as o,d as i,b as s,n as c,T as l,t as h,f as d,g as u,h as m,j as p,k as f,l as g,m as $,o as E,p as v,q as y,r as b,u as j,v as x,w,x as N,y as P,z as T,A as D,B as I,C as k,D as B,E as O,F as A,G as C,H as S,I as J}from"./vendor.2a92e02e.js";function V(t){let e,r;return{c(){e=a("div"),r=h("no data yet"),this.h()},l(t){e=n(t,"DIV",{id:!0});var a=o(e);r=d(a,"no data yet"),a.forEach(i),this.h()},h(){u(e,"id","table")},m(t,a){s(t,e,a),m(e,r)},p:c,d(t){t&&i(e)}}}function z(t){let e,r;return{c(){e=a("div"),r=h(t[0]),this.h()},l(a){e=n(a,"DIV",{style:!0});var s=o(e);r=d(s,t[0]),s.forEach(i),this.h()},h(){p(e,"color","red"),p(e,"margin-top","1rem")},m(t,a){s(t,e,a),m(e,r)},p(t,e){1&e&&f(r,t[0])},d(t){t&&i(e)}}}function H(t){let e;function r(t,e){return t[0]?z:V}let l=r(t),h=l(t);return{c(){e=a("center"),h.c()},l(t){e=n(t,"CENTER",{});var r=o(e);h.l(r),r.forEach(i)},m(t,r){s(t,e,r),h.m(e,null)},p(t,[a]){l===(l=r(t))&&h?h.p(t,a):(h.d(1),h=l(t),h&&(h.c(),h.m(e,null)))},i:c,o:c,d(t){t&&i(e),h.d()}}}function L(t,e,r){let a,n,{data:o}=e,{pagination:i}=e,{height:s=600}=e,{jsonParseError:c}=e;const h=t=>{const e=t.reduce(((t,e)=>(Object.entries(e).forEach((([e,r])=>{t[e]={title:e.toUpperCase(),field:e,headerFilter:"input"}})),t)),{});return Object.entries(e).reduce(((t,[e,r])=>(t.push(r),t)),[])};return t.$$set=t=>{"data"in t&&r(1,o=t.data),"pagination"in t&&r(2,i=t.pagination),"height"in t&&r(3,s=t.height),"jsonParseError"in t&&r(4,c=t.jsonParseError)},t.$$.update=()=>{var e,d,u;14&t.$$.dirty&&(console.log({data:o}),e=o,d=i,u=s,c?n.destroy():(r(0,a=void 0),setTimeout((()=>{try{const t=d?{pagination:"local",height:u+"px"}:{};n&&n.destroy(),n=new l("#table",Object.assign({data:e,resizableColumns:!0,movableColumns:!0,headerFilterPlaceholder:"filter...",height:"100%",layout:"fitDataTable",columns:h(e)},t)),console.log({tabulatorTable:n})}catch(t){r(0,a=t)}}),10)))},[a,o,i,s,c]}class F extends t{constructor(t){super(),e(this,t,L,H,r,{data:1,pagination:2,height:3,jsonParseError:4})}}function R(t){let e,r;return{c(){e=a("div"),r=h(t[1]),this.h()},l(a){e=n(a,"DIV",{style:!0});var s=o(e);r=d(s,t[1]),s.forEach(i),this.h()},h(){p(e,"color","red"),p(e,"margin-bottom","1rem"),p(e,"text-align","center")},m(t,a){s(t,e,a),m(e,r)},p(t,e){2&e&&f(r,t[1])},d(t){t&&i(e)}}}function U(t){var e;let r,l,h,d,f,b,j=(null==(e=t[0])?void 0:e.trim())&&t[1],x=j&&R(t);return{c(){r=a("div"),l=a("textarea"),h=g(),x&&x.c(),d=$(),this.h()},l(t){r=n(t,"DIV",{style:!0});var e=o(r);l=n(e,"TEXTAREA",{placeholder:!0,style:!0}),o(l).forEach(i),e.forEach(i),h=E(t),x&&x.l(t),d=$(),this.h()},h(){u(l,"placeholder","Paste JSON array here"),p(l,"width","100%"),p(l,"height","12rem"),p(l,"resize","vertical"),p(r,"padding-left","1rem"),p(r,"padding-right","1rem"),p(r,"margin-bottom","1rem")},m(e,a){s(e,r,a),m(r,l),v(l,t[0]),s(e,h,a),x&&x.m(e,a),s(e,d,a),f||(b=y(l,"input",t[2]),f=!0)},p(t,[e]){var r;1&e&&v(l,t[0]),3&e&&(j=(null==(r=t[0])?void 0:r.trim())&&t[1]),j?x?x.p(t,e):(x=R(t),x.c(),x.m(d.parentNode,d)):x&&(x.d(1),x=null)},i:c,o:c,d(t){t&&i(r),t&&i(h),x&&x.d(t),t&&i(d),f=!1,b()}}}function q(t,e,r){let{json:a}=e,{error:n}=e;return t.$$set=t=>{"json"in t&&r(0,a=t.json),"error"in t&&r(1,n=t.error)},[a,n,function(){a=this.value,r(0,a)}]}class G extends t{constructor(t){super(),e(this,t,q,U,r,{json:0,error:1})}}function M(t){let e,r,c,l,u,f,$;function v(e){t[10](e)}let y={error:t[1].error};return void 0!==t[0]&&(y.json=t[0]),u=new G({props:y}),I.push((()=>k(u,"json",v))),{c(){e=a("center"),r=a("h1"),c=h("JSON ➡️ Table"),l=g(),B(u.$$.fragment),this.h()},l(t){e=n(t,"CENTER",{});var a=o(e);r=n(a,"H1",{style:!0});var s=o(r);c=d(s,"JSON ➡️ Table"),s.forEach(i),l=E(a),O(u.$$.fragment,a),a.forEach(i),this.h()},h(){p(r,"margin-top","3rem"),p(r,"margin-bottom","3rem")},m(t,a){s(t,e,a),m(e,r),m(r,c),m(e,l),A(u,e,null),$=!0},p(t,e){const r={};2&e&&(r.error=t[1].error),!f&&1&e&&(f=!0,r.json=t[0],C((()=>f=!1))),u.$set(r)},i(t){$||(N(u.$$.fragment,t),$=!0)},o(t){x(u.$$.fragment,t),$=!1},d(t){t&&i(e),S(u)}}}function X(t){let e,r,c,l,f,$,v,P,T,I,k,C,V,z,H,L=(t[5]||t[1].error)&&K(t);return C=new F({props:{data:t[1].data,jsonParseError:t[1].error,pagination:t[4],height:t[3]-(t[2]+6)}}),{c(){e=a("div"),r=a("label"),c=a("input"),l=h("\n        Edit Data"),f=g(),$=a("label"),v=a("input"),P=h("\n        Pagination"),I=g(),L&&L.c(),k=g(),B(C.$$.fragment),this.h()},l(t){e=n(t,"DIV",{style:!0});var a=o(e);r=n(a,"LABEL",{for:!0,style:!0});var s=o(r);c=n(s,"INPUT",{type:!0,id:!0}),l=d(s,"\n        Edit Data"),s.forEach(i),f=E(a),$=n(a,"LABEL",{for:!0,style:!0});var h=o($);v=n(h,"INPUT",{type:!0,id:!0}),P=d(h,"\n        Pagination"),h.forEach(i),a.forEach(i),I=E(t),L&&L.l(t),k=E(t),O(C.$$.fragment,t),this.h()},h(){u(c,"type","checkbox"),u(c,"id","editDataBox"),u(r,"for","editDataBox"),p(r,"margin-left","1rem"),u(v,"type","checkbox"),u(v,"id","paginationBox"),u($,"for","paginationBox"),p($,"margin-left","1rem"),p(e,"height","50px"),p(e,"display","flex"),p(e,"justify-content","center"),p(e,"align-items","center"),b((()=>t[8].call(e)))},m(a,n){s(a,e,n),m(e,r),m(r,c),c.checked=t[5],m(r,l),m(e,f),m(e,$),m($,v),v.checked=t[4],m($,P),T=j(e,t[8].bind(e)),s(a,I,n),L&&L.m(a,n),s(a,k,n),A(C,a,n),V=!0,z||(H=[y(c,"change",t[6]),y(v,"change",t[7])],z=!0)},p(t,e){32&e&&(c.checked=t[5]),16&e&&(v.checked=t[4]),t[5]||t[1].error?L?(L.p(t,e),34&e&&N(L,1)):(L=K(t),L.c(),N(L,1),L.m(k.parentNode,k)):L&&(D(),x(L,1,1,(()=>{L=null})),w());const r={};2&e&&(r.data=t[1].data),2&e&&(r.jsonParseError=t[1].error),16&e&&(r.pagination=t[4]),12&e&&(r.height=t[3]-(t[2]+6)),C.$set(r)},i(t){V||(N(L),N(C.$$.fragment,t),V=!0)},o(t){x(L),x(C.$$.fragment,t),V=!1},d(t){t&&i(e),T(),t&&i(I),L&&L.d(t),t&&i(k),S(C,t),z=!1,J(H)}}}function K(t){let e,r,a;function n(e){t[9](e)}let o={error:t[1].error};return void 0!==t[0]&&(o.json=t[0]),e=new G({props:o}),I.push((()=>k(e,"json",n))),{c(){B(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,r){A(e,t,r),a=!0},p(t,a){const n={};2&a&&(n.error=t[1].error),!r&&1&a&&(r=!0,n.json=t[0],C((()=>r=!1))),e.$set(n)},i(t){a||(N(e.$$.fragment,t),a=!0)},o(t){x(e.$$.fragment,t),a=!1},d(t){S(e,t)}}}function Q(t){let e,r,c,l,h;const d=[X,M],u=[];function m(t,e){return t[1].data||t[5]?0:1}return r=m(t),c=u[r]=d[r](t),{c(){e=a("main"),c.c(),this.h()},l(t){e=n(t,"MAIN",{style:!0});var r=o(e);c.l(r),r.forEach(i),this.h()},h(){p(e,"height","100%"),b((()=>t[11].call(e)))},m(a,n){s(a,e,n),u[r].m(e,null),l=j(e,t[11].bind(e)),h=!0},p(t,[a]){let n=r;r=m(t),r===n?u[r].p(t,a):(D(),x(u[n],1,1,(()=>{u[n]=null})),w(),c=u[r],c?c.p(t,a):(c=u[r]=d[r](t),c.c()),N(c,1),c.m(e,null))},i(t){h||(N(c),h=!0)},o(t){x(c),h=!1},d(t){t&&i(e),u[r].d(),l()}}}function W(t,e,r){let a,n,o,i,s=!0,c=!1;const l=P("lzw");T((()=>{l.decompress(window.location.hash.substring(0)).then((t=>r(0,n=JSON.stringify(t.data,null,2))))}));return t.$$.update=()=>{1&t.$$.dirty&&r(1,a=(t=>{try{return{data:JSON.parse(t),error:""}}catch(e){return{data:void 0,error:e+""}}})(n)),2&t.$$.dirty&&l.compress(a).then((t=>window.location.hash="#"+t))},[n,a,o,i,s,c,function(){c=this.checked,r(5,c)},function(){s=this.checked,r(4,s)},function(){o=this.clientHeight,r(2,o)},function(t){n=t,r(0,n)},function(t){n=t,r(0,n)},function(){i=this.clientHeight,r(3,i)}]}new class extends t{constructor(t){super(),e(this,t,W,Q,r,{})}}({target:document.getElementById("app")});