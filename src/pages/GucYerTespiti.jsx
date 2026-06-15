import { Link } from "react-router-dom";

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-white pt-10 pb-0 overflow-hidden">
      <div className="container-xl">
        <div className="relative grid grid-cols-1 lg:grid-cols-5 items-end gap-0">
          <div className="relative z-10 bg-white lg:col-span-2 pb-10 pt-6 pr-8">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-4">
              Hizmetler
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-brand-black leading-tight">
              GÜÇ VE
              <br />
              YER
              <br />
              TESPİTİ
            </h1>
            <p className="text-gray-500 text-sm mt-4 max-w-xs">
              Doğru güç analizi ve uygun yerleşim planlaması ile güvenilir
              enerji çözümleri
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
              src="/images/gorsel-1.png"
              alt="Motus Sistem — Güç ve Yer Tespiti"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-black/20" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Intro ─────────────────────────────────────────────────────────────────────
function Intro() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container-xl">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-4">
            Yaklaşımımız
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase leading-tight mb-6">
            HER PROJENİN İLK ADIMI
            <br />
            DOĞRU ANALİZDİR
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-base">
            <p>
              Motus Sistem olarak, işletmenizin enerji ihtiyacını ve saha
              koşullarını detaylı şekilde değerlendirerek en uygun çözümü
              belirliyoruz.
            </p>
            <p>
              Uzman ekibimiz tarafından yapılan keşif çalışmaları ile gerekli
              güç hesabı yapılır, jeneratör, UPS ve pano sistemlerinin
              konumlandırılacağı alanlar analiz edilir. Böylece hem teknik hem
              de ekonomik açıdan en verimli enerji altyapısı oluşturulur.
            </p>
            <p className="font-medium text-brand-black">
              Doğru güç seçimi, doğru konumlandırma ve profesyonel mühendislik
              yaklaşımıyla projelerinize değer katıyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Steps ─────────────────────────────────────────────────────────────────────
const steps = [
  {
    number: "1",
    title: "Keşif ve Yer Tespiti",
    desc: "Saha koşulları incelenir, ekipman yerleşimi ve altyapı ihtiyaçları belirlenir.",
    img: "/images/tes-1.png",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M16 2C11.03 2 7 6.03 7 11c0 7 9 19 9 19s9-12 9-19c0-4.97-4.03-9-9-9z" />
        <circle cx="16" cy="11" r="3" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Güç Analizi ve Projelendirme",
    desc: "Yük analizi yapılır, doğru güç seçimi ve sistem tasarımı gerçekleştirilir.",
    img: "/images/tes-2.png",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M17 3L6 18h9l-2 11 11-15h-9l2-11z" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Üretim ve Kurulum",
    desc: "Ekipmanlar üretilir, sahaya sevk edilir ve uzman ekibimiz tarafından kurulumu gerçekleştirilir.",
    img: "/images/tes-3.png",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M27 7l-2.5 2.5M5 27l9.5-9.5" />
        <path d="M20.5 4.5a4.95 4.95 0 0 1 7 7l-3 3-7-7 3-3z" />
        <path d="M11.5 13.5l7 7-8 4.5-3.5-3.5 4.5-8z" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Test ve Devreye Alma",
    desc: "Sistem testleri yapılır, devreye alma işlemleri tamamlanır ve teslim edilir.",
    img: "/images/tes-4.png",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <circle cx="16" cy="16" r="13" />
        <path d="M10 16l4.5 4.5 7.5-8" strokeWidth="2.5" />
      </svg>
    ),
  },
];

function Steps() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-xl">
        {/* Photo strip — full width, 4 equal columns, no gap */}
        <div className="flex w-full mb-0 overflow-hidden rounded-xl">
          {steps.map((s, i) => (
            <div
              key={s.number}
              className="relative flex-1 overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={s.img}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-black/20" />
              <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center shadow">
                <span className="text-white font-extrabold text-sm">
                  {s.number}
                </span>
              </div>
              {/* thin separator line between photos */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-0 h-full w-px bg-white/30" />
              )}
            </div>
          ))}
        </div>

        {/* Icon + text — 4 equal columns */}
        <div className="grid grid-cols-4 gap-6 pt-8">
          {steps.map((s) => (
            <div key={s.number} className="flex flex-col">
              <div className="w-14 h-14 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center text-brand-black mb-4">
                {s.icon}
              </div>
              <p className="text-xs font-bold text-brand-orange mb-1">
                {s.number}.
              </p>
              <h3 className="font-extrabold text-brand-black text-xs uppercase tracking-wide mb-2 leading-snug">
                {s.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA Banner ────────────────────────────────────────────────────────────────
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
          Doğru Analizle Başlar
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase mb-8">
          PROJENİZ İÇİN ÜCRETSİZ KE​ŞİF YAPALIM
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

// ── Page ──────────────────────────────────────────────────────────────────────
export default function GucYerTespiti() {
  return (
    <>
      <Hero />
      <Intro />
      <Steps />
      <CTABanner />
    </>
  );
}
