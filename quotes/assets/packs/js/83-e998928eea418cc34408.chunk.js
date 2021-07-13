(window.webpackJsonp = window.webpackJsonp || []).push([
    [83], {
        829: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, "setMobileMenuToggleEvents", (function() {
                return p
            })), t.d(n, "initNav", (function() {
                return w
            }));
            var r = t(3),
                i = t.n(r),
                a = t(5),
                o = t.n(a),
                c = t(9),
                s = t.n(c);

            function l(e, n, t, r, i, a, o) {
                try {
                    var c = e[a](o),
                        s = c.value
                } catch (l) {
                    return void t(l)
                }
                c.done ? n(s) : Promise.resolve(s).then(r, i)
            }

            function u(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(n, t);

                        function o(e) {
                            l(a, r, i, o, c, "next", e)
                        }

                        function c(e) {
                            l(a, r, i, o, c, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function p(e) {
                var n = e.querySelector(".js-site-nav-mobile-menu-close"),
                    t = e.querySelector(".js-site-nav-mobile-menu-open"),
                    r = e.querySelector(".js-site-nav-mobile-menu");

                function i() {
                    window.scrollTo(0, 0), r.scrollTo(0, 0)
                }
                t.addEventListener("click", (function() {
                    i(), document.querySelector("body").classList.add("nav-open-noscroll"), t.style.display = "none", n.style.display = "block", r.style.display = "block"
                })), n.addEventListener("click", (function() {
                    i(), document.querySelector("body").classList.remove("nav-open-noscroll"), n.style.display = "none", t.style.display = "block", r.style.display = "none"
                }))
            }

            function d() {
                return (d = u(i.a.mark((function e() {
                    var n, r, a, c;
                    return i.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(n = document.querySelector(".js-site-nav-actions-activity"))) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 4, Promise.resolve().then(t.bind(null, 10));
                            case 4:
                                r = e.sent, a = r.axiosOptions, (c = n.querySelector(".site-nav-new-indicator")) && n.addEventListener("mouseenter", (function() {
                                    c.classList.add("site-nav-new-indicator-hidden"), o.a.put("/activity", {}, a())
                                }));
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function f(e, n) {
                for (; e && e !== document; e = e.parentNode) {
                    var t = e.getAttribute(n);
                    if (t) return t
                }
                return null
            }

            function v(e) {
                var n = {
                    category: f(e.target, "data-site-nav-category"),
                    item: f(e.target, "data-site-nav-element")
                };
                Dribbble.Itly.headerNavigationClicked(n)
            }

            function b() {
                return (b = u(i.a.mark((function e() {
                    var n, r;
                    return i.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(n = document.querySelector(".js-site-nav-search .js-site-nav-inline-search-input")) || Dribbble.isMobile()) {
                                    e.next = 7;
                                    break
                                }
                                return e.next = 4, t.e(89).then(t.bind(null, 818));
                            case 4:
                                r = e.sent, (0, r.initSearchAutocomplete)(n);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function m() {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = u(i.a.mark((function e() {
                    var n, r, a;
                    return i.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Promise.resolve().then(t.bind(null, 11));
                            case 2:
                                return n = e.sent, r = n.default, e.next = 6, t.e(64).then(t.bind(null, 827));
                            case 6:
                                return a = e.sent, e.abrupt("return", new r({
                                    el: "#designer-application-modal-app",
                                    render: function(e) {
                                        return e(a.default)
                                    }
                                }));
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function h() {
                return (h = u(i.a.mark((function e() {
                    var n, t, r, a, o, c, l;
                    return i.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = s()(Dribbble, "JsConfig.permissions.userPermissions", []), t = n.indexOf("canSeeDesignerApplicationInfo"), -1 !== t) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return");
                            case 5:
                                if (a = new URLSearchParams(window.location.search), o = a.get("apply_modal"), c = a.get("from_modal_cta"), l = function(e, n) {
                                        var t = Dribbble.JsConfig.user,
                                            r = t.hasCompletedProfile,
                                            i = t.hasWorkPreferences,
                                            a = t.hasWorkUploaded;
                                        Dribbble.Itly.designerApplicationViewed({
                                            location: e,
                                            text: n,
                                            has_complete_profile: r,
                                            has_work_preferences: i,
                                            has_uploaded_work: a
                                        })
                                    }, c && l("Modal", "Apply"), !o) {
                                    e.next = 15;
                                    break
                                }
                                return e.next = 13, m();
                            case 13:
                                r = e.sent, Dribbble.EventBus.$emit("open-designer-application-modal");
                            case 15:
                                document.querySelectorAll(".js-designer-application-cta").forEach((function(e) {
                                    var n, t = e.classList.contains("js-designer-application-cta-header");
                                    n = t ? "Header" : "Site Nav", e.addEventListener("click", u(i.a.mark((function t() {
                                        return i.a.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    if (!r) {
                                                        t.next = 4;
                                                        break
                                                    }
                                                    Dribbble.EventBus.$emit("open-designer-application-modal"), t.next = 8;
                                                    break;
                                                case 4:
                                                    return t.next = 6, m();
                                                case 6:
                                                    r = t.sent, Dribbble.EventBus.$emit("open-designer-application-modal");
                                                case 8:
                                                    l(n, e.innerText);
                                                case 9:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    }))))
                                }));
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function w(e) {
                p(e),
                    function() {
                        d.apply(this, arguments)
                    }(), document.querySelectorAll("[data-site-nav-element]").forEach((function(e) {
                        e.addEventListener("click", v)
                    })), document.querySelectorAll(".js-resume-subscription-cta").forEach((function(e) {
                        e.addEventListener("click", (function(e) {
                            e.preventDefault(), Dribbble.Itly.purchaseCallToActionClicked({
                                location: "Site Nav",
                                text: "Resume Subscription",
                                product_name: "Pro",
                                product_billing_plan: "monthly",
                                currency: "USD"
                            }), window.location.href = "/pro?checkout=true&purchase_type=pro&upsell_modal=true"
                        }))
                    })),
                    function() {
                        b.apply(this, arguments)
                    }(),
                    function() {
                        h.apply(this, arguments)
                    }()
            }
            n.default = {
                initNav: w
            }
        }
    }
]);
//# sourceMappingURL=83-e998928eea418cc34408.chunk.js.map