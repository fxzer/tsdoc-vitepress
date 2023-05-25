import{_ as s,o as n,c as a,V as o}from"./chunks/framework.ced88878.js";const f=JSON.parse('{"title":"TypeScript 1.1","description":"","frontmatter":{"title":"TypeScript 1.1","layout":"docs","permalink":"/docs/handbook/release-notes/typescript-1-1.html","oneline":"TypeScript 1.1 Release Notes"},"headers":[],"relativePath":"en/release-notes/TypeScript[1.1].md","lastUpdated":1681915487000}'),l={name:"en/release-notes/TypeScript[1.1].md"},e=o(`<h2 id="performance-improvements" tabindex="-1">Performance Improvements <a class="header-anchor" href="#performance-improvements" aria-label="Permalink to &quot;Performance Improvements&quot;">​</a></h2><p>The 1.1 compiler is typically around 4x faster than any previous release. See <a href="http://blogs.msdn.com/b/typescript/archive/2014/10/06/announcing-typescript-1-1-ctp.aspx" target="_blank" rel="noreferrer">this blog post for some impressive charts.</a></p><h2 id="better-module-visibility-rules" tabindex="-1">Better Module Visibility Rules <a class="header-anchor" href="#better-module-visibility-rules" aria-label="Permalink to &quot;Better Module Visibility Rules&quot;">​</a></h2><p>TypeScript now only strictly enforces the visibility of types in modules if the <a href="/tsdoc-vitepress/tsconfig#declaration"><code>declaration</code></a> flag is provided. This is very useful for Angular scenarios, for example:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">module</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">MyControllers</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">interface</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">ZooScope</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">extends</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">ng</span><span style="color:#F6F6F4;">.</span><span style="color:#97E1F1;font-style:italic;">IScope</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    animals</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Animal</span><span style="color:#F6F6F4;">[];</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">ZooController</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// Used to be an error (cannot expose ZooScope), but now is only</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// an error when trying to generate .d.ts files</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">constructor</span><span style="color:#F6F6F4;">(</span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">$scope</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">ZooScope</span><span style="color:#F6F6F4;">) {}</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">/* more code */</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">module</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyControllers</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ZooScope</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ng</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">IScope</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">animals</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Animal</span><span style="color:#24292E;">[];</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ZooController</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Used to be an error (cannot expose ZooScope), but now is only</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// an error when trying to generate .d.ts files</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#E36209;">$scope</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ZooScope</span><span style="color:#24292E;">) {}</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* more code */</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,5),p=[e];function t(r,c,i,y,F,d){return n(),a("div",null,p)}const u=s(l,[["render",t]]);export{f as __pageData,u as default};