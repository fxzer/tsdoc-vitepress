import{_ as s,o as n,c as a,V as l}from"./chunks/framework.ced88878.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{"display":"Strict Bind Call Apply","oneline":"Check that the arguments for `bind`, `call`, and `apply` methods match the original function."},"headers":[],"relativePath":"en/tsconfig-reference/options/strictBindCallApply.md","lastUpdated":1682921420000}'),p={name:"en/tsconfig-reference/options/strictBindCallApply.md"},o=l(`<p>When set, TypeScript will check that the built-in methods of functions <code>call</code>, <code>bind</code>, and <code>apply</code> are invoked with correct argument for the underlying function:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">// @strictBindCallApply: true</span></span>
<span class="line"><span style="color:#7B7F8B;">// @errors: 2345</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// With strictBindCallApply on</span></span>
<span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">fn</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">x</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">parseInt</span><span style="color:#F6F6F4;">(x);</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> n1 </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> fn.</span><span style="color:#62E884;">call</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">undefined</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">10</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> n2 </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> fn.</span><span style="color:#62E884;">call</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">undefined</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// @strictBindCallApply: true</span></span>
<span class="line"><span style="color:#6A737D;">// @errors: 2345</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// With strictBindCallApply on</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">(</span><span style="color:#E36209;">x</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">parseInt</span><span style="color:#24292E;">(x);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">n1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fn.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;10&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">n2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fn.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">);</span></span></code></pre></div><p>Otherwise, these functions accept any arguments and will return <code>any</code>:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">// @strictBindCallApply: false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// With strictBindCallApply off</span></span>
<span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">fn</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">x</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">parseInt</span><span style="color:#F6F6F4;">(x);</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// Note: No error; return type is &#39;any&#39;</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> n </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> fn.</span><span style="color:#62E884;">call</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">undefined</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// @strictBindCallApply: false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// With strictBindCallApply off</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">(</span><span style="color:#E36209;">x</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">parseInt</span><span style="color:#24292E;">(x);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Note: No error; return type is &#39;any&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">n</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fn.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">);</span></span></code></pre></div>`,4),e=[o];function t(c,r,y,i,F,d){return n(),a("div",null,e)}const f=s(p,[["render",t]]);export{C as __pageData,f as default};