const __vite__fileDeps=["assets/ColorUpdater-DwdxYvNN.js","assets/index-JHWGkYGg.js","assets/index-BzxOZIAZ.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-JHWGkYGg.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-DwdxYvNN.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
