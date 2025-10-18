"use client";
import { motion,} from "framer-motion";
import { container, child, imageChild } from "@/components/animations/FadeUp"

import Image from 'next/image'

export default function AboutMe() {

//  image div
    const MotionImage = motion(Image);

    return (
        <>
            <div className="flex flex-col md:flex-row w-full gap-16 items-center justify-center min-h-screen px-6 md:px-12 border-t border-gray-800" id="AboutMe">
                {/* image */}
                <motion.div 
                variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }}
                className="flex justify-center">
                    <MotionImage variants={imageChild} src="/about-vector.svg" alt="Team illustration" width={500} height={500} className="w-[80%] sm:w-[400px] md:w-[500px] h-auto"/>
                </motion.div>
                {/*text content */}
                <motion.div
                variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }}
                className="flex flex-col gap-2 max-w-[600px] text-center md:text-left items-center md:items-start text-white">
                    <motion.h2 variants={child} className="text-4xl font-semibold tracking-tight text-balance  sm:text-5xl">About ME</motion.h2>
                    <motion.p  variants={child} className="mt-2 text-lg/8 text-gray-300"> Lorem ipsum dolor sit amet consectetur adipisicing elit hic fugiat dicta nobis quas corporis aut fugit placeat, exercitationem alias non. </motion.p>
                    <motion.p  variants={child} className="mt-2 text-lg/8 text-gray-300"> Odio facere molestiae natus hic fugiat dicta nobis quas corporis, asperiores voluptatum cum. Incidunt illo minus fugit maiores. Distinctio, deserunt assumenda.</motion.p>
                    <motion.p  variants={child} className="mt-2 text-lg/8 text-gray-300">Vero corporis aut fugit placeat, exercitationem alias non. Quisquam nihil sunt ullam explicabo libero, adipisci quasi fugit nesciunt! </motion.p>
                    <motion.p  variants={child} className="mt-2 text-lg/8 text-gray-300">Sit amet consectetur adipisicing elit hic fugiat dicta nobis quas corporis aut fugit placeat, exercitationem alias non.</motion.p>
                    <motion.a  variants={child} href="/about" className="bg-[#6200a3] text-[#dddddd] py-2 px-7 mt-5 hover:bg-[#4a007d] transition-colors duration-300"> Learn More</motion.a>
                </motion.div>
            </div>
        </>
    )
}