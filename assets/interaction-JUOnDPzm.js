const __vite__fileDeps=["assets/Linker-CSXp9Q09.js","assets/Ranges-CU8tcWNY.js","assets/index-JHWGkYGg.js","assets/index-BzxOZIAZ.css","assets/index-bzggvOXD.js","assets/OptionsColor-oEg7P7ci.js","assets/ParticlesInteractorBase-vfDeBun3.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-JHWGkYGg.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-CSXp9Q09.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};