! function() {
    "use strict";
    ! function() {
        var e = "DC-6386697",
            n = "DC-10648833",
            a = "AW-992191228",
            t = "AW-993701045",
            s = "AW-1006288171",
            r = "AW-965352860",
            o = "UA-53389718-12",
            i = "926803",
            p = "5717",
            d = window.latmconf = window.latmconf || {},
            c = "pa.beacon",
            _ = "akl",
            m = "dc",
            l = "fb",
            v = "gads",
            g = "ga",
            u = "li",
            y = "pd",
            b = "dialogflow",
            h = {
                type: "var",
                path: "laDataLayer.ccpg",
                defaultVal: ""
            },
            f = {
                type: "var",
                path: "location.pathname",
                defaultVal: ""
            },
            w = {
                type: "var",
                path: "laDataLayer.cust",
                defaultVal: ""
            },
            k = {
                type: "var",
                path: "dataLayer.application",
                defaultVal: ""
            },
            C = {
                type: "int",
                path: "laDataLayer.txn_amt",
                defaultVal: ""
            },
            D = {
                type: "int",
                path: "laDataLayer.amt"
            },
            E = {
                type: "var",
                path: "laDataLayer.rsta"
            },
            T = {
                type: "var",
                path: "laDataLayer.curr",
                defaultVal: "NA"
            },
            P = {
                type: "var",
                path: "laDataLayer.mrid",
                defaultVal: "NA"
            },
            B = {
                type: "var",
                path: "laDataLayer.url"
            },
            z = {
                type: "var",
                path: "laDataLayer.visitorId",
                defaultVal: ""
            },
            A = {
                type: "var",
                path: "laDataLayer.trid"
            },
            M = {
                type: "var",
                path: "laDataLayer.isLoggedIn"
            },
            L = {
                type: "fn",
                name: "mrktConsentOptOut"
            },
            I = {
                type: "var",
                obj: "data",
                path: "acnt"
            },
            x = {
                type: "fn",
                name: "conditionalValue",
                args: ["us", "fetchCountry"]
            },
            F = {
                type: "fn",
                name: "conditionalValue",
                args: ["gb|uk", "fetchCountry"]
            },
            q = {
                type: "fn",
                name: "conditionalValue",
                args: ["gb|it|uk", "fetchCountry"]
            },
            N = {
                type: "fn",
                name: "conditionalValue",
                args: ["de", "fetchCountry"]
            },
            S = {
                type: "fn",
                name: "conditionalValue",
                args: ["us|fr|au", "fetchCountry"]
            },
            K = {
                type: "fn",
                name: "conditionalValue",
                args: ["uk|gb", "fetchCountry"]
            },
            J = {
                type: "fn",
                name: "conditionalValue",
                args: ["de", "fetchCountry"]
            },
            j = {
                type: "fn",
                name: "conditionalValue",
                args: ["ad|ae|af|al|am|ao|aq|at|ax|az|ba|be|bf|bg|bh|bi|bj|bv|bw|by|cd|cf|cg|ch|ci|ck|cm|cs|cv|cy|cz|de|dj|dk|dz|ee|eg|eh|er|es|et|fi|fo|fr|fx|ga|gb|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gw|hm|hr|hu|ie|il|im|iq|ir|is|it|je|jo|ke|kg|km|kw|kz|lb|li|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mk|ml|mq|mr|mt|mu|mw|mz|na|nc|ne|ng|nl|no|om|pf|pl|pm|ps|pt|qa|re|ro|rs|ru|rw|sa|sc|sd|se|sh|si|sj|sk|sl|sm|sn|so|st|sy|sz|td|tf|tg|tj|tm|tn|tr|tz|ua|ug|uz|va|wf|ye|yt|yu|za|zm|zw", "fetchCountry"]
            },
            O = {
                type: "fn",
                name: "conditionalValue",
                args: ["au|c2|cn|hk|id|in|jp|kr|my|nz|ph|sg|th|tw|vn", "fetchCountry"]
            },
            U = {
                type: "fn",
                name: "conditionalValue",
                args: ["ag|ai|an|ar|aw|bb|bm|bo|br|bs|bz|cl|co|cr|dm|do|ec|fk|gd|gt|gy|hn|jm|kn|ky|lc|ms|mx|ni|pa|pe|py|sr|sv|tc|tt|uy|vc|ve|vg", "fetchCountry"]
            },
            V = {
                type: "fn",
                name: "conditionalValue",
                args: ["au", "fetchCountry"]
            },
            Z = {
                type: "fn",
                name: "conditionalValue",
                args: ["ag|ai|an|aw|bb|bm|bo|bs|bz|co|cr|dm|do|ec|fk|gd|gt|gy|hn|jm|kn|ky|lc|ms|ni|pa|pe|py|sr|sv|tc|tt|uy|vc|ve|vg", "fetchCountry"]
            },
            X = {
                type: "fn",
                name: "conditionalValue",
                args: ["^us|ca", "fetchCountry"]
            },
            R = {
                type: "fn",
                name: "conditionalValue",
                args: ["mx", "fetchCountry"]
            },
            G = {
                type: "fn",
                name: "conditionalValue",
                args: ["us|gb|ca|ie", "fetchCountry"]
            },
            H = {
                type: "fn",
                name: "conditionalValue",
                args: ["br", "fetchCountry"]
            },
            W = {
                akl: {
                    name: _,
                    consentCategory: "P",
                    endpoint: {
                        scheme: "https",
                        host: "www.aklamio.com",
                        path: "/bttr?"
                    },
                    seperator: ""
                },
                dc: {
                    name: m,
                    endpoint: {
                        scheme: "https",
                        host: "ad.doubleclick.net",
                        path: "/activity/"
                    },
                    seperator: ";",
                    enforce_gdpr: !1,
                    consentCategory: "T",
                    action: "conversion",
                    vars: {
                        allow_custom_scripts: !0,
                        value: D,
                        transaction_id: A,
                        npa: L,
                        u1: w,
                        u2: P,
                        u3: D,
                        u4: T,
                        u5: A,
                        u6: {
                            type: "var",
                            path: "laDataLayer.page"
                        },
                        u7: B,
                        u8: {
                            type: "var",
                            path: "laDataLayer.flnm"
                        },
                        u9: z,
                        u10: h
                    }
                },
                fb: {
                    name: l,
                    consentCategory: "T",
                    endpoint: {
                        scheme: "https",
                        host: "www.facebook.com",
                        path: "/tr?"
                    },
                    vars: {
                        id: "1674696026155243",
                        noscript: "1",
                        "cd[FPTICookie]": z,
                        "cd[CustomerID]": {
                            type: "var",
                            path: "laDataLayer.cust",
                            defaultVal: "",
                            enable: x
                        },
                        "cd[MerchantID]": w,
                        "cd[MerchantTPV]": D,
                        "cd[MerchantTransaction]": T,
                        "cd[P2PTransaction]": T,
                        "cd[P2PTPV]": C
                    }
                },
                ga: {
                    name: g,
                    endpoint: {
                        scheme: "https",
                        host: "www.google-analytics.com",
                        path: "/r/collect?"
                    },
                    enforce_gdpr: !1,
                    consentCategory: "P",
                    vars: {
                        dimension1: {
                            type: "var",
                            path: "laDataLayer.gacook"
                        },
                        dimension2: w,
                        dimension3: M,
                        dimension4: B,
                        dimension5: h,
                        dimension6: E,
                        dimension7: {
                            type: "var",
                            path: "laDataLayer.acnt"
                        },
                        dimension8: "",
                        dimension9: "",
                        dimension10: {
                            type: "var",
                            path: "laDataLayer.comp"
                        },
                        dimension19: {
                            type: "var",
                            path: "laDataLayer.xe"
                        },
                        dimension20: {
                            type: "var",
                            path: "laDataLayer.xt"
                        },
                        dimension22: {
                            type: "var",
                            path: "laDataLayer.pgrp"
                        },
                        dimension25: z,
                        dimension26: L,
                        contentGroup1: {
                            type: "var",
                            path: "dataLayer.pageType"
                        },
                        contentGroup3: M,
                        location: B
                    }
                },
                gads: {
                    name: v,
                    consentCategory: "T",
                    endpoint: {
                        scheme: "https",
                        host: "www.googleadservices.com/"
                    }
                },
                li: {
                    name: u,
                    consentCategory: "T",
                    endpoint: {
                        scheme: "https",
                        host: "px.ads.linkedin.com",
                        path: "/collect/?"
                    },
                    vars: {
                        pid: "2786969",
                        fmt: "gif"
                    }
                },
                pd: {
                    name: y,
                    consentCategory: "T",
                    endpoint: {
                        scheme: "https",
                        host: "pi.pardot.com",
                        path: "/analytics/?"
                    },
                    vars: {}
                },
                dialogflow: {
                    name: b,
                    nodeToInject: [{
                        createElement: "script",
                        setAttribute: {
                            src: "https://www.paypalobjects.com/staging/pa/mi/3p/dialogflow-console/fast/messenger/bootstrap.js?v=1"
                        }
                    }, {
                        createElement: "df-messenger",
                        setAttribute: {
                            intent: "WELCOME",
                            "chat-title": "Melody",
                            "agent-id": "42cab156-e221-41fd-8976-41fb667c2edc",
                            "language-code": "en",
                            "chat-icon": "https://www.paypalobjects.com/staging/pa/mi/3p/dialogflow-console/melody_sq.png"
                        }
                    }],
                    vars: {},
                    endpoint: {
                        scheme: "https",
                        host: "",
                        path: ""
                    }
                }
            },
            Y = /^articles|auth|bank|bizac|bizmanageu|bizwa|biztr|causemiss|compl|confluence|console|creditapp|demo|dev|docs|donate|elmo|finance|firebolt|fpti|fundsman|go|gpl|herald|identity|jira|lighthouse|merchantacc|merchantbill|merchanthub|money|mpp|invoi|ownershipui|policydash|pools|ppaas|ppcredit|ppme|ppstatus|privacy|prog|ptaas|p2p|report|rescenter|servicenow|smarthelp|summary|trading|uep|virtual|work/i,
            Q = {
                restoreaccessnodeweb: /^main:resolutions:limitations::dashboard/i,
                shoplistnodeweb: /^main:mktg:personal::offers|main:walletweb:pp-shopping::main/i
            };
        d.isQSIEnabled = function(e, n) {
            var a = !1;
            return e && Y.test(e) && (a = !0), a = n && e in Q && Q[e].test(n) ? !0 : a
        };
        var $ = /^auth|bank|bill|bizac|bizcomp|bizli|bizm|bizs|bizpr|biztr|bizw|button|causef|checkout|compl|comme|consp|crca|credit|csp|debit|donate|dp|dual|growth|hermes|home|invoi|latin|mep|merchantb|merchants|merchm|money|onbo|p2p|pix|policy|pools|ppdg|ppme|prog|report|res|reward|risksim|secur|self|setting|ship|shop|smart|smc|sum|tradi|un|virtual|wallet|work|xo/i,
            ee = {
                mppnodeweb: /^main:mktg:personal::offers|main:mktg:personal:campaign:spotify-premium-offer|main:mktg:::spotify-premium-offer|main:mktg:::pay-in-4/i
            };
        d.isTLEnabled = function(e, n) {
            var a = !1;
            return e && $.test(e) && (a = !0), a = n && e in ee && ee[e].test(n) ? !0 : a
        };
        var ne = /moneynodeweb:(cards:new|money:banks|new:manual)|walletweb:.*bank:confirminstantly/i,
            ae = {
                type: "var",
                path: "pre.payee.res.data.merchant.id",
                defaultVal: "NA"
            },
            te = {
                type: "int",
                path: "pre.cart.res.data.purchase.amounts.total.amount"
            },
            se = {
                type: "var",
                path: "laDataLayer.comp",
                defaultVal: "unknown"
            },
            re = {
                type: "var",
                path: "pre.cart.res.data.purchase.amounts.total.currency_code",
                defaultVal: "NA"
            },
            oe = {
                type: "var",
                path: "pre.checkoutAppData.res.data.flow_id",
                defaultVal: "Hermes"
            },
            ie = {
                type: "var",
                path: "laDataLayer.flnm",
                defaultVal: "Hermione"
            },
            pe = "business loan",
            de = {
                type: "var",
                obj: "data",
                path: "link"
            },
            ce = "pools",
            _e = "main:moneynodeweb:money:banks:new|main:walletweb:wallet:(add:bankadd|bank)",
            me = "main:walletweb:wallet:add:bank",
            le = "main:moneynodeweb:(banks:new:confirmation|money:banks:confirmation|banks:confirmation:success)",
            ve = "main:walletweb:wallet::card:addcard|main:moneynodeweb:cards:new:manual",
            ge = "main:walletweb:wallet::card:(addcardsuccess|completeconfirmation)|main:moneynodeweb:(new:manual:success|cards:confirmation:success)",
            ue = "personal|premier",
            ye = "business",
            be = [{
                name: m,
                vars: {
                    send_to: e + "/walle0/consu0+standard"
                }
            }, {
                name: g,
                vars: {
                    send_to: o,
                    hitType: "event",
                    event_category: "account activity",
                    event_action: I,
                    event_label: "link bank account"
                }
            }, {
                name: v,
                enable: X,
                vars: {
                    send_to: a + "/7FWPCK68stwBEPzFjtkD"
                }
            }, {
                name: v,
                enable: U,
                vars: {
                    send_to: t + "/Ri5WCNndzdwBELXZ6tkD"
                }
            }, {
                name: v,
                enable: j,
                vars: {
                    send_to: s + "/albtCN2NvNwBEKv66t8D"
                }
            }, {
                name: v,
                enable: O,
                vars: {
                    send_to: r + "/8nBhCM6NvNwBEJy7qMwD"
                }
            }],
            he = [{
                name: m,
                vars: {
                    send_to: e + "/walle0/merch00+standard"
                }
            }, {
                name: g,
                vars: {
                    send_to: o,
                    hitType: "event",
                    event_category: "account activity",
                    event_action: I,
                    event_label: "link bank account"
                }
            }, {
                name: v,
                enable: X,
                vars: {
                    send_to: a + "/eDyxCPOCvNwBEPzFjtkD"
                }
            }, {
                name: v,
                enable: U,
                vars: {
                    send_to: t + "/aujJCILUzdwBELXZ6tkD"
                }
            }, {
                name: v,
                enable: j,
                vars: {
                    send_to: s + "/cal3CI6DvNwBEKv66t8D"
                }
            }, {
                name: v,
                enable: O,
                vars: {
                    send_to: r + "/b1AjCOvXzdwBEJy7qMwD"
                }
            }],
            fe = {
                name: v,
                enable: X,
                vars: {
                    send_to: a + "/vTMUCMDQv9gBEPzFjtkD"
                }
            },
            we = {
                name: v,
                enable: U,
                vars: {
                    send_to: t + "/n0oQCNmUz9gBELXZ6tkD"
                }
            },
            ke = {
                name: v,
                enable: j,
                vars: {
                    send_to: s + "/noBcCKfa3dgBEKv66t8D"
                }
            },
            Ce = {
                name: v,
                enable: O,
                vars: {
                    send_to: r + "/NFdZCMDJ3dgBEJy7qMwD"
                }
            },
            De = [{
                name: m,
                vars: {
                    send_to: e + "/merch0/acctu00+standard"
                }
            }, {
                name: v,
                enable: X,
                vars: {
                    send_to: a + "/Enh-CNWuz9gBEPzFjtkD"
                }
            }, {
                name: v,
                enable: U,
                vars: {
                    send_to: t + "/Ez7PCNGbz9gBELXZ6tkD"
                }
            }, {
                name: v,
                enable: j,
                vars: {
                    send_to: s + "/HzDvCLaDz9gBEKv66t8D"
                }
            }, {
                name: v,
                enable: O,
                vars: {
                    send_to: r + "/jM6-CMG8v9gBEJy7qMwD"
                }
            }, {
                name: g,
                vars: {
                    send_to: o,
                    hitType: "event",
                    event_category: "merchant upgrade",
                    event_action: h,
                    event_label: "step 8: congrats",
                    page_path: f,
                    page_title: "Thanks for signing up",
                    dimension9: "step 8: congrats",
                    dimension10: k
                }
            }],
            Ee = {
                type: "var",
                obj: "data",
                path: "ccpg"
            },
            A = [{
                name: m,
                vars: {
                    send_to: e + "/consu0/persa00+standard"
                }
            }, {
                name: v,
                enable: X,
                vars: {
                    send_to: a + "/Hv52CLWGs8cBEPzFjtkD"
                }
            }, {
                name: v,
                enable: U,
                vars: {
                    send_to: t + "/jBTSCN2l9NcBELXZ6tkD"
                }
            }, {
                name: v,
                enable: j,
                vars: {
                    send_to: s + "/T0apCKytv9gBEKv66t8D"
                }
            }, {
                name: v,
                enable: O,
                vars: {
                    send_to: r + "/g-dgCM_sztgBEJy7qMwD"
                }
            }, {
                name: l,
                vars: {
                    ev: "ConsumerSignup"
                }
            }, {
                name: g,
                vars: {
                    send_to: o,
                    hitType: "event",
                    event_category: "DCM: PersAcctSUFin",
                    event_action: "sign up finish",
                    event_label: h
                }
            }, {
                name: g,
                vars: {
                    send_to: o,
                    hitType: "event",
                    event_category: "consumer sign-up",
                    event_action: h,
                    event_label: "step 4: success",
                    page_path: "/welcome/signup/intent_selection",
                    page_title: "Select Intent",
                    dimension9: "step 4: success",
                    dimension10: k,
                    dimension46: "true"
                }
            }, {
                name: u,
                vars: {
                    url: "paypal.com/consumersignupfinish"
                }
            }],
            z = "partner onboarding sign-up",
            L = [{
                name: m,
                vars: {
                    send_to: e + "/merch0/bizac00+standard"
                }
            }, {
                name: v,
                enable: X,
                vars: {
                    send_to: a + "/Mrs6CKX83dgBEPzFjtkD"
                }
            }, {
                name: v,
                enable: U,
                vars: {
                    send_to: t + "/GaLzCKKQz9gBELXZ6tkD"
                }
            }, {
                name: v,
                enable: j,
                vars: {
                    send_to: s + "/1_qJCLD6ztgBEKv66t8D"
                }
            }, {
                name: v,
                enable: O,
                vars: {
                    send_to: r + "/pnOjCJ70ztgBEJy7qMwD"
                }
            }, {
                name: l,
                vars: {
                    ev: "MerchantSignup"
                }
            }, {
                name: g,
                vars: {
                    send_to: o,
                    hitType: "event",
                    event_category: "DCM: MerchantSUFin",
                    event_action: "sign up finish",
                    event_label: h
                }
            }, {
                name: g,
                vars: {
                    send_to: o,
                    hitType: "event",
                    event_category: "merchant sign-up",
                    event_action: h,
                    event_label: "step 8: congrats",
                    page_path: f,
                    page_title: "Thanks for signing up",
                    dimension9: "step 8: congrats",
                    dimension10: k
                }
            }, {
                name: u,
                vars: {
                    url: "paypal.com/merchantaccountsignupfinish"
                }
            }],
            M = {
                type: "var",
                path: ["ensighten.buyerId", "buyerId", "fpti.cust"]
            },
            Te = {
                __proto__: null,
                xo_start: {
                    trigger: {
                        type: "fn",
                        name: "fireImmediate"
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu00/herme0+standard",
                            u2: ae,
                            u3: te,
                            u4: re,
                            u10: h
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: HermesFlowTxnStart",
                            event_action: se,
                            event_label: ae,
                            value: te,
                            dimension23: oe,
                            dimension24: re
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/Qvd-CJi14OABEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/6skCCNO04OABELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/nOhVCJzp6-ABEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/YIRBCKjp6-ABEJy7qMwD"
                        }
                    }]
                },
                xo_end: {
                    trigger: {
                        type: "fn",
                        name: "fireButtonClick"
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu00/herme00+standard",
                            u2: ae,
                            u3: te,
                            u4: re,
                            u10: h
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/w3DCCJKhz9gBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/JdISCJqUz9gBELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/jWNpCI3Ev9gBEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/lFV9COe4v9gBEJy7qMwD"
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "Transaction-HermesFlowTxnEnd-HermesFlow",
                            "cd[MerchantID]": ae,
                            "cd[MerchantTPV]": te,
                            "cd[MerchantTransaction]": re
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "attempted checkout",
                            event_action: se,
                            event_label: ae,
                            value: te,
                            dimension23: oe,
                            dimension24: re
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: HermesFlowTxnFin",
                            event_action: se,
                            event_label: ae,
                            value: te,
                            dimension23: oe,
                            dimension24: re
                        }
                    }]
                },
                guest_xo_end: {
                    trigger: {
                        type: "fn",
                        name: "fireButtonClick"
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu00/guest00+standard",
                            u2: ae,
                            u3: te,
                            u4: re,
                            u10: h
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/CgewCNb93dgBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/98ziCKWNz9gBELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/6QxRCNXS3dgBEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/1XUQCKntztgBEJy7qMwD"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: GuestCheckoutFin",
                            event_action: "finish",
                            event_label: se
                        }
                    }]
                },
                guest_xo_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:ec:hermes::(fullpage-signup|fullpage-guest):member:hermes:|main:xo:lite:weasley:guestAndSignup:billing"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu00/guest0+standard",
                            u2: ae,
                            u3: te,
                            u4: re,
                            u10: h
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: GuestCheckoutStart",
                            event_action: "start",
                            event_label: se
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/avB-CIeg--ABEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/mmuOCI2g--ABELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/D6FMCNe44OABEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/kl0KCJG34OABEJy7qMwD"
                        }
                    }]
                },
                guest_xo_su_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:ec:hermes::(fullpage-signup|fullpage-guest):member:hermes:|main:xo:lite:weasley:guestAndSignup:billing"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu0/guest0+standard",
                            u2: ae,
                            u3: te,
                            u4: re,
                            u10: h
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: GuestSUStart",
                            event_action: "start",
                            event_label: se
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/KISkCNja6-ABEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/G-j4CMba6-ABELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/VGMbCJzg6-ABEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/tnFtCMya--ABEJy7qMwD"
                        }
                    }]
                },
                guest_xo_su_end: {
                    trigger: {
                        type: "fn",
                        name: "handleClick",
                        sel: "button[type=submit], input[type=submit]",
                        suppl: {
                            checked: "true",
                            sel: ["#saveMyInfo", "#guestSignup1", "#agree"]
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu0/guest00+standard",
                            u2: ae,
                            u3: te,
                            u4: re,
                            u10: h
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/GwWqCMT63dgBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/IMhcCOPSv9gBELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/EZB9CNjyztgBEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/6kmLCOi2v9gBEJy7qMwD"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: GuestSUFin",
                            event_action: "finish",
                            event_label: se
                        }
                    }]
                },
                pad_start: {
                    enable: V,
                    trigger: {
                        type: "fn",
                        name: "handleClick",
                        sel: "#padToggle",
                        suppl: {
                            checked: "true",
                            sel: ["#padToggle"]
                        },
                        session: {
                            key: "aupad",
                            type: "start"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/walle0/au_pa0+standard",
                            u2: ae,
                            u3: te,
                            u4: re,
                            u10: h
                        }
                    }]
                },
                pad_end: {
                    enable: V,
                    trigger: {
                        type: "fn",
                        name: "handleClick",
                        sel: "#confirmButtonTop",
                        suppl: {
                            checked: "true",
                            sel: ["#padToggle"]
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/walle0/au_pa000+standard",
                            u2: ae,
                            u3: te,
                            u4: re,
                            u10: h
                        }
                    }]
                },
                pad_ps: {
                    enable: V,
                    trigger: {
                        type: "fn",
                        name: "handleClick",
                        sel: "#confirmButtonTop",
                        suppl: {
                            checked: "true",
                            sel: ["#padToggle"]
                        },
                        session: {
                            key: "aupad",
                            type: "unset"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/walle0/au_pa00+standard",
                            u2: ae,
                            u3: te,
                            u4: re,
                            u10: h
                        }
                    }]
                },
                prox_su_start: {
                    trigger: {
                        type: "fn",
                        name: "matchUrl",
                        condition: {
                            "location.href": "/webapps/xoonboarding",
                            "document.referrer": "webapps/helios"
                        },
                        session: {
                            key: "prox",
                            type: "start"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu0/proxs0+standard",
                            u2: ae,
                            u3: te,
                            u4: re,
                            u10: h
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/m75OCJu-4OABEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/4CZ9CKe-4OABELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/RL8MCIjA4OABEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/HkGLCJzv6-ABEJy7qMwD"
                        }
                    }]
                },
                prox_txn_start: {
                    trigger: {
                        type: "fn",
                        name: "matchUrl",
                        condition: {
                            "location.href": "/webapps/xoonboarding",
                            "document.referrer": "webapps/helios"
                        },
                        session: {
                            key: "prox",
                            type: "start"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu00/proxt0+standard",
                            u2: ae,
                            u3: te,
                            u4: re,
                            u10: h
                        }
                    }]
                },
                prox_su_end: {
                    trigger: {
                        type: "fn",
                        name: "handleClick",
                        sel: "button[type=submit], input[type=submit]",
                        session: {
                            key: "prox",
                            type: "end"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu0/proxs00+standard",
                            u2: ae,
                            u3: te,
                            u4: re,
                            u10: h
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/Hv52CLWGs8cBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/jBTSCN2l9NcBELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/g-dgCM_sztgBEJy7qMwD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/T0apCKytv9gBEKv66t8D"
                        }
                    }]
                },
                prox_txn_end: {
                    trigger: {
                        type: "fn",
                        name: "handleClick",
                        sel: "button[type=submit], input[type=submit]",
                        session: {
                            key: "prox",
                            type: "end"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu00/proxt00+standard",
                            u2: ae,
                            u3: te,
                            u4: re,
                            u10: h
                        }
                    }]
                },
                xolite_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:xo:lite:hermione:member:review"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu00/herme0+standard",
                            u2: P,
                            u3: D,
                            u4: T,
                            u10: h
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: HermesFlowTxnStart",
                            event_action: se,
                            event_label: P,
                            value: D,
                            dimension6: E,
                            dimension23: ie,
                            dimension24: T
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/Qvd-CJi14OABEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/6skCCNO04OABELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/nOhVCJzp6-ABEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/YIRBCKjp6-ABEJy7qMwD"
                        }
                    }]
                },
                xolite_end: {
                    trigger: {
                        type: "fn",
                        name: "handleClick",
                        sel: "#payment-submit-btn"
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu00/herme00+standard",
                            u2: P,
                            u3: D,
                            u4: T,
                            u10: h
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/w3DCCJKhz9gBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/JdISCJqUz9gBELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/jWNpCI3Ev9gBEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/lFV9COe4v9gBEJy7qMwD"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "attempted checkout",
                            event_action: se,
                            event_label: P,
                            value: D,
                            dimension6: E,
                            dimension23: ie,
                            dimension24: T
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: HermesFlowTxnFin",
                            event_action: se,
                            event_label: P,
                            value: D,
                            dimension6: E,
                            dimension23: ie,
                            dimension24: T
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "Transaction-HermesFlowTxnEnd-HermesFlow",
                            "cd[MerchantID]": P,
                            "cd[MerchantTPV]": D,
                            "cd[MerchantTransaction]": T
                        }
                    }]
                },
                xolite_gsu_end: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:xo:lite:weasley:guestAndSignup:billing"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu0/guest00+standard",
                            u2: ae,
                            u3: te,
                            u4: re,
                            u10: h
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/GwWqCMT63dgBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/IMhcCOPSv9gBELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/EZB9CNjyztgBEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/6kmLCOi2v9gBEJy7qMwD"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: GuestSUFin",
                            event_action: "finish",
                            event_label: se
                        }
                    }]
                },
                pad_enroll: {
                    enable: V,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im"
                        }
                    }
                },
                checkout_payin4_start: {
                    enable: S,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:xo:lite:hermione:member:review",
                            link: "process_pay_in_four"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu00/pp_na0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "pay in 4",
                            event_action: "start",
                            event_label: h
                        }
                    }]
                },
                checkout_payin4_finish: {
                    enable: S,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:xo:lite:hermione:member:review",
                            chosen_funding_option: "pay_in_four"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu00/pp_na00+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "pay in 4",
                            event_action: "finish",
                            event_label: h
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "Transaction-Payin4-complete"
                        }
                    }]
                },
                checkout_payin3_start: {
                    enable: K,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:xo:lite:hermione:member:review",
                            link: "process_pay_in_four"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu00/pp_em0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "pay in 3",
                            event_action: "start",
                            event_label: h
                        }
                    }]
                },
                checkout_payin3_finish: {
                    enable: K,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:xo:lite:hermione:member:review",
                            chosen_funding_option: "pay_in_four"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu00/pp_em00+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "pay in 3",
                            event_action: "finish",
                            event_label: h
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "Transaction-Payin3-complete"
                        }
                    }]
                },
                oct_flow_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:businessweb:money:transfer:main:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch000/merch0+standard"
                        }
                    }]
                },
                oct_flow_end: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            fltp: "oct_flow",
                            pgrp: "main:businessweb:money:transfer:success"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch000/merch00+standard"
                        }
                    }]
                },
                mer_itx_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:businessweb:money:withdraw-funds:transfer-to::",
                            link: "instant"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch000/merch0+standard"
                        }
                    }]
                },
                mer_itx_end: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:businessweb:money:instant-funds:transfer-success::",
                            fltp: "instant"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch000/merch00+standard"
                        }
                    }]
                },
                ppbl_uk_mlp: {
                    enable: F,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "ezbob:ppbl:PPBL UK Marketing Landing Page"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch00/pp_em0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: pe,
                            event_action: "marketing landing page",
                            event_label: "gb"
                        }
                    }]
                },
                ppbl_uk_app_start: {
                    enable: F,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "ezbob:ppbl:PPBL UK Application Start"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: pe,
                            event_action: "application start",
                            event_label: "gb"
                        }
                    }]
                },
                ppbl_uk_not_eligible: {
                    enable: F,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "ezbob:ppbl:PPBL UK Not Eligible"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: pe,
                            event_action: "not eligible",
                            event_label: "gb"
                        }
                    }]
                },
                ppbl_uk_eligible_no_result: {
                    enable: F,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "ezbob:ppbl:PPBL UK Eligibility No Result"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: pe,
                            event_action: "eligibility no result ",
                            event_label: "gb"
                        }
                    }]
                },
                ppbl_uk_indicative_offer: {
                    enable: F,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "ezbob:ppbl:PPBL UK Indicative Offer"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch00/pp_em00+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: pe,
                            event_action: "indicative offer yes",
                            event_label: "gb"
                        }
                    }]
                },
                ppbl_uk_financial_details: {
                    enable: F,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "ezbob:ppbl:PPBL UK Financial Details"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: pe,
                            event_action: "financial questionnaire",
                            event_label: "gb"
                        }
                    }]
                },
                ppbl_uk_beneficial_owner: {
                    enable: F,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "ezbob:ppbl:PPBL UK Beneficial Owner"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: pe,
                            event_action: "beneficial owners",
                            event_label: "gb"
                        }
                    }]
                },
                ppbl_uk_link_account: {
                    enable: F,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "ezbob:ppbl:PPBL UK Link Accounts"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: pe,
                            event_action: "link accounts",
                            event_label: "gb"
                        }
                    }]
                },
                ppbl_uk_decline: {
                    enable: F,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "ezbob:ppbl:PPBL UK Declined"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: pe,
                            event_action: "declined",
                            event_label: "gb"
                        }
                    }]
                },
                ppbl_uk_approve: {
                    enable: F,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "ezbob:ppbl:PPBL UK Approved"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch00/pp_em000+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: pe,
                            event_action: "offer",
                            event_label: "gb"
                        }
                    }]
                },
                ppbl_uk_pending: {
                    enable: F,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "ezbob:ppbl:PPBL UK Pending"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: pe,
                            event_action: "pending",
                            event_label: "gb"
                        }
                    }]
                },
                ppbl_uk_terms: {
                    enable: F,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "ezbob:ppbl:PPBL UK Agreement Terms"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: pe,
                            event_action: "agree terms",
                            event_label: "gb"
                        }
                    }]
                },
                ppbl_uk_bnk_details: {
                    enable: F,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "ezbob:ppbl:PPBL UK Bank Details"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: pe,
                            event_action: "bank details",
                            event_label: "gb"
                        }
                    }]
                },
                ppbl_uk_direct_debit: {
                    enable: F,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "ezbob:ppbl:PPBL UK Direct Debit"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: pe,
                            event_action: "direct debit confirmation",
                            event_label: "gb"
                        }
                    }]
                },
                ppbl_uk_funding_complete: {
                    enable: F,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "ezbob:ppbl:PPBL UK Funding Complete"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch00/pp_em001+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: pe,
                            event_action: "loan confirmation",
                            event_label: "gb"
                        }
                    }]
                },
                borderless_reportDownload: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            pgrp: "main:borderlesscommercereport",
                            pglk: "main:borderlesscommercereport\\|.*-fullreport|main:borderlesscommercereport\\|cntrycompare full report|main:borderlesscommercereport\\|CBTstrategy- full  report"
                        },
                        once: !(d.isFNEnabled = function(e) {
                            var n = !1;
                            return n = ne.test(e || "") ? !0 : n
                        })
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_gb002+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "borderless commerce microsite",
                            event_action: "full report download",
                            event_label: de
                        }
                    }]
                },
                borderless_spotlight: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            pgrp: "main:borderlesscommercereport",
                            link: "spotlight.*|cntypopup-compare.*|cntrycompare select|exploreregns-.*|cntrycompare.*"
                        },
                        once: !1
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_gb002+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "borderless commerce microsite",
                            event_action: "spotlight countries",
                            event_label: de
                        }
                    }]
                },
                borderless_navigation: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            pgrp: "main:borderlesscommercereport",
                            link: "top nav -.*|PP logo|Footer.*|homeoverlaytoggle|compareoverlay toggle|Close-borcommreport|exploremap"
                        },
                        once: !1
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "borderless commerce microsite",
                            event_action: "navigation tracking",
                            event_label: de
                        }
                    }]
                },
                honey_landing: {
                    enable: V,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "honey:landing_page:paypal:main"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: n + "/campa0/pp_gb0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "honey event",
                            event_action: "landing page",
                            event_label: h
                        }
                    }, {
                        name: v,
                        vars: {
                            send_to: r + "/5sIBCOHQ_uABEJy7qMwD"
                        }
                    }]
                },
                honey_desktop: {
                    enable: V,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "honey:main:welcome"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: n + "/consu005/pp_gb0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "honey event",
                            event_action: "desktop sign up/plugin install",
                            event_label: h
                        }
                    }, {
                        name: v,
                        vars: {
                            send_to: r + "/i-ooCPXl4-ABEJy7qMwD"
                        }
                    }]
                },
                honey_mobile: {
                    enable: V,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "honey:main:mobile_complete"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: n + "/consu005/pp_gb00+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "honey event",
                            event_action: "mobile sign up/plugin install",
                            event_label: h
                        }
                    }, {
                        name: v,
                        vars: {
                            send_to: r + "/JYbZCJLo4-ABEJy7qMwD"
                        }
                    }]
                },
                pprewards_card_prequalified: {
                    enable: V,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            pgrp: "main:mktg:personal::rewardscard-acquisition-",
                            link: "InfoHero-PrmryCTA-Get Started|Pullout-PrmryCTA-Apply Now"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu003/pp_ap0+standard"
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "fb_rewardscardapplicationprequalified"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "ppreward card",
                            event_action: "application prequalified",
                            event_label: B
                        }
                    }, {
                        name: v,
                        vars: {
                            send_to: r + "/ir44CMW-mfUBEJy7qMwD"
                        }
                    }]
                },
                pprewards_card_ineligible: {
                    enable: V,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:mktg:personal:rewardscard-credit-eligibility:(CREDIT_ACCOUNT_FOUND_FOR_PRODUCT|CUSTOMER_ID_MAPPED_TO_OTHER_OWNER|DIFFERENT_CUSTOMER_IDS_NOT_ALLOWED|ELIGIBILITY_RULE_FAILED)|main:mktg:personal:product:(CREDIT-CITI-TEST-BUSINESS-ACCOUNT|CREDIT-ELIGIBILITY-CITI-TEST-EXISTING-ACCOUNT-DECLINE|CREDIT-CITI-TEST-RECENTLY-DECLINED|CREDIT-CITI-TEST-BUSINESS-INELIGIBLE-ACCOUNT)​"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu003/pp_ap00+standard"
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "fb_rewardscardapplicationineligible"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "ppreward card",
                            event_action: "application ineligible",
                            event_label: B
                        }
                    }, {
                        name: v,
                        vars: {
                            send_to: r + "/4JncCKDmjfUBEJy7qMwD"
                        }
                    }]
                },
                pprewards_card_application_start: {
                    enable: V,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "PSPrescreen 1 / Contact Details"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu003/pp_ap000+standard"
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "fb_rewardscardapplicationstart"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "ppreward card",
                            event_action: "application start",
                            event_label: B
                        }
                    }, {
                        name: v,
                        vars: {
                            send_to: r + "/MQ82CIHImfUBEJy7qMwD"
                        }
                    }]
                },
                pprewards_card_application_finish_pending: {
                    enable: V,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "Prescreen 2 / Personal Details"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu003/pp_ap001+standard"
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "fb_rewardscardapplicationfinishpending"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "ppreward card",
                            event_action: "application finish pending",
                            event_label: B
                        }
                    }, {
                        name: v,
                        vars: {
                            send_to: r + "/zRe1CIXmjfUBEJy7qMwD"
                        }
                    }]
                },
                pprewards_card_application_finish_approved: {
                    enable: V,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "Confirmation",
                            appStatus: "APPROVED"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu003/pp_ap002+standard"
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "fb_rewardscardapplicationapproved"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "ppreward card",
                            event_action: "application finish pending",
                            event_label: B
                        }
                    }, {
                        name: v,
                        vars: {
                            send_to: r + "/30nJCJjKmfUBEJy7qMwD"
                        }
                    }]
                },
                kwc_mx_start: {
                    enable: R,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "konfio:/mi/solicitud/iniciar/rfc"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch001/pp_la0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "konfio",
                            event_action: "application_start",
                            event_label: "mx"
                        }
                    }]
                },
                kwc_mx_middle: {
                    enable: R,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "konfio:/mi/solicitud/credito/datos-negocio/ciec/contrasena"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch001/pp_la00+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "konfio",
                            event_action: "application_middle",
                            event_label: "mx"
                        }
                    }]
                },
                kwc_mx_finish: {
                    enable: R,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "konfio:/mi/solicitud/credito/oferta"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch001/pp_la000+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "konfio",
                            event_action: "application_finish",
                            event_label: "mx"
                        }
                    }]
                },
                pprewards_card_application_assessment: {
                    enable: V,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "Acquisitions",
                            page: "FullFillment"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu003/pp_ap003+standard"
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "fb_rewardscardapplicationassessment"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "ppreward card",
                            event_action: "application assessment",
                            event_label: B
                        }
                    }, {
                        name: v,
                        vars: {
                            send_to: r + "/M32TCOa6v94CEJy7qMwD"
                        }
                    }]
                },
                pprewards_card_application_submit: {
                    enable: V,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "Acquisitions",
                            page: "Spinner page before FullFillment"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu003/pp_ap004+standard"
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "fb_rewardscardapplicationsubmit"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "ppreward card",
                            event_action: "application submit",
                            event_label: B
                        }
                    }, {
                        name: v,
                        vars: {
                            send_to: r + "/7ANxCOKUh-ACEJy7qMwD"
                        }
                    }]
                },
                pprewards_card_application_decline: {
                    enable: V,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "Acquisitions",
                            page: "Application Rejected"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu003/pp_ap005+standard"
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "fb_rewardscardapplicationdecline"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "ppreward card",
                            event_action: "application decline",
                            event_label: B
                        }
                    }, {
                        name: v,
                        vars: {
                            send_to: r + "/aGTwCP_h3N8CEJy7qMwD"
                        }
                    }]
                },
                mp_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:pools:create::basics:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu00/money0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "create money pools",
                            event_action: h,
                            event_label: "step 1: create pool",
                            page_path: "/pools/c/create/basics",
                            page_title: "Set your pool's goal",
                            dimension9: "step 1: create pool",
                            dimension10: ce
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/PPXCCNui_eABEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/kJkmCOTo7eABELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/wl3GCM6u4uABEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/NaV9CPai_eABEJy7qMwD"
                        }
                    }]
                },
                mp_end: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:pools:(campaign-create-success:::|create::publish:::)"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu00/money00+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "create money pools",
                            event_action: h,
                            event_label: "step 6: success",
                            page_path: "/pools/c/create/publish",
                            page_title: "Pool Published",
                            dimension9: "step 6: success",
                            dimension10: ce
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/OrrBCMzZ7eABEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/JIcpCM_Z7eABELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/aEW-CJ6V_eABEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/PNo8CMnf7eABEJy7qMwD"
                        }
                    }]
                },
                mp_send_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:pools:send::amount:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu00/money000+standard"
                        }
                    }]
                },
                mp_send_end: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:pools:campaign-xxx-send-success:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu00/money001+standard"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/jZpUCP-s4uABEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/R74wCNGe_eABELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/ilPTCICu4uABEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/wOc8CKif_eABEJy7qMwD"
                        }
                    }]
                },
                mp_wdl_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:pools:withdraw::amount:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu00/money002+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "withdraw money pools",
                            event_action: h,
                            event_label: "step 1: withdraw money",
                            page_path: "/pools/c/edit/transfer",
                            page_title: "Transfer money",
                            dimension9: "step 1: withdraw money",
                            dimension10: ce
                        }
                    }]
                },
                mp_wdl_end: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:pools:withdraw::complete:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu00/money003+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "withdraw money pools",
                            event_action: h,
                            event_label: "step 2: withdraw success",
                            page_path: "/pools/c/edit/transfer/complete",
                            page_title: "Transfer money complete",
                            dimension9: "step 2: withdraw success",
                            dimension10: ce
                        }
                    }]
                },
                mp_send_amt_ga: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:pools:send::amount:::",
                            pglk: "main:pools:campaign::page|chipIn"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "send money pools",
                            event_action: h,
                            event_label: "step 1: send money",
                            page_path: "/pools/c/send/amount",
                            page_title: "Chip in to a pool",
                            dimension9: "step 1: send money",
                            dimension10: ce
                        }
                    }]
                },
                mp_send_note_ga: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:pools:(send::note:::|guest::note:::)"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "send money pools",
                            event_action: h,
                            event_label: "step 2: add comment",
                            page_path: "/pools/c/send/note",
                            page_title: "Add a comment",
                            dimension9: "step 2: add comment",
                            dimension10: ce
                        }
                    }]
                },
                mp_send_review_ga: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:(pools:send::review:::|p2p:guest:preview:)"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "send money pools",
                            event_action: h,
                            event_label: "step 3: review",
                            page_path: "/pools/c/send/review",
                            page_title: "Confirm transfer",
                            dimension9: "step 3: review",
                            dimension10: ce
                        }
                    }]
                },
                mp_create_pref_ga: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:pools:create::preferences:::"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "create money pools",
                            event_action: h,
                            event_label: "step 2: pool preferences",
                            page_path: "/pools/c/create/preferences",
                            page_title: "How much can contributors pay?",
                            dimension9: "step 2: pool preferences",
                            dimension10: ce
                        }
                    }]
                },
                mp_create_desc_ga: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:pools:create::description:::"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "create money pools",
                            event_action: h,
                            event_label: "step 3: pool description",
                            page_path: "/pools/c/create/description",
                            page_title: "Describe your pool",
                            dimension9: "step 3: pool description",
                            dimension10: ce
                        }
                    }]
                },
                mp_create_prev_ga: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:pools:create::preview:::"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "create money pools",
                            event_action: h,
                            event_label: "step 4: pool preview",
                            page_path: "/pools/c/create/preview",
                            page_title: "Preview your money pool",
                            dimension9: "step 4: pool preview",
                            dimension10: ce
                        }
                    }]
                },
                mp_create_prepub_ga: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:pools:create::prepublish:::"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "create money pools",
                            event_action: h,
                            event_label: "step 5: pool prepublish",
                            page_path: "/pools/c/create/prepublish",
                            page_title: "Ready to publish",
                            dimension9: "step 5: pool prepublish",
                            dimension10: ce
                        }
                    }]
                },
                chipIn_send_guest: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:pools:guest::amount:::",
                            pglk: "main:pools:guest::amount|next"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "send money pools",
                            event_action: h,
                            event_label: "step 1: send money",
                            page_path: "/pools/c/send/amount",
                            page_title: "Chip in to a pool",
                            dimension9: "step 1: send money",
                            dimension10: ce
                        }
                    }]
                },
                chipIn_end_guest: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:(pools:campaign-xxx-send-success:::|transfer:guest:success:)"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "send money pools",
                            event_action: h,
                            event_label: "step 4: transfer success",
                            page_path: "/pools/c/send/complete",
                            page_title: "Chip in complete",
                            dimension9: "step 4: transfer success",
                            dimension10: ce
                        }
                    }]
                },
                cons_ixfer_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:moneynodeweb:.*:amount",
                            sel_fmx_tp: "card"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu001/consi0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "consumer instant transfer",
                            event_action: "start",
                            event_label: w
                        }
                    }]
                },
                cons_ixfer_mid: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:moneynodeweb:.*:amount:review",
                            sel_fmx_tp: "card"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu001/consi00+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "consumer instant transfer",
                            event_action: "mid",
                            event_label: w
                        }
                    }]
                },
                cons_ixfer_end: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:moneynodeweb:.*:result",
                            sel_fmx_tp: "card"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu001/consi000+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "consumer instant transfer",
                            event_action: "finish",
                            event_label: w
                        }
                    }]
                },
                cons_add_bank_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: _e,
                            acnt: ue
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/walle0/consw000+standard"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/hITHCMqPvNwBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/hKFfCPqPvNwBELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/caDzCOW9stwBEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/H-5fCLjjzdwBEJy7qMwD"
                        }
                    }]
                },
                cons_add_bank_end_v1: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: me,
                            goal: "addbank:success|addBankSuccess",
                            acnt: ue
                        }
                    },
                    vendors: be
                },
                cons_add_bank_end_v2: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: le,
                            acnt: ue
                        }
                    },
                    vendors: be
                },
                cons_add_card_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: ve,
                            acnt: ue
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/walle0/consw0+standard"
                        }
                    }]
                },
                cons_add_card_end: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: ge,
                            acnt: ue
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/walle0/consw00+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "account activity",
                            event_action: I,
                            event_label: "link card"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/2uP1COGRvNwBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/5rgVCLqRvNwBELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/Bnw0CO2_stwBEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/ZWJFCJ_lzdwBEJy7qMwD"
                        }
                    }]
                },
                mer_add_bank_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: _e,
                            acnt: ye
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/walle0/merch0+standard"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/dPI1CInYzdwBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/WKSRCPq3stwBELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/FwUSCJCIvNwBEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/0giECKWIvNwBEJy7qMwD"
                        }
                    }]
                },
                mer_add_bank_end_v1: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: me,
                            goal: "addbank:success",
                            acnt: ye
                        }
                    },
                    vendors: he
                },
                mer_add_bank_end_v2: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: le,
                            acnt: ye
                        }
                    },
                    vendors: he
                },
                mer_add_card_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: ve,
                            acnt: ye
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/walle0/merch000+standard"
                        }
                    }]
                },
                mer_add_card_end: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: ge,
                            acnt: ye
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/walle0/merch001+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "account activity",
                            event_action: I,
                            event_label: "link card"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/NDjxCMe6stwBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/XbjZCMG6stwBELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/vsaJCNrbzdwBEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/Eu4rCOPbzdwBEJy7qMwD"
                        }
                    }]
                },
                mpp_mp_start: {
                    enable: j,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:mktg:personal:product:money-pools:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/money0+standard"
                        }
                    }]
                },
                egov_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:business::application:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch0/egovc0+standard"
                        }
                    }]
                },
                borderless_cm_form_submit: {
                    enable: {
                        type: "fn",
                        name: "conditionalValue",
                        args: ["jp|sg|hk|br|mx", "fetchCountry"]
                    },
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:mktg:business::business-borderless-commerce:::",
                            pglk: "main:mktg:business::business-borderless-commerce\\|pardot-form-submit"
                        }
                    },
                    vendors: [{
                        name: u,
                        vars: {
                            url: "paypal.com/downloadreportformsubmit"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "download_report",
                            event_action: "submit_form",
                            event_label: B
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "fb_downloadreportformsubmit"
                        }
                    }]
                },
                egov_end: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:business::results:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch0/egovc00+standard"
                        }
                    }]
                },
                rd_curr_top: {
                    enable: V,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:mktg:general::ecommerce2020:::",
                            link: "PrdctHero-PrmryCTA-Download Now"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/curre0+standard"
                        }
                    }]
                },
                rd_curr: {
                    enable: V,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:mktg:general::ecommerce2020:::",
                            link: "Pullout-Prmrycta-Offer-ScndCTA-Download Now"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/curre00+standard"
                        }
                    }]
                },
                con_sel: {
                    enable: O,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:mktg::signup:accountselect:::",
                            link: "personal-account|personal|Personal Account \\| Next"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/apac_0+standard"
                        }
                    }]
                },
                mer_sel: {
                    enable: O,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:mktg::signup:accountselect:::",
                            link: "merchant-account|business|Business Account \\| Next"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/apac_00+standard"
                        }
                    }]
                },
                shp_su_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            pgrp: "main:mktg:(personal::(refunded-)?|::)returns",
                            pglk: "main.*returns.*",
                            lgin: "out"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu000/freer0+standard"
                        }
                    }]
                },
                shp_su_end: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:mktg:(personal::(refunded-)?|::)returns",
                            pglk: "main(.*personal.*returns.*|.*unifiedlogin.*)",
                            lgin: "in"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu000/freer00+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "free return shipping",
                            event_action: "activation",
                            event_label: h
                        }
                    }]
                },
                mpp_404: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:mktg:::page-not-found"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "404 error",
                            event_action: {
                                type: "fn",
                                name: "constructUrl"
                            },
                            event_label: {
                                type: "var",
                                path: "document.referrer",
                                defaultVal: "none"
                            },
                            content_group1: {
                                type: "var",
                                path: "dataLayer.pageType"
                            }
                        }
                    }]
                },
                acc_sel: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg::signup:(accountselect|account-selection):::|main:mktg:sem::account-selection-signup:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/accou0+standard"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/lyoPCKTM7eABEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/sFBBCPmR4uABELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/DF8-CP-R4uABEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/5AoqCNHM7eABEJy7qMwD"
                        }
                    }]
                },
                pp_partner_cnt_start: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:mktg:business::partner-program-contact-us"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch000/pp_gb0+standard"
                        }
                    }]
                },
                pp_partner_cnt_finish: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:mktg:business::partner-program-contactsupport-submission"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch000/pp_gb00+standard"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/CVEPCMKpstwBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/rpt-CIWistwBELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/BjdqCMH3u9wBEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/VnmjCJ__u9wBEJy7qMwD"
                        }
                    }]
                },
                pp_merchant_cnt_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:::contact-us:::|main:mktg:::contact-sales:::|main:mktg:::business-contact-sales:::|main:mktg:::grow-business:::|main:mktg:business::contact-sales:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch000/pp_gb000+standard"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/s86DCNawq_sBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/odXuCKuptvsBELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/vPdkCPqUlvsBEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/y3vRCLmvqfsBEJy7qMwD"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/merchantcontactstart"
                        }
                    }]
                },
                pp_merchant_cnt_finish: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:mktg:::contact-us-complete|main:mktg:::merchant\\/contact-us-complete|main:mktg:business::business-contact-sales-thank-you|main:mktg:business:product:business-contact-sales-thank-you|main:mktg:business::contact-sales-thank-you"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch000/pp_gb001+standard"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/ESn_CMH17eABEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/h-rfCN6r_eABELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/whuMCPyr_eABEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/NUdnCLP57eABEJy7qMwD"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/merchantcontactfinish"
                        }
                    }]
                },
                con_sel_click: {
                    enable: G,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            pgrp: "main:mktg::signup:accountselect|main:mktg:for-you:account:create-account",
                            link: "Personal|PersonalControl|sign-up-for-personal-account"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "consumer sign-up",
                            event_action: h,
                            event_label: "step 1: account selection"
                        }
                    }]
                },
                mer_sel_click: {
                    enable: G,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            pgrp: "main:mktg::signup:accountselect|main:mktg:for-you:account:create-account",
                            link: "Business|BusinessControl|account-selection|sign-up-for-free"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "merchant sign-up",
                            event_action: h,
                            event_label: "step 1: account selection"
                        }
                    }]
                },
                prod_sel_pageview: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:mktg:personal::product-selection"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "merchant sign-up",
                            event_action: h,
                            event_label: "step 2: product selection",
                            dimension9: "step 2: product selection"
                        }
                    }]
                },
                mpp_offer: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pglk: "main:mktg:personal::offers\\|save_to_wallet"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "save offer to wallet",
                            event_action: h,
                            event_label: {
                                type: "var",
                                path: "fpti.link"
                            }
                        }
                    }]
                },
                pp_home_land: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:mktg:(personal::home|business::home-merchant)"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pphom0+standard"
                        }
                    }]
                },
                merc_setup_intg: {
                    enable: Z,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:mktg:(business:(merchant-integration:(direct|home|email-payments|shopify|shopping-carts|your-website|get-started|solution|woocommerce|account-setup|platform|lojaintegrada|ecommerce-platform)|:merchant-integration)|premier:(:merchant-setup|merchant-setup:(travel|services|other)))"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch0/selli001+standard"
                        }
                    }]
                },
                emailClick: {
                    trigger: {
                        type: "fn",
                        name: "eventClick",
                        sel: 'a[href^="mailto:"]'
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "mailto",
                            event_action: {
                                type: "var",
                                path: "latmconf.evntData.href",
                                defaultVal: "email tracking"
                            },
                            event_label: ""
                        }
                    }]
                },
                outboundLinkClick: {
                    trigger: {
                        type: "fn",
                        name: "eventClick",
                        sel: 'a:not([href*="paypal.com"])',
                        once: !1
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "exit links",
                            event_action: {
                                type: "var",
                                path: "latmconf.evntData.hostname",
                                defaultVal: "hostname"
                            },
                            event_label: {
                                type: "var",
                                path: "latmconf.evntData.pathname"
                            },
                            transport_type: "beacon"
                        }
                    }]
                },
                videoPlay: {
                    trigger: {
                        type: "fn",
                        name: "eventClick",
                        sel: 'a[href$=".mp4"], button[class*="mpp-media-btn"]',
                        once: !1
                    },
                    capture: "data-video-id",
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "video",
                            event_action: "play",
                            event_label: {
                                type: "var",
                                path: ["latmconf.evntData.id", "latmconf.evntData.data-video-id"],
                                defaultVal: "videoId"
                            }
                        }
                    }]
                },
                videoPlay_youTube: {
                    trigger: {
                        type: "fn",
                        name: "eventClick",
                        sel: 'a[class="youtube-player-modal"], #player, button[data-video-id]',
                        once: !1
                    },
                    capture: "data-video-id",
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "video",
                            event_action: "youtube play",
                            event_label: {
                                type: "var",
                                path: ["latmconf.evntData.id", "latmconf.evntData.data-video-id"],
                                defaultVal: "videoId"
                            }
                        }
                    }]
                },
                downloadFiles: {
                    trigger: {
                        type: "fn",
                        name: "eventClick",
                        sel: 'a[href$=".pdf"], a[href$=".xlsx"]',
                        once: !1
                    },
                    capture: "data-pa-click",
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "downloads",
                            event_action: {
                                type: "fn",
                                name: "mapValue",
                                args: [
                                    ["latmconf.evntData.href", "latmconf.evntData.className"], {
                                        ".pdf": "pdf",
                                        ".xlsx": "excel",
                                        "itunes.apple.com": "app ios",
                                        "play.google.com": "app google",
                                        apple: "app ios",
                                        google: "app google"
                                    }
                                ],
                                defaultVal: "file download"
                            },
                            event_label: {
                                type: "var",
                                path: "latmconf.evntData.data-pa-click"
                            }
                        }
                    }]
                },
                navigationTracking_head: {
                    trigger: {
                        type: "fn",
                        name: "eventClick",
                        sel: "#main-menu a",
                        once: !1
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "navigation tracking",
                            event_action: "main menu",
                            event_label: {
                                type: "var",
                                path: "latmconf.evntData.textContent",
                                defaultVal: "header value"
                            }
                        }
                    }]
                },
                navigationTracking_foot: {
                    trigger: {
                        type: "fn",
                        name: "eventClick",
                        sel: "footer a",
                        once: !1
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "navigation tracking",
                            event_action: "footer menu",
                            event_label: {
                                type: "var",
                                path: "latmconf.evntData.textContent",
                                defaultVal: "footer value"
                            }
                        }
                    }]
                },
                refer_friend_aklamio: {
                    enable: {
                        type: "fn",
                        name: "conditionalValue",
                        args: ["de|ch", "fetchCountry"]
                    },
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:mktg:personal::refer-a-friend"
                        }
                    },
                    vendors: [{
                        name: _,
                        enable: {
                            type: "fn",
                            name: "conditionalValue",
                            args: ["ch", "fetchCountry"]
                        },
                        vars: {
                            uid: "cdd2b5e876ca1781282f776e9944e0ae"
                        }
                    }, {
                        name: _,
                        enable: J,
                        vars: {
                            uid: "ceef9d417743849da68b6413994da9a5"
                        }
                    }]
                },
                incentive_donateOffer: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            pgrp: "main:mktg:personal::rewarded",
                            pglk: "main:mktg:personal::rewarded\\|CTA\\|Download the App"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_gb00+standard"
                        }
                    }]
                },
                incentive_honeyOffer: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            pgrp: "main:mktg:personal::rewarded",
                            pglk: "main:mktg:personal::rewarded\\|CTA\\|Join Honey"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_gb0+standard"
                        }
                    }]
                },
                incentive_referFriend: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            pgrp: "main:mktg:personal::rewarded",
                            pglk: "main:mktg:personal::rewarded\\|CTA\\|Send 1 Cent Now"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_gb000+standard"
                        }
                    }]
                },
                qrc_su_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            pgrp: "main:mktg:business:campaign:qr-code-download|main:mktg:business:product:adapt-your-business|main:mktg:business:product:adapt-your-business",
                            lgin: "out"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_gb003+standard"
                        }
                    }]
                },
                qrc_su_fin: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            pgrp: "main:mktg:business:campaign:qr-code-download",
                            pglk: "main:mktg:business:campaign:qr-code-download\\|Hero\\|Download Your QR Code|main:mktg:business:campaign:qr-code-download\\|Hero\\|QR-Code herunterladen|main:mktg:business:campaign:qr-code-download\\|Hero\\|Téléchargez votre QR code|main:mktg:business:campaign:qr-code-download\\|Hero\\|Descargar código QR",
                            lgin: "in"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_gb004+standard"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/qrgeneration"
                        }
                    }]
                },
                bnpl_get_started: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:mktg:business::buy-now-pay-later:::",
                            link: "HeaderMainMenu0-Cta-Get Started|DvcHero-ScndCTA-cta\\|Contact Sales|SmplPnlStk0-PrmryCTA-Get Started"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_gb005+standard"
                        }
                    }]
                },
                bnpl_signup_start: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:mktg:business::buy-now-pay-later:::",
                            link: "SmplPnlStk1-ScndCTA-Sign Up"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_gb006+standard"
                        }
                    }]
                },
                bnpl_webinar_registration: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:mktg:business::enterprise/buy-now-pay-later:::",
                            link: "Editorial\\|Register for Webinars"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_gb007+standard"
                        }
                    }]
                },
                bnpl_book_meeting: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:mktg:business::enterprise/buy-now-pay-later:::",
                            link: "Enterprise Form|Book a Meeting"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_gb008+standard"
                        }
                    }]
                },
                payin4_landing_page: {
                    enable: S,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:::pay-in-4:::|main:mktg:personal::4x:::|main:mktg:business::business-buy-now-pay-later:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_na00+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "pay in 4",
                            event_action: "landing page",
                            event_label: h
                        }
                    }]
                },
                rd_learn_more: {
                    enable: V,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:mktg:general::ecommerce2020:::",
                            link: "Pullout-Prmrycta-Offer-ScndCTA-Learn More"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_ap00+standard"
                        }
                    }]
                },
                rd_contact_sales: {
                    enable: V,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:mktg:general::ecommerce2020:::",
                            link: "pullout-hatch-Contact Sales"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_ap000+standard"
                        }
                    }]
                },
                pp_dd_mkt_btn_click: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:mktg:personal::government-direct-deposit:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_na005+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "direct deposit",
                            event_action: "click on use DD",
                            event_label: h
                        }
                    }]
                },
                pp_dd_mkt_landing_page: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:personal::government-direct-deposit:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_na004+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "direct deposit",
                            event_action: "landing page",
                            event_label: h
                        }
                    }]
                },
                pp_merchant_ent_cnt_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:::enterprise-contact-sales:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch000/pp_gb002+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "enterprise form",
                            event_action: "form start",
                            event_label: h
                        }
                    }]
                },
                pp_merchant_ent_cnt_finish: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:business:product:enterprise-contact-sales-thank-you:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch000/pp_gb003+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "enterprise form",
                            event_action: "form complete",
                            event_label: h
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/mjQWCJrVoO4BEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/IE21CPW_wO4BELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/QufeCM3BwO4BEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/KdwpCMrBwO4BEJy7qMwD"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/enterprisemerchantcontactfinish"
                        }
                    }]
                },
                pp_check_cashing_landing: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:general::check-cashing:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_na006+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "check cashing",
                            event_action: "landing page",
                            event_label: h
                        }
                    }]
                },
                pp_check_cashing_button_click: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:mktg:general::check-cashing:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_na007+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "check cashing",
                            event_action: "button click",
                            event_label: h
                        }
                    }]
                },
                pp_dd_tax_refund_start: {
                    enable: X,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:mktg:general::taxes:::",
                            link: "Editorial1-HatchCTA-Get Started"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_na008+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "direct deposit",
                            event_action: "click on get started",
                            event_label: "tax refund"
                        }
                    }]
                },
                pp_hc_merchant_form_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:business::accept-payments/healthcare:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_gb009+standard"
                        }
                    }]
                },
                pp_hc_merchant_form_finish: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:mktg:business::accept-payments/healthcare:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_gb00-+standard"
                        }
                    }]
                },
                download_ios_app: {
                    trigger: {
                        type: "fn",
                        name: "eventClick",
                        sel: 'a[href*="itunes.apple.com"], a[class*="app-badge app-badge--apple"]',
                        once: !1
                    },
                    capture: "data-pa-click",
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "downloads",
                            event_action: "app ios",
                            event_label: {
                                type: "var",
                                path: "latmconf.evntData.data-pa-click"
                            }
                        }
                    }, {
                        name: m,
                        enable: X,
                        vars: {
                            send_to: e + "/mppmz0/pp_na00f+standard"
                        }
                    }]
                },
                download_android_app: {
                    trigger: {
                        type: "fn",
                        name: "eventClick",
                        sel: 'a[href*="play.google.com"], a[class*="app-badge app-badge--google"]',
                        once: !1
                    },
                    capture: "data-pa-click",
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "downloads",
                            event_action: "app google",
                            event_label: {
                                type: "var",
                                path: "latmconf.evntData.data-pa-click"
                            }
                        }
                    }, {
                        name: m,
                        enable: X,
                        vars: {
                            send_to: e + "/mppmz0/pp_na00e+standard"
                        }
                    }]
                },
                mpp_partner_checkout: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:merchanthub:appcenter:partners|main:mktg:business::partner-directory:::|main:mktg:business::partner-solutions:::|main:mktg:business:sem:merchant-solutions-partners:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_gb00b+standard"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/ohoOCKfAyYACEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/2E97CPvb6IACELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/gUJVCNnFyYACEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/lC6kCNLHyYACEJy7qMwD"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/checkoutpartnerlandingpage"
                        }
                    }]
                },
                mpp_ecdc_form_start: {
                    enable: X,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:business::full-stack-payments:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_na00g+standard"
                        }
                    }]
                },
                mpp_ecdc_form_fin: {
                    enable: X,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:mktg:business::full-stack-payments:::",
                            pglk: "main:mktg:business::full-stack-payments\\|Enterprise Form\\|Book a Meeting"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_na00h+standard"
                        }
                    }]
                },
                mpp_fraud_sec_form_start: {
                    enable: X,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:business::enterprise-advanced-fraud-security:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_na00i+standard"
                        }
                    }]
                },
                mpp_fraud_sec_form_fin: {
                    enable: X,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:mktg:business::enterprise-advanced-fraud-security:::",
                            pglk: "main:mktg:business::enterprise-advanced-fraud-security\\|Enterprise Form\\|Book a Meeting"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_na00j+standard"
                        }
                    }]
                },
                payin4_registerform_landing: {
                    enable: V,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:business::pay-in-4:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_ap001+standard"
                        }
                    }]
                },
                payin4_registerform_submit: {
                    enable: V,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:business::pay-in-4:::",
                            pglk: "main:mktg:business::pay-in-4\\|submit-source-"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_ap002+standard"
                        }
                    }]
                },
                zettle_contactus_start: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:business:zettle:contact-sales:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_na00k+standard"
                        }
                    }, {
                        name: v,
                        vars: {
                            send_to: a + "/JGfeCMary5gCEPzFjtkD"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "zettle contact us",
                            event_action: "start",
                            event_label: "form"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/zettlecontactusstart"
                        }
                    }]
                },
                zettle_contactus_fin: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:business::thank-you:::|main:mktg:business::pos-contact-sales-thank-you:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_na00l+standard"
                        }
                    }, {
                        name: v,
                        vars: {
                            send_to: a + "/jc4UCOWYzJgCEPzFjtkD"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "zettle contact us",
                            event_action: "finish",
                            event_label: "form"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/zettlecontactusfinish"
                        }
                    }]
                },
                mpp_churn_success: {
                    enable: {
                        type: "fn",
                        name: "conditionalValue",
                        args: ["us|es|fr|uk|de|gb", "fetchCountry"]
                    },
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:mktg:personal::pfs-claim-offer5.*-p::",
                            link: "success"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_gb00c+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "claim offer",
                            event_action: "success",
                            event_label: h
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/56LOCOfevPACEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/HqWqCM2m0fICEKv66t8D"
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "fb_claimoffersuccess"
                        }
                    }]
                },
                mpp_doordash: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            merchant_name: "DoorDash",
                            event_name: "shopping_deals_offer_details_screen_shown"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_na00m+standard"
                        }
                    }]
                },
                mpp_mobile_apps: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:personal:product:mobile-apps-paypal-app:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_gb00d+standard"
                        }
                    }]
                },
                mpp_cvs_qrc: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:business:product:cvs-qr-code:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_gb00e+standard"
                        }
                    }]
                },
                mpp_qrc_dwnld: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:business:campaign:qr-code-download"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_gb00f+standard"
                        }
                    }]
                },
                mpp_uk_acceptpymt: {
                    enable: q,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:business:product:business-accept-payments:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_em0+standard"
                        }
                    }]
                },
                mpp_uk_business: {
                    enable: q,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:business:product:business:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_em00+standard"
                        }
                    }]
                },
                mpp_uk_enterprise_reg: {
                    enable: {
                        type: "fn",
                        name: "conditionalValue",
                        args: ["gb|uk|fr|de", "fetchCountry"]
                    },
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:business::enterprise/buy-now-pay-later:::|main:mktg:business::enterprise/pay-later:::"
                        }
                    },
                    vendors: [{
                        name: u,
                        vars: {
                            url: "paypal.com/bnplregisterationfinish"
                        }
                    }]
                },
                mpp_de_expressxo: {
                    enable: J,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:mktg:business:product:enterprise-express:::",
                            pglk: "main:mktg:business:product:enterprise-express\\|pardot-form-submit"
                        }
                    },
                    vendors: [{
                        name: u,
                        vars: {
                            url: "paypal.com/expressregisterationfinish"
                        }
                    }]
                },
                mpp_merchfees_it: {
                    enable: {
                        type: "fn",
                        name: "conditionalValue",
                        args: ["it", "fetchCountry"]
                    },
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:business::merchant-fees:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_gb00h+standard"
                        }
                    }]
                },
                cons_acc_summ: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:walletweb:summary::main"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/accou0/consu0+standard"
                        }
                    }]
                },
                merc_acc_summ: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:businessweb:mep:dashboard:"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/accou0/merch0+standard"
                        }
                    }]
                },
                pp_directdeposit_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:walletweb:summary:main:QUICK_LINKS|main:walletweb:summary:main:HERO_ENGAGEMENT|main:walletweb:summary:main:ENGAGEMENT|main:walletweb:summary:main:PRIMARY_ACCOUNT_QUALITY",
                            link: "QUICK_LINKS\\|DIRECT_DEPOSIT_PROSPECT|HERO_ENGAGEMENT\\|DIRECT_DEPOSIT|ENGAGEMENT\\|DIRECT_DEPOSIT|PRIMARY_ACCOUNT_QUALITY\\|direct_deposit"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/accou0/pp_na0+standard"
                        }
                    }]
                },
                pp_directdeposit_finish: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:bankingbundle:vba::virtualbankaccountsuccessmanualeip"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/accou0/pp_na00+standard"
                        }
                    }]
                },
                pp_dd_tax_cashflow_activation_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:homeinfonodeweb:info:cashaccount::disclosure:terms:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/accou0/pp_na0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "direct deposit",
                            event_action: "cash plus activation start",
                            event_label: "tax refund"
                        }
                    }]
                },
                pp_early_dd_start: {
                    enable: X,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:homeinfonodeweb:info:cashaccount::disclosure:terms:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu005/pp_na0+standard"
                        }
                    }, {
                        name: v,
                        vars: {
                            send_to: a + "/YYvhCI2CzsgCEPzFjtkD"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "early direct deposit",
                            event_action: "signup start",
                            event_label: h
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/earlydirectdepositsignupstart"
                        }
                    }]
                },
                pp_early_dd_finish: {
                    enable: X,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:policydashboardweb:process:compliance:debitcard:personal:US:thank_you:done_page::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu005/pp_na00+standard"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/G_2GCNehz8gCEPzFjtkD"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "early direct deposit",
                            event_action: "signup finish",
                            event_label: h
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/earlydirectdepositsignupfinish"
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "FB_PP_NA_CONSUMERWALLET_EARLYDIRECTDEPOSIT_SIGNUP_FINISH"
                        }
                    }]
                },
                p2p_send_mon_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:p2p:(unified:)?send::(email|review|phone):node::|main:consumer:p2p:(transfer:xb:country|gift:start)|main:p2p:transfer:xb:start"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu00/sendm0+standard",
                            u3: C
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: ConsumerSendMoneyStart",
                            event_action: "start",
                            event_label: h
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/OTMTCOfK7eABEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/w2KECKn__OABELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/037lCIyD_eABEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/A0crCM2C_eABEJy7qMwD"
                        }
                    }]
                },
                req_mon_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:p2p:request:(multi)?:review:node::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu00/reqmo0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: ConsumerReqMoneyStart",
                            event_action: "start",
                            event_label: h
                        }
                    }]
                },
                req_mon_fin: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:p2p:request:(multi)?:done:node::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu00/reqmo00+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: ConsumerReqMoneyFin",
                            event_action: "finish",
                            event_label: h
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "request money",
                            event_action: "request",
                            event_label: "request",
                            page_path: f
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/u749CI7__OABEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/81qRCNmG4uABELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/fJkqCOWM4uABEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/rCVACL2O4uABEJy7qMwD"
                        }
                    }]
                },
                p2p_send_mon: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:p2p:unified:send::done"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "send money/pay",
                            event_action: "send",
                            event_label: "send money to friends and family",
                            event_value: C,
                            page_path: f
                        }
                    }, {
                        name: m,
                        vars: {
                            send_to: e + "/consu00/sendm00+standard",
                            u3: C
                        }
                    }, fe, we, ke, Ce, {
                        name: l,
                        vars: {
                            ev: "Transaction-SndMnyP2PPayFlow-P2PPayFlow"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: ConsumerSendMoneyFin",
                            event_action: "finish",
                            event_label: "send money to friends and family"
                        }
                    }]
                },
                p2p_send_mon_int: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:p2p:send::done",
                            pp_flow: "xb"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "send money/pay",
                            event_action: "send",
                            event_label: "send to friends and family internationally",
                            event_value: C,
                            page_path: f
                        }
                    }, {
                        name: m,
                        vars: {
                            send_to: e + "/consu00/sendm00+standard",
                            u3: C
                        }
                    }, fe, we, ke, Ce, {
                        name: l,
                        vars: {
                            ev: "Transaction-SndMnyP2PPayFlow-P2PPayFlow"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: ConsumerSendMoneyFin",
                            event_action: "finish",
                            event_label: "send to friends and family internationally"
                        }
                    }]
                },
                p2p_send_gift: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:p2p:gift::done"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "send gift",
                            event_action: "send",
                            event_label: "send a gift",
                            event_value: C,
                            dimension11: {
                                type: "var",
                                path: "fpti.sndcur"
                            },
                            page_path: f
                        }
                    }, {
                        name: m,
                        vars: {
                            send_to: e + "/consu00/sendm00+standard",
                            u3: C
                        }
                    }, fe, we, ke, Ce, {
                        name: l,
                        vars: {
                            ev: "Transaction-SndMnyP2PPayFlow-P2PPayFlow"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: ConsumerSendMoneyFin",
                            event_action: "finish",
                            event_label: "send a gift"
                        }
                    }]
                },
                p2p_buy: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:p2p:unified:buy::done"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "send money/pay",
                            event_action: "pay",
                            event_label: "pay for goods or services",
                            event_value: C,
                            page_path: f
                        }
                    }, {
                        name: m,
                        vars: {
                            send_to: e + "/consu00/sendm00+standard",
                            u3: C
                        }
                    }, fe, we, ke, Ce, {
                        name: l,
                        vars: {
                            ev: "Transaction-SndMnyP2PPayFlow-P2PPayFlow"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: ConsumerSendMoneyFin",
                            event_action: "finish",
                            event_label: "pay for goods or services"
                        }
                    }]
                },
                guest_acc_upg_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:onbrd:signup:upgrade:start:::",
                            flow: "newton"
                        },
                        session: {
                            key: "gupgd",
                            type: "start"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu0/guest001+standard"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/EcAMCKzA4OABEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/LX3_CLjA4OABELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/uS1JCO_B4OABEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/Ha8zCPWl--ABEJy7qMwD"
                        }
                    }]
                },
                guest_acc_upg_fin: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:onbrd:signup:upgrade:intent:::",
                            flow: "newton"
                        },
                        session: {
                            key: "gupgd",
                            type: "end"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu0/guest000+standard"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/xz7CCO3ov9gBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/pfHGCLHcv9gBELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/fj6fCJXg3dgBEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/v0XzCN7J3dgBEJy7qMwD"
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "ConsumerSignup"
                        }
                    }]
                },
                pers_acc_upg_fin: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:business:activation:businessSetup|main:onbrd:falconnode::(done|congrats(default|partner|)|partnerDone)|main:activation:commercesetupnodeweb"
                        },
                        session: {
                            key: "persupg",
                            type: "end"
                        }
                    },
                    vendors: De
                },
                pers_acc_upg_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:onbrd:falconnode::(upgradeBusinessAccount|businessTypeSelection|upgradeDecision|upgradeBusinessTypeSelection|businessInfo)",
                            acnt: "personal|premier"
                        },
                        session: {
                            key: "persupg",
                            type: "start"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch0/acctu0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "merchant upgrade",
                            event_action: h,
                            event_label: "step 1: upgrade to business account",
                            page_path: f,
                            page_title: "Upgrade to Business Account",
                            dimension9: "step 1: upgrade to business account",
                            dimension10: k
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/JidPCN39_OABEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/uYKZCJfF7eABELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/IuC7CM_E7eABEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/mcsACLXF7eABEJy7qMwD"
                        }
                    }]
                },
                pers_acc_upg_fin_mep: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:businessweb:mep:dashboard:main",
                            pglk: "main:onbrd:falconnode::(personalInfo\\|personalInfoSubmitButton|create\\|createContinueButton|selfCertify\\|selfCertifySubmitButton|businessInfo\\|continueButton)"
                        },
                        session: {
                            key: "persupg",
                            type: "end"
                        }
                    },
                    vendors: De
                },
                ppme_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:ppme:create:welcome:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/gener0/paypa0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: PayPalMeSUStart",
                            event_action: "start",
                            event_label: h
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/ySx9COr1jZICEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/-lOeCOr_h5ICELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/In9gCJqGiJICEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/V1HwCLOZ6ZECEJy7qMwD"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/paypalmesignupstart"
                        }
                    }]
                },
                ppme_end: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:ppme:create:done:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/gener0/paypa00+standard"
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "ProductSignup-PayPalMeSUFin-PayPalMe"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: PayPalMeSUFin",
                            event_action: "finish",
                            event_label: h
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/SXOTCKiR6ZECEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/V4m3CKmV6ZECELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/dMCgCJuZ6ZECEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/NbdxCPaa6ZECEJy7qMwD"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/paypalmesignupfinish"
                        }
                    }]
                },
                pers_acc_su_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:onbrd:organic:(signup:account|reusable:signup):::|main:onbrd:signup:organic:(gsl-popup::|email_password)"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu0/persa0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: PersAcctSUStart",
                            event_action: "sign up start",
                            event_label: h
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "consumer sign-up",
                            event_action: h,
                            event_label: "step 2: account credentials",
                            page_path: "/welcome/signup/email_password",
                            page_title: "Create Email and Password",
                            dimension9: "step 2: account credentials",
                            dimension10: k
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/6yJwCJSV--ABEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/OJx5CPOn4OABELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/H1pZCL-W--ABEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/12oUCNGp4OABEJy7qMwD"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/consumersignupstart"
                        }
                    }]
                },
                pers_acc_su_fin: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:onbrd:organic:wallet:(selectIntent|addcard):::|consonbdnodeweb/.*/signup/usePayPal.dust|main:onbrd:signup:organic:intent_selection"
                        }
                    },
                    vendors: A
                },
                sb_su_start: {
                    enable: H,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:onbrd:organic:signup:account:::|main:onbrd:organic:signup:account:mobileconf:::|main:mktg::signup:accountselect:::",
                            pglk: "main:mktg::signup:accountselect\\|Continue Next CTA \\| Continue with CPF|main:mktg::signup:accountselect\\|Personal Account \\| Continuar com CPF"
                        },
                        session: {
                            key: "sbsu",
                            type: "start"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch0/sbsus0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: SBSUStart",
                            event_action: "sign up start",
                            event_label: h
                        }
                    }]
                },
                sb_su_end: {
                    enable: H,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:onbrd:organic:wallet:selectIntent:::|main:moneynodeweb:cards:new:manual:::"
                        },
                        session: {
                            key: "sbsu",
                            type: "end"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch0/sbsuf0+standard"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/rjs7CIue3tgBELXZ6tkD"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: SBSUFin",
                            event_action: "sign up finish",
                            event_label: h
                        }
                    }]
                },
                pro_su_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:onbrd:falconnode::checkAccount",
                            prod: "pro_2_0|pro_3_0"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch00/merch001+standard"
                        }
                    }]
                },
                pro_su_end_app: {
                    trigger: {
                        type: "fn",
                        name: "matchPgTxt",
                        sel: ".statusHeader",
                        text: "success"
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch00/merch0+standard"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/t_vyCLyvstwBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/LzQ3CMmtstwBEKv66t8D"
                        }
                    }]
                },
                pro_su_end_rev: {
                    trigger: {
                        type: "fn",
                        name: "matchPgTxt",
                        sel: ".statusHeader",
                        text: "review"
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch00/merch00+standard"
                        }
                    }]
                },
                pro_su_end_dec: {
                    trigger: {
                        type: "fn",
                        name: "matchPgTxt",
                        sel: ".statusHeader",
                        text: "decline"
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch00/merch000+standard"
                        }
                    }]
                },
                biz_acc_su_end: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:business:activation:businessSetup|main:onbrd:falconnode::(done|congrats(default|partner|)|partnerDone)|main:activation:commercesetupnodeweb"
                        },
                        session: {
                            key: "mercsu",
                            type: "end"
                        }
                    },
                    vendors: L
                },
                biz_acc_su_end_mep: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:businessweb:mep:dashboard:main|main:merchanthub:appcenter:main",
                            pglk: "main:onbrd:falconnode::(personalInfo\\|personalInfoSubmitButton|create\\|createContinueButton|selfCertify\\|selfCertifySubmitButton|businessInfo\\|continueButton)"
                        },
                        session: {
                            key: "mercsu",
                            type: "end"
                        }
                    },
                    vendors: L
                },
                pplus_start: {
                    enable: N,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:onbrd:falconnode::create"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch0/pplus0+standard"
                        }
                    }]
                },
                pplus_fin: {
                    enable: N,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:business:activation:businessSetup|(main:onbrd:falconnode::((congrats(default|partner)?|done)))|main:activation:commercesetupnodeweb"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch0/pplus00+standard"
                        }
                    }]
                },
                tesla_su_create: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:onbrd:organic:signup:(create|addresslookup)"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "consumer sign-up",
                            event_action: h,
                            event_label: "step 3: personal details",
                            page_path: "/welcome/signup/name_address",
                            page_title: "Enter Personal Info",
                            dimension9: "step 3: personal details",
                            dimension10: k
                        }
                    }]
                },
                tesla_su_addcard_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:(onbrd:organic:wallet:addcard|progressive:welcome:complete:addcard)"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "consumer sign-up",
                            event_action: h,
                            event_label: "step 5: add card",
                            page_path: "/welcome/signup/add_card",
                            page_title: "Add Card",
                            dimension9: "step 5: add card",
                            dimension10: k
                        }
                    }, {
                        name: m,
                        vars: {
                            send_to: e + "/walle0/consw0+standard"
                        }
                    }]
                },
                tesla_su_addcard_fin: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            pglk: "main:onbrd:organic:wallet:addcard\\|linkcard|main:onbrd:organic:wallet:selectIntent|addcard"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "consumer sign-up",
                            event_action: h,
                            event_label: "step 5: add card",
                            page_title: "Add Card",
                            dimension9: "step 5: add card",
                            dimension10: k
                        }
                    }, {
                        name: m,
                        vars: {
                            send_to: e + "/walle0/consw00+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "account activity",
                            event_action: I,
                            event_label: "link card"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/2uP1COGRvNwBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/5rgVCLqRvNwBELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/Bnw0CO2_stwBEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/ZWJFCJ_lzdwBEJy7qMwD"
                        }
                    }]
                },
                tesla_su_addbank_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:onbrd:organic:wallet:addbank"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "consumer sign-up",
                            event_action: h,
                            event_label: "step 6: add bank",
                            page_path: "/welcome/signup/add_bank",
                            page_title: "Add Bank",
                            dimension9: "step 6: add bank",
                            dimension10: k
                        }
                    }, {
                        name: m,
                        vars: {
                            send_to: e + "/walle0/consw000+standard"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/hITHCMqPvNwBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/hKFfCPqPvNwBELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/caDzCOW9stwBEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/H-5fCLjjzdwBEJy7qMwD"
                        }
                    }]
                },
                tesla_su_addbank_fin: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            pglk: "main:onbrd:organic:wallet:addbank"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "consumer sign-up",
                            event_action: h,
                            event_label: "step 6: add bank",
                            page_path: "/welcome/signup/add_bank",
                            page_title: "Add Bank",
                            dimension9: "step 6: add bank",
                            dimension10: k
                        }
                    }, {
                        name: m,
                        vars: {
                            send_to: e + "/walle0/consu0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "account activity",
                            event_action: I,
                            event_label: "link bank account"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/7FWPCK68stwBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/Ri5WCNndzdwBELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/albtCN2NvNwBEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/8nBhCM6NvNwBEJy7qMwD"
                        }
                    }]
                },
                tesla_su_buy: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:onbrd:organic:bgc:buyselltransfer"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "consumer sign-up",
                            event_action: h,
                            event_label: "step 7: activation",
                            page_path: "/welcome/signup/activation",
                            page_title: "Sign Up Complete",
                            dimension8: "active",
                            dimension9: "step 7: activation",
                            dimension10: k
                        }
                    }]
                },
                acc_su_consent_edison: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:unifiedlogin:::login",
                            tsrce: "conspartneronbnodeweb"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu0/pp_gb000+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: z,
                            event_action: "edison authorization page",
                            event_label: h
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/k7V-CI7e29wBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/M3DACL7e29wBELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/5pIKCKDe29wBEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/Xo6GCPnK7twBEJy7qMwD"
                        }
                    }]
                },
                acc_su_fin_edison: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:consumeronboarding:::wallet-fi-display",
                            tsrce: "Edison"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu0/pp_gb00+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: z,
                            event_action: "edison signup complete",
                            event_label: h
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/OLG8CLrj29wBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/-1lgCMLl29wBELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/jsYHCIzl29wBEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/ktZGCOTN0twBEJy7qMwD"
                        }
                    }]
                },
                acc_su_start_edison: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:consumeronboarding:::signup",
                            tsrce: "Edison"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu0/pp_gb0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: z,
                            event_action: "edison signup start",
                            event_label: h
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/lnz0COPP0twBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/o96ECLXn29wBELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/n0FcCJnp29wBEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/ziAyCIHp29wBEJy7qMwD"
                        }
                    }]
                },
                biz_check_acc: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:onbrd:falconnode::checkAccount"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "merchant sign-up",
                            event_action: h,
                            event_label: "step 3: enter email address",
                            page_path: f,
                            page_title: "Check Account",
                            dimension9: "step 3: enter email address",
                            dimension10: k
                        }
                    }]
                },
                biz_create_pwd: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:onbrd:falconnode::createPassword"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "merchant sign-up",
                            event_action: h,
                            event_label: "step 4: enter password",
                            page_path: f,
                            page_title: "Create Password",
                            dimension9: "step 4: enter password",
                            dimension10: k
                        }
                    }]
                },
                biz_acc_su_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:onbrd:falconnode::create$"
                        },
                        session: {
                            key: "mercsu",
                            type: "start"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch0/bizac0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: MerchantSUStart",
                            event_action: "sign up start",
                            event_label: h
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "merchant sign-up",
                            event_action: h,
                            event_label: "step 5: enter business info and account created",
                            page_path: f,
                            page_title: "Create Business Account",
                            dimension8: "active",
                            dimension9: "step 5: enter business info and account created",
                            dimension10: k,
                            dimension46: "true"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/po-UCKKa--ABEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/-CfpCL-v4OABELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/VjrHCNvj6-ABEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/Au6mCJma--ABEJy7qMwD"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/merchantaccountsignupstart"
                        }
                    }]
                },
                biz_bus_info: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:onbrd:falconnode::businessinfo"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "merchant sign-up",
                            event_action: h,
                            event_label: "step 6: select business type",
                            page_path: f,
                            page_title: "Enter Business Info",
                            dimension9: "step 6: select business type",
                            dimension10: k
                        }
                    }]
                },
                biz_pers_info: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:onbrd:falconnode::personalInfo"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "merchant sign-up",
                            event_action: h,
                            event_label: "step 7: enter personal info",
                            page_path: f,
                            page_title: "Enter Personal Info",
                            dimension9: "step 7: enter personal info",
                            dimension10: k
                        }
                    }]
                },
                pwd_recovery_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:(authflow:(:::|sms_challenge::(enter_security_code|change_sms)|password_recovery::(create_password_done|create_password)|card_challenge::(enter_card_number|change_card)|email_challenge::(enter_security_code|change_email)|ivr_challenge::(ivr_polling|change_ivr)|identity_document_challenge::upload_document|security_questions_challenge::enter_answers)|authchallenge::submit::authflow:password-recovery:change:)"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu000/passw0+standard"
                        }
                    }]
                },
                pwd_recovery_end: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:(authchallenge::submit::authflow:(password-recovery:change:|email-recovery:done:)|authflow:(password_recovery::(create_password_done|create_password)|emailrecovery::foundone))"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu000/passw00+standard"
                        }
                    }]
                },
                pers_acc_su_fin_reusable: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:walletweb:summary::main:::|main:moneynodeweb:(cards:new:manual|money:banks:new):::",
                            pglk: "main:onbrd:organic:reusable:profile:|main:onbrd:organic:signup:create\\|/appData/action"
                        }
                    },
                    vendors: A
                },
                pypl_key_su_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:debitcards:enrollment:virtualLandingPage"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/walle0/pp_gb00+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "paypal key sign up",
                            event_action: "start",
                            event_label: Ee
                        }
                    }]
                },
                pypl_key_su_finish: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:debitcards:enrollment:virtualSuccessPage"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/walle0/pp_gb0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "paypal key sign up",
                            event_action: "finish",
                            event_label: Ee
                        }
                    }]
                },
                pers_acc_su_fin_dis: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:onbrd:organic:reusable:redirect_add_card:::",
                            flow: "mppdisneynna",
                            account_status: "success"
                        }
                    },
                    vendors: A
                },
                xoom_pers_acc_su_fin: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:onbrd:signup:xoom:success:::"
                        }
                    },
                    vendors: [{
                        name: l,
                        vars: {
                            id: "236564939871335",
                            ev: "PageView"
                        }
                    }, {
                        name: v,
                        vars: {
                            send_to: "AW-986779018/T--DCJG7vv4BEIqbxNYD"
                        }
                    }]
                },
                credit_app_start: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:creditapplyweb:billinginfopage:::::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu002/ppcre0+standard",
                            u1: M
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: PPCreditAppStart",
                            event_action: "start",
                            event_label: h
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "consumer credit",
                            event_action: "step 1: billing info",
                            event_label: "application start",
                            page_path: f,
                            page_title: "Confirm Billing Info"
                        }
                    }]
                },
                credit_app_succ: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:creditapplyweb:decisionpage:APPROVED::::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu002/ppcre00+standard",
                            u1: M
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "ProductSignup-CreditApproved-PayPalCreditApply"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: PPCreditAppFinApproved",
                            event_action: "finish approved",
                            event_label: h
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "consumer credit",
                            event_action: "step 4: decision",
                            event_label: "approved",
                            page_path: f,
                            page_title: "Decision Page"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/ns46CLP1sNwBEPzFjtkD"
                        }
                    }]
                },
                credit_app_decl: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:creditapplyweb:decisionpage:DECLINED::::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu002/ppcre000+standard",
                            u1: M
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: PPCreditAppFinDeclined",
                            event_action: "finish declined",
                            event_label: h
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "consumer credit",
                            event_action: "step 4: decision",
                            event_label: "declined",
                            page_path: f,
                            page_title: "Decision Page"
                        }
                    }]
                },
                credit_psu_start: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:creditapplyweb:newcust:::::"
                        },
                        session: {
                            key: "psucredit",
                            type: "start"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu0/persa0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: PersAcctSUStart",
                            event_action: "sign up start",
                            event_label: h
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "consumer sign-up",
                            event_action: h,
                            event_label: "credit application"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/6yJwCJSV--ABEPzFjtkD"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/consumersignupstart"
                        }
                    }]
                },
                land_uk: {
                    enable: F,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:mktg:personal::paypal-virtual-credit"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu002/ppcre001+standard",
                            u1: M
                        }
                    }]
                },
                start_uk: {
                    enable: F,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:creditapplyweb:(applypage:::::|newcust:::::)"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu002/ppcre002+standard",
                            u1: M
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "consumer credit",
                            event_action: "step 1: billing info",
                            event_label: "application start",
                            page_path: f,
                            page_title: "Confirm Billing Info"
                        }
                    }]
                },
                appr_uk: {
                    enable: F,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:creditapplyweb:contractpage:CONSUMERCREDIT::::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu003/ppcre00+standard",
                            u1: M
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "consumer credit",
                            event_action: "step 3: terms and conditions",
                            event_label: "show terms and conditions",
                            page_path: f,
                            page_title: "Review Terms and Conditions"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/5KGaCKLWzdwBEKv66t8D"
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "ProductSignup-CreditApproved-PayPalCreditApply"
                        }
                    }]
                },
                succ_end_uk: {
                    enable: F,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:creditapplyweb:contractpage:CONSUMERCREDIT::::",
                            link: "creditContractAgreeToTermsGB"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu002/ppcre003+standard",
                            u1: M
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "consumer credit",
                            event_action: "step 4: decision",
                            event_label: "approved",
                            page_path: f,
                            page_title: "Decision Page"
                        }
                    }]
                },
                dec_end_uk: {
                    enable: F,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:creditapplyweb:decisionpage:DECLINED::::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu002/ppcre004+standard",
                            u1: M
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "consumer credit",
                            event_action: "step 4: decision",
                            event_label: "declined",
                            page_path: f,
                            page_title: "Decision Page"
                        }
                    }]
                },
                psu_credit_succ: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:creditapplyweb:decisionpage:APPROVED::::"
                        },
                        session: {
                            key: "psucredit",
                            type: "end"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu0/persa00+standard"
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "ConsumerSignup"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: PersAcctSUFin",
                            event_action: "sign up finish",
                            event_label: h
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "consumer sign-up",
                            event_action: h,
                            event_label: "credit application"
                        }
                    }, {
                        name: v,
                        vars: {
                            send_to: a + "/Hv52CLWGs8cBEPzFjtkD"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/consumersignupfinish"
                        }
                    }]
                },
                psu_credit_decl: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:creditapplyweb:decisionpage:DECLINED::::"
                        },
                        session: {
                            key: "psucredit",
                            type: "end"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu0/persa00+standard"
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "ConsumerSignup"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: PersAcctSUFin",
                            event_action: "sign up finish",
                            event_label: h
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "consumer sign-up",
                            event_action: h,
                            event_label: "credit application"
                        }
                    }, {
                        name: v,
                        vars: {
                            send_to: a + "/Hv52CLWGs8cBEPzFjtkD"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/consumersignupfinish"
                        }
                    }]
                },
                credit_app_per_info: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:creditapplyweb:personalinfopage:::::"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "consumer credit",
                            event_action: "step 2: personal info",
                            event_label: "enter personal info",
                            page_path: f,
                            page_title: "Enter Personal Info"
                        }
                    }]
                },
                credit_app_terms: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:creditapplyweb:termspage:::::"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "consumer credit",
                            event_action: "step 3: terms and conditions",
                            event_label: "show terms and conditions",
                            page_path: f,
                            page_title: "Review Terms and Conditions"
                        }
                    }]
                },
                wallet_iiw_application_start: {
                    enable: J,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:creditapplyweb:repaymentpage:::::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu002/pp_em0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "installments in wallet",
                            event_action: "start",
                            event_label: "application start"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/Ey-NCOmO3t8BEKv66t8D"
                        }
                    }]
                },
                wallet_iiw_personal_info: {
                    enable: J,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:creditapplyweb:personalinfopage:::::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu002/pp_em002+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "installments in wallet",
                            event_action: "enter personal info",
                            event_label: "personal info"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/w2SdCLGR0t8BEKv66t8D"
                        }
                    }]
                },
                wallet_iiw_approved: {
                    enable: J,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:creditapplyweb:termspage:::::|main:creditapplyweb:termspage:NEED_SIGNATURE::::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu002/pp_em00+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "installments in wallet",
                            event_action: "approved",
                            event_label: "terms page"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/uTrbCPyO0t8BEKv66t8D"
                        }
                    }]
                },
                wallet_iiw_need_signature: {
                    enable: J,
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:creditapplyweb:termspage:::::|main:creditapplyweb:termspage:NEED_SIGNATURE::::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu002/pp_em000+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "installments in wallet",
                            event_action: "approved",
                            event_label: "need signature"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/EPWzCIWV0t8BEKv66t8D"
                        }
                    }]
                },
                wallet_iiw_decline: {
                    enable: J,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:creditapplyweb:decisionpage:DECLINED::::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu002/pp_em001+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "installments in wallet",
                            event_action: "declined",
                            event_label: "application declined"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/hAw7CLuJ0t8BEKv66t8D"
                        }
                    }]
                },
                mer_mx_installment: {
                    enable: R,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:businessweb:profile::main:installmentSelection",
                            isInstActive: "true"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch002/pp_la0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "merchant installments",
                            event_action: "enable installments",
                            event_label: "mx"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/3fT1CP6G99MCELXZ6tkD"
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "MERCHANT_INSTALLMENT_ENABLE"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/merchantinstallmentenable"
                        }
                    }]
                },
                bizdebit_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:debitcardweb:debitcard:.*:createCard:primaryCard:entered"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch00/merch003+standard"
                        }
                    }]
                },
                bizdebit_aprv: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:debitcardweb:debitcard:.*:createCard:primaryCard:success"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch00/merch004+standard"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/JBXxCIaez9gBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/NyTpCO3n3dgBELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/BJjwCKm8v9gBEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/IcJxCPHwztgBEJy7qMwD"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/merchantdebitsignup"
                        }
                    }]
                },
                ccfullsu_start: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:bankingbundle:upgrade:wcip:entry:::|main:bankingbundle:upgrade:wocip:entry:::|main:bankingbundle:signupupgrade::entry:::",
                            product_type: "BUNDLE"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu000/paypa0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "cash card full",
                            event_action: "sign up start",
                            event_label: w
                        }
                    }]
                },
                ccfullsu_end: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:bankingbundle:upgrade:wcip:upgradesuccess:::|main:bankingbundle:upgrade:wocip:upgradesuccess:::|main:bankingbundle:signupupgrade::upgradesuccess:::",
                            product_type: "BUNDLE"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu000/paypa00+standard"
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "ProductSignup-PayPalMeSUFin-PayPalMe"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/iYWoCK_3u9wBEPzFjtkD"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "cash card full",
                            event_action: "sign up finish",
                            event_label: w
                        }
                    }]
                },
                ccfullact_start: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:bankingbundle:activatecard::activatecard:::",
                            product_type: "BUNDLE"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu000/paypa000+standard"
                        }
                    }]
                },
                ccfullact_end: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:bankingbundle:activatecard::activatesuccess:::|main:bankingbundle:managecard:manualtopup:manualtopup:::",
                            product_type: "BUNDLE"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu000/paypa001+standard"
                        }
                    }]
                },
                cctaxreqdd_finish: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:bankingbundle:::directdeposit:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu000/paypa00-+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "cash card full",
                            event_action: "direct deposit",
                            event_label: w
                        }
                    }]
                },
                pph_success: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:onbrd:falconnode::approval",
                            prod: "pph"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch00/pphsu0+standard"
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "ProductSignup-PPHSuccess-MobileMerchant"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "paypal here",
                            event_action: "step 2: complete",
                            event_label: "approved"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/Jj5HCNSQ--ABEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/0yKKCM3P6-ABELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/PEcACPiQ--ABEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/pOYECP6Q--ABEJy7qMwD"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/paypalapproved"
                        }
                    }]
                },
                pph_decline: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:onbrd:falconnode::denied",
                            prod: "pph"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch00/pphde0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "paypal here",
                            event_action: "step 2: complete",
                            event_label: "denied"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/paypaldeclined"
                        }
                    }]
                },
                pph_review: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:onbrd:falconnode::review",
                            prod: "pph"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch00/pphre0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "paypal here",
                            event_action: "step 2: complete",
                            event_label: "review"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/AuDNCN2j4OABEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/SrdvCPeS--ABELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/ZOioCL2U--ABEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/fI4lCNjU6-ABEJy7qMwD"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/paypalpending"
                        }
                    }]
                },
                pph_add_info: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:onbrd:falconnode::review",
                            prod: "pph"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "paypal here",
                            event_action: "step 2: complete",
                            event_label: "additional information"
                        }
                    }]
                },
                biz_pph_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:onbrd:falconnode::(signupStart|businessUpgradeMissingInfo|upgradeExistingBusinessAccount|consumerUpgradeBizInfo|createNewAccount|upgradeConsumerAccountLandingPage|newUserInfo|businessInfo)",
                            prod: "pph"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch00/pphst0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "paypal here",
                            event_action: "step 1: apply for paypal here",
                            page_path: "/bizsignup/upgradeExistingBusinessAccount",
                            page_title: "Apply for a PayPal Here Account",
                            dimension9: "step 1: apply for paypal here",
                            dimension10: k
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/paypalstart"
                        }
                    }]
                },
                phh_device_order_start: {
                    enable: F,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:pph:deviceorder:start"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch00/pphde00+standard"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/deviceorderstart"
                        }
                    }]
                },
                phh_device_order_finish: {
                    enable: F,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:pph:deviceorder:finish"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch00/pphde000+standard"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/deviceorderfinish"
                        }
                    }]
                },
                ztl_su_start: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "zettle:onboarding:signup"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch002/pp_na0+standard"
                        }
                    }, {
                        name: v,
                        vars: {
                            send_to: a + "/yC-UCIKpz8gCEPzFjtkD"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "zettle",
                            event_action: "signup start",
                            event_label: h
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/zettleussignupstart"
                        }
                    }]
                },
                ztl_su_finish: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "zettle:onboarding:complete",
                            status: "APPROVED"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch002/pp_na00+standard"
                        }
                    }, {
                        name: v,
                        vars: {
                            send_to: a + "/aAQeCLyLz8gCEPzFjtkD"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "zettle",
                            event_action: "signup finish",
                            event_label: h
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/zettleussignupfinish"
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "FB_PP_NA_ONBOARDING_ZETTLE_SIGNUP_FINISH"
                        }
                    }]
                },
                muse_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:businessweb:muse::tag-creation(::CreateTag|-mini::AgreeContinue)"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch00/musei0+standard"
                        }
                    }]
                },
                muse_end: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:businessweb:muse::tag.*Settings",
                            pglk: "main:businessweb:muse::tag-creation.*"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch00/musei00+standard"
                        }
                    }]
                },
                ot_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            pgrp: "main:mktg:personal:(buy:one-touch-checkout|one-touch-checkout:faq|sem:personal-one-touch-checkout)"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu000/oneto0+standard"
                        }
                    }]
                },
                ot_end: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:personal:buy:one-touch-checkout:::",
                            tsrce: "one_touch",
                            lgin: "in"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu000/oneto00+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "onetouch payments",
                            event_action: "landing page activation",
                            event_label: h
                        }
                    }]
                },
                ot_sign_up: {
                    trigger: {
                        type: "fn",
                        name: "handleClick",
                        sel: "#\\/appData\\/action",
                        suppl: {
                            checked: "true",
                            sel: ["#paypalAccountData_oneTouchCheckbox"]
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu000/oneto00+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "onetouch payments",
                            event_action: "consumer sign up",
                            event_label: h
                        }
                    }]
                },
                ot_sign_up_checkout: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            link: "POMA_CHECKBOX_CHECKED",
                            flnm: "ec:hermes:"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/consu000/oneto00+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "onetouch payments",
                            event_action: "checkout activation",
                            event_label: h
                        }
                    }]
                },
                inv_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:inv3:manage::invoices:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch00/invoi0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "merchant invoicing",
                            event_action: "create",
                            event_label: "start"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/kgrlCPbK7eABEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/w4X2CJiG_eABELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/ixL0CK2D_eABEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/JM1aCPvG7eABEJy7qMwD"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/requestmoneystart"
                        }
                    }]
                },
                inv_end: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:inv3:manage:msg:(invsent|scheduled|invshared):::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch00/invoi00+standard"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/ORSkCI-tz9gBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/E_iRCMbcv9gBELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/7c-3CPH_ztgBEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/4IoFCNnH3dgBEJy7qMwD"
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "ProductSignup-InvoiceFin-Invoice"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "merchant invoicing",
                            event_action: "create",
                            event_label: "finish"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/requestmoneyfinish"
                        }
                    }]
                },
                inv_pay_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:inv3:payerinv::payable::sent:popupPayExperience:::|main:inv3:payerinv::payable::unpaid:popuppayexperience:::|main:inv3:payerinv::payable::sent:classicpayexperience:::|main:inv3:payerinv::payable::partiallypaid:popuppayexperience:::|main:inv3:payerinv::payable::",
                            link: "payInvoice|payInvoiceInPopup"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch00/pp_gb00+standard"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/6dYwCNeI79wBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/mj1DCO6U3NwBELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/PycqCO-I79wBEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/x_h2CP-G79wBEJy7qMwD"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "merchant invoicing",
                            event_action: "pay invoice",
                            event_label: "start"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/sendmoneystart"
                        }
                    }]
                },
                inv_pay_finish: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:inv3:payerinv::paymentdone:::|main:inv3:payerinv::paymentdone::paymentPending:"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch00/pp_gb0+standard"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/70JpCNuW3NwBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/0oYFCJ750twBELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/ox4kCO6X3NwBEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/VFg3COGG79wBEJy7qMwD"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "merchant invoicing",
                            event_action: "pay invoice",
                            event_label: "finish"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/sendmoneyfinish"
                        }
                    }]
                },
                ppdg_land: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:consumer:gifts:home:"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/gener0/ppdgl0+standard"
                        }
                    }]
                },
                ppdg_txn_start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pgrp: "main:consumer:gifts:cart:"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/gener0/ppdgs0+standard"
                        }
                    }]
                },
                ppdg_txn_end: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:consumer:gifts:cart:success:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/gener0/ppdge0+standard"
                        }
                    }]
                },
                landing: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:ppwc:::homepage:::|Landing Page"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch001/ppwcl0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: PPWCLanding",
                            event_action: "landing page",
                            event_label: h
                        }
                    }]
                },
                start: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            qual: "businessInfoView"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch001/ppwca0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: PPWCAppStart",
                            event_action: "application start",
                            event_label: h
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/Sa8pCJKb_eABEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/xReICKnm7eABELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/zaWkCIqs4uABEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/2ml-CLKq4uABEJy7qMwD"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/ppworkingstart"
                        }
                    }]
                },
                approved: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            qual: "offerInfoView"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch001/ppwca002+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: PPWCAppApproved",
                            event_action: "approved",
                            event_label: h
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/Nd52CJrUzdwBEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/4MXVCPeustwBELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/Cq-2CJOnstwBEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/WK3aCObVzdwBEJy7qMwD"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/ppworkingapproved"
                        }
                    }]
                },
                declined: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            qual: "decision.*"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch001/ppwca001+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: PPWCAppDeclined",
                            event_action: "declined",
                            event_label: h
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/lx7dCPek4uABEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/5-VWCMqk4uABELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/VnKsCKGl4uABEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/teJ6CIml4uABEJy7qMwD"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/ppworkingdeclined"
                        }
                    }]
                },
                ineligible: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            qual: "eligibility.*"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch001/ppwca000+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: PPWCAppIneligible",
                            event_action: "ineligible",
                            event_label: h
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/wfNOCPam4uABEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/BHqDCOri7eABELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/HFq9COia_eABEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/Z32iCIun4uABEJy7qMwD"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/ppworkingelligible"
                        }
                    }]
                },
                funded: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            pglk: "workingcapitalnodeweb.*complete.*"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch001/ppwca00+standard"
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "ProductSignup-PPWCLoanFunded-PayPalWorkingCapital"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DCM: PPWCAppFinLoanFunded",
                            event_action: "funded",
                            event_label: h
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/EuuRCLXO7eABEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/IC7LCK3M7eABELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/4_vyCKnO7eABEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/oD4TCOOG_eABEJy7qMwD"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/ppworkingfunded"
                        }
                    }]
                },
                scroll_event: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "sd",
                            st: "percent"
                        },
                        once: !1
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "scroll",
                            event_action: {
                                type: "var",
                                obj: "data",
                                path: "sd",
                                defaultVal: "0",
                                concat: {
                                    append: " percent scrolled"
                                }
                            },
                            event_label: f
                        }
                    }]
                },
                ln_click: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl"
                        },
                        once: !1
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "in-page link tracking",
                            event_action: {
                                type: "var",
                                obj: "data",
                                path: "link"
                            },
                            event_label: {
                                type: "var",
                                obj: "data",
                                path: "lu"
                            }
                        }
                    }]
                },
                form_submit: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "fs",
                            flnm: "form_submit",
                            status: "success"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: {
                                type: "var",
                                obj: "data",
                                path: "ec",
                                defaultVal: "forms"
                            },
                            event_action: {
                                type: "var",
                                obj: "data",
                                path: "ea",
                                defaultVal: "submit"
                            },
                            event_label: {
                                type: "var",
                                obj: "data",
                                path: "el",
                                defaultVal: "generic"
                            }
                        }
                    }]
                },
                iq_bot: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im"
                        }
                    },
                    vendors: [{
                        name: b
                    }]
                },
                mer_appcntr: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            flow: "PP_COMMERCE_PLATFORM"
                        }
                    }
                },
                gen_brc_home: {
                    enable: F,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:help:brc::brcHome:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch002/pp_em0+standard"
                        }
                    }]
                },
                donate_cause: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            pgrp: "main:cause:fundraiser:hub:",
                            link: "donateButton"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "donate to charity",
                            event_action: "donate",
                            event_label: "finish",
                            event_value: D
                        }
                    }]
                },
                fb_pgv: {
                    trigger: {
                        type: "generic",
                        once: !1
                    },
                    vendors: [{
                        name: l,
                        vars: {
                            ev: "ViewContent"
                        }
                    }]
                },
                li_pgv: {
                    trigger: {
                        type: "generic",
                        once: !1
                    },
                    vendors: [{
                        name: u
                    }]
                },
                ga_pgv: {
                    trigger: {
                        type: "generic",
                        once: !1
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            event_action: "page_view",
                            page_title: {
                                type: "var",
                                path: "document.title"
                            },
                            page_location: B
                        }
                    }]
                },
                crypto_landing_page: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            evnt_type: "im",
                            event_name: "crypto_wallet_info_screen_shown",
                            product: "crypto"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/walle0/pp_na0+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "crypto wallet",
                            event_action: "landing page",
                            event_label: h
                        }
                    }]
                },
                crypto_start_activation: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            evnt_type: "cl",
                            event_name: "crypto_info_confirmation_continue_pressed",
                            product: "crypto"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/walle0/pp_na00+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "crypto wallet",
                            event_action: "activation start",
                            event_label: h
                        }
                    }]
                },
                crypto_finish_activation: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            evnt_type: "ac",
                            event_name: "crypto_account_info_confirm_screen_shown",
                            product: "crypto"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/walle0/pp_na000+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "crypto wallet",
                            event_action: "activation finish",
                            event_label: h
                        }
                    }]
                },
                crypto_finish_purchase: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            evnt_type: "ac",
                            event_name: "crypto_buy_success_screen_shown",
                            product: "crypto"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/walle0/pp_na001+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "crypto wallet",
                            event_action: "purchase finish",
                            event_label: h
                        }
                    }]
                },
                crypto_finish_sell: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            evnt_type: "ac",
                            event_name: "crypto_sale_success_screen_shown",
                            product: "crypto"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/walle0/pp_na002+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "crypto wallet",
                            event_action: "sell finish",
                            event_label: h
                        }
                    }]
                },
                crypto_mpp_landing_page: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:business:product:crypto:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/mppmz0/pp_na003+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "crypto wallet",
                            event_action: "mpp landing page",
                            event_label: h
                        }
                    }]
                },
                crypto_finish_first_purchase: {
                    enable: x,
                    trigger: {
                        type: c,
                        condition: {
                            evnt_type: "im",
                            event_name: "crypto_first_purchase_success_interstitial_shown",
                            product: "crypto"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/walle0/pp_na003+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "crypto wallet",
                            event_action: "first purchase finish",
                            event_label: h
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "CryptoFTU"
                        }
                    }]
                },
                mac_landing: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:merchanthub:appcenter:marketplaces"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch002/gbl_a0+standard"
                        }
                    }]
                },
                bnpl_msg: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:mktg:product:promoportal:messaging:::|main:mktg:product:promoportal:get_started"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch000/pp_gb004+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_action: "landing page",
                            event_category: "bnpl messaging center",
                            event_label: B
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/paylater/messaging"
                        }
                    }]
                },
                setup_xo: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:buttonfactory:setup_checkout_exp"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch000/pp_gb006+standard"
                        }
                    }, {
                        name: l,
                        vars: {
                            ev: "fb_checkoutbuttonfinish"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/checkoutbuttonfinish"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "checkout exp",
                            event_action: "click on Copy Code",
                            event_label: "buttonfactory setup-checkout exp"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/F_tdCMiAyIACEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/QO4XCLfA54ACELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/4SpZCJaByIACEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/Kc06CImGyIACEJy7qMwD"
                        }
                    }]
                },
                mac_xo: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:merchanthub:appcenter:checkout|main:mktg:business:merchant-integration:get-started:::|main:mktg:::api:::|main:developer:docs:checkout|main:developer:docs:business:checkout:set-up-standard-payments"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch002/pp_gb0+standard"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/eQogCJXu3oACEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/k1r_CKHfx4ACELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/g-CbCLDx3oACEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/hYVlCJrhx4ACEJy7qMwD"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/checkoutlandingpage"
                        }
                    }]
                },
                mac_zettle: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:merchanthub:appcenter:izettle"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch002/pp_gb00+standard"
                        }
                    }]
                },
                mac_bonanza: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:merchanthub:appcenter:bonanza"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch002/gbl_a0+standard"
                        }
                    }]
                },
                mac_grailed: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:merchanthub:appcenter:grailed"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch002/gbl_a0+standard"
                        }
                    }]
                },
                mac_wish: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:merchanthub:appcenter:wish"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch002/gbl_a0+standard"
                        }
                    }]
                },
                mac_google: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:merchanthub:appcenter:google"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch002/gbl_a0+standard"
                        }
                    }]
                },
                mac_walmart: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:merchanthub:appcenter:walmart"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch002/gbl_a0+standard"
                        }
                    }]
                },
                mac_swappa: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:merchanthub:appcenter:swappa"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch002/gbl_a0+standard"
                        }
                    }]
                },
                mac_zettle_consent: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:connect:::thirdPartyLogin:consent_bank_grouping:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch002/pp_gb000+standard"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/zettlesignupconsent"
                        }
                    }]
                },
                setup_xo_standard: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:activation:commercesetupnodeweb:AddUser"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch002/pp_gb001+standard"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/ah-oCKKv4IACEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/XhI4CMbQ6IACELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/PaMWCPLM6IACEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/Z8ErCK_U6IACEJy7qMwD"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/checkoutdeveloperlandingpage"
                        }
                    }]
                },
                mac_request_money: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:merchanthub:appcenter:request_money|main:mktg:personal:buy:requesting-payments:::"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch002/pp_gb002+standard"
                        }
                    }, {
                        name: v,
                        enable: X,
                        vars: {
                            send_to: a + "/KY20CLf36IACEPzFjtkD"
                        }
                    }, {
                        name: v,
                        enable: U,
                        vars: {
                            send_to: t + "/c6KhCLbhyYACELXZ6tkD"
                        }
                    }, {
                        name: v,
                        enable: j,
                        vars: {
                            send_to: s + "/ha2uCKTh4IACEKv66t8D"
                        }
                    }, {
                        name: v,
                        enable: O,
                        vars: {
                            send_to: r + "/I1x4CIbeyYACEJy7qMwD"
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/emailpaymentslandingpage"
                        }
                    }]
                },
                request_meeting_form: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            page: "main:mktg:business::enterprise-frictionless-commerce:::",
                            link: "pardot-form-submit"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch000/pp_gb007+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "REQUEST_MEETING_FORM",
                            event_action: "submit",
                            event_label: B
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/requestmeetingformsubmit"
                        }
                    }]
                },
                nonfinancial_download: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            page: "main:help:brc::brcThankyou:::",
                            pl: "pdf"
                        }
                    },
                    vendors: [{
                        name: m,
                        vars: {
                            send_to: e + "/merch002/pp_gb003+standard"
                        }
                    }, {
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "DOWNLOAD_REPORT_FORM",
                            event_action: "submit",
                            event_label: B
                        }
                    }, {
                        name: u,
                        vars: {
                            url: "paypal.com/downloadreportformsubmit"
                        }
                    }]
                },
                finishline_offers: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "cl",
                            event_name: "shopping_merchant_code_pressed|shopping_merchant_deal_pressed",
                            store_name: "Finish Line"
                        }
                    },
                    vendors: [{
                        name: g,
                        vars: {
                            send_to: o,
                            hitType: "event",
                            event_category: "shopping store",
                            event_action: "click button",
                            event_label: h
                        }
                    }, {
                        name: v,
                        vars: {
                            send_to: a + "/m-4_CJP1q_0BEPzFjtkD"
                        }
                    }]
                },
                pardot_mpp_event: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im",
                            bchn: "mktg"
                        }
                    },
                    vendors: [{
                        name: y,
                        vars: {
                            piAId: i,
                            piCId: p
                        }
                    }]
                },
                pardot_im_event: {
                    trigger: {
                        type: c,
                        condition: {
                            e: "im"
                        }
                    },
                    vendors: [{
                        name: y,
                        vars: {
                            piAId: i,
                            piCId: p
                        }
                    }]
                }
            },
            Pe = {
                activationnodeweb: ["pers_acc_upg_fin", "biz_acc_su_end"],
                authnodeweb: ["pwd_recovery_start", "pwd_recovery_end"],
                bankingbundlenodeweb: ["ccfullsu_start", "ccfullsu_end", "ccfullact_start", "ccfullact_end", "cctaxreqdd_finish", "pp_directdeposit_finish"],
                bizmanagenodeweb: ["mer_mx_installment"],
                bizsignupnodeweb: ["pro_su_start", "pro_su_end_app", "pro_su_end_rev", "pro_su_end_dec", "biz_acc_su_end", "pers_acc_upg_fin", "pplus_start", "pplus_fin", "pph_success", "pph_decline", "pph_review", "biz_check_acc", "biz_create_pwd", "biz_acc_su_start", "biz_bus_info", "biz_pers_info", "pers_acc_upg_start", "biz_pph_start", "pph_add_info"],
                bizwalletnodeweb: ["oct_flow_start", "oct_flow_end"],
                borderlesscommercereport: ["borderless_reportDownload", "borderless_spotlight", "borderless_navigation", "scroll_event"],
                brcappnodeweb: ["ln_click", "form_submit", "pardot_im_event", "gen_brc_home", "nonfinancial_download"],
                buttonfactorynodeweb: ["setup_xo"],
                causefundraisernodeweb: ["donate_cause"],
                citiapp: ["pprewards_card_application_start", "pprewards_card_application_finish_pending", "pprewards_card_application_finish_approved", "pprewards_card_application_assessment", "pprewards_card_application_submit", "pprewards_card_application_decline"],
                checkoutuinodeweb: ["guest_xo_su_start", "guest_xo_su_end", "xolite_start", "xolite_end", "xolite_gsu_end", "guest_xo_start", "guest_xo_end", "checkout_payin4_start", "checkout_payin4_finish", "checkout_payin3_finish", "checkout_payin3_start"],
                commercesetupnodeweb: ["biz_acc_su_end", "pers_acc_upg_fin", "pplus_fin", "setup_xo_standard"],
                connectnodeweb: ["mac_zettle_consent"],
                consonbdnodeweb: ["pers_acc_su_fin"],
                conspartneronbnodeweb: ["acc_su_start_edison", "acc_su_fin_edison"],
                cponboardingnodeweb: ["ztl_su_start", "ztl_su_finish"],
                creditapplyweb: ["credit_app_start", "credit_app_succ", "credit_app_decl", "credit_psu_start", "start_uk", "appr_uk", "succ_end_uk", "dec_end_uk", "credit_app_per_info", "credit_app_terms", "scroll_event", "wallet_iiw_application_start", "wallet_iiw_personal_info", "wallet_iiw_approved", "wallet_iiw_need_signature", "wallet_iiw_decline"],
                debitcardnodeweb: ["bizdebit_start", "bizdebit_aprv"],
                devdiscoverynodeweb: ["mac_xo"],
                ezbob: ["ppbl_uk_mlp", "ppbl_uk_app_start", "ppbl_uk_not_eligible", "ppbl_uk_eligible_no_result", "ppbl_uk_indicative_offer", "ppbl_uk_financial_details", "ppbl_uk_beneficial_owner", "ppbl_uk_link_account", "ppbl_uk_decline", "ppbl_uk_approve", "ppbl_uk_pending", "ppbl_uk_terms", "ppbl_uk_bnk_details", "ppbl_uk_direct_debit", "ppbl_uk_funding_complete"],
                financeportalnodeweb: ["ln_click", "bnpl_msg"],
                fptigovnodeweb: ["iq_bot"],
                hermesnodeweb: ["xo_start", "xo_end", "pad_start", "pad_end", "pad_ps"],
                homeinfonodeweb: ["pp_dd_tax_cashflow_activation_start", "pp_early_dd_start"],
                honeyapp: ["honey_mobile", "honey_desktop", "honey_landing"],
                invoicingnodeweb: ["inv_start", "inv_end", "inv_pay_finish", "inv_pay_start"],
                konfio: ["kwc_mx_start", "kwc_mx_middle", "kwc_mx_finish"],
                mepnodeweb: ["merc_acc_summ", "biz_acc_su_end_mep", "pers_acc_upg_fin_mep"],
                merchanthubnodeweb: ["mer_appcntr", "biz_acc_su_end_mep", "pers_acc_upg_fin_mep", "mac_landing", "mac_zettle", "mac_xo", "mac_bonanza", "mac_grailed", "mac_wish", "mac_google", "mac_walmart", "mac_swappa", "mpp_partner_checkout", "mac_request_money", "pardot_im_event"],
                merchantsignupnodeweb: ["biz_acc_su_start", "biz_acc_su_end", "pers_acc_upg_start", "pplus_start", "pplus_fin", "pers_acc_upg_fin", "biz_pers_info", "biz_bus_info", "biz_create_pwd", "biz_check_acc"],
                merchmoneynodeweb: ["mer_itx_start", "mer_itx_end"],
                moneynodeweb: ["cons_ixfer_start", "cons_ixfer_mid", "cons_ixfer_end", "cons_add_bank_start", "cons_add_bank_end_v2", "cons_add_card_start", "cons_add_card_end", "mer_add_bank_start", "mer_add_bank_end_v2", "mer_add_card_start", "mer_add_card_end", "pers_acc_su_fin_reusable", "sb_su_end"],
                mppnodeweb: ["mpp_mp_start", "land_uk", "ot_start", "ot_end", "egov_start", "egov_end", "form_submit", "rd_curr_top", "rd_curr", "con_sel", "mer_sel", "shp_su_start", "shp_su_end", "mpp_404", "acc_sel", "borderless_cm_form_submit", "pp_partner_cnt_start", "pp_partner_cnt_finish", "pp_merchant_cnt_start", "pp_merchant_cnt_finish", "con_sel_click", "mer_sel_click", "prod_sel_pageview", "mpp_offer", "pp_home_land", "merc_setup_intg", "scroll_event", "emailClick", "outboundLinkClick", "videoPlay", "videoPlay_youTube", "downloadFiles", "navigationTracking_head", "navigationTracking_foot", "refer_friend_aklamio", "incentive_donateOffer", "incentive_honeyOffer", "incentive_referFriend", "ln_click", "qrc_su_start", "qrc_su_fin", "bnpl_get_started", "bnpl_signup_start", "bnpl_webinar_registration", "bnpl_book_meeting", "payin4_landing_page", "crypto_mpp_landing_page", "rd_learn_more", "rd_contact_sales", "pp_dd_mkt_btn_click", "pp_dd_mkt_landing_page", "pp_merchant_ent_cnt_start", "pp_merchant_ent_cnt_finish", "pp_check_cashing_landing", "pp_check_cashing_button_click", "pp_dd_tax_refund_start", "pp_hc_merchant_form_start", "pp_hc_merchant_form_finish", "pprewards_card_prequalified", "pprewards_card_ineligible", "download_ios_app", "download_android_app", "mac_xo", "mpp_partner_checkout", "mpp_ecdc_form_start", "mpp_ecdc_form_fin", "mpp_fraud_sec_form_start", "mpp_fraud_sec_form_fin", "mac_request_money", "pardot_mpp_event", "payin4_registerform_landing", "payin4_registerform_submit", "zettle_contactus_start", "zettle_contactus_fin", "mpp_churn_success", "mpp_doordash", "mpp_mobile_apps", "mpp_cvs_qrc", "mpp_qrc_dwnld", "mpp_uk_acceptpymt", "mpp_uk_business", "mpp_uk_enterprise_reg", "mpp_de_expressxo", "request_meeting_form", "mpp_merchfees_it"],
                onboardingnodeweb: ["pers_acc_su_start", "sb_su_start", "guest_acc_upg_start", "guest_acc_upg_fin", "pers_acc_su_fin_dis", "xoom_pers_acc_su_fin"],
                p2pnodeweb: ["p2p_send_mon_start", "req_mon_start", "req_mon_fin", "p2p_send_mon", "p2p_send_mon_int", "p2p_send_gift", "p2p_buy"],
                padnodeweb: ["pad_enroll"],
                policydashboardweb: ["pp_early_dd_finish"],
                poolsnodeweb: ["mp_start", "mp_end", "mp_send_start", "mp_send_end", "mp_wdl_start", "mp_wdl_end", "mp_send_amt_ga", "mp_send_note_ga", "mp_send_review_ga", "mp_create_pref_ga", "mp_create_desc_ga", "mp_create_prev_ga", "mp_create_prepub_ga", "chipIn_send_guest", "chipIn_end_guest"],
                ppdgnodeweb: ["ppdg_land", "ppdg_txn_start", "ppdg_txn_end"],
                pphdeviceorder: ["phh_device_order_start", "phh_device_order_finish"],
                ppme: ["ppme_start", "ppme_end"],
                profilenodeweb: [],
                progressivenodeweb: ["pers_acc_su_fin", "pers_acc_su_start", "sb_su_start", "sb_su_end", "psu_credit_succ", "psu_credit_decl", "tesla_su_create", "tesla_su_addcard_start", "tesla_su_addcard_fin", "tesla_su_addbank_start", "tesla_su_addbank_fin", "tesla_su_buy", "ot_sign_up"],
                shoplistnodeweb: ["finishline_offers"],
                smarthelpnodeweb: ["pardot_im_event"],
                summarynodeweb: ["cons_acc_summ", "ln_click", "scroll_event", "pers_acc_su_fin_reusable", "pp_directdeposit_start"],
                tagmanagernodeweb: ["muse_start", "muse_end"],
                tradingnodeweb: ["crypto_landing_page", "crypto_start_activation", "crypto_finish_activation", "crypto_finish_purchase", "crypto_finish_sell", "crypto_finish_first_purchase"],
                ucsnodeweb: ["pypl_key_su_start", "pypl_key_su_finish"],
                unifiedloginnodeweb: ["acc_su_consent_edison"],
                walletexpnodeweb: ["cons_acc_summ", "ln_click", "cons_add_bank_start", "cons_add_bank_end_v1", "cons_add_card_start", "cons_add_card_end", "mer_add_bank_start", "mer_add_bank_end_v1", "mer_add_card_start", "mer_add_card_end", "pers_acc_su_fin_reusable"],
                workingcapitalnodeweb: ["landing", "start", "approved", "declined", "ineligible", "funded"],
                xoonboardingnodeweb: ["xo_start", "xo_end", "guest_xo_end", "guest_xo_start", "guest_xo_su_start", "guest_xo_su_end", "prox_su_end", "prox_txn_end", "prox_su_start", "prox_txn_start", "ot_sign_up_checkout"]
            };
        d.loadTags = function(e) {
            return Pe[e]
        }, d.loadPageViews = function() {
            return ["fb_pgv", "li_pgv", "ga_pgv"]
        }, d.loadJs = function(e) {
            var n = {}[e] || [],
                e = n.length;
            return n.push("ga", "dc", "gads"), {
                vendors: n,
                vCount: e += 1
            }
        }, d.loadVendorDefault = function(e) {
            return W[e]
        }, d.loadTagConfig = function(e) {
            return Te[e]
        }, d.loadRedactRegEx = function() {
            return {
                redactedEmail: /([a-z0-9_\-.+]+)@\w+(\.\w+)*|(email=)[^&/?]+/gi,
                redactedUSSSN: /(\b\d{3}[ -.]\d{2}[ -.]\d{4}\b)|(SSN=)[^&/?]+/gi,
                redactedIPAddress: /(\d{1,3}(\.\d{1,3}){3}|[0-9A-F]{4}(:[0-9A-F]{4}){5}(::|(:0000)+)|(IPAddress)[^&/?]+)/gi,
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
                redactedName: /((firstname=)|(first_name=)|(lastname=)|(last_name=)|(name=)|(surname=))[^&/?]+/gi,
                redactedLocation: /((location=)|(location_lng=)|(location_lat=)|(longitude=)|(latitude=))[^&/?]+/gi
            }
        }
    }()
}();