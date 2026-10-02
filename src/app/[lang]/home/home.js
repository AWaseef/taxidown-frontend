import Navbar from './nav'
import Footer from './footer'
import GetFleets from './getfleets'
import { getDictionary } from '../dictionaries'
import OurServices from './ourServices'
import DriverProfessionals from './drivers'
import PickupContainer from './pickupContainer'
import { CONTACT_EMAIL, SITE_NAME, SITE_URL, localeUrl } from '@/lib/seo'

function structuredData(lang, dict) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        email: CONTACT_EMAIL,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: ["en", "es"],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "TaxiService",
        "@id": `${localeUrl(lang)}#service`,
        name: dict.home.heroTitle,
        description: dict.meta.serviceDescription,
        url: localeUrl(lang),
        inLanguage: lang,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "City", name: "Barcelona" },
      },
    ],
  }
}

export default async function HomePage({params}) {
  const {lang} = await params;
  const dict = await getDictionary(lang); // en
  return (
    <div className=' w-[100vw]'>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(lang, dict)) }}
        />
        <Navbar home={dict.lang.home} contactUs={dict.lang.contactUs} loginTitle={dict.lang.loginTitle} bookingTitle={dict.lang.bookingTitle} logoutTitle={dict.lang.logoutTitle} successLogout={dict.lang.LogoutSuccessful} lang={lang}/>
        <PickupContainer dict={dict} lang={lang} />
        <div id="ourservices">
            <OurServices lang={lang} />
        </div>
        <GetFleets title={dict.home.ourFleet} />
        <div className='flex flex-col gap-13 justify-center items-center py-20 bg-[#f8f8f8]'>
            <div className="text-center mb-[-15px]">
                <h2 className='text-[50px] truculenta font-medium'>{dict.home.whyChooseUs}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                    {dict.home.whyChooseUsSubtitle}
                </p>
            </div>
            <DriverProfessionals 
            path={"/booking.png"} 
            alt={dict.home.coverageAlt}
            title= {dict.home.coverageTitle} 
            content={dict.home.coverageText}
            />
            <DriverProfessionals 
            flip={"md:flex-row-reverse lg:pl-20 gap:15"}
            path={"/driver.png"} 
            alt={dict.home.driversAlt}
            title= {dict.home.driversTitle} 
            content={dict.home.driversText}
            />
            <DriverProfessionals 
            path={"/car2.png"} 
            alt={dict.home.fleetAlt}
            title= {dict.home.fleetTitle} 
            content={dict.home.fleetText}
            />
        </div>
        
        <Footer lang={lang} dict={dict.footer} />
    </div>
  )
}
