(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f2aeede"],{"02f4":function(t,e,n){var r=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var a,c,o=String(i(e)),u=r(n),s=o.length;return u<0||u>=s?t?"":void 0:(a=o.charCodeAt(u),a<55296||a>56319||u+1===s||(c=o.charCodeAt(u+1))<56320||c>57343?t?o.charAt(u):a:t?o.slice(u,u+2):c-56320+(a-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0ab7":function(t,e,n){},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),i=n("32e9"),a=n("79e5"),c=n("be13"),o=n("2b4c"),u=n("520a"),s=o("species"),l=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=o(t),v=!a(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),d=v?!a(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[s]=function(){return n}),n[p](""),!e}):void 0;if(!v||!d||"replace"===t&&!l||"split"===t&&!f){var g=/./[p],h=n(c,p,""[t],function(t,e,n,r,i){return e.exec===u?v&&!i?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),b=h[0],m=h[1];r(String.prototype,t,b),i(RegExp.prototype,p,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},"28a5":function(t,e,n){"use strict";var r=n("aae3"),i=n("cb7c"),a=n("ebd6"),c=n("0390"),o=n("9def"),u=n("5f1b"),s=n("520a"),l=n("79e5"),f=Math.min,p=[].push,v="split",d="length",g="lastIndex",h=4294967295,b=!l(function(){RegExp(h,"y")});n("214f")("split",2,function(t,e,n,l){var m;return m="c"=="abbc"[v](/(b)*/)[1]||4!="test"[v](/(?:)/,-1)[d]||2!="ab"[v](/(?:ab)*/)[d]||4!="."[v](/(.?)(.?)/)[d]||"."[v](/()()/)[d]>1||""[v](/.?/)[d]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);var a,c,o,u=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,v=void 0===e?h:e>>>0,b=new RegExp(t.source,l+"g");while(a=s.call(b,i)){if(c=b[g],c>f&&(u.push(i.slice(f,a.index)),a[d]>1&&a.index<i[d]&&p.apply(u,a.slice(1)),o=a[0][d],f=c,u[d]>=v))break;b[g]===a.index&&b[g]++}return f===i[d]?!o&&b.test("")||u.push(""):u.push(i.slice(f)),u[d]>v?u.slice(0,v):u}:"0"[v](void 0,0)[d]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,i,r):m.call(String(i),n,r)},function(t,e){var r=l(m,t,this,e,m!==n);if(r.done)return r.value;var s=i(t),p=String(this),v=a(s,RegExp),d=s.unicode,g=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(b?"y":"g"),x=new v(b?s:"^(?:"+s.source+")",g),y=void 0===e?h:e>>>0;if(0===y)return[];if(0===p.length)return null===u(x,p)?[p]:[];var E=0,w=0,R=[];while(w<p.length){x.lastIndex=b?w:0;var k,C=u(x,b?p:p.slice(w));if(null===C||(k=f(o(x.lastIndex+(b?0:w)),p.length))===E)w=c(p,w,d);else{if(R.push(p.slice(E,w)),R.length===y)return R;for(var S=1;S<=C.length-1;S++)if(R.push(C[S]),R.length===y)return R;w=E=k}}return R.push(p.slice(E)),R}]})},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"4bd9":function(t,e,n){"use strict";var r=n("0ab7"),i=n.n(r);i.a},"520a":function(t,e,n){"use strict";var r=n("0bfb"),i=RegExp.prototype.exec,a=String.prototype.replace,c=i,o="lastIndex",u=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[o]||0!==e[o]}(),s=void 0!==/()??/.exec("")[1],l=u||s;l&&(c=function(t){var e,n,c,l,f=this;return s&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),u&&(e=f[o]),c=i.call(f,t),u&&c&&(f[o]=f.global?c.index+c[0].length:e),s&&c&&c.length>1&&a.call(c[0],n,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(c[l]=void 0)}),c}),t.exports=c},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"6b54":function(t,e,n){"use strict";n("3846");var r=n("cb7c"),i=n("0bfb"),a=n("9e1e"),c="toString",o=/./[c],u=function(t){n("2aba")(RegExp.prototype,c,t,!0)};n("79e5")(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?u(function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!a&&t instanceof RegExp?i.call(t):void 0)}):o.name!=c&&u(function(){return o.call(this)})},"7f7f":function(t,e,n){var r=n("86cc").f,i=Function.prototype,a=/^\s*function ([^ (]*)/,c="name";c in i||n("9e1e")&&r(i,c,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},a55b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{staticClass:"bg py-5"}),n("main",{staticClass:"bottom-bg d-flex justify-content-center"},[n("div",{staticClass:"custom-name p-5 text-center"},[n("span",[t._v("你的名字是⋯⋯？")]),n("div",{staticClass:"input-group mt-4"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.name,expression:"name",modifiers:{trim:!0}}],staticClass:"form-control",staticStyle:{"background-color":"#F2F2F2"},attrs:{type:"text",placeholder:"輸入暱稱"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("div",{staticClass:"input-group-append"},[n("a",{staticClass:"btn btn-navy-blue",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.randomname()}}},[n("i",{staticClass:"fas fa-dice fa-lg"})])])]),n("button",{staticClass:"btn btn-navy-blue mt-4",on:{click:function(e){return e.preventDefault(),t.start()}}},[t._v("開始聊天")])])])])},i=[],a=(n("7f7f"),n("6b54"),n("28a5"),{data:function(){return{name:"",namekey:""}},created:function(){void 0!==this.$cookie.get("name")&&"clear"!==this.$cookie.get("name")&&this.$router.push("/index")},methods:{randomname:function(){this.name=Math.random().toString(36).split(".")[1]},start:function(){if(""===this.name)return!1;var t=this.name,e=Math.random().toString(36).split(".")[1],n={name:t,namekey:e};return this.$cookie.set("name",n),this.$router.push("/index"),!0}}}),c=a,o=(n("4bd9"),n("2877")),u=Object(o["a"])(c,r,i,!1,null,null,null);e["default"]=u.exports},aae3:function(t,e,n){var r=n("d3f4"),i=n("2d95"),a=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})}}]);
//# sourceMappingURL=chunk-5f2aeede.a4e986c4.js.map