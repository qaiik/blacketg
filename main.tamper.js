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
!function(){let t=unsafeWindow.blacket;new class r{constructor(){this.pack=null}start(){setInterval(()=>{this.pack=function r(){let a=~~(Math.random()*Object.keys(t.packs).length);return Object.keys(t.packs)[a]}();try{t.requests.post("https://v2.blacket.org/worker/open",{pack:this.pack},t=>{var r,a;r=t,a=this.pack,r.error&&location.reload(),unsafeWindow.console.log(a,r)})}catch(r){location.reload()}},1e3)}}().start(),setInterval(()=>{location.reload()},3e5)}();
