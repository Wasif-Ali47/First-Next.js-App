"use client";
import { Code, Globe, Cpu, Rocket, Palette, Layers } from "lucide-react";

const projects = [
    {
        title: "Portfolio Website",
        description: "A sleek personal site built with Next.js and Tailwind CSS.",
        icon: Globe,
    },
    {
        title: "AI Chatbot",
        description: "Smart chatbot powered by OpenAI API and React.",
        icon: Cpu,
    },
    {
        title: "E-commerce Store",
        description: "Full-stack store with Stripe payments and Next.js backend.",
        icon: Layers,
    },
    {
        title: "Design Dashboard",
        description: "Beautiful UI dashboard using Tailwind and Shadcn components.",
        icon: Palette,
    },
    {
        title: "Launch Tracker",
        description: "Tracks product launches with real-time updates.",
        icon: Rocket,
    },
    {
        title: "Code Snippet Saver",
        description: "Save and organize your favorite code snippets easily.",
        icon: Code,
    },
];

export default function Projects() {
    return (
<>
<hr />
        <section className="py-16 bg-gray-50 flex justify-center items-center w-full" id="Projects">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-8 text-center">My Projects</h2>
                <div className="flex flex-wrap gap-x-5 gap-y-10  justify-center items-center">
                    {projects.map((project, index) => {
                        const Icon = project.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white px-6 py-10  border border-neutral-400 text-neutral-900 flex flex-col gap-3 justify-center items-center text-center max-w-[17em] rounded-[8px] hover:scale-105 transition duration-200"
                            >
                                <Icon className="w-6 h-6 text-blue-600" />
                                <h2 className="text-2xl font-bold">{project.title}</h2>
                                <p className="text-gray-600 text-sm">{project.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
        </>
    );
}
