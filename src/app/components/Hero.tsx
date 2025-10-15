import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (
        <div className="bg-[url('/hero-bg1.jpg')] bg-cover bg-center h-screen w-full flex justify-center items-center text-[#ffffff]">
            <div className='flex flex-col gap-4 px-10 max-w-[900px] text-center items-center'>
                <h1 className='text-5xl font-bold '>First <span className='text-[#9d00ff]'>Next.js</span> App</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsam unde quaerat veritatis, officiis laboriosam nobis dicta rem ullam velilloquas voluptatem velit consequatur alias iste corporis totam commodi velilloquas voluptatem velit.</p>
                <div className='flex gap-3'>
                    <Link href="#Projects" className='bg-[#42016d] backdrop-blur-xs border-1 rounded-2xl py-2 px-7 text-center'>Projects</Link>
                    <Link href="#AboutMe" className='bg-[#2d014b00] border-1 text-[#dddddd] rounded-2xl py-2 px-8 '>About</Link>
                </div>
            </div>
        </div>
    )
}
