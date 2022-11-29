function Ide3Logic(z, e, t) {
    function Ub(a, b) { e.hideWorking(); var c = b.description || "", d = t("MES_EDIT_DESCRIPTION"); "1" == a.folderId && (d += ": " + a.spaceId); e.showInputBox(!0, d, c, function (b) { a.onData(b) }, null, !1); a.state = "UserInput" } function Vb(a, b) { a.diagramType = b; e.hideCentral(); e.showInputBox(!0, t("MES_CREATE_DIAGRAM"), "", function (b) { a.onData(b) }, ma, !0); a.state = "EnterName" } function Wb(a, b) { A(a.spaceId + " " + b.folder_id, function () { a.onData(null) }); a.state = "Done" } function Xb(a, b) {
        h("tree").expand(a.parentId);
        A(a.parentId, function () { a.onData(null) }); a.state = "Done"
    } function Yb(a, b) { a.parentId = b; var c = u(a.parentId); a.spaceId = c.spaceId; a.parentFolder = c.folderId; e.showInputBox(!0, t("MES_CREATE_FOLDER"), "", function (b) { a.onData(b) }, ma, !0); a.state = "EnterName" } function Zb(a, b) { e.showInputBox(!0, t("MES_CREATE_SPACE"), "", function (b) { a.onData(b) }, $b, !0); a.state = "EnterName" } function ac(a, b) {
        a.id = b; var c = u(a.id); a.spaceId = c.spaceId; a.folderId = c.folderId; if (c = f.folders[a.id] || null) {
            a.type = c.type; var d = t("MES_RENAME_FOLDER");
            "folder" != c.type && (d = t("MES_RENAME_DIAGRAM")); e.showInputBox(!0, d, c.name, function (b) { a.onData(b) }, ma, !0); a.state = "EnteringName"
        } else a.state = null
    } function bc(a, b) { A(a.id, function () { a.onData(null) }); a.state = "Going" } function N(a, b) { a.state = "BeforePolling" } function J(a, b, c, d, e, f) { d = Utils.subtract(e[b], d[b]); d = d.map(function (a) { return a.toLowerCase() }); 0 != d.length && a.blocks.push({ workspace: f, operation: b, action: c, users: d }) } function O(a, b, c) {
        for (var d, e = 0, p = f.pathWidgets, v = p.length; e < v;)d = h(p[e]), d.addStage(a,
            b, c), e++
    } function Xa(a, b) { 30 < a.queue.length && !f.isTryMe && !f.isDev ? y("ERR_COMMUNICATION") : a.queue.push(b) } function Y(a) { var b, c; a && (c = f.user.spaces, b = u(a).spaceId, b in c || (a = { id: "1", space_id: b, is_public: !0, access: "read", path: [], items: [], children: [] }, c[b] = a, Ya(a))) } function Ya(a) { var b; b = a.space_id + " 1"; a.name = a.space_id; a.id = "1"; a.type = "folder"; na(b, a, null) } function na(a, b, c) {
        var d; d = f.folders[a]; d || (d = {}, f.folders[a] = d); Utils.mergeSets(d, b); d.access || (d.access = c || "read"); d.parent && (d.parent = d.space_id +
            " " + d.parent); if (d.children) { b = 0; c = d.children; for (var e = c.length; b < e;) { var p = c[b]; p.parent = d.id; na(p.space_id + " " + p.id, p, d.access); b++ } } d.folderId = d.id; d.spaceId = d.space_id; d.id = a
    } function cc(a, b, c) { var d, e; e = f.user.recent; d = dc(e, function (b) { return b.id == a }); -1 != d && e.splice(d, 1); e.unshift({ id: a, text: b, type: c }); Za() } function r(a, b, c) { var d; d = f.handlers; a in d || (d[a] = {}); d[a][b] = c } function oa(a, b, c) { var d; d = f.machineHandlers; a in d || (d[a] = {}); d[a][b] = c } function Z() { return C() || !$a() ? !1 : !0 } function pa() {
        return C() ||
            f.isDev || f.isTryMe ? !1 : !0
    } function aa() { var a; if (a = f.pollTimer) window.clearTimeout(a), f.pollTimer = null } function qa(a) { a.target.cancel && a.target.cancel() } function P(a) { var b; b = B(function () { }, function () { }); q(new ec, a, b) } function Q() { for (var a, b = 0, c = f.pathWidgets, d = c.length; b < d;)a = h(c[b]), a.clear(), b++ } function fc() { CallTrace.add("clearRubbish", []); F(new ab, null, null) } function $a() { var a; a = f.clipboard.getClipboardType(); return "copy-folders" == a || "cut-folders" == a ? !0 : !1 } function ra(a) {
        null != f.openLeftIndex &&
        x().showLeftButton(f.openLeftIndex); h("splitter").leftVisible = !1; R(); a || S()
    } function sa(a) { null != f.openRightIndex && x().showRightButton(f.openRightIndex); h("splitter").rightVisible = !1; R(); a || S() } function l(a, b) { a.target.onData(b) } function bb(a) { a = a || []; return a.map(G) } function gc() { var a; a = K(); ta(a) } function ta(a) { 0 != a.length && (f.clipboard.copyToClipboard("copy-folders", a), L()) } function hc(a, b) {
        var c; c = { spaceId: a, isPublic: b["public"], roles: {} }; c.roles.read = Utils.listToSet(b.readers); c.roles.write =
            Utils.listToSet(b.writers); c.roles.admin = Utils.listToSet(b.admins); c.add = function (a, b) { c.roles[a][b] = !0 }; c.remove = function (a, b) { delete c.roles[a][b] }; return c
    } function T() { ua(null) } function ua(a) { var b; if (a = va(a)) b = B(function () { }, y), q(new ic, a, b) } function U() { wa(null) } function wa(a) { var b, c; if (a = va(a)) c = B(function () { }, y), b = new jc, b.browser = e, q(b, a, c) } function ba(a) { var b; b = new xa; b.home = a; return b } function ya() { q(new kc, null, null) } function lc() { var a; a = K(); za(null, a) } function za(a, b) {
        var c; CallTrace.add("cut folders",
            [b]); 0 != b.length && (c = { parentId: a, folders: b, cut: !0 }, F(new cb, c, null))
    } function mc() { var a; a = K(); Aa(null, a) } function Aa(a, b) { var c; CallTrace.add("delete folders", [b]); 0 != b.length && (c = { parentId: a, folders: b, cut: !1 }, F(new cb, c, null)) } function nc(a) { var b; b = B(function () { }, y); q(new oc, a, b) } function pc() { var a; a = K(); 1 == a.length && P(a[0]) } function qc() { x().loadSave(!0) } function db(a) {
        for (var b, c; ;) {
            c = h("tree"); if (a.current >= a.path.length) return !0; b = a.path[a.current]; if (!c.hasItem(b)) return b = a.path[a.current -
                1], b = { id: b, src: "expandMany" }, q(new M, b, a), !1; a.current++
        }
    } function dc(a, b) { var c, d; for (c = 0; ;) { if (!(c < a.length)) return -1; d = a[c]; if (b(d)) return c; c++ } } function rc(a, b) { var c = Ba(); e.sendPost("/api/find_folder", { name: b, space_id: c.spaceId }, a) } function Ca(a) { var b; if (b = f.searchMachine) b.state = null; f.searchMachine = null; b = [{ id: "allItems", name: t("MES_SHOW_ALL_DIAGRAM_CONTENT"), items: [] }]; e.createSearchList(b, {}); b = new sc; b.input = a; f.searchMachine = b; b.onData(null) } function tc(a, b) {
        return a.type == b.type ? a.name.localeCompare(b.name) :
            "folder" == a.type ? -1 : "folder" == b.type ? 1 : a.name.localeCompare(b.name)
    } function g(a, b) { a.target.onError(b) } function eb(a) { var b; b = []; 0 < a.length ? (k(b, "MES_COPY", gc), C() || (k(b, "MES_CUT", lc), Z() && k(b, "MES_PASTE", ca), w(b), k(b, "MES_DELETE", mc), 1 == a.length && (w(b), k(b, "MES_RENAME", uc)))) : Z() && k(b, "MES_PASTE", ca); 1 == a.length && k(b, "MES_DESCRIPTION", pc); C() || (w(b), k(b, "MES_CREATE_FOLDER", U), k(b, "MES_CREATE_DIAGRAM", T)); return b } function Ba() {
        var a, b; a = f.current; b = { spaceId: null, folderId: null }; a.id && (b = u(a.id));
        return { type: a.type, screen: a.screen, spaceId: b.spaceId, folderId: b.folderId }
    } function va(a) { if (a) return a; a = f.current; return a.id ? "folder" == a.type ? a.id : a.parent : null } function fb() { return "middle_diagram" == f.current.screen ? e.getEditor().getDiagram() : null } function x() { return e.getEditor() } function gb(a, b, c) { return (a = a[b.signalId]) ? (c = a[c]) ? c : null : null } function da(a) {
        if ("space" === a) a = "workspace-s2.png"; else if ("folder" === a) a = "folder-s2.png"; else if ("drakon" === a) a = "list-drakon2.png"; else if ("mind" === a) a =
            "list-mind.png"; else { if ("free" !== a) throw "Unexpected switch value: " + a; a = "list-free.png" } return a
    } function vc(a) { var b; b = K(); return 0 == b.length ? [a] : b } function hb() { var a; return f.wide ? (a = HtmlUtils.getCookie("splitter-left"), a = ib(a)) : 200 } function jb(a) { var b; b = "1" == a.id ? !0 : !1; return b ? a.space_id : a.name } function kb() { var a; return f.wide ? (a = HtmlUtils.getCookie("splitter-right"), a = ib(a)) : 200 } function K() { return h("folder_grid").getChecked().checked } function lb() {
        var a; a = Object.keys(f.user.spaces); a.sort();
        return a
    } function h(a) { return e.widgets.getWidget(a) } function wc() { e.goToUrl("/") } function mb() { e.goToUrl("/account") } function Da(a) { V(); h("tree").deselect(); nb(); e.hideWorking(); a && a() } function A(a, b) { var c; V(); c = { id: a }; F(new ob, c, b) } function xc(a, b) { var c; c = x(); H() && f.current.id == a ? c.centerItem(b) : A(a, function () { c.centerItem(b) }) } function ea(a) { V(); h("tree").deselect(); pb(); e.hideWorking(); a && a() } function qb() { ea(null) } function rb(a) { V(); h("tree").deselect(); sb(); e.hideWorking(); a && a() } function Ea(a) {
        V();
        F(new tb, null, a)
    } function fa() { e.hideCentral() } function ub(a) { a = u(a); return { space_id: a.spaceId, id: a.folderId } } function yc(a) { var b, c, d; if (f.current) if (b = f.current.id) { d = h("tree"); for (var e = 0, p = a.length; ;) { if (!(e < p)) return !1; c = a[e]; if (d.hasItem(c) && (c = d.getItem(c), vb(b, c))) return !0; e++ } } else return !1; else return !1 } function H() { return "middle_diagram" == f.current.screen ? !0 : !1 } function C() { return !!f.current.isReadonly } function ga(a) { return a.access ? "read" == a.access : !0 } function vb(a, b) {
        if (a == b.id) return !0;
        for (var c = 0, d = b.kids, e = d.length; ;) { if (!(c < e)) return !1; if (vb(a, d[c])) return !0; c++ }
    } function wb(a) { var b = a.fonts[a.fontId]; a.fontId++; e.loadFontCore(b, a) } function ha() { var a = "/logon?tgt=" + e.getUrl(); e.goToUrl(a) } function Fa(a) { a = Utils.makeErrorMessage(a); return t(a) } function G(a) { return a.space_id + " " + a.id } function Ga(a) { a = da(a); return Ha(a) } function Ha(a) { return { src: a, width: 30, height: 30, paddingLeft: "4px", paddingRight: "4px" } } function w(a) { a.push({ type: "separator" }) } function xb(a) {
        a = a.trim(); return a.replace(/ /g,
            "_")
    } function B(a, b) { return { onData: a, onError: b } } function k(a, b, c, d, e) { b = { text: t(b), code: c, id: d, image: e }; a.push(b) } function zc(a) { h("recent").remove(a); h("middle_recent").remove(a); h("tree").remove(a); h("folder_grid").remove(a); delete f.folders[a] } function Ac(a) { var b = f.saver; if (b) if ("ERR_MODIFIED" == a.error) e.showNotification(t("ERR_MODIFIED")), b.notSaved(); else b.onError(a) } function Bc() { var a = f.saver; a && a.saved() } function Cc(a, b, c) {
        var d, e, p, v; HtmlUtils.stopPropagation(a); p = f.current.id; e = []; b.mark(c);
        v = vc(c); d = f.folders[c]; yb(d.type) && (k(e, "MES_FIND_REFERENCES", function () { Ca(d.name) }), w(e)); k(e, "MES_COPY", function () { ta(v) }); C() || (k(e, "MES_CUT", function () { za(p, v) }), Z() && k(e, "MES_PASTE", ca), w(e), k(e, "MES_DELETE", function () { Aa(p, v) }, null, "delete.png"), w(e), k(e, "MES_RENAME", function () { q(new Ia, c, null) }), k(e, "MES_DESCRIPTION", function () { P(c) }), w(e), k(e, "MES_CREATE_FOLDER", U, null, "folder-s2.png"), k(e, "MES_CREATE_DIAGRAM", T, null, "to-primitive-s2.png")); W(a, e); return !1
    } function Dc(a) {
        e.hideWorking();
        "ERR_DIAGRAM_LIMIT" == a.error ? e.suggest(a.error, "team") : y(a)
    } function Ja(a, b, c, d, e) { A(d) } function Ec(a) { var b = f.saver; if (b) b.onTag(a) } function Fc(a) { var b = f.saver; if (b) b.onError(a) } function Gc(a, b, c) {
        var d, e, p, v, n; CallTrace.add("onTreeContextFolder", [c]); b.mark(c); n = []; "trash" == c ? k(n, "MES_CLEAR_TRASH", fc) : "dashboard" != c && (d = f.folders[c], e = "folder" == d.type ? c : d.parent, v = "1" == d.folderId, p = ga(d), b = "admin" == d.access, v || (yb(d.type) && (k(n, "MES_FIND_REFERENCES", function () { Ca(d.name) }), w(n)), k(n, "MES_COPY",
            function () { ta([c]) }), p || k(n, "MES_CUT", function () { za(d.parent, [c]) })), p ? (w(n), k(n, "MES_SAVE_TO_FILE", function () { ia(d.spaceId) })) : ($a() && k(n, "MES_PASTE", function () { zb(e) }), w(n), v ? (b && k(n, "MES_ACCESS", function () { ja(d.spaceId, null) }), w(n), k(n, "MES_LOAD_FROM_FILE", function () { Ka(d.spaceId) }), k(n, "MES_SAVE_TO_FILE", function () { ia(d.spaceId) }), w(n), k(n, "MES_CREATE_FOLDER", function () { wa(e) }, null, "folder-s2.png"), k(n, "MES_CREATE_DIAGRAM", function () { ua(e) }, null, "to-primitive-s2.png")) : (k(n, "MES_DELETE", function () {
                Aa(d.parent,
                    [c])
            }, null, "delete.png"), w(n), k(n, "MES_RENAME", function () { q(new Ia, c, null) }), "folder" == d.type && (w(n), k(n, "MES_CREATE_FOLDER", function () { wa(e) }, null, "folder-s2.png"), k(n, "MES_CREATE_DIAGRAM", function () { ua(e) }, null, "to-primitive-s2.png")))), w(n), k(n, "MES_DESCRIPTION", function () { P(c) })); W(a, n); return !1
    } function Ab() { f.leftPaneStatus.show() } function Hc() { var a; x().hideLeftButton(f.openLeftIndex); a = h("splitter"); a.leftVisible = !0; a.left = hb(); R(); S() } function Bb() { f.rightPaneStatus.show() } function Ic() {
        var a;
        x().hideRightButton(f.openRightIndex); a = h("splitter"); a.rightVisible = !0; a.right = kb(); R(); S()
    } function y(a) { e.panic(a) } function u(a) { if (a) return a = a.split(" "), { spaceId: a[0], folderId: a[1] }; throw Error("parseId: id is null"); } function Jc() { return e.getPath().split("/").filter(function (a) { return !!a }) } function ib(a) { a = parseInt(a); isNaN(a) && (a = 300); a = Math.min(a, .45 * window.innerWidth); a = Math.floor(a); return a = Math.max(a, 30) } function ca() { zb(null) } function zb(a) {
        var b, c, d; d = 0; if (a = va(a)) {
            d = f.clipboard.getClipboardType();
            if ("copy-folders" === d) CallTrace.add("copy-paste folders", []), c = "copy"; else { if ("cut-folders" !== d) throw "Unexpected switch value: " + d; CallTrace.add("cut-paste folders", []); c = "move" } e.showWorking(); d = { onData: function () { e.hideWorking(); f.clipboard.clear() }, onError: Dc }; b = f.clipboard.getClipboard(); a = { folders: b, operation: c, parentId: a }; q(new Kc, a, d)
        }
    } function D(a, b, c) { a.push({ text: b, link: c }) } function Lc(a) { "path" == a.type && (a.signalId = "path", f.pathWidgets.push(a.id)) } function Mc(a) {
        "globalSearch" == a.signalId &&
        f.globalSearches.push(a.id)
    } function Cb(a) { h("tree").setIcon(a, "delete.png"); e.hideWorking() } function Db() { H() && !C() && x().redo() } function uc() { var a; a = K(); 1 == a.length && (a = a[0], q(new Ia, a, null)) } function La(a, b) { h("folder_grid").setItemText(a, 1, b); h("tree").setText(a, b); h("recent").setItemText(a, b); h("middle_recent").setItemText(a, 1, b); for (var c, d = 0, m = f.pathWidgets, p = m.length; d < p;)c = h(m[d]), c.renameStage(a, b), d++; if (c = f.folders[a]) c.name = b; a == f.current.id && e.setMobileHeader(b) } function Eb() {
        var a =
            f.searchMachine; a && (a.state = null); if (a = f.searchThrottle) a.state = null; f.searchMachine = null; f.searchThrottle = null; f.searchThrottle = new Nc
    } function Ma(a, b) { e.sendDelete("/api/trash/" + b, a) } function Na(a) { return "/api/trash/" + a.spaces[a.current] } function Oa(a) { a.items.sort(function (a, c) { return a.name.localeCompare(c.name) }) } function Fb(a, b, c, d) { a = u(a); a = { space_id: a.spaceId, folder_id: a.folderId }; b = { items: b.map(ub), target: a, operation: c }; e.sendPost("/api/many", b, d) } function Pa() { q(new Oc, null, self) } function Qa(a) {
        var b =
            a.queue.shift(), c, d; d = b.tag; a.oldTag = a.newTag; a.newTag = d; c = f.current.id; b.name && (e.setTitle(b.name), La(c, b.name)); d = B(Bc, Ac); c = u(c); a.lastIo = (new Date).getTime(); e.sendPost("/api/edit/" + c.spaceId + "/" + c.folderId, b, d)
    } function S() {
        var a, b, c, d; d = h("splitter"); a = Math.max(d.left, 30); c = Math.max(d.right, 30); b = d.leftVisible; d = d.rightVisible; HtmlUtils.setCookie("splitter-left", a.toString(), 30); HtmlUtils.setCookie("splitter-right", c.toString(), 30); HtmlUtils.setCookie("splitter-left-vis", b.toString(), 30); HtmlUtils.setCookie("splitter-right-vis",
            d.toString(), 30)
    } function Gb(a, b, c, d, e, f) { var v, n, h; if (a) for (var g = 0, k = Object.keys(a), l = k.length; g < l;) { n = k[g]; h = a[n]; if (h.content) if (v = h.content.txt, h = h.content.txt2, v = Utils.findNormSubstring(v, b)) n = { name: d, type: "item", target: { id: e, itemId: n }, found: v, path: f }, c.push(n); else if (v = Utils.findNormSubstring(h, b)) n = { name: d, type: "item", target: { id: e, itemId: n }, found: v, path: f }, c.push(n); g++ } } function E(a, b, c) { e.setTimeout(function () { a.onData(b) }, c, "Schedule next state: " + a.type_name) } function ka() {
        var a; aa();
        a = 1 + .5 * Math.random(); a = e.setTimeout(Pc, 1E3 * a, "schedulePoll"); f.pollTimer = a
    } function la(a) { var b; b = h("tree"); b.select(a); b.scrollIntoView(a) } function Hb(a, b) { var c = { items: a.map(ub), operation: "delete" }; e.sendPost("/api/many", c, b) } function I(a, b) {
        var c; h("middle").setActive(a); f.current.screen = a; f.isTryMe ? c = "top_diagram_try" : f.user.userId ? "read" === b ? (f.current.isReadonly = !0, c = f.topCodesRo[a]) : (f.current.isReadonly = !1, c = f.topCodes[a]) : (f.current.isReadonly = !0, c = f.topCodesNu[a]); h("top").setActive(c);
        R()
    } function Ib(a) { f.user.recent = a.map(function (a) { return { id: a.space_id + " " + a.folder_id, text: a.name, type: a.type } }); Za() } function Ra(a) { var b; b = h("folder_grid"); b.setItems(Utils.copyObjectDeep(a)); for (var c = 0, d = a.length; c < d;) { var e = a[c]; if (-1 != f.current.previous.indexOf(e.id)) { b.mark(e.id); break } c++ } h("check_all").setChecked(!1) } function Sa(a) {
        var b, c, d, e; d = []; e = h("tree"); for (var f = 0, v = a.children, n = v.length; f < n;) {
            c = v[f]; var g = b = G(c), k = c.name, l = da(c.type), q; q = "folder" == c.type ? 10 : 20; c = {
                id: g, text: k, icon: l,
                rank: q, isFolder: "folder" == c.type, kids: []
            }; d.push(c); h("tree").remove(b); f++
        } a = G(a); e.setChildren(a, d)
    } function Jb() { q(new Qc, null, null) } function yb(a) { return "drakon" !== a && "free" !== a && "mind" !== a || !f.wide || f.isTryMe ? !1 : !0 } function Kb() { return Config.SHOW_DEMO && !C() && H() && f.wide && ("drakon" == f.current.type || "mind" == f.current.type) ? !0 : !1 } function ja(a, b) { b || (b = B(fa, y)); q(new Rc, a, b) } function W(a, b) { var c; 0 != b.length && (c = { rows: b }, e.showContextMenu(a.clientX, a.clientY, c, null)) } function nb() {
        var a, b, c; a =
            f.user.recent; c = lb(); b = a.map(function (a) { var b = Utils.copyObject(a); b.icon = da(a.type); return b }); a = h("middle_dashboard"); a.setDashboardRecent(b); a.setDashboardProjects(c); Q(); O(t("MES_DASHBOARD"), "<root>", !1); e.setTitle("DrakonHub"); la("dashboard"); I("middle_dashboard", null); e.pushState({ type: "dashboard" }, "DrakonHub", "/ide/dashboard")
    } function Ta() { var a; Kb() && (a = f.current.type, "drakon" !== a && "mind" !== a || e.showDemo(a)) } function Sc() { e.showHelp() } function Ka(a, b) { b || (b = B(fa, y)); q(new Tc, a, b) } function Uc(a,
        b, c) { var d, m, p, h; d = f.folders[c]; m = ga(d); d = "admin" == d.access; h = u(c).spaceId; p = []; k(p, "MES_DESCRIPTION", function () { P(c) }); w(p); m || k(p, "MES_LOAD_FROM_FILE", function () { Ka(h) }); k(p, "MES_SAVE_TO_FILE", function () { ia(h) }); d && (w(p), k(p, "MES_ACCESS", function () { ja(h, null) }), k(p, "MES_DELETE_SPACE", function () { nc(h) })); e.showPopupListAt(a, b, p) } function sb() {
            var a, b, c; b = []; for (var d = 0, m = f.user.recent, p = m.length; d < p;) {
                var g = m[d]; c = u(g.id).spaceId; a = Ga(g.type); c = { text: c + ": " + g.text }; a = { id: g.id, cells: [a, c] }; b.push(a);
                d++
            } Q(); O(t("MES_RECENT"), "<root>", !1); h("middle_recent").setItems(b); I("middle_recent", null); b = t("MES_RECENT") + " - DrakonHub"; e.pushState({ type: "recent" }, b, "/ide/recent")
        } function ia(a, b) { b || (b = B(fa, y)); q(new Vc, a, b) } function Ua(a) { var b, c, d, m; d = u(f.current.id); if (c = f.folders[f.current.id] || null) m = 1 == c.is_public, b = "admin" == c.access, e.showShareScreen(d.spaceId, d.folderId, c.type, m, b, a) } function pb() {
            var a, b, c, d, m, p, g; p = h("middle_spaces"); m = lb(); d = []; for (var n = 0, k = m.length; n < k;)g = m[n], a = g + " 1", b = Ha("workspace-s2.png"),
                c = Ha("settings.png"), g = { text: g }, a = { id: a, cells: [b, g, c] }, d.push(a), n++; Q(); O(t("MES_SPACES"), "<root>", !1); p.setItems(d); p = h("middle_spaces"); n = 0; for (k = m.length; n < k;) { d = m[n] + " 1"; if (-1 != f.current.previous.indexOf(d)) { p.mark(d); break } n++ } I("middle_spaces", null); m = t("MES_SPACES") + " - DrakonHub"; e.pushState({ type: "projects" }, m, "/ide/spaces")
        } function Lb() {
            var a, b; b = []; f.user.userId && (a = { id: "dashboard", text: t("MES_DASHBOARD"), icon: "dashboard.png", rank: 5, isFolder: !1, kids: [] }, b.push(a)); for (var c = 0, d = Object.keys(f.user.spaces),
                e = d.length; c < e;)a = d[c], a = { id: a + " 1", text: a, icon: "workspace-s2.png", rank: 10, isFolder: !0, kids: [] }, b.push(a), c++; f.user.userId && (a = { id: "trash", text: t("MES_TRASH"), icon: "trash-s2.png", rank: 20, isFolder: !1, kids: [] }, b.push(a)); h("tree").setChildren(null, b)
        } function Va(a) {
            var b, c, d, f, p, g; c = h("trash_grid"); p = []; for (var n = 0, k = a.length; n < k;)b = a[n], d = b.space_id + " " + b.id, f = Ga(b.type), g = { text: b.space_id + ": " + b.name }, b = { text: t("MES_RESTORE") }, d = { id: d, cells: [f, g, b] }, p.push(d), n++; Q(); O(t("MES_TRASH"), "<root>", !1);
            c.setItems(p); la("trash"); I("middle_trash", null); a = t("MES_DELETED_ITEMS") + " - DrakonHub"; e.pushState({ type: "trash" }, a, "/ide/trash")
        } function F(a, b, c) { var d; d = B(function () { e.hideWorking(); c && c() }, y); e.showWorking(); q(a, b, d) } function q(a, b, c) { c || (c = B(function () { }, function () { })); a.target = c; E(a, b, 1) } function Mb(a, b) { var c; c = u(f.current.id); e.sendPost("/api/search", { spaces: [c.spaceId], type: "items", needle: a }, b) } function Pc() { var a; f.pollTimer = null; (a = f.saver) && a.timeout() } function Nb(a, b) {
            var c, d, e, p; e =
                []; b = Utils.normalizeString(b).text; for (var g = 0, h = a.items, k = h.length; g < k;) { var l = h[g]; if (c = Utils.findNormSubstring(l.text, b)) d = l.space_id + " " + l.folder_id, d != f.current.id && (p = l.path.slice(0, l.path.length - 1), c = { name: l.name, type: "item", target: { id: d, itemId: l.item_id }, found: c, path: p.join("/") }, e.push(c)); g++ } return e
        } function Wc(a) { var b, c; c = a.path.slice(0, a.path.length - 1); b = a.space_id + " " + a.folder_id; return { path: c.join("/"), name: a.name, type: "folder", target: b, image: da(a.type) } } function Ob() {
            H() && !C() &&
            x().undo()
        } function L() { var a, b, c; b = "middle_folder" == f.current.screen ? !0 : !1; b && (b = h("folder_grid"), b = b.getChecked(), c = eb(b.checked), a = h("actions"), 0 < c.length ? (a.enable(!0), a = h("check_all"), 0 == b.unchecked.length && 0 != b.checked.length ? a.setChecked(!0) : a.setChecked(!1)) : a.enable(!1)) } function Pb() { var a; a = h("splitter"); a = a.rightVisible ? a.right + 50 : 50; e.placeFeedback(a) } function R() { e.onResize(); f.wide && Pb() } function Za() { h("recent").setItems(f.user.recent) } function ma(a) {
            return (a = (a || "").trim()) ? null :
                t("ERR_EMPTY_NAME")
        } function $b(a) { return (a = xb(a || "")) ? (a = Utils.checkSpaceName(a)) ? t(a) : null : t("ERR_EMPTY_NAME") } function V() { e.showWorking(); f.saver = null; f.current.id = null; f.current.type = null; aa() } function X() {
            var a = this; a.type_name = "SpacesLoader"; a.state = "Start"; a.onData = function (b) {
                var c = a.state; if ("Start" == c) a.id = b, z ? (q(new Wa, null, a), a.state = "GettingHistory") : (Y(a.id), Y("examples 1"), Lb(), l(a, b), a.state = null); else if ("GettingHistory" == c) e.sendGet("/api/account", a), a.state = "GettingAccount"; else if ("GettingAccount" ==
                    c) { f.user.name = b.name; f.user.spaces = {}; for (var c = 0, d = b.spaces_access, m = d.length; c < m;) { var p = d[c]; f.user.spaces[p.space_id] = p; Ya(p); c++ } Y(a.id); Y("examples 1"); Lb(); l(a, b); a.state = null } else return null
            }; a.onError = function (b) { var c = a.state; if ("Start" == c) a.state = null; else if ("GettingHistory" == c) g(a, b), a.state = null; else if ("GettingAccount" == c) g(a, b), a.state = null; else return null }
        } function M() {
            var a = this; a.type_name = "FolderGetter"; a.state = "Start"; a.onData = function (b) {
                var c = a.state; if ("Start" == c) a.id = b.id,
                    a.src = b.src, a.ids = u(a.id), e.sendGet("/api/visit/" + a.ids.spaceId + "/" + a.ids.folderId, a), a.state = "GettingFolder"; else if ("GettingFolder" == c) CallTrace.add("on folder data", [a.id, a.src]), na(a.id, b, null), "1" != a.ids.folderId && La(a.id, b.name), l(a, b), a.state = null; else return null
            }; a.onError = function (b) { var c = a.state; if ("Start" == c) a.state = null; else if ("GettingFolder" == c) g(a, b), a.state = null; else return null }
        } function Qb() {
            var a = this; a.type_name = "TreeNodeExpander"; a.state = "Start"; a.onData = function (b) {
                var c = a.state;
                if ("Start" == c) a.start = b, b = { id: b.rowId, src: "TreeNodeExpander" }, q(new M, b, a), a.state = "GettingFolder"; else if ("GettingFolder" == c) Sa(b), l(a, null), a.state = null; else return null
            }; a.onError = function (b) { b = a.state; if ("Start" == b) a.state = null; else if ("GettingFolder" == b) Cb(a.start.rowId), l(a, null), a.state = null; else return null }
        } function xa() {
            var a = this; a.type_name = "FolderShower"; a.state = "Start"; a.onData = function (b) {
                var c = a.state; if ("Start" == c) a.id = b, b = { id: a.id, src: "FolderShower" }, q(new M, b, a), a.state = "GettingFolder";
                else if ("GettingFolder" == c) {
                    var c = a.id, d; f.current.id = c; f.current.type = b.type; d = jb(b); e.setMobileHeader(d); e.setTitle(d + " - DrakonHub"); d = b.path; var m, p, g; d = d || []; 1 < d.length ? (m = d[d.length - 2], m = G(m), f.current.parent = m) : f.current.parent = null; Q(); for (m = 0; m < d.length;)g = d[m], p = G(g), O(jb(g), p, m < d.length - 1), m++; d = bb(b.path); -1 == f.current.previous.indexOf(d[d.length - 1]) && (f.current.previous = d); m = b.name; d = { type: "folder", id: c }; c = u(c); p = "/ide/doc/" + c.spaceId + "/" + c.folderId; "1" == c.folderId && (m = c.spaceId); e.pushState(d,
                        m, p); if ("folder" == f.current.type) { I("middle_folder", b.access); var n, k; b.children.sort(tc); c = []; d = 0; m = b.children; for (p = m.length; d < p;)n = m[d], g = Ga(n.type), k = { text: n.name }, n = G(n), g = { id: n, cells: [g, k] }, c.push(g), d++; f.current.folders = c; Ra(c); h("check_all").setChecked(!1); f.wide || h("folderSearch").clear(); L(); l(a, b); a.state = null } else cc(a.id, b.name, b.type), a.diagram = b, z ? e.sendGet("/api/theme", a) : E(a, null, 1), a.state = "GettingTheme"
                } else if ("GettingTheme" == c) b && x().setUserSettings(b), q(new Rb, a.diagram, a),
                    a.state = "LoadingFonts"; else if ("LoadingFonts" == c) b = a.diagram, c = f.current, c.oldTag = null, c.newTag = b.tag, b = f, c = a.diagram.tag, d = new Xc, d.queue = [], d.newTag = c, d.oldTag = null, b.saver = d, x().resetMode(), I("middle_diagram", a.diagram.access), b = z ? null : Pa, x().setReadonly(C(), b), x().setDiagram(a.diagram, !0), a.home && x().home(), e.isDemoDiscarded() || Ta(), f.saver.loaded(a.diagram), l(a, a.diagram), a.state = null; else return null
            }; a.onError = function (b) {
                var c = a.state; if ("Start" == c) a.state = null; else if ("GettingFolder" == c) g(a,
                    b), a.state = null; else if ("GettingTheme" == c) g(a, b), a.state = null; else if ("LoadingFonts" == c) g(a, b), a.state = null; else return null
            }
        } function ob() {
            var a = this; a.type_name = "GoToFolderMachine"; a.state = "Start"; a.onData = function (b) {
                var c = a.state; if ("Start" == c) a.id = b.id, q(ba(!0), b.id, a), a.state = "ShowingFolder"; else if ("ShowingFolder" == c) a.path = bb(b.path), a.current = 1, h("tree").hasItem(a.path[0]) ? db(a) ? (E(a, null, 1), a.state = "Done") : a.state = "Expanding" : (l(a, null), a.state = null); else if ("Expanding" == c) {
                    var d; d = a.path[a.current];
                    for (var e = 0, f = b.children, g = f.length; ;) { if (!(e < g)) { b = !1; break } c = G(f[e]); if (c == d) { c = h("tree"); Sa(b); b = G(b); c.expand(b); b = !0; break } e++ } b ? (a.current++, db(a) ? (E(a, null, 1), a.state = "Done") : a.state = "Expanding") : (l(a, null), a.state = null)
                } else if ("Done" == c) la(a.id), l(a, null), a.state = null; else return null
            }; a.onError = function (b) { var c = a.state; if ("Start" == c) a.state = null; else if ("ShowingFolder" == c) g(a, b), a.state = null; else if ("Expanding" == c) g(a, b), a.state = null; else if ("Done" == c) g(a, b), a.state = null; else return null }
        }
    function Rb() {
        var a = this; a.type_name = "FontLoadingMachine"; a.state = "Start"; a.onData = function (b) { var c = a.state; if ("Start" == c) a.fonts = x().getFonts(b), a.fontId = 0, a.fontId < a.fonts.length ? (wb(a), a.state = "OnFont") : (E(a, null, 2), a.state = "Sleeping"); else if ("OnFont" == c) a.fontId < a.fonts.length ? (wb(a), a.state = "OnFont") : (E(a, null, 2), a.state = "Sleeping"); else if ("Sleeping" == c) a.target.onData(null), a.state = "OnFont"; else return null }; a.onError = function (b) {
            var c = a.state; if ("Start" == c) a.target.onError(b), a.state = null;
            else if ("OnFont" == c) a.target.onError(b), a.state = null; else if ("Sleeping" == c) a.state = null; else return null
        }
    } function Xc() {
        var a = this; a.type_name = "Saver"; a.state = "Loading"; a.loaded = function (b) { var c = a.state; if ("Loading" == c) f.isTryMe ? a.state = "Loading" : (ka(), a.state = "BeforePolling"); else { if ("BeforePolling" == c) return N(a, b); if ("Polling" == c) a.state = "Polling"; else return null } }; a.notSaved = function (b) {
            var c = a.state; if ("Loading" == c) a.state = "Loading"; else {
                if ("BeforePolling" == c) return N(a, b); if ("Polling" == c) a.state =
                    "Polling"; else if ("Saving" == c) F(ba(!1), f.current.id, null), a.state = "Loading"; else return null
            }
        }; a.onError = function (b) { var c = a.state; if ("Loading" == c) a.state = "Loading"; else { if ("BeforePolling" == c) return N(a, b); if ("Polling" == c) ka(), a.state = "BeforePolling"; else if ("Saving" == c) y(b), a.state = null; else return null } }; a.onTag = function (b) {
            var c = a.state; if ("Loading" == c) a.state = "Loading"; else {
                if ("BeforePolling" == c) return N(a, b); if ("Polling" == c) (parseInt(b.time) < a.lastIo ? 0 : b.tag != a.oldTag && b.tag != a.newTag) ? (F(ba(!1),
                    f.current.id, null), a.state = "Loading") : (ka(), a.state = "BeforePolling"); else return null
            }
        }; a.save = function (b) { var c = a.state; if ("Loading" == c) pa() && Xa(a, b), a.state = "Loading"; else if ("BeforePolling" == c) pa() ? (aa(), a.queue.push(b), Qa(a), a.state = "Saving") : a.state = "BeforePolling"; else if ("Polling" == c) pa() ? (a.queue.push(b), Qa(a), a.state = "Saving") : a.state = "Polling"; else if ("Saving" == c) Xa(a, b), a.state = "Saving"; else return null }; a.saved = function (b) {
            var c = a.state; if ("Loading" == c) a.state = "Loading"; else {
                if ("BeforePolling" ==
                    c) return N(a, b); if ("Polling" == c) a.state = "Polling"; else if ("Saving" == c) 0 < a.queue.length ? (Qa(a), a.state = "Saving") : (ka(), a.state = "BeforePolling"); else return null
            }
        }; a.timeout = function (b) { b = a.state; if ("Loading" == b) a.state = "Loading"; else if ("BeforePolling" == b) { var c; b = u(f.current.id); a.lastIo = (new Date).getTime(); c = "/api/tag/" + b.spaceId + "/" + b.folderId + "/" + a.lastIo; b = B(Ec, Fc); e.sendGet(c, b); a.state = "Polling" } else if ("Polling" == b) a.state = "Polling"; else return null }
    } function Yc() {
        var a = this; a.type_name = "RootSpacesShower";
        a.state = "Start"; a.onData = function (b) { var c = a.state; if ("Start" == c) q(new X, null, a), a.state = "GettingProjects"; else if ("GettingProjects" == c) pb(), l(a, b), a.state = null; else return null }; a.onError = function (b) { var c = a.state; if ("Start" == c) a.state = null; else if ("GettingProjects" == c) g(a, b), a.state = null; else return null }
    } function Zc() {
        var a = this; a.type_name = "RootFolderShower"; a.state = "Start"; a.onData = function (b) {
            var c = a.state; if ("Start" == c) a.id = b.id, q(new X, a.id, a), a.state = "ShowingSpaces"; else if ("ShowingSpaces" ==
                c) q(new ob, { id: a.id }, a), a.state = "ShowingFolder"; else if ("ShowingFolder" == c) l(a, b), a.state = null; else return null
        }; a.onError = function (b) { var c = a.state; if ("Start" == c) a.state = null; else if ("ShowingSpaces" == c) g(a, b), a.state = null; else if ("ShowingFolder" == c) g(a, b), a.state = null; else return null }
    } function ic() {
        var a = this; a.type_name = "DiagramCreator"; a.state = "Start"; a.cancel = function (b) { if ("ChooseDiagramType" == a.state) e.hideCentral(), l(a, b), a.state = null; else return null }; a.onData = function (b) {
            var c = a.state; if ("Start" ==
                c) a.parentId = b, b = u(a.parentId), a.spaceId = b.spaceId, a.parentFolder = b.folderId, e.showChooseTypeDialog(a), a.state = "ChooseDiagramType"; else { if ("ChooseDiagramType" == c) return Vb(a, b); if ("EnterName" == c) e.hideInputBox(), e.showWorking(), e.sendPost("/api/folder/" + a.spaceId, { parent: a.parentFolder, type: a.diagramType, name: b }, a), a.state = "SendToServer"; else { if ("SendToServer" == c) return Wb(a, b); if ("Done" == c) l(a, b), a.state = null; else return null } }
        }; a.onError = function (b) {
            var c = a.state; if ("Start" == c) a.state = null; else if ("ChooseDiagramType" ==
                c) g(a, b), a.state = null; else if ("EnterName" == c) g(a, b), a.state = null; else if ("SendToServer" == c) e.hideWorking(), "ERR_DIAGRAM_LIMIT" == b.error && b.suggested ? (l(a, b), e.suggest(b.error, b.suggested, "createDiagram")) : g(a, b), a.state = null; else if ("Done" == c) g(a, b), a.state = null; else return null
        }
    } function jc() {
        var a = this; a.type_name = "FolderCreator"; a.state = "Start"; a.onData = function (b) {
            var c = a.state; if ("Start" == c) return Yb(a, b); if ("EnterName" == c) e.hideInputBox(), e.showWorking(), e.sendPost("/api/folder/" + a.spaceId,
                { parent: a.parentFolder, type: "folder", name: b }, a), a.state = "Expand"; else if ("Expand" == c) b = new Qb, q(b, { rowId: a.parentId }, a), a.state = "RefreshParent"; else { if ("RefreshParent" == c) return Xb(a, b); if ("Done" == c) l(a, b), a.state = null; else return null }
        }; a.onError = function (b) { var c = a.state; if ("Start" == c) a.state = null; else if ("EnterName" == c) g(a, b), a.state = null; else if ("Expand" == c) g(a, b), a.state = null; else if ("RefreshParent" == c) g(a, b), a.state = null; else if ("Done" == c) g(a, b), a.state = null; else return null }
    } function Kc() {
        var a =
            this; a.type_name = "Paster"; a.state = "Start"; a.onData = function (b) {
                var c = a.state; if ("Start" == c) { a.parentId = b.parentId; a.folders = b.folders; if (c = "move" == b.operation) var d = b.parentId, c = u(b.folders[0]).spaceId, d = u(d).spaceId, c = c == d ? !1 : !0; c ? (Fb(b.parentId, b.folders, "copy", a), a.state = "RunningCopy") : (Fb(b.parentId, b.folders, b.operation, a), a.state = "RunningOperation") } else if ("RunningCopy" == c) Hb(a.folders, a), a.state = "RunningOperation"; else if ("RunningOperation" == c) q(new Wa, null, a), a.state = "GettingHistory"; else if ("GettingHistory" ==
                    c) a.parentId == f.current.id ? q(new xa, a.parentId, a) : (b = { id: a.parentId, src: "Paster" }, q(new M, b, a)), a.state = "Reloading"; else if ("Reloading" == c) Sa(b), h("tree").expand(a.parentId), l(a, null), a.state = null; else return null
            }; a.onError = function (b) { var c = a.state; if ("Start" == c) a.target.onData(null), a.state = null; else if ("RunningCopy" == c) g(a, b), a.state = null; else if ("RunningOperation" == c) g(a, b), a.state = null; else if ("GettingHistory" == c) g(a, b), a.state = null; else if ("Reloading" == c) g(a, b), a.state = null; else return null }
    }
    function cb() {
        var a = this; a.type_name = "FolderCutterDeleter"; a.state = "Start"; a.onData = function (b) {
            var c = a.state; if ("Start" == c) a.folders = b.folders, a.parentId = b.parentId, b.cut ? (f.clipboard.copyToClipboard("cut-folders", b.folders), E(a, null, 1)) : Hb(b.folders, a), a.state = "RunningOperation"; else if ("RunningOperation" == c) q(new Wa, null, a), a.state = "GettingHistory"; else if ("GettingHistory" == c) b = a.folders, c = yc(b), b.forEach(zc), c || L(), c ? A(a.parentId, a.onData) : E(a, null, 1), a.state = "Reloading"; else if ("Reloading" ==
                c) l(a, null), a.state = null; else return null
        }; a.onError = function (b) { var c = a.state; if ("Start" == c) a.state = "Start"; else if ("RunningOperation" == c) g(a, b), a.state = null; else if ("GettingHistory" == c) g(a, b), a.state = null; else if ("Reloading" == c) g(a, b), a.state = null; else return null }
    } function Ia() {
        var a = this; a.type_name = "Renamer"; a.state = "Start"; a.onData = function (b) {
            var c = a.state; if ("Start" == c) return ac(a, b); if ("EnteringName" == c) a.name = b, e.showWorking(), "drakon" == a.type || "mind" == a.type ? (CallTrace.add("rename drakon",
                [a.id, b]), b = { name: b, id: a.id, folderId: a.folderId, spaceId: a.spaceId }, q(new $c, b, a)) : (CallTrace.add("rename folder", [a.id, b]), c = "/api/folder/" + a.spaceId + "/" + a.folderId, b = { name: b }, e.sendPut(c, b, a)), a.state = "SendingToServer"; else if ("SendingToServer" == c) e.hideWorking(), e.hideInputBox(), La(a.id, a.name), l(a, null), a.state = null; else return null
        }; a.onError = function (b) {
            var c = a.state; if ("Start" == c) a.state = null; else if ("EnteringName" == c) g(a, b), a.state = null; else if ("SendingToServer" == c) e.hideWorking(), b = Fa(b),
                e.setInputBoxError(b), a.state = "EnteringName"; else return null
        }
    } function $c() {
        var a = this; a.type_name = "DrakonRenamer"; a.state = "GetFolder"; a.onData = function (b) {
            var c = a.state; if ("GetFolder" == c) a.data = b, b = { id: b.id, src: "DrakonRenamer" }, q(new M, b, a), a.state = "GettingFolder"; else if ("GettingFolder" == c) b = e.getEditor().renameDiagram(b, a.data.name), e.sendPost("/api/edit/" + a.data.spaceId + "/" + a.data.folderId, b, a), a.state = "SavingChanges"; else if ("SavingChanges" == c) f.current.id == a.data.id ? (aa(), f.saver = null, q(new xa,
                a.data.id, a), a.state = "Reloaded") : (l(a, b), a.state = null); else if ("Reloaded" == c) l(a, b), a.state = null; else return null
        }; a.onError = function (b) { var c = a.state; if ("GetFolder" == c) a.state = "GetFolder"; else if ("GettingFolder" == c) g(a, b), a.state = null; else if ("SavingChanges" == c) g(a, b), a.state = null; else if ("Reloaded" == c) g(a, b), a.state = null; else return null }
    } function ec() {
        var a = this; a.type_name = "DescriptionChanger"; a.state = "GetFolder"; a.onData = function (b) {
            var c = a.state; if ("GetFolder" == c) a.id = b, b = u(a.id), a.folderId =
                b.folderId, a.spaceId = b.spaceId, b = { id: a.id, src: "DescriptionChanger" }, e.showWorking(), q(new M, b, a), a.state = "ShowDialog"; else { if ("ShowDialog" == c) return Ub(a, b); if ("UserInput" == c) e.showWorking(), e.sendPut("/api/folder/" + a.spaceId + "/" + a.folderId, { description: b }, a), a.state = "Saving"; else if ("Saving" == c) e.hideWorking(), e.hideInputBox(), l(a, null), a.state = null; else return null }
        }; a.onError = function (b) {
            var c = a.state; if ("GetFolder" == c) a.state = null; else if ("ShowDialog" == c) g(a, b), a.state = null; else if ("UserInput" ==
                c) g(a, b), a.state = null; else if ("Saving" == c) e.hideWorking(), b = Fa(b), e.setInputBoxError(b), a.state = "UserInput"; else return null
        }
    } function Wa() { var a = this; a.type_name = "RecentGetter"; a.state = "Start"; a.onData = function (b) { var c = a.state; if ("Start" == c) e.sendGet("/api/recent", a), a.state = "GettingHistory"; else if ("GettingHistory" == c) Ib(b.recent), l(a, b), a.state = null; else return null }; a.onError = function (b) { var c = a.state; if ("Start" == c) a.state = null; else if ("GettingHistory" == c) Ib([]), l(a, b), a.state = null; else return null } }
    function Rc() {
        var a = this; a.type_name = "AccessShower"; a.state = "Start"; a.addUser = function (b) { if ("AccessScreen" == a.state) { a.role = b; var c = new ad; c.target = a; c.existing = Utils.copyObject(a.access.roles[b]); e.showAddUserScreen(c); a.state = "AddingUser" } else return null }; a.cancel = function (b) { var c = a.state; if ("AccessScreen" == c) e.hideCentral(), l(a, b), a.state = null; else if ("AddingUser" == c) e.showAccessScreen(a.access, null), a.state = "AccessScreen"; else return null }; a.onData = function (b) {
            var c = a.state; if ("Start" == c) a.spaceId =
                b, b = "/api/access/" + a.spaceId, e.showWorking(), e.sendGet(b, a), a.state = "GettingAccess"; else if ("GettingAccess" == c) e.hideWorking(), a.access = hc(a.spaceId, b), a.oldAccess = Utils.copyObjectDeep(a.access), e.showAccessScreen(a.access, a), a.state = "AccessScreen"; else if ("AccessScreen" == c) if (0 == Object.keys(a.access.roles.admin).length) e.setAccessError(t("ERR_NO_ADMINS")), a.state = "AccessScreen"; else {
                    var c = a.oldAccess, d = a.access, m = { spaceId: d.spaceId, blocks: [] }; d.isPublic == c.isPublic ? m.setPublicAccess = !1 : (m.setPublicAccess =
                        !0, m.publicAccess = d.isPublic); J(m, "read", "grant", c.roles, d.roles, d.spaceId); J(m, "read", "revoke", d.roles, c.roles, d.spaceId); J(m, "write", "grant", c.roles, d.roles, d.spaceId); J(m, "write", "revoke", d.roles, c.roles, d.spaceId); J(m, "admin", "grant", c.roles, d.roles, d.spaceId); J(m, "admin", "revoke", d.roles, c.roles, d.spaceId); (c = m.setPublicAccess || 0 != m.blocks.length ? m : null) ? (e.showWorking(), e.sendPost("/api/multi_access", c, a), a.state = "SavingAccess") : (e.hideCentral(), l(a, b), a.state = null)
                } else if ("AddingUser" == c) a.access.add(a.role,
                    b), e.showAccessScreen(a.access, null), a.state = "AccessScreen"; else if ("SavingAccess" == c) { e.hideWorking(); e.hideCentral(); c = a.access; if (c.setPublicAccess) for (var d = 0, m = f.folders, g = Object.keys(m), h = g.length; d < h;) { var k = m[g[d]]; k.space_id == c.spaceId && (k.is_public = c.isPublic); d++ } l(a, b); a.state = null } else return null
        }; a.onError = function (b) {
            var c = a.state; if ("Start" == c) a.state = null; else if ("GettingAccess" == c) g(a, b), a.state = null; else if ("AccessScreen" == c) g(a, b), a.state = null; else if ("SavingAccess" == c) e.hideWorking(),
                e.hideCentral(), "ERR_USER_LIMIT" == b.error && b.suggested ? e.suggest(b.error, b.suggested, "access") : y(b), a.state = "AccessScreen"; else return null
        }; a.removeUser = function (b) { if ("AccessScreen" == a.state) a.access.remove(b.role, b.user), a.state = "AccessScreen"; else return null }; a.togglePublic = function (b) { if ("AccessScreen" == a.state) a.access.isPublic = !a.access.isPublic, a.access.setPublicAccess = !0, a.state = "AccessScreen"; else return null }
    } function Sb() {
        var a = this; a.type_name = "PaneStatus"; a.state = "Hidden"; a.hide = function (b) {
            if ("Visible" ==
                a.state) a.hidePane(), a.state = "Hidden"; else return null
        }; a.show = function (b) { if ("Hidden" == a.state) a.showPane(), a.state = "Visible"; else return null }; a.tab = function (b) { var c = a.state; if ("Hidden" == c) b.visible = !0, a.state = "Hidden"; else if ("Visible" == c) b.visible = !1, a.state = "Visible"; else return null }
    } function oc() {
        var a = this; a.type_name = "ProjectDeleter"; a.state = "Start"; a.cancel = function (b) {
            var c = a.state; if ("Sure1" == c) e.hideCentral(), l(a, b), a.state = null; else if ("Sure2" == c) e.hideCentral(), l(a, b), a.state = null;
            else return null
        }; a.onData = function (b) {
            var c = a.state; if ("Start" == c) a.spaceId = b, b = a.spaceId, b = { type: "wlabel", text: t("MES_SURE_DELETE_SPACE") + " " + b + "?", raw: !0, style: { fontSize: "100%", textAlign: "left" } }, e.createCentral({
                type: "page", style: { background: "white" }, padding: 10, kids: [{ type: "wlabel", text: "MES_DELETE_SPACE", textAlign: "center", style: { fontSize: "110%", fontWeight: "bold" } }, b, {
                    signalId: "sendToCentralMachine", type: "wbutton", text: "MES_DELETE_SPACE", style: {
                        color: "white", background: "#455A64", padding: "12px",
                        textAlign: "center"
                    }
                }, { signalId: "hideCentral", type: "wbutton", text: "MES_CANCEL", style: { color: "white", background: "#455A64", padding: "12px", textAlign: "center" } }]
            }, a), a.state = "Sure1"; else if ("Sure1" == c) e.hideCentral(), e.schedule(a, 1E3), e.showWorking(), a.state = "Waiting"; else if ("Sure2" == c) e.hideCentral(), e.showWorking(), e.sendDelete("/api/space/" + a.spaceId, a), a.state = "Deleting"; else if ("Deleting" == c) e.goToUrl("/ide/spaces"), a.state = null; else return null
        }; a.onError = function (b) {
            var c = a.state; if ("Start" == c) a.state =
                "Start"; else if ("Sure1" == c) g(a, b), a.state = null; else if ("Waiting" == c) g(a, b), a.state = null; else if ("Sure2" == c) g(a, b), a.state = null; else if ("Deleting" == c) g(a, b), a.state = null; else return null
        }; a.timeout = function (b) {
            if ("Waiting" == a.state) e.hideWorking(), e.createCentral({
                type: "page", style: { background: "white" }, padding: 10, kids: [{ type: "wlabel", text: "MES_ATTENTION", textAlign: "center", style: { fontSize: "110%", fontWeight: "bold" } }, { type: "wlabel", text: "MES_SURE_DELETE_SPACE2", style: { fontSize: "100%", textAlign: "left" } },
                { signalId: "sendToCentralMachine", type: "wbutton", text: "MES_DELETE_SPACE", style: { color: "white", background: "red", padding: "12px", textAlign: "center" } }, { signalId: "hideCentral", type: "wbutton", text: "MES_CANCEL", style: { color: "white", background: "#455A64", padding: "12px", textAlign: "center" } }]
            }, a), a.state = "Sure2"; else return null
        }
    } function kc() {
        var a = this; a.type_name = "ProjectCreator"; a.state = "Start"; a.onData = function (b) {
            var c = a.state; if ("Start" == c) return Zb(a, b); if ("EnterName" == c) b = xb(b), e.showWorking(), a.url =
                "/ide/doc/" + b + "/1", e.sendPost("/api/space", { name: b }, a), a.state = "Creating"; else if ("Creating" == c) e.goToUrl(a.url), a.state = null; else return null
        }; a.onError = function (b) { var c = a.state; if ("Start" == c) a.state = null; else if ("EnterName" == c) y(b), a.state = null; else if ("Creating" == c) e.hideWorking(), "ERR_SPACE_LIMIT" == b.error && b.suggested ? (e.hideInputBox(), e.suggest(b.error, b.suggested, "createProject")) : (b = Fa(b), e.setInputBoxError(b)), a.state = "EnterName"; else return null }
    } function tb() {
        var a = this; a.type_name = "TrashLoader";
        a.state = "GetAccount"; a.onData = function (b) {
            var c = a.state; if ("GetAccount" == c) a.items = [], e.sendGet("/api/account", a), a.state = "GettingAccount"; else if ("GettingAccount" == c) a.spaces = b.spaces, a.current = 0, e.schedule(a, 1), a.state = "GettingSpaceRubbish"; else if ("GettingSpaceRubbish" == c) {
                var d; if (!ga(b)) { c = 0; b = b.items; for (var f = b.length; c < f;)d = b[c], d = { space_id: d.space_id, id: d.id, type: d.type, name: d.name }, a.items.push(d), c++ } a.current < a.spaces.length ? (c = Na(a), e.sendGet(c, a), a.current++, a.state = "GettingSpaceRubbish") :
                    (Oa(a), Va(a.items), l(a, null), a.state = null)
            } else return null
        }; a.onError = function (b) { var c = a.state; if ("GetAccount" == c) a.state = null; else if ("GettingAccount" == c) g(a, b), a.state = null; else if ("GettingSpaceRubbish" == c) a.current < a.spaces.length ? (b = Na(a), e.sendGet(b, a), a.current++, a.state = "GettingSpaceRubbish") : (Oa(a), Va(a.items), l(a, null), a.state = null); else return null }; a.timeout = function (b) {
            if ("GettingSpaceRubbish" == a.state) a.current < a.spaces.length ? (b = Na(a), e.sendGet(b, a), a.current++, a.state = "GettingSpaceRubbish") :
                (Oa(a), Va(a.items), l(a, null), a.state = null); else return null
        }
    } function ab() {
        var a = this; a.type_name = "ThrowTrash"; a.state = "GetAccount"; a.onData = function (b) { var c = a.state; if ("GetAccount" == c) e.sendGet("/api/account", a), a.state = "GettingAccount"; else if ("GettingAccount" == c) a.spaces = b.spaces, a.current = 0, e.schedule(a, 1), a.state = "Throwing"; else if ("Throwing" == c) a.current < a.spaces.length ? (Ma(a, a.spaces[a.current]), a.current++, a.state = "Throwing") : (h("trash_grid").setItems([]), l(a, b), a.state = null); else return null };
        a.onError = function (b) { var c = a.state; if ("GetAccount" == c) a.state = null; else if ("GettingAccount" == c) g(a, b), a.state = null; else if ("Throwing" == c) console.log(b), a.current < a.spaces.length ? (Ma(a, a.spaces[a.current]), a.current++, a.state = "Throwing") : (h("trash_grid").setItems([]), l(a, b), a.state = null); else return null }; a.timeout = function (b) { if ("Throwing" == a.state) a.current < a.spaces.length ? (Ma(a, a.spaces[a.current]), a.current++, a.state = "Throwing") : (h("trash_grid").setItems([]), l(a, b), a.state = null); else return null }
    }
    function bd() { var a = this; a.type_name = "RootTrashShower"; a.state = "Start"; a.onData = function (b) { var c = a.state; if ("Start" == c) q(new X, null, a), a.state = "ShowingSpaces"; else if ("ShowingSpaces" == c) q(new tb, null, a), a.state = "ShowingTrash"; else if ("ShowingTrash" == c) l(a, b), a.state = null; else return null }; a.onError = function (b) { var c = a.state; if ("Start" == c) a.state = null; else if ("ShowingSpaces" == c) g(a, b), a.state = null; else if ("ShowingTrash" == c) g(a, b), a.state = null; else return null } } function cd() {
        var a = this; a.type_name =
            "Restorer"; a.state = "Start"; a.onData = function (b) { var c = a.state; if ("Start" == c) a.id = b, b = u(a.id), e.sendPost("/api/restore/" + b.spaceId + "/" + b.folderId, {}, a), a.state = "Restoring"; else { if ("Restoring" == c) return bc(a, b); if ("Going" == c) l(a, b), a.state = null; else return null } }; a.onError = function (b) { var c = a.state; if ("Start" == c) a.state = null; else if ("Restoring" == c) g(a, b), a.state = null; else if ("Going" == c) g(a, b), a.state = null; else return null }
    } function dd() {
        var a = this; a.type_name = "RootRecentLoader"; a.state = "Start"; a.onData =
            function (b) { var c = a.state; if ("Start" == c) q(new X, null, a), a.state = "GettingProjects"; else if ("GettingProjects" == c) sb(), l(a, b), a.state = null; else return null }; a.onError = function (b) { var c = a.state; if ("Start" == c) a.state = null; else if ("GettingProjects" == c) g(a, b), a.state = null; else return null }
    } function ad() {
        var a = this; a.type_name = "UserAdder"; a.state = "Primary"; a.cancel = function (b) { b = a.state; if ("Primary" == b) e.hideCentral(), qa(a), a.state = null; else if ("Typing" == b) e.hideCentral(), qa(a), a.state = null; else return null };
        a.choose = function (b) { var c = a.state; if ("Primary" == c) e.hideCentral(), a.target.onData(b), a.state = null; else if ("Typing" == c) e.hideCentral(), a.target.onData(b), a.state = null; else return null }; a.onData = function (b) { if ("Primary" == a.state) b = Utils.listToSet(b.found), b = Utils.subtract(b, a.existing), b.sort(), e.setFoundUsers(b), a.state = "Primary"; else return null }; a.onError = function (b) { if ("Primary" == a.state) a.state = "Primary"; else return null }; a.onInput = function (b) {
            var c = a.state; if ("Primary" == c) (a.user = b) ? 1 < b.length ?
                (a.timerId = e.schedule(a, 300), a.state = "Typing") : a.state = "Primary" : (e.setFoundUsers([]), a.state = "Primary"); else if ("Typing" == c) a.user = b, e.clearTimeout(a.timerId), b ? 1 < b.length ? (a.timerId = e.schedule(a, 300), a.state = "Typing") : a.state = "Primary" : (e.setFoundUsers([]), a.state = "Primary"); else return null
        }; a.timeout = function (b) { if ("Typing" == a.state) e.sendPost("/api/find_users", { text: a.user }, a), a.state = "Primary"; else return null }
    } function Qc() {
        var a = this; a.type_name = "Sharer"; a.state = "UserInput"; a.access = function (b) {
            if ("UserInput" ==
                a.state) b = u(f.current.id), ja(b.spaceId, a), a.state = "Access"; else return null
        }; a.cancel = function (b) { b = a.state; if ("UserInput" == b) e.hideCentral(), a.state = null; else if ("Access" == b) Ua(null), a.state = "UserInput"; else return null }; a.onData = function (b) { b = a.state; if ("UserInput" == b) Ua(a), a.state = "UserInput"; else if ("Access" == b) Ua(null), a.state = "UserInput"; else return null }
    } function Oc() {
        var a = this; a.type_name = "SignupMachine"; a.state = "Start"; a.cancel = function (b) {
            b = a.state; if ("Start" == b) a.state = "Start"; else if ("Dialog" ==
                b) e.hideCentral(), qa(a), a.state = "Start"; else return null
        }; a.onData = function (b) { b = a.state; if ("Start" == b) e.showSignup(a), a.state = "Dialog"; else if ("Saving" == b) e.preventQuestion(), e.goToUrl("/welcome"), a.state = null; else return null }; a.onError = function (b) { var c = a.state; if ("Start" == c) a.state = "Start"; else if ("Saving" == c) y(b), a.state = null; else return null }; a.signup = function (b) {
            var c = a.state; if ("Start" == c) a.state = "Start"; else if ("Dialog" == c) a.userId = b.id, e.showWorking(), b = x().getDiagram(), e.sendPost("/api/save_try",
                b, a), a.state = "Saving"; else return null
        }
    } function ed() {
        var a = this; a.type_name = "TryMeLoader"; a.state = "Start"; a.onData = function (b) {
            var c = a.state; if ("Start" == c) b = e.getExample(), e.sendGet(b, a), a.state = "LoadingExample"; else if ("LoadingExample" == c) a.folder = b, q(new Rb, a.folder, a), a.state = "LoadingFonts"; else if ("LoadingFonts" == c) e.scheduleNextStateAfter(a, null, 100), a.state = "Sleeping"; else if ("Sleeping" == c) sa(!0), ra(!0), f.current.type = a.folder.type, x().setDiagram(a.folder, !0), I("middle_diagram"), x().home(),
                e.isDemoDiscarded() || Ta(), a.target.onData(null), a.state = null; else return null
        }; a.onError = function (b) { var c = a.state; if ("Start" == c) a.state = null; else if ("LoadingExample" == c) a.target.onError(b), a.state = null; else if ("LoadingFonts" == c) a.target.onError(b), a.state = null; else if ("Sleeping" == c) a.target.onError(b), a.state = null; else return null }
    } function Tb() {
        var a = this; a.type_name = "DiagramSearch"; a.state = "Start"; a.onData = function (b) {
            var c = a.state; if ("Start" == c) b = a.input, c = u(f.current.id), e.sendPost("/api/search",
                { spaces: [c.spaceId], type: "folders", needle: b }, a), a.state = "Folders"; else if ("Folders" == c) b = { folders: b.folders.map(Wc), completed: !1 }, e.addToSearchList(b), Mb(a.input, a), a.state = "ItemsPause"; else if ("ItemsPause" == c) e.sendGet("/api/search", a), a.state = "Items"; else if ("Items" == c) c = { allItems: Nb(b, a.input), completed: b.completed }, e.addToSearchList(c), b.completed ? a.state = null : (E(a, null, Config.SEARCH_PERIOD), a.state = "ItemsPause"); else return null
        }; a.onError = function (b) {
            b = a.state; if ("Start" == b) a.state = "Start";
            else if ("Folders" == b) e.cancelSearch(), a.state = null; else if ("ItemsPause" == b) e.cancelSearch(), a.state = null; else if ("Items" == b) e.cancelSearch(), a.state = null; else return null
        }
    } function Nc() {
        var a = this; a.type_name = "InputThrottle"; a.state = "Idle"; a.onInput = function (b) {
            var c = a.state; if ("Idle" == c) a.input = b.input, a.input ? 1 < a.input.length ? (a.timerId = e.schedule(a, 300), a.state = "Waiting") : a.state = "Idle" : a.state = "Idle"; else if ("Waiting" == c) a.input = b.input, e.clearTimeout(a.timerId), a.input ? 1 < a.input.length ? (a.timerId =
                e.schedule(a, 300), a.state = "Waiting") : a.state = "Idle" : a.state = "Idle"; else return null
        }; a.timeout = function (b) {
            b = a.state; if ("Idle" == b) a.state = null; else if ("Waiting" == b) {
                b = a.input; var c, d, m; m = 0; var g, h; c = b.toLowerCase(); h = []; m = 0; d = Object.keys(f.user.spaces); for (var k = d.length; m < k;) { var l = d[m]; g = l.toLowerCase(); Utils.stringContains(g, c) && (g = { name: l, image: "workspace-s2.png", type: "folder", target: l + " 1" }, h.push(g)); m++ } c = [{ id: "items", name: t("MES_SHOW_DIAGRAM_CONTENT"), items: [] }, {
                    id: "folders", name: t("MES_FOLDERS"),
                    items: []
                }, { id: "allItems", name: t("MES_SHOW_ALL_DIAGRAM_CONTENT"), items: [] }]; if (m = f.searchMachine) m.state = null; f.searchMachine = null; m = f.current.screen; if ("middle_folder" === m) m = new Tb, d = [], m.input = b, b = { folders: h, items: d }, e.createSearchList(c, b), b = m, f.searchMachine = b, b.onData(null); else if ("middle_diagram" === m) {
                    m = new Tb; var q, r, k = f.current.id; d = f.folders[k] || null; l = [d.space_id]; for (g = 1; g < d.path.length - 1;)l.push(d.path[g].name), g++; r = l.join("/"); l = []; q = Utils.normalizeString(b).text; g = fb(); Gb(g.nodes, q,
                        l, d.name, k, r); Gb(g.free, q, l, d.name, k, r); m.input = b; b = { folders: h, items: l }; e.createSearchList(c, b); b = m; f.searchMachine = b; b.onData(null)
                } else b = { folders: h, completed: !0 }, e.createSearchList(c, b); a.state = "Idle"
            } else return null
        }
    } function fd() {
        var a = this; a.type_name = "DashboardShower"; a.state = "Start"; a.onData = function (b) { var c = a.state; if ("Start" == c) q(new X, null, a), a.state = "GettingProjects"; else if ("GettingProjects" == c) nb(), l(a, b), a.state = null; else return null }; a.onError = function (b) {
            var c = a.state; if ("Start" ==
                c) a.state = null; else if ("GettingProjects" == c) g(a, b), a.state = null; else return null
        }
    } function sc() {
        var a = this; a.type_name = "ReferencesSearch"; a.state = "Start"; a.onData = function (b) { var c = a.state; if ("Start" == c) Mb(a.input, a), a.state = "ItemsPause"; else if ("ItemsPause" == c) e.sendGet("/api/search", a), a.state = "Items"; else if ("Items" == c) c = { allItems: Nb(b, a.input), completed: b.completed }, e.addToSearchList(c), b.completed ? a.state = null : (E(a, null, Config.SEARCH_PERIOD), a.state = "ItemsPause"); else return null }; a.onError =
            function (b) { b = a.state; if ("Start" == b) a.state = "Start"; else if ("ItemsPause" == b) e.cancelSearch(), a.state = null; else if ("Items" == b) e.cancelSearch(), a.state = null; else return null }
    } function Vc() {
        var a = this; a.type_name = "ProjectSaver"; a.state = "Start"; a.cancel = function (b) { if ("SaveScreen" == a.state) e.hideCentral(), l(a, b), a.state = null; else return null }; a.onData = function (b) {
            var c = a.state; if ("Start" == c) a.spaceId = b, e.showSaveProjectScreen(a.spaceId, a), a.state = "SaveScreen"; else if ("SaveScreen" == c) b = "/api/backup/" +
                a.spaceId, e.hideCentral(), e.showWorking(), e.sendGet(b, a), a.state = "BuildingZip"; else if ("BuildingZip" == c) e.hideWorking(), e.downloadFile(b.url, b.filename), l(a, b), a.state = null; else return null
        }; a.onError = function (b) { var c = a.state; if ("Start" == c) g(a, b), a.state = null; else if ("SaveScreen" == c) g(a, b), a.state = null; else if ("BuildingZip" == c) e.hideWorking(), y(b), a.state = null; else return null }
    } function Tc() {
        var a = this; a.type_name = "ProjectLoader"; a.state = "Start"; a.cancel = function (b) {
            var c = a.state; if ("ChoosingFile" ==
                c) e.hideCentral(), l(a, b), a.state = null; else if ("Confirm" == c) e.hideCentral(), l(a, b), a.state = null; else return null
        }; a.onData = function (b) {
            var c = a.state; if ("Start" == c) a.spaceId = b, e.showLoadFromFile(a.spaceId, a), a.state = "ChoosingFile"; else if ("ChoosingFile" == c) e.hideCentral(), a.file = b, e.createCentral({
                type: "page", style: { background: "white" }, padding: 10, kids: [{ type: "wlabel", text: "MES_ATTENTION", textAlign: "center", style: { fontSize: "110%", fontWeight: "bold" } }, {
                    type: "wlabel", text: "MES_SURE_LOAD_SPACE", style: {
                        fontSize: "100%",
                        textAlign: "left"
                    }
                }, { signalId: "sendToCentralMachine", type: "wbutton", text: "MES_LOAD_AND_REPLACE", style: { color: "white", background: "red", padding: "12px", textAlign: "center" } }, { signalId: "hideCentral", type: "wbutton", text: "MES_CANCEL", style: { color: "white", background: "#455A64", padding: "12px", textAlign: "center" } }]
            }, a), a.state = "Confirm"; else if ("Confirm" == c) e.hideCentral(), e.showWorking(), e.upload("/api/restore_backup/" + a.spaceId, "restore", a.file, a), a.state = "Loading"; else if ("Loading" == c) e.hideWorking(), 200 ===
                b.status ? e.goToUrl("/ide/doc/" + a.spaceId + "/1") : g(a, b.responseText), a.state = null; else return null
        }; a.onError = function (b) { var c = a.state; if ("Start" == c) a.state = "Start"; else if ("ChoosingFile" == c) g(a, b), a.state = null; else if ("Confirm" == c) g(a, b), a.state = null; else if ("Loading" == c) g(a, b), a.state = null; else return null }
    } var f = null, f = {
        user: { userId: z, spaces: {}, recent: [] }, current: { type: null, id: null, parent: null, previous: [] }, loadedFonts: {}, handlers: {}, machineHandlers: {}, pathWidgets: [], globalSearches: [], nav: {
            type: null,
            pageId: null
        }, folders: {}, topCodes: { middle_folder: "top_folder", middle_diagram: "top_diagram", middle_recent: "top_empty", middle_trash: "top_empty", middle_dashboard: "top_empty", middle_spaces: "top_spaces" }, topCodesRo: { middle_folder: "top_folder_ro", middle_diagram: "top_diagram_ro", middle_recent: "top_empty", middle_trash: "top_empty", middle_spaces: "top_spaces" }, topCodesNu: { middle_folder: "top_folder_nu", middle_diagram: "top_diagram_nu", middle_spaces: "top_spaces_nu" }
    }; r("left_pane_close", "click", function () { f.leftPaneStatus.hide() });
    r("right_pane_close", "click", function () { f.rightPaneStatus.hide() }); r("tree", "collapse", function (a, b, c, d, e) { h("tree").removeChildren(d) }); r("folderSearch", "input", function (a, b, c, d, e) { var g; g = c.getValue().trim(); b = f.current.folders; g ? (g = g.toLowerCase(), a = function (a) { var b = g; return -1 != a.cells[1].text.toLowerCase().indexOf(b) }, a = b.filter(a), Ra(a)) : Ra(b); L() }); r("folder_grid", "click", function (a, b, c, d, e) { 0 == e ? (c.isChecked(d) ? c.uncheck(d) : c.check(d), L()) : A(d) }); r("middle_spaces", "click", function (a, b, c, d,
        e) { b = h("middle_spaces"); 2 == e ? (b.mark(d), Uc(a.clientX, a.clientY, d)) : A(d) }); r("check_all", "check", function (a, b, c, d, e) { a = h("folder_grid"); d = a.getChecked(); if (c.isChecked) for (c = 0, b = d.unchecked, e = b.length; c < e;)d = b[c], a.check(d), c++; else for (c = 0, b = d.checked, e = b.length; c < e;)d = b[c], a.uncheck(d), c++; L() }); r("recent", "click", Ja); r("middle_recent", "click", Ja); r("path", "click", Ja); r("up", "click", function () { var a; (a = f.current.parent) ? A(a, null) : ea(null) }); r("splitter", "resize", function () { Pb(); S() }); r("hideCentral",
            "click", fa); r("actions", "click", function (a, b, c, d, f) { a = h("folder_grid").getChecked(); a = eb(a.checked); a.length && e.showPopupList(c.id, a) }); r("folder_grid", "contextmenu", function (a, b, c, d, e) { d ? Cc(a, c, d) : (b = [], C() || (Z() && (k(b, "MES_PASTE", ca), w(b)), k(b, "MES_CREATE_FOLDER", U, null, "folder-s2.png"), k(b, "MES_CREATE_DIAGRAM", T, null, "to-primitive-s2.png")), W(a, b)) }); r("tree", "contextmenu", function (a, b, c, d) { d ? Gc(a, c, d) : f.user.userId && (b = [], k(b, "MES_CREATE_SPACE", ya, null, "workspace-s2.png"), W(a, b)) }); r("middle_spaces",
                "contextmenu", function (a, b, c, d, e) { var g; b = h("middle_spaces"); d && (b.mark(d), c = [], k(c, "MES_DESCRIPTION", function () { P(d) }), e = f.folders[d], b = ga(e), e = "admin" == e.access, w(c), b || k(c, "MES_LOAD_FROM_FILE", function () { Ka(g) }), k(c, "MES_SAVE_TO_FILE", function () { ia(g) }), e && (g = u(d).spaceId, w(c), k(c, "MES_ACCESS", function () { ja(g, null) })), W(a, c)) }); r("goToProjects", "click", qb); r("trash_grid", "click", function (a, b, c, d, e) { 2 == e && F(new cd, d, null) }); r("undo", "click", Ob); r("redo", "click", Db); r("create_diagram", "click", T);
    r("create_folder", "click", U); oa("tree", "expand", Qb); oa("tree", "click", function () {
        var a = this; a.type_name = "TreeClicker"; a.state = "Start"; a.onData = function (b) { var c = a.state; if ("Start" == c) "dashboard" == b.rowId ? (Da(null), l(a, null), a.state = null) : "trash" == b.rowId ? (Ea(null), l(a, null), a.state = null) : (la(b.rowId), b.rowId == f.current.id ? (l(a, null), a.state = null) : (a.start = b, q(ba(!0), b.rowId, a), a.state = "ShowingFolder")); else if ("ShowingFolder" == c) l(a, null), a.state = null; else return null }; a.onError = function (b) {
            b = a.state;
            if ("Start" == b) a.state = null; else if ("ShowingFolder" == b) Cb(a.start.rowId), l(a, null), a.state = null; else return null
        }
    }); oa("clearTrash", "click", ab); r("createProject", "click", ya); r("share", "click", Jb); r("exportButton", "click", function (a, b, c, d, f) { a = []; k(a, "MES_SAVE_AS_PNG", function () { e.saveAsPng(1) }); k(a, "MES_SAVE_AS_PNG_HI", function () { e.saveAsPng(2) }); k(a, "MES_SAVE_AS_SVG", e.saveAsSvg); k(a, "MES_SAVE_AS_JSON", qc); e.showPopupList(c.id, a) }); r("accountButton", "click", function (a, b, c, d, f) {
        a = []; a.push({
            text: ServerVars.userName,
            code: mb, image: "user.png"
        }); k(a, "Logout", e.logout); e.showPopupList(c.id, a)
    }); r("showMainMenu", "click", function () {
        var a = 0, b = []; b.push({ text: "MES_HOMEPAGE", action: wc }); z && b.push({ text: "MES_DASHBOARD", action: Da }); z && (b.push({ text: "MES_SPACES", action: ea }), f.wide || b.push({ text: "MES_RECENT", action: rb }), b.push({ text: "MES_TRASH", action: Ea, image: "trash-s2.png" }), b.push({ text: "MES_ACCOUNT", action: mb, image: "user-s.png" })); var c = []; z && (f.current.type && !C() && (c.push({ text: "MES_CREATE_DIAGRAM", action: T, image: "to-primitive-s2.png" }),
            c.push({ text: "MES_CREATE_FOLDER", action: U, image: "folder-s2.png" })), c.push({ text: "MES_CREATE_SPACE", action: ya, image: "workspace-s2.png" })); var d = 0, d = f.current.screen; if ("middle_folder" === d || "middle_diagram" === d) !z && H() && c.push({ text: "MES_GET_IT", action: Pa }), f.isTryMe || c.push({ text: "MES_SHARE", action: Jb, image: "share.png" }); h("splitter"); d = []; !f.isTryMe && f.wide && (d.push({ text: "MES_PROJECT_TREE", action: Ab }), d.push({ text: "MES_RECENT_PANE", action: Bb })); H() && d.push({ text: "MES_HELP", action: Sc }); var g = []; Kb() &&
                g.push({ text: "MES_SHOW_DEMO", action: Ta }); D(g, "MES_DOCUMENTATION", "https://drakonhub.com/read/docs"); H() ? (a = f.current.type, "drakon" === a ? (D(g, "title-drakon", "https://drakonhub.com/drakon"), D(g, "title-video-how-to-flowchart", "https://drakonhub.com/video-how-to-flowchart"), D(g, "title-drakon-reference", "https://drakonhub.com/drakon-reference"), D(g, "title-how-to-flowchart", "https://drakonhub.com/how-to-flowchart")) : "mind" === a ? (D(g, "title-video-how-to-mind-map", "https://drakonhub.com/video-how-to-mind-map"),
                    D(g, "title-how-to-mind-map", "https://drakonhub.com/how-to-mind-map")) : (D(g, "title-video-how-to-flowchart", "https://drakonhub.com/video-how-to-flowchart"), D(g, "title-video-how-to-mind-map", "https://drakonhub.com/video-how-to-mind-map"))) : (D(g, "title-video-how-to-flowchart", "https://drakonhub.com/video-how-to-flowchart"), D(g, "title-video-how-to-mind-map", "https://drakonhub.com/video-how-to-mind-map")); b = [{ title: "MES_GO_TO", items: b, color: "green" }, { title: "MES_ACTIONS", items: c, color: "olive" }]; b.push({
                        title: "MES_LEARN",
                        items: g, color: "blue"
                    }); 0 < d.length && b.push({ title: "MES_SHOW", items: d, color: "gray" }); e.showMainMenu(b)
    }); r("saveDiagram", "click", Pa); r("globalSearch", "input", function (a, b, c, d, e) { f.searchThrottle && (a = c.getValue(), a = a.trim(), c = { input: a, widgetId: c.id }, f.searchThrottle.onInput(c)) }); r("globalSearch", "escape", function (a, b, c, d, f) { e.cancelSearch() }); this.init = function () {
        var a, b; 700 <= e.getWidth() ? f.wide = !0 : f.wide = !1; b = f; a = -1 != e.getUrl().indexOf("dev=true"); b.isDev = a; b = f; a = e.getPath(); b.isTryMe = "/try-me" == a;
        f.clipboard = new e.Clipboard; e.initControls(f.wide, f.isTryMe); var c; b = x(); f.wide && !f.isTryMe /* && (a = b.createLeftButton(Ab, "right", "#E2EDF5"), c = b.createRightButton(Bb, "left", "#E2EDF5"), f.openLeftIndex = a, f.openRightIndex = c, b.hideLeftButton(f.openLeftIndex), b.hideRightButton(f.openRightIndex)), console.log("AAA") */; Eb(); e.widgets.foreach(Lc); e.widgets.foreach(Mc); a = Jc(); b = { onData: e.onInitCompleted, onError: y };  if (2 <= a.length) {
            var d; c = x(); if (f.isTryMe || !f.wide) sa(!0), ra(!0); else {
                d = h("splitter"); d.left = hb(); d.right = kb(); var g; g =
                    f.wide ? (g = HtmlUtils.getCookie("splitter-left-vis")) ? "true" == g : !0 : !1; d.leftVisible = g; g = f.wide ? (g = HtmlUtils.getCookie("splitter-right-vis")) ? "true" == g : !0 : !1; d.rightVisible = g; f.leftPaneStatus = new Sb; f.leftPaneStatus.showPane = Hc; f.leftPaneStatus.hidePane = ra; f.rightPaneStatus = new Sb; f.rightPaneStatus.showPane = Ic; f.rightPaneStatus.hidePane = sa; d.leftVisible ? (f.leftPaneStatus.state = "Visible", c.hideLeftButton(f.openLeftIndex)) : (f.leftPaneStatus.state = "Hidden", c.showLeftButton(f.openLeftIndex)); d.rightVisible ?
                        (f.rightPaneStatus.state = "Visible", c.hideRightButton(f.openRightIndex)) : (f.rightPaneStatus.state = "Hidden", c.showRightButton(f.openRightIndex))
            } c = 0; "ide" == a[0] ? (c = a[1], "doc" === c ? 4 == a.length ? (c = a[3], a = a[2], a = { id: a + " " + c }, q(new Zc, a, b)) : y("ERR_BAD_PATH") : "trash" === c ? z ? q(new bd, null, b) : ha() : "spaces" === c ? z ? q(new Yc, null, b) : ha() : "recent" === c ? z ? q(new dd, null, b) : ha() : "dashboard" === c ? z ? q(new fd, null, b) : ha() : y("ERR_BAD_PATH")) : y("ERR_BAD_PATH")
        } else  z ? e.goToUrl("/") : q(new ed, null, b)
    }; this.getCurrent = Ba; this.getDiagram =
        fb; this.onEvent = function (a, b, c, d, e) { var g; if (g = gb(f.handlers, c, b)) g(a, b, c, d, e); else if (g = gb(f.machineHandlers, c, b)) a = { evt: a, type: b, widget: c, rowId: d, cellId: e }, F(new g, a, null) }; this.saveUserSettings = function (a) { var b; z && (b = function () { }, b = B(b, b), e.sendPost("/api/theme", a, b)) }; this.saveChanges = function (a) { var b; (b = f.saver) && b.save(a) }; this.onStateChange = function (a, b) {
            var c = 0, c = a.type; if ("folder" === c) A(a.id, b); else if ("projects" === c) ea(b); else if ("trash" === c) Ea(b); else if ("recent" === c) rb(b); else {
                if ("dashboard" !==
                    c) throw "Unexpected switch value: " + c; Da(b)
            }
        }; this.undo = Ob; this.redo = Db; this.onSearchItem = function (a, b) { "folder" === a ? A(b, null) : "item" === a && xc(b.id, b.itemId) }; this.resetSearch = Eb; this.goToFolder = A; this.goToProjectsNoArg = qb; this.findReferences = Ca; this.openSub = function (a) { rc({ onData: function (a) { a = a.id; a = Ba().spaceId + " " + a; A(a) }, onError: function (a) { console.log(a) } }, a) }
};
