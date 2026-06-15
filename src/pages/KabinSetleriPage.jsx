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
              JENERATÖR
              <br />
              KABİN
              <br />
              SETLERİ
            </h1>
            <p className="text-gray-500 text-sm mt-4 max-w-xs">
              Projeye özel enerji kabinleri ve konteyner çözümleri
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
              src="/images/kab1.png"
              alt="Motus Sistem — Jeneratör Kabin Setleri"
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
              ENERJİ KABİNLERİ
              <br />
              VE KONTEYNER
              <br />
              ÇÖZÜMLERİ
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>
                Motus Sistem, farklı güç ve kapasite ihtiyaçlarına uygun olarak
                özel tasarım enerji kabinleri ve konteyner çözümleri
                üretmektedir. Jeneratör, UPS sistemleri, elektrik panoları,
                dağıtım sistemleri ve hibrit enerji altyapıları için geliştirilen
                kabin ve konteynerler; ekipmanların güvenli, düzenli ve uzun
                ömürlü şekilde çalışmasını sağlamak amacıyla projeye özel olarak
                tasarlanmaktadır.
              </p>
              <p>
                Her proje farklı ihtiyaçlar barındırdığı için Motus Sistem,
                standart çözümler yerine müşteri taleplerine ve saha koşullarına
                uygun mühendislik çalışmaları gerçekleştirmektedir.
              </p>
            </div>
          </div>

          {/* RIGHT: second photo */}
          <div
            className="relative overflow-hidden aspect-[4/3]"
            style={{ borderRadius: "12px 12px 0 12px" }}
          >
            <img
              src="/images/kab2.png"
              alt="Motus Sistem — Enerji Kabin Detay"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Technical Details ─────────────────────────────────────────────────────────
function TechnicalDetails() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="container-xl">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-3">
            Teknik Detaylar
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase">
            TASARIMDA DİKKAT EDİLEN UNSURLAR
          </h2>
          <div className="w-10 h-0.5 bg-gray-300 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "İklimlendirme ve Havalandırma",
              icon: (
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                  <circle cx="20" cy="20" r="5" />
                  <path d="M20 4v4M20 32v4M4 20h4M32 20h4M7.76 7.76l2.83 2.83M29.41 29.41l2.83 2.83M7.76 32.24l2.83-2.83M29.41 10.59l2.83-2.83" />
                </svg>
              ),
            },
            {
              title: "Ses İzolasyonu",
              icon: (
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                  <path d="M10 14H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4l8 6V8l-8 6z" />
                  <path d="M26 14s3 2 3 6-3 6-3 6" />
                  <path d="M30 10s5 3.5 5 10-5 10-5 10" />
                </svg>
              ),
            },
            {
              title: "Yangın Güvenliği",
              icon: (
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                  <path d="M20 34c-6.63 0-12-5.37-12-12 0-4.5 2.5-8.5 6-10.5 0 2 1 4 3 5-1-3 1-7 4-9 0 4 2 7 5 9 1-2 1-4 0-6 3 2 6 6 6 11.5 0 6.63-5.37 12-12 12z" />
                  <path d="M20 28c-2.21 0-4-1.79-4-4 0-1.5.83-2.83 2-3.5 0 .67.33 1.33 1 1.67-.33-1 .33-2.33 1.33-3 0 1.33.67 2.33 1.67 3 .33-.67.33-1.33 0-2 1 .67 2 2 2 3.83 0 2.21-1.79 4-4 4z" />
                </svg>
              ),
            },
            {
              title: "Kablo Yönetimi",
              icon: (
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                  <rect x="4" y="10" width="32" height="20" rx="3" />
                  <line x1="10" y1="16" x2="30" y2="16" />
                  <line x1="10" y1="20" x2="24" y2="20" />
                  <line x1="10" y1="24" x2="20" y2="24" />
                  <path d="M28 20h4M28 24h4" />
                </svg>
              ),
            },
            {
              title: "Aydınlatma Sistemleri",
              icon: (
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                  <path d="M20 6a9 9 0 0 1 9 9c0 3.5-2 6.5-5 8v3H16v-3c-3-1.5-5-4.5-5-8a9 9 0 0 1 9-9z" />
                  <line x1="16" y1="30" x2="24" y2="30" />
                  <line x1="17" y1="33" x2="23" y2="33" />
                  <line x1="20" y1="2" x2="20" y2="4" />
                  <line x1="8" y1="8" x2="9.5" y2="9.5" />
                  <line x1="32" y1="8" x2="30.5" y2="9.5" />
                </svg>
              ),
            },
            {
              title: "Erişim Sistemleri",
              icon: (
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                  <rect x="8" y="16" width="24" height="18" rx="2" />
                  <path d="M14 16v-4a6 6 0 0 1 12 0v4" />
                  <circle cx="20" cy="25" r="2.5" />
                  <line x1="20" y1="27.5" x2="20" y2="30" />
                </svg>
              ),
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-8 flex flex-col gap-4 hover:shadow-md transition-shadow"
              style={{ borderRadius: "12px 12px 0 12px" }}
            >
              <div className="text-brand-black">{item.icon}</div>
              <h3 className="font-extrabold text-brand-black text-sm uppercase tracking-wide">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Solution Types ────────────────────────────────────────────────────────────
function SolutionTypes() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT: solution list */}
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-4">
              Çözüm Tipleri
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase leading-tight mb-8">
              KULLANIM
              <br />
              SENARYOLARINA
              <br />
              GÖRE TASARIM
            </h2>
            <ul className="divide-y divide-gray-100">
              {[
                "Jeneratör konteynerleri",
                "UPS konteynerleri",
                "Elektrik ve dağıtım pano kabinleri",
                "Senkronizasyon ve kontrol merkezleri",
                "Mobil enerji istasyonları",
                "Özel projelere yönelik mühendislik çözümleri",
              ].map((f) => (
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

          {/* RIGHT: usage areas dark card */}
          <div
            className="relative overflow-hidden bg-brand-black p-10 flex flex-col justify-center min-h-[420px]"
            style={{ borderRadius: "12px 12px 0 12px" }}
          >
            <span
              className="absolute inset-0 flex items-end justify-end font-extrabold text-white/5 select-none pointer-events-none pr-6 pb-4"
              style={{ fontSize: "9rem", lineHeight: 1 }}
            >
              KABİN
            </span>
            <div className="absolute left-0 top-0 h-full w-2 bg-brand-orange" />
            <div className="relative z-10">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-orange mb-6">
                Uygulama Alanları
              </p>
              <div className="space-y-3">
                {[
                  "Telekomünikasyon Tesisleri",
                  "Veri Merkezleri",
                  "Sanayi Kuruluşları",
                  "Savunma Sanayii Projeleri",
                  "Şantiyeler",
                  "Enerji Santralleri",
                  "Kritik Altyapı Uygulamaları",
                ].map((a) => (
                  <div key={a} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                    <span className="text-white/80 text-sm font-medium">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Closing ───────────────────────────────────────────────────────────────────
function Closing() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-xl">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed text-base">
            Projelendirme aşamasından üretime, montajdan devreye almaya kadar
            tüm süreçler uzman ekibimiz tarafından yönetilmekte; güvenilir,
            estetik ve fonksiyonel enerji altyapıları oluşturulmaktadır.
            Motus Sistem, enerji ekipmanlarını yalnızca koruyan değil, aynı
            zamanda işletme verimliliğini artıran modern kabin ve konteyner
            çözümleri sunmaktadır.
          </p>
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
          Projeye Özel Mühendislik
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase mb-8">
          PROJENİZ İÇİN KABİN ÇÖZÜMÜ TASARLAYALIM
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
export default function KabinSetleriPage() {
  return (
    <>
      <Hero />
      <Intro />
      <TechnicalDetails />
      <SolutionTypes />
      <Closing />
      <CTABanner />
    </>
  );
}
