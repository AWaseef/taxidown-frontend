// components/Footer.js
import Link from 'next/link'
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/seo'
import { readyLandings } from '@/lib/landings'

export default function Footer({ lang, dict }) {
  const name = process.env.NEXT_PUBLIC_NAME
  const barcelona = readyLandings(lang)
  return (
    <footer className="bg-black text-white px-8 py-12 md:h-120 flex flex-col justify-end gap-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-5">
        <div className='text-center'>
          <div className='w-[30vw] text-[45px] font-medium min-w-max w-full'>{name}</div>
          <p className='w-2/3 md:w-full m-auto text-gray-300'>{dict.tagline}</p>
        </div>
        <div className='flex flex-col md:flex-row md:justify-end md:w-[50vw] md:gap-10 lg:gap-30 gap-3 justify-center'> 
            
            <nav className='flex flex-col md:text-[27px] text-[20px] font-semibold text-center text-white'>
                {dict.navigation}
                <Link href={`/${lang}`} className='text-yellow-1000 md:text-[16px] text-[15px] hover:text-yellow-600 hover:scale-105 text-gray-300'>{dict.home}</Link>   
                <Link prefetch={false} href={`/${lang}/pickup`} className='text-yellow-1000 md:text-[16px] text-[15px] hover:text-yellow-600 hover:scale-105 text-gray-300'>{dict.book}</Link>        
                <Link href={`/${lang}/terms`} className='text-yellow-1000 md:text-[16px] text-[15px] hover:text-yellow-600 hover:scale-105 text-gray-300'>{dict.terms}</Link> 
            </nav>

            {barcelona.length > 0 && (
              <nav className='flex flex-col md:text-[27px] text-[20px] font-semibold text-center text-white'>
                Barcelona
                {barcelona.map((p) => (
                  <Link key={p.id} href={`/${lang}/${p.slug[lang]}`} className='md:text-[16px] text-[15px] hover:text-yellow-600 text-gray-300'>{p[lang].h1}</Link>
                ))}
              </nav>
            )}

            <div className="flex flex-col md:text-[27px] text-[20px] font-semibold text-center">
            {dict.contact}
            <a
              href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
              className="text-gray-300 md:text-[16px] text-[15px] hover:text-yellow-600 hover:scale-105 transition-all duration-200"
            >
              {CONTACT_PHONE}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-gray-300 md:text-[16px] text-[15px] hover:text-yellow-600 hover:scale-105 transition-all duration-200"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          </div>
        </div>

      <div className="border-t border-gray-800 mt-10 mx-5 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© {new Date().getFullYear()} {name} · {dict.rights.toUpperCase()}</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href={`/${lang}/terms`}>{dict.terms.toUpperCase()}</Link>
        </div>
      </div>
    </footer>
  );
}
