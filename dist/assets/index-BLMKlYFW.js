const __vite__fileDeps=["assets/OutOfCanvasUpdater-Pax_q13J.js","assets/index-C5IuO2Lk.js","assets/index-DYi6Zyh4.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./index-C5IuO2Lk.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-Pax_q13J.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};