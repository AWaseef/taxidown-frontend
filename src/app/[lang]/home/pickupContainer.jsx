'use client'
import React from 'react'
import Pick from './pick'
import { ArrowBigDownDash } from 'lucide-react'

export default function PickupContainer({dict, lang}) {
  return (
    <div className='relative w-full md:h-screen h-[650px] bg-[url(/home2.png)] bg-cover relative bg-center flex items-center justify-center md:flex-none'>
        <Pick pick={dict.lang.pickupTripNow} oneWay={dict.lang.oneWay} perHour={dict.lang.perHour} pickupLocation={dict.lang.pickupLocation} destination={dict.lang.destination} getOffer={dict.lang.getOffer} login={dict.login} signup={dict.signup} pickdict={dict.pick} lang={lang}/>
        <button 
        onClick={() =>
            document.getElementById("ourservices")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-10 px-5 py-3 bg-orange-500 text-white rounded-3xl shadow-lg hover:text-orange-600 hover:bg-white border-2 border-orange-500 hover:font-semibold cursor-pointer transition group"
        >
        Or Choose One of Our Services 
        <ArrowBigDownDash className="inline-block ml-2 text-lg transform transition-transform duration-300 group-hover:translate-y-1"/>
    </button>
    </div>
  )
}
