(function(e){function t(t){for(var r,o,c=t[0],i=t[1],f=t[2],s=0,l=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(l.length)l.shift()();return u.push.apply(u,f||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-00569a46":"1878429d","chunk-198ff19b":"6d5eaad2","chunk-9efbc6b0":"c54ecb7f"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-9efbc6b0":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-00569a46":"31d6cfe0","chunk-198ff19b":"31d6cfe0","chunk-9efbc6b0":"e93db863"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var f=u[c],s=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(s===r||s===a))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){f=l[c],s=f.getAttribute("data-href");if(s===r||s===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=u);var f,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var l=new Error;f=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var p=setTimeout(function(){f({type:"timeout",target:s})},12e4);s.onerror=s.onload=f,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],s=f.push.bind(f);f.push=t,f=f.slice();for(var l=0;l<f.length;l++)t(f[l]);var p=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("59ca"),a=n.n(o),u=n("a78e"),c=n.n(u),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.load?n("div",{staticClass:"load"},[e._m(0)]):e._e(),n("router-view")],1)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lo"},[n("i",{staticClass:"fas fa-spinner fa-pulse fa-3x"}),n("span",[e._v("請稍後")])])}],s={data:function(){return{load:!1}},created:function(){var e=this;this.$bus.$on("loading",function(t){e.load=t})},beforeDestroy:function(){this.$bus.$off("loading")}},l=s,p=(n("5c0b"),n("2877")),d=Object(p["a"])(l,i,f,!1,null,null,null),h=d.exports,b=n("8c4f");r["a"].use(b["a"]);var m=new b["a"]({routes:[{path:"/",component:function(){return n.e("chunk-9efbc6b0").then(n.bind(null,"a55b"))}},{path:"/index",component:function(){return n.e("chunk-00569a46").then(n.bind(null,"d504"))},children:[{path:"roommsg",component:function(){return n.e("chunk-198ff19b").then(n.bind(null,"ea95"))}}]}]}),v=(n("4989"),n("15f5"),n("ea7b"),n("66ce"),n("588e"),new r["a"]);r["a"].prototype.$bus=v,r["a"].prototype.$cookie=c.a;var g={apiKey:"AIzaSyCkNQgPvrfDWAT25nBlGudbqwSirt6T_bA",authDomain:"test-e30fc.firebaseapp.com",databaseURL:"https://test-e30fc.firebaseio.com",projectId:"test-e30fc",storageBucket:"test-e30fc.appspot.com",messagingSenderId:"297559977714",appId:"1:297559977714:web:b2443f82b819b8f1"};a.a.initializeApp(g),r["a"].config.productionTip=!1,r["a"].prototype.$firebase=a.a,new r["a"]({router:m,render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("e332"),o=n.n(r);o.a},e332:function(e,t,n){}});
//# sourceMappingURL=app.e8c69863.js.map