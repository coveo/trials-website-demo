!(function () {
    var e,
        t = 'undefined' == typeof window ? {} : window,
        r = t.userflow;
    if (!r) {
        var n = 'https://js.userflow.com/';
        r = t.userflow = {_stubbed: !0};
        var o = (t.USERFLOWJS_QUEUE = t.USERFLOWJS_QUEUE || []),
            s = function (e) {
                r[e] = function () {
                    var t = Array.prototype.slice.call(arguments);
                    u(), o.push([e, null, t]);
                };
            },
            a = function (e) {
                r[e] = function () {
                    var t,
                        r = Array.prototype.slice.call(arguments);
                    u();
                    var n = new Promise(function (e, r) {
                        t = {resolve: e, reject: r};
                    });
                    return o.push([e, t, r]), n;
                };
            },
            i = !1,
            u = function () {
                if (!i) {
                    i = !0;
                    var e = document.createElement('script');
                    e.async = !0;
                    var r = t.USERFLOWJS_ENV_VARS || {};
                    'es2020' ===
                    (r.USERFLOWJS_BROWSER_TARGET ||
                        (function (e) {
                            for (
                                var t = [
                                        [/Edg\//, /Edg\/(\d+)/, 80],
                                        [/OPR\//, /OPR\/(\d+)/, 67],
                                        [/Chrome\//, /Chrome\/(\d+)/, 80],
                                        [/Safari\//, /Version\/(\d+)/, 14],
                                        [/Firefox\//, /Firefox\/(\d+)/, 74],
                                    ],
                                    r = 0;
                                r < t.length;
                                r++
                            ) {
                                var n = t[r],
                                    o = n[0],
                                    s = n[1],
                                    a = n[2];
                                if (e.match(o)) {
                                    var i = e.match(new RegExp(s));
                                    if (i && parseInt(i[1], 10) >= a) return 'es2020';
                                    break;
                                }
                            }
                            return 'legacy';
                        })(navigator.userAgent))
                        ? ((e.type = 'module'), (e.src = r.USERFLOWJS_ES2020_URL || n + 'es2020/userflow.js'))
                        : (e.src = r.USERFLOWJS_LEGACY_URL || n + 'legacy/userflow.js'),
                        (e.onerror = function () {
                            (i = !1), console.error('Could not load Userflow.js');
                        }),
                        document.head.appendChild(e);
                }
            };
        s('_setTargetEnv'),
            s('init'),
            s('off'),
            s('on'),
            s('prepareAudio'),
            s('registerCustomInput'),
            s('remount'),
            s('reset'),
            s('setCustomInputSelector'),
            s('setCustomNavigate'),
            s('setCustomScrollIntoView'),
            s('setInferenceAttributeFilter'),
            s('setInferenceAttributeNames'),
            s('setInferenceClassNameFilter'),
            s('setScrollPadding'),
            s('setShadowDomEnabled'),
            s('setUrlFilter'),
            a('endAll'),
            a('endAllFlows'),
            a('endChecklist'),
            a('group'),
            a('identify'),
            a('identifyAnonymous'),
            a('start'),
            a('startFlow'),
            a('startWalk'),
            a('track'),
            a('updateGroup'),
            a('updateUser'),
            (e = !1),
            (r['isIdentified'] = function () {
                return e;
            });
    }
})();
