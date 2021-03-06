require.config({
    paths: {
        TweenMax: "lib/TweenMax.min",
        TimelineMax: "lib/TweenMax.min",
        BezierEasing: "widgets/BezierEasing.min",
        countTo: "widgets/jquery.countto.min",
        fullPage: "widgets/jquery.fullPage.min",
        mousewheel: "widgets/jquery.mousewheel.min",
        slick: "widgets/slick.min",
        detect: "detect.min",
        game: "game.min",
        jquery: "lib/jquery-2.1.1.min",
    },
    shim: {
        jquery: {
            exports: "$"
        },
        slick: {
            exports: "slick"
        }
    }
});
require(["jquery", "detect", "countTo", "fullPage", "mousewheel", "slick", "game"], function(g, d, f, c, a, e, b) {
    g(document).ready(function() {

            g(document).on("endgame", function() {
                g("#page").fullpage.moveTo(4)
            });
            var q = new TimelineMax({});
            q.timeScale(1.2);
            var p = new TimelineMax({});
            p.timeScale(1.2);
            t("#page").fullpage({
                easingcss3: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                onLeave: function(A, z, B) {
                    if (z == 4) {
                        q.restart();
                        q.set(r, {
                            transformPerspective: 1100,
                            rotationX: -140
                        }, 0);
                        q.set(x, {
                            transformPerspective: 1100,
                            rotationX: -100
                        }, 0);
                        q.set(k, {
                            letterSpacing: -14,
                            opacity: 0,
                        }, 0);
                        q.to(r, 2.5, {
                            rotationX: 0,
                            ease: Elastic.easeOut
                        }, 0.5);
                        q.to(x, 2.5, {
                            rotationX: 0,
                            ease: Elastic.easeOut
                        }, 1.5);
                        q.to(k, 1, {
                            letterSpacing: -3,
                            opacity: 1,
                            ease: Back.easeOut,
                            autoRound: false
                        }, 1);
                        g(".section-4 .results-counter").countTo({
                            from: 0,
                            speed: 2000,
                            decimals: 0,
                            formatter: function(F, D) {
                                F = F.toFixed(D.decimals).toString();
                                var C = "";
                                if (F < 10) {
                                    C += "<span>0</span>"
                                }
                                for (var E = 0; E < F.length; E++) {
                                    C += "<span>" + F.charAt(E) + "</span>"
                                }
                                return C
                            },
                            refreshInterval: 50,
                        })
                    }
                    if (z == 5) {
                        p.restart();
                        p.to(n, 2, {
                            letterSpacing: -16,
                            opacity: 1,
                            ease: Back.easeOut,
                            autoRound: false
                        }, 0);
                        p.to(l, 2, {
                            letterSpacing: -7,
                            opacity: 1,
                            ease: Back.easeOut,
                            autoRound: false
                        }, 0.6);
                        p.to(v, 2, {
                            letterSpacing: -2,
                            opacity: 1,
                            ease: Back.easeOut,
                            autoRound: false
                        }, 1.2);
                        p.to(o, 1, {
                            scale: 1,
                            ease: Back.easeOut,
                        }, 0.5);
                        p.set(n, {
                            letterSpacing: -14,
                            opacity: 0,
                        }, 0);
                        p.set(l, {
                            letterSpacing: -14,
                            opacity: 0,
                        }, 0);
                        p.set(v, {
                            letterSpacing: -14,
                            opacity: 0,
                        }, 0);
                        p.set(o, {
                            scale: 0,
                        }, 0)
                    }
                },
                afterLoad: function(A, z) {
                    if (z > 1) {
                        setTimeout(function() {
                            jQuery(".logo-small").addClass("active")
                        }, 500)
                    } else {
                        jQuery(".logo-small").removeClass("active")
                    }
                    if (z == 1) {
                        g("#page").fullpage.setAllowScrolling(true, "down")
                    }
                    if (z == 2) {
                        g("#page").fullpage.setAllowScrolling(false, "down")
                    }
                    if (z == 3) {
                        g("#page").fullpage.setAllowScrolling(false, "up");
                        g("#page").fullpage.setAllowScrolling(false, "down")
                    }
                    if (z == 4) {
                        g("#page").fullpage.setAllowScrolling(false, "up");
                        g("#page").fullpage.setAllowScrolling(true, "down")
                    }
                    if (z == 5) {
                        g("#page").fullpage.setAllowScrolling(true, "up")
                    }
                },
            });
            g("button.link-start, .logo-small").click(function(z) {
                z.preventDefault();
                g(".player-details").removeClass("active").hide();
                g("#page").fullpage.moveTo(1)
            });
            g("button.link-player-select").click(function(z) {
                z.preventDefault();
                g(".player-details").removeClass("active").hide();
                g("#page").fullpage.moveTo(2)
            });
            g("button.link-game").click(function(z) {
                z.preventDefault();
                g("#page").fullpage.moveTo(3);
                g(document).trigger("resetgame")
            });
            g("button.link-results").click(function(z) {
                z.preventDefault();
                g("#page").fullpage.moveTo(4)
            });
            g("button.link-end").click(function(z) {
                z.preventDefault();
                g("#page").fullpage.moveTo(5)
            });
            j.find(".frame").click(function(z) {
                z.preventDefault();
                g("#page").fullpage.setAllowScrolling(true, "down")
            });
            g('[data-modal-close=".player-details"]').click(function(z) {
                z.preventDefault();
                g("#page").fullpage.setAllowScrolling(false, "down")
            });

            function m(A) {
                var D = A.data("max-width");
                var C = A.data("max-height");
                var F = g(window);
                var B = F.width();
                var z = F.height();
                var E;
                if (B >= D && z >= C) {
                    A.css({
                        "-webkit-transform": "",
                        transform: ""
                    });
                    A.children().css({
                        width: "",
                        height: ""
                    });
                    return
                }
                E = Math.min(B / D, z / C);
                A.css({
                    "-webkit-transform": "scale(" + E + ")",
                    transform: "scale(" + E + ")"
                });
                A.children().css({
                    width: D * E,
                    height: C * E
                })
            }
            g(window).resize(function() {
                g(".scale").each(function() {
                    m(g(this))
                });
                g(".v-align").height(g(window).height())
            });
            g(".scale").each(function() {
                var A = g(this),
                    B = A.width(),
                    z = A.height();
                A.attr("data-max-width", B).attr("data-max-height", z);
                m(A)
            });
            g(".v-align").height(g(window).height());
            g("[data-modal-open]").click(function(A) {
                A.preventDefault();
                var z = jQuery(jQuery(this).data("modal-open"));
                z.show().addClass("modal-in active");
                setTimeout(function() {
                    z.removeClass("modal-in")
                }, 1000)
            });
            g("[data-modal-close]").click(function(A) {
                A.preventDefault();
                var z = jQuery(jQuery(this).data("modal-close"));
                z.addClass("modal-out");
                setTimeout(function() {
                    z.hide().removeClass("modal-out active")
                }, 1000)
            });

    })
});