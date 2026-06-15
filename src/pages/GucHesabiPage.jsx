import { useState } from "react";
import { Link } from "react-router-dom";

// ── Single Calculator Card ─────────────────────────────────────────────────
function CalcCard({ title, formula, fields, compute }) {
  const init = () => Object.fromEntries(fields.map((f) => [f.key, ""]));
  const [vals, setVals] = useState(init);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function handleChange(key, val) {
    setVals((prev) => ({ ...prev, [key]: val }));
    setResult(null);
    setError("");
  }

  function handleCalc() {
    const nums = {};
    for (const f of fields) {
      const v = parseFloat(vals[f.key]);
      if (isNaN(v) || v <= 0) {
        setError(`"${f.label}" için geçerli pozitif bir değer girin.`);
        setResult(null);
        return;
      }
      nums[f.key] = v;
    }
    try {
      const res = compute(nums);
      setResult(res);
      setError("");
    } catch {
      setError("Hesaplama sırasında hata oluştu.");
    }
  }

  const isMulti = result !== null && typeof result === "object";
  const isSingle = result !== null && typeof result === "number";

  return (
    <div
      className="bg-white flex flex-col overflow-hidden"
      style={{
        borderRadius: "12px 12px 0 12px",
        boxShadow: "0 1px 8px rgba(0,0,0,0.07)",
      }}
    >
      {/* Header */}
      <div className="bg-brand-black px-6 py-5">
        <h3 className="font-extrabold text-white text-sm uppercase tracking-wide leading-tight">
          {title}
        </h3>
        <p className="text-brand-orange text-xs font-mono mt-1.5 leading-snug">
          {formula}
        </p>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div
          className={`grid gap-3 ${fields.length === 1 ? "grid-cols-1" : fields.length <= 4 ? "grid-cols-2" : "grid-cols-2"}`}
        >
          {fields.map((f) => (
            <div key={f.key}>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-1.5">
                {f.label}{" "}
                <span className="text-brand-orange font-mono normal-case">
                  ({f.sym})
                </span>
              </label>
              <input
                type="number"
                min="0"
                step="any"
                value={vals[f.key]}
                onChange={(e) => handleChange(f.key, e.target.value)}
                className="w-full border border-gray-200 px-3 py-2.5 text-sm text-brand-black font-medium focus:outline-none focus:border-brand-orange transition-colors"
                style={{ borderRadius: "4px" }}
                placeholder="0"
              />
            </div>
          ))}
        </div>

        {error && <p className="text-xs text-red-500 -mt-1">{error}</p>}

        <button
          onClick={handleCalc}
          className="mt-auto bg-brand-black text-white text-xs font-bold uppercase tracking-widest px-4 py-3 hover:bg-brand-orange transition-colors duration-150"
        >
          Hesapla
        </button>

        {/* Result */}
        {(isSingle || isMulti) && (
          <div
            className="bg-gray-50 border-l-4 border-brand-orange px-5 py-4"
          >
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
              Sonuç
            </p>
            {isSingle && (
              <p className="font-extrabold text-brand-black text-2xl">
                {Number(result).toFixed(3)}{" "}
                <span className="text-brand-orange text-base font-mono">
                  {result._unit ?? ""}
                </span>
              </p>
            )}
            {isMulti &&
              Object.entries(result).map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between py-1 border-b border-gray-200 last:border-0"
                >
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                    {label}
                  </span>
                  <span className="font-extrabold text-brand-black text-lg ml-4">
                    {Number(value).toFixed(3)}
                  </span>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Calculator definitions ─────────────────────────────────────────────────
const SQRT3 = Math.sqrt(3);

const calcs = [
  {
    id: "guc-hesabi",
    title: "Güç Hesabı (3 Faz)",
    formula: "kVA = (I × E × √3) / 1000   |   kW = kVA × PF",
    fields: [
      { key: "I", label: "Amper", sym: "I" },
      { key: "E", label: "Volt", sym: "E" },
      { key: "PF", label: "Güç Faktörü", sym: "PF" },
    ],
    compute: ({ I, E, PF }) => ({
      "kVA": (I * E * SQRT3) / 1000,
      "kW": (I * E * SQRT3 * PF) / 1000,
    }),
  },
  {
    id: "kw-to-kva",
    title: "kW'dan kVA'e Dönüştürme",
    formula: "kVA = kW ÷ PF",
    fields: [
      { key: "kW", label: "Kilowatt", sym: "kW" },
      { key: "PF", label: "Güç Faktörü", sym: "PF" },
    ],
    compute: ({ kW, PF }) => ({ "kVA": kW / PF }),
  },
  {
    id: "kva-to-kw",
    title: "kVA'den kW'a Dönüştürme",
    formula: "kW = kVA × PF",
    fields: [
      { key: "kVA", label: "Kilo Volt Amper", sym: "kVA" },
      { key: "PF", label: "Güç Faktörü", sym: "PF" },
    ],
    compute: ({ kVA, PF }) => ({ "kW": kVA * PF }),
  },
  {
    id: "kw-to-hp",
    title: "kW'dan HP'e Dönüştürme",
    formula: "HP = kW ÷ 0.746",
    fields: [{ key: "kW", label: "Kilowatt", sym: "kW" }],
    compute: ({ kW }) => ({ "HP": kW / 0.746 }),
  },
  {
    id: "hp-to-kw",
    title: "HP'den kW'a Dönüştürme",
    formula: "kW = HP × 0.746",
    fields: [{ key: "HP", label: "Motor Gücü", sym: "HP" }],
    compute: ({ HP }) => ({ "kW": HP * 0.746 }),
  },
  {
    id: "rpm-to-f",
    title: "RPM'den Frekansa (f) Dönüştürme",
    formula: "f = (RPM × P) ÷ 120",
    fields: [
      { key: "RPM", label: "Devir Sayısı", sym: "RPM" },
      { key: "P", label: "Rotor Kutup Sayısı", sym: "P" },
    ],
    compute: ({ RPM, P }) => ({ "f (Hz)": (RPM * P) / 120 }),
  },
  {
    id: "f-to-rpm",
    title: "Frekansdan (f) RPM'e Dönüştürme",
    formula: "RPM = (f × 120) ÷ P",
    fields: [
      { key: "f", label: "Frekans", sym: "f (Hz)" },
      { key: "P", label: "Rotor Kutup Sayısı", sym: "P" },
    ],
    compute: ({ f, P }) => ({ "RPM": (f * 120) / P }),
  },
  {
    id: "motor-kva",
    title: "Motorları Çalıştırmak İçin Gerekli kVA",
    formula: "kVA = (HP × 0.746) ÷ (PF × %EFF)",
    fields: [
      { key: "HP", label: "Motor Gücü", sym: "HP" },
      { key: "PF", label: "Güç Faktörü", sym: "PF" },
      { key: "EFF", label: "Verim (%)", sym: "%EFF" },
    ],
    compute: ({ HP, PF, EFF }) => ({
      "kVA": (HP * 0.746) / (PF * (EFF / 100)),
      "kW": HP * 0.746,
    }),
  },
  {
    id: "kva-to-amper",
    title: "kVA Biliniyorsa Amper Hesaplaması",
    formula: "I = (kVA × 1000) ÷ (E × √3)",
    fields: [
      { key: "kVA", label: "Kilo Volt Amper", sym: "kVA" },
      { key: "E", label: "Volt", sym: "E" },
    ],
    compute: ({ kVA, E }) => ({ "I (A)": (kVA * 1000) / (E * SQRT3) }),
  },
  {
    id: "kw-to-amper",
    title: "kW Biliniyorsa Amper Hesaplaması",
    formula: "I = (kW × 1000) ÷ (E × √3 × PF)",
    fields: [
      { key: "kW", label: "Kilowatt", sym: "kW" },
      { key: "E", label: "Volt", sym: "E" },
      { key: "PF", label: "Güç Faktörü", sym: "PF" },
    ],
    compute: ({ kW, E, PF }) => ({
      "I (A)": (kW * 1000) / (E * SQRT3 * PF),
    }),
  },
];

// ── Standard Units Table ───────────────────────────────────────────────────
const units = [
  { name: "Kilo Volt Amper", sym: "kVA", desc: "Görünür güç birimi" },
  { name: "KiloWatt", sym: "kW", desc: "1000 watt = 1 kW" },
  { name: "Amper", sym: "I", desc: "Akım şiddeti birimi" },
  { name: "Volt", sym: "E", desc: "Gerilim birimi" },
  { name: "Motor Gücü", sym: "HP", desc: "Beygir gücü (horsepower)" },
  { name: "Devir Sayısı", sym: "RPM", desc: "Dakikadaki devir sayısı" },
  { name: "Güç Faktörü", sym: "PF", desc: "Aktif / görünür güç oranı" },
  { name: "Rotor Kutup Sayısı", sym: "P", desc: "Jeneratör rotor kutup çifti" },
  { name: "Frekans", sym: "f", desc: "Hertz (Hz) cinsinden frekans" },
  { name: "Verim Yüzdesi", sym: "%EFF", desc: "Efficiency — verim oranı" },
];

// ── Hero ──────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-white pt-10 pb-0 overflow-hidden">
      <div className="container-xl">
        <div className="relative grid grid-cols-1 lg:grid-cols-5 items-end gap-0">
          <div className="relative z-10 bg-white lg:col-span-2 pb-10 pt-6 pr-8">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-4">
              Teknik Bilgiler
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-brand-black leading-tight">
              GÜÇ
              <br />
              HESABI
            </h1>
            <p className="text-gray-500 text-sm mt-4 max-w-xs">
              Enerji sistemleri için güç, akım, verim ve frekans hesaplama araçları
            </p>
            <div
              className="absolute bottom-0 right-0 hidden lg:block"
              style={{
                width: 0,
                height: 0,
                borderStyle: "solid",
                borderWidth: "0 0 56px 56px",
                borderColor: "transparent transparent white transparent",
                zIndex: 20,
              }}
            />
            <div
              className="absolute bottom-0 right-0 hidden lg:block"
              style={{
                width: 56,
                height: 56,
                background: "#FB5800",
                clipPath: "polygon(0 100%, 100% 100%, 100% 0)",
                zIndex: 15,
              }}
            />
          </div>
          <div
            className="lg:col-span-3 relative overflow-hidden"
            style={{ borderRadius: "16px 16px 16px 0", minHeight: "360px" }}
          >
            <img
              src="/images/gorsel-7.png"
              alt="Motus Sistem — Güç Hesabı"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-black/30" />
            {/* Floating formula chips */}
            <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
              {["kVA = kW ÷ PF", "f = RPM × P ÷ 120", "I = kVA × 1000 ÷ (E × √3)"].map(
                (f) => (
                  <span
                    key={f}
                    className="bg-brand-black/70 text-brand-orange text-[10px] font-mono px-3 py-1 backdrop-blur-sm"
                    style={{ borderRadius: "3px" }}
                  >
                    {f}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Intro ─────────────────────────────────────────────────────────────────
function Intro() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-4">
              Hesaplama Araçları
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase leading-tight mb-6">
              DOĞRU GÜÇ
              <br />
              SEÇİMİ İÇİN
              <br />
              HESAPLAMALAR
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>
                Jeneratör, UPS ve pano sistemlerinin doğru boyutlandırılması
                için güç, akım ve frekans hesaplamalarının eksiksiz yapılması
                kritik öneme sahiptir.
              </p>
              <p>
                Aşağıdaki araçlarla kW, kVA, HP ve amper arasındaki
                dönüşümleri hızlıca gerçekleştirebilir; ihtiyacınız olan
                sistem gücünü kolayca hesaplayabilirsiniz.
              </p>
            </div>
          </div>

          {/* Dark accent card */}
          <div
            className="relative overflow-hidden bg-brand-black p-10 flex flex-col justify-center min-h-[280px]"
            style={{ borderRadius: "12px 12px 0 12px" }}
          >
            <span
              className="absolute inset-0 flex items-center justify-center font-extrabold text-white/5 select-none pointer-events-none uppercase"
              style={{ fontSize: "7rem", lineHeight: 1 }}
            >
              kVA
            </span>
            <div className="absolute left-0 top-0 h-full w-2 bg-brand-orange" />
            <div className="relative z-10 space-y-3">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-orange">
                Temel Formüller
              </p>
              {[
                "kVA = kW ÷ PF",
                "kW = kVA × PF",
                "HP = kW ÷ 0.746",
                "f = (RPM × P) ÷ 120",
                "I = (kVA × 1000) ÷ (E × √3)",
              ].map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                  <span className="text-white/80 text-sm font-mono">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Calculators Grid ──────────────────────────────────────────────────────
function Calculators() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container-xl">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-3">
            Hesaplama Araçları
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase">
            HESAPLAMALAR
          </h2>
          <div className="w-10 h-0.5 bg-gray-300 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {calcs.map((c) => (
            <CalcCard key={c.id} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Standard Units Table ───────────────────────────────────────────────────
function UnitsTable() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container-xl">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-3">
            Referans
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase">
            STANDART BİRİMLER
          </h2>
          <div className="w-10 h-0.5 bg-gray-300 mx-auto mt-4" />
        </div>

        <div className="max-w-3xl mx-auto overflow-hidden" style={{ borderRadius: "12px 12px 0 12px", boxShadow: "0 1px 8px rgba(0,0,0,0.07)" }}>
          {/* Table header */}
          <div className="grid grid-cols-12 bg-brand-black px-6 py-4">
            <span className="col-span-5 text-xs font-bold text-white/60 uppercase tracking-widest">
              Birim Adı
            </span>
            <span className="col-span-2 text-xs font-bold text-white/60 uppercase tracking-widest text-center">
              Sembol
            </span>
            <span className="col-span-5 text-xs font-bold text-white/60 uppercase tracking-widest">
              Açıklama
            </span>
          </div>

          {units.map((u, i) => (
            <div
              key={u.sym}
              className={`grid grid-cols-12 px-6 py-4 items-center ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50"
              } border-b border-gray-100 last:border-0`}
            >
              <span className="col-span-5 text-sm font-semibold text-brand-black">
                {u.name}
              </span>
              <span className="col-span-2 text-center">
                <span
                  className="inline-block bg-brand-black text-brand-orange text-xs font-mono font-bold px-3 py-1"
                  style={{ borderRadius: "4px" }}
                >
                  {u.sym}
                </span>
              </span>
              <span className="col-span-5 text-xs text-gray-500 leading-relaxed">
                {u.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA Banner ────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section
      className="py-16"
      style={{
        background:
          "linear-gradient(120deg,#e6823e 0%,#c86a44 25%,#7a4d66 60%,#213348 100%)",
      }}
    >
      <div className="container-xl text-center">
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-white/60 mb-4">
          Doğru Boyutlandırma İçin
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase mb-8">
          UZMAN DESTEĞİ ALIN
        </h2>
        <Link
          to="/iletisim"
          className="inline-flex items-center gap-2 bg-white text-brand-black px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors"
        >
          Bizimle İletişime Geçin
        </Link>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────
export default function GucHesabiPage() {
  return (
    <>
      <Hero />
      <Intro />
      <Calculators />
      <UnitsTable />
      <CTABanner />
    </>
  );
}
