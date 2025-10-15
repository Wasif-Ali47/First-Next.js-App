import { Mail, Phone, MapPin } from "lucide-react";
import React from 'react'

export default function Form() {
  return (
    <>
      <div className='h-auto w-full flex flex-col justify-center items-center pt-40'>
        <form className='bg-neutral-100 w-[90%] p-6 rounded-b-2xl flex flex-col gap-5 text-start justify-center'>
          <h1 className='text-3xl py-4 font-semibold text-neutral-700'>Send us a message</h1>
          <label htmlFor="Name" className=' text-2xl text-neutral-500'>Name</label>
          <input type="text" name="Name" id='Name' placeholder='Your Name' required className='bg-neutral-300 p-3 rounded-[5px] text-neutral-900 w-full ' />
          <label htmlFor="Email" className=' text-2xl text-neutral-500'>Email</label>
          <input type="email" name="Email" id='Email' placeholder='you@example.com' required className='bg-neutral-300 p-3 rounded-[5px] text-neutral-900 w-full ' />
          <label htmlFor="Message" className=' text-2xl text-neutral-500'>Message</label>
          <textarea name="Message" id='Message' placeholder='Your Message' required rows={5} className='bg-neutral-300 p-3 rounded-[5px] text-neutral-900 w-full '></textarea>
          <button type='submit' className='bg-[#6200a3] text-[#dddddd] backdrop-blur-xs border-1 rounded-2xl py-2 px-7 text-center mt-5 self-start'>Send Message</button>
        </form>


        <div className="space-y-3 text-gray-700 flex flex-col justify-start items-start w-[90%] mt-20">
          <h2 className="text-3xl font-bold mb-3">Get in Touch</h2>

          <p className="flex justify-center items-center gap-2">
            <Mail className="w-5 h-5 text-blue-600" />
            wasif@example.com
          </p>
          <p className="flex justify-center items-center gap-2">
            <Phone className="w-5 h-5 text-blue-600" />
            +92 300 1234567
          </p>
          <p className="flex justify-center items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            Islamabad, Pakistan
          </p>
        </div>

      </div>


    </>
  )
}
