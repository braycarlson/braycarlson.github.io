const __vite__fileDeps=["assets/Attractor-cXwBWWi-.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-DQ1AMFnD.js","assets/index-ZWYlHK13.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./index-DQ1AMFnD.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-cXwBWWi-.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
