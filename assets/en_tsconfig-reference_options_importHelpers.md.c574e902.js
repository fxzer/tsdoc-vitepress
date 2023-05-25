import{_ as s,o as n,c as a,V as l}from"./chunks/framework.ced88878.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{"display":"Import Helpers","oneline":"Allow importing helper functions from tslib once per project, instead of including them per-file."},"headers":[],"relativePath":"en/tsconfig-reference/options/importHelpers.md","lastUpdated":1682921420000}'),o={name:"en/tsconfig-reference/options/importHelpers.md"},p=l(`<p>For certain downleveling operations, TypeScript uses some helper code for operations like extending class, spreading arrays or objects, and async operations. By default, these helpers are inserted into files which use them. This can result in code duplication if the same helper is used in many different modules.</p><p>If the <code>importHelpers</code> flag is on, these helper functions are instead imported from the <a href="https://www.npmjs.com/package/tslib" target="_blank" rel="noreferrer">tslib</a> module. You will need to ensure that the <code>tslib</code> module is able to be imported at runtime. This only affects modules; global script files will not attempt to import modules.</p><p>For example, with this TypeScript:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">fn</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">arr</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">[]) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> arr2 </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">, </span><span style="color:#F286C4;">...</span><span style="color:#F6F6F4;">arr];</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">(</span><span style="color:#E36209;">arr</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">[]) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">arr2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">arr];</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Turning on <a href="#downlevelIteration"><code>downlevelIteration</code></a> and <code>importHelpers</code> is still false:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">// @showEmit</span></span>
<span class="line"><span style="color:#7B7F8B;">// @target: ES5</span></span>
<span class="line"><span style="color:#7B7F8B;">// @downleveliteration</span></span>
<span class="line"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">fn</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">arr</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">[]) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> arr2 </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">, </span><span style="color:#F286C4;">...</span><span style="color:#F6F6F4;">arr];</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// @showEmit</span></span>
<span class="line"><span style="color:#6A737D;">// @target: ES5</span></span>
<span class="line"><span style="color:#6A737D;">// @downleveliteration</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">(</span><span style="color:#E36209;">arr</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">[]) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">arr2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">arr];</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Then turning on both <a href="#downlevelIteration"><code>downlevelIteration</code></a> and <code>importHelpers</code>:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">// @showEmit</span></span>
<span class="line"><span style="color:#7B7F8B;">// @target: ES5</span></span>
<span class="line"><span style="color:#7B7F8B;">// @downleveliteration</span></span>
<span class="line"><span style="color:#7B7F8B;">// @importhelpers</span></span>
<span class="line"><span style="color:#7B7F8B;">// @noErrors</span></span>
<span class="line"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">fn</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">arr</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">[]) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> arr2 </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">, </span><span style="color:#F286C4;">...</span><span style="color:#F6F6F4;">arr];</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// @showEmit</span></span>
<span class="line"><span style="color:#6A737D;">// @target: ES5</span></span>
<span class="line"><span style="color:#6A737D;">// @downleveliteration</span></span>
<span class="line"><span style="color:#6A737D;">// @importhelpers</span></span>
<span class="line"><span style="color:#6A737D;">// @noErrors</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">(</span><span style="color:#E36209;">arr</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">[]) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">arr2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">arr];</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>You can use <a href="#noEmitHelpers"><code>noEmitHelpers</code></a> when you provide your own implementations of these functions.</p>`,9),e=[p];function t(r,c,i,y,F,d){return n(),a("div",null,e)}const u=s(o,[["render",t]]);export{f as __pageData,u as default};