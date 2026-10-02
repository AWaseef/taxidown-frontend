'use client';
import React, { useState } from 'react';
import Loginform from '../(auth)/login/form';
import Link from 'next/link';
import Signupform from '../(auth)/signup/form';
import SignupLogin from './form';
import {X} from "lucide-react";

export default function PickLogin({ login, signup, closeModal, lang, submit, onGuest }) {
  const [isLogin, setLogin] = useState(false);
  const [isSignup, setSignup] = useState(false);

  return (
    <div>
      <div className="fixed inset-0 top-0 left-0 z-50 flex items-center justify-center bg-black/60 h-full w-screen">
        {isLogin ? (
          <div className="relative bg-white rounded-md text-center flex justify-center items-center flex-col w-[400px] shadow-2xl h-[500px] bg-[#fcfcfa]">
            <button className='cursor-pointer absolute top-7 right-7' onClick={() => {closeModal();}}><X /></button>
            <h2 className="text-[50px] truculenta font-medium m-6 mt-8">{login.loginTitle}</h2>
            <Loginform
              loginTitle={login.loginTitle}
              em={login.email}
              pass={login.password}
              forgotPassword={login.forgotPassword}
              lang={lang}
              onSuccess={() => {
                setLogin(false);
                setSignup(false);
                closeModal();
              }}
              submit = {submit}
            />
            <div className="text-[13px] mt-2">
              {login.dontHaveAccount}{' '}
              <button
                onClick={()=>{
                  setSignup(true);
                  setLogin(false);
                }}
                className="text-yellow-500 hover:text-yellow-600"
              >
                {login.createAccount}
              </button>
            </div>
          </div>
        ) : isSignup ? (
          <div className="relative bg-white rounded-md text-center flex justify-center items-center flex-col w-[400px] shadow-2xl h-[550px] min-h-max bg-[#fcfcfa]">
            <button className='cursor-pointer absolute top-7 right-7' onClick={() => {closeModal();}}><X /></button>
            <h2 className="text-[50px] truculenta font-medium m-6 mt-8">{signup.signupTitle}</h2>
            <SignupLogin 
            signup={signup} 
            onSuccess={() => {
                setLogin(false);
                setSignup(false);
                closeModal();
              }}
              submit = {submit}
              />
            <div className="text-[13px] mt-2">
              {signup.alreadyHaveAccount}{' '}
              <button
                onClick={()=>{
                  setSignup(false);
                  setLogin(true);
                }}
                className="text-yellow-500 hover:text-yellow-600"
              >
                {signup.loginTitle}
              </button>
            </div>
          </div>
        ) : (
          <div className="relative p-6 rounded-lg shadow-lg text-center w-xs md:w-sm w-full bg-stone-100 py-15">
            <button className='cursor-pointer absolute top-5 right-5' onClick={() => {closeModal();}}><X className='text-sm'/></button>
            <h2 className="text-2xl font-semibold mb-6">{login.loginFirst}</h2>
            <div className="flex flex-col justify-start text-left mb-1">
              <button
                onClick={() => setSignup(true)}
                className="h-11 text-black border border-stone-500 rounded-full text-lg cursor-pointer transition delay-150 duration-300 ease-in-out hover:scale-105 hover:bg-black hover:text-white"
              >
                {login.createAccount}
              </button>
            </div>
            <div className="flex flex-col justify-start text-left mt-3 mb-1">
              <button
                onClick={() => setLogin(true)}
                className="h-11 text-black border border-stone-500 rounded-full text-lg cursor-pointer transition delay-150 duration-300 ease-in-out hover:scale-105 hover:bg-black hover:text-white"
              >
                {login.loginTitle}
              </button>
            </div>
            <div className='px-1 w-full flex items-center justify-center gap-2 my-2 text-stone-900'>
              <div className='w-[40%] h-[1px] bg-stone-300 rounded-full'></div>
              {login.or}
              <div className='w-[40%] h-[1px] bg-stone-300 rounded-full'></div>
            </div>
            
            <div className="flex flex-col justify-start text-left mt-1">
              <button
                onClick={(e) => {closeModal(); submit(e, true);}}
                className="h-11 text-white bg-black border border-stone-500 rounded-full text-lg cursor-pointer transition delay-150 duration-300 ease-in-out hover:scale-105 hover:bg-white hover:text-black p-1"
              >
                {login.continueGuest}
              </button>
              <p className='w-full text-center text-red-600 text-xs mt-1'>{login.guestWarning}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
