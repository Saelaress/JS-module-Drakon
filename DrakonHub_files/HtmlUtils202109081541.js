var HtmlUtils = {};
(function (b, g, f, p) {
    function n(a, d) { var c = g.createElement(d); a.appendChild(c); return c } function q(a) { var d = g.getElementById(a); if (d) return d; throw Error("Element '" + a + "' not found"); } function t(a) { return function (d) { try { a(d) } catch (c) { console.log(c), b.reportError(c) } } } function u() { var a = v(); a && (q("dialog").removeChild(a), k.pop(), delete a, 0 == k.length && (h = {})) } function w(a, d) { 0 < a.value.length ? a.value == d && (a.value = "", a.style.color = "black") : (a.value = d, a.style.color = "grey") } function x(a) {
        a = a.style; a.width =
            null; a.height = null; a.display = "inline-block"; a.position = "fixed"; a.left = "0px"; a.top = "0px"; a.right = "0px"; a.bottom = "0px"
    } function v() { var a = k.length; return 0 != a ? k[a - 1] : null } function B() { var a = h.div, d = q("popup_mover"); d.style.display = "inline-block"; d.style.position = "absolute"; a = a.getBoundingClientRect(); C(d, a.left, a.top, a.width - h.height, h.height, null) } function l(a, d, c) { c = t(c); a["on" + d] = c } function D(a) { var d = b.leftTop(h.div); h.pos = d; h.mx = a.clientX; h.my = a.clientY; h.drag = !0; d = q("popup_mover"); x(d); b.preventDefaultHandling(a) }
    function E(a) { if (h.drag) { var d = a.clientX - h.mx, c = a.clientY - h.my; h.mx = a.clientX; h.my = a.clientY; h.pos.x += d; h.pos.y += c; d = b.correctPosition(h.pos.x, h.pos.y, h.div); h.pos = d; var c = h.div, e = d.y; c.style.left = d.x + "px"; c.style.top = e + "px"; b.preventDefaultHandling(a) } } function y(a) { h.drag && (h.drag = !1, B(), b.preventDefaultHandling(a)) } function m(a) { return a && "initial" != a ? (a = a.substring(0, a.length - 2), parseFloat(a)) : 0 } function C(a, d, c, b, I, f) {
        f = f || "absolute"; var g = a.style, h = m(g.paddingLeft), k = m(g.paddingRight), l = m(g.borderLeftWidth),
            n = m(g.borderRightWidth), p = m(g.paddingTop), q = m(g.paddingBottom), r = m(g.borderTopWidth), g = m(g.borderBottomWidth); a.style.display = "inline-block"; a.style.position = f; a.style.left = d + "px"; a.style.top = c + "px"; a.style.width = b - h - k - l - n + "px"; a.style.height = I - p - q - r - g + "px"
    } function F(a) { if (a.responseText) try { return JSON.parse(a.responseText) } catch (b) { return a.responseText } else return "" } function z(a, b, c, e, g) {
        c = c ? JSON.stringify(c) : ""; var f = new XMLHttpRequest; f.open(a, b, !0); f.onreadystatechange = function () {
            if (4 == f.readyState) {
                var a =
                    F(f); if (200 == f.status || 204 == f.status) e(a); else try { g(a || "Connection problem", f.status) } catch (c) { }
            }
        }; f.send(c)
    } var h = {}, A = null; b.hidePopup = u; b.hasPopup = function () { return v() ? !0 : !1 }; b.setWatermark = function (a, b) { a.onfocus = function () { w(a, b) }; a.onblur = function () { w(a, b) }; w(a, b) }; b.setPasswordWatermark = function (a, b, c) { a.onfocus = function () { b.style.display = "none" }; a.onblur = function () { b.style.display = 0 < a.value.length ? "none" : "inline" } }; b.makeFullScreen = x; b.noContext = function (a) { a.oncontextmenu = function () { return !1 } };
    var k = [], r = !1; b.hasSoftPopup = function (a) { return b.soft ? !!b.soft.popup : !1 }; b.createSoftPopup = function (a, d) { b.soft = { backs: [] }; b.soft.onHide = d; b.soft.rect = { left: a.left, top: a.top, right: a.left + a.width, bottom: a.top + a.height }; var c = n(g.body, "div"); b.soft.popup = c; b.soft.ignored = !1; c.style.display = "inline-block"; c.style.zIndex = 31; return c }; b.getSoftPopup = function () { return b.soft && b.soft.popup ? b.soft.popup : null }; b.hideSoftPopup = function () {
        var a; if (b.soft && b.soft.popup) {
            if (b.soft.onHide) b.soft.onHide(); g.body.removeChild(b.soft.popup);
            for (a = 0; a < b.soft.backs.length; a++)g.body.removeChild(b.soft.backs[a]); b.soft.popup = null; b.soft.backs = []; b.soft.onHide = null
        }
    }; b.makePopupModal = function () { r = !0 }; b.createPopup = function (a, d) {
        r = !1; var c = q("dialog"), e = n(c, "div"); k.push(e); e.style.display = "block"; var f = n(e, "div"); f.oncontextmenu = function () { return !1 }; d && (f.style.background = "black", f.style.opacity = .3); x(f); c = 20 + 10 * k.length; f.style.zIndex = c; f.onmousedown = t(function (c) { b.preventDefaultHandling(c); r || (u(), a && a(c)) }); f.ontouchstart = t(function (c) {
            b.preventDefaultHandling(c);
            c = b.touchToMouse(c); b.preventDefaultHandling(c); r || (u(), a && a(c))
        }); e = n(e, "div"); e.style.display = "inline-block"; e.style.zIndex = c + 1; return e
    }; b.showUnder = function (a, d) { var c = b.leftBottom(a); d.style.display = "inline-block"; d.style.position = "absolute"; b.setPosCorrected(c.x, c.y, d) }; b.goBack = function () { f.history && f.history.go && f.history.go(-1) }; b.setUpMovable = function (a, d) {
        h = { div: a, drag: !1, height: d }; var c = v(); if (!c) throw new Exception("Cannot set up movable: no dialog"); c = n(c, "div"); c.id = "popup_mover"; c.style.zIndex =
            10 * k.length + 21; c.oncontextmenu = function () { return !1 }; l(c, "mousedown", D); l(c, "mousemove", E); l(c, "mouseup", y); l(c, "touchstart", function (a) { b.preventDefaultHandling(a); a = b.touchToMouse(a); D(a) }); l(c, "touchmove", function (a) { b.preventDefaultHandling(a); a = b.touchToMouse(a); E(a) }); l(c, "touchend", y); l(c, "touchcancel", y); B()
    }; b.insertAfter = function (a, b) { b.parentNode.insertBefore(a, b.nextSibling) }; b.hide = function (a) { if (a = g.getElementById(a)) a.style.display = "none" }; b.show = function (a, b) {
        var c = g.getElementById(a);
        c && (c.style.display = b)
    }; b.stopPropagation = function (a) { a.stopPropagation ? a.stopPropagation() : f.event && (f.event.cancelBubble = !0) }; b.isRetina = function () {
        return f.matchMedia && (f.matchMedia("only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)").matches || f.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)").matches) ||
            f.devicePixelRatio && 1.3 < f.devicePixelRatio
    }; b.getRetinaFactor = function () { return f.devicePixelRatio ? f.devicePixelRatio : b.isRetina() ? 2 : 1 }; b.isBrowserSupported = function () { if (!f.requestAnimationFrame) return !1; var a = g.createElement("canvas"); return a ? (a = a.getContext("2d")) && a.setLineDash && f.history && f.history.pushState && f.history.replaceState ? !0 : !1 : !1 }; b.showAtCenter = function (a) {
        var d = a.getBoundingClientRect(), c = d.height, d = Math.ceil((g.body.clientWidth - d.width) / 2), c = Math.ceil((f.innerHeight - c) / 3); b.setPosCorrected(d,
            c, a)
    }; b.setPosCorrected = function (a, b, c) { var e = c.getBoundingClientRect(), h = e.width, e = e.height; a + h > g.body.clientWidth && (a = g.body.clientWidth - h - 2); 0 > a && (a = 0); b + e > f.innerHeight && (b = f.innerHeight - e - 2); 0 > b && (b = 0); h = Math.min(h, f.innerWidth - 2); e = Math.min(e, f.innerHeight - 2); C(c, a, b, h, e, "fixed") }; b.correctPosition = function (a, b, c) { var e = c.getBoundingClientRect(); c = e.width; e = e.height; a + c > g.body.clientWidth && (a = g.body.clientWidth - c - 2); 0 > a && (a = 0); b + e > f.innerHeight && (b = f.innerHeight - e - 2); 0 > b && (b = 0); return { x: a, y: b } };
    b.hideChildren = function (a) { if (a = g.getElementById(a)) { a = a.children; for (var b = 0; b < a.length; b++)a[b].style.display = "none" } }; b.rect = function (a) { return a.getBoundingClientRect() }; b.below = function (a, d, c, e) { a = b.rect(a); return c - a.bottom > e }; b.leftBottom = function (a) { a = a.getBoundingClientRect(); return { x: a.left, y: a.bottom } }; b.leftTop = function (a) { a = a.getBoundingClientRect(); return { x: a.left, y: a.top } }; b.rightBottom = function (a) { a = a.getBoundingClientRect(); return { x: a.right, y: a.bottom } }; b.placeUnderLeft = function (a,
        d) { var c = b.leftBottom(a); b.correntPosition(c.x, c.y, element) }; b.width = function () { return f.innerWidth }; b.height = function () { return f.innerHeight }; b.isOutside = function (a) { var b = a.clientX; a = a.clientY; return 0 > b || 0 > a || b >= f.innerWidth || a >= f.innerHeight ? !0 : !1 }; b.getValue = function (a) { return g.getElementById(a).value || "" }; b.setValue = function (a, b) { g.getElementById(a).value = b }; b.setText = function (a, d) { var c = g.getElementById(a); c && b.setDivText(c, d) }; b.setChecked = function (a, b) {
            var c = g.getElementById(a); c && (c.checked =
                b)
        }; b.getChecked = function (a) { return (a = g.getElementById(a)) ? a.checked : !1 }; b.setDivText = function (a, b) { if (a) { a.innerHTML = ""; var c = g.createTextNode(b); a.appendChild(c) } }; b.clear = function (a) { if (a = g.getElementById(a)) a.innerHTML = "" }; b.focus = function (a) { (a = g.getElementById(a)) && a.focus() }; b.preventDefaultHandling = function (a) { a.preventDefault ? a.preventDefault() : a.returnValue = !1 }; b.schedule = function (a, b) { var c; return c = f.setInterval(function () { f.clearInterval(c); a.timeout() }, b) }; b.elementToClient = function (a,
            d) { var c = { x: d.x + a.offsetLeft, y: d.y + a.offsetTop }, e = a.offsetParent; return null === e ? c : b.elementToClient(e, c) }; var G = 0, H = 0; b.touchToMouse = function (a) { a = a.touches[0]; G = a.clientX; H = a.clientY; return { buttons: 0, screenX: a.screenX, screenY: a.screenY, clientX: a.clientX, clientY: a.clientY, pageX: a.pageX, pageY: a.pageY, target: a.target } }; b.registerDown = function (a, d) {
                a.addEventListener("mousedown", function (a) { 0 == a.button && d(a); b.preventDefaultHandling(a) }); a.addEventListener("touchstart", function (a) {
                    var e = b.touchToMouse(a);
                    d(e); b.preventDefaultHandling(a)
                })
            }; b.registerClick = function (a, d) { a.addEventListener("click", function (a) { d(a); b.preventDefaultHandling(a) }, !0) }; b.registerMove = function (a, d) { a.addEventListener("mousemove", function (a) { 0 == a.button && d(a); b.preventDefaultHandling(a) }, !0); a.addEventListener("touchmove", function (a) { var e = b.touchToMouse(a); d(e); b.preventDefaultHandling(a) }, !0) }; b.registerMoveWithDefault = function (a, d) {
                a.addEventListener("mousemove", function (a) { 0 == a.button && d(a) }, !0); a.addEventListener("touchmove",
                    function (a) { a = b.touchToMouse(a); d(a) }, !0)
            }; b.registerUp = function (a, d) { a.addEventListener("mouseup", function (a) { 0 == a.button && d(a); b.preventDefaultHandling(a) }); a.addEventListener("touchend", function (a) { d({ clientX: G, clientY: H, pageX: a.pageX, pageY: a.pageY }); b.preventDefaultHandling(a) }) }; b.getWheelDelta = function (a) { return { x: a.wheelDeltaX != p ? a.wheelDeltaX : a.deltaX != p ? a.deltaX : 0, y: a.wheelDeltaY != p ? a.wheelDeltaY : a.deltaY != p ? a.deltaY : 0 } }; b.setErrorReporter = function (a) { A = a }; b.reportError = function (a) { A && A(a) };
    b.sendRequest = z; b.sendGet = function (a, b, c) { z("GET", a, null, b, c) }; b.sendPost = function (a, b, c, e) { z("POST", a, b, c, e) }; b.sendRawPost = function (a, b, c, e) { var f = new XMLHttpRequest; f.open("POST", a, !0); f.onreadystatechange = function () { if (4 == f.readyState) { var a = F(f); if (200 == f.status || 204 == f.status) c(a); else try { e(a || "Connection problem", f.status) } catch (b) { } } }; f.send(b) }; b.setCookie = function (a, b, c) { var e = new Date; e.setTime(e.getTime() + 864E5 * c); c = "expires=" + e.toUTCString(); g.cookie = a + "=" + b + "; " + c + "; path=/" }; b.deleteCookie =
        function (a) { b.setCookie(a, "", -1) }; b.getCookie = function (a) { a += "="; for (var b = g.cookie.split(";"), c = 0; c < b.length; c++) { for (var e = b[c]; " " == e.charAt(0);)e = e.substring(1); if (0 == e.indexOf(a)) return e.substring(a.length, e.length) } return "" }; b.initYoutube = function () { var a = g.createElement("script"); a.id = "youtube-code"; a.src = "https://www.youtube.com/iframe_api"; var b = g.getElementsByTagName("script")[0]; b.parentNode.insertBefore(a, b) }; b.onYoutubeApiReady = function (a) {
            var d; b.players = {}; for (d = 0; d < a.length; d++) {
                var c =
                    a[d], e = new YT.Player(c, { events: {} }); b.players[c] = e
            }
        }; b.openInNewTab = function (a) { f.open(a, "_blank") }; b.scrollIntoViewCore = function (a, b) { var c = b.getBoundingClientRect(), e = a.getBoundingClientRect(); if (c.top < e.top || c.bottom > e.bottom) a.scrollTop = b.offsetTop - Math.floor(e.height / 2) }; b.scrollIntoView = function (a) { a && b.scrollIntoViewCore(a.parentNode, a) }; b.unfocus = function () { g.activeElement && g.activeElement.blur() }; b.isMobile = function () {
            return navigator && navigator.userAgent ? navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i) :
                !1
        }; b.fontFaces = {}; b.fontFaceLoaded = function (a) { b.fontFaces[a] = {} }; b.getFontHeight = function (a, d, c) {
            a = b.fontFaces[a]; if (!a) return null; if (d in a) return a[d]; var e; e = g.createElement("canvas"); e.width = 2 * d; e.height = 2 * d; var f = e.getContext("2d"); f.fillRect(0, 0, e.width, e.height); f.textBaseline = "top"; f.fillStyle = "white"; f.font = c; f.fillText("Mg", 0, 0); c = f.getImageData(0, 0, e.width, e.height).data; for (var h = f = -1, k = 0; k < e.height; k++)for (var l = 0; l < e.width; l++)if (0 === c[4 * (k * e.width + l)]) {
                if (l === e.width - 1 && -1 !== f) {
                    h =
                    k; k = e.height; break
                }
            } else { -1 === f && (f = k); break } e = h - f; return a[d] = e
        }
})(HtmlUtils, document, window);
