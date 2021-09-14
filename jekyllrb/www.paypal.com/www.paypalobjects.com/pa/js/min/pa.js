/*@ 2021 PayPal (v1.5.5) */ ! function() {
    "use strict";
    var t = window.location && window.location.hostname || "",
        c = "https://www.paypalobjects.com",
        e = "//t.paypal.com/ts",
        i = ".paypal.com";
    var n, r;
    n = ".cn", r = t.length, t.substring(r - n.length, r) === n && (c = "https://objects.paypal.cn", e = "//t.paypal.cn/ts", i = ".paypal.cn");
    var a = /\.(paypal(|-here|-businessloan|-borderlesscommerce|inc|corp|-status|-credit)|joinhoney|konfio|paypal-mktg)\.(com|me|co.uk|com.au|mx)$/i,
        g = "https://www.paypal-mktg.com",
        s = c + "/pa/mi/3p/gtag/gtag.js",
        o = c + "/pa/mi/latmconf.js",
        u = "DC-6386697",
        l = "UA-53389718-12",
        d = !1,
        m = "https://www.paypal-mktg.com/pardot/pardot.html",
        f = c + "/pa/mi/3p/fbevents.js",
        p = c + "/pa/mi/3p/bat.js",
        v = c + "/pa/3pjs/tl/5.6.1",
        w = {
            all: /\.paypal(|inc|corp|-status)\.com$/i,
            internal: /\.paypal(inc|corp)\.com$/i
        },
        h = {
            pypl: "ZN_1yNnlIufRcT75CB",
            dev: "ZN_824XgJYopuf0rcx",
            demo: "ZN_5ifKwc3DnZTXMVL",
            ppstatus: "ZN_6X1kz7ll5Vk5V5Q",
            internal: "ZN_5jPIwCvswGiLgu9"
        },
        y = c + "/pa/3pjs/qualtrics/1.56.0/";

    function b() {
        return (new Date).getTime()
    }

    function k(t) {
        return Math.round(parseFloat(t)) || 0
    }

    function C(t) {
        if (!t || t.constructor !== Object && t.constructor !== Array) return t;
        var e, n = t.constructor();
        for (e in t) n[e] = C(t[e]);
        return n
    }

    function _(t, e, n) {
        for (var r in void 0 === n && (n = !0), t = t || {}, e = e || {}) "undefined" != typeof e[r] && (n || !n && "undefined" == typeof t[r]) && (t[r] = e[r]);
        return t
    }

    function A(t, e) {
        e = e || {};
        var n, r = C(t = t || {});
        for (n in e) try {
            e[n].constructor === Object && r[n] && r[n].constructor === Object ? r[n] = A(r[n], e[n]) : r[n] = e[n]
        } catch (a) {
            r[n] = e[n]
        }
        return r
    }

    function E() {
        var a, i = window.crypto || window.msCrypto;
        return (a = function a() {
            var t, e = 2147483647;
            try {
                var n = new Uint32Array(1);
                i.getRandomValues(n), t = n[0] & e
            } catch (r) {
                t = Math.round(e * Math.random())
            }
            return t.toString(16)
        })() + a()
    }

    function P(t, e) {
        var n;
        return function() {
            return t && (n = t.apply(e || this, arguments), t = null), n
        }
    }
    window.PAYPAL = window.PAYPAL || {}, window.fpti = window.fpti || {}, window.fptiserverurl = window.fptiserverurl || e;
    var I = function I() {},
        x = function x() {
            return {}
        };
    "undefined" == typeof JSON && (JSON = {}, JSON.stringify = I, JSON.parse = x, window.JSON = JSON);
    var O, S = "performance" in window && window.performance || {},
        T = function T() {
            return !(!S || "function" != typeof S.getEntries)
        };

    function L(t, e, n) {
        var r = (n = n || {}).domain ? "; Domain=" + n.domain : "",
            a = n.expires ? ((a = new Date).setTime(a.getTime() + 24 * n.expires * 60 * 60 * 1e3), "; expires=" + a.toUTCString()) : "";
        document.cookie = t + "=" + e + r + a + "; path=/; SameSite=None; Secure"
    }

    function D(t) {
        for (var e = document.cookie.split(";"), n = 0; n < e.length; n++) {
            for (var r = e[n];
                " " === r.charAt(0);) r = r.substring(1, r.length);
            if (0 === r.indexOf(t + "=")) return r.substring((t + "=").length, r.length)
        }
        return null
    }

    function N(t) {
        L(t, "", {
            expires: -1
        })
    }
    S && !S.now && (O = S.timing, S.now = function() {
        var t = b() - (O && O.navigationStart || 0);
        return 0 < t ? t : 0
    }), String.prototype.trim || (String.prototype.trim = function() {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
        if (null == this) throw new TypeError("Array.indexOf() - can't convert \"" + this + '" to object');
        var n = isFinite(e) ? Math.floor(e) : 0,
            r = this instanceof Object ? this : new Object(this),
            a = isFinite(r.length) ? Math.floor(r.length) : 0;
        if (a <= n) return -1;
        if (n < 0 && (n = Math.max(a + n, 0)), t === undefined) {
            do {
                if (n in r && r[n] === undefined) return n
            } while (++n < a)
        } else
            do {
                if (r[n] === t) return n
            } while (++n < a);
        return -1
    }), Array.prototype.forEach || (Array.prototype.forEach = function(t) {
        var e;
        if (null == this) throw new TypeError("this is null or not defined");
        var n = Object(this),
            r = n.length >>> 0;
        if ("function" != typeof t) throw new TypeError(t + " is not a function");
        1 < arguments.length && (e = arguments[1]);
        for (var a, i = 0; i < r;) i in n && (a = n[i], t.call(e, a, i, n)), i++
    }), window.document.querySelectorAll || (document.querySelectorAll = function(t, e, n, r, a) {
        var i = document,
            o = i.createStyleSheet();
        for (a = i.all, e = [], n = (t = t.replace(/\[for\b/gi, "[htmlFor").split(",")).length; n--;) {
            for (o.addRule(t[n], "k:v"), r = a.length; r--;) a[r].currentStyle.k && e.push(a[r]);
            o.removeRule(0)
        }
        return e
    });
    var j = {
        s: "sessionStorage",
        l: "localStorage"
    };

    function q(t) {
        var e;
        try {
            e = window[j[t]]
        } catch (n) {
            e = null
        }
        return e
    }

    function R(t, e) {
        var n;
        return n = t ? t.getItem(e) : n
    }

    function M(t, e, n) {
        if (t && n) try {
            t.setItem(e, n)
        } catch (r) {}
    }

    function F(t) {
        return R(q("s"), t)
    }

    function U(t, e) {
        M(q("s"), t, e)
    }

    function B(t) {
        return R(q("l"), t)
    }

    function z(t, e) {
        M(q("l"), t, e)
    }

    function G() {
        return q("l")
    }
    var V = 18e5,
        J = 94608e6,
        Y = "fpti_3p";
    var H = "script";

    function Q(t, e) {
        for (var n in e) n && "undefined" != typeof e[n] && "" !== e[n] && (t = function(t, e, n) {
            if (e && (n || 0 === n || !1 === n)) {
                if ("object" == typeof n) try {
                    n = JSON.stringify(n)
                } catch (r) {
                    n = "_err_"
                } - 1 === t.indexOf("?") && (t += "?"), "?" !== t.charAt(t.length - 1) && (t += "&"), t += e + "=" + encodeURIComponent(n)
            }
            return t
        }(t, n, e[n]));
        return t
    }

    function W(t) {
        var e = {};
        if (!t || void 0 === t) return e;
        if ("object" == typeof t) return t;
        for (var n = (t = (t = "?" === t.charAt(0) ? t.slice(1) : t).replace(/&amp;/g, "&")).split("&"), r = 0; r < n.length; r++) {
            var a = n[r].split("="),
                i = a.shift(),
                a = a.join("=");
            e[i] = decodeURIComponent(a)
        }
        return e
    }

    function Z() {
        var t = window,
            e = "inner";
        return "innerWidth" in window || (e = "client", t = document.documentElement || document.body), {
            width: t[e + "Width"],
            height: t[e + "Height"]
        }
    }

    function $() {
        var t = document.body || {},
            e = document.documentElement || {};
        return function() {
            for (var t = [], e = 0; e < arguments.length; e++) isNaN(arguments[e]) || t.push(arguments[e]);
            return Math.max.apply(Math, t)
        }(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, t.clientHeight, e.clientHeight, 0)
    }

    function K(t) {
        var e;
        t && "undefined" != typeof window && window.Image && ((e = new window.Image(0, 0)).src = t, function() {
            var t = window.navigator.userAgent,
                e = /MSIE|Trident/i.test(t),
                t = (/iPad/i.test(t) || /iPhone/i.test(t)) && /WebKit/i.test(t) && /CriOS/i.test(t);
            if (e || t) return !1;
            return !0
        }() && (e.referrerPolicy = "no-referrer-when-downgrade"))
    }

    function X(t) {
        throw new URIError("fail to load script: " + t.target.src)
    }

    function tt(t, e, n, r) {
        var a, i, o;
        t && (a = document.getElementsByTagName(H)[0], (i = document.createElement(H)).setAttribute("crossorigin", "anonymous"), i.onerror = X, i.src = t, r && "string" == typeof r && "sha" === r.substring(0, 3) && i.setAttribute("integrity", r), e && (o = !1, i.onreadystatechange = i.onload = function() {
            o || e(), o = !0
        }), n && a ? a.parentNode.insertBefore(i, a) : document.body ? document.body.appendChild(i) : et(function() {
            document.body.appendChild(i)
        }))
    }

    function et(t) {
        t = P(t), "complete" === document.readyState ? t() : (nt(window, "load", t), nt(window, "DOMContentLoaded", function() {
            setTimeout(t, 3e3)
        }))
    }

    function nt(t, e, n) {
        if (t)
            if (t.addEventListener) t.addEventListener(e, n, !1);
            else if (t.attachEvent) return t.attachEvent("on" + e, n)
    }

    function rt(t, e, n) {
        if (e)
            if (e.removeEventListener) e.removeEventListener(t, n, !1);
            else if (e.detachEvent) return e.detachEvent("on" + t, n)
    }
    var at = "1.5.5",
        it = "https://t.paypal.com/ts",
        ot = "ce",
        ct = "pt",
        st = "ru",
        ut = "cd",
        lt = "sw",
        dt = "sh",
        ft = "dw",
        pt = "dh",
        gt = "bw",
        mt = "bh";

    function vt(t) {
        t = t && t.data ? t : {
            data: t || {}
        };
        return t
    }

    function wt(t, e) {
        var n = t.url || "undefined" != typeof window && window.fptiserverurl || it,
            r = n.split("?");
        (n = r[0]).match(/^\/\//) && (n = ("undefined" != typeof location && location.protocol || "") + n), n += "?", r[1] && (n += r[1] + "&"), n += "v=" + encodeURIComponent(t.version || at);
        r = {
            t: b(),
            g: (new Date).getTimezoneOffset()
        };
        return e.start && (t = e.end || r.t, e.view = e.view || {}, e.view.t11 = t - e.start, e.start = e.end = undefined), n = Q(n, r), n = Q(n, e)
    }

    function ht(t, e) {
        var n, r = t.onBeaconCreate,
            a = window.fpti && window.fpti.tenant_name || "paypal.com";
        return "undefined" == typeof location || -1 !== location.hostname.indexOf(a) || (a = function() {
            var t = null;
            if (G()) {
                try {
                    var t = B(Y),
                        e = null,
                        n = null,
                        r = null,
                        a = null,
                        i = Date.now(),
                        a = (t ? (e = (t = JSON.parse(t)).vid && t.vid_exp > i ? t.vid : E(), r = t.fpti && t.fpti_exp > i ? t.fpti : E(), n = i + V) : (e = E(), n = i + V, r = E()), i + J);
                    t = {
                        vid: e,
                        vid_exp: n,
                        fpti: r,
                        fpti_exp: a
                    }, z(Y, JSON.stringify(t))
                } catch (o) {}
                return t
            }
        }()) && _(e, {
            "3p_vid": a.vid,
            "3p_fpti": a.fpti
        }), K(n = !r || "function" == typeof r && !1 !== r() ? wt(t, e) : n), n
    }

    function yt(t) {
        var e = vt(t),
            t = ht(e, e.data);
        return {
            data: e.data,
            url: t
        }
    }

    function bt(t, e) {
        var n = vt(t),
            r = n.data;
        r[ct] = document.title, r[st] = document.referrer, r[ut] = window.screen.colorDepth;
        var a = {
            width: (i = window.screen || {}).width,
            height: i.height
        };
        r[lt] = a.width, r[dt] = a.height;
        var i, t = (t = window.screen || {}, i = window.devicePixelRatio || 1, a = k(t.width * i), t = k(t.height * i), 90 === Math.abs(window.orientation) && (i = a, a = t, t = i), {
            width: a,
            height: t
        });
        r[ft] = t.width, r[pt] = t.height;
        t = Z();
        r[gt] = t.width, r[mt] = t.height, r[ot] = navigator.cookieEnabled ? 1 : 0;
        var o = {
            data: n.data,
            url: ""
        };
        return "function" == typeof e ? e(function() {
            return o.url = ht(n, r), o
        }) : o.url = ht(n, r), o
    }
    var kt = {},
        Ct = {},
        _t = -1;

    function At(t) {
        for (var e in t)
            if (t.hasOwnProperty(e)) return !0;
        return !1
    }

    function Et(t, e, n) {
        try {
            t(e, n)
        } catch (a) {
            setTimeout((r = a, function() {
                throw r
            }), 0)
        }
        var r
    }

    function Pt(t, e, n) {
        t(e, n)
    }

    function It(t, e, n, r) {
        var a = Ct[e],
            i = r ? Pt : Et;
        if (Ct.hasOwnProperty(e))
            for (var o in a) a.hasOwnProperty(o) && i(a[o], t, n)
    }

    function xt(t, e, n, r) {
        var a, i, o, r = (i = e, o = r, function() {
            var t = String(a),
                e = t.lastIndexOf(".");
            for (It(a, a, i, o); - 1 !== e;) e = (t = t.substr(0, e)).lastIndexOf("."), It(a, t, i, o)
        });
        return !! function(t) {
            for (var e = String(t), n = Boolean(Ct.hasOwnProperty(e) && At(Ct[e])), r = e.lastIndexOf("."); !n && -1 !== r;) r = (e = e.substr(0, r)).lastIndexOf("."), n = Boolean(Ct.hasOwnProperty(e) && At(Ct[e]));
            return n
        }(a = t) && (!0 === n ? r() : setTimeout(r, 0), !0)
    }

    function Ot() {
        var t, e = [],
            n = {
                director: "application/x-director",
                mediaplayer: "application/x-mplayer2",
                pdf: "application/pdf",
                quicktime: "video/quicktime",
                real: "audio/x-pn-realaudio-plugin",
                silverlight: "application/x-silverlight"
            };
        for (t in n) ! function(t) {
            var e = navigator.mimeTypes;
            if (e && e.length) {
                e = e[t];
                return e && e.enabledPlugin
            }
        }(n[t]) || e.push(t);
        var r, a, i, i = (i = null, navigator.plugins && 0 < navigator.plugins.length && (r = "application/x-shockwave-flash", (a = navigator.mimeTypes) && a[r] && a[r].enabledPlugin && a[r].enabledPlugin.description && (i = a[r].enabledPlugin.description)), i);
        return i && e.push(i), e.join(",")
    }
    kt.publish = function(t, e) {
        return xt(t, e, !1, kt.immediateExceptions)
    }, kt.subscribe = function(t, e) {
        if ("function" != typeof e) return !1;
        Ct.hasOwnProperty(t) || (Ct[t] = {});
        var n = "uid_" + String(++_t);
        return Ct[t][n] = e, n
    };
    var St, Tt, Lt = "pa-marked",
        Dt = "data-pa-click",
        Nt = "data-pa-exit",
        jt = "data-pa-download",
        qt = "MI_ERROR",
        Rt = "cookie_prefs",
        Mt = "enforce_policy",
        Ft = "pa.linkParam",
        Ut = "la.leadGenParam",
        Bt = {
            BEACON: "pa.beacon",
            INIT: "pa.init",
            LATM: "pa.latm",
            REPLAYBEACON: "pa.replay"
        },
        zt = "tenant_ts",
        Gt = "comp",
        Vt = "component",
        Jt = "paypalobjects.com",
        Yt = {
            PRE: "_fpti"
        },
        Ht = {
            TP_ID: "fpti.tp",
            TK_ID: "fpti.tk"
        },
        Qt = {
            LEN: 512,
            HTML_RX: /<[^>]*>/g
        },
        Wt = {
            GA: "ga",
            DC: "dc",
            FB_XOOM: "fb_xoom",
            BING: "bing",
            GADS: "gads",
            PD: "pd",
            PPSHOP: "ppshop",
            GAD: "gad",
            SFIS: "sfis",
            DIALOGFLOW: "dialogflow"
        },
        Zt = "T",
        $t = {
            apac: "au|c2|cn|hk|id|in|jp|kr|my|nz|ph|sg|th|tw|vn",
            emea: "ad|ae|af|al|am|ao|aq|at|ax|az|ba|be|bf|bg|bh|bi|bj|bv|bw|by|cd|cf|cg|ch|ci|ck|cm|cs|cv|cy|cz|de|dj|dk|dz|ee|eg|eh|er|es|et|fi|fo|fr|fx|ga|gb|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gw|hm|hr|hu|ie|il|im|iq|ir|is|it|je|jo|ke|kg|km|kw|kz|lb|li|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mk|ml|mq|mr|mt|mu|mw|mz|na|nc|ne|ng|nl|no|om|pf|pl|pm|ps|pt|qa|re|ro|rs|ru|rw|sa|sc|sd|se|sh|si|sj|sk|sl|sm|sn|so|st|sy|sz|td|tf|tg|tj|tm|tn|tr|tz|ua|ug|uz|va|wf|ye|yt|yu|za|zm|zw",
            latam: "ag|ai|an|ar|aw|bb|bm|bo|br|bs|bz|cl|co|cr|dm|do|ec|fk|gd|gt|gy|hn|jm|kn|ky|lc|ms|mx|ni|pa|pe|py|sr|sv|tc|tt|uy|vc|ve|vg",
            na: "^us|ca"
        },
        Kt = ["locale.x", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "dclid", "gclid", "param", "fbclid", "gclsrc", "activate", "pid", "kid"],
        Xt = {
            redactedEmail: /([a-z0-9_\-.+]+)@\w+(\.\w+)*/gi,
            redactedUSSSN: /\b\d{3}[ -.]\d{2}[ -.]\d{4}\b/g,
            redactedIPAddress: /(\d{1,3}(\.\d{1,3}){3}|[0-9A-F]{4}(:[0-9A-F]{4}){5}(::|(:0000)+))/gi,
            redactedZipCode: /((postcode=)|(zipcode=)|(zip=))[^&/?]+/gi,
            redactedUserName: /((username=)|(login=)|(userid))[^&/?]+/gi,
            redactedPassword: /((password=)|(passwd=)|(pass=))[^&/?]+/gi,
            redactedCredentials: /(login( cred(ential)?s| info(rmation)?)?|cred(ential)?s) ?:\s*\S+\s+\/?\s*\S+/gi,
            redactedVisaCreditCard: /\b4[0-9]{12}(?:[0-9]{3})?\b/gi,
            redactedDinersCard: /\b3(?:0[0-5]|[68][0-9])[0-9]{11}\b/gi,
            redactedMasterCard: /\b(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}\b/gi,
            redactedAmexCard: /\b3[47][0-9]{13}\b/gi,
            redactedDiscoverCard: /\b6(?:011|5[0-9]{2})[0-9]{12}\b/gi,
            redactedTelNumber: /((tel=)|(telephone=)|(phone=)|(mobile=)|(mob=))[\d+\s][^&/?]+/gi,
            redactedName: /((firstname=)|(lastname=)|(surname=))[^&/?]+/gi
        },
        te = "auto_cpl",
        ee = "qualtricsTarget";

    function ne(t, e) {
        return t && t.data && "string" == typeof t.data && (t.data = W(t.data)), e && e.data && "string" == typeof e.data && (e.data = W(e.data)), A(t, e)
    }

    function re(t, e) {
        var n = [];
        if ((e = e || document).querySelectorAll) {
            var r = e.querySelectorAll(t);
            if ("object" != typeof r && "function" != typeof r || "number" != typeof r.length) "object" == typeof r && (n = r);
            else
                for (var a = 0; a < r.length; a++) n.push(r[a])
        }
        return n
    }

    function ae() {
        var t = !1,
            e = function() {
                var t, e = null;
                try {
                    !G() || (!(e = +B(t = "pa_feature_mod")) || e < 0 || 100 < e) && z(t, e = Math.floor(Math.random() * Math.floor(100)))
                } catch (n) {}
                return e
            }();
        return t = e && e < "1" ? !0 : t
    }

    function ie(t, e) {
        return t.getAttribute("data-pa-" + e) || t.getAttribute(e)
    }

    function oe(t, e) {
        var n = {},
            e = ce(t, e);
        if (e)
            if (0 === e.indexOf("{")) try {
                e = e.replace(/\\"/gi, '"'), n = e = JSON.parse(e)
            } catch (r) {} else n.link = e;
        e = ie(t, "page");
        e && (n.page = e);
        e = ie(t, "pgrp");
        e && (n.pgrp = e);
        t = ie(t, "link");
        return t && (n.link = t), n
    }

    function ce(t, e) {
        var n;
        return n = (n = (n = e ? ie(t, e) : n) || (ie(t, "id") || ie(t, "name") || ie(t, "data-name") || ie(t, "class") || ie(t, "href") || ie(t, "alt") || function a(t) {
            for (var e = t.childNodes, n = null, r = 0; r < e.length; r++) {
                if (3 === (n = e[r]).nodeType && n.nodeValue && n.nodeValue.match(/\S/)) return n.nodeValue.trim();
                if (1 === n.nodeType && n.childNodes.length) return a(n)
            }
        }(t))) && ("string" != typeof n || 0 === n.indexOf("<")) ? "" : n
    }

    function se(t, e) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }

    function ue(t, e) {
        var n = "";
        if ("string" == typeof t && "string" == typeof e) {
            t = t.split(",");
            for (var r = 0; r < t.length; r++) r !== t.length - 1 ? n += e.trim() + " " + t[r].trim() + ", " : n += e.trim() + " " + t[r].trim()
        } else n = t;
        return n
    }
    var le = {
        pp: /\.paypal\.com$/,
        tl: /www\.paypal\.com$/,
        ql: w.all,
        all: a
    };

    function de(t, e) {
        var n = !1,
            e = e || window.location && window.location.hostname || "";
        return n = le[t = t || "all"].test(e) ? !0 : n
    }

    function fe(t, e, n) {
        try {
            var r = e.replace("[", ".").replace("]", "").split(".").reduce(function(t, e) {
                return t && t[e] ? t[e] : n
            }, t);
            return 0 === e.indexOf("laDataLayer") ? r : Ie(r)
        } catch (a) {
            return Ie(n)
        }
    }

    function pe(t) {
        var e = {},
            t = t || D("ts") || D("ts_c"),
            t = decodeURIComponent(t);
        if (t)
            for (var n = t.split("&"), r = 0; r < n.length; r++) {
                var a = n[r] && n[r].split("=");
                a[0] && a[1] && (e[a[0]] = a[1])
            }
        return e
    }

    function ge(t) {
        var e = W(window.location.search || t || ""),
            n = {};
        if (!e || void 0 === e) return n;
        for (var r = 0, a = Object.keys(e); r < a.length; r++) {
            var i = a[r],
                o = i.split("."),
                c = o.shift();
            c && c === Yt.PRE && (n[o.join(".")] = function(t) {
                if (!t || "string" != typeof t) return "";
                var e = t.replace(Qt.HTML_RX, "");
                if (t.length >= Qt.LEN) return e.substring(0, Qt.LEN);
                return e
            }(e[i]))
        }
        return n
    }

    function me(t) {
        t && void 0 !== t && (t.constructor === Object && function(t) {
            if (!t || void 0 === t || "object" != typeof t) return 1;
            for (var e in t)
                if (t.hasOwnProperty(e)) return;
            return 1
        }(t) || U(Ht.TP_ID, JSON.stringify(t)))
    }

    function ve(t) {
        var e, n = Tt,
            r = St;
        return void 0 !== r && n || (n = function() {
            var t, e = F(Ht.TP_ID);
            if (e) try {
                t = JSON.parse(e)
            } catch (n) {}
            return t
        }() || ge() || {}, r = F(Ht.TK_ID) || n.tk || "", n.tk && delete n.tk, Tt = n, (e = St = r) && void 0 !== e && "string" == typeof e && U(Ht.TK_ID, e), me(n)), t.data.tk = r, t.data = se(n, t.data), t
    }

    function we() {
        var t = he("location.host") + he("location.pathname");
        return t = t && "string" == typeof t ? (t = -1 !== t.indexOf("&") ? t.substr(0, t.indexOf("&")) : t).replace(/\/$/, "") : t
    }

    function he(t) {
        return fe(window, t)
    }

    function ye(t, e) {
        t.url && (PAYPAL.analytics.beaconURL = t.url), e.data || (e = {
            data: e
        }), kt.publish(Bt.BEACON, e)
    }

    function be(t) {
        t = ve(t = vt(t)), ye(yt(t), t)
    }

    function ke(t) {
        t = t || Kt;
        var e = {},
            n = he("location.search");
        if (n && t)
            for (var r, a = /\+/g, i = /([^&=]+)=?([^&]*)/g, o = function o(t) {
                    return decodeURIComponent(t.replace(a, " "))
                }, c = n.substring(1); null !== (r = i.exec(c));) 0 <= t.indexOf(r[1]) && (e[o(r[1])] = o(r[2]));
        return e
    }

    function Ce(t, e, n) {
        e = e || "=", n = n || ",";
        var r, a = [];
        for (r in t) a.push([r, t[r]].join(e));
        return a.join(n)
    }

    function _e(t, e) {
        var n = fe(window, t) || null;
        if (n)
            for (var r in e)
                if (0 < n.indexOf(r)) return e ? e[r] : r
    }

    function Ae(t, e) {
        var n;
        if (t = t || "la") {
            switch (t) {
                case "la":
                    n = "_la=1.paypal." + Ee(e) + "." + function() {
                        var t = pe();
                        if (t) {
                            t.vt = t.vt || 0, t.vr = t.vr || 0;
                            t = t.vt + "." + t.vr;
                            return encodeURIComponent(t)
                        }
                    }();
                    break;
                case "ga":
                case "gtag":
                    (window.ga || window.gtag) && (n = window.ga.getAll()[0].get("linkerParam"));
                    break;
                default:
                    n = ""
            }
            return n
        }
        return ""
    }

    function Ee(t) {
        if (!1 !== t) {
            t = window.navigator.userAgent;
            if (t) return function(t) {
                var e = 0;
                if (0 === t.length) return e;
                for (var n = 0; n < t.length; n++) {
                    var r = t.charCodeAt(n);
                    e = (e << 5) - e + r, e &= e
                }
                return Math.abs(e)
            }(t)
        }
        return 0
    }
    var Pe = function Pe(t) {
            var e = window.latmconf;
            if (t === undefined || null === t || "" === t) return "";
            var n = e && e.loadRedactRegEx ? e.loadRedactRegEx() : Xt;
            try {
                if ("string" == typeof t)
                    for (var r in n) t = decodeURIComponent(t).replace(RegExp(n[r]), r);
                else if ("boolean" == typeof t || "number" == typeof t) return t
            } catch (a) {
                t = "REDACTED"
            }
            return t
        },
        Ie = function Ie(t) {
            if (t === {} || t === [] || t === undefined || null === t || "" === t) return "";
            try {
                if (t.constructor === Object)
                    for (var e in t) "object" == typeof t[e] ? t[e] = Ie(t[e]) : t[e] = Pe(t[e]);
                else if (t.constructor === Array)
                    for (var n = 0; n < t.length; n++) t[n] = Pe(t[n]);
                else t.constructor !== String && t.constructor !== Boolean && t.constructor !== Number || (t = Pe(t))
            } catch (r) {
                t = "REDACTED"
            }
            return t
        };

    function xe(t, e) {
        t[e] && delete t[e]
    }
    Number.isInteger = Number.isInteger || function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    };
    var Oe = "00000".length,
        Se = {
            0: "",
            1: "akamai",
            2: "fastly-test",
            3: "fastly"
        };

    function Te(t, e) {
        e = 1 < arguments.length && e !== undefined ? e : 0, t = decodeURIComponent(t).split(":")[0];
        return Number.isInteger(+t) ? (t = function(t, e) {
            var n = 0;
            if (9 < e || e < 0) return n;
            var r = "";
            return (r = Number.isInteger(+t) ? t.toString() : r).length > Oe && (r = ""), t = Math.max(r.length, e), +(n = r.charAt(t - e - 1) || 0)
        }(t, e), t = Se[t] || t || "") : 0 < e && (t = ""), t
    }
    var Le = 1,
        De = 0,
        Ne = window.navigator,
        je = Ne.userAgent;

    function qe() {
        var t, e = D("_ga");
        return e && (-1 === e.indexOf("GA1") || 4 === (e = e.split(".")).length && (t = [e[2], e[3]].join(".")), t = t && encodeURIComponent(t)), t
    }

    function Re(t) {
        return Number(t) === t && 0 <= t
    }

    function Me(t, e) {
        var n = 0;
        return n = Re(e) && Re(t) && e <= t ? k(n = 12e4 < (n = t - e) ? 0 : n) : n
    }
    var Fe = function Fe() {
        return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(je) ? "Tablet" : /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(je) ? "Mobile" : "Desktop"
    };
    var Ue = 0,
        Be = !1,
        ze = 6e4,
        Ge = 31e3,
        Ve = /^xmlhttprequest|fetch/i,
        Je = /^xmlhttprequest|fetch|iframe|script/i,
        Ye = 0,
        He = 4,
        Qe = 50 * He + 25;

    function We() {
        return S && S.now && S.timing ? Math.round(S.now() + S.timing.navigationStart) : b()
    }

    function Ze(t) {
        var e = [];
        return e = S && "function" == typeof S.getEntriesByType ? S.getEntriesByType(t) : e
    }

    function $e(t) {
        return t.loadEventEnd || t.loadEventStart || t.domComplete || t.domInteractive
    }

    function Ke(t, e) {
        t = t || {};
        var n, r, a, i, o, c, s, u, l, d, f = {},
            p = (e = e || {}).data || {};
        return S && (n = S.now(), r = Ze("navigation")[0], a = (u = Ze("paint"))[u.length - 1], d = 0, i = {}, o = S.timing, c = e.data && "setup" === e.data.imsrc, l = !Be && "pf" !== t.e && c, c && Ye++, o && l && (u = (s = r || o).secureConnectionStart || s.connectEnd, e = s.startTime || s.navigationStart, l = $e(s), f.t1 = Me(s.requestStart, s.fetchStart), f.t1c = Me(s.connectEnd, s.fetchStart), f.t1d = Me(s.domainLookupEnd, s.domainLookupStart), f.t1s = Me(s.connectEnd, u), f.t2 = Me(s.responseStart, s.requestStart), f.t3 = Me(s.responseEnd, s.responseStart), f.t4d = Me(s.domComplete, s.domLoading), f.t4 = Me(l, s.domLoading), f.t4e = Me(l, s.loadEventStart), f.tt = k(s.duration) || Me(l, e), d = Me(s.requestStart, e), r && (f.protocol = r.nextHopProtocol, f.rdc = r.redirectCount || 0, i.nt = r.type), o.msFirstPaint ? i.tcp = Me(o.msFirstPaint, o.navigationStart) : a ? i.tcp = k(a.startTime) : r && (i.tcp = k(r.domInteractive)), navigator.connection && (i.et = navigator.connection.effectiveType)), t.view || (d = {
            t10: d
        }, p = p.view && p.view._t11s, c && 1 === Ye || !p ? d.t11 = k(n) : (c && 1 < Ye || p) && (d.t11 = k(n - p)), d.t11 = d.t11 > Qe ? d.t11 - Qe : d.t11, (d.t11 < 0 || d.t11 > ze) && (d.t11 = f.tt || 0), i.tcp && (d.tcp = i.tcp), i.et && (d.et = i.et), i.nt && (d.nt = i.nt), f.view = d, en(f, !0))), PAYPAL.analytics.perf = f
    }

    function Xe(t, e) {
        var n, r, a, i, o = S.getEntries(),
            c = !0;
        if (-1 !== t.indexOf("://") && (c = !1), o)
            for (var s = o.length - 1; 0 < s; s--) {
                var u = o[s];
                if ((!e || u.initiatorType === e) && (c && -1 !== u.name.indexOf(t) || !c && u.name === t)) {
                    i = a = r = void 0, r = {}, a = (u = u).secureConnectionStart || u.connectEnd, i = u.responseStart || u.requestStart || u.fetchStart, r.t1 = Me(u.requestStart, u.fetchStart), r.t1c = Me(u.connectEnd, u.fetchStart), r.t1d = Me(u.domainLookupEnd, u.domainLookupStart), r.t1s = Me(u.connectEnd, a), r.t2 = Me(u.responseStart, u.requestStart), r.t3 = Me(u.responseEnd, i), r.tt = k(u.duration), r.protocol = u.nextHopProtocol, n = r;
                    break
                }
            }
        return n
    }

    function tn() {
        var t = S.getEntries(),
            e = 0 === Ue ? t : t.slice(Ue);
        Ue = t.length;
        var n, r = ae(),
            t = {
                rtt: (t = Xe("/ts?", "img")) && t.tt || 0,
                view: {}
            },
            a = {
                scr: {
                    startTimes: [],
                    responseEnds: [],
                    t9: 0,
                    t12: 0,
                    t13: 0,
                    cnt: 0
                },
                xhr: []
            };
        for (n in r && e.forEach(function(t) {
                var e = t.initiatorType,
                    n = t.name || "";
                "script" === e ? (a.scr.startTimes.push(t.startTime), a.scr.responseEnds.push(t.responseEnd), 0 < t.redirectStart && (a.scr.t13 += t.redirectEnd - t.redirectStart), t.duration > a.scr.t12 && (a.scr.t12 = t.duration), a.scr.cnt++) : "" !== e && !Ve.test(e) || -1 !== n.indexOf(Jt) || a.xhr.push({
                    nm: function(t) {
                        var e = document.createElement("a");
                        e.href = t;
                        var n = e.pathname.replace(/\/*$/, ""),
                            n = (n = -1 !== (t = n.indexOf("&")) ? n.substr(0, t) : n).split("/");
                        return -1 === (e = e.hostname).indexOf("paypal.com") && -1 === e.indexOf(Jt) ? n.join("").length ? e + "/./" + n.pop() : e : n.join("").length ? n.slice(-2).join("/") : "/"
                    }(t.name),
                    t9: k(t.duration),
                    ta: k(t.fetchStart)
                })
            }), a.scr.t9 = Math.max.apply(null, a.scr.responseEnds) - Math.min.apply(null, a.scr.startTimes), a.scr.t9 = a.scr.t9 < 0 || null === a.scr.t9 && "object" == typeof a.scr.t9 ? a.scr.t12 : a.scr.t9, a)
            if (delete a[n].startTimes, delete a[n].responseEnds, "xhr" !== n) {
                for (var i in a[n]) a[n][i] = k(a[n][i]);
                a[n].cnt || delete a[n]
            } else a[n].length || delete a[n];
        return t.res = a, t
    }

    function en(t, e) {
        var n, r = t.res;
        !T() || !e && r || (n = tn(), r = r ? ne(r, n.res) : n.res, t.res = r),
            function(t, e) {
                (e = e || {}).rtt && (t.rtt = e.rtt), 0 <= e.rdc && (t.rdc = e.rdc);
                var n = t.view = t.view || {};
                n.t10 = n.t10 || t.t1 || 0, n.t11 = n.t11 || 0, n.t11 < n.tcp && (n.t11 = n.tcp), n.t10 > n.t11 && (n.t10 = 0), n.t11 > Ge && (n.t11 = Ge), (e = e.view) && (e.tcp && (n.tcp = e.tcp), e.nt && (n.nt = e.nt), e.dbs && (n.dbs = e.dbs), e.ebs && (n.ebs = e.ebs))
            }(t, n)
    }

    function nn(e) {
        var n, r = We(),
            a = r,
            i = 0,
            o = 0,
            c = function(t) {
                t = t || He;
                for (var e = [], n = "", r = !1, a = 0; a < t; a++) e.push(0), n += "1";
                return {
                    push: function(t) {
                        0 !== (t = +t) && 1 !== t && (t = 0), e.shift(), e.push(t)
                    },
                    skip: function() {
                        r = !0
                    },
                    isTrue: function() {
                        var t = e.join("");
                        return r = r || t === n
                    }
                }
            }(),
            s = !1;

        function u(t) {
            return clearInterval(n), s = !1, e(t)
        }

        function t() {
            var t = We(),
                e = t - a,
                n = t - r;
            if (a = t, PAYPAL.analytics.isUnloading) u(n);
            else {
                for (1e4 < n && (c.skip(), s = !0); 105 < e;) i++, o++, e -= 50;
                i++, 55 < e && o++;
                t = Math.round(o / i * 100);
                o = i = 0, c.push(t < 25), c.isTrue() && !s && (t = Ze("resource"), s = function(t) {
                    var e = !0,
                        n = S && S.timing;
                    if (n && (0 === $e(n) && (e = !1), t))
                        for (var r = 0; r < t.length; r++) {
                            var a = t[r];
                            if (Je.test(a.initiatorType) && 0 === a.responseEnd) {
                                e = !1;
                                break
                            }
                        }
                    if (e)
                        for (var i = re("[type=submit][disabled]"), o = 0; o < i.length; o++)
                            if (0 < i[o].clientHeight) {
                                e = !1;
                                break
                            }
                    return e || (n = (n = (n = document.activeElement) && n.tagName || "body").toLowerCase(), -1 === ["body", "a"].indexOf(n) && (e = !0)), e
                }(t)), s && c.isTrue() && u(Qe < n ? n - Qe : n)
            }
        }
        setTimeout(function() {
            n = setInterval(t, 50)
        }, 25)
    }
    kt.subscribe(Bt.BEACON, function(t, e) {
        var n = e && (e.e || e.data && e.data.e),
            e = e && e.data && e.data.imsrc;
        "im" === n && "setup" === e && (Be = !0)
    }), PAYPAL.analytics = PAYPAL.analytics || {};
    var rn = PAYPAL.analytics;
    rn.options = {}, rn.settings = "", rn.beaconURL = "";
    var an = {},
        on = {},
        cn = !1;

    function sn() {
        var t = {};
        if (window._ifpti && window.fpti)
            for (var e in t = C(window._ifpti), window.fpti) "undefined" != typeof window.fpti[e] && window.fpti[e] !== window._ifpti[e] && (t[e] = window.fpti[e]);
        return t
    }

    function un(t) {
        xe(t, "view"), xe(t, "event_name")
    }

    function ln(t) {
        t && (un(t = C(t)), window.fpti = t, window._ifpti = C(window.fpti))
    }

    function dn(t) {
        var e = D(Rt);
        e && (t.data.c_prefs = decodeURIComponent(e));
        e = D(Mt);
        e && (t.data.ef_policy = decodeURIComponent(e));
        e = qe();
        e && (t.data.gacook = e), ve(t)
    }
    var fn = {};

    function pn(t, e, n) {
        var r = 2 < arguments.length && n !== undefined ? n : {},
            n = t.imIdentifier;
        an[n] && (xe(an, n), _(t.data, r), rn._imInProgress = !1, ye(e(), t), (e = D("x-cdn")) && (t = Te(e, 1), e = Te(e, 2), !fn.t && t && (fn.t = rn.resourceCPL("//t.paypal.", {
            event_name: "t_paypal_cpl",
            cdn: t
        })), !fn.c && e && (fn.c = rn.resourceCPL("//c.paypal.", {
            event_name: "c_paypal_cpl",
            cdn: e
        }))))
    }

    function gn(e, n, t) {
        var r, a, i, o = 2 < arguments.length && t !== undefined ? t : {};
        e.trackLazyData && e.data.page && e.data.pgrp && !PAYPAL.analytics.isUnloading ? (r = 0, a = e.lazyDataId, i = setInterval(function() {
            var t = on[a];
            (t || 155 === r || PAYPAL.analytics.isUnloading) && (clearInterval(i), xe(on, a), o = _(o, t), pn(e, n, o)), ++r
        }, 200)) : pn(e, n, o)
    }

    function mn(t, e, n) {
        var r = 2 < arguments.length && n !== undefined ? n : 0,
            a = rn.cpl && rn.cpl[te] && rn.cpl[te].beaconData || {},
            n = a.view && a.view._t11s || 0,
            a = t.data.view._t11s || 0;
        t.data.view._t11s = Math.min.apply(null, [n, a].filter(Boolean));
        t = Ke(e, t);
        return t.view && (t.view.bt = r), e = _(e, t)
    }
    rn.Analytics = function(t) {
        this._init(t)
    }, rn.Analytics.prototype = {
        version: "1.5.5",
        options: {
            request: {
                data: {},
                unloadDelay: !1,
                onBeaconCreate: I
            }
        },
        _delayUnloadUntil: null,
        _lastForm: null,
        _lastInput: null,
        _init: function(t) {
            this.setOptions(t), this._enableUnloadDelay(), this._setTenantDetails()
        },
        _enableUnloadDelay: function() {
            var t = this;
            rn.isUnloading = !1;
            var e = function e() {
                if (rn._imInProgress || rn.setup._onLoadImpression(), Object.keys(an).forEach(function(t) {
                        var e, n, r = an[t];
                        r && (e = r.options, n = r.recordCallback, t = r.hasCPL, r = r.eventData || {}, t || (r = mn(e, r)), t = e.lazyDataId, on[t] && (r = _(r, on[t]), xe(on, t)), pn(e, n, r))
                    }), rn.isUnloading = !0, t._delayUnloadUntil)
                    for (;
                        (new Date).getTime() < t._delayUnloadUntil;);
            };
            rt("beforeunload", window, e), nt(window, "beforeunload", e)
        },
        _setTenantDetails: function() {
            var t = function(t) {
                if (t = fe(ke([t]), t)) {
                    t = t.split(".");
                    if (5 === t.length) return {
                        version: t[0],
                        tenant: t[1],
                        dfp: t[2],
                        vt: t[3],
                        vr: t[4]
                    }
                }
            }("_la");
            if (t && t.tenant && t.vr && "0" !== t.vr && t.vt && "0" !== t.vt && ("0" === t.dfp || t.dfp === "" + Ee())) {
                xe(t, "dfp"), xe(t, "version");
                for (var e = function() {
                        var t = [];
                        try {
                            var e = D(zt),
                                n = decodeURIComponent(e);
                            if (e && n)
                                for (var r = n.split("|"), a = 0; a < r.length; a++) {
                                    var i = r[a] && pe(r[a]);
                                    i && i.tenant && i.vr && i.vt && t.push(i)
                                }
                        } catch (o) {
                            N(zt)
                        }
                        return t
                    }(), n = -1, r = 0; r < e.length; r++)
                    if (e[r] && e[r].tenant === t.tenant) {
                        n = r;
                        break
                    } - 1 === n ? e.push(t) : e[n] = t;
                var a = function(t) {
                    return 1 === (t = (0 < arguments.length && t !== undefined ? t : []).map(function(t) {
                        return Ce(t, "=", "&")
                    })).length ? t[0] : 1 < t.length ? t.join("|") : ""
                }(e);
                a && L(zt, encodeURIComponent(a), {
                    domain: i
                })
            }
        },
        _recordEvent: function(t, e) {
            e.data = e.data || {}, e.data = _(e.data, t), this.record(e)
        },
        getTimeNow: We,
        _getLastFormFocusedValue: function() {
            var t = "";
            return t = this._lastForm ? this._lastForm.getAttribute("name") || this._lastForm.getAttribute("id") || "" : t
        },
        _getLastInputFocusedValue: function() {
            var t = "";
            return t = this._lastInput ? this._lastInput.getAttribute("name") || this._lastInput.getAttribute("id") || "" : t
        },
        _getElements: function(t) {
            var e = [];
            if (t)
                if ("string" == typeof t) e = re(t);
                else if ("object" == typeof t)
                for (var n in t) t.hasOwnProperty(n) && 1 === t[n].nodeType && e.push(t[n]);
            else 1 === t.nodeType && e.push(t);
            return e
        },
        _click: function(t) {
            t = t && t.getAttribute("href");
            t && (window.location.href = t)
        },
        setOptions: function(t) {
            var e = (t = t || {}).request && t.request.data;
            e && (delete t.request.data, "string" == typeof e && (e = W(e)), ln(e = ne(window.fpti, e))), this.options = ne(this.options, t)
        },
        setRequestData: function(t, e) {
            if ("object" == typeof t)
                for (var n in t) this.options.request.data[n] = t[n];
            else "string" == typeof t && e === undefined ? this.setRequestData(W(t)) : "string" == typeof t && e !== undefined && (this.options.request.data[t] = e)
        },
        getRequestData: function(t) {
            var e = this.options.request.data;
            return e = t ? e[t] || window.fpti[t] : e
        },
        removeRequestData: function(t) {
            void 0 !== t ? this.options.request.data[t] && delete this.options.request.data[t] : this.options.request.data = {}
        },
        setUnloadDelay: function(t) {
            this._delayUnloadUntil = b() + t
        },
        setLazyData: function(t, e) {
            on[t] = e
        },
        recordImpression: function(r, t) {
            var e = 2 < arguments.length && arguments[2] !== undefined && arguments[2];
            rn._imInProgress = !0;
            var n, a = (r = r || {}) && r.trackCPL;
            delete r.trackCPL, r.data ? (r.data = W(r.data), n = sn(), r.data = ne(n, r.data), ln(r.data)) : r.data = ne(window.fpti, {}), r.data.e = "im", t && (r.data = ne(r.data, t)), rn._imId = r.data.page;
            t = this.getRequestData("pglk") || D("tcs");
            N("tcs"), t && (r.data.pglk = decodeURIComponent(t));
            t = D("x-cdn");
            t && (r.data.cdn = Te(t)), dn(r), r = ne(this.options.request, r), "mo" !== rn.settings && (r.data.pl = Ot()), e && (r.data.imsrc = e ? "setup" : "recordim"), r.trackLazyData && (r.lazyDataId = r.lazyDataId || "ldi_" + b());
            var i = e ? r.imIdentifier : "im_" + b();
            if (r.imIdentifier = i, an[i] = {
                    options: r
                }, xe(on, r.lazyDataId), r.data.view || !a ? bt(r, function(t) {
                    an[i] && (_(an[i], {
                        hasCPL: !0,
                        recordCallback: t
                    }), gn(r, t))
                }) : (S && (r.data.view = r.data.view || {}, r.data.view._t11s = S.now()), bt(r, function(n) {
                    an[i] && (an[i].recordCallback = n), nn(function(t) {
                        var e;
                        an[i] && (e = mn(r, e = {}, t), _(an[i], {
                            hasCPL: !0,
                            eventData: e
                        }), gn(r, n, e))
                    })
                })), r.trackLazyData) return {
                lazyDataId: r.lazyDataId
            }
        },
        recordClick: function(t) {
            (t = t || {}).data = W(t.data), un(window.fpti), t.data = ne(window.fpti, t.data), t.data.e = "cl", dn(t), this._recordEvent({}, t)
        },
        recordFormAbandonment: function(t) {
            var e = {};
            (t = t || {}).data = W(t.data), un(window.fpti), t.data = ne(window.fpti, t.data), t.data.e = "fa", e.lf = this._getLastFormFocusedValue(), e.li = this._getLastInputFocusedValue(), this._recordEvent(e, t)
        },
        trackFormFocus: function(t) {
            t = this._getElements(t);
            for (var r = function r(t) {
                    var e = t.currentTarget || t.srcElement,
                        n = ce(e, "focus"),
                        e = t.target.value || ce(e);
                    rn.logActivity({
                        uicomp: n,
                        uitype: "form",
                        action: "focus",
                        value: e
                    })
                }, e = 0; e < t.length; e++) {
                var n = t[e];
                rt("focus", n, r), nt(n, "focus", r)
            }
        },
        _recordClick: function(r) {
            var a = this;
            return r = ne(this.options.click, r), r = ne({
                    request: this.options.request
                }, r),
                function(t, e) {
                    var n, e = function(t, e) {
                        for (var n = [e, t.target, t.currentTarget, t.srcElement], r = 0; r < n.length; r++) {
                            var a = n[r],
                                i = i || a;
                            if (a && a.getAttribute(Lt)) {
                                i = a;
                                break
                            }
                        }
                        return i
                    }(t, e);
                    !1 !== (n = "function" == typeof r.onClick ? r.onClick(t, e) : n) && ("object" == typeof n && (r.request = ne(r.request, n)), r.request.data.lu = e.getAttribute("href") || "", a.recordClick(r.request))
                }
        },
        trackClicks: function(t) {
            for (var e = this._getElements(t.elements), n = this._recordClick(t), r = 0; r < e.length; r++) {
                var a = e[r];
                a.setAttribute(Lt, 1), rt("click", a, n), nt(a, "click", n)
            }
        },
        trackFormAbandonment: function(n) {
            var r = this;
            (n = n || {}).data = W(n.data), (n = ne(this.options.formAbandonment, n)).elements = n.elements || "form";
            for (var t = this._getElements(n.elements) || [], e = 0; e < t.length; e++)
                for (var a = t[e], i = "form" === a.tagName.toLowerCase() ? [a] : re("form", a), o = 0; o < i.length; o++)
                    for (var c = i[o], s = re("input", c), u = s.length, l = 0; l < u; l++) ! function(t, e) {
                        nt(e, "focus", function() {
                            r._lastForm = t, r._lastInput = e, r._trackingFA || (r._trackingFA = !0, "beforeunload,hashchange".split(",").forEach(function(t) {
                                nt(window, t, function() {
                                    null !== r._lastForm && null !== r._lastInput && (r.recordFormAbandonment(n.request), r._lastForm = null, r._lastInput = null)
                                })
                            }), nt(t, "submit", function() {
                                r._lastForm = null, r._lastInput = null
                            }))
                        })
                    }(c, s[l])
        },
        recordAjaxStartTime: function() {
            this.activityStartTime = b()
        },
        logActivity: function(t) {
            t.page = t.page || window.fpti.page, t.pgrp = t.pgrp || window.fpti.pgrp, t.e = "ac", be(t)
        },
        logPerf: function(t, e) {
            t.e = "pf", (t = ne(sn(), t)).tt || (t = _(t, Ke(t), !1));
            var n = !0;
            e && (t.page || (n = !1)), n && be(t)
        },
        recordAjaxPerformanceData: function(t) {
            var e, n, r = this.activityStartTime;
            r && (n = Me(e = b(), r), (t = t.sys && t.sys.tracking && t.sys.tracking.fpti.dataString) && 0 < n && ((t = W(t)).tajst = r, t.tajnd = e, t.tt = n, this.logPerf(t)))
        },
        recordError: function(t) {
            (t = t || {}).e = "err", be(t)
        },
        recordEvent: function(t, e) {
            var n = !(2 < arguments.length && arguments[2] !== undefined) || arguments[2];
            e = e || {}, t && "string" == typeof t && (e.event_name = t, e.e = e.e || "ac", be(e = n ? ne(sn(), e) : e))
        },
        record: function yt(t) {
            be(t = ne(this.options.request, t))
        }
    }, rn.Analytics.prototype.utils = {
        queryStringToObject: W,
        getCookie: D,
        setCookie: L,
        removeCookie: N,
        wrapSelectors: ue
    }, rn.logPerformance = function(t) {
        rn.Analytics.prototype.logPerf(t)
    }, rn.logActivity = function(t) {
        rn.Analytics.prototype.logActivity(t)
    }, rn.setup = function(t) {
        rn.setupComplete = rn.setupComplete || I, rn.settings = rn.settings || "pp";
        t = rn.setup.init(t);
        return rn.setup.onLoad(), setTimeout(function() {
            rn.setupComplete(rn.setup.bindEvents()), kt.publish(Bt.INIT)
        }, 500), t
    }, rn.setup3p = function(t) {
        return t = se(t || {}, {
            trackPPLegacyClicks: !1,
            trackPPLegacyExitClicks: !1
        }), rn.settings = "3p", rn.setup(t)
    }, rn.setupMobile = function(t) {
        return t = se(t || {}, {
            trackPPLegacyClicks: !1,
            trackPPLegacyExitClicks: !1,
            trackPPDownloadClicks: !1,
            trackPPClickThrough: !1,
            trackFormAbandonment: !1
        }), rn.settings = "mo", rn.setup(t)
    }, rn.reSetup = function(t) {
        delete rn.instance, t = se(t || {}, rn.options), rn.setup(t)
    }, rn.setup.init = function(t) {
        var e = t && t.lazyDataId;
        (t = se(t || {}, {
            trackImpression: !0,
            trackPPClicks: !0,
            trackPPExitClicks: !0,
            trackPPDownloadClicks: !0,
            trackPPLegacyClicks: !0,
            trackPPLegacyExitClicks: !0,
            trackPPClickThrough: !0,
            trackFormAbandonment: !0,
            trackFormFocus: !1,
            trackLazyData: !1,
            stitchEvents: !0,
            trackScroll: !0,
            enableLinker: !0
        })).trackLazyData && (t.lazyDataId = e || "ldi_" + b()), t.imIdentifier = "im_" + b(), window.fptiserverurl = t.url || window.fptiserverurl, rn.options = t;
        e = new rn.Analytics({
            request: {
                data: t.data || {}
            }
        });
        return t.data && (t.data = W(t.data), ln(t.data)), rn.instance = e, t.trackLazyData && (e.lazyDataId = t.lazyDataId), e
    }, rn.setup._onLoadImpression = function() {
        var t = rn.instance,
            e = rn.options;
        e.trackImpression && cn && (e && (e.trackCPL = !0), t.recordImpression(e, null, !0), cn = !1)
    }, rn.setup.onLoad = function() {
        var t = rn.options,
            e = rn.setup._onLoadImpression;
        t.trackImpression && (cn = !0, et(function() {
            rn.isUnloading || e()
        }))
    };
    var vn = !(rn.setup.bindEvents = function() {
            var u = rn.instance,
                n = rn.options;

            function a(t, e) {
                e = e || t.target || t.currentTarget || t.srcElement;
                return e && (t = e.tagName.toLowerCase(), -1 !== ["svg"].indexOf(t) && (e = e.parentElement)), e
            }

            function r(t, e, n) {
                var r = oe(a(t, n), e),
                    t = r.link || "",
                    n = r.pgrp || u.getRequestData("pgrp") || "",
                    e = r.page || u.getRequestData("page") || "";
                return r.pglk = n + "|" + t, r.pgln = e + "|" + t, r
            }
            var l = {
                unloadDelay: 500
            };

            function i(t, e) {
                var n;
                if ("string" == typeof t.className)
                    for (var r = t.className.split(" "), a = 0; a < r.length; a++) {
                        var i = r[a].split(":"); - 1 !== e.indexOf(i[0]) && 1 < i.length && (i.shift(), n = i.join(":"))
                    }
                return n
            }
            var d = {
                customClicks: function(t) {
                    var e = r(t),
                        t = n.customClicks;
                    return e.link = t.linkName || e.link, e.exit = t.exitClick ? Le : De, {
                        data: e
                    }
                },
                click: function(t, e) {
                    return {
                        data: r(t, Dt, e)
                    }
                },
                exit: function(t) {
                    t = r(t, Nt);
                    return t.exit = Le, {
                        data: t
                    }
                },
                download: function(t) {
                    t = r(t, jt);
                    return t.dwnl = Le, {
                        data: t
                    }
                },
                scTrack: function(t) {
                    var e = r(t),
                        t = i(a(t), ["scTrack"]) || e.link;
                    return e.link = t, {
                        data: e
                    }
                },
                scExit: function(t) {
                    var e = r(t),
                        t = i(a(t), ["scExit"]) || e.link;
                    return e.link = t, e.exit = Le, {
                        data: e
                    }
                },
                clickThrough: function(t, e) {
                    var n = ""; - 1 < (n = (n = (n = (n = (n = oe(e = e || a(t), Dt).link) || oe(e, Nt).link) || oe(e, jt).link) || i(e, ["scTrack", "scExit"])) || ce(e)).indexOf("javascript") && (n = "");
                    e = u.getRequestData("pgrp") || "";
                    return L("tcs", encodeURIComponent(e + "|" + n)), !1
                }
            };
            return "object" == typeof n.customClicks && u.trackClicks({
                elements: n.customClicks.elements,
                onClick: d.customClicks,
                request: l
            }), n.trackPPClicks && u.trackClicks({
                elements: "*[data-pa-click]",
                onClick: d.click,
                request: l
            }), n.trackPPExitClicks && u.trackClicks({
                elements: "*[data-pa-exit]",
                onClick: d.exit,
                request: l
            }), n.trackFormFocus && u.trackFormFocus("*[data-pa-focus], " + ue("textarea, input[type=text]", n.wrappingElement)), n.trackPPDownloadClicks && u.trackClicks({
                elements: "*[data-pa-download], " + ue('*[href*=".zip"], *[href*=".wav"], *[href*=".mov"], *[href*=".mpg"], *[href*=".avi"], *[href*=".wmv"], *[href*=".doc"], *[href*=".docx"], *[href*=".pdf"], *[href*=".xls"], *[href*=".xlsx"], *[href*=".ppt"], *[href*=".pptx"], *[href*=".txt"], *[href*=".csv"], *[href*=".psd"], *[href*=".tar"]', n.wrappingElement),
                onClick: d.download,
                request: l
            }), n.trackPPLegacyClicks && u.trackClicks({
                elements: '*[class*="scTrack"]',
                onClick: d.scTrack,
                request: l
            }), n.trackPPLegacyExitClicks && u.trackClicks({
                elements: '*[class*="scExit"]',
                onClick: d.scExit,
                request: l
            }), n.trackPPClickThrough && u.trackClicks({
                elements: ue("a, button, input[type=submit], input[type=button], input[type=image]", n.wrappingElement),
                onClick: d.clickThrough
            }), n.trackFormAbandonment && u.trackFormAbandonment({
                elements: ue("form", n.wrappingElement),
                request: l
            }), nt(document.body, "click", function(t) {
                var e, n, r, a = 0,
                    i = !1,
                    o = t.target,
                    c = {
                        onClick: d.click,
                        request: l
                    };
                if (o) {
                    for (; !i && o;) n = o.tagName.toLowerCase(), (-1 !== ["a", "button"].indexOf(n) || "input" === n && -1 !== ["submit", "button", "image"].indexOf(o.type)) && (r = o), e = o.getAttribute(Dt), 10 <= a++ || o === document.body || e ? i = !0 : o = o.parentElement;
                    r && d.clickThrough(t, r);
                    var s = o && o.getAttribute(Lt);
                    e && !s && (o.setAttribute(Lt, 1), (c = u._recordClick(c))(t, o), nt(o, "click", c))
                }
            }), rn.instance = u
        }),
        wn = {
            "paypal-borderlesscommerce.com": {
                domains: ["paypal.com"],
                link: {
                    queryParam: Kt
                }
            },
            "xoom.com": {
                domains: ["paypal.com"],
                link: {
                    client: ["ga", "la"]
                }
            }
        };

    function hn(t, e) {
        for (var t = 'a[href*="'.concat(t, '"]'), i = window.document.querySelectorAll(t), o = F(Ft), c = e.client, n = function n(r) {
                var a = function a(t) {
                    var e = [];
                    c && c.forEach(function(t) {
                        e.push(Ae(t))
                    }), o && e.push(decodeURIComponent(o));
                    var n = e.join("&");
                    t.preventDefault();
                    t = i[r].href;
                    window.location.href = t + (-1 < t.indexOf("?") ? "&" : "?") + n, rt("click", i[r], a)
                };
                nt(i[r], "click", a)
            }, r = 0; r < i.length; r++) n(r)
    }

    function yn(t) {
        var e = t.link.queryParam || "";
        e && (r = e) && (r = Ce(ke(r), "=", "&"), F(Ft) || U(Ft, encodeURIComponent(r)));
        var n, r = t.domains || "";
        r && (n = t.link, r.forEach(function(t) {
            hn(t, n)
        }))
    }
    kt.subscribe(Bt.INIT, function() {
        var t, e = rn.options;
        e && e.enableLinker && !vn && (t = e.hasOwnProperty("linkerConfig") ? e.linkerConfig : function(t) {
            if (t) {
                t = t.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i), t = wn[t[1]];
                if (t) return t
            }
            return ""
        }(window.location.href || "")) && t.domains && t.link && (vn = !0, yn(t))
    }), rn.getLinkerParam = function(t, e) {
        return "urlQueryParam" === t ? F(Ft) || "" : Ae(t, e) || ""
    };
    var bn = "cpl_identifier";

    function kn(t, e, n) {
        S && (e = e || {}, (t = (t = t.cpl = t.cpl || {})[n] = t[n] || {}).started = !0, t = t.beaconData = t.beaconData || {}, e.flid && (t.flid = t.flid || e.flid), t.page = t.page || e.page, t.pgrp = t.pgrp || e.pgrp, t.action = t.action || e.action, t.view = {
            t10: e.t10 ? k(e.t10) : 0
        })
    }

    function Cn(t, e) {
        xe(t.cpl, e)
    }

    function _n(t, e, n, r) {
        var a;
        t.cpl = t.cpl || {}, t.cpl[r] = t.cpl[r] || {}, t.cpl[r].beaconData = t.cpl[r].beaconData || {}, e && "object" == typeof e && (a = {}, se(a = e.pageData ? A(a, e.pageData) : e, t.cpl[r].beaconData)), S && !t.cpl[r].started && n && (kn(t, null, r), t.cpl[r].beaconData.view._t11s = S.now())
    }
    rn.resumeCPLTracking = function() {}, rn.beaconTrackingData = {}, rn.addCPLData = function() {}, rn.setCPLData = function() {}, rn.startCPLTracking = function(t) {
        var e = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : bn;
        S && (kn(rn, t, e), rn.cpl[e].beaconData.view = {
            t10: 0,
            _t11s: S.now()
        })
    }, rn.endCPLTracking = function(t) {
        var e, n, r, a, i = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : bn;
        _n(rn, t, !1, i), n = !1, r = i, a = (e = rn).cpl[r].beaconData || {}, S && a.view && (n && e._imInProgress || (a.view._t11s && (a.view.t11 = k(S.now() - a.view._t11s), delete a.view._t11s), a.view.nt = n ? "url" : "manual", en(a), t = a.view.t11, i = !1, n && e._imId === a.page ? i = !1 : (!n && t < 61e3 || n && 50 < t && t < 31e3) && (i = !0), i && setTimeout(function() {
            e.Analytics.prototype.logPerf(a, n)
        }, 100))), Cn(e, r)
    }, rn.resourceCPL = function(t, e) {
        var n = !1;
        if (!t) return n;
        var r = Xe(t);
        return r && ((e = _(e, r)).tmpl = e.tmpl || t, e.view = {
            t10: r.t1,
            t11: r.tt,
            nt: "res"
        }, rn.Analytics.prototype.logPerf(e), n = !0), n
    }, rn.autoCPLTracking = function(t) {
        Cn(rn, te), _n(rn, t, !0, te)
    };
    var An = {
            minHeight: 0,
            trackBy: "percent",
            readTime: 0,
            scrollDepth: [25, 50, 75, 100]
        },
        En = null,
        Pn = null,
        In = null;

    function xn(e) {
        rt("scroll", window, Sn), En = [], Pn = A({}, An), "object" == typeof e && Object.keys(e).forEach(function(t) {
            e[t] && Pn.hasOwnProperty(t) && typeof e[t] == typeof Pn[t] && (Pn[t] = e[t])
        });
        var t = $();
        isNaN(t) || t <= Pn.minHeight || nt(window, "scroll", Sn)
    }

    function On(n) {
        In = setTimeout(function() {
            var t = window.fpti || {},
                e = Pn.trackBy;
            be({
                e: "sd",
                page: t.page,
                pgrp: t.pgrp,
                comp: t.comp,
                event_name: "page scroll",
                st: e,
                sd: n
            }), En.push(n), In = null
        }, Pn.readTime)
    }
    var Sn = function(n, r, a) {
        var i, o, c, s, u = 0;
        a = a || {};
        var l, d = function d() {
            u = !1 === a.leading ? 0 : b(), i = null, s = n.apply(o, c), i || (o = c = null)
        };
        return (l = function l() {
            var t = b();
            u || !1 !== a.leading || (u = t);
            var e = r - (t - u);
            return o = this, c = arguments, e <= 0 || r < e ? (i && (clearTimeout(i), i = null), u = t, s = n.apply(o, c), i || (o = c = null)) : i || !1 === a.trailing || (i = setTimeout(d, e)), s
        }).cancel = function() {
            clearTimeout(i), u = 0, i = o = c = null
        }, l
    }(function() {
        var t, n, r, e, a, i, o, c, s;
        In && clearTimeout(In), En.length !== Pn.scrollDepth.length ? (e = $(), a = "object" == typeof(t = Z()) && t.hasOwnProperty("height") ? t.height : 0, n = e, r = [], Pn.scrollDepth.forEach(function(t) {
            var e = 0,
                e = 100 === t ? n - 10 : Math.round(n * t / 100);
            r.push([t, e])
        }), t = r, a = (e = window.scrollY || window.pageYOffset || (document.body && document.body.scrollTop) + (document.documentElement && document.documentElement.scrollTop || 0)) + a, "percent" === Pn.trackBy ? (c = e, s = a, t.forEach(function(t) {
            -1 === En.indexOf(t[0]) && s >= t[1] && t[1] > c && On(t[0])
        })) : (i = e, o = a, Pn.scrollDepth.forEach(function(t) {
            -1 === En.indexOf(t) && t <= o && i < t && On(t)
        }))) : rt("scroll", window, Sn)
    }, 500);
    kt.subscribe(Bt.INIT, function() {
        var t = rn.options;
        t && t.trackScroll && xn(t.scroll)
    }), rn.Analytics.prototype.resetScroll = function(t) {
        xn(t)
    };
    var Tn, Ln = 5,
        Dn = {},
        Nn = 0,
        jn = window.onerror;

    function qn(t, e, n, r, a, i) {
        Tn && Tn === a || (Tn = a, Ln < ++Nn || (rn.logJSError(a, (e = e || "-") + " " + (n = n || 0) + ":" + (r = r || 0), i), "function" == typeof Dn.onError && Dn.onError({
            message: t,
            file: e,
            line: n,
            column: r,
            error: a
        })))
    }
    nt(window, "unhandledrejection", function(t) {
        t.preventDefault(), t.reason && t.reason.stack && qn(t.reason.message, "", 0, 0, t.reason, "PROMISE_ONERROR")
    }), nt(window, "error", function(t) {
        t && t.error && qn(t.message, t.filename, t.lineno, t.colno, t.error)
    }), window.onerror = function(t, e, n, r, a) {
        qn(t, e, n, r, a), "function" == typeof jn && jn.apply(window, arguments)
    }, rn.startClientErrorTracking = function(t) {
        Ln = (Dn = t || {}).maxErrors || 5, Nn = 0
    }, rn.logJSError = function(t, e, n) {
        var r = window.fpti || {};
        be({
            e: "err",
            page: r.page,
            pgrp: r.pgrp,
            comp: r.comp,
            erpg: t && t.message || t || "Script error",
            error_type: n || "WINDOW_ONERROR",
            error_description: ((t = t) && t.stack || "").replace(/http.*\/(\w+.)/gm, "_/$1").substring(0, 500),
            error_source: e
        })
    }, PAYPAL.trackJSError = function(t) {
        rn && rn.logJSError(t, "", "JSError")
    };
    var Rn = ["^gdpr_", "^ccpa"];

    function Mn() {
        for (var t = decodeURIComponent(D(Mt) || he("fpti.ef_policy")), e = 0; e < Rn.length; e++) {
            var n = Rn[e];
            if (new RegExp(n, "i").test(t)) return 1
        }
    }

    function Fn(t) {
        var e, n, r = !0;
        return Mn() && (r = !1, (n = decodeURIComponent(D(Rt) || he("fpti.c_prefs"))) && (e = {}, n.split(",").map(function(t) {
            t = t.split("=");
            return e[t[0]] = t[1], t
        })), t = t || Zt, e && 1 == +e[t] && (r = !0)), !r
    }

    function Un() {
        return qe() || ""
    }

    function Bn() {
        var t = Gn("cust");
        return t && 0 < t.length ? "1" : "0"
    }

    function zn() {
        return pe().vr || ""
    }

    function Gn(t) {
        var e, n = window.fpti || {};
        switch (t) {
            case "rsta":
            case "locale":
                e = Ie(n.rsta) || Ie(n.locale);
                break;
            case "ccpg":
                e = (e = he("dataLayer.contentCountry") || Ie(n.ccpg) || "").toLowerCase();
                break;
            case "pageType":
                e = he("dataLayer.pageType");
                break;
            default:
                e = Ie(n[t])
        }
        return e || ""
    }

    function Vn() {
        var t, e, n, r = pe(),
            a = function() {
                var t = window.location,
                    e = he("location.pathname").replace(/\/$/, "") || "",
                    n = he("location.hash") || "";
                if (t.search) {
                    var r = Ce(ke(), "=", "&");
                    return t.protocol + "//" + t.hostname + e + (r ? "?" + r : "") + n
                }
                return e && -1 !== e.indexOf("&") && (e = e.substr(0, e.indexOf("&"))), t.protocol + "//" + t.hostname + e + n
            }(),
            i = ke(),
            o = {
                acnt: Gn("acnt"),
                amt: Gn("amt"),
                browser: (e = "unknown", -1 < je.indexOf("Firefox") ? e = "Firefox" : -1 < je.indexOf("SamsungBrowser") ? e = "Samsung Internet" : -1 < je.indexOf("Opera") || -1 < je.indexOf("OPR") ? e = "Opera" : -1 < je.indexOf("Trident") ? e = "Internet Explorer" : -1 < je.indexOf("Edge") ? e = "Edge" : -1 < je.indexOf("Chrome") ? e = "Chrome" : -1 < je.indexOf("YaBrowser") ? e = "Yandex" : -1 < je.indexOf("UCBrowser") ? e = "UC Browser" : -1 < je.indexOf("Safari") && (e = "Safari"), e),
                ccpg: Gn("ccpg"),
                comp: Gn(Gt) || Gn(Vt),
                consentOptOut: Fn(),
                curr: Gn("curr"),
                cust: Gn("cust"),
                device: Fe(),
                domain: he("document.location.hostname"),
                flnm: Gn("flnm"),
                gacook: Un(),
                gclid: fe(i, "gclid"),
                isLoggedIn: Bn(),
                keywords: (t = "keywords", e = "", t = document.querySelector("meta[name='" + t + "']"), e = t ? t.getAttribute("content") : e),
                lang: Ne.userLanguage || Ne.language,
                leadGenParam: F(Ut),
                mrid: Gn("mrid"),
                os: (e = "unknown", -1 !== je.indexOf("Win") && (e = "Windows"), -1 !== je.indexOf("Mac") && (e = "Macintosh"), -1 !== je.indexOf("Linux") && (e = "Linux"), -1 !== je.indexOf("Android") && (e = "Android"), e = -1 !== je.indexOf("like Mac") ? "iOS" : e),
                page: Gn("page"),
                pgrp: Gn("pgrp"),
                queryParams: Ce(i, "=", "&"),
                region: function() {
                    var t = Gn("ccpg");
                    if (t)
                        for (var e in $t)
                            if (null != $t[e].match(t)) return e.toLowerCase();
                    return null
                }(),
                rsta: Gn("rsta"),
                sessionId: r.vt || "",
                title: he("document.title"),
                trid: Gn("trid"),
                tsrc: he("document.referrer"),
                txn_amt: Gn("txn_amt"),
                url: a,
                utm_campaign: fe(i, "utm_campaign"),
                utm_content: fe(i, "utm_content"),
                utm_medium: fe(i, "utm_medium"),
                utm_source: fe(i, "utm_source"),
                utm_term: fe(i, "utm_term"),
                visitorId: r.vr || "",
                xe: Gn("xe"),
                xt: Gn("xt")
            },
            c = [undefined, null, ""];
        for (n in o) o.hasOwnProperty(n) && -1 < c.indexOf(o[n]) && delete o[n];
        window.laDataLayer = o;
        for (var s = ["utm_campaign", "utm_content", "utm_medium", "utm_source", "utm_term"], u = !1, l = {}, d = 0; d < s.length; d++) {
            var f = s[d];
            o.hasOwnProperty(f) && (u = !0, l[f] = o[f])
        }!F(Ut) && u && (r = Ce(l, "=", "&"), U(Ut, r), window.laDataLayer.leadGenParam = r)
    }

    function Jn(t, e) {
        void 0 !== t && (window.laDataLayer || Vn(), void 0 !== e ? window.laDataLayer[t] = e : window.laDataLayer[t] && delete window.laDataLayer[t])
    }
    var Yn = v + "/patleaf.js",
        Hn = v + "/patlcfg.js";

    function Qn() {
        tt(Hn)
    }
    de("tl") && kt.subscribe(Bt.LATM, function(t) {
        var e, n, r;
        window.TLT || (e = Gn(Gt), n = Gn("pgrp"), ((r = window.latmconf) && r.isTLEnabled && r.isTLEnabled(e, n) || !0 === t) && tt(Yn, Qn))
    });
    var Wn = 1e4;

    function Zn(t, e) {
        var n, r, a, i, o;
        e = P(e), t === Wt.DC || t === Wt.GA || t === Wt.GADS ? function(t, n) {
            n = P(n);
            var r = window.latmconf;

            function a(t) {
                switch (t) {
                    case Wt.DC:
                        "honeyapp" === he("laDataLayer.comp") ? window.gtag("config", "DC-10648833") : window.gtag("config", u);
                        break;
                    case Wt.GADS:
                        switch ((window.laDataLayer || Vn(), window.laDataLayer).region) {
                            case "na":
                                window.gtag("config", "AW-992191228");
                                break;
                            case "apac":
                                window.gtag("config", "AW-965352860");
                                break;
                            case "emea":
                                window.gtag("config", "AW-1006288171");
                                break;
                            case "latam":
                                window.gtag("config", "AW-993701045")
                        }
                        break;
                    case Wt.GA:
                        window.gtag("config", l, {
                            send_page_view: !1,
                            linker: {
                                domains: ["paypal.com", "paypal.me", "www.xoom.com"]
                            },
                            cookie_flags: "sameSite=None;secure"
                        })
                }
                n()
            }
            r.gtagModules = r.gtagModules || [], r.isGtagLoaded = r.isGtagLoaded || !1, r.gtagModules.length ? r.isGtagLoaded && a(t) : tt(s, function() {
                r.isGtagLoaded = !0,
                    function() {
                        function t() {
                            window.gDataLayer.push(arguments)
                        }
                        window.gDataLayer = window.gDataLayer || [], t("js", new Date), t("set", {
                            cookie_flags: "sameSite=None;secure"
                        }), Mn() && (t("set", {
                            anonymize_ip: !0
                        }), Fn(Zt) && t("set", {
                            allow_ad_personalization_signals: !1
                        })), window.gtag = window.gtag || t;
                        for (var e = 0; e < r.gtagModules.length; e++) a(r.gtagModules[e]);
                        n()
                    }()
            }, !0);
            r.gtagModules.push(t), setTimeout(n, Wn)
        }(t, e) : t === Wt.FB_XOOM ? (i = P(i = e), window.fbq || (o = window.fbq = function() {
            o.callMethod ? o.callMethod.apply(o, arguments) : o.queue.push(arguments)
        }, window._fbq || (window._fbq = o), (o.push = o).loaded = !0, o.version = "2.0", o.queue = [], window.fbq("init", "236564939871335"), tt(f, i), setTimeout(i, Wn))) : t === Wt.BING ? function(e) {
            e = P(e);
            var n = "uetq";
            tt(p, function() {
                window[n] = window[n] || [];
                var t = {
                    ti: "4028083",
                    q: window[n]
                };
                window[n] = new window.UET(t), window[n].push("pageLoad"), e()
            }), setTimeout(e, Wn)
        }(e) : t === Wt.GAD ? (r = e, a = setInterval(function() {
            window.google_trackConversion && (clearInterval(a), r())
        }, 500), setTimeout(r, Wn)) : t === Wt.SFIS ? (n = P(n = e), tt(c + "/pa/mi/3p/salesforce/evergage.min.js", function() {
            n()
        }), setTimeout(n, Wn)) : t === Wt.PPSHOP ? function(t) {
            t = P(t);
            var e = "https://www.paypal.com/sdk/js?components=tracker&client-id=".concat("AVIB73EyZeKZ71KYbxlnBRjD2k54--sxixKg65783uHUZXtHgv4P5-Zt_lCaohhCYIeDZv24_eVSVyc1", "&merchant-id=").concat("VZM4S2MH6BMGW"),
                n = document.getElementsByTagName("script")[0],
                r = document.createElement("script");
            r["async"] = !0, r.crossorigin = "anonymous", r.src = e, r.onload = function() {
                window.paypal && (window.paypal.Tracker(), t())
            }, n.parentNode.insertBefore(r, n), setTimeout(t, Wn)
        }(e) : ((0, PAYPAL.analytics.logJSError)("Cannot load js", t, qt), e())
    }
    var $n = {},
        Kn = !1,
        Xn = !1,
        tr = !1,
        er = [],
        nr = {};

    function rr() {
        var t, e, n, r, a = Gn(Gt) || Gn(Vt);

        function i() {
            0 === (r -= 1) && n()
        }
        a && !Kn && (Kn = !0, Vn(), kt.publish(Bt.LATM), a = a.toLowerCase(), t = $n.loadTags(a), e = window.location && window.location.hostname || "", (t && -1 === e.indexOf("localhost") || t && d) && (e = a, n = function() {
            $n.fireState = $n.fireState || {}, Xn = !0, tr && lr(), window.laDataLayer && !window.laDataLayer.gacook && Jn("gacook", Un()), ar(t)
        }, a = $n.loadJs && $n.loadJs(e) || {}, e = a.vendors, r = a.vCount, e.forEach(function(t) {
            var e = $n.loadVendorDefault && $n.loadVendorDefault(t) || {};
            nr[t] || (nr[t] = !1), or(e) && !nr[t] ? Zn(t, function() {
                nr[t] = !0, i()
            }) : i()
        })))
    }

    function ar(t) {
        var r = fe(window, "latmconf.fireState", {});
        t.forEach(function(t) {
            r[t] = t in r && r[t];
            var e, n = $n.loadTagConfig && $n.loadTagConfig(t) || {};
            cr(n) && (e = [], (n.vendors || []).forEach(function(t) {
                t = A($n.loadVendorDefault && $n.loadVendorDefault(t.name) || {}, t);
                or(t) && e.push(t)
            }), e.length && function(a) {
                var t = PAYPAL.analytics.logJSError,
                    e = a.trigger.type,
                    i = a.trigger.condition;

                function n(t, e) {
                    if (e && e.data) {
                        var n, r = e.data;
                        for (n in a.options = e, i)
                            if (i[n])
                                if (!new RegExp(i[n], "i").test(r[n])) return;
                        ir(a)
                    }
                }
                a.trigger.hasOwnProperty("once") || (a.trigger.once = !0); {
                    var r;
                    "fn" === e ? Cr(r = a.trigger.name) ? Cr(r)(a) : t("Invalid trigger function", a.trigger, qt) : e === Bt.BEACON ? (kt.subscribe(Bt.BEACON, n), kt.subscribe(Bt.REPLAYBEACON, n)) : "generic" === e ? ir(a) : t("Invalid trigger type", a.trigger, qt)
                }
            }({
                id: t,
                trigger: n.trigger,
                capture: n.capture,
                vendors: e
            }))
        }), er.forEach(function(t) {
            kt.publish(Bt.REPLAYBEACON, t)
        })
    }

    function ir(t) {
        var e, n, l, d, f, p, r, a;
        ! function(t) {
            var e = fe(t, "trigger.session"); {
                if (e && G()) {
                    t = e.key, e = e.type;
                    return t && "start" === e ? (U("mi." + t, !0), !0) : t && "end" === e ? !!F("mi." + t) : t && "unset" === e ? !F("mi." + t) : void 0
                }
                return !0
            }
        }(t) || (e = t.id, (n = fe(window, "latmconf.fireState")) && !n[e] && ((a = C((r = t).vendors)).forEach(function(t) {
            var e, n = t.vars;
            for (e in n) n.hasOwnProperty(e) && (n[e] = function(t, e) {
                if (t && cr(t)) {
                    if ("string" == typeof t) return t;
                    var n = t.type;
                    if ("fn" === n) {
                        var r = t.name,
                            a = t.args,
                            a = void 0 === a ? [] : a;
                        return Cr(r) ? Cr(r).apply(null, a) : ""
                    }
                    e = function(t, e) {
                        var n = {
                                data: e ? e.data : {}
                            },
                            r = t.obj || window,
                            a = t.path,
                            e = t.defaultVal || "",
                            t = t.concat,
                            i = e;
                        "data" === r && (r = n[r]);
                        if (a && a.constructor === Array)
                            for (var o = 0; o < a.length; o++) {
                                var c = fe(r, a[o]);
                                if (c) {
                                    i = c;
                                    break
                                }
                            } else i = fe(r, a, e);
                        return function(t, e) {
                            if (!t || "object" != typeof t) return e;
                            var n = t.append || "";
                            return (t.prepend || "").concat(e, n)
                        }(t, i)
                    }(t, e);
                    return "var" === n ? e : "int" === n ? k(e) : void 0
                }
            }(n[e], r.options))
        }), a = a, l = he("gtag"), d = he("fbq"), f = he("uetq"), p = he("google_trackConversion"), a.forEach(function(t) {
            var e, n, r, a, i, o, c, s, u;
            switch (t.name) {
                case Wt.DC:
                case Wt.GADS:
                case Wt.GA:
                    e = t.vars.event_action || "conversion", l && l("event", e, t.vars);
                    break;
                case Wt.PD:
                    a = t, i = window.laDataLayer, o = a.vars || {}, a = (i.queryParams ? i.queryParams + "&" : "") + (i.tsrc ? "referrer=" + i.tsrc : ""), c = o.piAId || "piAId", s = o.piCId || "piCId", a = m + "#" + a, (u = document.createElement("iframe")).setAttribute("src", a), u.setAttribute("id", "ipyplmktg"), u.setAttribute("style", "display: none; visibility: hidden; height: 0; width: 0;"), u.referrerPolicy = "no-referrer-when-downgrade", document.body.appendChild(u), nt(window, "message", function(t) {
                        "PARDOT_IFRAME_READY" === t.data && u.contentWindow.postMessage(JSON.stringify({
                            action: "PARDOT_JS_INIT",
                            piAId: c,
                            piCId: s,
                            laDataLayer: i || {}
                        }), g)
                    });
                    break;
                case Wt.FB_XOOM:
                    d("track", t.vars.track);
                    break;
                case Wt.GAD:
                    p && t.vars ? p(t.vars) : t.src && K(t.src);
                    break;
                case Wt.BING:
                    f.push(t.vars);
                    break;
                case Wt.DIALOGFLOW:
                    (t.nodeToInject || []).forEach(function(t) {
                        var e = document.createElement(t.createElement);
                        if (t.setAttribute)
                            for (var n in t.setAttribute) e.setAttribute(n, t.setAttribute[n]);
                        e.referrerPolicy = "no-referrer-when-downgrade", document.body.appendChild(e)
                    });
                    break;
                default:
                    o = (n = t).seperator || "&", a = n.endpoint, a = "".concat(a.scheme, "://").concat(a.host).concat(a.path), r = n.vars || {}, o = Object.keys(r).map(function(t) {
                        var e;
                        return e = r[t] ? t + "=" + r[t] : e
                    }).filter(Boolean).join(o), K(e = a + o)
            }
        }), n[e] = t.trigger.once, /_pgv\b/.test(e) && U("mi.pageViewSent." + e, window.location.href)))
    }

    function or(t) {
        var e;
        return !Fn(e = t && t.consentCategory ? t.consentCategory : e) && cr(t)
    }

    function cr(t) {
        if (t && !t.hasOwnProperty("enable")) return !0;
        if (t && t.hasOwnProperty("enable")) {
            if ("boolean" == typeof t.enable) return t.enable;
            var e = t.enable;
            if (e.constructor === Array) {
                for (var n = 0; n < e.length; n++)
                    if (!sr(e[n])) return !1
            } else if (!sr(e)) return !1;
            return !0
        }
        return !1
    }

    function sr(t) {
        var e = t.type;
        if ("fn" === e) {
            var n = t.name,
                r = t.args || [];
            return n && Cr(n) && Cr(n).apply(null, r)
        }
        if ("var" === e)
            for (var a = t.match || [], i = 0; i < a.length; i++) {
                var o = a[i],
                    c = he(t.key);
                if (new RegExp(o, "i").test(c)) return 1
            }
    }

    function ur(t, e) {
        e && e.data && "im" === e.data.e && (Xn ? lr() : tr = !0)
    }

    function lr() {
        ($n.loadPageViews ? $n.loadPageViews() : []).forEach(function(t) {
            F("mi.pageViewSent." + t) !== window.location.href && ar([t])
        })
    }

    function dr(t, e, n) {
        var e = Cr(e),
            r = e && e();
        if (r && t) {
            if (t.constructor !== Object || t.constructor === Array) {
                if (t.constructor !== String) return null;
                e = r.match(t);
                return e ? e[0] : null
            }
            for (var a in t) {
                var i = r.match(t[a]);
                if (i && i[0]) return n ? n[a] : i[0]
            }
        }
    }

    function fr(t, e) {
        if (t && e && e.constructor === Object) {
            if (t.constructor !== Array) return t.constructor === String && _e(t, e) || null;
            for (var n = 0; n < t.length; n++) {
                var r = _e(t[n], e);
                if (r) return r
            }
        }
    }

    function pr(t) {
        t.trigger = {
            sel: "button[type=submit], input[type=submit]"
        }, mr(t)
    }

    function gr(t) {
        t = window.document.querySelectorAll(t);
        return t = t && t[0]
    }

    function mr(t) {
        var e, n, r = gr(fe(t, "trigger.sel")),
            a = fe(t, "trigger.suppl.sel"),
            i = null;
        if (a)
            for (var o = 0; o < a.length; o++) i = i || gr(a[o]);
        r && (a && i || !a) ? nt(r, "click", e = function e() {
            vr(t), rt("click", r, e)
        }) : n = setTimeout(function() {
            clearTimeout(n), mr(t)
        }, 500)
    }

    function vr(t) {
        var e = fe(t, "trigger.suppl.sel");
        if (e) {
            if (e.constructor === Array)
                for (var n = 0; n < e.length; n++) {
                    var r = gr(e[n]);
                    if (r && r.checked) {
                        ir(t);
                        break
                    }
                }
        } else ir(t)
    }

    function wr(r) {
        var t = fe(r, "trigger.sel"),
            a = window.document.querySelectorAll(t);
        if (a)
            for (var i = function i(e) {
                    var n = function n(t) {
                        t = t.currentTarget;
                        $n.evntData = $n.evntData || {},
                            function(t, e) {
                                var n = fe(t, "capture");
                                if (e) {
                                    var r = window.latmconf.evntData;
                                    if (r.hostname = e.hostname || "", r.pathname = e.pathname || "", r.href = e.href || "", r.className = e.className || "", r.id = e.id || "", r.textContent = e.textContent || "", n && n.constructor === Array)
                                        for (var a = 0; a < n.length; a++) r[n[a]] = e.getAttribute(n[a]) || e.innerHTML;
                                    else r[n] = e.getAttribute(n) || e.innerHTML;
                                    var i = r.href;
                                    i.match("^mailto:") && (i = i.split(":")[1].match("([^@]+)")[0]) && (r.href = i), ir(t)
                                }
                            }(r, t), rt("click", a[e], n)
                    };
                    nt(a[e], "click", n)
                }, e = 0; e < a.length; e++) i(e);
        else var n = setTimeout(function() {
            clearTimeout(n), wr(r)
        }, 500)
    }

    function hr(t) {
        var e, n = fe(t, "trigger.sel"),
            r = fe(t, "trigger.text");
        n && r && (n = (n = gr(n)) && n.textContent, r = new RegExp(r, "i"), n && r.test(n) ? ir(t) : e = setTimeout(function() {
            clearTimeout(e), hr(t)
        }, 500))
    }

    function yr(t) {
        var e = fe(t, "trigger.condition");
        if (e) {
            for (var n in e)
                if (e[n])
                    if (!new RegExp(e[n], "i").test(he(n))) return;
            ir(t)
        }
    }

    function br() {
        return Gn("ccpg") || null
    }

    function kr() {
        return Fn() ? "1" : "0"
    }

    function Cr(t) {
        return {
            constructUrl: we,
            fetchGuid: zn,
            fireImmediate: ir,
            encodeURIComponent: encodeURIComponent,
            fetchCountry: br,
            conditionalValue: dr,
            mapValue: fr,
            mrktConsentOptOut: kr,
            isLoggedIn: Bn,
            gaClientId: Un,
            fireButtonClick: pr,
            matchPgTxt: hr,
            matchUrl: yr,
            matchSuppl: vr,
            handleClick: mr,
            eventClick: wr
        }[t]
    }
    de() && (tt(o, function() {
        ($n = window.latmconf) && (rr(), kt.subscribe(Bt.BEACON, ur), Kn || (kt.subscribe(Bt.INIT, rr), kt.subscribe(Bt.BEACON, rr)))
    }, !0), kt.subscribe(Bt.BEACON, function(t, e) {
        Xn || er.push(e)
    }));
    var _r, Ar = y + "OrchestratorMain.js",
        Er = !1;

    function Pr(t) {
        var e = Gn(Gt),
            n = Gn("pgrp"),
            r = window.latmconf;
        return r && r.isQSIEnabled && r.isQSIEnabled(e, n) || !0 === t
    }

    function Ir(t) {
        var e, n, r;
        window.QSI || (n = h.pypl, r = e || window.location && window.location.hostname || "", e = w.internal, 0 === (r = r.toLowerCase()).indexOf("developer.") ? n = h.dev : 0 === r.indexOf("demo.") ? n = h.demo : -1 !== r.indexOf("paypal-status.") ? n = h.ppstatus : e.test(r) && (n = h.internal), n = n, Pr(t) && ("undefined" == typeof window.QSI && (window.QSI = {}, window.QSI.config = {
            hostedJSLocation: y,
            zoneId: n,
            brandId: "paypalxm",
            enableSecureVariables: !0,
            sampleType: "visitor",
            sampleRate: 100
        }), tt(Ar)))
    }

    function xr() {
        Er = !1
    }

    function Or() {
        !Er && window.QSI && window.QSI.API && (Er = !0, window.QSI.API.unload(), window.QSI.API.load().then(function() {
            window.QSI.API.run(), xr()
        }, xr), setTimeout(xr, 1e4))
    }
    rn.reloadQualtrics = function(t) {
        "string" == typeof t && Jn(ee, t), window.QSI ? Or() : Ir(!0)
    }, rn.qualtricsInterceptInterrupt = function(t, e, n) {
        var r = 3 < arguments.length && arguments[3] !== undefined ? arguments[3] : 2;
        rn.reloadQualtrics(e);
        var a = P(function() {
                n && (window.location = n)
            }),
            i = setTimeout(a, 1e3 * r);
        window.QSI && window.QSI.API ? window.QSI.API.getIntercept(t).then(function(t) {
            clearTimeout(i);
            var e = t.getEvaluationResult();
            e && e.passed ? t.onClose(function() {
                a()
            }) : a()
        }) : a()
    }, de("ql") && kt.subscribe(Bt.LATM, function() {
        !0 === Pr() && (Jn(ee, undefined), (window.QSI ? Or : Ir)())
    });
    var Sr = !1;

    function Tr(t) {
        var e = (t || "").replace("main:", "").replace(/:+/g, "_").toUpperCase(),
            t = (e = e.substr(0, 32)).length - 1;
        return e = "_" === e.charAt(t) ? e.substr(0, t) : e
    }

    function Lr() {
        var t, e = window.fpti;
        Sr || !e || (t = window.latmconf) && t.isFNEnabled && t.isFNEnabled(e.page) && (Sr = !0, t = pe(), function(t) {
            var e = document.getElementById("fconfig");
            if (e) {
                if (!e.parentNode || _r === t.s) return !1;
                e.parentNode.removeChild(e)
            }
            return _r = t.s, (e = document.createElement("script")).id = "fconfig", e.type = "application/json", e.setAttribute("fncls", "fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99"), e.text = JSON.stringify(t), !!document.body && (document.body.appendChild(e), !0)
        }({
            ts: {
                type: Tr(e.page),
                delegate: !0,
                fields: [{
                    id: "cardNumber",
                    min: 15
                }, {
                    id: "expDate",
                    min: 4
                }, {
                    id: "verificationCode",
                    min: 3
                }, {
                    id: "accountNumberInput",
                    min: 9
                }, {
                    id: "routingNumberGroup",
                    min: 9
                }, {
                    id: "bankName",
                    min: 5
                }, {
                    id: "branchLocation",
                    min: 3
                }, {
                    id: "branchCode",
                    min: 3
                }, {
                    id: "nativeName",
                    min: 7
                }, {
                    id: "accountNamePanel",
                    min: 7
                }, {
                    id: "idNumber",
                    min: 6
                }, {
                    id: "bankCode",
                    min: 2
                }, {
                    id: "biCode",
                    min: 8
                }, {
                    id: "taxIdPanel",
                    min: 10
                }, {
                    id: "swiftCode",
                    min: 8
                }, {
                    id: "institution",
                    min: 3
                }, {
                    id: "bankTransit",
                    min: 5
                }, {
                    id: "fullName",
                    min: 7
                }]
            },
            s: Tr(e.page),
            f: t.vt || ""
        }) && tt("https://c.paypal.com/da/r/fb.js"))
    }
    de("pp") && (kt.subscribe(Bt.BEACON, Lr), kt.subscribe(Bt.LATM, Lr))
}();