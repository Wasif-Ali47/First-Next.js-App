// import { Mail, Phone, MapPin } from "lucide-react";
// import React from 'react'

// export default function Form() {
//   return (
//     <>
//       <div className='h-auto w-full flex flex-col justify-center items-center pt-40'>
//         <form className='bg-neutral-100 w-[90%] p-6 rounded-b-2xl flex flex-col gap-5 text-start justify-center'>
//           <h1 className='text-3xl py-4 font-semibold text-neutral-700'>Send us a message</h1>
//           <label htmlFor="Name" className=' text-2xl text-neutral-500'>Name</label>
//           <input type="text" name="Name" id='Name' placeholder='Your Name' required className='bg-neutral-300 p-3 rounded-[5px] text-neutral-900 w-full ' />
//           <label htmlFor="Email" className=' text-2xl text-neutral-500'>Email</label>
//           <input type="email" name="Email" id='Email' placeholder='you@example.com' required className='bg-neutral-300 p-3 rounded-[5px] text-neutral-900 w-full ' />
//           <label htmlFor="Message" className=' text-2xl text-neutral-500'>Message</label>
//           <textarea name="Message" id='Message' placeholder='Your Message' required rows={5} className='bg-neutral-300 p-3 rounded-[5px] text-neutral-900 w-full '></textarea>
//           <button type='submit' className='bg-[#6200a3] text-[#dddddd] backdrop-blur-xs border-1 rounded-2xl py-2 px-7 text-center mt-5 self-start'>Send Message</button>
//         </form>


// <div className="space-y-3 text-gray-700 flex flex-col justify-start items-start w-[90%] mt-20">
//   <h2 className="text-3xl font-bold mb-3">Get in Touch</h2>

//   <p className="flex justify-center items-center gap-2">
//     <Mail className="w-5 h-5 text-blue-600" />
//     wasif@example.com
//   </p>
//   <p className="flex justify-center items-center gap-2">
//     <Phone className="w-5 h-5 text-blue-600" />
//     +92 300 1234567
//   </p>
//   <p className="flex justify-center items-center gap-2">
//     <MapPin className="w-5 h-5 text-blue-600" />
//     Islamabad, Pakistan
//   </p>
// </div>

//       </div>


//     </>
//   )
// }


import { Mail, MapPin, Phone } from 'lucide-react'
import { Blobs1 } from '../animations/Backgrounds'

export default function Form() {
  return (
    <div className="min-h-screen relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <Blobs1 />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#de70ff] to-[#640681] opacity-20 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Contact sales</h2>
        <p className="mt-2 text-lg/8 text-gray-400">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
      </div>
      <form className="max-w-md mx-auto pt-3">
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#5c0099] focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-[#61099bea] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#5c0099] focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-[#5c0099] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last Name
            </label>
          </div>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#5c0099] focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-[#5c0099] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="company"
            id="company"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#5c0099] focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="company"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-[#5c0099] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Company
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="tel"
            name="phone"
            id="phone"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#5c0099] focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="phone"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-[#5c0099] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <textarea
            name="message"
            id="message"
            rows={4}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#5c0099] focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none"
            placeholder=" "
            required
          ></textarea>
          <label
            htmlFor="message"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-[#5c0099] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Message
          </label>
        </div>

        <button
          type="submit"
          className='bg-[#5c00996e] hover:bg-[#37015e88] backdrop-blur-xs border border-[#ffffff3f] text-[#dddddd] py-2 px-7 text-center transition duration-200'  >
          Let’s Talk
        </button>
      </form>

      <div className="space-y-3 text-white flex flex-col justify-center items-center w-full mt-20">
        <div className="mx-auto max-w-2xl text-center ">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Get in Touch</h2>
          <p className="mt-2 text-lg/8 text-gray-400">Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.</p>
        </div>
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
  )
}
