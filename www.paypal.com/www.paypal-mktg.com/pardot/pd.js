/*!
	Salesforce Pardot's Engagement Tracker Javascript - 2021-05-06 14:27:27
	If you're an ad blocker, block the URI only. Don't block the domain.
*/
function checkNamespace(e) {
    for (var t = e.split("."), r = window, i = 0; i < t.length; i++) {
        var a = t[i];
        r[a] || (r[a] = {}), r = r[a]
    }
}

function getPardotUrl() {
    var e = "pi.pardot.com";
    return "string" == typeof piHostname && (e = piHostname), ("https:" == document.location.protocol ? "https://" : "http://") + e
}

function piTracker(e) {
    if (checkNamespace("pi.tracker"), pi.tracker.visitor_id = piGetCookie("visitor_id" + (piAId - 1e3)), pi.tracker.visitor_id_sign = piGetCookie("visitor_id" + (piAId - 1e3) + "-hash"), pi.tracker.pi_opt_in = piGetCookie("pi_opt_in" + (piAId - 1e3)), "false" != pi.tracker.pi_opt_in || void 0 !== pi.tracker.title && pi.tracker.notify_pi) {
        var t = piGetParameter(document.URL, "pi_campaign_id");
        null != t ? pi.tracker.campaign_id = t : "undefined" != typeof piCId && "" != piCId && null != piCId ? pi.tracker.campaign_id = piCId : pi.tracker.campaign_id = null, pi.tracker.account_id = piAId, pi.tracker.title = document.title, "undefined" != typeof piPoints && (pi.tracker.pi_points = piPoints), pi.tracker.url = pi.tracker.url || (void 0 !== e ? e : document.URL), pi.tracker.referrer = pi.tracker.referrer || document.referrer, null == pi.tracker.referrer && (pi.tracker.referrer = piGetParameter(document.URL, "referrer")), pi.tracker.referrer = pi.tracker.referrer;
        var r = piGetParameter(document.URL, "pi_ad_id");
        null != r && (pi.tracker.pi_ad_id = r);
        var i = piGetParameter(document.URL, "creative");
        null != i && (pi.tracker.creative = i);
        var a = piGetParameter(document.URL, "matchtype");
        null != a && (pi.tracker.matchtype = a);
        var n = piGetParameter(document.URL, "keyword");
        null != n && (pi.tracker.keyword = n);
        var c = piGetParameter(document.URL, "network");
        null != c && (pi.tracker.network = c);
        var p = piGetParameter(document.URL, "device");
        null != p && (pi.tracker.device = p), "undefined" != typeof piIncludeInActivities && (pi.tracker.pi_include_in_activies = piIncludeInActivities), "undefined" != typeof piProfileId && (pi.tracker.pi_profile_id = piProfileId);
        var o = piGetParameter(document.URL, "pi_profile_id");
        null != o && (pi.tracker.pi_profile_id = o);
        var l = piGetParameter(document.URL, "pi_email");
        null != l && (pi.tracker.pi_email = l);
        var u = piGetParameter(document.URL, "pi_list_email");
        null != u && (pi.tracker.pi_list_email = u);
        var d = piGetParameter(document.URL, "utm_campaign");
        null != d && (pi.tracker.utm_campaign = d);
        var m = piGetParameter(document.URL, "utm_medium");
        null != m && (pi.tracker.utm_medium = m);
        var s = piGetParameter(document.URL, "utm_source");
        null != s && (pi.tracker.utm_source = s);
        var k = piGetParameter(document.URL, "utm_content");
        null != k && (pi.tracker.utm_content = k);
        var f = piGetParameter(document.URL, "utm_term");
        null == f && (f = piGetParameter(document.URL, "_kk")), null != f && (pi.tracker.utm_term = f);
        var v = piGetParameter(document.URL, "gclid");
        null != v && (pi.tracker.gclid = v);
        var _ = "ver=3";
        for (property in pi.tracker) _ += "&" + property + "=" + encodeURIComponent(pi.tracker[property]);
        var g = !1;
        try {
            g = location.protocol + "//"
        } catch (e) {}
        if (null == g && (g = "http://"), "string" != typeof piTUrl || -1 == piTUrl.indexOf("localhost") && -1 === piTUrl.indexOf("app.dev.pardot")) y = getPardotUrl() + "/analytics?";
        else var y = g + piTUrl + "/analytics?";
        var h = document.getElementsByTagName("head")[0];
        piScriptObj[piScriptNum] = document.createElement("script"), piScriptObj[piScriptNum].type = "text/javascript", piScriptObj[piScriptNum].src = y + _, h.appendChild(piScriptObj[piScriptNum]), piScriptObj[piScriptNum].onload = function() {}
    }
    piScriptNum++
}

function piGetParameter(e, t) {
    var t = t + "=";
    if (e.length > 0) {
        var r = e.indexOf(t);
        if (-1 != r) {
            r += t.length;
            var i = e.indexOf("&", r);
            return -1 == i && (i = e.length), decodeURIComponent(e.substring(r, i))
        }
    }
    return null
}

function piGetCookie(e) {
    return document.cookie.length > 0 && (c_start = document.cookie.indexOf(e + "="), -1 != c_start) ? (c_start = c_start + e.length + 1, c_end = document.cookie.indexOf(";", c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : ""
}

function piSetCookie(e, t, r) {
    var i = new Date;
    i.setDate(i.getDate() + r), document.cookie = e + "=" + escape(t) + (null == r ? "" : ";expires=" + i.toGMTString() + ";path=" + escape("/"))
}
var piVersion = "1.0.1",
    piScriptNum = 0,
    piScriptObj = new Array;
piTracker(),
    function() {
        function e(e) {
            if (document.querySelectorAll) return document.querySelectorAll("." + e);
            var t = document.getElementsByTagName("a"),
                r = new Array;
            for (i = 0; i < t.length; i++) {
                var a = t[i].getAttribute("class");
                for (a || (a = t[i].className), ecl = a.split(" "), j = 0; j < ecl.length; j++) ecl[j].toLowerCase() == e.toLowerCase() && r.push(t[i])
            }
            return r
        }

        function t(t) {
            return "function" != typeof document.getElementsByClassName ? e(t) : document.getElementsByClassName(t)
        }

        function r(e) {
            var t, r = getPardotUrl() + "/analytics?",
                i = {
                    url: encodeURIComponent(e),
                    title: "",
                    referrer: pi.tracker.url
                };
            for (t in pi.tracker) pi.tracker.hasOwnProperty(t) && !i.hasOwnProperty(t) && (i[t] = pi.tracker[t]), r += "&" + t + "=" + i[t];
            var a = "analyticsCB" + (new Date).getTime();
            r += "&piClickCallback=" + a, pi[a] = function() {
                window.location = e
            };
            var n = document.createElement("script");
            n.type = "text/javascript", n.src = r;
            var c = document.getElementsByTagName("script")[0];
            c.parentNode.insertBefore(n, c)
        }! function() {
            var e, i, a;
            for (e = t("pardotTrackClick"), i = 0; i < e.length; i++) {
                var n = function(e) {
                    var t = e.currentTarget ? e.currentTarget : e.srcElement;
                    if (t) {
                        var i = t.getAttribute("href");
                        if (i) return r(i), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
                    }
                };
                (a = e[i]).addEventListener ? a.addEventListener("click", n, !1) : a.attachEvent && a.attachEvent("onclick", n)
            }
        }()
    }();