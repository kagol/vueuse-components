import{_ as n,c as a,o as s,e as t}from"./app.de5ca9a2.js";const v='{"title":"\u5FEB\u901F\u5F00\u59CB","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5C40\u90E8\u5F15\u5165","slug":"\u5C40\u90E8\u5F15\u5165"},{"level":3,"title":"\u5168\u5C40\u6CE8\u518C","slug":"\u5168\u5C40\u6CE8\u518C"}],"relativePath":"index.md","lastUpdated":1643873777860}',p={},e=t(`<h1 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1">\u5FEB\u901F\u5F00\u59CB <a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a></h1><p>\u7528\u4E8E Vue3 \u7EC4\u4EF6\u5E93\u7684 vueuse\u3002</p><h3 id="\u5C40\u90E8\u5F15\u5165" tabindex="-1">\u5C40\u90E8\u5F15\u5165 <a class="header-anchor" href="#\u5C40\u90E8\u5F15\u5165" aria-hidden="true">#</a></h3><p>Step 1: \u5B89\u88C5<code>vueuse-components</code>\uFF1A</p><div class="language-"><pre><code>yarn add vueuse-components
</code></pre></div><p>Step 2: \u5355\u72EC\u5F15\u5165<code>usePage</code>\uFF0C\u5728<code>App.vue</code>\u4E2D\u7F16\u5199\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-"><pre><code>import { usePage } from &#39;vueuse-components&#39;
</code></pre></div><p>Step 3: \u4F7F\u7528<code>usePage</code>\uFF0C\u5728<code>App.vue</code>\u4E2D\u7F16\u5199\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> usePage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vueuse-components&#39;</span>

<span class="token comment">// \u65B0\u589E</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> pageIndex<span class="token punctuation">,</span> prevPage<span class="token punctuation">,</span> nextPage <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">usePage</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>prevPage<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4E0A\u4E00\u9875<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    {{ pageIndex }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nextPage<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4E0B\u4E00\u9875<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u5168\u5C40\u6CE8\u518C" tabindex="-1">\u5168\u5C40\u6CE8\u518C <a class="header-anchor" href="#\u5168\u5C40\u6CE8\u518C" aria-hidden="true">#</a></h3><p>\u9664\u4E86\u5C40\u90E8\u4F7F\u7528<code>Composable</code>\uFF0C\u8FD8\u53EF\u4EE5\u5168\u5C40\u6CE8\u518C<code>vueuse-components</code>\u63D2\u4EF6\u3002</p><p>\u5F15\u5165<code>vueuse-components</code>\u63D2\u4EF6\uFF0C\u5728<code>main.ts</code>\u4E2D\u7F16\u5199\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-"><pre><code>import useComponents from &#39;vueuse-components&#39;

app.use(useComponents).mount(&#39;#app&#39;)
</code></pre></div><p>\u5728<code>App.vue</code>\u4E2D\u7F16\u5199\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> usePage <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>useComponents
<span class="token keyword">const</span> <span class="token punctuation">{</span> pageIndex<span class="token punctuation">,</span> prevPage<span class="token punctuation">,</span> nextPage <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">usePage</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>prevPage<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4E0A\u4E00\u9875<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    {{ pageIndex }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nextPage<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4E0B\u4E00\u9875<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,15),o=[e];function c(u,l,k,i,r,g){return s(),a("div",null,o)}var m=n(p,[["render",c]]);export{v as __pageData,m as default};