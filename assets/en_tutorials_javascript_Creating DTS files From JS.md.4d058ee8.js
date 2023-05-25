import{_ as s,o as a,c as n,V as o}from"./chunks/framework.ced88878.js";const h=JSON.parse('{"title":"Creating .d.ts Files from .js files","description":"","frontmatter":{"title":"Creating .d.ts Files from .js files","layout":"docs","permalink":"/docs/handbook/declaration-files/dts-from-js.html","oneline":"How to add d.ts generation to JavaScript projects","translatable":true},"headers":[],"relativePath":"en/tutorials/javascript/Creating DTS files From JS.md","lastUpdated":1681915487000}'),t={name:"en/tutorials/javascript/Creating DTS files From JS.md"},e=o(`<p><a href="/tsdoc-vitepress/release-notes/TypeScript[3.7]#--declaration-and---allowjs">With TypeScript 3.7</a>, TypeScript added support for generating .d.ts files from JavaScript using JSDoc syntax.</p><p>This set up means you can own the editor experience of TypeScript-powered editors without porting your project to TypeScript, or having to maintain .d.ts files in your codebase. TypeScript supports most JSDoc tags, you can find<a href="/javascript/Type Checking JavaScript Files">the reference here</a></p><h2 id="setting-up-your-project-to-emit-d-ts-files" tabindex="-1">Setting up your Project to emit .d.ts files <a class="header-anchor" href="#setting-up-your-project-to-emit-d-ts-files" aria-label="Permalink to &quot;Setting up your Project to emit .d.ts files&quot;">​</a></h2><p>To add creation of .d.ts files in your project, you will need to do up-to four steps:</p><ul><li>Add TypeScript to your dev dependencies</li><li>Add a <code>tsconfig.json</code> to configure TypeScript</li><li>Run the TypeScript compiler to generate the corresponding d.ts files for JS files</li><li>(optional) Edit your package.json to reference the types</li></ul><h3 id="adding-typescript" tabindex="-1">Adding TypeScript <a class="header-anchor" href="#adding-typescript" aria-label="Permalink to &quot;Adding TypeScript&quot;">​</a></h3><p>You can learn how to do this in our installation page.</p><h3 id="tsconfig" tabindex="-1">TSConfig <a class="header-anchor" href="#tsconfig" aria-label="Permalink to &quot;TSConfig&quot;">​</a></h3><p>The TSConfig is a jsonc file which configures both your compiler flags, and declare where to find files. In this case, you will want a file like the following:</p><div class="language-jsonc"><button title="Copy Code" class="copy"></button><span class="lang">jsonc</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// Change this to match your project</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">include</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">src/**/*</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">compilerOptions</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// Tells TypeScript to read JS files, as</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// normally they are ignored as source files</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">allowJs</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// Generate d.ts files</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">declaration</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// This compiler run should</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// only output d.ts files</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">emitDeclarationOnly</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// Types should go into this directory.</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// Removing this would place the .d.ts files</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// next to the .js files</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">outDir</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">dist</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// go to js file when using IDE functions like</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// &quot;Go to Definition&quot; in VSCode</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">declarationMap</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Change this to match your project</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;include&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;src/**/*&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;compilerOptions&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Tells TypeScript to read JS files, as</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// normally they are ignored as source files</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;allowJs&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Generate d.ts files</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;declaration&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// This compiler run should</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// only output d.ts files</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;emitDeclarationOnly&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Types should go into this directory.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Removing this would place the .d.ts files</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// next to the .js files</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;outDir&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;dist&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// go to js file when using IDE functions like</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// &quot;Go to Definition&quot; in VSCode</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;declarationMap&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>You can learn more about the options in the <a href="/tsdoc-vitepress/project-config/tsconfig#tsconfig-reference">TSConfig reference</a>. An alternative to using a TSConfig file is the CLI, this is the same behavior as a CLI command.</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">npx </span><span style="color:#BF9EEE;">-p</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">typescript</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">tsc</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">src/</span><span style="color:#BF9EEE;font-style:italic;">**</span><span style="color:#E7EE98;">/</span><span style="color:#BF9EEE;font-style:italic;">*</span><span style="color:#E7EE98;">.js</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--declaration</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--allowJs</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--emitDeclarationOnly</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--outDir</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">types</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">typescript</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tsc</span><span style="color:#24292E;"> </span><span style="color:#032F62;">src/</span><span style="color:#005CC5;">**</span><span style="color:#032F62;">/</span><span style="color:#005CC5;">*</span><span style="color:#032F62;">.js</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--declaration</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--allowJs</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--emitDeclarationOnly</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--outDir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">types</span></span></code></pre></div><h2 id="run-the-compiler" tabindex="-1">Run the compiler <a class="header-anchor" href="#run-the-compiler" aria-label="Permalink to &quot;Run the compiler&quot;">​</a></h2><p>You can learn how to do this in our <a href="https://www.typescriptlang.org/download" target="_blank" rel="noreferrer">installation page</a>. You want to make sure these files are included in your package if you have the files in your project&#39;s <code>.gitignore</code>.</p><h2 id="editing-the-package-json" tabindex="-1">Editing the package.json <a class="header-anchor" href="#editing-the-package-json" aria-label="Permalink to &quot;Editing the package.json&quot;">​</a></h2><p>TypeScript replicates the node resolution for modules in a <code>package.json</code>, with an additional step for finding .d.ts files. Roughly, the resolution will first check the optional <code>types</code> field, then the <code>&quot;main&quot;</code> field, and finally will try <code>index.d.ts</code> in the root.</p><table><thead><tr><th style="text-align:left;">Package.json</th><th style="text-align:left;">Location of default .d.ts</th></tr></thead><tbody><tr><td style="text-align:left;">No &quot;types&quot; field</td><td style="text-align:left;">checks &quot;main&quot;, then index.d.ts</td></tr><tr><td style="text-align:left;">&quot;types&quot;: &quot;main.d.ts&quot;</td><td style="text-align:left;">main.d.ts</td></tr><tr><td style="text-align:left;">&quot;types&quot;: &quot;./dist/main.js&quot;</td><td style="text-align:left;">./dist/main.d.ts</td></tr></tbody></table><p>If absent, then &quot;main&quot; is used</p><table><thead><tr><th style="text-align:left;">Package.json</th><th style="text-align:left;">Location of default .d.ts</th></tr></thead><tbody><tr><td style="text-align:left;">No &quot;main&quot; field</td><td style="text-align:left;">index.d.ts</td></tr><tr><td style="text-align:left;">&quot;main&quot;:&quot;index.js&quot;</td><td style="text-align:left;">index.d.ts</td></tr><tr><td style="text-align:left;">&quot;main&quot;:&quot;./dist/index.js&quot;</td><td style="text-align:left;">./dist/index.d.ts</td></tr></tbody></table><h2 id="tips" tabindex="-1">Tips <a class="header-anchor" href="#tips" aria-label="Permalink to &quot;Tips&quot;">​</a></h2><p>If you&#39;d like to write tests for your .d.ts files, try <a href="https://github.com/SamVerschueren/tsd" target="_blank" rel="noreferrer">tsd</a>.</p>`,21),l=[e];function p(r,c,i,y,d,F){return a(),n("div",null,l)}const E=s(t,[["render",p]]);export{h as __pageData,E as default};