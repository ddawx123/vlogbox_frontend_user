webpackJsonp([1],{0:function(t,e,o){o("j1ja"),t.exports=o("NHnr")},"1uuo":function(t,e){},"2znW":function(t,e){},"7QVd":function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=o("VU/8")({name:"App"},r,!1,function(t){o("2znW")},null,null).exports,i=o("/ocq"),l=o("uNQj"),s={name:"index",data:function(){return{dataList:[1,2,3,4,5,6,7],videoList:[],playerModal:!1,playVideoUrl:"",playVideoTitle:""}},methods:{getVideoList:function(){this.$Loading.start();var t=this;l.a.get("/video/feed_list",{limit:999}).then(function(e){t.videoList=e.data.items,t.$Loading.finish()}).catch(function(e){console.log(e),t.$Loading.error(),t.$Notice.error({title:e.message,render:function(t){return t("h3",["后端无法访问，请核实服务是否正常运行"])},duration:0})})},onCardClick:function(t){this.playVideoUrl=t.videoUrl,this.playVideoTitle="正在播放中 "+t.description,this.playerModal=!0,this.$refs.player.play()},onModalClose:function(){this.$refs.player.pause()}},beforeCreate:function(){console.log("beforeCreate hook")},created:function(){console.log("created hook"),l.a.post("/common/open-api/bing/wallpaper").then(function(t){document.body.style.backgroundImage='url("'+t.data.img_url+'")',document.body.style.backgroundAttachment="fixed",document.body.style.backgroundSize="100% 100%"}).catch(function(t){console.log(t),document.body.style.background="linear-gradient(15deg, #0064bd, #00ff9f)",document.body.style.backgroundAttachment="fixed"})},beforeMount:function(){console.log("beforeMount hook")},mounted:function(){console.log("mounted hook"),this.getVideoList()},beforeUpdate:function(){console.log("beforeUpdate hook")},updated:function(){console.log("updated hook")},beforeDestroy:function(){console.log("beforeDestroy hook")},destroyed:function(){console.log("destroyed hook")}},c={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",[o("Divider",{staticStyle:{"background-color":"rgba(255, 255, 255, 0.7)","border-radius":"10px","font-weight":"bold"},attrs:{size:"default",orientation:"center"}},[t._v("视频墙 · PC网页端")])],1),t._v(" "),o("div",{staticClass:"card_box"},[t._l(t.videoList,function(e,n){return o("Card",{key:n,staticStyle:{width:"390px","background-color":"rgba(255, 255, 255, 0.7)","backdrop-filter":"blur(2px)","-webkit-backdrop-filter":"blur(2px)"},nativeOn:{click:function(o){return t.onCardClick(e)}}},[o("div",{staticStyle:{"text-align":"center"}},[o("img",{attrs:{src:e.imgUrl}}),t._v(" "),o("h3",[t._v(t._s(e.description))])])])}),t._v(" "),o("Modal",{staticStyle:{width:"inherit"},attrs:{"before-close":t.onModalClose,"footer-hide":"",fullscreen:"",title:t.playVideoTitle},model:{value:t.playerModal,callback:function(e){t.playerModal=e},expression:"playerModal"}},[o("div",{staticStyle:{width:"inherit"}},[o("video",{ref:"player",attrs:{autoplay:"",controls:"",loop:"",src:t.playVideoUrl}})])])],2)])},staticRenderFns:[]};var u=o("VU/8")(s,c,!1,function(t){o("kcwD")},"data-v-2ff47d15",null).exports,d={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[o("h1",[t._v(t._s(t.msg))]),t._v(" "),o("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),o("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[o("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),o("br"),t._v(" "),o("li",[o("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var f=o("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},d,!1,function(t){o("1uuo")},"data-v-d8ec41bc",null).exports;n.default.use(i.a);var h=new i.a({routes:[{path:"/",name:"Home",component:u},{path:"/test",name:"HelloWorld",component:f}]}),p=o("b3L9"),v=o.n(p);o("7QVd");n.default.config.productionTip=!1,n.default.use(v.a),console.log(Object({NODE_ENV:"production",API_ENDPOINT:"/api"})),new n.default({el:"#app",router:h,components:{App:a},template:"<App/>"})},kcwD:function(t,e){},uNQj:function(t,e,o){"use strict";(function(t){var n=o("//Fk"),r=o.n(n),a=o("mtWM"),i=o.n(a);i.a.defaults.timeout=5e3,console.log(t),i.a.defaults.baseURL="/api",i.a.interceptors.request.use(function(t){var e=localStorage.getItem("Authorization");return null!==e&&(t.headers.Authorization="Bearer "+e),t},function(t){return console.log("axios异常"),r.a.reject(t)}),i.a.interceptors.response.use(function(t){return 200!==t.status?r.a.resolve(t.data):t.data},function(t){return console.log("网络不可达"),r.a.reject(t)}),e.a={post:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new r.a(function(o,n){i.a.post(t,e).then(function(t){o(t)},function(t){n(t)}).catch(function(t){n(t)})})},get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new r.a(function(o,n){i.a.get(t,{params:e}).then(function(t){o(t)},function(t){n(t)}).catch(function(t){n(t)})})}}}).call(e,o("W2nU"))}},[0]);
//# sourceMappingURL=app.9cc4c1c6c0258c8a31a7.js.map