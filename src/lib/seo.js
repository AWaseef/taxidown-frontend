export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.quickpickups.es").replace(/\/$/, "")
export const SITE_NAME = "QuickPickups"
export const CONTACT_EMAIL = "info@quickpickups.es"
export const CONTACT_PHONE = "+34 711 206 600"

export const LOCALES = ["en", "es"]
export const DEFAULT_LOCALE = "en"

const OG_LOCALES = { en: "en_GB", es: "es_ES" }

export const localeUrl = (lang, path = "") => `${SITE_URL}/${lang}${path}`

// `path` is either one path shared by every locale ("/terms") or a map of
// per-locale paths ({ en: "/barcelona-airport-transfer", es: "/traslado-…" }).
const pathFor = (path, lang) => (typeof path === "string" ? path : path[lang])

export function languageAlternates(path = "") {
  return {
    ...Object.fromEntries(LOCALES.map((l) => [l, localeUrl(l, pathFor(path, l))])),
    "x-default": localeUrl(DEFAULT_LOCALE, pathFor(path, DEFAULT_LOCALE)),
  }
}

// Metadata for an indexable page: self-referencing canonical + hreflang per locale.
export function indexablePage({ lang, path = "", title, description }) {
  const url = localeUrl(lang, pathFor(path, lang))
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      title: title?.absolute ?? title,
      description,
      url,
      siteName: SITE_NAME,
      locale: OG_LOCALES[lang],
      alternateLocale: LOCALES.filter((l) => l !== lang).map((l) => OG_LOCALES[l]),
      type: "website",
      // Child routes don't inherit the [lang]/opengraph-image file once they set openGraph.
      images: [{ url: `/${lang}/opengraph-image`, width: 1200, height: 630, alt: title?.absolute ?? title }],
    },
    twitter: {
      card: "summary_large_image",
      title: title?.absolute ?? title,
      description,
    },
  }
}

// Metadata for private / transactional pages that must stay out of the index.
export function privatePage({ title }) {
  return {
    title,
    robots: { index: false, follow: true },
  }
}
