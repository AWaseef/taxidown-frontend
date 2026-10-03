import { LOCALES, languageAlternates, localeUrl } from "@/lib/seo";
import { isReady, landingPaths, landings } from "@/lib/landings";

// Only public, indexable pages. Private/transactional pages are noindex.
const PAGES = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap() {
  const pages = PAGES.flatMap(({ path, changeFrequency, priority }) =>
    LOCALES.map((lang) => ({
      url: localeUrl(lang, path),
      changeFrequency,
      priority,
      alternates: { languages: languageAlternates(path) },
    }))
  );
  const landingPages = landings.flatMap((page) => {
    const paths = landingPaths(page);
    return LOCALES.filter((lang) => isReady(page, lang)).map((lang) => ({
      url: localeUrl(lang, paths[lang]),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: languageAlternates(paths) },
    }));
  });
  return [...pages, ...landingPages];
}
