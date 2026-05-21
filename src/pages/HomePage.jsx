import { useState } from "react";
import { Link } from "react-router-dom";

// ── Hero Section ──────────────────────────────────────────────────────────────
const heroTabs = [
  { label: "JENERATÖR" },
  { label: "UPS" },
  { label: "SOLAR SİSTEM" },
];

function HeroSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      className="relative overflow-hidden min-h-[88vh] flex flex-col"
      style={{
        background:
          "linear-gradient(120deg,#e6823e 0%,#c86a44 25%,#7a4d66 60%,#213348 100%)",
      }}
    >
      <div className="container-xl flex-1 flex items-center py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">
          {/* LEFT: Text */}
          <div className="z-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.0] text-white uppercase tracking-tight mb-4">
              KESİNTİSİZ
              <br />
              ENERJİ İÇİN
              <br />
              GÜÇLÜ ÇÖZÜMLER
            </h1>
            <h2
              className="text-xl sm:text-2xl font-medium text-white/80 tracking-wide mb-8 normal-case max-w-md"
              style={{ textTransform: "none", fontWeight: 400 }}
            >
              Jeneratör, UPS ve enerji sistemlerinde uçtan uca hizmet
            </h2>
          </div>

          {/* RIGHT: Photo card + trust badge */}
          <div className="relative flex justify-center lg:justify-end z-10">
            {/* Main photo card */}
            <div className="relative w-full max-w-md">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="/images/gorsel-2.png"
                  alt="Motus Sistem — Jeneratör, UPS, Solar, Pano Sistemleri"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom service tabs */}
      <div className="mt-auto pb-0">
        <div className="container-xl flex justify-end">
          <div className="flex">
            {heroTabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={`px-8 py-4 text-sm font-bold uppercase tracking-widest transition-colors duration-200
                  ${
                    activeTab === i
                      ? "bg-[#213348] text-white"
                      : "bg-[#1a2638] text-white/70 hover:bg-[#213348] hover:text-white"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Stats Bar ─────────────────────────────────────────────────────────────────
const stats = [
  {
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Uzman Teknik Ekip",
    subtitle: "Alanında deneyimli mühendisler",
  },
  {
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Hızlı Servis",
    subtitle: "Arızada hızlı müdahale",
  },
  {
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Güvenilir Çözüm",
    subtitle: "Sertifikalı ürün ve kurulum",
  },
  {
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    title: "Uçtan Uca Hizmet",
    subtitle: "Keşiften bakıma tam destek",
  },
];

function StatsBar() {
  return (
    <div className="bg-white border-b border-gray-100 shadow-sm">
      <div className="container-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.title}
              className={`flex items-center gap-4 py-7 px-6
                ${i < stats.length - 1 ? "border-b lg:border-b-0 lg:border-r border-gray-150" : ""}
                ${i % 2 === 0 && i < stats.length - 1 ? "border-r lg:border-r" : ""}
              `}
              style={{ borderColor: "#e5e7eb" }}
            >
              <div className="text-brand-black shrink-0">{stat.icon}</div>
              <div>
                <p className="font-extrabold text-brand-black text-base leading-tight">
                  {stat.title}
                </p>
                <p className="text-sm text-gray-500">{stat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Who We Are ─────────────────────────────────────────────────────────────────
function WhoWeAre() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: Person photo with name tag */}
          <div className="relative">
            {/* Main photo frame */}
            <div
              className="relative overflow-hidden aspect-[3/4] max-w-md mx-auto lg:mx-0"
              style={{ borderRadius: "12px 12px 0 12px" }}
            >
              <img
                src="/images/gorsel-4.png"
                alt="Motus Sistem — UPS ve Pano Sistemleri"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name tag card at bottom */}
            <div
              className="absolute bottom-0 left-0 bg-white shadow-lg px-6 py-4"
              style={{ borderRadius: "0 12px 0 0", minWidth: "200px" }}
            >
              <p className="font-extrabold text-brand-black text-base">
                Emre Kanmaz
              </p>
              <p className="text-sm text-gray-500">Kurucu, Motus Sistem</p>
            </div>
          </div>

          {/* RIGHT: Text content */}
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-500 mb-4">
              Biz Kimiz
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-black uppercase leading-tight mb-6">
              ENERJİ SİSTEMLERİNDE
              <br />
              UÇTAN UCA
              <br />
              ÇÖZÜM ORTAĞINIZ
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-base">
              Motus Sistem olarak; jeneratör, UPS ve enerji sistemleri alanında,
              işletmenizin kesintisiz ve güvenli enerjiye ulaşması için uçtan
              uca çözümler sunuyoruz.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              Uzman ekibimizle keşiften kuruluma, bakım ve servis süreçlerine
              kadar tüm aşamalarda yanınızdayız. Güçlü altyapımız ve profesyonel
              çözümlerimizle işinizin ihtiyacı olan enerjiyi güvenle sağlıyoruz.
            </p>
            <Link
              to="/hakkimizda"
              className="inline-flex items-center gap-2 bg-brand-black text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors"
            >
              Daha Fazla Bilgi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Services ──────────────────────────────────────────────────────────────────

const serviceCards = [
  {
    title: "Dizel Jeneratörler",
    href: "/urunler/dizel-jeneratorler",
    img: "/images/gorsel-3.png",
  },
  {
    title: "Portatif Jeneratörler",
    href: "/urunler/portatif-jeneratorler",
    img: "/images/gorsel-6.png",
  },
  {
    title: "Jeneratör Kabin Setleri",
    href: "/urunler/jenerator-kabin-setleri",
    img: "/images/jena.png",
  },
  {
    title: "UPS Sistemleri",
    href: "/urunler/ups",
    img: "/images/gorsel-4-eski.png",
  },
  {
    title: "Solar Pompa Sistemleri",
    href: "/urunler/solar-sistemler/pompa",
    img: "/images/gorsel-5.png",
  },
  {
    title: "Ev Paket Çözümleri",
    href: "/urunler/solar-sistemler/ev-paket",
    img: "/images/gorsel-1.png",
  },
  {
    title: "Senkron Panolar",
    href: "/urunler/panolar/senkron",
    img: "/images/gorsel-4-pano.png",
  },
];

function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-black">
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-500 mb-3">
            Ürünlerimiz
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-white">
            Enerji Sistemleri Çözümlerimiz
          </h2>
        </div>

        {/* Grid: 4 cols × 2 rows */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceCards.map((card) => (
            <Link
              key={card.title}
              to={card.href}
              className="group relative overflow-hidden bg-white flex flex-col"
              style={{ borderRadius: "20px", aspectRatio: "1 / 1" }}
            >
              {/* Photo area */}
              <div className="flex-1 relative overflow-hidden transition-all duration-300">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Label bar — white bg, turns orange on hover */}
              <div className="px-4 py-3 bg-white group-hover:bg-brand-orange transition-colors duration-300 flex items-center gap-2">
                <svg
                  className="w-3.5 h-3.5 text-brand-orange group-hover:text-white transition-colors duration-300 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="font-bold text-sm text-brand-black group-hover:text-white transition-colors duration-300 leading-tight">
                  {card.title}
                </span>
              </div>
            </Link>
          ))}

          {/* 24/7 Info card — last cell */}
          <div
            className="relative overflow-hidden flex flex-col justify-between p-6"
            style={{
              background: "#f5f1ee",
              borderRadius: "20px",
              aspectRatio: "1 / 1",
              clipPath:
                "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)",
            }}
          >
            {/* Orange corner accent */}
            <div
              className="absolute top-0 right-0 w-14 h-14"
              style={{
                background:
                  "linear-gradient(225deg, #FB5800 50%, transparent 50%)",
              }}
            />

            {/* Icon */}
            <div className="w-12 h-12 border-2 border-brand-black rounded-xl flex items-center justify-center self-start">
              <svg
                className="w-6 h-6 text-brand-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>

            {/* Content */}
            <div>
              <p className="text-5xl font-extrabold text-brand-orange leading-none mb-1">
                7/24
              </p>
              <p className="text-xl font-bold text-brand-black leading-snug">
                Teknik Servis,
                <br />
                Her Zaman
                <br />
                Yanınızda
              </p>
            </div>

            {/* CTA */}
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-black hover:text-brand-orange transition-colors"
            >
              Teklif Al
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── How We Work ────────────────────────────────────────────────────────────────
const steps = [
  {
    num: "01",
    title: "Güç & Yer Tespiti",
    desc: "Enerji ihtiyacınızı analiz ediyor, doğru güç seçimi ve en verimli kurulum alanını yerinde keşifle belirliyoruz.",
  },
  {
    num: "02",
    title: "Teklif & Planlama",
    desc: "Sürpriz yok. İhtiyacınıza özel sistem seçimi yapıyor, net ve şeffaf bir teklif sunuyoruz.",
  },
  {
    num: "03",
    title: "Kurulum & Devreye Alma",
    desc: "Uzman ekibimiz sistemi standartlara uygun, güvenli ve verimli biçimde kurar ve devreye alır.",
  },
  {
    num: "04",
    title: "Bakım & Servis",
    desc: "Kurulum sonrası periyodik bakım ve hızlı servis desteğiyle sisteminizi her zaman hazır tutuyoruz.",
  },
];

function HowWeWork() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-xl">
        {/* Header — centered */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-4">
            Ne Beklemeli
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-brand-black">
            Nasıl Çalışırız
          </h2>
        </div>

        {/* 4-column step cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-[#f5f0eb] rounded-2xl p-6 overflow-visible"
            >
              {/* Notched top-right corner — white circle overlapping */}
              <div
                className="absolute bg-white rounded-full"
                style={{ width: 52, height: 52, top: -14, right: -14 }}
              />

              {/* Step number — top right, inside the card */}
              <span className="absolute top-4 right-5 text-sm font-bold text-gray-300 z-10">
                {step.num}
              </span>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-brand-black mt-1 mb-3 leading-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                {step.desc}
              </p>

              {/* Faint lightning bolt — bottom right */}
              <div className="absolute bottom-4 right-5 text-gray-200">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA row — centered */}
      </div>
    </section>
  );
}

// ── Why Choose Us ──────────────────────────────────────────────────────────────
const certs = [
  "TSE Uyumlu",
  "IEC Standartları",
  "Periyodik Bakım",
  "Anahtar Teslim Kurulum",
];

const reasons = [
  {
    title: "Uzman Mühendis Kadrosu",
    desc: "Alanında deneyimli teknik ekibimiz her projeye uzmanlık, güvenlik ve titizlikle yaklaşır.",
  },
  {
    title: "Hızlı Müdahale & Servis",
    desc: "Arıza anında hızlı servis desteğiyle minimum duruş süresi sağlıyor, sisteminizi tekrar devreye alıyoruz.",
  },
  {
    title: "Yerinde Keşif & Doğru Boyutlandırma",
    desc: "Güç analizi yaparak ihtiyacınıza en uygun sistemi belirliyor, gereksiz maliyetleri ortadan kaldırıyoruz.",
  },
  {
    title: "Şeffaf Fiyatlandırma",
    desc: "Keşif sonrası net ve yazılı teklif — gizli ücret yok, sürpriz yok, sadece dürüst iş.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          {/* LEFT — orange card */}
          <div
            className="lg:col-span-2 relative bg-brand-orange rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden"
            style={{ minHeight: "480px" }}
          >
            {/* Notched top-right corner — white circle */}
            <div
              className="absolute bg-white rounded-full"
              style={{ width: 64, height: 64, top: -18, right: -18 }}
            />

            {/* Top text */}
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/70 mb-5">
                Neden Bizi Seçmeli
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-white leading-tight mb-4">
                NEDEN
                <br />
                MOTUS
                <br />
                SİSTEM?
              </h2>
              <p className="text-white/80 text-base font-medium">
                Enerji kesintilerine karşı güçlü çözümler
              </p>
            </div>

            {/* Cert badges at bottom */}
            <div className="flex flex-wrap gap-2 mt-8">
              {certs.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 bg-white text-brand-black text-xs font-bold px-3 py-1.5 rounded-full"
                >
                  {/* Checkmark in circle */}
                  <svg
                    className="w-3.5 h-3.5 text-brand-orange shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — 2×2 feature grid */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 flex-1">
              {reasons.map((r, i) => (
                <div
                  key={r.title}
                  className="p-6 md:p-8"
                  style={{
                    borderBottom: i < 2 ? "1px solid #e5e7eb" : "none",
                    /* vertical orange divider between col 1 and col 2 */
                    borderRight: i % 2 === 0 ? "1px solid #e5e7eb" : "none",
                  }}
                >
                  {/* Thin orange top accent on first row left */}
                  {i === 0 && (
                    <div
                      className="w-px h-full absolute left-1/2 top-0 bg-brand-orange hidden sm:block"
                      style={{ pointerEvents: "none" }}
                    />
                  )}
                  <h3 className="text-xl font-bold text-brand-black mb-3">
                    {r.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Vertical orange divider between columns — absolute overlay */}
            <div className="hidden sm:block relative">
              {/* The divider is handled by borderRight on even items above */}
            </div>

            {/* CTA button */}
            <div className="px-6 md:px-8 pt-6 pb-2">
              <Link
                to="/iletisim"
                className="inline-flex items-center gap-2.5 bg-brand-black text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-brand-orange"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Teklif Al
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Gallery Section ────────────────────────────────────────────────────────────

// Carousel slides: each slide has a "large" featured card + a "tall" card
const gallerySlides = [
  {
    large: { label: "Jeneratör Sistemleri", img: "/images/gorsel-3.png" },
    tall: { label: "UPS & Pano", img: "/images/gorsel-4.png" },
  },
  {
    large: { label: "Solar Enerji", img: "/images/gorsel-5.png" },
    tall: { label: "Portatif Jeneratör", img: "/images/gorsel-6.png" },
  },
  {
    large: { label: "Solar + Jeneratör", img: "/images/gorsel-1.png" },
    tall: { label: "Kabin Jeneratör", img: "/images/gorsel-7.png" },
  },
];

// Fixed right 4 images (2×2 grid)
const fixedImages = [
  { label: "Dizel Jeneratör", img: "/images/gorsel-3.png" },
  { label: "UPS Sistemleri", img: "/images/gorsel-4.png" },
  { label: "Solar Panel Sahası", img: "/images/gorsel-5.png" },
  { label: "Enerji Çözümleri", img: "/images/gorsel-2.png" },
];

// ── Testimonials ───────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Ahmet Y.",
    location: "İstanbul, TR",
    text: "Genel olarak mükemmel bir hizmet. Mesajıma hızlıca yanıt verdiler, proje yöneticisi çok dostane ve bilgiliydi. Kurulum ekibi verimli, profesyonel ve son derece yardımseverdi.",
  },
  {
    name: "Fatma K.",
    location: "İstanbul, TR",
    text: "Restoranımız için komple aydınlatma kurulumu yaptırdık. Ekip son derece titiz ve uzman. İşi tam zamanında bitirdiler, hiçbir sürpriz olmadı. Kesinlikle tavsiye ederim.",
  },
  {
    name: "Mehmet D.",
    location: "İstanbul, TR",
    text: "Apartmanımızda gece acil elektrik arızası yaşadık, aynı gece geldiler. Gerçekten 7/24 hizmet veriyorlar. Temiz çalıştılar, fiyat da çok makul.",
  },
  {
    name: "Zeynep A.",
    location: "İstanbul, TR",
    text: "EV şarj istasyonu kurulumu için geldiler. Süreç başından sonuna kadar çok akıcıydı. Teknik bilgileri etkileyiciydi, tüm sorularımı sabırla yanıtladılar.",
  },
];

// Star row helper
function Stars({ count = 5, color = "#FB5800" }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4" fill={color} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Testimonials() {
  const [idx, setIdx] = useState(0);
  const total = testimonials.length;
  const t = testimonials[idx];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          {/* LEFT — label, title, ratings, CTA */}
          <div className="pr-0 lg:pr-16 py-8 flex flex-col justify-center">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-5">
              İyi Ellerde Olduğunuzu Bilin
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-brand-black leading-tight mb-8">
              MÜŞTERİLERİMİZİN
              <br />
              GERİ BİLDİRİMLERİ
            </h2>

            {/* Rating badges */}
            <div className="flex items-center gap-6 mb-10">
              {/* Google */}
              <div className="flex items-center gap-3">
                {/* Google "G" logo */}
                <div className="w-9 h-9 shrink-0">
                  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    />
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                    />
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    />
                    <path fill="none" d="M0 0h48v48H0z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-brand-black text-base">
                      5.0
                    </span>
                    <Stars color="#FBBC05" />
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">Google Reviews</p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-10 bg-gray-200" />

              {/* Yelp */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 shrink-0 flex items-center justify-center bg-[#d32323] rounded-full">
                  <span className="text-white font-extrabold text-sm">y!</span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-brand-black text-base">
                      4.95
                    </span>
                    <Stars color="#d32323" />
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">Yelp Puanı</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <Link
                to="/yorumlar"
                className="inline-flex items-center gap-2 bg-brand-black text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors"
              >
                Tüm Yorumlar
              </Link>
            </div>
          </div>

          {/* RIGHT — single testimonial carousel */}
          <div
            className="py-8 lg:pl-16 flex flex-col justify-between border-t lg:border-t-0"
            style={{ borderLeft: "1px solid #FB5800" }}
          >
            {/* Big orange quote mark */}
            <div>
              <div className="mb-6">
                <svg
                  className="w-14 h-10 text-brand-orange"
                  fill="currentColor"
                  viewBox="0 0 50 35"
                >
                  <path d="M0 35V21.4Q0 12.15 5.125 6.075T20 0v5.6q-5.8 1-8.9 4.725T8 21h7V35H0zm25 0V21.4q0-9.25 5.125-15.325T45 0v5.6q-5.8 1-8.9 4.725T33 21h7V35H25z" />
                </svg>
              </div>

              {/* Testimonial text */}
              <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-10">
                {t.text}
              </p>
            </div>

            {/* Author + nav */}
            <div className="flex items-center justify-between gap-4">
              {/* Avatar + name */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0 overflow-hidden">
                  <svg
                    className="w-7 h-7 text-brand-orange"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
                <div>
                  <p className="font-extrabold text-brand-black text-sm uppercase tracking-wide">
                    {t.name}
                  </p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>

              {/* Prev / Next arrows */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setIdx((i) => (i - 1 + total) % total)}
                  className="w-11 h-11 border border-gray-300 flex items-center justify-center hover:border-brand-black transition-colors"
                  style={{ borderRadius: "6px" }}
                  aria-label="Önceki"
                >
                  <svg
                    className="w-4 h-4 text-brand-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setIdx((i) => (i + 1) % total)}
                  className="w-11 h-11 border border-gray-300 flex items-center justify-center hover:border-brand-black transition-colors"
                  style={{ borderRadius: "6px" }}
                  aria-label="Sonraki"
                >
                  <svg
                    className="w-4 h-4 text-brand-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FAQ Section ───────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Hangi güç kapasitesine ihtiyacım var? Bunu nasıl belirleyebilirim?",
    a: "Keşif hizmetimizle işletmenizin enerji ihtiyacını yerinde analiz ediyor, doğru kapasite ve sistem seçimi için ücretsiz danışmanlık sunuyoruz.",
  },
  {
    q: "Jeneratör, UPS veya Solar sistem hangisi benim için uygun?",
    a: "İhtiyacınıza, bütçenize ve kullanım amacınıza göre en doğru sistemi birlikte belirliyoruz. Satış öncesi teknik danışmanlık tamamen ücretsizdir.",
  },
  {
    q: "Kurulum sonrası bakım hizmeti veriyor musunuz?",
    a: "Evet. Periyodik bakım sözleşmesi ile sisteminizin her zaman hazır ve sorunsuz çalışmasını garanti ediyoruz. Arıza anında hızlı servis desteği de sağlıyoruz.",
  },
  {
    q: "Anahtar teslim kurulum ne anlama geliyor?",
    a: "Keşiften projelendirmeye, temin ve montajdan devreye almaya kadar tüm süreci biz yönetiyoruz. Siz sadece hazır sistemi teslim alıyorsunuz.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-20 md:py-28 bg-[#f9f8f6]">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* LEFT */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-4">
                SSS
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-brand-black leading-tight mb-4">
                SIKÇA SORULAN
                <br />
                SORULAR
              </h2>
              <p className="text-sm text-gray-500">
                Daha fazla bilgi için{" "}
                <Link
                  to="/iletisim"
                  className="underline font-semibold text-brand-black hover:text-brand-orange transition-colors"
                >
                  bizimle iletişime geçin
                </Link>
              </p>
            </div>

            {/* Cream card */}
            <div
              className="relative bg-[#f0ece6] p-7 overflow-hidden"
              style={{ borderRadius: "16px", maxWidth: "320px" }}
            >
              {/* Orange corner triangle */}
              <div
                className="absolute top-0 right-0"
                style={{
                  width: 0,
                  height: 0,
                  borderStyle: "solid",
                  borderWidth: "0 56px 56px 0",
                  borderColor: "transparent #FB5800 transparent transparent",
                  borderRadius: "0 16px 0 0",
                }}
              />
              {/* Arrow icon on triangle */}
              <div className="absolute top-2.5 right-2.5">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>

              {/* Question mark circle */}
              <div className="w-12 h-12 rounded-full border-2 border-brand-black flex items-center justify-center mb-5">
                <span className="text-brand-black font-extrabold text-lg leading-none">
                  ?
                </span>
              </div>

              <h3 className="font-extrabold text-brand-black text-base mb-5">
                Sorularınız Basit Cevaplar Buluyor
              </h3>

              <Link
                to="/hakkimizda/sss"
                className="inline-flex items-center gap-2 bg-brand-black text-white px-5 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors"
              >
                Tüm Cevapları Bul
              </Link>
            </div>
          </div>

          {/* RIGHT — accordion */}
          <div className="lg:col-span-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200">
                <button
                  className="w-full flex items-start justify-between gap-4 py-6 text-left group"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-bold text-brand-black text-base md:text-lg leading-snug group-hover:text-brand-orange transition-colors">
                    {faq.q}
                  </span>
                  <span
                    className="shrink-0 w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center transition-transform duration-300 mt-0.5"
                    style={{
                      transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                {open === i && (
                  <p className="text-gray-500 text-sm leading-relaxed pb-6 pr-12">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Main Export ────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <WhoWeAre />
      <ServicesSection />
      <HowWeWork />
      <WhyChooseUs />

      <Testimonials />
      <FAQSection />
    </>
  );
}
