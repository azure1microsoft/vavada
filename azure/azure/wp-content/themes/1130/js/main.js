jQuery(document).ready(function ($) {
    $('.main_carousel').owlCarousel({
        items: 1,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
    });
    $('.game_menu_choose li').click(function () {
        if ($(this).hasClass('active') != true) {
            var active_menu_data = $('.game_menu_choose li.active').attr('data-btn');
            var current_menu_data = $(this).attr('data-btn');
            $('.game_menu_choose li.active').removeClass('active');
            $(this).addClass('active');
            $('.game_menu_' + active_menu_data).addClass('display_none');
            $('.game_menu_' + current_menu_data).removeClass('display_none');
        }
    });
    $('.burger').on('click', function () {
        $('.nav-categories_list').slideToggle();
    });
    $(window).resize(function () {
        $('.nav-categories_list').removeAttr('style');
    });
});



//============

!function (e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = { i: i, l: !1, exports: {} };
        return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }

    var n = {};
    t.m = e, t.c = n, t.d = function (e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: i })
    }, t.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 })
    }, t.t = function (e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (t.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e) for (var o in e) t.d(i, o, function (t) {
            return e[t]
        }.bind(null, o));
        return i
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 12)
}([function (e) {
    "use strict";
    e.exports.windowMobileBreakpoint = 668
}, function (e) {
    "use strict";
    e.exports = function (e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        return t.headers = t.headers ? t.headers : {}, t.headers["X-Requested-With"] = "XMLHttpRequest", fetch(e, t).then((function (e) {
            if (!e.ok) throw e;
            return e
        })).catch((function (e) {
            throw e
        }))
    }
}, function (e) {
    "use strict";
}, function (e) {
    "use strict";
}, function (e, t, n) {
}, function (e) {
}, function (e) {
    "use strict";

}, function (e, t, n) {
    "use strict";

}, function (e, t, n) {
    "use strict";

}, function (e, t, n) {
    "use strict";
}, function (e) {
    "use strict";
}, function (e, t, n) {
    "use strict";
}, function (e, t, n) {
    "use strict";
    n(13), n(50), n(51)
}, function (e, t, n) {
    "use strict";

    // не трогать старт
    window.vavadaCode = {}, n(14), n(15);
    var i = n(0).windowMobileBreakpoint;
    (n(16)(), document.querySelector("[data-pop_up]")) && n(17)();
    var r = document.querySelectorAll("[data-navigation=beam]");
    if (r[0] && r[0].querySelector("[data-navigation=active]")) {
        var a = n(35)();
        r.forEach((function (e) {
            new a(e)
        }))
    }
    var s = document.querySelectorAll("[data-input-suggestion]");
    s[0] && n(36)(s);
    var c = document.querySelectorAll("form[data-autosubmit]");

    var f = document.querySelector("[data-game-filter]");
    f && (f.querySelectorAll("option").length > 9 && f.classList.add("x_columns"));

    var _ = document.querySelectorAll("[title]");

}, function () {

}, function () {
    window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function (e, t) {
        t = t || window;
        for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this)
    })
}, function (e) {
    "use strict";
    e.exports = function () {

    }
}, function (e, t, n) {
    "use strict";

}, function (e) {
    e.exports = function (e) {
    }
}, function (e) {
    "use strict";

}, function (e, t, n) {
    "use strict";

}, function (e) {
    "use strict";

}, function (e) {
    "use strict";

}, function (e, t) {

}, function (e, t, n) {

}, function (e) {
    "use strict";

}, function (e, t, n) {
    "use strict";

}, function (e, t, n) {
    "use strict";

}, function (e) {
    "use strict";

}, function (e) {
    "use strict";

}, function (e) {
    "use strict";

}, function (e) {

}, function (e) {
    "use strict";

}, function (e, t, n) {
    "use strict";

}, function (e) {

}, function (e, t, n) {
    // не трогать

    "use strict";
    var i = function () {
        function e(e, t) {
            for (var n, i = 0; i < t.length; i++) (n = t[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }();
    e.exports = function () {
        var e = n(0).windowMobileBreakpoint, t = 15,
            o = { item_1: "#109e93", item_2: "#de593e", item_3: "#6ef770", item_4: "#e8ce3a" };
        return function () {
            function n(e) {
                (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, n), this.beam = e, this.activeCategory = e.querySelector("[data-navigation=active]"), this.color = o[this.activeCategory.getAttribute("data-category")], this.canvas = e.querySelector("[data-navigation=canvas]"), this.canvas.style.position = "absolute", this.canvas.style.zIndex = 10, this.canvas.style.pointerEvents = "none", this.canvas.style.left = 0, this.canvas.height = 70, this.dotYTop = 12, this.dotYBottom = this.activeCategory.offsetHeight + 4, this.renderDots = this.renderDots.bind(this), this.init()
            }

            return i(n, [{
                key: "renderDots", value: function () {
                    var n = Math.PI;
                    if (window.innerWidth > e) {
                        var i = this.dotYTop, o = this.dotYBottom, r = this.activeCategory.getBoundingClientRect();
                        this.canvas.style.display = "block", this.canvas.style.top = Math.round(window.pageYOffset + r.top) + "px", this.canvas.width = document.documentElement.clientWidth;
                        var a = this.canvas.getContext("2d");
                        a.lineWidth = 2, a.strokeStyle = this.color, a.lineCap = a.lineJoin = "round", a.setLineDash([0, 5]);
                        var s = r.left + 4, c = r.right - 4;
                        a.beginPath(), a.moveTo(0, o), a.lineTo(s - t, o), a.arc(s - t, o - t, t, .5 * n, 0, !0), a.lineTo(s, i + 7), a.arc(s + 7, i + 7, 7, Math.PI, 1.5 * n, !1), a.lineTo(c - 7, i), a.arc(c - 7, i + 7, 7, 1.5 * n, 0, !1), a.lineTo(c, o - t), a.arc(c + t, o - t, t, Math.PI, .5 * n, !0), a.lineTo(this.canvas.width, o), a.stroke()
                    } else this.canvas.style.display = "none"
                }
            }, {
                key: "init", value: function () {
                    this.renderDots(), window.addEventListener("resize", this.renderDots)
                }
            }]), n
        }()
    }
},]);