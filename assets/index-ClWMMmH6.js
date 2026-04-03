import { r as reactExports, j as jsxRuntimeExports, c as clientExports } from './vendor-react-D0COmpux.js';
import { P as Pt, f as ft, _ as __vitePreload, Y as Yt, V as Vt, I as It, e as eo, y as yt, v, z as zQ, r as ro, a as ao, t as to, n as no, i as io, N as Nt, b as rn } from './vendor-tickup-core-BSg2uQ4S.js';
import { M as Moon, S as Sun, B as BookOpen, Z as Zap, L as Layers, P as Pencil, a as MousePointer2, T as TrendingUp, G as GitBranch, b as Magnet, E as Eraser, C as ChartCandlestick, c as ChartArea, d as ChartLine, F as Flame, e as Play, f as Pause, R as RefreshCw } from './vendor-lucide-BUwdCf2e.js';

true&&(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());

const LIVE_TICK_MS$1 = 450;
const LIVE_APPEND_EVERY = 5;
function simplePRNG$1(seed = 12345) {
  let s = seed >>> 0;
  const rand = () => (s = 1664525 * s + 1013904223 >>> 0) / 4294967295;
  return { rand };
}
function buildMockIntervals(params) {
  const {
    startTime,
    startPrice,
    intervalSec,
    count,
    seed = 12345,
    driftPerBar = 0.02,
    vol = 0.55
  } = params;
  const rng = simplePRNG$1(seed);
  const out = [];
  let t = startTime;
  let lastClose = startPrice;
  for (let i = 0; i < count; i++) {
    const o = lastClose;
    const noise = (rng.rand() - 0.5) * 2 * vol;
    const c = o + driftPerBar + noise;
    const wigUp = Math.abs((rng.rand() - 0.5) * 2) * (vol * 0.75 + 0.08);
    const wigDn = Math.abs((rng.rand() - 0.5) * 2) * (vol * 0.75 + 0.08);
    const h = Math.max(o, c) + wigUp;
    const l = Math.min(o, c) - wigDn;
    const v = Math.max(1, Math.round(800 + rng.rand() * 2200));
    out.push({
      t,
      o: +o.toFixed(4),
      h: +h.toFixed(4),
      l: +l.toFixed(4),
      c: +c.toFixed(4),
      v
    });
    lastClose = c;
    t += intervalSec;
  }
  return out;
}
function jitterLastBar$1(last, rngSeed = 999001) {
  const rng = simplePRNG$1((last.t ^ rngSeed) >>> 0);
  const delta = (rng.rand() - 0.5) * (Math.abs(last.c - last.o) * 0.35 + 0.08);
  const c = +(last.c + delta).toFixed(4);
  const h = +Math.max(last.h, c, last.o).toFixed(4);
  const l = +Math.min(last.l, c, last.o).toFixed(4);
  const baseV = last.v ?? 0;
  const v = Math.max(1, baseV + Math.round((rng.rand() - 0.35) * 180));
  return { ...last, c, h, l, v };
}
function appendBarAfter(last, intervalSec, rngSeed = 888777) {
  const rng = simplePRNG$1(last.t + intervalSec + rngSeed >>> 0);
  const o = last.c;
  const noise = (rng.rand() - 0.5) * 1.1;
  const c = +(o + noise * 0.12).toFixed(4);
  const wigUp = Math.abs((rng.rand() - 0.5) * 2) * 0.45;
  const wigDn = Math.abs((rng.rand() - 0.5) * 2) * 0.45;
  const h = +Math.max(o, c) + wigUp;
  const l = +Math.min(o, c) - wigDn;
  const v = Math.max(1, Math.round(900 + rng.rand() * 2e3));
  return {
    t: last.t + intervalSec,
    o: +o.toFixed(4),
    h: +h.toFixed(4),
    l: +l.toFixed(4),
    c: +c.toFixed(4),
    v
  };
}
function toHeikinAshi(regular) {
  if (!regular.length) {
    return [];
  }
  const out = [];
  let haOpen = (regular[0].o + regular[0].c) / 2;
  let haClose = (regular[0].o + regular[0].h + regular[0].l + regular[0].c) / 4;
  let haHigh = Math.max(regular[0].h, haOpen, haClose);
  let haLow = Math.min(regular[0].l, haOpen, haClose);
  out.push({
    t: regular[0].t,
    o: +haOpen.toFixed(4),
    h: +haHigh.toFixed(4),
    l: +haLow.toFixed(4),
    c: +haClose.toFixed(4),
    v: regular[0].v
  });
  for (let i = 1; i < regular.length; i++) {
    const r = regular[i];
    const prev = out[i - 1];
    const close = (r.o + r.h + r.l + r.c) / 4;
    const open = (prev.o + prev.c) / 2;
    const high = Math.max(r.h, open, close);
    const low = Math.min(r.l, open, close);
    out.push({
      t: r.t,
      o: +open.toFixed(4),
      h: +high.toFixed(4),
      l: +low.toFixed(4),
      c: +close.toFixed(4),
      v: r.v
    });
  }
  return out;
}
function advanceLiveSeries(series, intervalSec, tickCounter) {
  if (!series.length) {
    return series;
  }
  tickCounter.current += 1;
  const last = series[series.length - 1];
  if (tickCounter.current % LIVE_APPEND_EVERY !== 0) {
    return [...series.slice(0, -1), jitterLastBar$1(last)];
  }
  return [...series, appendBarAfter(last, intervalSec)];
}

const INTERVAL_SEC$1 = {
  "1m": 60,
  "5m": 300,
  "15m": 900,
  "1h": 3600,
  "1D": 86400,
  "1W": 7 * 86400
};
const SYMBOLS = ["TICKUP", "AAPL", "TSLA", "MSFT", "BTC-USD"];
const INTERVALS = ["1m", "5m", "15m", "1h", "1D", "1W"];
function normalizeSymbol(s) {
  const sym = String(s || "").trim().toUpperCase();
  return SYMBOLS.includes(sym) ? sym : null;
}
function seedFor(symbol, interval) {
  let h = 2166136261;
  const str = `${symbol}:${interval}`;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function startPriceFor(symbol) {
  switch (symbol) {
    case "BTC-USD":
      return 68e3;
    case "TSLA":
      return 190;
    case "AAPL":
      return 175;
    case "MSFT":
      return 410;
    case "TICKUP":
    default:
      return 128.5;
  }
}
function driftFor(symbol) {
  switch (symbol) {
    case "BTC-USD":
      return 3.5;
    case "TSLA":
      return 0.06;
    case "AAPL":
      return 0.03;
    case "MSFT":
      return 0.035;
    case "TICKUP":
    default:
      return 0.02;
  }
}
function volFor(symbol) {
  switch (symbol) {
    case "BTC-USD":
      return 120;
    case "TSLA":
      return 1.2;
    case "AAPL":
      return 0.8;
    case "MSFT":
      return 0.9;
    case "TICKUP":
    default:
      return 0.55;
  }
}
function isFiniteIntervalBar(it) {
  return Number.isFinite(it.t) && Number.isFinite(it.o) && Number.isFinite(it.h) && Number.isFinite(it.l) && Number.isFinite(it.c) && (it.v === void 0 || Number.isFinite(it.v));
}
class DemoMarketDataService {
  symbols = SYMBOLS;
  intervals = INTERVALS;
  intervalSecByKey = INTERVAL_SEC$1;
  /**
   * Fetch synthetic history (yfinance-like).
   * This is async to mimic real APIs; it is deterministic per (symbol, interval, count, endTimeSec).
   */
  async history(params) {
    const symbol = normalizeSymbol(params.symbol);
    if (!symbol) {
      throw new Error(`Unknown demo symbol: ${params.symbol}`);
    }
    const interval = params.interval;
    const intervalSec = INTERVAL_SEC$1[interval];
    const count = Math.max(2, Math.floor(params.count || 0));
    const endTimeSec = Math.floor(params.endTimeSec ?? 17e8);
    const startTime = endTimeSec - intervalSec * count;
    const intervals = buildMockIntervals({
      startTime,
      startPrice: startPriceFor(symbol),
      intervalSec,
      count,
      seed: seedFor(symbol, interval) ^ endTimeSec,
      driftPerBar: driftFor(symbol),
      vol: volFor(symbol)
    });
    const finiteIntervals = intervals.filter(isFiniteIntervalBar);
    if (!finiteIntervals.length) {
      throw new Error(`Demo history produced invalid values for ${symbol} ${interval}.`);
    }
    return { symbol, interval, intervalSec, intervals: finiteIntervals };
  }
  /**
   * Subscribe to synthetic live updates (merge/append).
   * Caller owns the current series state; `onUpdate` receives the next series array.
   */
  subscribeLive(opts) {
    const { interval } = opts;
    const intervalSec = INTERVAL_SEC$1[interval];
    const tickCounter = { current: 0 };
    const id = window.setInterval(() => {
      const cur = opts.getCurrent();
      const next = advanceLiveSeries(cur, intervalSec, tickCounter);
      opts.onUpdate(next);
    }, Math.max(120, opts.tickMs));
    return {
      stop: () => window.clearInterval(id)
    };
  }
}
const demoMarketData = new DemoMarketDataService();

const DOCS_HUB_URL = "https://github.com/BARDAMRI/tickup-charts/blob/main/documentation/README.md";
const DOCS_TREE_URL = "https://github.com/BARDAMRI/tickup-charts/tree/main/documentation";
function usePrefersColorSchemeDark() {
  const [dark, setDark] = reactExports.useState(
    () => typeof window !== "undefined" ? window.matchMedia("(prefers-color-scheme: dark)").matches : false
  );
  reactExports.useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setDark(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return dark;
}
const MAX_DEMO_HISTORY_BARS = 2e5;
const DEMO_RANGES = ["20m", "6h", "7d", "6mo", "2y"];
const CHART_KIND_TO_TYPE = {
  candle: Pt.Candlestick,
  area: Pt.Area,
  line: Pt.Line,
  /** Heikin-Ashi values are OHLC candles; native type is still candlestick. */
  heikin: Pt.Candlestick
};
const demoStandardLightEngine = {
  id: "demo-standard-light",
  getChartOptionsPatch: () => ({
    base: {
      engine: Vt.standard,
      theme: ft.light,
      style: {
        backgroundColor: "#ffffff",
        showGrid: true,
        grid: {
          lineColor: "rgba(15, 23, 42, 0.09)",
          lineWidth: 1,
          gridSpacing: 56,
          lineDash: [],
          color: "rgba(15, 23, 42, 0.09)"
        },
        axes: {
          textColor: "#1e293b",
          lineColor: "rgba(15, 23, 42, 0.14)",
          font: "12px Inter, system-ui, sans-serif"
        },
        candles: {
          bullColor: "#059669",
          bearColor: "#dc2626",
          upColor: "#059669",
          downColor: "#dc2626",
          borderColor: "rgba(15, 23, 42, 0.22)",
          borderWidth: 1,
          bodyWidthFactor: 0.62,
          spacingFactor: 0.18
        },
        histogram: {
          bullColor: "rgba(5, 150, 105, 0.45)",
          bearColor: "rgba(220, 38, 38, 0.45)",
          opacity: 0.55,
          heightRatio: 0.24
        },
        bar: {
          bullColor: "#059669",
          bearColor: "#dc2626",
          opacity: 0.88
        },
        line: { color: "#2563eb", lineWidth: 2 },
        area: {
          fillColor: "rgba(37, 99, 235, 0.12)",
          strokeColor: "#2563eb",
          lineWidth: 2
        }
      }
    }
  })
};
const demoStandardDarkEngine = {
  id: "demo-standard-dark",
  getChartOptionsPatch: () => ({
    base: {
      engine: Vt.standard,
      theme: ft.dark,
      style: {
        backgroundColor: "#0b0e14",
        showGrid: true,
        grid: {
          lineColor: "rgba(255,255,255,0.07)",
          lineWidth: 1,
          gridSpacing: 56,
          lineDash: [],
          color: "rgba(255,255,255,0.07)"
        },
        axes: {
          textColor: "#9ca3af",
          lineColor: "rgba(255,255,255,0.12)",
          font: "12px Inter, system-ui, sans-serif"
        },
        candles: {
          bullColor: "#34d399",
          bearColor: "#f87171",
          upColor: "#34d399",
          downColor: "#f87171",
          borderColor: "rgba(255,255,255,0.2)",
          borderWidth: 1,
          bodyWidthFactor: 0.62,
          spacingFactor: 0.18
        },
        histogram: {
          bullColor: "rgba(52, 211, 153, 0.5)",
          bearColor: "rgba(248, 113, 113, 0.5)",
          opacity: 0.5,
          heightRatio: 0.24
        },
        bar: {
          bullColor: "#34d399",
          bearColor: "#f87171",
          opacity: 0.85
        },
        line: { color: "#60a5fa", lineWidth: 2 },
        area: {
          fillColor: "rgba(96, 165, 250, 0.15)",
          strokeColor: "#60a5fa",
          lineWidth: 2
        }
      }
    }
  })
};
const HOST_TO_DEMO_RANGE = {
  "1D": "6h",
  "1W": "7d",
  "5D": "7d",
  "1M": "7d",
  "3M": "6mo",
  "6M": "6mo",
  "YTD": "6mo",
  "1Y": "2y",
  "5Y": "2y",
  "All": "2y"
};
const DEMO_TO_HOST_RANGE = {
  "20m": "1D",
  "6h": "1D",
  "7d": "5D",
  "6mo": "6M",
  "2y": "1Y"
};
function isThenable(v) {
  return v != null && typeof v.then === "function";
}
function rangeSecondsFor(r) {
  switch (r) {
    case "20m":
      return 20 * 60;
    case "6h":
      return 6 * 3600;
    case "7d":
      return 7 * 86400;
    case "6mo":
      return 180 * 86400;
    case "2y":
      return 2 * 365 * 86400;
    default:
      return 7 * 86400;
  }
}
function TickUpDemo({ onOpenCompare, onIntervalFeedRequest, onRangeFeedRequest }) {
  const chartRef = reactExports.useRef(null);
  const [themePreference, setThemePreference] = reactExports.useState("system");
  const systemPrefersDark = usePrefersColorSchemeDark();
  const shellTheme = reactExports.useMemo(() => {
    if (themePreference === "system") {
      return systemPrefersDark ? ft.dark : ft.light;
    }
    return themePreference;
  }, [themePreference, systemPrefersDark]);
  const [timeframe, setTimeframe] = reactExports.useState("5m");
  const [range, setRange] = reactExports.useState("7d");
  const [chartKind, setChartKind] = reactExports.useState("candle");
  const [primeMode, setPrimeMode] = reactExports.useState(false);
  const [showTickPreviews, setShowTickPreviews] = reactExports.useState(true);
  const [symbol, setSymbol] = reactExports.useState("TICKUP");
  const [symbolDraft, setSymbolDraft] = reactExports.useState("TICKUP");
  const [emaOn, setEmaOn] = reactExports.useState(true);
  const [toast, setToast] = reactExports.useState(null);
  const [activeTool, setActiveTool] = reactExports.useState("cursor");
  const [liveTrading, setLiveTrading] = reactExports.useState(true);
  const [primeBridge, setPrimeBridge] = reactExports.useState(null);
  const [primeOfferOpen, setPrimeOfferOpen] = reactExports.useState(false);
  const toastTimerRef = reactExports.useRef(null);
  const showToastNow = reactExports.useCallback((message, timeoutMs = 4200) => {
    setToast(message);
    if (toastTimerRef.current != null) {
      window.clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = window.setTimeout(() => {
      setToast(null);
      toastTimerRef.current = null;
    }, timeoutMs);
  }, []);
  reactExports.useEffect(() => () => {
    if (toastTimerRef.current != null) {
      window.clearTimeout(toastTimerRef.current);
    }
  }, []);
  reactExports.useEffect(() => {
    const enabled = String("1") === "1";
    if (!enabled) return;
    __vitePreload(() => import('./index-BzPwDpPe.js'),true?[]:void 0).then((m) => {
      if (m?.createTickUpPrimeEngine && m?.getTickUpPrimeThemePatch) {
        setPrimeBridge({
          createTickUpPrimeEngine: m.createTickUpPrimeEngine,
          getTickUpPrimeThemePatch: m.getTickUpPrimeThemePatch
        });
        showToastNow("Prime package detected. Turbo Mode is available.", 2600);
      }
    }).catch(() => {
    });
  }, [showToastNow]);
  const normalizeIntervalKey = reactExports.useCallback((rawTf) => {
    const clean = rawTf.trim();
    const match = demoMarketData.intervals.find((k) => k.toLowerCase() === clean.toLowerCase());
    return match ?? null;
  }, []);
  const intervalRank = reactExports.useMemo(() => {
    const out = /* @__PURE__ */ new Map();
    demoMarketData.intervals.forEach((k, i) => out.set(k, i));
    return out;
  }, []);
  const estimateRawBarCount = reactExports.useCallback(
    (r, tf) => {
      if (primeMode) {
        return 1e5;
      }
      const intervalSec2 = demoMarketData.intervalSecByKey[tf];
      const barsForRange2 = Math.max(1, Math.round(rangeSecondsFor(r) / Math.max(intervalSec2, 1)));
      return Math.max(1500, barsForRange2 * 4);
    },
    [primeMode]
  );
  const isSafeCombo = reactExports.useCallback(
    (r, tf) => estimateRawBarCount(r, tf) <= MAX_DEMO_HISTORY_BARS,
    [estimateRawBarCount]
  );
  const findSafeIntervalForRange = reactExports.useCallback(
    (r, fromTf) => {
      const currentIdx = intervalRank.get(fromTf) ?? 0;
      for (let i = currentIdx; i < demoMarketData.intervals.length; i++) {
        const candidate = demoMarketData.intervals[i];
        if (isSafeCombo(r, candidate)) {
          return candidate;
        }
      }
      return null;
    },
    [intervalRank, isSafeCombo]
  );
  const findFallbackRangeForInterval = reactExports.useCallback(
    (tf, fromRange) => {
      const startIdx = DEMO_RANGES.indexOf(fromRange);
      for (let i = startIdx; i >= 0; i--) {
        const candidate = DEMO_RANGES[i];
        if (isSafeCombo(candidate, tf)) {
          return candidate;
        }
      }
      return null;
    },
    [isSafeCombo]
  );
  const requestIntervalSwitch = reactExports.useCallback(
    (rawTf, source) => {
      const nextTf = normalizeIntervalKey(rawTf);
      if (!nextTf) {
        showToastNow(`Unsupported interval "${rawTf}". Available: ${demoMarketData.intervals.join(", ")}.`);
        return false;
      }
      if (nextTf === timeframe) {
        return true;
      }
      if (!primeMode && !isSafeCombo(range, nextTf)) {
        const fallbackRange = findFallbackRangeForInterval(nextTf, range);
        if (!fallbackRange) {
          showToastNow(`Interval "${nextTf}" is blocked for current safety limits. Choose a coarser interval.`);
          return false;
        }
        showToastNow(`Interval "${nextTf}" requires a shorter range. Auto-switched range to "${fallbackRange}".`, 3e3);
        setRange(fallbackRange);
      }
      const apply = () => {
        setTimeframe(nextTf);
        return true;
      };
      if (!onIntervalFeedRequest) {
        if (source !== "ui") {
          showToastNow("No external interval data-feed handler is bound. Using the built-in demo feed.");
        }
        return apply();
      }
      try {
        const outcome = onIntervalFeedRequest(nextTf);
        if (isThenable(outcome)) {
          return outcome.then(
            (ok) => {
              if (ok === false) {
                showToastNow(`Interval "${nextTf}" was rejected by the data-feed handler.`);
                return false;
              }
              return apply();
            },
            (err) => {
              const msg = typeof err === "string" ? err : err?.message || `Failed to load interval "${nextTf}".`;
              showToastNow(msg);
              return false;
            }
          );
        }
        if (outcome === false) {
          showToastNow(`Interval "${nextTf}" was rejected by the data-feed handler.`);
          return false;
        }
        return apply();
      } catch (err) {
        const msg = typeof err === "string" ? err : err?.message || `Failed to load interval "${nextTf}".`;
        showToastNow(msg);
        return false;
      }
    },
    [normalizeIntervalKey, onIntervalFeedRequest, showToastNow, timeframe, range, primeMode, isSafeCombo, findFallbackRangeForInterval]
  );
  const requestRangeSwitch = reactExports.useCallback(
    (nextRange, source) => {
      if (nextRange === range) {
        return true;
      }
      if (!primeMode && !isSafeCombo(nextRange, timeframe)) {
        const safeInterval = findSafeIntervalForRange(nextRange, timeframe);
        if (!safeInterval) {
          showToastNow(`Range "${nextRange}" is unavailable for current limits. Pick a shorter range.`, 3200);
          return false;
        }
        const switched = requestIntervalSwitch(safeInterval, "api");
        if (isThenable(switched)) {
          return switched.then((ok) => {
            if (!ok) return false;
            showToastNow(`Auto-switched interval to "${safeInterval}" for "${nextRange}" range.`, 3e3);
            setRange(nextRange);
            return true;
          });
        }
        if (!switched) return false;
        showToastNow(`Auto-switched interval to "${safeInterval}" for "${nextRange}" range.`, 3e3);
        setRange(nextRange);
        return true;
      }
      const apply = () => {
        setRange(nextRange);
        return true;
      };
      if (!onRangeFeedRequest) {
        if (source !== "ui") {
          showToastNow("No external range data-feed handler is bound. Using the built-in demo feed.");
        }
        return apply();
      }
      try {
        const outcome = onRangeFeedRequest(nextRange);
        if (isThenable(outcome)) {
          return outcome.then(
            (ok) => {
              if (ok === false) {
                showToastNow(`Range "${nextRange}" was rejected by the data-feed handler.`);
                return false;
              }
              return apply();
            },
            (err) => {
              const msg = typeof err === "string" ? err : err?.message || `Failed to load range "${nextRange}".`;
              showToastNow(msg);
              return false;
            }
          );
        }
        if (outcome === false) {
          showToastNow(`Range "${nextRange}" was rejected by the data-feed handler.`);
          return false;
        }
        return apply();
      } catch (err) {
        const msg = typeof err === "string" ? err : err?.message || `Failed to load range "${nextRange}".`;
        showToastNow(msg);
        return false;
      }
    },
    [onRangeFeedRequest, showToastNow, range, primeMode, isSafeCombo, timeframe, findSafeIntervalForRange, requestIntervalSwitch]
  );
  const intervalSec = demoMarketData.intervalSecByKey[timeframe];
  const barsForRange = reactExports.useMemo(() => {
    switch (range) {
      case "20m":
        return Math.max(30, Math.round(20 * 60 / intervalSec));
      case "6h":
        return Math.max(60, Math.round(6 * 3600 / intervalSec));
      case "7d":
        return Math.max(120, Math.round(7 * 86400 / intervalSec));
      case "6mo":
        return Math.max(180, Math.round(180 * 86400 / intervalSec));
      case "2y":
        return Math.max(260, Math.round(2 * 365 * 86400 / intervalSec));
      default:
        return 300;
    }
  }, [range, intervalSec]);
  const rawBarCount = primeMode ? 1e5 : Math.max(1500, barsForRange * 4);
  const barCount = Math.min(MAX_DEMO_HISTORY_BARS, rawBarCount);
  const layoutResetKey = `${symbol}-${timeframe}-${range}-${primeMode}-${barCount}-${chartKind}`;
  const hostKey = layoutResetKey;
  const lastLayoutKeyRef = reactExports.useRef(null);
  const [baseIntervals, setBaseIntervals] = reactExports.useState([]);
  const baseIntervalsRef = reactExports.useRef([]);
  reactExports.useEffect(() => {
    baseIntervalsRef.current = baseIntervals;
  }, [baseIntervals]);
  reactExports.useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        if (rawBarCount > MAX_DEMO_HISTORY_BARS) {
          showToastNow(
            `Range ${range} at ${timeframe} is capped to ${MAX_DEMO_HISTORY_BARS.toLocaleString()} bars for stable rendering.`,
            2800
          );
        }
        const res = await demoMarketData.history({
          symbol,
          interval: timeframe,
          count: barCount,
          endTimeSec: 17e8
        });
        if (cancelled) return;
        setBaseIntervals(res.intervals);
      } catch (e) {
        if (cancelled) return;
        showToastNow(String(e?.message ?? e));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [symbol, timeframe, range, rawBarCount, barCount, showToastNow]);
  reactExports.useEffect(() => {
    if (!liveTrading) return;
    const sub = demoMarketData.subscribeLive({
      symbol,
      interval: timeframe,
      tickMs: LIVE_TICK_MS$1,
      getCurrent: () => baseIntervalsRef.current,
      onUpdate: (next) => setBaseIntervals(next)
    });
    return () => sub.stop();
  }, [liveTrading, symbol, timeframe]);
  const displayIntervals = reactExports.useMemo(
    () => chartKind === "heikin" ? toHeikinAshi(baseIntervals) : baseIntervals,
    [baseIntervals, chartKind]
  );
  const initialVisibleTimeRange = reactExports.useMemo(() => {
    if (!displayIntervals.length) {
      return { start: 0, end: 1 };
    }
    const last = displayIntervals[displayIntervals.length - 1];
    return { start: displayIntervals[0].t, end: last.t + intervalSec };
  }, [displayIntervals, intervalSec]);
  const overlayKinds = reactExports.useMemo(() => {
    const list = [];
    if (emaOn) {
      list.push({ kind: Yt.ema, period: 21 });
    }
    return list;
  }, [emaOn]);
  const primeEngineForShell = reactExports.useMemo(
    () => primeBridge ? primeBridge.createTickUpPrimeEngine(shellTheme) : null,
    [primeBridge, shellTheme]
  );
  const chartOptions = reactExports.useMemo(() => {
    const patch = primeMode && primeBridge ? primeBridge.getTickUpPrimeThemePatch(shellTheme) : (shellTheme === ft.dark ? demoStandardDarkEngine : demoStandardLightEngine).getChartOptionsPatch();
    const b = patch.base ?? {};
    const st = b.style ?? {};
    const ax = st.axes ?? {};
    const effectiveLocale = navigator?.language || "en-US";
    const locale = typeof effectiveLocale === "string" ? effectiveLocale : "en-US";
    const language = locale.split("-")[0] || "en";
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return {
      base: {
        ...b,
        engine: primeMode ? Vt.prime : Vt.standard,
        theme: shellTheme,
        chartType: CHART_KIND_TO_TYPE[chartKind],
        showHistogram: true,
        showOverlayLine: overlayKinds.length > 0,
        overlayKinds,
        showCrosshair: true,
        showCrosshairValues: true,
        showCandleTooltip: true,
        style: {
          ...st,
          axes: {
            ...ax,
            timezone,
            locale,
            language,
            dateFormat: ax.dateFormat ?? "MMM d"
          }
        }
      },
      axes: {
        yAxisPosition: It.right,
        numberOfYTicks: 8
      }
    };
  }, [overlayKinds, chartKind, shellTheme, primeMode, primeBridge]);
  reactExports.useLayoutEffect(() => {
    let raf = 0;
    raf = requestAnimationFrame(() => {
      const r = chartRef.current;
      if (!r?.setEngine) {
        return;
      }
      if (primeMode && primeEngineForShell) {
        r.setEngine(primeEngineForShell);
      } else if (shellTheme === "dark") {
        r.setEngine(demoStandardDarkEngine);
      } else {
        r.setEngine(demoStandardLightEngine);
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [primeMode, hostKey, shellTheme, primeEngineForShell]);
  reactExports.useEffect(() => {
    const id = requestAnimationFrame(() => {
      const ref = chartRef.current;
      if (!ref) return;
      if (lastLayoutKeyRef.current !== layoutResetKey) {
        lastLayoutKeyRef.current = layoutResetKey;
        ref.fitVisibleRangeToData?.();
      }
    });
    return () => cancelAnimationFrame(id);
  }, [layoutResetKey]);
  const [tickPreviewCards, setTickPreviewCards] = reactExports.useState([]);
  reactExports.useEffect(() => {
    let cancelled = false;
    (async () => {
      const cards = [
        { label: "20m window · 1m bars", intervalKey: "1m", count: 900, visibleBars: 20 },
        { label: "6h window · 5m bars", intervalKey: "5m", count: 1400, visibleBars: 72 },
        { label: "7d window · 1h bars", intervalKey: "1h", count: 1400, visibleBars: 7 * 24 },
        { label: "6mo window · 1d bars", intervalKey: "1D", count: 800, visibleBars: 180 },
        { label: "2y window · 1w bars", intervalKey: "1W", count: 520, visibleBars: 104 }
      ];
      const out = [];
      for (const c of cards) {
        const res = await demoMarketData.history({
          symbol,
          interval: c.intervalKey,
          count: c.count,
          endTimeSec: 17e8
        });
        const s = res.intervals;
        const end = s[s.length - 1]?.t ?? 17e8;
        const start = end - Math.max(res.intervalSec, 1) * c.visibleBars;
        out.push({
          label: c.label,
          intervalKey: c.intervalKey,
          intervalSec: res.intervalSec,
          intervals: s,
          visible: { start, end: end + res.intervalSec }
        });
      }
      if (cancelled) return;
      setTickPreviewCards(out);
    })();
    return () => {
      cancelled = true;
    };
  }, [symbol]);
  const showFibComingSoon = reactExports.useCallback(() => {
    showToastNow("Fibonacci retracement is on the Pro roadmap — see documentation/15.");
  }, [showToastNow]);
  const setModeSafe = reactExports.useCallback((mode) => {
    chartRef.current?.setInteractionMode?.(mode);
  }, []);
  const onToolPencil = () => {
    setActiveTool("pencil");
    setModeSafe(v.drawLine);
  };
  const onToolCursor = () => {
    setActiveTool("cursor");
    setModeSafe(v.select);
  };
  const onToolLine = () => {
    setActiveTool("line");
    setModeSafe(v.drawLine);
  };
  const onToolRay = () => {
    setActiveTool("ray");
    setModeSafe(v.drawLine);
  };
  const onToolFib = () => {
    setActiveTool("fib");
    showFibComingSoon();
    setModeSafe(v.none);
  };
  const onToolEraser = () => {
    chartRef.current?.deleteSelectedDrawing?.();
    showToastNow("Eraser: removes the selected drawing (select a shape first).", 2800);
  };
  const chartTypeButtons = [
    { key: "candle", label: "Candle", Icon: ChartCandlestick },
    { key: "area", label: "Area", Icon: ChartArea },
    { key: "line", label: "Line", Icon: ChartLine },
    { key: "heikin", label: "Heikin", Icon: Flame }
  ];
  const isPageDark = shellTheme === ft.dark;
  const panelGlass = isPageDark ? "glass-panel" : "glass-panel-light";
  const themeAfterQuickClick = shellTheme === ft.light ? ft.dark : ft.light;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `min-h-screen overflow-y-auto font-sans ${isPageDark ? "bg-[#0B0E14] text-[#E7EBFF]" : "bg-[#f1f5f9] text-slate-800"}`,
      style: { colorScheme: isPageDark ? "dark" : "light" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "header",
          {
            className: `sticky top-0 z-40 flex min-h-[5.5rem] shrink-0 items-center justify-between gap-3 border-b px-4 py-2.5 backdrop-blur-md md:min-h-[5.75rem] md:px-6 md:py-3 ${isPageDark ? "border-white/10 bg-[#0B0E14]/92" : "border-slate-200/90 bg-[#f8fafc]/95"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: DOCS_HUB_URL,
                  className: "flex min-w-0 items-center gap-2 py-0.5",
                  target: "_blank",
                  rel: "noreferrer",
                  "aria-label": "Open documentation",
                  title: "Open docs",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-base font-extrabold tracking-tight ${isPageDark ? "text-white" : "text-slate-900"}`, children: [
                      "TickUp ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#3EC5FF]", children: "Charts" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `${isPageDark ? "text-slate-500" : "text-slate-500"} hidden text-xs font-semibold uppercase tracking-wider sm:inline`, children: "Tick demo · Prime Pro/Luxury" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 flex-wrap items-center justify-end gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `flex rounded-lg border p-0.5 text-[10px] font-semibold uppercase tracking-wide ${isPageDark ? "border-white/15 bg-black/30" : "border-slate-300 bg-white/90"}`,
                    role: "group",
                    "aria-label": "Page and chart theme",
                    children: ["system", ft.light, ft.dark].map((pref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "aria-pressed": themePreference === pref,
                        onClick: () => setThemePreference(pref),
                        className: `rounded-md px-2 py-1 transition-colors ${themePreference === pref ? isPageDark ? "bg-white/18 text-white shadow-sm" : "bg-slate-200 text-slate-900 shadow-sm" : isPageDark ? "text-slate-400 hover:text-slate-200" : "text-slate-600 hover:text-slate-900"}`,
                        children: pref === "system" ? "System" : pref === "light" ? "Light" : "Dark"
                      },
                      pref
                    ))
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    title: `After click: ${themeAfterQuickClick} theme`,
                    "aria-label": `Switch to ${themeAfterQuickClick} theme`,
                    onClick: () => setThemePreference(themeAfterQuickClick),
                    className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${isPageDark ? "border-white/15 text-slate-200 hover:border-[#3EC5FF]/40 hover:text-white" : "border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-900"}`,
                    children: shellTheme === ft.light ? /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4", "aria-hidden": true }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4", "aria-hidden": true })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: DOCS_HUB_URL,
                    target: "_blank",
                    rel: "noreferrer",
                    className: `inline-flex shrink-0 items-center gap-1 rounded-lg border px-2 py-1.5 text-[11px] font-medium transition-colors sm:px-2.5 sm:text-xs ${isPageDark ? "border-white/10 text-slate-200 hover:border-[#3EC5FF]/45" : "border-slate-300 text-slate-700 hover:border-[#3EC5FF]/50"}`,
                    title: "TickUp Charts documentation (quick start, API, Prime, live data)",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-3.5 w-3.5 shrink-0 text-[#3EC5FF]", "aria-hidden": true }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Docs" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Documentation" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      if (!primeBridge) {
                        setPrimeOfferOpen(true);
                        return;
                      }
                      setPrimeMode((p) => !p);
                    },
                    className: `flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-all md:text-xs ${primeMode ? "border-[#3EC5FF] bg-[#5A48DE] text-white" : isPageDark ? "border-white/15 text-slate-300 hover:border-white/25" : "border-slate-300 text-slate-700 hover:border-slate-400"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5", fill: primeMode ? "currentColor" : "none" }),
                      "Turbo Mode"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowTickPreviews((v) => !v),
                    className: `flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-all md:text-xs ${showTickPreviews ? "border-[#3EC5FF]/60 bg-[#3EC5FF]/10 text-[#3EC5FF]" : isPageDark ? "border-white/15 text-slate-300 hover:border-white/25" : "border-slate-300 text-slate-700 hover:border-slate-400"}`,
                    "aria-pressed": showTickPreviews,
                    title: showTickPreviews ? "Hide tick preview charts" : "Show tick preview charts",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-3.5 w-3.5", "aria-hidden": true }),
                      "Ticks"
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: `mx-auto max-w-3xl space-y-4 border-b px-4 py-8 text-sm leading-relaxed md:px-8 md:text-[15px] md:leading-7 ${isPageDark ? "border-white/5 text-slate-400" : "border-slate-200 text-slate-600"}`,
            "aria-labelledby": "tickup-playground-about",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  id: "tickup-playground-about",
                  className: `text-lg font-semibold tracking-tight md:text-xl ${isPageDark ? "text-white" : "text-slate-900"}`,
                  children: "Canvas-built charts for serious market analysis"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: isPageDark ? "font-medium text-slate-200" : "font-medium text-slate-800", children: "TickUp Charts" }),
                " ",
                "ships two entry points so you only pull what you need: the default",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: isPageDark ? "text-slate-300" : "rounded bg-slate-200/80 px-1 text-slate-800", children: "tickup" }),
                " ",
                "package for the stage, types, and live-data utilities, and",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: isPageDark ? "text-slate-300" : "rounded bg-slate-200/80 px-1 text-slate-800", children: "tickup/full" }),
                " ",
                "when you want Pulse, Flow, Command, Desk, drawing tools, settings, CSV/PNG export, and product-ready chrome."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: DOCS_HUB_URL,
                    target: "_blank",
                    rel: "noreferrer",
                    className: `inline-flex items-center gap-1 font-medium underline decoration-[#3EC5FF]/50 underline-offset-2 transition-colors hover:decoration-[#3EC5FF] ${isPageDark ? "text-[#7dd3fc]" : "text-[#0369a1]"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4 shrink-0 opacity-90", "aria-hidden": true }),
                      "Full documentation"
                    ]
                  }
                ),
                " ",
                "— quick start, props, imperative API, Prime engine, live data, and more. Browse the",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: DOCS_TREE_URL,
                    target: "_blank",
                    rel: "noreferrer",
                    className: `font-medium underline decoration-slate-400/40 underline-offset-2 hover:decoration-[#3EC5FF] ${isPageDark ? "text-slate-300" : "text-slate-700"}`,
                    children: "documentation folder"
                  }
                ),
                " ",
                "on GitHub for individual guides."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "The renderer is",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: isPageDark ? "font-medium text-slate-200" : "font-medium text-slate-800", children: "HTML5 Canvas 2D" }),
                " ",
                "end-to-end for pan, zoom, and streaming OHLCV — with merge-by-time helpers so ticks update the forming bar without rebuilding the series. Host props include",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: isPageDark ? "text-slate-300" : "rounded bg-slate-200/80 px-1 text-slate-800", children: "defaultThemeVariant" }),
                " ",
                "and",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: isPageDark ? "text-slate-300" : "rounded bg-slate-200/80 px-1 text-slate-800", children: "themeVariant" }),
                " ",
                "for initial and controlled shell light/dark, not only the in-app toolbar toggle."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "Toggle ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: isPageDark ? "font-medium text-slate-200" : "font-medium text-slate-800", children: "Prime Pro/Luxury" }),
                " ",
                "to compare the neon engine and glass toolbars. This page defaults to",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: isPageDark ? "font-medium text-slate-200" : "font-medium text-slate-800", children: "light" }),
                " ",
                "for crisp axes and symbol labels; use the sun/moon control for dark mode."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "The interactive ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: isPageDark ? "font-medium text-slate-200" : "font-medium text-slate-800", children: "lock/unlock license flow" }),
                " ",
                "is a Prime-only capability and is demonstrated in the Prime tier card in the main tier showcase."
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex flex-col border-t lg:min-h-[min(88vh,56rem)] lg:flex-row ${isPageDark ? "border-white/10" : "border-slate-200"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "aside",
                {
                  className: `${panelGlass} flex w-full shrink-0 flex-row items-center justify-center gap-1 border-b py-2 lg:w-14 lg:flex-col lg:justify-start lg:border-b-0 lg:border-r lg:py-6 lg:pl-1 lg:pr-0 ${isPageDark ? "border-white/10" : "border-slate-200"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ToolRailBtn, { isDark: isPageDark, active: activeTool === "pencil", label: "Trend line (pencil)", onClick: onToolPencil, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-5 w-5" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ToolRailBtn, { isDark: isPageDark, active: activeTool === "cursor", label: "Select", onClick: onToolCursor, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MousePointer2, { className: "h-5 w-5" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ToolRailBtn, { isDark: isPageDark, active: activeTool === "line", label: "Trend line", onClick: onToolLine, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ToolRailBtn, { isDark: isPageDark, active: activeTool === "fib", label: "Fibonacci", onClick: onToolFib, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GitBranch, { className: "h-5 w-5" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ToolRailBtn, { isDark: isPageDark, active: activeTool === "ray", label: "Ray (line tool)", onClick: onToolRay, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-5 w-5" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        ToolRailBtn,
                        {
                          isDark: isPageDark,
                          active: false,
                          label: "Magnet Snapping is a Prime-only feature. Upgrade to enable.",
                          onClick: () => void 0,
                          disabled: true,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Magnet, { className: "h-5 w-5" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `pointer-events-none absolute left-14 top-1/2 z-40 hidden w-56 -translate-y-1/2 rounded-lg border px-2 py-1.5 text-[10px] group-hover:block ${isPageDark ? "border-[#3EC5FF]/35 bg-[#0a1422] text-slate-200" : "border-slate-300 bg-white text-slate-700"}`, children: [
                        "Magnet Snapping is a Prime-only feature.",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => setPrimeOfferOpen(true),
                            className: "pointer-events-auto ml-1 font-semibold text-[#3EC5FF] underline",
                            children: "Upgrade Now"
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ToolRailBtn, { isDark: isPageDark, active: false, label: "Eraser", onClick: onToolEraser, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eraser, { className: "h-5 w-5" }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-0 min-w-0 flex-1 flex-col", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `flex flex-col gap-2 border-b px-3 py-2 sm:flex-row sm:items-center sm:justify-between md:px-4 ${isPageDark ? "border-white/10" : "border-slate-200"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: `flex flex-wrap gap-1 rounded-lg border p-1 ${isPageDark ? "border-white/10 bg-white/[0.03]" : "border-slate-200 bg-white/80"}`,
                          children: chartTypeButtons.map(({ key, label, Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "button",
                            {
                              type: "button",
                              onClick: () => setChartKind(key),
                              className: `flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[11px] font-semibold capitalize md:px-3 md:text-xs ${chartKind === key ? "bg-[#3EC5FF] text-black" : "text-slate-400 hover:bg-white/10 hover:text-white"}`,
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5 opacity-80" }),
                                label
                              ]
                            },
                            key
                          ))
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-wrap gap-1", "aria-label": "Timeframe", children: demoMarketData.intervals.map((tf) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            void requestIntervalSwitch(tf, "ui");
                          },
                          className: `rounded-md px-2 py-1 font-mono text-[10px] font-medium md:text-xs ${timeframe === tf ? "bg-[#5A48DE]/40 text-violet-200 ring-1 ring-[#3EC5FF]/35" : "text-slate-500 hover:bg-white/10 hover:text-slate-300"}`,
                          children: tf
                        },
                        tf
                      )) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-0 flex-1 flex-col lg:flex-row", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-[min(70vh,40rem)] w-full min-w-0 flex-1 p-2 md:min-h-[min(75vh,44rem)] md:p-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `relative h-[min(75vh,48rem)] min-h-[22rem] w-full overflow-hidden rounded-xl border ${isPageDark ? "border-white/10 bg-[#06080d]" : "border-slate-200 bg-white"}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          eo,
                          {
                            ref: chartRef,
                            themeVariant: shellTheme,
                            onThemeVariantChange: setThemePreference,
                            intervalsArray: displayIntervals,
                            chartOptions,
                            showSidebar: false,
                            showTopBar: false,
                            showSettingsBar: true,
                            showAttribution: false,
                            initialTimeDetailLevel: yt.Medium,
                            initialNumberOfYTicks: 8,
                            initialVisibleTimeRange,
                            interval: timeframe,
                            onIntervalSearch: (tf) => requestIntervalSwitch(tf, "chart"),
                            onIntervalChange: (tf) => {
                              void requestIntervalSwitch(tf, "api");
                            },
                            range: DEMO_TO_HOST_RANGE[range],
                            onRangeChange: (rk) => {
                              const mapped = HOST_TO_DEMO_RANGE[String(rk)];
                              if (!mapped) {
                                showToastNow(`Range "${String(rk)}" is not mapped in this demo. Supported demo ranges: 20m, 6h, 7d, 6mo, 2y.`);
                                return;
                              }
                              void requestRangeSwitch(mapped, "chart");
                            }
                          },
                          hostKey
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute bottom-5 left-4 z-20 md:bottom-6 md:left-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartHud, { isDark: isPageDark, primeMode, barCount: displayIntervals.length }) }),
                    showTickPreviews && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: `mb-2 flex flex-wrap items-baseline justify-between gap-2 px-1 text-[11px] font-semibold ${isPageDark ? "text-slate-300" : "text-slate-700"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tick previews (different intervals / visible ranges)" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `${isPageDark ? "text-slate-500" : "text-slate-500"} font-normal`, children: "Toggle from the header “Ticks” button" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-5", children: tickPreviewCards.map((card) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: `overflow-hidden rounded-xl border ${isPageDark ? "border-white/10 bg-[#06080d]" : "border-slate-200 bg-white"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "div",
                              {
                                className: `flex items-center justify-between gap-2 border-b px-3 py-2 text-[11px] font-semibold ${isPageDark ? "border-white/10 text-slate-200" : "border-slate-200 text-slate-700"}`,
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: card.label }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `${isPageDark ? "text-slate-400" : "text-slate-500"} font-mono`, children: [
                                    card.intervalSec,
                                    "s"
                                  ] })
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[200px] w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              eo,
                              {
                                themeVariant: shellTheme,
                                onThemeVariantChange: setThemePreference,
                                intervalsArray: card.intervals,
                                chartOptions: {
                                  ...chartOptions,
                                  base: {
                                    ...chartOptions.base,
                                    engine: primeMode ? Vt.prime : Vt.standard,
                                    theme: shellTheme,
                                    chartType: Pt.Area,
                                    showHistogram: false,
                                    showCrosshair: false,
                                    showCrosshairValues: false
                                  }
                                },
                                showSidebar: false,
                                showTopBar: false,
                                showSettingsBar: false,
                                showAttribution: false,
                                initialVisibleTimeRange: card.visible
                              },
                              `${card.label}-${shellTheme}-${primeMode ? "prime" : "std"}`
                            ) })
                          ]
                        },
                        card.label
                      )) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "aside",
                    {
                      className: `${panelGlass} w-full border-t p-4 lg:w-[19rem] lg:border-l lg:border-t-0 md:p-6 ${isPageDark ? "border-white/10" : "border-slate-200"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "h3",
                            {
                              className: `text-xs font-semibold uppercase tracking-wider ${isPageDark ? "text-slate-500" : "text-slate-500"}`,
                              children: "Real-time Ticks"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => setLiveTrading((l) => !l),
                              className: `relative h-7 w-12 shrink-0 rounded-full transition-colors ${liveTrading ? "bg-[#34d399]/40" : "bg-white/10"}`,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: `absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${liveTrading ? "translate-x-5" : "translate-x-0"}`
                                }
                              )
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "label",
                          {
                            className: `mb-4 block text-xs ${isPageDark ? "text-slate-400" : "text-slate-600"}`,
                            children: [
                              "Symbol",
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex gap-2", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "select",
                                  {
                                    value: symbol,
                                    onChange: (e) => {
                                      const v = e.target.value;
                                      setSymbol(v);
                                      setSymbolDraft(v);
                                    },
                                    className: `w-full rounded-lg border px-3 py-2 font-mono text-sm outline-none ring-[#3EC5FF]/40 focus:ring-2 ${isPageDark ? "border-white/10 bg-black/30 text-white" : "border-slate-300 bg-white text-slate-900"}`,
                                    children: demoMarketData.symbols.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () => setSymbol(symbolDraft.trim().toUpperCase()),
                                    className: "shrink-0 rounded-lg border border-[#3EC5FF]/40 bg-[#3EC5FF]/10 px-3 py-2 text-sm font-medium text-[#3EC5FF] hover:bg-[#3EC5FF]/20",
                                    children: "Go"
                                  }
                                )
                              ] })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "label",
                          {
                            className: `mb-4 block text-xs ${isPageDark ? "text-slate-400" : "text-slate-600"}`,
                            children: [
                              "Interval",
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "select",
                                {
                                  value: timeframe,
                                  onChange: (e) => {
                                    void requestIntervalSwitch(e.target.value, "ui");
                                  },
                                  className: `mt-1 w-full rounded-lg border px-3 py-2 font-mono text-sm outline-none ring-[#3EC5FF]/40 focus:ring-2 ${isPageDark ? "border-white/10 bg-black/30 text-white" : "border-slate-300 bg-white text-slate-900"}`,
                                  children: demoMarketData.intervals.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: k, children: k }, k))
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `mb-6 block text-xs ${isPageDark ? "text-slate-400" : "text-slate-600"}`, children: [
                          "Range",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 grid grid-cols-5 gap-1", children: DEMO_RANGES.map((r) => {
                            const safeNow = primeMode || isSafeCombo(r, timeframe) || findSafeIntervalForRange(r, timeframe) != null;
                            return /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: () => {
                                  void requestRangeSwitch(r, "ui");
                                },
                                disabled: !safeNow,
                                title: !safeNow ? "Blocked by safety limits for current/demo intervals" : void 0,
                                className: `rounded-md px-2 py-1 text-[11px] font-semibold transition-colors ${range === r ? "bg-[#3EC5FF] text-black" : isPageDark ? "bg-white/5 text-slate-300 hover:bg-white/10" : "bg-slate-200/60 text-slate-700 hover:bg-slate-200"} ${!safeNow ? "cursor-not-allowed opacity-45" : ""}`,
                                children: r
                              },
                              r
                            );
                          }) })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h3",
                          {
                            className: `mb-2 text-xs font-semibold uppercase tracking-wider ${isPageDark ? "text-slate-500" : "text-slate-500"}`,
                            children: "Indicators"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            IndicatorRow,
                            {
                              isDark: isPageDark,
                              label: "EMA (21)",
                              active: emaOn,
                              onAdd: () => setEmaOn(true),
                              onRemove: () => setEmaOn(false),
                              supported: true
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            IndicatorRow,
                            {
                              isDark: isPageDark,
                              label: "RSI",
                              active: false,
                              onAdd: () => void 0,
                              onRemove: () => void 0,
                              supported: false
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            IndicatorRow,
                            {
                              isDark: isPageDark,
                              label: "VWAP",
                              active: false,
                              onAdd: () => void 0,
                              onRemove: () => void 0,
                              supported: false,
                              proOnly: true,
                              onUpgrade: () => setPrimeOfferOpen(true)
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            IndicatorRow,
                            {
                              isDark: isPageDark,
                              label: "MACD",
                              active: false,
                              onAdd: () => void 0,
                              onRemove: () => void 0,
                              supported: false
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            IndicatorRow,
                            {
                              isDark: isPageDark,
                              label: "Volume Profile",
                              active: false,
                              onAdd: () => void 0,
                              onRemove: () => void 0,
                              supported: false
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h3",
                          {
                            className: `mb-2 mt-6 text-xs font-semibold uppercase tracking-wider ${isPageDark ? "text-slate-500" : "text-slate-500"}`,
                            children: "Chart Navigation (Imperative)"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            DemoSidebarButton,
                            {
                              isDark: isPageDark,
                              onClick: () => chartRef.current?.setInterval("1h"),
                              label: "Set 1h (by code)"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            DemoSidebarButton,
                            {
                              isDark: isPageDark,
                              onClick: () => chartRef.current?.setInterval("1D"),
                              label: "Set 1D (by code)"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            DemoSidebarButton,
                            {
                              isDark: isPageDark,
                              onClick: () => chartRef.current?.setRange("All"),
                              label: "Fit All (by code)"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            DemoSidebarButton,
                            {
                              isDark: isPageDark,
                              onClick: () => chartRef.current?.setRange("1W"),
                              label: "Show 1W (by code)"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: `mt-6 border-t pt-4 text-xs ${isPageDark ? "border-white/10 text-slate-500" : "border-slate-200 text-slate-600"}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2 font-mono text-[10px] leading-relaxed", children: [
                                "Data: ",
                                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-slate-400", children: "../data-generator.ts" }),
                                " ·",
                                " ",
                                liveTrading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                  "Live ",
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { className: "text-slate-400", children: [
                                    LIVE_TICK_MS$1,
                                    "ms"
                                  ] }),
                                  " ticks"
                                ] }) : "Live paused",
                                "· Prime stress path uses ",
                                barCount.toLocaleString(),
                                " bars."
                              ] }),
                              onOpenCompare ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: onOpenCompare,
                                  className: "text-[#3EC5FF] underline-offset-2 hover:underline",
                                  children: "API comparison lab (all tiers)"
                                }
                              ) : null
                            ]
                          }
                        )
                      ]
                    }
                  )
                ] })
              ] })
            ]
          }
        ),
        toast ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-6 left-1/2 z-50 max-w-md -translate-x-1/2 rounded-xl border border-white/10 bg-slate-900/95 px-4 py-3 text-center text-sm text-slate-100 shadow-2xl backdrop-blur-xl", children: toast }) : null,
        primeOfferOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-lg rounded-2xl border border-white/15 bg-[#0f172a] p-5 text-slate-100 shadow-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold uppercase tracking-wide text-[#7dd3fc]", children: "Get Prime" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 text-xl font-bold", children: "Unlock Neon Turbo Mode" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm text-slate-300", children: "Prime is not linked in this public core build. Add the optional Pro package to enable neon rendering and advanced capabilities." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 rounded-lg bg-black/30 p-3 font-mono text-xs text-slate-200", children: [
            "npm run prime:link-local",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "npm run dev:prime"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://github.com/BARDAMRI/tickup-prime",
                target: "_blank",
                rel: "noreferrer",
                className: "rounded-lg border border-[#3EC5FF]/50 px-3 py-1.5 text-xs font-semibold text-[#7dd3fc] hover:bg-[#3EC5FF]/10",
                children: "Learn about Prime"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setPrimeOfferOpen(false),
                className: "rounded-lg bg-[#3EC5FF] px-3 py-1.5 text-xs font-semibold text-black",
                children: "Close"
              }
            )
          ] })
        ] }) }) : null
      ]
    }
  );
}
function ChartHud({ isDark, primeMode, barCount }) {
  const [fps, setFps] = reactExports.useState(60);
  reactExports.useEffect(() => {
    let frames = 0;
    let last = performance.now();
    let raf = 0;
    const loop = (now) => {
      frames += 1;
      const dt = now - last;
      if (dt >= 500) {
        setFps(Math.round(frames * 1e3 / dt));
        frames = 0;
        last = now;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `pointer-events-auto rounded-xl border px-3 py-2 font-mono text-[11px] leading-relaxed md:text-xs ${isDark ? "glass-panel border-white/10 text-[#E7EBFF]" : "glass-panel-light border-slate-200 text-slate-800"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "FPS " }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#3EC5FF]", children: fps })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Engine " }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#5A48DE]", children: primeMode ? "Prime" : "Standard" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Bars " }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: isDark ? "text-emerald-300" : "text-emerald-700", children: barCount.toLocaleString() })
        ] })
      ]
    }
  );
}
function ToolRailBtn({
  children,
  active,
  label,
  onClick,
  isDark = true,
  disabled = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      title: label,
      "aria-label": label,
      "aria-pressed": active,
      onClick,
      disabled,
      className: `flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 ${active ? "border-[#3EC5FF]/50 bg-[#3EC5FF]/15 text-[#3EC5FF]" : isDark ? "border-transparent text-gray-500 hover:border-white/10 hover:text-[#3EC5FF]" : "border-transparent text-slate-500 hover:border-slate-300 hover:text-[#3EC5FF]"} ${disabled ? "cursor-not-allowed opacity-55 hover:border-transparent hover:text-current" : ""}`,
      children
    }
  );
}
function IndicatorRow({
  label,
  active,
  supported,
  onAdd,
  onRemove,
  isDark = true,
  proOnly = false,
  onUpgrade
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "li",
    {
      className: `flex items-center justify-between gap-2 rounded-lg border px-3 py-2 ${isDark ? "border-white/5 bg-black/20" : "border-slate-200 bg-white/80"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono text-xs ${isDark ? "text-slate-300" : "text-slate-700"}`, children: label }),
        !supported ? proOnly ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: onUpgrade,
            className: "rounded-md bg-[#5A48DE]/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-violet-300 ring-1 ring-violet-400/35 hover:bg-[#5A48DE]/35",
            children: "PRO"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-[#5A48DE]/20 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-violet-300", children: "Planned" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onAdd,
              disabled: active,
              className: `rounded-md border px-2 py-1 text-[11px] disabled:opacity-40 ${isDark ? "border-white/10 text-slate-300 enabled:hover:bg-white/10" : "border-slate-300 text-slate-700 enabled:hover:bg-slate-100"}`,
              children: "Add"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onRemove,
              disabled: !active,
              className: `rounded-md border px-2 py-1 text-[11px] disabled:opacity-40 ${isDark ? "border-white/10 text-slate-300 enabled:hover:bg-red-500/20 enabled:hover:text-red-200" : "border-slate-300 text-slate-700 enabled:hover:bg-red-50 enabled:hover:text-red-700"}`,
              children: "Remove"
            }
          )
        ] })
      ]
    }
  );
}
function DemoSidebarButton({
  label,
  onClick,
  isDark = true
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick,
      className: `w-full rounded-lg border px-3 py-2 text-left text-xs font-medium transition-all ${isDark ? "border-white/10 bg-black/30 text-slate-300 hover:border-[#3EC5FF]/40 hover:text-[#3EC5FF]" : "border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:text-slate-900"}`,
      children: label
    }
  );
}

function simplePRNG(seed = 12345) {
  let s = seed >>> 0;
  const rand = () => (s = 1664525 * s + 1013904223 >>> 0) / 4294967295;
  return { rand };
}
function makeSimpleIntervals({
  startTime,
  startPrice,
  intervalSec,
  count,
  seed = 12345,
  driftPerBar = 0.04,
  vol = 0.6,
  addGapsEvery
}) {
  const rng = simplePRNG(seed);
  const out = [];
  let t = startTime;
  let lastClose = startPrice;
  for (let i = 0; i < count; i++) {
    if (addGapsEvery && i > 0 && i % addGapsEvery === 0) {
      const gapPct = (rng.rand() - 0.5) * 0.01;
      lastClose = +(lastClose * (1 + gapPct)).toFixed(2);
    }
    const o = lastClose;
    const noise = (rng.rand() - 0.5) * 2 * vol;
    const c = o + driftPerBar + noise;
    const wigUp = Math.abs((rng.rand() - 0.5) * 2) * (vol * 0.8 + 0.1);
    const wigDn = Math.abs((rng.rand() - 0.5) * 2) * (vol * 0.8 + 0.1);
    const h = Math.max(o, c) + wigUp;
    const l = Math.min(o, c) - wigDn;
    const baseVol = 1200;
    const volJitter = (rng.rand() - 0.5) * 2 * 300;
    const v = Math.max(1, Math.round(baseVol + volJitter));
    out.push({
      t,
      o: +o.toFixed(2),
      h: +h.toFixed(2),
      l: +l.toFixed(2),
      c: +c.toFixed(2),
      v
    });
    lastClose = c;
    t += intervalSec;
  }
  return out;
}
const INTERVAL_SEC = 300;
const INITIAL_INTERVALS = makeSimpleIntervals({
  startTime: 1688e6,
  startPrice: 100,
  intervalSec: INTERVAL_SEC,
  count: 200,
  seed: 4242,
  driftPerBar: 0.03,
  vol: 0.7
});
function cloneIntervals(rows) {
  return rows.map((b) => ({ ...b }));
}
function makeNextBar(last, intervalSec) {
  const o = last.c;
  const noise = (Math.random() - 0.5) * 1.2;
  const drift = 0.02 + (Math.random() - 0.5) * 0.02;
  const c = o + drift + noise;
  const wickUp = Math.random() * 0.45;
  const wickDn = Math.random() * 0.45;
  const h = Math.max(o, c) + wickUp;
  const l = Math.min(o, c) - wickDn;
  const v = Math.max(1, Math.round(1e3 + Math.random() * 500));
  return {
    t: last.t + intervalSec,
    o: +o.toFixed(2),
    h: +h.toFixed(2),
    l: +l.toFixed(2),
    c: +c.toFixed(2),
    v
  };
}
function jitterLastBar(last) {
  const delta = (Math.random() - 0.5) * 0.35;
  const c = +(last.c + delta).toFixed(2);
  const h = +Math.max(last.h, last.o, c, last.l + 0.01).toFixed(2);
  const l = +Math.min(last.l, last.o, c, last.h - 0.01).toFixed(2);
  const v = Math.max(1, Math.round((last.v ?? 1200) + (Math.random() - 0.5) * 80));
  return { ...last, o: last.o, c, h, l, v };
}
const LIVE_TICK_MS = 900;
const PRIME_LICENSE_STORAGE_KEY = "tickup:prime:license-key";
const PRIME_USER_STORAGE_KEY = "tickup:prime:user-identifier";
const TIERS_WITH_DEMO_SHAPES = ["command"];
const TIER_ROWS = [
  {
    key: "pulse",
    title: "TickUp Pulse",
    blurb: "Minimal embed — price plot and axes only (no toolbars). Pure data.",
    Cmp: to
  },
  {
    key: "flow",
    title: "TickUp Flow",
    blurb: "Analysis — top bar & settings; no drawing tools sidebar.",
    Cmp: no
  },
  {
    key: "command",
    title: "TickUp Command",
    blurb: "Full trader UI — drawings, modals, programmatic API.",
    Cmp: ro
  },
  {
    key: "desk",
    title: "TickUp Desk",
    blurb: "Broker-style — same as Command; attribution always on.",
    Cmp: io
  },
  {
    key: "prime",
    title: "TickUp Prime",
    blurb: "Prime teaser lane. Link @tickup/prime locally to activate neon rendering.",
    Cmp: ao,
    lux: true
  }
];
function seedDemoShapes(api, series) {
  if (!api?.addShape || !series.length) {
    return;
  }
  const t0 = series[0].t;
  const tLast = series[series.length - 1].t;
  const span = Math.max(INTERVAL_SEC, tLast - t0);
  const prices = series.flatMap((b) => [b.l, b.h]);
  const pMin = Math.min(...prices);
  const pMax = Math.max(...prices);
  const pMid = (pMin + pMax) / 2;
  api.addShape({
    type: rn.Line,
    points: [
      { time: t0 + span * 0.12, price: pMid - (pMax - pMin) * 0.08 },
      { time: t0 + span * 0.58, price: pMid + (pMax - pMin) * 0.12 }
    ],
    style: {
      lineColor: "#e040fb",
      lineWidth: 2,
      lineStyle: Nt.dashed
    }
  });
  api.addShape({
    type: rn.Rectangle,
    points: [
      { time: t0 + span * 0.32, price: pMid - 1.2 },
      { time: t0 + span * 0.48, price: pMid + 2.4 }
    ],
    style: {
      lineColor: "#26c6da",
      lineWidth: 1,
      lineStyle: Nt.solid,
      fillColor: "rgba(38, 198, 218, 0.18)"
    }
  });
  api.addShape({
    type: rn.Circle,
    points: [
      { time: t0 + span * 0.62, price: pMid - 0.5 },
      { time: t0 + span * 0.74, price: pMid + 2 }
    ],
    style: {
      lineColor: "#ffca28",
      lineWidth: 2,
      lineStyle: Nt.solid,
      fillColor: "rgba(255, 202, 40, 0.14)"
    }
  });
  api.addShape({
    type: rn.Triangle,
    points: [
      { time: t0 + span * 0.78, price: pMid + 0.8 },
      { time: t0 + span * 0.86, price: pMid + 0.1 }
    ],
    style: {
      lineColor: "#60a5fa",
      lineWidth: 2,
      lineStyle: Nt.solid,
      fillColor: "rgba(96, 165, 250, 0.14)"
    }
  });
  api.addShape({
    type: rn.Arrow,
    points: [
      { time: t0 + span * 0.18, price: pMid + 0.4 },
      { time: t0 + span * 0.26, price: pMid + 1 }
    ],
    style: {
      lineColor: "#34d399",
      lineWidth: 2,
      lineStyle: Nt.solid
    }
  });
  api.redrawCanvas?.();
}
function App() {
  const refs = reactExports.useRef({
    pulse: null,
    flow: null,
    command: null,
    desk: null,
    prime: null
  });
  const commandRef = reactExports.useRef(null);
  const tierRefCallbacks = reactExports.useMemo(() => {
    const keys = ["pulse", "flow", "command", "desk", "prime"];
    const out = {};
    keys.forEach((key) => {
      out[key] = (h) => {
        refs.current[key] = h;
        if (key === "command") {
          commandRef.current = h;
        }
      };
    });
    return out;
  }, []);
  const [series, setSeries] = reactExports.useState(() => cloneIntervals(INITIAL_INTERVALS));
  const [livePaused, setLivePaused] = reactExports.useState(false);
  const tickCountRef = reactExports.useRef(0);
  const programmaticShapesSeededRef = reactExports.useRef(false);
  const [theme, setTheme] = reactExports.useState(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: light)").matches) {
      return ft.light;
    }
    return ft.dark;
  });
  const [page, setPage] = reactExports.useState("tiers");
  const [primeEngine, setPrimeEngine] = reactExports.useState(null);
  const [primeLinked, setPrimeLinked] = reactExports.useState(false);
  const [primeLicenseInput, setPrimeLicenseInput] = reactExports.useState(() => {
    if (typeof window === "undefined") {
      return "";
    }
    return window.localStorage.getItem(PRIME_LICENSE_STORAGE_KEY) ?? "";
  });
  const [primeLicenseKey, setPrimeLicenseKey] = reactExports.useState(() => {
    if (typeof window === "undefined") {
      return "";
    }
    return (window.localStorage.getItem(PRIME_LICENSE_STORAGE_KEY) ?? "").trim();
  });
  const [primeUserIdentifierInput, setPrimeUserIdentifierInput] = reactExports.useState(() => {
    if (typeof window === "undefined") {
      return "";
    }
    return window.localStorage.getItem(PRIME_USER_STORAGE_KEY) ?? "";
  });
  const [primeUserIdentifier, setPrimeUserIdentifier] = reactExports.useState(() => {
    if (typeof window === "undefined") {
      return "";
    }
    return (window.localStorage.getItem(PRIME_USER_STORAGE_KEY) ?? "").trim();
  });
  const [licenseModalOpen, setLicenseModalOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const mqLight = window.matchMedia("(prefers-color-scheme: light)");
    const handler = (e) => {
      setTheme(e.matches ? ft.light : ft.dark);
    };
    mqLight.addEventListener("change", handler);
    return () => mqLight.removeEventListener("change", handler);
  }, []);
  reactExports.useLayoutEffect(() => {
    const enabled = String("1") === "1";
    if (!enabled) return;
    __vitePreload(() => import('./index-BzPwDpPe.js'),true?[]:void 0).then((m) => {
      if (m?.TickUpPrime) {
        setPrimeEngine(m.TickUpPrime);
        setPrimeLinked(true);
      }
    }).catch(() => {
      setPrimeLinked(false);
    });
  }, []);
  const primeLicenseUnlocked = primeLicenseKey.trim().length > 0;
  const applyPrimeLicense = reactExports.useCallback(() => {
    const normalized = primeLicenseInput.trim();
    const userIdentifier = primeUserIdentifierInput.trim();
    if (!normalized) {
      setPrimeLicenseKey("");
      window.localStorage.removeItem(PRIME_LICENSE_STORAGE_KEY);
      return;
    }
    setPrimeLicenseInput(normalized);
    setPrimeLicenseKey(normalized);
    setPrimeUserIdentifier(userIdentifier);
    setPrimeUserIdentifierInput(userIdentifier);
    window.localStorage.setItem(PRIME_LICENSE_STORAGE_KEY, normalized);
    window.localStorage.setItem(PRIME_USER_STORAGE_KEY, userIdentifier);
  }, [primeLicenseInput, primeUserIdentifierInput]);
  const clearPrimeLicense = reactExports.useCallback(() => {
    setPrimeLicenseInput("");
    setPrimeLicenseKey("");
    setPrimeUserIdentifierInput("");
    setPrimeUserIdentifier("");
    window.localStorage.removeItem(PRIME_LICENSE_STORAGE_KEY);
    window.localStorage.removeItem(PRIME_USER_STORAGE_KEY);
  }, []);
  reactExports.useLayoutEffect(() => {
    if (!primeEngine) return;
    const timer = requestAnimationFrame(() => {
      const h = refs.current.prime;
      if (h?.setEngine) {
        h.setEngine(primeEngine);
      }
    });
    return () => cancelAnimationFrame(timer);
  }, [primeEngine]);
  const exampleVisibleRange = reactExports.useMemo(() => {
    if (!series.length) {
      return { start: 0, end: 1 };
    }
    const lastT = series[series.length - 1].t;
    return { start: series[0].t, end: lastT + INTERVAL_SEC };
  }, [series]);
  const standardChartOptions = reactExports.useMemo(
    () => ({
      base: {
        theme,
        showOverlayLine: true,
        showHistogram: true,
        showCrosshair: true,
        showCrosshairValues: true,
        style: {
          backgroundColor: theme === ft.dark ? "#0b0e14" : "#ffffff",
          grid: {
            lineColor: theme === ft.dark ? "#334155" : "#e2e8f0"
          },
          histogram: {
            bullColor: theme === ft.dark ? "rgba(38, 166, 154, 0.5)" : "rgba(38, 166, 154, 0.5)",
            bearColor: theme === ft.dark ? "rgba(239, 83, 80, 0.5)" : "rgba(239, 83, 80, 0.5)",
            opacity: theme === ft.dark ? 0.9 : 0.6
          },
          axes: {
            lineColor: theme === ft.dark ? "#334155" : "#e2e8f0",
            textColor: theme === ft.dark ? "#94a3b8" : "#64748b"
          }
        }
      },
      axes: {
        yAxisPosition: It.right
      }
    }),
    [theme]
  );
  const coreComparisonOptions = reactExports.useMemo(
    () => ({
      ...standardChartOptions,
      base: {
        ...standardChartOptions.base,
        engine: Vt.standard,
        showOverlayLine: true,
        overlayKinds: [{ kind: Yt.ema, period: 21 }]
      }
    }),
    [standardChartOptions]
  );
  const primeComparisonOptions = reactExports.useMemo(
    () => ({
      ...standardChartOptions,
      base: {
        ...standardChartOptions.base,
        engine: Vt.prime,
        showOverlayLine: true,
        overlayKinds: [Yt.vwap, { kind: Yt.ema, period: 34 }],
        style: {
          ...standardChartOptions.base.style,
          backgroundColor: theme === ft.dark ? "#050913" : "#f0f9ff"
        }
      }
    }),
    [standardChartOptions, theme]
  );
  const pushLiveTick = reactExports.useCallback(() => {
    const api = commandRef.current;
    if (!api?.applyLiveData || !api.getViewInfo) {
      return;
    }
    const viewInfo = api.getViewInfo();
    const intervals = viewInfo?.intervals;
    if (!intervals?.length) {
      return;
    }
    const last = intervals[intervals.length - 1];
    tickCountRef.current += 1;
    const n = tickCountRef.current;
    const result = n % 5 !== 0 ? api.applyLiveData(jitterLastBar(last), zQ.mergeByTime) : api.applyLiveData(makeNextBar(last, INTERVAL_SEC), zQ.append);
    if (result.intervals.length) {
      setSeries(result.intervals);
    }
  }, []);
  reactExports.useEffect(() => {
    if (livePaused) {
      return;
    }
    const id = window.setInterval(pushLiveTick, LIVE_TICK_MS);
    return () => window.clearInterval(id);
  }, [livePaused, pushLiveTick]);
  reactExports.useEffect(() => {
    if (!series.length || programmaticShapesSeededRef.current) {
      return;
    }
    let cancelled = false;
    let attempts = 0;
    const maxAttempts = 24;
    const trySeed = () => {
      if (cancelled || programmaticShapesSeededRef.current) {
        return;
      }
      const demoReady = TIERS_WITH_DEMO_SHAPES.every((k) => refs.current[k] != null);
      attempts += 1;
      if (!demoReady && attempts < maxAttempts) {
        requestAnimationFrame(trySeed);
        return;
      }
      programmaticShapesSeededRef.current = true;
      TIERS_WITH_DEMO_SHAPES.forEach((k) => {
        const api = refs.current[k];
        if (api) {
          seedDemoShapes(api, series);
        }
      });
    };
    const timer = window.setTimeout(() => requestAnimationFrame(trySeed), 200);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [series]);
  const handleRefreshSeries = reactExports.useCallback(async () => {
    tickCountRef.current = 0;
    programmaticShapesSeededRef.current = false;
    Object.keys(refs.current).forEach((key) => {
      refs.current[key]?.clearCanvas?.();
    });
    const reset = cloneIntervals(INITIAL_INTERVALS);
    setSeries(reset);
    window.requestAnimationFrame(() => {
      Object.keys(refs.current).forEach((key) => {
        const api = refs.current[key];
        api?.fitVisibleRangeToData?.();
        api?.redrawCanvas?.();
      });
    });
  }, []);
  const handleSymbolSearch = reactExports.useCallback((sym) => {
    const label = sym || "(empty)";
    window.alert(`Symbol search (demo): ${label}
Wire onSymbolSearch to load data for this symbol.`);
  }, []);
  const sharedProps = {
    intervalsArray: series,
    onRefreshRequest: handleRefreshSeries,
    defaultSymbol: "DEMO",
    onSymbolSearch: handleSymbolSearch,
    initialNumberOfYTicks: 8,
    initialTimeDetailLevel: yt.Medium,
    initialVisibleTimeRange: exampleVisibleRange,
    chartOptions: standardChartOptions,
    themeVariant: theme,
    onThemeVariantChange: setTheme
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `flex min-h-screen flex-col font-sans transition-colors duration-300 ${theme === ft.dark ? "bg-[#050608] text-slate-200" : "bg-slate-50 text-slate-800"}`,
      style: { backgroundImage: theme === ft.dark ? "radial-gradient(circle at 50% 10%, rgba(62,197,255,0.06), transparent 50%)" : "radial-gradient(circle at 50% 10%, rgba(62,197,255,0.15), transparent 50%)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: `sticky top-0 z-50 py-4 px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-b ${theme === ft.dark ? "border-white/5 bg-[#0f121c]/80 backdrop-blur-md" : "border-slate-200 bg-white/80 backdrop-blur-md"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col leading-tight", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg font-extrabold tracking-tight", children: [
              "TickUp ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#3EC5FF]", children: "Charts" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${theme === ft.dark ? "text-slate-400" : "text-slate-500"} text-xs font-semibold uppercase tracking-wider`, children: "Demo" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-end gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://github.com/BARDAMRI/tickup-charts/blob/main/documentation/README.md",
                target: "_blank",
                rel: "noreferrer",
                className: `rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${theme === ft.dark ? "border-white/10 bg-black/30 text-slate-300 hover:border-[#3EC5FF]/45 hover:text-white" : "border-slate-200 bg-white/70 text-slate-700 hover:border-[#3EC5FF]/60 hover:text-slate-900"}`,
                title: "Open documentation (GitHub)",
                children: "Docs"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setPage((p) => p === "tiers" ? "ticks" : "tiers"),
                className: `rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${page === "ticks" ? "border-[#3EC5FF]/60 bg-[#3EC5FF]/10 text-[#3EC5FF]" : theme === ft.dark ? "border-white/10 bg-black/30 text-slate-300 hover:border-white/20 hover:text-white" : "border-slate-200 bg-white/70 text-slate-700 hover:border-slate-300 hover:text-slate-900"}`,
                "aria-pressed": page === "ticks",
                title: page === "ticks" ? "Back to tier showcase" : "Open tick/axis demo page",
                children: page === "ticks" ? "Back" : "Tick demo"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-3 rounded-full border p-1.5 pl-4 pr-1.5 shadow-xl ${theme === ft.dark ? "border-white/10 bg-black/40" : "border-slate-200 bg-white/60"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pr-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-3 w-3", children: [
                  !livePaused && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `relative inline-flex h-3 w-3 rounded-full ${livePaused ? "bg-amber-500" : "bg-emerald-500"}` })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-semibold uppercase tracking-wider ${theme === ft.dark ? "text-slate-300" : "text-slate-600"}`, children: livePaused ? "Live Paused" : "Live Data API" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setLivePaused((p) => !p),
                  className: `flex h-8 w-8 items-center justify-center rounded-full transition-all hover:scale-105 active:scale-95 ${livePaused ? theme === ft.dark ? "bg-amber-500/20 text-amber-500 hover:bg-amber-500/30" : "bg-amber-500/20 text-amber-600 hover:bg-amber-500/30" : theme === ft.dark ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/5 text-slate-800 hover:bg-black/10"}`,
                  title: livePaused ? "Resume Data" : "Pause Data",
                  children: livePaused ? /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4", fill: "currentColor" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "h-4 w-4", fill: "currentColor" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleRefreshSeries,
                  className: `flex h-8 w-8 items-center justify-center rounded-full transition-all hover:scale-105 active:scale-95 ${theme === ft.dark ? "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white" : "bg-black/5 text-slate-500 hover:bg-black/10 hover:text-slate-900"}`,
                  title: "Reset Data",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setTheme((t) => t === ft.dark ? ft.light : ft.dark),
                  className: `flex h-8 w-8 items-center justify-center rounded-full transition-all hover:scale-105 active:scale-95 ${theme === ft.dark ? "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white" : "bg-black/5 text-amber-500 hover:bg-black/10 hover:text-amber-600"}`,
                  title: theme === ft.dark ? "Switch to Light Mode" : "Switch to Dark Mode",
                  children: theme === ft.dark ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" })
                }
              )
            ] })
          ] })
        ] }),
        page === "ticks" ? /* @__PURE__ */ jsxRuntimeExports.jsx(TickUpDemo, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto flex w-full max-w-7xl flex-1 flex-col gap-12 p-6 lg:gap-16 lg:p-12 mb-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center pt-8 pb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-transparent bg-clip-text bg-gradient-to-b ${theme === ft.dark ? "from-white to-slate-400" : "from-slate-800 to-slate-500"}`, children: "Next-Gen" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-b from-[#3EC5FF] to-[#0A6B99] ml-4 drop-shadow-lg", children: "Analysis" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mx-auto max-w-3xl text-lg mb-8 leading-relaxed ${theme === ft.dark ? "text-slate-400" : "text-slate-600"}`, children: "TickUp is an ultra-fast, lightweight charting engine built for serious financial applications. With a remarkably tiny footprint, full developer support, and seamless turnkey integrations, it scales effortlessly from simple data embeds to immersive, WebGL-accelerated trading platforms. Give your users the institutional-grade technical analysis tools they deserve." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-wrap items-center justify-center gap-4 text-xs lg:text-sm font-semibold uppercase tracking-wider ${theme === ft.dark ? "text-slate-300" : "text-slate-700"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm ${theme === ft.dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#3EC5FF]", children: "⚡" }),
                " Ultra Lightweight"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm ${theme === ft.dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "🛡️" }),
                " Developer Native"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm ${theme === ft.dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#5A48DE]", children: "✨" }),
                " WebGL Accelerated"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "section",
              {
                className: `rounded-[2rem] border p-5 lg:p-7 ${theme === ft.dark ? "border-white/10 bg-[#0a0f1a]/80" : "border-slate-200 bg-white"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `text-2xl font-bold tracking-tight ${theme === ft.dark ? "text-white" : "text-slate-900"}`, children: "Choose Your Power" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-1 text-sm ${theme === ft.dark ? "text-slate-400" : "text-slate-600"}`, children: "Core is production-ready for standard use. Prime is built for speed, scale, and advanced trader workflows." })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `overflow-hidden rounded-xl border ${theme === ft.dark ? "border-white/10" : "border-slate-200"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: theme === ft.dark ? "bg-black/30" : "bg-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold", children: "Capability" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold", children: "TickUp Lite (Core)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold", children: "TickUp Prime" })
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: theme === ft.dark ? "divide-y divide-white/10" : "divide-y divide-slate-200", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: "Live Updates" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: "1Hz Updates (Standard)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: "60FPS Real-time" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: "History" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: "2k History" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: "Unlimited History" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: "Indicator Capacity" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: "3 Indicators" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: "Unlimited Indicators" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: "Engine" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: "Standard Performance" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: "WebGL High-Performance" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: "Drawing UX" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: "Manual Alignment" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: "Magnetic Drawing" })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setLicenseModalOpen(true),
                      className: "rounded-lg bg-[#3EC5FF] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#65d5ff]",
                      children: "Upgrade to Prime"
                    }
                  ) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "section",
              {
                className: `rounded-[2rem] border p-5 lg:p-7 ${theme === ft.dark ? "border-[#3EC5FF]/20 bg-[#08101d]/75" : "border-[#3EC5FF]/30 bg-white"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `text-2xl font-bold tracking-tight ${theme === ft.dark ? "text-white" : "text-slate-900"}`, children: "Tier Comparison" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-1 text-sm ${theme === ft.dark ? "text-slate-400" : "text-slate-600"}`, children: "Core is intentionally constrained (candle cap + throttled updates). Prime unlocks neon rendering, VWAP overlays, and smoother live behavior." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setLicenseModalOpen(true),
                        className: "rounded-lg bg-[#3EC5FF] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#65d5ff]",
                        children: "Unlock Prime Features"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `overflow-hidden rounded-xl border ${theme === ft.dark ? "border-white/10 bg-black/30" : "border-slate-200 bg-slate-50"}`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between border-b px-4 py-2 ${theme === ft.dark ? "border-white/10" : "border-slate-200"}`, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: "TickUp Core (Lite)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            disabled: true,
                            title: "Magnet Snapping is a Prime-only feature. Upgrade to enable.",
                            className: `inline-flex cursor-not-allowed items-center gap-1 rounded-md border px-2 py-1 text-xs opacity-60 ${theme === ft.dark ? "border-white/15 text-slate-300" : "border-slate-300 text-slate-600"}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Magnet, { className: "h-3.5 w-3.5" }),
                              "Magnet Snapping"
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[320px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        ro,
                        {
                          ...sharedProps,
                          chartOptions: coreComparisonOptions
                        }
                      ) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `overflow-hidden rounded-xl border ${theme === ft.dark ? "border-[#3EC5FF]/25 bg-[#030912]" : "border-[#3EC5FF]/35 bg-cyan-50/60"}`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between border-b px-4 py-2 ${theme === ft.dark ? "border-[#3EC5FF]/20" : "border-[#3EC5FF]/25"}`, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: "TickUp Prime (Pro/Luxury)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-[#5A48DE]/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-violet-300", children: "Neon + VWAP" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[320px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        ao,
                        {
                          ...sharedProps,
                          chartOptions: primeComparisonOptions,
                          licenseKey: primeLicenseUnlocked ? primeLicenseKey : null,
                          licenseUserIdentifier: primeUserIdentifier || null
                        }
                      ) })
                    ] })
                  ] })
                ]
              }
            ),
            TIER_ROWS.map(({ key, title, blurb, Cmp, lux }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "section",
              {
                className: `group relative overflow-hidden rounded-[2rem] border transition-all duration-500 ${lux ? theme === ft.dark ? "border-[#3EC5FF]/30 bg-[#0c121e]/80 shadow-[0_0_80px_-20px_rgba(62,197,255,0.25)] hover:border-[#3EC5FF]/60 hover:shadow-[0_0_100px_-20px_rgba(62,197,255,0.4)]" : "border-[#3EC5FF]/40 bg-white/90 shadow-[0_0_60px_-10px_rgba(62,197,255,0.15)] hover:border-[#3EC5FF]/70 hover:shadow-[0_0_80px_-10px_rgba(62,197,255,0.25)]" : theme === ft.dark ? "border-white/5 bg-white/[0.02] shadow-2xl hover:border-white/10" : "border-slate-200 bg-white shadow-xl hover:border-slate-300"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 z-0 bg-gradient-to-b pointer-events-none ${theme === ft.dark ? "from-white/[0.03] to-transparent" : "from-slate-100 to-transparent"}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `relative z-10 flex flex-col gap-2 border-b p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8 ${theme === ft.dark ? "border-white/5" : "border-slate-100"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `text-2xl font-bold tracking-tight lg:text-3xl ${theme === ft.dark ? "text-white" : "text-slate-900"}`, children: title }),
                      lux && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-[#5A48DE]/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-violet-300 ring-1 ring-violet-400/30", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3 w-3", fill: "currentColor" }),
                        " Luxury"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-2 text-sm lg:text-base ${theme === ft.dark ? "text-slate-400" : "text-slate-600"}`, children: blurb }),
                    key === "prime" && !primeLinked ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `mt-2 text-xs ${theme === ft.dark ? "text-[#7dd3fc]" : "text-[#0369a1]"}`, children: [
                      "Prime package is not linked in this public build. Use ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "npm run dev:prime" }),
                      " to preview neon engine locally."
                    ] }) : null,
                    key === "prime" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `mt-4 rounded-xl border p-3 ${theme === ft.dark ? "border-[#3EC5FF]/30 bg-[#040b16]/80 shadow-[inset_0_0_28px_rgba(62,197,255,0.08)]" : "border-[#3EC5FF]/30 bg-cyan-50/70"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: `text-[11px] font-semibold uppercase tracking-wider ${theme === ft.dark ? "text-[#7dd3fc]" : "text-[#0c4a6e]"}`,
                                children: "License Settings"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: `rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${primeLicenseUnlocked ? "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/40" : theme === ft.dark ? "bg-amber-950/40 text-amber-300 ring-1 ring-amber-500/35" : "bg-amber-100 text-amber-800 ring-1 ring-amber-300"}`,
                                children: primeLicenseUnlocked ? "Unlocked" : "Evaluation"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => setLicenseModalOpen(true),
                              className: "w-full rounded-lg bg-[#3EC5FF] px-3 py-2 text-xs font-semibold text-black transition hover:bg-[#65d5ff]",
                              children: "Open License Modal"
                            }
                          )
                        ]
                      }
                    ) : null
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 p-2 sm:p-4 lg:p-6 pb-0 shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `relative w-full overflow-hidden rounded-xl border ${theme === ft.dark ? "bg-black/50" : "bg-slate-50"} ${lux ? theme === ft.dark ? "h-[550px] border-[#3EC5FF]/20 shadow-[inset_0_0_40px_rgba(62,197,255,0.05)]" : "h-[550px] border-[#3EC5FF]/30 shadow-[inset_0_0_20px_rgba(62,197,255,0.02)]" : theme === ft.dark ? "h-[500px] border-white/10" : "h-[500px] border-slate-200"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Cmp,
                    {
                      ref: tierRefCallbacks[key],
                      ...sharedProps,
                      ...key === "prime" ? {
                        licenseKey: primeLicenseUnlocked ? primeLicenseKey : null,
                        licenseUserIdentifier: primeUserIdentifier || null
                      } : {}
                    }
                  ) }) })
                ]
              },
              key
            ))
          ] })
        ] }),
        licenseModalOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[70] flex items-center justify-center bg-black/60 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `w-full max-w-lg rounded-2xl border p-5 shadow-2xl ${theme === ft.dark ? "border-[#3EC5FF]/30 bg-[#071222] text-slate-100" : "border-[#3EC5FF]/35 bg-white text-slate-900"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Unlock Prime Features" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${primeLicenseUnlocked ? "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/40" : theme === ft.dark ? "bg-amber-950/40 text-amber-300 ring-1 ring-amber-500/35" : "bg-amber-100 text-amber-800 ring-1 ring-amber-300"}`, children: primeLicenseUnlocked ? "Unlocked" : "Evaluation" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mb-4 text-sm ${theme === ft.dark ? "text-slate-300" : "text-slate-600"}`, children: "Enter your Prime user identifier and license key to unlock Pro/Luxury rendering, smoother updates, and unlimited analysis tools." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                value: primeUserIdentifierInput,
                onChange: (e) => setPrimeUserIdentifierInput(e.target.value),
                placeholder: "user@example.com or account ID",
                className: `w-full rounded-lg border px-3 py-2 text-sm outline-none ring-[#3EC5FF]/40 focus:ring-2 ${theme === ft.dark ? "border-[#3EC5FF]/35 bg-black/35 text-slate-100 placeholder:text-slate-500" : "border-slate-300 bg-white text-slate-800"}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                value: primeLicenseInput,
                onChange: (e) => setPrimeLicenseInput(e.target.value),
                placeholder: "TUP-PRIME-XXXXXXXX",
                className: `w-full rounded-lg border px-3 py-2 font-mono text-sm outline-none ring-[#3EC5FF]/40 focus:ring-2 ${theme === ft.dark ? "border-[#3EC5FF]/35 bg-black/35 text-slate-100 placeholder:text-slate-500" : "border-slate-300 bg-white text-slate-800"}`
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap items-center justify-end gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: clearPrimeLicense,
                className: `rounded-lg border px-3 py-2 text-xs font-semibold ${theme === ft.dark ? "border-white/15 text-slate-300 hover:bg-white/10" : "border-slate-300 text-slate-700 hover:bg-slate-100"}`,
                children: "Clear"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setLicenseModalOpen(false),
                className: `rounded-lg border px-3 py-2 text-xs font-semibold ${theme === ft.dark ? "border-white/15 text-slate-300 hover:bg-white/10" : "border-slate-300 text-slate-700 hover:bg-slate-100"}`,
                children: "Close"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  applyPrimeLicense();
                  setLicenseModalOpen(false);
                },
                className: "rounded-lg bg-[#3EC5FF] px-3 py-2 text-xs font-semibold text-black transition hover:bg-[#65d5ff]",
                children: "Apply & Unlock"
              }
            )
          ] })
        ] }) }) : null
      ]
    }
  );
}

clientExports.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
