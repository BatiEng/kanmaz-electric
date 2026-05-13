import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Ana Sayfa', href: '/' },
  {
    label: 'Hizmetler',
    href: '/hizmetler',
    children: [
      { label: 'Elektrik Tamiri', href: '/hizmetler/elektrik-tamiri' },
      { label: 'Acil Servis', href: '/hizmetler/acil-servis' },
      { label: 'Aydınlatma Kurulumu', href: '/hizmetler/aydinlatma-kurulumu' },
      { label: 'EV Şarj Kurulumu', href: '/hizmetler/ev-sarj-kurulumu' },
      { label: 'Elektrik Şalterleri', href: '/hizmetler/elektrik-salterleri' },
      { label: 'Pano Yükseltme', href: '/hizmetler/pano-yukseltme' },
      { label: 'Duman Dedektörleri', href: '/hizmetler/duman-dedektorleri' },
    ],
  },
  {
    label: 'Hakkımızda',
    href: '/hakkimizda',
    children: [
      { label: 'Biz Kimiz', href: '/hakkimizda' },
      { label: 'Liderlik', href: '/hakkimizda/liderlik' },
      { label: 'SSS', href: '/hakkimizda/sss' },
      { label: 'Blog', href: '/blog' },
      { label: 'Kariyer', href: '/kariyer' },
    ],
  },
  { label: 'Hizmet Bölgesi', href: '/hizmet-bolgesi' },
  { label: 'Projeler', href: '/projeler' },
  { label: 'Yorumlar', href: '/yorumlar' },
  { label: 'İletişim', href: '/iletisim' },
]

function DropdownMenu({ items }) {
  return (
    <div className="dropdown-menu absolute top-full left-0 mt-0 w-52 bg-white shadow-xl z-50 border-t-2 border-brand-orange">
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const navRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setMobileExpanded(null)
  }, [location])

  useEffect(() => {
    function handleClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm" ref={navRef}>
      <nav className="bg-white">
        <div className="container-xl flex items-center justify-between h-16 md:h-[70px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-brand-orange flex items-center justify-center rounded-sm">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-base font-extrabold tracking-wide text-brand-black uppercase">
              Kanmaz <span className="text-brand-black">Elektrik</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`px-4 py-[26px] text-sm font-semibold flex items-center gap-1 border-b-2 transition-colors duration-150
                    ${location.pathname === link.href
                      ? 'border-brand-black text-brand-black bg-gray-50'
                      : 'border-transparent text-gray-700 hover:text-brand-black hover:border-brand-black'
                    }`}
                >
                  {link.label}
                  {link.children && (
                    <svg className="w-3 h-3 mt-0.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {link.children && activeDropdown === link.label && (
                  <DropdownMenu items={link.children} />
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/iletisim"
            className="hidden lg:inline-flex items-center gap-2 bg-brand-black text-white px-5 py-3 text-sm font-bold hover:bg-brand-orange transition-colors duration-200 shrink-0"
          >
            <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            ONLİNE RANDEVU
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menüyü aç"
          >
            <span className={`block w-6 h-0.5 bg-brand-black transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-brand-black transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-brand-black transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="container-xl py-4 flex flex-col">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={link.href}
                      className={`flex-1 py-3 text-sm font-semibold ${location.pathname === link.href ? 'text-brand-orange' : 'text-brand-black'}`}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <button className="p-2" onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}>
                        <svg className={`w-4 h-4 transition-transform ${mobileExpanded === link.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {link.children && mobileExpanded === link.label && (
                    <div className="pl-4 pb-2 border-l-2 border-brand-orange ml-2">
                      {link.children.map((child) => (
                        <Link key={child.href} to={child.href} className="block py-2 text-sm text-gray-600 hover:text-brand-orange">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/iletisim" className="mt-4 bg-brand-black text-white text-center py-3 font-bold text-sm flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                ONLİNE RANDEVU
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
