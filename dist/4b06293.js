(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{320:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{titulo:"",imagem:"",conteudo:""}},created:function(){var t=document.createElement("div");t.innerHTML=this.post.content,this.imagem=t.querySelector("img").src,t.querySelector("img").remove(),t.querySelector("a").remove(),this.titulo=this.post.title,this.conteudo=t.innerHTML},props:{post:{type:Object,required:!0}}},n=r(20),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("article",{staticClass:"mt-5 flex justify-center mb-5"},[e("div",{staticClass:"bg-gray-200 rounded-md p-5 w-full max-w-4xl"},[e("h2",{staticClass:"font-bold text-3xl",staticStyle:{"border-bottom":"dashed 2px #c1bb00"}},[t._v("\n      "+t._s(t.titulo)+"\n    ")]),t._v(" "),e("img",{staticClass:"w-full h-48 sm:h-72 lg:h-96 my-5 rounded-md object-cover m-0",attrs:{src:t.imagem}}),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.conteudo)}}),t._v(" "),e("iframe",{staticClass:"hidden",attrs:{src:"https"+t.post.url.substring(4),frameborder:"1"}})])])}),[],!1,null,null,null);e.default=component.exports}}]);