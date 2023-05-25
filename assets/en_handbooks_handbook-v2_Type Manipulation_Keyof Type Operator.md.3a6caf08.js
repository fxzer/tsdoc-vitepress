import{_ as s,o as a,c as n,V as o}from"./chunks/framework.ced88878.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"en/handbooks/handbook-v2/Type Manipulation/Keyof Type Operator.md","lastUpdated":1682921420000}'),l={name:"en/handbooks/handbook-v2/Type Manipulation/Keyof Type Operator.md"},p=o(`<h2 id="the-keyof-type-operator" tabindex="-1">The <code>keyof</code> type operator <a class="header-anchor" href="#the-keyof-type-operator" aria-label="Permalink to &quot;The \`keyof\` type operator&quot;">​</a></h2><p>The <code>keyof</code> operator takes an object type and produces a string or numeric literal union of its keys. The following type P is the same type as &quot;x&quot; | &quot;y&quot;:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">type</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Point</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> { x</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">; y</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;"> };</span></span>
<span class="line"><span style="color:#F286C4;">type</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">P</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">keyof</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Point</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#7B7F8B;">//   ^?</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Point</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { </span><span style="color:#E36209;">x</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">; </span><span style="color:#E36209;">y</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">P</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">keyof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Point</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">//   ^?</span></span></code></pre></div><p>If the type has a <code>string</code> or <code>number</code> index signature, <code>keyof</code> will return those types instead:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">type</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Arrayish</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> { [</span><span style="color:#FFB86C;font-style:italic;">n</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">number</span><span style="color:#F6F6F4;">]</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">unknown</span><span style="color:#F6F6F4;"> };</span></span>
<span class="line"><span style="color:#F286C4;">type</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">A</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">keyof</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Arrayish</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#7B7F8B;">//   ^?</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">type</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Mapish</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> { [</span><span style="color:#FFB86C;font-style:italic;">k</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">]</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">boolean</span><span style="color:#F6F6F4;"> };</span></span>
<span class="line"><span style="color:#F286C4;">type</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">M</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">keyof</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Mapish</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#7B7F8B;">//   ^?</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Arrayish</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { [</span><span style="color:#E36209;">n</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">unknown</span><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">A</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">keyof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Arrayish</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">//   ^?</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Mapish</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { [</span><span style="color:#E36209;">k</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">M</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">keyof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Mapish</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">//   ^?</span></span></code></pre></div><p>Note that in this example, <code>M</code> is <code>string | number</code> -- this is because JavaScript object keys are always coerced to a string, so <code>obj[0]</code> is always the same as <code>obj[&quot;0&quot;]</code>.</p><p><code>keyof</code> types become especially useful when combined with mapped types, which we&#39;ll learn more about later.</p>`,7),e=[p];function t(c,r,y,F,i,d){return a(),n("div",null,e)}const C=s(l,[["render",t]]);export{h as __pageData,C as default};