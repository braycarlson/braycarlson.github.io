const __vite__fileDeps=["assets/LifeUpdater-CTbzRLkV.js","assets/ValueWithRandom-BXErksmu.js","assets/index-nWmA12J1.js","assets/index-C5jbWGaK.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-nWmA12J1.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-CTbzRLkV.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
