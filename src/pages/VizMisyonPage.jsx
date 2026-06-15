import { Link } from "react-router-dom";

// ── Hero ──────────────────────────────────────────────────────────────────────
function VizMisyonHero() {
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
              VİZYON
              <br />
              &amp;
              <br />
              MİSYON
            </h1>
            <p className="text-gray-500 text-sm mt-4 max-w-xs">
              Motus Sistem — Enerji sistemlerinde güven ve sürdürülebilirlik
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
              src="/images/vizyon-misyon.png"
              alt="Motus Sistem — Vizyon ve Misyon"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* dark overlay */}
            <div className="absolute inset-0 bg-brand-black/20" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Vizyon ────────────────────────────────────────────────────────────────────
function Vizyon() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: accent block */}
          <div className="relative">
            <div
              className="relative overflow-hidden aspect-[4/3] max-w-lg mx-auto lg:mx-0 bg-brand-black"
              style={{ borderRadius: "12px 12px 0 12px" }}
            >
              {/* big V watermark */}
              <span
                className="absolute inset-0 flex items-center justify-center text-white/5 font-extrabold select-none pointer-events-none"
                style={{ fontSize: "clamp(10rem,30vw,18rem)", lineHeight: 1 }}
              >
                V
              </span>
              {/* Orange bar */}
              <div className="absolute left-0 top-0 h-full w-2 bg-brand-orange" />
              <div className="relative z-10 flex flex-col justify-center h-full px-12 py-12">
                <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-orange mb-6">
                  Vizyonumuz
                </p>
                <p className="text-white text-lg leading-relaxed font-medium">
                  Enerji sürekliliğinin kritik olduğu her noktada; güvenilir,
                  yenilikçi ve sürdürülebilir çözümler sunarak Türkiye'nin
                  öncü güç sistemleri markalarından biri olmak.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: content */}
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-500 mb-4">
              Vizyonumuz
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-black uppercase leading-tight mb-6">
              SEKTÖRÜN
              <br />
              ÖNCÜ
              <br />
              MARKASI
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-base">
              Enerji sürekliliğinin kritik olduğu her noktada; güvenilir,
              yenilikçi ve sürdürülebilir çözümler sunarak Türkiye'nin öncü
              güç sistemleri markalarından biri olmak.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              Motus Sistem olarak, jeneratör, UPS ve enerji altyapı
              çözümlerinde yalnızca ürün sağlayan değil; müşterilerinin
              operasyonel güvenliğini koruyan uzun vadeli bir çözüm ortağı
              olmayı hedefliyoruz. Teknolojiyi yakından takip eden yapımız,
              hızlı servis anlayışımız ve güçlü teknik altyapımız ile
              sektörde kalite ve güvenin simgesi olmayı amaçlıyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Misyon ────────────────────────────────────────────────────────────────────
function Misyon() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: content */}
          <div className="order-2 lg:order-1">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-500 mb-4">
              Misyonumuz
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-black uppercase leading-tight mb-6">
              ÇÖZÜM
              <br />
              ODAKLI
              <br />
              HİZMET
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-base">
              Müşterilerimizin enerji ihtiyaçlarını doğru analiz ederek; yüksek
              verimlilik, kesintisiz çalışma ve maksimum güvenlik sağlayan
              çözümler üretmek.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              Motus Sistem, satış öncesinden satış sonrasına kadar tüm
              süreçlerde şeffaf, hızlı ve çözüm odaklı hizmet anlayışıyla
              hareket eder. Güçlü teknik ekibimiz ve sürdürülebilir hizmet
              yaklaşımımız sayesinde işletmelerin enerji altyapılarını güvence
              altına alırken, uzun ömürlü ve ekonomik sistemler sunmayı temel
              prensip edinir.
            </p>
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-2 bg-brand-black text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors"
            >
              Bizimle İletişime Geçin
            </Link>
          </div>

          {/* RIGHT: accent block */}
          <div className="order-1 lg:order-2 relative">
            <div
              className="relative overflow-hidden aspect-[4/3] max-w-lg mx-auto lg:mx-0"
              style={{
                borderRadius: "12px 12px 12px 0",
                background:
                  "linear-gradient(135deg,#e6823e 0%,#c86a44 40%,#7a4d66 100%)",
              }}
            >
              {/* big M watermark */}
              <span
                className="absolute inset-0 flex items-center justify-center text-white/5 font-extrabold select-none pointer-events-none"
                style={{ fontSize: "clamp(10rem,30vw,18rem)", lineHeight: 1 }}
              >
                M
              </span>
              {/* Orange bar */}
              <div className="absolute right-0 top-0 h-full w-2 bg-white/30" />
              <div className="relative z-10 flex flex-col justify-center h-full px-12 py-12">
                <p className="text-xs font-bold tracking-[0.25em] uppercase text-white/70 mb-6">
                  Misyonumuz
                </p>
                <p className="text-white text-lg leading-relaxed font-medium">
                  Müşterilerimizin enerji ihtiyaçlarını doğru analiz ederek;
                  yüksek verimlilik, kesintisiz çalışma ve maksimum güvenlik
                  sağlayan çözümler üretmek.
                </p>
              </div>
            </div>
          </div>
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
          Güçlü Altyapı, Güvenilir Çözüm
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase mb-8">
          ENERJİ ALTYAPINIZI GÜVENCE ALTINA ALALIM
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
export default function VizMisyonPage() {
  return (
    <>
      <VizMisyonHero />
      <Vizyon />
      <Misyon />
      <CTABanner />
    </>
  );
}
