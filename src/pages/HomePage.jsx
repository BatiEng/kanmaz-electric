import { useState } from 'react'
import { Link } from 'react-router-dom'

// ── Hero Section ──────────────────────────────────────────────────────────────
const heroTabs = [
  { label: 'AYDINLATMA' },
  { label: 'EV ŞARJ' },
  { label: 'ACİL SERVİS' },
]

function HeroSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section
      className="relative overflow-hidden min-h-[88vh] flex flex-col"
      style={{
        background: 'linear-gradient(120deg, #E84820 0%, #C83060 35%, #7030B0 65%, #3020C8 100%)',
      }}
    >
      <div className="container-xl flex-1 flex items-center py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">

          {/* LEFT: Text */}
          <div className="z-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.0] text-white uppercase tracking-tight mb-4">
              TAM HİZMET<br />ELEKTRİKÇİLER
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-wide mb-8">
              KONUTLAR + İŞYERLERİ
            </h2>
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-2.5 bg-brand-black text-white px-7 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors"
            >
              <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              TEKLİF AL
            </Link>
          </div>

          {/* RIGHT: Photo card + trust badge */}
          <div className="relative flex justify-center lg:justify-end z-10">
            {/* Main photo card */}
            <div className="relative w-full max-w-md">
              <div
                className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-800 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #FB5800 0%, #c0392b 100%)' }}
              >
                {/* Placeholder for electrician photo */}
                <div className="text-center text-white/60 p-8">
                  <svg className="w-20 h-20 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-sm">Elektrikçi Fotoğrafı</p>
                </div>
              </div>

              {/* Trust badge floating card */}
              <div className="absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-auto sm:w-72 bg-white rounded-2xl shadow-2xl p-5">
                {/* Stars */}
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-bold text-brand-black text-sm leading-tight mb-3">
                  1000'den Fazla<br />Kişi Tarafından Güvenildi
                </p>
                <a href="tel:+902123456789" className="flex items-center gap-3">
                  {/* Phone ring icon */}
                  <div className="w-10 h-10 shrink-0 relative">
                    <div className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center">
                      <svg className="w-5 h-5 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    {/* Ping animation rings */}
                    <span className="absolute inset-0 rounded-full border border-brand-orange animate-ping opacity-40" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Hemen Ara</p>
                    <p className="font-extrabold text-brand-black text-base">(212) 345 67 89</p>
                  </div>
                </a>
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
                  ${activeTab === i
                    ? 'bg-[#5a3090] text-white'
                    : 'bg-[#3a2070] text-white/70 hover:bg-[#4a2880] hover:text-white'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Stats Bar ─────────────────────────────────────────────────────────────────
const stats = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Deneyimli',
    subtitle: '15+ Yıllık Deneyim',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Uygun Fiyat',
    subtitle: 'Rekabetçi Fiyatlar',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Garanti',
    subtitle: 'Tüm Hizmetlerde',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Donanımlı',
    subtitle: 'En Yeni Ekipmanlar',
  },
]

function StatsBar() {
  return (
    <div className="bg-white border-b border-gray-100 shadow-sm">
      <div className="container-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.title}
              className={`flex items-center gap-4 py-7 px-6
                ${i < stats.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-gray-150' : ''}
                ${i % 2 === 0 && i < stats.length - 1 ? 'border-r lg:border-r' : ''}
              `}
              style={{ borderColor: '#e5e7eb' }}
            >
              <div className="text-brand-black shrink-0">{stat.icon}</div>
              <div>
                <p className="font-extrabold text-brand-black text-base leading-tight">{stat.title}</p>
                <p className="text-sm text-gray-500">{stat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
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
              className="relative overflow-hidden bg-gray-200 aspect-[3/4] max-w-md mx-auto lg:mx-0"
              style={{ borderRadius: '12px 12px 0 12px' }}
            >
              {/* Photo placeholder */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: 'linear-gradient(160deg, #e8f0f8 0%, #c8d8e8 100%)' }}
              >
                <div className="text-center text-gray-400">
                  <svg className="w-24 h-24 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-sm">Elektrikçi Fotoğrafı</p>
                </div>
              </div>

              {/* Lightning bolt accent in background */}
              <div className="absolute bottom-16 right-6 opacity-10">
                <svg className="w-32 h-32 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

            {/* Name tag card at bottom */}
            <div
              className="absolute bottom-0 left-0 bg-white shadow-lg px-6 py-4"
              style={{ borderRadius: '0 12px 0 0', minWidth: '200px' }}
            >
              <p className="font-extrabold text-brand-black text-base">Ahmet Kanmaz</p>
              <p className="text-sm text-gray-500">Sahibi, Usta Elektrikçi</p>
            </div>
          </div>

          {/* RIGHT: Text content */}
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-500 mb-4">Biz Kimiz</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-black uppercase leading-tight mb-6">
              ELEKTRİK TAAHHÜTLERİNDE<br />DEĞER VE UZMANLIĞI<br />BULUŞTURUYORUZ
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-base">
              Müşterilerimize iki dünyanın da en iyisini sunuyoruz: orta ölçekli bir elektrik yüklenicisinin kişiselleştirilmiş hizmeti ve düşük maliyeti ile büyük bir firmanın kaynakları ve yetenekleri.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              Tasarım-yapım uzmanlığı, güçlü tedarikçi ilişkileri, bağlanabilirlik ve yüksek deneyimli ekibimizle yüksek kaliteli, uygun maliyetli çözümler sunuyoruz.
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
  )
}

// ── Services ──────────────────────────────────────────────────────────────────

const serviceCards = [
  { title: 'Elektrik Tamiri',      href: '/hizmetler/elektrik-tamiri',     bg: 'linear-gradient(135deg, #b8cce0 0%, #8aaac8 100%)' },
  { title: 'Acil Servis',          href: '/hizmetler/acil-servis',          bg: 'linear-gradient(135deg, #c8b8a0 0%, #a89078 100%)' },
  { title: 'Aydınlatma Kurulumu',  href: '/hizmetler/aydinlatma-kurulumu',  bg: 'linear-gradient(135deg, #d8e0e8 0%, #b0c0d0 100%)' },
  { title: 'EV Şarj Kurulumu',     href: '/hizmetler/ev-sarj-kurulumu',     bg: 'linear-gradient(135deg, #c8d8c0 0%, #a0b898 100%)' },
  { title: 'Elektrik Şalterleri',  href: '/hizmetler/elektrik-salterleri',  bg: 'linear-gradient(135deg, #e0d0c0 0%, #c0a888 100%)' },
  { title: 'Pano Yükseltme',       href: '/hizmetler/pano-yukseltme',       bg: 'linear-gradient(135deg, #b8c8d8 0%, #90a8c0 100%)' },
  { title: 'Duman Dedektörleri',   href: '/hizmetler/duman-dedektorleri',   bg: 'linear-gradient(135deg, #d8d0c8 0%, #b8a898 100%)' },
]

function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-black">
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-500 mb-3">Hizmetler</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-white">
            Uzman Elektrik Hizmetleri
          </h2>
        </div>

        {/* Grid: 4 cols × 2 rows */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceCards.map((card) => (
            <Link
              key={card.title}
              to={card.href}
              className="group relative overflow-hidden bg-white flex flex-col"
              style={{ borderRadius: '20px', aspectRatio: '1 / 1' }}
            >
              {/* Photo area — fills the card, shrinks on hover to reveal label */}
              <div
                className="flex-1 relative overflow-hidden transition-all duration-300"
                style={{ background: card.bg }}
              >
                <span className="absolute bottom-2 left-0 right-0 text-center text-white/30 text-xs">Fotoğraf</span>
              </div>

              {/* Label bar — white bg, turns orange on hover */}
              <div className="px-4 py-3 bg-white group-hover:bg-brand-orange transition-colors duration-300 flex items-center gap-2">
                <svg
                  className="w-3.5 h-3.5 text-brand-orange group-hover:text-white transition-colors duration-300 shrink-0"
                  fill="currentColor" viewBox="0 0 24 24"
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
              background: '#f5f1ee',
              borderRadius: '20px',
              aspectRatio: '1 / 1',
              clipPath: 'polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)',
            }}
          >
            {/* Orange corner accent */}
            <div
              className="absolute top-0 right-0 w-14 h-14"
              style={{ background: 'linear-gradient(225deg, #FB5800 50%, transparent 50%)' }}
            />

            {/* Icon */}
            <div className="w-12 h-12 border-2 border-brand-black rounded-xl flex items-center justify-center self-start">
              <svg className="w-6 h-6 text-brand-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </div>

            {/* Content */}
            <div>
              <p className="text-5xl font-extrabold text-brand-orange leading-none mb-1">
                7/24
              </p>
              <p className="text-xl font-bold text-brand-black leading-snug">
                Elektrikçiler,<br />Her Zaman<br />Yanınızda
              </p>
            </div>

            {/* CTA */}
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-black hover:text-brand-orange transition-colors"
            >
              Teklif Al
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── How We Work ────────────────────────────────────────────────────────────────
const steps = [
  { num: '01', title: 'Bizi Arayın',     desc: 'Ekibimizle iletişime geçin — elektrik ihtiyaçlarınızı dinlemeye ve yardımcı olmaya hazırız.' },
  { num: '02', title: 'Keşif & Teklif',  desc: 'Sürpriz yok. İşi değerlendiriyor ve net, önceden belirlenmiş bir teklif sunuyoruz.' },
  { num: '03', title: 'İşe Koyuluyoruz', desc: 'Uzman elektrikçilerimiz zamanında gelir. İşi güvenli ve verimli şekilde tamamlarız.' },
  { num: '04', title: 'İş Tamamlandı!',  desc: 'Hepsi bu! Temiz, kaliteli iş — memnuniyetiniz garanti altında.' },
]

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
            <div key={step.num} className="relative bg-[#f5f0eb] rounded-2xl p-6 overflow-visible">

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
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA row — centered */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Black CTA button */}
          <Link
            to="/iletisim"
            className="inline-flex items-center gap-2.5 bg-brand-black text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors"
          >
            <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Teklif Al
          </Link>

          {/* "or call" text */}
          <span className="text-gray-500 text-sm font-medium">veya ara</span>

          {/* Phone button */}
          <a
            href="tel:+902123456789"
            className="inline-flex items-center gap-3 bg-[#f5f0eb] px-6 py-4 font-bold text-sm text-brand-black hover:bg-[#ede8e2] transition-colors"
            style={{ borderRadius: '8px' }}
          >
            {/* Ringing phone icon */}
            <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            (212) 345 67 89
          </a>
        </div>

      </div>
    </section>
  )
}

// ── Advice Banner ─────────────────────────────────────────────────────────────
function AdviceBanner() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: '420px' }}
    >
      {/* Background photo placeholder — replace src with real image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          background: 'linear-gradient(105deg, #4a5a6a 0%, #7a8a9a 40%, #9aaab8 100%)',
        }}
      >
        {/* Dark vignette on left & right edges */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.05) 65%, rgba(0,0,0,0.55) 100%)'
        }} />
      </div>

      {/* White card — bottom-left */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-xl py-16">
          <div
            className="relative bg-white p-8 md:p-10 max-w-xs md:max-w-sm overflow-visible"
            style={{ borderRadius: '16px' }}
          >
            {/* Notched top-right corner: orange triangle */}
            <div
              className="absolute"
              style={{
                top: 0,
                right: 0,
                width: 0,
                height: 0,
                borderStyle: 'solid',
                borderWidth: '0 52px 52px 0',
                borderColor: 'transparent #FB5800 transparent transparent',
                borderRadius: '0 16px 0 0',
              }}
            />

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-brand-black leading-tight mb-6 pr-6">
              Tavsiye mi lazım?<br />
              Ücretsiz Danışmanlık<br />
              için Bizi Arayın
            </h2>

            {/* Button */}
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-2.5 bg-brand-black text-white px-6 py-3.5 font-bold text-xs uppercase tracking-widest hover:bg-gray-900 transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Teklif Al
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Why Choose Us ──────────────────────────────────────────────────────────────
const certs = [
  'LİSANS #184594',
  'NFPA 70E',
  'OSHA',
  'DEVLET SERTİFİKALI ELEKTRİKÇİLER',
]

const reasons = [
  {
    title: 'Yerel + Güvenilir',
    desc: 'Topluluğumuza güvenilir, yüksek kaliteli elektrik işiyle hizmet etmekten gurur duyuyoruz.',
  },
  {
    title: 'Uzman + Sertifikalı',
    desc: 'Lisanslı elektrikçilerimiz her projeye uzmanlık, güvenlik ve hassasiyet katıyor.',
  },
  {
    title: 'Verimli + Zamanında',
    desc: 'Zamanınıza ve bütçenize saygı gösteriyoruz — gecikmesiz sonuçlar teslim ediyoruz.',
  },
  {
    title: 'Dürüst Fiyatlandırma',
    desc: 'Şeffaf, önceden belirlenmiş teklifler — gizli ücret yok, sadece dürüst iş.',
  },
]

function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">

          {/* LEFT — orange card */}
          <div
            className="lg:col-span-2 relative bg-brand-orange rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden"
            style={{ minHeight: '480px' }}
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
                FARKI<br />HİSSEDİN
              </h2>
              <p className="text-white/80 text-base font-medium">
                Kalite ve Özenle Taahhüt Edilmiş
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
                  <svg className="w-3.5 h-3.5 text-brand-orange shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
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
                    borderBottom: i < 2 ? '1px solid #e5e7eb' : 'none',
                    /* vertical orange divider between col 1 and col 2 */
                    borderRight: i % 2 === 0 ? '1px solid #e5e7eb' : 'none',
                  }}
                >
                  {/* Thin orange top accent on first row left */}
                  {i === 0 && (
                    <div className="w-px h-full absolute left-1/2 top-0 bg-brand-orange hidden sm:block" style={{ pointerEvents: 'none' }} />
                  )}
                  <h3 className="text-xl font-bold text-brand-black mb-3">{r.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
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
                <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Teklif Al
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ── Gallery Section ────────────────────────────────────────────────────────────

// Carousel slides: each slide has a "large" featured card + a "tall" card
const gallerySlides = [
  {
    large: { label: 'Solar Çözümler',     bg: 'linear-gradient(135deg,#7a9a6a 0%,#4a6a4a 100%)' },
    tall:  { label: 'Pano Yükseltme',     bg: 'linear-gradient(135deg,#5a6a7a 0%,#3a4a5a 100%)' },
  },
  {
    large: { label: 'EV Şarj Kurulumu',   bg: 'linear-gradient(135deg,#6a8a9a 0%,#3a6a7a 100%)' },
    tall:  { label: 'Aydınlatma Kurulumu',bg: 'linear-gradient(135deg,#9a8a6a 0%,#6a5a3a 100%)' },
  },
  {
    large: { label: 'Acil Servis',        bg: 'linear-gradient(135deg,#9a6a5a 0%,#6a3a2a 100%)' },
    tall:  { label: 'Elektrik Tamiri',    bg: 'linear-gradient(135deg,#8a7a9a 0%,#5a4a6a 100%)' },
  },
]

// Fixed right 4 images (2×2 grid)
const fixedImages = [
  { label: 'Aydınlatma',       bg: 'linear-gradient(135deg,#c8c8b8 0%,#a0a090 100%)' },
  { label: 'Elektrik Şalteri', bg: 'linear-gradient(135deg,#b8c8d8 0%,#88a0b8 100%)' },
  { label: 'Solar Panel',      bg: 'linear-gradient(135deg,#a8b8a0 0%,#788870 100%)' },
  { label: 'Kablo Tesisatı',   bg: 'linear-gradient(135deg,#d0c0b0 0%,#a09080 100%)' },
]

function GallerySection() {
  const [slide, setSlide] = useState(0)
  const total = gallerySlides.length
  const prev = () => setSlide((s) => (s - 1 + total) % total)
  const next = () => setSlide((s) => (s + 1) % total)
  const current = gallerySlides[slide]

  return (
    <section className="py-16 md:py-24 bg-brand-black">
      <div className="container-xl">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-500 mb-3">
            Bizi İş Başında Görün
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-white">
            Küçük Onarımdan Büyük Projeye
          </h2>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-4 gap-3" style={{ height: '420px' }}>

          {/* Col 1 — large featured card (carousel) with orange border + label always visible */}
          <div
            className="relative rounded-2xl overflow-hidden border-2 border-brand-orange transition-all duration-500"
            style={{ background: current.large.bg }}
          >
            {/* Overlay gradient at bottom */}
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)'
            }} />
            {/* Label */}
            <div className="absolute bottom-4 left-0 right-0 px-4 flex items-end justify-between">
              <span className="text-white font-bold text-base drop-shadow">{current.large.label}</span>
            </div>
            {/* Search icon badge — bottom left */}
            <div className="absolute bottom-4 left-4 w-9 h-9 bg-brand-orange rounded-xl flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {/* Photo placeholder text */}
            <div className="absolute top-4 right-4 text-white/20 text-xs">Fotoğraf</div>
          </div>

          {/* Col 2 — tall card (carousel), spans full height */}
          <div
            className="relative rounded-2xl overflow-hidden transition-all duration-500"
            style={{ background: current.tall.bg }}
          >
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)'
            }} />
            <div className="absolute bottom-4 left-4">
              <span className="text-white font-bold text-sm drop-shadow">{current.tall.label}</span>
            </div>
            <div className="absolute top-4 right-4 text-white/20 text-xs">Fotoğraf</div>
          </div>

          {/* Col 3 — 2 fixed stacked images */}
          <div className="flex flex-col gap-3">
            {[fixedImages[0], fixedImages[2]].map((img) => (
              <div
                key={img.label}
                className="flex-1 relative rounded-2xl overflow-hidden"
                style={{ background: img.bg }}
              >
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 55%)'
                }} />
                <div className="absolute bottom-3 left-3">
                  <span className="text-white text-xs font-semibold drop-shadow">{img.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Col 4 — 2 fixed stacked images */}
          <div className="flex flex-col gap-3">
            {[fixedImages[1], fixedImages[3]].map((img) => (
              <div
                key={img.label}
                className="flex-1 relative rounded-2xl overflow-hidden"
                style={{ background: img.bg }}
              >
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 55%)'
                }} />
                <div className="absolute bottom-3 left-3">
                  <span className="text-white text-xs font-semibold drop-shadow">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom controls */}
        <div className="flex items-center justify-between mt-6">
          {/* Prev / Gallery label / Next */}
          <div className="flex items-center gap-0">
            <button
              onClick={prev}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              style={{ borderRadius: '8px 0 0 8px' }}
              aria-label="Önceki"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="h-12 bg-white/10 px-5 flex items-center">
              <span className="text-white text-xs font-bold uppercase tracking-widest">Galeri</span>
            </div>
            <button
              onClick={next}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              style={{ borderRadius: '0 8px 8px 0' }}
              aria-label="Sonraki"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Instagram follow button */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-brand-orange text-white px-5 py-3 text-xs font-bold uppercase tracking-wider hover:bg-brand-orange transition-colors"
            style={{ borderRadius: '8px' }}
          >
            {/* Instagram icon */}
            <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            İşlerimizi Takip Edin @kanmazelektrik
          </a>
        </div>

      </div>
    </section>
  )
}

// ── Testimonials ───────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: 'Ahmet Y.',
    location: 'İstanbul, TR',
    text: 'Genel olarak mükemmel bir hizmet. Mesajıma hızlıca yanıt verdiler, proje yöneticisi çok dostane ve bilgiliydi. Kurulum ekibi verimli, profesyonel ve son derece yardımseverdi.',
  },
  {
    name: 'Fatma K.',
    location: 'İstanbul, TR',
    text: 'Restoranımız için komple aydınlatma kurulumu yaptırdık. Ekip son derece titiz ve uzman. İşi tam zamanında bitirdiler, hiçbir sürpriz olmadı. Kesinlikle tavsiye ederim.',
  },
  {
    name: 'Mehmet D.',
    location: 'İstanbul, TR',
    text: 'Apartmanımızda gece acil elektrik arızası yaşadık, aynı gece geldiler. Gerçekten 7/24 hizmet veriyorlar. Temiz çalıştılar, fiyat da çok makul.',
  },
  {
    name: 'Zeynep A.',
    location: 'İstanbul, TR',
    text: 'EV şarj istasyonu kurulumu için geldiler. Süreç başından sonuna kadar çok akıcıydı. Teknik bilgileri etkileyiciydi, tüm sorularımı sabırla yanıtladılar.',
  },
]

// Star row helper
function Stars({ count = 5, color = '#FB5800' }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4" fill={color} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function Testimonials() {
  const [idx, setIdx] = useState(0)
  const total = testimonials.length
  const t = testimonials[idx]

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
              MÜŞTERİLERİMİZİN<br />GERİ BİLDİRİMLERİ
            </h2>

            {/* Rating badges */}
            <div className="flex items-center gap-6 mb-10">
              {/* Google */}
              <div className="flex items-center gap-3">
                {/* Google "G" logo */}
                <div className="w-9 h-9 shrink-0">
                  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                    <path fill="none" d="M0 0h48v48H0z"/>
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-brand-black text-base">5.0</span>
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
                    <span className="font-extrabold text-brand-black text-base">4.95</span>
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
            style={{ borderLeft: '1px solid #FB5800' }}
          >
            {/* Big orange quote mark */}
            <div>
              <div className="mb-6">
                <svg className="w-14 h-10 text-brand-orange" fill="currentColor" viewBox="0 0 50 35">
                  <path d="M0 35V21.4Q0 12.15 5.125 6.075T20 0v5.6q-5.8 1-8.9 4.725T8 21h7V35H0zm25 0V21.4q0-9.25 5.125-15.325T45 0v5.6q-5.8 1-8.9 4.725T33 21h7V35H25z"/>
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
                  <svg className="w-7 h-7 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-extrabold text-brand-black text-sm uppercase tracking-wide">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>

              {/* Prev / Next arrows */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setIdx((i) => (i - 1 + total) % total)}
                  className="w-11 h-11 border border-gray-300 flex items-center justify-center hover:border-brand-black transition-colors"
                  style={{ borderRadius: '6px' }}
                  aria-label="Önceki"
                >
                  <svg className="w-4 h-4 text-brand-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setIdx((i) => (i + 1) % total)}
                  className="w-11 h-11 border border-gray-300 flex items-center justify-center hover:border-brand-black transition-colors"
                  style={{ borderRadius: '6px' }}
                  aria-label="Sonraki"
                >
                  <svg className="w-4 h-4 text-brand-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ── FAQ Section ───────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Elektrik çalışması sırasında evinizin güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm çalışmalarımız öncesinde güvenlik kontrolü yapılır. Lisanslı elektrikçilerimiz gerekli önlemleri alarak çalışır; iş bittikten sonra tam test ve kontrol yapılır.',
  },
  {
    q: 'Tadilat için doğru elektrikçiyi nasıl seçersiniz?',
    a: 'Lisans ve sertifikayı kontrol edin, referans isteyin ve yazılı teklif alın. Biz her projede şeffaf fiyatlandırma ve belgelenmiş uzmanlık sunuyoruz.',
  },
  {
    q: 'Yenileme sırasında eski elektrik tesisatını yükseltebilir misiniz?',
    a: 'Evet. Eski panoları, sigortaları ve kablo hatlarını güncel standartlara uygun hale getiriyor; aynı zamanda enerji verimliliğini artırıyoruz.',
  },
  {
    q: 'Acil elektrik arızalarında ne kadar sürede geliyorsunuz?',
    a: '7/24 acil servisimiz İstanbul genelinde ortalama 60 dakika içinde yerinde hazır oluyor. Arayın, ekibimiz yola çıksın.',
  },
]

function FAQSection() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-20 md:py-28 bg-[#f9f8f6]">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* LEFT */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-4">SSS</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-brand-black leading-tight mb-4">
                SIKÇA SORULAN<br />SORULAR
              </h2>
              <p className="text-sm text-gray-500">
                Daha fazla bilgi için{' '}
                <Link to="/iletisim" className="underline font-semibold text-brand-black hover:text-brand-orange transition-colors">
                  bizimle iletişime geçin
                </Link>
              </p>
            </div>

            {/* Cream card */}
            <div
              className="relative bg-[#f0ece6] p-7 overflow-hidden"
              style={{ borderRadius: '16px', maxWidth: '320px' }}
            >
              {/* Orange corner triangle */}
              <div
                className="absolute top-0 right-0"
                style={{
                  width: 0,
                  height: 0,
                  borderStyle: 'solid',
                  borderWidth: '0 56px 56px 0',
                  borderColor: 'transparent #FB5800 transparent transparent',
                  borderRadius: '0 16px 0 0',
                }}
              />
              {/* Arrow icon on triangle */}
              <div className="absolute top-2.5 right-2.5">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>

              {/* Question mark circle */}
              <div className="w-12 h-12 rounded-full border-2 border-brand-black flex items-center justify-center mb-5">
                <span className="text-brand-black font-extrabold text-lg leading-none">?</span>
              </div>

              <h3 className="font-extrabold text-brand-black text-base mb-5">Sorularınız Basit Cevaplar Buluyor</h3>

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
                    style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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
  )
}

// ── CTA Banner ─────────────────────────────────────────────────────────────────
function CTABanner() {
  const [form, setForm] = useState({ ad: '', soyad: '', email: '', tel: '', mesaj: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl">

          {/* LEFT — photo */}
          <div className="relative min-h-[420px] lg:min-h-0">
            {/* Photo placeholder */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ background: 'linear-gradient(135deg, #6a8a7a 0%, #3a5a4a 100%)' }}
            >
              {/* Placeholder label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/30">
                  <svg className="w-20 h-20 mx-auto mb-2 opacity-40" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">Elektrikçi Fotoğrafı</p>
                </div>
              </div>
            </div>

            {/* Certification badge — bottom left */}
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3 z-10">
              <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-extrabold text-brand-black uppercase tracking-wide leading-tight">Sertifikalı</p>
                <p className="text-xs text-gray-500 leading-tight">Ortak Elektrikçi</p>
              </div>
            </div>
          </div>

          {/* RIGHT — orange form card */}
          <div
            className="relative bg-brand-orange p-8 md:p-10 flex flex-col justify-center"
            style={{
              borderRadius: '0 16px 16px 0',
              clipPath: 'polygon(0 0, calc(100% - 48px) 0, 100% 48px, 100% 100%, 0 100%)',
            }}
          >
            {/* Notch fill — dark orange triangle */}
            <div
              className="absolute top-0 right-0"
              style={{
                width: 0, height: 0,
                borderStyle: 'solid',
                borderWidth: '0 48px 48px 0',
                borderColor: 'transparent rgba(0,0,0,0.18) transparent transparent',
              }}
            />

            {sent ? (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-white mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-extrabold text-white uppercase mb-2">Teşekkürler!</h3>
                <p className="text-white/80">En kısa sürede size dönüş yapacağız.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-white leading-tight mb-3 pr-10">
                  Hizmet Randevusu Alın
                </h2>
                <p className="text-white/80 text-sm leading-relaxed mb-7">
                  15 yılı aşkın deneyimimizle elektrik ihtiyaçlarınızı hızlı ve güvenilir şekilde çözüyoruz. Formu doldurun, size dönelim.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Row 1: Ad + Soyad */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/70 text-[10px] font-bold uppercase tracking-widest mb-1.5">Ad</label>
                      <input
                        type="text"
                        placeholder="örn. Ahmet"
                        value={form.ad}
                        onChange={e => setForm({ ...form, ad: e.target.value })}
                        className="w-full bg-white text-brand-black placeholder-gray-400 px-4 py-3 text-sm rounded-lg outline-none focus:ring-2 focus:ring-brand-black"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white/70 text-[10px] font-bold uppercase tracking-widest mb-1.5">Soyad</label>
                      <input
                        type="text"
                        placeholder="örn. Yılmaz"
                        value={form.soyad}
                        onChange={e => setForm({ ...form, soyad: e.target.value })}
                        className="w-full bg-white text-brand-black placeholder-gray-400 px-4 py-3 text-sm rounded-lg outline-none focus:ring-2 focus:ring-brand-black"
                        required
                      />
                    </div>
                  </div>

                  {/* Row 2: Email + Tel */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/70 text-[10px] font-bold uppercase tracking-widest mb-1.5">E-posta Adresi</label>
                      <input
                        type="email"
                        placeholder="örn. ahmet@email.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white text-brand-black placeholder-gray-400 px-4 py-3 text-sm rounded-lg outline-none focus:ring-2 focus:ring-brand-black"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white/70 text-[10px] font-bold uppercase tracking-widest mb-1.5">Telefon Numarası</label>
                      <input
                        type="tel"
                        placeholder="örn. 0212 345 67 89"
                        value={form.tel}
                        onChange={e => setForm({ ...form, tel: e.target.value })}
                        className="w-full bg-white text-brand-black placeholder-gray-400 px-4 py-3 text-sm rounded-lg outline-none focus:ring-2 focus:ring-brand-black"
                      />
                    </div>
                  </div>

                  {/* Row 3: Mesaj */}
                  <div>
                    <label className="block text-white/70 text-[10px] font-bold uppercase tracking-widest mb-1.5">Nasıl Yardımcı Olabiliriz?</label>
                    <textarea
                      rows={4}
                      placeholder="Buraya yazın…"
                      value={form.mesaj}
                      onChange={e => setForm({ ...form, mesaj: e.target.value })}
                      className="w-full bg-white text-brand-black placeholder-gray-400 px-4 py-3 text-sm rounded-lg outline-none focus:ring-2 focus:ring-brand-black resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="self-start inline-flex items-center gap-2 bg-brand-black text-white px-7 py-3.5 font-bold text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors rounded-lg"
                  >
                    <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Gönder
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
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
      <AdviceBanner />
      <WhyChooseUs />
      <GallerySection />
      <Testimonials />
      <FAQSection />
      <CTABanner />
    </>
  )
}
