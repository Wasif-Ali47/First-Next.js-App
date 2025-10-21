"use client";
import { container, child, childProjects, } from "@/components/animations/FadeUp"
import { motion } from "framer-motion";
import { Code, Globe, Cpu, Rocket, Palette, Layers } from "lucide-react";
import { Blobs1, Blobs3 } from "../animations/Backgrounds";



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
      <section className="relative isolate min-h-screen text-white border-y border-white/30 py-12 " id="Projects">
        {/* background blobs */}
        <Blobs1/>

        {/* contant container */}
        <div>
          {/* headings */}
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}  className="mx-auto max-w-2xl text-center pb-10">
            <motion.h2 variants={child} className="text-4xl font-semibold tracking-tight text-balance  sm:text-5xl">My Creations</motion.h2>
            <motion.p  variants={child} className="mt-2 text-lg/8 text-gray-400">Aute magna irure deserunt veniam aliqua magna enim voluptate.</motion.p>
          </motion.div>
          {/* projects container */}
          <motion.a href="#" variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} 
           className="flex flex-col lg:flex-row gap-10 lg:gap-3 justify-center items-center w-full lg:h-[90vh] p-4 lg:p-10">
            {projects.map((project, index) => {   
              const Icon = project.icon;         
              return (
                // project card
                <motion.div variants={childProjects} key={index} className="relative group overflow-hidden px-6 py-25 border border-white/30 text-neutral-200 flex flex-col gap-3 justify-center items-center text-center lg:h-full md:w-full lg:hover:w-[350%]  transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)]" >
                  <img src={project.bg} alt={project.bg} className="absolute w-full h-full opacity-30 hover:opacity-70 transition duration-500 object-cover object-center lg:saturate-0 lg:group-hover:saturate-100 " />
                  <div className="relative z-[1] flex flex-col gap-3 justify-center items-center text-center pointer-events-none">
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
        <Blobs3/>
      </section>
    </>
  );
}
