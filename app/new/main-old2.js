
; /* Start:"a:4:{s:4:"full";s:57:"/local/templates/Vivon2019/js/fotorama.js?142859384438912";s:6:"source";s:41:"/local/templates/Vivon2019/js/fotorama.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * Fotorama 4.6.4 | http://fotorama.io/license/
 */
fotoramaVersion = "4.6.4", function (a, b, c, d, e) {
  "use strict"; function f(a) { var b = "bez_" + d.makeArray(arguments).join("_").replace(".", "p"); if ("function" != typeof d.easing[b]) { var c = function (a, b) { var c = [null, null], d = [null, null], e = [null, null], f = function (f, g) { return e[g] = 3 * a[g], d[g] = 3 * (b[g] - a[g]) - e[g], c[g] = 1 - e[g] - d[g], f * (e[g] + f * (d[g] + f * c[g])) }, g = function (a) { return e[0] + a * (2 * d[0] + 3 * c[0] * a) }, h = function (a) { for (var b, c = a, d = 0; ++d < 14 && (b = f(c, 0) - a, !(Math.abs(b) < .001));)c -= b / g(c); return c }; return function (a) { return f(h(a), 1) } }; d.easing[b] = function (b, d, e, f, g) { return f * c([a[0], a[1]], [a[2], a[3]])(d / g) + e } } return b } function g() { } function h(a, b, c) { return Math.max(isNaN(b) ? -1 / 0 : b, Math.min(isNaN(c) ? 1 / 0 : c, a)) } function i(a) { return a.match(/ma/) && a.match(/-?\d+(?!d)/g)[a.match(/3d/) ? 12 : 4] } function j(a) { return Ic ? +i(a.css("transform")) : +a.css("left").replace("px", "") } function k(a) { var b = {}; return Ic ? b.transform = "translate3d(" + a + "px,0,0)" : b.left = a, b } function l(a) { return { "transition-duration": a + "ms" } } function m(a, b) { return isNaN(a) ? b : a } function n(a, b) { return m(+String(a).replace(b || "px", "")) } function o(a) { return /%$/.test(a) ? n(a, "%") : e } function p(a, b) { return m(o(a) / 100 * b, n(a)) } function q(a) { return (!isNaN(n(a)) || !isNaN(n(a, "%"))) && a } function r(a, b, c, d) { return (a - (d || 0)) * (b + (c || 0)) } function s(a, b, c, d) { return -Math.round(a / (b + (c || 0)) - (d || 0)) } function t(a) { var b = a.data(); if (!b.tEnd) { var c = a[0], d = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", msTransition: "MSTransitionEnd", transition: "transitionend" }; T(c, d[uc.prefixed("transition")], function (a) { b.tProp && a.propertyName.match(b.tProp) && b.onEndFn() }), b.tEnd = !0 } } function u(a, b, c, d) { var e, f = a.data(); f && (f.onEndFn = function () { e || (e = !0, clearTimeout(f.tT), c()) }, f.tProp = b, clearTimeout(f.tT), f.tT = setTimeout(function () { f.onEndFn() }, 1.5 * d), t(a)) } function v(a, b) { if (a.length) { var c = a.data(); Ic ? (a.css(l(0)), c.onEndFn = g, clearTimeout(c.tT)) : a.stop(); var d = w(b, function () { return j(a) }); return a.css(k(d)), d } } function w() { for (var a, b = 0, c = arguments.length; c > b && (a = b ? arguments[b]() : arguments[b], "number" != typeof a); b++); return a } function x(a, b) { return Math.round(a + (b - a) / 1.5) } function y() { return y.p = y.p || ("https:" === c.protocol ? "https://" : "http://"), y.p } function z(a) { var c = b.createElement("a"); return c.href = a, c } function A(a, b) { if ("string" != typeof a) return a; a = z(a); var c, d; if (a.host.match(/youtube\.com/) && a.search) { if (c = a.search.split("v=")[1]) { var e = c.indexOf("&"); -1 !== e && (c = c.substring(0, e)), d = "youtube" } } else a.host.match(/youtube\.com|youtu\.be/) ? (c = a.pathname.replace(/^\/(embed\/|v\/)?/, "").replace(/\/.*/, ""), d = "youtube") : a.host.match(/vimeo\.com/) && (d = "vimeo", c = a.pathname.replace(/^\/(video\/)?/, "").replace(/\/.*/, "")); return c && d || !b || (c = a.href, d = "custom"), c ? { id: c, type: d, s: a.search.replace(/^\?/, ""), p: y() } : !1 } function B(a, b, c) { var e, f, g = a.video; return "youtube" === g.type ? (f = y() + "img.youtube.com/vi/" + g.id + "/default.jpg", e = f.replace(/\/default.jpg$/, "/hqdefault.jpg"), a.thumbsReady = !0) : "vimeo" === g.type ? d.ajax({ url: y() + "vimeo.com/api/v2/video/" + g.id + ".json", dataType: "jsonp", success: function (d) { a.thumbsReady = !0, C(b, { img: d[0].thumbnail_large, thumb: d[0].thumbnail_small }, a.i, c) } }) : a.thumbsReady = !0, { img: e, thumb: f } } function C(a, b, c, e) { for (var f = 0, g = a.length; g > f; f++) { var h = a[f]; if (h.i === c && h.thumbsReady) { var i = { videoReady: !0 }; i[Xc] = i[Zc] = i[Yc] = !1, e.splice(f, 1, d.extend({}, h, i, b)); break } } } function D(a) { function b(a, b, e) { var f = a.children("img").eq(0), g = a.attr("href"), h = a.attr("src"), i = f.attr("src"), j = b.video, k = e ? A(g, j === !0) : !1; k ? g = !1 : k = j, c(a, f, d.extend(b, { video: k, img: b.img || g || h || i, thumb: b.thumb || i || h || g })) } function c(a, b, c) { var e = c.thumb && c.img !== c.thumb, f = n(c.width || a.attr("width")), g = n(c.height || a.attr("height")); d.extend(c, { width: f, height: g, thumbratio: S(c.thumbratio || n(c.thumbwidth || b && b.attr("width") || e || f) / n(c.thumbheight || b && b.attr("height") || e || g)) }) } var e = []; return a.children().each(function () { var a = d(this), f = R(d.extend(a.data(), { id: a.attr("id") })); if (a.is("a, img")) b(a, f, !0); else { if (a.is(":empty")) return; c(a, null, d.extend(f, { html: this, _html: a.html() })) } e.push(f) }), e } function E(a) { return 0 === a.offsetWidth && 0 === a.offsetHeight } function F(a) { return !d.contains(b.documentElement, a) } function G(a, b, c, d) { return G.i || (G.i = 1, G.ii = [!0]), d = d || G.i, "undefined" == typeof G.ii[d] && (G.ii[d] = !0), a() ? b() : G.ii[d] && setTimeout(function () { G.ii[d] && G(a, b, c, d) }, c || 100), G.i++ } function H(a) { c.replace(c.protocol + "//" + c.host + c.pathname.replace(/^\/?/, "/") + c.search + "#" + a) } function I(a, b, c, d) { var e = a.data(), f = e.measures; if (f && (!e.l || e.l.W !== f.width || e.l.H !== f.height || e.l.r !== f.ratio || e.l.w !== b.w || e.l.h !== b.h || e.l.m !== c || e.l.p !== d)) { var g = f.width, i = f.height, j = b.w / b.h, k = f.ratio >= j, l = "scaledown" === c, m = "contain" === c, n = "cover" === c, o = $(d); k && (l || m) || !k && n ? (g = h(b.w, 0, l ? g : 1 / 0), i = g / f.ratio) : (k && n || !k && (l || m)) && (i = h(b.h, 0, l ? i : 1 / 0), g = i * f.ratio), a.css({ width: g, height: i, left: p(o.x, b.w - g), top: p(o.y, b.h - i) }), e.l = { W: f.width, H: f.height, r: f.ratio, w: b.w, h: b.h, m: c, p: d } } return !0 } function J(a, b) { var c = a[0]; c.styleSheet ? c.styleSheet.cssText = b : a.html(b) } function K(a, b, c) { return b === c ? !1 : b >= a ? "left" : a >= c ? "right" : "left right" } function L(a, b, c, d) { if (!c) return !1; if (!isNaN(a)) return a - (d ? 0 : 1); for (var e, f = 0, g = b.length; g > f; f++) { var h = b[f]; if (h.id === a) { e = f; break } } return e } function M(a, b, c) { c = c || {}, a.each(function () { var a, e = d(this), f = e.data(); f.clickOn || (f.clickOn = !0, d.extend(cb(e, { onStart: function (b) { a = b, (c.onStart || g).call(this, b) }, onMove: c.onMove || g, onTouchEnd: c.onTouchEnd || g, onEnd: function (c) { c.moved || b.call(this, a) } }), { noMove: !0 })) }) } function N(a, b) { return '<div class="' + a + '">' + (b || "") + "</div>" } function O(a) { for (var b = a.length; b;) { var c = Math.floor(Math.random() * b--), d = a[b]; a[b] = a[c], a[c] = d } return a } function P(a) { return "[object Array]" == Object.prototype.toString.call(a) && d.map(a, function (a) { return d.extend({}, a) }) } function Q(a, b, c) { a.scrollLeft(b || 0).scrollTop(c || 0) } function R(a) { if (a) { var b = {}; return d.each(a, function (a, c) { b[a.toLowerCase()] = c }), b } } function S(a) { if (a) { var b = +a; return isNaN(b) ? (b = a.split("/"), +b[0] / +b[1] || e) : b } } function T(a, b, c, d) { b && (a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent("on" + b, c)) } function U(a) { return !!a.getAttribute("disabled") } function V(a) { return { tabindex: -1 * a + "", disabled: a } } function W(a, b) { T(a, "keyup", function (c) { U(a) || 13 == c.keyCode && b.call(a, c) }) } function X(a, b) { T(a, "focus", a.onfocusin = function (c) { b.call(a, c) }, !0) } function Y(a, b) { a.preventDefault ? a.preventDefault() : a.returnValue = !1, b && a.stopPropagation && a.stopPropagation() } function Z(a) { return a ? ">" : "<" } function $(a) { return a = (a + "").split(/\s+/), { x: q(a[0]) || bd, y: q(a[1]) || bd } } function _(a, b) { var c = a.data(), e = Math.round(b.pos), f = function () { c.sliding = !1, (b.onEnd || g)() }; "undefined" != typeof b.overPos && b.overPos !== b.pos && (e = b.overPos, f = function () { _(a, d.extend({}, b, { overPos: b.pos, time: Math.max(Qc, b.time / 2) })) }); var h = d.extend(k(e), b.width && { width: b.width }); c.sliding = !0, Ic ? (a.css(d.extend(l(b.time), h)), b.time > 10 ? u(a, "transform", f, b.time) : f()) : a.stop().animate(h, b.time, _c, f) } function ab(a, b, c, e, f, h) { var i = "undefined" != typeof h; if (i || (f.push(arguments), Array.prototype.push.call(arguments, f.length), !(f.length > 1))) { a = a || d(a), b = b || d(b); var j = a[0], k = b[0], l = "crossfade" === e.method, m = function () { if (!m.done) { m.done = !0; var a = (i || f.shift()) && f.shift(); a && ab.apply(this, a), (e.onEnd || g)(!!a) } }, n = e.time / (h || 1); c.removeClass(Rb + " " + Qb), a.stop().addClass(Rb), b.stop().addClass(Qb), l && k && a.fadeTo(0, 0), a.fadeTo(l ? n : 0, 1, l && m), b.fadeTo(n, 0, m), j && l || k || m() } } function bb(a) { var b = (a.touches || [])[0] || a; a._x = b.pageX, a._y = b.clientY, a._now = d.now() } function cb(a, c) { function e(a) { return m = d(a.target), u.checked = p = q = s = !1, k || u.flow || a.touches && a.touches.length > 1 || a.which > 1 || ed && ed.type !== a.type && gd || (p = c.select && m.is(c.select, t)) ? p : (o = "touchstart" === a.type, q = m.is("a, a *", t), n = u.control, r = u.noMove || u.noSwipe || n ? 16 : u.snap ? 0 : 4, bb(a), l = ed = a, fd = a.type.replace(/down|start/, "move").replace(/Down/, "Move"), (c.onStart || g).call(t, a, { control: n, $target: m }), k = u.flow = !0, void ((!o || u.go) && Y(a))) } function f(a) { if (a.touches && a.touches.length > 1 || Nc && !a.isPrimary || fd !== a.type || !k) return k && h(), void (c.onTouchEnd || g)(); bb(a); var b = Math.abs(a._x - l._x), d = Math.abs(a._y - l._y), e = b - d, f = (u.go || u.x || e >= 0) && !u.noSwipe, i = 0 > e; o && !u.checked ? (k = f) && Y(a) : (Y(a), (c.onMove || g).call(t, a, { touch: o })), !s && Math.sqrt(Math.pow(b, 2) + Math.pow(d, 2)) > r && (s = !0), u.checked = u.checked || f || i } function h(a) { (c.onTouchEnd || g)(); var b = k; u.control = k = !1, b && (u.flow = !1), !b || q && !u.checked || (a && Y(a), gd = !0, clearTimeout(hd), hd = setTimeout(function () { gd = !1 }, 1e3), (c.onEnd || g).call(t, { moved: s, $target: m, control: n, touch: o, startEvent: l, aborted: !a || "MSPointerCancel" === a.type })) } function i() { u.flow || setTimeout(function () { u.flow = !0 }, 10) } function j() { u.flow && setTimeout(function () { u.flow = !1 }, Pc) } var k, l, m, n, o, p, q, r, s, t = a[0], u = {}; return Nc ? (T(t, "MSPointerDown", e), T(b, "MSPointerMove", f), T(b, "MSPointerCancel", h), T(b, "MSPointerUp", h)) : (T(t, "touchstart", e), T(t, "touchmove", f), T(t, "touchend", h), T(b, "touchstart", i), T(b, "touchend", j), T(b, "touchcancel", j), Ec.on("scroll", j), a.on("mousedown", e), Fc.on("mousemove", f).on("mouseup", h)), a.on("click", "a", function (a) { u.checked && Y(a) }), u } function db(a, b) { function c(c, d) { A = !0, j = l = c._x, q = c._now, p = [[q, j]], m = n = D.noMove || d ? 0 : v(a, (b.getPos || g)()), (b.onStart || g).call(B, c) } function e(a, b) { s = D.min, t = D.max, u = D.snap, w = a.altKey, A = z = !1, y = b.control, y || C.sliding || c(a) } function f(d, e) { D.noSwipe || (A || c(d), l = d._x, p.push([d._now, l]), n = m - (j - l), o = K(n, s, t), s >= n ? n = x(n, s) : n >= t && (n = x(n, t)), D.noMove || (a.css(k(n)), z || (z = !0, e.touch || Nc || a.addClass(ec)), (b.onMove || g).call(B, d, { pos: n, edge: o }))) } function i(e) { if (!D.noSwipe || !e.moved) { A || c(e.startEvent, !0), e.touch || Nc || a.removeClass(ec), r = d.now(); for (var f, i, j, k, o, q, v, x, y, z = r - Pc, C = null, E = Qc, F = b.friction, G = p.length - 1; G >= 0; G--) { if (f = p[G][0], i = Math.abs(f - z), null === C || j > i) C = f, k = p[G][1]; else if (C === z || i > j) break; j = i } v = h(n, s, t); var H = k - l, I = H >= 0, J = r - C, K = J > Pc, L = !K && n !== m && v === n; u && (v = h(Math[L ? I ? "floor" : "ceil" : "round"](n / u) * u, s, t), s = t = v), L && (u || v === n) && (y = -(H / J), E *= h(Math.abs(y), b.timeLow, b.timeHigh), o = Math.round(n + y * E / F), u || (v = o), (!I && o > t || I && s > o) && (q = I ? s : t, x = o - q, u || (v = q), x = h(v + .03 * x, q - 50, q + 50), E = Math.abs((n - x) / (y / F)))), E *= w ? 10 : 1, (b.onEnd || g).call(B, d.extend(e, { moved: e.moved || K && u, pos: n, newPos: v, overPos: x, time: E })) } } var j, l, m, n, o, p, q, r, s, t, u, w, y, z, A, B = a[0], C = a.data(), D = {}; return D = d.extend(cb(b.$wrap, d.extend({}, b, { onStart: e, onMove: f, onEnd: i })), D) } function eb(a, b) { var c, e, f, h = a[0], i = { prevent: {} }; return T(h, Oc, function (a) { var h = a.wheelDeltaY || -1 * a.deltaY || 0, j = a.wheelDeltaX || -1 * a.deltaX || 0, k = Math.abs(j) && !Math.abs(h), l = Z(0 > j), m = e === l, n = d.now(), o = Pc > n - f; e = l, f = n, k && i.ok && (!i.prevent[l] || c) && (Y(a, !0), c && m && o || (b.shift && (c = !0, clearTimeout(i.t), i.t = setTimeout(function () { c = !1 }, Rc)), (b.onEnd || g)(a, b.shift ? l : j))) }), i } function fb() { d.each(d.Fotorama.instances, function (a, b) { b.index = a }) } function gb(a) { d.Fotorama.instances.push(a), fb() } function hb(a) { d.Fotorama.instances.splice(a.index, 1), fb() } var ib = "fotorama", jb = "fullscreen", kb = ib + "__wrap", lb = kb + "--css2", mb = kb + "--css3", nb = kb + "--video", ob = kb + "--fade", pb = kb + "--slide", qb = kb + "--no-controls", rb = kb + "--no-shadows", sb = kb + "--pan-y", tb = kb + "--rtl", ub = kb + "--only-active", vb = kb + "--no-captions", wb = kb + "--toggle-arrows", xb = ib + "__stage", yb = xb + "__frame", zb = yb + "--video", Ab = xb + "__shaft", Bb = ib + "__grab", Cb = ib + "__pointer", Db = ib + "__arr", Eb = Db + "--disabled", Fb = Db + "--prev", Gb = Db + "--next", Hb = ib + "__nav", Ib = Hb + "-wrap", Jb = Hb + "__shaft", Kb = Hb + "--dots", Lb = Hb + "--thumbs", Mb = Hb + "__frame", Nb = Mb + "--dot", Ob = Mb + "--thumb", Pb = ib + "__fade", Qb = Pb + "-front", Rb = Pb + "-rear", Sb = ib + "__shadow", Tb = Sb + "s", Ub = Tb + "--left", Vb = Tb + "--right", Wb = ib + "__active", Xb = ib + "__select", Yb = ib + "--hidden", Zb = ib + "--fullscreen", $b = ib + "__fullscreen-icon", _b = ib + "__error", ac = ib + "__loading", bc = ib + "__loaded", cc = bc + "--full", dc = bc + "--img", ec = ib + "__grabbing", fc = ib + "__img", gc = fc + "--full", hc = ib + "__dot", ic = ib + "__thumb", jc = ic + "-border", kc = ib + "__html", lc = ib + "__video", mc = lc + "-play", nc = lc + "-close", oc = ib + "__caption", pc = ib + "__caption__wrap", qc = ib + "__spinner", rc = '" tabindex="0" role="button', sc = d && d.fn.jquery.split("."); if (!sc || sc[0] < 1 || 1 == sc[0] && sc[1] < 8) throw "Fotorama requires jQuery 1.8 or later and will not run without it."; var tc = {}, uc = function (a, b, c) { function d(a) { r.cssText = a } function e(a, b) { return typeof a === b } function f(a, b) { return !!~("" + a).indexOf(b) } function g(a, b) { for (var d in a) { var e = a[d]; if (!f(e, "-") && r[e] !== c) return "pfx" == b ? e : !0 } return !1 } function h(a, b, d) { for (var f in a) { var g = b[a[f]]; if (g !== c) return d === !1 ? a[f] : e(g, "function") ? g.bind(d || b) : g } return !1 } function i(a, b, c) { var d = a.charAt(0).toUpperCase() + a.slice(1), f = (a + " " + u.join(d + " ") + d).split(" "); return e(b, "string") || e(b, "undefined") ? g(f, b) : (f = (a + " " + v.join(d + " ") + d).split(" "), h(f, b, c)) } var j, k, l, m = "2.6.2", n = {}, o = b.documentElement, p = "modernizr", q = b.createElement(p), r = q.style, s = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")), t = "Webkit Moz O ms", u = t.split(" "), v = t.toLowerCase().split(" "), w = {}, x = [], y = x.slice, z = function (a, c, d, e) { var f, g, h, i, j = b.createElement("div"), k = b.body, l = k || b.createElement("body"); if (parseInt(d, 10)) for (; d--;)h = b.createElement("div"), h.id = e ? e[d] : p + (d + 1), j.appendChild(h); return f = ["&#173;", '<style id="s', p, '">', a, "</style>"].join(""), j.id = p, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = o.style.overflow, o.style.overflow = "hidden", o.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), o.style.overflow = i), !!g }, A = {}.hasOwnProperty; l = e(A, "undefined") || e(A.call, "undefined") ? function (a, b) { return b in a && e(a.constructor.prototype[b], "undefined") } : function (a, b) { return A.call(a, b) }, Function.prototype.bind || (Function.prototype.bind = function (a) { var b = this; if ("function" != typeof b) throw new TypeError; var c = y.call(arguments, 1), d = function () { if (this instanceof d) { var e = function () { }; e.prototype = b.prototype; var f = new e, g = b.apply(f, c.concat(y.call(arguments))); return Object(g) === g ? g : f } return b.apply(a, c.concat(y.call(arguments))) }; return d }), w.csstransforms3d = function () { var a = !!i("perspective"); return a }; for (var B in w) l(w, B) && (k = B.toLowerCase(), n[k] = w[B](), x.push((n[k] ? "" : "no-") + k)); return n.addTest = function (a, b) { if ("object" == typeof a) for (var d in a) l(a, d) && n.addTest(d, a[d]); else { if (a = a.toLowerCase(), n[a] !== c) return n; b = "function" == typeof b ? b() : b, "undefined" != typeof enableClasses && enableClasses && (o.className += " " + (b ? "" : "no-") + a), n[a] = b } return n }, d(""), q = j = null, n._version = m, n._prefixes = s, n._domPrefixes = v, n._cssomPrefixes = u, n.testProp = function (a) { return g([a]) }, n.testAllProps = i, n.testStyles = z, n.prefixed = function (a, b, c) { return b ? i(a, b, c) : i(a, "pfx") }, n }(a, b), vc = { ok: !1, is: function () { return !1 }, request: function () { }, cancel: function () { }, event: "", prefix: "" }, wc = "webkit moz o ms khtml".split(" "); if ("undefined" != typeof b.cancelFullScreen) vc.ok = !0; else for (var xc = 0, yc = wc.length; yc > xc; xc++)if (vc.prefix = wc[xc], "undefined" != typeof b[vc.prefix + "CancelFullScreen"]) { vc.ok = !0; break } vc.ok && (vc.event = vc.prefix + "fullscreenchange", vc.is = function () { switch (this.prefix) { case "": return b.fullScreen; case "webkit": return b.webkitIsFullScreen; default: return b[this.prefix + "FullScreen"] } }, vc.request = function (a) { return "" === this.prefix ? a.requestFullScreen() : a[this.prefix + "RequestFullScreen"]() }, vc.cancel = function () { return "" === this.prefix ? b.cancelFullScreen() : b[this.prefix + "CancelFullScreen"]() }); var zc, Ac = { lines: 12, length: 5, width: 2, radius: 7, corners: 1, rotate: 15, color: "rgba(128, 128, 128, .75)", hwaccel: !0 }, Bc = { top: "auto", left: "auto", className: "" }; !function (a, b) { zc = b() }(this, function () { function a(a, c) { var d, e = b.createElement(a || "div"); for (d in c) e[d] = c[d]; return e } function c(a) { for (var b = 1, c = arguments.length; c > b; b++)a.appendChild(arguments[b]); return a } function d(a, b, c, d) { var e = ["opacity", b, ~~(100 * a), c, d].join("-"), f = .01 + c / d * 100, g = Math.max(1 - (1 - a) / b * (100 - f), a), h = m.substring(0, m.indexOf("Animation")).toLowerCase(), i = h && "-" + h + "-" || ""; return o[e] || (p.insertRule("@" + i + "keyframes " + e + "{0%{opacity:" + g + "}" + f + "%{opacity:" + a + "}" + (f + .01) + "%{opacity:1}" + (f + b) % 100 + "%{opacity:" + a + "}100%{opacity:" + g + "}}", p.cssRules.length), o[e] = 1), e } function f(a, b) { var c, d, f = a.style; for (b = b.charAt(0).toUpperCase() + b.slice(1), d = 0; d < n.length; d++)if (c = n[d] + b, f[c] !== e) return c; return f[b] !== e ? b : void 0 } function g(a, b) { for (var c in b) a.style[f(a, c) || c] = b[c]; return a } function h(a) { for (var b = 1; b < arguments.length; b++) { var c = arguments[b]; for (var d in c) a[d] === e && (a[d] = c[d]) } return a } function i(a) { for (var b = { x: a.offsetLeft, y: a.offsetTop }; a = a.offsetParent;)b.x += a.offsetLeft, b.y += a.offsetTop; return b } function j(a, b) { return "string" == typeof a ? a : a[b % a.length] } function k(a) { return "undefined" == typeof this ? new k(a) : void (this.opts = h(a || {}, k.defaults, q)) } function l() { function b(b, c) { return a("<" + b + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', c) } p.addRule(".spin-vml", "behavior:url(#default#VML)"), k.prototype.lines = function (a, d) { function e() { return g(b("group", { coordsize: k + " " + k, coordorigin: -i + " " + -i }), { width: k, height: k }) } function f(a, f, h) { c(m, c(g(e(), { rotation: 360 / d.lines * a + "deg", left: ~~f }), c(g(b("roundrect", { arcsize: d.corners }), { width: i, height: d.width, left: d.radius, top: -d.width >> 1, filter: h }), b("fill", { color: j(d.color, a), opacity: d.opacity }), b("stroke", { opacity: 0 })))) } var h, i = d.length + d.width, k = 2 * i, l = 2 * -(d.width + d.length) + "px", m = g(e(), { position: "absolute", top: l, left: l }); if (d.shadow) for (h = 1; h <= d.lines; h++)f(h, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)"); for (h = 1; h <= d.lines; h++)f(h); return c(a, m) }, k.prototype.opacity = function (a, b, c, d) { var e = a.firstChild; d = d.shadow && d.lines || 0, e && b + d < e.childNodes.length && (e = e.childNodes[b + d], e = e && e.firstChild, e = e && e.firstChild, e && (e.opacity = c)) } } var m, n = ["webkit", "Moz", "ms", "O"], o = {}, p = function () { var d = a("style", { type: "text/css" }); return c(b.getElementsByTagName("head")[0], d), d.sheet || d.styleSheet }(), q = { lines: 12, length: 7, width: 5, radius: 10, rotate: 0, corners: 1, color: "#000", direction: 1, speed: 1, trail: 100, opacity: .25, fps: 20, zIndex: 2e9, className: "spinner", top: "auto", left: "auto", position: "relative" }; k.defaults = {}, h(k.prototype, { spin: function (b) { this.stop(); var c, d, e = this, f = e.opts, h = e.el = g(a(0, { className: f.className }), { position: f.position, width: 0, zIndex: f.zIndex }), j = f.radius + f.length + f.width; if (b && (b.insertBefore(h, b.firstChild || null), d = i(b), c = i(h), g(h, { left: ("auto" == f.left ? d.x - c.x + (b.offsetWidth >> 1) : parseInt(f.left, 10) + j) + "px", top: ("auto" == f.top ? d.y - c.y + (b.offsetHeight >> 1) : parseInt(f.top, 10) + j) + "px" })), h.setAttribute("role", "progressbar"), e.lines(h, e.opts), !m) { var k, l = 0, n = (f.lines - 1) * (1 - f.direction) / 2, o = f.fps, p = o / f.speed, q = (1 - f.opacity) / (p * f.trail / 100), r = p / f.lines; !function s() { l++; for (var a = 0; a < f.lines; a++)k = Math.max(1 - (l + (f.lines - a) * r) % p * q, f.opacity), e.opacity(h, a * f.direction + n, k, f); e.timeout = e.el && setTimeout(s, ~~(1e3 / o)) }() } return e }, stop: function () { var a = this.el; return a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), this.el = e), this }, lines: function (b, e) { function f(b, c) { return g(a(), { position: "absolute", width: e.length + e.width + "px", height: e.width + "px", background: b, boxShadow: c, transformOrigin: "left", transform: "rotate(" + ~~(360 / e.lines * i + e.rotate) + "deg) translate(" + e.radius + "px,0)", borderRadius: (e.corners * e.width >> 1) + "px" }) } for (var h, i = 0, k = (e.lines - 1) * (1 - e.direction) / 2; i < e.lines; i++)h = g(a(), { position: "absolute", top: 1 + ~(e.width / 2) + "px", transform: e.hwaccel ? "translate3d(0,0,0)" : "", opacity: e.opacity, animation: m && d(e.opacity, e.trail, k + i * e.direction, e.lines) + " " + 1 / e.speed + "s linear infinite" }), e.shadow && c(h, g(f("#000", "0 0 4px #000"), { top: "2px" })), c(b, c(h, f(j(e.color, i), "0 0 1px rgba(0,0,0,.1)"))); return b }, opacity: function (a, b, c) { b < a.childNodes.length && (a.childNodes[b].style.opacity = c) } }); var r = g(a("group"), { behavior: "url(#default#VML)" }); return !f(r, "transform") && r.adj ? l() : m = f(r, "animation"), k }); var Cc, Dc, Ec = d(a), Fc = d(b), Gc = "quirks" === c.hash.replace("#", ""), Hc = uc.csstransforms3d, Ic = Hc && !Gc, Jc = Hc || "CSS1Compat" === b.compatMode, Kc = vc.ok, Lc = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i), Mc = !Ic || Lc, Nc = navigator.msPointerEnabled, Oc = "onwheel" in b.createElement("div") ? "wheel" : b.onmousewheel !== e ? "mousewheel" : "DOMMouseScroll", Pc = 250, Qc = 300, Rc = 1400, Sc = 5e3, Tc = 2, Uc = 64, Vc = 500, Wc = 333, Xc = "$stageFrame", Yc = "$navDotFrame", Zc = "$navThumbFrame", $c = "auto", _c = f([.1, 0, .25, 1]), ad = 99999, bd = "50%", cd = { width: null, minwidth: null, maxwidth: "100%", height: null, minheight: null, maxheight: null, ratio: null, margin: Tc, glimpse: 0, fit: "contain", position: bd, thumbposition: bd, nav: "dots", navposition: "bottom", navwidth: null, thumbwidth: Uc, thumbheight: Uc, thumbmargin: Tc, thumbborderwidth: Tc, thumbfit: "cover", allowfullscreen: !1, transition: "slide", clicktransition: null, transitionduration: Qc, captions: !0, hash: !1, startindex: 0, loop: !1, autoplay: !1, stopautoplayontouch: !0, keyboard: !1, arrows: !0, click: !0, swipe: !0, trackpad: !1, enableifsingleframe: !1, controlsonstart: !0, shuffle: !1, direction: "ltr", shadows: !0, spinner: null }, dd = { left: !0, right: !0, down: !1, up: !1, space: !1, home: !1, end: !1 }; G.stop = function (a) { G.ii[a] = !1 }; var ed, fd, gd, hd; jQuery.Fotorama = function (a, e) {
    function f() { d.each(yd, function (a, b) { if (!b.i) { b.i = me++; var c = A(b.video, !0); if (c) { var d = {}; b.video = c, b.img || b.thumb ? b.thumbsReady = !0 : d = B(b, yd, ie), C(yd, { img: d.img, thumb: d.thumb }, b.i, ie) } } }) } function g(a) { return Zd[a] || ie.fullScreen } function i(a) { var b = "keydown." + ib, c = ib + je, d = "keydown." + c, f = "resize." + c + " orientationchange." + c; a ? (Fc.on(d, function (a) { var b, c; Cd && 27 === a.keyCode ? (b = !0, md(Cd, !0, !0)) : (ie.fullScreen || e.keyboard && !ie.index) && (27 === a.keyCode ? (b = !0, ie.cancelFullScreen()) : a.shiftKey && 32 === a.keyCode && g("space") || 37 === a.keyCode && g("left") || 38 === a.keyCode && g("up") ? c = "<" : 32 === a.keyCode && g("space") || 39 === a.keyCode && g("right") || 40 === a.keyCode && g("down") ? c = ">" : 36 === a.keyCode && g("home") ? c = "<<" : 35 === a.keyCode && g("end") && (c = ">>")), (b || c) && Y(a), c && ie.show({ index: c, slow: a.altKey, user: !0 }) }), ie.index || Fc.off(b).on(b, "textarea, input, select", function (a) { !Dc.hasClass(jb) && a.stopPropagation() }), Ec.on(f, ie.resize)) : (Fc.off(d), Ec.off(f)) } function j(b) { b !== j.f && (b ? (a.html("").addClass(ib + " " + ke).append(qe).before(oe).before(pe), gb(ie)) : (qe.detach(), oe.detach(), pe.detach(), a.html(ne.urtext).removeClass(ke), hb(ie)), i(b), j.f = b) } function m() { yd = ie.data = yd || P(e.data) || D(a), zd = ie.size = yd.length, !xd.ok && e.shuffle && O(yd), f(), Je = y(Je), zd && j(!0) } function o() { var a = 2 > zd && !e.enableifsingleframe || Cd; Me.noMove = a || Sd, Me.noSwipe = a || !e.swipe, !Wd && se.toggleClass(Bb, !e.click && !Me.noMove && !Me.noSwipe), Nc && qe.toggleClass(sb, !Me.noSwipe) } function t(a) { a === !0 && (a = ""), e.autoplay = Math.max(+a || Sc, 1.5 * Vd) } function u() { function a(a, c) { b[a ? "add" : "remove"].push(c) } ie.options = e = R(e), Sd = "crossfade" === e.transition || "dissolve" === e.transition, Md = e.loop && (zd > 2 || Sd && (!Wd || "slide" !== Wd)), Vd = +e.transitionduration || Qc, Yd = "rtl" === e.direction, Zd = d.extend({}, e.keyboard && dd, e.keyboard); var b = { add: [], remove: [] }; zd > 1 || e.enableifsingleframe ? (Nd = e.nav, Pd = "top" === e.navposition, b.remove.push(Xb), we.toggle(!!e.arrows)) : (Nd = !1, we.hide()), Rb(), Bd = new zc(d.extend(Ac, e.spinner, Bc, { direction: Yd ? -1 : 1 })), Gc(), Hc(), e.autoplay && t(e.autoplay), Td = n(e.thumbwidth) || Uc, Ud = n(e.thumbheight) || Uc, Ne.ok = Pe.ok = e.trackpad && !Mc, o(), ed(e, [Le]), Od = "thumbs" === Nd, Od ? (lc(zd, "navThumb"), Ad = Be, he = Zc, J(oe, d.Fotorama.jst.style({ w: Td, h: Ud, b: e.thumbborderwidth, m: e.thumbmargin, s: je, q: !Jc })), ye.addClass(Lb).removeClass(Kb)) : "dots" === Nd ? (lc(zd, "navDot"), Ad = Ae, he = Yc, ye.addClass(Kb).removeClass(Lb)) : (Nd = !1, ye.removeClass(Lb + " " + Kb)), Nd && (Pd ? xe.insertBefore(re) : xe.insertAfter(re), wc.nav = !1, wc(Ad, ze, "nav")), Qd = e.allowfullscreen, Qd ? (De.prependTo(re), Rd = Kc && "native" === Qd) : (De.detach(), Rd = !1), a(Sd, ob), a(!Sd, pb), a(!e.captions, vb), a(Yd, tb), a("always" !== e.arrows, wb), Xd = e.shadows && !Mc, a(!Xd, rb), qe.addClass(b.add.join(" ")).removeClass(b.remove.join(" ")), Ke = d.extend({}, e) } function x(a) { return 0 > a ? (zd + a % zd) % zd : a >= zd ? a % zd : a } function y(a) { return h(a, 0, zd - 1) } function z(a) { return Md ? x(a) : y(a) } function E(a) { return a > 0 || Md ? a - 1 : !1 } function U(a) { return zd - 1 > a || Md ? a + 1 : !1 } function $() { Me.min = Md ? -1 / 0 : -r(zd - 1, Le.w, e.margin, Fd), Me.max = Md ? 1 / 0 : -r(0, Le.w, e.margin, Fd), Me.snap = Le.w + e.margin } function bb() { Oe.min = Math.min(0, Le.nw - ze.width()), Oe.max = 0, ze.toggleClass(Bb, !(Oe.noMove = Oe.min === Oe.max)) } function cb(a, b, c) { if ("number" == typeof a) { a = new Array(a); var e = !0 } return d.each(a, function (a, d) { if (e && (d = a), "number" == typeof d) { var f = yd[x(d)]; if (f) { var g = "$" + b + "Frame", h = f[g]; c.call(this, a, d, f, h, g, h && h.data()) } } }) } function fb(a, b, c, d) { (!$d || "*" === $d && d === Ld) && (a = q(e.width) || q(a) || Vc, b = q(e.height) || q(b) || Wc, ie.resize({ width: a, ratio: e.ratio || c || a / b }, 0, d !== Ld && "*")) } function Pb(a, b, c, f, g, h) { cb(a, b, function (a, i, j, k, l, m) { function n(a) { var b = x(i); fd(a, { index: b, src: w, frame: yd[b] }) } function o() { t.remove(), d.Fotorama.cache[w] = "error", j.html && "stage" === b || !y || y === w ? (!w || j.html || r ? "stage" === b && (k.trigger("f:load").removeClass(ac + " " + _b).addClass(bc), n("load"), fb()) : (k.trigger("f:error").removeClass(ac).addClass(_b), n("error")), m.state = "error", !(zd > 1 && yd[i] === j) || j.html || j.deleted || j.video || r || (j.deleted = !0, ie.splice(i, 1))) : (j[v] = w = y, Pb([i], b, c, f, g, !0)) } function p() { d.Fotorama.measures[w] = u.measures = d.Fotorama.measures[w] || { width: s.width, height: s.height, ratio: s.width / s.height }, fb(u.measures.width, u.measures.height, u.measures.ratio, i), t.off("load error").addClass(fc + (r ? " " + gc : "")).prependTo(k), I(t, (d.isFunction(c) ? c() : c) || Le, f || j.fit || e.fit, g || j.position || e.position), d.Fotorama.cache[w] = m.state = "loaded", setTimeout(function () { k.trigger("f:load").removeClass(ac + " " + _b).addClass(bc + " " + (r ? cc : dc)), "stage" === b ? n("load") : (j.thumbratio === $c || !j.thumbratio && e.thumbratio === $c) && (j.thumbratio = u.measures.ratio, vd()) }, 0) } function q() { var a = 10; G(function () { return !fe || !a-- && !Mc }, function () { p() }) } if (k) { var r = ie.fullScreen && j.full && j.full !== j.img && !m.$full && "stage" === b; if (!m.$img || h || r) { var s = new Image, t = d(s), u = t.data(); m[r ? "$full" : "$img"] = t; var v = "stage" === b ? r ? "full" : "img" : "thumb", w = j[v], y = r ? null : j["stage" === b ? "thumb" : "img"]; if ("navThumb" === b && (k = m.$wrap), !w) return void o(); d.Fotorama.cache[w] ? !function z() { "error" === d.Fotorama.cache[w] ? o() : "loaded" === d.Fotorama.cache[w] ? setTimeout(q, 0) : setTimeout(z, 100) }() : (d.Fotorama.cache[w] = "*", t.on("load", q).on("error", o)), m.state = "", s.src = w } } }) } function Qb(a) { Ie.append(Bd.spin().el).appendTo(a) } function Rb() { Ie.detach(), Bd && Bd.stop() } function Sb() { var a = Dd[Xc]; a && !a.data().state && (Qb(a), a.on("f:load f:error", function () { a.off("f:load f:error"), Rb() })) } function ec(a) { W(a, sd), X(a, function () { setTimeout(function () { Q(ye) }, 0), Rc({ time: Vd, guessIndex: d(this).data().eq, minMax: Oe }) }) } function lc(a, b) { cb(a, b, function (a, c, e, f, g, h) { if (!f) { f = e[g] = qe[g].clone(), h = f.data(), h.data = e; var i = f[0]; "stage" === b ? (e.html && d('<div class="' + kc + '"></div>').append(e._html ? d(e.html).removeAttr("id").html(e._html) : e.html).appendTo(f), e.caption && d(N(oc, N(pc, e.caption))).appendTo(f), e.video && f.addClass(zb).append(Fe.clone()), X(i, function () { setTimeout(function () { Q(re) }, 0), pd({ index: h.eq, user: !0 }) }), te = te.add(f)) : "navDot" === b ? (ec(i), Ae = Ae.add(f)) : "navThumb" === b && (ec(i), h.$wrap = f.children(":first"), Be = Be.add(f), e.video && h.$wrap.append(Fe.clone())) } }) } function sc(a, b, c, d) { return a && a.length && I(a, b, c, d) } function tc(a) { cb(a, "stage", function (a, b, c, f, g, h) { if (f) { var i = x(b), j = c.fit || e.fit, k = c.position || e.position; h.eq = i, Re[Xc][i] = f.css(d.extend({ left: Sd ? 0 : r(b, Le.w, e.margin, Fd) }, Sd && l(0))), F(f[0]) && (f.appendTo(se), md(c.$video)), sc(h.$img, Le, j, k), sc(h.$full, Le, j, k) } }) } function uc(a, b) { if ("thumbs" === Nd && !isNaN(a)) { var c = -a, f = -a + Le.nw; Be.each(function () { var a = d(this), g = a.data(), h = g.eq, i = function () { return { h: Ud, w: g.w } }, j = i(), k = yd[h] || {}, l = k.thumbfit || e.thumbfit, m = k.thumbposition || e.thumbposition; j.w = g.w, g.l + g.w < c || g.l > f || sc(g.$img, j, l, m) || b && Pb([h], "navThumb", i, l, m) }) } } function wc(a, b, c) { if (!wc[c]) { var f = "nav" === c && Od, g = 0; b.append(a.filter(function () { for (var a, b = d(this), c = b.data(), e = 0, f = yd.length; f > e; e++)if (c.data === yd[e]) { a = !0, c.eq = e; break } return a || b.remove() && !1 }).sort(function (a, b) { return d(a).data().eq - d(b).data().eq }).each(function () { if (f) { var a = d(this), b = a.data(), c = Math.round(Ud * b.data.thumbratio) || Td; b.l = g, b.w = c, a.css({ width: c }), g += c + e.thumbmargin } })), wc[c] = !0 } } function xc(a) { return a - Se > Le.w / 3 } function yc(a) { return !(Md || Je + a && Je - zd + a || Cd) } function Gc() { var a = yc(0), b = yc(1); ue.toggleClass(Eb, a).attr(V(a)), ve.toggleClass(Eb, b).attr(V(b)) } function Hc() { Ne.ok && (Ne.prevent = { "<": yc(0), ">": yc(1) }) } function Lc(a) { var b, c, d = a.data(); return Od ? (b = d.l, c = d.w) : (b = a.position().left, c = a.width()), { c: b + c / 2, min: -b + 10 * e.thumbmargin, max: -b + Le.w - c - 10 * e.thumbmargin } } function Oc(a) { var b = Dd[he].data(); _(Ce, { time: 1.2 * a, pos: b.l, width: b.w - 2 * e.thumbborderwidth }) } function Rc(a) { var b = yd[a.guessIndex][he]; if (b) { var c = Oe.min !== Oe.max, d = a.minMax || c && Lc(Dd[he]), e = c && (a.keep && Rc.l ? Rc.l : h((a.coo || Le.nw / 2) - Lc(b).c, d.min, d.max)), f = c && h(e, Oe.min, Oe.max), g = 1.1 * a.time; _(ze, { time: g, pos: f || 0, onEnd: function () { uc(f, !0) } }), ld(ye, K(f, Oe.min, Oe.max)), Rc.l = e } } function Tc() { _c(he), Qe[he].push(Dd[he].addClass(Wb)) } function _c(a) { for (var b = Qe[a]; b.length;)b.shift().removeClass(Wb) } function bd(a) { var b = Re[a]; d.each(Ed, function (a, c) { delete b[x(c)] }), d.each(b, function (a, c) { delete b[a], c.detach() }) } function cd(a) { Fd = Gd = Je; var b = Dd[Xc]; b && (_c(Xc), Qe[Xc].push(b.addClass(Wb)), a || ie.show.onEnd(!0), v(se, 0, !0), bd(Xc), tc(Ed), $(), bb()) } function ed(a, b) { a && d.each(b, function (b, c) { c && d.extend(c, { width: a.width || c.width, height: a.height, minwidth: a.minwidth, maxwidth: a.maxwidth, minheight: a.minheight, maxheight: a.maxheight, ratio: S(a.ratio) }) }) } function fd(b, c) { a.trigger(ib + ":" + b, [ie, c]) } function gd() { clearTimeout(hd.t), fe = 1, e.stopautoplayontouch ? ie.stopAutoplay() : ce = !0 } function hd() { fe && (e.stopautoplayontouch || (id(), jd()), hd.t = setTimeout(function () { fe = 0 }, Qc + Pc)) } function id() { ce = !(!Cd && !de) } function jd() { if (clearTimeout(jd.t), G.stop(jd.w), !e.autoplay || ce) return void (ie.autoplay && (ie.autoplay = !1, fd("stopautoplay"))); ie.autoplay || (ie.autoplay = !0, fd("startautoplay")); var a = Je, b = Dd[Xc].data(); jd.w = G(function () { return b.state || a !== Je }, function () { jd.t = setTimeout(function () { if (!ce && a === Je) { var b = Kd, c = yd[b][Xc].data(); jd.w = G(function () { return c.state || b !== Kd }, function () { ce || b !== Kd || ie.show(Md ? Z(!Yd) : Kd) }) } }, e.autoplay) }) } function kd() { ie.fullScreen && (ie.fullScreen = !1, Kc && vc.cancel(le), Dc.removeClass(jb), Cc.removeClass(jb), a.removeClass(Zb).insertAfter(pe), Le = d.extend({}, ee), md(Cd, !0, !0), rd("x", !1), ie.resize(), Pb(Ed, "stage"), Q(Ec, ae, _d), fd("fullscreenexit")) } function ld(a, b) { Xd && (a.removeClass(Ub + " " + Vb), b && !Cd && a.addClass(b.replace(/^|\s/g, " " + Tb + "--"))) } function md(a, b, c) { b && (qe.removeClass(nb), Cd = !1, o()), a && a !== Cd && (a.remove(), fd("unloadvideo")), c && (id(), jd()) } function nd(a) { qe.toggleClass(qb, a) } function od(a) { if (!Me.flow) { var b = a ? a.pageX : od.x, c = b && !yc(xc(b)) && e.click; od.p !== c && re.toggleClass(Cb, c) && (od.p = c, od.x = b) } } function pd(a) { clearTimeout(pd.t), e.clicktransition && e.clicktransition !== e.transition ? setTimeout(function () { var b = e.transition; ie.setOptions({ transition: e.clicktransition }), Wd = b, pd.t = setTimeout(function () { ie.show(a) }, 10) }, 0) : ie.show(a) } function qd(a, b) { var c = a.target, f = d(c); f.hasClass(mc) ? ie.playVideo() : c === Ee ? ie.toggleFullScreen() : Cd ? c === He && md(Cd, !0, !0) : b ? nd() : e.click && pd({ index: a.shiftKey || Z(xc(a._x)), slow: a.altKey, user: !0 }) } function rd(a, b) { Me[a] = Oe[a] = b } function sd(a) { var b = d(this).data().eq; pd({ index: b, slow: a.altKey, user: !0, coo: a._x - ye.offset().left }) } function td(a) { pd({ index: we.index(this) ? ">" : "<", slow: a.altKey, user: !0 }) } function ud(a) { X(a, function () { setTimeout(function () { Q(re) }, 0), nd(!1) }) } function vd() { if (m(), u(), !vd.i) { vd.i = !0; var a = e.startindex; (a || e.hash && c.hash) && (Ld = L(a || c.hash.replace(/^#/, ""), yd, 0 === ie.index || a, a)), Je = Fd = Gd = Hd = Ld = z(Ld) || 0 } if (zd) { if (wd()) return; Cd && md(Cd, !0), Ed = [], bd(Xc), vd.ok = !0, ie.show({ index: Je, time: 0 }), ie.resize() } else ie.destroy() } function wd() { return !wd.f === Yd ? (wd.f = Yd, Je = zd - 1 - Je, ie.reverse(), !0) : void 0 } function xd() { xd.ok || (xd.ok = !0, fd("ready")) } Cc = d("html"), Dc = d("body"); var yd, zd, Ad, Bd, Cd, Dd, Ed, Fd, Gd, Hd, Id, Jd, Kd, Ld, Md, Nd, Od, Pd, Qd, Rd, Sd, Td, Ud, Vd, Wd, Xd, Yd, Zd, $d, _d, ae, be, ce, de, ee, fe, ge, he, ie = this, je = d.now(), ke = ib + je, le = a[0], me = 1, ne = a.data(), oe = d("<style></style>"), pe = d(N(Yb)), qe = d(N(kb)), re = d(N(xb)).appendTo(qe), se = (re[0], d(N(Ab)).appendTo(re)), te = d(), ue = d(N(Db + " " + Fb + rc)), ve = d(N(Db + " " + Gb + rc)), we = ue.add(ve).appendTo(re), xe = d(N(Ib)), ye = d(N(Hb)).appendTo(xe), ze = d(N(Jb)).appendTo(ye), Ae = d(), Be = d(), Ce = (se.data(), ze.data(), d(N(jc)).appendTo(ze)), De = d(N($b + rc)), Ee = De[0], Fe = d(N(mc)), Ge = d(N(nc)).appendTo(re), He = Ge[0], Ie = d(N(qc)), Je = !1, Ke = {}, Le = {}, Me = {}, Ne = {}, Oe = {}, Pe = {}, Qe = {}, Re = {}, Se = 0, Te = [];
    qe[Xc] = d(N(yb)), qe[Zc] = d(N(Mb + " " + Ob + rc, N(ic))), qe[Yc] = d(N(Mb + " " + Nb + rc, N(hc))), Qe[Xc] = [], Qe[Zc] = [], Qe[Yc] = [], Re[Xc] = {}, qe.addClass(Ic ? mb : lb).toggleClass(qb, !e.controlsonstart), ne.fotorama = this, ie.startAutoplay = function (a) { return ie.autoplay ? this : (ce = de = !1, t(a || e.autoplay), jd(), this) }, ie.stopAutoplay = function () { return ie.autoplay && (ce = de = !0, jd()), this }, ie.show = function (a) { var b; "object" != typeof a ? (b = a, a = {}) : b = a.index, b = ">" === b ? Gd + 1 : "<" === b ? Gd - 1 : "<<" === b ? 0 : ">>" === b ? zd - 1 : b, b = isNaN(b) ? L(b, yd, !0) : b, b = "undefined" == typeof b ? Je || 0 : b, ie.activeIndex = Je = z(b), Id = E(Je), Jd = U(Je), Kd = x(Je + (Yd ? -1 : 1)), Ed = [Je, Id, Jd], Gd = Md ? b : Je; var c = Math.abs(Hd - Gd), d = w(a.time, function () { return Math.min(Vd * (1 + (c - 1) / 12), 2 * Vd) }), f = a.overPos; a.slow && (d *= 10); var g = Dd; ie.activeFrame = Dd = yd[Je]; var i = g === Dd && !a.user; md(Cd, Dd.i !== yd[x(Fd)].i), lc(Ed, "stage"), tc(Mc ? [Gd] : [Gd, E(Gd), U(Gd)]), rd("go", !0), i || fd("show", { user: a.user, time: d }), ce = !0; var j = ie.show.onEnd = function (b) { if (!j.ok) { if (j.ok = !0, b || cd(!0), i || fd("showend", { user: a.user }), !b && Wd && Wd !== e.transition) return ie.setOptions({ transition: Wd }), void (Wd = !1); Sb(), Pb(Ed, "stage"), rd("go", !1), Hc(), od(), id(), jd() } }; if (Sd) { var k = Dd[Xc], l = Je !== Hd ? yd[Hd][Xc] : null; ab(k, l, te, { time: d, method: e.transition, onEnd: j }, Te) } else _(se, { pos: -r(Gd, Le.w, e.margin, Fd), overPos: f, time: d, onEnd: j }); if (Gc(), Nd) { Tc(); var m = y(Je + h(Gd - Hd, -1, 1)); Rc({ time: d, coo: m !== Je && a.coo, guessIndex: "undefined" != typeof a.coo ? m : Je, keep: i }), Od && Oc(d) } return be = "undefined" != typeof Hd && Hd !== Je, Hd = Je, e.hash && be && !ie.eq && H(Dd.id || Je + 1), this }, ie.requestFullScreen = function () { return Qd && !ie.fullScreen && (_d = Ec.scrollTop(), ae = Ec.scrollLeft(), Q(Ec), rd("x", !0), ee = d.extend({}, Le), a.addClass(Zb).appendTo(Dc.addClass(jb)), Cc.addClass(jb), md(Cd, !0, !0), ie.fullScreen = !0, Rd && vc.request(le), ie.resize(), Pb(Ed, "stage"), Sb(), fd("fullscreenenter")), this }, ie.cancelFullScreen = function () { return Rd && vc.is() ? vc.cancel(b) : kd(), this }, ie.toggleFullScreen = function () { return ie[(ie.fullScreen ? "cancel" : "request") + "FullScreen"]() }, T(b, vc.event, function () { !yd || vc.is() || Cd || kd() }), ie.resize = function (a) { if (!yd) return this; var b = arguments[1] || 0, c = arguments[2]; ed(ie.fullScreen ? { width: "100%", maxwidth: null, minwidth: null, height: "100%", maxheight: null, minheight: null } : R(a), [Le, c || ie.fullScreen || e]); var d = Le.width, f = Le.height, g = Le.ratio, i = Ec.height() - (Nd ? ye.height() : 0); return q(d) && (qe.addClass(ub).css({ width: d, minWidth: Le.minwidth || 0, maxWidth: Le.maxwidth || ad }), d = Le.W = Le.w = qe.width(), Le.nw = Nd && p(e.navwidth, d) || d, e.glimpse && (Le.w -= Math.round(2 * (p(e.glimpse, d) || 0))), se.css({ width: Le.w, marginLeft: (Le.W - Le.w) / 2 }), f = p(f, i), f = f || g && d / g, f && (d = Math.round(d), f = Le.h = Math.round(h(f, p(Le.minheight, i), p(Le.maxheight, i))), re.stop().animate({ width: d, height: f }, b, function () { qe.removeClass(ub) }), cd(), Nd && (ye.stop().animate({ width: Le.nw }, b), Rc({ guessIndex: Je, time: b, keep: !0 }), Od && wc.nav && Oc(b)), $d = c || !0, xd())), Se = re.offset().left, this }, ie.setOptions = function (a) { return d.extend(e, a), vd(), this }, ie.shuffle = function () { return yd && O(yd) && vd(), this }, ie.destroy = function () { return ie.cancelFullScreen(), ie.stopAutoplay(), yd = ie.data = null, j(), Ed = [], bd(Xc), vd.ok = !1, this }, ie.playVideo = function () { var a = Dd, b = a.video, c = Je; return "object" == typeof b && a.videoReady && (Rd && ie.fullScreen && ie.cancelFullScreen(), G(function () { return !vc.is() || c !== Je }, function () { c === Je && (a.$video = a.$video || d(d.Fotorama.jst.video(b)), a.$video.appendTo(a[Xc]), qe.addClass(nb), Cd = a.$video, o(), we.blur(), De.blur(), fd("loadvideo")) })), this }, ie.stopVideo = function () { return md(Cd, !0, !0), this }, re.on("mousemove", od), Me = db(se, { onStart: gd, onMove: function (a, b) { ld(re, b.edge) }, onTouchEnd: hd, onEnd: function (a) { ld(re); var b = (Nc && !ge || a.touch) && e.arrows && "always" !== e.arrows; if (a.moved || b && a.pos !== a.newPos && !a.control) { var c = s(a.newPos, Le.w, e.margin, Fd); ie.show({ index: c, time: Sd ? Vd : a.time, overPos: a.overPos, user: !0 }) } else a.aborted || a.control || qd(a.startEvent, b) }, timeLow: 1, timeHigh: 1, friction: 2, select: "." + Xb + ", ." + Xb + " *", $wrap: re }), Oe = db(ze, { onStart: gd, onMove: function (a, b) { ld(ye, b.edge) }, onTouchEnd: hd, onEnd: function (a) { function b() { Rc.l = a.newPos, id(), jd(), uc(a.newPos, !0) } if (a.moved) a.pos !== a.newPos ? (ce = !0, _(ze, { time: a.time, pos: a.newPos, overPos: a.overPos, onEnd: b }), uc(a.newPos), Xd && ld(ye, K(a.newPos, Oe.min, Oe.max))) : b(); else { var c = a.$target.closest("." + Mb, ze)[0]; c && sd.call(c, a.startEvent) } }, timeLow: .5, timeHigh: 2, friction: 5, $wrap: ye }), Ne = eb(re, { shift: !0, onEnd: function (a, b) { gd(), hd(), ie.show({ index: b, slow: a.altKey }) } }), Pe = eb(ye, { onEnd: function (a, b) { gd(), hd(); var c = v(ze) + .25 * b; ze.css(k(h(c, Oe.min, Oe.max))), Xd && ld(ye, K(c, Oe.min, Oe.max)), Pe.prevent = { "<": c >= Oe.max, ">": c <= Oe.min }, clearTimeout(Pe.t), Pe.t = setTimeout(function () { Rc.l = c, uc(c, !0) }, Pc), uc(c) } }), qe.hover(function () { setTimeout(function () { fe || nd(!(ge = !0)) }, 0) }, function () { ge && nd(!(ge = !1)) }), M(we, function (a) { Y(a), td.call(this, a) }, { onStart: function () { gd(), Me.control = !0 }, onTouchEnd: hd }), we.each(function () { W(this, function (a) { td.call(this, a) }), ud(this) }), W(Ee, ie.toggleFullScreen), ud(Ee), d.each("load push pop shift unshift reverse sort splice".split(" "), function (a, b) { ie[b] = function () { return yd = yd || [], "load" !== b ? Array.prototype[b].apply(yd, arguments) : arguments[0] && "object" == typeof arguments[0] && arguments[0].length && (yd = P(arguments[0])), vd(), ie } }), vd()
  }, d.fn.fotorama = function (b) { return this.each(function () { var c = this, e = d(this), f = e.data(), g = f.fotorama; g ? g.setOptions(b, !0) : G(function () { return !E(c) }, function () { f.urtext = e.html(), new d.Fotorama(e, d.extend({}, cd, a.fotoramaDefaults, b, f)) }) }) }, d.Fotorama.instances = [], d.Fotorama.cache = {}, d.Fotorama.measures = {}, d = d || {}, d.Fotorama = d.Fotorama || {}, d.Fotorama.jst = d.Fotorama.jst || {}, d.Fotorama.jst.style = function (a) { { var b, c = ""; tc.escape } return c += ".fotorama" + (null == (b = a.s) ? "" : b) + " .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:" + (null == (b = a.m) ? "" : b) + "px;\nheight:" + (null == (b = a.h) ? "" : b) + "px}\n.fotorama" + (null == (b = a.s) ? "" : b) + " .fotorama__thumb-border{\nheight:" + (null == (b = a.h - a.b * (a.q ? 0 : 2)) ? "" : b) + "px;\nborder-width:" + (null == (b = a.b) ? "" : b) + "px;\nmargin-top:" + (null == (b = a.m) ? "" : b) + "px}" }, d.Fotorama.jst.video = function (a) { function b() { c += d.call(arguments, "") } var c = "", d = (tc.escape, Array.prototype.join); return c += '<div class="fotorama__video"><iframe src="', b(("youtube" == a.type ? a.p + "youtube.com/embed/" + a.id + "?autoplay=1" : "vimeo" == a.type ? a.p + "player.vimeo.com/video/" + a.id + "?autoplay=1&badge=0" : a.id) + (a.s && "custom" != a.type ? "&" + a.s : "")), c += '" frameborder="0" allowfullscreen></iframe></div>\n' }, d(function () { d("." + ib + ':not([data-auto="false"])').fotorama() })
}(window, document, location, "undefined" != typeof jQuery && jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:65:"/local/templates/Vivon2019/js/jquery.sticky-kit.js?15832928906108";s:6:"source";s:50:"/local/templates/Vivon2019/js/jquery.sticky-kit.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
// Generated by CoffeeScript 1.7.1

/**
@license Sticky-kit v1.0.4 | WTFPL | Leaf Corcoran 2014 | http://leafo.net
 */

(function () {
  var $, win;

  $ = this.jQuery;

  win = $(window);

  $.fn.stick_in_parent = function (opts) {
    var elm, inner_scrolling, offset_top, parent_selector, sticky_class, _fn, _i, _len;
    if (opts == null) {
      opts = {};
    }
    sticky_class = opts.sticky_class, inner_scrolling = opts.inner_scrolling, parent_selector = opts.parent, offset_top = opts.offset_top;
    if (offset_top == null) {
      offset_top = 0;
    }
    if (parent_selector == null) {
      parent_selector = void 0;
    }
    if (inner_scrolling == null) {
      inner_scrolling = true;
    }
    if (sticky_class == null) {
      sticky_class = "is_stuck";
    }
    _fn = function (elm, padding_bottom, parent_top, parent_height, top, height, el_float) {
      var bottomed, detach, fixed, last_pos, offset, parent, recalc, recalc_and_tick, spacer, tick;
      if (elm.data("sticky_kit")) {
        return;
      }
      elm.data("sticky_kit", true);
      parent = elm.parent();
      if (parent_selector != null) {
        parent = parent.closest(parent_selector);
      }
      if (!parent.length) {
        throw "failed to find stick parent";
      }
      fixed = false;
      bottomed = false;
      spacer = $("<div />");
      spacer.css('position', elm.css('position'));
      recalc = function () {
        var border_top, padding_top, restore;
        border_top = parseInt(parent.css("border-top-width"), 10);
        padding_top = parseInt(parent.css("padding-top"), 10);
        padding_bottom = parseInt(parent.css("padding-bottom"), 10);
        parent_top = parent.offset().top + border_top + padding_top;
        parent_height = parent.height();
        restore = fixed ? (fixed = false, bottomed = false, elm.insertAfter(spacer).css({
          position: "",
          top: "",
          width: "",
          bottom: ""
        }), spacer.detach(), true) : void 0;
        top = elm.offset().top - parseInt(elm.css("margin-top"), 10) - offset_top;
        height = elm.outerHeight(true);
        el_float = elm.css("float");
        spacer.css({
          width: elm.outerWidth(true),
          height: height,
          display: elm.css("display"),
          "vertical-align": elm.css("vertical-align"),
          "float": el_float
        });
        if (restore) {
          return tick();
        }
      };
      recalc();
      if (height === parent_height) {
        return;
      }
      last_pos = void 0;
      offset = offset_top;
      tick = function () {
        var css, delta, scroll, will_bottom, win_height;
        scroll = win.scrollTop();
        if (last_pos != null) {
          delta = scroll - last_pos;
        }
        last_pos = scroll;
        if (fixed) {
          will_bottom = scroll + height + offset > parent_height + parent_top;
          if (bottomed && !will_bottom) {
            bottomed = false;
            elm.css({
              position: "fixed",
              bottom: "",
              top: offset
            }).trigger("sticky_kit:unbottom");
          }
          if (scroll < top) {
            fixed = false;
            offset = offset_top;
            if (el_float === "left" || el_float === "right") {
              elm.insertAfter(spacer);
            }
            spacer.detach();
            css = {
              position: "",
              width: "",
              top: ""
            };
            elm.css(css).removeClass(sticky_class).trigger("sticky_kit:unstick");
          }
          if (inner_scrolling) {
            win_height = win.height();
            if (height > win_height) {
              if (!bottomed) {
                offset -= delta;
                offset = Math.max(win_height - height, offset);
                offset = Math.min(offset_top, offset);
                if (fixed) {
                  elm.css({
                    top: offset + "px"
                  });
                }
              }
            }
          }
        } else {
          if (scroll > top) {
            fixed = true;
            css = {
              position: "fixed",
              top: offset
            };
            css.width = elm.css("box-sizing") === "border-box" ? elm.outerWidth() + "px" : elm.width() + "px";
            elm.css(css).addClass(sticky_class).after(spacer);
            if (el_float === "left" || el_float === "right") {
              spacer.append(elm);
            }
            elm.trigger("sticky_kit:stick");
          }
        }
        if (fixed) {
          if (will_bottom == null) {
            will_bottom = scroll + height + offset > parent_height + parent_top;
          }
          if (!bottomed && will_bottom) {
            bottomed = true;
            if (parent.css("position") === "static") {
              parent.css({
                position: "relative"
              });
            }
            return elm.css({
              position: "absolute",
              bottom: padding_bottom,
              top: "auto"
            }).trigger("sticky_kit:bottom");
          }
        }
      };
      recalc_and_tick = function () {
        recalc();
        return tick();
      };
      detach = function () {
        win.off("scroll", tick);
        $(document.body).off("sticky_kit:recalc", recalc_and_tick);
        elm.off("sticky_kit:detach", detach);
        elm.removeData("sticky_kit");
        elm.css({
          position: "",
          bottom: "",
          top: ""
        });
        parent.position("position", "");
        if (fixed) {
          elm.insertAfter(spacer).removeClass(sticky_class);
          return spacer.remove();
        }
      };
      win.on("touchmove", tick);
      win.on("scroll", tick);
      win.on("resize", recalc_and_tick);
      $(document.body).on("sticky_kit:recalc", recalc_and_tick);
      elm.on("sticky_kit:detach", detach);
      return setTimeout(tick, 0);
    };
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      elm = this[_i];
      _fn($(elm));
    }
    return this;
  };

}).call(this);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:59:"/local/templates/Vivon2019/js/menu_script.js?15832928901337";s:6:"source";s:44:"/local/templates/Vivon2019/js/menu_script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(window).load(function () {
  /*--Main menu--*/
  $('.root div > ul').each(function () {
    if ($(this).closest('div').width() < 181) {
      $width = 180;
    } else {
      $width = $(this).closest('div').width() - 1;
    }
    $(this).width($width);
    $(this).filter(':first').width($width + 1);
  });
  $('.root div > ul').each(function () {
    $(this).find('li').filter(':last').addClass('popup-last');
  });
  // $('.root div > a').hover(function() {
  // $(this).closest('div').find('ul').eq(0).slideDown();
  // });
  // $('.root div').mouseleave(function() {
  // $(this).find('ul').eq(0).slideUp();
  // });

  /*--Left menu--*/
  $('#vertical-multilevel-menu li ul').hide();
  /*$('#vertical-multilevel-menu a').filter('.item-selected').show();*/
  $('#vertical-multilevel-menu li a').each(function () {
    if ($(this).hasClass('item-selected')) {
      $(this).closest('ul').show();
    };
    if ($(this).hasClass('root-item-selected')) {
      $(this).next('ul').show();
    };
  });
  /*$('#vertical-multilevel-menu li a').click(function() {
    if(!$(this).next('ul').is(':visible') && $(this).parent('li').find('ul').size() > 0) {
      $(this).closest('ul').find('ul').slideUp();
      $(this).next('ul').slideDown();
      return false;
    };
  });*/
  $('#vertical-multilevel-menu > li').each(function () {
    $(this).find('ul:first > li:last').addClass('menu-catalog-last');
  });
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:69:"/local/templates/Vivon2019/js/jquery.jcarousellite.js?158329289021420";s:6:"source";s:53:"/local/templates/Vivon2019/js/jquery.jcarousellite.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/

(function ($) {
  $.jCarouselLite = {
    version: '1.9.3',
    curr: 0
  };

  $.fn.anim = typeof $.fn.velocity !== 'undefined' ? $.fn.velocity : $.fn.animate;

  $.fn.jCarouselLite = function (options) {
    var o = $.extend(true, {}, $.fn.jCarouselLite.defaults, options),
      ceil = Math.ceil,
      mabs = Math.abs;

    this.each(function () {

      var beforeCirc, afterCirc, pageNav, pageNavCount, resize,
        li, itemLength, curr,
        prepResize, touchEvents, $btnsGo,
        isTouch = 'ontouchend' in document,
        styles = { div: {}, ul: {}, li: {} },
        // firstCss = true,
        running = false,
        animCss = o.vertical ? 'top' : 'left',
        aniProps = {},
        sizeProp = o.vertical ? 'height' : 'width',
        outerMethod = o.vertical ? 'outerHeight' : 'outerWidth',
        self = this,
        div = $(this),
        ul = div.find(o.containerSelector).eq(0),
        tLi = ul.children(o.itemSelector),
        tl = tLi.length,
        visibleNum = o.visible,
        // need visibleCeil and visibleFloor in case we want a fractional number of visible items at a time
        visibleCeil = ceil(visibleNum),
        visibleFloor = Math.floor(visibleNum),
        start = Math.min(o.start, tl - 1),
        direction = 1,
        activeBtnOffset = 0,
        activeBtnTypes = {},
        startTouch = {},
        endTouch = {},
        axisPrimary = o.vertical ? 'y' : 'x',
        axisSecondary = o.vertical ? 'x' : 'y';


      var init = o.init.call(this, o, tLi);
      // bail out for this carousel if the o.init() callback returns `false`
      if (init === false) {
        return;
      }

      var makeCircular = function () {
        if (beforeCirc && beforeCirc.length) {
          beforeCirc.remove();
          afterCirc.remove();
        }
        tLi = ul.children(o.liSelector);
        tl = tLi.length;
        beforeCirc = tLi.slice(tl - visibleCeil).clone(true).each(fixIds);
        afterCirc = tLi.slice(0, visibleCeil).clone(true).each(fixIds);
        ul.prepend(beforeCirc)
          .append(afterCirc);
        li = ul.children(o.liSelector);
        itemLength = li.length;
      };

      div.data('dirjc', direction);
      div.data(animCss + 'jc', div.css(animCss));

      if (o.circular) {

        makeCircular();
        start += visibleCeil;
        activeBtnOffset = visibleCeil;

      } else {
        li = ul.children(o.liSelector);
        itemLength = li.length;
      }

      if (o.btnGo && o.btnGo.length) {

        if ($.isArray(o.btnGo) && typeof o.btnGo[0] === 'string') {
          $btnsGo = $(o.btnGo.join());
        } else {
          $btnsGo = $(o.btnGo);
        }

        $btnsGo.each(function (i) {
          $(this).bind('click.jc', function (event) {
            event.preventDefault();
            var btnInfo = {
              btnGo: this,
              btnGoIndex: i
            };
            return go(o.circular ? visibleNum + i : i, btnInfo);
          });
        });
        activeBtnTypes.go = 1;
      }

      var setActive = function (i, types) {
        i = ceil(i);

        // Set active class on the appropriate carousel item
        li.filter('.' + o.activeClass).removeClass(o.activeClass);
        li.eq(i).addClass(o.activeClass);

        var activeBtnIndex = (i - activeBtnOffset) % tl,
          visEnd = activeBtnIndex + visibleFloor;

        if (types.go) {
          // remove active and visible classes from all the go buttons
          $btnsGo.removeClass(o.activeClass).removeClass(o.visibleClass);
          // add active class to the go button corresponding to the first visible slide
          $btnsGo.eq(activeBtnIndex).addClass(o.activeClass);
          // add visible class to go buttons corresponding to all visible slides
          $btnsGo.slice(activeBtnIndex, activeBtnIndex + visibleFloor).addClass(o.visibleClass);

          if (visEnd > $btnsGo.length) {
            $btnsGo.slice(0, visEnd - $btnsGo.length).addClass(o.visibleClass);
          }
        }

        if (types.pager) {
          pageNav.removeClass(o.activeClass);
          pageNav.eq(ceil(activeBtnIndex / visibleNum)).addClass(o.activeClass);
        }
        return activeBtnIndex;
      };

      curr = start;

      $.jCarouselLite.curr = curr;

      var getDimensions = function (reset) {
        var liSize, ulSize, divSize;

        if (reset) {

          styles.div[sizeProp] = '';
          styles.li = {
            width: '',
            height: ''
          };
          // bail out with the reset styles
          return styles;
        }

        // Full li size(incl margin)-Used for animation
        liSize = li[outerMethod](true);

        // size of full ul(total length, not just for the visible items)
        ulSize = liSize * itemLength;

        // size of entire div(total length for just the visible items)
        divSize = liSize * visibleNum;

        styles.div[sizeProp] = divSize + 'px';
        styles.ul[sizeProp] = ulSize + 'px';
        styles.ul[animCss] = -(curr * liSize) + 'px';
        styles.li = {
          width: li.width(),
          height: li.height()
        };
        styles.liSize = liSize;
        return styles;
      };


      var setDimensions = function (reset) {
        var css, tmpDivSize;
        var prelimCss = {
          div: { visibility: 'visible', position: 'relative', zIndex: 2, left: '0' },
          ul: { margin: '0', padding: '0', position: 'relative', listStyleType: 'none', zIndex: 1 },
          li: { overflow: o.vertical ? 'hidden' : 'visible', 'float': o.vertical ? 'none' : 'left' }
        };

        if (reset) {
          css = getDimensions(true);
          div.css(css.div);
          ul.css(css.ul);
          li.css(css.li);
        }

        css = getDimensions();

        if (o.autoCSS) {
          $.extend(true, css, prelimCss);
          // firstCss = false;
        }

        if (o.autoWidth) {
          tmpDivSize = parseInt(div.css(sizeProp), 10);
          styles.liSize = tmpDivSize / o.visible;
          css.li[sizeProp] = styles.liSize - (li[outerMethod](true) - parseInt(li.css(sizeProp), 10));

          // Need to adjust other settings to fit with li width
          css.ul[sizeProp] = (styles.liSize * itemLength) + 'px';
          css.ul[animCss] = -(curr * styles.liSize) + 'px';
          css.div[sizeProp] = tmpDivSize;
        }

        if (o.autoCSS) {
          li.css(css.li);
          ul.css(css.ul);
          div.css(css.div);
        }
      };

      setDimensions();

      // set up timed advancer
      var advanceCounter = 0,
        autoStop = iterations(tl, o),
        autoScrollBy = typeof o.auto === 'number' ? o.auto : o.scroll;

      var advancer = function () {
        self.setAutoAdvance = setTimeout(function () {

          if (!autoStop || autoStop > advanceCounter) {
            direction = div.data('dirjc');
            go(curr + (direction * autoScrollBy), { auto: true });
            advanceCounter++;
            advancer();
          }
        }, o.timeout);
      };

      // bind click handlers to prev and next buttons, if set
      $.each(['btnPrev', 'btnNext'], function (index, btn) {
        if (o[btn]) {
          o['$' + btn] = $.isFunction(o[btn]) ? o[btn].call(div[0]) : $(o[btn]);
          o['$' + btn].bind('click.jc', function (event) {
            event.preventDefault();
            var step = index === 0 ? curr - o.scroll : curr + o.scroll;
            if (o.directional) {
              // set direction of subsequent scrolls to:
              //  1 if "btnNext" clicked
              // -1 if "btnPrev" clicked
              div.data('dirjc', (index ? 1 : -1));
            }
            return go(step);
          });
        }
      });

      if (!o.circular) {
        if (o.btnPrev && start === 0) {
          o.$btnPrev.addClass(o.btnDisabledClass);
        }

        if (o.btnNext && start + visibleFloor >= itemLength) {
          o.$btnNext.addClass(o.btnDisabledClass);
        }
      }

      if (o.autoPager) {
        pageNavCount = ceil(tl / visibleNum);
        pageNav = [];
        for (var i = 0; i < pageNavCount; i++) {
          pageNav.push('<li><a href="#">' + (i + 1) + '</a></li>');
        }
        if (pageNav.length > 1) {
          pageNav = $('<ul>' + pageNav.join('') + '</ul>').appendTo(o.autoPager).find('li');
          pageNav.find('a').each(function (i) {
            $(this).bind('click.jc', function (event) {
              event.preventDefault();
              var slide = i * visibleNum;
              if (o.circular) {
                slide += visibleNum;
              }
              return go(slide);
            });
          });
          activeBtnTypes.pager = 1;
        }
      }

      // set the active class on the btn corresponding to the "start" li
      setActive(start, activeBtnTypes);

      if (o.mouseWheel && div.mousewheel) {
        div.bind('mousewheel.jc', function (e, d) {
          return d > 0 ? go(curr - o.scroll) : go(curr + o.scroll);
        });
      }

      if (o.pause && o.auto && !isTouch) {
        div.bind('mouseenter.jc', function () {
          div.trigger('pauseCarousel.jc');
        }).bind('mouseleave.jc', function () {
          div.trigger('resumeCarousel.jc');
        });
      }

      if (o.auto) {
        advancer();
      }

      function vis() {
        return li.slice(curr).slice(0, visibleCeil);
      }

      $.jCarouselLite.vis = vis;

      function go(to, settings) {
        if (running) { return false; }
        settings = settings || {};
        var prev = curr,
          direction = to > curr,
          speed = typeof settings.speed !== 'undefined' ? settings.speed : o.speed,
          // offset appears if touch moves slides
          offset = settings.offset || 0;

        if (o.beforeStart) {
          o.beforeStart.call(div, vis(), direction, settings);
        }

        // If circular and we are in first or last, then go to the other end
        if (o.circular) {
          if (to > curr && to > itemLength - visibleCeil) {

            // temporarily set "to" as the difference
            to = to - curr;
            curr = curr % tl;

            // use the difference to make "to" correct relative to curr
            to = curr + to;
            ul.css(animCss, (-curr * styles.liSize) - offset);
          } else if (to < curr && to < 0) {
            curr += tl;
            to += tl;
            ul.css(animCss, (-curr * styles.liSize) - offset);
          }

          curr = to + (to % 1);

          // If non-circular and "to" points beyond first or last, we change to first or last.
        } else {
          if (to < 0) {
            to = 0;
          } else if (to > itemLength - visibleFloor) {
            to = itemLength - visibleFloor;
          }

          curr = to;

          if (curr === 0 && o.first) {
            o.first.call(this, vis(), direction);
          }

          if (curr === itemLength - visibleFloor && o.last) {
            o.last.call(this, vis(), direction);
          }

          // Disable buttons when the carousel reaches the last/first, and enable when not
          if (o.btnPrev) {
            o.$btnPrev.toggleClass(o.btnDisabledClass, curr === 0);
          }
          if (o.btnNext) {
            o.$btnNext.toggleClass(o.btnDisabledClass, curr === itemLength - visibleFloor);
          }
        }

        // if btnGo, set the active class on the btnGo element corresponding to the first visible carousel li
        // if autoPager, set active class on the appropriate autopager element
        setActive(curr, activeBtnTypes);

        $.jCarouselLite.curr = curr;

        if (prev === curr && !settings.force) {
          if (o.afterEnd) {
            o.afterEnd.call(div, vis(), direction, settings);
          }
          return curr;
        }

        running = true;

        aniProps[animCss] = -(curr * styles.liSize);
        ul.anim(aniProps, speed, o.easing, function () {
          if (o.afterEnd) {
            o.afterEnd.call(div, vis(), direction, settings);
          }
          running = false;
        });

        return curr;
      } // end go function

      // bind custom events so they can be triggered by user
      div
        .bind('go.jc', function (e, to, settings) {

          if (typeof to === 'undefined') {
            to = '+=1';
          }

          var todir = typeof to === 'string' && /(\+=|-=)(\d+)/.exec(to);

          if (todir) {
            to = todir[1] === '-=' ? curr - todir[2] * 1 : curr + todir[2] * 1;
          } else {
            to += start;
          }
          go(to, settings);
        })
        .bind('startCarousel.jc', function () {
          clearTimeout(self.setAutoAdvance);
          self.setAutoAdvance = undefined;
          div.trigger('go', '+=' + o.scroll);
          advancer();
          div.removeData('pausedjc').removeData('stoppedjc');
        })
        .bind('resumeCarousel.jc', function (event, forceRun) {
          if (self.setAutoAdvance) { return; }
          clearTimeout(self.setAutoAdvance);
          self.setAutoAdvance = undefined;

          var stopped = div.data('stoppedjc');
          if (forceRun || !stopped) {
            advancer();
            div.removeData('pausedjc');
            if (stopped) {
              div.removeData('stoppedjc');
            }
          }
        })

        .bind('pauseCarousel.jc', function () {
          clearTimeout(self.setAutoAdvance);
          self.setAutoAdvance = undefined;
          div.data('pausedjc', true);
        })
        .bind('stopCarousel.jc', function () {
          clearTimeout(self.setAutoAdvance);
          self.setAutoAdvance = undefined;

          div.data('stoppedjc', true);
        })

        .bind('refreshCarousel.jc', function (event, all) {
          if (all && o.circular) {
            makeCircular();
          }
          setDimensions(o.autoCSS);
        })

        .bind('endCarousel.jc', function () {
          if (self.setAutoAdvance) {
            clearTimeout(self.setAutoAdvance);
            self.setAutoAdvance = undefined;
          }
          if (o.btnPrev) {
            o.$btnPrev.addClass(o.btnDisabledClass).unbind('.jc');
          }
          if (o.btnNext) {
            o.$btnNext.addClass(o.btnDisabledClass).unbind('.jc');
          }
          if (o.btnGo) {
            $.each(o.btnGo, function (i, val) {
              $(val).unbind('.jc');
            });
          }

          if (o.circular) {
            li.slice(0, visibleCeil).remove();
            li.slice(-visibleCeil).remove();
          }
          $.each([animCss + 'jc', 'pausedjc', 'stoppedjc', 'dirjc'], function (i, d) {
            div.removeData(d);
          });
          div.unbind('.jc');
        });

      // touch gesture support

      touchEvents = {
        touchstart: function (event) {
          endTouch.x = 0;
          endTouch.y = 0;
          startTouch.x = event.targetTouches[0].pageX;
          startTouch.y = event.targetTouches[0].pageY;
          startTouch[animCss] = parseFloat(ul.css(animCss));
          startTouch.time = +new Date();
        },

        touchmove: function (event) {
          var tlength = event.targetTouches.length;

          if (tlength === 1) {
            endTouch.x = event.targetTouches[0].pageX;
            endTouch.y = event.targetTouches[0].pageY;
            aniProps[animCss] = startTouch[animCss] + (endTouch[axisPrimary] - startTouch[axisPrimary]);
            ul.css(aniProps);
            if (o.preventTouchWindowScroll) {
              event.preventDefault();
            }
          } else {
            endTouch.x = startTouch.x;
            endTouch.y = startTouch.y;
          }
        },

        touchend: function () {
          // bail out early if there is no touch movement
          if (!endTouch.x) {
            return;
          }

          var pxDelta = startTouch[axisPrimary] - endTouch[axisPrimary],
            pxAbsDelta = mabs(pxDelta),
            primaryAxisGood = pxAbsDelta > o.swipeThresholds[axisPrimary],
            secondaryAxisGood = mabs(startTouch[axisSecondary] - endTouch[axisSecondary]) < o.swipeThresholds[axisSecondary],
            timeDelta = +new Date() - startTouch.time,
            quickSwipe = timeDelta < o.swipeThresholds.time,
            operator = pxDelta > 0 ? '+=' : '-=',
            to = operator + o.scroll,
            swipeInfo = { force: true };

          // quick, clean swipe
          if (quickSwipe && primaryAxisGood && secondaryAxisGood) {
            // set animation speed to twice as fast as that set in speed option
            swipeInfo.speed = o.speed / 2;
          }
          else
            // slow swipe < 1/2 slide width, OR
            // not enough movement for swipe, OR
            // too much movement on secondary axis when quick swipe
            if ((!quickSwipe && pxAbsDelta < styles.liSize / 2) ||
              !primaryAxisGood ||
              (quickSwipe && !secondaryAxisGood)
            ) {
              // revert to same slide
              to = '+=0';
            }
            else
              // slow swipe > 1/2 slide width
              if (!quickSwipe && pxAbsDelta > styles.liSize / 2) {
                to = Math.round(pxAbsDelta / styles.liSize);
                to = operator + (to > o.visible ? o.visible : to);

                // send pxDelta along as offset in case carousel is circular and needs to reset
                swipeInfo.offset = pxDelta;
              }

          div.trigger('go.jc', [to, swipeInfo]);
          endTouch = {};
        },

        handle: function (event) {
          event = event.originalEvent;
          touchEvents[event.type](event);
        }
      };

      if (isTouch && o.swipe) {
        div.bind('touchstart.jc touchmove.jc touchend.jc', touchEvents.handle);
      } // end swipe events

      // Responsive design handling:
      // Reset dimensions on window.resize
      if (o.responsive) {
        prepResize = o.autoCSS;
        $(window).bind('resize', function () {
          if (prepResize) {
            ul.width(ul.width() * 2);
            prepResize = false;
          }

          clearTimeout(resize);
          resize = setTimeout(function () {
            div.trigger('refreshCarousel.jc', [true]);
            prepResize = o.autoCSS;
          }, 100);
        });
      }

    }); // end each

    return this;
  };

  $.fn.jCarouselLite.defaults = {

    // valid selector for the "ul" container containing the slides
    containerSelector: 'ul',

    // valid selector for the slide "li" items
    itemSelector: 'li',

    btnPrev: null,
    btnNext: null,

    // array (or jQuery object) of elements. When clicked, makes the corresponding carousel LI the first visible one
    btnGo: null,

    // selector (or jQuery object) indicating the containing element for pagination navigation.
    autoPager: null,
    btnDisabledClass: 'disabled',

    // class applied to the active slide and btnGo element
    activeClass: 'active',

    // class applied to the btnGo elements corresponding to the visible slides
    visibleClass: 'vis',
    mouseWheel: false,
    speed: 200,
    easing: null,

    // milliseconds between scrolls
    timeout: 4000,

    // true to enable auto scrolling; number to auto-scroll by different number at a time than that of scroll option
    auto: false,


    // true to enable changing direction of auto scrolling when user clicks prev or next button
    directional: false,

    // number of times before autoscrolling will stop. (if circular is false, won't iterate more than number of items)
    autoStop: false,

    // pause scrolling on hover
    pause: true,
    vertical: false,

    // continue scrolling when reach the last item
    circular: true,

    // the number to be visible at a given time.
    visible: 3,

    // index of item to show initially in the first posiition
    start: 0,

    // number of items to scroll at a time
    scroll: 1,

    // whether to set initial styles on the carousel elements. See readme for info
    autoCSS: true,

    // whether the dimensions should change on resize
    responsive: false,

    // whether to set width of <li>s (and left/top of <ul>) based on width of <div>
    autoWidth: false,

    // touch options
    swipe: true,
    swipeThresholds: {
      x: 80,
      y: 40,
      time: 150
    },

    // whether to prevent vertical scrolling of the document window when swiping
    preventTouchWindowScroll: true,

    // Function to be called for each matched carousel when .jCaourselLite() is called.
    // Inside the function, `this` is the carousel div.
    // The function can take 2 arguments:
    // 1. The merged options object
    // 2. A jQuery object containing the <li> items in the carousel
    // If the function returns `false`, the plugin will skip all the carousel magic for that carousel div
    init: function () { },

    // function to be called once the first slide is hit
    first: null,

    // function to be called once the last slide is hit
    last: null,

    // function to be called before each transition starts
    beforeStart: null,

    // function to be called after each transition ends
    afterEnd: null
  };

  function iterations(itemLength, options) {
    return options.autoStop && (options.circular ? options.autoStop : Math.min(itemLength, options.autoStop));
  }

  function fixIds(i) {
    if (this.id) {
      this.id += i;
    }
  }
})(jQuery);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:79:"/local/templates/Vivon2019/js/jquery.equalheightresponsive.min.js?1583292890641";s:6:"source";s:65:"/local/templates/Vivon2019/js/jquery.equalheightresponsive.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery.equalHeightResponsive | v.1.1 | 28.04.2014 | http://git.io/OwM7Ow */
!function (a) { a.fn.equalheightRun = function () { var e, b = 0, c = 0, d = new Array; return a.each(this, function () { if (e = a(this), a(e).height("auto"), topPostion = e.offset().top, c != topPostion) { for (currentEl = 0; currentEl < d.length; currentEl++)d[currentEl].height(b); d.length = 0, c = topPostion, b = e.height(), d.push(e) } else d.push(e), b = b < e.height() ? e.height() : b; for (currentEl = 0; currentEl < d.length; currentEl++)d[currentEl].height(b) }), this }, a.fn.equalHeightResponsive = function () { function c() { b.equalheightRun() } var b = this; return a(window).on("load resize equal-refresh", b, c), this } }(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:84:"/local/templates/Vivon2019/js/fancybox/jquery.fancybox.2.1.5.pack.js?158329289023135";s:6:"source";s:68:"/local/templates/Vivon2019/js/fancybox/jquery.fancybox.2.1.5.pack.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function (r, G, f, v) {
  var J = f("html"), n = f(r), p = f(G), b = f.fancybox = function () { b.open.apply(this, arguments) }, I = navigator.userAgent.match(/msie/i), B = null, s = G.createTouch !== v, t = function (a) { return a && a.hasOwnProperty && a instanceof f }, q = function (a) { return a && "string" === f.type(a) }, E = function (a) { return q(a) && 0 < a.indexOf("%") }, l = function (a, d) { var e = parseInt(a, 10) || 0; d && E(a) && (e *= b.getViewport()[d] / 100); return Math.ceil(e) }, w = function (a, b) { return l(a, b) + "px" }; f.extend(b, {
    version: "2.1.5", defaults: {
      padding: 15, margin: 20,
      width: 800, height: 600, minWidth: 100, minHeight: 100, maxWidth: 9999, maxHeight: 9999, pixelRatio: 1, autoSize: !0, autoHeight: !1, autoWidth: !1, autoResize: !0, autoCenter: !s, fitToView: !0, aspectRatio: !1, topRatio: 0.5, leftRatio: 0.5, scrolling: "auto", wrapCSS: "", arrows: !0, closeBtn: !0, closeClick: !1, nextClick: !1, mouseWheel: !0, autoPlay: !1, playSpeed: 3E3, preload: 3, modal: !1, loop: !0, ajax: { dataType: "html", headers: { "X-fancyBox": !0 } }, iframe: { scrolling: "auto", preload: !0 }, swf: { wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always" },
      keys: { next: { 13: "left", 34: "up", 39: "left", 40: "up" }, prev: { 8: "right", 33: "down", 37: "right", 38: "down" }, close: [27], play: [32], toggle: [70] }, direction: { next: "left", prev: "right" }, scrollOutside: !0, index: 0, type: null, href: null, content: null, title: null, tpl: {
        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>', image: '<img class="fancybox-image" src="{href}" alt="" />', iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
          (I ? ' allowtransparency="true"' : "") + "></iframe>", error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>', next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>', prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
      }, openEffect: "fade", openSpeed: 250, openEasing: "swing", openOpacity: !0,
      openMethod: "zoomIn", closeEffect: "fade", closeSpeed: 250, closeEasing: "swing", closeOpacity: !0, closeMethod: "zoomOut", nextEffect: "elastic", nextSpeed: 250, nextEasing: "swing", nextMethod: "changeIn", prevEffect: "elastic", prevSpeed: 250, prevEasing: "swing", prevMethod: "changeOut", helpers: { overlay: !0, title: !0 }, onCancel: f.noop, beforeLoad: f.noop, afterLoad: f.noop, beforeShow: f.noop, afterShow: f.noop, beforeChange: f.noop, beforeClose: f.noop, afterClose: f.noop
    }, group: {}, opts: {}, previous: null, coming: null, current: null, isActive: !1,
    isOpen: !1, isOpened: !1, wrap: null, skin: null, outer: null, inner: null, player: { timer: null, isActive: !1 }, ajaxLoad: null, imgPreload: null, transitions: {}, helpers: {}, open: function (a, d) {
      if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function (e, c) {
        var k = {}, g, h, j, m, l; "object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = { href: c.data("fancybox-href") || c.attr("href"), title: c.data("fancybox-title") || c.attr("title"), isDom: !0, element: c }, f.metadata && f.extend(!0, k,
          c.metadata())) : k = c); g = d.href || k.href || (q(c) ? c : null); h = d.title !== v ? d.title : k.title || ""; m = (j = d.content || k.content) ? "html" : d.type || k.type; !m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null)); q(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : q(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift())); j || ("inline" === m ? g ? j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && (!g &&
            k.isDom) && (m = "inline", j = c)); f.extend(k, { href: g, type: m, content: j, title: h, selector: l }); a[e] = k
      }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== v && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
    }, cancel: function () {
      var a = b.coming; a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current ||
        b._afterZoomOut(a))
    }, close: function (a) { b.cancel(); !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]()))) }, play: function (a) {
      var d = function () { clearTimeout(b.player.timer) }, e = function () {
        d(); b.current && b.player.isActive && (b.player.timer =
          setTimeout(b.next, b.current.playSpeed))
      }, c = function () { d(); p.unbind(".player"); b.player.isActive = !1; b.trigger("onPlayEnd") }; if (!0 === a || !b.player.isActive && !1 !== a) { if (b.current && (b.current.loop || b.current.index < b.group.length - 1)) b.player.isActive = !0, p.bind({ "onCancel.player beforeClose.player": c, "onUpdate.player": e, "beforeLoad.player": d }), e(), b.trigger("onPlayStart") } else c()
    }, next: function (a) { var d = b.current; d && (q(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next")) }, prev: function (a) {
      var d = b.current;
      d && (q(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
    }, jumpto: function (a, d, e) { var c = b.current; c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== v && (b.cancel(), b._start(a))) }, reposition: function (a, d) { var e = b.current, c = e ? e.wrap : null, k; c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({}, e.dim, k))) }, update: function (a) {
      var d =
        a && a.type, e = !d || "orientationchange" === d; e && (clearTimeout(B), B = null); b.isOpen && !B && (B = setTimeout(function () { var c = b.current; c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), B = null) }, e && !s ? 0 : 300))
    }, toggle: function (a) {
      b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")),
        b.update())
    }, hideLoading: function () { p.unbind(".loading"); f("#fancybox-loading").remove() }, showLoading: function () { var a, d; b.hideLoading(); a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body"); p.bind("keydown.loading", function (a) { if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel() }); b.defaults.fixed || (d = b.getViewport(), a.css({ position: "absolute", top: 0.5 * d.h + d.y, left: 0.5 * d.w + d.x })) }, getViewport: function () {
      var a = b.current && b.current.locked || !1, d = {
        x: n.scrollLeft(),
        y: n.scrollTop()
      }; a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && r.innerWidth ? r.innerWidth : n.width(), d.h = s && r.innerHeight ? r.innerHeight : n.height()); return d
    }, unbindEvents: function () { b.wrap && t(b.wrap) && b.wrap.unbind(".fb"); p.unbind(".fb"); n.unbind(".fb") }, bindEvents: function () {
      var a = b.current, d; a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function (e) {
        var c = e.which || e.keyCode, k = e.target || e.srcElement;
        if (27 === c && b.coming) return !1; !e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]"))) && f.each(d, function (d, k) { if (1 < a.group.length && k[c] !== v) return b[d](k[c]), e.preventDefault(), !1; if (-1 < f.inArray(c, k)) return b[d](), e.preventDefault(), !1 })
      }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function (d, c, k, g) {
        for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");)j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) &&
          (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent(); if (0 !== c && !j && 1 < b.group.length && !a.canShrink) { if (0 < g || 0 < k) b.prev(0 < g ? "down" : "left"); else if (0 > g || 0 > k) b.next(0 > g ? "up" : "right"); d.preventDefault() }
      }))
    }, trigger: function (a, d) {
      var e, c = d || b.coming || b.current; if (c) {
        f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1))); if (!1 === e) return !1; c.helpers && f.each(c.helpers, function (d, e) {
          if (e && b.helpers[d] && f.isFunction(b.helpers[d][a])) b.helpers[d][a](f.extend(!0,
            {}, b.helpers[d].defaults, e), c)
        }); p.trigger(a)
      }
    }, isImage: function (a) { return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i) }, isSWF: function (a) { return q(a) && a.match(/\.(swf)((\?|#).*)?$/i) }, _start: function (a) {
      var d = {}, e, c; a = l(a); e = b.group[a] || null; if (!e) return !1; d = f.extend(!0, {}, b.opts, e); e = d.margin; c = d.padding; "number" === f.type(e) && (d.margin = [e, e, e, e]); "number" === f.type(c) && (d.padding = [c, c, c, c]); d.modal && f.extend(!0, d, {
        closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1,
        mouseWheel: !1, keys: null, helpers: { overlay: { closeClick: !1 } }
      }); d.autoSize && (d.autoWidth = d.autoHeight = !0); "auto" === d.width && (d.autoWidth = !0); "auto" === d.height && (d.autoHeight = !0); d.group = b.group; d.index = a; b.coming = d; if (!1 === b.trigger("beforeLoad")) b.coming = null; else {
        c = d.type; e = d.href; if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1; b.isActive = !0; if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible"; "image" === c && (d.aspectRatio =
          !0); "iframe" === c && s && (d.scrolling = "scroll"); d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body"); f.extend(d, { skin: f(".fancybox-skin", d.wrap), outer: f(".fancybox-outer", d.wrap), inner: f(".fancybox-inner", d.wrap) }); f.each(["Top", "Right", "Bottom", "Left"], function (a, b) { d.skin.css("padding" + b, w(d.padding[a])) }); b.trigger("onReady"); if ("inline" === c || "html" === c) { if (!d.content || !d.content.length) return b._error("content") } else if (!e) return b._error("href");
        "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
      }
    }, _error: function (a) { f.extend(b.coming, { type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: a, content: b.coming.tpl.error }); b._afterLoad() }, _loadImage: function () {
      var a = b.imgPreload = new Image; a.onload = function () { this.onload = this.onerror = null; b.coming.width = this.width / b.opts.pixelRatio; b.coming.height = this.height / b.opts.pixelRatio; b._afterLoad() }; a.onerror = function () {
        this.onload =
          this.onerror = null; b._error("image")
      }; a.src = b.coming.href; !0 !== a.complete && b.showLoading()
    }, _loadAjax: function () { var a = b.coming; b.showLoading(); b.ajaxLoad = f.ajax(f.extend({}, a.ajax, { url: a.href, error: function (a, e) { b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading() }, success: function (d, e) { "success" === e && (a.content = d, b._afterLoad()) } })) }, _loadIframe: function () {
      var a = b.coming, d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
      f(a.wrap).bind("onReset", function () { try { f(this).find("iframe").hide().attr("src", "//about:blank").end().empty() } catch (a) { } }); a.iframe.preload && (b.showLoading(), d.one("load", function () { f(this).data("ready", 1); s || f(this).bind("load.fb", b.update); f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(); b._afterLoad() })); a.content = d.appendTo(a.inner); a.iframe.preload || b._afterLoad()
    }, _preloadImages: function () {
      var a = b.group, d = b.current, e = a.length, c = d.preload ? Math.min(d.preload,
        e - 1) : 0, f, g; for (g = 1; g <= c; g += 1)f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
    }, _afterLoad: function () {
      var a = b.coming, d = b.current, e, c, k, g, h; b.hideLoading(); if (a && !1 !== b.isActive) if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null; else {
        d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()); b.unbindEvents(); e = a.content; c = a.type; k = a.scrolling; f.extend(b, {
          wrap: a.wrap, skin: a.skin,
          outer: a.outer, inner: a.inner, current: a, previous: d
        }); g = a.href; switch (c) {
          case "inline": case "ajax": case "html": a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function () { f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1) })); break; case "image": e = a.tpl.image.replace("{href}",
            g); break; case "swf": e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function (a, b) { e += '<param name="' + a + '" value="' + b + '"></param>'; h += " " + a + '="' + b + '"' }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
        }(!t(e) || !e.parent().is(a.inner)) && a.inner.append(e); b.trigger("beforeShow"); a.inner.css("overflow", "yes" === k ? "scroll" :
          "no" === k ? "hidden" : k); b._setDimension(); b.reposition(); b.isOpen = !1; b.coming = null; b.bindEvents(); if (b.isOpened) { if (d.prevMethod) b.transitions[d.prevMethod]() } else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove(); b.transitions[b.isOpened ? a.nextMethod : a.openMethod](); b._preloadImages()
      }
    }, _setDimension: function () {
      var a = b.getViewport(), d = 0, e = !1, c = !1, e = b.wrap, k = b.skin, g = b.inner, h = b.current, c = h.width, j = h.height, m = h.minWidth, u = h.minHeight, n = h.maxWidth, p = h.maxHeight, s = h.scrolling, q = h.scrollOutside ?
        h.scrollbarWidth : 0, x = h.margin, y = l(x[1] + x[3]), r = l(x[0] + x[2]), v, z, t, C, A, F, B, D, H; e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp"); x = l(k.outerWidth(!0) - k.width()); v = l(k.outerHeight(!0) - k.height()); z = y + x; t = r + v; C = E(c) ? (a.w - z) * l(c) / 100 : c; A = E(j) ? (a.h - t) * l(j) / 100 : j; if ("iframe" === h.type) { if (H = h.content, h.autoHeight && 1 === H.data("ready")) try { H[0].contentWindow.document.location && (g.width(C).height(9999), F = H.contents().find("body"), q && F.css("overflow-x", "hidden"), A = F.outerHeight(!0)) } catch (G) { } } else if (h.autoWidth ||
          h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight && (A = g.height()), g.removeClass("fancybox-tmp"); c = l(C); j = l(A); D = C / A; m = l(E(m) ? l(m, "w") - z : m); n = l(E(n) ? l(n, "w") - z : n); u = l(E(u) ? l(u, "h") - t : u); p = l(E(p) ? l(p, "h") - t : p); F = n; B = p; h.fitToView && (n = Math.min(a.w - z, n), p = Math.min(a.h - t, p)); z = a.w - y; r = a.h - r; h.aspectRatio ? (c > n && (c = n, j = l(c / D)), j > p && (j = p, c = l(j * D)), c < m && (c = m, j = l(c / D)), j < u && (j = u, c = l(j * D))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight &&
            "iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, p))); if (h.fitToView) if (g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(), h.aspectRatio) for (; (a > z || y > r) && (c > m && j > u) && !(19 < d++);)j = Math.max(u, Math.min(p, j - 10)), c = l(j * D), c < m && (c = m, j = l(c / D)), c > n && (c = n, j = l(c / D)), g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(); else c = Math.max(m, Math.min(c, c - (a - z))), j = Math.max(u, Math.min(j, j - (y - r))); q && ("auto" === s && j < A && c + x + q < z) && (c += q); g.width(c).height(j); e.width(c + x); a = e.width();
      y = e.height(); e = (a > z || y > r) && c > m && j > u; c = h.aspectRatio ? c < F && j < B && c < C && j < A : (c < F || j < B) && (c < C || j < A); f.extend(h, { dim: { width: w(a), height: w(y) }, origWidth: C, origHeight: A, canShrink: e, canExpand: c, wPadding: x, hPadding: v, wrapSpace: y - k.outerHeight(!0), skinSpace: k.height() - j }); !H && (h.autoHeight && j > u && j < p && !c) && g.height("auto")
    }, _getPosition: function (a) {
      var d = b.current, e = b.getViewport(), c = d.margin, f = b.wrap.width() + c[1] + c[3], g = b.wrap.height() + c[0] + c[2], c = { position: "absolute", top: c[0], left: c[3] }; d.autoCenter && d.fixed &&
        !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x); c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio)); c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio)); return c
    }, _afterZoomIn: function () {
      var a = b.current; a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function (d) {
        !f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(),
          b[a.closeClick ? "close" : "next"]())
      }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function (a) { a.preventDefault(); b.close() }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()))
    }, _afterZoomOut: function (a) {
      a =
        a || b.current; f(".fancybox-wrap").trigger("onReset").remove(); f.extend(b, { group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null }); b.trigger("afterClose", a)
    }
  }); b.transitions = {
    getOrigPosition: function () {
      var a = b.current, d = a.element, e = a.orig, c = {}, f = 50, g = 50, h = a.hPadding, j = a.wPadding, m = b.getViewport(); !e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"), e.length || (e = d)); t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) :
        (c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio); if ("fixed" === b.wrap.css("position") || a.locked) c.top -= m.y, c.left -= m.x; return c = { top: w(c.top - h * a.topRatio), left: w(c.left - j * a.leftRatio), width: w(f + j), height: w(g + h) }
    }, step: function (a, d) {
      var e, c, f = d.prop; c = b.current; var g = c.wrapSpace, h = c.skinSpace; if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" ===
        f ? c : c - g * e - h * e))
    }, zoomIn: function () { var a = b.current, d = a.pos, e = a.openEffect, c = "elastic" === e, k = f.extend({ opacity: 1 }, d); delete k.position; c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1); b.wrap.css(d).animate(k, { duration: "none" === e ? 0 : a.openSpeed, easing: a.openEasing, step: c ? this.step : null, complete: b._afterZoomIn }) }, zoomOut: function () {
      var a = b.current, d = a.closeEffect, e = "elastic" === d, c = { opacity: 0.1 }; e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1)); b.wrap.animate(c,
        { duration: "none" === d ? 0 : a.closeSpeed, easing: a.closeEasing, step: e ? this.step : null, complete: b._afterZoomOut })
    }, changeIn: function () { var a = b.current, d = a.nextEffect, e = a.pos, c = { opacity: 1 }, f = b.direction, g; e.opacity = 0.1; "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = w(l(e[g]) - 200), c[g] = "+=200px") : (e[g] = w(l(e[g]) + 200), c[g] = "-=200px")); "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, { duration: a.nextSpeed, easing: a.nextEasing, complete: b._afterZoomIn }) }, changeOut: function () {
      var a =
        b.previous, d = a.prevEffect, e = { opacity: 0.1 }, c = b.direction; "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px"); a.wrap.animate(e, { duration: "none" === d ? 0 : a.prevSpeed, easing: a.prevEasing, complete: function () { f(this).trigger("onReset").remove() } })
    }
  }; b.helpers.overlay = {
    defaults: { closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !s, fixed: !0 }, overlay: null, fixed: !1, el: f("html"), create: function (a) {
      a = f.extend({}, this.defaults, a); this.overlay && this.close(); this.overlay =
        f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent); this.fixed = !1; a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
    }, open: function (a) {
      var d = this; a = f.extend({}, this.defaults, a); this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a); this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)), this.update()); a.closeClick && this.overlay.bind("click.overlay", function (a) {
        if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ?
          b.close() : d.close(), !1
      }); this.overlay.css(a.css).show()
    }, close: function () { var a, b; n.unbind("resize.overlay"); this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), a = n.scrollTop(), b = n.scrollLeft(), this.el.removeClass("fancybox-lock"), n.scrollTop(a).scrollLeft(b)); f(".fancybox-overlay").remove().hide(); f.extend(this, { overlay: null, fixed: !1 }) }, update: function () {
      var a = "100%", b; this.overlay.width(a).height("100%"); I ? (b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth),
        p.width() > b && (a = p.width())) : p.width() > n.width() && (a = p.width()); this.overlay.width(a).height(p.height())
    }, onReady: function (a, b) { var e = this.overlay; f(".fancybox-overlay").stop(!0, !0); e || this.create(a); a.locked && (this.fixed && b.fixed) && (e || (this.margin = p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1); !0 === a.showEarly && this.beforeShow.apply(this, arguments) }, beforeShow: function (a, b) {
      var e, c; b.locked && (!1 !== this.margin && (f("*").filter(function () {
        return "fixed" ===
          f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
      }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), e = n.scrollTop(), c = n.scrollLeft(), this.el.addClass("fancybox-lock"), n.scrollTop(e).scrollLeft(c)); this.open(a)
    }, onUpdate: function () { this.fixed || this.update() }, afterClose: function (a) { this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this)) }
  }; b.helpers.title = {
    defaults: { type: "float", position: "bottom" }, beforeShow: function (a) {
      var d =
        b.current, e = d.title, c = a.type; f.isFunction(e) && (e = e.call(d.element, d)); if (q(e) && "" !== f.trim(e)) { d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>"); switch (c) { case "inside": c = b.skin; break; case "outside": c = b.wrap; break; case "over": c = b.inner; break; default: c = b.skin, d.appendTo("body"), I && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom"))) }d["top" === a.position ? "prependTo" : "appendTo"](c) }
    }
  }; f.fn.fancybox = function (a) {
    var d,
      e = f(this), c = this.selector || "", k = function (g) { var h = f(this).blur(), j = d, k, l; !g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && ("" !== l && "nofollow" !== l) && (h = c.length ? f(c) : e, h = h.filter("[" + k + '="' + l + '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault()) }; a = a || {}; d = a.index || 0; !c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : p.undelegate(c, "click.fb-start").delegate(c +
        ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k); this.filter("[data-fancybox-start=1]").trigger("click"); return this
  }; p.ready(function () {
    var a, d; f.scrollbarWidth === v && (f.scrollbarWidth = function () { var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), b = a.children(), b = b.innerWidth() - b.height(99).innerWidth(); a.remove(); return b }); if (f.support.fixedPosition === v) {
      a = f.support; d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body"); var e = 20 ===
        d[0].offsetTop || 15 === d[0].offsetTop; d.remove(); a.fixedPosition = e
    } f.extend(b.defaults, { scrollbarWidth: f.scrollbarWidth(), fixed: f.support.fixedPosition, parent: f("body") }); a = f(r).width(); J.addClass("fancybox-lock-test"); d = f(r).width(); J.removeClass("fancybox-lock-test"); f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head")
  })
})(window, document, jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:54:"/local/templates/Vivon2019/js/select.js?15832928901956";s:6:"source";s:39:"/local/templates/Vivon2019/js/select.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function select(cl) {
  var zindex = $(cl).size() * 2;
  $(cl).each(function () {
    if ($(this).prev().attr('class') != 'select-new') {
      $(this).wrap('<div></div>');
      $(this).closest('div').addClass('sel-' + cl.substring(1, cl.length));

      var popup = '';
      var first = '';

      $(this).find('option').each(function () {
        if ($(this).is(':selected')) {
          first = $(this).html();
        };
      });

      if (first == '') { $(this).find('option').eq(0).html(); }

      $(this).find('option').each(function () {
        popup = popup + '<a href="javascript:void(0);">' + $(this).html() + '</a>';
      });

      $(this).before('<div class="select-new"><span class="select-input">' + first + '</span><div class="select-popup">' + popup + '</div></div>');
      $(this).css({ 'visibility': 'hidden', 'position': 'absolute', 'top': '0px', 'left': '0' });
      $(this).prev('div').find('span').eq(0).css('z-index', zindex);
      $(this).prev('div').find('div').eq(0).css('z-index', zindex - 1);
    }

    var cldiv = $(this).prev('div').eq(0);

    var t = setTimeout(function () { }, 1);

    $(cldiv).find('span').click(function () {
      if ($(this).next('div').is(':visible')) {
        $(this).next('div').hide();
      } else {
        $(this).next('div').show();
        clearTimeout(t);
      }
    });

    $(cldiv).find('a').click(function () {
      $(this).closest('div').hide();
      var htm = $(this).html();
      $(this).closest('div').prev('span').html($(this).html());
      $(this).parent('div').parent('div').next('select').find('option').removeAttr('selected');
      $(this).parent('div').parent('div').next('select').find('option').each(function () {
        if ($(this).html() == htm) {
          $(this).attr('selected', 'selected');
          $(this).closest('select').change();
        }
      });
    });

    $(cldiv).mouseout(function () {
      clearTimeout(t);
    });

    $(cldiv).mouseleave(function () {
      var th = $(this);
      t = setTimeout(function () { th.find('div').eq(0).hide() }, 1000);
    });
    zindex += -2;
  });
}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:87:"/local/templates/Vivon2019/js/fancybox/helpers/jquery.fancybox-thumbs.js?15832928903836";s:6:"source";s:72:"/local/templates/Vivon2019/js/fancybox/helpers/jquery.fancybox-thumbs.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
* Thumbnail helper for fancyBox
* version: 1.0.7 (Mon, 01 Oct 2012)
* @requires fancyBox v2.0 or later
*
* Usage:
*     $(".fancybox").fancybox({
*         helpers : {
*             thumbs: {
*                 width  : 50,
*                 height : 50
*             }
*         }
*     });
*
*/
(function ($) {
  //Shortcut for fancyBox object
  var F = $.fancybox;

  //Add helper object
  F.helpers.thumbs = {
    defaults: {
      width: 50,       // thumbnail width
      height: 50,       // thumbnail height
      position: 'bottom', // 'top' or 'bottom'
      source: function (item) {  // function to obtain the URL of the thumbnail image
        var href;

        if (item.element) {
          href = $(item.element).find('img').attr('src');
        }

        if (!href && item.type === 'image' && item.href) {
          href = item.href;
        }

        return href;
      }
    },

    wrap: null,
    list: null,
    width: 0,

    init: function (opts, obj) {
      var that = this,
        list,
        thumbWidth = opts.width,
        thumbHeight = opts.height,
        thumbSource = opts.source;

      //Build list structure
      list = '';

      for (var n = 0; n < obj.group.length; n++) {
        list += '<li><a style="width:' + thumbWidth + 'px;height:' + thumbHeight + 'px;" href="javascript:jQuery.fancybox.jumpto(' + n + ');"></a></li>';
      }

      this.wrap = $('<div id="fancybox-thumbs"></div>').addClass(opts.position).appendTo('body');
      this.list = $('<ul>' + list + '</ul>').appendTo(this.wrap);

      //Load each thumbnail
      $.each(obj.group, function (i) {
        var href = thumbSource(obj.group[i]);

        if (!href) {
          return;
        }

        $("<img />").load(function () {
          var width = this.width,
            height = this.height,
            widthRatio, heightRatio, parent;

          if (!that.list || !width || !height) {
            return;
          }

          //Calculate thumbnail width/height and center it
          widthRatio = width / thumbWidth;
          heightRatio = height / thumbHeight;

          parent = that.list.children().eq(i).find('a');

          if (widthRatio >= 1 && heightRatio >= 1) {
            if (widthRatio > heightRatio) {
              width = Math.floor(width / heightRatio);
              height = thumbHeight;

            } else {
              width = thumbWidth;
              height = Math.floor(height / widthRatio);
            }
          }

          $(this).css({
            width: width,
            height: height,
            top: Math.floor(thumbHeight / 2 - height / 2),
            left: Math.floor(thumbWidth / 2 - width / 2)
          });

          parent.width(thumbWidth).height(thumbHeight);

          $(this).hide().appendTo(parent).fadeIn(300);

        }).attr('src', href);
      });

      //Set initial width
      this.width = this.list.children().eq(0).outerWidth(true);

      this.list.width(this.width * (obj.group.length + 1)).css('left', Math.floor($(window).width() * 0.5 - (obj.index * this.width + this.width * 0.5)));
    },

    beforeLoad: function (opts, obj) {
      //Remove self if gallery do not have at least two items
      if (obj.group.length < 2) {
        obj.helpers.thumbs = false;

        return;
      }

      //Increase bottom margin to give space for thumbs
      obj.margin[opts.position === 'top' ? 0 : 2] += ((opts.height) + 15);
    },

    afterShow: function (opts, obj) {
      //Check if exists and create or update list
      if (this.list) {
        this.onUpdate(opts, obj);

      } else {
        this.init(opts, obj);
      }

      //Set active element
      this.list.children().removeClass('active').eq(obj.index).addClass('active');
    },

    //Center list
    onUpdate: function (opts, obj) {
      if (this.list) {
        this.list.stop(true).animate({
          'left': Math.floor($(window).width() * 0.5 - (obj.index * this.width + this.width * 0.5))
        }, 150);
      }
    },

    beforeClose: function () {
      if (this.wrap) {
        this.wrap.remove();
      }

      this.wrap = null;
      this.list = null;
      this.width = 0;
    }
  }

}(jQuery));
/* End */
;
; /* Start:"a:4:{s:4:"full";s:64:"/local/templates/Vivon2019/js/social-likes.min.js?15832928909829";s:6:"source";s:49:"/local/templates/Vivon2019/js/social-likes.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! Social Likes v3.0.14 by Artem Sapegin - http://sapegin.github.com/social-likes - Licensed MIT */
!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery) }(function (a, b) { "use strict"; function c(a, b) { this.container = a, this.options = b, this.init() } function d(b, c) { this.widget = b, this.options = a.extend({}, c), this.detectService(), this.service && this.init() } function e(a) { function b(a, b) { return b.toUpper() } var c = {}, d = a.data(); for (var e in d) { var f = d[e]; "yes" === f ? f = !0 : "no" === f && (f = !1), c[e.replace(/-(\w)/g, b)] = f } return c } function f(a, b) { return g(a, b, encodeURIComponent) } function g(a, b, c) { return a.replace(/\{([^\}]+)\}/g, function (a, d) { return d in b ? c ? c(b[d]) : b[d] : a }) } function h(a, b) { var c = l + a; return c + " " + c + "_" + b } function i(b, c) { function d(g) { "keydown" === g.type && 27 !== g.which || a(g.target).closest(b).length || (b.removeClass(m), e.off(f, d), a.isFunction(c) && c()) } var e = a(document), f = "click touchstart keydown"; e.on(f, d) } function j(a) { var b = 10; if (document.documentElement.getBoundingClientRect) { var c = parseInt(a.css("left"), 10), d = parseInt(a.css("top"), 10), e = a[0].getBoundingClientRect(); e.left < b ? a.css("left", b - e.left + c) : e.right > window.innerWidth - b && a.css("left", window.innerWidth - e.right - b + c), e.top < b ? a.css("top", b - e.top + d) : e.bottom > window.innerHeight - b && a.css("top", window.innerHeight - e.bottom - b + d) } a.addClass(m) } var k = "social-likes", l = k + "__", m = k + "_opened", n = "https:" === location.protocol ? "https:" : "http:", o = "https:" === n, p = { facebook: { counterUrl: "https://graph.facebook.com/fql?q=SELECT+total_count+FROM+link_stat+WHERE+url%3D%22{url}%22&callback=?", convertNumber: function (a) { return a.data[0].total_count }, popupUrl: "https://www.facebook.com/sharer/sharer.php?u={url}", popupWidth: 600, popupHeight: 500 }, twitter: { counterUrl: "https://cdn.api.twitter.com/1/urls/count.json?url={url}&callback=?", convertNumber: function (a) { return a.count }, popupUrl: "https://twitter.com/intent/tweet?url={url}&text={title}", popupWidth: 600, popupHeight: 450, click: function () { return /[\.\?:\-??????]\s*$/.test(this.options.title) || (this.options.title += ":"), !0 } }, mailru: { counterUrl: n + "//connect.mail.ru/share_count?url_list={url}&callback=1&func=?", convertNumber: function (a) { for (var b in a) if (a.hasOwnProperty(b)) return a[b].shares }, popupUrl: n + "//connect.mail.ru/share?share_url={url}&title={title}", popupWidth: 550, popupHeight: 360 }, vkontakte: { counterUrl: "https://vk.com/share.php?act=count&url={url}&index={index}", counter: function (b, c) { var d = p.vkontakte; d._ || (d._ = [], window.VK || (window.VK = {}), window.VK.Share = { count: function (a, b) { d._[a].resolve(b) } }); var e = d._.length; d._.push(c), a.getScript(f(b, { index: e })).fail(c.reject) }, popupUrl: n + "//vk.com/share.php?url={url}&title={title}", popupWidth: 550, popupHeight: 330 }, odnoklassniki: { counterUrl: o ? b : "http://connect.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}", counter: function (b, c) { var d = p.odnoklassniki; d._ || (d._ = [], window.ODKL || (window.ODKL = {}), window.ODKL.updateCount = function (a, b) { d._[a].resolve(b) }); var e = d._.length; d._.push(c), a.getScript(f(b, { index: e })).fail(c.reject) }, popupUrl: "http://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}", popupWidth: 550, popupHeight: 360 }, plusone: { counterUrl: o ? b : "http://share.yandex.ru/gpp.xml?url={url}", counter: function (b, c) { var d = p.plusone; return d._ ? void c.reject() : (window.services || (window.services = {}), window.services.gplus = { cb: function (a) { "string" == typeof a && (a = a.replace(/\D/g, "")), d._.resolve(parseInt(a, 10)) } }, d._ = c, void a.getScript(f(b)).fail(c.reject)) }, popupUrl: "https://plus.google.com/share?url={url}", popupWidth: 700, popupHeight: 500 }, pinterest: { counterUrl: n + "//api.pinterest.com/v1/urls/count.json?url={url}&callback=?", convertNumber: function (a) { return a.count }, popupUrl: n + "//pinterest.com/pin/create/button/?url={url}&description={title}", popupWidth: 630, popupHeight: 270 } }, q = { promises: {}, fetch: function (b, c, d) { q.promises[b] || (q.promises[b] = {}); var e = q.promises[b]; if (!d.forceUpdate && e[c]) return e[c]; var g = a.extend({}, p[b], d), h = a.Deferred(), i = g.counterUrl && f(g.counterUrl, { url: c }); return i && a.isFunction(g.counter) ? g.counter(i, h) : g.counterUrl ? a.getJSON(i).done(function (b) { try { var c = b; a.isFunction(g.convertNumber) && (c = g.convertNumber(b)), h.resolve(c) } catch (d) { h.reject() } }).fail(h.reject) : h.reject(), e[c] = h.promise(), e[c] } }; a.fn.socialLikes = function (b) { return this.each(function () { var d = a(this), f = d.data(k); f ? a.isPlainObject(b) && f.update(b) : (f = new c(d, a.extend({}, a.fn.socialLikes.defaults, b, e(d))), d.data(k, f)) }) }, a.fn.socialLikes.defaults = { url: window.location.href.replace(window.location.hash, ""), title: document.title, counters: !0, zeroes: !1, wait: 500, timeout: 1e4, popupCheckInterval: 500, singleTitle: "Share" }, c.prototype = { init: function () { this.container.addClass(k), this.single = this.container.hasClass(k + "_single"), this.initUserButtons(), this.countersLeft = 0, this.number = 0, this.container.on("counter." + k, a.proxy(this.updateCounter, this)); var b = this.container.children(); this.makeSingleButton(), this.buttons = [], b.each(a.proxy(function (b, c) { var e = new d(a(c), this.options); this.buttons.push(e), e.options.counterUrl && this.countersLeft++ }, this)), this.options.counters ? (this.timer = setTimeout(a.proxy(this.appear, this), this.options.wait), this.timeout = setTimeout(a.proxy(this.ready, this, !0), this.options.timeout)) : this.appear() }, initUserButtons: function () { !this.userButtonInited && window.socialLikesButtons && a.extend(!0, p, socialLikesButtons), this.userButtonInited = !0 }, makeSingleButton: function () { if (this.single) { var b = this.container; b.addClass(k + "_vertical"), b.wrap(a("<div>", { "class": k + "_single-w" })), b.wrapInner(a("<div>", { "class": k + "__single-container" })); var c = b.parent(), d = a("<div>", { "class": h("widget", "single") }), e = a(g('<div class="{buttonCls}"><span class="{iconCls}"></span>{title}</div>', { buttonCls: h("button", "single"), iconCls: h("icon", "single"), title: this.options.singleTitle })); d.append(e), c.append(d), d.on("click", function () { var a = k + "__widget_active"; return d.toggleClass(a), d.hasClass(a) ? (b.css({ left: -(b.width() - d.width()) / 2, top: -b.height() }), j(b), i(b, function () { d.removeClass(a) })) : b.removeClass(m), !1 }), this.widget = d } }, update: function (b) { if (b.forceUpdate || b.url !== this.options.url) { this.number = 0, this.countersLeft = this.buttons.length, this.widget && this.widget.find("." + k + "__counter").remove(), a.extend(this.options, b); for (var c = 0; c < this.buttons.length; c++)this.buttons[c].update(b) } }, updateCounter: function (a, b, c) { c && (this.number += c, this.single && this.getCounterElem().text(this.number)), this.countersLeft--, 0 === this.countersLeft && (this.appear(), this.ready()) }, appear: function () { this.container.addClass(k + "_visible") }, ready: function (a) { this.timeout && clearTimeout(this.timeout), this.container.addClass(k + "_ready"), a || this.container.trigger("ready." + k, this.number) }, getCounterElem: function () { var b = this.widget.find("." + l + "counter_single"); return b.length || (b = a("<span>", { "class": h("counter", "single") }), this.widget.append(b)), b } }, d.prototype = { init: function () { this.detectParams(), this.initHtml(), setTimeout(a.proxy(this.initCounter, this), 0) }, update: function (b) { a.extend(this.options, { forceUpdate: !1 }, b), this.widget.find("." + k + "__counter").remove(), this.initCounter() }, detectService: function () { var b = this.widget.data("service"); if (!b) { for (var c = this.widget[0], d = c.classList || c.className.split(" "), e = 0; e < d.length; e++) { var f = d[e]; if (p[f]) { b = f; break } } if (!b) return } this.service = b, a.extend(this.options, p[b]) }, detectParams: function () { var a = this.widget.data(); if (a.counter) { var b = parseInt(a.counter, 10); isNaN(b) ? this.options.counterUrl = a.counter : this.options.counterNumber = b } a.title && (this.options.title = a.title), a.url && (this.options.url = a.url) }, initHtml: function () { var b = this.options, c = this.widget, d = c.find("a"); d.length && this.cloneDataAttrs(d, c); var e = a("<span>", { "class": this.getElementClassNames("button"), text: c.text() }); if (b.clickUrl) { var g = f(b.clickUrl, { url: b.url, title: b.title }), h = a("<a>", { href: g }); this.cloneDataAttrs(c, h), c.replaceWith(h), this.widget = c = h } else c.on("click", a.proxy(this.click, this)); c.removeClass(this.service), c.addClass(this.getElementClassNames("widget")), e.prepend(a("<span>", { "class": this.getElementClassNames("icon") })), c.empty().append(e), this.button = e }, initCounter: function () { if (this.options.counters) if (this.options.counterNumber) this.updateCounter(this.options.counterNumber); else { var b = { counterUrl: this.options.counterUrl, forceUpdate: this.options.forceUpdate }; q.fetch(this.service, this.options.url, b).always(a.proxy(this.updateCounter, this)) } }, cloneDataAttrs: function (a, b) { var c = a.data(); for (var d in c) c.hasOwnProperty(d) && b.data(d, c[d]) }, getElementClassNames: function (a) { return h(a, this.service) }, updateCounter: function (b) { b = parseInt(b, 10) || 0; var c = { "class": this.getElementClassNames("counter"), text: b }; b || this.options.zeroes || (c["class"] += " " + k + "__counter_empty", c.text = ""); var d = a("<span>", c); this.widget.append(d), this.widget.trigger("counter." + k, [this.service, b]) }, click: function (b) { var c = this.options, d = !0; if (a.isFunction(c.click) && (d = c.click.call(this, b)), d) { var e = f(c.popupUrl, { url: c.url, title: c.title }); e = this.addAdditionalParamsToUrl(e), this.openPopup(e, { width: c.popupWidth, height: c.popupHeight }) } return !1 }, addAdditionalParamsToUrl: function (b) { var c = a.param(a.extend(this.widget.data(), this.options.data)); if (a.isEmptyObject(c)) return b; var d = -1 === b.indexOf("?") ? "?" : "&"; return b + d + c }, openPopup: function (b, c) { var d = Math.round(screen.width / 2 - c.width / 2), e = 0; screen.height > c.height && (e = Math.round(screen.height / 3 - c.height / 2)); var f = window.open(b, "sl_" + this.service, "left=" + d + ",top=" + e + ",width=" + c.width + ",height=" + c.height + ",personalbar=0,toolbar=0,scrollbars=1,resizable=1"); if (f) { f.focus(), this.widget.trigger("popup_opened." + k, [this.service, f]); var g = setInterval(a.proxy(function () { f.closed && (clearInterval(g), this.widget.trigger("popup_closed." + k, this.service)) }, this), this.options.popupCheckInterval) } else location.href = b } }, a(function () { a("." + k).socialLikes() }) });
/* End */
;
; /* Start:"a:4:{s:4:"full";s:68:"/local/templates/Vivon2019/js/jquery.bxslider.min.js?158329289023543";s:6:"source";s:52:"/local/templates/Vivon2019/js/jquery.bxslider.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * bxSlider v4.2.12
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
!function (t) { var e = { mode: "horizontal", slideSelector: "", infiniteLoop: !0, hideControlOnEnd: !1, speed: 500, easing: null, slideMargin: 0, startSlide: 0, randomStart: !1, captions: !1, ticker: !1, tickerHover: !1, adaptiveHeight: !1, adaptiveHeightSpeed: 500, video: !1, useCSS: !0, preloadImages: "visible", responsive: !0, slideZIndex: 50, wrapperClass: "bx-wrapper", touchEnabled: !0, swipeThreshold: 50, oneToOneTouch: !0, preventDefaultSwipeX: !0, preventDefaultSwipeY: !1, ariaLive: !0, ariaHidden: !0, keyboardEnabled: !1, pager: !0, pagerType: "full", pagerShortSeparator: " / ", pagerSelector: null, buildPager: null, pagerCustom: null, controls: !0, nextText: "Next", prevText: "Prev", nextSelector: null, prevSelector: null, autoControls: !1, startText: "Start", stopText: "Stop", autoControlsCombine: !1, autoControlsSelector: null, auto: !1, pause: 4e3, autoStart: !0, autoDirection: "next", stopAutoOnClick: !1, autoHover: !1, autoDelay: 0, autoSlideForOnePage: !1, minSlides: 1, maxSlides: 1, moveSlides: 0, slideWidth: 0, shrinkItems: !1, onSliderLoad: function () { return !0 }, onSlideBefore: function () { return !0 }, onSlideAfter: function () { return !0 }, onSlideNext: function () { return !0 }, onSlidePrev: function () { return !0 }, onSliderResize: function () { return !0 } }; t.fn.bxSlider = function (n) { if (0 === this.length) return this; if (this.length > 1) return this.each(function () { t(this).bxSlider(n) }), this; var s = {}, o = this, r = t(window).width(), a = t(window).height(); if (!t(o).data("bxSlider")) { var l = function () { t(o).data("bxSlider") || (s.settings = t.extend({}, e, n), s.settings.slideWidth = parseInt(s.settings.slideWidth), s.children = o.children(s.settings.slideSelector), s.children.length < s.settings.minSlides && (s.settings.minSlides = s.children.length), s.children.length < s.settings.maxSlides && (s.settings.maxSlides = s.children.length), s.settings.randomStart && (s.settings.startSlide = Math.floor(Math.random() * s.children.length)), s.active = { index: s.settings.startSlide }, s.carousel = s.settings.minSlides > 1 || s.settings.maxSlides > 1, s.carousel && (s.settings.preloadImages = "all"), s.minThreshold = s.settings.minSlides * s.settings.slideWidth + (s.settings.minSlides - 1) * s.settings.slideMargin, s.maxThreshold = s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin, s.working = !1, s.controls = {}, s.interval = null, s.animProp = "vertical" === s.settings.mode ? "top" : "left", s.usingCSS = s.settings.useCSS && "fade" !== s.settings.mode && function () { for (var t = document.createElement("div"), e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], i = 0; i < e.length; i++)if (void 0 !== t.style[e[i]]) return s.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), s.animProp = "-" + s.cssPrefix + "-transform", !0; return !1 }(), "vertical" === s.settings.mode && (s.settings.maxSlides = s.settings.minSlides), o.data("origStyle", o.attr("style")), o.children(s.settings.slideSelector).each(function () { t(this).data("origStyle", t(this).attr("style")) }), d()) }, d = function () { var e = s.children.eq(s.settings.startSlide); o.wrap('<div class="' + s.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), s.viewport = o.parent(), s.settings.ariaLive && !s.settings.ticker && s.viewport.attr("aria-live", "polite"), s.loader = t('<div class="bx-loading" />'), s.viewport.prepend(s.loader), o.css({ width: "horizontal" === s.settings.mode ? 1e3 * s.children.length + 215 + "%" : "auto", position: "relative" }), s.usingCSS && s.settings.easing ? o.css("-" + s.cssPrefix + "-transition-timing-function", s.settings.easing) : s.settings.easing || (s.settings.easing = "swing"), s.viewport.css({ width: "100%", overflow: "hidden", position: "relative" }), s.viewport.parent().css({ maxWidth: u() }), s.children.css({ float: "horizontal" === s.settings.mode ? "left" : "none", listStyle: "none", position: "relative" }), s.children.css("width", h()), "horizontal" === s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginRight", s.settings.slideMargin), "vertical" === s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginBottom", s.settings.slideMargin), "fade" === s.settings.mode && (s.children.css({ position: "absolute", zIndex: 0, display: "none" }), s.children.eq(s.settings.startSlide).css({ zIndex: s.settings.slideZIndex, display: "block" })), s.controls.el = t('<div class="bx-controls" />'), s.settings.captions && P(), s.active.last = s.settings.startSlide === f() - 1, s.settings.video && o.fitVids(), ("all" === s.settings.preloadImages || s.settings.ticker) && (e = s.children), s.settings.ticker ? s.settings.pager = !1 : (s.settings.controls && C(), s.settings.auto && s.settings.autoControls && T(), s.settings.pager && w(), (s.settings.controls || s.settings.autoControls || s.settings.pager) && s.viewport.after(s.controls.el)), c(e, g) }, c = function (e, i) { var n = e.find('img:not([src=""]), iframe').length, s = 0; return 0 === n ? void i() : void e.find('img:not([src=""]), iframe').each(function () { t(this).one("load error", function () { ++s === n && i() }).each(function () { this.complete && t(this).trigger("load") }) }) }, g = function () { if (s.settings.infiniteLoop && "fade" !== s.settings.mode && !s.settings.ticker) { var e = "vertical" === s.settings.mode ? s.settings.minSlides : s.settings.maxSlides, i = s.children.slice(0, e).clone(!0).addClass("bx-clone"), n = s.children.slice(-e).clone(!0).addClass("bx-clone"); s.settings.ariaHidden && (i.attr("aria-hidden", !0), n.attr("aria-hidden", !0)), o.append(i).prepend(n) } s.loader.remove(), m(), "vertical" === s.settings.mode && (s.settings.adaptiveHeight = !0), s.viewport.height(p()), o.redrawSlider(), s.settings.onSliderLoad.call(o, s.active.index), s.initialized = !0, s.settings.responsive && t(window).bind("resize", Z), s.settings.auto && s.settings.autoStart && (f() > 1 || s.settings.autoSlideForOnePage) && H(), s.settings.ticker && W(), s.settings.pager && I(s.settings.startSlide), s.settings.controls && D(), s.settings.touchEnabled && !s.settings.ticker && N(), s.settings.keyboardEnabled && !s.settings.ticker && t(document).keydown(F) }, p = function () { var e = 0, n = t(); if ("vertical" === s.settings.mode || s.settings.adaptiveHeight) if (s.carousel) { var o = 1 === s.settings.moveSlides ? s.active.index : s.active.index * x(); for (n = s.children.eq(o), i = 1; i <= s.settings.maxSlides - 1; i++)n = o + i >= s.children.length ? n.add(s.children.eq(i - 1)) : n.add(s.children.eq(o + i)) } else n = s.children.eq(s.active.index); else n = s.children; return "vertical" === s.settings.mode ? (n.each(function (i) { e += t(this).outerHeight() }), s.settings.slideMargin > 0 && (e += s.settings.slideMargin * (s.settings.minSlides - 1))) : e = Math.max.apply(Math, n.map(function () { return t(this).outerHeight(!1) }).get()), "border-box" === s.viewport.css("box-sizing") ? e += parseFloat(s.viewport.css("padding-top")) + parseFloat(s.viewport.css("padding-bottom")) + parseFloat(s.viewport.css("border-top-width")) + parseFloat(s.viewport.css("border-bottom-width")) : "padding-box" === s.viewport.css("box-sizing") && (e += parseFloat(s.viewport.css("padding-top")) + parseFloat(s.viewport.css("padding-bottom"))), e }, u = function () { var t = "100%"; return s.settings.slideWidth > 0 && (t = "horizontal" === s.settings.mode ? s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin : s.settings.slideWidth), t }, h = function () { var t = s.settings.slideWidth, e = s.viewport.width(); if (0 === s.settings.slideWidth || s.settings.slideWidth > e && !s.carousel || "vertical" === s.settings.mode) t = e; else if (s.settings.maxSlides > 1 && "horizontal" === s.settings.mode) { if (e > s.maxThreshold) return t; e < s.minThreshold ? t = (e - s.settings.slideMargin * (s.settings.minSlides - 1)) / s.settings.minSlides : s.settings.shrinkItems && (t = Math.floor((e + s.settings.slideMargin) / Math.ceil((e + s.settings.slideMargin) / (t + s.settings.slideMargin)) - s.settings.slideMargin)) } return t }, v = function () { var t = 1, e = null; return "horizontal" === s.settings.mode && s.settings.slideWidth > 0 ? s.viewport.width() < s.minThreshold ? t = s.settings.minSlides : s.viewport.width() > s.maxThreshold ? t = s.settings.maxSlides : (e = s.children.first().width() + s.settings.slideMargin, t = Math.floor((s.viewport.width() + s.settings.slideMargin) / e)) : "vertical" === s.settings.mode && (t = s.settings.minSlides), t }, f = function () { var t = 0, e = 0, i = 0; if (s.settings.moveSlides > 0) if (s.settings.infiniteLoop) t = Math.ceil(s.children.length / x()); else for (; e < s.children.length;)++t, e = i + v(), i += s.settings.moveSlides <= v() ? s.settings.moveSlides : v(); else t = Math.ceil(s.children.length / v()); return t }, x = function () { return s.settings.moveSlides > 0 && s.settings.moveSlides <= v() ? s.settings.moveSlides : v() }, m = function () { var t, e, i; s.children.length > s.settings.maxSlides && s.active.last && !s.settings.infiniteLoop ? "horizontal" === s.settings.mode ? (e = s.children.last(), t = e.position(), S(-(t.left - (s.viewport.width() - e.outerWidth())), "reset", 0)) : "vertical" === s.settings.mode && (i = s.children.length - s.settings.minSlides, t = s.children.eq(i).position(), S(-t.top, "reset", 0)) : (t = s.children.eq(s.active.index * x()).position(), s.active.index === f() - 1 && (s.active.last = !0), void 0 !== t && ("horizontal" === s.settings.mode ? S(-t.left, "reset", 0) : "vertical" === s.settings.mode && S(-t.top, "reset", 0))) }, S = function (e, i, n, r) { var a, l; s.usingCSS ? (l = "vertical" === s.settings.mode ? "translate3d(0, " + e + "px, 0)" : "translate3d(" + e + "px, 0, 0)", o.css("-" + s.cssPrefix + "-transition-duration", n / 1e3 + "s"), "slide" === i ? (o.css(s.animProp, l), 0 !== n ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (e) { t(e.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), q()) }) : q()) : "reset" === i ? o.css(s.animProp, l) : "ticker" === i && (o.css("-" + s.cssPrefix + "-transition-timing-function", "linear"), o.css(s.animProp, l), 0 !== n ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (e) { t(e.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), S(r.resetValue, "reset", 0), L()) }) : (S(r.resetValue, "reset", 0), L()))) : (a = {}, a[s.animProp] = e, "slide" === i ? o.animate(a, n, s.settings.easing, function () { q() }) : "reset" === i ? o.css(s.animProp, e) : "ticker" === i && o.animate(a, n, "linear", function () { S(r.resetValue, "reset", 0), L() })) }, b = function () { for (var e = "", i = "", n = f(), o = 0; o < n; o++)i = "", s.settings.buildPager && t.isFunction(s.settings.buildPager) || s.settings.pagerCustom ? (i = s.settings.buildPager(o), s.pagerEl.addClass("bx-custom-pager")) : (i = o + 1, s.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + o + '" class="bx-pager-link">' + i + "</a></div>"; s.pagerEl.html(e) }, w = function () { s.settings.pagerCustom ? s.pagerEl = t(s.settings.pagerCustom) : (s.pagerEl = t('<div class="bx-pager" />'), s.settings.pagerSelector ? t(s.settings.pagerSelector).html(s.pagerEl) : s.controls.el.addClass("bx-has-pager").append(s.pagerEl), b()), s.pagerEl.on("click touchend", "a", z) }, C = function () { s.controls.next = t('<a class="bx-next" href="">' + s.settings.nextText + "</a>"), s.controls.prev = t('<a class="bx-prev" href="">' + s.settings.prevText + "</a>"), s.controls.next.bind("click touchend", E), s.controls.prev.bind("click touchend", k), s.settings.nextSelector && t(s.settings.nextSelector).append(s.controls.next), s.settings.prevSelector && t(s.settings.prevSelector).append(s.controls.prev), s.settings.nextSelector || s.settings.prevSelector || (s.controls.directionEl = t('<div class="bx-controls-direction" />'), s.controls.directionEl.append(s.controls.prev).append(s.controls.next), s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl)) }, T = function () { s.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + s.settings.startText + "</a></div>"), s.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + s.settings.stopText + "</a></div>"), s.controls.autoEl = t('<div class="bx-controls-auto" />'), s.controls.autoEl.on("click", ".bx-start", M), s.controls.autoEl.on("click", ".bx-stop", y), s.settings.autoControlsCombine ? s.controls.autoEl.append(s.controls.start) : s.controls.autoEl.append(s.controls.start).append(s.controls.stop), s.settings.autoControlsSelector ? t(s.settings.autoControlsSelector).html(s.controls.autoEl) : s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl), A(s.settings.autoStart ? "stop" : "start") }, P = function () { s.children.each(function (e) { var i = t(this).find("img:first").attr("title"); void 0 !== i && ("" + i).length && t(this).append('<div class="bx-caption"><span>' + i + "</span></div>") }) }, E = function (t) { t.preventDefault(), s.controls.el.hasClass("disabled") || (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(), o.goToNextSlide()) }, k = function (t) { t.preventDefault(), s.controls.el.hasClass("disabled") || (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(), o.goToPrevSlide()) }, M = function (t) { o.startAuto(), t.preventDefault() }, y = function (t) { o.stopAuto(), t.preventDefault() }, z = function (e) { var i, n; e.preventDefault(), s.controls.el.hasClass("disabled") || (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(), i = t(e.currentTarget), void 0 !== i.attr("data-slide-index") && (n = parseInt(i.attr("data-slide-index")), n !== s.active.index && o.goToSlide(n))) }, I = function (e) { var i = s.children.length; return "short" === s.settings.pagerType ? (s.settings.maxSlides > 1 && (i = Math.ceil(s.children.length / s.settings.maxSlides)), void s.pagerEl.html(e + 1 + s.settings.pagerShortSeparator + i)) : (s.pagerEl.find("a").removeClass("active"), void s.pagerEl.each(function (i, n) { t(n).find("a").eq(e).addClass("active") })) }, q = function () { if (s.settings.infiniteLoop) { var t = ""; 0 === s.active.index ? t = s.children.eq(0).position() : s.active.index === f() - 1 && s.carousel ? t = s.children.eq((f() - 1) * x()).position() : s.active.index === s.children.length - 1 && (t = s.children.eq(s.children.length - 1).position()), t && ("horizontal" === s.settings.mode ? S(-t.left, "reset", 0) : "vertical" === s.settings.mode && S(-t.top, "reset", 0)) } s.working = !1, s.settings.onSlideAfter.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index) }, A = function (t) { s.settings.autoControlsCombine ? s.controls.autoEl.html(s.controls[t]) : (s.controls.autoEl.find("a").removeClass("active"), s.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active")) }, D = function () { 1 === f() ? (s.controls.prev.addClass("disabled"), s.controls.next.addClass("disabled")) : !s.settings.infiniteLoop && s.settings.hideControlOnEnd && (0 === s.active.index ? (s.controls.prev.addClass("disabled"), s.controls.next.removeClass("disabled")) : s.active.index === f() - 1 ? (s.controls.next.addClass("disabled"), s.controls.prev.removeClass("disabled")) : (s.controls.prev.removeClass("disabled"), s.controls.next.removeClass("disabled"))) }, H = function () { if (s.settings.autoDelay > 0) { setTimeout(o.startAuto, s.settings.autoDelay) } else o.startAuto(), t(window).focus(function () { o.startAuto() }).blur(function () { o.stopAuto() }); s.settings.autoHover && o.hover(function () { s.interval && (o.stopAuto(!0), s.autoPaused = !0) }, function () { s.autoPaused && (o.startAuto(!0), s.autoPaused = null) }) }, W = function () { var e, i, n, r, a, l, d, c, g = 0; "next" === s.settings.autoDirection ? o.append(s.children.clone().addClass("bx-clone")) : (o.prepend(s.children.clone().addClass("bx-clone")), e = s.children.first().position(), g = "horizontal" === s.settings.mode ? -e.left : -e.top), S(g, "reset", 0), s.settings.pager = !1, s.settings.controls = !1, s.settings.autoControls = !1, s.settings.tickerHover && (s.usingCSS ? (r = "horizontal" === s.settings.mode ? 4 : 5, s.viewport.hover(function () { i = o.css("-" + s.cssPrefix + "-transform"), n = parseFloat(i.split(",")[r]), S(n, "reset", 0) }, function () { c = 0, s.children.each(function (e) { c += "horizontal" === s.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0) }), a = s.settings.speed / c, l = "horizontal" === s.settings.mode ? "left" : "top", d = a * (c - Math.abs(parseInt(n))), L(d) })) : s.viewport.hover(function () { o.stop() }, function () { c = 0, s.children.each(function (e) { c += "horizontal" === s.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0) }), a = s.settings.speed / c, l = "horizontal" === s.settings.mode ? "left" : "top", d = a * (c - Math.abs(parseInt(o.css(l)))), L(d) })), L() }, L = function (t) { var e, i, n, r = t ? t : s.settings.speed, a = { left: 0, top: 0 }, l = { left: 0, top: 0 }; "next" === s.settings.autoDirection ? a = o.find(".bx-clone").first().position() : l = s.children.first().position(), e = "horizontal" === s.settings.mode ? -a.left : -a.top, i = "horizontal" === s.settings.mode ? -l.left : -l.top, n = { resetValue: i }, S(e, "ticker", r, n) }, O = function (e) { var i = t(window), n = { top: i.scrollTop(), left: i.scrollLeft() }, s = e.offset(); return n.right = n.left + i.width(), n.bottom = n.top + i.height(), s.right = s.left + e.outerWidth(), s.bottom = s.top + e.outerHeight(), !(n.right < s.left || n.left > s.right || n.bottom < s.top || n.top > s.bottom) }, F = function (t) { var e = document.activeElement.tagName.toLowerCase(), i = "input|textarea", n = new RegExp(e, ["i"]), s = n.exec(i); if (null == s && O(o)) { if (39 === t.keyCode) return E(t), !1; if (37 === t.keyCode) return k(t), !1 } }, N = function () { s.touch = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }, s.viewport.bind("touchstart MSPointerDown pointerdown", X), s.viewport.on("click", ".bxslider a", function (t) { s.viewport.hasClass("click-disabled") && (t.preventDefault(), s.viewport.removeClass("click-disabled")) }) }, X = function (t) { if (s.controls.el.addClass("disabled"), s.working) t.preventDefault(), s.controls.el.removeClass("disabled"); else { s.touch.originalPos = o.position(); var e = t.originalEvent, i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e]; s.touch.start.x = i[0].pageX, s.touch.start.y = i[0].pageY, s.viewport.get(0).setPointerCapture && (s.pointerId = e.pointerId, s.viewport.get(0).setPointerCapture(s.pointerId)), s.viewport.bind("touchmove MSPointerMove pointermove", V), s.viewport.bind("touchend MSPointerUp pointerup", R), s.viewport.bind("MSPointerCancel pointercancel", Y) } }, Y = function (t) { S(s.touch.originalPos.left, "reset", 0), s.controls.el.removeClass("disabled"), s.viewport.unbind("MSPointerCancel pointercancel", Y), s.viewport.unbind("touchmove MSPointerMove pointermove", V), s.viewport.unbind("touchend MSPointerUp pointerup", R), s.viewport.get(0).releasePointerCapture && s.viewport.get(0).releasePointerCapture(s.pointerId) }, V = function (t) { var e = t.originalEvent, i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e], n = Math.abs(i[0].pageX - s.touch.start.x), o = Math.abs(i[0].pageY - s.touch.start.y), r = 0, a = 0; 3 * n > o && s.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * o > n && s.settings.preventDefaultSwipeY && t.preventDefault(), "fade" !== s.settings.mode && s.settings.oneToOneTouch && ("horizontal" === s.settings.mode ? (a = i[0].pageX - s.touch.start.x, r = s.touch.originalPos.left + a) : (a = i[0].pageY - s.touch.start.y, r = s.touch.originalPos.top + a), S(r, "reset", 0)) }, R = function (t) { s.viewport.unbind("touchmove MSPointerMove pointermove", V), s.controls.el.removeClass("disabled"); var e = t.originalEvent, i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e], n = 0, r = 0; s.touch.end.x = i[0].pageX, s.touch.end.y = i[0].pageY, "fade" === s.settings.mode ? (r = Math.abs(s.touch.start.x - s.touch.end.x), r >= s.settings.swipeThreshold && (s.touch.start.x > s.touch.end.x ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto())) : ("horizontal" === s.settings.mode ? (r = s.touch.end.x - s.touch.start.x, n = s.touch.originalPos.left) : (r = s.touch.end.y - s.touch.start.y, n = s.touch.originalPos.top), !s.settings.infiniteLoop && (0 === s.active.index && r > 0 || s.active.last && r < 0) ? S(n, "reset", 200) : Math.abs(r) >= s.settings.swipeThreshold ? (r < 0 ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto()) : S(n, "reset", 200)), s.viewport.unbind("touchend MSPointerUp pointerup", R), s.viewport.get(0).releasePointerCapture && s.viewport.get(0).releasePointerCapture(s.pointerId) }, Z = function (e) { if (s.initialized) if (s.working) window.setTimeout(Z, 10); else { var i = t(window).width(), n = t(window).height(); r === i && a === n || (r = i, a = n, o.redrawSlider(), s.settings.onSliderResize.call(o, s.active.index)) } }, B = function (t) { var e = v(); s.settings.ariaHidden && !s.settings.ticker && (s.children.attr("aria-hidden", "true"), s.children.slice(t, t + e).attr("aria-hidden", "false")) }, U = function (t) { return t < 0 ? s.settings.infiniteLoop ? f() - 1 : s.active.index : t >= f() ? s.settings.infiniteLoop ? 0 : s.active.index : t }; return o.goToSlide = function (e, i) { var n, r, a, l, d = !0, c = 0, g = { left: 0, top: 0 }, u = null; if (s.oldIndex = s.active.index, s.active.index = U(e), !s.working && s.active.index !== s.oldIndex) { if (s.working = !0, d = s.settings.onSlideBefore.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index), "undefined" != typeof d && !d) return s.active.index = s.oldIndex, void (s.working = !1); "next" === i ? s.settings.onSlideNext.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index) || (d = !1) : "prev" === i && (s.settings.onSlidePrev.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index) || (d = !1)), s.active.last = s.active.index >= f() - 1, (s.settings.pager || s.settings.pagerCustom) && I(s.active.index), s.settings.controls && D(), "fade" === s.settings.mode ? (s.settings.adaptiveHeight && s.viewport.height() !== p() && s.viewport.animate({ height: p() }, s.settings.adaptiveHeightSpeed), s.children.filter(":visible").fadeOut(s.settings.speed).css({ zIndex: 0 }), s.children.eq(s.active.index).css("zIndex", s.settings.slideZIndex + 1).fadeIn(s.settings.speed, function () { t(this).css("zIndex", s.settings.slideZIndex), q() })) : (s.settings.adaptiveHeight && s.viewport.height() !== p() && s.viewport.animate({ height: p() }, s.settings.adaptiveHeightSpeed), !s.settings.infiniteLoop && s.carousel && s.active.last ? "horizontal" === s.settings.mode ? (u = s.children.eq(s.children.length - 1), g = u.position(), c = s.viewport.width() - u.outerWidth()) : (n = s.children.length - s.settings.minSlides, g = s.children.eq(n).position()) : s.carousel && s.active.last && "prev" === i ? (r = 1 === s.settings.moveSlides ? s.settings.maxSlides - x() : (f() - 1) * x() - (s.children.length - s.settings.maxSlides), u = o.children(".bx-clone").eq(r), g = u.position()) : "next" === i && 0 === s.active.index ? (g = o.find("> .bx-clone").eq(s.settings.maxSlides).position(), s.active.last = !1) : e >= 0 && (l = e * parseInt(x()), g = s.children.eq(l).position()), "undefined" != typeof g ? (a = "horizontal" === s.settings.mode ? -(g.left - c) : -g.top, S(a, "slide", s.settings.speed)) : s.working = !1), s.settings.ariaHidden && B(s.active.index * x()) } }, o.goToNextSlide = function () { if (s.settings.infiniteLoop || !s.active.last) { var t = parseInt(s.active.index) + 1; o.goToSlide(t, "next") } }, o.goToPrevSlide = function () { if (s.settings.infiniteLoop || 0 !== s.active.index) { var t = parseInt(s.active.index) - 1; o.goToSlide(t, "prev") } }, o.startAuto = function (t) { s.interval || (s.interval = setInterval(function () { "next" === s.settings.autoDirection ? o.goToNextSlide() : o.goToPrevSlide() }, s.settings.pause), s.settings.autoControls && t !== !0 && A("stop")) }, o.stopAuto = function (t) { s.interval && (clearInterval(s.interval), s.interval = null, s.settings.autoControls && t !== !0 && A("start")) }, o.getCurrentSlide = function () { return s.active.index }, o.getCurrentSlideElement = function () { return s.children.eq(s.active.index) }, o.getSlideElement = function (t) { return s.children.eq(t) }, o.getSlideCount = function () { return s.children.length }, o.isWorking = function () { return s.working }, o.redrawSlider = function () { s.children.add(o.find(".bx-clone")).outerWidth(h()), s.viewport.css("height", p()), s.settings.ticker || m(), s.active.last && (s.active.index = f() - 1), s.active.index >= f() && (s.active.last = !0), s.settings.pager && !s.settings.pagerCustom && (b(), I(s.active.index)), s.settings.ariaHidden && B(s.active.index * x()) }, o.destroySlider = function () { s.initialized && (s.initialized = !1, t(".bx-clone", this).remove(), s.children.each(function () { void 0 !== t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style") }), void 0 !== t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), s.controls.el && s.controls.el.remove(), s.controls.next && s.controls.next.remove(), s.controls.prev && s.controls.prev.remove(), s.pagerEl && s.settings.controls && !s.settings.pagerCustom && s.pagerEl.remove(), t(".bx-caption", this).remove(), s.controls.autoEl && s.controls.autoEl.remove(), clearInterval(s.interval), s.settings.responsive && t(window).unbind("resize", Z), s.settings.keyboardEnabled && t(document).unbind("keydown", F), t(this).removeData("bxSlider")) }, o.reloadSlider = function (e) { void 0 !== e && (n = e), o.destroySlider(), l(), t(o).data("bxSlider", this) }, l(), t(o).data("bxSlider", this), this } } }(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:55:"/local/templates/Vivon2019/js/script.js?162997737030624";s:6:"source";s:39:"/local/templates/Vivon2019/js/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function () {

  $(".list-scroll-images-item").on('mouseover', function () {


    var contItem = $(this).parents('.catalog-item-img');
    var contImage = contItem.find('.container-image img');

    if ($(this).data('img')) {
      contImage.attr('src', $(this).data('img'));
      if ($(this).data('ballkey')) {
        $(".list-scroll-images-ball").removeClass('sel');
        $("[data-ball=" + $(this).data('ballkey') + "]").addClass('sel');
      }
    }


  });


  $(".list-scroll-images").on('mouseleave', function (e) {


    var contItem = $(this).parents('.catalog-item-img');
    var contImage = contItem.find('.container-image img');
    var firstImage = contItem.find('.list-scroll-images-item').first();

    if (firstImage.data('img')) {
      contImage.attr('src', firstImage.data('img'));
      if (firstImage.data('ballkey')) {
        $(".list-scroll-images-ball").removeClass('sel');
        $("[data-ball=" + firstImage.data('ballkey') + "]").addClass('sel');
      }
    }


  });


  $.fancybox.defaults.tpl['closeBtn'] = '<a title="??????????????" class="fancybox-item fancybox-close" href="javascript:;"></a>';


  $('.readmore').on('click', function () {

    var parent_block = $(this).parent('.text_block-wrapper'),
      $status = $(this).data('status'),
      $text_block = parent_block.children('.text_block'),
      $text_overlay = parent_block.children('.text_block-overlay');

    if ($status == 0) {
      $text_block.css('height', 'auto');
      $text_overlay.css('display', 'none');

      $(this).html('????????????????');
      $(this).data('status', '1')
    } else {
      $text_block.css('height', '170px');
      $text_overlay.css('display', 'block');
      $(this).html('???????????? ??????????');
      $(this).data('status', '0')
    }


    return false;
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 70) $('.menu').addClass('fixed');
    else $('.menu').removeClass('fixed');
  });

  $('.menu .menu-catalog').on('hover', function () {
    $(this).toggleClass('hover');
  });

  $('#menu-slide').on('hover', function () {
    $('.menu .menu-catalog').toggleClass('hover');
  });


  /*$('.complect').on('scroll', function() {
      console.log('top='+$(this).scrollTop());
  });*/
  /*$(window).on('scroll', function() {
      console.log('body height='+$('body').height());
      console.log('complect height='+$('.complect').height());
      console.log('result height='+($('body').height()-$('.complect').height()));
      console.log('top='+$('body').scrollTop());
  });*/
  $('#pr_order').stick_in_parent();

  $('.sel-all').click(function () {
    var sel = $(this).data('cls');
    console.log(sel);
    if ($(this).prop('checked') === true) $('.' + sel).prop('checked', false);
    $('.' + sel).trigger("click");
  });

  $('#over').click(function () {
    $(".epoq_filterList").removeClass("epoq_openedStat");
    $(".epoq_header").removeClass("epoq_openedStat");
    $("#over").removeClass('active');
    $("#buble").hide();
  });

  $('.close-btn').click(function () {
    $(".epoq_filterList").removeClass("epoq_openedStat");
    $(".epoq_header").removeClass("epoq_openedStat");
    $("#over").removeClass('active');
  });

  $('.epoq_header, .epoq_header_sort').click(function () {

    $('.lvl2 input').prop('disabled', false);
    $('.lvl2_disabled input').prop('disabled', true);
    $('.epoq_header').removeClass('active');
    $(this).addClass('active');
    $currentClickedStat = $(this).parent().find(".epoq_filterList");
    if ($currentClickedStat.hasClass("epoq_openedStat")) {
      $(".epoq_filterList").removeClass("epoq_openedStat");
      $(".epoq_header").removeClass("epoq_openedStat");
      $("#over").removeClass('active');
      //$("#buble").hide();
    } else {
      //$("#buble").hide();
      $(".epoq_filterList").removeClass("epoq_openedStat");
      $(".epoq_header").removeClass("epoq_openedStat");

      $("#over").addClass('active');

      $currentClickedStat.addClass("epoq_openedStat");
      $(this).addClass("epoq_openedStat");
    }
  });

  $('.lvl2 input').click(function (event) {
    //console.log(event);
    posX = parseInt(event.clientX) + 60;
    posY = parseInt(event.clientY) - 15;
    $('#buble').css('top', posY + 'px');
    $('#buble').css('left', posX + 'px');
  });

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  $("#login-but").click(function (e) {
    e.preventDefault();
    $.fancybox.open($('#popup_enter'), {
      padding: 0
    });
    return false;
  });
  $('#user-city').click(function (e) {
    e.preventDefault();
    $.fancybox.open('#cities-list');
    return false;
  });

  $(document).on('click', '.buy-button', function (e) {
    e.preventDefault()
    $.fancybox.open($('#popup_product'), {
      padding: 0,
    })
    return false
  });

  $(document).on('click', '.buy-button-c', function (e) {

    e.preventDefault();


    if ($(this).data('constract')) return;
    var href = $(this).attr('href');
    var id = $(this).data('id');

    var data = { 'productID': id };

    var quantityInp = $('#quantity_prod');
    if (quantityInp[0]) {
      var quantity = 1;
      var unit = false;
      if (quantityInp.data('cnt')) {
        quantity = quantityInp.data('cnt');
        unit = quantityInp.parents('.product-block-q').find('.prod-input-units .unit.active').data('unit');
      }
      data['quantity'] = quantity;
      data['unit'] = unit;
    }

    $.ajax({
      type: "POST",
      url: '/ajax/add2cart.php',
      dataType: 'json',
      data: data,
      success: function (result) {
        if (result && result.status == 'OK') {
          $.fancybox.open($('#popup_product_plika'), {
            padding: 0,
            closeBtn: false,
            helpers: {
              overlay: {
                locked: false
              }
            },
            beforeShow: function () {



              $("#popup_product_plika .popup-product-img").html(result.data.img);
              $("#popup_product_plika .popup-product-text-name").html(result.data.name);
              $("#popup_product_plika .popup-product-text-price").html(result.data.price);

              $("#popup_product_plika .quantity_prod").val(result.data.quantity.value);
              $("#popup_product_plika .quantity_prod").data("inbox", result.data.quantity.inbox);
              $("#popup_product_plika .quantity_prod").data("celin", result.data.quantity.celin);
              $("#popup_product_plika .quantity_prod").data("cel", result.data.quantity.cel);
              $("#popup_product_plika .quantity_prod").data("box", result.data.quantity.box);
              $("#popup_product_plika .quantity_prod").data("cnt", result.data.quantity.cnt);
              $("#popup_product_plika .quantity_prod").attr("data-cnt", result.data.quantity.cnt);
              $("#popup_product_plika .quantity_prod").data("bid", result.res);

              // console.log(result);
              // console.log($("#popup_product_plika .quantity_prod"));
              // console.log($("#popup_product_plika .quantity_prod").data());

              // console.log($('#popup_product_plika .prod-input-units[data-unit="sht"]'));

              //console.log();

              if (result.data.unit && result.data.quantity.bm2) {
                $("#popup_product_plika .prod-input-units .unit").removeClass('active').removeClass('readonly').removeClass('hidden');
                $('#popup_product_plika .prod-input-units .unit[data-unit="' + result.data.unit + '"]').addClass('active');
              }
              else {
                $("#popup_product_plika .prod-input-units .unit").removeClass('active').removeClass('readonly').addClass('hidden');
                $('#popup_product_plika .prod-input-units .unit[data-unit="sht"]').removeClass('hidden').addClass('active').addClass('readonly');
              }
            },
            afterShow: function () {
              $("#popup_product_plika .gray-button").click(function () { $.fancybox.close(true); return false; });
            }
          });

          if (result.data.basket) {
            $("#top-basket").html(result.data.basket);
          }

          window.dataLayer = window.dataLayer || [];
          dataLayer.push({
            "ecommerce": {
              "add": {
                "products": [
                  {
                    "id": result.basketItem.PRODUCT_ID,
                    "name": result.data.name,
                    "price": result.data.price_value,
                    "brand": result.data.brand,
                    "category": result.data.category,
                    "variant": "",
                    "quantity": 1
                  }
                ]
              }
            }
          });
        }
      }
    });


    return false;
  });

  function calcQuantityProd(operation, obj, oldUnit) {


    var cont = $(obj).parents('.cont-quantity');

    var input = cont.find('.quantity_prod');
    var inputCnt = cont.find('.quantity_cnt');
    var val = parseFloat(input.val());
    var bBox = input.data('box');
    var cel = parseFloat(input.data('cel'));
    var celIn = parseFloat(input.data('celin'));
    var cnt = parseInt(input.attr('data-cnt'));
    var cntInBox = parseInt(input.data('inbox'));
    var curUnit = cont.find(".prod-input-units .unit.active").data('unit');


    console.log(input.data());

    var bid = parseInt(input.data('bid'));

    oldUnit = oldUnit || false;

    if (!bBox) {
      if (oldUnit && oldUnit == 'upak' && curUnit != 'upak') {
        cnt = cnt * cntInBox;
        input.data('cnt', cnt);
        input.attr('data-cnt', cnt);
      }
      else if (oldUnit && curUnit == 'upak' && oldUnit != 'upak') {
        cnt = Math.ceil(cnt / cntInBox);
        input.data('cnt', cnt);
        input.attr('data-cnt', cnt);
      }
    }

    if (operation == 'plus') {
      cnt++;
      input.data('cnt', cnt);
      input.attr('data-cnt', cnt);
    }
    else if (operation == 'minus') {
      if (cnt > 1) cnt--;
      input.data('cnt', cnt);
      input.attr('data-cnt', cnt);
    }
    if (curUnit == 'm2') {
      val = cnt * cel;
    }
    else if (curUnit == 'upak') {
      val = cnt;
    }
    else if (curUnit == 'sht') {
      val = cnt * celIn;
    }
    val = Math.round(val * 100) / 100;
    input.val(val);


    if (!operation) operation = false;

    if (bid && operation) {
      $.ajax({
        type: "POST",
        url: '/ajax/add2cart.php',
        dataType: 'json',
        data: { 'basketID': bid, 'quantity': cnt, 'unit': curUnit, 'plitka': 1 },
        success: function (result) {
          if (result && result.status == 'OK') {
            $("#popup_product_plika .popup-product-img").html(result.data.img);
            $("#popup_product_plika .popup-product-text-name").html(result.data.name);
            $("#popup_product_plika .popup-product-text-price").html(result.data.price);

            $("#popup_product_plika .quantity_prod").val(result.data.quantity.value);
            $("#popup_product_plika .quantity_prod").data("inbox", result.data.quantity.inbox);
            $("#popup_product_plika .quantity_prod").data("celin", result.data.quantity.celin);
            $("#popup_product_plika .quantity_prod").data("cel", result.data.quantity.cel);
            $("#popup_product_plika .quantity_prod").data("box", result.data.quantity.box);
            $("#popup_product_plika .quantity_prod").data("cnt", result.data.quantity.cnt);
            $("#popup_product_plika .quantity_prod").data("bid", result.res);

            if (result.data.unit && result.data.quantity.bm2) {
              $("#popup_product_plika .prod-input-units .unit").removeClass('active').removeClass('readonly').removeClass('hidden');
              $('#popup_product_plika .prod-input-units .unit[data-unit="' + result.data.unit + '"]').addClass('active');
            }
            else {
              $("#popup_product_plika .prod-input-units .unit").removeClass('active').removeClass('readonly').addClass('hidden');
              $('#popup_product_plika .prod-input-units .unit[data-unit="sht"]').addClass('active').addClass('readonly').removeClass('hidden');
            }

            if (result.data.basket) {
              $("#top-basket").html(result.data.basket);
            }
          }
        }
      });
    }
  }
  function calcToUnit(val) {



  }

  $(".prod-input-quantity .plus, .prod-input-quantity .minus").on("mousedown", function (e) {
    e.preventDefault();
    return false;
  });

  $(".prod-input-quantity .plus").click(function () {
    calcQuantityProd('plus', this);
  });
  $(".prod-input-quantity .minus").click(function () {
    calcQuantityProd('minus', this);
  });



  $(".prod-input-units .unit").click(function () {
    var oldUnit = $(this).parent().find(".unit.active").data('unit');
    $(this).parent().find(".unit").removeClass('active');
    $(this).addClass('active');
    calcQuantityProd(false, this, oldUnit);
  });

  $(".addlinks-more-link").on('click', function () {
    var cont = $(this).parents('.addlinks-more');
    var block = cont.find('.addlinks-more-text');

    if (block.css('display') == 'none') {
      block.show();
      $(this).html('????????????');
    }
    else {
      block.hide();
      $(this).html('???????????????? ??????');
    }

    return false;
  });

  $(document).on('click', 'a.active_menu', function () {
    var type = $(this).data('type');
    if (type == 'all') {
      $('.top_link').addClass('active');
      $(this)
        .data('type', 'main')
        .html('<b>????????????</b>');
      //$(this).hide();
    } else {
      $('.top_link').removeClass('active');
      $(this)
        .data('type', 'all')
        .html('<b>???????????????? ??????</b>');
    }
    return false;
  });


  $(document).on('copy', function () {

    if (1) return;
    if ($(".cat-detail").length) return;

    var bodyElement = document.body;
    var selection = getSelection();
    var parent = selection.anchorNode;
    var parent2 = selection.anchorNode.parentNode;



    if ($(parent2).parents('pre').length) return;
    if ($(parent2).parents('.product-block-item').length) return;
    if (parent.nodeType == 1 && parent.tagName == 'H1') {
      return;
    }
    if (parent2.nodeType == 1 && parent2.tagName == 'H1') {
      return;
    }
    var href = document.location.href;
    var copyright = "<br>????????????????: <a href='" + href + "'>" + href + "</a>";
    var text = selection + copyright;



    var divElement = document.createElement('div');
    divElement.style.position = 'absolute';
    divElement.style.left = '-99999px';
    divElement.innerHTML = text;
    bodyElement.appendChild(divElement);
    selection.selectAllChildren(divElement);
    setTimeout(function () { bodyElement.removeChild(divElement); }, 0);
  });

  $(document).on('click', '.buy-oneclick', function (e) {

    e.preventDefault();

    $.fancybox.open($('#popup_oneclick'), {
      padding: 0,
      closeBtn: true,
      helpers: {
        overlay: {
          locked: false
        }
      },
      beforeShow: function () {


      },
      afterShow: function () {
        $("#popup_oneclick .gray-button").click(function () { $.fancybox.close(true); return false; });
        //$("#popup-oneclick-phone").mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"}).focus();
        // $("#popup-oneclick-phone").unmask();
        $("#popup-oneclick-phone").focus();

        bindValidatePhoneInput($("#popup-oneclick-phone")[0]);

        yaCounter6071065.reachGoal('kipit-v-odin-klik');

        $("#popup_oneclick .order-button").on('click', function () {
          var ajaxData = {};
          if ($('.product').length && $('.buy-button').length) {
            ajaxData = {
              'quickorder': 'Y',
              'phone': $("#popup-oneclick-phone").val(),
              'product_id': $(".buy-button").data("id")
            };
          } else {
            ajaxData = {
              'quickorder': 'Y',
              'phone': $("#popup-oneclick-phone").val()
            };
          }

          $.ajax({
            type: "POST",
            url: '/ajax/quickorder.php',
            dataType: 'json',
            data: ajaxData,
            success: function (result) {
              // console.log(result);
              if (result.error)
                $("#popup_oneclick .popup-oneclick-mess").html(result['error']);
              else if (result.success) {
                yaCounter6071065.reachGoal('zakaz');


                $("#popup_oneclick .popup-oneclick-mess").html(result['mess']);

                window.location.href = '/personal/order/make/?ORDER_ID=' + result.result;
              }
            }
          });
        });
      }
    });
    return false;
  });


  window.onSubmitCallback = function (token) {
    $.ajax({
      type: "POST",
      url: '/ajax/ajax_callback.php',
      dataType: 'json',
      data: {
        'action': 'callback',
        'phone': $("#popup-callback-phone").val(),
        'token': token,
        'url': window.location.href,
      },
      success: function (result) {
        if (result.error)
          $("#popup_callback .popup-oneclick-mess").html(result['error']);
        else if (result.success) {
          $("#popup_callback .popup-oneclick-mess").html(result['mess']);
        }
      }
    });
  }


  $(document).on('click', '.js--call-back', function (e) {

    e.preventDefault();

    $.fancybox.open($('#popup_callback'), {
      padding: 0,
      closeBtn: true,
      helpers: {
        overlay: {
          locked: false
        }
      },
      beforeShow: function () {


      },
      afterShow: function () {
        $("#popup_callback .gray-button").click(function () { $.fancybox.close(true); return false; });
        $("#popup-callback-phone").mask("+7 (999) 999-99-99", { placeholder: "+7 (___) ___-__-__" }).focus();

        // $("#popup_callback .order-button").on('click', function(){
        // 	$.ajax({
        // 		type: "POST",
        // 		url: '/ajax/ajax_callback.php',
        // 		dataType: 'json',
        // 		data: {
        //                         'action':'callback',
        //                         'phone':$("#popup-callback-phone").val(),
        //                         'url':window.location.href,
        //                     },
        // 		success: function(result){
        // 			if(result.error)
        // 				$("#popup_callback .popup-oneclick-mess").html(result['error']);
        // 			else if(result.success)
        // 			{
        // 				$("#popup_callback .popup-oneclick-mess").html(result['mess']);
        // 			}
        // 		}
        // 	});
        // });
      }
    });
    return false;
  });



});


function bindValidatePhoneInput(field) {
  $(field).on('keyup', function () {
    validatePhoneInput(this);
  });
  $(field).on('change', function () {
    validatePhoneInput(this);
  });
  $(field).on('blur', function () {
    validatePhoneInput(this, 'blur');
  });
  $(field).on('focus', function () {
    validatePhoneInputFocus(this);
  });
}


function validatePhoneInputFocus(field) {
  if ($(field).data("code") == "PROP_PHONE" || $(field).attr("name") == "phone") {
    $(field).unmask();
    var phone = $(field).val();
    var pattern = /[^\d+]/ig;
    var reshone = phone.replace(pattern, "");
    $(field).val(reshone);
  }
}

function validatePhoneInput(field, action) {
  var bValidate = true;
  if ($(field).val().length > 0) {
    if ($(field).data("code") == "PROP_PHONE" || $(field).attr("name") == "phone") {
      var needCheck = true;
      if (action == 'all') {
        if ($(field).data('valid') == 'true') {
          $(field).parent().find(".bx_text_field_ok").show();
          $(field).parent().find(".bx_field_error").text("");
          needCheck = false;
        }
        else {
          $(field).parent().find(".bx_text_field_ok").hide();
          $(field).parent().find(".bx_field_error").text("???? ???????????? ???????????? ????????????????");
          needCheck = true;
        }
      }
      else if (action == 'blur') {
        if ($(field).data('valid') == 'true') {
          var phone = $(field).val();
          $(field).val(phone.substr(-10));
          $(field).mask("+7 (999) 999-99-99");
          $(field).parent().find(".bx_text_field_ok").show();
          $(field).parent().find(".bx_field_error").text("");
          $(field).parent().addClass('ok');
          needCheck = false;
        }
        else {
          $(field).parent().find(".bx_text_field_ok").hide();
          $(field).parent().find(".bx_field_error").text("???? ???????????? ???????????? ????????????????");
          needCheck = true;
        }
      }

      if (needCheck) {

        var start_phone_d = "";
        var start_phone_d2 = "";
        var lengthPhone = 0;
        var phone = $(field).val();
        var pattern = /[^\d+]/ig;
        var reshone = phone.replace(pattern, "");
        $(field).val(reshone);

        lengthPhone = reshone.length;

        start_phone_d = reshone.substr(0, 1);
        start_phone_d2 = reshone.substr(0, 2);

        // console.log(start_phone_d);
        if ((start_phone_d == "8") || (start_phone_d == "7") || (start_phone_d2 == "+7")) {
          // $(field).parent().find(".bx_text_field_ok").show();
          $(field).data('valid', 'true');
          $(field).parent().find(".bx_field_error").text("");
        } else {
          $(field).parent().find(".bx_text_field_ok").hide();
          $(field).parent().find(".bx_field_error").text("?????????????? ???????????? ???????????????????? ?? 8 ?????? 7");
          $(field).data('valid', 'false');
          checkOrderUserFieldError = 1;
          bValidate = false;
        }
        if (start_phone_d2 == "+7") {
          lengthPhone--;
        }

        if (bValidate && lengthPhone < 11) {
          $(field).parent().find(".bx_text_field_ok").hide();
          $(field).parent().find(".bx_field_error").text("???????? ???????????? ?????????????????? ?????????????? 11 ????????");
          checkOrderUserFieldError = 1;
          bValidate = false;
          $(field).data('valid', 'false');
        }
        if (bValidate && lengthPhone > 11) {
          $(field).parent().find(".bx_text_field_ok").hide();
          $(field).parent().find(".bx_field_error").text("???????? ???????????? ?????????????????? ???????????????? 11 ????????");
          checkOrderUserFieldError = 1;
          bValidate = false;
          $(field).data('valid', 'false');
        }


        if (action == 'all' && bValidate) {
          $(field).data('valid', 'true');
          var phone = $(field).val();
          $(field).val(phone.substr(-10));
          $(field).mask("+7 (999) 999-99-99");
          $(field).parent().addClass('ok');
        }
      }
    }
  }
  else if (($(field).data('required') == "true" || $(field).data('required') == true)) {
    $(field).parent().find(".bx_text_field_ok").hide();
    $(field).parent().find(".bx_field_error").text("???????? ???? ??????????????????").show();
    checkOrderUserFieldError = 1;
    bValidate = false;
  }

  if (bValidate == false) {
    $(field).parent().removeClass('ok');
    $(field).parent().addClass('error');
  }
  else {
    //$(field).parent().addClass('ok');
    $(field).parent().removeClass('error');
  }

  return bValidate;
}



/* End */
;
; /* Start:"a:4:{s:4:"full";s:73:"/local/templates/Vivon2019/js/jquery-ui/jquery-ui.min.js?1426038574240427";s:6:"source";s:56:"/local/templates/Vivon2019/js/jquery-ui/jquery-ui.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery UI - v1.11.4 - 2015-03-11
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, draggable.js, droppable.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js, menu.js, progressbar.js, resizable.js, selectable.js, selectmenu.js, slider.js, sortable.js, spinner.js, tabs.js, tooltip.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function (e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery) })(function (e) {
  function t(t, s) { var n, a, o, r = t.nodeName.toLowerCase(); return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t) } function i(t) { return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () { return "hidden" === e.css(this, "visibility") }).length } function s(e) { for (var t, i; e.length && e[0] !== document;) { if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i; e = e.parent() } return 0 } function n() { this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = a(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) } function a(t) { var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return t.delegate(i, "mouseout", function () { e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover") }).delegate(i, "mouseover", o) } function o() { e.datepicker._isDisabledDatepicker(v.inline ? v.dpDiv.parent()[0] : v.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover")) } function r(t, i) { e.extend(t, i); for (var s in i) null == i[s] && (t[s] = i[s]); return t } function h(e) { return function () { var t = this.element.val(); e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change") } } e.ui = e.ui || {}, e.extend(e.ui, { version: "1.11.4", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }), e.fn.extend({ scrollParent: function (t) { var i = this.css("position"), s = "absolute" === i, n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/, a = this.parents().filter(function () { var t = e(this); return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x")) }).eq(0); return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document) }, uniqueId: function () { var e = 0; return function () { return this.each(function () { this.id || (this.id = "ui-id-" + ++e) }) } }(), removeUniqueId: function () { return this.each(function () { /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id") }) } }), e.extend(e.expr[":"], { data: e.expr.createPseudo ? e.expr.createPseudo(function (t) { return function (i) { return !!e.data(i, t) } }) : function (t, i, s) { return !!e.data(t, s[3]) }, focusable: function (i) { return t(i, !isNaN(e.attr(i, "tabindex"))) }, tabbable: function (i) { var s = e.attr(i, "tabindex"), n = isNaN(s); return (n || s >= 0) && t(i, !n) } }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) { function s(t, i, s, a) { return e.each(n, function () { i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0) }), i } var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], a = i.toLowerCase(), o = { innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight }; e.fn["inner" + i] = function (t) { return void 0 === t ? o["inner" + i].call(this) : this.each(function () { e(this).css(a, s(this, t) + "px") }) }, e.fn["outer" + i] = function (t, n) { return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function () { e(this).css(a, s(this, t, !0, n) + "px") }) } }), e.fn.addBack || (e.fn.addBack = function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) { return function (i) { return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this) } }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({ focus: function (t) { return function (i, s) { return "number" == typeof i ? this.each(function () { var t = this; setTimeout(function () { e(t).focus(), s && s.call(t) }, i) }) : t.apply(this, arguments) } }(e.fn.focus), disableSelection: function () { var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"; return function () { return this.bind(e + ".ui-disableSelection", function (e) { e.preventDefault() }) } }(), enableSelection: function () { return this.unbind(".ui-disableSelection") }, zIndex: function (t) { if (void 0 !== t) return this.css("zIndex", t); if (this.length) for (var i, s, n = e(this[0]); n.length && n[0] !== document;) { if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s; n = n.parent() } return 0 } }), e.ui.plugin = { add: function (t, i, s) { var n, a = e.ui[t].prototype; for (n in s) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]]) }, call: function (e, t, i, s) { var n, a = e.plugins[t]; if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)) for (n = 0; a.length > n; n++)e.options[a[n][0]] && a[n][1].apply(e.element, i) } }; var l = 0, u = Array.prototype.slice; e.cleanData = function (t) { return function (i) { var s, n, a; for (a = 0; null != (n = i[a]); a++)try { s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove") } catch (o) { } t(i) } }(e.cleanData), e.widget = function (t, i, s) { var n, a, o, r, h = {}, l = t.split(".")[0]; return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function (t) { return !!e.data(t, n) }, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function (e, t) { return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t) }, e.extend(o, a, { version: s.version, _proto: e.extend({}, s), _childConstructors: [] }), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function (t, s) { return e.isFunction(s) ? (h[t] = function () { var e = function () { return i.prototype[t].apply(this, arguments) }, n = function (e) { return i.prototype[t].apply(this, e) }; return function () { var t, i = this._super, a = this._superApply; return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t } }(), void 0) : (h[t] = s, void 0) }), o.prototype = e.widget.extend(r, { widgetEventPrefix: a ? r.widgetEventPrefix || t : t }, h, { constructor: o, namespace: l, widgetName: t, widgetFullName: n }), a ? (e.each(a._childConstructors, function (t, i) { var s = i.prototype; e.widget(s.namespace + "." + s.widgetName, o, i._proto) }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o }, e.widget.extend = function (t) { for (var i, s, n = u.call(arguments, 1), a = 0, o = n.length; o > a; a++)for (i in n[a]) s = n[a][i], n[a].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s); return t }, e.widget.bridge = function (t, i) { var s = i.prototype.widgetFullName || t; e.fn[t] = function (n) { var a = "string" == typeof n, o = u.call(arguments, 1), r = this; return a ? this.each(function () { var i, a = e.data(this, s); return "instance" === n ? (r = a, !1) : a ? e.isFunction(a[n]) && "_" !== n.charAt(0) ? (i = a[n].apply(a, o), i !== a && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + n + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + n + "'") }) : (o.length && (n = e.widget.extend.apply(null, [n].concat(o))), this.each(function () { var t = e.data(this, s); t ? (t.option(n || {}), t._init && t._init()) : e.data(this, s, new i(n, this)) })), r } }, e.Widget = function () { }, e.Widget._childConstructors = [], e.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { disabled: !1, create: null }, _createWidget: function (t, i) { i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function (e) { e.target === i && this.destroy() } }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init() }, _getCreateOptions: e.noop, _getCreateEventData: e.noop, _create: e.noop, _init: e.noop, destroy: function () { this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus") }, _destroy: e.noop, widget: function () { return this.element }, option: function (t, i) { var s, n, a, o = t; if (0 === arguments.length) return e.widget.extend({}, this.options); if ("string" == typeof t) if (o = {}, s = t.split("."), t = s.shift(), s.length) { for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++)n[s[a]] = n[s[a]] || {}, n = n[s[a]]; if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t]; n[t] = i } else { if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t]; o[t] = i } return this._setOptions(o), this }, _setOptions: function (e) { var t; for (t in e) this._setOption(t, e[t]); return this }, _setOption: function (e, t) { return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this }, enable: function () { return this._setOptions({ disabled: !1 }) }, disable: function () { return this._setOptions({ disabled: !0 }) }, _on: function (t, i, s) { var n, a = this; "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function (s, o) { function r() { return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0 } "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++); var h = s.match(/^([\w:-]*)\s*(.*)$/), l = h[1] + a.eventNamespace, u = h[2]; u ? n.delegate(u, l, r) : i.bind(l, r) }) }, _off: function (t, i) { i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get()) }, _delay: function (e, t) { function i() { return ("string" == typeof e ? s[e] : e).apply(s, arguments) } var s = this; return setTimeout(i, t || 0) }, _hoverable: function (t) { this.hoverable = this.hoverable.add(t), this._on(t, { mouseenter: function (t) { e(t.currentTarget).addClass("ui-state-hover") }, mouseleave: function (t) { e(t.currentTarget).removeClass("ui-state-hover") } }) }, _focusable: function (t) { this.focusable = this.focusable.add(t), this._on(t, { focusin: function (t) { e(t.currentTarget).addClass("ui-state-focus") }, focusout: function (t) { e(t.currentTarget).removeClass("ui-state-focus") } }) }, _trigger: function (t, i, s) { var n, a, o = this.options[t]; if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent) for (n in a) n in i || (i[n] = a[n]); return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented()) } }, e.each({ show: "fadeIn", hide: "fadeOut" }, function (t, i) { e.Widget.prototype["_" + t] = function (s, n, a) { "string" == typeof n && (n = { effect: n }); var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t; n = n || {}, "number" == typeof n && (n = { duration: n }), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function (i) { e(this)[t](), a && a.call(s[0]), i() }) } }), e.widget; var d = !1; e(document).mouseup(function () { d = !1 }), e.widget("ui.mouse", { version: "1.11.4", options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 }, _mouseInit: function () { var t = this; this.element.bind("mousedown." + this.widgetName, function (e) { return t._mouseDown(e) }).bind("click." + this.widgetName, function (i) { return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0 }), this.started = !1 }, _mouseDestroy: function () { this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate) }, _mouseDown: function (t) { if (!d) { this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t; var i = this, s = 1 === t.which, n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1; return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () { i.mouseDelayMet = !0 }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) { return i._mouseMove(e) }, this._mouseUpDelegate = function (e) { return i._mouseUp(e) }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), d = !0, !0)) : !0 } }, _mouseMove: function (t) { if (this._mouseMoved) { if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t); if (!t.which) return this._mouseUp(t) } return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) }, _mouseUp: function (t) { return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), d = !1, !1 }, _mouseDistanceMet: function (e) { return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance }, _mouseDelayMet: function () { return this.mouseDelayMet }, _mouseStart: function () { }, _mouseDrag: function () { }, _mouseStop: function () { }, _mouseCapture: function () { return !0 } }), function () { function t(e, t, i) { return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)] } function i(t, i) { return parseInt(e.css(t, i), 10) || 0 } function s(t) { var i = t[0]; return 9 === i.nodeType ? { width: t.width(), height: t.height(), offset: { top: 0, left: 0 } } : e.isWindow(i) ? { width: t.width(), height: t.height(), offset: { top: t.scrollTop(), left: t.scrollLeft() } } : i.preventDefault ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } } : { width: t.outerWidth(), height: t.outerHeight(), offset: t.offset() } } e.ui = e.ui || {}; var n, a, o = Math.max, r = Math.abs, h = Math.round, l = /left|center|right/, u = /top|center|bottom/, d = /[\+\-]\d+(\.[\d]+)?%?/, c = /^\w+/, p = /%$/, f = e.fn.position; e.position = { scrollbarWidth: function () { if (void 0 !== n) return n; var t, i, s = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), a = s.children()[0]; return e("body").append(s), t = a.offsetWidth, s.css("overflow", "scroll"), i = a.offsetWidth, t === i && (i = s[0].clientWidth), s.remove(), n = t - i }, getScrollInfo: function (t) { var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"), s = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"), n = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth, a = "scroll" === s || "auto" === s && t.height < t.element[0].scrollHeight; return { width: a ? e.position.scrollbarWidth() : 0, height: n ? e.position.scrollbarWidth() : 0 } }, getWithinInfo: function (t) { var i = e(t || window), s = e.isWindow(i[0]), n = !!i[0] && 9 === i[0].nodeType; return { element: i, isWindow: s, isDocument: n, offset: i.offset() || { left: 0, top: 0 }, scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: s || n ? i.width() : i.outerWidth(), height: s || n ? i.height() : i.outerHeight() } } }, e.fn.position = function (n) { if (!n || !n.of) return f.apply(this, arguments); n = e.extend({}, n); var p, m, g, v, y, b, _ = e(n.of), x = e.position.getWithinInfo(n.within), w = e.position.getScrollInfo(x), k = (n.collision || "flip").split(" "), T = {}; return b = s(_), _[0].preventDefault && (n.at = "left top"), m = b.width, g = b.height, v = b.offset, y = e.extend({}, v), e.each(["my", "at"], function () { var e, t, i = (n[this] || "").split(" "); 1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = l.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", e = d.exec(i[0]), t = d.exec(i[1]), T[this] = [e ? e[0] : 0, t ? t[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]] }), 1 === k.length && (k[1] = k[0]), "right" === n.at[0] ? y.left += m : "center" === n.at[0] && (y.left += m / 2), "bottom" === n.at[1] ? y.top += g : "center" === n.at[1] && (y.top += g / 2), p = t(T.at, m, g), y.left += p[0], y.top += p[1], this.each(function () { var s, l, u = e(this), d = u.outerWidth(), c = u.outerHeight(), f = i(this, "marginLeft"), b = i(this, "marginTop"), D = d + f + i(this, "marginRight") + w.width, S = c + b + i(this, "marginBottom") + w.height, M = e.extend({}, y), C = t(T.my, u.outerWidth(), u.outerHeight()); "right" === n.my[0] ? M.left -= d : "center" === n.my[0] && (M.left -= d / 2), "bottom" === n.my[1] ? M.top -= c : "center" === n.my[1] && (M.top -= c / 2), M.left += C[0], M.top += C[1], a || (M.left = h(M.left), M.top = h(M.top)), s = { marginLeft: f, marginTop: b }, e.each(["left", "top"], function (t, i) { e.ui.position[k[t]] && e.ui.position[k[t]][i](M, { targetWidth: m, targetHeight: g, elemWidth: d, elemHeight: c, collisionPosition: s, collisionWidth: D, collisionHeight: S, offset: [p[0] + C[0], p[1] + C[1]], my: n.my, at: n.at, within: x, elem: u }) }), n.using && (l = function (e) { var t = v.left - M.left, i = t + m - d, s = v.top - M.top, a = s + g - c, h = { target: { element: _, left: v.left, top: v.top, width: m, height: g }, element: { element: u, left: M.left, top: M.top, width: d, height: c }, horizontal: 0 > i ? "left" : t > 0 ? "right" : "center", vertical: 0 > a ? "top" : s > 0 ? "bottom" : "middle" }; d > m && m > r(t + i) && (h.horizontal = "center"), c > g && g > r(s + a) && (h.vertical = "middle"), h.important = o(r(t), r(i)) > o(r(s), r(a)) ? "horizontal" : "vertical", n.using.call(this, e, h) }), u.offset(e.extend(M, { using: l })) }) }, e.ui.position = { fit: { left: function (e, t) { var i, s = t.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width, r = e.left - t.collisionPosition.marginLeft, h = n - r, l = r + t.collisionWidth - a - n; t.collisionWidth > a ? h > 0 && 0 >= l ? (i = e.left + h + t.collisionWidth - a - n, e.left += h - i) : e.left = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionWidth : n : h > 0 ? e.left += h : l > 0 ? e.left -= l : e.left = o(e.left - r, e.left) }, top: function (e, t) { var i, s = t.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = t.within.height, r = e.top - t.collisionPosition.marginTop, h = n - r, l = r + t.collisionHeight - a - n; t.collisionHeight > a ? h > 0 && 0 >= l ? (i = e.top + h + t.collisionHeight - a - n, e.top += h - i) : e.top = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionHeight : n : h > 0 ? e.top += h : l > 0 ? e.top -= l : e.top = o(e.top - r, e.top) } }, flip: { left: function (e, t) { var i, s, n = t.within, a = n.offset.left + n.scrollLeft, o = n.width, h = n.isWindow ? n.scrollLeft : n.offset.left, l = e.left - t.collisionPosition.marginLeft, u = l - h, d = l + t.collisionWidth - o - h, c = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0, p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0, f = -2 * t.offset[0]; 0 > u ? (i = e.left + c + p + f + t.collisionWidth - o - a, (0 > i || r(u) > i) && (e.left += c + p + f)) : d > 0 && (s = e.left - t.collisionPosition.marginLeft + c + p + f - h, (s > 0 || d > r(s)) && (e.left += c + p + f)) }, top: function (e, t) { var i, s, n = t.within, a = n.offset.top + n.scrollTop, o = n.height, h = n.isWindow ? n.scrollTop : n.offset.top, l = e.top - t.collisionPosition.marginTop, u = l - h, d = l + t.collisionHeight - o - h, c = "top" === t.my[1], p = c ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0, f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0, m = -2 * t.offset[1]; 0 > u ? (s = e.top + p + f + m + t.collisionHeight - o - a, (0 > s || r(u) > s) && (e.top += p + f + m)) : d > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + m - h, (i > 0 || d > r(i)) && (e.top += p + f + m)) } }, flipfit: { left: function () { e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments) }, top: function () { e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments) } } }, function () { var t, i, s, n, o, r = document.getElementsByTagName("body")[0], h = document.createElement("div"); t = document.createElement(r ? "div" : "body"), s = { visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none" }, r && e.extend(s, { position: "absolute", left: "-1000px", top: "-1000px" }); for (o in s) t.style[o] = s[o]; t.appendChild(h), i = r || document.documentElement, i.insertBefore(t, i.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", n = e(h).offset().left, a = n > 10 && 11 > n, t.innerHTML = "", i.removeChild(t) }() }(), e.ui.position, e.widget("ui.accordion", { version: "1.11.4", options: { active: 0, animate: {}, collapsible: !1, event: "click", header: "> li > :first-child,> :not(li):even", heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null }, hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" }, showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" }, _create: function () { var t = this.options; this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh() }, _getCreateEventData: function () { return { header: this.active, panel: this.active.length ? this.active.next() : e() } }, _createIcons: function () { var t = this.options.icons; t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons")) }, _destroyIcons: function () { this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove() }, _destroy: function () { var e; this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), e = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && e.css("height", "") }, _setOption: function (e, t) { return "active" === e ? (this._activate(t), void 0) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), "disabled" === e && (this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t)), void 0) }, _keydown: function (t) { if (!t.altKey && !t.ctrlKey) { var i = e.ui.keyCode, s = this.headers.length, n = this.headers.index(t.target), a = !1; switch (t.keyCode) { case i.RIGHT: case i.DOWN: a = this.headers[(n + 1) % s]; break; case i.LEFT: case i.UP: a = this.headers[(n - 1 + s) % s]; break; case i.SPACE: case i.ENTER: this._eventHandler(t); break; case i.HOME: a = this.headers[0]; break; case i.END: a = this.headers[s - 1] }a && (e(t.target).attr("tabIndex", -1), e(a).attr("tabIndex", 0), a.focus(), t.preventDefault()) } }, _panelKeyDown: function (t) { t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus() }, refresh: function () { var t = this.options; this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = e()) : t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh() }, _processPanels: function () { var e = this.headers, t = this.panels; this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), t && (this._off(e.not(this.headers)), this._off(t.not(this.panels))) }, _refresh: function () { var t, i = this.options, s = i.heightStyle, n = this.element.parent(); this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function () { var t = e(this), i = t.uniqueId().attr("id"), s = t.next(), n = s.uniqueId().attr("id"); t.attr("aria-controls", n), s.attr("aria-labelledby", i) }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide(), this.active.length ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (t = n.height(), this.element.siblings(":visible").each(function () { var i = e(this), s = i.css("position"); "absolute" !== s && "fixed" !== s && (t -= i.outerHeight(!0)) }), this.headers.each(function () { t -= e(this).outerHeight(!0) }), this.headers.next().each(function () { e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height())) }).css("overflow", "auto")) : "auto" === s && (t = 0, this.headers.next().each(function () { t = Math.max(t, e(this).css("height", "").height()) }).height(t)) }, _activate: function (t) { var i = this._findActive(t)[0]; i !== this.active[0] && (i = i || this.active[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: e.noop })) }, _findActive: function (t) { return "number" == typeof t ? this.headers.eq(t) : e() }, _setupEvents: function (t) { var i = { keydown: "_keydown" }; t && e.each(t.split(" "), function (e, t) { i[t] = "_eventHandler" }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), { keydown: "_panelKeyDown" }), this._hoverable(this.headers), this._focusable(this.headers) }, _eventHandler: function (t) { var i = this.options, s = this.active, n = e(t.currentTarget), a = n[0] === s[0], o = a && i.collapsible, r = o ? e() : n.next(), h = s.next(), l = { oldHeader: s, oldPanel: h, newHeader: o ? e() : n, newPanel: r }; t.preventDefault(), a && !i.collapsible || this._trigger("beforeActivate", t, l) === !1 || (i.active = o ? !1 : this.headers.index(n), this.active = a ? e() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), a || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active"))) }, _toggle: function (t) { var i = t.newPanel, s = this.prevShow.length ? this.prevShow : t.oldPanel; this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, t) : (s.hide(), i.show(), this._toggleComplete(t)), s.attr({ "aria-hidden": "true" }), s.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }), i.length && s.length ? s.prev().attr({ tabIndex: -1, "aria-expanded": "false" }) : i.length && this.headers.filter(function () { return 0 === parseInt(e(this).attr("tabIndex"), 10) }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }) }, _animate: function (e, t, i) { var s, n, a, o = this, r = 0, h = e.css("box-sizing"), l = e.length && (!t.length || e.index() < t.index()), u = this.options.animate || {}, d = l && u.down || u, c = function () { o._toggleComplete(i) }; return "number" == typeof d && (a = d), "string" == typeof d && (n = d), n = n || d.easing || u.easing, a = a || d.duration || u.duration, t.length ? e.length ? (s = e.show().outerHeight(), t.animate(this.hideProps, { duration: a, easing: n, step: function (e, t) { t.now = Math.round(e) } }), e.hide().animate(this.showProps, { duration: a, easing: n, complete: c, step: function (e, i) { i.now = Math.round(e), "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== o.options.heightStyle && (i.now = Math.round(s - t.outerHeight() - r), r = 0) } }), void 0) : t.animate(this.hideProps, a, n, c) : e.animate(this.showProps, a, n, c) }, _toggleComplete: function (e) { var t = e.oldPanel; t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e) } }), e.widget("ui.menu", {
    version: "1.11.4", defaultElement: "<ul>", delay: 300, options: { icons: { submenu: "ui-icon-carat-1-e" }, items: "> *", menus: "ul", position: { my: "left-1 top", at: "right top" }, role: "menu", blur: null, focus: null, select: null }, _create: function () {
      this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({ role: this.options.role, tabIndex: 0 }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
        "mousedown .ui-menu-item": function (e) { e.preventDefault() }, "click .ui-menu-item": function (t) { var i = e(t.target); !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer))) }, "mouseenter .ui-menu-item": function (t) {
          if (!this.previousFilter) {
            var i = e(t.currentTarget);
            i.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i)
          }
        }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (e, t) { var i = this.active || this.element.find(this.options.items).eq(0); t || this.focus(e, i) }, blur: function (t) { this._delay(function () { e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t) }) }, keydown: "_keydown"
      }), this.refresh(), this._on(this.document, { click: function (e) { this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1 } })
    }, _destroy: function () { this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () { var t = e(this); t.data("ui-menu-submenu-carat") && t.remove() }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content") }, _keydown: function (t) { var i, s, n, a, o = !0; switch (t.keyCode) { case e.ui.keyCode.PAGE_UP: this.previousPage(t); break; case e.ui.keyCode.PAGE_DOWN: this.nextPage(t); break; case e.ui.keyCode.HOME: this._move("first", "first", t); break; case e.ui.keyCode.END: this._move("last", "last", t); break; case e.ui.keyCode.UP: this.previous(t); break; case e.ui.keyCode.DOWN: this.next(t); break; case e.ui.keyCode.LEFT: this.collapse(t); break; case e.ui.keyCode.RIGHT: this.active && !this.active.is(".ui-state-disabled") && this.expand(t); break; case e.ui.keyCode.ENTER: case e.ui.keyCode.SPACE: this._activate(t); break; case e.ui.keyCode.ESCAPE: this.collapse(t); break; default: o = !1, s = this.previousFilter || "", n = String.fromCharCode(t.keyCode), a = !1, clearTimeout(this.filterTimer), n === s ? a = !0 : n = s + n, i = this._filterMenuItems(n), i = a && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(t.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(t, i), this.previousFilter = n, this.filterTimer = this._delay(function () { delete this.previousFilter }, 1e3)) : delete this.previousFilter }o && t.preventDefault() }, _activate: function (e) { this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(e) : this.select(e)) }, refresh: function () { var t, i, s = this, n = this.options.icons.submenu, a = this.element.find(this.options.menus); this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function () { var t = e(this), i = t.parent(), s = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0); i.attr("aria-haspopup", "true").prepend(s), t.attr("aria-labelledby", i.attr("id")) }), t = a.add(this.element), i = t.find(this.options.items), i.not(".ui-menu-item").each(function () { var t = e(this); s._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider") }), i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({ tabIndex: -1, role: this._itemRole() }), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur() }, _itemRole: function () { return { menu: "menuitem", listbox: "option" }[this.options.role] }, _setOption: function (e, t) { "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t) }, focus: function (e, t) { var i, s; this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), s = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function () { this._close() }, this.delay), i = t.children(".ui-menu"), i.length && e && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, { item: t }) }, _scrollIntoView: function (t) { var i, s, n, a, o, r; this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, n = t.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = t.outerHeight(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r)) }, blur: function (e, t) { t || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, { item: this.active })) }, _startOpening: function (e) { clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function () { this._close(), this._open(e) }, this.delay)) }, _open: function (t) { var i = e.extend({ of: this.active }, this.options.position); clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i) }, collapseAll: function (t, i) { clearTimeout(this.timer), this.timer = this._delay(function () { var s = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu")); s.length || (s = this.element), this._close(s), this.blur(t), this.activeMenu = s }, this.delay) }, _close: function (e) { e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active") }, _closeOnDocumentClick: function (t) { return !e(t.target).closest(".ui-menu").length }, _isDivider: function (e) { return !/[^\-\u2014\u2013\s]/.test(e.text()) }, collapse: function (e) { var t = this.active && this.active.parent().closest(".ui-menu-item", this.element); t && t.length && (this._close(), this.focus(e, t)) }, expand: function (e) { var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first(); t && t.length && (this._open(t.parent()), this._delay(function () { this.focus(e, t) })) }, next: function (e) { this._move("next", "first", e) }, previous: function (e) { this._move("prev", "last", e) }, isFirstItem: function () { return this.active && !this.active.prevAll(".ui-menu-item").length }, isLastItem: function () { return this.active && !this.active.nextAll(".ui-menu-item").length }, _move: function (e, t, i) { var s; this.active && (s = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[t]()), this.focus(i, s) }, nextPage: function (t) { var i, s, n; return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () { return i = e(this), 0 > i.offset().top - s - n }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(t), void 0) }, previousPage: function (t) { var i, s, n; return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () { return i = e(this), i.offset().top - s + n > 0 }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(t), void 0) }, _hasScroll: function () { return this.element.outerHeight() < this.element.prop("scrollHeight") }, select: function (t) { this.active = this.active || e(t.target).closest(".ui-menu-item"); var i = { item: this.active }; this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i) }, _filterMenuItems: function (t) { var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), s = RegExp("^" + i, "i"); return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () { return s.test(e.trim(e(this).text())) }) }
  }), e.widget("ui.autocomplete", { version: "1.11.4", defaultElement: "<input>", options: { appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null }, requestIndex: 0, pending: 0, _create: function () { var t, i, s, n = this.element[0].nodeName.toLowerCase(), a = "textarea" === n, o = "input" === n; this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, { keydown: function (n) { if (this.element.prop("readOnly")) return t = !0, s = !0, i = !0, void 0; t = !1, s = !1, i = !1; var a = e.ui.keyCode; switch (n.keyCode) { case a.PAGE_UP: t = !0, this._move("previousPage", n); break; case a.PAGE_DOWN: t = !0, this._move("nextPage", n); break; case a.UP: t = !0, this._keyEvent("previous", n); break; case a.DOWN: t = !0, this._keyEvent("next", n); break; case a.ENTER: this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n)); break; case a.TAB: this.menu.active && this.menu.select(n); break; case a.ESCAPE: this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault()); break; default: i = !0, this._searchTimeout(n) } }, keypress: function (s) { if (t) return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0; if (!i) { var n = e.ui.keyCode; switch (s.keyCode) { case n.PAGE_UP: this._move("previousPage", s); break; case n.PAGE_DOWN: this._move("nextPage", s); break; case n.UP: this._keyEvent("previous", s); break; case n.DOWN: this._keyEvent("next", s) } } }, input: function (e) { return s ? (s = !1, e.preventDefault(), void 0) : (this._searchTimeout(e), void 0) }, focus: function () { this.selectedItem = null, this.previous = this._value() }, blur: function (e) { return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(e), this._change(e), void 0) } }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance"), this._on(this.menu.element, { mousedown: function (t) { t.preventDefault(), this.cancelBlur = !0, this._delay(function () { delete this.cancelBlur }); var i = this.menu.element[0]; e(t.target).closest(".ui-menu-item").length || this._delay(function () { var t = this; this.document.one("mousedown", function (s) { s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close() }) }) }, menufocus: function (t, i) { var s, n; return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function () { e(t.target).trigger(t.originalEvent) }), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, { item: n }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && e.trim(s).length && (this.liveRegion.children().hide(), e("<div>").text(s).appendTo(this.liveRegion)), void 0) }, menuselect: function (e, t) { var i = t.item.data("ui-autocomplete-item"), s = this.previous; this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function () { this.previous = s, this.selectedItem = i })), !1 !== this._trigger("select", e, { item: i }) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i } }), this.liveRegion = e("<span>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, { beforeunload: function () { this.element.removeAttr("autocomplete") } }) }, _destroy: function () { clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove() }, _setOption: function (e, t) { this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort() }, _appendTo: function () { var t = this.options.appendTo; return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t }, _initSource: function () { var t, i, s = this; e.isArray(this.options.source) ? (t = this.options.source, this.source = function (i, s) { s(e.ui.autocomplete.filter(t, i.term)) }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (t, n) { s.xhr && s.xhr.abort(), s.xhr = e.ajax({ url: i, data: t, dataType: "json", success: function (e) { n(e) }, error: function () { n([]) } }) }) : this.source = this.options.source }, _searchTimeout: function (e) { clearTimeout(this.searching), this.searching = this._delay(function () { var t = this.term === this._value(), i = this.menu.element.is(":visible"), s = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey; (!t || t && !i && !s) && (this.selectedItem = null, this.search(null, e)) }, this.options.delay) }, search: function (e, t) { return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0 }, _search: function (e) { this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({ term: e }, this._response()) }, _response: function () { var t = ++this.requestIndex; return e.proxy(function (e) { t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading") }, this) }, __response: function (e) { e && (e = this._normalize(e)), this._trigger("response", null, { content: e }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close() }, close: function (e) { this.cancelSearch = !0, this._close(e) }, _close: function (e) { this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e)) }, _change: function (e) { this.previous !== this._value() && this._trigger("change", e, { item: this.selectedItem }) }, _normalize: function (t) { return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) { return "string" == typeof t ? { label: t, value: t } : e.extend({}, t, { label: t.label || t.value, value: t.value || t.label }) }) }, _suggest: function (t) { var i = this.menu.element.empty(); this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next() }, _resizeMenu: function () { var e = this.menu.element; e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth())) }, _renderMenu: function (t, i) { var s = this; e.each(i, function (e, i) { s._renderItemData(t, i) }) }, _renderItemData: function (e, t) { return this._renderItem(e, t).data("ui-autocomplete-item", t) }, _renderItem: function (t, i) { return e("<li>").text(i.label).appendTo(t) }, _move: function (e, t) { return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[e](t), void 0) : (this.search(null, t), void 0) }, widget: function () { return this.menu.element }, _value: function () { return this.valueMethod.apply(this.element, arguments) }, _keyEvent: function (e, t) { (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault()) } }), e.extend(e.ui.autocomplete, { escapeRegex: function (e) { return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") }, filter: function (t, i) { var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i"); return e.grep(t, function (e) { return s.test(e.label || e.value || e) }) } }), e.widget("ui.autocomplete", e.ui.autocomplete, { options: { messages: { noResults: "No search results.", results: function (e) { return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate." } } }, __response: function (t) { var i; this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), e("<div>").text(i).appendTo(this.liveRegion)) } }), e.ui.autocomplete; var c, p = "ui-button ui-widget ui-state-default ui-corner-all", f = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", m = function () { var t = e(this); setTimeout(function () { t.find(":ui-button").button("refresh") }, 1) }, g = function (t) { var i = t.name, s = t.form, n = e([]); return i && (i = i.replace(/'/g, "\\'"), n = s ? e(s).find("[name='" + i + "'][type=radio]") : e("[name='" + i + "'][type=radio]", t.ownerDocument).filter(function () { return !this.form })), n }; e.widget("ui.button", { version: "1.11.4", defaultElement: "<button>", options: { disabled: null, text: !0, label: null, icons: { primary: null, secondary: null } }, _create: function () { this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, m), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title"); var t = this, i = this.options, s = "checkbox" === this.type || "radio" === this.type, n = s ? "" : "ui-state-active"; null === i.label && (i.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(p).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () { i.disabled || this === c && e(this).addClass("ui-state-active") }).bind("mouseleave" + this.eventNamespace, function () { i.disabled || e(this).removeClass(n) }).bind("click" + this.eventNamespace, function (e) { i.disabled && (e.preventDefault(), e.stopImmediatePropagation()) }), this._on({ focus: function () { this.buttonElement.addClass("ui-state-focus") }, blur: function () { this.buttonElement.removeClass("ui-state-focus") } }), s && this.element.bind("change" + this.eventNamespace, function () { t.refresh() }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () { return i.disabled ? !1 : void 0 }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () { if (i.disabled) return !1; e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true"); var s = t.element[0]; g(s).not(s).map(function () { return e(this).button("widget")[0] }).removeClass("ui-state-active").attr("aria-pressed", "false") }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () { return i.disabled ? !1 : (e(this).addClass("ui-state-active"), c = this, t.document.one("mouseup", function () { c = null }), void 0) }).bind("mouseup" + this.eventNamespace, function () { return i.disabled ? !1 : (e(this).removeClass("ui-state-active"), void 0) }).bind("keydown" + this.eventNamespace, function (t) { return i.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"), void 0) }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () { e(this).removeClass("ui-state-active") }), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) { t.keyCode === e.ui.keyCode.SPACE && e(this).click() })), this._setOption("disabled", i.disabled), this._resetButton() }, _determineButtonType: function () { var e, t, i; this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element }, widget: function () { return this.buttonElement }, _destroy: function () { this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(p + " ui-state-active " + f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title") }, _setOption: function (e, t) { return this._super(e, t), "disabled" === e ? (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), t && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")), void 0) : (this._resetButton(), void 0) }, refresh: function () { var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled"); t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? g(this.element[0]).each(function () { e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false") }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false")) }, _resetButton: function () { if ("input" === this.type) return this.options.label && this.element.val(this.options.label), void 0; var t = this.buttonElement.removeClass(f), i = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(), s = this.options.icons, n = s.primary && s.secondary, a = []; s.primary || s.secondary ? (this.options.text && a.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (a.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(i)))) : a.push("ui-button-text-only"), t.addClass(a.join(" ")) } }), e.widget("ui.buttonset", { version: "1.11.4", options: { items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)" }, _create: function () { this.element.addClass("ui-buttonset") }, _init: function () { this.refresh() }, _setOption: function (e, t) { "disabled" === e && this.buttons.button("option", e, t), this._super(e, t) }, refresh: function () { var t = "rtl" === this.element.css("direction"), i = this.element.find(this.options.items), s = i.filter(":ui-button"); i.not(":ui-button").button(), s.button("refresh"), this.buttons = i.map(function () { return e(this).button("widget")[0] }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end() }, _destroy: function () { this.element.removeClass("ui-buttonset"), this.buttons.map(function () { return e(this).button("widget")[0] }).removeClass("ui-corner-left ui-corner-right").end().button("destroy") } }), e.ui.button, e.extend(e.ui, { datepicker: { version: "1.11.4" } }); var v; e.extend(n.prototype, {
    markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function () { return this.dpDiv }, setDefaults: function (e) { return r(this._defaults, e || {}), this }, _attachDatepicker: function (t, i) { var s, n, a; s = t.nodeName.toLowerCase(), n = "div" === s || "span" === s, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), a = this._newInst(e(t), n), a.settings = e.extend({}, i || {}), "input" === s ? this._connectDatepicker(t, a) : n && this._inlineDatepicker(t, a) }, _newInst: function (t, i) { var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); return { id: s, input: t, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? a(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv } }, _connectDatepicker: function (t, i) { var s = e(t); i.append = e([]), i.trigger = e([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t)) }, _attachments: function (t, i) { var s, n, a, o = this._get(i, "appendText"), r = this._get(i, "isRTL"); i.append && i.append.remove(), o && (i.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[r ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && t.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({ src: a, alt: n, title: n }) : e("<button type='button'></button>").addClass(this._triggerClass).html(a ? e("<img/>").attr({ src: a, alt: n, title: n }) : n)), t[r ? "before" : "after"](i.trigger), i.trigger.click(function () { return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1 })) }, _autoSize: function (e) { if (this._get(e, "autoSize") && !e.inline) { var t, i, s, n, a = new Date(2009, 11, 20), o = this._get(e, "dateFormat"); o.match(/[DM]/) && (t = function (e) { for (i = 0, s = 0, n = 0; e.length > n; n++)e[n].length > i && (i = e[n].length, s = n); return s }, a.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), e.input.attr("size", this._formatDate(e, a).length) } }, _inlineDatepicker: function (t, i) { var s = e(t); s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), e.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block")) }, _dialogDatepicker: function (t, i, s, n, a) { var o, h, l, u, d, c = this._dialogInst; return c || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), c = this._dialogInst = this._newInst(this._dialogInput, !1), c.settings = {}, e.data(this._dialogInput[0], "datepicker", c)), r(c.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(c, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + u, l / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), c.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", c), this }, _destroyDatepicker: function (t) { var i, s = e(t), n = e.data(t, "datepicker"); s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), v === n && (v = null)) }, _enableDatepicker: function (t) { var i, s, n = e(t), a = e.data(t, "datepicker"); n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, a.trigger.filter("button").each(function () { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) { return e === t ? null : e })) }, _disableDatepicker: function (t) { var i, s, n = e(t), a = e.data(t, "datepicker"); n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, a.trigger.filter("button").each(function () { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) { return e === t ? null : e }), this._disabledInputs[this._disabledInputs.length] = t) }, _isDisabledDatepicker: function (e) { if (!e) return !1; for (var t = 0; this._disabledInputs.length > t; t++)if (this._disabledInputs[t] === e) return !0; return !1 }, _getInst: function (t) { try { return e.data(t, "datepicker") } catch (i) { throw "Missing instance data for this datepicker" } }, _optionDatepicker: function (t, i, s) { var n, a, o, h, l = this._getInst(t); return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : l ? "all" === i ? e.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), l && (this._curInst === l && this._hideDatepicker(), a = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), r(l.settings, n), null !== o && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, o)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in n && (n.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), l), this._autoSize(l), this._setDate(l, a), this._updateAlternate(l), this._updateDatepicker(l)), void 0) }, _changeDatepicker: function (e, t, i) { this._optionDatepicker(e, t, i) }, _refreshDatepicker: function (e) { var t = this._getInst(e); t && this._updateDatepicker(t) }, _setDateDatepicker: function (e, t) { var i = this._getInst(e); i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i)) }, _getDateDatepicker: function (e, t) { var i = this._getInst(e); return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null }, _doKeyDown: function (t) { var i, s, n, a = e.datepicker._getInst(t.target), o = !0, r = a.dpDiv.is(".ui-datepicker-rtl"); if (a._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) { case 9: e.datepicker._hideDatepicker(), o = !1; break; case 13: return n = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", a.dpDiv), n[0] && e.datepicker._selectDay(t.target, a.selectedMonth, a.selectedYear, n[0]), i = e.datepicker._get(a, "onSelect"), i ? (s = e.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [s, a])) : e.datepicker._hideDatepicker(), !1; case 27: e.datepicker._hideDatepicker(); break; case 33: e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M"); break; case 34: e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M"); break; case 35: (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey; break; case 36: (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey; break; case 37: (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M"); break; case 38: (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey; break; case 39: (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M"); break; case 40: (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey; break; default: o = !1 } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1; o && (t.preventDefault(), t.stopPropagation()) }, _doKeyPress: function (t) {
      var i, s, n = e.datepicker._getInst(t.target);
      return e.datepicker._get(n, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
    }, _doKeyUp: function (t) { var i, s = e.datepicker._getInst(t.target); if (s.input.val() !== s.lastVal) try { i = e.datepicker.parseDate(e.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, e.datepicker._getFormatConfig(s)), i && (e.datepicker._setDateFromField(s), e.datepicker._updateAlternate(s), e.datepicker._updateDatepicker(s)) } catch (n) { } return !0 }, _showDatepicker: function (t) { if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) { var i, n, a, o, h, l, u; i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), n = e.datepicker._get(i, "beforeShow"), a = n ? n.apply(t, [t, i]) : {}, a !== !1 && (r(i.settings, a), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), o = !1, e(t).parents().each(function () { return o |= "fixed" === e(this).css("position"), !o }), h = { left: e.datepicker._pos[0], top: e.datepicker._pos[1] }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), e.datepicker._updateDatepicker(i), h = e.datepicker._checkOffset(i, h, o), i.dpDiv.css({ position: e.datepicker._inDialog && e.blockUI ? "static" : o ? "fixed" : "absolute", display: "none", left: h.left + "px", top: h.top + "px" }), i.inline || (l = e.datepicker._get(i, "showAnim"), u = e.datepicker._get(i, "duration"), i.dpDiv.css("z-index", s(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[l] ? i.dpDiv.show(l, e.datepicker._get(i, "showOptions"), u) : i.dpDiv[l || "show"](l ? u : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i)) } }, _updateDatepicker: function (t) { this.maxRows = 4, v = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t); var i, s = this._getNumberOfMonths(t), n = s[1], a = 17, r = t.dpDiv.find("." + this._dayOverClass + " a"); r.length > 0 && o.apply(r.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), t.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function () { i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null }, 0)) }, _shouldFocusInput: function (e) { return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus") }, _checkOffset: function (t, i, s) { var n = t.dpDiv.outerWidth(), a = t.dpDiv.outerHeight(), o = t.input ? t.input.outerWidth() : 0, r = t.input ? t.input.outerHeight() : 0, h = document.documentElement.clientWidth + (s ? 0 : e(document).scrollLeft()), l = document.documentElement.clientHeight + (s ? 0 : e(document).scrollTop()); return i.left -= this._get(t, "isRTL") ? n - o : 0, i.left -= s && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= s && i.top === t.input.offset().top + r ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + r) : 0), i }, _findPos: function (t) { for (var i, s = this._getInst(t), n = this._get(s, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));)t = t[n ? "previousSibling" : "nextSibling"]; return i = e(t).offset(), [i.left, i.top] }, _hideDatepicker: function (t) { var i, s, n, a, o = this._curInst; !o || t && o !== e.data(t, "datepicker") || this._datepickerShowing && (i = this._get(o, "showAnim"), s = this._get(o, "duration"), n = function () { e.datepicker._tidyDialog(o) }, e.effects && (e.effects.effect[i] || e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1) }, _tidyDialog: function (e) { e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar") }, _checkExternalClick: function (t) { if (e.datepicker._curInst) { var i = e(t.target), s = e.datepicker._getInst(i[0]); (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== s) && e.datepicker._hideDatepicker() } }, _adjustDate: function (t, i, s) { var n = e(t), a = this._getInst(n[0]); this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s), this._updateDatepicker(a)) }, _gotoToday: function (t) { var i, s = e(t), n = this._getInst(s[0]); this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s) }, _selectMonthYear: function (t, i, s) { var n = e(t), a = this._getInst(n[0]); a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n) }, _selectDay: function (t, i, s, n) { var a, o = e(t); e(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (a = this._getInst(o[0]), a.selectedDay = a.currentDay = e("a", n).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = s, this._selectDate(t, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear))) }, _clearDate: function (t) { var i = e(t); this._selectDate(i, "") }, _selectDate: function (t, i) { var s, n = e(t), a = this._getInst(n[0]); i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), s = this._get(a, "onSelect"), s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null) }, _updateAlternate: function (t) { var i, s, n, a = this._get(t, "altField"); a && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), s = this._getDate(t), n = this.formatDate(i, s, this._getFormatConfig(t)), e(a).each(function () { e(this).val(n) })) }, noWeekends: function (e) { var t = e.getDay(); return [t > 0 && 6 > t, ""] }, iso8601Week: function (e) { var t, i = new Date(e.getTime()); return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1 }, parseDate: function (t, i, s) { if (null == t || null == i) throw "Invalid arguments"; if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null; var n, a, o, r, h = 0, l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff, u = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10), d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort, c = (s ? s.dayNames : null) || this._defaults.dayNames, p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort, f = (s ? s.monthNames : null) || this._defaults.monthNames, m = -1, g = -1, v = -1, y = -1, b = !1, _ = function (e) { var i = t.length > n + 1 && t.charAt(n + 1) === e; return i && n++, i }, x = function (e) { var t = _(e), s = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2, n = "y" === e ? s : 1, a = RegExp("^\\d{" + n + "," + s + "}"), o = i.substring(h).match(a); if (!o) throw "Missing number at position " + h; return h += o[0].length, parseInt(o[0], 10) }, w = function (t, s, n) { var a = -1, o = e.map(_(t) ? n : s, function (e, t) { return [[t, e]] }).sort(function (e, t) { return -(e[1].length - t[1].length) }); if (e.each(o, function (e, t) { var s = t[1]; return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (a = t[0], h += s.length, !1) : void 0 }), -1 !== a) return a + 1; throw "Unknown name at position " + h }, k = function () { if (i.charAt(h) !== t.charAt(n)) throw "Unexpected literal at position " + h; h++ }; for (n = 0; t.length > n; n++)if (b) "'" !== t.charAt(n) || _("'") ? k() : b = !1; else switch (t.charAt(n)) { case "d": v = x("d"); break; case "D": w("D", d, c); break; case "o": y = x("o"); break; case "m": g = x("m"); break; case "M": g = w("M", p, f); break; case "y": m = x("y"); break; case "@": r = new Date(x("@")), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate(); break; case "!": r = new Date((x("!") - this._ticksTo1970) / 1e4), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate(); break; case "'": _("'") ? k() : b = !0; break; default: k() }if (i.length > h && (o = i.substr(h), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o; if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= m ? 0 : -100)), y > -1) for (g = 1, v = y; ;) { if (a = this._getDaysInMonth(m, g - 1), a >= v) break; g++, v -= a } if (r = this._daylightSavingAdjust(new Date(m, g - 1, v)), r.getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v) throw "Invalid date"; return r }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate: function (e, t, i) { if (!t) return ""; var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, a = (i ? i.dayNames : null) || this._defaults.dayNames, o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, r = (i ? i.monthNames : null) || this._defaults.monthNames, h = function (t) { var i = e.length > s + 1 && e.charAt(s + 1) === t; return i && s++, i }, l = function (e, t, i) { var s = "" + t; if (h(e)) for (; i > s.length;)s = "0" + s; return s }, u = function (e, t, i, s) { return h(e) ? s[t] : i[t] }, d = "", c = !1; if (t) for (s = 0; e.length > s; s++)if (c) "'" !== e.charAt(s) || h("'") ? d += e.charAt(s) : c = !1; else switch (e.charAt(s)) { case "d": d += l("d", t.getDate(), 2); break; case "D": d += u("D", t.getDay(), n, a); break; case "o": d += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3); break; case "m": d += l("m", t.getMonth() + 1, 2); break; case "M": d += u("M", t.getMonth(), o, r); break; case "y": d += h("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100; break; case "@": d += t.getTime(); break; case "!": d += 1e4 * t.getTime() + this._ticksTo1970; break; case "'": h("'") ? d += "'" : c = !0; break; default: d += e.charAt(s) }return d }, _possibleChars: function (e) { var t, i = "", s = !1, n = function (i) { var s = e.length > t + 1 && e.charAt(t + 1) === i; return s && t++, s }; for (t = 0; e.length > t; t++)if (s) "'" !== e.charAt(t) || n("'") ? i += e.charAt(t) : s = !1; else switch (e.charAt(t)) { case "d": case "m": case "y": case "@": i += "0123456789"; break; case "D": case "M": return null; case "'": n("'") ? i += "'" : s = !0; break; default: i += e.charAt(t) }return i }, _get: function (e, t) { return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t] }, _setDateFromField: function (e, t) { if (e.input.val() !== e.lastVal) { var i = this._get(e, "dateFormat"), s = e.lastVal = e.input ? e.input.val() : null, n = this._getDefaultDate(e), a = n, o = this._getFormatConfig(e); try { a = this.parseDate(i, s, o) || n } catch (r) { s = t ? "" : s } e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), e.currentDay = s ? a.getDate() : 0, e.currentMonth = s ? a.getMonth() : 0, e.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(e) } }, _getDefaultDate: function (e) { return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date)) }, _determineDate: function (t, i, s) { var n = function (e) { var t = new Date; return t.setDate(t.getDate() + e), t }, a = function (i) { try { return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t)) } catch (s) { } for (var n = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, a = n.getFullYear(), o = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) { switch (l[2] || "d") { case "d": case "D": r += parseInt(l[1], 10); break; case "w": case "W": r += 7 * parseInt(l[1], 10); break; case "m": case "M": o += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o)); break; case "y": case "Y": a += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o)) }l = h.exec(i) } return new Date(a, o, r) }, o = null == i || "" === i ? s : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime()); return o = o && "Invalid Date" == "" + o ? s : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o) }, _daylightSavingAdjust: function (e) { return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null }, _setDate: function (e, t, i) { var s = !t, n = e.selectedMonth, a = e.selectedYear, o = this._restrictMinMax(e, this._determineDate(e, t, new Date)); e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), n === e.selectedMonth && a === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(s ? "" : this._formatDate(e)) }, _getDate: function (e) { var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay)); return t }, _attachHandlers: function (t) { var i = this._get(t, "stepMonths"), s = "#" + t.id.replace(/\\\\/g, "\\"); t.dpDiv.find("[data-handler]").map(function () { var t = { prev: function () { e.datepicker._adjustDate(s, -i, "M") }, next: function () { e.datepicker._adjustDate(s, +i, "M") }, hide: function () { e.datepicker._hideDatepicker() }, today: function () { e.datepicker._gotoToday(s) }, selectDay: function () { return e.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1 }, selectMonth: function () { return e.datepicker._selectMonthYear(s, this, "M"), !1 }, selectYear: function () { return e.datepicker._selectMonthYear(s, this, "Y"), !1 } }; e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")]) }) }, _generateHTML: function (e) { var t, i, s, n, a, o, r, h, l, u, d, c, p, f, m, g, v, y, b, _, x, w, k, T, D, S, M, C, N, A, P, I, H, z, F, E, O, j, W, L = new Date, R = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())), Y = this._get(e, "isRTL"), B = this._get(e, "showButtonPanel"), J = this._get(e, "hideIfNoPrevNext"), q = this._get(e, "navigationAsDateFormat"), K = this._getNumberOfMonths(e), V = this._get(e, "showCurrentAtPos"), U = this._get(e, "stepMonths"), Q = 1 !== K[0] || 1 !== K[1], G = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)), X = this._getMinMaxDate(e, "min"), $ = this._getMinMaxDate(e, "max"), Z = e.drawMonth - V, et = e.drawYear; if (0 > Z && (Z += 12, et--), $) for (t = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - K[0] * K[1] + 1, $.getDate())), t = X && X > t ? X : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;)Z--, 0 > Z && (Z = 11, et--); for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = q ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - U, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : J ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(e, "nextText"), n = q ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z + U, 1)), this._getFormatConfig(e)) : n, a = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : J ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", o = this._get(e, "currentText"), r = this._get(e, "gotoCurrent") && e.currentDay ? G : R, o = q ? this.formatDate(o, r, this._getFormatConfig(e)) : o, h = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(e, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (Y ? "" : h) + "</div>" : "", u = parseInt(this._get(e, "firstDay"), 10), u = isNaN(u) ? 0 : u, d = this._get(e, "showWeek"), c = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), f = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), _ = "", w = 0; K[0] > w; w++) { for (k = "", this.maxRows = 4, T = 0; K[1] > T; T++) { if (D = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), S = " ui-corner-all", M = "", Q) { if (M += "<div class='ui-datepicker-group", K[1] > 1) switch (T) { case 0: M += " ui-datepicker-group-first", S = " ui-corner-" + (Y ? "right" : "left"); break; case K[1] - 1: M += " ui-datepicker-group-last", S = " ui-corner-" + (Y ? "left" : "right"); break; default: M += " ui-datepicker-group-middle", S = "" }M += "'>" } for (M += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === w ? Y ? a : s : "") + (/all|right/.test(S) && 0 === w ? Y ? s : a : "") + this._generateMonthYearHeader(e, Z, et, X, $, w > 0 || T > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", C = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", x = 0; 7 > x; x++)N = (x + u) % 7, C += "<th scope='col'" + ((x + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + c[N] + "'>" + p[N] + "</span></th>"; for (M += C + "</tr></thead><tbody>", A = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), P = (this._getFirstDayOfMonth(et, Z) - u + 7) % 7, I = Math.ceil((P + A) / 7), H = Q ? this.maxRows > I ? this.maxRows : I : I, this.maxRows = H, z = this._daylightSavingAdjust(new Date(et, Z, 1 - P)), F = 0; H > F; F++) { for (M += "<tr>", E = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(z) + "</td>" : "", x = 0; 7 > x; x++)O = g ? g.apply(e.input ? e.input[0] : null, [z]) : [!0, ""], j = z.getMonth() !== Z, W = j && !y || !O[0] || X && X > z || $ && z > $, E += "<td class='" + ((x + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (j ? " ui-datepicker-other-month" : "") + (z.getTime() === D.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === z.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (W ? " " + this._unselectableClass + " ui-state-disabled" : "") + (j && !v ? "" : " " + O[1] + (z.getTime() === G.getTime() ? " " + this._currentClass : "") + (z.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (j && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (W ? "" : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") + ">" + (j && !v ? "&#xa0;" : W ? "<span class='ui-state-default'>" + z.getDate() + "</span>" : "<a class='ui-state-default" + (z.getTime() === R.getTime() ? " ui-state-highlight" : "") + (z.getTime() === G.getTime() ? " ui-state-active" : "") + (j ? " ui-priority-secondary" : "") + "' href='#'>" + z.getDate() + "</a>") + "</td>", z.setDate(z.getDate() + 1), z = this._daylightSavingAdjust(z); M += E + "</tr>" } Z++, Z > 11 && (Z = 0, et++), M += "</tbody></table>" + (Q ? "</div>" + (K[0] > 0 && T === K[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += M } _ += k } return _ += l, e._keyEvent = !1, _ }, _generateMonthYearHeader: function (e, t, i, s, n, a, o, r) { var h, l, u, d, c, p, f, m, g = this._get(e, "changeMonth"), v = this._get(e, "changeYear"), y = this._get(e, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", _ = ""; if (a || !g) _ += "<span class='ui-datepicker-month'>" + o[t] + "</span>"; else { for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++)(!h || u >= s.getMonth()) && (!l || n.getMonth() >= u) && (_ += "<option value='" + u + "'" + (u === t ? " selected='selected'" : "") + ">" + r[u] + "</option>"); _ += "</select>" } if (y || (b += _ + (!a && g && v ? "" : "&#xa0;")), !e.yearshtml) if (e.yearshtml = "", a || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>"; else { for (d = this._get(e, "yearRange").split(":"), c = (new Date).getFullYear(), p = function (e) { var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? c + parseInt(e, 10) : parseInt(e, 10); return isNaN(t) ? c : t }, f = p(d[0]), m = Math.max(f, p(d[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++)e.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>"; e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null } return b += this._get(e, "yearSuffix"), y && (b += (!a && g && v ? "" : "&#xa0;") + _), b += "</div>" }, _adjustInstDate: function (e, t, i) { var s = e.drawYear + ("Y" === i ? t : 0), n = e.drawMonth + ("M" === i ? t : 0), a = Math.min(e.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? t : 0), o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(s, n, a))); e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e) }, _restrictMinMax: function (e, t) { var i = this._getMinMaxDate(e, "min"), s = this._getMinMaxDate(e, "max"), n = i && i > t ? i : t; return s && n > s ? s : n }, _notifyChange: function (e) { var t = this._get(e, "onChangeMonthYear"); t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e]) }, _getNumberOfMonths: function (e) { var t = this._get(e, "numberOfMonths"); return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t }, _getMinMaxDate: function (e, t) { return this._determineDate(e, this._get(e, t + "Date"), null) }, _getDaysInMonth: function (e, t) { return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate() }, _getFirstDayOfMonth: function (e, t) { return new Date(e, t, 1).getDay() }, _canAdjustMonth: function (e, t, i, s) { var n = this._getNumberOfMonths(e), a = this._daylightSavingAdjust(new Date(i, s + (0 > t ? t : n[0] * n[1]), 1)); return 0 > t && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(e, a) }, _isInRange: function (e, t) { var i, s, n = this._getMinMaxDate(e, "min"), a = this._getMinMaxDate(e, "max"), o = null, r = null, h = this._get(e, "yearRange"); return h && (i = h.split(":"), s = (new Date).getFullYear(), o = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (o += s), i[1].match(/[+\-].*/) && (r += s)), (!n || t.getTime() >= n.getTime()) && (!a || t.getTime() <= a.getTime()) && (!o || t.getFullYear() >= o) && (!r || r >= t.getFullYear()) }, _getFormatConfig: function (e) { var t = this._get(e, "shortYearCutoff"); return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), { shortYearCutoff: t, dayNamesShort: this._get(e, "dayNamesShort"), dayNames: this._get(e, "dayNames"), monthNamesShort: this._get(e, "monthNamesShort"), monthNames: this._get(e, "monthNames") } }, _formatDate: function (e, t, i, s) { t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear); var n = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(s, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay)); return this.formatDate(this._get(e, "dateFormat"), n, this._getFormatConfig(e)) }
  }), e.fn.datepicker = function (t) { if (!this.length) return this; e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv); var i = Array.prototype.slice.call(arguments, 1); return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function () { "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t) }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) }, e.datepicker = new n, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.11.4", e.datepicker, e.widget("ui.draggable", e.ui.mouse, {
    version: "1.11.4", widgetEventPrefix: "drag", options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null }, _create: function () { "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit() }, _setOption: function (e, t) { this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName()) }, _destroy: function () { return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0) }, _mouseCapture: function (t) { var i = this.options; return this._blurActiveElement(t), this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1) }, _blockFrames: function (t) { this.iframeBlocks = this.document.find(t).map(function () { var t = e(this); return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0] }) }, _unblockFrames: function () { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) }, _blurActiveElement: function (t) { var i = this.document[0]; if (this.handleElement.is(t.target)) try { i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && e(i.activeElement).blur() } catch (s) { } }, _mouseStart: function (t) { var i = this.options; return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () { return "fixed" === e(this).css("position") }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0) }, _refreshOffsets: function (e) { this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: !1, parent: this._getParentOffset(), relative: this._getRelativeOffset() }, this.offset.click = { left: e.pageX - this.offset.left, top: e.pageY - this.offset.top } }, _mouseDrag: function (t, i) { if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) { var s = this._uiHash(); if (this._trigger("drag", t, s) === !1) return this._mouseUp({}), !1; this.position = s.position } return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1 }, _mouseStop: function (t) { var i = this, s = !1; return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () { i._trigger("stop", t) !== !1 && i._clear() }) : this._trigger("stop", t) !== !1 && this._clear(), !1 }, _mouseUp: function (t) { return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t) }, cancel: function () { return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this }, _getHandle: function (t) { return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0 }, _setHandleClassName: function () { this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle") }, _removeHandleClassName: function () { this.handleElement.removeClass("ui-draggable-handle") }, _createHelper: function (t) { var i = this.options, s = e.isFunction(i.helper), n = s ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element; return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n }, _setPositionRelative: function () { /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative") }, _adjustOffsetFromHelper: function (t) { "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top) }, _isRootNode: function (e) { return /(html|body)/i.test(e.tagName) || e === this.document[0] }, _getParentOffset: function () { var t = this.offsetParent.offset(), i = this.document[0]; return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = { top: 0, left: 0 }), { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } }, _getRelativeOffset: function () { if ("relative" !== this.cssPosition) return { top: 0, left: 0 }; var e = this.element.position(), t = this._isRootNode(this.scrollParent[0]); return { top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft()) } }, _cacheMargins: function () { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 } }, _cacheHelperProportions: function () { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } }, _setContainment: function () {
      var t, i, s, n = this.options, a = this.document[0]; return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, e(a).width() - this.helperProportions.width - this.margins.left, (e(a).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = e(n.containment), s = i[0], s && (t = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0)
    }, _convertPositionTo: function (e, t) { t || (t = this.position); var i = "absolute" === e ? 1 : -1, s = this._isRootNode(this.scrollParent[0]); return { top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i, left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i } }, _generatePosition: function (e, t) { var i, s, n, a, o = this.options, r = this._isRootNode(this.scrollParent[0]), h = e.pageX, l = e.pageY; return r && this.offset.scroll || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, h = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a), "y" === o.axis && (h = this.originalPageX), "x" === o.axis && (l = this.originalPageY)), { top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top), left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) } }, _clear: function () { this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy() }, _normalizeRightBottom: function () { "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto")) }, _trigger: function (t, i, s) { return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), e.Widget.prototype._trigger.call(this, t, i, s) }, plugins: {}, _uiHash: function () { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs } }
  }), e.ui.plugin.add("draggable", "connectToSortable", { start: function (t, i, s) { var n = e.extend({}, i, { item: s.element }); s.sortables = [], e(s.options.connectToSortable).each(function () { var i = e(this).sortable("instance"); i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, n)) }) }, stop: function (t, i, s) { var n = e.extend({}, i, { item: s.element }); s.cancelHelperRemoval = !1, e.each(s.sortables, function () { var e = this; e.isOver ? (e.isOver = 0, s.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = { position: e.placeholder.css("position"), top: e.placeholder.css("top"), left: e.placeholder.css("left") }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, n)) }) }, drag: function (t, i, s) { e.each(s.sortables, function () { var n = !1, a = this; a.positionAbs = s.positionAbs, a.helperProportions = s.helperProportions, a.offset.click = s.offset.click, a._intersectsWith(a.containerCache) && (n = !0, e.each(s.sortables, function () { return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== a && this._intersectsWith(this.containerCache) && e.contains(a.element[0], this.element[0]) && (n = !1), n })), n ? (a.isOver || (a.isOver = 1, s._parent = i.helper.parent(), a.currentItem = i.helper.appendTo(a.element).data("ui-sortable-item", !0), a.options._helper = a.options.helper, a.options.helper = function () { return i.helper[0] }, t.target = a.currentItem[0], a._mouseCapture(t, !0), a._mouseStart(t, !0, !0), a.offset.click.top = s.offset.click.top, a.offset.click.left = s.offset.click.left, a.offset.parent.left -= s.offset.parent.left - a.offset.parent.left, a.offset.parent.top -= s.offset.parent.top - a.offset.parent.top, s._trigger("toSortable", t), s.dropped = a.element, e.each(s.sortables, function () { this.refreshPositions() }), s.currentItem = s.element, a.fromOutside = s), a.currentItem && (a._mouseDrag(t), i.position = a.position)) : a.isOver && (a.isOver = 0, a.cancelHelperRemoval = !0, a.options._revert = a.options.revert, a.options.revert = !1, a._trigger("out", t, a._uiHash(a)), a._mouseStop(t, !0), a.options.revert = a.options._revert, a.options.helper = a.options._helper, a.placeholder && a.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(t), i.position = s._generatePosition(t, !0), s._trigger("fromSortable", t), s.dropped = !1, e.each(s.sortables, function () { this.refreshPositions() })) }) } }), e.ui.plugin.add("draggable", "cursor", { start: function (t, i, s) { var n = e("body"), a = s.options; n.css("cursor") && (a._cursor = n.css("cursor")), n.css("cursor", a.cursor) }, stop: function (t, i, s) { var n = s.options; n._cursor && e("body").css("cursor", n._cursor) } }), e.ui.plugin.add("draggable", "opacity", { start: function (t, i, s) { var n = e(i.helper), a = s.options; n.css("opacity") && (a._opacity = n.css("opacity")), n.css("opacity", a.opacity) }, stop: function (t, i, s) { var n = s.options; n._opacity && e(i.helper).css("opacity", n._opacity) } }), e.ui.plugin.add("draggable", "scroll", { start: function (e, t, i) { i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset()) }, drag: function (t, i, s) { var n = s.options, a = !1, o = s.scrollParentNotHidden[0], r = s.document[0]; o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + o.offsetHeight - t.pageY < n.scrollSensitivity ? o.scrollTop = a = o.scrollTop + n.scrollSpeed : t.pageY - s.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = a = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + o.offsetWidth - t.pageX < n.scrollSensitivity ? o.scrollLeft = a = o.scrollLeft + n.scrollSpeed : t.pageX - s.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = a = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - e(r).scrollTop() < n.scrollSensitivity ? a = e(r).scrollTop(e(r).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(r).scrollTop()) < n.scrollSensitivity && (a = e(r).scrollTop(e(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (t.pageX - e(r).scrollLeft() < n.scrollSensitivity ? a = e(r).scrollLeft(e(r).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(r).scrollLeft()) < n.scrollSensitivity && (a = e(r).scrollLeft(e(r).scrollLeft() + n.scrollSpeed)))), a !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(s, t) } }), e.ui.plugin.add("draggable", "snap", { start: function (t, i, s) { var n = s.options; s.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function () { var t = e(this), i = t.offset(); this !== s.element[0] && s.snapElements.push({ item: this, width: t.outerWidth(), height: t.outerHeight(), top: i.top, left: i.left }) }) }, drag: function (t, i, s) { var n, a, o, r, h, l, u, d, c, p, f = s.options, m = f.snapTolerance, g = i.offset.left, v = g + s.helperProportions.width, y = i.offset.top, b = y + s.helperProportions.height; for (c = s.snapElements.length - 1; c >= 0; c--)h = s.snapElements[c].left - s.margins.left, l = h + s.snapElements[c].width, u = s.snapElements[c].top - s.margins.top, d = u + s.snapElements[c].height, h - m > v || g > l + m || u - m > b || y > d + m || !e.contains(s.snapElements[c].item.ownerDocument, s.snapElements[c].item) ? (s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, t, e.extend(s._uiHash(), { snapItem: s.snapElements[c].item })), s.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (n = m >= Math.abs(u - b), a = m >= Math.abs(d - y), o = m >= Math.abs(h - v), r = m >= Math.abs(l - g), n && (i.position.top = s._convertPositionTo("relative", { top: u - s.helperProportions.height, left: 0 }).top), a && (i.position.top = s._convertPositionTo("relative", { top: d, left: 0 }).top), o && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h - s.helperProportions.width }).left), r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l }).left)), p = n || a || o || r, "outer" !== f.snapMode && (n = m >= Math.abs(u - y), a = m >= Math.abs(d - b), o = m >= Math.abs(h - g), r = m >= Math.abs(l - v), n && (i.position.top = s._convertPositionTo("relative", { top: u, left: 0 }).top), a && (i.position.top = s._convertPositionTo("relative", { top: d - s.helperProportions.height, left: 0 }).top), o && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h }).left), r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l - s.helperProportions.width }).left)), !s.snapElements[c].snapping && (n || a || o || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, t, e.extend(s._uiHash(), { snapItem: s.snapElements[c].item })), s.snapElements[c].snapping = n || a || o || r || p) } }), e.ui.plugin.add("draggable", "stack", { start: function (t, i, s) { var n, a = s.options, o = e.makeArray(e(a.stack)).sort(function (t, i) { return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0) }); o.length && (n = parseInt(e(o[0]).css("zIndex"), 10) || 0, e(o).each(function (t) { e(this).css("zIndex", n + t) }), this.css("zIndex", n + o.length)) } }), e.ui.plugin.add("draggable", "zIndex", { start: function (t, i, s) { var n = e(i.helper), a = s.options; n.css("zIndex") && (a._zIndex = n.css("zIndex")), n.css("zIndex", a.zIndex) }, stop: function (t, i, s) { var n = s.options; n._zIndex && e(i.helper).css("zIndex", n._zIndex) } }), e.ui.draggable, e.widget("ui.resizable", e.ui.mouse, { version: "1.11.4", widgetEventPrefix: "resize", options: { alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null }, _num: function (e) { return parseInt(e, 10) || 0 }, _isNumber: function (e) { return !isNaN(parseInt(e, 10)) }, _hasScroll: function (t, i) { if ("hidden" === e(t).css("overflow")) return !1; var s = i && "left" === i ? "scrollLeft" : "scrollTop", n = !1; return t[s] > 0 ? !0 : (t[s] = 1, n = t[s] > 0, t[s] = 0, n) }, _create: function () { var t, i, s, n, a, o = this, r = this.options; if (this.element.addClass("ui-resizable"), e.extend(this, { _aspectRatio: !!r.aspectRatio, aspectRatio: r.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({ marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom") }), this.originalElement.css({ marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0 }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css({ margin: this.originalElement.css("margin") }), this._proportionallyResize()), this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this._handles = e(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++)s = e.trim(t[i]), a = "ui-resizable-" + s, n = e("<div class='ui-resizable-handle " + a + "'></div>"), n.css({ zIndex: r.zIndex }), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n); this._renderAxis = function (t) { var i, s, n, a; t = t || this.element; for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = e(this.handles[i]), this._on(this.handles[i], { mousedown: o._mouseDown })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = e(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(n, a), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i]) }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function () { o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se") }), r.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function () { r.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show()) }).mouseleave(function () { r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide()) })), this._mouseInit() }, _destroy: function () { this._mouseDestroy(); var t, i = function (t) { e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove() }; return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({ position: t.css("position"), width: t.outerWidth(), height: t.outerHeight(), top: t.css("top"), left: t.css("left") }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this }, _mouseCapture: function (t) { var i, s, n = !1; for (i in this.handles) s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (n = !0); return !this.options.disabled && n }, _mouseStart: function (t) { var i, s, n, a = this.options, o = this.element; return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), a.containment && (i += e(a.containment).scrollLeft() || 0, s += e(a.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: i, top: s }, this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: o.width(), height: o.height() }, this.originalSize = this._helper ? { width: o.outerWidth(), height: o.outerHeight() } : { width: o.width(), height: o.height() }, this.sizeDiff = { width: o.outerWidth() - o.width(), height: o.outerHeight() - o.height() }, this.originalPosition = { left: i, top: s }, this.originalMousePosition = { left: t.pageX, top: t.pageY }, this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), o.addClass("ui-resizable-resizing"), this._propagate("start", t), !0 }, _mouseDrag: function (t) { var i, s, n = this.originalMousePosition, a = this.axis, o = t.pageX - n.left || 0, r = t.pageY - n.top || 0, h = this._change[a]; return this._updatePrevProperties(), h ? (i = h.apply(this, [t, o, r]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1 }, _mouseStop: function (t) { this.resizing = !1; var i, s, n, a, o, r, h, l = this.options, u = this; return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, a = s ? 0 : u.sizeDiff.width, o = { width: u.helper.width() - a, height: u.helper.height() - n }, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(e.extend(o, { top: h, left: r })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1 }, _updatePrevProperties: function () { this.prevPosition = { top: this.position.top, left: this.position.left }, this.prevSize = { width: this.size.width, height: this.size.height } }, _applyChanges: function () { var e = {}; return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e }, _updateVirtualBoundaries: function (e) { var t, i, s, n, a, o = this.options; a = { minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0, maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0, minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0, maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0 }, (this._aspectRatio || e) && (t = a.minHeight * this.aspectRatio, s = a.minWidth / this.aspectRatio, i = a.maxHeight * this.aspectRatio, n = a.maxWidth / this.aspectRatio, t > a.minWidth && (a.minWidth = t), s > a.minHeight && (a.minHeight = s), a.maxWidth > i && (a.maxWidth = i), a.maxHeight > n && (a.maxHeight = n)), this._vBoundaries = a }, _updateCache: function (e) { this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width) }, _updateRatio: function (e) { var t = this.position, i = this.size, s = this.axis; return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), "sw" === s && (e.left = t.left + (i.width - e.width), e.top = null), "nw" === s && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)), e }, _respectSize: function (e) { var t = this._vBoundaries, i = this.axis, s = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width, n = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height, a = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width, o = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height, r = this.originalPosition.left + this.originalSize.width, h = this.position.top + this.size.height, l = /sw|nw|w/.test(i), u = /nw|ne|n/.test(i); return a && (e.width = t.minWidth), o && (e.height = t.minHeight), s && (e.width = t.maxWidth), n && (e.height = t.maxHeight), a && l && (e.left = r - t.minWidth), s && l && (e.left = r - t.maxWidth), o && u && (e.top = h - t.minHeight), n && u && (e.top = h - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e }, _getPaddingPlusBorderDimensions: function (e) { for (var t = 0, i = [], s = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], n = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; 4 > t; t++)i[t] = parseInt(s[t], 10) || 0, i[t] += parseInt(n[t], 10) || 0; return { height: i[0] + i[2], width: i[1] + i[3] } }, _proportionallyResize: function () { if (this._proportionallyResizeElements.length) for (var e, t = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > t; t++)e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({ height: i.height() - this.outerDimensions.height || 0, width: i.width() - this.outerDimensions.width || 0 }) }, _renderProxy: function () { var t = this.element, i = this.options; this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({ width: this.element.outerWidth() - 1, height: this.element.outerHeight() - 1, position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element }, _change: { e: function (e, t) { return { width: this.originalSize.width + t } }, w: function (e, t) { var i = this.originalSize, s = this.originalPosition; return { left: s.left + t, width: i.width - t } }, n: function (e, t, i) { var s = this.originalSize, n = this.originalPosition; return { top: n.top + i, height: s.height - i } }, s: function (e, t, i) { return { height: this.originalSize.height + i } }, se: function (t, i, s) { return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s])) }, sw: function (t, i, s) { return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s])) }, ne: function (t, i, s) { return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s])) }, nw: function (t, i, s) { return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s])) } }, _propagate: function (t, i) { e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui()) }, plugins: {}, ui: function () { return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition } } }), e.ui.plugin.add("resizable", "animate", { stop: function (t) { var i = e(this).resizable("instance"), s = i.options, n = i._proportionallyResizeElements, a = n.length && /textarea/i.test(n[0].nodeName), o = a && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height, r = a ? 0 : i.sizeDiff.width, h = { width: i.size.width - r, height: i.size.height - o }, l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null; i.element.animate(e.extend(h, u && l ? { top: u, left: l } : {}), { duration: s.animateDuration, easing: s.animateEasing, step: function () { var s = { width: parseInt(i.element.css("width"), 10), height: parseInt(i.element.css("height"), 10), top: parseInt(i.element.css("top"), 10), left: parseInt(i.element.css("left"), 10) }; n && n.length && e(n[0]).css({ width: s.width, height: s.height }), i._updateCache(s), i._propagate("resize", t) } }) } }), e.ui.plugin.add("resizable", "containment", { start: function () { var t, i, s, n, a, o, r, h = e(this).resizable("instance"), l = h.options, u = h.element, d = l.containment, c = d instanceof e ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d; c && (h.containerElement = e(c), /document/.test(d) || d === document ? (h.containerOffset = { left: 0, top: 0 }, h.containerPosition = { left: 0, top: 0 }, h.parentData = { element: e(document), left: 0, top: 0, width: e(document).width(), height: e(document).height() || document.body.parentNode.scrollHeight }) : (t = e(c), i = [], e(["Top", "Right", "Left", "Bottom"]).each(function (e, s) { i[e] = h._num(t.css("padding" + s)) }), h.containerOffset = t.offset(), h.containerPosition = t.position(), h.containerSize = { height: t.innerHeight() - i[3], width: t.innerWidth() - i[1] }, s = h.containerOffset, n = h.containerSize.height, a = h.containerSize.width, o = h._hasScroll(c, "left") ? c.scrollWidth : a, r = h._hasScroll(c) ? c.scrollHeight : n, h.parentData = { element: c, left: s.left, top: s.top, width: o, height: r })) }, resize: function (t) { var i, s, n, a, o = e(this).resizable("instance"), r = o.options, h = o.containerOffset, l = o.position, u = o._aspectRatio || t.shiftKey, d = { top: 0, left: 0 }, c = o.containerElement, p = !0; c[0] !== document && /static/.test(c.css("position")) && (d = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - d.left), u && (o.size.height = o.size.width / o.aspectRatio, p = !1), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio, p = !1), o.position.top = o._helper ? h.top : 0), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), i = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - d.left : o.offset.left - h.left)), s = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - d.top : o.offset.top - h.top)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio, p = !1)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, u && (o.size.width = o.size.height * o.aspectRatio, p = !1)), p || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height) }, stop: function () { var t = e(this).resizable("instance"), i = t.options, s = t.containerOffset, n = t.containerPosition, a = t.containerElement, o = e(t.helper), r = o.offset(), h = o.outerWidth() - t.sizeDiff.width, l = o.outerHeight() - t.sizeDiff.height; t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({ left: r.left - n.left - s.left, width: h, height: l }), t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({ left: r.left - n.left - s.left, width: h, height: l }) } }), e.ui.plugin.add("resizable", "alsoResize", { start: function () { var t = e(this).resizable("instance"), i = t.options; e(i.alsoResize).each(function () { var t = e(this); t.data("ui-resizable-alsoresize", { width: parseInt(t.width(), 10), height: parseInt(t.height(), 10), left: parseInt(t.css("left"), 10), top: parseInt(t.css("top"), 10) }) }) }, resize: function (t, i) { var s = e(this).resizable("instance"), n = s.options, a = s.originalSize, o = s.originalPosition, r = { height: s.size.height - a.height || 0, width: s.size.width - a.width || 0, top: s.position.top - o.top || 0, left: s.position.left - o.left || 0 }; e(n.alsoResize).each(function () { var t = e(this), s = e(this).data("ui-resizable-alsoresize"), n = {}, a = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"]; e.each(a, function (e, t) { var i = (s[t] || 0) + (r[t] || 0); i && i >= 0 && (n[t] = i || null) }), t.css(n) }) }, stop: function () { e(this).removeData("resizable-alsoresize") } }), e.ui.plugin.add("resizable", "ghost", { start: function () { var t = e(this).resizable("instance"), i = t.options, s = t.size; t.ghost = t.originalElement.clone(), t.ghost.css({ opacity: .25, display: "block", position: "relative", height: s.height, width: s.width, margin: 0, left: 0, top: 0 }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper) }, resize: function () { var t = e(this).resizable("instance"); t.ghost && t.ghost.css({ position: "relative", height: t.size.height, width: t.size.width }) }, stop: function () { var t = e(this).resizable("instance"); t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0)) } }), e.ui.plugin.add("resizable", "grid", { resize: function () { var t, i = e(this).resizable("instance"), s = i.options, n = i.size, a = i.originalSize, o = i.originalPosition, r = i.axis, h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid, l = h[0] || 1, u = h[1] || 1, d = Math.round((n.width - a.width) / l) * l, c = Math.round((n.height - a.height) / u) * u, p = a.width + d, f = a.height + c, m = s.maxWidth && p > s.maxWidth, g = s.maxHeight && f > s.maxHeight, v = s.minWidth && s.minWidth > p, y = s.minHeight && s.minHeight > f; s.grid = h, v && (p += l), y && (f += u), m && (p -= l), g && (f -= u), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = o.top - c) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = o.left - d) : ((0 >= f - u || 0 >= p - l) && (t = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = o.top - c) : (f = u - t.height, i.size.height = f, i.position.top = o.top + a.height - f), p - l > 0 ? (i.size.width = p, i.position.left = o.left - d) : (p = l - t.width, i.size.width = p, i.position.left = o.left + a.width - p)) } }), e.ui.resizable, e.widget("ui.dialog", {
    version: "1.11.4", options: { appendTo: "body", autoOpen: !0, buttons: [], closeOnEscape: !0, closeText: "Close", dialogClass: "", draggable: !0, hide: null, height: "auto", maxHeight: null, maxWidth: null, minHeight: 150, minWidth: 150, modal: !1, position: { my: "center", at: "center", of: window, collision: "fit", using: function (t) { var i = e(this).css(t).offset().top; 0 > i && e(this).css("top", t.top - i) } }, resizable: !0, show: null, title: null, width: 300, beforeClose: null, close: null, drag: null, dragStart: null, dragStop: null, focus: null, open: null, resize: null, resizeStart: null, resizeStop: null }, sizeRelatedOptions: { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 }, resizableRelatedOptions: { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 }, _create: function () { this.originalCss = { display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height }, this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus() }, _init: function () { this.options.autoOpen && this.open() }, _appendTo: function () { var t = this.options.appendTo; return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0) }, _destroy: function () { var e, t = this.originalPosition; this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element) }, widget: function () { return this.uiDialog }, disable: e.noop, enable: e.noop, close: function (t) { var i, s = this; if (this._isOpen && this._trigger("beforeClose", t) !== !1) { if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try { i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && e(i).blur() } catch (n) { } this._hide(this.uiDialog, this.options.hide, function () { s._trigger("close", t) }) } }, isOpen: function () { return this._isOpen }, moveToTop: function () { this._moveToTop() }, _moveToTop: function (t, i) { var s = !1, n = this.uiDialog.siblings(".ui-front:visible").map(function () { return +e(this).css("z-index") }).get(), a = Math.max.apply(null, n); return a >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", a + 1), s = !0), s && !i && this._trigger("focus", t), s }, open: function () { var t = this; return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () { t._focusTabbable(), t._trigger("focus") }), this._makeFocusTarget(), this._trigger("open"), void 0) }, _focusTabbable: function () { var e = this._focusedElement; e || (e = this.element.find("[autofocus]")), e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).focus() }, _keepFocus: function (t) { function i() { var t = this.document[0].activeElement, i = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t); i || this._focusTabbable() } t.preventDefault(), i.call(this), this._delay(i) }, _createWrapper: function () {
      this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo()), this._on(this.uiDialog, {
        keydown: function (t) {
          if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) return t.preventDefault(), this.close(t), void 0;
          if (t.keyCode === e.ui.keyCode.TAB && !t.isDefaultPrevented()) { var i = this.uiDialog.find(":tabbable"), s = i.filter(":first"), n = i.filter(":last"); t.target !== n[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== s[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function () { n.focus() }), t.preventDefault()) : (this._delay(function () { s.focus() }), t.preventDefault()) }
        }, mousedown: function (e) { this._moveToTop(e) && this._focusTabbable() }
      }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") })
    }, _createTitlebar: function () { var t; this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, { mousedown: function (t) { e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus() } }), this.uiDialogTitlebarClose = e("<button type='button'></button>").button({ label: this.options.closeText, icons: { primary: "ui-icon-closethick" }, text: !1 }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, { click: function (e) { e.preventDefault(), this.close(e) } }), t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({ "aria-labelledby": t.attr("id") }) }, _title: function (e) { this.options.title || e.html("&#160;"), e.text(this.options.title) }, _createButtonPane: function () { this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons() }, _createButtons: function () { var t = this, i = this.options.buttons; return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(i) || e.isArray(i) && !i.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), void 0) : (e.each(i, function (i, s) { var n, a; s = e.isFunction(s) ? { click: s, text: i } : s, s = e.extend({ type: "button" }, s), n = s.click, s.click = function () { n.apply(t.element[0], arguments) }, a = { icons: s.icons, text: s.showText }, delete s.icons, delete s.showText, e("<button></button>", s).button(a).appendTo(t.uiButtonSet) }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0) }, _makeDraggable: function () { function t(e) { return { position: e.position, offset: e.offset } } var i = this, s = this.options; this.uiDialog.draggable({ cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function (s, n) { e(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, t(n)) }, drag: function (e, s) { i._trigger("drag", e, t(s)) }, stop: function (n, a) { var o = a.offset.left - i.document.scrollLeft(), r = a.offset.top - i.document.scrollTop(); s.position = { my: "left top", at: "left" + (o >= 0 ? "+" : "") + o + " " + "top" + (r >= 0 ? "+" : "") + r, of: i.window }, e(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, t(a)) } }) }, _makeResizable: function () { function t(e) { return { originalPosition: e.originalPosition, originalSize: e.originalSize, position: e.position, size: e.size } } var i = this, s = this.options, n = s.resizable, a = this.uiDialog.css("position"), o = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw"; this.uiDialog.resizable({ cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: s.maxWidth, maxHeight: s.maxHeight, minWidth: s.minWidth, minHeight: this._minHeight(), handles: o, start: function (s, n) { e(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, t(n)) }, resize: function (e, s) { i._trigger("resize", e, t(s)) }, stop: function (n, a) { var o = i.uiDialog.offset(), r = o.left - i.document.scrollLeft(), h = o.top - i.document.scrollTop(); s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = { my: "left top", at: "left" + (r >= 0 ? "+" : "") + r + " " + "top" + (h >= 0 ? "+" : "") + h, of: i.window }, e(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, t(a)) } }).css("position", a) }, _trackFocus: function () { this._on(this.widget(), { focusin: function (t) { this._makeFocusTarget(), this._focusedElement = e(t.target) } }) }, _makeFocusTarget: function () { this._untrackInstance(), this._trackingInstances().unshift(this) }, _untrackInstance: function () { var t = this._trackingInstances(), i = e.inArray(this, t); -1 !== i && t.splice(i, 1) }, _trackingInstances: function () { var e = this.document.data("ui-dialog-instances"); return e || (e = [], this.document.data("ui-dialog-instances", e)), e }, _minHeight: function () { var e = this.options; return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height) }, _position: function () { var e = this.uiDialog.is(":visible"); e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide() }, _setOptions: function (t) { var i = this, s = !1, n = {}; e.each(t, function (e, t) { i._setOption(e, t), e in i.sizeRelatedOptions && (s = !0), e in i.resizableRelatedOptions && (n[e] = t) }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n) }, _setOption: function (e, t) { var i, s, n = this.uiDialog; "dialogClass" === e && n.removeClass(this.options.dialogClass).addClass(t), "disabled" !== e && (this._super(e, t), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({ label: "" + t }), "draggable" === e && (i = n.is(":data(ui-draggable)"), i && !t && n.draggable("destroy"), !i && t && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (s = n.is(":data(ui-resizable)"), s && !t && n.resizable("destroy"), s && "string" == typeof t && n.resizable("option", "handles", t), s || t === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))) }, _size: function () { var e, t, i, s = this.options; this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }), s.minWidth > s.width && (s.width = s.minWidth), e = this.uiDialog.css({ height: "auto", width: s.width }).outerHeight(), t = Math.max(0, s.minHeight - e), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - e) : "none", "auto" === s.height ? this.element.css({ minHeight: t, maxHeight: i, height: "auto" }) : this.element.height(Math.max(0, s.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight()) }, _blockFrames: function () { this.iframeBlocks = this.document.find("iframe").map(function () { var t = e(this); return e("<div>").css({ position: "absolute", width: t.outerWidth(), height: t.outerHeight() }).appendTo(t.parent()).offset(t.offset())[0] }) }, _unblockFrames: function () { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) }, _allowInteraction: function (t) { return e(t.target).closest(".ui-dialog").length ? !0 : !!e(t.target).closest(".ui-datepicker").length }, _createOverlay: function () { if (this.options.modal) { var t = !0; this._delay(function () { t = !1 }), this.document.data("ui-dialog-overlays") || this._on(this.document, { focusin: function (e) { t || this._allowInteraction(e) || (e.preventDefault(), this._trackingInstances()[0]._focusTabbable()) } }), this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, { mousedown: "_keepFocus" }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1) } }, _destroyOverlay: function () { if (this.options.modal && this.overlay) { var e = this.document.data("ui-dialog-overlays") - 1; e ? this.document.data("ui-dialog-overlays", e) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null } }
  }), e.widget("ui.droppable", { version: "1.11.4", widgetEventPrefix: "drop", options: { accept: "*", activeClass: !1, addClasses: !0, greedy: !1, hoverClass: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null }, _create: function () { var t, i = this.options, s = i.accept; this.isover = !1, this.isout = !0, this.accept = e.isFunction(s) ? s : function (e) { return e.is(s) }, this.proportions = function () { return arguments.length ? (t = arguments[0], void 0) : t ? t : t = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight } }, this._addToManager(i.scope), i.addClasses && this.element.addClass("ui-droppable") }, _addToManager: function (t) { e.ui.ddmanager.droppables[t] = e.ui.ddmanager.droppables[t] || [], e.ui.ddmanager.droppables[t].push(this) }, _splice: function (e) { for (var t = 0; e.length > t; t++)e[t] === this && e.splice(t, 1) }, _destroy: function () { var t = e.ui.ddmanager.droppables[this.options.scope]; this._splice(t), this.element.removeClass("ui-droppable ui-droppable-disabled") }, _setOption: function (t, i) { if ("accept" === t) this.accept = e.isFunction(i) ? i : function (e) { return e.is(i) }; else if ("scope" === t) { var s = e.ui.ddmanager.droppables[this.options.scope]; this._splice(s), this._addToManager(i) } this._super(t, i) }, _activate: function (t) { var i = e.ui.ddmanager.current; this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", t, this.ui(i)) }, _deactivate: function (t) { var i = e.ui.ddmanager.current; this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", t, this.ui(i)) }, _over: function (t) { var i = e.ui.ddmanager.current; i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i))) }, _out: function (t) { var i = e.ui.ddmanager.current; i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i))) }, _drop: function (t, i) { var s = i || e.ui.ddmanager.current, n = !1; return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () { var i = e(this).droppable("instance"); return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && e.ui.intersect(s, e.extend(i, { offset: i.element.offset() }), i.options.tolerance, t) ? (n = !0, !1) : void 0 }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(s)), this.element) : !1) : !1 }, ui: function (e) { return { draggable: e.currentItem || e.element, helper: e.helper, position: e.position, offset: e.positionAbs } } }), e.ui.intersect = function () { function e(e, t, i) { return e >= t && t + i > e } return function (t, i, s, n) { if (!i.offset) return !1; var a = (t.positionAbs || t.position.absolute).left + t.margins.left, o = (t.positionAbs || t.position.absolute).top + t.margins.top, r = a + t.helperProportions.width, h = o + t.helperProportions.height, l = i.offset.left, u = i.offset.top, d = l + i.proportions().width, c = u + i.proportions().height; switch (s) { case "fit": return a >= l && d >= r && o >= u && c >= h; case "intersect": return a + t.helperProportions.width / 2 > l && d > r - t.helperProportions.width / 2 && o + t.helperProportions.height / 2 > u && c > h - t.helperProportions.height / 2; case "pointer": return e(n.pageY, u, i.proportions().height) && e(n.pageX, l, i.proportions().width); case "touch": return (o >= u && c >= o || h >= u && c >= h || u > o && h > c) && (a >= l && d >= a || r >= l && d >= r || l > a && r > d); default: return !1 } } }(), e.ui.ddmanager = { current: null, droppables: { "default": [] }, prepareOffsets: function (t, i) { var s, n, a = e.ui.ddmanager.droppables[t.options.scope] || [], o = i ? i.type : null, r = (t.currentItem || t.element).find(":data(ui-droppable)").addBack(); e: for (s = 0; a.length > s; s++)if (!(a[s].options.disabled || t && !a[s].accept.call(a[s].element[0], t.currentItem || t.element))) { for (n = 0; r.length > n; n++)if (r[n] === a[s].element[0]) { a[s].proportions().height = 0; continue e } a[s].visible = "none" !== a[s].element.css("display"), a[s].visible && ("mousedown" === o && a[s]._activate.call(a[s], i), a[s].offset = a[s].element.offset(), a[s].proportions({ width: a[s].element[0].offsetWidth, height: a[s].element[0].offsetHeight })) } }, drop: function (t, i) { var s = !1; return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function () { this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i))) }), s }, dragStart: function (t, i) { t.element.parentsUntil("body").bind("scroll.droppable", function () { t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i) }) }, drag: function (t, i) { t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () { if (!this.options.disabled && !this.greedyChild && this.visible) { var s, n, a, o = e.ui.intersect(t, this, this.options.tolerance, i), r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null; r && (this.options.greedy && (n = this.options.scope, a = this.element.parents(":data(ui-droppable)").filter(function () { return e(this).droppable("instance").options.scope === n }), a.length && (s = e(a[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i))) } }) }, dragStop: function (t, i) { t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i) } }, e.ui.droppable; var y = "ui-effects-", b = e; e.effects = { effect: {} }, function (e, t) { function i(e, t, i) { var s = d[t.type] || {}; return null == e ? i || !t.def ? null : t.def : (e = s.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : s.mod ? (e + s.mod) % s.mod : 0 > e ? 0 : e > s.max ? s.max : e) } function s(i) { var s = l(), n = s._rgba = []; return i = i.toLowerCase(), f(h, function (e, a) { var o, r = a.re.exec(i), h = r && a.parse(r), l = a.space || "rgba"; return h ? (o = s[l](h), s[u[l].cache] = o[u[l].cache], n = s._rgba = o._rgba, !1) : t }), n.length ? ("0,0,0,0" === n.join() && e.extend(n, a.transparent), s) : a[i] } function n(e, t, i) { return i = (i + 1) % 1, 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e } var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", r = /^([\-+])=\s*(\d+\.?\d*)/, h = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (e) { return [e[1], e[2], e[3], e[4]] } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (e) { return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]] } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (e) { return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (e) { return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)] } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function (e) { return [e[1], e[2] / 100, e[3] / 100, e[4]] } }], l = e.Color = function (t, i, s, n) { return new e.Color.fn.parse(t, i, s, n) }, u = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } }, d = { "byte": { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } }, c = l.support = {}, p = e("<p>")[0], f = e.each; p.style.cssText = "background-color:rgba(1,1,1,.5)", c.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(u, function (e, t) { t.cache = "_" + e, t.props.alpha = { idx: 3, type: "percent", def: 1 } }), l.fn = e.extend(l.prototype, { parse: function (n, o, r, h) { if (n === t) return this._rgba = [null, null, null, null], this; (n.jquery || n.nodeType) && (n = e(n).css(o), o = t); var d = this, c = e.type(n), p = this._rgba = []; return o !== t && (n = [n, o, r, h], c = "array"), "string" === c ? this.parse(s(n) || a._default) : "array" === c ? (f(u.rgba.props, function (e, t) { p[t.idx] = i(n[t.idx], t) }), this) : "object" === c ? (n instanceof l ? f(u, function (e, t) { n[t.cache] && (d[t.cache] = n[t.cache].slice()) }) : f(u, function (t, s) { var a = s.cache; f(s.props, function (e, t) { if (!d[a] && s.to) { if ("alpha" === e || null == n[e]) return; d[a] = s.to(d._rgba) } d[a][t.idx] = i(n[e], t, !0) }), d[a] && 0 > e.inArray(null, d[a].slice(0, 3)) && (d[a][3] = 1, s.from && (d._rgba = s.from(d[a]))) }), this) : t }, is: function (e) { var i = l(e), s = !0, n = this; return f(u, function (e, a) { var o, r = i[a.cache]; return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function (e, i) { return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : t })), s }), s }, _space: function () { var e = [], t = this; return f(u, function (i, s) { t[s.cache] && e.push(i) }), e.pop() }, transition: function (e, t) { var s = l(e), n = s._space(), a = u[n], o = 0 === this.alpha() ? l("transparent") : this, r = o[a.cache] || a.to(o._rgba), h = r.slice(); return s = s[a.cache], f(a.props, function (e, n) { var a = n.idx, o = r[a], l = s[a], u = d[n.type] || {}; null !== l && (null === o ? h[a] = l : (u.mod && (l - o > u.mod / 2 ? o += u.mod : o - l > u.mod / 2 && (o -= u.mod)), h[a] = i((l - o) * t + o, n))) }), this[n](h) }, blend: function (t) { if (1 === this._rgba[3]) return this; var i = this._rgba.slice(), s = i.pop(), n = l(t)._rgba; return l(e.map(i, function (e, t) { return (1 - s) * n[t] + s * e })) }, toRgbaString: function () { var t = "rgba(", i = e.map(this._rgba, function (e, t) { return null == e ? t > 2 ? 1 : 0 : e }); return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")" }, toHslaString: function () { var t = "hsla(", i = e.map(this.hsla(), function (e, t) { return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e }); return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")" }, toHexString: function (t) { var i = this._rgba.slice(), s = i.pop(); return t && i.push(~~(255 * s)), "#" + e.map(i, function (e) { return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e }).join("") }, toString: function () { return 0 === this._rgba[3] ? "transparent" : this.toRgbaString() } }), l.fn.parse.prototype = l.fn, u.hsla.to = function (e) { if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]]; var t, i, s = e[0] / 255, n = e[1] / 255, a = e[2] / 255, o = e[3], r = Math.max(s, n, a), h = Math.min(s, n, a), l = r - h, u = r + h, d = .5 * u; return t = h === r ? 0 : s === r ? 60 * (n - a) / l + 360 : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= d ? l / u : l / (2 - u), [Math.round(t) % 360, i, d, null == o ? 1 : o] }, u.hsla.from = function (e) { if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]]; var t = e[0] / 360, i = e[1], s = e[2], a = e[3], o = .5 >= s ? s * (1 + i) : s + i - s * i, r = 2 * s - o; return [Math.round(255 * n(r, o, t + 1 / 3)), Math.round(255 * n(r, o, t)), Math.round(255 * n(r, o, t - 1 / 3)), a] }, f(u, function (s, n) { var a = n.props, o = n.cache, h = n.to, u = n.from; l.fn[s] = function (s) { if (h && !this[o] && (this[o] = h(this._rgba)), s === t) return this[o].slice(); var n, r = e.type(s), d = "array" === r || "object" === r ? s : arguments, c = this[o].slice(); return f(a, function (e, t) { var s = d["object" === r ? e : t.idx]; null == s && (s = c[t.idx]), c[t.idx] = i(s, t) }), u ? (n = l(u(c)), n[o] = c, n) : l(c) }, f(a, function (t, i) { l.fn[t] || (l.fn[t] = function (n) { var a, o = e.type(n), h = "alpha" === t ? this._hsla ? "hsla" : "rgba" : s, l = this[h](), u = l[i.idx]; return "undefined" === o ? u : ("function" === o && (n = n.call(this, u), o = e.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = u + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), l[i.idx] = n, this[h](l))) }) }) }), l.hook = function (t) { var i = t.split(" "); f(i, function (t, i) { e.cssHooks[i] = { set: function (t, n) { var a, o, r = ""; if ("transparent" !== n && ("string" !== e.type(n) || (a = s(n)))) { if (n = l(a || n), !c.rgba && 1 !== n._rgba[3]) { for (o = "backgroundColor" === i ? t.parentNode : t; ("" === r || "transparent" === r) && o && o.style;)try { r = e.css(o, "backgroundColor"), o = o.parentNode } catch (h) { } n = n.blend(r && "transparent" !== r ? r : "_default") } n = n.toRgbaString() } try { t.style[i] = n } catch (h) { } } }, e.fx.step[i] = function (t) { t.colorInit || (t.start = l(t.elem, i), t.end = l(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos)) } }) }, l.hook(o), e.cssHooks.borderColor = { expand: function (e) { var t = {}; return f(["Top", "Right", "Bottom", "Left"], function (i, s) { t["border" + s + "Color"] = e }), t } }, a = e.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" } }(b), function () { function t(t) { var i, s, n = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle, a = {}; if (n && n.length && n[0] && n[n[0]]) for (s = n.length; s--;)i = n[s], "string" == typeof n[i] && (a[e.camelCase(i)] = n[i]); else for (i in n) "string" == typeof n[i] && (a[i] = n[i]); return a } function i(t, i) { var s, a, o = {}; for (s in i) a = i[s], t[s] !== a && (n[s] || (e.fx.step[s] || !isNaN(parseFloat(a))) && (o[s] = a)); return o } var s = ["add", "remove", "toggle"], n = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 }; e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, i) { e.fx.step[i] = function (e) { ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (b.style(e.elem, i, e.end), e.setAttr = !0) } }), e.fn.addBack || (e.fn.addBack = function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }), e.effects.animateClass = function (n, a, o, r) { var h = e.speed(a, o, r); return this.queue(function () { var a, o = e(this), r = o.attr("class") || "", l = h.children ? o.find("*").addBack() : o; l = l.map(function () { var i = e(this); return { el: i, start: t(this) } }), a = function () { e.each(s, function (e, t) { n[t] && o[t + "Class"](n[t]) }) }, a(), l = l.map(function () { return this.end = t(this.el[0]), this.diff = i(this.start, this.end), this }), o.attr("class", r), l = l.map(function () { var t = this, i = e.Deferred(), s = e.extend({}, h, { queue: !1, complete: function () { i.resolve(t) } }); return this.el.animate(this.diff, s), i.promise() }), e.when.apply(e, l.get()).done(function () { a(), e.each(arguments, function () { var t = this.el; e.each(this.diff, function (e) { t.css(e, "") }) }), h.complete.call(o[0]) }) }) }, e.fn.extend({ addClass: function (t) { return function (i, s, n, a) { return s ? e.effects.animateClass.call(this, { add: i }, s, n, a) : t.apply(this, arguments) } }(e.fn.addClass), removeClass: function (t) { return function (i, s, n, a) { return arguments.length > 1 ? e.effects.animateClass.call(this, { remove: i }, s, n, a) : t.apply(this, arguments) } }(e.fn.removeClass), toggleClass: function (t) { return function (i, s, n, a, o) { return "boolean" == typeof s || void 0 === s ? n ? e.effects.animateClass.call(this, s ? { add: i } : { remove: i }, n, a, o) : t.apply(this, arguments) : e.effects.animateClass.call(this, { toggle: i }, s, n, a) } }(e.fn.toggleClass), switchClass: function (t, i, s, n, a) { return e.effects.animateClass.call(this, { add: i, remove: t }, s, n, a) } }) }(), function () { function t(t, i, s, n) { return e.isPlainObject(t) && (i = t, t = t.effect), t = { effect: t }, null == i && (i = {}), e.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (n = s, s = i, i = {}), e.isFunction(s) && (n = s, s = null), i && e.extend(t, i), s = s || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof s ? s : s in e.fx.speeds ? e.fx.speeds[s] : e.fx.speeds._default, t.complete = n || i.complete, t } function i(t) { return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0 } e.extend(e.effects, { version: "1.11.4", save: function (e, t) { for (var i = 0; t.length > i; i++)null !== t[i] && e.data(y + t[i], e[0].style[t[i]]) }, restore: function (e, t) { var i, s; for (s = 0; t.length > s; s++)null !== t[s] && (i = e.data(y + t[s]), void 0 === i && (i = ""), e.css(t[s], i)) }, setMode: function (e, t) { return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t }, getBaseline: function (e, t) { var i, s; switch (e[0]) { case "top": i = 0; break; case "middle": i = .5; break; case "bottom": i = 1; break; default: i = e[0] / t.height }switch (e[1]) { case "left": s = 0; break; case "center": s = .5; break; case "right": s = 1; break; default: s = e[1] / t.width }return { x: s, y: i } }, createWrapper: function (t) { if (t.parent().is(".ui-effects-wrapper")) return t.parent(); var i = { width: t.outerWidth(!0), height: t.outerHeight(!0), "float": t.css("float") }, s = e("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }), n = { width: t.width(), height: t.height() }, a = document.activeElement; try { a.id } catch (o) { a = document.body } return t.wrap(s), (t[0] === a || e.contains(t[0], a)) && e(a).focus(), s = t.parent(), "static" === t.css("position") ? (s.css({ position: "relative" }), t.css({ position: "relative" })) : (e.extend(i, { position: t.css("position"), zIndex: t.css("z-index") }), e.each(["top", "left", "bottom", "right"], function (e, s) { i[s] = t.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto") }), t.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), t.css(n), s.css(i).show() }, removeWrapper: function (t) { var i = document.activeElement; return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus()), t }, setTransition: function (t, i, s, n) { return n = n || {}, e.each(i, function (e, i) { var a = t.cssUnit(i); a[0] > 0 && (n[i] = a[0] * s + a[1]) }), n } }), e.fn.extend({ effect: function () { function i(t) { function i() { e.isFunction(a) && a.call(n[0]), e.isFunction(t) && t() } var n = e(this), a = s.complete, r = s.mode; (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), i()) : o.call(n[0], s, i) } var s = t.apply(this, arguments), n = s.mode, a = s.queue, o = e.effects.effect[s.effect]; return e.fx.off || !o ? n ? this[n](s.duration, s.complete) : this.each(function () { s.complete && s.complete.call(this) }) : a === !1 ? this.each(i) : this.queue(a || "fx", i) }, show: function (e) { return function (s) { if (i(s)) return e.apply(this, arguments); var n = t.apply(this, arguments); return n.mode = "show", this.effect.call(this, n) } }(e.fn.show), hide: function (e) { return function (s) { if (i(s)) return e.apply(this, arguments); var n = t.apply(this, arguments); return n.mode = "hide", this.effect.call(this, n) } }(e.fn.hide), toggle: function (e) { return function (s) { if (i(s) || "boolean" == typeof s) return e.apply(this, arguments); var n = t.apply(this, arguments); return n.mode = "toggle", this.effect.call(this, n) } }(e.fn.toggle), cssUnit: function (t) { var i = this.css(t), s = []; return e.each(["em", "px", "%", "pt"], function (e, t) { i.indexOf(t) > 0 && (s = [parseFloat(i), t]) }), s } }) }(), function () { var t = {}; e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, i) { t[i] = function (t) { return Math.pow(t, e + 2) } }), e.extend(t, { Sine: function (e) { return 1 - Math.cos(e * Math.PI / 2) }, Circ: function (e) { return 1 - Math.sqrt(1 - e * e) }, Elastic: function (e) { return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15) }, Back: function (e) { return e * e * (3 * e - 2) }, Bounce: function (e) { for (var t, i = 4; ((t = Math.pow(2, --i)) - 1) / 11 > e;); return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2) } }), e.each(t, function (t, i) { e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function (e) { return 1 - i(1 - e) }, e.easing["easeInOut" + t] = function (e) { return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2 } }) }(), e.effects, e.effects.effect.blind = function (t, i) { var s, n, a, o = e(this), r = /up|down|vertical/, h = /up|left|vertical|horizontal/, l = ["position", "top", "bottom", "left", "right", "height", "width"], u = e.effects.setMode(o, t.mode || "hide"), d = t.direction || "up", c = r.test(d), p = c ? "height" : "width", f = c ? "top" : "left", m = h.test(d), g = {}, v = "show" === u; o.parent().is(".ui-effects-wrapper") ? e.effects.save(o.parent(), l) : e.effects.save(o, l), o.show(), s = e.effects.createWrapper(o).css({ overflow: "hidden" }), n = s[p](), a = parseFloat(s.css(f)) || 0, g[p] = v ? n : 0, m || (o.css(c ? "bottom" : "right", 0).css(c ? "top" : "left", "auto").css({ position: "absolute" }), g[f] = v ? a : n + a), v && (s.css(p, 0), m || s.css(f, a + n)), s.animate(g, { duration: t.duration, easing: t.easing, queue: !1, complete: function () { "hide" === u && o.hide(), e.effects.restore(o, l), e.effects.removeWrapper(o), i() } }) }, e.effects.effect.bounce = function (t, i) { var s, n, a, o = e(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], h = e.effects.setMode(o, t.mode || "effect"), l = "hide" === h, u = "show" === h, d = t.direction || "up", c = t.distance, p = t.times || 5, f = 2 * p + (u || l ? 1 : 0), m = t.duration / f, g = t.easing, v = "up" === d || "down" === d ? "top" : "left", y = "up" === d || "left" === d, b = o.queue(), _ = b.length; for ((u || l) && r.push("opacity"), e.effects.save(o, r), o.show(), e.effects.createWrapper(o), c || (c = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), u && (a = { opacity: 1 }, a[v] = 0, o.css("opacity", 0).css(v, y ? 2 * -c : 2 * c).animate(a, m, g)), l && (c /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0; p > s; s++)n = {}, n[v] = (y ? "-=" : "+=") + c, o.animate(n, m, g).animate(a, m, g), c = l ? 2 * c : c / 2; l && (n = { opacity: 0 }, n[v] = (y ? "-=" : "+=") + c, o.animate(n, m, g)), o.queue(function () { l && o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i() }), _ > 1 && b.splice.apply(b, [1, 0].concat(b.splice(_, f + 1))), o.dequeue() }, e.effects.effect.clip = function (t, i) { var s, n, a, o = e(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], h = e.effects.setMode(o, t.mode || "hide"), l = "show" === h, u = t.direction || "vertical", d = "vertical" === u, c = d ? "height" : "width", p = d ? "top" : "left", f = {}; e.effects.save(o, r), o.show(), s = e.effects.createWrapper(o).css({ overflow: "hidden" }), n = "IMG" === o[0].tagName ? s : o, a = n[c](), l && (n.css(c, 0), n.css(p, a / 2)), f[c] = l ? a : 0, f[p] = l ? 0 : a / 2, n.animate(f, { queue: !1, duration: t.duration, easing: t.easing, complete: function () { l || o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i() } }) }, e.effects.effect.drop = function (t, i) { var s, n = e(this), a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], o = e.effects.setMode(n, t.mode || "hide"), r = "show" === o, h = t.direction || "left", l = "up" === h || "down" === h ? "top" : "left", u = "up" === h || "left" === h ? "pos" : "neg", d = { opacity: r ? 1 : 0 }; e.effects.save(n, a), n.show(), e.effects.createWrapper(n), s = t.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(l, "pos" === u ? -s : s), d[l] = (r ? "pos" === u ? "+=" : "-=" : "pos" === u ? "-=" : "+=") + s, n.animate(d, { queue: !1, duration: t.duration, easing: t.easing, complete: function () { "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i() } }) }, e.effects.effect.explode = function (t, i) { function s() { b.push(this), b.length === d * c && n() } function n() { p.css({ visibility: "visible" }), e(b).remove(), m || p.hide(), i() } var a, o, r, h, l, u, d = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = d, p = e(this), f = e.effects.setMode(p, t.mode || "hide"), m = "show" === f, g = p.show().css("visibility", "hidden").offset(), v = Math.ceil(p.outerWidth() / c), y = Math.ceil(p.outerHeight() / d), b = []; for (a = 0; d > a; a++)for (h = g.top + a * y, u = a - (d - 1) / 2, o = 0; c > o; o++)r = g.left + o * v, l = o - (c - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -o * v, top: -a * y }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: v, height: y, left: r + (m ? l * v : 0), top: h + (m ? u * y : 0), opacity: m ? 0 : 1 }).animate({ left: r + (m ? 0 : l * v), top: h + (m ? 0 : u * y), opacity: m ? 1 : 0 }, t.duration || 500, t.easing, s) }, e.effects.effect.fade = function (t, i) { var s = e(this), n = e.effects.setMode(s, t.mode || "toggle"); s.animate({ opacity: n }, { queue: !1, duration: t.duration, easing: t.easing, complete: i }) }, e.effects.effect.fold = function (t, i) { var s, n, a = e(this), o = ["position", "top", "bottom", "left", "right", "height", "width"], r = e.effects.setMode(a, t.mode || "hide"), h = "show" === r, l = "hide" === r, u = t.size || 15, d = /([0-9]+)%/.exec(u), c = !!t.horizFirst, p = h !== c, f = p ? ["width", "height"] : ["height", "width"], m = t.duration / 2, g = {}, v = {}; e.effects.save(a, o), a.show(), s = e.effects.createWrapper(a).css({ overflow: "hidden" }), n = p ? [s.width(), s.height()] : [s.height(), s.width()], d && (u = parseInt(d[1], 10) / 100 * n[l ? 0 : 1]), h && s.css(c ? { height: 0, width: u } : { height: u, width: 0 }), g[f[0]] = h ? n[0] : u, v[f[1]] = h ? n[1] : 0, s.animate(g, m, t.easing).animate(v, m, t.easing, function () { l && a.hide(), e.effects.restore(a, o), e.effects.removeWrapper(a), i() }) }, e.effects.effect.highlight = function (t, i) { var s = e(this), n = ["backgroundImage", "backgroundColor", "opacity"], a = e.effects.setMode(s, t.mode || "show"), o = { backgroundColor: s.css("backgroundColor") }; "hide" === a && (o.opacity = 0), e.effects.save(s, n), s.show().css({ backgroundImage: "none", backgroundColor: t.color || "#ffff99" }).animate(o, { queue: !1, duration: t.duration, easing: t.easing, complete: function () { "hide" === a && s.hide(), e.effects.restore(s, n), i() } }) }, e.effects.effect.size = function (t, i) {
    var s, n, a, o = e(this), r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], l = ["width", "height", "overflow"], u = ["fontSize"], d = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], c = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], p = e.effects.setMode(o, t.mode || "effect"), f = t.restore || "effect" !== p, m = t.scale || "both", g = t.origin || ["middle", "center"], v = o.css("position"), y = f ? r : h, b = { height: 0, width: 0, outerHeight: 0, outerWidth: 0 }; "show" === p && o.show(), s = { height: o.height(), width: o.width(), outerHeight: o.outerHeight(), outerWidth: o.outerWidth() }, "toggle" === t.mode && "show" === p ? (o.from = t.to || b, o.to = t.from || s) : (o.from = t.from || ("show" === p ? b : s), o.to = t.to || ("hide" === p ? b : s)), a = { from: { y: o.from.height / s.height, x: o.from.width / s.width }, to: { y: o.to.height / s.height, x: o.to.width / s.width } }, ("box" === m || "both" === m) && (a.from.y !== a.to.y && (y = y.concat(d), o.from = e.effects.setTransition(o, d, a.from.y, o.from), o.to = e.effects.setTransition(o, d, a.to.y, o.to)), a.from.x !== a.to.x && (y = y.concat(c), o.from = e.effects.setTransition(o, c, a.from.x, o.from), o.to = e.effects.setTransition(o, c, a.to.x, o.to))), ("content" === m || "both" === m) && a.from.y !== a.to.y && (y = y.concat(u).concat(l), o.from = e.effects.setTransition(o, u, a.from.y, o.from), o.to = e.effects.setTransition(o, u, a.to.y, o.to)), e.effects.save(o, y), o.show(), e.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), g && (n = e.effects.getBaseline(g, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === m || "both" === m) && (d = d.concat(["marginTop", "marginBottom"]).concat(u), c = c.concat(["marginLeft", "marginRight"]), l = r.concat(d).concat(c), o.find("*[width]").each(function () {
      var i = e(this), s = { height: i.height(), width: i.width(), outerHeight: i.outerHeight(), outerWidth: i.outerWidth() };
      f && e.effects.save(i, l), i.from = { height: s.height * a.from.y, width: s.width * a.from.x, outerHeight: s.outerHeight * a.from.y, outerWidth: s.outerWidth * a.from.x }, i.to = { height: s.height * a.to.y, width: s.width * a.to.x, outerHeight: s.height * a.to.y, outerWidth: s.width * a.to.x }, a.from.y !== a.to.y && (i.from = e.effects.setTransition(i, d, a.from.y, i.from), i.to = e.effects.setTransition(i, d, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = e.effects.setTransition(i, c, a.from.x, i.from), i.to = e.effects.setTransition(i, c, a.to.x, i.to)), i.css(i.from), i.animate(i.to, t.duration, t.easing, function () { f && e.effects.restore(i, l) })
    })), o.animate(o.to, { queue: !1, duration: t.duration, easing: t.easing, complete: function () { 0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), e.effects.restore(o, y), f || ("static" === v ? o.css({ position: "relative", top: o.to.top, left: o.to.left }) : e.each(["top", "left"], function (e, t) { o.css(t, function (t, i) { var s = parseInt(i, 10), n = e ? o.to.left : o.to.top; return "auto" === i ? n + "px" : s + n + "px" }) })), e.effects.removeWrapper(o), i() } })
  }, e.effects.effect.scale = function (t, i) { var s = e(this), n = e.extend(!0, {}, t), a = e.effects.setMode(s, t.mode || "effect"), o = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === a ? 0 : 100), r = t.direction || "both", h = t.origin, l = { height: s.height(), width: s.width(), outerHeight: s.outerHeight(), outerWidth: s.outerWidth() }, u = { y: "horizontal" !== r ? o / 100 : 1, x: "vertical" !== r ? o / 100 : 1 }; n.effect = "size", n.queue = !1, n.complete = i, "effect" !== a && (n.origin = h || ["middle", "center"], n.restore = !0), n.from = t.from || ("show" === a ? { height: 0, width: 0, outerHeight: 0, outerWidth: 0 } : l), n.to = { height: l.height * u.y, width: l.width * u.x, outerHeight: l.outerHeight * u.y, outerWidth: l.outerWidth * u.x }, n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n) }, e.effects.effect.puff = function (t, i) { var s = e(this), n = e.effects.setMode(s, t.mode || "hide"), a = "hide" === n, o = parseInt(t.percent, 10) || 150, r = o / 100, h = { height: s.height(), width: s.width(), outerHeight: s.outerHeight(), outerWidth: s.outerWidth() }; e.extend(t, { effect: "scale", queue: !1, fade: !0, mode: n, complete: i, percent: a ? o : 100, from: a ? h : { height: h.height * r, width: h.width * r, outerHeight: h.outerHeight * r, outerWidth: h.outerWidth * r } }), s.effect(t) }, e.effects.effect.pulsate = function (t, i) { var s, n = e(this), a = e.effects.setMode(n, t.mode || "show"), o = "show" === a, r = "hide" === a, h = o || "hide" === a, l = 2 * (t.times || 5) + (h ? 1 : 0), u = t.duration / l, d = 0, c = n.queue(), p = c.length; for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), d = 1), s = 1; l > s; s++)n.animate({ opacity: d }, u, t.easing), d = 1 - d; n.animate({ opacity: d }, u, t.easing), n.queue(function () { r && n.hide(), i() }), p > 1 && c.splice.apply(c, [1, 0].concat(c.splice(p, l + 1))), n.dequeue() }, e.effects.effect.shake = function (t, i) { var s, n = e(this), a = ["position", "top", "bottom", "left", "right", "height", "width"], o = e.effects.setMode(n, t.mode || "effect"), r = t.direction || "left", h = t.distance || 20, l = t.times || 3, u = 2 * l + 1, d = Math.round(t.duration / u), c = "up" === r || "down" === r ? "top" : "left", p = "up" === r || "left" === r, f = {}, m = {}, g = {}, v = n.queue(), y = v.length; for (e.effects.save(n, a), n.show(), e.effects.createWrapper(n), f[c] = (p ? "-=" : "+=") + h, m[c] = (p ? "+=" : "-=") + 2 * h, g[c] = (p ? "-=" : "+=") + 2 * h, n.animate(f, d, t.easing), s = 1; l > s; s++)n.animate(m, d, t.easing).animate(g, d, t.easing); n.animate(m, d, t.easing).animate(f, d / 2, t.easing).queue(function () { "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i() }), y > 1 && v.splice.apply(v, [1, 0].concat(v.splice(y, u + 1))), n.dequeue() }, e.effects.effect.slide = function (t, i) { var s, n = e(this), a = ["position", "top", "bottom", "left", "right", "width", "height"], o = e.effects.setMode(n, t.mode || "show"), r = "show" === o, h = t.direction || "left", l = "up" === h || "down" === h ? "top" : "left", u = "up" === h || "left" === h, d = {}; e.effects.save(n, a), n.show(), s = t.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(n).css({ overflow: "hidden" }), r && n.css(l, u ? isNaN(s) ? "-" + s : -s : s), d[l] = (r ? u ? "+=" : "-=" : u ? "-=" : "+=") + s, n.animate(d, { queue: !1, duration: t.duration, easing: t.easing, complete: function () { "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i() } }) }, e.effects.effect.transfer = function (t, i) { var s = e(this), n = e(t.to), a = "fixed" === n.css("position"), o = e("body"), r = a ? o.scrollTop() : 0, h = a ? o.scrollLeft() : 0, l = n.offset(), u = { top: l.top - r, left: l.left - h, height: n.innerHeight(), width: n.innerWidth() }, d = s.offset(), c = e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({ top: d.top - r, left: d.left - h, height: s.innerHeight(), width: s.innerWidth(), position: a ? "fixed" : "absolute" }).animate(u, t.duration, t.easing, function () { c.remove(), i() }) }, e.widget("ui.progressbar", { version: "1.11.4", options: { max: 100, value: 0, change: null, complete: null }, min: 0, _create: function () { this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({ role: "progressbar", "aria-valuemin": this.min }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue() }, _destroy: function () { this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove() }, value: function (e) { return void 0 === e ? this.options.value : (this.options.value = this._constrainedValue(e), this._refreshValue(), void 0) }, _constrainedValue: function (e) { return void 0 === e && (e = this.options.value), this.indeterminate = e === !1, "number" != typeof e && (e = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, e)) }, _setOptions: function (e) { var t = e.value; delete e.value, this._super(e), this.options.value = this._constrainedValue(t), this._refreshValue() }, _setOption: function (e, t) { "max" === e && (t = Math.max(this.min, t)), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t) }, _percentage: function () { return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min) }, _refreshValue: function () { var t = this.options.value, i = this._percentage(); this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": t }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete") } }), e.widget("ui.selectable", e.ui.mouse, { version: "1.11.4", options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null }, _create: function () { var t, i = this; this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function () { t = e(i.options.filter, i.element[0]), t.addClass("ui-selectee"), t.each(function () { var t = e(this), i = t.offset(); e.data(this, "selectable-item", { element: this, $element: t, left: i.left, top: i.top, right: i.left + t.outerWidth(), bottom: i.top + t.outerHeight(), startselected: !1, selected: t.hasClass("ui-selected"), selecting: t.hasClass("ui-selecting"), unselecting: t.hasClass("ui-unselecting") }) }) }, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>") }, _destroy: function () { this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy() }, _mouseStart: function (t) { var i = this, s = this.options; this.opos = [t.pageX, t.pageY], this.options.disabled || (this.selectees = e(s.filter, this.element[0]), this._trigger("start", t), e(s.appendTo).append(this.helper), this.helper.css({ left: t.pageX, top: t.pageY, width: 0, height: 0 }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () { var s = e.data(this, "selectable-item"); s.startselected = !0, t.metaKey || t.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", t, { unselecting: s.element })) }), e(t.target).parents().addBack().each(function () { var s, n = e.data(this, "selectable-item"); return n ? (s = !t.metaKey && !t.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", t, { selecting: n.element }) : i._trigger("unselecting", t, { unselecting: n.element }), !1) : void 0 })) }, _mouseDrag: function (t) { if (this.dragged = !0, !this.options.disabled) { var i, s = this, n = this.options, a = this.opos[0], o = this.opos[1], r = t.pageX, h = t.pageY; return a > r && (i = r, r = a, a = i), o > h && (i = h, h = o, o = i), this.helper.css({ left: a, top: o, width: r - a, height: h - o }), this.selectees.each(function () { var i = e.data(this, "selectable-item"), l = !1; i && i.element !== s.element[0] && ("touch" === n.tolerance ? l = !(i.left > r || a > i.right || i.top > h || o > i.bottom) : "fit" === n.tolerance && (l = i.left > a && r > i.right && i.top > o && h > i.bottom), l ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", t, { selecting: i.element }))) : (i.selecting && ((t.metaKey || t.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", t, { unselecting: i.element }))), i.selected && (t.metaKey || t.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", t, { unselecting: i.element }))))) }), !1 } }, _mouseStop: function (t) { var i = this; return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function () { var s = e.data(this, "selectable-item"); s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", t, { unselected: s.element }) }), e(".ui-selecting", this.element[0]).each(function () { var s = e.data(this, "selectable-item"); s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", t, { selected: s.element }) }), this._trigger("stop", t), this.helper.remove(), !1 } }), e.widget("ui.selectmenu", { version: "1.11.4", defaultElement: "<select>", options: { appendTo: null, disabled: null, icons: { button: "ui-icon-triangle-1-s" }, position: { my: "left top", at: "left bottom", collision: "none" }, width: null, change: null, close: null, focus: null, open: null, select: null }, _create: function () { var e = this.element.uniqueId().attr("id"); this.ids = { element: e, button: e + "-button", menu: e + "-menu" }, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable() }, _drawButton: function () { var t = this; this.label = e("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, { click: function (e) { this.button.focus(), e.preventDefault() } }), this.element.hide(), this.button = e("<span>", { "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all", tabindex: this.options.disabled ? -1 : 0, id: this.ids.button, role: "combobox", "aria-expanded": "false", "aria-autocomplete": "list", "aria-owns": this.ids.menu, "aria-haspopup": "true" }).insertAfter(this.element), e("<span>", { "class": "ui-icon " + this.options.icons.button }).prependTo(this.button), this.buttonText = e("<span>", { "class": "ui-selectmenu-text" }).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () { t.menuItems || t._refreshMenu() }), this._hoverable(this.button), this._focusable(this.button) }, _drawMenu: function () { var t = this; this.menu = e("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu }), this.menuWrap = e("<div>", { "class": "ui-selectmenu-menu ui-front" }).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({ role: "listbox", select: function (e, i) { e.preventDefault(), t._setSelection(), t._select(i.item.data("ui-selectmenu-item"), e) }, focus: function (e, i) { var s = i.item.data("ui-selectmenu-item"); null != t.focusIndex && s.index !== t.focusIndex && (t._trigger("focus", e, { item: s }), t.isOpen || t._select(s, e)), t.focusIndex = s.index, t.button.attr("aria-activedescendant", t.menuItems.eq(s.index).attr("id")) } }).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () { return !1 }, this.menuInstance._isDivider = function () { return !1 } }, refresh: function () { this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this.options.width || this._resizeButton() }, _refreshMenu: function () { this.menu.empty(); var e, t = this.element.find("option"); t.length && (this._parseOptions(t), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), e = this._getSelectedItem(), this.menuInstance.focus(null, e), this._setAria(e.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled"))) }, open: function (e) { this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", e)) }, _position: function () { this.menuWrap.position(e.extend({ of: this.button }, this.options.position)) }, close: function (e) { this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", e)) }, widget: function () { return this.button }, menuWidget: function () { return this.menu }, _renderMenu: function (t, i) { var s = this, n = ""; e.each(i, function (i, a) { a.optgroup !== n && (e("<li>", { "class": "ui-selectmenu-optgroup ui-menu-divider" + (a.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""), text: a.optgroup }).appendTo(t), n = a.optgroup), s._renderItemData(t, a) }) }, _renderItemData: function (e, t) { return this._renderItem(e, t).data("ui-selectmenu-item", t) }, _renderItem: function (t, i) { var s = e("<li>"); return i.disabled && s.addClass("ui-state-disabled"), this._setText(s, i.label), s.appendTo(t) }, _setText: function (e, t) { t ? e.text(t) : e.html("&#160;") }, _move: function (e, t) { var i, s, n = ".ui-menu-item"; this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), n += ":not(.ui-state-disabled)"), s = "first" === e || "last" === e ? i["first" === e ? "prevAll" : "nextAll"](n).eq(-1) : i[e + "All"](n).eq(0), s.length && this.menuInstance.focus(t, s) }, _getSelectedItem: function () { return this.menuItems.eq(this.element[0].selectedIndex) }, _toggle: function (e) { this[this.isOpen ? "close" : "open"](e) }, _setSelection: function () { var e; this.range && (window.getSelection ? (e = window.getSelection(), e.removeAllRanges(), e.addRange(this.range)) : this.range.select(), this.button.focus()) }, _documentClick: { mousedown: function (t) { this.isOpen && (e(t.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(t)) } }, _buttonEvents: { mousedown: function () { var e; window.getSelection ? (e = window.getSelection(), e.rangeCount && (this.range = e.getRangeAt(0))) : this.range = document.selection.createRange() }, click: function (e) { this._setSelection(), this._toggle(e) }, keydown: function (t) { var i = !0; switch (t.keyCode) { case e.ui.keyCode.TAB: case e.ui.keyCode.ESCAPE: this.close(t), i = !1; break; case e.ui.keyCode.ENTER: this.isOpen && this._selectFocusedItem(t); break; case e.ui.keyCode.UP: t.altKey ? this._toggle(t) : this._move("prev", t); break; case e.ui.keyCode.DOWN: t.altKey ? this._toggle(t) : this._move("next", t); break; case e.ui.keyCode.SPACE: this.isOpen ? this._selectFocusedItem(t) : this._toggle(t); break; case e.ui.keyCode.LEFT: this._move("prev", t); break; case e.ui.keyCode.RIGHT: this._move("next", t); break; case e.ui.keyCode.HOME: case e.ui.keyCode.PAGE_UP: this._move("first", t); break; case e.ui.keyCode.END: case e.ui.keyCode.PAGE_DOWN: this._move("last", t); break; default: this.menu.trigger(t), i = !1 }i && t.preventDefault() } }, _selectFocusedItem: function (e) { var t = this.menuItems.eq(this.focusIndex); t.hasClass("ui-state-disabled") || this._select(t.data("ui-selectmenu-item"), e) }, _select: function (e, t) { var i = this.element[0].selectedIndex; this.element[0].selectedIndex = e.index, this._setText(this.buttonText, e.label), this._setAria(e), this._trigger("select", t, { item: e }), e.index !== i && this._trigger("change", t, { item: e }), this.close(t) }, _setAria: function (e) { var t = this.menuItems.eq(e.index).attr("id"); this.button.attr({ "aria-labelledby": t, "aria-activedescendant": t }), this.menu.attr("aria-activedescendant", t) }, _setOption: function (e, t) { "icons" === e && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button), this._super(e, t), "appendTo" === e && this.menuWrap.appendTo(this._appendTo()), "disabled" === e && (this.menuInstance.option("disabled", t), this.button.toggleClass("ui-state-disabled", t).attr("aria-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === e && this._resizeButton() }, _appendTo: function () { var t = this.options.appendTo; return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t }, _toggleAttr: function () { this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen) }, _resizeButton: function () { var e = this.options.width; e || (e = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(e) }, _resizeMenu: function () { this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1)) }, _getCreateOptions: function () { return { disabled: this.element.prop("disabled") } }, _parseOptions: function (t) { var i = []; t.each(function (t, s) { var n = e(s), a = n.parent("optgroup"); i.push({ element: n, index: t, value: n.val(), label: n.text(), optgroup: a.attr("label") || "", disabled: a.prop("disabled") || n.prop("disabled") }) }), this.items = i }, _destroy: function () { this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element) } }), e.widget("ui.slider", e.ui.mouse, { version: "1.11.4", widgetEventPrefix: "slide", options: { animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null }, numPages: 5, _create: function () { this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1 }, _refresh: function () { this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue() }, _createHandles: function () { var t, i, s = this.options, n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), a = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>", o = []; for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++)o.push(a); this.handles = n.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (t) { e(this).data("ui-slider-handle-index", t) }) }, _createRange: function () { var t = this.options, i = ""; t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({ left: "", bottom: "" }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null) }, _setupEvents: function () { this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles) }, _destroy: function () { this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy() }, _mouseCapture: function (t) { var i, s, n, a, o, r, h, l, u = this, d = this.options; return d.disabled ? !1 : (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), i = { x: t.pageX, y: t.pageY }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) { var i = Math.abs(s - u.values(t)); (n > i || n === i && (t === u._lastChangedValue || u.values(t) === d.min)) && (n = i, a = e(this), o = t) }), r = this._start(t, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), h = a.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? { left: 0, top: 0 } : { left: t.pageX - h.left - a.width() / 2, top: t.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, s), this._animateOff = !0, !0)) }, _mouseStart: function () { return !0 }, _mouseDrag: function (e) { var t = { x: e.pageX, y: e.pageY }, i = this._normValueFromMouse(t); return this._slide(e, this._handleIndex, i), !1 }, _mouseStop: function (e) { return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1 }, _detectOrientation: function () { this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal" }, _normValueFromMouse: function (e) { var t, i, s, n, a; return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a) }, _start: function (e, t) { var i = { handle: this.handles[t], value: this.value() }; return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i) }, _slide: function (e, t, i) { var s, n, a; this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (n = this.values(), n[t] = i, a = this._trigger("slide", e, { handle: this.handles[t], value: i, values: n }), s = this.values(t ? 0 : 1), a !== !1 && this.values(t, i))) : i !== this.value() && (a = this._trigger("slide", e, { handle: this.handles[t], value: i }), a !== !1 && this.value(i)) }, _stop: function (e, t) { var i = { handle: this.handles[t], value: this.value() }; this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i) }, _change: function (e, t) { if (!this._keySliding && !this._mouseSliding) { var i = { handle: this.handles[t], value: this.value() }; this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i) } }, value: function (e) { return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value() }, values: function (t, i) { var s, n, a; if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0; if (!arguments.length) return this._values(); if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value(); for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1)s[a] = this._trimAlignValue(n[a]), this._change(null, a); this._refreshValue() }, _setOption: function (t, i) { var s, n = 0; switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) { case "orientation": this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", ""); break; case "value": this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1; break; case "values": for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1)this._change(null, s); this._animateOff = !1; break; case "step": case "min": case "max": this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1; break; case "range": this._animateOff = !0, this._refresh(), this._animateOff = !1 } }, _value: function () { var e = this.options.value; return e = this._trimAlignValue(e) }, _values: function (e) { var t, i, s; if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t); if (this.options.values && this.options.values.length) { for (i = this.options.values.slice(), s = 0; i.length > s; s += 1)i[s] = this._trimAlignValue(i[s]); return i } return [] }, _trimAlignValue: function (e) { if (this._valueMin() >= e) return this._valueMin(); if (e >= this._valueMax()) return this._valueMax(); var t = this.options.step > 0 ? this.options.step : 1, i = (e - this._valueMin()) % t, s = e - i; return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5)) }, _calculateNewMax: function () { var e = this.options.max, t = this._valueMin(), i = this.options.step, s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i; e = s + t, this.max = parseFloat(e.toFixed(this._precision())) }, _precision: function () { var e = this._precisionOf(this.options.step); return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e }, _precisionOf: function (e) { var t = "" + e, i = t.indexOf("."); return -1 === i ? 0 : t.length - i - 1 }, _valueMin: function () { return this.options.min }, _valueMax: function () { return this.max }, _refreshValue: function () { var t, i, s, n, a, o = this.options.range, r = this.options, h = this, l = this._animateOff ? !1 : r.animate, u = {}; this.options.values && this.options.values.length ? this.handles.each(function (s) { i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ left: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ width: i - t + "%" }, { queue: !1, duration: r.animate })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ bottom: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ height: i - t + "%" }, { queue: !1, duration: r.animate }))), t = i }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ width: i + "%" }, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({ width: 100 - i + "%" }, { queue: !1, duration: r.animate }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ height: i + "%" }, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({ height: 100 - i + "%" }, { queue: !1, duration: r.animate })) }, _handleEvents: { keydown: function (t) { var i, s, n, a, o = e(t.target).data("ui-slider-handle-index"); switch (t.keyCode) { case e.ui.keyCode.HOME: case e.ui.keyCode.END: case e.ui.keyCode.PAGE_UP: case e.ui.keyCode.PAGE_DOWN: case e.ui.keyCode.UP: case e.ui.keyCode.RIGHT: case e.ui.keyCode.DOWN: case e.ui.keyCode.LEFT: if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), i = this._start(t, o), i === !1)) return }switch (a = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) { case e.ui.keyCode.HOME: n = this._valueMin(); break; case e.ui.keyCode.END: n = this._valueMax(); break; case e.ui.keyCode.PAGE_UP: n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages); break; case e.ui.keyCode.PAGE_DOWN: n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages); break; case e.ui.keyCode.UP: case e.ui.keyCode.RIGHT: if (s === this._valueMax()) return; n = this._trimAlignValue(s + a); break; case e.ui.keyCode.DOWN: case e.ui.keyCode.LEFT: if (s === this._valueMin()) return; n = this._trimAlignValue(s - a) }this._slide(t, o, n) }, keyup: function (t) { var i = e(t.target).data("ui-slider-handle-index"); this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active")) } } }), e.widget("ui.sortable", e.ui.mouse, {
    version: "1.11.4", widgetEventPrefix: "sort", ready: !1, options: { appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null }, _isOverAxis: function (e, t, i) { return e >= t && t + i > e }, _isFloating: function (e) { return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display")) }, _create: function () { this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0 }, _setOption: function (e, t) { this._super(e, t), "handle" === e && this._setHandleClassName() }, _setHandleClassName: function () { this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), e.each(this.items, function () { (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle") }) }, _destroy: function () { this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy(); for (var e = this.items.length - 1; e >= 0; e--)this.items[e].item.removeData(this.widgetName + "-item"); return this }, _mouseCapture: function (t, i) { var s = null, n = !1, a = this; return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function () { return e.data(this, a.widgetName + "-item") === a ? (s = e(this), !1) : void 0 }), e.data(t.target, a.widgetName + "-item") === a && (s = e(t.target)), s ? !this.options.handle || i || (e(this.options.handle, s).find("*").addBack().each(function () { this === t.target && (n = !0) }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1) }, _mouseStart: function (t, i, s) {
      var n, a, o = this.options; if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, e.extend(this.offset, { click: { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", o.cursor), this.storedStylesheet = e("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) for (n = this.containers.length - 1; n >= 0; n--)this.containers[n]._trigger("activate", t, this._uiHash(this));
      return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
    }, _mouseDrag: function (t) { var i, s, n, a, o = this.options, r = !1; for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - this.document.scrollTop() < o.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < o.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), t.pageX - this.document.scrollLeft() < o.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), r !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)if (s = this.items[i], n = s.item[0], a = this._intersectsWithPointer(s), a && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== n && !e.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], n) : !0)) { if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break; this._rearrange(t, s), this._trigger("change", t, this._uiHash()); break } return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1 }, _mouseStop: function (t, i) { if (t) { if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) { var s = this, n = this.placeholder.offset(), a = this.options.axis, o = {}; a && "x" !== a || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () { s._clear(t) }) } else this._clear(t, i); return !1 } }, cancel: function () { if (this.dragging) { this._mouseUp({ target: null }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show(); for (var t = this.containers.length - 1; t >= 0; t--)this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0) } return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this }, serialize: function (t) { var i = this._getItemsAsjQuery(t && t.connected), s = []; return t = t || {}, e(i).each(function () { var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/); i && s.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2])) }), !s.length && t.key && s.push(t.key + "="), s.join("&") }, toArray: function (t) { var i = this._getItemsAsjQuery(t && t.connected), s = []; return t = t || {}, i.each(function () { s.push(e(t.item || this).attr(t.attribute || "id") || "") }), s }, _intersectsWith: function (e) { var t = this.positionAbs.left, i = t + this.helperProportions.width, s = this.positionAbs.top, n = s + this.helperProportions.height, a = e.left, o = a + e.width, r = e.top, h = r + e.height, l = this.offset.click.top, u = this.offset.click.left, d = "x" === this.options.axis || s + l > r && h > s + l, c = "y" === this.options.axis || t + u > a && o > t + u, p = d && c; return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : t + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2 }, _intersectsWithPointer: function (e) { var t = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height), i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width), s = t && i, n = this._getDragVerticalDirection(), a = this._getDragHorizontalDirection(); return s ? this.floating ? a && "right" === a || "down" === n ? 2 : 1 : n && ("down" === n ? 2 : 1) : !1 }, _intersectsWithSides: function (e) { var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height), i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width), s = this._getDragVerticalDirection(), n = this._getDragHorizontalDirection(); return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && t || "up" === s && !t) }, _getDragVerticalDirection: function () { var e = this.positionAbs.top - this.lastPositionAbs.top; return 0 !== e && (e > 0 ? "down" : "up") }, _getDragHorizontalDirection: function () { var e = this.positionAbs.left - this.lastPositionAbs.left; return 0 !== e && (e > 0 ? "right" : "left") }, refresh: function (e) { return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this }, _connectWith: function () { var e = this.options; return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith }, _getItemsAsjQuery: function (t) { function i() { r.push(this) } var s, n, a, o, r = [], h = [], l = this._connectWith(); if (l && t) for (s = l.length - 1; s >= 0; s--)for (a = e(l[s], this.document[0]), n = a.length - 1; n >= 0; n--)o = e.data(a[n], this.widgetFullName), o && o !== this && !o.options.disabled && h.push([e.isFunction(o.options.items) ? o.options.items.call(o.element) : e(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]); for (h.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--)h[s][0].each(i); return e(r) }, _removeCurrentsFromItems: function () { var t = this.currentItem.find(":data(" + this.widgetName + "-item)"); this.items = e.grep(this.items, function (e) { for (var i = 0; t.length > i; i++)if (t[i] === e.item[0]) return !1; return !0 }) }, _refreshItems: function (t) { this.items = [], this.containers = [this]; var i, s, n, a, o, r, h, l, u = this.items, d = [[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, { item: this.currentItem }) : e(this.options.items, this.element), this]], c = this._connectWith(); if (c && this.ready) for (i = c.length - 1; i >= 0; i--)for (n = e(c[i], this.document[0]), s = n.length - 1; s >= 0; s--)a = e.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && (d.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, { item: this.currentItem }) : e(a.options.items, a.element), a]), this.containers.push(a)); for (i = d.length - 1; i >= 0; i--)for (o = d[i][1], r = d[i][0], s = 0, l = r.length; l > s; s++)h = e(r[s]), h.data(this.widgetName + "-item", o), u.push({ item: h, instance: o, width: 0, height: 0, left: 0, top: 0 }) }, refreshPositions: function (t) { this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()); var i, s, n, a; for (i = this.items.length - 1; i >= 0; i--)s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? e(this.options.toleranceElement, s.item) : s.item, t || (s.width = n.outerWidth(), s.height = n.outerHeight()), a = n.offset(), s.left = a.left, s.top = a.top); if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--)a = this.containers[i].element.offset(), this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight(); return this }, _createPlaceholder: function (t) { t = t || this; var i, s = t.options; s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = { element: function () { var s = t.currentItem[0].nodeName.toLowerCase(), n = e("<" + s + ">", t.document[0]).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper"); return "tbody" === s ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), e("<tr>", t.document[0]).appendTo(n)) : "tr" === s ? t._createTrPlaceholder(t.currentItem, n) : "img" === s && n.attr("src", t.currentItem.attr("src")), i || n.css("visibility", "hidden"), n }, update: function (e, n) { (!i || s.forcePlaceholderSize) && (n.height() || n.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10))) } }), t.placeholder = e(s.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), s.placeholder.update(t, t.placeholder) }, _createTrPlaceholder: function (t, i) { var s = this; t.children().each(function () { e("<td>&#160;</td>", s.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(i) }) }, _contactContainers: function (t) { var i, s, n, a, o, r, h, l, u, d, c = null, p = null; for (i = this.containers.length - 1; i >= 0; i--)if (!e.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) { if (c && e.contains(this.containers[i].element[0], c.element[0])) continue; c = this.containers[i], p = i } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0); if (c) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1); else { for (n = 1e4, a = null, u = c.floating || this._isFloating(this.currentItem), o = u ? "left" : "top", r = u ? "width" : "height", d = u ? "clientX" : "clientY", s = this.items.length - 1; s >= 0; s--)e.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[o], l = !1, t[d] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(t[d] - h) && (n = Math.abs(t[d] - h), a = this.items[s], this.direction = l ? "up" : "down")); if (!a && !this.options.dropOnEmpty) return; if (this.currentContainer === this.containers[p]) return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0; a ? this._rearrange(t, a, null, !0) : this._rearrange(t, null, this.containers[p].element, !0), this._trigger("change", t, this._uiHash()), this.containers[p]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1 } }, _createHelper: function (t) { var i = this.options, s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem; return s.parents("body").length || e("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s }, _adjustOffsetFromHelper: function (t) { "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top) }, _getParentOffset: function () { this.offsetParent = this.helper.offsetParent(); var t = this.offsetParent.offset(); return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = { top: 0, left: 0 }), { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } }, _getRelativeOffset: function () { if ("relative" === this.cssPosition) { var e = this.currentItem.position(); return { top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } } return { top: 0, left: 0 } }, _cacheMargins: function () { this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 } }, _cacheHelperProportions: function () { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } }, _setContainment: function () { var t, i, s, n = this.options; "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (t = e(n.containment)[0], i = e(n.containment).offset(), s = "hidden" !== e(t).css("overflow"), this.containment = [i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]) }, _convertPositionTo: function (t, i) { i || (i = this.position); var s = "absolute" === t ? 1 : -1, n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, a = /(html|body)/i.test(n[0].tagName); return { top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s, left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s } }, _generatePosition: function (t) { var i, s, n = this.options, a = t.pageX, o = t.pageY, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(r[0].tagName); return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0], a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), { top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()), left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft()) } }, _rearrange: function (e, t, i, s) { i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1; var n = this.counter; this._delay(function () { n === this.counter && this.refreshPositions(!s) }) }, _clear: function (e, t) { function i(e, t, i) { return function (s) { i._trigger(e, s, t._uiHash(t)) } } this.reverting = !1; var s, n = []; if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) { for (s in this._storedCSS) ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = ""); this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") } else this.currentItem.show(); for (this.fromOutside && !t && n.push(function (e) { this._trigger("receive", e, this._uiHash(this.fromOutside)) }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || n.push(function (e) { this._trigger("update", e, this._uiHash()) }), this !== this.currentContainer && (t || (n.push(function (e) { this._trigger("remove", e, this._uiHash()) }), n.push(function (e) { return function (t) { e._trigger("receive", t, this._uiHash(this)) } }.call(this, this.currentContainer)), n.push(function (e) { return function (t) { e._trigger("update", t, this._uiHash(this)) } }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--)t || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0); if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) { for (s = 0; n.length > s; s++)n[s].call(this, e); this._trigger("stop", e, this._uiHash()) } return this.fromOutside = !1, !this.cancelHelperRemoval }, _trigger: function () { e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel() }, _uiHash: function (t) { var i = t || this; return { helper: i.helper, placeholder: i.placeholder || e([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: t ? t.element : null } }
  }), e.widget("ui.spinner", { version: "1.11.4", defaultElement: "<input>", widgetEventPrefix: "spin", options: { culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null }, _create: function () { this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, { beforeunload: function () { this.element.removeAttr("autocomplete") } }) }, _getCreateOptions: function () { var t = {}, i = this.element; return e.each(["min", "max", "step"], function (e, s) { var n = i.attr(s); void 0 !== n && n.length && (t[s] = n) }), t }, _events: { keydown: function (e) { this._start(e) && this._keydown(e) && e.preventDefault() }, keyup: "_stop", focus: function () { this.previous = this.element.val() }, blur: function (e) { return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", e), void 0) }, mousewheel: function (e, t) { if (t) { if (!this.spinning && !this._start(e)) return !1; this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () { this.spinning && this._stop(e) }, 100), e.preventDefault() } }, "mousedown .ui-spinner-button": function (t) { function i() { var e = this.element[0] === this.document[0].activeElement; e || (this.element.focus(), this.previous = s, this._delay(function () { this.previous = s })) } var s; s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () { delete this.cancelBlur, i.call(this) }), this._start(t) !== !1 && this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t) }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (t) { return e(t.currentTarget).hasClass("ui-state-active") ? this._start(t) === !1 ? !1 : (this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t), void 0) : void 0 }, "mouseleave .ui-spinner-button": "_stop" }, _draw: function () { var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml()); this.element.attr("role", "spinbutton"), this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * e.height()) && e.height() > 0 && e.height(e.height()), this.options.disabled && this.disable() }, _keydown: function (t) { var i = this.options, s = e.ui.keyCode; switch (t.keyCode) { case s.UP: return this._repeat(null, 1, t), !0; case s.DOWN: return this._repeat(null, -1, t), !0; case s.PAGE_UP: return this._repeat(null, i.page, t), !0; case s.PAGE_DOWN: return this._repeat(null, -i.page, t), !0 }return !1 }, _uiSpinnerHtml: function () { return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>" }, _buttonHtml: function () { return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>" }, _start: function (e) { return this.spinning || this._trigger("start", e) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1 }, _repeat: function (e, t, i) { e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function () { this._repeat(40, t, i) }, e), this._spin(t * this.options.step, i) }, _spin: function (e, t) { var i = this.value() || 0; this.counter || (this.counter = 1), i = this._adjustValue(i + e * this._increment(this.counter)), this.spinning && this._trigger("spin", t, { value: i }) === !1 || (this._value(i), this.counter++) }, _increment: function (t) { var i = this.options.incremental; return i ? e.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1 }, _precision: function () { var e = this._precisionOf(this.options.step); return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e }, _precisionOf: function (e) { var t = "" + e, i = t.indexOf("."); return -1 === i ? 0 : t.length - i - 1 }, _adjustValue: function (e) { var t, i, s = this.options; return t = null !== s.min ? s.min : 0, i = e - t, i = Math.round(i / s.step) * s.step, e = t + i, e = parseFloat(e.toFixed(this._precision())), null !== s.max && e > s.max ? s.max : null !== s.min && s.min > e ? s.min : e }, _stop: function (e) { this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e)) }, _setOption: function (e, t) { if ("culture" === e || "numberFormat" === e) { var i = this._parse(this.element.val()); return this.options[e] = t, this.element.val(this._format(i)), void 0 } ("max" === e || "min" === e || "step" === e) && "string" == typeof t && (t = this._parse(t)), "icons" === e && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)), this._super(e, t), "disabled" === e && (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")) }, _setOptions: h(function (e) { this._super(e) }), _parse: function (e) { return "string" == typeof e && "" !== e && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), "" === e || isNaN(e) ? null : e }, _format: function (e) { return "" === e ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e }, _refresh: function () { this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) }) }, isValid: function () { var e = this.value(); return null === e ? !1 : e === this._adjustValue(e) }, _value: function (e, t) { var i; "" !== e && (i = this._parse(e), null !== i && (t || (i = this._adjustValue(i)), e = this._format(i))), this.element.val(e), this._refresh() }, _destroy: function () { this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element) }, stepUp: h(function (e) { this._stepUp(e) }), _stepUp: function (e) { this._start() && (this._spin((e || 1) * this.options.step), this._stop()) }, stepDown: h(function (e) { this._stepDown(e) }), _stepDown: function (e) { this._start() && (this._spin((e || 1) * -this.options.step), this._stop()) }, pageUp: h(function (e) { this._stepUp((e || 1) * this.options.page) }), pageDown: h(function (e) { this._stepDown((e || 1) * this.options.page) }), value: function (e) { return arguments.length ? (h(this._value).call(this, e), void 0) : this._parse(this.element.val()) }, widget: function () { return this.uiSpinner } }), e.widget("ui.tabs", {
    version: "1.11.4", delay: 300, options: { active: null, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null }, _isLocal: function () { var e = /#.*$/; return function (t) { var i, s; t = t.cloneNode(!1), i = t.href.replace(e, ""), s = location.href.replace(e, ""); try { i = decodeURIComponent(i) } catch (n) { } try { s = decodeURIComponent(s) } catch (n) { } return t.hash.length > 1 && i === s } }(), _create: function () { var t = this, i = this.options; this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible), this._processTabs(), i.active = this._initialActive(), e.isArray(i.disabled) && (i.disabled = e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function (e) { return t.tabs.index(e) }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : e(), this._refresh(), this.active.length && this.load(i.active) }, _initialActive: function () { var t = this.options.active, i = this.options.collapsible, s = location.hash.substring(1); return null === t && (s && this.tabs.each(function (i, n) { return e(n).attr("aria-controls") === s ? (t = i, !1) : void 0 }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === t || -1 === t) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), -1 === t && (t = i ? !1 : 0)), !i && t === !1 && this.anchors.length && (t = 0), t }, _getCreateEventData: function () { return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : e() } }, _tabKeydown: function (t) { var i = e(this.document[0].activeElement).closest("li"), s = this.tabs.index(i), n = !0; if (!this._handlePageNav(t)) { switch (t.keyCode) { case e.ui.keyCode.RIGHT: case e.ui.keyCode.DOWN: s++; break; case e.ui.keyCode.UP: case e.ui.keyCode.LEFT: n = !1, s--; break; case e.ui.keyCode.END: s = this.anchors.length - 1; break; case e.ui.keyCode.HOME: s = 0; break; case e.ui.keyCode.SPACE: return t.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0; case e.ui.keyCode.ENTER: return t.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0; default: return }t.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), t.ctrlKey || t.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function () { this.option("active", s) }, this.delay)) } }, _panelKeydown: function (t) { this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus()) }, _handlePageNav: function (t) { return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0 }, _findNextTab: function (t, i) { function s() { return t > n && (t = 0), 0 > t && (t = n), t } for (var n = this.tabs.length - 1; -1 !== e.inArray(s(), this.options.disabled);)t = i ? t + 1 : t - 1; return t }, _focusNextTab: function (e, t) { return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e }, _setOption: function (e, t) { return "active" === e ? (this._activate(t), void 0) : "disabled" === e ? (this._setupDisabled(t), void 0) : (this._super(e, t), "collapsible" === e && (this.element.toggleClass("ui-tabs-collapsible", t), t || this.options.active !== !1 || this._activate(0)), "event" === e && this._setupEvents(t), "heightStyle" === e && this._setupHeightStyle(t), void 0) }, _sanitizeSelector: function (e) { return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "" }, refresh: function () { var t = this.options, i = this.tablist.children(":has(a[href])"); t.disabled = e.map(i.filter(".ui-state-disabled"), function (e) { return i.index(e) }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()), this._refresh() }, _refresh: function () { this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }), this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" })) : this.tabs.eq(0).attr("tabIndex", 0) }, _processTabs: function () {
      var t = this, i = this.tabs, s = this.anchors, n = this.panels;
      this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function (t) { e(this).is(".ui-state-disabled") && t.preventDefault() }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () { e(this).closest("li").is(".ui-state-disabled") && this.blur() }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({ role: "tab", tabIndex: -1 }), this.anchors = this.tabs.map(function () { return e("a", this)[0] }).addClass("ui-tabs-anchor").attr({ role: "presentation", tabIndex: -1 }), this.panels = e(), this.anchors.each(function (i, s) { var n, a, o, r = e(s).uniqueId().attr("id"), h = e(s).closest("li"), l = h.attr("aria-controls"); t._isLocal(s) ? (n = s.hash, o = n.substring(1), a = t.element.find(t._sanitizeSelector(n))) : (o = h.attr("aria-controls") || e({}).uniqueId()[0].id, n = "#" + o, a = t.element.find(n), a.length || (a = t._createPanel(o), a.insertAfter(t.panels[i - 1] || t.tablist)), a.attr("aria-live", "polite")), a.length && (t.panels = t.panels.add(a)), l && h.data("ui-tabs-aria-controls", l), h.attr({ "aria-controls": o, "aria-labelledby": r }), a.attr("aria-labelledby", r) }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
    }, _getList: function () { return this.tablist || this.element.find("ol,ul").eq(0) }, _createPanel: function (t) { return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0) }, _setupDisabled: function (t) { e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1); for (var i, s = 0; i = this.tabs[s]; s++)t === !0 || -1 !== e.inArray(s, t) ? e(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled"); this.options.disabled = t }, _setupEvents: function (t) { var i = {}; t && e.each(t.split(" "), function (e, t) { i[t] = "_eventHandler" }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, { click: function (e) { e.preventDefault() } }), this._on(this.anchors, i), this._on(this.tabs, { keydown: "_tabKeydown" }), this._on(this.panels, { keydown: "_panelKeydown" }), this._focusable(this.tabs), this._hoverable(this.tabs) }, _setupHeightStyle: function (t) { var i, s = this.element.parent(); "fill" === t ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () { var t = e(this), s = t.css("position"); "absolute" !== s && "fixed" !== s && (i -= t.outerHeight(!0)) }), this.element.children().not(this.panels).each(function () { i -= e(this).outerHeight(!0) }), this.panels.each(function () { e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height())) }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function () { i = Math.max(i, e(this).height("").height()) }).height(i)) }, _eventHandler: function (t) { var i = this.options, s = this.active, n = e(t.currentTarget), a = n.closest("li"), o = a[0] === s[0], r = o && i.collapsible, h = r ? e() : this._getPanelForTab(a), l = s.length ? this._getPanelForTab(s) : e(), u = { oldTab: s, oldPanel: l, newTab: r ? e() : a, newPanel: h }; t.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", t, u) === !1 || (i.active = r ? !1 : this.tabs.index(a), this.active = o ? e() : a, this.xhr && this.xhr.abort(), l.length || h.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(a), t), this._toggle(t, u)) }, _toggle: function (t, i) { function s() { a.running = !1, a._trigger("activate", t, i) } function n() { i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s()) } var a = this, o = i.newPanel, r = i.oldPanel; this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () { i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n() }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function () { return 0 === e(this).attr("tabIndex") }).attr("tabIndex", -1), o.attr("aria-hidden", "false"), i.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }) }, _activate: function (t) { var i, s = this._findActive(t); s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: e.noop })) }, _findActive: function (t) { return t === !1 ? e() : this.tabs.eq(t) }, _getIndex: function (e) { return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e }, _destroy: function () { this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function () { e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role") }), this.tabs.each(function () { var t = e(this), i = t.data("ui-tabs-aria-controls"); i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls") }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "") }, enable: function (t) { var i = this.options.disabled; i !== !1 && (void 0 === t ? i = !1 : (t = this._getIndex(t), i = e.isArray(i) ? e.map(i, function (e) { return e !== t ? e : null }) : e.map(this.tabs, function (e, i) { return i !== t ? i : null })), this._setupDisabled(i)) }, disable: function (t) { var i = this.options.disabled; if (i !== !0) { if (void 0 === t) i = !0; else { if (t = this._getIndex(t), -1 !== e.inArray(t, i)) return; i = e.isArray(i) ? e.merge([t], i).sort() : [t] } this._setupDisabled(i) } }, load: function (t, i) { t = this._getIndex(t); var s = this, n = this.tabs.eq(t), a = n.find(".ui-tabs-anchor"), o = this._getPanelForTab(n), r = { tab: n, panel: o }, h = function (e, t) { "abort" === t && s.panels.stop(!1, !0), n.removeClass("ui-tabs-loading"), o.removeAttr("aria-busy"), e === s.xhr && delete s.xhr }; this._isLocal(a[0]) || (this.xhr = e.ajax(this._ajaxSettings(a, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (n.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.done(function (e, t, n) { setTimeout(function () { o.html(e), s._trigger("load", i, r), h(n, t) }, 1) }).fail(function (e, t) { setTimeout(function () { h(e, t) }, 1) }))) }, _ajaxSettings: function (t, i, s) { var n = this; return { url: t.attr("href"), beforeSend: function (t, a) { return n._trigger("beforeLoad", i, e.extend({ jqXHR: t, ajaxSettings: a }, s)) } } }, _getPanelForTab: function (t) { var i = e(t).attr("aria-controls"); return this.element.find(this._sanitizeSelector("#" + i)) }
  }), e.widget("ui.tooltip", { version: "1.11.4", options: { content: function () { var t = e(this).attr("title") || ""; return e("<a>").text(t).html() }, hide: !0, items: "[title]:not([disabled])", position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: !0, tooltipClass: null, track: !1, close: null, open: null }, _addDescribedBy: function (t, i) { var s = (t.attr("aria-describedby") || "").split(/\s+/); s.push(i), t.data("ui-tooltip-id", i).attr("aria-describedby", e.trim(s.join(" "))) }, _removeDescribedBy: function (t) { var i = t.data("ui-tooltip-id"), s = (t.attr("aria-describedby") || "").split(/\s+/), n = e.inArray(i, s); -1 !== n && s.splice(n, 1), t.removeData("ui-tooltip-id"), s = e.trim(s.join(" ")), s ? t.attr("aria-describedby", s) : t.removeAttr("aria-describedby") }, _create: function () { this._on({ mouseover: "open", focusin: "open" }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = e("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body) }, _setOption: function (t, i) { var s = this; return "disabled" === t ? (this[i ? "_disable" : "_enable"](), this.options[t] = i, void 0) : (this._super(t, i), "content" === t && e.each(this.tooltips, function (e, t) { s._updateContent(t.element) }), void 0) }, _disable: function () { var t = this; e.each(this.tooltips, function (i, s) { var n = e.Event("blur"); n.target = n.currentTarget = s.element[0], t.close(n, !0) }), this.element.find(this.options.items).addBack().each(function () { var t = e(this); t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).removeAttr("title") }) }, _enable: function () { this.element.find(this.options.items).addBack().each(function () { var t = e(this); t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title")) }) }, open: function (t) { var i = this, s = e(t ? t.target : this.element).closest(this.options.items); s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), t && "mouseover" === t.type && s.parents().each(function () { var t, s = e(this); s.data("ui-tooltip-open") && (t = e.Event("blur"), t.target = t.currentTarget = this, i.close(t, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = { element: this, title: s.attr("title") }, s.attr("title", "")) }), this._registerCloseHandlers(t, s), this._updateContent(s, t)) }, _updateContent: function (e, t) { var i, s = this.options.content, n = this, a = t ? t.type : null; return "string" == typeof s ? this._open(t, e, s) : (i = s.call(e[0], function (i) { n._delay(function () { e.data("ui-tooltip-open") && (t && (t.type = a), this._open(t, e, i)) }) }), i && this._open(t, e, i), void 0) }, _open: function (t, i, s) { function n(e) { l.of = e, o.is(":hidden") || o.position(l) } var a, o, r, h, l = e.extend({}, this.options.position); if (s) { if (a = this._find(i)) return a.tooltip.find(".ui-tooltip-content").html(s), void 0; i.is("[title]") && (t && "mouseover" === t.type ? i.attr("title", "") : i.removeAttr("title")), a = this._tooltip(i), o = a.tooltip, this._addDescribedBy(i, o.attr("id")), o.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), s.clone ? (h = s.clone(), h.removeAttr("id").find("[id]").removeAttr("id")) : h = s, e("<div>").html(h).appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, { mousemove: n }), n(t)) : o.position(e.extend({ of: i }, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function () { o.is(":visible") && (n(l.of), clearInterval(r)) }, e.fx.interval)), this._trigger("open", t, { tooltip: o }) } }, _registerCloseHandlers: function (t, i) { var s = { keyup: function (t) { if (t.keyCode === e.ui.keyCode.ESCAPE) { var s = e.Event(t); s.currentTarget = i[0], this.close(s, !0) } } }; i[0] !== this.element[0] && (s.remove = function () { this._removeTooltip(this._find(i).tooltip) }), t && "mouseover" !== t.type || (s.mouseleave = "close"), t && "focusin" !== t.type || (s.focusout = "close"), this._on(!0, i, s) }, close: function (t) { var i, s = this, n = e(t ? t.currentTarget : this.element), a = this._find(n); return a ? (i = a.tooltip, a.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), a.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function () { s._removeTooltip(e(this)) }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && e.each(this.parents, function (t, i) { e(i.element).attr("title", i.title), delete s.parents[t] }), a.closing = !0, this._trigger("close", t, { tooltip: i }), a.hiding || (a.closing = !1)), void 0) : (n.removeData("ui-tooltip-open"), void 0) }, _tooltip: function (t) { var i = e("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")), s = i.uniqueId().attr("id"); return e("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[s] = { element: t, tooltip: i } }, _find: function (e) { var t = e.data("ui-tooltip-id"); return t ? this.tooltips[t] : null }, _removeTooltip: function (e) { e.remove(), delete this.tooltips[e.attr("id")] }, _destroy: function () { var t = this; e.each(this.tooltips, function (i, s) { var n = e.Event("blur"), a = s.element; n.target = n.currentTarget = a[0], t.close(n, !0), e("#" + i).remove(), a.data("ui-tooltip-title") && (a.attr("title") || a.attr("title", a.data("ui-tooltip-title")), a.removeData("ui-tooltip-title")) }), this.liveRegion.remove() } })
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:63:"/local/templates/Vivon2019/js/delete_sovetnik.js?15832928901184";s:6:"source";s:48:"/local/templates/Vivon2019/js/delete_sovetnik.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
// ???????????? ???????????????? ????????????.?????????????????? ?? ?????????? ????????????????-???????????????? ???? MediaGuru.ru
(function () { var a = function () { var e = window.location.hash || false; var b = function (g) { if (e && e === "#ssdebug") { console.log(g) } }; if (!"MutationObserver" in window) { b("MutationObserver not supported!"); return false } var f = new MutationObserver(function (g) { g.map(function (j) { var h = j.addedNodes[0]; var k = false; var i = { "z-index": "2147483647", display: "table", position: "fixed" }; if (h && h.tagName === "DIV") { for (var l in i) { if (window.getComputedStyle(h).getPropertyValue(l) === i[l]) { b(l, true); k = true } else { b(l, false); k = false; break } } if (k) { b("All found!"); document.body.removeChild(h); document.documentElement.style.marginTop = ""; b("Elements removed!") } } }) }); var d = new MutationObserver(function () { var g = document.documentElement.style.marginTop; if (g && parseInt(g) > 0) { document.documentElement.style.marginTop = "" } }); var c = function () { if (!document.body) { setTimeout(c, 100); return } if (f) { f.observe(document.body, { childList: true, attributes: true, attributeFilter: ["style"] }); d.observe(document.documentElement, { attributes: true, attributeFilter: ["style"] }) } }; if (!(e && e === "#ssoff")) { c() } }; a() })();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:76:"/local/templates/Vivon2019/js/jquery.accordion.menu-custom.js?15832928906707";s:6:"source";s:61:"/local/templates/Vivon2019/js/jquery.accordion.menu-custom.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function ($, window, document, undefined) {
  var pluginName = "jqueryAccordionMenu";
  var defaults = {
    speed: 300,
    showDelay: 0,
    hideDelay: 0,
    singleOpen: true,
    clickEffect: true
  };
  function Plugin(element, options) {
    this.element = element;
    this.settings = $.extend({},
      defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init()
  };
  $.extend(Plugin.prototype, {
    init: function () {
      this.submenuIndicators();
      this.openSubmenu();
      // this.submenuIndicators();
      if (defaults.clickEffect) {
        this.addClickEffect()
      }
    },
    openSubmenu: function () {
      $(this.element).children("ul").find("li").children("a").children("i").bind("click touchstart",
        function (e) {
          e.stopPropagation();
          e.preventDefault();
          if ($(this).parent().siblings(".submenu").length > 0) {
            if ($(this).parent().siblings(".submenu").css("display") == "none") {
              $(this).parent().siblings(".submenu").delay(defaults.showDelay).slideDown(defaults.speed);
              $(this).parent().siblings(".submenu").siblings("a").addClass("submenu-indicator-minus");
              if (defaults.singleOpen) {
                $(this).siblings().children(".submenu").slideUp(defaults.speed);
                $(this).siblings().children(".submenu").siblings("a").removeClass("submenu-indicator-minus")
              }
              return false
            } else {
              $(this).parent().siblings(".submenu").delay(defaults.hideDelay).slideUp(defaults.speed)
            }
            if ($(this).parent().siblings(".submenu").siblings("a").hasClass("submenu-indicator-minus")) {
              $(this).parent().siblings(".submenu").siblings("a").removeClass("submenu-indicator-minus")
            }
          }
          // window.location.href = $(this).children("a").attr("href")
        });
      $(this.element).children("ul").find("li").children("a.nolink").bind("click touchstart",
        function (e) {
          e.stopPropagation();
          e.preventDefault();
          if ($(this).siblings(".submenu").length > 0) {
            if ($(this).siblings(".submenu").css("display") == "none") {
              $(this).siblings(".submenu").delay(defaults.showDelay).slideDown(defaults.speed);
              $(this).siblings(".submenu").siblings("a").addClass("submenu-indicator-minus");
              if (defaults.singleOpen) {
                $(this).siblings().children(".submenu").slideUp(defaults.speed);
                $(this).siblings().children(".submenu").siblings("a").removeClass("submenu-indicator-minus")
              }
              return false
            } else {
              $(this).siblings(".submenu").delay(defaults.hideDelay).slideUp(defaults.speed)
            }
            if ($(this).siblings(".submenu").siblings("a").hasClass("submenu-indicator-minus")) {
              $(this).siblings(".submenu").siblings("a").removeClass("submenu-indicator-minus")
            }
          }
          // window.location.href = $(this).children("a").attr("href")
        });
    },
    submenuIndicators: function () {
      if ($(this.element).find(".submenu").length > 0) {
        $(this.element).find(".submenu").siblings("a").append("<i class='fa fa-angle-down submenu-indicator'></i>")
        // $(this.element).find(".submenu").parent().append("<i class='fa fa-angle-down submenu-indicator'></i>")
      }
    },
    addClickEffect: function () {
      var ink, d, x, y;
      $(this.element).find("a").bind("click touchstart",
        function (e) {
          $(".ink").remove();
          if ($(this).children(".ink").length === 0) {
            $(this).prepend("<span class='ink'></span>")
          }
          ink = $(this).find(".ink");
          ink.removeClass("animate-ink");
          if (!ink.height() && !ink.width()) {
            d = Math.max($(this).outerWidth(), $(this).outerHeight());
            ink.css({
              height: d,
              width: d
            })
          }
          x = e.pageX - $(this).offset().left - ink.width() / 2;
          y = e.pageY - $(this).offset().top - ink.height() / 2;
          ink.css({
            top: y + 'px',
            left: x + 'px'
          }).addClass("animate-ink")
        })
    }
  });
  $.fn[pluginName] = function (options) {
    this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin(this, options))
      }
    });
    return this
  }
})(jQuery, window, document);

//????????????????????
jQuery(document).ready(function () {
  jQuery("#jquery-accordion-menu").jqueryAccordionMenu();

});
//???????????????? ??????????
$(function () {
  $("#menu-left-list li").click(function () {
    $("#menu-left-list li.active").removeClass("active")
    $(this).addClass("active");
  })
});

//?????????????????? ????????????
// (function($) {
(function () {
  function filterList(header, list) {
    var form = $("<form>").attr({
      "class": "filterform",
      action: "#"
    }), input = $("<input>").attr({
      "class": "filterinput",
      type: "text"
    });
    $(form).append(input).appendTo(header);
    $(input).change(function () {
      var filter = $(this).val();
      if (filter) {
        $matches = $(list).find("a:Contains(" + filter + ")").parent();
        $("li", list).not($matches).slideUp();
        $matches.slideDown();
      } else {
        $(list).find("li").slideDown();
      }
      return false;
    }).keyup(function () {
      $(this).change();
    });
  }

  $(function () {
    filterList($("#form"), $("#menu-left-list"));
  });
})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:61:"/local/templates/Vivon2019/js/jquery.cookie.js?15832928904246";s:6:"source";s:46:"/local/templates/Vivon2019/js/jquery.cookie.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function (name, value, options) {
  if (typeof value != 'undefined') { // name and value given, set cookie
    options = options || {};
    if (value === null) {
      value = '';
      options.expires = -1;
    }
    var expires = '';
    if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
      var date;
      if (typeof options.expires == 'number') {
        date = new Date();
        date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
      } else {
        date = options.expires;
      }
      expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
    }
    // CAUTION: Needed to parenthesize options.path and options.domain
    // in the following expressions, otherwise they evaluate to undefined
    // in the packed version for some reason...
    var path = options.path ? '; path=' + (options.path) : '';
    var domain = options.domain ? '; domain=' + (options.domain) : '';
    var secure = options.secure ? '; secure' : '';
    document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
  } else { // only name given, get cookie
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = jQuery.trim(cookies[i]);
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) == (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
};
/* End */
;
; /* Start:"a:4:{s:4:"full";s:52:"/local/templates/Vivon2019/js/mask.js?15832928904496";s:6:"source";s:37:"/local/templates/Vivon2019/js/mask.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery) }(function (a) {
  var z, p = navigator.userAgent, G = /iphone/i.test(p), H = /chrome/i.test(p), D = /android/i.test(p); a.mask = { definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, autoclear: !0, dataName: "rawMaskFn", placeholder: "_" }; a.fn.extend({
    caret: function (a, e) {
      var f; if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (e = "number" == typeof e ? e : a, this.each(function () {
        this.setSelectionRange ?
          this.setSelectionRange(a, e) : this.createTextRange && (f = this.createTextRange(), f.collapse(!0), f.moveEnd("character", e), f.moveStart("character", a), f.select())
      })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, e = this[0].selectionEnd) : document.selection && document.selection.createRange && (f = document.selection.createRange(), a = 0 - f.duplicate().moveStart("character", -1E5), e = a + f.text.length), { begin: a, end: e })
    }, unmask: function () { return this.trigger("unmask") }, mask: function (w, e) {
      var f, g, x, q, p, k, A; if (!w && 0 <
        this.length) { var r = a(this[0]); return (r = r.data(a.mask.dataName)) ? r() : void 0 } return e = a.extend({ autoclear: a.mask.autoclear, placeholder: a.mask.placeholder, completed: null }, e), f = a.mask.definitions, g = [], x = k = w.length, q = null, a.each(w.split(""), function (a, e) { "?" == e ? (k--, x = a) : f[e] ? (g.push(new RegExp(f[e])), null === q && (q = g.length - 1), x > a && (p = g.length - 1)) : g.push(null) }), this.trigger("unmask").each(function () {
          function r() { if (e.completed) { for (var c = q; p >= c; c++)if (g[c] && h[c] === t(c)) return; e.completed.call(d) } } function t(c) {
            return e.placeholder.charAt(c <
              e.placeholder.length ? c : 0)
          } function u(c) { for (; ++c < k && !g[c];); return c } function E(c, b) { var n; if (!(0 > c)) { var a = c; for (n = u(b); k > a; a++)if (g[a]) { if (!(k > n && g[a].test(h[n]))) break; h[a] = h[n]; h[n] = t(n); n = u(n) } v(); d.caret(Math.max(q, c)) } } function I(c) { var b, d; var a = c; for (c = t(c); k > a; a++)if (g[a]) { if (b = u(a), d = h[a], h[a] = c, !(k > b && g[b].test(d))) break; c = d } } function J() {
            var c = d.val(), b = d.caret(); if (A && A.length && A.length > c.length) { for (l(!0); 0 < b.begin && !g[b.begin - 1];)b.begin--; if (0 === b.begin) for (; b.begin < q && !g[b.begin];)b.begin++ } else for (l(!0); b.begin <
              k && !g[b.begin];)b.begin++; d.caret(b.begin, b.begin); r()
          } function F() { l(); d.val() != B && d.change() } function C(c, b) { var a; for (a = c; b > a && k > a; a++)g[a] && (h[a] = t(a)) } function v() { d.val(h.join("")) } function l(c) {
            var b, a, y, f = d.val(), m = -1; for (y = b = 0; k > b; b++)if (g[b]) { for (h[b] = t(b); y++ < f.length;)if (a = f.charAt(y - 1), g[b].test(a)) { h[b] = a; m = b; break } if (y > f.length) { C(b + 1, k); break } } else h[b] === f.charAt(y) && y++, x > b && (m = b); return c ? v() : x > m + 1 ? e.autoclear || h.join("") === K ? (d.val() && d.val(""), C(0, k)) : v() : (v(), d.val(d.val().substring(0,
              m + 1))), x ? b : q
          } var d = a(this), h = a.map(w.split(""), function (c, a) { return "?" != c ? f[c] ? t(a) : c : void 0 }), K = h.join(""), B = d.val(); d.data(a.mask.dataName, function () { return a.map(h, function (a, b) { return g[b] && a != t(b) ? a : null }).join("") }); d.one("unmask", function () { d.off(".mask").removeData(a.mask.dataName) }).on("focus.mask", function () { if (!d.prop("readonly")) { clearTimeout(z); B = d.val(); var a = l(); z = setTimeout(function () { d.get(0) === document.activeElement && (v(), a == w.replace("?", "").length ? d.caret(0, a) : d.caret(a)) }, 10) } }).on("click.mask",
            function () { if (!d.prop("readonly")) { clearTimeout(z); B = d.val(); var a = l(); z = setTimeout(function () { d.get(0) === document.activeElement && (v(), a == w.replace("?", "").length ? d.caret(0, a) : d.caret(a)) }, 10) } }).on("blur.mask", F).on("keydown.mask", function (a) {
              if (!d.prop("readonly")) {
                var b = a.which || a.keyCode; A = d.val(); if (8 === b || 46 === b || G && 127 === b) { var c = d.caret(); var e = c.begin; c = c.end; if (0 === c - e) { if (46 !== b) for (; 0 <= --e && !g[e];); else e = c = u(e - 1); c = 46 === b ? u(c) : c } C(e, c); E(e, c - 1); a.preventDefault() } else 13 === b ? F.call(this,
                  a) : 27 === b && (d.val(B), d.caret(0, l()), a.preventDefault())
              }
            }).on("keypress.mask", function (c) { if (!d.prop("readonly")) { var b, e, f, l = c.which || c.keyCode, m = d.caret(); if (!(c.ctrlKey || c.altKey || c.metaKey || 32 > l) && l && 13 !== l) { if (0 !== m.end - m.begin && (C(m.begin, m.end), E(m.begin, m.end - 1)), b = u(m.begin - 1), k > b && (e = String.fromCharCode(l), g[b].test(e))) (I(b), h[b] = e, v(), f = u(b), D) ? setTimeout(function () { a.proxy(a.fn.caret, d, f)() }, 0) : d.caret(f), m.begin <= p && r(); c.preventDefault() } } }).on("input.mask paste.mask", function () {
              d.prop("readonly") ||
                setTimeout(function () { var a = l(!0); d.caret(a); r() }, 0)
            }); H && D && d.off("input.mask").on("input.mask", J); l()
        })
    }
  })
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:120:"/local/templates/Vivon2019/components/codenails/catalog.element/.default/js/jquery.magnific-popup.min.js?158329289021143";s:6:"source";s:104:"/local/templates/Vivon2019/components/codenails/catalog.element/.default/js/jquery.magnific-popup.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! Magnific Popup - v1.0.0 - 2015-01-03
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2015 Dmitry Semenov; */
!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function (a) { var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function () { }, u = !!window.jQuery, v = a(window), w = function (a, c) { b.ev.on(o + a + p, c) }, x = function (b, c, d, e) { var f = document.createElement("div"); return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f }, y = function (c, d) { b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d])) }, z = function (c) { return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn }, A = function () { a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b) }, B = function () { var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"]; if (void 0 !== a.transition) return !0; for (; b.length;)if (b.pop() + "Transition" in a) return !0; return !1 }; t.prototype = { constructor: t, init: function () { var c = navigator.appVersion; b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !== c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {} }, open: function (c) { var e; if (c.isObj === !1) { b.items = c.items.toArray(), b.index = 0; var g, h = c.items; for (e = 0; e < h.length; e++)if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) { b.index = e; break } } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0; if (b.isOpen) return void b.updateItemHTML(); b.types = [], f = "", b.ev = c.mainEl && c.mainEl.length ? c.mainEl.eq(0) : d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () { b.close() }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) { b._checkIfClose(a.target) && b.close() }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading)); var i = a.magnificPopup.modules; for (e = 0; e < i.length; e++) { var j = i[e]; j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b) } y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) { c.close_replaceWith = z(d.type) }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.wrap.css(b.fixedContentPos ? { overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY } : { top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) { 27 === a.keyCode && b.close() }), v.on("resize" + p, function () { b.updateSize() }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f); var k = b.wH = v.height(), n = {}; if (b.fixedContentPos && b._hasScrollBar(k)) { var o = b._getScrollbarSize(); o && (n.marginRight = o) } b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden"); var r = b.st.mainClass; return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () { b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn) }, 16), b.isOpen = !0, b.updateSize(k), y(m), c }, close: function () { b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () { b._close() }, b.st.removalDelay)) : b._close()) }, _close: function () { y(h); var c = r + " " + q + " "; if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) { var e = { marginRight: "" }; b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e) } d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j) }, updateSize: function (a) { if (b.isIOS) { var c = document.documentElement.clientWidth / window.innerWidth, d = window.innerHeight * c; b.wrap.css("height", d), b.wH = d } else b.wH = a || v.height(); b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize") }, updateItemHTML: function () { var c = b.items[b.index]; b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index)); var d = c.type; if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) { var f = b.st[d] ? b.st[d].markup : !1; y("FirstMarkupParse", f), b.currTemplate[d] = f ? a(f) : !0 } e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder"); var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]); b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange") }, appendContent: function (a, c) { b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content) }, parseEl: function (c) { var d, e = b.items[c]; if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) { for (var f = b.types, g = 0; g < f.length; g++)if (e.el.hasClass("mfp-" + f[g])) { d = f[g]; break } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href")) } return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c] }, addGroup: function (a, c) { var d = function (d) { d.mfpEl = this, b._openClick(d, a, c) }; c || (c = {}); var e = "click.magnificPopup"; c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d))) }, _openClick: function (c, d, e) { var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick; if (f || 2 !== c.which && !c.ctrlKey && !c.metaKey) { var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn; if (g) if (a.isFunction(g)) { if (!g.call(b)) return !0 } else if (v.width() < g) return !0; c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e) } }, updateStatus: function (a, d) { if (b.preloader) { c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading); var e = { status: a, text: d }; y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) { a.stopImmediatePropagation() }), b.container.addClass("mfp-s-" + a), c = a } }, _checkIfClose: function (c) { if (!a(c).hasClass(s)) { var d = b.st.closeOnContentClick, e = b.st.closeOnBgClick; if (d && e) return !0; if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0; if (c === b.content[0] || a.contains(b.content[0], c)) { if (d) return !0 } else if (e && a.contains(document, c)) return !0; return !1 } }, _addClassToMFP: function (a) { b.bgOverlay.addClass(a), b.wrap.addClass(a) }, _removeClassFromMFP: function (a) { this.bgOverlay.removeClass(a), b.wrap.removeClass(a) }, _hasScrollBar: function (a) { return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height()) }, _setFocus: function () { (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus() }, _onFocusIn: function (c) { return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1) }, _parseMarkup: function (b, c, d) { var e; d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (a, c) { if (void 0 === c || c === !1) return !0; if (e = a.split("_"), e.length > 1) { var d = b.find(p + "-" + e[0]); if (d.length > 0) { var f = e[1]; "replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c) } } else b.find(p + "-" + a).html(c) }) }, _getScrollbarSize: function () { if (void 0 === b.scrollbarSize) { var a = document.createElement("div"); a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a) } return b.scrollbarSize } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function (b, c) { return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b) }, close: function () { return a.magnificPopup.instance && a.magnificPopup.instance.close() }, registerModule: function (b, c) { c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>', tClose: "Close (Esc)", tLoading: "Loading..." } }, a.fn.magnificPopup = function (c) { A(); var d = a(this); if ("string" == typeof c) if ("open" === c) { var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0; f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f) } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1)); else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c); return d }; var C, D, E, F = "inline", G = function () { E && (D.after(E.addClass(C)).detach(), E = null) }; a.magnificPopup.registerModule(F, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function () { b.types.push(F), w(h + "." + F, function () { G() }) }, getInline: function (c, d) { if (G(), c.src) { var e = b.st.inline, f = a(c.src); if (f.length) { var g = f[0].parentNode; g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready") } else b.updateStatus("error", e.tNotFound), f = a("<div>"); return c.inlineElement = f, f } return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d } } }); var H, I = "ajax", J = function () { H && a(document.body).removeClass(H) }, K = function () { J(), b.req && b.req.abort() }; a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function () { b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K) }, getAjax: function (c) { H && a(document.body).addClass(H), b.updateStatus("loading"); var d = a.extend({ url: c.src, success: function (d, e, f) { var g = { data: d, xhr: f }; y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () { b.wrap.addClass(q) }, 16), b.updateStatus("ready"), y("AjaxContentAdded") }, error: function () { J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src)) } }, b.st.ajax.settings); return b.req = a.ajax(d), "" } } }); var L, M = function (c) { if (c.data && void 0 !== c.data.title) return c.data.title; var d = b.st.image.titleSrc; if (d) { if (a.isFunction(d)) return d.call(b, c); if (c.el) return c.el.attr(d) || "" } return "" }; a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function () { var c = b.st.image, d = ".image"; b.types.push("image"), w(m + d, function () { "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor) }), w(h + d, function () { c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p) }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage) }, resizeImage: function () { var a = b.currItem; if (a && a.img && b.st.image.verticalFit) { var c = 0; b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c) } }, _onImageHasSize: function (a) { a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1)) }, findImageSize: function (a) { var c = 0, d = a.img[0], e = function (f) { L && clearInterval(L), L = setInterval(function () { return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500))) }, f) }; e(1) }, getImage: function (c, d) { var e = 0, f = function () { c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g())) }, g = function () { c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0) }, h = b.st.image, i = d.find(".mfp-img"); if (i.length) { var j = document.createElement("img"); j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1) } return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d) } } }); var N, O = function () { return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N }; a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function (a) { return a.is("img") ? a : a.find("img") } }, proto: { initZoom: function () { var a, c = b.st.zoom, d = ".zoom"; if (c.enabled && b.supportsTransition) { var e, f, g = c.duration, j = function (a) { var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d = "all " + c.duration / 1e3 + "s " + c.easing, e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" }, f = "transition"; return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b }, k = function () { b.content.css("visibility", "visible") }; w("BuildControls" + d, function () { if (b._allowZoom()) { if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k(); f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () { f.css(b._getOffset(!0)), e = setTimeout(function () { k(), setTimeout(function () { f.remove(), a = f = null, y("ZoomAnimationEnded") }, 16) }, g) }, 16) } }), w(i + d, function () { if (b._allowZoom()) { if (clearTimeout(e), b.st.removalDelay = g, !a) { if (a = b._getItemToZoom(), !a) return; f = j(a) } f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () { f.css(b._getOffset()) }, 16) } }), w(h + d, function () { b._allowZoom() && (k(), f && f.remove(), a = null) }) } }, _allowZoom: function () { return "image" === b.currItem.type }, _getItemToZoom: function () { return b.currItem.hasSize ? b.currItem.img : !1 }, _getOffset: function (c) { var d; d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem); var e = d.offset(), f = parseInt(d.css("padding-top"), 10), g = parseInt(d.css("padding-bottom"), 10); e.top -= a(window).scrollTop() - f; var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f }; return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h } } }); var P = "iframe", Q = "//about:blank", R = function (a) { if (b.currTemplate[P]) { var c = b.currTemplate[P].find("iframe"); c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none")) } }; a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function () { b.types.push(P), w("BeforeChange", function (a, b, c) { b !== c && (b === P ? R() : c === P && R(!0)) }), w(h + "." + P, function () { R() }) }, getIframe: function (c, d) { var e = c.src, f = b.st.iframe; a.each(f.patterns, function () { return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0 }); var g = {}; return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d } } }); var S = function (a) { var c = b.items.length; return a > c - 1 ? a - c : 0 > a ? c + a : a }, T = function (a, b, c) { return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c) }; a.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function () { var c = b.st.gallery, e = ".mfp-gallery", g = Boolean(a.fn.mfpFastClick); return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () { c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () { return b.items.length > 1 ? (b.next(), !1) : void 0 }), d.on("keydown" + e, function (a) { 37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next() }) }), w("UpdateStatus" + e, function (a, c) { c.text && (c.text = T(c.text, b.currItem.index, b.items.length)) }), w(l + e, function (a, d, e, f) { var g = b.items.length; e.counter = g > 1 ? T(c.tCounter, f.index, g) : "" }), w("BuildControls" + e, function () { if (b.items.length > 1 && c.arrows && !b.arrowLeft) { var d = c.arrowMarkup, e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s), f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s), h = g ? "mfpFastClick" : "click"; e[h](function () { b.prev() }), f[h](function () { b.next() }), b.isIE7 && (x("b", e[0], !1, !0), x("a", e[0], !1, !0), x("b", f[0], !1, !0), x("a", f[0], !1, !0)), b.container.append(e.add(f)) } }), w(n + e, function () { b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () { b.preloadNearbyImages(), b._preloadTimeout = null }, 16) }), void w(h + e, function () { d.off(e), b.wrap.off("click" + e), b.arrowLeft && g && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null })) : !1 }, next: function () { b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML() }, prev: function () { b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML() }, goTo: function (a) { b.direction = a >= b.index, b.index = a, b.updateItemHTML() }, preloadNearbyImages: function () { var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length); for (a = 1; a <= (b.direction ? e : d); a++)b._preloadItem(b.index + a); for (a = 1; a <= (b.direction ? d : e); a++)b._preloadItem(b.index - a) }, _preloadItem: function (c) { if (c = S(c), !b.items[c].preloaded) { var d = b.items[c]; d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () { d.hasSize = !0 }).on("error.mfploader", function () { d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d) }).attr("src", d.src)), d.preloaded = !0 } } } }); var U = "retina"; a.magnificPopup.registerModule(U, { options: { replaceSrc: function (a) { return a.src.replace(/\.\w+$/, function (a) { return "@2x" + a }) }, ratio: 1 }, proto: { initRetina: function () { if (window.devicePixelRatio > 1) { var a = b.st.retina, c = a.ratio; c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) { b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" }) }), w("ElementParse." + U, function (b, d) { d.src = a.replaceSrc(d, c) })) } } } }), function () { var b = 1e3, c = "ontouchstart" in window, d = function () { v.off("touchmove" + f + " touchend" + f) }, e = "mfpFastClick", f = "." + e; a.fn.mfpFastClick = function (e) { return a(this).each(function () { var g, h = a(this); if (c) { var i, j, k, l, m, n; h.on("touchstart" + f, function (a) { l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, v.on("touchmove" + f, function (a) { m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0, d()) }).on("touchend" + f, function (a) { d(), l || n > 1 || (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function () { g = !1 }, b), e()) }) }) } h.on("click" + f, function () { g || e() }) }) }, a.fn.destroyMfpFastClick = function () { a(this).off("touchstart" + f + " click" + f), c && v.off("touchmove" + f + " touchend" + f) } }(), A() });
/* End */
;
; /* Start:"a:4:{s:4:"full";s:63:"/local/templates/Vivon2019/js/wait/waitwindow.js?16119006695908";s:6:"source";s:48:"/local/templates/Vivon2019/js/wait/waitwindow.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
jQuery.fn.showWaitWindow = function (options) {
  var options = jQuery.extend({ Class: 'simple_waitwindowlocalshadow', MinHeight: 0, MinWidth: 0 }, options);
  return this.each(function () {
    var w = jQuery(this).width();
    var h = jQuery(this).height();

    function GetWindowSize() {
      var innerWidth, innerHeight;

      if (self.innerHeight) // all except Explorer
      {
        innerWidth = self.innerWidth;
        innerHeight = self.innerHeight;
      }
      else if (document.documentElement && document.documentElement.clientHeight) // Explorer 6 Strict Mode
      {
        innerWidth = document.documentElement.clientWidth;
        innerHeight = document.documentElement.clientHeight;
      }
      else if (document.body) // other Explorers
      {
        innerWidth = document.body.clientWidth;
        innerHeight = document.body.clientHeight;
      }

      var scrollLeft, scrollTop;
      if (self.pageYOffset) // all except Explorer
      {
        scrollLeft = self.pageXOffset;
        scrollTop = self.pageYOffset;
      }
      else if (document.documentElement && document.documentElement.scrollTop) // Explorer 6 Strict
      {
        scrollLeft = document.documentElement.scrollLeft;
        scrollTop = document.documentElement.scrollTop;
      }
      else if (document.body) // all other Explorers
      {
        scrollLeft = document.body.scrollLeft;
        scrollTop = document.body.scrollTop;
      }

      var scrollWidth, scrollHeight;

      if ((document.compatMode && document.compatMode == "CSS1Compat")) {
        scrollWidth = document.documentElement.scrollWidth;
        scrollHeight = document.documentElement.scrollHeight;
      }
      else {
        if (document.body.scrollHeight > document.body.offsetHeight)
          scrollHeight = document.body.scrollHeight;
        else
          scrollHeight = document.body.offsetHeight;

        if (document.body.scrollWidth > document.body.offsetWidth ||
          (document.compatMode && document.compatMode == "BackCompat") ||
          (document.documentElement && !document.documentElement.clientWidth)
        )
          scrollWidth = document.body.scrollWidth;
        else
          scrollWidth = document.body.offsetWidth;
      }

      return { "innerWidth": innerWidth, "innerHeight": innerHeight, "scrollLeft": scrollLeft, "scrollTop": scrollTop, "scrollWidth": scrollWidth, "scrollHeight": scrollHeight };
    };

    function GetRealPos(el) {

      if (el.getBoundingClientRect) {
        var obRect = el.getBoundingClientRect();
        var obWndSize = GetWindowSize();
        var arPos = {
          left: obRect.left + obWndSize.scrollLeft,
          top: obRect.top + obWndSize.scrollTop,
          right: obRect.right + obWndSize.scrollLeft,
          bottom: obRect.bottom + obWndSize.scrollTop
        };
        return arPos;
      }


      var res = Array();

      res["left"] = el.offsetLeft;
      res["top"] = el.offsetTop;
      var objParent = el.offsetParent;

      while (objParent && objParent.tagName != "BODY") {
        res["left"] += objParent.offsetLeft;
        res["top"] += objParent.offsetTop;
        objParent = objParent.offsetParent;
      }
      return res;
    };

    arPosition = GetRealPos(this);


    if (w < options.MinWidth) w = options.MinWidth;
    if (h < options.MinHeight) h = options.MinHeight;

    jQuery("body").append("<div id='ajaxLoader_" + this.id + "' style='display:none; top:" + arPosition["top"] + "px; left:" + arPosition["left"] + "px; width:" + w + "px;height:" + h + "px; position:absolute; z-index:10000;' class='" + options.Class + "'></div>");
    $("#ajaxLoader_" + this.id).css("display", "block");

  });
}

jQuery.fn.closeWaitWindow = function () {
  return this.each(function () {
    $('#ajaxLoader_' + this.id).remove();
  });
}

jQuery.fn.ajaxLoader = function (options) {
  var options = jQuery.extend({ Class: 'NONE', MinHeight: 0, MinWidth: 0 }, options);
  return this.each(function () {
    jQuery(this).ajaxStart(function () {

      function RealPosition(obj) {
        var l = 0;
        var t = 0;
        while (obj) {
          l += obj.offsetLeft;
          t += obj.offsetTop;
          obj = obj.offsetParent;
        }
        return { "left": l, "top": t };
      }
      var pos = RealPosition(this);
      var w = jQuery(this).width();
      var h = jQuery(this).height();
      if (w < options.MinWidth) w = options.MinWidth;
      if (h < options.MinHeight) h = options.MinHeight;
      var t = pos.top;
      var l = pos.left;
      jQuery("body").append("<div id='ajaxLoader" + this.id + "' style='width:" + w + "px;height:" + h + "px;position:absolute;top:" + t + "px;left:" + l + "px;z-index:10000;' class=" + options.Class + "></div>");
    });
    jQuery(this).ajaxStop(function () {
      $('#ajaxLoader' + this.id).remove();
    });
  });
}
// $Id: textarea.js,v 1.11.2.1 2007/04/18 02:41:19 drumm Exp $

resizeArea = function () {

  $('textarea.resizable:not(.processed)').each(function () {
    var textarea = $(this).addClass('processed'), staticOffset = null;

    // When wrapping the text area, work around an IE margin bug.  See:
    // http://jaspan.com/ie-inherited-margin-bug-form-elements-and-haslayout
    $(this).wrap('<div class="resizable-textarea"><span></span></div>').parent().append($('<div class="grippie"></div>').mousedown(startDrag));

    var grippie = $('div.grippie', $(this).parent())[0];
    grippie.style.marginRight = (grippie.offsetWidth - $(this)[0].offsetWidth) + 'px';

    function startDrag(e) {
      staticOffset = textarea.height() - mousePosition(e).y;
      textarea.css('opacity', 0.25);
      $(document).mousemove(performDrag).mouseup(endDrag);
      return false;
    }

    function performDrag(e) {
      textarea.height(Math.max(32, staticOffset + mousePosition(e).y) + 'px');
      return false;
    }

    function mousePosition(e) {
      return { x: e.clientX + document.documentElement.scrollLeft, y: e.clientY + document.documentElement.scrollTop };
    }

    function endDrag(e) {
      $(document).unbind('mousemove', performDrag);
      $(document).unbind('mouseup', endDrag);
      textarea.css('opacity', 1);
    }
  });

}
  /* End */
  ;
; /* Start:"a:4:{s:4:"full";s:77:"/local/components/dev.team/cities.list/templates/cols/script.js?1509081088468";s:6:"source";s:63:"/local/components/dev.team/cities.list/templates/cols/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(window).ready(function () {
  $('.city').click(function () {
    // console.log($(this).attr('id') + ':' + $(this).text());
    $.cookie('city_id', $(this).attr('id'), {
      expires: 5,
      path: '/',
    });
    $.cookie('city_name', $(this).text(), {
      expires: 5,
      path: '/',
    });
    $('.city').find('i').hide();
    $(this).find('i').show();
    $('.city-name').text($.trim($(this).text()));
    // $.fancybox().close();
    $.fancybox.close();
  });
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:95:"/local/templates/Vivon2019/components/bitrix/system.auth.form/auth_2017/script.js?1583292890541";s:6:"source";s:81:"/local/templates/Vivon2019/components/bitrix/system.auth.form/auth_2017/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function ShowLoginForm() {
  var div = document.getElementById("login-form-window");
  var div1 = document.getElementById("background-bg");
  if (!div)
    return;
  div.style.display = "block";
  div1.style.display = "block";
  document.body.appendChild(div1);
  document.body.appendChild(div);
  return false;
}

function CloseLoginForm() {
  var div = document.getElementById("login-form-window");
  var div1 = document.getElementById("background-bg");
  if (!div)
    return;

  div.style.display = "none";
  div1.style.display = "none";
  return false;
}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:89:"/local/templates/Vivon2019/components/bitrix/menu/menu_main_table/script.js?1583292890469";s:6:"source";s:75:"/local/templates/Vivon2019/components/bitrix/menu/menu_main_table/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var jshover = function () {
  var menuDiv = document.getElementById("horizontal-multilevel-menu")
  if (!menuDiv)
    return;

  var sfEls = menuDiv.getElementsByTagName("td");
  for (var i = 0; i < sfEls.length; i++) {
    sfEls[i].onmouseover = function () {
      this.className += " jshover";
    }
    sfEls[i].onmouseout = function () {
      this.className = this.className.replace(new RegExp(" jshover\\b"), "");
    }
  }
}

if (window.attachEvent)
  window.attachEvent("onload", jshover);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:67:"/bitrix/components/bitrix/search.title/script.min.js?14978199956110";s:6:"source";s:48:"/bitrix/components/bitrix/search.title/script.js";s:3:"min";s:52:"/bitrix/components/bitrix/search.title/script.min.js";s:3:"map";s:52:"/bitrix/components/bitrix/search.title/script.map.js";}"*/
function JCTitleSearch(t) { var e = this; this.arParams = { AJAX_PAGE: t.AJAX_PAGE, CONTAINER_ID: t.CONTAINER_ID, INPUT_ID: t.INPUT_ID, MIN_QUERY_LEN: parseInt(t.MIN_QUERY_LEN) }; if (t.WAIT_IMAGE) this.arParams.WAIT_IMAGE = t.WAIT_IMAGE; if (t.MIN_QUERY_LEN <= 0) t.MIN_QUERY_LEN = 1; this.cache = []; this.cache_key = null; this.startText = ""; this.running = false; this.currentRow = -1; this.RESULT = null; this.CONTAINER = null; this.INPUT = null; this.WAIT = null; this.ShowResult = function (t) { if (BX.type.isString(t)) { e.RESULT.innerHTML = t } e.RESULT.style.display = e.RESULT.innerHTML !== "" ? "block" : "none"; var s = e.adjustResultNode(); var i; var r; var n = BX.findChild(e.RESULT, { tag: "table", "class": "title-search-result" }, true); if (n) { r = BX.findChild(n, { tag: "th" }, true) } if (r) { var a = BX.pos(n); a.width = a.right - a.left; var l = BX.pos(r); l.width = l.right - l.left; r.style.width = l.width + "px"; e.RESULT.style.width = s.width + l.width + "px"; e.RESULT.style.left = s.left - l.width - 1 + "px"; if (a.width - l.width > s.width) e.RESULT.style.width = s.width + l.width - 1 + "px"; a = BX.pos(n); i = BX.pos(e.RESULT); if (i.right > a.right) { e.RESULT.style.width = a.right - a.left + "px" } } var o; if (n) o = BX.findChild(e.RESULT, { "class": "title-search-fader" }, true); if (o && r) { i = BX.pos(e.RESULT); o.style.left = i.right - i.left - 18 + "px"; o.style.width = 18 + "px"; o.style.top = 0 + "px"; o.style.height = i.bottom - i.top + "px"; o.style.display = "block" } }; this.onKeyPress = function (t) { var s = BX.findChild(e.RESULT, { tag: "table", "class": "title-search-result" }, true); if (!s) return false; var i; var r = s.rows.length; switch (t) { case 27: e.RESULT.style.display = "none"; e.currentRow = -1; e.UnSelectAll(); return true; case 40: if (e.RESULT.style.display == "none") e.RESULT.style.display = "block"; var n = -1; for (i = 0; i < r; i++) { if (!BX.findChild(s.rows[i], { "class": "title-search-separator" }, true)) { if (n == -1) n = i; if (e.currentRow < i) { e.currentRow = i; break } else if (s.rows[i].className == "title-search-selected") { s.rows[i].className = "" } } } if (i == r && e.currentRow != i) e.currentRow = n; s.rows[e.currentRow].className = "title-search-selected"; return true; case 38: if (e.RESULT.style.display == "none") e.RESULT.style.display = "block"; var a = -1; for (i = r - 1; i >= 0; i--) { if (!BX.findChild(s.rows[i], { "class": "title-search-separator" }, true)) { if (a == -1) a = i; if (e.currentRow > i) { e.currentRow = i; break } else if (s.rows[i].className == "title-search-selected") { s.rows[i].className = "" } } } if (i < 0 && e.currentRow != i) e.currentRow = a; s.rows[e.currentRow].className = "title-search-selected"; return true; case 13: if (e.RESULT.style.display == "block") { for (i = 0; i < r; i++) { if (e.currentRow == i) { if (!BX.findChild(s.rows[i], { "class": "title-search-separator" }, true)) { var l = BX.findChild(s.rows[i], { tag: "a" }, true); if (l) { window.location = l.href; return true } } } } } return false }return false }; this.onTimeout = function () { e.onChange(function () { setTimeout(e.onTimeout, 500) }) }; this.onChange = function (t) { if (e.running) return; e.running = true; if (e.INPUT.value != e.oldValue && e.INPUT.value != e.startText) { e.oldValue = e.INPUT.value; if (e.INPUT.value.length >= e.arParams.MIN_QUERY_LEN) { e.cache_key = e.arParams.INPUT_ID + "|" + e.INPUT.value; if (e.cache[e.cache_key] == null) { if (e.WAIT) { var s = BX.pos(e.INPUT); var i = s.bottom - s.top - 2; e.WAIT.style.top = s.top + 1 + "px"; e.WAIT.style.height = i + "px"; e.WAIT.style.width = i + "px"; e.WAIT.style.left = s.right - i + 2 + "px"; e.WAIT.style.display = "block" } BX.ajax.post(e.arParams.AJAX_PAGE, { ajax_call: "y", INPUT_ID: e.arParams.INPUT_ID, q: e.INPUT.value, l: e.arParams.MIN_QUERY_LEN }, function (s) { e.cache[e.cache_key] = s; e.ShowResult(s); e.currentRow = -1; e.EnableMouseEvents(); if (e.WAIT) e.WAIT.style.display = "none"; if (!!t) t(); e.running = false }); return } else { e.ShowResult(e.cache[e.cache_key]); e.currentRow = -1; e.EnableMouseEvents() } } else { e.RESULT.style.display = "none"; e.currentRow = -1; e.UnSelectAll() } } if (!!t) t(); e.running = false }; this.UnSelectAll = function () { var t = BX.findChild(e.RESULT, { tag: "table", "class": "title-search-result" }, true); if (t) { var s = t.rows.length; for (var i = 0; i < s; i++)t.rows[i].className = "" } }; this.EnableMouseEvents = function () { var t = BX.findChild(e.RESULT, { tag: "table", "class": "title-search-result" }, true); if (t) { var s = t.rows.length; for (var i = 0; i < s; i++)if (!BX.findChild(t.rows[i], { "class": "title-search-separator" }, true)) { t.rows[i].id = "row_" + i; t.rows[i].onmouseover = function (t) { if (e.currentRow != this.id.substr(4)) { e.UnSelectAll(); this.className = "title-search-selected"; e.currentRow = this.id.substr(4) } }; t.rows[i].onmouseout = function (t) { this.className = ""; e.currentRow = -1 } } } }; this.onFocusLost = function (t) { setTimeout(function () { e.RESULT.style.display = "none" }, 250) }; this.onFocusGain = function () { if (e.RESULT.innerHTML.length) e.ShowResult() }; this.onKeyDown = function (t) { if (!t) t = window.event; if (e.RESULT.style.display == "block") { if (e.onKeyPress(t.keyCode)) return BX.PreventDefault(t) } }; this.adjustResultNode = function () { var t; var s = BX.findParent(e.CONTAINER, BX.is_fixed); if (!!s) { e.RESULT.style.position = "fixed"; e.RESULT.style.zIndex = BX.style(s, "z-index") + 2; t = BX.pos(e.CONTAINER, true) } else { e.RESULT.style.position = "absolute"; t = BX.pos(e.CONTAINER) } t.width = t.right - t.left; e.RESULT.style.top = t.bottom + 2 + "px"; e.RESULT.style.left = t.left + "px"; e.RESULT.style.width = t.width + "px"; return t }; this._onContainerLayoutChange = function () { if (e.RESULT.style.display !== "none" && e.RESULT.innerHTML !== "") { e.adjustResultNode() } }; this.Init = function () { this.CONTAINER = document.getElementById(this.arParams.CONTAINER_ID); BX.addCustomEvent(this.CONTAINER, "OnNodeLayoutChange", this._onContainerLayoutChange); this.RESULT = document.body.appendChild(document.createElement("DIV")); this.RESULT.className = "title-search-result"; this.INPUT = document.getElementById(this.arParams.INPUT_ID); this.startText = this.oldValue = this.INPUT.value; BX.bind(this.INPUT, "focus", function () { e.onFocusGain() }); BX.bind(this.INPUT, "blur", function () { e.onFocusLost() }); this.INPUT.onkeydown = this.onKeyDown; if (this.arParams.WAIT_IMAGE) { this.WAIT = document.body.appendChild(document.createElement("DIV")); this.WAIT.style.backgroundImage = "url('" + this.arParams.WAIT_IMAGE + "')"; if (!BX.browser.IsIE()) this.WAIT.style.backgroundRepeat = "none"; this.WAIT.style.display = "none"; this.WAIT.style.position = "absolute"; this.WAIT.style.zIndex = "1100" } BX.bind(this.INPUT, "bxchange", function () { e.onChange() }) }; BX.ready(function () { e.Init(t) }) }
/* End */
;
; /* Start:"a:4:{s:4:"full";s:84:"/local/templates/Vivon2019/components/bitrix/menu/menu-left/script.js?15832928901070";s:6:"source";s:69:"/local/templates/Vivon2019/components/bitrix/menu/menu-left/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function () {
  // $(".jquery-accordion-menu .submenu-indicator").bind('click', function(e){
  //     return false; 
  // });
  $(".lvl1 .an").bind('click', function (e) {
    var _a = this.parentNode;
    var bOpen = $(_a).hasClass('open');
    $("ul.root-item").slideUp('fast', function () {
      $(".lvl1").removeClass('open');
    });

    if (!bOpen) {
      $(_a).parent().find('ul').slideDown('fast', function () {
        $(_a).addClass('open');
      });
    }

    return false;
  });

  $("span.lvl1").bind('click', function (e) {
    var _a = this;
    var bOpen = $(_a).hasClass('open');
    if (!bOpen) {
      bOpen = $(_a).parent().find('a.item-selected').length > 0 && $(_a).parent().find('ul.root-item').css('display') != 'none';
    }


    $("ul.root-item").slideUp('fast', function () {
      $(".lvl1").removeClass('open');
    });

    if (!bOpen) {
      $(_a).parent().find('ul').slideDown('fast', function () {
        $(_a).addClass('open');
      });
    }

    return false;
  });
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:83:"/local/components/nesterov/video.banner/templates/.default/script.js?14947776031318";s:6:"source";s:68:"/local/components/nesterov/video.banner/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function () {
  $('.video_url').magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

      patterns: {
        youtube: {
          index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

          id: 'v=', // String that splits URL in a two parts, second part should be %id%
          // Or null - full URL will be returned
          // Or a function that should return %id%, for example:
          // id: function(url) { return 'parsed id'; }

          src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        },
        gmaps: {
          index: '//maps.google.',
          src: '%id%&output=embed'
        }

        // you may add here more sources

      },

      srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    }
  });
});
/* End */
;; /* /local/templates/Vivon2019/js/fotorama.js?142859384438912*/
; /* /local/templates/Vivon2019/js/jquery.sticky-kit.js?15832928906108*/
; /* /local/templates/Vivon2019/js/menu_script.js?15832928901337*/
; /* /local/templates/Vivon2019/js/jquery.jcarousellite.js?158329289021420*/
; /* /local/templates/Vivon2019/js/jquery.equalheightresponsive.min.js?1583292890641*/
; /* /local/templates/Vivon2019/js/fancybox/jquery.fancybox.2.1.5.pack.js?158329289023135*/
; /* /local/templates/Vivon2019/js/select.js?15832928901956*/
; /* /local/templates/Vivon2019/js/fancybox/helpers/jquery.fancybox-thumbs.js?15832928903836*/
; /* /local/templates/Vivon2019/js/social-likes.min.js?15832928909829*/
; /* /local/templates/Vivon2019/js/jquery.bxslider.min.js?158329289023543*/
; /* /local/templates/Vivon2019/js/script.js?162997737030624*/
; /* /local/templates/Vivon2019/js/jquery-ui/jquery-ui.min.js?1426038574240427*/
; /* /local/templates/Vivon2019/js/delete_sovetnik.js?15832928901184*/
; /* /local/templates/Vivon2019/js/jquery.accordion.menu-custom.js?15832928906707*/
; /* /local/templates/Vivon2019/js/jquery.cookie.js?15832928904246*/
; /* /local/templates/Vivon2019/js/mask.js?15832928904496*/
; /* /local/templates/Vivon2019/components/codenails/catalog.element/.default/js/jquery.magnific-popup.min.js?158329289021143*/
; /* /local/templates/Vivon2019/js/wait/waitwindow.js?16119006695908*/
; /* /local/components/dev.team/cities.list/templates/cols/script.js?1509081088468*/
; /* /local/templates/Vivon2019/components/bitrix/system.auth.form/auth_2017/script.js?1583292890541*/
; /* /local/templates/Vivon2019/components/bitrix/menu/menu_main_table/script.js?1583292890469*/
; /* /bitrix/components/bitrix/search.title/script.min.js?14978199956110*/
; /* /local/templates/Vivon2019/components/bitrix/menu/menu-left/script.js?15832928901070*/
; /* /local/components/nesterov/video.banner/templates/.default/script.js?14947776031318*/

//# sourceMappingURL=template_a56d81502ae5a0917dab0b905520f307.map.js