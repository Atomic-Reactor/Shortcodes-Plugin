!(function(e, t) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = t(
              require('reactium-core/sdk'),
              require('react'),
              require('object-path'),
          ))
        : 'function' == typeof define && define.amd
        ? define(['reactium-core/sdk', 'react', 'object-path'], t)
        : 'object' == typeof exports
        ? (exports.reset = t(
              require('reactium-core/sdk'),
              require('react'),
              require('object-path'),
          ))
        : (e.reset = t(e['reactium-core/sdk'], e.react, e['object-path']));
})(window, function(e, t, r) {
    return (function(e) {
        var t = {};
        function r(n) {
            if (t[n]) return t[n].exports;
            var o = (t[n] = { i: n, l: !1, exports: {} });
            return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
        }
        return (
            (r.m = e),
            (r.c = t),
            (r.d = function(e, t, n) {
                r.o(e, t) ||
                    Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (r.r = function(e) {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                        value: 'Module',
                    }),
                    Object.defineProperty(e, '__esModule', { value: !0 });
            }),
            (r.t = function(e, t) {
                if ((1 & t && (e = r(e)), 8 & t)) return e;
                if (4 & t && 'object' == typeof e && e && e.__esModule)
                    return e;
                var n = Object.create(null);
                if (
                    (r.r(n),
                    Object.defineProperty(n, 'default', {
                        enumerable: !0,
                        value: e,
                    }),
                    2 & t && 'string' != typeof e)
                )
                    for (var o in e)
                        r.d(
                            n,
                            o,
                            function(t) {
                                return e[t];
                            }.bind(null, o),
                        );
                return n;
            }),
            (r.n = function(e) {
                var t =
                    e && e.__esModule
                        ? function() {
                              return e.default;
                          }
                        : function() {
                              return e;
                          };
                return r.d(t, 'a', t), t;
            }),
            (r.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (r.p = ''),
            r((r.s = 3))
        );
    })([
        function(t, r) {
            t.exports = e;
        },
        function(e, r) {
            e.exports = t;
        },
        function(e, t) {
            e.exports = r;
        },
        function(e, t, r) {
            r(4);
        },
        function(e, t, r) {
            'use strict';
            r.r(t);
            var n = r(0),
                o = r.n(n),
                i = r(1),
                u = r.n(i),
                c = r(2),
                a = r.n(c);
            function s(e, t, r, n, o, i, u) {
                try {
                    var c = e[i](u),
                        a = c.value;
                } catch (e) {
                    return void r(e);
                }
                c.done ? t(a) : Promise.resolve(a).then(n, o);
            }
            var f = function(e) {
                var t = Object(n.useHandle)('AdminTools'),
                    r = a.a.get(t, 'Modal'),
                    i = a.a.get(t, 'Toast'),
                    c = Object(n.useHookComponent)('ConfirmBox'),
                    f = Object(n.useHookComponent)('ReactiumUI'),
                    l = f.Icon,
                    p = f.Dialog,
                    d = f.Button,
                    m = Object(n.__)('Actinium Reset'),
                    v = { header: { title: m }, dismissable: !1 },
                    b = (function() {
                        var e,
                            t =
                                ((e = regeneratorRuntime.mark(function e() {
                                    return regeneratorRuntime.wrap(
                                        function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (e.prev = 0),
                                                            (e.next = 3),
                                                            o.a.Cloud.run(
                                                                'reset-actinium',
                                                            )
                                                        );
                                                    case 3:
                                                        i.show({
                                                            type:
                                                                i.TYPE.SUCCESS,
                                                            message: Object(
                                                                n.__,
                                                            )(
                                                                'Success! You should restart Actinium.',
                                                            ),
                                                            icon: u.a.createElement(
                                                                l.Feather.Check,
                                                                {
                                                                    style: {
                                                                        marginRight: 12,
                                                                    },
                                                                },
                                                            ),
                                                        }),
                                                            (e.next = 10);
                                                        break;
                                                    case 6:
                                                        (e.prev = 6),
                                                            (e.t0 = e.catch(0)),
                                                            i.show({
                                                                type:
                                                                    i.TYPE
                                                                        .ERROR,
                                                                message: Object(
                                                                    n.__,
                                                                )(
                                                                    'Error resetting actinium!',
                                                                ),
                                                                icon: u.a.createElement(
                                                                    l.Feather
                                                                        .AlertOctagon,
                                                                    {
                                                                        style: {
                                                                            marginRight: 12,
                                                                        },
                                                                    },
                                                                ),
                                                            }),
                                                            console.error(e.t0);
                                                    case 10:
                                                        r.dismiss();
                                                    case 11:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        null,
                                        [[0, 6]],
                                    );
                                })),
                                function() {
                                    var t = this,
                                        r = arguments;
                                    return new Promise(function(n, o) {
                                        var i = e.apply(t, r);
                                        function u(e) {
                                            s(i, n, o, u, c, 'next', e);
                                        }
                                        function c(e) {
                                            s(i, n, o, u, c, 'throw', e);
                                        }
                                        u(void 0);
                                    });
                                });
                        return function() {
                            return t.apply(this, arguments);
                        };
                    })();
                return u.a.createElement(
                    p,
                    v,
                    u.a.createElement(
                        'div',
                        { className: 'plugin-settings-reset' },
                        u.a.createElement(
                            d,
                            {
                                color: d.ENUMS.COLOR.DANGER,
                                size: d.ENUMS.SIZE.LG,
                                onClick: function() {
                                    return r.show(
                                        u.a.createElement(c, {
                                            message: Object(n.__)(
                                                'Are you sure? This is a destructive operation.',
                                            ),
                                            onCancel: function() {
                                                return r.hide();
                                            },
                                            onConfirm: b,
                                            title: m,
                                        }),
                                    );
                                },
                            },
                            Object(n.__)('Reset Actinium'),
                        ),
                    ),
                );
            };
            function l(e, t, r, n, o, i, u) {
                try {
                    var c = e[i](u),
                        a = c.value;
                } catch (e) {
                    return void r(e);
                }
                c.done ? t(a) : Promise.resolve(a).then(n, o);
            }
            (function() {
                var e,
                    t =
                        ((e = regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (e.next = 2),
                                                o.a.Plugin.register(
                                                    'reset-plugin',
                                                )
                                            );
                                        case 2:
                                            o.a.Zone.addComponent({
                                                id: 'RESET-PLUGIN-SETTINGS',
                                                zone: 'plugin-settings-Reset',
                                                component: f,
                                                order: 0,
                                            });
                                        case 3:
                                        case 'end':
                                            return e.stop();
                                    }
                            }, e);
                        })),
                        function() {
                            var t = this,
                                r = arguments;
                            return new Promise(function(n, o) {
                                var i = e.apply(t, r);
                                function u(e) {
                                    l(i, n, o, u, c, 'next', e);
                                }
                                function c(e) {
                                    l(i, n, o, u, c, 'throw', e);
                                }
                                u(void 0);
                            });
                        });
                return function() {
                    return t.apply(this, arguments);
                };
            })()();
        },
    ]);
});
