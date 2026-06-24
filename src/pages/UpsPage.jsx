import { Link } from "react-router-dom";

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-white pt-10 pb-0 overflow-hidden">
      <div className="container-xl">
        <div className="relative grid grid-cols-1 lg:grid-cols-5 items-center gap-8">
          <div className="relative z-10 bg-white lg:col-span-2 py-10 pr-8 flex flex-col justify-center">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-4">Ürünler</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-brand-black leading-tight">
              UPS<br />SİSTEMLERİ
            </h1>
            <p className="text-gray-500 text-sm mt-4 max-w-xs">
              Kesintisiz güç kaynağı çözümleri ile kritik sistemlerinizi koruyun
            </p>
          </div>
          <div className="lg:col-span-3 relative overflow-hidden" style={{ borderRadius: "16px", maxHeight: "440px" }}>
            <img src="/images/ups.jpeg" alt="Motus Sistem — UPS Sistemleri" className="w-full h-full object-cover" style={{ maxHeight: "440px" }} />
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
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-4">Genel Bakış</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase leading-tight mb-6">
              KESİNTİSİZ GÜÇ<br />KAYNAĞI<br />SİSTEMLERİ
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>
                UPS (Uninterruptible Power Supply – Kesintisiz Güç Kaynağı), elektrik kesintileri,
                voltaj dalgalanmaları ve şebeke kaynaklı enerji problemlerine karşı kritik yükleri
                koruyan sistemlerdir. Elektrik kesildiği anda devreye girerek bağlı ekipmanların
                çalışmaya devam etmesini sağlar ve veri kaybı, üretim duruşu veya ekipman hasarı
                gibi risklerin önüne geçer.
              </p>
              <p>
                Günümüzde enerji sürekliliği yalnızca büyük tesisler için değil, tüm işletmeler
                için kritik bir ihtiyaç haline gelmiştir. UPS sistemleri; veri merkezleri,
                fabrikalar, hastaneler, bankalar, telekomünikasyon altyapıları, ofisler, alışveriş
                merkezleri ve kritik üretim hatları gibi birçok alanda güvenle kullanılmaktadır.
              </p>
              <p>
                UPS sistemleri yalnızca elektrik kesintilerinde enerji sağlamakla kalmaz; düşük
                voltaj, yüksek voltaj, harmonik bozulmalar ve ani gerilim değişimlerine karşı da
                bağlı ekipmanları koruyarak sistemlerin daha güvenli ve uzun ömürlü çalışmasına
                katkı sağlar.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden bg-brand-black p-10 flex flex-col justify-center min-h-[320px]" style={{ borderRadius: "12px 12px 0 12px" }}>
            <span className="absolute inset-0 flex items-center justify-center font-extrabold text-white/5 select-none pointer-events-none uppercase" style={{ fontSize: "7rem", lineHeight: 1 }}>
              UPS
            </span>
            <div className="absolute left-0 top-0 h-full w-2 bg-brand-orange" />
            <div className="relative z-10 space-y-4">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-orange">Nerelerde Kullanılır?</p>
              {[
                "Veri merkezleri ve sunucu odaları",
                "Endüstriyel üretim tesisleri",
                "Hastaneler ve sağlık kuruluşları",
                "Bankalar ve finans kuruluşları",
                "Telekomünikasyon sistemleri",
                "Güvenlik ve kamera sistemleri",
                "Ofisler ve ticari yapılar",
                "Kritik otomasyon ve kontrol sistemleri",
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

// ── Çözümler ──────────────────────────────────────────────────────────────────
const upsSolutions = [
  {
    title: "Online UPS Sistemleri",
    desc: "Çift dönüşüm teknolojisi ile sürekli olarak tam koruma sağlar. Şebeke enerjisi kesintisiz olarak AC→DC→AC dönüşümünden geçirildiğinden bağlı yükler her koşulda temiz ve sabit gerilim alır. Veri merkezleri ve kritik üretim hatları için ideal çözümdür.",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-12 h-12">
        <rect x="8" y="12" width="32" height="24" rx="3" opacity=".12" />
        <rect x="8" y="12" width="32" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M20 24h8M24 20v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="5" fill="none" stroke="currentColor" strokeWidth="2" opacity=".4" />
        <rect x="14" y="38" width="4" height="3" rx="1" opacity=".4" />
        <rect x="30" y="38" width="4" height="3" rx="1" opacity=".4" />
      </svg>
    ),
  },
  {
    title: "Modüler UPS Sistemleri",
    desc: "Ölçeklenebilir yapısı sayesinde mevcut kapasiteye yeni modüller eklenerek büyütülebilir. Yedeklilik sağlayarak tek modül arızalandığında sistem çalışmaya devam eder. Bakım süreçleri yük altında gerçekleştirilebilir, bu da sistem kesintilerini minimize eder.",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-12 h-12">
        <rect x="6" y="14" width="16" height="10" rx="2" opacity=".12" />
        <rect x="6" y="14" width="16" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <rect x="26" y="14" width="16" height="10" rx="2" opacity=".12" />
        <rect x="26" y="14" width="16" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <rect x="16" y="28" width="16" height="10" rx="2" opacity=".2" />
        <rect x="16" y="28" width="16" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M14 24v4h4M34 24v4h-4M24 28v-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity=".5" />
      </svg>
    ),
  },
  {
    title: "Endüstriyel UPS Çözümleri",
    desc: "Sert çalışma koşullarına, geniş sıcaklık aralıklarına ve yüksek harmonik ortamlara dayanıklı olarak tasarlanmıştır. Ağır sanayi tesisleri, madencilik, petrokimya ve enerji üretim tesislerinde güvenilir enerji kalitesi sağlar.",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-12 h-12">
        <rect x="10" y="8" width="28" height="32" rx="3" opacity=".12" />
        <rect x="10" y="8" width="28" height="32" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M18 20l4 4-4 4M30 20l-4 4 4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity=".5" />
        <line x1="22" y1="16" x2="26" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".4" />
      </svg>
    ),
  },
  {
    title: "Akü Grupları ve Enerji Depolama",
    desc: "UPS sistemlerinin özerk çalışma süresini belirleyen akü grupları, ihtiyaca göre boyutlandırılarak uzun süreli enerji depolama imkânı sunar. VRLA, jel ve lityum tabanlı akü teknolojileri ile optimum kapasite ve ömür sağlanır.",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-12 h-12">
        <rect x="12" y="14" width="24" height="20" rx="2" opacity=".12" />
        <rect x="12" y="14" width="24" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <rect x="18" y="10" width="5" height="4" rx="1" opacity=".4" />
        <rect x="25" y="10" width="5" height="4" rx="1" opacity=".4" />
        <path d="M22 24h4M24 22v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "UPS Dağıtım ve Bypass Panoları",
    desc: "UPS çıkışını kritik yüklere güvenli şekilde dağıtan ve bakım süreçlerinde yükün bypass hattına alınmasını sağlayan panolardır. Sistem güvenilirliğini artırırken bakım ve servis süreçlerinin kesinti olmaksızın gerçekleştirilmesine olanak tanır.",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-12 h-12">
        <rect x="8" y="10" width="32" height="28" rx="3" opacity=".12" />
        <rect x="8" y="10" width="32" height="28" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="24" cy="20" r="4" opacity=".3" />
        <line x1="24" y1="24" x2="24" y2="28" stroke="currentColor" strokeWidth="2" />
        <line x1="24" y1="28" x2="17" y2="33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="28" x2="31" y2="33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="17" cy="35" r="2" opacity=".4" />
        <circle cx="31" cy="35" r="2" opacity=".4" />
      </svg>
    ),
  },
  {
    title: "Periyodik Bakım ve Teknik Servis",
    desc: "UPS sistemlerinin ömrünü ve performansını korumak için düzenli bakım şarttır. Akü sağlık testleri, kontaktör ve sigorta kontrolleri, yazılım güncellemeleri ve yük testleri gibi kapsamlı periyodik bakım hizmetleri sunulmaktadır.",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-12 h-12">
        <path d="M14 8a6 6 0 0 0 0 8l18 18a6 6 0 0 0 8-8L22 8a6 6 0 0 0-8 0z" opacity=".12" />
        <path d="M14 8a6 6 0 0 0 0 8l18 18a6 6 0 0 0 8-8L22 8a6 6 0 0 0-8 0z" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M8 38l5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity=".5" />
        <circle cx="13" cy="35" r="2" fill="currentColor" opacity=".4" />
      </svg>
    ),
  },
];

function Solutions() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="container-xl">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-3">Motus Sistem UPS Çözümleri</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase">ÇÖZÜM YELPAZEMİZ</h2>
          <div className="w-10 h-0.5 bg-gray-300 mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {upsSolutions.map((s) => (
            <div key={s.title} className="bg-white p-8 flex flex-col gap-5 hover:shadow-md transition-shadow" style={{ borderRadius: "12px 12px 0 12px" }}>
              <div className="text-brand-black">{s.icon}</div>
              <h3 className="font-extrabold text-brand-black text-sm uppercase tracking-wide">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Closing ───────────────────────────────────────────────────────────────────
function Closing() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-4">Mühendislik Yaklaşımı</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase leading-tight mb-6">
              PROJELENDİRMEDEN<br />DEVREYE ALMAYA<br />TAM DESTEK
            </h2>
            <p className="text-gray-600 leading-relaxed text-base mb-8">
              Motus Sistem olarak işletmelerin ihtiyaçlarına uygun UPS çözümlerini projelendiriyor,
              kuruyor ve devreye alıyoruz. Güç analizinden sistem tasarımına, montajdan bakım ve
              teknik servis hizmetlerine kadar tüm süreçleri uzman ekibimizle yönetiyoruz. Doğru
              projelendirme, kaliteli ekipman seçimi ve profesyonel teknik destek ile kritik
              sistemlerinizin her zaman çalışır durumda kalmasını sağlıyoruz.
            </p>
            <Link to="/iletisim" className="inline-flex items-center gap-2 bg-brand-black text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors">
              Teklif Alın
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Güç Analizi", icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9"><polyline points="6,30 14,18 20,24 28,12 34,16" /><line x1="6" y1="34" x2="34" y2="34" /></svg> },
              { label: "Sistem Tasarımı", icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9"><rect x="6" y="6" width="28" height="28" rx="3" /><line x1="12" y1="20" x2="28" y2="20" /><line x1="12" y1="14" x2="22" y2="14" /><line x1="12" y1="26" x2="20" y2="26" /></svg> },
              { label: "Montaj & Kurulum", icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9"><path d="M14 8a6 6 0 0 0 0 8l12 12a6 6 0 0 0 8-8L22 8a6 6 0 0 0-8 0z" /><path d="M8 32l4-4" /></svg> },
              { label: "Teknik Servis", icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9"><circle cx="20" cy="20" r="13" /><path d="M13 20l5 5 9-9" strokeWidth="2.5" /></svg> },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 p-6 flex flex-col items-center justify-center gap-3 text-center" style={{ borderRadius: "12px 12px 0 12px" }}>
                <span className="text-brand-black">{s.icon}</span>
                <span className="text-xs font-extrabold uppercase tracking-wide text-brand-black">{s.label}</span>
              </div>
            ))}
          </div>
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
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-white/60 mb-4">Enerji Sürekliliğiniz İçin</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase mb-8">İŞLETMENİZE ÖZEL UPS ÇÖZÜMÜ SUNALIM</h2>
        <Link to="/iletisim" className="inline-flex items-center gap-2 bg-white text-brand-black px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors">
          Bizimle İletişime Geçin
        </Link>
      </div>
    </section>
  );
}

export default function UpsPage() {
  return (
    <>
      <Hero />
      <Intro />
      <Solutions />
      <Closing />
      <CTABanner />
    </>
  );
}
