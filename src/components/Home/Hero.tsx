"use client";
import { motion } from "framer-motion";
import { containerHero, child } from "@/components/animations/FadeUp"
import Link from 'next/link'
import { Blobs1, Blobs2, GridPattern } from "../animations/Backgrounds";

export default function Hero() {
  return (
      <div className=" min-h-screen relative isolate px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center border-b border-white/30">
        {/* Background blobs */}  
        <GridPattern/>      
        <Blobs1/>
        {/* content container */}
        <div className="mx-auto max-w-4xl py-20 md:py-40 lg:py-40">
          {/* main content */}
          <motion.div variants={containerHero} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className="text-center flex justify-center items-center flex-col">
            {/* main Headings */}
            <div className="text-start w-fit">
            <motion.h3 variants={child} className='text-3xl font-semibold tracking-tight text-balance text-neutral-300 sm:text-2xl'>I'M</motion.h3>
            <motion.h3 variants={child} className="text-6xl tracking-tight text-balance sm:text-[10rem] text-gray-200 mb-2 font-semibold">WASIF ALI</motion.h3>
            <motion.h3 variants={child} className='text-3xl font-semibold tracking-tight text-balance text-neutral-300 sm:text-2xl'>a web developer.</motion.h3>
            </div>
            <motion.p  variants={child} className="mt-8 text-[0.8rem] font-medium text-pretty text-gray-400 sm:text-[1rem]"> I love turning ideas into clean, modern web experiences. Whether it’s coding sleek UIs, experimenting with design, Always improving, always curious — just tryna be better than yesterday.</motion.p>
            {/* action buttons */}
            <motion.div  variants={child} className="mt-10 flex items-center justify-center gap-x-3">
              <Link href="#Projects" className='bg-[#42016d] backdrop-blur-xs border-1 text-[#dddddd]  py-2 px-7 text-center'>My Creations </Link>
              <Link href="#AboutMe"  className='bg-[#2d014b00] border-1 text-[#dddddd] py-2 px-8 '>What You Get</Link>
            </motion.div>
          </motion.div>
        </div>
        {/* Background blobs */}
        <Blobs2/>
      </div>

  )
}
