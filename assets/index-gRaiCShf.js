const __vite__fileDeps=["assets/ParallaxMover-DF-Ug0vC.js","assets/index-JHWGkYGg.js","assets/index-BzxOZIAZ.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as t}from"./index-JHWGkYGg.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-DF-Ug0vC.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};