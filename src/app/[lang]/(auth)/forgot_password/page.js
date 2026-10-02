import { getDictionary } from '../../dictionaries.js'
import ForgotClient from './form';
import { privatePage } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return privatePage({ title: dict.meta.forgotPasswordTitle });
}

export default async function ForgotPasswordPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <ForgotClient dict={dict} lang={lang} />;
}
