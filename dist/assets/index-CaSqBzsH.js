const __vite__fileDeps=["assets/LifeUpdater-DqjoFXZC.js","assets/ValueWithRandom-BUhggNOf.js","assets/index-3mTmuhYS.js","assets/index-BCYgotMl.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-3mTmuhYS.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-DqjoFXZC.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
