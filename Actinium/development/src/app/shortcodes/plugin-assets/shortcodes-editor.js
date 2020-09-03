!(function(e, t) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = t(
              require('react'),
              require('reactium-core/sdk'),
              require('object-path'),
              require('underscore'),
              require('prop-types'),
              require('classnames'),
              require('react-dom'),
          ))
        : 'function' == typeof define && define.amd
        ? define([
              'react',
              'reactium-core/sdk',
              'object-path',
              'underscore',
              'prop-types',
              'classnames',
              'react-dom',
          ], t)
        : 'object' == typeof exports
        ? (exports['shortcodes-editor'] = t(
              require('react'),
              require('reactium-core/sdk'),
              require('object-path'),
              require('underscore'),
              require('prop-types'),
              require('classnames'),
              require('react-dom'),
          ))
        : (e['shortcodes-editor'] = t(
              e.react,
              e['reactium-core/sdk'],
              e['object-path'],
              e.underscore,
              e['prop-types'],
              e.classnames,
              e['react-dom'],
          ));
})(window, function(e, t, r, n, o, a, i) {
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
            r((r.s = 22))
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
            'use strict';
            (function(e) {
                function n(e) {
                    return (n =
                        'function' == typeof Symbol &&
                        'symbol' == typeof Symbol.iterator
                            ? function(e) {
                                  return typeof e;
                              }
                            : function(e) {
                                  return e &&
                                      'function' == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof e;
                              })(e);
                }
                var o;
                r.d(t, 'a', function() {
                    return ue;
                }),
                    r.d(t, 'b', function() {
                        return le;
                    }),
                    r.d(t, 'c', function() {
                        return m;
                    }),
                    r.d(t, 'd', function() {
                        return se;
                    });
                var a,
                    i,
                    c = 'undefined' != typeof Symbol,
                    s = 'undefined' != typeof Map,
                    u = 'undefined' != typeof Set,
                    l = c
                        ? Symbol('immer-nothing')
                        : (((o = {})['immer-nothing'] = !0), o),
                    f = c ? Symbol('immer-draftable') : '__$immer_draftable',
                    d = c ? Symbol('immer-state') : '__$immer_state',
                    h = c ? Symbol.iterator : '@@iterator',
                    p = function(e, t) {
                        return (p =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function(e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function(e, t) {
                                for (var r in t)
                                    t.hasOwnProperty(r) && (e[r] = t[r]);
                            })(e, t);
                    };
                function v(e, t) {
                    function r() {
                        this.constructor = e;
                    }
                    p(e, t),
                        (e.prototype = ((r.prototype = t.prototype), new r()));
                }
                function m(e) {
                    return !!e && !!e[d];
                }
                function y(e) {
                    return (
                        !!e &&
                        ((function(e) {
                            if (!e || 'object' !== n(e)) return !1;
                            var t = Object.getPrototypeOf(e);
                            return !t || t === Object.prototype;
                        })(e) ||
                            Array.isArray(e) ||
                            !!e[f] ||
                            !!e.constructor[f] ||
                            x(e) ||
                            E(e))
                    );
                }
                !(function(e) {
                    (e[(e.Object = 0)] = 'Object'),
                        (e[(e.Array = 1)] = 'Array'),
                        (e[(e.Map = 2)] = 'Map'),
                        (e[(e.Set = 3)] = 'Set');
                })(a || (a = {})),
                    (function(e) {
                        (e[(e.ProxyObject = 0)] = 'ProxyObject'),
                            (e[(e.ProxyArray = 1)] = 'ProxyArray'),
                            (e[(e.ES5Object = 2)] = 'ES5Object'),
                            (e[(e.ES5Array = 3)] = 'ES5Array'),
                            (e[(e.Map = 4)] = 'Map'),
                            (e[(e.Set = 5)] = 'Set');
                    })(i || (i = {}));
                var g =
                    'undefined' != typeof Reflect && Reflect.ownKeys
                        ? Reflect.ownKeys
                        : void 0 !== Object.getOwnPropertySymbols
                        ? function(e) {
                              return Object.getOwnPropertyNames(e).concat(
                                  Object.getOwnPropertySymbols(e),
                              );
                          }
                        : Object.getOwnPropertyNames;
                function b(e, t) {
                    w(e) === a.Object
                        ? g(e).forEach(function(r) {
                              return t(r, e[r], e);
                          })
                        : e.forEach(function(r, n) {
                              return t(n, r, e);
                          });
                }
                function w(e) {
                    if ((e || C(), e[d]))
                        switch (e[d].type) {
                            case i.ES5Object:
                            case i.ProxyObject:
                                return a.Object;
                            case i.ES5Array:
                            case i.ProxyArray:
                                return a.Array;
                            case i.Map:
                                return a.Map;
                            case i.Set:
                                return a.Set;
                        }
                    return Array.isArray(e)
                        ? a.Array
                        : x(e)
                        ? a.Map
                        : E(e)
                        ? a.Set
                        : a.Object;
                }
                function O(e, t) {
                    return w(e) === a.Map
                        ? e.has(t)
                        : Object.prototype.hasOwnProperty.call(e, t);
                }
                function S(e, t) {
                    return w(e) === a.Map ? e.get(t) : e[t];
                }
                function k(e, t) {
                    return e === t
                        ? 0 !== e || 1 / e == 1 / t
                        : e != e && t != t;
                }
                function x(e) {
                    return s && e instanceof Map;
                }
                function E(e) {
                    return u && e instanceof Set;
                }
                function j(e) {
                    return e.copy || e.base;
                }
                function P(e, t) {
                    if ((void 0 === t && (t = !1), Array.isArray(e)))
                        return e.slice();
                    var r = Object.create(Object.getPrototypeOf(e));
                    return (
                        g(e).forEach(function(n) {
                            if (n !== d) {
                                var o = Object.getOwnPropertyDescriptor(e, n),
                                    a = o.value;
                                if (o.get) {
                                    if (!t)
                                        throw new Error(
                                            'Immer drafts cannot have computed properties',
                                        );
                                    a = o.get.call(e);
                                }
                                o.enumerable
                                    ? (r[n] = a)
                                    : Object.defineProperty(r, n, {
                                          value: a,
                                          writable: !0,
                                          configurable: !0,
                                      });
                            }
                        }),
                        r
                    );
                }
                function T(e, t) {
                    if (y(e) && !m(e) && !Object.isFrozen(e)) {
                        var r = w(e);
                        r === a.Set
                            ? (e.add = e.clear = e.delete = A)
                            : r === a.Map && (e.set = e.clear = e.delete = A),
                            Object.freeze(e),
                            t &&
                                b(e, function(e, t) {
                                    return T(t, !0);
                                });
                    }
                }
                function A() {
                    throw new Error(
                        'This object has been frozen and should not be mutated',
                    );
                }
                function C() {
                    throw new Error('Illegal state, please file a bug');
                }
                var D = (function() {
                    function e(e, t) {
                        (this.drafts = []),
                            (this.parent = e),
                            (this.immer = t),
                            (this.canAutoFreeze = !0);
                    }
                    return (
                        (e.prototype.usePatches = function(e) {
                            e &&
                                ((this.patches = []),
                                (this.inversePatches = []),
                                (this.patchListener = e));
                        }),
                        (e.prototype.revoke = function() {
                            this.leave(),
                                this.drafts.forEach(F),
                                (this.drafts = null);
                        }),
                        (e.prototype.leave = function() {
                            this === e.current && (e.current = this.parent);
                        }),
                        (e.enter = function(t) {
                            var r = new e(e.current, t);
                            return (e.current = r), r;
                        }),
                        e
                    );
                })();
                function F(e) {
                    var t = e[d];
                    t.type === i.ProxyObject || t.type === i.ProxyArray
                        ? t.revoke()
                        : (t.revoked = !0);
                }
                function N(e, t, r) {
                    var n = r.drafts[0],
                        o = void 0 !== t && t !== n;
                    if ((e.willFinalize(r, t, o), o)) {
                        if (n[d].modified)
                            throw (r.revoke(),
                            new Error(
                                'An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.',
                            ));
                        y(t) && ((t = R(e, t, r)), r.parent || _(e, t)),
                            r.patches &&
                                (r.patches.push({
                                    op: 'replace',
                                    path: [],
                                    value: t,
                                }),
                                r.inversePatches.push({
                                    op: 'replace',
                                    path: [],
                                    value: n[d].base,
                                }));
                    } else t = R(e, n, r, []);
                    return (
                        r.revoke(),
                        r.patches &&
                            r.patchListener(r.patches, r.inversePatches),
                        t !== l ? t : void 0
                    );
                }
                function R(e, t, r, n) {
                    var o = t[d];
                    if (!o) return Object.isFrozen(t) ? t : M(e, t, r);
                    if (o.scope !== r) return t;
                    if (!o.modified) return _(e, o.base, !0), o.base;
                    if (!o.finalized) {
                        if (
                            ((o.finalized = !0),
                            M(e, o.draft, r, n),
                            e.onDelete && o.type !== i.Set)
                        )
                            if (e.useProxies) {
                                b(o.assigned, function(t, r) {
                                    r || e.onDelete(o, t);
                                });
                            } else {
                                var a = o.base,
                                    c = o.copy;
                                b(a, function(t) {
                                    O(c, t) || e.onDelete(o, t);
                                });
                            }
                        e.onCopy && e.onCopy(o),
                            e.autoFreeze && r.canAutoFreeze && T(o.copy, !1),
                            n &&
                                r.patches &&
                                (function(e, t, r, n) {
                                    switch (e.type) {
                                        case i.ProxyObject:
                                        case i.ES5Object:
                                        case i.Map:
                                            return (function(e, t, r, n) {
                                                var o = e.base,
                                                    a = e.copy;
                                                b(e.assigned, function(e, i) {
                                                    var c = S(o, e),
                                                        s = S(a, e),
                                                        u = i
                                                            ? O(o, e)
                                                                ? 'replace'
                                                                : 'add'
                                                            : 'remove';
                                                    if (
                                                        c !== s ||
                                                        'replace' !== u
                                                    ) {
                                                        var l = t.concat(e);
                                                        r.push(
                                                            'remove' === u
                                                                ? {
                                                                      op: u,
                                                                      path: l,
                                                                  }
                                                                : {
                                                                      op: u,
                                                                      path: l,
                                                                      value: s,
                                                                  },
                                                        ),
                                                            n.push(
                                                                'add' === u
                                                                    ? {
                                                                          op:
                                                                              'remove',
                                                                          path: l,
                                                                      }
                                                                    : 'remove' ===
                                                                      u
                                                                    ? {
                                                                          op:
                                                                              'add',
                                                                          path: l,
                                                                          value: c,
                                                                      }
                                                                    : {
                                                                          op:
                                                                              'replace',
                                                                          path: l,
                                                                          value: c,
                                                                      },
                                                            );
                                                    }
                                                });
                                            })(e, t, r, n);
                                        case i.ES5Array:
                                        case i.ProxyArray:
                                            return (function(e, t, r, n) {
                                                var o,
                                                    a,
                                                    i = e.base,
                                                    c = e.assigned,
                                                    s = e.copy;
                                                s || C();
                                                s.length < i.length &&
                                                    ((i = (o = [s, i])[0]),
                                                    (s = o[1]),
                                                    (r = (a = [n, r])[0]),
                                                    (n = a[1]));
                                                var u = s.length - i.length,
                                                    l = 0;
                                                for (
                                                    ;
                                                    i[l] === s[l] &&
                                                    l < i.length;

                                                )
                                                    ++l;
                                                var f = i.length;
                                                for (
                                                    ;
                                                    f > l &&
                                                    i[f - 1] === s[f + u - 1];

                                                )
                                                    --f;
                                                for (var d = l; d < f; ++d)
                                                    if (c[d] && s[d] !== i[d]) {
                                                        var h = t.concat([d]);
                                                        r.push({
                                                            op: 'replace',
                                                            path: h,
                                                            value: s[d],
                                                        }),
                                                            n.push({
                                                                op: 'replace',
                                                                path: h,
                                                                value: i[d],
                                                            });
                                                    }
                                                var p = r.length;
                                                for (
                                                    d = f + u - 1;
                                                    d >= f;
                                                    --d
                                                ) {
                                                    h = t.concat([d]);
                                                    (r[p + d - f] = {
                                                        op: 'add',
                                                        path: h,
                                                        value: s[d],
                                                    }),
                                                        n.push({
                                                            op: 'remove',
                                                            path: h,
                                                        });
                                                }
                                            })(e, t, r, n);
                                        case i.Set:
                                            (function(e, t, r, n) {
                                                var o = e.base,
                                                    a = e.copy,
                                                    i = 0;
                                                o.forEach(function(e) {
                                                    if (!a.has(e)) {
                                                        var o = t.concat([i]);
                                                        r.push({
                                                            op: 'remove',
                                                            path: o,
                                                            value: e,
                                                        }),
                                                            n.unshift({
                                                                op: 'add',
                                                                path: o,
                                                                value: e,
                                                            });
                                                    }
                                                    i++;
                                                }),
                                                    (i = 0),
                                                    a.forEach(function(e) {
                                                        if (!o.has(e)) {
                                                            var a = t.concat([
                                                                i,
                                                            ]);
                                                            r.push({
                                                                op: 'add',
                                                                path: a,
                                                                value: e,
                                                            }),
                                                                n.unshift({
                                                                    op:
                                                                        'remove',
                                                                    path: a,
                                                                    value: e,
                                                                });
                                                        }
                                                        i++;
                                                    });
                                            })(e, t, r, n);
                                    }
                                })(o, n, r.patches, r.inversePatches);
                    }
                    return o.copy;
                }
                function M(e, t, r, n) {
                    var o = t[d];
                    return (
                        o &&
                            ((o.type !== i.ES5Object &&
                                o.type !== i.ES5Array) ||
                                (o.copy = P(o.draft, !0)),
                            (t = o.copy)),
                        b(t, function(i, c) {
                            return (function e(t, r, n, o, i, c, s, u) {
                                if (s === i)
                                    throw Error(
                                        'Immer forbids circular references',
                                    );
                                var l = !!o && i === n,
                                    f = E(i);
                                if (m(s)) {
                                    var d =
                                        u && l && !f && !O(o.assigned, c)
                                            ? u.concat(c)
                                            : void 0;
                                    (s = R(t, s, r, d)),
                                        (function(e, t, r) {
                                            switch (w(e)) {
                                                case a.Map:
                                                    e.set(t, r);
                                                    break;
                                                case a.Set:
                                                    e.delete(t), e.add(r);
                                                    break;
                                                default:
                                                    e[t] = r;
                                            }
                                        })(i, c, s),
                                        m(s) && (r.canAutoFreeze = !1);
                                } else {
                                    if (l && k(s, S(o.base, c))) return;
                                    y(s) &&
                                        (b(s, function(a, i) {
                                            return e(t, r, n, o, s, a, i, u);
                                        }),
                                        r.parent || _(t, s));
                                }
                                l && t.onAssign && !f && t.onAssign(o, c, s);
                            })(e, r, t, o, t, i, c, n);
                        }),
                        t
                    );
                }
                function _(e, t, r) {
                    void 0 === r && (r = !1), e.autoFreeze && !m(t) && T(t, r);
                }
                var z = {
                        get: function(e, t) {
                            if (t === d) return e;
                            var r = e.drafts;
                            if (!e.modified && O(r, t)) return r[t];
                            var n = j(e)[t];
                            if (e.finalized || !y(n)) return n;
                            if (e.modified) {
                                if (n !== H(e.base, t)) return n;
                                r = e.copy;
                            }
                            return (r[t] = e.scope.immer.createProxy(n, e));
                        },
                        has: function(e, t) {
                            return t in j(e);
                        },
                        ownKeys: function(e) {
                            return Reflect.ownKeys(j(e));
                        },
                        set: function(e, t, r) {
                            if (!e.modified) {
                                var n = H(e.base, t);
                                if (
                                    r
                                        ? k(n, r) || r === e.drafts[t]
                                        : k(n, r) && t in e.base
                                )
                                    return !0;
                                L(e), B(e);
                            }
                            return (e.assigned[t] = !0), (e.copy[t] = r), !0;
                        },
                        deleteProperty: function(e, t) {
                            return (
                                void 0 !== H(e.base, t) || t in e.base
                                    ? ((e.assigned[t] = !1), L(e), B(e))
                                    : e.assigned[t] && delete e.assigned[t],
                                e.copy && delete e.copy[t],
                                !0
                            );
                        },
                        getOwnPropertyDescriptor: function(e, t) {
                            var r = j(e),
                                n = Reflect.getOwnPropertyDescriptor(r, t);
                            return (
                                n &&
                                    ((n.writable = !0),
                                    (n.configurable =
                                        e.type !== i.ProxyArray ||
                                        'length' !== t)),
                                n
                            );
                        },
                        defineProperty: function() {
                            throw new Error(
                                'Object.defineProperty() cannot be used on an Immer draft',
                            );
                        },
                        getPrototypeOf: function(e) {
                            return Object.getPrototypeOf(e.base);
                        },
                        setPrototypeOf: function() {
                            throw new Error(
                                'Object.setPrototypeOf() cannot be used on an Immer draft',
                            );
                        },
                    },
                    I = {};
                function H(e, t) {
                    var r = e[d],
                        n = Reflect.getOwnPropertyDescriptor(r ? j(r) : e, t);
                    return n && n.value;
                }
                function B(e) {
                    if (!e.modified) {
                        if (
                            ((e.modified = !0),
                            e.type === i.ProxyObject || e.type === i.ProxyArray)
                        ) {
                            var t = (e.copy = P(e.base));
                            b(e.drafts, function(e, r) {
                                t[e] = r;
                            }),
                                (e.drafts = void 0);
                        }
                        e.parent && B(e.parent);
                    }
                }
                function L(e) {
                    e.copy || (e.copy = P(e.base));
                }
                function U(e, t, r) {
                    e.drafts.forEach(function(e) {
                        e[d].finalizing = !0;
                    }),
                        r
                            ? m(t) && t[d].scope === e && $(e.drafts)
                            : (e.patches &&
                                  (function e(t) {
                                      if (!t || 'object' !== n(t)) return;
                                      var r = t[d];
                                      if (!r) return;
                                      var o = r.base,
                                          a = r.draft,
                                          c = r.assigned,
                                          s = r.type;
                                      if (s === i.ES5Object)
                                          b(a, function(t) {
                                              t !== d &&
                                                  (void 0 !== o[t] || O(o, t)
                                                      ? c[t] || e(a[t])
                                                      : ((c[t] = !0), q(r)));
                                          }),
                                              b(o, function(e) {
                                                  void 0 !== a[e] ||
                                                      O(a, e) ||
                                                      ((c[e] = !1), q(r));
                                              });
                                      else if (s === i.ES5Array) {
                                          if (
                                              (X(r) && (q(r), (c.length = !0)),
                                              a.length < o.length)
                                          )
                                              for (
                                                  var u = a.length;
                                                  u < o.length;
                                                  u++
                                              )
                                                  c[u] = !1;
                                          else
                                              for (
                                                  u = o.length;
                                                  u < a.length;
                                                  u++
                                              )
                                                  c[u] = !0;
                                          var l = Math.min(a.length, o.length);
                                          for (u = 0; u < l; u++)
                                              void 0 === c[u] && e(a[u]);
                                      }
                                  })(e.drafts[0]),
                              $(e.drafts));
                }
                function W(e, t) {
                    var r = Array.isArray(e),
                        n = K(e);
                    b(n, function(t) {
                        !(function(e, t, r) {
                            var n = G[t];
                            n
                                ? (n.enumerable = r)
                                : (G[t] = n = {
                                      configurable: !0,
                                      enumerable: r,
                                      get: function() {
                                          return (function(e, t) {
                                              Z(e);
                                              var r = V(j(e), t);
                                              if (e.finalizing) return r;
                                              if (r === V(e.base, t) && y(r))
                                                  return (
                                                      Y(e),
                                                      (e.copy[
                                                          t
                                                      ] = e.scope.immer.createProxy(
                                                          r,
                                                          e,
                                                      ))
                                                  );
                                              return r;
                                          })(this[d], t);
                                      },
                                      set: function(e) {
                                          !(function(e, t, r) {
                                              if (
                                                  (Z(e),
                                                  (e.assigned[t] = !0),
                                                  !e.modified)
                                              ) {
                                                  if (k(r, V(j(e), t))) return;
                                                  q(e), Y(e);
                                              }
                                              e.copy[t] = r;
                                          })(this[d], t, e);
                                      },
                                  });
                            Object.defineProperty(e, t, n);
                        })(
                            n,
                            t,
                            r ||
                                (function(e, t) {
                                    var r = Object.getOwnPropertyDescriptor(
                                        e,
                                        t,
                                    );
                                    return !(!r || !r.enumerable);
                                })(e, t),
                        );
                    });
                    var o,
                        a,
                        c,
                        s = {
                            type: r ? i.ES5Array : i.ES5Object,
                            scope: t ? t.scope : D.current,
                            modified: !1,
                            finalizing: !1,
                            finalized: !1,
                            assigned: {},
                            parent: t,
                            base: e,
                            draft: n,
                            copy: null,
                            revoked: !1,
                            isManual: !1,
                        };
                    return (
                        (o = n),
                        (a = d),
                        (c = s),
                        Object.defineProperty(o, a, {
                            value: c,
                            enumerable: !1,
                            writable: !0,
                        }),
                        n
                    );
                }
                function V(e, t) {
                    var r = e[d];
                    if (r && !r.finalizing) {
                        r.finalizing = !0;
                        var n = e[t];
                        return (r.finalizing = !1), n;
                    }
                    return e[t];
                }
                function q(e) {
                    e.modified || ((e.modified = !0), e.parent && q(e.parent));
                }
                function Y(e) {
                    e.copy || (e.copy = K(e.base));
                }
                function K(e) {
                    var t = e && e[d];
                    if (t) {
                        t.finalizing = !0;
                        var r = P(t.draft, !0);
                        return (t.finalizing = !1), r;
                    }
                    return P(e);
                }
                b(z, function(e, t) {
                    I[e] = function() {
                        return (
                            (arguments[0] = arguments[0][0]),
                            t.apply(this, arguments)
                        );
                    };
                }),
                    (I.deleteProperty = function(e, t) {
                        if (isNaN(parseInt(t)))
                            throw new Error(
                                'Immer only supports deleting array indices',
                            );
                        return z.deleteProperty.call(this, e[0], t);
                    }),
                    (I.set = function(e, t, r) {
                        if ('length' !== t && isNaN(parseInt(t)))
                            throw new Error(
                                "Immer only supports setting array indices and the 'length' property",
                            );
                        return z.set.call(this, e[0], t, r, e[0]);
                    });
                var G = {};
                function Z(e) {
                    if (!0 === e.revoked)
                        throw new Error(
                            'Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? ' +
                                JSON.stringify(j(e)),
                        );
                }
                function $(e) {
                    for (var t = e.length - 1; t >= 0; t--) {
                        var r = e[t][d];
                        if (!r.modified)
                            switch (r.type) {
                                case i.ES5Array:
                                    X(r) && q(r);
                                    break;
                                case i.ES5Object:
                                    J(r) && q(r);
                            }
                    }
                }
                function J(e) {
                    for (
                        var t = e.base,
                            r = e.draft,
                            n = Object.keys(r),
                            o = n.length - 1;
                        o >= 0;
                        o--
                    ) {
                        var a = n[o],
                            i = t[a];
                        if (void 0 === i && !O(t, a)) return !0;
                        var c = r[a],
                            s = c && c[d];
                        if (s ? s.base !== i : !k(c, i)) return !0;
                    }
                    return n.length !== Object.keys(t).length;
                }
                function X(e) {
                    var t = e.draft;
                    if (t.length !== e.base.length) return !0;
                    var r = Object.getOwnPropertyDescriptor(t, t.length - 1);
                    return !(!r || r.get);
                }
                var Q = (function(e) {
                    if (!e) throw new Error('Map is not polyfilled');
                    function t(e, t) {
                        return (
                            (this[d] = {
                                type: i.Map,
                                parent: t,
                                scope: t ? t.scope : D.current,
                                modified: !1,
                                finalized: !1,
                                copy: void 0,
                                assigned: void 0,
                                base: e,
                                draft: this,
                                isManual: !1,
                                revoked: !1,
                            }),
                            this
                        );
                    }
                    v(t, e);
                    var r = t.prototype;
                    return (
                        Object.defineProperty(r, 'size', {
                            get: function() {
                                return j(this[d]).size;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (r.has = function(e) {
                            return j(this[d]).has(e);
                        }),
                        (r.set = function(e, t) {
                            var r = this[d];
                            return (
                                Z(r),
                                j(r).get(e) !== t &&
                                    (ee(r),
                                    r.scope.immer.markChanged(r),
                                    r.assigned.set(e, !0),
                                    r.copy.set(e, t),
                                    r.assigned.set(e, !0)),
                                this
                            );
                        }),
                        (r.delete = function(e) {
                            if (!this.has(e)) return !1;
                            var t = this[d];
                            return (
                                Z(t),
                                ee(t),
                                t.scope.immer.markChanged(t),
                                t.assigned.set(e, !1),
                                t.copy.delete(e),
                                !0
                            );
                        }),
                        (r.clear = function() {
                            var e = this[d];
                            return (
                                Z(e),
                                ee(e),
                                e.scope.immer.markChanged(e),
                                (e.assigned = new Map()),
                                e.copy.clear()
                            );
                        }),
                        (r.forEach = function(e, t) {
                            var r = this;
                            j(this[d]).forEach(function(n, o, a) {
                                e.call(t, r.get(o), o, r);
                            });
                        }),
                        (r.get = function(e) {
                            var t = this[d];
                            Z(t);
                            var r = j(t).get(e);
                            if (t.finalized || !y(r)) return r;
                            if (r !== t.base.get(e)) return r;
                            var n = t.scope.immer.createProxy(r, t);
                            return ee(t), t.copy.set(e, n), n;
                        }),
                        (r.keys = function() {
                            return j(this[d]).keys();
                        }),
                        (r.values = function() {
                            var e,
                                t = this,
                                r = this.keys();
                            return (
                                ((e = {})[h] = function() {
                                    return t.values();
                                }),
                                (e.next = function() {
                                    var e = r.next();
                                    return e.done
                                        ? e
                                        : { done: !1, value: t.get(e.value) };
                                }),
                                e
                            );
                        }),
                        (r.entries = function() {
                            var e,
                                t = this,
                                r = this.keys();
                            return (
                                ((e = {})[h] = function() {
                                    return t.entries();
                                }),
                                (e.next = function() {
                                    var e = r.next();
                                    if (e.done) return e;
                                    var n = t.get(e.value);
                                    return { done: !1, value: [e.value, n] };
                                }),
                                e
                            );
                        }),
                        (r[h] = function() {
                            return this.entries();
                        }),
                        t
                    );
                })(Map);
                function ee(e) {
                    e.copy ||
                        ((e.assigned = new Map()), (e.copy = new Map(e.base)));
                }
                var te = (function(e) {
                    if (!e) throw new Error('Set is not polyfilled');
                    function t(e, t) {
                        return (
                            (this[d] = {
                                type: i.Set,
                                parent: t,
                                scope: t ? t.scope : D.current,
                                modified: !1,
                                finalized: !1,
                                copy: void 0,
                                base: e,
                                draft: this,
                                drafts: new Map(),
                                revoked: !1,
                                isManual: !1,
                            }),
                            this
                        );
                    }
                    v(t, e);
                    var r = t.prototype;
                    return (
                        Object.defineProperty(r, 'size', {
                            get: function() {
                                return j(this[d]).size;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (r.has = function(e) {
                            var t = this[d];
                            return (
                                Z(t),
                                t.copy
                                    ? !!t.copy.has(e) ||
                                      !(
                                          !t.drafts.has(e) ||
                                          !t.copy.has(t.drafts.get(e))
                                      )
                                    : t.base.has(e)
                            );
                        }),
                        (r.add = function(e) {
                            var t = this[d];
                            return (
                                Z(t),
                                t.copy
                                    ? t.copy.add(e)
                                    : t.base.has(e) ||
                                      (re(t),
                                      t.scope.immer.markChanged(t),
                                      t.copy.add(e)),
                                this
                            );
                        }),
                        (r.delete = function(e) {
                            if (!this.has(e)) return !1;
                            var t = this[d];
                            return (
                                Z(t),
                                re(t),
                                t.scope.immer.markChanged(t),
                                t.copy.delete(e) ||
                                    (!!t.drafts.has(e) &&
                                        t.copy.delete(t.drafts.get(e)))
                            );
                        }),
                        (r.clear = function() {
                            var e = this[d];
                            return (
                                Z(e),
                                re(e),
                                e.scope.immer.markChanged(e),
                                e.copy.clear()
                            );
                        }),
                        (r.values = function() {
                            var e = this[d];
                            return Z(e), re(e), e.copy.values();
                        }),
                        (r.entries = function() {
                            var e = this[d];
                            return Z(e), re(e), e.copy.entries();
                        }),
                        (r.keys = function() {
                            return this.values();
                        }),
                        (r[h] = function() {
                            return this.values();
                        }),
                        (r.forEach = function(e, t) {
                            for (var r = this.values(), n = r.next(); !n.done; )
                                e.call(t, n.value, n.value, this),
                                    (n = r.next());
                        }),
                        t
                    );
                })(Set);
                function re(e) {
                    e.copy ||
                        ((e.copy = new Set()),
                        e.base.forEach(function(t) {
                            if (y(t)) {
                                var r = e.scope.immer.createProxy(t, e);
                                e.drafts.set(t, r), e.copy.add(r);
                            } else e.copy.add(t);
                        }));
                }
                function ne(e, t) {
                    return (
                        t.forEach(function(t) {
                            var r = t.path,
                                o = t.op;
                            r.length || C();
                            for (var i = e, c = 0; c < r.length - 1; c++)
                                if (!(i = S(i, r[c])) || 'object' !== n(i))
                                    throw new Error(
                                        "Cannot apply patch, path doesn't resolve: " +
                                            r.join('/'),
                                    );
                            var s = w(i),
                                u = oe(t.value),
                                l = r[r.length - 1];
                            switch (o) {
                                case 'replace':
                                    switch (s) {
                                        case a.Map:
                                            return i.set(l, u);
                                        case a.Set:
                                            throw new Error(
                                                'Sets cannot have "replace" patches.',
                                            );
                                        default:
                                            return (i[l] = u);
                                    }
                                case 'add':
                                    switch (s) {
                                        case a.Array:
                                            return i.splice(l, 0, u);
                                        case a.Map:
                                            return i.set(l, u);
                                        case a.Set:
                                            return i.add(u);
                                        default:
                                            return (i[l] = u);
                                    }
                                case 'remove':
                                    switch (s) {
                                        case a.Array:
                                            return i.splice(l, 1);
                                        case a.Map:
                                            return i.delete(l);
                                        case a.Set:
                                            return i.delete(t.value);
                                        default:
                                            return delete i[l];
                                    }
                                default:
                                    throw new Error(
                                        'Unsupported patch operation: ' + o,
                                    );
                            }
                        }),
                        e
                    );
                }
                function oe(e) {
                    if (!e || 'object' !== n(e)) return e;
                    if (Array.isArray(e)) return e.map(oe);
                    if (x(e))
                        return new Map(
                            Array.from(e.entries()).map(function(e) {
                                return [e[0], oe(e[1])];
                            }),
                        );
                    if (E(e)) return new Set(Array.from(e).map(oe));
                    var t = Object.create(Object.getPrototypeOf(e));
                    for (var r in e) t[r] = oe(e[r]);
                    return t;
                }
                /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ function ae() {
                    for (var e = 0, t = 0, r = arguments.length; t < r; t++)
                        e += arguments[t].length;
                    var n = Array(e),
                        o = 0;
                    for (t = 0; t < r; t++)
                        for (
                            var a = arguments[t], i = 0, c = a.length;
                            i < c;
                            i++, o++
                        )
                            n[o] = a[i];
                    return n;
                }
                var ie = {
                        useProxies:
                            'undefined' != typeof Proxy &&
                            void 0 !== Proxy.revocable &&
                            'undefined' != typeof Reflect,
                        autoFreeze:
                            void 0 === e &&
                            'verifyMinified' === function() {}.name,
                        onAssign: null,
                        onDelete: null,
                        onCopy: null,
                    },
                    ce = new ((function() {
                        function e(e) {
                            var t = this;
                            (this.useProxies = !1),
                                (this.autoFreeze = !1),
                                b(ie, function(r, n) {
                                    var o, a;
                                    t[r] =
                                        null !=
                                        (a =
                                            null === (o = e) || void 0 === o
                                                ? void 0
                                                : o[r])
                                            ? a
                                            : n;
                                }),
                                this.setUseProxies(this.useProxies),
                                (this.produce = this.produce.bind(this)),
                                (this.produceWithPatches = this.produceWithPatches.bind(
                                    this,
                                ));
                        }
                        return (
                            (e.prototype.produce = function(e, t, r) {
                                var n,
                                    o = this;
                                if (
                                    'function' == typeof e &&
                                    'function' != typeof t
                                ) {
                                    var a = t;
                                    t = e;
                                    var i = this;
                                    return function(e) {
                                        var r = arguments,
                                            n = this;
                                        void 0 === e && (e = a);
                                        for (
                                            var o = [], c = 1;
                                            c < arguments.length;
                                            c++
                                        )
                                            o[c - 1] = r[c];
                                        return i.produce(e, function(e) {
                                            return t.call.apply(
                                                t,
                                                ae([n, e], o),
                                            );
                                        });
                                    };
                                }
                                if ('function' != typeof t)
                                    throw new Error(
                                        'The first or second argument to `produce` must be a function',
                                    );
                                if (void 0 !== r && 'function' != typeof r)
                                    throw new Error(
                                        'The third argument to `produce` must be a function or undefined',
                                    );
                                if (y(e)) {
                                    var c = D.enter(this),
                                        s = this.createProxy(e, void 0),
                                        u = !0;
                                    try {
                                        (n = t(s)), (u = !1);
                                    } finally {
                                        u ? c.revoke() : c.leave();
                                    }
                                    return 'undefined' != typeof Promise &&
                                        n instanceof Promise
                                        ? n.then(
                                              function(e) {
                                                  return (
                                                      c.usePatches(r),
                                                      N(o, e, c)
                                                  );
                                              },
                                              function(e) {
                                                  throw (c.revoke(), e);
                                              },
                                          )
                                        : (c.usePatches(r), N(this, n, c));
                                }
                                if ((n = t(e)) !== l)
                                    return (
                                        void 0 === n && (n = e),
                                        _(this, n, !0),
                                        n
                                    );
                            }),
                            (e.prototype.produceWithPatches = function(
                                e,
                                t,
                                r,
                            ) {
                                var n,
                                    o,
                                    a = this;
                                return 'function' == typeof e
                                    ? function(t) {
                                          for (
                                              var r = arguments, n = [], o = 1;
                                              o < arguments.length;
                                              o++
                                          )
                                              n[o - 1] = r[o];
                                          return a.produceWithPatches(
                                              t,
                                              function(t) {
                                                  return e.apply(
                                                      void 0,
                                                      ae([t], n),
                                                  );
                                              },
                                          );
                                      }
                                    : (r && C(),
                                      [
                                          this.produce(e, t, function(e, t) {
                                              (n = e), (o = t);
                                          }),
                                          n,
                                          o,
                                      ]);
                            }),
                            (e.prototype.createDraft = function(e) {
                                if (!y(e))
                                    throw new Error(
                                        'First argument to `createDraft` must be a plain object, an array, or an immerable object',
                                    );
                                var t = D.enter(this),
                                    r = this.createProxy(e, void 0);
                                return (r[d].isManual = !0), t.leave(), r;
                            }),
                            (e.prototype.finishDraft = function(e, t) {
                                var r = e && e[d];
                                if (!r || !r.isManual)
                                    throw new Error(
                                        'First argument to `finishDraft` must be a draft returned by `createDraft`',
                                    );
                                if (r.finalized)
                                    throw new Error(
                                        'The given draft is already finalized',
                                    );
                                var n = r.scope;
                                return n.usePatches(t), N(this, void 0, n);
                            }),
                            (e.prototype.setAutoFreeze = function(e) {
                                this.autoFreeze = e;
                            }),
                            (e.prototype.setUseProxies = function(e) {
                                this.useProxies = e;
                            }),
                            (e.prototype.applyPatches = function(e, t) {
                                var r;
                                for (r = t.length - 1; r >= 0; r--) {
                                    var n = t[r];
                                    if (
                                        0 === n.path.length &&
                                        'replace' === n.op
                                    ) {
                                        e = n.value;
                                        break;
                                    }
                                }
                                return m(e)
                                    ? ne(e, t)
                                    : this.produce(e, function(e) {
                                          return ne(e, t.slice(r + 1));
                                      });
                            }),
                            (e.prototype.createProxy = function(e, t) {
                                var r = x(e)
                                    ? (function(e, t) {
                                          return new Q(e, t);
                                      })(e, t)
                                    : E(e)
                                    ? (function(e, t) {
                                          return new te(e, t);
                                      })(e, t)
                                    : this.useProxies
                                    ? (function(e, t) {
                                          var r = Array.isArray(e),
                                              n = {
                                                  type: r
                                                      ? i.ProxyArray
                                                      : i.ProxyObject,
                                                  scope: t
                                                      ? t.scope
                                                      : D.current,
                                                  modified: !1,
                                                  finalized: !1,
                                                  assigned: {},
                                                  parent: t,
                                                  base: e,
                                                  draft: null,
                                                  drafts: {},
                                                  copy: null,
                                                  revoke: null,
                                                  isManual: !1,
                                              },
                                              o = n,
                                              a = z;
                                          r && ((o = [n]), (a = I));
                                          var c = Proxy.revocable(o, a),
                                              s = c.revoke,
                                              u = c.proxy;
                                          return (
                                              (n.draft = u), (n.revoke = s), u
                                          );
                                      })(e, t)
                                    : W(e, t);
                                return (
                                    (t ? t.scope : D.current).drafts.push(r), r
                                );
                            }),
                            (e.prototype.willFinalize = function(e, t, r) {
                                this.useProxies || U(e, t, r);
                            }),
                            (e.prototype.markChanged = function(e) {
                                this.useProxies ? B(e) : q(e);
                            }),
                            e
                        );
                    })())(),
                    se = ce.produce,
                    ue =
                        (ce.produceWithPatches.bind(ce),
                        ce.setAutoFreeze.bind(ce),
                        ce.setUseProxies.bind(ce),
                        ce.applyPatches.bind(ce),
                        ce.createDraft.bind(ce)),
                    le = ce.finishDraft.bind(ce);
            }.call(this, r(11)));
        },
        function(e, t) {
            e.exports = n;
        },
        function(e, t) {
            e.exports = o;
        },
        function(e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.Scrollbars = void 0);
            var n,
                o = r(25),
                a = (n = o) && n.__esModule ? n : { default: n };
            (t.default = a.default), (t.Scrollbars = a.default);
        },
        function(e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            for (
                var n =
                        'undefined' != typeof window &&
                        /Mac|iPod|iPhone|iPad/.test(window.navigator.platform),
                    o = {
                        alt: 'altKey',
                        control: 'ctrlKey',
                        meta: 'metaKey',
                        shift: 'shiftKey',
                    },
                    a = {
                        add: '+',
                        break: 'pause',
                        cmd: 'meta',
                        command: 'meta',
                        ctl: 'control',
                        ctrl: 'control',
                        del: 'delete',
                        down: 'arrowdown',
                        esc: 'escape',
                        ins: 'insert',
                        left: 'arrowleft',
                        mod: n ? 'meta' : 'control',
                        opt: 'alt',
                        option: 'alt',
                        return: 'enter',
                        right: 'arrowright',
                        space: ' ',
                        spacebar: ' ',
                        up: 'arrowup',
                        win: 'meta',
                        windows: 'meta',
                    },
                    i = {
                        backspace: 8,
                        tab: 9,
                        enter: 13,
                        shift: 16,
                        control: 17,
                        alt: 18,
                        pause: 19,
                        capslock: 20,
                        escape: 27,
                        ' ': 32,
                        pageup: 33,
                        pagedown: 34,
                        end: 35,
                        home: 36,
                        arrowleft: 37,
                        arrowup: 38,
                        arrowright: 39,
                        arrowdown: 40,
                        insert: 45,
                        delete: 46,
                        meta: 91,
                        numlock: 144,
                        scrolllock: 145,
                        ';': 186,
                        '=': 187,
                        ',': 188,
                        '-': 189,
                        '.': 190,
                        '/': 191,
                        '`': 192,
                        '[': 219,
                        '\\': 220,
                        ']': 221,
                        "'": 222,
                    },
                    c = 1;
                c < 20;
                c++
            )
                i['f' + c] = 111 + c;
            function s(e, t, r) {
                t && !('byKey' in t) && ((r = t), (t = null)),
                    Array.isArray(e) || (e = [e]);
                var n = e.map(function(e) {
                        return u(e, t);
                    }),
                    o = function(e) {
                        return n.some(function(t) {
                            return l(t, e);
                        });
                    };
                return null == r ? o : o(r);
            }
            function u(e, t) {
                var r = t && t.byKey,
                    n = {},
                    a = (e = e.replace('++', '+add')).split('+'),
                    i = a.length;
                for (var c in o) n[o[c]] = !1;
                var s = !0,
                    u = !1,
                    l = void 0;
                try {
                    for (
                        var h, p = a[Symbol.iterator]();
                        !(s = (h = p.next()).done);
                        s = !0
                    ) {
                        var v = h.value,
                            m = v.endsWith('?') && v.length > 1;
                        m && (v = v.slice(0, -1));
                        var y = d(v),
                            g = o[y];
                        (1 !== i && g) || (r ? (n.key = y) : (n.which = f(v))),
                            g && (n[g] = !m || null);
                    }
                } catch (e) {
                    (u = !0), (l = e);
                } finally {
                    try {
                        !s && p.return && p.return();
                    } finally {
                        if (u) throw l;
                    }
                }
                return n;
            }
            function l(e, t) {
                for (var r in e) {
                    var n = e[r],
                        o = void 0;
                    if (
                        null != n &&
                        (null !=
                            (o =
                                'key' === r && null != t.key
                                    ? t.key.toLowerCase()
                                    : 'which' === r
                                    ? 91 === n && 93 === t.which
                                        ? 91
                                        : t.which
                                    : t[r]) ||
                            !1 !== n) &&
                            o !== n
                    )
                        return !1;
                }
                return !0;
            }
            function f(e) {
                return (e = d(e)), i[e] || e.toUpperCase().charCodeAt(0);
            }
            function d(e) {
                return (e = e.toLowerCase()), (e = a[e] || e);
            }
            (t.default = s),
                (t.isHotkey = s),
                (t.isCodeHotkey = function(e, t) {
                    return s(e, t);
                }),
                (t.isKeyHotkey = function(e, t) {
                    return s(e, { byKey: !0 }, t);
                }),
                (t.parseHotkey = u),
                (t.compareHotkey = l),
                (t.toKeyCode = f),
                (t.toKeyName = d);
        },
        function(e, t) {
            function r(e) {
                return (r =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function(e) {
                              return typeof e;
                          }
                        : function(e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            var n;
            n = (function() {
                return this;
            })();
            try {
                n = n || new Function('return this')();
            } catch (e) {
                'object' ===
                    ('undefined' == typeof window ? 'undefined' : r(window)) &&
                    (n = window);
            }
            e.exports = n;
        },
        function(e, t) {
            function r(e) {
                return (r =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function(e) {
                              return typeof e;
                          }
                        : function(e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            e.exports = function(e) {
                var t = r(e);
                return null != e && ('object' == t || 'function' == t);
            };
        },
        function(e, t, r) {
            'use strict';
            var n = function(e, t) {
                if ('string' != typeof e && !Array.isArray(e))
                    throw new TypeError(
                        'Expected the input to be `string | string[]`',
                    );
                t = Object.assign({ pascalCase: !1 }, t);
                var r;
                return 0 ===
                    (e = Array.isArray(e)
                        ? e
                              .map(function(e) {
                                  return e.trim();
                              })
                              .filter(function(e) {
                                  return e.length;
                              })
                              .join('-')
                        : e.trim()).length
                    ? ''
                    : 1 === e.length
                    ? t.pascalCase
                        ? e.toUpperCase()
                        : e.toLowerCase()
                    : (e !== e.toLowerCase() &&
                          (e = (function(e) {
                              for (
                                  var t = !1, r = !1, n = !1, o = 0;
                                  o < e.length;
                                  o++
                              ) {
                                  var a = e[o];
                                  t &&
                                  /[a-zA-Z]/.test(a) &&
                                  a.toUpperCase() === a
                                      ? ((e = e.slice(0, o) + '-' + e.slice(o)),
                                        (t = !1),
                                        (n = r),
                                        (r = !0),
                                        o++)
                                      : r &&
                                        n &&
                                        /[a-zA-Z]/.test(a) &&
                                        a.toLowerCase() === a
                                      ? ((e =
                                            e.slice(0, o - 1) +
                                            '-' +
                                            e.slice(o - 1)),
                                        (n = r),
                                        (r = !1),
                                        (t = !0))
                                      : ((t =
                                            a.toLowerCase() === a &&
                                            a.toUpperCase() !== a),
                                        (n = r),
                                        (r =
                                            a.toUpperCase() === a &&
                                            a.toLowerCase() !== a));
                              }
                              return e;
                          })(e)),
                      (e = e
                          .replace(/^[_.\- ]+/, '')
                          .toLowerCase()
                          .replace(/[_.\- ]+(\w|$)/g, function(e, t) {
                              return t.toUpperCase();
                          })
                          .replace(/\d+(\w|$)/g, function(e) {
                              return e.toUpperCase();
                          })),
                      (r = e),
                      t.pascalCase
                          ? r.charAt(0).toUpperCase() + r.slice(1)
                          : r);
            };
            (e.exports = n), (e.exports.default = n);
        },
        function(e, t) {
            var r,
                n,
                o = (e.exports = {});
            function a() {
                throw new Error('setTimeout has not been defined');
            }
            function i() {
                throw new Error('clearTimeout has not been defined');
            }
            function c(e) {
                if (r === setTimeout) return setTimeout(e, 0);
                if ((r === a || !r) && setTimeout)
                    return (r = setTimeout), setTimeout(e, 0);
                try {
                    return r(e, 0);
                } catch (t) {
                    try {
                        return r.call(null, e, 0);
                    } catch (t) {
                        return r.call(this, e, 0);
                    }
                }
            }
            !(function() {
                try {
                    r = 'function' == typeof setTimeout ? setTimeout : a;
                } catch (e) {
                    r = a;
                }
                try {
                    n = 'function' == typeof clearTimeout ? clearTimeout : i;
                } catch (e) {
                    n = i;
                }
            })();
            var s,
                u = [],
                l = !1,
                f = -1;
            function d() {
                l &&
                    s &&
                    ((l = !1),
                    s.length ? (u = s.concat(u)) : (f = -1),
                    u.length && h());
            }
            function h() {
                if (!l) {
                    var e = c(d);
                    l = !0;
                    for (var t = u.length; t; ) {
                        for (s = u, u = []; ++f < t; ) s && s[f].run();
                        (f = -1), (t = u.length);
                    }
                    (s = null),
                        (l = !1),
                        (function(e) {
                            if (n === clearTimeout) return clearTimeout(e);
                            if ((n === i || !n) && clearTimeout)
                                return (n = clearTimeout), clearTimeout(e);
                            try {
                                n(e);
                            } catch (t) {
                                try {
                                    return n.call(null, e);
                                } catch (t) {
                                    return n.call(this, e);
                                }
                            }
                        })(e);
                }
            }
            function p(e, t) {
                (this.fun = e), (this.array = t);
            }
            function v() {}
            (o.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var r = 1; r < arguments.length; r++)
                        t[r - 1] = arguments[r];
                u.push(new p(e, t)), 1 !== u.length || l || c(h);
            }),
                (p.prototype.run = function() {
                    this.fun.apply(null, this.array);
                }),
                (o.title = 'browser'),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ''),
                (o.versions = {}),
                (o.on = v),
                (o.addListener = v),
                (o.once = v),
                (o.off = v),
                (o.removeListener = v),
                (o.removeAllListeners = v),
                (o.emit = v),
                (o.prependListener = v),
                (o.prependOnceListener = v),
                (o.listeners = function(e) {
                    return [];
                }),
                (o.binding = function(e) {
                    throw new Error('process.binding is not supported');
                }),
                (o.cwd = function() {
                    return '/';
                }),
                (o.chdir = function(e) {
                    throw new Error('process.chdir is not supported');
                }),
                (o.umask = function() {
                    return 0;
                });
        },
        function(e, t, r) {
            var n = r(28),
                o = r(29),
                a = { float: 'cssFloat' },
                i = r(32);
            function c(e, t, r) {
                var c = a[t];
                if (
                    (void 0 === c &&
                        (c = (function(e) {
                            var t = o(e),
                                r = n(t);
                            return (a[t] = a[e] = a[r] = r), r;
                        })(t)),
                    c)
                ) {
                    if (void 0 === r) return e.style[c];
                    e.style[c] = i(c, r);
                }
            }
            function s(e, t) {
                for (var r in t) t.hasOwnProperty(r) && c(e, r, t[r]);
            }
            function u() {
                2 === arguments.length
                    ? 'string' == typeof arguments[1]
                        ? (arguments[0].style.cssText = arguments[1])
                        : s(arguments[0], arguments[1])
                    : c(arguments[0], arguments[1], arguments[2]);
            }
            (e.exports = u),
                (e.exports.set = u),
                (e.exports.get = function(e, t) {
                    return Array.isArray(t)
                        ? t.reduce(function(t, r) {
                              return (t[r] = c(e, r || '')), t;
                          }, {})
                        : c(e, t || '');
                });
        },
        function(e, t) {
            (function(t) {
                e.exports = t;
            }.call(this, {}));
        },
        function(e, t, r) {
            function n(e) {
                return (n =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function(e) {
                              return typeof e;
                          }
                        : function(e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            var o = r(43),
                a =
                    'object' ==
                        ('undefined' == typeof self ? 'undefined' : n(self)) &&
                    self &&
                    self.Object === Object &&
                    self,
                i = o || a || Function('return this')();
            e.exports = i;
        },
        function(e, t, r) {
            var n = r(14).Symbol;
            e.exports = n;
        },
        function(e, t, r) {
            var n = r(23),
                o = r(24);
            e.exports = function(e, t, r) {
                var a = (t && r) || 0;
                'string' == typeof e &&
                    ((t = 'binary' === e ? new Array(16) : null), (e = null));
                var i = (e = e || {}).random || (e.rng || n)();
                if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), t))
                    for (var c = 0; c < 16; ++c) t[a + c] = i[c];
                return t || o(i);
            };
        },
        function(e, t, r) {
            (function(e, n) {
                var o;
                function a(e) {
                    return (a =
                        'function' == typeof Symbol &&
                        'symbol' == typeof Symbol.iterator
                            ? function(e) {
                                  return typeof e;
                              }
                            : function(e) {
                                  return e &&
                                      'function' == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof e;
                              })(e);
                }
                /*! https://mths.be/esrever v0.2.0 by @mathias */ !(function(
                    i,
                ) {
                    var c = 'object' == a(t) && t,
                        s = 'object' == a(e) && e && e.exports == c && e,
                        u =
                            'object' == (void 0 === n ? 'undefined' : a(n)) &&
                            n;
                    (u.global !== u && u.window !== u) || (i = u);
                    var l = /([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g,
                        f = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g,
                        d = {
                            version: '0.2.0',
                            reverse: function e(t) {
                                for (
                                    var r = '',
                                        n = (t = t
                                            .replace(l, function(t, r, n) {
                                                return e(n) + r;
                                            })
                                            .replace(f, '$2$1')).length;
                                    n--;

                                )
                                    r += t.charAt(n);
                                return r;
                            },
                        };
                    if ('object' == a(r(13)) && r(13))
                        void 0 ===
                            (o = function() {
                                return d;
                            }.call(t, r, t, e)) || (e.exports = o);
                    else if (c && !c.nodeType)
                        if (s) s.exports = d;
                        else
                            for (var h in d)
                                d.hasOwnProperty(h) && (c[h] = d[h]);
                    else i.esrever = d;
                })(this);
            }.call(this, r(40)(e), r(8)));
        },
        function(e, t) {
            e.exports = a;
        },
        function(e, t, r) {
            var n = r(41),
                o = r(9);
            e.exports = function(e, t, r) {
                var a = !0,
                    i = !0;
                if ('function' != typeof e)
                    throw new TypeError('Expected a function');
                return (
                    o(r) &&
                        ((a = 'leading' in r ? !!r.leading : a),
                        (i = 'trailing' in r ? !!r.trailing : i)),
                    n(e, t, { leading: a, maxWait: t, trailing: i })
                );
            };
        },
        function(e, t, r) {
            'use strict';
            e.exports = function(e) {
                if (((e = String(e || '')), o.test(e))) return 'rtl';
                if (a.test(e)) return 'ltr';
                return 'neutral';
            };
            var n = 'A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿',
                o = new RegExp('^[^' + n + ']*[֑-߿יִ-﷽ﹰ-ﻼ]'),
                a = new RegExp('^[^֑-߿יִ-﷽ﹰ-ﻼ]*[' + n + ']');
        },
        function(e, t) {
            e.exports = i;
        },
        function(e, t, r) {
            r(50);
        },
        function(e, t) {
            var r =
                ('undefined' != typeof crypto &&
                    crypto.getRandomValues &&
                    crypto.getRandomValues.bind(crypto)) ||
                ('undefined' != typeof msCrypto &&
                    'function' == typeof window.msCrypto.getRandomValues &&
                    msCrypto.getRandomValues.bind(msCrypto));
            if (r) {
                var n = new Uint8Array(16);
                e.exports = function() {
                    return r(n), n;
                };
            } else {
                var o = new Array(16);
                e.exports = function() {
                    for (var e, t = 0; t < 16; t++)
                        0 == (3 & t) && (e = 4294967296 * Math.random()),
                            (o[t] = (e >>> ((3 & t) << 3)) & 255);
                    return o;
                };
            }
        },
        function(e, t) {
            for (var r = [], n = 0; n < 256; ++n)
                r[n] = (n + 256).toString(16).substr(1);
            e.exports = function(e, t) {
                var n = t || 0,
                    o = r;
                return [
                    o[e[n++]],
                    o[e[n++]],
                    o[e[n++]],
                    o[e[n++]],
                    '-',
                    o[e[n++]],
                    o[e[n++]],
                    '-',
                    o[e[n++]],
                    o[e[n++]],
                    '-',
                    o[e[n++]],
                    o[e[n++]],
                    '-',
                    o[e[n++]],
                    o[e[n++]],
                    o[e[n++]],
                    o[e[n++]],
                    o[e[n++]],
                    o[e[n++]],
                ].join('');
            };
        },
        function(e, t, r) {
            'use strict';
            function n(e) {
                return (n =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function(e) {
                              return typeof e;
                          }
                        : function(e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            Object.defineProperty(t, '__esModule', { value: !0 });
            var o =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r)
                                Object.prototype.hasOwnProperty.call(r, n) &&
                                    (e[n] = r[n]);
                        }
                        return e;
                    },
                a = (function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                'value' in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t;
                    };
                })(),
                i = r(26),
                c = g(i),
                s = g(r(12)),
                u = r(0),
                l = g(r(5)),
                f = g(r(33)),
                d = g(r(34)),
                h = g(r(35)),
                p = g(r(36)),
                v = g(r(37)),
                m = r(38),
                y = r(39);
            function g(e) {
                return e && e.__esModule ? e : { default: e };
            }
            function b(e, t) {
                if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
            }
            function w(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                    );
                return !t || ('object' !== n(t) && 'function' != typeof t)
                    ? e
                    : t;
            }
            var O = (function(e) {
                function t(e) {
                    var r;
                    b(this, t);
                    for (
                        var n = arguments.length,
                            o = Array(n > 1 ? n - 1 : 0),
                            a = 1;
                        a < n;
                        a++
                    )
                        o[a - 1] = arguments[a];
                    var i = w(
                        this,
                        (r =
                            t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                            r,
                            [this, e].concat(o),
                        ),
                    );
                    return (
                        (i.getScrollLeft = i.getScrollLeft.bind(i)),
                        (i.getScrollTop = i.getScrollTop.bind(i)),
                        (i.getScrollWidth = i.getScrollWidth.bind(i)),
                        (i.getScrollHeight = i.getScrollHeight.bind(i)),
                        (i.getClientWidth = i.getClientWidth.bind(i)),
                        (i.getClientHeight = i.getClientHeight.bind(i)),
                        (i.getValues = i.getValues.bind(i)),
                        (i.getThumbHorizontalWidth = i.getThumbHorizontalWidth.bind(
                            i,
                        )),
                        (i.getThumbVerticalHeight = i.getThumbVerticalHeight.bind(
                            i,
                        )),
                        (i.getScrollLeftForOffset = i.getScrollLeftForOffset.bind(
                            i,
                        )),
                        (i.getScrollTopForOffset = i.getScrollTopForOffset.bind(
                            i,
                        )),
                        (i.scrollLeft = i.scrollLeft.bind(i)),
                        (i.scrollTop = i.scrollTop.bind(i)),
                        (i.scrollToLeft = i.scrollToLeft.bind(i)),
                        (i.scrollToTop = i.scrollToTop.bind(i)),
                        (i.scrollToRight = i.scrollToRight.bind(i)),
                        (i.scrollToBottom = i.scrollToBottom.bind(i)),
                        (i.handleTrackMouseEnter = i.handleTrackMouseEnter.bind(
                            i,
                        )),
                        (i.handleTrackMouseLeave = i.handleTrackMouseLeave.bind(
                            i,
                        )),
                        (i.handleHorizontalTrackMouseDown = i.handleHorizontalTrackMouseDown.bind(
                            i,
                        )),
                        (i.handleVerticalTrackMouseDown = i.handleVerticalTrackMouseDown.bind(
                            i,
                        )),
                        (i.handleHorizontalThumbMouseDown = i.handleHorizontalThumbMouseDown.bind(
                            i,
                        )),
                        (i.handleVerticalThumbMouseDown = i.handleVerticalThumbMouseDown.bind(
                            i,
                        )),
                        (i.handleWindowResize = i.handleWindowResize.bind(i)),
                        (i.handleScroll = i.handleScroll.bind(i)),
                        (i.handleDrag = i.handleDrag.bind(i)),
                        (i.handleDragEnd = i.handleDragEnd.bind(i)),
                        (i.state = { didMountUniversal: !1 }),
                        i
                    );
                }
                return (
                    (function(e, t) {
                        if ('function' != typeof t && null !== t)
                            throw new TypeError(
                                'Super expression must either be null or a function, not ' +
                                    n(t),
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0,
                            },
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    })(t, e),
                    a(t, [
                        {
                            key: 'componentDidMount',
                            value: function() {
                                this.addListeners(),
                                    this.update(),
                                    this.componentDidMountUniversal();
                            },
                        },
                        {
                            key: 'componentDidMountUniversal',
                            value: function() {
                                this.props.universal &&
                                    this.setState({ didMountUniversal: !0 });
                            },
                        },
                        {
                            key: 'componentDidUpdate',
                            value: function() {
                                this.update();
                            },
                        },
                        {
                            key: 'componentWillUnmount',
                            value: function() {
                                this.removeListeners(),
                                    (0, i.cancel)(this.requestFrame),
                                    clearTimeout(this.hideTracksTimeout),
                                    clearInterval(this.detectScrollingInterval);
                            },
                        },
                        {
                            key: 'getScrollLeft',
                            value: function() {
                                return this.view ? this.view.scrollLeft : 0;
                            },
                        },
                        {
                            key: 'getScrollTop',
                            value: function() {
                                return this.view ? this.view.scrollTop : 0;
                            },
                        },
                        {
                            key: 'getScrollWidth',
                            value: function() {
                                return this.view ? this.view.scrollWidth : 0;
                            },
                        },
                        {
                            key: 'getScrollHeight',
                            value: function() {
                                return this.view ? this.view.scrollHeight : 0;
                            },
                        },
                        {
                            key: 'getClientWidth',
                            value: function() {
                                return this.view ? this.view.clientWidth : 0;
                            },
                        },
                        {
                            key: 'getClientHeight',
                            value: function() {
                                return this.view ? this.view.clientHeight : 0;
                            },
                        },
                        {
                            key: 'getValues',
                            value: function() {
                                var e = this.view || {},
                                    t = e.scrollLeft,
                                    r = void 0 === t ? 0 : t,
                                    n = e.scrollTop,
                                    o = void 0 === n ? 0 : n,
                                    a = e.scrollWidth,
                                    i = void 0 === a ? 0 : a,
                                    c = e.scrollHeight,
                                    s = void 0 === c ? 0 : c,
                                    u = e.clientWidth,
                                    l = void 0 === u ? 0 : u,
                                    f = e.clientHeight,
                                    d = void 0 === f ? 0 : f;
                                return {
                                    left: r / (i - l) || 0,
                                    top: o / (s - d) || 0,
                                    scrollLeft: r,
                                    scrollTop: o,
                                    scrollWidth: i,
                                    scrollHeight: s,
                                    clientWidth: l,
                                    clientHeight: d,
                                };
                            },
                        },
                        {
                            key: 'getThumbHorizontalWidth',
                            value: function() {
                                var e = this.props,
                                    t = e.thumbSize,
                                    r = e.thumbMinSize,
                                    n = this.view,
                                    o = n.scrollWidth,
                                    a = n.clientWidth,
                                    i = (0, p.default)(this.trackHorizontal),
                                    c = Math.ceil((a / o) * i);
                                return i === c ? 0 : t || Math.max(c, r);
                            },
                        },
                        {
                            key: 'getThumbVerticalHeight',
                            value: function() {
                                var e = this.props,
                                    t = e.thumbSize,
                                    r = e.thumbMinSize,
                                    n = this.view,
                                    o = n.scrollHeight,
                                    a = n.clientHeight,
                                    i = (0, v.default)(this.trackVertical),
                                    c = Math.ceil((a / o) * i);
                                return i === c ? 0 : t || Math.max(c, r);
                            },
                        },
                        {
                            key: 'getScrollLeftForOffset',
                            value: function(e) {
                                var t = this.view,
                                    r = t.scrollWidth,
                                    n = t.clientWidth;
                                return (
                                    (e /
                                        ((0, p.default)(this.trackHorizontal) -
                                            this.getThumbHorizontalWidth())) *
                                    (r - n)
                                );
                            },
                        },
                        {
                            key: 'getScrollTopForOffset',
                            value: function(e) {
                                var t = this.view,
                                    r = t.scrollHeight,
                                    n = t.clientHeight;
                                return (
                                    (e /
                                        ((0, v.default)(this.trackVertical) -
                                            this.getThumbVerticalHeight())) *
                                    (r - n)
                                );
                            },
                        },
                        {
                            key: 'scrollLeft',
                            value: function() {
                                var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : 0;
                                this.view && (this.view.scrollLeft = e);
                            },
                        },
                        {
                            key: 'scrollTop',
                            value: function() {
                                var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : 0;
                                this.view && (this.view.scrollTop = e);
                            },
                        },
                        {
                            key: 'scrollToLeft',
                            value: function() {
                                this.view && (this.view.scrollLeft = 0);
                            },
                        },
                        {
                            key: 'scrollToTop',
                            value: function() {
                                this.view && (this.view.scrollTop = 0);
                            },
                        },
                        {
                            key: 'scrollToRight',
                            value: function() {
                                this.view &&
                                    (this.view.scrollLeft = this.view.scrollWidth);
                            },
                        },
                        {
                            key: 'scrollToBottom',
                            value: function() {
                                this.view &&
                                    (this.view.scrollTop = this.view.scrollHeight);
                            },
                        },
                        {
                            key: 'addListeners',
                            value: function() {
                                if (
                                    'undefined' != typeof document &&
                                    this.view
                                ) {
                                    var e = this.view,
                                        t = this.trackHorizontal,
                                        r = this.trackVertical,
                                        n = this.thumbHorizontal,
                                        o = this.thumbVertical;
                                    e.addEventListener(
                                        'scroll',
                                        this.handleScroll,
                                    ),
                                        (0, d.default)() &&
                                            (t.addEventListener(
                                                'mouseenter',
                                                this.handleTrackMouseEnter,
                                            ),
                                            t.addEventListener(
                                                'mouseleave',
                                                this.handleTrackMouseLeave,
                                            ),
                                            t.addEventListener(
                                                'mousedown',
                                                this
                                                    .handleHorizontalTrackMouseDown,
                                            ),
                                            r.addEventListener(
                                                'mouseenter',
                                                this.handleTrackMouseEnter,
                                            ),
                                            r.addEventListener(
                                                'mouseleave',
                                                this.handleTrackMouseLeave,
                                            ),
                                            r.addEventListener(
                                                'mousedown',
                                                this
                                                    .handleVerticalTrackMouseDown,
                                            ),
                                            n.addEventListener(
                                                'mousedown',
                                                this
                                                    .handleHorizontalThumbMouseDown,
                                            ),
                                            o.addEventListener(
                                                'mousedown',
                                                this
                                                    .handleVerticalThumbMouseDown,
                                            ),
                                            window.addEventListener(
                                                'resize',
                                                this.handleWindowResize,
                                            ));
                                }
                            },
                        },
                        {
                            key: 'removeListeners',
                            value: function() {
                                if (
                                    'undefined' != typeof document &&
                                    this.view
                                ) {
                                    var e = this.view,
                                        t = this.trackHorizontal,
                                        r = this.trackVertical,
                                        n = this.thumbHorizontal,
                                        o = this.thumbVertical;
                                    e.removeEventListener(
                                        'scroll',
                                        this.handleScroll,
                                    ),
                                        (0, d.default)() &&
                                            (t.removeEventListener(
                                                'mouseenter',
                                                this.handleTrackMouseEnter,
                                            ),
                                            t.removeEventListener(
                                                'mouseleave',
                                                this.handleTrackMouseLeave,
                                            ),
                                            t.removeEventListener(
                                                'mousedown',
                                                this
                                                    .handleHorizontalTrackMouseDown,
                                            ),
                                            r.removeEventListener(
                                                'mouseenter',
                                                this.handleTrackMouseEnter,
                                            ),
                                            r.removeEventListener(
                                                'mouseleave',
                                                this.handleTrackMouseLeave,
                                            ),
                                            r.removeEventListener(
                                                'mousedown',
                                                this
                                                    .handleVerticalTrackMouseDown,
                                            ),
                                            n.removeEventListener(
                                                'mousedown',
                                                this
                                                    .handleHorizontalThumbMouseDown,
                                            ),
                                            o.removeEventListener(
                                                'mousedown',
                                                this
                                                    .handleVerticalThumbMouseDown,
                                            ),
                                            window.removeEventListener(
                                                'resize',
                                                this.handleWindowResize,
                                            ),
                                            this.teardownDragging());
                                }
                            },
                        },
                        {
                            key: 'handleScroll',
                            value: function(e) {
                                var t = this,
                                    r = this.props,
                                    n = r.onScroll,
                                    o = r.onScrollFrame;
                                n && n(e),
                                    this.update(function(e) {
                                        var r = e.scrollLeft,
                                            n = e.scrollTop;
                                        (t.viewScrollLeft = r),
                                            (t.viewScrollTop = n),
                                            o && o(e);
                                    }),
                                    this.detectScrolling();
                            },
                        },
                        {
                            key: 'handleScrollStart',
                            value: function() {
                                var e = this.props.onScrollStart;
                                e && e(), this.handleScrollStartAutoHide();
                            },
                        },
                        {
                            key: 'handleScrollStartAutoHide',
                            value: function() {
                                this.props.autoHide && this.showTracks();
                            },
                        },
                        {
                            key: 'handleScrollStop',
                            value: function() {
                                var e = this.props.onScrollStop;
                                e && e(), this.handleScrollStopAutoHide();
                            },
                        },
                        {
                            key: 'handleScrollStopAutoHide',
                            value: function() {
                                this.props.autoHide && this.hideTracks();
                            },
                        },
                        {
                            key: 'handleWindowResize',
                            value: function() {
                                this.update();
                            },
                        },
                        {
                            key: 'handleHorizontalTrackMouseDown',
                            value: function(e) {
                                e.preventDefault();
                                var t = e.target,
                                    r = e.clientX,
                                    n = t.getBoundingClientRect().left,
                                    o = this.getThumbHorizontalWidth(),
                                    a = Math.abs(n - r) - o / 2;
                                this.view.scrollLeft = this.getScrollLeftForOffset(
                                    a,
                                );
                            },
                        },
                        {
                            key: 'handleVerticalTrackMouseDown',
                            value: function(e) {
                                e.preventDefault();
                                var t = e.target,
                                    r = e.clientY,
                                    n = t.getBoundingClientRect().top,
                                    o = this.getThumbVerticalHeight(),
                                    a = Math.abs(n - r) - o / 2;
                                this.view.scrollTop = this.getScrollTopForOffset(
                                    a,
                                );
                            },
                        },
                        {
                            key: 'handleHorizontalThumbMouseDown',
                            value: function(e) {
                                e.preventDefault(), this.handleDragStart(e);
                                var t = e.target,
                                    r = e.clientX,
                                    n = t.offsetWidth,
                                    o = t.getBoundingClientRect().left;
                                this.prevPageX = n - (r - o);
                            },
                        },
                        {
                            key: 'handleVerticalThumbMouseDown',
                            value: function(e) {
                                e.preventDefault(), this.handleDragStart(e);
                                var t = e.target,
                                    r = e.clientY,
                                    n = t.offsetHeight,
                                    o = t.getBoundingClientRect().top;
                                this.prevPageY = n - (r - o);
                            },
                        },
                        {
                            key: 'setupDragging',
                            value: function() {
                                (0, s.default)(
                                    document.body,
                                    m.disableSelectStyle,
                                ),
                                    document.addEventListener(
                                        'mousemove',
                                        this.handleDrag,
                                    ),
                                    document.addEventListener(
                                        'mouseup',
                                        this.handleDragEnd,
                                    ),
                                    (document.onselectstart = h.default);
                            },
                        },
                        {
                            key: 'teardownDragging',
                            value: function() {
                                (0, s.default)(
                                    document.body,
                                    m.disableSelectStyleReset,
                                ),
                                    document.removeEventListener(
                                        'mousemove',
                                        this.handleDrag,
                                    ),
                                    document.removeEventListener(
                                        'mouseup',
                                        this.handleDragEnd,
                                    ),
                                    (document.onselectstart = void 0);
                            },
                        },
                        {
                            key: 'handleDragStart',
                            value: function(e) {
                                (this.dragging = !0),
                                    e.stopImmediatePropagation(),
                                    this.setupDragging();
                            },
                        },
                        {
                            key: 'handleDrag',
                            value: function(e) {
                                if (this.prevPageX) {
                                    var t = e.clientX,
                                        r =
                                            -this.trackHorizontal.getBoundingClientRect()
                                                .left +
                                            t -
                                            (this.getThumbHorizontalWidth() -
                                                this.prevPageX);
                                    this.view.scrollLeft = this.getScrollLeftForOffset(
                                        r,
                                    );
                                }
                                if (this.prevPageY) {
                                    var n = e.clientY,
                                        o =
                                            -this.trackVertical.getBoundingClientRect()
                                                .top +
                                            n -
                                            (this.getThumbVerticalHeight() -
                                                this.prevPageY);
                                    this.view.scrollTop = this.getScrollTopForOffset(
                                        o,
                                    );
                                }
                                return !1;
                            },
                        },
                        {
                            key: 'handleDragEnd',
                            value: function() {
                                (this.dragging = !1),
                                    (this.prevPageX = this.prevPageY = 0),
                                    this.teardownDragging(),
                                    this.handleDragEndAutoHide();
                            },
                        },
                        {
                            key: 'handleDragEndAutoHide',
                            value: function() {
                                this.props.autoHide && this.hideTracks();
                            },
                        },
                        {
                            key: 'handleTrackMouseEnter',
                            value: function() {
                                (this.trackMouseOver = !0),
                                    this.handleTrackMouseEnterAutoHide();
                            },
                        },
                        {
                            key: 'handleTrackMouseEnterAutoHide',
                            value: function() {
                                this.props.autoHide && this.showTracks();
                            },
                        },
                        {
                            key: 'handleTrackMouseLeave',
                            value: function() {
                                (this.trackMouseOver = !1),
                                    this.handleTrackMouseLeaveAutoHide();
                            },
                        },
                        {
                            key: 'handleTrackMouseLeaveAutoHide',
                            value: function() {
                                this.props.autoHide && this.hideTracks();
                            },
                        },
                        {
                            key: 'showTracks',
                            value: function() {
                                clearTimeout(this.hideTracksTimeout),
                                    (0, s.default)(this.trackHorizontal, {
                                        opacity: 1,
                                    }),
                                    (0, s.default)(this.trackVertical, {
                                        opacity: 1,
                                    });
                            },
                        },
                        {
                            key: 'hideTracks',
                            value: function() {
                                var e = this;
                                if (
                                    !this.dragging &&
                                    !this.scrolling &&
                                    !this.trackMouseOver
                                ) {
                                    var t = this.props.autoHideTimeout;
                                    clearTimeout(this.hideTracksTimeout),
                                        (this.hideTracksTimeout = setTimeout(
                                            function() {
                                                (0,
                                                s.default)(e.trackHorizontal, {
                                                    opacity: 0,
                                                }),
                                                    (0,
                                                    s.default)(
                                                        e.trackVertical,
                                                        { opacity: 0 },
                                                    );
                                            },
                                            t,
                                        ));
                                }
                            },
                        },
                        {
                            key: 'detectScrolling',
                            value: function() {
                                var e = this;
                                this.scrolling ||
                                    ((this.scrolling = !0),
                                    this.handleScrollStart(),
                                    (this.detectScrollingInterval = setInterval(
                                        function() {
                                            e.lastViewScrollLeft ===
                                                e.viewScrollLeft &&
                                                e.lastViewScrollTop ===
                                                    e.viewScrollTop &&
                                                (clearInterval(
                                                    e.detectScrollingInterval,
                                                ),
                                                (e.scrolling = !1),
                                                e.handleScrollStop()),
                                                (e.lastViewScrollLeft =
                                                    e.viewScrollLeft),
                                                (e.lastViewScrollTop =
                                                    e.viewScrollTop);
                                        },
                                        100,
                                    )));
                            },
                        },
                        {
                            key: 'raf',
                            value: function(e) {
                                var t = this;
                                this.requestFrame &&
                                    c.default.cancel(this.requestFrame),
                                    (this.requestFrame = (0, c.default)(
                                        function() {
                                            (t.requestFrame = void 0), e();
                                        },
                                    ));
                            },
                        },
                        {
                            key: 'update',
                            value: function(e) {
                                var t = this;
                                this.raf(function() {
                                    return t._update(e);
                                });
                            },
                        },
                        {
                            key: '_update',
                            value: function(e) {
                                var t = this.props,
                                    r = t.onUpdate,
                                    n = t.hideTracksWhenNotNeeded,
                                    o = this.getValues();
                                if ((0, d.default)()) {
                                    var a = o.scrollLeft,
                                        i = o.clientWidth,
                                        c = o.scrollWidth,
                                        u = (0, p.default)(
                                            this.trackHorizontal,
                                        ),
                                        l = this.getThumbHorizontalWidth(),
                                        f = {
                                            width: l,
                                            transform:
                                                'translateX(' +
                                                (a / (c - i)) * (u - l) +
                                                'px)',
                                        },
                                        h = o.scrollTop,
                                        m = o.clientHeight,
                                        y = o.scrollHeight,
                                        g = (0, v.default)(this.trackVertical),
                                        b = this.getThumbVerticalHeight(),
                                        w = {
                                            height: b,
                                            transform:
                                                'translateY(' +
                                                (h / (y - m)) * (g - b) +
                                                'px)',
                                        };
                                    if (n) {
                                        var O = {
                                                visibility:
                                                    c > i
                                                        ? 'visible'
                                                        : 'hidden',
                                            },
                                            S = {
                                                visibility:
                                                    y > m
                                                        ? 'visible'
                                                        : 'hidden',
                                            };
                                        (0, s.default)(this.trackHorizontal, O),
                                            (0, s.default)(
                                                this.trackVertical,
                                                S,
                                            );
                                    }
                                    (0, s.default)(this.thumbHorizontal, f),
                                        (0, s.default)(this.thumbVertical, w);
                                }
                                r && r(o), 'function' == typeof e && e(o);
                            },
                        },
                        {
                            key: 'render',
                            value: function() {
                                var e = this,
                                    t = (0, d.default)(),
                                    r = this.props,
                                    n =
                                        (r.onScroll,
                                        r.onScrollFrame,
                                        r.onScrollStart,
                                        r.onScrollStop,
                                        r.onUpdate,
                                        r.renderView),
                                    a = r.renderTrackHorizontal,
                                    i = r.renderTrackVertical,
                                    c = r.renderThumbHorizontal,
                                    s = r.renderThumbVertical,
                                    l = r.tagName,
                                    h = (r.hideTracksWhenNotNeeded, r.autoHide),
                                    p = (r.autoHideTimeout, r.autoHideDuration),
                                    v =
                                        (r.thumbSize,
                                        r.thumbMinSize,
                                        r.universal),
                                    y = r.autoHeight,
                                    g = r.autoHeightMin,
                                    b = r.autoHeightMax,
                                    w = r.style,
                                    O = r.children,
                                    S = (function(e, t) {
                                        var r = {};
                                        for (var n in e)
                                            t.indexOf(n) >= 0 ||
                                                (Object.prototype.hasOwnProperty.call(
                                                    e,
                                                    n,
                                                ) &&
                                                    (r[n] = e[n]));
                                        return r;
                                    })(r, [
                                        'onScroll',
                                        'onScrollFrame',
                                        'onScrollStart',
                                        'onScrollStop',
                                        'onUpdate',
                                        'renderView',
                                        'renderTrackHorizontal',
                                        'renderTrackVertical',
                                        'renderThumbHorizontal',
                                        'renderThumbVertical',
                                        'tagName',
                                        'hideTracksWhenNotNeeded',
                                        'autoHide',
                                        'autoHideTimeout',
                                        'autoHideDuration',
                                        'thumbSize',
                                        'thumbMinSize',
                                        'universal',
                                        'autoHeight',
                                        'autoHeightMin',
                                        'autoHeightMax',
                                        'style',
                                        'children',
                                    ]),
                                    k = this.state.didMountUniversal,
                                    x = o(
                                        {},
                                        m.containerStyleDefault,
                                        y &&
                                            o({}, m.containerStyleAutoHeight, {
                                                minHeight: g,
                                                maxHeight: b,
                                            }),
                                        w,
                                    ),
                                    E = o(
                                        {},
                                        m.viewStyleDefault,
                                        {
                                            marginRight: t ? -t : 0,
                                            marginBottom: t ? -t : 0,
                                        },
                                        y &&
                                            o({}, m.viewStyleAutoHeight, {
                                                minHeight: (0, f.default)(g)
                                                    ? 'calc(' +
                                                      g +
                                                      ' + ' +
                                                      t +
                                                      'px)'
                                                    : g + t,
                                                maxHeight: (0, f.default)(b)
                                                    ? 'calc(' +
                                                      b +
                                                      ' + ' +
                                                      t +
                                                      'px)'
                                                    : b + t,
                                            }),
                                        y &&
                                            v &&
                                            !k && {
                                                minHeight: g,
                                                maxHeight: b,
                                            },
                                        v && !k && m.viewStyleUniversalInitial,
                                    ),
                                    j = {
                                        transition: 'opacity ' + p + 'ms',
                                        opacity: 0,
                                    },
                                    P = o(
                                        {},
                                        m.trackHorizontalStyleDefault,
                                        h && j,
                                        (!t || (v && !k)) && {
                                            display: 'none',
                                        },
                                    ),
                                    T = o(
                                        {},
                                        m.trackVerticalStyleDefault,
                                        h && j,
                                        (!t || (v && !k)) && {
                                            display: 'none',
                                        },
                                    );
                                return (0, u.createElement)(
                                    l,
                                    o({}, S, {
                                        style: x,
                                        ref: function(t) {
                                            e.container = t;
                                        },
                                    }),
                                    [
                                        (0, u.cloneElement)(
                                            n({ style: E }),
                                            {
                                                key: 'view',
                                                ref: function(t) {
                                                    e.view = t;
                                                },
                                            },
                                            O,
                                        ),
                                        (0, u.cloneElement)(
                                            a({ style: P }),
                                            {
                                                key: 'trackHorizontal',
                                                ref: function(t) {
                                                    e.trackHorizontal = t;
                                                },
                                            },
                                            (0, u.cloneElement)(
                                                c({
                                                    style:
                                                        m.thumbHorizontalStyleDefault,
                                                }),
                                                {
                                                    ref: function(t) {
                                                        e.thumbHorizontal = t;
                                                    },
                                                },
                                            ),
                                        ),
                                        (0, u.cloneElement)(
                                            i({ style: T }),
                                            {
                                                key: 'trackVertical',
                                                ref: function(t) {
                                                    e.trackVertical = t;
                                                },
                                            },
                                            (0, u.cloneElement)(
                                                s({
                                                    style:
                                                        m.thumbVerticalStyleDefault,
                                                }),
                                                {
                                                    ref: function(t) {
                                                        e.thumbVertical = t;
                                                    },
                                                },
                                            ),
                                        ),
                                    ],
                                );
                            },
                        },
                    ]),
                    t
                );
            })(u.Component);
            (t.default = O),
                (O.propTypes = {
                    onScroll: l.default.func,
                    onScrollFrame: l.default.func,
                    onScrollStart: l.default.func,
                    onScrollStop: l.default.func,
                    onUpdate: l.default.func,
                    renderView: l.default.func,
                    renderTrackHorizontal: l.default.func,
                    renderTrackVertical: l.default.func,
                    renderThumbHorizontal: l.default.func,
                    renderThumbVertical: l.default.func,
                    tagName: l.default.string,
                    thumbSize: l.default.number,
                    thumbMinSize: l.default.number,
                    hideTracksWhenNotNeeded: l.default.bool,
                    autoHide: l.default.bool,
                    autoHideTimeout: l.default.number,
                    autoHideDuration: l.default.number,
                    autoHeight: l.default.bool,
                    autoHeightMin: l.default.oneOfType([
                        l.default.number,
                        l.default.string,
                    ]),
                    autoHeightMax: l.default.oneOfType([
                        l.default.number,
                        l.default.string,
                    ]),
                    universal: l.default.bool,
                    style: l.default.object,
                    children: l.default.node,
                }),
                (O.defaultProps = {
                    renderView: y.renderViewDefault,
                    renderTrackHorizontal: y.renderTrackHorizontalDefault,
                    renderTrackVertical: y.renderTrackVerticalDefault,
                    renderThumbHorizontal: y.renderThumbHorizontalDefault,
                    renderThumbVertical: y.renderThumbVerticalDefault,
                    tagName: 'div',
                    thumbMinSize: 30,
                    hideTracksWhenNotNeeded: !1,
                    autoHide: !1,
                    autoHideTimeout: 1e3,
                    autoHideDuration: 200,
                    autoHeight: !1,
                    autoHeightMin: 0,
                    autoHeightMax: 200,
                    universal: !1,
                });
        },
        function(e, t, r) {
            (function(t) {
                for (
                    var n = r(27),
                        o = 'undefined' == typeof window ? t : window,
                        a = ['moz', 'webkit'],
                        i = 'AnimationFrame',
                        c = o['request' + i],
                        s = o['cancel' + i] || o['cancelRequest' + i],
                        u = 0;
                    !c && u < a.length;
                    u++
                )
                    (c = o[a[u] + 'Request' + i]),
                        (s =
                            o[a[u] + 'Cancel' + i] ||
                            o[a[u] + 'CancelRequest' + i]);
                if (!c || !s) {
                    var l = 0,
                        f = 0,
                        d = [];
                    (c = function(e) {
                        if (0 === d.length) {
                            var t = n(),
                                r = Math.max(0, 1e3 / 60 - (t - l));
                            (l = r + t),
                                setTimeout(function() {
                                    var e = d.slice(0);
                                    d.length = 0;
                                    for (var t = 0; t < e.length; t++)
                                        if (!e[t].cancelled)
                                            try {
                                                e[t].callback(l);
                                            } catch (e) {
                                                setTimeout(function() {
                                                    throw e;
                                                }, 0);
                                            }
                                }, Math.round(r));
                        }
                        return (
                            d.push({ handle: ++f, callback: e, cancelled: !1 }),
                            f
                        );
                    }),
                        (s = function(e) {
                            for (var t = 0; t < d.length; t++)
                                d[t].handle === e && (d[t].cancelled = !0);
                        });
                }
                (e.exports = function(e) {
                    return c.call(o, e);
                }),
                    (e.exports.cancel = function() {
                        s.apply(o, arguments);
                    }),
                    (e.exports.polyfill = function(e) {
                        e || (e = o),
                            (e.requestAnimationFrame = c),
                            (e.cancelAnimationFrame = s);
                    });
            }.call(this, r(8)));
        },
        function(e, t, r) {
            (function(t) {
                (function() {
                    var r, n, o, a, i, c;
                    'undefined' != typeof performance &&
                    null !== performance &&
                    performance.now
                        ? (e.exports = function() {
                              return performance.now();
                          })
                        : null != t && t.hrtime
                        ? ((e.exports = function() {
                              return (r() - i) / 1e6;
                          }),
                          (n = t.hrtime),
                          (a = (r = function() {
                              var e;
                              return 1e9 * (e = n())[0] + e[1];
                          })()),
                          (c = 1e9 * t.uptime()),
                          (i = a - c))
                        : Date.now
                        ? ((e.exports = function() {
                              return Date.now() - o;
                          }),
                          (o = Date.now()))
                        : ((e.exports = function() {
                              return new Date().getTime() - o;
                          }),
                          (o = new Date().getTime()));
                }.call(this));
            }.call(this, r(11)));
        },
        function(e, t) {
            var r = null,
                n = ['Webkit', 'Moz', 'O', 'ms'];
            e.exports = function(e) {
                r || (r = document.createElement('div'));
                var t = r.style;
                if (e in t) return e;
                for (
                    var o = e.charAt(0).toUpperCase() + e.slice(1),
                        a = n.length;
                    a >= 0;
                    a--
                ) {
                    var i = n[a] + o;
                    if (i in t) return i;
                }
                return !1;
            };
        },
        function(e, t, r) {
            var n = r(30);
            e.exports = function(e) {
                return n(e).replace(/\s(\w)/g, function(e, t) {
                    return t.toUpperCase();
                });
            };
        },
        function(e, t, r) {
            var n = r(31);
            e.exports = function(e) {
                return n(e)
                    .replace(/[\W_]+(.|$)/g, function(e, t) {
                        return t ? ' ' + t : '';
                    })
                    .trim();
            };
        },
        function(e, t) {
            e.exports = function(e) {
                return r.test(e)
                    ? e.toLowerCase()
                    : n.test(e)
                    ? (
                          (function(e) {
                              return e.replace(a, function(e, t) {
                                  return t ? ' ' + t : '';
                              });
                          })(e) || e
                      ).toLowerCase()
                    : o.test(e)
                    ? (function(e) {
                          return e.replace(i, function(e, t, r) {
                              return (
                                  t +
                                  ' ' +
                                  r
                                      .toLowerCase()
                                      .split('')
                                      .join(' ')
                              );
                          });
                      })(e).toLowerCase()
                    : e.toLowerCase();
            };
            var r = /\s/,
                n = /(_|-|\.|:)/,
                o = /([a-z][A-Z]|[A-Z][a-z])/;
            var a = /[\W_]+(.|$)/g;
            var i = /(.)([A-Z]+)/g;
        },
        function(e, t) {
            var r = {
                animationIterationCount: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridRow: !0,
                gridColumn: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                stopOpacity: !0,
                strokeDashoffset: !0,
                strokeOpacity: !0,
                strokeWidth: !0,
            };
            e.exports = function(e, t) {
                return 'number' != typeof t || r[e] ? t : t + 'px';
            };
        },
        function(e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = function(e) {
                    return 'string' == typeof e;
                });
        },
        function(e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = function() {
                    if (!1 !== i) return i;
                    if ('undefined' != typeof document) {
                        var e = document.createElement('div');
                        (0, a.default)(e, {
                            width: 100,
                            height: 100,
                            position: 'absolute',
                            top: -9999,
                            overflow: 'scroll',
                            MsOverflowStyle: 'scrollbar',
                        }),
                            document.body.appendChild(e),
                            (i = e.offsetWidth - e.clientWidth),
                            document.body.removeChild(e);
                    } else i = 0;
                    return i || 0;
                });
            var n,
                o = r(12),
                a = (n = o) && n.__esModule ? n : { default: n };
            var i = !1;
        },
        function(e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = function() {
                    return !1;
                });
        },
        function(e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = function(e) {
                    var t = e.clientWidth,
                        r = getComputedStyle(e),
                        n = r.paddingLeft,
                        o = r.paddingRight;
                    return t - parseFloat(n) - parseFloat(o);
                });
        },
        function(e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = function(e) {
                    var t = e.clientHeight,
                        r = getComputedStyle(e),
                        n = r.paddingTop,
                        o = r.paddingBottom;
                    return t - parseFloat(n) - parseFloat(o);
                });
        },
        function(e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            (t.containerStyleDefault = {
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                height: '100%',
            }),
                (t.containerStyleAutoHeight = { height: 'auto' }),
                (t.viewStyleDefault = {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    overflow: 'scroll',
                    WebkitOverflowScrolling: 'touch',
                }),
                (t.viewStyleAutoHeight = {
                    position: 'relative',
                    top: void 0,
                    left: void 0,
                    right: void 0,
                    bottom: void 0,
                }),
                (t.viewStyleUniversalInitial = {
                    overflow: 'hidden',
                    marginRight: 0,
                    marginBottom: 0,
                }),
                (t.trackHorizontalStyleDefault = {
                    position: 'absolute',
                    height: 6,
                }),
                (t.trackVerticalStyleDefault = {
                    position: 'absolute',
                    width: 6,
                }),
                (t.thumbHorizontalStyleDefault = {
                    position: 'relative',
                    display: 'block',
                    height: '100%',
                }),
                (t.thumbVerticalStyleDefault = {
                    position: 'relative',
                    display: 'block',
                    width: '100%',
                }),
                (t.disableSelectStyle = { userSelect: 'none' }),
                (t.disableSelectStyleReset = { userSelect: '' });
        },
        function(e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var n =
                Object.assign ||
                function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) &&
                                (e[n] = r[n]);
                    }
                    return e;
                };
            (t.renderViewDefault = function(e) {
                return i.default.createElement('div', e);
            }),
                (t.renderTrackHorizontalDefault = function(e) {
                    var t = e.style,
                        r = c(e, ['style']),
                        o = n({}, t, {
                            right: 2,
                            bottom: 2,
                            left: 2,
                            borderRadius: 3,
                        });
                    return i.default.createElement('div', n({ style: o }, r));
                }),
                (t.renderTrackVerticalDefault = function(e) {
                    var t = e.style,
                        r = c(e, ['style']),
                        o = n({}, t, {
                            right: 2,
                            bottom: 2,
                            top: 2,
                            borderRadius: 3,
                        });
                    return i.default.createElement('div', n({ style: o }, r));
                }),
                (t.renderThumbHorizontalDefault = function(e) {
                    var t = e.style,
                        r = c(e, ['style']),
                        o = n({}, t, {
                            cursor: 'pointer',
                            borderRadius: 'inherit',
                            backgroundColor: 'rgba(0,0,0,.2)',
                        });
                    return i.default.createElement('div', n({ style: o }, r));
                }),
                (t.renderThumbVerticalDefault = function(e) {
                    var t = e.style,
                        r = c(e, ['style']),
                        o = n({}, t, {
                            cursor: 'pointer',
                            borderRadius: 'inherit',
                            backgroundColor: 'rgba(0,0,0,.2)',
                        });
                    return i.default.createElement('div', n({ style: o }, r));
                });
            var o,
                a = r(0),
                i = (o = a) && o.__esModule ? o : { default: o };
            function c(e, t) {
                var r = {};
                for (var n in e)
                    t.indexOf(n) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(e, n) &&
                            (r[n] = e[n]));
                return r;
            }
        },
        function(e, t) {
            e.exports = function(e) {
                return (
                    e.webpackPolyfill ||
                        ((e.deprecate = function() {}),
                        (e.paths = []),
                        e.children || (e.children = []),
                        Object.defineProperty(e, 'loaded', {
                            enumerable: !0,
                            get: function() {
                                return e.l;
                            },
                        }),
                        Object.defineProperty(e, 'id', {
                            enumerable: !0,
                            get: function() {
                                return e.i;
                            },
                        }),
                        (e.webpackPolyfill = 1)),
                    e
                );
            };
        },
        function(e, t, r) {
            var n = r(9),
                o = r(42),
                a = r(44),
                i = Math.max,
                c = Math.min;
            e.exports = function(e, t, r) {
                var s,
                    u,
                    l,
                    f,
                    d,
                    h,
                    p = 0,
                    v = !1,
                    m = !1,
                    y = !0;
                if ('function' != typeof e)
                    throw new TypeError('Expected a function');
                function g(t) {
                    var r = s,
                        n = u;
                    return (s = u = void 0), (p = t), (f = e.apply(n, r));
                }
                function b(e) {
                    return (p = e), (d = setTimeout(O, t)), v ? g(e) : f;
                }
                function w(e) {
                    var r = e - h;
                    return void 0 === h || r >= t || r < 0 || (m && e - p >= l);
                }
                function O() {
                    var e = o();
                    if (w(e)) return S(e);
                    d = setTimeout(
                        O,
                        (function(e) {
                            var r = t - (e - h);
                            return m ? c(r, l - (e - p)) : r;
                        })(e),
                    );
                }
                function S(e) {
                    return (d = void 0), y && s ? g(e) : ((s = u = void 0), f);
                }
                function k() {
                    var e = o(),
                        r = w(e);
                    if (((s = arguments), (u = this), (h = e), r)) {
                        if (void 0 === d) return b(h);
                        if (m)
                            return (
                                clearTimeout(d), (d = setTimeout(O, t)), g(h)
                            );
                    }
                    return void 0 === d && (d = setTimeout(O, t)), f;
                }
                return (
                    (t = a(t) || 0),
                    n(r) &&
                        ((v = !!r.leading),
                        (l = (m = 'maxWait' in r)
                            ? i(a(r.maxWait) || 0, t)
                            : l),
                        (y = 'trailing' in r ? !!r.trailing : y)),
                    (k.cancel = function() {
                        void 0 !== d && clearTimeout(d),
                            (p = 0),
                            (s = h = u = d = void 0);
                    }),
                    (k.flush = function() {
                        return void 0 === d ? f : S(o());
                    }),
                    k
                );
            };
        },
        function(e, t, r) {
            var n = r(14);
            e.exports = function() {
                return n.Date.now();
            };
        },
        function(e, t, r) {
            (function(t) {
                function r(e) {
                    return (r =
                        'function' == typeof Symbol &&
                        'symbol' == typeof Symbol.iterator
                            ? function(e) {
                                  return typeof e;
                              }
                            : function(e) {
                                  return e &&
                                      'function' == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof e;
                              })(e);
                }
                var n =
                    'object' == (void 0 === t ? 'undefined' : r(t)) &&
                    t &&
                    t.Object === Object &&
                    t;
                e.exports = n;
            }.call(this, r(8)));
        },
        function(e, t, r) {
            var n = r(9),
                o = r(45),
                a = /^\s+|\s+$/g,
                i = /^[-+]0x[0-9a-f]+$/i,
                c = /^0b[01]+$/i,
                s = /^0o[0-7]+$/i,
                u = parseInt;
            e.exports = function(e) {
                if ('number' == typeof e) return e;
                if (o(e)) return NaN;
                if (n(e)) {
                    var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
                    e = n(t) ? t + '' : t;
                }
                if ('string' != typeof e) return 0 === e ? e : +e;
                e = e.replace(a, '');
                var r = c.test(e);
                return r || s.test(e)
                    ? u(e.slice(2), r ? 2 : 8)
                    : i.test(e)
                    ? NaN
                    : +e;
            };
        },
        function(e, t, r) {
            function n(e) {
                return (n =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function(e) {
                              return typeof e;
                          }
                        : function(e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            var o = r(46),
                a = r(49);
            e.exports = function(e) {
                return 'symbol' == n(e) || (a(e) && '[object Symbol]' == o(e));
            };
        },
        function(e, t, r) {
            var n = r(15),
                o = r(47),
                a = r(48),
                i = n ? n.toStringTag : void 0;
            e.exports = function(e) {
                return null == e
                    ? void 0 === e
                        ? '[object Undefined]'
                        : '[object Null]'
                    : i && i in Object(e)
                    ? o(e)
                    : a(e);
            };
        },
        function(e, t, r) {
            var n = r(15),
                o = Object.prototype,
                a = o.hasOwnProperty,
                i = o.toString,
                c = n ? n.toStringTag : void 0;
            e.exports = function(e) {
                var t = a.call(e, c),
                    r = e[c];
                try {
                    e[c] = void 0;
                    var n = !0;
                } catch (e) {}
                var o = i.call(e);
                return n && (t ? (e[c] = r) : delete e[c]), o;
            };
        },
        function(e, t) {
            var r = Object.prototype.toString;
            e.exports = function(e) {
                return r.call(e);
            };
        },
        function(e, t) {
            function r(e) {
                return (r =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function(e) {
                              return typeof e;
                          }
                        : function(e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            e.exports = function(e) {
                return null != e && 'object' == r(e);
            };
        },
        function(e, t, r) {
            'use strict';
            r.r(t);
            var n = r(4),
                o = r.n(n),
                a = r(2),
                i = r.n(a),
                c = r(1),
                s = r.n(c);
            function u(e, t, r, n, o, a, i) {
                try {
                    var c = e[a](i),
                        s = c.value;
                } catch (e) {
                    return void r(e);
                }
                c.done ? t(s) : Promise.resolve(s).then(n, o);
            }
            function l(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise(function(n, o) {
                        var a = e.apply(t, r);
                        function i(e) {
                            u(a, n, o, i, c, 'next', e);
                        }
                        function c(e) {
                            u(a, n, o, i, c, 'throw', e);
                        }
                        i(void 0);
                    });
                };
            }
            var f = {},
                d = {};
            (d.Component = s.a.Utils.registryFactory('ShortcodesComponents')),
                (d.Component.get = function(e) {
                    var t = o.a.findWhere(d.Component.list, { id: e });
                    if (t) return i.a.set(t, 'id', e), t;
                }),
                (d.clearCache = function() {
                    f = {};
                }),
                (d.delete = l(
                    regeneratorRuntime.mark(function e() {
                        var t,
                            r,
                            n,
                            a = arguments;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        for (
                                            t = a.length,
                                                r = new Array(t),
                                                n = 0;
                                            n < t;
                                            n++
                                        )
                                            r[n] = a[n];
                                        return (
                                            o.a
                                                .flatten([].concat(r))
                                                .forEach(function(e) {
                                                    var t = d.parseKey(e);
                                                    i.a.has(f, t) &&
                                                        i.a.del(f, t);
                                                }),
                                            e.abrupt('return', d.save(f))
                                        );
                                    case 3:
                                    case 'end':
                                        return e.stop();
                                }
                        }, e);
                    }),
                )),
                (d.isKey = function(e) {
                    return !(
                        [
                            8,
                            9,
                            13,
                            16,
                            17,
                            18,
                            20,
                            27,
                            33,
                            34,
                            35,
                            36,
                            37,
                            38,
                            39,
                            40,
                            46,
                            93,
                        ].includes(e.which) ||
                        e.ctrlKey ||
                        e.metaKey ||
                        e.altKey
                    );
                }),
                (d.list = function(e) {
                    return e
                        ? s.a.Setting.get('shortcodes', {}, e).then(function(
                              e,
                          ) {
                              return (f = e);
                          })
                        : f;
                }),
                (d.parseCode = function(e) {
                    var t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                    return (
                        (e = String(e).replace(/[^\-a-z0-9]/gi, '')),
                        (e = String(
                            '['.concat(String(e).replace(/\[|\]/g, ''), ']'),
                        ).toLowerCase()),
                        (e =
                            ']' ===
                            (e =
                                '[' === (e = String(e).replace('[]', ''))
                                    ? ''
                                    : e)
                                ? ''
                                : e),
                        !0 === t &&
                            (e =
                                '-]' === String(e).slice(-2)
                                    ? String(e).replace('-]', ']')
                                    : e),
                        e
                    );
                }),
                (d.parseKey = function(e) {
                    return String(e).replace(/\[|\]/g, '');
                }),
                (d.save = l(
                    regeneratorRuntime.mark(function e() {
                        var t,
                            r = arguments;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (
                                            (t =
                                                r.length > 0 && void 0 !== r[0]
                                                    ? r[0]
                                                    : {}),
                                            (f = t),
                                            (e.next = 4),
                                            s.a.Setting.set('shortcodes', t)
                                        );
                                    case 4:
                                        return e.abrupt('return', f);
                                    case 5:
                                    case 'end':
                                        return e.stop();
                                }
                        }, e);
                    }),
                )),
                (s.a.Shortcode = d);
            var h = d,
                p = r(0),
                v = r.n(p),
                m = r(16),
                y = r.n(m),
                g = r(5),
                b = r.n(g);
            function w(e) {
                return (w =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function(e) {
                              return typeof e;
                          }
                        : function(e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            /*!
             * isobject <https://github.com/jonschlinkert/isobject>
             *
             * Copyright (c) 2014-2017, Jon Schlinkert.
             * Released under the MIT License.
             */
            /*!
             * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
             *
             * Copyright (c) 2014-2017, Jon Schlinkert.
             * Released under the MIT License.
             */
            function O(e) {
                return (
                    !0 ==
                        (null != (t = e) &&
                            'object' === w(t) &&
                            !1 === Array.isArray(t)) &&
                    '[object Object]' === Object.prototype.toString.call(e)
                );
                var t;
            }
            var S = function(e) {
                    var t, r;
                    return (
                        !1 !== O(e) &&
                        'function' == typeof (t = e.constructor) &&
                            !1 !== O((r = t.prototype)) &&
                                !1 !== r.hasOwnProperty('isPrototypeOf')
                    );
                },
                k = r(3),
                x = r(17);
            function E(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            function j(e) {
                return (
                    (function(e) {
                        if (Array.isArray(e)) return C(e);
                    })(e) ||
                    (function(e) {
                        if (
                            'undefined' != typeof Symbol &&
                            Symbol.iterator in Object(e)
                        )
                            return Array.from(e);
                    })(e) ||
                    A(e) ||
                    (function() {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function P(e, t) {
                return (
                    (function(e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function(e, t) {
                        if (
                            'undefined' == typeof Symbol ||
                            !(Symbol.iterator in Object(e))
                        )
                            return;
                        var r = [],
                            n = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (
                                var i, c = e[Symbol.iterator]();
                                !(n = (i = c.next()).done) &&
                                (r.push(i.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (a = e);
                        } finally {
                            try {
                                n || null == c.return || c.return();
                            } finally {
                                if (o) throw a;
                            }
                        }
                        return r;
                    })(e, t) ||
                    A(e, t) ||
                    (function() {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function T(e, t) {
                var r;
                if (
                    'undefined' == typeof Symbol ||
                    null == e[Symbol.iterator]
                ) {
                    if (
                        Array.isArray(e) ||
                        (r = A(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        r && (e = r);
                        var n = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return n >= e.length
                                    ? { done: !0 }
                                    : { done: !1, value: e[n++] };
                            },
                            e: function(e) {
                                throw e;
                            },
                            f: o,
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                var a,
                    i = !0,
                    c = !1;
                return {
                    s: function() {
                        r = e[Symbol.iterator]();
                    },
                    n: function() {
                        var e = r.next();
                        return (i = e.done), e;
                    },
                    e: function(e) {
                        (c = !0), (a = e);
                    },
                    f: function() {
                        try {
                            i || null == r.return || r.return();
                        } finally {
                            if (c) throw a;
                        }
                    },
                };
            }
            function A(e, t) {
                if (e) {
                    if ('string' == typeof e) return C(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name),
                        'Map' === r || 'Set' === r
                            ? Array.from(e)
                            : 'Arguments' === r ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            ? C(e, t)
                            : void 0
                    );
                }
            }
            function C(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function D(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            function F(e, t) {
                if (null == e) return {};
                var r,
                    n,
                    o = (function(e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            o = {},
                            a = Object.keys(e);
                        for (n = 0; n < a.length; n++)
                            (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++)
                        (r = a[n]),
                            t.indexOf(r) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    r,
                                ) &&
                                    (o[r] = e[r]));
                }
                return o;
            }
            var N = new WeakMap(),
                R = (new WeakMap(), new WeakMap()),
                M = new WeakMap(),
                _ = new WeakMap(),
                z = new WeakMap(),
                I = /\s/,
                H = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
                B = /['\u2018\u2019]/,
                L = function(e) {
                    for (var t = 0, r = null, n = e.charCodeAt(0); n; )
                        if (V(n)) {
                            var o = q(n, e, t);
                            if ('SURR' === r || 'BMP' === r) break;
                            (t += 2),
                                (r = o ? 'MOD' : 'SURR'),
                                (n = e.charCodeAt(t));
                        } else if (8205 !== n)
                            if (K(n)) {
                                if (r && 'ZWJ' !== r && 'VAR' !== r) break;
                                (t += 1), (r = 'BMP'), (n = e.charCodeAt(t));
                            } else {
                                if (!Y(n)) {
                                    if ('MOD' === r) {
                                        t += 1;
                                        break;
                                    }
                                    break;
                                }
                                if (r && 'ZWJ' !== r) break;
                                (t += 1), (r = 'VAR'), (n = e.charCodeAt(t));
                            }
                        else (t += 1), (r = 'ZWJ'), (n = e.charCodeAt(t));
                    return t || 1;
                },
                U = function(e) {
                    for (var t, r = 0, n = 0, o = !1; (t = e.charAt(n)); ) {
                        var a = L(t);
                        t = e.slice(n, n + a);
                        var i = e.slice(n + a);
                        if (W(t, i)) (o = !0), (r += a);
                        else {
                            if (o) break;
                            r += a;
                        }
                        n += a;
                    }
                    return r;
                },
                W = function e(t, r) {
                    if (I.test(t)) return !1;
                    if (B.test(t)) {
                        var n = r.charAt(0),
                            o = L(n);
                        if (e((n = r.slice(0, o)), r.slice(o))) return !0;
                    }
                    return !H.test(t);
                },
                V = function(e) {
                    return 55296 <= e && e <= 57343;
                },
                q = function(e, t, r) {
                    if (55356 === e) {
                        var n = t.charCodeAt(r + 1);
                        return n <= 57343 && n >= 57339;
                    }
                    return !1;
                },
                Y = function(e) {
                    return e <= 65039 && e >= 65024;
                },
                K = function(e) {
                    return (
                        10084 === e ||
                        9794 === e ||
                        9792 === e ||
                        9760 === e ||
                        9877 === e ||
                        9992 === e ||
                        9711 === e
                    );
                };
            function G(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t,
                            ).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function Z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? G(Object(r), !0).forEach(function(t) {
                              D(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r),
                          )
                        : G(Object(r)).forEach(function(t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t),
                              );
                          });
                }
                return e;
            }
            var $ = {
                    above: function(e) {
                        var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : {},
                            r = t.voids,
                            n = void 0 !== r && r,
                            o = t.mode,
                            a = void 0 === o ? 'lowest' : o,
                            i = t.at,
                            c = void 0 === i ? e.selection : i,
                            s = t.match;
                        if (c) {
                            var u,
                                l = $.path(e, c),
                                f = 'lowest' === a,
                                d = T(
                                    $.levels(e, {
                                        at: l,
                                        voids: n,
                                        match: s,
                                        reverse: f,
                                    }),
                                );
                            try {
                                for (d.s(); !(u = d.n()).done; ) {
                                    var h = P(u.value, 2),
                                        p = h[0],
                                        v = h[1];
                                    if (!fe.isText(p) && !ne.equals(l, v))
                                        return [p, v];
                                }
                            } catch (e) {
                                d.e(e);
                            } finally {
                                d.f();
                            }
                        }
                    },
                    addMark: function(e, t, r) {
                        e.addMark(t, r);
                    },
                    after: function(e, t) {
                        var r,
                            n,
                            o =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : {},
                            a = $.point(e, t, { edge: 'end' }),
                            i = $.end(e, []),
                            c = { anchor: a, focus: i },
                            s = o.distance,
                            u = void 0 === s ? 1 : s,
                            l = 0,
                            f = T($.positions(e, Z({}, o, { at: c })));
                        try {
                            for (f.s(); !(n = f.n()).done; ) {
                                var d = n.value;
                                if (l > u) break;
                                0 !== l && (r = d), l++;
                            }
                        } catch (e) {
                            f.e(e);
                        } finally {
                            f.f();
                        }
                        return r;
                    },
                    before: function(e, t) {
                        var r,
                            n,
                            o =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : {},
                            a = $.start(e, []),
                            i = $.point(e, t, { edge: 'start' }),
                            c = { anchor: a, focus: i },
                            s = o.distance,
                            u = void 0 === s ? 1 : s,
                            l = 0,
                            f = T(
                                $.positions(
                                    e,
                                    Z({}, o, { at: c, reverse: !0 }),
                                ),
                            );
                        try {
                            for (f.s(); !(n = f.n()).done; ) {
                                var d = n.value;
                                if (l > u) break;
                                0 !== l && (r = d), l++;
                            }
                        } catch (e) {
                            f.e(e);
                        } finally {
                            f.f();
                        }
                        return r;
                    },
                    deleteBackward: function(e) {
                        var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : {},
                            r = t.unit,
                            n = void 0 === r ? 'character' : r;
                        e.deleteBackward(n);
                    },
                    deleteForward: function(e) {
                        var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : {},
                            r = t.unit,
                            n = void 0 === r ? 'character' : r;
                        e.deleteForward(n);
                    },
                    deleteFragment: function(e) {
                        e.deleteFragment();
                    },
                    edges: function(e, t) {
                        return [$.start(e, t), $.end(e, t)];
                    },
                    end: function(e, t) {
                        return $.point(e, t, { edge: 'end' });
                    },
                    first: function(e, t) {
                        var r = $.path(e, t, { edge: 'start' });
                        return $.node(e, r);
                    },
                    fragment: function(e, t) {
                        var r = $.range(e, t),
                            n = Q.fragment(e, r);
                        return n;
                    },
                    hasBlocks: function(e, t) {
                        return t.children.some(function(t) {
                            return $.isBlock(e, t);
                        });
                    },
                    hasInlines: function(e, t) {
                        return t.children.some(function(t) {
                            return fe.isText(t) || $.isInline(e, t);
                        });
                    },
                    hasTexts: function(e, t) {
                        return t.children.every(function(e) {
                            return fe.isText(e);
                        });
                    },
                    insertBreak: function(e) {
                        e.insertBreak();
                    },
                    insertFragment: function(e, t) {
                        e.insertFragment(t);
                    },
                    insertNode: function(e, t) {
                        e.insertNode(t);
                    },
                    insertText: function(e, t) {
                        e.insertText(t);
                    },
                    isBlock: function(e, t) {
                        return J.isElement(t) && !e.isInline(t);
                    },
                    isEditor: function(e) {
                        return (
                            S(e) &&
                            'function' == typeof e.addMark &&
                            'function' == typeof e.apply &&
                            'function' == typeof e.deleteBackward &&
                            'function' == typeof e.deleteForward &&
                            'function' == typeof e.deleteFragment &&
                            'function' == typeof e.insertBreak &&
                            'function' == typeof e.insertFragment &&
                            'function' == typeof e.insertNode &&
                            'function' == typeof e.insertText &&
                            'function' == typeof e.isInline &&
                            'function' == typeof e.isVoid &&
                            'function' == typeof e.normalizeNode &&
                            'function' == typeof e.onChange &&
                            'function' == typeof e.removeMark &&
                            (null === e.marks || S(e.marks)) &&
                            (null === e.selection || se.isRange(e.selection)) &&
                            Q.isNodeList(e.children) &&
                            re.isOperationList(e.operations)
                        );
                    },
                    isEnd: function(e, t, r) {
                        var n = $.end(e, r);
                        return ie.equals(t, n);
                    },
                    isEdge: function(e, t, r) {
                        return $.isStart(e, t, r) || $.isEnd(e, t, r);
                    },
                    isEmpty: function(e, t) {
                        var r = t.children,
                            n = P(r, 1)[0];
                        return (
                            0 === r.length ||
                            (1 === r.length &&
                                fe.isText(n) &&
                                '' === n.text &&
                                !e.isVoid(t))
                        );
                    },
                    isInline: function(e, t) {
                        return J.isElement(t) && e.isInline(t);
                    },
                    isNormalizing: function(e) {
                        var t = R.get(e);
                        return void 0 === t || t;
                    },
                    isStart: function(e, t, r) {
                        if (0 !== t.offset) return !1;
                        var n = $.start(e, r);
                        return ie.equals(t, n);
                    },
                    isVoid: function(e, t) {
                        return J.isElement(t) && e.isVoid(t);
                    },
                    last: function(e, t) {
                        var r = $.path(e, t, { edge: 'end' });
                        return $.node(e, r);
                    },
                    leaf: function(e, t) {
                        var r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : {},
                            n = $.path(e, t, r),
                            o = Q.leaf(e, n);
                        return [o, n];
                    },
                    levels: regeneratorRuntime.mark(function(e) {
                        var t,
                            r,
                            n,
                            o,
                            a,
                            i,
                            c,
                            s,
                            u,
                            l,
                            f,
                            d,
                            h,
                            p,
                            v,
                            m = arguments;
                        return regeneratorRuntime.wrap(
                            function(y) {
                                for (;;)
                                    switch ((y.prev = y.next)) {
                                        case 0:
                                            if (
                                                ((t =
                                                    m.length > 1 &&
                                                    void 0 !== m[1]
                                                        ? m[1]
                                                        : {}),
                                                (r = t.at),
                                                (n =
                                                    void 0 === r
                                                        ? e.selection
                                                        : r),
                                                (o = t.reverse),
                                                (a = void 0 !== o && o),
                                                (i = t.voids),
                                                (c = void 0 !== i && i),
                                                null == (s = t.match) &&
                                                    (s = function() {
                                                        return !0;
                                                    }),
                                                n)
                                            ) {
                                                y.next = 6;
                                                break;
                                            }
                                            return y.abrupt('return');
                                        case 6:
                                            (u = []),
                                                (l = $.path(e, n)),
                                                (f = T(Q.levels(e, l))),
                                                (y.prev = 9),
                                                f.s();
                                        case 11:
                                            if ((d = f.n()).done) {
                                                y.next = 20;
                                                break;
                                            }
                                            if (
                                                ((h = P(d.value, 2)),
                                                (p = h[0]),
                                                (v = h[1]),
                                                s(p))
                                            ) {
                                                y.next = 15;
                                                break;
                                            }
                                            return y.abrupt('continue', 18);
                                        case 15:
                                            if (
                                                (u.push([p, v]),
                                                c || !$.isVoid(e, p))
                                            ) {
                                                y.next = 18;
                                                break;
                                            }
                                            return y.abrupt('break', 20);
                                        case 18:
                                            y.next = 11;
                                            break;
                                        case 20:
                                            y.next = 25;
                                            break;
                                        case 22:
                                            (y.prev = 22),
                                                (y.t0 = y.catch(9)),
                                                f.e(y.t0);
                                        case 25:
                                            return (
                                                (y.prev = 25),
                                                f.f(),
                                                y.finish(25)
                                            );
                                        case 28:
                                            return (
                                                a && u.reverse(),
                                                y.delegateYield(u, 't1', 30)
                                            );
                                        case 30:
                                        case 'end':
                                            return y.stop();
                                    }
                            },
                            u,
                            null,
                            [[9, 22, 25, 28]],
                        );
                    }),
                    marks: function(e) {
                        var t = e.marks,
                            r = e.selection;
                        if (!r) return null;
                        if (t) return t;
                        if (se.isExpanded(r)) {
                            var n = P($.nodes(e, { match: fe.isText }), 1)[0];
                            return n ? F(P(n, 1)[0], ['text']) : {};
                        }
                        var o = r.anchor,
                            a = o.path,
                            i = P($.leaf(e, a), 1)[0];
                        if (0 === o.offset) {
                            var c = $.previous(e, { at: a, match: fe.isText }),
                                s = $.above(e, {
                                    match: function(t) {
                                        return $.isBlock(e, t);
                                    },
                                });
                            if (c && s) {
                                var u = P(c, 2),
                                    l = u[0],
                                    f = u[1],
                                    d = P(s, 2)[1];
                                ne.isAncestor(d, f) && (i = l);
                            }
                        }
                        return F(i, ['text']);
                    },
                    next: function(e) {
                        var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : {},
                            r = t.mode,
                            n = void 0 === r ? 'lowest' : r,
                            o = t.voids,
                            a = void 0 !== o && o,
                            i = t.match,
                            c = t.at,
                            s = void 0 === c ? e.selection : c;
                        if (s) {
                            var u = $.last(e, s),
                                l = P(u, 2),
                                f = l[1],
                                d = $.last(e, []),
                                h = P(d, 2),
                                p = h[1],
                                v = [f, p];
                            if (ne.isPath(s) && 0 === s.length)
                                throw new Error(
                                    'Cannot get the next node from the root node!',
                                );
                            if (null == i)
                                if (ne.isPath(s)) {
                                    var m = $.parent(e, s),
                                        y = P(m, 1),
                                        g = y[0];
                                    i = function(e) {
                                        return g.children.includes(e);
                                    };
                                } else
                                    i = function() {
                                        return !0;
                                    };
                            var b = $.nodes(e, {
                                    at: v,
                                    match: i,
                                    mode: n,
                                    voids: a,
                                }),
                                w = P(b, 2),
                                O = w[1];
                            return O;
                        }
                    },
                    node: function(e, t) {
                        var r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : {},
                            n = $.path(e, t, r),
                            o = Q.get(e, n);
                        return [o, n];
                    },
                    nodes: regeneratorRuntime.mark(function e(t) {
                        var r,
                            n,
                            o,
                            a,
                            i,
                            c,
                            s,
                            u,
                            l,
                            f,
                            d,
                            h,
                            p,
                            v,
                            m,
                            y,
                            g,
                            b,
                            w,
                            O,
                            S,
                            k,
                            x,
                            E,
                            j,
                            A,
                            C = arguments;
                        return regeneratorRuntime.wrap(
                            function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (
                                                ((r =
                                                    C.length > 1 &&
                                                    void 0 !== C[1]
                                                        ? C[1]
                                                        : {}),
                                                (n = r.at),
                                                (o =
                                                    void 0 === n
                                                        ? t.selection
                                                        : n),
                                                (a = r.mode),
                                                (i = void 0 === a ? 'all' : a),
                                                (c = r.universal),
                                                (s = void 0 !== c && c),
                                                (u = r.reverse),
                                                (l = void 0 !== u && u),
                                                (f = r.voids),
                                                (d = void 0 !== f && f),
                                                (h = r.match) ||
                                                    (h = function() {
                                                        return !0;
                                                    }),
                                                o)
                                            ) {
                                                e.next = 6;
                                                break;
                                            }
                                            return e.abrupt('return');
                                        case 6:
                                            X.isSpan(o)
                                                ? ((p = o[0]), (v = o[1]))
                                                : ((m = $.path(t, o, {
                                                      edge: 'start',
                                                  })),
                                                  (y = $.path(t, o, {
                                                      edge: 'end',
                                                  })),
                                                  (p = l ? y : m),
                                                  (v = l ? m : y)),
                                                (g = Q.nodes(t, {
                                                    reverse: l,
                                                    from: p,
                                                    to: v,
                                                    pass: function(e) {
                                                        var r = P(e, 1)[0];
                                                        return (
                                                            !d && $.isVoid(t, r)
                                                        );
                                                    },
                                                })),
                                                (b = []),
                                                (O = T(g)),
                                                (e.prev = 10),
                                                O.s();
                                        case 12:
                                            if ((S = O.n()).done) {
                                                e.next = 37;
                                                break;
                                            }
                                            if (
                                                ((k = P(S.value, 2)),
                                                (x = k[0]),
                                                (E = k[1]),
                                                (j =
                                                    w &&
                                                    0 === ne.compare(E, w[1])),
                                                'highest' !== i || !j)
                                            ) {
                                                e.next = 17;
                                                break;
                                            }
                                            return e.abrupt('continue', 35);
                                        case 17:
                                            if (h(x)) {
                                                e.next = 23;
                                                break;
                                            }
                                            if (!s || j || !fe.isText(x)) {
                                                e.next = 22;
                                                break;
                                            }
                                            return e.abrupt('return');
                                        case 22:
                                            return e.abrupt('continue', 35);
                                        case 23:
                                            if ('lowest' !== i || !j) {
                                                e.next = 26;
                                                break;
                                            }
                                            return (
                                                (w = [x, E]),
                                                e.abrupt('continue', 35)
                                            );
                                        case 26:
                                            if (
                                                !(A =
                                                    'lowest' === i ? w : [x, E])
                                            ) {
                                                e.next = 34;
                                                break;
                                            }
                                            if (!s) {
                                                e.next = 32;
                                                break;
                                            }
                                            b.push(A), (e.next = 34);
                                            break;
                                        case 32:
                                            return (e.next = 34), A;
                                        case 34:
                                            w = [x, E];
                                        case 35:
                                            e.next = 12;
                                            break;
                                        case 37:
                                            e.next = 42;
                                            break;
                                        case 39:
                                            (e.prev = 39),
                                                (e.t0 = e.catch(10)),
                                                O.e(e.t0);
                                        case 42:
                                            return (
                                                (e.prev = 42),
                                                O.f(),
                                                e.finish(42)
                                            );
                                        case 45:
                                            if ('lowest' !== i || !w) {
                                                e.next = 52;
                                                break;
                                            }
                                            if (!s) {
                                                e.next = 50;
                                                break;
                                            }
                                            b.push(w), (e.next = 52);
                                            break;
                                        case 50:
                                            return (e.next = 52), w;
                                        case 52:
                                            if (!s) {
                                                e.next = 54;
                                                break;
                                            }
                                            return e.delegateYield(b, 't1', 54);
                                        case 54:
                                        case 'end':
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [[10, 39, 42, 45]],
                        );
                    }),
                    normalize: function(e) {
                        var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : {},
                            r = t.force,
                            n = void 0 !== r && r,
                            o = function(e) {
                                return N.get(e) || [];
                            };
                        if ($.isNormalizing(e)) {
                            if (n) {
                                var a = Array.from(Q.nodes(e), function(e) {
                                    return P(e, 2)[1];
                                });
                                N.set(e, a);
                            }
                            0 !== o(e).length &&
                                $.withoutNormalizing(e, function() {
                                    for (
                                        var t = 42 * o(e).length, r = 0;
                                        0 !== o(e).length;

                                    ) {
                                        if (r > t)
                                            throw new Error(
                                                '\n            Could not completely normalize the editor after '.concat(
                                                    t,
                                                    ' iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.\n          ',
                                                ),
                                            );
                                        var n = o(e).pop(),
                                            a = $.node(e, n);
                                        e.normalizeNode(a), r++;
                                    }
                                });
                        }
                    },
                    parent: function(e, t) {
                        var r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : {},
                            n = $.path(e, t, r),
                            o = ne.parent(n),
                            a = $.node(e, o);
                        return a;
                    },
                    path: function(e, t) {
                        var r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : {},
                            n = r.depth,
                            o = r.edge;
                        if (ne.isPath(t))
                            if ('start' === o) {
                                var a = Q.first(e, t),
                                    i = P(a, 2),
                                    c = i[1];
                                t = c;
                            } else if ('end' === o) {
                                var s = Q.last(e, t),
                                    u = P(s, 2),
                                    l = u[1];
                                t = l;
                            }
                        return (
                            se.isRange(t) &&
                                (t =
                                    'start' === o
                                        ? se.start(t)
                                        : 'end' === o
                                        ? se.end(t)
                                        : ne.common(
                                              t.anchor.path,
                                              t.focus.path,
                                          )),
                            ie.isPoint(t) && (t = t.path),
                            null != n && (t = t.slice(0, n)),
                            t
                        );
                    },
                    pathRef: function(e, t) {
                        var r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : {},
                            n = r.affinity,
                            o = void 0 === n ? 'forward' : n,
                            a = {
                                current: t,
                                affinity: o,
                                unref: function() {
                                    var t = a.current;
                                    return (
                                        $.pathRefs(e).delete(a),
                                        (a.current = null),
                                        t
                                    );
                                },
                            },
                            i = $.pathRefs(e);
                        return i.add(a), a;
                    },
                    pathRefs: function(e) {
                        var t = M.get(e);
                        return t || ((t = new Set()), M.set(e, t)), t;
                    },
                    point: function(e, t) {
                        var r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : {},
                            n = r.edge,
                            o = void 0 === n ? 'start' : n;
                        if (ne.isPath(t)) {
                            var a;
                            if ('end' === o) {
                                var i = Q.last(e, t),
                                    c = P(i, 2),
                                    s = c[1];
                                a = s;
                            } else {
                                var u = Q.first(e, t),
                                    l = P(u, 2),
                                    f = l[1];
                                a = f;
                            }
                            var d = Q.get(e, a);
                            if (!fe.isText(d))
                                throw new Error(
                                    'Cannot get the '
                                        .concat(
                                            o,
                                            ' point in the node at path [',
                                        )
                                        .concat(t, '] because it has no ')
                                        .concat(o, ' text node.'),
                                );
                            return {
                                path: a,
                                offset: 'end' === o ? d.text.length : 0,
                            };
                        }
                        if (se.isRange(t)) {
                            var h = se.edges(t),
                                p = P(h, 2),
                                v = p[0],
                                m = p[1];
                            return 'start' === o ? v : m;
                        }
                        return t;
                    },
                    pointRef: function(e, t) {
                        var r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : {},
                            n = r.affinity,
                            o = void 0 === n ? 'forward' : n,
                            a = {
                                current: t,
                                affinity: o,
                                unref: function() {
                                    var t = a.current;
                                    return (
                                        $.pointRefs(e).delete(a),
                                        (a.current = null),
                                        t
                                    );
                                },
                            },
                            i = $.pointRefs(e);
                        return i.add(a), a;
                    },
                    pointRefs: function(e) {
                        var t = _.get(e);
                        return t || ((t = new Set()), _.set(e, t)), t;
                    },
                    positions: regeneratorRuntime.mark(function e(t) {
                        var r,
                            n,
                            o,
                            a,
                            i,
                            c,
                            s,
                            u,
                            l,
                            f,
                            d,
                            h,
                            p,
                            v,
                            m,
                            y,
                            g,
                            b,
                            w,
                            O,
                            S,
                            k,
                            E,
                            j,
                            A,
                            C,
                            D,
                            F,
                            N = arguments;
                        return regeneratorRuntime.wrap(
                            function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (
                                                ((r =
                                                    N.length > 1 &&
                                                    void 0 !== N[1]
                                                        ? N[1]
                                                        : {}),
                                                (n = r.at),
                                                (o =
                                                    void 0 === n
                                                        ? t.selection
                                                        : n),
                                                (a = r.unit),
                                                (i =
                                                    void 0 === a
                                                        ? 'offset'
                                                        : a),
                                                (c = r.reverse),
                                                (s = void 0 !== c && c),
                                                o)
                                            ) {
                                                e.next = 4;
                                                break;
                                            }
                                            return e.abrupt('return');
                                        case 4:
                                            (u = $.range(t, o)),
                                                (l = se.edges(u)),
                                                (f = P(l, 2)),
                                                (d = f[0]),
                                                (h = f[1]),
                                                (p = s ? h : d),
                                                (v = ''),
                                                (m = 0),
                                                (y = 0),
                                                (g = null),
                                                (b = !1),
                                                (w = function() {
                                                    null == g &&
                                                        ((g =
                                                            'character' === i
                                                                ? L(v)
                                                                : 'word' === i
                                                                ? U(v)
                                                                : 'line' ===
                                                                      i ||
                                                                  'block' === i
                                                                ? v.length
                                                                : 1),
                                                        (v = v.slice(g))),
                                                        (y = s ? y - g : y + g),
                                                        (g =
                                                            (m -= g) >= 0
                                                                ? null
                                                                : 0 - m);
                                                }),
                                                (O = T(
                                                    $.nodes(t, {
                                                        at: o,
                                                        reverse: s,
                                                    }),
                                                )),
                                                (e.prev = 14),
                                                O.s();
                                        case 16:
                                            if ((S = O.n()).done) {
                                                e.next = 51;
                                                break;
                                            }
                                            if (
                                                ((k = P(S.value, 2)),
                                                (E = k[0]),
                                                (j = k[1]),
                                                !J.isElement(E))
                                            ) {
                                                e.next = 26;
                                                break;
                                            }
                                            if (!t.isVoid(E)) {
                                                e.next = 23;
                                                break;
                                            }
                                            return (e.next = 22), $.start(t, j);
                                        case 22:
                                            return e.abrupt('continue', 49);
                                        case 23:
                                            if (!t.isInline(E)) {
                                                e.next = 25;
                                                break;
                                            }
                                            return e.abrupt('continue', 49);
                                        case 25:
                                            $.hasInlines(t, E) &&
                                                ((A = ne.isAncestor(j, h.path)
                                                    ? h
                                                    : $.end(t, j)),
                                                (C = ne.isAncestor(j, d.path)
                                                    ? d
                                                    : $.start(t, j)),
                                                (D = $.string(t, {
                                                    anchor: C,
                                                    focus: A,
                                                })),
                                                (v = s
                                                    ? Object(x.reverse)(D)
                                                    : D),
                                                (b = !0));
                                        case 26:
                                            if (!fe.isText(E)) {
                                                e.next = 49;
                                                break;
                                            }
                                            if (
                                                ((F = ne.equals(j, p.path)),
                                                (m = E.text.length),
                                                (y = s ? m : 0),
                                                F &&
                                                    ((m = s
                                                        ? p.offset
                                                        : m - p.offset),
                                                    (y = p.offset)),
                                                !F && !b && 'offset' !== i)
                                            ) {
                                                e.next = 34;
                                                break;
                                            }
                                            return (
                                                (e.next = 34),
                                                { path: j, offset: y }
                                            );
                                        case 34:
                                            if ('' !== v) {
                                                e.next = 39;
                                                break;
                                            }
                                            return e.abrupt('break', 48);
                                        case 39:
                                            w();
                                        case 40:
                                            if (!(m >= 0)) {
                                                e.next = 45;
                                                break;
                                            }
                                            return (
                                                (e.next = 43),
                                                { path: j, offset: y }
                                            );
                                        case 43:
                                            e.next = 46;
                                            break;
                                        case 45:
                                            return e.abrupt('break', 48);
                                        case 46:
                                            e.next = 34;
                                            break;
                                        case 48:
                                            b = !1;
                                        case 49:
                                            e.next = 16;
                                            break;
                                        case 51:
                                            e.next = 56;
                                            break;
                                        case 53:
                                            (e.prev = 53),
                                                (e.t0 = e.catch(14)),
                                                O.e(e.t0);
                                        case 56:
                                            return (
                                                (e.prev = 56),
                                                O.f(),
                                                e.finish(56)
                                            );
                                        case 59:
                                        case 'end':
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [[14, 53, 56, 59]],
                        );
                    }),
                    previous: function(e) {
                        var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : {},
                            r = t.mode,
                            n = void 0 === r ? 'lowest' : r,
                            o = t.voids,
                            a = void 0 !== o && o,
                            i = t.match,
                            c = t.at,
                            s = void 0 === c ? e.selection : c;
                        if (s) {
                            var u = $.first(e, s),
                                l = P(u, 2),
                                f = l[1],
                                d = $.first(e, []),
                                h = P(d, 2),
                                p = h[1],
                                v = [f, p];
                            if (ne.isPath(s) && 0 === s.length)
                                throw new Error(
                                    'Cannot get the previous node from the root node!',
                                );
                            if (null == i)
                                if (ne.isPath(s)) {
                                    var m = $.parent(e, s),
                                        y = P(m, 1),
                                        g = y[0];
                                    i = function(e) {
                                        return g.children.includes(e);
                                    };
                                } else
                                    i = function() {
                                        return !0;
                                    };
                            var b = $.nodes(e, {
                                    reverse: !0,
                                    at: v,
                                    match: i,
                                    mode: n,
                                    voids: a,
                                }),
                                w = P(b, 2),
                                O = w[1];
                            return O;
                        }
                    },
                    range: function(e, t, r) {
                        return se.isRange(t) && !r
                            ? t
                            : {
                                  anchor: $.start(e, t),
                                  focus: $.end(e, r || t),
                              };
                    },
                    rangeRef: function(e, t) {
                        var r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : {},
                            n = r.affinity,
                            o = void 0 === n ? 'forward' : n,
                            a = {
                                current: t,
                                affinity: o,
                                unref: function() {
                                    var t = a.current;
                                    return (
                                        $.rangeRefs(e).delete(a),
                                        (a.current = null),
                                        t
                                    );
                                },
                            },
                            i = $.rangeRefs(e);
                        return i.add(a), a;
                    },
                    rangeRefs: function(e) {
                        var t = z.get(e);
                        return t || ((t = new Set()), z.set(e, t)), t;
                    },
                    removeMark: function(e, t) {
                        e.removeMark(t);
                    },
                    start: function(e, t) {
                        return $.point(e, t, { edge: 'start' });
                    },
                    string: function(e, t) {
                        var r,
                            n = $.range(e, t),
                            o = P(se.edges(n), 2),
                            a = o[0],
                            i = o[1],
                            c = '',
                            s = T($.nodes(e, { at: n, match: fe.isText }));
                        try {
                            for (s.s(); !(r = s.n()).done; ) {
                                var u = P(r.value, 2),
                                    l = u[0],
                                    f = u[1],
                                    d = l.text;
                                ne.equals(f, i.path) &&
                                    (d = d.slice(0, i.offset)),
                                    ne.equals(f, a.path) &&
                                        (d = d.slice(a.offset)),
                                    (c += d);
                            }
                        } catch (e) {
                            s.e(e);
                        } finally {
                            s.f();
                        }
                        return c;
                    },
                    transform: function(e, t) {
                        e.children = Object(k.a)(e.children);
                        var r = e.selection && Object(k.a)(e.selection);
                        switch (t.type) {
                            case 'insert_node':
                                var n = t.path,
                                    o = t.node,
                                    a = Q.parent(e, n),
                                    i = n[n.length - 1];
                                if ((a.children.splice(i, 0, o), r)) {
                                    var c,
                                        s = T(se.points(r));
                                    try {
                                        for (s.s(); !(c = s.n()).done; ) {
                                            var u = P(c.value, 2),
                                                l = u[0];
                                            r[u[1]] = ie.transform(l, t);
                                        }
                                    } catch (e) {
                                        s.e(e);
                                    } finally {
                                        s.f();
                                    }
                                }
                                break;
                            case 'insert_text':
                                var f = t.path,
                                    d = t.offset,
                                    h = t.text,
                                    p = Q.leaf(e, f),
                                    v = p.text.slice(0, d),
                                    m = p.text.slice(d);
                                if (((p.text = v + h + m), r)) {
                                    var y,
                                        g = T(se.points(r));
                                    try {
                                        for (g.s(); !(y = g.n()).done; ) {
                                            var b = P(y.value, 2),
                                                w = b[0];
                                            r[b[1]] = ie.transform(w, t);
                                        }
                                    } catch (e) {
                                        g.e(e);
                                    } finally {
                                        g.f();
                                    }
                                }
                                break;
                            case 'merge_node':
                                var O = t.path,
                                    S = Q.get(e, O),
                                    x = ne.previous(O),
                                    E = Q.get(e, x),
                                    A = Q.parent(e, O),
                                    C = O[O.length - 1];
                                if (fe.isText(S) && fe.isText(E))
                                    E.text += S.text;
                                else {
                                    if (fe.isText(S) || fe.isText(E))
                                        throw new Error(
                                            'Cannot apply a "merge_node" operation at path ['
                                                .concat(
                                                    O,
                                                    '] to nodes of different interaces: ',
                                                )
                                                .concat(S, ' ')
                                                .concat(E),
                                        );
                                    var D;
                                    (D = E.children).push.apply(
                                        D,
                                        j(S.children),
                                    );
                                }
                                if ((A.children.splice(C, 1), r)) {
                                    var F,
                                        N = T(se.points(r));
                                    try {
                                        for (N.s(); !(F = N.n()).done; ) {
                                            var R = P(F.value, 2),
                                                M = R[0];
                                            r[R[1]] = ie.transform(M, t);
                                        }
                                    } catch (e) {
                                        N.e(e);
                                    } finally {
                                        N.f();
                                    }
                                }
                                break;
                            case 'move_node':
                                var _ = t.path,
                                    z = t.newPath;
                                if (ne.isAncestor(_, z))
                                    throw new Error(
                                        'Cannot move a path ['
                                            .concat(_, '] to new path [')
                                            .concat(
                                                z,
                                                '] because the destination is inside itself.',
                                            ),
                                    );
                                var I = Q.get(e, _),
                                    H = Q.parent(e, _),
                                    B = _[_.length - 1];
                                H.children.splice(B, 1);
                                var L = ne.transform(_, t),
                                    U = Q.get(e, ne.parent(L)),
                                    W = L[L.length - 1];
                                if ((U.children.splice(W, 0, I), r)) {
                                    var V,
                                        q = T(se.points(r));
                                    try {
                                        for (q.s(); !(V = q.n()).done; ) {
                                            var Y = P(V.value, 2),
                                                K = Y[0];
                                            r[Y[1]] = ie.transform(K, t);
                                        }
                                    } catch (e) {
                                        q.e(e);
                                    } finally {
                                        q.f();
                                    }
                                }
                                break;
                            case 'remove_node':
                                var G = t.path,
                                    $ = G[G.length - 1];
                                if ((Q.parent(e, G).children.splice($, 1), r)) {
                                    var J,
                                        X = T(se.points(r));
                                    try {
                                        for (X.s(); !(J = X.n()).done; ) {
                                            var ee = P(J.value, 2),
                                                te = ee[0],
                                                re = ee[1],
                                                oe = ie.transform(te, t);
                                            if (null != r && null != oe)
                                                r[re] = oe;
                                            else {
                                                var ae,
                                                    ce = void 0,
                                                    ue = void 0,
                                                    le = T(Q.texts(e));
                                                try {
                                                    for (
                                                        le.s();
                                                        !(ae = le.n()).done;

                                                    ) {
                                                        var de = P(ae.value, 2),
                                                            he = de[0],
                                                            pe = de[1];
                                                        if (
                                                            -1 !==
                                                            ne.compare(pe, G)
                                                        ) {
                                                            ue = [he, pe];
                                                            break;
                                                        }
                                                        ce = [he, pe];
                                                    }
                                                } catch (e) {
                                                    le.e(e);
                                                } finally {
                                                    le.f();
                                                }
                                                ce
                                                    ? ((te.path = ce[1]),
                                                      (te.offset =
                                                          ce[0].text.length))
                                                    : ue
                                                    ? ((te.path = ue[1]),
                                                      (te.offset = 0))
                                                    : (r = null);
                                            }
                                        }
                                    } catch (e) {
                                        X.e(e);
                                    } finally {
                                        X.f();
                                    }
                                }
                                break;
                            case 'remove_text':
                                var ve = t.path,
                                    me = t.offset,
                                    ye = t.text,
                                    ge = Q.leaf(e, ve),
                                    be = ge.text.slice(0, me),
                                    we = ge.text.slice(me + ye.length);
                                if (((ge.text = be + we), r)) {
                                    var Oe,
                                        Se = T(se.points(r));
                                    try {
                                        for (Se.s(); !(Oe = Se.n()).done; ) {
                                            var ke = P(Oe.value, 2),
                                                xe = ke[0];
                                            r[ke[1]] = ie.transform(xe, t);
                                        }
                                    } catch (e) {
                                        Se.e(e);
                                    } finally {
                                        Se.f();
                                    }
                                }
                                break;
                            case 'set_node':
                                var Ee = t.path,
                                    je = t.newProperties;
                                if (0 === Ee.length)
                                    throw new Error(
                                        'Cannot set properties on the root node!',
                                    );
                                var Pe = Q.get(e, Ee);
                                for (var Te in je) {
                                    if ('children' === Te || 'text' === Te)
                                        throw new Error(
                                            'Cannot set the "'.concat(
                                                Te,
                                                '" property of nodes!',
                                            ),
                                        );
                                    var Ae = je[Te];
                                    null == Ae ? delete Pe[Te] : (Pe[Te] = Ae);
                                }
                                break;
                            case 'set_selection':
                                var Ce = t.newProperties;
                                if (null == Ce) r = Ce;
                                else if (null == r) {
                                    if (!se.isRange(Ce))
                                        throw new Error(
                                            'Cannot apply an incomplete "set_selection" operation properties '.concat(
                                                JSON.stringify(Ce),
                                                ' when there is no current selection.',
                                            ),
                                        );
                                    r = Ce;
                                } else Object.assign(r, Ce);
                                break;
                            case 'split_node':
                                var De = t.path,
                                    Fe = t.position,
                                    Ne = t.properties;
                                if (0 === De.length)
                                    throw new Error(
                                        'Cannot apply a "split_node" operation at path ['.concat(
                                            De,
                                            '] because the root node cannot be split.',
                                        ),
                                    );
                                var Re,
                                    Me = Q.get(e, De),
                                    _e = Q.parent(e, De),
                                    ze = De[De.length - 1];
                                if (fe.isText(Me)) {
                                    var Ie = Me.text.slice(0, Fe),
                                        He = Me.text.slice(Fe);
                                    (Me.text = Ie),
                                        (Re = Z({}, Me, {}, Ne, { text: He }));
                                } else {
                                    var Be = Me.children.slice(0, Fe),
                                        Le = Me.children.slice(Fe);
                                    (Me.children = Be),
                                        (Re = Z({}, Me, {}, Ne, {
                                            children: Le,
                                        }));
                                }
                                if ((_e.children.splice(ze + 1, 0, Re), r)) {
                                    var Ue,
                                        We = T(se.points(r));
                                    try {
                                        for (We.s(); !(Ue = We.n()).done; ) {
                                            var Ve = P(Ue.value, 2),
                                                qe = Ve[0];
                                            r[Ve[1]] = ie.transform(qe, t);
                                        }
                                    } catch (e) {
                                        We.e(e);
                                    } finally {
                                        We.f();
                                    }
                                }
                        }
                        (e.children = Object(k.b)(e.children)),
                            (e.selection = r
                                ? Object(k.c)(r)
                                    ? Object(k.b)(r)
                                    : r
                                : null);
                    },
                    unhangRange: function(e, t) {
                        var r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : {},
                            n = r.voids,
                            o = void 0 !== n && n,
                            a = se.edges(t),
                            i = P(a, 2),
                            c = i[0],
                            s = i[1];
                        if (
                            0 !== c.offset ||
                            0 !== s.offset ||
                            se.isCollapsed(t)
                        )
                            return t;
                        var u,
                            l = $.above(e, {
                                at: s,
                                match: function(t) {
                                    return $.isBlock(e, t);
                                },
                            }),
                            f = l ? l[1] : [],
                            d = $.start(e, []),
                            h = { anchor: d, focus: s },
                            p = !0,
                            v = T(
                                $.nodes(e, {
                                    at: h,
                                    match: fe.isText,
                                    reverse: !0,
                                    voids: o,
                                }),
                            );
                        try {
                            for (v.s(); !(u = v.n()).done; ) {
                                var m = P(u.value, 2),
                                    y = m[0],
                                    g = m[1];
                                if (p) p = !1;
                                else if ('' !== y.text || ne.isBefore(g, f)) {
                                    s = { path: g, offset: y.text.length };
                                    break;
                                }
                            }
                        } catch (e) {
                            v.e(e);
                        } finally {
                            v.f();
                        }
                        return { anchor: c, focus: s };
                    },
                    void: function(e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                        return $.above(
                            e,
                            Z({}, t, {
                                match: function(t) {
                                    return $.isVoid(e, t);
                                },
                            }),
                        );
                    },
                    withoutNormalizing: function(e, t) {
                        var r = $.isNormalizing(e);
                        R.set(e, !1), t(), R.set(e, r), $.normalize(e);
                    },
                },
                J = {
                    isElement: function(e) {
                        return (
                            S(e) && Q.isNodeList(e.children) && !$.isEditor(e)
                        );
                    },
                    isElementList: function(e) {
                        return (
                            Array.isArray(e) &&
                            (0 === e.length || J.isElement(e[0]))
                        );
                    },
                    matches: function(e, t) {
                        for (var r in t)
                            if ('children' !== r && e[r] !== t[r]) return !1;
                        return !0;
                    },
                },
                X = {
                    isSpan: function(e) {
                        return (
                            Array.isArray(e) &&
                            2 === e.length &&
                            e.every(ne.isPath)
                        );
                    },
                },
                Q = {
                    ancestor: function(e, t) {
                        var r = Q.get(e, t);
                        if (fe.isText(r))
                            throw new Error(
                                'Cannot get the ancestor node at path ['
                                    .concat(
                                        t,
                                        '] because it refers to a text node instead: ',
                                    )
                                    .concat(r),
                            );
                        return r;
                    },
                    ancestors: regeneratorRuntime.mark(function e(t, r) {
                        var n,
                            o,
                            a,
                            i,
                            c,
                            s,
                            u = arguments;
                        return regeneratorRuntime.wrap(
                            function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            (n =
                                                u.length > 2 && void 0 !== u[2]
                                                    ? u[2]
                                                    : {}),
                                                (o = T(ne.ancestors(r, n))),
                                                (e.prev = 2),
                                                o.s();
                                        case 4:
                                            if ((a = o.n()).done) {
                                                e.next = 12;
                                                break;
                                            }
                                            return (
                                                (i = a.value),
                                                (c = Q.ancestor(t, i)),
                                                (s = [c, i]),
                                                (e.next = 10),
                                                s
                                            );
                                        case 10:
                                            e.next = 4;
                                            break;
                                        case 12:
                                            e.next = 17;
                                            break;
                                        case 14:
                                            (e.prev = 14),
                                                (e.t0 = e.catch(2)),
                                                o.e(e.t0);
                                        case 17:
                                            return (
                                                (e.prev = 17),
                                                o.f(),
                                                e.finish(17)
                                            );
                                        case 20:
                                        case 'end':
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [[2, 14, 17, 20]],
                        );
                    }),
                    child: function(e, t) {
                        if (fe.isText(e))
                            throw new Error(
                                'Cannot get the child of a text node: '.concat(
                                    JSON.stringify(e),
                                ),
                            );
                        var r = e.children[t];
                        if (null == r)
                            throw new Error(
                                'Cannot get child at index `'
                                    .concat(t, '` in node: ')
                                    .concat(JSON.stringify(e)),
                            );
                        return r;
                    },
                    children: regeneratorRuntime.mark(function(e, t) {
                        var r,
                            n,
                            o,
                            a,
                            i,
                            c,
                            s,
                            u,
                            l = arguments;
                        return regeneratorRuntime.wrap(function(f) {
                            for (;;)
                                switch ((f.prev = f.next)) {
                                    case 0:
                                        (r =
                                            l.length > 2 && void 0 !== l[2]
                                                ? l[2]
                                                : {}),
                                            (n = r.reverse),
                                            (o = void 0 !== n && n),
                                            (a = Q.ancestor(e, t)),
                                            (i = a.children),
                                            (c = o ? i.length - 1 : 0);
                                    case 5:
                                        if (!(o ? c >= 0 : c < i.length)) {
                                            f.next = 13;
                                            break;
                                        }
                                        return (
                                            (s = Q.child(a, c)),
                                            (u = t.concat(c)),
                                            (f.next = 10),
                                            [s, u]
                                        );
                                    case 10:
                                        (c = o ? c - 1 : c + 1), (f.next = 5);
                                        break;
                                    case 13:
                                    case 'end':
                                        return f.stop();
                                }
                        }, i);
                    }),
                    common: function(e, t, r) {
                        var n = ne.common(t, r);
                        return [Q.get(e, n), n];
                    },
                    descendant: function(e, t) {
                        var r = Q.get(e, t);
                        if ($.isEditor(r))
                            throw new Error(
                                'Cannot get the descendant node at path ['
                                    .concat(
                                        t,
                                        '] because it refers to the root editor node instead: ',
                                    )
                                    .concat(r),
                            );
                        return r;
                    },
                    descendants: regeneratorRuntime.mark(function e(t) {
                        var r,
                            n,
                            o,
                            a,
                            i,
                            c,
                            s = arguments;
                        return regeneratorRuntime.wrap(
                            function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            (r =
                                                s.length > 1 && void 0 !== s[1]
                                                    ? s[1]
                                                    : {}),
                                                (n = T(Q.nodes(t, r))),
                                                (e.prev = 2),
                                                n.s();
                                        case 4:
                                            if ((o = n.n()).done) {
                                                e.next = 11;
                                                break;
                                            }
                                            if (
                                                ((a = P(o.value, 2)),
                                                (i = a[0]),
                                                0 === (c = a[1]).length)
                                            ) {
                                                e.next = 9;
                                                break;
                                            }
                                            return (e.next = 9), [i, c];
                                        case 9:
                                            e.next = 4;
                                            break;
                                        case 11:
                                            e.next = 16;
                                            break;
                                        case 13:
                                            (e.prev = 13),
                                                (e.t0 = e.catch(2)),
                                                n.e(e.t0);
                                        case 16:
                                            return (
                                                (e.prev = 16),
                                                n.f(),
                                                e.finish(16)
                                            );
                                        case 19:
                                        case 'end':
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [[2, 13, 16, 19]],
                        );
                    }),
                    elements: regeneratorRuntime.mark(function e(t) {
                        var r,
                            n,
                            o,
                            a,
                            i,
                            c,
                            s = arguments;
                        return regeneratorRuntime.wrap(
                            function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            (r =
                                                s.length > 1 && void 0 !== s[1]
                                                    ? s[1]
                                                    : {}),
                                                (n = T(Q.nodes(t, r))),
                                                (e.prev = 2),
                                                n.s();
                                        case 4:
                                            if ((o = n.n()).done) {
                                                e.next = 11;
                                                break;
                                            }
                                            if (
                                                ((a = P(o.value, 2)),
                                                (i = a[0]),
                                                (c = a[1]),
                                                !J.isElement(i))
                                            ) {
                                                e.next = 9;
                                                break;
                                            }
                                            return (e.next = 9), [i, c];
                                        case 9:
                                            e.next = 4;
                                            break;
                                        case 11:
                                            e.next = 16;
                                            break;
                                        case 13:
                                            (e.prev = 13),
                                                (e.t0 = e.catch(2)),
                                                n.e(e.t0);
                                        case 16:
                                            return (
                                                (e.prev = 16),
                                                n.f(),
                                                e.finish(16)
                                            );
                                        case 19:
                                        case 'end':
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [[2, 13, 16, 19]],
                        );
                    }),
                    first: function(e, t) {
                        for (
                            var r = t.slice(), n = Q.get(e, r);
                            n && !fe.isText(n) && 0 !== n.children.length;

                        )
                            (n = n.children[0]), r.push(0);
                        return [n, r];
                    },
                    fragment: function(e, t) {
                        if (fe.isText(e))
                            throw new Error(
                                'Cannot get a fragment starting from a root text node: '.concat(
                                    JSON.stringify(e),
                                ),
                            );
                        return Object(k.d)(e, function(e) {
                            var r,
                                n = P(se.edges(t), 2),
                                o = n[0],
                                a = n[1],
                                i = T(
                                    Q.nodes(e, {
                                        reverse: !0,
                                        pass: function(e) {
                                            var r = P(e, 2)[1];
                                            return !se.includes(t, r);
                                        },
                                    }),
                                );
                            try {
                                for (i.s(); !(r = i.n()).done; ) {
                                    var c = P(r.value, 2)[1];
                                    if (!se.includes(t, c)) {
                                        var s = Q.parent(e, c),
                                            u = c[c.length - 1];
                                        s.children.splice(u, 1);
                                    }
                                    if (ne.equals(c, a.path)) {
                                        var l = Q.leaf(e, c);
                                        l.text = l.text.slice(0, a.offset);
                                    }
                                    if (ne.equals(c, o.path)) {
                                        var f = Q.leaf(e, c);
                                        f.text = f.text.slice(o.offset);
                                    }
                                }
                            } catch (e) {
                                i.e(e);
                            } finally {
                                i.f();
                            }
                            delete e.selection;
                        }).children;
                    },
                    get: function(e, t) {
                        for (var r = e, n = 0; n < t.length; n++) {
                            var o = t[n];
                            if (fe.isText(r) || !r.children[o])
                                throw new Error(
                                    'Cannot find a descendant at path ['
                                        .concat(t, '] in node: ')
                                        .concat(JSON.stringify(e)),
                                );
                            r = r.children[o];
                        }
                        return r;
                    },
                    has: function(e, t) {
                        for (var r = e, n = 0; n < t.length; n++) {
                            var o = t[n];
                            if (fe.isText(r) || !r.children[o]) return !1;
                            r = r.children[o];
                        }
                        return !0;
                    },
                    isNode: function(e) {
                        return fe.isText(e) || J.isElement(e) || $.isEditor(e);
                    },
                    isNodeList: function(e) {
                        return (
                            Array.isArray(e) &&
                            (0 === e.length || Q.isNode(e[0]))
                        );
                    },
                    last: function(e, t) {
                        for (
                            var r = t.slice(), n = Q.get(e, r);
                            n && !fe.isText(n) && 0 !== n.children.length;

                        ) {
                            var o = n.children.length - 1;
                            (n = n.children[o]), r.push(o);
                        }
                        return [n, r];
                    },
                    leaf: function(e, t) {
                        var r = Q.get(e, t);
                        if (!fe.isText(r))
                            throw new Error(
                                'Cannot get the leaf node at path ['
                                    .concat(
                                        t,
                                        '] because it refers to a non-leaf node: ',
                                    )
                                    .concat(r),
                            );
                        return r;
                    },
                    levels: regeneratorRuntime.mark(function e(t, r) {
                        var n,
                            o,
                            a,
                            i,
                            c,
                            s = arguments;
                        return regeneratorRuntime.wrap(
                            function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            (n =
                                                s.length > 2 && void 0 !== s[2]
                                                    ? s[2]
                                                    : {}),
                                                (o = T(ne.levels(r, n))),
                                                (e.prev = 2),
                                                o.s();
                                        case 4:
                                            if ((a = o.n()).done) {
                                                e.next = 11;
                                                break;
                                            }
                                            return (
                                                (i = a.value),
                                                (c = Q.get(t, i)),
                                                (e.next = 9),
                                                [c, i]
                                            );
                                        case 9:
                                            e.next = 4;
                                            break;
                                        case 11:
                                            e.next = 16;
                                            break;
                                        case 13:
                                            (e.prev = 13),
                                                (e.t0 = e.catch(2)),
                                                o.e(e.t0);
                                        case 16:
                                            return (
                                                (e.prev = 16),
                                                o.f(),
                                                e.finish(16)
                                            );
                                        case 19:
                                        case 'end':
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [[2, 13, 16, 19]],
                        );
                    }),
                    matches: function(e, t) {
                        return (
                            (J.isElement(e) && J.matches(e, t)) ||
                            (fe.isText(e) && fe.matches(e, t))
                        );
                    },
                    nodes: regeneratorRuntime.mark(function e(t) {
                        var r,
                            n,
                            o,
                            a,
                            i,
                            c,
                            s,
                            u,
                            l,
                            f,
                            d,
                            h,
                            p,
                            v = arguments;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        (r =
                                            v.length > 1 && void 0 !== v[1]
                                                ? v[1]
                                                : {}),
                                            (n = r.pass),
                                            (o = r.reverse),
                                            (a = void 0 !== o && o),
                                            (i = r.from),
                                            (c = void 0 === i ? [] : i),
                                            (s = r.to),
                                            (u = new Set()),
                                            (l = []),
                                            (f = t);
                                    case 6:
                                        if (
                                            !s ||
                                            !(a
                                                ? ne.isBefore(l, s)
                                                : ne.isAfter(l, s))
                                        ) {
                                            e.next = 9;
                                            break;
                                        }
                                        return e.abrupt('break', 37);
                                    case 9:
                                        if (u.has(f)) {
                                            e.next = 12;
                                            break;
                                        }
                                        return (e.next = 12), [f, l];
                                    case 12:
                                        if (
                                            u.has(f) ||
                                            fe.isText(f) ||
                                            0 === f.children.length ||
                                            (null != n && !1 !== n([f, l]))
                                        ) {
                                            e.next = 19;
                                            break;
                                        }
                                        return (
                                            u.add(f),
                                            (d = a ? f.children.length - 1 : 0),
                                            ne.isAncestor(l, c) &&
                                                (d = c[l.length]),
                                            (l = l.concat(d)),
                                            (f = Q.get(t, l)),
                                            e.abrupt('continue', 6)
                                        );
                                    case 19:
                                        if (0 !== l.length) {
                                            e.next = 21;
                                            break;
                                        }
                                        return e.abrupt('break', 37);
                                    case 21:
                                        if (a) {
                                            e.next = 27;
                                            break;
                                        }
                                        if (((h = ne.next(l)), !Q.has(t, h))) {
                                            e.next = 27;
                                            break;
                                        }
                                        return (
                                            (l = h),
                                            (f = Q.get(t, l)),
                                            e.abrupt('continue', 6)
                                        );
                                    case 27:
                                        if (!a || 0 === l[l.length - 1]) {
                                            e.next = 32;
                                            break;
                                        }
                                        return (
                                            (p = ne.previous(l)),
                                            (l = p),
                                            (f = Q.get(t, l)),
                                            e.abrupt('continue', 6)
                                        );
                                    case 32:
                                        (l = ne.parent(l)),
                                            (f = Q.get(t, l)),
                                            u.add(f),
                                            (e.next = 6);
                                        break;
                                    case 37:
                                    case 'end':
                                        return e.stop();
                                }
                        }, e);
                    }),
                    parent: function(e, t) {
                        var r = ne.parent(t),
                            n = Q.get(e, r);
                        if (fe.isText(n))
                            throw new Error(
                                'Cannot get the parent of path ['.concat(
                                    t,
                                    '] because it does not exist in the root.',
                                ),
                            );
                        return n;
                    },
                    string: function(e) {
                        return fe.isText(e)
                            ? e.text
                            : e.children.map(Q.string).join('');
                    },
                    texts: regeneratorRuntime.mark(function e(t) {
                        var r,
                            n,
                            o,
                            a,
                            i,
                            c,
                            s = arguments;
                        return regeneratorRuntime.wrap(
                            function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            (r =
                                                s.length > 1 && void 0 !== s[1]
                                                    ? s[1]
                                                    : {}),
                                                (n = T(Q.nodes(t, r))),
                                                (e.prev = 2),
                                                n.s();
                                        case 4:
                                            if ((o = n.n()).done) {
                                                e.next = 11;
                                                break;
                                            }
                                            if (
                                                ((a = P(o.value, 2)),
                                                (i = a[0]),
                                                (c = a[1]),
                                                !fe.isText(i))
                                            ) {
                                                e.next = 9;
                                                break;
                                            }
                                            return (e.next = 9), [i, c];
                                        case 9:
                                            e.next = 4;
                                            break;
                                        case 11:
                                            e.next = 16;
                                            break;
                                        case 13:
                                            (e.prev = 13),
                                                (e.t0 = e.catch(2)),
                                                n.e(e.t0);
                                        case 16:
                                            return (
                                                (e.prev = 16),
                                                n.f(),
                                                e.finish(16)
                                            );
                                        case 19:
                                        case 'end':
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [[2, 13, 16, 19]],
                        );
                    }),
                };
            function ee(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t,
                            ).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? ee(Object(r), !0).forEach(function(t) {
                              D(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r),
                          )
                        : ee(Object(r)).forEach(function(t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t),
                              );
                          });
                }
                return e;
            }
            var re = {
                    isNodeOperation: function(e) {
                        return re.isOperation(e) && e.type.endsWith('_node');
                    },
                    isOperation: function(e) {
                        if (!S(e)) return !1;
                        switch (e.type) {
                            case 'insert_node':
                                return ne.isPath(e.path) && Q.isNode(e.node);
                            case 'insert_text':
                                return (
                                    'number' == typeof e.offset &&
                                    'string' == typeof e.text &&
                                    ne.isPath(e.path)
                                );
                            case 'merge_node':
                                return (
                                    'number' == typeof e.position &&
                                    ('number' == typeof e.target ||
                                        null === e.target) &&
                                    ne.isPath(e.path) &&
                                    S(e.properties)
                                );
                            case 'move_node':
                                return (
                                    ne.isPath(e.path) && ne.isPath(e.newPath)
                                );
                            case 'remove_node':
                                return ne.isPath(e.path) && Q.isNode(e.node);
                            case 'remove_text':
                                return (
                                    'number' == typeof e.offset &&
                                    'string' == typeof e.text &&
                                    ne.isPath(e.path)
                                );
                            case 'set_node':
                                return (
                                    ne.isPath(e.path) &&
                                    S(e.properties) &&
                                    S(e.newProperties)
                                );
                            case 'set_selection':
                                return (
                                    (null === e.properties &&
                                        se.isRange(e.newProperties)) ||
                                    (null === e.newProperties &&
                                        se.isRange(e.properties)) ||
                                    (S(e.properties) && S(e.newProperties))
                                );
                            case 'split_node':
                                return (
                                    ne.isPath(e.path) &&
                                    'number' == typeof e.position &&
                                    ('number' == typeof e.target ||
                                        null === e.target) &&
                                    S(e.properties)
                                );
                            default:
                                return !1;
                        }
                    },
                    isOperationList: function(e) {
                        return (
                            Array.isArray(e) &&
                            (0 === e.length || re.isOperation(e[0]))
                        );
                    },
                    isSelectionOperation: function(e) {
                        return (
                            re.isOperation(e) && e.type.endsWith('_selection')
                        );
                    },
                    isTextOperation: function(e) {
                        return re.isOperation(e) && e.type.endsWith('_text');
                    },
                    inverse: function(e) {
                        switch (e.type) {
                            case 'insert_node':
                                return te({}, e, { type: 'remove_node' });
                            case 'insert_text':
                                return te({}, e, { type: 'remove_text' });
                            case 'merge_node':
                                return te({}, e, {
                                    type: 'split_node',
                                    path: ne.previous(e.path),
                                });
                            case 'move_node':
                                var t = e.newPath,
                                    r = e.path;
                                return ne.equals(t, r)
                                    ? e
                                    : te({}, e, {
                                          path: ne.transform(r, e),
                                          newPath: ne.transform(ne.next(r), e),
                                      });
                            case 'remove_node':
                                return te({}, e, { type: 'insert_node' });
                            case 'remove_text':
                                return te({}, e, { type: 'insert_text' });
                            case 'set_node':
                                var n = e.properties;
                                return te({}, e, {
                                    properties: e.newProperties,
                                    newProperties: n,
                                });
                            case 'set_selection':
                                var o = e.properties,
                                    a = e.newProperties;
                                return te(
                                    {},
                                    e,
                                    null == o
                                        ? { properties: a, newProperties: null }
                                        : null == a
                                        ? { properties: null, newProperties: o }
                                        : { properties: a, newProperties: o },
                                );
                            case 'split_node':
                                return te({}, e, {
                                    type: 'merge_node',
                                    path: ne.next(e.path),
                                });
                        }
                    },
                },
                ne = {
                    ancestors: function(e) {
                        var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : {},
                            r = t.reverse,
                            n = void 0 !== r && r,
                            o = ne.levels(e, t);
                        return (o = n ? o.slice(1) : o.slice(0, -1));
                    },
                    common: function(e, t) {
                        for (
                            var r = [], n = 0;
                            n < e.length && n < t.length;
                            n++
                        ) {
                            var o = e[n];
                            if (o !== t[n]) break;
                            r.push(o);
                        }
                        return r;
                    },
                    compare: function(e, t) {
                        for (
                            var r = Math.min(e.length, t.length), n = 0;
                            n < r;
                            n++
                        ) {
                            if (e[n] < t[n]) return -1;
                            if (e[n] > t[n]) return 1;
                        }
                        return 0;
                    },
                    endsAfter: function(e, t) {
                        var r = e.length - 1,
                            n = e.slice(0, r),
                            o = t.slice(0, r),
                            a = e[r],
                            i = t[r];
                        return ne.equals(n, o) && a > i;
                    },
                    endsAt: function(e, t) {
                        var r = e.length,
                            n = e.slice(0, r),
                            o = t.slice(0, r);
                        return ne.equals(n, o);
                    },
                    endsBefore: function(e, t) {
                        var r = e.length - 1,
                            n = e.slice(0, r),
                            o = t.slice(0, r),
                            a = e[r],
                            i = t[r];
                        return ne.equals(n, o) && a < i;
                    },
                    equals: function(e, t) {
                        return (
                            e.length === t.length &&
                            e.every(function(e, r) {
                                return e === t[r];
                            })
                        );
                    },
                    isAfter: function(e, t) {
                        return 1 === ne.compare(e, t);
                    },
                    isAncestor: function(e, t) {
                        return e.length < t.length && 0 === ne.compare(e, t);
                    },
                    isBefore: function(e, t) {
                        return -1 === ne.compare(e, t);
                    },
                    isChild: function(e, t) {
                        return (
                            e.length === t.length + 1 && 0 === ne.compare(e, t)
                        );
                    },
                    isCommon: function(e, t) {
                        return e.length <= t.length && 0 === ne.compare(e, t);
                    },
                    isDescendant: function(e, t) {
                        return e.length > t.length && 0 === ne.compare(e, t);
                    },
                    isParent: function(e, t) {
                        return (
                            e.length + 1 === t.length && 0 === ne.compare(e, t)
                        );
                    },
                    isPath: function(e) {
                        return (
                            Array.isArray(e) &&
                            (0 === e.length || 'number' == typeof e[0])
                        );
                    },
                    isSibling: function(e, t) {
                        if (e.length !== t.length) return !1;
                        var r = e.slice(0, -1),
                            n = t.slice(0, -1);
                        return (
                            e[e.length - 1] !== t[t.length - 1] &&
                            ne.equals(r, n)
                        );
                    },
                    levels: function(e) {
                        for (
                            var t =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : {},
                                r = t.reverse,
                                n = void 0 !== r && r,
                                o = [],
                                a = 0;
                            a <= e.length;
                            a++
                        )
                            o.push(e.slice(0, a));
                        return n && o.reverse(), o;
                    },
                    next: function(e) {
                        if (0 === e.length)
                            throw new Error(
                                'Cannot get the next path of a root path ['.concat(
                                    e,
                                    '], because it has no next index.',
                                ),
                            );
                        var t = e[e.length - 1];
                        return e.slice(0, -1).concat(t + 1);
                    },
                    parent: function(e) {
                        if (0 === e.length)
                            throw new Error(
                                'Cannot get the parent path of the root path ['.concat(
                                    e,
                                    '].',
                                ),
                            );
                        return e.slice(0, -1);
                    },
                    previous: function(e) {
                        if (0 === e.length)
                            throw new Error(
                                'Cannot get the previous path of a root path ['.concat(
                                    e,
                                    '], because it has no previous index.',
                                ),
                            );
                        var t = e[e.length - 1];
                        if (t <= 0)
                            throw new Error(
                                'Cannot get the previous path of a first child path ['.concat(
                                    e,
                                    '] because it would result in a negative index.',
                                ),
                            );
                        return e.slice(0, -1).concat(t - 1);
                    },
                    relative: function(e, t) {
                        if (!ne.isAncestor(t, e) && !ne.equals(e, t))
                            throw new Error(
                                'Cannot get the relative path of ['
                                    .concat(e, '] inside ancestor [')
                                    .concat(
                                        t,
                                        '], because it is not above or equal to the path.',
                                    ),
                            );
                        return e.slice(t.length);
                    },
                    transform: function(e, t) {
                        var r =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                        return Object(k.d)(e, function(n) {
                            var o = r.affinity,
                                a = void 0 === o ? 'forward' : o;
                            if (0 !== e.length)
                                switch (t.type) {
                                    case 'insert_node':
                                        var i = t.path;
                                        (ne.equals(i, n) ||
                                            ne.endsBefore(i, n) ||
                                            ne.isAncestor(i, n)) &&
                                            (n[i.length - 1] += 1);
                                        break;
                                    case 'remove_node':
                                        var c = t.path;
                                        if (
                                            ne.equals(c, n) ||
                                            ne.isAncestor(c, n)
                                        )
                                            return null;
                                        ne.endsBefore(c, n) &&
                                            (n[c.length - 1] -= 1);
                                        break;
                                    case 'merge_node':
                                        var s = t.path,
                                            u = t.position;
                                        ne.equals(s, n) || ne.endsBefore(s, n)
                                            ? (n[s.length - 1] -= 1)
                                            : ne.isAncestor(s, n) &&
                                              ((n[s.length - 1] -= 1),
                                              (n[s.length] += u));
                                        break;
                                    case 'split_node':
                                        var l = t.path,
                                            f = t.position;
                                        if (ne.equals(l, n)) {
                                            if ('forward' === a)
                                                n[n.length - 1] += 1;
                                            else if ('backward' !== a)
                                                return null;
                                        } else
                                            ne.endsBefore(l, n)
                                                ? (n[l.length - 1] += 1)
                                                : ne.isAncestor(l, n) &&
                                                  e[l.length] >= f &&
                                                  ((n[l.length - 1] += 1),
                                                  (n[l.length] -= f));
                                        break;
                                    case 'move_node':
                                        var d = t.path,
                                            h = t.newPath;
                                        if (ne.equals(d, h)) return;
                                        if (
                                            ne.isAncestor(d, n) ||
                                            ne.equals(d, n)
                                        ) {
                                            var p = h.slice();
                                            if (
                                                ne.endsBefore(d, h) &&
                                                d.length < h.length
                                            )
                                                p[
                                                    Math.min(
                                                        h.length,
                                                        d.length,
                                                    ) - 1
                                                ] -= 1;
                                            return p.concat(n.slice(d.length));
                                        }
                                        ne.endsBefore(h, n) ||
                                        ne.equals(h, n) ||
                                        ne.isAncestor(h, n)
                                            ? (ne.endsBefore(d, n) &&
                                                  (n[d.length - 1] -= 1),
                                              (n[h.length - 1] += 1))
                                            : ne.endsBefore(d, n) &&
                                              (ne.equals(h, n) &&
                                                  (n[h.length - 1] += 1),
                                              (n[d.length - 1] -= 1));
                                }
                        });
                    },
                };
            function oe(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t,
                            ).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function ae(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? oe(Object(r), !0).forEach(function(t) {
                              D(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r),
                          )
                        : oe(Object(r)).forEach(function(t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t),
                              );
                          });
                }
                return e;
            }
            var ie = {
                compare: function(e, t) {
                    var r = ne.compare(e.path, t.path);
                    return 0 === r
                        ? e.offset < t.offset
                            ? -1
                            : e.offset > t.offset
                            ? 1
                            : 0
                        : r;
                },
                isAfter: function(e, t) {
                    return 1 === ie.compare(e, t);
                },
                isBefore: function(e, t) {
                    return -1 === ie.compare(e, t);
                },
                equals: function(e, t) {
                    return e.offset === t.offset && ne.equals(e.path, t.path);
                },
                isPoint: function(e) {
                    return (
                        S(e) && 'number' == typeof e.offset && ne.isPath(e.path)
                    );
                },
                transform: function(e, t) {
                    var r =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {};
                    return Object(k.d)(e, function(e) {
                        var n = r.affinity,
                            o = void 0 === n ? 'forward' : n,
                            a = e.path,
                            i = e.offset;
                        switch (t.type) {
                            case 'insert_node':
                            case 'move_node':
                                e.path = ne.transform(a, t, r);
                                break;
                            case 'insert_text':
                                ne.equals(t.path, a) &&
                                    t.offset <= i &&
                                    (e.offset += t.text.length);
                                break;
                            case 'merge_node':
                                ne.equals(t.path, a) &&
                                    (e.offset += t.position),
                                    (e.path = ne.transform(a, t, r));
                                break;
                            case 'remove_text':
                                ne.equals(t.path, a) &&
                                    t.offset <= i &&
                                    (e.offset -= Math.min(
                                        i - t.offset,
                                        t.text.length,
                                    ));
                                break;
                            case 'remove_node':
                                if (
                                    ne.equals(t.path, a) ||
                                    ne.isAncestor(t.path, a)
                                )
                                    return null;
                                e.path = ne.transform(a, t, r);
                                break;
                            case 'split_node':
                                if (ne.equals(t.path, a)) {
                                    if (t.position === i && null == o)
                                        return null;
                                    (t.position < i ||
                                        (t.position === i &&
                                            'forward' === o)) &&
                                        ((e.offset -= t.position),
                                        (e.path = ne.transform(
                                            a,
                                            t,
                                            ae({}, r, { affinity: 'forward' }),
                                        )));
                                } else e.path = ne.transform(a, t, r);
                        }
                    });
                },
            };
            function ce(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t,
                            ).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            var se = {
                edges: function(e) {
                    var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                        r = t.reverse,
                        n = void 0 !== r && r,
                        o = e.anchor,
                        a = e.focus;
                    return se.isBackward(e) === n ? [o, a] : [a, o];
                },
                end: function(e) {
                    var t = P(se.edges(e), 2)[1];
                    return t;
                },
                equals: function(e, t) {
                    return (
                        ie.equals(e.anchor, t.anchor) &&
                        ie.equals(e.focus, t.focus)
                    );
                },
                includes: function(e, t) {
                    if (se.isRange(t)) {
                        if (se.includes(e, t.anchor) || se.includes(e, t.focus))
                            return !0;
                        var r = P(se.edges(e), 2),
                            n = r[0],
                            o = r[1],
                            a = P(se.edges(t), 2),
                            i = a[0],
                            c = a[1];
                        return ie.isBefore(n, i) && ie.isAfter(o, c);
                    }
                    var s = P(se.edges(e), 2),
                        u = s[0],
                        l = s[1],
                        f = !1,
                        d = !1;
                    return (
                        ie.isPoint(t)
                            ? ((f = ie.compare(t, u) >= 0),
                              (d = ie.compare(t, l) <= 0))
                            : ((f = ne.compare(t, u.path) >= 0),
                              (d = ne.compare(t, l.path) <= 0)),
                        f && d
                    );
                },
                intersection: function(e, t) {
                    var r = F(e, ['anchor', 'focus']),
                        n = P(se.edges(e), 2),
                        o = n[0],
                        a = n[1],
                        i = P(se.edges(t), 2),
                        c = i[0],
                        s = i[1],
                        u = ie.isBefore(o, c) ? c : o,
                        l = ie.isBefore(a, s) ? a : s;
                    return ie.isBefore(l, u)
                        ? null
                        : (function(e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r =
                                      null != arguments[t] ? arguments[t] : {};
                                  t % 2
                                      ? ce(Object(r), !0).forEach(function(t) {
                                            D(e, t, r[t]);
                                        })
                                      : Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(
                                            e,
                                            Object.getOwnPropertyDescriptors(r),
                                        )
                                      : ce(Object(r)).forEach(function(t) {
                                            Object.defineProperty(
                                                e,
                                                t,
                                                Object.getOwnPropertyDescriptor(
                                                    r,
                                                    t,
                                                ),
                                            );
                                        });
                              }
                              return e;
                          })({ anchor: u, focus: l }, r);
                },
                isBackward: function(e) {
                    var t = e.anchor,
                        r = e.focus;
                    return ie.isAfter(t, r);
                },
                isCollapsed: function(e) {
                    var t = e.anchor,
                        r = e.focus;
                    return ie.equals(t, r);
                },
                isExpanded: function(e) {
                    return !se.isCollapsed(e);
                },
                isForward: function(e) {
                    return !se.isBackward(e);
                },
                isRange: function(e) {
                    return S(e) && ie.isPoint(e.anchor) && ie.isPoint(e.focus);
                },
                points: regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), [t.anchor, 'anchor'];
                                case 2:
                                    return (e.next = 4), [t.focus, 'focus'];
                                case 4:
                                case 'end':
                                    return e.stop();
                            }
                    }, e);
                }),
                start: function(e) {
                    var t = P(se.edges(e), 1)[0];
                    return t;
                },
                transform: function(e, t, r) {
                    var n,
                        o,
                        a = r.affinity,
                        i = void 0 === a ? 'inward' : a;
                    return (
                        'inward' === i
                            ? se.isForward(e)
                                ? ((n = 'forward'), (o = 'backward'))
                                : ((n = 'backward'), (o = 'forward'))
                            : 'outward' === i
                            ? se.isForward(e)
                                ? ((n = 'backward'), (o = 'forward'))
                                : ((n = 'forward'), (o = 'backward'))
                            : ((n = i), (o = i)),
                        Object(k.d)(e, function(e) {
                            var r = ie.transform(e.anchor, t, { affinity: n }),
                                a = ie.transform(e.focus, t, { affinity: o });
                            if (!r || !a) return null;
                            (e.anchor = r), (e.focus = a);
                        })
                    );
                },
            };
            function ue(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t,
                            ).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function le(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? ue(Object(r), !0).forEach(function(t) {
                              D(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r),
                          )
                        : ue(Object(r)).forEach(function(t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t),
                              );
                          });
                }
                return e;
            }
            var fe = {
                equals: function(e, t) {
                    var r =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {},
                        n = r.loose,
                        o = void 0 !== n && n;
                    for (var a in e)
                        if ((!o || 'text' !== a) && e[a] !== t[a]) return !1;
                    for (var i in t)
                        if ((!o || 'text' !== i) && e[i] !== t[i]) return !1;
                    return !0;
                },
                isText: function(e) {
                    return S(e) && 'string' == typeof e.text;
                },
                isTextList: function(e) {
                    return (
                        Array.isArray(e) && (0 === e.length || fe.isText(e[0]))
                    );
                },
                matches: function(e, t) {
                    for (var r in t)
                        if ('text' !== r && e[r] !== t[r]) return !1;
                    return !0;
                },
                decorations: function(e, t) {
                    var r,
                        n = [le({}, e)],
                        o = T(t);
                    try {
                        for (o.s(); !(r = o.n()).done; ) {
                            var a,
                                i = r.value,
                                c = F(i, ['anchor', 'focus']),
                                s = P(se.edges(i), 2),
                                u = s[0],
                                l = s[1],
                                f = [],
                                d = 0,
                                h = T(n);
                            try {
                                for (h.s(); !(a = h.n()).done; ) {
                                    var p = a.value,
                                        v = p.text.length,
                                        m = d;
                                    if (
                                        ((d += v),
                                        u.offset <= m && l.offset >= m + v)
                                    )
                                        Object.assign(p, c), f.push(p);
                                    else if (
                                        u.offset > m + v ||
                                        l.offset < m ||
                                        (l.offset === m && 0 !== m)
                                    )
                                        f.push(p);
                                    else {
                                        var y = p,
                                            g = void 0,
                                            b = void 0;
                                        if (l.offset < m + v) {
                                            var w = l.offset - m;
                                            (b = le({}, y, {
                                                text: y.text.slice(w),
                                            })),
                                                (y = le({}, y, {
                                                    text: y.text.slice(0, w),
                                                }));
                                        }
                                        if (u.offset > m) {
                                            var O = u.offset - m;
                                            (g = le({}, y, {
                                                text: y.text.slice(0, O),
                                            })),
                                                (y = le({}, y, {
                                                    text: y.text.slice(O),
                                                }));
                                        }
                                        Object.assign(y, c),
                                            g && f.push(g),
                                            f.push(y),
                                            b && f.push(b);
                                    }
                                }
                            } catch (e) {
                                h.e(e);
                            } finally {
                                h.f();
                            }
                            n = f;
                        }
                    } catch (e) {
                        o.e(e);
                    } finally {
                        o.f();
                    }
                    return n;
                },
            };
            function de(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t,
                            ).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function he(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? de(Object(r), !0).forEach(function(t) {
                              D(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r),
                          )
                        : de(Object(r)).forEach(function(t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t),
                              );
                          });
                }
                return e;
            }
            function pe(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t,
                            ).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function ve(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? pe(Object(r), !0).forEach(function(t) {
                              D(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r),
                          )
                        : pe(Object(r)).forEach(function(t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t),
                              );
                          });
                }
                return e;
            }
            var me = {
                    insertNodes: function(e, t) {
                        var r =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                        $.withoutNormalizing(e, function() {
                            var n = r.hanging,
                                o = void 0 !== n && n,
                                a = r.voids,
                                i = void 0 !== a && a,
                                c = r.mode,
                                s = void 0 === c ? 'lowest' : c,
                                u = r.at,
                                l = r.match,
                                f = r.select;
                            if ((Q.isNode(t) && (t = [t]), 0 !== t.length)) {
                                var d = P(t, 1)[0];
                                if (
                                    (u ||
                                        ((u = e.selection
                                            ? e.selection
                                            : e.children.length > 0
                                            ? $.end(e, [])
                                            : [0]),
                                        (f = !0)),
                                    null == f && (f = !1),
                                    se.isRange(u))
                                )
                                    if (
                                        (o || (u = $.unhangRange(e, u)),
                                        se.isCollapsed(u))
                                    )
                                        u = u.anchor;
                                    else {
                                        var h = P(se.edges(u), 2)[1],
                                            p = $.pointRef(e, h);
                                        Oe.delete(e, { at: u }),
                                            (u = p.unref());
                                    }
                                if (ie.isPoint(u)) {
                                    null == l &&
                                        (l = fe.isText(d)
                                            ? function(e) {
                                                  return fe.isText(e);
                                              }
                                            : e.isInline(d)
                                            ? function(t) {
                                                  return (
                                                      fe.isText(t) ||
                                                      $.isInline(e, t)
                                                  );
                                              }
                                            : function(t) {
                                                  return $.isBlock(e, t);
                                              });
                                    var v = P(
                                        $.nodes(e, {
                                            at: u.path,
                                            match: l,
                                            mode: s,
                                            voids: i,
                                        }),
                                        1,
                                    )[0];
                                    if (!v) return;
                                    var m = P(v, 2)[1],
                                        y = $.pathRef(e, m),
                                        g = $.isEnd(e, u, m);
                                    Oe.splitNodes(e, {
                                        at: u,
                                        match: l,
                                        mode: s,
                                        voids: i,
                                    });
                                    var b = y.unref();
                                    u = g ? ne.next(b) : b;
                                }
                                var w = ne.parent(u),
                                    O = u[u.length - 1];
                                if (i || !$.void(e, { at: w })) {
                                    var S,
                                        k = T(t);
                                    try {
                                        for (k.s(); !(S = k.n()).done; ) {
                                            var x = S.value,
                                                E = w.concat(O);
                                            O++,
                                                e.apply({
                                                    type: 'insert_node',
                                                    path: E,
                                                    node: x,
                                                });
                                        }
                                    } catch (e) {
                                        k.e(e);
                                    } finally {
                                        k.f();
                                    }
                                    if (f) {
                                        var j = $.end(e, u);
                                        j && Oe.select(e, j);
                                    }
                                }
                            }
                        });
                    },
                    liftNodes: function(e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                        $.withoutNormalizing(e, function() {
                            var r = t.at,
                                n = void 0 === r ? e.selection : r,
                                o = t.mode,
                                a = void 0 === o ? 'lowest' : o,
                                i = t.voids,
                                c = void 0 !== i && i,
                                s = t.match;
                            if (
                                (null == s &&
                                    (s = ne.isPath(n)
                                        ? ge(e, n)
                                        : function(t) {
                                              return $.isBlock(e, t);
                                          }),
                                n)
                            )
                                for (
                                    var u = $.nodes(e, {
                                            at: n,
                                            match: s,
                                            mode: a,
                                            voids: c,
                                        }),
                                        l = 0,
                                        f = Array.from(u, function(t) {
                                            var r = P(t, 2)[1];
                                            return $.pathRef(e, r);
                                        });
                                    l < f.length;
                                    l++
                                ) {
                                    var d = f[l].unref();
                                    if (d.length < 2)
                                        throw new Error(
                                            'Cannot lift node at a path ['.concat(
                                                d,
                                                '] because it has a depth of less than `2`.',
                                            ),
                                        );
                                    var h = P($.node(e, ne.parent(d)), 2),
                                        p = h[0],
                                        v = h[1],
                                        m = d[d.length - 1],
                                        y = p.children.length;
                                    if (1 === y) {
                                        var g = ne.next(v);
                                        Oe.moveNodes(e, {
                                            at: d,
                                            to: g,
                                            voids: c,
                                        }),
                                            Oe.removeNodes(e, {
                                                at: v,
                                                voids: c,
                                            });
                                    } else if (0 === m)
                                        Oe.moveNodes(e, {
                                            at: d,
                                            to: v,
                                            voids: c,
                                        });
                                    else if (m === y - 1) {
                                        var b = ne.next(v);
                                        Oe.moveNodes(e, {
                                            at: d,
                                            to: b,
                                            voids: c,
                                        });
                                    } else {
                                        var w = ne.next(d),
                                            O = ne.next(v);
                                        Oe.splitNodes(e, { at: w, voids: c }),
                                            Oe.moveNodes(e, {
                                                at: d,
                                                to: O,
                                                voids: c,
                                            });
                                    }
                                }
                        });
                    },
                    mergeNodes: function(e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                        $.withoutNormalizing(e, function() {
                            var r = t.match,
                                n = t.at,
                                o = void 0 === n ? e.selection : n,
                                a = t.hanging,
                                i = void 0 !== a && a,
                                c = t.voids,
                                s = void 0 !== c && c,
                                u = t.mode,
                                l = void 0 === u ? 'lowest' : u;
                            if (o) {
                                if (null == r)
                                    if (ne.isPath(o)) {
                                        var f = P($.parent(e, o), 1)[0];
                                        r = function(e) {
                                            return f.children.includes(e);
                                        };
                                    } else
                                        r = function(t) {
                                            return $.isBlock(e, t);
                                        };
                                if (
                                    (!i &&
                                        se.isRange(o) &&
                                        (o = $.unhangRange(e, o)),
                                    se.isRange(o))
                                )
                                    if (se.isCollapsed(o)) o = o.anchor;
                                    else {
                                        var d = P(se.edges(o), 2)[1],
                                            h = $.pointRef(e, d);
                                        Oe.delete(e, { at: o }),
                                            (o = h.unref()),
                                            null == t.at && Oe.select(e, o);
                                    }
                                var p = P(
                                        $.nodes(e, {
                                            at: o,
                                            match: r,
                                            voids: s,
                                            mode: l,
                                        }),
                                        1,
                                    )[0],
                                    v = $.previous(e, {
                                        at: o,
                                        match: r,
                                        voids: s,
                                        mode: l,
                                    });
                                if (p && v) {
                                    var m = P(p, 2),
                                        y = m[0],
                                        g = m[1],
                                        b = P(v, 2),
                                        w = b[0],
                                        O = b[1];
                                    if (0 !== g.length && 0 !== O.length) {
                                        var S,
                                            k,
                                            x = ne.next(O),
                                            E = ne.common(g, O),
                                            j = ne.isSibling(g, O),
                                            T = Array.from(
                                                $.levels(e, { at: g }),
                                                function(e) {
                                                    return P(e, 1)[0];
                                                },
                                            )
                                                .slice(E.length)
                                                .slice(0, -1),
                                            A = $.above(e, {
                                                at: g,
                                                mode: 'highest',
                                                match: function(e) {
                                                    return (
                                                        T.includes(e) &&
                                                        J.isElement(e) &&
                                                        1 === e.children.length
                                                    );
                                                },
                                            }),
                                            C = A && $.pathRef(e, A[1]);
                                        if (fe.isText(y) && fe.isText(w)) {
                                            var D = F(y, ['text']);
                                            (k = w.text.length), (S = D);
                                        } else {
                                            if (
                                                !J.isElement(y) ||
                                                !J.isElement(w)
                                            )
                                                throw new Error(
                                                    'Cannot merge the node at path ['
                                                        .concat(
                                                            g,
                                                            '] with the previous sibling because it is not the same kind: ',
                                                        )
                                                        .concat(
                                                            JSON.stringify(y),
                                                            ' ',
                                                        )
                                                        .concat(
                                                            JSON.stringify(w),
                                                        ),
                                                );
                                            D = F(y, ['children']);
                                            (k = w.children.length), (S = D);
                                        }
                                        j ||
                                            Oe.moveNodes(e, {
                                                at: g,
                                                to: x,
                                                voids: s,
                                            }),
                                            C &&
                                                Oe.removeNodes(e, {
                                                    at: C.current,
                                                    voids: s,
                                                }),
                                            (J.isElement(w) &&
                                                $.isEmpty(e, w)) ||
                                            (fe.isText(w) && '' === w.text)
                                                ? Oe.removeNodes(e, {
                                                      at: O,
                                                      voids: s,
                                                  })
                                                : e.apply({
                                                      type: 'merge_node',
                                                      path: x,
                                                      position: k,
                                                      target: null,
                                                      properties: S,
                                                  }),
                                            C && C.unref();
                                    }
                                }
                            }
                        });
                    },
                    moveNodes: function(e, t) {
                        $.withoutNormalizing(e, function() {
                            var r = t.to,
                                n = t.at,
                                o = void 0 === n ? e.selection : n,
                                a = t.mode,
                                i = void 0 === a ? 'lowest' : a,
                                c = t.voids,
                                s = void 0 !== c && c,
                                u = t.match;
                            if (o) {
                                null == u &&
                                    (u = ne.isPath(o)
                                        ? ge(e, o)
                                        : function(t) {
                                              return $.isBlock(e, t);
                                          });
                                for (
                                    var l = $.pathRef(e, r),
                                        f = $.nodes(e, {
                                            at: o,
                                            match: u,
                                            mode: i,
                                            voids: s,
                                        }),
                                        d = 0,
                                        h = Array.from(f, function(t) {
                                            var r = P(t, 2)[1];
                                            return $.pathRef(e, r);
                                        });
                                    d < h.length;
                                    d++
                                ) {
                                    var p = h[d].unref(),
                                        v = l.current;
                                    0 !== p.length &&
                                        e.apply({
                                            type: 'move_node',
                                            path: p,
                                            newPath: v,
                                        });
                                }
                                l.unref();
                            }
                        });
                    },
                    removeNodes: function(e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                        $.withoutNormalizing(e, function() {
                            var r = t.hanging,
                                n = void 0 !== r && r,
                                o = t.voids,
                                a = void 0 !== o && o,
                                i = t.mode,
                                c = void 0 === i ? 'lowest' : i,
                                s = t.at,
                                u = void 0 === s ? e.selection : s,
                                l = t.match;
                            if (u) {
                                null == l &&
                                    (l = ne.isPath(u)
                                        ? ge(e, u)
                                        : function(t) {
                                              return $.isBlock(e, t);
                                          }),
                                    !n &&
                                        se.isRange(u) &&
                                        (u = $.unhangRange(e, u));
                                for (
                                    var f = $.nodes(e, {
                                            at: u,
                                            match: l,
                                            mode: c,
                                            voids: a,
                                        }),
                                        d = 0,
                                        h = Array.from(f, function(t) {
                                            var r = P(t, 2)[1];
                                            return $.pathRef(e, r);
                                        });
                                    d < h.length;
                                    d++
                                ) {
                                    var p = h[d].unref();
                                    if (p) {
                                        var v = P($.node(e, p), 1)[0];
                                        e.apply({
                                            type: 'remove_node',
                                            path: p,
                                            node: v,
                                        });
                                    }
                                }
                            }
                        });
                    },
                    setNodes: function(e, t) {
                        var r =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                        $.withoutNormalizing(e, function() {
                            var n = r.match,
                                o = r.at,
                                a = void 0 === o ? e.selection : o,
                                i = r.hanging,
                                c = void 0 !== i && i,
                                s = r.mode,
                                u = void 0 === s ? 'lowest' : s,
                                l = r.split,
                                f = void 0 !== l && l,
                                d = r.voids,
                                h = void 0 !== d && d;
                            if (a) {
                                if (
                                    (null == n &&
                                        (n = ne.isPath(a)
                                            ? ge(e, a)
                                            : function(t) {
                                                  return $.isBlock(e, t);
                                              }),
                                    !c &&
                                        se.isRange(a) &&
                                        (a = $.unhangRange(e, a)),
                                    f && se.isRange(a))
                                ) {
                                    var p = $.rangeRef(e, a, {
                                            affinity: 'inward',
                                        }),
                                        v = P(se.edges(a), 2),
                                        m = v[0],
                                        y = v[1],
                                        g =
                                            'lowest' === u
                                                ? 'lowest'
                                                : 'highest';
                                    Oe.splitNodes(e, {
                                        at: y,
                                        match: n,
                                        mode: g,
                                        voids: h,
                                    }),
                                        Oe.splitNodes(e, {
                                            at: m,
                                            match: n,
                                            mode: g,
                                            voids: h,
                                        }),
                                        (a = p.unref()),
                                        null == r.at && Oe.select(e, a);
                                }
                                var b,
                                    w = T(
                                        $.nodes(e, {
                                            at: a,
                                            match: n,
                                            mode: u,
                                            voids: h,
                                        }),
                                    );
                                try {
                                    for (w.s(); !(b = w.n()).done; ) {
                                        var O = P(b.value, 2),
                                            S = O[0],
                                            k = O[1],
                                            x = {},
                                            E = {};
                                        if (0 !== k.length) {
                                            for (var j in t)
                                                'children' !== j &&
                                                    'text' !== j &&
                                                    t[j] !== S[j] &&
                                                    ((x[j] = S[j]),
                                                    (E[j] = t[j]));
                                            0 !== Object.keys(E).length &&
                                                e.apply({
                                                    type: 'set_node',
                                                    path: k,
                                                    properties: x,
                                                    newProperties: E,
                                                });
                                        }
                                    }
                                } catch (e) {
                                    w.e(e);
                                } finally {
                                    w.f();
                                }
                            }
                        });
                    },
                    splitNodes: function(e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                        $.withoutNormalizing(e, function() {
                            var r = t.mode,
                                n = void 0 === r ? 'lowest' : r,
                                o = t.voids,
                                a = void 0 !== o && o,
                                i = t.match,
                                c = t.at,
                                s = void 0 === c ? e.selection : c,
                                u = t.height,
                                l = void 0 === u ? 0 : u,
                                f = t.always,
                                d = void 0 !== f && f;
                            if (
                                (null == i &&
                                    (i = function(t) {
                                        return $.isBlock(e, t);
                                    }),
                                se.isRange(s) && (s = ye(e, s)),
                                ne.isPath(s))
                            ) {
                                var h = s,
                                    p = $.point(e, h),
                                    v = P($.parent(e, h), 1)[0];
                                (i = function(e) {
                                    return e === v;
                                }),
                                    (l = p.path.length - h.length + 1),
                                    (s = p),
                                    (d = !0);
                            }
                            if (s) {
                                var m = $.pointRef(e, s, {
                                        affinity: 'backward',
                                    }),
                                    y = P(
                                        $.nodes(e, {
                                            at: s,
                                            match: i,
                                            mode: n,
                                            voids: a,
                                        }),
                                        1,
                                    )[0];
                                if (y) {
                                    var g = $.void(e, {
                                        at: s,
                                        mode: 'highest',
                                    });
                                    if (!a && g) {
                                        var b = P(g, 2),
                                            w = b[0],
                                            O = b[1];
                                        if (J.isElement(w) && e.isInline(w)) {
                                            var S = $.after(e, O);
                                            if (!S) {
                                                var k = ne.next(O);
                                                Oe.insertNodes(
                                                    e,
                                                    { text: '' },
                                                    { at: k, voids: a },
                                                ),
                                                    (S = $.point(e, k));
                                            }
                                            (s = S), (d = !0);
                                        }
                                        (l = s.path.length - O.length + 1),
                                            (d = !0);
                                    }
                                    var x,
                                        E = $.pointRef(e, s),
                                        j = s.path.length - l,
                                        A = P(y, 2)[1],
                                        C = s.path.slice(0, j),
                                        D = 0 === l ? s.offset : s.path[j] + 0,
                                        N = null,
                                        R = T(
                                            $.levels(e, {
                                                at: C,
                                                reverse: !0,
                                                voids: a,
                                            }),
                                        );
                                    try {
                                        for (R.s(); !(x = R.n()).done; ) {
                                            var M = P(x.value, 2),
                                                _ = M[0],
                                                z = M[1],
                                                I = !1;
                                            if (
                                                z.length < A.length ||
                                                0 === z.length ||
                                                (!a && $.isVoid(e, _))
                                            )
                                                break;
                                            var H = m.current,
                                                B = $.isEnd(e, H, z);
                                            if (d || !m || !$.isEdge(e, H, z)) {
                                                I = !0;
                                                var L = F(_, [
                                                    'text',
                                                    'children',
                                                ]);
                                                e.apply({
                                                    type: 'split_node',
                                                    path: z,
                                                    position: D,
                                                    target: N,
                                                    properties: L,
                                                });
                                            }
                                            (N = D),
                                                (D =
                                                    z[z.length - 1] +
                                                    (I || B ? 1 : 0));
                                        }
                                    } catch (e) {
                                        R.e(e);
                                    } finally {
                                        R.f();
                                    }
                                    if (null == t.at) {
                                        var U = E.current || $.end(e, []);
                                        Oe.select(e, U);
                                    }
                                    m.unref(), E.unref();
                                }
                            }
                        });
                    },
                    unsetNodes: function(e, t) {
                        var r =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                        Array.isArray(t) || (t = [t]);
                        var n,
                            o = {},
                            a = T(t);
                        try {
                            for (a.s(); !(n = a.n()).done; ) {
                                var i = n.value;
                                o[i] = null;
                            }
                        } catch (e) {
                            a.e(e);
                        } finally {
                            a.f();
                        }
                        Oe.setNodes(e, o, r);
                    },
                    unwrapNodes: function(e, t) {
                        $.withoutNormalizing(e, function() {
                            var r = t.mode,
                                n = void 0 === r ? 'lowest' : r,
                                o = t.split,
                                a = void 0 !== o && o,
                                i = t.voids,
                                c = void 0 !== i && i,
                                s = t.at,
                                u = void 0 === s ? e.selection : s,
                                l = t.match;
                            if (u) {
                                null == l &&
                                    (l = ne.isPath(u)
                                        ? ge(e, u)
                                        : function(t) {
                                              return $.isBlock(e, t);
                                          }),
                                    ne.isPath(u) && (u = $.range(e, u));
                                for (
                                    var f = se.isRange(u)
                                            ? $.rangeRef(e, u)
                                            : null,
                                        d = $.nodes(e, {
                                            at: u,
                                            match: l,
                                            mode: n,
                                            voids: c,
                                        }),
                                        h = function(t) {
                                            var r = t.unref(),
                                                n = P($.node(e, r), 1)[0],
                                                o = $.range(e, r);
                                            a &&
                                                f &&
                                                (o = se.intersection(
                                                    f.current,
                                                    o,
                                                )),
                                                Oe.liftNodes(e, {
                                                    at: o,
                                                    match: function(e) {
                                                        return n.children.includes(
                                                            e,
                                                        );
                                                    },
                                                    voids: c,
                                                });
                                        },
                                        p = 0,
                                        v = Array.from(d, function(t) {
                                            var r = P(t, 2)[1];
                                            return $.pathRef(e, r);
                                        });
                                    p < v.length;
                                    p++
                                ) {
                                    h(v[p]);
                                }
                                f && f.unref();
                            }
                        });
                    },
                    wrapNodes: function(e, t) {
                        var r =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                        $.withoutNormalizing(e, function() {
                            var n = r.mode,
                                o = void 0 === n ? 'lowest' : n,
                                a = r.split,
                                i = void 0 !== a && a,
                                c = r.voids,
                                s = void 0 !== c && c,
                                u = r.match,
                                l = r.at,
                                f = void 0 === l ? e.selection : l;
                            if (f) {
                                if (
                                    (null == u &&
                                        (u = ne.isPath(f)
                                            ? ge(e, f)
                                            : e.isInline(t)
                                            ? function(t) {
                                                  return (
                                                      $.isInline(e, t) ||
                                                      fe.isText(t)
                                                  );
                                              }
                                            : function(t) {
                                                  return $.isBlock(e, t);
                                              }),
                                    i && se.isRange(f))
                                ) {
                                    var d = P(se.edges(f), 2),
                                        h = d[0],
                                        p = d[1],
                                        v = $.rangeRef(e, f, {
                                            affinity: 'inward',
                                        });
                                    Oe.splitNodes(e, {
                                        at: p,
                                        match: u,
                                        voids: s,
                                    }),
                                        Oe.splitNodes(e, {
                                            at: h,
                                            match: u,
                                            voids: s,
                                        }),
                                        (f = v.unref()),
                                        null == r.at && Oe.select(e, f);
                                }
                                for (
                                    var m = 0,
                                        y = Array.from(
                                            $.nodes(e, {
                                                at: f,
                                                match: e.isInline(t)
                                                    ? function(t) {
                                                          return $.isBlock(
                                                              e,
                                                              t,
                                                          );
                                                      }
                                                    : function(e) {
                                                          return $.isEditor(e);
                                                      },
                                                mode: 'lowest',
                                                voids: s,
                                            }),
                                        );
                                    m < y.length;
                                    m++
                                ) {
                                    var g = P(y[m], 2)[1],
                                        b = se.isRange(f)
                                            ? se.intersection(f, $.range(e, g))
                                            : f;
                                    if (b) {
                                        var w = Array.from(
                                            $.nodes(e, {
                                                at: b,
                                                match: u,
                                                mode: o,
                                                voids: s,
                                            }),
                                        );
                                        w.length > 0 &&
                                            (function() {
                                                var r = P(w, 1)[0],
                                                    n = w[w.length - 1],
                                                    o = P(r, 2)[1],
                                                    a = P(n, 2)[1],
                                                    i = ne.equals(o, a)
                                                        ? ne.parent(o)
                                                        : ne.common(o, a),
                                                    c = $.range(e, o, a),
                                                    u = P($.node(e, i), 1)[0],
                                                    l = i.length + 1,
                                                    f = ne.next(a.slice(0, l)),
                                                    d = ve({}, t, {
                                                        children: [],
                                                    });
                                                Oe.insertNodes(e, d, {
                                                    at: f,
                                                    voids: s,
                                                }),
                                                    Oe.moveNodes(e, {
                                                        at: c,
                                                        match: function(e) {
                                                            return u.children.includes(
                                                                e,
                                                            );
                                                        },
                                                        to: f.concat(0),
                                                        voids: s,
                                                    });
                                            })();
                                    }
                                }
                            }
                        });
                    },
                },
                ye = function(e, t) {
                    if (se.isCollapsed(t)) return t.anchor;
                    var r = P(se.edges(t), 2)[1],
                        n = $.pointRef(e, r);
                    return Oe.delete(e, { at: t }), n.unref();
                },
                ge = function(e, t) {
                    var r = P($.node(e, t), 1)[0];
                    return function(e) {
                        return e === r;
                    };
                };
            function be(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t,
                            ).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function we(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t,
                            ).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            var Oe = (function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? we(Object(r), !0).forEach(function(t) {
                              D(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r),
                          )
                        : we(Object(r)).forEach(function(t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t),
                              );
                          });
                }
                return e;
            })(
                {},
                {
                    transform: function(e, t) {
                        e.children = Object(k.a)(e.children);
                        var r = e.selection && Object(k.a)(e.selection);
                        switch (t.type) {
                            case 'insert_node':
                                var n = t.path,
                                    o = t.node,
                                    a = Q.parent(e, n),
                                    i = n[n.length - 1];
                                if ((a.children.splice(i, 0, o), r)) {
                                    var c,
                                        s = T(se.points(r));
                                    try {
                                        for (s.s(); !(c = s.n()).done; ) {
                                            var u = P(c.value, 2),
                                                l = u[0];
                                            r[u[1]] = ie.transform(l, t);
                                        }
                                    } catch (e) {
                                        s.e(e);
                                    } finally {
                                        s.f();
                                    }
                                }
                                break;
                            case 'insert_text':
                                var f = t.path,
                                    d = t.offset,
                                    h = t.text,
                                    p = Q.leaf(e, f),
                                    v = p.text.slice(0, d),
                                    m = p.text.slice(d);
                                if (((p.text = v + h + m), r)) {
                                    var y,
                                        g = T(se.points(r));
                                    try {
                                        for (g.s(); !(y = g.n()).done; ) {
                                            var b = P(y.value, 2),
                                                w = b[0];
                                            r[b[1]] = ie.transform(w, t);
                                        }
                                    } catch (e) {
                                        g.e(e);
                                    } finally {
                                        g.f();
                                    }
                                }
                                break;
                            case 'merge_node':
                                var O = t.path,
                                    S = Q.get(e, O),
                                    x = ne.previous(O),
                                    E = Q.get(e, x),
                                    A = Q.parent(e, O),
                                    C = O[O.length - 1];
                                if (fe.isText(S) && fe.isText(E))
                                    E.text += S.text;
                                else {
                                    if (fe.isText(S) || fe.isText(E))
                                        throw new Error(
                                            'Cannot apply a "merge_node" operation at path ['
                                                .concat(
                                                    O,
                                                    '] to nodes of different interaces: ',
                                                )
                                                .concat(S, ' ')
                                                .concat(E),
                                        );
                                    var D;
                                    (D = E.children).push.apply(
                                        D,
                                        j(S.children),
                                    );
                                }
                                if ((A.children.splice(C, 1), r)) {
                                    var F,
                                        N = T(se.points(r));
                                    try {
                                        for (N.s(); !(F = N.n()).done; ) {
                                            var R = P(F.value, 2),
                                                M = R[0];
                                            r[R[1]] = ie.transform(M, t);
                                        }
                                    } catch (e) {
                                        N.e(e);
                                    } finally {
                                        N.f();
                                    }
                                }
                                break;
                            case 'move_node':
                                var _ = t.path,
                                    z = t.newPath;
                                if (ne.isAncestor(_, z))
                                    throw new Error(
                                        'Cannot move a path ['
                                            .concat(_, '] to new path [')
                                            .concat(
                                                z,
                                                '] because the destination is inside itself.',
                                            ),
                                    );
                                var I = Q.get(e, _),
                                    H = Q.parent(e, _),
                                    B = _[_.length - 1];
                                H.children.splice(B, 1);
                                var L = ne.transform(_, t),
                                    U = Q.get(e, ne.parent(L)),
                                    W = L[L.length - 1];
                                if ((U.children.splice(W, 0, I), r)) {
                                    var V,
                                        q = T(se.points(r));
                                    try {
                                        for (q.s(); !(V = q.n()).done; ) {
                                            var Y = P(V.value, 2),
                                                K = Y[0];
                                            r[Y[1]] = ie.transform(K, t);
                                        }
                                    } catch (e) {
                                        q.e(e);
                                    } finally {
                                        q.f();
                                    }
                                }
                                break;
                            case 'remove_node':
                                var G = t.path,
                                    Z = G[G.length - 1];
                                if ((Q.parent(e, G).children.splice(Z, 1), r)) {
                                    var $,
                                        J = T(se.points(r));
                                    try {
                                        for (J.s(); !($ = J.n()).done; ) {
                                            var X = P($.value, 2),
                                                ee = X[0],
                                                te = X[1],
                                                re = ie.transform(ee, t);
                                            if (null != r && null != re)
                                                r[te] = re;
                                            else {
                                                var oe,
                                                    ae = void 0,
                                                    ce = void 0,
                                                    ue = T(Q.texts(e));
                                                try {
                                                    for (
                                                        ue.s();
                                                        !(oe = ue.n()).done;

                                                    ) {
                                                        var le = P(oe.value, 2),
                                                            de = le[0],
                                                            pe = le[1];
                                                        if (
                                                            -1 !==
                                                            ne.compare(pe, G)
                                                        ) {
                                                            ce = [de, pe];
                                                            break;
                                                        }
                                                        ae = [de, pe];
                                                    }
                                                } catch (e) {
                                                    ue.e(e);
                                                } finally {
                                                    ue.f();
                                                }
                                                ae
                                                    ? ((ee.path = ae[1]),
                                                      (ee.offset =
                                                          ae[0].text.length))
                                                    : ce
                                                    ? ((ee.path = ce[1]),
                                                      (ee.offset = 0))
                                                    : (r = null);
                                            }
                                        }
                                    } catch (e) {
                                        J.e(e);
                                    } finally {
                                        J.f();
                                    }
                                }
                                break;
                            case 'remove_text':
                                var ve = t.path,
                                    me = t.offset,
                                    ye = t.text,
                                    ge = Q.leaf(e, ve),
                                    be = ge.text.slice(0, me),
                                    we = ge.text.slice(me + ye.length);
                                if (((ge.text = be + we), r)) {
                                    var Oe,
                                        Se = T(se.points(r));
                                    try {
                                        for (Se.s(); !(Oe = Se.n()).done; ) {
                                            var ke = P(Oe.value, 2),
                                                xe = ke[0];
                                            r[ke[1]] = ie.transform(xe, t);
                                        }
                                    } catch (e) {
                                        Se.e(e);
                                    } finally {
                                        Se.f();
                                    }
                                }
                                break;
                            case 'set_node':
                                var Ee = t.path,
                                    je = t.newProperties;
                                if (0 === Ee.length)
                                    throw new Error(
                                        'Cannot set properties on the root node!',
                                    );
                                var Pe = Q.get(e, Ee);
                                for (var Te in je) {
                                    if ('children' === Te || 'text' === Te)
                                        throw new Error(
                                            'Cannot set the "'.concat(
                                                Te,
                                                '" property of nodes!',
                                            ),
                                        );
                                    var Ae = je[Te];
                                    null == Ae ? delete Pe[Te] : (Pe[Te] = Ae);
                                }
                                break;
                            case 'set_selection':
                                var Ce = t.newProperties;
                                if (null == Ce) r = Ce;
                                else if (null == r) {
                                    if (!se.isRange(Ce))
                                        throw new Error(
                                            'Cannot apply an incomplete "set_selection" operation properties '.concat(
                                                JSON.stringify(Ce),
                                                ' when there is no current selection.',
                                            ),
                                        );
                                    r = Ce;
                                } else Object.assign(r, Ce);
                                break;
                            case 'split_node':
                                var De = t.path,
                                    Fe = t.position,
                                    Ne = t.properties;
                                if (0 === De.length)
                                    throw new Error(
                                        'Cannot apply a "split_node" operation at path ['.concat(
                                            De,
                                            '] because the root node cannot be split.',
                                        ),
                                    );
                                var Re,
                                    Me = Q.get(e, De),
                                    _e = Q.parent(e, De),
                                    ze = De[De.length - 1];
                                if (fe.isText(Me)) {
                                    var Ie = Me.text.slice(0, Fe),
                                        He = Me.text.slice(Fe);
                                    (Me.text = Ie),
                                        (Re = he({}, Me, {}, Ne, { text: He }));
                                } else {
                                    var Be = Me.children.slice(0, Fe),
                                        Le = Me.children.slice(Fe);
                                    (Me.children = Be),
                                        (Re = he({}, Me, {}, Ne, {
                                            children: Le,
                                        }));
                                }
                                if ((_e.children.splice(ze + 1, 0, Re), r)) {
                                    var Ue,
                                        We = T(se.points(r));
                                    try {
                                        for (We.s(); !(Ue = We.n()).done; ) {
                                            var Ve = P(Ue.value, 2),
                                                qe = Ve[0];
                                            r[Ve[1]] = ie.transform(qe, t);
                                        }
                                    } catch (e) {
                                        We.e(e);
                                    } finally {
                                        We.f();
                                    }
                                }
                        }
                        (e.children = Object(k.b)(e.children)),
                            (e.selection = r
                                ? Object(k.c)(r)
                                    ? Object(k.b)(r)
                                    : r
                                : null);
                    },
                },
                {},
                me,
                {},
                {
                    collapse: function(e) {
                        var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : {},
                            r = t.edge,
                            n = void 0 === r ? 'anchor' : r,
                            o = e.selection;
                        if (o)
                            if ('anchor' === n) Oe.select(e, o.anchor);
                            else if ('focus' === n) Oe.select(e, o.focus);
                            else if ('start' === n) {
                                var a = se.edges(o),
                                    i = P(a, 1),
                                    c = i[0];
                                Oe.select(e, c);
                            } else if ('end' === n) {
                                var s = se.edges(o),
                                    u = P(s, 2),
                                    l = u[1];
                                Oe.select(e, l);
                            }
                    },
                    deselect: function(e) {
                        var t = e.selection;
                        t &&
                            e.apply({
                                type: 'set_selection',
                                properties: t,
                                newProperties: null,
                            });
                    },
                    move: function(e) {
                        var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : {},
                            r = e.selection,
                            n = t.distance,
                            o = void 0 === n ? 1 : n,
                            a = t.unit,
                            i = void 0 === a ? 'character' : a,
                            c = t.reverse,
                            s = void 0 !== c && c,
                            u = t.edge,
                            l = void 0 === u ? null : u;
                        if (r) {
                            'start' === l &&
                                (l = se.isBackward(r) ? 'focus' : 'anchor'),
                                'end' === l &&
                                    (l = se.isBackward(r) ? 'anchor' : 'focus');
                            var f = r.anchor,
                                d = r.focus,
                                h = { distance: o, unit: i },
                                p = {};
                            if (null == l || 'anchor' === l) {
                                var v = s
                                    ? $.before(e, f, h)
                                    : $.after(e, f, h);
                                v && (p.anchor = v);
                            }
                            if (null == l || 'focus' === l) {
                                var m = s
                                    ? $.before(e, d, h)
                                    : $.after(e, d, h);
                                m && (p.focus = m);
                            }
                            Oe.setSelection(e, p);
                        }
                    },
                    select: function(e, t) {
                        var r = e.selection;
                        if (((t = $.range(e, t)), r)) Oe.setSelection(e, t);
                        else {
                            if (!se.isRange(t))
                                throw new Error(
                                    'When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: '.concat(
                                        JSON.stringify(t),
                                    ),
                                );
                            e.apply({
                                type: 'set_selection',
                                properties: r,
                                newProperties: t,
                            });
                        }
                    },
                    setPoint: function(e, t, r) {
                        var n = e.selection,
                            o = r.edge,
                            a = void 0 === o ? 'both' : o;
                        if (n) {
                            'start' === a &&
                                (a = se.isBackward(n) ? 'focus' : 'anchor'),
                                'end' === a &&
                                    (a = se.isBackward(n) ? 'anchor' : 'focus');
                            var i = n.anchor,
                                c = n.focus,
                                s = 'anchor' === a ? i : c;
                            Oe.setSelection(
                                e,
                                E(
                                    {},
                                    'anchor' === a ? 'anchor' : 'focus',
                                    (function(e) {
                                        for (
                                            var t = 1;
                                            t < arguments.length;
                                            t++
                                        ) {
                                            var r =
                                                null != arguments[t]
                                                    ? arguments[t]
                                                    : {};
                                            t % 2
                                                ? be(Object(r), !0).forEach(
                                                      function(t) {
                                                          D(e, t, r[t]);
                                                      },
                                                  )
                                                : Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(
                                                      e,
                                                      Object.getOwnPropertyDescriptors(
                                                          r,
                                                      ),
                                                  )
                                                : be(Object(r)).forEach(
                                                      function(t) {
                                                          Object.defineProperty(
                                                              e,
                                                              t,
                                                              Object.getOwnPropertyDescriptor(
                                                                  r,
                                                                  t,
                                                              ),
                                                          );
                                                      },
                                                  );
                                        }
                                        return e;
                                    })({}, s, {}, t),
                                ),
                            );
                        }
                    },
                    setSelection: function(e, t) {
                        var r = e.selection,
                            n = {},
                            o = {};
                        if (r) {
                            for (var a in t)
                                (('anchor' === a &&
                                    null != t.anchor &&
                                    !ie.equals(t.anchor, r.anchor)) ||
                                    ('focus' === a &&
                                        null != t.focus &&
                                        !ie.equals(t.focus, r.focus)) ||
                                    ('anchor' !== a &&
                                        'focus' !== a &&
                                        t[a] !== r[a])) &&
                                    ((n[a] = r[a]), (o[a] = t[a]));
                            Object.keys(n).length > 0 &&
                                e.apply({
                                    type: 'set_selection',
                                    properties: n,
                                    newProperties: o,
                                });
                        }
                    },
                },
                {},
                {
                    delete: function(e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                        $.withoutNormalizing(e, function() {
                            var r = t.reverse,
                                n = void 0 !== r && r,
                                o = t.unit,
                                a = void 0 === o ? 'character' : o,
                                i = t.distance,
                                c = void 0 === i ? 1 : i,
                                s = t.voids,
                                u = void 0 !== s && s,
                                l = t.at,
                                f = void 0 === l ? e.selection : l,
                                d = t.hanging,
                                h = void 0 !== d && d;
                            if (f) {
                                if (
                                    (se.isRange(f) &&
                                        se.isCollapsed(f) &&
                                        (f = f.anchor),
                                    ie.isPoint(f))
                                ) {
                                    var p = $.void(e, {
                                        at: f,
                                        mode: 'highest',
                                    });
                                    if (!u && p) {
                                        f = P(p, 2)[1];
                                    } else {
                                        var v = { unit: a, distance: c };
                                        (f = {
                                            anchor: f,
                                            focus: n
                                                ? $.before(e, f, v) ||
                                                  $.start(e, [])
                                                : $.after(e, f, v) ||
                                                  $.end(e, []),
                                        }),
                                            (h = !0);
                                    }
                                }
                                if (ne.isPath(f))
                                    Oe.removeNodes(e, { at: f, voids: u });
                                else if (!se.isCollapsed(f)) {
                                    h ||
                                        (f = $.unhangRange(e, f, { voids: u }));
                                    var m = P(se.edges(f), 2),
                                        y = m[0],
                                        g = m[1],
                                        b = $.above(e, {
                                            match: function(t) {
                                                return $.isBlock(e, t);
                                            },
                                            at: y,
                                            voids: u,
                                        }),
                                        w = $.above(e, {
                                            match: function(t) {
                                                return $.isBlock(e, t);
                                            },
                                            at: g,
                                            voids: u,
                                        }),
                                        O = b && w && !ne.equals(b[1], w[1]),
                                        S = ne.equals(y.path, g.path),
                                        k = u
                                            ? null
                                            : $.void(e, {
                                                  at: y,
                                                  mode: 'highest',
                                              }),
                                        x = u
                                            ? null
                                            : $.void(e, {
                                                  at: g,
                                                  mode: 'highest',
                                              });
                                    if (k) {
                                        var E = $.before(e, y);
                                        E &&
                                            b &&
                                            ne.isAncestor(b[1], E.path) &&
                                            (y = E);
                                    }
                                    if (x) {
                                        var j = $.after(e, g);
                                        j &&
                                            w &&
                                            ne.isAncestor(w[1], j.path) &&
                                            (g = j);
                                    }
                                    var A,
                                        C,
                                        D = [],
                                        F = T($.nodes(e, { at: f, voids: u }));
                                    try {
                                        for (F.s(); !(C = F.n()).done; ) {
                                            var N = C.value,
                                                R = P(N, 2),
                                                M = R[0],
                                                _ = R[1];
                                            (A && 0 === ne.compare(_, A)) ||
                                                (((!u && $.isVoid(e, M)) ||
                                                    (!ne.isCommon(_, y.path) &&
                                                        !ne.isCommon(
                                                            _,
                                                            g.path,
                                                        ))) &&
                                                    (D.push(N), (A = _)));
                                        }
                                    } catch (e) {
                                        F.e(e);
                                    } finally {
                                        F.f();
                                    }
                                    var z = Array.from(D, function(t) {
                                            var r = P(t, 2)[1];
                                            return $.pathRef(e, r);
                                        }),
                                        I = $.pointRef(e, y),
                                        H = $.pointRef(e, g);
                                    if (!S && !k) {
                                        var B = I.current,
                                            L = P($.leaf(e, B), 1)[0],
                                            U = B.path,
                                            W = y.offset,
                                            V = L.text.slice(W);
                                        e.apply({
                                            type: 'remove_text',
                                            path: U,
                                            offset: W,
                                            text: V,
                                        });
                                    }
                                    for (var q = 0, Y = z; q < Y.length; q++) {
                                        var K = Y[q].unref();
                                        Oe.removeNodes(e, { at: K, voids: u });
                                    }
                                    if (!x) {
                                        var G = H.current,
                                            Z = P($.leaf(e, G), 1)[0],
                                            J = G.path,
                                            X = S ? y.offset : 0,
                                            Q = Z.text.slice(X, g.offset);
                                        e.apply({
                                            type: 'remove_text',
                                            path: J,
                                            offset: X,
                                            text: Q,
                                        });
                                    }
                                    !S &&
                                        O &&
                                        H.current &&
                                        I.current &&
                                        Oe.mergeNodes(e, {
                                            at: H.current,
                                            hanging: !0,
                                            voids: u,
                                        });
                                    var ee = H.unref() || I.unref();
                                    null == t.at && ee && Oe.select(e, ee);
                                }
                            }
                        });
                    },
                    insertFragment: function(e, t) {
                        var r =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                        $.withoutNormalizing(e, function() {
                            var n = r.hanging,
                                o = void 0 !== n && n,
                                a = r.voids,
                                i = void 0 !== a && a,
                                c = r.at,
                                s = void 0 === c ? e.selection : c;
                            if (t.length && s) {
                                if (se.isRange(s))
                                    if (
                                        (o || (s = $.unhangRange(e, s)),
                                        se.isCollapsed(s))
                                    )
                                        s = s.anchor;
                                    else {
                                        var u = P(se.edges(s), 2)[1];
                                        if (!i && $.void(e, { at: u })) return;
                                        var l = $.pointRef(e, u);
                                        Oe.delete(e, { at: s }),
                                            (s = l.unref());
                                    }
                                else ne.isPath(s) && (s = $.start(e, s));
                                if (i || !$.void(e, { at: s })) {
                                    var f = $.above(e, {
                                        at: s,
                                        match: function(t) {
                                            return $.isInline(e, t);
                                        },
                                        mode: 'highest',
                                        voids: i,
                                    });
                                    if (f) {
                                        var d = P(f, 2)[1];
                                        if ($.isEnd(e, s, d)) s = $.after(e, d);
                                        else if ($.isStart(e, s, d)) {
                                            s = $.before(e, d);
                                        }
                                    }
                                    var h,
                                        p = P(
                                            $.above(e, {
                                                match: function(t) {
                                                    return $.isBlock(e, t);
                                                },
                                                at: s,
                                                voids: i,
                                            }),
                                            2,
                                        )[1],
                                        v = $.isStart(e, s, p),
                                        m = $.isEnd(e, s, p),
                                        y = !v || (v && m),
                                        g = !m,
                                        b = P(
                                            Q.first({ children: t }, []),
                                            2,
                                        )[1],
                                        w = P(
                                            Q.last({ children: t }, []),
                                            2,
                                        )[1],
                                        O = [],
                                        S = function(t) {
                                            var r = P(t, 2),
                                                n = r[0],
                                                o = r[1];
                                            return (
                                                !(
                                                    y &&
                                                    ne.isAncestor(o, b) &&
                                                    J.isElement(n) &&
                                                    !e.isVoid(n) &&
                                                    !e.isInline(n)
                                                ) &&
                                                !(
                                                    g &&
                                                    ne.isAncestor(o, w) &&
                                                    J.isElement(n) &&
                                                    !e.isVoid(n) &&
                                                    !e.isInline(n)
                                                )
                                            );
                                        },
                                        k = T(
                                            Q.nodes(
                                                { children: t },
                                                { pass: S },
                                            ),
                                        );
                                    try {
                                        for (k.s(); !(h = k.n()).done; ) {
                                            var x = h.value;
                                            x[1].length > 0 &&
                                                S(x) &&
                                                O.push(x);
                                        }
                                    } catch (e) {
                                        k.e(e);
                                    } finally {
                                        k.f();
                                    }
                                    for (
                                        var E = [],
                                            j = [],
                                            A = [],
                                            C = !0,
                                            D = !1,
                                            F = 0,
                                            N = O;
                                        F < N.length;
                                        F++
                                    ) {
                                        var R = P(N[F], 1)[0];
                                        J.isElement(R) && !e.isInline(R)
                                            ? ((C = !1), (D = !0), j.push(R))
                                            : C
                                            ? E.push(R)
                                            : A.push(R);
                                    }
                                    var M = P(
                                            $.nodes(e, {
                                                at: s,
                                                match: function(t) {
                                                    return (
                                                        fe.isText(t) ||
                                                        $.isInline(e, t)
                                                    );
                                                },
                                                mode: 'highest',
                                                voids: i,
                                            }),
                                            1,
                                        ),
                                        _ = P(M[0], 2)[1],
                                        z = $.isStart(e, s, _),
                                        I = $.isEnd(e, s, _),
                                        H = $.pathRef(e, m ? ne.next(p) : p),
                                        B = $.pathRef(e, I ? ne.next(_) : _);
                                    Oe.splitNodes(e, {
                                        at: s,
                                        match: function(t) {
                                            return D
                                                ? $.isBlock(e, t)
                                                : fe.isText(t) ||
                                                      $.isInline(e, t);
                                        },
                                        mode: D ? 'lowest' : 'highest',
                                        voids: i,
                                    });
                                    var L = $.pathRef(
                                        e,
                                        !z || (z && I) ? ne.next(_) : _,
                                    );
                                    if (
                                        (Oe.insertNodes(e, E, {
                                            at: L.current,
                                            match: function(t) {
                                                return (
                                                    fe.isText(t) ||
                                                    $.isInline(e, t)
                                                );
                                            },
                                            mode: 'highest',
                                            voids: i,
                                        }),
                                        Oe.insertNodes(e, j, {
                                            at: H.current,
                                            match: function(t) {
                                                return $.isBlock(e, t);
                                            },
                                            mode: 'lowest',
                                            voids: i,
                                        }),
                                        Oe.insertNodes(e, A, {
                                            at: B.current,
                                            match: function(t) {
                                                return (
                                                    fe.isText(t) ||
                                                    $.isInline(e, t)
                                                );
                                            },
                                            mode: 'highest',
                                            voids: i,
                                        }),
                                        !r.at)
                                    ) {
                                        var U;
                                        U =
                                            A.length > 0
                                                ? ne.previous(B.current)
                                                : j.length > 0
                                                ? ne.previous(H.current)
                                                : ne.previous(L.current);
                                        var W = $.end(e, U);
                                        Oe.select(e, W);
                                    }
                                    L.unref(), H.unref(), B.unref();
                                }
                            }
                        });
                    },
                    insertText: function(e, t) {
                        var r =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                        $.withoutNormalizing(e, function() {
                            var n = r.voids,
                                o = void 0 !== n && n,
                                a = r.at,
                                i = void 0 === a ? e.selection : a;
                            if (i) {
                                if (
                                    (ne.isPath(i) && (i = $.range(e, i)),
                                    se.isRange(i))
                                )
                                    if (se.isCollapsed(i)) i = i.anchor;
                                    else {
                                        var c = se.end(i);
                                        if (!o && $.void(e, { at: c })) return;
                                        var s = $.pointRef(e, c);
                                        Oe.delete(e, { at: i, voids: o }),
                                            (i = s.unref()),
                                            Oe.setSelection(e, {
                                                anchor: i,
                                                focus: i,
                                            });
                                    }
                                if (o || !$.void(e, { at: i })) {
                                    var u = i,
                                        l = u.path,
                                        f = u.offset;
                                    e.apply({
                                        type: 'insert_text',
                                        path: l,
                                        offset: f,
                                        text: t,
                                    });
                                }
                            }
                        });
                    },
                },
            );
            var Se = r(10),
                ke = r.n(Se);
            function xe(e, t) {
                if (null == e) return {};
                var r,
                    n,
                    o = (function(e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            o = {},
                            a = Object.keys(e);
                        for (n = 0; n < a.length; n++)
                            (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++)
                        (r = a[n]),
                            t.indexOf(r) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    r,
                                ) &&
                                    (o[r] = e[r]));
                }
                return o;
            }
            function Ee() {
                return (Ee =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r)
                                Object.prototype.hasOwnProperty.call(r, n) &&
                                    (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function je(e, t) {
                return (
                    (function(e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function(e, t) {
                        if (
                            'undefined' == typeof Symbol ||
                            !(Symbol.iterator in Object(e))
                        )
                            return;
                        var r = [],
                            n = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (
                                var i, c = e[Symbol.iterator]();
                                !(n = (i = c.next()).done) &&
                                (r.push(i.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (a = e);
                        } finally {
                            try {
                                n || null == c.return || c.return();
                            } finally {
                                if (o) throw a;
                            }
                        }
                        return r;
                    })(e, t) ||
                    (function(e, t) {
                        if (!e) return;
                        if ('string' == typeof e) return Pe(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name);
                        if ('Map' === r || 'Set' === r) return Array.from(e);
                        if (
                            'Arguments' === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        )
                            return Pe(e, t);
                    })(e, t) ||
                    (function() {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function Pe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            var Te = function(e) {
                    var t = e.Modal,
                        r = e.insert,
                        n = e.shortcode,
                        o = Object(c.useHookComponent)('ReactiumUI'),
                        a = o.Dialog,
                        s = o.Button,
                        u = o.EventForm,
                        l = h.Component.get(n.type),
                        f = [
                            n.code,
                            i.a.get(l, 'label', ke()(l.id, { pascalCase: !0 })),
                        ].join(' - '),
                        d = Object.entries(i.a.get(l, 'attributes', {})).map(
                            function(e) {
                                var t = je(e, 2),
                                    r = t[0],
                                    n = t[1];
                                return (n.id = r), n;
                            },
                        ),
                        p = function() {
                            return t.dismiss();
                        },
                        m = {
                            align: a.ENUMS.ALIGN.RIGHT,
                            elements: [
                                v.a.createElement(
                                    s,
                                    {
                                        key: 'cancel-btn',
                                        type: s.ENUMS.TYPE.BUTTON,
                                        onClick: p,
                                        className: 'mr-xs-8',
                                        color: s.ENUMS.COLOR.DANGER,
                                    },
                                    'Cancel',
                                ),
                                v.a.createElement(
                                    s,
                                    {
                                        key: 'insert-btn',
                                        type: s.ENUMS.TYPE.SUBMIT,
                                    },
                                    'Insert',
                                ),
                            ],
                        };
                    return v.a.createElement(
                        u,
                        {
                            onSubmit: function(e) {
                                (n.attributes = e.value), r(n), t.dismiss();
                            },
                        },
                        v.a.createElement(
                            a,
                            {
                                collapsible: !1,
                                dismissable: !0,
                                footer: m,
                                header: { title: f },
                                onDismiss: p,
                            },
                            v.a.createElement(
                                'div',
                                { className: 'shortcodes-rte-attributes' },
                                d.map(function(e) {
                                    return v.a.createElement(
                                        Ae,
                                        Ee({ key: e.id }, e),
                                    );
                                }),
                            ),
                        ),
                    );
                },
                Ae = function(e) {
                    var t,
                        r = e.id,
                        n = e.label,
                        o = e.type,
                        a = xe(e, ['id', 'label', 'type']);
                    switch (
                        ((n = n || ''.concat(ke()(r, { pascalCase: !0 }), ':')),
                        o)
                    ) {
                        case 'textarea':
                            t = function(e) {
                                return v.a.createElement(
                                    'label',
                                    null,
                                    v.a.createElement('span', null, n),
                                    v.a.createElement('textarea', e),
                                );
                            };
                            break;
                        default:
                            t = function(e) {
                                return v.a.createElement(
                                    'label',
                                    null,
                                    v.a.createElement('span', null, n),
                                    v.a.createElement(
                                        'input',
                                        Ee({ type: o }, e),
                                    ),
                                );
                            };
                    }
                    return v.a.createElement(
                        'div',
                        { className: 'form-group' },
                        v.a.createElement(t, Ee({}, a, { name: r, id: r })),
                    );
                },
                Ce = r(6);
            function De() {
                return (De =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r)
                                Object.prototype.hasOwnProperty.call(r, n) &&
                                    (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function Fe(e, t, r, n, o, a, i) {
                try {
                    var c = e[a](i),
                        s = c.value;
                } catch (e) {
                    return void r(e);
                }
                c.done ? t(s) : Promise.resolve(s).then(n, o);
            }
            function Ne(e, t) {
                return (
                    (function(e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function(e, t) {
                        if (
                            'undefined' == typeof Symbol ||
                            !(Symbol.iterator in Object(e))
                        )
                            return;
                        var r = [],
                            n = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (
                                var i, c = e[Symbol.iterator]();
                                !(n = (i = c.next()).done) &&
                                (r.push(i.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (a = e);
                        } finally {
                            try {
                                n || null == c.return || c.return();
                            } finally {
                                if (o) throw a;
                            }
                        }
                        return r;
                    })(e, t) ||
                    (function(e, t) {
                        if (!e) return;
                        if ('string' == typeof e) return Re(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name);
                        if ('Map' === r || 'Set' === r) return Array.from(e);
                        if (
                            'Arguments' === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        )
                            return Re(e, t);
                    })(e, t) ||
                    (function() {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function Re(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function Me(e, t) {
                if (null == e) return {};
                var r,
                    n,
                    o = (function(e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            o = {},
                            a = Object.keys(e);
                        for (n = 0; n < a.length; n++)
                            (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++)
                        (r = a[n]),
                            t.indexOf(r) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    r,
                                ) &&
                                    (o[r] = e[r]));
                }
                return o;
            }
            var _e = {
                    STATUS: {
                        PENDING: 'PENDING',
                        INITIALIZING: 'INITIALIZING',
                        READY: 'READY',
                    },
                },
                ze = function(e) {
                    var t = e.editor,
                        r = e.namespace,
                        n = e.title,
                        a = Me(e, ['editor', 'namespace', 'title']),
                        u = Object(p.useRef)(),
                        l = Object(c.useHookComponent)('ReactiumUI'),
                        f = l.Dialog,
                        d = l.Spinner,
                        m = Object(c.useHandle)('AdminTools'),
                        g = Ne(Object(c.useStatus)(_e.STATUS.PENDING), 3),
                        b = g[0],
                        w = g[1],
                        O = g[2],
                        S = Ne(
                            Object(c.useDerivedState)({
                                search: null,
                                selection: a.selection,
                                shortcodes: {},
                            }),
                            2,
                        ),
                        k = S[0],
                        x = S[1],
                        E = function(e) {
                            C() || x(e);
                        },
                        j = s.a.Utils.cxFactory(r),
                        P = function() {
                            t.panel.hide(!1, !0).setID('rte-panel');
                        },
                        T = (function() {
                            var e,
                                t =
                                    ((e = regeneratorRuntime.mark(function e() {
                                        var t;
                                        return regeneratorRuntime.wrap(function(
                                            e,
                                        ) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (
                                                            O(_e.STATUS.PENDING)
                                                        ) {
                                                            e.next = 2;
                                                            break;
                                                        }
                                                        return e.abrupt(
                                                            'return',
                                                        );
                                                    case 2:
                                                        if (
                                                            (w(
                                                                _e.STATUS
                                                                    .INITIALIZING,
                                                                !0,
                                                            ),
                                                            (t = h.list()) &&
                                                                !(
                                                                    Object.keys(
                                                                        t,
                                                                    ).length < 1
                                                                ))
                                                        ) {
                                                            e.next = 8;
                                                            break;
                                                        }
                                                        return (
                                                            (e.next = 7),
                                                            h.list(!0)
                                                        );
                                                    case 7:
                                                        t = e.sent;
                                                    case 8:
                                                        if (!C()) {
                                                            e.next = 10;
                                                            break;
                                                        }
                                                        return e.abrupt(
                                                            'return',
                                                        );
                                                    case 10:
                                                        w(_e.STATUS.READY),
                                                            E({
                                                                shortcodes: t,
                                                            });
                                                    case 12:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        },
                                        e);
                                    })),
                                    function() {
                                        var t = this,
                                            r = arguments;
                                        return new Promise(function(n, o) {
                                            var a = e.apply(t, r);
                                            function i(e) {
                                                Fe(a, n, o, i, c, 'next', e);
                                            }
                                            function c(e) {
                                                Fe(a, n, o, i, c, 'throw', e);
                                            }
                                            i(void 0);
                                        });
                                    });
                            return function() {
                                return t.apply(this, arguments);
                            };
                        })(),
                        A = o.a.throttle(function(e) {
                            (e = o.a.isEmpty([e]) ? null : e), E({ search: e });
                        }, 100),
                        C = function() {
                            return !u.current;
                        },
                        D = function(e) {
                            !(function(e) {
                                var r = {
                                    id: y()(),
                                    children: [{ text: e.code }],
                                    shortcode: e,
                                    type: 'shortcode',
                                };
                                Oe.insertNodes(t, r, { at: k.selection });
                            })(e),
                                P();
                        };
                    return (
                        Object(c.useAsyncEffect)(T, [b]),
                        v.a.createElement(
                            f,
                            {
                                ref: u,
                                collapsible: !1,
                                dismissable: !1,
                                header: {
                                    elements: [
                                        v.a.createElement(He, {
                                            key: 'close-btn',
                                            onClick: P,
                                        }),
                                    ],
                                    title: n,
                                },
                            },
                            v.a.createElement(
                                'div',
                                { className: j() },
                                v.a.createElement(
                                    'div',
                                    { className: j('search') },
                                    v.a.createElement(
                                        'div',
                                        { className: 'form-group' },
                                        v.a.createElement('input', {
                                            'data-focus': !0,
                                            type: 'search',
                                            placeholder: 'search',
                                            className: 'grow',
                                            onFocus: function(e) {
                                                return e.target.select();
                                            },
                                            onChange: function(e) {
                                                return A(e.target.value);
                                            },
                                        }),
                                    ),
                                ),
                                v.a.createElement(
                                    'div',
                                    { className: j('list') },
                                    v.a.createElement(
                                        Ce.Scrollbars,
                                        null,
                                        v.a.createElement(
                                            'ul',
                                            null,
                                            Object.values(k.shortcodes)
                                                .filter(function(e) {
                                                    var t = k.search;
                                                    if (null === t) return !0;
                                                    t = String(t).toLowerCase();
                                                    var r = e.code,
                                                        n = e.replacer;
                                                    return (
                                                        String(r)
                                                            .toLowerCase()
                                                            .includes(t) ||
                                                        String(n)
                                                            .toLowerCase()
                                                            .includes(t)
                                                    );
                                                })
                                                .map(function(e, t) {
                                                    return v.a.createElement(
                                                        Ie,
                                                        {
                                                            cx: j,
                                                            key: 'shortcode-'.concat(
                                                                t,
                                                            ),
                                                            onClick: function() {
                                                                return (function(
                                                                    e,
                                                                ) {
                                                                    var t = h.Component.get(
                                                                        e.type,
                                                                    );
                                                                    if (
                                                                        i.a.get(
                                                                            t,
                                                                            'attributes',
                                                                        )
                                                                    ) {
                                                                        var r = i.a.get(
                                                                            m,
                                                                            'Modal',
                                                                        );
                                                                        r.show(
                                                                            v.a.createElement(
                                                                                Te,
                                                                                {
                                                                                    shortcode: e,
                                                                                    insert: D,
                                                                                    Modal: r,
                                                                                },
                                                                            ),
                                                                        );
                                                                    } else D(e);
                                                                })(e);
                                                            },
                                                            shortcode: e,
                                                        },
                                                    );
                                                }),
                                        ),
                                    ),
                                    !O(_e.STATUS.READY) &&
                                        v.a.createElement(
                                            'div',
                                            { className: j('spinner') },
                                            v.a.createElement(d, null),
                                        ),
                                ),
                            ),
                        )
                    );
                },
                Ie = function(e) {
                    var t = e.cx,
                        r = e.shortcode,
                        n = Me(e, ['cx', 'shortcode']),
                        o = r.code;
                    return v.a.createElement(
                        'li',
                        { className: t('list-item') },
                        v.a.createElement('button', n, o),
                    );
                },
                He = function(e) {
                    var t = Object(c.useHookComponent)('ReactiumUI'),
                        r = t.Button,
                        n = t.Icon;
                    return v.a.createElement(
                        r,
                        De(
                            {
                                size: r.ENUMS.SIZE.XS,
                                color: r.ENUMS.COLOR.CLEAR,
                                className: 'ar-dialog-header-btn dismiss',
                            },
                            e,
                        ),
                        v.a.createElement(n, { name: 'Feather.X' }),
                    );
                };
            function Be(e, t) {
                if (null == e) return {};
                var r,
                    n,
                    o = (function(e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            o = {},
                            a = Object.keys(e);
                        for (n = 0; n < a.length; n++)
                            (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++)
                        (r = a[n]),
                            t.indexOf(r) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    r,
                                ) &&
                                    (o[r] = e[r]));
                }
                return o;
            }
            function Le() {
                return (Le =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r)
                                Object.prototype.hasOwnProperty.call(r, n) &&
                                    (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            (ze.ENUMS = _e),
                (ze.propTypes = {
                    className: b.a.string,
                    namespace: b.a.string,
                    onStatus: b.a.func,
                }),
                (ze.defaultProps = {
                    namespace: 'shortcodes-rte',
                    onStatus: function() {},
                    title: 'Shortcodes',
                });
            var Ue = function(e) {
                    var t = Object(c.useHookComponent)('ReactiumUI'),
                        r = t.Button,
                        n = t.Icon;
                    return v.a.createElement(
                        r,
                        Le({}, s.a.RTE.ENUMS.PROPS.BUTTON, e),
                        v.a.createElement(
                            n,
                            Le({}, s.a.RTE.ENUMS.PROPS.ICON, {
                                name: 'Linear.Puzzle',
                                size: 20,
                            }),
                        ),
                    );
                },
                We = function(e) {
                    var t,
                        r = e.shortcode,
                        n = Be(e, ['shortcode']),
                        o = h.Component.get(r.type);
                    return (
                        i.a.get(o, 'editorComponent') &&
                            (t = Object(c.useHookComponent)(o.editorComponent)),
                        t ||
                            (t = function(e) {
                                return v.a.createElement('span', e);
                            }),
                        v.a.createElement(t, n)
                    );
                },
                Ve = s.a.RTE.pluginFactory({ type: 'shortcode', order: 100 });
            Ve.callback = function(e) {
                var t = function(t) {
                    var r = t.currentTarget.getBoundingClientRect(),
                        n = r.x,
                        o = r.y;
                    (n += r.width),
                        (o = Math.floor(window.innerHeight / 4)),
                        e.panel
                            .setID(Ve.type)
                            .setContent(
                                v.a.createElement(ze, {
                                    selection: e.selection,
                                    editor: e,
                                }),
                            )
                            .moveTo(n, o)
                            .show();
                };
                s.a.RTE.Format.register(Ve.type, { element: We }),
                    s.a.RTE.Button.register(Ve.type, {
                        order: 62,
                        sidebar: !0,
                        button: function(e) {
                            return v.a.createElement(
                                Ue,
                                Le({}, e, { onClick: t }),
                            );
                        },
                    });
                var r = e.isInline;
                return (
                    (e.isInline = function(e) {
                        return e.type === Ve.type || r(e);
                    }),
                    e
                );
            };
            var qe = Ve,
                Ye = r(18),
                Ke = r.n(Ye),
                Ge = function() {},
                Ze = function(e) {
                    var t = e.code,
                        r = e.data,
                        n = e.replacer,
                        o = e.type,
                        a = e.onDelete,
                        i = void 0 === a ? Ge : a,
                        s = e.onItemSelect,
                        u = void 0 === s ? Ge : s,
                        l = h.parseKey(t),
                        f = Object(c.useHookComponent)('ReactiumUI'),
                        d = f.Button,
                        p = f.Dropdown,
                        m = f.Icon;
                    return v.a.createElement(
                        v.a.Fragment,
                        null,
                        v.a.createElement('input', {
                            type: 'hidden',
                            name: ''.concat(l, '.key'),
                            value: l,
                        }),
                        v.a.createElement('input', {
                            defaultValue: o.id,
                            type: 'hidden',
                            name: ''.concat(l, '.type'),
                        }),
                        v.a.createElement(
                            'div',
                            { className: 'input-group' },
                            v.a.createElement('input', {
                                className: 'code',
                                defaultValue: t,
                                name: ''.concat(l, '.code'),
                                placeholder: '[shortcode]',
                                readOnly: !0,
                                type: 'text',
                            }),
                            v.a.createElement(
                                p,
                                {
                                    data: r,
                                    valueField: 'id',
                                    selection: [o.id],
                                    onItemSelect: function(e) {
                                        var t = e.item;
                                        return u({ item: t, key: l });
                                    },
                                },
                                v.a.createElement(
                                    d,
                                    {
                                        block: !0,
                                        className: 'type',
                                        color: d.ENUMS.COLOR.CLEAR,
                                        'data-dropdown-element': !0,
                                    },
                                    v.a.createElement(
                                        'span',
                                        { className: 'label' },
                                        o.label,
                                    ),
                                    v.a.createElement(
                                        'span',
                                        { className: 'icon' },
                                        v.a.createElement(m, {
                                            name: 'Feather.ChevronDown',
                                            className: 'icon',
                                        }),
                                    ),
                                ),
                            ),
                            v.a.createElement('input', {
                                className: 'replacer',
                                defaultValue: n,
                                name: ''.concat(l, '.replacer'),
                                placeholder: 'replacement',
                                type: 'text',
                            }),
                            v.a.createElement(
                                d,
                                {
                                    className: 'action',
                                    color: d.ENUMS.COLOR.DANGER,
                                    onClick: i,
                                    'data-code': t,
                                    'data-key': l,
                                    'data-replacer': n,
                                    'data-type': o.id,
                                },
                                v.a.createElement(m, {
                                    name: 'Feather.X',
                                    size: 22,
                                }),
                            ),
                        ),
                    );
                };
            function $e(e, t, r, n, o, a, i) {
                try {
                    var c = e[a](i),
                        s = c.value;
                } catch (e) {
                    return void r(e);
                }
                c.done ? t(s) : Promise.resolve(s).then(n, o);
            }
            function Je(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise(function(n, o) {
                        var a = e.apply(t, r);
                        function i(e) {
                            $e(a, n, o, i, c, 'next', e);
                        }
                        function c(e) {
                            $e(a, n, o, i, c, 'throw', e);
                        }
                        i(void 0);
                    });
                };
            }
            function Xe(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t,
                            ).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function Qe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? Xe(Object(r), !0).forEach(function(t) {
                              et(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r),
                          )
                        : Xe(Object(r)).forEach(function(t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t),
                              );
                          });
                }
                return e;
            }
            function et(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            function tt(e, t) {
                return (
                    (function(e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function(e, t) {
                        if (
                            'undefined' == typeof Symbol ||
                            !(Symbol.iterator in Object(e))
                        )
                            return;
                        var r = [],
                            n = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (
                                var i, c = e[Symbol.iterator]();
                                !(n = (i = c.next()).done) &&
                                (r.push(i.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (a = e);
                        } finally {
                            try {
                                n || null == c.return || c.return();
                            } finally {
                                if (o) throw a;
                            }
                        }
                        return r;
                    })(e, t) ||
                    (function(e, t) {
                        if (!e) return;
                        if ('string' == typeof e) return rt(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name);
                        if ('Map' === r || 'Set' === r) return Array.from(e);
                        if (
                            'Arguments' === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        )
                            return rt(e, t);
                    })(e, t) ||
                    (function() {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function rt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function nt(e, t) {
                if (null == e) return {};
                var r,
                    n,
                    o = (function(e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            o = {},
                            a = Object.keys(e);
                        for (n = 0; n < a.length; n++)
                            (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++)
                        (r = a[n]),
                            t.indexOf(r) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    r,
                                ) &&
                                    (o[r] = e[r]));
                }
                return o;
            }
            var ot = {
                    STATUS: {
                        BUSY: 'BUSY',
                        PENDING: 'PENDING',
                        INITIALIZING: 'INITIALIZING',
                        READY: 'READY',
                    },
                },
                at = function(e) {
                    var t = e.children,
                        r = e.className,
                        n = e.namespace,
                        a = e.onStatus,
                        u = e.title,
                        l = nt(e, [
                            'children',
                            'className',
                            'namespace',
                            'onStatus',
                            'title',
                        ]),
                        f = Object(p.useRef)(),
                        d = Object(p.useRef)(),
                        m = tt(Object(c.useStatus)(ot.STATUS.PENDING), 3),
                        y = m[0],
                        g = m[1],
                        b = m[2],
                        w = Object(c.useHookComponent)('Helmet'),
                        O = Object(c.useHookComponent)('ConfirmBox'),
                        S = Object(c.useHookComponent)('ReactiumUI'),
                        k = S.Button,
                        x = S.Dropdown,
                        E = S.Icon,
                        j = S.EventForm,
                        P = S.Spinner,
                        T = S.Toast,
                        A = Object(c.useHandle)('AdminTools'),
                        C = tt(
                            Object(c.useDerivedState)({
                                shortcodes: h.list(),
                                type: h.Component.list[0],
                            }),
                            2,
                        ),
                        D = C[0],
                        F = C[1],
                        N = function(e) {
                            I() || F(e);
                        },
                        R = s.a.Utils.cxFactory(n),
                        M = function(e) {
                            var t = h.parseKey(e),
                                r = Qe({}, i.a.get(D, 'shortcodes'));
                            return (
                                i.a.del(r, t), N({ shortcodes: r }), h.delete(e)
                            );
                        },
                        _ = (function() {
                            var e = Je(
                                regeneratorRuntime.mark(function e(t, r, n) {
                                    var o;
                                    return regeneratorRuntime.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (!I()) {
                                                        e.next = 2;
                                                        break;
                                                    }
                                                    return e.abrupt('return');
                                                case 2:
                                                    if (
                                                        ((t = String(
                                                            t,
                                                        ).toUpperCase()),
                                                        (o = new CustomEvent(
                                                            t,
                                                            { detail: r },
                                                        )),
                                                        q.dispatchEvent(o),
                                                        !I())
                                                    ) {
                                                        e.next = 7;
                                                        break;
                                                    }
                                                    return e.abrupt('return');
                                                case 7:
                                                    return (
                                                        (e.next = 9),
                                                        s.a.Hook.run(
                                                            'shortcodes-'.concat(
                                                                t,
                                                            ),
                                                            o,
                                                            q,
                                                        )
                                                    );
                                                case 9:
                                                    if (!I()) {
                                                        e.next = 11;
                                                        break;
                                                    }
                                                    return e.abrupt('return');
                                                case 11:
                                                    if (
                                                        'function' != typeof n
                                                    ) {
                                                        e.next = 14;
                                                        break;
                                                    }
                                                    return (e.next = 14), n(o);
                                                case 14:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    }, e);
                                }),
                            );
                            return function(t, r, n) {
                                return e.apply(this, arguments);
                            };
                        })(),
                        z = (function() {
                            var e = Je(
                                regeneratorRuntime.mark(function e() {
                                    var t;
                                    return regeneratorRuntime.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        g(
                                                            ot.STATUS
                                                                .INITIALIZING,
                                                        ),
                                                        (e.next = 3),
                                                        h.list(!0)
                                                    );
                                                case 3:
                                                    return (
                                                        (t = e.sent),
                                                        o.a.delay(function() {
                                                            g(ot.STATUS.READY),
                                                                N({
                                                                    fetched: Date.now(),
                                                                });
                                                        }, 500),
                                                        e.abrupt('return', t)
                                                    );
                                                case 6:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    }, e);
                                }),
                            );
                            return function() {
                                return e.apply(this, arguments);
                            };
                        })(),
                        I = function() {
                            return !f.current;
                        },
                        H = (function() {
                            var e = Je(
                                regeneratorRuntime.mark(function e() {
                                    var t,
                                        r = arguments;
                                    return regeneratorRuntime.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        !0 !==
                                                            (r.length > 0 &&
                                                                void 0 !==
                                                                    r[0] &&
                                                                r[0]) &&
                                                            T.show({
                                                                icon:
                                                                    'Feather.Check',
                                                                message: Object(
                                                                    c.__,
                                                                )(
                                                                    'Shortcodes updated',
                                                                ),
                                                                type:
                                                                    T.TYPE.INFO,
                                                            }),
                                                        g(ot.STATUS.BUSY),
                                                        (t = f.current.getValue()),
                                                        (e.next = 6),
                                                        h.save(t)
                                                    );
                                                case 6:
                                                    g(ot.STATUS.READY);
                                                case 7:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    }, e);
                                }),
                            );
                            return function() {
                                return e.apply(this, arguments);
                            };
                        })(),
                        B = function(e) {
                            e && e.preventDefault(), H();
                        },
                        L = function(e) {
                            e.target.value = h.parseCode(e.target.value, !0);
                        },
                        U = function(e) {
                            var t = e.currentTarget.dataset.code,
                                r = i.a.get(A, 'Modal');
                            r.show(
                                v.a.createElement(O, {
                                    message: Object(c.__)(
                                        'Delete %code shortcode?',
                                    ).replace('%code', t),
                                    onCancel: function() {
                                        return r.hide();
                                    },
                                    onConfirm: function() {
                                        return (
                                            (e = t),
                                            T.show({
                                                icon: 'Feather.Check',
                                                message: Object(c.__)(
                                                    'Shortcode %code deleted',
                                                ).replace('%code', e),
                                                type: T.TYPE.INFO,
                                            }),
                                            r.dismiss(),
                                            void M(t)
                                        );
                                        var e;
                                    },
                                    title: 'Confirm Delete',
                                }),
                            );
                        },
                        W = function(e) {
                            if (h.isKey(e)) {
                                e.preventDefault(), e.stopPropagation();
                                var t =
                                    189 === e.which
                                        ? '-'
                                        : String.fromCharCode(e.which);
                                e.target.value = h.parseCode(
                                    e.target.value + t,
                                );
                                var r = e.target.value.length - 1;
                                e.target.setSelectionRange(r, r);
                            }
                        },
                        V = function(e) {
                            var t = e.item,
                                r = e.key,
                                n = Qe({}, i.a.get(D, 'shortcodes'));
                            i.a.set(n, [r, 'type'], t.id), N({ shortcodes: n });
                        },
                        q = tt(
                            Object(c.useEventHandle)({
                                ENUMS: ot,
                                EventForm: f,
                                children: t,
                                className: r,
                                cx: R,
                                delete: M,
                                dispatch: _,
                                initialize: z,
                                namespace: n,
                                onStatus: a,
                                props: l,
                                save: H,
                                setState: N,
                                setStatus: g,
                                state: D,
                                unMounted: I,
                            }),
                            1,
                        )[0];
                    return (
                        Object(c.useRegisterHandle)('Shortcodes', function() {
                            return q;
                        }),
                        Object(p.useEffect)(
                            function() {
                                _('status', { status: y }, a);
                            },
                            [y],
                        ),
                        Object(c.useAsyncEffect)(
                            (function() {
                                var e = Je(
                                    regeneratorRuntime.mark(function e(t) {
                                        var r;
                                        return regeneratorRuntime.wrap(function(
                                            e,
                                        ) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (
                                                            !b(
                                                                ot.STATUS
                                                                    .PENDING,
                                                            )
                                                        ) {
                                                            e.next = 5;
                                                            break;
                                                        }
                                                        return (
                                                            (e.next = 3), z()
                                                        );
                                                    case 3:
                                                        (r = e.sent),
                                                            t &&
                                                                N({
                                                                    shortcodes: r,
                                                                });
                                                    case 5:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        },
                                        e);
                                    }),
                                );
                                return function(t) {
                                    return e.apply(this, arguments);
                                };
                            })(),
                            [y],
                        ),
                        Object(p.useEffect)(
                            function() {
                                if (f.current)
                                    return (
                                        s.a.Hotkeys.register('shortkey-save', {
                                            callback: B,
                                            key: 'mod+s',
                                            order: s.a.Enums.priority.lowest,
                                            scope: document,
                                        }),
                                        function() {
                                            s.a.Hotkeys.unregister(
                                                'shortkey-save',
                                            );
                                        }
                                    );
                            },
                            [!!f.current],
                        ),
                        v.a.createElement(
                            'div',
                            { className: R() },
                            u &&
                                v.a.createElement(
                                    w,
                                    null,
                                    v.a.createElement('title', null, u),
                                ),
                            v.a.createElement(
                                j,
                                {
                                    className: R('insert'),
                                    ref: d,
                                    onSubmit: function(e) {
                                        return (function(e) {
                                            var t = e.value,
                                                r = t.code,
                                                n = t.replacer,
                                                o = void 0 === n ? '' : n,
                                                a = D.shortcodes,
                                                s = void 0 === a ? {} : a,
                                                u = D.type,
                                                l = h.parseKey(r);
                                            if (r && l) {
                                                var f = document.getElementById(
                                                    'shortcode-code',
                                                );
                                                if (i.a.get(s, l)) {
                                                    var p = {
                                                        message: ''.concat(
                                                            r,
                                                            ' already in use',
                                                        ),
                                                    };
                                                    return (
                                                        T.show({
                                                            icon:
                                                                'Feather.AlertOctagon',
                                                            message: Object(
                                                                c.__,
                                                            )(p.message),
                                                            type: T.TYPE.ERROR,
                                                        }),
                                                        f && f.focus(),
                                                        void N({ error: p })
                                                    );
                                                }
                                                var v = Qe(
                                                    Qe({}, s),
                                                    {},
                                                    et({}, l, {
                                                        code: r,
                                                        replacer: o,
                                                        key: l,
                                                        type: u.id,
                                                    }),
                                                );
                                                d.current.setValue(null),
                                                    f && f.focus(),
                                                    N({
                                                        error: null,
                                                        shortcodes: v,
                                                    }),
                                                    H();
                                            }
                                        })(e);
                                    },
                                },
                                v.a.createElement(
                                    'div',
                                    {
                                        className: Ke()('input-group', {
                                            error: !!D.error,
                                        }),
                                    },
                                    v.a.createElement('input', {
                                        className: 'code',
                                        id: 'shortcode-code',
                                        name: 'code',
                                        onBlur: L,
                                        onKeyDown: W,
                                        placeholder: '[shortcode]',
                                        type: 'text',
                                    }),
                                    v.a.createElement(
                                        x,
                                        {
                                            data: h.Component.list,
                                            onItemSelect: function(e) {
                                                var t = e.item;
                                                return N({ type: t });
                                            },
                                            valueField: 'id',
                                            selection: [D.type.id],
                                        },
                                        v.a.createElement(
                                            k,
                                            {
                                                block: !0,
                                                className: 'type',
                                                color: k.ENUMS.COLOR.CLEAR,
                                                'data-dropdown-element': !0,
                                            },
                                            v.a.createElement(
                                                'span',
                                                { className: 'label' },
                                                D.type.label,
                                            ),
                                            v.a.createElement(
                                                'span',
                                                { className: 'icon' },
                                                v.a.createElement(E, {
                                                    name: 'Feather.ChevronDown',
                                                    className: 'icon',
                                                }),
                                            ),
                                        ),
                                    ),
                                    v.a.createElement('input', {
                                        className: 'replacer',
                                        id: 'shortcode-replacer',
                                        name: 'replacer',
                                        placeholder: 'replacement',
                                        type: 'text',
                                    }),
                                    v.a.createElement(
                                        k,
                                        {
                                            className: 'action',
                                            color: k.ENUMS.COLOR.PRIMARY,
                                            type: k.ENUMS.TYPE.SUBMIT,
                                        },
                                        v.a.createElement(E, {
                                            name: 'Feather.Plus',
                                            size: 24,
                                        }),
                                    ),
                                ),
                            ),
                            v.a.createElement(
                                j,
                                {
                                    className: R('list-form'),
                                    ref: f,
                                    value: D.shortcodes,
                                },
                                v.a.createElement(
                                    Ce.Scrollbars,
                                    null,
                                    v.a.createElement(
                                        'div',
                                        { className: R('list') },
                                        Object.entries(D.shortcodes)
                                            .reverse()
                                            .map(function(e) {
                                                var t,
                                                    r = tt(e, 2),
                                                    n = r[0],
                                                    o = r[1];
                                                return v.a.createElement(Ze, {
                                                    key: 'code'.concat(n),
                                                    code: o.code,
                                                    data: h.Component.list,
                                                    replacer: o.replacer,
                                                    type:
                                                        ((t =
                                                            o.type ||
                                                            'ShortcodeText'),
                                                        h.Component.get(t)),
                                                    onBlur: L,
                                                    onDelete: U,
                                                    onKeyDown: W,
                                                    onItemSelect: V,
                                                });
                                            }),
                                    ),
                                ),
                            ),
                            b(ot.STATUS.INITIALIZING) &&
                                v.a.createElement(P, {
                                    className: R('spinner'),
                                }),
                        )
                    );
                };
            (at.ENUMS = ot),
                (at.propTypes = {
                    className: b.a.string,
                    namespace: b.a.string,
                    onStatus: b.a.func,
                    title: b.a.string,
                }),
                (at.defaultProps = {
                    namespace: 'shortcodes',
                    onStatus: function() {},
                    title: 'Shortcodes',
                });
            var it = function() {
                    var e = Object(c.useHandle)('Shortcodes'),
                        t = Object(c.useHookComponent)('ReactiumUI'),
                        r = t.Button,
                        n = t.Icon,
                        o = Object(c.useSelect)(function(e) {
                            return i.a.get(e, 'Router.match.path');
                        });
                    return String(o).startsWith('/admin/shortcodes')
                        ? v.a.createElement(
                              r,
                              {
                                  appearance: r.ENUMS.APPEARANCE.PILL,
                                  className: 'mr-xs-24',
                                  color: r.ENUMS.COLOR.PRIMARY,
                                  onClick: function() {
                                      return e.save();
                                  },
                                  size: r.ENUMS.SIZE.XS,
                                  type: r.ENUMS.TYPE.BUTTON,
                              },
                              v.a.createElement(n, {
                                  name: 'Feather.Check',
                                  size: 18,
                              }),
                              v.a.createElement(
                                  'span',
                                  { className: 'hide-xs show-md ml-xs-12' },
                                  Object(c.__)('Save Shortcodes'),
                              ),
                          )
                        : null;
                },
                ct = function() {
                    var e = Object(c.useSelect)(function(e) {
                            return i.a.get(e, 'Router.match.path');
                        }),
                        t = String(e).startsWith('/admin/shortcodes'),
                        r = Object(c.useHookComponent)('ReactiumUI'),
                        n = r.Button,
                        o = r.Icon;
                    return t
                        ? v.a.createElement(
                              'ul',
                              { className: 'ar-breadcrumbs' },
                              v.a.createElement(
                                  'li',
                                  null,
                                  v.a.createElement(
                                      n,
                                      {
                                          className: 'px-0',
                                          color: n.ENUMS.COLOR.CLEAR,
                                          size: n.ENUMS.SIZE.SM,
                                          type: n.ENUMS.TYPE.BUTTON,
                                      },
                                      v.a.createElement(o, {
                                          name: 'Linear.Puzzle',
                                          className: 'mr-xs-12',
                                      }),
                                      Object(c.__)('Shortcodes'),
                                  ),
                              ),
                          )
                        : null;
                };
            function st(e, t, r, n, o, a, i) {
                try {
                    var c = e[a](i),
                        s = c.value;
                } catch (e) {
                    return void r(e);
                }
                c.done ? t(s) : Promise.resolve(s).then(n, o);
            }
            function ut(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise(function(n, o) {
                        var a = e.apply(t, r);
                        function i(e) {
                            st(a, n, o, i, c, 'next', e);
                        }
                        function c(e) {
                            st(a, n, o, i, c, 'throw', e);
                        }
                        i(void 0);
                    });
                };
            }
            function lt(e, t) {
                return (
                    (function(e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function(e, t) {
                        if (
                            'undefined' == typeof Symbol ||
                            !(Symbol.iterator in Object(e))
                        )
                            return;
                        var r = [],
                            n = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (
                                var i, c = e[Symbol.iterator]();
                                !(n = (i = c.next()).done) &&
                                (r.push(i.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (a = e);
                        } finally {
                            try {
                                n || null == c.return || c.return();
                            } finally {
                                if (o) throw a;
                            }
                        }
                        return r;
                    })(e, t) ||
                    (function(e, t) {
                        if (!e) return;
                        if ('string' == typeof e) return ft(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name);
                        if ('Map' === r || 'Set' === r) return Array.from(e);
                        if (
                            'Arguments' === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        )
                            return ft(e, t);
                    })(e, t) ||
                    (function() {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function ft(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            var dt = function() {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                    return String(i.a.get(e, 'url', '/'))
                        .replace(/\\/gi, '')
                        .toLowerCase()
                        .startsWith('/admin/shortcodes');
                },
                ht = function() {
                    var e = Object(c.useHookComponent)('MenuItem'),
                        t = lt(Object(p.useState)(!1), 2),
                        r = t[0],
                        n = t[1];
                    return (
                        Object(c.useAsyncEffect)(
                            ut(
                                regeneratorRuntime.mark(function e() {
                                    var t;
                                    return regeneratorRuntime.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (e.next = 2),
                                                        s.a.Capability.check(
                                                            'shortcodes.create',
                                                        )
                                                    );
                                                case 2:
                                                    (t = e.sent), n(t);
                                                case 4:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    }, e);
                                }),
                            ),
                            [],
                        ),
                        s.a.Plugin.isActive('Shortcodes') && r
                            ? v.a.createElement(e, {
                                  label: Object(c.__)('Shortcodes'),
                                  route: '/admin/shortcodes',
                                  icon: 'Linear.Puzzle',
                                  isActive: dt,
                              })
                            : null
                    );
                };
            r(19);
            r(20), r(21);
            var pt = r(7);
            function vt(e) {
                return (
                    (function(e) {
                        if (Array.isArray(e)) return gt(e);
                    })(e) ||
                    (function(e) {
                        if (
                            'undefined' != typeof Symbol &&
                            Symbol.iterator in Object(e)
                        )
                            return Array.from(e);
                    })(e) ||
                    yt(e) ||
                    (function() {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function mt(e, t) {
                return (
                    (function(e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function(e, t) {
                        if (
                            'undefined' == typeof Symbol ||
                            !(Symbol.iterator in Object(e))
                        )
                            return;
                        var r = [],
                            n = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (
                                var i, c = e[Symbol.iterator]();
                                !(n = (i = c.next()).done) &&
                                (r.push(i.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (a = e);
                        } finally {
                            try {
                                n || null == c.return || c.return();
                            } finally {
                                if (o) throw a;
                            }
                        }
                        return r;
                    })(e, t) ||
                    yt(e, t) ||
                    (function() {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function yt(e, t) {
                if (e) {
                    if ('string' == typeof e) return gt(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name),
                        'Map' === r || 'Set' === r
                            ? Array.from(e)
                            : 'Arguments' === r ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            ? gt(e, t)
                            : void 0
                    );
                }
            }
            function gt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            var bt = 0,
                wt = function e() {
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                'Cannot call a class as a function',
                            );
                    })(this, e),
                        (this.id = ''.concat(bt++));
                },
                Ot = new WeakMap(),
                St = new WeakMap(),
                kt = new WeakMap(),
                xt = new WeakMap(),
                Et = new WeakMap(),
                jt = (new WeakMap(), new WeakMap()),
                Pt = new WeakMap(),
                Tt = new WeakMap(),
                At =
                    (new WeakMap(),
                    Symbol('placeholder'),
                    function(e) {
                        return Ct(e) && 1 === e.nodeType;
                    }),
                Ct = function(e) {
                    return e instanceof Node;
                },
                Dt = function(e, t, r) {
                    for (
                        var n,
                            o = e.childNodes,
                            a = o[t],
                            i = t,
                            c = !1,
                            s = !1;
                        ((Ct((n = a)) && 8 === n.nodeType) ||
                            (At(a) && 0 === a.childNodes.length) ||
                            (At(a) &&
                                'false' ===
                                    a.getAttribute('contenteditable'))) &&
                        (!c || !s);

                    )
                        i >= o.length
                            ? ((c = !0), (i = t - 1), (r = 'backward'))
                            : i < 0
                            ? ((s = !0), (i = t + 1), (r = 'forward'))
                            : ((a = o[i]), (i += 'forward' === r ? 1 : -1));
                    return a;
                },
                Ft = {
                    findKey: function(e, t) {
                        var r = jt.get(t);
                        return r || ((r = new wt()), jt.set(t, r)), r;
                    },
                    findPath: function(e, t) {
                        for (var r = [], n = t; ; ) {
                            var o = St.get(n);
                            if (null == o) {
                                if ($.isEditor(n)) return r;
                                break;
                            }
                            var a = Ot.get(n);
                            if (null == a) break;
                            r.unshift(a), (n = o);
                        }
                        throw new Error(
                            'Unable to find the path for Slate node: '.concat(
                                JSON.stringify(t),
                            ),
                        );
                    },
                    isFocused: function(e) {
                        return !!Tt.get(e);
                    },
                    isReadOnly: function(e) {
                        return !!Pt.get(e);
                    },
                    blur: function(e) {
                        var t = Ft.toDOMNode(e, e);
                        Tt.set(e, !1),
                            window.document.activeElement === t && t.blur();
                    },
                    focus: function(e) {
                        var t = Ft.toDOMNode(e, e);
                        Tt.set(e, !0),
                            window.document.activeElement !== t &&
                                t.focus({ preventScroll: !0 });
                    },
                    deselect: function(e) {
                        var t = e.selection,
                            r = window.getSelection();
                        r && r.rangeCount > 0 && r.removeAllRanges(),
                            t && Oe.deselect(e);
                    },
                    hasDOMNode: function(e, t) {
                        var r,
                            n =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : {},
                            o = n.editable,
                            a = void 0 !== o && o,
                            i = Ft.toDOMNode(e, e);
                        try {
                            r = At(t) ? t : t.parentElement;
                        } catch (e) {
                            if (
                                !e.message.includes(
                                    'Permission denied to access property "nodeType"',
                                )
                            )
                                throw e;
                        }
                        return (
                            !!r &&
                            r.closest('[data-slate-editor]') === i &&
                                (!a ||
                                    r.isContentEditable ||
                                    !!r.getAttribute('data-slate-zero-width'))
                        );
                    },
                    insertData: function(e, t) {
                        e.insertData(t);
                    },
                    setFragmentData: function(e, t) {
                        e.setFragmentData(t);
                    },
                    toDOMNode: function(e, t) {
                        var r = $.isEditor(t)
                            ? kt.get(e)
                            : Et.get(Ft.findKey(e, t));
                        if (!r)
                            throw new Error(
                                'Cannot resolve a DOM node from Slate node: '.concat(
                                    JSON.stringify(t),
                                ),
                            );
                        return r;
                    },
                    toDOMPoint: function(e, t) {
                        var r,
                            n = mt($.node(e, t.path), 1)[0],
                            o = Ft.toDOMNode(e, n);
                        $.void(e, { at: t }) &&
                            (t = { path: t.path, offset: 0 });
                        for (
                            var a = 0,
                                i = 0,
                                c = Array.from(
                                    o.querySelectorAll(
                                        '[data-slate-string], [data-slate-zero-width]',
                                    ),
                                );
                            i < c.length;
                            i++
                        ) {
                            var s = c[i],
                                u = s.childNodes[0];
                            if (null != u && null != u.textContent) {
                                var l = u.textContent.length,
                                    f = s.getAttribute('data-slate-length'),
                                    d = a + (null == f ? l : parseInt(f, 10));
                                if (t.offset <= d) {
                                    r = [
                                        u,
                                        Math.min(l, Math.max(0, t.offset - a)),
                                    ];
                                    break;
                                }
                                a = d;
                            }
                        }
                        if (!r)
                            throw new Error(
                                'Cannot resolve a DOM point from Slate point: '.concat(
                                    JSON.stringify(t),
                                ),
                            );
                        return r;
                    },
                    toDOMRange: function(e, t) {
                        var r = t.anchor,
                            n = t.focus,
                            o = se.isBackward(t),
                            a = Ft.toDOMPoint(e, r),
                            i = se.isCollapsed(t) ? a : Ft.toDOMPoint(e, n),
                            c = window.document.createRange(),
                            s = mt(o ? i : a, 2),
                            u = s[0],
                            l = s[1],
                            f = mt(o ? a : i, 2),
                            d = f[0],
                            h = f[1],
                            p = !!(At(u) ? u : u.parentElement).getAttribute(
                                'data-slate-zero-width',
                            ),
                            v = !!(At(d) ? d : d.parentElement).getAttribute(
                                'data-slate-zero-width',
                            );
                        return (
                            c.setStart(u, p ? 1 : l), c.setEnd(d, v ? 1 : h), c
                        );
                    },
                    toSlateNode: function(e, t) {
                        var r = At(t) ? t : t.parentElement;
                        r &&
                            !r.hasAttribute('data-slate-node') &&
                            (r = r.closest('[data-slate-node]'));
                        var n = r ? xt.get(r) : null;
                        if (!n)
                            throw new Error(
                                'Cannot resolve a Slate node from DOM node: '.concat(
                                    r,
                                ),
                            );
                        return n;
                    },
                    findEventRange: function(e, t) {
                        'nativeEvent' in t && (t = t.nativeEvent);
                        var r = t,
                            n = r.clientX,
                            o = r.clientY,
                            a = r.target;
                        if (null == n || null == o)
                            throw new Error(
                                'Cannot resolve a Slate range from a DOM event: '.concat(
                                    t,
                                ),
                            );
                        var i,
                            c = Ft.toSlateNode(e, t.target),
                            s = Ft.findPath(e, c);
                        if ($.isVoid(e, c)) {
                            var u = a.getBoundingClientRect(),
                                l = e.isInline(c)
                                    ? n - u.left < u.left + u.width - n
                                    : o - u.top < u.top + u.height - o,
                                f = $.point(e, s, {
                                    edge: l ? 'start' : 'end',
                                }),
                                d = l ? $.before(e, f) : $.after(e, f);
                            if (d) return $.range(e, d);
                        }
                        var h = window.document;
                        if (h.caretRangeFromPoint)
                            i = h.caretRangeFromPoint(n, o);
                        else {
                            var p = h.caretPositionFromPoint(n, o);
                            p &&
                                ((i = h.createRange()).setStart(
                                    p.offsetNode,
                                    p.offset,
                                ),
                                i.setEnd(p.offsetNode, p.offset));
                        }
                        if (!i)
                            throw new Error(
                                'Cannot resolve a Slate range from a DOM event: '.concat(
                                    t,
                                ),
                            );
                        return Ft.toSlateRange(e, i);
                    },
                    toSlatePoint: function(e, t) {
                        var r = (function(e) {
                                var t = mt(e, 2),
                                    r = t[0],
                                    n = t[1];
                                if (At(r) && r.childNodes.length) {
                                    var o = n === r.childNodes.length,
                                        a = o ? 'backward' : 'forward';
                                    for (
                                        r = Dt(r, o ? n - 1 : n, a);
                                        At(r) && r.childNodes.length;

                                    ) {
                                        var i = o ? r.childNodes.length - 1 : 0;
                                        r = Dt(r, i, a);
                                    }
                                    n =
                                        o && null != r.textContent
                                            ? r.textContent.length
                                            : 0;
                                }
                                return [r, n];
                            })(t),
                            n = mt(r, 2),
                            o = n[0],
                            a = n[1],
                            i = o.parentNode,
                            c = null,
                            s = 0;
                        if (i) {
                            var u = i.closest('[data-slate-void="true"]'),
                                l = i.closest('[data-slate-leaf]'),
                                f = null;
                            if (l) {
                                c = l.closest('[data-slate-node="text"]');
                                var d = window.document.createRange();
                                d.setStart(c, 0), d.setEnd(o, a);
                                var h = d.cloneContents();
                                []
                                    .concat(
                                        vt(
                                            h.querySelectorAll(
                                                '[data-slate-zero-width]',
                                            ),
                                        ),
                                        vt(
                                            h.querySelectorAll(
                                                '[contenteditable=false]',
                                            ),
                                        ),
                                    )
                                    .forEach(function(e) {
                                        e.parentNode.removeChild(e);
                                    }),
                                    (s = h.textContent.length),
                                    (f = c);
                            } else
                                u &&
                                    ((c = (l = u.querySelector(
                                        '[data-slate-leaf]',
                                    )).closest('[data-slate-node="text"]')),
                                    (s = (f = l).textContent.length));
                            f &&
                                s === f.textContent.length &&
                                i.hasAttribute('data-slate-zero-width') &&
                                s--;
                        }
                        if (!c)
                            throw new Error(
                                'Cannot resolve a Slate point from DOM point: '.concat(
                                    t,
                                ),
                            );
                        var p = Ft.toSlateNode(e, c);
                        return { path: Ft.findPath(e, p), offset: s };
                    },
                    toSlateRange: function(e, t) {
                        var r, n, o, a, i;
                        if (
                            ((t instanceof Selection
                                ? t.anchorNode
                                : t.startContainer) &&
                                (t instanceof Selection
                                    ? ((r = t.anchorNode),
                                      (n = t.anchorOffset),
                                      (o = t.focusNode),
                                      (a = t.focusOffset),
                                      (i = t.isCollapsed))
                                    : ((r = t.startContainer),
                                      (n = t.startOffset),
                                      (o = t.endContainer),
                                      (a = t.endOffset),
                                      (i = t.collapsed))),
                            null == r || null == o || null == n || null == a)
                        )
                            throw new Error(
                                'Cannot resolve a Slate range from DOM range: '.concat(
                                    t,
                                ),
                            );
                        var c = Ft.toSlatePoint(e, [r, n]);
                        return {
                            anchor: c,
                            focus: i ? c : Ft.toSlatePoint(e, [o, a]),
                        };
                    },
                },
                Nt = Object(p.createContext)(null),
                Rt = function() {
                    var e = Object(p.useContext)(Nt);
                    if (!e)
                        throw new Error(
                            "The `useEditor` hook must be used inside the <Slate> component's context.",
                        );
                    return e;
                },
                Mt =
                    ('undefined' != typeof window
                        ? p.useLayoutEffect
                        : p.useEffect,
                    'undefined' != typeof navigator &&
                        'undefined' != typeof window &&
                        /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                        window.MSStream,
                    'undefined' != typeof navigator &&
                        /Mac OS X/.test(navigator.userAgent)),
                _t =
                    ('undefined' != typeof navigator &&
                        /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(
                            navigator.userAgent,
                        ),
                    'undefined' != typeof navigator &&
                        /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                    'undefined' != typeof navigator &&
                        /Edge?\/(?:[0-6][0-9]|[0-7][0-8])/i.test(
                            navigator.userAgent,
                        ),
                    {
                        bold: 'mod+b',
                        compose: [
                            'down',
                            'left',
                            'right',
                            'up',
                            'backspace',
                            'enter',
                        ],
                        moveBackward: 'left',
                        moveForward: 'right',
                        moveWordBackward: 'ctrl+left',
                        moveWordForward: 'ctrl+right',
                        deleteBackward: 'shift?+backspace',
                        deleteForward: 'shift?+delete',
                        extendBackward: 'shift+left',
                        extendForward: 'shift+right',
                        italic: 'mod+i',
                        splitBlock: 'shift?+enter',
                        undo: 'mod+z',
                    }),
                zt = {
                    moveLineBackward: 'opt+up',
                    moveLineForward: 'opt+down',
                    moveWordBackward: 'opt+left',
                    moveWordForward: 'opt+right',
                    deleteBackward: ['ctrl+backspace', 'ctrl+h'],
                    deleteForward: ['ctrl+delete', 'ctrl+d'],
                    deleteLineBackward: 'cmd+shift?+backspace',
                    deleteLineForward: ['cmd+shift?+delete', 'ctrl+k'],
                    deleteWordBackward: 'opt+shift?+backspace',
                    deleteWordForward: 'opt+shift?+delete',
                    extendLineBackward: 'opt+shift+up',
                    extendLineForward: 'opt+shift+down',
                    redo: 'cmd+shift+z',
                    transposeCharacter: 'ctrl+t',
                },
                It = {
                    deleteWordBackward: 'ctrl+shift?+backspace',
                    deleteWordForward: 'ctrl+shift?+delete',
                    redo: ['ctrl+y', 'ctrl+shift+z'],
                },
                Ht = function(e) {
                    var t = _t[e],
                        r = zt[e],
                        n = It[e],
                        o = t && Object(pt.isKeyHotkey)(t),
                        a = r && Object(pt.isKeyHotkey)(r),
                        i = n && Object(pt.isKeyHotkey)(n);
                    return function(e) {
                        return (
                            !(!o || !o(e)) ||
                            !!(Mt && a && a(e)) || !(Mt || !i || !i(e))
                        );
                    };
                };
            Ht('bold'),
                Ht('compose'),
                Ht('moveBackward'),
                Ht('moveForward'),
                Ht('deleteBackward'),
                Ht('deleteForward'),
                Ht('deleteLineBackward'),
                Ht('deleteLineForward'),
                Ht('deleteWordBackward'),
                Ht('deleteWordForward'),
                Ht('extendBackward'),
                Ht('extendForward'),
                Ht('extendLineBackward'),
                Ht('extendLineForward'),
                Ht('italic'),
                Ht('moveLineBackward'),
                Ht('moveLineForward'),
                Ht('moveWordBackward'),
                Ht('moveWordForward'),
                Ht('redo'),
                Ht('splitBlock'),
                Ht('transposeCharacter'),
                Ht('undo');
            function Bt(e, t) {
                return (
                    (function(e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function(e, t) {
                        if (
                            'undefined' == typeof Symbol ||
                            !(Symbol.iterator in Object(e))
                        )
                            return;
                        var r = [],
                            n = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (
                                var i, c = e[Symbol.iterator]();
                                !(n = (i = c.next()).done) &&
                                (r.push(i.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (a = e);
                        } finally {
                            try {
                                n || null == c.return || c.return();
                            } finally {
                                if (o) throw a;
                            }
                        }
                        return r;
                    })(e, t) ||
                    (function(e, t) {
                        if (!e) return;
                        if ('string' == typeof e) return Lt(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name);
                        if ('Map' === r || 'Set' === r) return Array.from(e);
                        if (
                            'Arguments' === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        )
                            return Lt(e, t);
                    })(e, t) ||
                    (function() {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function Lt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            var Ut = function(e) {
                    var t = Rt();
                    return function(r) {
                        r.preventDefault();
                        var n = (function(e) {
                            var r = Array.from($.nodes(t, { at: [] }));
                            if (!(r.length < 1))
                                for (var n = 0; n < r.length; n++) {
                                    var o = Bt(r[n], 2),
                                        a = o[0],
                                        c = o[1];
                                    if (i.a.get(a, 'id') === e) return c;
                                }
                        })(e);
                        n && (Oe.removeNodes(t, { at: n }), Ft.focus(t));
                    };
                },
                Wt = function(e) {
                    var t = e.onClick,
                        r = Object(c.useHookComponent)('ReactiumUI'),
                        n = r.Button,
                        o = r.Icon;
                    return v.a.createElement(
                        n,
                        {
                            appearance: 'circle',
                            color: 'danger',
                            className: 'delete-btn',
                            onClick: t,
                        },
                        v.a.createElement(o, { name: 'Feather.X' }),
                    );
                };
            s.a.Plugin.register('shortcodes', 1).then(function() {
                s.a.RTE.Plugin.register('shortcode', qe),
                    s.a.Component.register('ShortcodeTextEditor', function(e) {
                        var t = e.children,
                            r = i.a.get(t, 'props.node').id,
                            n = Ut(r);
                        return v.a.createElement(
                            'span',
                            {
                                className: 'rte-shortcode strong',
                                contentEditable: !1,
                            },
                            t,
                            v.a.createElement(Wt, { onClick: n }),
                        );
                    }),
                    s.a.Component.register('ShortcodeLinkEditor', function(e) {
                        var t = e.children,
                            r = i.a.get(t, 'props.node'),
                            n = r.id,
                            a = r.shortcode,
                            c = a.attributes,
                            s = void 0 === c ? {} : c,
                            u = a.code,
                            l = Ut(n);
                        return (
                            (u = String(u).replace(/\[|\]/gm, '')),
                            (s = o.a.compact(
                                Object.entries(s).map(function(e) {
                                    var t = Bt(e, 2),
                                        r = t[0],
                                        n = t[1];
                                    return n
                                        ? ''.concat(r, '="').concat(n, '"')
                                        : null;
                                }),
                            )),
                            v.a.createElement(
                                'span',
                                {
                                    className: 'rte-shortcode',
                                    contentEditable: !1,
                                },
                                v.a.createElement('strong', null, '[', u),
                                s.length > 0
                                    ? v.a.createElement(
                                          'kbd',
                                          null,
                                          ' ' + s.join(' '),
                                      )
                                    : '',
                                v.a.createElement('strong', null, ']'),
                                v.a.createElement(Wt, { onClick: l }),
                            )
                        );
                    }),
                    h.Component.register('ShortcodeText', {
                        component: 'ShortcodeText',
                        editorComponent: 'ShortcodeTextEditor',
                        label: 'Text',
                        order: -1,
                        attributes: void 0,
                        validate: void 0,
                    }),
                    h.Component.register('ShortcodeLink', {
                        component: 'ShortcodeLink',
                        editorComponent: 'ShortcodeLinkEditor',
                        label: 'Link',
                        attributes: {
                            url: {
                                type: 'text',
                                label: 'URL',
                                placeholder: 'http://yoururlhere.com',
                            },
                            target: {
                                type: 'text',
                                label: 'Target',
                                placeholder: '_blank',
                            },
                            text: {
                                type: 'text',
                                label: 'Text',
                                placeholder: Object(c.__)('click here'),
                            },
                        },
                    }),
                    s.a.Zone.addComponent({
                        id: 'SHORTCODES-BREADCRUMBS',
                        zone: ['admin-header'],
                        component: ct,
                        order: 0,
                    }),
                    s.a.Zone.addComponent({
                        id: 'SHORTCODES-SAVE-WIDGET',
                        zone: ['admin-logo'],
                        component: it,
                        order: 100,
                    }),
                    s.a.Zone.addComponent({
                        id: 'SHORTCODES-SIDEBAR-WIDGET',
                        zone: ['admin-sidebar-menu'],
                        component: ht,
                        order: 401,
                    }),
                    s.a.Zone.addComponent({
                        id: 'SHORTCODES-EDITOR',
                        zone: ['admin-shortcodes'],
                        component: at,
                        order: 0,
                    }),
                    s.a.Capability.Settings.register('shortcodes-retrieve', {
                        zone: 'app-settings',
                        capability: 'shortcodes.retrieve',
                        title: Object(c.__)('Shortcodes: Retrieve'),
                        tooltip: Object(c.__)(
                            'Able to view Shortcodes page when logged in.',
                        ),
                    }),
                    s.a.Capability.Settings.register('shortcodes-create', {
                        zone: 'app-settings',
                        capability: 'shortcodes.create',
                        title: Object(c.__)('Shortcodes: Create'),
                        tooltip: Object(c.__)(
                            'Able to create Shortcodes when logged in.',
                        ),
                    }),
                    s.a.Capability.Settings.register('shortcodes-update', {
                        zone: 'app-settings',
                        capability: 'shortcodes.update',
                        title: Object(c.__)('Shortcodes: Update'),
                        tooltip: Object(c.__)(
                            'Able to update Shortcodes when logged in.',
                        ),
                    }),
                    s.a.Capability.Settings.register('shortcodes-delete', {
                        zone: 'app-settings',
                        capability: 'shortcodes.delete',
                        title: Object(c.__)('Shortcodes: Delete'),
                        tooltip: Object(c.__)(
                            'Able to delete Shortcodes when logged in.',
                        ),
                    });
            });
        },
    ]);
});
