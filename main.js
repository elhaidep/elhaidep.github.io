this.wordle = this.wordle || {}, this.wordle.bundle = function (e) {
    "use strict";

    function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function s(e, a) {
        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
    }

    function t(e, a) {
        for (var s = 0; s < a.length; s++) {
            var t = a[s];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
        }
    }

    function o(e, a, s) {
        return a && t(e.prototype, a), s && t(e, s), e
    }

    function n(e, a, s) {
        return a in e ? Object.defineProperty(e, a, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[a] = s, e
    }

    function r(e, a) {
        if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(a && a.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), a && l(e, a)
    }

    function i(e) {
        return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e, a) {
        return (l = Object.setPrototypeOf || function (e, a) {
            return e.__proto__ = a, e
        })(e, a)
    }

    function d() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
            }))), !0
        } catch (e) {
            return !1
        }
    }

    function u(e, a, s) {
        return (u = d() ? Reflect.construct : function (e, a, s) {
            var t = [null];
            t.push.apply(t, a);
            var o = new (Function.bind.apply(e, t));
            return s && l(o, s.prototype), o
        }).apply(null, arguments)
    }

    function c(e) {
        var a = "function" == typeof Map ? new Map : void 0;
        return (c = function (e) {
            if (null === e || (s = e, -1 === Function.toString.call(s).indexOf("[native code]"))) return e;
            var s;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== a) {
                if (a.has(e)) return a.get(e);
                a.set(e, t)
            }

            function t() {
                return u(e, arguments, i(this).constructor)
            }

            return t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), l(t, e)
        })(e)
    }

    function p(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function m(e, a) {
        return !a || "object" != typeof a && "function" != typeof a ? p(e) : a
    }

    function h(e) {
        var a = d();
        return function () {
            var s, t = i(e);
            if (a) {
                var o = i(this).constructor;
                s = Reflect.construct(t, arguments, o)
            } else s = t.apply(this, arguments);
            return m(this, s)
        }
    }

    function y(e, a) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, a) {
            var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == s) return;
            var t, o, n = [], r = !0, i = !1;
            try {
                for (s = s.call(e); !(r = (t = s.next()).done) && (n.push(t.value), !a || n.length !== a); r = !0) ;
            } catch (e) {
                i = !0, o = e
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(e, a) || b(e, a) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function g(e) {
        return function (e) {
            if (Array.isArray(e)) return f(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || b(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function b(e, a) {
        if (e) {
            if ("string" == typeof e) return f(e, a);
            var s = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? f(e, a) : void 0
        }
    }

    function f(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var s = 0, t = new Array(a); s < a; s++) t[s] = e[s];
        return t
    }

    var k = document.createElement("template");
    k.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
    var v = function (e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), n(p(e = a.call(this)), "_letter", ""), n(p(e), "_state", "empty"), n(p(e), "_animation", "idle"), n(p(e), "_last", !1), n(p(e), "_reveal", !1), e.attachShadow({mode: "open"}), e
        }

        return o(t, [{
            key: "last", set: function (e) {
                this._last = e
            }
        }, {
            key: "connectedCallback", value: function () {
                var e = this;
                this.shadowRoot.appendChild(k.content.cloneNode(!0)), this.$tile = this.shadowRoot.querySelector(".tile"), this.$tile.addEventListener("animationend", (function (a) {
                    "PopIn" === a.animationName && (e._animation = "idle"), "FlipIn" === a.animationName && (e.$tile.dataset.state = e._state, e._animation = "flip-out"), "FlipOut" === a.animationName && (e._animation = "idle", e._last && e.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row", {
                        bubbles: !0,
                        composed: !0
                    }))), e._render()
                })), this._render()
            }
        }, {
            key: "attributeChangedCallback", value: function (e, a, s) {
                switch (e) {
                    case"letter":
                        if (s === a) break;
                        var t = "null" === s ? "" : s;
                        this._letter = t, this._state = t ? "tbd" : "empty", this._animation = t ? "pop" : "idle";
                        break;
                    case"evaluation":
                        if (!s) break;
                        this._state = s;
                        break;
                    case"reveal":
                        this._animation = "flip-in", this._reveal = !0
                }
                this._render()
            }
        }, {
            key: "_render", value: function () {
                this.$tile && (this.$tile.textContent = this._letter, ["empty", "tbd"].includes(this._state) && (this.$tile.dataset.state = this._state), (["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation && (this.$tile.dataset.animation = this._animation))
            }
        }], [{
            key: "observedAttributes", get: function () {
                return ["letter", "evaluation", "reveal"]
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-tile", v);
    var w = document.createElement("template");
    w.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
    var x = function (e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({mode: "open"}), e._letters = "", e._evaluation = [], e._length, e
        }

        return o(t, [{
            key: "evaluation", get: function () {
                return this._evaluation
            }, set: function (e) {
                var a = this;
                this._evaluation = e, this.$tiles && this.$tiles.forEach((function (e, s) {
                    e.setAttribute("evaluation", a._evaluation[s]), setTimeout((function () {
                        e.setAttribute("reveal", "")
                    }), 300 * s)
                }))
            }
        }, {
            key: "connectedCallback", value: function () {
                var e = this;
                this.shadowRoot.appendChild(w.content.cloneNode(!0)), this.$row = this.shadowRoot.querySelector(".row");
                for (var a = function (a) {
                    var s = document.createElement("game-tile"), t = e._letters[a];
                    (t && s.setAttribute("letter", t), e._evaluation[a]) && (s.setAttribute("evaluation", e._evaluation[a]), setTimeout((function () {
                        s.setAttribute("reveal", "")
                    }), 100 * a));
                    a === e._length - 1 && (s.last = !0), e.$row.appendChild(s)
                }, s = 0; s < this._length; s++) a(s);
                this.$tiles = this.shadowRoot.querySelectorAll("game-tile"), this.addEventListener("animationend", (function (a) {
                    "Shake" === a.animationName && e.removeAttribute("invalid")
                }))
            }
        }, {
            key: "attributeChangedCallback", value: function (e, a, s) {
                switch (e) {
                    case"letters":
                        this._letters = s || "";
                        break;
                    case"length":
                        this._length = parseInt(s, 10);
                        break;
                    case"win":
                        if (null === s) {
                            this.$tiles.forEach((function (e) {
                                e.classList.remove("win")
                            }));
                            break
                        }
                        this.$tiles.forEach((function (e, a) {
                            e.classList.add("win"), e.style.animationDelay = "".concat(100 * a, "ms")
                        }))
                }
                this._render()
            }
        }, {
            key: "_render", value: function () {
                var e = this;
                this.$row && this.$tiles.forEach((function (a, s) {
                    var t = e._letters[s];
                    t ? a.setAttribute("letter", t) : a.removeAttribute("letter")
                }))
            }
        }], [{
            key: "observedAttributes", get: function () {
                return ["letters", "length", "invalid", "win"]
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-row", x);
    var z = document.createElement("template");
    z.innerHTML = "\n  <slot></slot>\n";
    var j = "darkTheme", S = "colorBlindTheme", _ = function (e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            s(this, t), n(p(e = a.call(this)), "isDarkTheme", !1), n(p(e), "isColorBlindTheme", !1), e.attachShadow({mode: "open"});
            var o = JSON.parse(window.localStorage.getItem(j)),
                r = window.matchMedia("(prefers-color-scheme: dark)").matches,
                i = JSON.parse(window.localStorage.getItem(S));
            return !0 === o || !1 === o ? e.setDarkTheme(o) : r && e.setDarkTheme(!0), !0 !== i && !1 !== i || e.setColorBlindTheme(i), e
        }

        return o(t, [{
            key: "setDarkTheme", value: function (e) {
                var a = document.querySelector("body");
                e && !a.classList.contains("nightmode") ? a.classList.add("nightmode") : a.classList.remove("nightmode"), this.isDarkTheme = e, window.localStorage.setItem(j, JSON.stringify(e))
            }
        }, {
            key: "setColorBlindTheme", value: function (e) {
                var a = document.querySelector("body");
                e && !a.classList.contains("colorblind") ? a.classList.add("colorblind") : a.classList.remove("colorblind"), this.isColorBlindTheme = e, window.localStorage.setItem(S, JSON.stringify(e))
            }
        }, {
            key: "connectedCallback", value: function () {
                var e = this;
                this.shadowRoot.appendChild(z.content.cloneNode(!0)), this.shadowRoot.addEventListener("game-setting-change", (function (a) {
                    var s = a.detail, t = s.name, o = s.checked;
                    switch (t) {
                        case"dark-theme":
                            return void e.setDarkTheme(o);
                        case"color-blind-theme":
                            return void e.setColorBlindTheme(o)
                    }
                }))
            }
        }]), t
    }(c(HTMLElement));

    function q(e, a) {
        return e === a || e != e && a != a
    }

    function E(e, a) {
        for (var s = e.length; s--;) if (q(e[s][0], a)) return s;
        return -1
    }

    customElements.define("game-theme-manager", _);
    var A = Array.prototype.splice;

    function C(e) {
        var a = -1, s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s;) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }

    C.prototype.clear = function () {
        this.__data__ = [], this.size = 0
    }, C.prototype.delete = function (e) {
        var a = this.__data__, s = E(a, e);
        return !(s < 0) && (s == a.length - 1 ? a.pop() : A.call(a, s, 1), --this.size, !0)
    }, C.prototype.get = function (e) {
        var a = this.__data__, s = E(a, e);
        return s < 0 ? void 0 : a[s][1]
    }, C.prototype.has = function (e) {
        return E(this.__data__, e) > -1
    }, C.prototype.set = function (e, a) {
        var s = this.__data__, t = E(s, e);
        return t < 0 ? (++this.size, s.push([e, a])) : s[t][1] = a, this
    };
    var L = "object" == ("undefined" == typeof global ? "undefined" : a(global)) && global && global.Object === Object && global,
        T = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
        I = L || T || Function("return this")(), M = I.Symbol, O = Object.prototype, R = O.hasOwnProperty,
        P = O.toString, $ = M ? M.toStringTag : void 0;
    var H = Object.prototype.toString;
    var N = M ? M.toStringTag : void 0;

    function D(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : N && N in Object(e) ? function (e) {
            var a = R.call(e, $), s = e[$];
            try {
                e[$] = void 0;
                var t = !0
            } catch (e) {
            }
            var o = P.call(e);
            return t && (a ? e[$] = s : delete e[$]), o
        }(e) : function (e) {
            return H.call(e)
        }(e)
    }

    function G(e) {
        var s = a(e);
        return null != e && ("object" == s || "function" == s)
    }

    function B(e) {
        if (!G(e)) return !1;
        var a = D(e);
        return "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a
    }

    var F, W = I["__core-js_shared__"],
        Y = (F = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "")) ? "Symbol(src)_1." + F : "";
    var J = Function.prototype.toString;
    var U = /^\[object .+?Constructor\]$/, X = Function.prototype, V = Object.prototype, K = X.toString,
        Q = V.hasOwnProperty,
        Z = RegExp("^" + K.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function ee(e) {
        return !(!G(e) || (a = e, Y && Y in a)) && (B(e) ? Z : U).test(function (e) {
            if (null != e) {
                try {
                    return J.call(e)
                } catch (e) {
                }
                try {
                    return e + ""
                } catch (e) {
                }
            }
            return ""
        }(e));
        var a
    }

    function ae(e, a) {
        var s = function (e, a) {
            return null == e ? void 0 : e[a]
        }(e, a);
        return ee(s) ? s : void 0
    }

    var se = ae(I, "Map"), te = ae(Object, "create");
    var oe = Object.prototype.hasOwnProperty;
    var ne = Object.prototype.hasOwnProperty;

    function re(e) {
        var a = -1, s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s;) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }

    function ie(e, s) {
        var t, o, n = e.__data__;
        return ("string" == (o = a(t = s)) || "number" == o || "symbol" == o || "boolean" == o ? "__proto__" !== t : null === t) ? n["string" == typeof s ? "string" : "hash"] : n.map
    }

    function le(e) {
        var a = -1, s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s;) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }

    re.prototype.clear = function () {
        this.__data__ = te ? te(null) : {}, this.size = 0
    }, re.prototype.delete = function (e) {
        var a = this.has(e) && delete this.__data__[e];
        return this.size -= a ? 1 : 0, a
    }, re.prototype.get = function (e) {
        var a = this.__data__;
        if (te) {
            var s = a[e];
            return "__lodash_hash_undefined__" === s ? void 0 : s
        }
        return oe.call(a, e) ? a[e] : void 0
    }, re.prototype.has = function (e) {
        var a = this.__data__;
        return te ? void 0 !== a[e] : ne.call(a, e)
    }, re.prototype.set = function (e, a) {
        var s = this.__data__;
        return this.size += this.has(e) ? 0 : 1, s[e] = te && void 0 === a ? "__lodash_hash_undefined__" : a, this
    }, le.prototype.clear = function () {
        this.size = 0, this.__data__ = {hash: new re, map: new (se || C), string: new re}
    }, le.prototype.delete = function (e) {
        var a = ie(this, e).delete(e);
        return this.size -= a ? 1 : 0, a
    }, le.prototype.get = function (e) {
        return ie(this, e).get(e)
    }, le.prototype.has = function (e) {
        return ie(this, e).has(e)
    }, le.prototype.set = function (e, a) {
        var s = ie(this, e), t = s.size;
        return s.set(e, a), this.size += s.size == t ? 0 : 1, this
    };

    function de(e) {
        var a = this.__data__ = new C(e);
        this.size = a.size
    }

    de.prototype.clear = function () {
        this.__data__ = new C, this.size = 0
    }, de.prototype.delete = function (e) {
        var a = this.__data__, s = a.delete(e);
        return this.size = a.size, s
    }, de.prototype.get = function (e) {
        return this.__data__.get(e)
    }, de.prototype.has = function (e) {
        return this.__data__.has(e)
    }, de.prototype.set = function (e, a) {
        var s = this.__data__;
        if (s instanceof C) {
            var t = s.__data__;
            if (!se || t.length < 199) return t.push([e, a]), this.size = ++s.size, this;
            s = this.__data__ = new le(t)
        }
        return s.set(e, a), this.size = s.size, this
    };
    var ue = function () {
        try {
            var e = ae(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (e) {
        }
    }();

    function ce(e, a, s) {
        "__proto__" == a && ue ? ue(e, a, {configurable: !0, enumerable: !0, value: s, writable: !0}) : e[a] = s
    }

    function pe(e, a, s) {
        (void 0 !== s && !q(e[a], s) || void 0 === s && !(a in e)) && ce(e, a, s)
    }

    var me, he = function (e, a, s) {
            for (var t = -1, o = Object(e), n = s(e), r = n.length; r--;) {
                var i = n[me ? r : ++t];
                if (!1 === a(o[i], i, o)) break
            }
            return e
        }, ye = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
        ge = ye && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
        be = ge && ge.exports === ye ? I.Buffer : void 0, fe = be ? be.allocUnsafe : void 0;
    var ke = I.Uint8Array;

    function ve(e, a) {
        var s, t, o = a ? (s = e.buffer, t = new s.constructor(s.byteLength), new ke(t).set(new ke(s)), t) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.length)
    }

    var we = Object.create, xe = function () {
        function e() {
        }

        return function (a) {
            if (!G(a)) return {};
            if (we) return we(a);
            e.prototype = a;
            var s = new e;
            return e.prototype = void 0, s
        }
    }();
    var ze, je, Se = (ze = Object.getPrototypeOf, je = Object, function (e) {
        return ze(je(e))
    }), _e = Object.prototype;

    function qe(e) {
        var a = e && e.constructor;
        return e === ("function" == typeof a && a.prototype || _e)
    }

    function Ee(e) {
        return null != e && "object" == a(e)
    }

    function Ae(e) {
        return Ee(e) && "[object Arguments]" == D(e)
    }

    var Ce = Object.prototype, Le = Ce.hasOwnProperty, Te = Ce.propertyIsEnumerable, Ie = Ae(function () {
        return arguments
    }()) ? Ae : function (e) {
        return Ee(e) && Le.call(e, "callee") && !Te.call(e, "callee")
    }, Me = Array.isArray;

    function Oe(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
    }

    function Re(e) {
        return null != e && Oe(e.length) && !B(e)
    }

    var Pe = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
        $e = Pe && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
        He = $e && $e.exports === Pe ? I.Buffer : void 0, Ne = (He ? He.isBuffer : void 0) || function () {
            return !1
        }, De = Function.prototype, Ge = Object.prototype, Be = De.toString, Fe = Ge.hasOwnProperty, We = Be.call(Object);
    var Ye = {};
    Ye["[object Float32Array]"] = Ye["[object Float64Array]"] = Ye["[object Int8Array]"] = Ye["[object Int16Array]"] = Ye["[object Int32Array]"] = Ye["[object Uint8Array]"] = Ye["[object Uint8ClampedArray]"] = Ye["[object Uint16Array]"] = Ye["[object Uint32Array]"] = !0, Ye["[object Arguments]"] = Ye["[object Array]"] = Ye["[object ArrayBuffer]"] = Ye["[object Boolean]"] = Ye["[object DataView]"] = Ye["[object Date]"] = Ye["[object Error]"] = Ye["[object Function]"] = Ye["[object Map]"] = Ye["[object Number]"] = Ye["[object Object]"] = Ye["[object RegExp]"] = Ye["[object Set]"] = Ye["[object String]"] = Ye["[object WeakMap]"] = !1;
    var Je = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
        Ue = Je && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
        Xe = Ue && Ue.exports === Je && L.process, Ve = function () {
            try {
                var e = Ue && Ue.require && Ue.require("util").types;
                return e || Xe && Xe.binding && Xe.binding("util")
            } catch (e) {
            }
        }(), Ke = Ve && Ve.isTypedArray, Qe = Ke ? function (e) {
            return function (a) {
                return e(a)
            }
        }(Ke) : function (e) {
            return Ee(e) && Oe(e.length) && !!Ye[D(e)]
        };

    function Ze(e, a) {
        if (("constructor" !== a || "function" != typeof e[a]) && "__proto__" != a) return e[a]
    }

    var ea = Object.prototype.hasOwnProperty;

    function aa(e, a, s) {
        var t = e[a];
        ea.call(e, a) && q(t, s) && (void 0 !== s || a in e) || ce(e, a, s)
    }

    var sa = /^(?:0|[1-9]\d*)$/;

    function ta(e, s) {
        var t = a(e);
        return !!(s = null == s ? 9007199254740991 : s) && ("number" == t || "symbol" != t && sa.test(e)) && e > -1 && e % 1 == 0 && e < s
    }

    var oa = Object.prototype.hasOwnProperty;

    function na(e, a) {
        var s = Me(e), t = !s && Ie(e), o = !s && !t && Ne(e), n = !s && !t && !o && Qe(e), r = s || t || o || n,
            i = r ? function (e, a) {
                for (var s = -1, t = Array(e); ++s < e;) t[s] = a(s);
                return t
            }(e.length, String) : [], l = i.length;
        for (var d in e) !a && !oa.call(e, d) || r && ("length" == d || o && ("offset" == d || "parent" == d) || n && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || ta(d, l)) || i.push(d);
        return i
    }

    var ra = Object.prototype.hasOwnProperty;

    function ia(e) {
        if (!G(e)) return function (e) {
            var a = [];
            if (null != e) for (var s in Object(e)) a.push(s);
            return a
        }(e);
        var a = qe(e), s = [];
        for (var t in e) ("constructor" != t || !a && ra.call(e, t)) && s.push(t);
        return s
    }

    function la(e) {
        return Re(e) ? na(e, !0) : ia(e)
    }

    function da(e) {
        return function (e, a, s, t) {
            var o = !s;
            s || (s = {});
            for (var n = -1, r = a.length; ++n < r;) {
                var i = a[n], l = t ? t(s[i], e[i], i, s, e) : void 0;
                void 0 === l && (l = e[i]), o ? ce(s, i, l) : aa(s, i, l)
            }
            return s
        }(e, la(e))
    }

    function ua(e, a, s, t, o, n, r) {
        var i = Ze(e, s), l = Ze(a, s), d = r.get(l);
        if (d) pe(e, s, d); else {
            var u, c = n ? n(i, l, s + "", e, a, r) : void 0, p = void 0 === c;
            if (p) {
                var m = Me(l), h = !m && Ne(l), y = !m && !h && Qe(l);
                c = l, m || h || y ? Me(i) ? c = i : Ee(u = i) && Re(u) ? c = function (e, a) {
                    var s = -1, t = e.length;
                    for (a || (a = Array(t)); ++s < t;) a[s] = e[s];
                    return a
                }(i) : h ? (p = !1, c = function (e, a) {
                    if (a) return e.slice();
                    var s = e.length, t = fe ? fe(s) : new e.constructor(s);
                    return e.copy(t), t
                }(l, !0)) : y ? (p = !1, c = ve(l, !0)) : c = [] : function (e) {
                    if (!Ee(e) || "[object Object]" != D(e)) return !1;
                    var a = Se(e);
                    if (null === a) return !0;
                    var s = Fe.call(a, "constructor") && a.constructor;
                    return "function" == typeof s && s instanceof s && Be.call(s) == We
                }(l) || Ie(l) ? (c = i, Ie(i) ? c = da(i) : G(i) && !B(i) || (c = function (e) {
                    return "function" != typeof e.constructor || qe(e) ? {} : xe(Se(e))
                }(l))) : p = !1
            }
            p && (r.set(l, c), o(c, l, t, n, r), r.delete(l)), pe(e, s, c)
        }
    }

    function ca(e, a, s, t, o) {
        e !== a && he(a, (function (n, r) {
            if (o || (o = new de), G(n)) ua(e, a, r, s, ca, t, o); else {
                var i = t ? t(Ze(e, r), n, r + "", e, a, o) : void 0;
                void 0 === i && (i = n), pe(e, r, i)
            }
        }), la)
    }

    function pa(e) {
        return e
    }

    function ma(e, a, s) {
        switch (s.length) {
            case 0:
                return e.call(a);
            case 1:
                return e.call(a, s[0]);
            case 2:
                return e.call(a, s[0], s[1]);
            case 3:
                return e.call(a, s[0], s[1], s[2])
        }
        return e.apply(a, s)
    }

    var ha = Math.max;
    var ya = ue ? function (e, a) {
        return ue(e, "toString", {
            configurable: !0, enumerable: !1, value: (s = a, function () {
                return s
            }), writable: !0
        });
        var s
    } : pa, ga = Date.now;
    var ba = function (e) {
        var a = 0, s = 0;
        return function () {
            var t = ga(), o = 16 - (t - s);
            if (s = t, o > 0) {
                if (++a >= 800) return arguments[0]
            } else a = 0;
            return e.apply(void 0, arguments)
        }
    }(ya);

    function fa(e, a) {
        return ba(function (e, a, s) {
            return a = ha(void 0 === a ? e.length - 1 : a, 0), function () {
                for (var t = arguments, o = -1, n = ha(t.length - a, 0), r = Array(n); ++o < n;) r[o] = t[a + o];
                o = -1;
                for (var i = Array(a + 1); ++o < a;) i[o] = t[o];
                return i[a] = s(r), ma(e, this, i)
            }
        }(e, a, pa), e + "")
    }

    var ka, va = (ka = function (e, a, s) {
        ca(e, a, s)
    }, fa((function (e, s) {
        var t = -1, o = s.length, n = o > 1 ? s[o - 1] : void 0, r = o > 2 ? s[2] : void 0;
        for (n = ka.length > 3 && "function" == typeof n ? (o--, n) : void 0, r && function (e, s, t) {
            if (!G(t)) return !1;
            var o = a(s);
            return !!("number" == o ? Re(t) && ta(s, t.length) : "string" == o && s in t) && q(t[s], e)
        }(s[0], s[1], r) && (n = o < 3 ? void 0 : n, o = 1), e = Object(e); ++t < o;) {
            var i = s[t];
            i && ka(e, i, t, n)
        }
        return e
    }))), wa = "gameState", xa = {
        boardState: null,
        evaluations: null,
        rowIndex: null,
        solution: null,
        gameStatus: null,
        lastPlayedTs: null,
        lastCompletedTs: null,
        restoringFromLocalStorage: null,
        hardMode: !1
    };

    var offset_key = "myGameOffset";
    var offset_value = 0;

    function za() {
        var e = window.localStorage.getItem(wa) || JSON.stringify(xa);
        return JSON.parse(e)
    }

    function ja(e) {
        var a = za();
        !function (e) {
            window.localStorage.setItem(wa, JSON.stringify(e))
        }(va(a, e))
    }

    var Sa = document.createElement("template");
    Sa.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  #privacy-policy,\n  #copyright {\n    text-align: left;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Modo difÃ­cil</div>\n          <div class="description"> </div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Modo oscuro </div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Modo para DaltÃ³nicos</div>\n          <div class="description">una funciÃ³n para personas daltÃ³nicas</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n                  </div>\n        <div class="control">\n                    |\n          <a href="https://twitter.com/#" target="blank" title="@#">Twitter</a>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div id="footnote">\n    <div>\n      <div id="privacy-policy"><a href="https://wordleespanol.org/privacy-policy.html" target="_blank">Privacy Policy</a></div>\n      <div id="copyright">Copyright 2021-2022. No rights at all.</div>\n    </div>\n    <div>\n      <div id="puzzle-number"> </div>\n      <div id="hash"></div>\n    </div>\n  </div>\n';
    var _a = function (e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), n(p(e = a.call(this)), "gameApp", void 0), e.attachShadow({mode: "open"}), e
        }

        return o(t, [{
            key: "connectedCallback", value: function () {
                var e, a = this;
                this.shadowRoot.appendChild(Sa.content.cloneNode(!0)), this.shadowRoot.querySelector("#hash").textContent = null === (e = window.wordle) || void 0 === e ? void 0 : e.hash, this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset), this.shadowRoot.addEventListener("game-switch-change", (function (e) {
                    e.stopPropagation();
                    var s = e.detail, t = s.name, o = s.checked, n = s.disabled;
                    a.dispatchEvent(new CustomEvent("game-setting-change", {
                        bubbles: !0,
                        composed: !0,
                        detail: {name: t, checked: o, disabled: n}
                    })), a.render()
                })), this.render()
            }
        }, {
            key: "render", value: function () {
                var e = document.querySelector("body");
                e.classList.contains("nightmode") && this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", ""), e.classList.contains("colorblind") && this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
                var a = za();
                a.hardMode && this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", ""), a.hardMode || "IN_PROGRESS" !== a.gameStatus || 0 === a.rowIndex || (this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked"), this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", ""))
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-settings", _a);
    var qa = document.createElement("template");
    qa.innerHTML = '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
    var Ea, Aa = function (e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), n(p(e = a.call(this)), "_duration", void 0), e.attachShadow({mode: "open"}), e
        }

        return o(t, [{
            key: "connectedCallback", value: function () {
                var e = this;
                this.shadowRoot.appendChild(qa.content.cloneNode(!0));
                var a = this.shadowRoot.querySelector(".toast");
                a.textContent = this.getAttribute("text"), this._duration = this.getAttribute("duration") || 1e3, "Infinity" !== this._duration && setTimeout((function () {
                    a.classList.add("fade")
                }), this._duration), a.addEventListener("transitionend", (function (a) {
                    e.parentNode.removeChild(e)
                }))
            }
        }]), t
    }(c(HTMLElement));

    function Ca() {
        dataLayer.push(arguments)
    }

    customElements.define("game-toast", Aa), window.dataLayer = window.dataLayer || [], Ca("js", new Date);
    Ca("config", "G-2SSGMHY3NP", {
        app_version: null === (Ea = window.wordle) || void 0 === Ea ? void 0 : Ea.hash,
        debug_mode: !1
    });
    var SOLUTION_LIST = ["abajo","abeja","abril","abuso","acera","acero","acido","acoso","actas","actor","adios","aguja","ahora","album","amado","ambos","amigo","ancho","ancla","angel","animo","anual","apoyo","arabe","arbol","arena","armar","arroz","atras","audaz","autor","avion","aviso","ayuda","bahia","banco","banda","beber","bicho","bolso","bomba","borde","boton","bravo","brazo","breve","brisa","broma","bruja","bruto","bueno","cable","cabra","cajon","calle","calma","calor","campo","canal","canta","capaz","carga","cargo","carne","carro","carta","casar","casco","cavar","cazar","celda","censo","cerca","cerdo","cesar","cesta","chico","chino","ciclo","ciego","cielo","cinco","cinta","citar","civil","claro","clase","clima","cofre","color","comic","comun","corte","corto","cosas","costa","costo","crear","creer","crema","crudo","cruel","cuero","cueva","culpa","cuota","curar","curso","curva","danza","datos","danar","deber","debil","debut","decir","dejar","demas","desde","deseo","deuda","dieta","disco","doble","dolar","dolor","donar","donde","dosis","drama","droga","ducha","dudar","dueno","dulce","elite","ellos","email","enero","entre","error","esqui","estar","estos","etica","etico","exito","extra","facil","falda","falla","falso","favor","fecha","feliz","fibra","final","firma","firme","flota","fluir","fondo","forma","fosil","frase","fruta","fuego","fuera","furia","galon","ganar","gasto","genio","gente","gesto","girar","globo","golfo","golpe","gordo","gorra","grado","gramo","grano","grave","grifo","grito","grupo","guapo","guion","habla","hacer","hacia","haria","hasta","hecho","herir","heroe","hielo","honor","horno","hotel","hueso","huevo","humor","hurto","icono","ideal","igual","impar","indio","irani","islam","jabon","jalar","jaula","joven","joyas","judio","juego","junio","junta","jurar","justo","labio","labor","lapiz","largo","laser","latin","lavar","leche","legal","lejos","lente","lento","letra","libra","libro","lider","limon","lindo","linea","lista","listo","llave","local","logro","lotes","lucha","lucro","lugar","lunes","madre","magia","mando","manga","marca","marco","marea","matar","mayor","medio","mejor","menor","menos","mente","metal","metro","miedo","milla","mirar","misil","mismo","mitad","monto","moral","morir","motor","movil","mucho","mujer","multa","mundo","museo","mutuo","nacio","nadar","nadie","nariz","negar","nieve","nivel","noche","norma","norte","novia","novio","nueve","nuevo","nunca","obras","obvio","oeste","ojala","opera","optar","orden","oreja","oveja","padre","pagar","palma","panel","papel","pared","parte","pausa","peaje","pecho","pegar","pelar","penso","perra","perro","pesar","pesca","piano","pieza","pista","pizza","plano","plata","plato","playa","plazo","pobre","pocos","poder","poema","poeta","pollo","polvo","poner","preso","prima","prisa","punto","queja","queso","quien","racha","radar","radio","rango","rasgo","raton","razon","regir","regla","rehen","reina","reino","reloj","rezar","rifle","ritmo","rival","robar","roble","robot","rollo","ronda","rueda","ruido","ruina","rumor","rural","saber","sabio","sabor","salir","salon","salsa","salto","salud","santo","segun","sello","selva","serie","sexto","senal","senor","siete","siglo","silla","sirio","sitio","sobre","sodio","solar","sonar","soplo","suave","sucio","sudor","sueno","suite","super","susto","sutil","tacon","talla","tarde","tarea","tarta","techo","tener","tenis","texto","tigre","tocar","todos","tomar","tonto","torre","total","traer","traje","tramo","tribu","trigo","trono","tropa","truco","tumba","tumor","tunel","turno","unico","unido","union","usado","usual","vacas","vacio","vagar","vagon","valla","valle","valor","vamos","vapor","vasto","venir","verde","verso","viaje","vicio","video","viejo","virus","vista","vital","vocal","volar","votar","vuelo","yarda"],

        WORD_LIST = ["abajo","abeja","abril","abuso","acera","acero","acido","acoso","actas","actor","adios","aguja","ahora","album","amado","ambos","amigo","ancho","ancla","angel","animo","anual","apoyo","arabe","arbol","arena","armar","arroz","atras","audaz","autor","avion","aviso","ayuda","bahia","banco","banda","beber","bicho","bolso","bomba","borde","boton","bravo","brazo","breve","brisa","broma","bruja","bruto","bueno","cable","cabra","cajon","calle","calma","calor","campo","canal","canta","capaz","carga","cargo","carne","carro","carta","casar","casco","cavar","cazar","celda","censo","cerca","cerdo","cesar","cesta","chico","chino","ciclo","ciego","cielo","cinco","cinta","citar","civil","claro","clase","clima","cofre","color","comic","comun","corte","corto","cosas","costa","costo","crear","creer","crema","crudo","cruel","cuero","cueva","culpa","cuota","curar","curso","curva","danza","datos","danar","deber","debil","debut","decir","dejar","demas","desde","deseo","deuda","dieta","disco","doble","dolar","dolor","donar","donde","dosis","drama","droga","ducha","dudar","dueno","dulce","elite","ellos","email","enero","entre","error","esqui","estar","estos","etica","etico","exito","extra","facil","falda","falla","falso","favor","fecha","feliz","fibra","final","firma","firme","flota","fluir","fondo","forma","fosil","frase","fruta","fuego","fuera","furia","galon","ganar","gasto","genio","gente","gesto","girar","globo","golfo","golpe","gordo","gorra","grado","gramo","grano","grave","grifo","grito","grupo","guapo","guion","habla","hacer","hacia","haria","hasta","hecho","herir","heroe","hielo","honor","horno","hotel","hueso","huevo","humor","hurto","icono","ideal","igual","impar","indio","irani","islam","jabon","jalar","jaula","joven","joyas","judio","juego","junio","junta","jurar","justo","labio","labor","lapiz","largo","laser","latin","lavar","leche","legal","lejos","lente","lento","letra","libra","libro","lider","limon","lindo","linea","lista","listo","llave","local","logro","lotes","lucha","lucro","lugar","lunes","madre","magia","mando","manga","marca","marco","marea","matar","mayor","medio","mejor","menor","menos","mente","metal","metro","miedo","milla","mirar","misil","mismo","mitad","monto","moral","morir","motor","movil","mucho","mujer","multa","mundo","museo","mutuo","nacio","nadar","nadie","nariz","negar","nieve","nivel","noche","norma","norte","novia","novio","nueve","nuevo","nunca","obras","obvio","oeste","ojala","opera","optar","orden","oreja","oveja","padre","pagar","palma","panel","papel","pared","parte","pausa","peaje","pecho","pegar","pelar","penso","perra","perro","pesar","pesca","piano","pieza","pista","pizza","plano","plata","plato","playa","plazo","pobre","pocos","poder","poema","poeta","pollo","polvo","poner","preso","prima","prisa","punto","queja","queso","quien","racha","radar","radio","rango","rasgo","raton","razon","regir","regla","rehen","reina","reino","reloj","rezar","rifle","ritmo","rival","robar","roble","robot","rollo","ronda","rueda","ruido","ruina","rumor","rural","saber","sabio","sabor","salir","salon","salsa","salto","salud","santo","segun","sello","selva","serie","sexto","senal","senor","siete","siglo","silla","sirio","sitio","sobre","sodio","solar","sonar","soplo","suave","sucio","sudor","sueno","suite","super","susto","sutil","tacon","talla","tarde","tarea","tarta","techo","tener","tenis","texto","tigre","tocar","todos","tomar","tonto","torre","total","traer","traje","tramo","tribu","trigo","trono","tropa","truco","tumba","tumor","tunel","turno","unico","unido","union","usado","usual","vacas","vacio","vagar","vagon","valla","valle","valor","vamos","vapor","vasto","venir","verde","verso","viaje","vicio","video","viejo","virus","vista","vital","vocal","volar","votar","vuelo","yarda","abana","abane","abano","acena","acuna","acune","acuno","alina","aline","alino","amana","amane","amano","anina","anine","anino","apana","apane","apano","apina","apine","apino","apuna","apune","apuno","arana","arane","arano","aruna","arune","aruno","atana","atane","atano","anada","anade","anadi","anado","aneda","anede","anedi","anedo","aneja","aneje","anejo","anera","anero","anida","anide","anidi","anido","anila","anile","anilo","anils","anoja","anojo","anora","anore","anoro","anosa","anoso","anuda","anude","anudo","banan","banar","banas","banen","banes","banil","banon","banos","brana","brena","bruna","brune","bruni","bruno","canan","canar","canas","canea","canee","canen","caneo","canes","canon","canos","cenan","cenar","cenas","cenen","cenes","cenia","cenir","cenis","cenos","chuna","chuno","cinan","cinas","cinen","cines","conac","conea","conee","coneo","conon","conos","cunal","cunan","cunar","cunas","cunen","cunes","cunos","danan","danas","danen","danes","danos","denar","diano","dinan","dinar","dinas","dinen","dines","donas","donea","donee","doneo","duena","fanan","fanar","fanas","fanen","fanes","funar","ganan","ganas","ganen","ganes","gania","ganil","ganin","ganir","ganis","ganon","grena","gruna","grune","gruni","gruno","guena","guina","guine","guino","henia","henir","henis","hinan","hinas","hinen","hines","hinia","hinir","hinis","jinan","jinar","jinas","jinen","jines","junir","lanan","lanar","lanas","lanen","lanes","lenan","lenar","lenas","lenen","lenes","lenos","linas","luene","maena","maeno","manas","manea","manee","maneo","manio","manos","miana","miane","miano","minon","monas","monon","monos","munan","munas","munen","munes","munia","munir","munis","munon","munoz","ninas","ninea","ninee","nineo","ninez","ninos","nunez","nunoa","ocana","ocona","ogano","otona","otone","otono","onate","panal","panil","panol","panos","peana","penas","penol","penon","pinal","pinas","pinen","pinon","plana","plane","plani","prena","prene","preno","punal","punar","punir","punos","quina","quine","quino","ranas","ranos","renia","renir","renis","rinan","rinas","rinen","rines","rinon","ronal","ronan","ronar","ronas","ronen","rones","ronia","rueno","runan","runar","runas","runen","runes","runir","sanas","senar","senas","sonas","suena","suene","tanan","tanar","tanas","tanen","taner","tanes","tania","tenia","tenir","tinan","tinas","tinen","tines","tonil","uneno","urena","unada","unado","unais","unate","unazo","unera","unere","unero","unese","uneta","unian","unias","unira","unire","unosa","unoso","unudo","vinac","vinas","yanez","zunan","zunas","zunen","zunes","zunia","zunir","zunis","nambi","names","nampi","nandu","nanga","nango","napas","naque","natea","natee","nateo","necla","nenga","nengo","neque","ninga","nipas","nique","nisca","nizca","nocha","noclo","nonga","nongo","noqui","norbo","nonez","nonos","nuble","nublo","nurda","nurdo","nuzco","ababa","abaca","abaco","abada","abadi","abads","abaja","abaje","abala","abale","abalo","abaos","abapo","abasi","abata","abate","abati","abato","abece","abese","abete","abeto","abiar","abias","abina","abine","abino","abiso","abita","abite","abito","aboba","abobe","abobo","aboca","aboco","abofa","abofe","abofo","aboga","abogo","aboli","abona","abone","abono","aboya","aboye","aboyo","abozo","abran","abras","abren","abres","abria","abrio","abrir","abris","absit","abubo","abuce","abuje","abura","abure","aburo","abusa","abuse","abuza","abuzo","acaba","acabe","acabo","acala","acama","acame","acamo","acana","acara","acare","acari","acaro","acaso","acata","acate","acato","accha","acebo","acece","aceda","acede","acedo","acema","acepa","acepe","acepo","acere","aceta","aceto","aceza","acezo","achao","achin","achis","acial","aciar","acida","acije","acilo","acima","acimo","acion","acles","aclla","acnes","acoca","acoco","acoda","acode","acodo","acoge","acogi","acoja","acojo","acola","acole","acolo","acopa","acope","acopo","acora","acore","acoro","acosa","acose","acota","acote","acoto","acres","acroe","acroy","actea","actos","actua","actue","actuo","acuda","acude","acudi","acudo","acuea","acueo","acula","acule","aculo","acure","acusa","acuse","acuso","acuta","acuti","acuto","acuyo","adala","adama","adame","adamo","adans","adaza","adeje","adela","adema","ademe","ademo","adian","adiar","adias","adien","adies","adiva","adive","admon","adoba","adobe","adobo","adora","adore","adoro","adosa","adose","adoso","adral","adran","adrar","adras","adren","adres","aduar","aduce","adufe","aduja","aduje","adujo","adula","adule","adulo","aduna","adune","aduno","adura","adure","aduri","aduro","adven","aedos","aerea","aereo","aetas","afaca","afama","afame","afamo","afana","afane","afano","afans","afata","afate","afato","afean","afear","afeas","afeen","afees","afiar","afija","afijo","afila","afile","afilo","afina","afine","afino","afins","aflui","afoca","afoco","afofa","afofe","afofo","afoga","afogo","afona","afono","afora","afore","aforo","afosa","afose","afoso","aftas","afufa","afufe","afufo","afuma","afume","afumo","agace","agami","agana","agane","agano","agape","agata","agave","agils","agita","agite","agito","agnus","agola","agole","agolo","agora","agore","agoro","agota","agote","agoto","agras","agraz","agria","agrie","agrio","agror","aguai","aguan","aguao","aguar","aguas","aguay","aguce","aguda","agudo","aguen","agues","aguin","aguio","aguti","aguza","aguzo","ahaja","ahaje","ahajo","ahija","ahije","ahijo","ahila","ahile","ahilo","ahina","ahita","ahite","ahito","ahoga","ahogo","ahome","ahoya","ahoye","ahoyo","ahuac","ahuma","ahume","ahumo","ahusa","ahuse","ahuso","aillo","aillu","ainas","airan","airar","airas","airea","airee","airen","aireo","aires","airon","aisla","aisle","aislo","aitor","ajaba","ajada","ajado","ajais","ajaja","ajara","ajare","ajars","ajase","ajean","ajear","ajeas","ajebe","ajeen","ajees","ajeis","ajena","ajeno","ajeos","ajera","ajero","ajete","ajice","ajipa","ajiza","ajizo","ajobo","ajora","ajore","ajoro","ajota","ajote","ajoto","ajuar","ajuma","ajume","ajumo","ajuna","ajuno","alaba","alabe","alabo","alaco","alada","alado","alafa","alaga","alago","alaju","alala","alalo","alama","alamo","alana","alano","alaui","alava","alazo","alban","albar","albas","albea","albee","albeo","albin","albor","albos","albur","alcas","alcea","alcen","alces","alcor","alcoy","aldea","alean","alear","aleas","alece","aleda","aleen","alees","alega","alego","aleja","aleje","alejo","alela","alele","aleli","alelo","alema","alero","aleta","aleto","aleve","aleya","alezo","alfan","alfar","alfas","alfaz","alfen","alfes","alfil","alfiz","alfoz","algar","algas","algol","algun","alhoz","alhue","alian","aliar","alias","alica","alico","alien","alier","alies","alifa","aliga","aligo","alija","alije","alijo","alimo","alioj","alisa","alise","aliso","aljez","aljor","allen","almas","almea","almez","almos","almud","aloba","alobe","alobo","aloca","aloco","aloes","aloja","aloje","alojo","alola","alole","alolo","aloma","alome","alomo","alona","alons","alora","alosa","alota","alote","aloto","aloya","alpes","altar","altas","altea","altee","alteo","altor","altos","aluce","aluda","alude","aludi","aludo","aluds","alula","aluna","alune","aluno","aluza","aluzo","alveo","alzan","alzar","alzas","amaba","amada","amaga","amago","amais","amala","amale","amalo","amame","amaos","amara","amare","amaro","amaru","amasa","amase","amaso","amata","amate","amato","ambar","ambas","ambla","amble","amblo","ambon","ameba","ameca","ameis","amela","amele","amelo","ameme","amena","ameno","amens","ameos","amera","amere","amero","amias","amiba","amibo","amida","amiga","amina","amine","amino","amiri","amish","amito","amole","amolo","amomo","amona","amone","amono","amors","amovi","ampay","ampla","amplo","ampon","ampra","ampre","ampro","amuga","amugo","amula","amule","amulo","amura","amure","amuro","amuso","anabi","anaco","anafe","anals","anamu","anana","anata","anaya","ancas","ancha","anche","ancle","anclo","ancon","ancua","ancud","andad","andan","andar","andas","andel","anden","andes","andon","anean","anear","aneas","aneen","anees","anega","anego","aneto","anexa","anexe","anexo","angla","anglo","angol","angor","angra","anima","anime","anion","anisa","anise","aniso","aniss","anita","anito","anjeo","anodo","anola","anole","anolo","anona","anons","anori","anota","anote","anoto","ansar","ansas","ansia","ansie","ansio","antas","antes","antia","anton","antro","anula","anule","anulo","anuos","anura","anuro","aocar","aojan","aojar","aojas","aojen","aojes","aojos","aonia","aonio","aorta","aovan","aovar","aovas","aoven","aoves","apaga","apago","apale","apara","apare","aparo","apata","apaya","apaza","apean","apear","apeas","apeen","apees","apega","apego","apela","apele","apelo","apena","apene","apeno","apeos","apera","apere","apero","apese","apiay","apice","apila","apile","apilo","apios","apipa","apipe","apipo","apiri","apita","apite","apito","aplao","apnea","apoca","apoce","apoco","apoda","apode","apodo","apola","apole","apolo","apone","aporo","aposa","apose","aposo","apoya","apoye","apoza","apozo","apres","aproa","aproe","aproo","aprox","aptar","aptos","apulo","apura","apure","apuro","apuse","apuso","aquea","aquel","aqueo","aquia","araba","arabi","arabo","arada","arado","arais","arama","arani","arapa","arara","arare","arars","arasa","arase","araza","arbor","arcan","arcar","arcas","arcea","arcen","arces","archa","arche","archi","arcon","arcos","ardan","ardas","ardea","arden","arder","ardes","ardia","ardid","ardil","ardio","ardor","ardoz","ardua","arduo","areas","areca","areco","areis","arela","arele","arelo","arene","areno","arepa","areta","arete","arfan","arfar","arfas","arfen","arfes","arfil","argan","argel","argen","argon","argos","argot","argue","arias","arica","arico","arida","arido","aries","arija","arije","arijo","arilo","arios","arlan","arlar","arlas","arlen","arles","armad","arman","armas","armen","armes","armon","armos","arnas","arnau","arnes","aroca","aroma","arome","aromo","arona","arosa","arpan","arpar","arpas","arpen","arpeo","arpes","arpia","arpon","arque","arras","arraz","arrea","arree","arreo","arres","arria","arrie","arrio","arrua","arrue","arrui","arruo","artal","artes","artos","aruba","arula","arupo","arusi","arzon","asaba","asaca","asaco","asada","asado","asais","asana","asara","asare","asaro","asase","asazs","ascar","ascas","ascia","ascio","ascos","ascua","asean","asear","aseas","aseda","asede","asedo","aseen","asees","aseis","asela","asele","aselo","aseos","asesa","asese","asesi","aseso","asgan","asgas","asian","asias","asica","asico","asido","asila","asile","asilo","asina","asira","asire","asmar","asmas","asnal","asnas","asnos","asola","asole","asolo","asoma","asome","asomo","asone","asono","aspan","aspar","aspas","aspea","aspee","aspen","aspeo","aspes","aspic","aspid","aspro","astas","aster","astil","astro","astur","asuma","asume","asumi","asumo","asura","asure","asuro","asuso","ataba","atabe","ataca","ataco","atada","atado","atais","ataja","ataje","atajo","atala","atale","atalo","atame","ataos","atapa","atape","atapo","atara","atare","atase","atate","ataud","atear","atece","ateis","ateje","atela","atele","atelo","ateme","ateos","ateri","atesa","atese","ateso","ateta","atete","ateto","ateza","atezo","atiba","atibe","atibo","atica","atice","atico","atijo","atila","atina","atine","atino","atipa","atipe","atipo","atiza","atizo","atlas","atoan","atoar","atoas","atoba","atobe","atobo","atoen","atoes","atoja","atoje","atojo","atole","atols","atomo","atona","atono","atora","atore","atoro","atrae","atril","atrio","atroz","atufa","atufe","atufo","atuns","atura","ature","aturo","atusa","atuse","atuso","atuve","atuvo","aucas","audio","auges","augur","aulas","aulla","aulle","aullo","aunan","aunar","aunas","aunen","aunes","aupan","aupar","aupas","aupen","aupes","auras","aurea","aureo","aures","auron","ausol","autan","autos","avada","avade","avado","avaha","avahe","avaho","avala","avale","avalo","avara","avaro","avati","avece","avena","avene","aveni","aveno","aveza","avezo","avian","aviar","avias","avica","avida","avido","avien","avies","avila","avine","avino","avios","avisa","avise","aviva","avive","avivo","avoca","avoco","avugo","axial","axila","axons","axtla","ayaco","ayala","ayate","ayavi","ayean","ayear","ayeas","ayeen","ayees","ayers","ayora","ayote","aysen","ayude","ayudo","ayuga","ayuna","ayune","ayuno","ayuso","azada","azaga","azago","azala","azara","azare","azaro","azcon","azeri","azima","azimo","azoan","azoar","azoas","azoca","azoco","azoen","azoes","azoga","azogo","azole","azolo","azora","azore","azoro","azors","azota","azote","azoto","azoyu","aztor","azuas","azuce","azuda","azuds","azula","azule","azulo","azuls","azurs","azuza","azuzo","babas","babea","babee","babel","babeo","babia","babis","bable","babor","bacan","bacas","bacca","bache","bacia","bacin","bacon","bacum","badal","badan","badea","badel","baden","badil","baena","bafle","bagan","bagar","bagas","bagre","bagua","bague","bahai","baida","baifa","baifo","baila","baile","bailo","bajan","bajar","bajas","bajea","bajee","bajel","bajen","bajeo","bajes","bajez","bajia","bajin","bajio","bajon","bajos","balaj","balan","balar","balas","balay","balda","balde","baldo","balea","balee","balen","baleo","bales","balin","balon","balsa","balso","balta","balto","bamba","bambi","bambu","banal","banca","bance","bando","banir","banjo","banoy","bantu","banyo","banzo","baque","barba","barbe","barbo","barca","barco","barda","barde","bardo","baria","baril","bario","barne","baron","baros","barra","barre","barri","barro","barza","basal","basan","basar","basas","basca","basen","bases","basis","basna","basta","baste","basto","batan","batas","batea","batee","batel","baten","bateo","bates","batey","batia","batik","batin","batio","batir","batis","baton","batos","batua","baudo","baula","bauls","baura","baure","bausa","bauza","bayal","bayas","bayon","bayos","bayua","bazan","bazar","bazas","bazos","beata","beato","beban","bebas","beben","bebes","bebia","bebio","bebop","becan","becar","becas","bedel","befan","befar","befas","befen","befes","befos","befre","begum","beige","bejin","belde","beldo","belen","belez","belfa","belfo","belga","belio","bella","bello","belua","bemba","bembe","bembo","bemol","benga","benin","beoda","beodo","beori","beque","berbi","berma","beron","berra","berre","berro","berta","berza","besan","besar","besas","besen","beses","besos","betas","betel","betis","betun","beuda","beudo","bezar","bezon","biavo","biaza","bical","bicha","biche","bicis","bicos","bides","bidet","bidon","biela","biens","biess","bifaz","bigas","bijao","bijas","bijol","bilao","bilis","billa","bilma","bilme","bilmo","bimba","binan","binar","binas","binde","binea","binee","binen","bineo","bines","bingo","binza","bioma","biota","biper","birla","birle","birli","birlo","birra","bisan","bisar","bisas","bisau","bisel","bisen","bises","bison","biste","bitan","bitar","bitas","biten","biter","bites","bitor","biyin","bizca","bizco","bizma","bizme","bizmo","bizna","blava","blavo","bleda","bledo","bloca","bloco","blogs","blues","blusa","boato","bobal","bobea","bobee","bobeo","bobos","bocal","bocas","bocea","bocee","bocel","boceo","bocha","boche","bocho","bocin","bocio","bocon","bocoy","bodas","bodes","bodon","boedo","bofan","bofar","bofas","bofen","bofes","bofia","bofos","bogan","bogar","bogas","bogey","bogie","bogue","bohio","boils","boina","boira","boite","bojan","bojar","bojas","bojea","bojee","bojen","bojeo","bojes","bolar","bolas","boldo","bolea","bolee","boleo","bolin","bolla","bolle","bollo","bolon","bolos","bolsa","bombe","bombo","bonal","bonda","bonga","bongo","bonos","bonus","bonza","bonzo","boque","boqui","borax","borda","bordo","boreo","boria","borja","borla","borna","borne","borni","boros","borra","borre","borro","borto","bosar","bosco","boson","bossa","bosta","botan","botar","botas","botea","botee","boten","boteo","botes","botin","botor","botos","botox","boxea","boxee","boxeo","boxer","boyal","boyan","boyar","boyas","boyen","boyes","bozal","bozas","bozon","bozos","braca","braco","braga","brama","brame","bramo","brasa","brava","braza","break","brean","brear","breas","breca","brece","breco","breen","brees","brega","brego","brens","brent","brete","breva","breza","brezo","brial","briba","brice","brida","briol","brion","brios","brise","briso","briza","brizo","broca","broce","brome","bromo","brota","brote","broto","brown","broza","brozo","bruce","brugo","bruje","bruji","brujo","bruma","brume","brumo","bruta","bruza","bruzo","buaro","bubas","bubon","bucal","bucea","bucee","bucen","buceo","buces","bucha","buche","bucio","bucle","bucos","budas","budin","buega","buena","buera","bueys","bufan","bufar","bufas","bufen","bufeo","bufes","bufet","bufia","bufon","bufos","bugle","buhio","buhos","buida","buido","bujeo","bujes","bujia","bular","bulas","bulbo","bulda","bulin","bulla","bulle","bulli","bullo","bulon","bulos","bulto","bunio","buque","burda","burdo","burel","bureo","burga","burgo","buril","burio","buris","burka","burla","burle","burlo","buroz","burra","burro","busca","busco","buses","busto","butan","buten","butia","buyos","buzan","buzar","buzas","buzon","buzos","bytes","cabal","cabas","caben","caber","cabes","cabia","cabio","cabos","cabre","cabro","cabus","cacan","cacao","cacas","cacea","cacee","cacen","caceo","caces","cacha","cache","cachi","cacho","cachu","cacle","cacos","cacra","cacto","cacuy","cadas","cadis","cadiz","caeis","caena","caera","caere","cafes","cafiz","cafre","cagan","cagar","cagas","cagon","cagua","cague","cagui","cahiz","caian","caias","caibe","caico","caida","caido","caiga","caigo","caima","caimo","caire","cairo","caite","cajas","cajay","cajea","cajee","cajel","cajeo","cajin","calan","calao","calar","calas","calca","calce","calco","calda","caldo","calen","caler","cales","calia","calio","caliz","calla","callo","calme","calmo","calon","calos","calpe","calta","calva","calve","calvo","calza","calzo","camal","camao","camas","camba","cambe","cambo","cameo","camio","camon","campa","campe","canda","cande","candi","cando","caney","canez","canga","cango","cania","canil","canis","canje","canoa","cansa","canse","canso","cante","canto","cantu","caoba","caobo","capan","capar","capas","capea","capee","capel","capen","capeo","capes","capia","capin","capio","capon","capos","cappa","capri","capta","capte","capto","capuz","caqui","carao","caras","carau","caray","caraz","carba","carbo","carca","carda","carde","cardo","carea","caree","carel","careo","carey","caria","carie","cario","caris","cariz","carla","carlo","carme","caron","caros","carpa","carpe","carpi","carpo","carra","carst","carvi","casal","casan","casas","casba","casca","casea","casen","caseo","caser","cases","casia","casio","casis","casma","cason","casos","caspa","casta","casto","catac","catan","catar","catas","catch","catea","catee","caten","cateo","cates","catey","catin","caton","catos","catre","catru","cauba","cauca","cauce","cauda","cauje","caula","cauno","cauri","cauro","causa","cause","causo","cauta","cauto","cauza","cavan","cavas","cavea","caven","caves","cavia","cavio","cavon","cavos","cayan","cayma","cayna","cayos","cazan","cazas","cazon","cazos","cazuz","ccapi","ceaja","ceajo","ceban","cebar","cebas","ceben","cebes","cebil","cebon","cebos","cebra","cebro","cebti","cecal","cecas","cecea","cecee","ceceo","cedan","cedas","ceden","ceder","cedes","cedia","cedio","cedro","cefea","cefee","cefeo","cefos","cegar","cegas","cegua","cegue","ceiba","ceibo","cejan","cejar","cejas","cejen","cejes","celan","celar","celas","celen","celes","celfo","celia","cella","cello","celos","celta","cembo","cenal","cenca","cenco","cenit","censa","cense","cents","cepas","cepos","cepti","cequi","ceral","ceras","cerco","cerda","cerea","cereo","ceres","cerio","cerna","cerne","cerni","cerno","ceron","ceros","cerpa","cerra","cerre","cerri","cerro","cesan","cesas","cesen","ceses","cesio","cesto","cetil","cetis","cetme","cetra","cetre","cetro","ceuta","ceuti","chaca","chace","chaco","chafa","chafe","chafo","chaja","chala","chale","chalo","chals","chama","chame","chami","chamo","chana","chane","chano","chapa","chape","chapo","charo","chata","chato","chats","chaul","chaux","chauz","chava","chave","chavo","chaya","chaye","chayo","chaza","chazo","checa","checo","chefs","cheje","chela","chele","cheli","chelo","chepa","chepe","chepo","chera","chero","chesa","cheso","cheta","chete","cheto","cheva","cheve","chiar","chias","chica","chics","chicu","chida","chido","chien","chifa","chila","chile","chili","chima","chime","chimi","chimo","chimu","china","chine","chinu","chipa","chipe","chips","chira","chire","chiri","chisa","chist","chita","chite","chito","chiva","chive","chivo","chiza","choba","choca","choco","choel","chofe","choix","chola","cholo","chona","choni","chono","chopa","chope","chopo","chops","chora","chore","chori","choro","chota","chote","choto","chova","choya","choye","choyo","choza","chozo","chuca","chuce","chuco","chufa","chufe","chufo","chula","chule","chulo","chupa","chupe","chupi","chupo","chura","churo","churu","chuta","chute","chuto","chuts","chuva","chuya","chuyo","chuza","chuzo","ciaba","ciado","ciais","ciani","ciara","ciare","ciase","ciato","cibal","cicca","cicla","cicle","cidra","cidro","cieca","ciega","cieis","ciemo","cieno","ciens","cieza","cifra","cifre","cifro","cigua","cilio","cilla","cimar","cimas","cimba","cimia","cimpa","cinca","cinia","cinte","cinto","cipos","circa","circe","circo","cirio","cirro","cisca","cisco","cisma","cisme","cismo","cisne","cista","citan","citas","citen","cites","citra","claco","clacs","clama","clame","clamo","clans","clapa","clara","clava","clave","clavo","clema","clero","clica","clics","clips","clisa","clise","cliso","cliza","cloco","clona","clone","clono","clons","clora","clore","cloro","clota","clote","clown","clube","clubs","coach","coana","coasa","coata","coati","cobas","cobea","cobez","cobil","cobla","cobos","cobra","cobre","cobro","cocal","cocan","cocar","cocas","cocea","cocee","coceo","cocer","coces","cocha","coche","cochi","cocho","cocia","cocio","cocoa","cocol","cocos","cocui","cocuy","codal","codas","codea","codee","codeo","codex","codez","codin","codon","codos","coeva","coevo","cofan","cofas","cofia","cofin","cogen","coger","coges","cogia","cogio","cogon","cogua","coima","coime","coine","coipa","coipo","coita","coito","cojal","cojan","cojas","cojea","cojee","cojeo","cojin","cojon","cojos","colan","colar","colas","colca","colea","colee","colen","coleo","coles","coley","colgo","colin","colla","colma","colme","colmo","colon","colpa","colpe","colta","colza","comal","coman","comas","comba","combe","combi","combo","comen","comer","comes","comia","comio","comis","compa","compi","comta","comto","conca","conde","conga","congo","conil","conta","conte","conto","coona","coord","copal","copan","copar","copas","copea","copec","copee","copen","copeo","coper","copes","copey","copia","copie","copin","copio","copla","copon","copos","copra","copta","copto","coque","coqui","coral","coran","corar","coras","corbe","corca","corco","corda","corea","coree","coren","coreo","cores","coria","corio","coris","corla","corle","corlo","corma","corno","coros","corpa","corps","corra","corre","corri","corro","corsa","corse","corso","corta","corua","corva","corve","corvo","corza","corzo","cosan","cosca","cosco","cosen","coser","coses","cosia","cosio","cosme","cosos","cospe","coste","cotan","cotar","cotas","coten","cotes","cotin","coton","cotos","cotua","covan","covar","covas","coven","coves","covid","coxal","coxas","coxis","coyan","coyol","crack","cracs","crasa","crash","craso","cravo","craza","crean","creas","crece","creci","credo","creen","crees","creia","creme","cremo","crepa","crepe","cresa","creso","creta","creyo","crian","criar","crias","criba","cribe","cribo","crica","crics","crida","crien","cries","crina","crine","crino","crins","crios","croan","croar","croas","croco","croen","croes","crols","croma","crome","cromo","crono","crons","cross","croto","croza","cruce","cruda","cruja","cruje","cruji","crujo","cruor","crups","cruza","cruzo","cruzs","cuaba","cuaco","cuada","cuado","cuaja","cuaje","cuajo","cuals","cuape","cuark","cuart","cuasi","cuata","cuate","cuati","cubas","cubil","cubos","cubra","cubre","cubri","cubro","cucan","cucar","cucas","cucha","cuche","cuchi","cucho","cucos","cucuy","cueca","cuece","cueco","cuela","cuele","cuelo","cuera","cuete","cueto","cuevo","cueza","cuezo","cugat","cuiba","cuica","cuico","cuida","cuide","cuido","cuija","cuilo","cuina","cuino","cuiss","cuita","cuiva","cujas","cujin","cujon","cular","culas","culea","culee","culen","culeo","culin","culio","culle","culon","culos","culpe","culpo","culta","culto","cumba","cumbe","cumbo","cumel","cumpa","cunco","cunda","cunde","cundi","cundo","cunea","cunee","cuneo","cupes","cuple","cupon","cupos","cuque","cuqui","cural","curan","curas","curay","curca","curco","curda","curdo","curen","cures","curia","curie","curil","curio","curra","curre","curri","curro","curry","cursa","curse","cursi","curta","curte","curti","curto","curul","curve","curvo","cusan","cusas","cusay","cusca","cusco","cuscu","cusen","cuses","cusia","cusio","cusir","cusis","cusma","cuspa","cusul","cuter","cutio","cutir","cutis","cutos","cutra","cutre","cuyas","cuyeo","cuyos","cuzco","cuzma","cuzul","daban","dabas","dable","dacha","dacia","dacio","dadas","dadme","dador","dados","dagas","dagua","dahir","daifa","daito","dajao","dalas","dales","dalgo","dalia","dalla","dalle","dallo","dalos","damas","damil","damos","danae","dance","dandi","dando","dango","danna","danta","dante","danto","danzo","daqui","daran","daras","dardo","dares","darga","daria","dario","darla","darle","darlo","darme","daros","darse","darte","datan","datar","datas","datea","datee","datem","daten","dateo","dates","datil","dauco","dauda","david","deban","debas","debda","debdo","deben","debes","debia","debio","debla","decae","decai","decia","decio","decis","decor","dedal","dedeo","dedil","dedos","deesa","dejan","dejas","dejen","dejes","dejos","delas","delco","deles","delga","delia","delio","della","dello","delos","delta","demos","dende","denia","denla","denle","denlo","denme","denos","densa","dense","denso","dente","dento","depon","depre","depto","deque","derbi","derek","desca","desda","desdi","desea","desee","deses","desga","desoi","desos","despi","desta","deste","desto","desus","detal","deten","deudo","deven","dezma","dezme","dezmo","diada","diado","dials","diana","dicaz","dicen","dices","dicha","dicho","dicta","dicte","dicto","diego","diera","diere","diese","diesi","diete","dieto","diezs","digan","digas","digna","digne","digno","dijes","dilas","diles","dilos","dilui","diman","dimas","dimen","dimes","dimia","dimio","dimir","dimis","dimos","dinde","dinos","diodo","diosa","dioso","diple","dique","diran","diras","diria","disca","dison","dista","diste","disto","ditas","diuca","diuxi","divan","divas","divos","dobla","doblo","docas","doces","doche","docil","docta","docto","dogal","dogas","dogma","dogon","dogos","dogre","doima","dolas","doler","doles","dolia","dolio","dolos","doman","domar","domas","dombo","domen","domes","donan","donen","dones","donut","dopan","dopar","dopas","dopen","dopes","doral","doran","dorar","doras","doren","dores","doria","dorio","doris","dormi","dorna","dorso","dorta","dosel","doses","dotal","dotan","dotar","dotas","doten","dotes","dotor","dovio","draba","draga","drago","drena","drene","dreno","drils","drino","driza","drogo","drons","drope","drupa","drusa","druso","dseda","dseta","duals","dubas","dubda","dubio","ducal","ducas","duche","ducho","ducto","dudan","dudas","duden","dudes","duela","duele","duelo","duero","dueto","dujos","dular","dulas","dulia","duman","dumas","dumen","dumes","dumia","dumio","dumir","dumis","dunas","dunda","dundo","dupdo","dupla","duplo","duque","duran","durar","duras","duren","dures","duros","eagle","ebano","ebria","ebrio","echan","echar","echas","echen","eches","echos","ecija","ecuos","edads","edema","edens","edgar","edila","edils","edipo","edita","edite","edito","edran","edrar","edras","edren","edres","eduar","educa","educe","educo","eduje","edujo","edwar","efebo","efeta","efeto","eflui","efods","eforo","egena","egeno","egida","eguar","eibar","ejido","ejion","ejote","elami","elata","elato","elche","elder","elega","elegi","elego","elemi","elena","elepe","eleta","eleto","eleva","eleve","elevo","elfos","elias","elida","elide","elidi","elido","elige","elija","elije","elijo","elisa","elkin","ellas","elles","elota","elote","eluda","elude","eludi","eludo","eluia","eluir","eluis","eluya","eluye","eluyo","emana","emane","emano","emaus","embai","emirs","emita","emite","emiti","emito","empos","empra","empre","empro","emula","emule","emulo","enana","enano","encia","eneal","eneas","eneja","eneje","enejo","enema","enoja","enoje","enojo","enria","enrie","enrio","ensay","enteo","entes","entlo","entra","entro","enula","enves","envia","envie","envio","enzas","eolia","eolio","epale","epata","epate","epato","epica","epico","epoca","epoda","epodo","epota","epoto","epoxi","equis","eraba","erado","erais","eraje","erala","erals","erara","erare","erase","erazo","erbio","ercer","erebo","ereis","ergio","ergui","erial","erias","erice","erige","erigi","erija","erijo","erina","eriza","erizo","ermar","eroga","erogo","erraj","erran","errar","erras","erren","erres","eruta","erute","eruto","escas","escay","escoa","esmog","esmui","esnob","espay","espia","espie","espin","espio","estad","estan","estas","estay","esten","ester","estes","estil","estio","estol","estor","estoy","estro","esula","etano","etapa","eters","ethos","etilo","etimo","etnea","etneo","etnia","etola","etolo","etusa","eubea","eubeo","euros","evada","evade","evadi","evado","evita","evite","evito","evoca","evoco","evohe","excmo","exida","exige","exigi","exija","exijo","exila","exile","exilo","exima","exime","eximi","eximo","exodo","exora","exore","exoro","expia","expie","expio","expon","exuda","exude","exudo","fabas","fabio","fabla","fabro","facas","facer","facha","fache","facho","facon","facto","fados","faena","faene","faeno","fagos","fagot","fagua","faina","faino","fajan","fajar","fajas","fajea","fajee","fajen","fajeo","fajes","fajin","fajol","fajon","falan","falaz","falca","falce","falco","falle","fallo","falos","falsa","false","falta","falte","falto","falua","famas","fanal","fango","fanos","fante","faqui","farad","faras","farda","farde","fardo","faria","fario","faroe","farol","faron","faros","farpa","farra","farro","farsa","farsi","farte","fases","fasol","fasta","fasto","fatal","fator","fatos","fatua","fatum","fatuo","fauna","fauno","faxea","faxee","faxeo","febea","febeo","feble","fecal","feche","fecho","feeza","feliu","felix","felon","felpa","felpe","felpo","felus","feman","femar","femas","femen","femes","femur","fenal","fenda","fendi","fenix","fenol","feral","feraz","feria","ferie","ferio","ferir","fermi","feroz","ferra","ferre","ferri","ferro","ferry","festa","fetal","feten","fetor","fetos","fetua","feuca","feuco","feuda","feude","feudo","feura","fiaba","fiaca","fiada","fiado","fiais","fiana","fiara","fiare","fiase","ficar","ficen","fices","ficha","fiche","ficho","ficta","ficto","ficus","fidel","fideo","fidos","fieis","fiels","fiemo","fiera","fiero","fifan","fifar","fifas","fifen","fifes","fifis","figle","figon","figos","fijan","fijar","fijas","fijen","fijes","fijon","fijos","filan","filar","filas","filen","files","filet","filfa","filia","filie","filin","filio","filis","fillo","filma","filme","filmo","films","filon","filos","finan","finar","finas","finca","finco","finen","fines","finge","fingi","finia","finio","finir","finis","finja","finjo","finos","finta","finte","finto","fique","firmo","fisan","fisco","fisga","fisgo","fisio","fista","fisto","fitos","fizan","fizar","fizas","fizon","flaca","flaco","flama","flans","flaon","flash","flato","flava","flavo","fleco","fleja","fleje","flejo","flema","fleme","fleta","flete","fleto","flexo","flipa","flipe","flipo","floja","flojo","flora","flore","floro","flors","flote","floto","fluia","fluis","flujo","fluor","fluxs","fluya","fluye","fluyo","fobia","focal","focas","focha","focia","focio","focos","fofos","fogon","foisa","foiso","fojas","folga","folgo","folia","folie","folio","folla","folle","follo","foluz","fomes","fonda","fonil","fonio","fonje","fonos","foque","foral","foras","forca","force","forja","forje","forjo","forme","formo","forno","foros","forra","forre","forro","forte","forum","forzo","fosal","fosan","fosar","fosas","fosca","fosco","fosen","foses","fosor","fosos","foton","fotos","fovea","fracs","frada","frade","frado","fraga","frece","fredo","frego","freia","freir","freis","frena","frene","freno","freon","freos","fresa","frese","freso","freta","frete","freto","freys","freza","frezo","frian","frias","frica","frico","frien","fries","frigo","friki","frior","frios","frisa","frise","friso","frita","frite","frito","froga","frogo","frota","frote","froto","fruia","fruir","fruis","fruna","frute","fruto","fruya","fruye","fruyo","fucar","fuchi","fucia","fucos","fudre","fuere","fuero","fuers","fuesa","fuese","fuete","fufan","fufar","fufas","fufen","fufes","fugan","fugar","fugas","fugaz","fugir","fugue","fuina","fular","fulge","fulgi","fulja","fuljo","fulla","fuman","fumar","fumas","fumen","fumes","fumon","fumos","funca","funco","funda","funde","fundi","fundo","funes","funge","fungi","funja","funjo","funza","furor","furos","furto","fusas","fusca","fusco","fusil","fusor","fusta","fuste","fusto","futil","futon","futre","gaban","gabon","gacel","gacha","gache","gachi","gacho","gafan","gafar","gafas","gafea","gafee","gafen","gafeo","gafes","gafos","gagos","gaira","gaita","gajes","gajos","galan","galas","galce","galea","galeo","gales","galga","galgo","galio","galla","galle","gallo","galop","galos","galua","gamas","gamba","gamma","gamon","gamos","ganga","gansa","ganso","ganta","gante","garay","garba","garbe","garbo","garfa","garia","gario","garis","garla","garle","garlo","garma","garpa","garpe","garpo","garra","garre","garri","garro","garua","garue","garuo","garza","garzo","gasas","gasea","gasee","gaseo","gases","gason","gasta","gaste","gatas","gatea","gatee","gateo","gatos","gauss","gavia","gayan","gayar","gayas","gayen","gayes","gazas","gazna","gazne","gazno","gelan","gelas","gelen","geles","gelfe","gemas","gemia","gemir","gemis","genia","genil","genol","genoy","geoda","geogr","gerbo","gesta","geste","geton","ghana","giban","gibao","gibar","gibas","giben","gibes","gibon","gigas","gijon","giles","giley","gilis","gilva","gilvo","giman","gimas","gimen","gimes","gimio","ginea","giran","giras","giren","gires","giron","giros","giste","giton","glase","glayo","gleba","glera","glial","glide","glifo","glosa","glose","gloso","gluma","gluon","gmail","gneis","gnomo","goben","gobio","gocen","goces","gocha","gocho","godeo","godos","gofio","gofra","gofre","gofro","golas","golea","golee","goleo","goles","golfa","gollo","gomal","gomar","gomas","gomel","gomer","gomez","gomia","gonce","gongo","gongs","gorda","gorga","gorja","gorma","gorme","gormo","gorro","gotas","gotea","gotee","goteo","goton","goyas","goyos","gozan","gozar","gozas","gozne","gozon","gozos","graaf","graba","grabe","grabo","grada","grade","grafo","grais","graja","grajo","grama","grame","grana","grand","grane","grans","grant","graos","grapa","grape","grapo","grasa","graso","grata","grate","grato","graty","grava","gravo","greba","greca","greco","greda","green","grelo","greno","greys","grial","grida","grifa","grife","grija","grill","grima","gripa","gripe","gripo","grisa","griss","grisu","grita","grite","groan","groar","groas","groen","groes","grogs","grogu","grojo","gromo","grosa","groso","gruas","gruia","gruir","gruis","gruja","gruje","gruji","grujo","grumo","grupa","grupi","gruta","gruya","gruye","gruyo","guaba","guabo","guaca","guaco","guado","guaja","guaje","guala","guali","guama","guame","guami","guamo","guane","guano","guapa","guape","guapi","guara","guare","guari","guaro","guasa","guaso","guata","guate","guato","guaya","guaye","guayo","guays","guazo","gubia","guera","guero","gueto","gueys","guian","guiar","guias","guida","guido","guien","guies","guifa","guija","guijo","guila","guilo","guins","guipa","guipe","guipo","guira","guire","guiri","guiro","guisa","guise","guiso","guita","guite","guito","guiye","gulag","gular","gulas","gulay","gules","gumia","guras","gurda","gurdo","guros","gusta","guste","gusto","guzga","guzgo","guzla","habar","habas","haber","habia","habil","habiz","hable","hablo","habon","habra","habre","habus","hacan","hacas","haced","hacen","haces","hacha","hache","hacho","hadar","hadas","hadiz","hados","hafiz","hagan","hagas","haiga","haiku","haiti","halal","halan","halar","halas","halda","halen","hales","halla","halle","hallo","halls","halon","halos","hamez","hampa","hampo","hanga","hanzo","hapax","haran","haras","harba","harbe","harbo","harca","harda","harem","haren","harma","harol","haron","harpa","harre","harta","harte","harto","hatea","hatee","hateo","hatos","haute","havar","havos","hayal","hayan","hayas","hayos","hazla","hazle","hazlo","hazme","hazte","heard","heavy","heben","hebra","hecha","heder","hedes","hedia","hedio","hedor","helar","helas","helea","helee","heleo","helio","helor","hemos","henal","henao","henar","hendi","henil","henna","henos","henry","heras","herbe","herbo","heres","heria","heril","heris","herma","herpe","herpo","herre","herro","hertz","hervi","hespa","hespe","hespi","hespo","hetea","heteo","hevea","hevia","hiato","hicsa","hicso","hidra","hieda","hiede","hiedo","hiela","hiele","hiels","hiena","hiera","hiere","hiero","higal","higas","higos","higui","hijas","hijea","hijee","hijeo","hijoa","hijos","hijua","hilan","hilar","hilas","hilen","hiles","hilio","hilos","himen","himno","himpa","himpe","himpo","hinca","hinco","hindi","hindu","hipan","hipar","hipas","hipen","hiper","hipes","hipos","hippy","hiram","hirco","hirio","hirma","hirme","hirmo","hisca","hispa","hispe","hispi","hispo","hitan","hitar","hitas","hiten","hites","hiton","hitos","hiyab","hobby","hobos","hocen","hoces","hogar","hojas","hojea","hojee","hojeo","holan","holco","holea","holee","holeo","holgo","holle","hollo","homes","homun","honda","hondo","honey","hongo","honra","honre","honro","hopan","hopar","hopas","hopea","hopee","hopen","hopeo","hopes","hoque","horas","horca","horco","horda","horma","horna","horne","horra","horre","horro","horts","hosca","hosco","hospa","hoste","hotos","house","hoves","hoyal","hoyan","hoyar","hoyas","hoyen","hoyes","hoyos","hozan","hozar","hozas","huaca","huaco","huaje","huari","huaro","huasa","huaso","huata","huaya","huayo","hucha","hucho","hucia","hueca","hueco","huego","huela","huele","huelo","huera","huero","huesa","hueva","hueve","huian","huias","huich","huida","huido","huifa","huila","huilo","huina","huira","huire","huiro","hulan","hular","hulas","hulea","hulee","hulen","huleo","hules","hulla","hulte","human","humar","humas","humay","humbo","humea","humee","humen","humeo","humes","humil","humos","humus","hunda","hunde","hundi","hundo","hunos","hupes","huras","hurga","hurgo","huron","hurra","hurta","hurte","husar","husma","husme","husmo","husos","hutas","hutia","huyan","huyas","huyen","huyes","ibais","ibama","ibera","ibero","ibice","ibiza","icaco","icaro","iceis","ichal","ichos","ichus","icors","ictus","idean","idear","ideas","ideay","ideen","idees","idish","idolo","iglus","ignea","igneo","iguar","ijada","ijars","ijiyo","ijuju","ilave","ileon","ilesa","ileso","ilion","iloca","ilota","iltre","iluda","ilude","iludi","iludo","ilusa","iluso","imada","imana","imane","imano","imans","imaza","imbui","imela","imita","imite","imito","impia","impio","impla","imple","implo","impon","impto","imues","inane","incas","incoa","incoe","incoo","index","india","inegi","infla","infle","inflo","ingas","ingle","ingon","ingre","inope","input","inris","insta","inste","insti","insto","inter","intui","invar","iotas","ipire","irada","irado","iraki","ireis","irene","irgan","irgas","irgue","irian","irias","iride","irisa","irise","iriso","iriss","irles","irnos","irrui","irupe","iruto","isaac","isana","isaza","isbas","iscos","islan","islas","islay","isleo","isnos","isoca","isora","istmo","isupi","itala","italo","itati","items","itera","itere","itero","itria","itrio","itzaj","ixtla","izaba","izada","izado","izais","izara","izare","izase","izote","izqdo","jabas","jabis","jable","jabra","jabre","jabri","jabro","jacal","jacas","jacer","jacha","jacob","jacos","jacta","jacte","jacto","jadea","jadee","jadeo","jades","jadia","jadie","jadio","jaece","jaens","jaeza","jaezo","jagua","jaiba","jaima","jaime","jairo","jajay","jalan","jalas","jalca","jalda","jalde","jaldo","jalea","jalee","jalen","jaleo","jales","jalma","jalon","jalpa","jaman","jamar","jamas","jamay","jamba","jambe","jambo","jamen","jameo","james","jamon","janes","janos","japon","jaque","jaqui","jaral","jaras","jarba","jarbe","jarbo","jarca","jarda","jaros","jarpa","jarra","jarre","jarro","jasan","jasar","jasas","jasen","jases","jaspe","jatas","jateo","jatib","jatos","jauda","jaudo","jauja","jaume","jauta","jauto","javea","javos","jayan","jazan","jebes","jedan","jedar","jedas","jeden","jedes","jefas","jefes","jegua","jeito","jejen","jeliz","jemal","jemer","jemes","jeque","jeras","jerbo","jerez","jerga","jerpa","jesus","jetan","jetar","jetas","jetea","jetee","jeten","jeteo","jetes","jeton","jibia","jifas","jifia","jigas","jigue","jijas","jijea","jijee","jijeo","jiman","jimar","jimas","jimen","jimes","jimia","jimio","jinda","jiote","jipia","jipie","jipio","jiras","jirel","jiron","jisca","jitan","jitar","jitas","jiten","jites","jivia","jobar","jobos","jocha","joche","jocho","jocon","jodan","jodas","joden","joder","jodes","jodia","jodio","jodon","jofor","jolin","jolon","jondo","jonia","jonio","jopan","jopar","jopas","jopea","jopee","jopen","jopeo","jopes","joras","jorco","jordi","jorfe","jorga","jorge","jorro","josas","josep","jotas","jotes","joule","joyel","joyon","joyos","juana","juano","juans","jubas","jubon","jubos","judas","judea","judia","juega","juera","juete","jueza","juezs","jugad","jugar","jugas","jugon","jugos","jugue","jujea","jujee","jujeo","jujua","jujuy","julia","julio","julos","juman","jumar","jumas","jumbo","jumea","jumee","jumen","jumeo","jumes","jumil","junce","junci","junco","junin","junte","junto","junza","junzo","jupea","jupee","jupeo","jupon","juran","juras","jurco","jurel","juren","jures","jurgo","juros","jusis","justa","juste","jutas","jutia","juvia","juzga","juzgo","kakis","kappa","karma","karst","kayak","kebab","kefir","kendo","kenia","kevin","kilim","kilos","kirie","kitts","koala","kohol","koine","kopek","kurda","kurdo","labeo","labia","labil","labra","labre","labro","lacan","lacar","lacas","lacea","lacee","lacen","laceo","laces","lacha","lacho","lacia","lacio","lacon","lacra","lacre","lacro","lacta","lacte","lacto","ladas","ladea","ladee","ladeo","ladon","lados","ladra","ladre","ladro","ladys","lagar","lagos","lagua","laica","laico","laida","laido","lajas","lalin","laman","lamas","lamay","lamba","lambe","lambi","lambo","lamen","lamer","lames","lamia","lamin","lamio","lampa","lampe","lampo","lamud","lamus","lance","lanco","landa","lande","lando","langa","lania","lanio","lanka","lanus","lanza","lanzo","lapas","lapon","lapos","lapsa","lapso","laque","laran","larco","larda","larde","lardo","lares","larga","laria","larra","larva","lasca","lasco","lasos","lasta","laste","lasto","lasun","latan","latas","lataz","latea","latee","laten","lateo","lates","latex","latia","latio","latir","latis","laton","latos","lauda","laude","laudo","lauds","launa","laura","lauro","lauta","lauto","lavan","lavas","laven","laves","laxan","laxar","laxas","laxen","laxes","laxos","layan","layar","layas","layen","layes","lazan","lazar","lazas","lazos","leais","leals","lecha","lecho","ledon","ledos","leeis","leera","leere","lefas","legan","legar","legas","legon","legos","legra","legre","legro","legua","legue","legui","leian","leias","leida","leidi","leido","leidy","leila","leima","leiva","lejas","lejia","lejio","lelos","leman","lemas","lembo","lemes","lempa","lempo","lemur","lenca","lenon","lenta","leona","leons","lepra","leras","lerda","lerdo","lerma","lesea","lesee","leseo","lesna","lesos","leste","letal","letea","leteo","leton","leuco","leuda","leude","leudo","levan","levar","levas","leven","leves","lexia","leyva","lezda","lezna","lezne","liaba","liado","liais","liana","liara","liare","liase","liaza","liban","libar","libas","liben","liber","libes","libia","libio","libon","libre","lican","liceo","lichi","licia","licio","licor","licra","licua","licue","licuo","lidia","lidie","lidio","lidon","liega","liego","lieis","lieva","lieve","ligan","ligar","ligas","light","ligia","ligio","ligon","ligua","ligue","ligur","lijan","lijar","lijas","lijen","lijes","lilac","lilao","lilas","lilio","liman","limar","limas","limbo","limen","limes","limos","linao","linar","lince","linda","linde","linee","lineo","linfa","linio","linon","linos","liosa","lioso","lipes","lipis","lipon","liras","liray","liria","lirio","liron","lisia","lisie","lisio","lisis","lisol","lisos","liste","litan","litar","litas","liten","lites","litio","litis","litre","litro","lituo","liuda","liude","liudo","livor","lizas","lizos","llaca","llaga","llago","llama","llame","llamo","llana","llano","llapa","llape","llapo","llars","llata","lleca","lleco","llega","llego","llena","llene","lleno","llera","lleva","lleve","llevo","llico","llipa","llora","llore","lloro","llosa","llovi","lluta","loaba","loado","loais","loara","loare","loase","lobas","lobby","lobea","lobee","lobeo","lobos","locas","locea","locee","loceo","locha","loche","locos","locro","locus","lodon","lodos","lodra","loeis","logar","logia","logis","logos","logra","logre","loica","loina","loino","lolea","lolee","loleo","lolio","lolol","lomas","lomba","lombo","lomea","lomee","lomeo","lomos","lonas","lonco","longa","longo","lonja","lonya","loors","lopez","loras","lorca","lorea","loree","loreo","lores","lorna","loros","lorza","losan","losar","losas","losen","loses","lotas","lotea","lotee","loteo","lotin","lotos","lozas","lucas","lucen","luces","luche","lucho","lucia","lucio","lucir","lucis","lucma","lucra","lucre","ludan","ludas","luden","ludes","ludia","ludie","ludio","ludir","ludis","luego","lugre","luian","luias","luido","luira","luire","luisa","luiss","lujan","lujar","lujas","lujen","lujes","lujos","lules","lulle","lulus","lumas","lumbo","lumen","lumia","lunar","lunas","lunch","lunea","lunee","lunel","luneo","lunfa","lupas","lupia","lupus","luque","lurin","lurte","lusca","lusco","lusos","lutea","luteo","lutos","luvia","luxan","luxar","luxas","luxen","luxes","luyan","luyas","luyen","luyes","luzca","luzco","luzon","lycra","mable","macal","macan","macar","macas","macau","macea","macee","macen","maceo","maces","macha","mache","machi","macho","macia","macio","macis","macla","macon","macro","macua","macul","mador","maesa","maese","maeso","mafia","mafil","magin","magma","magna","magno","magon","magos","magra","magro","mague","magui","mahon","maido","maino","maipo","maipu","maito","maizs","majal","majan","majar","majas","majea","majee","majen","majeo","majes","majos","malal","malar","malas","malea","malee","maleo","malis","malla","malle","mallo","malon","malos","malta","malva","malve","malvo","maman","mamar","mamas","mamba","mambi","mambo","mamby","mamen","mames","mamey","mamia","mamon","mamua","mamut","manal","manan","manar","manca","manco","manda","mande","mandi","manen","manes","mango","mania","manid","manir","manis","mansa","manso","manta","mante","manto","manus","maoma","maori","mapas","mapea","mapee","mapeo","maple","mapoy","maque","maqui","maras","marce","marci","maree","mareo","marga","margo","maria","marin","mario","marlo","maroa","maron","maros","marra","marre","marro","marsa","marso","marta","marte","marza","marzo","masai","masan","masar","masas","masca","masco","masea","masee","masen","maseo","maser","mases","masia","masin","maslo","masma","mason","masse","maste","masto","matan","matas","matea","matee","maten","mateo","mates","matiz","maton","matul","maula","maule","maulo","maura","maure","mauro","mayal","mayan","mayar","mayas","mayea","mayee","mayen","mayeo","mayes","mayos","mazan","mazar","mazas","mazna","mazne","mazno","mazos","mbaya","meaba","meada","meado","meais","meaja","meana","meano","meara","meare","mease","meato","mecas","mecen","mecer","meces","mecha","meche","mecho","mecia","mecio","mecos","media","medie","medir","medis","medos","medra","medre","medro","meeis","megos","meiga","meigo","mejan","mejas","mejen","mejer","mejes","mejia","mejio","melar","melas","melca","melga","melgo","melis","mella","melle","mello","melon","melsa","melua","meluk","melva","memes","memez","memos","menan","menar","menas","menda","menea","menee","menen","meneo","menes","menge","mensa","menso","mensu","menta","menti","mento","menus","meona","meons","mequi","meran","merar","meras","merca","merco","meren","meres","merey","mergo","merla","merlo","merma","merme","mermo","merol","meros","mersa","mesan","mesar","mesas","mesen","meses","mesma","mesmo","meson","mesta","mesto","metad","metan","metas","meten","meter","metes","metia","metio","metra","meusa","meyor","mezan","mezas","mezzo","miaba","miado","miaga","miago","miais","miaja","mialo","miara","miare","miase","micas","micay","micer","micha","miche","micho","micos","micra","micro","midan","midas","miden","mides","midio","mieis","miela","miele","mielo","miels","miera","migan","migar","migas","migra","migre","migro","migue","mijas","mijos","milan","milis","millo","milpa","miman","mimar","mimas","mimen","mimes","mimos","minal","minan","minar","minas","minaz","minca","minda","minen","mines","minga","mingo","minia","minie","minio","minue","mioma","miona","miope","miran","miras","miren","mires","mirla","mirle","mirlo","miron","mirra","mirto","mirza","misal","misan","misar","misas","misen","mises","misia","misio","misis","misma","mista","miste","misto","mitan","mitas","mitin","mitla","miton","mitos","mitra","mitre","mitro","miura","mixes","mixta","mixto","mizas","mizos","moare","moble","mocan","mocar","mocas","mocea","mocee","moceo","mocha","moche","mocho","mocil","mocoa","mocos","modal","modas","modem","modin","modio","modos","modus","moers","mofan","mofar","mofas","mofen","mofes","mofle","mogan","mogol","mogon","mogos","mohin","mohos","mohur","mojan","mojao","mojar","mojas","mojel","mojen","mojes","mojil","mojis","mojon","mojos","molan","molar","molas","molda","molde","moldo","molen","moler","moles","molia","molio","molla","molle","molon","molsa","molso","momax","momea","momee","momeo","momia","momil","momio","momos","monda","monde","mondo","monea","monee","moneo","monfi","monga","monge","mongo","monis","monja","monje","monra","monse","monta","monte","montt","mopan","moque","moran","morar","moras","morbo","morca","morco","mordi","morea","moren","moreo","mores","morfa","morfe","morfo","morga","moria","morin","moris","morma","morme","mormo","moron","moros","morra","morro","morsa","morse","mosca","mosco","mosen","mosoc","mossa","moste","mosto","motas","motea","motee","motel","moteo","motes","motil","motin","moton","motos","motul","mouse","mover","moves","movia","movio","moxas","moxos","moxte","moyos","mozas","mozos","muare","muble","mucha","mudan","mudar","mudas","muden","mudes","mudez","mudos","mueca","muela","muele","muelo","muera","muere","muero","muers","mueso","mueva","mueve","muevo","mufla","mufti","mugan","mugar","mugas","mugen","muges","mugia","mugil","mugio","mugir","mugis","mugle","mugor","mugre","mugue","muian","muias","muido","muira","muire","mujan","mujas","mujol","mular","mulas","muleo","mulla","mulle","mulli","mullo","mulos","mulsa","mulso","multe","multo","mumbu","muons","muqui","mural","muran","murar","muras","muren","mures","murga","muria","murio","muros","murri","murta","murto","musan","musar","musas","musca","musco","musen","muses","musga","musgo","musia","musio","musir","musis","musli","muslo","mutan","mutar","mutas","muten","mutes","mutis","mutro","mutua","muyan","muyas","muyen","muyes","nabab","nabal","nabar","nabas","nabla","nabos","nacar","nacas","nacen","nacer","naces","nacha","nacho","nacia","nacos","nacre","nadal","nadan","nadas","naden","nades","nadga","nadir","nafra","nafre","nafro","nafta","nagua","nahoa","nahua","naife","naipe","naire","nairo","najas","nalca","nalga","nanas","nanay","nance","nanci","nanea","nanee","naneo","nansa","nansu","nanta","nante","nanto","napal","napan","napar","napea","napen","napeo","napes","napia","narco","nardo","nares","naron","narra","narre","narro","nasal","nasas","nasca","nason","nasos","natal","natas","natia","natio","natos","natri","nauca","nauru","nauta","naval","navan","naves","navia","navio","nayar","nazas","nazca","nazco","nazis","ndowe","nebel","nebli","nebro","necea","necee","neceo","nechi","necia","necio","negas","negra","negro","negua","negue","negus","neira","neiva","nejas","nejos","neldo","neles","nemas","nemea","nemeo","nemes","nemon","nendo","nenes","nenia","neons","nepal","nerda","nerdo","nerja","neron","nesga","nesgo","netos","neudo","neuma","neura","nevar","nevas","nevis","nevus","nexos","nials","niara","niata","niazo","niche","nicho","nicle","nicol","nidal","nidia","nidio","nidos","niega","niego","niela","niele","nielo","nieta","nieto","nieva","nievo","niger","nigua","nijar","nilad","nilon","nimba","nimbe","nimbo","nimia","nimio","ninfa","ninfo","ninja","ninot","nioto","nipis","niple","nipon","nipos","niqui","niste","nitor","nitos","nitra","nitre","nitro","nival","nivea","niveo","nixte","nizam","nobel","noble","nobsa","nobuk","nocas","nocir","nocla","nodal","nodos","noema","nogal","nolis","nolit","nomas","nomon","nomos","nonas","nones","nonio","nopal","noque","noral","noray","noria","norme","normo","notan","notar","notas","noten","notes","notos","notro","noval","novan","novar","novas","novel","noven","noves","novie","novoa","noxas","nubes","nubia","nubil","nubio","nubla","nucas","nuche","nucir","nucos","nudos","nuera","nuesa","nueso","nueva","nueza","nuezs","nulos","nulpe","nulpi","numen","numos","nuqui","nuria","nutra","nutre","nutri","nutro","nuxaa","nuyoo","nydia","oasis","obelo","obera","obesa","obeso","obice","obito","oblea","oboes","obolo","obran","obrar","obren","obres","obron","obsta","obste","obsto","obten","obuss","obvia","obvie","ocals","ocapi","ocaso","ocelo","ocena","ochio","ochoa","ochos","ocian","ociar","ocias","ocien","ocies","ocios","ocles","oclui","ocopa","ocote","ocoyo","ocres","ocrey","ocros","octal","octay","ocuje","oculo","ocume","ocumo","ocupa","ocupe","ocupo","odeon","odian","odiar","odias","odien","odies","odios","odres","ofita","ofrio","ogodo","ogros","ohmio","oiais","oible","oidas","oidio","oidla","oidle","oidlo","oidme","oidor","oidos","oigan","oigas","oilas","oiles","oilos","oimos","oinos","oiran","oiras","oiria","oislo","oiste","ojale","ojalo","ojals","ojean","ojear","ojeas","ojeda","ojeen","ojees","ojeos","ojera","ojete","ojito","ojiva","ojosa","ojoso","ojota","ojuda","ojudo","okapi","okupa","olais","olaje","olave","olaya","olean","olear","oleas","oleen","olees","oleis","olela","olele","olelo","oleme","oleos","olera","olere","olesa","olete","olian","olias","olida","olido","olios","oliva","olive","olivo","ollao","ollar","ollas","ollon","olmos","olmue","olors","olote","olura","oluta","omani","omaso","omate","ombus","omega","omero","omeya","omina","omine","omino","omisa","omiso","omita","omite","omiti","omito","omota","omoto","oncea","oncee","onceo","onces","ondas","ondea","ondee","ondeo","ondra","onece","oneci","ongon","ongoy","onice","onoto","onzas","opaca","opaco","opada","opado","opalo","opere","opero","opila","opile","opilo","opima","opimo","opina","opine","opino","opios","opone","optan","optas","opten","optes","opuse","opuso","oques","oraba","orado","orais","oraje","orale","orals","orara","orare","orase","orate","orbes","orcas","orcen","orces","orcos","ordaz","orean","orear","oreas","oreen","orees","oreis","orera","orero","orfos","orfre","orgia","oribe","orina","orine","orino","orins","oriol","orito","orive","orlan","orlar","orlas","orlen","orles","orlon","ornan","ornar","ornas","ornea","ornee","ornen","orneo","ornes","oroya","orpua","orsay","ortiz","ortos","oruga","orujo","oruro","orzan","orzar","orzas","osaba","osada","osado","osais","osara","osare","osars","osase","oscar","oscos","osean","osear","oseas","oseen","osees","oseis","oseos","osera","osero","oseta","osmio","ososa","ososo","ostia","ostra","ostro","osuda","osudo","osuna","osuno","otaez","otare","otate","otean","otear","oteas","oteen","otees","otero","othon","otica","otico","otila","otile","otilo","otoba","otoca","otras","otros","ovaba","ovada","ovado","ovais","ovala","ovale","ovalo","ovals","ovara","ovare","ovase","oveis","ovejo","overa","overo","ovido","ovina","ovino","ovnis","ovolo","ovosa","ovoso","ovula","ovule","ovulo","oxean","oxear","oxeas","oxeen","oxees","oxida","oxide","oxido","oyela","oyele","oyelo","oyeme","oyera","oyere","oyese","oyolo","ozena","ozona","ozono","pabla","pablo","pacae","pacas","pacay","pacen","pacer","paces","pacha","pacho","pacia","pacio","pacoa","pacon","pacta","pacte","pacto","padel","padua","paezs","pafia","pafio","pagan","pagas","pagel","pagos","pagro","pagua","pague","pahua","paico","paila","paime","paina","paine","paipa","paira","paire","pairo","paita","paito","paiva","pajar","pajas","pajea","pajee","pajel","pajeo","pajil","pajla","pajon","pajos","pajuz","palas","palau","palay","palca","palco","palea","palee","paleo","pales","palia","palie","palio","palla","palle","pallo","palme","palmo","palon","palor","palos","palpa","palpe","palpi","palpo","palta","palto","pamba","pampa","pamue","panan","panao","panas","panca","pance","panco","panda","pandi","pando","paneo","panes","panga","panji","pansa","panti","panty","panul","panza","papal","papan","papar","papas","papaz","papea","papee","papen","papeo","papes","papin","papon","papos","papua","papus","paral","paran","parao","parar","paras","parca","parce","parco","parda","pardo","parea","paree","parel","paren","pareo","pares","pargo","paria","pario","parir","paris","parka","parla","parle","parlo","parne","paron","paros","parpa","parpe","parpo","parra","parre","parro","parsi","parta","parti","parto","party","parva","parvo","pasan","pasar","pasas","pasca","pasco","pasea","pasee","pasen","paseo","pases","pasil","pasma","pasme","pasmo","pasos","paspa","paspe","paspo","pasta","paste","pasto","patan","patao","patas","patax","patay","pataz","patea","patee","pateo","pater","pates","patia","patin","patio","paton","patos","pauji","paula","paule","paulo","pauls","pauna","pause","pauso","pauta","paute","pauto","pavas","paves","pavia","pavon","pavor","pavos","paxte","payan","payar","payas","payen","payes","payoa","payos","pazca","pazco","pazos","peais","peala","peale","pealo","peals","pebas","pebre","pecan","pecar","pecas","peces","pecha","peche","pecio","pecta","pecte","pecto","pedal","pedia","pedio","pedir","pedis","pedos","pedro","peeis","peera","peere","pegan","pegas","pegon","pegos","pegue","peian","peias","peido","peina","peine","peino","pejes","pejin","pelan","pelao","pelas","pelde","pelea","pelee","pelen","peleo","peles","pelis","pella","pello","pelma","pelon","pelos","pelta","pelvi","pemex","pemon","penal","penan","penar","penca","penco","penda","pende","pendi","pendo","penen","penes","pense","peona","peons","peora","peors","pepas","pepes","pepla","peplo","pepon","peque","peral","peras","perca","perdi","perea","perez","peris","perla","perle","perlo","perna","perno","perol","peron","peros","persa","perta","perus","pesan","pesas","pesce","pesco","pesen","peses","pesga","pesgo","pesia","pesol","pesor","pesos","peste","pesto","petan","petar","petas","peten","peter","petes","petit","petos","petra","petro","peuco","peumo","pezon","phara","piaba","piada","piado","piafa","piafe","piafo","piais","piala","piale","pialo","pians","piara","piare","piase","pibil","pibon","pical","pican","picao","picar","picas","picea","piceo","picha","piche","pichi","picho","picia","picio","picon","picop","picor","picos","picsi","picuy","pidan","pidas","piden","pides","pidio","pidon","pieis","piejo","piels","pifas","pifia","pifie","pifio","pigra","pigre","pigro","pigua","pigue","pihua","pijao","pijin","pijos","pijul","pijuy","pilaf","pilan","pilar","pilas","pilca","pilen","pileo","piles","pilin","pilla","pille","pillo","pilme","pilon","pimbi","pinar","pince","pindo","pinga","pingo","pinky","pinna","pinol","pinos","pinra","pinta","pinte","pinto","pinza","pinzo","piojo","piola","piole","piolo","piona","pions","pipan","pipar","pipas","pipen","pipes","pipia","pipie","pipil","pipio","pipis","pipon","pique","piral","piran","pirar","piras","piray","pirca","pirco","piren","pires","pirex","pirla","piron","piros","pirra","pirre","pirri","pirro","pirul","pisac","pisan","pisao","pisar","pisas","pisba","pisca","pisco","pisen","pises","pison","pisos","pispa","pispe","pispo","piste","pisto","pital","pitan","pitao","pitar","pitas","pitea","pitee","piten","piteo","pites","pitia","pitio","piton","pitos","piula","piule","piulo","piune","piura","piure","pivot","pixel","pizca","pizco","placa","place","placi","placo","plaga","plago","plans","playe","playo","plaza","plebe","pleca","plego","plena","pleno","pleon","plepa","plexo","plica","plims","plisa","plise","pliso","ploma","plome","plomo","plugo","pluma","poble","poblo","pobos","pobra","pocha","poche","pocho","pocsi","podal","podan","podar","podas","poded","poden","podes","podia","podio","podon","podra","podre","pogue","poino","poisa","poise","poker","polar","polas","polca","polco","polea","polen","poleo","polex","polin","polio","polir","polis","polla","polos","pomar","pomas","pombo","pomez","pomos","pompa","pompi","pompo","ponci","ponen","pones","poney","ponga","pongo","ponia","ponis","ponto","popan","popar","popas","popel","popen","popes","popti","porca","porco","porga","porgo","porno","poros","poroy","porra","porro","porta","porte","porto","posan","posar","posas","posca","posea","posee","posei","posen","poseo","poses","posic","posit","posma","posmo","poson","posos","posse","posta","poste","potan","potar","potas","potea","potee","poten","poteo","potes","potra","potro","poyal","poyan","poyar","poyas","poyen","poyes","poyos","pozal","pozas","pozol","pozon","pozos","prado","praga","prana","prava","pravo","praza","prear","preda","presa","presi","prest","preve","previ","prezs","prime","primo","prion","prior","priva","prive","privo","proal","proas","proba","probe","probo","proco","proel","profa","profe","prois","proiz","prole","prona","prono","prora","prosa","provo","pruna","pruno","psies","psoas","puaba","puado","puais","puara","puare","puase","puber","pubes","pubis","pucha","pucho","pucia","pucon","pudin","pudio","pudir","pudor","pudra","pudre","pudri","pudro","pueda","puede","puedo","pueis","pufos","pugas","pugil","pugna","pugne","pugno","pujan","pujar","pujas","pujen","pujes","pulan","pulas","pulen","pules","pulga","pulia","pulio","pulir","pulis","pulla","pulle","pullo","pulpa","pulpo","pulsa","pulse","pulso","pumas","pumba","pumbi","punan","punas","punce","punco","puncu","punen","punes","punga","punge","pungi","punia","punio","punis","punja","punjo","punki","punks","punta","punte","punza","punzo","pupan","pupar","pupas","pupen","pupes","purea","puree","puren","pureo","pures","purga","purgo","purin","puros","purra","purre","purri","purro","purus","puspa","puspo","putal","putas","putea","putee","puteo","putla","puton","putos","putre","puyan","puyar","puyas","puyca","puyen","puyes","puyon","puzle","puzol","quark","queco","queda","quede","quedo","queje","quejo","quema","queme","quemi","quemo","quena","quepa","quepe","quepi","quepo","quera","quero","quico","quier","quije","quijo","quila","quilo","quima","quime","quimo","quins","quios","quipa","quipu","quisa","quise","quiso","quiss","quita","quite","quito","quitu","quivi","quiza","rabal","rabas","rabea","rabee","rabel","rabeo","rabia","rabie","rabil","rabio","rabis","rabon","rabos","racea","racee","racel","raceo","rache","racho","racor","radal","radas","radia","radie","radon","raeis","raera","raere","rafal","rafas","rafea","rafee","rafeo","rafes","rafez","rafia","ragua","rahez","raian","raias","raice","raida","raido","raids","raiga","raigo","raijo","rails","rains","raiza","raizo","raizs","rajan","rajar","rajas","rajen","rajes","rajon","ralba","ralbe","ralbo","ralco","ralea","ralee","raleo","ralla","ralle","rallo","rally","ralos","ralva","ralve","ralvo","ramal","ramas","ramea","ramee","rameo","ramio","ramon","ramos","rampa","rampe","rampo","ranco","randa","rapan","rapar","rapas","rapaz","rapel","rapen","rapes","rapta","rapte","rapto","raque","raras","rarea","raree","rareo","raros","rasan","rasar","rasas","rasca","rasco","rasel","rasen","rases","rasga","rasos","raspa","raspe","raspo","rasta","ratas","ratea","ratee","rateo","ratio","ratos","rauca","rauch","rauco","rauda","raudo","rauli","rauta","rayan","rayar","rayas","rayen","rayes","rayon","rayos","razar","razas","razia","reaje","reala","reals","reama","reame","reamo","reara","reare","rearo","reata","reate","reato","rebla","reble","reblo","rebol","rebus","recae","recai","recel","recen","reces","recia","recio","recle","recre","recta","recte","recto","recua","redan","redar","redas","redel","reden","redes","redil","redol","redor","redox","redro","refez","regar","regas","regia","regio","regis","regle","reglo","regue","rehaz","rehui","rehus","reian","reias","reido","reila","reile","reilo","reine","reira","reire","rejal","rejas","rejin","rejon","rejos","rejus","relax","relea","relee","relei","relej","releo","reles","relsa","relso","relva","relve","relvo","reman","remar","remas","remen","remes","remos","renal","renca","renco","renda","rende","rendi","rendo","renes","renga","rengo","renil","renio","renos","renta","rente","rento","reoca","reojo","repon","repta","repte","repto","reque","resal","resma","resol","respe","resta","reste","resto","retal","retan","retar","retas","retel","reten","retes","retin","retor","retos","retro","reuma","reuna","reune","reuni","reuno","revea","reven","reveo","rever","reves","revio","reyan","reyar","reyas","reyen","reyes","rezan","rezas","rezno","rezon","rezos","riada","riais","riata","ribas","ricas","ricen","rices","ricia","ricio","ricos","riega","riego","riela","riele","rielo","riels","riera","riere","riese","rifan","rifar","rifas","rifen","rifes","rigen","riges","rigil","rigio","rigor","rigua","rigue","rijan","rijas","rilan","rilar","rilas","rilen","riles","rimac","riman","rimar","rimas","rimel","rimen","rimes","rinda","rinde","rindo","ringa","ringo","rioja","ripan","ripia","ripie","ripio","risas","risca","risco","risos","rispa","rispe","rispo","ritma","ritme","riton","ritos","rivas","rizal","rizan","rizar","rizas","rizon","rizos","roais","roana","roano","roban","robas","robda","roben","robes","robin","robla","roblo","robos","robra","robre","rocas","rocea","rocee","rocen","roceo","roces","rocha","roche","rocho","rocia","rocie","rocin","rocio","rocks","rodal","rodao","rodar","rodas","rodea","rodee","rodeo","rodia","rodil","rodio","roeis","roela","roera","roere","roete","rogar","rogas","roger","rogue","roian","roias","roida","roido","roiga","roigo","rojal","rojas","rojea","rojee","rojeo","rojez","rojos","rolan","rolar","rolas","rolda","rolde","roldo","rolen","roleo","roles","rolla","rolle","roman","rombo","romea","romeo","romin","romis","romos","rompa","rompe","rompi","rompo","ronca","ronce","ronco","ronde","rondo","ronza","ronzo","ropas","ropon","roque","roran","rorar","roras","roren","rores","rorro","rosal","rosan","rosar","rosas","rosca","rosco","rosea","rosee","rosen","roseo","roses","rosjo","roson","rosos","rosta","roste","rosti","rosto","rotal","rotan","rotar","rotas","roten","rotes","rotor","rotos","rouge","royal","royan","royas","royos","rozan","rozar","rozas","rozna","rozne","rozno","rozon","ruaba","ruado","ruais","ruana","ruano","ruans","ruara","ruare","ruase","rubea","ruben","rubeo","rubia","rubin","rubio","rubis","rublo","rubor","rubos","rubra","rubro","rucan","rucar","rucas","rucha","ruche","rucho","rucia","rucio","rudal","rudas","rudos","rueca","ruede","ruedo","ruega","ruego","rueis","ruejo","rufon","rufos","rugan","rugar","rugas","rugby","rugen","ruges","rugia","rugio","rugir","rugis","rugue","ruine","ruino","ruins","ruiza","rujan","rujas","rujia","rujie","rujio","rulan","rular","rulas","rulen","rules","rulos","rumba","rumbe","rumbo","rumia","rumie","rumio","rumos","runga","rungo","runos","rupia","ruque","rurru","rusco","rusel","rusia","rusos","rusta","ruste","rusti","rusto","rutan","rutar","rutas","rutel","ruten","ruter","rutes","sabea","saben","sabeo","sabes","sabia","sabir","sable","sabra","sabre","sacan","sacar","sacas","sacco","sacha","sache","sacho","sacia","sacie","sacio","sacon","sacos","sacra","sacre","sacro","saenz","saeta","saete","saeti","saeto","safia","safir","sagas","sagaz","saija","saina","saine","saino","sains","saint","saisa","saiza","sajan","sajar","sajas","sajen","sajes","sajia","sajon","salan","salao","salar","salas","salaz","salce","salda","salde","saldo","salea","salee","salen","saleo","salep","sales","salga","salgo","salia","salin","salio","salis","salla","salle","sallo","salma","salme","salmo","saloa","salol","salou","salpa","salpo","salso","salta","salte","salva","salve","salvo","saman","samas","samba","sambo","samia","samio","samoa","sampa","sanan","sanar","sanco","sande","sanea","sanee","sanen","saneo","sanes","sango","sanie","sanja","sanje","sanjo","sanos","sansa","sanso","santa","sapas","sapea","sapee","sapeo","sapos","saque","saran","sarao","sarda","sarde","sardo","sarga","sargo","saria","saric","sarin","sarna","sarro","sarta","sarza","sarzo","sasal","saspi","satan","saten","satin","satis","satos","sauce","sauco","saudi","sauji","sauna","sausa","sauzs","savia","saxea","saxeo","sayal","sayan","sayas","sayla","sayon","sayos","sazon","seais","sebes","sebos","secan","secar","secas","secon","secos","secre","secta","secua","sedal","sedan","sedar","sedas","sedea","sedee","seden","sedeo","sedes","segar","segas","segri","segue","segui","segur","seibo","seico","seise","seiss","sejal","selfi","sella","selle","seltz","semen","semis","senda","senil","senos","sente","senti","sento","seora","seors","sepan","sepas","sepia","septo","seque","seran","seras","serba","serbo","seres","seria","serio","serla","serle","serlo","serme","serna","seron","seros","serpa","serra","serre","serro","serte","servi","servo","sesea","sesee","sesen","seseo","sesga","sesgo","sesil","sesma","sesmo","sesos","setal","setas","setos","sexan","sexar","sexas","sexen","sexes","sexis","sexma","sexmo","sexos","sexta","sexys","shock","short","shows","shuar","siare","sibil","siclo","sidas","sidon","sidra","siega","siego","siena","siens","siero","siesa","sieso","sifon","sifue","sigan","sigas","sigla","sigma","signa","signe","signo","sigua","sigue","sigui","silao","silba","silbe","silbo","silex","silfo","silga","silgo","siloe","silos","silva","simas","simia","simil","simio","simon","simpa","simun","sinai","since","singa","singo","sinos","sioux","sique","sirga","sirgo","siria","sirin","sirle","siros","sirte","sirva","sirve","sirvo","sisal","sisan","sisar","sisas","sisca","sisea","sisee","sisen","siseo","sises","sismo","sison","sitar","sitia","sitie","sitos","situa","situe","situo","sivia","sixto","soasa","soase","soaso","soata","soban","sobao","sobar","sobas","soben","sobeo","sobes","sobon","sobra","sobro","socas","socaz","socha","soche","socia","socio","socol","socos","sodas","soeza","soezs","sofas","sofia","sogas","sogun","sojas","solas","solaz","solde","soldo","solea","solee","solen","soleo","soler","soles","solfa","solia","solio","solis","solla","sollo","solos","solte","solto","somas","somos","sonda","sonde","sondo","sonia","sonio","sonsa","sonso","sonta","sonto","sopan","sopar","sopas","sopea","sopee","sopen","sopeo","sopes","sopie","sopla","sople","sopon","sopor","soras","sorba","sorbe","sorbi","sorbo","sorce","sorda","sordo","sorgo","soria","sorna","sorne","sorno","soror","soros","sorra","sosal","sosar","sosas","sosia","sosos","sotan","sotar","sotas","soten","sotes","sotil","sotol","sotos","sovoz","split","sport","spray","stand","stent","stock","suaba","suabo","suata","suato","suaza","suazi","suban","subas","suben","subeo","subes","subia","subio","subir","subis","subte","suche","sucia","sucre","sudan","sudar","sudas","suden","sudes","sueca","sueco","suela","suele","suelo","suero","sueva","suevo","sufis","sufle","sufra","sufre","sufri","sufro","suido","suita","suiza","suizo","sulas","sulco","sulla","suman","sumar","sumas","sumen","sumes","sumia","sumio","sumir","sumis","sumos","sumun","sunca","sunco","sunna","sunni","supia","supla","suple","supli","suplo","supon","supra","sural","suras","surca","surco","surda","surde","surdi","surdo","surge","surgi","surja","surjo","surta","surte","surti","surto","sushi","sutas","sutes","suyos","suzon","swing","tabaa","tabal","tabas","tabea","tabes","tabio","tabla","table","tablo","tabon","tabor","tabus","tacar","tacas","tacen","taces","tacet","tacha","tache","tacho","tacna","tacos","tacto","tadeo","tadia","tafia","tafon","tafos","tafur","tagua","tahas","tahur","taifa","taiga","taija","taima","taime","taimo","taina","taino","taipa","taira","taire","taita","tajan","tajar","tajas","tajea","tajee","tajen","tajeo","tajes","tajin","tajon","tajos","talan","talar","talas","talca","talco","talea","taled","talen","tales","talgo","talin","talio","talle","tallo","talma","talon","talos","talpa","talud","tamal","tamba","tambo","tamil","tamiz","tamos","tamul","tanca","tanco","tanda","tanga","tange","tangi","tango","tanja","tanjo","tanka","tanor","tanta","tanti","tanto","tanza","tapan","tapar","tapas","tapay","tapea","tapee","tapen","tapeo","taper","tapes","tapia","tapie","tapin","tapio","tapir","tapis","tapiz","tapoa","tapon","tapuc","taque","taran","tarar","taras","taray","tarca","tarco","tarda","tardo","taren","tares","tarin","tarja","tarje","tarjo","tarma","taroa","tarot","tarra","tarro","tarso","tasan","tasar","tasas","tasca","tasco","tasen","tases","tasia","tasio","tasis","tasto","tatas","tatay","tatos","tatua","tatue","tatuo","tauca","tauco","taula","tauro","tausa","taxco","taxis","taxon","tayin","tayul","tazan","tazar","tazas","tazon","teabo","teame","teapa","teayo","tebea","tebeo","tecas","techa","teche","tecla","tecle","teclo","tecoh","tecol","tedas","tedio","tefes","tegea","tegeo","tegua","tegue","tehul","teina","teita","tejan","tejar","tejas","tejen","tejer","tejes","tejia","tejio","tejon","tejos","tekal","tekax","tekit","tekom","telar","telas","telde","telef","teles","telex","tello","tells","telmo","telon","telpi","teman","temar","temas","temax","temen","temer","temes","temia","temio","temor","tempo","temus","tenas","tenaz","tenca","tendi","tenes","tenga","tengo","tenio","tenjo","tenor","tensa","tense","tenso","tente","tento","tenue","tenza","teosa","teoso","tepes","tepic","tepuy","teque","terai","teran","terca","terco","terma","termo","terna","terne","terno","teros","tersa","terse","terso","tesan","tesar","tesas","tesen","teses","tesis","tesla","teson","tesos","testa","teste","testo","tetan","tetar","tetas","teten","tetes","tetiz","tetla","teton","tetra","tetro","teyos","tiaca","tiara","tibar","tibes","tibet","tibia","tibie","tibio","tibor","ticua","ticul","tidaa","tiene","tiesa","tieso","tifon","tifos","tifus","tigra","tigua","tigue","tijas","tijul","tilas","tilda","tilde","tildo","tilia","tilin","tilla","tille","tillo","tilly","tilma","tilos","timan","timar","timas","timba","timbo","timen","times","timol","timon","timor","timos","timpa","tinca","tinco","tinea","tineo","tiner","tinge","tingo","tinos","tinta","tinte","tinto","tinum","tipan","tipas","tipeo","tipex","tiple","tipoi","tipos","tipoy","tique","tiqui","tiran","tirar","tiras","tiren","tires","tiria","tirio","tirol","tiron","tiros","tirro","tirso","tirte","tirua","tisco","tisis","tiste","titan","titar","titas","titea","titee","titen","titeo","tites","titil","titis","titos","tizas","tizna","tizne","tizno","tizon","tizos","tlaco","tlapa","toaba","toado","toais","toara","toare","toase","tobal","tobar","tobas","tobia","tobon","tocan","tocas","tocen","toces","tocha","toche","tocho","tocia","tocio","tocon","tocte","todia","toeis","toesa","tofos","togan","togas","togue","togui","tojal","tojos","tolas","tolda","tolde","toldo","tolla","tollo","tolmo","tolon","tolva","toman","tomas","tomay","tomen","tomes","tomin","tomon","tomos","tonal","tonan","tonar","tonas","tonca","tondo","tonel","tonen","toner","tones","tonga","tongo","tonos","tonta","topan","topar","topas","topea","topee","topen","topeo","toper","topes","topia","topil","topon","topos","toque","toqui","toral","torax","torca","torce","torci","torco","torda","tordo","torea","toree","toreo","tores","torga","torgo","toril","torio","tormo","torna","torne","torno","toron","toros","torpe","torra","torro","torso","torta","torva","torvo","tosan","tosas","tosca","tosco","tosen","toser","toses","tosia","tosio","toste","tosto","totem","totol","totos","tours","tovar","tovas","tozal","tozan","tozar","tozas","tozos","traba","trabe","trabo","traca","trace","traen","traes","trafa","traga","trago","traia","trajo","trama","trame","trapa","trape","trapo","traro","trata","trate","trato","travo","traza","trazo","trebo","trece","trefe","treja","trema","treme","tremi","tremo","trena","treno","trens","treos","trepa","trepe","trepo","treta","trial","trian","triar","trias","trice","trien","tries","triga","trile","trina","trine","trino","trios","tripa","tripe","tripi","trisa","trise","triso","trita","triza","trizo","troca","troce","troco","troja","troje","trola","trole","trols","trona","trone","tropo","trota","trote","troto","trova","trove","trovo","troxs","troya","troza","trozo","truca","trues","trufa","trufe","trufo","truja","trusa","trust","tuani","tubas","tubey","tubos","tucan","tucas","tucia","tucos","tucun","tudas","tudel","tueca","tueco","tueme","tuera","tuero","tufea","tufee","tufeo","tufos","tuina","tuits","tular","tulia","tulio","tulla","tulle","tulli","tullo","tulmo","tulpa","tulua","tulum","tuman","tumay","tumbe","tumbo","tumos","tunal","tunan","tunar","tunas","tunca","tunco","tunda","tunde","tundi","tundo","tunea","tunee","tunen","tuneo","tunes","tunez","tunia","tunja","tunjo","tunta","tupac","tupan","tupas","tupen","tuper","tupes","tupia","tupin","tupio","tupir","tupis","turar","turas","turba","turbe","turbo","turca","turco","turen","turia","turma","turna","turne","turon","turpo","turra","turre","turro","turua","tusan","tusar","tusas","tusca","tusco","tusen","tuses","tuson","tutea","tutee","tuteo","tutes","tutia","tutla","tutor","tutsi","tuyas","tuyos","tweed","twist","uayma","ubala","ubate","ubeda","ubica","ubico","ubios","ubres","ucase","uebos","ufana","ufane","ufano","ufugu","ugres","ujier","ujule","ulaga","ulala","ulano","ulema","ulloa","ultra","ulula","ulule","ululo","umane","umari","umbra","umbro","umero","unala","unale","unalo","unase","uncen","unces","uncia","uncio","uncir","uncis","unete","ungar","ungen","unges","ungia","ungio","ungir","ungis","unica","unila","unile","unilo","unime","unios","unite","unjan","unjas","untan","untar","untas","unten","untes","untos","unzan","unzas","upaba","upado","upais","upara","upare","upase","upata","upeis","upupa","uraba","uraca","urama","urape","urato","urbes","urcos","urdan","urdas","urden","urdes","urdia","urdio","urdir","urdis","ureas","urgen","urges","urgia","urgio","urgir","urgis","urias","uribe","urica","urico","urjan","urjas","urnas","urpay","urrao","urubu","urucu","urudo","uruga","usaba","usada","usais","usaje","usala","usale","usalo","usame","usara","usare","usase","useis","usela","usele","uselo","useme","usese","ushua","usier","usila","usina","usted","usteo","usura","usure","usuro","utero","utica","utils","uvada","uvate","uveas","uvera","uvero","uviar","uvita","uvito","uvula","uyuni","vacan","vacar","vacia","vacie","vacua","vacuo","vadea","vadee","vadeo","vader","vades","vados","vafea","vafee","vafeo","vagan","vagas","vagos","vague","vahan","vahar","vahas","vahea","vahee","vahen","vaheo","vahes","vahos","vaida","vaina","vajea","vajee","vajeo","valar","valen","valer","vales","valet","valga","valgo","valia","valio","vallo","valls","valon","valsa","valse","valso","valss","valua","value","valuo","valva","vanea","vanee","vaneo","vanos","vaque","varal","varan","varar","varas","varea","varee","varen","vareo","vares","varga","varia","varie","vario","variz","varon","vasar","vasas","vasca","vasco","vasos","vasta","vater","vates","vatio","vayan","vayas","veais","vecen","veces","vedan","vedar","vedas","veden","vedes","vedia","vegas","veian","veias","veira","vejan","vejar","vejas","vejen","vejes","vejez","velan","velar","velas","velay","velen","veles","velez","velis","veliz","vello","velon","velos","veloz","vemos","venal","venas","vence","venci","venda","vende","vendi","vendo","venga","vengo","venia","venis","venta","vente","vento","venus","venza","venzo","veran","veras","veraz","verba","verbo","verga","verge","veria","veril","verja","verme","vermu","veros","versa","verse","verti","vespa","veste","vesti","vetan","vetar","vetas","vetea","vetee","veten","veteo","vetes","veton","vetos","vezan","vezar","vezas","viada","viaja","viajo","viale","vials","viani","vibra","vibre","vibro","vicar","vicco","vicha","viche","vichi","vicho","vichy","vicia","vicie","vicky","victo","vidal","vidia","vidon","vidro","vieja","viene","viera","viere","viesa","viese","vigas","vigia","vigie","vigio","vigor","vijal","vijes","vilca","villa","ville","vilos","vimos","vinal","vinar","vinca","vinco","vindi","vinos","vinta","vinto","viola","viole","violo","viota","viral","viran","virar","viras","viren","vireo","vires","virgo","viril","virio","virol","viron","visan","visar","visas","visco","visea","visee","visen","viseo","vises","visir","vison","visor","visos","viste","visto","vitan","vitar","vitas","viten","vites","vitis","vitoc","vitor","vitre","viuda","viudo","vivac","vivan","vivar","vivas","vivaz","viven","vives","vivez","vivia","vivio","vivir","vivis","vivon","vivos","voace","vocea","vocee","voceo","voces","vodca","vodka","voila","volas","volco","volea","volee","voleo","voley","volon","volts","volvi","volvo","vomer","voraz","vosea","vosee","voseo","votan","votas","voten","votes","votos","votri","vozna","vozne","vozno","vudus","vuela","vuele","vuesa","vueso","vulgo","vulto","vulva","vusco","wanda","watts","weber","wifis","wolff","world","xenon","xichu","xinca","xiote","xitla","xokas","yabas","yacal","yacas","yacen","yacer","yaces","yacia","yacio","yacon","yacus","yagan","yagas","yagua","yaiti","yales","yamao","yambo","yambu","yamon","yampa","yanac","yanas","yanga","yanta","yante","yanto","yapan","yapar","yapas","yapen","yapes","yaque","yaqui","yarey","yatai","yatay","yates","yatra","yauca","yauli","yauya","yaveo","yayos","yazca","yazco","yazga","yazgo","yebos","yecla","yecos","yedgo","yedra","yegua","yelgo","yelmo","yemas","yemen","yendo","yente","yeral","yerba","yerga","yergo","yerma","yerme","yermo","yerna","yerno","yeros","yerra","yerre","yerro","yersi","yerta","yerto","yervo","yesal","yesar","yesca","yesid","yeson","yesos","yezgo","yidis","yihad","yodan","yodar","yodas","yoden","yodes","yodos","yogar","yogui","yogur","yolox","yonan","yondo","yopal","yoqui","yotao","yucal","yucas","yucay","yucpa","yugos","yumba","yumbo","yunga","yunta","yunto","yupan","yuras","yurua","yutes","yuyal","yuyos","zabra","zabro","zacea","zacee","zaceo","zafan","zafar","zafas","zafen","zafes","zafia","zafio","zafir","zafon","zafra","zafre","zagal","zagas","zagua","zahen","zahon","zaida","zaina","zaino","zajon","zalba","zalbo","zalea","zalee","zaleo","zalla","zalle","zallo","zamba","zambo","zampa","zampe","zampo","zanca","zanco","zanga","zanja","zanje","zanjo","zapan","zapar","zapas","zapea","zapee","zapen","zapeo","zapes","zaque","zarbo","zarca","zarco","zarda","zarja","zarpa","zarpe","zarpo","zarza","zarzo","zasca","zatas","zayas","zebra","zedas","zegri","zeina","zejel","zenda","zendo","zenit","zenon","zetas","ziper","zocan","zocar","zocas","zoclo","zocos","zofra","zoilo","zoizo","zolle","zomas","zombi","zomos","zompa","zompo","zonal","zonas","zonda","zonta","zonto","zonza","zonzo","zopas","zopos","zoque","zorra","zorro","zotal","zotes","zotol","zuavo","zubia","zudas","zueca","zueco","zuela","zuiza","zulia","zulla","zulle","zullo","zumba","zumbe","zumbo","zumos","zungo","zunza","zupia","zurba","zurce","zurci","zurda","zurde","zurdi","zurdo","zurea","zuree","zureo","zuros","zurra","zurre","zurri","zurro","zurza","zurzo","zuzar","zuzon"],
  
        Ia = "present", Ma = "correct", Oa = "absent";
    var Ra = {unknown: 0, absent: 1, present: 2, correct: 3};

    function Pa(e, a) {
        var s = {};
        return e.forEach((function (e, t) {
            if (a[t]) for (var o = 0; o < e.length; o++) {
                var n = e[o], r = a[t][o], i = s[n] || "unknown";
                Ra[r] > Ra[i] && (s[n] = r)
            }
        })), s
    }

    function $a(e) {
        var a = ["th", "st", "nd", "rd"], s = e % 100;
        return e + (a[(s - 20) % 10] || a[s] || a[0])
    }

    var Ha = new Date(2021, 5, 19, 0, 0, 0, 0);

    function Na(e, a) {
        var s = new Date(e), t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
        return Math.round(t / 864e5)
    }

    function get_my_word_index(e) {
        var myword_index, s = Ga(e);
        // choose a random word from the solution list
        return myword_index = s % SOLUTION_LIST.length, SOLUTION_LIST[Math.floor(Math.random() * SOLUTION_LIST.length)]
    }

    function Ga(e) {
        return Na(Ha, e)
    }

    var Ba = "abcdefghijklmnopqrstuvwxyz", Fa = [].concat(g(Ba.split("").slice(13)), g(Ba.split("").slice(0, 13)));

    function Wa(e) {
        for (var a = "", s = 0; s < e.length; s++) {
            var t = Ba.indexOf(e[s]);
            a += t >= 0 ? Fa[t] : "_"
        }
        return a
    }

    var Ya = "statistics", Ja = "fail", Ua = {
        currentStreak: 0,
        maxStreak: 0,
        guesses: n({1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}, Ja, 0),
        winPercentage: 0,
        gamesPlayed: 0,
        gamesWon: 0,
        averageGuesses: 0
    };

    function Xa() {
        var e = window.localStorage.getItem(Ya) || JSON.stringify(Ua);
        return JSON.parse(e)
    }

    function Va(e) {
        var a = e.isWin, s = e.isStreak, t = e.numGuesses, o = Xa();
        a ? (o.guesses[t] += 1, s ? o.currentStreak += 1 : o.currentStreak = 1) : (o.currentStreak = 0, o.guesses.fail += 1), o.maxStreak = Math.max(o.currentStreak, o.maxStreak), o.gamesPlayed += 1, o.gamesWon += a ? 1 : 0, o.winPercentage = Math.round(o.gamesWon / o.gamesPlayed * 100), o.averageGuesses = Math.round(Object.entries(o.guesses).reduce((function (e, a) {
            var s = y(a, 2), t = s[0], o = s[1];
            return t !== Ja ? e += t * o : e
        }), 0) / o.gamesWon), function (e) {
            window.localStorage.setItem(Ya, JSON.stringify(e))
        }(o)
    }

    var Ka = document.createElement("template");
    Ka.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4e3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 28px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n         <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         Wordle EspaÃ±ol \n        </div>\n        <div class="menu">\n          <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n \n     </header>\n        <div id="board-container">\n        <div id="board">Por simplicidad Ã± = n </div>\n      </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
    var Qa = document.createElement("template");
    Qa.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
    var Za = "IN_PROGRESS", es = "WIN", as = "FAIL",
        ss = ["Eres un Genio!!!", "MagnÃ­fico", "Impresionante", "EsplÃ©ndido", "Excelente", "Por un pelo"], ts = function (e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                s(this, t), n(p(e = a.call(this)), "tileIndex", 0), n(p(e), "rowIndex", 0), n(p(e), "solution", void 0), n(p(e), "boardState", void 0), n(p(e), "evaluations", void 0), n(p(e), "canInput", !0), n(p(e), "gameStatus", Za), n(p(e), "letterEvaluations", {}), n(p(e), "$board", void 0), n(p(e), "$keyboard", void 0), n(p(e), "$game", void 0), n(p(e), "today", void 0), n(p(e), "lastPlayedTs", void 0), n(p(e), "lastCompletedTs", void 0), n(p(e), "hardMode", void 0), n(p(e), "dayOffset", void 0), e.attachShadow({mode: "open"}), e.today = new Date;
                var o = za();
                return e.lastPlayedTs = o.lastPlayedTs, !e.lastPlayedTs || Na(new Date(e.lastPlayedTs), e.today) >= 1 ? (e.boardState = new Array(6).fill(""), e.evaluations = new Array(6).fill(null), e.solution = get_my_word_index(e.today), e.dayOffset = Ga(e.today), e.lastCompletedTs = o.lastCompletedTs, e.hardMode = o.hardMode, e.restoringFromLocalStorage = !1, ja({
                    rowIndex: e.rowIndex,
                    boardState: e.boardState,
                    evaluations: e.evaluations,
                    solution: e.solution,
                    gameStatus: e.gameStatus
                }), Ca("event", "level_start", {level_name: Wa(e.solution)})) : (e.boardState = o.boardState, e.evaluations = o.evaluations, e.rowIndex = o.rowIndex, e.solution = o.solution, e.dayOffset = Ga(e.today), e.letterEvaluations = Pa(e.boardState, e.evaluations), e.gameStatus = o.gameStatus, e.lastCompletedTs = o.lastCompletedTs, e.hardMode = o.hardMode, e.gameStatus !== Za && (e.canInput = !1), e.restoringFromLocalStorage = !0), e
            }

            return o(t, [{
                key: "evaluateRow", value: function () {
                    if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
                        var e, a = this.$board.querySelectorAll("game-row")[this.rowIndex],
                            s = this.boardState[this.rowIndex];
                        if (e = s, !WORD_LIST.includes(e) && !SOLUTION_LIST.includes(e)) return a.setAttribute("invalid", ""), void this.addToast("La palabra no estÃ¡ en el diccionario.");
                        if (this.hardMode) {
                            var t = function (e, a, s) {
                                    if (!e || !a || !s) return {validGuess: !0};
                                    for (var t = 0; t < s.length; t++) if (s[t] === Ma && e[t] !== a[t]) return {
                                        validGuess: !1,
                                        errorMessage: "".concat($a(t + 1), " letter must be ").concat(a[t].toUpperCase())
                                    };
                                    for (var o = {}, n = 0; n < s.length; n++) [Ma, Ia].includes(s[n]) && (o[a[n]] ? o[a[n]] += 1 : o[a[n]] = 1);
                                    var r = e.split("").reduce((function (e, a) {
                                        return e[a] ? e[a] += 1 : e[a] = 1, e
                                    }), {});
                                    for (var i in o) if ((r[i] || 0) < o[i]) return {
                                        validGuess: !1,
                                        errorMessage: "Guess must contain ".concat(i.toUpperCase())
                                    };
                                    return {validGuess: !0}
                                }(s, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]), o = t.validGuess,
                                n = t.errorMessage;
                            if (!o) return a.setAttribute("invalid", ""), void this.addToast(n || "Not valid in hard mode")
                        }
                        var r = function (e, a) {
                            for (var s = Array(a.length).fill(Oa), t = Array(a.length).fill(!0), o = Array(a.length).fill(!0), n = 0; n < e.length; n++) e[n] === a[n] && o[n] && (s[n] = Ma, t[n] = !1, o[n] = !1);
                            for (var r = 0; r < e.length; r++) {
                                var i = e[r];
                                if (t[r]) for (var l = 0; l < a.length; l++) {
                                    var d = a[l];
                                    if (o[l] && i === d) {
                                        s[r] = Ia, o[l] = !1;
                                        break
                                    }
                                }
                            }
                            return s
                        }(s, this.solution);
                        this.evaluations[this.rowIndex] = r, this.letterEvaluations = Pa(this.boardState, this.evaluations), a.evaluation = this.evaluations[this.rowIndex], this.rowIndex += 1;
                        var i = this.rowIndex >= 6, l = r.every((function (e) {
                            return "correct" === e
                        }));
                        if (i || l) Va({
                            isWin: l,
                            isStreak: !!this.lastCompletedTs && 1 === Na(new Date(this.lastCompletedTs), new Date),
                            numGuesses: this.rowIndex
                        }), ja({lastCompletedTs: Date.now()}), this.gameStatus = l ? es : as, Ca("event", "level_end", {
                            level_name: Wa(this.solution),
                            num_guesses: this.rowIndex,
                            success: l
                        });
                        this.tileIndex = 0, this.canInput = !1, ja({
                            rowIndex: this.rowIndex,
                            boardState: this.boardState,
                            evaluations: this.evaluations,
                            solution: this.solution,
                            gameStatus: this.gameStatus,
                            lastPlayedTs: Date.now()
                        })
                    }
                }
            }, {
                key: "addLetter", value: function (e) {
                    this.gameStatus === Za && (this.canInput && (this.tileIndex >= 5 || (this.boardState[this.rowIndex] += e, this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]), this.tileIndex += 1)))
                }
            }, {
                key: "removeLetter", value: function () {
                    if (this.gameStatus === Za && this.canInput && !(this.tileIndex <= 0)) {
                        this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
                        var e = this.$board.querySelectorAll("game-row")[this.rowIndex];
                        this.boardState[this.rowIndex] ? e.setAttribute("letters", this.boardState[this.rowIndex]) : e.removeAttribute("letters"), e.removeAttribute("invalid"), this.tileIndex -= 1
                    }
                }
            }, {
                key: "submitGuess", value: function () {
                    if (this.gameStatus === Za && this.canInput) {
                        if (5 !== this.tileIndex) return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast("No hay suficientes letras para una palabra.");
                        this.evaluateRow()
                    }
                }
            }, {
                key: "addToast", value: function (e, a) {
                    var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        t = document.createElement("game-toast");
                    t.setAttribute("text", e), a && t.setAttribute("duration", a), s ? this.shadowRoot.querySelector("#system-toaster").prepend(t) : this.shadowRoot.querySelector("#game-toaster").prepend(t)
                }
            }, {
                key: "sizeBoard", value: function () {
                    var e = this.shadowRoot.querySelector("#board-container"),
                        a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350), s = 6 * Math.floor(a / 5);
                    this.$board.style.width = "".concat(a, "px"), this.$board.style.height = "".concat(s, "px")
                }
            }, {
                key: "showStatsModal", value: function () {
                    var e = this.$game.querySelector("game-modal"), a = document.createElement("game-stats");
                    this.gameStatus === es && this.rowIndex <= 6 && a.setAttribute("highlight-guess", this.rowIndex), a.gameApp = this, e.appendChild(a), e.setAttribute("open", "")
                }
            }, {
                key: "showHelpModal", value: function () {
                    var e = this.$game.querySelector("game-modal");
                    e.appendChild(document.createElement("game-help")), e.setAttribute("open", "")
                }
            }, {
                key: "connectedCallback", value: function () {
                    var e = this;
                    this.shadowRoot.appendChild(Ka.content.cloneNode(!0)), this.$game = this.shadowRoot.querySelector("#game"), this.$board = this.shadowRoot.querySelector("#board"), this.$keyboard = this.shadowRoot.querySelector("game-keyboard"), this.sizeBoard(), this.lastPlayedTs || setTimeout((function () {
                        return e.showHelpModal()
                    }), 100);
                    for (var a = 0; a < 6; a++) {
                        var s = document.createElement("game-row");
                        s.setAttribute("letters", this.boardState[a]), s.setAttribute("length", 5), this.evaluations[a] && (s.evaluation = this.evaluations[a]), this.$board.appendChild(s)
                    }
                    this.$game.addEventListener("game-key-press", (function (a) {
                        var s = a.detail.key;
                        "â†" === s || "Backspace" === s ? e.removeLetter() : "â†µ" === s || "Enter" === s ? e.submitGuess() : Ba.includes(s.toLowerCase()) && e.addLetter(s.toLowerCase())
                    })), this.$game.addEventListener("game-last-tile-revealed-in-row", (function (a) {
                        e.$keyboard.letterEvaluations = e.letterEvaluations, e.rowIndex < 6 && (e.canInput = !0);
                        var s = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                        (a.path || a.composedPath && a.composedPath()).includes(s) && ([es, as].includes(e.gameStatus) && (e.restoringFromLocalStorage ? e.showStatsModal() : (e.gameStatus === es && (s.setAttribute("win", ""), e.addToast(ss[e.rowIndex - 1], 2e3)), e.gameStatus === as && e.addToast(e.solution.toUpperCase(), 1 / 0), setTimeout((function () {
                            e.showStatsModal()
                        }), 2500))), e.restoringFromLocalStorage = !1)
                    })), this.shadowRoot.addEventListener("game-setting-change", (function (a) {
                        var s = a.detail, t = s.name, o = s.checked, n = s.disabled;
                        switch (t) {
                            case"hard-mode":
                                return void (n ? e.addToast("Hard mode can only be enabled at the start of a round", 1500, !0) : (e.hardMode = o, ja({hardMode: o})))
                        }
                    })), this.shadowRoot.getElementById("settings-button").addEventListener("click", (function (a) {
                        var s = e.$game.querySelector("game-page"), t = document.createTextNode("Impostazioni");
                        s.appendChild(t);
                        var o = document.createElement("game-settings");
                        o.setAttribute("slot", "content"), o.gameApp = e, s.appendChild(o), s.setAttribute("open", "")
                    })), this.shadowRoot.getElementById("help-button").addEventListener("click", (function (a) {
                        var s = e.$game.querySelector("game-page"), t = document.createTextNode("Las reglas de Wordle. Â¿CÃ³mo jugar Wordle?");
                        s.appendChild(t);
                        var o = document.createElement("game-help");
                        o.setAttribute("page", ""), o.setAttribute("slot", "content"), s.appendChild(o), s.setAttribute("open", "")
                    })), this.shadowRoot.getElementById("statistics-button").addEventListener("click", (function (a) {
                        e.showStatsModal()
                    })), window.addEventListener("resize", this.sizeBoard.bind(this))
                }
            }, {
                key: "disconnectedCallback", value: function () {
                }
            }, {
                key: "debugTools", value: function () {
                    var e = this;
                    this.shadowRoot.getElementById("debug-tools").appendChild(Qa.content.cloneNode(!0)), this.shadowRoot.getElementById("toast").addEventListener("click", (function (a) {
                        e.addToast("hello world")
                    })), this.shadowRoot.getElementById("modal").addEventListener("click", (function (a) {
                        var s = e.$game.querySelector("game-modal");
                        s.textContent = "hello plz", s.setAttribute("open", "")
                    })), this.shadowRoot.getElementById("reveal").addEventListener("click", (function () {
                        e.evaluateRow()
                    })), this.shadowRoot.getElementById("shake").addEventListener("click", (function () {
                        e.$board.querySelectorAll("game-row")[e.rowIndex].setAttribute("invalid", "")
                    })), this.shadowRoot.getElementById("bounce").addEventListener("click", (function () {
                        var a = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                        "" === a.getAttribute("win") ? a.removeAttribute("win") : a.setAttribute("win", "")
                    }))
                }
            }]), t
        }(c(HTMLElement));
    customElements.define("game-app", ts);
    var os = document.createElement("template");
    os.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
    var ns = function (e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({mode: "open"}), e
        }

        return o(t, [{
            key: "connectedCallback", value: function () {
                var e = this;
                this.shadowRoot.appendChild(os.content.cloneNode(!0)), this.addEventListener("click", (function (a) {
                    e.shadowRoot.querySelector(".content").classList.add("closing")
                })), this.shadowRoot.addEventListener("animationend", (function (a) {
                    "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".content").classList.remove("closing"), e.removeChild(e.firstChild), e.removeAttribute("open"))
                }))
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-modal", ns);
    var rs = document.createElement("template");
    rs.innerHTML = "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
    var is = document.createElement("template");
    is.innerHTML = "\n  <button>key</button>\n";
    var ls = document.createElement("template");
    ls.innerHTML = '\n  <div class="spacer"></div>\n';
    var ds = [["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"], ["-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "-"], ["â†µ", "z", "x", "c", "v", "b", "n", "m", "â†"]],
        us = function (e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t), n(p(e = a.call(this)), "_letterEvaluations", {}), e.attachShadow({mode: "open"}), e
            }

            return o(t, [{
                key: "letterEvaluations", set: function (e) {
                    this._letterEvaluations = e, this._render()
                }
            }, {
                key: "dispatchKeyPressEvent", value: function (e) {
                    this.dispatchEvent(new CustomEvent("game-key-press", {bubbles: !0, composed: !0, detail: {key: e}}))
                }
            }, {
                key: "connectedCallback", value: function () {
                    var e = this;
                    this.shadowRoot.appendChild(rs.content.cloneNode(!0)), this.$keyboard = this.shadowRoot.getElementById("keyboard"), this.$keyboard.addEventListener("click", (function (a) {
                        var s = a.target.closest("button");
                        s && e.$keyboard.contains(s) && e.dispatchKeyPressEvent(s.dataset.key)
                    })), window.addEventListener("keydown", (function (a) {
                        if (!0 !== a.repeat) {
                            var s = a.key, t = a.metaKey, o = a.ctrlKey;
                            t || o || (Ba.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) && e.dispatchKeyPressEvent(s)
                        }
                    })), this.$keyboard.addEventListener("transitionend", (function (a) {
                        var s = a.target.closest("button");
                        s && e.$keyboard.contains(s) && s.classList.remove("fade")
                    })), ds.forEach((function (a) {
                        var s = document.createElement("div");
                        s.classList.add("row"), a.forEach((function (e) {
                            var a;
                            if (e >= "a" && e <= "z" || "â†" === e || "â†µ" === e) {
                                if ((a = is.content.cloneNode(!0).firstElementChild).dataset.key = e, a.textContent = e, "â†" === e) {
                                    var t = document.createElement("game-icon");
                                    t.setAttribute("icon", "backspace"), a.textContent = "", a.appendChild(t), a.classList.add("one-and-a-half")
                                }
                                "â†µ" == e && (a.textContent = "Enviar", a.classList.add("one-and-a-half"))
                            } else (a = ls.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
                            s.appendChild(a)
                        })), e.$keyboard.appendChild(s)
                    })), this._render()
                }
            }, {
                key: "_render", value: function () {
                    for (var e in this._letterEvaluations) {
                        var a = this.$keyboard.querySelector('[data-key="'.concat(e, '"]'));
                        a.dataset.state = this._letterEvaluations[e], a.classList.add("fade")
                    }
                }
            }]), t
        }(c(HTMLElement));

    /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.

      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.

      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
    function cs(e, a, s, t) {
        return new (s || (s = Promise))((function (o, n) {
            function r(e) {
                try {
                    l(t.next(e))
                } catch (e) {
                    n(e)
                }
            }

            function i(e) {
                try {
                    l(t.throw(e))
                } catch (e) {
                    n(e)
                }
            }

            function l(e) {
                var a;
                e.done ? o(e.value) : (a = e.value, a instanceof s ? a : new s((function (e) {
                    e(a)
                }))).then(r, i)
            }

            l((t = t.apply(e, a || [])).next())
        }))
    }

    function ps(e, a) {
        var s, t, o, n, r = {
            label: 0, sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1]
            }, trys: [], ops: []
        };
        return n = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (n[Symbol.iterator] = function () {
            return this
        }), n;

        function i(n) {
            return function (i) {
                return function (n) {
                    if (s) throw new TypeError("Generator is already executing.");
                    for (; r;) try {
                        if (s = 1, t && (o = 2 & n[0] ? t.return : n[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, n[1])).done) return o;
                        switch (t = 0, o && (n = [2 & n[0], o.value]), n[0]) {
                            case 0:
                            case 1:
                                o = n;
                                break;
                            case 4:
                                return r.label++, {value: n[1], done: !1};
                            case 5:
                                r.label++, t = n[1], n = [0];
                                continue;
                            case 7:
                                n = r.ops.pop(), r.trys.pop();
                                continue;
                            default:
                                if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                    r = 0;
                                    continue
                                }
                                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                                    r.label = n[1];
                                    break
                                }
                                if (6 === n[0] && r.label < o[1]) {
                                    r.label = o[1], o = n;
                                    break
                                }
                                if (o && r.label < o[2]) {
                                    r.label = o[2], r.ops.push(n);
                                    break
                                }
                                o[2] && r.ops.pop(), r.trys.pop();
                                continue
                        }
                        n = a.call(e, r)
                    } catch (e) {
                        n = [6, e], t = 0
                    } finally {
                        s = o = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {value: n[0] ? n[1] : void 0, done: !0}
                }([n, i])
            }
        }
    }

    customElements.define("game-keyboard", us), function () {
        (console.warn || console.log).apply(console, arguments)
    }.bind("[clipboard-polyfill]");
    var ms, hs, ys, gs, bs = "undefined" == typeof navigator ? void 0 : navigator,
        fs = null == bs ? void 0 : bs.clipboard;
    null === (ms = null == fs ? void 0 : fs.read) || void 0 === ms || ms.bind(fs), null === (hs = null == fs ? void 0 : fs.readText) || void 0 === hs || hs.bind(fs);
    var ks = (null === (ys = null == fs ? void 0 : fs.write) || void 0 === ys || ys.bind(fs), null === (gs = null == fs ? void 0 : fs.writeText) || void 0 === gs ? void 0 : gs.bind(fs)),
        vs = "undefined" == typeof window ? void 0 : window, ws = (null == vs || vs.ClipboardItem, vs);
    var xs = function () {
        this.success = !1
    };

    function zs(e, a, s) {
        for (var t in e.success = !0, a) {
            var o = a[t], n = s.clipboardData;
            n.setData(t, o), "text/plain" === t && n.getData(t) !== o && (e.success = !1)
        }
        s.preventDefault()
    }

    function js(e) {
        var a = new xs, s = zs.bind(this, a, e);
        document.addEventListener("copy", s);
        try {
            document.execCommand("copy")
        } finally {
            document.removeEventListener("copy", s)
        }
        return a.success
    }

    function Ss(e, a) {
        _s(e);
        var s = js(a);
        return qs(), s
    }

    function _s(e) {
        var a = document.getSelection();
        if (a) {
            var s = document.createRange();
            s.selectNodeContents(e), a.removeAllRanges(), a.addRange(s)
        }
    }

    function qs() {
        var e = document.getSelection();
        e && e.removeAllRanges()
    }

    function Es(e) {
        return cs(this, void 0, void 0, (function () {
            var a;
            return ps(this, (function (s) {
                if (a = "text/plain" in e, "undefined" == typeof ClipboardEvent && void 0 !== ws.clipboardData && void 0 !== ws.clipboardData.setData) {
                    if (!a) throw new Error("No `text/plain` value was specified.");
                    if (t = e["text/plain"], ws.clipboardData.setData("Text", t)) return [2, !0];
                    throw new Error("Copying failed, possibly because the user rejected it.")
                }
                var t;
                return js(e) || navigator.userAgent.indexOf("Edge") > -1 || Ss(document.body, e) || function (e) {
                    var a = document.createElement("div");
                    a.setAttribute("style", "-webkit-user-select: text !important"), a.textContent = "temporary element", document.body.appendChild(a);
                    var s = Ss(a, e);
                    return document.body.removeChild(a), s
                }(e) || function (e) {
                    var a = document.createElement("div");
                    a.setAttribute("style", "-webkit-user-select: text !important");
                    var s = a;
                    a.attachShadow && (s = a.attachShadow({mode: "open"}));
                    var t = document.createElement("span");
                    t.innerText = e, s.appendChild(t), document.body.appendChild(a), _s(t);
                    var o = document.execCommand("copy");
                    return qs(), document.body.removeChild(a), o
                }(e["text/plain"]) ? [2, !0] : [2, !1]
            }))
        }))
    }

    function As(e, a, s) {
        try {
            t = navigator.userAgent || navigator.vendor || window.opera, !/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)) || navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || void 0 === navigator.share || !navigator.canShare || !navigator.canShare(e) ? function (e) {
                return cs(this, void 0, void 0, (function () {
                    return ps(this, (function (a) {
                        if (ks) return [2, ks(e)];
                        if (!Es(function (e) {
                            var a = {};
                            return a["text/plain"] = e, a
                        }(e))) throw new Error("writeText() failed");
                        return [2]
                    }))
                }))
            }(e.text).then(a, s) : navigator.share(e)
        } catch (e) {
            s()
        }
        var t
    }

    var Cs = document.createElement("template");
    Cs.innerHTML = `
    
  <style>
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 16px 0; 
    }
    h1 {
      font-weight: 700;
      font-size: 16px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 10px;
    }
  
    #statistics {
      display: flex;
      margin-bottom: 
    }

    .statistic-container {
      flex: 1;
    }

    .statistic-container .statistic {
      font-size: 36px;
      font-weight: 400;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      letter-spacing: 0.05em;
      font-variant-numeric: proportional-nums;
    }

    .statistic.timer {
      font-variant-numeric: initial;
    }

    .statistic-container .label {
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    #guess-distribution {
      width: 80%;
    }

    .graph-container {
      width: 100%;
      height: 20px;
      display: flex;
      align-items: center;
      padding-bottom: 4px;
      font-size: 14px;
      line-height: 20px;
    }

    .graph-container .graph {
      width: 100%;
      height: 100%;
      padding-left: 4px;
    }

    .graph-container .graph .graph-bar {
      height: 100%;
      /* Assume no wins */
      width: 0%;
      position: relative;
      background-color: var(--color-absent);
      display: flex;
      justify-content: center;
    }

    .graph-container .graph .graph-bar.highlight {
      background-color: var(--color-correct);
    }

    .graph-container .graph .graph-bar.align-right {
      justify-content: flex-end;
      padding-right: 8px;
    }

    .graph-container .graph .num-guesses {
      font-weight: bold;
      color: var(--tile-text-color);
    }

    #statistics,
    #guess-distribution {
      padding-bottom: 10px;
    }

    .footer {
      display: flex;
      width: 100%;
    }

    .countdown {
      border-right: 1px solid var(--color-tone-1);
      padding-right: 12px;
      width: 50%;
    }

    .share {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 12px;
      width: 50%;
    }

    .no-data {
      text-align: center;
    }

    button#share-button {
      background-color: var(--key-bg-absent);
      color: var(--key-evaluated-text-color);
      font-family: inherit;
      font-weight: bold;
      border-radius: 4px;
      cursor: pointer;
      border: none;
      user-select: none;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      -webkit-tap-highlight-color: rgba(0,0,0,0.3);
      /*width: 80%;*/
      font-size: 20px;
      height: 52px;
      -webkit-filter: brightness(100%);
    }
    button#share-button:hover {
      opacity: 0.9;
    }
    button#share-button game-icon {
      width: 24px;
      height: 24px;
      padding: 0px 4px;
    }
    
    button#refresh-button {
      background-color: var(--key-bg-correct);
      color: var(--key-evaluated-text-color);
      font-family: inherit;
      font-weight: bold;
      border-radius: 4px;
      cursor: pointer;
      border: none;
      user-select: none;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      -webkit-tap-highlight-color: rgba(0,0,0,0.3);
      width: 80%;
      margin-left: 16px;
      font-size: 20px;
      height: 52px;
      -webkit-filter: brightness(100%);
    }
    button#refresh-button:hover {
      opacity: 0.9;
    }
    button#refresh-button game-icon {
      width: 24px;
      height: 24px;
      padding-left: 8px;
    }
    
  </style>

  <div class="container">
    <h1>EstadÃ­sticas</h1>
    <div id="statistics"></div>
    <h1>EstadÃ­sticas de intentos</h1>
    <div id="guess-distribution"></div>
    <div class="footer"></div>
  </div>
`;
    var Ls = document.createElement("template");
    Ls.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
    var Ts = document.createElement("template");
    Ts.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
    var Is = document.createElement("template");
    Is.innerHTML = `
    <div class="countdown">
    
    <div id="timer">
  \t<div class="statistic-container">
  \t  <div class="statistic timer">
  \t\t <button id="refresh-button">Juega de nuevo!<game-icon icon="refresh">></game-icon>
  \t  </div>
  \t</div>
    </div>
  </div>
  <div class="share">
    
    <button id="share-button"> Compartir resultados <game-icon icon="share"></game-icon>
    </button>
  
  </div>
`;
    var Ms = {
        currentStreak: "current streak",
        maxStreak: "max streak",
        winPercentage: "% Victorias",
        gamesPlayed: "Jugadas",
        gamesWon: "Vinte",
        averageGuesses: "Av. Guesses"
    }, Os = function (e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), n(p(e = a.call(this)), "stats", {}), n(p(e), "gameApp", void 0), e.attachShadow({mode: "open"}), e.stats = Xa(), e
        }

        return o(t, [{
            key: "connectedCallback", value: function () {
                var e = this;
                this.shadowRoot.appendChild(Cs.content.cloneNode(!0));
                var a = this.shadowRoot.getElementById("statistics"),
                    s = this.shadowRoot.getElementById("guess-distribution"),
                    t = Math.max.apply(Math, g(Object.values(this.stats.guesses)));
                if (Object.values(this.stats.guesses).every((function (e) {
                    return 0 === e
                }))) {
                    var o = document.createElement("div");
                    o.classList.add("no-data"), o.innerText = "No Data", s.appendChild(o)
                } else for (var n = 1; n < Object.keys(this.stats.guesses).length; n++) {
                    var r = n, i = this.stats.guesses[n], l = Ts.content.cloneNode(!0),
                        d = Math.max(7, Math.round(i / t * 100));
                    l.querySelector(".guess").textContent = r;
                    var u = l.querySelector(".graph-bar");
                    if (u.style.width = "".concat(d, "%"), "number" == typeof i) {
                        l.querySelector(".num-guesses").textContent = i, i > 0 && u.classList.add("align-right");
                        var c = parseInt(this.getAttribute("highlight-guess"), 10);
                        c && n === c && u.classList.add("highlight")
                    }
                    s.appendChild(l)
                }
                if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach((function (s) {
                    var t = Ms[s], o = e.stats[s], n = Ls.content.cloneNode(!0);
                    n.querySelector(".label").textContent = t, n.querySelector(".statistic").textContent = o, a.appendChild(n)
                })), this.gameApp.gameStatus !== Za) {
                    var p = this.shadowRoot.querySelector(".footer"), m = Is.content.cloneNode(!0);
                    p.appendChild(m), this.shadowRoot.querySelector("button#share-button").addEventListener("click", (function (a) {
                        a.preventDefault(), a.stopPropagation();
                        As(function (e) {
                            var a = e.evaluations, s = e.dayOffset, t = e.rowIndex, o = e.isHardMode, n = e.isWin,
                                r = JSON.parse(window.localStorage.getItem(j)),
                                i = JSON.parse(window.localStorage.getItem(S)), l = "Wordle EspaÃ±ol ilimitado. Solucionado en ";
                            l += "\n".concat(n ? t : "X", " intentos de ").concat(6), o && (l += "*");
                            var d = "";
                            return a.forEach((function (e) {
                                e && (e.forEach((function (e) {
                                    if (e) {
                                        var a = "";
                                        switch (e) {
                                            case Ma:
                                                a = function (e) {
                                                    return e ? "ðŸŸ§" : "ðŸŸ©"
                                                }(i);
                                                break;
                                            case Ia:
                                                a = function (e) {
                                                    return e ? "ðŸŸ¦" : "ðŸŸ¨"
                                                }(i);
                                                break;
                                            case Oa:
                                                a = function (e) {
                                                    return e ? "â¬›" : "â¬œ"
                                                }(r)
                                        }
                                        d += a
                                    }
                                })), d += "\n")
                            })), {text: "".concat(l, "\n\n").concat(d.trimEnd().concat("\n\n Jugar ahora => https://wordleespanol.org"))}
                        }({
                            evaluations: e.gameApp.evaluations,
                            dayOffset: e.gameApp.dayOffset,
                            rowIndex: e.gameApp.rowIndex,
                            isHardMode: e.gameApp.hardMode,
                            isWin: e.gameApp.gameStatus === es
                        }), (function () {
                            e.gameApp.addToast("Resultados copiados al portapapeles", 2e3, !0)
                        }), (function () {
                            e.gameApp.addToast("Error al compartir", 2e3, !0)
                        }))
                    })), this.shadowRoot.querySelector("button#refresh-button").addEventListener("click", (function (a) {
                        // inject this special value into localStorage to retain hard mode status and also to hide the introductory modal
                        window.localStorage.setItem("gameState", '{"boardState":["","","","","",""],"evaluations":[null,null,null,null,null,null],"rowIndex":0,"solution":null,"gameStatus":"IN_PROGRESS","lastPlayedTs":1,"lastCompletedTs":1,"restoringFromLocalStorage":null,"hardMode":' + e.gameApp.hardMode.toString() + '}');
                        location.reload();
                    }))
                }
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-stats", Os);
    var Rs = document.createElement("template");
    Rs.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
    var Ps = function (e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({mode: "open"}), e
        }

        return o(t, [{
            key: "connectedCallback", value: function () {
                var e = this;
                this.shadowRoot.appendChild(Rs.content.cloneNode(!0)), this.shadowRoot.querySelector(".container").addEventListener("click", (function (a) {
                    a.stopPropagation(), e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""), e.dispatchEvent(new CustomEvent("game-switch-change", {
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            name: e.getAttribute("name"),
                            checked: e.hasAttribute("checked"),
                            disabled: e.hasAttribute("disabled")
                        }
                    }))
                }))
            }
        }], [{
            key: "observedAttributes", get: function () {
                return ["checked"]
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-switch", Ps);
    var $s = document.createElement("template");
    $s.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Adivina la palabra oculta en 6 intentos.</p>\n      <p>Por simplicidad Ã± = n <br> <br>Cada intento debe ser una palabra vÃ¡lida de 5 letras. No puedes indicar palabras que no tengan sentido o letras aleatorias. Pulse el botÃ³n Enviar para enviar la palabra intuida.</p>\n      <p>DespuÃ©s de cada intento el color de las letras cambia para mostrar quÃ© tan cerca estÃ¡s de acertar la palabra. Mira los ejemplos a continuaciÃ³n.</p>\n      <div class="examples">\n        <p><strong>Ejemplos</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="a" evaluation="correct" reveal></game-tile>\n            <game-tile letter="y"></game-tile>\n            <game-tile letter="u"></game-tile>\n            <game-tile letter="d"></game-tile>\n            <game-tile letter="a"></game-tile>\n          </div>\n          <p>La letra <strong>A</strong> estÃ¡ en la palabra y en el lugar correcto.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="c"></game-tile>\n            <game-tile letter="i" evaluation="present" reveal></game-tile>\n            <game-tile letter="n"></game-tile>\n            <game-tile letter="c"></game-tile>\n            <game-tile letter="o"></game-tile>\n          </div>\n          <p>La letra <strong>I</strong> estÃ¡ en la palabra pero en el lugar equivocado.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="j"></game-tile>\n            <game-tile letter="u"></game-tile>\n            <game-tile letter="g"></game-tile>\n            <game-tile letter="a" evaluation="absent" reveal></game-tile>\n            <game-tile letter="r"></game-tile>\n          </div>\n          <p>La letra <strong>A</strong> no estÃ¡ en la palabra en ningÃºn lugar.</p>\n        </div>\n      </div>\n      <p><strong><strong></p>\n    </div>\n  </section>\n';
    var Hs = function (e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({mode: "open"}), e
        }

        return o(t, [{
            key: "connectedCallback", value: function () {
                this.shadowRoot.appendChild($s.content.cloneNode(!0))
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-help", Hs);
    var Ns = document.createElement("template");
    Ns.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
    var Ds = function (e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({mode: "open"}), e
        }

        return o(t, [{
            key: "connectedCallback", value: function () {
                var e = this;
                this.shadowRoot.appendChild(Ns.content.cloneNode(!0)), this.shadowRoot.querySelector("game-icon").addEventListener("click", (function (a) {
                    e.shadowRoot.querySelector(".overlay").classList.add("closing")
                })), this.shadowRoot.addEventListener("animationend", (function (a) {
                    "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".overlay").classList.remove("closing"), Array.from(e.childNodes).forEach((function (a) {
                        e.removeChild(a)
                    })), e.removeAttribute("open"))
                }))
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-page", Ds);
    var Gs = document.createElement("template");
    Gs.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
    var Bs = {
        help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
        settings: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
        backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
        close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
        share: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
        statistics: "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z",
        refresh: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
    }, Fs = function (e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({mode: "open"}), e
        }

        return o(t, [{
            key: "connectedCallback", value: function () {
                this.shadowRoot.appendChild(Gs.content.cloneNode(!0));
                var e = this.getAttribute("icon");
                this.shadowRoot.querySelector("path").setAttribute("d", Bs[e]), "backspace" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)"), "share" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)"), "refresh" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)")
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-icon", Fs);
    var Ws = document.createElement("template");
    Ws.innerHTML = '\n  <div id="timer"></div>\n';
    var Ys = 6e4, Js = 36e5, Us = function (e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            s(this, t), n(p(e = a.call(this)), "targetEpochMS", void 0), n(p(e), "intervalId", void 0), n(p(e), "$timer", void 0), e.attachShadow({mode: "open"});
            var o = new Date;
            return o.setDate(o.getDate() + 1), o.setHours(0, 0, 0, 0), e.targetEpochMS = o.getTime(), e
        }

        return o(t, [{
            key: "padDigit", value: function (e) {
                return e.toString().padStart(2, "0")
            }
        }, {
            key: "updateTimer", value: function () {
                var e, a = (new Date).getTime(), s = Math.floor(this.targetEpochMS - a);
                if (s <= 0) e = "00:00:00"; else {
                    var t = Math.floor(s % 864e5 / Js), o = Math.floor(s % Js / Ys), n = Math.floor(s % Ys / 1e3);
                    e = "".concat(this.padDigit(t), ":").concat(this.padDigit(o), ":").concat(this.padDigit(n))
                }
                this.$timer.textContent = e
            }
        }, {
            key: "connectedCallback", value: function () {
                var e = this;
                this.shadowRoot.appendChild(Ws.content.cloneNode(!0)), this.$timer = this.shadowRoot.querySelector("#timer"), this.intervalId = setInterval((function () {
                    e.updateTimer()
                }), 200)
            }
        }, {
            key: "disconnectedCallback", value: function () {
                clearInterval(this.intervalId)
            }
        }]), t
    }(c(HTMLElement));
    return customElements.define("countdown-timer", Us), e.CountdownTimer = Us, e.GameApp = ts, e.GameHelp = Hs, e.GameIcon = Fs, e.GameKeyboard = us, e.GameModal = ns, e.GamePage = Ds, e.GameRow = x, e.GameSettings = _a, e.GameStats = Os, e.GameSwitch = Ps, e.GameThemeManager = _, e.GameTile = v, e.GameToast = Aa, Object.defineProperty(e, "__esModule", {value: !0}), e
}({});
