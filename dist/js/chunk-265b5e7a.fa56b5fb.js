(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-265b5e7a"],{"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"0838":function(t,e,n){},"11e9":function(t,e,n){var r=n("52a7"),o=n("4630"),a=n("6821"),i=n("6a99"),c=n("69a8"),s=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=a(t),e=i(e,!0),s)try{return u(t,e)}catch(n){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},"1bc3":function(t,e,n){var r=n("f772");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var r=n("f772"),o=n("e53d").document,a=r(o)&&r(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"2f21":function(t,e,n){"use strict";var r=n("79e5");t.exports=function(t,e){return!!t&&r(function(){e?t.call(null,function(){},1):t.call(null)})}},"35e8":function(t,e,n){var r=n("d9f6"),o=n("aebd");t.exports=n("8e60")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"454f":function(t,e,n){n("46a7");var r=n("584a").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"456d":function(t,e,n){var r=n("4bf8"),o=n("0d58");n("5eda")("keys",function(){return function(t){return o(r(t))}})},"46a7":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"504c":function(t,e,n){var r=n("9e1e"),o=n("0d58"),a=n("6821"),i=n("52a7").f;t.exports=function(t){return function(e){var n,c=a(e),s=o(c),u=s.length,f=0,l=[];while(u>f)n=s[f++],r&&!i.call(c,n)||l.push(t?[n,c[n]]:c[n]);return l}}},"55dd":function(t,e,n){"use strict";var r=n("5ca1"),o=n("d8e8"),a=n("4bf8"),i=n("79e5"),c=[].sort,s=[1,2,3];r(r.P+r.F*(i(function(){s.sort(void 0)})||!i(function(){s.sort(null)})||!n("2f21")(c)),"Array",{sort:function(t){return void 0===t?c.call(a(this)):c.call(a(this),o(t))}})},"584a":function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},"5eda":function(t,e,n){var r=n("5ca1"),o=n("8378"),a=n("79e5");t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],i={};i[t]=e(n),r(r.S+r.F*a(function(){n(1)}),"Object",i)}},"63b6":function(t,e,n){var r=n("e53d"),o=n("584a"),a=n("d864"),i=n("35e8"),c=n("07e3"),s="prototype",u=function(t,e,n){var f,l,d,p=t&u.F,m=t&u.G,v=t&u.S,h=t&u.P,b=t&u.B,y=t&u.W,g=m?o:o[e]||(o[e]={}),x=g[s],w=m?r:v?r[e]:(r[e]||{})[s];for(f in m&&(n=e),n)l=!p&&w&&void 0!==w[f],l&&c(g,f)||(d=l?w[f]:n[f],g[f]=m&&"function"!=typeof w[f]?n[f]:b&&l?a(d,r):y&&w[f]==d?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[s]=t[s],e}(d):h&&"function"==typeof d?a(Function.call,d):d,h&&((g.virtual||(g.virtual={}))[f]=d,t&u.R&&x&&!x[f]&&i(x,f,d)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")(function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7f7f":function(t,e,n){var r=n("86cc").f,o=Function.prototype,a=/^\s*function ([^ (]*)/,i="name";i in o||n("9e1e")&&r(o,i,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},"85f2":function(t,e,n){t.exports=n("454f")},8615:function(t,e,n){var r=n("5ca1"),o=n("504c")(!1);r(r.S,"Object",{values:function(t){return o(t)}})},"8e60":function(t,e,n){t.exports=!n("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"8e6e":function(t,e,n){var r=n("5ca1"),o=n("990b"),a=n("6821"),i=n("11e9"),c=n("f1ae");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,r=a(t),s=i.f,u=o(r),f={},l=0;while(u.length>l)n=s(r,e=u[l++]),void 0!==n&&c(f,e,n);return f}})},9093:function(t,e,n){var r=n("ce10"),o=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"990b":function(t,e,n){var r=n("9093"),o=n("2621"),a=n("cb7c"),i=n("7726").Reflect;t.exports=i&&i.ownKeys||function(t){var e=r.f(a(t)),n=o.f;return n?e.concat(n(t)):e}},"9c54":function(t,e,n){t.exports=n.p+"img/comment.f91f95c0.svg"},ac6a:function(t,e,n){for(var r=n("cadf"),o=n("0d58"),a=n("2aba"),i=n("7726"),c=n("32e9"),s=n("84f2"),u=n("2b4c"),f=u("iterator"),l=u("toStringTag"),d=s.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=o(p),v=0;v<m.length;v++){var h,b=m[v],y=p[b],g=i[b],x=g&&g.prototype;if(x&&(x[f]||c(x,f,d),x[l]||c(x,l,b),s[b]=d,y))for(h in r)x[h]||a(x,h,r[h],!0)}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},bd86:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("85f2"),o=n.n(r);function a(t,e,n){return e in t?o()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},c71c:function(t,e,n){"use strict";var r=n("0838"),o=n.n(r);o.a},d504:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrap"},[r("nav",{staticClass:"top-nav d-flex bg-white align-items-center"},[r("ul",{staticClass:"menu d-flex px-4 mb-0"},[r("li",[r("router-link",{staticClass:"py-3",attrs:{to:"/index"}},[t._v("首頁")])],1)]),r("div",{staticClass:"p-3 ml-auto bg-navy-blue text-white name"},[t._v(t._s(t.starttalk.name))])]),r("header",{staticClass:"top-bg py-5"}),r("section",{staticClass:"container",staticStyle:{transform:"translateY(-15%)"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 mb-4"},[r("div",{staticClass:"today-topic"},[r("h2",{staticClass:"col-12 hot-title"},[t._v("本日話題")]),r("div",{staticClass:"theme"},[r("a",{staticClass:"d-flex justify-content-center align-items-center text-center",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.updatemsg(t.todaytopic.id,t.todaytopic.name,"today")}}},[r("div",{staticClass:"content d-flex flex-column"},[r("span",{staticClass:"mb-3"},[t._v("#"+t._s(t.todaytopic.name))]),r("span",[t._v(t._s(t.todaytopic.num)),r("i",{staticClass:"fas fa-comment-dots ml-2"})])])])])])]),r("div",{staticClass:"col-12 d-flex flex-wrap hot"},[r("h2",{staticClass:"col-12 hot-title"},[t._v("熱門偷偷說")]),t._l(t.uesrstory,function(e){return r("div",{key:e.id,staticClass:"col-5 d-flex flex-column hot-topic"},[r("p",{staticClass:"mb-4 flex-content"},[t._v(t._s(e.name))]),r("div",{staticClass:"d-flex flex-footer justify-content-between align-items-center"},[r("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(e.creatcustom))]),r("div",[r("span",{staticClass:"mr-2"},[t._v(t._s(e.num))]),r("img",{attrs:{src:n("9c54"),width:"15px",height:"15px",alt:""}})])]),r("a",{attrs:{href:"#",title:e.name},on:{click:function(n){return n.preventDefault(),t.updatemsg(e.id,e.name)}}})])}),r("a",{staticClass:"addroom-btn text-center",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.modal=!t.modal}}},[r("i",{staticClass:"fas fa-pencil-alt fa-lg text-navy-blue"})])],2)])]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.modal,expression:"modal"}],staticClass:"addroom p-5"},[r("h4",{staticClass:"text-center"},[t._v("新增聊天室")]),r("div",{staticClass:"modal-hide"},[r("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.modal=!t.modal}}},[r("i",{staticClass:"fas fa-times fa-lg"})])]),r("div",{staticClass:"input-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.Addroom,expression:"Addroom"}],staticStyle:{resize:"none"},attrs:{cols:"30",rows:"10"},domProps:{value:t.Addroom},on:{input:function(e){e.target.composing||(t.Addroom=e.target.value)}}}),r("button",{staticClass:"btn btn-primary ml-auto mt-3",on:{click:function(e){t.addroom(),t.modal=!1}}},[t._v("新增")])])]),r("div",{class:{"modal-bg":t.modal}})])},o=[],a=(n("8e6e"),n("55dd"),n("7f7f"),n("8615"),n("ac6a"),n("456d"),n("bd86")),i=n("2f62");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach(function(e){Object(a["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var u={data:function(){return{modal:!1,Addroom:"",todaytopic:{},uesrstory:[]}},computed:s({},Object(i["b"])(["starttalk"])),created:function(){""===this.starttalk&&this.$router.push("/")},mounted:function(){this.updateroom("today"),this.updateroom()},methods:{addroom:function(){if(""===this.Addroom)return!1;var t=Math.floor(Date.now()/100);return this.$firebase.database().ref("/room/").push({creatcustom:this.starttalk,name:this.Addroom,timestamp:t}),this.Addroom="",this.updateroom(),!0},updateroom:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"room";this.$firebase.database().ref("/".concat(e,"/")).on("value",function(n){if(null===n.val())return!1;var r=Object.keys(n.val()),o=Object.values(n.val()),a=[],i=0,c="";return r.forEach(function(t,e){void 0===o[e].msg?(i=0,c=""):(i=Object.keys(o[e].msg).length,c=Object.values(o[e].msg)[i-1].custom),a.push({id:t,creatcustom:o[e].creatcustom.name,name:o[e].name,num:i,custom:c})}),a.sort(function(t,e){return e.num-t.num}),"room"===e?t.uesrstory=a:t.todaytopic=a[0],!0})},updatemsg:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"room";this.$router.push({path:"roommsg",query:{room:n,roomid:t,roomname:e}})}}},f=u,l=(n("c71c"),n("2877")),d=Object(l["a"])(f,r,o,!1,null,null,null);e["default"]=d.exports},d864:function(t,e,n){var r=n("79aa");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var r=n("e4ae"),o=n("794b"),a=n("1bc3"),i=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(r(t),e=a(e,!0),r(n),o)try{return i(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},e4ae:function(t,e,n){var r=n("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},f1ae:function(t,e,n){"use strict";var r=n("86cc"),o=n("4630");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
//# sourceMappingURL=chunk-265b5e7a.fa56b5fb.js.map