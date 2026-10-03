# Content for quickpickups.es (to port to the production repo)

- `translations/landings-<lang>.mjs`: the 11 Barcelona landing pages translated into
  ca, fr, de, it, nl, pt, zh-Hans, ja, ko and ar. Same ids as `src/lib/landings.js`
  (es/en source). Each file exports `lang`, `hreflang`, `dir`, `ui` and `pages`.
  Every «DATO: …» marker is data still to be confirmed by QuickPickups — never publish
  a page that still contains one.
- `blog/*.md`: 6 articles in Spanish and English (YAML front matter + Markdown).
  Items marked [VERIFICAR]/[VERIFY] must be checked before publishing.
