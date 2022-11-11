(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.getElementById("horizontal-scroller").addEventListener("wheel", (function(event) {
        if (event.deltaMode == event.DOM_DELTA_PIXEL) var modifier = 1; else if (event.deltaMode == event.DOM_DELTA_LINE) modifier = parseInt(getComputedStyle(this).lineHeight); else if (event.deltaMode == event.DOM_DELTA_PAGE) modifier = this.clientHeight;
        if (0 != event.deltaY) {
            this.scrollLeft += modifier * event.deltaY;
            event.preventDefault();
        }
    }));
    window["FLS"] = true;
    isWebp();
})();