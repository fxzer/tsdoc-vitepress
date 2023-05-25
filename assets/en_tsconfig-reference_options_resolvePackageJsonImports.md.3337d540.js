import{_ as e,o,c as t,V as s}from"./chunks/framework.ced88878.js";const h=JSON.parse(`{"title":"","description":"","frontmatter":{"display":"Resolve package.json Imports","oneline":"Use the package.json 'imports' field when resolving imports."},"headers":[],"relativePath":"en/tsconfig-reference/options/resolvePackageJsonImports.md","lastUpdated":1681915487000}`),c={name:"en/tsconfig-reference/options/resolvePackageJsonImports.md"},r=s('<p><code>--resolvePackageJsonImports</code> forces TypeScript to consult <a href="https://nodejs.org/api/packages.html#imports" target="_blank" rel="noreferrer">the <code>imports</code> field of <code>package.json</code> files</a> when performing a lookup that starts with <code>#</code> from a file whose ancestor directory contains a <code>package.json</code>.</p><p>This option defaults to <code>true</code> under the <code>node16</code>, <code>nodenext</code>, and <code>bundler</code> options for <code>--moduleResolution</code>.</p>',2),a=[r];function n(d,p,i,l,_,f){return o(),t("div",null,a)}const g=e(c,[["render",n]]);export{h as __pageData,g as default};