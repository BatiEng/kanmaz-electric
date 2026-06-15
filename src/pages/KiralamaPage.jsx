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
              JENERATÖR
              <br />
              KİRALAMA
            </h1>
            <p className="text-gray-500 text-sm mt-4 max-w-xs">
              Kısa ve uzun dönem güvenilir enerji çözümleri
            </p>
            <div className="absolute bottom-0 right-0 hidden lg:block" style={{ width: 0, height: 0, borderStyle: "solid", borderWidth: "0 0 56px 56px", borderColor: "transparent transparent white transparent", zIndex: 20 }} />
            <div className="absolute bottom-0 right-0 hidden lg:block" style={{ width: 56, height: 56, background: "#FB5800", clipPath: "polygon(0 100%, 100% 100%, 100% 0)", zIndex: 15 }} />
          </div>
          <div className="lg:col-span-3 relative overflow-hidden" style={{ borderRadius: "16px 16px 16px 0", minHeight: "360px" }}>
            <img src="/images/kir.png" alt="Motus Sistem — Jeneratör Kiralama" className="absolute inset-0 w-full h-full object-cover" />
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
              YATIRIM YAPMADAN
              <br />
              KESİNTİSİZ ENERJİ
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>
                Motus Sistem, kısa ve uzun dönem enerji ihtiyaçları için
                güvenilir jeneratör kiralama hizmetleri sunmaktadır. Planlı
                bakım çalışmaları, şantiye projeleri, organizasyonlar, üretim
                tesisleri, acil enerji ihtiyaçları ve geçici güç gereksinimleri
                için farklı kapasite seçenekleriyle kesintisiz enerji çözümleri
                sağlamaktadır.
              </p>
              <p>
                Geniş jeneratör parkımız sayesinde projelerinizin ihtiyaç
                duyduğu güç kapasitesi belirlenerek en uygun sistem hızlı
                şekilde sahaya sevk edilir. Tüm kiralama süreçlerinde nakliye,
                kurulum, devreye alma ve teknik destek hizmetleri uzman
                ekiplerimiz tarafından gerçekleştirilmektedir.
              </p>
              <p>
                Kiralama hizmetlerimiz sayesinde yüksek yatırım maliyetlerine
                katlanmadan ihtiyaç duyduğunuz süre boyunca güvenilir enerjiye
                ulaşabilir, operasyonlarınızı kesintisiz sürdürebilirsiniz.
              </p>
            </div>
          </div>

          {/* Dark accent card */}
          <div
            className="relative overflow-hidden bg-brand-black p-10 flex flex-col justify-center min-h-[380px]"
            style={{ borderRadius: "12px 12px 0 12px" }}
          >
            <span
              className="absolute inset-0 flex items-center justify-center font-extrabold text-white/5 select-none pointer-events-none uppercase"
              style={{ fontSize: "7rem", lineHeight: 1 }}
            >
              KİRA
            </span>
            <div className="absolute left-0 top-0 h-full w-2 bg-brand-orange" />
            <div className="relative z-10">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-orange mb-6">
                Kullanım Alanları
              </p>
              <div className="space-y-3">
                {[
                  "Şantiye ve inşaat projeleri",
                  "Planlı bakım süreçleri",
                  "Organizasyon ve etkinlikler",
                  "Üretim tesisi güç desteği",
                  "Acil enerji ihtiyaçları",
                  "Geçici güç gereksinimleri",
                  "Doğal afet ve kriz yönetimi",
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
      </div>
    </section>
  );
}

// ── Advantages ────────────────────────────────────────────────────────────────
const advantages = [
  {
    title: "Kısa ve Uzun Dönem",
    desc: "Günlük, haftalık veya aylık ihtiyaçlarınıza göre esnek kiralama seçenekleri sunuyoruz.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="4" y="5" width="24" height="22" rx="2" />
        <path d="M4 11h24" />
        <path d="M10 3v4M22 3v4" />
        <path d="M9 17h4M19 17h4M9 22h4M19 22h4" />
      </svg>
    ),
  },
  {
    title: "Farklı Güç Seçenekleri",
    desc: "Küçük kapasiteden yüksek güce kadar geniş jeneratör parkımızla her ihtiyaca uygun çözüm.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M17 4L8 17h8l-2 11 11-15h-8l2-11z" />
      </svg>
    ),
  },
  {
    title: "Hızlı Sevkiyat",
    desc: "İhtiyaç anında sahaya hızlı sevkiyat ve profesyonel kurulum ekibimizle yanınızdayız.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M2 12h18v12H2zM20 16l6 2v6h-6V16z" />
        <circle cx="7" cy="26" r="2" />
        <circle cx="23" cy="26" r="2" />
        <path d="M2 8l4-4h10l4 8" />
      </svg>
    ),
  },
  {
    title: "7/24 Teknik Destek",
    desc: "Kiralama süresince kesintisiz teknik destek ve acil müdahale hizmetiyle yanınızdayız.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M6 6a2 2 0 0 1 2-2h2l2 5-2.5 1.5a11 11 0 0 0 6 6L17 14l5 2v2a2 2 0 0 1-2 2C9 20 6 9 6 6z" />
        <path d="M22 17v3" />
        <circle cx="22" cy="22" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Bakım ve Servis",
    desc: "Kiralanan ekipmanların bakım ve servis süreçleri tarafımızca yönetilir, sorumluluk size ait değildir.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M27 7l-2.5 2.5M5 27l9.5-9.5" />
        <path d="M20.5 4.5a4.95 4.95 0 0 1 7 7l-3 3-7-7 3-3z" />
        <path d="M11.5 13.5l7 7-8 4.5-3.5-3.5 4.5-8z" />
      </svg>
    ),
  },
  {
    title: "Projeye Özel Çözüm",
    desc: "Standart paketler yerine projenizin gereksinimlerine göre özel mühendislik çözümleri sunuyoruz.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="4" y="4" width="24" height="24" rx="2" />
        <path d="M10 14h12M10 18h8M10 22h5" />
        <path d="M10 10h5" />
      </svg>
    ),
  },
];

function Advantages() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="container-xl">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-3">
            Neden Motus Sistem?
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase">
            HİZMET AVANTAJLARIMIZ
          </h2>
          <div className="w-10 h-0.5 bg-gray-300 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((a) => (
            <div
              key={a.title}
              className="bg-white p-8 flex flex-col gap-4 hover:shadow-md transition-shadow"
              style={{ borderRadius: "12px 12px 0 12px" }}
            >
              <div className="w-14 h-14 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-brand-black">
                {a.icon}
              </div>
              <h3 className="font-extrabold text-brand-black text-sm uppercase tracking-wide">
                {a.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
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
    <section className="py-16" style={{ background: "linear-gradient(120deg,#e6823e 0%,#c86a44 25%,#7a4d66 60%,#213348 100%)" }}>
      <div className="container-xl text-center">
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-white/60 mb-4">
          Hızlı ve Güvenilir
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase mb-8">
          KİRALAMA TALEBİNİZİ İLETİN
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
export default function KiralamaPage() {
  return (
    <>
      <Hero />
      <Intro />
      <Advantages />
      <CTABanner />
    </>
  );
}
