/* eslint-disable react/no-unescaped-entities */
import Navbar from "../home/nav";
import { getDictionary } from '../dictionaries'
import Es from "./es";
import En from "./en";
import Footer from "../home/footer";
import { indexablePage } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return indexablePage({
    lang,
    path: "/terms",
    title: dict.meta.termsTitle,
    description: dict.meta.termsDescription,
  });
}

export default async function TermsPage({params}) {
    const {lang} = await params;
    const dict = await getDictionary(lang); // en
    return (
      <main className="min-h-screen bg-white text-gray-900">
        <Navbar home={dict.lang.home} contactUs={dict.lang.contactUs} loginTitle={dict.lang.loginTitle} bookingTitle={dict.lang.bookingTitle} logoutTitle={dict.lang.logoutTitle} successLogout={dict.lang.LogoutSuccessful} lang={lang}/>
        {/* Header / Hero */}
        
        {lang === 'es'?
        <Es/>:
        <En/>
        }
        <Footer lang={lang} dict={dict.footer}/>
      </main>
    );
  }
  