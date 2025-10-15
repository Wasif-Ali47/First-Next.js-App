import Image from 'next/image';
import React from 'react'
import Footer from '../components/Footer';

export default function About() {

  const skills = [
  { name: 'HTML', icon: "/logos/html.svg", },
  { name: 'CSS', icon: "/logos/css.svg",  },
  { name: 'JavaScript', icon: "/logos/script.svg", },
  { name: 'Tailwind CSS', icon: "/logos/tailwind.svg", },
  { name: 'React JS', icon: "/logos/reactjs.svg", },
  { name: 'Next JS', icon: "/logos/nextjs.svg",  },
  { name: 'Bootstrap', icon: "/logos/bootstrap.svg",},
  { name: 'GSAP', icon: "/logos/gsap.svg", },
];


  return (

    <>
    
     <section className="h-screen w-full flex flex-col items-center justify-center p-12 mt-20 text-start">

      <div className="bg-white max-w-3xl p-8">
        <div className="flex items-center justify-start gap-6">
           <Image
              src="/avatar.svg"
              alt="Profile"
              width={120}
              height={120}
              priority
            />

          <div>
            <h1 className="text-2xl font-bold text-gray-900">Wasif Ali</h1>
            <p className="text-blue-600 text-sm font-medium">Web Developer</p>
          </div>
        </div>

        <p className="mt-6 text-gray-700 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perferendis ad reprehenderit, veritatis sint corporis! Enim iusto vitae assumenda obcaecati eveniet! Consequuntur aut dignissimos obcaecati impedit reprehenderit voluptatibus molestiae inventore!
        </p>
      </div>
  


      <h2 className="text-3xl font-bold mb-10 mt-10">My Skills & Expertise</h2>

      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-15 ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className=" p-3 min-w-3xs hover:scale-110 transition duration-300"
          >
            <div className="flex items-center">
              <Image
              src={skill.icon}
              alt={skill.name}
              width={40}
              height={40}
              className="mr-3"
            />
              <h3 className="text-2xl font-semibold">{skill.name}</h3>
            </div>
            
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </>
  )
}
