"use client";
import { Code, Globe, Cpu, Rocket, Palette, Layers } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek personal site built with Next.js and Tailwind CSS.",
    icon: Globe,
    bg: "/Proj-bg/1.jpg"
  },
  {
    title: "AI Chatbot",
    description: "Smart chatbot powered by OpenAI API and React.",
    icon: Cpu,
    bg: "/Proj-bg/2.jpg"
  },
  {
    title: "E-commerce Store",
    description: "Full-stack store with Stripe payments and Next.js backend.",
    icon: Layers,
    bg: "/Proj-bg/3.jpg"
  },
  {
    title: "Design Dashboard",
    description: "Beautiful UI dashboard using Tailwind and Shadcn components.",
    icon: Palette,
    bg: "/Proj-bg/4.jpg"
  },
  {
    title: "Launch Tracker",
    description: "Tracks product launches with real-time updates.",
    icon: Rocket,
    bg: "/Proj-bg/5.jpg"
  },
  {
    title: "Code Snippet Saver",
    description: "Save and organize your favorite code snippets easily.",
    icon: Code,
    bg: "/Proj-bg/6.jpg"
  },
];

export default function Projects() {
  return (
    <>

      <section className="py-16 flex justify-center items-center w-full h-fit text-white border-t border-gray-800" id="Projects">
        <div className="max-w-[95%] md:max-w-[90%] mx-auto">
          <div className="mx-auto max-w-2xl text-center pb-10">
            <h2 className="text-4xl font-semibold tracking-tight text-balance  sm:text-5xl">My Projects</h2>
            <p className="mt-2 text-lg/8 text-gray-400">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
          </div>
          <a
          href="#"
          className="flex flex-wrap gap-10 justify-center items-center">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="relative group overflow-hidden bg-black/10 px-6 py-20  border border-white/30 text-neutral-200 flex flex-col gap-3 justify-center items-center text-center min-w-1/2 h-1/2 transition duration-200"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-50  hover:scale-105 transition duration-500"
                    style={{
                      backgroundImage: `url(${project.bg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="relative z-10 flex flex-col gap-3 justify-center items-center text-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <p className="text-neutral-300 text-sm">{project.description}</p>
                  </div>
                </div>
              );
            })}
          </a>
        </div>
      </section>
    </>
  );
}
