import Image from 'next/image'

export default function MySkills() {

    const skills = [
        { name: 'HTML', icon: "/logos/html.svg", },
        { name: 'CSS', icon: "/logos/css.svg", },
        { name: 'JavaScript', icon: "/logos/script.svg", },
        { name: 'Tailwind CSS', icon: "/logos/tailwind.svg", },
        { name: 'React JS', icon: "/logos/reactjs.svg", },
        { name: 'Next JS', icon: "/logos/nextjs.svg", },
        { name: 'Bootstrap', icon: "/logos/bootstrap.svg", },
        { name: 'GSAP', icon: "/logos/gsap.svg", },
    ];

    return (
        <>
            <section className='flex flex-col justify-center items-center min-h-screen border-t border-gray-800'>
                <div className="max-w-2xl text-center py-5">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">My Skills </h2>
                    <p className="mt-2 text-lg/8 text-gray-400"> Orci molestie a eu arcu. Arcu sed malesuada et magna.</p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-15 ">
                    {skills.map((skill, index) => (
                        <div key={index}
                            className="p-3 min-w-3xs hover:scale-110 transition duration-300">
                            <div className="flex items-center">
                                <Image src={skill.icon} alt={skill.name} width={40} height={40} className="mr-3" />
                                <h3 className="mt-2 text-3xl text-gray-400">{skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
