const __vite__fileDeps=["assets/LifeUpdater-BjaV7nWA.js","assets/ValueWithRandom-Bi6l2Aom.js","assets/index-cYH9zLHf.js","assets/index-46BlWRGd.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-cYH9zLHf.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-BjaV7nWA.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
