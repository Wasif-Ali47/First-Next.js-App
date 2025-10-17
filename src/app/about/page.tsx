import Image from 'next/image';
import React from 'react'

export default function About() {

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

      <section className=" bg-gray-900 min-h-screen w-full flex flex-col items-center justify-center p-12 pt-40 text-start">
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


          <div className="flex items-center justify-start gap-6 max-w-[90%] p-8">
            <div>
              <Image
              src="/avatar.svg"
              alt="Profile"
              width={200}
              height={200}
              priority
            /><h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-3xl">Wasif Ali</h2>

              <p className="text-blue-600 text-sm font-medium">Web Developer</p>
</div>
            <div>
           


              <ul className=" h-72 overflow-y-scroll space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400 pt-4">
                <li>
                  Porfession
                  <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                    <li className="mt-4 text-lg/8 text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perferendis dignissimos obcaecati impedit reprehenderit voluptatibus molestiae inventore!
                    </li>
                    <li className="mt-4 text-lg/8 text-gray-400">
                      Jbcaecati eveniet! Consequuntur aut dignissimos obcaecati impedit reprehenderit voluptatibus molestiae inventore!
                    </li>
                    <li className="mt-4 text-lg/8 text-gray-400">
                      Ritatis sint corporis! Enim iusto vitae assumenda obcaecati eveniet! Consequuntur aut dignissimos obcaecati impedi
                    </li>
                  </ol>
                </li>
                <li>
                  Background
                  <ul className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                    <li className="mt-4 text-lg/8 text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perferendis dignissimos obcaecati impedit reprehenderit voluptatibus molestiae inventore!
                    </li>
                    <li className="mt-4 text-lg/8 text-gray-400">
                      Jbcaecati eveniet! Consequuntur aut dignissimos obcaecati impedit reprehenderit voluptatibus molestiae inventore!
                    </li>
                    <li className="mt-4 text-lg/8 text-gray-400">
                      Ritatis sint corporis! Enim iusto vitae assumenda obcaecati eveniet! Consequuntur aut dignissimos obcaecati impedi
                    </li>
                  </ul>
                </li>
                <li>
                  List item three
                  <ul className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                    <li className="mt-4 text-lg/8 text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perferendis dignissimos obcaecati impedit reprehenderit voluptatibus molestiae inventore!
                    </li>
                    <li className="mt-4 text-lg/8 text-gray-400">
                      Jbcaecati eveniet! Consequuntur aut dignissimos obcaecati impedit reprehenderit voluptatibus molestiae inventore!
                    </li>
                    <li className="mt-4 text-lg/8 text-gray-400">
                      Ritatis sint corporis! Enim iusto vitae assumenda obcaecati eveniet! Consequuntur aut dignissimos obcaecati impedi
                    </li>
                  </ul>
                </li>
              </ul>


            </div>

          </div>


{/* skills */}
        <div className="mx-auto max-w-2xl text-center py-5">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">My Skills </h2>
          <p className="mt-2 text-lg/8 text-gray-400"> Orci molestie a eu arcu. Arcu sed malesuada et magna.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-15 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-3 min-w-3xs hover:scale-110 transition duration-300"
            >
              <div className="flex items-center">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="mr-3"
                />
                <h3 className="mt-2 text-3xl text-gray-400">{skill.name}</h3>
              </div>

            </div>
          ))}
        </div>
      </section>

    </>
  )
}
