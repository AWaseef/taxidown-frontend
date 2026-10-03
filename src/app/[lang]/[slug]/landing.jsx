import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import Navbar from "../home/nav";
import Footer from "../home/footer";
import { isReady, landingById, ui } from "@/lib/landings";
import { CONTACT_PHONE, SITE_URL, localeUrl } from "@/lib/seo";

function bookingHref(page, lang) {
  const service = encodeURIComponent(page.bookingService[lang]);
  return `/${lang}/pickup?pickup=&destination=&oneway=true&service=${service}`;
}

function structuredData(page, lang, t) {
  const content = page[lang];
  const url = localeUrl(lang, `/${page.slug[lang]}`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": page.kind === "vehicle" ? "Service" : "TaxiService",
        "@id": `${url}#service`,
        name: content.h1,
        description: content.description,
        url,
        inLanguage: lang,
        areaServed: { "@type": "City", name: "Barcelona" },
        provider: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: content.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.breadcrumbHome, item: localeUrl(lang) },
          { "@type": "ListItem", position: 2, name: content.h1, item: url },
        ],
      },
    ],
  };
}

export default function LandingPage({ page, lang, dict }) {
  const t = ui[lang];
  const content = page[lang];
  const ready = isReady(page, lang);
  const related = page.related.map(landingById).filter((p) => p && isReady(p, lang));
  const phoneHref = `tel:${CONTACT_PHONE.replace(/\s/g, "")}`;

  return (
    <div className="w-[100vw] bg-white text-gray-900">
      {ready && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(page, lang, t)) }}
        />
      )}
      <Navbar home={dict.lang.home} contactUs={dict.lang.contactUs} loginTitle={dict.lang.loginTitle} bookingTitle={dict.lang.bookingTitle} logoutTitle={dict.lang.logoutTitle} successLogout={dict.lang.LogoutSuccessful} lang={lang} bg="white" />

      {!ready && (
        <div className="fixed bottom-0 inset-x-0 z-50 bg-amber-100 text-amber-900 text-sm text-center py-2 px-4">
          Draft — fill in every «DATO» before publishing (this page is noindex).
        </div>
      )}

      {/* Hero */}
      <header className="relative min-h-[70vh] flex items-end bg-neutral-900 text-white">
        {page.image && (
          <Image src={page.image} alt={content.h1} fill priority sizes="100vw" className="object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
        <div className="relative max-w-5xl mx-auto w-full px-5 pt-28 pb-14 md:pb-20">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-300 mb-4">
            <Link href={`/${lang}`} className="hover:text-white">{t.breadcrumbHome}</Link>
            <span className="mx-2">›</span>
            <span aria-current="page">{content.h1}</span>
          </nav>
          <h1 className="text-[34px] md:text-[52px] leading-tight font-bold max-w-3xl truculenta">{content.h1}</h1>
          <p className="mt-5 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">{content.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={bookingHref(page, lang)} className="px-6 py-3 bg-orange-500 border-2 border-orange-500 text-white rounded-3xl font-semibold hover:bg-white hover:text-orange-600 transition">
              {t.bookNow}
            </Link>
            <a href={phoneHref} className="px-6 py-3 border-2 border-white/80 rounded-3xl font-semibold inline-flex items-center gap-2 hover:bg-white hover:text-black transition">
              <Phone className="w-4 h-4" /> {CONTACT_PHONE}
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Highlights */}
        <section className="max-w-6xl mx-auto px-5 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">{t.highlightsTitle}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-gray-100 shadow-sm p-6 bg-white">
                <div className="w-10 h-1 bg-orange-500 rounded-full mb-4" />
                <h3 className="text-lg font-semibold mb-2">{h.title}</h3>
                <p className="text-gray-600 leading-relaxed">{h.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Content sections */}
        <section className="bg-[#f8f8f8]">
          <div className="max-w-3xl mx-auto px-5 py-16 space-y-12">
            {content.sections.map((s) => (
              <article key={s.h2}>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{s.h2}</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-5 py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t.faqTitle}</h2>
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {content.faq.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex justify-between items-center gap-4 cursor-pointer list-none text-lg font-semibold">
                  {f.q}
                  <ChevronDown className="w-5 h-5 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related pages */}
        {related.length > 0 && (
          <section className="max-w-6xl mx-auto px-5 pb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{t.relatedTitle}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link key={p.id} href={`/${lang}/${p.slug[lang]}`} className="rounded-2xl border border-gray-200 p-5 hover:border-orange-500 hover:shadow-md transition">
                  <span className="block font-semibold text-lg">{p[lang].h1}</span>
                  <span className="block text-gray-600 text-sm mt-1">{p[lang].description}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="bg-black text-white">
          <div className="max-w-4xl mx-auto px-5 py-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">{t.ctaTitle}</h2>
            <p className="mt-3 text-gray-300 text-lg">{t.ctaText}</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href={bookingHref(page, lang)} className="px-6 py-3 bg-orange-500 border-2 border-orange-500 rounded-3xl font-semibold hover:bg-white hover:text-orange-600 transition">
                {t.bookNow}
              </Link>
              <a href={phoneHref} className="px-6 py-3 border-2 border-white/80 rounded-3xl font-semibold hover:bg-white hover:text-black transition">
                {t.callUs}: {CONTACT_PHONE}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} dict={dict.footer} />
    </div>
  );
}
