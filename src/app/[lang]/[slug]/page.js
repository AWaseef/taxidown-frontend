import { notFound } from "next/navigation";
import { getDictionary } from "../dictionaries";
import LandingPage from "./landing";
import { findLanding, isReady, landingPaths, landings } from "@/lib/landings";
import { LOCALES, indexablePage } from "@/lib/seo";

export const dynamicParams = false;

export async function generateStaticParams() {
  return LOCALES.flatMap((lang) => landings.map((page) => ({ lang, slug: page.slug[lang] })));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const page = findLanding(lang, slug);
  if (!page) return {};
  const content = page[lang];
  const metadata = indexablePage({
    lang,
    path: landingPaths(page),
    title: { absolute: content.title },
    description: content.description,
  });
  if (!isReady(page, lang)) metadata.robots = { index: false, follow: true };
  return metadata;
}

export default async function Landing({ params }) {
  const { lang, slug } = await params;
  const page = findLanding(lang, slug);
  if (!page) notFound();
  const dict = await getDictionary(lang);
  return <LandingPage page={page} lang={lang} dict={dict} />;
}
