const __vite__fileDeps=["assets/Attractor-5mSGMZ3q.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-a_gjX6Qf.js","assets/index-BCYgotMl.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./index-a_gjX6Qf.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-5mSGMZ3q.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
