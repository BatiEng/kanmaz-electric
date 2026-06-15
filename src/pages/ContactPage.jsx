import { useState } from "react";
import { Link } from "react-router-dom";

// ── Contact Hero ──────────────────────────────────────────────────────────────
function ContactHero() {
  return (
    <section className="bg-white pt-10 pb-0 overflow-hidden">
      <div className="container-xl">
        {/* TOP: text card */}
        <div className="relative grid grid-cols-1 lg:grid-cols-5 items-end gap-0">
          {/* LEFT — white text card */}
          <div className="relative z-10 bg-white lg:col-span-2 pb-10 pt-6 pr-8">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-4">
              İletişim
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-brand-black leading-tight">
              BİZİMLE
              <br />
              İLETİŞİME
              <br />
              GEÇİN
            </h1>
            <p className="text-gray-500 text-sm mt-4 max-w-xs">
              Motus Sistem — Nilüfer, Bursa
            </p>

            {/* Orange corner triangle */}
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

          {/* RIGHT — single photo */}
          <div
            className="lg:col-span-3 relative overflow-hidden"
            style={{ borderRadius: "16px 16px 16px 0", minHeight: "340px" }}
          >
            <img
              src="/images/contact.jpg"
              alt="Motus Sistem — Pano ve Jeneratör Sistemleri"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.2) 100%)",
              }}
            />
          </div>
        </div>

        {/* BOTTOM: 3-col contact info bar */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 border-t mt-0"
          style={{ borderColor: "#e5e7eb" }}
        >
          {/* Col 1 — Address */}
          <div
            className="flex items-start gap-4 py-8 md:pr-8"
            style={{ borderRight: "1px solid #e5e7eb" }}
          >
            <div className="w-10 h-10 shrink-0 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-brand-black"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                Adres
              </p>
              <p className="font-bold text-brand-black text-sm leading-snug">
                NİLTİM – Üçevler Mah. Ersan Sokak 8A Kat:1A
                <br />
                İbrahim Yazıcı Plaza 2, 16120 Nilüfer/Bursa
              </p>
            </div>
          </div>

          {/* Col 2 — Email */}
          <div
            className="flex items-start gap-4 py-8 md:px-8"
            style={{ borderRight: "1px solid #e5e7eb" }}
          >
            <div className="w-10 h-10 shrink-0 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-brand-black"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                Bize Yazın
              </p>
              <a
                href="mailto:emrekanmaz@motussistem.com"
                className="font-bold text-brand-black text-sm hover:text-brand-orange transition-colors"
              >
                emrekanmaz@motussistem.com
              </a>
            </div>
          </div>

          {/* Col 3 — Phone */}
          <div className="flex items-start gap-4 py-8 md:pl-8">
            <div className="w-10 h-10 shrink-0 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-brand-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                7/24 Acil
              </p>
              <a
                href="tel:+905301553544"
                className="font-bold text-brand-black text-sm hover:text-brand-orange transition-colors"
              >
                0 (530) 155 35 44
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Contact Info Cards ────────────────────────────────────────────────────────
const contactItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
    label: "Telefon",
    value: "0 (530) 155 35 44",
    subvalue: "7/24 Acil: (212) 999 00 11",
    href: "tel:+905301553544",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
    label: "E-posta",
    value: "emrekanmaz@motussistem.com",
    subvalue: "destek@kanmazelektrik.com",
    href: "mailto:emrekanmaz@motussistem.com",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    label: "Adres",
    value: "NİLTİM – Üçevler Mah. Ersan Sokak 8A Kat:1A",
    subvalue: "İbrahim Yazıcı Plaza 2, 16120 Nilüfer/Bursa",
    href: null,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
          clipRule="evenodd"
        />
      </svg>
    ),
    label: "Çalışma Saatleri",
    value: "Pazartesi – Cumartesi: 08:00 – 18:00",
    subvalue: "Pazar: Sadece Acil Servis",
    href: null,
  },
];

function ContactInfoCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {contactItems.map((item) => (
        <div
          key={item.label}
          className="bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-4">
            {item.icon}
          </div>
          <h3 className="font-bold text-brand-black mb-2 text-sm uppercase tracking-wide">
            {item.label}
          </h3>
          {item.href ? (
            <a
              href={item.href}
              className="block text-sm font-semibold text-brand-black hover:text-brand-orange transition-colors mb-0.5"
            >
              {item.value}
            </a>
          ) : (
            <p className="text-sm font-semibold text-brand-black mb-0.5">
              {item.value}
            </p>
          )}
          <p className="text-xs text-gray-500">{item.subvalue}</p>
        </div>
      ))}
    </div>
  );
}

// ── Contact Form ──────────────────────────────────────────────────────────────
const serviceOptions = [
  "Elektrik Tamiri",
  "Acil Servis",
  "Aydınlatma Kurulumu",
  "EV Şarj Kurulumu",
  "Elektrik Şalterleri",
  "Pano Yükseltme",
  "Duman Dedektörleri",
  "Solar Çözümler",
  "Diğer",
];

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  const inputCls =
    "w-full bg-white text-brand-black placeholder-gray-400 px-4 py-3 text-sm rounded-lg outline-none focus:ring-2 focus:ring-brand-black transition";
  const labelCls =
    "block text-white/70 text-[10px] font-bold uppercase tracking-widest mb-1.5";

  if (submitted) {
    return (
      <div className="text-center py-10">
        <svg
          className="w-14 h-14 text-white mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-xl font-extrabold text-white uppercase mb-2">
          Teşekkürler!
        </h3>
        <p className="text-white/80 text-sm mb-6">
          En kısa sürede size dönüş yapacağız.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              service: "",
              message: "",
            });
          }}
          className="inline-flex items-center gap-2 bg-brand-black text-white px-6 py-3 font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-gray-900 transition-colors"
        >
          Yeni Mesaj Gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Row 1: Ad + Soyad */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Ad</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="örn. Ahmet"
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>Soyad</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="örn. Yılmaz"
            className={inputCls}
          />
        </div>
      </div>

      {/* Row 2: Email + Tel */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>E-posta Adresi</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="örn. ahmet@email.com"
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>Telefon Numarası</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="örn. 0212 345 67 89"
            className={inputCls}
          />
        </div>
      </div>

      {/* Row 3: Mesaj */}
      <div>
        <label className={labelCls}>Nasıl Yardımcı Olabiliriz?</label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Buraya yazın…"
          className={`${inputCls} resize-none`}
        />
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 bg-brand-black text-white px-7 py-3.5 font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-gray-900 transition-colors disabled:opacity-60"
        >
          {loading ? (
            <>
              <svg
                className="w-4 h-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Gönderiliyor...
            </>
          ) : (
            <>
              <svg
                className="w-4 h-4 text-brand-orange"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Gönder
            </>
          )}
        </button>
      </div>
    </form>
  );
}

// ── Map Section ───────────────────────────────────────────────────────────────
function MapSection() {
  return (
    <section className="w-full relative" style={{ height: "480px" }}>
      <iframe
        title="Motus Sistem Konum"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.8847397604277!2d28.931899511961294!3d40.211626771354354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca11087820f7cb%3A0xf357a2e177e171e9!2sCampusPlus!5e0!3m2!1str!2str!4v1779432893523!5m2!1str!2str"
        width="100%"
        height="100%"
        style={{ border: 0, display: "block" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Address overlay — top left */}
      <div className="absolute top-4 left-4 z-10 bg-white shadow-lg rounded-xl p-4 flex items-start gap-3 max-w-[280px]">
        <svg
          className="w-5 h-5 text-brand-orange shrink-0 mt-0.5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
        <div>
          <p className="font-extrabold text-brand-black text-sm">
            Motus Sistem
          </p>
          <p className="text-gray-500 text-xs leading-relaxed mt-0.5">
            NİLTİM – Üçevler Mah. Ersan Sk. 8A Kat:1A
            <br />
            İbrahim Yazıcı Plaza 2, 16120 Nilüfer/Bursa
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Contact FAQ ───────────────────────────────────────────────────────────────
const contactFaqs = [
  {
    q: "Elektrik çalışması sırasında evinizin güvenliğini nasıl sağlıyorsunuz?",
    a: "Tüm çalışmalarımız öncesinde güvenlik kontrolü yapılır. Lisanslı elektrikçilerimiz gerekli önlemleri alarak çalışır; iş bittikten sonra tam test ve kontrol yapılır.",
  },
  {
    q: "Tadilat için doğru elektrikçiyi nasıl seçersiniz?",
    a: "Lisans ve sertifikayı kontrol edin, referans isteyin ve yazılı teklif alın. Biz her projede şeffaf fiyatlandırma ve belgelenmiş uzmanlık sunuyoruz.",
  },
  {
    q: "Yenileme sırasında eski elektrik tesisatını yükseltebilir misiniz?",
    a: "Evet. Eski panoları, sigortaları ve kablo hatlarını güncel standartlara uygun hale getiriyor; aynı zamanda enerji verimliliğini artırıyoruz.",
  },
  {
    q: "Acil elektrik arızalarında ne kadar sürede geliyorsunuz?",
    a: "7/24 acil servisimiz İstanbul genelinde ortalama 60 dakika içinde yerinde hazır oluyor. Arayın, ekibimiz yola çıksın.",
  },
  {
    q: "Hizmetleriniz için garanti veriyor musunuz?",
    a: "Evet, tüm işçilik ve malzeme için garanti veriyoruz. İşin tamamlanmasından sonra herhangi bir sorun yaşarsanız ücretsiz olarak geri dönüyoruz.",
  },
  {
    q: "Teklif almak için ne yapmalıyım?",
    a: "Formumuzu doldurun ya da bizi arayın. Uzmanlarımız en kısa sürede size ücretsiz keşif ve teklif hazırlasın.",
  },
];

function ContactFAQ() {
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
                <a
                  href="tel:+905301553544"
                  className="underline font-semibold text-brand-black hover:text-brand-orange transition-colors"
                >
                  bizi arayın
                </a>
              </p>
            </div>

            {/* Krem kart */}
            <div
              className="relative bg-[#f0ece6] p-7 overflow-hidden"
              style={{ borderRadius: "16px", maxWidth: "320px" }}
            >
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
              <div className="w-12 h-12 rounded-full border-2 border-brand-black flex items-center justify-center mb-5">
                <span className="text-brand-black font-extrabold text-lg leading-none">
                  ?
                </span>
              </div>
              <h3 className="font-extrabold text-brand-black text-base mb-5">
                Sorularınız Basit Cevaplar Buluyor
              </h3>
              <a
                href="tel:+905301553544"
                className="inline-flex items-center gap-2 bg-brand-black text-white px-5 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors"
              >
                Hemen Ara
              </a>
            </div>
          </div>

          {/* RIGHT — accordion */}
          <div className="lg:col-span-3">
            {contactFaqs.map((faq, i) => (
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

// ── Emergency Banner ──────────────────────────────────────────────────────────
function EmergencyBanner() {
  return (
    <div className="bg-brand-orange py-4">
      <div className="container-xl flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-white">
          <svg
            className="w-5 h-5 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span className="font-bold text-sm">
            Acil Elektrik Arızası mı? 7/24 Hizmetinizdeyiz!
          </span>
        </div>
        <a
          href="tel:+902129990011"
          className="bg-white text-brand-orange font-extrabold px-6 py-2 text-sm hover:bg-gray-100 transition-colors shrink-0"
        >
          ACİL: (212) 999 00 11
        </a>
      </div>
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <>
      <ContactHero />

      {/* ── Form Section ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-xl">
          <div className="">
            {/* RIGHT — orange form card */}
            <div
              className="relative bg-brand-orange p-8 md:p-10 flex flex-col justify-center"
              style={{
                borderRadius: "16px",
                clipPath:
                  "polygon(0 0, calc(100% - 52px) 0, 100% 52px, 100% 100%, 0 100%)",
              }}
            >
              {/* Notch shadow fill */}
              <div
                className="absolute top-0 right-0"
                style={{
                  width: 0,
                  height: 0,
                  borderStyle: "solid",
                  borderWidth: "0 52px 52px 0",
                  borderColor:
                    "transparent rgba(0,0,0,0.15) transparent transparent",
                }}
              />

              <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-white leading-tight mb-3 pr-12">
                Ücretsiz Keşif İçin Bize Yazın
              </h2>
              <p className="text-white/80 text-sm leading-relaxed mb-7">
                Enerji sistemi ihtiyacınız için formu doldurun. Uzman ekibimiz
                en kısa sürede sizinle iletişime geçerek ücretsiz keşif ve
                teklif hazırlasın.
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <MapSection />
    </>
  );
}
