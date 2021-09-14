/*@preserve
 ***Version 1.56.0***
 */

/*@license
 *                       Copyright 2002 - 2018 Qualtrics, LLC.
 *                        CONFIDENTIAL.  All rights reserved.
 *
 * Notice: All code, text, concepts, and other information herein (collectively, the
 * "Materials") are the sole property of Qualtrics, LLC, except to the extent
 * otherwise indicated. The Materials are proprietary to Qualtrics and are protected
 * under all applicable laws, including copyright, patent (as applicable), trade
 * secret, and contract law. Disclosure or reproduction of any Materials is strictly
 * prohibited without the express prior written consent of an authorized signatory
 * of Qualtrics. For disclosure requests, please contact notice@qualtrics.com.
 */

try {
    (window["WAFQualtricsWebpackJsonP-hosted-1.56.0"] = window["WAFQualtricsWebpackJsonP-hosted-1.56.0"] || []).push([
        [10], {
            17: function(e, t, n) {
                "use strict";
                n.d(t, "a", function() {
                    return i
                }), n.d(t, "e", function() {
                    return o
                }), n.d(t, "d", function() {
                    return a
                }), n.d(t, "c", function() {
                    return s
                }), n.d(t, "b", function() {
                    return c
                });
                var r = [],
                    i = function(e) {
                        var t = e;
                        return "string" == typeof e && (t = document.getElementById(e)), t
                    },
                    o = function(e, t) {
                        var n;
                        13 !== e.which && 32 !== e.which || (e.preventDefault(), (n = document.querySelector('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])')) && n.focus(), t())
                    },
                    a = function(e, t, n, i) {
                        void 0 === i && (i = !1), r = r || [], e && (r.push({
                            elementToObserve: e,
                            eventName: t,
                            eventHandler: n,
                            preventRemove: i || !1
                        }), e.addEventListener(t, n, !1))
                    },
                    s = function(e) {
                        return "string" == typeof e
                    },
                    c = function(e) {
                        return "object" == typeof e && e instanceof Array
                    }
            },
            27: function(e, t) {
                QSI.history && !window.QTest || (QSI.historyStorage = {
                    historySessionName: "QSI_HistorySession",
                    get useCookie() {
                        return "sessionStorage" !== QSI.historyStorageType
                    },
                    get limit() {
                        return this.useCookie ? 2e3 : 1e4
                    },
                    getHistorySessionData: function() {
                        return this.useCookie ? QSI.cookie.get(this.historySessionName) : sessionStorage.getItem(this.historySessionName)
                    },
                    eraseHistorySessionData: function() {
                        this.useCookie ? QSI.cookie.erase(this.historySessionName) : sessionStorage.removeItem(this.historySessionName)
                    },
                    setHistorySessionData: function(e) {
                        this.useCookie ? QSI.cookie.set(this.historySessionName, e, 0) : sessionStorage.setItem(this.historySessionName, e)
                    }
                }, QSI.history = {
                    historyStorage: QSI.historyStorage,
                    logVisit: function() {
                        this.logCurrentURL(), this.logSearch(), this.startFocusTracking(), this.logReferrer()
                    },
                    startFocusTracking: function() {
                        if (!this.started) try {
                            this.started = !0, this.focusTime = this.getFocusTimeFromBrowserStorage(), this.blurTime = this.getBlurTimeFromBrowserStorage();
                            var e = this;
                            setInterval(function() {
                                try {
                                    e.focused ? e.focusTime += 1 : e.blurTime += 1
                                } catch (e) {
                                    "undefined" != typeof QSI && QSI.dbg && QSI.dbg.e && QSI.dbg.e(e)
                                }
                            }, 1e3);
                            var t, n = function() {
                                try {
                                    e.focused = !0
                                } catch (e) {
                                    "undefined" != typeof QSI && QSI.dbg && QSI.dbg.e && QSI.dbg.e(e)
                                }
                            };
                            n(), QSI.util.observe(window, "focus", n), QSI.util.observe(window, "blur", function() {
                                try {
                                    e.focused = !1
                                } catch (e) {
                                    "undefined" != typeof QSI && QSI.dbg && QSI.dbg.e && QSI.dbg.e(e)
                                }
                            }), t = QSI.Browser.isMobile ? "pagehide" : "unload", QSI.util.observe(window, t, function() {
                                try {
                                    QSI.profile.set("History", "BlurTime", e.blurTime), QSI.profile.set("History", "FocusTime", e.focusTime)
                                } catch (e) {
                                    "undefined" != typeof QSI && QSI.dbg && QSI.dbg.e && QSI.dbg.e(e)
                                }
                            })
                        } catch (e) {
                            QSI.dbg.e(e)
                        }
                    },
                    logSite: function(e, t) {
                        var n, r = this.historyStorage.getHistorySessionData();
                        if (r) {
                            var i = (r = decodeURIComponent(r)).split("|");
                            n = i[i.length - 1].split("~")[0], r += "|"
                        } else r = "", n = "";
                        e !== n && (r += e + "~" + t, this.writeHistory(r))
                    },
                    writeHistory: function(e, t) {
                        if (null != t && t <= 0) this.historyStorage.eraseHistorySessionData();
                        else {
                            t = t || QSI.historyStorageSize || QSI.global.maxCookieSize || this.historyStorage.limit;
                            var n = encodeURIComponent(e),
                                r = this.limitSize(n, t);
                            try {
                                this.historyStorage.setHistorySessionData(r)
                            } catch (n) {
                                e = decodeURIComponent(r), this.writeHistory(e, t - 500)
                            }
                        }
                    },
                    limitSize: function(e, t) {
                        if (!e.length) return e;
                        for (t = t || this.historyStorage.limit; e.length > t;) {
                            var n = decodeURIComponent(e).split("|");
                            n.splice(0, 1), e = n.join("|"), e = encodeURIComponent(e)
                        }
                        return e
                    },
                    get: function() {
                        var e = this.historyStorage.getHistorySessionData();
                        return e || (e = []), e = this.limitSize(e), decodeURIComponent(e)
                    },
                    logCurrentURL: function() {
                        var e = window.location.href,
                            t = 1 * new Date;
                        this.logSite(e, t)
                    },
                    getReferrer: function() {
                        return document.referrer
                    },
                    logSearch: function() {
                        var e, t, n = this.getReferrer();
                        if (n.search(/(google.com)|(bing.com)|(yahoo.com)/) >= 0) {
                            var r = "";
                            n.search(/(google.com)|(bing.com)/) >= 0 ? (e = /q=(.*?)\&/, (t = n.match(e)) && t.length && t[1] && (r = t[1])) : n.search(/yahoo.com/) >= 0 && (e = /p=(.*?)\&/, (t = n.match(e)) && t.length && t[1] && (r = t[1])), r = decodeURIComponent(r), QSI.profile.set("History", "SearchTerm", r)
                        }
                    },
                    logReferrer: function() {
                        var e = this.getReferrer();
                        e && (QSI.util.build("a", {
                            href: e
                        }).hostname !== document.location.host && QSI.profile.set("History", "SiteReferrer", e), QSI.profile.set("History", "PageReferrer", e))
                    },
                    logIntercept: function(e, t) {
                        t && this.logActionSet(t)
                    },
                    logActionSet: function(e) {
                        if (e.search("AS_") >= 0) {
                            var t = e,
                                n = 1 * new Date;
                            QSI.profile.set("ActionSetHistory", t, n), QSI.profile.set("ActionSetHistory", t, n, 1)
                        }
                    },
                    logSurvey: function(e, t) {
                        QSI.profile.set("QualtricsSurveyHistory", e, t, 1)
                    },
                    getSiteReferrer: function() {
                        return QSI.profile.get("History", "SiteReferrer")
                    },
                    getPageReferrer: function() {
                        return QSI.profile.get("History", "PageReferrer")
                    },
                    getSearch: function() {
                        var e = QSI.profile.get("History", "SearchTerm");
                        return e || (e = ""), e
                    },
                    getTimeOnSite: function() {
                        var e = this.focusTime;
                        return e + this.blurTime + "|" + e
                    },
                    getFocusTimeFromBrowserStorage: function() {
                        var e = QSI.profile.get("History", "FocusTime");
                        return e || (e = 0), e
                    },
                    getBlurTimeFromBrowserStorage: function() {
                        var e = QSI.profile.get("History", "BlurTime");
                        return e || (e = 0), e
                    },
                    getActionSetHistory: function(e, t) {
                        var n = QSI.profile.get("ActionSetHistory", e, t);
                        return n || (n = 0), n
                    },
                    getPageCount: function() {
                        var e, t, n = this.historyStorage.getHistorySessionData(),
                            r = 0,
                            i = [];
                        if (n) {
                            var o = (n = decodeURIComponent(n)).split("|");
                            for (t = o.length, e = 0; e < t; e++) i.push(o[e].split("~")[0]);
                            var a = {};
                            for (t = i.length, e = 0; e < t; e++) a[i[e]] || (r++, a[i[e]] = !0)
                        }
                        return {
                            unique: r,
                            total: i.length
                        }
                    }
                })
            },
            28: function(e, t) {
                QSI.profile || (QSI.profile = {
                    namespace: "QSI_",
                    set: function(e, t, n, r) {
                        if (void 0 === e || void 0 === t || void 0 === n) throw new Error("To few arguments");
                        try {
                            var i = this.getStorage(r),
                                o = this.namespace + e,
                                a = i.getItem(o);
                            (a = a ? JSON.parse(a) : {})[t] = n, a = JSON.stringify(a), i.setItem(o, a)
                        } catch (e) {
                            QSI.dbg.e("error setting profile item"), QSI.dbg.e(e)
                        }
                    },
                    get: function(e, t, n) {
                        var r = this.getStorage(n),
                            i = this.namespace + e,
                            o = r.getItem(i);
                        return o ? (o = JSON.parse(o), t ? o[t] ? o[t] : null : o) : null
                    },
                    erase: function(e, t, n) {
                        var r = this.getStorage(n),
                            i = this.namespace + e;
                        if (t) {
                            var o = JSON.parse(r.getItem(i));
                            delete o[t], o = JSON.stringify(o), r.setItem(i, o)
                        } else r.removeItem(i)
                    },
                    getStorage: function(e) {
                        if (this.hasSessionStorage()) return e ? localStorage : sessionStorage;
                        if (QSI.UserDataStorage) {
                            var t = QSI.UserDataStorage;
                            return e ? t.isPermanent(!0) : t.isPermanent(!1), t
                        }
                        return QSI.CookieStorage
                    },
                    hasSessionStorage: function() {
                        var e = "qualtricssessionstoragetestkey",
                            t = window.sessionStorage;
                        try {
                            return t.setItem(e, e), t.removeItem(e), !0
                        } catch (e) {
                            return !1
                        }
                    }
                })
            },
            29: function(e, t) {
                void 0 === QSI.util && (QSI.util = {
                    $: function(e) {
                        return "string" == typeof e && (e = document.getElementById(e)), e
                    },
                    forOwn: function(e, t) {
                        if (e && e instanceof Object && this.isFunction(t))
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t(e[n], n, e)
                    },
                    build: function(e, t, n) {
                        var r = document.createElement(e);
                        if (t) {
                            var i = this;
                            QSI.util.forOwn(t, function(e, n) {
                                switch (n) {
                                    case "style":
                                        i.setStyle(r, t[n]);
                                        break;
                                    case "className":
                                        r.className = t[n];
                                        break;
                                    case "id":
                                        r.id = t[n];
                                        break;
                                    default:
                                        r.setAttribute(n, t[n])
                                }
                            })
                        }
                        if (n)
                            if (QSI.util.isString(n)) "style" === e && r.styleSheet ? r.styleSheet.cssText = n : r.appendChild(document.createTextNode(String(n)));
                            else if (QSI.util.isArray(n))
                            for (var o = 0, a = n.length; o < a; o++) {
                                var s = n[o];
                                "string" == typeof s || "number" == typeof s ? r.appendChild(document.createTextNode(String(s))) : s && s.nodeType && r.appendChild(s)
                            }
                        return r
                    },
                    setStyle: function(e, t) {
                        QSI.util.forOwn(t, function(n, r) {
                            try {
                                e.style[r] = t[r]
                            } catch (e) {
                                QSI.dbg.e(e)
                            }
                        })
                    },
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isArray: function(e) {
                        return "object" == typeof e && e instanceof Array
                    },
                    getQueryParam: function(e, t) {
                        t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                        var n = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
                        return null === n ? "" : n[1]
                    },
                    observe: function(e, t, n, r) {
                        this.obs = this.obs || [], e && (this.obs.push({
                            el: e,
                            e: t,
                            f: n,
                            preventRemove: r || !1
                        }), e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + this.capFirst(t)] && (e["on" + this.capFirst(t)] = n))
                    },
                    stopObserving: function(e, t, n) {
                        e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + this.capFirst(t)] && (e["on" + this.capFirst(t)] = null)
                    },
                    removeObservers: function() {
                        var e = this;
                        this.each(this.obs || [], function(t) {
                            t.preventRemove || e.stopObserving(t.el, t.e, t.f)
                        })
                    },
                    remove: function(e) {
                        e && e.parentNode && e.parentNode.removeChild(e)
                    },
                    isFunction: function(e) {
                        return "function" == typeof e || !1
                    },
                    capFirst: function(e) {
                        return e.charAt(0).toUpperCase() + e.slice(1)
                    },
                    each: function(e, t) {
                        var n = e.length;
                        if (n)
                            for (var r = 0; r < n; r++) t(e[r], r)
                    }
                })
            },
            30: function(e, t) {
                QSI.AssetManager = {
                    promiseFetch: function(e, t, n) {
                        var r = QSI.Orchestrator.Deferred(),
                            i = new XMLHttpRequest;
                        return i.open(e, t, !0), i.withCredentials = !0, "POST" === e && i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), i.onreadystatechange = function() {
                            4 === i.readyState && (200 === i.status ? r.resolve(i.responseText) : r.reject(i.responseText))
                        }, i.send(n), r.promise()
                    },
                    generateDefinitionRequestURL: function(e, t, n, r) {
                        var i = QSI.baseURL + "Asset.php?",
                            o = [];
                        if (t = t || n.version, o.push("Module=" + e), o.push("Version=" + t), null != r && o.push("Q_InterceptID=" + r), null === n.Q_NOCACHE && o.push("Q_NOCACHE"), QSI.CORSOrigin && o.push("Q_ORIGIN=" + QSI.CORSOrigin), void 0 !== n.Q_CLIENTVERSION && null !== n.Q_CLIENTVERSION && o.push("Q_CLIENTVERSION=" + n.Q_CLIENTVERSION), void 0 !== n.Q_CLIENTTYPE && null !== n.Q_CLIENTTYPE) {
                            var a = "Q_CLIENTTYPE=" + n.Q_CLIENTTYPE;
                            o.push(a)
                        }
                        return i += o.join("&")
                    },
                    loadDefinition: function(e, t) {
                        var n = QSI.Orchestrator.Deferred(),
                            r = new XMLHttpRequest;
                        return r.open("GET", e, !0), r.onreadystatechange = function() {
                            if (4 === r.readyState)
                                if (200 === r.status) try {
                                    var e = JSON.parse(r.responseText);
                                    e.Error ? n.reject(e) : (t(e), n.resolve(r.responseText))
                                } catch (e) {
                                    n.reject(r.responseText)
                                } else n.reject(r.responseText)
                        }, r.send(), n.promise()
                    },
                    promiseLoadIntercept: function(e, t, n, r) {
                        var i = t.InterceptID,
                            o = QSI.AssetManager.generateDefinitionRequestURL(i, t.InterceptRevision, n);
                        return r.startComponentTimer("AssetDefinition-" + i), QSI.AssetManager.loadDefinition(o, function(t) {
                            r.endComponentTimer("AssetDefinition-" + i), QSI.Request[e].Intercepts[i].Intercept = t.InterceptDefinition
                        })
                    },
                    promiseLoadCreative: function(e, t, n, r) {
                        var i = t.Decision.Creative.ID;
                        if ("CR_NoCreative" !== i) {
                            var o = QSI.AssetManager.generateDefinitionRequestURL(i, t.Decision.Creative.Revision, n, t.InterceptID);
                            return r.startComponentTimer("AssetDefinition-" + i), QSI.AssetManager.loadDefinition(o, function(n) {
                                r.endComponentTimer("AssetDefinition-" + i), QSI.util.isLegacyCreative(n.CreativeDefinition.Type) && (n.CreativeDefinition = QSI.AssetManager.sortCreativeDefinition(n.CreativeDefinition)), QSI.Request[e].Intercepts[t.InterceptID].Creative = n.CreativeDefinition
                            })
                        }
                        return QSI.Request[e].Intercepts[t.InterceptID].Creative = null, QSI.Orchestrator.Deferred().resolve(null)
                    },
                    promiseLoadPopUnderTarget: function(e, t, n) {
                        var r = QSI.AssetManager.generateDefinitionRequestURL(t.Decision.PopUnderTarget.ID, t.Decision.PopUnderTarget.Revision, n, t.InterceptID);
                        return QSI.AssetManager.loadDefinition(r, function(n) {
                            QSI.Request[e].Intercepts[t.InterceptID].PopUnderTarget = n.CreativeDefinition
                        })
                    },
                    promiseLoadScript: function(e, t, n, r) {
                        var i, o = e + ":" + QSI.global.clientVersion;
                        if (-1 !== n.global.alreadyFetchedJSModules.indexOf(o)) return r.markComponentAlreadyFetched("JSModule-" + e), (i = QSI.Orchestrator.Deferred()).resolve(), i.promise();
                        i = QSI.Orchestrator.Deferred();
                        var a = document.createElement("script");
                        a.src = QSI.global.hostedJSLocation + e + "Module.js?";
                        var s = [];
                        return void 0 !== QSI.Orchestrator && void 0 !== QSI.Orchestrator.getClientVersionQueryString && s.push(QSI.Orchestrator.getClientVersionQueryString()), (-1 !== window.location.href.indexOf("Q_DEBUG") || QSI.config.debug) && s.push("Q_DEBUG=true"), a.src += s.join("&"), a.defer = !0, a.addEventListener("load", function() {
                            try {
                                !0 === QSI.wrongModuleVersionRequested && (i.reject(), QSI.dbg.e("Script: " + e + " failed to load because an unavailable version (" + t + ") was requested.")), n.global.alreadyFetchedJSModules.push(o), r.endComponentTimer("JSModule-" + e), i.resolve()
                            } catch (e) {
                                "undefined" != typeof QSI && QSI.dbg && QSI.dbg.e && QSI.dbg.e(e)
                            }
                        }, !1), a.addEventListener("error", function() {
                            try {
                                i.reject(), QSI.dbg.e("Script: " + e + " failed to load.")
                            } catch (e) {
                                "undefined" != typeof QSI && QSI.dbg && QSI.dbg.e && QSI.dbg.e(e)
                            }
                        }), r.startComponentTimer("JSModule-" + e), document.body.appendChild(a), i.promise()
                    },
                    sortCreativeDefinition: function(e) {
                        if (e && e.Options && e.Options.elements && e.Options.elements.Elements) {
                            var t = e.Options.elements.Elements;
                            t = QSI.util.stableSort(t, function(e, t) {
                                return Number(e.style.zIndex) < Number(t.style.zIndex) ? -1 : Number(e.style.zIndex) > Number(t.style.zIndex) ? 1 : 0
                            });
                            for (var n = 0; n < t.length; n++) t[n].style && t[n].style.zIndex && (t[n].style.zIndex = QSI.global.currentZIndex++);
                            return t = QSI.util.stableSort(t, function(e, t) {
                                return Number(e.position.left) < Number(t.position.left) ? -1 : Number(e.position.left) > Number(t.position.left) ? 1 : 0
                            }), t = QSI.util.stableSort(t, function(e, t) {
                                return Number(e.position.top) < Number(t.position.top) ? -1 : Number(e.position.top) > Number(t.position.top) ? 1 : 0
                            }), e.Options.elements.Elements = t, e
                        }
                        return e
                    }
                }
            },
            50: function(e, t, n) {
                "use strict";
                n.r(t);
                n(27), n(28), n(29), n(30);
                var r = n(17),
                    i = function() {
                        return function() {
                            var e = this;
                            this.trackElements = function() {
                                if (0 == e.loaded) {
                                    e.loadCounts();
                                    var t = window.QSI,
                                        n = t.dbg,
                                        i = t.global.eventTrackers;
                                    Object.keys(i).forEach(function(t) {
                                        var n = i[t];
                                        e.trackElement(n, t)
                                    }), Object(r.d)(window, "beforeunload", function() {
                                        try {
                                            e.storeCounts()
                                        } catch (e) {
                                            void 0 !== window.QSI && n && n.e && n.e(e)
                                        }
                                    }), e.loaded = !0
                                }
                            }, this.trackElement = function(t, n) {
                                var i = window.QSI.dbg,
                                    o = Object(r.a)(t);
                                o && Object(r.d)(o, "click", function() {
                                    try {
                                        e.track(n)
                                    } catch (e) {
                                        void 0 !== window.QSI && i && i.e && i.e(e)
                                    }
                                })
                            }, this.track = function(t) {
                                e.clicked = !0, e.counts[t] ? e.counts[t]++ : e.counts[t] = 1
                            }, this.storeCounts = function() {
                                if (!0 === e.clicked) {
                                    var t = window.QSI.cookie,
                                        n = JSON.stringify(e.counts);
                                    t.set(e.cookieName, n)
                                }
                            }, this.loadCounts = function() {
                                var t = window.QSI.cookie.get(e.cookieName);
                                t && (e.counts = JSON.parse(t))
                            }, this.get = function(t) {
                                return e.counts[t] ? e.counts[t] : 0
                            }, this.incrementEventList = function() {
                                if ("_qsie" in window && Object(r.b)(window._qsie))
                                    for (var t = 0, n = window._qsie.length; t < n; t++) {
                                        var i = window._qsie[t];
                                        Object(r.c)(i) && e.track(i)
                                    }
                            }, this.counts = {}, this.cookieName = "QSI_CT", this.loaded = !1, this.clicked = !1
                        }
                    }(),
                    o = n(0),
                    a = function() {
                        function e(t) {
                            var n = this;
                            this.metricName = e.metricName, this.components = e.components, this.overallLatencyStartTime = null, this.overallLatency = null, this.componentStartTimes = {}, this.componentLatencies = {}, this.isDuplicateScriptExecution = !1, this.setRequestId = function(e) {
                                n.requestId = e
                            }, this.startTimer = function() {
                                n.latencyStartTime = Date.now()
                            }, this.endTimer = function() {
                                null !== n.latencyStartTime ? n.overallLatency = Date.now() - n.latencyStartTime : n.debugLog.e("Tried to log overall end time without a start time.")
                            }, this.startComponentTimer = function(e) {
                                n.componentStartTimes[e] = Date.now()
                            }, this.endComponentTimer = function(e) {
                                var t = n.componentStartTimes[e];
                                void 0 !== t ? n.componentLatencies[e] = Date.now() - t : n.debugLog.e("Tried to log a component end time without a component start time.  Component name: " + e)
                            }, this.markComponentAlreadyFetched = function(t) {
                                n.componentLatencies[t] || (n.componentLatencies[t] = e.alreadyFetchedMarker)
                            }, this.markDuplicateScriptExecution = function() {
                                n.isDuplicateScriptExecution = !0
                            }, this.send = function() {
                                try {
                                    if (null === n.overallLatency) return void n.debugLog.e("Incomplete Latency Data Provided");
                                    var t = o.a.baseURL + "Ajax.php?action=LatencyLog&" + o.a.getClientVersionQueryString(),
                                        r = [];
                                    for (var i in o.a.Request) Object.prototype.hasOwnProperty.call(o.a.Request, i) && i !== n.requestId && r.push(i);
                                    var a = {
                                        MetricName: e.metricName,
                                        Latency: n.overallLatency,
                                        ComponentLatencies: n.componentLatencies,
                                        AdditionalData: {
                                            RequestID: n.requestId,
                                            ClientURL: o.a.currentURL,
                                            UserAgent: navigator.userAgent,
                                            BrandID: o.a.global.brandID,
                                            BrandDC: o.a.global.brandDC,
                                            OtherRequestIDsExecuted: r,
                                            IsDuplicateScriptExecution: n.isDuplicateScriptExecution
                                        }
                                    };
                                    QSI.util.sendHttpRequest({
                                        type: "POST",
                                        url: t,
                                        header: {
                                            "Content-type": "application/x-www-form-urlencoded"
                                        },
                                        includeCookies: !1,
                                        data: QSI.util.buildQueryString({
                                            LoggingData: JSON.stringify(a)
                                        })
                                    })
                                } catch (e) {
                                    n.debugLog.e(e)
                                }
                            }, this.sampledSend = function(e) {
                                try {
                                    Math.random() <= e / 100 == !0 && n.send()
                                } catch (e) {
                                    n.debugLog.e(e)
                                }
                            }, this.debugLog = t
                        }
                        return e.metricName = "si.SILatency", e.alreadyFetchedMarker = "ALREADY_FETCHED", e.components = {
                            CORE_MODULE: "coreModuleRequest",
                            TARGETING: "targetingRequest",
                            DPR_TARGETING: "dprTargetingRequest",
                            XMD_DEBUG_TARGETING: "xmdDebugTargetingRequest",
                            ASSETS_AND_MODULES: "allAssetDefinitionsAndJSModules",
                            CONTACT_FREQUENCY: "contactFrequencyCheck"
                        }, e
                    }(),
                    s = function() {
                        function e(e, t, n) {
                            this.retryerName = e, this.retryLimit = t, this.retryBackOffFormula = n, this.retryCount = 0
                        }
                        return e.prototype.backOffAndRetry = function(e) {
                            this.retryCount < this.retryLimit ? (this.retryCount++, setTimeout(e, this.retryBackOffFormula(this.retryCount))) : window.QSI.dbg.e("Retryer for " + this.retryerName + " - Exceeded retry limit of " + this.retryLimit + "; No longer retrying")
                        }, e.prototype.getRetryCount = function() {
                            return this.retryCount
                        }, e.prototype.resetRetryCount = function() {
                            this.retryCount = 0
                        }, e
                    }(),
                    c = function(e, t, n, r) {
                        return new(n || (n = Promise))(function(i, o) {
                            function a(e) {
                                try {
                                    c(r.next(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function s(e) {
                                try {
                                    c(r.throw(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                                    e(t)
                                })).then(a, s)
                            }
                            c((r = r.apply(e, t || [])).next())
                        })
                    },
                    u = function(e, t) {
                        var n, r, i, o, a = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return o = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                            return this
                        }), o;

                        function s(o) {
                            return function(s) {
                                return function(o) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                        switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                            case 0:
                                            case 1:
                                                i = o;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: o[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = o[1], o = [0];
                                                continue;
                                            case 7:
                                                o = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                    a.label = o[1];
                                                    break
                                                }
                                                if (6 === o[0] && a.label < i[1]) {
                                                    a.label = i[1], i = o;
                                                    break
                                                }
                                                if (i && a.label < i[2]) {
                                                    a.label = i[2], a.ops.push(o);
                                                    break
                                                }
                                                i[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        o = t.call(e, a)
                                    } catch (e) {
                                        o = [6, e], r = 0
                                    } finally {
                                        n = i = 0
                                    }
                                    if (5 & o[0]) throw o[1];
                                    return {
                                        value: o[0] ? o[1] : void 0,
                                        done: !0
                                    }
                                }([o, s])
                            }
                        }
                    },
                    l = function(e, t) {
                        for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
                        return e
                    },
                    d = function() {
                        function e() {
                            var e = this;
                            this.init = function(t, r, i) {
                                if (e.latencyLog = t, e.debugLog = r, e.setupJFEMessageEventHandlerForIOSOptimization(), window.QSI.windows || (window.QSI.windows = {}), window.addEventListener("message", e.addWindowHandlersPostMessageListener), e.latencyLog.startTimer(), o.a.config.evaluate && e.handleSPAEvaluation(o.a.config.evaluate), o.a.global.legacyId) {
                                    o.a.Request || (o.a.Request = {}), o.a.debugConfig = o.a.debugConfig || {};
                                    var a = o.a.global.legacyId,
                                        s = {
                                            id: a
                                        };
                                    e.latencyLog.setRequestId(a), ~Object.keys(o.a.Request).indexOf(a) && t.markDuplicateScriptExecution(), 0 === a.indexOf("ZN") ? s.ZoneID = a : s.InterceptID = a;
                                    var c = void 0;
                                    if (o.a.global.isHostedJS())(void 0 !== (c = e.parseQueryString(window.location.href)).Q_DEBUG || o.a.config.debug) && (s.Q_DEBUG = null, e.debugLog.enableFullDebug()), (o.a.config.editing || "0" === o.a.global.version) && (s.version = "0");
                                    else {
                                        var u = void 0;
                                        if (i) u = i;
                                        else try {
                                            var l = document.querySelectorAll("script"),
                                                d = [];
                                            for (var g in l) Object.prototype.hasOwnProperty.call(l, g) && (d[g] = l[g]);
                                            var p = o.a.global.baseURL;
                                            0 === p.indexOf("https://") ? p = p.substring(8) : 0 === p.indexOf("http://") ? p = p.substring(7) : 0 === p.indexOf("//") && (p = p.substring(2)), u = d.filter(function(e) {
                                                return (-1 !== e.src.indexOf(p + "/WRSiteInterceptEngine/?") || -1 !== e.src.indexOf(p + "/SIE/?")) && (-1 === e.src.indexOf("Q_Impress") && -1 === e.src.indexOf("Q_Redirect") && -1 === e.src.indexOf("Q_Click") && -1 === e.src.indexOf("Q_DPR"))
                                            })[0].src
                                        } catch (t) {
                                            e.debugLog.e("An error occurred while loading the intercept. " + t)
                                        }
                                        void 0 !== (c = e.parseQueryString(u)).Q_NOCACHE && (s.Q_NOCACHE = null), void 0 !== c.Q_BOOKMARKLET && (s.Q_BOOKMARKLET = null, s.Q_DEBUG = null, e.debugLog.enableFullDebug()), void 0 !== c.Q_DEBUG && (s.Q_DEBUG = null, e.debugLog.enableFullDebug()), void 0 !== c.Q_VERSION && (s.version = c.Q_VERSION)
                                    }
                                    return void 0 !== o.a.global.clientVersion && null !== o.a.global.clientVersion && (s.Q_CLIENTVERSION = o.a.global.clientVersion), void 0 !== o.a.global.clientType && null !== o.a.global.clientType && (s.Q_CLIENTTYPE = o.a.global.clientType, void 0 !== o.a.clientTypeVariant && (s.Q_CLIENTTYPE += o.a.clientTypeVariant)), -1 !== window.location.search.indexOf("Q_WAF_PREVIEWER") ? Promise.all([n.e(15), n.e(1), n.e(13)]).then(n.bind(null, 52)).then(function(e) {
                                        new(0, e.LivePreviewer)
                                    }).catch(function(t) {
                                        e.debugLog.e("An error occurred while loading the live previewer. " + t)
                                    }) : (e.load(s, !1), Promise.resolve(null))
                                }
                                if (!o.a.Request) {
                                    o.a.Request = {};
                                    for (var f = document.querySelectorAll("[data-siteinterceptscript]"), h = 0; h < f.length; h++) {
                                        var S = f[h];
                                        o.a.isDebug = o.a.isDebug || S.hasAttribute("data-qdebug") || -1 !== window.location.href.indexOf("Q_DEBUG"), o.a.isDebug && e.debugLog.enableFullDebug();
                                        var I = {};
                                        return S.hasAttribute("data-interceptid") && (I.InterceptID = S.getAttribute("data-interceptid"), I.id = I.InterceptID), S.hasAttribute("data-zoneid") && (I.ZoneID = S.getAttribute("data-zoneid"), I.id = I.ZoneID), S.hasAttribute("data-qnocache") && (I.Q_NOCACHE = null), S.hasAttribute("data-qbookmarklet") && (I.Q_BOOKMARKLET = null), o.a.isDebug && (I.Q_DEBUG = null), S.hasAttribute("data-version") && (I.version = S.getAttribute("data-version")), e.load(I, !1), Promise.resolve(null)
                                    }
                                }
                            }, this.generateQueryString = o.a.generateQueryString, this.getClientVersionQueryString = o.a.getClientVersionQueryString, this.Deferred = function() {
                                var t = {},
                                    n = "pending",
                                    r = [],
                                    i = [],
                                    o = [],
                                    a = [],
                                    s = e,
                                    c = {
                                        state: function() {
                                            return n
                                        },
                                        then: function(e, t) {
                                            return this.done(e).fail(t), this
                                        },
                                        done: function(e) {
                                            if ("pending" === n && e) o.push(e);
                                            else if ("resolved" === n) try {
                                                e.apply(this, r)
                                            } catch (e) {
                                                s.debugLog.e(e)
                                            }
                                            return this
                                        },
                                        fail: function(e) {
                                            if ("pending" === n && e) a.push(e);
                                            else if ("rejected" === n) try {
                                                e.apply(this, i)
                                            } catch (e) {
                                                s.debugLog.e(e)
                                            }
                                            return this
                                        },
                                        promise: function() {
                                            return c
                                        }
                                    };
                                return e.forOwn(c, function(e, n) {
                                    t[n] = c[n]
                                }), t.resolve = function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    "pending" === n && (n = "resolved", r = e, s.each(o, function(t) {
                                        try {
                                            t.apply(s, e)
                                        } catch (e) {
                                            s.debugLog.e(e)
                                        }
                                    }))
                                }, t.reject = function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    "pending" === n && (n = "rejected", i = e, s.each(a, function(t) {
                                        try {
                                            t.apply(s, e)
                                        } catch (e) {
                                            s.debugLog.e(e)
                                        }
                                    }))
                                }, t
                            }, this.getInterceptFromSiResponse = function(t) {
                                var n = e.lastSiResponse;
                                if (n && n.ClientSideIntercepts) {
                                    for (var r = null, i = 0; i < n.ClientSideIntercepts.length; i++) {
                                        if ((a = n.ClientSideIntercepts[i]).InterceptID === t) {
                                            r = a;
                                            break
                                        }
                                    }
                                    var o = null;
                                    if (n.Intercepts)
                                        for (i = 0; i < n.Intercepts.length; i++) {
                                            var a;
                                            if ((a = n.Intercepts[i]).InterceptID === t) {
                                                o = a;
                                                break
                                            }
                                        }
                                    return [r, o]
                                }
                                return null
                            }
                        }
                        return e.prototype.doSPAReload = function() {
                            if (window.QSI && window.QSI.API) {
                                var e = window.QSI.API;
                                e.unload(), setTimeout(function() {
                                    e.load()
                                }, 100)
                            }
                        }, e.prototype.handleSPAEvaluation = function(e) {
                            var t = this;
                            if (e && !window.QSI.spaEvaluation)
                                if (window.QSI.spaEvaluation = !0, e.onUrlPathChange) {
                                    if (window.history.pushState) {
                                        var n = window.history.pushState;
                                        window.history.pushState = function() {
                                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                            n.apply(window.history, e);
                                            try {
                                                this.doSPAReload()
                                            } catch (e) {
                                                this.debugLog.e("An error occurred while handling SPA reload on pushState. " + e)
                                            }
                                        }.bind(this)
                                    }
                                    if (window.history.replaceState) {
                                        var r = window.history.replaceState;
                                        window.history.replaceState = function() {
                                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                            r.apply(window.history, e);
                                            try {
                                                this.doSPAReload()
                                            } catch (e) {
                                                this.debugLog.e("An error occurred while handling SPA reload on replaceState. " + e)
                                            }
                                        }.bind(this)
                                    }
                                    window.addEventListener("popstate", function() {
                                        try {
                                            t.doSPAReload()
                                        } catch (e) {
                                            t.debugLog.e("An error occurred while handling SPA reload on popstate. " + e)
                                        }
                                    })
                                } else e.onHashChange && window.addEventListener("hashchange", function() {
                                    try {
                                        t.doSPAReload()
                                    } catch (e) {
                                        t.debugLog.e("An error occurred while handling SPA reload on hashchange. " + e)
                                    }
                                })
                        }, e.prototype.addWindowHandlersPostMessageListener = function(e) {
                            if ("string" == typeof e.data && -1 != e.data.indexOf("QSI_popunderwatcher_addWindowHandler")) {
                                var t = e.data.split("|"),
                                    n = t[1],
                                    r = t[2],
                                    i = e.source;
                                try {
                                    JSON.parse(window.sessionStorage.getItem("QSI_OptInIDsAndWindowNames"))[n] !== r || window.QSI.windows[r] || (window.QSI.windows[r] = i)
                                } catch (e) {
                                    this.debugLog.e(e)
                                }
                            }
                        }, e.prototype.load = function(e, t) {
                            var n = this,
                                r = window.QSI.AssetManager;
                            if (!t) {
                                this.targetingRetryer = new s("Targeting Call", 3, function(e) {
                                    return 2e3 * Math.pow(2, e - 1)
                                }), o.a.LoadingState.push(!0)
                            }
                            var i = this.generateTargetingURL(e);
                            this.xmdDebugRetryer = new s("Q_XMD_DEBUG Call", 3, function(e) {
                                return 2e3 * Math.pow(2, e - 1)
                            });
                            var c = t ? a.components.TARGETING + "_retry_" + this.targetingRetryer.getRetryCount() : a.components.TARGETING;
                            this.latencyLog.startComponentTimer(c);
                            var u = this.getTargetingPostData(),
                                l = r.promiseFetch("POST", i, u);
                            o.a.Request[e.id] = {
                                Intercepts: {},
                                Params: e
                            }, l.then(function() {
                                n.latencyLog.endComponentTimer(c)
                            }).then(this.handleTargetingResponse.bind(this, e), function(t) {
                                n.debugLog.e(t.Message), e.deferred && e.deferred.reject()
                            })
                        }, e.prototype.getTargetingPostData = function() {
                            var e;
                            return e = o.a.shouldStripQueryParamsInQLoc ? "Q_LOC=" + encodeURIComponent(window.location.href.split("?")[0]) : "Q_LOC=" + encodeURIComponent(window.location.href), void 0 !== o.a.config.externalReference && (e += "&extRef=" + encodeURIComponent(o.a.config.externalReference)), e
                        }, e.prototype.generateTargetingURL = function(e) {
                            var t = o.a.baseURL + "Targeting.php?",
                                n = [];
                            e.InterceptID && n.push("Q_InterceptID=" + e.InterceptID), e.ZoneID && n.push("Q_ZoneID=" + e.ZoneID), e.Q_XMD_DEBUG ? n.push("Q_XMD_DEBUG") : (null === e.Q_DEBUG && (n.push("Q_DEBUG"), o.a.isDebug = !0), null === e.Q_BOOKMARKLET && n.push("Q_BOOKMARKLET")), null === e.Q_NOCACHE && n.push("Q_NOCACHE"), void 0 !== e.version && null !== e.version && n.push("Version=" + e.version);
                            var r = window.QSI.profile.get("QualtricsSurveyHistory", "", 1);
                            if (r) {
                                var i = encodeURIComponent(Object.keys(r).toString());
                                n.push("Q_QualtricsSurveyTaken=" + i)
                            }
                            return void 0 !== e.Q_CLIENTVERSION && null !== e.Q_CLIENTVERSION && n.push("Q_CLIENTVERSION=" + e.Q_CLIENTVERSION), void 0 !== e.Q_CLIENTTYPE && null !== e.Q_CLIENTTYPE && n.push("Q_CLIENTTYPE=" + e.Q_CLIENTTYPE), t + n.join("&")
                        }, e.prototype.isMessageEventOriginAllowed = function(e) {
                            if (o.a.reg)
                                for (var t in o.a.reg)
                                    if (Object.prototype.hasOwnProperty.call(o.a.reg, t) && o.a.reg[t] && o.a.reg[t].options) {
                                        var n = o.a.reg[t].options;
                                        if (n.targetURLOrigin === e) return !0;
                                        if (n.target && n.target.OriginalURLOrigin === e) return !0
                                    }
                            return !1
                        }, e.prototype.doCSTargetingEvaluation = function(e, t, n) {
                            return c(this, void 0, void 0, function() {
                                var r, i, a, s, l, d = this;
                                return u(this, function(g) {
                                    switch (g.label) {
                                        case 0:
                                            return function(e) {
                                                e.EMBEDDED_TARGET = "EmbeddedTarget"
                                            }(r || (r = {})), Array.isArray(e.ClientSideIntercepts) ? (i = window.QSI.ClientSideTargeting, e.Intercepts = [], a = {
                                                Intercepts: {},
                                                Type: o.a.config.editing ? "Editing" : "Published"
                                            }, s = {
                                                FirstDCFInterceptPassed: !1
                                            }, l = e.ClientSideIntercepts.map(function(l) {
                                                return c(d, void 0, void 0, function() {
                                                    var c, d, g;
                                                    return u(this, function(u) {
                                                        switch (u.label) {
                                                            case 0:
                                                                return l ? l.Error ? (this.debugLog.log(l.Message), [3, 3]) : [3, 1] : [3, 3];
                                                            case 1:
                                                                return [4, new Promise(function(e, t) {
                                                                    setTimeout(function() {
                                                                        try {
                                                                            var n = i.evaluateIntercept(l, s, o.a.isDebug);
                                                                            e(n)
                                                                        } catch (e) {
                                                                            t(e)
                                                                        }
                                                                    })
                                                                })];
                                                            case 2:
                                                                c = u.sent(), d = c.interceptEntry, g = c.interceptDebugInfo, a.Intercepts[l.InterceptID] = g, d && (t.Intercepts[l.InterceptID] = {}, t.Intercepts[l.InterceptID].Targeting = d, e.Intercepts.push(d), d.Decision.Creative && (d.Decision.Creative.Type && (e.Modules[d.Decision.Creative.Type] = n), d.Decision.PopUnderTarget && (e.Modules.PopUnder = n)), d.Decision.Target && d.Decision.Target.DisplayType === r.EMBEDDED_TARGET && (e.Modules.EmbeddedTarget = n)), u.label = 3;
                                                            case 3:
                                                                return [2]
                                                        }
                                                    })
                                                })
                                            }), [4, Promise.all(l)]) : [2];
                                        case 1:
                                            return g.sent(), e.Intercepts.length > 0 && (e.Modules.ScreenCapture = n), o.a.isDebug && (e.DebugInfo = JSON.stringify(a)), delete e.Modules.DependencyResolver, [2]
                                    }
                                })
                            })
                        }, e.prototype.handleTargetingResponse = function(e, t) {
                            var r = this,
                                i = window.QSI,
                                a = i.AssetManager,
                                s = i.API,
                                l = i.EventTracker,
                                d = i.history;
                            try {
                                var g;
                                if ("SampleRejected" === t) return;
                                try {
                                    g = JSON.parse(t)
                                } catch (e) {
                                    return void this.debugLog.e("Failed to parse JSON of targeting response: " + t)
                                }
                                if (g.Error) return void this.debugLog.e(g.Message);
                                if ("XMD_RETRY" === g.Message) return void this.targetingRetryer.backOffAndRetry(function() {
                                    r.load(e, !0)
                                });
                                this.setGlobalVars(g);
                                var p = g.Modules;
                                g.RequestData && g.RequestData.reevaluateInterceptOnUrlChange && this.handleSPAEvaluation({
                                    onHashChange: !0,
                                    onUrlPathChange: !0
                                }), d.logVisit(), !o.a.Request[e.id].hasDependencies && o.a.Request[e.id].hasBeenResolved || (l.trackElements(), l.incrementEventList(), window._qsie = s.Events);
                                var f = this.isBrowserSupported();
                                if (p.Core && f) a.promiseLoadScript("Core", p.Core, o.a, this.latencyLog).then(function() {
                                    return c(r, void 0, void 0, function() {
                                        var t, r, i = this;
                                        return u(this, function(a) {
                                            switch (a.label) {
                                                case 0:
                                                    return a.trys.push([0, 4, , 5]), t = window.QSI.ClientSideTargeting, o.a.global.featureFlags["DUX.ClientSideTargetingM1"] && g.ClientSideIntercepts && g.ClientSideIntercepts.length > 0 ? (t.setEnabled(!0), [4, this.doCSTargetingEvaluation(g, o.a.Request[e.id], o.a.global.clientVersion)]) : [3, 2];
                                                case 1:
                                                    return a.sent(), [3, 3];
                                                case 2:
                                                    g.Intercepts && g.Intercepts.forEach(function(t) {
                                                        t && (t.Error ? i.debugLog.log(t.Message) : (o.a.Request[e.id].Intercepts[t.InterceptID] = {}, o.a.Request[e.id].Intercepts[t.InterceptID].Targeting = t))
                                                    }), a.label = 3;
                                                case 3:
                                                    return !g.Dependencies || o.a.global.featureFlags["DUX.ClientSideTargetingM1"] && g.ClientSideIntercepts && g.ClientSideIntercepts.length > 0 ? (n.e(16).then(n.bind(null, 53)).then(function(e) {
                                                        (0, e.addPopunderEmbeddedDataHandler)(e.updatePopunderEDCallback)
                                                    }), this.shouldMakeXMDDebugCall() ? (e.Q_XMD_DEBUG = !0, this.handleXMDDebug(e, g)) : this.loadModules(e, g)) : this.handleDependencyResolver(e, g), [3, 5];
                                                case 4:
                                                    return r = a.sent(), this.debugLog.e(r), [3, 5];
                                                case 5:
                                                    return [2]
                                            }
                                        })
                                    })
                                }, function() {});
                                else this.doneLoading(e, g)
                            } catch (e) {
                                this.debugLog.e(e)
                            }
                        }, e.prototype.shouldMakeXMDDebugCall = function() {
                            return !window.QSI.ClientSideTargeting.isEnabled() && (!!o.a.config.externalReference && o.a.isDebug)
                        }, e.prototype.handleDependencyResolver = function(e, t) {
                            var n = this,
                                r = window.QSI.AssetManager,
                                i = this.generateTargetingURL(e);
                            i += "&t=" + (new Date).getTime(), i += "&Q_VSI=" + encodeURIComponent(JSON.stringify(t.RequestData.validIntercepts)), i += "&Q_DPR=true", this.latencyLog.startComponentTimer(a.components.DPR_TARGETING);
                            var s = "";
                            for (var c in t.Dependencies) Object.prototype.hasOwnProperty.call(t.Dependencies, c) && ("SiteCatalyst" === c && (QSI["Resolve" + c].rootName = o.a.adobeVar), s += QSI["Resolve" + c].prepare(t.Dependencies[c]));
                            s += "&" + this.getTargetingPostData(), r.promiseFetch("POST", i, s).then(function() {
                                this.latencyLog.endComponentTimer(a.components.DPR_TARGETING)
                            }).then(this.handleTargetingResponse.bind(this, e), function(t) {
                                n.debugLog.e(t.Message), e.deferred && e.deferred.reject()
                            })
                        }, e.prototype.handleXMDDebug = function(e, t) {
                            var n = this,
                                r = window.QSI.AssetManager,
                                i = {};
                            t.Intercepts.forEach(function(e) {
                                if (e.Decision && e.Decision.ActionSetID) {
                                    var t = e.InterceptID,
                                        n = e.Decision.ActionSetID;
                                    i[t] = n
                                }
                            });
                            var o = this.generateTargetingURL(e),
                                s = "";
                            s += this.getTargetingPostData();
                            var c = "" + a.components.XMD_DEBUG_TARGETING + this.xmdDebugRetryer.getRetryCount();
                            this.latencyLog.startComponentTimer(c), r.promiseFetch("POST", o, s).then(function(r) {
                                n.latencyLog.endComponentTimer(c), n.handleXMDDebugResponse(e, t, i, r)
                            })
                        }, e.prototype.handleXMDDebugResponse = function(e, t, n, r) {
                            var i, a, s = this;
                            try {
                                i = JSON.parse(r)
                            } catch (e) {
                                return void this.debugLog.e("Failed to parse JSON of Q_XMD_DEBUG targeting response: " + r)
                            }
                            if (o.a.isDebug) try {
                                a = JSON.parse(t.DebugInfo)
                            } catch (e) {
                                return void this.debugLog.e("Failed to parse debugInfo JSON of Q_DEBUG targeting response: " + t)
                            }
                            o.a.isDebug && (i.Intercepts.forEach(function(e) {
                                if (e) {
                                    var t = e.InterceptID;
                                    Object.prototype.hasOwnProperty.call(a.Intercepts, t) && Object.prototype.hasOwnProperty.call(n, t) && e.Error && s.debugLog.log(e.Message)
                                }
                            }), i.DebugInfo = JSON.stringify(a), i.Modules.Debug = o.a.global.clientVersion), i.Intercepts.forEach(function(n) {
                                if (n)
                                    if (n.Error) s.debugLog.log(n.Message);
                                    else {
                                        for (var r = void 0, i = 0; i < t.Intercepts.length; i++) n.InterceptID === t.Intercepts[i].InterceptID && (r = t.Intercepts[i]);
                                        r && (n.ContactID = r.ContactID || n.ContactID, n.DirectoryID = r.DirectoryID || n.DirectoryID, n.SurveyID = r.SurveyID || n.SurveyID, n.DistributionID = r.DistributionID || n.DistributionID), o.a.Request[e.id].Intercepts[n.InterceptID] = {}, o.a.Request[e.id].Intercepts[n.InterceptID].Targeting = n
                                    }
                            }), this.loadModules(e, i)
                        }, e.prototype.loadDOMPurify = function() {
                            var e = this,
                                t = this.Deferred();
                            return n.e(14).then(n.t.bind(null, 49, 7)).then(function(e) {
                                window.QSI.DOMPurify = e, t.resolve()
                            }).catch(function() {
                                e.debugLog.e("Failed to load DOMPurify when enableJSSanitization is enabled"), t.reject()
                            }), t.promise()
                        }, e.prototype.loadModules = function(e, t) {
                            var r = this,
                                i = window.QSI.AssetManager,
                                s = [],
                                c = t.Modules;
                            for (var u in this.latencyLog.startComponentTimer(a.components.ASSETS_AND_MODULES), n.e(1).then(n.bind(null, 43)), o.a.global.enableJSSanitization && s.push(this.loadDOMPurify()), c)
                                if (Object.prototype.hasOwnProperty.call(c, u)) {
                                    if ("ScreenCapture" === u) {
                                        this.setupScreenCaptureListener(c[u]);
                                        continue
                                    }
                                    if ("ClientLog" === u) continue;
                                    if ("DependencyResolver" === u) continue;
                                    if (("HTTPRedirect" === u || "LatencyLog" === u) && o.a.global.isHostedJS()) {
                                        this.debugLog.c("Module type '" + u + "' is not supported when using Site Intercept Hosted JS");
                                        continue
                                    }
                                    if ("EmbeddedFeedback" === u) continue;
                                    var l = i.promiseLoadScript(u, c[u], o.a, this.latencyLog);
                                    s.push(l)
                                }
                            for (var d = 0; d < t.Intercepts.length; d++) {
                                var g = t.Intercepts[d];
                                if (g && !g.Error && null !== g.Decision.ActionSetID) {
                                    var p = i.promiseLoadIntercept(e.id, g, e, this.latencyLog),
                                        f = i.promiseLoadCreative(e.id, g, e, this.latencyLog);
                                    if (s.push(p, f), g.Decision.PopUnderTarget && g.Decision.PopUnderTarget.ID && "Target" !== g.Decision.PopUnderTarget.ID) {
                                        var h = i.promiseLoadPopUnderTarget(e.id, g, e);
                                        s.push(h)
                                    }
                                }
                            }
                            this.when.apply(this, s).then(function() {
                                try {
                                    r.latencyLog.endComponentTimer(a.components.ASSETS_AND_MODULES), r.prepareIntercepts(e, t)
                                } catch (e) {
                                    r.debugLog.e(e)
                                }
                            }, function(t) {
                                var n = "";
                                "string" == typeof t ? n = t : t && "string" == typeof t.Message && (n = t), r.debugLog.e("An error occurred while loading the intercept. " + n), e.deferred && e.deferred.reject()
                            })
                        }, e.prototype.setInterceptDisplayOptionCallback = function(e, t) {
                            var n = window.QSI.util;
                            switch (e) {
                                case "":
                                case "onfocus":
                                    n.waitForFocus().then(t);
                                    break;
                                case "onload":
                                    t();
                                    break;
                                case "onexit":
                                    n.waitForExitIntent().then(t);
                                    break;
                                default:
                                    return
                            }
                        }, e.prototype.prepareIntercepts = function(e, t) {
                            var r = this;
                            return n.e(1).then(n.bind(null, 43)).then(function() {
                                var n = window.QSI.RunIntercepts;
                                !0 !== e.loadingFromAPI && (r.latencyLog.endTimer(), r.xmdDebugRetryer.getRetryCount() > 0 ? r.latencyLog.send() : r.latencyLog.sampledSend(o.a.global.latencySamplePercentage)), r.setGlobalIncludes(e, t);
                                var i = o.a.Request[e.id].displayInterceptType,
                                    a = o.a.global.featureFlags["DUX.ClientSideTargetingM1"] && t.ClientSideIntercepts && t.ClientSideIntercepts.length > 0;
                                ("manual" !== i && !o.a.Request[e.id].zoneManualDisplay || o.a.Request[e.id].hasDependencies && !a) && n(e.id, !1), r.doneLoading(e, t), e.deferred && e.deferred.resolve()
                            })
                        }, e.prototype.isBrowserSupported = function() {
                            return !("Chrome" === window.QSI.Browser.name && window.QSI.Browser.version <= 20) && (!("Firefox" === window.QSI.Browser.name && window.QSI.Browser.version <= 59) && !("Internet Explorer" === window.QSI.Browser.name && window.QSI.Browser.version <= 10))
                        }, e.prototype.setGlobalIncludes = function(e, t) {
                            if (o.a.isDebug && t.DebugInfo) {
                                o.a.Request[e.id].Debug = {
                                    debugInfo: JSON.parse(t.DebugInfo),
                                    version: t.RequestData.bVersion
                                };
                                var n = {
                                    version: t.RequestData.bVersion,
                                    debugInfo: JSON.parse(t.DebugInfo)
                                };
                                o.a.debugConfig = n
                            }
                            o.a.version = t.RequestData.bVersion, o.a.InterceptsRan = !1, o.a.Request[e.id].hasDependencies = t.RequestData.hasDependencies, o.a.Request[e.id].hasBeenResolved = t.RequestData.hasBeenResolved, o.a.Request[e.id].displayInterceptType = t.RequestData.displayInterceptType, o.a.Request[e.id].zoneManualDisplay = t.RequestData.zoneManualDisplay
                        }, e.prototype.setGlobalVars = function(e) {
                            window.QSI.Browser = {
                                    name: e.RequestData.browser,
                                    version: e.RequestData.browserVersion,
                                    isMobile: e.RequestData.isMobile,
                                    isBrowserSupported: e.RequestData.isBrowserSupported
                                }, window.QSI.CORSOrigin = e.RequestData.CORSOrigin, window.QSI.OS = {
                                    name: e.RequestData.osName,
                                    version: e.RequestData.osVersion
                                }, o.a.global.brandID = e.RequestData.brandID, o.a.global.brandDC = e.RequestData.brandDC, o.a.global.graphicPath = o.a.overrides.graphicPath || "https://" + o.a.global.brandDC + "/WRQualtricsSiteIntercept/Graphic.php?IM=", o.a.global.imagePath = o.a.global.baseURL + "/WRQualtricsShared/Graphics", o.a.global.maxCookieSize = e.RequestData.maxCookieSize, o.a.global.featureFlags = e.FeatureFlags, o.a.global.screenCaptureServiceBaseURL = e.RequestData.screenCaptureServiceBaseURL, o.a.global.eventTrackers = e.RequestData.eventTrackers, o.a.adobeVar = e.RequestData.adobeSCVariable, o.a.id = e.RequestData.ID, o.a.reqID[e.RequestData.ID] = !0, o.a.CookieDomain = e.RequestData.cookieDomain, o.a.historyStorageType = e.RequestData.historyStorageType, o.a.historyStorageSize = e.RequestData.historyStorageSize, o.a.currentURL = window.location.href.split("?")[0],
                                function() {
                                    var e = document.createElement("div");
                                    e.className = "scrollbar-measure", e.style.width = "100px", e.style.height = "100px", e.style.overflow = "scroll", e.style.position = "absolute", e.style.top = "-99999px", document.body.appendChild(e);
                                    var t = e.offsetWidth - e.clientWidth;
                                    o.a.scrollbarWidth = t, document.body.removeChild(e)
                                }()
                        }, e.prototype.parseQueryString = function(e) {
                            var t = {};
                            if (e && -1 !== e.indexOf("?"))
                                for (var n = e.split("?", 2)[1].split("&"), r = 0; r < n.length; r++) {
                                    var i = n[r].split("=", 2);
                                    "Q_LOC" === i[0] && -1 !== i[1].indexOf("Q_DEBUG") && (t.Q_DEBUG = !0), i[0] && (t[i[0]] = decodeURIComponent(i[1]))
                                }
                            return t
                        }, e.prototype.replaceAll = function(e, t, n) {
                            return t = t.replace(/([.*+?^${}()|[\]\\=!:/])/g, "\\$1"), e.replace(new RegExp(t, "g"), n)
                        }, e.prototype.when = function(e) {
                            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                            var r = this,
                                i = l([e], t),
                                o = i.length,
                                a = o,
                                s = 1 === a ? e : this.Deferred(),
                                c = function(e, t) {
                                    return function(n) {
                                        for (var i = [], o = 1; o < arguments.length; o++) i[o - 1] = arguments[o];
                                        t[e] = arguments.length > 1 ? n : r.createArrayFromArguments(l([n], i)), --a || s.resolve(t)
                                    }
                                };
                            if (o > 1)
                                for (var u = 0; u < o; u++) i[u] && i[u].promise ? i[u].promise().done(c(u, i)).fail(s.reject) : a--;
                            return a < 1 && s.resolve(i), s.promise()
                        }, e.prototype.createArrayFromArguments = function(e) {
                            return e ? Array.prototype.slice.call(e) : []
                        }, e.prototype.isFunction = function(e) {
                            return "function" == typeof e || !1
                        }, e.prototype.forOwn = function(e, t) {
                            if (e && e instanceof Object && this.isFunction(t))
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t(e[n], n, e)
                        }, e.prototype.each = function(e, t) {
                            var n = e.length;
                            if (n)
                                for (var r = 0; r < n; r++) t(e[r], r)
                        }, e.prototype.doneLoading = function(e, t) {
                            if (o.a.LoadingState.pop(), 0 === o.a.LoadingState.length) {
                                if (!0 !== e.loadingFromAPI) {
                                    var n = document.createEvent("Event");
                                    n.initEvent("qsi_js_loaded", !0, !0), window.dispatchEvent(n)
                                }
                                this.lastSiResponse = t;
                                for (var r = o.a.PendingQueue.length, i = 0; i < r; i++) {
                                    o.a.PendingQueue.shift()()
                                }
                            }
                        }, e.prototype.setupJFEMessageEventHandlerForIOSOptimization = function() {
                            var e = this;
                            if (!o.a.JFEListenerRegistered) {
                                o.a.JFEListenerRegistered = !0;
                                return window.addEventListener("message", function(t) {
                                    try {
                                        if (!e.isMessageEventOriginAllowed(t.origin)) return;
                                        (function(e) {
                                            var t = null;
                                            if ("string" == typeof e) try {
                                                t = JSON.parse(e)
                                            } catch (e) {
                                                return !1
                                            }
                                            return null !== t && "JFE" === t.from && "SI" === t.to && "JFELoaded" === t.event && "iOS" === window.QSI.OS.name
                                        })(t.data) && (n = t.source, r = t.origin, n.postMessage({
                                            event: "addIOSSIWorkaround",
                                            from: "SI",
                                            to: "JFE"
                                        }, r))
                                    } catch (t) {
                                        e.debugLog.e(t)
                                    }
                                    var n, r
                                })
                            }
                        }, e.prototype.setupScreenCaptureListener = function(e) {
                            var t = this;
                            if (!o.a.screenCaptureListenerRegistered) return o.a.screenCaptureListenerRegistered = !0, window.addEventListener("message", function(n) {
                                try {
                                    if (!t.isMessageEventOriginAllowed(n.origin)) return;
                                    var r = window.QSI,
                                        i = r.AssetManager,
                                        a = r.util.getOriginInterceptOfMessage(n.source);
                                    if (!a) return;
                                    var s = n.data;
                                    if ("string" == typeof s) try {
                                        s = JSON.parse(s)
                                    } catch (e) {
                                        return
                                    }
                                    if (!s || "JFE" !== s.from || "SI" !== s.to) return;
                                    if (o.a.screenCaptureHandlers || (o.a.screenCaptureHandlers = {}), "canScreenCapture" === s.event) {
                                        void 0 === o.a.screenCaptureModulePromise && (o.a.screenCaptureModulePromise = i.promiseLoadScript("ScreenCapture", e, o.a, t.latencyLog));
                                        return void n.source.postMessage(JSON.stringify({
                                            event: "canScreenCapture",
                                            from: "SI",
                                            to: "JFE",
                                            canScreenCapture: !0
                                        }), n.origin)
                                    }
                                    void 0 !== o.a.screenCaptureModulePromise && o.a.screenCaptureModulePromise.then(function() {
                                        var e = window.QSI.ScreenCaptureHandler;
                                        switch (o.a.screenCaptureHandlers[s.sessionId] || (o.a.screenCaptureHandlers[s.sessionId] = new e(a, n.source, s.sessionId, s.translations, n.origin)), s.event) {
                                            case "startScreenCapture":
                                                o.a.screenCaptureHandlers[s.sessionId].captureScreen(s.questionId);
                                                break;
                                            case "editScreenCapture":
                                                o.a.screenCaptureHandlers[s.sessionId].editAnnotations(s.questionId);
                                                break;
                                            case "removeScreenCapture":
                                                o.a.screenCaptureHandlers[s.sessionId].removeScreenCapture(s.questionId);
                                                break;
                                            case "sessionFinished":
                                                o.a.screenCaptureHandlers[s.sessionId].removeAllScreenCaptures();
                                                break;
                                            default:
                                                return
                                        }
                                    })
                                } catch (e) {
                                    t.debugLog.e(e)
                                }
                            })
                        }, e
                    }(),
                    g = function() {
                        return function() {
                            var e = this;
                            this.isFullDbgInitialized = -1 !== window.location.href.indexOf("Q_DEBUG"), this.safeConsole = function(t, n) {
                                if (e.isFullDbgInitialized) try {
                                    console[t](n)
                                } catch (e) {}
                            }, this.enableFullDebug = function() {
                                e.isFullDbgInitialized = !0
                            }, this.disableFullDebug = function() {
                                e.isFullDbgInitialized = !1
                            }, this.log = function(e, t, n) {
                                var r = window.QSI,
                                    i = r.ClientLog,
                                    o = r.global;
                                i && (o.featureFlags.isClientLoggingEnabled ? i.send(e, t, n) : i.sampledSend(e, t, n, .02))
                            }, this.c = function(t) {
                                e.safeConsole("log", t), e.log(t)
                            }, this.d = function(t) {
                                e.safeConsole("dir", t), e.log(t)
                            }, this.t = function(t) {
                                e.safeConsole("trace", t), e.log(t)
                            }, this.e = function(t) {
                                e.safeConsole("log", t && t.message || "error"), e.safeConsole("error", t), e.log(t)
                            }
                        }
                    }(),
                    p = function() {
                        function e() {}
                        return e.prototype.send = function(e, t, n) {
                            void 0 === t && (t = !0), void 0 === n && (n = "error");
                            try {
                                var r = window.QSI,
                                    i = r.baseURL + "Ajax.php?action=ClientLog&" + (0, r.getClientVersionQueryString)(),
                                    o = window.QSI.reqID,
                                    a = "";
                                for (var s in o) o[s] && (a += s + " ");
                                t && e.stack && (e = e.stack);
                                var c = navigator.userAgent,
                                    u = window.QSI,
                                    l = u.currentURL,
                                    d = u.global.brandID,
                                    g = {
                                        LevelName: n,
                                        Message: "requestId: " + a + "\n currentURL: " + l + "\n userAgent: " + c + "\n brandID: " + (void 0 === d ? "unknown" : d) + "\n message: " + e
                                    };
                                QSI.util.sendHttpRequest({
                                    type: "POST",
                                    url: i,
                                    header: {
                                        "Content-type": "application/x-www-form-urlencoded"
                                    },
                                    includeCookies: !1,
                                    data: QSI.util.buildQueryString(g)
                                })
                            } catch (e) {
                                window.QSI.isDebug && console.log(e)
                            }
                        }, e.prototype.sampledSend = function(e, t, n, r) {
                            Math.random() <= r / 100 && this.send(e, t, n)
                        }, e
                    }(),
                    f = function() {
                        function e() {
                            var e = this;
                            this.cookieSize = 0, document.cookie.split(";").forEach(function(t) {
                                var n = t.indexOf("QSI");
                                ~n && (e.cookieSize += t.length - n)
                            })
                        }
                        return e.prototype.set = function(e, t, n, r, i) {
                            void 0 === i && (i = {});
                            var a = o.a.global.maxCookieSize,
                                s = this.get(e),
                                c = this.getCookieSize();
                            s && (c -= (e + "=" + s).length);
                            var u = "";
                            if (n) {
                                var l = new Date;
                                l.setTime(l.getTime() + 864e5 * n), u = "; expires=" + l.toUTCString()
                            }
                            var d = "";
                            r ? d = "domain=" + r : o.a.CookieDomain && (d = "domain=" + o.a.CookieDomain);
                            var g = e + "=" + t,
                                p = c + g.length;
                            if (!(i.force || null !== a && p <= a || null === a)) throw new Error("Cannot exceed the specified maximum cookie size");
                            i.erase ? this.cookieSize = c : this.cookieSize = p;
                            var f = "" + g + u + "; path=/; " + d;
                            "https:" === location.protocol && (f += "; secure"), document.cookie = f
                        }, e.prototype.get = function(e) {
                            for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                                var i = n[r],
                                    o = i.indexOf(t);
                                if (~o) return i.substring(o + t.length, i.length)
                            }
                            return null
                        }, e.prototype.erase = function(e, t) {
                            this.set(e, "", -1, t, {
                                force: !0,
                                erase: !0
                            })
                        }, e.prototype.getCookieSize = function() {
                            return this.cookieSize
                        }, e.prototype.areCookiesEnabled = function() {
                            try {
                                document.cookie = "cookietest=1";
                                var e = -1 !== document.cookie.indexOf("cookietest=");
                                return document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT", e
                            } catch (e) {
                                return !1
                            }
                        }, e
                    }(),
                    h = function() {
                        function e() {
                            this.storageCache = {}, this.cookieName = "QSI_DATA", this.refreshFromCookie()
                        }
                        return e.prototype.refreshFromCookie = function() {
                            try {
                                var e = window.QSI.cookie.get(this.cookieName);
                                e && (this.storageCache = JSON.parse(e))
                            } catch (e) {
                                this.storageCache = {}
                            }
                        }, e.prototype.setToCookie = function() {
                            try {
                                window.QSI.cookie.set(this.cookieName, JSON.stringify(this.storageCache))
                            } catch (e) {}
                        }, e.prototype.setItem = function(e, t) {
                            this.storageCache[e] = t, this.setToCookie()
                        }, e.prototype.getItem = function(e) {
                            return this.storageCache[e] || null
                        }, e.prototype.removeItem = function(e) {
                            delete this.storageCache[e], this.setToCookie()
                        }, e.prototype.reload = function() {
                            this.refreshFromCookie()
                        }, e.prototype.clear = function() {
                            this.storageCache = {}, this.setToCookie()
                        }, e
                    }(),
                    S = function() {
                        function e() {}
                        return e.prototype.increment = function(e) {
                            try {
                                window.QSI.EventTracker.track(e)
                            } catch (e) {
                                window.QSI.dbg.e(e)
                            }
                        }, e.prototype.count = function(e) {
                            try {
                                return window.QSI.EventTracker.get(e)
                            } catch (e) {
                                window.QSI.dbg.e(e)
                            }
                        }, e.prototype.push = function(e) {
                            try {
                                window.QSI.EventTracker.track(e)
                            } catch (e) {
                                window.QSI.dbg.e(e)
                            }
                        }, e
                    }(),
                    I = function() {
                        return (I = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e
                        }).apply(this, arguments)
                    },
                    w = ["close"],
                    v = function() {
                        function e(e, t) {
                            var n = this;
                            this.intercept = e, this.evaluation = t, this.events = w.reduce(function(e, t) {
                                return e[t] = {
                                    counter: 0,
                                    callbacks: {}
                                }, e
                            }, {}), this.addCallbackForEvent = function(e, t) {
                                var r = n.events[e],
                                    i = String(r.counter++);
                                return r.callbacks[i] = t,
                                    function() {
                                        r.callbacks[i] && delete r.callbacks[i]
                                    }
                            }, this.runCallbacksForEvent = function(e) {
                                var t = n.events[e];
                                Object.keys(t.callbacks).forEach(function(e) {
                                    t.callbacks[e]()
                                })
                            }, this.onClose = function(e) {
                                return window.QSI.callbacks[n.id].onClose = function() {
                                    n.runCallbacksForEvent("close")
                                }, n.addCallbackForEvent("close", e)
                            }, this.getEvaluationResult = function() {
                                var e = {
                                    passed: !!n.evaluation
                                };
                                if (n.evaluation && n.evaluation.Decision) {
                                    var t = n.evaluation.Decision.Target.Type;
                                    if (e = I(I({}, e), {
                                            targetType: t,
                                            targetValue: n.evaluation.Decision.Target.URL
                                        }), n.evaluation.Decision.Creative) {
                                        var r = n.evaluation.Decision.Creative;
                                        e = I(I({}, e), {
                                            creative: {
                                                id: r.ID,
                                                name: r.Name,
                                                type: r.Type,
                                                revision: r.Revision
                                            }
                                        })
                                    }
                                }
                                return e
                            }, window.QSI.callbacks = window.QSI.callbacks || {}, window.QSI.callbacks[this.id] = window.QSI.callbacks[this.id] || {}
                        }
                        return Object.defineProperty(e.prototype, "name", {
                            get: function() {
                                return this.intercept.Name
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "id", {
                            get: function() {
                                return this.intercept.InterceptID
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.instanceCache = {}, e.getInstance = function(t, n) {
                            var r = t.InterceptID;
                            return e.instanceCache[r] || (e.instanceCache[r] = new e(t, n)), e.instanceCache[r]
                        }, e.clearInstanceCache = function() {
                            delete e.instanceCache, e.instanceCache = {}
                        }, e
                    }(),
                    y = function() {
                        return (y = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e
                        }).apply(this, arguments)
                    },
                    b = function() {
                        function e() {
                            var e = this;
                            this.unloading = !1, this.Events = new S, this.load = function() {
                                try {
                                    var t = window.QSI.Orchestrator.Deferred(),
                                        n = t.promise();
                                    return window.QSI.PendingQueue || (window.QSI.PendingQueue = []), window.QSI.LoadingState && window.QSI.LoadingState.length > 0 ? window.QSI.PendingQueue.push(e.loadHelper.bind(e, t)) : e.loadHelper.bind(e, t)(), n
                                } catch (e) {
                                    window.QSI.dbg.e(e)
                                } finally {
                                    window.QSI.dbg.log("DXJSAPIEvents: QSI.API.load()", !1, "info")
                                }
                            }, this.unload = function() {
                                try {
                                    if (window.QSI.PendingQueue || (window.QSI.PendingQueue = []), window.QSI.LoadingState && window.QSI.LoadingState.length > 0) return void window.QSI.PendingQueue.push(window.QSI.API.unload);
                                    if (e.unloading = !0, window.QSI.reg && (window.QSI.util.forOwn(window.QSI.reg, function(e, t) {
                                            window.QSI.reg[t].remove()
                                        }), window.QSI.util.removeObservers()), window.QSI.debug && (window.QSI.util.remove(window.QSI.util.$("QSI_Debug")), window.QSI.debuggerHasDisplayed = !1), window.QSI.styleElements)
                                        for (var t = window.QSI.styleElements, n = 0; n < t.length; n++) window.QSI.util.remove(t[n]);
                                    window.QSI.reg = void 0, window.QSI.Request = void 0, window.QSI.styleElements = void 0, window.QSI.callbacks = void 0, v.clearInstanceCache(), e.unloading = !1
                                } catch (e) {
                                    window.QSI.dbg.e(e)
                                } finally {
                                    window.QSI.dbg.log("DXJSAPIEvents: QSI.API.unload()", !1, "info")
                                }
                            }, this.run = function() {
                                try {
                                    if (window.QSI.PendingQueue || (window.QSI.PendingQueue = []), window.QSI.LoadingState && window.QSI.LoadingState.length > 0) return void window.QSI.PendingQueue.push(window.QSI.API.run);
                                    window.QSI.InterceptsRan || void 0 === window.QSI.reg || window.QSI.RunIntercepts(null, !0)
                                } catch (e) {
                                    window.QSI.dbg.e(e)
                                } finally {
                                    window.QSI.dbg.log("DXJSAPIEvents: QSI.API.run()", !1, "info")
                                }
                            }, this.getIntercept = function(e) {
                                return new Promise(function(e, t) {
                                    try {
                                        window.QSI.PendingQueue || (window.QSI.PendingQueue = []), window.QSI.LoadingState && window.QSI.LoadingState.length > 0 ? window.QSI.PendingQueue.push(function() {
                                            e()
                                        }) : e()
                                    } catch (e) {
                                        t(e)
                                    }
                                }).then(function() {
                                    var t = window.QSI.Orchestrator.getInterceptFromSiResponse(e),
                                        n = t[0],
                                        r = t[1];
                                    if (!n) throw e + " is not a valid Intercept ID";
                                    return v.getInstance(y({}, n), r ? y({}, r) : null)
                                }).catch(function(e) {
                                    throw window.QSI.dbg.e(e), e
                                }).finally(function() {
                                    window.QSI.dbg.log("DXJSAPIEvents: QSI.API.getIntercept()", !1, "info")
                                })
                            }
                        }
                        return e.prototype.loadHelper = function(e) {
                            try {
                                if (window.QSI.reg || this.unloading) return void e.reject();
                                void 0 === window.QSI.reg && (window.QSI.reg = {}), void 0 === window.QSI.ed && (window.QSI.ed = {}), void 0 === window.QSI.reqID && (window.QSI.reqID = {}), void 0 === window.QSI.Request && (window.QSI.Request = {}), void 0 === window.QSI.styleElements && (window.QSI.styleElements = []), window.QSI.util.forOwn(window.QSI.reqID, function(t, n) {
                                    var r = {
                                        loadingFromAPI: !0
                                    };
                                    r.id = n, "Editing" === window.QSI.version && (r.version = "0"), void 0 !== window.QSI.global.clientVersion && null !== window.QSI.global.clientVersion && (r.Q_CLIENTVERSION = window.QSI.global.clientVersion), void 0 !== window.QSI.global.clientType && null !== window.QSI.global.clientType && (r.Q_CLIENTTYPE = window.QSI.global.clientType, void 0 !== window.QSI.clientTypeVariant && (r.Q_CLIENTTYPE += window.QSI.clientTypeVariant)), 0 === n.search(/ZN/) ? r.ZoneID = n : r.InterceptID = n, window.QSI.isDebug && (r.Q_DEBUG = null), r.deferred = e, window.QSI.Orchestrator.load(r, !1)
                                })
                            } catch (e) {
                                window.QSI.dbg.e(e)
                            }
                        }, e
                    }();

                function m(e) {
                    var t = new g,
                        n = new a(t);
                    window.QSI.API = window.QSI.API || new b, window.QSI.ClientLog = new p, window.QSI.dbg = t, window.QSI.LatencyLog = n, window.QSI.EventTracker = new i, window.QSI.cookie = new f, window.QSI.CookieStorage = new h, window.QSI.Orchestrator = new d, window.QSI.Orchestrator.init(n, t, e)
                }
                n.d(t, "initialize", function() {
                    return m
                })
            }
        }
    ]);
} catch (e) {
    if (typeof QSI !== 'undefined' && QSI.dbg && QSI.dbg.e) {
        QSI.dbg.e(e);
    }
}