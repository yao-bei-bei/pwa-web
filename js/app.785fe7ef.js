(function(e){function t(t){for(var o,l,s=t[0],u=t[1],i=t[2],p=0,f=[];p<s.length;p++)l=s[p],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&f.push(n[l][0]),n[l]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);c&&c(t);while(f.length)f.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,s=1;s<r.length;s++){var u=r[s];0!==n[u]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var o={},n={app:0},a=[];function l(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=o,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(r,o,function(t){return e[t]}.bind(null,o));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var c=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1d89":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("25ba"),r("5f1c"),r("6ba0"),r("b47f");var o=r("a593"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("button",{directives:[{name:"show",rawName:"v-show",value:e.prompt,expression:"prompt"}],on:{click:function(t){return e.deferredPrompt(e.deferred)}}},[e._v("添加到桌面")]),o("img",{attrs:{alt:"Vue logo",src:r("9096")}}),e._v("\n  "+e._s(e.data)+"\n    "),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},a=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),r("br"),e._v("\n    check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],u={name:"HelloWorld",props:{msg:String}},i=u,c=(r("8663"),r("4ac2")),p=Object(c["a"])(i,l,s,!1,null,"699bf65d",null),f=p.exports,v={name:"app",data:function(){return{prompt:!1,deferred:null,data:[]}},created:function(){var e=this;window.onbeforeinstallprompt=function(t){console.log(t),e.prompt=!0,e.deferred=t},sessionStorage.getItem("data")?this.data=JSON.parse(sessionStorage.getItem("data")):this.$axios.get("https://api.apiopen.top/getJoke?page=1&count=2&type=video").then((function(t){console.log(t),e.data=t.data.result,sessionStorage.setItem("data",JSON.stringify(e.data))}))},methods:{deferredPrompt:function(e){var t=this;e&&(e.prompt(),e.prompt(),e.userChoice.then((function(e){console.log(e.outcome),"dismissed"===e.outcome?console.log("用户取消了安装"):(console.log("用户已安装程序"),t.prompt=!1,t.deferred=null)})))}},components:{HelloWorld:f}},d=v,h=(r("7c55"),Object(c["a"])(d,n,a,!1,null,null,null)),g=h.exports,m=r("08e7");Object(m["a"])("".concat("","service-worker.js"),{ready:function(){console.log("准备完成")},registered:function(){console.log("注册成功")},cached:function(){console.log("缓存")},updatefound:function(){console.log("正在下载新内容.")},updated:function(){console.log("新内容可用；请刷新.")},offline:function(){console.log("找不到Internet连接。应用程序正在脱机模式下运行")},error:function(e){console.error("服务工作者注册过程中出错:",e)}});var _=r("73ef"),b=r.n(_);o["a"].prototype.$axios=b.a,o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(g)}}).$mount("#app")},"7c55":function(e,t,r){"use strict";r("1d89")},8663:function(e,t,r){"use strict";r("911d")},9096:function(e,t,r){e.exports=r.p+"img/timg.3f40beb9.jpg"},"911d":function(e,t,r){}});
//# sourceMappingURL=app.785fe7ef.js.map