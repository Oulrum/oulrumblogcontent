(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{317:function(t,e,r){var content=r(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(70).default)("39a7d5c6",content,!0,{sourceMap:!1})},318:function(t,e,r){"use strict";r(317)},319:function(t,e,r){var o=r(69)((function(i){return i[1]}));o.push([t.i,'h2[data-v-bc08f0e8]:after{content:"";display:block;background-color:#18181b;width:87px;height:2px}li[data-v-bc08f0e8]{transition:all .2s}li[data-v-bc08f0e8]:hover{box-shadow:0 10px 13px -7px #000,5px 5px 50px 5px transparent}',""]),o.locals={},t.exports=o},321:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{items:[]}},created:function(){for(var i=0;this.posts.items.length>i;i++){var t,e,r=void 0;(r=document.createElement("div")).innerHTML=this.posts.items[i].content,t=r.querySelector("img").src,e=r.querySelector("a").innerText,r.querySelector("img").remove(),r.querySelector("a").remove(),this.items.push({imagem:t,url:e,titulo:this.posts.items[i].title})}},props:{posts:{type:Object,required:!0}}},n=(r(318),r(20)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("h2",{staticClass:"font-bold m-5 text-lg text-white"},[t._v("Últimas Postagens")]),t._v(" "),e("ul",{staticClass:"flex flex-wrap"},t._l(t.items,(function(r,o){return e("li",{key:o,staticClass:"bg-[#f2b600] p-5 rounded-lg mb-6 sm:ml-8 sm:w-2/5 w-full"},[e("a",{staticClass:"relative",attrs:{href:"post/"+r.url}},[e("img",{staticClass:"w-full",attrs:{src:r.imagem}}),t._v(" "),e("div",{staticClass:"absolute bottom-[0.01px] left-0 right-0 p-2.5 bg-gradient-to-t from-[#f2b600] via-[#f2b600]"},[e("h2",{staticClass:"font-bold"},[t._v(t._s(r.titulo))])])])])})),0)])}),[],!1,null,"bc08f0e8",null);e.default=component.exports},323:function(t,e,r){var content=r(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(70).default)("0d491fc6",content,!0,{sourceMap:!1})},326:function(t,e,r){"use strict";r(323)},327:function(t,e,r){var o=r(69)((function(i){return i[1]}));o.push([t.i,"*{box-sizing:border-box}",""]),o.locals={},t.exports=o},342:function(t,e,r){"use strict";r.r(e);var o=r(11),n=(r(53),{components:{PostsList:r(321).default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,e.next=3,r.$get("https://www.googleapis.com/blogger/v3/blogs/8336493395590795038/posts/?key=AIzaSyDzKpguqbe7uDNxpvax9elyDyl7mBKkEcg");case 3:return o=e.sent,e.abrupt("return",{posts:o});case 5:case"end":return e.stop()}}),e)})))()}}),l=(r(326),r(20)),component=Object(l.a)(n,(function(){var t=this._self._c;return t("section",{staticClass:"sm:px-20 lg:px-40 px-5"},[t("PostsList",{attrs:{posts:this.posts}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PostsList:r(321).default})}}]);