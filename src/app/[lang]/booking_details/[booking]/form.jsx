'use client'
import React, { useEffect, useState } from 'react'
import { ArrowLeft, Calendar, MapPin, Phone, User, Mail } from "lucide-react"
import { MapPinIcon} from "@heroicons/react/24/solid"
import { Timer } from 'lucide-react'
import Loading from '@/app/loading'

export default function Form({lang, pickupDict, bookingNum}) {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true) ;
  const [notFound, setNotFound] = useState(false);

  useEffect(()=>{
    const getDetails = async () =>{
      const response = await fetch (`/api/booking_details/${encodeURI(bookingNum)}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        },
      })
      if(response.status === 200){
        const data = await response.json()
        setDetails(data[0]);
        setIsLoading(false);
      }else if(response.status === 404){
        setIsLoading(false);
        setNotFound(true);
      }
    } 
    getDetails();
  },[])

  if (isLoading) {
    return (
      <Loading />
    )
  }
  if(notFound){
  return(
    <div className="w-screen flex flex-col items-center justify-center h-screen bg-white">
      <div className="flex items-center space-x-4">
        <h1 className="border-r pr-4 text-2xl font-semibold text-black ml-10">404</h1>
        <div className="text-gray-700">
          <p className="text-lg">{pickupDict.notFound}</p>
        </div>
      </div>
    </div>
  )}

  return (
    <div className="flex items-center justify-center w-max" >
      <div className=" md:bg-white rounded-xl md:shadow p-6 w-90 max-w-[95%] md:w-120">
        <div className='md:flex md:justify-between mt-2 mx-2'>
        <h2 className="text-green-600 text-xl font-semibold mb-4">{pickupDict.booking} # {bookingNum}</h2>
        <h3 className="ml-3 text-[18px] font-bold mr-2">{details.status}</h3>
        </div>
          <div className="space-y-4 m-4">
          <div className="flex gap-4 w-100 max-w-[90%]">
            <div className="flex flex-col items-center pt-2">
            {details.booking.dropoff_location ? (
                <>
                <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-white shadow-md"></div>
                <div className="w-px h-14 bg-gray-300 my-2"></div>
                <MapPinIcon className="w-4 h-4 text-red-500" />
                </>
            ):
            <MapPinIcon className="w-5 h-7 text-gray-700" />
            }
            </div>
            <div className="flex flex-col h-full gap-4">
            <div className="flex items-center space-x-3">
              <div>
                <p className="font-medium">{pickupDict.pickupLocation}</p>
                <p className="text-gray-600">{details.booking.pickup_location || "Not provided"}</p>
              </div>
            </div>
            {details.booking.dropoff_location &&
            <div className="flex items-center space-x-3">
              <div>
                <p className="font-medium">{pickupDict.destination}</p>
                <p className="text-gray-600">{details.booking.dropoff_location || "Not provided"}</p>
              </div>
            </div>
            }
            </div>
           </div>
            {details.booking.phone &&
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-700" />
              <div>
                <p className="font-medium">{pickupDict.phone}</p>
                <p className="text-gray-600">{details.booking.phone_number || "Not provided"}</p>
              </div>
            </div>
            }

            {details.booking.email &&
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-700" />
              <div>
                <p className="font-medium">{pickupDict.email}</p>
                <p className="text-gray-600">{details.booking.phone || "Not provided"}</p>
              </div>
            </div>
            }

            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-gray-700" />
              <div>
                <p className="font-medium">{pickupDict.pickTime}</p>
                <p className="text-gray-600">{details.booking.datetime_pickup.split("T")[0]}{'\u00A0'}{'\u00A0'}{'\u00A0'}{details.booking.datetime_pickup.split("T")[1]}</p>
              </div>
            </div>
            {details.duration >= 1 &&
            <div className="flex items-center space-x-3">
              <Timer className="w-6 h-6 text-stone-700" />
              <div>
                <p className="font-medium">{pickupDict.duration}</p>
                <p className="text-gray-600">{details.duration} {details.duration ==1 ? pickupDict.hour : pickupDict.hours}</p>
              </div>
            </div>
            }
            {details.booking.return_ride ?
            <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-700" />
                <div>
                <p className="font-medium">{pickupDict.returnTime}</p>
                <p className="text-gray-600">{details.booking.datetime_return}</p>
                </div>
            </div>
            : <></>
            }
            <div className="w-full flex justify-between items-center pr-2 rounded-lg border-gray-200">
              <p className="text-orange-500 text-lg font-medium">{pickupDict.totalPrice}</p>
              <p className="text-orange-500 text-xl font-bold">€{details.price}</p>
            </div>
          </div>
        </div>        
    </div>
  )
}
