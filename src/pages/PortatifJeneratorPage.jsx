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
              PORTATİF
              <br />
              JENERATÖR
            </h1>
            <p className="text-gray-500 text-sm mt-4 max-w-xs">
              3 – 15 kVA güç aralığında taşınabilir enerji çözümleri
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
              src="/images/port-jen.png"
              alt="Motus Sistem — Portatif Jeneratör"
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
          {/* LEFT: text */}
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-4">
              Genel Bakış
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase leading-tight mb-6">
              HER YERDE
              <br />
              HAZIR ENERJİ
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>
                Motus Sistem Portatif Jeneratör Serisi; kompakt tasarımı, yüksek
                performanslı motor yapısı ve kullanıcı dostu özellikleriyle
                ihtiyaç duyulan her noktada güvenilir enerji çözümleri
                sunmaktadır. Taşınabilir yapısı sayesinde tarımsal faaliyetler,
                inşaat ve saha çalışmaları, organizasyonlar, karavan kullanımı
                ve mobil projeler gibi birçok farklı alanda pratik kullanım
                avantajı sağlar.
              </p>
              <p>
                Benzinli, dizel ve inverter jeneratör seçenekleriyle sunulan
                modeller; 3 kVA'dan 15 kVA'a kadar geniş güç aralığıyla farklı
                ihtiyaçlara uygun çözümler sunmaktadır. Düşük yakıt tüketimi,
                sessiz çalışma özelliği ve yüksek verimlilik sağlayan motor
                teknolojileri sayesinde ekonomik ve çevre dostu kullanım imkânı
                sağlamaktadır.
              </p>
              <p>
                İnverter modeller, hassas elektronik cihazlar için stabil enerji
                çıkışı sunarken; kompakt ve dayanıklı yapıları sayesinde kolay
                taşınabilirlik ve uzun ömürlü kullanım avantajı sağlar.
              </p>
            </div>
          </div>

          {/* RIGHT: power range card */}
          <div
            className="relative overflow-hidden bg-brand-black p-10 flex flex-col justify-center min-h-[360px]"
            style={{ borderRadius: "12px 12px 0 12px" }}
          >
            <span
              className="absolute inset-0 flex items-center justify-center font-extrabold text-white/5 select-none pointer-events-none"
              style={{ fontSize: "10rem", lineHeight: 1 }}
            >
              kVA
            </span>
            <div className="absolute left-0 top-0 h-full w-2 bg-brand-orange" />
            <div className="relative z-10">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-orange mb-6">
                Güç Aralığı
              </p>
              <p className="text-white text-5xl font-extrabold mb-2">3</p>
              <p className="text-white/40 text-lg font-light mb-1">— ile —</p>
              <p className="text-white text-5xl font-extrabold mb-6">15 kVA</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Benzinli, dizel ve inverter seçenekleriyle
                her ihtiyaca uygun taşınabilir çözüm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Model Types ───────────────────────────────────────────────────────────────
const modelTypes = [
  {
    title: "Benzinli Jeneratörler",
    desc: "Hafif yapısı ve kolay yakıt temini ile saha çalışmaları ve organizasyonlar için ideal. Hızlı devreye alma avantajı sunar.",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
        <path d="M16 8h16v6H16z" opacity=".3" />
        <rect x="10" y="14" width="28" height="24" rx="3" opacity=".15" />
        <rect x="10" y="14" width="28" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M20 22h8M20 28h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".6" />
        <circle cx="36" cy="20" r="4" opacity=".4" />
      </svg>
    ),
  },
  {
    title: "Dizel Portatif",
    desc: "Yüksek yakıt verimliliği ve uzun çalışma süresi ile inşaat sahaları ve tarımsal kullanım için tercih edilen sağlam seçenek.",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
        <rect x="8" y="16" width="32" height="22" rx="3" opacity=".15" />
        <rect x="8" y="16" width="32" height="22" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <rect x="14" y="22" width="10" height="10" rx="1" opacity=".35" />
        <path d="M30 24h6M30 28h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".5" />
        <path d="M20 10l4 6M24 10l4 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".4" />
      </svg>
    ),
  },
  {
    title: "İnverter Jeneratörler",
    desc: "Hassas elektronik cihazlar için temiz ve stabil enerji çıkışı. Sessiz çalışma ve kompakt yapı ile karavan ve etkinlik kullanımında ideal.",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
        <rect x="6" y="14" width="36" height="22" rx="4" opacity=".12" />
        <rect x="6" y="14" width="36" height="22" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M14 25l5-5 5 5 5-5 5 5" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function ModelTypes() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="container-xl">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-3">
            Model Seçenekleri
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase">
            İHTİYACINIZA UYGUN MODEL
          </h2>
          <div className="w-10 h-0.5 bg-gray-300 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modelTypes.map((m) => (
            <div
              key={m.title}
              className="bg-white p-8 flex flex-col gap-4 hover:shadow-md transition-shadow"
              style={{ borderRadius: "12px 12px 0 12px" }}
            >
              <div className="text-brand-black">{m.icon}</div>
              <h3 className="font-extrabold text-brand-black text-sm uppercase tracking-wide">
                {m.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Features ──────────────────────────────────────────────────────────────────
const features = [
  "Otomatik devre kesici ile güvenli kullanım",
  "Kompakt, dayanıklı ve pratik tasarım",
  "Kurulum gerektirmeyen, kullanıma hazır çözüm",
  "Elektrikli Çalıştırma Seçeneği",
  "Yakıt Verimliliği Sağlayan Eco Modu",
  "LED Göstergeli Kontrol Paneli",
  "Uzun süreli çalışmalara uygun tasarım",
];

function Features() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT: description */}
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-4">
              Neden Motus Sistem?
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase leading-tight mb-6">
              GÜÇLÜ,
              <br />
              GÜVENİLİR
              <br />
              VE MODERN
            </h2>
            <p className="text-gray-600 leading-relaxed text-base mb-8">
              Motus Sistem portatif jeneratörleri, kesintisiz enerji
              ihtiyacınız için güçlü, güvenilir ve modern çözümler
              sunmaktadır. Satış öncesinden satış sonrasına kadar uzman teknik
              ekibimiz her aşamada yanınızdadır.
            </p>
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-2 bg-brand-black text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors"
            >
              Teklif Alın
            </Link>
          </div>

          {/* RIGHT: feature list */}
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-6">
              Öne Çıkan Özellikler
            </p>
            <ul className="divide-y divide-gray-100">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-4 py-4">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: "#FB5800" }}
                  >
                    <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3">
                      <path
                        d="M3 8l3.5 3.5L13 5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-sm font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────────────
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
          Taşınabilir Güç, Kesintisiz Enerji
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase mb-8">
          SİZE UYGUN MODELİ BİRLİKTE BELİRLEYELİM
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
export default function PortatifJeneratorPage() {
  return (
    <>
      <Hero />
      <Intro />
      <ModelTypes />
      <Features />
      <CTABanner />
    </>
  );
}
