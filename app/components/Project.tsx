"use client";

import Image from "next/image";
import { Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Barbearia do Denius",
    description:
      "Website profissional para barbearia com design moderno, responsivo e foco em conversão.",
    image: "/barbearia.png",
    github: "https://github.com/Dyego27/DgBarbeariaAcaiteria",
    demo: "https://barbeariadodenius.vercel.app/",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <section className="w-full bg-[#070816] text-white py-24 px-6" id="project">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-medium tracking-[0.2em] uppercase bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Work
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">Projects</h2>

          <p className="text-gray-400 mt-6 max-w-xl text-lg">
            A collection of projects showcasing my skills in modern web
            development, from concept to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#0b0f1f] border border-white/10 hover:border-purple-500/40 transition-all duration-500"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1f] via-[#0b0f1f]/60 to-transparent"></div>
              </div>

              <div className="relative p-8">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-sm text-cyan-400">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 hover:border-white/40 transition text-sm"
                  >
                    <Github size={16} />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 transition"
                  >
                    <ArrowUpRight size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
