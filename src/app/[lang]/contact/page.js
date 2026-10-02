import React from 'react'
import { getDictionary } from '../dictionaries';
import { privatePage } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return privatePage({ title: dict.meta.contactTitle });
}

export default function Contact() {
  return (
    <div>page</div>
  )
}
