(function(e){function t(t){for(var a,c,u=t[0],l=t[1],i=t[2],d=0,h=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&h.push(r[c][0]),r[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);s&&s(t);while(h.length)h.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},c={app:0},r={app:0},o=[];function u(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6cdeb027","chunk-035e72ef":"4ae0efee","chunk-0a25776c":"87ef29e1","chunk-1b9ac8e8":"7c57a73d","chunk-674bc12b":"da0acb9c","chunk-2138be32":"2ad80f04","chunk-2185348a":"730ff6ad","chunk-2d2a7638":"aff428c9","chunk-45364012":"d9ef1b44","chunk-4ef1fd48":"c6c6e457","chunk-51534a34":"94534534","chunk-6268199a":"8c653928","chunk-0e8a1d16":"21aec3af","chunk-2d0cbeb4":"40ded1df","chunk-2d0d63f1":"1655bcf6","chunk-883abc04":"fb9f3c6a"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-035e72ef":1,"chunk-674bc12b":1,"chunk-2185348a":1,"chunk-2d2a7638":1,"chunk-45364012":1,"chunk-4ef1fd48":1,"chunk-0e8a1d16":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-035e72ef":"b278bdbf","chunk-0a25776c":"31d6cfe0","chunk-1b9ac8e8":"31d6cfe0","chunk-674bc12b":"42c8c8a6","chunk-2138be32":"31d6cfe0","chunk-2185348a":"b278bdbf","chunk-2d2a7638":"8f05d1aa","chunk-45364012":"64ce06b4","chunk-4ef1fd48":"eba724b2","chunk-51534a34":"31d6cfe0","chunk-6268199a":"31d6cfe0","chunk-0e8a1d16":"5b67dbb3","chunk-2d0cbeb4":"31d6cfe0","chunk-2d0d63f1":"31d6cfe0","chunk-883abc04":"31d6cfe0"}[e]+".css",r=l.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===a||d===r))return t()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){i=h[u],d=i.getAttribute("data-href");if(d===a||d===r)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete c[e],s.parentNode.removeChild(s),n(o)},s.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(s)})).then((function(){c[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=o);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=u(e);var h=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",h.name="ChunkLoadError",h.type=a,h.request=c,n[1](h)}r[e]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/E-commerce_demo/dist/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var h=0;h<i.length;h++)t(i[h]);var s=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1025:function(e,t,n){},"14b6":function(e,t,n){"use strict";n("1025")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("159b"),n("b64b");var a=n("7a23"),c=n("bc3a"),r=n.n(c),o=n("8a14"),u=(n("fe26"),n("cd74"),n("7bb1")),l=n("3aa8"),i=n("cbdf"),d=n("9457"),h=n("2106"),s=n.n(h);function f(e,t){var n=Object(a["D"])("router-view");return Object(a["u"])(),Object(a["e"])(n)}n("14b6");const b={};b.render=f;var p=b,v=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),m=n("cf05"),g=n.n(m),k={class:"home"},j=Object(a["i"])("img",{alt:"Vue logo",src:g.a},null,-1);function O(e,t,n,c,r,o){var u=Object(a["D"])("HelloWorld");return Object(a["u"])(),Object(a["e"])("div",k,[j,Object(a["i"])(u,{msg:"Welcome to Your Vue.js App"})])}var y=Object(a["S"])("data-v-1863c4a2");Object(a["x"])("data-v-1863c4a2");var _={class:"hello"},w=Object(a["g"])('<p data-v-1863c4a2> For a guide and recipes on how to configure / customize this project,<br data-v-1863c4a2> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>vue-cli documentation</a>. </p><h3 data-v-1863c4a2>Installed CLI Plugins</h3><ul data-v-1863c4a2><li data-v-1863c4a2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-1863c4a2>babel</a></li><li data-v-1863c4a2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-1863c4a2>router</a></li><li data-v-1863c4a2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-1863c4a2>eslint</a></li></ul><h3 data-v-1863c4a2>Essential Links</h3><ul data-v-1863c4a2><li data-v-1863c4a2><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>Core Docs</a></li><li data-v-1863c4a2><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>Forum</a></li><li data-v-1863c4a2><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>Community Chat</a></li><li data-v-1863c4a2><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-1863c4a2>Twitter</a></li><li data-v-1863c4a2><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>News</a></li></ul><h3 data-v-1863c4a2>Ecosystem</h3><ul data-v-1863c4a2><li data-v-1863c4a2><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>vue-router</a></li><li data-v-1863c4a2><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>vuex</a></li><li data-v-1863c4a2><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-1863c4a2>vue-devtools</a></li><li data-v-1863c4a2><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>vue-loader</a></li><li data-v-1863c4a2><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-1863c4a2>awesome-vue</a></li></ul>',7);Object(a["v"])();var P=y((function(e,t,n,c,r,o){return Object(a["u"])(),Object(a["e"])("div",_,[Object(a["i"])("h1",null,Object(a["G"])(n.msg),1),w])})),E={name:"HelloWorld",props:{msg:String}};n("e77a");E.render=P,E.__scopeId="data-v-1863c4a2";var x=E,C={name:"Home",components:{HelloWorld:x},created:function(){}};C.render=O;var S=C,T=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",component:function(){return n.e("chunk-883abc04").then(n.bind(null,"a55b"))}},{path:"/dashboard",component:function(){return Promise.all([n.e("chunk-6268199a"),n.e("chunk-2d0d63f1")]).then(n.bind(null,"7277"))},children:[{path:"products",component:function(){return Promise.all([n.e("chunk-035e72ef"),n.e("chunk-1b9ac8e8")]).then(n.bind(null,"e6dc"))}},{path:"coupons",component:function(){return Promise.all([n.e("chunk-035e72ef"),n.e("chunk-0a25776c")]).then(n.bind(null,"f329"))}},{path:"orderlist",component:function(){return Promise.all([n.e("chunk-035e72ef"),n.e("chunk-674bc12b")]).then(n.bind(null,"bf4b"))}}]},{path:"/user",component:function(){return Promise.all([n.e("chunk-6268199a"),n.e("chunk-2d0cbeb4")]).then(n.bind(null,"4c5d"))},children:[{path:"cart",component:function(){return n.e("chunk-2185348a").then(n.bind(null,"76db"))}},{path:"product/:productId",component:function(){return n.e("chunk-2138be32").then(n.bind(null,"f962"))}},{path:"checkout/:orderId",component:function(){return n.e("chunk-51534a34").then(n.bind(null,"a3d3"))}}]},{path:"/demo",component:function(){return Promise.all([n.e("chunk-6268199a"),n.e("chunk-0e8a1d16")]).then(n.bind(null,"8a37"))},children:[{path:"prodlist",component:function(){return n.e("chunk-45364012").then(n.bind(null,"f5b1"))}},{path:"product/:Id",component:function(){return n.e("chunk-2d2a7638").then(n.bind(null,"afe8"))}},{path:"checkout",component:function(){return n.e("chunk-4ef1fd48").then(n.bind(null,"a0d8"))}}]}],A=Object(v["a"])({history:Object(v["b"])(),routes:T,linkActiveClass:"active"}),I=A;n("ac1f"),n("5319"),n("b680");function L(e){var t=parseInt(e,10);return"".concat(t.toFixed(0).replace(/./g,(function(e,t,n){return t&&"."!==e&&(n.length-t)%3===0?", ".concat(e).replace(/\s/g,""):e})))}Object.keys(l["a"]).forEach((function(e){Object(u["e"])(e,l["a"][e])})),Object(u["d"])({generateMessage:Object(i["a"])({zh_TW:d}),validateOnInput:!0}),Object(i["b"])("zh_TW");var F=Object(a["d"])(p);F.config.globalProperties.$filters={currency:L},F.use(I),F.use(s.a,r.a),F.component("Loading",o["a"]),F.component("Form",u["c"]),F.component("Field",u["b"]),F.component("ErrorMessage",u["a"]),F.mount("#app")},c05a:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},e77a:function(e,t,n){"use strict";n("c05a")}});
//# sourceMappingURL=app.84edb228.js.map