const __vite__fileDeps=["assets/LifeUpdater-UuSc5eP4.js","assets/ValueWithRandom-CeimSbs-.js","assets/index-a_gjX6Qf.js","assets/index-BCYgotMl.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-a_gjX6Qf.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-UuSc5eP4.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};