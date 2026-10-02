import { LOCALES, languageAlternates, localeUrl } from "@/lib/seo";

// Only public, indexable pages. Private/transactional pages are noindex.
const PAGES = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap() {
  return PAGES.flatMap(({ path, changeFrequency, priority }) =>
    LOCALES.map((lang) => ({
      url: localeUrl(lang, path),
      changeFrequency,
      priority,
      alternates: { languages: languageAlternates(path) },
    }))
  );
}
