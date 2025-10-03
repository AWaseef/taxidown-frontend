'use server';
import { NextResponse } from 'next/server';

export async function GET(request, {params}){
    const {bookingNumber} = await params;
    try{
        const response = await fetch(`${process.env.API_URL}api/trips/rides/booking-details/${bookingNumber}/`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            const details = await response.json();
            return NextResponse.json(details);
        }else 
            return NextResponse.json({ message: 'error' }, { status: response.status })
    }catch(err){
        return NextResponse.json({ message: err }, { status: 500})
    }
}