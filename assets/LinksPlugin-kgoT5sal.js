const __vite__fileDeps=["assets/LinkInstance-BqIM_PrY.js","assets/index-a_gjX6Qf.js","assets/index-BCYgotMl.css","assets/CanvasUtils-D7sCCJKL.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-a_gjX6Qf.js";class s{constructor(){this.id="links"}async getPlugin(n){const{LinkInstance:t}=await i(()=>import("./LinkInstance-BqIM_PrY.js"),__vite__mapDeps([0,1,2,3]));return new t(n)}loadOptions(){}needsPlugin(){return!0}}export{s as LinksPlugin};