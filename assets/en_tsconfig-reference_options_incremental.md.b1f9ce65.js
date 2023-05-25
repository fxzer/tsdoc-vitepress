import{_ as o,o as n,c as s,z as e,a as t}from"./chunks/framework.ced88878.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{"display":"Incremental","oneline":"Save .tsbuildinfo files to allow for incremental compilation of projects."},"headers":[],"relativePath":"en/tsconfig-reference/options/incremental.md","lastUpdated":1681915487000}'),a={name:"en/tsconfig-reference/options/incremental.md"},i=e("p",null,[t("Tells TypeScript to save information about the project graph from the last compilation to files stored on disk. This creates a series of "),e("code",null,".tsbuildinfo"),t(" files in the same folder as your compilation output. They are not used by your JavaScript at runtime and can be safely deleted. You can read more about the flag in the "),e("a",{href:"/tsdoc-vitepress/docs/handbook/release-notes/typescript-3-4.html#faster-subsequent-builds-with-the---incremental-flag"},"3.4 release notes"),t(".")],-1),r=e("p",null,[t("To control which folders you want to the files to be built to, use the config option "),e("a",{href:"#tsBuildInfoFile"},[e("code",null,"tsBuildInfoFile")]),t(".")],-1),l=[i,r];function c(d,f,p,u,h,m){return n(),s("div",null,l)}const y=o(a,[["render",c]]);export{b as __pageData,y as default};