const __vite__fileDeps=["assets/ParallaxMover-DLwtj4CN.js","assets/index-DQ1AMFnD.js","assets/index-ZWYlHK13.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as t}from"./index-DQ1AMFnD.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-DLwtj4CN.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};