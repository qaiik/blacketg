// ==UserScript==
// @name         blacket grinder (one pack)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  opens all packs and automatically refreshes
// @author       me
// @match        https://v2.blacket.org/market
// @icon         https://www.google.com/s2/favicons?sz=64&domain=blacket.org
// @grant        unsafeWindow
// ==/UserScript==

let globalPack="Debug";!function(){let t=unsafeWindow.blacket;unsafeWindow.blacket.requests.post=(t,a,o)=>{o||(o=t=>{}),$.ajax({type:"POST",url:t,data:JSON.stringify(a),contentType:"application/json",success:t=>o(t),error(t){o(t),location.reload()}})},new class a{constructor(){}start(){setInterval(()=>{this.pack=globalPack;try{t.requests.post("https://v2.blacket.org/worker/open",{pack:this.pack},t=>{var a,o;a=t,o=this.pack,a.error&&location.reload(),unsafeWindow.console.log(o,a)})}catch(a){unsafeWindow.location.reload()}},1e3)}}().start(),setTimeout(()=>{unsafeWindow.location.reload()},6e4)}();
