import HomePage from "./home/home";
import { getDictionary } from "./dictionaries";
import { indexablePage } from "@/lib/seo";

export const dynamic = 'force-static';       // ✅ Force static rendering
export const dynamicParams = false;          // ✅ Only generate the two defined

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'es' },
  ];
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return indexablePage({
    lang,
    title: { absolute: dict.meta.homeTitle },
    description: dict.meta.homeDescription,
  });
}

export default async function Home({params}) {
  return (
    <>
    <HomePage params={await params}/>
    </>
  );
}
