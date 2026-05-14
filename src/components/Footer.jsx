import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Şirket',          href: '/sirket' },
  { label: 'Ürünler',         href: '/urunler' },
  { label: 'Hizmetler',       href: '/hizmetler' },
  { label: 'Teknik Bilgiler', href: '/teknik-bilgiler' },
  { label: 'İletişim',        href: '/iletisim' },
]

const areas = [
  { label: 'Bursa',   href: '/iletisim' },
  { label: 'İstanbul', href: '/iletisim' },
  { label: 'Ankara',  href: '/iletisim' },
  { label: 'İzmir',   href: '/iletisim' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">

      {/* ── Top: logo + tagline + nav ── */}
      <div className="container-xl pt-16 pb-10 flex flex-col items-center text-center gap-5">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-orange flex items-center justify-center rounded-sm">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-lg font-extrabold tracking-wide text-white uppercase">
            Motus <span className="text-brand-orange">Sistem</span>
          </span>
        </Link>

        {/* Stars */}
        <div className="flex items-center gap-1.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Trust lines */}
        <div>
          <p className="font-bold text-white text-base">Kesintisiz Enerji İçin Güvenilir Çözüm Ortağınız</p>
          <p className="text-gray-400 text-sm mt-1">Ücretsiz Teklif İçin Bugün Bizi Arayın</p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6 mt-2">
          {navLinks.map((l) => (
            <Link key={l.href} to={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* ── 3 Orange Cards ── */}
      <div className="container-xl pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Card 1 — Teklif Al */}
          <Link to="/iletisim" className="flex items-center gap-5 bg-brand-orange px-7 py-6 rounded-2xl hover:brightness-95 transition-all">
            <svg className="w-8 h-8 text-brand-black shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <div>
              <p className="text-brand-black text-xs font-semibold mb-0.5">Basit &amp; Ücretsiz</p>
              <p className="text-brand-black text-xl font-extrabold leading-tight">Teklif Al</p>
            </div>
          </Link>

          {/* Card 2 — Telefon */}
          <a href="tel:+905301553544" className="flex items-center gap-5 bg-brand-orange px-7 py-6 rounded-2xl hover:brightness-95 transition-all">
            <svg className="w-8 h-8 text-brand-black shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <div>
              <p className="text-brand-black text-xs font-semibold mb-0.5">Bizi Arayın</p>
              <p className="text-brand-black text-xl font-extrabold leading-tight">0 (530) 155 35 44</p>
            </div>
          </a>

          {/* Card 3 — E-posta */}
          <a href="mailto:emrekanmaz@motussistem.com" className="flex items-center gap-5 bg-brand-orange px-7 py-6 rounded-2xl hover:brightness-95 transition-all">
            <svg className="w-8 h-8 text-brand-black shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <div>
              <p className="text-brand-black text-xs font-semibold mb-0.5">E-posta Gönderin</p>
              <p className="text-brand-black text-base font-extrabold leading-tight break-all">emrekanmaz@motussistem.com</p>
            </div>
          </a>
        </div>
      </div>

      {/* ── Address + Service Areas ── */}
      <div className="border-t border-white/10">
        <div className="container-xl py-6 flex flex-col md:flex-row items-center justify-between gap-5 flex-wrap">
          <div className="flex items-center gap-2.5 text-sm text-gray-400">
            <svg className="w-4 h-4 text-brand-orange shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            NİLTİM – Üçevler Mah. Ersan Sk. 8A Kat:1A, İbrahim Yazıcı Plaza 2, Nilüfer/Bursa
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="text-sm font-semibold text-white whitespace-nowrap">Hizmet Bölgelerimiz</span>
            {areas.map((a) => (
              <Link key={a.label} to={a.href}
                className="inline-flex items-center gap-2 border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-lg hover:border-brand-orange hover:text-brand-orange transition-colors uppercase tracking-wider">
                {a.label}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="container-xl py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            {new Date().getFullYear()} © Motus Sistem. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/kullanim-sartlari" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Kullanım Şartları</Link>
            <Link to="/gizlilik" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Gizlilik Politikası</Link>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}
