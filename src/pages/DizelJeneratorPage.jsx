import { Link } from "react-router-dom";

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-white pt-10 pb-0 overflow-hidden">
      <div className="container-xl">
        <div className="relative grid grid-cols-1 lg:grid-cols-5 items-center gap-8">
          {/* LEFT — text */}
          <div className="relative z-10 bg-white lg:col-span-2 py-10 pr-8 flex flex-col justify-center">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-4">
              Ürünler
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-brand-black leading-tight">
              DİZEL
              <br />
              JENERATÖR
            </h1>
            <p className="text-gray-500 text-sm mt-4 max-w-xs">
              20 – 2800 kVA güç aralığında profesyonel çözümler
            </p>
          </div>

          {/* RIGHT — photo */}
          <div
            className="lg:col-span-3 relative overflow-hidden flex items-center justify-center"
            style={{ borderRadius: "16px", background: "#1a1a1a", maxHeight: "420px" }}
          >
            <img
              src="/images/dizel-jen.png"
              alt="Motus Sistem — Dizel Jeneratör"
              className="w-full object-contain"
              style={{ maxHeight: "420px" }}
            />
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
              GÜVENİLİR
              <br />
              ENERJI ÇÖZÜMÜ
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>
                Motus Sistem tarafından sunulan jeneratör setleri; düşük yakıt
                tüketimi, yüksek performans, çevre dostu çalışma prensibi ve
                uzun ömürlü kullanım avantajlarıyla işletmeler için güvenilir
                enerji çözümleri sunmaktadır. Gelişmiş motor ve alternatör
                teknolojileri ile donatılan jeneratör sistemleri, enerji
                verimliliğini maksimum seviyeye çıkarırken işletme
                maliyetlerini minimum seviyede tutmayı hedefler.
              </p>
              <p>
                Kesintisiz enerji ihtiyacının kritik önem taşıdığı günümüzde;
                sanayi tesisleri, fabrikalar, veri merkezleri, hastaneler,
                oteller, şantiyeler, alışveriş merkezleri, telekom altyapıları,
                kamu kurumları ve savunma sanayii projeleri için güçlü ve
                sürdürülebilir çözümler sağlamaktadır.
              </p>
              <p>
                Stabil çalışma yapısı sayesinde ani yük değişimlerinde yüksek
                performans sunarken, dayanıklı gövde yapısı ile zorlu çalışma
                koşullarında uzun yıllar güvenle kullanılabilmektedir.
              </p>
            </div>
          </div>

          {/* RIGHT: dark card with power range */}
          <div
            className="relative overflow-hidden bg-brand-black p-10 flex flex-col justify-center min-h-[360px]"
            style={{ borderRadius: "12px 12px 0 12px" }}
          >
            {/* big watermark */}
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
              <p className="text-white text-5xl font-extrabold mb-2">20</p>
              <p className="text-white/40 text-lg font-light mb-1">— ile —</p>
              <p className="text-white text-5xl font-extrabold mb-6">2800 kVA</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Farklı ihtiyaçlara uygun geniş güç aralığında
                profesyonel jeneratör çözümleri
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Models ────────────────────────────────────────────────────────────────────
const models = [
  {
    title: "Kabinli (Sessiz Kabinli)",
    desc: "Şehir içi kullanım alanlarında düşük ses seviyesi sağlayarak çevresel konfor sunar. Tashfoam süngeri ile süper sessiz kabin tasarımı.",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
        <rect x="4" y="14" width="40" height="26" rx="3" opacity=".15" />
        <rect x="4" y="14" width="40" height="26" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <rect x="10" y="20" width="28" height="14" rx="2" opacity=".3" />
        <circle cx="24" cy="8" r="4" opacity=".4" />
        <line x1="24" y1="12" x2="24" y2="14" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Kabinsiz (Open Type)",
    desc: "Endüstriyel tesisler ve jeneratör odaları için yüksek erişilebilirlik ve kolay bakım avantajı sağlar.",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
        <rect x="4" y="18" width="40" height="22" rx="2" opacity=".15" />
        <rect x="4" y="18" width="40" height="22" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <rect x="10" y="24" width="12" height="10" rx="1" opacity=".4" />
        <rect x="26" y="24" width="12" height="10" rx="1" opacity=".4" />
        <line x1="4" y1="30" x2="44" y2="30" stroke="currentColor" strokeWidth="1.5" opacity=".3" />
      </svg>
    ),
  },
  {
    title: "Otomatik Transfer Panolu",
    desc: "Şebeke kesintisinde devreye giren otomatik transfer panolu sistemler; kesintisiz enerji sürekliliği sağlar.",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
        <rect x="8" y="8" width="32" height="32" rx="3" opacity=".12" />
        <rect x="8" y="8" width="32" height="32" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="24" cy="24" r="8" opacity=".25" />
        <path d="M20 24l3 3 6-6" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Senkronize Sistemler",
    desc: "Birden fazla jeneratörün paralel çalışabildiği senkronize altyapılar ile büyük güç ihtiyaçları karşılanır.",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
        <circle cx="14" cy="24" r="8" opacity=".15" />
        <circle cx="34" cy="24" r="8" opacity=".15" />
        <circle cx="14" cy="24" r="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="34" cy="24" r="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <line x1="22" y1="24" x2="26" y2="24" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
];

function Models() {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((m) => (
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

// ── Detail Text ───────────────────────────────────────────────────────────────
function Detail() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-5 text-gray-600 leading-relaxed text-base">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-2">
              Teknoloji & Performans
            </p>
            <p>
              Modern kontrol sistemleri sayesinde jeneratörler; yakıt tasarrufu,
              stabil enerji yönetimi ve yüksek verimlilik avantajı sunmaktadır.
              Düşük emisyon değerleri, optimize edilmiş motor yapısı ve akıllı
              kontrol panelleri ile hem ekonomik kullanım hem de sürdürülebilir
              enerji yönetimi desteklenmektedir.
            </p>
            <p>
              Motus Sistem olarak yalnızca ürün tedariği değil; keşif,
              projelendirme, montaj, devreye alma, bakım ve teknik servis
              süreçlerinde de profesyonel destek sunuyoruz. Uzman teknik
              ekibimiz ile işletmenizin ihtiyaç duyduğu en doğru jeneratör
              çözümünü belirleyerek kesintisiz enerji güvenliği sağlıyoruz.
            </p>
            <p>
              Yüksek kalite standartlarında sunulan jeneratör setleri; güçlü
              performansı, ekonomik işletme avantajı ve uzun ömürlü yapısıyla
              enerji ihtiyaçlarınız için güvenilir bir çözüm ortağıdır.
            </p>
            <div className="pt-4">
              <Link
                to="/iletisim"
                className="inline-flex items-center gap-2 bg-brand-black text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors"
              >
                Teklif Alın
              </Link>
            </div>
          </div>

          {/* RIGHT: feature list */}
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-6">
              Öne Çıkan Özellikler
            </p>
            <ul className="space-y-0 divide-y divide-gray-100">
              {[
                "20 – 2800 kVA aralığındaki güç seçenekleri",
                "Çevresel koşullara dayanıklı uzun ömürlü tasarım",
                "Az yer kaplayan kompakt tasarım",
                "Farklı sektörlere yönelik özel çözümler",
                "Daha uzun bakım aralıkları",
                "Tashfoam süngeri ile süper sessiz kabin tasarımı",
                "Global standartlara uygun tasarım ve üretim",
                "Uzaktan İzleme Sistemi",
              ].map((f) => (
                <li key={f} className="flex items-center gap-4 py-4">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: "#FB5800" }}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="w-3 h-3"
                    >
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
          Kesintisiz Enerji İçin
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase mb-8">
          SİZİN İÇİN EN DOĞRU JENERATÖRÜ BELİRLEYELİM
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
export default function DizelJeneratorPage() {
  return (
    <>
      <Hero />
      <Intro />
      <Models />
      <Detail />
      <CTABanner />
    </>
  );
}
