const __vite__fileDeps=["assets/Attractor-Cu0jaVPe.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-Cj-NWeo4.js","assets/index-DYi6Zyh4.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./index-Cj-NWeo4.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-Cu0jaVPe.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};