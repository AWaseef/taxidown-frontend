import React from 'react'
import { getDictionary } from '../../dictionaries';
import Form from './form';
import LanguageSwitcher from '../../switcher';

export default async function Details({params}) {
  const {lang, booking} = await params;
  const dict = await getDictionary(lang);
  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-100">
      <div className='fixed top-10 right-20 md:right-15'>
        <LanguageSwitcher />
      </div>
      <Form lang={lang} pickupDict={dict.pick} bookingNum={booking}/>
    </div>
  )
}
