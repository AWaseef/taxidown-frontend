import { notFound } from "next/navigation";
import { Roboto } from "next/font/google";
import Consent from "./consent";
import { getDictionary } from "./dictionaries";
import { LOCALES, SITE_NAME, SITE_URL } from "@/lib/seo";
import "../styling/globals.css";
import "./styling/globals.css";

const roboto = Roboto({ subsets: ["latin"], display: "swap", variable: "--font-roboto" });

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!LOCALES.includes(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    title: {
      default: dict.meta.homeTitle,
      template: `%s | ${SITE_NAME}`,
    },
    description: dict.meta.homeDescription,
    robots: { index: true, follow: true },
  };
}

export default async function Layout({ children, params }) {
  const { lang } = await params;
  if (!LOCALES.includes(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className={`h-lvh ${roboto.variable}`}>
      <body className="w-[100vw] h-lvh overflow-x-hidden " wotdisconnected="true" suppressHydrationWarning>
        <section className="w-[100vw] h-lvh overflow-x-hidden " >
          <Consent text={dict.consent.text} accept={dict.consent.accept} reject={dict.consent.reject} more={dict.consent.more} lang={lang} />
          {children}
        </section>
      </body>
    </html>
  )
}
