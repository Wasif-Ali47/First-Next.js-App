import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className="mx-auto mt-1 w-[90%] bg-[#2d014b70] backdrop-blur-xs px-4 py-3 text-[#dddddd] flex justify-between items-center font-bold rounded-4xl  border-1 z-50 fixed top-4 left-1/2 -translate-x-1/2" >
              <a className="text-2xl px-7" href={"/"}>Next App</a>
              <div className="flex gap-15 ">
              <Link href={"/"} className='hover:text-[#9d00ff] transition duration-200 ' >Home</Link>
              <Link href={"/about"} className='hover:text-[#9d00ff] transition duration-200 ' >About</Link>
              <Link href={"/contact"} className='hover:text-[#9d00ff] transition duration-200 ' >Contact</Link>
              </div>
              <div className='flex gap-1'>
              <a href="#" className='bg-[#dddddd] text-[#2d014b] rounded-2xl py-2 px-3 '>Sign in</a>
              <a href="#" className='bg-[#2d014b00] border-1 text-[#dddddd] rounded-2xl py-2 px-3 '>Sign up</a>
              </div>
            </div>
    </>
  )
}
