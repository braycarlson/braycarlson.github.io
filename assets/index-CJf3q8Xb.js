const __vite__fileDeps=["assets/OpacityUpdater-BNTmZ9kR.js","assets/index-Ds-m2cSq.js","assets/index-CxSx_Eve.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-Ds-m2cSq.js";async function p(t,a=!0){await t.addParticleUpdater("opacity",async r=>{const{OpacityUpdater:e}=await i(()=>import("./OpacityUpdater-BNTmZ9kR.js"),__vite__mapDeps([0,1,2]));return new e(r)},a)}export{p as loadOpacityUpdater};
