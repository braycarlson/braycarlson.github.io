const __vite__fileDeps=["assets/SizeUpdater-8gHPAvmO.js","assets/index-JHWGkYGg.js","assets/index-BzxOZIAZ.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as r}from"./index-JHWGkYGg.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-8gHPAvmO.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};