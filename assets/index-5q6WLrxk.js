const __vite__fileDeps=["assets/PolygonDrawer-CjVc1xwc.js","assets/PolygonDrawerBase-BUNm7qrJ.js","assets/index-7Jp3hn6I.js","assets/index-DYi6Zyh4.css","assets/TriangleDrawer-BzHVY773.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as n}from"./index-7Jp3hn6I.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-CjVc1xwc.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-BzHVY773.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};