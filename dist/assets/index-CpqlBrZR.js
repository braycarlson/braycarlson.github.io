const __vite__fileDeps=["assets/OpacityUpdater-BT4sVgLD.js","assets/index-C5IuO2Lk.js","assets/index-DYi6Zyh4.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-C5IuO2Lk.js";async function p(t,a=!0){await t.addParticleUpdater("opacity",async r=>{const{OpacityUpdater:e}=await i(()=>import("./OpacityUpdater-BT4sVgLD.js"),__vite__mapDeps([0,1,2]));return new e(r)},a)}export{p as loadOpacityUpdater};
