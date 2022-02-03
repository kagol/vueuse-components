var E=Object.defineProperty;var g=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var d=(e,a,s)=>a in e?E(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,m=(e,a)=>{for(var s in a||(a={}))b.call(a,s)&&d(e,s,a[s]);if(g)for(var s of g(a))C.call(a,s)&&d(e,s,a[s]);return e};import{_ as I,c as h,a as v,w as x,b as n,d as t,r as P,o as B,V as f}from"./app.0184edca.js";const w={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:e,toDisplayString:a,createTextVNode:s,openBlock:l,createElementBlock:r}=f;function k(o,p){return l(),r("div",null,[e("div",null,[e("button",{onClick:p[0]||(p[0]=(...c)=>o.prevPage&&o.prevPage(...c))},"\u4E0A\u4E00\u9875"),s(" "+a(o.pageIndex)+" ",1),e("button",{onClick:p[1]||(p[1]=(...c)=>o.nextPage&&o.nextPage(...c))},"\u4E0B\u4E00\u9875")])])}const{getCurrentInstance:u}=f;return m({render:k},{setup(){const{usePage:o}=u().appContext.config.globalProperties.useComponents,{pageIndex:p,prevPage:c,nextPage:_}=o(1);return{pageIndex:p,prevPage:c,nextPage:_}}})}()}},D='{"title":"vueuse-components","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","lastUpdated":1643863965600}',y=n("h1",{id:"vueuse-components",tabindex:"-1"},[t("vueuse-components "),n("a",{class:"header-anchor",href:"#vueuse-components","aria-hidden":"true"},"#")],-1),V=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("prevPage"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u4E0A\u4E00\u9875"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("button")]),n("span",{class:"token punctuation"},">")]),t(`
    {{ pageIndex }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("nextPage"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u4E0B\u4E00\u9875"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" getCurrentInstance "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" usePage "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"getCurrentInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),t("appContext"),n("span",{class:"token punctuation"},"."),t("config"),n("span",{class:"token punctuation"},"."),t("globalProperties"),n("span",{class:"token punctuation"},"."),t(`useComponents
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" pageIndex"),n("span",{class:"token punctuation"},","),t(" prevPage"),n("span",{class:"token punctuation"},","),t(" nextPage "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"usePage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      pageIndex`),n("span",{class:"token punctuation"},","),t(" prevPage"),n("span",{class:"token punctuation"},","),t(` nextPage
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function N(e,a,s,l,r,k){const u=P("render-demo-0"),i=P("demo");return B(),h("div",null,[y,v(i,{sourceCode:`<template>
  <div>
    <button @click="prevPage">\u4E0A\u4E00\u9875</button>
    {{ pageIndex }}
    <button @click="nextPage">\u4E0B\u4E00\u9875</button>
  </div>
</template>
<script>
import { getCurrentInstance } from 'vue'

export default {
  setup() {
    const { usePage } = getCurrentInstance().appContext.config.globalProperties.useComponents
    const { pageIndex, prevPage, nextPage } = usePage(1)

    return {
      pageIndex, prevPage, nextPage
    }
  }
}
<\/script>
`},{highlight:x(()=>[V]),default:x(()=>[v(u)]),_:1})])}var T=I(w,[["render",N]]);export{D as __pageData,T as default};
