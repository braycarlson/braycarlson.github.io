const __vite__fileDeps=["assets/Attractor-swNZFoiu.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-DWBcc2y6.js","assets/index-COGwq6cD.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./index-DWBcc2y6.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-swNZFoiu.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
