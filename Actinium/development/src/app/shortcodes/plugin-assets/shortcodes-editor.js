!(function(e, t) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = t(
              require('react'),
              require('reactium-core/sdk'),
              require('object-path'),
              require('prop-types'),
              require('underscore'),
              require('classnames'),
          ))
        : 'function' == typeof define && define.amd
        ? define([
              'react',
              'reactium-core/sdk',
              'object-path',
              'prop-types',
              'underscore',
              'classnames',
          ], t)
        : 'object' == typeof exports
        ? (exports['shortcodes-editor'] = t(
              require('react'),
              require('reactium-core/sdk'),
              require('object-path'),
              require('prop-types'),
              require('underscore'),
              require('classnames'),
          ))
        : (e['shortcodes-editor'] = t(
              e.react,
              e['reactium-core/sdk'],
              e['object-path'],
              e['prop-types'],
              e.underscore,
              e.classnames,
          ));
})(window, function(e, t, r, n, o, a) {
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
            r((r.s = 15))
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
                        return ce;
                    });
                var a,
                    i,
                    s = 'undefined' != typeof Symbol,
                    c = 'undefined' != typeof Map,
                    u = 'undefined' != typeof Set,
                    l = s
                        ? Symbol('immer-nothing')
                        : (((o = {})['immer-nothing'] = !0), o),
                    f = s ? Symbol('immer-draftable') : '__$immer_draftable',
                    d = s ? Symbol('immer-state') : '__$immer_state',
                    h = s ? Symbol.iterator : '@@iterator',
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
                function g(e) {
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
                            k(e) ||
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
                var y =
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
                        ? y(e).forEach(function(r) {
                              return t(r, e[r], e);
                          })
                        : e.forEach(function(r, n) {
                              return t(n, r, e);
                          });
                }
                function w(e) {
                    if ((e || D(), e[d]))
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
                        : k(e)
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
                function x(e, t) {
                    return w(e) === a.Map ? e.get(t) : e[t];
                }
                function S(e, t) {
                    return e === t
                        ? 0 !== e || 1 / e == 1 / t
                        : e != e && t != t;
                }
                function k(e) {
                    return c && e instanceof Map;
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
                        y(e).forEach(function(n) {
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
                    if (g(e) && !m(e) && !Object.isFrozen(e)) {
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
                function D() {
                    throw new Error('Illegal state, please file a bug');
                }
                var C = (function() {
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
                function R(e, t, r) {
                    var n = r.drafts[0],
                        o = void 0 !== t && t !== n;
                    if ((e.willFinalize(r, t, o), o)) {
                        if (n[d].modified)
                            throw (r.revoke(),
                            new Error(
                                'An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.',
                            ));
                        g(t) && ((t = N(e, t, r)), r.parent || z(e, t)),
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
                    } else t = N(e, n, r, []);
                    return (
                        r.revoke(),
                        r.patches &&
                            r.patchListener(r.patches, r.inversePatches),
                        t !== l ? t : void 0
                    );
                }
                function N(e, t, r, n) {
                    var o = t[d];
                    if (!o) return Object.isFrozen(t) ? t : M(e, t, r);
                    if (o.scope !== r) return t;
                    if (!o.modified) return z(e, o.base, !0), o.base;
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
                                    s = o.copy;
                                b(a, function(t) {
                                    O(s, t) || e.onDelete(o, t);
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
                                                    var s = x(o, e),
                                                        c = x(a, e),
                                                        u = i
                                                            ? O(o, e)
                                                                ? 'replace'
                                                                : 'add'
                                                            : 'remove';
                                                    if (
                                                        s !== c ||
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
                                                                      value: c,
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
                                                                          value: s,
                                                                      }
                                                                    : {
                                                                          op:
                                                                              'replace',
                                                                          path: l,
                                                                          value: s,
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
                                                    s = e.assigned,
                                                    c = e.copy;
                                                c || D();
                                                c.length < i.length &&
                                                    ((i = (o = [c, i])[0]),
                                                    (c = o[1]),
                                                    (r = (a = [n, r])[0]),
                                                    (n = a[1]));
                                                var u = c.length - i.length,
                                                    l = 0;
                                                for (
                                                    ;
                                                    i[l] === c[l] &&
                                                    l < i.length;

                                                )
                                                    ++l;
                                                var f = i.length;
                                                for (
                                                    ;
                                                    f > l &&
                                                    i[f - 1] === c[f + u - 1];

                                                )
                                                    --f;
                                                for (var d = l; d < f; ++d)
                                                    if (s[d] && c[d] !== i[d]) {
                                                        var h = t.concat([d]);
                                                        r.push({
                                                            op: 'replace',
                                                            path: h,
                                                            value: c[d],
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
                                                        value: c[d],
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
                        b(t, function(i, s) {
                            return (function e(t, r, n, o, i, s, c, u) {
                                if (c === i)
                                    throw Error(
                                        'Immer forbids circular references',
                                    );
                                var l = !!o && i === n,
                                    f = E(i);
                                if (m(c)) {
                                    var d =
                                        u && l && !f && !O(o.assigned, s)
                                            ? u.concat(s)
                                            : void 0;
                                    (c = N(t, c, r, d)),
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
                                        })(i, s, c),
                                        m(c) && (r.canAutoFreeze = !1);
                                } else {
                                    if (l && S(c, x(o.base, s))) return;
                                    g(c) &&
                                        (b(c, function(a, i) {
                                            return e(t, r, n, o, c, a, i, u);
                                        }),
                                        r.parent || z(t, c));
                                }
                                l && t.onAssign && !f && t.onAssign(o, s, c);
                            })(e, r, t, o, t, i, s, n);
                        }),
                        t
                    );
                }
                function z(e, t, r) {
                    void 0 === r && (r = !1), e.autoFreeze && !m(t) && T(t, r);
                }
                var _ = {
                        get: function(e, t) {
                            if (t === d) return e;
                            var r = e.drafts;
                            if (!e.modified && O(r, t)) return r[t];
                            var n = j(e)[t];
                            if (e.finalized || !g(n)) return n;
                            if (e.modified) {
                                if (n !== I(e.base, t)) return n;
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
                                var n = I(e.base, t);
                                if (
                                    r
                                        ? S(n, r) || r === e.drafts[t]
                                        : S(n, r) && t in e.base
                                )
                                    return !0;
                                L(e), B(e);
                            }
                            return (e.assigned[t] = !0), (e.copy[t] = r), !0;
                        },
                        deleteProperty: function(e, t) {
                            return (
                                void 0 !== I(e.base, t) || t in e.base
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
                    H = {};
                function I(e, t) {
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
                            ? m(t) && t[d].scope === e && J(e.drafts)
                            : (e.patches &&
                                  (function e(t) {
                                      if (!t || 'object' !== n(t)) return;
                                      var r = t[d];
                                      if (!r) return;
                                      var o = r.base,
                                          a = r.draft,
                                          s = r.assigned,
                                          c = r.type;
                                      if (c === i.ES5Object)
                                          b(a, function(t) {
                                              t !== d &&
                                                  (void 0 !== o[t] || O(o, t)
                                                      ? s[t] || e(a[t])
                                                      : ((s[t] = !0), q(r)));
                                          }),
                                              b(o, function(e) {
                                                  void 0 !== a[e] ||
                                                      O(a, e) ||
                                                      ((s[e] = !1), q(r));
                                              });
                                      else if (c === i.ES5Array) {
                                          if (
                                              ($(r) && (q(r), (s.length = !0)),
                                              a.length < o.length)
                                          )
                                              for (
                                                  var u = a.length;
                                                  u < o.length;
                                                  u++
                                              )
                                                  s[u] = !1;
                                          else
                                              for (
                                                  u = o.length;
                                                  u < a.length;
                                                  u++
                                              )
                                                  s[u] = !0;
                                          var l = Math.min(a.length, o.length);
                                          for (u = 0; u < l; u++)
                                              void 0 === s[u] && e(a[u]);
                                      }
                                  })(e.drafts[0]),
                              J(e.drafts));
                }
                function V(e, t) {
                    var r = Array.isArray(e),
                        n = G(e);
                    b(n, function(t) {
                        !(function(e, t, r) {
                            var n = Z[t];
                            n
                                ? (n.enumerable = r)
                                : (Z[t] = n = {
                                      configurable: !0,
                                      enumerable: r,
                                      get: function() {
                                          return (function(e, t) {
                                              K(e);
                                              var r = W(j(e), t);
                                              if (e.finalizing) return r;
                                              if (r === W(e.base, t) && g(r))
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
                                                  (K(e),
                                                  (e.assigned[t] = !0),
                                                  !e.modified)
                                              ) {
                                                  if (S(r, W(j(e), t))) return;
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
                        s,
                        c = {
                            type: r ? i.ES5Array : i.ES5Object,
                            scope: t ? t.scope : C.current,
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
                        (s = c),
                        Object.defineProperty(o, a, {
                            value: s,
                            enumerable: !1,
                            writable: !0,
                        }),
                        n
                    );
                }
                function W(e, t) {
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
                    e.copy || (e.copy = G(e.base));
                }
                function G(e) {
                    var t = e && e[d];
                    if (t) {
                        t.finalizing = !0;
                        var r = P(t.draft, !0);
                        return (t.finalizing = !1), r;
                    }
                    return P(e);
                }
                b(_, function(e, t) {
                    H[e] = function() {
                        return (
                            (arguments[0] = arguments[0][0]),
                            t.apply(this, arguments)
                        );
                    };
                }),
                    (H.deleteProperty = function(e, t) {
                        if (isNaN(parseInt(t)))
                            throw new Error(
                                'Immer only supports deleting array indices',
                            );
                        return _.deleteProperty.call(this, e[0], t);
                    }),
                    (H.set = function(e, t, r) {
                        if ('length' !== t && isNaN(parseInt(t)))
                            throw new Error(
                                "Immer only supports setting array indices and the 'length' property",
                            );
                        return _.set.call(this, e[0], t, r, e[0]);
                    });
                var Z = {};
                function K(e) {
                    if (!0 === e.revoked)
                        throw new Error(
                            'Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? ' +
                                JSON.stringify(j(e)),
                        );
                }
                function J(e) {
                    for (var t = e.length - 1; t >= 0; t--) {
                        var r = e[t][d];
                        if (!r.modified)
                            switch (r.type) {
                                case i.ES5Array:
                                    $(r) && q(r);
                                    break;
                                case i.ES5Object:
                                    X(r) && q(r);
                            }
                    }
                }
                function X(e) {
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
                        var s = r[a],
                            c = s && s[d];
                        if (c ? c.base !== i : !S(s, i)) return !0;
                    }
                    return n.length !== Object.keys(t).length;
                }
                function $(e) {
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
                                scope: t ? t.scope : C.current,
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
                                K(r),
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
                                K(t),
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
                                K(e),
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
                            K(t);
                            var r = j(t).get(e);
                            if (t.finalized || !g(r)) return r;
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
                                scope: t ? t.scope : C.current,
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
                                K(t),
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
                                K(t),
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
                                K(t),
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
                                K(e),
                                re(e),
                                e.scope.immer.markChanged(e),
                                e.copy.clear()
                            );
                        }),
                        (r.values = function() {
                            var e = this[d];
                            return K(e), re(e), e.copy.values();
                        }),
                        (r.entries = function() {
                            var e = this[d];
                            return K(e), re(e), e.copy.entries();
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
                            if (g(t)) {
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
                            r.length || D();
                            for (var i = e, s = 0; s < r.length - 1; s++)
                                if (!(i = x(i, r[s])) || 'object' !== n(i))
                                    throw new Error(
                                        "Cannot apply patch, path doesn't resolve: " +
                                            r.join('/'),
                                    );
                            var c = w(i),
                                u = oe(t.value),
                                l = r[r.length - 1];
                            switch (o) {
                                case 'replace':
                                    switch (c) {
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
                                    switch (c) {
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
                                    switch (c) {
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
                    if (k(e))
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
                            var a = arguments[t], i = 0, s = a.length;
                            i < s;
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
                    se = new ((function() {
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
                                            var o = [], s = 1;
                                            s < arguments.length;
                                            s++
                                        )
                                            o[s - 1] = r[s];
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
                                if (g(e)) {
                                    var s = C.enter(this),
                                        c = this.createProxy(e, void 0),
                                        u = !0;
                                    try {
                                        (n = t(c)), (u = !1);
                                    } finally {
                                        u ? s.revoke() : s.leave();
                                    }
                                    return 'undefined' != typeof Promise &&
                                        n instanceof Promise
                                        ? n.then(
                                              function(e) {
                                                  return (
                                                      s.usePatches(r),
                                                      R(o, e, s)
                                                  );
                                              },
                                              function(e) {
                                                  throw (s.revoke(), e);
                                              },
                                          )
                                        : (s.usePatches(r), R(this, n, s));
                                }
                                if ((n = t(e)) !== l)
                                    return (
                                        void 0 === n && (n = e),
                                        z(this, n, !0),
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
                                    : (r && D(),
                                      [
                                          this.produce(e, t, function(e, t) {
                                              (n = e), (o = t);
                                          }),
                                          n,
                                          o,
                                      ]);
                            }),
                            (e.prototype.createDraft = function(e) {
                                if (!g(e))
                                    throw new Error(
                                        'First argument to `createDraft` must be a plain object, an array, or an immerable object',
                                    );
                                var t = C.enter(this),
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
                                return n.usePatches(t), R(this, void 0, n);
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
                                var r = k(e)
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
                                                      : C.current,
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
                                              a = _;
                                          r && ((o = [n]), (a = H));
                                          var s = Proxy.revocable(o, a),
                                              c = s.revoke,
                                              u = s.proxy;
                                          return (
                                              (n.draft = u), (n.revoke = c), u
                                          );
                                      })(e, t)
                                    : V(e, t);
                                return (
                                    (t ? t.scope : C.current).drafts.push(r), r
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
                    ce = se.produce,
                    ue =
                        (se.produceWithPatches.bind(se),
                        se.setAutoFreeze.bind(se),
                        se.setUseProxies.bind(se),
                        se.applyPatches.bind(se),
                        se.createDraft.bind(se)),
                    le = se.finishDraft.bind(se);
            }.call(this, r(9)));
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
                o = r(18),
                a = (n = o) && n.__esModule ? n : { default: n };
            (t.default = a.default), (t.Scrollbars = a.default);
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
            var r,
                n,
                o = (e.exports = {});
            function a() {
                throw new Error('setTimeout has not been defined');
            }
            function i() {
                throw new Error('clearTimeout has not been defined');
            }
            function s(e) {
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
            var c,
                u = [],
                l = !1,
                f = -1;
            function d() {
                l &&
                    c &&
                    ((l = !1),
                    c.length ? (u = c.concat(u)) : (f = -1),
                    u.length && h());
            }
            function h() {
                if (!l) {
                    var e = s(d);
                    l = !0;
                    for (var t = u.length; t; ) {
                        for (c = u, u = []; ++f < t; ) c && c[f].run();
                        (f = -1), (t = u.length);
                    }
                    (c = null),
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
                u.push(new p(e, t)), 1 !== u.length || l || s(h);
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
            var n = r(21),
                o = r(22),
                a = { float: 'cssFloat' },
                i = r(25);
            function s(e, t, r) {
                var s = a[t];
                if (
                    (void 0 === s &&
                        (s = (function(e) {
                            var t = o(e),
                                r = n(t);
                            return (a[t] = a[e] = a[r] = r), r;
                        })(t)),
                    s)
                ) {
                    if (void 0 === r) return e.style[s];
                    e.style[s] = i(s, r);
                }
            }
            function c(e, t) {
                for (var r in t) t.hasOwnProperty(r) && s(e, r, t[r]);
            }
            function u() {
                2 === arguments.length
                    ? 'string' == typeof arguments[1]
                        ? (arguments[0].style.cssText = arguments[1])
                        : c(arguments[0], arguments[1])
                    : s(arguments[0], arguments[1], arguments[2]);
            }
            (e.exports = u),
                (e.exports.set = u),
                (e.exports.get = function(e, t) {
                    return Array.isArray(t)
                        ? t.reduce(function(t, r) {
                              return (t[r] = s(e, r || '')), t;
                          }, {})
                        : s(e, t || '');
                });
        },
        function(e, t) {
            (function(t) {
                e.exports = t;
            }.call(this, {}));
        },
        function(e, t, r) {
            var n = r(16),
                o = r(17);
            e.exports = function(e, t, r) {
                var a = (t && r) || 0;
                'string' == typeof e &&
                    ((t = 'binary' === e ? new Array(16) : null), (e = null));
                var i = (e = e || {}).random || (e.rng || n)();
                if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), t))
                    for (var s = 0; s < 16; ++s) t[a + s] = i[s];
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
                    var s = 'object' == a(t) && t,
                        c = 'object' == a(e) && e && e.exports == s && e,
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
                    if ('object' == a(r(11)) && r(11))
                        void 0 ===
                            (o = function() {
                                return d;
                            }.call(t, r, t, e)) || (e.exports = o);
                    else if (s && !s.nodeType)
                        if (c) c.exports = d;
                        else
                            for (var h in d)
                                d.hasOwnProperty(h) && (s[h] = d[h]);
                    else i.esrever = d;
                })(this);
            }.call(this, r(33)(e), r(8)));
        },
        function(e, t) {
            e.exports = a;
        },
        function(e, t, r) {
            r(34);
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
                i = r(19),
                s = y(i),
                c = y(r(10)),
                u = r(0),
                l = y(r(4)),
                f = y(r(26)),
                d = y(r(27)),
                h = y(r(28)),
                p = y(r(29)),
                v = y(r(30)),
                m = r(31),
                g = r(32);
            function y(e) {
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
                                    s = e.scrollHeight,
                                    c = void 0 === s ? 0 : s,
                                    u = e.clientWidth,
                                    l = void 0 === u ? 0 : u,
                                    f = e.clientHeight,
                                    d = void 0 === f ? 0 : f;
                                return {
                                    left: r / (i - l) || 0,
                                    top: o / (c - d) || 0,
                                    scrollLeft: r,
                                    scrollTop: o,
                                    scrollWidth: i,
                                    scrollHeight: c,
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
                                    s = Math.ceil((a / o) * i);
                                return i === s ? 0 : t || Math.max(s, r);
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
                                    s = Math.ceil((a / o) * i);
                                return i === s ? 0 : t || Math.max(s, r);
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
                                (0, c.default)(
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
                                (0, c.default)(
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
                                    (0, c.default)(this.trackHorizontal, {
                                        opacity: 1,
                                    }),
                                    (0, c.default)(this.trackVertical, {
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
                                                c.default)(e.trackHorizontal, {
                                                    opacity: 0,
                                                }),
                                                    (0,
                                                    c.default)(
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
                                    s.default.cancel(this.requestFrame),
                                    (this.requestFrame = (0, s.default)(
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
                                        s = o.scrollWidth,
                                        u = (0, p.default)(
                                            this.trackHorizontal,
                                        ),
                                        l = this.getThumbHorizontalWidth(),
                                        f = {
                                            width: l,
                                            transform:
                                                'translateX(' +
                                                (a / (s - i)) * (u - l) +
                                                'px)',
                                        },
                                        h = o.scrollTop,
                                        m = o.clientHeight,
                                        g = o.scrollHeight,
                                        y = (0, v.default)(this.trackVertical),
                                        b = this.getThumbVerticalHeight(),
                                        w = {
                                            height: b,
                                            transform:
                                                'translateY(' +
                                                (h / (g - m)) * (y - b) +
                                                'px)',
                                        };
                                    if (n) {
                                        var O = {
                                                visibility:
                                                    s > i
                                                        ? 'visible'
                                                        : 'hidden',
                                            },
                                            x = {
                                                visibility:
                                                    g > m
                                                        ? 'visible'
                                                        : 'hidden',
                                            };
                                        (0, c.default)(this.trackHorizontal, O),
                                            (0, c.default)(
                                                this.trackVertical,
                                                x,
                                            );
                                    }
                                    (0, c.default)(this.thumbHorizontal, f),
                                        (0, c.default)(this.thumbVertical, w);
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
                                    s = r.renderThumbHorizontal,
                                    c = r.renderThumbVertical,
                                    l = r.tagName,
                                    h = (r.hideTracksWhenNotNeeded, r.autoHide),
                                    p = (r.autoHideTimeout, r.autoHideDuration),
                                    v =
                                        (r.thumbSize,
                                        r.thumbMinSize,
                                        r.universal),
                                    g = r.autoHeight,
                                    y = r.autoHeightMin,
                                    b = r.autoHeightMax,
                                    w = r.style,
                                    O = r.children,
                                    x = (function(e, t) {
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
                                    S = this.state.didMountUniversal,
                                    k = o(
                                        {},
                                        m.containerStyleDefault,
                                        g &&
                                            o({}, m.containerStyleAutoHeight, {
                                                minHeight: y,
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
                                        g &&
                                            o({}, m.viewStyleAutoHeight, {
                                                minHeight: (0, f.default)(y)
                                                    ? 'calc(' +
                                                      y +
                                                      ' + ' +
                                                      t +
                                                      'px)'
                                                    : y + t,
                                                maxHeight: (0, f.default)(b)
                                                    ? 'calc(' +
                                                      b +
                                                      ' + ' +
                                                      t +
                                                      'px)'
                                                    : b + t,
                                            }),
                                        g &&
                                            v &&
                                            !S && {
                                                minHeight: y,
                                                maxHeight: b,
                                            },
                                        v && !S && m.viewStyleUniversalInitial,
                                    ),
                                    j = {
                                        transition: 'opacity ' + p + 'ms',
                                        opacity: 0,
                                    },
                                    P = o(
                                        {},
                                        m.trackHorizontalStyleDefault,
                                        h && j,
                                        (!t || (v && !S)) && {
                                            display: 'none',
                                        },
                                    ),
                                    T = o(
                                        {},
                                        m.trackVerticalStyleDefault,
                                        h && j,
                                        (!t || (v && !S)) && {
                                            display: 'none',
                                        },
                                    );
                                return (0, u.createElement)(
                                    l,
                                    o({}, x, {
                                        style: k,
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
                                                s({
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
                                                c({
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
                    renderView: g.renderViewDefault,
                    renderTrackHorizontal: g.renderTrackHorizontalDefault,
                    renderTrackVertical: g.renderTrackVerticalDefault,
                    renderThumbHorizontal: g.renderThumbHorizontalDefault,
                    renderThumbVertical: g.renderThumbVerticalDefault,
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
                    var n = r(20),
                        o = 'undefined' == typeof window ? t : window,
                        a = ['moz', 'webkit'],
                        i = 'AnimationFrame',
                        s = o['request' + i],
                        c = o['cancel' + i] || o['cancelRequest' + i],
                        u = 0;
                    !s && u < a.length;
                    u++
                )
                    (s = o[a[u] + 'Request' + i]),
                        (c =
                            o[a[u] + 'Cancel' + i] ||
                            o[a[u] + 'CancelRequest' + i]);
                if (!s || !c) {
                    var l = 0,
                        f = 0,
                        d = [];
                    (s = function(e) {
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
                        (c = function(e) {
                            for (var t = 0; t < d.length; t++)
                                d[t].handle === e && (d[t].cancelled = !0);
                        });
                }
                (e.exports = function(e) {
                    return s.call(o, e);
                }),
                    (e.exports.cancel = function() {
                        c.apply(o, arguments);
                    }),
                    (e.exports.polyfill = function(e) {
                        e || (e = o),
                            (e.requestAnimationFrame = s),
                            (e.cancelAnimationFrame = c);
                    });
            }.call(this, r(8)));
        },
        function(e, t, r) {
            (function(t) {
                (function() {
                    var r, n, o, a, i, s;
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
                          (s = 1e9 * t.uptime()),
                          (i = a - s))
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
            }.call(this, r(9)));
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
            var n = r(23);
            e.exports = function(e) {
                return n(e).replace(/\s(\w)/g, function(e, t) {
                    return t.toUpperCase();
                });
            };
        },
        function(e, t, r) {
            var n = r(24);
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
                o = r(10),
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
                        r = s(e, ['style']),
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
                        r = s(e, ['style']),
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
                        r = s(e, ['style']),
                        o = n({}, t, {
                            cursor: 'pointer',
                            borderRadius: 'inherit',
                            backgroundColor: 'rgba(0,0,0,.2)',
                        });
                    return i.default.createElement('div', n({ style: o }, r));
                }),
                (t.renderThumbVerticalDefault = function(e) {
                    var t = e.style,
                        r = s(e, ['style']),
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
            function s(e, t) {
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
            'use strict';
            r.r(t);
            var n = r(0),
                o = r.n(n),
                a = r(5),
                i = r.n(a),
                s = r(12),
                c = r.n(s),
                u = r(2),
                l = r.n(u),
                f = r(4),
                d = r.n(f);
            function h(e) {
                return (h =
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
            function p(e) {
                return (
                    !0 ==
                        (null != (t = e) &&
                            'object' === h(t) &&
                            !1 === Array.isArray(t)) &&
                    '[object Object]' === Object.prototype.toString.call(e)
                );
                var t;
            }
            var v = function(e) {
                    var t, r;
                    return (
                        !1 !== p(e) &&
                        'function' == typeof (t = e.constructor) &&
                            !1 !== p((r = t.prototype)) &&
                                !1 !== r.hasOwnProperty('isPrototypeOf')
                    );
                },
                m = r(3),
                g = r(13);
            function y(e, t, r) {
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
            function b(e) {
                return (
                    (function(e) {
                        if (Array.isArray(e)) return S(e);
                    })(e) ||
                    (function(e) {
                        if (
                            'undefined' != typeof Symbol &&
                            Symbol.iterator in Object(e)
                        )
                            return Array.from(e);
                    })(e) ||
                    x(e) ||
                    (function() {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function w(e, t) {
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
                                var i, s = e[Symbol.iterator]();
                                !(n = (i = s.next()).done) &&
                                (r.push(i.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (a = e);
                        } finally {
                            try {
                                n || null == s.return || s.return();
                            } finally {
                                if (o) throw a;
                            }
                        }
                        return r;
                    })(e, t) ||
                    x(e, t) ||
                    (function() {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function O(e, t) {
                var r;
                if (
                    'undefined' == typeof Symbol ||
                    null == e[Symbol.iterator]
                ) {
                    if (
                        Array.isArray(e) ||
                        (r = x(e)) ||
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
                    s = !1;
                return {
                    s: function() {
                        r = e[Symbol.iterator]();
                    },
                    n: function() {
                        var e = r.next();
                        return (i = e.done), e;
                    },
                    e: function(e) {
                        (s = !0), (a = e);
                    },
                    f: function() {
                        try {
                            i || null == r.return || r.return();
                        } finally {
                            if (s) throw a;
                        }
                    },
                };
            }
            function x(e, t) {
                if (e) {
                    if ('string' == typeof e) return S(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name),
                        'Map' === r || 'Set' === r
                            ? Array.from(e)
                            : 'Arguments' === r ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            ? S(e, t)
                            : void 0
                    );
                }
            }
            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function k(e, t, r) {
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
            function E(e, t) {
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
            var j = new WeakMap(),
                P = (new WeakMap(), new WeakMap()),
                T = new WeakMap(),
                A = new WeakMap(),
                D = new WeakMap(),
                C = /\s/,
                F = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
                R = /['\u2018\u2019]/,
                N = function(e) {
                    for (var t = 0, r = null, n = e.charCodeAt(0); n; )
                        if (_(n)) {
                            var o = H(n, e, t);
                            if ('SURR' === r || 'BMP' === r) break;
                            (t += 2),
                                (r = o ? 'MOD' : 'SURR'),
                                (n = e.charCodeAt(t));
                        } else if (8205 !== n)
                            if (B(n)) {
                                if (r && 'ZWJ' !== r && 'VAR' !== r) break;
                                (t += 1), (r = 'BMP'), (n = e.charCodeAt(t));
                            } else {
                                if (!I(n)) {
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
                M = function(e) {
                    for (var t, r = 0, n = 0, o = !1; (t = e.charAt(n)); ) {
                        var a = N(t);
                        t = e.slice(n, n + a);
                        var i = e.slice(n + a);
                        if (z(t, i)) (o = !0), (r += a);
                        else {
                            if (o) break;
                            r += a;
                        }
                        n += a;
                    }
                    return r;
                },
                z = function e(t, r) {
                    if (C.test(t)) return !1;
                    if (R.test(t)) {
                        var n = r.charAt(0),
                            o = N(n);
                        if (e((n = r.slice(0, o)), r.slice(o))) return !0;
                    }
                    return !F.test(t);
                },
                _ = function(e) {
                    return 55296 <= e && e <= 57343;
                },
                H = function(e, t, r) {
                    if (55356 === e) {
                        var n = t.charCodeAt(r + 1);
                        return n <= 57343 && n >= 57339;
                    }
                    return !1;
                },
                I = function(e) {
                    return e <= 65039 && e >= 65024;
                },
                B = function(e) {
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
            function L(e, t) {
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
            function U(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? L(Object(r), !0).forEach(function(t) {
                              k(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r),
                          )
                        : L(Object(r)).forEach(function(t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t),
                              );
                          });
                }
                return e;
            }
            var V = {
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
                            s = void 0 === i ? e.selection : i,
                            c = t.match;
                        if (s) {
                            var u,
                                l = V.path(e, s),
                                f = 'lowest' === a,
                                d = O(
                                    V.levels(e, {
                                        at: l,
                                        voids: n,
                                        match: c,
                                        reverse: f,
                                    }),
                                );
                            try {
                                for (d.s(); !(u = d.n()).done; ) {
                                    var h = w(u.value, 2),
                                        p = h[0],
                                        v = h[1];
                                    if (!oe.isText(p) && !J.equals(l, v))
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
                            a = V.point(e, t, { edge: 'end' }),
                            i = V.end(e, []),
                            s = { anchor: a, focus: i },
                            c = o.distance,
                            u = void 0 === c ? 1 : c,
                            l = 0,
                            f = O(V.positions(e, U({}, o, { at: s })));
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
                            a = V.start(e, []),
                            i = V.point(e, t, { edge: 'start' }),
                            s = { anchor: a, focus: i },
                            c = o.distance,
                            u = void 0 === c ? 1 : c,
                            l = 0,
                            f = O(
                                V.positions(
                                    e,
                                    U({}, o, { at: s, reverse: !0 }),
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
                        return [V.start(e, t), V.end(e, t)];
                    },
                    end: function(e, t) {
                        return V.point(e, t, { edge: 'end' });
                    },
                    first: function(e, t) {
                        var r = V.path(e, t, { edge: 'start' });
                        return V.node(e, r);
                    },
                    fragment: function(e, t) {
                        var r = V.range(e, t),
                            n = Y.fragment(e, r);
                        return n;
                    },
                    hasBlocks: function(e, t) {
                        return t.children.some(function(t) {
                            return V.isBlock(e, t);
                        });
                    },
                    hasInlines: function(e, t) {
                        return t.children.some(function(t) {
                            return oe.isText(t) || V.isInline(e, t);
                        });
                    },
                    hasTexts: function(e, t) {
                        return t.children.every(function(e) {
                            return oe.isText(e);
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
                        return W.isElement(t) && !e.isInline(t);
                    },
                    isEditor: function(e) {
                        return (
                            v(e) &&
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
                            (null === e.marks || v(e.marks)) &&
                            (null === e.selection || te.isRange(e.selection)) &&
                            Y.isNodeList(e.children) &&
                            K.isOperationList(e.operations)
                        );
                    },
                    isEnd: function(e, t, r) {
                        var n = V.end(e, r);
                        return Q.equals(t, n);
                    },
                    isEdge: function(e, t, r) {
                        return V.isStart(e, t, r) || V.isEnd(e, t, r);
                    },
                    isEmpty: function(e, t) {
                        var r = t.children,
                            n = w(r, 1)[0];
                        return (
                            0 === r.length ||
                            (1 === r.length &&
                                oe.isText(n) &&
                                '' === n.text &&
                                !e.isVoid(t))
                        );
                    },
                    isInline: function(e, t) {
                        return W.isElement(t) && e.isInline(t);
                    },
                    isNormalizing: function(e) {
                        var t = P.get(e);
                        return void 0 === t || t;
                    },
                    isStart: function(e, t, r) {
                        if (0 !== t.offset) return !1;
                        var n = V.start(e, r);
                        return Q.equals(t, n);
                    },
                    isVoid: function(e, t) {
                        return W.isElement(t) && e.isVoid(t);
                    },
                    last: function(e, t) {
                        var r = V.path(e, t, { edge: 'end' });
                        return V.node(e, r);
                    },
                    leaf: function(e, t) {
                        var r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : {},
                            n = V.path(e, t, r),
                            o = Y.leaf(e, n);
                        return [o, n];
                    },
                    levels: regeneratorRuntime.mark(function(e) {
                        var t,
                            r,
                            n,
                            o,
                            a,
                            i,
                            s,
                            c,
                            u,
                            l,
                            f,
                            d,
                            h,
                            p,
                            v,
                            m = arguments;
                        return regeneratorRuntime.wrap(
                            function(g) {
                                for (;;)
                                    switch ((g.prev = g.next)) {
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
                                                (s = void 0 !== i && i),
                                                null == (c = t.match) &&
                                                    (c = function() {
                                                        return !0;
                                                    }),
                                                n)
                                            ) {
                                                g.next = 6;
                                                break;
                                            }
                                            return g.abrupt('return');
                                        case 6:
                                            (u = []),
                                                (l = V.path(e, n)),
                                                (f = O(Y.levels(e, l))),
                                                (g.prev = 9),
                                                f.s();
                                        case 11:
                                            if ((d = f.n()).done) {
                                                g.next = 20;
                                                break;
                                            }
                                            if (
                                                ((h = w(d.value, 2)),
                                                (p = h[0]),
                                                (v = h[1]),
                                                c(p))
                                            ) {
                                                g.next = 15;
                                                break;
                                            }
                                            return g.abrupt('continue', 18);
                                        case 15:
                                            if (
                                                (u.push([p, v]),
                                                s || !V.isVoid(e, p))
                                            ) {
                                                g.next = 18;
                                                break;
                                            }
                                            return g.abrupt('break', 20);
                                        case 18:
                                            g.next = 11;
                                            break;
                                        case 20:
                                            g.next = 25;
                                            break;
                                        case 22:
                                            (g.prev = 22),
                                                (g.t0 = g.catch(9)),
                                                f.e(g.t0);
                                        case 25:
                                            return (
                                                (g.prev = 25),
                                                f.f(),
                                                g.finish(25)
                                            );
                                        case 28:
                                            return (
                                                a && u.reverse(),
                                                g.delegateYield(u, 't1', 30)
                                            );
                                        case 30:
                                        case 'end':
                                            return g.stop();
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
                        if (te.isExpanded(r)) {
                            var n = w(V.nodes(e, { match: oe.isText }), 1)[0];
                            return n ? E(w(n, 1)[0], ['text']) : {};
                        }
                        var o = r.anchor,
                            a = o.path,
                            i = w(V.leaf(e, a), 1)[0];
                        if (0 === o.offset) {
                            var s = V.previous(e, { at: a, match: oe.isText }),
                                c = V.above(e, {
                                    match: function(t) {
                                        return V.isBlock(e, t);
                                    },
                                });
                            if (s && c) {
                                var u = w(s, 2),
                                    l = u[0],
                                    f = u[1],
                                    d = w(c, 2)[1];
                                J.isAncestor(d, f) && (i = l);
                            }
                        }
                        return E(i, ['text']);
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
                            s = t.at,
                            c = void 0 === s ? e.selection : s;
                        if (c) {
                            var u = V.last(e, c),
                                l = w(u, 2),
                                f = l[1],
                                d = V.last(e, []),
                                h = w(d, 2),
                                p = h[1],
                                v = [f, p];
                            if (J.isPath(c) && 0 === c.length)
                                throw new Error(
                                    'Cannot get the next node from the root node!',
                                );
                            if (null == i)
                                if (J.isPath(c)) {
                                    var m = V.parent(e, c),
                                        g = w(m, 1),
                                        y = g[0];
                                    i = function(e) {
                                        return y.children.includes(e);
                                    };
                                } else
                                    i = function() {
                                        return !0;
                                    };
                            var b = V.nodes(e, {
                                    at: v,
                                    match: i,
                                    mode: n,
                                    voids: a,
                                }),
                                O = w(b, 2),
                                x = O[1];
                            return x;
                        }
                    },
                    node: function(e, t) {
                        var r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : {},
                            n = V.path(e, t, r),
                            o = Y.get(e, n);
                        return [o, n];
                    },
                    nodes: regeneratorRuntime.mark(function e(t) {
                        var r,
                            n,
                            o,
                            a,
                            i,
                            s,
                            c,
                            u,
                            l,
                            f,
                            d,
                            h,
                            p,
                            v,
                            m,
                            g,
                            y,
                            b,
                            x,
                            S,
                            k,
                            E,
                            j,
                            P,
                            T,
                            A,
                            D = arguments;
                        return regeneratorRuntime.wrap(
                            function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (
                                                ((r =
                                                    D.length > 1 &&
                                                    void 0 !== D[1]
                                                        ? D[1]
                                                        : {}),
                                                (n = r.at),
                                                (o =
                                                    void 0 === n
                                                        ? t.selection
                                                        : n),
                                                (a = r.mode),
                                                (i = void 0 === a ? 'all' : a),
                                                (s = r.universal),
                                                (c = void 0 !== s && s),
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
                                            q.isSpan(o)
                                                ? ((p = o[0]), (v = o[1]))
                                                : ((m = V.path(t, o, {
                                                      edge: 'start',
                                                  })),
                                                  (g = V.path(t, o, {
                                                      edge: 'end',
                                                  })),
                                                  (p = l ? g : m),
                                                  (v = l ? m : g)),
                                                (y = Y.nodes(t, {
                                                    reverse: l,
                                                    from: p,
                                                    to: v,
                                                    pass: function(e) {
                                                        var r = w(e, 1)[0];
                                                        return (
                                                            !d && V.isVoid(t, r)
                                                        );
                                                    },
                                                })),
                                                (b = []),
                                                (S = O(y)),
                                                (e.prev = 10),
                                                S.s();
                                        case 12:
                                            if ((k = S.n()).done) {
                                                e.next = 37;
                                                break;
                                            }
                                            if (
                                                ((E = w(k.value, 2)),
                                                (j = E[0]),
                                                (P = E[1]),
                                                (T =
                                                    x &&
                                                    0 === J.compare(P, x[1])),
                                                'highest' !== i || !T)
                                            ) {
                                                e.next = 17;
                                                break;
                                            }
                                            return e.abrupt('continue', 35);
                                        case 17:
                                            if (h(j)) {
                                                e.next = 23;
                                                break;
                                            }
                                            if (!c || T || !oe.isText(j)) {
                                                e.next = 22;
                                                break;
                                            }
                                            return e.abrupt('return');
                                        case 22:
                                            return e.abrupt('continue', 35);
                                        case 23:
                                            if ('lowest' !== i || !T) {
                                                e.next = 26;
                                                break;
                                            }
                                            return (
                                                (x = [j, P]),
                                                e.abrupt('continue', 35)
                                            );
                                        case 26:
                                            if (
                                                !(A =
                                                    'lowest' === i ? x : [j, P])
                                            ) {
                                                e.next = 34;
                                                break;
                                            }
                                            if (!c) {
                                                e.next = 32;
                                                break;
                                            }
                                            b.push(A), (e.next = 34);
                                            break;
                                        case 32:
                                            return (e.next = 34), A;
                                        case 34:
                                            x = [j, P];
                                        case 35:
                                            e.next = 12;
                                            break;
                                        case 37:
                                            e.next = 42;
                                            break;
                                        case 39:
                                            (e.prev = 39),
                                                (e.t0 = e.catch(10)),
                                                S.e(e.t0);
                                        case 42:
                                            return (
                                                (e.prev = 42),
                                                S.f(),
                                                e.finish(42)
                                            );
                                        case 45:
                                            if ('lowest' !== i || !x) {
                                                e.next = 52;
                                                break;
                                            }
                                            if (!c) {
                                                e.next = 50;
                                                break;
                                            }
                                            b.push(x), (e.next = 52);
                                            break;
                                        case 50:
                                            return (e.next = 52), x;
                                        case 52:
                                            if (!c) {
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
                                return j.get(e) || [];
                            };
                        if (V.isNormalizing(e)) {
                            if (n) {
                                var a = Array.from(Y.nodes(e), function(e) {
                                    return w(e, 2)[1];
                                });
                                j.set(e, a);
                            }
                            0 !== o(e).length &&
                                V.withoutNormalizing(e, function() {
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
                                            a = V.node(e, n);
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
                            n = V.path(e, t, r),
                            o = J.parent(n),
                            a = V.node(e, o);
                        return a;
                    },
                    path: function(e, t) {
                        var r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : {},
                            n = r.depth,
                            o = r.edge;
                        if (J.isPath(t))
                            if ('start' === o) {
                                var a = Y.first(e, t),
                                    i = w(a, 2),
                                    s = i[1];
                                t = s;
                            } else if ('end' === o) {
                                var c = Y.last(e, t),
                                    u = w(c, 2),
                                    l = u[1];
                                t = l;
                            }
                        return (
                            te.isRange(t) &&
                                (t =
                                    'start' === o
                                        ? te.start(t)
                                        : 'end' === o
                                        ? te.end(t)
                                        : J.common(
                                              t.anchor.path,
                                              t.focus.path,
                                          )),
                            Q.isPoint(t) && (t = t.path),
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
                                        V.pathRefs(e).delete(a),
                                        (a.current = null),
                                        t
                                    );
                                },
                            },
                            i = V.pathRefs(e);
                        return i.add(a), a;
                    },
                    pathRefs: function(e) {
                        var t = T.get(e);
                        return t || ((t = new Set()), T.set(e, t)), t;
                    },
                    point: function(e, t) {
                        var r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : {},
                            n = r.edge,
                            o = void 0 === n ? 'start' : n;
                        if (J.isPath(t)) {
                            var a;
                            if ('end' === o) {
                                var i = Y.last(e, t),
                                    s = w(i, 2),
                                    c = s[1];
                                a = c;
                            } else {
                                var u = Y.first(e, t),
                                    l = w(u, 2),
                                    f = l[1];
                                a = f;
                            }
                            var d = Y.get(e, a);
                            if (!oe.isText(d))
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
                        if (te.isRange(t)) {
                            var h = te.edges(t),
                                p = w(h, 2),
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
                                        V.pointRefs(e).delete(a),
                                        (a.current = null),
                                        t
                                    );
                                },
                            },
                            i = V.pointRefs(e);
                        return i.add(a), a;
                    },
                    pointRefs: function(e) {
                        var t = A.get(e);
                        return t || ((t = new Set()), A.set(e, t)), t;
                    },
                    positions: regeneratorRuntime.mark(function e(t) {
                        var r,
                            n,
                            o,
                            a,
                            i,
                            s,
                            c,
                            u,
                            l,
                            f,
                            d,
                            h,
                            p,
                            v,
                            m,
                            y,
                            b,
                            x,
                            S,
                            k,
                            E,
                            j,
                            P,
                            T,
                            A,
                            D,
                            C,
                            F,
                            R = arguments;
                        return regeneratorRuntime.wrap(
                            function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (
                                                ((r =
                                                    R.length > 1 &&
                                                    void 0 !== R[1]
                                                        ? R[1]
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
                                                (s = r.reverse),
                                                (c = void 0 !== s && s),
                                                o)
                                            ) {
                                                e.next = 4;
                                                break;
                                            }
                                            return e.abrupt('return');
                                        case 4:
                                            (u = V.range(t, o)),
                                                (l = te.edges(u)),
                                                (f = w(l, 2)),
                                                (d = f[0]),
                                                (h = f[1]),
                                                (p = c ? h : d),
                                                (v = ''),
                                                (m = 0),
                                                (y = 0),
                                                (b = null),
                                                (x = !1),
                                                (S = function() {
                                                    null == b &&
                                                        ((b =
                                                            'character' === i
                                                                ? N(v)
                                                                : 'word' === i
                                                                ? M(v)
                                                                : 'line' ===
                                                                      i ||
                                                                  'block' === i
                                                                ? v.length
                                                                : 1),
                                                        (v = v.slice(b))),
                                                        (y = c ? y - b : y + b),
                                                        (b =
                                                            (m -= b) >= 0
                                                                ? null
                                                                : 0 - m);
                                                }),
                                                (k = O(
                                                    V.nodes(t, {
                                                        at: o,
                                                        reverse: c,
                                                    }),
                                                )),
                                                (e.prev = 14),
                                                k.s();
                                        case 16:
                                            if ((E = k.n()).done) {
                                                e.next = 51;
                                                break;
                                            }
                                            if (
                                                ((j = w(E.value, 2)),
                                                (P = j[0]),
                                                (T = j[1]),
                                                !W.isElement(P))
                                            ) {
                                                e.next = 26;
                                                break;
                                            }
                                            if (!t.isVoid(P)) {
                                                e.next = 23;
                                                break;
                                            }
                                            return (e.next = 22), V.start(t, T);
                                        case 22:
                                            return e.abrupt('continue', 49);
                                        case 23:
                                            if (!t.isInline(P)) {
                                                e.next = 25;
                                                break;
                                            }
                                            return e.abrupt('continue', 49);
                                        case 25:
                                            V.hasInlines(t, P) &&
                                                ((A = J.isAncestor(T, h.path)
                                                    ? h
                                                    : V.end(t, T)),
                                                (D = J.isAncestor(T, d.path)
                                                    ? d
                                                    : V.start(t, T)),
                                                (C = V.string(t, {
                                                    anchor: D,
                                                    focus: A,
                                                })),
                                                (v = c
                                                    ? Object(g.reverse)(C)
                                                    : C),
                                                (x = !0));
                                        case 26:
                                            if (!oe.isText(P)) {
                                                e.next = 49;
                                                break;
                                            }
                                            if (
                                                ((F = J.equals(T, p.path)),
                                                (m = P.text.length),
                                                (y = c ? m : 0),
                                                F &&
                                                    ((m = c
                                                        ? p.offset
                                                        : m - p.offset),
                                                    (y = p.offset)),
                                                !F && !x && 'offset' !== i)
                                            ) {
                                                e.next = 34;
                                                break;
                                            }
                                            return (
                                                (e.next = 34),
                                                { path: T, offset: y }
                                            );
                                        case 34:
                                            if ('' !== v) {
                                                e.next = 39;
                                                break;
                                            }
                                            return e.abrupt('break', 48);
                                        case 39:
                                            S();
                                        case 40:
                                            if (!(m >= 0)) {
                                                e.next = 45;
                                                break;
                                            }
                                            return (
                                                (e.next = 43),
                                                { path: T, offset: y }
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
                                            x = !1;
                                        case 49:
                                            e.next = 16;
                                            break;
                                        case 51:
                                            e.next = 56;
                                            break;
                                        case 53:
                                            (e.prev = 53),
                                                (e.t0 = e.catch(14)),
                                                k.e(e.t0);
                                        case 56:
                                            return (
                                                (e.prev = 56),
                                                k.f(),
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
                            s = t.at,
                            c = void 0 === s ? e.selection : s;
                        if (c) {
                            var u = V.first(e, c),
                                l = w(u, 2),
                                f = l[1],
                                d = V.first(e, []),
                                h = w(d, 2),
                                p = h[1],
                                v = [f, p];
                            if (J.isPath(c) && 0 === c.length)
                                throw new Error(
                                    'Cannot get the previous node from the root node!',
                                );
                            if (null == i)
                                if (J.isPath(c)) {
                                    var m = V.parent(e, c),
                                        g = w(m, 1),
                                        y = g[0];
                                    i = function(e) {
                                        return y.children.includes(e);
                                    };
                                } else
                                    i = function() {
                                        return !0;
                                    };
                            var b = V.nodes(e, {
                                    reverse: !0,
                                    at: v,
                                    match: i,
                                    mode: n,
                                    voids: a,
                                }),
                                O = w(b, 2),
                                x = O[1];
                            return x;
                        }
                    },
                    range: function(e, t, r) {
                        return te.isRange(t) && !r
                            ? t
                            : {
                                  anchor: V.start(e, t),
                                  focus: V.end(e, r || t),
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
                                        V.rangeRefs(e).delete(a),
                                        (a.current = null),
                                        t
                                    );
                                },
                            },
                            i = V.rangeRefs(e);
                        return i.add(a), a;
                    },
                    rangeRefs: function(e) {
                        var t = D.get(e);
                        return t || ((t = new Set()), D.set(e, t)), t;
                    },
                    removeMark: function(e, t) {
                        e.removeMark(t);
                    },
                    start: function(e, t) {
                        return V.point(e, t, { edge: 'start' });
                    },
                    string: function(e, t) {
                        var r,
                            n = V.range(e, t),
                            o = w(te.edges(n), 2),
                            a = o[0],
                            i = o[1],
                            s = '',
                            c = O(V.nodes(e, { at: n, match: oe.isText }));
                        try {
                            for (c.s(); !(r = c.n()).done; ) {
                                var u = w(r.value, 2),
                                    l = u[0],
                                    f = u[1],
                                    d = l.text;
                                J.equals(f, i.path) &&
                                    (d = d.slice(0, i.offset)),
                                    J.equals(f, a.path) &&
                                        (d = d.slice(a.offset)),
                                    (s += d);
                            }
                        } catch (e) {
                            c.e(e);
                        } finally {
                            c.f();
                        }
                        return s;
                    },
                    transform: function(e, t) {
                        e.children = Object(m.a)(e.children);
                        var r = e.selection && Object(m.a)(e.selection);
                        switch (t.type) {
                            case 'insert_node':
                                var n = t.path,
                                    o = t.node,
                                    a = Y.parent(e, n),
                                    i = n[n.length - 1];
                                if ((a.children.splice(i, 0, o), r)) {
                                    var s,
                                        c = O(te.points(r));
                                    try {
                                        for (c.s(); !(s = c.n()).done; ) {
                                            var u = w(s.value, 2),
                                                l = u[0];
                                            r[u[1]] = Q.transform(l, t);
                                        }
                                    } catch (e) {
                                        c.e(e);
                                    } finally {
                                        c.f();
                                    }
                                }
                                break;
                            case 'insert_text':
                                var f = t.path,
                                    d = t.offset,
                                    h = t.text,
                                    p = Y.leaf(e, f),
                                    v = p.text.slice(0, d),
                                    g = p.text.slice(d);
                                if (((p.text = v + h + g), r)) {
                                    var y,
                                        x = O(te.points(r));
                                    try {
                                        for (x.s(); !(y = x.n()).done; ) {
                                            var S = w(y.value, 2),
                                                k = S[0];
                                            r[S[1]] = Q.transform(k, t);
                                        }
                                    } catch (e) {
                                        x.e(e);
                                    } finally {
                                        x.f();
                                    }
                                }
                                break;
                            case 'merge_node':
                                var E = t.path,
                                    j = Y.get(e, E),
                                    P = J.previous(E),
                                    T = Y.get(e, P),
                                    A = Y.parent(e, E),
                                    D = E[E.length - 1];
                                if (oe.isText(j) && oe.isText(T))
                                    T.text += j.text;
                                else {
                                    if (oe.isText(j) || oe.isText(T))
                                        throw new Error(
                                            'Cannot apply a "merge_node" operation at path ['
                                                .concat(
                                                    E,
                                                    '] to nodes of different interaces: ',
                                                )
                                                .concat(j, ' ')
                                                .concat(T),
                                        );
                                    var C;
                                    (C = T.children).push.apply(
                                        C,
                                        b(j.children),
                                    );
                                }
                                if ((A.children.splice(D, 1), r)) {
                                    var F,
                                        R = O(te.points(r));
                                    try {
                                        for (R.s(); !(F = R.n()).done; ) {
                                            var N = w(F.value, 2),
                                                M = N[0];
                                            r[N[1]] = Q.transform(M, t);
                                        }
                                    } catch (e) {
                                        R.e(e);
                                    } finally {
                                        R.f();
                                    }
                                }
                                break;
                            case 'move_node':
                                var z = t.path,
                                    _ = t.newPath;
                                if (J.isAncestor(z, _))
                                    throw new Error(
                                        'Cannot move a path ['
                                            .concat(z, '] to new path [')
                                            .concat(
                                                _,
                                                '] because the destination is inside itself.',
                                            ),
                                    );
                                var H = Y.get(e, z),
                                    I = Y.parent(e, z),
                                    B = z[z.length - 1];
                                I.children.splice(B, 1);
                                var L = J.transform(z, t),
                                    V = Y.get(e, J.parent(L)),
                                    W = L[L.length - 1];
                                if ((V.children.splice(W, 0, H), r)) {
                                    var q,
                                        G = O(te.points(r));
                                    try {
                                        for (G.s(); !(q = G.n()).done; ) {
                                            var Z = w(q.value, 2),
                                                K = Z[0];
                                            r[Z[1]] = Q.transform(K, t);
                                        }
                                    } catch (e) {
                                        G.e(e);
                                    } finally {
                                        G.f();
                                    }
                                }
                                break;
                            case 'remove_node':
                                var X = t.path,
                                    $ = X[X.length - 1];
                                if ((Y.parent(e, X).children.splice($, 1), r)) {
                                    var ee,
                                        re = O(te.points(r));
                                    try {
                                        for (re.s(); !(ee = re.n()).done; ) {
                                            var ne = w(ee.value, 2),
                                                ae = ne[0],
                                                ie = ne[1],
                                                se = Q.transform(ae, t);
                                            if (null != r && null != se)
                                                r[ie] = se;
                                            else {
                                                var ce,
                                                    ue = void 0,
                                                    le = void 0,
                                                    fe = O(Y.texts(e));
                                                try {
                                                    for (
                                                        fe.s();
                                                        !(ce = fe.n()).done;

                                                    ) {
                                                        var de = w(ce.value, 2),
                                                            he = de[0],
                                                            pe = de[1];
                                                        if (
                                                            -1 !==
                                                            J.compare(pe, X)
                                                        ) {
                                                            le = [he, pe];
                                                            break;
                                                        }
                                                        ue = [he, pe];
                                                    }
                                                } catch (e) {
                                                    fe.e(e);
                                                } finally {
                                                    fe.f();
                                                }
                                                ue
                                                    ? ((ae.path = ue[1]),
                                                      (ae.offset =
                                                          ue[0].text.length))
                                                    : le
                                                    ? ((ae.path = le[1]),
                                                      (ae.offset = 0))
                                                    : (r = null);
                                            }
                                        }
                                    } catch (e) {
                                        re.e(e);
                                    } finally {
                                        re.f();
                                    }
                                }
                                break;
                            case 'remove_text':
                                var ve = t.path,
                                    me = t.offset,
                                    ge = t.text,
                                    ye = Y.leaf(e, ve),
                                    be = ye.text.slice(0, me),
                                    we = ye.text.slice(me + ge.length);
                                if (((ye.text = be + we), r)) {
                                    var Oe,
                                        xe = O(te.points(r));
                                    try {
                                        for (xe.s(); !(Oe = xe.n()).done; ) {
                                            var Se = w(Oe.value, 2),
                                                ke = Se[0];
                                            r[Se[1]] = Q.transform(ke, t);
                                        }
                                    } catch (e) {
                                        xe.e(e);
                                    } finally {
                                        xe.f();
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
                                var Pe = Y.get(e, Ee);
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
                                var De = t.newProperties;
                                if (null == De) r = De;
                                else if (null == r) {
                                    if (!te.isRange(De))
                                        throw new Error(
                                            'Cannot apply an incomplete "set_selection" operation properties '.concat(
                                                JSON.stringify(De),
                                                ' when there is no current selection.',
                                            ),
                                        );
                                    r = De;
                                } else Object.assign(r, De);
                                break;
                            case 'split_node':
                                var Ce = t.path,
                                    Fe = t.position,
                                    Re = t.properties;
                                if (0 === Ce.length)
                                    throw new Error(
                                        'Cannot apply a "split_node" operation at path ['.concat(
                                            Ce,
                                            '] because the root node cannot be split.',
                                        ),
                                    );
                                var Ne,
                                    Me = Y.get(e, Ce),
                                    ze = Y.parent(e, Ce),
                                    _e = Ce[Ce.length - 1];
                                if (oe.isText(Me)) {
                                    var He = Me.text.slice(0, Fe),
                                        Ie = Me.text.slice(Fe);
                                    (Me.text = He),
                                        (Ne = U({}, Me, {}, Re, { text: Ie }));
                                } else {
                                    var Be = Me.children.slice(0, Fe),
                                        Le = Me.children.slice(Fe);
                                    (Me.children = Be),
                                        (Ne = U({}, Me, {}, Re, {
                                            children: Le,
                                        }));
                                }
                                if ((ze.children.splice(_e + 1, 0, Ne), r)) {
                                    var Ue,
                                        Ve = O(te.points(r));
                                    try {
                                        for (Ve.s(); !(Ue = Ve.n()).done; ) {
                                            var We = w(Ue.value, 2),
                                                qe = We[0];
                                            r[We[1]] = Q.transform(qe, t);
                                        }
                                    } catch (e) {
                                        Ve.e(e);
                                    } finally {
                                        Ve.f();
                                    }
                                }
                        }
                        (e.children = Object(m.b)(e.children)),
                            (e.selection = r
                                ? Object(m.c)(r)
                                    ? Object(m.b)(r)
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
                            a = te.edges(t),
                            i = w(a, 2),
                            s = i[0],
                            c = i[1];
                        if (
                            0 !== s.offset ||
                            0 !== c.offset ||
                            te.isCollapsed(t)
                        )
                            return t;
                        var u,
                            l = V.above(e, {
                                at: c,
                                match: function(t) {
                                    return V.isBlock(e, t);
                                },
                            }),
                            f = l ? l[1] : [],
                            d = V.start(e, []),
                            h = { anchor: d, focus: c },
                            p = !0,
                            v = O(
                                V.nodes(e, {
                                    at: h,
                                    match: oe.isText,
                                    reverse: !0,
                                    voids: o,
                                }),
                            );
                        try {
                            for (v.s(); !(u = v.n()).done; ) {
                                var m = w(u.value, 2),
                                    g = m[0],
                                    y = m[1];
                                if (p) p = !1;
                                else if ('' !== g.text || J.isBefore(y, f)) {
                                    c = { path: y, offset: g.text.length };
                                    break;
                                }
                            }
                        } catch (e) {
                            v.e(e);
                        } finally {
                            v.f();
                        }
                        return { anchor: s, focus: c };
                    },
                    void: function(e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                        return V.above(
                            e,
                            U({}, t, {
                                match: function(t) {
                                    return V.isVoid(e, t);
                                },
                            }),
                        );
                    },
                    withoutNormalizing: function(e, t) {
                        var r = V.isNormalizing(e);
                        P.set(e, !1), t(), P.set(e, r), V.normalize(e);
                    },
                },
                W = {
                    isElement: function(e) {
                        return (
                            v(e) && Y.isNodeList(e.children) && !V.isEditor(e)
                        );
                    },
                    isElementList: function(e) {
                        return (
                            Array.isArray(e) &&
                            (0 === e.length || W.isElement(e[0]))
                        );
                    },
                    matches: function(e, t) {
                        for (var r in t)
                            if ('children' !== r && e[r] !== t[r]) return !1;
                        return !0;
                    },
                },
                q = {
                    isSpan: function(e) {
                        return (
                            Array.isArray(e) &&
                            2 === e.length &&
                            e.every(J.isPath)
                        );
                    },
                },
                Y = {
                    ancestor: function(e, t) {
                        var r = Y.get(e, t);
                        if (oe.isText(r))
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
                            s,
                            c,
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
                                                (o = O(J.ancestors(r, n))),
                                                (e.prev = 2),
                                                o.s();
                                        case 4:
                                            if ((a = o.n()).done) {
                                                e.next = 12;
                                                break;
                                            }
                                            return (
                                                (i = a.value),
                                                (s = Y.ancestor(t, i)),
                                                (c = [s, i]),
                                                (e.next = 10),
                                                c
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
                        if (oe.isText(e))
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
                            s,
                            c,
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
                                            (a = Y.ancestor(e, t)),
                                            (i = a.children),
                                            (s = o ? i.length - 1 : 0);
                                    case 5:
                                        if (!(o ? s >= 0 : s < i.length)) {
                                            f.next = 13;
                                            break;
                                        }
                                        return (
                                            (c = Y.child(a, s)),
                                            (u = t.concat(s)),
                                            (f.next = 10),
                                            [c, u]
                                        );
                                    case 10:
                                        (s = o ? s - 1 : s + 1), (f.next = 5);
                                        break;
                                    case 13:
                                    case 'end':
                                        return f.stop();
                                }
                        }, i);
                    }),
                    common: function(e, t, r) {
                        var n = J.common(t, r);
                        return [Y.get(e, n), n];
                    },
                    descendant: function(e, t) {
                        var r = Y.get(e, t);
                        if (V.isEditor(r))
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
                            s,
                            c = arguments;
                        return regeneratorRuntime.wrap(
                            function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            (r =
                                                c.length > 1 && void 0 !== c[1]
                                                    ? c[1]
                                                    : {}),
                                                (n = O(Y.nodes(t, r))),
                                                (e.prev = 2),
                                                n.s();
                                        case 4:
                                            if ((o = n.n()).done) {
                                                e.next = 11;
                                                break;
                                            }
                                            if (
                                                ((a = w(o.value, 2)),
                                                (i = a[0]),
                                                0 === (s = a[1]).length)
                                            ) {
                                                e.next = 9;
                                                break;
                                            }
                                            return (e.next = 9), [i, s];
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
                            s,
                            c = arguments;
                        return regeneratorRuntime.wrap(
                            function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            (r =
                                                c.length > 1 && void 0 !== c[1]
                                                    ? c[1]
                                                    : {}),
                                                (n = O(Y.nodes(t, r))),
                                                (e.prev = 2),
                                                n.s();
                                        case 4:
                                            if ((o = n.n()).done) {
                                                e.next = 11;
                                                break;
                                            }
                                            if (
                                                ((a = w(o.value, 2)),
                                                (i = a[0]),
                                                (s = a[1]),
                                                !W.isElement(i))
                                            ) {
                                                e.next = 9;
                                                break;
                                            }
                                            return (e.next = 9), [i, s];
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
                            var r = t.slice(), n = Y.get(e, r);
                            n && !oe.isText(n) && 0 !== n.children.length;

                        )
                            (n = n.children[0]), r.push(0);
                        return [n, r];
                    },
                    fragment: function(e, t) {
                        if (oe.isText(e))
                            throw new Error(
                                'Cannot get a fragment starting from a root text node: '.concat(
                                    JSON.stringify(e),
                                ),
                            );
                        return Object(m.d)(e, function(e) {
                            var r,
                                n = w(te.edges(t), 2),
                                o = n[0],
                                a = n[1],
                                i = O(
                                    Y.nodes(e, {
                                        reverse: !0,
                                        pass: function(e) {
                                            var r = w(e, 2)[1];
                                            return !te.includes(t, r);
                                        },
                                    }),
                                );
                            try {
                                for (i.s(); !(r = i.n()).done; ) {
                                    var s = w(r.value, 2)[1];
                                    if (!te.includes(t, s)) {
                                        var c = Y.parent(e, s),
                                            u = s[s.length - 1];
                                        c.children.splice(u, 1);
                                    }
                                    if (J.equals(s, a.path)) {
                                        var l = Y.leaf(e, s);
                                        l.text = l.text.slice(0, a.offset);
                                    }
                                    if (J.equals(s, o.path)) {
                                        var f = Y.leaf(e, s);
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
                            if (oe.isText(r) || !r.children[o])
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
                            if (oe.isText(r) || !r.children[o]) return !1;
                            r = r.children[o];
                        }
                        return !0;
                    },
                    isNode: function(e) {
                        return oe.isText(e) || W.isElement(e) || V.isEditor(e);
                    },
                    isNodeList: function(e) {
                        return (
                            Array.isArray(e) &&
                            (0 === e.length || Y.isNode(e[0]))
                        );
                    },
                    last: function(e, t) {
                        for (
                            var r = t.slice(), n = Y.get(e, r);
                            n && !oe.isText(n) && 0 !== n.children.length;

                        ) {
                            var o = n.children.length - 1;
                            (n = n.children[o]), r.push(o);
                        }
                        return [n, r];
                    },
                    leaf: function(e, t) {
                        var r = Y.get(e, t);
                        if (!oe.isText(r))
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
                            s,
                            c = arguments;
                        return regeneratorRuntime.wrap(
                            function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            (n =
                                                c.length > 2 && void 0 !== c[2]
                                                    ? c[2]
                                                    : {}),
                                                (o = O(J.levels(r, n))),
                                                (e.prev = 2),
                                                o.s();
                                        case 4:
                                            if ((a = o.n()).done) {
                                                e.next = 11;
                                                break;
                                            }
                                            return (
                                                (i = a.value),
                                                (s = Y.get(t, i)),
                                                (e.next = 9),
                                                [s, i]
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
                            (W.isElement(e) && W.matches(e, t)) ||
                            (oe.isText(e) && oe.matches(e, t))
                        );
                    },
                    nodes: regeneratorRuntime.mark(function e(t) {
                        var r,
                            n,
                            o,
                            a,
                            i,
                            s,
                            c,
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
                                            (s = void 0 === i ? [] : i),
                                            (c = r.to),
                                            (u = new Set()),
                                            (l = []),
                                            (f = t);
                                    case 6:
                                        if (
                                            !c ||
                                            !(a
                                                ? J.isBefore(l, c)
                                                : J.isAfter(l, c))
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
                                            oe.isText(f) ||
                                            0 === f.children.length ||
                                            (null != n && !1 !== n([f, l]))
                                        ) {
                                            e.next = 19;
                                            break;
                                        }
                                        return (
                                            u.add(f),
                                            (d = a ? f.children.length - 1 : 0),
                                            J.isAncestor(l, s) &&
                                                (d = s[l.length]),
                                            (l = l.concat(d)),
                                            (f = Y.get(t, l)),
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
                                        if (((h = J.next(l)), !Y.has(t, h))) {
                                            e.next = 27;
                                            break;
                                        }
                                        return (
                                            (l = h),
                                            (f = Y.get(t, l)),
                                            e.abrupt('continue', 6)
                                        );
                                    case 27:
                                        if (!a || 0 === l[l.length - 1]) {
                                            e.next = 32;
                                            break;
                                        }
                                        return (
                                            (p = J.previous(l)),
                                            (l = p),
                                            (f = Y.get(t, l)),
                                            e.abrupt('continue', 6)
                                        );
                                    case 32:
                                        (l = J.parent(l)),
                                            (f = Y.get(t, l)),
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
                        var r = J.parent(t),
                            n = Y.get(e, r);
                        if (oe.isText(n))
                            throw new Error(
                                'Cannot get the parent of path ['.concat(
                                    t,
                                    '] because it does not exist in the root.',
                                ),
                            );
                        return n;
                    },
                    string: function(e) {
                        return oe.isText(e)
                            ? e.text
                            : e.children.map(Y.string).join('');
                    },
                    texts: regeneratorRuntime.mark(function e(t) {
                        var r,
                            n,
                            o,
                            a,
                            i,
                            s,
                            c = arguments;
                        return regeneratorRuntime.wrap(
                            function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            (r =
                                                c.length > 1 && void 0 !== c[1]
                                                    ? c[1]
                                                    : {}),
                                                (n = O(Y.nodes(t, r))),
                                                (e.prev = 2),
                                                n.s();
                                        case 4:
                                            if ((o = n.n()).done) {
                                                e.next = 11;
                                                break;
                                            }
                                            if (
                                                ((a = w(o.value, 2)),
                                                (i = a[0]),
                                                (s = a[1]),
                                                !oe.isText(i))
                                            ) {
                                                e.next = 9;
                                                break;
                                            }
                                            return (e.next = 9), [i, s];
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
                              k(e, t, r[t]);
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
            var K = {
                    isNodeOperation: function(e) {
                        return K.isOperation(e) && e.type.endsWith('_node');
                    },
                    isOperation: function(e) {
                        if (!v(e)) return !1;
                        switch (e.type) {
                            case 'insert_node':
                                return J.isPath(e.path) && Y.isNode(e.node);
                            case 'insert_text':
                                return (
                                    'number' == typeof e.offset &&
                                    'string' == typeof e.text &&
                                    J.isPath(e.path)
                                );
                            case 'merge_node':
                                return (
                                    'number' == typeof e.position &&
                                    ('number' == typeof e.target ||
                                        null === e.target) &&
                                    J.isPath(e.path) &&
                                    v(e.properties)
                                );
                            case 'move_node':
                                return J.isPath(e.path) && J.isPath(e.newPath);
                            case 'remove_node':
                                return J.isPath(e.path) && Y.isNode(e.node);
                            case 'remove_text':
                                return (
                                    'number' == typeof e.offset &&
                                    'string' == typeof e.text &&
                                    J.isPath(e.path)
                                );
                            case 'set_node':
                                return (
                                    J.isPath(e.path) &&
                                    v(e.properties) &&
                                    v(e.newProperties)
                                );
                            case 'set_selection':
                                return (
                                    (null === e.properties &&
                                        te.isRange(e.newProperties)) ||
                                    (null === e.newProperties &&
                                        te.isRange(e.properties)) ||
                                    (v(e.properties) && v(e.newProperties))
                                );
                            case 'split_node':
                                return (
                                    J.isPath(e.path) &&
                                    'number' == typeof e.position &&
                                    ('number' == typeof e.target ||
                                        null === e.target) &&
                                    v(e.properties)
                                );
                            default:
                                return !1;
                        }
                    },
                    isOperationList: function(e) {
                        return (
                            Array.isArray(e) &&
                            (0 === e.length || K.isOperation(e[0]))
                        );
                    },
                    isSelectionOperation: function(e) {
                        return (
                            K.isOperation(e) && e.type.endsWith('_selection')
                        );
                    },
                    isTextOperation: function(e) {
                        return K.isOperation(e) && e.type.endsWith('_text');
                    },
                    inverse: function(e) {
                        switch (e.type) {
                            case 'insert_node':
                                return Z({}, e, { type: 'remove_node' });
                            case 'insert_text':
                                return Z({}, e, { type: 'remove_text' });
                            case 'merge_node':
                                return Z({}, e, {
                                    type: 'split_node',
                                    path: J.previous(e.path),
                                });
                            case 'move_node':
                                var t = e.newPath,
                                    r = e.path;
                                return J.equals(t, r)
                                    ? e
                                    : Z({}, e, {
                                          path: J.transform(r, e),
                                          newPath: J.transform(J.next(r), e),
                                      });
                            case 'remove_node':
                                return Z({}, e, { type: 'insert_node' });
                            case 'remove_text':
                                return Z({}, e, { type: 'insert_text' });
                            case 'set_node':
                                var n = e.properties;
                                return Z({}, e, {
                                    properties: e.newProperties,
                                    newProperties: n,
                                });
                            case 'set_selection':
                                var o = e.properties,
                                    a = e.newProperties;
                                return Z(
                                    {},
                                    e,
                                    null == o
                                        ? { properties: a, newProperties: null }
                                        : null == a
                                        ? { properties: null, newProperties: o }
                                        : { properties: a, newProperties: o },
                                );
                            case 'split_node':
                                return Z({}, e, {
                                    type: 'merge_node',
                                    path: J.next(e.path),
                                });
                        }
                    },
                },
                J = {
                    ancestors: function(e) {
                        var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : {},
                            r = t.reverse,
                            n = void 0 !== r && r,
                            o = J.levels(e, t);
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
                        return J.equals(n, o) && a > i;
                    },
                    endsAt: function(e, t) {
                        var r = e.length,
                            n = e.slice(0, r),
                            o = t.slice(0, r);
                        return J.equals(n, o);
                    },
                    endsBefore: function(e, t) {
                        var r = e.length - 1,
                            n = e.slice(0, r),
                            o = t.slice(0, r),
                            a = e[r],
                            i = t[r];
                        return J.equals(n, o) && a < i;
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
                        return 1 === J.compare(e, t);
                    },
                    isAncestor: function(e, t) {
                        return e.length < t.length && 0 === J.compare(e, t);
                    },
                    isBefore: function(e, t) {
                        return -1 === J.compare(e, t);
                    },
                    isChild: function(e, t) {
                        return (
                            e.length === t.length + 1 && 0 === J.compare(e, t)
                        );
                    },
                    isCommon: function(e, t) {
                        return e.length <= t.length && 0 === J.compare(e, t);
                    },
                    isDescendant: function(e, t) {
                        return e.length > t.length && 0 === J.compare(e, t);
                    },
                    isParent: function(e, t) {
                        return (
                            e.length + 1 === t.length && 0 === J.compare(e, t)
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
                            J.equals(r, n)
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
                        if (!J.isAncestor(t, e) && !J.equals(e, t))
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
                        return Object(m.d)(e, function(n) {
                            var o = r.affinity,
                                a = void 0 === o ? 'forward' : o;
                            if (0 !== e.length)
                                switch (t.type) {
                                    case 'insert_node':
                                        var i = t.path;
                                        (J.equals(i, n) ||
                                            J.endsBefore(i, n) ||
                                            J.isAncestor(i, n)) &&
                                            (n[i.length - 1] += 1);
                                        break;
                                    case 'remove_node':
                                        var s = t.path;
                                        if (
                                            J.equals(s, n) ||
                                            J.isAncestor(s, n)
                                        )
                                            return null;
                                        J.endsBefore(s, n) &&
                                            (n[s.length - 1] -= 1);
                                        break;
                                    case 'merge_node':
                                        var c = t.path,
                                            u = t.position;
                                        J.equals(c, n) || J.endsBefore(c, n)
                                            ? (n[c.length - 1] -= 1)
                                            : J.isAncestor(c, n) &&
                                              ((n[c.length - 1] -= 1),
                                              (n[c.length] += u));
                                        break;
                                    case 'split_node':
                                        var l = t.path,
                                            f = t.position;
                                        if (J.equals(l, n)) {
                                            if ('forward' === a)
                                                n[n.length - 1] += 1;
                                            else if ('backward' !== a)
                                                return null;
                                        } else
                                            J.endsBefore(l, n)
                                                ? (n[l.length - 1] += 1)
                                                : J.isAncestor(l, n) &&
                                                  e[l.length] >= f &&
                                                  ((n[l.length - 1] += 1),
                                                  (n[l.length] -= f));
                                        break;
                                    case 'move_node':
                                        var d = t.path,
                                            h = t.newPath;
                                        if (J.equals(d, h)) return;
                                        if (
                                            J.isAncestor(d, n) ||
                                            J.equals(d, n)
                                        ) {
                                            var p = h.slice();
                                            if (
                                                J.endsBefore(d, h) &&
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
                                        J.endsBefore(h, n) ||
                                        J.equals(h, n) ||
                                        J.isAncestor(h, n)
                                            ? (J.endsBefore(d, n) &&
                                                  (n[d.length - 1] -= 1),
                                              (n[h.length - 1] += 1))
                                            : J.endsBefore(d, n) &&
                                              (J.equals(h, n) &&
                                                  (n[h.length - 1] += 1),
                                              (n[d.length - 1] -= 1));
                                }
                        });
                    },
                };
            function X(e, t) {
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
            function $(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? X(Object(r), !0).forEach(function(t) {
                              k(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r),
                          )
                        : X(Object(r)).forEach(function(t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t),
                              );
                          });
                }
                return e;
            }
            var Q = {
                compare: function(e, t) {
                    var r = J.compare(e.path, t.path);
                    return 0 === r
                        ? e.offset < t.offset
                            ? -1
                            : e.offset > t.offset
                            ? 1
                            : 0
                        : r;
                },
                isAfter: function(e, t) {
                    return 1 === Q.compare(e, t);
                },
                isBefore: function(e, t) {
                    return -1 === Q.compare(e, t);
                },
                equals: function(e, t) {
                    return e.offset === t.offset && J.equals(e.path, t.path);
                },
                isPoint: function(e) {
                    return (
                        v(e) && 'number' == typeof e.offset && J.isPath(e.path)
                    );
                },
                transform: function(e, t) {
                    var r =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {};
                    return Object(m.d)(e, function(e) {
                        var n = r.affinity,
                            o = void 0 === n ? 'forward' : n,
                            a = e.path,
                            i = e.offset;
                        switch (t.type) {
                            case 'insert_node':
                            case 'move_node':
                                e.path = J.transform(a, t, r);
                                break;
                            case 'insert_text':
                                J.equals(t.path, a) &&
                                    t.offset <= i &&
                                    (e.offset += t.text.length);
                                break;
                            case 'merge_node':
                                J.equals(t.path, a) && (e.offset += t.position),
                                    (e.path = J.transform(a, t, r));
                                break;
                            case 'remove_text':
                                J.equals(t.path, a) &&
                                    t.offset <= i &&
                                    (e.offset -= Math.min(
                                        i - t.offset,
                                        t.text.length,
                                    ));
                                break;
                            case 'remove_node':
                                if (
                                    J.equals(t.path, a) ||
                                    J.isAncestor(t.path, a)
                                )
                                    return null;
                                e.path = J.transform(a, t, r);
                                break;
                            case 'split_node':
                                if (J.equals(t.path, a)) {
                                    if (t.position === i && null == o)
                                        return null;
                                    (t.position < i ||
                                        (t.position === i &&
                                            'forward' === o)) &&
                                        ((e.offset -= t.position),
                                        (e.path = J.transform(
                                            a,
                                            t,
                                            $({}, r, { affinity: 'forward' }),
                                        )));
                                } else e.path = J.transform(a, t, r);
                        }
                    });
                },
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
            var te = {
                edges: function(e) {
                    var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                        r = t.reverse,
                        n = void 0 !== r && r,
                        o = e.anchor,
                        a = e.focus;
                    return te.isBackward(e) === n ? [o, a] : [a, o];
                },
                end: function(e) {
                    var t = w(te.edges(e), 2)[1];
                    return t;
                },
                equals: function(e, t) {
                    return (
                        Q.equals(e.anchor, t.anchor) &&
                        Q.equals(e.focus, t.focus)
                    );
                },
                includes: function(e, t) {
                    if (te.isRange(t)) {
                        if (te.includes(e, t.anchor) || te.includes(e, t.focus))
                            return !0;
                        var r = w(te.edges(e), 2),
                            n = r[0],
                            o = r[1],
                            a = w(te.edges(t), 2),
                            i = a[0],
                            s = a[1];
                        return Q.isBefore(n, i) && Q.isAfter(o, s);
                    }
                    var c = w(te.edges(e), 2),
                        u = c[0],
                        l = c[1],
                        f = !1,
                        d = !1;
                    return (
                        Q.isPoint(t)
                            ? ((f = Q.compare(t, u) >= 0),
                              (d = Q.compare(t, l) <= 0))
                            : ((f = J.compare(t, u.path) >= 0),
                              (d = J.compare(t, l.path) <= 0)),
                        f && d
                    );
                },
                intersection: function(e, t) {
                    var r = E(e, ['anchor', 'focus']),
                        n = w(te.edges(e), 2),
                        o = n[0],
                        a = n[1],
                        i = w(te.edges(t), 2),
                        s = i[0],
                        c = i[1],
                        u = Q.isBefore(o, s) ? s : o,
                        l = Q.isBefore(a, c) ? a : c;
                    return Q.isBefore(l, u)
                        ? null
                        : (function(e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r =
                                      null != arguments[t] ? arguments[t] : {};
                                  t % 2
                                      ? ee(Object(r), !0).forEach(function(t) {
                                            k(e, t, r[t]);
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
                    return Q.isAfter(t, r);
                },
                isCollapsed: function(e) {
                    var t = e.anchor,
                        r = e.focus;
                    return Q.equals(t, r);
                },
                isExpanded: function(e) {
                    return !te.isCollapsed(e);
                },
                isForward: function(e) {
                    return !te.isBackward(e);
                },
                isRange: function(e) {
                    return v(e) && Q.isPoint(e.anchor) && Q.isPoint(e.focus);
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
                    var t = w(te.edges(e), 1)[0];
                    return t;
                },
                transform: function(e, t, r) {
                    var n,
                        o,
                        a = r.affinity,
                        i = void 0 === a ? 'inward' : a;
                    return (
                        'inward' === i
                            ? te.isForward(e)
                                ? ((n = 'forward'), (o = 'backward'))
                                : ((n = 'backward'), (o = 'forward'))
                            : 'outward' === i
                            ? te.isForward(e)
                                ? ((n = 'backward'), (o = 'forward'))
                                : ((n = 'forward'), (o = 'backward'))
                            : ((n = i), (o = i)),
                        Object(m.d)(e, function(e) {
                            var r = Q.transform(e.anchor, t, { affinity: n }),
                                a = Q.transform(e.focus, t, { affinity: o });
                            if (!r || !a) return null;
                            (e.anchor = r), (e.focus = a);
                        })
                    );
                },
            };
            function re(e, t) {
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
            function ne(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? re(Object(r), !0).forEach(function(t) {
                              k(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r),
                          )
                        : re(Object(r)).forEach(function(t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t),
                              );
                          });
                }
                return e;
            }
            var oe = {
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
                    return v(e) && 'string' == typeof e.text;
                },
                isTextList: function(e) {
                    return (
                        Array.isArray(e) && (0 === e.length || oe.isText(e[0]))
                    );
                },
                matches: function(e, t) {
                    for (var r in t)
                        if ('text' !== r && e[r] !== t[r]) return !1;
                    return !0;
                },
                decorations: function(e, t) {
                    var r,
                        n = [ne({}, e)],
                        o = O(t);
                    try {
                        for (o.s(); !(r = o.n()).done; ) {
                            var a,
                                i = r.value,
                                s = E(i, ['anchor', 'focus']),
                                c = w(te.edges(i), 2),
                                u = c[0],
                                l = c[1],
                                f = [],
                                d = 0,
                                h = O(n);
                            try {
                                for (h.s(); !(a = h.n()).done; ) {
                                    var p = a.value,
                                        v = p.text.length,
                                        m = d;
                                    if (
                                        ((d += v),
                                        u.offset <= m && l.offset >= m + v)
                                    )
                                        Object.assign(p, s), f.push(p);
                                    else if (
                                        u.offset > m + v ||
                                        l.offset < m ||
                                        (l.offset === m && 0 !== m)
                                    )
                                        f.push(p);
                                    else {
                                        var g = p,
                                            y = void 0,
                                            b = void 0;
                                        if (l.offset < m + v) {
                                            var x = l.offset - m;
                                            (b = ne({}, g, {
                                                text: g.text.slice(x),
                                            })),
                                                (g = ne({}, g, {
                                                    text: g.text.slice(0, x),
                                                }));
                                        }
                                        if (u.offset > m) {
                                            var S = u.offset - m;
                                            (y = ne({}, g, {
                                                text: g.text.slice(0, S),
                                            })),
                                                (g = ne({}, g, {
                                                    text: g.text.slice(S),
                                                }));
                                        }
                                        Object.assign(g, s),
                                            y && f.push(y),
                                            f.push(g),
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
            function ae(e, t) {
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
            function ie(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? ae(Object(r), !0).forEach(function(t) {
                              k(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r),
                          )
                        : ae(Object(r)).forEach(function(t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t),
                              );
                          });
                }
                return e;
            }
            function se(e, t) {
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
            function ce(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? se(Object(r), !0).forEach(function(t) {
                              k(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r),
                          )
                        : se(Object(r)).forEach(function(t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t),
                              );
                          });
                }
                return e;
            }
            var ue = {
                    insertNodes: function(e, t) {
                        var r =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                        V.withoutNormalizing(e, function() {
                            var n = r.hanging,
                                o = void 0 !== n && n,
                                a = r.voids,
                                i = void 0 !== a && a,
                                s = r.mode,
                                c = void 0 === s ? 'lowest' : s,
                                u = r.at,
                                l = r.match,
                                f = r.select;
                            if ((Y.isNode(t) && (t = [t]), 0 !== t.length)) {
                                var d = w(t, 1)[0];
                                if (
                                    (u ||
                                        ((u = e.selection
                                            ? e.selection
                                            : e.children.length > 0
                                            ? V.end(e, [])
                                            : [0]),
                                        (f = !0)),
                                    null == f && (f = !1),
                                    te.isRange(u))
                                )
                                    if (
                                        (o || (u = V.unhangRange(e, u)),
                                        te.isCollapsed(u))
                                    )
                                        u = u.anchor;
                                    else {
                                        var h = w(te.edges(u), 2)[1],
                                            p = V.pointRef(e, h);
                                        pe.delete(e, { at: u }),
                                            (u = p.unref());
                                    }
                                if (Q.isPoint(u)) {
                                    null == l &&
                                        (l = oe.isText(d)
                                            ? function(e) {
                                                  return oe.isText(e);
                                              }
                                            : e.isInline(d)
                                            ? function(t) {
                                                  return (
                                                      oe.isText(t) ||
                                                      V.isInline(e, t)
                                                  );
                                              }
                                            : function(t) {
                                                  return V.isBlock(e, t);
                                              });
                                    var v = w(
                                        V.nodes(e, {
                                            at: u.path,
                                            match: l,
                                            mode: c,
                                            voids: i,
                                        }),
                                        1,
                                    )[0];
                                    if (!v) return;
                                    var m = w(v, 2)[1],
                                        g = V.pathRef(e, m),
                                        y = V.isEnd(e, u, m);
                                    pe.splitNodes(e, {
                                        at: u,
                                        match: l,
                                        mode: c,
                                        voids: i,
                                    });
                                    var b = g.unref();
                                    u = y ? J.next(b) : b;
                                }
                                var x = J.parent(u),
                                    S = u[u.length - 1];
                                if (i || !V.void(e, { at: x })) {
                                    var k,
                                        E = O(t);
                                    try {
                                        for (E.s(); !(k = E.n()).done; ) {
                                            var j = k.value,
                                                P = x.concat(S);
                                            S++,
                                                e.apply({
                                                    type: 'insert_node',
                                                    path: P,
                                                    node: j,
                                                });
                                        }
                                    } catch (e) {
                                        E.e(e);
                                    } finally {
                                        E.f();
                                    }
                                    if (f) {
                                        var T = V.end(e, u);
                                        T && pe.select(e, T);
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
                        V.withoutNormalizing(e, function() {
                            var r = t.at,
                                n = void 0 === r ? e.selection : r,
                                o = t.mode,
                                a = void 0 === o ? 'lowest' : o,
                                i = t.voids,
                                s = void 0 !== i && i,
                                c = t.match;
                            if (
                                (null == c &&
                                    (c = J.isPath(n)
                                        ? fe(e, n)
                                        : function(t) {
                                              return V.isBlock(e, t);
                                          }),
                                n)
                            )
                                for (
                                    var u = V.nodes(e, {
                                            at: n,
                                            match: c,
                                            mode: a,
                                            voids: s,
                                        }),
                                        l = 0,
                                        f = Array.from(u, function(t) {
                                            var r = w(t, 2)[1];
                                            return V.pathRef(e, r);
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
                                    var h = w(V.node(e, J.parent(d)), 2),
                                        p = h[0],
                                        v = h[1],
                                        m = d[d.length - 1],
                                        g = p.children.length;
                                    if (1 === g) {
                                        var y = J.next(v);
                                        pe.moveNodes(e, {
                                            at: d,
                                            to: y,
                                            voids: s,
                                        }),
                                            pe.removeNodes(e, {
                                                at: v,
                                                voids: s,
                                            });
                                    } else if (0 === m)
                                        pe.moveNodes(e, {
                                            at: d,
                                            to: v,
                                            voids: s,
                                        });
                                    else if (m === g - 1) {
                                        var b = J.next(v);
                                        pe.moveNodes(e, {
                                            at: d,
                                            to: b,
                                            voids: s,
                                        });
                                    } else {
                                        var O = J.next(d),
                                            x = J.next(v);
                                        pe.splitNodes(e, { at: O, voids: s }),
                                            pe.moveNodes(e, {
                                                at: d,
                                                to: x,
                                                voids: s,
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
                        V.withoutNormalizing(e, function() {
                            var r = t.match,
                                n = t.at,
                                o = void 0 === n ? e.selection : n,
                                a = t.hanging,
                                i = void 0 !== a && a,
                                s = t.voids,
                                c = void 0 !== s && s,
                                u = t.mode,
                                l = void 0 === u ? 'lowest' : u;
                            if (o) {
                                if (null == r)
                                    if (J.isPath(o)) {
                                        var f = w(V.parent(e, o), 1)[0];
                                        r = function(e) {
                                            return f.children.includes(e);
                                        };
                                    } else
                                        r = function(t) {
                                            return V.isBlock(e, t);
                                        };
                                if (
                                    (!i &&
                                        te.isRange(o) &&
                                        (o = V.unhangRange(e, o)),
                                    te.isRange(o))
                                )
                                    if (te.isCollapsed(o)) o = o.anchor;
                                    else {
                                        var d = w(te.edges(o), 2)[1],
                                            h = V.pointRef(e, d);
                                        pe.delete(e, { at: o }),
                                            (o = h.unref()),
                                            null == t.at && pe.select(e, o);
                                    }
                                var p = w(
                                        V.nodes(e, {
                                            at: o,
                                            match: r,
                                            voids: c,
                                            mode: l,
                                        }),
                                        1,
                                    )[0],
                                    v = V.previous(e, {
                                        at: o,
                                        match: r,
                                        voids: c,
                                        mode: l,
                                    });
                                if (p && v) {
                                    var m = w(p, 2),
                                        g = m[0],
                                        y = m[1],
                                        b = w(v, 2),
                                        O = b[0],
                                        x = b[1];
                                    if (0 !== y.length && 0 !== x.length) {
                                        var S,
                                            k,
                                            j = J.next(x),
                                            P = J.common(y, x),
                                            T = J.isSibling(y, x),
                                            A = Array.from(
                                                V.levels(e, { at: y }),
                                                function(e) {
                                                    return w(e, 1)[0];
                                                },
                                            )
                                                .slice(P.length)
                                                .slice(0, -1),
                                            D = V.above(e, {
                                                at: y,
                                                mode: 'highest',
                                                match: function(e) {
                                                    return (
                                                        A.includes(e) &&
                                                        W.isElement(e) &&
                                                        1 === e.children.length
                                                    );
                                                },
                                            }),
                                            C = D && V.pathRef(e, D[1]);
                                        if (oe.isText(g) && oe.isText(O)) {
                                            var F = E(g, ['text']);
                                            (k = O.text.length), (S = F);
                                        } else {
                                            if (
                                                !W.isElement(g) ||
                                                !W.isElement(O)
                                            )
                                                throw new Error(
                                                    'Cannot merge the node at path ['
                                                        .concat(
                                                            y,
                                                            '] with the previous sibling because it is not the same kind: ',
                                                        )
                                                        .concat(
                                                            JSON.stringify(g),
                                                            ' ',
                                                        )
                                                        .concat(
                                                            JSON.stringify(O),
                                                        ),
                                                );
                                            F = E(g, ['children']);
                                            (k = O.children.length), (S = F);
                                        }
                                        T ||
                                            pe.moveNodes(e, {
                                                at: y,
                                                to: j,
                                                voids: c,
                                            }),
                                            C &&
                                                pe.removeNodes(e, {
                                                    at: C.current,
                                                    voids: c,
                                                }),
                                            (W.isElement(O) &&
                                                V.isEmpty(e, O)) ||
                                            (oe.isText(O) && '' === O.text)
                                                ? pe.removeNodes(e, {
                                                      at: x,
                                                      voids: c,
                                                  })
                                                : e.apply({
                                                      type: 'merge_node',
                                                      path: j,
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
                        V.withoutNormalizing(e, function() {
                            var r = t.to,
                                n = t.at,
                                o = void 0 === n ? e.selection : n,
                                a = t.mode,
                                i = void 0 === a ? 'lowest' : a,
                                s = t.voids,
                                c = void 0 !== s && s,
                                u = t.match;
                            if (o) {
                                null == u &&
                                    (u = J.isPath(o)
                                        ? fe(e, o)
                                        : function(t) {
                                              return V.isBlock(e, t);
                                          });
                                for (
                                    var l = V.pathRef(e, r),
                                        f = V.nodes(e, {
                                            at: o,
                                            match: u,
                                            mode: i,
                                            voids: c,
                                        }),
                                        d = 0,
                                        h = Array.from(f, function(t) {
                                            var r = w(t, 2)[1];
                                            return V.pathRef(e, r);
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
                        V.withoutNormalizing(e, function() {
                            var r = t.hanging,
                                n = void 0 !== r && r,
                                o = t.voids,
                                a = void 0 !== o && o,
                                i = t.mode,
                                s = void 0 === i ? 'lowest' : i,
                                c = t.at,
                                u = void 0 === c ? e.selection : c,
                                l = t.match;
                            if (u) {
                                null == l &&
                                    (l = J.isPath(u)
                                        ? fe(e, u)
                                        : function(t) {
                                              return V.isBlock(e, t);
                                          }),
                                    !n &&
                                        te.isRange(u) &&
                                        (u = V.unhangRange(e, u));
                                for (
                                    var f = V.nodes(e, {
                                            at: u,
                                            match: l,
                                            mode: s,
                                            voids: a,
                                        }),
                                        d = 0,
                                        h = Array.from(f, function(t) {
                                            var r = w(t, 2)[1];
                                            return V.pathRef(e, r);
                                        });
                                    d < h.length;
                                    d++
                                ) {
                                    var p = h[d].unref();
                                    if (p) {
                                        var v = w(V.node(e, p), 1)[0];
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
                        V.withoutNormalizing(e, function() {
                            var n = r.match,
                                o = r.at,
                                a = void 0 === o ? e.selection : o,
                                i = r.hanging,
                                s = void 0 !== i && i,
                                c = r.mode,
                                u = void 0 === c ? 'lowest' : c,
                                l = r.split,
                                f = void 0 !== l && l,
                                d = r.voids,
                                h = void 0 !== d && d;
                            if (a) {
                                if (
                                    (null == n &&
                                        (n = J.isPath(a)
                                            ? fe(e, a)
                                            : function(t) {
                                                  return V.isBlock(e, t);
                                              }),
                                    !s &&
                                        te.isRange(a) &&
                                        (a = V.unhangRange(e, a)),
                                    f && te.isRange(a))
                                ) {
                                    var p = V.rangeRef(e, a, {
                                            affinity: 'inward',
                                        }),
                                        v = w(te.edges(a), 2),
                                        m = v[0],
                                        g = v[1],
                                        y =
                                            'lowest' === u
                                                ? 'lowest'
                                                : 'highest';
                                    pe.splitNodes(e, {
                                        at: g,
                                        match: n,
                                        mode: y,
                                        voids: h,
                                    }),
                                        pe.splitNodes(e, {
                                            at: m,
                                            match: n,
                                            mode: y,
                                            voids: h,
                                        }),
                                        (a = p.unref()),
                                        null == r.at && pe.select(e, a);
                                }
                                var b,
                                    x = O(
                                        V.nodes(e, {
                                            at: a,
                                            match: n,
                                            mode: u,
                                            voids: h,
                                        }),
                                    );
                                try {
                                    for (x.s(); !(b = x.n()).done; ) {
                                        var S = w(b.value, 2),
                                            k = S[0],
                                            E = S[1],
                                            j = {},
                                            P = {};
                                        if (0 !== E.length) {
                                            for (var T in t)
                                                'children' !== T &&
                                                    'text' !== T &&
                                                    t[T] !== k[T] &&
                                                    ((j[T] = k[T]),
                                                    (P[T] = t[T]));
                                            0 !== Object.keys(P).length &&
                                                e.apply({
                                                    type: 'set_node',
                                                    path: E,
                                                    properties: j,
                                                    newProperties: P,
                                                });
                                        }
                                    }
                                } catch (e) {
                                    x.e(e);
                                } finally {
                                    x.f();
                                }
                            }
                        });
                    },
                    splitNodes: function(e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                        V.withoutNormalizing(e, function() {
                            var r = t.mode,
                                n = void 0 === r ? 'lowest' : r,
                                o = t.voids,
                                a = void 0 !== o && o,
                                i = t.match,
                                s = t.at,
                                c = void 0 === s ? e.selection : s,
                                u = t.height,
                                l = void 0 === u ? 0 : u,
                                f = t.always,
                                d = void 0 !== f && f;
                            if (
                                (null == i &&
                                    (i = function(t) {
                                        return V.isBlock(e, t);
                                    }),
                                te.isRange(c) && (c = le(e, c)),
                                J.isPath(c))
                            ) {
                                var h = c,
                                    p = V.point(e, h),
                                    v = w(V.parent(e, h), 1)[0];
                                (i = function(e) {
                                    return e === v;
                                }),
                                    (l = p.path.length - h.length + 1),
                                    (c = p),
                                    (d = !0);
                            }
                            if (c) {
                                var m = V.pointRef(e, c, {
                                        affinity: 'backward',
                                    }),
                                    g = w(
                                        V.nodes(e, {
                                            at: c,
                                            match: i,
                                            mode: n,
                                            voids: a,
                                        }),
                                        1,
                                    )[0];
                                if (g) {
                                    var y = V.void(e, {
                                        at: c,
                                        mode: 'highest',
                                    });
                                    if (!a && y) {
                                        var b = w(y, 2),
                                            x = b[0],
                                            S = b[1];
                                        if (W.isElement(x) && e.isInline(x)) {
                                            var k = V.after(e, S);
                                            if (!k) {
                                                var j = J.next(S);
                                                pe.insertNodes(
                                                    e,
                                                    { text: '' },
                                                    { at: j, voids: a },
                                                ),
                                                    (k = V.point(e, j));
                                            }
                                            (c = k), (d = !0);
                                        }
                                        (l = c.path.length - S.length + 1),
                                            (d = !0);
                                    }
                                    var P,
                                        T = V.pointRef(e, c),
                                        A = c.path.length - l,
                                        D = w(g, 2)[1],
                                        C = c.path.slice(0, A),
                                        F = 0 === l ? c.offset : c.path[A] + 0,
                                        R = null,
                                        N = O(
                                            V.levels(e, {
                                                at: C,
                                                reverse: !0,
                                                voids: a,
                                            }),
                                        );
                                    try {
                                        for (N.s(); !(P = N.n()).done; ) {
                                            var M = w(P.value, 2),
                                                z = M[0],
                                                _ = M[1],
                                                H = !1;
                                            if (
                                                _.length < D.length ||
                                                0 === _.length ||
                                                (!a && V.isVoid(e, z))
                                            )
                                                break;
                                            var I = m.current,
                                                B = V.isEnd(e, I, _);
                                            if (d || !m || !V.isEdge(e, I, _)) {
                                                H = !0;
                                                var L = E(z, [
                                                    'text',
                                                    'children',
                                                ]);
                                                e.apply({
                                                    type: 'split_node',
                                                    path: _,
                                                    position: F,
                                                    target: R,
                                                    properties: L,
                                                });
                                            }
                                            (R = F),
                                                (F =
                                                    _[_.length - 1] +
                                                    (H || B ? 1 : 0));
                                        }
                                    } catch (e) {
                                        N.e(e);
                                    } finally {
                                        N.f();
                                    }
                                    if (null == t.at) {
                                        var U = T.current || V.end(e, []);
                                        pe.select(e, U);
                                    }
                                    m.unref(), T.unref();
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
                            a = O(t);
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
                        pe.setNodes(e, o, r);
                    },
                    unwrapNodes: function(e, t) {
                        V.withoutNormalizing(e, function() {
                            var r = t.mode,
                                n = void 0 === r ? 'lowest' : r,
                                o = t.split,
                                a = void 0 !== o && o,
                                i = t.voids,
                                s = void 0 !== i && i,
                                c = t.at,
                                u = void 0 === c ? e.selection : c,
                                l = t.match;
                            if (u) {
                                null == l &&
                                    (l = J.isPath(u)
                                        ? fe(e, u)
                                        : function(t) {
                                              return V.isBlock(e, t);
                                          }),
                                    J.isPath(u) && (u = V.range(e, u));
                                for (
                                    var f = te.isRange(u)
                                            ? V.rangeRef(e, u)
                                            : null,
                                        d = V.nodes(e, {
                                            at: u,
                                            match: l,
                                            mode: n,
                                            voids: s,
                                        }),
                                        h = function(t) {
                                            var r = t.unref(),
                                                n = w(V.node(e, r), 1)[0],
                                                o = V.range(e, r);
                                            a &&
                                                f &&
                                                (o = te.intersection(
                                                    f.current,
                                                    o,
                                                )),
                                                pe.liftNodes(e, {
                                                    at: o,
                                                    match: function(e) {
                                                        return n.children.includes(
                                                            e,
                                                        );
                                                    },
                                                    voids: s,
                                                });
                                        },
                                        p = 0,
                                        v = Array.from(d, function(t) {
                                            var r = w(t, 2)[1];
                                            return V.pathRef(e, r);
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
                        V.withoutNormalizing(e, function() {
                            var n = r.mode,
                                o = void 0 === n ? 'lowest' : n,
                                a = r.split,
                                i = void 0 !== a && a,
                                s = r.voids,
                                c = void 0 !== s && s,
                                u = r.match,
                                l = r.at,
                                f = void 0 === l ? e.selection : l;
                            if (f) {
                                if (
                                    (null == u &&
                                        (u = J.isPath(f)
                                            ? fe(e, f)
                                            : e.isInline(t)
                                            ? function(t) {
                                                  return (
                                                      V.isInline(e, t) ||
                                                      oe.isText(t)
                                                  );
                                              }
                                            : function(t) {
                                                  return V.isBlock(e, t);
                                              }),
                                    i && te.isRange(f))
                                ) {
                                    var d = w(te.edges(f), 2),
                                        h = d[0],
                                        p = d[1],
                                        v = V.rangeRef(e, f, {
                                            affinity: 'inward',
                                        });
                                    pe.splitNodes(e, {
                                        at: p,
                                        match: u,
                                        voids: c,
                                    }),
                                        pe.splitNodes(e, {
                                            at: h,
                                            match: u,
                                            voids: c,
                                        }),
                                        (f = v.unref()),
                                        null == r.at && pe.select(e, f);
                                }
                                for (
                                    var m = 0,
                                        g = Array.from(
                                            V.nodes(e, {
                                                at: f,
                                                match: e.isInline(t)
                                                    ? function(t) {
                                                          return V.isBlock(
                                                              e,
                                                              t,
                                                          );
                                                      }
                                                    : function(e) {
                                                          return V.isEditor(e);
                                                      },
                                                mode: 'lowest',
                                                voids: c,
                                            }),
                                        );
                                    m < g.length;
                                    m++
                                ) {
                                    var y = w(g[m], 2)[1],
                                        b = te.isRange(f)
                                            ? te.intersection(f, V.range(e, y))
                                            : f;
                                    if (b) {
                                        var O = Array.from(
                                            V.nodes(e, {
                                                at: b,
                                                match: u,
                                                mode: o,
                                                voids: c,
                                            }),
                                        );
                                        O.length > 0 &&
                                            (function() {
                                                var r = w(O, 1)[0],
                                                    n = O[O.length - 1],
                                                    o = w(r, 2)[1],
                                                    a = w(n, 2)[1],
                                                    i = J.equals(o, a)
                                                        ? J.parent(o)
                                                        : J.common(o, a),
                                                    s = V.range(e, o, a),
                                                    u = w(V.node(e, i), 1)[0],
                                                    l = i.length + 1,
                                                    f = J.next(a.slice(0, l)),
                                                    d = ce({}, t, {
                                                        children: [],
                                                    });
                                                pe.insertNodes(e, d, {
                                                    at: f,
                                                    voids: c,
                                                }),
                                                    pe.moveNodes(e, {
                                                        at: s,
                                                        match: function(e) {
                                                            return u.children.includes(
                                                                e,
                                                            );
                                                        },
                                                        to: f.concat(0),
                                                        voids: c,
                                                    });
                                            })();
                                    }
                                }
                            }
                        });
                    },
                },
                le = function(e, t) {
                    if (te.isCollapsed(t)) return t.anchor;
                    var r = w(te.edges(t), 2)[1],
                        n = V.pointRef(e, r);
                    return pe.delete(e, { at: t }), n.unref();
                },
                fe = function(e, t) {
                    var r = w(V.node(e, t), 1)[0];
                    return function(e) {
                        return e === r;
                    };
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
            function he(e, t) {
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
            var pe = (function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? he(Object(r), !0).forEach(function(t) {
                              k(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r),
                          )
                        : he(Object(r)).forEach(function(t) {
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
                        e.children = Object(m.a)(e.children);
                        var r = e.selection && Object(m.a)(e.selection);
                        switch (t.type) {
                            case 'insert_node':
                                var n = t.path,
                                    o = t.node,
                                    a = Y.parent(e, n),
                                    i = n[n.length - 1];
                                if ((a.children.splice(i, 0, o), r)) {
                                    var s,
                                        c = O(te.points(r));
                                    try {
                                        for (c.s(); !(s = c.n()).done; ) {
                                            var u = w(s.value, 2),
                                                l = u[0];
                                            r[u[1]] = Q.transform(l, t);
                                        }
                                    } catch (e) {
                                        c.e(e);
                                    } finally {
                                        c.f();
                                    }
                                }
                                break;
                            case 'insert_text':
                                var f = t.path,
                                    d = t.offset,
                                    h = t.text,
                                    p = Y.leaf(e, f),
                                    v = p.text.slice(0, d),
                                    g = p.text.slice(d);
                                if (((p.text = v + h + g), r)) {
                                    var y,
                                        x = O(te.points(r));
                                    try {
                                        for (x.s(); !(y = x.n()).done; ) {
                                            var S = w(y.value, 2),
                                                k = S[0];
                                            r[S[1]] = Q.transform(k, t);
                                        }
                                    } catch (e) {
                                        x.e(e);
                                    } finally {
                                        x.f();
                                    }
                                }
                                break;
                            case 'merge_node':
                                var E = t.path,
                                    j = Y.get(e, E),
                                    P = J.previous(E),
                                    T = Y.get(e, P),
                                    A = Y.parent(e, E),
                                    D = E[E.length - 1];
                                if (oe.isText(j) && oe.isText(T))
                                    T.text += j.text;
                                else {
                                    if (oe.isText(j) || oe.isText(T))
                                        throw new Error(
                                            'Cannot apply a "merge_node" operation at path ['
                                                .concat(
                                                    E,
                                                    '] to nodes of different interaces: ',
                                                )
                                                .concat(j, ' ')
                                                .concat(T),
                                        );
                                    var C;
                                    (C = T.children).push.apply(
                                        C,
                                        b(j.children),
                                    );
                                }
                                if ((A.children.splice(D, 1), r)) {
                                    var F,
                                        R = O(te.points(r));
                                    try {
                                        for (R.s(); !(F = R.n()).done; ) {
                                            var N = w(F.value, 2),
                                                M = N[0];
                                            r[N[1]] = Q.transform(M, t);
                                        }
                                    } catch (e) {
                                        R.e(e);
                                    } finally {
                                        R.f();
                                    }
                                }
                                break;
                            case 'move_node':
                                var z = t.path,
                                    _ = t.newPath;
                                if (J.isAncestor(z, _))
                                    throw new Error(
                                        'Cannot move a path ['
                                            .concat(z, '] to new path [')
                                            .concat(
                                                _,
                                                '] because the destination is inside itself.',
                                            ),
                                    );
                                var H = Y.get(e, z),
                                    I = Y.parent(e, z),
                                    B = z[z.length - 1];
                                I.children.splice(B, 1);
                                var L = J.transform(z, t),
                                    U = Y.get(e, J.parent(L)),
                                    V = L[L.length - 1];
                                if ((U.children.splice(V, 0, H), r)) {
                                    var W,
                                        q = O(te.points(r));
                                    try {
                                        for (q.s(); !(W = q.n()).done; ) {
                                            var G = w(W.value, 2),
                                                Z = G[0];
                                            r[G[1]] = Q.transform(Z, t);
                                        }
                                    } catch (e) {
                                        q.e(e);
                                    } finally {
                                        q.f();
                                    }
                                }
                                break;
                            case 'remove_node':
                                var K = t.path,
                                    X = K[K.length - 1];
                                if ((Y.parent(e, K).children.splice(X, 1), r)) {
                                    var $,
                                        ee = O(te.points(r));
                                    try {
                                        for (ee.s(); !($ = ee.n()).done; ) {
                                            var re = w($.value, 2),
                                                ne = re[0],
                                                ae = re[1],
                                                se = Q.transform(ne, t);
                                            if (null != r && null != se)
                                                r[ae] = se;
                                            else {
                                                var ce,
                                                    ue = void 0,
                                                    le = void 0,
                                                    fe = O(Y.texts(e));
                                                try {
                                                    for (
                                                        fe.s();
                                                        !(ce = fe.n()).done;

                                                    ) {
                                                        var de = w(ce.value, 2),
                                                            he = de[0],
                                                            pe = de[1];
                                                        if (
                                                            -1 !==
                                                            J.compare(pe, K)
                                                        ) {
                                                            le = [he, pe];
                                                            break;
                                                        }
                                                        ue = [he, pe];
                                                    }
                                                } catch (e) {
                                                    fe.e(e);
                                                } finally {
                                                    fe.f();
                                                }
                                                ue
                                                    ? ((ne.path = ue[1]),
                                                      (ne.offset =
                                                          ue[0].text.length))
                                                    : le
                                                    ? ((ne.path = le[1]),
                                                      (ne.offset = 0))
                                                    : (r = null);
                                            }
                                        }
                                    } catch (e) {
                                        ee.e(e);
                                    } finally {
                                        ee.f();
                                    }
                                }
                                break;
                            case 'remove_text':
                                var ve = t.path,
                                    me = t.offset,
                                    ge = t.text,
                                    ye = Y.leaf(e, ve),
                                    be = ye.text.slice(0, me),
                                    we = ye.text.slice(me + ge.length);
                                if (((ye.text = be + we), r)) {
                                    var Oe,
                                        xe = O(te.points(r));
                                    try {
                                        for (xe.s(); !(Oe = xe.n()).done; ) {
                                            var Se = w(Oe.value, 2),
                                                ke = Se[0];
                                            r[Se[1]] = Q.transform(ke, t);
                                        }
                                    } catch (e) {
                                        xe.e(e);
                                    } finally {
                                        xe.f();
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
                                var Pe = Y.get(e, Ee);
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
                                var De = t.newProperties;
                                if (null == De) r = De;
                                else if (null == r) {
                                    if (!te.isRange(De))
                                        throw new Error(
                                            'Cannot apply an incomplete "set_selection" operation properties '.concat(
                                                JSON.stringify(De),
                                                ' when there is no current selection.',
                                            ),
                                        );
                                    r = De;
                                } else Object.assign(r, De);
                                break;
                            case 'split_node':
                                var Ce = t.path,
                                    Fe = t.position,
                                    Re = t.properties;
                                if (0 === Ce.length)
                                    throw new Error(
                                        'Cannot apply a "split_node" operation at path ['.concat(
                                            Ce,
                                            '] because the root node cannot be split.',
                                        ),
                                    );
                                var Ne,
                                    Me = Y.get(e, Ce),
                                    ze = Y.parent(e, Ce),
                                    _e = Ce[Ce.length - 1];
                                if (oe.isText(Me)) {
                                    var He = Me.text.slice(0, Fe),
                                        Ie = Me.text.slice(Fe);
                                    (Me.text = He),
                                        (Ne = ie({}, Me, {}, Re, { text: Ie }));
                                } else {
                                    var Be = Me.children.slice(0, Fe),
                                        Le = Me.children.slice(Fe);
                                    (Me.children = Be),
                                        (Ne = ie({}, Me, {}, Re, {
                                            children: Le,
                                        }));
                                }
                                if ((ze.children.splice(_e + 1, 0, Ne), r)) {
                                    var Ue,
                                        Ve = O(te.points(r));
                                    try {
                                        for (Ve.s(); !(Ue = Ve.n()).done; ) {
                                            var We = w(Ue.value, 2),
                                                qe = We[0];
                                            r[We[1]] = Q.transform(qe, t);
                                        }
                                    } catch (e) {
                                        Ve.e(e);
                                    } finally {
                                        Ve.f();
                                    }
                                }
                        }
                        (e.children = Object(m.b)(e.children)),
                            (e.selection = r
                                ? Object(m.c)(r)
                                    ? Object(m.b)(r)
                                    : r
                                : null);
                    },
                },
                {},
                ue,
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
                            if ('anchor' === n) pe.select(e, o.anchor);
                            else if ('focus' === n) pe.select(e, o.focus);
                            else if ('start' === n) {
                                var a = te.edges(o),
                                    i = w(a, 1),
                                    s = i[0];
                                pe.select(e, s);
                            } else if ('end' === n) {
                                var c = te.edges(o),
                                    u = w(c, 2),
                                    l = u[1];
                                pe.select(e, l);
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
                            s = t.reverse,
                            c = void 0 !== s && s,
                            u = t.edge,
                            l = void 0 === u ? null : u;
                        if (r) {
                            'start' === l &&
                                (l = te.isBackward(r) ? 'focus' : 'anchor'),
                                'end' === l &&
                                    (l = te.isBackward(r) ? 'anchor' : 'focus');
                            var f = r.anchor,
                                d = r.focus,
                                h = { distance: o, unit: i },
                                p = {};
                            if (null == l || 'anchor' === l) {
                                var v = c
                                    ? V.before(e, f, h)
                                    : V.after(e, f, h);
                                v && (p.anchor = v);
                            }
                            if (null == l || 'focus' === l) {
                                var m = c
                                    ? V.before(e, d, h)
                                    : V.after(e, d, h);
                                m && (p.focus = m);
                            }
                            pe.setSelection(e, p);
                        }
                    },
                    select: function(e, t) {
                        var r = e.selection;
                        if (((t = V.range(e, t)), r)) pe.setSelection(e, t);
                        else {
                            if (!te.isRange(t))
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
                                (a = te.isBackward(n) ? 'focus' : 'anchor'),
                                'end' === a &&
                                    (a = te.isBackward(n) ? 'anchor' : 'focus');
                            var i = n.anchor,
                                s = n.focus,
                                c = 'anchor' === a ? i : s;
                            pe.setSelection(
                                e,
                                y(
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
                                                ? de(Object(r), !0).forEach(
                                                      function(t) {
                                                          k(e, t, r[t]);
                                                      },
                                                  )
                                                : Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(
                                                      e,
                                                      Object.getOwnPropertyDescriptors(
                                                          r,
                                                      ),
                                                  )
                                                : de(Object(r)).forEach(
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
                                    })({}, c, {}, t),
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
                                    !Q.equals(t.anchor, r.anchor)) ||
                                    ('focus' === a &&
                                        null != t.focus &&
                                        !Q.equals(t.focus, r.focus)) ||
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
                        V.withoutNormalizing(e, function() {
                            var r = t.reverse,
                                n = void 0 !== r && r,
                                o = t.unit,
                                a = void 0 === o ? 'character' : o,
                                i = t.distance,
                                s = void 0 === i ? 1 : i,
                                c = t.voids,
                                u = void 0 !== c && c,
                                l = t.at,
                                f = void 0 === l ? e.selection : l,
                                d = t.hanging,
                                h = void 0 !== d && d;
                            if (f) {
                                if (
                                    (te.isRange(f) &&
                                        te.isCollapsed(f) &&
                                        (f = f.anchor),
                                    Q.isPoint(f))
                                ) {
                                    var p = V.void(e, {
                                        at: f,
                                        mode: 'highest',
                                    });
                                    if (!u && p) {
                                        f = w(p, 2)[1];
                                    } else {
                                        var v = { unit: a, distance: s };
                                        (f = {
                                            anchor: f,
                                            focus: n
                                                ? V.before(e, f, v) ||
                                                  V.start(e, [])
                                                : V.after(e, f, v) ||
                                                  V.end(e, []),
                                        }),
                                            (h = !0);
                                    }
                                }
                                if (J.isPath(f))
                                    pe.removeNodes(e, { at: f, voids: u });
                                else if (!te.isCollapsed(f)) {
                                    h ||
                                        (f = V.unhangRange(e, f, { voids: u }));
                                    var m = w(te.edges(f), 2),
                                        g = m[0],
                                        y = m[1],
                                        b = V.above(e, {
                                            match: function(t) {
                                                return V.isBlock(e, t);
                                            },
                                            at: g,
                                            voids: u,
                                        }),
                                        x = V.above(e, {
                                            match: function(t) {
                                                return V.isBlock(e, t);
                                            },
                                            at: y,
                                            voids: u,
                                        }),
                                        S = b && x && !J.equals(b[1], x[1]),
                                        k = J.equals(g.path, y.path),
                                        E = u
                                            ? null
                                            : V.void(e, {
                                                  at: g,
                                                  mode: 'highest',
                                              }),
                                        j = u
                                            ? null
                                            : V.void(e, {
                                                  at: y,
                                                  mode: 'highest',
                                              });
                                    if (E) {
                                        var P = V.before(e, g);
                                        P &&
                                            b &&
                                            J.isAncestor(b[1], P.path) &&
                                            (g = P);
                                    }
                                    if (j) {
                                        var T = V.after(e, y);
                                        T &&
                                            x &&
                                            J.isAncestor(x[1], T.path) &&
                                            (y = T);
                                    }
                                    var A,
                                        D,
                                        C = [],
                                        F = O(V.nodes(e, { at: f, voids: u }));
                                    try {
                                        for (F.s(); !(D = F.n()).done; ) {
                                            var R = D.value,
                                                N = w(R, 2),
                                                M = N[0],
                                                z = N[1];
                                            (A && 0 === J.compare(z, A)) ||
                                                (((!u && V.isVoid(e, M)) ||
                                                    (!J.isCommon(z, g.path) &&
                                                        !J.isCommon(
                                                            z,
                                                            y.path,
                                                        ))) &&
                                                    (C.push(R), (A = z)));
                                        }
                                    } catch (e) {
                                        F.e(e);
                                    } finally {
                                        F.f();
                                    }
                                    var _ = Array.from(C, function(t) {
                                            var r = w(t, 2)[1];
                                            return V.pathRef(e, r);
                                        }),
                                        H = V.pointRef(e, g),
                                        I = V.pointRef(e, y);
                                    if (!k && !E) {
                                        var B = H.current,
                                            L = w(V.leaf(e, B), 1)[0],
                                            U = B.path,
                                            W = g.offset,
                                            q = L.text.slice(W);
                                        e.apply({
                                            type: 'remove_text',
                                            path: U,
                                            offset: W,
                                            text: q,
                                        });
                                    }
                                    for (var Y = 0, G = _; Y < G.length; Y++) {
                                        var Z = G[Y].unref();
                                        pe.removeNodes(e, { at: Z, voids: u });
                                    }
                                    if (!j) {
                                        var K = I.current,
                                            X = w(V.leaf(e, K), 1)[0],
                                            $ = K.path,
                                            ee = k ? g.offset : 0,
                                            re = X.text.slice(ee, y.offset);
                                        e.apply({
                                            type: 'remove_text',
                                            path: $,
                                            offset: ee,
                                            text: re,
                                        });
                                    }
                                    !k &&
                                        S &&
                                        I.current &&
                                        H.current &&
                                        pe.mergeNodes(e, {
                                            at: I.current,
                                            hanging: !0,
                                            voids: u,
                                        });
                                    var ne = I.unref() || H.unref();
                                    null == t.at && ne && pe.select(e, ne);
                                }
                            }
                        });
                    },
                    insertFragment: function(e, t) {
                        var r =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                        V.withoutNormalizing(e, function() {
                            var n = r.hanging,
                                o = void 0 !== n && n,
                                a = r.voids,
                                i = void 0 !== a && a,
                                s = r.at,
                                c = void 0 === s ? e.selection : s;
                            if (t.length && c) {
                                if (te.isRange(c))
                                    if (
                                        (o || (c = V.unhangRange(e, c)),
                                        te.isCollapsed(c))
                                    )
                                        c = c.anchor;
                                    else {
                                        var u = w(te.edges(c), 2)[1];
                                        if (!i && V.void(e, { at: u })) return;
                                        var l = V.pointRef(e, u);
                                        pe.delete(e, { at: c }),
                                            (c = l.unref());
                                    }
                                else J.isPath(c) && (c = V.start(e, c));
                                if (i || !V.void(e, { at: c })) {
                                    var f = V.above(e, {
                                        at: c,
                                        match: function(t) {
                                            return V.isInline(e, t);
                                        },
                                        mode: 'highest',
                                        voids: i,
                                    });
                                    if (f) {
                                        var d = w(f, 2)[1];
                                        if (V.isEnd(e, c, d)) c = V.after(e, d);
                                        else if (V.isStart(e, c, d)) {
                                            c = V.before(e, d);
                                        }
                                    }
                                    var h,
                                        p = w(
                                            V.above(e, {
                                                match: function(t) {
                                                    return V.isBlock(e, t);
                                                },
                                                at: c,
                                                voids: i,
                                            }),
                                            2,
                                        )[1],
                                        v = V.isStart(e, c, p),
                                        m = V.isEnd(e, c, p),
                                        g = !v || (v && m),
                                        y = !m,
                                        b = w(
                                            Y.first({ children: t }, []),
                                            2,
                                        )[1],
                                        x = w(
                                            Y.last({ children: t }, []),
                                            2,
                                        )[1],
                                        S = [],
                                        k = function(t) {
                                            var r = w(t, 2),
                                                n = r[0],
                                                o = r[1];
                                            return (
                                                !(
                                                    g &&
                                                    J.isAncestor(o, b) &&
                                                    W.isElement(n) &&
                                                    !e.isVoid(n) &&
                                                    !e.isInline(n)
                                                ) &&
                                                !(
                                                    y &&
                                                    J.isAncestor(o, x) &&
                                                    W.isElement(n) &&
                                                    !e.isVoid(n) &&
                                                    !e.isInline(n)
                                                )
                                            );
                                        },
                                        E = O(
                                            Y.nodes(
                                                { children: t },
                                                { pass: k },
                                            ),
                                        );
                                    try {
                                        for (E.s(); !(h = E.n()).done; ) {
                                            var j = h.value;
                                            j[1].length > 0 &&
                                                k(j) &&
                                                S.push(j);
                                        }
                                    } catch (e) {
                                        E.e(e);
                                    } finally {
                                        E.f();
                                    }
                                    for (
                                        var P = [],
                                            T = [],
                                            A = [],
                                            D = !0,
                                            C = !1,
                                            F = 0,
                                            R = S;
                                        F < R.length;
                                        F++
                                    ) {
                                        var N = w(R[F], 1)[0];
                                        W.isElement(N) && !e.isInline(N)
                                            ? ((D = !1), (C = !0), T.push(N))
                                            : D
                                            ? P.push(N)
                                            : A.push(N);
                                    }
                                    var M = w(
                                            V.nodes(e, {
                                                at: c,
                                                match: function(t) {
                                                    return (
                                                        oe.isText(t) ||
                                                        V.isInline(e, t)
                                                    );
                                                },
                                                mode: 'highest',
                                                voids: i,
                                            }),
                                            1,
                                        ),
                                        z = w(M[0], 2)[1],
                                        _ = V.isStart(e, c, z),
                                        H = V.isEnd(e, c, z),
                                        I = V.pathRef(e, m ? J.next(p) : p),
                                        B = V.pathRef(e, H ? J.next(z) : z);
                                    pe.splitNodes(e, {
                                        at: c,
                                        match: function(t) {
                                            return C
                                                ? V.isBlock(e, t)
                                                : oe.isText(t) ||
                                                      V.isInline(e, t);
                                        },
                                        mode: C ? 'lowest' : 'highest',
                                        voids: i,
                                    });
                                    var L = V.pathRef(
                                        e,
                                        !_ || (_ && H) ? J.next(z) : z,
                                    );
                                    if (
                                        (pe.insertNodes(e, P, {
                                            at: L.current,
                                            match: function(t) {
                                                return (
                                                    oe.isText(t) ||
                                                    V.isInline(e, t)
                                                );
                                            },
                                            mode: 'highest',
                                            voids: i,
                                        }),
                                        pe.insertNodes(e, T, {
                                            at: I.current,
                                            match: function(t) {
                                                return V.isBlock(e, t);
                                            },
                                            mode: 'lowest',
                                            voids: i,
                                        }),
                                        pe.insertNodes(e, A, {
                                            at: B.current,
                                            match: function(t) {
                                                return (
                                                    oe.isText(t) ||
                                                    V.isInline(e, t)
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
                                                ? J.previous(B.current)
                                                : T.length > 0
                                                ? J.previous(I.current)
                                                : J.previous(L.current);
                                        var q = V.end(e, U);
                                        pe.select(e, q);
                                    }
                                    L.unref(), I.unref(), B.unref();
                                }
                            }
                        });
                    },
                    insertText: function(e, t) {
                        var r =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                        V.withoutNormalizing(e, function() {
                            var n = r.voids,
                                o = void 0 !== n && n,
                                a = r.at,
                                i = void 0 === a ? e.selection : a;
                            if (i) {
                                if (
                                    (J.isPath(i) && (i = V.range(e, i)),
                                    te.isRange(i))
                                )
                                    if (te.isCollapsed(i)) i = i.anchor;
                                    else {
                                        var s = te.end(i);
                                        if (!o && V.void(e, { at: s })) return;
                                        var c = V.pointRef(e, s);
                                        pe.delete(e, { at: i, voids: o }),
                                            (i = c.unref()),
                                            pe.setSelection(e, {
                                                anchor: i,
                                                focus: i,
                                            });
                                    }
                                if (o || !V.void(e, { at: i })) {
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
            var ve = r(7),
                me = r.n(ve),
                ge = r(1),
                ye = r.n(ge);
            function be(e, t, r, n, o, a, i) {
                try {
                    var s = e[a](i),
                        c = s.value;
                } catch (e) {
                    return void r(e);
                }
                s.done ? t(c) : Promise.resolve(c).then(n, o);
            }
            function we(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise(function(n, o) {
                        var a = e.apply(t, r);
                        function i(e) {
                            be(a, n, o, i, s, 'next', e);
                        }
                        function s(e) {
                            be(a, n, o, i, s, 'throw', e);
                        }
                        i(void 0);
                    });
                };
            }
            var Oe = {},
                xe = {};
            (xe.Component = ye.a.Utils.registryFactory('ShortcodesComponents')),
                (xe.Component.get = function(e) {
                    var t = i.a.findWhere(xe.Component.list, { id: e });
                    if (t) return l.a.set(t, 'id', e), t;
                }),
                (xe.clearCache = function() {
                    Oe = {};
                }),
                (xe.delete = we(
                    regeneratorRuntime.mark(function e() {
                        var t,
                            r,
                            n,
                            o = arguments;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        for (
                                            t = o.length,
                                                r = new Array(t),
                                                n = 0;
                                            n < t;
                                            n++
                                        )
                                            r[n] = o[n];
                                        return (
                                            i.a
                                                .flatten([].concat(r))
                                                .forEach(function(e) {
                                                    var t = xe.parseKey(e);
                                                    l.a.has(Oe, t) &&
                                                        l.a.del(Oe, t);
                                                }),
                                            e.abrupt('return', xe.save(Oe))
                                        );
                                    case 3:
                                    case 'end':
                                        return e.stop();
                                }
                        }, e);
                    }),
                )),
                (xe.isKey = function(e) {
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
                (xe.list = function(e) {
                    return e
                        ? ye.a.Setting.get('shortcodes', {}, e).then(function(
                              e,
                          ) {
                              return (Oe = e);
                          })
                        : Oe;
                }),
                (xe.parseCode = function(e) {
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
                (xe.parseKey = function(e) {
                    return String(e).replace(/\[|\]/g, '');
                }),
                (xe.save = we(
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
                                            (Oe = t),
                                            (e.next = 4),
                                            ye.a.Setting.set('shortcodes', t)
                                        );
                                    case 4:
                                        return e.abrupt('return', Oe);
                                    case 5:
                                    case 'end':
                                        return e.stop();
                                }
                        }, e);
                    }),
                )),
                (ye.a.Shortcode = xe);
            var Se = xe;
            function ke(e, t) {
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
                                var i, s = e[Symbol.iterator]();
                                !(n = (i = s.next()).done) &&
                                (r.push(i.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (a = e);
                        } finally {
                            try {
                                n || null == s.return || s.return();
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
                        a = Object(ge.useHookComponent)('ReactiumUI'),
                        i = a.Dialog,
                        s = a.Button,
                        c = a.EventForm,
                        u = Se.Component.get(n.type),
                        f = [
                            n.code,
                            l.a.get(u, 'label', me()(u.id, { pascalCase: !0 })),
                        ].join(' - '),
                        d = Object.entries(l.a.get(u, 'attributes', {})).map(
                            function(e) {
                                var t = je(e, 2),
                                    r = t[0],
                                    n = t[1];
                                return (n.id = r), n;
                            },
                        ),
                        h = function() {
                            return t.dismiss();
                        },
                        p = {
                            align: i.ENUMS.ALIGN.RIGHT,
                            elements: [
                                o.a.createElement(
                                    s,
                                    {
                                        key: 'cancel-btn',
                                        type: s.ENUMS.TYPE.BUTTON,
                                        onClick: h,
                                        className: 'mr-xs-8',
                                        color: s.ENUMS.COLOR.DANGER,
                                    },
                                    'Cancel',
                                ),
                                o.a.createElement(
                                    s,
                                    {
                                        key: 'insert-btn',
                                        type: s.ENUMS.TYPE.SUBMIT,
                                    },
                                    'Insert',
                                ),
                            ],
                        };
                    return o.a.createElement(
                        c,
                        {
                            onSubmit: function(e) {
                                (n.attributes = e.value), r(n), t.dismiss();
                            },
                        },
                        o.a.createElement(
                            i,
                            {
                                collapsible: !1,
                                dismissable: !0,
                                footer: p,
                                header: { title: f },
                                onDismiss: h,
                            },
                            o.a.createElement(
                                'div',
                                { className: 'shortcodes-rte-attributes' },
                                d.map(function(e) {
                                    return o.a.createElement(
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
                        a = e.type,
                        i = ke(e, ['id', 'label', 'type']);
                    switch (
                        ((n = n || ''.concat(me()(r, { pascalCase: !0 }), ':')),
                        a)
                    ) {
                        case 'textarea':
                            t = function(e) {
                                return o.a.createElement(
                                    'label',
                                    null,
                                    o.a.createElement('span', null, n),
                                    o.a.createElement('textarea', e),
                                );
                            };
                            break;
                        default:
                            t = function(e) {
                                return o.a.createElement(
                                    'label',
                                    null,
                                    o.a.createElement('span', null, n),
                                    o.a.createElement(
                                        'input',
                                        Ee({ type: a }, e),
                                    ),
                                );
                            };
                    }
                    return o.a.createElement(
                        'div',
                        { className: 'form-group' },
                        o.a.createElement(t, Ee({}, i, { name: r, id: r })),
                    );
                },
                De = r(6);
            function Ce() {
                return (Ce =
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
                    var s = e[a](i),
                        c = s.value;
                } catch (e) {
                    return void r(e);
                }
                s.done ? t(c) : Promise.resolve(c).then(n, o);
            }
            function Re(e, t) {
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
                                var i, s = e[Symbol.iterator]();
                                !(n = (i = s.next()).done) &&
                                (r.push(i.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (a = e);
                        } finally {
                            try {
                                n || null == s.return || s.return();
                            } finally {
                                if (o) throw a;
                            }
                        }
                        return r;
                    })(e, t) ||
                    (function(e, t) {
                        if (!e) return;
                        if ('string' == typeof e) return Ne(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name);
                        if ('Map' === r || 'Set' === r) return Array.from(e);
                        if (
                            'Arguments' === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        )
                            return Ne(e, t);
                    })(e, t) ||
                    (function() {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function Ne(e, t) {
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
            var ze = {
                    STATUS: {
                        PENDING: 'PENDING',
                        INITIALIZING: 'INITIALIZING',
                        READY: 'READY',
                    },
                },
                _e = function(e) {
                    var t = e.editor,
                        r = e.namespace,
                        a = e.title,
                        s = Me(e, ['editor', 'namespace', 'title']),
                        u = Object(n.useRef)(),
                        f = Object(ge.useHookComponent)('ReactiumUI'),
                        d = f.Dialog,
                        h = f.Spinner,
                        p = Object(ge.useHandle)('AdminTools'),
                        v = Re(Object(ge.useStatus)(ze.STATUS.PENDING), 3),
                        m = v[0],
                        g = v[1],
                        y = v[2],
                        b = Re(
                            Object(ge.useDerivedState)({
                                search: null,
                                selection: s.selection,
                                shortcodes: {},
                            }),
                            2,
                        ),
                        w = b[0],
                        O = b[1],
                        x = function(e) {
                            P() || O(e);
                        },
                        S = ye.a.Utils.cxFactory(r),
                        k = function() {
                            t.panel.hide(!1, !0).setID('rte-panel');
                        },
                        E = (function() {
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
                                                            y(ze.STATUS.PENDING)
                                                        ) {
                                                            e.next = 2;
                                                            break;
                                                        }
                                                        return e.abrupt(
                                                            'return',
                                                        );
                                                    case 2:
                                                        if (
                                                            (g(
                                                                ze.STATUS
                                                                    .INITIALIZING,
                                                                !0,
                                                            ),
                                                            (t = Se.list()) &&
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
                                                            Se.list(!0)
                                                        );
                                                    case 7:
                                                        t = e.sent;
                                                    case 8:
                                                        if (!P()) {
                                                            e.next = 10;
                                                            break;
                                                        }
                                                        return e.abrupt(
                                                            'return',
                                                        );
                                                    case 10:
                                                        g(ze.STATUS.READY),
                                                            x({
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
                                                Fe(a, n, o, i, s, 'next', e);
                                            }
                                            function s(e) {
                                                Fe(a, n, o, i, s, 'throw', e);
                                            }
                                            i(void 0);
                                        });
                                    });
                            return function() {
                                return t.apply(this, arguments);
                            };
                        })(),
                        j = i.a.throttle(function(e) {
                            (e = i.a.isEmpty([e]) ? null : e), x({ search: e });
                        }, 100),
                        P = function() {
                            return !u.current;
                        },
                        T = function(e) {
                            !(function(e) {
                                var r = [{ text: e.code }],
                                    n = {
                                        id: c()(),
                                        children: r,
                                        shortcode: e,
                                        type: 'shortcode',
                                    };
                                pe.insertNodes(t, n, { at: w.selection });
                            })(e),
                                k();
                        };
                    return (
                        Object(ge.useAsyncEffect)(E, [m]),
                        o.a.createElement(
                            d,
                            {
                                ref: u,
                                collapsible: !1,
                                dismissable: !1,
                                header: {
                                    elements: [
                                        o.a.createElement(Ie, {
                                            key: 'close-btn',
                                            onClick: k,
                                        }),
                                    ],
                                    title: a,
                                },
                            },
                            o.a.createElement(
                                'div',
                                { className: S() },
                                o.a.createElement(
                                    'div',
                                    { className: S('search') },
                                    o.a.createElement(
                                        'div',
                                        { className: 'form-group' },
                                        o.a.createElement('input', {
                                            'data-focus': !0,
                                            type: 'search',
                                            placeholder: 'search',
                                            className: 'grow',
                                            onFocus: function(e) {
                                                return e.target.select();
                                            },
                                            onChange: function(e) {
                                                return j(e.target.value);
                                            },
                                        }),
                                    ),
                                ),
                                o.a.createElement(
                                    'div',
                                    { className: S('list') },
                                    o.a.createElement(
                                        De.Scrollbars,
                                        null,
                                        o.a.createElement(
                                            'ul',
                                            null,
                                            Object.values(w.shortcodes)
                                                .filter(function(e) {
                                                    var t = w.search;
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
                                                    return o.a.createElement(
                                                        He,
                                                        {
                                                            cx: S,
                                                            key: 'shortcode-'.concat(
                                                                t,
                                                            ),
                                                            onClick: function() {
                                                                return (function(
                                                                    e,
                                                                ) {
                                                                    var t = Se.Component.get(
                                                                        e.type,
                                                                    );
                                                                    if (
                                                                        l.a.get(
                                                                            t,
                                                                            'attributes',
                                                                        )
                                                                    ) {
                                                                        var r = l.a.get(
                                                                            p,
                                                                            'Modal',
                                                                        );
                                                                        r.show(
                                                                            o.a.createElement(
                                                                                Te,
                                                                                {
                                                                                    shortcode: e,
                                                                                    insert: T,
                                                                                    Modal: r,
                                                                                },
                                                                            ),
                                                                        );
                                                                    } else T(e);
                                                                })(e);
                                                            },
                                                            shortcode: e,
                                                        },
                                                    );
                                                }),
                                        ),
                                    ),
                                    !y(ze.STATUS.READY) &&
                                        o.a.createElement(
                                            'div',
                                            { className: S('spinner') },
                                            o.a.createElement(h, null),
                                        ),
                                ),
                            ),
                        )
                    );
                },
                He = function(e) {
                    var t = e.cx,
                        r = e.shortcode,
                        n = Me(e, ['cx', 'shortcode']),
                        a = r.code;
                    return o.a.createElement(
                        'li',
                        { className: t('list-item') },
                        o.a.createElement('button', n, a),
                    );
                },
                Ie = function(e) {
                    var t = Object(ge.useHookComponent)('ReactiumUI'),
                        r = t.Button,
                        n = t.Icon;
                    return o.a.createElement(
                        r,
                        Ce(
                            {
                                size: r.ENUMS.SIZE.XS,
                                color: r.ENUMS.COLOR.CLEAR,
                                className: 'ar-dialog-header-btn dismiss',
                            },
                            e,
                        ),
                        o.a.createElement(n, { name: 'Feather.X' }),
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
            (_e.ENUMS = ze),
                (_e.propTypes = {
                    className: d.a.string,
                    namespace: d.a.string,
                    onStatus: d.a.func,
                }),
                (_e.defaultProps = {
                    namespace: 'shortcodes-rte',
                    onStatus: function() {},
                    title: 'Shortcodes',
                });
            var Ue = function(e) {
                    var t = Object(ge.useHookComponent)('ReactiumUI'),
                        r = t.Button,
                        n = t.Icon;
                    return o.a.createElement(
                        r,
                        Le({}, ye.a.RTE.ENUMS.PROPS.BUTTON, e),
                        o.a.createElement(
                            n,
                            Le({}, ye.a.RTE.ENUMS.PROPS.ICON, {
                                name: 'Linear.Puzzle',
                                size: 20,
                            }),
                        ),
                    );
                },
                Ve = function(e) {
                    var t,
                        r = e.shortcode,
                        n = Be(e, ['shortcode']),
                        a = Se.Component.get(r.type);
                    return (
                        l.a.get(a, 'editorComponent') &&
                            (t = Object(ge.useHookComponent)(
                                a.editorComponent,
                            )),
                        t ||
                            (t = function(e) {
                                return o.a.createElement(
                                    'span',
                                    null,
                                    o.a.createElement(
                                        'span',
                                        Le({}, e, { contentEditable: !1 }),
                                    ),
                                );
                            }),
                        o.a.createElement(t, n)
                    );
                },
                We = ye.a.RTE.pluginFactory({ type: 'shortcode', order: 100 });
            We.callback = function(e) {
                var t = function(t) {
                    var r = t.currentTarget.getBoundingClientRect(),
                        n = r.x,
                        a = r.y;
                    (n += r.width),
                        e.panel
                            .setID(We.type)
                            .setContent(
                                o.a.createElement(_e, {
                                    selection: e.selection,
                                    editor: e,
                                }),
                            )
                            .moveTo(n, a)
                            .show();
                };
                ye.a.RTE.Format.register(We.type, { element: Ve }),
                    ye.a.RTE.Button.register(We.type, {
                        order: 62,
                        sidebar: !0,
                        button: function(e) {
                            return o.a.createElement(
                                Ue,
                                Le({}, e, { onClick: t }),
                            );
                        },
                    });
                var r = e.isInline;
                return (
                    (e.isInline = function(e) {
                        return e.type === We.type || r(e);
                    }),
                    e
                );
            };
            var qe = We,
                Ye = r(14),
                Ge = r.n(Ye),
                Ze = function() {},
                Ke = function(e) {
                    var t = e.code,
                        r = e.data,
                        n = e.replacer,
                        a = e.type,
                        i = e.onDelete,
                        s = void 0 === i ? Ze : i,
                        c = e.onItemSelect,
                        u = void 0 === c ? Ze : c,
                        l = Se.parseKey(t),
                        f = Object(ge.useHookComponent)('ReactiumUI'),
                        d = f.Button,
                        h = f.Dropdown,
                        p = f.Icon;
                    return o.a.createElement(
                        o.a.Fragment,
                        null,
                        o.a.createElement('input', {
                            type: 'hidden',
                            name: ''.concat(l, '.key'),
                            value: l,
                        }),
                        o.a.createElement('input', {
                            defaultValue: a.id,
                            type: 'hidden',
                            name: ''.concat(l, '.type'),
                        }),
                        o.a.createElement(
                            'div',
                            { className: 'input-group' },
                            o.a.createElement('input', {
                                className: 'code',
                                defaultValue: t,
                                name: ''.concat(l, '.code'),
                                placeholder: '[shortcode]',
                                readOnly: !0,
                                type: 'text',
                            }),
                            o.a.createElement(
                                h,
                                {
                                    data: r,
                                    valueField: 'id',
                                    selection: [a.id],
                                    onItemSelect: function(e) {
                                        var t = e.item;
                                        return u({ item: t, key: l });
                                    },
                                },
                                o.a.createElement(
                                    d,
                                    {
                                        block: !0,
                                        className: 'type',
                                        color: d.ENUMS.COLOR.CLEAR,
                                        'data-dropdown-element': !0,
                                    },
                                    o.a.createElement(
                                        'span',
                                        { className: 'label' },
                                        a.label,
                                    ),
                                    o.a.createElement(
                                        'span',
                                        { className: 'icon' },
                                        o.a.createElement(p, {
                                            name: 'Feather.ChevronDown',
                                            className: 'icon',
                                        }),
                                    ),
                                ),
                            ),
                            o.a.createElement('input', {
                                className: 'replacer',
                                defaultValue: n,
                                name: ''.concat(l, '.replacer'),
                                placeholder: 'replacement',
                                type: 'text',
                            }),
                            o.a.createElement(
                                d,
                                {
                                    className: 'action',
                                    color: d.ENUMS.COLOR.DANGER,
                                    onClick: s,
                                    'data-code': t,
                                    'data-key': l,
                                    'data-replacer': n,
                                    'data-type': a.id,
                                },
                                o.a.createElement(p, {
                                    name: 'Feather.X',
                                    size: 22,
                                }),
                            ),
                        ),
                    );
                };
            function Je(e, t, r, n, o, a, i) {
                try {
                    var s = e[a](i),
                        c = s.value;
                } catch (e) {
                    return void r(e);
                }
                s.done ? t(c) : Promise.resolve(c).then(n, o);
            }
            function Xe(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise(function(n, o) {
                        var a = e.apply(t, r);
                        function i(e) {
                            Je(a, n, o, i, s, 'next', e);
                        }
                        function s(e) {
                            Je(a, n, o, i, s, 'throw', e);
                        }
                        i(void 0);
                    });
                };
            }
            function $e(e, t) {
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
                        ? $e(Object(r), !0).forEach(function(t) {
                              et(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r),
                          )
                        : $e(Object(r)).forEach(function(t) {
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
                                var i, s = e[Symbol.iterator]();
                                !(n = (i = s.next()).done) &&
                                (r.push(i.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (a = e);
                        } finally {
                            try {
                                n || null == s.return || s.return();
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
                        a = e.namespace,
                        s = e.onStatus,
                        c = e.title,
                        u = nt(e, [
                            'children',
                            'className',
                            'namespace',
                            'onStatus',
                            'title',
                        ]),
                        f = Object(n.useRef)(),
                        d = Object(n.useRef)(),
                        h = tt(Object(ge.useStatus)(ot.STATUS.PENDING), 3),
                        p = h[0],
                        v = h[1],
                        m = h[2],
                        g = Object(ge.useHookComponent)('Helmet'),
                        y = Object(ge.useHookComponent)('ConfirmBox'),
                        b = Object(ge.useHookComponent)('ReactiumUI'),
                        w = b.Button,
                        O = b.Dropdown,
                        x = b.Icon,
                        S = b.EventForm,
                        k = b.Spinner,
                        E = b.Toast,
                        j = Object(ge.useHandle)('AdminTools'),
                        P = tt(
                            Object(ge.useDerivedState)({
                                shortcodes: Se.list(),
                                type: Se.Component.list[0],
                            }),
                            2,
                        ),
                        T = P[0],
                        A = P[1],
                        D = function(e) {
                            M() || A(e);
                        },
                        C = ye.a.Utils.cxFactory(a),
                        F = function(e) {
                            var t = Se.parseKey(e),
                                r = Qe({}, l.a.get(T, 'shortcodes'));
                            return (
                                l.a.del(r, t),
                                D({ shortcodes: r }),
                                Se.delete(e)
                            );
                        },
                        R = (function() {
                            var e = Xe(
                                regeneratorRuntime.mark(function e(t, r, n) {
                                    var o;
                                    return regeneratorRuntime.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (!M()) {
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
                                                        U.dispatchEvent(o),
                                                        !M())
                                                    ) {
                                                        e.next = 7;
                                                        break;
                                                    }
                                                    return e.abrupt('return');
                                                case 7:
                                                    return (
                                                        (e.next = 9),
                                                        ye.a.Hook.run(
                                                            'shortcodes-'.concat(
                                                                t,
                                                            ),
                                                            o,
                                                            U,
                                                        )
                                                    );
                                                case 9:
                                                    if (!M()) {
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
                        N = (function() {
                            var e = Xe(
                                regeneratorRuntime.mark(function e() {
                                    var t;
                                    return regeneratorRuntime.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        v(
                                                            ot.STATUS
                                                                .INITIALIZING,
                                                        ),
                                                        (e.next = 3),
                                                        Se.list(!0)
                                                    );
                                                case 3:
                                                    return (
                                                        (t = e.sent),
                                                        i.a.delay(function() {
                                                            v(ot.STATUS.READY),
                                                                D({
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
                        M = function() {
                            return !f.current;
                        },
                        z = (function() {
                            var e = Xe(
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
                                                            E.show({
                                                                icon:
                                                                    'Feather.Check',
                                                                message: Object(
                                                                    ge.__,
                                                                )(
                                                                    'Shortcodes updated',
                                                                ),
                                                                type:
                                                                    E.TYPE.INFO,
                                                            }),
                                                        v(ot.STATUS.BUSY),
                                                        (t = f.current.getValue()),
                                                        (e.next = 6),
                                                        Se.save(t)
                                                    );
                                                case 6:
                                                    v(ot.STATUS.READY);
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
                        _ = function(e) {
                            e && e.preventDefault(), z();
                        },
                        H = function(e) {
                            e.target.value = Se.parseCode(e.target.value, !0);
                        },
                        I = function(e) {
                            var t = e.currentTarget.dataset.code,
                                r = l.a.get(j, 'Modal');
                            r.show(
                                o.a.createElement(y, {
                                    message: Object(ge.__)(
                                        'Delete %code shortcode?',
                                    ).replace('%code', t),
                                    onCancel: function() {
                                        return r.hide();
                                    },
                                    onConfirm: function() {
                                        return (
                                            (e = t),
                                            E.show({
                                                icon: 'Feather.Check',
                                                message: Object(ge.__)(
                                                    'Shortcode %code deleted',
                                                ).replace('%code', e),
                                                type: E.TYPE.INFO,
                                            }),
                                            r.dismiss(),
                                            void F(t)
                                        );
                                        var e;
                                    },
                                    title: 'Confirm Delete',
                                }),
                            );
                        },
                        B = function(e) {
                            if (Se.isKey(e)) {
                                e.preventDefault(), e.stopPropagation();
                                var t =
                                    189 === e.which
                                        ? '-'
                                        : String.fromCharCode(e.which);
                                e.target.value = Se.parseCode(
                                    e.target.value + t,
                                );
                                var r = e.target.value.length - 1;
                                e.target.setSelectionRange(r, r);
                            }
                        },
                        L = function(e) {
                            var t = e.item,
                                r = e.key,
                                n = Qe({}, l.a.get(T, 'shortcodes'));
                            l.a.set(n, [r, 'type'], t.id), D({ shortcodes: n });
                        },
                        U = tt(
                            Object(ge.useEventHandle)({
                                ENUMS: ot,
                                EventForm: f,
                                children: t,
                                className: r,
                                cx: C,
                                delete: F,
                                dispatch: R,
                                initialize: N,
                                namespace: a,
                                onStatus: s,
                                props: u,
                                save: z,
                                setState: D,
                                setStatus: v,
                                state: T,
                                unMounted: M,
                            }),
                            1,
                        )[0];
                    return (
                        Object(ge.useRegisterHandle)('Shortcodes', function() {
                            return U;
                        }),
                        Object(n.useEffect)(
                            function() {
                                R('status', { status: p }, s);
                            },
                            [p],
                        ),
                        Object(ge.useAsyncEffect)(
                            (function() {
                                var e = Xe(
                                    regeneratorRuntime.mark(function e(t) {
                                        var r;
                                        return regeneratorRuntime.wrap(function(
                                            e,
                                        ) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (
                                                            !m(
                                                                ot.STATUS
                                                                    .PENDING,
                                                            )
                                                        ) {
                                                            e.next = 5;
                                                            break;
                                                        }
                                                        return (
                                                            (e.next = 3), N()
                                                        );
                                                    case 3:
                                                        (r = e.sent),
                                                            t &&
                                                                D({
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
                            [p],
                        ),
                        Object(n.useEffect)(
                            function() {
                                if (f.current)
                                    return (
                                        ye.a.Hotkeys.register('shortkey-save', {
                                            callback: _,
                                            key: 'mod+s',
                                            order: ye.a.Enums.priority.lowest,
                                            scope: document,
                                        }),
                                        function() {
                                            ye.a.Hotkeys.unregister(
                                                'shortkey-save',
                                            );
                                        }
                                    );
                            },
                            [!!f.current],
                        ),
                        o.a.createElement(
                            'div',
                            { className: C() },
                            c &&
                                o.a.createElement(
                                    g,
                                    null,
                                    o.a.createElement('title', null, c),
                                ),
                            o.a.createElement(
                                S,
                                {
                                    className: C('insert'),
                                    ref: d,
                                    onSubmit: function(e) {
                                        return (function(e) {
                                            var t = e.value,
                                                r = t.code,
                                                n = t.replacer,
                                                o = void 0 === n ? '' : n,
                                                a = T.shortcodes,
                                                i = void 0 === a ? {} : a,
                                                s = T.type,
                                                c = Se.parseKey(r);
                                            if (r && c) {
                                                var u = document.getElementById(
                                                    'shortcode-code',
                                                );
                                                if (l.a.get(i, c)) {
                                                    var f = {
                                                        message: ''.concat(
                                                            r,
                                                            ' already in use',
                                                        ),
                                                    };
                                                    return (
                                                        E.show({
                                                            icon:
                                                                'Feather.AlertOctagon',
                                                            message: Object(
                                                                ge.__,
                                                            )(f.message),
                                                            type: E.TYPE.ERROR,
                                                        }),
                                                        u && u.focus(),
                                                        void D({ error: f })
                                                    );
                                                }
                                                var h = Qe(
                                                    Qe({}, i),
                                                    {},
                                                    et({}, c, {
                                                        code: r,
                                                        replacer: o,
                                                        key: c,
                                                        type: s.id,
                                                    }),
                                                );
                                                d.current.setValue(null),
                                                    u && u.focus(),
                                                    D({
                                                        error: null,
                                                        shortcodes: h,
                                                    }),
                                                    z();
                                            }
                                        })(e);
                                    },
                                },
                                o.a.createElement(
                                    'div',
                                    {
                                        className: Ge()('input-group', {
                                            error: !!T.error,
                                        }),
                                    },
                                    o.a.createElement('input', {
                                        className: 'code',
                                        id: 'shortcode-code',
                                        name: 'code',
                                        onBlur: H,
                                        onKeyDown: B,
                                        placeholder: '[shortcode]',
                                        type: 'text',
                                    }),
                                    o.a.createElement(
                                        O,
                                        {
                                            data: Se.Component.list,
                                            onItemSelect: function(e) {
                                                var t = e.item;
                                                return D({ type: t });
                                            },
                                            valueField: 'id',
                                            selection: [T.type.id],
                                        },
                                        o.a.createElement(
                                            w,
                                            {
                                                block: !0,
                                                className: 'type',
                                                color: w.ENUMS.COLOR.CLEAR,
                                                'data-dropdown-element': !0,
                                            },
                                            o.a.createElement(
                                                'span',
                                                { className: 'label' },
                                                T.type.label,
                                            ),
                                            o.a.createElement(
                                                'span',
                                                { className: 'icon' },
                                                o.a.createElement(x, {
                                                    name: 'Feather.ChevronDown',
                                                    className: 'icon',
                                                }),
                                            ),
                                        ),
                                    ),
                                    o.a.createElement('input', {
                                        className: 'replacer',
                                        id: 'shortcode-replacer',
                                        name: 'replacer',
                                        placeholder: 'replacement',
                                        type: 'text',
                                    }),
                                    o.a.createElement(
                                        w,
                                        {
                                            className: 'action',
                                            color: w.ENUMS.COLOR.PRIMARY,
                                            type: w.ENUMS.TYPE.SUBMIT,
                                        },
                                        o.a.createElement(x, {
                                            name: 'Feather.Plus',
                                            size: 24,
                                        }),
                                    ),
                                ),
                            ),
                            o.a.createElement(
                                S,
                                {
                                    className: C('list-form'),
                                    ref: f,
                                    value: T.shortcodes,
                                },
                                o.a.createElement(
                                    De.Scrollbars,
                                    null,
                                    o.a.createElement(
                                        'div',
                                        { className: C('list') },
                                        Object.entries(T.shortcodes)
                                            .reverse()
                                            .map(function(e) {
                                                var t,
                                                    r = tt(e, 2),
                                                    n = r[0],
                                                    a = r[1];
                                                return o.a.createElement(Ke, {
                                                    key: 'code'.concat(n),
                                                    code: a.code,
                                                    data: Se.Component.list,
                                                    replacer: a.replacer,
                                                    type:
                                                        ((t =
                                                            a.type ||
                                                            'ShortcodeText'),
                                                        Se.Component.get(t)),
                                                    onBlur: H,
                                                    onDelete: I,
                                                    onKeyDown: B,
                                                    onItemSelect: L,
                                                });
                                            }),
                                    ),
                                ),
                            ),
                            m(ot.STATUS.INITIALIZING) &&
                                o.a.createElement(k, {
                                    className: C('spinner'),
                                }),
                        )
                    );
                };
            (at.ENUMS = ot),
                (at.propTypes = {
                    className: d.a.string,
                    namespace: d.a.string,
                    onStatus: d.a.func,
                    title: d.a.string,
                }),
                (at.defaultProps = {
                    namespace: 'shortcodes',
                    onStatus: function() {},
                    title: 'Shortcodes',
                });
            var it = function() {
                    var e = Object(ge.useHandle)('Shortcodes'),
                        t = Object(ge.useHookComponent)('ReactiumUI'),
                        r = t.Button,
                        n = t.Icon,
                        a = Object(ge.useSelect)(function(e) {
                            return l.a.get(e, 'Router.match.path');
                        });
                    return String(a).startsWith('/admin/shortcodes')
                        ? o.a.createElement(
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
                              o.a.createElement(n, {
                                  name: 'Feather.Check',
                                  size: 18,
                              }),
                              o.a.createElement(
                                  'span',
                                  { className: 'hide-xs show-md ml-xs-12' },
                                  Object(ge.__)('Save Shortcodes'),
                              ),
                          )
                        : null;
                },
                st = function() {
                    var e = Object(ge.useSelect)(function(e) {
                            return l.a.get(e, 'Router.match.path');
                        }),
                        t = String(e).startsWith('/admin/shortcodes'),
                        r = Object(ge.useHookComponent)('ReactiumUI'),
                        n = r.Button,
                        a = r.Icon;
                    return t
                        ? o.a.createElement(
                              'ul',
                              { className: 'ar-breadcrumbs' },
                              o.a.createElement(
                                  'li',
                                  null,
                                  o.a.createElement(
                                      n,
                                      {
                                          className: 'px-0',
                                          color: n.ENUMS.COLOR.CLEAR,
                                          size: n.ENUMS.SIZE.SM,
                                          type: n.ENUMS.TYPE.BUTTON,
                                      },
                                      o.a.createElement(a, {
                                          name: 'Linear.Puzzle',
                                          className: 'mr-xs-12',
                                      }),
                                      Object(ge.__)('Shortcodes'),
                                  ),
                              ),
                          )
                        : null;
                },
                ct = function() {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                    return String(l.a.get(e, 'url', '/'))
                        .replace(/\\/gi, '')
                        .toLowerCase()
                        .startsWith('/admin/shortcodes');
                },
                ut = function() {
                    var e = Object(ge.useHookComponent)('MenuItem');
                    return o.a.createElement(e, {
                        label: Object(ge.__)('Shortcodes'),
                        route: '/admin/shortcodes',
                        icon: 'Linear.Puzzle',
                        isActive: ct,
                    });
                };
            function lt() {
                return (lt =
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
            ye.a.Plugin.register('shortcodes', 1).then(function() {
                ye.a.RTE.Plugin.register('shortcode', qe),
                    ye.a.Component.register('ShortcodeTextEditor', function(e) {
                        return o.a.createElement(
                            'span',
                            null,
                            o.a.createElement(
                                'span',
                                lt({}, e, {
                                    className: 'rte-shortcode strong',
                                    contentEditable: !1,
                                }),
                            ),
                        );
                    }),
                    Se.Component.register('ShortcodeText', {
                        component: 'ShortcodeText',
                        editorComponent: 'ShortcodeTextEditor',
                        label: 'Text',
                        order: -1,
                        attributes: void 0,
                        validate: void 0,
                    }),
                    Se.Component.register('ShortcodeTest', {
                        component: 'ShortcodeTest',
                        label: 'Test',
                        attributes: {
                            name: { type: 'text' },
                            phone: {
                                type: 'phone',
                                label: 'Phone Number:',
                                placeholder: '(555) 555-5555',
                            },
                            count: { type: 'number', min: 1, max: 5 },
                            description: { type: 'textarea' },
                        },
                    }),
                    ye.a.Zone.addComponent({
                        id: 'SHORTCODES-BREADCRUMBS',
                        zone: ['admin-header'],
                        component: st,
                        order: 0,
                    }),
                    ye.a.Zone.addComponent({
                        id: 'SHORTCODES-SAVE-WIDGET',
                        zone: ['admin-logo'],
                        component: it,
                        order: 100,
                    }),
                    ye.a.Zone.addComponent({
                        id: 'SHORTCODES-SIDEBAR-WIDGET',
                        zone: ['admin-sidebar-menu'],
                        component: ut,
                        order: 401,
                    }),
                    ye.a.Zone.addComponent({
                        id: 'SHORTCODES-EDITOR',
                        zone: ['admin-shortcodes'],
                        component: at,
                        order: 0,
                    }),
                    ye.a.Capability.Settings.register('shortcodes-manage', {
                        zone: 'app-settings',
                        capability: 'shortcodes.create',
                        title: Object(ge.__)(
                            'Shortcodes: Create/Update/Delete',
                        ),
                        tooltip: Object(ge.__)(
                            'Able to view and manage Admin Shortcodes page when logged in.',
                        ),
                    });
            });
        },
    ]);
});
