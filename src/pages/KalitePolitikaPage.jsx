import { Link } from "react-router-dom";

// ── Hero ──────────────────────────────────────────────────────────────────────
function KaliteHero() {
  return (
    <section className="bg-white pt-10 pb-0 overflow-hidden">
      <div className="container-xl">
        <div className="relative grid grid-cols-1 lg:grid-cols-5 items-end gap-0">
          {/* LEFT — text card */}
          <div className="relative z-10 bg-white lg:col-span-2 pb-10 pt-6 pr-8">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-4">
              Kurumsal
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-brand-black leading-tight">
              KALİTE
              <br />
              POLİTİKAMIZ
            </h1>
            <p className="text-gray-500 text-sm mt-4 max-w-xs">
              Motus Sistem — Sürdürülebilir kalite ve güven
            </p>
            {/* Orange corner accent */}
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

          {/* RIGHT — photo */}
          <div
            className="lg:col-span-3 relative overflow-hidden"
            style={{ borderRadius: "16px 16px 16px 0", minHeight: "340px" }}
          >
            <img
              src="/images/gorsel-5.png"
              alt="Motus Sistem — Kalite Politikası"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-black/25" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Policy Text ───────────────────────────────────────────────────────────────
function PolicyText() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-xl">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-4 text-center">
            Kalite Politikamız
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase leading-tight mb-10 text-center">
            SORUMLU VE SÜRDÜRÜLEBİLİR
            <br />
            HİZMET ANLAYIŞI
          </h2>
          <div className="space-y-5 text-gray-600 leading-relaxed text-base">
            <p>
              Motus Sistem olarak; çevreye duyarlı, sürdürülebilir ve yüksek
              kalite standartlarında hizmet sunmayı temel kurumsal değerlerimiz
              arasında görüyoruz. Enerji sistemleri sektöründe faaliyet
              gösterirken yalnızca bugünü değil, geleceği de düşünerek hareket
              ediyor; ekolojik dengeyi korumaya yönelik sorumluluklarımızın
              bilinciyle çalışmalarımızı sürdürüyoruz.
            </p>
            <p>
              Faaliyetlerimiz boyunca enerji, doğal kaynak ve hammaddelerin
              verimli kullanımına önem veriyor; çevresel etkileri minimum
              seviyeye indirmeyi hedefliyoruz. Atık yönetimi süreçlerinde geri
              dönüşüm ve sürdürülebilir uygulamaları ön planda tutarak çevre
              bilincini kurum kültürümüzün bir parçası haline getiriyoruz.
            </p>
            <p>
              Motus Sistem, insan sağlığını ve iş güvenliğini tüm
              operasyonlarının merkezinde konumlandırır. Çalışanlarımız için
              güvenli çalışma ortamları oluşturmayı, olası riskleri en aza
              indirmeyi ve iş sağlığı güvenliği standartlarını eksiksiz
              uygulamayı temel prensip olarak benimser.
            </p>
            <p>
              Teknolojik gelişmeleri yakından takip ederek hizmet ve çözüm
              kalitemizi sürekli geliştirmeyi amaçlıyor; müşterilerimizin
              ihtiyaç ve beklentilerini doğru analiz ederek en uygun, en
              güvenilir ve en ekonomik çözümleri sunuyoruz. Satış öncesinden
              satış sonrasına kadar tüm süreçlerde müşteri memnuniyetini
              önceliğimiz olarak görüyoruz.
            </p>
            <p>
              Projelerimizi; zamanında, yüksek kalite standartlarında, teknik
              gerekliliklere tam uyumlu ve sürdürülebilir hizmet anlayışıyla
              tamamlamayı taahhüt ediyoruz. Eğitimli teknik kadromuz, çözüm
              odaklı yaklaşımımız ve sürekli gelişim anlayışımız ile sektörde
              güvenilir ve örnek bir marka olma hedefiyle çalışmalarımıza
              devam ediyoruz.
            </p>
            <p>
              Motus Sistem olarak; ülke ekonomisine katkı sağlayan, çevreye ve
              topluma saygılı, kalite odaklı bir kuruluş olmayı sürdürülebilir
              başarımızın temel unsuru olarak kabul ediyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Values ────────────────────────────────────────────────────────────────────
const values = [
  {
    title: "Güvenilirlik",
    description:
      "Müşterimizin ihtiyaç ve beklentilerini doğru bir şekilde anlayıp, en etkili çözümleri sunarak güvenilir bir firma olmayı hedefliyoruz.",
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor" className="w-14 h-14">
        <path d="M44 20c-1.1 0-2 .9-2 2v2H22v-2c0-1.1-.9-2-2-2s-2 .9-2 2v2h-4c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V28c0-2.2-1.8-4-4-4h-4v-2c0-1.1-.9-2-2-2zM14 28h36v4H14v-4zm0 8h36v16H14V36z" />
        {/* handshake simplified */}
        <path d="M20 40h8v4h-8zm16 0h8v4h-8z" opacity=".5" />
      </svg>
    ),
  },
  {
    title: "Kalite ve Sürekli Gelişim",
    description:
      "Teknolojik gelişmeleri yakından takip ederek, ürün ve hizmet kalitemizde sürekli gelişim sağlıyor ve ulusal ile uluslararası standartlara uygunluk sağlıyoruz.",
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor" className="w-14 h-14">
        <path d="M32 4C16.5 4 4 16.5 4 32s12.5 28 28 28 28-12.5 28-28S47.5 4 32 4zm-2 42L16 32l4-4 10 10 18-18 4 4-22 22z" />
        <circle cx="44" cy="48" r="8" opacity=".3" />
        <path d="M40 46l2 2 4-4 1.5 1.5-5.5 5.5-3.5-3.5z" fill="white" opacity=".8" />
      </svg>
    ),
  },
  {
    title: "Çevreye Saygı",
    description:
      "İçinde bulunduğumuz topluma ve çevreye saygılı, örnek bir kuruluş olarak iş hacmimizi sürekli geliştiriyor ve ülke ekonomisine katkıda bulunuyoruz.",
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor" className="w-14 h-14">
        <path d="M48 8c0 0-8 2-14 8-4 4-6 9-6 14 0 2 .3 4 .8 5.8C26.5 33.6 24 30.5 24 27c0-2.2.8-4.2 2-5.8C20.8 23.4 18 27.4 18 32c0 7.7 6.3 14 14 14 7.7 0 14-6.3 14-14 0-4.5-2.1-8.5-5.4-11.1C44.7 18.5 48 13.5 48 8z" />
      </svg>
    ),
  },
];

function Values() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="container-xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black">
            Değerlerimiz
          </h2>
          <div className="w-10 h-0.5 bg-gray-300 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((v) => (
            <div key={v.title} className="flex flex-col items-center text-center px-4">
              <div className="text-brand-black mb-5">{v.icon}</div>
              <h3 className="text-base font-extrabold text-brand-black mb-3">
                {v.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
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
          Güvenilir Hizmet, Yüksek Kalite
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase mb-8">
          KALİTELİ ÇÖZÜMLER İÇİN BİZİMLE ÇALIŞIN
        </h2>
        <Link
          to="/iletisim"
          className="inline-flex items-center gap-2 bg-white text-brand-black px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors"
        >
          Teklif Alın
        </Link>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function KalitePolitikaPage() {
  return (
    <>
      <KaliteHero />
      <PolicyText />
      <Values />
      <CTABanner />
    </>
  );
}
