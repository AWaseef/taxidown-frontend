import React from 'react'
import { getDictionary } from '../dictionaries'
import BookingForm from './form'
import { privatePage } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return privatePage({ title: dict.meta.bookingsTitle });
}

export default async function Booking({params}) {
    const {lang} = await params
    const dict = await getDictionary(lang)
  return (
    <BookingForm pickup={dict.lang.pickupLocation} destination={dict.lang.destination} durationText={dict.pick.duration} hour={dict.pick.hour} hours={dict.pick.hours} dict={dict.lang} lang={lang} rideText={dict.ride}/>
  )
}
