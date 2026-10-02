export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.quickpickups.es").replace(/\/$/, "")
export const SITE_NAME = "QuickPickups"
export const CONTACT_EMAIL = "info@quickpickups.es"

export const LOCALES = ["en", "es"]
export const DEFAULT_LOCALE = "en"

const OG_LOCALES = { en: "en_GB", es: "es_ES" }

export const localeUrl = (lang, path = "") => `${SITE_URL}/${lang}${path}`

export function languageAlternates(path = "") {
  return {
    en: localeUrl("en", path),
    es: localeUrl("es", path),
    "x-default": localeUrl(DEFAULT_LOCALE, path),
  }
}

// Metadata for an indexable page: self-referencing canonical + hreflang per locale.
export function indexablePage({ lang, path = "", title, description }) {
  const url = localeUrl(lang, path)
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
