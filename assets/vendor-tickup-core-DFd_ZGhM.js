import { r as reactExports, j as jsxRuntimeExports, i, u, a as reactDomExports } from './vendor-react-D0COmpux.js';

const scriptRel = 'modulepreload';const assetsURL = function(dep) { return "/tickup-charts/"+dep };const seen = {};const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (true && deps && deps.length > 0) {
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = Promise.allSettled(
      deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};

var define_process_env_default = {};
/*! TickUp Charts | MIT License | Copyright (c) 2026 Bar Damri */
var A = Object.defineProperty, e = (e2, t2, n2) => ((e3, t3, n3) => t3 in e3 ? A(e3, t3, { enumerable: true, configurable: true, writable: true, value: n3 }) : e3[t3] = n3)(e2, "symbol" != typeof t2 ? t2 + "" : t2, n2);
var v = ((A2) => (A2[A2.none = 0] = "none", A2[A2.drawLine = 1] = "drawLine", A2[A2.drawRectangle = 2] = "drawRectangle", A2[A2.drawCircle = 3] = "drawCircle", A2[A2.drawTriangle = 4] = "drawTriangle", A2[A2.drawAngle = 5] = "drawAngle", A2[A2.select = 6] = "select", A2[A2.editShape = 7] = "editShape", A2[A2.drawPolyline = 8] = "drawPolyline", A2[A2.drawArrow = 9] = "drawArrow", A2[A2.drawCustomSymbol = 10] = "drawCustomSymbol", A2[A2.drawText = 11] = "drawText", A2))(v || {});
const h = reactExports.createContext(void 0), m = ({ children: A2 }) => {
  const [e2, n2] = reactExports.useState(0);
  return jsxRuntimeExports.jsx(h.Provider, { value: { mode: e2, setMode: (A3) => {
    n2((e3) => e3 === A3 ? 0 : A3);
  } }, children: A2 });
}, p = () => {
  const A2 = reactExports.useContext(h);
  if (!A2) throw new Error("useMode must be used within a ModeProvider");
  return A2;
};
var b = function() {
  return b = Object.assign || function(A2) {
    for (var e2, t2 = 1, n2 = arguments.length; t2 < n2; t2++) for (var r2 in e2 = arguments[t2]) Object.prototype.hasOwnProperty.call(e2, r2) && (A2[r2] = e2[r2]);
    return A2;
  }, b.apply(this, arguments);
};
function w(A2, e2, t2) {
  if (t2 || 2 === arguments.length) for (var n2, r2 = 0, i2 = e2.length; r2 < i2; r2++) !n2 && r2 in e2 || (n2 || (n2 = Array.prototype.slice.call(e2, 0, r2)), n2[r2] = e2[r2]);
  return A2.concat(n2 || Array.prototype.slice.call(e2));
}
"function" == typeof SuppressedError && SuppressedError;
var x = "-ms-", z = "-moz-", X = "-webkit-", M = "comm", O = "rule", q = "decl", H = "@keyframes", W = Math.abs, D = String.fromCharCode, F = Object.assign;
function j(A2) {
  return A2.trim();
}
function T(A2, e2) {
  return (A2 = e2.exec(A2)) ? A2[0] : A2;
}
function N(A2, e2, t2) {
  return A2.replace(e2, t2);
}
function K(A2, e2, t2) {
  return A2.indexOf(e2, t2);
}
function Y(A2, e2) {
  return 0 | A2.charCodeAt(e2);
}
function G(A2, e2, t2) {
  return A2.slice(e2, t2);
}
function k(A2) {
  return A2.length;
}
function U(A2) {
  return A2.length;
}
function Z(A2, e2) {
  return e2.push(A2), A2;
}
function L(A2, e2) {
  return A2.filter(function(A3) {
    return !T(A3, e2);
  });
}
var R = 1, S = 1, J = 0, $ = 0, _ = 0, AA = "";
function eA(A2, e2, t2, n2, r2, i2, a2, B2) {
  return { value: A2, root: e2, parent: t2, type: n2, props: r2, children: i2, line: R, column: S, length: a2, return: "", siblings: B2 };
}
function tA(A2, e2) {
  return F(eA("", null, null, "", null, null, 0, A2.siblings), A2, { length: -A2.length }, e2);
}
function nA(A2) {
  for (; A2.root; ) A2 = tA(A2.root, { children: [A2] });
  Z(A2, A2.siblings);
}
function rA() {
  return _ = $ > 0 ? Y(AA, --$) : 0, S--, 10 === _ && (S = 1, R--), _;
}
function iA() {
  return _ = $ < J ? Y(AA, $++) : 0, S++, 10 === _ && (S = 1, R++), _;
}
function aA() {
  return Y(AA, $);
}
function BA() {
  return $;
}
function QA(A2, e2) {
  return G(AA, A2, e2);
}
function oA(A2) {
  switch (A2) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function gA(A2) {
  return j(QA($ - 1, lA(91 === A2 ? A2 + 2 : 40 === A2 ? A2 + 1 : A2)));
}
function EA(A2) {
  for (; (_ = aA()) && _ < 33; ) iA();
  return oA(A2) > 2 || oA(_) > 3 ? "" : " ";
}
function sA(A2, e2) {
  for (; --e2 && iA() && !(_ < 48 || _ > 102 || _ > 57 && _ < 65 || _ > 70 && _ < 97); ) ;
  return QA(A2, BA() + (e2 < 6 && 32 == aA() && 32 == iA()));
}
function lA(A2) {
  for (; iA(); ) switch (_) {
    case A2:
      return $;
    case 34:
    case 39:
      34 !== A2 && 39 !== A2 && lA(_);
      break;
    case 40:
      41 === A2 && lA(A2);
      break;
    case 92:
      iA();
  }
  return $;
}
function dA(A2, e2) {
  for (; iA() && A2 + _ !== 57 && (A2 + _ !== 84 || 47 !== aA()); ) ;
  return "/*" + QA(e2, $ - 1) + "*" + D(47 === A2 ? A2 : iA());
}
function CA(A2) {
  for (; !oA(aA()); ) iA();
  return QA(A2, $);
}
function cA(A2) {
  return function(A3) {
    return AA = "", A3;
  }(IA("", null, null, null, [""], A2 = function(A3) {
    return R = S = 1, J = k(AA = A3), $ = 0, [];
  }(A2), 0, [0], A2));
}
function IA(A2, e2, t2, n2, r2, i2, a2, B2, Q2) {
  for (var o2 = 0, g2 = 0, E2 = a2, s2 = 0, l2 = 0, d2 = 0, C2 = 1, c2 = 1, I2 = 1, u2 = 0, f2 = "", v2 = r2, h2 = i2, m2 = n2, p2 = f2; c2; ) switch (d2 = u2, u2 = iA()) {
    case 40:
      if (108 != d2 && 58 == Y(p2, E2 - 1)) {
        -1 != K(p2 += N(gA(u2), "&", "&\f"), "&\f", W(o2 ? B2[o2 - 1] : 0)) && (I2 = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      p2 += gA(u2);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      p2 += EA(d2);
      break;
    case 92:
      p2 += sA(BA() - 1, 7);
      continue;
    case 47:
      switch (aA()) {
        case 42:
        case 47:
          Z(fA(dA(iA(), BA()), e2, t2, Q2), Q2);
          break;
        default:
          p2 += "/";
      }
      break;
    case 123 * C2:
      B2[o2++] = k(p2) * I2;
    case 125 * C2:
    case 59:
    case 0:
      switch (u2) {
        case 0:
        case 125:
          c2 = 0;
        case 59 + g2:
          -1 == I2 && (p2 = N(p2, /\f/g, "")), l2 > 0 && k(p2) - E2 && Z(l2 > 32 ? vA(p2 + ";", n2, t2, E2 - 1, Q2) : vA(N(p2, " ", "") + ";", n2, t2, E2 - 2, Q2), Q2);
          break;
        case 59:
          p2 += ";";
        default:
          if (Z(m2 = uA(p2, e2, t2, o2, g2, r2, B2, f2, v2 = [], h2 = [], E2, i2), i2), 123 === u2) if (0 === g2) IA(p2, e2, m2, m2, v2, i2, E2, B2, h2);
          else switch (99 === s2 && 110 === Y(p2, 3) ? 100 : s2) {
            case 100:
            case 108:
            case 109:
            case 115:
              IA(A2, m2, m2, n2 && Z(uA(A2, m2, m2, 0, 0, r2, B2, f2, r2, v2 = [], E2, h2), h2), r2, h2, E2, B2, n2 ? v2 : h2);
              break;
            default:
              IA(p2, m2, m2, m2, [""], h2, 0, B2, h2);
          }
      }
      o2 = g2 = l2 = 0, C2 = I2 = 1, f2 = p2 = "", E2 = a2;
      break;
    case 58:
      E2 = 1 + k(p2), l2 = d2;
    default:
      if (C2 < 1) {
        if (123 == u2) --C2;
        else if (125 == u2 && 0 == C2++ && 125 == rA()) continue;
      }
      switch (p2 += D(u2), u2 * C2) {
        case 38:
          I2 = g2 > 0 ? 1 : (p2 += "\f", -1);
          break;
        case 44:
          B2[o2++] = (k(p2) - 1) * I2, I2 = 1;
          break;
        case 64:
          45 === aA() && (p2 += gA(iA())), s2 = aA(), g2 = E2 = k(f2 = p2 += CA(BA())), u2++;
          break;
        case 45:
          45 === d2 && 2 == k(p2) && (C2 = 0);
      }
  }
  return i2;
}
function uA(A2, e2, t2, n2, r2, i2, a2, B2, Q2, o2, g2, E2) {
  for (var s2 = r2 - 1, l2 = 0 === r2 ? i2 : [""], d2 = U(l2), C2 = 0, c2 = 0, I2 = 0; C2 < n2; ++C2) for (var u2 = 0, f2 = G(A2, s2 + 1, s2 = W(c2 = a2[C2])), v2 = A2; u2 < d2; ++u2) (v2 = j(c2 > 0 ? l2[u2] + " " + f2 : N(f2, /&\f/g, l2[u2]))) && (Q2[I2++] = v2);
  return eA(A2, e2, t2, 0 === r2 ? O : B2, Q2, o2, g2, E2);
}
function fA(A2, e2, t2, n2) {
  return eA(A2, e2, t2, M, D(_), G(A2, 2, -2), 0, n2);
}
function vA(A2, e2, t2, n2, r2) {
  return eA(A2, e2, t2, q, G(A2, 0, n2), G(A2, n2 + 1, -1), n2, r2);
}
function hA(A2, e2, t2) {
  switch (function(A3, e3) {
    return 45 ^ Y(A3, 0) ? (((e3 << 2 ^ Y(A3, 0)) << 2 ^ Y(A3, 1)) << 2 ^ Y(A3, 2)) << 2 ^ Y(A3, 3) : 0;
  }(A2, e2)) {
    case 5103:
      return X + "print-" + A2 + A2;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return X + A2 + A2;
    case 4789:
      return z + A2 + A2;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return X + A2 + z + A2 + x + A2 + A2;
    case 5936:
      switch (Y(A2, e2 + 11)) {
        case 114:
          return X + A2 + x + N(A2, /[svh]\w+-[tblr]{2}/, "tb") + A2;
        case 108:
          return X + A2 + x + N(A2, /[svh]\w+-[tblr]{2}/, "tb-rl") + A2;
        case 45:
          return X + A2 + x + N(A2, /[svh]\w+-[tblr]{2}/, "lr") + A2;
      }
    case 6828:
    case 4268:
    case 2903:
      return X + A2 + x + A2 + A2;
    case 6165:
      return X + A2 + x + "flex-" + A2 + A2;
    case 5187:
      return X + A2 + N(A2, /(\w+).+(:[^]+)/, X + "box-$1$2" + x + "flex-$1$2") + A2;
    case 5443:
      return X + A2 + x + "flex-item-" + N(A2, /flex-|-self/g, "") + (T(A2, /flex-|baseline/) ? "" : x + "grid-row-" + N(A2, /flex-|-self/g, "")) + A2;
    case 4675:
      return X + A2 + x + "flex-line-pack" + N(A2, /align-content|flex-|-self/g, "") + A2;
    case 5548:
      return X + A2 + x + N(A2, "shrink", "negative") + A2;
    case 5292:
      return X + A2 + x + N(A2, "basis", "preferred-size") + A2;
    case 6060:
      return X + "box-" + N(A2, "-grow", "") + X + A2 + x + N(A2, "grow", "positive") + A2;
    case 4554:
      return X + N(A2, /([^-])(transform)/g, "$1" + X + "$2") + A2;
    case 6187:
      return N(N(N(A2, /(zoom-|grab)/, X + "$1"), /(image-set)/, X + "$1"), A2, "") + A2;
    case 5495:
    case 3959:
      return N(A2, /(image-set\([^]*)/, X + "$1$`$1");
    case 4968:
      return N(N(A2, /(.+:)(flex-)?(.*)/, X + "box-pack:$3" + x + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + X + A2 + A2;
    case 4200:
      if (!T(A2, /flex-|baseline/)) return x + "grid-column-align" + G(A2, e2) + A2;
      break;
    case 2592:
    case 3360:
      return x + N(A2, "template-", "") + A2;
    case 4384:
    case 3616:
      return t2 && t2.some(function(A3, t3) {
        return e2 = t3, T(A3.props, /grid-\w+-end/);
      }) ? ~K(A2 + (t2 = t2[e2].value), "span", 0) ? A2 : x + N(A2, "-start", "") + A2 + x + "grid-row-span:" + (~K(t2, "span", 0) ? T(t2, /\d+/) : +T(t2, /\d+/) - +T(A2, /\d+/)) + ";" : x + N(A2, "-start", "") + A2;
    case 4896:
    case 4128:
      return t2 && t2.some(function(A3) {
        return T(A3.props, /grid-\w+-start/);
      }) ? A2 : x + N(N(A2, "-end", "-span"), "span ", "") + A2;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return N(A2, /(.+)-inline(.+)/, X + "$1$2") + A2;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (k(A2) - 1 - e2 > 6) switch (Y(A2, e2 + 1)) {
        case 109:
          if (45 !== Y(A2, e2 + 4)) break;
        case 102:
          return N(A2, /(.+:)(.+)-([^]+)/, "$1" + X + "$2-$3$1" + z + (108 == Y(A2, e2 + 3) ? "$3" : "$2-$3")) + A2;
        case 115:
          return ~K(A2, "stretch", 0) ? hA(N(A2, "stretch", "fill-available"), e2, t2) + A2 : A2;
      }
      break;
    case 5152:
    case 5920:
      return N(A2, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e3, t3, n2, r2, i2, a2, B2) {
        return x + t3 + ":" + n2 + B2 + (r2 ? x + t3 + "-span:" + (i2 ? a2 : +a2 - +n2) + B2 : "") + A2;
      });
    case 4949:
      if (121 === Y(A2, e2 + 6)) return N(A2, ":", ":" + X) + A2;
      break;
    case 6444:
      switch (Y(A2, 45 === Y(A2, 14) ? 18 : 11)) {
        case 120:
          return N(A2, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + X + (45 === Y(A2, 14) ? "inline-" : "") + "box$3$1" + X + "$2$3$1" + x + "$2box$3") + A2;
        case 100:
          return N(A2, ":", ":" + x) + A2;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return N(A2, "scroll-", "scroll-snap-") + A2;
  }
  return A2;
}
function mA(A2, e2) {
  for (var t2 = "", n2 = 0; n2 < A2.length; n2++) t2 += e2(A2[n2], n2, A2, e2) || "";
  return t2;
}
function pA(A2, e2, t2, n2) {
  switch (A2.type) {
    case "@layer":
      if (A2.children.length) break;
    case "@import":
    case q:
      return A2.return = A2.return || A2.value;
    case M:
      return "";
    case H:
      return A2.return = A2.value + "{" + mA(A2.children, n2) + "}";
    case O:
      if (!k(A2.value = A2.props.join(","))) return "";
  }
  return k(t2 = mA(A2.children, n2)) ? A2.return = A2.value + "{" + t2 + "}" : "";
}
function bA(A2, e2, t2, n2) {
  if (A2.length > -1 && !A2.return) switch (A2.type) {
    case q:
      return void (A2.return = hA(A2.value, A2.length, t2));
    case H:
      return mA([tA(A2, { value: N(A2.value, "@", "@" + X) })], n2);
    case O:
      if (A2.length) return function(A3, e3) {
        return A3.map(e3).join("");
      }(t2 = A2.props, function(e3) {
        switch (T(e3, n2 = /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            nA(tA(A2, { props: [N(e3, /:(read-\w+)/, ":-moz-$1")] })), nA(tA(A2, { props: [e3] })), F(A2, { props: L(t2, n2) });
            break;
          case "::placeholder":
            nA(tA(A2, { props: [N(e3, /:(plac\w+)/, ":" + X + "input-$1")] })), nA(tA(A2, { props: [N(e3, /:(plac\w+)/, ":-moz-$1")] })), nA(tA(A2, { props: [N(e3, /:(plac\w+)/, x + "input-$1")] })), nA(tA(A2, { props: [e3] })), F(A2, { props: L(t2, n2) });
        }
        return "";
      });
  }
}
var wA = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, yA = "undefined" != typeof process && void 0 !== define_process_env_default && (define_process_env_default.REACT_APP_SC_ATTR || define_process_env_default.SC_ATTR) || "data-styled", PA = "active", VA = "data-styled-version", xA = "6.1.19", zA = "/*!sc*/\n", XA = "undefined" != typeof window && "undefined" != typeof document, MA = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== define_process_env_default && void 0 !== define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY && "" !== define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY && define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== define_process_env_default && void 0 !== define_process_env_default.SC_DISABLE_SPEEDY && "" !== define_process_env_default.SC_DISABLE_SPEEDY ? "false" !== define_process_env_default.SC_DISABLE_SPEEDY && define_process_env_default.SC_DISABLE_SPEEDY : false), OA = {}, DA = Object.freeze([]), FA = Object.freeze({});
function jA(A2, e2, t2) {
  return void 0 === t2 && (t2 = FA), A2.theme !== t2.theme && A2.theme || e2 || t2.theme;
}
var TA = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), NA = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, KA = /(^-|-$)/g;
function YA(A2) {
  return A2.replace(NA, "-").replace(KA, "");
}
var GA = /(a)(d)/gi, kA = function(A2) {
  return String.fromCharCode(A2 + (A2 > 25 ? 39 : 97));
};
function UA(A2) {
  var e2, t2 = "";
  for (e2 = Math.abs(A2); e2 > 52; e2 = e2 / 52 | 0) t2 = kA(e2 % 52) + t2;
  return (kA(e2 % 52) + t2).replace(GA, "$1-$2");
}
var ZA, LA = function(A2, e2) {
  for (var t2 = e2.length; t2; ) A2 = 33 * A2 ^ e2.charCodeAt(--t2);
  return A2;
}, RA = function(A2) {
  return LA(5381, A2);
};
function SA(A2) {
  return UA(RA(A2) >>> 0);
}
function JA(A2) {
  return "string" == typeof A2 && true;
}
var $A = "function" == typeof Symbol && Symbol.for, _A = $A ? Symbol.for("react.memo") : 60115, Ae = $A ? Symbol.for("react.forward_ref") : 60112, ee = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, te = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, ne = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, re = ((ZA = {})[Ae] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, ZA[_A] = ne, ZA);
function ie(A2) {
  return ("type" in (e2 = A2) && e2.type.$$typeof) === _A ? ne : "$$typeof" in A2 ? re[A2.$$typeof] : ee;
  var e2;
}
var ae = Object.defineProperty, Be = Object.getOwnPropertyNames, Qe = Object.getOwnPropertySymbols, oe = Object.getOwnPropertyDescriptor, ge = Object.getPrototypeOf, Ee = Object.prototype;
function se(A2, e2, t2) {
  if ("string" != typeof e2) {
    if (Ee) {
      var n2 = ge(e2);
      n2 && n2 !== Ee && se(A2, n2, t2);
    }
    var r2 = Be(e2);
    Qe && (r2 = r2.concat(Qe(e2)));
    for (var i2 = ie(A2), a2 = ie(e2), B2 = 0; B2 < r2.length; ++B2) {
      var Q2 = r2[B2];
      if (!(Q2 in te || t2 && t2[Q2] || a2 && Q2 in a2 || i2 && Q2 in i2)) {
        var o2 = oe(e2, Q2);
        try {
          ae(A2, Q2, o2);
        } catch (A3) {
        }
      }
    }
  }
  return A2;
}
function le(A2) {
  return "function" == typeof A2;
}
function de(A2) {
  return "object" == typeof A2 && "styledComponentId" in A2;
}
function Ce(A2, e2) {
  return A2 && e2 ? "".concat(A2, " ").concat(e2) : A2 || e2 || "";
}
function ce(A2, e2) {
  if (0 === A2.length) return "";
  for (var t2 = A2[0], n2 = 1; n2 < A2.length; n2++) t2 += A2[n2];
  return t2;
}
function Ie(A2) {
  return null !== A2 && "object" == typeof A2 && A2.constructor.name === Object.name && !("props" in A2 && A2.$$typeof);
}
function ue(A2, e2, t2) {
  if (void 0 === t2 && (t2 = false), !t2 && !Ie(A2) && !Array.isArray(A2)) return e2;
  if (Array.isArray(e2)) for (var n2 = 0; n2 < e2.length; n2++) A2[n2] = ue(A2[n2], e2[n2]);
  else if (Ie(e2)) for (var n2 in e2) A2[n2] = ue(A2[n2], e2[n2]);
  return A2;
}
function fe(A2, e2) {
  Object.defineProperty(A2, "toString", { value: e2 });
}
function me(A2) {
  for (var e2 = [], t2 = 1; t2 < arguments.length; t2++) e2[t2 - 1] = arguments[t2];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(A2, " for more information.").concat(e2.length > 0 ? " Args: ".concat(e2.join(", ")) : "")) ;
}
var pe = function() {
  function A2(A3) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = A3;
  }
  return A2.prototype.indexOfGroup = function(A3) {
    for (var e2 = 0, t2 = 0; t2 < A3; t2++) e2 += this.groupSizes[t2];
    return e2;
  }, A2.prototype.insertRules = function(A3, e2) {
    if (A3 >= this.groupSizes.length) {
      for (var t2 = this.groupSizes, n2 = t2.length, r2 = n2; A3 >= r2; ) if ((r2 <<= 1) < 0) throw me(16, "".concat(A3));
      this.groupSizes = new Uint32Array(r2), this.groupSizes.set(t2), this.length = r2;
      for (var i2 = n2; i2 < r2; i2++) this.groupSizes[i2] = 0;
    }
    for (var a2 = this.indexOfGroup(A3 + 1), B2 = (i2 = 0, e2.length); i2 < B2; i2++) this.tag.insertRule(a2, e2[i2]) && (this.groupSizes[A3]++, a2++);
  }, A2.prototype.clearGroup = function(A3) {
    if (A3 < this.length) {
      var e2 = this.groupSizes[A3], t2 = this.indexOfGroup(A3), n2 = t2 + e2;
      this.groupSizes[A3] = 0;
      for (var r2 = t2; r2 < n2; r2++) this.tag.deleteRule(t2);
    }
  }, A2.prototype.getGroup = function(A3) {
    var e2 = "";
    if (A3 >= this.length || 0 === this.groupSizes[A3]) return e2;
    for (var t2 = this.groupSizes[A3], n2 = this.indexOfGroup(A3), r2 = n2 + t2, i2 = n2; i2 < r2; i2++) e2 += "".concat(this.tag.getRule(i2)).concat(zA);
    return e2;
  }, A2;
}(), we = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), Pe = 1, Ve = function(A2) {
  if (we.has(A2)) return we.get(A2);
  for (; ye.has(Pe); ) Pe++;
  var e2 = Pe++;
  return we.set(A2, e2), ye.set(e2, A2), e2;
}, xe = function(A2, e2) {
  Pe = e2 + 1, we.set(A2, e2), ye.set(e2, A2);
}, ze = "style[".concat(yA, "][").concat(VA, '="').concat(xA, '"]'), Xe = new RegExp("^".concat(yA, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Me = function(A2, e2, t2) {
  for (var n2, r2 = t2.split(","), i2 = 0, a2 = r2.length; i2 < a2; i2++) (n2 = r2[i2]) && A2.registerName(e2, n2);
}, Oe = function(A2, e2) {
  for (var t2, n2 = (null !== (t2 = e2.textContent) && void 0 !== t2 ? t2 : "").split(zA), r2 = [], i2 = 0, a2 = n2.length; i2 < a2; i2++) {
    var B2 = n2[i2].trim();
    if (B2) {
      var Q2 = B2.match(Xe);
      if (Q2) {
        var o2 = 0 | parseInt(Q2[1], 10), g2 = Q2[2];
        0 !== o2 && (xe(g2, o2), Me(A2, g2, Q2[3]), A2.getTag().insertRules(o2, r2)), r2.length = 0;
      } else r2.push(B2);
    }
  }
}, qe = function(A2) {
  for (var e2 = document.querySelectorAll(ze), t2 = 0, n2 = e2.length; t2 < n2; t2++) {
    var r2 = e2[t2];
    r2 && r2.getAttribute(yA) !== PA && (Oe(A2, r2), r2.parentNode && r2.parentNode.removeChild(r2));
  }
}, He = function(A2) {
  var e2, t2, n2 = document.head, r2 = A2 || n2, i2 = document.createElement("style"), a2 = (e2 = r2, (t2 = Array.from(e2.querySelectorAll("style[".concat(yA, "]"))))[t2.length - 1]), B2 = void 0 !== a2 ? a2.nextSibling : null;
  i2.setAttribute(yA, PA), i2.setAttribute(VA, xA);
  var Q2 = "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
  return Q2 && i2.setAttribute("nonce", Q2), r2.insertBefore(i2, B2), i2;
}, We = function() {
  function A2(A3) {
    this.element = He(A3), this.element.appendChild(document.createTextNode("")), this.sheet = function(A4) {
      if (A4.sheet) return A4.sheet;
      for (var e2 = document.styleSheets, t2 = 0, n2 = e2.length; t2 < n2; t2++) {
        var r2 = e2[t2];
        if (r2.ownerNode === A4) return r2;
      }
      throw me(17);
    }(this.element), this.length = 0;
  }
  return A2.prototype.insertRule = function(A3, e2) {
    try {
      return this.sheet.insertRule(e2, A3), this.length++, true;
    } catch (A4) {
      return false;
    }
  }, A2.prototype.deleteRule = function(A3) {
    this.sheet.deleteRule(A3), this.length--;
  }, A2.prototype.getRule = function(A3) {
    var e2 = this.sheet.cssRules[A3];
    return e2 && e2.cssText ? e2.cssText : "";
  }, A2;
}(), De = function() {
  function A2(A3) {
    this.element = He(A3), this.nodes = this.element.childNodes, this.length = 0;
  }
  return A2.prototype.insertRule = function(A3, e2) {
    if (A3 <= this.length && A3 >= 0) {
      var t2 = document.createTextNode(e2);
      return this.element.insertBefore(t2, this.nodes[A3] || null), this.length++, true;
    }
    return false;
  }, A2.prototype.deleteRule = function(A3) {
    this.element.removeChild(this.nodes[A3]), this.length--;
  }, A2.prototype.getRule = function(A3) {
    return A3 < this.length ? this.nodes[A3].textContent : "";
  }, A2;
}(), Fe = function() {
  function A2(A3) {
    this.rules = [], this.length = 0;
  }
  return A2.prototype.insertRule = function(A3, e2) {
    return A3 <= this.length && (this.rules.splice(A3, 0, e2), this.length++, true);
  }, A2.prototype.deleteRule = function(A3) {
    this.rules.splice(A3, 1), this.length--;
  }, A2.prototype.getRule = function(A3) {
    return A3 < this.length ? this.rules[A3] : "";
  }, A2;
}(), je = XA, Te = { isServer: !XA, useCSSOMInjection: !MA }, Ne = function() {
  function A2(A3, e2, t2) {
    void 0 === A3 && (A3 = FA), void 0 === e2 && (e2 = {});
    var n2 = this;
    this.options = b(b({}, Te), A3), this.gs = e2, this.names = new Map(t2), this.server = !!A3.isServer, !this.server && XA && je && (je = false, qe(this)), fe(this, function() {
      return function(A4) {
        for (var e3 = A4.getTag(), t3 = e3.length, n3 = "", r2 = function(t4) {
          var r3, i3 = (r3 = t4, ye.get(r3));
          if (void 0 === i3) return "continue";
          var a2 = A4.names.get(i3), B2 = e3.getGroup(t4);
          if (void 0 === a2 || !a2.size || 0 === B2.length) return "continue";
          var Q2 = "".concat(yA, ".g").concat(t4, '[id="').concat(i3, '"]'), o2 = "";
          void 0 !== a2 && a2.forEach(function(A5) {
            A5.length > 0 && (o2 += "".concat(A5, ","));
          }), n3 += "".concat(B2).concat(Q2, '{content:"').concat(o2, '"}').concat(zA);
        }, i2 = 0; i2 < t3; i2++) r2(i2);
        return n3;
      }(n2);
    });
  }
  return A2.registerId = function(A3) {
    return Ve(A3);
  }, A2.prototype.rehydrate = function() {
    !this.server && XA && qe(this);
  }, A2.prototype.reconstructWithOptions = function(e2, t2) {
    return void 0 === t2 && (t2 = true), new A2(b(b({}, this.options), e2), this.gs, t2 && this.names || void 0);
  }, A2.prototype.allocateGSInstance = function(A3) {
    return this.gs[A3] = (this.gs[A3] || 0) + 1;
  }, A2.prototype.getTag = function() {
    return this.tag || (this.tag = (e2 = (A3 = this.options).useCSSOMInjection, t2 = A3.target, n2 = A3.isServer ? new Fe(t2) : e2 ? new We(t2) : new De(t2), new pe(n2)));
    var A3, e2, t2, n2;
  }, A2.prototype.hasNameForId = function(A3, e2) {
    return this.names.has(A3) && this.names.get(A3).has(e2);
  }, A2.prototype.registerName = function(A3, e2) {
    if (Ve(A3), this.names.has(A3)) this.names.get(A3).add(e2);
    else {
      var t2 = /* @__PURE__ */ new Set();
      t2.add(e2), this.names.set(A3, t2);
    }
  }, A2.prototype.insertRules = function(A3, e2, t2) {
    this.registerName(A3, e2), this.getTag().insertRules(Ve(A3), t2);
  }, A2.prototype.clearNames = function(A3) {
    this.names.has(A3) && this.names.get(A3).clear();
  }, A2.prototype.clearRules = function(A3) {
    this.getTag().clearGroup(Ve(A3)), this.clearNames(A3);
  }, A2.prototype.clearTag = function() {
    this.tag = void 0;
  }, A2;
}(), Ke = /&/g, Ye = /^\s*\/\/.*$/gm;
function Ge(A2, e2) {
  return A2.map(function(A3) {
    return "rule" === A3.type && (A3.value = "".concat(e2, " ").concat(A3.value), A3.value = A3.value.replaceAll(",", ",".concat(e2, " ")), A3.props = A3.props.map(function(A4) {
      return "".concat(e2, " ").concat(A4);
    })), Array.isArray(A3.children) && "@keyframes" !== A3.type && (A3.children = Ge(A3.children, e2)), A3;
  });
}
var ke = new Ne(), Ue = function() {
  var A2, e2, t2, n2 = FA, r2 = n2.options, i2 = void 0 === r2 ? FA : r2, a2 = n2.plugins, B2 = void 0 === a2 ? DA : a2, Q2 = function(t3, n3, r3) {
    return r3.startsWith(e2) && r3.endsWith(e2) && r3.replaceAll(e2, "").length > 0 ? ".".concat(A2) : t3;
  }, o2 = B2.slice();
  o2.push(function(A3) {
    A3.type === O && A3.value.includes("&") && (A3.props[0] = A3.props[0].replace(Ke, e2).replace(t2, Q2));
  }), i2.prefix && o2.push(bA), o2.push(pA);
  var g2 = function(n3, r3, a3, B3) {
    void 0 === r3 && (r3 = ""), void 0 === a3 && (a3 = ""), void 0 === B3 && (B3 = "&"), A2 = B3, e2 = r3, t2 = new RegExp("\\".concat(e2, "\\b"), "g");
    var Q3 = n3.replace(Ye, ""), g3 = cA(a3 || r3 ? "".concat(a3, " ").concat(r3, " { ").concat(Q3, " }") : Q3);
    i2.namespace && (g3 = Ge(g3, i2.namespace));
    var E2, s2, l2, d2 = [];
    return mA(g3, (E2 = o2.concat((l2 = function(A3) {
      return d2.push(A3);
    }, function(A3) {
      A3.root || (A3 = A3.return) && l2(A3);
    })), s2 = U(E2), function(A3, e3, t3, n4) {
      for (var r4 = "", i3 = 0; i3 < s2; i3++) r4 += E2[i3](A3, e3, t3, n4) || "";
      return r4;
    })), d2;
  };
  return g2.hash = B2.length ? B2.reduce(function(A3, e3) {
    return e3.name || me(15), LA(A3, e3.name);
  }, 5381).toString() : "", g2;
}(), Ze = i.createContext({ shouldForwardProp: void 0, styleSheet: ke, stylis: Ue });
function Le() {
  return reactExports.useContext(Ze);
}
Ze.Consumer, i.createContext(void 0);
var Re = function() {
  function A2(A3, e2) {
    var t2 = this;
    this.inject = function(A4, e3) {
      void 0 === e3 && (e3 = Ue);
      var n2 = t2.name + e3.hash;
      A4.hasNameForId(t2.id, n2) || A4.insertRules(t2.id, n2, e3(t2.rules, n2, "@keyframes"));
    }, this.name = A3, this.id = "sc-keyframes-".concat(A3), this.rules = e2, fe(this, function() {
      throw me(12, String(t2.name));
    });
  }
  return A2.prototype.getName = function(A3) {
    return void 0 === A3 && (A3 = Ue), this.name + A3.hash;
  }, A2;
}(), Se = function(A2) {
  return A2 >= "A" && A2 <= "Z";
};
function Je(A2) {
  for (var e2 = "", t2 = 0; t2 < A2.length; t2++) {
    var n2 = A2[t2];
    if (1 === t2 && "-" === n2 && "-" === A2[0]) return A2;
    Se(n2) ? e2 += "-" + n2.toLowerCase() : e2 += n2;
  }
  return e2.startsWith("ms-") ? "-" + e2 : e2;
}
var $e = function(A2) {
  return null == A2 || false === A2 || "" === A2;
}, _e = function(A2) {
  var e2, t2, n2 = [];
  for (var r2 in A2) {
    var i2 = A2[r2];
    A2.hasOwnProperty(r2) && !$e(i2) && (Array.isArray(i2) && i2.isCss || le(i2) ? n2.push("".concat(Je(r2), ":"), i2, ";") : Ie(i2) ? n2.push.apply(n2, w(w(["".concat(r2, " {")], _e(i2), false), ["}"], false)) : n2.push("".concat(Je(r2), ": ").concat((e2 = r2, null == (t2 = i2) || "boolean" == typeof t2 || "" === t2 ? "" : "number" != typeof t2 || 0 === t2 || e2 in wA || e2.startsWith("--") ? String(t2).trim() : "".concat(t2, "px")), ";")));
  }
  return n2;
};
function At(A2, e2, t2, n2) {
  if ($e(A2)) return [];
  if (de(A2)) return [".".concat(A2.styledComponentId)];
  if (le(A2)) {
    if (!le(i2 = A2) || i2.prototype && i2.prototype.isReactComponent || !e2) return [A2];
    var r2 = A2(e2);
    return At(r2, e2, t2, n2);
  }
  var i2;
  return A2 instanceof Re ? t2 ? (A2.inject(t2, n2), [A2.getName(n2)]) : [A2] : Ie(A2) ? _e(A2) : Array.isArray(A2) ? Array.prototype.concat.apply(DA, A2.map(function(A3) {
    return At(A3, e2, t2, n2);
  })) : [A2.toString()];
}
function et(A2) {
  for (var e2 = 0; e2 < A2.length; e2 += 1) {
    var t2 = A2[e2];
    if (le(t2) && !de(t2)) return false;
  }
  return true;
}
var tt = RA(xA), nt = function() {
  function A2(A3, e2, t2) {
    this.rules = A3, this.staticRulesId = "", this.isStatic = (void 0 === t2 || t2.isStatic) && et(A3), this.componentId = e2, this.baseHash = LA(tt, e2), this.baseStyle = t2, Ne.registerId(e2);
  }
  return A2.prototype.generateAndInjectStyles = function(A3, e2, t2) {
    var n2 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(A3, e2, t2) : "";
    if (this.isStatic && !t2.hash) if (this.staticRulesId && e2.hasNameForId(this.componentId, this.staticRulesId)) n2 = Ce(n2, this.staticRulesId);
    else {
      var r2 = ce(At(this.rules, A3, e2, t2)), i2 = UA(LA(this.baseHash, r2) >>> 0);
      if (!e2.hasNameForId(this.componentId, i2)) {
        var a2 = t2(r2, ".".concat(i2), void 0, this.componentId);
        e2.insertRules(this.componentId, i2, a2);
      }
      n2 = Ce(n2, i2), this.staticRulesId = i2;
    }
    else {
      for (var B2 = LA(this.baseHash, t2.hash), Q2 = "", o2 = 0; o2 < this.rules.length; o2++) {
        var g2 = this.rules[o2];
        if ("string" == typeof g2) Q2 += g2;
        else if (g2) {
          var E2 = ce(At(g2, A3, e2, t2));
          B2 = LA(B2, E2 + o2), Q2 += E2;
        }
      }
      if (Q2) {
        var s2 = UA(B2 >>> 0);
        e2.hasNameForId(this.componentId, s2) || e2.insertRules(this.componentId, s2, t2(Q2, ".".concat(s2), void 0, this.componentId)), n2 = Ce(n2, s2);
      }
    }
    return n2;
  }, A2;
}(), rt = i.createContext(void 0);
rt.Consumer;
var it = {};
function Bt(A2, e2, t2) {
  var n2, r2 = de(A2), a2 = A2, B2 = !JA(A2), Q2 = e2.attrs, o2 = void 0 === Q2 ? DA : Q2, s2 = e2.componentId, l2 = void 0 === s2 ? function(A3, e3) {
    var t3 = "string" != typeof A3 ? "sc" : YA(A3);
    it[t3] = (it[t3] || 0) + 1;
    var n3 = "".concat(t3, "-").concat(SA(xA + t3 + it[t3]));
    return e3 ? "".concat(e3, "-").concat(n3) : n3;
  }(e2.displayName, e2.parentComponentId) : s2, d2 = e2.displayName, C2 = void 0 === d2 ? JA(n2 = A2) ? "styled.".concat(n2) : "Styled(".concat(function(A3) {
    return A3.displayName || A3.name || "Component";
  }(n2), ")") : d2, c2 = e2.displayName && e2.componentId ? "".concat(YA(e2.displayName), "-").concat(e2.componentId) : e2.componentId || l2, I2 = r2 && a2.attrs ? a2.attrs.concat(o2).filter(Boolean) : o2, u2 = e2.shouldForwardProp;
  if (r2 && a2.shouldForwardProp) {
    var f2 = a2.shouldForwardProp;
    if (e2.shouldForwardProp) {
      var v2 = e2.shouldForwardProp;
      u2 = function(A3, e3) {
        return f2(A3, e3) && v2(A3, e3);
      };
    } else u2 = f2;
  }
  var h2 = new nt(t2, c2, r2 ? a2.componentStyle : void 0);
  function m2(A3, e3) {
    return function(A4, e4, t3) {
      var n3 = A4.attrs, r3 = A4.componentStyle, a3 = A4.defaultProps, B3 = A4.foldedComponentIds, Q3 = A4.styledComponentId, o3 = A4.target, s3 = i.useContext(rt), l3 = Le(), d3 = A4.shouldForwardProp || l3.shouldForwardProp;
      var C3 = jA(e4, s3, a3) || FA, c3 = function(A5, e5, t4) {
        for (var n4, r4 = b(b({}, e5), { className: void 0, theme: t4 }), i2 = 0; i2 < A5.length; i2 += 1) {
          var a4 = le(n4 = A5[i2]) ? n4(r4) : n4;
          for (var B4 in a4) r4[B4] = "className" === B4 ? Ce(r4[B4], a4[B4]) : "style" === B4 ? b(b({}, r4[B4]), a4[B4]) : a4[B4];
        }
        return e5.className && (r4.className = Ce(r4.className, e5.className)), r4;
      }(n3, e4, C3), I3 = c3.as || o3, u3 = {};
      for (var f3 in c3) void 0 === c3[f3] || "$" === f3[0] || "as" === f3 || "theme" === f3 && c3.theme === C3 || ("forwardedAs" === f3 ? u3.as = c3.forwardedAs : d3 && !d3(f3, I3) || (u3[f3] = c3[f3], d3 || true));
      var v3, h3, m3, p3, w2 = (v3 = r3, h3 = c3, m3 = Le(), p3 = v3.generateAndInjectStyles(h3, m3.styleSheet, m3.stylis), p3);
      var y2 = Ce(B3, Q3);
      return w2 && (y2 += " " + w2), c3.className && (y2 += " " + c3.className), u3[JA(I3) && !TA.has(I3) ? "class" : "className"] = y2, t3 && (u3.ref = t3), reactExports.createElement(I3, u3);
    }(p2, A3, e3);
  }
  m2.displayName = C2;
  var p2 = i.forwardRef(m2);
  return p2.attrs = I2, p2.componentStyle = h2, p2.displayName = C2, p2.shouldForwardProp = u2, p2.foldedComponentIds = r2 ? Ce(a2.foldedComponentIds, a2.styledComponentId) : "", p2.styledComponentId = c2, p2.target = r2 ? a2.target : A2, Object.defineProperty(p2, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(A3) {
    this._foldedDefaultProps = r2 ? function(A4) {
      for (var e3 = [], t3 = 1; t3 < arguments.length; t3++) e3[t3 - 1] = arguments[t3];
      for (var n3 = 0, r3 = e3; n3 < r3.length; n3++) ue(A4, r3[n3], true);
      return A4;
    }({}, a2.defaultProps, A3) : A3;
  } }), fe(p2, function() {
    return ".".concat(p2.styledComponentId);
  }), B2 && se(p2, A2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true }), p2;
}
function Qt(A2, e2) {
  for (var t2 = [A2[0]], n2 = 0, r2 = e2.length; n2 < r2; n2 += 1) t2.push(e2[n2], A2[n2 + 1]);
  return t2;
}
var ot = function(A2) {
  return Object.assign(A2, { isCss: true });
};
function gt(A2) {
  for (var e2 = [], t2 = 1; t2 < arguments.length; t2++) e2[t2 - 1] = arguments[t2];
  if (le(A2) || Ie(A2)) return ot(At(Qt(DA, w([A2], e2, true))));
  var n2 = A2;
  return 0 === e2.length && 1 === n2.length && "string" == typeof n2[0] ? At(n2) : ot(At(Qt(n2, e2)));
}
function Et(A2, e2, t2) {
  if (void 0 === t2 && (t2 = FA), !e2) throw me(1, e2);
  var n2 = function(n3) {
    for (var r2 = [], i2 = 1; i2 < arguments.length; i2++) r2[i2 - 1] = arguments[i2];
    return A2(e2, t2, gt.apply(void 0, w([n3], r2, false)));
  };
  return n2.attrs = function(n3) {
    return Et(A2, e2, b(b({}, t2), { attrs: Array.prototype.concat(t2.attrs, n3).filter(Boolean) }));
  }, n2.withConfig = function(n3) {
    return Et(A2, e2, b(b({}, t2), n3));
  }, n2;
}
var st = function(A2) {
  return Et(Bt, A2);
}, lt = st;
TA.forEach(function(A2) {
  lt[A2] = st(A2);
});
var dt = function() {
  function A2(A3, e2) {
    this.rules = A3, this.componentId = e2, this.isStatic = et(A3), Ne.registerId(this.componentId + 1);
  }
  return A2.prototype.createStyles = function(A3, e2, t2, n2) {
    var r2 = n2(ce(At(this.rules, e2, t2, n2)), ""), i2 = this.componentId + A3;
    t2.insertRules(i2, i2, r2);
  }, A2.prototype.removeStyles = function(A3, e2) {
    e2.clearRules(this.componentId + A3);
  }, A2.prototype.renderStyles = function(A3, e2, t2, n2) {
    A3 > 2 && Ne.registerId(this.componentId + A3), this.removeStyles(A3, t2), this.createStyles(A3, e2, t2, n2);
  }, A2;
}();
function Ct(A2) {
  for (var e2 = [], t2 = 1; t2 < arguments.length; t2++) e2[t2 - 1] = arguments[t2];
  var n2 = ce(gt.apply(void 0, w([A2], e2, false))), r2 = SA(n2);
  return new Re(r2, n2);
}
var It = ((A2) => (A2[A2.left = 0] = "left", A2[A2.right = 1] = "right", A2))(It || {}), ut = ((A2) => (A2.left = "left", A2.center = "center", A2.right = "right", A2))(ut || {}), ft = ((A2) => (A2.light = "light", A2.dark = "dark", A2.grey = "grey", A2))(ft || {});
const vt = { TOP_BAR_PX: 40, LEFT_BAR_PX: 40, INITIAL_X_AXIS_HEIGHT: 40, INITIAL_Y_AXIS_WIDTH: 50 }, ht = lt.canvas`
    display: block;
    width: 100% !important;
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: none;
    touch-action: none;
    overscroll-behavior: none;
    font-size: 12px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${({ $zIndex: A2 }) => void 0 !== A2 ? A2 : 0};
    pointer-events: none;

    height: ${({ $heightPrecent: A2 }) => A2 ? `${A2}%` : "100%"} !important;

    top: ${({ $heightPrecent: A2 }) => 100 === A2 ? "0" : "auto"};
`, mt = lt.canvas`
    display: block;
    width: 100% !important;
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: none;
    touch-action: none;
    overscroll-behavior: none;
    font-size: 12px;
    position: absolute;
    z-index: ${({ $zIndex: A2 }) => void 0 !== A2 ? A2 : 0};
    pointer-events: auto;

    top: 0;
    left: 0;
    right: 0;

    height: 100% !important;
    bottom: 0;
`, pt = lt.div`
    position: relative;
    width: 100%;
    height: 100%;
`, bt = lt.div`
    position: relative;
    width: 100%;
    height: 100%;
`, wt = lt.div`
    position: absolute;
    bottom: 5px;
    ${(A2) => A2.$isRTL ? "left" : "right"}: 10px;
    opacity: ${({ $variant: A2 }) => A2 === ft.dark ? 1 : 0.8};
    background-color: ${({ $variant: A2 }) => A2 === ft.dark ? "rgba(28, 30, 38, 0.96)" : "rgba(255, 255, 255, 0.4)"};
    padding: 6px 10px;
    color: ${({ $isPositive: A2, $variant: e2 }) => e2 === ft.dark ? "#e8eaef" : A2 ? "rgba(0,128,0,0.85)" : "rgba(204,0,0,0.85)"};
    border: 1px solid
        ${({ $isPositive: A2, $variant: e2 }) => e2 === ft.dark ? "rgba(255, 255, 255, 0.14)" : A2 ? "rgba(0,128,0,0.8)" : "rgba(204,0,0,0.8)"};
    border-radius: 4px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    z-index: 50;
    white-space: normal;
    word-break: break-word;
    box-shadow: ${({ $variant: A2 }) => A2 === ft.dark ? "0 6px 20px rgba(0, 0, 0, 0.45)" : "0 4px 12px rgba(0, 0, 0, 0.15)"};
    pointer-events: none;
    direction: ${(A2) => A2.$isRTL ? "rtl" : "ltr"};
    backdrop-filter: blur(4px);

    max-width: calc(100% - 20px);
    max-height: min(42vh, 220px);
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    /* Responsive font size */
    font-size: clamp(8px, 2vmin, 12px);
    padding: clamp(2px, 1vmin, 6px) clamp(4px, 1.5vmin, 10px);

    ${({ $compact: A2 }) => A2 && gt`
            gap: 2px;
            font-size: clamp(7px, 1.85vmin, 11px);
            padding: 4px 6px;
        `}
    
    @media (max-width: 400px), (max-height: 300px) {
        opacity: 0.95;
        background-color: ${({ $variant: A2 }) => A2 === ft.dark ? "rgba(28, 30, 38, 0.98)" : "rgba(255, 255, 255, 0.95)"};
    }
`;
var yt = ((A2) => (A2.Auto = "auto", A2.Low = "low", A2.Medium = "medium", A2.High = "high", A2))(yt || {}), Pt = ((A2) => (A2.Candlestick = "Candlestick", A2.Line = "Line", A2.Area = "Area", A2.Bar = "Bar", A2))(Pt || {}), Vt = ((A2) => (A2.standard = "standard", A2.prime = "prime", A2))(Vt || {}), xt = ((A2) => (A2.standard = "standard", A2.scientific = "scientific", A2.compact = "compact", A2))(xt || {}), zt = ((A2) => (A2.symbol = "symbol", A2.narrowSymbol = "narrowSymbol", A2.code = "code", A2.name = "name", A2))(zt || {}), Xt = ((A2) => (A2.prefix = "prefix", A2.suffix = "suffix", A2))(Xt || {}), Mt = ((A2) => (A2.basisPoints = "basisPoints", A2.pnl = "pnl", A2.Yield = "yield", A2.volatility = "volatility", A2))(Mt || {});
const Ot = (A2, e2, t2) => e2 * ((A2 - t2.start) / (t2.end - t2.start)), qt = (A2, e2, t2, n2) => t2 * ((A2 + e2 / 2 - n2.start) / (n2.end - n2.start)), Ht = (A2, e2, t2) => e2 * (1 - (A2 - t2.min) / t2.range), Wt = (A2, e2, t2) => e2 * ((A2 - t2.start) / (t2.end - t2.start)), Dt = (A2, e2, t2) => {
  const n2 = (t2.end - t2.start) / e2;
  return t2.start + A2 * n2;
}, Ft = (A2, e2, t2) => {
  const n2 = t2.range / e2;
  return t2.max - A2 * n2;
};
function jt(A2, e2, t2) {
  return A2 * (1 - t2) + e2 * t2;
}
const Tt = (A2, e2, t2) => {
  if (0 === A2.length) return 0;
  const n2 = (t3) => A2[t3].t + e2 / 2;
  if (t2 <= n2(0)) return A2[0].c;
  const r2 = A2.length - 1;
  if (t2 >= n2(r2)) return A2[r2].c;
  let i2 = 0, a2 = r2 - 1;
  for (; i2 <= a2; ) {
    const e3 = i2 + a2 >> 1, r3 = n2(e3), B2 = n2(e3 + 1);
    if (t2 < r3) a2 = e3 - 1;
    else {
      if (!(t2 >= B2)) {
        const n3 = (t2 - r3) / (B2 - r3);
        return jt(A2[e3].c, A2[e3 + 1].c, n3);
      }
      i2 = e3 + 1;
    }
  }
  return A2[r2].c;
};
var Nt = ((A2) => (A2.solid = "solid", A2.dashed = "dashed", A2.dotted = "dotted", A2))(Nt || {}), Kt = ((A2) => (A2.close = "close", A2.open = "open", A2.high = "high", A2.low = "low", A2))(Kt || {}), Yt = ((A2) => (A2.sma = "sma", A2.ema = "ema", A2.wma = "wma", A2.vwap = "vwap", A2.bbands_mid = "bbands_mid", A2.bbands_upper = "bbands_upper", A2.bbands_lower = "bbands_lower", A2))(Yt || {});
const Gt = { close: () => ({ kind: Kt.close }), open: () => ({ kind: Kt.open }), high: () => ({ kind: Kt.high }), low: () => ({ kind: Kt.low }), sma: (A2, e2 = Kt.close) => ({ kind: Yt.sma, period: A2, price: e2 }), ema: (A2, e2 = Kt.close) => ({ kind: Yt.ema, period: A2, price: e2 }), wma: (A2, e2 = Kt.close) => ({ kind: Yt.wma, period: A2, price: e2 }), vwap: () => ({ kind: Yt.vwap }), bbandsMid: (A2, e2 = Kt.close) => ({ kind: Yt.bbands_mid, period: A2, price: e2 }), bbandsUpper: (A2, e2 = 2, t2 = Kt.close) => ({ kind: Yt.bbands_upper, period: A2, stddev: e2, price: t2 }), bbandsLower: (A2, e2 = 2, t2 = Kt.close) => ({ kind: Yt.bbands_lower, period: A2, stddev: e2, price: t2 }) };
function kt(A2, e2 = Gt.close(), t2) {
  return { ...A2, calc: e2, connectNulls: (null == t2 ? void 0 : t2.connectNulls) ?? true, useCenterX: (null == t2 ? void 0 : t2.useCenterX) ?? true };
}
function Zt(A2, e2) {
  const t2 = Array(A2.length).fill(null);
  if (e2 <= 1) {
    for (let e3 = 0; e3 < A2.length; e3++) t2[e3] = A2[e3] ?? null;
    return t2;
  }
  let n2 = 0;
  const r2 = [];
  for (let i2 = 0; i2 < A2.length; i2++) {
    const a2 = A2[i2];
    if (null == a2 || !Number.isFinite(Number(a2))) {
      n2 = 0, r2.length = 0, t2[i2] = null;
      continue;
    }
    const B2 = Number(a2);
    r2.push(B2), n2 += B2, r2.length > e2 && (n2 -= r2.shift()), t2[i2] = r2.length === e2 ? n2 / e2 : null;
  }
  return t2;
}
function Lt(A2, e2) {
  const t2 = Array(A2.length).fill(null), n2 = [];
  for (let r2 = 0; r2 < A2.length; r2++) {
    const i2 = A2[r2];
    if (null == i2) {
      n2.length = 0, t2[r2] = null;
      continue;
    }
    if (n2.push(i2), n2.length > e2 && n2.shift(), n2.length < e2) {
      t2[r2] = null;
      continue;
    }
    const a2 = n2.reduce((A3, e3) => A3 + e3, 0) / e2, B2 = n2.reduce((A3, e3) => A3 + (e3 - a2) * (e3 - a2), 0) / e2;
    t2[r2] = Math.sqrt(B2);
  }
  return t2;
}
function Rt(A2, e2) {
  const t2 = function(A3) {
    switch (A3 ?? Kt.close) {
      case Kt.open:
        return (A4) => A4.o;
      case Kt.high:
        return (A4) => A4.h;
      case Kt.low:
        return (A4) => A4.l;
      default:
        return (A4) => A4.c;
    }
  }(e2.price);
  switch (e2.kind) {
    case Kt.close:
    case Kt.open:
    case Kt.high:
    case Kt.low:
      return A2.map(t2);
    case Yt.sma:
      return Zt(A2.map(t2), Math.max(1, e2.period ?? 20));
    case Yt.ema:
      return function(A3, e3) {
        const t3 = Array(A3.length).fill(null);
        if (e3 <= 1) {
          for (let e4 = 0; e4 < A3.length; e4++) t3[e4] = A3[e4] ?? null;
          return t3;
        }
        const n2 = 2 / (e3 + 1);
        let r2 = null;
        for (let e4 = 0; e4 < A3.length; e4++) {
          const i2 = A3[e4];
          if (null == i2 || !Number.isFinite(Number(i2))) {
            r2 = null, t3[e4] = null;
            continue;
          }
          const a2 = Number(i2);
          null == r2 ? (r2 = a2, t3[e4] = null) : (r2 = a2 * n2 + r2 * (1 - n2), t3[e4] = r2);
        }
        return t3;
      }(A2.map(t2), Math.max(1, e2.period ?? 20));
    case Yt.wma:
      return function(A3, e3) {
        const t3 = Array(A3.length).fill(null);
        if (e3 <= 1) {
          for (let e4 = 0; e4 < A3.length; e4++) t3[e4] = A3[e4] ?? null;
          return t3;
        }
        const n2 = e3 * (e3 + 1) / 2, r2 = Array(e3).fill(null);
        for (let i2 = 0; i2 < A3.length; i2++) {
          r2.shift();
          const a2 = A3[i2];
          if (r2.push(null == a2 ? null : Number(a2)), r2.some((A4) => null == A4)) {
            t3[i2] = null;
            continue;
          }
          let B2 = 0;
          for (let A4 = 0; A4 < e3; A4++) B2 += (A4 + 1) * r2[A4];
          t3[i2] = B2 / n2;
        }
        return t3;
      }(A2.map(t2), Math.max(1, e2.period ?? 20));
    case Yt.vwap:
      return A2.map(() => null);
    case Yt.bbands_mid: {
      const n2 = Math.max(1, e2.period ?? 20);
      return Zt(A2.map(t2), n2);
    }
    case Yt.bbands_upper: {
      const n2 = Math.max(1, e2.period ?? 20), r2 = Zt(A2.map(t2), n2), i2 = Lt(r2, n2), a2 = e2.stddev ?? 2;
      return r2.map((A3, e3) => null == A3 || null == i2[e3] ? null : A3 + a2 * i2[e3]);
    }
    case Yt.bbands_lower: {
      const n2 = Math.max(1, e2.period ?? 20), r2 = Zt(A2.map(t2), n2), i2 = Lt(r2, n2), a2 = e2.stddev ?? 2;
      return r2.map((A3, e3) => null == A3 || null == i2[e3] ? null : A3 - a2 * i2[e3]);
    }
    default:
      return A2.map(() => null);
  }
}
function St(A2, e2) {
  switch (A2.strokeStyle = (null == e2 ? void 0 : e2.lineColor) ?? "#2a7fff", A2.lineWidth = Math.max(0.5, (null == e2 ? void 0 : e2.lineWidth) ?? 1.5), null == e2 ? void 0 : e2.lineStyle) {
    case Nt.dashed:
      A2.setLineDash([6, 4]), A2.lineCap = "butt";
      break;
    case Nt.dotted:
      A2.setLineDash([2, 3]), A2.lineCap = "round";
      break;
    default:
      A2.setLineDash([]), A2.lineCap = "butt";
  }
}
function Jt(A2, e2, t2) {
  const n2 = Math.max(1, t2.end - t2.start);
  return (A2 - t2.start) / n2 * e2;
}
function $t(A2, e2, t2, n2) {
  var r2;
  if (!n2 || 0 === n2.length) return;
  if (!(null == (r2 = null == e2 ? void 0 : e2.allIntervals) ? void 0 : r2.length)) return;
  const i2 = function(A3, e3) {
    return e3.map((e4) => {
      const t3 = { source: Rt(A3, e4.calc), options: { lineColor: e4.lineColor, lineWidth: e4.lineWidth, lineStyle: e4.lineStyle }, connectNulls: e4.connectNulls ?? true, useCenterX: e4.useCenterX ?? true }, n3 = e4.id;
      return "string" == typeof n3 && (t3.id = n3), t3;
    });
  }(e2.allIntervals, n2);
  return function(A3, e3, t3, n3) {
    const { allIntervals: r3, visibleStartIndex: i3, visibleEndIndex: a2, visibleRange: B2, intervalSeconds: Q2, canvasWidth: o2, canvasHeight: g2 } = e3;
    if (!(null == n3 ? void 0 : n3.length)) return;
    if (!(null == r3 ? void 0 : r3.length)) return;
    if (a2 < i3) return;
    if (!Number.isFinite(t3.range) || t3.range <= 0) return;
    const E2 = (A4) => g2 * (1 - (A4 - t3.min) / t3.range), s2 = (A4) => Jt(A4, o2, B2), l2 = (A4) => function(A5, e4, t4, n4) {
      return Jt(A5 + (e4 || 0) / 2, t4, n4);
    }(A4, Q2, o2, B2);
    for (const e4 of n3) {
      if (!e4) continue;
      A3.save(), St(A3, e4.options);
      const t4 = e4.useCenterX ? l2 : s2;
      let n4 = false, B3 = false;
      A3.beginPath();
      for (let Q3 = i3; Q3 <= a2; Q3++) {
        const i4 = r3[Q3];
        if (!i4) {
          B3 = false;
          continue;
        }
        const a3 = e4.source[Q3], g3 = null == a3 || !Number.isFinite(Number(a3)), s3 = t4(i4.t);
        if (s3 < -8 || s3 > o2 + 8) {
          B3 = B3 && !g3;
          continue;
        }
        if (g3) {
          e4.connectNulls || (n4 = false, B3 = false);
          continue;
        }
        const l3 = E2(Number(a3));
        Number.isFinite(l3) ? n4 ? (e4.connectNulls || B3 ? A3.lineTo(s3, l3) : A3.moveTo(s3, l3), B3 = true) : (A3.moveTo(s3, l3), n4 = true, B3 = true) : B3 = false;
      }
      n4 && A3.stroke(), A3.restore();
    }
  }(A2, e2, t2, i2);
}
function _t(A2, e2, t2) {
  let n2;
  if (A2) if ("string" == typeof A2) switch (A2) {
    case Yt.sma:
      n2 = { kind: Yt.sma, period: 20, price: Kt.close };
      break;
    case Yt.ema:
      n2 = { kind: Yt.ema, period: 20, price: Kt.close };
      break;
    case Yt.wma:
      n2 = { kind: Yt.wma, period: 20, price: Kt.close };
      break;
    case Yt.vwap:
      n2 = { kind: Yt.vwap };
      break;
    case Yt.bbands_mid:
      n2 = { kind: Yt.bbands_mid, period: 20, price: Kt.close };
      break;
    case Yt.bbands_upper:
      n2 = { kind: Yt.bbands_upper, period: 20, stddev: 2, price: Kt.close };
      break;
    case Yt.bbands_lower:
      n2 = { kind: Yt.bbands_lower, period: 20, stddev: 2, price: Kt.close };
      break;
    case Kt.close:
    case Kt.open:
    case Kt.high:
    case Kt.low:
      n2 = { kind: A2 };
      break;
    default:
      n2 = { kind: Kt.close };
  }
  else n2 = A2;
  else n2 = { kind: Kt.close };
  let r2 = { lineColor: "#2962ff", lineWidth: 2, lineStyle: Nt.solid };
  return r2 = { ...r2, ...e2 }, kt(r2, n2, t2);
}
function An(A2, e2, t2, n2, r2, i2) {
  let a2;
  if (Array.isArray(n2)) a2 = n2;
  else {
    if (!n2) return;
    a2 = [_t(n2, r2, i2)];
  }
  return $t(A2, e2, t2, a2);
}
function en(A2, e2, t2, n2) {
  var r2, i2, a2, B2, Q2, o2, g2, E2, s2;
  const { allIntervals: l2, visibleStartIndex: d2, visibleEndIndex: C2, visibleRange: c2, intervalSeconds: I2, canvasWidth: u2, canvasHeight: f2 } = e2, v2 = Math.max(0, d2 - 1), h2 = Math.min(l2.length - 1, C2 + 1);
  if (h2 < v2 || 0 === l2.length) return;
  if (!isFinite(n2.min) || !isFinite(n2.max)) return;
  if (!isFinite(n2.range) || n2.range <= 0) return;
  const m2 = c2.end - c2.start;
  if (m2 <= 0) return;
  const p2 = I2 / m2 * u2, b2 = p2 * (1 - Math.max(0, Math.min(0.4, (null == (a2 = null == (i2 = null == (r2 = null == t2 ? void 0 : t2.base) ? void 0 : r2.style) ? void 0 : i2.candles) ? void 0 : a2.spacingFactor) ?? 0.2)));
  for (let e3 = v2; e3 <= h2; e3++) {
    const r3 = l2[e3];
    if (!r3) continue;
    const i3 = Ot(r3.t, u2, c2);
    if (i3 + p2 < 0 || i3 > u2) continue;
    const a3 = Ht(r3.h, f2, n2), d3 = Ht(r3.l, f2, n2), C3 = Ht(r3.o, f2, n2), I3 = Ht(r3.c, f2, n2), v3 = r3.c >= r3.o ? (null == (o2 = null == (Q2 = null == (B2 = null == t2 ? void 0 : t2.base) ? void 0 : B2.style) ? void 0 : Q2.candles) ? void 0 : o2.bullColor) || "green" : (null == (s2 = null == (E2 = null == (g2 = null == t2 ? void 0 : t2.base) ? void 0 : g2.style) ? void 0 : E2.candles) ? void 0 : s2.bearColor) || "red", h3 = (A3) => Math.floor(A3) + 0.5, m3 = i3 + p2 / 2;
    A2.beginPath(), A2.strokeStyle = v3, A2.lineWidth = 1, A2.moveTo(h3(m3), h3(a3)), A2.lineTo(h3(m3), h3(d3)), A2.stroke();
    const w2 = Math.min(C3, I3), y2 = Math.abs(C3 - I3);
    A2.fillStyle = v3;
    const P2 = Math.floor(i3 + (p2 - b2) / 2);
    A2.fillRect(P2, Math.floor(w2), Math.ceil(b2), Math.ceil(y2) || 1);
  }
  if (t2.base.showOverlayLine) {
    const r3 = t2.base.overlays;
    if (r3 && r3.length && An(A2, e2, n2, r3, t2.base.style.overlay), Array.isArray(t2.base.overlayKinds) && t2.base.overlayKinds.length) {
      const r4 = t2.base.overlayKinds, i3 = t2.base.style.overlay;
      An(A2, e2, n2, r4.map((A3) => _t(A3, i3)), i3);
    }
  }
}
let tn = 0;
function nn() {
  return tn += 1, `drawing-shape-${tn}`;
}
var rn = ((A2) => (A2.Line = "Line", A2.Rectangle = "Rectangle", A2.Circle = "Circle", A2.Triangle = "Triangle", A2.Angle = "Angle", A2.Arrow = "Arrow", A2.Polyline = "Polyline", A2.CustomSymbol = "CustomSymbol", A2))(rn || {});
function an(A2, e2 = 60) {
  if (!A2 || A2.length <= 1) return Math.max(1, e2);
  const t2 = [];
  for (let e3 = 1; e3 < A2.length; e3++) t2.push(Math.max(0, A2[e3].t - A2[e3 - 1].t));
  t2.sort((A3, e3) => A3 - e3);
  const n2 = ((A3) => {
    if (0 === A3.length) return 0;
    const e3 = Math.floor(A3.length / 2);
    return A3.length % 2 ? A3[e3] : (A3[e3 - 1] + A3[e3]) / 2;
  })(t2);
  return Math.max(1, Math.round(n2 || e2));
}
function Bn(A2, e2, t2, n2, r2, i2, a2) {
  const B2 = r2 - t2, Q2 = i2 - n2;
  if (0 === B2 && 0 === Q2) return false;
  const o2 = ((A2 - t2) * B2 + (e2 - n2) * Q2) / (B2 * B2 + Q2 * Q2);
  return (A2 - (o2 < 0 ? t2 : o2 > 1 ? r2 : t2 + o2 * B2)) ** 2 + (e2 - (o2 < 0 ? n2 : o2 > 1 ? i2 : n2 + o2 * Q2)) ** 2 <= a2 ** 2;
}
class Qn {
  constructor(A2, t2, n2) {
    e(this, "id"), e(this, "type", rn.Line), e(this, "style"), e(this, "points", []), this.args = A2, this.styleOverride = t2, this.id = n2 ?? nn(), this.style = t2, this.points = (null == A2 ? void 0 : A2.points) ?? [];
  }
  draw(A2, e2, t2, n2) {
    const { canvasWidth: r2, canvasHeight: i2, visibleRange: a2 } = e2;
    if (this.points.length < 2) return;
    const B2 = Wt(this.points[0].time, r2, a2), Q2 = Ht(this.points[0].price, i2, t2), o2 = Wt(this.points[1].time, r2, a2), g2 = Ht(this.points[1].price, i2, t2);
    A2.strokeStyle = n2.lineColor, A2.lineWidth = n2.lineWidth, n2.lineStyle === Nt.dashed ? A2.setLineDash([5, 5]) : n2.lineStyle === Nt.dotted ? A2.setLineDash([1, 2]) : A2.setLineDash([]), A2.beginPath(), A2.moveTo(B2, Q2), A2.lineTo(o2, g2), A2.stroke();
  }
  isHit(A2, e2, t2, n2) {
    const { canvasWidth: r2, canvasHeight: i2, visibleRange: a2 } = t2;
    return Bn(A2, e2, Wt(this.points[0].time, r2, a2), Ht(this.points[0].price, i2, n2), Wt(this.points[1].time, r2, a2), Ht(this.points[1].price, i2, n2), cn);
  }
  setPoints(A2) {
    this.points = A2;
  }
  addPoint(A2) {
    this.points.length < 2 && this.points.push(A2);
  }
  setPointAt(A2, e2) {
    if (A2 < 0) throw new Error("Index out of bounds");
    A2 == this.points.length - 1 ? this.points[A2] = e2 : A2 === this.points.length + 1 && this.addPoint(e2);
  }
  getPoints() {
    return this.points;
  }
  updateLastPoint(A2) {
    0 === this.points.length || 1 === this.points.length ? this.points.push(A2) : this.points[1] = A2;
  }
  setFirstPoint(A2) {
    0 === this.points.length ? this.points.push(A2) : this.points[0] = A2;
  }
}
class on {
  constructor(A2, t2, n2) {
    e(this, "id"), e(this, "type", rn.Rectangle), e(this, "style"), e(this, "points", []), this.args = A2, this.styleOverride = t2, this.id = n2 ?? nn(), this.style = t2, this.points = (null == A2 ? void 0 : A2.points) ?? [];
  }
  draw(A2, e2, t2, n2) {
    const { canvasWidth: r2, canvasHeight: i2, visibleRange: a2 } = e2;
    if (this.points.length < 2) return;
    const B2 = Wt(this.points[0].time, r2, a2), Q2 = Ht(this.points[0].price, i2, t2), o2 = Wt(this.points[1].time, r2, a2) - B2, g2 = Ht(this.points[1].price, i2, t2) - Q2;
    A2.strokeStyle = n2.lineColor, A2.lineWidth = n2.lineWidth, A2.fillStyle = n2.fillColor, n2.lineStyle === Nt.dashed ? A2.setLineDash([5, 5]) : n2.lineStyle === Nt.dotted ? A2.setLineDash([1, 2]) : A2.setLineDash([]), A2.beginPath(), "transparent" !== (null == n2 ? void 0 : n2.fillColor) && A2.fillRect(B2, Q2, o2, g2), A2.strokeRect(B2, Q2, o2, g2);
  }
  isHit(A2, e2, t2, n2) {
    const { canvasWidth: r2, canvasHeight: i2, visibleRange: a2 } = t2, B2 = Wt(this.points[0].time, r2, a2), Q2 = Ht(this.points[0].price, i2, n2), o2 = Wt(this.points[1].time, r2, a2), g2 = Ht(this.points[1].price, i2, n2);
    return Bn(A2, e2, B2, Q2, o2, Q2, cn) || Bn(A2, e2, o2, Q2, o2, g2, cn) || Bn(A2, e2, o2, g2, B2, g2, cn) || Bn(A2, e2, B2, g2, B2, Q2, cn);
  }
  addPoint(A2) {
    this.points.length < 2 ? this.points.push(A2) : this.points[1] = A2;
  }
  setPoints(A2) {
    A2.length >= 2 && (this.points = [A2[0], A2[1]]);
  }
  setPointAt(A2, e2) {
    A2 >= 0 && A2 < this.points.length && (this.points[A2] = e2);
  }
  getPoints() {
    return this.points;
  }
  setFirstPoint(A2) {
    0 === this.points.length ? this.points.push(A2) : this.points[0] = A2;
  }
  updateLastPoint(A2) {
    0 === this.points.length || 1 === this.points.length ? this.points.push(A2) : this.points[1] = A2;
  }
}
class gn {
  constructor(A2, t2, n2) {
    e(this, "id"), e(this, "type", rn.Circle), e(this, "style"), e(this, "points", []), this.args = A2, this.styleOverride = t2, this.id = n2 ?? nn(), this.style = t2, this.points = (null == A2 ? void 0 : A2.points) ?? [];
  }
  draw(A2, e2, t2, n2) {
    const { canvasWidth: r2, canvasHeight: i2, visibleRange: a2 } = e2;
    if (this.points.length < 2) return;
    const B2 = Wt(this.points[0].time, r2, a2), Q2 = Ht(this.points[0].price, i2, t2), o2 = Wt(this.points[1].time, r2, a2), g2 = Ht(this.points[1].price, i2, t2), E2 = (B2 + o2) / 2, s2 = (Q2 + g2) / 2, l2 = Math.abs(o2 - B2) / 2, d2 = Math.abs(g2 - Q2) / 2;
    A2.strokeStyle = n2.lineColor, A2.lineWidth = n2.lineWidth, A2.fillStyle = n2.fillColor, n2.lineStyle === Nt.dashed ? A2.setLineDash([5, 5]) : n2.lineStyle === Nt.dotted ? A2.setLineDash([1, 2]) : A2.setLineDash([]), A2.beginPath(), A2.ellipse(E2, s2, l2, d2, 0, 0, 2 * Math.PI), "transparent" !== (null == n2 ? void 0 : n2.fillColor) && A2.fill(), A2.stroke();
  }
  isHit(A2, e2, t2, n2) {
    const { canvasWidth: r2, canvasHeight: i2, visibleRange: a2 } = t2, B2 = Wt(this.points[0].time, r2, a2), Q2 = Ht(this.points[0].price, i2, n2), o2 = Wt(this.points[1].time, r2, a2), g2 = Ht(this.points[1].price, i2, n2), E2 = (B2 + o2) / 2, s2 = (Q2 + g2) / 2, l2 = Math.abs(o2 - B2) / 2, d2 = Math.abs(g2 - Q2) / 2;
    if (0 === l2 || 0 === d2) return false;
    const C2 = ((A2 - E2) / l2) ** 2 + ((e2 - s2) / d2) ** 2;
    return C2 >= 1 - cn && C2 <= 1 + cn;
  }
  addPoint(A2) {
    this.points.length < 2 ? this.points.push(A2) : this.points[1] = A2;
  }
  setPoints(A2) {
    this.points = A2.slice(0, 2);
  }
  setPointAt(A2, e2) {
    A2 >= 0 && A2 < this.points.length && (this.points[A2] = e2);
  }
  getPoints() {
    return this.points;
  }
  setFirstPoint(A2) {
    0 === this.points.length ? this.points.push(A2) : this.points[0] = A2;
  }
  updateLastPoint(A2) {
    0 === this.points.length || 1 === this.points.length ? this.points.push(A2) : this.points[1] = A2;
  }
}
class En {
  constructor(A2, t2, n2) {
    e(this, "id"), e(this, "type", rn.Triangle), e(this, "style"), e(this, "points", []), e(this, "args"), e(this, "normTimeSpan", 3600), e(this, "normPriceSpan", 1), this.styleOverride = t2, this.id = n2 ?? nn(), this.style = t2, this.args = { points: [] }, this.points = (null == A2 ? void 0 : A2.points) ? [...A2.points] : [], this.points.length < 3 && this.recalculateThirdVertex(), this.args.points = [...this.points];
  }
  draw(A2, e2, t2, n2) {
    const { canvasWidth: r2, canvasHeight: i2, visibleRange: a2 } = e2;
    if (this.points.length < 3) return;
    const B2 = { x: Wt(this.points[0].time, r2, a2), y: Ht(this.points[0].price, i2, t2) }, Q2 = { x: Wt(this.points[1].time, r2, a2), y: Ht(this.points[1].price, i2, t2) }, o2 = { x: Wt(this.points[2].time, r2, a2), y: Ht(this.points[2].price, i2, t2) };
    A2.strokeStyle = n2.lineColor, A2.lineWidth = n2.lineWidth, A2.fillStyle = n2.fillColor, n2.lineStyle === Nt.dashed ? A2.setLineDash([5, 5]) : n2.lineStyle === Nt.dotted ? A2.setLineDash([1, 2]) : A2.setLineDash([]), A2.beginPath(), A2.moveTo(B2.x, B2.y), A2.lineTo(Q2.x, Q2.y), A2.lineTo(o2.x, o2.y), A2.closePath(), "transparent" !== (null == n2 ? void 0 : n2.fillColor) && A2.fill(), A2.stroke();
  }
  isHit(A2, e2, t2, n2) {
    if (this.points.length < 3) return false;
    const { canvasWidth: r2, canvasHeight: i2, visibleRange: a2 } = t2, B2 = { x: Wt(this.points[0].time, r2, a2), y: Ht(this.points[0].price, i2, n2) }, Q2 = { x: Wt(this.points[1].time, r2, a2), y: Ht(this.points[1].price, i2, n2) }, o2 = { x: Wt(this.points[2].time, r2, a2), y: Ht(this.points[2].price, i2, n2) };
    return !!(Bn(A2, e2, B2.x, B2.y, Q2.x, Q2.y, cn) || Bn(A2, e2, Q2.x, Q2.y, o2.x, o2.y, cn) || Bn(A2, e2, o2.x, o2.y, B2.x, B2.y, cn)) || function(A3, e3, t3, n3, r3) {
      const i3 = r3.x - t3.x, a3 = r3.y - t3.y, B3 = n3.x - t3.x, Q3 = n3.y - t3.y, o3 = A3 - t3.x, g2 = e3 - t3.y, E2 = i3 * Q3 - B3 * a3;
      if (0 === E2) return false;
      const s2 = (o3 * Q3 - B3 * g2) / E2, l2 = (i3 * g2 - o3 * a3) / E2;
      return s2 >= 0 && l2 >= 0 && s2 + l2 <= 1;
    }(A2, e2, B2, Q2, o2);
  }
  setNormalizationSpans(A2, e2) {
    this.normTimeSpan = Math.max(Math.abs(A2) || 3600, 1e-9), this.normPriceSpan = Math.max(Math.abs(e2) || 1, 1e-9);
  }
  recalculateThirdVertex() {
    if (this.points.length < 2) return;
    const A2 = this.points[0].time, e2 = this.points[1].time, t2 = this.points[0].price, n2 = this.points[1].price, r2 = n2 - t2, i2 = (e2 - A2) / this.normTimeSpan, a2 = r2 / this.normPriceSpan, B2 = Math.hypot(i2, a2);
    let Q2, o2;
    if (B2 < 1e-12) Q2 = A2 + 0.04 * this.normTimeSpan, o2 = t2 + 0.04 * this.normPriceSpan;
    else {
      const r3 = -a2 / B2, g2 = i2 / B2, E2 = Math.max(0.1, Math.min(0.55, 0.5 * B2)), s2 = (t2 + n2) / 2;
      Q2 = (A2 + e2) / 2 + r3 * E2 * this.normTimeSpan, o2 = s2 + g2 * E2 * this.normPriceSpan;
    }
    2 === this.points.length ? this.points.push({ time: Q2, price: o2 }) : this.points[2] = { time: Q2, price: o2 }, this.args.points = [...this.points];
  }
  addPoint(A2) {
    this.points.length < 2 ? (this.points.push(A2), this.args.points = [...this.points]) : (this.points[1] = A2, this.recalculateThirdVertex());
  }
  setPoints(A2) {
    this.points = A2.slice(0, 2), this.recalculateThirdVertex();
  }
  setPointAt(A2, e2) {
    A2 < 0 || A2 > 1 || (this.points[A2] = e2, this.recalculateThirdVertex());
  }
  getPoints() {
    return this.points;
  }
  setFirstPoint(A2) {
    0 === this.points.length ? (this.points.push(A2), this.args.points = [...this.points]) : (this.points[0] = A2, this.recalculateThirdVertex());
  }
  updateLastPoint(A2) {
    0 === this.points.length || 1 === this.points.length ? (this.points.push(A2), this.args.points = [...this.points]) : (this.points[1] = A2, this.recalculateThirdVertex());
  }
}
class sn {
  constructor(A2, t2, n2) {
    e(this, "id"), e(this, "type", rn.Arrow), e(this, "style"), e(this, "points", []), this.args = A2, this.styleOverride = t2, this.id = n2 ?? nn(), this.style = t2, this.points = (null == A2 ? void 0 : A2.points) ?? [];
  }
  draw(A2, e2, t2, n2) {
    const { canvasWidth: r2, canvasHeight: i2, visibleRange: a2 } = e2;
    if (this.points.length < 2) return;
    const B2 = Wt(this.points[0].time, r2, a2), Q2 = Ht(this.points[0].price, i2, t2), o2 = Wt(this.points[1].time, r2, a2), g2 = Ht(this.points[1].price, i2, t2);
    A2.strokeStyle = n2.lineColor, A2.lineWidth = n2.lineWidth, A2.fillStyle = n2.lineColor, n2.lineStyle === Nt.dashed ? A2.setLineDash([5, 5]) : n2.lineStyle === Nt.dotted ? A2.setLineDash([1, 2]) : A2.setLineDash([]), A2.beginPath(), A2.moveTo(B2, Q2), A2.lineTo(o2, g2), A2.stroke();
    const E2 = 8 + 2 * (n2.lineWidth - 1), s2 = o2 - B2, l2 = g2 - Q2, d2 = Math.atan2(l2, s2);
    A2.beginPath(), A2.moveTo(o2, g2), A2.lineTo(o2 - E2 * Math.cos(d2 - Math.PI / 6), g2 - E2 * Math.sin(d2 - Math.PI / 6)), A2.lineTo(o2 - E2 * Math.cos(d2 + Math.PI / 6), g2 - E2 * Math.sin(d2 + Math.PI / 6)), A2.closePath(), A2.fill();
  }
  isHit(A2, e2, t2, n2) {
    const { canvasWidth: r2, canvasHeight: i2, visibleRange: a2 } = t2;
    return Bn(A2, e2, Wt(this.points[0].time, r2, a2), Ht(this.points[0].price, i2, n2), Wt(this.points[1].time, r2, a2), Ht(this.points[1].price, i2, n2), cn);
  }
  addPoint(A2) {
    this.points.length < 2 ? this.points.push(A2) : this.points[1] = A2;
  }
  setPoints(A2) {
    this.points = A2.slice(0, 2);
  }
  setPointAt(A2, e2) {
    A2 >= 0 && A2 < this.points.length && (this.points[A2] = e2);
  }
  getPoints() {
    return this.points;
  }
  setFirstPoint(A2) {
    0 === this.points.length ? this.points.push(A2) : this.points[0] = A2;
  }
  updateLastPoint(A2) {
    0 === this.points.length || 1 === this.points.length ? this.points.push(A2) : this.points[1] = A2;
  }
}
class ln {
  constructor(A2, t2, n2) {
    e(this, "id"), e(this, "type", rn.Polyline), e(this, "style"), e(this, "points", []), e(this, "args"), this.styleOverride = t2, this.id = n2 ?? nn(), this.style = t2;
    const r2 = (null == A2 ? void 0 : A2.points) ? [...A2.points] : [];
    this.points = r2, this.args = { points: this.points };
  }
  addPoint(A2) {
    this.points.push(A2);
  }
  draw(A2, e2, t2, n2) {
    var r2;
    const i2 = null == (r2 = this.args) ? void 0 : r2.points;
    if (!i2 || i2.length < 2) return;
    const { canvasWidth: a2, canvasHeight: B2, visibleRange: Q2 } = e2;
    A2.strokeStyle = n2.lineColor, A2.lineWidth = n2.lineWidth, A2.fillStyle = n2.fillColor, n2.lineStyle === Nt.dashed ? A2.setLineDash([5, 5]) : n2.lineStyle === Nt.dotted ? A2.setLineDash([1, 2]) : A2.setLineDash([]);
    const o2 = i2.map((A3) => ({ x: Wt(A3.time, a2, Q2), y: Ht(A3.price, B2, t2) }));
    A2.beginPath(), A2.moveTo(o2[0].x, o2[0].y);
    for (let e3 = 1; e3 < o2.length; e3++) A2.lineTo(o2[e3].x, o2[e3].y);
    i2.length > 2 && A2.closePath(), "transparent" !== n2.fillColor && A2.fill(), A2.stroke();
  }
  isHit(A2, e2, t2, n2) {
    var r2;
    const i2 = null == (r2 = this.args) ? void 0 : r2.points;
    if (!i2 || i2.length < 2) return false;
    const { canvasWidth: a2, canvasHeight: B2, visibleRange: Q2 } = t2, o2 = i2.map((A3) => ({ x: Wt(A3.time, a2, Q2), y: Ht(A3.price, B2, n2) }));
    for (let t3 = 0; t3 < o2.length - 1; t3++) if (Bn(A2, e2, o2[t3].x, o2[t3].y, o2[t3 + 1].x, o2[t3 + 1].y, 6)) return true;
    if (i2.length > 2) {
      const t3 = o2[o2.length - 1], n3 = o2[0];
      if (Bn(A2, e2, t3.x, t3.y, n3.x, n3.y, 6)) return true;
    }
    return false;
  }
  setPoints(A2) {
    this.points = A2;
  }
  setPointAt(A2, e2) {
    A2 >= 0 && A2 < this.points.length && (this.points[A2] = e2);
  }
  getPoints() {
    return this.points;
  }
  setFirstPoint(A2) {
    0 === this.points.length ? this.points.push(A2) : this.points[0] = A2;
  }
  updateLastPoint(A2) {
    0 === this.points.length ? this.points.push(A2) : this.points[this.points.length - 1] = A2;
  }
}
class dn {
  constructor(A2, t2, n2) {
    e(this, "id"), e(this, "type", rn.CustomSymbol), e(this, "style"), e(this, "points", []), e(this, "symbol"), e(this, "size"), this.args = A2, this.styleOverride = t2, this.id = n2 ?? nn(), this.style = t2, this.points = (null == A2 ? void 0 : A2.points) ?? [], this.symbol = (null == A2 ? void 0 : A2.symbol) ?? "?", this.size = (null == A2 ? void 0 : A2.size) ?? 20;
  }
  draw(A2, e2, t2, n2) {
    var r2, i2, a2;
    const B2 = (null == (r2 = this.args) ? void 0 : r2.points) ?? this.points;
    if (!(null == B2 ? void 0 : B2.length)) return;
    const { canvasWidth: Q2, canvasHeight: o2, visibleRange: g2 } = e2, E2 = Wt(B2[0].time, Q2, g2), s2 = Ht(B2[0].price, o2, t2);
    if (!Number.isFinite(E2) || !Number.isFinite(s2)) return;
    const l2 = (null == (i2 = this.args) ? void 0 : i2.symbol) ?? this.symbol ?? "?", d2 = (null == (a2 = this.args) ? void 0 : a2.size) ?? this.size ?? 20;
    A2.fillStyle = "transparent" !== n2.fillColor ? n2.fillColor : n2.lineColor, A2.font = `${d2}px sans-serif`, A2.textAlign = "center", A2.textBaseline = "middle", A2.fillText(l2, E2, s2);
  }
  isHit(A2, e2, t2, n2) {
    var r2, i2;
    const a2 = (null == (r2 = this.args) ? void 0 : r2.points) ?? this.points;
    if (!(null == a2 ? void 0 : a2.length)) return false;
    const { canvasWidth: B2, canvasHeight: Q2, visibleRange: o2 } = t2, g2 = Wt(a2[0].time, B2, o2), E2 = Ht(a2[0].price, Q2, n2), s2 = (null == (i2 = this.args) ? void 0 : i2.size) ?? this.size ?? 20;
    return A2 >= g2 - s2 / 2 && A2 <= g2 + s2 / 2 && e2 >= E2 - s2 / 2 && e2 <= E2 + s2 / 2;
  }
  addPoint(A2) {
    this.points.length < 1 && this.points.push(A2);
  }
  setPoints(A2) {
    this.points = A2;
  }
  setPointAt(A2, e2) {
    A2 >= 0 && A2 < this.points.length && (this.points[A2] = e2);
  }
  getPoints() {
    return this.points;
  }
  setFirstPoint(A2) {
    this.points.length > 0 ? this.points[0] = A2 : this.points.push(A2);
  }
  updateLastPoint(A2) {
    0 === this.points.length ? this.points.push(A2) : this.points[this.points.length - 1] = A2;
  }
}
function Cn(A2, e2) {
  if (!e2) return A2;
  const t2 = Array.isArray(A2) ? [...A2] : { ...A2 };
  for (const n2 in e2) {
    const r2 = e2[n2];
    if (void 0 === r2) continue;
    const i2 = A2[n2];
    r2 && "object" == typeof r2 && !Array.isArray(r2) && i2 && "object" == typeof i2 && !Array.isArray(i2) ? t2[n2] = Cn(i2, r2) : t2[n2] = r2;
  }
  return t2;
}
const cn = 5;
function In(A2, e2) {
  const t2 = function(A3) {
    switch (A3) {
      case rn.CustomSymbol:
        return 1;
      case rn.Line:
      case rn.Rectangle:
      case rn.Circle:
      case rn.Arrow:
      case rn.Triangle:
      case rn.Angle:
      case rn.Polyline:
        return 2;
      default:
        return 1;
    }
  }(A2.type);
  if (!Array.isArray(A2.points) || A2.points.length < t2) return null;
  const n2 = Cn(e2.base.style.drawings, A2.style ?? {}), r2 = A2.id ?? nn(), i2 = [...A2.points];
  switch (A2.type) {
    case rn.Line:
      return new Qn({ points: i2 }, n2, r2);
    case rn.Rectangle:
      return new on({ points: i2 }, n2, r2);
    case rn.Circle:
      return new gn({ points: i2 }, n2, r2);
    case rn.Triangle:
      return new En({ points: i2 }, n2, r2);
    case rn.Angle:
      return new mn({ points: i2 }, n2, r2);
    case rn.Arrow:
      return new sn({ points: i2 }, n2, r2);
    case rn.Polyline:
      return new ln({ points: i2 }, n2, r2);
    case rn.CustomSymbol:
      return new dn({ points: i2, symbol: A2.symbol ?? "?", size: A2.size ?? 20 }, n2, r2);
    default:
      return null;
  }
}
function un(A2) {
  if (!A2 || "object" != typeof A2) return false;
  const e2 = A2;
  return "function" != typeof e2.draw && (null == e2.type || !Array.isArray(e2.points)) && ("style" in e2 || "points" in e2 || "symbol" in e2 || "size" in e2);
}
function fn(A2, e2) {
  if (e2.style && Object.keys(e2.style).length > 0 && (A2.style = Cn(A2.style, e2.style)), e2.points && e2.points.length > 0) {
    const t2 = [...e2.points];
    if (A2.type === rn.Triangle) {
      const e3 = A2;
      t2.length >= 3 ? (e3.points = t2, e3.args.points = [...t2]) : e3.setPoints(t2);
    } else if (A2.type === rn.Polyline) {
      const e3 = A2;
      e3.points.length = 0, e3.points.push(...t2), e3.args.points = e3.points;
    } else {
      A2.points = t2;
      const e3 = A2.args;
      e3 && "object" == typeof e3 && Array.isArray(e3.points) && (e3.points = t2);
    }
  }
  if (A2.type === rn.CustomSymbol) {
    const t2 = A2;
    void 0 !== e2.symbol && (t2.symbol = e2.symbol, t2.args.symbol = e2.symbol), void 0 !== e2.size && (t2.size = e2.size, t2.args.size = e2.size);
  }
}
function vn(A2, e2) {
  if (A2 && "object" == typeof A2 && "function" == typeof A2.draw && "string" == typeof A2.id) {
    if (!Array.isArray(A2.points)) return null;
    const t2 = e2.base.style.drawings;
    if (A2.style = Cn(t2, A2.style ?? {}), A2.type === rn.Polyline) {
      const e3 = A2;
      e3.args.points = e3.points;
    } else {
      const e3 = A2.args;
      e3 && "object" == typeof e3 && Array.isArray(A2.points) && (e3.points = [...A2.points]);
    }
    return A2;
  }
  return A2 && "object" == typeof A2 && A2.type && Array.isArray(A2.points) && Object.values(rn).includes(A2.type) ? In({ id: A2.id, type: A2.type, points: A2.points, style: A2.style, symbol: A2.symbol, size: A2.size }, e2) : null;
}
function hn(A2, e2, t2) {
  const { canvasWidth: n2, canvasHeight: r2, visibleRange: i2 } = e2;
  return { x: Wt(A2.time, n2, i2), y: Ht(A2.price, r2, t2) };
}
class mn {
  constructor(A2, t2, n2) {
    e(this, "id"), e(this, "type", rn.Angle), e(this, "style"), e(this, "points", []), this.args = A2, this.styleOptions = t2, this.id = n2 ?? nn(), this.style = t2, this.points = (null == A2 ? void 0 : A2.points) ?? [];
  }
  drawGeometry(A2, e2, t2, n2) {
    if (this.points.length < 2) return;
    if (A2.save(), A2.strokeStyle = n2.lineColor, A2.lineWidth = n2.lineWidth, n2.lineStyle === Nt.dashed ? A2.setLineDash([5, 5]) : n2.lineStyle === Nt.dotted ? A2.setLineDash([1, 2]) : A2.setLineDash([]), 2 === this.points.length) {
      const n3 = hn(this.points[0], e2, t2), r3 = hn(this.points[1], e2, t2);
      return [n3.x, n3.y, r3.x, r3.y].every(Number.isFinite) ? (A2.beginPath(), A2.moveTo(n3.x, n3.y), A2.lineTo(r3.x, r3.y), A2.stroke(), void A2.restore()) : void A2.restore();
    }
    const r2 = hn(this.points[0], e2, t2), i2 = hn(this.points[1], e2, t2), a2 = hn(this.points[2], e2, t2);
    if (![r2.x, r2.y, i2.x, i2.y, a2.x, a2.y].every(Number.isFinite)) return void A2.restore();
    const B2 = Math.hypot(i2.x - r2.x, i2.y - r2.y), Q2 = Math.hypot(a2.x - r2.x, a2.y - r2.y);
    B2 < 2 || Q2 < 2 ? A2.restore() : (A2.beginPath(), A2.moveTo(r2.x, r2.y), A2.lineTo(i2.x, i2.y), A2.moveTo(r2.x, r2.y), A2.lineTo(a2.x, a2.y), A2.stroke(), A2.restore(), this.drawAngleArcOnly(A2, i2, r2, a2, n2.lineColor));
  }
  drawLabelOverlay(A2, e2, t2, n2) {
    if (this.points.length < 3) return;
    const r2 = hn(this.points[0], e2, t2), i2 = hn(this.points[1], e2, t2), a2 = hn(this.points[2], e2, t2);
    if (![r2.x, r2.y, i2.x, i2.y, a2.x, a2.y].every(Number.isFinite)) return;
    const B2 = Math.hypot(i2.x - r2.x, i2.y - r2.y), Q2 = Math.hypot(a2.x - r2.x, a2.y - r2.y);
    B2 < 4 || Q2 < 4 || this.drawAngleLabelOnly(A2, i2, r2, a2, n2.lineColor, n2.lineWidth);
  }
  draw(A2, e2, t2, n2) {
    this.drawGeometry(A2, e2, t2, n2), this.drawLabelOverlay(A2, e2, t2, n2);
  }
  isHit(A2, e2, t2, n2) {
    if (this.points.length < 2) return false;
    if (2 === this.points.length) {
      const r3 = hn(this.points[0], t2, n2), i3 = hn(this.points[1], t2, n2);
      return this.isPointNearLine(A2, e2, r3.x, r3.y, i3.x, i3.y, cn);
    }
    const r2 = hn(this.points[0], t2, n2), i2 = hn(this.points[1], t2, n2), a2 = hn(this.points[2], t2, n2);
    return this.isPointNearLine(A2, e2, r2.x, r2.y, i2.x, i2.y, cn) || this.isPointNearLine(A2, e2, r2.x, r2.y, a2.x, a2.y, cn);
  }
  angleArcParams(A2, e2, t2) {
    const n2 = Math.hypot(A2.x - e2.x, A2.y - e2.y), r2 = Math.hypot(t2.x - e2.x, t2.y - e2.y);
    if (n2 < 4 || r2 < 4) return null;
    let i2 = Math.atan2(A2.y - e2.y, A2.x - e2.x), a2 = Math.atan2(t2.y - e2.y, t2.x - e2.x);
    if (!Number.isFinite(i2) || !Number.isFinite(a2)) return null;
    const B2 = Math.min(22, 0.22 * n2, 0.22 * r2);
    if (B2 < 2) return null;
    const Q2 = 2 * Math.PI;
    let o2 = a2 - i2;
    for (; o2 <= -Math.PI; ) o2 += Q2;
    for (; o2 > Math.PI; ) o2 -= Q2;
    return Math.abs(o2) < 1e-4 ? null : { a1: i2, delta: o2, arcR: B2 };
  }
  drawAngleArcOnly(A2, e2, t2, n2, r2) {
    const i2 = this.angleArcParams(e2, t2, n2);
    i2 && (A2.save(), A2.strokeStyle = r2, A2.lineWidth = 1, A2.setLineDash([]), A2.beginPath(), A2.arc(t2.x, t2.y, i2.arcR, i2.a1, i2.a1 + i2.delta, i2.delta < 0), A2.stroke(), A2.restore());
  }
  drawAngleLabelOnly(A2, e2, t2, n2, r2, i2) {
    const a2 = this.angleArcParams(e2, t2, n2);
    if (!a2) return;
    const B2 = this.calculateAngle(e2, t2, n2);
    if (!Number.isFinite(B2)) return;
    const Q2 = a2.a1 + a2.delta / 2, o2 = Math.max(1, i2 || 1), g2 = a2.arcR + 14 + 0.65 * o2, E2 = t2.x + g2 * Math.cos(Q2), s2 = t2.y + g2 * Math.sin(Q2);
    if (!Number.isFinite(E2) || !Number.isFinite(s2)) return;
    const l2 = `${B2.toFixed(1)}°`;
    A2.save(), A2.font = "12px sans-serif", A2.textAlign = "center", A2.textBaseline = "middle";
    const d2 = A2.measureText(l2), C2 = Math.max(d2.width, 28) + 12, c2 = E2 - C2 / 2, I2 = s2 - 12;
    A2.fillStyle = "rgba(252, 252, 255, 0.94)", A2.beginPath();
    const u2 = A2;
    "function" == typeof u2.roundRect ? u2.roundRect(c2, I2, C2, 24, 5) : A2.rect(c2, I2, C2, 24), A2.fill(), A2.strokeStyle = "rgba(0, 0, 0, 0.14)", A2.lineWidth = 1, A2.stroke(), A2.lineJoin = "round", A2.lineWidth = 3, A2.strokeStyle = "rgba(255, 255, 255, 0.98)", A2.strokeText(l2, E2, s2), A2.fillStyle = r2, A2.fillText(l2, E2, s2), A2.restore();
  }
  isPointNearLine(A2, e2, t2, n2, r2, i2, a2) {
    const B2 = r2 - t2, Q2 = i2 - n2;
    if (0 === B2 && 0 === Q2) return false;
    const o2 = ((A2 - t2) * B2 + (e2 - n2) * Q2) / (B2 * B2 + Q2 * Q2);
    return (A2 - (o2 < 0 ? t2 : o2 > 1 ? r2 : t2 + o2 * B2)) ** 2 + (e2 - (o2 < 0 ? n2 : o2 > 1 ? i2 : n2 + o2 * Q2)) ** 2 <= a2 ** 2;
  }
  calculateAngle(A2, e2, t2) {
    const n2 = A2.x - e2.x, r2 = A2.y - e2.y, i2 = t2.x - e2.x, a2 = t2.y - e2.y, B2 = Math.atan2(a2, i2) - Math.atan2(r2, n2);
    let Q2 = Math.abs(B2 * (180 / Math.PI));
    return Q2 > 180 && (Q2 = 360 - Q2), Q2;
  }
  addPoint(A2) {
    this.points.length < 3 ? this.points.push(A2) : this.points[2] = A2;
  }
  updateSecondRayEnd(A2) {
    this.points.length < 2 || (2 === this.points.length ? this.points.push(A2) : this.points[2] = A2);
  }
  setPoints(A2) {
    this.points = A2.slice(0, 3);
  }
  setPointAt(A2, e2) {
    A2 >= 0 && A2 < this.points.length && (this.points[A2] = e2);
  }
  getPoints() {
    return [...this.points];
  }
  setFirstPoint(A2) {
    0 === this.points.length ? this.points.push(A2) : this.points[0] = A2;
  }
  updateLastPoint(A2) {
    0 === this.points.length || 1 === this.points.length ? this.points.push(A2) : this.points[1] = A2;
  }
}
function pn(A2, e2, t2) {
  if (!(null == A2 ? void 0 : A2.style)) return null;
  let n2 = { lineColor: A2.style.lineColor, lineWidth: A2.style.lineWidth, lineStyle: A2.style.lineStyle, fillColor: A2.style.fillColor };
  const r2 = A2.style.selected;
  return t2 === e2 && r2 && (n2.lineColor = r2.lineColor, n2.lineWidth = (n2.lineWidth || 1) + (r2.lineWidthAdd || 1), n2.lineStyle = r2.lineStyle || n2.lineStyle, r2.fillColor && (n2.fillColor = r2.fillColor)), n2;
}
function bn(A2, e2, t2, n2, r2) {
  e2.forEach((e3, i2) => {
    const a2 = pn(e3, i2, t2);
    a2 && (e3 instanceof mn ? e3.drawGeometry(A2, n2, r2, a2) : e3.draw(A2, n2, r2, a2));
  }), e2.forEach((e3, i2) => {
    const a2 = pn(e3, i2, t2);
    a2 && e3 instanceof mn && e3.drawLabelOverlay(A2, n2, r2, a2);
  });
}
function wn(A2) {
  return A2.length <= 2e3 ? A2 : A2.slice(-2e3);
}
function yn(A2) {
  return (e2 = {}) => {
    const t2 = e2.width ? String(e2.width) : A2.defaultWidth;
    return A2.formats[t2] || A2.formats[A2.defaultWidth];
  };
}
function Pn(A2) {
  return (e2, t2) => {
    let n2;
    if ("formatting" === ((null == t2 ? void 0 : t2.context) ? String(t2.context) : "standalone") && A2.formattingValues) {
      const e3 = A2.defaultFormattingWidth || A2.defaultWidth, r2 = (null == t2 ? void 0 : t2.width) ? String(t2.width) : e3;
      n2 = A2.formattingValues[r2] || A2.formattingValues[e3];
    } else {
      const e3 = A2.defaultWidth, r2 = (null == t2 ? void 0 : t2.width) ? String(t2.width) : A2.defaultWidth;
      n2 = A2.values[r2] || A2.values[e3];
    }
    return n2[A2.argumentCallback ? A2.argumentCallback(e2) : e2];
  };
}
function Vn(A2) {
  return (e2, t2 = {}) => {
    const n2 = t2.width, r2 = n2 && A2.matchPatterns[n2] || A2.matchPatterns[A2.defaultMatchWidth], i2 = e2.match(r2);
    if (!i2) return null;
    const a2 = i2[0], B2 = n2 && A2.parsePatterns[n2] || A2.parsePatterns[A2.defaultParseWidth], Q2 = Array.isArray(B2) ? function(A3, e3) {
      for (let t3 = 0; t3 < A3.length; t3++) if (e3(A3[t3])) return t3;
    }(B2, (A3) => A3.test(a2)) : function(A3, e3) {
      for (const t3 in A3) if (Object.prototype.hasOwnProperty.call(A3, t3) && e3(A3[t3])) return t3;
    }(B2, (A3) => A3.test(a2));
    let o2;
    return o2 = A2.valueCallback ? A2.valueCallback(Q2) : Q2, o2 = t2.valueCallback ? t2.valueCallback(o2) : o2, { value: o2, rest: e2.slice(a2.length) };
  };
}
function xn(A2) {
  return (e2, t2 = {}) => {
    const n2 = e2.match(A2.matchPattern);
    if (!n2) return null;
    const r2 = n2[0], i2 = e2.match(A2.parsePattern);
    if (!i2) return null;
    let a2 = A2.valueCallback ? A2.valueCallback(i2[0]) : i2[0];
    return a2 = t2.valueCallback ? t2.valueCallback(a2) : a2, { value: a2, rest: e2.slice(r2.length) };
  };
}
const zn = { lessThanXSeconds: { one: "أقل من ثانية واحدة", two: "أقل من ثانتين", threeToTen: "أقل من {{count}} ثواني", other: "أقل من {{count}} ثانية" }, xSeconds: { one: "ثانية واحدة", two: "ثانتين", threeToTen: "{{count}} ثواني", other: "{{count}} ثانية" }, halfAMinute: "نصف دقيقة", lessThanXMinutes: { one: "أقل من دقيقة", two: "أقل من دقيقتين", threeToTen: "أقل من {{count}} دقائق", other: "أقل من {{count}} دقيقة" }, xMinutes: { one: "دقيقة واحدة", two: "دقيقتين", threeToTen: "{{count}} دقائق", other: "{{count}} دقيقة" }, aboutXHours: { one: "ساعة واحدة تقريباً", two: "ساعتين تقريباً", threeToTen: "{{count}} ساعات تقريباً", other: "{{count}} ساعة تقريباً" }, xHours: { one: "ساعة واحدة", two: "ساعتين", threeToTen: "{{count}} ساعات", other: "{{count}} ساعة" }, xDays: { one: "يوم واحد", two: "يومين", threeToTen: "{{count}} أيام", other: "{{count}} يوم" }, aboutXWeeks: { one: "أسبوع واحد تقريباً", two: "أسبوعين تقريباً", threeToTen: "{{count}} أسابيع تقريباً", other: "{{count}} أسبوع تقريباً" }, xWeeks: { one: "أسبوع واحد", two: "أسبوعين", threeToTen: "{{count}} أسابيع", other: "{{count}} أسبوع" }, aboutXMonths: { one: "شهر واحد تقريباً", two: "شهرين تقريباً", threeToTen: "{{count}} أشهر تقريباً", other: "{{count}} شهر تقريباً" }, xMonths: { one: "شهر واحد", two: "شهرين", threeToTen: "{{count}} أشهر", other: "{{count}} شهر" }, aboutXYears: { one: "عام واحد تقريباً", two: "عامين تقريباً", threeToTen: "{{count}} أعوام تقريباً", other: "{{count}} عام تقريباً" }, xYears: { one: "عام واحد", two: "عامين", threeToTen: "{{count}} أعوام", other: "{{count}} عام" }, overXYears: { one: "أكثر من عام", two: "أكثر من عامين", threeToTen: "أكثر من {{count}} أعوام", other: "أكثر من {{count}} عام" }, almostXYears: { one: "عام واحد تقريباً", two: "عامين تقريباً", threeToTen: "{{count}} أعوام تقريباً", other: "{{count}} عام تقريباً" } }, Xn = { date: yn({ formats: { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" }, defaultWidth: "full" }), time: yn({ formats: { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" }, defaultWidth: "full" }), dateTime: yn({ formats: { full: "{{date}} 'عند' {{time}}", long: "{{date}} 'عند' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) }, Mn = { lastWeek: "'أخر' eeee 'عند' p", yesterday: "'أمس عند' p", today: "'اليوم عند' p", tomorrow: "'غداً عند' p", nextWeek: "eeee 'عند' p", other: "P" }, On = { code: "ar-SA", formatDistance: (A2, e2, t2) => {
  let n2;
  const r2 = zn[A2];
  return n2 = "string" == typeof r2 ? r2 : 1 === e2 ? r2.one : 2 === e2 ? r2.two : e2 <= 10 ? r2.threeToTen.replace("{{count}}", String(e2)) : r2.other.replace("{{count}}", String(e2)), (null == t2 ? void 0 : t2.addSuffix) ? t2.comparison && t2.comparison > 0 ? "في خلال " + n2 : "منذ " + n2 : n2;
}, formatLong: Xn, formatRelative: (A2, e2, t2, n2) => Mn[A2], localize: { ordinalNumber: (A2) => String(A2), era: Pn({ values: { narrow: ["ق", "ب"], abbreviated: ["ق.م.", "ب.م."], wide: ["قبل الميلاد", "بعد الميلاد"] }, defaultWidth: "wide" }), quarter: Pn({ values: { narrow: ["1", "2", "3", "4"], abbreviated: ["ر1", "ر2", "ر3", "ر4"], wide: ["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"] }, defaultWidth: "wide", argumentCallback: (A2) => A2 - 1 }), month: Pn({ values: { narrow: ["ي", "ف", "م", "أ", "م", "ي", "ي", "أ", "س", "أ", "ن", "د"], abbreviated: ["ينا", "فبر", "مارس", "أبريل", "مايو", "يونـ", "يولـ", "أغسـ", "سبتـ", "أكتـ", "نوفـ", "ديسـ"], wide: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"] }, defaultWidth: "wide" }), day: Pn({ values: { narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"], short: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"], abbreviated: ["أحد", "اثنـ", "ثلا", "أربـ", "خميـ", "جمعة", "سبت"], wide: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"] }, defaultWidth: "wide" }), dayPeriod: Pn({ values: { narrow: { am: "ص", pm: "م", midnight: "ن", noon: "ظ", morning: "صباحاً", afternoon: "بعد الظهر", evening: "مساءاً", night: "ليلاً" }, abbreviated: { am: "ص", pm: "م", midnight: "نصف الليل", noon: "ظهر", morning: "صباحاً", afternoon: "بعد الظهر", evening: "مساءاً", night: "ليلاً" }, wide: { am: "ص", pm: "م", midnight: "نصف الليل", noon: "ظهر", morning: "صباحاً", afternoon: "بعد الظهر", evening: "مساءاً", night: "ليلاً" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "ص", pm: "م", midnight: "ن", noon: "ظ", morning: "في الصباح", afternoon: "بعد الظـهر", evening: "في المساء", night: "في الليل" }, abbreviated: { am: "ص", pm: "م", midnight: "نصف الليل", noon: "ظهر", morning: "في الصباح", afternoon: "بعد الظهر", evening: "في المساء", night: "في الليل" }, wide: { am: "ص", pm: "م", midnight: "نصف الليل", noon: "ظهر", morning: "صباحاً", afternoon: "بعد الظـهر", evening: "في المساء", night: "في الليل" } }, defaultFormattingWidth: "wide" }) }, match: { ordinalNumber: xn({ matchPattern: /^(\d+)(th|st|nd|rd)?/i, parsePattern: /\d+/i, valueCallback: (A2) => parseInt(A2, 10) }), era: Vn({ matchPatterns: { narrow: /^(ق|ب)/i, abbreviated: /^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i, wide: /^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/^قبل/i, /^بعد/i] }, defaultParseWidth: "any" }), quarter: Vn({ matchPatterns: { narrow: /^[1234]/i, abbreviated: /^ر[1234]/i, wide: /^الربع [1234]/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] }, defaultParseWidth: "any", valueCallback: (A2) => A2 + 1 }), month: Vn({ matchPatterns: { narrow: /^[يفمأمسند]/i, abbreviated: /^(ين|ف|مار|أب|ماي|يون|يول|أغ|س|أك|ن|د)/i, wide: /^(ين|ف|مار|أب|ماي|يون|يول|أغ|س|أك|ن|د)/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: [/^ي/i, /^ف/i, /^م/i, /^أ/i, /^م/i, /^ي/i, /^ي/i, /^أ/i, /^س/i, /^أ/i, /^ن/i, /^د/i], any: [/^ين/i, /^ف/i, /^مار/i, /^أب/i, /^ماي/i, /^يون/i, /^يول/i, /^أغ/i, /^س/i, /^أك/i, /^ن/i, /^د/i] }, defaultParseWidth: "any" }), day: Vn({ matchPatterns: { narrow: /^[حنثرخجس]/i, short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i, abbreviated: /^(أحد|اثن|ثلا|أرب|خمي|جمعة|سبت)/i, wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i], wide: [/^الأحد/i, /^الاثنين/i, /^الثلاثاء/i, /^الأربعاء/i, /^الخميس/i, /^الجمعة/i, /^السبت/i], any: [/^أح/i, /^اث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i] }, defaultParseWidth: "any" }), dayPeriod: Vn({ matchPatterns: { narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i, any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^a/i, pm: /^p/i, midnight: /^mi/i, noon: /^no/i, morning: /morning/i, afternoon: /afternoon/i, evening: /evening/i, night: /night/i } }, defaultParseWidth: "any" }) }, options: { weekStartsOn: 0, firstWeekContainsDate: 1 } }, qn = 6048e5, Hn = Symbol.for("constructDateFrom");
function Wn(A2, e2) {
  return "function" == typeof A2 ? A2(e2) : A2 && "object" == typeof A2 && Hn in A2 ? A2[Hn](e2) : A2 instanceof Date ? new A2.constructor(e2) : new Date(e2);
}
function Dn(A2, ...e2) {
  const t2 = Wn.bind(null, A2 || e2.find((A3) => "object" == typeof A3));
  return e2.map(t2);
}
let Fn = {};
function jn() {
  return Fn;
}
function Tn(A2, e2) {
  return Wn(e2 || A2, A2);
}
function Nn(A2, e2) {
  var t2, n2, r2, i2;
  const a2 = jn(), B2 = (null == e2 ? void 0 : e2.weekStartsOn) ?? (null == (n2 = null == (t2 = null == e2 ? void 0 : e2.locale) ? void 0 : t2.options) ? void 0 : n2.weekStartsOn) ?? a2.weekStartsOn ?? (null == (i2 = null == (r2 = a2.locale) ? void 0 : r2.options) ? void 0 : i2.weekStartsOn) ?? 0, Q2 = Tn(A2, null == e2 ? void 0 : e2.in), o2 = Q2.getDay(), g2 = (o2 < B2 ? 7 : 0) + o2 - B2;
  return Q2.setDate(Q2.getDate() - g2), Q2.setHours(0, 0, 0, 0), Q2;
}
function Kn(A2, e2, t2) {
  const [n2, r2] = Dn(null == t2 ? void 0 : t2.in, A2, e2);
  return +Nn(n2, t2) === +Nn(r2, t2);
}
const Yn = { lessThanXSeconds: { standalone: { one: "weniger als 1 Sekunde", other: "weniger als {{count}} Sekunden" }, withPreposition: { one: "weniger als 1 Sekunde", other: "weniger als {{count}} Sekunden" } }, xSeconds: { standalone: { one: "1 Sekunde", other: "{{count}} Sekunden" }, withPreposition: { one: "1 Sekunde", other: "{{count}} Sekunden" } }, halfAMinute: { standalone: "eine halbe Minute", withPreposition: "einer halben Minute" }, lessThanXMinutes: { standalone: { one: "weniger als 1 Minute", other: "weniger als {{count}} Minuten" }, withPreposition: { one: "weniger als 1 Minute", other: "weniger als {{count}} Minuten" } }, xMinutes: { standalone: { one: "1 Minute", other: "{{count}} Minuten" }, withPreposition: { one: "1 Minute", other: "{{count}} Minuten" } }, aboutXHours: { standalone: { one: "etwa 1 Stunde", other: "etwa {{count}} Stunden" }, withPreposition: { one: "etwa 1 Stunde", other: "etwa {{count}} Stunden" } }, xHours: { standalone: { one: "1 Stunde", other: "{{count}} Stunden" }, withPreposition: { one: "1 Stunde", other: "{{count}} Stunden" } }, xDays: { standalone: { one: "1 Tag", other: "{{count}} Tage" }, withPreposition: { one: "1 Tag", other: "{{count}} Tagen" } }, aboutXWeeks: { standalone: { one: "etwa 1 Woche", other: "etwa {{count}} Wochen" }, withPreposition: { one: "etwa 1 Woche", other: "etwa {{count}} Wochen" } }, xWeeks: { standalone: { one: "1 Woche", other: "{{count}} Wochen" }, withPreposition: { one: "1 Woche", other: "{{count}} Wochen" } }, aboutXMonths: { standalone: { one: "etwa 1 Monat", other: "etwa {{count}} Monate" }, withPreposition: { one: "etwa 1 Monat", other: "etwa {{count}} Monaten" } }, xMonths: { standalone: { one: "1 Monat", other: "{{count}} Monate" }, withPreposition: { one: "1 Monat", other: "{{count}} Monaten" } }, aboutXYears: { standalone: { one: "etwa 1 Jahr", other: "etwa {{count}} Jahre" }, withPreposition: { one: "etwa 1 Jahr", other: "etwa {{count}} Jahren" } }, xYears: { standalone: { one: "1 Jahr", other: "{{count}} Jahre" }, withPreposition: { one: "1 Jahr", other: "{{count}} Jahren" } }, overXYears: { standalone: { one: "mehr als 1 Jahr", other: "mehr als {{count}} Jahre" }, withPreposition: { one: "mehr als 1 Jahr", other: "mehr als {{count}} Jahren" } }, almostXYears: { standalone: { one: "fast 1 Jahr", other: "fast {{count}} Jahre" }, withPreposition: { one: "fast 1 Jahr", other: "fast {{count}} Jahren" } } }, Gn = { date: yn({ formats: { full: "EEEE, do MMMM y", long: "do MMMM y", medium: "do MMM y", short: "dd.MM.y" }, defaultWidth: "full" }), time: yn({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: yn({ formats: { full: "{{date}} 'um' {{time}}", long: "{{date}} 'um' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) }, kn = { lastWeek: "'letzten' eeee 'um' p", yesterday: "'gestern um' p", today: "'heute um' p", tomorrow: "'morgen um' p", nextWeek: "eeee 'um' p", other: "P" }, Un = { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], wide: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] }, Zn = { narrow: Un.narrow, abbreviated: ["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."], wide: Un.wide }, Ln = { code: "de", formatDistance: (A2, e2, t2) => {
  let n2;
  const r2 = (null == t2 ? void 0 : t2.addSuffix) ? Yn[A2].withPreposition : Yn[A2].standalone;
  return n2 = "string" == typeof r2 ? r2 : 1 === e2 ? r2.one : r2.other.replace("{{count}}", String(e2)), (null == t2 ? void 0 : t2.addSuffix) ? t2.comparison && t2.comparison > 0 ? "in " + n2 : "vor " + n2 : n2;
}, formatLong: Gn, formatRelative: (A2, e2, t2, n2) => kn[A2], localize: { ordinalNumber: (A2) => Number(A2) + ".", era: Pn({ values: { narrow: ["v.Chr.", "n.Chr."], abbreviated: ["v.Chr.", "n.Chr."], wide: ["vor Christus", "nach Christus"] }, defaultWidth: "wide" }), quarter: Pn({ values: { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"] }, defaultWidth: "wide", argumentCallback: (A2) => A2 - 1 }), month: Pn({ values: Un, formattingValues: Zn, defaultWidth: "wide" }), day: Pn({ values: { narrow: ["S", "M", "D", "M", "D", "F", "S"], short: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], abbreviated: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."], wide: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"] }, defaultWidth: "wide" }), dayPeriod: Pn({ values: { narrow: { am: "vm.", pm: "nm.", midnight: "Mitternacht", noon: "Mittag", morning: "Morgen", afternoon: "Nachm.", evening: "Abend", night: "Nacht" }, abbreviated: { am: "vorm.", pm: "nachm.", midnight: "Mitternacht", noon: "Mittag", morning: "Morgen", afternoon: "Nachmittag", evening: "Abend", night: "Nacht" }, wide: { am: "vormittags", pm: "nachmittags", midnight: "Mitternacht", noon: "Mittag", morning: "Morgen", afternoon: "Nachmittag", evening: "Abend", night: "Nacht" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "vm.", pm: "nm.", midnight: "Mitternacht", noon: "Mittag", morning: "morgens", afternoon: "nachm.", evening: "abends", night: "nachts" }, abbreviated: { am: "vorm.", pm: "nachm.", midnight: "Mitternacht", noon: "Mittag", morning: "morgens", afternoon: "nachmittags", evening: "abends", night: "nachts" }, wide: { am: "vormittags", pm: "nachmittags", midnight: "Mitternacht", noon: "Mittag", morning: "morgens", afternoon: "nachmittags", evening: "abends", night: "nachts" } }, defaultFormattingWidth: "wide" }) }, match: { ordinalNumber: xn({ matchPattern: /^(\d+)(\.)?/i, parsePattern: /\d+/i, valueCallback: (A2) => parseInt(A2) }), era: Vn({ matchPatterns: { narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i, abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i, wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/^v/i, /^n/i] }, defaultParseWidth: "any" }), quarter: Vn({ matchPatterns: { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](\.)? Quartal/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] }, defaultParseWidth: "any", valueCallback: (A2) => A2 + 1 }), month: Vn({ matchPatterns: { narrow: /^[jfmasond]/i, abbreviated: /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i, wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^j[aä]/i, /^f/i, /^mär/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i] }, defaultParseWidth: "any" }), day: Vn({ matchPatterns: { narrow: /^[smdmf]/i, short: /^(so|mo|di|mi|do|fr|sa)/i, abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i, wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i] }, defaultParseWidth: "any" }), dayPeriod: Vn({ matchPatterns: { narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i, abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i, wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i }, defaultMatchWidth: "wide", parsePatterns: { any: { am: /^v/i, pm: /^n/i, midnight: /^Mitte/i, noon: /^Mitta/i, morning: /morgens/i, afternoon: /nachmittags/i, evening: /abends/i, night: /nachts/i } }, defaultParseWidth: "any" }) }, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } }, Rn = { lessThanXSeconds: { one: "less than a second", other: "less than {{count}} seconds" }, xSeconds: { one: "1 second", other: "{{count}} seconds" }, halfAMinute: "half a minute", lessThanXMinutes: { one: "less than a minute", other: "less than {{count}} minutes" }, xMinutes: { one: "1 minute", other: "{{count}} minutes" }, aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" }, xHours: { one: "1 hour", other: "{{count}} hours" }, xDays: { one: "1 day", other: "{{count}} days" }, aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" }, xWeeks: { one: "1 week", other: "{{count}} weeks" }, aboutXMonths: { one: "about 1 month", other: "about {{count}} months" }, xMonths: { one: "1 month", other: "{{count}} months" }, aboutXYears: { one: "about 1 year", other: "about {{count}} years" }, xYears: { one: "1 year", other: "{{count}} years" }, overXYears: { one: "over 1 year", other: "over {{count}} years" }, almostXYears: { one: "almost 1 year", other: "almost {{count}} years" } }, Sn = (A2, e2, t2) => {
  let n2;
  const r2 = Rn[A2];
  return n2 = "string" == typeof r2 ? r2 : 1 === e2 ? r2.one : r2.other.replace("{{count}}", e2.toString()), (null == t2 ? void 0 : t2.addSuffix) ? t2.comparison && t2.comparison > 0 ? "in " + n2 : n2 + " ago" : n2;
}, Jn = { lastWeek: "'last' eeee 'at' p", yesterday: "'yesterday at' p", today: "'today at' p", tomorrow: "'tomorrow at' p", nextWeek: "eeee 'at' p", other: "P" }, $n = (A2, e2, t2, n2) => Jn[A2], _n = { ordinalNumber: (A2, e2) => {
  const t2 = Number(A2), n2 = t2 % 100;
  if (n2 > 20 || n2 < 10) switch (n2 % 10) {
    case 1:
      return t2 + "st";
    case 2:
      return t2 + "nd";
    case 3:
      return t2 + "rd";
  }
  return t2 + "th";
}, era: Pn({ values: { narrow: ["B", "A"], abbreviated: ["BC", "AD"], wide: ["Before Christ", "Anno Domini"] }, defaultWidth: "wide" }), quarter: Pn({ values: { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"] }, defaultWidth: "wide", argumentCallback: (A2) => A2 - 1 }), month: Pn({ values: { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, defaultWidth: "wide" }), day: Pn({ values: { narrow: ["S", "M", "T", "W", "T", "F", "S"], short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] }, defaultWidth: "wide" }), dayPeriod: Pn({ values: { narrow: { am: "a", pm: "p", midnight: "mi", noon: "n", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" }, abbreviated: { am: "AM", pm: "PM", midnight: "midnight", noon: "noon", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" }, wide: { am: "a.m.", pm: "p.m.", midnight: "midnight", noon: "noon", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "a", pm: "p", midnight: "mi", noon: "n", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night" }, abbreviated: { am: "AM", pm: "PM", midnight: "midnight", noon: "noon", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night" }, wide: { am: "a.m.", pm: "p.m.", midnight: "midnight", noon: "noon", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night" } }, defaultFormattingWidth: "wide" }) }, Ar = { ordinalNumber: xn({ matchPattern: /^(\d+)(th|st|nd|rd)?/i, parsePattern: /\d+/i, valueCallback: (A2) => parseInt(A2, 10) }), era: Vn({ matchPatterns: { narrow: /^(b|a)/i, abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i, wide: /^(before christ|before common era|anno domini|common era)/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/^b/i, /^(a|c)/i] }, defaultParseWidth: "any" }), quarter: Vn({ matchPatterns: { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] }, defaultParseWidth: "any", valueCallback: (A2) => A2 + 1 }), month: Vn({ matchPatterns: { narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i, wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i] }, defaultParseWidth: "any" }), day: Vn({ matchPatterns: { narrow: /^[smtwf]/i, short: /^(su|mo|tu|we|th|fr|sa)/i, abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i, wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i], any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i] }, defaultParseWidth: "any" }), dayPeriod: Vn({ matchPatterns: { narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i, any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^a/i, pm: /^p/i, midnight: /^mi/i, noon: /^no/i, morning: /morning/i, afternoon: /afternoon/i, evening: /evening/i, night: /night/i } }, defaultParseWidth: "any" }) }, er = { code: "en-GB", formatDistance: Sn, formatLong: { date: yn({ formats: { full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "dd/MM/yyyy" }, defaultWidth: "full" }), time: yn({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: yn({ formats: { full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) }, formatRelative: $n, localize: _n, match: Ar, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } }, tr = { code: "en-US", formatDistance: Sn, formatLong: { date: yn({ formats: { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" }, defaultWidth: "full" }), time: yn({ formats: { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" }, defaultWidth: "full" }), dateTime: yn({ formats: { full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) }, formatRelative: $n, localize: _n, match: Ar, options: { weekStartsOn: 0, firstWeekContainsDate: 1 } }, nr = { lessThanXSeconds: { one: "menos de un segundo", other: "menos de {{count}} segundos" }, xSeconds: { one: "1 segundo", other: "{{count}} segundos" }, halfAMinute: "medio minuto", lessThanXMinutes: { one: "menos de un minuto", other: "menos de {{count}} minutos" }, xMinutes: { one: "1 minuto", other: "{{count}} minutos" }, aboutXHours: { one: "alrededor de 1 hora", other: "alrededor de {{count}} horas" }, xHours: { one: "1 hora", other: "{{count}} horas" }, xDays: { one: "1 día", other: "{{count}} días" }, aboutXWeeks: { one: "alrededor de 1 semana", other: "alrededor de {{count}} semanas" }, xWeeks: { one: "1 semana", other: "{{count}} semanas" }, aboutXMonths: { one: "alrededor de 1 mes", other: "alrededor de {{count}} meses" }, xMonths: { one: "1 mes", other: "{{count}} meses" }, aboutXYears: { one: "alrededor de 1 año", other: "alrededor de {{count}} años" }, xYears: { one: "1 año", other: "{{count}} años" }, overXYears: { one: "más de 1 año", other: "más de {{count}} años" }, almostXYears: { one: "casi 1 año", other: "casi {{count}} años" } }, rr = { date: yn({ formats: { full: "EEEE, d 'de' MMMM 'de' y", long: "d 'de' MMMM 'de' y", medium: "d MMM y", short: "dd/MM/y" }, defaultWidth: "full" }), time: yn({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: yn({ formats: { full: "{{date}} 'a las' {{time}}", long: "{{date}} 'a las' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) }, ir = { lastWeek: "'el' eeee 'pasado a la' p", yesterday: "'ayer a la' p", today: "'hoy a la' p", tomorrow: "'mañana a la' p", nextWeek: "eeee 'a la' p", other: "P" }, ar = { lastWeek: "'el' eeee 'pasado a las' p", yesterday: "'ayer a las' p", today: "'hoy a las' p", tomorrow: "'mañana a las' p", nextWeek: "eeee 'a las' p", other: "P" }, Br = { code: "es", formatDistance: (A2, e2, t2) => {
  let n2;
  const r2 = nr[A2];
  return n2 = "string" == typeof r2 ? r2 : 1 === e2 ? r2.one : r2.other.replace("{{count}}", e2.toString()), (null == t2 ? void 0 : t2.addSuffix) ? t2.comparison && t2.comparison > 0 ? "en " + n2 : "hace " + n2 : n2;
}, formatLong: rr, formatRelative: (A2, e2, t2, n2) => 1 !== e2.getHours() ? ar[A2] : ir[A2], localize: { ordinalNumber: (A2, e2) => Number(A2) + "º", era: Pn({ values: { narrow: ["AC", "DC"], abbreviated: ["AC", "DC"], wide: ["antes de cristo", "después de cristo"] }, defaultWidth: "wide" }), quarter: Pn({ values: { narrow: ["1", "2", "3", "4"], abbreviated: ["T1", "T2", "T3", "T4"], wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"] }, defaultWidth: "wide", argumentCallback: (A2) => Number(A2) - 1 }), month: Pn({ values: { narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"], wide: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"] }, defaultWidth: "wide" }), day: Pn({ values: { narrow: ["d", "l", "m", "m", "j", "v", "s"], short: ["do", "lu", "ma", "mi", "ju", "vi", "sá"], abbreviated: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"], wide: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"] }, defaultWidth: "wide" }), dayPeriod: Pn({ values: { narrow: { am: "a", pm: "p", midnight: "mn", noon: "md", morning: "mañana", afternoon: "tarde", evening: "tarde", night: "noche" }, abbreviated: { am: "AM", pm: "PM", midnight: "medianoche", noon: "mediodia", morning: "mañana", afternoon: "tarde", evening: "tarde", night: "noche" }, wide: { am: "a.m.", pm: "p.m.", midnight: "medianoche", noon: "mediodia", morning: "mañana", afternoon: "tarde", evening: "tarde", night: "noche" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "a", pm: "p", midnight: "mn", noon: "md", morning: "de la mañana", afternoon: "de la tarde", evening: "de la tarde", night: "de la noche" }, abbreviated: { am: "AM", pm: "PM", midnight: "medianoche", noon: "mediodia", morning: "de la mañana", afternoon: "de la tarde", evening: "de la tarde", night: "de la noche" }, wide: { am: "a.m.", pm: "p.m.", midnight: "medianoche", noon: "mediodia", morning: "de la mañana", afternoon: "de la tarde", evening: "de la tarde", night: "de la noche" } }, defaultFormattingWidth: "wide" }) }, match: { ordinalNumber: xn({ matchPattern: /^(\d+)(º)?/i, parsePattern: /\d+/i, valueCallback: function(A2) {
  return parseInt(A2, 10);
} }), era: Vn({ matchPatterns: { narrow: /^(ac|dc|a|d)/i, abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i, wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/^ac/i, /^dc/i], wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i] }, defaultParseWidth: "any" }), quarter: Vn({ matchPatterns: { narrow: /^[1234]/i, abbreviated: /^T[1234]/i, wide: /^[1234](º)? trimestre/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] }, defaultParseWidth: "any", valueCallback: (A2) => A2 + 1 }), month: Vn({ matchPatterns: { narrow: /^[efmajsond]/i, abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i, wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i] }, defaultParseWidth: "any" }), day: Vn({ matchPatterns: { narrow: /^[dlmjvs]/i, short: /^(do|lu|ma|mi|ju|vi|s[áa])/i, abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i, wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i], any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i] }, defaultParseWidth: "any" }), dayPeriod: Vn({ matchPatterns: { narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i, any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^a/i, pm: /^p/i, midnight: /^mn/i, noon: /^md/i, morning: /mañana/i, afternoon: /tarde/i, evening: /tarde/i, night: /noche/i } }, defaultParseWidth: "any" }) }, options: { weekStartsOn: 1, firstWeekContainsDate: 1 } }, Qr = { lessThanXSeconds: { one: "moins d’une seconde", other: "moins de {{count}} secondes" }, xSeconds: { one: "1 seconde", other: "{{count}} secondes" }, halfAMinute: "30 secondes", lessThanXMinutes: { one: "moins d’une minute", other: "moins de {{count}} minutes" }, xMinutes: { one: "1 minute", other: "{{count}} minutes" }, aboutXHours: { one: "environ 1 heure", other: "environ {{count}} heures" }, xHours: { one: "1 heure", other: "{{count}} heures" }, xDays: { one: "1 jour", other: "{{count}} jours" }, aboutXWeeks: { one: "environ 1 semaine", other: "environ {{count}} semaines" }, xWeeks: { one: "1 semaine", other: "{{count}} semaines" }, aboutXMonths: { one: "environ 1 mois", other: "environ {{count}} mois" }, xMonths: { one: "1 mois", other: "{{count}} mois" }, aboutXYears: { one: "environ 1 an", other: "environ {{count}} ans" }, xYears: { one: "1 an", other: "{{count}} ans" }, overXYears: { one: "plus d’un an", other: "plus de {{count}} ans" }, almostXYears: { one: "presqu’un an", other: "presque {{count}} ans" } }, or = { date: yn({ formats: { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd/MM/y" }, defaultWidth: "full" }), time: yn({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: yn({ formats: { full: "{{date}} 'à' {{time}}", long: "{{date}} 'à' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) }, gr = { lastWeek: "eeee 'dernier à' p", yesterday: "'hier à' p", today: "'aujourd’hui à' p", tomorrow: "'demain à' p'", nextWeek: "eeee 'prochain à' p", other: "P" }, Er = ["MMM", "MMMM"], sr = { code: "fr", formatDistance: (A2, e2, t2) => {
  let n2;
  const r2 = Qr[A2];
  return n2 = "string" == typeof r2 ? r2 : 1 === e2 ? r2.one : r2.other.replace("{{count}}", String(e2)), (null == t2 ? void 0 : t2.addSuffix) ? t2.comparison && t2.comparison > 0 ? "dans " + n2 : "il y a " + n2 : n2;
}, formatLong: or, formatRelative: (A2, e2, t2, n2) => gr[A2], localize: { preprocessor: (A2, e2) => 1 === A2.getDate() ? e2 : e2.some((A3) => A3.isToken && Er.includes(A3.value)) ? e2.map((A3) => A3.isToken && "do" === A3.value ? { isToken: true, value: "d" } : A3) : e2, ordinalNumber: (A2, e2) => {
  const t2 = Number(A2), n2 = null == e2 ? void 0 : e2.unit;
  if (0 === t2) return "0";
  let r2;
  return r2 = 1 === t2 ? n2 && ["year", "week", "hour", "minute", "second"].includes(n2) ? "ère" : "er" : "ème", t2 + r2;
}, era: Pn({ values: { narrow: ["av. J.-C", "ap. J.-C"], abbreviated: ["av. J.-C", "ap. J.-C"], wide: ["avant Jésus-Christ", "après Jésus-Christ"] }, defaultWidth: "wide" }), quarter: Pn({ values: { narrow: ["T1", "T2", "T3", "T4"], abbreviated: ["1er trim.", "2ème trim.", "3ème trim.", "4ème trim."], wide: ["1er trimestre", "2ème trimestre", "3ème trimestre", "4ème trimestre"] }, defaultWidth: "wide", argumentCallback: (A2) => A2 - 1 }), month: Pn({ values: { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."], wide: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"] }, defaultWidth: "wide" }), day: Pn({ values: { narrow: ["D", "L", "M", "M", "J", "V", "S"], short: ["di", "lu", "ma", "me", "je", "ve", "sa"], abbreviated: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], wide: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"] }, defaultWidth: "wide" }), dayPeriod: Pn({ values: { narrow: { am: "AM", pm: "PM", midnight: "minuit", noon: "midi", morning: "mat.", afternoon: "ap.m.", evening: "soir", night: "mat." }, abbreviated: { am: "AM", pm: "PM", midnight: "minuit", noon: "midi", morning: "matin", afternoon: "après-midi", evening: "soir", night: "matin" }, wide: { am: "AM", pm: "PM", midnight: "minuit", noon: "midi", morning: "du matin", afternoon: "de l’après-midi", evening: "du soir", night: "du matin" } }, defaultWidth: "wide" }) }, match: { ordinalNumber: xn({ matchPattern: /^(\d+)(ième|ère|ème|er|e)?/i, parsePattern: /\d+/i, valueCallback: (A2) => parseInt(A2) }), era: Vn({ matchPatterns: { narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i, abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i, wide: /^(avant Jésus-Christ|après Jésus-Christ)/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/^av/i, /^ap/i] }, defaultParseWidth: "any" }), quarter: Vn({ matchPatterns: { narrow: /^T?[1234]/i, abbreviated: /^[1234](er|ème|e)? trim\.?/i, wide: /^[1234](er|ème|e)? trimestre/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] }, defaultParseWidth: "any", valueCallback: (A2) => A2 + 1 }), month: Vn({ matchPatterns: { narrow: /^[jfmasond]/i, abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i, wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^av/i, /^ma/i, /^juin/i, /^juil/i, /^ao/i, /^s/i, /^o/i, /^n/i, /^d/i] }, defaultParseWidth: "any" }), day: Vn({ matchPatterns: { narrow: /^[lmjvsd]/i, short: /^(di|lu|ma|me|je|ve|sa)/i, abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i, wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i], any: [/^di/i, /^lu/i, /^ma/i, /^me/i, /^je/i, /^ve/i, /^sa/i] }, defaultParseWidth: "any" }), dayPeriod: Vn({ matchPatterns: { narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i, any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^a/i, pm: /^p/i, midnight: /^min/i, noon: /^mid/i, morning: /mat/i, afternoon: /ap/i, evening: /soir/i, night: /nuit/i } }, defaultParseWidth: "any" }) }, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } }, lr = { lessThanXSeconds: { one: "פחות משנייה", two: "פחות משתי שניות", other: "פחות מ־{{count}} שניות" }, xSeconds: { one: "שנייה", two: "שתי שניות", other: "{{count}} שניות" }, halfAMinute: "חצי דקה", lessThanXMinutes: { one: "פחות מדקה", two: "פחות משתי דקות", other: "פחות מ־{{count}} דקות" }, xMinutes: { one: "דקה", two: "שתי דקות", other: "{{count}} דקות" }, aboutXHours: { one: "כשעה", two: "כשעתיים", other: "כ־{{count}} שעות" }, xHours: { one: "שעה", two: "שעתיים", other: "{{count}} שעות" }, xDays: { one: "יום", two: "יומיים", other: "{{count}} ימים" }, aboutXWeeks: { one: "כשבוע", two: "כשבועיים", other: "כ־{{count}} שבועות" }, xWeeks: { one: "שבוע", two: "שבועיים", other: "{{count}} שבועות" }, aboutXMonths: { one: "כחודש", two: "כחודשיים", other: "כ־{{count}} חודשים" }, xMonths: { one: "חודש", two: "חודשיים", other: "{{count}} חודשים" }, aboutXYears: { one: "כשנה", two: "כשנתיים", other: "כ־{{count}} שנים" }, xYears: { one: "שנה", two: "שנתיים", other: "{{count}} שנים" }, overXYears: { one: "יותר משנה", two: "יותר משנתיים", other: "יותר מ־{{count}} שנים" }, almostXYears: { one: "כמעט שנה", two: "כמעט שנתיים", other: "כמעט {{count}} שנים" } }, dr = { date: yn({ formats: { full: "EEEE, d בMMMM y", long: "d בMMMM y", medium: "d בMMM y", short: "d.M.y" }, defaultWidth: "full" }), time: yn({ formats: { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: yn({ formats: { full: "{{date}} 'בשעה' {{time}}", long: "{{date}} 'בשעה' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) }, Cr = { lastWeek: "eeee 'שעבר בשעה' p", yesterday: "'אתמול בשעה' p", today: "'היום בשעה' p", tomorrow: "'מחר בשעה' p", nextWeek: "eeee 'בשעה' p", other: "P" }, cr = { ordinalNumber: (A2, e2) => {
  const t2 = Number(A2);
  if (t2 <= 0 || t2 > 10) return String(t2);
  const n2 = String(null == e2 ? void 0 : e2.unit), r2 = t2 - 1;
  return ["year", "hour", "minute", "second"].indexOf(n2) >= 0 ? ["ראשונה", "שנייה", "שלישית", "רביעית", "חמישית", "שישית", "שביעית", "שמינית", "תשיעית", "עשירית"][r2] : ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שביעי", "שמיני", "תשיעי", "עשירי"][r2];
}, era: Pn({ values: { narrow: ["לפנה״ס", "לספירה"], abbreviated: ["לפנה״ס", "לספירה"], wide: ["לפני הספירה", "לספירה"] }, defaultWidth: "wide" }), quarter: Pn({ values: { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["רבעון 1", "רבעון 2", "רבעון 3", "רבעון 4"] }, defaultWidth: "wide", argumentCallback: (A2) => A2 - 1 }), month: Pn({ values: { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], abbreviated: ["ינו׳", "פבר׳", "מרץ", "אפר׳", "מאי", "יוני", "יולי", "אוג׳", "ספט׳", "אוק׳", "נוב׳", "דצמ׳"], wide: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"] }, defaultWidth: "wide" }), day: Pn({ values: { narrow: ["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"], short: ["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"], abbreviated: ["יום א׳", "יום ב׳", "יום ג׳", "יום ד׳", "יום ה׳", "יום ו׳", "שבת"], wide: ["יום ראשון", "יום שני", "יום שלישי", "יום רביעי", "יום חמישי", "יום שישי", "יום שבת"] }, defaultWidth: "wide" }), dayPeriod: Pn({ values: { narrow: { am: "לפנה״צ", pm: "אחה״צ", midnight: "חצות", noon: "צהריים", morning: "בוקר", afternoon: "אחר הצהריים", evening: "ערב", night: "לילה" }, abbreviated: { am: "לפנה״צ", pm: "אחה״צ", midnight: "חצות", noon: "צהריים", morning: "בוקר", afternoon: "אחר הצהריים", evening: "ערב", night: "לילה" }, wide: { am: "לפנה״צ", pm: "אחה״צ", midnight: "חצות", noon: "צהריים", morning: "בוקר", afternoon: "אחר הצהריים", evening: "ערב", night: "לילה" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "לפנה״צ", pm: "אחה״צ", midnight: "חצות", noon: "צהריים", morning: "בבוקר", afternoon: "בצהריים", evening: "בערב", night: "בלילה" }, abbreviated: { am: "לפנה״צ", pm: "אחה״צ", midnight: "חצות", noon: "צהריים", morning: "בבוקר", afternoon: "אחר הצהריים", evening: "בערב", night: "בלילה" }, wide: { am: "לפנה״צ", pm: "אחה״צ", midnight: "חצות", noon: "צהריים", morning: "בבוקר", afternoon: "אחר הצהריים", evening: "בערב", night: "בלילה" } }, defaultFormattingWidth: "wide" }) }, Ir = ["רא", "שנ", "של", "רב", "ח", "שי", "שב", "שמ", "ת", "ע"], ur = { code: "he", formatDistance: (A2, e2, t2) => {
  if ("xDays" === A2 && (null == t2 ? void 0 : t2.addSuffix) && e2 <= 2) return t2.comparison && t2.comparison > 0 ? 1 === e2 ? "מחר" : "מחרתיים" : 1 === e2 ? "אתמול" : "שלשום";
  let n2;
  const r2 = lr[A2];
  return n2 = "string" == typeof r2 ? r2 : 1 === e2 ? r2.one : 2 === e2 ? r2.two : r2.other.replace("{{count}}", String(e2)), (null == t2 ? void 0 : t2.addSuffix) ? t2.comparison && t2.comparison > 0 ? "בעוד " + n2 : "לפני " + n2 : n2;
}, formatLong: dr, formatRelative: (A2, e2, t2, n2) => Cr[A2], localize: cr, match: { ordinalNumber: xn({ matchPattern: /^(\d+|(ראשון|שני|שלישי|רביעי|חמישי|שישי|שביעי|שמיני|תשיעי|עשירי|ראשונה|שנייה|שלישית|רביעית|חמישית|שישית|שביעית|שמינית|תשיעית|עשירית))/i, parsePattern: /^(\d+|רא|שנ|של|רב|ח|שי|שב|שמ|ת|ע)/i, valueCallback: (A2) => {
  const e2 = parseInt(A2, 10);
  return isNaN(e2) ? Ir.indexOf(A2) + 1 : e2;
} }), era: Vn({ matchPatterns: { narrow: /^ל(ספירה|פנה״ס)/i, abbreviated: /^ל(ספירה|פנה״ס)/i, wide: /^ל(פני ה)?ספירה/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/^לפ/i, /^לס/i] }, defaultParseWidth: "any" }), quarter: Vn({ matchPatterns: { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^רבעון [1234]/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] }, defaultParseWidth: "any", valueCallback: (A2) => A2 + 1 }), month: Vn({ matchPatterns: { narrow: /^\d+/i, abbreviated: /^(ינו|פבר|מרץ|אפר|מאי|יוני|יולי|אוג|ספט|אוק|נוב|דצמ)׳?/i, wide: /^(ינואר|פברואר|מרץ|אפריל|מאי|יוני|יולי|אוגוסט|ספטמבר|אוקטובר|נובמבר|דצמבר)/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: [/^1$/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^7/i, /^8/i, /^9/i, /^10/i, /^11/i, /^12/i], any: [/^ינ/i, /^פ/i, /^מר/i, /^אפ/i, /^מא/i, /^יונ/i, /^יול/i, /^אוג/i, /^ס/i, /^אוק/i, /^נ/i, /^ד/i] }, defaultParseWidth: "any" }), day: Vn({ matchPatterns: { narrow: /^[אבגדהוש]׳/i, short: /^[אבגדהוש]׳/i, abbreviated: /^(שבת|יום (א|ב|ג|ד|ה|ו)׳)/i, wide: /^יום (ראשון|שני|שלישי|רביעי|חמישי|שישי|שבת)/i }, defaultMatchWidth: "wide", parsePatterns: { abbreviated: [/א׳$/i, /ב׳$/i, /ג׳$/i, /ד׳$/i, /ה׳$/i, /ו׳$/i, /^ש/i], wide: [/ן$/i, /ני$/i, /לישי$/i, /עי$/i, /מישי$/i, /שישי$/i, /ת$/i], any: [/^א/i, /^ב/i, /^ג/i, /^ד/i, /^ה/i, /^ו/i, /^ש/i] }, defaultParseWidth: "any" }), dayPeriod: Vn({ matchPatterns: { any: /^(אחר ה|ב)?(חצות|צהריים|בוקר|ערב|לילה|אחה״צ|לפנה״צ)/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^לפ/i, pm: /^אחה/i, midnight: /^ח/i, noon: /^צ/i, morning: /בוקר/i, afternoon: /בצ|אחר/i, evening: /ערב/i, night: /לילה/i } }, defaultParseWidth: "any" }) }, options: { weekStartsOn: 0, firstWeekContainsDate: 1 } }, fr = { lessThanXSeconds: { one: "meno di un secondo", other: "meno di {{count}} secondi" }, xSeconds: { one: "un secondo", other: "{{count}} secondi" }, halfAMinute: "alcuni secondi", lessThanXMinutes: { one: "meno di un minuto", other: "meno di {{count}} minuti" }, xMinutes: { one: "un minuto", other: "{{count}} minuti" }, aboutXHours: { one: "circa un'ora", other: "circa {{count}} ore" }, xHours: { one: "un'ora", other: "{{count}} ore" }, xDays: { one: "un giorno", other: "{{count}} giorni" }, aboutXWeeks: { one: "circa una settimana", other: "circa {{count}} settimane" }, xWeeks: { one: "una settimana", other: "{{count}} settimane" }, aboutXMonths: { one: "circa un mese", other: "circa {{count}} mesi" }, xMonths: { one: "un mese", other: "{{count}} mesi" }, aboutXYears: { one: "circa un anno", other: "circa {{count}} anni" }, xYears: { one: "un anno", other: "{{count}} anni" }, overXYears: { one: "più di un anno", other: "più di {{count}} anni" }, almostXYears: { one: "quasi un anno", other: "quasi {{count}} anni" } }, vr = { date: yn({ formats: { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd/MM/y" }, defaultWidth: "full" }), time: yn({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: yn({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) }, hr = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
function mr(A2) {
  return "'" + hr[A2] + " alle' p";
}
const pr = { lastWeek: (A2, e2, t2) => {
  const n2 = A2.getDay();
  return Kn(A2, e2, t2) ? mr(n2) : function(A3) {
    return 0 === A3 ? "'domenica scorsa alle' p" : "'" + hr[A3] + " scorso alle' p";
  }(n2);
}, yesterday: "'ieri alle' p", today: "'oggi alle' p", tomorrow: "'domani alle' p", nextWeek: (A2, e2, t2) => {
  const n2 = A2.getDay();
  return Kn(A2, e2, t2) ? mr(n2) : function(A3) {
    return 0 === A3 ? "'domenica prossima alle' p" : "'" + hr[A3] + " prossimo alle' p";
  }(n2);
}, other: "P" }, br = { code: "it", formatDistance: (A2, e2, t2) => {
  let n2;
  const r2 = fr[A2];
  return n2 = "string" == typeof r2 ? r2 : 1 === e2 ? r2.one : r2.other.replace("{{count}}", e2.toString()), (null == t2 ? void 0 : t2.addSuffix) ? t2.comparison && t2.comparison > 0 ? "tra " + n2 : n2 + " fa" : n2;
}, formatLong: vr, formatRelative: (A2, e2, t2, n2) => {
  const r2 = pr[A2];
  return "function" == typeof r2 ? r2(e2, t2, n2) : r2;
}, localize: { ordinalNumber: (A2, e2) => {
  const t2 = Number(A2);
  return String(t2);
}, era: Pn({ values: { narrow: ["aC", "dC"], abbreviated: ["a.C.", "d.C."], wide: ["avanti Cristo", "dopo Cristo"] }, defaultWidth: "wide" }), quarter: Pn({ values: { narrow: ["1", "2", "3", "4"], abbreviated: ["T1", "T2", "T3", "T4"], wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"] }, defaultWidth: "wide", argumentCallback: (A2) => A2 - 1 }), month: Pn({ values: { narrow: ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"], abbreviated: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"], wide: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"] }, defaultWidth: "wide" }), day: Pn({ values: { narrow: ["D", "L", "M", "M", "G", "V", "S"], short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"], abbreviated: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"], wide: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"] }, defaultWidth: "wide" }), dayPeriod: Pn({ values: { narrow: { am: "m.", pm: "p.", midnight: "mezzanotte", noon: "mezzogiorno", morning: "mattina", afternoon: "pomeriggio", evening: "sera", night: "notte" }, abbreviated: { am: "AM", pm: "PM", midnight: "mezzanotte", noon: "mezzogiorno", morning: "mattina", afternoon: "pomeriggio", evening: "sera", night: "notte" }, wide: { am: "AM", pm: "PM", midnight: "mezzanotte", noon: "mezzogiorno", morning: "mattina", afternoon: "pomeriggio", evening: "sera", night: "notte" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "m.", pm: "p.", midnight: "mezzanotte", noon: "mezzogiorno", morning: "di mattina", afternoon: "del pomeriggio", evening: "di sera", night: "di notte" }, abbreviated: { am: "AM", pm: "PM", midnight: "mezzanotte", noon: "mezzogiorno", morning: "di mattina", afternoon: "del pomeriggio", evening: "di sera", night: "di notte" }, wide: { am: "AM", pm: "PM", midnight: "mezzanotte", noon: "mezzogiorno", morning: "di mattina", afternoon: "del pomeriggio", evening: "di sera", night: "di notte" } }, defaultFormattingWidth: "wide" }) }, match: { ordinalNumber: xn({ matchPattern: /^(\d+)(º)?/i, parsePattern: /\d+/i, valueCallback: (A2) => parseInt(A2, 10) }), era: Vn({ matchPatterns: { narrow: /^(aC|dC)/i, abbreviated: /^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i, wide: /^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/^a/i, /^(d|e)/i] }, defaultParseWidth: "any" }), quarter: Vn({ matchPatterns: { narrow: /^[1234]/i, abbreviated: /^t[1234]/i, wide: /^[1234](º)? trimestre/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] }, defaultParseWidth: "any", valueCallback: (A2) => A2 + 1 }), month: Vn({ matchPatterns: { narrow: /^[gfmalsond]/i, abbreviated: /^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i, wide: /^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: [/^g/i, /^f/i, /^m/i, /^a/i, /^m/i, /^g/i, /^l/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ge/i, /^f/i, /^mar/i, /^ap/i, /^mag/i, /^gi/i, /^l/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i] }, defaultParseWidth: "any" }), day: Vn({ matchPatterns: { narrow: /^[dlmgvs]/i, short: /^(do|lu|ma|me|gi|ve|sa)/i, abbreviated: /^(dom|lun|mar|mer|gio|ven|sab)/i, wide: /^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^g/i, /^v/i, /^s/i], any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^g/i, /^v/i, /^s/i] }, defaultParseWidth: "any" }), dayPeriod: Vn({ matchPatterns: { narrow: /^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i, any: /^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^a/i, pm: /^p/i, midnight: /^mezza/i, noon: /^mezzo/i, morning: /mattina/i, afternoon: /pomeriggio/i, evening: /sera/i, night: /notte/i } }, defaultParseWidth: "any" }) }, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } }, wr = { lessThanXSeconds: { one: "1秒未満", other: "{{count}}秒未満", oneWithSuffix: "約1秒", otherWithSuffix: "約{{count}}秒" }, xSeconds: { one: "1秒", other: "{{count}}秒" }, halfAMinute: "30秒", lessThanXMinutes: { one: "1分未満", other: "{{count}}分未満", oneWithSuffix: "約1分", otherWithSuffix: "約{{count}}分" }, xMinutes: { one: "1分", other: "{{count}}分" }, aboutXHours: { one: "約1時間", other: "約{{count}}時間" }, xHours: { one: "1時間", other: "{{count}}時間" }, xDays: { one: "1日", other: "{{count}}日" }, aboutXWeeks: { one: "約1週間", other: "約{{count}}週間" }, xWeeks: { one: "1週間", other: "{{count}}週間" }, aboutXMonths: { one: "約1か月", other: "約{{count}}か月" }, xMonths: { one: "1か月", other: "{{count}}か月" }, aboutXYears: { one: "約1年", other: "約{{count}}年" }, xYears: { one: "1年", other: "{{count}}年" }, overXYears: { one: "1年以上", other: "{{count}}年以上" }, almostXYears: { one: "1年近く", other: "{{count}}年近く" } }, yr = { date: yn({ formats: { full: "y年M月d日EEEE", long: "y年M月d日", medium: "y/MM/dd", short: "y/MM/dd" }, defaultWidth: "full" }), time: yn({ formats: { full: "H時mm分ss秒 zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: yn({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) }, Pr = { lastWeek: "先週のeeeeのp", yesterday: "昨日のp", today: "今日のp", tomorrow: "明日のp", nextWeek: "翌週のeeeeのp", other: "P" }, Vr = { code: "ja", formatDistance: (A2, e2, t2) => {
  let n2;
  t2 = t2 || {};
  const r2 = wr[A2];
  return n2 = "string" == typeof r2 ? r2 : 1 === e2 ? t2.addSuffix && r2.oneWithSuffix ? r2.oneWithSuffix : r2.one : t2.addSuffix && r2.otherWithSuffix ? r2.otherWithSuffix.replace("{{count}}", String(e2)) : r2.other.replace("{{count}}", String(e2)), t2.addSuffix ? t2.comparison && t2.comparison > 0 ? n2 + "後" : n2 + "前" : n2;
}, formatLong: yr, formatRelative: (A2, e2, t2, n2) => Pr[A2], localize: { ordinalNumber: (A2, e2) => {
  const t2 = Number(A2);
  switch (String(null == e2 ? void 0 : e2.unit)) {
    case "year":
      return `${t2}年`;
    case "quarter":
      return `第${t2}四半期`;
    case "month":
      return `${t2}月`;
    case "week":
      return `第${t2}週`;
    case "date":
      return `${t2}日`;
    case "hour":
      return `${t2}時`;
    case "minute":
      return `${t2}分`;
    case "second":
      return `${t2}秒`;
    default:
      return `${t2}`;
  }
}, era: Pn({ values: { narrow: ["BC", "AC"], abbreviated: ["紀元前", "西暦"], wide: ["紀元前", "西暦"] }, defaultWidth: "wide" }), quarter: Pn({ values: { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["第1四半期", "第2四半期", "第3四半期", "第4四半期"] }, defaultWidth: "wide", argumentCallback: (A2) => Number(A2) - 1 }), month: Pn({ values: { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], abbreviated: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], wide: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"] }, defaultWidth: "wide" }), day: Pn({ values: { narrow: ["日", "月", "火", "水", "木", "金", "土"], short: ["日", "月", "火", "水", "木", "金", "土"], abbreviated: ["日", "月", "火", "水", "木", "金", "土"], wide: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"] }, defaultWidth: "wide" }), dayPeriod: Pn({ values: { narrow: { am: "午前", pm: "午後", midnight: "深夜", noon: "正午", morning: "朝", afternoon: "午後", evening: "夜", night: "深夜" }, abbreviated: { am: "午前", pm: "午後", midnight: "深夜", noon: "正午", morning: "朝", afternoon: "午後", evening: "夜", night: "深夜" }, wide: { am: "午前", pm: "午後", midnight: "深夜", noon: "正午", morning: "朝", afternoon: "午後", evening: "夜", night: "深夜" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "午前", pm: "午後", midnight: "深夜", noon: "正午", morning: "朝", afternoon: "午後", evening: "夜", night: "深夜" }, abbreviated: { am: "午前", pm: "午後", midnight: "深夜", noon: "正午", morning: "朝", afternoon: "午後", evening: "夜", night: "深夜" }, wide: { am: "午前", pm: "午後", midnight: "深夜", noon: "正午", morning: "朝", afternoon: "午後", evening: "夜", night: "深夜" } }, defaultFormattingWidth: "wide" }) }, match: { ordinalNumber: xn({ matchPattern: /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i, parsePattern: /\d+/i, valueCallback: function(A2) {
  return parseInt(A2, 10);
} }), era: Vn({ matchPatterns: { narrow: /^(B\.?C\.?|A\.?D\.?)/i, abbreviated: /^(紀元[前後]|西暦)/i, wide: /^(紀元[前後]|西暦)/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: [/^B/i, /^A/i], any: [/^(紀元前)/i, /^(西暦|紀元後)/i] }, defaultParseWidth: "any" }), quarter: Vn({ matchPatterns: { narrow: /^[1234]/i, abbreviated: /^Q[1234]/i, wide: /^第[1234一二三四１２３４]四半期/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i] }, defaultParseWidth: "any", valueCallback: (A2) => A2 + 1 }), month: Vn({ matchPatterns: { narrow: /^([123456789]|1[012])/, abbreviated: /^([123456789]|1[012])月/i, wide: /^([123456789]|1[012])月/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/^1\D/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/] }, defaultParseWidth: "any" }), day: Vn({ matchPatterns: { narrow: /^[日月火水木金土]/, short: /^[日月火水木金土]/, abbreviated: /^[日月火水木金土]/, wide: /^[日月火水木金土]曜日/ }, defaultMatchWidth: "wide", parsePatterns: { any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/] }, defaultParseWidth: "any" }), dayPeriod: Vn({ matchPatterns: { any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^(A|午前)/i, pm: /^(P|午後)/i, midnight: /^深夜|真夜中/i, noon: /^正午/i, morning: /^朝/i, afternoon: /^午後/i, evening: /^夜/i, night: /^深夜/i } }, defaultParseWidth: "any" }) }, options: { weekStartsOn: 0, firstWeekContainsDate: 1 } }, xr = { lessThanXSeconds: { one: "1초 미만", other: "{{count}}초 미만" }, xSeconds: { one: "1초", other: "{{count}}초" }, halfAMinute: "30초", lessThanXMinutes: { one: "1분 미만", other: "{{count}}분 미만" }, xMinutes: { one: "1분", other: "{{count}}분" }, aboutXHours: { one: "약 1시간", other: "약 {{count}}시간" }, xHours: { one: "1시간", other: "{{count}}시간" }, xDays: { one: "1일", other: "{{count}}일" }, aboutXWeeks: { one: "약 1주", other: "약 {{count}}주" }, xWeeks: { one: "1주", other: "{{count}}주" }, aboutXMonths: { one: "약 1개월", other: "약 {{count}}개월" }, xMonths: { one: "1개월", other: "{{count}}개월" }, aboutXYears: { one: "약 1년", other: "약 {{count}}년" }, xYears: { one: "1년", other: "{{count}}년" }, overXYears: { one: "1년 이상", other: "{{count}}년 이상" }, almostXYears: { one: "거의 1년", other: "거의 {{count}}년" } }, zr = { date: yn({ formats: { full: "y년 M월 d일 EEEE", long: "y년 M월 d일", medium: "y.MM.dd", short: "y.MM.dd" }, defaultWidth: "full" }), time: yn({ formats: { full: "a H시 mm분 ss초 zzzz", long: "a H:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: yn({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) }, Xr = { lastWeek: "'지난' eeee p", yesterday: "'어제' p", today: "'오늘' p", tomorrow: "'내일' p", nextWeek: "'다음' eeee p", other: "P" }, Mr = { code: "ko", formatDistance: (A2, e2, t2) => {
  let n2;
  const r2 = xr[A2];
  return n2 = "string" == typeof r2 ? r2 : 1 === e2 ? r2.one : r2.other.replace("{{count}}", e2.toString()), (null == t2 ? void 0 : t2.addSuffix) ? t2.comparison && t2.comparison > 0 ? n2 + " 후" : n2 + " 전" : n2;
}, formatLong: zr, formatRelative: (A2, e2, t2, n2) => Xr[A2], localize: { ordinalNumber: (A2, e2) => {
  const t2 = Number(A2);
  switch (String(null == e2 ? void 0 : e2.unit)) {
    case "minute":
    case "second":
      return String(t2);
    case "date":
      return t2 + "일";
    default:
      return t2 + "번째";
  }
}, era: Pn({ values: { narrow: ["BC", "AD"], abbreviated: ["BC", "AD"], wide: ["기원전", "서기"] }, defaultWidth: "wide" }), quarter: Pn({ values: { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1분기", "2분기", "3분기", "4분기"] }, defaultWidth: "wide", argumentCallback: (A2) => A2 - 1 }), month: Pn({ values: { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], abbreviated: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], wide: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"] }, defaultWidth: "wide" }), day: Pn({ values: { narrow: ["일", "월", "화", "수", "목", "금", "토"], short: ["일", "월", "화", "수", "목", "금", "토"], abbreviated: ["일", "월", "화", "수", "목", "금", "토"], wide: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"] }, defaultWidth: "wide" }), dayPeriod: Pn({ values: { narrow: { am: "오전", pm: "오후", midnight: "자정", noon: "정오", morning: "아침", afternoon: "오후", evening: "저녁", night: "밤" }, abbreviated: { am: "오전", pm: "오후", midnight: "자정", noon: "정오", morning: "아침", afternoon: "오후", evening: "저녁", night: "밤" }, wide: { am: "오전", pm: "오후", midnight: "자정", noon: "정오", morning: "아침", afternoon: "오후", evening: "저녁", night: "밤" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "오전", pm: "오후", midnight: "자정", noon: "정오", morning: "아침", afternoon: "오후", evening: "저녁", night: "밤" }, abbreviated: { am: "오전", pm: "오후", midnight: "자정", noon: "정오", morning: "아침", afternoon: "오후", evening: "저녁", night: "밤" }, wide: { am: "오전", pm: "오후", midnight: "자정", noon: "정오", morning: "아침", afternoon: "오후", evening: "저녁", night: "밤" } }, defaultFormattingWidth: "wide" }) }, match: { ordinalNumber: xn({ matchPattern: /^(\d+)(일|번째)?/i, parsePattern: /\d+/i, valueCallback: (A2) => parseInt(A2, 10) }), era: Vn({ matchPatterns: { narrow: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i, abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i, wide: /^(기원전|서기)/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/^(bc|기원전)/i, /^(ad|서기)/i] }, defaultParseWidth: "any" }), quarter: Vn({ matchPatterns: { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234]사?분기/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] }, defaultParseWidth: "any", valueCallback: (A2) => A2 + 1 }), month: Vn({ matchPatterns: { narrow: /^(1[012]|[123456789])/, abbreviated: /^(1[012]|[123456789])월/i, wide: /^(1[012]|[123456789])월/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/^1월?$/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/] }, defaultParseWidth: "any" }), day: Vn({ matchPatterns: { narrow: /^[일월화수목금토]/, short: /^[일월화수목금토]/, abbreviated: /^[일월화수목금토]/, wide: /^[일월화수목금토]요일/ }, defaultMatchWidth: "wide", parsePatterns: { any: [/^일/, /^월/, /^화/, /^수/, /^목/, /^금/, /^토/] }, defaultParseWidth: "any" }), dayPeriod: Vn({ matchPatterns: { any: /^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^(am|오전)/i, pm: /^(pm|오후)/i, midnight: /^자정/i, noon: /^정오/i, morning: /^아침/i, afternoon: /^오후/i, evening: /^저녁/i, night: /^밤/i } }, defaultParseWidth: "any" }) }, options: { weekStartsOn: 0, firstWeekContainsDate: 1 } }, Or = { lessThanXSeconds: { one: "minder dan een seconde", other: "minder dan {{count}} seconden" }, xSeconds: { one: "1 seconde", other: "{{count}} seconden" }, halfAMinute: "een halve minuut", lessThanXMinutes: { one: "minder dan een minuut", other: "minder dan {{count}} minuten" }, xMinutes: { one: "een minuut", other: "{{count}} minuten" }, aboutXHours: { one: "ongeveer 1 uur", other: "ongeveer {{count}} uur" }, xHours: { one: "1 uur", other: "{{count}} uur" }, xDays: { one: "1 dag", other: "{{count}} dagen" }, aboutXWeeks: { one: "ongeveer 1 week", other: "ongeveer {{count}} weken" }, xWeeks: { one: "1 week", other: "{{count}} weken" }, aboutXMonths: { one: "ongeveer 1 maand", other: "ongeveer {{count}} maanden" }, xMonths: { one: "1 maand", other: "{{count}} maanden" }, aboutXYears: { one: "ongeveer 1 jaar", other: "ongeveer {{count}} jaar" }, xYears: { one: "1 jaar", other: "{{count}} jaar" }, overXYears: { one: "meer dan 1 jaar", other: "meer dan {{count}} jaar" }, almostXYears: { one: "bijna 1 jaar", other: "bijna {{count}} jaar" } }, qr = { date: yn({ formats: { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd-MM-y" }, defaultWidth: "full" }), time: yn({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: yn({ formats: { full: "{{date}} 'om' {{time}}", long: "{{date}} 'om' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) }, Hr = { lastWeek: "'afgelopen' eeee 'om' p", yesterday: "'gisteren om' p", today: "'vandaag om' p", tomorrow: "'morgen om' p", nextWeek: "eeee 'om' p", other: "P" }, Wr = { code: "nl", formatDistance: (A2, e2, t2) => {
  let n2;
  const r2 = Or[A2];
  return n2 = "string" == typeof r2 ? r2 : 1 === e2 ? r2.one : r2.other.replace("{{count}}", String(e2)), (null == t2 ? void 0 : t2.addSuffix) ? t2.comparison && t2.comparison > 0 ? "over " + n2 : n2 + " geleden" : n2;
}, formatLong: qr, formatRelative: (A2, e2, t2, n2) => Hr[A2], localize: { ordinalNumber: (A2, e2) => Number(A2) + "e", era: Pn({ values: { narrow: ["v.C.", "n.C."], abbreviated: ["v.Chr.", "n.Chr."], wide: ["voor Christus", "na Christus"] }, defaultWidth: "wide" }), quarter: Pn({ values: { narrow: ["1", "2", "3", "4"], abbreviated: ["K1", "K2", "K3", "K4"], wide: ["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"] }, defaultWidth: "wide", argumentCallback: (A2) => A2 - 1 }), month: Pn({ values: { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["jan.", "feb.", "mrt.", "apr.", "mei", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."], wide: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"] }, defaultWidth: "wide" }), day: Pn({ values: { narrow: ["Z", "M", "D", "W", "D", "V", "Z"], short: ["zo", "ma", "di", "wo", "do", "vr", "za"], abbreviated: ["zon", "maa", "din", "woe", "don", "vri", "zat"], wide: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"] }, defaultWidth: "wide" }), dayPeriod: Pn({ values: { narrow: { am: "AM", pm: "PM", midnight: "middernacht", noon: "het middaguur", morning: "'s ochtends", afternoon: "'s middags", evening: "'s avonds", night: "'s nachts" }, abbreviated: { am: "AM", pm: "PM", midnight: "middernacht", noon: "het middaguur", morning: "'s ochtends", afternoon: "'s middags", evening: "'s avonds", night: "'s nachts" }, wide: { am: "AM", pm: "PM", midnight: "middernacht", noon: "het middaguur", morning: "'s ochtends", afternoon: "'s middags", evening: "'s avonds", night: "'s nachts" } }, defaultWidth: "wide" }) }, match: { ordinalNumber: xn({ matchPattern: /^(\d+)e?/i, parsePattern: /\d+/i, valueCallback: (A2) => parseInt(A2, 10) }), era: Vn({ matchPatterns: { narrow: /^([vn]\.? ?C\.?)/, abbreviated: /^([vn]\. ?Chr\.?)/, wide: /^((voor|na) Christus)/ }, defaultMatchWidth: "wide", parsePatterns: { any: [/^v/, /^n/] }, defaultParseWidth: "any" }), quarter: Vn({ matchPatterns: { narrow: /^[1234]/i, abbreviated: /^K[1234]/i, wide: /^[1234]e kwartaal/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] }, defaultParseWidth: "any", valueCallback: (A2) => A2 + 1 }), month: Vn({ matchPatterns: { narrow: /^[jfmasond]/i, abbreviated: /^(jan.|feb.|mrt.|apr.|mei|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i, wide: /^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^jan/i, /^feb/i, /^m(r|a)/i, /^apr/i, /^mei/i, /^jun/i, /^jul/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i] }, defaultParseWidth: "any" }), day: Vn({ matchPatterns: { narrow: /^[zmdwv]/i, short: /^(zo|ma|di|wo|do|vr|za)/i, abbreviated: /^(zon|maa|din|woe|don|vri|zat)/i, wide: /^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: [/^z/i, /^m/i, /^d/i, /^w/i, /^d/i, /^v/i, /^z/i], any: [/^zo/i, /^ma/i, /^di/i, /^wo/i, /^do/i, /^vr/i, /^za/i] }, defaultParseWidth: "any" }), dayPeriod: Vn({ matchPatterns: { any: /^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^am/i, pm: /^pm/i, midnight: /^middernacht/i, noon: /^het middaguur/i, morning: /ochtend/i, afternoon: /middag/i, evening: /avond/i, night: /nacht/i } }, defaultParseWidth: "any" }) }, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } }, Dr = { lessThanXSeconds: { one: "menos de um segundo", other: "menos de {{count}} segundos" }, xSeconds: { one: "1 segundo", other: "{{count}} segundos" }, halfAMinute: "meio minuto", lessThanXMinutes: { one: "menos de um minuto", other: "menos de {{count}} minutos" }, xMinutes: { one: "1 minuto", other: "{{count}} minutos" }, aboutXHours: { one: "cerca de 1 hora", other: "cerca de {{count}} horas" }, xHours: { one: "1 hora", other: "{{count}} horas" }, xDays: { one: "1 dia", other: "{{count}} dias" }, aboutXWeeks: { one: "cerca de 1 semana", other: "cerca de {{count}} semanas" }, xWeeks: { one: "1 semana", other: "{{count}} semanas" }, aboutXMonths: { one: "cerca de 1 mês", other: "cerca de {{count}} meses" }, xMonths: { one: "1 mês", other: "{{count}} meses" }, aboutXYears: { one: "cerca de 1 ano", other: "cerca de {{count}} anos" }, xYears: { one: "1 ano", other: "{{count}} anos" }, overXYears: { one: "mais de 1 ano", other: "mais de {{count}} anos" }, almostXYears: { one: "quase 1 ano", other: "quase {{count}} anos" } }, Fr = { date: yn({ formats: { full: "EEEE, d 'de' MMMM 'de' y", long: "d 'de' MMMM 'de' y", medium: "d MMM y", short: "dd/MM/yyyy" }, defaultWidth: "full" }), time: yn({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: yn({ formats: { full: "{{date}} 'às' {{time}}", long: "{{date}} 'às' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) }, jr = { lastWeek: (A2) => {
  const e2 = A2.getDay();
  return "'" + (0 === e2 || 6 === e2 ? "último" : "última") + "' eeee 'às' p";
}, yesterday: "'ontem às' p", today: "'hoje às' p", tomorrow: "'amanhã às' p", nextWeek: "eeee 'às' p", other: "P" }, Tr = { code: "pt-BR", formatDistance: (A2, e2, t2) => {
  let n2;
  const r2 = Dr[A2];
  return n2 = "string" == typeof r2 ? r2 : 1 === e2 ? r2.one : r2.other.replace("{{count}}", String(e2)), (null == t2 ? void 0 : t2.addSuffix) ? t2.comparison && t2.comparison > 0 ? "em " + n2 : "há " + n2 : n2;
}, formatLong: Fr, formatRelative: (A2, e2, t2, n2) => {
  const r2 = jr[A2];
  return "function" == typeof r2 ? r2(e2) : r2;
}, localize: { ordinalNumber: (A2, e2) => {
  const t2 = Number(A2);
  return "week" === (null == e2 ? void 0 : e2.unit) ? t2 + "ª" : t2 + "º";
}, era: Pn({ values: { narrow: ["AC", "DC"], abbreviated: ["AC", "DC"], wide: ["antes de cristo", "depois de cristo"] }, defaultWidth: "wide" }), quarter: Pn({ values: { narrow: ["1", "2", "3", "4"], abbreviated: ["T1", "T2", "T3", "T4"], wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"] }, defaultWidth: "wide", argumentCallback: (A2) => A2 - 1 }), month: Pn({ values: { narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], abbreviated: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"], wide: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"] }, defaultWidth: "wide" }), day: Pn({ values: { narrow: ["D", "S", "T", "Q", "Q", "S", "S"], short: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"], abbreviated: ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"], wide: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"] }, defaultWidth: "wide" }), dayPeriod: Pn({ values: { narrow: { am: "a", pm: "p", midnight: "mn", noon: "md", morning: "manhã", afternoon: "tarde", evening: "tarde", night: "noite" }, abbreviated: { am: "AM", pm: "PM", midnight: "meia-noite", noon: "meio-dia", morning: "manhã", afternoon: "tarde", evening: "tarde", night: "noite" }, wide: { am: "a.m.", pm: "p.m.", midnight: "meia-noite", noon: "meio-dia", morning: "manhã", afternoon: "tarde", evening: "tarde", night: "noite" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "a", pm: "p", midnight: "mn", noon: "md", morning: "da manhã", afternoon: "da tarde", evening: "da tarde", night: "da noite" }, abbreviated: { am: "AM", pm: "PM", midnight: "meia-noite", noon: "meio-dia", morning: "da manhã", afternoon: "da tarde", evening: "da tarde", night: "da noite" }, wide: { am: "a.m.", pm: "p.m.", midnight: "meia-noite", noon: "meio-dia", morning: "da manhã", afternoon: "da tarde", evening: "da tarde", night: "da noite" } }, defaultFormattingWidth: "wide" }) }, match: { ordinalNumber: xn({ matchPattern: /^(\d+)[ºªo]?/i, parsePattern: /\d+/i, valueCallback: (A2) => parseInt(A2, 10) }), era: Vn({ matchPatterns: { narrow: /^(ac|dc|a|d)/i, abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i, wide: /^(antes de cristo|depois de cristo)/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/^ac/i, /^dc/i], wide: [/^antes de cristo/i, /^depois de cristo/i] }, defaultParseWidth: "any" }), quarter: Vn({ matchPatterns: { narrow: /^[1234]/i, abbreviated: /^T[1234]/i, wide: /^[1234](º)? trimestre/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] }, defaultParseWidth: "any", valueCallback: (A2) => A2 + 1 }), month: Vn({ matchPatterns: { narrow: /^[jfmajsond]/i, abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i, wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^fev/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dez/i] }, defaultParseWidth: "any" }), day: Vn({ matchPatterns: { narrow: /^(dom|[23456]ª?|s[aá]b)/i, short: /^(dom|[23456]ª?|s[aá]b)/i, abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i, wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i }, defaultMatchWidth: "wide", parsePatterns: { short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i], narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i], any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i] }, defaultParseWidth: "any" }), dayPeriod: Vn({ matchPatterns: { narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i, any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^a/i, pm: /^p/i, midnight: /^mn|^meia[-\s]noite/i, noon: /^md|^meio[-\s]dia/i, morning: /manhã/i, afternoon: /tarde/i, evening: /tarde/i, night: /noite/i } }, defaultParseWidth: "any" }) }, options: { weekStartsOn: 0, firstWeekContainsDate: 1 } };
function Nr(A2, e2) {
  if (void 0 !== A2.one && 1 === e2) return A2.one;
  const t2 = e2 % 10, n2 = e2 % 100;
  return 1 === t2 && 11 !== n2 ? A2.singularNominative.replace("{{count}}", String(e2)) : t2 >= 2 && t2 <= 4 && (n2 < 10 || n2 > 20) ? A2.singularGenitive.replace("{{count}}", String(e2)) : A2.pluralGenitive.replace("{{count}}", String(e2));
}
function Kr(A2) {
  return (e2, t2) => (null == t2 ? void 0 : t2.addSuffix) ? t2.comparison && t2.comparison > 0 ? A2.future ? Nr(A2.future, e2) : "через " + Nr(A2.regular, e2) : A2.past ? Nr(A2.past, e2) : Nr(A2.regular, e2) + " назад" : Nr(A2.regular, e2);
}
const Yr = { lessThanXSeconds: Kr({ regular: { one: "меньше секунды", singularNominative: "меньше {{count}} секунды", singularGenitive: "меньше {{count}} секунд", pluralGenitive: "меньше {{count}} секунд" }, future: { one: "меньше, чем через секунду", singularNominative: "меньше, чем через {{count}} секунду", singularGenitive: "меньше, чем через {{count}} секунды", pluralGenitive: "меньше, чем через {{count}} секунд" } }), xSeconds: Kr({ regular: { singularNominative: "{{count}} секунда", singularGenitive: "{{count}} секунды", pluralGenitive: "{{count}} секунд" }, past: { singularNominative: "{{count}} секунду назад", singularGenitive: "{{count}} секунды назад", pluralGenitive: "{{count}} секунд назад" }, future: { singularNominative: "через {{count}} секунду", singularGenitive: "через {{count}} секунды", pluralGenitive: "через {{count}} секунд" } }), halfAMinute: (A2, e2) => (null == e2 ? void 0 : e2.addSuffix) ? e2.comparison && e2.comparison > 0 ? "через полминуты" : "полминуты назад" : "полминуты", lessThanXMinutes: Kr({ regular: { one: "меньше минуты", singularNominative: "меньше {{count}} минуты", singularGenitive: "меньше {{count}} минут", pluralGenitive: "меньше {{count}} минут" }, future: { one: "меньше, чем через минуту", singularNominative: "меньше, чем через {{count}} минуту", singularGenitive: "меньше, чем через {{count}} минуты", pluralGenitive: "меньше, чем через {{count}} минут" } }), xMinutes: Kr({ regular: { singularNominative: "{{count}} минута", singularGenitive: "{{count}} минуты", pluralGenitive: "{{count}} минут" }, past: { singularNominative: "{{count}} минуту назад", singularGenitive: "{{count}} минуты назад", pluralGenitive: "{{count}} минут назад" }, future: { singularNominative: "через {{count}} минуту", singularGenitive: "через {{count}} минуты", pluralGenitive: "через {{count}} минут" } }), aboutXHours: Kr({ regular: { singularNominative: "около {{count}} часа", singularGenitive: "около {{count}} часов", pluralGenitive: "около {{count}} часов" }, future: { singularNominative: "приблизительно через {{count}} час", singularGenitive: "приблизительно через {{count}} часа", pluralGenitive: "приблизительно через {{count}} часов" } }), xHours: Kr({ regular: { singularNominative: "{{count}} час", singularGenitive: "{{count}} часа", pluralGenitive: "{{count}} часов" } }), xDays: Kr({ regular: { singularNominative: "{{count}} день", singularGenitive: "{{count}} дня", pluralGenitive: "{{count}} дней" } }), aboutXWeeks: Kr({ regular: { singularNominative: "около {{count}} недели", singularGenitive: "около {{count}} недель", pluralGenitive: "около {{count}} недель" }, future: { singularNominative: "приблизительно через {{count}} неделю", singularGenitive: "приблизительно через {{count}} недели", pluralGenitive: "приблизительно через {{count}} недель" } }), xWeeks: Kr({ regular: { singularNominative: "{{count}} неделя", singularGenitive: "{{count}} недели", pluralGenitive: "{{count}} недель" } }), aboutXMonths: Kr({ regular: { singularNominative: "около {{count}} месяца", singularGenitive: "около {{count}} месяцев", pluralGenitive: "около {{count}} месяцев" }, future: { singularNominative: "приблизительно через {{count}} месяц", singularGenitive: "приблизительно через {{count}} месяца", pluralGenitive: "приблизительно через {{count}} месяцев" } }), xMonths: Kr({ regular: { singularNominative: "{{count}} месяц", singularGenitive: "{{count}} месяца", pluralGenitive: "{{count}} месяцев" } }), aboutXYears: Kr({ regular: { singularNominative: "около {{count}} года", singularGenitive: "около {{count}} лет", pluralGenitive: "около {{count}} лет" }, future: { singularNominative: "приблизительно через {{count}} год", singularGenitive: "приблизительно через {{count}} года", pluralGenitive: "приблизительно через {{count}} лет" } }), xYears: Kr({ regular: { singularNominative: "{{count}} год", singularGenitive: "{{count}} года", pluralGenitive: "{{count}} лет" } }), overXYears: Kr({ regular: { singularNominative: "больше {{count}} года", singularGenitive: "больше {{count}} лет", pluralGenitive: "больше {{count}} лет" }, future: { singularNominative: "больше, чем через {{count}} год", singularGenitive: "больше, чем через {{count}} года", pluralGenitive: "больше, чем через {{count}} лет" } }), almostXYears: Kr({ regular: { singularNominative: "почти {{count}} год", singularGenitive: "почти {{count}} года", pluralGenitive: "почти {{count}} лет" }, future: { singularNominative: "почти через {{count}} год", singularGenitive: "почти через {{count}} года", pluralGenitive: "почти через {{count}} лет" } }) }, Gr = { date: yn({ formats: { full: "EEEE, d MMMM y 'г.'", long: "d MMMM y 'г.'", medium: "d MMM y 'г.'", short: "dd.MM.y" }, defaultWidth: "full" }), time: yn({ formats: { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: yn({ formats: { any: "{{date}}, {{time}}" }, defaultWidth: "any" }) }, kr = ["воскресенье", "понедельник", "вторник", "среду", "четверг", "пятницу", "субботу"];
function Ur(A2) {
  const e2 = kr[A2];
  return 2 === A2 ? "'во " + e2 + " в' p" : "'в " + e2 + " в' p";
}
const Zr = { lastWeek: (A2, e2, t2) => {
  const n2 = A2.getDay();
  return Kn(A2, e2, t2) ? Ur(n2) : function(A3) {
    const e3 = kr[A3];
    switch (A3) {
      case 0:
        return "'в прошлое " + e3 + " в' p";
      case 1:
      case 2:
      case 4:
        return "'в прошлый " + e3 + " в' p";
      case 3:
      case 5:
      case 6:
        return "'в прошлую " + e3 + " в' p";
    }
  }(n2);
}, yesterday: "'вчера в' p", today: "'сегодня в' p", tomorrow: "'завтра в' p", nextWeek: (A2, e2, t2) => {
  const n2 = A2.getDay();
  return Kn(A2, e2, t2) ? Ur(n2) : function(A3) {
    const e3 = kr[A3];
    switch (A3) {
      case 0:
        return "'в следующее " + e3 + " в' p";
      case 1:
      case 2:
      case 4:
        return "'в следующий " + e3 + " в' p";
      case 3:
      case 5:
      case 6:
        return "'в следующую " + e3 + " в' p";
    }
  }(n2);
}, other: "P" }, Lr = { code: "ru", formatDistance: (A2, e2, t2) => Yr[A2](e2, t2), formatLong: Gr, formatRelative: (A2, e2, t2, n2) => {
  const r2 = Zr[A2];
  return "function" == typeof r2 ? r2(e2, t2, n2) : r2;
}, localize: { ordinalNumber: (A2, e2) => {
  const t2 = Number(A2), n2 = null == e2 ? void 0 : e2.unit;
  let r2;
  return r2 = "date" === n2 ? "-е" : "week" === n2 || "minute" === n2 || "second" === n2 ? "-я" : "-й", t2 + r2;
}, era: Pn({ values: { narrow: ["до н.э.", "н.э."], abbreviated: ["до н. э.", "н. э."], wide: ["до нашей эры", "нашей эры"] }, defaultWidth: "wide" }), quarter: Pn({ values: { narrow: ["1", "2", "3", "4"], abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."], wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"] }, defaultWidth: "wide", argumentCallback: (A2) => A2 - 1 }), month: Pn({ values: { narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"], abbreviated: ["янв.", "фев.", "март", "апр.", "май", "июнь", "июль", "авг.", "сент.", "окт.", "нояб.", "дек."], wide: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"] }, defaultWidth: "wide", formattingValues: { narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"], abbreviated: ["янв.", "фев.", "мар.", "апр.", "мая", "июн.", "июл.", "авг.", "сент.", "окт.", "нояб.", "дек."], wide: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"] }, defaultFormattingWidth: "wide" }), day: Pn({ values: { narrow: ["В", "П", "В", "С", "Ч", "П", "С"], short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"], abbreviated: ["вск", "пнд", "втр", "срд", "чтв", "птн", "суб"], wide: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"] }, defaultWidth: "wide" }), dayPeriod: Pn({ values: { narrow: { am: "ДП", pm: "ПП", midnight: "полн.", noon: "полд.", morning: "утро", afternoon: "день", evening: "веч.", night: "ночь" }, abbreviated: { am: "ДП", pm: "ПП", midnight: "полн.", noon: "полд.", morning: "утро", afternoon: "день", evening: "веч.", night: "ночь" }, wide: { am: "ДП", pm: "ПП", midnight: "полночь", noon: "полдень", morning: "утро", afternoon: "день", evening: "вечер", night: "ночь" } }, defaultWidth: "any", formattingValues: { narrow: { am: "ДП", pm: "ПП", midnight: "полн.", noon: "полд.", morning: "утра", afternoon: "дня", evening: "веч.", night: "ночи" }, abbreviated: { am: "ДП", pm: "ПП", midnight: "полн.", noon: "полд.", morning: "утра", afternoon: "дня", evening: "веч.", night: "ночи" }, wide: { am: "ДП", pm: "ПП", midnight: "полночь", noon: "полдень", morning: "утра", afternoon: "дня", evening: "вечера", night: "ночи" } }, defaultFormattingWidth: "wide" }) }, match: { ordinalNumber: xn({ matchPattern: /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i, parsePattern: /\d+/i, valueCallback: (A2) => parseInt(A2, 10) }), era: Vn({ matchPatterns: { narrow: /^((до )?н\.?\s?э\.?)/i, abbreviated: /^((до )?н\.?\s?э\.?)/i, wide: /^(до нашей эры|нашей эры|наша эра)/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/^д/i, /^н/i] }, defaultParseWidth: "any" }), quarter: Vn({ matchPatterns: { narrow: /^[1234]/i, abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i, wide: /^[1234](-?[ыои]?й?)? квартал/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] }, defaultParseWidth: "any", valueCallback: (A2) => A2 + 1 }), month: Vn({ matchPatterns: { narrow: /^[яфмаисонд]/i, abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i, wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: [/^я/i, /^ф/i, /^м/i, /^а/i, /^м/i, /^и/i, /^и/i, /^а/i, /^с/i, /^о/i, /^н/i, /^я/i], any: [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^ав/i, /^с/i, /^о/i, /^н/i, /^д/i] }, defaultParseWidth: "any" }), day: Vn({ matchPatterns: { narrow: /^[впсч]/i, short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i, abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i, wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: [/^в/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i], any: [/^в[ос]/i, /^п[он]/i, /^в/i, /^ср/i, /^ч/i, /^п[ят]/i, /^с[уб]/i] }, defaultParseWidth: "any" }), dayPeriod: Vn({ matchPatterns: { narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i, abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i, wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i }, defaultMatchWidth: "wide", parsePatterns: { any: { am: /^дп/i, pm: /^пп/i, midnight: /^полн/i, noon: /^полд/i, morning: /^у/i, afternoon: /^д[ен]/i, evening: /^в/i, night: /^н/i } }, defaultParseWidth: "any" }) }, options: { weekStartsOn: 1, firstWeekContainsDate: 1 } }, Rr = { lessThanXSeconds: { one: "不到 1 秒", other: "不到 {{count}} 秒" }, xSeconds: { one: "1 秒", other: "{{count}} 秒" }, halfAMinute: "半分钟", lessThanXMinutes: { one: "不到 1 分钟", other: "不到 {{count}} 分钟" }, xMinutes: { one: "1 分钟", other: "{{count}} 分钟" }, xHours: { one: "1 小时", other: "{{count}} 小时" }, aboutXHours: { one: "大约 1 小时", other: "大约 {{count}} 小时" }, xDays: { one: "1 天", other: "{{count}} 天" }, aboutXWeeks: { one: "大约 1 个星期", other: "大约 {{count}} 个星期" }, xWeeks: { one: "1 个星期", other: "{{count}} 个星期" }, aboutXMonths: { one: "大约 1 个月", other: "大约 {{count}} 个月" }, xMonths: { one: "1 个月", other: "{{count}} 个月" }, aboutXYears: { one: "大约 1 年", other: "大约 {{count}} 年" }, xYears: { one: "1 年", other: "{{count}} 年" }, overXYears: { one: "超过 1 年", other: "超过 {{count}} 年" }, almostXYears: { one: "将近 1 年", other: "将近 {{count}} 年" } }, Sr = { date: yn({ formats: { full: "y'年'M'月'd'日' EEEE", long: "y'年'M'月'd'日'", medium: "yyyy-MM-dd", short: "yy-MM-dd" }, defaultWidth: "full" }), time: yn({ formats: { full: "zzzz a h:mm:ss", long: "z a h:mm:ss", medium: "a h:mm:ss", short: "a h:mm" }, defaultWidth: "full" }), dateTime: yn({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };
function Jr(A2, e2, t2) {
  const n2 = "eeee p";
  return Kn(A2, e2, t2) ? n2 : A2.getTime() > e2.getTime() ? "'下个'" + n2 : "'上个'" + n2;
}
const $r = { lastWeek: Jr, yesterday: "'昨天' p", today: "'今天' p", tomorrow: "'明天' p", nextWeek: Jr, other: "PP p" }, _r = { code: "zh-CN", formatDistance: (A2, e2, t2) => {
  let n2;
  const r2 = Rr[A2];
  return n2 = "string" == typeof r2 ? r2 : 1 === e2 ? r2.one : r2.other.replace("{{count}}", String(e2)), (null == t2 ? void 0 : t2.addSuffix) ? t2.comparison && t2.comparison > 0 ? n2 + "内" : n2 + "前" : n2;
}, formatLong: Sr, formatRelative: (A2, e2, t2, n2) => {
  const r2 = $r[A2];
  return "function" == typeof r2 ? r2(e2, t2, n2) : r2;
}, localize: { ordinalNumber: (A2, e2) => {
  const t2 = Number(A2);
  switch (null == e2 ? void 0 : e2.unit) {
    case "date":
      return t2.toString() + "日";
    case "hour":
      return t2.toString() + "时";
    case "minute":
      return t2.toString() + "分";
    case "second":
      return t2.toString() + "秒";
    default:
      return "第 " + t2.toString();
  }
}, era: Pn({ values: { narrow: ["前", "公元"], abbreviated: ["前", "公元"], wide: ["公元前", "公元"] }, defaultWidth: "wide" }), quarter: Pn({ values: { narrow: ["1", "2", "3", "4"], abbreviated: ["第一季", "第二季", "第三季", "第四季"], wide: ["第一季度", "第二季度", "第三季度", "第四季度"] }, defaultWidth: "wide", argumentCallback: (A2) => A2 - 1 }), month: Pn({ values: { narrow: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"], abbreviated: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], wide: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, defaultWidth: "wide" }), day: Pn({ values: { narrow: ["日", "一", "二", "三", "四", "五", "六"], short: ["日", "一", "二", "三", "四", "五", "六"], abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"] }, defaultWidth: "wide" }), dayPeriod: Pn({ values: { narrow: { am: "上", pm: "下", midnight: "凌晨", noon: "午", morning: "早", afternoon: "下午", evening: "晚", night: "夜" }, abbreviated: { am: "上午", pm: "下午", midnight: "凌晨", noon: "中午", morning: "早晨", afternoon: "中午", evening: "晚上", night: "夜间" }, wide: { am: "上午", pm: "下午", midnight: "凌晨", noon: "中午", morning: "早晨", afternoon: "中午", evening: "晚上", night: "夜间" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "上", pm: "下", midnight: "凌晨", noon: "午", morning: "早", afternoon: "下午", evening: "晚", night: "夜" }, abbreviated: { am: "上午", pm: "下午", midnight: "凌晨", noon: "中午", morning: "早晨", afternoon: "中午", evening: "晚上", night: "夜间" }, wide: { am: "上午", pm: "下午", midnight: "凌晨", noon: "中午", morning: "早晨", afternoon: "中午", evening: "晚上", night: "夜间" } }, defaultFormattingWidth: "wide" }) }, match: { ordinalNumber: xn({ matchPattern: /^(第\s*)?\d+(日|时|分|秒)?/i, parsePattern: /\d+/i, valueCallback: (A2) => parseInt(A2, 10) }), era: Vn({ matchPatterns: { narrow: /^(前)/i, abbreviated: /^(前)/i, wide: /^(公元前|公元)/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/^(前)/i, /^(公元)/i] }, defaultParseWidth: "any" }), quarter: Vn({ matchPatterns: { narrow: /^[1234]/i, abbreviated: /^第[一二三四]刻/i, wide: /^第[一二三四]刻钟/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i] }, defaultParseWidth: "any", valueCallback: (A2) => A2 + 1 }), month: Vn({ matchPatterns: { narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i, abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i, wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: [/^一/i, /^二/i, /^三/i, /^四/i, /^五/i, /^六/i, /^七/i, /^八/i, /^九/i, /^十(?!(一|二))/i, /^十一/i, /^十二/i], any: [/^一|1/i, /^二|2/i, /^三|3/i, /^四|4/i, /^五|5/i, /^六|6/i, /^七|7/i, /^八|8/i, /^九|9/i, /^十(?!(一|二))|10/i, /^十一|11/i, /^十二|12/i] }, defaultParseWidth: "any" }), day: Vn({ matchPatterns: { narrow: /^[一二三四五六日]/i, short: /^[一二三四五六日]/i, abbreviated: /^周[一二三四五六日]/i, wide: /^星期[一二三四五六日]/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i] }, defaultParseWidth: "any" }), dayPeriod: Vn({ matchPatterns: { any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^上午?/i, pm: /^下午?/i, midnight: /^午夜/i, noon: /^[中正]午/i, morning: /^早上/i, afternoon: /^下午/i, evening: /^晚上?/i, night: /^凌晨/i } }, defaultParseWidth: "any" }) }, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } }, Ai = { "en-US": { decimalSeparator: ".", thousandsSeparator: ",", dateFormat: "MMM d, yyyy", direction: "ltr", language: "en", label: "USA (en-US)", defaultCurrency: "USD", isUpSuccess: true }, "en-GB": { decimalSeparator: ".", thousandsSeparator: ",", dateFormat: "d MMM yyyy", direction: "ltr", language: "en", label: "United Kingdom (en-GB)", defaultCurrency: "GBP", isUpSuccess: true }, "en-CA": { decimalSeparator: ".", thousandsSeparator: ",", dateFormat: "yyyy-MM-dd", direction: "ltr", language: "en", label: "Canada (en-CA)", defaultCurrency: "CAD", isUpSuccess: true }, "en-AU": { decimalSeparator: ".", thousandsSeparator: ",", dateFormat: "d/M/yyyy", direction: "ltr", language: "en", label: "Australia (en-AU)", defaultCurrency: "AUD", isUpSuccess: true }, "en-IN": { decimalSeparator: ".", thousandsSeparator: ",", dateFormat: "dd-MM-yyyy", direction: "ltr", language: "en", label: "India (en-IN)", defaultCurrency: "INR", isUpSuccess: true }, "he-IL": { decimalSeparator: ".", thousandsSeparator: ",", dateFormat: "d/M/yyyy", direction: "rtl", language: "he", label: "Israel (he-IL)", defaultCurrency: "ILS", isUpSuccess: true }, "es-ES": { decimalSeparator: ",", thousandsSeparator: ".", dateFormat: "dd/MM/yyyy", direction: "ltr", language: "es", label: "Spain (es-ES)", defaultCurrency: "EUR", isUpSuccess: true }, "es-MX": { decimalSeparator: ".", thousandsSeparator: ",", dateFormat: "dd/MM/yyyy", direction: "ltr", language: "es", label: "Mexico (es-MX)", defaultCurrency: "MXN", isUpSuccess: true }, "fr-FR": { decimalSeparator: ",", thousandsSeparator: " ", dateFormat: "dd/MM/yyyy", direction: "ltr", language: "fr", label: "France (fr-FR)", defaultCurrency: "EUR", isUpSuccess: true }, "fr-CA": { decimalSeparator: ",", thousandsSeparator: " ", dateFormat: "yyyy-MM-dd", direction: "ltr", language: "fr", label: "Canada (fr-CA)", defaultCurrency: "CAD", isUpSuccess: true }, "de-DE": { decimalSeparator: ",", thousandsSeparator: ".", dateFormat: "dd.MM.yyyy", direction: "ltr", language: "de", label: "Germany (de-DE)", defaultCurrency: "EUR", isUpSuccess: true }, "it-IT": { decimalSeparator: ",", thousandsSeparator: ".", dateFormat: "dd/MM/yyyy", direction: "ltr", language: "it", label: "Italy (it-IT)", defaultCurrency: "EUR", isUpSuccess: true }, "pt-BR": { decimalSeparator: ",", thousandsSeparator: ".", dateFormat: "dd/MM/yyyy", direction: "ltr", language: "pt", label: "Brazil (pt-BR)", defaultCurrency: "BRL", isUpSuccess: true }, "pt-PT": { decimalSeparator: ",", thousandsSeparator: ".", dateFormat: "dd/MM/yyyy", direction: "ltr", language: "pt", label: "Portugal (pt-PT)", defaultCurrency: "EUR", isUpSuccess: true }, "zh-CN": { decimalSeparator: ".", thousandsSeparator: ",", dateFormat: "yyyy/M/d", direction: "ltr", language: "zh", label: "China (zh-CN)", defaultCurrency: "CNY", isUpSuccess: false }, "zh-TW": { decimalSeparator: ".", thousandsSeparator: ",", dateFormat: "yyyy/M/d", direction: "ltr", language: "zh", label: "Taiwan (zh-TW)", defaultCurrency: "TWD", isUpSuccess: false }, "ja-JP": { decimalSeparator: ".", thousandsSeparator: ",", dateFormat: "yyyy/MM/dd", direction: "ltr", language: "ja", label: "Japan (ja-JP)", defaultCurrency: "JPY", isUpSuccess: false }, "ko-KR": { decimalSeparator: ".", thousandsSeparator: ",", dateFormat: "yyyy. MM. dd.", direction: "ltr", language: "ko", label: "South Korea (ko-KR)", defaultCurrency: "KRW", isUpSuccess: false }, "ru-RU": { decimalSeparator: ",", thousandsSeparator: " ", dateFormat: "dd.MM.yyyy", direction: "ltr", language: "ru", label: "Russia (ru-RU)", defaultCurrency: "RUB", isUpSuccess: true }, "ar-SA": { decimalSeparator: ".", thousandsSeparator: ",", dateFormat: "dd/MM/yyyy", direction: "rtl", language: "ar", label: "Saudi Arabia (ar-SA)", defaultCurrency: "SAR", isUpSuccess: true }, "ar-EG": { decimalSeparator: ".", thousandsSeparator: ",", dateFormat: "dd/MM/yyyy", direction: "rtl", language: "ar", label: "Egypt (ar-EG)", defaultCurrency: "EGP", isUpSuccess: true }, "nl-NL": { decimalSeparator: ",", thousandsSeparator: ".", dateFormat: "d-M-yyyy", direction: "ltr", language: "nl", label: "Netherlands (nl-NL)", defaultCurrency: "EUR", isUpSuccess: true } }, ei = [{ code: "USD", label: "US Dollar ($)" }, { code: "EUR", label: "Euro (€)" }, { code: "ILS", label: "Israeli Shekel (₪)" }, { code: "GBP", label: "British Pound (£)" }, { code: "JPY", label: "Japanese Yen (¥)" }, { code: "CNY", label: "Chinese Yuan (¥)" }, { code: "CAD", label: "Canadian Dollar ($)" }, { code: "AUD", label: "Australian Dollar ($)" }, { code: "INR", label: "Indian Rupee (₹)" }, { code: "KRW", label: "South Korean Won (₩)" }, { code: "RUB", label: "Russian Ruble (₽)" }, { code: "BRL", label: "Brazilian Real (R$)" }, { code: "SAR", label: "Saudi Riyal (﷼)" }, { code: "MXN", label: "Mexican Peso ($)" }, { code: "TWD", label: "Taiwan Dollar (NT$)" }, { code: "EGP", label: "Egyptian Pound (EGP)" }], ti = [{ code: "en", label: "English (English)" }, { code: "he", label: "עברית (Hebrew)" }, { code: "es", label: "Español (Spanish)" }, { code: "fr", label: "Français (French)" }, { code: "de", label: "Deutsch (German)" }, { code: "it", label: "Italiano (Italian)" }, { code: "pt", label: "Português (Portuguese)" }, { code: "zh", label: "中文 (Chinese)" }, { code: "ja", label: "日本語 (Japanese)" }, { code: "ko", label: "한국어 (Korean)" }, { code: "ru", label: "Русский (Russian)" }, { code: "ar", label: "العربية (Arabic)" }, { code: "nl", label: "Nederlands (Dutch)" }], ni = (A2) => Ai[A2] || Ai["en-US"], ri = { en: { symbol_placeholder: "Symbol", settings: "Settings", download: "Download", search: "Search", range: "Range", export: "Export", refresh: "Refresh", toggle_theme: "Toggle Theme", draw_line: "Draw Line", draw_rect: "Draw Rectangle", draw_circle: "Draw Circle", draw_triangle: "Draw Triangle", draw_angle: "Draw angle — drag from vertex along first ray, release, then drag second ray", select: "Select", edit_shape: "Edit Shape", open: "Open", high: "High", low: "Low", close: "Close", volume: "Volume", change: "Change", pnl: "PnL", yield: "Yield", basis_points: "bps", volatility: "Volatility" }, he: { symbol_placeholder: "סימול", settings: "הגדרות", download: "הורדה", search: "חיפוש", range: "טווח", export: "ייצוא", refresh: "רענון", toggle_theme: "שינוי ערכת נושא", draw_line: "ציור קו", draw_rect: "ציור מלבן", draw_circle: "ציור עיגול", draw_triangle: "ציור משולש", draw_angle: "זווית — גרירה מקודקוד לאורך הזרוע הראשונה, שחרור, ואז גרירת הזרוע השנייה", select: "בחירה", edit_shape: "עריכת צורה", open: "פתיחה", high: "גבוה", low: "נמוך", close: "סגירה", volume: "מחזור", change: "שינוי", pnl: "רווח/הפסד", yield: "תשואה", basis_points: "נק׳ בסיס", volatility: "תנודתיות" }, es: { symbol_placeholder: "Símbolo", settings: "Configuraciones", download: "Descargar", search: "Buscar", range: "Rango", export: "Exportar", refresh: "Refrescar", toggle_theme: "Cambiar Tema" }, fr: { symbol_placeholder: "Symbole", settings: "Paramètres", download: "Télécharger", search: "Rechercher", range: "Plage", export: "Exporter", refresh: "Rafraîchir", toggle_theme: "Changer de thème" }, de: { symbol_placeholder: "Symbol", settings: "Einstellungen", download: "Herunterladen", search: "Suchen", range: "Bereich", export: "Exportieren", refresh: "Aktualisieren", toggle_theme: "Design umschalten" }, it: { symbol_placeholder: "Simbolo", settings: "Impostazioni", download: "Scarica", search: "Cerca", range: "Intervallo", export: "Esporta", refresh: "Aggiorna", toggle_theme: "Cambia Tema" }, pt: { symbol_placeholder: "Símbolo", settings: "Configurações", download: "Baixar", search: "Pesquisar", range: "Intervalo", export: "Exportar", refresh: "Atualizar", toggle_theme: "Mudar Tema" }, zh: { symbol_placeholder: "代码", settings: "设置", download: "下载", search: "搜索", range: "范围", export: "导出", refresh: "刷新", toggle_theme: "切换主题" }, ja: { symbol_placeholder: "シンボル", settings: "設定", download: "ダウンロード", search: "検索", range: "範囲", export: "エクスポート", refresh: "更新", toggle_theme: "テーマを切り替える" }, ko: { symbol_placeholder: "심볼", settings: "설정", download: "다운로드", search: "검색", range: "범위", export: "내보내기", refresh: "새로고침", toggle_theme: "테마 전환" }, ru: { symbol_placeholder: "Символ", settings: "Настройки", download: "Скачать", search: "Поиск", range: "Диапазон", export: "Экспорт", refresh: "Обновить", toggle_theme: "Сменить тему" }, ar: { symbol_placeholder: "رمز", settings: "الإعدادات", download: "تحميل", search: "بحث", range: "نطاق", export: "تصدير", refresh: "تحديث", toggle_theme: "تبדيل المظهر" }, nl: { symbol_placeholder: "Symbool", settings: "Instellingen", download: "Downloaden", search: "Zoeken", range: "Bereik", export: "Exporteren", refresh: "Verversen", toggle_theme: "Thema omschakelen" } }, ii = (A2, e2) => {
  var t2, n2;
  return (null == (t2 = ri[e2]) ? void 0 : t2[A2]) || (null == (n2 = ri.en) ? void 0 : n2[A2]) || A2;
}, ai = (A2) => {
  const e2 = A2.locale || "en-US", t2 = ni(e2);
  return { ...t2, decimalSeparator: A2.decimalSeparator ?? t2.decimalSeparator, thousandsSeparator: A2.thousandsSeparator ?? t2.thousandsSeparator, dateFormat: A2.dateFormat ?? t2.dateFormat, locale: e2, language: A2.language || t2.language, currency: A2.currency || t2.defaultCurrency || "USD", useCurrency: "boolean" == typeof A2.useCurrency && A2.useCurrency };
};
function Bi(A2, e2) {
  return Nn(A2, { ...e2, weekStartsOn: 1 });
}
function Qi(A2, e2) {
  const t2 = Tn(A2, void 0 ), n2 = t2.getFullYear(), r2 = Wn(t2, 0);
  r2.setFullYear(n2 + 1, 0, 4), r2.setHours(0, 0, 0, 0);
  const i2 = Bi(r2), a2 = Wn(t2, 0);
  a2.setFullYear(n2, 0, 4), a2.setHours(0, 0, 0, 0);
  const B2 = Bi(a2);
  return t2.getTime() >= i2.getTime() ? n2 + 1 : t2.getTime() >= B2.getTime() ? n2 : n2 - 1;
}
function oi(A2) {
  const e2 = Tn(A2), t2 = new Date(Date.UTC(e2.getFullYear(), e2.getMonth(), e2.getDate(), e2.getHours(), e2.getMinutes(), e2.getSeconds(), e2.getMilliseconds()));
  return t2.setUTCFullYear(e2.getFullYear()), +A2 - +t2;
}
function gi(A2, e2) {
  const t2 = Tn(A2, void 0 );
  return t2.setHours(0, 0, 0, 0), t2;
}
function Ei(A2, e2) {
  var t2, n2, r2, i2;
  const a2 = Tn(A2, null == e2 ? void 0 : e2.in), B2 = a2.getFullYear(), Q2 = jn(), o2 = (null == e2 ? void 0 : e2.firstWeekContainsDate) ?? (null == (n2 = null == (t2 = null == e2 ? void 0 : e2.locale) ? void 0 : t2.options) ? void 0 : n2.firstWeekContainsDate) ?? Q2.firstWeekContainsDate ?? (null == (i2 = null == (r2 = Q2.locale) ? void 0 : r2.options) ? void 0 : i2.firstWeekContainsDate) ?? 1, g2 = Wn((null == e2 ? void 0 : e2.in) || A2, 0);
  g2.setFullYear(B2 + 1, 0, o2), g2.setHours(0, 0, 0, 0);
  const E2 = Nn(g2, e2), s2 = Wn((null == e2 ? void 0 : e2.in) || A2, 0);
  s2.setFullYear(B2, 0, o2), s2.setHours(0, 0, 0, 0);
  const l2 = Nn(s2, e2);
  return +a2 >= +E2 ? B2 + 1 : +a2 >= +l2 ? B2 : B2 - 1;
}
function si(A2, e2) {
  return (A2 < 0 ? "-" : "") + Math.abs(A2).toString().padStart(e2, "0");
}
const li = { y(A2, e2) {
  const t2 = A2.getFullYear(), n2 = t2 > 0 ? t2 : 1 - t2;
  return si("yy" === e2 ? n2 % 100 : n2, e2.length);
}, M(A2, e2) {
  const t2 = A2.getMonth();
  return "M" === e2 ? String(t2 + 1) : si(t2 + 1, 2);
}, d: (A2, e2) => si(A2.getDate(), e2.length), a(A2, e2) {
  const t2 = A2.getHours() / 12 >= 1 ? "pm" : "am";
  switch (e2) {
    case "a":
    case "aa":
      return t2.toUpperCase();
    case "aaa":
      return t2;
    case "aaaaa":
      return t2[0];
    default:
      return "am" === t2 ? "a.m." : "p.m.";
  }
}, h: (A2, e2) => si(A2.getHours() % 12 || 12, e2.length), H: (A2, e2) => si(A2.getHours(), e2.length), m: (A2, e2) => si(A2.getMinutes(), e2.length), s: (A2, e2) => si(A2.getSeconds(), e2.length), S(A2, e2) {
  const t2 = e2.length, n2 = A2.getMilliseconds();
  return si(Math.trunc(n2 * Math.pow(10, t2 - 3)), e2.length);
} }, di = { G: function(A2, e2, t2) {
  const n2 = A2.getFullYear() > 0 ? 1 : 0;
  switch (e2) {
    case "G":
    case "GG":
    case "GGG":
      return t2.era(n2, { width: "abbreviated" });
    case "GGGGG":
      return t2.era(n2, { width: "narrow" });
    default:
      return t2.era(n2, { width: "wide" });
  }
}, y: function(A2, e2, t2) {
  if ("yo" === e2) {
    const e3 = A2.getFullYear(), n2 = e3 > 0 ? e3 : 1 - e3;
    return t2.ordinalNumber(n2, { unit: "year" });
  }
  return li.y(A2, e2);
}, Y: function(A2, e2, t2, n2) {
  const r2 = Ei(A2, n2), i2 = r2 > 0 ? r2 : 1 - r2;
  return "YY" === e2 ? si(i2 % 100, 2) : "Yo" === e2 ? t2.ordinalNumber(i2, { unit: "year" }) : si(i2, e2.length);
}, R: function(A2, e2) {
  return si(Qi(A2), e2.length);
}, u: function(A2, e2) {
  return si(A2.getFullYear(), e2.length);
}, Q: function(A2, e2, t2) {
  const n2 = Math.ceil((A2.getMonth() + 1) / 3);
  switch (e2) {
    case "Q":
      return String(n2);
    case "QQ":
      return si(n2, 2);
    case "Qo":
      return t2.ordinalNumber(n2, { unit: "quarter" });
    case "QQQ":
      return t2.quarter(n2, { width: "abbreviated", context: "formatting" });
    case "QQQQQ":
      return t2.quarter(n2, { width: "narrow", context: "formatting" });
    default:
      return t2.quarter(n2, { width: "wide", context: "formatting" });
  }
}, q: function(A2, e2, t2) {
  const n2 = Math.ceil((A2.getMonth() + 1) / 3);
  switch (e2) {
    case "q":
      return String(n2);
    case "qq":
      return si(n2, 2);
    case "qo":
      return t2.ordinalNumber(n2, { unit: "quarter" });
    case "qqq":
      return t2.quarter(n2, { width: "abbreviated", context: "standalone" });
    case "qqqqq":
      return t2.quarter(n2, { width: "narrow", context: "standalone" });
    default:
      return t2.quarter(n2, { width: "wide", context: "standalone" });
  }
}, M: function(A2, e2, t2) {
  const n2 = A2.getMonth();
  switch (e2) {
    case "M":
    case "MM":
      return li.M(A2, e2);
    case "Mo":
      return t2.ordinalNumber(n2 + 1, { unit: "month" });
    case "MMM":
      return t2.month(n2, { width: "abbreviated", context: "formatting" });
    case "MMMMM":
      return t2.month(n2, { width: "narrow", context: "formatting" });
    default:
      return t2.month(n2, { width: "wide", context: "formatting" });
  }
}, L: function(A2, e2, t2) {
  const n2 = A2.getMonth();
  switch (e2) {
    case "L":
      return String(n2 + 1);
    case "LL":
      return si(n2 + 1, 2);
    case "Lo":
      return t2.ordinalNumber(n2 + 1, { unit: "month" });
    case "LLL":
      return t2.month(n2, { width: "abbreviated", context: "standalone" });
    case "LLLLL":
      return t2.month(n2, { width: "narrow", context: "standalone" });
    default:
      return t2.month(n2, { width: "wide", context: "standalone" });
  }
}, w: function(A2, e2, t2, n2) {
  const r2 = function(A3, e3) {
    const t3 = Tn(A3, null == e3 ? void 0 : e3.in), n3 = +Nn(t3, e3) - +function(A4, e4) {
      var t4, n4, r3, i2;
      const a2 = jn(), B2 = (null == e4 ? void 0 : e4.firstWeekContainsDate) ?? (null == (n4 = null == (t4 = null == e4 ? void 0 : e4.locale) ? void 0 : t4.options) ? void 0 : n4.firstWeekContainsDate) ?? a2.firstWeekContainsDate ?? (null == (i2 = null == (r3 = a2.locale) ? void 0 : r3.options) ? void 0 : i2.firstWeekContainsDate) ?? 1, Q2 = Ei(A4, e4), o2 = Wn((null == e4 ? void 0 : e4.in) || A4, 0);
      return o2.setFullYear(Q2, 0, B2), o2.setHours(0, 0, 0, 0), Nn(o2, e4);
    }(t3, e3);
    return Math.round(n3 / qn) + 1;
  }(A2, n2);
  return "wo" === e2 ? t2.ordinalNumber(r2, { unit: "week" }) : si(r2, e2.length);
}, I: function(A2, e2, t2) {
  const n2 = function(A3, e3) {
    const t3 = Tn(A3, void 0 ), n3 = +Bi(t3) - +function(A4) {
      const e4 = Qi(A4), t4 = Wn(A4, 0);
      return t4.setFullYear(e4, 0, 4), t4.setHours(0, 0, 0, 0), Bi(t4);
    }(t3);
    return Math.round(n3 / qn) + 1;
  }(A2);
  return "Io" === e2 ? t2.ordinalNumber(n2, { unit: "week" }) : si(n2, e2.length);
}, d: function(A2, e2, t2) {
  return "do" === e2 ? t2.ordinalNumber(A2.getDate(), { unit: "date" }) : li.d(A2, e2);
}, D: function(A2, e2, t2) {
  const n2 = function(A3, e3) {
    const t3 = Tn(A3, void 0 ), n3 = function(A4, e4) {
      const [t4, n4] = Dn(void 0, A4, e4), r2 = gi(t4), i2 = gi(n4), a2 = +r2 - oi(r2), B2 = +i2 - oi(i2);
      return Math.round((a2 - B2) / 864e5);
    }(t3, function(A4) {
      const e4 = Tn(A4, void 0);
      return e4.setFullYear(e4.getFullYear(), 0, 1), e4.setHours(0, 0, 0, 0), e4;
    }(t3));
    return n3 + 1;
  }(A2);
  return "Do" === e2 ? t2.ordinalNumber(n2, { unit: "dayOfYear" }) : si(n2, e2.length);
}, E: function(A2, e2, t2) {
  const n2 = A2.getDay();
  switch (e2) {
    case "E":
    case "EE":
    case "EEE":
      return t2.day(n2, { width: "abbreviated", context: "formatting" });
    case "EEEEE":
      return t2.day(n2, { width: "narrow", context: "formatting" });
    case "EEEEEE":
      return t2.day(n2, { width: "short", context: "formatting" });
    default:
      return t2.day(n2, { width: "wide", context: "formatting" });
  }
}, e: function(A2, e2, t2, n2) {
  const r2 = A2.getDay(), i2 = (r2 - n2.weekStartsOn + 8) % 7 || 7;
  switch (e2) {
    case "e":
      return String(i2);
    case "ee":
      return si(i2, 2);
    case "eo":
      return t2.ordinalNumber(i2, { unit: "day" });
    case "eee":
      return t2.day(r2, { width: "abbreviated", context: "formatting" });
    case "eeeee":
      return t2.day(r2, { width: "narrow", context: "formatting" });
    case "eeeeee":
      return t2.day(r2, { width: "short", context: "formatting" });
    default:
      return t2.day(r2, { width: "wide", context: "formatting" });
  }
}, c: function(A2, e2, t2, n2) {
  const r2 = A2.getDay(), i2 = (r2 - n2.weekStartsOn + 8) % 7 || 7;
  switch (e2) {
    case "c":
      return String(i2);
    case "cc":
      return si(i2, e2.length);
    case "co":
      return t2.ordinalNumber(i2, { unit: "day" });
    case "ccc":
      return t2.day(r2, { width: "abbreviated", context: "standalone" });
    case "ccccc":
      return t2.day(r2, { width: "narrow", context: "standalone" });
    case "cccccc":
      return t2.day(r2, { width: "short", context: "standalone" });
    default:
      return t2.day(r2, { width: "wide", context: "standalone" });
  }
}, i: function(A2, e2, t2) {
  const n2 = A2.getDay(), r2 = 0 === n2 ? 7 : n2;
  switch (e2) {
    case "i":
      return String(r2);
    case "ii":
      return si(r2, e2.length);
    case "io":
      return t2.ordinalNumber(r2, { unit: "day" });
    case "iii":
      return t2.day(n2, { width: "abbreviated", context: "formatting" });
    case "iiiii":
      return t2.day(n2, { width: "narrow", context: "formatting" });
    case "iiiiii":
      return t2.day(n2, { width: "short", context: "formatting" });
    default:
      return t2.day(n2, { width: "wide", context: "formatting" });
  }
}, a: function(A2, e2, t2) {
  const n2 = A2.getHours() / 12 >= 1 ? "pm" : "am";
  switch (e2) {
    case "a":
    case "aa":
      return t2.dayPeriod(n2, { width: "abbreviated", context: "formatting" });
    case "aaa":
      return t2.dayPeriod(n2, { width: "abbreviated", context: "formatting" }).toLowerCase();
    case "aaaaa":
      return t2.dayPeriod(n2, { width: "narrow", context: "formatting" });
    default:
      return t2.dayPeriod(n2, { width: "wide", context: "formatting" });
  }
}, b: function(A2, e2, t2) {
  const n2 = A2.getHours();
  let r2;
  switch (r2 = 12 === n2 ? "noon" : 0 === n2 ? "midnight" : n2 / 12 >= 1 ? "pm" : "am", e2) {
    case "b":
    case "bb":
      return t2.dayPeriod(r2, { width: "abbreviated", context: "formatting" });
    case "bbb":
      return t2.dayPeriod(r2, { width: "abbreviated", context: "formatting" }).toLowerCase();
    case "bbbbb":
      return t2.dayPeriod(r2, { width: "narrow", context: "formatting" });
    default:
      return t2.dayPeriod(r2, { width: "wide", context: "formatting" });
  }
}, B: function(A2, e2, t2) {
  const n2 = A2.getHours();
  let r2;
  switch (r2 = n2 >= 17 ? "evening" : n2 >= 12 ? "afternoon" : n2 >= 4 ? "morning" : "night", e2) {
    case "B":
    case "BB":
    case "BBB":
      return t2.dayPeriod(r2, { width: "abbreviated", context: "formatting" });
    case "BBBBB":
      return t2.dayPeriod(r2, { width: "narrow", context: "formatting" });
    default:
      return t2.dayPeriod(r2, { width: "wide", context: "formatting" });
  }
}, h: function(A2, e2, t2) {
  if ("ho" === e2) {
    let e3 = A2.getHours() % 12;
    return 0 === e3 && (e3 = 12), t2.ordinalNumber(e3, { unit: "hour" });
  }
  return li.h(A2, e2);
}, H: function(A2, e2, t2) {
  return "Ho" === e2 ? t2.ordinalNumber(A2.getHours(), { unit: "hour" }) : li.H(A2, e2);
}, K: function(A2, e2, t2) {
  const n2 = A2.getHours() % 12;
  return "Ko" === e2 ? t2.ordinalNumber(n2, { unit: "hour" }) : si(n2, e2.length);
}, k: function(A2, e2, t2) {
  let n2 = A2.getHours();
  return 0 === n2 && (n2 = 24), "ko" === e2 ? t2.ordinalNumber(n2, { unit: "hour" }) : si(n2, e2.length);
}, m: function(A2, e2, t2) {
  return "mo" === e2 ? t2.ordinalNumber(A2.getMinutes(), { unit: "minute" }) : li.m(A2, e2);
}, s: function(A2, e2, t2) {
  return "so" === e2 ? t2.ordinalNumber(A2.getSeconds(), { unit: "second" }) : li.s(A2, e2);
}, S: function(A2, e2) {
  return li.S(A2, e2);
}, X: function(A2, e2, t2) {
  const n2 = A2.getTimezoneOffset();
  if (0 === n2) return "Z";
  switch (e2) {
    case "X":
      return ci(n2);
    case "XXXX":
    case "XX":
      return Ii(n2);
    default:
      return Ii(n2, ":");
  }
}, x: function(A2, e2, t2) {
  const n2 = A2.getTimezoneOffset();
  switch (e2) {
    case "x":
      return ci(n2);
    case "xxxx":
    case "xx":
      return Ii(n2);
    default:
      return Ii(n2, ":");
  }
}, O: function(A2, e2, t2) {
  const n2 = A2.getTimezoneOffset();
  switch (e2) {
    case "O":
    case "OO":
    case "OOO":
      return "GMT" + Ci(n2, ":");
    default:
      return "GMT" + Ii(n2, ":");
  }
}, z: function(A2, e2, t2) {
  const n2 = A2.getTimezoneOffset();
  switch (e2) {
    case "z":
    case "zz":
    case "zzz":
      return "GMT" + Ci(n2, ":");
    default:
      return "GMT" + Ii(n2, ":");
  }
}, t: function(A2, e2, t2) {
  return si(Math.trunc(+A2 / 1e3), e2.length);
}, T: function(A2, e2, t2) {
  return si(+A2, e2.length);
} };
function Ci(A2, e2 = "") {
  const t2 = A2 > 0 ? "-" : "+", n2 = Math.abs(A2), r2 = Math.trunc(n2 / 60), i2 = n2 % 60;
  return 0 === i2 ? t2 + String(r2) : t2 + String(r2) + e2 + si(i2, 2);
}
function ci(A2, e2) {
  return A2 % 60 == 0 ? (A2 > 0 ? "-" : "+") + si(Math.abs(A2) / 60, 2) : Ii(A2, e2);
}
function Ii(A2, e2 = "") {
  const t2 = A2 > 0 ? "-" : "+", n2 = Math.abs(A2);
  return t2 + si(Math.trunc(n2 / 60), 2) + e2 + si(n2 % 60, 2);
}
const ui = (A2, e2) => {
  switch (A2) {
    case "P":
      return e2.date({ width: "short" });
    case "PP":
      return e2.date({ width: "medium" });
    case "PPP":
      return e2.date({ width: "long" });
    default:
      return e2.date({ width: "full" });
  }
}, fi = (A2, e2) => {
  switch (A2) {
    case "p":
      return e2.time({ width: "short" });
    case "pp":
      return e2.time({ width: "medium" });
    case "ppp":
      return e2.time({ width: "long" });
    default:
      return e2.time({ width: "full" });
  }
}, vi = { p: fi, P: (A2, e2) => {
  const t2 = A2.match(/(P+)(p+)?/) || [], n2 = t2[1], r2 = t2[2];
  if (!r2) return ui(A2, e2);
  let i2;
  switch (n2) {
    case "P":
      i2 = e2.dateTime({ width: "short" });
      break;
    case "PP":
      i2 = e2.dateTime({ width: "medium" });
      break;
    case "PPP":
      i2 = e2.dateTime({ width: "long" });
      break;
    default:
      i2 = e2.dateTime({ width: "full" });
  }
  return i2.replace("{{date}}", ui(n2, e2)).replace("{{time}}", fi(r2, e2));
} }, hi = /^D+$/, mi = /^Y+$/, pi = ["D", "DD", "YY", "YYYY"], bi = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, wi = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, yi = /^'([^]*?)'?$/, Pi = /''/g, Vi = /[a-zA-Z]/;
function xi(A2, e2, t2) {
  var n2, r2, i2, a2, B2, Q2, o2, g2;
  const E2 = jn(), s2 = (null == t2 ? void 0 : t2.locale) ?? E2.locale ?? tr, l2 = (null == t2 ? void 0 : t2.firstWeekContainsDate) ?? (null == (r2 = null == (n2 = null == t2 ? void 0 : t2.locale) ? void 0 : n2.options) ? void 0 : r2.firstWeekContainsDate) ?? E2.firstWeekContainsDate ?? (null == (a2 = null == (i2 = E2.locale) ? void 0 : i2.options) ? void 0 : a2.firstWeekContainsDate) ?? 1, d2 = (null == t2 ? void 0 : t2.weekStartsOn) ?? (null == (Q2 = null == (B2 = null == t2 ? void 0 : t2.locale) ? void 0 : B2.options) ? void 0 : Q2.weekStartsOn) ?? E2.weekStartsOn ?? (null == (g2 = null == (o2 = E2.locale) ? void 0 : o2.options) ? void 0 : g2.weekStartsOn) ?? 0, C2 = Tn(A2, null == t2 ? void 0 : t2.in);
  if (!function(A3) {
    return !(!((e3 = A3) instanceof Date || "object" == typeof e3 && "[object Date]" === Object.prototype.toString.call(e3)) && "number" != typeof A3 || isNaN(+Tn(A3)));
    var e3;
  }(C2)) throw new RangeError("Invalid time value");
  let c2 = e2.match(wi).map((A3) => {
    const e3 = A3[0];
    return "p" === e3 || "P" === e3 ? (0, vi[e3])(A3, s2.formatLong) : A3;
  }).join("").match(bi).map((A3) => {
    if ("''" === A3) return { isToken: false, value: "'" };
    const e3 = A3[0];
    if ("'" === e3) return { isToken: false, value: zi(A3) };
    if (di[e3]) return { isToken: true, value: A3 };
    if (e3.match(Vi)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + e3 + "`");
    return { isToken: false, value: A3 };
  });
  s2.localize.preprocessor && (c2 = s2.localize.preprocessor(C2, c2));
  const I2 = { firstWeekContainsDate: l2, weekStartsOn: d2, locale: s2 };
  return c2.map((n3) => {
    if (!n3.isToken) return n3.value;
    const r3 = n3.value;
    return (!(null == t2 ? void 0 : t2.useAdditionalWeekYearTokens) && function(A3) {
      return mi.test(A3);
    }(r3) || !(null == t2 ? void 0 : t2.useAdditionalDayOfYearTokens) && function(A3) {
      return hi.test(A3);
    }(r3)) && function(A3, e3, t3) {
      const n4 = function(A4, e4, t4) {
        const n5 = "Y" === A4[0] ? "years" : "days of the month";
        return `Use \`${A4.toLowerCase()}\` instead of \`${A4}\` (in \`${e4}\`) for formatting ${n5} to the input \`${t4}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
      }(A3, e3, t3);
      if (pi.includes(A3)) throw new RangeError(n4);
    }(r3, e2, String(A2)), (0, di[r3[0]])(C2, r3, s2.localize, I2);
  }).join("");
}
function zi(A2) {
  const e2 = A2.match(yi);
  return e2 ? e2[1].replace(Pi, "'") : A2;
}
function Xi(A2, e2, t2 = "en-US", n2) {
  const r2 = new Date(1e3 * A2), i2 = { ...e2 };
  return n2 && (i2.timeZone = n2), new Intl.DateTimeFormat(t2, i2).format(r2);
}
function Mi(A2, e2, t2) {
  if (!e2 || 0 === e2.length) return true;
  const n2 = new Date(1e3 * A2).toLocaleString("en-US", { timeZone: t2 }), r2 = new Date(n2), i2 = r2.getDay(), a2 = 60 * r2.getHours() + r2.getMinutes();
  return e2.some((A3) => {
    if (A3.dayOfWeek !== i2) return false;
    const [e3, t3] = A3.start.split(":").map(Number), [n3, r3] = A3.end.split(":").map(Number);
    return a2 >= 60 * e3 + t3 && a2 <= 60 * n3 + r3;
  });
}
class Oi {
  static formatPrice(A2, e2) {
    const t2 = ai(e2);
    return function(A3, e3 = {}) {
      if (null == A3 || !isFinite(A3)) return "";
      const { locale: t3 = "en-US", style: n2 = "decimal", currency: r2, currencyDisplay: i2 = zt.symbol, minimumFractionDigits: a2, maximumFractionDigits: B2, maximumSignificantDigits: Q2, notation: o2 = xt.standard, decimalSeparator: g2, thousandsSeparator: E2, fractionDigits: s2, tickSize: l2, unit: d2, unitPlacement: C2 = Xt.suffix } = e3;
      let c2 = A3, I2 = d2;
      e3.metricType === Mt.basisPoints ? (c2 = 1e4 * A3, I2 = "bps") : e3.metricType !== Mt.Yield && e3.metricType !== Mt.volatility || (I2 = "%"), e3.conversionRate && 1 !== e3.conversionRate && e3.metricType !== Mt.basisPoints && (c2 *= e3.conversionRate), l2 && l2 > 0 && (c2 = Math.round(c2 / l2) * l2);
      let u2 = B2 ?? (void 0 !== s2 ? s2 : 2), f2 = a2 ?? (void 0 !== s2 ? s2 : void 0);
      u2 = Math.max(0, Math.min(20, u2)), void 0 !== f2 && (f2 = Math.max(0, Math.min(u2, f2)));
      const v2 = { style: r2 ? "currency" : "%" === I2 ? "percent" : n2, currency: r2, currencyDisplay: r2 ? i2 : void 0, notation: o2, signDisplay: e3.showSign || e3.metricType === Mt.pnl ? "always" : "auto" };
      void 0 !== Q2 && Q2 < 21 ? v2.maximumSignificantDigits = Q2 : (v2.minimumFractionDigits = f2, v2.maximumFractionDigits = u2), Object.keys(v2).forEach((A4) => void 0 === v2[A4] && delete v2[A4]);
      const h2 = new Intl.NumberFormat(t3, v2);
      let m2;
      return m2 = g2 || E2 ? h2.formatToParts(c2 / ("%" === I2 && A3 > 1 ? 100 : 1)).map((A4) => "decimal" === A4.type && void 0 !== g2 ? g2 : "group" === A4.type && void 0 !== E2 ? E2 : A4.value).join("") : h2.format(c2 / ("%" === I2 && A3 > 1 ? 100 : 1)), I2 && "%" !== I2 && (m2 = C2 === Xt.prefix ? `${I2}${m2}` : `${m2}${I2}`), m2;
    }(A2, { locale: t2.locale, decimalSeparator: t2.decimalSeparator, thousandsSeparator: t2.thousandsSeparator, fractionDigits: e2.numberFractionDigits, currency: e2.useCurrency ? t2.currency : void 0, currencyDisplay: e2.currencyDisplay, minimumFractionDigits: e2.minimumFractionDigits, maximumFractionDigits: e2.maximumFractionDigits, maximumSignificantDigits: e2.maximumSignificantDigits, notation: e2.numberNotation, tickSize: e2.tickSize, unit: e2.unit, unitPlacement: e2.unitPlacement, conversionRate: e2.conversionRate, displayCurrency: e2.displayCurrency, metricType: e2.metricType, showSign: e2.showSign });
  }
  static formatDate(A2, e2) {
    const t2 = ai(e2), n2 = (r2 = t2.locale, { "en-US": tr, "en-GB": er, "he-IL": ur, "es-ES": Br, "fr-FR": sr, "de-DE": Ln, "it-IT": br, "pt-BR": Tr, "zh-CN": _r, "ja-JP": Vr, "ko-KR": Mr, "ru-RU": Lr, "ar-SA": On, "nl-NL": Wr }[r2] || tr);
    var r2;
    try {
      return xi(A2, t2.dateFormat, { locale: n2 });
    } catch (e3) {
      return A2.toString();
    }
  }
  static formatDateForInterval(A2, e2, t2, n2 = false) {
    const r2 = ai(e2), i2 = "number" == typeof A2 ? Math.floor(A2 / (A2 > 1e12 ? 1e3 : 1)) : Math.floor(A2.getTime() / 1e3);
    if (!(Math.max(1, Math.floor(t2 ?? 86400)) < 86400)) return this.formatDate("number" == typeof A2 ? new Date(1e3 * i2) : A2, e2);
    const a2 = e2.timezone, B2 = new Intl.DateTimeFormat("en-US", { year: "numeric", ...a2 ? { timeZone: a2 } : {} }).format(new Date(1e3 * i2)), Q2 = new Intl.DateTimeFormat("en-US", { year: "numeric", ...a2 ? { timeZone: a2 } : {} }).format(/* @__PURE__ */ new Date()), o2 = n2 ? { day: "numeric", hour: "2-digit", minute: "2-digit" } : { ...B2 !== Q2 ? { year: "numeric" } : {}, month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" };
    try {
      return Xi(i2, o2, r2.locale || "en-US", e2.timezone);
    } catch {
      return this.formatDate("number" == typeof A2 ? new Date(1e3 * i2) : A2, e2);
    }
  }
  static parseInput(A2, e2) {
    const t2 = ai(e2);
    return function(A3, e3 = "en-US", t3) {
      var n2, r2;
      if (!A3) return null;
      let i2 = A3.trim();
      const a2 = t3 || (null == (n2 = new Intl.NumberFormat(e3).formatToParts(1.1).find((A4) => "decimal" === A4.type)) ? void 0 : n2.value) || ".", B2 = (null == (r2 = new Intl.NumberFormat(e3).formatToParts(1e3).find((A4) => "group" === A4.type)) ? void 0 : r2.value) || ",", Q2 = new RegExp(`\\${B2}`, "g");
      i2 = i2.replace(Q2, "");
      const o2 = new RegExp(`\\${a2}`, "g");
      i2 = i2.replace(o2, ".");
      const g2 = parseFloat(i2);
      return isNaN(g2) ? null : g2;
    }(A2, t2.locale, t2.decimalSeparator);
  }
  static sortStrings(A2, e2 = "en-US") {
    return [...A2].sort((A3, t2) => ((A4, e3, t3 = "en-US") => new Intl.Collator(t3).compare(A4, e3))(A3, t2, e2));
  }
  static toClipboard(A2) {
    return function(A3) {
      return "number" == typeof A3 ? A3.toString() : A3.replace(/[^\d.-]/g, "");
    }(A2);
  }
}
const qi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAAMaCAYAAADZeeswAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAFAKADAAQAAAABAAADGgAAAAAL2uNnAABAAElEQVR4Aezdeaxm933f97M+291m5XAZkhItyTJpSbVoy5vojizLNCXHaY2SAYIigA1ErtPYSeHEQQGjoQu5teO2QeH2DwlBiiBI3Ipd3UaKLbsa27LljVFjmxIlUQvFGS4z5Gx3eZaz9fP5nudScqoGksD7zPDO+9y593mes/zOOa9zAV599P39fkmSdGnCggACCCCAAAIIIIAAAggggAACCCCAAAKHUIDs7xA+VG4JAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBA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AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAg8IoF++Ije2NsSIECAAAECBAgQIECAAAECBAgQIPCABf5/56Vuw/BO+fAAAAAASUVORK5CYII=", Hi = qi, Wi = qi;
var Di = ((A2) => (A2.center = "center", A2.bottomRight = "bottom-right", A2.bottomLeft = "bottom-left", A2.topRight = "top-right", A2.topLeft = "top-left", A2))(Di || {});
let Fi = null, ji = null;
function Ti(A2) {
  return A2.base.engine === Vt.prime;
}
const Ni = "#3EC5FF", Ki = "#5A48DE", Gi = { base: { theme: ft.dark } }, ki = { base: { theme: ft.light } };
function Ui(A2 = ft.dark) {
  return A2 === ft.light ? ki : Gi;
}
function Zi(A2 = ft.dark) {
  return { id: `tickup-prime-stub-${A2}`, getChartOptionsPatch: () => Ui(A2) };
}
Zi(ft.dark);
function Si(A2, e2, t2, n2) {
  const r2 = Math.round(e2 * n2), i2 = Math.round(t2 * n2);
  A2.width === r2 && A2.height === i2 || (A2.width = r2, A2.height = i2);
}
function Ji(A2, e2, t2) {
  if (A2 && e2 && A2 instanceof En) {
    const n2 = e2.visibleRange.end - e2.visibleRange.start;
    A2.setNormalizationSpans(n2, t2.range);
  }
}
const $i = reactExports.forwardRef(({ intervalsArray: A2, visibleRange: e2, setVisibleRange: a2, visiblePriceRange: Q2, drawings: g2, setDrawings: E2, selectedIndex: d2, setSelectedIndex: I2, onRequestShapeProperties: u2, chartOptions: f2, canvasSizes: h2, parentContainerRef: m2, windowSpread: b2, showBrandWatermark: w2 = true, brandTheme: y2 = ft.light }, P2) => {
  var V2, x2, z2, X2;
  const { mode: M2, setMode: O2 } = p(), q2 = reactExports.useRef(null), H2 = reactExports.useRef(null), W2 = reactExports.useRef(null), D2 = reactExports.useRef(null), F2 = reactExports.useRef(null), j2 = reactExports.useRef(null), T2 = reactExports.useRef(null), N2 = reactExports.useRef(null), K2 = reactExports.useRef(0), Y2 = reactExports.useRef(void 0);
  reactExports.useRef(null);
  const [G2, k2] = reactExports.useState(false), [U2, Z2] = reactExports.useState(false), [L2, R2] = reactExports.useState(null), [S2, J2] = reactExports.useState(null), $2 = reactExports.useRef(null), _2 = reactExports.useRef(1), [AA2, eA2] = i.useState(null), tA2 = i.useRef(null), nA2 = reactExports.useRef(null), [rA2, iA2] = reactExports.useState(0), aA2 = M2 === v.none || M2 === v.select || M2 === v.editShape, BA2 = M2 === v.none, { renderContext: QA2, intervalSeconds: oA2, effectiveIntervals: gA2 } = function(A3, e3, t2, n2, r2) {
    const i2 = reactExports.useMemo(() => wn(A3), [A3, A3.length]), a3 = reactExports.useMemo(() => an(i2, 3600), [i2]), B2 = reactExports.useMemo(() => {
      const A4 = i2.length;
      if (!A4 || a3 <= 0 || null == e3) return { startIndex: 0, endIndex: 0 };
      const { start: t3, end: n3 } = e3;
      if (null == t3 || null == n3) return { startIndex: 0, endIndex: 0 };
      const r3 = e3.startIndex, B3 = e3.endIndex;
      if ("number" == typeof r3 && "number" == typeof B3 && r3 >= 0 && B3 >= 0 && r3 <= B3 && r3 < A4 && B3 < A4) return { startIndex: r3, endIndex: B3 };
      const Q4 = i2[0].t, o2 = Math.floor((t3 - Q4) / a3), g3 = Math.ceil((n3 - Q4) / a3);
      return { startIndex: Math.max(0, o2), endIndex: Math.min(A4 - 1, g3) };
    }, [i2, a3, e3.start, e3.end, e3.startIndex, e3.endIndex]), Q3 = (() => {
      const { startIndex: A4, endIndex: e4 } = B2;
      if (A4 >= e4 || !i2.length) return { min: 0, max: 100, range: 100 };
      let t3 = 1 / 0, n3 = -1 / 0;
      for (let r4 = A4; r4 <= e4; r4++) {
        const A5 = i2[r4];
        A5 && (A5.l < t3 && (t3 = A5.l), A5.h > n3 && (n3 = A5.h));
      }
      if (!Number.isFinite(t3) || !Number.isFinite(n3)) return { min: 0, max: 100, range: 100 };
      const r3 = 0.1 * Math.max(0, n3 - t3), a4 = t3 - r3, Q4 = n3 + r3;
      return { min: a4, max: Q4, range: Q4 - a4 };
    })();
    return { renderContext: reactExports.useMemo(() => 0 === n2 || 0 === r2 ? null : { allIntervals: i2, visibleStartIndex: B2.startIndex, visibleEndIndex: B2.endIndex, visiblePriceRange: Q3, visibleRange: e3, intervalSeconds: a3, canvasWidth: n2, canvasHeight: r2 }, [i2, B2.startIndex, B2.endIndex, Q3.min, Q3.max, Q3.range, e3, a3, n2, r2]), intervalSeconds: a3, effectiveIntervals: i2 };
  }(A2, e2, 0, h2.width, h2.height), EA2 = reactExports.useCallback(() => {
    M2 !== v.none && M2 !== v.select && M2 !== v.editShape ? ($2.current = function(A3) {
      let e3;
      const t2 = nn();
      switch (A3.mode) {
        case v.drawLine:
          e3 = new Qn(A3.args, A3.style, t2);
          break;
        case v.drawRectangle:
          e3 = new on(A3.args, A3.style, t2);
          break;
        case v.drawCircle:
          e3 = new gn(A3.args, A3.style, t2);
          break;
        case v.drawTriangle:
          e3 = new En(A3.args, A3.style, t2);
          break;
        case v.drawAngle:
          e3 = new mn(A3.args, A3.style, t2);
          break;
        case v.drawArrow:
          e3 = new sn(A3.args, A3.style, t2);
          break;
        case v.drawPolyline:
          e3 = new ln(A3.args, A3.style, t2);
          break;
        case v.drawCustomSymbol:
          e3 = new dn(A3.args, A3.style, t2);
          break;
        default:
          e3 = new Qn({ points: [] }, A3.style, t2);
      }
      return e3;
    }({ mode: M2, args: void 0, style: f2.base.style.drawings }), M2 === v.drawAngle && (_2.current = 1)) : $2.current = null;
  }, [M2, f2.base.style.drawings]);
  reactExports.useEffect(() => {
    M2 !== v.drawAngle && (_2.current = 1);
  }, [M2]), reactExports.useEffect(() => {
    EA2();
  }, [EA2]), reactExports.useEffect(() => {
    const A3 = window.devicePixelRatio || 1, e3 = Math.max(0, (null == h2 ? void 0 : h2.width) || 0), t2 = Math.max(0, (null == h2 ? void 0 : h2.height) || 0), n2 = { cssWidth: e3, cssHeight: t2, dpr: A3, width: Math.round(e3 * A3), height: Math.round(t2 * A3), clientWidth: e3, clientHeight: t2 };
    tA2.current = n2, eA2(n2);
  }, [null == h2 ? void 0 : h2.width, null == h2 ? void 0 : h2.height]), reactExports.useEffect(() => {
    const A3 = (A4) => {
      var e3;
      "Escape" === A4.key && (M2 === v.drawPolyline && (null == (e3 = $2.current) || e3.setPoints([])), M2 !== v.none && M2 !== v.select && M2 !== v.editShape && O2(v.none));
    };
    return window.addEventListener("keydown", A3), () => {
      window.removeEventListener("keydown", A3);
    };
  }, [M2, O2]);
  const sA2 = reactExports.useCallback((A3, e3, t2) => {
    var n2;
    const { cssWidth: r2, cssHeight: i2, dpr: a3, width: B2, height: o2 } = e3;
    if (F2.current.width === B2 && F2.current.height === o2 || (F2.current.width = B2, F2.current.height = o2), A3.setTransform(a3, 0, 0, a3, 0, 0), A3.clearRect(0, 0, r2, i2), function(A4, e4, t3, n3) {
      if (!n3.base.style.showGrid) return;
      const { lineColor: r3, lineWidth: i3, gridSpacing: a4, lineDash: B3 } = n3.base.style.grid;
      A4.save(), A4.strokeStyle = r3 || "#e0e0e0", A4.lineWidth = i3 || 1, A4.setLineDash(B3 || []), A4.globalAlpha = 0.6;
      for (let n4 = 0; n4 <= e4; n4 += a4 || 50) A4.beginPath(), A4.moveTo(n4 + 0.5, 0), A4.lineTo(n4 + 0.5, t3), A4.stroke();
      for (let n4 = 0; n4 <= t3; n4 += a4 || 50) A4.beginPath(), A4.moveTo(0, n4 + 0.5), A4.lineTo(e4, n4 + 0.5), A4.stroke();
      A4.restore();
    }(A3, r2, i2, f2), w2 && nA2.current) {
      const e4 = Ti(f2);
      !function(A4, e5, t3, n3, r3, i3) {
        if (!r3 || e5 < 40 || t3 < 24) return;
        const a4 = n3 === ft.dark ? r3.dark : n3 === ft.grey ? r3.grey : r3.light;
        if (!a4.complete || 0 === a4.naturalWidth) return;
        const B3 = (null == i3 ? void 0 : i3.maxWidthFrac) ?? 0.7, Q3 = (null == i3 ? void 0 : i3.opacity) ?? 0.13, o3 = (null == i3 ? void 0 : i3.padding) ?? 8, g4 = Math.min(600, e5 * B3), E3 = g4 / a4.naturalWidth, s2 = g4, l2 = a4.naturalHeight * E3, d3 = (null == i3 ? void 0 : i3.placement) ?? "center";
        let C2, c2;
        "center" === d3 ? (C2 = (e5 - s2) / 2, c2 = (t3 - l2) / 2) : (C2 = "bottom-left" === d3 || "top-left" === d3 ? o3 : Math.max(o3, e5 - s2 - o3), c2 = "top-left" === d3 || "top-right" === d3 ? o3 : Math.max(o3, t3 - l2 - o3)), A4.save(), A4.globalAlpha = Q3, A4.drawImage(a4, C2, c2, s2, l2), A4.restore();
      }(A3, r2, i2, y2, nA2.current, function(A4, e5) {
        const t3 = A4 === ft.dark || A4 === ft.grey;
        return e5 ? { opacity: t3 ? 0.18 : 0.13, placement: Di.center, padding: 0 } : { opacity: t3 ? 0.32 : 0.2, placement: Di.center, padding: 0 };
      }(y2, e4));
    }
    const g3 = f2.base.style.axes;
    if (g3.tradingSessions && g3.tradingSessions.length > 0) {
      const { start: e4, end: n3 } = t2.visibleRange, a4 = n3 - e4;
      if (a4 > 0) {
        const t3 = g3.timezone, B3 = g3.tradingSessions;
        A3.fillStyle = "rgba(200, 200, 200, 0.15)";
        const Q3 = Math.max(300, a4 / 200);
        for (let o3 = e4; o3 < n3; o3 += Q3) if (!Mi(o3, B3, t3)) {
          const t4 = (o3 - e4) / a4 * r2, B4 = (Math.min(o3 + Q3, n3) - e4) / a4 * r2;
          A3.fillRect(t4, 0, B4 - t4, i2);
        }
      }
    }
    switch (null == (n2 = null == f2 ? void 0 : f2.base) ? void 0 : n2.chartType) {
      case Pt.Candlestick:
        en(A3, t2, f2, Q2);
        break;
      case Pt.Line:
        !function(A4, e4, t3, n3) {
          const { allIntervals: r3, visibleStartIndex: i3, visibleEndIndex: a4, visibleRange: B3, intervalSeconds: Q3, canvasWidth: o3, canvasHeight: g4 } = e4;
          if (a4 < i3 || 0 === r3.length) return;
          if (!isFinite(n3.range) || n3.range <= 0) return;
          const E3 = r3[0].t, s2 = r3[r3.length - 1].t + Q3, l2 = Math.max(B3.start, E3), d3 = Math.min(B3.end, s2);
          if (d3 <= l2) return;
          const C2 = (A5) => Ht(A5, g4, n3), c2 = Ot(l2, o3, B3), I3 = C2(Tt(r3, Q3, l2));
          A4.beginPath(), A4.moveTo(c2, I3);
          for (let e5 = i3; e5 <= a4; e5++) {
            const t4 = r3[e5], n4 = t4.t + Q3 / 2;
            if (n4 < l2 || n4 > d3) continue;
            const i4 = qt(t4.t, Q3, o3, B3), a5 = C2(t4.c);
            A4.lineTo(i4, a5);
          }
          const u3 = Ot(d3, o3, B3), f3 = C2(Tt(r3, Q3, d3));
          if (A4.lineTo(u3, f3), A4.stroke(), t3.base.showOverlayLine) {
            const r4 = t3.base.overlays;
            if (r4 && r4.length && An(A4, e4, n3, r4, t3.base.style.overlay), Array.isArray(t3.base.overlayKinds) && t3.base.overlayKinds.length) {
              const r5 = t3.base.overlayKinds, i4 = t3.base.style.overlay, a5 = r5.map((A5) => _t(A5, i4));
              An(A4, e4, n3, a5, i4);
            }
          }
        }(A3, t2, f2, Q2);
        break;
      case Pt.Area:
        !function(A4, e4, t3, n3) {
          var r3, i3, a4, B3, Q3, o3, g4, E3;
          const { allIntervals: s2, visibleStartIndex: l2, visibleEndIndex: d3, visibleRange: C2, intervalSeconds: c2, canvasWidth: I3, canvasHeight: u3 } = e4;
          if (d3 < l2 || 0 === s2.length) return;
          if (!isFinite(n3.range) || n3.range <= 0) return;
          const f3 = (A5) => Ot(A5, I3, C2), v2 = (A5) => qt(A5, c2, I3, C2), h3 = (A5) => u3 * (1 - (A5 - n3.min) / n3.range), m3 = s2[0].t, p2 = s2[s2.length - 1].t + c2, b3 = Math.max(C2.start, m3), w3 = Math.min(C2.end, p2);
          if (w3 <= b3) return;
          const y3 = (A5) => s2[A5].t + c2 / 2, P3 = s2[0], V3 = s2.length - 1, x3 = y3(V3), z3 = [];
          if (b3 >= P3.t && b3 < y3(0)) {
            const A5 = P3.t, e5 = (b3 - A5) / (y3(0) - A5), t4 = jt(P3.o, P3.c, Math.min(Math.max(e5, 0), 1));
            z3.push({ x: f3(b3), y: h3(t4) });
          } else {
            const A5 = Tt(s2, c2, b3);
            z3.push({ x: f3(b3), y: h3(A5) });
          }
          for (let A5 = l2; A5 <= d3; A5++) {
            const e5 = y3(A5);
            e5 >= b3 && e5 <= w3 && z3.push({ x: v2(s2[A5].t), y: h3(s2[A5].c) });
          }
          if (w3 < x3) {
            const A5 = Tt(s2, c2, w3);
            z3.push({ x: f3(w3), y: h3(A5) });
          } else z3.push({ x: v2(s2[V3].t), y: h3(s2[V3].c) });
          if (z3.length < 2) return;
          const X3 = z3[0].x, M3 = z3[z3.length - 1].x;
          A4.save(), A4.beginPath(), A4.moveTo(z3[0].x, z3[0].y);
          for (let e5 = 1; e5 < z3.length; e5++) A4.lineTo(z3[e5].x, z3[e5].y);
          A4.lineTo(M3, u3), A4.lineTo(X3, u3), A4.closePath(), A4.fillStyle = null == (i3 = null == (r3 = null == t3 ? void 0 : t3.base) ? void 0 : r3.style) ? void 0 : i3.area.fillColor, A4.fill(), A4.restore(), A4.save(), A4.beginPath(), A4.moveTo(z3[0].x, z3[0].y);
          for (let e5 = 1; e5 < z3.length; e5++) A4.lineTo(z3[e5].x, z3[e5].y);
          if (A4.strokeStyle = (null == (Q3 = null == (B3 = null == (a4 = null == t3 ? void 0 : t3.base) ? void 0 : a4.style) ? void 0 : B3.area) ? void 0 : Q3.strokeColor) || "blue", A4.lineWidth = (null == (E3 = null == (g4 = null == (o3 = null == t3 ? void 0 : t3.base) ? void 0 : o3.style) ? void 0 : g4.area) ? void 0 : E3.lineWidth) || 2, A4.stroke(), A4.restore(), t3.base.showOverlayLine) {
            const r4 = t3.base.overlays;
            if (r4 && r4.length && An(A4, e4, n3, r4, t3.base.style.overlay), Array.isArray(t3.base.overlayKinds) && t3.base.overlayKinds.length) {
              const r5 = t3.base.overlayKinds, i4 = t3.base.style.overlay, a5 = r5.map((A5) => _t(A5, i4));
              An(A4, e4, n3, a5, i4);
            }
          }
        }(A3, t2, f2, Q2);
        break;
      case Pt.Bar:
        !function(A4, e4, t3, n3) {
          var r3, i3, a4, B3, Q3, o3, g4, E3;
          const { allIntervals: s2, visibleStartIndex: l2, visibleEndIndex: d3, visibleRange: C2, intervalSeconds: c2, canvasWidth: I3, canvasHeight: u3 } = e4;
          if (d3 < l2 || 0 === s2.length) return;
          if (!isFinite(n3.range) || n3.range <= 0) return;
          const f3 = (A5) => u3 * (1 - (A5 - n3.min) / n3.range), v2 = C2.end - C2.start;
          if (v2 <= 0) return;
          const h3 = c2 / v2 * I3;
          if (h3 <= 0) return;
          const m3 = h3 * (1 - Math.max(0, Math.min(0.4, (null == (a4 = null == (i3 = null == (r3 = null == t3 ? void 0 : t3.base) ? void 0 : r3.style) ? void 0 : i3.candles) ? void 0 : a4.spacingFactor) ?? 0.2))), p2 = (h3 - m3) / 2, b3 = (A5) => Math.round(A5) + 0.5;
          A4.save(), A4.lineWidth = 1;
          const w3 = Math.max(0, Math.min(1, (null == (B3 = t3.base.style.bar) ? void 0 : B3.opacity) ?? 1));
          for (let e5 = l2; e5 <= d3; e5++) {
            const n4 = s2[e5], r4 = (n4.t - C2.start) / v2 * I3, i4 = r4 + p2;
            if (i4 + m3 < 0 || i4 > I3) continue;
            const a5 = r4 + h3 / 2, B4 = f3(n4.h), l3 = f3(n4.l), d4 = f3(n4.o), c3 = f3(n4.c), u4 = (n4.c >= n4.o ? null == (o3 = null == (Q3 = null == t3 ? void 0 : t3.base) ? void 0 : Q3.style) ? void 0 : o3.bar.bullColor : null == (E3 = null == (g4 = null == t3 ? void 0 : t3.base) ? void 0 : g4.style) ? void 0 : E3.bar.bearColor) || "green";
            A4.strokeStyle = u4, A4.globalAlpha = w3;
            const y3 = Math.max(3, Math.min(0.5 * h3, 16));
            A4.beginPath(), A4.moveTo(b3(a5), b3(B4)), A4.lineTo(b3(a5), b3(l3)), A4.moveTo(b3(a5 - y3), b3(d4)), A4.lineTo(b3(a5), b3(d4)), A4.moveTo(b3(a5), b3(c3)), A4.lineTo(b3(a5 + y3), b3(c3)), A4.stroke();
          }
          if (A4.restore(), t3.base.showOverlayLine) {
            const r4 = t3.base.overlays;
            if (r4 && r4.length && An(A4, e4, n3, r4, t3.base.style.overlay), Array.isArray(t3.base.overlayKinds) && t3.base.overlayKinds.length) {
              const r5 = t3.base.overlayKinds, i4 = t3.base.style.overlay, a5 = r5.map((A5) => _t(A5, i4));
              An(A4, e4, n3, a5, i4);
            }
          }
        }(A3, t2, f2, Q2);
        break;
      default:
        en(A3, t2, f2, Q2);
    }
  }, [f2, Q2, w2, y2]), lA2 = reactExports.useCallback((A3, e3) => {
    const { cssWidth: t2, cssHeight: n2, dpr: r2, width: i2, height: a3 } = A3, B2 = q2.current, Q3 = F2.current;
    if (B2 && Q3) {
      const A4 = B2.getContext("2d");
      A4 && (B2.width === i2 && B2.height === a3 || (B2.width = i2, B2.height = a3), A4.setTransform(r2, 0, 0, r2, 0, 0), A4.clearRect(0, 0, t2, n2), A4.drawImage(Q3, -e3, 0, t2, n2));
    }
  }, []), dA2 = reactExports.useCallback((A3, e3, t2) => {
    const { dpr: n2, cssWidth: r2, cssHeight: i2 } = e3, a3 = W2.current;
    if (f2.base.showHistogram && a3) {
      const e4 = r2, a4 = i2 * Math.max(0.1, Math.min(0.6, f2.base.style.histogram.heightRatio));
      A3.current || (A3.current = document.createElement("canvas"));
      const B2 = A3.current.getContext("2d");
      B2 && (A3.current.width === e4 * n2 && A3.current.height === a4 * n2 || (A3.current.width = e4 * n2, A3.current.height = a4 * n2), B2.setTransform(n2, 0, 0, n2, 0, 0), B2.clearRect(0, 0, e4, a4), function(A4, e5, t3) {
        var n3, r3, i3, a5, B3, Q3, o2, g3, E3, s2, l2;
        const { allIntervals: d3, visibleStartIndex: C2, visibleEndIndex: c2, visibleRange: I3, intervalSeconds: u3, canvasWidth: f3, canvasHeight: v2 } = e5;
        if (!d3.length || c2 < C2) return;
        if (!isFinite(null == I3 ? void 0 : I3.start) || !isFinite(null == I3 ? void 0 : I3.end)) return;
        const h3 = I3.end - I3.start;
        if (h3 <= 0) return;
        const m3 = u3 / h3 * f3, p2 = Math.max(0, Math.min(0.4, (null == (i3 = null == (r3 = null == (n3 = null == t3 ? void 0 : t3.base) ? void 0 : n3.style) ? void 0 : r3.candles) ? void 0 : i3.spacingFactor) ?? 0.2)), b3 = Math.max(1, m3 * (1 - p2)), w3 = (m3 - b3) / 2;
        let y3 = 0, P3 = false;
        const V3 = Math.max(0, C2 - 1), x3 = Math.min(d3.length - 1, c2 + 1);
        for (let A5 = V3; A5 <= x3; A5++) {
          const e6 = d3[A5], t4 = e6.v ?? Math.max(0, e6.h - e6.l);
          void 0 !== e6.v && (P3 = true), t4 > y3 && (y3 = t4);
        }
        if (!(y3 <= 0)) {
          A4.save(), A4.globalAlpha = Math.max(0, Math.min(1, (null == (Q3 = null == (B3 = null == (a5 = null == t3 ? void 0 : t3.base) ? void 0 : a5.style) ? void 0 : B3.histogram) ? void 0 : Q3.opacity) ?? 0.6)), A4.lineWidth = 0;
          for (let e6 = C2; e6 <= c2; e6++) {
            const n4 = d3[e6], r4 = Ot(n4.t, f3, I3) + w3;
            if (r4 > f3 || r4 + b3 < 0) continue;
            const i4 = P3 ? n4.v ?? 0 : Math.max(0, n4.h - n4.l);
            if (i4 <= 0) continue;
            const a6 = i4 / y3 * v2, B4 = v2 - a6, Q4 = n4.c >= n4.o;
            A4.fillStyle = (Q4 ? null == (g3 = null == (o2 = t3.base) ? void 0 : o2.style) ? void 0 : g3.histogram.bullColor : null == (l2 = null == (s2 = null == (E3 = t3.base) ? void 0 : E3.style) ? void 0 : s2.histogram) ? void 0 : l2.bearColor) || "green", A4.fillRect(r4, B4, b3, a6);
          }
          A4.restore();
        }
      }(B2, { ...t2, canvasWidth: e4, canvasHeight: a4 }, f2));
    }
  }, [f2, w2, y2]), CA2 = reactExports.useCallback((A3, e3) => {
    var t2, n2, r2, i2;
    const { dpr: a3, cssWidth: B2, cssHeight: Q3 } = A3, o2 = W2.current, g3 = j2.current;
    if ((null == (t2 = null == f2 ? void 0 : f2.base) ? void 0 : t2.showHistogram) && o2 && g3) {
      const A4 = o2.getContext("2d");
      if (A4) {
        const t3 = (null == (i2 = null == (r2 = null == (n2 = null == f2 ? void 0 : f2.base) ? void 0 : n2.style) ? void 0 : r2.histogram) ? void 0 : i2.heightRatio) ?? 0.2, E3 = B2, s2 = Q3 * Math.max(0.1, Math.min(0.6, t3)), l2 = Math.round(E3 * a3), d3 = Math.round(s2 * a3);
        o2.width === l2 && o2.height === d3 || (o2.width = l2, o2.height = d3), A4.setTransform(a3, 0, 0, a3, 0, 0), A4.clearRect(0, 0, E3, s2), A4.drawImage(g3, -e3, 0, E3, s2);
      }
    }
  }, [W2, j2, null == (V2 = null == f2 ? void 0 : f2.base) ? void 0 : V2.showHistogram, null == (X2 = null == (z2 = null == (x2 = null == f2 ? void 0 : f2.base) ? void 0 : x2.style) ? void 0 : z2.histogram) ? void 0 : X2.heightRatio]), cA2 = reactExports.useCallback((A3, e3) => {
    const { cssWidth: t2, cssHeight: n2, dpr: r2, width: i2, height: a3 } = A3, B2 = D2.current, Q3 = T2.current;
    if (B2 && Q3) {
      const A4 = B2.getContext("2d");
      A4 && (Si(B2, t2, n2, r2), A4.setTransform(r2, 0, 0, r2, 0, 0), A4.clearRect(0, 0, t2, n2), A4.drawImage(Q3, -e3, 0, t2, n2));
    }
  }, []), IA2 = reactExports.useCallback((A3) => {
    var e3;
    const { cssWidth: t2, cssHeight: n2, dpr: r2 } = A3, i2 = H2.current, a3 = Y2.current;
    if (!QA2 || !i2) return;
    const B2 = i2.getContext("2d");
    if (B2) {
      Si(i2, t2, n2, r2), B2.setTransform(r2, 0, 0, r2, 0, 0), B2.clearRect(0, 0, t2, n2);
      const A4 = f2.base.showCrosshair, o2 = A4 && f2.base.showCrosshairValues;
      if (A4 && aA2 && a3 && !G2 && !U2) {
        const A5 = Ti(f2);
        if (B2.save(), B2.lineWidth = A5 ? 1.5 : 1, A5) {
          const A6 = B2.createLinearGradient(a3.x, 0, a3.x, n2);
          A6.addColorStop(0, Ni), A6.addColorStop(1, Ki), B2.strokeStyle = A6, B2.shadowColor = "rgba(62, 197, 255, 0.35)", B2.shadowBlur = 8, B2.beginPath(), B2.moveTo(a3.x, 0), B2.lineTo(a3.x, n2), B2.stroke(), B2.shadowBlur = 0;
          const e4 = B2.createLinearGradient(0, a3.y, t2, a3.y);
          e4.addColorStop(0, Ni), e4.addColorStop(1, Ki), B2.strokeStyle = e4, B2.beginPath(), B2.moveTo(0, a3.y), B2.lineTo(t2, a3.y), B2.stroke(), B2.beginPath(), B2.arc(a3.x, a3.y, 5, 0, 2 * Math.PI), B2.strokeStyle = Ni, B2.lineWidth = 2, B2.stroke(), B2.beginPath(), B2.arc(a3.x, a3.y, 2.2, 0, 2 * Math.PI), B2.fillStyle = Ki, B2.fill();
        } else B2.strokeStyle = (null == (e3 = f2.base.style.axes) ? void 0 : e3.lineColor) || "rgba(100, 100, 100, 0.7)", B2.beginPath(), B2.moveTo(a3.x, 0), B2.lineTo(a3.x, n2), B2.moveTo(0, a3.y), B2.lineTo(t2, a3.y), B2.stroke();
        if (B2.restore(), o2 && QA2) {
          const A6 = f2.base.style.axes, e4 = Dt(a3.x, QA2.canvasWidth, QA2.visibleRange), r3 = Ft(a3.y, QA2.canvasHeight, Q2), i3 = t2 < 540, o3 = Oi.formatDateForInterval(new Date(1e3 * e4), A6, oA2, i3), g3 = Oi.formatPrice(r3, A6), E3 = A6.font || "12px system-ui, sans-serif";
          B2.font = E3;
          const s2 = f2.base.theme === ft.dark || f2.base.theme === ft.grey, l2 = s2 ? "rgba(28, 30, 38, 0.9)" : "rgba(255, 255, 255, 0.92)", d3 = A6.textColor || (s2 ? "#e8eaef" : "#1f2328"), C2 = 4, c2 = f2.axes.yAxisPosition === It.left, I3 = B2.measureText(o3).width, u3 = 12;
          let v2 = a3.x;
          const h3 = I3 / 2 + C2;
          v2 + h3 > t2 - 2 && (v2 = t2 - 2 - h3), v2 - h3 < 2 && (v2 = 2 + h3);
          const m3 = I3 + 2 * C2, p2 = u3 + 2 * C2, b3 = v2 - m3 / 2, w3 = n2 - p2 - 3;
          B2.fillStyle = l2, B2.fillRect(b3, w3, m3, p2), B2.fillStyle = d3, B2.textAlign = "center", B2.textBaseline = "middle", B2.fillText(o3, v2, w3 + p2 / 2), B2.textAlign = c2 ? "left" : "right", B2.textBaseline = "middle";
          const y3 = B2.measureText(g3).width + 2 * C2, P3 = u3 + 2 * C2, V3 = c2 ? 3 : t2 - y3 - 3, x3 = a3.y - P3 / 2;
          B2.fillStyle = l2, B2.fillRect(V3, x3, y3, P3), B2.fillStyle = d3, B2.textAlign = "center", B2.fillText(g3, V3 + y3 / 2, a3.y);
        }
      } else $2.current && QA2 && bn(B2, [$2.current], d2, QA2, Q2);
    }
  }, [H2, Y2, M2, G2, U2, d2, bn, QA2, Q2, f2]), uA2 = reactExports.useCallback(() => {
    if (!QA2) return;
    const A3 = tA2.current;
    if (!A3) return;
    F2.current || (F2.current = document.createElement("canvas"));
    const e3 = F2.current.getContext("2d");
    e3 && (sA2(e3, A3, QA2), dA2(j2, A3, QA2), ((A4, e4, t2) => {
      const { cssWidth: n2, cssHeight: r2, dpr: i2 } = e4;
      if (!t2) return;
      A4.current || (A4.current = document.createElement("canvas"));
      const a3 = A4.current.getContext("2d");
      if (a3) {
        const e5 = Math.round(n2 * i2), B2 = Math.round(r2 * i2);
        A4.current.width === e5 && A4.current.height === B2 || (A4.current.width = e5, A4.current.height = B2), a3.setTransform(i2, 0, 0, i2, 0, 0), a3.clearRect(0, 0, n2, r2), bn(a3, g2, d2, t2, Q2);
      }
    })(T2, A3, QA2));
  }, [QA2, f2, g2, d2, Q2, sA2, dA2, rA2]);
  reactExports.useEffect(() => {
    let A3 = false;
    return (Fi ? Promise.resolve(Fi) : (ji || (ji = new Promise((A4) => {
      const e3 = new Image(), t2 = new Image(), n2 = new Image();
      let r2 = 0;
      const i2 = () => {
        r2 += 1, r2 < 3 || (e3.naturalWidth > 0 && t2.naturalWidth > 0 && n2.naturalWidth > 0 ? (Fi = { light: e3, dark: t2, grey: n2 }, A4(Fi)) : A4(null));
      };
      e3.onload = i2, t2.onload = i2, n2.onload = i2, e3.onerror = i2, t2.onerror = i2, n2.onerror = i2, e3.src = Hi, t2.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAAMaCAYAAADZeeswAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAFAKADAAQAAAABAAADGgAAAAAL2uNnAABAAElEQVR4AezdCaxt2V3f+T2ec6f3br2aXPWwq8pVnssjZYJtwJhEJEIJ3epulTu0kijtVgzGGBKwnA7Cyo0abGwTbJSI7q5IdBAB0bwEo3YHWgjJVqdBqJsK4PbsGuyaXr15uNM5Z0/9+/3XOc8FbTt21bv3Pt/33df3DHtYe+/PflJdfvzXWlnGggACCCCAAAIIIIAAAggggAACCCCAAAKHVGDID+mNcVsIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggMBBCuQHeXLOjQACCCCAAAIIIIAAAterwJBv3P+ZerLTrfblqP3g//ayzetVgvtGAAEEEEBgrwUIAPdamPYRQAABBBBA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AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAahV1EwAAALhJREFUAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECDyVwP8D1IiZUwOGM6gAAAAASUVORK5CYII=", n2.src = Wi;
    })), ji)).then((e3) => {
      A3 || (nA2.current = e3, iA2((A4) => A4 + 1));
    }), () => {
      A3 = true;
    };
  }, []);
  const fA2 = reactExports.useCallback(() => {
    N2.current = null;
    const A3 = K2.current, e3 = tA2.current;
    e3 && (lA2(e3, A3), CA2(e3, A3), cA2(e3, A3), IA2(e3));
  }, [G2, U2, M2, lA2, CA2, cA2, IA2]), vA2 = reactExports.useCallback(() => {
    N2.current || (N2.current = window.requestAnimationFrame(fA2));
  }, [fA2]);
  reactExports.useEffect(() => (QA2 && (uA2(), vA2()), () => {
    N2.current && ("number" == typeof N2.current && window.cancelAnimationFrame(N2.current), N2.current = null);
  }), [QA2, uA2, vA2]), reactExports.useEffect(() => {
    if (QA2) return uA2(), vA2(), () => {
      N2.current && ("number" == typeof N2.current && window.cancelAnimationFrame(N2.current), N2.current = null);
    };
  }, [Q2, QA2, uA2, vA2]);
  const hA2 = reactExports.useMemo(() => ({ onPanStart: () => {
    k2(true);
  }, onPan: (A3) => {
    K2.current = A3, vA2();
  }, onPanEnd: (A3) => {
    k2(false);
    const t2 = tA2.current;
    if (!t2 || 0 === A3) return K2.current = 0, void vA2();
    const n2 = t2.cssWidth, r2 = A3 * ((e2.end - e2.start) / n2), i2 = Math.round(e2.start - r2), B2 = i2 + (e2.end - e2.start);
    a2({ start: i2, end: B2 }), K2.current = 0;
  }, onWheelStart: () => {
    Z2(true);
  }, onWheelEnd: () => {
    Z2(false);
  } }), [e2, a2, vA2, h2.width]);
  !function(A3, e3, t2, n2, r2, i2, a3, B2) {
    const Q3 = reactExports.useRef(null), g3 = reactExports.useRef({ visibleRange: n2, setVisibleRange: r2, intervalsArray: t2, intervalSeconds: i2, handlers: a3, getCssWidth: B2 });
    reactExports.useEffect(() => {
      g3.current = { visibleRange: n2, setVisibleRange: r2, intervalsArray: t2, intervalSeconds: i2, handlers: a3, getCssWidth: B2 };
    }), reactExports.useEffect(() => {
      const n3 = A3.current;
      if (!n3 || !e3 || 0 === t2.length) return;
      const r3 = { current: false }, i3 = { x: 0, y: 0 }, a4 = (A4) => {
        0 === A4.button && (r3.current = true, i3.x = A4.clientX, i3.y = A4.clientY, g3.current.handlers.onPanStart());
      }, B3 = (e4) => {
        var t3, n4;
        if (!r3.current) return;
        const { visibleRange: a5, setVisibleRange: B4, intervalsArray: Q4, intervalSeconds: o3 } = g3.current, E4 = e4.clientX - i3.x, s3 = e4.clientY - i3.y, l3 = Math.abs(E4) >= Math.abs(s3) ? E4 : s3, d3 = A3.current, C2 = (null == (n4 = (t3 = g3.current).getCssWidth) ? void 0 : n4.call(t3)) ?? d3.getBoundingClientRect().width, c2 = a5.end - a5.start, I3 = C2 > 0 ? c2 / C2 : 0;
        if (!isFinite(I3) || 0 === I3) return i3.x = e4.clientX, void (i3.y = e4.clientY);
        const u3 = -l3 * I3 * 1.5, f3 = Q4[0].t, v2 = Q4[Q4.length - 1].t + o3, h3 = 2 * Math.max(o3, 1);
        B4((A4) => {
          const e5 = A4.end - A4.start;
          let t4 = A4.start + u3;
          const n5 = f3 - e5 + Math.min(e5, 20 * h3), r4 = v2 - Math.min(e5, 2 * h3), i4 = Math.min(n5, r4), a6 = Math.max(n5, r4);
          return t4 = Math.max(i4, Math.min(t4, a6)), { start: t4, end: t4 + e5 };
        }), i3.x = e4.clientX, i3.y = e4.clientY;
      }, o2 = () => {
        r3.current && (r3.current = false, g3.current.handlers.onPanEnd(0));
      }, E3 = () => o2(), s2 = () => o2(), l2 = (e4) => {
        var t3, r4, i4, a5;
        e4.preventDefault();
        const { visibleRange: B4, setVisibleRange: o3, intervalsArray: E4, intervalSeconds: s3, handlers: l3 } = g3.current;
        if (e4.ctrlKey || e4.metaKey) {
          l3.onWheelStart(), Q3.current && clearTimeout(Q3.current), Q3.current = setTimeout(() => {
            l3.onWheelEnd();
          }, 150);
          const A4 = B4.end - B4.start, d3 = 0.4 * -A4 * (e4.deltaY / 100);
          if (Math.abs(e4.deltaY) < 1) return;
          const C2 = n3.getBoundingClientRect(), c2 = (null == (r4 = (t3 = g3.current).getCssWidth) ? void 0 : r4.call(t3)) ?? C2.width, I3 = e4.clientX - C2.left, u3 = c2 > 0 ? I3 / c2 : 0.5;
          let f3 = B4.start + d3 * u3, v2 = B4.end - d3 * (1 - u3);
          const h3 = 5 * ((null == (i4 = E4[1]) ? void 0 : i4.t) - (null == (a5 = E4[0]) ? void 0 : a5.t) || s3);
          if (v2 - f3 < h3) return;
          const m3 = E4[E4.length - 1].t, p2 = 2 * Math.max(s3, 1), b3 = m3 + Math.max(A4, 20 * p2);
          f3 = Math.max(f3, E4[0].t - A4), v2 = Math.min(v2, Math.max(f3 + h3, b3)), o3({ start: f3, end: v2 });
        } else {
          const t4 = Math.abs(e4.deltaX) >= Math.abs(e4.deltaY) ? e4.deltaX : e4.deltaY, n4 = E4[0].t, r5 = E4[E4.length - 1].t + s3, i5 = 2 * Math.max(s3, 1);
          o3((e5) => {
            var a6, B5;
            const Q4 = e5.end - e5.start, o4 = A3.current, E5 = (null == (B5 = (a6 = g3.current).getCssWidth) ? void 0 : B5.call(a6)) ?? o4.getBoundingClientRect().width, s4 = E5 > 0 ? Q4 / E5 : 0;
            if (!isFinite(s4) || 0 === s4) return e5;
            const l4 = t4 * s4 * 1.5;
            let d3 = e5.start + l4;
            const C2 = n4 - Q4 + Math.min(Q4, 20 * i5), c2 = r5 - Math.min(Q4, 2 * i5), I3 = Math.min(C2, c2), u3 = Math.max(C2, c2);
            return d3 = Math.max(I3, Math.min(d3, u3)), { start: d3, end: d3 + Q4 };
          });
        }
      };
      return n3.addEventListener("mousedown", a4), window.addEventListener("mousemove", B3), window.addEventListener("mouseup", E3), n3.addEventListener("mouseleave", s2), n3.addEventListener("wheel", l2, { passive: false }), () => {
        n3.removeEventListener("mousedown", a4), window.removeEventListener("mousemove", B3), window.removeEventListener("mouseup", E3), n3.removeEventListener("mouseleave", s2), n3.removeEventListener("wheel", l2), Q3.current && clearTimeout(Q3.current);
      };
    }, [A3, e3]);
  }(H2, BA2, gA2, e2, a2, oA2, hA2, () => h2.width);
  const mA2 = (A3) => {
    var e3, t2;
    const n2 = A3.currentTarget.getBoundingClientRect(), r2 = { x: A3.clientX - n2.left, y: A3.clientY - n2.top };
    if (Y2.current = r2, M2 !== v.none && M2 !== v.select && M2 !== v.editShape && M2 !== v.drawPolyline && $2.current && QA2 && ((null == (e3 = $2.current) ? void 0 : e3.points.length) ?? 0) > 0) {
      const A4 = { time: Dt(r2.x, QA2.canvasWidth, QA2.visibleRange), price: Ft(r2.y, QA2.canvasHeight, Q2) };
      Ji($2.current, QA2, Q2), M2 === v.drawAngle && $2.current instanceof mn && 2 === _2.current ? $2.current.updateSecondRayEnd(A4) : null == (t2 = $2.current) || t2.updateLastPoint(A4);
    }
    if (QA2) {
      const A4 = Dt(r2.x, QA2.canvasWidth, QA2.visibleRange), e4 = gA2.find((e5) => A4 >= e5.t && A4 < e5.t + oA2);
      (null == e4 ? void 0 : e4.t) !== (null == S2 ? void 0 : S2.t) && J2(e4 || null);
    }
    vA2();
  };
  return reactExports.useImperativeHandle(P2, () => ({ getCanvasSize() {
    const A3 = tA2.current;
    return { width: (null == A3 ? void 0 : A3.width) ?? 0, height: (null == A3 ? void 0 : A3.height) ?? 0, dpr: (null == A3 ? void 0 : A3.dpr) ?? (window.devicePixelRatio || 1) };
  }, getMainCanvasElement: () => q2.current, clearCanvas() {
    if (null == F2 ? void 0 : F2.current) {
      const A3 = F2.current.getContext("2d");
      A3 && A3.clearRect(0, 0, F2.current.width, F2.current.height);
    }
    if (null == j2 ? void 0 : j2.current) {
      const A3 = j2.current.getContext("2d");
      A3 && A3.clearRect(0, 0, j2.current.width, j2.current.height);
    }
    if (null == T2 ? void 0 : T2.current) {
      const A3 = T2.current.getContext("2d");
      A3 && A3.clearRect(0, 0, T2.current.width, T2.current.height);
    }
  }, redrawCanvas() {
    vA2();
  } }), [vA2]), jsxRuntimeExports.jsxs(pt, { className: "inner-canvas-container", $xAxisHeight: b2.INITIAL_X_AXIS_HEIGHT, ref: m2, children: [jsxRuntimeExports.jsxs(bt, { className: "charting-container", children: [jsxRuntimeExports.jsx(ht, { className: "chart-data-canvas", ref: q2, $zIndex: 1, $heightPrecent: 100 }), f2.base.showHistogram && jsxRuntimeExports.jsx(ht, { className: "histogram-canvas", ref: W2, $heightPrecent: Math.round(100 * Math.max(0.1, Math.min(0.6, f2.base.style.histogram.heightRatio))), $zIndex: 2, style: { opacity: f2.base.style.histogram.opacity } }), jsxRuntimeExports.jsx(ht, { className: "drawings-canvas", ref: D2, $heightPrecent: 100, $zIndex: 3 }), jsxRuntimeExports.jsx(mt, { className: "drawing-interaction-canvas", ref: H2, onMouseMove: mA2, onMouseLeave: () => {
    Y2.current = void 0, R2(null), J2(null), vA2();
  }, onMouseEnter: mA2, onMouseDown: (A3) => {
    var e3, t2, n2, r2;
    if (!QA2) return;
    if (!tA2.current) return;
    const i2 = A3.currentTarget.getBoundingClientRect(), a3 = A3.clientX - i2.left, B2 = A3.clientY - i2.top;
    if ((M2 === v.select || M2 === v.editShape) && I2) {
      for (let A4 = g2.length - 1; A4 >= 0; A4--) {
        const e4 = g2[A4];
        if (null == e4 ? void 0 : e4.isHit(a3, B2, QA2, Q2)) return void I2(A4);
      }
      return void I2(null);
    }
    if (aA2) return;
    const o2 = { time: Dt(a3, QA2.canvasWidth, QA2.visibleRange), price: Ft(B2, QA2.canvasHeight, Q2) };
    M2 === v.drawAngle && 2 === _2.current || (M2 !== v.drawPolyline || (null == (e3 = $2.current) ? void 0 : e3.points.length) >= 1 ? (null == (t2 = $2.current) || t2.setFirstPoint(o2), Ji($2.current, QA2, Q2)) : M2 === v.drawPolyline && 1 === (null == (n2 = $2.current) ? void 0 : n2.points.length) && (null == (r2 = $2.current) || r2.addPoint(o2)));
  }, onMouseUp: () => {
    var A3;
    if (!$2.current || !Y2.current || !QA2 || M2 === v.drawPolyline) return;
    const e3 = { time: Dt(Y2.current.x, QA2.canvasWidth, QA2.visibleRange), price: Ft(Y2.current.y, QA2.canvasHeight, Q2) };
    if (Ji($2.current, QA2, Q2), M2 === v.drawAngle && $2.current instanceof mn) {
      const A4 = $2.current;
      if (1 === _2.current) {
        if (A4.updateLastPoint(e3), A4.getPoints().length < 2) return;
        return _2.current = 2, void vA2();
      }
      if (A4.updateSecondRayEnd(e3), A4.getPoints().length < 3) return;
      return E2((e4) => [...e4, A4]), void EA2();
    }
    null == (A3 = $2.current) || A3.updateLastPoint(e3);
    const t2 = $2.current;
    t2.getPoints().length < function(A4) {
      switch (A4) {
        case v.drawCustomSymbol:
          return 1;
        case v.drawTriangle:
        default:
          return 2;
      }
    }(M2) || (E2((A4) => [...A4, t2]), EA2());
  }, onWheel: (A3) => {
    BA2 || (A3.preventDefault(), A3.stopPropagation());
  }, onDoubleClick: (A3) => {
    if (!QA2) return;
    const e3 = A3.currentTarget.getBoundingClientRect(), t2 = A3.clientX - e3.left, n2 = A3.clientY - e3.top;
    if (M2 === v.drawPolyline && $2.current && Y2.current) {
      const A4 = $2.current;
      return E2((e4) => [...e4, A4]), void EA2();
    }
    if ((M2 === v.none || M2 === v.select || M2 === v.editShape) && u2) for (let e4 = g2.length - 1; e4 >= 0; e4--) {
      const r2 = g2[e4];
      if (null == r2 ? void 0 : r2.isHit(t2, n2, QA2, Q2)) return null == I2 || I2(e4), u2(e4), void A3.preventDefault();
    }
  }, onContextMenu: (A3) => {
    if (null == d2 || !u2 || !QA2 || d2 < 0 || d2 >= g2.length) return;
    const e3 = A3.currentTarget.getBoundingClientRect(), t2 = A3.clientX - e3.left, n2 = A3.clientY - e3.top, r2 = g2[d2];
    (null == r2 ? void 0 : r2.isHit(t2, n2, QA2, Q2)) && (A3.preventDefault(), u2(d2));
  }, $heightPrecent: 100, $zIndex: 4, style: { cursor: BA2 ? G2 ? "grabbing" : "grab" : M2 === v.select || M2 === v.editShape ? "default" : "crosshair", backgroundColor: "transparent" } })] }), f2.base.showCandleTooltip && S2 && !G2 && !M2 && !U2 && jsxRuntimeExports.jsx(wt, { className: "intervals-data-tooltip", $isPositive: S2.c > S2.o, $isRTL: "rtl" === ni(f2.base.style.axes.locale).direction, $variant: f2.base.theme === ft.dark || f2.base.theme === ft.grey ? ft.dark : ft.light, $compact: h2.width < 440 || h2.height < 280, title: (() => {
    const A3 = f2.base.style.axes, e3 = A3.language || "en", t2 = S2, n2 = h2.width < 440 || h2.height < 280, r2 = [Oi.formatDateForInterval(new Date(1e3 * t2.t), A3, oA2, n2), `${ii("open", e3)} ${Oi.formatPrice(t2.o, A3)}`, `${ii("high", e3)} ${Oi.formatPrice(t2.h, A3)}`, `${ii("low", e3)} ${Oi.formatPrice(t2.l, A3)}`, `${ii("close", e3)} ${Oi.formatPrice(t2.c, A3)}`];
    return void 0 !== t2.v && r2.push(`${ii("volume", e3)} ${Oi.formatPrice(t2.v, { ...A3, numberNotation: xt.compact })}`), r2.join(" · ");
  })(), children: (() => {
    const A3 = f2.base.style.axes, e3 = A3.language || "en", i2 = f2.base.theme, a3 = i2 === ft.dark || i2 === ft.grey, B2 = S2.c - S2.o, Q3 = B2 / S2.o, o2 = a3 ? B2 >= 0 ? "#7ee2b8" : "#ff9e9e" : B2 >= 0 ? "green" : "red", g3 = h2.width < 440 || h2.height < 280, E3 = Oi.formatDateForInterval(new Date(1e3 * S2.t), A3, oA2, g3), s2 = g3 ? { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px 8px", alignItems: "baseline", width: "100%" } : { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 12px", alignItems: "baseline", width: "100%" };
    return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("div", { style: { fontWeight: "bold", borderBottom: a3 ? "1px solid rgba(255,255,255,0.14)" : "1px solid rgba(0,0,0,0.1)", marginBottom: g3 ? 2 : 4, paddingBottom: 2 }, children: E3 }), jsxRuntimeExports.jsxs("div", { style: s2, children: [jsxRuntimeExports.jsxs("span", { children: [ii("open", e3), ": ", Oi.formatPrice(S2.o, A3)] }), jsxRuntimeExports.jsxs("span", { children: [ii("high", e3), ": ", Oi.formatPrice(S2.h, A3)] }), jsxRuntimeExports.jsxs("span", { children: [ii("low", e3), ": ", Oi.formatPrice(S2.l, A3)] }), jsxRuntimeExports.jsxs("span", { children: [ii("close", e3), ": ", Oi.formatPrice(S2.c, A3)] })] }), jsxRuntimeExports.jsxs("div", { style: { marginTop: g3 ? 2 : 4 }, children: [ii("change", e3), ":", " ", jsxRuntimeExports.jsxs("span", { style: { color: o2, fontWeight: "bold" }, children: [Oi.formatPrice(B2, { ...A3, metricType: Mt.pnl, showSign: true }), " ", "(", Oi.formatPrice(Q3, { ...A3, useCurrency: false, unit: "%", maximumFractionDigits: 2, showSign: true }), ")"] })] }), void 0 !== S2.v && jsxRuntimeExports.jsxs("div", { style: { fontSize: g3 ? 10 : 11, opacity: a3 ? 0.88 : 0.8, marginTop: g3 ? 2 : 4 }, children: [ii("volume", e3), ":", " ", Oi.formatPrice(S2.v, { ...A3, numberNotation: xt.compact })] })] });
  })() })] });
}), _i = lt.canvas`
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    min-width: 0;
    min-height: 0;
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: none;
    pointer-events: none;
`, Aa = 12, ea = 86400, ta = [1, 2, 5, 10, 15, 30, 60, 120, 300, 600, 900, 1800, 3600, 7200, 10800, 14400, 21600, 28800, 43200, 86400, 2 * ea, 3 * ea, 7 * ea, 14 * ea, 30 * ea, 60 * ea, 90 * ea, 180 * ea, 365 * ea, 730 * ea, 1825 * ea];
function na(A2) {
  const e2 = ta.findIndex((e3) => e3 > A2);
  return e2 >= 0 ? ta[e2] : 2 * A2;
}
function ra(A2) {
  for (let e2 = ta.length - 1; e2 >= 0; e2--) {
    const t2 = ta[e2];
    if (t2 < A2) return t2;
  }
  return Math.max(1, A2 / 2);
}
function ia(A2, e2, t2, n2) {
  return (t2 || "").toLowerCase().startsWith("d") ? { day: "numeric", month: "short" } : { month: "short", day: "numeric" };
}
function aa(A2, e2) {
  var t2, n2, r2;
  const i2 = { year: "numeric", month: "2-digit", day: "2-digit" };
  e2 && (i2.timeZone = e2);
  const a2 = new Intl.DateTimeFormat("en-US", i2).formatToParts(new Date(1e3 * A2));
  return { y: parseInt((null == (t2 = a2.find((A3) => "year" === A3.type)) ? void 0 : t2.value) || "0", 10), m: parseInt((null == (n2 = a2.find((A3) => "month" === A3.type)) ? void 0 : n2.value) || "0", 10), d: parseInt((null == (r2 = a2.find((A3) => "day" === A3.type)) ? void 0 : r2.value) || "0", 10) };
}
function Ba(A2, e2, t2, n2, r2, i2, a2, B2, Q2, o2 = "en-US", g2, E2) {
  const { start: s2, end: l2 } = e2, d2 = null != E2 && E2 > 0 ? E2 : A2.clientWidth;
  if (s2 >= l2 || d2 <= 0 || t2 <= 0) return [];
  const C2 = A2.getContext("2d");
  if (!C2) throw new Error("Cannot get canvas context");
  const c2 = Math.min(t2, function(A3, e3, t3) {
    const n3 = Math.floor(A3 / 88);
    return Math.max(2, Math.min(t3, n3));
  }(d2, 0, t2)), { tickHeight: I2 = 10, tickColor: u2 = a2, labelColor: f2 = a2, labelFont: v2 = `${Aa}px Arial`, labelOffset: h2 = 15, axisY: m2 = A2.clientHeight - i2 } = Q2, p2 = function(A3, e3, t3, n3, r3, i3, a3, B3, Q3) {
    const o3 = e3 - A3;
    if (!(o3 > 0) || t3 <= 0) return [];
    const g3 = function(A4, e4, t4) {
      if (!(A4 > 0) || e4 < 2) return Math.max(1, A4);
      let n4 = A4 / Math.max(2, e4);
      switch (t4) {
        case yt.High:
          n4 *= 0.5;
          break;
        case yt.Medium:
          n4 *= 1.1;
          break;
        case yt.Low:
          n4 *= 2.2;
      }
      let r4 = ta[ta.length - 1];
      for (const A5 of ta) if (A5 >= n4) {
        r4 = A5;
        break;
      }
      for (; A4 / r4 > e4 + 0.5; ) {
        const A5 = na(r4);
        if (A5 <= r4) break;
        r4 = A5;
      }
      for (; A4 / r4 < 2 && r4 > ta[0]; ) {
        const A5 = ra(r4);
        if (A5 >= r4) break;
        r4 = A5;
      }
      return Math.max(1, r4);
    }(o3, n3, r3), E3 = function(A4, e4) {
      return A4 < 60 ? { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: e4 } : A4 < 3600 || A4 < ea ? { hour: "2-digit", minute: "2-digit", hour12: e4 } : A4 < 14 * ea ? { day: "numeric" } : A4 < 60 * ea ? { month: "short", day: "numeric" } : A4 < 400 * ea ? { month: "short" } : { year: "numeric" };
    }(g3, i3), s3 = [], l3 = 1e-9 * g3;
    for (let n4 = Math.ceil(A3 / g3) * g3; n4 <= e3 + l3; n4 += g3) {
      const e4 = (n4 - A3) / o3 * t3;
      if (e4 < -0.5 || e4 > t3 + 0.5) continue;
      const r4 = aa(n4 - g3, B3), i4 = aa(n4, B3), l4 = i4.y !== r4.y, d3 = l4 || i4.m !== r4.m, C3 = d3 || i4.d !== r4.d;
      let c3 = E3;
      g3 >= 25 * ea && g3 < 365 * ea ? c3 = l4 ? { year: "numeric" } : { month: "short" } : g3 >= ea && g3 < 25 * ea ? c3 = l4 ? { year: "numeric" } : d3 ? { month: "short" } : { day: "numeric" } : g3 < ea ? (l4 || d3 || C3) && (c3 = ia(0, 0, Q3)) : g3 >= 365 * ea && (c3 = { year: "numeric" });
      const I3 = Xi(n4, c3, a3, B3);
      s3.push({ position: e4, label: I3 });
    }
    return 0 === s3.length && s3.push({ position: 0, label: Xi(A3, E3, a3, B3) }, { position: t3, label: Xi(e3, E3, a3, B3) }), s3;
  }(s2, l2, d2, c2, B2, r2, o2, g2, n2);
  return 0 === p2.length ? [] : (function(A3, e3, t3, n3, r3, i3, a3, B3, Q3) {
    A3.save();
    const o3 = (A4) => Math.round(A4) + 0.5;
    A3.strokeStyle = r3, A3.lineWidth = 1, A3.beginPath(), A3.moveTo(o3(0), Q3), A3.lineTo(o3(e3), Q3), A3.stroke(), t3.forEach((g3, E3) => {
      const s3 = o3(g3.position);
      A3.strokeStyle = r3, A3.lineWidth = 1, A3.beginPath(), A3.moveTo(s3, Q3), A3.lineTo(s3, Q3 + n3), A3.stroke(), A3.fillStyle = i3, A3.font = a3, A3.textAlign = "center", A3.textBaseline = "top";
      const l3 = A3.measureText(g3.label).width;
      let d3 = g3.position;
      0 === E3 && d3 - l3 / 2 < 2 ? d3 = l3 / 2 + 2 : E3 === t3.length - 1 && d3 + l3 / 2 > e3 - 2 && (d3 = e3 - l3 / 2 - 2), A3.fillText(g3.label, d3, Q3 + B3 + 5);
    }), A3.restore();
  }(C2, d2, p2, I2, u2, f2, v2, h2, m2), p2);
}
function Qa({ canvasSizes: A2, xAxisHeight: e2, visibleRange: n2, timeDetailLevel: r2, timeFormat12h: i2, formatting: a2, dateFormat: B2 = "MMM d", locale: Q2 = "en-US", timezone: g2 }) {
  const E2 = reactExports.useRef(null), s2 = reactExports.useCallback(() => {
    const A3 = E2.current;
    if (!A3) return;
    const t2 = window.devicePixelRatio || 1, o2 = A3.getBoundingClientRect(), s3 = o2.width, l2 = o2.height;
    if (s3 <= 0 || l2 <= 0) return;
    (A3.width !== Math.round(s3 * t2) || A3.height !== Math.round(l2 * t2)) && (A3.width = Math.round(s3 * t2), A3.height = Math.round(l2 * t2)), A3.style.width = `${s3}px`, A3.style.height = `${l2}px`;
    const d2 = A3.getContext("2d");
    d2 && (d2.setTransform(t2, 0, 0, t2, 0, 0), d2.clearRect(0, 0, s3, l2), Ba(A3, n2, 100, B2, i2, e2, a2.lineColor, r2, { tickHeight: 8, labelOffset: 4, labelFont: a2.font, tickColor: a2.lineColor, labelColor: a2.textColor, axisY: 0 }, Q2, g2, s3));
  }, [n2.start, n2.end, r2, i2, e2, A2.width, A2.height, B2, Q2, g2, a2.font, a2.lineColor, a2.textColor]);
  return reactExports.useLayoutEffect(() => {
    const A3 = E2.current;
    if (!A3) return;
    const e3 = new ResizeObserver(() => {
      requestAnimationFrame(() => s2());
    });
    return e3.observe(A3), s2(), () => e3.disconnect();
  }, [s2]), jsxRuntimeExports.jsx(_i, { className: "startTime-Axis-Canvas", ref: E2, $height: e2 });
}
const oa = lt.canvas`
    display: flex;
    width: 100%;
    height: 100% !important;
    box-sizing: border-box;
    min-width: 0;
    min-height: 0;
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: none;
    pointer-events: none;
`;
function ga({ yAxisPosition: A2, minPrice: e2, maxPrice: n2, numberOfYTicks: r2, formatting: i2 }) {
  const a2 = reactExports.useRef(null), B2 = reactExports.useCallback(() => {
    const t2 = a2.current;
    if (!t2) return;
    const B3 = window.devicePixelRatio || 1, Q2 = t2.getBoundingClientRect();
    (t2.width !== Math.round(Q2.width * B3) || t2.height !== Math.round(Q2.height * B3)) && (t2.width = Math.round(Q2.width * B3), t2.height = Math.round(Q2.height * B3)), t2.style.width = `${Q2.width}px`, t2.style.height = `${Q2.height}px`;
    const o2 = t2.getContext("2d");
    o2 && (o2.setTransform(B3, 0, 0, B3, 0, 0), o2.clearRect(0, 0, Q2.width, Q2.height), function(A3, e3, t3, n3, r3 = It.left, i3 = "black", a3 = "black", B4 = "12px Arial", Q3 = 5, o3 = 5, g2 = {}) {
      const E2 = A3.getContext("2d");
      if (!E2) throw new Error("Cannot get canvas context");
      const s2 = A3.clientWidth, l2 = A3.clientHeight, d2 = l2 - 10 - 10, C2 = t3 - e3;
      E2.clearRect(0, 0, s2, l2);
      const c2 = Math.max(2, Math.floor(l2 / 40)), I2 = Math.min(n3, c2);
      if (!isFinite(e3) || !isFinite(t3) || !isFinite(C2) || C2 < 0 || I2 <= 1) return;
      let u2 = g2.numberFractionDigits;
      if (g2.autoPrecision) {
        const A4 = C2 / (I2 - 1);
        A4 > 0 && (u2 = Math.max(2, Math.ceil(-Math.log10(A4))));
      }
      !function(A4, e4, t4, n4, r4, i4, a4, B5, Q4) {
        A4.strokeStyle = r4, A4.fillStyle = i4, A4.font = a4, A4.textAlign = n4 == It.left ? ut.right : ut.left, A4.textBaseline = "middle";
        const o4 = n4 == It.left ? t4 : 0;
        A4.beginPath(), A4.moveTo(o4, 0), A4.lineTo(o4, A4.canvas.clientHeight), A4.stroke();
        for (const r5 of e4) {
          const e5 = n4 == It.left ? t4 : 0, i5 = n4 == It.left ? t4 - B5 : B5, a5 = n4 == It.left ? i5 - Q4 : i5 + Q4;
          A4.beginPath(), A4.moveTo(e5, r5.y), A4.lineTo(i5, r5.y), A4.stroke();
          let o5 = r5.label;
          const g3 = Math.max(0, t4 - B5 - Q4 - 2);
          let E3 = A4.measureText(o5).width;
          if (E3 > g3) if (g3 < A4.measureText("...").width) o5 = "";
          else {
            for (; o5.length > 0 && E3 > g3; ) o5 = o5.slice(0, -1), E3 = A4.measureText(o5 + "...").width;
            o5 += "...";
          }
          o5 && A4.fillText(o5, a5, r5.y);
        }
      }(E2, Array.from({ length: I2 }, (A4, e4) => {
        const n4 = e4 / (I2 - 1), r4 = t3 - n4 * C2;
        return { y: 10 + n4 * d2, label: Oi.formatPrice(r4, { ...g2, numberFractionDigits: u2 }) };
      }), s2, r3, i3, a3, B4, Q3, o3);
    }(t2, e2, n2, r2, A2, i2.lineColor, i2.textColor, i2.font, 5, 5, i2));
  }, [e2, n2, r2, A2, i2]);
  return reactExports.useLayoutEffect(() => {
    const A3 = a2.current;
    if (!A3) return;
    const e3 = new ResizeObserver(() => {
      requestAnimationFrame(() => B2());
    });
    return e3.observe(A3), B2(), () => e3.disconnect();
  }, [B2]), jsxRuntimeExports.jsx(oa, { className: "startPrice-axis-canvas", ref: a2, $position: A2 });
}
const Ea = lt.div`
    position: relative;
    display: grid;
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
    box-sizing: border-box;
    grid-template-rows: ${({ $showTopBar: A2, $showSymbolStrip: e2, $showRangeSelector: t2 }) => `${A2 || e2 ? "auto" : "0px"} minmax(0, 1fr) ${t2 ? "auto" : "0px"}`};
    grid-template-columns: ${({ $showLeftBar: A2 }) => A2 ? "auto minmax(0, 1fr)" : "0px minmax(0, 1fr)"};
`, sa = lt.div`
    grid-row: 1;
    grid-column: 1 / span 2;
    flex-shrink: 0;
    min-height: 0;
    min-width: 0;
    box-sizing: border-box;
    z-index: 2;
`, la = lt.div`
    grid-row: 1;
    grid-column: 1 / span 2;
    padding-bottom: 5px;
    min-height: 0;
    min-width: 0;
    overflow: visible;
    z-index: 2;
`, da = lt.div`
    grid-row: 2;
    grid-column: 1;
    overflow: hidden;
    min-width: 0;
    min-height: 0;
`, Ca = lt.div`
    display: grid;
    grid-template-columns: ${({ $yAxisPosition: A2, $yAxisWidth: e2 }) => A2 === It.left ? `${e2}px minmax(0, 1fr)` : `minmax(0, 1fr) ${e2}px`};
    grid-template-rows: minmax(0, 1fr) ${({ $xAxisHeight: A2 }) => `${A2}px`};
    position: relative;
    grid-row: 2;
    grid-column: 2;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
`, ca = lt.div`
    display: grid;
    grid-column: ${({ $yAxisPosition: A2 }) => A2 === It.right ? 1 : 2};
    grid-row: 1 / span 2;
    grid-template-rows: 1fr ${({ xAxisHeight: A2 }) => A2 ? `${A2}px` : "30px"};
    grid-template-columns: 1fr;
    height: 100%;
    min-width: 0;
    min-height: 0;
    position: relative;
    box-sizing: border-box;
`, Ia = lt.div`
    flex: 0 0 auto;
    height: 100%;
    min-width: 0;
    min-height: 0;
    box-sizing: border-box;
    grid-column: ${({ $yAxisPosition: A2 }) => A2 === It.left ? 1 : 2};
    grid-row: 1 / span 1;
`, ua = lt.div`
    grid-row: 2;
    grid-column: 1;
    height: ${({ xAxisHeight: A2 }) => A2 ? `${A2}px` : "40px"};
    box-sizing: border-box;
    min-width: 0;
    min-height: 0;
`, fa = lt.div`
    grid-row: 1;
    grid-column: 1;
    height: 100%;
    min-width: 0;
    min-height: 0;
    box-sizing: border-box;
    width: 100%;

`, va = lt.button`
    position: absolute;
    top: 8px;
    ${({ $yAxisPosition: A2 }) => A2 === It.left ? "right: 8px;" : "left: 8px;"}
    z-index: 100;
    cursor: pointer;
    background-color: var(--widget-bg-color, rgba(255, 255, 255, 0.8));
    border-radius: 4px;
    padding: 6px;
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
    opacity: 0.6;
    transition: opacity 0.2s ease, background-color 0.2s ease;
    border: 0;

    & svg {
        width: 16px;
        height: 16px;
        display: block;
        flex: 0 0 auto;
        opacity: 0.85;
    }

    &:hover {
        opacity: 1;
        background-color: var(--widget-hover-bg-color, #f0f0f0);
    }
`;
var ha = ((A2) => (A2.back = "back", A2.close = "close", A2))(ha || {});
const ma = Ct`
    from { transform: translateX(30px); opacity: 0; }
    to   { transform: translateX(0);    opacity: 1; }
`, pa = Ct`
    from { transform: translateX(-30px); opacity: 0; }
    to   { transform: translateX(0);     opacity: 1; }
`, ba = lt.div`
    position: ${({ $contained: A2 }) => A2 ? "absolute" : "fixed"};
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    box-sizing: border-box;
    overflow: hidden;
    backdrop-filter: blur(8px);
    background: ${({ $variant: A2 }) => A2 === ft.light ? "rgba(45, 55, 80, 0.28)" : "rgba(10, 12, 22, 0.62)"};
`, wa = lt.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: ${({ $variant: A2 }) => A2 === ft.light ? "linear-gradient(180deg, #ffffff 0%, #f0f4fc 100%)" : "linear-gradient(180deg, rgba(18, 20, 36, 0.98) 0%, rgba(12, 14, 26, 0.99) 100%)"};
    color: ${({ $variant: A2 }) => A2 === ft.light ? "#1a2332" : "#e7ebff"};
    border-radius: 0; /* Full-cover has no rounding */
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`, ya = lt.div`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: clamp(8px, 2.5vmin, 16px) clamp(12px, 3vmin, 20px);
    border-bottom: 1px solid
        ${({ $variant: A2 }) => A2 === ft.light ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.08)"};
    background: ${({ $variant: A2 }) => A2 === ft.light ? "rgba(0, 0, 0, 0.03)" : "rgba(255, 255, 255, 0.025)"};

    h2 {
        margin: 0;
        font-size: clamp(12px, 2.5vmin, 17px);
        font-weight: 600;
        letter-spacing: 0.4px;
        color: ${({ $variant: A2 }) => A2 === ft.light ? "#111827" : "#fff"};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`, Pa = lt.div`
    display: flex;
    align-items: center;
    gap: clamp(6px, 1.5vmin, 12px);
    min-width: 0;
`, Va = lt.button`
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: clamp(26px, 4.5vmin, 34px);
    height: clamp(26px, 4.5vmin, 34px);
    border-radius: 8px;
    border: none;
    background: transparent;
    color: ${({ $variant: A2, $theme: e2 }) => "back" === A2 ? "#3EC5FF" : e2 === ft.light ? "rgba(17, 24, 39, 0.55)" : "rgba(255, 255, 255, 0.55)"};
    cursor: pointer;
    transition: background 140ms ease, color 140ms ease;

    &:hover {
        background: ${({ $theme: A2 }) => A2 === ft.light ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.1)"};
        color: ${({ $variant: A2, $theme: e2 }) => "back" === A2 ? "#60D3FF" : e2 === ft.light ? "#111827" : "#fff"};
    }

    svg {
        width: clamp(13px, 2.5vmin, 18px);
        height: clamp(13px, 2.5vmin, 18px);
        display: block;
    }
`, xa = lt.div`
    display: block;
    width: clamp(7px, 1.4vmin, 10px);
    height: clamp(7px, 1.4vmin, 10px);
    border-left: 2.5px solid currentColor;
    border-bottom: 2.5px solid currentColor;
    transform: rotate(45deg);
    flex-shrink: 0;
    box-sizing: content-box; 
    margin-left: clamp(2px, 0.5vmin, 4px);

    [dir='rtl'] & {
        transform: rotate(-135deg);
        margin-left: 0;
        margin-right: clamp(2px, 0.5vmin, 4px);
    }
`, za = lt.div`
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
    padding: clamp(6px, 2vmin, 16px) clamp(10px, 2.5vmin, 20px);
    display: flex;
    flex-direction: column;
    gap: clamp(4px, 1.2vmin, 10px);

    /* Thin custom scrollbar */
    &::-webkit-scrollbar { width: 4px; }
    &::-webkit-scrollbar-track { background: transparent; }
    &::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 2px; }
`, Xa = lt.button`
    display: flex;
    align-items: center;
    gap: clamp(8px, 1.8vmin, 14px);
    width: 100%;
    padding: clamp(8px, 1.8vmin, 14px) clamp(10px, 2vmin, 16px);
    border-radius: clamp(6px, 1.2vmin, 10px);
    border: 1px solid
        ${({ $variant: A2 }) => A2 === ft.light ? "rgba(99, 102, 241, 0.25)" : "rgba(120, 130, 255, 0.15)"};
    background: ${({ $variant: A2 }) => A2 === ft.light ? "rgba(99, 102, 241, 0.06)" : "rgba(255, 255, 255, 0.04)"};
    color: ${({ $variant: A2 }) => A2 === ft.light ? "#1e293b" : "#e7ebff"};
    font-size: clamp(11px, 2vmin, 14px);
    font-weight: 500;
    cursor: pointer;
    text-align: left;
    transition: background 140ms ease, border-color 140ms ease, transform 100ms ease;

    &:hover {
        background: ${({ $variant: A2 }) => A2 === ft.light ? "rgba(59, 130, 246, 0.12)" : "rgba(62, 197, 255, 0.08)"};
        border-color: ${({ $variant: A2 }) => A2 === ft.light ? "rgba(59, 130, 246, 0.45)" : "rgba(62, 197, 255, 0.3)"};
        transform: translateX(2px);
    }

    .tile-icon {
        font-size: clamp(14px, 2.5vmin, 20px);
        line-height: 1;
        flex-shrink: 0;
    }

    .tile-label { flex: 1; }

    .tile-arrow {
        font-size: clamp(10px, 1.8vmin, 14px);
        color: ${({ $variant: A2 }) => A2 === ft.light ? "rgba(15, 23, 42, 0.35)" : "rgba(255,255,255,0.35)"};
        flex-shrink: 0;
    }
`, Ma = lt.div`
    display: flex;
    flex-direction: column;
    gap: clamp(4px, 1.2vmin, 10px);
    animation: ${({ $back: A2 }) => gt`${A2 ? pa : ma} 180ms ease`};
`, Oa = lt.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: clamp(6px, 1.5vmin, 12px) clamp(8px, 1.8vmin, 14px);
    border-radius: clamp(6px, 1vmin, 8px);
    background: ${({ $variant: A2 }) => A2 === ft.light ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.03)"};
    gap: 8px;
`, qa = lt.label`
    font-size: clamp(11px, 2vmin, 13px);
    font-weight: 500;
    color: ${({ $variant: A2 }) => A2 === ft.light ? "rgba(15, 23, 42, 0.88)" : "rgba(235, 240, 255, 0.82)"};
    flex: 1;
    min-width: 0;
`, Ha = lt.div`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: flex-end;
    padding: clamp(6px, 1.5vmin, 12px) clamp(10px, 2.5vmin, 20px);
    gap: clamp(6px, 1.2vmin, 10px);
    border-top: 1px solid
        ${({ $variant: A2 }) => A2 === ft.light ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.07)"};
    background: ${({ $variant: A2 }) => A2 === ft.light ? "rgba(0, 0, 0, 0.03)" : "rgba(0, 0, 0, 0.12)"};
`, Wa = lt.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: clamp(4px, 1vmin, 8px);
    height: clamp(28px, 4.5vmin, 36px);
    padding: 0 clamp(10px, 2vmin, 16px);
    border-radius: 8px;
    font-size: clamp(11px, 1.9vmin, 14px);
    font-weight: 600;
    cursor: pointer;
    transition: all 150ms ease;
    outline: none;
    white-space: nowrap;

    ${({ $primary: A2, $variant: e2 }) => A2 ? "\n        background-image: linear-gradient(180deg, rgba(62,197,255,1), rgba(90,72,222,1));\n        border: 1px solid transparent;\n        color: #fff;\n        box-shadow: 0 4px 12px rgba(90,72,222,0.4), inset 0 1px 0 rgba(255,255,255,0.3);\n        &:hover { box-shadow: 0 6px 16px rgba(90,72,222,0.6); transform: translateY(-1px); }\n        &:active { transform: translateY(0); }\n    " : e2 === ft.light ? "\n        background: rgba(0,0,0,0.05);\n        border: 1px solid rgba(0,0,0,0.12);\n        color: rgba(17,24,39,0.85);\n        &:hover { background: rgba(0,0,0,0.08); color: #111827; }\n    " : "\n        background: rgba(255,255,255,0.07);\n        border: 1px solid rgba(255,255,255,0.14);\n        color: rgba(255,255,255,0.78);\n        &:hover { background: rgba(255,255,255,0.12); color: #fff; }\n    "}

    svg { width: clamp(12px, 2vmin, 16px); height: clamp(12px, 2vmin, 16px); }
`, Da = lt.div`
    position: relative;
    flex-shrink: 0;
    width: clamp(32px, 5.5vmin, 44px);
    height: clamp(18px, 3vmin, 24px);
    background: ${({ $checked: A2 }) => A2 ? "linear-gradient(180deg, #3EC5FF, #5A48DE)" : "rgba(255,255,255,0.14)"};
    border-radius: 100px;
    cursor: ${({ $disabled: A2 }) => A2 ? "not-allowed" : "pointer"};
    opacity: ${({ $disabled: A2 }) => A2 ? 0.42 : 1};
    pointer-events: ${({ $disabled: A2 }) => A2 ? "none" : "auto"};
    transition: background 200ms ease;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.3);

    &::after {
        content: '';
        position: absolute;
        top: 2px;
        left: ${({ $checked: A2 }) => A2 ? "calc(100% - 2px - clamp(14px, 2.6vmin, 20px))" : "2px"};
        width: clamp(14px, 2.6vmin, 20px);
        height: clamp(14px, 2.6vmin, 20px);
        background: #fff;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        transition: left 180ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
`, Fa = lt.input`
    flex-shrink: 0;
    width: clamp(44px, 7vmin, 60px);
    height: clamp(24px, 4vmin, 32px);
    background: ${({ $variant: A2 }) => A2 === ft.light ? "#ffffff" : "rgba(0,0,0,0.25)"};
    border: 1px solid
        ${({ $variant: A2 }) => A2 === ft.light ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.15)"};
    border-radius: 6px;
    color: ${({ $variant: A2 }) => A2 === ft.light ? "#111827" : "#fff"};
    padding: 0 6px;
    font-size: clamp(11px, 1.9vmin, 14px);
    text-align: center;
    outline: none;
    &:focus {
        border-color: rgba(62, 197, 255, 0.8);
        box-shadow: 0 0 0 2px rgba(62, 197, 255, 0.2);
    }
`, ja = lt.input`
    flex-shrink: 0;
    width: clamp(24px, 4vmin, 32px);
    height: clamp(24px, 4vmin, 32px);
    border: none;
    border-radius: 6px;
    background: transparent;
    cursor: pointer;
    padding: 0;
    outline: none;
    &::-webkit-color-swatch-wrapper {
        padding: 0;
    }
    &::-webkit-color-swatch {
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
    }
`, Ta = lt.select`
    flex-shrink: 0;
    height: clamp(24px, 4vmin, 32px);
    background: ${({ $variant: A2 }) => A2 === ft.light ? "#ffffff" : "rgba(0,0,0,0.25)"};
    border: 1px solid
        ${({ $variant: A2 }) => A2 === ft.light ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.15)"};
    border-radius: 6px;
    color: ${({ $variant: A2 }) => A2 === ft.light ? "#111827" : "#fff"};
    padding: 0 clamp(4px, 0.8vmin, 8px);
    font-size: clamp(11px, 1.9vmin, 14px);
    outline: none;
    cursor: pointer;
    option {
        background: ${({ $variant: A2 }) => A2 === ft.light ? "#ffffff" : "#1a1c29"};
        color: ${({ $variant: A2 }) => A2 === ft.light ? "#111827" : "#fff"};
    }
    &:focus {
        border-color: rgba(62, 197, 255, 0.8);
    }
`, Na = lt.p`
    margin: clamp(4px, 1vmin, 8px) 0 clamp(2px, 0.5vmin, 4px);
    font-size: clamp(9px, 1.6vmin, 11px);
    font-weight: 700;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: ${({ $variant: A2 }) => A2 === ft.light ? "rgba(79, 70, 229, 0.85)" : "rgba(120, 150, 255, 0.7)"};
    padding-left: clamp(6px, 1.2vmin, 10px);
`, Ka = lt.input`
    flex: 1;
    min-width: 0;
    height: clamp(28px, 4.5vmin, 36px);
    padding: 0 10px;
    border-radius: 6px;
    border: 1px solid
        ${({ $variant: A2 }) => A2 === ft.light ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.15)"};
    background: ${({ $variant: A2 }) => A2 === ft.light ? "#ffffff" : "rgba(0,0,0,0.25)"};
    color: ${({ $variant: A2 }) => A2 === ft.light ? "#111827" : "#fff"};
    font-size: clamp(11px, 1.9vmin, 14px);
    outline: none;
    box-sizing: border-box;
    &:focus {
        border-color: rgba(62, 197, 255, 0.8);
        box-shadow: 0 0 0 2px rgba(62, 197, 255, 0.15);
    }
    &::placeholder {
        color: ${({ $variant: A2 }) => A2 === ft.light ? "rgba(15,23,42,0.4)" : "rgba(255,255,255,0.35)"};
    }
`, Ya = ({ active: A2, name: e2, children: r2 }) => {
  const a2 = i.useId(), B2 = i.useId();
  return jsxRuntimeExports.jsxs("svg", { className: `icon-${e2}`, width: "100%", height: "100%", viewBox: "0 0 24 24", preserveAspectRatio: "xMidYMid meet", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true, children: [jsxRuntimeExports.jsxs("defs", { children: [jsxRuntimeExports.jsxs("linearGradient", { id: a2, x1: "0", y1: "0", x2: "1", y2: "1", children: [jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: A2 ? "#3EC5FF" : "#2979FF" }), jsxRuntimeExports.jsx("stop", { offset: "60%", stopColor: A2 ? "#6A5ACD" : "#4B32C3" }), jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: A2 ? "#8A2BE2" : "#5B3FFF" })] }), jsxRuntimeExports.jsx("filter", { id: B2, x: "-50%", y: "-50%", width: "200%", height: "200%", children: jsxRuntimeExports.jsx("feDropShadow", { dx: "0", dy: "0", stdDeviation: "1.6", floodColor: "#6A5ACD", floodOpacity: A2 ? "0.65" : "0" }) })] }), jsxRuntimeExports.jsxs("g", { stroke: `url(#${a2})`, filter: `url(#${B2})`, children: [jsxRuntimeExports.jsx("style", { children: "*{vector-effect:non-scaling-stroke}" }), r2] })] });
}, Ga = 1.8, ka = 1.3, Ua = ({ active: A2 }) => jsxRuntimeExports.jsxs(Ya, { active: A2, name: "line", children: [jsxRuntimeExports.jsx("path", { d: "M4 16.5 L14.5 9.5 L20 6", strokeWidth: Ga }), jsxRuntimeExports.jsx("circle", { cx: "4", cy: "16.5", r: "1.2", fill: "currentColor" }), jsxRuntimeExports.jsx("circle", { cx: "14.5", cy: "9.5", r: "1.2", fill: "currentColor" }), jsxRuntimeExports.jsx("circle", { cx: "20", cy: "6", r: "1.2", fill: "currentColor" })] }), Za = ({ active: A2 }) => jsxRuntimeExports.jsxs(Ya, { active: A2, name: "rectangle", children: [jsxRuntimeExports.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2.5", strokeWidth: Ga }), jsxRuntimeExports.jsx("line", { x1: "8", y1: "9.5", x2: "16", y2: "9.5", strokeWidth: 1, opacity: 0.8 }), jsxRuntimeExports.jsx("line", { x1: "8", y1: "14.5", x2: "16", y2: "14.5", strokeWidth: 1, opacity: 0.8 })] }), La = ({ active: A2 }) => jsxRuntimeExports.jsxs(Ya, { active: A2, name: "circle", children: [jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "7", strokeWidth: Ga }), jsxRuntimeExports.jsx("polyline", { points: "12,5 12,12 16.5,12", strokeWidth: ka, opacity: 0.9 })] }), Ra = ({ active: A2 }) => jsxRuntimeExports.jsxs(Ya, { active: A2, name: "triangle", children: [jsxRuntimeExports.jsx("polygon", { points: "12,4.5 19,18 5,18", fill: "none", strokeWidth: ka }), jsxRuntimeExports.jsx("polygon", { points: "12,9.5 15,15 9,15", fill: "none", strokeWidth: 1, opacity: 0.85 })] }), Sa = ({ active: A2 }) => jsxRuntimeExports.jsxs(Ya, { active: A2, name: "angle", children: [jsxRuntimeExports.jsx("polyline", { points: "5,18 12,6 19,18", strokeWidth: Ga }), jsxRuntimeExports.jsx("path", { d: "M12 6 A6.5 6.5 0 0 1 18 12.5", strokeWidth: 1, opacity: 0.9 })] }), Ja = ({ active: A2 }) => jsxRuntimeExports.jsxs(Ya, { active: A2, name: "select", children: [jsxRuntimeExports.jsx("polygon", { points: "7,4 17,12 12,13 11,18", fill: "none", strokeWidth: Ga }), jsxRuntimeExports.jsx("line", { x1: "12.2", y1: "13", x2: "16.5", y2: "17.3", strokeWidth: ka })] }), $a = ({ active: A2 }) => jsxRuntimeExports.jsxs(Ya, { active: A2, name: "pencil", children: [jsxRuntimeExports.jsx("polygon", { points: "4,16.8 7.2,20 20,7.2 16.8,4", fill: "none", strokeWidth: Ga }), jsxRuntimeExports.jsx("line", { x1: "14.2", y1: "6.6", x2: "17.4", y2: "9.8", strokeWidth: ka })] }), _a = ({ active: A2 }) => jsxRuntimeExports.jsxs(Ya, { active: A2, name: "gear", children: [jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "5.3", strokeWidth: Ga }), jsxRuntimeExports.jsx("line", { x1: "12", y1: "5.5", x2: "12", y2: "7.2", strokeWidth: ka }), jsxRuntimeExports.jsx("line", { x1: "12", y1: "16.8", x2: "12", y2: "18.5", strokeWidth: ka }), jsxRuntimeExports.jsx("line", { x1: "5.5", y1: "12", x2: "7.2", y2: "12", strokeWidth: ka }), jsxRuntimeExports.jsx("line", { x1: "16.8", y1: "12", x2: "18.5", y2: "12", strokeWidth: ka }), jsxRuntimeExports.jsx("line", { x1: "7.7", y1: "7.7", x2: "9.0", y2: "9.0", strokeWidth: ka }), jsxRuntimeExports.jsx("line", { x1: "15.0", y1: "15.0", x2: "16.3", y2: "16.3", strokeWidth: ka }), jsxRuntimeExports.jsx("line", { x1: "15.0", y1: "9.0", x2: "16.3", y2: "7.7", strokeWidth: ka }), jsxRuntimeExports.jsx("line", { x1: "7.7", y1: "16.3", x2: "9.0", y2: "15.0", strokeWidth: ka }), jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "2.0", strokeWidth: 1 })] }), AB = ({ active: A2 }) => jsxRuntimeExports.jsxs(Ya, { active: A2, name: "camera", children: [jsxRuntimeExports.jsx("rect", { x: "3.5", y: "6.5", width: "17", height: "11", rx: "2.5", strokeWidth: Ga }), jsxRuntimeExports.jsx("path", { d: "M8 6.5 L10 4.5 H14 L16 6.5", strokeWidth: ka }), jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "3.2", strokeWidth: Ga }), jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "1.2", strokeWidth: 1, opacity: 0.9 }), jsxRuntimeExports.jsx("circle", { cx: "6.2", cy: "9.2", r: "0.7", strokeWidth: 1 })] }), eB = ({ active: A2 }) => jsxRuntimeExports.jsxs(Ya, { active: A2, name: "search", children: [jsxRuntimeExports.jsx("circle", { cx: "10.5", cy: "10.5", r: "4.8", strokeWidth: Ga }), jsxRuntimeExports.jsx("line", { x1: "14.2", y1: "14.2", x2: "19", y2: "19", strokeWidth: ka })] }), tB = ({ active: A2 }) => jsxRuntimeExports.jsxs(Ya, { active: A2, name: "range", children: [jsxRuntimeExports.jsx("path", { d: "M6 7 L6 17 M18 7 L18 17", strokeWidth: Ga }), jsxRuntimeExports.jsx("polyline", { points: "9.5,9.5 12,7.8 14.5,9.5", strokeWidth: ka }), jsxRuntimeExports.jsx("polyline", { points: "9.5,14.5 12,16.2 14.5,14.5", strokeWidth: ka })] }), nB = ({ active: A2 }) => jsxRuntimeExports.jsxs(Ya, { active: A2, name: "download", children: [jsxRuntimeExports.jsx("path", { d: "M12 5 L12 14", strokeWidth: Ga }), jsxRuntimeExports.jsx("polyline", { points: "8.5,11.5 12,15 15.5,11.5", strokeWidth: Ga }), jsxRuntimeExports.jsx("rect", { x: "5", y: "16", width: "14", height: "2", rx: "1", strokeWidth: ka })] }), rB = ({ active: A2 }) => jsxRuntimeExports.jsxs(Ya, { active: A2, name: "refresh", children: [jsxRuntimeExports.jsx("path", { d: "M7.5 8.5 A5.5 5.5 0 1 1 8 18", strokeWidth: Ga }), jsxRuntimeExports.jsx("polyline", { points: "7.5,5.5 7.5,8.8 4.5,8.8", strokeWidth: ka })] }), iB = ({ active: A2 }) => jsxRuntimeExports.jsxs(Ya, { active: A2, name: "theme", children: [jsxRuntimeExports.jsx("path", { d: "M14.8 6.2 A6.8 6.8 0 1 0 18 16.2 A5.0 5.0 0 1 1 14.8 6.2", strokeWidth: Ga }), jsxRuntimeExports.jsx("circle", { cx: "16.8", cy: "7.2", r: "0.6", strokeWidth: 1 }), jsxRuntimeExports.jsx("circle", { cx: "17.6", cy: "9.4", r: "0.5", strokeWidth: 1 })] }), aB = ({ active: A2 }) => jsxRuntimeExports.jsxs(Ya, { active: A2, name: "sun", children: [jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "3.6", strokeWidth: Ga }), jsxRuntimeExports.jsx("line", { x1: "12", y1: "2.2", x2: "12", y2: "5.2", strokeWidth: ka }), jsxRuntimeExports.jsx("line", { x1: "12", y1: "18.8", x2: "12", y2: "21.8", strokeWidth: ka }), jsxRuntimeExports.jsx("line", { x1: "3.5", y1: "12", x2: "6.5", y2: "12", strokeWidth: ka }), jsxRuntimeExports.jsx("line", { x1: "17.5", y1: "12", x2: "20.5", y2: "12", strokeWidth: ka }), jsxRuntimeExports.jsx("line", { x1: "5.6", y1: "5.6", x2: "7.7", y2: "7.7", strokeWidth: ka }), jsxRuntimeExports.jsx("line", { x1: "16.3", y1: "16.3", x2: "18.4", y2: "18.4", strokeWidth: ka }), jsxRuntimeExports.jsx("line", { x1: "5.6", y1: "18.4", x2: "7.7", y2: "16.3", strokeWidth: ka }), jsxRuntimeExports.jsx("line", { x1: "16.3", y1: "7.7", x2: "18.4", y2: "5.6", strokeWidth: ka })] }), BB = ({ active: A2 }) => jsxRuntimeExports.jsxs(Ya, { active: A2, name: "chart-line", children: [jsxRuntimeExports.jsx("polyline", { points: "4,16 10,10 16,14 20,6", strokeWidth: Ga }), jsxRuntimeExports.jsx("circle", { cx: "4", cy: "16", r: "1", fill: "currentColor" }), jsxRuntimeExports.jsx("circle", { cx: "10", cy: "10", r: "1", fill: "currentColor" }), jsxRuntimeExports.jsx("circle", { cx: "16", cy: "14", r: "1", fill: "currentColor" }), jsxRuntimeExports.jsx("circle", { cx: "20", cy: "6", r: "1", fill: "currentColor" })] }), QB = ({ active: A2 }) => jsxRuntimeExports.jsxs(Ya, { active: A2, name: "chart-bar", children: [jsxRuntimeExports.jsx("rect", { x: "5", y: "10", width: "3", height: "8", strokeWidth: Ga }), jsxRuntimeExports.jsx("rect", { x: "11", y: "7", width: "3", height: "11", strokeWidth: Ga }), jsxRuntimeExports.jsx("rect", { x: "17", y: "4", width: "3", height: "14", strokeWidth: Ga })] }), oB = ({ active: A2 }) => jsxRuntimeExports.jsxs(Ya, { active: A2, name: "chart-candle", children: [jsxRuntimeExports.jsx("line", { x1: "8", y1: "5", x2: "8", y2: "19", strokeWidth: 1 }), jsxRuntimeExports.jsx("rect", { x: "6", y: "9", width: "4", height: "6", strokeWidth: Ga }), jsxRuntimeExports.jsx("line", { x1: "8", y1: "9", x2: "8", y2: "15", strokeWidth: 1 }), jsxRuntimeExports.jsx("line", { x1: "8", y1: "9", x2: "8", y2: "15", strokeWidth: 1 }), jsxRuntimeExports.jsx("line", { x1: "16", y1: "5", x2: "16", y2: "19", strokeWidth: 1 }), jsxRuntimeExports.jsx("rect", { x: "14", y: "7", width: "4", height: "10", strokeWidth: Ga }), jsxRuntimeExports.jsx("line", { x1: "16", y1: "7", x2: "16", y2: "17", strokeWidth: 1 }), jsxRuntimeExports.jsx("line", { x1: "16", y1: "7", x2: "16", y2: "17", strokeWidth: 1 })] }), gB = ({ active: A2 }) => jsxRuntimeExports.jsxs(Ya, { active: A2, name: "chart-area", children: [jsxRuntimeExports.jsx("path", { d: "M4,16 L8,10 L14,14 L20,8 L20,20 L4,20 Z", strokeWidth: Ga, fill: "currentColor", fillOpacity: 0.2 }), jsxRuntimeExports.jsx("polyline", { points: "4,16 8,10 14,14 20,8", strokeWidth: Ga })] }), EB = ({ active: A2 }) => jsxRuntimeExports.jsx("svg", { className: "icon-arrow-down", width: "100%", height: "100%", viewBox: "0 0 24 24", preserveAspectRatio: "xMidYMid meet", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true, children: jsxRuntimeExports.jsx("polyline", { points: "6,9 12,15 18,9", strokeWidth: "2.5" }) }), sB = ({ active: A2 }) => jsxRuntimeExports.jsxs(Ya, { active: A2, name: "close", children: [jsxRuntimeExports.jsx("line", { x1: "5", y1: "5", x2: "19", y2: "19", strokeWidth: Ga }), jsxRuntimeExports.jsx("line", { x1: "5", y1: "19", x2: "19", y2: "5", strokeWidth: Ga })] }), lB = ({ active: A2 }) => jsxRuntimeExports.jsxs(Ya, { active: A2, name: "save", children: [jsxRuntimeExports.jsx("path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z", strokeWidth: ka, fill: "none" }), jsxRuntimeExports.jsx("polyline", { points: "17 21 17 13 7 13 7 21", strokeWidth: ka, fill: "none" }), jsxRuntimeExports.jsx("polyline", { points: "7 3 7 8 15 8", strokeWidth: ka, fill: "none" })] }), dB = ({ isOpen: A2, onClose: e2, shape: i2, onApply: a2, themeVariant: Q2 = ft.dark }) => {
  const o2 = Q2, [g2, E2] = reactExports.useState(null);
  if (reactExports.useEffect(() => {
    A2 && i2 && E2(function(A3) {
      const e3 = A3.style, t2 = e3.selected || {}, n2 = A3 instanceof dn;
      return { lineColor: e3.lineColor, lineWidth: e3.lineWidth, lineStyle: e3.lineStyle, fillColor: e3.fillColor, selectedLineColor: t2.lineColor ?? e3.lineColor, selectedLineWidthAdd: t2.lineWidthAdd ?? 1, selectedLineStyle: t2.lineStyle ?? e3.lineStyle, selectedFillColor: t2.fillColor ?? "", symbolText: n2 ? A3.symbol : "", symbolSize: n2 ? A3.size : 20 };
    }(i2));
  }, [A2, i2]), !A2 || !i2 || !g2) return null;
  const s2 = `Shape properties — ${i2.type}`, d2 = i2 instanceof dn, C2 = (A3, e3) => E2((t2) => t2 ? { ...t2, [A3]: e3 } : t2);
  return jsxRuntimeExports.jsx(ba, { $variant: o2, $contained: true, onClick: e2, className: "shape-props-modal-overlay", children: jsxRuntimeExports.jsxs(wa, { $variant: o2, onClick: (A3) => A3.stopPropagation(), className: "shape-props-modal-container", children: [jsxRuntimeExports.jsxs(ya, { $variant: o2, className: "shape-props-header", children: [jsxRuntimeExports.jsx(Pa, { children: jsxRuntimeExports.jsx("h2", { children: s2 }) }), jsxRuntimeExports.jsx(Va, { $theme: o2, $variant: ha.close, onClick: e2, "aria-label": "Close", children: jsxRuntimeExports.jsx(sB, {}) })] }), jsxRuntimeExports.jsxs(za, { className: "shape-props-body", children: [jsxRuntimeExports.jsx(Na, { $variant: o2, children: "Stroke & fill" }), jsxRuntimeExports.jsxs(Oa, { $variant: o2, children: [jsxRuntimeExports.jsx(qa, { $variant: o2, children: "Stroke color" }), jsxRuntimeExports.jsx(ja, { type: "color", value: g2.lineColor, onChange: (A3) => C2("lineColor", A3.target.value) })] }), jsxRuntimeExports.jsxs(Oa, { $variant: o2, children: [jsxRuntimeExports.jsx(qa, { $variant: o2, children: "Line width" }), jsxRuntimeExports.jsx(Fa, { $variant: o2, type: "number", min: 1, max: 16, value: g2.lineWidth, onChange: (A3) => C2("lineWidth", Math.max(1, parseInt(A3.target.value, 10) || 1)) })] }), jsxRuntimeExports.jsxs(Oa, { $variant: o2, children: [jsxRuntimeExports.jsx(qa, { $variant: o2, children: "Line style" }), jsxRuntimeExports.jsxs(Ta, { $variant: o2, value: g2.lineStyle, onChange: (A3) => C2("lineStyle", A3.target.value), children: [jsxRuntimeExports.jsx("option", { value: Nt.solid, children: "Solid" }), jsxRuntimeExports.jsx("option", { value: Nt.dashed, children: "Dashed" }), jsxRuntimeExports.jsx("option", { value: Nt.dotted, children: "Dotted" })] })] }), jsxRuntimeExports.jsxs(Oa, { $variant: o2, children: [jsxRuntimeExports.jsx(qa, { $variant: o2, children: "Fill color" }), jsxRuntimeExports.jsx(Ka, { $variant: o2, type: "text", value: g2.fillColor, onChange: (A3) => C2("fillColor", A3.target.value), placeholder: "rgba(0,0,0,0) or #hex", dir: "ltr" })] }), jsxRuntimeExports.jsx(Na, { $variant: o2, children: "When selected" }), jsxRuntimeExports.jsxs(Oa, { $variant: o2, children: [jsxRuntimeExports.jsx(qa, { $variant: o2, children: "Highlight stroke" }), jsxRuntimeExports.jsx(ja, { type: "color", value: g2.selectedLineColor, onChange: (A3) => C2("selectedLineColor", A3.target.value) })] }), jsxRuntimeExports.jsxs(Oa, { $variant: o2, children: [jsxRuntimeExports.jsx(qa, { $variant: o2, children: "Extra width" }), jsxRuntimeExports.jsx(Fa, { $variant: o2, type: "number", min: 0, max: 8, value: g2.selectedLineWidthAdd, onChange: (A3) => C2("selectedLineWidthAdd", Math.max(0, parseInt(A3.target.value, 10) || 0)) })] }), jsxRuntimeExports.jsxs(Oa, { $variant: o2, children: [jsxRuntimeExports.jsx(qa, { $variant: o2, children: "Highlight line style" }), jsxRuntimeExports.jsxs(Ta, { $variant: o2, value: g2.selectedLineStyle, onChange: (A3) => C2("selectedLineStyle", A3.target.value), children: [jsxRuntimeExports.jsx("option", { value: Nt.solid, children: "Solid" }), jsxRuntimeExports.jsx("option", { value: Nt.dashed, children: "Dashed" }), jsxRuntimeExports.jsx("option", { value: Nt.dotted, children: "Dotted" })] })] }), jsxRuntimeExports.jsxs(Oa, { $variant: o2, children: [jsxRuntimeExports.jsx(qa, { $variant: o2, children: "Highlight fill (optional)" }), jsxRuntimeExports.jsx(Ka, { $variant: o2, type: "text", value: g2.selectedFillColor, onChange: (A3) => C2("selectedFillColor", A3.target.value), placeholder: "Leave empty to use stroke only", dir: "ltr" })] }), d2 && jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx(Na, { $variant: o2, children: "Symbol" }), jsxRuntimeExports.jsxs(Oa, { $variant: o2, children: [jsxRuntimeExports.jsx(qa, { $variant: o2, children: "Text" }), jsxRuntimeExports.jsx(Ka, { $variant: o2, type: "text", value: g2.symbolText, onChange: (A3) => C2("symbolText", A3.target.value), maxLength: 8, dir: "ltr" })] }), jsxRuntimeExports.jsxs(Oa, { $variant: o2, children: [jsxRuntimeExports.jsx(qa, { $variant: o2, children: "Font size" }), jsxRuntimeExports.jsx(Fa, { $variant: o2, type: "number", min: 8, max: 120, value: g2.symbolSize, onChange: (A3) => C2("symbolSize", Math.max(8, Math.min(120, parseInt(A3.target.value, 10) || 20))) })] })] })] }), jsxRuntimeExports.jsxs(Ha, { $variant: o2, children: [jsxRuntimeExports.jsx(Wa, { $variant: o2, type: "button", onClick: e2, children: "Cancel" }), jsxRuntimeExports.jsxs(Wa, { $variant: o2, $primary: true, type: "button", onClick: () => {
    a2(i2, g2), e2();
  }, children: [jsxRuntimeExports.jsx(lB, {}), "Apply"] })] })] }) });
}, CB = lt.div.attrs({ className: "toolbar-container" })`
    box-sizing: border-box;
    width: clamp(24px, 5vmin, 40px); 
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;
    max-height: 100%;

    /* Transparent surface with subtle frame and depth */
    background: transparent;
    border-radius: 14px;
    position: relative;

    /* soft frame */
    border: 1px solid rgba(128, 140, 255, 0.18);
    box-shadow: 0 10px 28px rgba(17, 19, 39, 0.20),
    inset 0 0 0 1px rgba(255, 255, 255, 0.12);

    ${({ $primeGlass: A2, $primeGlassLight: e2 }) => A2 && e2 && gt`
            background: rgba(255, 255, 255, 0.82);
            border: 1px solid rgba(90, 72, 222, 0.22);
            box-shadow:
                0 10px 28px rgba(15, 23, 42, 0.08),
                inset 0 0 0 1px rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);

            & .vertical-toolbar-button {
                border: 1px solid rgba(90, 72, 222, 0.28);
                background-color: rgba(255, 255, 255, 0.55);

                &::after {
                    background: radial-gradient(
                        120% 120% at 30% 0%,
                        rgba(255, 255, 255, 0.95) 0%,
                        rgba(62, 197, 255, 0.12) 52%,
                        rgba(90, 72, 222, 0.08) 100%
                    );
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.85);
                }

                &:hover {
                    box-shadow: 0 8px 22px rgba(15, 23, 42, 0.12);
                    background-color: rgba(255, 255, 255, 0.78);
                    background-image: linear-gradient(
                        180deg,
                        rgba(62, 197, 255, 0.4),
                        rgba(90, 72, 222, 0.38)
                    );
                }

                &:hover svg {
                    fill: rgba(90, 72, 222, 0.35);
                    stroke: rgba(2, 132, 199, 0.65);
                }
            }
        `}

    ${({ $primeGlass: A2, $primeGlassLight: e2 }) => A2 && !e2 && gt`
            background: rgba(15, 18, 25, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
        `}
`, cB = lt.div.attrs({ className: "toolbar-content" })`
    box-sizing: border-box;
    width: 100%;
    flex: 1 1 0;
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    overflow-y: auto;
    min-height: 0;
    gap: 2px;
    padding: 1px;
    
    /* Hide scrollbars but allow scrolling */
    /* Hide scrollbars but allow scrolling */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
    }

    & > * {
        flex-shrink: 0;
    }

    & .tooltip-wrapper {
        width: 100%;
    }
`, IB = lt.button.attrs({ className: "vertical-toolbar-button" })`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 1 / 1;
    padding: 0;
    margin: 0;
    overflow: hidden;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    outline: none;
    border-radius: 12px;
    border: 1px solid rgba(120, 100, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.06);
    background-clip: border-box, padding-box;


    &::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 12px;
        background: radial-gradient(120% 120% at 30% 0%, rgba(255, 255, 255, 0.20) 0%, rgba(112, 124, 255, 0.08) 50%, rgba(32, 40, 78, 0.18) 100%);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25);
        opacity: 0.9;
        pointer-events: none;

    }

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 8px 22px rgba(25, 30, 60, 0.25);
        background-color: rgba(255, 255, 255, 0.09);
        background-image: linear-gradient(180deg, rgba(62, 197, 255, 0.65), rgba(90, 72, 222, 0.65));
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 3px 10px rgba(25, 30, 60, 0.22), inset 0 1px 3px rgba(0, 0, 0, 0.15);
    }

    ${({ $selected: A2 }) => A2 && "\n        box-shadow: 0 10px 28px rgba(80, 90, 220, 0.35), 0 0 0 3px rgba(120, 130, 255, 0.28);\n        &::after { opacity: 1; }\n    "}
        /* Make inner SVG breathe inside the square */
    svg {
        width: 100%;
        height: 100%;
        display: block;
    }

    /* keep strokes readable on small sizes */

    svg * {
        vector-effect: non-scaling-stroke;
    }

    /* Icon background reacts on states */

    &:hover svg {
        fill: rgba(180, 200, 255, 0.30);
        stroke: rgba(120, 100, 255, 0.60);
    }
`, uB = lt.div.attrs({ className: "settings-toolbar-container" })`
    display: flex;
    flex-direction: row;
    width: 100%;
    background: transparent;
    border-radius: 14px;
    position: relative;
    height: clamp(24px, 5vmin, 40px);
    border: 1px solid rgba(128, 140, 255, 0.18);
    box-shadow: 0 10px 28px rgba(17, 19, 39, 0.20),
    inset 0 0 0 1px rgba(255, 255, 255, 0.12);
    overflow: visible;
    flex: 0 0 auto;
    min-width: 0;

    ${({ $primeGlass: A2, $primeGlassLight: e2 }) => A2 && e2 && gt`
            background: rgba(255, 255, 255, 0.82);
            border: 1px solid rgba(90, 72, 222, 0.22);
            box-shadow:
                0 10px 28px rgba(15, 23, 42, 0.08),
                inset 0 0 0 1px rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);

            & .settings-toolbar-button {
                border: 1px solid rgba(90, 72, 222, 0.28);
                background-color: rgba(255, 255, 255, 0.55);

                &::after {
                    background: radial-gradient(
                        120% 120% at 30% 0%,
                        rgba(255, 255, 255, 0.95) 0%,
                        rgba(62, 197, 255, 0.12) 52%,
                        rgba(90, 72, 222, 0.08) 100%
                    );
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.85);
                }

                &:hover {
                    box-shadow: 0 8px 22px rgba(15, 23, 42, 0.12);
                    background-color: rgba(255, 255, 255, 0.78);
                    background-image: linear-gradient(
                        180deg,
                        rgba(62, 197, 255, 0.4),
                        rgba(90, 72, 222, 0.38)
                    );
                }

                &:hover svg .icon-bg {
                    fill: rgba(90, 72, 222, 0.35);
                    stroke: rgba(2, 132, 199, 0.65);
                }
            }
        `}

    ${({ $primeGlass: A2, $primeGlassLight: e2 }) => A2 && !e2 && gt`
            background: rgba(15, 18, 25, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
        `}
`, fB = lt.div`
    height: 36px;
    border-radius: 10px;
    border: 1px solid transparent;
    background-color: rgba(255, 255, 255, 0.06);
    background-image: linear-gradient(180deg, rgba(62, 197, 255, 0.65), rgba(90, 72, 222, 0.65));
    background-origin: border-box;
    background-clip: padding-box, border-box;
    color: #e7ebff;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25);
    outline: none;
    transition: box-shadow 160ms ease, background 160ms ease, transform 120ms ease, border-color 160ms ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.09);
        background-image: linear-gradient(180deg, rgba(62, 197, 255, 0.65), rgba(90, 72, 222, 0.65));
    }
`, vB = lt.div.attrs({ className: "setting-toolbar-content" })`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-start;
    overflow-x: auto;
    gap: 2px;
    padding: 1px;
    flex: 1 1 0;
    min-width: 0;

    /* Hide scrollbars but allow scrolling */
    /* Hide scrollbars but allow scrolling */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
    }

    & > * {
        flex-shrink: 0;
    }

    & .tooltip-wrapper {
        height: 100%;
        aspect-ratio: 1 / 1;
    }
`, hB = lt.div`
    display: inline-flex;
    flex-direction: row;
    align-items: stretch;
    height: 100%;
    gap: 2px;
    flex-shrink: 0;
    min-width: 0;
`, mB = lt(hB)``, pB = lt(hB)`
    gap: 1px;
    padding: 2px 0;
    margin: 0 4px;
`;
lt.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 1px solid transparent;
    padding: 0 8px;
    height: 100%;
    font-size: 11px;
    font-weight: 700;
    font-family: inherit;
    cursor: pointer;
    transition: all 120ms ease;
    background: transparent;
    color: ${(A2) => A2.$isDark ? "rgba(255, 255, 255, 0.65)" : "rgba(15, 23, 42, 0.7)"};
    white-space: nowrap;

    &:hover {
        background: ${(A2) => A2.$isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(15, 23, 42, 0.06)"};
        color: ${(A2) => A2.$isDark ? "#fff" : "#0f172a"};
    }

    ${(A2) => A2.$active && gt`
        background: ${A2.$isDark ? "rgba(62, 197, 255, 0.22)" : "rgba(62, 197, 255, 0.15)"} !important;
        border-color: rgba(62, 197, 255, 0.45) !important;
        color: #3ec5ff !important;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    `}
`;
const bB = lt(fB).attrs({ as: "input", type: "text" })`
    width: clamp(72px, 14vmin, 140px);
    min-width: 56px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    background-color: white;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px 0 10px;

    &::placeholder {
        color: rgba(50, 60, 90, 0.70);
    }
`, wB = lt.div.attrs({ className: "spacer" })`
    position: relative;
    display: inline-block;
    flex-grow: 1;
    min-width: 2px;
`, yB = lt.button.attrs({ className: "settings-toolbar-button" })`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    flex: 0 0 auto;
    padding: 0;
    margin: 0;
    overflow: hidden;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    outline: none;
    border-radius: 12px;
    border: 1px solid rgba(120, 100, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.06);
    background-clip: border-box, padding-box;
    padding: 0;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 12px;
        background: radial-gradient(120% 120% at 30% 0%, rgba(255, 255, 255, 0.20) 0%, rgba(112, 124, 255, 0.08) 50%, rgba(32, 40, 78, 0.18) 100%);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25);
        opacity: 0.9;
        pointer-events: none;
    }

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 8px 22px rgba(25, 30, 60, 0.25);
        background-color: rgba(255, 255, 255, 0.09);
        background-image: linear-gradient(180deg, rgba(62, 197, 255, 0.65), rgba(90, 72, 222, 0.65));
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 3px 10px rgba(25, 30, 60, 0.22), inset 0 1px 3px rgba(0, 0, 0, 0.15);
    }

    /* Make inner SVG breathe inside the square */

    svg {
        width: 100%;
        height: 100%;
        display: block;
    }

    /* keep strokes readable on small sizes */

    svg * {
        vector-effect: non-scaling-stroke;
    }

    /* Icon background reacts on states */

    &:hover svg .icon-bg {
        fill: rgba(180, 200, 255, 0.30);
        stroke: rgba(120, 100, 255, 0.60);
    }
`, PB = ({ mode: A2, currentMode: e2, onClickHandler: n2, children: r2, className: i2 }) => jsxRuntimeExports.jsx(IB, { className: i2, $selected: A2 === e2, onClick: () => n2(A2), children: r2 }), VB = ({ onClickHandler: A2, children: e2, className: n2 }) => jsxRuntimeExports.jsx(yB, { className: n2, onClick: () => A2(), children: e2 });
var xB = ((A2) => (A2[A2.top = 0] = "top", A2[A2.right = 1] = "right", A2[A2.bottom = 2] = "bottom", A2[A2.left = 3] = "left", A2[A2.auto = 4] = "auto", A2))(xB || {}), zB = ((A2) => (A2[A2.start = 0] = "start", A2[A2.center = 1] = "center", A2[A2.end = 2] = "end", A2))(zB || {}), XB = ((A2) => (A2[A2.horizontal = 0] = "horizontal", A2[A2.vertical = 1] = "vertical", A2))(XB || {});
const MB = lt.span.attrs({ className: "tooltip-wrapper" })`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    line-height: 0;
    width: auto;
    height: auto;
    position: relative;
    flex: 0 0 auto;
`, OB = "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(240,246,255,0.96) 100%)", qB = "rgba(123, 97, 255, 0.35)", HB = "0 8px 24px rgba(17,19,39,0.18), inset 0 1px 0 rgba(255,255,255,0.45)", WB = lt.span`
    position: fixed;
    z-index: 1000;
    padding: 6px 10px;
    display: inline-flex;
    align-items: center;
    max-height: 100% !important;
    max-width: 100% !important;
    flex: 1 1 auto !important;
    ${({ $placement: A2 }) => A2 === xB.left && gt`padding-left: 14px;`}
    ${({ $placement: A2 }) => A2 === xB.right && gt`padding-right: 14px;`}
    /* For top and bottom, keep original vertical padding only (6px), no extra logic */
    border-radius: 10px;
    font-size: 12px;
    line-height: 1;
    white-space: nowrap;
    color: ${({ $text: A2 }) => A2 || "#1e2a44"};
    background: ${({ $bg: A2 }) => A2 || OB};
    border: 1px solid ${({ $border: A2 }) => A2 || qB};
    box-shadow: ${({ $shadow: A2 }) => A2 || HB};
    backdrop-filter: blur(6px);
    pointer-events: none;
    left: ${({ $left: A2 }) => A2}px;
    top: ${({ $top: A2 }) => A2}px;
    transform: ${({ $transformCss: A2 }) => A2};
`, DB = lt.span`
    position: absolute;
    width: ${({ $size: A2 }) => A2}px;
    height: ${({ $size: A2 }) => A2}px;
    background: ${({ $bg: A2 }) => A2 || OB};
    box-shadow: ${({ $shadow: A2 }) => A2 || HB};
    pointer-events: none;
    transform: rotate(45deg);

    ${({ $placement: A2, $size: e2, $border: t2, $anchorX: n2, $anchorY: r2 }) => {
  const i2 = t2 || qB, a2 = e2 / 2;
  switch (A2) {
    case xB.bottom:
      return gt`
                    top: -${a2}px;
                    left: ${null == n2 ? "50%" : `${n2}px`};
                    transform: translateX(-50%) rotate(45deg);
                    border-left: 1px solid ${i2};
                    border-top: 1px solid ${i2};
                `;
    case xB.top:
      return gt`
                    bottom: -${a2}px;
                    left: ${null == n2 ? "50%" : `${n2}px`};
                    transform: translateX(-50%) rotate(45deg);
                    border-right: 1px solid ${i2};
                    border-bottom: 1px solid ${i2};
                `;
    case xB.left:
      return gt`
                    right: -${a2}px;
                    top: ${null == r2 ? "50%" : `${r2}px`};
                    transform: translateY(-50%) rotate(45deg);
                    border-right: 1px solid ${i2};
                    border-top: 1px solid ${i2};
                `;
    case xB.right:
      return gt`
                    left: -${a2}px;
                    top: ${null == r2 ? "50%" : `${r2}px`};
                    transform: translateY(-50%) rotate(45deg);
                    border-left: 1px solid ${i2};
                    border-bottom: 1px solid ${i2};
                `;
    default:
      return gt``;
  }
}}
`, FB = { bg: "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(240,246,255,0.96) 100%)", border: "rgba(123, 97, 255, 0.35)", text: "#1e2a44", shadow: "0 8px 24px rgba(17,19,39,0.18), inset 0 1px 0 rgba(255,255,255,0.45)" }, jB = { bg: "linear-gradient(180deg, rgba(22,24,36,0.92) 0%, rgba(16,18,30,0.94) 100%)", border: "rgba(160, 170, 255, 0.40)", text: "rgba(235,240,255,0.92)", shadow: "0 8px 24px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)" }, TB = ({ content: A2, tooltipAxis: e2, placement: r2 = xB.auto, axis: i2 = XB.horizontal, align: a2 = zB.center, offset: Q2 = 10, autoFlip: g2 = true, delayHideMs: E2 = 120, children: s2, className: d2, dir: C2 }) => {
  const [c2, u2] = reactExports.useState(false), v2 = reactExports.useRef(void 0), h2 = reactExports.useRef(null), [m2, p2] = reactExports.useState(null), b2 = reactExports.useRef(null), [w2, y2] = reactExports.useState({ w: 0, h: 0 }), [P2, V2] = reactExports.useState(xB.top), x2 = (A3, e3, t2) => Math.max(e3, Math.min(t2, A3)), z2 = () => {
    const A3 = h2.current;
    A3 && p2(A3.getBoundingClientRect());
  }, X2 = () => {
    null != v2.current && window.clearTimeout(v2.current), z2(), u2(true);
  }, M2 = () => {
    null != v2.current && window.clearTimeout(v2.current), v2.current = window.setTimeout(() => u2(false), E2);
  };
  reactExports.useEffect(() => () => {
    null != v2.current && window.clearTimeout(v2.current);
  }, []), reactExports.useEffect(() => {
    if (!c2) return;
    const A3 = () => z2();
    return window.addEventListener("scroll", A3, { passive: true }), window.addEventListener("resize", A3), z2(), () => {
      window.removeEventListener("scroll", A3), window.removeEventListener("resize", A3);
    };
  }, [c2]), reactExports.useLayoutEffect(() => {
    c2 && m2 && ((() => {
      const A3 = b2.current;
      if (!A3) return;
      const e3 = A3.getBoundingClientRect();
      y2({ w: e3.width, h: e3.height });
    })(), queueMicrotask(() => {
      if (!m2) return;
      const A3 = ((A4, e3, t2, n2) => {
        const r3 = window.innerWidth, i3 = window.innerHeight, a3 = t2.top, B2 = i3 - t2.bottom, o2 = t2.left, E3 = r3 - t2.right;
        let s3;
        if (A4 === xB.auto) if (e3 === XB.horizontal) s3 = E3 >= o2 ? xB.right : xB.left;
        else if (e3 === XB.vertical) s3 = B2 >= a3 ? xB.bottom : xB.top;
        else {
          const A5 = Math.max(a3, B2, o2, E3);
          s3 = A5 === B2 ? xB.bottom : A5 === a3 ? xB.top : A5 === E3 ? xB.right : xB.left;
        }
        else s3 = A4;
        return g2 && (() => {
          switch (s3) {
            case xB.top:
              return n2.h + Q2 > a3;
            case xB.bottom:
              return n2.h + Q2 > B2;
            case xB.left:
              return n2.w + Q2 > o2;
            case xB.right:
              return n2.w + Q2 > E3;
          }
        })() && (s3 = s3 === xB.top ? xB.bottom : s3 === xB.bottom ? xB.top : s3 === xB.left ? xB.right : xB.left), s3;
      })(r2, i2, m2, w2);
      V2(A3);
    }));
  }, [c2, m2, r2, i2, w2.w, w2.h]);
  const { posStyle: O2, arrowX: q2, arrowY: H2 } = (() => {
    const A3 = m2, e3 = { position: "fixed" };
    if (!A3) return { posStyle: e3, arrowX: void 0, arrowY: void 0 };
    const t2 = window.innerWidth, n2 = window.innerHeight;
    let r3 = 0, i3 = 0, B2 = "";
    if (P2 === xB.bottom || P2 === xB.top) {
      const n3 = a2 === zB.start ? A3.left + w2.w / 2 : a2 === zB.end ? A3.right - w2.w / 2 : A3.left + A3.width / 2, o2 = w2.w / 2, g3 = x2(n3, 6 + o2, t2 - 6 - o2);
      r3 = g3, i3 = P2 === xB.bottom ? A3.bottom + Q2 : A3.top - Q2, B2 = `translate(-50%, ${P2 === xB.bottom ? "0" : "-100%"})`;
      const E3 = g3 - o2, s3 = A3.left + A3.width / 2, l2 = x2(s3 - E3, 4, w2.w - 4);
      return { posStyle: { ...e3, left: r3, top: i3, transform: B2 }, arrowX: l2, arrowY: void 0 };
    }
    {
      const t3 = a2 === zB.start ? A3.top + w2.h / 2 : a2 === zB.end ? A3.bottom - w2.h / 2 : A3.top + A3.height / 2, o2 = w2.h / 2, g3 = x2(t3, 6 + o2, n2 - 6 - o2);
      i3 = g3, r3 = P2 === xB.right ? A3.right + Q2 : A3.left - Q2, B2 = `translate(${P2 === xB.right ? "0" : "-100%"}, -50%)`;
      const E3 = g3 - o2, s3 = A3.top + A3.height / 2, l2 = x2(s3 - E3, 4, w2.h - 4);
      return { posStyle: { ...e3, left: r3, top: i3, transform: B2 }, arrowX: void 0, arrowY: l2 };
    }
  })();
  return jsxRuntimeExports.jsxs(MB, { ref: h2, className: d2, onMouseEnter: X2, onMouseLeave: M2, onFocus: X2, onBlur: M2, children: [s2, c2 && reactDomExports.createPortal((() => {
    const e3 = (() => {
      const A3 = "undefined" != typeof window && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches, e4 = "undefined" != typeof document && document.body && document.body.classList.contains("dark");
      return A3 || e4 ? jB : FB;
    })();
    return jsxRuntimeExports.jsxs(WB, { ref: b2, id: "ce-tooltip", role: "tooltip", $left: O2.left, $top: O2.top, $transformCss: O2.transform, $bg: e3.bg, $border: e3.border, $text: e3.text, $shadow: e3.shadow, $placement: P2, $arrowSize: 8, dir: C2, children: [jsxRuntimeExports.jsx(DB, { $placement: P2, $size: 8, $bg: e3.bg, $border: e3.border, $shadow: e3.shadow, $anchorX: P2 === xB.top || P2 === xB.bottom ? q2 : void 0, $anchorY: P2 === xB.left || P2 === xB.right ? H2 : void 0, "aria-hidden": true }), A2] });
  })(), document.body)] });
}, NB = ({ language: A2 = "en", locale: e2 = "en-US", primeGlass: r2 = false, primeGlassLight: i2 = false }) => {
  const { mode: a2, setMode: B2 } = p(), Q2 = ni(e2).direction;
  return jsxRuntimeExports.jsx(CB, { $primeGlass: r2, $primeGlassLight: i2, children: jsxRuntimeExports.jsxs(cB, { children: [jsxRuntimeExports.jsx(TB, { content: ii("draw_line", A2), tooltipAxis: XB.vertical, placement: xB.auto, axis: XB.vertical, align: zB.center, dir: Q2, children: jsxRuntimeExports.jsx(PB, { mode: v.drawLine, currentMode: a2, onClickHandler: B2, children: jsxRuntimeExports.jsx(Ua, { active: a2 === v.drawLine }) }) }), jsxRuntimeExports.jsx(TB, { content: ii("draw_rect", A2), tooltipAxis: XB.vertical, placement: xB.right, axis: XB.vertical, align: zB.center, dir: Q2, children: jsxRuntimeExports.jsx(PB, { mode: v.drawRectangle, currentMode: a2, onClickHandler: B2, children: jsxRuntimeExports.jsx(Za, { active: a2 === v.drawRectangle }) }) }), jsxRuntimeExports.jsx(TB, { content: ii("draw_circle", A2), tooltipAxis: XB.vertical, placement: xB.auto, axis: XB.vertical, align: zB.center, dir: Q2, children: jsxRuntimeExports.jsx(PB, { mode: v.drawCircle, currentMode: a2, onClickHandler: B2, children: jsxRuntimeExports.jsx(La, { active: a2 === v.drawCircle }) }) }), jsxRuntimeExports.jsx(TB, { content: ii("draw_triangle", A2), tooltipAxis: XB.vertical, placement: xB.auto, axis: XB.vertical, align: zB.center, dir: Q2, children: jsxRuntimeExports.jsx(PB, { mode: v.drawTriangle, currentMode: a2, onClickHandler: B2, children: jsxRuntimeExports.jsx(Ra, { active: a2 === v.drawTriangle }) }) }), jsxRuntimeExports.jsx(TB, { content: ii("draw_angle", A2), tooltipAxis: XB.vertical, placement: xB.auto, axis: XB.vertical, align: zB.center, dir: Q2, children: jsxRuntimeExports.jsx(PB, { mode: v.drawAngle, currentMode: a2, onClickHandler: B2, children: jsxRuntimeExports.jsx(Sa, { active: a2 === v.drawAngle }) }) }), jsxRuntimeExports.jsx(TB, { content: ii("select", A2), tooltipAxis: XB.vertical, placement: xB.auto, axis: XB.vertical, align: zB.center, dir: Q2, children: jsxRuntimeExports.jsx(PB, { mode: v.select, currentMode: a2, onClickHandler: B2, children: jsxRuntimeExports.jsx(Ja, { active: a2 === v.select }) }) }), jsxRuntimeExports.jsx(TB, { content: ii("edit_shape", A2), tooltipAxis: XB.vertical, placement: xB.auto, axis: XB.vertical, align: zB.center, dir: Q2, children: jsxRuntimeExports.jsx(PB, { mode: v.editShape, currentMode: a2, onClickHandler: B2, children: jsxRuntimeExports.jsx($a, { active: a2 === v.editShape }) }) })] }) });
}, KB = lt.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 0;
    width: 88px;
    flex-shrink: 0;
`, YB = lt.div`
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    gap: 6px;
    height: 100%;
    min-height: 32px;
    border: none;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 8px;
    padding: 0 8px;
    cursor: pointer;
    color: inherit;
    line-height: 0;
    overflow: visible;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    svg {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
    }
`, GB = lt.div`
    position: fixed;
    top: ${(A2) => A2.$top}px;
    left: ${(A2) => A2.$left}px;
    min-width: ${(A2) => A2.$minWidth}px;
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
    z-index: 100000;
    padding: 4px;
    box-sizing: border-box;
`, kB = lt.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 44px;
    padding: 8px 12px;
    box-sizing: border-box;
    border: none;
    background: ${({ $active: A2 }) => A2 ? "rgba(120,130,255,0.15)" : "transparent"};
    cursor: pointer;
    border-radius: 6px;

    &:hover {
        background: rgba(120, 130, 255, 0.25);
    }

    svg {
        width: 22px;
        height: 22px;
    }
`, UB = { Line: jsxRuntimeExports.jsx(BB, {}), Bar: jsxRuntimeExports.jsx(QB, {}), Candlestick: jsxRuntimeExports.jsx(oB, {}), Area: jsxRuntimeExports.jsx(gB, {}) }, ZB = ({ value: A2, onChange: e2, className: r2 }) => {
  const [i2, a2] = reactExports.useState(false), Q2 = reactExports.useRef(null), g2 = reactExports.useRef(null), [E2, s2] = reactExports.useState({ top: 0, left: 0, minWidth: 120 }), d2 = reactExports.useCallback(() => {
    const A3 = Q2.current;
    if (!A3) return;
    const e3 = A3.getBoundingClientRect();
    s2({ top: e3.bottom + 4, left: e3.left, minWidth: Math.max(e3.width, 120) });
  }, []);
  return reactExports.useLayoutEffect(() => {
    i2 && d2();
  }, [i2, d2]), reactExports.useEffect(() => {
    if (!i2) return;
    const A3 = () => d2();
    return window.addEventListener("resize", A3), window.addEventListener("scroll", A3, true), () => {
      window.removeEventListener("resize", A3), window.removeEventListener("scroll", A3, true);
    };
  }, [i2, d2]), reactExports.useEffect(() => {
    if (!i2) return;
    const A3 = (A4) => {
      var e3, t2;
      const n2 = A4.target;
      (null == (e3 = Q2.current) ? void 0 : e3.contains(n2)) || (null == (t2 = g2.current) ? void 0 : t2.contains(n2)) || a2(false);
    };
    return document.addEventListener("pointerdown", A3, true), () => document.removeEventListener("pointerdown", A3, true);
  }, [i2]), jsxRuntimeExports.jsxs(KB, { className: r2 || "chart-type-select-dropdown", children: [jsxRuntimeExports.jsxs(YB, { ref: Q2, role: "button", tabIndex: 0, "aria-haspopup": "listbox", "aria-expanded": i2, onClick: () => a2((A3) => !A3), onKeyDown: (A3) => {
    "Enter" !== A3.key && " " !== A3.key || (A3.preventDefault(), a2((A4) => !A4)), "Escape" === A3.key && a2(false);
  }, children: [UB[A2], jsxRuntimeExports.jsx(EB, {})] }), i2 && "undefined" != typeof document && reactDomExports.createPortal(jsxRuntimeExports.jsx(GB, { ref: g2, role: "listbox", $top: E2.top, $left: E2.left, $minWidth: E2.minWidth, children: Object.keys(UB).map((n2) => jsxRuntimeExports.jsx(kB, { type: "button", role: "option", "aria-selected": A2 === n2, onClick: () => ((A3) => {
    e2(A3), a2(false);
  })(n2), $active: A2 === n2, children: UB[n2] }, n2)) }), document.body)] });
};
function LB(A2, e2 = "#1a1a1a") {
  const t2 = A2.trim();
  return !t2.startsWith("#") || 4 !== t2.length && 7 !== t2.length ? "white" === t2 || "#fff" === t2 || "#ffffff" === t2 ? "#1a1a2e" : "black" === t2 || "#000" === t2 || "#000000" === t2 ? "#e8eaed" : e2 : function(A3) {
    const e3 = A3.replace("#", "").trim(), t3 = 3 === e3.length ? e3.split("").map((A4) => A4 + A4).join("") : e3;
    return 6 !== t3.length ? 0.5 : parseInt(t3.slice(0, 2), 16) / 255 * 0.2126 + parseInt(t3.slice(2, 4), 16) / 255 * 0.7152 + parseInt(t3.slice(4, 6), 16) / 255 * 0.0722;
  }(t2) > 0.55 ? "#1a1a2e" : "#e8eaed";
}
function RB(A2) {
  const e2 = Math.max(1, Math.round(A2));
  return e2 % 86400 == 0 ? e2 / 86400 + "d" : e2 % 3600 == 0 ? e2 / 3600 + "h" : e2 % 60 == 0 ? e2 / 60 + "m" : `${e2}s`;
}
function SB(A2) {
  try {
    return new Date(1e3 * Math.round(A2)).toISOString();
  } catch {
    return String(A2);
  }
}
function JB(A2, e2) {
  return (A2 || "unknown").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9._-]+/g, "_").replace(/_+/g, "_").replace(/^_|_$/g, "").slice(0, e2) || "unknown";
}
function $B(A2) {
  const e2 = JB(A2.symbol, 28), t2 = Math.round(A2.visibleTimeStartSec), n2 = Math.round(A2.visibleTimeEndSec), r2 = Math.max(1, Math.round(A2.intervalSeconds)), i2 = JB(A2.chartType, 20), a2 = new Date(A2.capturedAtMs).toISOString().replace(/[:.]/g, "-");
  return `${e2}_t${t2}-${n2}_iv${r2}s_y${Math.round(1e3 * A2.visiblePriceMin)}-${Math.round(1e3 * A2.visiblePriceMax)}_${i2}_cap${a2}.png`;
}
function _B(A2, e2, t2) {
  if (!A2) return null;
  const n2 = A2.clientWidth, r2 = A2.clientHeight;
  if (n2 < 2 || r2 < 2) return null;
  const i2 = window.devicePixelRatio || 1, a2 = Math.max(1, Math.round(n2 * i2)), B2 = Math.max(1, Math.round(r2 * i2)), Q2 = (null == t2 ? void 0 : t2.meta) ?? null, o2 = Q2 ? [`Symbol: ${Q2.symbol} | Chart: ${Q2.chartType} | Bar interval: ${Q2.intervalSeconds}s (${RB(Q2.intervalSeconds)})`, `Visible range (UTC): ${SB(Q2.visibleTimeStartSec)} → ${SB(Q2.visibleTimeEndSec)} | unix_sec: ${Math.round(Q2.visibleTimeStartSec)}–${Math.round(Q2.visibleTimeEndSec)}`, `Y-axis window: ${Q2.visiblePriceMin} – ${Q2.visiblePriceMax} | Bars in view: ${Q2.barsInView} | Series bars: ${Q2.totalBarsInSeries} | Captured (UTC): ${new Date(Q2.capturedAtMs).toISOString()}`] : [], g2 = Q2 ? 20 + 15 * o2.length : 0, E2 = Math.round(g2 * i2), s2 = document.createElement("canvas");
  s2.width = a2, s2.height = B2 + E2;
  const l2 = s2.getContext("2d");
  if (!l2) return null;
  l2.fillStyle = e2, l2.fillRect(0, 0, s2.width, s2.height);
  const d2 = A2.getBoundingClientRect(), C2 = A2.querySelectorAll("canvas");
  for (const A3 of C2) {
    if (!(A3 instanceof HTMLCanvasElement)) continue;
    if (A3.classList.contains("drawing-interaction-canvas")) continue;
    if (0 === A3.width || 0 === A3.height) continue;
    const e3 = A3.getBoundingClientRect(), t3 = Math.round((e3.left - d2.left) * i2), n3 = Math.round((e3.top - d2.top) * i2), r3 = Math.round(e3.width * i2), a3 = Math.round(e3.height * i2);
    try {
      l2.drawImage(A3, 0, 0, A3.width, A3.height, t3, n3, r3, a3);
    } catch {
    }
  }
  if (Q2 && o2.length) {
    const A3 = (null == t2 ? void 0 : t2.footerTextColor) ?? LB(e2), n3 = Math.max(10, Math.round(11 * i2));
    l2.font = `400 ${n3}px ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace`, l2.fillStyle = A3, l2.textBaseline = "top";
    const r3 = Math.round(10 * i2);
    let Q3 = B2 + r3;
    const g3 = Math.round(15 * i2), E3 = a2 - 2 * r3;
    for (const A4 of o2) {
      let e3 = A4;
      if (l2.measureText(e3).width > E3) {
        const t3 = "…";
        let n4 = 0, r4 = A4.length;
        for (; n4 < r4; ) {
          const e4 = Math.ceil((n4 + r4) / 2);
          l2.measureText(A4.slice(0, e4) + t3).width <= E3 ? n4 = e4 : r4 = e4 - 1;
        }
        e3 = A4.slice(0, n4) + t3;
      }
      l2.fillText(e3, r3, Q3), Q3 += g3;
    }
  }
  try {
    return s2.toDataURL("image/png");
  } catch {
    return null;
  }
}
const AQ = lt.div`
    position: relative;
    display: flex;
    align-items: center;
`;
lt.div`
    display: flex;
    align-items: center;
    gap: 4px;
    height: 28px;
    padding: 0 10px;
    border-radius: 6px;
    border: 1px solid ${(A2) => A2.$isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)"};
    background: ${(A2) => A2.$isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"};
    color: ${(A2) => A2.$isDark ? "#e7f0ff" : "#1e1e1e"};
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    user-select: none;

    &:hover {
        background: ${(A2) => A2.$isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)"};
        border-color: ${(A2) => A2.$isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.25)"};
    }

    svg {
        width: 10px;
        height: 10px;
        opacity: 0.6;
    }
`;
const eQ = lt.div`
    position: fixed;
    top: ${(A2) => A2.$top}px;
    left: ${(A2) => A2.$left}px;
    width: ${(A2) => A2.$width}px;
    max-width: min(440px, 95vw);
    max-height: ${(A2) => A2.$maxHeight}px;
    overflow-y: auto;
    z-index: 10000;
    background: ${(A2) => A2.$isDark ? "rgba(26, 29, 35, 0.94)" : "rgba(255, 255, 255, 0.98)"};
    backdrop-filter: blur(16px);
    border: 1px solid ${(A2) => A2.$isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.08)"};
    border-radius: 12px;
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.4), 0 10px 20px -10px rgba(0, 0, 0, 0.2);
    padding: 10px;
    animation: fadeIn 0.2s cubic-bezier(0, 0, 0.2, 1);

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Custom scrollbar */
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background: ${(A2) => A2.$isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
        border-radius: 10px;
    }
`, tQ = lt.div`
    margin: 12px 0;
    
    &:first-child { margin-top: 0; }
    
    display: grid;
    grid-template-columns: 92px 1fr;
    column-gap: 12px;
    align-items: start;
`, nQ = lt.div`
    font-size: 10px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 6px 4px 0;
    color: ${(A2) => A2.$isDark ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.4)"};
    white-space: nowrap;
`, rQ = lt.div`
    display: grid;
    grid-template-columns: repeat(${(A2) => A2.$cols ?? 4}, minmax(44px, 1fr));
    gap: 6px;
    align-content: start;
    justify-content: start;
`, iQ = lt.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    min-width: 44px;
    height: 28px;
    border: 1px solid ${(A2) => A2.$active ? A2.$isDark ? "rgba(62, 197, 255, 0.5)" : "rgba(37, 99, 235, 0.5)" : "transparent"};
    border-radius: 16px;
    font-size: 12px;
    font-weight: 600;
    color: ${(A2) => A2.$active ? A2.$isDark ? "#3ec5ff" : "#2563eb" : A2.$isDark ? "#94a3b8" : "#64748b"};
    background: ${(A2) => A2.$active ? A2.$isDark ? "rgba(62, 197, 255, 0.15)" : "rgba(37, 99, 235, 0.1)" : A2.$isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)"};
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    box-sizing: border-box;

    &:hover {
        background: ${(A2) => A2.$isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.07)"};
        color: ${(A2) => A2.$isDark ? "#f8fafc" : "#1e293b"};
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
        background: ${(A2) => A2.$isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)"};
    }
`, aQ = [{ category: "Minutes", options: ["1m", "2m", "3m", "5m", "10m", "15m", "30m", "45m"] }, { category: "Hours", options: ["1h", "2h", "3h", "4h"] }, { category: "Days", options: ["1D"] }, { category: "Weeks", options: ["1W"] }, { category: "Months", options: ["1M"] }], BQ = ({ value: A2, onChange: e2, themeVariant: r2 = ft.dark, className: i2 }) => {
  const [a2, Q2] = reactExports.useState(false), g2 = reactExports.useRef(null), E2 = reactExports.useRef(null), [s2, d2] = reactExports.useState({ top: 0, left: 0, width: 320, maxHeight: 320 }), [c2, u2] = reactExports.useState(4), v2 = r2 === ft.dark, h2 = reactExports.useCallback(() => {
    const A3 = g2.current;
    if (!A3) return;
    const e3 = A3.getBoundingClientRect(), t2 = A3.closest(".chart-view") || A3.closest(".canvas-axis-container") || A3.closest(".tickup-root"), n2 = null == t2 ? void 0 : t2.getBoundingClientRect(), r3 = { left: Math.max(8, (null == n2 ? void 0 : n2.left) ?? 8), right: Math.min(window.innerWidth - 8, (null == n2 ? void 0 : n2.right) ?? window.innerWidth - 8), top: Math.max(8, (null == n2 ? void 0 : n2.top) ?? 8), bottom: Math.min(window.innerHeight - 8, (null == n2 ? void 0 : n2.bottom) ?? window.innerHeight - 8) }, i3 = Math.max(220, Math.min(440, r3.right - r3.left)), a3 = Math.max(220, Math.min(360, i3));
    let B2 = Math.max(r3.left, Math.min(e3.left, r3.right - a3)), Q3 = e3.bottom + 6;
    const o2 = Math.max(140, r3.bottom - Q3);
    let s3 = Math.min(480, o2);
    o2 < 180 && (Q3 = Math.max(r3.top, e3.top - Math.min(480, r3.bottom - r3.top)), s3 = Math.min(480, Math.max(140, e3.top - r3.top - 6))), d2({ top: Q3, left: B2, width: a3, maxHeight: s3 }), requestAnimationFrame(() => {
      const A4 = E2.current;
      if (!A4) return;
      const e4 = A4.getBoundingClientRect(), t3 = Math.max(r3.left, Math.min(B2, r3.right - e4.width)), n3 = Math.max(r3.top, Math.min(Q3, r3.bottom - Math.min(e4.height, s3)));
      d2((A5) => ({ ...A5, left: t3, top: n3 }));
      const i4 = Math.max(0, e4.width - 92 - 12 - 20), a4 = Math.max(1, Math.min(4, Math.floor(i4 / 54)));
      u2(a4);
    });
  }, []);
  return reactExports.useLayoutEffect(() => {
    a2 && h2();
  }, [a2, h2]), reactExports.useEffect(() => {
    if (!a2) return;
    const A3 = () => h2();
    return window.addEventListener("resize", A3), window.addEventListener("scroll", A3, true), () => {
      window.removeEventListener("resize", A3), window.removeEventListener("scroll", A3, true);
    };
  }, [a2, h2]), reactExports.useEffect(() => {
    if (!a2) return;
    const A3 = (A4) => {
      var e3, t2;
      const n2 = A4.target;
      (null == (e3 = g2.current) ? void 0 : e3.contains(n2)) || (null == (t2 = E2.current) ? void 0 : t2.contains(n2)) || Q2(false);
    };
    return document.addEventListener("pointerdown", A3, true), () => document.removeEventListener("pointerdown", A3, true);
  }, [a2]), jsxRuntimeExports.jsxs(AQ, { className: i2 || "interval-select-dropdown", children: [jsxRuntimeExports.jsx(VB, { className: "interval-select-trigger", onClickHandler: () => Q2((A3) => !A3), children: jsxRuntimeExports.jsxs("div", { ref: g2, style: { display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: 700, color: v2 ? "rgba(255, 255, 255, 0.85)" : "rgba(15, 23, 42, 0.9)", padding: "0 2px" }, children: [jsxRuntimeExports.jsx("span", { children: A2 }), jsxRuntimeExports.jsx("div", { style: { width: "10px", height: "10px", opacity: 0.6 }, children: jsxRuntimeExports.jsx(EB, { active: a2 }) })] }) }), a2 && "undefined" != typeof document && reactDomExports.createPortal(jsxRuntimeExports.jsx(eQ, { ref: E2, role: "listbox", $top: s2.top, $left: s2.left, $width: s2.width, $maxHeight: s2.maxHeight, $isDark: v2, children: aQ.map((r3) => jsxRuntimeExports.jsxs(tQ, { $isDark: v2, children: [jsxRuntimeExports.jsx(nQ, { $isDark: v2, children: r3.category }), jsxRuntimeExports.jsx(rQ, { $cols: c2, children: r3.options.map((n2) => jsxRuntimeExports.jsx(iQ, { type: "button", role: "option", "aria-selected": A2 === n2, onClick: () => (e2(n2), void Q2(false)), $active: A2 === n2, $isDark: v2, children: n2 }, n2)) })] }, r3.category)) }), document.body)] });
}, QQ = Ct`
  from { opacity: 0; }
  to { opacity: 1; }
`, oQ = Ct`
  from { transform: translate(-50%, -40%); opacity: 0; }
  to { transform: translate(-50%, -50%); opacity: 1; }
`, gQ = lt.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(A2) => A2.$variant === ft.dark ? "rgba(0, 0, 0, 0.4)" : "rgba(15, 23, 42, 0.3)"};
    backdrop-filter: blur(2px);
    z-index: 5000;
    animation: ${QQ} 0.2s ease-out;
`, EQ = lt.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: min(440px, 90vw);
    background: ${(A2) => A2.$variant === ft.dark ? "#1A1D23" : "#ffffff"};
    border: 1px solid ${(A2) => A2.$variant === ft.dark ? "#2D3139" : "#e2e8f0"};
    border-radius: 12px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    animation: ${oQ} 0.25s cubic-bezier(0, 0, 0.2, 1);
`, sQ = lt.div`
    padding: 20px 24px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`, lQ = lt.h3`
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: 600;
    color: ${(A2) => A2.$variant === ft.dark ? "#F8FAFC" : "#1E293B"};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`, dQ = lt.div`
    padding: 4px 24px 24px;
    font-size: 15px;
    line-height: 1.5;
    color: ${(A2) => A2.$variant === ft.dark ? "#94A3B8" : "#64748B"};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`, CQ = lt.div`
    padding: 12px 16px;
    border-top: 1px solid ${(A2) => A2.$variant === ft.dark ? "#2D3139" : "#f1f5f9"};
    background: ${(A2) => A2.$variant === ft.dark ? "#20242B" : "#f8fafc"};
    display: flex;
    justify-content: flex-end;
`, cQ = lt.button`
    padding: 8px 16px;
    background: transparent;
    border: none;
    border-radius: 6px;
    font-size: 15px;
    font-weight: 700;
    color: #3EC5FF;
    cursor: pointer;
    transition: background 0.15s ease;

    &:hover {
        background: ${(A2) => A2.$variant === ft.dark ? "rgba(62, 197, 255, 0.1)" : "rgba(62, 197, 255, 0.05)"};
    }

    &:active {
        background: ${(A2) => A2.$variant === ft.dark ? "rgba(62, 197, 255, 0.2)" : "rgba(62, 197, 255, 0.1)"};
    }
`, IQ = ({ isOpen: A2, onClose: e2, title: r2, message: i2, themeVariant: a2 = ft.dark, usePortal: B2 = true }) => {
  if (!A2) return null;
  const Q2 = jsxRuntimeExports.jsx(gQ, { $variant: a2, onClick: e2, children: jsxRuntimeExports.jsxs(EQ, { $variant: a2, onClick: (A3) => A3.stopPropagation(), children: [jsxRuntimeExports.jsx(sQ, { $variant: a2, children: jsxRuntimeExports.jsx(lQ, { $variant: a2, children: r2 }) }), jsxRuntimeExports.jsx(dQ, { $variant: a2, children: i2 }), jsxRuntimeExports.jsx(CQ, { $variant: a2, children: jsxRuntimeExports.jsx(cQ, { $variant: a2, onClick: e2, children: "Close" }) })] }) });
  return B2 && "undefined" != typeof document ? u.createPortal(Q2, document.body) : Q2;
};
function uQ(A2) {
  return false !== A2;
}
function fQ(A2) {
  return null != A2 && "function" == typeof A2.then;
}
const vQ = ({ handleChartTypeChange: A2, selectedChartType: e2, openSettingsMenu: r2, showSettingsBar: i2 = true, language: a2 = "en", locale: Q2 = "en-US", symbolInputRef: g2, symbol: E2, defaultSymbol: s2, onSymbolChange: d2, onSymbolSearch: c2, onSearch: I2, onFitVisibleRange: u2, onExportDataCsv: f2, onSnapshotPng: v2, onRefresh: h2, onToggleTheme: m2, themeVariant: p2 = ft.light, interval: b2 = "5m", onIntervalChange: w2, onIntervalSearch: y2, primeGlass: P2 = false, primeGlassLight: V2 = false }) => {
  const x2 = reactExports.useRef(null), [z2, X2] = reactExports.useState(1 / 0), [M2, O2] = reactExports.useState({ isOpen: false, title: "", message: "" }), q2 = (A3, e3) => {
    O2({ isOpen: true, title: A3, message: e3 });
  }, H2 = reactExports.useRef(false), W2 = reactExports.useRef(String(void 0 !== E2 ? E2 ?? "" : s2 ?? "")), [D2, F2] = reactExports.useState(() => String(void 0 !== E2 ? E2 ?? "" : s2 ?? "")), j2 = ni(Q2).direction, T2 = void 0 !== E2;
  if (reactExports.useEffect(() => {
    if (!H2.current) if (T2) {
      const A3 = String(E2 ?? "");
      F2(A3), W2.current = A3;
    } else {
      const A3 = String(s2 ?? "");
      F2(A3), W2.current = A3;
    }
  }, [E2, s2, T2]), reactExports.useEffect(() => {
    const A3 = x2.current;
    if (!A3) return;
    const e3 = new ResizeObserver((A4) => {
      var e4, t3;
      const n2 = (null == (t3 = null == (e4 = A4[0]) ? void 0 : e4.contentRect) ? void 0 : t3.width) ?? 1 / 0;
      X2(n2);
    });
    e3.observe(A3);
    const t2 = (e4) => {
      0 !== e4.deltaY && (A3.scrollLeft += e4.deltaY);
    };
    return A3.addEventListener("wheel", t2, { passive: true }), X2(A3.getBoundingClientRect().width), () => {
      e3.disconnect(), A3.removeEventListener("wheel", t2);
    };
  }, []), !i2) return null;
  const N2 = z2 > 260, K2 = reactExports.useCallback(() => {
    const A3 = W2.current;
    F2(A3), null == d2 || d2(A3);
  }, [d2]), Y2 = reactExports.useCallback((A3) => {
    W2.current = A3, F2(A3), null == d2 || d2(A3);
  }, [d2]), [G2, k2] = reactExports.useState(b2);
  reactExports.useEffect(() => {
    k2(b2);
  }, [b2]);
  const U2 = reactExports.useCallback((A3) => {
    if (!y2) return q2("No service connected", `Interval selection for "${A3}" requires a data-feed handler. Wire "onIntervalSearch" to your chart to load data for this timeframe.`), void (null == w2 || w2(A3));
    const e3 = y2(A3), t2 = () => {
      k2(A3), null == w2 || w2(A3);
    };
    fQ(e3) ? e3.then((A4) => {
      false !== A4 && t2();
    }, (A4) => {
      const e4 = "string" == typeof A4 ? A4 : (null == A4 ? void 0 : A4.message) || "The data feed failed to load the requested interval.";
      q2("Interval retrieval failed", e4);
    }) : false !== e3 && t2();
  }, [y2, w2]), Z2 = reactExports.useCallback(() => {
    const A3 = null == g2 ? void 0 : g2.current, e3 = D2.trim();
    if (c2) {
      const t2 = c2(e3);
      return fQ(t2) ? t2.then((A4) => {
        uQ(A4) ? Y2(e3) : K2();
      }, (A4) => {
        const e4 = "string" == typeof A4 ? A4 : (null == A4 ? void 0 : A4.message) || "Symbol search failed.";
        q2("Symbol not found", e4), K2();
      }) : uQ(t2) ? Y2(e3) : K2(), void (null == A3 || A3.focus());
    }
    if (I2) I2();
    else if (A3) return q2(`Symbol search (demo): ${e3}`, 'Wire "onSymbolSearch" to your chart to load data for this symbol.'), A3.focus(), void A3.select();
    null == A3 || A3.focus();
  }, [Y2, D2, I2, c2, K2, g2]), L2 = reactExports.useCallback((A3) => {
    const e3 = A3.target.value;
    F2(e3), null == d2 || d2(e3);
  }, [d2]);
  return jsxRuntimeExports.jsxs(uB, { $primeGlass: P2, $primeGlassLight: V2, className: "settings-toolbar-container", children: [jsxRuntimeExports.jsxs(vB, { className: "settings-toolbar-content", ref: x2, dir: j2, children: [jsxRuntimeExports.jsxs(mB, { className: "settings-symbol-cluster", dir: j2, children: [jsxRuntimeExports.jsx(bB, { ref: g2, className: "settings-symbol-input", name: "symbol-input", placeholder: ii("symbol_placeholder", a2), dir: j2, "aria-label": ii("symbol_placeholder", a2), value: D2, onChange: L2, onFocus: () => {
    H2.current = true;
  }, onBlur: () => {
    H2.current = false;
  }, onKeyDown: (A3) => {
    "Enter" === A3.key && (A3.preventDefault(), Z2());
  } }), jsxRuntimeExports.jsx(TB, { content: ii("search", a2), tooltipAxis: XB.horizontal, placement: xB.bottom, axis: XB.vertical, align: zB.center, className: "settings-tooltip-search", dir: j2, children: jsxRuntimeExports.jsx(VB, { className: "settings-search-button", onClickHandler: Z2, children: jsxRuntimeExports.jsx(eB, {}) }) })] }), jsxRuntimeExports.jsx(pB, { className: "settings-interval-cluster", children: jsxRuntimeExports.jsx(BQ, { value: G2, onChange: U2, themeVariant: p2 }) }), jsxRuntimeExports.jsx(ZB, { className: "settings-chart-type-dropdown", value: e2 || Pt.Candlestick, onChange: A2 }), N2 && jsxRuntimeExports.jsx(TB, { content: ii("settings", a2), tooltipAxis: XB.horizontal, placement: xB.bottom, axis: XB.vertical, align: zB.center, className: "settings-tooltip-gear", dir: j2, children: jsxRuntimeExports.jsx(VB, { className: "settings-gear-button", onClickHandler: r2, children: jsxRuntimeExports.jsx(_a, {}) }) }), jsxRuntimeExports.jsx(TB, { content: ii("download", a2), tooltipAxis: XB.horizontal, placement: xB.bottom, axis: XB.vertical, align: zB.center, className: "settings-tooltip-camera", dir: j2, children: jsxRuntimeExports.jsx(VB, { className: "settings-camera-button", onClickHandler: () => {
    if (v2) return void v2();
    const A3 = document.querySelector(".tickup-chart-snapshot-root"), e3 = A3 instanceof HTMLElement && getComputedStyle(A3).backgroundColor || "#ffffff", t2 = A3 instanceof HTMLElement ? _B(A3, "rgba(0, 0, 0, 0)" === e3 || "transparent" === e3 ? "#ffffff" : e3) : null;
    if (t2) {
      try {
        const A4 = document.createElement("a");
        A4.download = `chart-snapshot-${Date.now()}.png`, A4.href = t2, A4.click();
      } catch (A4) {
      }
      return;
    }
    const n2 = document.querySelector("canvas.chart-data-canvas");
    if (n2 instanceof HTMLCanvasElement) try {
      const A4 = document.createElement("a");
      A4.download = `chart-snapshot-${Date.now()}.png`, A4.href = n2.toDataURL("image/png"), A4.click();
    } catch (A4) {
    }
  }, children: jsxRuntimeExports.jsx(AB, {}) }) }), jsxRuntimeExports.jsx(TB, { content: ii("range", a2), tooltipAxis: XB.horizontal, placement: xB.bottom, axis: XB.vertical, align: zB.center, className: "settings-tooltip-range", dir: j2, children: jsxRuntimeExports.jsx(VB, { className: "settings-range-button", onClickHandler: () => null == u2 ? void 0 : u2(), children: jsxRuntimeExports.jsx(tB, {}) }) }), jsxRuntimeExports.jsx(TB, { content: ii("export", a2), tooltipAxis: XB.horizontal, placement: xB.bottom, axis: XB.vertical, align: zB.center, className: "settings-tooltip-download", dir: j2, children: jsxRuntimeExports.jsx(VB, { className: "settings-download-button", onClickHandler: () => null == f2 ? void 0 : f2(), children: jsxRuntimeExports.jsx(nB, {}) }) }), jsxRuntimeExports.jsx(TB, { content: ii("refresh", a2), tooltipAxis: XB.horizontal, placement: xB.bottom, axis: XB.vertical, align: zB.center, className: "settings-tooltip-refresh", dir: j2, children: jsxRuntimeExports.jsx(VB, { className: "settings-refresh-button", onClickHandler: () => {
    const A3 = null == h2 ? void 0 : h2();
    A3 && "function" == typeof A3.then && A3.catch((A4) => {
    });
  }, children: jsxRuntimeExports.jsx(rB, {}) }) }), jsxRuntimeExports.jsx(TB, { content: ii("toggle_theme", a2), tooltipAxis: XB.horizontal, placement: xB.bottom, axis: XB.vertical, align: zB.center, className: "settings-tooltip-theme", dir: j2, children: jsxRuntimeExports.jsx(VB, { className: "settings-theme-button", onClickHandler: () => null == m2 ? void 0 : m2(), children: p2 === ft.light ? jsxRuntimeExports.jsx(iB, {}) : jsxRuntimeExports.jsx(aB, {}) }) }), jsxRuntimeExports.jsx(wB, { className: "settings-toolbar-spacer" })] }), jsxRuntimeExports.jsx(IQ, { isOpen: M2.isOpen, onClose: () => O2((A3) => ({ ...A3, isOpen: false })), title: M2.title, message: M2.message, themeVariant: p2 })] });
}, hQ = lt.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 4px 12px;
    gap: 8px;
    border-top: 1px solid ${(A2) => A2.$isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"};
    background: transparent;
    overflow-x: auto;
    flex-shrink: 0;
    grid-row: 3;
    grid-column: 1 / span 2;
    z-index: 2;

    &::-webkit-scrollbar {
        height: 0;
    }
`, mQ = lt.button`
    background: transparent;
    border: 1px solid transparent;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    color: ${(A2) => A2.$isDark ? "rgba(255, 255, 255, 0.55)" : "rgba(0, 0, 0, 0.55)"};
    transition: all 120ms ease;
    white-space: nowrap;

    &:hover {
        background: ${(A2) => A2.$isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"};
        color: ${(A2) => A2.$isDark ? "#fff" : "#000"};
    }

    ${(A2) => A2.$active && gt`
        color: #3ec5ff !important;
        background: rgba(62, 197, 255, 0.12) !important;
    `}
`, pQ = lt.span`
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: ${(A2) => A2.$isDark ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"};
    margin-right: 4px;
`, bQ = ["1D", "5D", "1M", "3M", "6M", "YTD", "1Y", "5Y", "All"], wQ = ({ onRangeChange: A2, currentRange: e2, isDark: r2 = false, showLabel: i2 = true }) => jsxRuntimeExports.jsxs(hQ, { $isDark: r2, className: "range-selector", children: [i2 && jsxRuntimeExports.jsx(pQ, { $isDark: r2, children: "Range" }), bQ.map((n2) => jsxRuntimeExports.jsx(mQ, { $active: e2 === n2, $isDark: r2, onClick: () => A2(n2), className: `range-btn-${n2}`, children: n2 }, n2))] });
function yQ(A2) {
  return JSON.parse(JSON.stringify(A2));
}
function PQ(A2, e2) {
  const t2 = { id: A2.id, type: A2.type, points: yQ(A2.points), style: yQ(A2.style), zIndex: e2 };
  if (A2.type === rn.CustomSymbol) {
    const e3 = A2;
    t2.symbol = e3.symbol, t2.size = e3.size;
  }
  return t2;
}
function VQ(A2, e2) {
  var t2, n2;
  const r2 = A2.map((A3, e3) => ({ shape: A3, zIndex: e3 }));
  if (!e2) return r2;
  let i2 = r2;
  if (null == (t2 = e2.types) ? void 0 : t2.length) {
    const A3 = new Set(e2.types);
    i2 = i2.filter(({ shape: e3 }) => A3.has(e3.type));
  }
  if (null == (n2 = e2.ids) ? void 0 : n2.length) {
    const A3 = new Set(e2.ids);
    i2 = i2.filter(({ shape: e3 }) => A3.has(e3.id));
  }
  if (e2.idPrefix) {
    const A3 = e2.idPrefix;
    i2 = i2.filter(({ shape: e3 }) => e3.id.startsWith(A3));
  }
  if (null == e2.timeMin && null == e2.timeMax && null == e2.priceMin && null == e2.priceMax || (i2 = i2.filter(({ shape: A3 }) => function(A4, e3) {
    const t3 = A4.points;
    if (!t3.length) return false;
    const n3 = (A5) => {
      return n4 = A5.time, (null == e3.timeMin || n4 >= e3.timeMin) && (null == e3.timeMax || n4 <= e3.timeMax) && (t4 = A5.price, (null == e3.priceMin || t4 >= e3.priceMin) && (null == e3.priceMax || t4 <= e3.priceMax));
      var t4, n4;
    }, r3 = null != e3.timeMin || null != e3.timeMax, i3 = null != e3.priceMin || null != e3.priceMax;
    return !r3 && !i3 || (e3.strictBounds ? t3.every(n3) : t3.some(n3));
  }(A3, e2))), e2.predicate) {
    const A3 = e2.predicate;
    i2 = i2.filter(({ shape: e3, zIndex: t3 }) => A3(e3, t3));
  }
  return i2;
}
function xQ(A2, e2) {
  return VQ(A2, e2).map(({ shape: A3, zIndex: e3 }) => PQ(A3, e3));
}
function zQ(A2, e2) {
  return VQ(A2, e2).map(({ shape: A3 }) => A3);
}
var XQ = ((A2) => (A2.replace = "replace", A2.append = "append", A2.prepend = "prepend", A2.mergeByTime = "mergeByTime", A2))(XQ || {});
function MQ(A2, e2, t2) {
  return Math.min(t2, Math.max(e2, A2));
}
function OQ(A2, e2 = "row") {
  const t2 = [], n2 = A2.t;
  let r2 = A2.o, i2 = A2.c, a2 = A2.l, B2 = A2.h, Q2 = A2.v;
  if (!Number.isFinite(n2)) return { value: null, notes: [`${e2}: invalid timestamp`] };
  for (const [A3, t3] of [["open", r2], ["close", i2], ["low", a2], ["high", B2]]) if (!Number.isFinite(t3)) return { value: null, notes: [`${e2}: invalid ${A3}`] };
  return a2 > B2 && (t2.push(`${e2}: low and high swapped`), [a2, B2] = [B2, a2]), (r2 < a2 || r2 > B2) && (t2.push(`${e2}: open clamped into [low, high]`), r2 = MQ(r2, a2, B2)), (i2 < a2 || i2 > B2) && (t2.push(`${e2}: close clamped into [low, high]`), i2 = MQ(i2, a2, B2)), void 0 === Q2 || Number.isFinite(Q2) || (t2.push(`${e2}: volume omitted (non-finite)`), Q2 = void 0), { value: void 0 !== Q2 ? { t: n2, o: r2, c: i2, l: a2, h: B2, v: Q2 } : { t: n2, o: r2, c: i2, l: a2, h: B2 }, notes: t2 };
}
function qQ(A2) {
  const e2 = [], t2 = [], n2 = [];
  return A2.forEach((A3, r2) => {
    const { value: i2, notes: a2 } = OQ(A3, `incoming[${r2}]`);
    if (i2) {
      n2.push(i2);
      for (const A4 of a2) t2.push(A4);
    } else e2.push(...a2);
  }), { intervals: n2, errors: e2, warnings: t2 };
}
function HQ(A2) {
  return [...A2].sort((A3, e2) => A3.t - e2.t);
}
function WQ(A2) {
  const e2 = /* @__PURE__ */ new Map();
  for (const t2 of A2) e2.set(t2.t, t2);
  return Array.from(e2.keys()).sort((A3, e3) => A3 - e3).map((A3) => e2.get(A3));
}
function DQ(A2, e2, t2) {
  const n2 = Array.isArray(e2) ? e2 : [e2], r2 = qQ(n2), i2 = [...r2.errors], a2 = [...r2.warnings];
  if (t2 === XQ.replace) {
    const A3 = WQ(HQ(r2.intervals));
    return n2.length || i2.push("replace: no incoming data"), { ok: 0 === r2.errors.length && n2.length > 0, intervals: A3, errors: i2, warnings: a2 };
  }
  const B2 = qQ(A2);
  for (const A3 of B2.errors) i2.push(`existing: ${A3}`);
  a2.push(...B2.warnings);
  const Q2 = WQ(HQ(B2.intervals));
  if (!r2.intervals.length) return i2.push("no valid incoming bars after validation"), { ok: false, intervals: Q2, errors: i2, warnings: a2 };
  if (t2 === XQ.mergeByTime) {
    const A3 = WQ(HQ([...Q2, ...r2.intervals]));
    return { ok: 0 === r2.errors.length && 0 === B2.errors.length, intervals: A3, errors: i2, warnings: a2 };
  }
  if (t2 === XQ.append) {
    const { data: A3, warnings: e3 } = function(A4, e4) {
      const t3 = [];
      if (!A4.length) return { data: WQ(HQ(e4)), warnings: t3 };
      const n3 = [...A4];
      let r3 = n3[n3.length - 1].t;
      const i3 = HQ(e4);
      for (const A5 of i3) A5.t < r3 ? t3.push(`append: skipped bar at t=${A5.t} (before last time ${r3})`) : A5.t !== r3 ? (n3.push(A5), r3 = A5.t) : n3[n3.length - 1] = A5;
      return { data: n3, warnings: t3 };
    }(Q2, r2.intervals);
    return a2.push(...e3), { ok: 0 === r2.errors.length && 0 === B2.errors.length, intervals: A3, errors: i2, warnings: a2 };
  }
  if (t2 === XQ.prepend) {
    const { data: A3, warnings: e3 } = function(A4, e4) {
      const t3 = [];
      if (!A4.length) return { data: WQ(HQ(e4)), warnings: t3 };
      const n3 = A4[0].t;
      let r3 = A4[0];
      const i3 = [], a3 = HQ(e4);
      for (const A5 of a3) A5.t > n3 ? t3.push(`prepend: skipped bar at t=${A5.t} (after first time ${n3})`) : A5.t !== n3 ? i3.push(A5) : r3 = A5;
      const B3 = A4.slice(1);
      return { data: WQ(HQ([...i3, r3, ...B3])), warnings: t3 };
    }(Q2, r2.intervals);
    return a2.push(...e3), { ok: 0 === r2.errors.length && 0 === B2.errors.length, intervals: A3, errors: i2, warnings: a2 };
  }
  return i2.push(`unknown placement: ${String(t2)}`), { ok: false, intervals: Q2, errors: i2, warnings: a2 };
}
function FQ(A2) {
  return /[",\n\r]/.test(A2) ? `"${A2.replace(/"/g, '""')}"` : A2;
}
function jQ(A2, e2 = 60) {
  return an(A2, e2);
}
function TQ(A2, e2, t2) {
  const n2 = (null == A2 ? void 0 : A2.length) ?? 0;
  if (0 === n2) return [0, 0];
  const r2 = t2 / 2;
  let i2 = 0, a2 = n2 - 1, B2 = n2;
  for (; i2 <= a2; ) {
    const t3 = i2 + a2 >> 1;
    A2[t3].t + r2 >= e2.start ? (B2 = t3, a2 = t3 - 1) : i2 = t3 + 1;
  }
  i2 = 0, a2 = n2 - 1;
  let Q2 = n2;
  for (; i2 <= a2; ) {
    const t3 = i2 + a2 >> 1;
    A2[t3].t + r2 > e2.end ? (Q2 = t3, a2 = t3 - 1) : i2 = t3 + 1;
  }
  const o2 = Math.max(B2, Q2 - 1), g2 = Math.max(0, Math.min(B2, n2 - 1));
  return [g2, Math.max(g2, Math.min(o2, n2 - 1))];
}
const NQ = reactExports.forwardRef(({ intervalsArray: A2, numberOfYTicks: e2, timeDetailLevel: r2, timeFormat12h: a2, selectedIndex: Q2, setSelectedIndex: g2, chartOptions: E2, showTopBar: d2 = true, showLeftBar: u2 = true, handleChartTypeChange: f2, openSettingsMenu: v2, showSettingsBar: h2, onRefreshRequest: m2, onToggleTheme: b2, symbol: w2, defaultSymbol: y2, onSymbolChange: P2, onSymbolSearch: V2, interval: x2, onIntervalChange: z2, range: X2, onRangeChange: M2, initialRange: O2, onIntervalSearch: q2, themeVariant: H2 = ft.dark, showBrandWatermark: W2 = true, isPrimeLicensed: D2 = false }, F2) => {
  const { setMode: j2 } = p(), T2 = reactExports.useRef(null), { ref: N2, size: K2 } = function() {
    const A3 = reactExports.useRef(null), [e3, t2] = reactExports.useState({ width: 0, height: 0 });
    return reactExports.useLayoutEffect(() => {
      const e4 = A3.current;
      if (!e4) return;
      const n2 = () => {
        const A4 = e4.getBoundingClientRect();
        t2((e5) => {
          const t3 = A4.width, n3 = A4.height;
          return e5.width === t3 && e5.height === n3 ? e5 : { width: t3, height: n3 };
        });
      };
      n2();
      const r3 = new ResizeObserver(() => {
        requestAnimationFrame(n2);
      });
      return r3.observe(e4), window.addEventListener("resize", n2), () => {
        r3.disconnect(), window.removeEventListener("resize", n2);
      };
    }, []), { ref: A3, size: e3 };
  }(), Y2 = !D2, G2 = reactExports.useCallback((A3) => wn(A3), []), [k2, U2] = reactExports.useState(() => G2(A2)), Z2 = reactExports.useRef(G2(A2)), L2 = reactExports.useRef(null), R2 = reactExports.useRef(null), S2 = reactExports.useRef(0), [J2, $2] = i.useState({ start: 0, end: 0, startIndex: 0, endIndex: 0 }), [_2, AA2] = i.useState({ min: Math.min(...A2.map((A3) => (null == A3 ? void 0 : A3.l) || 0)), max: Math.max(...A2.map((A3) => (null == A3 ? void 0 : A3.h) || 0)), range: Math.max(...A2.map((A3) => (null == A3 ? void 0 : A3.h) || 0)) - Math.min(...A2.map((A3) => (null == A3 ? void 0 : A3.l) || 0)) }), [eA2, tA2] = reactExports.useState([]), [nA2, rA2] = reactExports.useState({ isOpen: false, title: "", message: "" }), [iA2, aA2] = reactExports.useState(false), [BA2, QA2] = reactExports.useState(null), oA2 = reactExports.useRef(null), gA2 = reactExports.useRef(null), EA2 = reactExports.useRef(null), sA2 = reactExports.useRef(false);
  reactExports.useEffect(() => {
    Z2.current = k2;
  }, [k2]);
  const lA2 = reactExports.useCallback((A3) => {
    const e3 = G2(A3);
    if (Z2.current = e3, !Y2) return U2(e3), void (S2.current = Date.now());
    const t2 = Date.now(), n2 = t2 - S2.current;
    if (n2 >= 1e3) return U2(e3), S2.current = t2, R2.current = null, void (null != L2.current && (window.clearTimeout(L2.current), L2.current = null));
    if (R2.current = e3, null == L2.current) {
      const A4 = 1e3 - n2;
      L2.current = window.setTimeout(() => {
        L2.current = null;
        const A5 = R2.current;
        A5 && (R2.current = null, U2(A5), S2.current = Date.now());
      }, A4);
    }
  }, [Y2, G2]);
  reactExports.useEffect(() => () => {
    null != L2.current && window.clearTimeout(L2.current);
  }, []);
  const dA2 = reactExports.useCallback((A3) => {
    null == g2 || g2(A3), QA2(A3), aA2(true);
  }, [g2]), CA2 = reactExports.useCallback(() => {
    aA2(false), QA2(null);
  }, []), cA2 = reactExports.useCallback((A3, e3) => {
    tA2((t2) => {
      const n2 = t2.indexOf(A3);
      if (n2 < 0) return t2;
      const r3 = [...t2];
      return function(A4, e4) {
        var t3;
        const n3 = { lineColor: e4.selectedLineColor, lineWidthAdd: e4.selectedLineWidthAdd, lineStyle: e4.selectedLineStyle }, r4 = e4.selectedFillColor.trim();
        if (r4 && (n3.fillColor = r4), A4.style = { ...A4.style, lineColor: e4.lineColor, lineWidth: e4.lineWidth, lineStyle: e4.lineStyle, fillColor: e4.fillColor, selected: n3 }, A4 instanceof dn) {
          const n4 = (e4.symbolText || "?").trim() || "?", r5 = Math.max(8, Math.min(120, e4.symbolSize || 20));
          A4.symbol = n4, A4.size = r5;
          const i2 = A4.getPoints();
          A4.args = { points: i2.length ? i2 : (null == (t3 = A4.args) ? void 0 : t3.points) ?? [], symbol: n4, size: r5 };
        }
      }(r3[n2], e3), r3;
    }), queueMicrotask(() => {
      var A4;
      return null == (A4 = oA2.current) ? void 0 : A4.redrawCanvas();
    });
  }, []), IA2 = iA2 && null != BA2 && BA2 >= 0 && BA2 < eA2.length ? eA2[BA2] : null;
  reactExports.useEffect(() => {
    iA2 && null != BA2 && (BA2 < 0 || BA2 >= eA2.length || !eA2[BA2]) && CA2();
  }, [eA2, iA2, BA2, CA2]);
  const uA2 = reactExports.useCallback(() => {
    $2({ start: k2.length > 0 ? k2[0].t - 60 : 0, end: k2.length > 0 ? k2[k2.length - 1].t + 60 : 0, startIndex: 0, endIndex: k2.length > 0 ? k2.length - 1 : 0 }), tA2([]);
  }, [k2]), fA2 = reactExports.useCallback(() => {
    if (!k2.length) return;
    sA2.current = true;
    const A3 = jQ(k2, 60), e3 = k2[k2.length - 1].t + A3, t2 = e3 - Math.min(100, k2.length) * A3, [n2, r3] = TQ(k2, { start: t2, end: e3 }, A3);
    $2({ start: t2, end: e3, startIndex: n2, endIndex: r3 }), wA2(void 0);
  }, [k2]), vA2 = reactExports.useCallback(() => {
    var A3;
    if (k2.length) try {
      const e3 = new Blob([(A3 = k2, [["t", "o", "h", "l", "c", "v"].map(FQ).join(","), ...A3.map((A4) => [A4.t, A4.o, A4.h, A4.l, A4.c, A4.v ?? ""].map((A5) => FQ(String(A5))).join(","))].join("\r\n"))], { type: "text/csv;charset=utf-8" }), t2 = URL.createObjectURL(e3), n2 = document.createElement("a");
      n2.href = t2, n2.download = `chart-data-${Date.now()}.csv`, n2.click(), URL.revokeObjectURL(t2);
    } catch (A4) {
    }
  }, [k2]), hA2 = reactExports.useCallback(() => {
    var A3, e3;
    const t2 = E2.base.style.backgroundColor, n2 = (void 0 !== w2 ? String(w2).trim() : "") || (null == (e3 = null == (A3 = EA2.current) ? void 0 : A3.value) ? void 0 : e3.trim()) || "unknown", r3 = jQ(k2, 60), i2 = { symbol: n2, visibleTimeStartSec: J2.start, visibleTimeEndSec: J2.end, intervalSeconds: r3, chartType: String(E2.base.chartType ?? "chart"), barsInView: k2.length > 0 ? Math.max(0, J2.endIndex - J2.startIndex + 1) : 0, totalBarsInSeries: k2.length, visiblePriceMin: _2.min, visiblePriceMax: _2.max, capturedAtMs: Date.now() }, a3 = _B(gA2.current, t2, { meta: i2, footerTextColor: E2.base.style.axes.textColor });
    if (a3) try {
      const A4 = document.createElement("a");
      A4.download = $B(i2), A4.href = a3, A4.click();
    } catch (A4) {
    }
  }, [E2.base.chartType, E2.base.style.axes.textColor, E2.base.style.backgroundColor, k2, w2, J2.end, J2.endIndex, J2.start, J2.startIndex, _2.max, _2.min]), mA2 = reactExports.useCallback(async () => {
    var A3;
    try {
      m2 ? await m2() : uA2();
    } catch (A4) {
    } finally {
      null == (A3 = oA2.current) || A3.redrawCanvas();
    }
  }, [m2, uA2]);
  function pA2(A3) {
    var e3;
    if (!k2 || 0 === k2.length) return;
    const t2 = jQ(k2, 60), n2 = (null == (e3 = k2[k2.length - 1]) ? void 0 : e3.t) ?? 0, r3 = n2 ? n2 + t2 : 0;
    $2((e4) => {
      const n3 = { start: e4.start, end: e4.end }, i2 = "function" == typeof A3 ? A3(n3) : A3;
      if (r3 > 0) {
        const A4 = i2.end >= r3 - 1e-3;
        sA2.current = A4;
      } else sA2.current = false;
      const [a3, B2] = TQ(k2, i2, t2);
      return { ...i2, startIndex: a3, endIndex: B2 };
    });
  }
  reactExports.useLayoutEffect(() => {
    const e3 = G2(A2), t2 = Z2.current;
    t2 !== e3 && (0 !== e3.length && t2.length === e3.length && t2.length > 0 && t2.every((A3, t3) => A3 === e3[t3]) || lA2(e3));
  }, [A2, G2, lA2]);
  const [bA2, wA2] = reactExports.useState(O2), yA2 = void 0 !== X2 ? X2 : bA2, PA2 = reactExports.useCallback((A3) => {
    if (!k2.length) return;
    if ("All" === A3) return void fA2();
    const e3 = k2[k2.length - 1].t, t2 = ((A4, e4) => {
      switch (e4) {
        case "1D":
          return A4 - 86400;
        case "5D":
          return A4 - 432e3;
        case "1M":
        default:
          return A4 - 2592e3;
        case "3M":
          return A4 - 7776e3;
        case "6M":
          return A4 - 15552e3;
        case "1Y":
          return A4 - 31536e3;
        case "5Y":
          return A4 - 15768e4;
        case "YTD": {
          const e5 = new Date(1e3 * A4);
          return new Date(e5.getFullYear(), 0, 1).getTime() / 1e3;
        }
        case "All":
          return -1;
      }
    })(e3, A3);
    pA2({ start: t2, end: e3 + 0.02 * (e3 - t2) }), sA2.current = true;
  }, [k2, fA2]);
  reactExports.useEffect(() => {
    void 0 !== X2 && PA2(X2);
  }, [X2, PA2]);
  const VA2 = (A3) => {
    void 0 === X2 && (wA2(A3), PA2(A3)), null == M2 || M2(A3);
  };
  reactExports.useEffect(() => {
    $2((A3) => {
      if (0 === A3.start && 0 === A3.end && k2.length > 0) return { start: k2[0].t - 60, end: k2[k2.length - 1].t + 60, startIndex: 0, endIndex: k2.length - 1 };
      if (0 === k2.length) {
        const A4 = Date.now();
        return { start: Math.floor((A4 - 6048e5) / 1e3), end: Math.floor(A4 / 1e3), startIndex: 0, endIndex: 0 };
      }
      return A3;
    });
  }, [k2]), reactExports.useEffect(() => {
    if (!sA2.current || !k2.length) return;
    const A3 = jQ(k2, 60), e3 = k2[k2.length - 1].t + A3;
    $2((t2) => {
      if (e3 <= t2.end) return t2;
      const n2 = t2.end - t2.start;
      if (!(n2 > 0)) return t2;
      const r3 = e3, i2 = r3 - n2, [a3, B2] = TQ(k2, { start: i2, end: r3 }, A3);
      return { start: i2, end: r3, startIndex: a3, endIndex: B2 };
    });
  }, [k2]), reactExports.useEffect(() => {
    const A3 = J2, e3 = (null == k2 ? void 0 : k2.length) ?? 0;
    if (0 === e3) return;
    if (!(A3.end > A3.start)) return;
    if (A3.startIndex > A3.endIndex) return;
    const t2 = Math.max(0, Math.min(A3.startIndex, e3 - 1)), n2 = Math.max(t2, Math.min(A3.endIndex, e3 - 1)), r3 = Math.max(0, t2 - 1), i2 = Math.min(e3 - 1, n2 + 1), a3 = function(A4, e4, t3) {
      let n3 = -1 / 0, r4 = 1 / 0;
      for (let i3 = e4; i3 <= t3; i3++) {
        const e5 = A4[i3];
        e5.h > n3 && (n3 = e5.h), e5.l < r4 && (r4 = e5.l);
      }
      return { min: r4, max: n3, range: n3 - r4 || 1 };
    }(k2, r3, i2);
    a3.min === _2.min && a3.max === _2.max && a3.range === _2.range || AA2(a3);
  }, [J2, k2]), reactExports.useImperativeHandle(F2, () => ({ addShape(A3) {
    const e3 = vn(A3, E2);
    e3 && tA2((A4) => [...A4, e3]);
  }, updateShape(A3, e3) {
    if (un(e3)) return void tA2((t3) => t3.map((t4) => (t4.id !== A3 || fn(t4, e3), t4)));
    const t2 = vn(e3, E2);
    t2 && (t2.id = A3, tA2((e4) => e4.map((e5) => e5.id === A3 ? t2 : e5)));
  }, patchShape(A3, e3) {
    tA2((t2) => t2.map((t3) => (t3.id !== A3 || fn(t3, e3), t3)));
  }, setDrawingsFromSpecs(A3) {
    const e3 = [];
    for (const t2 of A3) {
      const A4 = In(t2, E2);
      A4 && e3.push(A4);
    }
    tA2(e3);
  }, deleteShape(A3) {
    tA2((e3) => e3.filter((e4) => e4.id !== A3));
  }, addInterval(A3) {
    const e3 = [...Z2.current, A3];
    e3.sort((A4, e4) => A4.t - e4.t), lA2(e3);
  }, updateInterval(A3, e3) {
    const t2 = Z2.current;
    if (A3 < 0 || A3 >= t2.length) return;
    const n2 = [...t2];
    n2[A3] = e3, n2.sort((A4, e4) => A4.t - e4.t), lA2(n2);
  }, deleteInterval(A3) {
    const e3 = Z2.current;
    if (A3 < 0 || A3 >= e3.length) return;
    const t2 = [...e3];
    t2.splice(A3, 1), lA2(t2);
  }, applyLiveData(A3, e3) {
    const t2 = DQ(Z2.current, A3, e3);
    return t2.warnings.length, t2.errors.length && 0 === t2.intervals.length || (t2.errors.length, lA2(t2.intervals)), t2;
  }, fitVisibleRangeToData() {
    if (!k2.length) return;
    sA2.current = true;
    const A3 = jQ(k2, 60), e3 = k2[0].t - 60, t2 = k2[k2.length - 1].t + 60, [n2, r3] = TQ(k2, { start: e3, end: t2 }, A3);
    $2({ start: e3, end: t2, startIndex: n2, endIndex: r3 });
  }, nudgeVisibleTimeRangeToLatest(A3) {
    k2.length > 0 && (sA2.current = true), $2((e3) => {
      if (!k2.length) return e3;
      const t2 = k2[k2.length - 1].t, n2 = jQ(k2, 60), r3 = t2 + ((null == A3 ? void 0 : A3.trailingPaddingSec) ?? Math.max(n2, 60));
      if (r3 <= e3.end) return e3;
      const i2 = e3.end - e3.start;
      if (!(i2 > 0)) return e3;
      const a3 = r3 - e3.end;
      let B2 = e3.start + a3, Q3 = r3;
      const o2 = k2[0].t;
      B2 < o2 - 60 && (B2 = o2 - 60, Q3 = B2 + i2, Q3 < r3 && (Q3 = r3));
      const [g3, E3] = TQ(k2, { start: B2, end: Q3 }, n2);
      return { start: B2, end: Q3, startIndex: g3, endIndex: E3 };
    });
  }, getMainCanvasElement() {
    var A3;
    return (null == (A3 = oA2.current) ? void 0 : A3.getMainCanvasElement()) ?? null;
  }, getViewInfo() {
    var A3;
    return { intervals: k2, drawings: eA2, visibleRange: J2, visiblePriceRange: _2, canvasSize: (null == (A3 = oA2.current) ? void 0 : A3.getCanvasSize()) ?? { width: 0, height: 0, dpr: 1 } };
  }, getVisibleRanges: () => ({ time: { start: J2.start, end: J2.end, startIndex: J2.startIndex, endIndex: J2.endIndex }, price: { min: _2.min, max: _2.max, range: _2.range } }), getDrawings: (A3) => xQ(eA2, A3), getDrawingById(A3) {
    const e3 = eA2.findIndex((e4) => e4.id === A3);
    return e3 < 0 ? null : PQ(eA2[e3], e3);
  }, getDrawingInstances: (A3) => zQ(eA2, A3), getSelectedDrawing: () => null == Q2 || Q2 < 0 || Q2 >= eA2.length ? null : PQ(eA2[Q2], Q2), getSelectedDrawingId: () => null == Q2 || Q2 < 0 || Q2 >= eA2.length ? null : eA2[Q2].id, selectShape(A3) {
    var e3, t2;
    const n2 = eA2.findIndex((e4) => e4.id === A3);
    -1 !== n2 && (null == g2 || g2(n2), null == (t2 = null == (e3 = oA2.current) ? void 0 : e3.redrawCanvas) || t2.call(e3));
  }, unselectShape() {
    var A3, e3;
    null == g2 || g2(null), null == (e3 = null == (A3 = oA2.current) ? void 0 : A3.redrawCanvas) || e3.call(A3);
  }, updateSelectedShape(A3) {
    if (null == Q2 || Q2 < 0 || Q2 >= eA2.length) return;
    const e3 = eA2[Q2].id;
    this.patchShape(e3, A3);
  }, getChartContext() {
    var A3;
    const t2 = K2 ?? { width: 0, height: 0 }, n2 = (null == (A3 = oA2.current) ? void 0 : A3.getCanvasSize()) ?? { width: 0, height: 0, dpr: 1 };
    return { symbol: w2 ?? y2 ?? null, chartType: E2.base.chartType, themeVariant: H2, layout: { canvasContainer: { width: t2.width, height: t2.height }, yAxisWidthPx: vt.INITIAL_Y_AXIS_WIDTH, xAxisHeightPx: vt.INITIAL_X_AXIS_HEIGHT, yAxisPosition: E2.axes.yAxisPosition }, canvas: n2, data: { intervalCount: k2.length, firstBarTime: k2.length ? k2[0].t : null, lastBarTime: k2.length ? k2[k2.length - 1].t : null, visibleTimeStart: J2.start, visibleTimeEnd: J2.end, visibleTimeStartIndex: J2.startIndex, visibleTimeEndIndex: J2.endIndex, visiblePriceMin: _2.min, visiblePriceMax: _2.max, visiblePriceRange: _2.range }, drawings: { count: eA2.length }, interaction: { selectedShapeIndex: Q2 }, timeDetailLevel: r2, timeFormat12h: a2, numberOfYTicks: e2 };
  }, getCanvasSize() {
    var A3;
    return (null == (A3 = oA2.current) ? void 0 : A3.getCanvasSize()) ?? { width: 0, height: 0, dpr: 1 };
  }, clearCanvas() {
    var A3;
    null == (A3 = oA2.current) || A3.clearCanvas(), tA2([]);
  }, redrawCanvas() {
    var A3;
    null == (A3 = oA2.current) || A3.redrawCanvas();
  }, reloadCanvas() {
    uA2();
  }, setInteractionMode(A3) {
    j2(A3);
  }, deleteSelectedDrawing() {
    var A3, e3;
    null != Q2 && (tA2((A4) => Q2 < 0 || Q2 >= A4.length ? A4 : A4.filter((A5, e4) => e4 !== Q2)), null == g2 || g2(null), aA2(false), QA2(null), null == (e3 = null == (A3 = oA2.current) ? void 0 : A3.redrawCanvas) || e3.call(A3));
  }, setInterval: (A3) => {
    if (!q2) return z2 ? void z2(A3) : void rA2({ isOpen: true, title: "No interval data handler", message: `Interval "${A3}" was requested, but no interval handler is connected. Wire "onIntervalChange" (or "onIntervalSearch") to load data for this timeframe.` });
    try {
      const t2 = q2(A3), n2 = () => null == z2 ? void 0 : z2(A3);
      null != (e3 = t2) && "function" == typeof e3.then ? t2.then((A4) => {
        false !== A4 && n2();
      }, (A4) => {
        const e4 = "string" == typeof A4 ? A4 : (null == A4 ? void 0 : A4.message) || "Failed to load data for the requested interval.";
        rA2({ isOpen: true, title: "Interval retrieval failed", message: e4 });
      }) : false !== t2 && n2();
    } catch (A4) {
      const e4 = "string" == typeof A4 ? A4 : (null == A4 ? void 0 : A4.message) || "Failed to load data for the requested interval.";
      rA2({ isOpen: true, title: "Interval retrieval failed", message: e4 });
    }
    var e3;
  }, setRange: (A3) => {
    void 0 === X2 || M2 ? VA2(A3) : rA2({ isOpen: true, title: "No range data handler", message: `Range "${String(A3)}" was requested while range is controlled. Wire "onRangeChange" so the host can load/update data for this range.` });
  }, showAlert: (A3, e3) => {
    rA2({ isOpen: true, title: A3, message: e3 });
  }, closeAlert: () => {
    rA2((A3) => ({ ...A3, isOpen: false }));
  } }), [lA2, E2, y2, eA2, fA2, VA2, k2, e2, z2, q2, M2, X2, uA2, Q2, j2, g2, w2, H2, r2, a2, _2, J2]);
  const xA2 = reactExports.useMemo(() => {
    const A3 = void 0 !== w2 ? String(w2).trim() : "", e3 = null != y2 ? String(y2).trim() : "";
    return A3 || e3;
  }, [w2, y2]), zA2 = !d2 && xA2.length > 0, XA2 = E2.base.engine === Vt.prime, MA2 = XA2 && E2.base.theme === ft.light;
  return jsxRuntimeExports.jsxs(Ea, { ref: T2, className: "tickup-stage", $showTopBar: d2, $showLeftBar: u2, $showSymbolStrip: zA2, $showRangeSelector: d2, children: [d2 && jsxRuntimeExports.jsx(la, { className: "top-toolbar-cell", children: jsxRuntimeExports.jsx(vQ, { handleChartTypeChange: f2, selectedChartType: E2.base.chartType, openSettingsMenu: v2, showSettingsBar: h2, language: E2.base.style.axes.language, locale: E2.base.style.axes.locale, symbolInputRef: EA2, symbol: w2, defaultSymbol: y2, onSymbolChange: P2, onSymbolSearch: V2, onFitVisibleRange: fA2, onExportDataCsv: vA2, onSnapshotPng: hA2, onRefresh: mA2, onToggleTheme: b2, themeVariant: H2, interval: x2, onIntervalChange: z2, onIntervalSearch: q2, primeGlass: XA2, primeGlassLight: MA2 }) }), !d2 && zA2 ? jsxRuntimeExports.jsx(sa, { className: "tickup-compact-symbol-strip", style: { padding: "6px 12px", font: E2.base.style.axes.font, fontWeight: 700, color: E2.base.style.axes.textColor, backgroundColor: E2.base.style.backgroundColor, borderBottom: `1px solid ${E2.base.style.axes.lineColor}` }, role: "status", "aria-label": `Symbol ${xA2}`, children: xA2 }) : null, u2 && jsxRuntimeExports.jsx(da, { className: "side-toolbar-cell", children: jsxRuntimeExports.jsx(NB, { language: E2.base.style.axes.language, locale: E2.base.style.axes.locale, primeGlass: XA2, primeGlassLight: MA2 }) }), jsxRuntimeExports.jsxs(Ca, { ref: gA2, className: "chart-main-cell tickup-chart-snapshot-root", $yAxisWidth: vt.INITIAL_Y_AXIS_WIDTH, $xAxisHeight: vt.INITIAL_X_AXIS_HEIGHT, $yAxisPosition: E2.axes.yAxisPosition, children: [jsxRuntimeExports.jsx(Ia, { className: E2.axes.yAxisPosition === It.left ? "left-y-axis-container" : "right-y-axis-container", $yAxisPosition: E2.axes.yAxisPosition, style: { width: `${vt.INITIAL_Y_AXIS_WIDTH}px` }, children: jsxRuntimeExports.jsx(ga, { yAxisPosition: E2.axes.yAxisPosition, xAxisHeight: vt.INITIAL_X_AXIS_HEIGHT, minPrice: _2.min, maxPrice: _2.max, numberOfYTicks: e2, formatting: E2.base.style.axes }) }), jsxRuntimeExports.jsxs(ca, { className: "canvas-axis-container", $yAxisPosition: E2.axes.yAxisPosition, children: [!d2 && h2 && jsxRuntimeExports.jsx(va, { $yAxisPosition: E2.axes.yAxisPosition, onClick: v2, className: "floating-settings-btn", children: jsxRuntimeExports.jsx(_a, {}) }), jsxRuntimeExports.jsx(fa, { ref: N2, className: "canvas-container", children: (null == K2 ? void 0 : K2.width) > 0 && (null == K2 ? void 0 : K2.height) > 0 && jsxRuntimeExports.jsx($i, { ref: oA2, intervalsArray: k2, drawings: eA2, setDrawings: tA2, selectedIndex: Q2, setSelectedIndex: g2, onRequestShapeProperties: dA2, visibleRange: J2, setVisibleRange: pA2, visiblePriceRange: _2, chartOptions: E2, canvasSizes: K2, windowSpread: vt, showBrandWatermark: W2, brandTheme: E2.base.theme }) }), jsxRuntimeExports.jsx(ua, { className: "x-axis-container", children: jsxRuntimeExports.jsx(Qa, { canvasSizes: K2, parentContainerRef: T2, timeDetailLevel: r2, timeFormat12h: a2, formatting: E2.base.style.axes, visibleRange: J2, xAxisHeight: vt.INITIAL_X_AXIS_HEIGHT, dateFormat: E2.base.style.axes.dateFormat || "MMM d", locale: E2.base.style.axes.locale || "en-US", timezone: E2.base.style.axes.timezone }) })] })] }), d2 && jsxRuntimeExports.jsx(wQ, { onRangeChange: VA2, currentRange: yA2, isDark: E2.base.theme === ft.dark }), jsxRuntimeExports.jsx(dB, { isOpen: Boolean(IA2), shape: IA2, onClose: CA2, onApply: cA2, themeVariant: H2 }), jsxRuntimeExports.jsx(IQ, { isOpen: nA2.isOpen, onClose: () => rA2((A3) => ({ ...A3, isOpen: false })), title: nA2.title, message: nA2.message, themeVariant: H2 })] });
});
var KQ = ((A2) => (A2.chart = "chart", A2.axes = "axes", A2.time = "time", A2.layout = "layout", A2.colors = "colors", A2.drawings = "drawings", A2.globalization = "globalization", A2.financial = "financial", A2))(KQ || {});
const YQ = [{ id: "chart", icon: "📊", label: "Chart Style" }, { id: "axes", icon: "📐", label: "Axes" }, { id: "time", icon: "⏱", label: "Time" }, { id: "layout", icon: "🖥", label: "Layout" }, { id: "colors", icon: "🎨", label: "Colors" }, { id: "drawings", icon: "✏️", label: "Drawing shapes" }, { id: "globalization", icon: "🌐", label: "Regional" }, { id: "financial", icon: "💰", label: "Financials" }], GQ = { chart: "Chart Style", axes: "Axes", time: "Time", layout: "Layout", colors: "Colors", drawings: "Drawing shapes", globalization: "Regional & Format", financial: "Currency & Price" }, kQ = ({ isOpen: A2, onClose: e2, onSave: i2, initialSettings: a2, themeVariant: Q2 = ft.dark, lockToolbarLayout: g2 = false, contained: E2 = false }) => {
  const s2 = Q2, [d2, C2] = reactExports.useState(a2), [c2, I2] = reactExports.useState(null), [u2, f2] = reactExports.useState(false), v2 = reactExports.useRef(a2);
  v2.current = a2, reactExports.useEffect(() => {
    A2 && (C2(v2.current), I2(null));
  }, [A2]);
  const h2 = g2 ? YQ.filter((A3) => "layout" !== A3.id) : YQ;
  if (!A2) return null;
  const m2 = (A3) => C2((e3) => ({ ...e3, [A3]: !e3[A3] })), p2 = (A3, e3) => C2((t2) => ({ ...t2, [A3]: e3 })), b2 = c2 ? GQ[c2] : "Chart Settings", w2 = ni(d2.locale).direction;
  return jsxRuntimeExports.jsx(ba, { $variant: s2, $contained: E2, onClick: e2, className: "settings-modal-overlay", children: jsxRuntimeExports.jsxs(wa, { $variant: s2, onClick: (A3) => A3.stopPropagation(), className: "settings-modal-container", children: [jsxRuntimeExports.jsxs(ya, { $variant: s2, className: "settings-header", children: [jsxRuntimeExports.jsxs(Pa, { className: "settings-header-left", children: [c2 && jsxRuntimeExports.jsx(Va, { $theme: s2, $variant: ha.back, className: "settings-back-button", onClick: () => {
    f2(true), I2(null);
  }, "aria-label": "Back", children: jsxRuntimeExports.jsx(xa, {}) }), jsxRuntimeExports.jsx("h2", { className: "settings-header-title", dir: w2, children: b2 })] }), jsxRuntimeExports.jsx(Va, { $theme: s2, $variant: ha.close, className: "settings-close-button", onClick: e2, "aria-label": "Close settings", children: jsxRuntimeExports.jsx(sB, {}) })] }), jsxRuntimeExports.jsx(za, { className: "settings-modal-body", children: null === c2 ? jsxRuntimeExports.jsx("div", { className: "settings-category-list", children: h2.map((A3) => jsxRuntimeExports.jsxs(Xa, { $variant: s2, className: `settings-category-tile settings-category-${A3.id}`, onClick: () => ((A4) => {
    f2(false), I2(A4);
  })(A3.id), children: [jsxRuntimeExports.jsx("span", { className: "tile-icon", children: A3.icon }), jsxRuntimeExports.jsx("span", { className: "tile-label", dir: w2, children: A3.label }), jsxRuntimeExports.jsx("span", { className: "tile-arrow", children: "›" })] }, A3.id)) }) : (() => {
    switch (c2) {
      case "chart":
        return jsxRuntimeExports.jsxs(Ma, { $back: u2, className: "settings-submenu-pane", children: [jsxRuntimeExports.jsx(Na, { $variant: s2, className: "settings-section-title", dir: w2, children: "Display" }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Show Volume Histogram" }), jsxRuntimeExports.jsx(Da, { $checked: d2.showHistogram, className: "settings-switch-toggle", onClick: () => m2("showHistogram") })] }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Show Background Grid" }), jsxRuntimeExports.jsx(Da, { $checked: d2.showGrid, className: "settings-switch-toggle", onClick: () => m2("showGrid") })] }), jsxRuntimeExports.jsx(Na, { $variant: s2, className: "settings-section-title", dir: w2, children: "Hover" }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Show candle tooltip" }), jsxRuntimeExports.jsx(Da, { $checked: d2.showCandleTooltip, className: "settings-switch-toggle", onClick: () => m2("showCandleTooltip") })] }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Show crosshair lines" }), jsxRuntimeExports.jsx(Da, { $checked: d2.showCrosshair, className: "settings-switch-toggle", onClick: () => C2((A3) => {
          const e3 = !A3.showCrosshair;
          return { ...A3, showCrosshair: e3, showCrosshairValues: !!e3 && A3.showCrosshairValues };
        }) })] }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Show time & price on crosshair" }), jsxRuntimeExports.jsx(Da, { $checked: d2.showCrosshairValues, $disabled: !d2.showCrosshair, className: "settings-switch-toggle", onClick: () => C2((A3) => A3.showCrosshair ? { ...A3, showCrosshairValues: !A3.showCrosshairValues } : A3) })] })] });
      case "axes":
        return jsxRuntimeExports.jsxs(Ma, { $back: u2, className: "settings-submenu-pane", children: [jsxRuntimeExports.jsx(Na, { $variant: s2, className: "settings-section-title", dir: w2, children: "Y-Axis" }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Y-Axis Position" }), jsxRuntimeExports.jsxs(Ta, { $variant: s2, className: "settings-select-dropdown", value: d2.yAxisPosition, onChange: (A3) => p2("yAxisPosition", parseInt(A3.target.value)), children: [jsxRuntimeExports.jsx("option", { value: It.right, children: "Right" }), jsxRuntimeExports.jsx("option", { value: It.left, children: "Left" })] })] }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Number of Y-Ticks" }), jsxRuntimeExports.jsx(Fa, { $variant: s2, className: "settings-number-input", type: "number", min: "2", max: "30", value: d2.numberOfYTicks, onChange: (A3) => p2("numberOfYTicks", parseInt(A3.target.value) || 2) })] })] });
      case "time":
        return jsxRuntimeExports.jsxs(Ma, { $back: u2, className: "settings-submenu-pane", children: [jsxRuntimeExports.jsx(Na, { $variant: s2, className: "settings-section-title", dir: w2, children: "Format" }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "12-Hour Time Format" }), jsxRuntimeExports.jsx(Da, { $checked: d2.timeFormat12h, className: "settings-switch-toggle", onClick: () => m2("timeFormat12h") })] })] });
      case "layout":
        return jsxRuntimeExports.jsxs(Ma, g2 ? { $back: u2, className: "settings-submenu-pane", children: [jsxRuntimeExports.jsx(Na, { $variant: s2, className: "settings-section-title", dir: w2, children: "Toolbars" }), jsxRuntimeExports.jsx("p", { style: { margin: "8px 0 0", fontSize: 13, opacity: 0.85 }, dir: w2, children: "Toolbar layout is fixed for this TickUp product and cannot be changed here." })] } : { $back: u2, className: "settings-submenu-pane", children: [jsxRuntimeExports.jsx(Na, { $variant: s2, className: "settings-section-title", dir: w2, children: "Toolbars" }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Show Side Toolbar" }), jsxRuntimeExports.jsx(Da, { $checked: d2.showSidebar, className: "settings-switch-toggle", onClick: () => m2("showSidebar") })] }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Show Top Toolbar" }), jsxRuntimeExports.jsx(Da, { $checked: d2.showTopBar, className: "settings-switch-toggle", onClick: () => m2("showTopBar") })] })] });
      case "colors":
        return jsxRuntimeExports.jsxs(Ma, { $back: u2, className: "settings-submenu-pane", children: [jsxRuntimeExports.jsx(Na, { $variant: s2, className: "settings-section-title", dir: w2, children: "Theme Colors" }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Background Color" }), jsxRuntimeExports.jsx(ja, { type: "color", value: d2.backgroundColor, onChange: (A3) => p2("backgroundColor", A3.target.value) })] }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Text & Axis Color" }), jsxRuntimeExports.jsx(ja, { type: "color", value: d2.textColor, onChange: (A3) => p2("textColor", A3.target.value) })] }), jsxRuntimeExports.jsx(Na, { $variant: s2, className: "settings-section-title", dir: w2, children: "Chart Elements" }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Bull (Up) Color" }), jsxRuntimeExports.jsx(ja, { type: "color", value: d2.bullColor, onChange: (A3) => p2("bullColor", A3.target.value) })] }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Bear (Down) Color" }), jsxRuntimeExports.jsx(ja, { type: "color", value: d2.bearColor, onChange: (A3) => p2("bearColor", A3.target.value) })] }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Line Color" }), jsxRuntimeExports.jsx(ja, { type: "color", value: d2.lineColor, onChange: (A3) => p2("lineColor", A3.target.value) })] })] });
      case "drawings":
        return jsxRuntimeExports.jsxs(Ma, { $back: u2, className: "settings-submenu-pane", children: [jsxRuntimeExports.jsx(Na, { $variant: s2, className: "settings-section-title", dir: w2, children: "New shapes" }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Stroke color" }), jsxRuntimeExports.jsx(ja, { type: "color", value: d2.drawingLineColor, onChange: (A3) => p2("drawingLineColor", A3.target.value) })] }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Line width" }), jsxRuntimeExports.jsx(Fa, { $variant: s2, className: "settings-number-input", type: "number", min: 1, max: 16, value: d2.drawingLineWidth, onChange: (A3) => p2("drawingLineWidth", Math.max(1, parseInt(A3.target.value, 10) || 1)) })] }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Line style" }), jsxRuntimeExports.jsxs(Ta, { $variant: s2, className: "settings-select-dropdown", value: d2.drawingLineStyle, onChange: (A3) => p2("drawingLineStyle", A3.target.value), children: [jsxRuntimeExports.jsx("option", { value: Nt.solid, children: "Solid" }), jsxRuntimeExports.jsx("option", { value: Nt.dashed, children: "Dashed" }), jsxRuntimeExports.jsx("option", { value: Nt.dotted, children: "Dotted" })] })] }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Fill color" }), jsxRuntimeExports.jsx(Ka, { $variant: s2, className: "settings-input", type: "text", value: d2.drawingFillColor, onChange: (A3) => p2("drawingFillColor", A3.target.value), placeholder: "rgba(33,150,243,0.2) or #hex", dir: "ltr" })] }), jsxRuntimeExports.jsx(Na, { $variant: s2, className: "settings-section-title", dir: w2, children: "Selected shape" }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Highlight stroke" }), jsxRuntimeExports.jsx(ja, { type: "color", value: d2.drawingSelectedLineColor, onChange: (A3) => p2("drawingSelectedLineColor", A3.target.value) })] }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Extra width when selected" }), jsxRuntimeExports.jsx(Fa, { $variant: s2, className: "settings-number-input", type: "number", min: 0, max: 8, value: d2.drawingSelectedLineWidthAdd, onChange: (A3) => p2("drawingSelectedLineWidthAdd", Math.max(0, parseInt(A3.target.value, 10) || 0)) })] }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Highlight line style" }), jsxRuntimeExports.jsxs(Ta, { $variant: s2, className: "settings-select-dropdown", value: d2.drawingSelectedLineStyle, onChange: (A3) => p2("drawingSelectedLineStyle", A3.target.value), children: [jsxRuntimeExports.jsx("option", { value: Nt.solid, children: "Solid" }), jsxRuntimeExports.jsx("option", { value: Nt.dashed, children: "Dashed" }), jsxRuntimeExports.jsx("option", { value: Nt.dotted, children: "Dotted" })] })] })] });
      case "globalization":
        return jsxRuntimeExports.jsxs(Ma, { $back: u2, className: "settings-submenu-pane", children: [jsxRuntimeExports.jsx(Na, { $variant: s2, className: "settings-section-title", dir: w2, children: "Language & Locale" }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Language" }), jsxRuntimeExports.jsx(Ta, { $variant: s2, className: "settings-select-dropdown", value: d2.language, onChange: (A3) => ((A4) => {
          let e3 = d2.locale;
          const t2 = Object.keys(Ai).find((e4) => Ai[e4].language === A4);
          t2 && !d2.locale.startsWith(A4) && (e3 = t2);
          const n2 = ni(e3);
          C2((t3) => ({ ...t3, language: A4, locale: e3, decimalSeparator: n2.decimalSeparator, thousandsSeparator: n2.thousandsSeparator, dateFormat: n2.dateFormat, currency: n2.defaultCurrency || t3.currency }));
        })(A3.target.value), children: ti.map((A3) => jsxRuntimeExports.jsx("option", { value: A3.code, children: A3.label }, A3.code)) })] }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Locale (l10n)" }), jsxRuntimeExports.jsx(Ta, { $variant: s2, className: "settings-select-dropdown", value: d2.locale, onChange: (A3) => ((A4) => {
          const e3 = ni(A4);
          C2((t2) => ({ ...t2, locale: A4, language: e3.language, decimalSeparator: e3.decimalSeparator, thousandsSeparator: e3.thousandsSeparator, dateFormat: e3.dateFormat, currency: e3.defaultCurrency || t2.currency }));
        })(A3.target.value), children: Object.keys(Ai).map((A3) => jsxRuntimeExports.jsx("option", { value: A3, children: Ai[A3].label }, A3)) })] }), jsxRuntimeExports.jsx(Na, { $variant: s2, className: "settings-section-title", dir: w2, children: "Date Format" }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Date Pattern" }), jsxRuntimeExports.jsxs(Ta, { $variant: s2, className: "settings-select-dropdown", value: d2.dateFormat, onChange: (A3) => p2("dateFormat", A3.target.value), children: [jsxRuntimeExports.jsx("option", { value: "MMM d, yyyy", children: "Mar 23, 2025" }), jsxRuntimeExports.jsx("option", { value: "dd/MM/yyyy", children: "23/03/2025" }), jsxRuntimeExports.jsx("option", { value: "MM/dd/yyyy", children: "03/23/2025" }), jsxRuntimeExports.jsx("option", { value: "yyyy-MM-dd", children: "2025-03-23" }), jsxRuntimeExports.jsx("option", { value: "yyyy/MM/dd", children: "2025/03/23" }), jsxRuntimeExports.jsx("option", { value: "d MMM yyyy", children: "23 Mar 2025" }), jsxRuntimeExports.jsx("option", { value: "d.M.yyyy", children: "23.3.2025" }), jsxRuntimeExports.jsx("option", { value: "yyyy. MM. dd.", children: "2025. 03. 23." })] })] })] });
      case "financial":
        return jsxRuntimeExports.jsxs(Ma, { $back: u2, className: "settings-submenu-pane", children: [jsxRuntimeExports.jsx(Na, { $variant: s2, className: "settings-section-title", dir: w2, children: "Currency" }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Enable Currency" }), jsxRuntimeExports.jsx(Da, { $checked: d2.useCurrency, onClick: () => m2("useCurrency") })] }), d2.useCurrency && jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Select Currency" }), jsxRuntimeExports.jsx(Ta, { $variant: s2, value: d2.currency, onChange: (A3) => p2("currency", A3.target.value), children: ei.map((A3) => jsxRuntimeExports.jsx("option", { value: A3.code, children: A3.label }, A3.code)) })] }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Symbol Placement" }), jsxRuntimeExports.jsxs(Ta, { $variant: s2, value: d2.currencyDisplay, onChange: (A3) => p2("currencyDisplay", A3.target.value), children: [jsxRuntimeExports.jsx("option", { value: zt.symbol, children: "Symbol ($)" }), jsxRuntimeExports.jsx("option", { value: zt.narrowSymbol, children: "Narrow ($)" }), jsxRuntimeExports.jsx("option", { value: zt.code, children: "Code (USD)" }), jsxRuntimeExports.jsx("option", { value: zt.name, children: "Name (dollars)" })] })] })] }), jsxRuntimeExports.jsx(Na, { $variant: s2, className: "settings-section-title", dir: w2, children: "Number & Price" }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Notation" }), jsxRuntimeExports.jsxs(Ta, { $variant: s2, value: d2.numberNotation, onChange: (A3) => p2("numberNotation", A3.target.value), children: [jsxRuntimeExports.jsx("option", { value: xt.standard, children: "Standard" }), jsxRuntimeExports.jsx("option", { value: xt.scientific, children: "Scientific" }), jsxRuntimeExports.jsx("option", { value: xt.compact, children: "Compact" })] })] }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Auto Precision" }), jsxRuntimeExports.jsx(Da, { $checked: d2.autoPrecision, onClick: () => p2("autoPrecision", !d2.autoPrecision) })] }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", style: { opacity: d2.autoPrecision ? 0.5 : 1 }, children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Decimal Places" }), jsxRuntimeExports.jsx(Fa, { $variant: s2, type: "number", min: "0", max: "15", value: d2.fractionDigits, onChange: (A3) => {
          const e3 = parseInt(A3.target.value) || 0;
          C2((A4) => ({ ...A4, fractionDigits: e3, minimumFractionDigits: e3, maximumFractionDigits: e3 }));
        }, disabled: d2.autoPrecision })] }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Custom Unit" }), jsxRuntimeExports.jsx("input", { className: "settings-input", type: "text", value: d2.unit, onChange: (A3) => p2("unit", A3.target.value), placeholder: "e.g. %, BTC, pts", style: { flex: 1, padding: "6px 10px", borderRadius: "4px", border: "1px solid #ddd", background: "white", color: "#333" } })] }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Unit Placement" }), jsxRuntimeExports.jsxs(Ta, { $variant: s2, value: d2.unitPlacement, onChange: (A3) => p2("unitPlacement", A3.target.value), children: [jsxRuntimeExports.jsx("option", { value: Xt.suffix, children: "Suffix (100 BTC)" }), jsxRuntimeExports.jsx("option", { value: Xt.prefix, children: "Prefix (BTC 100)" })] })] }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Significant Digits" }), jsxRuntimeExports.jsx(Fa, { $variant: s2, type: "number", min: "1", max: "21", value: d2.maximumSignificantDigits, onChange: (A3) => p2("maximumSignificantDigits", parseInt(A3.target.value) || 21) })] }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Decimal Mark" }), jsxRuntimeExports.jsxs(Ta, { $variant: s2, value: d2.decimalSeparator, onChange: (A3) => p2("decimalSeparator", A3.target.value), children: [jsxRuntimeExports.jsx("option", { value: ".", children: "Dot ( . )" }), jsxRuntimeExports.jsx("option", { value: ",", children: "Comma ( , )" })] })] }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Digit Grouping" }), jsxRuntimeExports.jsxs(Ta, { $variant: s2, value: d2.thousandsSeparator, onChange: (A3) => p2("thousandsSeparator", A3.target.value), children: [jsxRuntimeExports.jsx("option", { value: ",", children: "Comma ( , )" }), jsxRuntimeExports.jsx("option", { value: ".", children: "Dot ( . )" }), jsxRuntimeExports.jsx("option", { value: " ", children: "Space (   )" }), jsxRuntimeExports.jsx("option", { value: "", children: "None" })] })] }), jsxRuntimeExports.jsxs(Oa, { $variant: s2, className: "settings-form-row", children: [jsxRuntimeExports.jsx(qa, { $variant: s2, className: "settings-form-label", dir: w2, children: "Tick Size" }), jsxRuntimeExports.jsx(Fa, { $variant: s2, type: "number", step: "0.0001", min: "0", value: d2.tickSize, onChange: (A3) => p2("tickSize", parseFloat(A3.target.value) || 0) })] })] });
      default:
        return null;
    }
  })() }), jsxRuntimeExports.jsxs(Ha, { $variant: s2, className: "settings-modal-footer", children: [jsxRuntimeExports.jsx(Wa, { $variant: s2, className: "settings-cancel-button", onClick: e2, dir: w2, children: "Cancel" }), jsxRuntimeExports.jsxs(Wa, { $variant: s2, $primary: true, className: "settings-save-button", onClick: () => {
    i2(d2), e2();
  }, dir: w2, children: [jsxRuntimeExports.jsx(lB, {}), "Save Changes"] })] })] }) });
};
function UQ(A2, e2) {
  if (A2 === e2) return true;
  if ("object" != typeof A2 || null === A2 || "object" != typeof e2 || null === e2) return false;
  const t2 = Object.keys(A2), n2 = Object.keys(e2);
  if (t2.length !== n2.length) return false;
  for (const r2 of t2) if (!n2.includes(r2) || !UQ(A2[r2], e2[r2])) return false;
  return true;
}
const ZQ = function(A2) {
  for (var e2 = [], t2 = 1; t2 < arguments.length; t2++) e2[t2 - 1] = arguments[t2];
  var n2 = gt.apply(void 0, w([A2], e2, false)), r2 = "sc-global-".concat(SA(JSON.stringify(n2))), a2 = new dt(n2, r2);
  var B2 = function(A3) {
    var e3 = Le(), t3 = i.useContext(rt), B3 = i.useRef(e3.styleSheet.allocateGSInstance(r2)).current;
    return e3.styleSheet.server && Q2(B3, A3, e3.styleSheet, t3, e3.stylis), i.useLayoutEffect(function() {
      if (!e3.styleSheet.server) return Q2(B3, A3, e3.styleSheet, t3, e3.stylis), function() {
        return a2.removeStyles(B3, e3.styleSheet);
      };
    }, [B3, A3, e3.styleSheet, t3, e3.stylis]), null;
  };
  function Q2(A3, e3, t3, n3, r3) {
    if (a2.isStatic) a2.renderStyles(A3, OA, t3, r3);
    else {
      var i2 = b(b({}, e3), { theme: jA(e3, n3, B2.defaultProps) });
      a2.renderStyles(A3, i2, t3, r3);
    }
  }
  return i.memo(B2);
}`
    /* Global styles intentionally relaxed to prevent hijacking the host application's body/scrolling. 
       Host applications should configure html/body sizing themselves if they desire a full-screen layout. */
`, LQ = lt.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    min-height: 0;
    min-width: 0;
    box-sizing: border-box;
    overflow: hidden;
`;
lt.div`
    display: flex;
    flex: 1 1 auto;
    min-height: 0;
    min-width: 0;
    box-sizing: border-box;
`, lt.div`
    height: 100%;
    width: fit-content;
    box-sizing: border-box;
    min-width: 0;
    min-height: 0;
`, lt.div`
    flex: 1 1 auto;
    padding: 5px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
`, lt.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  width: 100%;
  min-width: 0;
  min-height: 0;
`;
const RQ = { candles: { bullColor: "#26a69a", bearColor: "#ef5350", upColor: "#26a69a", downColor: "#ef5350", borderColor: "#333333", borderWidth: 1, bodyWidthFactor: 0.6, spacingFactor: 0.2 }, line: { color: "#2962ff", lineWidth: 2 }, area: { fillColor: "rgba(41, 98, 255, 0.2)", strokeColor: "rgba(41, 98, 255, 1)", lineWidth: 2 }, histogram: { bullColor: "#26a69a", bearColor: "#ef5350", opacity: 0.5, heightRatio: 0.3 }, bar: { bullColor: "#26a69a", bearColor: "#ef5350", opacity: 0.7 }, grid: { color: "#e0e0e0", lineWidth: 1, gridSpacing: 50, lineColor: "#e0e0e0", lineDash: [] }, overlay: { lineColor: "#ff9800", lineWidth: 1, lineStyle: Nt.solid }, axes: { axisPosition: It.left, textColor: "#424242", font: "12px Arial", lineColor: "#9e9e9e", lineWidth: 1, locale: "en-US", language: "en", numberFractionDigits: 2, decimalSeparator: ".", thousandsSeparator: ",", dateFormat: "MMM d", currency: "USD", useCurrency: false, currencyDisplay: zt.symbol, numberNotation: xt.standard, tickSize: 0.01, minimumFractionDigits: 2, maximumFractionDigits: 8, maximumSignificantDigits: 21, autoPrecision: false, unit: "", unitPlacement: Xt.suffix, timezone: "UTC", exchange: "", tradingSessions: [], holidays: [], displayCurrency: "USD", conversionRate: 1 }, drawings: { lineColor: "#2196f3", lineWidth: 2, lineStyle: Nt.solid, fillColor: "rgba(33, 150, 243, 0.2)", selected: { lineColor: "#ff9800", lineWidthAdd: 1, lineStyle: Nt.dashed, fillColor: "rgba(255, 152, 0, 0.3)" } }, backgroundColor: "#ffffff", showGrid: true }, SQ = { base: { chartType: Pt.Candlestick, engine: Vt.standard, theme: ft.light, showOverlayLine: false, showHistogram: true, showCrosshair: true, showCrosshairValues: false, showCandleTooltip: true, style: RQ, overlays: [], overlayKinds: [] }, axes: { yAxisPosition: It.left, currency: "USD", numberOfYTicks: 5 } };
var JQ = ((A2) => (A2.pulse = "pulse", A2.flow = "flow", A2.command = "command", A2.desk = "desk", A2.prime = "prime", A2))(JQ || {});
const $Q = {};
function _Q(A2) {
  const e2 = (null == A2 ? void 0 : A2.base) ?? {}, t2 = Array.isArray(e2.overlays) ? e2.overlays.length : 0, n2 = Array.isArray(e2.overlayKinds) ? e2.overlayKinds.length : 0;
  return Math.max(t2, n2);
}
function Ao(A2) {
  const e2 = A2.base ?? {}, t2 = Array.isArray(e2.overlays) ? e2.overlays : [], n2 = Array.isArray(e2.overlayKinds) ? e2.overlayKinds : [];
  return t2.length > 3 || n2.length > 3 ? { options: { ...A2, base: { ...A2.base, overlays: t2.slice(0, 3), overlayKinds: n2.slice(0, 3) } }, wasCapped: true } : { options: A2, wasCapped: false };
}
function eo(A2) {
  switch (A2 ?? JQ.command) {
    case JQ.pulse:
      return { showSidebar: false, showTopBar: false, showSettingsBar: false };
    case JQ.flow:
      return { showSidebar: false, showTopBar: true, showSettingsBar: true };
    case JQ.command:
    case JQ.desk:
    case JQ.prime:
    default:
      return { showSidebar: true, showTopBar: true, showSettingsBar: true };
  }
}
const to = reactExports.forwardRef((A2, e2) => {
  const { intervalsArray: r2 = [], initialNumberOfYTicks: i2 = 5, initialTimeDetailLevel: a2 = yt.Auto, initialTimeFormat12h: Q2 = false, chartOptions: g2 = $Q, showSidebar: E2, showTopBar: d2, showSettingsBar: C2, onRefreshRequest: I2, symbol: u2, defaultSymbol: f2, onSymbolChange: v2, onSymbolSearch: h2, productId: p2, licenseKey: b2, licenseUserIdentifier: w2, licenseValidationOverride: y2, showAttribution: P2 = true, themeVariant: V2, defaultThemeVariant: x2 = ft.light, onThemeVariantChange: z2, interval: X2, onIntervalChange: M2, range: O2, onRangeChange: q2, initialRange: H2, onIntervalSearch: W2 } = A2, D2 = null != p2, F2 = eo(p2), j2 = D2 ? F2.showSidebar : E2 ?? F2.showSidebar, T2 = D2 ? F2.showTopBar : d2 ?? F2.showTopBar, N2 = D2 ? F2.showSettingsBar : C2 ?? F2.showSettingsBar, [K2, Y2] = reactExports.useState(() => Cn(SQ, g2)), [G2, k2] = reactExports.useState(x2), U2 = void 0 !== V2, Z2 = U2 ? V2 : G2, [L2, R2] = reactExports.useState(null), S2 = reactExports.useRef(null), [J2, $2] = reactExports.useState(false), [_2, AA2] = reactExports.useState({ isOpen: false, title: "", message: "" }), [eA2, tA2] = reactExports.useState(null), [nA2, rA2] = reactExports.useState(null), iA2 = reactExports.useRef(null), [aA2, BA2] = reactExports.useState({ showSidebar: j2, showTopBar: T2, showSettingsBar: N2, timeFormat12h: Q2 }), QA2 = reactExports.useRef(g2), oA2 = p2 === JQ.prime && true === eA2, gA2 = !oA2, EA2 = !oA2 || P2, sA2 = () => {
    rA2("Core tier is limited to 3 indicators. Upgrade to Prime for unlimited analysis."), null != iA2.current && window.clearTimeout(iA2.current), iA2.current = window.setTimeout(() => {
      rA2(null), iA2.current = null;
    }, 3200);
  };
  reactExports.useEffect(() => () => {
    null != iA2.current && window.clearTimeout(iA2.current);
  }, []), reactExports.useEffect(() => {
    let A3 = false;
    if (p2 !== JQ.prime) return tA2(null), () => {
      A3 = true;
    };
    const e3 = null == b2 ? void 0 : b2.trim(), t2 = (null == w2 ? void 0 : w2.trim()) || null;
    return e3 ? "boolean" == typeof y2 ? (tA2(y2), () => {
      A3 = true;
    }) : (__vitePreload(() => import('./index-BzPwDpPe.js'),true?[]:void 0).then((n2) => {
      if (!A3) return "function" == typeof (null == n2 ? void 0 : n2.validateLicense) ? Promise.resolve(n2.validateLicense(e3, t2)).then((e4) => {
        A3 || tA2(Boolean(e4));
      }) : void tA2(true);
    }).catch(() => {
      A3 || tA2(true);
    }), () => {
      A3 = true;
    }) : (tA2(false), () => {
      A3 = true;
    });
  }, [p2, b2, w2, y2]), reactExports.useEffect(() => {
    UQ(g2, QA2.current) || (QA2.current = g2, Y2((A3) => {
      const e3 = Cn(A3, g2);
      if (gA2) {
        const t2 = _Q(e3), n2 = Ao(e3);
        return t2 > 3 && n2.wasCapped && sA2(), UQ(n2.options, A3) ? A3 : n2.options;
      }
      return UQ(e3, A3) ? A3 : e3;
    }));
  }, [g2, gA2]), reactExports.useEffect(() => {
    if (!EA2) return;
    const A3 = () => {
      Array.from(document.querySelectorAll("[data-tickup-attribution]")).forEach((A4) => {
        A4.style.setProperty("display", "flex", "important"), A4.style.setProperty("visibility", "visible", "important"), A4.style.setProperty("opacity", "1", "important"), A4.style.setProperty("pointer-events", "none", "important");
      });
    };
    A3();
    const e3 = new MutationObserver(() => A3());
    return e3.observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ["style", "class"] }), () => e3.disconnect();
  }, [EA2]), reactExports.useEffect(() => {
    gA2 && Y2((A3) => {
      const e3 = _Q(A3), t2 = Ao(A3);
      return e3 > 3 && t2.wasCapped && sA2(), UQ(t2.options, A3) ? A3 : t2.options;
    });
  }, [gA2]), reactExports.useEffect(() => {
    if (D2) {
      const A4 = eo(p2);
      return void BA2((e3) => ({ ...e3, showSidebar: A4.showSidebar, showTopBar: A4.showTopBar, showSettingsBar: A4.showSettingsBar }));
    }
    const A3 = eo(void 0);
    BA2((e3) => ({ ...e3, showSidebar: void 0 !== E2 ? E2 : A3.showSidebar, showTopBar: void 0 !== d2 ? d2 : A3.showTopBar, showSettingsBar: void 0 !== C2 ? C2 : A3.showSettingsBar }));
  }, [D2, p2, E2, d2, C2]), reactExports.useEffect(() => {
    const A3 = (A4) => {
      var e3;
      const t2 = window.getSelection();
      if (!t2 || 0 === t2.rangeCount) return;
      const n2 = t2.toString();
      if (n2) {
        const t3 = Oi.parseInput(n2, K2.base.style.axes);
        null !== t3 && (null == (e3 = A4.clipboardData) || e3.setData("text/plain", Oi.toClipboard(t3)), A4.preventDefault());
      }
    };
    return window.addEventListener("copy", A3), () => window.removeEventListener("copy", A3);
  }, [K2.base.style.axes]), reactExports.useImperativeHandle(e2, () => ({ addShape: (A3) => {
    S2.current && S2.current.addShape && S2.current.addShape(A3);
  }, updateShape: (A3, e3) => {
    S2.current && S2.current.updateShape && S2.current.updateShape(A3, e3);
  }, patchShape: (A3, e3) => {
    var t2;
    (null == (t2 = S2.current) ? void 0 : t2.patchShape) && S2.current.patchShape(A3, e3);
  }, setDrawingsFromSpecs: (A3) => {
    var e3;
    (null == (e3 = S2.current) ? void 0 : e3.setDrawingsFromSpecs) && S2.current.setDrawingsFromSpecs(A3);
  }, deleteShape: (A3) => {
    S2.current && S2.current.deleteShape && S2.current.deleteShape(A3);
  }, addInterval: (A3) => {
    S2.current && S2.current.addInterval && S2.current.addInterval(A3);
  }, updateInterval: (A3, e3) => {
    S2.current && S2.current.updateInterval && S2.current.updateInterval(A3, e3);
  }, deleteInterval: (A3) => {
    S2.current && S2.current.deleteInterval && S2.current.deleteInterval(A3);
  }, getViewInfo: () => S2.current && S2.current.getViewInfo ? S2.current.getViewInfo() : null, getDrawings: (A3) => {
    var e3;
    return (null == (e3 = S2.current) ? void 0 : e3.getDrawings) ? S2.current.getDrawings(A3) : [];
  }, getDrawingById: (A3) => {
    var e3;
    return (null == (e3 = S2.current) ? void 0 : e3.getDrawingById) ? S2.current.getDrawingById(A3) : null;
  }, getDrawingInstances: (A3) => {
    var e3;
    return (null == (e3 = S2.current) ? void 0 : e3.getDrawingInstances) ? S2.current.getDrawingInstances(A3) : [];
  }, getSelectedDrawing: () => {
    var A3, e3;
    return (null == (e3 = null == (A3 = S2.current) ? void 0 : A3.getSelectedDrawing) ? void 0 : e3.call(A3)) ?? null;
  }, getSelectedDrawingId: () => {
    var A3, e3;
    return (null == (e3 = null == (A3 = S2.current) ? void 0 : A3.getSelectedDrawingId) ? void 0 : e3.call(A3)) ?? null;
  }, selectShape: (A3) => {
    var e3, t2;
    null == (t2 = null == (e3 = S2.current) ? void 0 : e3.selectShape) || t2.call(e3, A3);
  }, unselectShape: () => {
    var A3, e3;
    null == (e3 = null == (A3 = S2.current) ? void 0 : A3.unselectShape) || e3.call(A3);
  }, updateSelectedShape: (A3) => {
    var e3, t2;
    null == (t2 = null == (e3 = S2.current) ? void 0 : e3.updateSelectedShape) || t2.call(e3, A3);
  }, getChartContext: () => {
    var A3;
    return (null == (A3 = S2.current) ? void 0 : A3.getChartContext) ? S2.current.getChartContext() : null;
  }, getCanvasSize: () => S2.current && S2.current.getCanvasSize ? S2.current.getCanvasSize() : null, getVisibleRanges: () => {
    var A3;
    return (null == (A3 = S2.current) ? void 0 : A3.getVisibleRanges) ? S2.current.getVisibleRanges() : null;
  }, clearCanvas: () => {
    S2.current && S2.current.clearCanvas && S2.current.clearCanvas();
  }, redrawCanvas: () => {
    S2.current && S2.current.redrawCanvas && S2.current.redrawCanvas();
  }, reloadCanvas: () => {
    S2.current && S2.current.reloadCanvas && S2.current.reloadCanvas();
  }, applyLiveData: (A3, e3) => {
    var t2;
    return (null == (t2 = S2.current) ? void 0 : t2.applyLiveData) ? S2.current.applyLiveData(A3, e3) : { ok: false, intervals: [], errors: ["Chart stage is not ready"], warnings: [] };
  }, fitVisibleRangeToData: () => {
    var A3, e3;
    null == (e3 = null == (A3 = S2.current) ? void 0 : A3.fitVisibleRangeToData) || e3.call(A3);
  }, nudgeVisibleTimeRangeToLatest: (A3) => {
    var e3, t2;
    null == (t2 = null == (e3 = S2.current) ? void 0 : e3.nudgeVisibleTimeRangeToLatest) || t2.call(e3, A3);
  }, getMainCanvasElement: () => {
    var A3, e3;
    return (null == (e3 = null == (A3 = S2.current) ? void 0 : A3.getMainCanvasElement) ? void 0 : e3.call(A3)) ?? null;
  }, setEngine: (A3) => {
    Y2((e3) => {
      const t2 = Cn(e3, A3.getChartOptionsPatch());
      if (gA2) {
        const A4 = _Q(t2), e4 = Ao(t2);
        return A4 > 3 && e4.wasCapped && sA2(), e4.options;
      }
      return t2;
    });
  }, setInteractionMode: (A3) => {
    var e3, t2;
    null == (t2 = null == (e3 = S2.current) ? void 0 : e3.setInteractionMode) || t2.call(e3, A3);
  }, deleteSelectedDrawing: () => {
    var A3, e3;
    null == (e3 = null == (A3 = S2.current) ? void 0 : A3.deleteSelectedDrawing) || e3.call(A3);
  }, setInterval: (A3) => {
    var e3;
    null == (e3 = S2.current) || e3.setInterval(A3);
  }, setRange: (A3) => {
    var e3;
    null == (e3 = S2.current) || e3.setRange(A3);
  }, showAlert: (A3, e3) => {
    AA2({ isOpen: true, title: A3, message: e3 });
  }, closeAlert: () => {
    AA2((A3) => ({ ...A3, isOpen: false }));
  } }));
  const lA2 = reactExports.useMemo(() => ({ showSidebar: aA2.showSidebar, showTopBar: aA2.showTopBar, showHistogram: K2.base.showHistogram, showCandleTooltip: K2.base.showCandleTooltip, showCrosshair: K2.base.showCrosshair, showCrosshairValues: !!K2.base.showCrosshair && K2.base.showCrosshairValues, showGrid: K2.base.style.showGrid, timeFormat12h: aA2.timeFormat12h, yAxisPosition: K2.axes.yAxisPosition, numberOfYTicks: K2.axes.numberOfYTicks, backgroundColor: K2.base.style.backgroundColor, textColor: K2.base.style.axes.textColor, bullColor: K2.base.style.candles.bullColor, bearColor: K2.base.style.candles.bearColor, lineColor: K2.base.style.line.color, fractionDigits: K2.base.style.axes.numberFractionDigits ?? 2, decimalSeparator: K2.base.style.axes.decimalSeparator ?? ".", thousandsSeparator: K2.base.style.axes.thousandsSeparator ?? ",", dateFormat: K2.base.style.axes.dateFormat ?? "MMM d", locale: K2.base.style.axes.locale ?? "en-US", language: K2.base.style.axes.language ?? "en", currency: K2.base.style.axes.currency ?? "USD", useCurrency: K2.base.style.axes.useCurrency ?? false, currencyDisplay: K2.base.style.axes.currencyDisplay ?? zt.symbol, numberNotation: K2.base.style.axes.numberNotation ?? xt.standard, minimumFractionDigits: K2.base.style.axes.minimumFractionDigits ?? 2, maximumFractionDigits: K2.base.style.axes.maximumFractionDigits ?? 8, maximumSignificantDigits: K2.base.style.axes.maximumSignificantDigits ?? 21, tickSize: K2.base.style.axes.tickSize ?? 0.01, autoPrecision: K2.base.style.axes.autoPrecision ?? false, unit: K2.base.style.axes.unit ?? "", unitPlacement: K2.base.style.axes.unitPlacement ?? Xt.suffix, drawingLineColor: K2.base.style.drawings.lineColor, drawingLineWidth: K2.base.style.drawings.lineWidth, drawingLineStyle: K2.base.style.drawings.lineStyle, drawingFillColor: K2.base.style.drawings.fillColor, drawingSelectedLineColor: K2.base.style.drawings.selected.lineColor, drawingSelectedLineStyle: K2.base.style.drawings.selected.lineStyle ?? Nt.dashed, drawingSelectedLineWidthAdd: K2.base.style.drawings.selected.lineWidthAdd ?? 1 }), [aA2.showSidebar, aA2.showTopBar, aA2.timeFormat12h, K2.base.showHistogram, K2.base.showCandleTooltip, K2.base.showCrosshair, K2.base.showCrosshairValues, K2.base.style.showGrid, K2.axes.yAxisPosition, K2.axes.numberOfYTicks, K2.base.style.backgroundColor, K2.base.style.axes, K2.base.style.line.color, K2.base.style.candles.bullColor, K2.base.style.candles.bearColor, K2.base.style.drawings]), dA2 = reactExports.useMemo(() => Z2 === ft.light ? K2 : Cn(K2, { base: { theme: ft.dark, style: { backgroundColor: "#121212", axes: { textColor: "#e6edf3", lineColor: "#6e7681" }, grid: { color: "#30363d", lineColor: "#30363d" }, candles: { borderColor: "#757575" } } } }), [K2, Z2]), CA2 = p2 === JQ.prime && !eA2;
  return jsxRuntimeExports.jsxs(m, { children: [jsxRuntimeExports.jsx(ZQ, { $pageBackground: Z2 === ft.dark ? "#121212" : "#ffffff" }), jsxRuntimeExports.jsxs(LQ, { className: "tickup-root", style: { backgroundColor: dA2.base.style.backgroundColor, display: "flex", flexDirection: "column", minHeight: 0 }, children: [CA2 ? jsxRuntimeExports.jsxs("div", { style: { flexShrink: 0, padding: "6px 10px", fontSize: 11, textAlign: "center", fontFamily: "system-ui, sans-serif", backgroundColor: Z2 === ft.dark ? "rgba(69, 26, 3, 0.4)" : "#fff8e1", color: Z2 === ft.dark ? "#fcd9a8" : "#5c4a00", borderBottom: "1px solid " + (Z2 === ft.dark ? "rgba(245, 158, 11, 0.35)" : "#f0d060") }, children: ["TickUp Prime tier — evaluation mode. Provide ", jsxRuntimeExports.jsx("code", { children: "licenseKey" }), " when your license is active."] }) : null, jsxRuntimeExports.jsxs("div", { style: { flex: "1 1 auto", minHeight: 0, display: "flex", flexDirection: "column", position: "relative" }, children: [jsxRuntimeExports.jsx(NQ, { ref: S2, intervalsArray: r2, numberOfYTicks: dA2.axes.numberOfYTicks, timeDetailLevel: a2, timeFormat12h: aA2.timeFormat12h, selectedIndex: L2, setSelectedIndex: R2, chartOptions: dA2, showTopBar: aA2.showTopBar, showLeftBar: aA2.showSidebar, handleChartTypeChange: (A3) => {
    R2(null), Y2((e3) => ({ ...e3, base: { ...e3.base, chartType: A3 } }));
  }, openSettingsMenu: () => $2(true), showSettingsBar: aA2.showSettingsBar, onRefreshRequest: I2, onToggleTheme: () => {
    const A3 = Z2 === ft.light ? ft.dark : ft.light;
    U2 || k2(A3), null == z2 || z2(A3);
  }, symbol: u2, defaultSymbol: f2, onSymbolChange: v2, onSymbolSearch: h2, interval: X2, onIntervalChange: M2, onIntervalSearch: W2, range: O2, onRangeChange: q2, initialRange: H2, themeVariant: Z2, showBrandWatermark: EA2, isPrimeLicensed: oA2 }), jsxRuntimeExports.jsx(kQ, { isOpen: J2, onClose: () => $2(false), onSave: (A3) => {
    BA2((e3) => ({ ...e3, ...D2 ? {} : { showSidebar: A3.showSidebar, showTopBar: A3.showTopBar }, timeFormat12h: A3.timeFormat12h })), Y2((e3) => ({ ...e3, axes: { ...e3.axes, yAxisPosition: A3.yAxisPosition, numberOfYTicks: A3.numberOfYTicks }, base: { ...e3.base, showHistogram: A3.showHistogram, showCandleTooltip: A3.showCandleTooltip, showCrosshair: A3.showCrosshair, showCrosshairValues: !!A3.showCrosshair && A3.showCrosshairValues, style: { ...e3.base.style, showGrid: A3.showGrid, backgroundColor: A3.backgroundColor, axes: { ...e3.base.style.axes, textColor: A3.textColor, numberFractionDigits: A3.fractionDigits, decimalSeparator: A3.decimalSeparator, thousandsSeparator: A3.thousandsSeparator, dateFormat: A3.dateFormat, locale: A3.locale, language: A3.language, currency: A3.currency, useCurrency: A3.useCurrency, currencyDisplay: A3.currencyDisplay, numberNotation: A3.numberNotation, tickSize: A3.tickSize, minimumFractionDigits: A3.minimumFractionDigits, maximumFractionDigits: A3.maximumFractionDigits, maximumSignificantDigits: A3.maximumSignificantDigits, autoPrecision: A3.autoPrecision, unit: A3.unit, unitPlacement: A3.unitPlacement }, candles: { ...e3.base.style.candles, bullColor: A3.bullColor, upColor: A3.bullColor, bearColor: A3.bearColor, downColor: A3.bearColor }, histogram: { ...e3.base.style.histogram, bullColor: A3.bullColor, bearColor: A3.bearColor }, bar: { ...e3.base.style.bar, bullColor: A3.bullColor, bearColor: A3.bearColor }, line: { ...e3.base.style.line, color: A3.lineColor }, drawings: { ...e3.base.style.drawings, lineColor: A3.drawingLineColor, lineWidth: A3.drawingLineWidth, lineStyle: A3.drawingLineStyle, fillColor: A3.drawingFillColor, selected: { ...e3.base.style.drawings.selected, lineColor: A3.drawingSelectedLineColor, lineStyle: A3.drawingSelectedLineStyle, lineWidthAdd: A3.drawingSelectedLineWidthAdd } } } } }));
  }, initialSettings: lA2, themeVariant: Z2, lockToolbarLayout: D2, contained: true }), jsxRuntimeExports.jsx(IQ, { isOpen: _2.isOpen, onClose: () => AA2((A3) => ({ ...A3, isOpen: false })), title: _2.title, message: _2.message, themeVariant: Z2 }), nA2 ? jsxRuntimeExports.jsx("div", { style: { position: "absolute", left: "50%", bottom: 16, transform: "translateX(-50%)", zIndex: 90, maxWidth: 560, borderRadius: 10, border: "1px solid rgba(245, 158, 11, 0.35)", background: Z2 === ft.dark ? "rgba(17, 24, 39, 0.95)" : "rgba(15, 23, 42, 0.92)", color: "#fbbf24", padding: "10px 12px", fontSize: 12, fontFamily: "system-ui, sans-serif", textAlign: "center", pointerEvents: "none" }, children: nA2 }) : null] })] })] });
}), no = reactExports.forwardRef((A2, e2) => jsxRuntimeExports.jsx(to, { ref: e2, productId: JQ.pulse, ...A2 })), ro = reactExports.forwardRef((A2, e2) => jsxRuntimeExports.jsx(to, { ref: e2, productId: JQ.flow, ...A2 })), io = reactExports.forwardRef((A2, e2) => jsxRuntimeExports.jsx(to, { ref: e2, productId: JQ.command, ...A2 })), ao = reactExports.forwardRef((A2, e2) => jsxRuntimeExports.jsx(to, { ref: e2, productId: JQ.desk, ...A2 })), Bo = reactExports.forwardRef((A2, e2) => jsxRuntimeExports.jsx(to, { ref: e2, productId: JQ.prime, ...A2 }));
no.displayName = "TickUpPulse", ro.displayName = "TickUpFlow", io.displayName = "TickUpCommand", ao.displayName = "TickUpDesk", Bo.displayName = "TickUpPrimeTier";
lt.div`
    display: flex !important;
    visibility: visible !important;
    opacity: 1 !important;
    align-items: center;
    justify-content: flex-end;
    flex-shrink: 0;
    gap: 8px;
    padding: 4px 8px 6px;
    min-height: 0;
    border-top: 1px solid
        ${({ $variant: A2 }) => A2 === ft.dark ? "rgba(240, 246, 252, 0.12)" : A2 === ft.grey ? "rgba(110, 118, 129, 0.4)" : "rgba(31, 35, 38, 0.12)"};
    background: ${({ $variant: A2 }) => A2 === ft.dark ? "rgba(1, 4, 9, 0.35)" : A2 === ft.grey ? "rgba(34, 39, 46, 0.55)" : "rgba(255, 255, 255, 0.65)"};
    backdrop-filter: blur(6px);
    box-sizing: border-box;
`; lt.span`
    display: inline !important;
    visibility: visible !important;
    opacity: 1 !important;
    font-size: 10px;
    line-height: 1.2;
    color: ${({ $variant: A2 }) => A2 === ft.dark || A2 === ft.grey ? "#8b949e" : "#656d76"};
    font-family: system-ui, -apple-system, Segoe UI, sans-serif;
    max-width: 200px;
    text-align: right;
`;

export { Bo as B, It as I, Nt as N, Pt as P, Vt as V, XQ as X, Yt as Y, __vitePreload as _, ao as a, rn as b, ft as f, io as i, no as n, ro as r, to as t, v, yt as y };
