const __vite__fileDeps=["assets/LifeUpdater-CYl-iIYz.js","assets/ValueWithRandom-7HI0Coky.js","assets/index-Cj-NWeo4.js","assets/index-DYi6Zyh4.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-Cj-NWeo4.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-CYl-iIYz.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};