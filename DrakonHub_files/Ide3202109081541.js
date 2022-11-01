function Ide3(h, q, k, ma, W) {
    function na() { this.getClipboardType = hb; this.copyToClipboard = ib; this.getClipboard = jb; this.clear = oa } function kb() { this.saveChanges = n(function (a) { m.logic.saveChanges(a) }, "saveChanges") } function lb() { t().addUser("admin") } function X(a, b, c, d) {
        a = f(a, "div"); a.style.padding = "10px"; a.style.background = "#455A64"; a.style.color = "white"; a.style.textAlign = "center"; a.style.borderRadius = "4px"; a.style.margin = "5px"; d && Utils.mergeSets(a.style, d); a.className = "list_item"; HtmlUtils.setDivText(a,
            b); a.onclick = n(c, "searchGroup")
    } function mb(a) { if (Config.dead) { a = f(a, "div"); a.style.padding = "10px"; a.style.fontSize = "30px"; a.style.cursor = "pointer"; a.style.background = "black"; a.style.color = "red"; a.style.border = "solid 2px red"; var b = k("MES_DRAKONHUB_CLOSED"); HtmlUtils.setDivText(a, b); a.onclick = function () { J("/static/dead.html") } } } function pa(a) { var b = f(e.search.popup, "div"); b.style.padding = "5px"; b.style.background = "#455A64"; b.style.color = "white"; HtmlUtils.setDivText(b, a); e.search.empty = b } function qa(a) {
        for (var b =
            0, c = nb(), d = 0, g = a.length; d < g;) { var e = a[d], b = e.type; "folder" === b ? ra(c, e) : "item" === b && sa(c, e); d++ }
    } function ta(a, b, c) { b = 0; if (0 != c.length) { a = ob(a); for (var d = 0, g = c.length; d < g;) { var e = c[d]; if (!(8 > a.count)) break; a.count++; b = e.type; "folder" === b ? ra(a.div, e) : "item" === b && sa(a.div, e); d++ } } } function ua(a, b, c) { a.push({ id: c, cells: [{ src: b, width: 36, height: 36 }, { text: c }] }) } function pb(a, b, c) {
        c = !0; for (var d = function (a) { return n(function () { A(); a() }, "main menu") }, g = 0, e = b.length; g < e;) {
            var Q = b[g], r = f(a, "div"); r.style.padding =
                "3px"; r.style.paddingBottom = "10px"; r.style.minWidth = "100px"; r.className = "list_item"; c ? c = !1 : r.style.borderTop = "solid 1px silver"; var h; Q.link ? (h = f(r, "a"), h.className = "white_link", h.href = Q.link) : (h = f(r, "div"), r.onclick = d(Q.action)); h.style.display = "inline-block"; h.style.marginTop = "8px"; HtmlUtils.setDivText(h, k(Q.text)); g++
        }
    } function va(a, b) {
        var c = f(a, "div"); c.style.textAlign = "center"; c.style.fontWeight = "bold"; c.style.fontSize = "110%"; c.style.padding = "5px"; c.style.color = "#455A64"; c.style.borderBottom =
            "solid 3px " + b.color; HtmlUtils.setDivText(c, k(b.title)); c = f(a, "div"); pb(c, b.items, b.color)
    } function qb(a, b) { if ("separator" == b.type) f(a, "hr").style.margin = "0px"; else { var c = f(a, "div"); c.className = "list_item"; c.style.height = "34px"; var d = rb(c); d.style.padding = "8px"; HtmlUtils.setDivText(d, k(b.text)); c.onclick = function (a) { A(); b.code(a) } } } function sb(a, b) {
        var c = b + " 1", d = wa(a, "workspace-s2.png", function () { m.logic.goToFolder(c) }); d.style.padding = "5px"; d.style.overflowWrap = "break-word"; HtmlUtils.setDivText(d,
            b)
    } function tb() { t().addUser("read") } function ub(a, b) { var c = wa(a, b.icon, function () { m.logic.goToFolder(b.id) }); c.style.padding = "5px"; HtmlUtils.setDivText(c, b.text) } function ra(a, b) {
        var c = "images/" + b.image, d = f(a, "table"), g = f(d, "tr"), e = f(g, "td"), g = f(g, "td"); d.className = "list_item"; d.style.borderBottom = "solid 1px silver"; e.style.verticalAlign = "middle"; e.style.width = "30px"; g.style.verticalAlign = "middle"; g.style.width = "100%"; e = f(e, "img"); e.width = 30; e.height = 30; e.src = c; g.style.padding = "2px"; d.onclick =
            xa(b); b.path && (c = f(g, "div"), HtmlUtils.setDivText(c, b.path), c.style.color = "#455A64"); c = f(g, "div"); HtmlUtils.setDivText(c, b.name); c.style.fontWeight = "normal"
    } function sa(a, b) {
        var c = f(a, "div"); c.className = "list_item"; c.style.borderBottom = "solid 1px silver"; c.style.padding = "2px"; c.onclick = xa(b); if (b.path) { var d = f(c, "div"); HtmlUtils.setDivText(d, b.path); d.style.color = "#455A64" } d = f(c, "div"); HtmlUtils.setDivText(d, b.name); d.style.fontWeight = "normal"; var c = f(c, "div"), g = b.found, d = g.line.substring(0, g.start),
            e = g.line.substring(g.start, g.start + g.length), g = g.line.substring(g.start + g.length); Y(c, d).style.color = "#455A64"; d = Y(c, e); d.style.fondWeight = "bold"; d.style.background = "coral"; Y(c, g).style.color = "#455A64"
    } function vb(a) { /* a = q.createTextNode(a); f(q.head, "style").appendChild(a) */ } function ya(a) {
        var b = e.search.defs, c = !1; if (b) {
            a.completed && (b.completed = !0); for (var d = 0, g = b.length; d < g;) { var z = b[d], f = a[z.id]; f && Utils.addRange(f, z.items); d++ } if (e.search.expanded) (f = a[e.search.expanded]) && qa(f); else {
                d = 0; for (g = b.length; d <
                    g;)z = b[d], (f = a[z.id]) && 0 < f.length && (ta(z, b.completed, f), c = !0), d++; z = a = 0; f = e.search.defs; for (d = f.length; z < d;)a += f[z].items.length, z++; b.completed ? (za(), 0 == a && pa(k("MES_NOTHING_FOUND"))) : c && za()
            }
        }
    } function wb() { t().addUser("write") } function B(a, b) { l(a, function () { u().showSockets(b) }) } function l(a, b) { D(a, function (a) { R() && (b(a), HtmlUtils.preventDefaultHandling(a)) }, "keydown") } function D(a, b, c) { b = n(b, a[0]); Mousetrap.bind(a, b, c) } function xb(a, b, c) {
        a.style.overflow = "auto"; a.style.background = "white"; c.setDashboardRecent =
            yb; c.setDashboardProjects = zb; var d, g; e.wide ? (b = f(a, "table"), d = f(b, "tr"), b.style.width = "1100px", b.style.maxWidth = "1100px", g = f(d, "td"), g.style.width = "300px", g.style.verticalAlign = "top", b = f(d, "td"), b.style.width = "400px", b.style.maxWidth = "400px", b.style.verticalAlign = "top", a = f(d, "td"), a.style.width = "400px", a.style.maxWidth = "400px", a.style.verticalAlign = "top", d = f(g, "div"), g = f(g, "div")) : (d = f(a, "div"), g = f(a, "div"), b = f(a, "div"), a = f(a, "div"), d.style.borderTop = "solid 1px #455A64", b.style.borderTop = "solid 1px #455A64",
                a.style.borderTop = "solid 1px #455A64"); d.style.padding = "20px"; d.style.paddingTop = "10px"; g.style.padding = "20px"; Z(d, "MES_MY_PROJECT", Ab, "coral"); Z(d, "MES_SPACES", Bb, "#455A64"); onPremises || Z(d, "MES_BUY_SUBSCRIPTION", Cb, "#455A64"); F(d, "MES_ACCOUNT", "/account"); F(d, "MES_HOMEPAGE", "/"); g.style.borderTop = "solid 1px #455A64"; F(g, "MES_DOCUMENTATION", "https://drakonhub.com/read/docs"); F(g, "title-drakon", "https://drakonhub.com/drakon"); F(g, "title-guidelines", "https://drakonhub.com/read/guidelines-for-drawing-drakon");
        F(g, "title-drakon-reference", "https://drakonhub.com/drakon-reference"); F(g, "title-video-how-to-flowchart", "https://drakonhub.com/video-how-to-flowchart"); F(g, "title-video-how-to-mind-map", "https://drakonhub.com/video-how-to-mind-map"); b.style.padding = "5px"; Aa(b, "MES_RECENT"); c.recent = f(b, "div"); a.style.padding = "5px"; Aa(a, "MES_SPACES"); c.projects = f(a, "div")
    } function Db(a, b, c) { a = f(a, "img"); c.customWidth = b.width; a.width = b.width; a.height = b.height; a.id = b.id + "_img"; a.style.border = "solid 2px #455A64" } function Ba(a,
        b) { var c = f(a, "label"), d = k(b.text), g = b.value ? !0 : !1, e = f(c, "input"); e.type = "checkbox"; e.name = "checkbox"; e.id = b.id + "_check"; e.style.marginRight = "10px"; e.checked = g; d = q.createTextNode(d); c.appendChild(d); b.onchange && (e.onchange = n(b.onchange, "normalCheckbox")) } function Eb(a) { var b = 0; return a.content ? (b = a.type, "beginend" === b || "end" === b || "branch" === b || "address" === b ? !1 : !0) : !1 } function P() { var a = e.centralMachines.length; 0 == a ? H() : e.centralMachines[a - 1].cancel() } function Ca() {
            var a = aa(); a && a.clear(); e.search.defs =
                null; e.search.widgetId = null; e.search.popup = null; e.search.groups = {}; HtmlUtils.hideSoftPopup(); HtmlUtils.unfocus()
        } function Fb() { p("file-input").click() } function oa() { S("clipboard type", ""); S("clipboard", "") } function Da() { for (var a = 0, b = e.centralMachines, c = b.length; a < c;)b[a].state = null, a++; e.centralMachines = [] } function Ea(a) { h.clearTimeout(a) } function ib(a, b) { var c = JSON.stringify(b); S("clipboard type", a); S("clipboard", c); Gb() } function Z(a, b, c, d) {
            a = f(a, "div"); b = k(b); HtmlUtils.setDivText(a, b); a.onclick =
                n(c, "buttonClick"); a.className = "common_button"; a.style.color = "white"; a.style.background = d; a.style.marginTop = "10px"; a.style.marginBottom = "20px"; a.style.padding = "10px"; a.style.borderRadius = "8px"; a.style.textAlign = "center"
        } function T(a, b) { Da(); v(a, b) } function Hb() { var a = p("central"), a = f(a, "div"), b = a.style; b.display = "inline-block"; b.position = "absolute"; b.zIndex = 25; b.left = "0px"; b.top = "0px"; b.right = "0px"; b.bottom = "0px"; b.background = "black"; b.opacity = .3; a.onclick = n(ba, "killCentral"); a.oncontextmenu = function () { return !1 } }
    function v(a, b) { b && e.centralMachines.push(b); ca(); Hb(); var c = p("central"); c.style.display = "block"; c = e.widgets.createWidget(c, a); C(c); var d = p(c); d.style.background = "white"; d.style.zIndex = 26; d.style.overflow = "hidden"; e.central = c; w() } function Ib() {
        if (Config.dead) {
            var a = f(q.body, "div"); a.style.display = "inline-block"; a.style.position = "fixed"; a.style.left = "10px"; a.style.bottom = "10px"; a.style.padding = "10px"; a.style.fontSize = "30px"; a.style.zIndex = 1E3; a.style.cursor = "pointer"; a.style.background = "black"; a.style.color =
                "red"; a.style.border = "solid 2px red"; var b = k("MES_DRAKONHUB_CLOSED"); HtmlUtils.setDivText(a, b); a.onclick = function () { J("/static/dead.html") }
        }
    } function Jb() {
        var a = new EditorCtrl(h, q, "middle_diagram", ma), b = { imageBase: "images/", translate: k, tooltip: e.widgets.getToolTip(), inputBox: { show: function (a, b, g, e, f, k) { da(!1, a, b, g, e, !1, f, k) } }, context: Fa, storage: new kb, status: n(Kb, "saveStatus"), warning: ea, panic: G, saveUserSettings: n(Lb, "saveUserSettings"), clipboard: new na, loadFont: Mb, findReferences: Nb, openSub: m.logic.openSub };
        a.init(b); e.editor = a; C("middle_diagram").setRect = Ob
    } function Aa(a, b) { var c = f(a, "div"), d = k(b); HtmlUtils.setDivText(c, d); c.style.color = "#455A64"; c.style.marginBottom = "20px"; c.style.marginTop = "5px" } function wa(a, b, c) { a = f(a, "tr"); a.className = "list_item"; var d = f(a, "td"), g = f(a, "td"); b = "images/" + b; d = f(d, "img"); d.width = 30; d.height = 30; d.src = b; c && (a.onclick = n(c, "listClick")); return g } function F(a, b, c) { a = f(a, "div"); var d = f(a, "a"); b = k(b); HtmlUtils.setDivText(d, b); d.href = c; a.style.marginBottom = "20px" }
    function Ga(a) { var b = HtmlUtils.createPopup(null); b.className = "popup"; b.style.background = "white"; for (var c = 0, d = a.length; c < d;)qb(b, a[c]), c++; return b } function Pb() {
        var a = HtmlUtils.getSoftPopup(); a && HtmlUtils.hideSoftPopup(); var b = C(e.search.widgetId), a = HtmlUtils.createSoftPopup(b.rect, function () { m.logic.resetSearch() }); a.style.background = "white"; a.style.maxWidth = "400px"; a.style.width = "400px"; a.className = "popup"; var c = b.rect.top + b.rect.height, b = c + 50; a.style.top = c + "px"; a.style.right = "0px"; X(a, k("MES_CLOSE"),
            Ca, { background: "coral" }); c = f(a, "div"); c.style.maxHeight = "calc(100vh - " + b + "px)"; c.style.overflowY = "auto"; a.style.display = "inline-block"; a.style.position = "fixed"; e.search.popup = c; pa(k("MES_SEARCHING"))
    } function fa(a, b) { var c = { id: a, type: "list_grid", noScroll: !0, columns: [{ type: "image", width: "36px", clickable: !0 }, { type: "text", width: "100%" }], rows: [] }, d = Object.keys(b); d.sort(); for (var g = 0, e = d.length; g < e;)ua(c.rows, "delete.png", d[g]), g++; return c } function Ha() {
        var a = e.demo.widgetId; a && (m.widgets.deleteWidget(a),
            e.demo.widgetId = null); a = p("demo"); a.innerHTML = ""; a.style.display = "none"
    } function Qb(a) { CallTrace.add("doSendFeedback", [a]); a = { type: "feedback", message: a }; K(); Ia(a, function () { I(); Ja(); ea("MES_MESSAGE_SENT") }, function () { I(); Ka(k("MES_MESSAGE_NOT_SENT")) }) } function Rb() { u().endPan(); e.panning = !1 } function Sb(a) { return (a = (a || "").trim()) ? null : k("ERR_EMPTY_TEXT") } function L(a, b, c) { a[c] = n(b, c) } function Nb(a) { m.logic.findReferences(a) } function aa() {
        var a = C("top").active; return a ? La(a, function (a) {
            return "search" ==
                a.type
        }) : null
    } function La(a, b) { if (b(a)) return a; if (a.kids) for (var c = 0, d = a.kids, g = d.length; ;) { if (!(c < g)) return null; var e = d[c]; if (La(e, b)) return e; c++ } else return null } function Tb(a) { if (!(HtmlUtils.hasPopup() || HtmlUtils.hasSoftPopup() || e.central || !e.wide || e.helpOn)) { var b = aa(); b && b.focus() } HtmlUtils.preventDefaultHandling(a) } function Ub(a, b, c, d, g) { t().choose(d) } function p(a) { var b = q.getElementById(a); if (b) return b; throw Error("Element '" + a + "' not found"); } function jb() { var a = Ma("clipboard"); return JSON.parse(a) }
    function hb() { return Ma("clipboard type") } function Na() { var a = new Date, b = String(a.getFullYear()), c = String(a.getMonth() + 1), d = String(a.getDate()), g = String(a.getHours()), e = String(a.getMinutes()), a = String(a.getSeconds()); return M(b) + M(c) + M(d) + M(g) + M(e) + M(a) } function u() { return e.editor } function Vb(a) { var b = a.txt2 || ""; a = (a.txt || "").split("\n"); b = b.split("\n"); return a.concat(b).filter(function (a) { return "" != a.trim() }) } function Wb(a) {
        var b = a.txt2 || ""; a = Utils.extractUrls(a.txt || ""); b = Utils.extractUrls(b);
        return a.concat(b)
    } function Ma(a) { var b; try { b = h.localStorage.getItem(a) } catch (c) { b = e.clip[a] } DTools.print(b); return b } function t() { return e.centralMachines[e.centralMachines.length - 1] } function nb(a) { if (e.search.expandedList) return e.search.expandedList; a = e.search.popup; var b = k("MES_SHOW_ALL_RESULTS"); X(a, b, function () { Oa(null) }); a = f(a, "div"); return e.search.expandedList = a } function ob(a) {
        var b = e.search.groupLists; b || (b = {}, e.search.groupLists = b); if (!(a.id in b)) {
            var c = e.search.popup, d = k("MES_SHOW_MORE") +
                ": " + a.name, c = f(c, "div"), g = f(c, "div"); X(c, d, function () { Oa(a.id) }); b[a.id] = { div: g, count: 0 }
        } return b[a.id]
    } function C(a) { return e.widgets.getWidget(a) } function Ab() { m.logic.goToFolder(ma + " 1") } function Cb() { J("/drakonhub-source?ref=dashboard") } function Bb() { m.logic.goToProjectsNoArg() } function J(a) { h.location.href = a } function H() { 0 != e.centralMachines.length && e.centralMachines.pop(); ca() } function ca() {
        var a = e.central; a && (e.central = null, m.widgets.deleteWidget(a), a = p("central"), a.innerHTML = "", a.style.display =
            "none", e.mobileInput = !1, e.mobileSubmit = !1, e.search = {})
    } function ga() { var a = q.getElementById("demoShowOnStart_check"); a && (a.checked ? HtmlUtils.deleteCookie("demo-discarded") : HtmlUtils.setCookie("demo-discarded", "discarded", 20), Ha()) } function N() { p("help_wide").style.display = "none"; p("help_narrow").style.display = "none"; e.helpOn = !1 } function Ja() { e.wide ? InputBox.hide() : H() } function A() { HtmlUtils.hidePopup() } function I() { p("working").style.display = "none" } function Pa() { return !!HtmlUtils.getCookie("demo-discarded") }
    function R() { return "middle_diagram" != m.logic.getCurrent().screen || HtmlUtils.hasPopup() || e.central ? !1 : u().isDragOn() ? !1 : !0 } function ba() { Da(); ca() } function Xb() { var a = p("file-input").files[0]; a ? O(a) : HtmlUtils.setText("file-error", k("MES_NO_FILE_CHOSEN")) } function Mb(a, b, c, d, g) { try { var e = { italic: a, bold: b, family: c, file: d }; K(); Qa(e, { onData: function () { I(); g() }, onError: function (a) { Ra(a, e) } }) } catch (f) { CallTrace.error(f), G(f) } } function Qa(a, b) {
        var c = a.file; if (c in e.loadedFonts) console.log("Font already loaded ",
            c), U(b, null, 1); else { var d = Yb(a.italic, a.bold, a.family, c); vb(d); d = Zb(a.italic, a.bold); (new FontFaceObserver(a.family, d)).load(null, 1E3 * Config.FONT_TIMEOUT).then(function () { try { CallTrace.add("font ready", [c]); var d = Utils.buildFontFace(a.italic, a.bold, a.family); console.log("Font ready", c, d); HtmlUtils.fontFaceLoaded(d); e.loadedFonts[c] = !0; U(b, null, 200) } catch (f) { Ra(f, a) } }, function () { console.log("Font NOT loaded", c); CallTrace.add("font NOT loaded", [c]); U(b, null, 200) }) }
    } function f(a, b) {
        var c = q.createElement(b);
        a.appendChild(c); return c
    } function $b(a) { a = f(a, "table"); var b = f(a, "tr"), c = f(b, "td"), b = f(b, "td"); a.style.marginTop = "10px"; a.style.marginBottom = "10px"; b.style.paddingLeft = "10px"; a = f(c, "input"); a.type = "checkbox"; c = f(b, "div"); c.innerHTML = k("MES_I_AGREE"); c.style.marginLeft = "10px"; c.style.display = "inline-block"; a.id = "signup_agree" } function ha(a, b) {
        a = { type: "label", text: a, style: { color: "#455A64", fontWeight: "bold" } }; return {
            type: "hdock", height: 31, lefts: [a], rights: [{
                type: "text_button", text: "MES_ADD", signalId: b,
                style: { background: "#455A64", color: "white", padding: "8px", textAlign: "center", borderRadius: "5px" }
            }]
        }
    } function ia(a, b, c) {
        a.className = "big_picture_button"; a.style.padding = "5px"; a.style.borderWidth = "2px"; var d = f(a, "table"), e = f(d, e), d = f(e, "td"), e = f(e, "td"); e.style.height = "100px"; d = f(d, "img"); d.draggable = !1; d.src = "images/" + b.image; d.style.width = "80px"; d = f(e, "div"); d.style.fontSize = "110%"; d.style.fontWeight = "bold"; d.style.margin = "5px"; HtmlUtils.setDivText(d, k(b.text)); e = f(e, "p"); e.style.textAlign =
            "center"; e.style.color = "#455A64"; e.style.fontSize = "90%"; e.style.margin = "5px"; HtmlUtils.setDivText(e, k(b.desc)); ac(a, c, "click")
    } function Sa(a) { a = Utils.makeErrorMessage(a); return k(a) } function Yb(a, b, c, d) { c = "@font-face {\n" + ("    font-family: '" + c + "';\n") + ("    src: url('fonts/" + d + "');\n"); a && (c += "    font-style: italic;\n"); b && (c += "    font-weight: bold;\n"); return c += "}" } function Zb(a, b) { var c = {}; a && (c.style = "italic"); b && (c.weight = "bold"); return c } function bc(a) { return function () { h.open(a) } }
    function rb(a) { a = f(a, "div"); a.style.display = "inline-block"; return a } function cc(a, b) { var c = a + " " + b; return function () { m.logic.goToFolder(c) } } function dc() { var a = u().getName().replace(/,| |:|\\|\/|\r|\n|\t/g, "-"); a || (a = "diagram"); return a + ".png" } function ec(a) { a = f(a, "a"); a.href = "/reset"; HtmlUtils.setDivText(a, k("MES_FORGOT_PASSWORD")) } function xa(a) { var b = a.type, c = a.target; return n(function () { A(); H(); N(); ga(); m.logic.onSearchItem(b, c) }, "searchItem:" + b + ":" + c) } function Y(a, b) {
        var c = f(a, "span"); HtmlUtils.setDivText(c,
            b); return c
    } function Ta(a) { a = f(a, "textarea"); a.style.fontSize = "12pt"; a.style.fontFamily = Config.FONT_FAMILY; a.style.boxSizing = "border-box"; a.style.resize = "none"; a.style.outline = "none"; a.style.width = "100%"; a.style.padding = "10px"; a.style.border = "none"; a.style.height = "60px"; a.style.margin = "0px"; a.style.border = "solid 1px #707070"; a.style.verticalAlign = "top"; a.className = "mousetrap"; return a } function fc() { u().selectAll() } function Ua() { InputBox.isVisible() ? InputBox.submit() : e.mobileInput && Va() } function gc() { m.logic.redo() }
    function hc() { m.logic.undo() } function ic(a) { var b; if (b = R()) b = m.logic.getCurrent(), b = "middle_diagram" != b.screen || b.isReadonly ? !0 : !1, b = !b; b && (u().deleteSelection(), HtmlUtils.preventDefaultHandling(a)) } function jc(a, b, c, d, e) { Wa(c.id) } function kc(a) { Xa(a); e.enterSave && Ua(a) } function lc(a) { e.central && P(); HtmlUtils.hasPopup() && A(); HtmlUtils.hideSoftPopup(); N() } function Ya(a, b, c, d, g) { var f = e.myHandlers[c.signalId]; if (f) f(a, b, c, d, g); else m.logic.onEvent(a, b, c, d, g) } function mc() {
        HtmlUtils.setText("file-error",
            "")
    } function nc() { p("access_is_public_check"); t().togglePublic() } function oc(a) { var b = 0, b = a.keyCode; 13 === b ? ja() : 27 === b && P() } function ka() { var a = HtmlUtils.width() - 0, b = HtmlUtils.height() - 0; e.widgets.resizeWidget(e.root, 0, 0, a, b); w() } function Za(a) { a = Sa(a); HtmlUtils.setText("signup_status", a); w(); I() } function pc(a) { t().signup(a) } function qc(a) { var b = 0, b = a.keyCode; 13 === b ? p("password_edit").focus() : 27 === b && P() } function M(a) { 1 == a.length && (a = "0" + a); return a } function G(a) {
        var b = Utils.makeErrorMessage(a), c =
            k(b), d, e; e = d = null; "Error" == a.name && (e = a); "ERR_ACCESS_DENIED" != b && "ERR_BAD_PATH" != b && "ERR_NOT_FOUND" != b && "ERR_COMMUNICATION" != b && "ERR_DIAGRAM_LIMIT" != b && "ERR_USER_LIMIT" != b && "ERR_SPACE_LIMIT" != b && "ERR_NOT_LOGGED_ON" != b ? ($a(c, d, null, null, e), W(c)) : "ERR_NOT_LOGGED_ON" == b ? (d = "/logon?target=" + h.location.href, J(d)) : W(c)
    } function Ra(a, b) { var c = Sa(a); b && (c += " family:" + b.family, c += " italic:" + b.italic, c += " bold:" + b.bold); G(c) } function ac(a, b, c) { a["on" + c] = n(function (a) { Ya(a, c, b) }, "registerEvent") } function rc() {
        D(["escape"],
            lc); D(["enter"], kc); D(["mod+enter"], Ua); D(["backspace", "del"], ic); D(["space"], sc, "keydown"); D(["space"], Rb, "keyup"); D(["mod+f"], Tb); l(["mod+z"], hc); l(["mod+y"], gc); l(["mod+a"], fc); var a = u(); l("f2", Xa); l("mod+c", a.copy); l("mod+x", a.cut); l("mod+v", a.paste); l("up", function () { a.arrowUp(!1, !1, !1) }); l("mod+up", function () { a.arrowUp(!0, !1, !1) }); l("shift+up", function () { a.arrowUp(!1, !0, !1) }); l("alt+up", function () { a.arrowUp(!1, !1, !0) }); l("down", function () { a.arrowDown(!1, !1, !1) }); l("mod+down", function () {
                a.arrowDown(!0,
                    !1, !1)
            }); l("shift+down", function () { a.arrowDown(!1, !0, !1) }); l("alt+down", function () { a.arrowDown(!1, !1, !0) }); l("left", function () { a.arrowLeft(!1, !1, !1) }); l("mod+left", function () { a.arrowLeft(!0, !1, !1) }); l("shift+left", function () { a.arrowLeft(!1, !0, !1) }); l("alt+left", function () { a.arrowLeft(!1, !1, !0) }); l("right", function () { a.arrowRight(!1, !1, !1) }); l("mod+right", function () { a.arrowRight(!0, !1, !1) }); l("shift+right", function () { a.arrowRight(!1, !0, !1) }); l("alt+right", function () { a.arrowRight(!1, !1, !0) }); B("a",
                "action"); B("q", "question"); B("l", "foreach"); B("n", "insertion"); B("f", "shelf"); B("m", "comment"); B("s", "select"); B("c", "case"); B("b", "branch"); B("r", "raction")
    } function tc(a, b, c, d, e) { 0 == e && (C("removeAdmin").remove(d), w(), a = { role: "admin", user: d }, t().removeUser(a)) } function za() { var a = e.search.popup; e.search.empty && (a.removeChild(e.search.empty), e.search.empty = null) } function uc() {
        var a = "/buy"; ab() && (a = "team" == e.plan ? "/trial" : "/prices"); var b = []; e.plan && b.push("product=" + e.plan); e.ref && b.push("ref=" +
            e.ref); 0 != b.length && (b = b.join("&"), a += "?" + b); J(a)
    } function vc(a, b, c, d, e) { 0 == e && (C("removeReader").remove(d), w(), a = { role: "read", user: d }, t().removeUser(a)) } function wc(a, b, c, d, e) { 0 == e && (C("removeWriter").remove(d), w(), a = { role: "write", user: d }, t().removeUser(a)) } function $a(a, b, c, d, e) {
        var f = null; e && (f = e.stack); console.log(a, b, c, d, e); DTools.print(a, e, b, c); c = CallTrace.reset(); console.log(c); a = { type: "crash", errorMsg: a, errorUrl: b, errorObj: e, trace: c, stack: f, clientDiagram: m.logic.getDiagram() }; Ia(a, function () { },
            function () { })
    } function w() { var a = e.central; if (a) { var b = h.innerHeight - 10, c = Math.floor((h.innerWidth - 320) / 2), d = C(a).measureHeight(320), b = Math.min(b, d); e.widgets.resizeWidget(a, c, 10, 320, b) } } function Ob() { var a = this.rect; e.editor.resize(a.left, a.top, a.width, a.height) } function bb() { O(null) } function Va() { var a = e.mobileIsAsync, b = e.mobileOnSave, c = e.mobileValidate, d = p("mob_input_edit").value; c ? (c = c(d)) ? cb(k(c)) : (a || H(), b(d)) : (a || H(), b(d)) } function Kb(a) { } function Lb(a) { m.logic.saveUserSettings(a) } function Gb() {
        var a =
            Math.floor(1E5 * Math.random()).toString(); e.clipboardTimer = a; h.setTimeout(function () { a == e.clipboardTimer && oa() }, 3E5)
    } function U(a, b, c) { h.setTimeout(function () { a.onData(b) }, c) } function xc() { var a = C("searchUsers").getValue(), a = a.trim(); t().onInput(a) } function Wa(a) { for (var b = 0, c = e.demo.buttons, d = Object.keys(c), g = d.length; b < g;) { var f = d[b], k = c[f], f = p(f); f.style.background = "#455A64"; b++ } f = p(a); f.style.background = "black"; k = e.demo.buttons[a]; a = "images/" + k.image; p("demoViewport_img").src = a } function db() {
        var a =
            k("MES_SEND_FEEDBACK_TO_DEV"); da(!0, k(a), "", function (a) { Qb(a) }, Sb, !1)
    } function Ia(a, b, c) { a.url = h.location.href; var d = m.logic.getCurrent(); a.screen = d.screen; a.spaceId = d.spaceId; a.folderId = d.folderId; a.doc_type = d.type; HtmlUtils.sendPost("/api/feedback/", a, b, c) } function eb(a, b, c) {
        CallTrace.add("sendPost", [a]); var d = Utils.randomString(10); c.requestId = d; var e = n(function (a) { if (c.requestId == d) c.onData(a) }, "sendPost:success"), f = n(function (a) { if (c.onError) c.onError(a) }, "sendPost:error"); HtmlUtils.sendPost(a,
            b, e, f)
    } function O(a) { var b = e.centralMachines.length; if (0 != b) e.centralMachines[b - 1].onData(a) } function zb(a) { this.projects.innerHTML = ""; for (var b = f(this.projects, "table"), c = 0, d = a.length; c < d;)sb(b, a[c]), c++ } function yb(a) { this.recent.innerHTML = ""; for (var b = f(this.recent, "table"), c = 0, d = a.length; c < d;)ub(b, a[c]), c++ } function Ka(a) { e.wide ? InputBox.setError(a) : cb(a) } function S(a, b) { try { h.localStorage.setItem(a, b) } catch (c) { e.clip[a] = b } } function cb(a) { HtmlUtils.setText("mobile_input_error", a); w() } function la(a,
        b, c) { a = n(a, c); return h.setTimeout(a, b) } function Fa(a, b, c, d, g) {
            for (var f = 0, k = c.rows, r = k.length; f < r;) { var h = k[f], p = n(h.code, "context-menu:" + (h.id || "<none>")); h.code = p; f++ } ContextMenu.show(a, b, c, d); c = {}; e.extended = c; if (g && !e.tryMe && Eb(g) && (d = Vb(g.content), 0 != d.length)) {
                var l = Utils.randomString(10); c.urls = Wb(g.content); c.queryId = l; c.item = g; var q = m.logic.getCurrent(); eb("/api/def_query", { space_id: q.spaceId, lines: d }, {
                    onData: function (c) {
                        var d = e.extended; if (d && l == d.queryId) {
                            var g = []; if (c.items) for (var f =
                                0, z = c.items, k = z.length; f < k;) { var h = z[f]; h.space_id == q.spaceId && h.folder_id != q.folderId && (c = "> " + Utils.truncateText(h.name, 40), h = cc(h.space_id, h.folder_id), g.push({ type: "item", text: c, code: h })); f++ } f = 0; d = d.urls; for (z = d.length; f < z;)h = d[f], c = "> " + Utils.truncateText(h, 40), h = bc(h), g.push({ type: "item", text: c, code: h }), f++; if (0 != g.length) { g = g.slice(0, 7); ContextMenu.addItem({ type: "separator" }); c = 0; for (d = g.length; c < d;)h = g[c], ContextMenu.addItem(h), c++; ContextMenu.repos(a, b) }
                        }
                    }, onError: function () { }
                })
            }
        } function fb() {
            "drakon" ==
            m.logic.getCurrent().type ? V("drakon_only", "block") : V("drakon_only", "none"); "mind" == m.logic.getCurrent().type ? V("mind_only", "block") : V("mind_only", "none"); e.wide ? p("help_wide").style.display = "block" : p("help_narrow").style.display = "block"; e.helpOn = !0
        } function da(a, b, c, d, g, f, k, h) { e.enterSave = f; e.wide ? InputBox.show(a, b, c, d, g, k, h) : yc(a, b, c, d, g) } function V(a, b) { b = b || "block"; for (var c = 0, d = q.getElementsByClassName(a), e = d.length; c < e;)d[c].style.display = b, c++ } function yc(a, b, c, d, g) {
            b = {
                type: "label", text: b, raw: !0,
                style: { fontSize: "80%" }
            }; T({
                type: "page", style: { background: "white" }, padding: 10, kids: [{ type: "hdock", height: 40, lefts: [{ signalId: "cancelMachine", type: "text_button", text: "MES_CANCEL", style: { color: "white", background: "#455A64", padding: "12px", textAlign: "center", borderRadius: "5px" } }], rights: [{ signalId: "saveMobileInput", type: "text_button", text: "MES_SAVE", style: { color: "white", background: "coral", padding: "12px", textAlign: "center", borderRadius: "5px" } }], center: b }, {
                    type: "custom", id: "mobile_input_error", builder: function (a) {
                        a.style.color =
                        "#900000"
                    }
                }, { type: "custom", builder: function (a) { a = Ta(a); a.style.height = "180px"; a.value = c; a.focus(); a.select(); a.id = "mob_input_edit" } }]
            }, null); e.mobileInput = !0; e.mobileIsAsync = a; e.mobileOnSave = d; e.mobileValidate = g
        } function ea(a) { e.pop.show(k(a)) } function K() { p("working").style.display = "block" } function Xa(a) { R() && (HtmlUtils.preventDefaultHandling(a), u().startEdit()) } function ja() { gb.logon("username_edit", "password_edit", "status", e.myHandlers.login) } function sc() {
            !e.panning && R() && (u().startPan(), e.panning =
                !0)
        } function zc() { onPremises || p("signup_agree").checked ? (e.signup = new Signup(h, q, k, "signup_user", "signup_email", "signup_password", "signup_password2", "signup_status", K, pc, Za, !1), e.signup.update = w, e.signup.signup("example")) : Za({ error: "MES_AGREE" }) } function Oa(a) {
            e.search.expanded = a; e.search.popup.innerHTML = ""; if (a) { e.search.expandedList = null; a: for (var b = 0, c = e.search.defs, d = c.length; ;) { if (!(b < d)) throw Error("Group '" + a + "' not found"); var g = c[b]; if (g.id == a) break a; b++ } qa(g.items) } else for (e.search.groupLists =
                {}, b = e.search.defs, c = 0, d = b.length; c < d;)a = b[c], 0 < a.items.length && ta(a, b.completed, a.items), c++
        } function ab() { return ServerVars.userId && !ServerVars.hadTrial && "basic" == ServerVars.currentPlan ? !0 : !1 } function n(a, b) { return function (c, d, e) { try { CallTrace.add(b, []), a(c, d, e) } catch (f) { CallTrace.error(f), G(f) } } } var m = this, e = null, gb = new Logon(h, q, k), e = function () {
            var a = {
                tt: new ToolTip(h, q), pop: new Popup(h, q), logon: new Logon(h, q, k), widgets: new DraWidgets(h, q, k, 1, "images/"), loadedFonts: {}, clip: {}, myHandlers: {},
                centralMachines: [], search: {}, initCompleted: !1, demo: {}
            }; a.myHandlers.createDrakon = function () { O("drakon") }; a.myHandlers.createFree = function () { O("free") }; a.myHandlers.createMind = function () { O("mind") }; a.myHandlers.sendToCentralMachine = function () { O() }; a.myHandlers.accessForShare = function () { t().access() }; a.myHandlers.login = function (a) { t().login(a) }; a.myHandlers.signup = function (a) { t().signup(a) }; a.myHandlers.removeLimit = uc; a.myHandlers.sendFeedback = db; a.myHandlers.showHelp = fb; a.myHandlers.hideHelp = N; a.myHandlers.hideCentral =
                H; a.myHandlers.cancelMachine = P; a.myHandlers.startLogon = ja; a.myHandlers.startSignup = zc; a.myHandlers.saveMobileInput = Va; a.myHandlers.saveProject = bb; a.myHandlers.chooseFile = Fb; a.myHandlers.loadFile = Xb; a.myHandlers.addWriter = wb; a.myHandlers.addAdmin = lb; a.myHandlers.addReader = tb; a.myHandlers.searchUsers = xc; a.myHandlers.removeAdmin = tc; a.myHandlers.removeReader = vc; a.myHandlers.removeWriter = wc; a.myHandlers.foundUser = Ub; a.myHandlers.saveAccess = bb; a.myHandlers.hideDemo = ga; a.widgets.wrapException = n; return a
        }();
    m.widgets = e.widgets; gb.onError = w; L(this, function () { e.widgets.onEvent = Ya; m.logic.init(); rc(); Nav.stateCallback = m.logic.onStateChange; e.isTryMe && (h.onbeforeunload = null); Ib() }, "init"); L(this, ka, "onResize"); L(this, function () { var a = e.resizeTimer; a && Ea(a); a = la(function () { e.resizeTimer = null; ka() }, 300, "orderResize"); e.resizeTimer = a }, "orderResize"); L(this, function (a) { e.initCompleted && (ba(), A(), A(), N(), Nav.onStateChange(a)) }, "onStateChange"); L(this, function (a, b, c, d, e) { $a(a, b, c, d, e); W(a) }, "onError"); L(this,
        N, "hideHelp"); this.getUrl = function () { return h.location.href.toLowerCase() }; this.getWidth = function () { return h.innerWidth }; this.getHeight = function () { return h.innerHeight }; this.getPath = function () { return h.location.pathname.toLowerCase() }; this.onInitCompleted = function () { p("loading").style.display = "none"; p("wide").style.display = "block"; e.initCompleted = !0; ka() }; this.initControls = function (a, b) {
            e.wide = a; e.isTryMe = b; var c; if (e.wide) {
                c = {
                    signalId: "showMainMenu", type: "image_button", image: "drakosha-menu-104.png",
                    width: 80, height: 52, tooltip: "MES_MENU"
                }; var d = { signalId: "create_diagram", hPadding: 8, vPadding: 8, type: "text_button", text: "new_diagram", tooltip: "MES_CREATE_DIAGRAM", style: { color: "white", background: "coral", fontSize: "80%", padding: "12px", paddingLeft: "0px", paddingRight: "0px", textAlign: "center", borderRadius: "4px" }, customWidth: 100 }, g = { hPadding: 1, vPadding: 6, signalId: "share", type: "image_button", image: "share.png", width: 40, height: 40, tooltip: "MES_SHARE", style: { background: "white", borderRadius: "5px" } }, f = {
                    signalId: "undo",
                    hPadding: 6, vPadding: 6, type: "image_button", image: "undo.png", width: 40, height: 40, style: { borderRadius: "5px" }, tooltip: "MES_UNDO"
                }, h = { signalId: "redo", hPadding: 1, vPadding: 6, type: "image_button", image: "redo.png", width: 40, height: 40, style: { borderRadius: "5px" }, tooltip: "MES_REDO" }, r = { hPadding: 6, vPadding: 6, signalId: "exportButton", type: "image_button", image: "export.png", width: 40, height: 40, style: { borderRadius: "5px" }, tooltip: "MES_SAVE_AS_IMAGE" }, l = {
                    signalId: "up", hPadding: 6, vPadding: 6, type: "image_button", image: "arrow-up.png",
                    width: 40, height: 40, style: { borderRadius: "5px" }, tooltip: "MES_UP"
                }, x = { signalId: "globalSearch", hPadding: 6, vPadding: 6, type: "search", height: 30, width: 150 }, m = { hPadding: 8, vPadding: 8, signalId: "create_folder", type: "text_button", text: "new_folder", style: { fontSize: "80%", padding: "12px", width: "100px", textAlign: "center", paddingLeft: "0px", paddingRight: "0px", borderRadius: "4px", color: "#455A64", background: "white" }, tooltip: k("MES_CREATE_FOLDER"), customWidth: 100 }, n = {
                    hPadding: 6, vPadding: 6, type: "image_button", signalId: "showHelp",
                    image: "help.png", width: 40, height: 40, style: { borderRadius: "5px" }, tooltip: k("MES_HELP")
                }, t = { hPadding: 6, vPadding: 6, signalId: "accountButton", type: "image_button", image: "user.png", width: 40, height: 40, style: { borderRadius: "5px" }, tooltip: k("MES_ACCOUNT") }, u = [t, n, x], w = {
                    id: "top_spaces", type: "hdock", height: 52, lefts: [c, {
                        hPadding: 8, vPadding: 8, type: "text_button", signalId: "createProject", text: "new_project", style: { color: "white", background: "coral", fontSize: "80%", padding: "12px", textAlign: "center", borderRadius: "5px" },
                        tooltip: "MES_CREATE_SPACE"
                    }], rights: [t, x], style: { background: "#455A64" }, center: { type: "path", id: "spacesTopPath" }
                }, B = { id: "top_diagram", type: "hdock", height: 52, lefts: [c, d, f, h, r, g, l], rights: u, style: { background: "#455A64" }, center: { type: "path", id: "foldersTopPath" } }, d = { id: "top_folder", type: "hdock", height: 52, lefts: [c, d, m, { type: "dummy", width: 25 }, g, l], rights: [t, x], style: { background: "#455A64" }, center: { type: "path" } }, m = { id: "top_empty", type: "hdock", height: 52, lefts: [c], rights: [t, x], style: { background: "#455A64" }, center: { type: "path" } },
                    y = Utils.copyObject(r); y.id = "export_button_ro"; var u = { id: "top_diagram_ro", type: "hdock", height: 52, lefts: [c, y, g, l], rights: u, style: { background: "#455A64" }, center: { type: "path" } }, t = { id: "top_folder_ro", type: "hdock", height: 52, lefts: [c, { type: "dummy", width: 46 }, g, l], rights: [t, x], style: { background: "#455A64" }, center: { type: "path" } }, E = Utils.copyObject(r); E.id = "export_button_nu"; y = {
                        hPadding: 8, vPadding: 8, signalId: "saveDiagram", type: "text_button", text: "MES_SAVE", style: {
                            fontSize: "80%", padding: "12px", width: "100px", textAlign: "center",
                            paddingLeft: "0px", paddingRight: "0px", borderRadius: "4px", color: "white", background: "coral"
                        }, tooltip: k("MES_SAVE_OWN"), customWidth: 100
                    }; E = { id: "top_diagram_nu", type: "hdock", height: 52, lefts: [c, y, E, g, l], rights: [n, x], style: { background: "#455A64" }, center: { type: "path" } }; g = { id: "top_folder_nu", type: "hdock", height: 52, lefts: [c, { type: "dummy", width: 154 }, g, l], rights: [x], style: { background: "#455A64" }, center: { type: "path" } }; x = {
                        id: "top_spaces_nu", type: "hdock", height: 52, lefts: [c], rights: [x], style: { background: "#455A64" },
                        center: { type: "path" }
                    }; r = Utils.copyObject(r); r.id = "export_button_try"; c = [{ id: "dummy", type: "dummy", height: 52, style: { background: "#ffd0d0" } }, w, d, B, m, t, u, g, E, x, { id: "top_diagram_try", type: "hdock", height: 52, lefts: [c, y, f, h, r], rights: [n], style: { background: "#455A64" }, center: { type: "path" } }]
            } else {
                c = { signalId: "showMainMenu", type: "image_button", image: "menu.png", width: 52, height: 52, tooltip: "MES_MENU" }; var x = {
                    signalId: "create_diagram", hPadding: 0, vPadding: 8, type: "text_button", text: "+", tooltip: "MES_CREATE_DIAGRAM",
                    style: { color: "white", background: "coral", fontSize: "80%", padding: "12px", paddingLeft: "0px", paddingRight: "0px", textAlign: "center", borderRadius: "5px" }, customWidth: 40
                }, m = { hPadding: 8, vPadding: 6, signalId: "share", type: "image_button", image: "share.png", width: 40, height: 40, style: { borderRadius: "5px" }, tooltip: "MES_SHARE" }, f = { signalId: "undo", hPadding: 6, vPadding: 6, type: "image_button", image: "undo.png", width: 40, height: 40, style: { borderRadius: "5px" }, tooltip: "MES_UNDO" }, h = {
                    signalId: "redo", hPadding: 1, vPadding: 6, type: "image_button",
                    image: "redo.png", width: 40, height: 40, style: { borderRadius: "5px" }, tooltip: "MES_REDO"
                }, r = { hPadding: 6, vPadding: 6, signalId: "exportButton", type: "image_button", image: "export.png", width: 40, height: 40, style: { borderRadius: "5px" }, tooltip: "MES_SAVE_AS_IMAGE" }, g = { signalId: "up", hPadding: 6, vPadding: 6, type: "image_button", image: "arrow-up.png", width: 40, height: 40, style: { borderRadius: "5px" }, tooltip: "MES_UP" }, d = {
                    hPadding: 8, vPadding: 6, type: "image_button", signalId: "create_folder", image: "folder-s3.png", width: 40, height: 40,
                    style: { borderRadius: "5px" }, tooltip: k("MES_CREATE_FOLDER")
                }, y = { hPadding: 8, vPadding: 10, type: "label", text: "MES_SPACES", style: { color: "white" } }, n = { hPadding: 6, vPadding: 6, type: "image_button", signalId: "showHelp", image: "help.png", width: 40, height: 40, style: { borderRadius: "5px" }, tooltip: k("MES_HELP") }, l = [g, n], v = { id: "diaLabel", type: "wlabel", text: "Ololo!", style: { background: "#E2EDF5", borderBottom: "solid 1px grey", fontSize: "11pt" } }, E = {
                    id: "folderLabel", type: "wlabel", text: "Ololo!", style: {
                        background: "#E2EDF5", borderBottom: "solid 1px grey",
                        fontSize: "11pt"
                    }
                }, w = { id: "top_spaces", type: "hdock", height: 52, lefts: [c, { hPadding: 8, vPadding: 8, type: "text_button", text: "new_project", signalId: "createProject", style: { color: "white", background: "coral", fontSize: "80%", padding: "12px", textAlign: "center", borderRadius: "5px" }, tooltip: "MES_CREATE_SPACE" }, y], rights: [], style: { background: "#455A64" } }, B = { id: "top_diagram", type: "vpanel", kids: [{ type: "hdock", height: 52, lefts: [c, x, f, h, r], rights: l, style: { background: "#455A64" } }, v] }, x = {
                    id: "top_folder", type: "vpanel", kids: [{
                        type: "hdock",
                        height: 52, lefts: [c, x, d, m], rights: [g], style: { background: "#455A64" }
                    }, E]
                }, d = { id: "top_empty", type: "hdock", height: 52, lefts: [c], rights: [], style: { background: "#455A64" }, center: { type: "path" } }, u = Utils.copyObject(r); u.id = "export_button_ro"; var A = Utils.copyObject(v); A.id = "diaLabelRo"; t = Utils.copyObject(E); t.id = "folderLabelRo"; u = { id: "top_diagram_ro", type: "vpanel", kids: [{ type: "hdock", height: 52, lefts: [c, u], rights: l, style: { background: "#455A64" } }, A] }; t = {
                    id: "top_folder_ro", type: "vpanel", kids: [{
                        type: "hdock", height: 52,
                        lefts: [c, m], rights: [g], style: { background: "#455A64" }
                    }, t]
                }; A = Utils.copyObject(r); A.id = "export_button_nu"; v = Utils.copyObject(v); v.id = "diaLabelNu"; E = Utils.copyObject(E); E.id = "folderLabelNu"; var D = Utils.copyObject(y); D.id = "spacesLabelNu"; y = Utils.copyObject({ fontSize: "80%", padding: "12px", textAlign: "center", paddingLeft: "5px", paddingRight: "5px", color: "#455A64", background: "white", borderRadius: "5px" }); y.color = "white"; y.background = "coral"; y = {
                    hPadding: 8, vPadding: 8, type: "text_button", text: "MES_SAVE", signalId: "saveDiagram",
                    style: y, tooltip: k("MES_SAVE_OWN")
                }; l = { id: "top_diagram_nu", type: "vpanel", kids: [{ type: "hdock", height: 52, lefts: [c, y, A, m], rights: l, style: { background: "#455A64" } }, v] }; m = { id: "top_folder_nu", type: "vpanel", kids: [{ type: "hdock", height: 52, lefts: [c, m], rights: [g], style: { background: "#455A64" } }, E] }; g = { id: "top_spaces_nu", type: "hdock", height: 52, lefts: [c, D], rights: [], style: { background: "#455A64" } }; r = Utils.copyObject(r); r.id = "export_button_try"; c = [{ id: "dummy", type: "dummy", height: 52, style: { background: "#ffd0d0" } }, w, x, B,
                    d, t, u, m, l, g, { id: "top_diagram_try", type: "hdock", height: 52, lefts: [c, y, f, h, r], rights: [n], style: { background: "#455A64" }, center: { type: "path" } }]
            } f = []; f.push({ id: "folderSearch", vPadding: 6, hPadding: 6, type: "search", height: 30, width: 150 }); c = {
                type: "vdock", id: "root", top: { id: "top", type: "many", height: 52, kids: c }, center: {
                    id: "splitter", type: "splitter", left: 200, right: 200, leftChild: { type: "pane", id: "left_pane", text: "MES_SPACES", kid: { type: "tree", id: "tree" } }, middleChild: {
                        id: "middle", type: "many", kids: [{
                            type: "vdock", top: {
                                type: "hdock",
                                height: 42, lefts: [{ id: "check_all", hPadding: 4, vPadding: 5, type: "check", width: 30, height: 30 }, { id: "actions", vPadding: 6, hPadding: 8, type: "text_button", text: "MES_ACTIONS", style: { color: "white", background: "#455A64", padding: "6px", borderRadius: "4px" } }], rights: f, style: { background: "#E2EDF5" }
                            }, center: { id: "folder_grid", type: "list_grid", columns: [{ type: "image", width: "36px", clickable: !0 }, { type: "text", width: "100%" }] }, id: "middle_folder"
                        }, { type: "dummy", id: "middle_diagram" }, {
                            id: "middle_spaces", type: "list_grid", columns: [{
                                type: "image",
                                width: "36px", clickable: !1
                            }, { type: "text", width: "100%" }, { type: "image", width: "36px", clickable: !0 }]
                        }, {
                            type: "vdock", top: { type: "hdock", height: 38, lefts: [{ vPadding: 4, hPadding: 4, signalId: "goToProjects", type: "text_button", text: "MES_TO_SPACES", style: { color: "white", background: "#455A64", borderRadius: "4px", padding: "6px" } }], rights: [{ vPadding: 4, hPadding: 4, signalId: "clearTrash", type: "text_button", text: "MES_CLEAR_TRASH", style: { color: "white", background: "#c00000", borderRadius: "4px", padding: "6px" } }], style: { background: "#E2EDF5" } },
                            center: { id: "trash_grid", type: "list_grid", columns: [{ type: "image", width: "36px", clickable: !1 }, { type: "text", width: "100%" }, { type: "button" }] }, id: "middle_trash"
                        }, { id: "middle_recent", type: "list_grid", columns: [{ type: "image", width: "36px", clickable: !1 }, { type: "text", width: "100%" }] }, { type: "custom", builder: xb, id: "middle_dashboard" }]
                    }, rightChild: { type: "pane", id: "right_pane", text: "MES_RECENT", kid: { type: "list", id: "recent" } }
                }
            }; f = p("wide"); e.root = e.widgets.createWidget(f, c); e.wide && !e.tryMe && (f = p("wide"), c = q.createElement("div"),
                HtmlUtils.insertAfter(c, f), c.id = "feedback", HtmlUtils.setDivText(c, k("MES_SEND_FEEDBACK")), f = c.style, c.className = "common_button", HtmlUtils.noContext(c), f.cursor = "pointer", f.display = "inline-block", f.color = "black", f.background = "coral", f.padding = "3px", f.borderRadius = "4px", c.style.position = "absolute", c.style.right = "50px", c.style.bottom = "2px", c.style.zIndex = 20, c.onclick = db); Jb(); C("top").setActive("top_diagram"); C("middle").setActive("middle_folder")
        }; this.panic = G; this.goToUrl = J; this.setTimeout = la; this.sendGet =
            function (a, b) { CallTrace.add("sendGet", [a]); var c = Utils.randomString(10); b.requestId = c; var d = n(function (a) { if (b.requestId == c) b.onData(a) }, "sendGet:success"), e = n(function (a) { if (b.onError) b.onError(a) }, "sendGet:error"); HtmlUtils.sendGet(a, d, e) }; this.sendPost = eb; this.sendDelete = function (a, b) { CallTrace.add("sendDelete", [a]); var c = n(function (a) { b.onData(a) }, "sendDelete:success"), d = n(function (a) { if (b.onError) b.onError(a) }, "sendDelete:error"); HtmlUtils.sendRequest("DELETE", a, {}, c, d) }; this.sendPut = function (a,
                b, c) { CallTrace.add("sendPut", [a]); var d = Utils.randomString(10); c.requestId = d; var e = n(function (a) { if (c.requestId == d) c.onData(a) }, "sendPut:success"), f = n(function (a) { if (c.onError) c.onError(a) }, "sendPut:error"); HtmlUtils.sendRequest("PUT", a, b, e, f) }; this.showWorking = K; this.hideWorking = I; this.setTitle = function (a) { q.title = a }; this.showInputBox = da; this.hideInputBox = Ja; this.setInputBoxError = Ka; this.getEditor = u; this.loadFontCore = Qa; this.showNotification = ea; this.placeFeedback = function (a) {
                    p("feedback").style.right =
                    a + "px"
                }; this.pushState = function (a, b, c) { Nav.pushState(a, b, h.location.origin + c) }; this.createCentral = T; this.addCentral = function (a, b) { v(a, b) }; this.hideCentral = H; this.resizeCentral = w; this.showChooseTypeDialog = function (a) {
                    T({
                        type: "page", style: { background: "white" }, padding: 5, kids: [{ type: "wlabel", text: "Choose diagram type", textAlign: "center", style: { fontWeight: "bold", fontSize: "120%" } }, {
                            signalId: "createDrakon", type: "custom", builder: ia, text: "DRAKON diagram", desc: "DRAKON diagram desc", image: "logo-drakon.png",
                            width: 90, height: 100
                        }, { signalId: "createMind", type: "custom", builder: ia, text: "GRAF mindmap", desc: "GRAF mindmap desc", image: "logo-graf.png", width: 117, height: 77 }, { signalId: "createFree", type: "custom", builder: ia, text: "Free-form diagram", desc: "Free-form diagram desc", image: "logo-free.png", width: 117, height: 70 }, { signalId: "cancelMachine", type: "wbutton", text: "MES_CANCEL", style: { color: "white", background: "#455A64", padding: "12px", textAlign: "center" } }]
                    }, a)
                }; this.showPopupList = function (a, b) {
                    var c = p(a); (new ToolTip(h,
                        q)).hideTooptip(); var d = Ga(b); HtmlUtils.showUnder(c, d)
                }; this.showPopupListAt = function (a, b, c) { (new ToolTip(h, q)).hideTooptip(); c = Ga(c); HtmlUtils.setPosCorrected(a, b, c) }; this.Clipboard = na; this.showContextMenu = Fa; this.showAccessScreen = function (a, b) {
                    var c = { type: "custom", id: "access_is_public", builder: Ba, text: "All can read", value: a.isPublic, onchange: nc }, d = ha("Read", "addReader"), e = ha("Write", "addWriter"), h = ha("Admin", "addAdmin"), l = fa("removeReader", a.roles.read), r = fa("removeWriter", a.roles.write), m = fa("removeAdmin",
                        a.roles.admin); v({
                            type: "vdock", top: {
                                type: "page", padding: 10, kids: [{ type: "hdock", height: 40, lefts: [{ signalId: "cancelMachine", type: "text_button", text: "MES_CANCEL", style: { color: "white", background: "#455A64", padding: "12px", textAlign: "center", borderRadius: "5px" } }], rights: [{ signalId: "saveAccess", type: "text_button", text: "MES_SAVE", style: { color: "white", background: "coral", padding: "12px", textAlign: "center", borderRadius: "5px" } }] }, {
                                    type: "custom", builder: function (b) {
                                        var c = f(b, "div"); HtmlUtils.setDivText(c, k("MES_ACCESS_TO"));
                                        c.style.textAlign = "center"; b = f(b, "div"); HtmlUtils.setDivText(b, a.spaceId); b.style.textAlign = "center"; b.style.fontWeight = "bold"
                                    }
                                }, { type: "custom", id: "access_error", builder: function (a) { a.style.color = "#900000" } }, c]
                            }, center: { type: "page", padding: 10, kids: [d, l, e, r, h, m] }
                        }, b)
                }; this.suggest = function (a, b, c) {
                    a = {
                        type: "page", style: { background: "white" }, padding: 10, kids: [{ type: "wlabel", text: a, style: { fontSize: "100%", textAlign: "left" } }, {
                            signalId: "removeLimit", type: "wbutton", text: "MES_GET_BETTER_PRODUCT", style: {
                                color: "white",
                                background: "Coral", fontSize: "120%", padding: "12px", textAlign: "center", fontWeight: "bold"
                            }
                        }, { signalId: "hideCentral", type: "wbutton", text: "MES_CANCEL", style: { color: "white", background: "#455A64", padding: "12px", textAlign: "center" } }]
                    }; e.plan = b; e.ref = c; T(a, null)
                }; this.showShareScreen = function (a, b, c, d, e, f) {
                    var h = "https://" + location.hostname + "/ide/doc/" + a + "/" + b; a = { type: "wlabel", text: "MES_UNREGISTERED_CANT", style: { fontSize: "100%", textAlign: "left" } }; b = {
                        signalId: "accessForShare", type: "wbutton", text: "MES_ACCESS",
                        style: { color: "white", background: "#455A64", padding: "12px", textAlign: "center" }
                    }; c = [{ type: "wlabel", text: "folder" == c ? "MES_FOLDER_LINK" : "MES_DIAGRAM_LINK", textAlign: "center", style: { fontSize: "110%", fontWeight: "bold" } }, { type: "custom", builder: function (a) { a = Ta(a); a.value = h; a.focus(); a.select() } }]; d || c.push(a); e && c.push(b); c.push({ signalId: "cancelMachine", type: "wbutton", text: "MES_CANCEL", style: { color: "white", background: "#455A64", padding: "12px", textAlign: "center" } }); v({
                        type: "page", style: { background: "white" },
                        padding: 10, kids: c
                    }, f)
                }; this.saveAsPng = function (a) { var b = f(q.body, "canvas"); a = u().exportPng(b, a); if (e.wide) { var c = Na() + ".png"; K(); HtmlUtils.sendRawPost("/api/download/" + c, a, function (a) { I(); h.location.href = "/api/download/" + a.download_id }, G) } else { var c = dc(), d = h.open("about:blank", ""); if (!d) return; d.document.write("<img src='" + a + "' alt='" + c + "'/>") } q.body.removeChild(b) }; this.saveAsSvg = function () {
                    var a = Na() + ".svg", b = u().exportSvg(), c = u().getFontsFromEditor(), a = { filename: a, image: b, fonts: c }; K(); HtmlUtils.sendPost("/api/download_svg",
                        a, function (a) { I(); h.location.href = "/api/download/" + a.download_id }, G)
                }; this.logout = function () { e.logon.logout() }; this.hideHelp = N; this.showHelp = fb; this.showMainMenu = function (a) {
                    var b = HtmlUtils.createPopup(null); b.style.opacity = 0; b.style.transform = "translate(0px, -50px)"; b.style.background = "white"; b.style.color = "black"; b.className = "popup appearing"; mb(b); var c = f(b, "div"); c.style.paddingLeft = "5px"; c.style.paddingRight = "5px"; c.style.paddingTop = "5px"; var d = f(c, "img"); d.draggable = !1; d.width = 66; d.height = 66;
                    d.src = "/static/drakosha132.png"; d.style.verticalAlign = "middle"; d.style.cursor = "pointer"; d.onclick = A; e.wide && (d = f(c, "img"), d.draggable = !1, d.width = 100, d.height = 40, d.src = "/static/logo-text-s-hub.png", d.style.verticalAlign = "middle"); c = f(c, "img"); c.draggable = !1; c.width = 30; c.height = 30; c.src = "images/cross.png"; c.className = "common_button"; c.style["float"] = "right"; c.onclick = A; c.style.cursor = "pointer"; c.style.background = "#455A64"; c.style.verticalAlign = "middle"; if (e.wide) {
                        c = f(b, "table"); c.style.marginRight =
                            "2px"; for (var d = f(c, "tr"), g = 0, h = a.length; g < h;) { var c = a[g], k = f(d, "td"); k.style.verticalAlign = "top"; k.style.paddingLeft = "5px"; k.style.paddingBottom = "4px"; k.style.maxWidth = "300px"; va(k, c); g++ }
                    } else for (b.style.overflowY = "auto", d = 0, g = a.length; d < g;)c = a[d], h = f(b, "div"), h.style.paddingLeft = "5px", h.style.paddingRight = "5px", h.style.paddingBottom = "4px", va(h, c), d++; HtmlUtils.setPosCorrected(0, 0, b); b.style.opacity = 1; b.style.transform = "translate(0px, 0px)"
                }; this.schedule = function (a, b) {
                    return la(function () { a.timeout() },
                        b, "schedule")
                }; this.killCentral = ba; this.showAddUserScreen = function (a) {
                    v({
                        type: "vdock", top: { type: "page", padding: 10, kids: [{ type: "hdock", height: 40, lefts: [{ signalId: "cancelMachine", type: "text_button", text: "MES_CANCEL", style: { color: "white", background: "#455A64", padding: "12px", textAlign: "center", borderRadius: "5px" } }], rights: [] }, { type: "label", text: "MES_ADD_USER", style: { textAlign: "center" } }, { id: "searchUsers", type: "search", height: 30, width: 300 }] }, center: {
                            type: "page", padding: 10, kids: [{
                                id: "foundUser", type: "list_grid",
                                noScroll: !0, columns: [{ type: "image", width: "36px", clickable: !1 }, { type: "text", width: "100%" }]
                            }]
                        }
                    }, a); C("searchUsers").focus()
                }; this.setAccessError = function (a) { var b = p("access_error"); HtmlUtils.setDivText(b, a); w() }; this.setFoundUsers = function (a) { for (var b = [], c = 0, d = a.length; c < d;)ua(b, "user-s.png", a[c]), c++; C("foundUser").setItems(b); w() }; this.clearTimeout = Ea; this.showLogonSignup = function (a) {
                    v({
                        type: "page", style: { background: "white" }, padding: 10, kids: [{
                            type: "wlabel", text: "MES_SAVE_OWN", textAlign: "center",
                            style: { fontSize: "110%", fontWeight: "bold" }
                        }, { signalId: "signup", type: "wbutton", text: "MES_SIGNUP", style: { color: "white", background: "#455A64", padding: "12px", textAlign: "center" } }, { signalId: "login", type: "wbutton", text: "MES_LOGIN", style: { color: "white", background: "#455A64", padding: "12px", textAlign: "center" } }, { type: "custom", builder: function (a) { a.style.textAlign = "center"; a.style.padding = "10px"; a = f(a, "a"); HtmlUtils.setDivText(a, k("MES_CANCEL")); a.onclick = P; a.href = "javascript:;" } }]
                    }, a)
                }; this.showLogon = function (a) {
                    var b =
                        { type: "edit", editType: "text", water: k("MES_USERNAME"), id: "username" }, c = { type: "edit", editType: "password", water: k("MES_PASSWORD"), id: "password" }; v({
                            type: "page", padding: 10, style: { background: "white" }, kids: [{ type: "wlabel", text: "MES_LOGIN", style: { fontSize: "150%", fontWeight: "bold", textAlign: "center", color: "#990000" } }, b, c, { type: "custom", builder: ec }, { type: "wlabel", id: "status", text: " " }, { signalId: "startLogon", type: "wbutton", text: "MES_LOGIN", style: { background: "Coral", color: "white" } }, {
                                signalId: "cancelMachine",
                                type: "wbutton", text: "MES_CANCEL", style: { color: "white", background: "#455A64", padding: "12px", textAlign: "center" }
                            }]
                        }, a); p("username_edit").onkeydown = qc; p("password_edit").onkeydown = oc
                }; this.startLogon = ja; this.showSignup = function (a) {
                    var b = { type: "wlabel", text: "MES_SIGNUP", style: { fontSize: "150%", fontWeight: "bold", textAlign: "center", color: "#990000" } }, c = { transform: "translateY(5px)" }, d = { type: "wlabel", text: "MES_CREATE_USERNAME", style: c }, e = { type: "wlabel", text: "MES_EMAIL", style: c }, f = {
                        type: "wlabel", text: "MES_CHARACTERS3",
                        style: { color: "grey", fontSize: "90%", marginTop: "-6px" }
                    }, h = { type: "edit", editType: "text", id: "signup_user" }, l = { type: "edit", editType: "text", id: "signup_email" }, m = { type: "edit", editType: "password", water: k("MES_PASSWORD"), id: "signup_password" }, n = { type: "edit", editType: "password", water: k("MES_REPEAT_PASSWORD"), id: "signup_password2" }, q = { type: "wlabel", id: "signup_status", text: " " }, c = { type: "custom", builder: $b }, b = Config.EMAIL_SIGNUP ? [b, d, h, f, e, l, q] : [b, d, h, f, e, l, m, n, q]; onPremises || b.push(c); b.push({
                        signalId: "startSignup",
                        id: "signupOk", type: "wbutton", text: "MES_CREATE_FREE", className: "disabled_button"
                    }); b.push({ signalId: "cancelMachine", type: "wbutton", text: "MES_CANCEL", style: { color: "white", background: "#455A64", padding: "12px", textAlign: "center" } }); v({ type: "page", padding: 10, style: { background: "white" }, kids: b }, a); p("signupOk").className = "default_button"
                }; this.scheduleNextStateAfter = U; this.getExample = function () { return "static/" + (Utils.parseSearch(h.location.search).example || "example01") + ".json" }; this.preventQuestion = function () {
                    h.onbeforeunload =
                    null
                }; HtmlUtils.setErrorReporter(G); this.setMobileHeader = function (a) { if (!e.wide) for (var b = 0, c = "folderLabel diaLabel folderLabelRo diaLabelRo folderLabelNu diaLabelNu".split(" "), d = c.length; b < d;)HtmlUtils.setText(c[b], a), b++ }; this.cancelSearch = Ca; this.createSearchList = function (a, b) { e.search = {}; var c = aa(); e.search.defs = Utils.copyObjectDeep(a); e.search.widgetId = c.id; e.search.expanded = null; Pb(); ya(b) }; this.addToSearchList = ya; this.trialAllowed = ab; this.showDemo = function (a) {
                    Ha(); var b = p("demo"); b.style.display =
                        "inline-block"; b.style.position = "fixed"; var c = f(b, "div"); c.style.background = "black"; c.style.opacity = .3; c.onclick = n(ga, "hideDemo"); c.style.display = "inline-block"; c.style.position = "fixed"; c.style.left = "0px"; c.style.right = "0px"; c.style.top = "0px"; c.style.bottom = "0px"; var b = f(b, "div"), c = Math.floor(405).toString(), d = Math.floor(280).toString(); b.style.display = "inline-block"; b.style.position = "fixed"; b.style.background = "white"; b.style.left = "calc(50% - " + c + "px)"; b.style.top = "calc(50vh - " + d + "px)"; b.style.width =
                            "810px"; b.style.height = "560px"; c = { type: "hdock", lefts: [], rights: [{ type: "text_button", text: "MES_CLOSE", signalId: "hideDemo", style: { background: "Coral", color: "white", padding: "6px", textAlign: "center", borderRadius: "5px" }, hPadding: 10, vPadding: 10 }, { id: "demoShowOnStart", type: "custom", text: "MES_SHOW_ON_START", value: !Pa(), builder: Ba, hPadding: 10, vPadding: 15 }], height: 50, padding: 10 }; a = "drakon" == a ? [["MES_INSERT_ICONS", "demo_drakon_insert.gif"], ["MES_RELOCATE", "demo_drakon_join.gif"], ["MES_APPLY_THEME", "demo_drakon_theme.gif"],
                            ["MES_FORMAT_ICON", "demo_drakon_format.gif"]] : [["MES_BUILD_LADDER", "demo_graf_vertical.gif"], ["MES_BUILD_MIXED", "demo_graf_horizontal.gif"], ["MES_APPLY_THEME", "demo_drakon_theme.gif"], ["MES_FORMAT_ICON", "demo_drakon_format.gif"]]; d = []; e.demo.buttons = {}; for (var g = 1, h = 0, k = a.length; h < k;) { var l = a[h], m = "demoButton_" + g, q = l[1]; d.push({ id: m, type: "wbutton", text: l[0], style: { background: "#455A64", color: "white", fontSize: "80%" } }); e.demo.buttons[m] = { image: q }; e.myHandlers[m] = jc; g++; h++ } b = e.widgets.createWidget(b,
                                { type: "vpanel", kids: [{ type: "hdock", height: 510, lefts: [{ type: "custom", id: "demoViewport", builder: Db, width: 600, height: 500, hPadding: 5, vPadding: 5 }, { type: "page", kids: d, padding: 5, width: 200, style: { background: "#d0d0ff" }, hPadding: 5 }], rights: [] }, c] }); e.demo.widgetId = b; e.widgets.resizeWidget(b, 0, 0, 810, 560); Wa("demoButton_1")
                }; this.isDemoDiscarded = Pa; this.showSaveProjectScreen = function (a, b) {
                    v({
                        type: "page", padding: 10, kids: [{
                            type: "custom", builder: function (b) {
                                var d = f(b, "div"); HtmlUtils.setDivText(d, k("MES_SAVE_TO_FILE"));
                                d.style.textAlign = "center"; b = f(b, "div"); HtmlUtils.setDivText(b, k("MES_SPACE") + ": " + a); b.style.textAlign = "center"; b.style.fontWeight = "bold"
                            }
                        }, {
                            type: "hdock", height: 40, lefts: [{ signalId: "cancelMachine", type: "text_button", text: "MES_CANCEL", style: { color: "white", background: "linear-gradient(#758A94, #455A64)", padding: "12px", textAlign: "center", borderRadius: "5px" } }], rights: [{
                                signalId: "saveProject", type: "text_button", text: "MES_SAVE", style: {
                                    color: "white", background: "linear-gradient(coral, #CD5B45)", padding: "12px",
                                    textAlign: "center", borderRadius: "5px"
                                }
                            }]
                        }]
                    }, b)
                }; this.showLoadFromFile = function (a, b) {
                    v({
                        type: "page", style: { background: "white" }, padding: 10, kids: [{
                            type: "custom", builder: function (b) {
                                var d = f(b, "div"); HtmlUtils.setDivText(d, k("MES_LOAD_FROM_FILE_EX")); d.style.textAlign = "center"; d = f(b, "div"); HtmlUtils.setDivText(d, k("MES_SPACE") + ": " + a); d.style.textAlign = "center"; d.style.fontWeight = "bold"; d = f(b, "input"); d.id = "file-input"; d.type = "file"; d.name = "Project file"; d.addEventListener("change", mc); d.style.marginTop =
                                    "15px"; d.style.marginBottom = "15px"; b = f(b, "div"); b.id = "file-error"; b.style.color = "darkred"; b.style.height = "15px"
                            }
                        }, { signalId: "loadFile", type: "wbutton", text: "MES_LOAD_AND_REPLACE", style: { color: "white", background: "linear-gradient(#758A94, #455A64)", padding: "12px", textAlign: "center" } }, { signalId: "hideCentral", type: "wbutton", text: "MES_CANCEL", style: { color: "white", background: "#455A64", padding: "12px", textAlign: "center" } }]
                    }, b)
                }; this.upload = function (a, b, c, d) {
                    var e = new XMLHttpRequest, f = new FormData; e.onreadystatechange =
                        function () { if (4 === e.readyState) d.onData({ responseText: e.responseText, status: e.status }) }; f.append(b, c); e.open("POST", a); e.send(f)
                }; this.downloadFile = function (a, b) { console.log("downloadFile", a, b); var c = q.createElement("a"); c.href = a; c.download = b; c.click() }
};
