// ==UserScript==
// @name         blacket grindy
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  opens all packs and automatically refreshes
// @author       me
// @match        https://v2.blacket.org/market
// @icon         https://www.google.com/s2/favicons?sz=64&domain=blacket.org
// @grant        unsafeWindow
// ==/UserScript==
!function(){let t=unsafeWindow.blacket;unsafeWindow.blacket.requests.post=(t,e,a)=>{a||(a=t=>{}),$.ajax({type:"POST",url:t,data:JSON.stringify(e),contentType:"application/json",success:t=>a(t),error(t){a(t),location.reload()}})},new class e{constructor(){this.pack=null}start(){setInterval(()=>{let e;this.pack=(e=~~(Math.random()*Object.keys(t.packs).length),Object.keys(t.packs)[e]);try{t.requests.post("https://v2.blacket.org/worker/open",{pack:this.pack},t=>{var e,a;e=t,a=this.pack,e.error&&location.reload(),unsafeWindow.console.log(a,e)})}catch(a){location.reload()}},1e3)}}().start();setTimeout(()=>{location.reload()},1e5)}();
