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

let globalPack = "PUT PACK HERE" //inside of quotes
! function() {
  let t = unsafeWindow.blacket;
  unsafeWindow.blacket.requests.post = (t, a, e) => {
    e || (e = t => {}), $.ajax({
      type: "POST",
      url: t,
      data: JSON.stringify(a),
      contentType: "application/json",
      success: t => e(t),
      error(t) {
        e(t), location.reload()
      }
    })
  }, new class a {
    constructor() {
    }
    start() {
      setInterval(() => {
        let a;
        this.pack = globalPack
        try {
          t.requests.post("https://v2.blacket.org/worker/open", {
            pack: this.pack
          }, t => {
            var a, e;
            a = t, e = this.pack, a.error && location.reload(), unsafeWindow.console.log(e, a)
          })
        } catch (e) {
          unsafeWindow.location.reload()
        }
      }, 1e3)
    }
  }().start(), setTimeout(() => {
    unsafeWindow.location.reload()
  }, 60 * 1000)
}();
