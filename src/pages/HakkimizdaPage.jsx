import { Link } from "react-router-dom";

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-white pt-10 pb-0 overflow-hidden">
      <div className="container-xl">
        <div className="relative grid grid-cols-1 lg:grid-cols-5 items-end gap-0">
          <div className="relative z-10 bg-white lg:col-span-2 pb-10 pt-6 pr-8">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-4">
              Şirket
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-brand-black leading-tight">
              HAKKIMIZDA
            </h1>
            <p className="text-gray-500 text-sm mt-4 max-w-xs">
              Geleceğin Enerjisi, Kesintisiz Güven
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
              alt="Motus Sistem — Hakkımızda"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-black/30" />
            {/* Badge */}
            <div className="absolute bottom-6 left-6">
              <div
                className="bg-brand-orange px-5 py-3"
                style={{ borderRadius: "4px 4px 0 4px" }}
              >
                <p className="text-white text-xs font-bold uppercase tracking-widest">
                  Bursa / Nilüfer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── About Text ────────────────────────────────────────────────────────────────
function AboutText() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-4">
              Biz Kimiz
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase leading-tight mb-6">
              MOTUS SİSTEM
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>
                Motus Sistem, endüstriyel tesislerin ve işletmelerin en kritik
                ihtiyacı olan kesintisiz, güvenli ve sürdürülebilir enerji
                altyapılarını inşa etmek amacıyla kurulmuştur.
              </p>
              <p>
                Bursa Nilüfer (NİLTİM) merkezli firmamız, endüstriyel enerji
                çözümleri alanında yenilikçi mühendislik yaklaşımları ve güçlü
                teknik altyapısıyla sektörün güvenilir çözüm ortağıdır.
              </p>
              <p>
                Adımızı hareket ve kesintisiz ilerlemeden alarak; Jeneratör
                Sistemleri, UPS (Kesintisiz Güç Kaynağı), Elektrik Panoları ve
                Güneş Enerji Sistemleri (GES) alanlarında uçtan uca hizmet
                sunuyoruz. İşletmenizin enerjisini güvence altına alırken,
                operasyonel verimliliğinizi maksimum seviyeye çıkarmaya
                odaklanıyoruz.
              </p>
            </div>
          </div>

          {/* Dark accent card */}
          <div
            className="relative overflow-hidden bg-brand-black p-10 flex flex-col justify-center min-h-[320px]"
            style={{ borderRadius: "12px 12px 0 12px" }}
          >
            <span
              className="absolute inset-0 flex items-center justify-center font-extrabold text-white/5 select-none pointer-events-none uppercase"
              style={{ fontSize: "7rem", lineHeight: 1 }}
            >
              MOTUS
            </span>
            <div className="absolute left-0 top-0 h-full w-2 bg-brand-orange" />
            <div className="relative z-10 space-y-4">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-orange">
                Hizmet Alanlarımız
              </p>
              {[
                "Jeneratör Sistemleri",
                "UPS — Kesintisiz Güç Kaynağı",
                "Elektrik Panoları",
                "Güneş Enerji Sistemleri (GES)",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                  <span className="text-white/80 text-sm font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Why Motus ─────────────────────────────────────────────────────────────────
const reasons = [
  {
    number: "01",
    title: "Uzman Teknik Ekip",
    desc: "Mühendislik standartlarına uygun, doğru güç ve yer tespiti analiziyle projenize en uygun sistemleri belirliyoruz.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-9 h-9"
      >
        <circle cx="20" cy="13" r="6" />
        <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" />
        <path d="M26 10l2 2 4-4" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Hızlı Servis & Müdahale",
    desc: "Olası arızalarda orijinal yedek parça desteği ve minimum duruş süresiyle sisteminizi hızla devreye alıyoruz.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-9 h-9"
      >
        <circle cx="20" cy="20" r="14" />
        <path d="M20 10v10l6 4" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Güvenilir Uçtan Uca Çözüm",
    desc: "Keşif ve projelendirmeden montaj, kurulum ve periyodik bakıma kadar tüm süreçleri tek elden, anahtar teslim yönetiyoruz.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-9 h-9"
      >
        <path d="M6 20h28M20 6l14 14-14 14" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Sürdürülebilir Performans",
    desc: "Enerji ihtiyacınızı analiz ederek arıza risklerini minimize ediyor, sistem ömrünü uzatıyor ve maliyetlerinizi düşürüyoruz.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-9 h-9"
      >
        <path d="M20 6C12.268 6 6 12.268 6 20c0 7.732 6.268 14 14 14 7.732 0 14-6.268 14-14" />
        <path d="M26 6l8 8-8 8" strokeWidth="2.5" />
        <path d="M14 20l4 4 8-8" strokeWidth="2.5" />
      </svg>
    ),
  },
];

function WhyMotus() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="container-xl">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-3">
            Farkımız
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase">
            NEDEN MOTUS SİSTEM?
          </h2>
          <div className="w-10 h-0.5 bg-gray-300 mx-auto mt-4" />
          <p className="text-gray-500 text-sm mt-5 max-w-xl mx-auto">
            Sadece bir tedarikçi değil, projenizin her aşamasında yanınızda olan
            stratejik bir partneriz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((r) => (
            <div
              key={r.number}
              className="bg-white p-8 flex gap-6 hover:shadow-md transition-shadow"
              style={{ borderRadius: "12px 12px 0 12px" }}
            >
              {/* Icon circle */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-50 border-2 border-gray-100 flex items-center justify-center text-brand-black">
                {r.icon}
              </div>
              <div>
                <p className="text-xs font-bold text-brand-orange mb-1">
                  {r.number}
                </p>
                <h3 className="font-extrabold text-brand-black text-sm uppercase tracking-wide mb-2 leading-snug">
                  {r.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {r.desc}
                </p>
              </div>
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
          Stratejik Enerji Partneriniz
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase mb-8">
          PROJENİZ İÇİN BİZİMLE ÇALIŞIN
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
export default function HakkimizdaPage() {
  return (
    <>
      <Hero />
      <AboutText />
      <WhyMotus />
      <CTABanner />
    </>
  );
}
