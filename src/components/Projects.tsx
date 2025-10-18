"use client";
import { container, child, imageChild } from "@/components/animations/FadeUp"
import { motion } from "framer-motion";
import { Code, Globe, Cpu, Rocket, Palette, Layers } from "lucide-react";



const projects = [
  // projrcts array
  { title: "Portfolio", icon: Code, description: "A sleek personal site built with Next.js and Tailwind CSS.", bg: "/Proj-bg/1.jpg" },
  { title: "AI Chatbot", icon: Globe, description: "Smart chatbot powered by OpenAI API and Next.js backend.", bg: "/Proj-bg/2.jpg" },
  { title: "E-commerce", icon: Palette, description: "Full-stack store with Stripe payments and Next.js backend.", bg: "/Proj-bg/3.jpg" },
  { title: "Dashboard", icon: Cpu, description: "Beautiful UI dashboard using Tailwind and Shadcn components.", bg: "/Proj-bg/4.jpg" },
  { title: "Tracker", icon: Rocket, description: "Tracks product launches with real-time updates.Lorem ipsum", bg: "/Proj-bg/5.jpg" },
  // { title: "Code Snippet Saver", icon: Layers, description: "Save and organize your favorite code snippets easily.", icon: Code, bg: "/Proj-bg/6.jpg" },
];

export default function Projects() {
  return (
    <>
      <section className="relative isolate min-h-screen text-white border-t border-gray-800 pt-12" id="Projects">
        {/* background blobs */}
        <div aria-hidden="true" className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 mt-60">
          <div style={{ clipPath: 'polygon(80% 20%, 100% 55%, 90% 90%, 60% 100%, 45% 75%, 30% 85%, 10% 65%, 0% 25%, 25% 0%, 55% 10%, 80% 20%)', }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#b700ff] to-[#42016d] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75" />
        </div>

        {/* contant container */}
        <div>
          {/* headings */}
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}  className="mx-auto max-w-2xl text-center pb-10">
            <motion.h2 variants={child} className="text-4xl font-semibold tracking-tight text-balance  sm:text-5xl">My Projects</motion.h2>
            <motion.p  variants={child} className="mt-2 text-lg/8 text-gray-400">Aute magna irure deserunt veniam aliqua magna enim voluptate.</motion.p>
          </motion.div>
          {/* projects container */}
          <motion.a href="#" variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} 
           className="flex flex-col lg:flex-row gap-10 lg:gap-3 justify-center items-center w-full lg:h-[90vh] p-4 lg:p-10">
            {projects.map((project, index) => {   
              const Icon = project.icon;         
              return (
                // project card
                <motion.div variants={imageChild} key={index} className="relative group overflow-hidden px-6 py-25 border border-white/30 text-neutral-200 flex flex-col gap-3 justify-center items-center text-center lg:h-full md:w-full lg:hover:w-[300%]  transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)]" >
                  <div className="absolute inset-0 opacity-30 hover:opacity-70 transition duration-500"
                    style={{ backgroundImage: `url(${project.bg})`, backgroundSize: "cover", backgroundPosition: "center", }}>
                  </div>
                  <div className="relative z-10 flex flex-col gap-3 justify-center items-center text-center pointer-events-none">
                    <Icon className="h-6 w-6 " />
                    <h2 className="text-2xl font-semibold">{project.title}</h2>
                    <p className="text-neutral-300 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 ease-out">{project.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.a>
        </div>

        {/* background blobs */}
        <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" >
          <div style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)', }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#b700ff] to-[#77429b]  opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75 " />
        </div>
      </section>
    </>
  );
}
