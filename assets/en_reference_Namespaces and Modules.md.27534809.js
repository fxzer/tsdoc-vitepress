import{_ as s,o as a,c as e,V as o}from"./chunks/framework.ced88878.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"en/reference/Namespaces and Modules.md","lastUpdated":1682670826000}'),n={name:"en/reference/Namespaces and Modules.md"},l=o(`<p>This post outlines the various ways to organize your code using modules and namespaces in TypeScript. We&#39;ll also go over some advanced topics of how to use namespaces and modules, and address some common pitfalls when using them in TypeScript.</p><p>See the <a href="/tsdoc-vitepress/handbooks/handbook-v2/Modules">Modules</a> documentation for more information about ES Modules. See the <a href="/tsdoc-vitepress/reference/Namespaces">Namespaces</a> documentation for more information about TypeScript namespaces.</p><p>Note: In <em>very</em> old versions of TypeScript namespaces were called &#39;Internal Modules&#39;, these pre-date JavaScript module systems.</p><h2 id="using-modules" tabindex="-1">Using Modules <a class="header-anchor" href="#using-modules" aria-label="Permalink to &quot;Using Modules&quot;">​</a></h2><p>Modules can contain both code and declarations.</p><p>Modules also have a dependency on a module loader (such as CommonJs/Require.js) or a runtime which supports ES Modules. Modules provide for better code reuse, stronger isolation and better tooling support for bundling.</p><p>It is also worth noting that, for Node.js applications, modules are the default and <strong>we recommended modules over namespaces in modern code</strong>.</p><p>Starting with ECMAScript 2015, modules are native part of the language, and should be supported by all compliant engine implementations. Thus, for new projects modules would be the recommended code organization mechanism.</p><h2 id="using-namespaces" tabindex="-1">Using Namespaces <a class="header-anchor" href="#using-namespaces" aria-label="Permalink to &quot;Using Namespaces&quot;">​</a></h2><p>Namespaces are a TypeScript-specific way to organize code.<br> Namespaces are simply named JavaScript objects in the global namespace. This makes namespaces a very simple construct to use. Unlike modules, they can span multiple files, and can be concatenated using <a href="/tsdoc-vitepress/tsconfig#outFile"><code>outFile</code></a>. Namespaces can be a good way to structure your code in a Web Application, with all dependencies included as <code>&lt;script&gt;</code> tags in your HTML page.</p><p>Just like all global namespace pollution, it can be hard to identify component dependencies, especially in a large application.</p><h2 id="pitfalls-of-namespaces-and-modules" tabindex="-1">Pitfalls of Namespaces and Modules <a class="header-anchor" href="#pitfalls-of-namespaces-and-modules" aria-label="Permalink to &quot;Pitfalls of Namespaces and Modules&quot;">​</a></h2><p>In this section we&#39;ll describe various common pitfalls in using namespaces and modules, and how to avoid them.</p><h2 id="reference-ing-a-module" tabindex="-1"><code>/// &lt;reference&gt;</code>-ing a module <a class="header-anchor" href="#reference-ing-a-module" aria-label="Permalink to &quot;\`/// &lt;reference&gt;\`-ing a module&quot;">​</a></h2><p>A common mistake is to try to use the <code>/// &lt;reference ... /&gt;</code> syntax to refer to a module file, rather than using an <code>import</code> statement. To understand the distinction, we first need to understand how the compiler can locate the type information for a module based on the path of an <code>import</code> (e.g. the <code>...</code> in <code>import x from &quot;...&quot;;</code>, <code>import x = require(&quot;...&quot;);</code>, etc.) path.</p><p>The compiler will try to find a <code>.ts</code>, <code>.tsx</code>, and then a <code>.d.ts</code> with the appropriate path. If a specific file could not be found, then the compiler will look for an <em>ambient module declaration</em>. Recall that these need to be declared in a <code>.d.ts</code> file.</p><ul><li><p><code>myModules.d.ts</code></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">// In a .d.ts file or .ts file that is not a module:</span></span>
<span class="line"><span style="color:#F286C4;">declare</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">module</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">SomeModule</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">fn</span><span style="color:#F6F6F4;">()</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// In a .d.ts file or .ts file that is not a module:</span></span>
<span class="line"><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">module</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;SomeModule&quot;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></li><li><p><code>myOtherModule.ts</code></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">/// &lt;</span><span style="color:#F286C4;">reference</span><span style="color:#7B7F8B;"> </span><span style="color:#62E884;font-style:italic;">path</span><span style="color:#F286C4;">=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">myModules.d.ts</span><span style="color:#DEE492;">&quot;</span><span style="color:#7B7F8B;"> /&gt;</span></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">*</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">as</span><span style="color:#F6F6F4;"> m </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">SomeModule</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/// &lt;</span><span style="color:#22863A;">reference</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">path</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;myModules.d.ts&quot;</span><span style="color:#6A737D;"> /&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> m </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;SomeModule&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div></li></ul><p>The reference tag here allows us to locate the declaration file that contains the declaration for the ambient module. This is how the <code>node.d.ts</code> file that several of the TypeScript samples use is consumed.</p><h2 id="needless-namespacing" tabindex="-1">Needless Namespacing <a class="header-anchor" href="#needless-namespacing" aria-label="Permalink to &quot;Needless Namespacing&quot;">​</a></h2><p>If you&#39;re converting a program from namespaces to modules, it can be easy to end up with a file that looks like this:</p><ul><li><p><code>shapes.ts</code></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">namespace</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Shapes</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Triangle</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">/* ... */</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Square</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">/* ... */</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">namespace</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Shapes</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Triangle</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Square</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></li></ul><p>The top-level namespace here <code>Shapes</code> wraps up <code>Triangle</code> and <code>Square</code> for no reason. This is confusing and annoying for consumers of your module:</p><ul><li><p><code>shapeConsumer.ts</code></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">*</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">as</span><span style="color:#F6F6F4;"> shapes </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">./shapes</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> t </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> shapes.Shapes.</span><span style="color:#62E884;">Triangle</span><span style="color:#F6F6F4;">(); </span><span style="color:#7B7F8B;">// shapes.Shapes?</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> shapes </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./shapes&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> t </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> shapes.Shapes.</span><span style="color:#6F42C1;">Triangle</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// shapes.Shapes?</span></span></code></pre></div></li></ul><p>A key feature of modules in TypeScript is that two different modules will never contribute names to the same scope. Because the consumer of a module decides what name to assign it, there&#39;s no need to proactively wrap up the exported symbols in a namespace.</p><p>To reiterate why you shouldn&#39;t try to namespace your module contents, the general idea of namespacing is to provide logical grouping of constructs and to prevent name collisions. Because the module file itself is already a logical grouping, and its top-level name is defined by the code that imports it, it&#39;s unnecessary to use an additional module layer for exported objects.</p><p>Here&#39;s a revised example:</p><ul><li><p><code>shapes.ts</code></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Triangle</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">/* ... */</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Square</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">/* ... */</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Triangle</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Square</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></li><li><p><code>shapeConsumer.ts</code></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">*</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">as</span><span style="color:#F6F6F4;"> shapes </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">./shapes</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> t </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> shapes.</span><span style="color:#62E884;">Triangle</span><span style="color:#F6F6F4;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> shapes </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./shapes&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> t </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> shapes.</span><span style="color:#6F42C1;">Triangle</span><span style="color:#24292E;">();</span></span></code></pre></div></li></ul><h2 id="trade-offs-of-modules" tabindex="-1">Trade-offs of Modules <a class="header-anchor" href="#trade-offs-of-modules" aria-label="Permalink to &quot;Trade-offs of Modules&quot;">​</a></h2><p>Just as there is a one-to-one correspondence between JS files and modules, TypeScript has a one-to-one correspondence between module source files and their emitted JS files. One effect of this is that it&#39;s not possible to concatenate multiple module source files depending on the module system you target. For instance, you can&#39;t use the <a href="/tsdoc-vitepress/tsconfig#outFile"><code>outFile</code></a> option while targeting <code>commonjs</code> or <code>umd</code>, but with TypeScript 1.8 and later, <a href="./release-notes/typescript-1-8.html#concatenate-amd-and-system-modules-with---outfile">it&#39;s possible</a> to use <a href="/tsdoc-vitepress/tsconfig#outFile"><code>outFile</code></a> when targeting <code>amd</code> or <code>system</code>.</p>`,29),p=[l];function t(c,r,i,d,y,F){return a(),e("div",null,p)}const m=s(n,[["render",t]]);export{h as __pageData,m as default};