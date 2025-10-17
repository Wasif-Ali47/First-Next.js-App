import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AboutMe() {
    return (
        <>
            <div className="flex flex-col md:flex-row w-full gap-16 items-center justify-center min-h-screen px-6 md:px-12 border-t border-gray-800" id="AboutMe">
                <div className="flex justify-center">
                    <Image
                        src="/about-vector.svg"
                        alt="Team illustration"
                        width={500}
                        height={500}
                        className="w-[80%] sm:w-[400px] md:w-[500px] h-auto"/>
                </div>
                <div className="flex flex-col gap-2 max-w-[600px] text-center md:text-left items-center md:items-start text-white">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance  sm:text-5xl">About ME</h2>
                    <p className="mt-2 text-lg/8 text-gray-300"> Lorem ipsum dolor sit amet consectetur adipisicing elit hic fugiat dicta nobis quas corporis aut fugit placeat, exercitationem alias non. </p>
                    <p className="mt-2 text-lg/8 text-gray-300"> Odio facere molestiae natus hic fugiat dicta nobis quas corporis, asperiores voluptatum cum. Incidunt illo minus fugit maiores. Distinctio, deserunt assumenda.</p>
                    <p className="mt-2 text-lg/8 text-gray-300">Vero corporis aut fugit placeat, exercitationem alias non. Quisquam nihil sunt ullam explicabo libero, adipisci quasi fugit nesciunt! </p>
                    <p className="mt-2 text-lg/8 text-gray-300">Sit amet consectetur adipisicing elit hic fugiat dicta nobis quas corporis aut fugit placeat, exercitationem alias non.</p>
                    <Link href="/about" className="bg-[#6200a3] text-[#dddddd] rounded-2xl py-2 px-7 mt-5 hover:bg-[#4a007d] transition-colors duration-300"> Learn More</Link>
                </div>
            </div>

        </>
    )
}