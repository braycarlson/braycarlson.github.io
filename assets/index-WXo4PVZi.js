const __vite__fileDeps=["assets/RotateUpdater-OLCpU0BD.js","assets/index-CXugGO2m.js","assets/index-Boh6amNs.css","assets/ValueWithRandom-DdukGevj.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./index-CXugGO2m.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-OLCpU0BD.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};