// app/[lang]/reset-password/page.js
import { getDictionary } from '../../dictionaries.js'
import ResetClient from './form';
import { privatePage } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return privatePage({ title: dict.meta.resetPasswordTitle });
}

export default async function ResetPasswordPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <ResetClient dict={dict} lang={lang} />;
}
