import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AboutMe() {
    return (
        <>
            <div className='flex w-full gap-16 items-center justify-center h-[100vh]' id='AboutMe'>
                <div>
                    <Image
                        src="/about-vector.svg"
                        alt="Team illustration"
                        width={600}
                        height={600}
                    />
                </div>
                <div className='flex flex-col gap-2 max-w-[600px] items-start'>
                    <h1 className='text-4xl font-bold pb-5'>About Me</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit hic fugiat dicta nobis quas corporis  aut fugit placeat, exercitationem alias non.</p>
                    <p>Odio facere molestiae natus hic fugiat dicta nobis quas corporis, asperiores voluptatum cum. Incidunt illo minus fugit maiores. Distinctio, deserunt assumenda.</p>
                    <p>Vero corporis  aut fugit placeat, exercitationem alias non. Quisquam nihil sunt ullam explicabo libero, adipisci quasi fugit nesciunt!</p>
                    <p>Sit amet consectetur adipisicing elit hic fugiat dicta nobis quas corporis  aut fugit placeat, exercitationem alias non.</p>
                    <Link href="/about" className='bg-[#6200a3] text-[#dddddd] backdrop-blur-xs border-1 rounded-2xl py-2 px-7 text-center mt-5'>Learn More</Link>
                </div>
            </div>
        </>
    )
}