import{h as M,m as v,D as b,i as P,_ as g,N as A,r as h,o as S,g as w,e as G,a as u,O as I,d as x}from"./app-eWV4nnR8.js";import E from"./MyIcon-Cb2qukTN.js";import{a as C}from"./axios-CoTZsgdJ.js";import{_ as L}from"./plugin-vue_export-helper-DlAUqK2U.js";const B=M({__name:"NavMusic",setup(f,{expose:i}){i();let l,o=v(!1),a=[];const d=()=>{o.value=!o.value},r=()=>{o.value&&(o.value=!1)},m=()=>{const e=document.querySelector(".vp-navbar-end");if(!e)return;if(!document.querySelector("#MyMusic_Menu")){const s=document.createElement("div");s.id="MyMusic_Menu",s.classList.add("nav-item"),s.innerHTML='<div id="MyMusic_icon" class="btnImg"></div>',e.appendChild(s)}const t=document.querySelector("#MyMusic_Menu");t.onclick=s=>{d(),s.stopPropagation()};const n=document.querySelector(".MyMusic");n.onclick=s=>{s.stopPropagation()}},y=()=>{if(!l)return;const e=window,t=document.getElementById("GlobalAPlayer");!t||a.length<1||(c(),t.classList.contains("aplayer"))||(e.GlobalAPlayer=new l({container:document.getElementById("GlobalAPlayer"),audio:a,lrcType:3,listFolded:!1,listMaxHeight:"324px",mini:!1,fixed:!1,volume:1,storageName:"GlobalAPlayer"}),e.GlobalAPlayer.on("play",function(){c()}),e.GlobalAPlayer.on("pause",function(){c()}))};function c(){var t,n;const e=window;e.GlobalAPlayer&&e.GlobalAPlayer.mode&&(e.GlobalAPlayer.paused?(t=document.getElementById("MyMusic_icon"))==null||t.setAttribute("spin","false"):(n=document.getElementById("MyMusic_icon"))==null||n.setAttribute("spin","true"))}const p=e=>{C({method:"get",url:"//file.mo7.cc/music/list.json",params:{}}).then(t=>{var n=t.data;n&&n.length>0&&(a=n),console.log("加载音乐列表",a),e&&e()})};b(()=>{const e=P();p(()=>{g(()=>import("./APlayer.min-C49CcAHG.js").then(t=>t.A),[]).then(t=>{A(()=>{l=t.default,m(),y(),window.document.body.onclick=()=>{r()}}),e.afterEach(()=>{setTimeout(()=>{m(),y()},50)})})})});const _={get APlayer(){return l},set APlayer(e){l=e},get IsShow(){return o},set IsShow(e){o=e},get GlobalMusicList(){return a},set GlobalMusicList(e){a=e},SwitchStatus:d,CloseStatus:r,InsertMenu:m,NewPlayer:y,AddBtnSpin:c,LoadMusicList:p,MyIcon:E};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}),N={class:"MyMusic"};function k(f,i,l,o,a,d){const r=h("ClientOnly");return S(),w(r,null,{default:G(()=>[u("div",N,[u("div",{class:I(["MyMusic_Play",{hide:!o.IsShow}])},[u("div",{class:"close",onClick:o.CloseStatus},[x(o.MyIcon,{name:"guanbi"})]),i[0]||(i[0]=u("div",{id:"GlobalAPlayer"},null,-1))],2)])]),_:1})}const V=L(B,[["render",k],["__file","NavMusic.vue"]]);export{V as default};
