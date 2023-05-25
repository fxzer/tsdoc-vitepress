import{_ as s,o as a,c as n,V as e}from"./chunks/framework.ced88878.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"zh/tutorials/javascript/Intro to JS with TS.md","lastUpdated":1682921420000}'),p={name:"zh/tutorials/javascript/Intro to JS with TS.md"},o=e(`<p>The type system in TypeScript has different levels of strictness when working with a codebase:</p><ul><li>A type-system based only on inference with JavaScript code</li><li>Incremental typing in JavaScript via JSDoc</li><li>Using <code>// @ts-check</code> in a JavaScript file</li><li>TypeScript code</li><li>TypeScript with <a href="/tsdoc-vitepress/tsconfig#strict"><code>strict</code></a> enabled</li></ul><p>Each step represents a move towards a safer type-system, but not every project needs that level of verification.</p><h2 id="typescript-with-javascript" tabindex="-1">TypeScript with JavaScript <a class="header-anchor" href="#typescript-with-javascript" aria-label="Permalink to &quot;TypeScript with JavaScript&quot;">​</a></h2><p>This is when you use an editor which uses TypeScript to provide tooling like auto-complete, jump to symbol and refactoring tools like rename. The <a href="/tsdoc-vitepress/">homepage</a> has a list of editors which have TypeScript plugins.</p><h2 id="providing-type-hints-in-js-via-jsdoc" tabindex="-1">Providing Type Hints in JS via JSDoc <a class="header-anchor" href="#providing-type-hints-in-js-via-jsdoc" aria-label="Permalink to &quot;Providing Type Hints in JS via JSDoc&quot;">​</a></h2><p>In a <code>.js</code> file, types can often be inferred. When types can&#39;t be inferred, they can be specified using JSDoc syntax.</p><p>JSDoc annotations come before a declaration will be used to set the type of that declaration. For example:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">/** </span><span style="color:#F286C4;">@type</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{number}</span><span style="color:#7B7F8B;"> */</span></span>
<span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> x;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">x </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">; </span><span style="color:#7B7F8B;">// OK</span></span>
<span class="line"><span style="color:#F6F6F4;">x </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">; </span><span style="color:#7B7F8B;">// OK?!</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/** </span><span style="color:#D73A49;">@type</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{number}</span><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> x;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// OK</span></span>
<span class="line"><span style="color:#24292E;">x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// OK?!</span></span></code></pre></div><p>You can find the full list of supported JSDoc patterns [in JSDoc Supported Types]</p><h2 id="ts-check" tabindex="-1"><code>@ts-check</code> <a class="header-anchor" href="#ts-check" aria-label="Permalink to &quot;\`@ts-check\`&quot;">​</a></h2><p>The last line of the previous code sample would raise an error in TypeScript, but it doesn&#39;t by default in a JS project. To enable errors in your JavaScript files add: <code>// @ts-check</code> to the first line in your <code>.js</code> files to have TypeScript raise it as an error.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">// @ts-check</span></span>
<span class="line"><span style="color:#7B7F8B;">// @errors: 2322</span></span>
<span class="line"><span style="color:#7B7F8B;">/** </span><span style="color:#F286C4;">@type</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{number}</span><span style="color:#7B7F8B;"> */</span></span>
<span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> x;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">x </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">; </span><span style="color:#7B7F8B;">// OK</span></span>
<span class="line"><span style="color:#F6F6F4;">x </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">; </span><span style="color:#7B7F8B;">// Not OK</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// @ts-check</span></span>
<span class="line"><span style="color:#6A737D;">// @errors: 2322</span></span>
<span class="line"><span style="color:#6A737D;">/** </span><span style="color:#D73A49;">@type</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{number}</span><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> x;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// OK</span></span>
<span class="line"><span style="color:#24292E;">x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// Not OK</span></span></code></pre></div><p>If you have a lot of JavaScript files you want to add errors to then you can switch to using a <code>jsconfig.json</code>. You can skip checking some files by adding a <code>// @ts-nocheck</code> comment to files.</p><p>TypeScript may offer you errors which you disagree with, in those cases you can ignore errors on specific lines by adding <code>// @ts-ignore</code> or <code>// @ts-expect-error</code> on the preceding line.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">// @ts-check</span></span>
<span class="line"><span style="color:#7B7F8B;">/** </span><span style="color:#F286C4;">@type</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{number}</span><span style="color:#7B7F8B;"> */</span></span>
<span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> x;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">x </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">; </span><span style="color:#7B7F8B;">// OK</span></span>
<span class="line"><span style="color:#7B7F8B;">// @ts-expect-error</span></span>
<span class="line"><span style="color:#F6F6F4;">x </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">; </span><span style="color:#7B7F8B;">// Not OK</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// @ts-check</span></span>
<span class="line"><span style="color:#6A737D;">/** </span><span style="color:#D73A49;">@type</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{number}</span><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> x;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// OK</span></span>
<span class="line"><span style="color:#6A737D;">// @ts-expect-error</span></span>
<span class="line"><span style="color:#24292E;">x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// Not OK</span></span></code></pre></div><p>To learn more about how JavaScript is interpreted by TypeScript read How TS Type Checks JS</p>`,17),l=[o];function t(c,r,i,y,d,F){return a(),n("div",null,l)}const f=s(p,[["render",t]]);export{u as __pageData,f as default};