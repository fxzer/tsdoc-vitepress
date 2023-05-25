import{_ as s,o as n,c as a,V as e}from"./chunks/framework.ced88878.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{"display":"useUnknownInCatchVariables","oneline":"Default catch clause variables as `unknown` instead of `any`."},"headers":[],"relativePath":"zh/tsconfig-reference/options/useUnknownInCatchVariables.md","lastUpdated":1682921420000}'),o={name:"zh/tsconfig-reference/options/useUnknownInCatchVariables.md"},l=e(`<p>In TypeScript 4.0, support was added to allow changing the type of the variable in a catch clause from <code>any</code> to <code>unknown</code>. Allowing for code like:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">// @useUnknownInCatchVariables</span></span>
<span class="line"><span style="color:#F286C4;">try</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// ...</span></span>
<span class="line"><span style="color:#F6F6F4;">} </span><span style="color:#F286C4;">catch</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">err</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">unknown</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// We have to verify err is an</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// error before using it as one.</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (err </span><span style="color:#F286C4;">instanceof</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Error</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(err.message);</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// @useUnknownInCatchVariables</span></span>
<span class="line"><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">err</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">unknown</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// We have to verify err is an</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// error before using it as one.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(err.message);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>This pattern ensures that error handling code becomes more comprehensive because you cannot guarantee that the object being thrown <em>is</em> a Error subclass ahead of time. With the flag <code>useUnknownInCatchVariables</code> enabled, then you do not need the additional syntax (<code>: unknown</code>) nor a linter rule to try enforce this behavior.</p>`,3),p=[l];function t(c,r,i,y,F,d){return n(),a("div",null,p)}const f=s(o,[["render",t]]);export{u as __pageData,f as default};