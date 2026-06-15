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
              PERİYODİK
              <br />
              BAKIM VE
              <br />
              SERVİS
            </h1>
            <p className="text-gray-500 text-sm mt-4 max-w-xs">
              Kesintisiz çalışma için profesyonel bakım hizmetleri
            </p>
            <div className="absolute bottom-0 right-0 hidden lg:block" style={{ width: 0, height: 0, borderStyle: "solid", borderWidth: "0 0 56px 56px", borderColor: "transparent transparent white transparent", zIndex: 20 }} />
            <div className="absolute bottom-0 right-0 hidden lg:block" style={{ width: 56, height: 56, background: "#FB5800", clipPath: "polygon(0 100%, 100% 100%, 100% 0)", zIndex: 15 }} />
          </div>
          <div className="lg:col-span-3 relative overflow-hidden" style={{ borderRadius: "16px 16px 16px 0", minHeight: "360px" }}>
            <img src="/images/jen-bak.png" alt="Motus Sistem — Periyodik Bakım ve Servis" className="absolute inset-0 w-full h-full object-cover" />
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-4">
              Yaklaşımımız
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase leading-tight mb-6">
              GÜVENİLİR
              <br />
              ÇALIŞMA İÇİN
              <br />
              DÜZENLİ BAKIM
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>
                Enerji sistemlerinin güvenilir ve kesintisiz çalışabilmesi için
                düzenli bakım büyük önem taşımaktadır. Motus Sistem olarak
                jeneratör, UPS ve pano sistemlerinizin performansını korumak,
                olası arızaların önüne geçmek ve ekipman ömrünü uzatmak
                amacıyla profesyonel periyodik bakım hizmetleri sunuyoruz.
              </p>
              <p>
                Uzman teknik ekibimiz tarafından gerçekleştirilen bakım
                çalışmaları kapsamında mekanik, elektriksel ve elektronik
                kontroller detaylı şekilde yapılır. Akü sistemleri, sıvı
                seviyeleri, filtreler, bağlantılar, koruma ekipmanları ve
                çalışma parametreleri kontrol edilerek sistemlerin her zaman
                devreye hazır olması sağlanır.
              </p>
            </div>
          </div>

          {/* Dark accent card */}
          <div className="relative overflow-hidden bg-brand-black p-10 flex flex-col justify-center min-h-[320px]" style={{ borderRadius: "12px 12px 0 12px" }}>
            <span className="absolute inset-0 flex items-center justify-center font-extrabold text-white/5 select-none pointer-events-none" style={{ fontSize: "8rem", lineHeight: 1 }}>
              SERVİS
            </span>
            <div className="absolute left-0 top-0 h-full w-2 bg-brand-orange" />
            <div className="relative z-10 space-y-4">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-orange">
                Bakım Kapsamı
              </p>
              {[
                "Mekanik ve elektriksel kontroller",
                "Akü sistem kontrolü",
                "Sıvı seviyeleri ve filtre değişimi",
                "Bağlantı ve koruma ekipmanı denetimi",
                "Çalışma parametreleri ölçümü",
                "Sistemi devreye hazır tutma",
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

// ── Service Cards ─────────────────────────────────────────────────────────────
const services = [
  {
    title: "Jeneratör Bakımı",
    img: "/images/jen-bak.png",
    desc: "Yağ, filtre, soğutma suyu ve akü kontrollerinden motor ve alternatör testlerine kadar kapsamlı jeneratör periyodik bakımı gerçekleştirilir. Sistemin her an devreye hazır olması sağlanır.",
    items: [
      "Yağ ve filtre değişimi",
      "Soğutma sistemi kontrolü",
      "Akü ve şarj sistemi testi",
      "Motor ve alternatör ölçümleri",
      "Yakıt sistemi denetimi",
      "Yük testi ve performans kontrolü",
    ],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="8" width="26" height="16" rx="2" />
        <path d="M9 8V6M23 8V6" />
        <path d="M9 14h14M9 18h8" />
        <circle cx="24" cy="18" r="3" />
      </svg>
    ),
  },
  {
    title: "UPS Bakımı",
    img: "/images/ups-bak.png",
    desc: "UPS sistemlerinde akü kapasitesi ölçümü, inverter ve şarj devresi kontrolü, soğutma sistemi bakımı ve yazılım güncellemeleri uzman ekibimizce düzenli olarak gerçekleştirilir.",
    items: [
      "Akü kapasitesi ve ömür testi",
      "İnverter ve şarj devresi kontrolü",
      "Soğutma ve fan sistemleri",
      "Bağlantı ve kablo denetimi",
      "Yazılım ve parametre kontrolü",
      "Yük geçiş testi",
    ],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M17 4L8 17h8l-2 11 11-15h-8l2-11z" />
      </svg>
    ),
  },
  {
    title: "Pano Kontrolü",
    img: "/images/pano-bak.png",
    desc: "Elektrik panoları, dağıtım ve transfer panolarında bağlantı kontrolü, termal kamera ile sıcak nokta tespiti, sigorta ve koruma rölesi denetimi profesyonel ekibimiz tarafından yapılır.",
    items: [
      "Bağlantı ve klemens denetimi",
      "Termal kamera ile sıcak nokta tespiti",
      "Sigorta ve kesici kontrolü",
      "Koruma rölesi kalibrasyonu",
      "Topraklama ölçümü",
      "Gerilim ve akım ölçümleri",
    ],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="4" y="4" width="24" height="24" rx="2" />
        <path d="M4 11h24" />
        <circle cx="9" cy="7.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="13" cy="7.5" r="1" fill="currentColor" stroke="none" />
        <path d="M8 16h6M8 20h10" />
        <rect x="18" y="15" width="6" height="7" rx="1" />
      </svg>
    ),
  },
];

function ServiceCards() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="container-xl">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-3">
            Hizmet Alanlarımız
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase">
            BAKIM HİZMETLERİMİZ
          </h2>
          <div className="w-10 h-0.5 bg-gray-300 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white flex flex-col overflow-hidden hover:shadow-md transition-shadow" style={{ borderRadius: "12px 12px 0 12px" }}>
              {/* Photo */}
              <div className="relative overflow-hidden aspect-[16/9]">
                <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-brand-black/25" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-brand-orange flex items-center justify-center text-white">
                    {s.icon}
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-extrabold text-brand-black text-base uppercase tracking-wide mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2 mt-auto">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "#FB5800" }}>
                        <svg viewBox="0 0 16 16" fill="none" className="w-2.5 h-2.5">
                          <path d="M3 8l3.5 3.5L13 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-gray-600 text-xs font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Bottom Text ───────────────────────────────────────────────────────────────
function BottomText() {
  return (
    <section className="py-16 bg-white">
      <div className="container-xl">
        <div className="max-w-3xl mx-auto text-center space-y-4 text-gray-600 leading-relaxed text-base">
          <p>
            Periyodik bakım hizmetlerimiz sayesinde beklenmeyen duruşlar
            azaltılır, işletme güvenliği artırılır ve enerji altyapınızın
            verimli şekilde çalışması güvence altına alınır.
          </p>
          <p>
            Motus Sistem, bakım ve servis süreçlerinde hızlı müdahale, uzman
            teknik destek ve güvenilir hizmet anlayışıyla işletmenizin yanında
            yer alır.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── CTA Banner ────────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="py-16" style={{ background: "linear-gradient(120deg,#e6823e 0%,#c86a44 25%,#7a4d66 60%,#213348 100%)" }}>
      <div className="container-xl text-center">
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-white/60 mb-4">
          Arıza Olmadan Önce
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase mb-8">
          BAKIM PROGRAMI OLUŞTURALIM
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
export default function PeriyodikBakimPage() {
  return (
    <>
      <Hero />
      <Intro />
      <ServiceCards />
      <BottomText />
      <CTABanner />
    </>
  );
}
