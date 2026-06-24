import { useState } from "react";
import { Link } from "react-router-dom";

// ── Tüketim verileri ──────────────────────────────────────────────────────────
const data = [
  { kw: 20,   kva: 25,   q1: 2.3,   q2: 3.4,   q3: 4.9,   q4: 6.1   },
  { kw: 30,   kva: 38,   q1: 4.9,   q2: 6.8,   q3: 9.1,   q4: 11    },
  { kw: 40,   kva: 50,   q1: 6.1,   q2: 8.7,   q3: 12.1,  q4: 15.1  },
  { kw: 60,   kva: 75,   q1: 6.8,   q2: 11,    q3: 14.4,  q4: 18.2  },
  { kw: 75,   kva: 94,   q1: 9.1,   q2: 12.9,  q3: 17.4,  q4: 23.1  },
  { kw: 100,  kva: 125,  q1: 9.8,   q2: 15.5,  q3: 22,    q4: 28    },
  { kw: 125,  kva: 156,  q1: 11.7,  q2: 18.9,  q3: 26.9,  q4: 34.4  },
  { kw: 135,  kva: 169,  q1: 12.5,  q2: 20.4,  q3: 28.8,  q4: 37.1  },
  { kw: 150,  kva: 188,  q1: 13.6,  q2: 22.3,  q3: 31.8,  q4: 41.3  },
  { kw: 175,  kva: 219,  q1: 15.5,  q2: 25.7,  q3: 36.7,  q4: 48.1  },
  { kw: 200,  kva: 250,  q1: 17.8,  q2: 29.1,  q3: 41.6,  q4: 54.5  },
  { kw: 230,  kva: 288,  q1: 20.1,  q2: 33.3,  q3: 47.3,  q4: 62.8  },
  { kw: 250,  kva: 313,  q1: 21.6,  q2: 36,    q3: 51.5,  q4: 68.1  },
  { kw: 300,  kva: 375,  q1: 25.7,  q2: 42.8,  q3: 60.9,  q4: 81.4  },
  { kw: 350,  kva: 438,  q1: 29.9,  q2: 49.6,  q3: 70.8,  q4: 95    },
  { kw: 400,  kva: 500,  q1: 33.7,  q2: 56.4,  q3: 80.6,  q4: 108.3 },
  { kw: 500,  kva: 625,  q1: 41.6,  q2: 70,    q3: 99.9,  q4: 135.1 },
  { kw: 600,  kva: 750,  q1: 50,    q2: 83.3,  q3: 119.2, q4: 162   },
  { kw: 750,  kva: 938,  q1: 61.7,  q2: 103.7, q3: 148.8, q4: 202.1 },
  { kw: 1000, kva: 1250, q1: 81.8,  q2: 137.8, q3: 197.2, q4: 269.1 },
  { kw: 1250, kva: 1563, q1: 101.8, q2: 171.5, q3: 246.1, q4: 336.1 },
  { kw: 1500, kva: 1875, q1: 121.9, q2: 205.5, q3: 294.5, q4: 403.1 },
  { kw: 1750, kva: 2188, q1: 142,   q2: 239.2, q3: 343.3, q4: 470.1 },
  { kw: 2000, kva: 2500, q1: 162,   q2: 273.3, q3: 391.8, q4: 537.1 },
  { kw: 2250, kva: 2813, q1: 182.1, q2: 307,   q3: 440.6, q4: 604.2 },
];

// ── Hesap makinesi ────────────────────────────────────────────────────────────
function Calculator() {
  const [kw, setKw] = useState("");
  const [load, setLoad] = useState("100");
  const [hours, setHours] = useState("1");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function interpolate(kwVal, loadKey) {
    const sorted = [...data].sort((a, b) => a.kw - b.kw);
    const exact = sorted.find((r) => r.kw === kwVal);
    if (exact) return exact[loadKey];
    const lower = [...sorted].reverse().find((r) => r.kw < kwVal);
    const upper = sorted.find((r) => r.kw > kwVal);
    if (!lower || !upper) return null;
    const ratio = (kwVal - lower.kw) / (upper.kw - lower.kw);
    return lower[loadKey] + ratio * (upper[loadKey] - lower[loadKey]);
  }

  function loadKey(loadPct) {
    if (loadPct <= 25) return "q1";
    if (loadPct <= 50) return "q2";
    if (loadPct <= 75) return "q3";
    return "q4";
  }

  function handleCalc() {
    const kwVal = parseFloat(kw);
    const hoursVal = parseFloat(hours);
    if (isNaN(kwVal) || kwVal <= 0) { setError("Geçerli bir kW değeri girin."); setResult(null); return; }
    if (kwVal > 2250) { setError("Maksimum 2250 kW için tablo mevcut."); setResult(null); return; }
    if (isNaN(hoursVal) || hoursVal <= 0) { setError("Geçerli bir saat değeri girin."); setResult(null); return; }
    const lKey = loadKey(parseInt(load));
    const ltPerHour = interpolate(kwVal, lKey);
    if (ltPerHour === null) { setError("Bu değer için hesaplama yapılamıyor."); setResult(null); return; }
    setError("");
    setResult({ ltPerHour, total: ltPerHour * hoursVal });
  }

  return (
    <div className="bg-white overflow-hidden" style={{ borderRadius: "12px 12px 0 12px", boxShadow: "0 1px 8px rgba(0,0,0,0.07)" }}>
      <div className="bg-brand-black px-6 py-5">
        <h3 className="font-extrabold text-white text-sm uppercase tracking-wide">Yakıt Tüketim Hesaplayıcı</h3>
        <p className="text-brand-orange text-xs font-mono mt-1.5">Jeneratör gücü ve yük oranına göre tahmini tüketim</p>
      </div>
      <div className="p-6 flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-1.5">
              Jeneratör Gücü <span className="text-brand-orange font-mono normal-case">(kW)</span>
            </label>
            <input type="number" min="0" step="any" value={kw}
              onChange={(e) => { setKw(e.target.value); setResult(null); setError(""); }}
              className="w-full border border-gray-200 px-3 py-2.5 text-sm text-brand-black font-medium focus:outline-none focus:border-brand-orange transition-colors"
              style={{ borderRadius: "4px" }} placeholder="örn. 200" />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-1.5">Yük Oranı</label>
            <select value={load} onChange={(e) => { setLoad(e.target.value); setResult(null); }}
              className="w-full border border-gray-200 px-3 py-2.5 text-sm text-brand-black font-medium focus:outline-none focus:border-brand-orange transition-colors bg-white"
              style={{ borderRadius: "4px" }}>
              <option value="25">%25 (1/4 Yük)</option>
              <option value="50">%50 (1/2 Yük)</option>
              <option value="75">%75 (3/4 Yük)</option>
              <option value="100">%100 (Tam Yük)</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-1.5">
              Çalışma Süresi <span className="text-brand-orange font-mono normal-case">(saat)</span>
            </label>
            <input type="number" min="0" step="any" value={hours}
              onChange={(e) => { setHours(e.target.value); setResult(null); setError(""); }}
              className="w-full border border-gray-200 px-3 py-2.5 text-sm text-brand-black font-medium focus:outline-none focus:border-brand-orange transition-colors"
              style={{ borderRadius: "4px" }} placeholder="1" />
          </div>
        </div>
        {error && <p className="text-xs text-red-500">{error}</p>}
        <button onClick={handleCalc} className="bg-brand-black text-white text-xs font-bold uppercase tracking-widest px-4 py-3 hover:bg-brand-orange transition-colors duration-150">
          Hesapla
        </button>
        {result && (
          <div className="bg-gray-50 border-l-4 border-brand-orange px-5 py-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Saatlik Tüketim</p>
              <p className="font-extrabold text-brand-black text-2xl">
                {result.ltPerHour.toFixed(1)} <span className="text-brand-orange text-base font-mono">lt/sa</span>
              </p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Toplam ({hours} saat)</p>
              <p className="font-extrabold text-brand-black text-2xl">
                {result.total.toFixed(1)} <span className="text-brand-orange text-base font-mono">lt</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-white pt-10 pb-0 overflow-hidden">
      <div className="container-xl">
        <div className="relative grid grid-cols-1 lg:grid-cols-5 items-end gap-0">
          <div className="relative z-10 bg-white lg:col-span-2 pb-10 pt-6 pr-8">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-4">Teknik Bilgiler</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-brand-black leading-tight">
              YAKIT<br />TÜKETİMİ
            </h1>
            <p className="text-gray-500 text-sm mt-4 max-w-xs">
              Jeneratörünüzün kW ve kVA bazında saatlik mazot tüketimini öğrenin
            </p>
            <div className="absolute bottom-0 right-0 hidden lg:block" style={{ width: 0, height: 0, borderStyle: "solid", borderWidth: "0 0 56px 56px", borderColor: "transparent transparent white transparent", zIndex: 20 }} />
            <div className="absolute bottom-0 right-0 hidden lg:block" style={{ width: 56, height: 56, background: "#FB5800", clipPath: "polygon(0 100%, 100% 100%, 100% 0)", zIndex: 15 }} />
          </div>
          <div className="lg:col-span-3 relative overflow-hidden" style={{ borderRadius: "16px 16px 16px 0", minHeight: "360px" }}>
            <img src="/images/dizel-jen.png" alt="Motus Sistem — Yakıt Tüketimi" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-brand-black/40" />
            <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
              {["20 kW → 6.1 lt/sa", "200 kW → 54.5 lt/sa", "1000 kW → 269.1 lt/sa"].map((f) => (
                <span key={f} className="bg-brand-black/70 text-brand-orange text-[10px] font-mono px-3 py-1 backdrop-blur-sm" style={{ borderRadius: "3px" }}>{f}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Hesaplayıcı Section ───────────────────────────────────────────────────────
function CalcSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-xl">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-3">Hesaplama Aracı</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase">YAKLAŞIK TÜKETİM HESAPLA</h2>
          <div className="w-10 h-0.5 bg-gray-300 mx-auto mt-4" />
        </div>
        <div className="max-w-2xl mx-auto"><Calculator /></div>
      </div>
    </section>
  );
}

// ── Tablo ─────────────────────────────────────────────────────────────────────
function Table() {
  const [search, setSearch] = useState("");
  const filtered = data.filter((r) => search === "" || r.kw.toString().includes(search) || r.kva.toString().includes(search));

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container-xl">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-3">Referans Tablo</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase">YAKIT TÜKETİM TABLOSU</h2>
          <div className="w-10 h-0.5 bg-gray-300 mx-auto mt-4" />
          <p className="text-gray-500 text-sm mt-4">Değerler saatlik litre (lt/sa) cinsinden tahmini tüketimi göstermektedir.</p>
        </div>
        <div className="max-w-xs mb-6">
          <input type="number" value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder="kW veya kVA ile filtrele..."
            className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-brand-orange transition-colors"
            style={{ borderRadius: "4px" }} />
        </div>
        <div className="overflow-x-auto" style={{ borderRadius: "12px 12px 0 12px", boxShadow: "0 1px 8px rgba(0,0,0,0.07)" }}>
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-brand-black">
                {["Jeneratör Gücü (kW)", "Jeneratör Gücü (kVA)", "1/4 Yükte (lt/sa)", "1/2 Yükte (lt/sa)", "3/4 Yükte (lt/sa)", "%100 Yükte (lt/sa)"].map((h) => (
                  <th key={h} className="px-4 py-4 text-xs font-bold text-white/70 uppercase tracking-wider text-center">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, i) => (
                <tr key={row.kw} className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-orange-50 transition-colors`}>
                  <td className="px-4 py-3.5 text-center font-extrabold text-brand-black text-sm">{row.kw}</td>
                  <td className="px-4 py-3.5 text-center font-semibold text-gray-600 text-sm">{row.kva}</td>
                  <td className="px-4 py-3.5 text-center text-sm text-gray-700">{row.q1}</td>
                  <td className="px-4 py-3.5 text-center text-sm text-gray-700">{row.q2}</td>
                  <td className="px-4 py-3.5 text-center text-sm text-gray-700">{row.q3}</td>
                  <td className="px-4 py-3.5 text-center font-bold text-brand-orange text-sm">{row.q4}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={6} className="text-center py-8 text-gray-400 text-sm bg-white">Sonuç bulunamadı.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="py-16" style={{ background: "linear-gradient(120deg,#e6823e 0%,#c86a44 25%,#7a4d66 60%,#213348 100%)" }}>
      <div className="container-xl text-center">
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-white/60 mb-4">Doğru Jeneratör Seçimi İçin</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase mb-8">UZMAN DESTEĞİ ALIN</h2>
        <Link to="/iletisim" className="inline-flex items-center gap-2 bg-white text-brand-black px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors">
          Bizimle İletişime Geçin
        </Link>
      </div>
    </section>
  );
}

export default function YakitTuketimPage() {
  return (
    <>
      <Hero />
      <CalcSection />
      <Table />
      <CTABanner />
    </>
  );
}
