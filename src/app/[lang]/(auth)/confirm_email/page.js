import ConfirmClient from './form';
import { getDictionary } from '../../dictionaries.js'
import { privatePage } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return privatePage({ title: dict.meta.confirmEmailTitle });
}

export default async function ConfirmEmailPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <ConfirmClient lang={lang} dict={dict.confirmEmail} />;
}
