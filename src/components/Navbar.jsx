import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  {
    label: "Şirket",
    href: "/sirket",
    children: [
      { label: "Vizyon Misyon", href: "/sirket/vizyon-misyon" },
      { label: "Kalite Politika", href: "/sirket/kalite-politika" },
      { label: "Kurumsal Kimlik", href: "/sirket/kurumsal-kimlik" },
    ],
  },
  {
    label: "Ürünler",
    href: "/urunler",
    children: [
      { label: "Dizel Jeneratörler", href: "/urunler/dizel-jeneratorler" },
      {
        label: "Portatif Jeneratörler",
        href: "/urunler/portatif-jeneratorler",
      },
      {
        label: "Jeneratör Kabin Setleri",
        href: "/urunler/jenerator-kabin-setleri",
      },
      { label: "UPS", href: "/urunler/ups" },
      { label: "Panolar", href: "/urunler/panolar" },
    ],
  },
  {
    label: "Teknik Bilgiler",
    href: "/teknik-bilgiler",
    children: [
      { label: "Güç Hesabı", href: "/teknik-bilgiler/guc-hesabi" },
      { label: "Yakıt Tüketimi", href: "/teknik-bilgiler/yakit-tuketimi" },
      { label: "Dökümanlar", href: "/teknik-bilgiler/dokumanlar" },
    ],
  },
  {
    label: "Hizmetler",
    href: "/hizmetler",
    children: [
      { label: "Güç ve Yer Tespiti", href: "/hizmetler/guc-yer-tespiti" },
      {
        label: "Periyodik Bakım ve Servis",
        href: "/hizmetler/periyodik-bakim",
      },
      { label: "Kiralama", href: "/hizmetler/kiralama" },
    ],
  },
  { label: "İletişim", href: "/iletisim" },
];

// ── 2nd-level fly-out (opens to the right) ───────────────────────────────────
function SubMenu({ items }) {
  return (
    <div className="absolute left-full top-0 ml-0 w-52 bg-white shadow-xl border-t-2 border-brand-orange z-50">
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
  );
}

// ── 1st-level dropdown ────────────────────────────────────────────────────────
function DropdownMenu({ items }) {
  const [activeSub, setActiveSub] = useState(null);

  return (
    <div className="absolute top-full left-0 mt-0 w-56 bg-white shadow-xl z-50 border-t-2 border-brand-orange">
      {items.map((item) => (
        <div
          key={item.href}
          className="relative"
          onMouseEnter={() => item.children && setActiveSub(item.label)}
          onMouseLeave={() => item.children && setActiveSub(null)}
        >
          <Link
            to={item.href}
            className="flex items-center justify-between px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors"
          >
            <span>{item.label}</span>
            {item.children && (
              <svg
                className="w-3 h-3 text-gray-400 shrink-0 ml-2"
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
            )}
          </Link>
          {item.children && activeSub === item.label && (
            <SubMenu items={item.children} />
          )}
        </div>
      ))}
    </div>
  );
}

// ── Mobile: recursive accordion item ─────────────────────────────────────────
function MobileItem({ item, depth }) {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === item.href;
  const pl = depth === 1 ? "pl-4" : depth === 2 ? "pl-8" : "";

  return (
    <div>
      <div
        className={`flex items-center justify-between ${depth >= 1 ? "border-l-2 ml-2 " + (depth === 1 ? "border-brand-orange" : "border-gray-200") : ""}`}
      >
        <Link
          to={item.href}
          className={`flex-1 py-2.5 text-sm font-semibold ${pl} ${isActive ? "text-brand-orange" : "text-brand-black"}`}
        >
          {item.label}
        </Link>
        {item.children && (
          <button
            className="p-2 shrink-0"
            onClick={() => setExpanded(!expanded)}
          >
            <svg
              className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
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
          </button>
        )}
      </div>
      {item.children && expanded && (
        <div className="pb-1">
          {item.children.map((child) => (
            <MobileItem key={child.href} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Navbar ────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    function handleClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm" ref={navRef}>
      <nav className="bg-white">
        <div className="container-xl flex items-center justify-between h-16 md:h-[70px]">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/logos/logo-renkli-yatay.png"
              alt="Motus Sistem — Endüstriyel Enerji Çözümleri"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() =>
                  link.children && setActiveDropdown(link.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`px-4 py-[26px] text-sm font-semibold flex items-center gap-1 border-b-2 transition-colors duration-150
                    ${
                      location.pathname === link.href ||
                      location.pathname.startsWith(link.href + "/")
                        ? "border-brand-black text-brand-black bg-gray-50"
                        : "border-transparent text-gray-700 hover:text-brand-black hover:border-brand-black"
                    }`}
                >
                  {link.label}
                  {link.children && (
                    <svg
                      className="w-3 h-3 mt-0.5 text-gray-400"
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
            <svg
              className="w-4 h-4 text-brand-orange"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
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
            <span
              className={`block w-6 h-0.5 bg-brand-black transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-brand-black transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-brand-black transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="container-xl py-4 flex flex-col">
              {navLinks.map((link) => (
                <MobileItem key={link.href} item={link} depth={0} />
              ))}
              <Link
                to="/iletisim"
                className="mt-4 bg-brand-black text-white text-center py-3 font-bold text-sm flex items-center justify-center gap-2"
              >
                <svg
                  className="w-4 h-4 text-brand-orange"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                ONLİNE RANDEVU
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
