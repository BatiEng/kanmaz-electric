import { Link } from "react-router-dom";

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-white pt-10 pb-0 overflow-hidden">
      <div className="container-xl">
        <div className="relative grid grid-cols-1 lg:grid-cols-5 items-end gap-0">
          <div className="relative z-10 bg-white lg:col-span-2 pb-10 pt-6 pr-8">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-4">
              Ürünler
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-brand-black leading-tight">
              PANO
              <br />
              SİSTEMLERİ
            </h1>
            <p className="text-gray-500 text-sm mt-4 max-w-xs">
              Projeye özel, uluslararası standartlarda pano çözümleri
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
            style={{ borderRadius: "16px 16px 16px 0", minHeight: "380px" }}
          >
            <img
              src="/images/panos.png"
              alt="Motus Sistem — Pano Sistemleri"
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
    <section className="py-20 md:py-28 bg-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-4">
              Genel Bakış
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase leading-tight mb-6">
              PROJEYİ ÖZEL
              <br />
              PANO ÇÖZÜMLERI
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              Motus Sistem, enerji altyapılarının güvenli, verimli ve kesintisiz
              şekilde yönetilebilmesi için projeye özel pano çözümleri
              sunmaktadır. Endüstriyel tesislerden ticari yapılara, veri
              merkezlerinden kritik altyapı projelerine kadar birçok farklı
              uygulama için uluslararası standartlara uygun pano sistemleri
              tasarlamakta ve üretmektedir.
            </p>
          </div>

          {/* RIGHT: dark accent card */}
          <div
            className="relative overflow-hidden bg-brand-black p-10 flex flex-col justify-center min-h-[300px]"
            style={{ borderRadius: "12px 12px 0 12px" }}
          >
            <span
              className="absolute inset-0 flex items-center justify-center font-extrabold text-white/5 select-none pointer-events-none uppercase"
              style={{ fontSize: "8rem", lineHeight: 1 }}
            >
              PANO
            </span>
            <div className="absolute left-0 top-0 h-full w-2 bg-brand-orange" />
            <div className="relative z-10 space-y-4">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-orange">
                Uygulama Alanları
              </p>
              {[
                "Endüstriyel Tesisler",
                "Veri Merkezleri",
                "Hastaneler",
                "Ticari Yapılar",
                "Kritik Enerji Altyapıları",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                  <span className="text-white/80 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Pano Types ────────────────────────────────────────────────────────────────
const panoTypes = [
  {
    title: "Transfer Panoları",
    desc: "Transfer panoları, şebeke enerjisi ile jeneratör arasında otomatik veya manuel geçiş sağlayarak enerji sürekliliğini garanti altına alır. Elektrik kesintisi durumunda jeneratörün devreye girmesini ve enerji geri geldiğinde sistemin güvenli şekilde şebekeye dönmesini sağlar. Kritik yüklerin bulunduğu tesislerde kesintisiz işletme sürekliliği için önemli bir görev üstlenir.",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-12 h-12">
        <rect x="8" y="10" width="32" height="28" rx="3" opacity=".12" />
        <rect x="8" y="10" width="32" height="28" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M18 24h12M24 18v12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity=".5" />
        <circle cx="16" cy="18" r="2.5" opacity=".4" />
        <circle cx="32" cy="30" r="2.5" opacity=".4" />
        <path d="M16 20v4h4M32 28v-4h-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity=".5" />
      </svg>
    ),
  },
  {
    title: "Dağıtım Panoları",
    desc: "Dağıtım panoları, elektrik enerjisinin tesis içerisindeki farklı bölümlere güvenli ve kontrollü şekilde dağıtılmasını sağlar. Sistem koruma elemanları, ölçüm ekipmanları ve yük yönetim bileşenleri ile donatılarak enerji güvenliğini artırırken bakım ve işletme süreçlerini kolaylaştırır.",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-12 h-12">
        <rect x="8" y="8" width="32" height="32" rx="3" opacity=".12" />
        <rect x="8" y="8" width="32" height="32" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="24" cy="20" r="4" opacity=".3" />
        <line x1="24" y1="24" x2="24" y2="28" stroke="currentColor" strokeWidth="2" />
        <line x1="24" y1="28" x2="16" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="28" x2="24" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="28" x2="32" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="36" r="2" opacity=".4" />
        <circle cx="24" cy="36" r="2" opacity=".4" />
        <circle cx="32" cy="36" r="2" opacity=".4" />
      </svg>
    ),
  },
  {
    title: "Senkronizasyon Panoları",
    desc: "Senkronizasyon panoları, birden fazla jeneratörün veya jeneratör ile şebekenin eş zamanlı çalışmasını sağlayan gelişmiş kontrol sistemleridir. Yük paylaşımı, yedeklilik ve enerji verimliliği sağlayarak büyük güç ihtiyaçlarına sahip tesislerde maksimum performans sunar.",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-12 h-12">
        <circle cx="14" cy="24" r="9" opacity=".12" />
        <circle cx="34" cy="24" r="9" opacity=".12" />
        <circle cx="14" cy="24" r="9" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="34" cy="24" r="9" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M21 17l6 7-6 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity=".5" />
      </svg>
    ),
  },
];

function PanoTypes() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="container-xl">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-3">
            Pano Çeşitleri
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase">
            ÇÖZÜM YELPAZEMİZ
          </h2>
          <div className="w-10 h-0.5 bg-gray-300 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {panoTypes.map((p) => (
            <div
              key={p.title}
              className="bg-white p-8 flex flex-col gap-5 hover:shadow-md transition-shadow"
              style={{ borderRadius: "12px 12px 0 12px" }}
            >
              <div className="text-brand-black">{p.icon}</div>
              <h3 className="font-extrabold text-brand-black text-sm uppercase tracking-wide">
                {p.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Closing Text + CTA ────────────────────────────────────────────────────────
function Closing() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-4">
              Mühendislik Yaklaşımı
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase leading-tight mb-6">
              TASARIMDAN
              <br />
              DEVREYE ALMAYA
              <br />
              TAM DESTEK
            </h2>
            <p className="text-gray-600 leading-relaxed text-base mb-8">
              Motus Sistem, projelendirme aşamasından üretim ve devreye alma
              süreçlerine kadar tüm pano sistemlerini uzman mühendislik
              yaklaşımıyla yöneterek güvenilir, uzun ömürlü ve yüksek
              performanslı çözümler sunmaktadır.
            </p>
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-2 bg-brand-black text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors"
            >
              Teklif Alın
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                label: "Projelendirme",
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
                    <rect x="6" y="6" width="28" height="28" rx="3" />
                    <line x1="12" y1="20" x2="28" y2="20" />
                    <line x1="12" y1="14" x2="22" y2="14" />
                    <line x1="12" y1="26" x2="20" y2="26" />
                    <path d="M26 24l6 6" strokeWidth="2.5" />
                  </svg>
                ),
              },
              {
                label: "Üretim",
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
                    <path d="M8 32l6-12 6 6 5-8 7 14H8z" />
                    <circle cx="30" cy="12" r="4" />
                    <path d="M30 8V6M30 18v-2M26 12h-2M36 12h-2M27.17 9.17l-1.42-1.42M34.24 16.24l-1.41-1.41M34.24 9.17l-1.41 1.42M27.17 16.24l-1.42-1.41" strokeWidth="1.5" />
                  </svg>
                ),
              },
              {
                label: "Montaj",
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
                    <path d="M14 8a6 6 0 0 0 0 8l12 12a6 6 0 0 0 8-8L22 8a6 6 0 0 0-8 0z" />
                    <path d="M8 32l4-4" />
                    <circle cx="11" cy="29" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                ),
              },
              {
                label: "Devreye Alma",
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
                    <circle cx="20" cy="20" r="13" />
                    <path d="M13 20l5 5 9-9" strokeWidth="2.5" />
                  </svg>
                ),
              },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-gray-50 p-6 flex flex-col items-center justify-center gap-3 text-center"
                style={{ borderRadius: "12px 12px 0 12px" }}
              >
                <span className="text-brand-black">{s.icon}</span>
                <span className="text-xs font-extrabold uppercase tracking-wide text-brand-black">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
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
          Güvenilir Enerji Altyapısı
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase mb-8">
          PROJENİZ İÇİN EN DOĞRU PANO ÇÖZÜMÜNÜ SUNALIM
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
export default function PanolarPage() {
  return (
    <>
      <Hero />
      <Intro />
      <PanoTypes />
      <Closing />
      <CTABanner />
    </>
  );
}
