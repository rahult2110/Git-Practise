// Source: https://github.paypal.com/gist/bdwilson/babeda2ed74136e5ee6b75e1f7f75638
setTimeout(function() {
        var e = window && window.fpti && window.fpti.page;
        if (e && "undefined" != typeof Storage) {
            var t = localStorage.getItem("signupIntents");
            if (t) {
                var n = (t = t.split(",")).findIndex(function(t) {
                    return t === e
                });
                n > -1 ? t.splice(n, 1) : t.length >= 10 && t.pop(), t.unshift(e)
            } else t = [e];
            localStorage.setItem("signupIntents", t)
        }
    }, 1e3),
    function() {
        var e = document.referrer;
        if (e) {
            var t = new URL(e).origin;
            /https?:\/\/www\.paypal\.com/.test(t) || localStorage.setItem("referrerUrl", e)
        }
    }();