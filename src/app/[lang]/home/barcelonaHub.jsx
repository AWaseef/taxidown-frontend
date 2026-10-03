import Link from 'next/link'
import { readyLandings, ui } from '@/lib/landings'

// Internal links from the home page to every published Barcelona landing page.
export default function BarcelonaHub({ lang }) {
  const t = ui[lang]
  const pages = readyLandings(lang)
  if (pages.length === 0) return null
  const vehicles = pages.filter((p) => p.kind === 'vehicle')
  const destinations = pages.filter((p) => p.kind !== 'vehicle')

  const group = (title, items) => items.length > 0 && (
    <div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((p) => (
          <li key={p.id}>
            <Link href={`/${lang}/${p.slug[lang]}`} className="block rounded-xl border border-gray-200 bg-white px-4 py-3 hover:border-orange-500 hover:shadow-md transition">
              {p[lang].h1}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">{t.hubTitle}</h2>
        <div className="grid gap-10 lg:grid-cols-2">
          {group(t.hubDestinations, destinations)}
          {group(t.hubVehicles, vehicles)}
        </div>
      </div>
    </section>
  )
}
